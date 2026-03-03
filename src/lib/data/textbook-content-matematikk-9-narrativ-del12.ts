/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 12
 *
 * Kapittel 12.1: Geometrisk problemløsning
 * Kapittel 12.2: Problemløsningsstrategier
 * Kapittel 12.3: Tentamensforberedelse
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 12.1 NARRATIV: Geometrisk problemløsning
// ============================================================================

export const CHAPTER_9_12_1_NARRATIV: TextbookChapter = {
  id: '9-12-1-narrativ',
  courseId: '9',
  chapterNumber: '12.1',
  title: 'Geometrisk problemløsning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av geometrisk problemlosning der vi kombinerer Pytagoras, arealformler og volum for a takle sammensatte figurer og undersoke hva som skjer nar mal endres.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  linkedChapterId: '9-12-1',
  content: [
    {
      id: '9-12-1-n-intro',
      type: 'text',
      content: `## Nar formlene jobber sammen

Du har allerede laert Pytagoras' setning, arealformler for trekanter og sirkler, og volum av sylindere og prismer. Hver formel er nyttig alene -- men den virkelige kraften kommer nar du **kombinerer** dem.

Tenk pa det som verktoy i en verktøykasse. En hammer er nyttig. En skrutrekker er nyttig. Men for a bygge noe ordentlig trenger du a vite **nar du skal bruke hvilket verktoy** og **i hvilken rekkefolge**.

I dette kapittelet skal vi lose problemer som krever flere formler samtidig. Vi skal ogsa utforske et viktig sporsmal: hva skjer med areal og volum nar vi endrer malene i en figur?`,
    },

    {
      id: '9-12-1-n-section1',
      type: 'text',
      content: `## Sammensatte figurer -- del opp og legg sammen

En **sammensatt figur** er bygd opp av flere enklere figurer. For a finne arealet har du to strategier:

1. **Del opp** figuren i enklere deler og legg sammen arealene
2. **Trekk fra** -- beregn arealet av en stor figur og trekk fra «hullene»

La oss se pa et eksempel. En gavlevegg pa et hus har form som et rektangel med en likesidet trekant pa toppen. Rektangelet er 8 m bredt og 3 m hoyt. Trekanten har grunnlinje 8 m.

**Steg 1:** Arealet av rektangelet er enkelt:
$$A_{\\text{rektangel}} = 8 \\cdot 3 = 24 \\text{ m}^2$$

**Steg 2:** For trekanten trenger vi hoyden. En likesidet trekant med side 8 m kan deles i to rettvinklede trekanter med Pytagoras. Hoyden deler grunnlinjen i to deler a 4 m:
$$h^2 + 4^2 = 8^2 \\implies h^2 = 64 - 16 = 48 \\implies h = \\sqrt{48} = 4\\sqrt{3} \\approx 6{,}93 \\text{ m}$$

**Steg 3:** Arealet av trekanten:
$$A_{\\text{trekant}} = \\frac{8 \\cdot 4\\sqrt{3}}{2} = 16\\sqrt{3} \\approx 27{,}71 \\text{ m}^2$$

**Steg 4:** Totalt areal:
$$A_{\\text{totalt}} = 24 + 16\\sqrt{3} \\approx 51{,}7 \\text{ m}^2$$

Legg merke til hvordan vi brukte Pytagoras (for a finne hoyden) og arealformelen (for trekanten) i kombinasjon. Det er dette som gjor geometrisk problemlosning spennende -- du ma tenke gjennom **hvilke verktoy** du trenger og **i hvilken rekkefolge** du bruker dem.`,
    },

    {
      id: '9-12-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-12-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa sammensatte figurer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-1-n-quiz1-q0',
            task: 'Et rom er 6 m $\\times$ 4 m. I det ene hjornet star et skap som tar opp 1,5 m $\\times$ 1 m. Hva er den ledige gulvflaten?',
            options: [
              { id: 'a', text: '$24 \\text{ m}^2$', isCorrect: false },
              { id: 'b', text: '$22{,}5 \\text{ m}^2$', isCorrect: true },
              { id: 'c', text: '$25{,}5 \\text{ m}^2$', isCorrect: false },
              { id: 'd', text: '$22 \\text{ m}^2$', isCorrect: false },
            ],
            solution: 'Rommet: $6 \\cdot 4 = 24 \\text{ m}^2$. Skapet: $1{,}5 \\cdot 1 = 1{,}5 \\text{ m}^2$. Ledig flate: $24 - 1{,}5 = 22{,}5 \\text{ m}^2$.',
          },
          {
            id: '9-12-1-n-quiz1-q1',
            task: 'En likebeint trekant har to like sider pa 10 cm og grunnlinje 12 cm. Hva er hoyden?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$8$ cm', isCorrect: true },
              { id: 'c', text: '$10$ cm', isCorrect: false },
              { id: 'd', text: '$\\sqrt{44}$ cm', isCorrect: false },
            ],
            solution: 'Hoyden deler grunnlinjen i to deler a 6 cm. Pytagoras: $h^2 + 6^2 = 10^2 \\implies h^2 = 100 - 36 = 64 \\implies h = 8$ cm.',
          },
          {
            id: '9-12-1-n-quiz1-q2',
            task: 'Hva er arealet av den likebeinte trekanten fra forrige sporsmal?',
            options: [
              { id: 'a', text: '$48 \\text{ cm}^2$', isCorrect: true },
              { id: 'b', text: '$96 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$60 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$40 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = \\frac{g \\cdot h}{2} = \\frac{12 \\cdot 8}{2} = 48 \\text{ cm}^2$.',
          },
        ],
      },
    },

    {
      id: '9-12-1-n-section2',
      type: 'text',
      content: `## Hva skjer nar vi endrer malene?

Her kommer en av de viktigste innsiktene i geometri. Nar du **skalerer** en figur -- altsaa oker eller minker alle mal med en faktor $k$ -- endres areal og volum pa forskjellig mate:

- **Areal** ganges med $k^2$ (fordi areal har to dimensjoner)
- **Volum** ganges med $k^3$ (fordi volum har tre dimensjoner)

La oss se pa en sylinder med radius $r = 10$ cm og hoyde $h = 30$ cm:

$$V = \\pi r^2 h = \\pi \\cdot 10^2 \\cdot 30 = 3000\\pi \\approx 9\\,425 \\text{ cm}^3$$

Hva skjer hvis vi **dobler radien** (men beholder hoyden)? Radien star i andre potens i formelen:

$$V_{\\text{ny}} = \\pi \\cdot 20^2 \\cdot 30 = 12\\,000\\pi$$

Det nye volumet er $\\frac{12\\,000\\pi}{3000\\pi} = 4$ ganger det opprinnelige! Fordi radien er opphøyd i andre, gir dobling av radien $2^2 = 4$ ganger volumet.

Hva om vi dobler **alle** mal (bade radius og hoyde)? Da far vi $k = 2$ for tre dimensjoner:

$$V_{\\text{ny}} = \\pi \\cdot 20^2 \\cdot 60 = 24\\,000\\pi = 8 \\cdot 3000\\pi$$

Volumet blir $2^3 = 8$ ganger sa stort. Denne regelen gjelder for alle tredimensjonale figurer!`,
    },

    {
      id: '9-12-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-12-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa skalering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-1-n-quiz2-q0',
            task: 'Alle sider i en trekant tredobles. Hva skjer med arealet?',
            options: [
              { id: 'a', text: 'Det tredobles', isCorrect: false },
              { id: 'b', text: 'Det blir 6 ganger sa stort', isCorrect: false },
              { id: 'c', text: 'Det blir 9 ganger sa stort', isCorrect: true },
              { id: 'd', text: 'Det blir 27 ganger sa stort', isCorrect: false },
            ],
            solution: 'Nar alle lengder ganges med $k = 3$, ganges arealet med $k^2 = 3^2 = 9$.',
          },
          {
            id: '9-12-1-n-quiz2-q1',
            task: 'En terning har side 4 cm. Alle sider halveres. Hva blir det nye volumet?',
            options: [
              { id: 'a', text: '$32 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$16 \\text{ cm}^3$', isCorrect: false },
              { id: 'c', text: '$8 \\text{ cm}^3$', isCorrect: true },
              { id: 'd', text: '$4 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: 'Opprinnelig volum: $4^3 = 64 \\text{ cm}^3$. Halvering ($k = 0{,}5$) gir nytt volum: $0{,}5^3 \\cdot 64 = 0{,}125 \\cdot 64 = 8 \\text{ cm}^3$. Alternativt: $2^3 = 8 \\text{ cm}^3$.',
          },
          {
            id: '9-12-1-n-quiz2-q2',
            task: 'Et tre er 9 m hoyt og kaster en 12 m lang skygge. En pinne pa 1,5 m kaster en 2 m lang skygge. Stemmer dette med formlikhet?',
            options: [
              { id: 'a', text: 'Ja, fordi $\\frac{9}{12} = \\frac{1{,}5}{2} = 0{,}75$', isCorrect: true },
              { id: 'b', text: 'Nei, forholdene er ulike', isCorrect: false },
              { id: 'c', text: 'Vi kan ikke vite det', isCorrect: false },
              { id: 'd', text: 'Ja, fordi $9 - 12 = 1{,}5 - 2$', isCorrect: false },
            ],
            solution: 'Formlikhet betyr at forholdstallene er like: $\\frac{9}{12} = 0{,}75$ og $\\frac{1{,}5}{2} = 0{,}75$. Siden begge er $0{,}75$, stemmer formlikheten.',
          },
        ],
      },
    },

    {
      id: '9-12-1-n-section3',
      type: 'text',
      content: `## Romdiagonaler og skrahoyden

Noen ganger ma vi bruke Pytagoras **to ganger** for a lose et problem. Et godt eksempel er a finne **romdiagonalen** i en boks -- den diagonalen som gar tvers gjennom boksen fra et hjorne til det motsatte.

Tenk pa en boks med lengde 12 cm, bredde 5 cm og hoyde 4 cm.

**Steg 1:** Finn diagonalen i bunnflaten med Pytagoras:
$$d_{\\text{bunn}}^2 = 12^2 + 5^2 = 144 + 25 = 169 \\implies d_{\\text{bunn}} = 13 \\text{ cm}$$

**Steg 2:** Bruk denne diagonalen og hoyden til a finne romdiagonalen:
$$d^2 = 13^2 + 4^2 = 169 + 16 = 185 \\implies d = \\sqrt{185} \\approx 13{,}6 \\text{ cm}$$

Samme prinsipp gjelder for **skrahoyden** i en pyramide. En pyramide med kvadratisk grunnflate (side 6 cm) og hoyde 4 cm: skrahoyden fra toppen ned til midten av en grunnkant finnes med Pytagoras der katetene er hoyden (4 cm) og halvparten av sidelengden (3 cm):

$$s^2 = 4^2 + 3^2 = 16 + 9 = 25 \\implies s = 5 \\text{ cm}$$

Hoyden stikker rett opp fra midten av grunnflaten, og avstanden fra midten til midten av en kant er halve sidelengden. Sammen med skrahoyden danner de en rettvinklet trekant.`,
    },

    {
      id: '9-12-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-12-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa romdiagonaler og pyramider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-1-n-quiz3-q0',
            task: 'En boks er 3 cm $\\times$ 4 cm $\\times$ 12 cm. Hva er romdiagonalen?',
            options: [
              { id: 'a', text: '$\\sqrt{169} = 13$ cm', isCorrect: true },
              { id: 'b', text: '$\\sqrt{160}$ cm', isCorrect: false },
              { id: 'c', text: '$19$ cm', isCorrect: false },
              { id: 'd', text: '$\\sqrt{144} = 12$ cm', isCorrect: false },
            ],
            solution: '$d^2 = 3^2 + 4^2 + 12^2 = 9 + 16 + 144 = 169$, sa $d = 13$ cm. (Vi kan ogsa gjore dette i to steg: bunndiagonal $= \\sqrt{9+16} = 5$, romdiagonal $= \\sqrt{25 + 144} = \\sqrt{169} = 13$.)',
          },
          {
            id: '9-12-1-n-quiz3-q1',
            task: 'Volumet av en pyramide med kvadratisk grunnflate (side 6 cm) og hoyde 4 cm er:',
            options: [
              { id: 'a', text: '$144 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$48 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$72 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$36 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{1}{3} \\cdot G \\cdot h = \\frac{1}{3} \\cdot 6^2 \\cdot 4 = \\frac{1}{3} \\cdot 144 = 48 \\text{ cm}^3$.',
          },
        ],
      },
    },

    {
      id: '9-12-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Geometrisk problemlosning handler om a kombinere verktoy:

- **Sammensatte figurer**: Del opp i enklere deler eller trekk fra hull. Bruk Pytagoras for a finne ukjente lengder (f.eks. hoyden i en trekant).
- **Skalering**: Nar alle lengder ganges med $k$, ganges arealet med $k^2$ og volumet med $k^3$.
- **Formlikhet**: Forholdstallene mellom tilsvarende sider er like -- nyttig for a finne ukjente lengder.
- **Romdiagonalen** finnes med Pytagoras i to steg: forst i bunnflaten, deretter med hoyden.
- **Skrahoyden** i en pyramide finnes med Pytagoras der katetene er pyramidens hoyde og avstanden fra sentrum til midten av en kant.

Nokkelen er a **tegne gode figurer**, merke av det du vet, og identifisere rettvinklede trekanter der du kan bruke Pytagoras.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.2 NARRATIV: Problemløsningsstrategier
// ============================================================================

export const CHAPTER_9_12_2_NARRATIV: TextbookChapter = {
  id: '9-12-2-narrativ',
  courseId: '9',
  chapterNumber: '12.2',
  title: 'Problemløsningsstrategier',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende innforing i systematisk problemlosning der vi folger Polyas 4 steg og laerer strategier som a tegne figurer, sette opp likninger, jobbe baklengs og dele opp problemer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  linkedChapterId: '9-12-2',
  content: [
    {
      id: '9-12-2-n-intro',
      type: 'text',
      content: `## Nar du star fast

Vi har alle vaert der. Du sitter foran en matteoppgave, leser den tre ganger, og har fortsatt ingen anelse om hvor du skal begynne. Det er frustrerende, men helt normalt -- og det finnes en losning.

Den ungarske matematikeren **George Polya** (1887--1985) skrev en berømt bok kalt «How to Solve It» der han beskrev en systematisk metode for a angripe matematiske problemer. Metoden hans brukes den dag i dag, fra ungdomsskolen til universitetsniva.

Hovedbudskapet er dette: **problemlosning er en ferdighet som kan laeres**. Det handler ikke om a vaere et geni -- det handler om a ha gode strategier.`,
    },

    {
      id: '9-12-2-n-section1',
      type: 'text',
      content: `## Polyas 4 steg

Polya delte problemlosning inn i fire steg:

**Steg 1: Forsta problemet**
Les oppgaven noye -- gjerne flere ganger. Hva er det du skal finne? Hvilken informasjon har du fatt? Er det informasjon som mangler? Kan du tegne en figur?

**Steg 2: Lag en plan**
Hvilken strategi passer best? Kjenner du igjen et monster fra tidligere oppgaver? Kan du dele problemet i mindre deler?

**Steg 3: Gjennomfor planen**
Folg planen steg for steg. Vis utregningene tydelig. Hvis du star fast, ga tilbake til steg 2 og prov en annen strategi.

**Steg 4: Se tilbake**
Er svaret rimelig? Har du svart pa det oppgaven spurte om? Kan du kontrollere svaret pa en annen mate?

La oss prove dette i praksis. Et rektangulaert jorde har en omkrets pa 56 m. Lengden er 4 m mer enn bredden. Finn lengden og bredden.

**Steg 1:** Vi kaller bredden $b$ og lengden $l = b + 4$. Omkretsen er 56 m.

**Steg 2:** Vi bruker formelen $O = 2l + 2b$ og setter inn.

**Steg 3:**
$$2(b + 4) + 2b = 56$$
$$2b + 8 + 2b = 56$$
$$4b = 48$$
$$b = 12 \\text{ m}, \\quad l = 16 \\text{ m}$$

**Steg 4:** Kontroll: $2 \\cdot 16 + 2 \\cdot 12 = 32 + 24 = 56$ m. Stemmer!`,
    },

    {
      id: '9-12-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-12-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Polyas 4 steg:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-2-n-quiz1-q0',
            task: 'Hva er det FORSTE du bor gjore nar du leser en vanskelig matteoppgave?',
            options: [
              { id: 'a', text: 'Begynne a regne med en gang', isCorrect: false },
              { id: 'b', text: 'Se pa losningsforslaget', isCorrect: false },
              { id: 'c', text: 'Forsta problemet -- hva vet du, og hva skal du finne?', isCorrect: true },
              { id: 'd', text: 'Ga videre til neste oppgave', isCorrect: false },
            ],
            solution: 'Polyas steg 1 er a forsta problemet. Les noye, identifiser hva du vet og hva du skal finne. Mange feil oppstar fordi man begynner a regne for man forstår oppgaven.',
          },
          {
            id: '9-12-2-n-quiz1-q1',
            task: 'Et rektangel har omkrets 30 cm og lengden er dobbelt sa lang som bredden. Hva er bredden?',
            options: [
              { id: 'a', text: '$5$ cm', isCorrect: true },
              { id: 'b', text: '$10$ cm', isCorrect: false },
              { id: 'c', text: '$7{,}5$ cm', isCorrect: false },
              { id: 'd', text: '$15$ cm', isCorrect: false },
            ],
            solution: 'La $b$ vaere bredden og $l = 2b$ lengden. $2l + 2b = 30 \\implies 2(2b) + 2b = 30 \\implies 6b = 30 \\implies b = 5$ cm.',
          },
        ],
      },
    },

    {
      id: '9-12-2-n-section2',
      type: 'text',
      content: `## Strategi: Tegne en figur

A **tegne en figur** er kanskje den mest undervurderte strategien i matematikk. En god skisse gjor det lettere a se sammenhenger, identifisere rettvinklede trekanter, og holde oversikt over kjente og ukjente mal.

**Eksempel:** En stige star inntil en vegg. Stigens fot er 3 m fra veggen, og toppen nar 4 m opp pa veggen. Hvor lang er stigen?

Tegner du en figur, ser du umiddelbart at dette er en rettvinklet trekant der veggen og bakken er kateter, og stigen er hypotenusen:

$$s^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies s = 5 \\text{ m}$$

Uten figuren ville du kanskje sett pa tallene 3 og 4 uten a vite hva du skulle gjore med dem. Med figuren er losningen opplagt.

## Strategi: Jobbe baklengs

Noen ganger vet du svaret, men ikke utgangspunktet. Da kan du **jobbe baklengs** -- start med det du vet og gjor de omvendte operasjonene i omvendt rekkefolge.

**Eksempel:** Arealet av en trekant er $54 \\text{ cm}^2$. Grunnlinjen er 12 cm. Finn hoyden.

Vi starter med arealformelen og loser for hoyden:
$$54 = \\frac{12 \\cdot h}{2} \\implies 54 = 6h \\implies h = 9 \\text{ cm}$$

Kontroll: $\\frac{12 \\cdot 9}{2} = 54 \\text{ cm}^2$. Stemmer!`,
    },

    {
      id: '9-12-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-12-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa ulike strategier:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-2-n-quiz2-q0',
            task: 'Volumet av en terning er $512 \\text{ cm}^3$. Hva er sidelengden?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$8$ cm', isCorrect: true },
              { id: 'c', text: '$7$ cm', isCorrect: false },
              { id: 'd', text: '$9$ cm', isCorrect: false },
            ],
            solution: 'Vi jobber baklengs: $s^3 = 512 \\implies s = \\sqrt[3]{512} = 8$ cm. Vi kan verifisere: $8^3 = 512$.',
          },
          {
            id: '9-12-2-n-quiz2-q1',
            task: 'Hvilken strategi er best nar du ser et geometriproblem med avstand, hoyde og skra lengde?',
            options: [
              { id: 'a', text: 'Prove og feile', isCorrect: false },
              { id: 'b', text: 'Tegne en figur og se etter rettvinklede trekanter', isCorrect: true },
              { id: 'c', text: 'Bruke formelen for sirkelens omkrets', isCorrect: false },
              { id: 'd', text: 'Sette opp en tabell', isCorrect: false },
            ],
            solution: 'Nar et problem involverer avstand, hoyde og skra lengde, bor du tegne en figur. Sjansen er stor for at det skjuler seg en rettvinklet trekant der du kan bruke Pytagoras.',
          },
          {
            id: '9-12-2-n-quiz2-q2',
            task: 'Summen av to tall er 25, produktet er 150. Hva er de to tallene?',
            options: [
              { id: 'a', text: '$12$ og $13$', isCorrect: false },
              { id: 'b', text: '$10$ og $15$', isCorrect: true },
              { id: 'c', text: '$5$ og $20$', isCorrect: false },
              { id: 'd', text: '$11$ og $14$', isCorrect: false },
            ],
            solution: 'Systematisk proving: $10 + 15 = 25$ og $10 \\cdot 15 = 150$. Begge betingelsene er oppfylt.',
          },
        ],
      },
    },

    {
      id: '9-12-2-n-section3',
      type: 'text',
      content: `## Strategi: Dele opp i delproblemer

Store, sammensatte problemer kan virke overveldende. Trikset er a dele dem opp i **mindre delproblemer** som du kan lose ett om gangen.

**Eksempel:** En rektangulaer hage er 20 m lang og 12 m bred. Det skal anlegges en gangvei med lik bredde $x$ langs alle fire sider. Arealet av det gjenvaerende bedet skal vaere $140 \\text{ m}^2$. Finn bredden pa gangveien.

**Delproblem 1:** Finn malene pa det gjenvaerende bedet.
Bedet har lengde $20 - 2x$ og bredde $12 - 2x$ (vi trekker fra gangveiens bredde pa begge sider).

**Delproblem 2:** Sett opp likningen.
$$(20 - 2x)(12 - 2x) = 140$$

**Delproblem 3:** Los likningen.
$$240 - 40x - 24x + 4x^2 = 140$$
$$4x^2 - 64x + 100 = 0$$
$$x^2 - 16x + 25 = 0$$

Med abc-formelen:
$$x = \\frac{16 \\pm \\sqrt{256 - 100}}{2} = \\frac{16 \\pm \\sqrt{156}}{2}$$

$x \\approx 1{,}75$ m (den andre losningen er for stor).

**Delproblem 4:** Kontroller.
$(20 - 3{,}5)(12 - 3{,}5) = 16{,}5 \\cdot 8{,}5 = 140{,}25 \\approx 140$. Stemmer!

Ved a bryte opp det store problemet i fire mindre steg ble det handterbart.`,
    },

    {
      id: '9-12-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-12-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa delproblemer og planlegging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-2-n-quiz3-q0',
            task: 'Et rektangulaert rom har areal $48 \\text{ m}^2$. Lengden er 2 m mer enn bredden. Hva er bredden?',
            options: [
              { id: 'a', text: '$4$ m', isCorrect: false },
              { id: 'b', text: '$6$ m', isCorrect: true },
              { id: 'c', text: '$8$ m', isCorrect: false },
              { id: 'd', text: '$5$ m', isCorrect: false },
            ],
            solution: '$b(b + 2) = 48 \\implies b^2 + 2b - 48 = 0 \\implies (b + 8)(b - 6) = 0 \\implies b = 6$ m. Lengden er $6 + 2 = 8$ m. Kontroll: $6 \\cdot 8 = 48$.',
          },
          {
            id: '9-12-2-n-quiz3-q1',
            task: 'Nar er det lurt a bruke «prove og feile systematisk»?',
            options: [
              { id: 'a', text: 'Alltid -- det er den beste strategien', isCorrect: false },
              { id: 'b', text: 'Nar du har en likning du ikke klarer a lose algebraisk', isCorrect: true },
              { id: 'c', text: 'Bare nar du har kalkulator', isCorrect: false },
              { id: 'd', text: 'Aldri -- det er useriost', isCorrect: false },
            ],
            solution: 'Systematisk proving er en helt legitim strategi, spesielt nar likningen er vanskelig a lose algebraisk. Nøkkelen er a vaere **systematisk**: bruk en tabell, juster basert pa om svaret er for stort eller for lite.',
          },
          {
            id: '9-12-2-n-quiz3-q2',
            task: 'Hva er Polyas siste steg?',
            options: [
              { id: 'a', text: 'Gjennomfore planen', isCorrect: false },
              { id: 'b', text: 'Lage en plan', isCorrect: false },
              { id: 'c', text: 'Forsta problemet', isCorrect: false },
              { id: 'd', text: 'Se tilbake -- er svaret rimelig?', isCorrect: true },
            ],
            solution: 'Steg 4 er «Se tilbake». Sjekk at svaret er rimelig, at du har svart pa det oppgaven spurte om, og kontroller gjerne svaret pa en annen mate. Mange elever hopper over dette steget og mister poeng pa eksamen!',
          },
        ],
      },
    },

    {
      id: '9-12-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Problemlosning er en ferdighet som kan laeres. Polyas 4 steg gir deg en systematisk tilnaerming:

1. **Forsta problemet** -- les noye, tegn figur, identifiser hva du vet og hva du soker
2. **Lag en plan** -- velg strategi (tegne figur, sette opp likning, prove og feile, jobbe baklengs, dele opp)
3. **Gjennomfor planen** -- vis mellomregning, vaer tydelig
4. **Se tilbake** -- kontroller svaret, er det rimelig?

De viktigste strategiene:
- **Tegne en figur** -- gjor sammenhenger synlige
- **Sette opp en likning** -- oversett ord til matematikk
- **Jobbe baklengs** -- start med det du vet om svaret
- **Prove og feile systematisk** -- bruk tabell, juster basert pa resultater
- **Dele opp i delproblemer** -- gjor det store problemet handterbart`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.3 NARRATIV: Tentamensforberedelse
// ============================================================================

export const CHAPTER_9_12_3_NARRATIV: TextbookChapter = {
  id: '9-12-3-narrativ',
  courseId: '9',
  chapterNumber: '12.3',
  title: 'Tentamensforberedelse',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende guide til tentamensforberedelse med strategier for provesituasjonen, gjennomgang av de viktigste emnene, og quizer som tester bade grunnleggende og sammensatte ferdigheter.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  linkedChapterId: '9-12-3',
  content: [
    {
      id: '9-12-3-n-intro',
      type: 'text',
      content: `## Tentamen -- du klarer dette!

Tentamen naermer seg, og kanskje kjenner du pa en blanding av spenning og nervositet. Det er helt normalt! Tentamen er en anledning til a vise hva du har laert -- og med god forberedelse og smarte strategier kan du prestere pa ditt beste.

I dette kapittelet far du en oversikt over tentamensformatet, de beste strategiene for provesituasjonen, og en gjennomgang av de viktigste emnene. Tenk pa dette kapittelet som din personlige trener for tentamensdagen.`,
    },

    {
      id: '9-12-3-n-section1',
      type: 'text',
      content: `## Hvordan tentamen er bygd opp

Tentamen i matematikk for 9. klasse er vanligvis delt i to deler:

**Del 1: Uten hjelpemidler** (ca. 1--1,5 time)
Her testes de grunnleggende ferdighetene dine: hoderegning, brokregning, prosentregning, enkel algebra og geometriformler du bor kunne utenat. Ingen kalkulator, ingen formelsamling -- bare deg og blyanten.

**Del 2: Med hjelpemidler** (ca. 2--2,5 timer)
Her far du bruke kalkulator og formelsamling. Oppgavene er mer sammensatte: tekstoppgaver, geometri med flere steg, statistikk og problemlosning.

Et viktig poeng: **vis alltid mellomregning**! Selv om sluttsvaret er feil, kan du fa delpoeng for riktig fremgangsmate. Skriv formelen, sett inn tall, regn ut, og skriv svar med enhet. Denne strukturen gir sensor mulighet til a gi deg poeng for det du gjor riktig.`,
    },

    {
      id: '9-12-3-n-section2',
      type: 'text',
      content: `## Strategier for tentamensdagen

**For tentamen:**
- Repeter de viktigste formlene (areal, volum, Pytagoras, prosent, stigningstall)
- Los gamle tentamensoppgaver under tidspress -- det er den beste treningen
- Sov godt natten for! En uthvilt hjerne presterer mye bedre enn en som har pugget hele natten

**Under Del 1 (uten hjelpemidler):**
1. Les gjennom **alle** oppgavene forst (2--3 minutter)
2. Los de oppgavene du er **sikker pa** forst -- det gir deg selvtillit og poeng i banken
3. Marker oppgaver du er usikker pa og kom tilbake til dem
4. Vis alltid mellomregning: formel, innsetting, utregning, svar med enhet
5. Overslag! Sjekk at svaret er fornuftig

**Under Del 2 (med hjelpemidler):**
1. Les oppgaveteksten noye -- gjerne to ganger
2. **Tegn figur** der det er naturlig
3. Bruk kalkulatoren smart, men vis likevel mellomregning
4. Bruk de siste 10 minuttene til a sjekke alle svar
5. Aldri lever blankt -- skriv ned det du vet, selv om du ikke finner hele losningen`,
    },

    {
      id: '9-12-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-12-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Tentamenstips -- Del 1-oving (uten kalkulator):',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-3-n-quiz1-q0',
            task: 'Hva er $\\frac{2}{3} + \\frac{3}{4}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{7}$', isCorrect: false },
              { id: 'b', text: '$\\frac{17}{12}$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{12}$', isCorrect: false },
              { id: 'd', text: '$1\\frac{1}{7}$', isCorrect: false },
            ],
            solution: 'Fellesnevner for 3 og 4 er 12. $\\frac{2}{3} = \\frac{8}{12}$ og $\\frac{3}{4} = \\frac{9}{12}$. Sum: $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$.',
          },
          {
            id: '9-12-3-n-quiz1-q1',
            task: 'Hva er $15 \\%$ av $240$?',
            options: [
              { id: 'a', text: '$24$', isCorrect: false },
              { id: 'b', text: '$36$', isCorrect: true },
              { id: 'c', text: '$30$', isCorrect: false },
              { id: 'd', text: '$40$', isCorrect: false },
            ],
            solution: '$10 \\%$ av $240 = 24$. $5 \\%$ av $240 = 12$. Altsaa er $15 \\% = 24 + 12 = 36$. Alternativt: $0{,}15 \\cdot 240 = 36$.',
          },
          {
            id: '9-12-3-n-quiz1-q2',
            task: 'Los likningen $3x - 7 = 14$.',
            options: [
              { id: 'a', text: '$x = 7$', isCorrect: true },
              { id: 'b', text: '$x = 3$', isCorrect: false },
              { id: 'c', text: '$x = \\frac{7}{3}$', isCorrect: false },
              { id: 'd', text: '$x = 21$', isCorrect: false },
            ],
            solution: '$3x - 7 = 14 \\implies 3x = 21 \\implies x = 7$. Kontroll: $3 \\cdot 7 - 7 = 21 - 7 = 14$. Stemmer!',
          },
        ],
      },
    },

    {
      id: '9-12-3-n-section3',
      type: 'text',
      content: `## Gjennomgang av viktige emner

La oss ta en rask gjennomgang av de emnene som oftest dukker opp pa tentamen:

**Brokregning:**
- Fellesnevner for addisjon/subtraksjon: $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$
- Multiplikasjon: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$
- Divisjon: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$

**Prosentregning:**
- $p \\%$ av $G$: $\\frac{p}{100} \\cdot G$
- Vekstfaktor: $1 + \\frac{p}{100}$ for okning, $1 - \\frac{p}{100}$ for reduksjon
- Ny pris etter 30 % rabatt: $\\text{pris} \\cdot 0{,}70$

**Likninger:**
- Flytt ledd: bytt fortegn nar du flytter over likhetstegnet
- Parenteser: multipliser ut for du forenkler
- Kontroller alltid svaret ved a sette det tilbake i likningen

**Pytagoras:**
- $a^2 + b^2 = c^2$ (der $c$ er hypotenusen)
- Finn ukjent katet: $a = \\sqrt{c^2 - b^2}$

**Areal og volum:**
- Trekant: $A = \\frac{g \\cdot h}{2}$
- Sirkel: $A = \\pi r^2$, $O = 2\\pi r$
- Sylinder: $V = \\pi r^2 h$`,
    },

    {
      id: '9-12-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-12-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Blandet tentamenoving -- geometri og prosent:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-3-n-quiz2-q0',
            task: 'En rettvinklet trekant har kateter $a = 6$ cm og hypotenuse $c = 10$ cm. Hva er den andre kateten?',
            options: [
              { id: 'a', text: '$4$ cm', isCorrect: false },
              { id: 'b', text: '$8$ cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{136}$ cm', isCorrect: false },
              { id: 'd', text: '$16$ cm', isCorrect: false },
            ],
            solution: '$b^2 = c^2 - a^2 = 100 - 36 = 64 \\implies b = 8$ cm.',
          },
          {
            id: '9-12-3-n-quiz2-q1',
            task: 'En jakke koster 800 kr og er satt ned 30 %. Hva er den nye prisen?',
            options: [
              { id: 'a', text: '$240$ kr', isCorrect: false },
              { id: 'b', text: '$560$ kr', isCorrect: true },
              { id: 'c', text: '$600$ kr', isCorrect: false },
              { id: 'd', text: '$770$ kr', isCorrect: false },
            ],
            solution: '$30 \\%$ rabatt betyr at du betaler $70 \\%$. Ny pris: $800 \\cdot 0{,}70 = 560$ kr.',
          },
          {
            id: '9-12-3-n-quiz2-q2',
            task: 'En sylinderformet vannflaske har radius $3{,}5$ cm og hoyde $20$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$\\approx 220 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$\\approx 770 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$\\approx 440 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$\\approx 1540 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\pi r^2 h = \\pi \\cdot 3{,}5^2 \\cdot 20 = \\pi \\cdot 12{,}25 \\cdot 20 = 245\\pi \\approx 770 \\text{ cm}^3$.',
          },
        ],
      },
    },

    {
      id: '9-12-3-n-section4',
      type: 'text',
      content: `## Statistikk og sannsynlighet

Disse emnene dukker nesten alltid opp pa tentamen:

**Sentralmal:**
- **Gjennomsnitt**: Sum av alle verdier delt pa antall
- **Median**: Den midterste verdien nar tallene er sortert (med partall verdier: gjennomsnittet av de to midterste)
- **Typetall**: Det tallet som forekommer flest ganger

**Sannsynlighet:**
- Sannsynlighet: $P(A) = \\frac{\\text{gunstige utfall}}{\\text{mulige utfall}}$
- Uten tilbakelegging: etter forste trekk endres bade teller og nevner

**Lineaere funksjoner:**
- $y = ax + b$ der $a$ er stigningstall og $b$ er konstantledd
- Stigningstallet $a$ forteller hvor mye $y$ endres nar $x$ oker med 1
- Konstantleddet $b$ er der grafen krysser $y$-aksen

En taxitur koster 50 kr i oppstartsgebyr pluss 12 kr per kilometer: $K(x) = 12x + 50$. Stigningstallet er 12 (prisen oker med 12 kr per km) og konstantleddet er 50 (startgebyret).`,
    },

    {
      id: '9-12-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-12-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Blandet tentamenoving -- statistikk, sannsynlighet og funksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-3-n-quiz3-q0',
            task: 'Tallene $3, 5, 5, 7, 8, 9, 9, 9, 12$ er gitt. Hva er typetallet?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$7$', isCorrect: false },
              { id: 'c', text: '$9$', isCorrect: true },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: 'Typetallet er det tallet som forekommer flest ganger. $9$ forekommer 3 ganger, mens $5$ forekommer 2 ganger og resten 1 gang.',
          },
          {
            id: '9-12-3-n-quiz3-q1',
            task: 'I en pose er det 5 rode og 3 bla kuler. Du trekker to kuler uten tilbakelegging. Hva er sannsynligheten for to rode?',
            options: [
              { id: 'a', text: '$\\frac{25}{64}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{14}$', isCorrect: false },
              { id: 'c', text: '$\\frac{5}{28}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{14}$', isCorrect: true },
            ],
            solution: 'Forste trekk: $P = \\frac{5}{8}$. Andre trekk (uten tilbakelegging): $P = \\frac{4}{7}$. Samlet: $\\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.',
          },
          {
            id: '9-12-3-n-quiz3-q2',
            task: 'En taxitur koster $K(x) = 50 + 12x$ kr. Du betalte 194 kr. Hvor langt kjorte du?',
            options: [
              { id: 'a', text: '$10$ km', isCorrect: false },
              { id: 'b', text: '$12$ km', isCorrect: true },
              { id: 'c', text: '$14$ km', isCorrect: false },
              { id: 'd', text: '$16$ km', isCorrect: false },
            ],
            solution: '$50 + 12x = 194 \\implies 12x = 144 \\implies x = 12$ km. Kontroll: $50 + 12 \\cdot 12 = 50 + 144 = 194$ kr.',
          },
        ],
      },
    },

    {
      id: '9-12-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-12-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Sammensatt tentamenoving -- krevende oppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-12-3-n-quiz4-q0',
            task: 'En idrettsbane er et rektangel (100 m $\\times$ 60 m) med en halvsirkel i hver ende. Hva er omkretsen av banen?',
            options: [
              { id: 'a', text: '$320$ m', isCorrect: false },
              { id: 'b', text: '$\\approx 389$ m', isCorrect: true },
              { id: 'c', text: '$\\approx 503$ m', isCorrect: false },
              { id: 'd', text: '$200 + 120\\pi$ m', isCorrect: false },
            ],
            solution: 'To langsider: $2 \\cdot 100 = 200$ m. To halvsirkler = en hel sirkel med diameter 60 m: $\\pi \\cdot 60 \\approx 188{,}5$ m. Totalt: $200 + 60\\pi \\approx 388{,}5 \\approx 389$ m.',
          },
          {
            id: '9-12-3-n-quiz4-q1',
            task: 'I en klasse med 30 elever er gjennomsnittet 145 kr i innsamling. Jentene (18 stk) samlet i snitt 160 kr. Hva var gjennomsnittet for guttene?',
            options: [
              { id: 'a', text: '$130$ kr', isCorrect: false },
              { id: 'b', text: '$122{,}50$ kr', isCorrect: true },
              { id: 'c', text: '$125$ kr', isCorrect: false },
              { id: 'd', text: '$115$ kr', isCorrect: false },
            ],
            solution: 'Totalt: $30 \\cdot 145 = 4350$ kr. Jentene: $18 \\cdot 160 = 2880$ kr. Guttene: $4350 - 2880 = 1470$ kr. Antall gutter: $30 - 18 = 12$. Gjennomsnitt: $\\frac{1470}{12} = 122{,}50$ kr.',
          },
        ],
      },
    },

    {
      id: '9-12-3-n-summary',
      type: 'text',
      content: `## Oppsummering -- gylne regler for tentamen

1. **Les oppgaven to ganger** for du begynner a regne
2. **Vis alltid mellomregning** -- formel, innsetting, utregning, svar med enhet
3. **Sjekk svaret** -- er det rimelig? Sett gjerne svaret tilbake i oppgaven
4. **Gi aldri opp** -- selv om du ikke finner hele svaret, kan du fa delpoeng
5. **Pass pa enhetene** -- cm, m, kr, kg, liter. Skriv alltid enheten!
6. **Tegn figurer** -- det hjelper deg a forsta oppgaven og viser sensor at du tenker
7. **Bruk tiden smart** -- ikke bruk for lang tid pa en oppgave. Kom tilbake til den senere

De viktigste emnene: brokregning, prosentregning, likninger, Pytagoras, areal/volum, statistikk (gjennomsnitt/median/typetall), sannsynlighet, og lineaere funksjoner.

**Lykke til med tentamen! Husk: god forberedelse er halve jobben, og du har allerede lagt ned mye arbeid gjennom hele aret.**`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL12_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_12_1_NARRATIV,
  CHAPTER_9_12_2_NARRATIV,
  CHAPTER_9_12_3_NARRATIV,
];
