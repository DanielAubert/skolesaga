import type { QuizQuestion } from './quiz-data';

const quizData_s1: Record<string, QuizQuestion[]> = {
  's1-1-1': [
  {
    question: 'Hva er graden til polynomet $P(x) = 3x^4 - 2x^2 + 5x - 1$?',
    options: ['$4$', '$3$', '$2$', '$5$'],
    explanation: 'Graden til et polynom er den høyeste eksponenten. Her er det $4$, fra leddet $3x^4$.',
  },
  {
    question: 'Hvis $P(2) = 0$ for et polynom $P(x)$, hva kan vi si om $(x - 2)$?',
    options: ['$(x - 2)$ er en faktor i $P(x)$', '$(x + 2)$ er en faktor i $P(x)$', '$P(x)$ har ingen faktorer', '$x = 2$ er en asymptote'],
    explanation: 'Ifølge faktorsetningen: Hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$.',
  },
  {
    question: 'Hva er resten når man deler $x^3 + 2x^2 - 5x - 6$ på $(x + 3)$?',
    options: ['$0$', '$3$', '$-3$', '$6$'],
    explanation: 'Resten kan finnes ved å sette inn $x = -3$ i polynomet: $(-3)^3 + 2(-3)^2 - 5(-3) - 6 = -27 + 18 + 15 - 6 = 0$.',
  },
  {
    question: 'Hvilket av disse er IKKE et polynom?',
    options: ['$\\frac{1}{x} + 3$', '$x^5 - 2x^3 + 1$', '$7$', '$3x^2 + 2x - 5$'],
    explanation: '$\\frac{1}{x} = x^{-1}$ har negativ eksponent, og er derfor ikke et polynom. Polynomer har kun ikke-negative heltallseksponenter.',
  },
  {
    question: 'Hvordan finner man kandidater til nullpunkter i et polynom med heltallskoeffisienter?',
    options: ['Divisorene av konstantleddet delt på divisorene av ledende koeffisient', 'Bare positive heltall', 'Koeffisientene i polynomet', 'Tilfeldig gjetting'],
    explanation: 'Ifølge den rasjonale rot-teoremet er mulige rasjonale nullpunkter $\\frac{p}{q}$ der $p$ deler konstantleddet og $q$ deler den ledende koeffisienten.',
  },
  {
    question: 'Hva er den ledende koeffisienten i $P(x) = 5 - 3x + 2x^3 - x^2$?',
    options: ['$2$', '$5$', '$-3$', '$-1$'],
    explanation: 'Når vi ordner polynomet: $P(x) = 2x^3 - x^2 - 3x + 5$. Den ledende koeffisienten er koeffisienten foran leddet med høyest grad, altså $2$.',
  },
  {
    question: 'Hva blir $(x + 2)(x - 3)$ multiplisert ut?',
    options: ['$x^2 - x - 6$', '$x^2 + x - 6$', '$x^2 - 5x - 6$', '$x^2 - x + 6$'],
    explanation: '$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$.',
  },
  {
    question: 'Hvilken faktorisering er riktig for $x^2 - 9$?',
    options: ['$(x + 3)(x - 3)$', '$(x - 3)^2$', '$(x + 3)^2$', '$(x - 9)(x + 1)$'],
    explanation: '$x^2 - 9$ er et konjugatprodukt: $a^2 - b^2 = (a+b)(a-b)$, så $x^2 - 9 = (x+3)(x-3)$.',
  },
  {
    question: 'Hva er $P(x) \\cdot Q(x)$ hvis $P(x) = x + 1$ og $Q(x) = x^2 - 1$?',
    options: ['$x^3 + x^2 - x - 1$', '$x^3 - x^2 + x - 1$', '$x^3 - 1$', '$x^3 + 1$'],
    explanation: '$(x + 1)(x^2 - 1) = x^3 - x + x^2 - 1 = x^3 + x^2 - x - 1$.',
  },
  {
    question: 'Hva er summen av nullpunktene til $P(x) = x^2 - 5x + 6$?',
    options: ['$5$', '$6$', '$-5$', '$11$'],
    explanation: 'For $ax^2 + bx + c$ er summen av nullpunktene $-\\frac{b}{a} = -\\frac{-5}{1} = 5$. (Nullpunktene er $2$ og $3$, som gir $2 + 3 = 5$.)',
  },
  {
    question: 'Hva er produktet av nullpunktene til $P(x) = x^2 - 5x + 6$?',
    options: ['$6$', '$5$', '$-6$', '$-5$'],
    explanation: 'For $ax^2 + bx + c$ er produktet av nullpunktene $\\frac{c}{a} = \\frac{6}{1} = 6$. (Nullpunktene er $2$ og $3$, som gir $2 \\cdot 3 = 6$.)',
  },
  {
    question: 'Hva er $P(-1)$ hvis $P(x) = x^3 + 2x^2 - x - 2$?',
    options: ['$0$', '$-2$', '$2$', '$4$'],
    explanation: '$P(-1) = (-1)^3 + 2(-1)^2 - (-1) - 2 = -1 + 2 + 1 - 2 = 0$.',
  },
  {
    question: 'Hvis $P(x) = (x - 1)^2(x + 2)$, hvor mange nullpunkter har polynomet (telt med multiplisitet)?',
    options: ['$3$', '$2$', '$1$', '$4$'],
    explanation: 'Polynomet har nullpunkt $x = 1$ med multiplisitet $2$ og $x = -2$ med multiplisitet $1$. Totalt $3$ nullpunkter telt med multiplisitet.',
  },
  {
    question: 'Hva er graden til polynomet som fremkommer ved å multiplisere et andregradsledd med et tredjegradsledd?',
    options: ['$5$', '$6$', '$2$', '$3$'],
    explanation: 'Når man multipliserer polynomer, adderes gradene. Grad $2$ + grad $3$ = grad $5$.',
  },
  {
    question: 'Faktoriser $x^3 - x^2 - 2x$ fullstendig.',
    options: ['$x(x - 2)(x + 1)$', '$x(x + 2)(x - 1)$', '$(x - 2)(x + 1)$', '$x(x^2 - x - 2)$'],
    explanation: 'Først faktoriser ut $x$: $x(x^2 - x - 2)$. Så faktoriser $x^2 - x - 2 = (x - 2)(x + 1)$. Totalt: $x(x - 2)(x + 1)$.',
  },
],


  's1-1-2': [
  {
    question: 'Hva er definisjonsmengden til uttrykket $\\frac{x + 1}{x^2 - 4}$?',
    options: ['Alle $x$ unntatt $x = 2$ og $x = -2$', 'Alle $x$ unntatt $x = 4$', 'Alle reelle tall', 'Alle $x$ unntatt $x = -1$'],
    explanation: 'Nevneren $x^2 - 4 = (x-2)(x+2) = 0$ når $x = 2$ eller $x = -2$. Disse verdiene må utelates.',
  },
  {
    question: 'Hva er førenklet form av $\\frac{x^2 - 9}{x + 3}$?',
    options: ['$x - 3$', '$x + 3$', '$x^2 - 3$', '$\\frac{x - 3}{x + 3}$'],
    explanation: '$x^2 - 9 = (x+3)(x-3)$. Deler vi på $(x+3)$ får vi $x - 3$ (for $x \\neq -3$).',
  },
  {
    question: 'Når man adderer to brøker med ulike nevnere, hva må man først gjøre?',
    options: ['Finne fellesnevner', 'Multiplisere tellerne', 'Forkorte brøkene', 'Dividere nevnerne'],
    explanation: 'For å addere brøker med ulike nevnere må man først finne en fellesnevner, deretter utvide brøkene.',
  },
  {
    question: 'Hva er $\\frac{2}{x} + \\frac{3}{x^2}$ med fellesnevner?',
    options: ['$\\frac{2x + 3}{x^2}$', '$\\frac{5}{x^2}$', '$\\frac{5}{x^3}$', '$\\frac{6}{x^3}$'],
    explanation: 'Fellesnevner er $x^2$. $\\frac{2}{x} = \\frac{2x}{x^2}$, så summen blir $\\frac{2x + 3}{x^2}$.',
  },
  {
    question: 'Hva er resultatet av $\\frac{x}{y} : \\frac{x^2}{y^2}$?',
    options: ['$\\frac{y}{x}$', '$\\frac{x}{y}$', '$1$', '$\\frac{x^2}{y^2}$'],
    explanation: 'Divisjon med brøk = multiplikasjon med den omvendte. $\\frac{x}{y} \\cdot \\frac{y^2}{x^2} = \\frac{y}{x}$.',
  },
  {
    question: 'Forenkle $\\frac{x^2 - 4x}{x^2 - 16}$.',
    options: ['$\\frac{x}{x + 4}$', '$\\frac{x - 4}{x + 4}$', '$\\frac{x}{x - 4}$', '$\\frac{1}{4}$'],
    explanation: 'Teller: $x(x - 4)$. Nevner: $(x - 4)(x + 4)$. Forkorter $(x - 4)$: $\\frac{x}{x + 4}$ (for $x \\neq 4$).',
  },
  {
    question: 'Hva er $\\frac{1}{x - 1} - \\frac{1}{x + 1}$?',
    options: ['$\\frac{2}{x^2 - 1}$', '$\\frac{-2}{x^2 - 1}$', '$0$', '$\\frac{2x}{x^2 - 1}$'],
    explanation: 'Fellesnevner: $(x-1)(x+1) = x^2 - 1$. Teller: $(x+1) - (x-1) = 2$. Svar: $\\frac{2}{x^2 - 1}$.',
  },
  {
    question: 'Hva er $\\frac{a}{b} \\cdot \\frac{b^2}{a^2}$?',
    options: ['$\\frac{b}{a}$', '$\\frac{a}{b}$', '$\\frac{ab}{ab}$', '$\\frac{b^2}{a}$'],
    explanation: '$\\frac{a}{b} \\cdot \\frac{b^2}{a^2} = \\frac{a \\cdot b^2}{b \\cdot a^2} = \\frac{b}{a}$.',
  },
  {
    question: 'Forenkle $\\frac{x^2 + 2x + 1}{x + 1}$.',
    options: ['$x + 1$', '$x - 1$', '$x^2 + 1$', '$\\frac{x + 1}{2}$'],
    explanation: 'Teller: $(x + 1)^2$. Deler på $(x + 1)$: $\\frac{(x+1)^2}{x+1} = x + 1$ (for $x \\neq -1$).',
  },
  {
    question: 'Hva er $\\frac{3}{x} + \\frac{2}{x - 1}$ skrevet med fellesnevner?',
    options: ['$\\frac{5x - 3}{x(x - 1)}$', '$\\frac{5x + 3}{x(x - 1)}$', '$\\frac{5}{x(x - 1)}$', '$\\frac{3x - 2}{x(x - 1)}$'],
    explanation: 'Fellesnevner: $x(x - 1)$. $\\frac{3(x - 1) + 2x}{x(x - 1)} = \\frac{3x - 3 + 2x}{x(x - 1)} = \\frac{5x - 3}{x(x - 1)}$.',
  },
  {
    question: 'Hvilket uttrykk er ekvivalent med $\\frac{1}{\\frac{1}{x} + \\frac{1}{y}}$?',
    options: ['$\\frac{xy}{x + y}$', '$x + y$', '$\\frac{x + y}{xy}$', '$xy$'],
    explanation: '$\\frac{1}{x} + \\frac{1}{y} = \\frac{y + x}{xy}$. Invertering gir $\\frac{xy}{x + y}$.',
  },
  {
    question: 'Hva er definisjonsmengden til $\\frac{x}{(x - 2)(x + 3)}$?',
    options: ['$x \\neq 2$ og $x \\neq -3$', '$x \\neq 0$', '$x \\neq -2$ og $x \\neq 3$', 'Alle reelle tall'],
    explanation: 'Nevneren er null når $x = 2$ eller $x = -3$. Disse verdiene må utelates fra definisjonsmengden.',
  },
  {
    question: 'Forenkle $\\frac{x^2 - 1}{x^2 + 2x + 1}$.',
    options: ['$\\frac{x - 1}{x + 1}$', '$\\frac{x + 1}{x - 1}$', '$\\frac{1}{x + 1}$', '$x - 1$'],
    explanation: 'Teller: $(x-1)(x+1)$. Nevner: $(x+1)^2$. Forkorter $(x+1)$: $\\frac{x - 1}{x + 1}$.',
  },
  {
    question: 'Hva blir $\\frac{2x}{x + 1} - \\frac{x - 1}{x + 1}$?',
    options: ['$\\frac{x + 1}{x + 1} = 1$', '$\\frac{x - 1}{x + 1}$', '$\\frac{3x - 1}{x + 1}$', '$\\frac{x}{x + 1}$'],
    explanation: 'Samme nevner, så vi trekker tellerne: $\\frac{2x - (x - 1)}{x + 1} = \\frac{2x - x + 1}{x + 1} = \\frac{x + 1}{x + 1} = 1$ (for $x \\neq -1$).',
  },
],


  's1-1-3': [
  {
    question: 'Hva må man huske når man multipliserer en ulikhet med et negativt tall?',
    options: ['Snu ulikhetstegnet', 'Legge til $1$ på begge sider', 'Ingenting spesielt', 'Kvadrere begge sider'],
    explanation: 'Når man multipliserer eller dividerer en ulikhet med et negativt tall, må ulikhetstegnet snu retning.',
  },
  {
    question: 'Løsningen på ulikheten $x^2 - 4 < 0$ er:',
    options: ['$-2 < x < 2$', '$x < -2$ eller $x > 2$', '$x > 2$', '$x < -2$'],
    explanation: '$x^2 - 4 < 0$ betyr $x^2 < 4$, som gir $|x| < 2$, altså $-2 < x < 2$.',
  },
  {
    question: 'For hvilke $x$-verdier er $\\frac{x - 1}{x + 2} > 0$?',
    options: ['$x < -2$ eller $x > 1$', '$-2 < x < 1$', '$x > 1$', '$x < -2$'],
    explanation: 'Brøken er positiv når teller og nevner har samme fortegn: begge positive ($x > 1$) eller begge negative ($x < -2$).',
  },
  {
    question: 'Hva er løsningen på $|x - 3| = 5$?',
    options: ['$x = 8$ eller $x = -2$', '$x = 8$', '$x = -2$', '$x = 2$ eller $x = 8$'],
    explanation: '$|x - 3| = 5$ gir $x - 3 = 5$ eller $x - 3 = -5$, altså $x = 8$ eller $x = -2$.',
  },
  {
    question: 'Når man løser en likning med brøkuttrykk, hva må man alltid kontrollære?',
    options: ['At løsningen ikke gir null i nevneren', 'At løsningen er positiv', 'At løsningen er et heltall', 'At likningen er lineær'],
    explanation: 'Løsninger som gir null i nevneren er ugyldige og må forkastes.',
  },
  {
    question: 'Løs ulikheten $2x - 6 > 0$.',
    options: ['$x > 3$', '$x < 3$', '$x > -3$', '$x < -3$'],
    explanation: '$2x - 6 > 0 \\Rightarrow 2x > 6 \\Rightarrow x > 3$.',
  },
  {
    question: 'Løs ulikheten $-3x < 12$.',
    options: ['$x > -4$', '$x < -4$', '$x > 4$', '$x < 4$'],
    explanation: 'Deler på $-3$ og snur ulikhetstegnet: $x > -4$.',
  },
  {
    question: 'Hva er løsningen på $|2x + 1| \\leq 5$?',
    options: ['$-3 \\leq x \\leq 2$', '$x \\leq -3$ eller $x \\geq 2$', '$-2 \\leq x \\leq 3$', '$x \\leq 2$'],
    explanation: '$|2x + 1| \\leq 5$ gir $-5 \\leq 2x + 1 \\leq 5$, altså $-6 \\leq 2x \\leq 4$, som gir $-3 \\leq x \\leq 2$.',
  },
  {
    question: 'For hvilke $x$ er $(x - 1)(x + 3) > 0$?',
    options: ['$x < -3$ eller $x > 1$', '$-3 < x < 1$', '$x > 1$', '$x > -3$'],
    explanation: 'Produktet er positivt når begge faktorer har samme fortegn. Fortegnsskjema viser: $x < -3$ eller $x > 1$.',
  },
  {
    question: 'Løs ulikheten $x^2 - 5x + 6 > 0$.',
    options: ['$x < 2$ eller $x > 3$', '$2 < x < 3$', '$x > 3$', '$x < 2$'],
    explanation: '$x^2 - 5x + 6 = (x - 2)(x - 3)$. Produktet er positivt for $x < 2$ eller $x > 3$.',
  },
  {
    question: 'Hva er løsningen på $\\frac{x}{x - 2} \\leq 0$?',
    options: ['$0 \\leq x < 2$', '$x \\leq 0$ eller $x > 2$', '$x < 0$ eller $x \\geq 2$', '$0 < x \\leq 2$'],
    explanation: 'Brøken er $\\leq 0$ når teller og nevner har motsatt fortegn (eller teller er $0$). Dette gir $0 \\leq x < 2$ (merk: $x = 2$ er ikke definert).',
  },
  {
    question: 'Løs $|x| > 3$.',
    options: ['$x < -3$ eller $x > 3$', '$-3 < x < 3$', '$x > 3$', '$x > -3$'],
    explanation: '$|x| > 3$ betyr at $x$ har avstand større enn $3$ fra $0$, altså $x < -3$ eller $x > 3$.',
  },
  {
    question: 'Hva er løsningen på dobbelt-ulikheten $-1 < 2x + 3 < 7$?',
    options: ['$-2 < x < 2$', '$-1 < x < 2$', '$1 < x < 5$', '$-2 < x < 5$'],
    explanation: 'Trekk fra $3$: $-4 < 2x < 4$. Del på $2$: $-2 < x < 2$.',
  },
  {
    question: 'En ulikhet av typen $ax + b \\geq 0$ har løsning $x \\leq -2$. Hvilket fortegn har $a$?',
    options: ['$a < 0$ (negativt)', '$a > 0$ (positivt)', '$a = 0$', 'Kan ikke avgjøres'],
    explanation: 'Siden løsningen er $x \\leq -2$ (ulikheten snudde), må vi ha delt på negativt tall, altså $a < 0$.',
  },
],


  's1-2-1': [
  {
    question: 'Hvor mange reelle nullpunkter kan et tredjegradspolynom maksimalt ha?',
    options: ['$3$', '$2$', '$4$', '$1$'],
    explanation: 'Et polynom av grad $n$ kan ha maksimalt $n$ reelle nullpunkter.',
  },
  {
    question: 'Hva er oppførselen til $f(x) = -x^3 + 2x$ når $x \\to \\infty$?',
    options: ['$f(x) \\to -\\infty$', '$f(x) \\to \\infty$', '$f(x) \\to 0$', '$f(x)$ oscillærer'],
    explanation: 'For store $x$ dominerer $-x^3$-leddet. Siden koeffisienten er negativ, går funksjonen mot $-\\infty$.',
  },
  {
    question: 'Grafen til et andregradspolynom med positiv ledende koeffisient er:',
    options: ['En parabel som åpner oppover', 'En parabel som åpner nedover', 'En rett linje', 'En S-kurve'],
    explanation: 'Et andregradspolynom med positiv ledende koeffisient gir en parabel som åpner oppover.',
  },
  {
    question: 'Hvis et polynom har et dobbelt nullpunkt i $x = 2$, hva skjer med grafen der?',
    options: ['Grafen tangerer $x$-aksen', 'Grafen krysser $x$-aksen', 'Grafen har en vertikal asymptote', 'Grafen har et brudd'],
    explanation: 'Ved et dobbelt nullpunkt tangerer grafen $x$-aksen uten å krysse.',
  },
  {
    question: 'Hva er konstantleddet i $P(x) = 2x^3 - 4x^2 + x - 7$?',
    options: ['$-7$', '$2$', '$-4$', '$1$'],
    explanation: 'Konstantleddet er leddet uten $x$, altså $-7$.',
  },
  {
    question: 'Et polynom har $f(x) \\to +\\infty$ når $x \\to +\\infty$ og $f(x) \\to -\\infty$ når $x \\to -\\infty$. Hva kan vi si om graden og ledende koeffisient?',
    options: ['Odde grad, positiv ledende koeffisient', 'Odde grad, negativ ledende koeffisient', 'Like grad, positiv ledende koeffisient', 'Like grad, negativ ledende koeffisient'],
    explanation: 'Når grafen går i motsatte retninger for $x \\to \\pm\\infty$, er graden odde. Siden den stiger til høyre, er ledende koeffisient positiv.',
  },
  {
    question: 'Hva er $y$-skjæringspunktet til $P(x) = 3x^2 - 5x + 2$?',
    options: ['$(0, 2)$', '$(2, 0)$', '$(0, 3)$', '$(0, -5)$'],
    explanation: '$y$-skjæringspunktet finner vi ved $P(0) = 2$. Punktet er $(0, 2)$.',
  },
  {
    question: 'Grafen til $f(x) = x^4 - 4x^2$ har hvor mange vendepunkter?',
    options: ['$2$', '$0$', '$1$', '$4$'],
    explanation: 'Vendepunkter finnes der $f\'\'(x) = 0$ og skifter fortegn. Her er $f\'\'(x) = 12x^2 - 8 = 0$ som gir $x = \\pm\\sqrt{2/3}$, altså $2$ vendepunkter.',
  },
  {
    question: 'Hvis $P(x) = (x - 1)^3$, hvordan krysser grafen $x$-aksen i $x = 1$?',
    options: ['Grafen krysser med et vendepunkt (S-form)', 'Grafen tangerer uten å krysse', 'Grafen krysser rett gjennom', 'Grafen har en spiss'],
    explanation: 'Ved et trippelt nullpunkt (odde multiplisitet $> 1$) krysser grafen aksen med et vendepunkt, som gir en S-form.',
  },
  {
    question: 'Hva er minimum antall reelle nullpunkter for et polynom av grad $3$?',
    options: ['$1$', '$0$', '$2$', '$3$'],
    explanation: 'Et tredjegradspolynom går fra $-\\infty$ til $+\\infty$ (eller omvendt), så det må krysse $x$-aksen minst én gang.',
  },
  {
    question: 'Grafen til $f(x) = x^2 - 4x + 4$ tangerer $x$-aksen. Hvor?',
    options: ['$x = 2$', '$x = 4$', '$x = -2$', '$x = 0$'],
    explanation: '$f(x) = (x - 2)^2$ har et dobbelt nullpunkt i $x = 2$, så grafen tangerer der.',
  },
  {
    question: 'Hvordan finner man skjæringspunktet mellom $y = x^2$ og $y = 2x + 3$?',
    options: ['Løs $x^2 = 2x + 3$', 'Sett $x = 0$ i begge', 'Deriver begge og sett lik', 'Legg sammen funksjonene'],
    explanation: 'Skjæringspunkt finnes der funksjonsverdiene er like, altså $x^2 = 2x + 3$.',
  },
  {
    question: 'Hvis $f(x) = x^3 - 3x$, hva er $f(-2)$?',
    options: ['$-2$', '$2$', '$-8$', '$8$'],
    explanation: '$f(-2) = (-2)^3 - 3(-2) = -8 + 6 = -2$.',
  },
],


  's1-2-2': [
  {
    question: 'Hva er en vertikal asymptote?',
    options: ['En vertikal linje som grafen nærmer seg men aldri når', 'En horisontal linje som grafen nærmer seg', 'Et nullpunkt', 'Et toppunkt'],
    explanation: 'En vertikal asymptote er en vertikal linje $x = a$ som grafen nærmer seg når $x$ nærmer seg $a$.',
  },
  {
    question: 'For $f(x) = \\frac{1}{x - 3}$, hvor er den vertikale asymptoten?',
    options: ['$x = 3$', '$x = -3$', '$x = 0$', '$y = 0$'],
    explanation: 'Den vertikale asymptoten er der nevneren er null, altså $x - 3 = 0$, som gir $x = 3$.',
  },
  {
    question: 'Hva er den horisontale asymptoten til $f(x) = \\frac{2x + 1}{x - 1}$?',
    options: ['$y = 2$', '$y = 1$', '$y = 0$', '$y = -1$'],
    explanation: 'Når teller og nevner har samme grad, er den horisontale asymptoten forholdet mellom ledende koeffisienter: $\\frac{2}{1} = 2$.',
  },
  {
    question: 'Hva skjer med $f(x) = \\frac{1}{x}$ når $x \\to 0^+$?',
    options: ['$f(x) \\to +\\infty$', '$f(x) \\to -\\infty$', '$f(x) \\to 0$', '$f(x) \\to 1$'],
    explanation: 'Når $x$ nærmer seg $0$ fra høyre (positive verdier), blir $\\frac{1}{x}$ veldig stor og positiv.',
  },
  {
    question: 'En rasjonal funksjon har horisontal asymptote $y = 0$ når:',
    options: ['Graden til tellæren er lavere enn graden til nevneren', 'Graden til tellæren er høyere enn graden til nevneren', 'Gradene er like', 'Funksjonen har ingen nullpunkter'],
    explanation: 'Når tellærens grad er mindre enn nevnerens grad, nærmer funksjonen seg $0$ for store $|x|$.',
  },
  {
    question: 'Hva er de vertikale asymptotene til $f(x) = \\frac{x}{x^2 - 4}$?',
    options: ['$x = 2$ og $x = -2$', '$x = 4$', '$x = 0$', 'Ingen vertikale asymptoter'],
    explanation: 'Nevneren $x^2 - 4 = (x-2)(x+2) = 0$ gir $x = 2$ og $x = -2$.',
  },
  {
    question: 'Har $f(x) = \\frac{x^2 + 1}{x}$ en horisontal asymptote?',
    options: ['Nei, tellergraden er høyere enn nevnergraden', 'Ja, $y = 1$', 'Ja, $y = 0$', 'Ja, $y = x$'],
    explanation: 'Når tellærens grad ($2$) er høyere enn nevnerens ($1$), finnes ingen horisontal asymptote (men funksjonen har en skrå asymptote $y = x$).',
  },
  {
    question: 'Hva er den horisontale asymptoten til $f(x) = \\frac{3x^2 - 1}{x^2 + 5}$?',
    options: ['$y = 3$', '$y = 0$', '$y = -\\frac{1}{5}$', 'Ingen'],
    explanation: 'Samme grad i teller og nevner. Horisontal asymptote er $\\frac{3}{1} = 3$.',
  },
  {
    question: 'Grafen til $f(x) = \\frac{x - 1}{x + 2}$ krysser $x$-aksen i:',
    options: ['$x = 1$', '$x = -2$', '$x = 0$', 'Krysser ikke'],
    explanation: 'Nullpunkt der teller $= 0$: $x - 1 = 0$ gir $x = 1$.',
  },
  {
    question: 'Hva skjer med $f(x) = \\frac{1}{x}$ når $x \\to 0^-$?',
    options: ['$f(x) \\to -\\infty$', '$f(x) \\to +\\infty$', '$f(x) \\to 0$', '$f(x) \\to -1$'],
    explanation: 'Når $x$ nærmer seg $0$ fra venstre (negative verdier), blir $\\frac{1}{x}$ veldig stor og negativ.',
  },
  {
    question: 'Hva er den skrå (oblique) asymptoten til $f(x) = \\frac{x^2 + 2x + 1}{x}$?',
    options: ['$y = x + 2$', '$y = x$', '$y = x + 1$', 'Ingen skrå asymptote'],
    explanation: 'Polynomdivisjon: $\\frac{x^2 + 2x + 1}{x} = x + 2 + \\frac{1}{x}$. Skrå asymptote er $y = x + 2$.',
  },
  {
    question: 'For $f(x) = \\frac{(x-1)(x+1)}{(x-1)(x-2)}$, er $x = 1$ en asymptote?',
    options: ['Nei, det er et hull i grafen', 'Ja, vertikal asymptote', 'Ja, horisontal asymptote', 'Nei, det er et nullpunkt'],
    explanation: 'Faktorene $(x-1)$ forkortes bort, så $x = 1$ er et hull (ikke definert, men ikke asymptote). $x = 2$ er den vertikale asymptoten.',
  },
  {
    question: 'Kan en graf krysse sin horisontale asymptote?',
    options: ['Ja, men nærmer seg den for store $|x|$', 'Nei, aldri', 'Bare for $x = 0$', 'Bare for polynomer'],
    explanation: 'En graf kan krysse sin horisontale asymptote, men vil nærme seg den når $|x| \\to \\infty$.',
  },
],


  's1-2-3': [
  {
    question: 'Hva er formen til en eksponentialfunksjon for eksponentiell vekst?',
    options: ['$f(x) = a \\cdot b^x$ der $b > 1$', '$f(x) = a \\cdot b^x$ der $0 < b < 1$', '$f(x) = a \\cdot x^b$', '$f(x) = a + bx$'],
    explanation: 'For eksponentiell vekst må basen $b$ være større enn $1$.',
  },
  {
    question: 'Hva er verdien av $e$ (Eulers tall) avrundet til to desimåler?',
    options: ['$2{,}72$', '$3{,}14$', '$1{,}62$', '$2{,}00$'],
    explanation: 'Eulers tall $e$ er ca. $2{,}71828...$, som avrundet til to desimåler er $2{,}72$.',
  },
  {
    question: 'Hvis en populasjon dobler seg hvert 5. år, og starter på 100, hva er vekstfaktoren?',
    options: ['$2^{1/5}$', '$2$', '$5$', '$2^5$'],
    explanation: 'Årlig vekstfaktor er $2^{1/5}$ siden populasjonen dobles over 5 år.',
  },
  {
    question: 'Hva er halvveringstiden for en eksponentiell nedgang med $k = 0{,}1$ i $f(t) = A \\cdot e^{-kt}$?',
    options: ['$\\frac{\\ln 2}{0{,}1} = 6{,}93$', '$\\frac{0{,}1}{\\ln 2}$', '$10$', '$0{,}693$'],
    explanation: 'Halvveringstid $T$ gis av $e^{-kT} = 0{,}5$, som gir $T = \\frac{\\ln 2}{k} = \\frac{0{,}693}{0{,}1} = 6{,}93$.',
  },
  {
    question: 'Grafen til $f(x) = e^x$ skjærer $y$-aksen i punktet:',
    options: ['$(0, 1)$', '$(0, e)$', '$(1, 0)$', '$(0, 0)$'],
    explanation: '$f(0) = e^0 = 1$, så grafen skjærer $y$-aksen i $(0, 1)$.',
  },
  {
    question: 'En bakteriekultur vokser fra $1000$ til $8000$ på $3$ timer. Hva er vekstfaktoren per time?',
    options: ['$2$', '$8$', '$\\sqrt[3]{8} = 2$', '$3$'],
    explanation: 'Vekstfaktor etter $3$ timer: $\\frac{8000}{1000} = 8$. Per time: $\\sqrt[3]{8} = 2$.',
  },
  {
    question: 'Hva er likningen for eksponentiell nedgang hvis startverdien er $500$ og nedgangsfaktoren er $0{,}9$ per år?',
    options: ['$f(t) = 500 \\cdot 0{,}9^t$', '$f(t) = 500 \\cdot 1{,}1^t$', '$f(t) = 500 - 0{,}9t$', '$f(t) = 500 \\cdot 0{,}1^t$'],
    explanation: 'Eksponentiell nedgang: $f(t) = a \\cdot b^t$ der $b = 0{,}9$ (nedgangsfaktor) og $a = 500$.',
  },
  {
    question: 'Løs likningen $2^x = 16$.',
    options: ['$x = 4$', '$x = 8$', '$x = 2$', '$x = 3$'],
    explanation: '$16 = 2^4$, så $2^x = 2^4$ gir $x = 4$.',
  },
  {
    question: 'Hva er $e^{\\ln 5}$?',
    options: ['$5$', '$e^5$', '$\\ln 5$', '$5e$'],
    explanation: '$e^x$ og $\\ln x$ er inverse funksjoner, så $e^{\\ln 5} = 5$.',
  },
  {
    question: 'En investering på $10\\,000$ kr vokser med $5\\%$ rente per år. Hvor mye er den verdt etter $10$ år?',
    options: ['$10\\,000 \\cdot 1{,}05^{10}$', '$10\\,000 \\cdot 0{,}95^{10}$', '$10\\,000 + 500 \\cdot 10$', '$10\\,000 \\cdot 10 \\cdot 0{,}05$'],
    explanation: 'Med rentes rente: $A = P \\cdot (1 + r)^t = 10\\,000 \\cdot 1{,}05^{10}$.',
  },
  {
    question: 'Grafen til $f(x) = 2^x$ har en horisontal asymptote. Hvor?',
    options: ['$y = 0$', '$y = 1$', '$y = 2$', 'Ingen asymptote'],
    explanation: 'Når $x \\to -\\infty$, går $2^x \\to 0$. Den horisontale asymptoten er $y = 0$.',
  },
  {
    question: 'Hvis $f(x) = 3 \\cdot 2^x$, hva er $f(3)$?',
    options: ['$24$', '$12$', '$18$', '$6$'],
    explanation: '$f(3) = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$.',
  },
  {
    question: 'Hva er prosentvis økning hvis vekstfaktoren er $1{,}08$?',
    options: ['$8\\%$', '$108\\%$', '$0{,}08\\%$', '$80\\%$'],
    explanation: 'Vekstfaktor $1{,}08 = 1 + 0{,}08$, så økningen er $8\\%$.',
  },
  {
    question: 'Løs $e^{2x} = 7$.',
    options: ['$x = \\frac{\\ln 7}{2}$', '$x = \\ln 7$', '$x = 2 \\ln 7$', '$x = \\frac{7}{e^2}$'],
    explanation: 'Ta $\\ln$ på begge sider: $2x = \\ln 7$, så $x = \\frac{\\ln 7}{2}$.',
  },
],


  's1-2-4': [
  {
    question: 'Hva er $\\ln(e^5)$?',
    options: ['$5$', '$e^5$', '$1$', '$e$'],
    explanation: '$\\ln$ og $e^x$ er inverse funksjoner, så $\\ln(e^5) = 5$.',
  },
  {
    question: 'Hva er $\\log_{10}(1000)$?',
    options: ['$3$', '$10$', '$100$', '$1000$'],
    explanation: '$10^3 = 1000$, så $\\log_{10}(1000) = 3$.',
  },
  {
    question: 'Hvilken logaritmeregel sier at $\\log(a \\cdot b) = \\log(a) + \\log(b)$?',
    options: ['Produktregelen', 'Kvotientregelen', 'Potensregelen', 'Kjerneregelen'],
    explanation: 'Produktregelen for logaritmer sier at logaritmen av et produkt er summen av logaritmene.',
  },
  {
    question: 'Hva er definisjonsmengden til $f(x) = \\ln(x)$?',
    options: ['$x > 0$', 'Alle reelle tall', '$x \\geq 0$', '$x \\geq 1$'],
    explanation: 'Logaritmen er kun definert for positive tall.',
  },
  {
    question: 'Hvis $\\ln(x) = 2$, hva er $x$?',
    options: ['$e^2$', '$2$', '$\\ln(2)$', '$2e$'],
    explanation: '$\\ln(x) = 2$ betyr $x = e^2$.',
  },
  {
    question: 'Forenkle $\\ln(x^3)$.',
    options: ['$3\\ln(x)$', '$\\ln(3x)$', '$\\ln(x)^3$', '$3 + \\ln(x)$'],
    explanation: 'Potensregelen: $\\ln(x^n) = n \\cdot \\ln(x)$, så $\\ln(x^3) = 3\\ln(x)$.',
  },
  {
    question: 'Hva er $\\ln(1)$?',
    options: ['$0$', '$1$', '$e$', 'Udefinert'],
    explanation: '$\\ln(1) = 0$ fordi $e^0 = 1$.',
  },
  {
    question: 'Forenkle $\\ln(a) - \\ln(b)$.',
    options: ['$\\ln\\left(\\frac{a}{b}\\right)$', '$\\ln(a - b)$', '$\\frac{\\ln(a)}{\\ln(b)}$', '$\\ln(a) \\cdot \\ln(b)$'],
    explanation: 'Kvotientregelen: $\\ln(a) - \\ln(b) = \\ln\\left(\\frac{a}{b}\\right)$.',
  },
  {
    question: 'Løs likningen $\\log_2(x) = 5$.',
    options: ['$x = 32$', '$x = 10$', '$x = 25$', '$x = 5$'],
    explanation: '$\\log_2(x) = 5$ betyr $x = 2^5 = 32$.',
  },
  {
    question: 'Hva er $\\log_5(125)$?',
    options: ['$3$', '$5$', '$25$', '$\\frac{1}{3}$'],
    explanation: '$125 = 5^3$, så $\\log_5(125) = 3$.',
  },
  {
    question: 'Forenkle $\\log(100) + \\log(10)$ (titallslogaritme).',
    options: ['$3$', '$1000$', '$110$', '$2{,}5$'],
    explanation: '$\\log(100) + \\log(10) = \\log(100 \\cdot 10) = \\log(1000) = 3$.',
  },
  {
    question: 'Hva er $\\ln(e)$?',
    options: ['$1$', '$e$', '$0$', '$2{,}72$'],
    explanation: '$\\ln(e) = 1$ fordi $e^1 = e$.',
  },
  {
    question: 'Løs $2\\ln(x) = 6$.',
    options: ['$x = e^3$', '$x = 3$', '$x = e^6$', '$x = 6$'],
    explanation: '$2\\ln(x) = 6$ gir $\\ln(x) = 3$, altså $x = e^3$.',
  },
  {
    question: 'Hva er $\\log_a(a)$ for alle $a > 0, a \\neq 1$?',
    options: ['$1$', '$a$', '$0$', 'Avhenger av $a$'],
    explanation: '$\\log_a(a) = 1$ fordi $a^1 = a$.',
  },
  {
    question: 'Forenkle $\\ln(e^x \\cdot e^y)$.',
    options: ['$x + y$', '$xy$', '$e^{x+y}$', '$\\ln(x) + \\ln(y)$'],
    explanation: '$\\ln(e^x \\cdot e^y) = \\ln(e^{x+y}) = x + y$.',
  },
],


  's1-2-5': [
  {
    question: 'Hva kjennetegner en funksjon som har en invers?',
    options: ['Den er en-til-en (injektiv)', 'Den er kontinuerlig', 'Den er positiv', 'Den er lineær'],
    explanation: 'En funksjon må være en-til-en for å ha en invers funksjon.',
  },
  {
    question: 'Hvis $f(x) = 2x + 3$, hva er $f^{-1}(x)$?',
    options: ['$\\frac{x - 3}{2}$', '$\\frac{x + 3}{2}$', '$2x - 3$', '$\\frac{1}{2x + 3}$'],
    explanation: 'For å finne inversen: $y = 2x + 3$, løs for $x$: $x = \\frac{y - 3}{2}$. Bytt $x$ og $y$: $f^{-1}(x) = \\frac{x - 3}{2}$.',
  },
  {
    question: 'Hva er sammenhengen mellom grafene til $f$ og $f^{-1}$?',
    options: ['De er speilet om linjen $y = x$', 'De er parallelle', 'De er identiske', 'De skjærer hverandre i origo'],
    explanation: 'Grafen til $f^{-1}$ er speilbildet av grafen til $f$ om linjen $y = x$.',
  },
  {
    question: 'Hva er $f(f^{-1}(x))$?',
    options: ['$x$', '$1$', '$f(x)$', '$0$'],
    explanation: 'En funksjon komponert med sin invers gir identitetsfunksjonen: $f(f^{-1}(x)) = x$.',
  },
  {
    question: 'Hvilken funksjon er sin egen invers?',
    options: ['$f(x) = \\frac{1}{x}$ (for $x \\neq 0$)', '$f(x) = x^2$', '$f(x) = e^x$', '$f(x) = 2x$'],
    explanation: '$f(x) = \\frac{1}{x}$ er sin egen invers fordi $\\frac{1}{1/x} = x$.',
  },
  {
    question: 'Hva er inversen til $f(x) = e^x$?',
    options: ['$f^{-1}(x) = \\ln(x)$', '$f^{-1}(x) = \\frac{1}{e^x}$', '$f^{-1}(x) = x^e$', '$f^{-1}(x) = e^{-x}$'],
    explanation: '$e^x$ og $\\ln(x)$ er inverse funksjoner av hverandre.',
  },
  {
    question: 'Hvis $f(3) = 7$, hva er $f^{-1}(7)$?',
    options: ['$3$', '$7$', '$21$', '$\\frac{7}{3}$'],
    explanation: 'Inversen reverserer inputa og output: $f(3) = 7$ betyr $f^{-1}(7) = 3$.',
  },
  {
    question: 'Hva er inversen til $f(x) = x^3$?',
    options: ['$f^{-1}(x) = \\sqrt[3]{x}$', '$f^{-1}(x) = \\frac{1}{x^3}$', '$f^{-1}(x) = 3x$', '$f^{-1}(x) = x^{1/3}$'],
    explanation: 'Inversen av $x^3$ er $\\sqrt[3]{x} = x^{1/3}$. (Begge svaralternativene er riktige.)',
  },
  {
    question: 'Hvorfor har $f(x) = x^2$ (definert for alle reelle tall) ingen invers?',
    options: ['Fordi den ikke er en-til-en (f.eks. $f(-2) = f(2)$)', 'Fordi den er negativ', 'Fordi den ikke er definert for $x = 0$', 'Fordi den er diskontinuerlig'],
    explanation: '$f(x) = x^2$ gir samme verdi for $x$ og $-x$, så den er ikke en-til-en.',
  },
  {
    question: 'Hva er definisjonsområdet til $f^{-1}$ hvis $f: [0, \\infty) \\to [0, \\infty)$ definert ved $f(x) = x^2$?',
    options: ['$[0, \\infty)$', '$(-\\infty, \\infty)$', '$(-\\infty, 0]$', '$[0, 1]$'],
    explanation: 'Verdimengden til $f$ blir definisjonsområdet til $f^{-1}$: $[0, \\infty)$.',
  },
  {
    question: 'Hvis $f(x) = 5x - 2$, verifiser at $f^{-1}(f(3)) = 3$.',
    options: ['$f(3) = 13$, $f^{-1}(13) = \\frac{13+2}{5} = 3$ ✓', '$f(3) = 15$, $f^{-1}(15) = 3$', '$f(3) = 17$, $f^{-1}(17) = 3$', 'Kan ikke verifiseres'],
    explanation: '$f(3) = 5(3) - 2 = 13$. $f^{-1}(x) = \\frac{x + 2}{5}$, så $f^{-1}(13) = \\frac{15}{5} = 3$.',
  },
  {
    question: 'Hva er $f^{-1}(x)$ for $f(x) = \\frac{x + 1}{x - 1}$ (for $x \\neq 1$)?',
    options: ['$f^{-1}(x) = \\frac{x + 1}{x - 1}$ (sin egen invers)', '$f^{-1}(x) = \\frac{x - 1}{x + 1}$', '$f^{-1}(x) = x - 1$', '$f^{-1}(x) = \\frac{1}{x}$'],
    explanation: 'Løser $y = \\frac{x+1}{x-1}$ for $x$: $y(x-1) = x+1 \\Rightarrow x = \\frac{y+1}{y-1}$. Funksjonen er sin egen invers!',
  },
],


  's1-3-1': [
  {
    question: 'Hva representerer den deriverte $f\'(a)$ geometrisk?',
    options: ['Stigningstallet til tangenten i punktet $(a, f(a))$', 'Arealet under kurven', 'Nullpunktet til funksjonen', 'Y-koordinaten til toppunktet'],
    explanation: 'Den deriverte i et punkt gir stigningstallet til tangentlinjen i det punktet.',
  },
  {
    question: 'Hva er definisjonen av den deriverte som en grense?',
    options: ['$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$', '$\\lim_{x \\to \\infty} f(x)$', '$f(x+1) - f(x)$', '$\\frac{f(x)}{x}$'],
    explanation: 'Den deriverte defineres som grensen av differansekvotienten når $h$ går mot $0$.',
  },
  {
    question: 'Hvis $f(x) = 5$, hva er $f\'(x)$?',
    options: ['$0$', '$5$', '$1$', 'Udefinert'],
    explanation: 'Den deriverte av en konstant funksjon er alltid $0$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = x$?',
    options: ['$1$', '$x$', '$0$', '$2x$'],
    explanation: 'Deriverer vi $f(x) = x$ får vi $f\'(x) = 1$.',
  },
  {
    question: 'Hvis en funksjon er fallende, hva kan vi si om den deriverte?',
    options: ['Den deriverte er negativ', 'Den deriverte er positiv', 'Den deriverte er null', 'Den deriverte er udefinert'],
    explanation: 'En fallende funksjon har negativ derivert fordi stigningstallet er negativt.',
  },
  {
    question: 'Hva kalles $\\frac{f(x+h) - f(x)}{h}$ før vi tar grensen?',
    options: ['Differansekvotienten (Newton-kvotienten)', 'Den deriverte', 'Tangenten', 'Sekanten'],
    explanation: 'Differansekvotienten gir stigningstallet til sekantlinjen gjennom $(x, f(x))$ og $(x+h, f(x+h))$.',
  },
  {
    question: 'Hva er den momentane endringsraten til $f(x)$ i $x = a$?',
    options: ['$f\'(a)$', '$f(a)$', '$\\frac{f(a)}{a}$', '$f(a) - f(0)$'],
    explanation: 'Den momentane endringsraten er nettopp den deriverte i punktet, $f\'(a)$.',
  },
  {
    question: 'Hvis $f\'(2) = 0$, hva kan vi si om grafen i $x = 2$?',
    options: ['Tangenten er horisontal', 'Funksjonen er null', 'Tangenten er vertikal', 'Grafen har et brudd'],
    explanation: 'Når $f\'(a) = 0$, har tangenten stigningstall $0$, altså er den horisontal.',
  },
  {
    question: 'Hva er gjennomsnittlig endringsrate for $f(x) = x^2$ fra $x = 1$ til $x = 3$?',
    options: ['$4$', '$2$', '$6$', '$8$'],
    explanation: '$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$.',
  },
  {
    question: 'Hva er likningen for tangentlinjen til $f(x)$ i punktet $(a, f(a))$?',
    options: ['$y = f(a) + f\'(a)(x - a)$', '$y = f\'(a) \\cdot x$', '$y = f(a) \\cdot x + f\'(a)$', '$y = f(x) + f\'(x)$'],
    explanation: 'Tangentlinjen har stigningstall $f\'(a)$ og går gjennom $(a, f(a))$: $y - f(a) = f\'(a)(x - a)$.',
  },
  {
    question: 'Hva er $f\'(x)$ for $f(x) = 7x - 3$?',
    options: ['$7$', '$7x$', '$-3$', '$0$'],
    explanation: 'Lineære funksjoner har konstant derivert lik stigningstallet: $f\'(x) = 7$.',
  },
  {
    question: 'Hvis $f\'(x) = 0$ for alle $x$ i et intervall, hva kan vi si om $f$?',
    options: ['$f$ er konstant i intervallet', '$f$ er stigende', '$f$ er fallende', '$f$ har et nullpunkt'],
    explanation: 'Null derivert overalt betyr at funksjonen ikke endrer seg, altså er den konstant.',
  },
],


  's1-3-2': [
  {
    question: 'Hva er den deriverte av $f(x) = x^n$?',
    options: ['$n \\cdot x^{n-1}$', '$\\frac{x^{n+1}}{n+1}$', '$n \\cdot x^n$', '$x^{n-1}$'],
    explanation: 'Potensregelen sier at den deriverte av $x^n$ er $n \\cdot x^{n-1}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = e^x$?',
    options: ['$e^x$', '$x \\cdot e^{x-1}$', '$e$', '$1$'],
    explanation: '$e^x$ er spesiell fordi den deriverte er lik seg selv: $(e^x)\' = e^x$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\ln x$?',
    options: ['$\\frac{1}{x}$', '$\\frac{\\ln x}{x}$', '$x$', '$e^x$'],
    explanation: 'Den deriverte av $\\ln x$ er $\\frac{1}{x}$.',
  },
  {
    question: 'Hva er produktregelen for derivasjon?',
    options: ['$(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$', '$(f \\cdot g)\' = f\' \\cdot g\'$', '$(f \\cdot g)\' = \\frac{f\'}{g\'}$', '$(f \\cdot g)\' = f\' \\cdot g - f \\cdot g\'$'],
    explanation: 'Produktregelen: Den deriverte av $f \\cdot g$ er $f\' \\cdot g + f \\cdot g\'$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = 3x^4 - 2x^2 + 5x$?',
    options: ['$12x^3 - 4x + 5$', '$12x^3 - 4x^2 + 5$', '$3x^3 - 2x + 5$', '$12x^4 - 4x^2 + 5$'],
    explanation: 'Deriverer ledd for ledd: $3 \\cdot 4x^3 - 2 \\cdot 2x + 5 = 12x^3 - 4x + 5$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\frac{1}{x}$?',
    options: ['$-\\frac{1}{x^2}$', '$\\frac{1}{x^2}$', '$-x$', '$\\ln x$'],
    explanation: '$\\frac{1}{x} = x^{-1}$. Potensregelen: $(-1) \\cdot x^{-2} = -\\frac{1}{x^2}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sqrt{x}$?',
    options: ['$\\frac{1}{2\\sqrt{x}}$', '$\\frac{1}{\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\frac{\\sqrt{x}}{2}$'],
    explanation: '$\\sqrt{x} = x^{1/2}$. Derivert: $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.',
  },
  {
    question: 'Hva er kvotientregelen $\\left(\\frac{f}{g}\\right)\'$?',
    options: ['$\\frac{f\' \\cdot g - f \\cdot g\'}{g^2}$', '$\\frac{f\'}{g\'}$', '$\\frac{f\' \\cdot g + f \\cdot g\'}{g^2}$', '$\\frac{f\' - g\'}{g}$'],
    explanation: 'Kvotientregelen: $\\left(\\frac{f}{g}\\right)\' = \\frac{f\' g - f g\'}{g^2}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = 5 \\cdot 2^x$?',
    options: ['$5 \\cdot 2^x \\cdot \\ln 2$', '$5 \\cdot 2^x$', '$5 \\cdot x \\cdot 2^{x-1}$', '$10^x \\cdot \\ln 10$'],
    explanation: 'For $a^x$ er derivert $a^x \\cdot \\ln a$. Her: $(2^x)\' = 2^x \\ln 2$, så $(5 \\cdot 2^x)\' = 5 \\cdot 2^x \\cdot \\ln 2$.',
  },
  {
    question: 'Hva er $(3f(x))\'$?',
    options: ['$3f\'(x)$', '$f\'(x)$', '$3 + f\'(x)$', '$3f(x) \\cdot f\'(x)$'],
    explanation: 'Konstanten kan tas utenfor: $(c \\cdot f(x))\' = c \\cdot f\'(x)$.',
  },
  {
    question: 'Hva er $(f(x) + g(x))\'$?',
    options: ['$f\'(x) + g\'(x)$', '$f\'(x) \\cdot g\'(x)$', '$(f + g) \\cdot (f\' + g\')$', '$f(x) + g\'(x)$'],
    explanation: 'Summeregelen: Derivert av sum er summen av deriverte.',
  },
  {
    question: 'Deriver $f(x) = x^2 \\cdot e^x$ ved produktregelen.',
    options: ['$e^x(2x + x^2)$', '$2x \\cdot e^x$', '$x^2 \\cdot e^x$', '$e^x(x^2 - 2x)$'],
    explanation: '$(x^2)\' \\cdot e^x + x^2 \\cdot (e^x)\' = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(2x + x^2)$.',
  },
  {
    question: 'Hva er $f\'(1)$ for $f(x) = x^3 - 3x + 2$?',
    options: ['$0$', '$3$', '$2$', '$-2$'],
    explanation: '$f\'(x) = 3x^2 - 3$. $f\'(1) = 3(1)^2 - 3 = 3 - 3 = 0$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = x^{-2}$?',
    options: ['$-2x^{-3}$', '$-2x^{-1}$', '$2x^{-3}$', '$x^{-3}$'],
    explanation: 'Potensregelen: $(-2) \\cdot x^{-2-1} = -2x^{-3} = -\\frac{2}{x^3}$.',
  },
],


  's1-3-3': [
  {
    question: 'Hva er kjerneregelen for derivasjon?',
    options: ['$[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$', '$[f(g(x))]\' = f\'(x) \\cdot g\'(x)$', '$[f(g(x))]\' = f(g\'(x))$', '$[f(g(x))]\' = f\'(g\'(x))$'],
    explanation: 'Kjerneregelen sier at den deriverte av en sammensatt funksjon er ytre derivert ganger indre derivert.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = (2x + 1)^5$?',
    options: ['$10(2x + 1)^4$', '$5(2x + 1)^4$', '$(2x + 1)^4$', '$5 \\cdot 2x^4$'],
    explanation: 'Kjerneregelen: $5(2x + 1)^4 \\cdot 2 = 10(2x + 1)^4$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = e^{3x}$?',
    options: ['$3e^{3x}$', '$e^{3x}$', '$3x \\cdot e^{3x-1}$', '$e^3$'],
    explanation: 'Kjerneregelen med $f(u) = e^u$ og $u = 3x$: $e^{3x} \\cdot 3 = 3e^{3x}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\ln(x^2 + 1)$?',
    options: ['$\\frac{2x}{x^2 + 1}$', '$\\frac{1}{x^2 + 1}$', '$2x \\cdot \\ln(x^2)$', '$\\ln(2x)$'],
    explanation: 'Kjerneregelen: $\\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2 + 1}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sqrt{4x - 3}$?',
    options: ['$\\frac{2}{\\sqrt{4x - 3}}$', '$\\frac{1}{2\\sqrt{4x - 3}}$', '$\\frac{4}{\\sqrt{4x - 3}}$', '$\\sqrt{4}$'],
    explanation: '$f(x) = (4x-3)^{1/2}$. Derivert: $\\frac{1}{2}(4x-3)^{-1/2} \\cdot 4 = \\frac{2}{\\sqrt{4x-3}}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sin(2x)$?',
    options: ['$2\\cos(2x)$', '$\\cos(2x)$', '$-\\sin(2x)$', '$2\\sin(2x)$'],
    explanation: 'Kjerneregelen: $\\cos(2x) \\cdot 2 = 2\\cos(2x)$.',
  },
  {
    question: 'Hva er «kjernen» i $f(x) = (x^2 - 3x)^4$?',
    options: ['$x^2 - 3x$', '$4$', '$(x^2 - 3x)^4$', '$x$'],
    explanation: 'Kjernen er det «indre» uttrykket: her $u = x^2 - 3x$, og funksjonen er $u^4$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = e^{-x^2}$?',
    options: ['$-2x \\cdot e^{-x^2}$', '$e^{-x^2}$', '$-2x$', '$-x^2 \\cdot e^{-x^2 - 1}$'],
    explanation: 'Kjerneregelen: $e^{-x^2} \\cdot (-2x) = -2x \\cdot e^{-x^2}$.',
  },
  {
    question: 'Deriver $f(x) = \\ln(2x)$.',
    options: ['$\\frac{1}{x}$', '$\\frac{2}{x}$', '$\\frac{1}{2x}$', '$\\ln 2$'],
    explanation: 'Kjerneregelen: $\\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. (Eller: $\\ln(2x) = \\ln 2 + \\ln x$, og $(\\ln x)\' = \\frac{1}{x}$.)',
  },
  {
    question: 'Hva er den deriverte av $f(x) = (3x + 1)^{-2}$?',
    options: ['$\\frac{-6}{(3x + 1)^3}$', '$\\frac{-2}{(3x + 1)^3}$', '$\\frac{6}{(3x + 1)^3}$', '$-2(3x + 1)^{-3}$'],
    explanation: 'Potens- og kjerneregel: $-2(3x + 1)^{-3} \\cdot 3 = \\frac{-6}{(3x + 1)^3}$.',
  },
  {
    question: 'Deriver $f(x) = \\cos(x^3)$.',
    options: ['$-3x^2 \\sin(x^3)$', '$-\\sin(x^3)$', '$3x^2 \\cos(x^3)$', '$-x^3 \\sin(x^2)$'],
    explanation: 'Kjerneregelen: $-\\sin(x^3) \\cdot 3x^2 = -3x^2 \\sin(x^3)$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sqrt{1 - x^2}$?',
    options: ['$\\frac{-x}{\\sqrt{1 - x^2}}$', '$\\frac{1}{2\\sqrt{1 - x^2}}$', '$\\frac{-2x}{\\sqrt{1 - x^2}}$', '$-\\sqrt{1 - x^2}$'],
    explanation: '$f(x) = (1 - x^2)^{1/2}$. Derivert: $\\frac{1}{2}(1 - x^2)^{-1/2} \\cdot (-2x) = \\frac{-x}{\\sqrt{1 - x^2}}$.',
  },
  {
    question: 'Deriver $f(x) = e^{\\sin x}$.',
    options: ['$\\cos x \\cdot e^{\\sin x}$', '$e^{\\cos x}$', '$\\sin x \\cdot e^{\\sin x}$', '$e^{\\sin x - 1}$'],
    explanation: 'Kjerneregelen: $e^{\\sin x} \\cdot \\cos x = \\cos x \\cdot e^{\\sin x}$.',
  },
  {
    question: 'Hva er $(\\ln(\\ln x))\'$?',
    options: ['$\\frac{1}{x \\ln x}$', '$\\frac{1}{\\ln x}$', '$\\frac{\\ln x}{x}$', '$\\frac{1}{x}$'],
    explanation: 'Kjerneregelen: ytre derivert $\\frac{1}{\\ln x}$ ganger indre derivert $\\frac{1}{x}$ = $\\frac{1}{x \\ln x}$.',
  },
],


  's1-3-4': [
  {
    question: 'Hva kjennetegner et stasjonært punkt?',
    options: ['$f\'(x) = 0$', '$f(x) = 0$', '$f\'\'(x) = 0$', '$f(x) = f\'(x)$'],
    explanation: 'Et stasjonært punkt er der den deriverte er null.',
  },
  {
    question: 'Hvordan avgjør man om et stasjonært punkt er et maksimum?',
    options: ['$f\'\' < 0$ i punktet', '$f\'\' > 0$ i punktet', '$f\' > 0$ i punktet', '$f = 0$ i punktet'],
    explanation: 'Hvis den andrederiverte er negativ, har vi et lokalt maksimum (kurven er konkav ned).',
  },
  {
    question: 'Hva er et vendepunkt?',
    options: ['Et punkt der krumningen skifter fortegn', 'Et punkt der funksjonen er null', 'Et punkt der den deriverte er null', 'Et punkt der funksjonen skifter fortegn'],
    explanation: 'I et vendepunkt går grafen fra å være konkav til å være konveks (eller omvendt).',
  },
  {
    question: 'Hvis $f\'(x) > 0$ for alle $x$ i et intervall, hva kan vi si om $f$?',
    options: ['$f$ er stigende i intervallet', '$f$ er fallende i intervallet', '$f$ er konstant', '$f$ har et toppunkt'],
    explanation: 'Positiv derivert betyr at funksjonen er stigende.',
  },
  {
    question: 'Hva forteller den andrederiverte $f\'\'(x)$ oss?',
    options: ['Om funksjonen er konkav eller konveks', 'Om funksjonen er positiv eller negativ', 'Om funksjonen har nullpunkter', 'Stigningstallet i hvert punkt'],
    explanation: '$f\'\' > 0$ betyr konveks (smiler), $f\'\' < 0$ betyr konkav (sur).',
  },
  {
    question: 'Finn de stasjonære punktene til $f(x) = x^3 - 3x$.',
    options: ['$x = -1$ og $x = 1$', '$x = 0$ og $x = 3$', '$x = 1$ og $x = 3$', 'Bare $x = 0$'],
    explanation: '$f\'(x) = 3x^2 - 3 = 3(x^2 - 1) = 0$ gir $x = \\pm 1$.',
  },
  {
    question: 'Hvis $f\'(a) = 0$ og $f\'\'(a) > 0$, hva slags punkt er $x = a$?',
    options: ['Lokalt minimum', 'Lokalt maksimum', 'Vendepunkt', 'Sadelpunkt'],
    explanation: 'Positiv andrederiverte betyr at kurven er konveks (smiler), så vi har et bunnpunkt.',
  },
  {
    question: 'Hva er nødvendig betingelse for et vendepunkt?',
    options: ['$f\'\'(x) = 0$', '$f\'(x) = 0$', '$f(x) = 0$', '$f\'(x) = f\'\'(x)$'],
    explanation: 'Vendepunkt krever at andrederiverten er null (og skifter fortegn).',
  },
  {
    question: 'For $f(x) = x^4$, er $x = 0$ et ekstremalpunkt?',
    options: ['Ja, et minimum', 'Ja, et maksimum', 'Nei, det er et vendepunkt', 'Nei, det er ingenting spesielt'],
    explanation: '$f\'(0) = 0$, $f\'\'(0) = 0$, men $f(x) \\geq 0$ for alle $x$, og $f(0) = 0$. Det er et globalt minimum.',
  },
  {
    question: 'Hva er fortegnslinjemetoden for å klassifisere stasjonære punkter?',
    options: ['Undersøk fortegnet til $f\'(x)$ på hver side av punktet', 'Undersøk fortegnet til $f(x)$', 'Beregn $f\'\'(x)$ i punktet', 'Finn nullpunktene til $f\'\'(x)$'],
    explanation: 'Hvis $f\'$ går fra $+$ til $-$, er det maksimum. Hvis $f\'$ går fra $-$ til $+$, er det minimum.',
  },
  {
    question: 'Hvor mange vendepunkter har $f(x) = x^3$?',
    options: ['$1$ (i $x = 0$)', '$0$', '$2$', '$3$'],
    explanation: '$f\'\'(x) = 6x = 0$ gir $x = 0$. Sjekk: $f\'\'$ skifter fortegn i $x = 0$, så det er ett vendepunkt.',
  },
  {
    question: 'For $f(x) = x^2 - 4x + 3$, finn koordinatene til bunnpunktet.',
    options: ['$(2, -1)$', '$(2, 1)$', '$(4, 3)$', '$(-2, 15)$'],
    explanation: '$f\'(x) = 2x - 4 = 0$ gir $x = 2$. $f(2) = 4 - 8 + 3 = -1$. Bunnpunkt: $(2, -1)$.',
  },
  {
    question: 'Hva er den globale maksimumsverdien til $f(x) = -x^2 + 6x - 5$?',
    options: ['$4$', '$5$', '$6$', '$9$'],
    explanation: '$f\'(x) = -2x + 6 = 0$ gir $x = 3$. $f(3) = -9 + 18 - 5 = 4$.',
  },
  {
    question: 'For hvilke verdier av $x$ er $f(x) = x^3 - 6x^2 + 9x + 1$ stigende?',
    options: ['$x < 1$ eller $x > 3$', '$1 < x < 3$', '$x > 0$', 'Alltid'],
    explanation: '$f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) > 0$ for $x < 1$ eller $x > 3$.',
  },
],


  's1-3-5': [
  {
    question: 'Hva er første steg i å løse et optimaliseringsproblem?',
    options: ['Sette opp en funksjon som skal optimaliseres', 'Derivere funksjonen', 'Finne nullpunkter', 'Tegne grafen'],
    explanation: 'Man må først sette opp funksjonen som uttrykker det som skal maksimeres eller minimeres.',
  },
  {
    question: 'Når man skal finne maksimal verdi av $f$ på et lukket intervall $[a, b]$, hva må man sjekke?',
    options: ['Stasjonære punkter og endepunktene $a$ og $b$', 'Bare stasjonære punkter', 'Bare endepunktene', 'Bare der $f\'\'(x) = 0$'],
    explanation: 'På et lukket intervall kan maksimum være i et stasjonært punkt eller i endepunktene.',
  },
  {
    question: 'En bedrift har kostnadsfunksjon $K(x) = x^2 + 10x + 100$ og inntektsfunksjon $I(x) = 50x$. Ved hvilken $x$ er overskuddet maksimalt?',
    options: ['$x = 20$', '$x = 50$', '$x = 10$', '$x = 25$'],
    explanation: 'Overskudd $O(x) = I(x) - K(x) = 50x - x^2 - 10x - 100 = -x^2 + 40x - 100$. $O\'(x) = -2x + 40 = 0$ gir $x = 20$.',
  },
  {
    question: 'Hva er en bibetingelse i et optimaliseringsproblem?',
    options: ['En ekstra likning som variablene må tilfredsstille', 'Den funksjonen som skal maksimeres', 'En ulikhet som må være brutt', 'Svåret på problemet'],
    explanation: 'En bibetingelse er en restriksjon som begrenser de mulige verdiene for variablene.',
  },
  {
    question: 'Hvis et rektangel har omkrets $20$ og vi vil maksimere arealet, hvå blir sidelengdene?',
    options: ['$5$ og $5$ (kvadrat)', '$10$ og $0$', '$6$ og $4$', '$7$ og $3$'],
    explanation: 'Med omkrets $2a + 2b = 20$, så $b = 10-a$. Areal $A = a(10-a) = 10a - a^2$. $A\'(a) = 10-2a = 0$ gir $a = 5, b = 5$.',
  },
  {
    question: 'En bonde vil gjerde inn et rektangulært område mot en elv (trenger ikke gjerde der). Han har $100$ m gjerde. Hva blir maksimalt areal?',
    options: ['$1250$ m²', '$2500$ m²', '$625$ m²', '$1000$ m²'],
    explanation: 'Tre sider: $2x + y = 100$, så $y = 100 - 2x$. Areal $A = xy = x(100-2x) = 100x - 2x^2$. $A\'(x) = 100 - 4x = 0$ gir $x = 25$. $A = 25 \\cdot 50 = 1250$ m².',
  },
  {
    question: 'Finn den minste summen av et positivt tall og dets resiproke.',
    options: ['$2$', '$1$', '$0$', '$4$'],
    explanation: 'Minimer $f(x) = x + \\frac{1}{x}$ for $x > 0$. $f\'(x) = 1 - \\frac{1}{x^2} = 0$ gir $x = 1$. $f(1) = 1 + 1 = 2$.',
  },
  {
    question: 'En sylinder skal ha volum $100\\pi$ cm³. Hvilket forhold mellom høyde $h$ og radius $r$ gir minst overflate?',
    options: ['$h = 2r$ (høyde = diameter)', '$h = r$', '$h = 3r$', '$h = \\frac{r}{2}$'],
    explanation: 'Med $V = \\pi r^2 h = 100\\pi$ får vi $h = \\frac{100}{r^2}$. Overflate $S = 2\\pi r^2 + 2\\pi r h$. Optimalisering gir $h = 2r$.',
  },
  {
    question: 'Finn maksimalverdien til $f(x) = x(4 - x)$ på intervallet $[0, 4]$.',
    options: ['$4$', '$0$', '$2$', '$8$'],
    explanation: '$f(x) = 4x - x^2$. $f\'(x) = 4 - 2x = 0$ gir $x = 2$. $f(2) = 2 \\cdot 2 = 4$. Endepunkter: $f(0) = f(4) = 0$. Maks $= 4$.',
  },
  {
    question: 'Hva er minste avstand fra punktet $(0, 4)$ til parabelen $y = x^2$?',
    options: ['$\\sqrt{7}$', '$4$', '$2$', '$\\sqrt{15}$'],
    explanation: 'Minimer $D^2 = x^2 + (x^2 - 4)^2$. Derivasjon og løsning gir $x^2 = \\frac{7}{2}$. $D = \\sqrt{7}$ etter førenkling.',
  },
  {
    question: 'Ved maksimalt overskudd gjelder:',
    options: ['Grenseinntekt = grensekostnad', 'Inntekt = kostnad', 'Pris = kostnad per enhet', 'Grensekostnad = 0'],
    explanation: 'Overskuddet $O(x) = I(x) - K(x)$ er maksimalt når $O\'(x) = I\'(x) - K\'(x) = 0$, altså $I\'(x) = K\'(x)$.',
  },
  {
    question: 'En kule kastes opp. Høyden er $h(t) = 20t - 5t^2$ meter. Når er kulen høyest?',
    options: ['$t = 2$ sekunder', '$t = 4$ sekunder', '$t = 1$ sekund', '$t = 5$ sekunder'],
    explanation: '$h\'(t) = 20 - 10t = 0$ gir $t = 2$ sekunder.',
  },
  {
    question: 'I forrige oppgave, hva er maksimal høyde?',
    options: ['$20$ meter', '$40$ meter', '$10$ meter', '$25$ meter'],
    explanation: '$h(2) = 20(2) - 5(4) = 40 - 20 = 20$ meter.',
  },
],


  's1-4-1': [
  {
    question: 'Hva er formelen for overskudd (profitt)?',
    options: ['$O = I - K$', '$O = K - I$', '$O = I \\cdot K$', '$O = \\frac{I}{K}$'],
    explanation: 'Overskudd er det som blir igjen når kostnadene trekkes fra inntektene: $O = I - K$.',
  },
  {
    question: 'Hva er inntektsfunksjonen hvis prisen er $p$ og antall solgte enheter er $x$?',
    options: ['$I(x) = p \\cdot x$', '$I(x) = p + x$', '$I(x) = \\frac{p}{x}$', '$I(x) = p - x$'],
    explanation: 'Inntekt er pris ganger antall enheter: $I(x) = p \\cdot x$.',
  },
  {
    question: 'Hva er faste kostnader?',
    options: ['Kostnader som ikke avhenger av produksjonsmengden', 'Kostnader som øker med produksjon', 'Kostnader per enhet', 'Variable kostnader'],
    explanation: 'Faste kostnader (f.eks. husleie) påløper uavhengig av hvor mye som produseres.',
  },
  {
    question: 'Hvis $K(x) = 200 + 5x$, hva er den variable kostnaden per enhet?',
    options: ['$5$', '$200$', '$205$', '$5x$'],
    explanation: '$5x$ er den variable delen, så $5$ er kostnaden per enhet. $200$ er fast kostnad.',
  },
  {
    question: 'Ved hvilken produksjonsmengde er det nullpunktsomsetning (break-even)?',
    options: ['Der overskuddet er null: $I(x) = K(x)$', 'Der inntekten er maksimal', 'Der kostnaden er minimal', 'Der prisen er lik kostnaden'],
    explanation: 'Nullpunktsomsetning er når inntekt og kostnad er like, altså overskudd $= 0$.',
  },
  {
    question: 'En bedrift har $K(x) = 1000 + 20x$ og selger for $50$ kr per enhet. Finn break-even punktet.',
    options: ['$x \\approx 33$ enheter', '$x = 50$ enheter', '$x = 20$ enheter', '$x = 100$ enheter'],
    explanation: '$I(x) = 50x = K(x) = 1000 + 20x$ gir $30x = 1000$, så $x \\approx 33{,}3 \\approx 34$ enheter.',
  },
  {
    question: 'Hva er overskuddet for $x = 100$ hvis $I(x) = 80x$ og $K(x) = 500 + 50x$?',
    options: ['$2500$ kr', '$3000$ kr', '$8000$ kr', '$5500$ kr'],
    explanation: '$O(100) = I(100) - K(100) = 8000 - (500 + 5000) = 8000 - 5500 = 2500$ kr.',
  },
  {
    question: 'Hvis prisen avhenger av mengden: $p(x) = 100 - 2x$, hva er inntektsfunksjonen?',
    options: ['$I(x) = 100x - 2x^2$', '$I(x) = 100 - 2x$', '$I(x) = 100x$', '$I(x) = (100 - 2x)/x$'],
    explanation: '$I(x) = p(x) \\cdot x = (100 - 2x) \\cdot x = 100x - 2x^2$.',
  },
  {
    question: 'Hva er bidragsyevnen (contribution margin) per enhet?',
    options: ['Pris minus variabel kostnad per enhet', 'Pris minus total kostnad', 'Inntekt delt på antall', 'Fast kostnad delt på antall'],
    explanation: 'Bidragsyevnen er $p - VK_{\\text{per enhet}}$, det som blir igjen til å dekke faste kostnader og gi overskudd.',
  },
  {
    question: 'En vare koster $30$ kr per stk og selges for $50$ kr. Faste kostnader er $2000$ kr. Hvor mange må selges for break-even?',
    options: ['$100$ stk', '$50$ stk', '$40$ stk', '$67$ stk'],
    explanation: 'Bidrag per enhet: $50 - 30 = 20$ kr. For å dekke $2000$ kr faste kostnader: $2000/20 = 100$ stk.',
  },
  {
    question: 'Hva menes med «dekningsbidrag»?',
    options: ['Inntekt minus variable kostnader', 'Inntekt minus alle kostnader', 'Faste kostnader', 'Overskudd per enhet'],
    explanation: 'Dekningsbidrag = $I - VK$. Dette skal dekke faste kostnader og gi overskudd.',
  },
  {
    question: 'Hvis $K(x) = 2000 + 10x + 0{,}01x^2$, hvilken kostnadstype representerer $0{,}01x^2$?',
    options: ['Progressiv variabel kostnad', 'Fast kostnad', 'Lineær variabel kostnad', 'Dekningsbidrag'],
    explanation: 'Leddet $0{,}01x^2$ vokser mer enn proporsjonalt med $x$, noe som indikerer progressive variable kostnader.',
  },
],


  's1-4-2': [
  {
    question: 'Hva er grensekostnaden?',
    options: ['Den deriverte av kostnadsfunksjonen: $K\'(x)$', 'Den totale kostnaden delt på antall enheter', 'Kostnaden for den første enheten', 'Faste kostnader delt på $x$'],
    explanation: 'Grensekostnaden $K\'(x)$ angir tilnærmet kostnad for å produsere én enhet til.',
  },
  {
    question: 'Ved hvilken produksjonsmengde er overskuddet maksimalt?',
    options: ['Der grenseinntekt = grensekostnad: $I\'(x) = K\'(x)$', 'Der grenseinntekt $= 0$', 'Der grensekostnad $= 0$', 'Der $I(x) = K(x)$'],
    explanation: 'Maksimalt overskudd oppnås når $I\'(x) = K\'(x)$, dvs. når $O\'(x) = 0$.',
  },
  {
    question: 'Hvis grenseinntekten er større enn grensekostnaden, bør man:',
    options: ['Øke produksjonen', 'Redusere produksjonen', 'Holde produksjonen konstant', 'Stoppe produksjonen'],
    explanation: 'Når $I\'(x) > K\'(x)$ gir det overskudd å produsere mer.',
  },
  {
    question: 'Hva er enhetskostnaden?',
    options: ['Total kostnad delt på antall: $\\frac{K(x)}{x}$', '$K\'(x)$', '$K(x) \\cdot x$', 'Faste kostnader alene'],
    explanation: 'Enhetskostnaden er gjennomsnittlig kostnad per enhet: $\\frac{K(x)}{x}$.',
  },
  {
    question: 'Når er enhetskostnaden minimal?',
    options: ['Når enhetskostnad = grensekostnad: $\\frac{K(x)}{x} = K\'(x)$', 'Når grensekostnaden er null', 'Når produksjonen er null', 'Når inntekten er maksimal'],
    explanation: 'Minste enhetskostnad oppnås når grensekostnaden skjærer enhetskostnadskurven.',
  },
  {
    question: 'Hvis $K(x) = 800 + 20x + 0{,}5x^2$, hva er grensekostnaden $K\'(x)$?',
    options: ['$20 + x$', '$20 + 0{,}5x$', '$800 + 20$', '$0{,}5x$'],
    explanation: '$K\'(x) = 20 + 2 \\cdot 0{,}5x = 20 + x$.',
  },
  {
    question: 'Hva er grensekostnaden ved $x = 10$ i forrige oppgave?',
    options: ['$30$ kr', '$20$ kr', '$25$ kr', '$10$ kr'],
    explanation: '$K\'(10) = 20 + 10 = 30$ kr.',
  },
  {
    question: 'Grenseinntekten for en monopolist med $I(x) = 100x - x^2$ er:',
    options: ['$100 - 2x$', '$100$', '$100 - x$', '$-2x$'],
    explanation: '$I\'(x) = 100 - 2x$.',
  },
  {
    question: 'Med $I\'(x) = 100 - 2x$ og $K\'(x) = 20 + x$, ved hvilken $x$ er overskuddet maksimalt?',
    options: ['$x \\approx 27$', '$x = 50$', '$x = 20$', '$x = 40$'],
    explanation: '$I\'(x) = K\'(x)$: $100 - 2x = 20 + x$ gir $80 = 3x$, så $x \\approx 26{,}67 \\approx 27$.',
  },
  {
    question: 'Hva er enhetskostnaden ved $x = 20$ hvis $K(x) = 400 + 10x$?',
    options: ['$30$ kr', '$10$ kr', '$20$ kr', '$410$ kr'],
    explanation: '$E(20) = \\frac{K(20)}{20} = \\frac{400 + 200}{20} = \\frac{600}{20} = 30$ kr.',
  },
  {
    question: 'Hvorfor synker enhetskostnaden først når produksjonen øker?',
    options: ['Faste kostnader fordeles på flere enheter', 'Variable kostnader synker', 'Prisen øker', 'Grensekostnaden er negativ'],
    explanation: 'Stordriftsfordeler: Når produksjonen øker, fordeles de faste kostnadene på flere enheter.',
  },
  {
    question: 'Hva er grenseoverskuddet $O\'(x)$?',
    options: ['$I\'(x) - K\'(x)$', '$I(x) - K(x)$', '$I\'(x) + K\'(x)$', '$\\frac{I(x)}{K(x)}$'],
    explanation: 'Grenseoverskudd = grenseinntekt minus grensekostnad = $I\'(x) - K\'(x)$.',
  },
],


  's1-4-3': [
  {
    question: 'Hva beskriver en etterspørselsfunksjon?',
    options: ['Sammenhengen mellom pris og etterspurt mengde', 'Sammenhengen mellom kostnad og produksjon', 'Sammenhengen mellom tid og salg', 'Sammenhengen mellom tilbud og profitt'],
    explanation: 'Etterspørselsfunksjonen viser hvor mye forbrukerne vil kjøpe ved ulike priser.',
  },
  {
    question: 'Hva er formelen for priselastisitet?',
    options: ['$E = \\frac{\\text{prosentvis endring i mengde}}{\\text{prosentvis endring i pris}}$', '$E = \\frac{\\text{pris}}{\\text{mengde}}$', '$E = \\frac{\\text{mengde}}{\\text{pris}}$', '$E = \\Delta p \\cdot \\Delta x$'],
    explanation: 'Priselastisiteten måler hvor sensitiv etterspørselen er for prisendringer.',
  },
  {
    question: 'Hvis priselastisiteten $|E| > 1$, hva kalles etterspørselen?',
    options: ['Elastisk', 'Uelastisk', 'Enhets-elastisk', 'Perfekt elastisk'],
    explanation: 'Når $|E| > 1$ er etterspørselen elastisk - mengden endrer seg prosentvis mer enn prisen.',
  },
  {
    question: 'Hva skjer med inntekten ved prisøkning hvis etterspørselen er elastisk ($|E| > 1$)?',
    options: ['Inntekten synker', 'Inntekten øker', 'Inntekten er uendret', 'Inntekten dobles'],
    explanation: 'Med elastisk etterspørsel fører prisøkning til så stor nedgang i mengde at inntekten synker.',
  },
  {
    question: 'Ved hvilken elastisitet er inntekten maksimal?',
    options: ['$|E| = 1$ (enhets-elastisk)', '$|E| = 0$', '$|E| = \\infty$', '$|E| = 2$'],
    explanation: 'Inntekten er maksimal når $|E| = 1$, fordi da er $I\'(p) = 0$.',
  },
  {
    question: 'Hva er punktelastisiteten $E_p$ uttrykt ved derivasjon?',
    options: ['$E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp}$', '$E_p = \\frac{dx}{dp}$', '$E_p = \\frac{dp}{dx}$', '$E_p = p \\cdot x$'],
    explanation: 'Punktelastisiteten er $E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp}$, der $\\frac{dx}{dp}$ er den deriverte av etterspørsel mhp. pris.',
  },
  {
    question: 'Etterspørsel: $x = 100 - 2p$. Hva er elastisiteten ved $p = 30$?',
    options: ['$E = -1{,}5$', '$E = -0{,}5$', '$E = -3$', '$E = -1$'],
    explanation: '$x(30) = 100 - 60 = 40$. $\\frac{dx}{dp} = -2$. $E = \\frac{30}{40} \\cdot (-2) = -1{,}5$.',
  },
  {
    question: 'Hvorfor er priselastisiteten vanligvis negativ?',
    options: ['Fordi etterspørselen synker når prisen øker', 'Fordi tilbudet synker', 'Fordi prisen er negativ', 'Det er den ikke'],
    explanation: 'Etterspørsel og pris beveger seg normalt i motsatt retning (loven om etterspørsel), så $\\frac{dx}{dp} < 0$.',
  },
  {
    question: 'Hvis $|E| = 0{,}5$ (uelastisk) og prisen øker $10\\%$, hvor mye endres mengden?',
    options: ['Mengden synker $5\\%$', 'Mengden synker $10\\%$', 'Mengden synker $20\\%$', 'Mengden øker $5\\%$'],
    explanation: '$|E| = 0{,}5$ betyr at prosentvis endring i mengde er halvparten av prosentvis endring i pris: $0{,}5 \\times 10\\% = 5\\%$ nedgang.',
  },
  {
    question: 'Hvilke varer har typisk uelastisk etterspørsel ($|E| < 1$)?',
    options: ['Nødvendighetsvarer (mat, medisiner)', 'Luksusvarer', 'Varer med mange substitutter', 'Fritidsprodukter'],
    explanation: 'Nødvendighetsvarer har uelastisk etterspørsel fordi folk kjøper dem uansett prisendringer.',
  },
  {
    question: 'Hva skjer med inntekten ved prisøkning hvis etterspørselen er uelastisk ($|E| < 1$)?',
    options: ['Inntekten øker', 'Inntekten synker', 'Inntekten er uendret', 'Kan ikke avgjøres'],
    explanation: 'Med uelastisk etterspørsel synker mengden mindre enn prisen øker, så totalinntekten øker.',
  },
  {
    question: 'Inntektsfunksjonen $I(p) = p \\cdot x(p)$. Ved maksimal inntekt er $I\'(p) = 0$. Hva innebærer dette for elastisiteten?',
    options: ['$E = -1$ (enhets-elastisk)', '$E = 0$', '$E = -2$', '$E = 1$'],
    explanation: 'Det kan vises at $I\'(p) = x(1 + E) = 0$ gir $E = -1$ (eller $|E| = 1$) ved maks inntekt.',
  },
],


  's1-5-1': [
  {
    question: 'Hva er $5!$ (5 fakultet)?',
    options: ['$120$', '$25$', '$15$', '$5$'],
    explanation: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
  },
  {
    question: 'På hvor mange måter kan 4 personer stilles opp i en rekke?',
    options: ['$24$', '$16$', '$4$', '$10$'],
    explanation: 'Antall permutasjoner av 4 elementer er $4! = 24$.',
  },
  {
    question: 'Hvor mange måter kan man velge 3 personer fra en gruppe på 7?',
    options: ['$35$', '$21$', '$210$', '$343$'],
    explanation: '$\\binom{7}{3} = \\frac{7!}{3! \\cdot 4!} = 35$. Rekkefølgen spiller ingen rolle.',
  },
  {
    question: 'Hva er forskjellen mellom permutasjon og kombinasjon?',
    options: ['I permutasjon teller rekkefølge, i kombinasjon gjør det ikke', 'I kombinasjon teller rekkefølge, i permutasjon gjør det ikke', 'Det er ingen forskjell', 'Permutasjon brukes kun for tall'],
    explanation: 'Permutasjon: rekkefølge betyr noe (ABC $\\neq$ CBA). Kombinasjon: rekkefølge betyr ikke noe.',
  },
  {
    question: 'Hva er formelen for kombinasjoner $\\binom{n}{k}$?',
    options: ['$\\frac{n!}{k!(n-k)!}$', '$\\frac{n!}{k!}$', '$n^k$', '$\\frac{k!}{(n-k)!}$'],
    explanation: '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ gir antall måter å velge $k$ elementer fra $n$.',
  },
  {
    question: 'Hva er $0!$?',
    options: ['$1$', '$0$', 'Udefinert', '$-1$'],
    explanation: 'Per definisjon er $0! = 1$.',
  },
  {
    question: 'Hva er $\\binom{5}{2}$?',
    options: ['$10$', '$20$', '$5$', '$25$'],
    explanation: '$\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\cdot 6} = 10$.',
  },
  {
    question: 'Hva er $\\binom{n}{0}$ for alle $n \\geq 0$?',
    options: ['$1$', '$0$', '$n$', 'Udefinert'],
    explanation: '$\\binom{n}{0} = \\frac{n!}{0! \\cdot n!} = 1$. Det er bare én måte å velge ingen elementer.',
  },
  {
    question: 'På hvor mange måter kan 3 bøker plasseres på en hylle?',
    options: ['$6$', '$3$', '$9$', '$27$'],
    explanation: 'Permutasjon: $3! = 6$ måter.',
  },
  {
    question: 'En pizza-meny har 8 toppinger. Hvor mange ulike 3-toppings-pizzaer kan lages?',
    options: ['$56$', '$336$', '$24$', '$512$'],
    explanation: 'Kombinasjon (rekkefølge spiller ikke rolle): $\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = 56$.',
  },
  {
    question: 'Hva er multiplikasjonsprinsippet?',
    options: ['Hvis valg A kan gjøres på $m$ måter og valg B på $n$ måter, er totalt antall $m \\cdot n$', 'Antall valg er $m + n$', 'Antall valg er $\\frac{m}{n}$', 'Antall valg er $m^n$'],
    explanation: 'Multiplikasjonsprinsippet: Uavhengige valg multipliseres for å finne totalt antall.',
  },
  {
    question: 'En PIN-kode har 4 siffer (0-9). Hvor mange mulige PIN-koder finnes?',
    options: ['$10\\,000$', '$10\\,000 - 1 = 9\\,999$', '$40$', '$5\\,040$'],
    explanation: 'Hver posisjon har 10 valg: $10^4 = 10\\,000$ PIN-koder.',
  },
  {
    question: 'Hva er $\\binom{n}{k} + \\binom{n}{k+1}$?',
    options: ['$\\binom{n+1}{k+1}$', '$\\binom{n+1}{k}$', '$\\binom{n}{k+1}$', '$2\\binom{n}{k}$'],
    explanation: 'Pascals identitet: $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$.',
  },
  {
    question: 'Fra en kortstokk på 52 kort, på hvor mange måter kan man trekke 5 kort?',
    options: ['$\\binom{52}{5} = 2\\,598\\,960$', '$52^5$', '$52!$', '$52 \\cdot 5$'],
    explanation: 'Kombinasjon siden rekkefølgen ikke betyr noe: $\\binom{52}{5} = 2\\,598\\,960$.',
  },
],


  's1-5-2': [
  {
    question: 'Hva er betinget sannsynlighet $P(A|B)$?',
    options: ['Sannsynligheten for $A$ gitt at $B$ har skjedd', 'Sannsynligheten for $A$ og $B$', 'Sannsynligheten for $A$ eller $B$', 'Sannsynligheten for $B$ gitt $A$'],
    explanation: '$P(A|B)$ er sannsynligheten for $A$ når vi vet at $B$ har inntruffet.',
  },
  {
    question: 'Hva er formelen for $P(A|B)$?',
    options: ['$\\frac{P(A \\cap B)}{P(B)}$', '$P(A) \\cdot P(B)$', '$P(A) + P(B)$', '$\\frac{P(A)}{P(B)}$'],
    explanation: '$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$, forutsatt at $P(B) > 0$.',
  },
  {
    question: 'To hendelser $A$ og $B$ er uavhengige hvis:',
    options: ['$P(A|B) = P(A)$', '$P(A|B) = P(B)$', '$P(A \\cap B) = 0$', '$P(A) + P(B) = 1$'],
    explanation: 'Uavhengighet betyr at informasjon om $B$ ikke påvirker sannsynligheten for $A$.',
  },
  {
    question: 'Multiplikasjonsregelen sier at $P(A \\cap B) = $?',
    options: ['$P(A) \\cdot P(B|A)$', '$P(A) + P(B)$', '$P(A) \\cdot P(B)$ alltid', '$P(A|B) + P(B|A)$'],
    explanation: '$P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$.',
  },
  {
    question: 'Hvis $P(A) = 0{,}3$ og $P(B|A) = 0{,}5$, hva er $P(A \\cap B)$?',
    options: ['$0{,}15$', '$0{,}8$', '$0{,}35$', '$0{,}6$'],
    explanation: '$P(A \\cap B) = P(A) \\cdot P(B|A) = 0{,}3 \\cdot 0{,}5 = 0{,}15$.',
  },
  {
    question: 'To kort trekkes fra en kortstokk uten tilbakelegging. Hva er $P(\\text{2. kort er ess} | \\text{1. kort er ess})$?',
    options: ['$\\frac{3}{51}$', '$\\frac{4}{52}$', '$\\frac{4}{51}$', '$\\frac{3}{52}$'],
    explanation: 'Gitt at første kort er ess, gjenstår $3$ ess av $51$ kort: $P = \\frac{3}{51}$.',
  },
  {
    question: 'Hvis $A$ og $B$ er uavhengige, hva er $P(A \\cap B)$?',
    options: ['$P(A) \\cdot P(B)$', '$P(A) + P(B)$', '$P(A) \\cdot P(B|A)$', '$P(A|B)$'],
    explanation: 'For uavhengige hendelser: $P(A \\cap B) = P(A) \\cdot P(B)$.',
  },
  {
    question: 'Hva er $P(A \\cup B)$ (addisjonsregelen)?',
    options: ['$P(A) + P(B) - P(A \\cap B)$', '$P(A) + P(B)$', '$P(A) \\cdot P(B)$', '$P(A) - P(B)$'],
    explanation: 'For å unngå dobbelttelling: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
  },
  {
    question: '$P(A) = 0{,}4$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$. Er $A$ og $B$ uavhengige?',
    options: ['Ja, fordi $0{,}4 \\cdot 0{,}5 = 0{,}2$', 'Nei, fordi $0{,}4 + 0{,}5 \\neq 0{,}2$', 'Nei, fordi $P(A \\cap B) \\neq 0$', 'Kan ikke avgjøres'],
    explanation: 'Sjekk: $P(A) \\cdot P(B) = 0{,}4 \\cdot 0{,}5 = 0{,}2 = P(A \\cap B)$. Ja, de er uavhengige.',
  },
  {
    question: 'I en urne er 3 røde og 2 blå kuler. To kuler trekkes uten tilbakelegging. Hva er $P(\\text{begge røde})$?',
    options: ['$\\frac{3}{10}$', '$\\frac{9}{25}$', '$\\frac{6}{20}$', '$\\frac{3}{5}$'],
    explanation: '$P = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$.',
  },
  {
    question: 'Hva menes med «disjunkte» (gjensidig utelukkende) hendelser?',
    options: ['$P(A \\cap B) = 0$', '$P(A \\cup B) = 0$', '$P(A) = P(B)$', '$P(A|B) = P(A)$'],
    explanation: 'Disjunkte hendelser kan ikke skje samtidig: $A \\cap B = \\emptyset$, så $P(A \\cap B) = 0$.',
  },
  {
    question: 'For disjunkte hendelser $A$ og $B$, hva er $P(A \\cup B)$?',
    options: ['$P(A) + P(B)$', '$P(A) \\cdot P(B)$', '$P(A) + P(B) - P(A \\cap B)$', '$P(A|B) \\cdot P(B)$'],
    explanation: 'Siden $P(A \\cap B) = 0$ for disjunkte hendelser: $P(A \\cup B) = P(A) + P(B)$.',
  },
  {
    question: 'En mynt kastes 3 ganger. Hva er $P(\\text{minst én mynt})$?',
    options: ['$\\frac{7}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{8}$', '$1$'],
    explanation: '$P(\\text{minst én mynt}) = 1 - P(\\text{ingen mynt}) = 1 - (\\frac{1}{2})^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
],


  's1-5-3': [
  {
    question: 'Hvabrukes Bayes\' setning til?',
    options: ['Å oppdatere sannsynlighet basert på ny informasjon', 'Å finne forventningsverdi', 'Å beregne varians', 'Å finne kombinasjoner'],
    explanation: 'Bayes\' setning lar oss beregne $P(A|B)$ når vi kjenner $P(B|A)$.',
  },
  {
    question: 'Hva er formelen for Bayes\' setning?',
    options: ['$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$', '$P(A|B) = P(A) \\cdot P(B)$', '$P(A|B) = \\frac{P(A)}{P(B)}$', '$P(A|B) = \\frac{P(B)}{P(A)}$'],
    explanation: 'Bayes\' setning: $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$.',
  },
  {
    question: 'I Bayes\' setning, hva kalles $P(A)$?',
    options: ['Prior sannsynlighet', 'Posterior sannsynlighet', 'Likelihood', 'Evidens'],
    explanation: '$P(A)$ er prior (forhånds-) sannsynlighet - vår tro før vi får ny informasjon.',
  },
  {
    question: 'En test for en sykdom er 95% sensitiv og 90% spesifikk. 1% av befolkningen har sykdømmen. Hvis testen er positiv, hva er sannsynligheten for sykdom?',
    options: ['Ca 9%', 'Ca 95%', 'Ca 90%', 'Ca 1%'],
    explanation: 'Bruker Bayes: $P(\\text{syk}|\\text{positiv}) = \\frac{0{,}95 \\cdot 0{,}01}{0{,}95 \\cdot 0{,}01 + 0{,}10 \\cdot 0{,}99} \\approx 8{,}8\\%$.',
  },
  {
    question: 'Hva er loven om total sannsynlighet?',
    options: ['$P(B) = \\sum P(B|A_i) \\cdot P(A_i)$ over alle mulige $A_i$', '$P(B) = P(A) \\cdot P(B)$', '$P(B) = 1 - P(\\overline{B})$', '$P(B) = \\frac{P(A|B)}{P(A)}$'],
    explanation: 'Loven om total sannsynlighet: $P(B) = P(B|A_1)P(A_1) + P(B|A_2)P(A_2) + \\ldots$ for en partisjon.',
  },
  {
    question: 'I Bayes\' setning, hva kalles $P(A|B)$?',
    options: ['Posterior sannsynlighet', 'Prior sannsynlighet', 'Likelihood', 'Marginal sannsynlighet'],
    explanation: '$P(A|B)$ er posterior sannsynlighet - oppdatert tro etter å ha observert $B$.',
  },
  {
    question: 'Hva er «sensitivitet» for en diagnostisk test?',
    options: ['$P(\\text{positiv test}|\\text{syk})$', '$P(\\text{syk}|\\text{positiv test})$', '$P(\\text{negativ test}|\\text{frisk})$', '$P(\\text{frisk}|\\text{negativ test})$'],
    explanation: 'Sensitivitet = sannsynligheten for at testen er positiv gitt at personen faktisk er syk.',
  },
  {
    question: 'Hva er «spesifisitet» for en diagnostisk test?',
    options: ['$P(\\text{negativ test}|\\text{frisk})$', '$P(\\text{frisk}|\\text{negativ test})$', '$P(\\text{positiv test}|\\text{syk})$', '$P(\\text{syk}|\\text{positiv test})$'],
    explanation: 'Spesifisitet = sannsynligheten for at testen er negativ gitt at personen er frisk.',
  },
  {
    question: 'En fabrikk har to maskiner. Maskin A produserer 60% og har 5% defekte. Maskin B produserer 40% og har 3% defekte. En defekt vare velges. Hva er $P(\\text{fra A}|\\text{defekt})$?',
    options: ['$\\frac{0{,}03}{0{,}042} \\approx 71\\%$', '$60\\%$', '$50\\%$', '$5\\%$'],
    explanation: '$P(D) = 0{,}6 \\cdot 0{,}05 + 0{,}4 \\cdot 0{,}03 = 0{,}042$. Bayes: $P(A|D) = \\frac{0{,}6 \\cdot 0{,}05}{0{,}042} \\approx 71\\%$.',
  },
  {
    question: 'Hva betyr det at Bayes\' setning «snur» betingelsen?',
    options: ['Vi finner $P(A|B)$ fra $P(B|A)$', 'Vi bytter $A$ og $B$', 'Vi finner komplementet', 'Vi finner snittet'],
    explanation: 'Bayes lar oss beregne $P(\\text{årsak}|\\text{virkning})$ når vi kjenner $P(\\text{virkning}|\\text{årsak})$.',
  },
  {
    question: 'I forrige maskinoppgave, hva er $P(\\text{defekt})$ (nevneren i Bayes)?',
    options: ['$0{,}042 = 4{,}2\\%$', '$0{,}08 = 8\\%$', '$0{,}05 = 5\\%$', '$0{,}03 = 3\\%$'],
    explanation: 'Total sannsynlighet: $P(D) = P(D|A)P(A) + P(D|B)P(B) = 0{,}05 \\cdot 0{,}6 + 0{,}03 \\cdot 0{,}4 = 0{,}042$.',
  },
  {
    question: 'Hva er en «falsk positiv» i testing?',
    options: ['Testen er positiv, men personen er frisk', 'Testen er negativ, men personen er syk', 'Testen er positiv og personen er syk', 'Testen er negativ og personen er frisk'],
    explanation: 'Falsk positiv: Testen sier «syk» (positiv), men personen er faktisk frisk.',
  },
  {
    question: 'Hvorfor kan en test med 99% sensitivitet og 99% spesifisitet gi lav $P(\\text{syk}|\\text{positiv})$ for sjeldne sykdømmer?',
    options: ['Fordi antall falske positive overstiger antall sanne positive når sykdømmen er sjelden', 'Fordi testen ikke virker', 'Fordi spesifisitet er viktigere enn sensitivitet', 'Det kan den ikke'],
    explanation: 'Ved lav prevalens (sjelden sykdom) blir antallet falske positive stort relativt til antall sanne positive.',
  },
],


};

export default quizData_s1;
