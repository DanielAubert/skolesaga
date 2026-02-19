/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Del 6
 * Seksjon 7: Algebra (7.1–7.3), Seksjon 8: Måling (8.1–8.2), Seksjon 1 utvidelse (1.5)
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Likninger med en ukjent
// ============================================================================
export const CHAPTER_2P_7_1: TextbookChapter = {
  id: '2p-7-1', courseId: '2p', chapterNumber: '7.1', title: 'Likninger med en ukjent',
  description: 'Løse likninger av første grad med praktiske anvendelser.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke algebra og likninger til å løse praktiske problemstillinger'],
  content: [
    { id: '2p-7-1-intro', type: 'text', content: `## Likninger med en ukjent\n\nEn likning sier at to uttrykk er like. Å løse likningen betyr å finne verdien av den ukjente.\n\nI dette kapittelet lærer du:\n- Å løse førstegradslikninger\n- Å håndtere parenteser og brøk\n- Å sette opp likninger fra tekst` },
    { id: '2p-7-1-def', type: 'definition', title: 'Likning', content: `En **likning** har formen $\\text{venstre side} = \\text{høyre side}$. Vi kan gjøre de samme operasjonene på begge sider uten å endre løsningen.` },
    { id: '2p-7-1-ex1', type: 'example', title: 'Likning med parentes', problem: 'Løs $3(x - 4) + 2 = 2x + 5$.', solution: `$3x - 12 + 2 = 2x + 5 \\Rightarrow 3x - 10 = 2x + 5 \\Rightarrow x = 15$\n\n**Kontroll:** $3(11)+2=35$ og $2(15)+5=35$. Stemmer!` },
    { id: '2p-7-1-ex2', type: 'example', title: 'Praktisk likning', problem: 'Treningsstudio A: 299 kr/mnd + 50 kr/besøk. Studio B: 799 kr/mnd flat. Når koster de likt?', solution: `$299 + 50x = 799 \\Rightarrow 50x = 500 \\Rightarrow x = 10$\n\n**Svar:** Ved 10 besøk per måned.` },
    { id: '2p-7-1-tip', type: 'tip', content: 'Sett alltid svaret tilbake i likningen for kontroll.' },
    { id: '2p-7-1-q1', type: 'exercise', exercise: { id: '2p-7-1-q1', number: '1', type: 'multiple-choice', task: 'Løs $5x - 3 = 2x + 12$.', options: [{ id: 'a', text: '$x = 5$', isCorrect: true }, { id: 'b', text: '$x = 3$', isCorrect: false }, { id: 'c', text: '$x = 9$', isCorrect: false }, { id: 'd', text: '$x = 15$', isCorrect: false }], solution: '$3x = 15 \\Rightarrow x = 5$.' } },
    { id: '2p-7-1-q2', type: 'exercise', exercise: { id: '2p-7-1-q2', number: '2', type: 'classic', task: 'Løs $4(2x+1) - 3(x-2) = 25$.', hints: ['Multipliser ut parentesene.'], solution: '$8x+4-3x+6=25 \\Rightarrow 5x=15 \\Rightarrow x=3$.' } },
    { id: '2p-7-1-q3', type: 'exercise', exercise: { id: '2p-7-1-q3', number: '3', type: 'classic', task: 'Håndverker: 450 kr utrykningsgebyr + 380 kr/time. Regning: 2 370 kr. Antall timer?', hints: ['$450+380t=2370$'], solution: '$380t=1920 \\Rightarrow t \\approx 5{,}05$. Ca. 5 timer.' } },
    { id: '2p-7-1-q4', type: 'exercise', exercise: { id: '2p-7-1-q4', number: '4', type: 'multiple-choice', task: 'Løs $\\frac{x}{3}+2 = \\frac{x}{2}-1$.', options: [{ id: 'a', text: '$x=18$', isCorrect: true }, { id: 'b', text: '$x=6$', isCorrect: false }, { id: 'c', text: '$x=12$', isCorrect: false }, { id: 'd', text: '$x=-6$', isCorrect: false }], solution: 'Fellesnevner 6: $2x+12=3x-6 \\Rightarrow x=18$.' } },
    { id: '2p-7-1-q5', type: 'exercise', exercise: { id: '2p-7-1-q5', number: '5', type: 'classic', task: 'Lisa har 800 kr og sparer 150 kr/uke. Markus har 350 kr og sparer 250 kr/uke. Når har de likt?', hints: ['$800+150u = 350+250u$'], solution: '$450=100u \\Rightarrow u=4{,}5$ uker.' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Likning', definition: 'Utsagn om at to uttrykk er like.' },
    { term: 'Ukjent', definition: 'Variabelen vi skal finne verdien av.' },
    { term: 'Løsning', definition: 'Verdien som gjør likningen sann.' },
    { term: 'Kontroll', definition: 'Sette svaret tilbake for å sjekke.' },
  ],
};

// ============================================================================
// Kapittel 7.2: Likningssett
// ============================================================================
export const CHAPTER_2P_7_2: TextbookChapter = {
  id: '2p-7-2', courseId: '2p', chapterNumber: '7.2', title: 'Likningssett',
  description: 'Løse to likninger med to ukjente ved innsettings- og addisjonsmetoden.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke algebra og likninger til å løse praktiske problemstillinger'],
  content: [
    { id: '2p-7-2-intro', type: 'text', content: `## Likningssett\n\nNoen ganger trenger vi to likninger for å bestemme to ukjente. Et **likningssett** er to likninger som gjelder samtidig.\n\nDu lærer:\n- Innsettingsmetoden\n- Addisjonsmetoden\n- Å sette opp likningssett fra tekst` },
    { id: '2p-7-2-def', type: 'definition', title: 'Likningssett', content: `Et **likningssett med to ukjente** har to likninger med $x$ og $y$. Løsningen er verdiparet $(x,y)$ som tilfredsstiller begge.` },
    { id: '2p-7-2-ex1', type: 'example', title: 'Innsettingsmetoden', problem: 'Løs: $y = 2x+1$ og $3x+y = 16$.', solution: `Sett inn: $3x+(2x+1)=16 \\Rightarrow 5x=15 \\Rightarrow x=3$, $y=7$.` },
    { id: '2p-7-2-ex2', type: 'example', title: 'Kafé-oppgave', problem: 'Gr. 1: 3 kaffe + 2 boller = 175 kr. Gr. 2: 2 kaffe + 4 boller = 190 kr. Priser?', solution: `$3k+2b=175$ (I), $2k+4b=190$ (II). Gang (I)·2: $6k+4b=350$. Trekk fra (II): $4k=160 \\Rightarrow k=40$. $b=27{,}50$. Kaffe 40 kr, bolle 27,50 kr.` },
    { id: '2p-7-2-q1', type: 'exercise', exercise: { id: '2p-7-2-q1', number: '1', type: 'multiple-choice', task: 'Løs: $x+y=10$ og $x-y=4$.', options: [{ id: 'a', text: '$x=7,\\;y=3$', isCorrect: true }, { id: 'b', text: '$x=6,\\;y=4$', isCorrect: false }, { id: 'c', text: '$x=8,\\;y=2$', isCorrect: false }, { id: 'd', text: '$x=5,\\;y=5$', isCorrect: false }], solution: 'Adder: $2x=14 \\Rightarrow x=7$, $y=3$.' } },
    { id: '2p-7-2-q2', type: 'exercise', exercise: { id: '2p-7-2-q2', number: '2', type: 'classic', task: 'Løs med innsetting: $y=3x-5$ og $2x+y=15$.', hints: ['Sett inn $3x-5$ for $y$.'], solution: '$2x+3x-5=15 \\Rightarrow 5x=20 \\Rightarrow x=4$, $y=7$.' } },
    { id: '2p-7-2-q3', type: 'exercise', exercise: { id: '2p-7-2-q3', number: '3', type: 'classic', task: 'Lise: 2 t-skjorter + 1 caps = 650 kr. Jonas: 1 t-skjorte + 3 caps = 575 kr. Finn prisene.', hints: ['$2t+c=650$ og $t+3c=575$'], solution: '$c=650-2t$. $t+3(650-2t)=575 \\Rightarrow -5t=-1375 \\Rightarrow t=275$, $c=100$.' } },
    { id: '2p-7-2-q4', type: 'exercise', exercise: { id: '2p-7-2-q4', number: '4', type: 'multiple-choice', task: 'Løs: $2x+3y=19$ og $4x-3y=5$.', options: [{ id: 'a', text: '$x=4,\\;y=\\frac{11}{3}$', isCorrect: true }, { id: 'b', text: '$x=3,\\;y=5$', isCorrect: false }, { id: 'c', text: '$x=5,\\;y=3$', isCorrect: false }, { id: 'd', text: '$x=2,\\;y=5$', isCorrect: false }], solution: 'Adder: $6x=24 \\Rightarrow x=4$. $3y=11 \\Rightarrow y=\\frac{11}{3}$.' } },
    { id: '2p-7-2-q5', type: 'exercise', exercise: { id: '2p-7-2-q5', number: '5', type: 'classic', task: 'En bonde har høns og sauer – 20 dyr og 56 bein totalt. Hvor mange av hvert?', hints: ['Høns: 2 bein, sauer: 4 bein.'], solution: '$h+s=20$, $2h+4s=56$. $h=20-s$: $2(20-s)+4s=56 \\Rightarrow 2s=16 \\Rightarrow s=8$, $h=12$.' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Likningssett', definition: 'To likninger som gjelder samtidig.' },
    { term: 'Innsettingsmetoden', definition: 'Løs for én ukjent og sett inn i den andre likningen.' },
    { term: 'Addisjonsmetoden', definition: 'Adder eller subtraher likningene for å eliminere én ukjent.' },
  ],
};

// ============================================================================
// Kapittel 7.3: Ulikheter
// ============================================================================
export const CHAPTER_2P_7_3: TextbookChapter = {
  id: '2p-7-3', courseId: '2p', chapterNumber: '7.3', title: 'Ulikheter',
  description: 'Løse lineære ulikheter og forstå løsningsmengden.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke algebra og likninger til å løse praktiske problemstillinger'],
  content: [
    { id: '2p-7-3-intro', type: 'text', content: `## Ulikheter\n\nOfte er vi ikke ute etter én eksakt verdi, men et område: «Hvor mange timer for *minst* 5 000 kr?»\n\nDu lærer:\n- Symbolene $<, >, \\leq, \\geq$\n- Å løse førstegradsulikheter\n- Hva som skjer ved ganging/deling med negativt tall` },
    { id: '2p-7-3-def', type: 'definition', title: 'Ulikhet', content: `En **ulikhet** sier at én side er større eller mindre enn den andre. $<$ betyr «mindre enn», $>$ betyr «større enn», $\\leq$ og $\\geq$ inkluderer likhet.` },
    { id: '2p-7-3-warn', type: 'warning', title: 'Viktig regel', content: 'Når du **ganger eller deler med et negativt tall**, må du **snu ulikhetstegnet**. Eksempel: $-2x > 6 \\Rightarrow x < -3$.' },
    { id: '2p-7-3-ex1', type: 'example', title: 'Lineær ulikhet', problem: 'Løs $3x+7 \\leq 22$.', solution: `$3x \\leq 15 \\Rightarrow x \\leq 5$. Alle verdier $\\leq 5$.` },
    { id: '2p-7-3-ex2', type: 'example', title: 'Praktisk ulikhet', problem: 'En elev tjener 165 kr/time. Hun vil spare minst 4 000 kr. Antall timer?', solution: `$165t \\geq 4000 \\Rightarrow t \\geq 24{,}2$. Hele timer: minst 25.` },
    { id: '2p-7-3-q1', type: 'exercise', exercise: { id: '2p-7-3-q1', number: '1', type: 'multiple-choice', task: 'Løs $2x-5>9$.', options: [{ id: 'a', text: '$x>7$', isCorrect: true }, { id: 'b', text: '$x>2$', isCorrect: false }, { id: 'c', text: '$x<7$', isCorrect: false }, { id: 'd', text: '$x>14$', isCorrect: false }], solution: '$2x>14 \\Rightarrow x>7$.' } },
    { id: '2p-7-3-q2', type: 'exercise', exercise: { id: '2p-7-3-q2', number: '2', type: 'multiple-choice', task: 'Løs $-4x \\geq 20$.', options: [{ id: 'a', text: '$x \\leq -5$', isCorrect: true }, { id: 'b', text: '$x \\geq -5$', isCorrect: false }, { id: 'c', text: '$x \\leq 5$', isCorrect: false }, { id: 'd', text: '$x \\geq 5$', isCorrect: false }], solution: 'Del med $-4$, snu tegnet: $x \\leq -5$.' } },
    { id: '2p-7-3-q3', type: 'exercise', exercise: { id: '2p-7-3-q3', number: '3', type: 'classic', task: 'Løs $5(x-2)+3 < 2x+8$.', hints: ['Gang ut: $5x-10+3 < 2x+8$.'], solution: '$5x-7<2x+8 \\Rightarrow 3x<15 \\Rightarrow x<5$.' } },
    { id: '2p-7-3-q4', type: 'exercise', exercise: { id: '2p-7-3-q4', number: '4', type: 'classic', task: 'Taxi: 60 kr startgebyr + 12 kr/km. Du har 300 kr. Maks antall km?', hints: ['$60+12k \\leq 300$'], solution: '$12k \\leq 240 \\Rightarrow k \\leq 20$. Maks 20 km.' } },
    { id: '2p-7-3-q5', type: 'exercise', exercise: { id: '2p-7-3-q5', number: '5', type: 'classic', task: 'Abb. A: 199 kr/mnd + 0,50 kr/SMS. Abb. B: 349 kr/mnd, gratis SMS. Når er A billigst?', hints: ['$199+0{,}50s < 349$'], solution: '$0{,}50s < 150 \\Rightarrow s < 300$. A er billigst ved færre enn 300 SMS.' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ulikhet', definition: 'Uttrykk for at én side er større eller mindre enn den andre.' },
    { term: 'Løsningsmengde', definition: 'Alle verdier som oppfyller ulikheten.' },
    { term: 'Snu ulikhetstegnet', definition: 'Nødvendig ved ganging/deling med negativt tall.' },
  ],
};

// ============================================================================
// Kapittel 8.1: Enhetsomregning
// ============================================================================
export const CHAPTER_2P_8_1: TextbookChapter = {
  id: '2p-8-1', courseId: '2p', chapterNumber: '8.1', title: 'Enhetsomregning',
  description: 'Omregning mellom lengde-, areal-, volum- og masseenheter.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke og vurdere målinger og beregninger i praktiske sammenhenger'],
  content: [
    { id: '2p-8-1-intro', type: 'text', content: `## Enhetsomregning\n\nÅ kunne regne om mellom enheter er viktig i alt fra matlaging til bygging.\n\nDu lærer:\n- Lengdeenheter (mm, cm, m, km)\n- Arealenheter (cm², m², dekar)\n- Volumenheter (mL, dL, L, cm³, m³)` },
    { id: '2p-8-1-def1', type: 'definition', title: 'Lengde, areal og volum', content: `**Lengde:** $1\\text{ km}=1000\\text{ m}$, $1\\text{ m}=100\\text{ cm}$, $1\\text{ cm}=10\\text{ mm}$\n\n**Areal:** Faktor i andre potens: $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$. $1\\text{ dekar}=1000\\text{ m}^2$.\n\n**Volum:** Faktor i tredje potens: $1\\text{ m}^3 = 1\\,000\\,000\\text{ cm}^3$. $1\\text{ L}=1\\text{ dm}^3=1000\\text{ cm}^3$.` },
    { id: '2p-8-1-ex1', type: 'example', title: 'Arealomregning', problem: 'En hage er 450 m². Uttrykk i ar og dekar.', solution: `$1\\text{ ar}=100\\text{ m}^2$: $450/100=4{,}5$ ar. $1\\text{ dekar}=1000\\text{ m}^2$: $450/1000=0{,}45$ dekar.` },
    { id: '2p-8-1-ex2', type: 'example', title: 'Volumomregning', problem: 'En fiskekasse rommer 24 000 cm³. Hvor mange liter?', solution: `$24\\,000/1000 = 24$ L.` },
    { id: '2p-8-1-q1', type: 'exercise', exercise: { id: '2p-8-1-q1', number: '1', type: 'multiple-choice', task: 'Hvor mange cm² er $3{,}5$ m²?', options: [{ id: 'a', text: '35 000 cm²', isCorrect: true }, { id: 'b', text: '3 500 cm²', isCorrect: false }, { id: 'c', text: '350 cm²', isCorrect: false }, { id: 'd', text: '350 000 cm²', isCorrect: false }], solution: '$3{,}5 \\cdot 10\\,000 = 35\\,000$ cm².' } },
    { id: '2p-8-1-q2', type: 'exercise', exercise: { id: '2p-8-1-q2', number: '2', type: 'multiple-choice', task: 'Hvor mange liter er 5 800 cm³?', options: [{ id: 'a', text: '5,8 L', isCorrect: true }, { id: 'b', text: '58 L', isCorrect: false }, { id: 'c', text: '0,58 L', isCorrect: false }, { id: 'd', text: '580 L', isCorrect: false }], solution: '$5800/1000 = 5{,}8$ L.' } },
    { id: '2p-8-1-q3', type: 'exercise', exercise: { id: '2p-8-1-q3', number: '3', type: 'classic', task: 'Basseng: 25 m × 12,5 m × 1,8 m. Antall liter?', hints: ['$1\\text{ m}^3 = 1000$ L.'], solution: '$V = 25 \\cdot 12{,}5 \\cdot 1{,}8 = 562{,}5$ m³ $= 562\\,500$ L.' } },
    { id: '2p-8-1-q4', type: 'exercise', exercise: { id: '2p-8-1-q4', number: '4', type: 'classic', task: 'En tomt er 0,8 dekar. Uttrykk i m² og ar.', solution: '$0{,}8 \\cdot 1000 = 800$ m² $= 8$ ar.' } },
    { id: '2p-8-1-q5', type: 'exercise', exercise: { id: '2p-8-1-q5', number: '5', type: 'classic', task: 'Oppskrift: 2,5 dL fløte. Du har 300 mL. Er det nok?', hints: ['1 dL = 100 mL.'], solution: '$2{,}5$ dL $= 250$ mL. Du har 300 mL, altså nok (50 mL til overs).' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arealenhet', definition: 'Enhet for flateinnhold. Omregningsfaktor i andre potens.' },
    { term: 'Volumenhet', definition: 'Enhet for rominnhold (m³, liter).' },
    { term: 'Dekar', definition: '1 dekar = 1000 m². Vanlig norsk enhet for tomteareal.' },
    { term: 'Liter', definition: '1 L = 1 dm³ = 1000 cm³ = 1000 mL.' },
  ],
};

// ============================================================================
// Kapittel 8.2: Feilmarginer og avrunding
// ============================================================================
export const CHAPTER_2P_8_2: TextbookChapter = {
  id: '2p-8-2', courseId: '2p', chapterNumber: '8.2', title: 'Feilmarginer og avrunding',
  description: 'Gjeldende siffer, avrundingsregler og konsekvenser av måleusikkerhet.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke og vurdere målinger og beregninger i praktiske sammenhenger'],
  content: [
    { id: '2p-8-2-intro', type: 'text', content: `## Feilmarginer og avrunding\n\nIngen måling er helt nøyaktig. Å forstå usikkerhet er viktig for å vurdere påliteligheten av resultater.\n\nDu lærer:\n- Gjeldende siffer\n- Absolutt og relativ feil\n- Hvordan feil forplanter seg` },
    { id: '2p-8-2-def1', type: 'definition', title: 'Gjeldende siffer', content: `**Gjeldende siffer** er alle siffer unntatt innledende nuller.\n\n$3{,}40$ har 3 gj. siffer. $0{,}0052$ har 2 gj. siffer. Antallet angir nøyaktigheten.` },
    { id: '2p-8-2-def2', type: 'definition', title: 'Absolutt og relativ feil', content: `**Absolutt feil** = $|\\text{målt} - \\text{sann}|$\n\n**Relativ feil** = $\\frac{\\text{absolutt feil}}{\\text{sann verdi}} \\times 100\\%$\n\nMåling $12{,}4$ cm betyr sann verdi mellom $12{,}35$ og $12{,}45$ cm.` },
    { id: '2p-8-2-ex1', type: 'example', title: 'Relativ feil', problem: 'Planke målt til 2,45 m, sann lengde 2,48 m.', solution: `Absolutt: $|2{,}45-2{,}48|=0{,}03$ m. Relativ: $0{,}03/2{,}48 \\times 100\\% \\approx 1{,}2\\%$.` },
    { id: '2p-8-2-note', type: 'note', title: 'Avrundingsregel', content: 'Svaret skal ikke ha flere gjeldende siffer enn den minst nøyaktige verdien i beregningen.' },
    { id: '2p-8-2-ex2', type: 'example', title: 'Areal med gjeldende siffer', problem: 'Rektangel $4{,}2$ m × $3{,}5$ m (begge 2 gj. siffer). Areal?', solution: `$4{,}2 \\cdot 3{,}5 = 14{,}7$. Med 2 gj. siffer: $A \\approx 15$ m².` },
    { id: '2p-8-2-q1', type: 'exercise', exercise: { id: '2p-8-2-q1', number: '1', type: 'multiple-choice', task: 'Hvor mange gjeldende siffer har $0{,}00340$?', options: [{ id: 'a', text: '3', isCorrect: true }, { id: 'b', text: '5', isCorrect: false }, { id: 'c', text: '2', isCorrect: false }, { id: 'd', text: '6', isCorrect: false }], solution: 'Sifrene 3, 4 og avsluttende 0 er gjeldende. Altså 3.' } },
    { id: '2p-8-2-q2', type: 'exercise', exercise: { id: '2p-8-2-q2', number: '2', type: 'classic', task: 'Pakke veies til 1,25 kg, sann vekt 1,28 kg. Finn absolutt og relativ feil.', solution: 'Absolutt: $0{,}03$ kg. Relativ: $0{,}03/1{,}28 \\times 100\\% \\approx 2{,}3\\%$.' } },
    { id: '2p-8-2-q3', type: 'exercise', exercise: { id: '2p-8-2-q3', number: '3', type: 'multiple-choice', task: 'Sider $6{,}3$ m (2 gj.s.) og $4{,}82$ m (3 gj.s.). Areal med riktig presisjon?', options: [{ id: 'a', text: '30 m²', isCorrect: true }, { id: 'b', text: '30,37 m²', isCorrect: false }, { id: 'c', text: '30,4 m²', isCorrect: false }, { id: 'd', text: '30,366 m²', isCorrect: false }], solution: '$6{,}3 \\cdot 4{,}82=30{,}366$. Med 2 gj. siffer: $30$ m².' } },
    { id: '2p-8-2-q4', type: 'exercise', exercise: { id: '2p-8-2-q4', number: '4', type: 'classic', task: '100 m løpt på 12,3 s (±0,05 s). Finn høyeste og laveste mulige fart.', hints: ['Fart = strekning/tid. Bruk 12,25 og 12,35.'], solution: 'Høyeste: $100/12{,}25 \\approx 8{,}16$ m/s. Laveste: $100/12{,}35 \\approx 8{,}10$ m/s.' } },
    { id: '2p-8-2-q5', type: 'exercise', exercise: { id: '2p-8-2-q5', number: '5', type: 'classic', task: 'Gulv 5,0 m × 3,8 m, begge ±0,05 m. Finn minste og største mulige areal.', solution: 'Minste: $4{,}95 \\cdot 3{,}75 = 18{,}56$ m². Største: $5{,}05 \\cdot 3{,}85 = 19{,}44$ m².' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Gjeldende siffer', definition: 'Alle siffer unntatt innledende nuller. Angir nøyaktighet.' },
    { term: 'Absolutt feil', definition: 'Differansen mellom målt og sann verdi.' },
    { term: 'Relativ feil', definition: 'Absolutt feil delt på sann verdi, i prosent.' },
    { term: 'Feilmargin', definition: 'Usikkerhetsintervall rundt en måling (f.eks. ±0,05).' },
  ],
};

// ============================================================================
// Kapittel 1.5: Skatt og avgifter
// ============================================================================
export const CHAPTER_2P_1_5: TextbookChapter = {
  id: '2p-1-5', courseId: '2p', chapterNumber: '1.5', title: 'Skatt og avgifter',
  description: 'Inntektsskatt, mva og andre avgifter i det norske systemet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
    'utforske og forklare sammenhenger mellom prisindeks, kroneverdi, reallønn, nominell lønn og brutto- og nettoinntekt',
  ],
  content: [
    { id: '2p-1-5-intro', type: 'text', content: `## Skatt og avgifter\n\nSkatter og avgifter finansierer velferdsordninger. Å forstå systemet hjelper deg med å planlegge egen økonomi.\n\nDu lærer:\n- Forskjell mellom skatt og avgift\n- Trygdeavgift og trinnskatt\n- Merverdiavgift (mva)\n- Beregne skatt på inntekt` },
    { id: '2p-1-5-def1', type: 'definition', title: 'Skatt og avgift', content: `**Skatt**: obligatorisk betaling til det offentlige. **Avgift**: knyttet til en bestemt vare/tjeneste.\n\nInntektsskatt i Norge:\n- **Trygdeavgift**: 7,9 % av bruttoinntekt\n- **Trinnskatt**: progressiv, øker med inntekten\n- **Skatt på alminnelig inntekt**: 22 % etter fradrag` },
    { id: '2p-1-5-def2', type: 'definition', title: 'Merverdiavgift (mva)', content: `Mva legges til prisen: **25 %** (generell), **15 %** (mat), **12 %** (transport/hotell).\n\nMed mva: $\\text{pris} \\times (1 + \\text{sats})$. Uten mva: $\\frac{\\text{pris med mva}}{1 + \\text{sats}}$.` },
    { id: '2p-1-5-ex1', type: 'example', title: 'Mva-beregning', problem: 'TV til 8 000 kr uten mva. Pris med 25 % mva?', solution: `$8000 \\cdot 1{,}25 = 10\\,000$ kr. Mva-beløp: $2\\,000$ kr.` },
    { id: '2p-1-5-ex2', type: 'example', title: 'Finne pris uten mva', problem: 'Mathandel: 645 kr inkl. 15 % mva. Pris uten mva?', solution: `$645/1{,}15 \\approx 560{,}87$ kr.` },
    { id: '2p-1-5-q1', type: 'exercise', exercise: { id: '2p-1-5-q1', number: '1', type: 'multiple-choice', task: 'Sykkel til 6 500 kr uten mva. Pris med 25 % mva?', options: [{ id: 'a', text: '8 125 kr', isCorrect: true }, { id: 'b', text: '7 500 kr', isCorrect: false }, { id: 'c', text: '8 250 kr', isCorrect: false }, { id: 'd', text: '7 800 kr', isCorrect: false }], solution: '$6500 \\cdot 1{,}25 = 8125$ kr.' } },
    { id: '2p-1-5-q2', type: 'exercise', exercise: { id: '2p-1-5-q2', number: '2', type: 'classic', task: 'Restaurant: 1 250 kr inkl. 25 % mva. Finn pris uten mva og mva-beløpet.', solution: '$1250/1{,}25 = 1000$ kr. Mva: $250$ kr.' } },
    { id: '2p-1-5-q3', type: 'exercise', exercise: { id: '2p-1-5-q3', number: '3', type: 'multiple-choice', task: 'Matvarer for 423 kr inkl. 15 % mva. Hva er mva-beløpet?', options: [{ id: 'a', text: 'ca. 55 kr', isCorrect: true }, { id: 'b', text: 'ca. 63 kr', isCorrect: false }, { id: 'c', text: 'ca. 42 kr', isCorrect: false }, { id: 'd', text: 'ca. 85 kr', isCorrect: false }], solution: '$423/1{,}15 \\approx 367{,}83$. Mva: $423 - 367{,}83 \\approx 55$ kr.' } },
    { id: '2p-1-5-q4', type: 'exercise', exercise: { id: '2p-1-5-q4', number: '4', type: 'classic', task: 'Erik: brutto 520 000 kr/år, 7,9 % trygdeavgift, 22 % skatt etter 120 000 kr fradrag. Total skatt og netto?', hints: ['Trygdeavgift av brutto, skatt av (brutto − fradrag).'], solution: 'Trygd: $520000 \\cdot 0{,}079 = 41\\,080$. Skatt: $(520000-120000) \\cdot 0{,}22 = 88\\,000$. Totalt: $129\\,080$ kr. Netto: $390\\,920$ kr.' } },
    { id: '2p-1-5-q5', type: 'exercise', exercise: { id: '2p-1-5-q5', number: '5', type: 'classic', task: 'Bedrift kjøper varer for 200 000 kr og selger for 350 000 kr (begge uten mva, 25 %). Hvor mye mva betales til staten?', hints: ['Utgående mva − inngående mva.'], solution: 'Utgående: $350000 \\cdot 0{,}25 = 87\\,500$. Inngående: $200000 \\cdot 0{,}25 = 50\\,000$. Til staten: $37\\,500$ kr.' } },
    { id: '2p-1-5-q6', type: 'exercise', exercise: { id: '2p-1-5-q6', number: '6', type: 'multiple-choice', task: 'Hva er 25 % mva-beløpet på en vare som koster 4 000 kr uten mva?', options: [{ id: 'a', text: '1 000 kr', isCorrect: true }, { id: 'b', text: '800 kr', isCorrect: false }, { id: 'c', text: '1 250 kr', isCorrect: false }, { id: 'd', text: '750 kr', isCorrect: false }], solution: '$4000 \\cdot 0{,}25 = 1000$ kr.' } },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Skatt', definition: 'Obligatorisk betaling til det offentlige uten direkte motytelse.' },
    { term: 'Merverdiavgift (mva)', definition: 'Avgift på varer/tjenester: 25 % generell, 15 % mat, 12 % transport.' },
    { term: 'Trygdeavgift', definition: '7,9 % av bruttoinntekt til folketrygden.' },
    { term: 'Fradrag', definition: 'Beløp trukket fra inntekten før skatt beregnes.' },
    { term: 'Utgående mva', definition: 'Mva bedriften krever inn ved salg.' },
  ],
};

// ============================================================================
// Samlet eksport
// ============================================================================
export const MATEMATIKK_2P_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_7_1, CHAPTER_2P_7_2, CHAPTER_2P_7_3, CHAPTER_2P_8_1, CHAPTER_2P_8_2, CHAPTER_2P_1_5,
];
