/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Del 7
 * Seksjon 9: Tallregning (9.1–9.3), Seksjon 2 utvidelse (2.4–2.5), Seksjon 3 utvidelse (3.4)
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Tallsystemer og størrelsesorden
// ============================================================================
export const CHAPTER_2P_9_1: TextbookChapter = {
  id: '2p-9-1',
  courseId: '2p',
  chapterNumber: '9.1',
  title: 'Tallsystemer og størrelsesorden',
  description: 'Brøk, desimaltall, prosent, permille og SI-prefikser for store og små tall.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive situasjoner knyttet til tallstørrelser i samfunnet'],
  content: [
    {
      id: '2p-9-1-intro', type: 'text',
      content: `## Tallsystemer og størrelsesorden\n\nVi omgir oss med tall hele tiden: statsbudsjettet er over 1 800 milliarder kroner, en blodcelle er 0,007 mm, og befolkningen er rundt 5,5 millioner. I dette kapittelet lærer du å veksle mellom brøk, desimaltall, prosent og permille, og å håndtere store og små tall med SI-prefikser.`,
    },
    {
      id: '2p-9-1-def-1', type: 'definition', title: 'Brøk, desimaltall, prosent og permille',
      content: `$$\\frac{3}{4} = 0{,}75 = 75\\,\\%$$\n\n**Prosent** = per hundre: $p\\,\\% = \\frac{p}{100}$\n\n**Permille** = per tusen: $p\\,\\text{‰} = \\frac{p}{1000}$`,
    },
    {
      id: '2p-9-1-def-2', type: 'definition', title: 'SI-prefikser',
      content: `| Prefiks | Symbol | Faktor |\n|---------|--------|--------|\n| giga | G | $10^9$ |\n| mega | M | $10^6$ |\n| kilo | k | $10^3$ |\n| milli | m | $10^{-3}$ |\n| mikro | $\\mu$ | $10^{-6}$ |`,
    },
    {
      id: '2p-9-1-example-1', type: 'example', title: 'Promillegrense',
      problem: 'Skriv promillegrensen 0,2 ‰ som prosent og desimaltall.',
      solution: '$0{,}2\\,\\text{‰} = \\frac{0{,}2}{1000} = 0{,}0002 = 0{,}02\\,\\%$',
    },
    {
      id: '2p-9-1-ex-1', type: 'exercise',
      exercise: { id: '2p-9-1-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hva er 3,5 promille skrevet som prosent?',
        options: [
          { id: 'a', text: '0,35 %', isCorrect: true },
          { id: 'b', text: '3,5 %', isCorrect: false },
          { id: 'c', text: '0,035 %', isCorrect: false },
          { id: 'd', text: '35 %', isCorrect: false },
        ],
        solution: '3,5 ‰ = 3,5 / 10 % = 0,35 %.',
      },
    },
    {
      id: '2p-9-1-ex-2', type: 'exercise',
      exercise: { id: '2p-9-1-ex-2', number: '2', type: 'classic',
        task: 'Norges statsbudsjett var ca. 1 862 milliarder kroner. Skriv dette i kroner uten ordet «milliarder».',
        solution: '1 862 000 000 000 kr (= 1,862 · 10¹² kr).',
      },
    },
    {
      id: '2p-9-1-ex-3', type: 'exercise',
      exercise: { id: '2p-9-1-ex-3', number: '3', type: 'multiple-choice',
        task: 'Hvor mange kilobyte (kB) er 5 megabyte (MB)?',
        options: [
          { id: 'a', text: '5 000 kB', isCorrect: true },
          { id: 'b', text: '500 kB', isCorrect: false },
          { id: 'c', text: '50 000 kB', isCorrect: false },
          { id: 'd', text: '50 kB', isCorrect: false },
        ],
        solution: '1 MB = 1 000 kB, så 5 MB = 5 000 kB.',
      },
    },
    {
      id: '2p-9-1-ex-4', type: 'exercise',
      exercise: { id: '2p-9-1-ex-4', number: '4', type: 'classic',
        task: 'Et hårstrå er ca. 70 mikrometer tykt. Skriv dette i millimeter.',
        hints: ['1 μm = 0,001 mm'],
        solution: '70 μm = 70 · 0,001 mm = 0,07 mm.',
      },
    },
    {
      id: '2p-9-1-ex-5', type: 'exercise',
      exercise: { id: '2p-9-1-ex-5', number: '5', type: 'classic',
        task: 'I en kommune med 32 000 innbyggere ble det født 384 barn på ett år. Hva er fødselsraten i promille?',
        hints: ['Promille = (antall / total) · 1000'],
        solution: '(384 / 32 000) · 1000 = 12 ‰.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Prosent', definition: 'Per hundre – en andel av 100.' },
    { term: 'Permille', definition: 'Per tusen – en andel av 1000.' },
    { term: 'SI-prefiks', definition: 'Forstavelse for størrelsesorden (kilo, mega, milli osv.).' },
  ],
};

// ============================================================================
// Kapittel 9.2: Vitenskapelig notasjon
// ============================================================================
export const CHAPTER_2P_9_2: TextbookChapter = {
  id: '2p-9-2',
  courseId: '2p',
  chapterNumber: '9.2',
  title: 'Vitenskapelig notasjon',
  description: 'Skrive og regne med svært store og små tall ved hjelp av tierpotenser.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke vitenskapelig notasjon i beregninger og vurdere resultater'],
  content: [
    {
      id: '2p-9-2-intro', type: 'text',
      content: `## Vitenskapelig notasjon\n\nAvstanden til Sola er 149 600 000 km, et hydrogenatom er 0,000 000 000 12 m. Vitenskapelig notasjon gjør slike tall håndterlige.`,
    },
    {
      id: '2p-9-2-def', type: 'definition', title: 'Vitenskapelig notasjon',
      content: `Et tall på vitenskapelig notasjon: $a \\times 10^n$ der $1 \\leq a < 10$ og $n$ er et heltall.\n\n- $149\\,600\\,000 = 1{,}496 \\times 10^8$\n- $0{,}000\\,000\\,000\\,12 = 1{,}2 \\times 10^{-10}$`,
    },
    {
      id: '2p-9-2-tip', type: 'tip', title: 'Huskeregel',
      content: `**Stort tall** → positiv eksponent (flytt komma til venstre). **Lite tall** → negativ eksponent (flytt komma til høyre).`,
    },
    {
      id: '2p-9-2-example-1', type: 'example', title: 'Norges BNP',
      problem: 'Norges BNP var ca. 5 430 milliarder kr. Skriv på vitenskapelig notasjon.',
      solution: '$5\\,430\\,000\\,000\\,000 = 5{,}43 \\times 10^{12}$ kr.',
    },
    {
      id: '2p-9-2-example-2', type: 'example', title: 'Lysets hastighet',
      problem: 'Lyset reiser $3{,}0 \\times 10^8$ m/s. Hvor langt på ett minutt?',
      solution: '$3{,}0 \\times 10^8 \\cdot 60 = 1{,}8 \\times 10^{10}$ m.',
    },
    {
      id: '2p-9-2-ex-1', type: 'exercise',
      exercise: { id: '2p-9-2-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hva er 0,00045 på vitenskapelig notasjon?',
        options: [
          { id: 'a', text: '$4{,}5 \\times 10^{-4}$', isCorrect: true },
          { id: 'b', text: '$45 \\times 10^{-5}$', isCorrect: false },
          { id: 'c', text: '$4{,}5 \\times 10^{4}$', isCorrect: false },
          { id: 'd', text: '$0{,}45 \\times 10^{-3}$', isCorrect: false },
        ],
        solution: 'Flytt komma 4 plasser til høyre: 4,5 × 10⁻⁴.',
      },
    },
    {
      id: '2p-9-2-ex-2', type: 'exercise',
      exercise: { id: '2p-9-2-ex-2', number: '2', type: 'classic',
        task: 'Skriv 7 250 000 000 (ca. verdens befolkning) på vitenskapelig notasjon.',
        solution: '7,25 × 10⁹.',
      },
    },
    {
      id: '2p-9-2-ex-3', type: 'exercise',
      exercise: { id: '2p-9-2-ex-3', number: '3', type: 'classic',
        task: 'En bakterie er $2{,}0 \\times 10^{-6}$ m. Hvor mange kan ligge på rad langs 1 cm?',
        hints: ['1 cm = 1,0 × 10⁻² m'],
        solution: '(1,0 × 10⁻²) / (2,0 × 10⁻⁶) = 5 000 bakterier.',
      },
    },
    {
      id: '2p-9-2-ex-4', type: 'exercise',
      exercise: { id: '2p-9-2-ex-4', number: '4', type: 'multiple-choice',
        task: 'Hva er $3{,}0 \\times 10^5 \\cdot 2{,}0 \\times 10^3$?',
        options: [
          { id: 'a', text: '$6{,}0 \\times 10^{8}$', isCorrect: true },
          { id: 'b', text: '$6{,}0 \\times 10^{15}$', isCorrect: false },
          { id: 'c', text: '$5{,}0 \\times 10^{8}$', isCorrect: false },
          { id: 'd', text: '$6{,}0 \\times 10^{2}$', isCorrect: false },
        ],
        solution: '3,0 · 2,0 = 6,0 og 10⁵ · 10³ = 10⁸. Svar: 6,0 × 10⁸.',
      },
    },
    {
      id: '2p-9-2-ex-5', type: 'exercise',
      exercise: { id: '2p-9-2-ex-5', number: '5', type: 'classic',
        task: 'Norges areal er $3{,}85 \\times 10^5$ km² og befolkningen $5{,}5 \\times 10^6$. Finn befolkningstettheten.',
        solution: '(5,5 × 10⁶) / (3,85 × 10⁵) ≈ 14,3 innbyggere per km².',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vitenskapelig notasjon', definition: 'Tallform a × 10ⁿ der 1 ≤ a < 10.' },
    { term: 'Tierpotens', definition: '10 opphøyd i en eksponent, f.eks. 10³ = 1000.' },
  ],
};

// ============================================================================
// Kapittel 9.3: Avrunding og gjeldende siffer
// ============================================================================
export const CHAPTER_2P_9_3: TextbookChapter = {
  id: '2p-9-3',
  courseId: '2p',
  chapterNumber: '9.3',
  title: 'Avrunding og gjeldende siffer',
  description: 'Avrundingsregler, gjeldende siffer og nøyaktighet i praktiske beregninger.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere nøyaktigheten til beregninger basert på opplysninger med ulik presisjon'],
  content: [
    {
      id: '2p-9-3-intro', type: 'text',
      content: `## Avrunding og gjeldende siffer\n\nNår vi måler eller beregner, får vi sjelden eksakte svar. Å forstå nøyaktighet er viktig for å tolke og presentere tall riktig.`,
    },
    {
      id: '2p-9-3-def-1', type: 'definition', title: 'Avrundingsregler',
      content: `Se på sifferet etter plassen du runder til:\n- **5 eller høyere** → rund opp\n- **4 eller lavere** → rund ned\n\nEksempel: 3,847 til to desimaler → 3,85 (tredje desimal er 7 ≥ 5).`,
    },
    {
      id: '2p-9-3-def-2', type: 'definition', title: 'Gjeldende siffer',
      content: `**Gjeldende siffer** gir informasjon om nøyaktigheten:\n- Alle siffer unntatt null er gjeldende: 425 → 3 gjeldende\n- Nuller mellom siffer er gjeldende: 3 007 → 4 gjeldende\n- Ledende nuller er **ikke** gjeldende: 0,0042 → 2 gjeldende\n- Avsluttende nuller etter komma **er** gjeldende: 2,50 → 3 gjeldende`,
    },
    {
      id: '2p-9-3-warning', type: 'warning', title: 'Falsk nøyaktighet',
      content: `Svaret kan ikke ha flere gjeldende siffer enn det minst nøyaktige tallet i beregningen.`,
    },
    {
      id: '2p-9-3-example-1', type: 'example', title: 'Nøyaktighet i praksis',
      problem: 'Et rom er 4,3 m × 3,8 m. Beregn arealet med riktig antall gjeldende siffer.',
      solution: '$4{,}3 \\cdot 3{,}8 = 16{,}34$. Begge mål har 2 gjeldende siffer → $A \\approx 16$ m².',
    },
    {
      id: '2p-9-3-ex-1', type: 'exercise',
      exercise: { id: '2p-9-3-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hvor mange gjeldende siffer har 0,00620?',
        options: [
          { id: 'a', text: '3', isCorrect: true },
          { id: 'b', text: '5', isCorrect: false },
          { id: 'c', text: '2', isCorrect: false },
          { id: 'd', text: '4', isCorrect: false },
        ],
        solution: 'Ledende nuller teller ikke. 6, 2, 0 er gjeldende → 3.',
      },
    },
    {
      id: '2p-9-3-ex-2', type: 'exercise',
      exercise: { id: '2p-9-3-ex-2', number: '2', type: 'classic',
        task: 'Avrund 4,7528 til: a) nærmeste heltall, b) én desimal, c) to desimaler.',
        solution: 'a) 5. b) 4,8. c) 4,75.',
      },
    },
    {
      id: '2p-9-3-ex-3', type: 'exercise',
      exercise: { id: '2p-9-3-ex-3', number: '3', type: 'multiple-choice',
        task: 'Du beregner $12{,}5 \\cdot 3{,}1$. Hvor mange gjeldende siffer bør svaret ha?',
        options: [
          { id: 'a', text: '2', isCorrect: true },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '4', isCorrect: false },
          { id: 'd', text: '5', isCorrect: false },
        ],
        solution: '3,1 har 2 gjeldende siffer (lavest), så svaret bør ha 2: 38,75 ≈ 39.',
      },
    },
    {
      id: '2p-9-3-ex-4', type: 'exercise',
      exercise: { id: '2p-9-3-ex-4', number: '4', type: 'classic',
        task: 'En kommune oppgir 34 500 innbyggere. Avisen skriver «nøyaktig 34 500». Forklar hvorfor dette er misvisende.',
        solution: 'Tallet er trolig avrundet til nærmeste hundre. Det faktiske tallet kan være 34 450–34 549.',
      },
    },
    {
      id: '2p-9-3-ex-5', type: 'exercise',
      exercise: { id: '2p-9-3-ex-5', number: '5', type: 'classic',
        task: 'En planke er 2,45 m og kuttes i 3 biter. Kalkulatoren gir 0,8166... m. Hva bør snekkeren oppgi?',
        solution: 'Målet har 3 gjeldende siffer → 0,817 m (eller 0,82 m pga. sagbredde).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Avrunding', definition: 'Forenkle et tall ved å redusere antall siffer.' },
    { term: 'Gjeldende siffer', definition: 'Sifrene som gir informasjon om nøyaktigheten.' },
    { term: 'Falsk nøyaktighet', definition: 'Svaret har flere siffer enn datagrunnlaget tilsier.' },
  ],
};

// ============================================================================
// Kapittel 2.4: Stykkevis lineære funksjoner
// ============================================================================
export const CHAPTER_2P_2_4: TextbookChapter = {
  id: '2p-2-4',
  courseId: '2p',
  chapterNumber: '2.4',
  title: 'Stykkevis lineære funksjoner',
  description: 'Funksjoner satt sammen av flere rette linjer, brukt i portotakster, strømpriser og skattesatser.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive stykkevis lineære funksjoner i praktiske situasjoner'],
  content: [
    {
      id: '2p-2-4-intro', type: 'text',
      content: `## Stykkevis lineære funksjoner\n\nMange priser i hverdagen følger ikke én rett linje. Portotakster hopper ved visse vektgrenser, og skattesatser endres ved ulike inntektsnivåer. Slike modeller kalles **stykkevis lineære funksjoner**.`,
    },
    {
      id: '2p-2-4-def', type: 'definition', title: 'Stykkevis lineær funksjon',
      content: `En funksjon definert med ulike lineære uttrykk for ulike intervaller:\n\n$$f(x) = \\begin{cases} a_1 x + b_1, & x < c \\\\ a_2 x + b_2, & x \\geq c \\end{cases}$$\n\nGrafen «knekker» ved overgangspunktene.`,
    },
    {
      id: '2p-2-4-example-1', type: 'example', title: 'Treningsavtale',
      problem: 'Et senter tar 200 kr/gang for de 8 første treningene og 100 kr/gang deretter. Finn $K(x)$.',
      solution: `$K(x) = 200x$ for $1 \\leq x \\leq 8$. For $x > 8$: $K(x) = 1600 + 100(x-8) = 100x + 800$.`,
    },
    {
      id: '2p-2-4-ex-1', type: 'exercise',
      exercise: { id: '2p-2-4-ex-1', number: '1', type: 'multiple-choice',
        task: 'Parkering koster 30 kr/time de første 2 timene og 50 kr/time etterpå. Hva koster 5 timer?',
        options: [
          { id: 'a', text: '210 kr', isCorrect: true },
          { id: 'b', text: '250 kr', isCorrect: false },
          { id: 'c', text: '150 kr', isCorrect: false },
          { id: 'd', text: '190 kr', isCorrect: false },
        ],
        solution: '2 · 30 + 3 · 50 = 60 + 150 = 210 kr.',
      },
    },
    {
      id: '2p-2-4-ex-2', type: 'exercise',
      exercise: { id: '2p-2-4-ex-2', number: '2', type: 'classic',
        task: 'En mobiltariff koster 199 kr/mnd for 5 GB. Ekstra data koster 50 kr/GB. Sett opp $K(x)$ der $x$ er antall GB.',
        solution: 'K(x) = 199 for 0 ≤ x ≤ 5. K(x) = 50x − 51 for x > 5.',
      },
    },
    {
      id: '2p-2-4-ex-3', type: 'exercise',
      exercise: { id: '2p-2-4-ex-3', number: '3', type: 'classic',
        task: 'Elektriker: 800 kr utrykningsgebyr, 400 kr/time (3 første timer), 600 kr/time deretter. Pris for 5 timer?',
        hints: ['Del i to intervaller: 0–3 timer og 3–5 timer.'],
        solution: '800 + 3·400 + 2·600 = 800 + 1200 + 1200 = 3 200 kr.',
      },
    },
    {
      id: '2p-2-4-ex-4', type: 'exercise',
      exercise: { id: '2p-2-4-ex-4', number: '4', type: 'multiple-choice',
        task: 'En graf knekker ved x = 10. Stigningstall: 3 for x < 10, 1 for x > 10. Hva betyr det?',
        options: [
          { id: 'a', text: 'Veksten avtar etter x = 10', isCorrect: true },
          { id: 'b', text: 'Funksjonen synker etter x = 10', isCorrect: false },
          { id: 'c', text: 'Funksjonen har en topp ved x = 10', isCorrect: false },
          { id: 'd', text: 'Veksten øker etter x = 10', isCorrect: false },
        ],
        solution: 'Stigningstallet går fra 3 til 1 – funksjonen stiger fortsatt, men saktere.',
      },
    },
    {
      id: '2p-2-4-ex-5', type: 'exercise',
      exercise: { id: '2p-2-4-ex-5', number: '5', type: 'classic',
        task: 'Progressiv skatt: 22 % på de første 200 000 kr, 34 % over. Beregn skatten for 350 000 kr.',
        solution: '200 000 · 0,22 + 150 000 · 0,34 = 44 000 + 51 000 = 95 000 kr.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Stykkevis lineær funksjon', definition: 'Funksjon med ulike lineære uttrykk på ulike intervaller.' },
    { term: 'Knekkpunkt', definition: 'Punkt der grafen endrer stigningstall.' },
  ],
};

// ============================================================================
// Kapittel 2.5: Regresjonsanalyse
// ============================================================================
export const CHAPTER_2P_2_5: TextbookChapter = {
  id: '2p-2-5',
  courseId: '2p',
  chapterNumber: '2.5',
  title: 'Regresjonsanalyse',
  description: 'Finne best tilpasset linje til et datasett og vurdere modellens gyldighet.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke digitale verktøy til regresjonsanalyse og vurdere resultatet'],
  content: [
    {
      id: '2p-2-5-intro', type: 'text',
      content: `## Regresjonsanalyse\n\nNår vi har data med to variabler, vil vi finne en matematisk modell som beskriver sammenhengen. **Regresjonsanalyse** finner funksjonen som passer best til dataene.`,
    },
    {
      id: '2p-2-5-def', type: 'definition', title: 'Lineær regresjon',
      content: `**Lineær regresjon** finner linjen $y = ax + b$ som minimerer summen av kvadrerte avvik fra datapunktene (**minste kvadraters metode**). **$R^2$** (forklaringsgrad) måler tilpasningen: 1 = perfekt, > 0,9 = svært god, < 0,5 = svak.`,
    },
    {
      id: '2p-2-5-example-1', type: 'example', title: 'Issalg og temperatur',
      problem: 'Regresjonslinje for issalg: $y = 2{,}5x - 18$. Anslå salget ved 20°C.',
      solution: '$y = 2{,}5 \\cdot 20 - 18 = 32$ is.',
    },
    {
      id: '2p-2-5-warning', type: 'warning', title: 'Ekstrapolering',
      content: `Modellen er pålitelig **innenfor** dataområdet (interpolering). **Utenfor** (ekstrapolering) kan den gi meningsløse svar, f.eks. negativt issalg ved lave temperaturer.`,
    },
    {
      id: '2p-2-5-ex-1', type: 'exercise',
      exercise: { id: '2p-2-5-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hva betyr $R^2 = 0{,}92$?',
        options: [
          { id: 'a', text: 'Modellen forklarer 92 % av variasjonen i dataene', isCorrect: true },
          { id: 'b', text: 'Modellen er 92 % riktig', isCorrect: false },
          { id: 'c', text: '92 % av punktene ligger på linjen', isCorrect: false },
          { id: 'd', text: 'Stigningstallet er 0,92', isCorrect: false },
        ],
        solution: 'R² = 0,92 betyr at modellen forklarer 92 % av variasjonen.',
      },
    },
    {
      id: '2p-2-5-ex-2', type: 'exercise',
      exercise: { id: '2p-2-5-ex-2', number: '2', type: 'classic',
        task: 'Regresjonslinje for 3000 m-tid ($y$ min) vs. treningstimer ($x$): $y = -0{,}8x + 16$. Finn $y$ for $x = 5$ og $x = 25$. Kommenter.',
        solution: 'x = 5: y = 12 min. x = 25: y = −4 min (umulig – ekstrapolering gir meningsløst svar).',
      },
    },
    {
      id: '2p-2-5-ex-3', type: 'exercise',
      exercise: { id: '2p-2-5-ex-3', number: '3', type: 'multiple-choice',
        task: 'Når er det trygt å bruke en regresjonsmodell til å forutsi?',
        options: [
          { id: 'a', text: 'Innenfor dataområdet (interpolering)', isCorrect: true },
          { id: 'b', text: 'Alltid, så lenge R² er høy', isCorrect: false },
          { id: 'c', text: 'Bare når alle punkter ligger på linjen', isCorrect: false },
          { id: 'd', text: 'Bare utenfor dataområdet', isCorrect: false },
        ],
        solution: 'Interpolering (innenfor dataområdet) gir pålitelige anslag.',
      },
    },
    {
      id: '2p-2-5-ex-4', type: 'exercise',
      exercise: { id: '2p-2-5-ex-4', number: '4', type: 'classic',
        task: 'Nettbutikk: besøkende ($x$ tusen) vs. omsetning ($y$ tusen kr). Regresjonslinje: $y = 6{,}9x + 1{,}1$. Anslå omsetningen ved 7 000 besøkende.',
        solution: 'y = 6,9 · 7 + 1,1 = 49,4 tusen kr ≈ 49 400 kr.',
      },
    },
    {
      id: '2p-2-5-ex-5', type: 'exercise',
      exercise: { id: '2p-2-5-ex-5', number: '5', type: 'classic',
        task: 'Forklar forskjellen mellom interpolering og ekstrapolering med et eget eksempel.',
        solution: 'Interpolering: bruke modellen innenfor kjent dataområde. Ekstrapolering: bruke den utenfor. F.eks. en vekstmodell 2000–2020 gir usikre anslag for 2200.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regresjonslinje', definition: 'Linjen som passer best til et datasett.' },
    { term: 'R²', definition: 'Tall mellom 0 og 1 som måler modellens tilpasning.' },
    { term: 'Interpolering', definition: 'Bruke modellen innenfor dataområdet.' },
    { term: 'Ekstrapolering', definition: 'Bruke modellen utenfor dataområdet (usikkert).' },
  ],
};

// ============================================================================
// Kapittel 3.4: Korrelasjon og kausalitet
// ============================================================================
export const CHAPTER_2P_3_4: TextbookChapter = {
  id: '2p-3-4',
  courseId: '2p',
  chapterNumber: '3.4',
  title: 'Korrelasjon og kausalitet',
  description: 'Forskjellen mellom samvariasjon og årsakssammenheng, og vanlige feilslutninger.',
  estimatedMinutes: 45,
  competenceGoals: ['diskutere om en statistisk sammenheng innebærer en årsakssammenheng'],
  content: [
    {
      id: '2p-3-4-intro', type: 'text',
      content: `## Korrelasjon og kausalitet\n\nIssalget øker når temperaturen stiger – men is forårsaker ikke varmt vær. Å skille **samvariasjon** fra **årsakssammenheng** er en av statistikkens viktigste ferdigheter.`,
    },
    {
      id: '2p-3-4-def-1', type: 'definition', title: 'Korrelasjon',
      content: `**Korrelasjon** = samvariasjon. Korrelasjonskoeffisienten $r$ ($-1 \\leq r \\leq 1$):\n- **Positiv**: begge øker sammen (f.eks. høyde og skostørrelse)\n- **Negativ**: den ene synker når den andre øker\n- **Nær 0**: ingen lineær sammenheng\n- $|r| > 0{,}7$: sterk, $0{,}4$–$0{,}7$: moderat, $< 0{,}4$: svak`,
    },
    {
      id: '2p-3-4-def-2', type: 'definition', title: 'Kausalitet',
      content: `**Kausalitet** = den ene variabelen **forårsaker** endring i den andre. Krever mer enn korrelasjon: kontrollerte eksperimenter, utelukking av bakenforliggende variabler, og logisk forklaring.`,
    },
    {
      id: '2p-3-4-example-1', type: 'example', title: 'Issalg og drukningsulykker',
      problem: 'Sterk korrelasjon mellom issalg og drukningsulykker. Forårsaker is drukning?',
      solution: 'Nei. Bakenforliggende variabel: sommervær. Varmt → mer is OG mer bading → flere ulykker. **Spuriøs korrelasjon**.',
    },
    {
      id: '2p-3-4-warning', type: 'warning', title: 'Vanlig feilslutning',
      content: `«Korrelasjon innebærer ikke kausalitet.» Avisoverskriften «De som spiser frokost tjener mer» kan skyldes sosioøkonomisk bakgrunn, ikke frokosten.`,
    },
    {
      id: '2p-3-4-ex-1', type: 'exercise',
      exercise: { id: '2p-3-4-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hva betyr sterk korrelasjon mellom to variabler?',
        options: [
          { id: 'a', text: 'De varierer sammen på en forutsigbar måte', isCorrect: true },
          { id: 'b', text: 'Den ene forårsaker endring i den andre', isCorrect: false },
          { id: 'c', text: 'De har nøyaktig samme verdi', isCorrect: false },
          { id: 'd', text: 'Det er bevist at de henger sammen', isCorrect: false },
        ],
        solution: 'Sterk korrelasjon betyr forutsigbar samvariasjon, ikke årsak.',
      },
    },
    {
      id: '2p-3-4-ex-2', type: 'exercise',
      exercise: { id: '2p-3-4-ex-2', number: '2', type: 'classic',
        task: 'Positiv korrelasjon mellom antall brannmenn og skadeomfang. Forårsaker brannmenn mer skade? Forklar.',
        solution: 'Nei. Store branner gir mer skade OG krever flere brannmenn. Bakenforliggende variabel: brannens størrelse.',
      },
    },
    {
      id: '2p-3-4-ex-3', type: 'exercise',
      exercise: { id: '2p-3-4-ex-3', number: '3', type: 'multiple-choice',
        task: 'Hva betyr $r = -0{,}85$?',
        options: [
          { id: 'a', text: 'Sterk negativ korrelasjon', isCorrect: true },
          { id: 'b', text: 'Svak negativ korrelasjon', isCorrect: false },
          { id: 'c', text: 'Ingen sammenheng', isCorrect: false },
          { id: 'd', text: 'Den ene forårsaker nedgang i den andre', isCorrect: false },
        ],
        solution: 'r = −0,85 er nær −1 → sterk negativ korrelasjon (ikke kausalitet).',
      },
    },
    {
      id: '2p-3-4-ex-4', type: 'exercise',
      exercise: { id: '2p-3-4-ex-4', number: '4', type: 'classic',
        task: 'Barn som sover med sko har oftere hodepine neste dag. Foreslå en bakenforliggende variabel.',
        solution: 'Barna som sov med sko var trolig syke/utmattet og la seg uten å kle av seg. Sykdom gir hodepine.',
      },
    },
    {
      id: '2p-3-4-ex-5', type: 'exercise',
      exercise: { id: '2p-3-4-ex-5', number: '5', type: 'multiple-choice',
        task: 'Hvilken er mest sannsynlig kausalitet (ikke bare korrelasjon)?',
        options: [
          { id: 'a', text: 'Røyking og lungekreft', isCorrect: true },
          { id: 'b', text: 'Iskremforbruk og solbrenthet', isCorrect: false },
          { id: 'c', text: 'Antall piratskip og global oppvarming', isCorrect: false },
          { id: 'd', text: 'Skostørrelse og leseevne hos barn', isCorrect: false },
        ],
        solution: 'Røyking → lungekreft er påvist kausalitet. De andre er spuriøse korrelasjoner.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Korrelasjon', definition: 'Samvariasjon mellom to variabler, målt med r.' },
    { term: 'Kausalitet', definition: 'Årsakssammenheng – den ene forårsaker endring i den andre.' },
    { term: 'Spuriøs korrelasjon', definition: 'Tilsynelatende sammenheng som skyldes en bakenforliggende variabel.' },
    { term: 'Konfunderende variabel', definition: 'Bakenforliggende variabel som påvirker begge observerte variabler.' },
  ],
};

// ============================================================================
// Samlet eksport
// ============================================================================
export const MATEMATIKK_2P_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_9_1, CHAPTER_2P_9_2, CHAPTER_2P_9_3,
  CHAPTER_2P_2_4, CHAPTER_2P_2_5, CHAPTER_2P_3_4,
];
