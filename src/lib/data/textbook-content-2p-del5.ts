/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 5: Geometri i praksis + Seksjon 6: Modellering
 * Kapittel 5.1–5.2 og 6.1–6.2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Praktisk geometri
// ============================================================================

export const CHAPTER_2P_5_1: TextbookChapter = {
  id: '2p-5-1',
  courseId: '2p',
  chapterNumber: '5.1',
  title: 'Praktisk geometri',
  description: 'Areal, volum og overflate i praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og forklare hvordan formlikhet, målestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid',
  ],
  content: [
    // INTRO
    {
      id: '2p-5-1-intro',
      type: 'text',
      content: `## Praktisk geometri

Geometri handler om former, størrelser og romlige forhold. I hverdagen bruker vi geometri når vi skal male et rom, legge fliser, beregne hvor mye jord vi trenger til en hagebed, eller lese et kart.

I dette kapittelet skal du lære:
- Beregne areal av plane figurer som trekanter, rektangler, sirkler og sammensatte figurer
- Beregne volum og overflate av romfigurer
- Løse praktiske oppgaver med sammensatte figurer
- Bruke formlikhet og målestokk i beregninger`,
    },

    // BLOKK 1: Areal av plane figurer
    {
      id: '2p-5-1-def-areal',
      type: 'definition',
      title: 'Areal av plane figurer',
      content: `**Areal** er et mål på størrelsen av en flate, målt i $\\text{m}^2$, $\\text{cm}^2$ osv.

**Rektangel:**
$$A = l \\cdot b$$

**Trekant:**
$$A = \\frac{g \\cdot h}{2}$$

**Sirkel:**
$$A = \\pi r^2$$

**Trapes:**
$$A = \\frac{a + b}{2} \\cdot h$$

der $a$ og $b$ er de parallelle sidene og $h$ er høyden.

**Sammensatte figurer:** Del figuren i enklere deler, beregn arealet av hver del, og legg sammen (eller trekk fra).`,
    },
    {
      id: '2p-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Male en vegg',
      problem: 'En vegg er 5,2 m bred og 2,4 m høy. Veggen har et vindu som er 1,2 m bredt og 1,0 m høyt. Hvor mange liter maling trenger du dersom 1 liter dekker 8 m²?',
      solution: `**Løsning:**

Areal av veggen: $A_{\\text{vegg}} = 5{,}2 \\cdot 2{,}4 = 12{,}48 \\text{ m}^2$

Areal av vinduet: $A_{\\text{vindu}} = 1{,}2 \\cdot 1{,}0 = 1{,}2 \\text{ m}^2$

Areal som skal males: $A = 12{,}48 - 1{,}2 = 11{,}28 \\text{ m}^2$

Antall liter maling: $\\frac{11{,}28}{8} = 1{,}41$ liter

**Svar:** Du trenger ca. 1,5 liter maling (rundet opp).`,
    },
    {
      id: '2p-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Et trapesformet hagebed har parallelle sider på 3 m og 5 m, og høyden er 2 m. Hva er arealet?',
        options: [
          { id: 'a', text: '$8 \\text{ m}^2$', isCorrect: true },
          { id: 'b', text: '$15 \\text{ m}^2$', isCorrect: false },
          { id: 'c', text: '$10 \\text{ m}^2$', isCorrect: false },
          { id: 'd', text: '$6 \\text{ m}^2$', isCorrect: false },
        ],
        solution: '$A = \\frac{3 + 5}{2} \\cdot 2 = \\frac{8}{2} \\cdot 2 = 4 \\cdot 2 = 8 \\text{ m}^2$.',
      },
    },
    {
      id: '2p-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et rom har form som et rektangel med målene 4,5 m × 3,8 m. I rommet er det en sirkulær søyle med diameter 40 cm. Du skal legge gulvbelegg. a) Beregn arealet av gulvet (ekskl. søylen). b) Gulvbelegget koster 289 kr per m². Hva koster materialet?',
        hints: ['Husk å regne om 40 cm til meter. Radiusen er halvparten av diameteren.'],
        solution: 'a) Gulvareal = 4,5 · 3,8 = 17,10 m². Søyleareal = π · 0,2² ≈ 0,126 m². Nettoareal = 17,10 − 0,126 ≈ 16,97 m². b) Kostnad = 16,97 · 289 ≈ 4 904 kr.',
      },
    },

    // BLOKK 2: Volum av romfigurer
    {
      id: '2p-5-1-def-volum',
      type: 'definition',
      title: 'Volum av romfigurer',
      content: `**Volum** er et mål på størrelsen av et tredimensjonalt objekt, målt i $\\text{m}^3$, $\\text{cm}^3$, liter osv.

**Prisme (rett):**
$$V = G \\cdot h$$
der $G$ er grunnflatearealet og $h$ er høyden.

**Sylinder:**
$$V = \\pi r^2 \\cdot h$$

**Kjegle:**
$$V = \\frac{1}{3} \\pi r^2 \\cdot h$$

**Kule:**
$$V = \\frac{4}{3} \\pi r^3$$

**Pyramide:**
$$V = \\frac{1}{3} G \\cdot h$$

**Omregning:** $1 \\text{ m}^3 = 1\\,000$ liter. $1$ liter $= 1\\,000 \\text{ cm}^3 = 1 \\text{ dm}^3$.`,
    },
    {
      id: '2p-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Vannmengde i et basseng',
      problem: 'Et svømmebasseng er 25 m langt, 12,5 m bredt og har en jevn dybde på 1,8 m. Hvor mange liter vann trengs for å fylle bassenget?',
      solution: `**Løsning:**

Bassenget har form som et rektangulært prisme.

$V = l \\cdot b \\cdot h = 25 \\cdot 12{,}5 \\cdot 1{,}8 = 562{,}5 \\text{ m}^3$

$562{,}5 \\text{ m}^3 = 562{,}5 \\cdot 1\\,000 = 562\\,500$ liter

**Svar:** Bassenget rommer 562 500 liter (562,5 kubikkmeter).`,
    },
    {
      id: '2p-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En sylinder har radius 5 cm og høyde 20 cm. Hva er volumet?',
        options: [
          { id: 'a', text: '$500\\pi \\approx 1\\,571 \\text{ cm}^3$', isCorrect: true },
          { id: 'b', text: '$200\\pi \\approx 628 \\text{ cm}^3$', isCorrect: false },
          { id: 'c', text: '$2\\,000 \\text{ cm}^3$', isCorrect: false },
          { id: 'd', text: '$100\\pi \\approx 314 \\text{ cm}^3$', isCorrect: false },
        ],
        solution: '$V = \\pi r^2 h = \\pi \\cdot 5^2 \\cdot 20 = 500\\pi \\approx 1\\,571 \\text{ cm}^3$.',
      },
    },

    // BLOKK 3: Overflate av romfigurer
    {
      id: '2p-5-1-def-overflate',
      type: 'definition',
      title: 'Overflate av romfigurer',
      content: `**Overflaten** av en romfigur er summen av arealene til alle flatene.

**Rektangulært prisme (boks):**
$$O = 2(lb + lh + bh)$$

**Sylinder:**
$$O = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$$

**Kule:**
$$O = 4\\pi r^2$$

**Kjegle (inkl. bunn):**
$$O = \\pi r^2 + \\pi r s$$

der $s$ er sidelengden (skråhøyden) til kjeglen.`,
    },
    {
      id: '2p-5-1-example-3',
      type: 'example',
      title: 'Eksempel: Beregne overflate for maling',
      problem: 'En sylindersformet vanntank har radius 0,6 m og høyde 1,5 m. Tanken skal males utvendig (inkludert bunn og topp). Hvor stort areal skal males?',
      solution: `**Løsning:**

$O = 2\\pi r(r + h) = 2\\pi \\cdot 0{,}6 \\cdot (0{,}6 + 1{,}5) = 2\\pi \\cdot 0{,}6 \\cdot 2{,}1$

$= 2\\pi \\cdot 1{,}26 = 2{,}52\\pi \\approx 7{,}92 \\text{ m}^2$

**Svar:** Det skal males ca. 7,9 m² overflate.`,
    },
    {
      id: '2p-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'En iskrem-kjeks har form som en kjegle med radius 3 cm og skråhøyde 12 cm. a) Beregn den buede overflaten (mantelen) til kjeglen. b) Kjeksen er dekket av sjokolade utenpå. Hvor mange cm² sjokolade er det?',
        hints: ['Den buede overflaten (mantelen) beregnes med $\\pi r s$, der $s$ er skråhøyden.'],
        solution: 'a) Mantelflate = $\\pi \\cdot 3 \\cdot 12 = 36\\pi \\approx 113{,}1$ cm². b) 113,1 cm² (bare mantelen, ikke bunnen der iskremkulen sitter).',
      },
    },

    // BLOKK 4: Formlikhet og målestokk
    {
      id: '2p-5-1-def-formlikhet',
      type: 'definition',
      title: 'Formlikhet og målestokk',
      content: `To figurer er **formlike** dersom de har nøyaktig samme form, men kan ha ulik størrelse. Alle tilsvarende vinkler er like, og tilsvarende sider har samme forhold.

**Målestokk** angir forholdet mellom en avstand på en tegning/kart og den virkelige avstanden:

$$\\text{Målestokk} = \\frac{\\text{Avstand på kart}}{\\text{Virkelig avstand}}$$

**Målestokk 1 : 50 000** betyr at 1 cm på kartet tilsvarer 50 000 cm = 500 m i virkeligheten.

**Viktige sammenhenger ved formlikhet:**
- Lengder skalerer med forholdstallet $k$
- Areal skalerer med $k^2$
- Volum skalerer med $k^3$`,
    },
    {
      id: '2p-5-1-example-4',
      type: 'example',
      title: 'Eksempel: Målestokk på kart',
      problem: 'På et kart med målestokk 1 : 25 000 måler du avstanden mellom to steder til 8,4 cm. Hva er den virkelige avstanden?',
      solution: `**Løsning:**

Målestokk 1 : 25 000 betyr at 1 cm på kartet = 25 000 cm i virkeligheten.

Virkelig avstand: $8{,}4 \\cdot 25\\,000 = 210\\,000$ cm $= 2\\,100$ m $= 2{,}1$ km

**Svar:** Den virkelige avstanden er 2,1 km.`,
    },
    {
      id: '2p-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En modellbil er laget i målestokk 1 : 18. Den virkelige bilen er 4,5 m lang. Hvor lang er modellen?',
        options: [
          { id: 'a', text: '25 cm', isCorrect: true },
          { id: 'b', text: '81 cm', isCorrect: false },
          { id: 'c', text: '2,5 cm', isCorrect: false },
          { id: 'd', text: '45 cm', isCorrect: false },
        ],
        solution: 'Modellens lengde = 4,5 m / 18 = 0,25 m = 25 cm.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Arealformler** for rektangel ($l \\cdot b$), trekant ($\\frac{g \\cdot h}{2}$), sirkel ($\\pi r^2$) og trapes ($\\frac{a+b}{2} \\cdot h$)
- **Volumformler** for prisme ($G \\cdot h$), sylinder ($\\pi r^2 h$), kjegle ($\\frac{1}{3}\\pi r^2 h$), kule ($\\frac{4}{3}\\pi r^3$) og pyramide ($\\frac{1}{3}G \\cdot h$)
- **Overflateformler** for de vanligste romfigurene
- Hvordan du løser **praktiske oppgaver** med sammensatte figurer
- **Formlikhet og målestokk**: Lengder skalerer med $k$, areal med $k^2$, volum med $k^3$`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sandkasse har form som et rektangulært prisme. Den er 2,4 m lang, 1,8 m bred og 0,30 m dyp. a) Hvor mange kubikkmeter sand trengs for å fylle sandkassen? b) Sand selges i sekker på 25 kg. Det er ca. 1 500 kg per m³. Hvor mange sekker trengs?',
        hints: ['Finn volumet først, og regn deretter om til masse.'],
        solution: 'a) V = 2,4 · 1,8 · 0,30 = 1,296 m³. b) Masse = 1,296 · 1 500 = 1 944 kg. Antall sekker = 1 944 / 25 = 77,8, altså 78 sekker.',
      },
    },
    {
      id: '2p-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et hustak har form som to like rektangler, hvert med mål 12 m × 5,5 m. Takpannene som brukes dekker 0,25 m² hver. a) Beregn det totale takarealet. b) Hvor mange takpanner trengs? Legg til 10 % for svinn og kapping.',
        solution: 'a) Totalt areal = 2 · 12 · 5,5 = 132 m². b) Antall uten svinn = 132 / 0,25 = 528 panner. Med 10 % ekstra: 528 · 1,10 = 580,8 ≈ 581 panner.',
      },
    },
    {
      id: '2p-5-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En arkitekt lager en modell av et bygg i målestokk 1 : 100. I modellen er byggets grunnflate 12 cm × 8 cm og høyden er 15 cm. a) Hva er de virkelige målene til bygget? b) Hvor stort er det virkelige grunnflatearealet? c) Hva er det virkelige volumet? d) Forklar sammenhengen mellom modellen og virkeligheten for lengder, areal og volum.',
        hints: ['Areal skalerer med k², volum med k³. Forholdstallet k = 100.'],
        solution: 'a) Lengde = 12 · 100 = 1 200 cm = 12 m, bredde = 8 · 100 = 800 cm = 8 m, høyde = 15 · 100 = 1 500 cm = 15 m. b) Grunnflate = 12 · 8 = 96 m². (Eller: modell 96 cm² · 100² = 960 000 cm² = 96 m².) c) Volum = 12 · 8 · 15 = 1 440 m³. (Eller: modell 1 440 cm³ · 100³ = 1 440 000 000 cm³ = 1 440 m³.) d) Lengder er 100 ganger større, areal er 100² = 10 000 ganger større, volum er 100³ = 1 000 000 ganger større.',
      },
    },
    {
      id: '2p-5-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-5-1-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En stor og en liten kule er formlike. Den store kulen har 3 ganger så stor radius som den lille. Hvor mange ganger større er volumet til den store kulen?',
        options: [
          { id: 'a', text: '27 ganger', isCorrect: true },
          { id: 'b', text: '9 ganger', isCorrect: false },
          { id: 'c', text: '3 ganger', isCorrect: false },
          { id: 'd', text: '6 ganger', isCorrect: false },
        ],
        solution: 'Volum skalerer med $k^3$. Med $k = 3$: $3^3 = 27$. Volumet til den store kulen er 27 ganger større.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Areal', definition: 'Mål på størrelsen av en flate, angis i m², cm² osv.' },
    { term: 'Volum', definition: 'Mål på størrelsen av et tredimensjonalt objekt, angis i m³, liter osv.' },
    { term: 'Overflate', definition: 'Summen av arealene til alle flatene på en romfigur' },
    { term: 'Formlikhet', definition: 'Figurer med samme form men ulik størrelse' },
    { term: 'Målestokk', definition: 'Forholdet mellom avstand på tegning/kart og virkelig avstand' },
    { term: 'Prisme', definition: 'Romfigur med to parallelle, kongruente grunnflater forbundet med rektangler' },
  ],
};

// ============================================================================
// Kapittel 5.2: Trigonometri i praksis
// ============================================================================

export const CHAPTER_2P_5_2: TextbookChapter = {
  id: '2p-5-2',
  courseId: '2p',
  chapterNumber: '5.2',
  title: 'Trigonometri i praksis',
  description: 'Bruk av trigonometri til praktiske beregninger.',
  estimatedMinutes: 55,
  prerequisites: ['2p-5-1'],
  competenceGoals: [
    'utforske og forklare hvordan formlikhet, målestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid',
  ],
  content: [
    // INTRO
    {
      id: '2p-5-2-intro',
      type: 'text',
      content: `## Trigonometri i praksis

Trigonometri er et verktøy for å beregne ukjente sider og vinkler i trekanter. I praktisk arbeid brukes trigonometri til alt fra å finne høyden på et tre til å beregne helningen på et tak.

I dette kapittelet skal du lære:
- Pytagoras' setning for rettvinklede trekanter
- De trigonometriske forholdene sinus, cosinus og tangens
- Beregne ukjente sider og vinkler
- Løse praktiske problemer med trigonometri`,
    },

    // BLOKK 1: Pytagoras' setning
    {
      id: '2p-5-2-def-pytagoras',
      type: 'definition',
      title: 'Pytagoras\' setning',
      content: `I en **rettvinklet trekant** med kateter $a$ og $b$ og hypotenus $c$ gjelder:

$$a^2 + b^2 = c^2$$

**Hypotenusen** er den lengste siden i trekanten, og den ligger alltid **overfor den rette vinkelen** (90°).

Setningen kan brukes til å finne en ukjent side dersom du kjenner de to andre:
- Finne hypotenusen: $c = \\sqrt{a^2 + b^2}$
- Finne en katet: $a = \\sqrt{c^2 - b^2}$`,
    },
    {
      id: '2p-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Stige mot vegg',
      problem: 'En stige som er 5,0 m lang lener mot en vegg. Foten av stigen står 1,5 m fra veggen. Hvor høyt opp på veggen rekker stigen?',
      solution: `**Løsning:**

Stigen danner hypotenusen i en rettvinklet trekant. Avstanden fra veggen er en katet, og høyden opp veggen er den andre kateten.

$$h^2 + 1{,}5^2 = 5{,}0^2$$

$$h^2 = 25 - 2{,}25 = 22{,}75$$

$$h = \\sqrt{22{,}75} \\approx 4{,}77 \\text{ m}$$

**Svar:** Stigen rekker ca. 4,8 m opp på veggen.`,
    },
    {
      id: '2p-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En rettvinklet trekant har kateter på 6 cm og 8 cm. Hvor lang er hypotenusen?',
        options: [
          { id: 'a', text: '10 cm', isCorrect: true },
          { id: 'b', text: '14 cm', isCorrect: false },
          { id: 'c', text: '$\\sqrt{48} \\approx 6{,}9$ cm', isCorrect: false },
          { id: 'd', text: '12 cm', isCorrect: false },
        ],
        solution: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm.',
      },
    },
    {
      id: '2p-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diagonalen i et rektangulært rom måler 7,2 m. Rommet er 5,4 m langt. Hvor bredt er rommet?',
        hints: ['Diagonalen er hypotenusen i en rettvinklet trekant der katetene er lengden og bredden.'],
        solution: '$b = \\sqrt{7{,}2^2 - 5{,}4^2} = \\sqrt{51{,}84 - 29{,}16} = \\sqrt{22{,}68} \\approx 4{,}76$ m. Rommet er ca. 4,8 m bredt.',
      },
    },

    // BLOKK 2: Sinus, cosinus, tangens
    {
      id: '2p-5-2-def-trigfunksjoner',
      type: 'definition',
      title: 'Trigonometriske forhold',
      content: `I en rettvinklet trekant med en spiss vinkel $v$ definerer vi:

$$\\sin v = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$$

$$\\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$$

$$\\tan v = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}} = \\frac{\\sin v}{\\cos v}$$

**Huskeregel:** «**SOH-CAH-TOA**»
- **S**in = **O**pposite / **H**ypotenuse
- **C**os = **A**djacent / **H**ypotenuse
- **T**an = **O**pposite / **A**djacent`,
    },
    {
      id: '2p-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Finne en ukjent side',
      problem: 'Et tre kaster en skygge på 15 m langs bakken. Solens vinkel over horisonten er 38°. Hvor høyt er treet?',
      solution: `**Løsning:**

Vi har vinkelen 38° og den hosliggende kateten (skyggen = 15 m). Vi søker den motstående kateten (trehøyden).

$$\\tan 38° = \\frac{h}{15}$$

$$h = 15 \\cdot \\tan 38° = 15 \\cdot 0{,}7813 \\approx 11{,}7 \\text{ m}$$

**Svar:** Treet er ca. 11,7 m høyt.`,
    },
    {
      id: '2p-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Fra et punkt på bakken er det 40 m bort til foten av et tårn. Du måler vinkelen opp til toppen av tårnet til 52°. Øynene dine er 1,7 m over bakken. a) Bruk tangens til å finne hvor høyt tårnet rager over øyehøyde. b) Hva er tårnets totale høyde?',
        hints: ['a) tan 52° = motstående/hosliggende = h / 40.'],
        solution: 'a) h = 40 · tan 52° = 40 · 1,2799 ≈ 51,2 m over øyehøyde. b) Total høyde = 51,2 + 1,7 ≈ 52,9 m.',
      },
    },
    {
      id: '2p-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'I en rettvinklet trekant er hypotenusen 13 cm og en vinkel er 22°. Hva er lengden av den motstående kateten?',
        options: [
          { id: 'a', text: '$13 \\cdot \\sin 22° \\approx 4{,}9$ cm', isCorrect: true },
          { id: 'b', text: '$13 \\cdot \\cos 22° \\approx 12{,}1$ cm', isCorrect: false },
          { id: 'c', text: '$13 \\cdot \\tan 22° \\approx 5{,}3$ cm', isCorrect: false },
          { id: 'd', text: '$\\frac{13}{\\sin 22°} \\approx 34{,}7$ cm', isCorrect: false },
        ],
        solution: 'Motstående katet = hypotenus · sin v = 13 · sin 22° = 13 · 0,3746 ≈ 4,9 cm.',
      },
    },

    // BLOKK 3: Finne vinkler
    {
      id: '2p-5-2-text-vinkler',
      type: 'text',
      content: `### Beregne ukjente vinkler

Dersom du kjenner to sider i en rettvinklet trekant, kan du bruke de inverse trigonometriske funksjonene til å finne en vinkel:

$$v = \\sin^{-1}\\left(\\frac{\\text{motstående}}{\\text{hypotenus}}\\right)$$

$$v = \\cos^{-1}\\left(\\frac{\\text{hosliggende}}{\\text{hypotenus}}\\right)$$

$$v = \\tan^{-1}\\left(\\frac{\\text{motstående}}{\\text{hosliggende}}\\right)$$

På kalkulatoren bruker du knappene $\\sin^{-1}$, $\\cos^{-1}$ eller $\\tan^{-1}$ (noen kalkulatorer skriver arcsin, arccos, arctan).`,
    },
    {
      id: '2p-5-2-example-3',
      type: 'example',
      title: 'Eksempel: Takhelling',
      problem: 'Et saltak har en halvbredde på 5,0 m (horisontal avstand fra vegg til møne) og en høyde på 2,5 m fra takfoten til mønet. Hva er helningsvinkelen til taket?',
      solution: `**Løsning:**

Vi kjenner motstående katet (høyde = 2,5 m) og hosliggende katet (halvbredde = 5,0 m).

$$\\tan v = \\frac{2{,}5}{5{,}0} = 0{,}5$$

$$v = \\tan^{-1}(0{,}5) \\approx 26{,}6°$$

**Svar:** Helningsvinkelen er ca. 27°.`,
    },
    {
      id: '2p-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'En rampe for rullestol er 6,0 m lang og stiger 0,5 m i høyden. a) Hvilken vinkel danner rampen med det horisontale planet? b) Er denne vinkelen under kravet i Norsk Standard (maks 1:20 stigning, dvs. maks ca. 2,86°)?',
        hints: ['a) Bruk sin v = motstående/hypotenus = 0,5/6,0.', 'b) Regn ut arctan(1/20) for å finne grensevinkelen.'],
        solution: 'a) sin v = 0,5/6,0 = 0,0833. v = sin⁻¹(0,0833) ≈ 4,78°. b) Kravet: arctan(1/20) = arctan(0,05) ≈ 2,86°. Rampen har 4,78° > 2,86°, og overstiger kravet. Den er for bratt.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Pytagoras' setning**: $a^2 + b^2 = c^2$ i rettvinklede trekanter
- **Sinus**: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenus}}$
- **Cosinus**: $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$
- **Tangens**: $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$
- Finne **ukjente sider** ved å bruke de trigonometriske forholdene
- Finne **ukjente vinkler** med inverse trigonometriske funksjoner
- Bruke trigonometri i **praktiske situasjoner** som stiger, takhelling og landmåling`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En flaggstang kaster en 12 m lang skygge. Vinkelen mellom bakken og solstrålen (målt mot toppen av flaggstangen) er 54°. a) Beregn høyden til flaggstangen. b) Hvor lang er solstrålen fra skyggens tupp til toppen av stangen?',
        hints: ['a) Bruk tangens. b) Bruk Pytagoras eller cosinus.'],
        solution: 'a) h = 12 · tan 54° = 12 · 1,376 ≈ 16,5 m. b) Med Pytagoras: c = √(12² + 16,5²) = √(144 + 272,25) = √416,25 ≈ 20,4 m. Alternativt: c = 12 / cos 54° = 12 / 0,5878 ≈ 20,4 m.',
      },
    },
    {
      id: '2p-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sti går rett opp en bakke. Du går 250 m langs stien, og GPS-en viser at du har steget 85 m i høyden. a) Finn stigningsvinkelen. b) Hva er den horisontale avstanden du har tilbakelagt?',
        solution: 'a) sin v = 85/250 = 0,34. v = sin⁻¹(0,34) ≈ 19,9°. b) Horisontal avstand = √(250² − 85²) = √(62 500 − 7 225) = √55 275 ≈ 235,1 m.',
      },
    },
    {
      id: '2p-5-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal måle bredden av en elv uten å krysse den. Du plasserer deg rett overfor et tre på den andre siden (punkt A). Du går 50 m langs elven til punkt B. Vinkelen fra B til treet (målt fra elvebredden) er 62°. a) Lag en skisse av situasjonen. b) Beregn bredden av elven. c) Forklar hvorfor denne metoden fungerer selv om du ikke kan krysse elven.',
        hints: ['Trekanten har en rett vinkel ved punkt A (du stod rett overfor treet). Vinkelen ved B er 62°. Avstanden AB = 50 m er hosliggende katet sett fra vinkel B.'],
        solution: 'b) tan 62° = bredde / 50. Bredde = 50 · tan 62° = 50 · 1,8807 ≈ 94 m. c) Metoden fungerer fordi vi danner en rettvinklet trekant der vi kjenner én side og én vinkel, og kan beregne den ukjente siden (elvebredden) med trigonometri. Vi trenger aldri krysse elven.',
      },
    },
    {
      id: '2p-5-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-5-2-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Et tak med helningsvinkel 30° har en takflate som er 8 m lang (skrålengden fra takfot til møne). Hva er den horisontale bredden fra yttervegg til møne?',
        options: [
          { id: 'a', text: '$8 \\cdot \\cos 30° \\approx 6{,}93$ m', isCorrect: true },
          { id: 'b', text: '$8 \\cdot \\sin 30° = 4$ m', isCorrect: false },
          { id: 'c', text: '$8 \\cdot \\tan 30° \\approx 4{,}62$ m', isCorrect: false },
          { id: 'd', text: '$\\frac{8}{\\cos 30°} \\approx 9{,}24$ m', isCorrect: false },
        ],
        solution: 'Horisontal bredde = hosliggende katet = hypotenus · cos v = 8 · cos 30° = 8 · 0,866 ≈ 6,93 m.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Pytagoras\' setning', definition: 'a² + b² = c² i rettvinklede trekanter' },
    { term: 'Hypotenus', definition: 'Den lengste siden i en rettvinklet trekant, overfor den rette vinkelen' },
    { term: 'Katet', definition: 'En av de to kortere sidene i en rettvinklet trekant' },
    { term: 'Sinus', definition: 'Forholdet mellom motstående katet og hypotenusen' },
    { term: 'Cosinus', definition: 'Forholdet mellom hosliggende katet og hypotenusen' },
    { term: 'Tangens', definition: 'Forholdet mellom motstående og hosliggende katet' },
  ],
};

// ============================================================================
// Kapittel 6.1: Matematisk modellering
// ============================================================================

export const CHAPTER_2P_6_1: TextbookChapter = {
  id: '2p-6-1',
  courseId: '2p',
  chapterNumber: '6.1',
  title: 'Matematisk modellering',
  description: 'Bygge og bruke matematiske modeller.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  content: [
    // INTRO
    {
      id: '2p-6-1-intro',
      type: 'text',
      content: `## Matematisk modellering

Matematisk modellering handler om å bruke matematikk til å beskrive, forstå og forutsi hendelser i den virkelige verden. En matematisk modell er en forenklet beskrivelse av virkeligheten uttrykt med matematisk språk.

I dette kapittelet skal du lære:
- Hva modelleringsprosessen går ut på
- Hvordan du velger mellom lineær og eksponentiell modell
- Hvordan du setter opp modeller fra praktiske situasjoner
- Hvordan du vurderer og kritiserer modeller`,
    },

    // BLOKK 1: Modelleringsprosessen
    {
      id: '2p-6-1-def-modellering',
      type: 'definition',
      title: 'Modelleringsprosessen',
      content: `**Modelleringsprosessen** består av fem steg:

1. **Forstå problemet**: Hva er det vi vil finne ut? Hvilke data har vi?
2. **Forenkle**: Hvilke faktorer er viktigst? Hva kan vi se bort fra?
3. **Modellere**: Sett opp en matematisk modell (formel, funksjon, ligning)
4. **Løse**: Bruk modellen til å beregne svar
5. **Vurdere**: Er svaret rimelig? Passer modellen til virkeligheten?

En modell er alltid en **forenkling** – den vil aldri gi et helt eksakt bilde av virkeligheten. Nøkkelen er å lage en modell som er enkel nok til å bruke, men nøyaktig nok til å gi nyttige resultater.`,
    },
    {
      id: '2p-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Modelleringsprosessen i praksis',
      problem: 'En kommune registrerer at det ble levert 1 200 tonn avfall i 2020 og 1 350 tonn i 2024. De ønsker å forutsi avfallsmengden i 2030. Gå gjennom modelleringsprosessen.',
      solution: `**Løsning:**

**1. Forstå:** Vi kjenner avfallsmengden i to år og vil predikere fremtiden.

**2. Forenkle:** Vi antar at veksten er jevn (lineær eller prosentvis lik).

**3. Modellere (lineær):**

Vekst per år: $\\frac{1\\,350 - 1\\,200}{4} = 37{,}5$ tonn/år

$f(x) = 37{,}5x + 1\\,200$ der $x$ = år etter 2020.

**3. Modellere (eksponentiell):**

$1\\,350 = 1\\,200 \\cdot b^4 \\Rightarrow b = \\left(\\frac{1\\,350}{1\\,200}\\right)^{1/4} = 1{,}125^{0{,}25} \\approx 1{,}030$

$g(x) = 1\\,200 \\cdot 1{,}030^x$

**4. Løse (for 2030, $x = 10$):**

Lineær: $f(10) = 37{,}5 \\cdot 10 + 1\\,200 = 1\\,575$ tonn

Eksponentiell: $g(10) = 1\\,200 \\cdot 1{,}030^{10} \\approx 1\\,200 \\cdot 1{,}344 \\approx 1\\,613$ tonn

**5. Vurdere:** Begge gir rimelige estimater. Eksponentiell modell gir litt mer, fordi veksten akselererer. For kort fremtid er forskjellen liten. Vi bør sjekke med flere datapunkter for å avgjøre hvilken modell som passer best.`,
    },
    {
      id: '2p-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste siste steget i modelleringsprosessen?',
        options: [
          { id: 'a', text: 'Vurdere om modellen gir rimelige svar', isCorrect: true },
          { id: 'b', text: 'Sette inn tall i formelen', isCorrect: false },
          { id: 'c', text: 'Tegne grafen', isCorrect: false },
          { id: 'd', text: 'Samle inn så mange datapunkter som mulig', isCorrect: false },
        ],
        solution: 'Det siste og viktigste steget er å vurdere om resultatet er rimelig og om modellen faktisk passer til virkeligheten. Uten denne vurderingen vet vi ikke om svaret gir mening.',
      },
    },
    {
      id: '2p-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'En bedrift har følgende omsetning:\n\n| År | 2019 | 2020 | 2021 | 2022 | 2023 |\n|-----|------|------|------|------|------|\n| Omsetning (mill. kr) | 5,0 | 5,4 | 5,7 | 6,2 | 6,5 |\n\na) Finn en lineær modell for omsetningen. b) Bruk modellen til å estimere omsetningen i 2027. c) Vurder om estimatet er rimelig.',
        hints: ['La x = 0 for 2019. Bruk første og siste datapunkt for å finne stigningstallet.'],
        solution: 'a) a = (6,5 − 5,0) / (4 − 0) = 0,375 mill. kr/år. b = 5,0. f(x) = 0,375x + 5,0. b) 2027: x = 8. f(8) = 0,375 · 8 + 5,0 = 8,0 mill. kr. c) Rimelig dersom trenden fortsetter. Men vi har kun data for 5 år, og ekstrapolering 4 år frem er usikkert. Markedsforhold kan endre seg.',
      },
    },

    // BLOKK 2: Velge riktig modell
    {
      id: '2p-6-1-def-modellvalg',
      type: 'definition',
      title: 'Lineær eller eksponentiell modell?',
      content: `**Lineær modell** $f(x) = ax + b$:
- Brukes når endringen per periode er **tilnærmet konstant** (like mye endring per tidsenhet)
- Grafen er en rett linje
- Eksempler: fast lønnsøkning i kroner, jevn hastighet

**Eksponentiell modell** $f(x) = a \\cdot b^x$:
- Brukes når endringen per periode er en **fast prosent** av nåværende verdi
- Grafen er en kurve som vokser stadig raskere (eller avtar stadig saktere)
- Eksempler: befolkningsvekst, rentes rente, verdifall på bil

**Slik avgjør du:**
1. Se om differansene mellom påfølgende verdier er omtrent like → lineær
2. Se om forholdstallene mellom påfølgende verdier er omtrent like → eksponentiell
3. Bruk regresjon i regneark/GeoGebra og sammenlign $r^2$-verdier`,
    },
    {
      id: '2p-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Velge modell',
      problem: 'En bakteriekultur vokser slik:\n\n| Timer | 0 | 1 | 2 | 3 | 4 |\n|-------|---|---|---|---|---|\n| Antall | 100 | 150 | 225 | 338 | 506 |\n\nEr veksten lineær eller eksponentiell?',
      solution: `**Løsning:**

**Test for lineær (konstante differanser):**
$150 - 100 = 50$, $225 - 150 = 75$, $338 - 225 = 113$, $506 - 338 = 168$

Differansene er **ikke** konstante → ikke lineær.

**Test for eksponentiell (konstante forholdstall):**
$150/100 = 1{,}50$, $225/150 = 1{,}50$, $338/225 = 1{,}50$, $506/338 = 1{,}50$

Forholdstallene er **tilnærmet like** ($\\approx 1{,}50$) → eksponentiell.

Modell: $f(t) = 100 \\cdot 1{,}50^t$

**Svar:** Veksten er eksponentiell med 50 % økning per time.`,
    },
    {
      id: '2p-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken modell passer best for å beskrive hvordan prisen på strøm varierer gjennom et år (høy om vinteren, lav om sommeren)?',
        options: [
          { id: 'a', text: 'Ingen av disse – strømpris er sesongavhengig og krever en annen type modell', isCorrect: true },
          { id: 'b', text: 'Lineær modell', isCorrect: false },
          { id: 'c', text: 'Eksponentiell modell', isCorrect: false },
          { id: 'd', text: 'Begge passer like godt', isCorrect: false },
        ],
        solution: 'Strømpris har sesongvariasjon (opp og ned), som verken fanges opp av en lineær modell (jevn stigning/synking) eller eksponentiell modell (stadig vekst/avtagning). Her trenger man f.eks. en periodisk modell.',
      },
    },

    // BLOKK 3: Praktisk modellering
    {
      id: '2p-6-1-text-praktisk',
      type: 'text',
      content: `### Praktiske modelleringseksempler

Matematisk modellering handler om å ta situasjoner fra den virkelige verden og uttrykke dem med matematikk. Her er noen typiske situasjoner:

- **Befolkningsvekst**: Ofte eksponentiell i begynnelsen, men flater ut
- **Spredning av informasjon i sosiale medier**: Starter eksponensielt, flater ut
- **Vannstand i en beholder**: Ofte lineær ved jevn fylling/tapping
- **Temperaturendring**: Kan modelleres med eksponentiell nedkjøling (Newtons avkjølingslov)

I alle tilfeller må vi huske at modellen er en **forenkling** og har **begrensninger**.`,
    },
    {
      id: '2p-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Modell for oppvarming',
      problem: 'Du setter en kopp med vann i mikrobølgeovnen. Temperaturen øker jevnt med 15 °C per minutt. Vannet starter på 20 °C. Sett opp en modell og finn når vannet når 100 °C.',
      solution: `**Løsning:**

Siden temperaturen øker jevnt med 15 °C per minutt, er dette en lineær modell.

$T(t) = 15t + 20$

der $T$ er temperaturen i °C og $t$ er tiden i minutter.

Når blir $T = 100$?

$15t + 20 = 100$

$15t = 80$

$t = \\frac{80}{15} \\approx 5{,}3$ minutter

**Svar:** Vannet når 100 °C etter ca. 5 minutter og 20 sekunder.

**Vurdering:** Modellen er grei for korte tidsrom, men i praksis vil oppvarmingen bli tregere når temperaturen nærmer seg kokepunktet. Lineær modell er en forenkling.`,
    },
    {
      id: '2p-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Antall abonnenter på en strømmetjeneste i en by var 2 000 i januar 2023 og 3 200 i januar 2025. a) Sett opp en lineær modell. b) Sett opp en eksponentiell modell. c) Bruk begge modellene til å estimere antall abonnenter i januar 2028. d) Hvilken modell er mest realistisk? Begrunn svaret.',
        hints: ['For eksponentiell modell: 3 200 = 2 000 · b², løs for b.'],
        solution: 'a) Lineær: a = (3 200 − 2 000)/2 = 600 per år. f(x) = 600x + 2 000 (x = år etter 2023). b) Eksponentiell: b² = 3 200/2 000 = 1,6, b = √1,6 ≈ 1,265. g(x) = 2 000 · 1,265^x. c) For 2028 (x = 5): Lineær: f(5) = 600 · 5 + 2 000 = 5 000. Eksponentiell: g(5) = 2 000 · 1,265⁵ ≈ 2 000 · 3,22 ≈ 6 440. d) Avhenger av kontekst. Eksponentiell kan passe i en vekstfase, men det er urealistisk at veksten fortsetter med 26,5 % per år i det uendelige – markedet mettes. Den lineære modellen kan undervurdere veksten på kort sikt.',
      },
    },

    // BLOKK 4: Vurdere modeller
    {
      id: '2p-6-1-def-vurdering',
      type: 'definition',
      title: 'Vurdere og kritisere modeller',
      content: `Når du vurderer en modell, bør du stille disse spørsmålene:

1. **Passer modellen til dataene?** Sammenlign modellens verdier med de faktiske verdiene.
2. **Er modellen rimelig utenfor dataintervallet?** Ekstrapolering (prediksjon utenfor kjente data) er alltid usikkert.
3. **Hva er modellens begrensninger?** Ingen modell gjelder for alltid eller i alle situasjoner.
4. **Er forutsetningene realistiske?** F.eks. «jevn vekst» gjelder sjelden evig.
5. **Kan modellen forbedres?** Kanskje en annen type funksjon passer bedre?

**Interpolasjon** (beregne verdier *mellom* kjente datapunkter) er mer pålitelig enn **ekstrapolering** (beregne verdier *utenfor* dataintervallet).`,
    },
    {
      id: '2p-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom interpolasjon og ekstrapolering?',
        options: [
          { id: 'a', text: 'Interpolasjon beregner verdier mellom kjente data og er mer pålitelig, ekstrapolering beregner utenfor', isCorrect: true },
          { id: 'b', text: 'Interpolasjon bruker lineære modeller og ekstrapolering bruker eksponentielle', isCorrect: false },
          { id: 'c', text: 'Interpolasjon er mer nøyaktig fordi den bruker flere datapunkter', isCorrect: false },
          { id: 'd', text: 'Det er ingen viktig forskjell – begge gir like nøyaktige svar', isCorrect: false },
        ],
        solution: 'Interpolasjon beregner verdier innenfor kjente datapunkter og er generelt pålitelig. Ekstrapolering beregner utenfor dataområdet og er mye mer usikkert – vi vet ikke om trenden fortsetter.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Modelleringsprosessen**: Forstå → forenkle → modellere → løse → vurdere
- **Lineær modell** ($f(x) = ax + b$): Brukes når endringen per periode er konstant
- **Eksponentiell modell** ($f(x) = a \\cdot b^x$): Brukes når endringen er en fast prosent av nåværende verdi
- Avgjøre modelltype ved å sjekke om **differanser** (lineær) eller **forholdstall** (eksponentiell) er konstante
- **Vurdere modeller**: Alle modeller er forenklinger; interpolasjon er mer pålitelig enn ekstrapolering`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Antall elsparkesykler i en by ble registrert:\n\n| Måned (etter lansering) | 1 | 3 | 6 | 9 | 12 |\n|--------------------------|---|---|---|---|----|\n| Antall | 200 | 520 | 1 100 | 1 600 | 1 900 |\n\na) Undersøk om veksten er lineær eller eksponentiell. b) Sett opp en passende modell. c) Estimer antallet etter 18 måneder. d) Drøft om modellen er realistisk for lang sikt.',
        solution: 'a) Differanser: 320, 580, 500, 300 – ikke konstant, men avtagende. Forholdstall: 2,6, 2,12, 1,45, 1,19 – heller ikke konstant, men avtakende. Veksten er ikke rent lineær eller eksponentiell – den flater ut. b) Lineær tilnærming: a ≈ (1 900 − 200)/11 ≈ 155/mnd. f(x) ≈ 155x + 45. c) f(18) ≈ 155 · 18 + 45 ≈ 2 835. d) Modellen er trolig for enkel. Veksten flater ut (metning), noe en logistisk modell ville håndtert bedre. Lineær modell overvurderer trolig langsiktig vekst.',
      },
    },
    {
      id: '2p-6-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-6-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du jobber i en bedrift som selger softis. Bedriften hadde 50 000 kr i inntekt i juni 2023 og 65 000 kr i juni 2024. Ledelsen spør deg: «Når vil vi nå 100 000 kr i månedsinntekt?» a) Sett opp en lineær modell og en eksponentiell modell. b) Bruk begge modellene til å svare ledelsen. c) Diskuter hvilken modell som er mest realistisk, og hvilke forutsetninger som må oppfylles for at estimatene skal slå til.',
        hints: ['Husk at softisalg er sesongbasert – modellen beskriver kanskje bare junimåneder.'],
        solution: 'a) Lineær: f(x) = 15 000x + 50 000 (x i år etter 2023). Eksponentiell: b = 65 000/50 000 = 1,30. g(x) = 50 000 · 1,30^x. b) Lineær: 15 000x + 50 000 = 100 000 → x ≈ 3,3 år (rundt september 2026). Eksponentiell: 50 000 · 1,30^x = 100 000 → 1,30^x = 2 → x = ln 2/ln 1,30 ≈ 2,6 år (rundt januar 2026). c) Begge modeller antar at trenden fortsetter. Softisalg er sesongavhengig, og modellen bør kun brukes for sammenligningsbar måned (juni). Andre faktorer: konkurranse, værforhold, prisendringer. Eksponentiell modell gir raskere vekst, men 30 % årlig vekst er vanskelig å opprettholde over tid.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Matematisk modell', definition: 'En forenklet matematisk beskrivelse av et fenomen i virkeligheten' },
    { term: 'Modelleringsprosessen', definition: 'Forstå → forenkle → modellere → løse → vurdere' },
    { term: 'Lineær modell', definition: 'f(x) = ax + b, brukes ved konstant endring per periode' },
    { term: 'Eksponentiell modell', definition: 'f(x) = a · b^x, brukes ved fast prosentvis endring' },
    { term: 'Interpolasjon', definition: 'Beregne verdier mellom kjente datapunkter – relativt pålitelig' },
    { term: 'Ekstrapolering', definition: 'Beregne verdier utenfor kjente datapunkter – mer usikkert' },
  ],
};

// ============================================================================
// Kapittel 6.2: Digitale verktøy
// ============================================================================

export const CHAPTER_2P_6_2: TextbookChapter = {
  id: '2p-6-2',
  courseId: '2p',
  chapterNumber: '6.2',
  title: 'Digitale verktøy',
  description: 'Bruk av regneark og andre digitale verktøy.',
  estimatedMinutes: 45,
  prerequisites: ['2p-6-1'],
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  content: [
    // INTRO
    {
      id: '2p-6-2-intro',
      type: 'text',
      content: `## Digitale verktøy

I matematikk 2P er det viktig å kunne bruke digitale verktøy til å løse problemer, analysere data og presentere resultater. De viktigste verktøyene er regneark (som Excel eller Google Regneark) og GeoGebra.

I dette kapittelet skal du lære:
- Bruke regneark med formler og cellreferanser
- Plotte grafer og utføre regresjon i GeoGebra
- Lage diagrammer og visualiseringer
- Løse praktiske problemer med digitale verktøy`,
    },

    // BLOKK 1: Regneark
    {
      id: '2p-6-2-def-regneark',
      type: 'definition',
      title: 'Regneark: Formler og cellreferanser',
      content: `Et **regneark** organiserer data i rader og kolonner. Hver rute kalles en **celle** og har en adresse (f.eks. A1, B3, C12).

**Viktige begreper:**
- **Formel**: Starter med $=$ (f.eks. \`=A1+B1\`)
- **Cellreferanse**: Peker på en annen celle (f.eks. \`A1\`)
- **Relativ referanse**: Endrer seg når du kopierer formelen (\`A1\`)
- **Absolutt referanse**: Forblir fast når du kopierer (\`$A$1\`)
- **Funksjoner**: Innebygde beregninger som \`SUMMER(A1:A10)\`, \`GJENNOMSNITT(A1:A10)\`, \`MAKS(A1:A10)\`

**Eksempler på formler:**
- \`=A1*B1\` – multipliserer verdiene i A1 og B1
- \`=A1*(1+$B$1)\` – multipliserer A1 med en fast vekstfaktor fra B1
- \`=SUMMER(A1:A10)\` – summerer alle verdier fra A1 til A10`,
    },
    {
      id: '2p-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Budsjett i regneark',
      problem: 'Du vil sette opp et budsjett i regneark. Inntekt står i celle B1 (25 000 kr). Utgifter står i B3:B8. Beskriv formlene du trenger.',
      solution: `**Løsning:**

| Celle | Innhold | Formel |
|-------|---------|--------|
| B1 | Inntekt | 25000 |
| B3 | Husleie | 8500 |
| B4 | Strøm | 1200 |
| B5 | Mat | 4000 |
| B6 | Transport | 1500 |
| B7 | Fritid | 2000 |
| B8 | Annet | 1000 |
| B10 | Sum utgifter | \`=SUMMER(B3:B8)\` |
| B11 | Til overs | \`=B1-B10\` |
| B12 | Spareprosent | \`=B11/B1*100\` |

Fordelen med regneark er at du enkelt kan endre verdier og se hvordan det påvirker resultatet. Hvis du endrer «Mat» fra 4 000 til 3 500, oppdateres alt automatisk.`,
    },
    {
      id: '2p-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'I et regneark står tallet 500 i celle A1 og tallet 0,05 i celle B1. Hva gir formelen `=A1*(1+B1)`?',
        options: [
          { id: 'a', text: '525', isCorrect: true },
          { id: 'b', text: '25', isCorrect: false },
          { id: 'c', text: '500,05', isCorrect: false },
          { id: 'd', text: '505', isCorrect: false },
        ],
        solution: '=A1*(1+B1) = 500 · (1 + 0,05) = 500 · 1,05 = 525. Formelen beregner 500 med 5 % påslag.',
      },
    },
    {
      id: '2p-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du har et lån på 200 000 kr i celle A1 og årlig rente 4 % i celle B1. a) Skriv en formel som beregner rentekostnaden for første år. b) Skriv en formel i A2 som beregner restlånet etter at du har betalt 50 000 kr i avdrag. c) Hvorfor bør du bruke `$B$1` i stedet for `B1` hvis du skal kopiere renteformelen nedover?',
        hints: ['a) Rentekostnad = lån · rente. b) Restlån = gammelt lån − avdrag.'],
        solution: 'a) `=A1*B1` gir 200 000 · 0,04 = 8 000 kr. b) `=A1-50000` gir 150 000 kr. c) Absolutt referanse `$B$1` sikrer at renten alltid hentes fra B1, selv når formelen kopieres til nye rader. Med relativ referanse ville den peke på B2, B3 osv.',
      },
    },

    // BLOKK 2: GeoGebra
    {
      id: '2p-6-2-def-geogebra',
      type: 'definition',
      title: 'GeoGebra: Grafplotting og regresjon',
      content: `**GeoGebra** er et gratis matematikkprogram som kan brukes til grafplotting, geometri, statistikk og regresjon.

**Nyttige kommandoer i GeoGebra:**
- Skrive inn \`f(x) = 2x + 3\` i inntastingsfeltet for å plotte en lineær funksjon
- \`Nullpunkt(f)\` – finner nullpunktet til funksjonen
- \`Skjæring(f, g)\` – finner skjæringspunktet mellom to funksjoner
- \`RegLin(liste)\` – utfører lineær regresjon på en punktliste
- \`RegEksp(liste)\` – utfører eksponentiell regresjon

**Legge inn datapunkter:**
1. Åpne regnearket i GeoGebra (Vis → Regneark)
2. Skriv inn $x$-verdier i kolonne A og $y$-verdier i kolonne B
3. Marker dataene og velg «Lag liste med punkter»
4. Bruk \`RegLin\` eller \`RegEksp\` for å finne beste tilpasning`,
    },
    {
      id: '2p-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Regresjon i GeoGebra',
      problem: 'Du har målt temperaturen i en kopp kaffe over tid:\n\n| Minutter | 0 | 5 | 10 | 15 | 20 | 30 |\n|----------|---|---|----|----|----|----|  \n| Temp (°C) | 85 | 72 | 62 | 55 | 49 | 40 |\n\nBeskriv hvordan du utfører regresjon i GeoGebra.',
      solution: `**Løsning:**

1. Åpne GeoGebra og vis regnearket
2. Skriv minutter i kolonne A: 0, 5, 10, 15, 20, 30
3. Skriv temperatur i kolonne B: 85, 72, 62, 55, 49, 40
4. Marker alle data og lag en punktliste, f.eks. \`L1\`
5. Skriv \`RegEksp(L1)\` i inntastingsfeltet

GeoGebra gir f.eks.: $f(x) = 83{,}2 \\cdot 0{,}975^x$

$r^2 \\approx 0{,}995$ – modellen passer veldig godt til dataene.

Du kan nå bruke modellen til å estimere temperaturen etter f.eks. 45 minutter: $f(45) = 83{,}2 \\cdot 0{,}975^{45} \\approx 27 °C$.`,
    },
    {
      id: '2p-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva betyr det at $r^2 = 0{,}98$ i en regresjonsanalyse?',
        options: [
          { id: 'a', text: '98 % av variasjonen i dataene forklares av modellen', isCorrect: true },
          { id: 'b', text: 'Modellen har en feilmargin på 2 %', isCorrect: false },
          { id: 'c', text: 'Modellen passer til 98 av 100 datapunkter', isCorrect: false },
          { id: 'd', text: 'Korrelasjonskoeffisienten er 0,98', isCorrect: false },
        ],
        solution: '$r^2 = 0{,}98$ betyr at 98 % av variasjonen i dataene kan forklares av modellen. Jo nærmere 1, desto bedre passer modellen. (Korrelasjonskoeffisienten $r$ ville vært $\\sqrt{0{,}98} \\approx 0{,}99$.)',
      },
    },

    // BLOKK 3: Diagrammer og visualiseringer
    {
      id: '2p-6-2-def-diagrammer',
      type: 'definition',
      title: 'Diagrammer og visualiseringer',
      content: `Ulike diagramtyper egner seg til ulike formål:

- **Søylediagram**: Sammenligne verdier i ulike kategorier (f.eks. salg per måned)
- **Linjediagram**: Vise utvikling over tid (f.eks. temperatur gjennom døgnet)
- **Sektordiagram (kakediagram)**: Vise andeler av en helhet (f.eks. budsjettfordeling)
- **Punktdiagram (spredningsdiagram)**: Vise sammenhengen mellom to variabler (f.eks. pris og etterspørsel)
- **Histogram**: Vise frekvensfordelingen av data (f.eks. aldersfordeling)

**Tips for gode diagrammer:**
- Velg riktig diagramtype for det du vil vise
- Ha tydelige aksetitler og enheter
- Bruk passende skala (ikke start y-aksen midt i for å overdrive forskjeller)
- Gi diagrammet en beskrivende tittel`,
    },
    {
      id: '2p-6-2-example-3',
      type: 'example',
      title: 'Eksempel: Velge riktig diagram',
      problem: 'Du har følgende data og skal presentere dem visuelt:\n1. Fordelingen av budsjettet ditt mellom husleie, mat, transport og fritid\n2. Utviklingen i antall turister til Norge fra 2015 til 2024\n3. Sammenhengen mellom antall timer studert og poeng på eksamen\n\nHvilke diagramtyper passer best?',
      solution: `**Løsning:**

1. **Budsjettfordeling** → **Sektordiagram** (kakediagram) fordi du viser andeler av en helhet (100 % av budsjettet).

2. **Turistutvikling over tid** → **Linjediagram** fordi du viser utvikling over tid med sammenhengende data.

3. **Studietid vs. eksamenspoeng** → **Punktdiagram** (spredningsdiagram) fordi du undersøker sammenhengen mellom to variabler. Du kan også legge inn en regresjonslinje.`,
    },
    {
      id: '2p-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Du vil vise hvordan salget av elbiler i Norge har utviklet seg fra 2015 til 2024. Hvilken diagramtype er best egnet?',
        options: [
          { id: 'a', text: 'Linjediagram', isCorrect: true },
          { id: 'b', text: 'Sektordiagram', isCorrect: false },
          { id: 'c', text: 'Histogram', isCorrect: false },
          { id: 'd', text: 'Boblediagram', isCorrect: false },
        ],
        solution: 'Linjediagram viser utvikling over tid og er ideelt for å se trenden i elbilsalget gjennom årene.',
      },
    },

    // BLOKK 4: Problemløsning med digitale verktøy
    {
      id: '2p-6-2-text-problemlosning',
      type: 'text',
      content: `### Problemløsning med digitale verktøy

Digitale verktøy gjør det mulig å løse problemer som ville vært svært tidkrevende å gjøre for hånd. Typiske oppgaver:

- **Regneark**: Sette opp nedbetalingsplaner for lån, budsjettere, simulere investeringer
- **GeoGebra**: Tegne funksjonsgrafer, finne skjæringspunkter, gjøre regresjonsanalyse
- **Kombinert bruk**: Samle data i regneark, eksportere til GeoGebra for analyse, tilbake til regneark for beregninger

Husk: Digitale verktøy er hjelpemidler. Du må fortsatt **forstå matematikken** bak for å bruke verktøyene riktig og tolke resultatene.`,
    },
    {
      id: '2p-6-2-example-4',
      type: 'example',
      title: 'Eksempel: Lånesimulering i regneark',
      problem: 'Du vil lage en nedbetalingsplan for et annuitetslån på 100 000 kr med 5 % årlig rente over 4 år i et regneark. Beskriv oppsettet.',
      solution: `**Løsning:**

Først beregner vi terminbeløpet:

$T = 100\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^4}{1{,}05^4 - 1} = 100\\,000 \\cdot 0{,}28201 = 28\\,201$ kr

**Regnearkoppsett:**

| | A (År) | B (Restlån start) | C (Rente) | D (Terminbeløp) | E (Avdrag) | F (Restlån slutt) |
|--|--------|-------------------|-----------|-----------------|------------|-------------------|
| 1 | 1 | 100 000 | \`=B1*0,05\` | 28 201 | \`=D1-C1\` | \`=B1-E1\` |
| 2 | 2 | \`=F1\` | \`=B2*0,05\` | 28 201 | \`=D2-C2\` | \`=B2-E2\` |
| ... | ... | ... | ... | ... | ... | ... |

Regnearket beregner automatisk at renten synker og avdragene øker for hvert år.`,
    },
    {
      id: '2p-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du sparer 1 000 kr i måneden til en konto med 3 % årlig rente. a) Beskriv hvordan du ville satt opp regnearket for å simulere 12 måneder. b) Hvilken formel ville du brukt i cellen for «saldo etter rente» (gitt at renten er 3 %/12 per måned)? c) Hva er den forventede saldoen etter 12 måneder (ca.)?',
        hints: ['Månedlig rente = 3 %/12 = 0,25 %. Ny saldo = (gammel saldo + innskudd) · (1 + 0,0025).'],
        solution: 'a) Kolonne A: Måned (1–12). Kolonne B: Innskudd (1 000). Kolonne C: Saldo før innskudd (=forrige saldo etter rente). Kolonne D: Saldo etter innskudd (=C+B). Kolonne E: Saldo etter rente (=D·(1+0,0025)). b) `=D1*(1+0,0025)` eller `=D1*(1+$B$15/12)` hvis renten står i B15. c) Etter 12 måneder: ca. 12 198 kr (12 000 i innskudd + ca. 198 kr i rente).',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Regneark**: Formler, cellreferanser (relative og absolutte), innebygde funksjoner som SUMMER og GJENNOMSNITT
- **GeoGebra**: Plotte funksjoner, finne nullpunkter og skjæringspunkter, utføre lineær og eksponentiell regresjon
- **Diagramtyper**: Søylediagram, linjediagram, sektordiagram, punktdiagram – velge riktig type etter formål
- **Problemløsning**: Bruke digitale verktøy til å sette opp budsjett, simulere lån, analysere data og presentere funn`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har følgende data over strømprisen (øre/kWh) i en region:\n\n| Måned | Jan | Feb | Mar | Apr | Mai | Jun | Jul | Aug | Sep | Okt | Nov | Des |\n|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|\n| Pris | 185 | 170 | 130 | 90 | 55 | 40 | 35 | 45 | 80 | 120 | 155 | 195 |\n\na) Bruk et digitalt verktøy til å lage et linjediagram. b) Beregn gjennomsnittsprisen for året. c) I hvilke måneder er prisen over gjennomsnittet? d) Vurder om en lineær modell er egnet for disse dataene.',
        solution: 'b) Gjennomsnitt = (185+170+130+90+55+40+35+45+80+120+155+195)/12 = 1 300/12 ≈ 108,3 øre/kWh. c) Jan (185), Feb (170), Mar (130), Nov (155), Des (195) – 5 måneder over snittet. d) Lineær modell er ikke egnet. Strømprisen varierer sesongmessig (høy om vinteren, lav om sommeren), noe som krever en periodisk modell.',
      },
    },
    {
      id: '2p-6-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En boligprisindeks for en by viser følgende utvikling:\n\n| År | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 |\n|-----|------|------|------|------|------|------|\n| Indeks | 100 | 103 | 101 | 110 | 118 | 121 |\n\na) Legg dataene inn i GeoGebra (eller regneark) og lag et punktdiagram. b) Utfør lineær regresjon og oppgi funksjonsuttrykket. c) Hva gir modellen for boligprisindeksen i 2026? d) Vurder om prediksjonen er pålitelig.',
        solution: 'b) Med x = 0 for 2018: RegLin gir omtrent f(x) = 4,23x + 98,5 (r² ≈ 0,93). c) For 2026 (x = 8): f(8) = 4,23 · 8 + 98,5 ≈ 132,3. d) r² = 0,93 betyr god tilpasning, men vi ekstrapolerer 3 år frem. Boligpriser påvirkes av renter, økonomi og politikk, og kan endre seg brått (som i 2020). Prediksjonen er usikker.',
      },
    },
    {
      id: '2p-6-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal sammenligne to spareplaner over 10 år:\n- Plan A: Setter inn 500 kr i måneden til 3,5 % årlig rente\n- Plan B: Setter inn 6 000 kr én gang i året (i januar) til 3,8 % årlig rente\n\na) Sett opp et regneark for begge planene over 10 år. b) Beregn totalt innskudd for begge planer. c) Hvilken plan gir mest i slutten? d) Forklar hvorfor det er forskjell, selv om totalt innskudd er likt.',
        hints: ['Plan A har månedlig innskudd → pengene jobber lenger. Plan B har noe høyere rente men pengene settes inn sjeldnere.'],
        solution: 'b) Begge: 500 · 12 · 10 = 60 000 kr totalt. c) Plan A (3,5 %, månedlig): Sluttverdi ≈ 71 200 kr. Plan B (3,8 %, årlig): Sluttverdi ≈ 71 600 kr. Forskjellen er liten. d) Plan A setter inn penger jevnere, slik at pengene jobber lenger (renters rente oftere). Plan B har høyere rente, men pengene settes bare inn én gang i året. De to effektene oppveier hverandre nesten helt i dette tilfellet.',
      },
    },
    {
      id: '2p-6-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-6-2-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Du skriver formelen `=B2*$C$1` i celle D2 og kopierer den ned til D3, D4 og D5. Hva skjer med cellreferansene?',
        options: [
          { id: 'a', text: 'B2 endres til B3, B4, B5 mens $C$1 forblir $C$1 i alle radene', isCorrect: true },
          { id: 'b', text: 'Begge referansene endres til B3*C2, B4*C3 osv.', isCorrect: false },
          { id: 'c', text: 'Ingen av referansene endres', isCorrect: false },
          { id: 'd', text: 'Bare $C$1 endres, B2 forblir fast', isCorrect: false },
        ],
        solution: 'B2 er en relativ referanse og endres til B3, B4, B5 når formelen kopieres nedover. $C$1 er en absolutt referanse (med dollartegn) og forblir fast uansett hvor formelen kopieres.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Celle', definition: 'En rute i et regneark, identifisert med kolonbokstav og radnummer (f.eks. A1)' },
    { term: 'Relativ referanse', definition: 'Cellreferanse som endres når formelen kopieres (f.eks. A1)' },
    { term: 'Absolutt referanse', definition: 'Cellreferanse som forblir fast når formelen kopieres (f.eks. $A$1)' },
    { term: 'Regresjon', definition: 'Metode for å finne funksjonen som best tilpasses et sett med datapunkter' },
    { term: 'r²', definition: 'Determinasjonskoeffisienten – angir hvor godt modellen forklarer variasjonen i data' },
    { term: 'Diagramtype', definition: 'Type visualisering valgt etter formålet: søyle, linje, sektor, punkt osv.' },
  ],
};

// Eksporter alle kapitler i seksjon 5 og 6
export const MATEMATIKK_2P_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_5_1,
  CHAPTER_2P_5_2,
  CHAPTER_2P_6_1,
  CHAPTER_2P_6_2,
];
