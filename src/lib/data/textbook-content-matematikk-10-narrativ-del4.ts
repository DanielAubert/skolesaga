/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 4
 * Kapittel 4.1–4.4: Geometri
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1 NARRATIV: Pytagoras' setning
// ============================================================================

export const CHAPTER_10_4_1_NARRATIV: TextbookChapter = {
  id: '10-4-1-narrativ',
  courseId: '10',
  chapterNumber: '4.1',
  title: "Pytagoras' setning",
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om den mest berømte setningen i matematikk -- fra diagonaler i rektangler til romdiagonaler i esker.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis geometri i planet kan brukast i samband med koordinatsystem',
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  linkedChapterId: '10-4-1',
  content: [
    {
      id: '10-4-1-n-intro',
      type: 'text',
      content: `## En 2500 år gammel superstjerne

For over 2500 år siden oppdaget den greske matematikeren Pytagoras noe som fortsatt brukes daglig av ingeniører, arkitekter og snekkere over hele verden. Setningen hans er enkel og elegant: i en rettvinklet trekant er $a^2 + b^2 = c^2$, der $c$ er hypotenusen (den lengste siden, motstått den rette vinkelen) og $a$ og $b$ er katetene.

Tenk deg at du skal finne hypotenusen i en trekant med kateter 6 cm og 8 cm. Du regner: $c^2 = 6^2 + 8^2 = 36 + 64 = 100$, og dermed $c = \\sqrt{100} = 10$ cm. Enkelt og elegant.

Du kan også bruke setningen omvendt: for å finne en katet. Har du hypotenus 25 cm og en katet 7 cm, er den andre kateten $b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ cm.

Noen kombinasjoner av hele tall oppfyller $a^2 + b^2 = c^2$ og kalles pytagoreiske trippel. De vanligste er $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$ og $(7, 24, 25)$, pluss alle multipler som $(6, 8, 10)$. Å kjenne igjen disse kan spare deg verdifull tid på eksamen!`,
    },
    {
      id: '10-4-1-n-section1',
      type: 'text',
      content: `## Diagonaler og avstander

En av de vanligste anvendelsene er å finne diagonaler i rektangler. Diagonalen deler et rektangel i to rettvinklede trekanter, der sidene i rektangelet er kateter og diagonalen er hypotenuse. Et rektangel med sider 12 m og 5 m har diagonal $d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ m.

I koordinatsystemet kan vi finne avstanden mellom to punkter $A(x_1, y_1)$ og $B(x_2, y_2)$ med avstandsformelen: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. Dette er faktisk bare Pytagoras i forkledning! Avstanden mellom $A(1, 2)$ og $B(5, 5)$ blir: horisontal avstand $4$, vertikal avstand $3$, og $d = \\sqrt{16 + 9} = 5$.

En likesidet trekant med sidelengde 10 cm har høyde $h = \\sqrt{10^2 - 5^2} = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}66$ cm. Her halverer høyden grunnlinjen, og vi får en rettvinklet trekant med hypotenuse 10 og katet 5.`,
    },
    {
      id: '10-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-1-n-quiz1-q0',
            task: 'Finn hypotenusen i en rettvinklet trekant med kateter 5 cm og 12 cm.',
            options: [
              { id: 'a', text: '17 cm', isCorrect: false },
              { id: 'b', text: '13 cm', isCorrect: true },
              { id: 'c', text: '15 cm', isCorrect: false },
              { id: 'd', text: '7 cm', isCorrect: false },
            ],
            solution: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm.',
          },
          {
            id: '10-4-1-n-quiz1-q1',
            task: 'En trekant har sider 6, 8 og 10 cm. Er den rettvinklet?',
            options: [
              { id: 'a', text: 'Nei', isCorrect: false },
              { id: 'b', text: 'Ja, fordi $6^2 + 8^2 = 10^2$', isCorrect: true },
              { id: 'c', text: 'Kan ikke avgjøres', isCorrect: false },
              { id: 'd', text: 'Ja, fordi alle sider er ulike', isCorrect: false },
            ],
            solution: '$6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Ja, den er rettvinklet.',
          },
          {
            id: '10-4-1-n-quiz1-q2',
            task: 'Finn avstanden mellom $A(0, 0)$ og $B(6, 8)$.',
            options: [
              { id: 'a', text: '14', isCorrect: false },
              { id: 'b', text: '$\\sqrt{14}$', isCorrect: false },
              { id: 'c', text: '10', isCorrect: true },
              { id: 'd', text: '$\\sqrt{48}$', isCorrect: false },
            ],
            solution: '$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          },
        ],
      },
    },
    {
      id: '10-4-1-n-section2',
      type: 'text',
      content: `## Pytagoras i tre dimensjoner og i praksis

Pytagoras kan utvides til tre dimensjoner! Romdiagonalen i en eske med sider $a$, $b$ og $c$ er $D = \\sqrt{a^2 + b^2 + c^2}$. En eske med dimensjoner 3, 4 og 12 cm har romdiagonal $D = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$ cm. En kube med side 6 cm har romdiagonal $D = \\sqrt{6^2 + 6^2 + 6^2} = 6\\sqrt{3} \\approx 10{,}39$ cm.

Praktiske situasjoner: en stige på 5 meter lener mot en vegg med foten 3 meter fra veggen. Hvor høyt når den? $h = \\sqrt{25 - 9} = 4$ meter. To skip forlater en havn -- det ene seiler 30 km nord, det andre 40 km øst. De er $\\sqrt{900 + 1600} = 50$ km fra hverandre.

En TV på 55 tommer med sideforhold 16:9: sett bredde $= 16k$ og høyde $= 9k$. Da er $(16k)^2 + (9k)^2 = 55^2$, altså $337k^2 = 3025$, som gir $k \\approx 3{,}00$. Bredde $\\approx 47{,}9$ tommer og høyde $\\approx 27{,}0$ tommer.`,
    },
    {
      id: '10-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-1-n-quiz2-q0',
            task: 'Finn romdiagonalen i en eske med dimensjoner 2, 3 og 6 cm.',
            options: [
              { id: 'a', text: '11 cm', isCorrect: false },
              { id: 'b', text: '7 cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{49}$ cm', isCorrect: false },
              { id: 'd', text: '6 cm', isCorrect: false },
            ],
            solution: '$D = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$ cm. (Alternativ c er teknisk korrekt, men b gir det forenklede svaret.)',
          },
          {
            id: '10-4-1-n-quiz2-q1',
            task: 'En stige er 13 meter lang og bunnen står 5 meter fra veggen. Hvor høyt når stigen?',
            options: [
              { id: 'a', text: '8 meter', isCorrect: false },
              { id: 'b', text: '10 meter', isCorrect: false },
              { id: 'c', text: '12 meter', isCorrect: true },
              { id: 'd', text: '14 meter', isCorrect: false },
            ],
            solution: '$h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ meter.',
          },
          {
            id: '10-4-1-n-quiz2-q2',
            task: 'To skip seiler fra samme havn: 30 km nord og 40 km øst. Hvor langt fra hverandre er de?',
            options: [
              { id: 'a', text: '70 km', isCorrect: false },
              { id: 'b', text: '50 km', isCorrect: true },
              { id: 'c', text: '35 km', isCorrect: false },
              { id: 'd', text: '10 km', isCorrect: false },
            ],
            solution: '$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ km.',
          },
          {
            id: '10-4-1-n-quiz2-q3',
            task: 'Finn den ukjente kateten når hypotenusen er 20 cm og den ene kateten er 16 cm.',
            options: [
              { id: 'a', text: '4 cm', isCorrect: false },
              { id: 'b', text: '10 cm', isCorrect: false },
              { id: 'c', text: '12 cm', isCorrect: true },
              { id: 'd', text: '14 cm', isCorrect: false },
            ],
            solution: '$b = \\sqrt{20^2 - 16^2} = \\sqrt{400 - 256} = \\sqrt{144} = 12$ cm.',
          },
        ],
      },
    },
    {
      id: '10-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Pytagoras' setning sier at $a^2 + b^2 = c^2$ i en rettvinklet trekant, der $c$ er hypotenusen. Den omvendte setningen lar oss sjekke om en trekant er rettvinklet. Avstandsformelen $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ er Pytagoras i koordinatsystemet. I tre dimensjoner blir romdiagonalen $D = \\sqrt{a^2 + b^2 + c^2}$. Pytagoreiske trippel som $(3, 4, 5)$ og $(5, 12, 13)$ er nyttige å kjenne igjen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2 NARRATIV: Trigonometri
// ============================================================================

export const CHAPTER_10_4_2_NARRATIV: TextbookChapter = {
  id: '10-4-2-narrativ',
  courseId: '10',
  chapterNumber: '4.2',
  title: 'Trigonometri',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om sinus, cosinus og tangens -- fra stiger mot vegger til fyrtårn og helikoptre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke trigonometri til a berekne lengder, vinklar og areal i vilkarlege trekantar',
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  linkedChapterId: '10-4-2',
  content: [
    {
      id: '10-4-2-n-intro',
      type: 'text',
      content: `## Trekantmåling

Trigonometri betyr bokstavelig talt "trekantmåling" og handler om forholdet mellom vinkler og sider i trekanter. Med trigonometri kan du finne ukjente sider og vinkler -- noe som har utallige praktiske anvendelser, fra navigasjon og arkitektur til astronomi.

I en rettvinklet trekant med en spiss vinkel $v$ definerer vi tre trigonometriske forhold. Sinus er forholdet mellom motstående katet og hypotenusen: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenuse}}$. Cosinus er forholdet mellom hosliggende katet og hypotenusen: $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenuse}}$. Og tangens er forholdet mellom motstående og hosliggende katet: $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$.

Huskeregelen SOH-CAH-TOA hjelper: Sinus = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. Det viktigste å huske er at "motstående" og "hosliggende" alltid er i forhold til den vinkelen vi ser på!`,
    },
    {
      id: '10-4-2-n-section1',
      type: 'text',
      content: `## Finne sider med sinus, cosinus og tangens

La oss se hvordan vi bruker de tre forholdene. Har vi hypotenusen og en vinkel, kan vi finne begge katetene. En rettvinklet trekant med hypotenuse 10 cm og vinkel 30 grader: motstående katet $= 10 \\cdot \\sin 30° = 10 \\cdot 0{,}5 = 5$ cm, og hosliggende katet $= 10 \\cdot \\cos 30° = 10 \\cdot \\frac{\\sqrt{3}}{2} \\approx 8{,}66$ cm.

Kjenner vi en katet og vinkelen, finner vi den andre kateten med tangens. Med hosliggende katet 8 cm og vinkel 40 grader: motstående $= 8 \\cdot \\tan 40° \\approx 6{,}71$ cm.

Vi kan også finne hypotenusen fra en katet: motstående 6 cm og vinkel 30 grader gir hypotenuse $= \\frac{6}{\\sin 30°} = \\frac{6}{0{,}5} = 12$ cm.

De spesielle vinklene 30, 45 og 60 grader er verdt å huske: $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$, $\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\tan 45° = 1$.`,
    },
    {
      id: '10-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-2-n-quiz1-q0',
            task: 'Hypotenuse 20 cm, vinkel 30 grader. Finn motstående katet.',
            options: [
              { id: 'a', text: '10 cm', isCorrect: true },
              { id: 'b', text: '$10\\sqrt{3}$ cm', isCorrect: false },
              { id: 'c', text: '40 cm', isCorrect: false },
              { id: 'd', text: '20 cm', isCorrect: false },
            ],
            solution: 'Motstående $= 20 \\cdot \\sin 30° = 20 \\cdot 0{,}5 = 10$ cm.',
          },
          {
            id: '10-4-2-n-quiz1-q1',
            task: 'Hosliggende katet 12 cm, vinkel 45 grader. Finn motstående katet.',
            options: [
              { id: 'a', text: '6 cm', isCorrect: false },
              { id: 'b', text: '24 cm', isCorrect: false },
              { id: 'c', text: '12 cm', isCorrect: true },
              { id: 'd', text: '$12\\sqrt{2}$ cm', isCorrect: false },
            ],
            solution: 'Motstående $= 12 \\cdot \\tan 45° = 12 \\cdot 1 = 12$ cm.',
          },
          {
            id: '10-4-2-n-quiz1-q2',
            task: 'Motstående katet 5 cm, vinkel 30 grader. Finn hypotenusen.',
            options: [
              { id: 'a', text: '2,5 cm', isCorrect: false },
              { id: 'b', text: '10 cm', isCorrect: true },
              { id: 'c', text: '15 cm', isCorrect: false },
              { id: 'd', text: '$5\\sqrt{3}$ cm', isCorrect: false },
            ],
            solution: 'Hypotenuse $= \\frac{5}{\\sin 30°} = \\frac{5}{0{,}5} = 10$ cm.',
          },
        ],
      },
    },
    {
      id: '10-4-2-n-section2',
      type: 'text',
      content: `## Finne vinkler -- de inverse funksjonene

Hittil har vi funnet sider fra vinkler. Men hva om vi kjenner sidene og vil finne vinkelen? Da bruker vi de inverse trigonometriske funksjonene: $v = \\arcsin(\\text{forhold})$, $v = \\arccos(\\text{forhold})$ eller $v = \\arctan(\\text{forhold})$. På kalkulatoren trykker du vanligvis "shift" eller "2nd" etterfulgt av sin, cos eller tan.

En rettvinklet trekant med kateter 5 og 12 cm: $\\tan v = \\frac{5}{12} \\approx 0{,}417$, og $v = \\arctan(0{,}417) \\approx 22{,}6°$. Den andre spisse vinkelen er $90° - 22{,}6° = 67{,}4°$.

Elevasjonsvinkelen er vinkelen opp fra horisontalen når du ser på noe over deg, mens depresjonsvinkelen er vinkelen ned. Fra 50 meter avstand er elevasjonsvinkelen til et tårn 35 grader. Tårnets høyde: $h = 50 \\cdot \\tan 35° \\approx 35$ meter. Fra toppen av et fyrtårn (40 m) er depresjonsvinkelen til en båt 15 grader. Avstanden til båten: $d = \\frac{40}{\\tan 15°} \\approx 149$ meter.`,
    },
    {
      id: '10-4-2-n-section3',
      type: 'text',
      content: `## Praktiske anvendelser

En stige på 8 meter lener mot en vegg med vinkel 65 grader mot bakken. Høyden den når: $h = 8 \\cdot \\sin 65° \\approx 7{,}25$ m. Avstanden fra veggen: $d = 8 \\cdot \\cos 65° \\approx 3{,}38$ m. Av sikkerhetshensyn skal vinkelen være mellom 70 og 75 grader, som gir en høyde mellom 7,52 m og 7,73 m.

Et fly stiger med vinkel 12 grader og tilbakelegger 2000 meter langs flyruten. Det stiger $2000 \\cdot \\sin 12° \\approx 416$ meter. En vei med 8 prosent stigning (stiger 8 m per 100 m horisontalt) har stigningsvinkel $\\arctan(0{,}08) \\approx 4{,}6°$.

Et helikopter i 500 m høyde måler depresjonsvinkler til to biler: 30 grader og 45 grader (på hver sin side). Avstand til bil 1: $\\frac{500}{\\tan 30°} \\approx 866$ m. Avstand til bil 2: $\\frac{500}{\\tan 45°} = 500$ m. Total avstand mellom bilene: $866 + 500 = 1366$ m.`,
    },
    {
      id: '10-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-2-n-quiz2-q0',
            task: 'En rettvinklet trekant har kateter 3 cm og 4 cm. Finn den minste vinkelen.',
            options: [
              { id: 'a', text: '$53{,}1°$', isCorrect: false },
              { id: 'b', text: '$36{,}9°$', isCorrect: true },
              { id: 'c', text: '$45°$', isCorrect: false },
              { id: 'd', text: '$30°$', isCorrect: false },
            ],
            solution: 'Den minste vinkelen ligger motstått den korteste kateten. $v = \\arctan\\left(\\frac{3}{4}\\right) = \\arctan(0{,}75) \\approx 36{,}9°$.',
          },
          {
            id: '10-4-2-n-quiz2-q1',
            task: 'Et tre kaster skygge på 15 m når solens elevasjonsvinkel er 40 grader. Finn treets høyde.',
            options: [
              { id: 'a', text: '$11{,}5$ m', isCorrect: false },
              { id: 'b', text: '$15$ m', isCorrect: false },
              { id: 'c', text: '$12{,}6$ m', isCorrect: true },
              { id: 'd', text: '$19{,}6$ m', isCorrect: false },
            ],
            solution: '$h = 15 \\cdot \\tan 40° \\approx 15 \\cdot 0{,}839 \\approx 12{,}6$ m.',
          },
          {
            id: '10-4-2-n-quiz2-q2',
            task: 'En kran har arm 25 m. Ved hvilken vinkel er løftehøyden 15 m?',
            options: [
              { id: 'a', text: '$53{,}1°$', isCorrect: false },
              { id: 'b', text: '$36{,}9°$', isCorrect: true },
              { id: 'c', text: '$60°$', isCorrect: false },
              { id: 'd', text: '$30°$', isCorrect: false },
            ],
            solution: '$\\sin v = \\frac{15}{25} = 0{,}6$, så $v = \\arcsin(0{,}6) \\approx 36{,}9°$.',
          },
          {
            id: '10-4-2-n-quiz2-q3',
            task: 'Hosliggende katet 16 cm, vinkel 60 grader. Finn hosliggende katet med cosinus: $b = 16 \\cdot \\cos 60°$.',
            options: [
              { id: 'a', text: '8 cm', isCorrect: true },
              { id: 'b', text: '$8\\sqrt{3}$ cm', isCorrect: false },
              { id: 'c', text: '16 cm', isCorrect: false },
              { id: 'd', text: '32 cm', isCorrect: false },
            ],
            solution: '$b = 16 \\cdot \\cos 60° = 16 \\cdot 0{,}5 = 8$ cm.',
          },
        ],
      },
    },
    {
      id: '10-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

De tre trigonometriske forholdene i en rettvinklet trekant er: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenuse}}$, $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenuse}}$, og $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$ (SOH-CAH-TOA). For å finne vinkler bruker vi de inverse funksjonene $\\arcsin$, $\\arccos$ og $\\arctan$. De spesielle vinklene 30, 45 og 60 grader har eksakte verdier som er nyttige å huske. Trigonometri løser praktiske problemer med stiger, elevasjonsvinkler, depresjonsvinkler og mange andre situasjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3 NARRATIV: Vektorer - introduksjon
// ============================================================================

export const CHAPTER_10_4_3_NARRATIV: TextbookChapter = {
  id: '10-4-3-narrativ',
  courseId: '10',
  chapterNumber: '4.3',
  title: 'Vektorer - introduksjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om størrelser med retning -- fra båter i strøm til fly i motvind.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og argumentere for korleis geometri i planet kan brukast i samband med koordinatsystem',
  ],
  linkedChapterId: '10-4-3',
  content: [
    {
      id: '10-4-3-n-intro',
      type: 'text',
      content: `## Størrelser med retning

Noen størrelser i verden rundt oss har bare en størrelse -- som temperatur, masse og tid. Slike kalles skalarer. Men mange størrelser har også en retning: fart (50 km/t mot nord), kraft (100 N nedover) og forflytning (3 km mot øst). Slike størrelser kalles vektorer, og de trenger vi egne regnemetoder for.

Vi skriver vektorer som $\\vec{v}$ og representerer dem på koordinatform som $\\vec{v} = [v_x, v_y]$, der $v_x$ er x-komponenten og $v_y$ er y-komponenten. Lengden (eller absoluttverdien) finner vi med Pytagoras: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$.

For å finne vektoren fra punkt $A(1, 2)$ til punkt $B(4, 6)$ trekker vi fra: $\\vec{AB} = [4 - 1, 6 - 2] = [3, 4]$. Lengden er $|\\vec{AB}| = \\sqrt{9 + 16} = 5$. Legg merke til at vektoren mellom to punkter er sluttpunkt minus startpunkt, komponent for komponent.`,
    },
    {
      id: '10-4-3-n-section1',
      type: 'text',
      content: `## Regning med vektorer

Addisjon av vektorer er enkelt: vi legger sammen tilsvarende komponenter. Hvis $\\vec{a} = [3, 2]$ og $\\vec{b} = [1, 4]$, er $\\vec{a} + \\vec{b} = [4, 6]$. Geometrisk betyr dette at vi legger vektorene etter hverandre (hode til hale), og sumvektoren går fra starten av den første til slutten av den andre.

Subtraksjon fungerer tilsvarende: $\\vec{a} - \\vec{b} = [a_x - b_x, a_y - b_y]$. Og skalarmultiplikasjon betyr at vi ganger hver komponent med et tall: $3\\vec{v} = 3 \\cdot [2, -3] = [6, -9]$. Hvis vi ganger med et negativt tall, snur vektoren retning: $-2\\vec{v} = [-4, 6]$.

Vi kan også kombinere operasjoner. For eksempel: $2\\vec{a} + 3\\vec{b}$ med $\\vec{a} = [1, 2]$ og $\\vec{b} = [3, -1]$ gir $[2, 4] + [9, -3] = [11, 1]$.

Et spesielt tilfelle: to vektorer som er like store men motsatt rettet, gir nullvektoren $\\vec{0} = [0, 0]$ når de legges sammen. For eksempel er $[4, -3] + [-4, 3] = [0, 0]$.`,
    },
    {
      id: '10-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-3-n-quiz1-q0',
            task: 'Finn lengden til vektoren $\\vec{a} = [-5, 12]$.',
            options: [
              { id: 'a', text: '7', isCorrect: false },
              { id: 'b', text: '17', isCorrect: false },
              { id: 'c', text: '13', isCorrect: true },
              { id: 'd', text: '$\\sqrt{119}$', isCorrect: false },
            ],
            solution: '$|\\vec{a}| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
          },
          {
            id: '10-4-3-n-quiz1-q1',
            task: 'Finn $\\vec{a} + \\vec{b}$ når $\\vec{a} = [2, 5]$ og $\\vec{b} = [3, -1]$.',
            options: [
              { id: 'a', text: '$[5, 6]$', isCorrect: false },
              { id: 'b', text: '$[5, 4]$', isCorrect: true },
              { id: 'c', text: '$[-1, 6]$', isCorrect: false },
              { id: 'd', text: '$[6, 4]$', isCorrect: false },
            ],
            solution: '$\\vec{a} + \\vec{b} = [2 + 3, 5 + (-1)] = [5, 4]$.',
          },
          {
            id: '10-4-3-n-quiz1-q2',
            task: 'Finn $-3\\vec{b}$ når $\\vec{b} = [1, -4]$.',
            options: [
              { id: 'a', text: '$[3, -12]$', isCorrect: false },
              { id: 'b', text: '$[-3, -12]$', isCorrect: false },
              { id: 'c', text: '$[-3, 12]$', isCorrect: true },
              { id: 'd', text: '$[3, 12]$', isCorrect: false },
            ],
            solution: '$-3\\vec{b} = -3 \\cdot [1, -4] = [-3, 12]$.',
          },
          {
            id: '10-4-3-n-quiz1-q3',
            task: 'Finn vektoren fra $P(2, 3)$ til $Q(8, 11)$ og dens lengde.',
            options: [
              { id: 'a', text: '$[6, 8]$, lengde 10', isCorrect: true },
              { id: 'b', text: '$[10, 14]$, lengde 10', isCorrect: false },
              { id: 'c', text: '$[-6, -8]$, lengde 10', isCorrect: false },
              { id: 'd', text: '$[6, 8]$, lengde 14', isCorrect: false },
            ],
            solution: '$\\vec{PQ} = [8 - 2, 11 - 3] = [6, 8]$. Lengde: $\\sqrt{36 + 64} = 10$.',
          },
        ],
      },
    },
    {
      id: '10-4-3-n-section2',
      type: 'text',
      content: `## Vektorer i praksis

Vektorer er uunnværlige i fysikk og navigasjon. Tenk deg en båt som kjører med 20 km/t mot øst, men strømmen går 5 km/t mot nord. Båtens vektor er $\\vec{v_b} = [20, 0]$ og strømmens er $\\vec{v_s} = [0, 5]$. Den resulterende hastigheten er $\\vec{v_r} = [20, 5]$ med fart $\\sqrt{400 + 25} = \\sqrt{425} \\approx 20{,}6$ km/t.

Eller tenk på et fly som skal fly rett nord med lufthastighet 300 km/t, men det blåser 50 km/t fra vest mot øst. Flyet må styre litt mot nordvest for å kompensere. Vinkelen fra nord: $\\sin v = \\frac{50}{300}$, som gir $v \\approx 9{,}6°$ vest for nord. Bakkehastigheten blir $\\sqrt{300^2 - 50^2} \\approx 296$ km/t.

Et skip seiler fra A til B med $\\vec{AB} = [12, 5]$ km, deretter fra B til C med $\\vec{BC} = [-4, 8]$ km. Total forflytning: $\\vec{AC} = [8, 13]$ km, og avstanden fra A til C er $\\sqrt{64 + 169} \\approx 15{,}3$ km -- mye kortere enn den faktiske seilte distansen på $13 + \\sqrt{80} \\approx 21{,}9$ km.`,
    },
    {
      id: '10-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-3-n-quiz2-q0',
            task: 'En båt kjører $[20, 0]$ km/t og strømmen er $[0, 5]$ km/t. Hva er den resulterende farten?',
            options: [
              { id: 'a', text: '25 km/t', isCorrect: false },
              { id: 'b', text: 'Ca. 20,6 km/t', isCorrect: true },
              { id: 'c', text: '15 km/t', isCorrect: false },
              { id: 'd', text: '20 km/t', isCorrect: false },
            ],
            solution: 'Resultant: $[20, 5]$. Fart: $\\sqrt{400 + 25} \\approx 20{,}6$ km/t.',
          },
          {
            id: '10-4-3-n-quiz2-q1',
            task: 'Finn $4\\vec{u} - 2\\vec{v}$ når $\\vec{u} = [2, 3]$ og $\\vec{v} = [5, 1]$.',
            options: [
              { id: 'a', text: '$[18, 14]$', isCorrect: false },
              { id: 'b', text: '$[-2, 10]$', isCorrect: true },
              { id: 'c', text: '$[2, 10]$', isCorrect: false },
              { id: 'd', text: '$[-2, -10]$', isCorrect: false },
            ],
            solution: '$4\\vec{u} = [8, 12]$, $2\\vec{v} = [10, 2]$. Differanse: $[8 - 10, 12 - 2] = [-2, 10]$.',
          },
          {
            id: '10-4-3-n-quiz2-q2',
            task: 'Hva er forskjellen mellom en skalar og en vektor?',
            options: [
              { id: 'a', text: 'En skalar er alltid større enn en vektor', isCorrect: false },
              { id: 'b', text: 'En vektor har bare retning, en skalar har bare størrelse', isCorrect: false },
              { id: 'c', text: 'En skalar har bare størrelse, en vektor har både størrelse og retning', isCorrect: true },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'En skalar (f.eks. temperatur, masse) har bare størrelse. En vektor (f.eks. hastighet, kraft) har både størrelse og retning.',
          },
        ],
      },
    },
    {
      id: '10-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

En vektor er en størrelse med både lengde og retning, skrevet som $\\vec{v} = [v_x, v_y]$. Lengden er $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Vektorer legges sammen og trekkes fra komponent for komponent. Skalarmultiplikasjon ganger hver komponent med tallet. Vektoren mellom to punkter er sluttpunkt minus startpunkt. Vektorer brukes til å beskrive krefter, hastigheter og forflytninger i fysikk og navigasjon. Summen av vektorer gir den resulterende effekten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4 NARRATIV: Areal og volum
// ============================================================================

export const CHAPTER_10_4_4_NARRATIV: TextbookChapter = {
  id: '10-4-4-narrativ',
  courseId: '10',
  chapterNumber: '4.4',
  title: 'Areal og volum',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om kjegler, kuler og sammensatte figurer -- fra iskremkjegler til gigantiske siloer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av tredimensjonale figurar',
  ],
  linkedChapterId: '10-4-4',
  content: [
    {
      id: '10-4-4-n-intro',
      type: 'text',
      content: `## Romfigurer i virkeligheten

Verden rundt oss er tredimensjonal, og vi trenger å beregne volum og overflate av alle slags figurer. Hvor mye is får du i en kjeglevaffel? Hvor mye maling trenger du for en kuleformet vanntank? Hvor mye korn rommer en silo? I dette kapittelet lærer vi formlene for kjegle, kule og pyramide, og hvordan vi kombinerer dem til sammensatte figurer.

De viktigste volumformlene er: for sylinder $V = \\pi r^2 h$, for kjegle $V = \\frac{1}{3}\\pi r^2 h$, for kule $V = \\frac{4}{3}\\pi r^3$, og for pyramide $V = \\frac{1}{3} \\cdot G \\cdot h$ der $G$ er grunnflatearealet. Legg merke til et viktig mønster: en kjegle har nøyaktig en tredjedel av volumet til en sylinder med samme grunnflate og høyde. Det samme gjelder for pyramide sammenlignet med et prisme. Denne tredjedelen dukker opp overalt i geometri!`,
    },
    {
      id: '10-4-4-n-section1',
      type: 'text',
      content: `## Kjegle, kule og pyramide

En kjegle med radius 6 cm og høyde 10 cm har volum $V = \\frac{1}{3}\\pi \\cdot 36 \\cdot 10 = 120\\pi \\approx 377$ cm$^3$. Husk at hvis du oppgir diameter i stedet for radius, må du halvere først.

En kule med radius 6 cm har volum $V = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi \\approx 905$ cm$^3$. Kuleformelen er den eneste der vi opphøyer radius i tredje potens -- fordi kulen er en "tredimensjonal sirkel".

En pyramide med kvadratisk grunnflate 10 cm $\\times$ 10 cm og høyde 12 cm har volum $V = \\frac{1}{3} \\cdot 100 \\cdot 12 = 400$ cm$^3$. Grunnflaten kan ha hvilken som helst form -- rektangulær, trekantformet eller annet.

For overflater: en kule har overflate $A = 4\\pi r^2$. En sylinder (med lokk og bunn) har $A = 2\\pi r^2 + 2\\pi rh$. En kjegle (med bunn) har $A = \\pi r^2 + \\pi rs$, der slanthøyden $s = \\sqrt{r^2 + h^2}$ finnes med Pytagoras.`,
    },
    {
      id: '10-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-4-n-quiz1-q0',
            task: 'Hvor mange kjegler med radius 5 cm og høyde 12 cm trengs for å fylle en sylinder med samme mål?',
            options: [
              { id: 'a', text: '2', isCorrect: false },
              { id: 'b', text: '3', isCorrect: true },
              { id: 'c', text: '4', isCorrect: false },
              { id: 'd', text: 'Pi stykker', isCorrect: false },
            ],
            solution: 'Kjeglen har $\\frac{1}{3}$ av sylinderens volum, så det trengs 3 kjegler.',
          },
          {
            id: '10-4-4-n-quiz1-q1',
            task: 'Finn volumet av en kule med radius 3 cm.',
            options: [
              { id: 'a', text: '$36\\pi \\approx 113$ cm$^3$', isCorrect: true },
              { id: 'b', text: '$27\\pi \\approx 85$ cm$^3$', isCorrect: false },
              { id: 'c', text: '$12\\pi \\approx 38$ cm$^3$', isCorrect: false },
              { id: 'd', text: '$108\\pi \\approx 339$ cm$^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi \\approx 113$ cm$^3$.',
          },
          {
            id: '10-4-4-n-quiz1-q2',
            task: 'En kjegle har radius 6 cm og høyde 8 cm. Finn slanthøyden.',
            options: [
              { id: 'a', text: '14 cm', isCorrect: false },
              { id: 'b', text: '7 cm', isCorrect: false },
              { id: 'c', text: '10 cm', isCorrect: true },
              { id: 'd', text: '$\\sqrt{48}$ cm', isCorrect: false },
            ],
            solution: '$s = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm.',
          },
        ],
      },
    },
    {
      id: '10-4-4-n-section2',
      type: 'text',
      content: `## Sammensatte figurer og skalering

I virkeligheten er former sjelden enkle. En iskremkjegle kan modelleres som en halvkule på toppen av en kjegle. Med radius 3 cm og kjegelhøyde 8 cm: halvkule-volum $= \\frac{2}{3}\\pi \\cdot 27 = 18\\pi$ cm$^3$, kjegle-volum $= \\frac{1}{3}\\pi \\cdot 9 \\cdot 8 = 24\\pi$ cm$^3$, totalt $42\\pi \\approx 132$ cm$^3$.

En silo kan bestå av sylinder, halvkule og kjegle. Med sylinderradius 4 m, sylinderhøyde 10 m og kjeglebunnhøyde 3 m: sylinder $= 160\\pi$, halvkule $= \\frac{128\\pi}{3}$, kjegle $= 16\\pi$. Totalt: $\\frac{656\\pi}{3} \\approx 687$ m$^3$. Med korn som veier 750 kg/m$^3$: $687 \\cdot 750 \\approx 515$ tonn!

Et spennende resultat om skalering: hvis du øker både radius og høyde med 50 prosent (faktor 1,5), øker volumet med faktor $1{,}5^3 = 3{,}375$. Det er en økning på 237,5 prosent! En ball med radius 10 cm i en kubisk boks (side 20 cm): boksvolumet er 8000 cm$^3$, balvolumet er $\\frac{4}{3}\\pi \\cdot 1000 \\approx 4189$ cm$^3$, og hele 47,6 prosent av boksen er tom.`,
    },
    {
      id: '10-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-4-4-n-quiz2-q0',
            task: 'En iskremkjegle har halvkule (r = 3 cm) på toppen og kjegle (r = 3, h = 8 cm). Hva er totalvolumet?',
            options: [
              { id: 'a', text: '$24\\pi \\approx 75$ cm$^3$', isCorrect: false },
              { id: 'b', text: '$42\\pi \\approx 132$ cm$^3$', isCorrect: true },
              { id: 'c', text: '$18\\pi \\approx 57$ cm$^3$', isCorrect: false },
              { id: 'd', text: '$60\\pi \\approx 188$ cm$^3$', isCorrect: false },
            ],
            solution: 'Halvkule: $18\\pi$, kjegle: $24\\pi$. Totalt: $42\\pi \\approx 132$ cm$^3$.',
          },
          {
            id: '10-4-4-n-quiz2-q1',
            task: 'Finn overflatearealet av en kule med radius 7 cm.',
            options: [
              { id: 'a', text: '$49\\pi \\approx 154$ cm$^2$', isCorrect: false },
              { id: 'b', text: '$196\\pi \\approx 616$ cm$^2$', isCorrect: true },
              { id: 'c', text: '$392\\pi \\approx 1232$ cm$^2$', isCorrect: false },
              { id: 'd', text: '$98\\pi \\approx 308$ cm$^2$', isCorrect: false },
            ],
            solution: '$A = 4\\pi r^2 = 4\\pi \\cdot 49 = 196\\pi \\approx 616$ cm$^2$.',
          },
          {
            id: '10-4-4-n-quiz2-q2',
            task: 'Radius og høyde i en sylinder øker begge med 50 %. Hvor mye øker volumet?',
            options: [
              { id: 'a', text: '50 %', isCorrect: false },
              { id: 'b', text: '150 %', isCorrect: false },
              { id: 'c', text: '237,5 %', isCorrect: true },
              { id: 'd', text: '100 %', isCorrect: false },
            ],
            solution: 'Nytt volum: $\\pi(1{,}5r)^2(1{,}5h) = 3{,}375 \\cdot \\pi r^2 h$. Økning: $(3{,}375 - 1) \\cdot 100 = 237{,}5$ %.',
          },
          {
            id: '10-4-4-n-quiz2-q3',
            task: 'En ball (r = 10 cm) legges i en kubisk boks. Hvor stor andel av boksen er tom?',
            options: [
              { id: 'a', text: 'Ca. 52,4 %', isCorrect: false },
              { id: 'b', text: 'Ca. 47,6 %', isCorrect: true },
              { id: 'c', text: 'Ca. 25 %', isCorrect: false },
              { id: 'd', text: 'Ca. 75 %', isCorrect: false },
            ],
            solution: 'Boks: $20^3 = 8000$ cm$^3$. Ball: $\\frac{4}{3}\\pi \\cdot 1000 \\approx 4189$ cm$^3$. Tom: $\\frac{3811}{8000} \\approx 47{,}6$ %.',
          },
        ],
      },
    },
    {
      id: '10-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Volumformlene for romfigurer: sylinder $V = \\pi r^2 h$, kjegle $V = \\frac{1}{3}\\pi r^2 h$, kule $V = \\frac{4}{3}\\pi r^3$, pyramide $V = \\frac{1}{3}Gh$. En kjegle er alltid en tredjedel av sylinderen med samme grunnflate og høyde. Overflateformlene: kule $A = 4\\pi r^2$, sylinder $A = 2\\pi r^2 + 2\\pi rh$, kjegle $A = \\pi r^2 + \\pi rs$ der $s = \\sqrt{r^2 + h^2}$. Sammensatte figurer deles opp i enkle deler som legges sammen. Husk at skalering av lineære mål gir kubisk endring i volum: dobling av alle mål gir 8 ganger volumet.`,
    },
  ],
  exercises: [],
};

export const MATEMATIKK_10_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_10_4_1_NARRATIV,
  CHAPTER_10_4_2_NARRATIV,
  CHAPTER_10_4_3_NARRATIV,
  CHAPTER_10_4_4_NARRATIV,
];
