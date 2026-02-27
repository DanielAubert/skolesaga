/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 9
 * Kapittel 9.1–9.3: Eksponentialfunksjoner og modellering
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1 NARRATIV: Eksponentiell vekst og nedgang
// ============================================================================

export const CHAPTER_10_9_1_NARRATIV: TextbookChapter = {
  id: '10-9-1-narrativ',
  courseId: '10',
  chapterNumber: '9.1',
  title: 'Eksponentiell vekst og nedgang',
  subtitle: 'Narrativ versjon',
  description: 'Ei forteljing om korleis ting veks raskare enn du trur -- frå bakteriar til bankkonto, og kvifor det aldri lønner seg å undervurdere ein eksponent.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske samanhengen mellom konstant prosentvis endring, vekstfaktor og eksponentialfunksjonar',
  ],
  linkedChapterId: '10-9-1',
  content: [
    {
      id: '10-9-1-n-intro',
      type: 'text',
      content: `## Når veksten sjølv veks

Tenk deg at du legg 1 000 kroner i banken med 5 prosent rente kvart år. Etter eitt år har du 1 050 kroner. Så langt er det lett. Men etter to år har du ikkje 1 100 kroner, slik du kanskje ville tru. Du har 1 102 kroner og 50 øre. Kvifor? Fordi renta det andre året ikkje berre gjeld dei opphavlege 1 000 kronene, men dei 1 050 kronene du no har. Du får rente av renta.

Denne tilsynelatande vesle forskjellen -- to kroner og femti øre ekstra -- kan verke ubetydeleg. Men gje det tid, og effekten blir dramatisk. Over 50 år gjer rentes rente at dei 1 000 kronene dine veks til over 11 400 kroner, medan dei berre hadde blitt til 3 500 kroner med vanleg tillegg på 50 kroner kvart år.

Velkommen til eksponentiell vekst. I dette kapittelet skal du lære kva som skjer når noko endrar seg med same prosentdel kvar periode -- anten det er snakk om pengar i banken, bakteriar i ein petriskål, eller radioaktivt stoff som sakte forsvinn.`,
    },
    {
      id: '10-9-1-n-section1',
      type: 'text',
      content: `## Vekstfaktoren -- det magiske talet

Kjernen i eksponentiell endring er noko vi kallar **vekstfaktoren**. Det er det talet du gongar med for å finne den nye verdien etter éi endring.

Viss noko aukar med $p$ prosent, finn du vekstfaktoren slik:

$$b = 1 + \\frac{p}{100}$$

Viss noko minkar med $p$ prosent, blir formelen i staden:

$$b = 1 - \\frac{p}{100}$$

La oss sjå på nokre døme. Ein sparekonto med 8 prosent rente gir vekstfaktor $b = 1 + 0{,}08 = 1{,}08$. Ein bil som tapar 15 prosent av verdien kvart år, har vekstfaktor $b = 1 - 0{,}15 = 0{,}85$. Ein by som veks med 2,5 prosent årleg, har vekstfaktor $b = 1{,}025$.

Legg merke til mønsteret: Når vekstfaktoren er over 1, har vi vekst. Når han er mellom 0 og 1, har vi nedgang. Akkurat 1 ville bety ingen endring i det heile.

Tenk deg ein norsk by med 12 000 innbyggjarar der folketalet aukar med 3 prosent kvart år. Vekstfaktoren er $b = 1{,}03$. Etter eitt år har byen $12\\,000 \\cdot 1{,}03 = 12\\,360$ innbyggjarar. Etter to år: $12\\,360 \\cdot 1{,}03 = 12\\,731$. Etter tre år: $12\\,731 \\cdot 1{,}03 \\approx 13\\,113$. Men vi kan også skrive dette meir elegant: etter tre år har byen $12\\,000 \\cdot 1{,}03^3 \\approx 13\\,113$ innbyggjarar. Eksponenten fortel oss kor mange periodar som har gått.`,
    },
    {
      id: '10-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg sjølv på vekstfaktor:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-1-n-quiz1-q0',
            task: 'Kva er vekstfaktoren når noko aukar med 6 prosent?',
            options: [
              { id: 'a', text: '$0{,}94$', isCorrect: false },
              { id: 'b', text: '$1{,}6$', isCorrect: false },
              { id: 'c', text: '$1{,}06$', isCorrect: true },
              { id: 'd', text: '$0{,}06$', isCorrect: false },
            ],
            solution: 'Vekstfaktor ved 6 % auke: $b = 1 + 0{,}06 = 1{,}06$.',
          },
          {
            id: '10-9-1-n-quiz1-q1',
            task: 'Ein bil kostar 350 000 kr ny og fell 15 % i verdi kvart år. Kva er bilen verd etter 2 år?',
            options: [
              { id: 'a', text: '297 500 kr', isCorrect: false },
              { id: 'b', text: '252 875 kr', isCorrect: true },
              { id: 'c', text: '245 000 kr', isCorrect: false },
              { id: 'd', text: '280 000 kr', isCorrect: false },
            ],
            solution: 'Vekstfaktor: $b = 0{,}85$. Etter 2 år: $350\\,000 \\cdot 0{,}85^2 = 252\\,875$ kr.',
          },
          {
            id: '10-9-1-n-quiz1-q2',
            task: 'Ein vekstfaktor på $0{,}88$ svarar til ein nedgang på kor mange prosent?',
            options: [
              { id: 'a', text: '88 %', isCorrect: false },
              { id: 'b', text: '8,8 %', isCorrect: false },
              { id: 'c', text: '22 %', isCorrect: false },
              { id: 'd', text: '12 %', isCorrect: true },
            ],
            solution: 'Nedgang: $1 - 0{,}88 = 0{,}12$, altså 12 % nedgang per periode.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-1-n-section2',
      type: 'text',
      content: `## Eksponentialfunksjonen -- formelen bak det heile

No kan vi setje alt saman i éin formel. Når ein storleik startar på ein verdi $a$ og endrar seg med same prosentdel kvar periode, kan vi beskrive utviklinga med ein **eksponentialfunksjon**:

$$f(x) = a \\cdot b^x$$

Her er $a$ startverdien -- det vi har når $x = 0$. Og $b$ er vekstfaktoren vi nettopp lærte om. Variabelen $x$ er ofte tid, til dømes talet på år, timar eller dagar.

Denne formelen er overraskande kraftig. La oss sjå på nokre heilt ulike situasjonar der ho dukkar opp.

**Bakteriar som doblar seg:** Ein bakteriekultur startar med 500 bakteriar, og talet doblar seg kvar time. Dobling er 100 prosent auke, altså $b = 2$. Funksjonen blir $f(x) = 500 \\cdot 2^x$. Etter 6 timar er det $500 \\cdot 2^6 = 500 \\cdot 64 = 32\\,000$ bakteriar.

**Pengar i banken:** Du set 10 000 kroner i banken med 4 prosent årleg rente. Funksjonen blir $f(x) = 10\\,000 \\cdot 1{,}04^x$. Etter 10 år: $f(10) = 10\\,000 \\cdot 1{,}04^{10} \\approx 14\\,802$ kroner. Du har tent 4 802 kroner i renter -- heile 802 kroner meir enn du ville fått med enkel rente (som berre gir $10\\,000 \\cdot 0{,}04 \\cdot 10 = 4\\,000$ kroner).

**Radioaktivt forfall:** Jod-131, eit radioaktivt stoff som blir brukt i medisinsk behandling, har ei halveringstid på 8 dagar. Det tyder at halvparten av stoffet bryt ned kvar 8. dag. Startar du med 200 mg, har du $200 \\cdot 0{,}5 = 100$ mg etter 8 dagar, $50$ mg etter 16 dagar, og berre $12{,}5$ mg etter 32 dagar. Funksjonen er $f(x) = 200 \\cdot 0{,}5^x$, der $x$ er talet på halveringsperiodar.`,
    },
    {
      id: '10-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg sjølv på eksponentialfunksjonen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-1-n-quiz2-q0',
            task: 'Du set 10 000 kr i banken med 4 % årleg rente (rentes rente). Kva funksjon beskriv beløpet etter $x$ år?',
            options: [
              { id: 'a', text: '$f(x) = 10\\,000 + 400x$', isCorrect: false },
              { id: 'b', text: '$f(x) = 10\\,000 \\cdot 1{,}04^x$', isCorrect: true },
              { id: 'c', text: '$f(x) = 10\\,000 \\cdot 0{,}96^x$', isCorrect: false },
              { id: 'd', text: '$f(x) = 10\\,000 \\cdot 4^x$', isCorrect: false },
            ],
            solution: 'Startverdi $a = 10\\,000$ og vekstfaktor $b = 1{,}04$ gir $f(x) = 10\\,000 \\cdot 1{,}04^x$.',
          },
          {
            id: '10-9-1-n-quiz2-q1',
            task: 'I funksjonen $f(x) = a \\cdot b^x$, kva fortel $a$ oss?',
            options: [
              { id: 'a', text: 'Den prosentvise endringa per periode', isCorrect: false },
              { id: 'b', text: 'Talet på periodar', isCorrect: false },
              { id: 'c', text: 'Vekstfaktoren', isCorrect: false },
              { id: 'd', text: 'Startverdien -- verdien når $x = 0$', isCorrect: true },
            ],
            solution: '$a = f(0) = a \\cdot b^0 = a$. Startverdien er funksjonsverdien når $x = 0$.',
          },
          {
            id: '10-9-1-n-quiz2-q2',
            task: 'Radioaktivt jod-131 startar på 200 mg og har halveringstid 8 dagar. Kor mykje er att etter 24 dagar (3 halveringsperiodar)?',
            options: [
              { id: 'a', text: '50 mg', isCorrect: false },
              { id: 'b', text: '100 mg', isCorrect: false },
              { id: 'c', text: '25 mg', isCorrect: true },
              { id: 'd', text: '12,5 mg', isCorrect: false },
            ],
            solution: 'Etter 3 halveringsperiodar: $200 \\cdot 0{,}5^3 = 200 \\cdot 0{,}125 = 25$ mg.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-1-n-section3',
      type: 'text',
      content: `## Detektivarbeid -- finne $a$ og $b$ frå opplysningar

Ofte kjenner du ikkje formelen på førehand, men du har nokre opplysningar om situasjonen. Då må du sjølv finne $a$ og $b$ -- litt som ein matematisk detektiv.

**Finne $a$:** Viss du veit startverdien (verdien ved $x = 0$), har du $a$ direkte.

**Finne $b$:** Viss du har to datapunkt, til dømes $f(x_1) = y_1$ og $f(x_2) = y_2$, kan du finne $b$ ved å dele:

$$\\frac{y_2}{y_1} = b^{x_2 - x_1}$$

La oss seie at ein forskar måler 1 800 bakteriar etter 2 timar og 14 400 etter 5 timar. Då er $b^3 = 14\\,400 / 1\\,800 = 8$, altså $b = \\sqrt[3]{8} = 2$. Bakteriane doblar seg kvar time! For å finne $a$ brukar vi $f(2) = a \\cdot 2^2 = 4a = 1\\,800$, som gir $a = 450$. Funksjonen er $f(x) = 450 \\cdot 2^x$.

Eit anna døme: Ein investering var verd 50 000 kr ved start og 72 800 kr etter 4 år. Då er $b^4 = 72\\,800 / 50\\,000 = 1{,}456$, og $b = \\sqrt[4]{1{,}456} \\approx 1{,}098$. Det svarar til ein årleg auke på $(1{,}098 - 1) \\cdot 100 \\approx 9{,}8$ prosent. Etter 10 år ville investeringa vore verd $50\\,000 \\cdot 1{,}098^{10} \\approx 127\\,550$ kroner.

Det fine med eksponentialfunksjonen er at det same mønsteret dukkar opp overalt -- same om du studerer folketal i Tromsø (77 000 innbyggjarar med 1,2 % vekst per år gir $f(x) = 77\\,000 \\cdot 1{,}012^x$), verdifallet på ein mobiltelefon, eller veksten av ein sparekonto. Verktøyet er det same.`,
    },
    {
      id: '10-9-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-9-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg sjølv på å finne eksponentialfunksjonen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-1-n-quiz3-q0',
            task: 'Ein forskar måler 1 800 bakteriar etter 2 timar og 14 400 etter 5 timar. Kva er vekstfaktoren $b$?',
            options: [
              { id: 'a', text: '$b = 8$', isCorrect: false },
              { id: 'b', text: '$b = 2$', isCorrect: true },
              { id: 'c', text: '$b = 3$', isCorrect: false },
              { id: 'd', text: '$b = 4$', isCorrect: false },
            ],
            solution: '$b^3 = 14\\,400 / 1\\,800 = 8$, altså $b = \\sqrt[3]{8} = 2$.',
          },
          {
            id: '10-9-1-n-quiz3-q1',
            task: 'Kvifor vil eksponentiell vekst alltid slå lineær vekst over lang nok tid?',
            options: [
              { id: 'a', text: 'Fordi eksponentiell vekst startar med eit høgare beløp', isCorrect: false },
              { id: 'b', text: 'Fordi eksponentiell vekst aukar sjølve auken over tid, medan lineær vekst legg til same beløp kvar gong', isCorrect: true },
              { id: 'c', text: 'Fordi lineær vekst stoppar etter ei tid', isCorrect: false },
              { id: 'd', text: 'Fordi eksponentiell vekst berre finst i matematikken, ikkje i verkelegheita', isCorrect: false },
            ],
            solution: 'Med lineær vekst aukar beløpet med eit fast kronebeløp kvart år. Med eksponentiell vekst aukar beløpet med ein fast prosent, som betyr at sjølve auken veks over tid.',
          },
          {
            id: '10-9-1-n-quiz3-q2',
            task: 'Folketalet i Tromsø var ca. 77 000 i 2020 med 1,2 % vekst per år. Kva folketal gir modellen $f(x) = 77\\,000 \\cdot 1{,}012^x$ i 2030?',
            options: [
              { id: 'a', text: 'Ca. 86 200', isCorrect: false },
              { id: 'b', text: 'Ca. 86 763', isCorrect: true },
              { id: 'c', text: 'Ca. 90 000', isCorrect: false },
              { id: 'd', text: 'Ca. 84 500', isCorrect: false },
            ],
            solution: '$f(10) = 77\\,000 \\cdot 1{,}012^{10} \\approx 77\\,000 \\cdot 1{,}1268 \\approx 86\\,763$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at eksponentiell endring oppstår når ein storleik endrar seg med same prosentdel kvar periode. Vekstfaktoren $b$ er nøkkelen: $b = 1 + p/100$ for vekst, $b = 1 - p/100$ for nedgang. Når $b > 1$ har vi eksponentiell vekst, og når $0 < b < 1$ har vi eksponentiell nedgang.

Eksponentialfunksjonen $f(x) = a \\cdot b^x$ beskriv denne utviklinga, der $a$ er startverdien og $x$ vanlegvis er tid. Vi kan finne $a$ og $b$ frå opplysningar -- anten direkte frå prosentvis endring, eller ved å bruke to datapunkt og ta røter.

Det viktigaste å hugse er forskjellen mellom lineær og eksponentiell vekst: lineær vekst legg til same beløp kvar gong, medan eksponentiell vekst aukar sjølve auken. Over tid vinn eksponentiell vekst alltid.`,
    },
  ],
  exercises: [],
};


// ============================================================================
// Kapittel 9.2 NARRATIV: Eksponentialfunksjonar og grafar
// ============================================================================

export const CHAPTER_10_9_2_NARRATIV: TextbookChapter = {
  id: '10-9-2-narrativ',
  courseId: '10',
  chapterNumber: '9.2',
  title: 'Eksponentialfunksjonar og grafar',
  subtitle: 'Narrativ versjon',
  description: 'Ei forteljing om korleis eksponentialkurva ser ut, kvifor ho aldri når null, og kva som skjer når du samanliknar ho med ei rett linje.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og samanlikne eigenskapar ved ulike funksjonar ved å bruke digitale verktøy',
  ],
  linkedChapterId: '10-9-2',
  content: [
    {
      id: '10-9-2-n-intro',
      type: 'text',
      content: `## Korleis ser eksponentiell vekst ut?

I førre kapittel lærte du formelen $f(x) = a \\cdot b^x$ og korleis du reknar med eksponentialfunksjonar. Men tal i ein tabell fortel berre ein del av historia. For verkeleg å forstå korleis eksponentiell endring oppfører seg, må vi sjå på grafane.

I dette kapittelet skal vi teikne eksponentialfunksjonar, samanlikne dei med lineære funksjonar, og oppdage noko fascinerande: ei linje som grafen nærmar seg, men aldri heilt når. Vi kallar ho ein asymptote, og ho er nøkkelen til å forstå kvifor kaffien din aldri blir kaldare enn rommet den står i.`,
    },
    {
      id: '10-9-2-n-section1',
      type: 'text',
      content: `## Frå verditabell til kurve

For å teikne grafen til ein eksponentialfunksjon lagar vi fyrst ein verditabell. La oss ta $f(x) = 3 \\cdot 2^x$ og rekne ut for $x$-verdiar frå $-2$ til $4$:

Når $x = -2$, er $f(-2) = 3 \\cdot 2^{-2} = 3 \\cdot 0{,}25 = 0{,}75$. Når $x = 0$, er $f(0) = 3 \\cdot 1 = 3$. Og når $x = 4$, er $f(4) = 3 \\cdot 16 = 48$.

Legg merke til mønsteret: for negative $x$-verdiar ligg grafen nær $x$-aksen. Ho går gjennom punktet $(0, 3)$ -- det er startverdien $a$. Og for positive $x$-verdiar stig ho brattare og brattare. Kvar gong $x$ aukar med 1, blir funksjonsverdien dobla, fordi $b = 2$.

No kan vi teikne den motsette situasjonen: $f(x) = 100 \\cdot 0{,}5^x$. Her er $f(0) = 100$, $f(1) = 50$, $f(2) = 25$, $f(3) = 12{,}5$, $f(4) = 6{,}25$, $f(5) = 3{,}125$. Denne grafen startar høgt og fell raskt, men ho flatar meir og meir ut. Verdien halverast kvar gong, men nærmar seg berre $x$-aksen -- ho kjem aldri heilt ned til null.

Dette gjev oss nokre viktige eigenskapar: grafen til ein eksponentialfunksjon går alltid gjennom $(0, a)$, og ho kryssar aldri $x$-aksen (så lenge $a > 0$). For vekst ($b > 1$) stig kurva brattare og brattare mot høgre. For nedgang ($0 < b < 1$) fell kurva og flatar ut mot høgre.`,
    },
    {
      id: '10-9-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-9-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg sjølv på grafar:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-2-n-quiz1-q0',
            task: 'Kva punkt går grafen til $f(x) = 5 \\cdot 1{,}5^x$ gjennom når $x = 0$?',
            options: [
              { id: 'a', text: '$(0, 1{,}5)$', isCorrect: false },
              { id: 'b', text: '$(0, 5)$', isCorrect: true },
              { id: 'c', text: '$(5, 0)$', isCorrect: false },
              { id: 'd', text: '$(0, 7{,}5)$', isCorrect: false },
            ],
            solution: '$f(0) = 5 \\cdot 1{,}5^0 = 5 \\cdot 1 = 5$. Grafen går gjennom $(0, 5)$.',
          },
          {
            id: '10-9-2-n-quiz1-q1',
            task: 'Kva skjer med funksjonsverdien til $f(x) = 100 \\cdot 0{,}5^x$ når $x$ aukar med 1?',
            options: [
              { id: 'a', text: 'Ho aukar med 50', isCorrect: false },
              { id: 'b', text: 'Ho minkar med 50', isCorrect: false },
              { id: 'c', text: 'Ho blir halvert', isCorrect: true },
              { id: 'd', text: 'Ho blir dobla', isCorrect: false },
            ],
            solution: 'Kvar gong $x$ aukar med 1, gongar vi med $b = 0{,}5$, altså halverast verdien.',
          },
          {
            id: '10-9-2-n-quiz1-q2',
            task: 'Kva kjenneteiknar grafen til ein eksponentialfunksjon med $b > 1$?',
            options: [
              { id: 'a', text: 'Ho er ei rett linje som stig jamnt', isCorrect: false },
              { id: 'b', text: 'Ho stig brattare og brattare mot høgre', isCorrect: true },
              { id: 'c', text: 'Ho fell og nærmar seg $x$-aksen', isCorrect: false },
              { id: 'd', text: 'Ho er ein parabel som opnar seg oppover', isCorrect: false },
            ],
            solution: 'Når $b > 1$ viser funksjonen vekst. Grafen stig, og fordi veksten er prosentvis, blir ho brattare og brattare.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-2-n-section2',
      type: 'text',
      content: `## Asymptoten -- linja du aldri når

No kjem vi til eit av dei mest fascinerande trekka ved eksponentialfunksjonar. Tenk deg ein kopp kaffi som er 90 grader varm i eit rom som held 20 grader. Kaffien kjøler seg ned, men han kan aldri bli kaldare enn romtemperaturen. Same kor lenge du ventar, vil kaffien nærme seg 20 grader utan nokon gong å nå heilt dit.

Matematisk beskriv vi dette med ein **horisontal asymptote** -- ei vasskrett linje som grafen nærmar seg, men aldri når eller kryssar.

For den enklaste eksponentialfunksjonen $f(x) = a \\cdot b^x$ er asymptoten $x$-aksen, altså linja $y = 0$. Funksjonsverdien kan bli vilkårleg nær null, men aldri lik null.

Men kaffidømet krev noko meir. Avkjølinga kan modellerast med $T(x) = 70 \\cdot 0{,}85^x + 20$, der $x$ er tid i minutt. Her er asymptoten $y = 20$ -- romtemperaturen. Ved start er $T(0) = 70 + 20 = 90$ grader. Etter 5 minutt er $T(5) \\approx 70 \\cdot 0{,}444 + 20 \\approx 51{,}1$ grader. Etter 20 minutt: $T(20) \\approx 70 \\cdot 0{,}039 + 20 \\approx 22{,}7$ grader. Temperaturen nærmar seg 20, men kjem aldri heilt dit.

Generelt: Når vi legg til ein konstant $c$ og skriv $f(x) = a \\cdot b^x + c$, blir asymptoten flytta frå $y = 0$ til $y = c$. Konstanten $c$ representerer ofte ein naturleg nedre eller øvre grense -- som romtemperatur, eit minstenivå, eller ein likevektstilstand.`,
    },
    {
      id: '10-9-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-9-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg sjølv på asymptote:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-2-n-quiz2-q0',
            task: 'Kva er den horisontale asymptoten til $h(x) = 50 \\cdot 0{,}9^x + 15$?',
            options: [
              { id: 'a', text: '$y = 0$', isCorrect: false },
              { id: 'b', text: '$y = 50$', isCorrect: false },
              { id: 'c', text: '$y = 15$', isCorrect: true },
              { id: 'd', text: '$y = 65$', isCorrect: false },
            ],
            solution: 'Når $x \\to \\infty$, går $50 \\cdot 0{,}9^x \\to 0$, og $h(x) \\to 15$. Asymptoten er $y = 15$.',
          },
          {
            id: '10-9-2-n-quiz2-q1',
            task: 'Ei gryte med vatn er 95 grader. Modellen er $T(x) = 73 \\cdot 0{,}92^x + 22$. Kva betyr asymptoten $y = 22$ reelt?',
            options: [
              { id: 'a', text: 'Vatnet kokar ved 22 grader', isCorrect: false },
              { id: 'b', text: 'Vatnet når 22 grader etter 22 minutt', isCorrect: false },
              { id: 'c', text: 'Vatnet kjem aldri under romtemperaturen (22 grader)', isCorrect: true },
              { id: 'd', text: 'Vatnet har falle 22 grader', isCorrect: false },
            ],
            solution: 'Asymptoten $y = 22$ betyr at temperaturen nærmar seg 22 grader (romtemperaturen), men aldri kjem under den.',
          },
          {
            id: '10-9-2-n-quiz2-q2',
            task: 'Funksjonen $f(x) = 5 \\cdot 1{,}5^x$ har asymptote $y = 0$. For kva $x$-verdiar nærmar grafen seg asymptoten?',
            options: [
              { id: 'a', text: 'For store positive $x$-verdiar', isCorrect: false },
              { id: 'b', text: 'For store negative $x$-verdiar', isCorrect: true },
              { id: 'c', text: 'For $x = 0$', isCorrect: false },
              { id: 'd', text: 'Grafen når aldri nær asymptoten', isCorrect: false },
            ],
            solution: 'Sidan $b = 1{,}5 > 1$, veks funksjonen mot høgre. Mot venstre (store negative $x$) nærmar grafen seg $y = 0$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-2-n-section3',
      type: 'text',
      content: `## Eksponentiell mot lineær -- eit kappløp

La oss samanlikne to kommunar som begge har 5 000 innbyggjarar i dag. Kommune A veks med 80 personar kvart år -- det er lineær vekst med funksjonen $f(x) = 80x + 5\\,000$. Kommune B veks med 1,5 prosent per år -- eksponentiell vekst med $g(x) = 5\\,000 \\cdot 1{,}015^x$.

I starten ser det ut som A vinn. Etter 5 år har A 5 400 innbyggjarar, medan B berre har 5 386. Men so snur det. Etter 10 år har A 5 800 og B 5 804. Etter 20 år: A har 6 600, B har 6 739. Etter 30 år: A har 7 400, B har 7 828.

Forskjellen mellom linjene på grafen berre aukar og aukar. Kvifor? Fordi den lineære funksjonen legg til det same beløpet kvar gong -- 80 personar, same om byen har 5 000 eller 50 000 innbyggjarar. Den eksponentielle funksjonen legg til same prosent, men 1,5 prosent av 7 000 er meir enn 1,5 prosent av 5 000.

Det same mønsteret ser vi i sparing. Anna legg 20 000 kroner i banken med 800 kroner i fast rente kvart år. Bjørn legg 20 000 kroner til 3,5 prosent rentes rente. Etter 5 år leier Anna med 24 000 mot Bjørns 23 754. Men etter 20 år har Bjørn 39 796 kroner medan Anna har 36 000. Eksponentiell vekst vinn alltid til slutt -- spørsmålet er berre når.

**Korleis endringar i $a$, $b$ og $c$ påverkar grafen:** Større $a$ betyr at grafen startar høgare. Større $b$ (nær 1 vs. langt frå 1) styrer kor bratt kurva er. Og konstanten $c$ i $f(x) = a \\cdot b^x + c$ flyttar heile grafen opp eller ned, og endrar asymptoten.`,
    },
    {
      id: '10-9-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-9-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg sjølv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-2-n-quiz3-q0',
            task: 'Kva er hovudforskjellen mellom lineær og eksponentiell vekst?',
            options: [
              { id: 'a', text: 'Lineær vekst er raskare', isCorrect: false },
              { id: 'b', text: 'Lineær vekst har konstant beløpsendring, eksponentiell har konstant prosentendring', isCorrect: true },
              { id: 'c', text: 'Eksponentiell vekst gir ei rett linje', isCorrect: false },
              { id: 'd', text: 'Det er ingen reell forskjell over tid', isCorrect: false },
            ],
            solution: 'Lineær vekst legg til same beløp per periode (rett linje). Eksponentiell vekst endrar seg med same prosent per periode (kurve).',
          },
          {
            id: '10-9-2-n-quiz3-q1',
            task: 'Grafen til $f(x) = a \\cdot b^x + c$ har asymptote $y = 2$ og startar i $(0, 12)$. Kva er $a$ og $c$?',
            options: [
              { id: 'a', text: '$a = 12$ og $c = 2$', isCorrect: false },
              { id: 'b', text: '$a = 10$ og $c = 2$', isCorrect: true },
              { id: 'c', text: '$a = 2$ og $c = 10$', isCorrect: false },
              { id: 'd', text: '$a = 14$ og $c = -2$', isCorrect: false },
            ],
            solution: 'Asymptoten er $y = c = 2$. $f(0) = a + c = a + 2 = 12$, altså $a = 10$.',
          },
          {
            id: '10-9-2-n-quiz3-q2',
            task: 'Kva skjer med grafen til $f(x) = a \\cdot b^x$ når $b$ nærmar seg 1?',
            options: [
              { id: 'a', text: 'Grafen blir brattare', isCorrect: false },
              { id: 'b', text: 'Grafen blir nesten flat -- sakte endring', isCorrect: true },
              { id: 'c', text: 'Grafen kryssar $x$-aksen', isCorrect: false },
              { id: 'd', text: 'Grafen snur frå vekst til nedgang', isCorrect: false },
            ],
            solution: 'Når $b$ er nær 1, er den prosentvise endringa svært liten. Grafen blir nesten flat.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Grafar til eksponentialfunksjonar har tydelege kjenneteikn. For vekst ($b > 1$) stig kurva brattare og brattare. For nedgang ($0 < b < 1$) fell kurva og flatar ut. Begge typane har ein horisontal asymptote -- ei linje grafen nærmar seg men aldri når. For $f(x) = a \\cdot b^x$ er asymptoten $y = 0$, og for $f(x) = a \\cdot b^x + c$ er asymptoten $y = c$.

Samanlikna med lineære funksjonar skil eksponentialfunksjonar seg ut ved at endringa er prosentvis, ikkje absolutt. Det gjev ei kurve i staden for ei rett linje, og over lang nok tid vil eksponentiell vekst alltid overgå lineær vekst. Parametrane $a$, $b$ og $c$ styrer grafen: $a$ bestemmer startverdien, $b$ bestemmer kor rask endringa er, og $c$ flyttar asymptoten.`,
    },
  ],
  exercises: [],
};


// ============================================================================
// Kapittel 9.3 NARRATIV: Modellering med reelle datasett
// ============================================================================

export const CHAPTER_10_9_3_NARRATIV: TextbookChapter = {
  id: '10-9-3-narrativ',
  courseId: '10',
  chapterNumber: '9.3',
  title: 'Modellering med reelle datasett',
  subtitle: 'Narrativ versjon',
  description: 'Ei forteljing om korleis du brukar matematikk til å forstå verkelege situasjonar -- frå batterinedgang til solcelleprisar og folketal.',
  estimatedMinutes: 40,
  competenceGoals: [
    'modellere situasjonar knytte til reelle datasett, presentere resultata og argumentere for at modellane er gyldige',
  ],
  linkedChapterId: '10-9-3',
  content: [
    {
      id: '10-9-3-n-intro',
      type: 'text',
      content: `## Frå tal til forståing

Matematisk modellering er kunsten å bruke matematikk til å forstå verkelege situasjonar. Du har sikkert lagt merke til at mobilbatteriet ditt tappar seg raskare i starten enn mot slutten, eller at prisar på ny teknologi fell dramatisk dei første åra. Bak desse mønstra ligg det matematiske funksjonar som vi kan oppdage, beskrive og bruke.

I dette kapittelet skal du lære heile prosessen: samle inn data, velge rett modell, tilpasse parametrane, sjekke om modellen stemmer, og -- like viktig -- vurdere kvar modellen sviktar. For ingen modell er perfekt. Han er ei forenkling av verkelegheita, og det avgjerande er å forstå kva han kan fortelje oss og kva han ikkje kan.`,
    },
    {
      id: '10-9-3-n-section1',
      type: 'text',
      content: `## Lineær eller eksponentiell? Slik vel du

Det første spørsmålet du alltid må stille deg er: Er endringa omtrent lik i **kroner eller einingar** frå periode til periode, eller er ho omtrent lik i **prosent**?

Viss ein taxi kostar 50 kroner i startpris pluss 15 kroner per kilometer, er det ein lineær samanheng -- prisen aukar med eit fast beløp for kvar kilometer. Viss ein sparekonto veks med 2,5 prosent kvart år, er det eksponentiell -- auken er prosentvis.

La oss sjå på to konkrete datasett. Ei nettavis har 200 abonnentar ved start, og talet veks til 260, 338, 439, 571 og 742 dei neste fem månadene. Sjekkar vi prosentvis auke: $(260-200)/200 = 30$ prosent, $(338-260)/260 = 30$ prosent, heile vegen omtrent 30 prosent. Konstant prosentauke! Her passar ein eksponentiell modell: $f(x) = 200 \\cdot 1{,}30^x$.

Ei anna undersøking viser vatnstanden i ein dam: 48, 40, 33, 25, 18, 10 cm over normalt nivå. Absolutt endring: $-8$, $-7$, $-8$, $-7$, $-8$. Endringa er omtrent like mange centimeter kvar dag. Her passar ein lineær modell: $g(x) = 48 - 7{,}6x$.

Modelleringsprosessen har sju steg: (1) samle inn data, (2) visualisere datapunkta, (3) velje modell basert på mønsteret, (4) tilpasse parametrane $a$ og $b$, (5) vurdere kor godt modellen passar, (6) bruke modellen til prognosar, og (7) presentere resultata tydeleg.`,
    },
    {
      id: '10-9-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-9-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg sjølv på modellval:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-3-n-quiz1-q0',
            task: 'Ein sparekonto med 2,5 % årleg rente -- lineær eller eksponentiell modell?',
            options: [
              { id: 'a', text: 'Lineær modell', isCorrect: false },
              { id: 'b', text: 'Eksponentiell modell', isCorrect: true },
              { id: 'c', text: 'Ingen av delane', isCorrect: false },
              { id: 'd', text: 'Begge passar like godt', isCorrect: false },
            ],
            solution: 'Auken er prosentvis (2,5 % av noverande saldo kvart år), altså eksponentiell.',
          },
          {
            id: '10-9-3-n-quiz1-q1',
            task: 'Ein svømmeklubb får 12 nye medlemmar kvar månad. Kva type modell passar?',
            options: [
              { id: 'a', text: 'Eksponentiell modell', isCorrect: false },
              { id: 'b', text: 'Ingen modell passar', isCorrect: false },
              { id: 'c', text: 'Lineær modell', isCorrect: true },
              { id: 'd', text: 'Kvadratisk modell', isCorrect: false },
            ],
            solution: 'Auken er eit fast tal (12 personar) per månad, altså lineær.',
          },
          {
            id: '10-9-3-n-quiz1-q2',
            task: 'Korleis kan du sjå forskjellen mellom lineær og eksponentiell vekst i eit datasett?',
            options: [
              { id: 'a', text: 'Lineær: absolutt endring er konstant. Eksponentiell: prosentvis endring er konstant.', isCorrect: true },
              { id: 'b', text: 'Lineær: prosentvis endring er konstant. Eksponentiell: absolutt endring er konstant.', isCorrect: false },
              { id: 'c', text: 'Ein kan ikkje sjå forskjellen utan digitale verktøy', isCorrect: false },
              { id: 'd', text: 'Lineær vekst gjev alltid høgare verdiar enn eksponentiell', isCorrect: false },
            ],
            solution: 'For lineær vekst er den absolutte endringa (i tal/kroner) omtrent lik frå periode til periode. For eksponentiell vekst er den prosentvise endringa omtrent lik.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-3-n-section2',
      type: 'text',
      content: `## Tilpasse modellen -- frå data til formel

Når du har bestemt at ein eksponentiell modell passar, treng du dei rette verdiane av $a$ og $b$.

La oss sjå på eit praktisk døme: Du måler batterinivået på mobilen kvar time og får 100, 88, 78, 69, 60, 53 og 47 prosent. Fyrst sjekkar vi forholdstalet mellom kvar måling: $88/100 = 0{,}88$, $78/88 \\approx 0{,}886$, $69/78 \\approx 0{,}885$, $60/69 \\approx 0{,}870$, $53/60 \\approx 0{,}883$, $47/53 \\approx 0{,}887$. Forholdstalet ligg stabilt rundt $0{,}88$ -- eksponentiell modell passar!

Startverdien er $a = 100$ (fullt batteri). Gjennomsnittleg vekstfaktor er $b \\approx 0{,}882$. Modellen blir $f(x) = 100 \\cdot 0{,}882^x$. Vi sjekkar: $f(3) = 100 \\cdot 0{,}882^3 \\approx 68{,}6$ (faktisk: 69), og $f(6) \\approx 47{,}1$ (faktisk: 47). Modellen treff godt!

Somme gonger må vi ta omsyn til ein asymptote. Når du lagar te med starttemperatur 85 grader i eit rom på 21 grader, kan ikkje teen bli kaldare enn 21 grader. Difor brukar vi $T(x) = a \\cdot b^x + 21$. Sidan $T(0) = a + 21 = 85$, er $a = 64$. Viss $T(5) = 68$, har vi $64 \\cdot b^5 = 47$, altså $b^5 = 47/64 \\approx 0{,}734$ og $b \\approx 0{,}940$. Modellen $T(x) = 64 \\cdot 0{,}94^x + 21$ treff dataa godt: $T(10) \\approx 55{,}5$ (målt: 55) og $T(20) \\approx 39{,}6$ (målt: 39).

Du kan også bruke digitale verktøy som GeoGebra (med kommandoen FitExp) eller rekneark for å finne den beste tilpassinga automatisk -- det kallast regresjonsanalyse.`,
    },
    {
      id: '10-9-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-9-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg sjølv på modelltilpassing:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-3-n-quiz2-q0',
            task: 'Du måler batterinivå: 100 %, 88 %, 78 %, 69 %. Forholdstalet mellom målingane er omtrent 0,88. Kva type modell passar?',
            options: [
              { id: 'a', text: 'Lineær modell', isCorrect: false },
              { id: 'b', text: 'Kvadratisk modell', isCorrect: false },
              { id: 'c', text: 'Eksponentiell modell med $b \\approx 0{,}88$', isCorrect: true },
              { id: 'd', text: 'Ingen modell passar', isCorrect: false },
            ],
            solution: 'Eit stabilt forholdstall mellom påfølgjande verdiar er kjenneteiknet på eksponentiell endring.',
          },
          {
            id: '10-9-3-n-quiz2-q1',
            task: 'Kvifor brukar vi $T(x) = a \\cdot b^x + 21$ og ikkje berre $T(x) = a \\cdot b^x$ for avkjøling i eit rom med 21 grader?',
            options: [
              { id: 'a', text: 'Fordi $a \\cdot b^x$ alltid gir for høge verdiar', isCorrect: false },
              { id: 'b', text: 'Fordi temperaturen aldri kan gå under romtemperaturen (21 grader), og vi treng asymptote $y = 21$', isCorrect: true },
              { id: 'c', text: 'Fordi det gir penare tal', isCorrect: false },
              { id: 'd', text: 'Fordi $a \\cdot b^x$ ikkje er ein gyldig funksjon', isCorrect: false },
            ],
            solution: 'Modellen $a \\cdot b^x$ har asymptote $y = 0$, men temperaturen kan ikkje gå under romtemperaturen. Ved å legge til 21 flyttar vi asymptoten dit ho høyrer heime.',
          },
          {
            id: '10-9-3-n-quiz2-q2',
            task: 'Folketalet i ein kommune har auka med omtrent 2,0 % kvart år dei siste åra, frå 8 200 i 2018. Kva er ein rimeleg modell?',
            options: [
              { id: 'a', text: '$f(x) = 8\\,200 + 164x$', isCorrect: false },
              { id: 'b', text: '$f(x) = 8\\,200 \\cdot 2{,}0^x$', isCorrect: false },
              { id: 'c', text: '$f(x) = 8\\,200 \\cdot 1{,}020^x$', isCorrect: true },
              { id: 'd', text: '$f(x) = 8\\,200 \\cdot 0{,}98^x$', isCorrect: false },
            ],
            solution: '2 % årleg vekst gir vekstfaktor $b = 1{,}020$. Med startverdi 8 200 blir modellen $f(x) = 8\\,200 \\cdot 1{,}020^x$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-3-n-section3',
      type: 'text',
      content: `## Når modellen sviktar -- avgrensingar og ekstrapolering

Ein modell er aldri perfekt -- han er ei forenkling. Det avgjerande er å vite *kvar* grensene går.

Under eit sjukdomsutbrot registrerte ein forskar 10, 15, 22, 34, 50, 74 og 112 nye smitta per dag. Modellen $f(x) = 6{,}7 \\cdot 1{,}49^x$ treff dataa godt -- avvika er små. Men kva skjer viss vi brukar modellen vidare? Etter 14 dagar gir han 1 783 smitta per dag. Etter 21 dagar: 29 180. I ein kommune med 30 000 innbyggjarar er det openbart urealistisk. I røynda vil smitteveksten avta fordi folk blir immune, tiltak blir sett i verk, og det er færre att å smitte.

Vi skil mellom **interpolering** og **ekstrapolering**. Interpolering er å bruke modellen mellom kjende datapunkt -- det er vanlegvis trygt. Ekstrapolering er å bruke modellen utanfor datapunkta -- lenger fram i tid enn vi har data for -- og det kan vere upåliteleg.

Eit anna døme: Ein elev har laga to modellar for folketalet i ei bygd -- ein lineær ($f(x) = 2\\,400 - 35x$) og ein eksponentiell ($g(x) = 2\\,400 \\cdot 0{,}985^x$). For dei neste 10 åra gir begge omtrent same resultat. Men for 2060 gir den lineære modellen til slutt negativt folketal -- openbart urealistisk! Den eksponentielle modellen gir aldri null folketal, og er difor meir realistisk på lang sikt.

Prisen på solcellepanel har falle med omtrent 34 prosent kvart andre år sidan 2010. Modellen $f(x) = 28 \\cdot 0{,}66^x$ beskriv dette godt. Men kan prisane halde fram med å falle i same takt for alltid? Nei. Til slutt nærmar prisen seg produksjonskostnaden -- det finst ein nedre grense for materialkostnad og arbeid. Modellen er god for dei åra vi har data for, men pålitelegheita minkar jo lenger fram vi ser.`,
    },
    {
      id: '10-9-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-9-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg sjølv på gyldigheit og avgrensingar:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-9-3-n-quiz3-q0',
            task: 'Kva er forskjellen mellom interpolering og ekstrapolering?',
            options: [
              { id: 'a', text: 'Dei betyr det same', isCorrect: false },
              { id: 'b', text: 'Interpolering: bruke modellen mellom datapunkta. Ekstrapolering: bruke modellen utanfor datapunkta.', isCorrect: true },
              { id: 'c', text: 'Interpolering er alltid upåliteleg, ekstrapolering er alltid påliteleg', isCorrect: false },
              { id: 'd', text: 'Interpolering brukar lineære modellar, ekstrapolering brukar eksponentielle', isCorrect: false },
            ],
            solution: 'Interpolering er å bruke modellen mellom kjende datapunkt (vanlegvis trygt). Ekstrapolering er å bruke han utanfor (kan vere upåliteleg).',
          },
          {
            id: '10-9-3-n-quiz3-q1',
            task: 'Kvifor er ein eksponentiell modell for folketal meir realistisk enn ein lineær modell på lang sikt?',
            options: [
              { id: 'a', text: 'Fordi eksponentiell modell alltid gir nøyaktige tal', isCorrect: false },
              { id: 'b', text: 'Fordi lineær modell kan gi negativt folketal over tid, men eksponentiell gir aldri null', isCorrect: true },
              { id: 'c', text: 'Fordi eksponentiell modell er enklare å rekne med', isCorrect: false },
              { id: 'd', text: 'Fordi lineær modell ikkje kan brukast på folketal', isCorrect: false },
            ],
            solution: 'Ved nedgang kan ein lineær modell gi negativt folketal -- urealistisk! Ein eksponentiell modell nærmar seg null, men blir aldri negativ.',
          },
          {
            id: '10-9-3-n-quiz3-q2',
            task: 'Antal følgjarar på ein Instagram-konto veks med ca. 36 % per veke. Er det realistisk at denne veksten held fram i eitt år?',
            options: [
              { id: 'a', text: 'Ja, eksponentiell vekst held alltid fram', isCorrect: false },
              { id: 'b', text: 'Ja, 36 % er ein moderat vekst', isCorrect: false },
              { id: 'c', text: 'Nei, veksten vil avta -- marknaden er avgrensa, og folk mistar interessa over tid', isCorrect: true },
              { id: 'd', text: 'Vi kan ikkje seie noko om dette utan meir data', isCorrect: false },
            ],
            solution: '36 % vekst per veke over 52 veker ville gi eit enormt tal. Marknaden for potensielle følgjarar er avgrensa, og veksten vil avta. Modellen er berre god for dei første vekene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-9-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Matematisk modellering er prosessen med å bruke matematikk til å forstå reelle situasjonar. Du startar med å samle inn data, deretter visualiserer du dei og vel mellom lineær modell (konstant beløpsendring) og eksponentiell modell (konstant prosentendring).

For å tilpasse ein eksponentiell modell $f(x) = a \\cdot b^x$ finn du startverdien $a$ og vekstfaktoren $b$ -- anten frå to datapunkt, ved gjennomsnittleg prosentvis endring, eller ved hjelp av digitale verktøy (regresjon). Somme gonger treng du modellen $f(x) = a \\cdot b^x + c$ for å ta omsyn til ein asymptote.

Det viktigaste er å vurdere modellen kritisk. Sjekk om han treff dataa. Drøft avgrensingar. Hugs at interpolering (mellom datapunkt) er tryggare enn ekstrapolering (utanfor datapunkt). Ingen modell held for alltid -- men ein god modell gjev oss verdifull innsikt for dei periodane han gjeld.`,
    },
  ],
  exercises: [],
};


// Eksporter alle narrative kapitler i seksjon 9
export const MATEMATIKK_10_NARRATIV_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_9_1_NARRATIV,
  CHAPTER_10_9_2_NARRATIV,
  CHAPTER_10_9_3_NARRATIV,
];
