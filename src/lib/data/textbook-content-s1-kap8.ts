/**
 * Tekstbok kapitler for S1 - Kapittel 2.6, 7.4, 8.1, 8.2
 * Trigonometriske funksjoner, Multippel regresjon, Matematisk modellering, Numeriske metoder
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.6: Trigonometriske funksjoner
// ============================================================================

export const CHAPTER_S1_2_6: TextbookChapter = {
  id: 's1-2-6',
  courseId: 's1',
  chapterNumber: '2.6',
  title: 'Trigonometriske funksjoner',
  description: 'Lær om sinus, cosinus og tangens i S1-kontekst, periodiske modeller og praktiske anvendelser.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke trigonometriske funksjoner til å modellere periodiske sammenhenger',
    'tolke og anvende sinus-, cosinus- og tangensfunksjoner i praktiske situasjoner',
  ],
  content: [
    {
      id: 's1-2-6-intro',
      type: 'text',
      content: `## Trigonometriske funksjoner i S1

Mange fenomener i naturen og samfunnet gjentar seg med jevne mellomrom: temperaturer gjennom året, tidevann, lyd og lys. Slike **periodiske** fenomener kan modelleres med trigonometriske funksjoner.

I S1 bruker vi trigonometriske funksjoner som verktøy for **modellering**. Vi fokuserer på hvordan vi kan tilpasse funksjonene til virkelige datasett og tolke parameterne i kontekst.`,
    },
    {
      id: 's1-2-6-repetisjon',
      type: 'text',
      content: `## Repetisjon: sinus, cosinus og tangens

Fra enhetssirkelen (sirkel med sentrum i origo og radius 1) definerer vi for en vinkel $v$:

$$\\cos v = x\\text{-koordinaten}, \\quad \\sin v = y\\text{-koordinaten}, \\quad \\tan v = \\frac{\\sin v}{\\cos v}$$

Disse definisjonene gjelder for alle vinkler, ikke bare de mellom $0°$ og $90°$.`,
    },
    {
      id: 's1-2-6-def-radianer',
      type: 'definition',
      title: 'Radianer',
      content: `En **radian** er vinkelmålet der buelengden langs enhetssirkelen er lik radius.

$$\\pi \\text{ rad} = 180°$$

Omregning:
- Fra grader til radianer: $v_{\\text{rad}} = v° \\cdot \\frac{\\pi}{180}$
- Fra radianer til grader: $v° = v_{\\text{rad}} \\cdot \\frac{180}{\\pi}$

**Viktige verdier:** $90° = \\frac{\\pi}{2}$, $\\;180° = \\pi$, $\\;360° = 2\\pi$`,
    },
    {
      id: 's1-2-6-def-generell-sinus',
      type: 'definition',
      title: 'Generell sinusfunksjon',
      content: `Den generelle sinusfunksjonen er:

$$f(x) = A \\sin\\!\\bigl(B(x - C)\\bigr) + D$$

- $|A|$ er **amplituden** (halve svingningsutslaget)
- $T = \\frac{2\\pi}{|B|}$ er **perioden** (lengden av en hel svingning)
- $C$ er **faseforskyvningen** (horisontal forskyving)
- $D$ er **likevektslinjen** (vertikal forskyving)

Funksjonen svinger mellom $D - |A|$ og $D + |A|$.`,
    },
    {
      id: 's1-2-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestemme parametere fra graf',
      problem: `En periodisk funksjon har toppunkt $(2, 8)$ og bunnpunkt $(8, 2)$. Beskriv den som $f(x) = A\\sin\\!\\bigl(B(x - C)\\bigr) + D$.`,
      solution: `**Løsning:**

**Likevektslinje:** $D = \\frac{8 + 2}{2} = 5$

**Amplitude:** $A = \\frac{8 - 2}{2} = 3$

**Periode:** Avstand topp-bunn er halv periode: $\\frac{T}{2} = 8 - 2 = 6$, så $T = 12$.

$$B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$$

**Faseforskyvning:** Sinus har toppunkt $\\frac{T}{4}$ etter start: $C = 2 - 3 = -1$.

$$f(x) = 3\\sin\\!\\left(\\frac{\\pi}{6}(x + 1)\\right) + 5$$`,
    },
    {
      id: 's1-2-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Temperaturmodell',
      problem: `Gjennomsnittstemperaturen varierer mellom $-5°$C i januar ($t = 1$) og $17°$C i juli ($t = 7$). Sett opp en sinusmodell $T(t) = A\\sin\\!\\bigl(B(t - C)\\bigr) + D$ der $t$ er månedsnummer.`,
      solution: `**Løsning:**

$D = \\frac{17 + (-5)}{2} = 6$, $\\quad A = \\frac{17 - (-5)}{2} = 11$

Periode $T = 12$: $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$

Maks i $t = 7$: $C = 7 - \\frac{12}{4} = 4$

$$T(t) = 11\\sin\\!\\left(\\frac{\\pi}{6}(t - 4)\\right) + 6$$

Kontroll: $T(7) = 11\\sin\\!\\bigl(\\frac{\\pi}{2}\\bigr) + 6 = 17$ ✓, $\\;T(1) = 11\\sin\\!\\bigl(-\\frac{\\pi}{2}\\bigr) + 6 = -5$ ✓`,
    },
    {
      id: 's1-2-6-tip-valg',
      type: 'tip',
      title: 'Sinus eller cosinus?',
      content: `- Bruk **cosinus** hvis dataene starter i et toppunkt eller bunnpunkt
- Bruk **sinus** hvis dataene starter ved likevektslinjen og stiger

Sammenhengen: $\\cos x = \\sin\\!\\bigl(x + \\frac{\\pi}{2}\\bigr)$`,
    },
    {
      id: 's1-2-6-identiteter',
      type: 'theorem',
      title: 'Viktige trigonometriske identiteter',
      content: `**Grunnidentitet:** $\\sin^2 x + \\cos^2 x = 1$

**Symmetri:**
$$\\sin(-x) = -\\sin x, \\quad \\cos(-x) = \\cos x$$

**Tangens:** $\\tan x = \\frac{\\sin x}{\\cos x}$, periode $\\pi$, udefinert for $x = \\frac{\\pi}{2} + n\\pi$.`,
    },
    {
      id: 's1-2-6-warning',
      type: 'warning',
      title: 'Radianer på kalkulatoren',
      content: `Sett kalkulatoren i **radianmodus** (RAD) når du regner med trigonometriske modeller der $B$ er oppgitt som f.eks. $\\frac{\\pi}{6}$. Gradmodus (DEG) gir feil svar.`,
    },
    // ===== OPPGAVER =====
    {
      id: 's1-2-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom grader og radianer:',
        subTasks: [
          { label: 'a', task: 'Gjør om $120°$ til radianer.', solution: '$120° \\cdot \\frac{\\pi}{180} = \\frac{2\\pi}{3}$', answer: '2pi/3' },
          { label: 'b', task: 'Gjør om $\\frac{5\\pi}{4}$ radianer til grader.', solution: '$\\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = 225°$', answer: '225' },
          { label: 'c', task: 'Gjør om $45°$ til radianer.', solution: '$45° \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{4}$', answer: 'pi/4' },
        ],
        solution: 'a) $\\frac{2\\pi}{3}$ b) $225°$ c) $\\frac{\\pi}{4}$',
        hints: ['Bruk formelen: radianer $= \\text{grader} \\cdot \\frac{\\pi}{180}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'For funksjonen $f(x) = 4\\sin\\!\\bigl(\\frac{\\pi}{3}x\\bigr) + 1$, bestem amplitude, periode og likevektslinje.',
        solution: `Amplitude: $|A| = 4$. Periode: $T = \\frac{2\\pi}{\\pi/3} = 6$. Likevektslinje: $y = 1$.

Funksjonen svinger mellom $1 - 4 = -3$ og $1 + 4 = 5$.`,
        hints: ['Sammenlign med $A\\sin(Bx) + D$ og les av $A$, $B$ og $D$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vannstanden i en havn varierer mellom 1,2 m og 3,8 m med periode 12,4 timer. Hoyvann inntreffer $t = 3$ timer etter midnatt. Sett opp en sinusmodell $h(t)$.',
        solution: `$D = \\frac{3{,}8 + 1{,}2}{2} = 2{,}5$, $\\;A = \\frac{3{,}8 - 1{,}2}{2} = 1{,}3$, $\\;B = \\frac{2\\pi}{12{,}4} \\approx 0{,}507$

Maks i $t = 3$: $C = 3 - \\frac{12{,}4}{4} = -0{,}1$

$$h(t) = 1{,}3\\sin\\!\\bigl(0{,}507(t + 0{,}1)\\bigr) + 2{,}5$$`,
        hints: ['Bruk samme fremgangsmåte som i temperatureksempelet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sinusfunksjon har toppunkt $(3, 10)$ og bunnpunkt $(9, 2)$. Bestem $A$, $B$ og $D$ i $f(x) = A\\sin(Bx) + D$.',
        solution: `$D = \\frac{10 + 2}{2} = 6$, $\\;A = \\frac{10 - 2}{2} = 4$

Halv periode $= 9 - 3 = 6$, $\\;T = 12$, $\\;B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$`,
        hints: ['Avstanden mellom toppunkt og bunnpunkt er en halv periode'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Dagslys modelleres med $L(t) = 6{,}5\\sin\\!\\bigl(\\frac{\\pi}{6}(t - 3{,}5)\\bigr) + 12{,}5$ der $t$ er manedsnummer.',
        subTasks: [
          { label: 'a', task: 'Hvor mange timer dagslys er det i juni ($t = 6$)?', solution: '$L(6) = 6{,}5\\sin\\!\\bigl(\\frac{\\pi}{6} \\cdot 2{,}5\\bigr) + 12{,}5 \\approx 6{,}5 \\cdot 0{,}966 + 12{,}5 \\approx 18{,}8$ timer', answer: '18.8' },
          { label: 'b', task: 'Nar er det lengst dag?', solution: 'Maks nar sinus er 1: $\\frac{\\pi}{6}(t - 3{,}5) = \\frac{\\pi}{2}$, gir $t = 6{,}5$ (midten av juni).', answer: '6.5' },
          { label: 'c', task: 'Hva er forskjellen i daglengde mellom sommer og vinter?', solution: 'Maks $19$ timer, min $6$ timer. Forskjell: $13$ timer.', answer: '13' },
        ],
        solution: 'a) Ca. 18,8 timer b) $t \\approx 6{,}5$ c) 13 timer',
        hints: ['Sett inn $t$-verdien og regn ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stromforbruket i et hus modelleres med $S(t) = 3\\cos\\!\\bigl(\\frac{\\pi}{12}t\\bigr) + 5$ der $t$ er timer etter midnatt og $S$ er i kW. Finn maks og min forbruk, og nar de inntreffer.',
        solution: `$\\cos 0 = 1$: Maks i $t = 0$ (midnatt): $S(0) = 3 + 5 = 8$ kW.

$\\cos \\pi = -1$: Min i $t = 12$ (kl. 12): $S(12) = -3 + 5 = 2$ kW.`,
        hints: ['$\\cos(0) = 1$ og $\\cos(\\pi) = -1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at $\\sin^2 x + \\cos^2 x = 1$ for $x = \\frac{\\pi}{6}$.',
        solution: `$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, $\\;\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$

$\\bigl(\\frac{1}{2}\\bigr)^2 + \\bigl(\\frac{\\sqrt{3}}{2}\\bigr)^2 = \\frac{1}{4} + \\frac{3}{4} = 1$ ✓`,
        hints: ['Bruk kjente verdier for $\\sin 30°$ og $\\cos 30°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator:',
        subTasks: [
          { label: 'a', task: '$\\tan 45°$', solution: '$\\frac{\\sin 45°}{\\cos 45°} = 1$', answer: '1' },
          { label: 'b', task: '$\\tan 60°$', solution: '$\\frac{\\sin 60°}{\\cos 60°} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$', answer: 'sqrt(3)' },
          { label: 'c', task: '$\\tan 0°$', solution: '$\\frac{0}{1} = 0$', answer: '0' },
        ],
        solution: 'a) 1 b) $\\sqrt{3}$ c) 0',
        hints: ['$\\tan v = \\frac{\\sin v}{\\cos v}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Iskremsalg (tusen enheter) modelleres som $S(t) = a\\sin\\!\\bigl(b(t - c)\\bigr) + d$. Salget er 10 000 i januar ($t=1$), 40 000 i april ($t=4$) og 70 000 i juli ($t=7$). Bestem modellen.',
        solution: `Maks 70 (juli), min 10 (januar). $d = \\frac{70+10}{2} = 40$, $\\;a = \\frac{70-10}{2} = 30$.

$T = 12$, $\\;b = \\frac{\\pi}{6}$. Maks i $t = 7$: $c = 7 - 3 = 4$.

$$S(t) = 30\\sin\\!\\left(\\frac{\\pi}{6}(t-4)\\right) + 40$$

Kontroll: $S(4) = 30\\sin(0)+40 = 40$ ✓, $\\;S(7) = 30\\cdot 1+40 = 70$ ✓`,
        hints: ['Identifiser maks- og minverdier forst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En pendel svinger med $s(t) = 0{,}15\\sin(2\\pi t)$ der $s$ er utslag i meter og $t$ er tid i sekunder.',
        subTasks: [
          { label: 'a', task: 'Bestem amplitude og periode.', solution: 'Amplitude: $0{,}15$ m. Periode: $T = \\frac{2\\pi}{2\\pi} = 1$ s.' },
          { label: 'b', task: 'Hva er utslaget etter $t = 0{,}25$ s?', solution: '$s(0{,}25) = 0{,}15\\sin(\\frac{\\pi}{2}) = 0{,}15$ m.', answer: '0.15' },
          { label: 'c', task: 'Nar er utslaget forst lik $0{,}075$ m?', solution: '$0{,}15\\sin(2\\pi t) = 0{,}075 \\Rightarrow \\sin(2\\pi t) = 0{,}5 \\Rightarrow 2\\pi t = \\frac{\\pi}{6} \\Rightarrow t = \\frac{1}{12} \\approx 0{,}083$ s.', answer: '0.083' },
        ],
        solution: 'a) 0,15 m, 1 s b) 0,15 m c) $t \\approx 0{,}083$ s',
        hints: ['Les av $A$ og $B$ fra funksjonsuttrykket'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gitt $\\sin x = 0{,}6$ og $0 < x < \\frac{\\pi}{2}$. Finn $\\cos x$ og $\\tan x$.',
        solution: `$\\cos^2 x = 1 - 0{,}6^2 = 0{,}64$, $\\;\\cos x = 0{,}8$ (positiv i forste kvadrant).

$\\tan x = \\frac{0{,}6}{0{,}8} = 0{,}75$`,
        hints: ['Bruk $\\sin^2 x + \\cos^2 x = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Dybden i en innsjo modelleres med $d(t) = 2{,}5\\cos\\!\\bigl(\\frac{\\pi}{6}(t-4)\\bigr) + 8{,}5$ der $t$ er manedsnummer. I hvilke maneder er dybden over 10 m?',
        solution: `$d(t) > 10$: $2{,}5\\cos\\!\\bigl(\\frac{\\pi}{6}(t-4)\\bigr) > 1{,}5$, dvs. $\\cos\\!\\bigl(\\frac{\\pi}{6}(t-4)\\bigr) > 0{,}6$.

$\\cos u > 0{,}6$ nar $|u| < 0{,}927$. Gir $-0{,}927 < \\frac{\\pi}{6}(t-4) < 0{,}927$, dvs. $2{,}23 < t < 5{,}77$.

Dybden er over 10 m i mars, april og mai.`,
        hints: ['Los ulikheten $\\cos(\\ldots) > 0{,}6$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Passasjertall (tusen) pa en ferge modelleres med $P(t) = 25\\sin\\!\\bigl(\\frac{\\pi}{6}(t-1)\\bigr) + 45$. I hvilke maneder er det flere enn 60 000 passasjerer?',
        solution: `$25\\sin\\!\\bigl(\\frac{\\pi}{6}(t-1)\\bigr) > 15$, dvs. $\\sin\\!\\bigl(\\frac{\\pi}{6}(t-1)\\bigr) > 0{,}6$.

$\\arcsin(0{,}6) \\approx 0{,}6435$. Sinus er over 0,6 nar $0{,}6435 < u < 2{,}498$.

$\\frac{0{,}6435 \\cdot 6}{\\pi} + 1 < t < \\frac{2{,}498 \\cdot 6}{\\pi} + 1$, dvs. $2{,}23 < t < 5{,}77$.

Svar: Mars, april og mai.`,
        hints: ['Bruk $\\arcsin(0{,}6) \\approx 0{,}6435$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-2-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-2-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Temperaturen i et kjoleskap svinger mellom $2°$C og $8°$C med periode 30 minutter. Ved $t=0$ er temperaturen $5°$C og synkende. Sett opp en modell og finn nar temperaturen forst nar $8°$C.',
        solution: `$D = 5$, $A = 3$, $B = \\frac{2\\pi}{30} = \\frac{\\pi}{15}$.

Synkende fra likevekt ved $t=0$: $T(t) = -3\\sin\\!\\bigl(\\frac{\\pi}{15}t\\bigr) + 5$.

$T(t) = 8$: $-3\\sin\\!\\bigl(\\frac{\\pi}{15}t\\bigr) = 3$, $\\sin\\!\\bigl(\\frac{\\pi}{15}t\\bigr) = -1$, $\\frac{\\pi}{15}t = \\frac{3\\pi}{2}$, $t = 22{,}5$ min.`,
        hints: ['Synkende fra likevektslinjen betyr negativ sinus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== OPPSUMMERING =====
    {
      id: 's1-2-6-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Generell sinusfunksjon:** $f(x) = A\\sin\\!\\bigl(B(x - C)\\bigr) + D$

- $|A|$ = amplitude, $T = \\frac{2\\pi}{|B|}$ = periode, $C$ = faseforskyvning, $D$ = likevektslinje

**Fremgangsmate for modellering:**
1. $D = \\frac{\\text{maks} + \\text{min}}{2}$
2. $A = \\frac{\\text{maks} - \\text{min}}{2}$
3. $B = \\frac{2\\pi}{T}$
4. $C$ bestemmes fra toppunktets plassering

**Viktige identiteter:** $\\sin^2 x + \\cos^2 x = 1$, $\\;\\tan x = \\frac{\\sin x}{\\cos x}$

**Radianer:** $\\pi \\text{ rad} = 180°$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Multippel regresjon
// ============================================================================

export const CHAPTER_S1_7_4: TextbookChapter = {
  id: 's1-7-4',
  courseId: 's1',
  chapterNumber: '7.4',
  title: 'Multippel regresjon',
  description: 'Lær om regresjonsmodeller med to uavhengige variabler, tolkning av koeffisienter og modelldiagnostikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for og bruke regresjonsmodeller med flere uavhengige variabler',
    'tolke regresjonskoeffisienter og vurdere modellens kvalitet',
  ],
  content: [
    {
      id: 's1-7-4-intro',
      type: 'text',
      content: `## Fra enkel til multippel regresjon

I enkel lineær regresjon modellerer vi $y$ som funksjon av en variabel: $\\hat{y} = a + bx$. Men i praksis avhenger en responsvariabel ofte av **flere** forklaringsvariabler.

**Eksempel:** Prisen pa en bruktbil avhenger bade av alder og kilometerstand. Salget i en butikk avhenger av reklameinnsats og pris.

**Multippel regresjon** lar oss modellere slike sammenhenger.`,
    },
    {
      id: 's1-7-4-def',
      type: 'definition',
      title: 'Multippel lineær regresjon',
      content: `En modell med to uavhengige variabler:

$$\\hat{y} = b_0 + b_1 x_1 + b_2 x_2$$

- $b_0$ er konstantleddet (skjaering nar $x_1 = x_2 = 0$)
- $b_1$ er endring i $\\hat{y}$ per enhet okning i $x_1$, **nar $x_2$ holdes konstant**
- $b_2$ er endring i $\\hat{y}$ per enhet okning i $x_2$, **nar $x_1$ holdes konstant**

Denne «alt annet likt»-tolkningen er den viktigste forskjellen fra enkel regresjon.`,
    },
    {
      id: 's1-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruktbilpris',
      problem: `En regresjonsanalyse av bruktbilpriser (tusen kr) gir:

$$\\hat{y} = 350 - 25x_1 - 0{,}8x_2$$

der $x_1$ er alder (ar) og $x_2$ er kjorerlengde (tusen km). Tolk koeffisientene og estimer prisen for en 5 ar gammel bil med 80 000 km.`,
      solution: `**Tolkning:**
- $b_0 = 350$: Ny bil med 0 km koster ca. 350 000 kr
- $b_1 = -25$: Prisen synker 25 000 kr per ar (kjorerlengde konstant)
- $b_2 = -0{,}8$: Prisen synker 800 kr per 1000 km (alder konstant)

**Prediksjon:**
$$\\hat{y} = 350 - 25 \\cdot 5 - 0{,}8 \\cdot 80 = 350 - 125 - 64 = 161$$

Estimert pris: **161 000 kr**.`,
    },
    {
      id: 's1-7-4-r2',
      type: 'text',
      content: `## Forklaringsgrad og justert $R^2$

$R^2$ angir andelen av variasjonen i $y$ som forklares av modellen. Ved multippel regresjon bruker vi **justert $R^2$** som straffer for ekstra variabler:

$$R^2_{\\text{just}} = 1 - \\frac{(1 - R^2)(n-1)}{n - k - 1}$$

- $n$ = antall observasjoner, $k$ = antall uavhengige variabler
- Justert $R^2$ kan **synke** hvis en ny variabel ikke bidrar nok`,
    },
    {
      id: 's1-7-4-def-r2',
      type: 'definition',
      title: 'Tolkning av $R^2$',
      content: `- $R^2 = 0{,}85$ betyr at modellen forklarer 85 % av variasjonen i $y$
- $R^2 = 1$: perfekt tilpasning
- $R^2 = 0$: modellen forklarer ingenting
- Bruk justert $R^2$ til a sammenligne modeller med ulikt antall variabler`,
    },
    {
      id: 's1-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne modeller',
      problem: `To modeller for avlingsutbytte (tonn/dekar), $n = 20$:

**Modell 1:** $\\hat{y} = 2{,}1 + 0{,}5x_1$ (gjodsel), $R^2 = 0{,}72$

**Modell 2:** $\\hat{y} = 1{,}3 + 0{,}4x_1 + 0{,}03x_2$ (gjodsel + nedbor), $R^2 = 0{,}89$

Hvilken modell bor velges?`,
      solution: `**Modell 1** ($k=1$): $R^2_{\\text{just}} = 1 - \\frac{0{,}28 \\cdot 19}{18} = 0{,}704$

**Modell 2** ($k=2$): $R^2_{\\text{just}} = 1 - \\frac{0{,}11 \\cdot 19}{17} = 0{,}877$

Justert $R^2$ oker fra 0,70 til 0,88 ved a legge til nedbor. **Modell 2 er klart bedre.**`,
    },
    {
      id: 's1-7-4-residualer',
      type: 'text',
      content: `## Residualer og modelldiagnostikk

Et **residual** er: $e_i = y_i - \\hat{y}_i$ (observert minus predikert).

For a vurdere modellen undersokker vi:
1. **Residualplott**: Bor vise tilfeldig spredning uten monster
2. **Normalfordeling** av residualene
3. **Konstant varians**: Spredningen bor være omtrent lik for alle predikerte verdier
4. **Uteliggere**: Observasjoner med uvanlig store residualer`,
    },
    {
      id: 's1-7-4-warning',
      type: 'warning',
      title: 'Korrelasjon er ikke kausalitet',
      content: `En regresjonsmodell viser statistisk sammenheng, men beviser **ikke** arsakssammenheng. Iskremssalg og drukningsulykker korrelerer begge med temperatur, men iskrem forårsaker ikke drukning.`,
    },
    // ===== OPPGAVER =====
    {
      id: 's1-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Husleie (kr/mnd) modelleres med $\\hat{y} = 3000 + 80x_1 + 500x_2$ der $x_1$ er areal (m$^2$) og $x_2$ er antall soverom. Tolk koeffisientene og finn estimert leie for 65 m$^2$ med 2 soverom.',
        solution: `$b_1 = 80$: Leien oker 80 kr per ekstra m$^2$. $b_2 = 500$: 500 kr per ekstra soverom.

$\\hat{y} = 3000 + 80 \\cdot 65 + 500 \\cdot 2 = 9200$ kr/mnd.`,
        hints: ['Sett inn verdiene i modellen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Ukentlig salg modelleres med $\\hat{y} = 200 + 15x_1 - 8x_2$ der $x_1$ er reklame (tusen kr) og $x_2$ er pris (kr). Hva skjer med salget hvis reklamen oker med 2000 kr og prisen oker med 10 kr?',
        solution: `Reklame: $15 \\cdot 2 = 30$ opp. Pris: $-8 \\cdot 10 = -80$ ned.

Total: $30 - 80 = -50$. Salget synker med 50 enheter.`,
        hints: ['Beregn bidraget fra hver variabel separat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Eksamenskarakter modelleres med $\\hat{y} = 1{,}2 + 0{,}03x_1 + 0{,}5x_2$ der $x_1$ = timer oving og $x_2$ = standpunktkarakter. Hvor mange timer oving trengs for a kompensere for en karakter lavere standpunkt?',
        solution: `Tap fra lavere standpunkt: $0{,}5$.

$0{,}03 \\cdot \\Delta x_1 = 0{,}5 \\Rightarrow \\Delta x_1 = \\frac{0{,}5}{0{,}03} \\approx 16{,}7$ timer.

Ca. **17 timer** ekstra oving.`,
        hints: ['Sett effektene lik hverandre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn justert $R^2$ nar $R^2 = 0{,}78$, $n = 30$ og $k = 2$.',
        solution: `$R^2_{\\text{just}} = 1 - \\frac{(1-0{,}78)(30-1)}{30-2-1} = 1 - \\frac{0{,}22 \\cdot 29}{27} = 1 - 0{,}236 = 0{,}764$`,
        hints: ['Bruk formelen $R^2_{\\text{just}} = 1 - \\frac{(1-R^2)(n-1)}{n-k-1}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stromforbruk (kWh/dag) modelleres med $\\hat{y} = 18 - 0{,}6x_1 + 2{,}5x_2$ der $x_1$ er utetemperatur (°C) og $x_2$ er antall personer.',
        subTasks: [
          { label: 'a', task: 'Tolk koeffisientene.', solution: '$b_1 = -0{,}6$: Forbruket synker 0,6 kWh per grad varmere. $b_2 = 2{,}5$: Forbruket oker 2,5 kWh per ekstra person.' },
          { label: 'b', task: 'Estimer forbruket ved $-10°$C og 4 personer.', solution: '$\\hat{y} = 18 - 0{,}6 \\cdot (-10) + 2{,}5 \\cdot 4 = 18 + 6 + 10 = 34$ kWh/dag.', answer: '34' },
        ],
        solution: 'a) Se tolkning b) 34 kWh/dag',
        hints: ['Negativ temperatur gir positivt bidrag fra $-0{,}6 \\cdot (-10)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt modellen $\\hat{y} = 10 + 2x_1 + 3x_2$ og data:

| $x_1$ | $x_2$ | $y$ |
|---|---|---|
| 1 | 2 | 19 |
| 3 | 1 | 18 |
| 2 | 3 | 24 |

Beregn predikerte verdier og residualer.`,
        solution: `$\\hat{y}_1 = 10+2+6 = 18$, $e_1 = 19-18 = 1$

$\\hat{y}_2 = 10+6+3 = 19$, $e_2 = 18-19 = -1$

$\\hat{y}_3 = 10+4+9 = 23$, $e_3 = 24-23 = 1$

Residualene er sma og har blandet fortegn.`,
        hints: ['$e_i = y_i - \\hat{y}_i$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom $R^2$ og justert $R^2$. Hvorfor kan $R^2$ aldri synke nar vi legger til en ny variabel?',
        solution: `$R^2$ oker alltid fordi modellen kan velge koeffisient 0 for den nye variabelen. Justert $R^2$ straffer for ekstra variabler og kan synke hvis variabelen ikke bidrar nok.`,
        hints: ['Tenk pa hva som skjer nar den nye variabelen far koeffisient 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To lonnsmodeller (tusen kr/ar), $n = 50$:

**A:** $\\hat{y} = 300 + 8x_1$, $R^2 = 0{,}65$ ($x_1$ = erfaring)
**B:** $\\hat{y} = 250 + 6x_1 + 30x_2$, $R^2 = 0{,}82$ ($x_2$ = utdanning)

Beregn justert $R^2$ for begge og vurder.`,
        solution: `**A** ($k=1$): $R^2_{\\text{just}} = 1 - \\frac{0{,}35 \\cdot 49}{48} = 0{,}643$

**B** ($k=2$): $R^2_{\\text{just}} = 1 - \\frac{0{,}18 \\cdot 49}{47} = 0{,}812$

Modell B er klart bedre. Utdanning bidrar vesentlig.`,
        hints: ['Beregn justert $R^2$ for begge separat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Boligpris (mill. kr): $\\hat{y} = 0{,}5 + 0{,}06x_1 + 0{,}3x_2 - 0{,}02x_3$ der $x_1$ = areal (m$^2$), $x_2$ = soverom, $x_3$ = avstand sentrum (km).`,
        subTasks: [
          { label: 'a', task: 'Estimer prisen for 120 m$^2$, 3 soverom, 5 km fra sentrum.', solution: '$\\hat{y} = 0{,}5 + 7{,}2 + 0{,}9 - 0{,}1 = 8{,}5$ mill. kr.', answer: '8.5' },
          { label: 'b', task: 'Hvor mye synker prisen per km fra sentrum?', solution: '20 000 kr per km.', answer: '20000' },
          { label: 'c', task: 'Hvor mye ekstra areal kompenserer for ett soverom mindre?', solution: '$\\frac{0{,}3}{0{,}06} = 5$ m$^2$.', answer: '5' },
        ],
        solution: 'a) 8,5 mill. b) 20 000 kr/km c) 5 m$^2$',
        hints: ['Del effekten av soverom pa effekten av areal'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Produktivitetsmodell ($n = 40$):

**1:** $\\hat{y} = 8 + 1{,}2x_1 + 0{,}8x_2$, $R^2 = 0{,}74$ ($x_1$ = erfaring, $x_2$ = utdanning)

**2:** $\\hat{y} = 10 + 1{,}1x_1 + 0{,}7x_2 - 0{,}05x_3$, $R^2 = 0{,}75$ ($x_3$ = alder)

Bor alder inkluderes?`,
        solution: `**1** ($k=2$): $R^2_{\\text{just}} = 1 - \\frac{0{,}26 \\cdot 39}{37} = 0{,}726$

**2** ($k=3$): $R^2_{\\text{just}} = 1 - \\frac{0{,}25 \\cdot 39}{36} = 0{,}729$

Marginal okning (0,726 til 0,729). Alder bor trolig **ikke** inkluderes. Alder korrelerer sannsynligvis med erfaring (multikollinearitet).`,
        hints: ['Beregn justert $R^2$ for begge'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `S1-eksamenskarakter: $\\hat{y} = 0{,}8 + 0{,}02x_1 + 0{,}4x_2 + 0{,}3x_3$ der $x_1$ = timer oving/uke, $x_2$ = terminkarakter, $x_3$ = CAS-bruk (0/1). $R^2 = 0{,}71$, $n = 100$.`,
        subTasks: [
          { label: 'a', task: 'Tolk koeffisienten til $x_3$.', solution: 'CAS-brukere far forventet 0,3 karakterpoeng hoyere, alt annet likt.' },
          { label: 'b', task: 'Estimer karakter for 10 timer/uke, terminkarakter 4, bruker CAS.', solution: '$\\hat{y} = 0{,}8 + 0{,}2 + 1{,}6 + 0{,}3 = 2{,}9$', answer: '2.9' },
          { label: 'c', task: 'Beregn justert $R^2$.', solution: '$R^2_{\\text{just}} = 1 - \\frac{0{,}29 \\cdot 99}{96} = 0{,}701$', answer: '0.701' },
        ],
        solution: 'a) 0,3 hoyere b) 2,9 c) 0,701',
        hints: ['$x_3$ er en dummyvariabel (0 eller 1)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-7-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Modellen $\\hat{y} = 5 + 3x_1 - 2x_2$ gir $\\hat{y} = 14$ for en observasjon med $y = 16$. Hva er residualet, og hva betyr det?',
        solution: `$e = y - \\hat{y} = 16 - 14 = 2$. Modellen undervurderer observasjonen med 2 enheter.`,
        hints: ['Residual = observert minus predikert'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== OPPSUMMERING =====
    {
      id: 's1-7-4-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Multippel regresjon:** $\\hat{y} = b_0 + b_1 x_1 + b_2 x_2$

**Koeffisienttolkning:** $b_1$ viser endring i $\\hat{y}$ per enhet okning i $x_1$ **nar $x_2$ holdes konstant**.

**Justert $R^2$:** $R^2_{\\text{just}} = 1 - \\frac{(1-R^2)(n-1)}{n-k-1}$. Straffer for ekstra variabler.

**Residualer:** $e_i = y_i - \\hat{y}_i$. Bor vise tilfeldig monster.

**Korrelasjon $\\neq$ kausalitet.**`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1: Matematisk modellering
// ============================================================================

export const CHAPTER_S1_8_1: TextbookChapter = {
  id: 's1-8-1',
  courseId: 's1',
  chapterNumber: '8.1',
  title: 'Matematisk modellering',
  description: 'Lær om modelleringsprosessen, formulering av modeller, validering og sensitivitetsanalyse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke matematisk modellering til a beskrive og analysere praktiske problemer',
    'vurdere modellers gyldighet, begrensninger og sensitivitet',
  ],
  content: [
    {
      id: 's1-8-1-intro',
      type: 'text',
      content: `## Hva er matematisk modellering?

**Matematisk modellering** er prosessen der vi bruker matematikk til a beskrive, forutsi og forstå virkelige fenomener. En **modell** er en forenklet matematisk representasjon av virkeligheten.

Eksempler pa modeller du allerede kjenner:
- Lineær modell for bilpris som funksjon av alder
- Eksponentiell modell for bakterievekst
- Regresjonsmodell for sammenheng mellom variabler`,
    },
    {
      id: 's1-8-1-prosess',
      type: 'text',
      content: `## Modelleringsprosessen

Matematisk modellering folger en syklisk prosess:

**1. Problemformulering:** Hva skal beskrives? Hvilke variabler er relevante?

**2. Forenkling og antakelser:** Hvilke faktorer er viktigst? Hva kan vi se bort fra?

**3. Matematisk formulering:** Velg modelltype (lineær, eksponentiell, osv.) og bestem parametere.

**4. Losning:** Bruk modellen til beregninger og prediksjoner.

**5. Validering:** Sammenlign med virkeligheten. Passer modellen?

**6. Forbedring:** Juster modellen basert pa validering, eller ga tilbake til steg 2.

Prosessen er **iterativ**: vi forbedrer modellen trinnvis.`,
    },
    {
      id: 's1-8-1-def-modelltyper',
      type: 'definition',
      title: 'Vanlige modelltyper i S1',
      content: `| Modell | Formel | Typisk bruk |
|---|---|---|
| Lineær | $f(x) = ax + b$ | Jevn vekst/nedgang |
| Kvadratisk | $f(x) = ax^2 + bx + c$ | Kastkurver, optimering |
| Eksponentiell | $f(x) = a \\cdot b^x$ | Befolkning, renter, radioaktivitet |
| Potens | $f(x) = a \\cdot x^b$ | Naturvitenskap |
| Logistisk | $f(x) = \\frac{K}{1 + ce^{-bx}}$ | Begrenset vekst |`,
    },
    {
      id: 's1-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Velge modell fra data',
      problem: `En bakteriekultur males over tid:

| $t$ (timer) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| Antall | 100 | 195 | 410 | 790 | 1620 |

Velg en passende modell og bestem parameterne.`,
      solution: `**Analyse:** Antallet ser ut til a dobles omtrent annenhver time. Dette tyder pa **eksponentiell vekst**.

**Modell:** $f(t) = 100 \\cdot b^t$

Fra $f(2) = 195$: $b^2 = 1{,}95$, $b = \\sqrt{1{,}95} \\approx 1{,}396$

$$f(t) \\approx 100 \\cdot 1{,}40^t$$

**Validering:**
- $f(4) = 100 \\cdot 1{,}40^4 \\approx 384$ (data: 410, avvik 6 %)
- $f(8) = 100 \\cdot 1{,}40^8 \\approx 1475$ (data: 1620, avvik 9 %)

Modellen passer rimelig godt, men undervurderer litt for store $t$.`,
    },
    {
      id: 's1-8-1-validering',
      type: 'text',
      content: `## Validering av modeller

For a vurdere om en modell er god, bruker vi:

**Residualer:** $e_i = y_i - \\hat{y}_i$. Sma og tilfeldig spredte residualer tyder pa god modell.

**$R^2$-verdi:** Andel forklart variasjon. $R^2 > 0{,}9$ regnes vanligvis som god tilpasning.

**Grafisk kontroll:** Tegn modellen sammen med datapunktene.

**Ekstrapolasjon:** Vurder om modellen gir rimelige svar utenfor dataomradet.`,
    },
    {
      id: 's1-8-1-warning',
      type: 'warning',
      title: 'Modellens begrensninger',
      content: `Ingen modell er perfekt. Viktige begrensninger:

- **Ekstrapolasjon**: Modellen gjelder bare i narheten av datapunktene
- **Forenkling**: Viktige faktorer kan være utelatt
- **Gyldighetsomrade**: Angi alltid for hvilke verdier modellen er rimelig

En eksponentiell vekstmodell for bakterier gjelder f.eks. bare sa lenge naeringstilgangen er god.`,
    },
    {
      id: 's1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sensitivitetsanalyse',
      problem: `En bedrift modellerer inntekt med $I(x) = 500x - 2x^2$ der $x$ er pris (kr). Analyser modellens sensitivitet: hva skjer nar koeffisienten til $x^2$ endres fra $-2$ til $-2{,}5$ og $-1{,}5$?`,
      solution: `**Optimal pris:** $I'(x) = 500 - 4x = 0 \\Rightarrow x = 125$, $I(125) = 31\\,250$ kr.

**Med $-2{,}5$:** $I'(x) = 500 - 5x = 0 \\Rightarrow x = 100$, $I(100) = 25\\,000$ kr.

**Med $-1{,}5$:** $I'(x) = 500 - 3x = 0 \\Rightarrow x \\approx 167$, $I(167) \\approx 41\\,667$ kr.

**Konklusjon:** En endring pa 25 % i koeffisienten gir 20-33 % endring i optimal inntekt. Modellen er **moderat sensitiv** for denne parameteren.`,
    },
    {
      id: 's1-8-1-def-sensitivitet',
      type: 'definition',
      title: 'Sensitivitetsanalyse',
      content: `**Sensitivitetsanalyse** undersokker hvordan modellens resultater endrer seg nar vi varierer parameterne.

Fremgangsmate:
1. Identifiser nøkkelparametere i modellen
2. Varier hver parameter med f.eks. $\\pm 10\\,\\%$ eller $\\pm 20\\,\\%$
3. Beregn ny losning for hver variasjon
4. Vurder om endringene er store (sensitiv) eller sma (robust)

En modell som gir svært ulike resultater ved sma parameterendringer er **sensitiv** og bor brukes med forsiktighet.`,
    },
    {
      id: 's1-8-1-tip',
      type: 'tip',
      title: 'Tips for god modellering',
      content: `- Start med den **enkleste** modellen som kan være rimelig
- Bruk **fagkunnskap** til a velge modelltype, ikke bare $R^2$
- Angi alltid **antakelser** og **gyldighetsomrade**
- Sammenlikn gjerne flere modelltyper
- Vurder om modellen gir **rimelige svar** for ekstremverdier`,
    },
    // ===== OPPGAVER =====
    {
      id: 's1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Antall brukere av en app var 500 i januar og 650 i februar. Sett opp en lineær modell $f(x) = ax + b$ der $x$ er maneder etter januar, og estimer antall brukere i juni.',
        solution: `$b = 500$, $a = 650 - 500 = 150$. Modell: $f(x) = 150x + 500$.

Juni: $f(5) = 150 \\cdot 5 + 500 = 1250$ brukere.`,
        hints: ['Stigningstall = endring i $y$ delt pa endring i $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn residualene for modellen $\\hat{y} = 2x + 1$ med datapunktene $(1, 4)$, $(2, 4)$, $(3, 8)$. Passer modellen godt?',
        solution: `$\\hat{y}(1)=3$, $e_1=1$. $\\hat{y}(2)=5$, $e_2=-1$. $\\hat{y}(3)=7$, $e_3=1$.

Residualene er sma og varierer rundt null. Modellen passer rimelig godt.`,
        hints: ['$e_i = y_i - \\hat{y}_i$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke antakelser gjor du nar du bruker en lineær modell for a beskrive prisutvikling pa boliger over tid? Nevn minst tre.',
        solution: `1. Prisokningen er jevn (konstant per ar).
2. Ingen plutselige markedsendringer (finanskrise, pandemi).
3. Ingen ovre grense for pris.
4. Alle boliger folger samme trend.
5. Inflasjon og renteniva er stabile.`,
        hints: ['Tenk pa hva som ma være sant for at en rett linje skal passe'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En investering pa 10 000 kr vokser til 12 500 kr pa 3 ar. Sett opp en eksponentiell modell og finn den arlige vekstfaktoren. Estimer verdien etter 10 ar.',
        solution: `$V(t) = 10\\,000 \\cdot b^t$. Fra $V(3) = 12\\,500$:

$b^3 = 1{,}25$, $b = 1{,}25^{1/3} \\approx 1{,}077$ (7,7 % arlig vekst).

$V(10) = 10\\,000 \\cdot 1{,}077^{10} \\approx 20\\,960$ kr.`,
        hints: ['Sett inn $V(3) = 12\\,500$ og los for $b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva det betyr at en modell har $R^2 = 0{,}95$. Gi et eksempel pa en situasjon der modellen likevel er darlig.',
        solution: `$R^2 = 0{,}95$ betyr 95 % av variasjonen forklares. Modellen kan likevel være darlig hvis:
- Residualene viser systematisk monster (f.eks. kurvet monster ved lineær tilpasning til eksponentielle data)
- Modellen brukes til ekstrapolasjon langt utenfor dataomradet
- Utelatte variabler skaper spurios korrelasjon`,
        hints: ['Tenk pa residualplott og ekstrapolasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Befolkningen i en by males:

| Ar | 2000 | 2005 | 2010 | 2015 | 2020 |
|---|---|---|---|---|---|
| Befolkning | 50 000 | 54 000 | 57 500 | 60 200 | 62 000 |

Passer en lineær eller eksponentiell modell best? Begrunn.`,
        solution: `**Lineær:** Gjennomsnittlig okning ca. 600 per ar. $f(t) = 600t + 50\\,000$ (t = ar etter 2000).
Prediksjoner: $f(5) = 53\\,000$, $f(10) = 56\\,000$, $f(20) = 62\\,000$. Avvik: moderat.

**Eksponentiell:** $b = (62000/50000)^{1/20} \\approx 1{,}0108$. $f(t) = 50000 \\cdot 1{,}0108^t$.
$f(10) = 50000 \\cdot 1{,}114 = 55\\,700$. Avvik: lignende.

Veksten avtar over tid (600 $\\to$ 360 per ar siste 5-arene). **Lineær modell** passer bedre, men **logistisk** ville vaert best da veksten avtar.`,
        hints: ['Beregn arlig vekst for hvert intervall og se om den er konstant'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En modelleringsprosess har 6 steg. Beskriv kort hvert steg med et konkret eksempel (velg selv tema).',
        solution: `Eksempel: Modellere kaffetemperatur over tid.

1. **Problem:** Hvor fort kjoles kaffen ned?
2. **Forenkling:** Se bort fra kopp-type, vindforhold; anta konstant romtemp.
3. **Formulering:** Newtons avkjolingslov: $T(t) = 22 + 68e^{-kt}$.
4. **Losning:** Fra maling $T(5) = 72$ finner vi $k \\approx 0{,}062$.
5. **Validering:** Sjekk mot andre malinger. $T(10) \\approx 58$°C.
6. **Forbedring:** Ta hensyn til at koppen kjoles ned (endrer romtemp-bidraget).`,
        hints: ['Velg et konkret eksempel du kjenner til'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Inntekten til en bedrift modelleres med $I(x) = 800x - 3x^2$ der $x$ er pris i kr. Utfor sensitivitetsanalyse: hva skjer med optimal pris og inntekt nar koeffisienten til $x^2$ endres til $-2{,}5$ og $-3{,}5$?`,
        solution: `**Originalmodell** ($-3x^2$): $I'(x) = 800 - 6x = 0$, $x \\approx 133$, $I \\approx 53\\,333$ kr.

**Med $-2{,}5x^2$:** $800 - 5x = 0$, $x = 160$, $I = 64\\,000$ kr.

**Med $-3{,}5x^2$:** $800 - 7x = 0$, $x \\approx 114$, $I \\approx 45\\,714$ kr.

Endring pa ca. 17 % i koeffisienten gir 14-20 % endring i optimal inntekt. Modellen er moderat sensitiv.`,
        hints: ['Deriver og sett lik null for hver variant'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Kaffe avkjoles etter Newtons lov: $T(t) = T_r + (T_0 - T_r)e^{-kt}$. Malepunkter: $T(0) = 90°$C, $T(5) = 72°$C, romtemp $T_r = 22°$C. Finn $k$ og estimer temperaturen etter 15 minutter. Valider mot $T(10) = 58°$C.`,
        solution: `$72 = 22 + 68e^{-5k}$, $e^{-5k} = \\frac{50}{68} \\approx 0{,}735$, $k = -\\frac{\\ln 0{,}735}{5} \\approx 0{,}0616$.

$T(15) = 22 + 68e^{-0{,}0616 \\cdot 15} = 22 + 68 \\cdot 0{,}397 \\approx 49°$C.

Validering: $T(10) = 22 + 68 \\cdot 0{,}540 \\approx 58{,}7°$C (data: 58). Godt samsvar.`,
        hints: ['Sett inn $T(5) = 72$ og los for $k$ med $\\ln$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et legemiddel brytes ned i kroppen. Konsentrasjonen (mg/L) males:

| $t$ (timer) | 0 | 1 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|---|
| $C$ | 100 | 82 | 67 | 45 | 30 | 20 |

Sett opp en eksponentiell modell, valider den og vurder nar konsentrasjonen er under 10 mg/L.`,
        solution: `$C(t) = 100 \\cdot b^t$. Fra $C(1) = 82$: $b = 0{,}82$.

$C(t) = 100 \\cdot 0{,}82^t$

Validering: $C(4) = 100 \\cdot 0{,}82^4 \\approx 45{,}2$ (data: 45) ✓. $C(8) = 100 \\cdot 0{,}82^8 \\approx 20{,}4$ (data: 20) ✓.

Under 10: $0{,}82^t < 0{,}1$, $t > \\frac{\\ln 0{,}1}{\\ln 0{,}82} \\approx 11{,}6$ timer.`,
        hints: ['Bruk forste datapunkt til a bestemme $b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'En logistisk vekstmodell er $f(t) = \\frac{1000}{1 + 9e^{-0{,}5t}}$. Finn $f(0)$, $f(10)$ og bæreevnen $K$. Nar nar populasjonen 500?',
        solution: `$f(0) = \\frac{1000}{1 + 9} = 100$

$f(10) = \\frac{1000}{1 + 9e^{-5}} = \\frac{1000}{1 + 0{,}0607} \\approx 943$

Bæreevne: $K = 1000$ (ovre grense nar $t \\to \\infty$).

$f(t) = 500$: $1 + 9e^{-0{,}5t} = 2$, $e^{-0{,}5t} = \\frac{1}{9}$, $t = \\frac{\\ln 9}{0{,}5} \\approx 4{,}4$.`,
        hints: ['Bæreevnen er telleren i broket'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-8-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal modellere mengden plast i havet. Data viser 50 millioner tonn i 2000 og 150 millioner tonn i 2020. Sett opp bade en lineær og en eksponentiell modell, og diskuter hvilken som er mest realistisk pa lang sikt. Hva er svakheten ved begge?',
        solution: `**Lineær:** $f(t) = 5t + 50$ (t = ar etter 2000). Vekst: 5 mill. tonn/ar.

**Eksponentiell:** $f(t) = 50 \\cdot b^{20} = 150$, $b = 3^{1/20} \\approx 1{,}0565$ (5,65 %/ar).
$f(t) = 50 \\cdot 1{,}0565^t$.

**Diskusjon:** Lineær gir rimelige verdier pa kort sikt men forutser uendelig vekst. Eksponentiell vokser enda raskere. Pa lang sikt er begge urealistiske. En logistisk modell med ovre grense (begrenset havvolum/oppryddingsinnsats) ville vaert bedre. Begge neglisjerer tiltak, teknologi og politiske endringer.`,
        hints: ['Tenk pa hva som skjer nar $t$ blir veldig stort'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== OPPSUMMERING =====
    {
      id: 's1-8-1-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Modelleringsprosessen:** Problemformulering $\\to$ forenkling $\\to$ formulering $\\to$ losning $\\to$ validering $\\to$ forbedring.

**Modelltyper:** Lineær, kvadratisk, eksponentiell, potens, logistisk.

**Validering:** Residualer, $R^2$, grafisk kontroll, ekstrapolasjonstest.

**Sensitivitetsanalyse:** Varier parametere med $\\pm 10$-$20\\,\\%$ og vurder endring i resultat.

**Begrensninger:** Angi alltid antakelser og gyldighetsomrade.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Numeriske metoder
// ============================================================================

export const CHAPTER_S1_8_2: TextbookChapter = {
  id: 's1-8-2',
  courseId: 's1',
  chapterNumber: '8.2',
  title: 'Numeriske metoder',
  description: 'Lær om Newtons metode, halveringsmetoden og numerisk integrasjon for a lose likninger og beregne arealer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke numeriske metoder til a lose likninger som ikke kan loses analytisk',
    'bruke numerisk integrasjon til a beregne arealer under kurver',
  ],
  content: [
    {
      id: 's1-8-2-intro',
      type: 'text',
      content: `## Hvorfor numeriske metoder?

Mange likninger kan ikke loses eksakt med algebra. For eksempel har $x = \\cos x$ ingen analytisk losning. **Numeriske metoder** gir oss tilnærmede losninger med vilkarlig noyyaktighet.

Vi ser pa tre viktige metoder:
1. **Halveringsmetoden** - enkel og palitelig
2. **Newtons metode** - rask og kraftig
3. **Numerisk integrasjon** - beregne arealer nar vi ikke finner antiderivert`,
    },
    {
      id: 's1-8-2-halvering',
      type: 'text',
      content: `## Halveringsmetoden (biseksjonsmetoden)

Halveringsmetoden bygger pa **skjaeringspunktsetningen**: Dersom $f$ er kontinuerlig pa $[a, b]$ og $f(a)$ og $f(b)$ har **motsatt fortegn**, finnes det minst ett nullpunkt i intervallet.

**Algoritme:**
1. Start med et intervall $[a, b]$ der $f(a)$ og $f(b)$ har motsatt fortegn
2. Beregn midtpunktet $m = \\frac{a + b}{2}$
3. Beregn $f(m)$
4. Hvis $f(m) = 0$ (eller nær nok): ferdig!
5. Hvis $f(a)$ og $f(m)$ har motsatt fortegn: nullpunktet er i $[a, m]$
6. Ellers: nullpunktet er i $[m, b]$
7. Gjenta fra steg 2 med det nye intervallet`,
    },
    {
      id: 's1-8-2-def-halvering',
      type: 'definition',
      title: 'Halveringsmetoden',
      content: `Gitt $f$ kontinuerlig pa $[a, b]$ med $f(a) \\cdot f(b) < 0$:

1. Beregn $m = \\frac{a+b}{2}$
2. Hvis $f(a) \\cdot f(m) < 0$: nytt intervall $[a, m]$
3. Ellers: nytt intervall $[m, b]$
4. Gjenta til $|b - a|$ er liten nok

Etter $n$ halveringer er feilgrensen: $\\frac{b - a}{2^n}$`,
    },
    {
      id: 's1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Halveringsmetoden',
      problem: 'Finn nullpunktet til $f(x) = x^3 - 2x - 5$ i intervallet $[2, 3]$ med 4 halveringer.',
      solution: `$f(2) = 8 - 4 - 5 = -1 < 0$, $f(3) = 27 - 6 - 5 = 16 > 0$. Motsatt fortegn ✓

**Halvering 1:** $m = 2{,}5$, $f(2{,}5) = 15{,}625 - 5 - 5 = 5{,}625 > 0$. Nytt: $[2, 2{,}5]$

**Halvering 2:** $m = 2{,}25$, $f(2{,}25) = 11{,}39 - 4{,}5 - 5 = 1{,}89 > 0$. Nytt: $[2, 2{,}25]$

**Halvering 3:** $m = 2{,}125$, $f(2{,}125) = 9{,}60 - 4{,}25 - 5 = 0{,}35 > 0$. Nytt: $[2, 2{,}125]$

**Halvering 4:** $m = 2{,}0625$, $f(2{,}0625) \\approx 8{,}77 - 4{,}125 - 5 = -0{,}35 < 0$. Nytt: $[2{,}0625, 2{,}125]$

Nullpunktet er ca. $x \\approx 2{,}09$. Feilgrense: $\\frac{1}{2^4} = 0{,}0625$.`,
    },
    // ===== OPPGAVER HALVERING =====
    {
      id: 's1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vis at $f(x) = x^2 - 3$ har et nullpunkt i intervallet $[1, 2]$. Utfor 3 halveringer.',
        solution: `$f(1) = -2 < 0$, $f(2) = 1 > 0$. ✓

H1: $m = 1{,}5$, $f(1{,}5) = -0{,}75 < 0$. $[1{,}5, 2]$

H2: $m = 1{,}75$, $f(1{,}75) = 0{,}0625 > 0$. $[1{,}5, 1{,}75]$

H3: $m = 1{,}625$, $f(1{,}625) = -0{,}36 < 0$. $[1{,}625, 1{,}75]$

Nullpunkt ca. $x \\approx 1{,}69$. (Eksakt: $\\sqrt{3} \\approx 1{,}732$.)`,
        hints: ['Sjekk fortegn til $f$ i endepunktene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk halveringsmetoden til a finne en losning av $\\cos x = x$ (dvs. nullpunkt til $f(x) = \\cos x - x$) i $[0, 1]$ med 4 halveringer. (Bruk kalkulator.)',
        solution: `$f(0) = 1 > 0$, $f(1) = \\cos 1 - 1 \\approx -0{,}46 < 0$. ✓

H1: $m = 0{,}5$, $f = \\cos 0{,}5 - 0{,}5 \\approx 0{,}378 > 0$. $[0{,}5, 1]$

H2: $m = 0{,}75$, $f = \\cos 0{,}75 - 0{,}75 \\approx -0{,}018 < 0$. $[0{,}5, 0{,}75]$

H3: $m = 0{,}625$, $f \\approx 0{,}186 > 0$. $[0{,}625, 0{,}75]$

H4: $m = 0{,}6875$, $f \\approx 0{,}085 > 0$. $[0{,}6875, 0{,}75]$

Losning ca. $x \\approx 0{,}72$. (Eksakt: $x \\approx 0{,}7391$.)`,
        hints: ['Husk radianer pa kalkulatoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange halveringer trengs for a fa feilgrense under $0{,}001$ nar startintervallet er $[0, 1]$?',
        solution: `Feilgrense etter $n$ halveringer: $\\frac{1}{2^n} < 0{,}001$.

$2^n > 1000$. $2^{10} = 1024 > 1000$.

Svar: **10 halveringer**.`,
        hints: ['Los $\\frac{1}{2^n} < 0{,}001$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== NEWTONS METODE =====
    {
      id: 's1-8-2-newton',
      type: 'text',
      content: `## Newtons metode

Newtons metode er raskere enn halveringsmetoden, men krever at vi kan derivere $f$.

**Ide:** Fra et startpunkt $x_0$ trekker vi tangentlinjen til $f$ og finner der tangenten krysser $x$-aksen. Dette gir et nytt, bedre estimat $x_1$.`,
    },
    {
      id: 's1-8-2-def-newton',
      type: 'definition',
      title: 'Newtons metode',
      content: `Gitt en startverdi $x_0$ nær et nullpunkt til $f$:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

Metoden konvergerer vanligvis svart raskt (antall korrekte siffer dobles for hvert steg).

**Forutsetninger:**
- $f$ ma være deriverbar
- $f'(x_n) \\neq 0$
- Startverdien ma være nær nok nullpunktet`,
    },
    {
      id: 's1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Newtons metode',
      problem: 'Finn $\\sqrt{2}$ ved a lose $f(x) = x^2 - 2 = 0$ med Newtons metode. Start med $x_0 = 1$.',
      solution: `$f(x) = x^2 - 2$, $f'(x) = 2x$.

$$x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}$$

**Steg 1:** $x_1 = 1 - \\frac{1 - 2}{2} = 1 + 0{,}5 = 1{,}5$

**Steg 2:** $x_2 = 1{,}5 - \\frac{2{,}25 - 2}{3} = 1{,}5 - 0{,}0833 = 1{,}4167$

**Steg 3:** $x_3 = 1{,}4167 - \\frac{2{,}007 - 2}{2{,}833} = 1{,}4167 - 0{,}0025 = 1{,}4142$

Etter bare 3 steg har vi $\\sqrt{2} \\approx 1{,}4142$, korrekt til 4 desimaler!`,
    },
    {
      id: 's1-8-2-warning-newton',
      type: 'warning',
      title: 'Nar Newtons metode feiler',
      content: `Newtons metode kan feile hvis:
- Startverdien er for langt fra nullpunktet
- $f'(x_n) = 0$ (horisontal tangent)
- Funksjonen har flere nullpunkter (metoden kan konvergere mot feil nullpunkt)

**Tips:** Bruk gjerne halveringsmetoden forst for a finne et godt startestimat, og deretter Newtons metode for a forbedre noyaktigheten.`,
    },
    // ===== OPPGAVER NEWTON =====
    {
      id: 's1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Newtons metode med $x_0 = 2$ for a finne nullpunktet til $f(x) = x^3 - 2x - 5$. Utfor 3 iterasjoner.',
        solution: `$f'(x) = 3x^2 - 2$. $x_{n+1} = x_n - \\frac{x_n^3 - 2x_n - 5}{3x_n^2 - 2}$

$x_0 = 2$: $f(2) = -1$, $f'(2) = 10$. $x_1 = 2 - \\frac{-1}{10} = 2{,}1$

$x_1 = 2{,}1$: $f(2{,}1) = 9{,}261 - 4{,}2 - 5 = 0{,}061$, $f'(2{,}1) = 13{,}23 - 2 = 11{,}23$. $x_2 = 2{,}1 - \\frac{0{,}061}{11{,}23} \\approx 2{,}0946$

$x_2 = 2{,}0946$: $f \\approx -0{,}00009$. $x_3 \\approx 2{,}0946$.

Nullpunkt: $x \\approx 2{,}0946$.`,
        hints: ['$f\'(x) = 3x^2 - 2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Newtons metode til a finne $\\sqrt[3]{10}$ (dvs. los $x^3 = 10$). Start med $x_0 = 2$, utfor 3 iterasjoner.',
        solution: `$f(x) = x^3 - 10$, $f'(x) = 3x^2$.

$x_1 = 2 - \\frac{8-10}{12} = 2 + 0{,}167 = 2{,}167$

$x_2 = 2{,}167 - \\frac{10{,}17 - 10}{14{,}09} = 2{,}167 - 0{,}012 = 2{,}155$

$x_3 = 2{,}155 - \\frac{10{,}008 - 10}{13{,}93} \\approx 2{,}1544$

$\\sqrt[3]{10} \\approx 2{,}1544$.`,
        hints: ['$f(x) = x^3 - 10$, $f\'(x) = 3x^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar geometrisk hva Newtons metode gjor. Hvorfor konvergerer den raskere enn halveringsmetoden? Nar kan den feile?',
        solution: `Newtons metode tegner tangentlinjen i $(x_n, f(x_n))$ og finner der tangenten krysser $x$-aksen. Tangenten er en lineær tilnærming av $f$, sa krysningspunktet er et bedre estimat.

Den konvergerer raskere fordi den bruker informasjon om $f'$ (kurvens retning), mens halveringsmetoden bare bruker fortegnet til $f$. Antall korrekte siffer dobles per steg (kvadratisk konvergens) vs. ett ekstra siffer per 3-4 halveringer.

Den feiler nar tangenten er nær horisontal ($f' \\approx 0$), nar startpunktet er for langt unna, eller nar funksjonen har vendepunkter nær nullpunktet.`,
        hints: ['Tenk pa tangentlinjen som tilnærming'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== NUMERISK INTEGRASJON =====
    {
      id: 's1-8-2-numerisk-int',
      type: 'text',
      content: `## Numerisk integrasjon

Noen ganger kan vi ikke finne den antideriverte analytisk. Da bruker vi **numerisk integrasjon** for a tilnærme $\\int_a^b f(x)\\,dx$.

Grunnideen er a dele arealet under kurven inn i enkle geometriske figurer (rektangler eller trapeser) og summere arealene.`,
    },
    {
      id: 's1-8-2-def-trapesmetoden',
      type: 'definition',
      title: 'Trapesmetoden',
      content: `Vi deler $[a, b]$ inn i $n$ like store delintervaller med bredde $h = \\frac{b-a}{n}$ og punkter $x_0 = a, x_1, x_2, \\ldots, x_n = b$.

**Trapesformelen:**
$$\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}\\bigl[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\bigr]$$

Jo flere delintervaller ($n$), desto bedre tilnærming.`,
    },
    {
      id: 's1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Trapesmetoden',
      problem: 'Beregn $\\int_0^1 e^{-x^2}\\,dx$ med trapesmetoden og $n = 4$.',
      solution: `$h = \\frac{1-0}{4} = 0{,}25$. Punkter: $x_0=0$, $x_1=0{,}25$, $x_2=0{,}5$, $x_3=0{,}75$, $x_4=1$.

| $x_i$ | $f(x_i) = e^{-x_i^2}$ |
|---|---|
| 0 | 1 |
| 0,25 | $e^{-0{,}0625} \\approx 0{,}9394$ |
| 0,5 | $e^{-0{,}25} \\approx 0{,}7788$ |
| 0,75 | $e^{-0{,}5625} \\approx 0{,}5698$ |
| 1 | $e^{-1} \\approx 0{,}3679$ |

$$I \\approx \\frac{0{,}25}{2}[1 + 2(0{,}9394) + 2(0{,}7788) + 2(0{,}5698) + 0{,}3679]$$
$$= 0{,}125 \\cdot [1 + 1{,}8788 + 1{,}5576 + 1{,}1396 + 0{,}3679] = 0{,}125 \\cdot 5{,}9439 \\approx 0{,}7430$$

(Eksakt verdi: $\\approx 0{,}7468$. Feil: $0{,}5\\,\\%$.)`,
    },
    {
      id: 's1-8-2-note-rektangel',
      type: 'note',
      title: 'Rektangelmetoden',
      content: `En enklere, men mindre noyaktig metode er **rektangelmetoden** (midtpunktsregelen):

$$\\int_a^b f(x)\\,dx \\approx h \\cdot \\sum_{i=1}^{n} f\\!\\left(x_{i-1} + \\frac{h}{2}\\right)$$

Her bruker vi funksjonsverdien i **midtpunktet** av hvert delintervall. Trapesmetoden er vanligvis mer noyaktig for samme antall delintervaller.`,
    },
    // ===== OPPGAVER NUMERISK INTEGRASJON =====
    {
      id: 's1-8-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn $\\int_0^2 x^2\\,dx$ med trapesmetoden og $n = 4$. Sammenlign med eksakt verdi.',
        solution: `$h = 0{,}5$. Punkter: 0, 0,5, 1, 1,5, 2. Verdier: 0, 0,25, 1, 2,25, 4.

$I \\approx \\frac{0{,}5}{2}[0 + 2(0{,}25) + 2(1) + 2(2{,}25) + 4] = 0{,}25 \\cdot 11 = 2{,}75$

Eksakt: $\\frac{x^3}{3}\\Big|_0^2 = \\frac{8}{3} \\approx 2{,}667$. Feil: ca. 3 %.`,
        hints: ['$h = \\frac{2-0}{4} = 0{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn $\\int_1^3 \\frac{1}{x}\\,dx$ med trapesmetoden og $n = 4$. Sammenlign med eksakt verdi $\\ln 3 \\approx 1{,}0986$.',
        solution: `$h = 0{,}5$. Punkter og verdier: $f(1) = 1$, $f(1{,}5) = 0{,}667$, $f(2) = 0{,}5$, $f(2{,}5) = 0{,}4$, $f(3) = 0{,}333$.

$I \\approx \\frac{0{,}5}{2}[1 + 2(0{,}667) + 2(0{,}5) + 2(0{,}4) + 0{,}333]$
$= 0{,}25 \\cdot 4{,}467 = 1{,}117$

Eksakt: $\\ln 3 \\approx 1{,}099$. Feil: ca. 1,6 %.`,
        hints: ['$f(x) = \\frac{1}{x}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bils fart (km/h) males hvert 10. sekund: 0, 25, 45, 60, 70, 75, 78. Bruk trapesmetoden til a estimere tilbakelagt strekning i de 60 sekundene. (Husk a omregne enheter.)',
        solution: `$h = 10$ s. Fart i m/s: del pa 3,6: $0; 6{,}94; 12{,}5; 16{,}67; 19{,}44; 20{,}83; 21{,}67$.

$s \\approx \\frac{10}{2}[0 + 2(6{,}94) + 2(12{,}5) + 2(16{,}67) + 2(19{,}44) + 2(20{,}83) + 21{,}67]$

$= 5 \\cdot [0 + 13{,}88 + 25 + 33{,}34 + 38{,}88 + 41{,}66 + 21{,}67] = 5 \\cdot 174{,}43 \\approx 872$ m.`,
        hints: ['Omregn km/h til m/s ved a dele pa 3,6'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skjer med noyaktigheten i trapesmetoden nar vi oker antall delintervaller $n$?',
        solution: `Feilen i trapesmetoden er proporsjonal med $h^2 = \\bigl(\\frac{b-a}{n}\\bigr)^2$. Nar vi dobler $n$ (halverer $h$), reduseres feilen med en faktor 4. Jo flere delintervaller, desto bedre tilnærming. Men regneinnsatsen oker ogsa.`,
        hints: ['Tenk pa bredden $h$ av hvert trapes'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk bade halveringsmetoden (3 steg) og Newtons metode (2 steg) for a finne nullpunktet til $f(x) = e^x - 3x$ i $[1, 2]$. Sammenlign resultatene.`,
        solution: `$f(1) = e - 3 \\approx -0{,}28 < 0$, $f(2) = e^2 - 6 \\approx 1{,}39 > 0$.

**Halvering:**
H1: $m = 1{,}5$, $f(1{,}5) = 4{,}48 - 4{,}5 = -0{,}02 < 0$. $[1{,}5, 2]$
H2: $m = 1{,}75$, $f(1{,}75) = 5{,}75 - 5{,}25 = 0{,}50 > 0$. $[1{,}5, 1{,}75]$
H3: $m = 1{,}625$, $f(1{,}625) \\approx 5{,}08 - 4{,}875 = 0{,}20 > 0$. $[1{,}5, 1{,}625]$
Estimat: $x \\approx 1{,}56$.

**Newton:** $f'(x) = e^x - 3$. $x_0 = 1{,}5$.
$x_1 = 1{,}5 - \\frac{-0{,}02}{4{,}48 - 3} = 1{,}5 + 0{,}014 = 1{,}514$
$x_2 = 1{,}514 - \\frac{e^{1{,}514} - 4{,}542}{e^{1{,}514} - 3} \\approx 1{,}5121$

Newton gir $x \\approx 1{,}512$ etter 2 steg, mer presist enn halvering etter 3.`,
        hints: ['$f\'(x) = e^x - 3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Strommen gjennom en krets males hvert 0,1 sekund over 0,5 sekunder: $I(0)=0$, $I(0{,}1)=3{,}2$, $I(0{,}2)=5{,}1$, $I(0{,}3)=4{,}8$, $I(0{,}4)=2{,}9$, $I(0{,}5)=0{,}5$ (ampere). Bruk trapesmetoden til a beregne total ladning $Q = \\int_0^{0{,}5} I(t)\\,dt$ (i coulomb).',
        solution: `$h = 0{,}1$. $Q \\approx \\frac{0{,}1}{2}[0 + 2(3{,}2) + 2(5{,}1) + 2(4{,}8) + 2(2{,}9) + 0{,}5]$

$= 0{,}05 \\cdot [0 + 6{,}4 + 10{,}2 + 9{,}6 + 5{,}8 + 0{,}5] = 0{,}05 \\cdot 32{,}5 = 1{,}625$ C.`,
        hints: ['Ladning er integralet av strom over tid'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn $\\int_0^{\\pi} \\sin x\\,dx$ med trapesmetoden og $n = 6$. Sammenlign med eksakt verdi 2.',
        solution: `$h = \\frac{\\pi}{6} \\approx 0{,}5236$. Punkter: $0, \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}, \\pi$.

Sinusverdier: $0, 0{,}5, 0{,}866, 1, 0{,}866, 0{,}5, 0$.

$I \\approx \\frac{0{,}5236}{2}[0 + 2(0{,}5) + 2(0{,}866) + 2(1) + 2(0{,}866) + 2(0{,}5) + 0]$

$= 0{,}2618 \\cdot 7{,}464 = 1{,}954$

Eksakt verdi: 2. Feil: 2,3 %.`,
        hints: ['$\\sin 0 = 0$, $\\sin \\frac{\\pi}{6} = 0{,}5$, $\\sin \\frac{\\pi}{2} = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-8-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-8-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign halveringsmetoden og Newtons metode langs tre akser: konvergenshastighet, palitelighet og krav til funksjonen.',
        solution: `**Konvergenshastighet:** Newton dobler antall korrekte siffer per steg (kvadratisk). Halvering gir ca. 1 ekstra desimal per 3 steg (lineær).

**Palitelighet:** Halvering konvergerer alltid nar $f(a) \\cdot f(b) < 0$. Newton kan divergere med darlig startverdi.

**Krav:** Halvering krever bare at $f$ er kontinuerlig. Newton krever at $f$ er deriverbar og at vi kan beregne $f'$.

I praksis: Bruk halvering for a finne godt startestimat, deretter Newton for presisjon.`,
        hints: ['Tenk pa fordeler og ulemper ved hver metode'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ===== OPPSUMMERING =====
    {
      id: 's1-8-2-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Halveringsmetoden:** Halverer intervallet gjentatte ganger. Feilgrense $\\frac{b-a}{2^n}$. Palitelig men langsom.

**Newtons metode:** $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$. Rask konvergens, men krever derivasjon og god startverdi.

**Trapesmetoden:** $\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}[f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)]$

**Felles prinsipp:** Alle numeriske metoder gir **tilnærmede** losninger. Noyaktigheten forbedres ved a oke antall steg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const S1_KAP8_CHAPTERS = [CHAPTER_S1_2_6, CHAPTER_S1_7_4, CHAPTER_S1_8_1, CHAPTER_S1_8_2];
