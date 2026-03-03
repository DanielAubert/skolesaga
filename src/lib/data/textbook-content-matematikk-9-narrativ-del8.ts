/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 8
 *
 * Kapittel 8.1: Polygoner og vinkelsummer
 * Kapittel 8.2: Kongruenssetningene (SSS, SAS, ASA)
 * Kapittel 8.3: Trekantutlikheten og mediansetninger
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1 NARRATIV: Polygoner og vinkelsummer
// ============================================================================

export const CHAPTER_9_8_1_NARRATIV: TextbookChapter = {
  id: '9-8-1-narrativ',
  courseId: '9',
  chapterNumber: '8.1',
  title: 'Polygoner og vinkelsummer',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av polygoner -- fra trekanter og firkanter til mangekanter med mange sider -- der vi oppdager en elegant formel for vinkelsummer og forstår sammenhengen mellom indre og ytre vinkler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  linkedChapterId: '9-8-1',
  content: [
    {
      id: '9-8-1-n-intro',
      type: 'text',
      content: `## Mangekantenes verden

Se deg rundt. Vinduet ditt er en firkant. Stoppskiltet utenfor er en åttekant. Bikubene i naturen er sekskanter. Fotballen du sparker er dekket av femkanter og sekskanter. Alle disse figurene er **polygoner** -- lukkede figurer med rette sider.

Men hva vet vi egentlig om vinklene i disse figurene? Du vet kanskje at vinkelsummen i en trekant er $180°$, og i en firkant $360°$. Men hva med en femkant? En sekskant? En 100-kant? Det viser seg at det finnes en elegant formel som fungerer for alle polygoner -- og den bygger på en enkel, men genial idé.`,
    },

    {
      id: '9-8-1-n-section1',
      type: 'text',
      content: `## Hva er en polygon?

En **polygon** (eller mangekant) er en lukket, plan figur avgrenset av rette linjestykker som vi kaller **sider**. Polygoner navngis etter antall sider:

| Sider | Navn | Eksempel |
|-------|------|----------|
| 3 | Trekant | Veiskilt |
| 4 | Firkant | Vindu |
| 5 | Femkant (pentagon) | Fotballmønster |
| 6 | Sekskant (heksagon) | Bikube |
| 8 | Åttekant (oktogon) | Stoppskilt |
| $n$ | $n$-kant | |

Noen viktige begreper: En **regulær polygon** har alle sider like lange og alle vinkler like store -- som en likesidet trekant eller et kvadrat. En **konveks polygon** har alle indre vinkler under $180°$ -- den «buler ikke innover». En **diagonal** er et linjestykke mellom to hjørner som ikke er naboer.`,
    },

    {
      id: '9-8-1-n-section2',
      type: 'text',
      content: `## Vinkelsummen -- den geniale ideen

Her er den store ideen: fra ett hjørne i en polygon kan du trekke diagonaler til alle de andre hjørnene (bortsett fra nabohjørnene). Dette deler polygonen inn i **trekanter**. Og vinkelsummen i en trekant er alltid $180°$.

En firkant ($n = 4$) kan deles i $2$ trekanter: $2 \\cdot 180° = 360°$.
En femkant ($n = 5$) kan deles i $3$ trekanter: $3 \\cdot 180° = 540°$.
En sekskant ($n = 6$) kan deles i $4$ trekanter: $4 \\cdot 180° = 720°$.

Ser du mønsteret? En $n$-kant deles i $(n - 2)$ trekanter. Dermed er vinkelsummen:

$$S = (n - 2) \\cdot 180°$$

Denne formelen er utrolig nyttig. Den fungerer for alle konvekse polygoner, uansett størrelse. En 100-kant har vinkelsummen $(100 - 2) \\cdot 180° = 17\\,640°$.

I en **regulær** $n$-kant er alle vinklene like store, så hver indre vinkel er:

$$v = \\frac{(n - 2) \\cdot 180°}{n}$$

For en regulær sekskant: $v = \\frac{4 \\cdot 180°}{6} = \\frac{720°}{6} = 120°$. Det er nettopp derfor bier bygger sekskantede celler -- $120°$-vinkler passer perfekt sammen uten mellomrom!`,
    },

    {
      id: '9-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkelsummer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-1-n-quiz1-q0',
            task: 'Hva er vinkelsummen i en åttekant ($n = 8$)?',
            options: [
              { id: 'a', text: '$720°$', isCorrect: false },
              { id: 'b', text: '$1080°$', isCorrect: true },
              { id: 'c', text: '$1440°$', isCorrect: false },
              { id: 'd', text: '$900°$', isCorrect: false },
            ],
            solution: '$S = (8 - 2) \\cdot 180° = 6 \\cdot 180° = 1080°$.',
          },
          {
            id: '9-8-1-n-quiz1-q1',
            task: 'Hvor stor er hver vinkel i en regulær femkant?',
            options: [
              { id: 'a', text: '$100°$', isCorrect: false },
              { id: 'b', text: '$108°$', isCorrect: true },
              { id: 'c', text: '$120°$', isCorrect: false },
              { id: 'd', text: '$72°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen er $(5-2) \\cdot 180° = 540°$. Hver vinkel: $\\frac{540°}{5} = 108°$.',
          },
          {
            id: '9-8-1-n-quiz1-q2',
            task: 'En firkant har tre vinkler: $80°$, $110°$ og $95°$. Hvor stor er den fjerde vinkelen?',
            options: [
              { id: 'a', text: '$85°$', isCorrect: false },
              { id: 'b', text: '$75°$', isCorrect: true },
              { id: 'c', text: '$65°$', isCorrect: false },
              { id: 'd', text: '$90°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en firkant er $360°$. Fjerde vinkel $= 360° - 80° - 110° - 95° = 75°$.',
          },
        ],
      },
    },

    {
      id: '9-8-1-n-section3',
      type: 'text',
      content: `## Ytre vinkler -- en runde rundt polygonen

En **ytre vinkel** er supplementvinkelen til en indre vinkel. Altså: ytre vinkel $= 180° - $ indre vinkel.

Tenk deg at du går langs kantene av en polygon. Ved hvert hjørne snur du deg litt -- den vinkelen du snur er den ytre vinkelen. Når du har gått hele veien rundt og er tilbake der du startet, har du snudd deg nøyaktig en hel runde. Derfor gjelder en universell regel:

$$\\text{Sum av ytre vinkler} = 360°$$

Dette gjelder for **alle** konvekse polygoner -- uansett om de har 3, 8, eller 1000 sider!

For en regulær $n$-kant er alle ytre vinklene like store: $\\frac{360°}{n}$.

Denne regelen gir oss et elegant triks for å finne antall sider: Hvis du vet at den indre vinkelen i en regulær polygon er $150°$, er den ytre vinkelen $180° - 150° = 30°$. Antall sider er da $\\frac{360°}{30°} = 12$ -- en tolvkant!`,
    },

    {
      id: '9-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på ytre vinkler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-1-n-quiz2-q0',
            task: 'Hvor stor er hver ytre vinkel i en regulær tikant (10-kant)?',
            options: [
              { id: 'a', text: '$30°$', isCorrect: false },
              { id: 'b', text: '$36°$', isCorrect: true },
              { id: 'c', text: '$40°$', isCorrect: false },
              { id: 'd', text: '$144°$', isCorrect: false },
            ],
            solution: 'Ytre vinkel $= \\frac{360°}{10} = 36°$.',
          },
          {
            id: '9-8-1-n-quiz2-q1',
            task: 'En regulær polygon har indre vinkler på $140°$. Hvor mange sider har den?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$10$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: 'Ytre vinkel $= 180° - 140° = 40°$. Antall sider $= \\frac{360°}{40°} = 9$ (en nikant).',
          },
          {
            id: '9-8-1-n-quiz2-q2',
            task: 'Vinkelsummen i en polygon er $2340°$. Hvor mange sider har den?',
            options: [
              { id: 'a', text: '$13$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: true },
              { id: 'c', text: '$14$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: '$(n - 2) \\cdot 180° = 2340°$. $n - 2 = \\frac{2340}{180} = 13$. $n = 15$.',
          },
        ],
      },
    },

    {
      id: '9-8-1-n-section4',
      type: 'text',
      content: `## Diagonaler -- linjer på tvers

En **diagonal** er et linjestykke mellom to hjørner som ikke er nabohjørner. Hvor mange diagonaler har en polygon? Fra hvert av de $n$ hjørnene kan du trekke diagonaler til $(n - 3)$ andre hjørner (ikke til seg selv eller de to naboene). Det gir $n(n-3)$ retninger, men hver diagonal telles to ganger (en gang fra hvert endepunkt). Antall diagonaler er:

$$D = \\frac{n(n - 3)}{2}$$

For en sekskant: $D = \\frac{6 \\cdot 3}{2} = 9$ diagonaler.
For en tolvkant: $D = \\frac{12 \\cdot 9}{2} = 54$ diagonaler.

Diagonaler er viktige fordi de deler polygonen inn i trekanter -- og det er nettopp slik vi utledet vinkelsumformelen!`,
    },

    {
      id: '9-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på diagonaler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-1-n-quiz3-q0',
            task: 'Hvor mange diagonaler har en åttekant?',
            options: [
              { id: 'a', text: '$16$', isCorrect: false },
              { id: 'b', text: '$20$', isCorrect: true },
              { id: 'c', text: '$24$', isCorrect: false },
              { id: 'd', text: '$28$', isCorrect: false },
            ],
            solution: '$D = \\frac{8 \\cdot (8 - 3)}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20$.',
          },
          {
            id: '9-8-1-n-quiz3-q1',
            task: 'Hvor mange diagonaler har en trekant?',
            options: [
              { id: 'a', text: '$0$', isCorrect: true },
              { id: 'b', text: '$1$', isCorrect: false },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$2$', isCorrect: false },
            ],
            solution: '$D = \\frac{3 \\cdot (3-3)}{2} = \\frac{3 \\cdot 0}{2} = 0$. En trekant har ingen diagonaler -- alle sider forbinder nabohjørner.',
          },
        ],
      },
    },

    {
      id: '9-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En **polygon** er en lukket figur med rette sider. En **regulær polygon** har like sider og like vinkler.

**Vinkelsummen** i en $n$-kant: $S = (n - 2) \\cdot 180°$

**Hver indre vinkel** i en regulær $n$-kant: $v = \\frac{(n-2) \\cdot 180°}{n}$

**Sum av ytre vinkler**: Alltid $360°$ for enhver konveks polygon.

**Hver ytre vinkel** i en regulær $n$-kant: $\\frac{360°}{n}$

**Antall diagonaler** i en $n$-kant: $D = \\frac{n(n-3)}{2}$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2 NARRATIV: Kongruenssetningene (SSS, SAS, ASA)
// ============================================================================

export const CHAPTER_9_8_2_NARRATIV: TextbookChapter = {
  id: '9-8-2-narrativ',
  courseId: '9',
  chapterNumber: '8.2',
  title: 'Kongruenssetningene (SSS, SAS, ASA)',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av kongruens -- hva det betyr at to figurer er helt like -- og de tre kongruenssetningene som lar oss bevise det med bare tre opplysninger.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  linkedChapterId: '9-8-2',
  content: [
    {
      id: '9-8-2-n-intro',
      type: 'text',
      content: `## Når to figurer er helt like

Forestill deg at du skal bygge to nøyaktig like trekantede hyller. Du har målt den ene grundig: sidene er $5$ cm, $7$ cm og $8$ cm. For å lage den andre hyllen -- må du da måle alle tre sidene OG alle tre vinklene?

Det viser seg at svaret er nei. I mange tilfeller holder det med bare **tre opplysninger** for å fastslå at to trekanter er nøyaktig like. Denne innsikten gir oss de tre **kongruenssetningene** -- kraftige verktøy for geometriske bevis.

To figurer er **kongruente** når de har nøyaktig samme form og størrelse. Den ene kan legges oppå den andre (eventuelt etter speiling eller rotasjon) slik at de dekker hverandre helt. Vi skriver $\\triangle ABC \\cong \\triangle DEF$.`,
    },

    {
      id: '9-8-2-n-section1',
      type: 'text',
      content: `## SSS -- tre sider er nok

Den første kongruenssetningen er den mest intuitive. **SSS (Side-Side-Side):** Hvis alle tre sidene i en trekant er like lange som de tilsvarende sidene i en annen trekant, er trekantene kongruente.

Tenk på det slik: hvis du har tre pinner med bestemte lengder -- si $5$ cm, $7$ cm og $8$ cm -- kan du bare lage en form for trekant av dem (bortsett fra speiling). Lengdene bestemmer formen fullstendig.

Formelt: Hvis $AB = DE$, $BC = EF$ og $AC = DF$, da er $\\triangle ABC \\cong \\triangle DEF$.

Pass på rekkefølgen! Når vi skriver $\\triangle ABC \\cong \\triangle DEF$, betyr det at $A$ svarer til $D$, $B$ svarer til $E$, og $C$ svarer til $F$. Disse kalles **korresponderende** hjørner.

SSS er spesielt nyttig når du kjenner alle sidelengdene, men ingen vinkler. Det er nok med sidene!`,
    },

    {
      id: '9-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på SSS:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-2-n-quiz1-q0',
            task: 'Trekant $ABC$ har sidene $AB = 6$, $BC = 8$, $AC = 10$. Trekant $DEF$ har $DE = 6$, $EF = 8$, $DF = 10$. Er de kongruente?',
            options: [
              { id: 'a', text: 'Ja, etter SSS', isCorrect: true },
              { id: 'b', text: 'Ja, etter SAS', isCorrect: false },
              { id: 'c', text: 'Nei, vi trenger vinkelinformasjon', isCorrect: false },
              { id: 'd', text: 'Kan ikke avgjøres', isCorrect: false },
            ],
            solution: 'Alle tre par av sider er like: $AB = DE$, $BC = EF$, $AC = DF$. Etter SSS-setningen er $\\triangle ABC \\cong \\triangle DEF$.',
          },
          {
            id: '9-8-2-n-quiz1-q1',
            task: 'Hva betyr rekkefølgen av bokstavene i $\\triangle ABC \\cong \\triangle DEF$?',
            options: [
              { id: 'a', text: 'Ingenting spesielt -- rekkefølgen er tilfeldig', isCorrect: false },
              { id: 'b', text: 'At $A$ korresponderer med $D$, $B$ med $E$, og $C$ med $F$', isCorrect: true },
              { id: 'c', text: 'At trekantene har lik omkrets', isCorrect: false },
              { id: 'd', text: 'At sidene er sortert etter lengde', isCorrect: false },
            ],
            solution: 'Bokstavrekkefølgen forteller oss hvilke hjørner som tilsvarer hverandre. $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$.',
          },
        ],
      },
    },

    {
      id: '9-8-2-n-section2',
      type: 'text',
      content: `## SAS -- to sider og vinkelen mellom

Den andre kongruenssetningen er **SAS (Side-Vinkel-Side):** Hvis to sider og **vinkelen mellom dem** i en trekant er parvis like med tilsvarende deler i en annen trekant, er trekantene kongruente.

Det viktige ordet her er «mellom». Vinkelen må ligge mellom de to kjente sidene -- den må være vinkelen som dannes der de to sidene møtes.

Tenk på det slik: Hvis du vet at to sider er $6$ cm og $9$ cm, og vinkelen mellom dem er $50°$, er trekanten fullstendig bestemt. Du kan «lukke» trekanten på bare en måte.

**Men pass opp:** Hvis du kjenner to sider og en vinkel som IKKE ligger mellom dem (SSA-situasjonen), er det generelt IKKE nok til å fastslå kongruens. Da kan det finnes to ulike trekanter som passer. SSA er ingen kongruenssetning!

Formelt: Hvis $AB = DE$, $\\angle B = \\angle E$ og $BC = EF$ (der vinkelen $B$ ligger mellom sidene $AB$ og $BC$), da er $\\triangle ABC \\cong \\triangle DEF$.`,
    },

    {
      id: '9-8-2-n-section3',
      type: 'text',
      content: `## ASA -- to vinkler og siden mellom

Den tredje kongruenssetningen er **ASA (Vinkel-Side-Vinkel):** Hvis to vinkler og **siden mellom dem** i en trekant er parvis like med tilsvarende deler i en annen trekant, er trekantene kongruente.

Igjen er nøkkelordet «mellom». Siden må ligge mellom de to kjente vinklene.

Men her er et fint poeng: Siden vinkelsummen i en trekant alltid er $180°$, kan vi beregne den tredje vinkelen hvis vi kjenner to. Derfor er ASA i praksis like sterk som **AAS** (Vinkel-Vinkel-Side, der siden ikke nødvendigvis ligger mellom vinklene). Hvis du kjenner to vinkler og en hvilken som helst side, kan du alltid finne den tredje vinkelen og dermed bruke ASA.

La oss sammenfatte:

| Setning | Krav | Forklaring |
|---------|------|------------|
| SSS | Tre par like sider | Sidene bestemmer formen |
| SAS | To sider og vinkelen mellom | Vinkelen «låser» formen |
| ASA | To vinkler og siden mellom | To vinkler + en side er nok |

**Husk:** Tre like vinkler (AAA) er IKKE nok -- trekantene kan ha forskjellig størrelse. Og to sider + en vinkel som ikke ligger mellom (SSA) er heller IKKE nok.`,
    },

    {
      id: '9-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på SAS og ASA:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-2-n-quiz2-q0',
            task: 'Hvilken kongruenssetning passer? $PQ = 6$, $\\angle Q = 50°$, $QR = 9$ og $XY = 6$, $\\angle Y = 50°$, $YZ = 9$.',
            options: [
              { id: 'a', text: 'SSS', isCorrect: false },
              { id: 'b', text: 'SAS', isCorrect: true },
              { id: 'c', text: 'ASA', isCorrect: false },
              { id: 'd', text: 'Ingen -- ikke nok informasjon', isCorrect: false },
            ],
            solution: 'Vi har to sider og vinkelen mellom dem: SAS-setningen gir $\\triangle PQR \\cong \\triangle XYZ$.',
          },
          {
            id: '9-8-2-n-quiz2-q1',
            task: 'Er tre like vinkler (AAA) nok til å bevise kongruens?',
            options: [
              { id: 'a', text: 'Ja, tre like vinkler betyr at trekantene er kongruente', isCorrect: false },
              { id: 'b', text: 'Nei, tre like vinkler betyr bare at trekantene har samme form (formlikhet)', isCorrect: true },
              { id: 'c', text: 'Ja, men bare for rettvinklede trekanter', isCorrect: false },
              { id: 'd', text: 'Ja, men bare for likesidede trekanter', isCorrect: false },
            ],
            solution: 'Tre like vinkler gir formlike trekanter, men de kan ha forskjellig størrelse. En liten og en stor likesidet trekant har begge vinklene $60°, 60°, 60°$, men de er ikke kongruente.',
          },
          {
            id: '9-8-2-n-quiz2-q2',
            task: 'I en likebent trekant $ABC$ er $AB = AC$. Punktet $M$ er midtpunktet på $BC$. Hvilken kongruenssetning viser at $\\triangle ABM \\cong \\triangle ACM$?',
            options: [
              { id: 'a', text: 'ASA', isCorrect: false },
              { id: 'b', text: 'SAS', isCorrect: false },
              { id: 'c', text: 'SSS', isCorrect: true },
              { id: 'd', text: 'Ingen av dem', isCorrect: false },
            ],
            solution: '$AB = AC$ (gitt), $BM = MC$ ($M$ er midtpunkt), og $AM = AM$ (felles side). Tre par like sider gir SSS.',
          },
        ],
      },
    },

    {
      id: '9-8-2-n-section4',
      type: 'text',
      content: `## Kongruens i praksis -- bevis og konstruksjoner

Kongruenssetningene er ikke bare teori -- de er kraftige verktøy for å bevise geometriske egenskaper.

**Eksempel: Diagonalen i et parallellogram.** I et parallellogram $ABCD$ er motstående sider parallelle og like lange. Diagonalen $AC$ deler det i to trekanter: $\\triangle ABC$ og $\\triangle CDA$. Vi har $AB = CD$, $BC = DA$ (motstående sider), og $AC = CA$ (felles side). Etter SSS er trekantene kongruente -- og det betyr at motstående vinkler i parallellogrammet er like store!

**Eksempel: Symmetrilinje i en likebent trekant.** Hvis $AB = AC$ og $M$ er midtpunktet på $BC$, er $\\triangle ABM \\cong \\triangle ACM$ (SSS). Dermed er $\\angle AMB = \\angle AMC$. Siden disse to vinklene til sammen er $180°$ (de danner en rett linje), må hver av dem være $90°$. Altså står $AM$ vinkelrett på $BC$ -- det er en symmetrilinje.

Kongruenssetningene fungerer som logiske byggesteiner: du starter med det du vet, identifiserer tre matchende elementer, og konkluderer med kongruens.`,
    },

    {
      id: '9-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kongruensbevis:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-2-n-quiz3-q0',
            task: 'To trekanter har $\\angle P = \\angle S = 35°$, $PQ = ST = 10$ og $\\angle R = \\angle U = 75°$. Er de kongruente?',
            options: [
              { id: 'a', text: 'Nei, vi har ikke ASA-mønsteret direkte', isCorrect: false },
              { id: 'b', text: 'Ja, fordi vi kan finne den tredje vinkelen og bruke ASA', isCorrect: true },
              { id: 'c', text: 'Nei, vi trenger å vite alle sidene', isCorrect: false },
              { id: 'd', text: 'Ja, etter SSS', isCorrect: false },
            ],
            solution: 'Den tredje vinkelen: $\\angle Q = 180° - 35° - 75° = 70°$ og $\\angle T = 70°$. Nå har vi $\\angle P = \\angle S$, $PQ = ST$, $\\angle Q = \\angle T$ -- det er ASA!',
          },
          {
            id: '9-8-2-n-quiz3-q1',
            task: 'Hvilken kombinasjon av opplysninger gir IKKE kongruens?',
            options: [
              { id: 'a', text: 'SSS (tre par like sider)', isCorrect: false },
              { id: 'b', text: 'SAS (to sider og vinkelen mellom)', isCorrect: false },
              { id: 'c', text: 'SSA (to sider og en vinkel som IKKE ligger mellom)', isCorrect: true },
              { id: 'd', text: 'ASA (to vinkler og siden mellom)', isCorrect: false },
            ],
            solution: 'SSA (to sider og en vinkel som ikke ligger mellom dem) er ingen kongruenssetning -- det kan gi to mulige trekanter.',
          },
        ],
      },
    },

    {
      id: '9-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

To figurer er **kongruente** ($\\cong$) når de har nøyaktig samme form og størrelse.

De tre kongruenssetningene for trekanter:

| Setning | Krav |
|---------|------|
| **SSS** | Alle tre sidene er parvis like |
| **SAS** | To sider og vinkelen **mellom** dem er parvis like |
| **ASA** | To vinkler og siden **mellom** dem er parvis like |

Husk:
- Rekkefølgen av bokstavene angir korresponderende hjørner
- AAA gir formlikhet, men IKKE kongruens
- SSA er IKKE en kongruenssetning
- Kongruenssetningene er kraftige verktøy for geometriske bevis`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3 NARRATIV: Trekantutlikheten og mediansetninger
// ============================================================================

export const CHAPTER_9_8_3_NARRATIV: TextbookChapter = {
  id: '9-8-3-narrativ',
  courseId: '9',
  chapterNumber: '8.3',
  title: 'Trekantutlikheten og mediansetninger',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av trekantutlikheten, medianer og midtpunktssetningen -- grunnleggende verktøy i geometrien som avslører skjulte egenskaper ved trekanter.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  linkedChapterId: '9-8-3',
  content: [
    {
      id: '9-8-3-n-intro',
      type: 'text',
      content: `## Kan alle sidelengder danne en trekant?

Tenk deg at du har tre pinner. Den ene er 3 cm, den andre er 4 cm, og den tredje er 10 cm. Kan du lage en trekant av dem? Prøv å se det for deg: de to korte pinnene til sammen er $3 + 4 = 7$ cm -- men den lange pinnen er 10 cm. De korte pinnene «rekker ikke rundt». Det er umulig å lukke figuren.

Dette er **trekantutlikheten** i praksis -- en grunnleggende lov som bestemmer hvilke trekanter som kan eksistere. Den sier: summen av to sider i en trekant er alltid større enn den tredje. Bryter du denne regelen, kollapser trekanten.

I tillegg skal vi i dette kapittelet utforske **medianer** (linjer til midtpunktet på motsatt side) og den elegante **midtpunktssetningen**.`,
    },

    {
      id: '9-8-3-n-section1',
      type: 'text',
      content: `## Trekantutlikheten

**Trekantutlikheten** sier at for enhver trekant med sider $a$, $b$ og $c$ gjelder:

$$a + b > c, \\quad a + c > b, \\quad b + c > a$$

Intuitivt: den korteste veien mellom to punkter er en rett linje. Å gå via det tredje hjørnet er alltid en omvei, så omveien (to sider) er alltid lengre enn den direkte veien (den tredje siden).

I praksis trenger du bare å sjekke en ting: **er summen av de to korteste sidene større enn den lengste?** Hvis ja, kan du lage en trekant. Hvis nei, er det umulig.

La oss teste noen eksempler:
- $3, 5, 7$: De to korteste er $3 + 5 = 8 > 7$. Ja, dette er en trekant.
- $2, 3, 8$: De to korteste er $2 + 3 = 5 < 8$. Nei, umulig.
- $5, 5, 5$: $5 + 5 = 10 > 5$. Ja, en likesidet trekant.
- $3, 4, 7$: $3 + 4 = 7 = 7$. Nei! Vi trenger *streng* ulikhet ($>$, ikke $=$). Her ville «trekanten» kollapset til en rett linje.

En nyttig konsekvens: Hvis to sider i en trekant er $a$ og $b$, må den tredje siden $c$ oppfylle:

$$|a - b| < c < a + b$$

Altså ligger $c$ mellom differansen og summen av de to andre sidene.`,
    },

    {
      id: '9-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på trekantutlikheten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-3-n-quiz1-q0',
            task: 'Hvilke sidelengder kan IKKE danne en trekant?',
            options: [
              { id: 'a', text: '$4, 6, 9$', isCorrect: false },
              { id: 'b', text: '$1, 2, 5$', isCorrect: true },
              { id: 'c', text: '$7, 7, 7$', isCorrect: false },
              { id: 'd', text: '$3, 4, 5$', isCorrect: false },
            ],
            solution: '$1 + 2 = 3 < 5$. Summen av de to korteste sidene er IKKE større enn den lengste, så dette kan ikke danne en trekant.',
          },
          {
            id: '9-8-3-n-quiz1-q1',
            task: 'To sider i en trekant er $5$ cm og $8$ cm. Hva er det største heltallet den tredje siden kan ha?',
            options: [
              { id: 'a', text: '$13$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$11$', isCorrect: false },
              { id: 'd', text: '$14$', isCorrect: false },
            ],
            solution: 'Den tredje siden $c$ må oppfylle $|5 - 8| < c < 5 + 8$, altså $3 < c < 13$. Det største heltallet er $12$.',
          },
          {
            id: '9-8-3-n-quiz1-q2',
            task: 'Kan sidene $3, 4, 7$ danne en trekant?',
            options: [
              { id: 'a', text: 'Ja, det er en vanlig trekant', isCorrect: false },
              { id: 'b', text: 'Nei, fordi $3 + 4 = 7$ (ikke strengt større)', isCorrect: true },
              { id: 'c', text: 'Ja, det er en rettvinklet trekant', isCorrect: false },
              { id: 'd', text: 'Nei, fordi $7 > 4$', isCorrect: false },
            ],
            solution: 'Vi trenger $a + b > c$ (strengt større). Her er $3 + 4 = 7$, men vi trenger $> 7$. Punktene ville ligget på en rett linje.',
          },
        ],
      },
    },

    {
      id: '9-8-3-n-section2',
      type: 'text',
      content: `## Medianer og tyngdepunktet

En **median** i en trekant er et linjestykke fra et hjørne til midtpunktet på den motstående siden. Hver trekant har tre medianer.

Det fascinerende er at alle tre medianene alltid møtes i ett punkt -- **tyngdepunktet** (også kalt sentroiden). Tyngdepunktet har en spesiell egenskap: det deler hver median i forholdet $2:1$ fra hjørnet. Altså er avstanden fra hjørnet til tyngdepunktet dobbelt så lang som avstanden fra tyngdepunktet til midtpunktet.

Hvis medianen fra $A$ til midtpunktet $M$ på $BC$ har lengde $15$ cm, og tyngdepunktet er $G$, da er:

$$AG = \\frac{2}{3} \\cdot AM = \\frac{2}{3} \\cdot 15 = 10 \\text{ cm}$$
$$GM = \\frac{1}{3} \\cdot AM = \\frac{1}{3} \\cdot 15 = 5 \\text{ cm}$$

Tyngdepunktet har et fint navn -- det er trekantens **balansepunkt**. Skjærer du ut trekanten i kartong og legger den på en blyantspiss i tyngdepunktet, balanserer den perfekt.

Koordinatene til tyngdepunktet er gjennomsnittet av hjørnenes koordinater:

$$G = \\left(\\frac{x_A + x_B + x_C}{3},\\, \\frac{y_A + y_B + y_C}{3}\\right)$$`,
    },

    {
      id: '9-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på medianer og tyngdepunkt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-3-n-quiz2-q0',
            task: 'Trekant $ABC$ har hjørnene $A = (3, 0)$, $B = (0, 6)$, $C = (9, 3)$. Hva er tyngdepunktet?',
            options: [
              { id: 'a', text: '$(3, 3)$', isCorrect: false },
              { id: 'b', text: '$(4, 3)$', isCorrect: true },
              { id: 'c', text: '$(6, 3)$', isCorrect: false },
              { id: 'd', text: '$(4, 4)$', isCorrect: false },
            ],
            solution: '$G = \\left(\\frac{3+0+9}{3}, \\frac{0+6+3}{3}\\right) = \\left(\\frac{12}{3}, \\frac{9}{3}\\right) = (4, 3)$.',
          },
          {
            id: '9-8-3-n-quiz2-q1',
            task: 'En median har lengde $18$ cm. Hvor lang er avstanden fra hjørnet til tyngdepunktet?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$12$ cm', isCorrect: true },
              { id: 'c', text: '$9$ cm', isCorrect: false },
              { id: 'd', text: '$15$ cm', isCorrect: false },
            ],
            solution: 'Tyngdepunktet deler medianen i forholdet $2:1$ fra hjørnet: $\\frac{2}{3} \\cdot 18 = 12$ cm.',
          },
          {
            id: '9-8-3-n-quiz2-q2',
            task: 'Hva er spesielt med tyngdepunktet i en trekant?',
            options: [
              { id: 'a', text: 'Det er der høydene møtes', isCorrect: false },
              { id: 'b', text: 'Det er trekantens balansepunkt der alle tre medianene møtes', isCorrect: true },
              { id: 'c', text: 'Det ligger alltid i sentrum av omskrevet sirkel', isCorrect: false },
              { id: 'd', text: 'Det er det punktet som er lengst fra alle sider', isCorrect: false },
            ],
            solution: 'Tyngdepunktet (sentroiden) er der de tre medianene møtes, og det er trekantens balansepunkt.',
          },
        ],
      },
    },

    {
      id: '9-8-3-n-section3',
      type: 'text',
      content: `## Midtpunktssetningen

**Midtpunktssetningen** er en av geometriens mest elegante resultater. Den sier:

> Linjestykket som forbinder midtpunktene av to sider i en trekant, er **parallelt** med den tredje siden og **halvparten** så langt.

Formelt: Hvis $M$ er midtpunktet på $AB$ og $N$ er midtpunktet på $AC$ i $\\triangle ABC$, da er:

1. $MN \\parallel BC$
2. $MN = \\frac{1}{2} \\cdot BC$

Denne setningen har mange konsekvenser. For eksempel: Hvis $BC = 12$ cm, er $MN = 6$ cm. Og siden $MN \\parallel BC$, er samsvarende vinkler like: $\\angle AMN = \\angle B$.

En vakker anvendelse: Forbind midtpunktene av alle tre sidene i en trekant. Da får du en ny, liten trekant inne i den opprinnelige. Midtpunktssetningen viser at denne indre trekanten har sider som er halvparten av de opprinnelige. Faktisk deler den opprinnelige trekanten i fire kongruente trekanter -- alle like store! Dette kan bevises ved å bruke midtpunktssetningen tre ganger og deretter SSS-kongruens.`,
    },

    {
      id: '9-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på midtpunktssetningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-8-3-n-quiz3-q0',
            task: '$M$ og $N$ er midtpunktene på henholdsvis $AB$ og $AC$ i $\\triangle ABC$, og $BC = 14$ cm. Hva er $MN$?',
            options: [
              { id: 'a', text: '$28$ cm', isCorrect: false },
              { id: 'b', text: '$7$ cm', isCorrect: true },
              { id: 'c', text: '$14$ cm', isCorrect: false },
              { id: 'd', text: '$10$ cm', isCorrect: false },
            ],
            solution: 'Etter midtpunktssetningen: $MN = \\frac{1}{2} \\cdot BC = \\frac{1}{2} \\cdot 14 = 7$ cm.',
          },
          {
            id: '9-8-3-n-quiz3-q1',
            task: 'I $\\triangle ABC$ er $\\angle B = 70°$. $M$ er midtpunkt på $AB$ og $N$ er midtpunkt på $AC$. Hva er $\\angle AMN$?',
            options: [
              { id: 'a', text: '$70°$', isCorrect: true },
              { id: 'b', text: '$110°$', isCorrect: false },
              { id: 'c', text: '$35°$', isCorrect: false },
              { id: 'd', text: '$90°$', isCorrect: false },
            ],
            solution: 'Siden $MN \\parallel BC$ (midtpunktssetningen), er $\\angle AMN = \\angle B = 70°$ (samsvarende vinkler).',
          },
          {
            id: '9-8-3-n-quiz3-q2',
            task: 'Midtpunktene av sidene i en trekant forbindes. Hvor mange kongruente trekanter deler dette den opprinnelige trekanten i?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: false },
              { id: 'c', text: '$4$', isCorrect: true },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Midtpunktstrekanten deler den opprinnelige trekanten i nøyaktig $4$ kongruente trekanter, alle med sider halvparten av de opprinnelige.',
          },
        ],
      },
    },

    {
      id: '9-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Trekantutlikheten:** I enhver trekant er summen av to sider alltid større enn den tredje. Sjekk: er summen av de to korteste sidene strengt større enn den lengste? Den tredje siden $c$ må ligge i intervallet $|a - b| < c < a + b$.

**Medianer og tyngdepunkt:** En median går fra et hjørne til midtpunktet av den motstående siden. De tre medianene møtes i tyngdepunktet $G$, som deler hver median i forholdet $2:1$. Tyngdepunktets koordinater er gjennomsnittet av hjørnenes koordinater.

**Midtpunktssetningen:** Linjestykket mellom midtpunktene av to sider i en trekant er parallelt med den tredje siden og halvparten så langt:
- $MN \\parallel BC$
- $MN = \\frac{1}{2} \\cdot BC$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_8_1_NARRATIV,
  CHAPTER_9_8_2_NARRATIV,
  CHAPTER_9_8_3_NARRATIV,
];
