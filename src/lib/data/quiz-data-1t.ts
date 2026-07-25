import type { QuizQuestion } from './quiz-data';

const quizData_1t: Record<string, QuizQuestion[]> = {
  '1t-1-1': [
  {
    question: 'Hvilken tallmengde inneholder alle positive heltall $(1, 2, 3, ...)$?',
    options: ['Naturlige tall $(\\mathbb{N})$', 'Heltall $(\\mathbb{Z})$', 'Rasjonale tall $(\\mathbb{Q})$', 'Reelle tall $(\\mathbb{R})$'],
    explanation: 'De naturlige tallene $\\mathbb{N}$ er definert som mengden av alle positive heltall: $1, 2, 3, 4, ...$',
  },
  {
    question: 'Hvilket tall er irrasjonalt?',
    options: ['$\\sqrt{2}$', '$0{,}75$', '$\\frac{1}{3}$', '$-5$'],
    explanation: '$\\sqrt{2}$ kan ikke skrives som en brøk og har uendelig mange desimåler uten gjentakende monster.',
  },
  {
    question: 'Hva er verdien av $|-7|$?',
    options: ['$7$', '$-7$', '$0$', '$14$'],
    explanation: 'Absoluttverdien av et tall er alltid positiv. $|-7| = 7$.',
  },
  {
    question: 'Hvilken sammenheng er riktig for tallmengdene?',
    options: ['$\\mathbb{N}$ er delmengde av $\\mathbb{Z}$', '$\\mathbb{Z}$ er delmengde av $\\mathbb{N}$', '$\\mathbb{R}$ er delmengde av $\\mathbb{Q}$', '$\\mathbb{Q}$ er delmengde av $\\mathbb{N}$'],
    explanation: 'Alle naturlige tall er også heltall, så $\\mathbb{N}$ er en delmengde av $\\mathbb{Z}$.',
  },
  {
    question: 'Hvilken tallmengde tilhører tallet $-3$?',
    options: ['Heltall $(\\mathbb{Z})$', 'Naturlige tall $(\\mathbb{N})$', 'Kun reelle tall', 'Ingen av disse'],
    explanation: '$-3$ er et negativt heltall og tilhører dermed mengden $\\mathbb{Z}$.',
  },
],


  '1t-1-2': [
  {
    question: 'Hva er $2^3 \\cdot 2^4$?',
    options: ['$2^7$', '$2^{12}$', '$4^7$', '$2^{-1}$'],
    explanation: 'Når vi ganger potenser med samme grunntall, adderer vi eksponentene: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7$.',
  },
  {
    question: 'Hva er $(3^2)^3$?',
    options: ['$3^6$', '$3^5$', '$3^8$', '$9^3$'],
    explanation: 'Når vi opphøyer en potens i en potens, ganger vi eksponentene: $(3^2)^3 = 3^{2 \\cdot 3} = 3^6$.',
  },
  {
    question: 'Hva er $5^0$?',
    options: ['$1$', '$0$', '$5$', 'Udefinert'],
    explanation: 'Alle tall (unntatt $0$) opphøyd i $0$ er lik $1$. Dette følger av potensreglene.',
  },
  {
    question: 'Hva er $4^{-2}$?',
    options: ['$\\frac{1}{16}$', '$-8$', '$16$', '$-16$'],
    explanation: 'Negativ eksponent betyr at vi tar den omvendte: $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$.',
  },
  {
    question: 'Hva er $\\left(\\frac{a}{b}\\right)^2$?',
    options: ['$\\frac{a^2}{b^2}$', '$a^2 \\cdot b^2$', '$\\frac{2a}{2b}$', '$\\frac{a}{b^2}$'],
    explanation: 'Når vi opphøyer en brøk i en potens, opphøyer vi både teller og nevner: $\\left(\\frac{a}{b}\\right)^2 = \\frac{a^2}{b^2}$.',
  },
],


  '1t-1-3': [
  {
    question: 'Hvordan faktoriseres $x^2 - 9$?',
    options: ['$(x-3)(x+3)$', '$(x-9)(x+1)$', '$x(x-9)$', '$(x-3)^2$'],
    explanation: '$x^2 - 9$ er en differanse mellom to kvadrater: $a^2 - b^2 = (a-b)(a+b)$, så $x^2 - 9 = (x-3)(x+3)$.',
  },
  {
    question: 'Hva er konjugatsetningen?',
    options: ['$(a-b)(a+b) = a^2 - b^2$', '$(a+b)^2 = a^2 + 2ab + b^2$', '$(a-b)^2 = a^2 - 2ab + b^2$', '$a^2 + b^2 = (a+b)^2$'],
    explanation: 'Konjugatsetningen sier at produktet av to konjugerte uttrykk gir differansen av kvadratene.',
  },
  {
    question: 'Hvordan førenkles $3x + 6$?',
    options: ['$3(x + 2)$', '$3x + 6$', '$9x$', '$3(x + 6)$'],
    explanation: 'Vi trekker ut felles faktor $3$: $3x + 6 = 3(x + 2)$.',
  },
  {
    question: 'Hva er $(x + 3)^2$?',
    options: ['$x^2 + 6x + 9$', '$x^2 + 9$', '$x^2 + 3x + 9$', '$2x + 6$'],
    explanation: 'Vi bruker første kvadratsetning: $(a+b)^2 = a^2 + 2ab + b^2$, så $(x+3)^2 = x^2 + 6x + 9$.',
  },
  {
    question: 'Hvordan faktoriseres $x^2 - 5x + 6$?',
    options: ['$(x-2)(x-3)$', '$(x+2)(x+3)$', '$(x-1)(x-6)$', '$(x+1)(x-6)$'],
    explanation: 'Vi leter etter to tall med sum $-5$ og produkt $6$. Det er $-2$ og $-3$.',
  },
],


  '1t-1-4': [
  {
    question: 'Hva er $\\frac{2}{3} \\cdot \\frac{3}{4}$?',
    options: ['$\\frac{1}{2}$', '$\\frac{6}{12}$', '$\\frac{5}{7}$', '$\\frac{2}{4}$'],
    explanation: 'Når vi ganger brøker, ganger vi teller med teller og nevner med nevner: $\\frac{2 \\cdot 3}{3 \\cdot 4} = \\frac{6}{12} = \\frac{1}{2}$.',
  },
  {
    question: 'Hva er $\\frac{2}{5} \\div \\frac{4}{3}$?',
    options: ['$\\frac{3}{10}$', '$\\frac{8}{15}$', '$\\frac{6}{20}$', '$\\frac{2}{5}$'],
    explanation: 'Å dele med en brøk er det samme som å gange med den omvendte: $\\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}$.',
  },
  {
    question: 'Hva får vi når vi forkorter $\\frac{12}{18}$?',
    options: ['$\\frac{2}{3}$', '$\\frac{6}{9}$', '$\\frac{4}{6}$', '$\\frac{3}{2}$'],
    explanation: 'Både $12$ og $18$ kan deles på $6$: $\\frac{12}{18} = \\frac{2}{3}$.',
  },
  {
    question: 'Hva er $\\frac{1}{3} + \\frac{1}{4}$?',
    options: ['$\\frac{7}{12}$', '$\\frac{2}{7}$', '$\\frac{1}{7}$', '$\\frac{2}{12}$'],
    explanation: 'Vi må ha fellesnevner: $\\frac{1}{3} = \\frac{4}{12}$ og $\\frac{1}{4} = \\frac{3}{12}$. $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$.',
  },
  {
    question: 'Hvordan utvider vi $\\frac{2}{5}$ til nevner $15$?',
    options: ['$\\frac{6}{15}$', '$\\frac{10}{15}$', '$\\frac{2}{15}$', '$\\frac{3}{15}$'],
    explanation: 'Vi ganger både teller og nevner med $3$: $\\frac{2 \\cdot 3}{5 \\cdot 3} = \\frac{6}{15}$.',
  },
],


  '1t-1-5': [
  {
    question: 'Hva er $\\sqrt{16}$?',
    options: ['$4$', '$8$', '$256$', '$2$'],
    explanation: 'Kvadratroten av $16$ er $4$ fordi $4 \\cdot 4 = 16$.',
  },
  {
    question: 'Hva er $\\sqrt{a} \\cdot \\sqrt{b}$?',
    options: ['$\\sqrt{ab}$', '$\\sqrt{a+b}$', '$ab$', '$\\frac{\\sqrt{a}}{\\sqrt{b}}$'],
    explanation: 'Produktregelen for roter: $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$.',
  },
  {
    question: 'Hvordan førenkles $\\sqrt{50}$?',
    options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$\\sqrt{50}$', '$10\\sqrt{5}$'],
    explanation: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$.',
  },
  {
    question: 'Hva er $\\sqrt{a^2}$?',
    options: ['$|a|$', '$a$', '$a^2$', '$\\sqrt{a}$'],
    explanation: '$\\sqrt{a^2} = |a|$ fordi kvadratroten alltid er positiv.',
  },
  {
    question: 'Hva er $3\\sqrt{2} + 5\\sqrt{2}$?',
    options: ['$8\\sqrt{2}$', '$15\\sqrt{2}$', '$\\sqrt{8}$', '$8\\sqrt{4}$'],
    explanation: 'Vi legger sammen like rotuttrykk: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$.',
  },
],


  '1t-1-6': [
  {
    question: 'Hvordan forkortes $\\frac{x^2 - 4}{x + 2}$?',
    options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$\\frac{x-4}{x+2}$'],
    explanation: '$x^2 - 4 = (x-2)(x+2)$. Når vi forkorter med $(x+2)$ får vi $x - 2$.',
  },
  {
    question: 'Hva er $\\frac{2}{x} + \\frac{3}{x}$?',
    options: ['$\\frac{5}{x}$', '$\\frac{6}{x^2}$', '$\\frac{5}{2x}$', '$2x + 3x$'],
    explanation: 'Når nevnerne er like, adderer vi tellerne: $\\frac{2}{x} + \\frac{3}{x} = \\frac{5}{x}$.',
  },
  {
    question: 'Hva er fellesnevneren for $\\frac{1}{x}$ og $\\frac{1}{x+1}$?',
    options: ['$x(x+1)$', '$x + x + 1$', '$1$', '$x^2 + 1$'],
    explanation: 'Fellesnevneren er produktet av de to nevnerne: $x(x+1)$.',
  },
  {
    question: 'Hvordan førenkles $\\frac{3x}{6x^2}$?',
    options: ['1/(2x)', '$\\frac{1}{2}$', 'x/2', '2/x'],
    explanation: 'Vi forkorter med $3x$: $\\frac{3x}{6x^2} = \\frac{1}{2x}$.',
  },
  {
    question: 'Hva er $\\frac{x}{2} \\div \\frac{x}{4}$?',
    options: ['2', '$\\frac{1}{2}$', 'x^2/8', '4x'],
    explanation: 'Å dele med en brøk er å gange med den omvendte: $\\frac{x}{2} \\cdot \\frac{4}{x} = \\frac{4x}{2x} = 2$.',
  },
],


  '1t-1-7': [
  {
    question: 'Hva betyr symbolet "element av" i mengdenotasjon?',
    options: ['Tilhører mengden', 'Er lik', 'Er større enn', 'Er delmengde av'],
    explanation: 'Symbolet element av betyr at et element tilhører en mengde.',
  },
  {
    question: 'Hvordan skrives intervallet fra $2$ til $5$, der begge er inkludert?',
    options: ['$[2, 5]$', '$(2, 5)$', '$[2, 5)$', '$(2, 5]$'],
    explanation: 'Hakeparenteser betyr at endepunktene er inkludert: $[2, 5]$.',
  },
  {
    question: 'Hva betyr $(3, 7]$?',
    options: ['Alle tall mellom $3$ og $7$, der $7$ er inkludert men ikke $3$', 'Alle tall fra 3 til 7', 'Bare 3 og 7', 'Ingen tall'],
    explanation: 'Rund parentes betyr at $3$ ikke er inkludert, hakeparentes betyr at $7$ er inkludert.',
  },
  {
    question: 'Hva er snittet av mengdene $A = \{1,2,3\}$ og $B = \{2,3,4\}$?',
    options: ['$\{2, 3\}$', '$\{1, 2, 3, 4\}$', '$\{1, 4\}$', '$\{2\}$'],
    explanation: 'Snittet er elementene som er felles for begge mengder: $\{2, 3\}$.',
  },
  {
    question: 'Hva er unionen av $A = \{1,2\}$ og $B = \{3,4\}$?',
    options: ['$\{1, 2, 3, 4\}$', '$\{1, 2\}$', '$\{3, 4\}$', 'Tom mengde'],
    explanation: 'Unionen er alle elementer fra begge mengder: $\{1, 2, 3, 4\}$.',
  },
],


  '1t-1-8': [
  {
    question: 'Hva er $\\frac{6x^3}{2x}$?',
    options: ['$3x^2$', '$3x^3$', '$4x^2$', '$6x^2$'],
    explanation: 'Vi deler koeffisientene ($6/2=3$) og trekker fra eksponentene ($3-1=2$): $3x^2$.',
  },
  {
    question: 'Hva kalles svåret når vi deler et polynom på et annet?',
    options: ['Kvotienten', 'Dividenden', 'Divisoren', 'Resten'],
    explanation: 'Når vi deler P(x) på D(x), kalles svåret Q(x) for kvotienten.',
  },
  {
    question: 'Hva er $\\frac{8x^4 + 4x^2}{2x}$?',
    options: ['$4x^3 + 2x$', '$4x^4 + 2x^2$', '$6x^3$', '$4x^3 + 4x$'],
    explanation: 'Vi deler hvert ledd: $\\frac{8x^4}{2x} = 4x^3$ og $\\frac{4x^2}{2x} = 2x$.',
  },
  {
    question: 'Hva betyr det at resten er 0 ved polynomdivisjon?',
    options: ['Divisoren går opp i dividenden', 'Kvotienten er 0', 'Dividenden er 0', 'Divisoren er 0'],
    explanation: 'Når resten er 0, går divisoren opp i dividenden uten rest.',
  },
  {
    question: 'Hva er $\\frac{12x^5}{4x^2}$?',
    options: ['$3x^3$', '$3x^7$', '$8x^3$', '$3x^2$'],
    explanation: 'Vi deler koeffisientene ($12/4=3$) og trekker fra eksponentene ($5-2=3$): $3x^3$.',
  },
],


  '1t-1-9': [
  {
    question: 'Hva sier faktorteoremet?',
    options: ['Hvis $P(a)=0$, så er $(x-a)$ en faktor i $P(x)$', 'Alle polynomer kan faktoriseres', '$P(a) = a$', '$(x-a)$ er alltid en faktor'],
    explanation: 'Faktorteoremet sier at hvis $a$ er et nullpunkt for $P(x)$, så er $(x-a)$ en faktor.',
  },
  {
    question: 'For å sjekke om $(x-2)$ er en faktor i $P(x)$, hva gjør vi?',
    options: ['Beregner $P(2)$', 'Beregner $P(-2)$', 'Beregner $P(0)$', 'Deler på $x-2$'],
    explanation: 'Vi setter inn $x=2$ i $P(x)$. Hvis $P(2)=0$, er $(x-2)$ en faktor.',
  },
  {
    question: 'Hvis $P(x) = x^3 - 6x^2 + 11x - 6$ og $P(1) = 0$, hva kan vi si?',
    options: ['$(x-1)$ er en faktor i $P(x)$', '$(x+1)$ er en faktor', '$P(x)$ har ingen faktorer', '$x=0$ er et nullpunkt'],
    explanation: 'Siden $P(1)=0$, er $x=1$ et nullpunkt, og dermed er $(x-1)$ en faktor.',
  },
  {
    question: 'Hvilke verdier bør vi prøve først for å finne nullpunkter i $x^3 - 6$?',
    options: ['Divisorer av konstantleddet: $1, 2, 3, 6$', 'Alle tall fra $1$ til $100$', 'Bare positive tall', 'Bare $0$'],
    explanation: 'For polynomer med heltallskoeffisienter prøver vi divisorer av konstantleddet.',
  },
  {
    question: 'Når vi deler $x^2 - 5x + 6$ på $(x-2)$, hvå blir kvotienten?',
    options: ['$x - 3$', '$x + 3$', '$x - 2$', '$x^2 - 3$'],
    explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$, så kvotienten er $(x-3)$.',
  },
],


  '1t-2-1': [
  {
    question: 'Hva er løsningen på $x + 5 = 12$?',
    options: ['$x = 7$', '$x = 17$', '$x = -7$', '$x = 5$'],
    explanation: 'Vi trekker fra $5$ på begge sider: $x = 12 - 5 = 7$.',
  },
  {
    question: 'Hvis $3x = 15$, hva er $x$?',
    options: ['$x = 5$', '$x = 45$', '$x = 12$', '$x = 18$'],
    explanation: 'Vi deler begge sider på $3$: $x = \\frac{15}{3} = 5$.',
  },
  {
    question: 'Løs likningen $2x - 4 = 10$.',
    options: ['$x = 7$', '$x = 3$', '$x = 6$', '$x = 14$'],
    explanation: 'Først legger vi til $4$: $2x = 14$. Så deler vi på $2$: $x = 7$.',
  },
  {
    question: 'Hva er hovedprinsippet for å løse likninger?',
    options: ['Gjøre det samme på begge sider', 'Flytte alt til venstre', 'Gange med x', 'Sette x = 0'],
    explanation: 'Hovedprinsippet er at vi alltid gjør det samme på begge sider av likhetstegnet.',
  },
  {
    question: 'Hva er løsningen på $5 - x = 3$?',
    options: ['$x = 2$', '$x = -2$', '$x = 8$', '$x = -8$'],
    explanation: 'Vi trekker fra $5$ på begge sider: $-x = -2$, så $x = 2$.',
  },
],


  '1t-2-2': [
  {
    question: 'Hva er nullregelen?',
    options: ['Hvis $A \\cdot B = 0$, så er $A = 0$ eller $B = 0$', '$A + B = 0$ betyr $A = B$', '$0 \\cdot x = x$', '$A/0 = 0$'],
    explanation: 'Nullregelen sier at hvis et produkt er null, må minst en av faktorene være null.',
  },
  {
    question: 'Løs $(x-3)(x+2) = 0$.',
    options: ['$x = 3$ eller $x = -2$', '$x = -3$ eller $x = 2$', '$x = 6$', '$x = -6$'],
    explanation: 'Vi setter hver faktor lik null: $x-3=0$ gir $x=3$, $x+2=0$ gir $x=-2$.',
  },
  {
    question: 'Hvordan faktoriseres $x^2 - 5x + 6 = 0$?',
    options: ['$(x-2)(x-3) = 0$', '$(x+2)(x+3) = 0$', '$(x-1)(x-6) = 0$', '$(x-5)(x-1) = 0$'],
    explanation: 'Vi leter etter tall med sum $5$ og produkt $6$: $-2$ og $-3$.',
  },
  {
    question: 'Hva er løsningene til $x(x-4) = 0$?',
    options: ['$x = 0$ eller $x = 4$', '$x = 4$', '$x = 0$', '$x = -4$'],
    explanation: 'Nullregelen gir $x = 0$ eller $x - 4 = 0$, altså $x = 0$ eller $x = 4$.',
  },
  {
    question: 'Hvordan løser vi $x^2 - 9 = 0$ ved faktorisering?',
    options: ['$(x-3)(x+3) = 0$, så $x = 3$ eller $x = -3$', '$x = 9$', '$x = 3$', '$(x-9)(x+1) = 0$'],
    explanation: '$x^2 - 9 = (x-3)(x+3)$, så løsningene er $x = 3$ og $x = -3$.',
  },
],


  '1t-2-3': [
  {
    question: 'Hva er abc-formelen?',
    options: ['$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$', '$x = -\\frac{b}{a}$', '$x = \\frac{c}{a}$', '$x = a + b + c$'],
    explanation: 'ABC-formelen gir løsningene til $ax^2 + bx + c = 0$.',
  },
  {
    question: 'Hva kalles uttrykket b^2 - 4ac?',
    options: ['Diskriminanten', 'Kvotienten', 'Koeffisienten', 'Eksponenten'],
    explanation: 'b^2 - 4ac kalles diskriminanten og bestemmer antall løsninger.',
  },
  {
    question: 'Hvor mange løsninger har likningen hvis diskriminanten er negativ?',
    options: ['Ingen reelle løsninger', 'En løsning', 'To løsninger', 'Uendelig mange'],
    explanation: 'Negativ diskriminant betyr at vi må ta roten av et negativt tall, som ikke gir reelle løsninger.',
  },
  {
    question: 'I likningen $2x^2 - 4x + 2 = 0$, hva er $a$, $b$ og $c$?',
    options: ['$a=2, b=-4, c=2$', '$a=2, b=4, c=2$', '$a=-4, b=2, c=2$', '$a=2, b=-4, c=-2$'],
    explanation: 'Vi leser koeffisientene direkte: foran $x^2$ er $2$, foran $x$ er $-4$, konstantleddet er $2$.',
  },
  {
    question: 'Hvis diskriminanten er 0, hvor mange løsninger har likningen?',
    options: ['En løsning (dobbeltrot)', 'Ingen løsninger', 'To løsninger', 'Tre løsninger'],
    explanation: 'Når diskriminanten er 0, har vi en dobbeltrot (samme løsning to ganger).',
  },
],


  '1t-2-5': [
  {
    question: 'Hvordan løser vi $\\frac{x}{3} = 4$?',
    options: ['Ganger begge sider med 3', 'Deler begge sider på 3', 'Trekker fra 3', 'Legger til 3'],
    explanation: 'Vi ganger begge sider med nevneren $3$: $x = 4 \\cdot 3 = 12$.',
  },
  {
    question: 'Hva er løsningen på $\\frac{6}{x} = 2$?',
    options: ['x = 3', 'x = 12', 'x = 4', 'x = $\\frac{1}{3}$'],
    explanation: 'Vi ganger begge sider med $x$: $6 = 2x$, så $x = 3$.',
  },
  {
    question: 'Når må vi være forsiktige med brøklikninger?',
    options: ['Når nevneren kan bli 0', 'Når tellæren er stor', 'Når x er positiv', 'Alltid'],
    explanation: 'Vi kan ikke dele på 0, så vi må sjekke at løsningen ikke gjør nevneren lik 0.',
  },
  {
    question: 'Hvordan løser vi $\\frac{2}{x} + \\frac{3}{x} = 10$?',
    options: ['5/x = 10, så x = $\\frac{1}{2}$', 'x = 50', 'x = 5', 'x = 2'],
    explanation: 'Vi trekker sammen: $\\frac{5}{x} = 10$, så $x = \\frac{5}{10} = \\frac{1}{2}$.',
  },
  {
    question: 'Hva er produktregelen for brøklikninger?',
    options: ['Hvis a/b = c/d, så er a*d = b*c', 'a/b + c/d = (a+c)/(b+d)', 'a/b = b/a', 'a*b = c*d'],
    explanation: 'Vi kan krysse og gange: a*d = b*c.',
  },
],


  '1t-2-6': [
  {
    question: 'Hvordan løser vi $\\sqrt{x} = 5$?',
    options: ['Kvadrerer begge sider: $x = 25$', 'Tar roten: $x = \\sqrt{5}$', 'Deler på $2$: $x = 2{,}5$', '$x = 10$'],
    explanation: 'Vi kvadrerer begge sider: $(\\sqrt{x})^2 = 5^2$, så $x = 25$.',
  },
  {
    question: 'Hvorfor må vi kontrollære løsningene i rotlikninger?',
    options: ['Kvadrering kan gi falske løsninger', 'For å sjekke regnefeil', 'Det er ikke nødvendig', 'Fordi sqrt er negativ'],
    explanation: 'Når vi kvadrerer, kan vi introdusere løsninger som ikke fungerer i den opprinnelige likningen.',
  },
  {
    question: 'Hva er løsningen på $\\sqrt{x+3} = 4$?',
    options: ['$x = 13$', '$x = 1$', '$x = 7$', '$x = 19$'],
    explanation: 'Vi kvadrerer: $x + 3 = 16$, så $x = 13$. Kontroll: $\\sqrt{16} = 4$.',
  },
  {
    question: 'Kan $\\sqrt{x} = -3$ ha en løsning?',
    options: ['Nei, $\\sqrt{}$ gir alltid positiv verdi', 'Ja, $x = 9$', 'Ja, $x = -9$', 'Ja, $x = -3$'],
    explanation: 'Kvadratroten er alltid positiv eller null, så $\\sqrt{x} = -3$ har ingen løsning.',
  },
  {
    question: 'Løs $\\sqrt{2x-1} = 3$.',
    options: ['$x = 5$', '$x = 4$', '$x = 2$', '$x = 8$'],
    explanation: 'Vi kvadrerer: $2x - 1 = 9$, $2x = 10$, $x = 5$.',
  },
],


  '1t-2-8': [
  {
    question: 'Hva er første steg når vi løser tekstoppgaver med likninger?',
    options: ['Velge en variabel for det ukjente', 'Finne svåret', 'Tegne en figur', 'Prøve og feile'],
    explanation: 'Vi starter med å la x (eller en annen variabel) representere det vi skal finne.',
  },
  {
    question: 'Summen av et tall og 12 er 30. Hva er likningen?',
    options: ['x + 12 = 30', 'x - 12 = 30', '12x = 30', 'x = 30 + 12'],
    explanation: 'Summen betyr addisjon, så $x + 12 = 30$.',
  },
  {
    question: 'Det tredoble av et tall minus 5 er 16. Hva er tallet?',
    options: ['$7$', '$3$', '$21$', '$11$'],
    explanation: '$3x - 5 = 16$, $3x = 21$, $x = 7$.',
  },
  {
    question: 'Hvorfor sjekker vi alltid svåret i tekstoppgaver?',
    options: ['For å se at det gir mening i konteksten', 'For å finne andre løsninger', 'Det er ikke nødvendig', 'For å løse likningen'],
    explanation: 'Vi må sjekke at svåret er fornuftig i den praktiske situasjonen.',
  },
  {
    question: 'Produktet av to påfølgende tall er 72. Hvilken likning beskriver dette?',
    options: ['$x(x+1) = 72$', '$x + (x+1) = 72$', '$2x = 72$', '$x^2 = 72$'],
    explanation: 'Påfølgende tall er $x$ og $x+1$, produktet er $x(x+1) = 72$.',
  },
],


  '1t-2-9': [
  {
    question: 'Et rektangel har omkrets 24 og areal 32. Hvilken likning finner sidene?',
    options: ['$x(12-x) = 32$', '$x + y = 32$', '$2x = 24$', '$x^2 = 32$'],
    explanation: 'Omkrets gir $x + y = 12$, så $y = 12 - x$. Areal gir $x(12-x) = 32$.',
  },
  {
    question: 'Hvorfor får vi ofte to løsninger i arealproblemer?',
    options: ['Fordi andregradslikninger kan ha to løsninger', 'Fordi det finnes to rektangler', 'Det er en feil', 'Vi får bare en løsning'],
    explanation: 'Andregradslikninger gir ofte to løsninger, men begge må sjekkes for å se om de gir mening.',
  },
  {
    question: 'Når forkaster vi en løsning i et praktisk problem?',
    options: ['Når den gir negativt resultat for noe som må være positivt', 'Alltid den største løsningen', 'Aldri', 'Alltid den minste løsningen'],
    explanation: 'For eksempel kan lengder ikke være negative, så slike løsninger forkastes.',
  },
  {
    question: 'En hage er $3$ m lengre enn bred og har areal $40$ m$^2$. Hvilken likning gjelder?',
    options: ['$x(x+3) = 40$', '$x + 3 = 40$', '$3x = 40$', '$x^2 + 3 = 40$'],
    explanation: 'Bredde $= x$, lengde $= x + 3$, areal $= x(x+3) = 40$.',
  },
  {
    question: 'Hvilken formel brukes for arealet av en trekant?',
    options: ['$A = \\frac{1}{2} \\cdot g \\cdot h$', '$A = g \\cdot h$', '$A = g + h$', '$A = g^2$'],
    explanation: 'Arealet av en trekant er halvparten av grunnlinje ganger høyde.',
  },
],


  '1t-2-10': [
  {
    question: 'Hva er første steg for å løse $x^3 - 6x^2 + 11x - 6 = 0$?',
    options: ['Finne et nullpunkt ved å prøve divisorer', 'Bruke abc-formelen', 'Faktorisere direkte', 'Dele på x'],
    explanation: 'Vi prøver divisorer av konstantleddet for å finne et nullpunkt.',
  },
  {
    question: 'Når vi har funnet at $x = 1$ er nullpunkt, hva er neste steg?',
    options: ['Dele polynomet på $(x-1)$', 'Likningen er lost', 'Prøve $x = 2$', 'Gange med $(x-1)$'],
    explanation: 'Vi bruker polynomdivisjon for å dele polynomet på $(x-1)$ og få et enklære polynom.',
  },
  {
    question: 'Et tredjegradspolynom kan maksimalt ha hvor mange nullpunkter?',
    options: ['3', '2', '1', 'Uendelig mange'],
    explanation: 'Et polynom av grad n har maksimalt n nullpunkter.',
  },
  {
    question: 'Hvis $x^3 + 2x^2 - 5x - 6 = (x-2) \\cdot Q(x)$, hva er graden til $Q(x)$?',
    options: ['$2$', '$3$', '$1$', '$4$'],
    explanation: 'Når vi deler et tredjegradspolynom på en førstegradsuttrykk, blir kvotienten et andregradspolynom.',
  },
  {
    question: 'Hvorfor starter vi med å finne ett nullpunkt?',
    options: ['For å redusere graden av polynomet', 'Fordi det er nok', 'For å finne alle løsninger direkte', 'Det er tilfeldig'],
    explanation: 'Når vi finner ett nullpunkt, kan vi dele og få et enklære polynom å løse.',
  },
],


  '1t-3-1': [
  {
    question: 'Hva kalles punktet der aksene krysser i et koordinatsystem?',
    options: ['Origo', 'Nullpunkt', 'Sentrum', 'Midtpunkt'],
    explanation: 'Punktet $(0, 0)$ der x- og y-aksen krysser hverandre kalles origo.',
  },
  {
    question: 'I punktet $(3, -2)$, hva er y-koordinaten?',
    options: ['$-2$', '$3$', '$1$', '$-3$'],
    explanation: 'I et punkt $(x, y)$ er det andre tallet y-koordinaten, altså $-2$.',
  },
  {
    question: 'Linjen $x = 4$ er?',
    options: ['En vertikal linje', 'En horisontal linje', 'En skra linje', 'Et punkt'],
    explanation: '$x = 4$ er en vertikal linje der alle punkter har x-verdi $4$.',
  },
  {
    question: 'Linjen $y = -1$ er?',
    options: ['En horisontal linje', 'En vertikal linje', 'En skra linje', 'Et punkt'],
    explanation: '$y = -1$ er en horisontal linje der alle punkter har y-verdi $-1$.',
  },
  {
    question: 'I hvilket kvadrant ligger punktet $(-2, 3)$?',
    options: ['Andre kvadrant', 'Første kvadrant', 'Tredje kvadrant', 'Fjerde kvadrant'],
    explanation: 'Negativ x og positiv y plasserer punktet i andre kvadrant (øvre venstre).',
  },
],


  '1t-3-2': [
  {
    question: 'Hva forteller stigningstallet $a$ i $y = ax + b$?',
    options: ['Hvor bratt linjen er', 'Hvor linjen krysser y-aksen', 'Nullpunktet', 'Lengden på linjen'],
    explanation: 'Stigningstallet $a$ forteller hvor mye $y$ øker når $x$ øker med $1$.',
  },
  {
    question: 'I $y = 3x - 2$, hvor krysser grafen y-aksen?',
    options: ['$(0, -2)$', '$(0, 3)$', '$(-2, 0)$', '$(3, 0)$'],
    explanation: 'Konstantleddet $-2$ er y-verdien der $x = 0$, altså punktet $(0, -2)$.',
  },
  {
    question: 'Hvis stigningstallet er negativt, hva skjer med linjen?',
    options: ['Den faller mot høyre', 'Den stiger mot høyre', 'Den er horisontal', 'Den er vertikal'],
    explanation: 'Negativt stigningstall betyr at y synker når x øker.',
  },
  {
    question: 'To linjer er parallelle når de har?',
    options: ['Samme stigningstall', 'Samme konstantledd', 'Motsatte stigningstall', 'Produktet av stigningstallene er -1'],
    explanation: 'Parallelle linjer har samme stigningstall men forskjellig konstantledd.',
  },
  {
    question: 'Hva er stigningstallet til linjen $y = -2x + 5$?',
    options: ['$-2$', '$5$', '$2$', '$-5$'],
    explanation: 'Stigningstallet er koeffisienten foran $x$, altså $-2$.',
  },
],


  '1t-3-3': [
  {
    question: 'Hva er $f(2)$ når $f(x) = 3x + 1$?',
    options: ['$7$', '$6$', '$5$', '$8$'],
    explanation: 'Vi setter inn $x = 2$: $f(2) = 3 \\cdot 2 + 1 = 6 + 1 = 7$.',
  },
  {
    question: 'Hva kjennetegner en funksjon?',
    options: ['Hver x-verdi gir nøyaktig en y-verdi', 'Hver y-verdi gir nøyaktig en x-verdi', 'Grafen er alltid en rett linje', 'Den går alltid gjennom origo'],
    explanation: 'En funksjon gir en unik y-verdi for hver x-verdi i definisjonsmengden.',
  },
  {
    question: 'Hva er definisjonsmengden?',
    options: ['Alle x-verdier funksjonen er definert for', 'Alle y-verdier funksjonen kan gi', 'Nullpunktene', 'Maksimumsverdien'],
    explanation: 'Definisjonsmengden er alle x-verdier vi kan sette inn i funksjonen.',
  },
  {
    question: 'Hva er verdimengden?',
    options: ['Alle y-verdier funksjonen kan gi', 'Alle x-verdier', 'Konstantleddet', 'Stigningstallet'],
    explanation: 'Verdimengden er alle mulige y-verdier (funksjonsverdier) funksjonen kan gi.',
  },
  {
    question: 'Hvis $f(x) = x^2$, hva er $f(-3)$?',
    options: ['$9$', '$-9$', '$6$', '$-6$'],
    explanation: '$f(-3) = (-3)^2 = 9$.',
  },
],


  '1t-3-4': [
  {
    question: 'Hva kalles grafen til en andregradsfunksjon?',
    options: ['Parabel', 'Linje', 'Sirkel', 'Hyperbel'],
    explanation: 'Grafen til $f(x) = ax^2 + bx + c$ kalles en parabel.',
  },
  {
    question: 'Hvis $a > 0$ i $f(x) = ax^2 + bx + c$, har parabelen?',
    options: ['Bunnpunkt', 'Toppunkt', 'Ingen ekstremalpunkt', 'To toppunkter'],
    explanation: 'Når $a > 0$ åpner parabelen oppover og har et bunnpunkt.',
  },
  {
    question: 'Hva er symmetrilinjen til $f(x) = x^2 - 4x + 3$?',
    options: ['$x = 2$', '$x = -2$', '$x = 4$', '$x = 3$'],
    explanation: 'Symmetrilinjen er $x = -\\frac{b}{2a} = -\\frac{-4}{2 \\cdot 1} = \\frac{4}{2} = 2$.',
  },
  {
    question: 'Hvor krysser $f(x) = x^2 - 1$ y-aksen?',
    options: ['$(0, -1)$', '$(0, 1)$', '$(1, 0)$', '$(-1, 0)$'],
    explanation: 'Y-aksen krysses der $x = 0$: $f(0) = 0 - 1 = -1$.',
  },
  {
    question: 'Hva bestemmer bredden på en parabel?',
    options: ['Verdien av $|a|$', 'Verdien av $b$', 'Verdien av $c$', 'Toppunktet'],
    explanation: 'Jo større $|a|$ er, jo smålære er parabelen.',
  },
],


  '1t-3-5': [
  {
    question: 'Hva er nullpunktene til $f(x) = x^2 - 4$?',
    options: ['$x = 2$ og $x = -2$', '$x = 4$ og $x = -4$', '$x = 2$', '$x = 0$'],
    explanation: '$x^2 - 4 = 0$ gir $x^2 = 4$, så $x = 2$ eller $x = -2$.',
  },
  {
    question: 'Hva forteller diskriminanten om nullpunktene?',
    options: ['Antall nullpunkter', 'Hvor nullpunktene er', 'Stigningstallet', 'Konstantleddet'],
    explanation: '$D > 0$ gir to nullpunkter, $D = 0$ gir ett, $D < 0$ gir ingen.',
  },
  {
    question: 'Når er $f(x) = x^2 - 9$ positiv?',
    options: ['Når $x < -3$ eller $x > 3$', 'Når $-3 < x < 3$', 'Alltid', 'Aldri'],
    explanation: 'Parabelen er over x-aksen utenfor nullpunktene.',
  },
  {
    question: 'Hvor mange nullpunkter har $f(x) = x^2 + 4$?',
    options: ['Ingen', 'Ett', 'To', 'Uendelig mange'],
    explanation: '$x^2 + 4 = 0$ gir $x^2 = -4$, som ikke har reelle løsninger.',
  },
  {
    question: 'Hva er nullpunktene til $f(x) = x^2 - 5x + 6$?',
    options: ['$x = 2$ og $x = 3$', '$x = -2$ og $x = -3$', '$x = 1$ og $x = 6$', '$x = 5$ og $x = 6$'],
    explanation: 'Vi faktoriserer: $(x-2)(x-3) = 0$, så $x = 2$ eller $x = 3$.',
  },
],


  '1t-3-6': [
  {
    question: 'Hva er graden til $f(x) = 3x^4 - 2x^2 + 1$?',
    options: ['$4$', '$3$', '$2$', '$7$'],
    explanation: 'Graden er den høyeste eksponenten, altså $4$.',
  },
  {
    question: 'Hva er den ledende koeffisienten til $f(x) = -5x^3 + 2x^2$?',
    options: ['$-5$', '$3$', '$2$', '$5$'],
    explanation: 'Den ledende koeffisienten er koeffisienten foran det høyeste x-leddet.',
  },
  {
    question: 'Hvor mange nullpunkter kan et tredjegradspolynom maksimalt ha?',
    options: ['3', '2', '4', '1'],
    explanation: 'Et polynom av grad n kan ha maksimalt n nullpunkter.',
  },
  {
    question: 'Hvis graden er partall og ledende koeffisient er positiv, hva skjer med grafen for store |x|?',
    options: ['Begge ender går oppover', 'Begge ender går nedover', 'Venstre ned, høyre opp', 'Venstre opp, høyre ned'],
    explanation: 'Partall grad med positiv ledende koeffisient gir at begge ender går mot pluss uendelig.',
  },
  {
    question: 'Hva er konstantleddet til $f(x) = x^3 - 2x + 7$?',
    options: ['$7$', '$1$', '$-2$', '$3$'],
    explanation: 'Konstantleddet er leddet uten $x$, altså $7$.',
  },
],


  '1t-3-7': [
  {
    question: 'Hva er en vertikal asymptote?',
    options: ['En vertikal linje grafen nærmer seg men ikke krysser', 'En horisontal linje', 'Nullpunktet', 'Toppunktet'],
    explanation: 'Vertikal asymptote er der nevneren er null og funksjonen går mot uendelig.',
  },
  {
    question: 'Hva er definisjonsmengden til $f(x) = \\frac{1}{x-3}$?',
    options: ['Alle $x$ unntatt $3$', 'Alle $x$', 'Bare $x = 3$', '$x > 3$'],
    explanation: 'Nevneren er null når $x = 3$, så $x = 3$ er utelukket.',
  },
  {
    question: 'Hvor har $f(x) = \\frac{2}{x^2-4}$ vertikale asymptoter?',
    options: ['$x = 2$ og $x = -2$', '$x = 4$ og $x = -4$', '$x = 0$', 'Ingen'],
    explanation: '$x^2 - 4 = 0$ når $x = 2$ eller $x = -2$.',
  },
  {
    question: 'Hva skjer med $f(x) = \\frac{1}{x}$ når $x$ går mot uendelig?',
    options: ['$f(x)$ går mot $0$', '$f(x)$ går mot uendelig', '$f(x)$ går mot $1$', '$f(x)$ går mot $-1$'],
    explanation: 'Når nevneren blir stor, blir brøken liten og nærmer seg $0$.',
  },
  {
    question: 'Hva er en horisontal asymptote?',
    options: ['En horisontal linje grafen nærmer seg for store |x|', 'En vertikal linje', 'Nullpunktet', 'Y-aksen'],
    explanation: 'Horisontal asymptote viser hva funksjonsverdien nærmer seg når x går mot uendelig.',
  },
],


  '1t-3-8': [
  {
    question: 'Hva er vekstfaktoren i $f(x) = 500 \\cdot 1{,}05^x$?',
    options: ['$1{,}05$', '$500$', '$0{,}05$', '$5$'],
    explanation: 'Vekstfaktoren er grunntallet i eksponenten, altså $1{,}05$.',
  },
  {
    question: 'Hvis en befolkning vokser med 3% årlig, hva er vekstfaktoren?',
    options: ['$1{,}03$', '$0{,}03$', '$3$', '$1{,}3$'],
    explanation: '$3\%$ økning betyr at vi beholder $100\%$ og legger til $3\%$: $1 + 0{,}03 = 1{,}03$.',
  },
  {
    question: 'Hvis $b < 1$ i $f(x) = a \\cdot b^x$, hva skjer?',
    options: ['Funksjonen synker (eksponentiell nedgang)', 'Funksjonen øker', 'Funksjonen er konstant', 'Funksjonen oscillærer'],
    explanation: 'Når $0 < b < 1$, minker funksjonsverdien når $x$ øker.',
  },
  {
    question: 'Hva er halveringstid?',
    options: ['Tiden det tar for verdien å bli halvert', 'Tiden det tar for verdien å dobles', 'Halvparten av x', 'Halvparten av y'],
    explanation: 'Halveringstid er tiden det tar for en mengde å reduseres til halvparten.',
  },
  {
    question: 'En bil mister 20% av verdien årlig. Hva er vekstfaktoren?',
    options: ['$0{,}80$', '$1{,}20$', '$0{,}20$', '$0{,}02$'],
    explanation: '$20\%$ nedgang betyr vi beholder $80\%$: $1 - 0{,}20 = 0{,}80$.',
  },
],


  '1t-5-1': [
  {
    question: 'Hva er summen av vinklene i en trekant?',
    options: ['$180°$', '$360°$', '$90°$', '$270°$'],
    explanation: 'Vinkelsummen i en trekant er alltid $180°$.',
  },
  {
    question: 'Hva kalles en vinkel på nøyaktig $90°$?',
    options: ['Rett vinkel', 'Spiss vinkel', 'Stump vinkel', 'Refleks vinkel'],
    explanation: 'En vinkel på $90°$ kalles en rett vinkel.',
  },
  {
    question: 'Hva er toppvinkler?',
    options: ['Motstående vinkler når to linjer krysser', 'Vinkler ved siden av hverandre', 'Vinkler i en trekant', 'Vinkler på 180 grader'],
    explanation: 'Toppvinkler dannes når to linjer krysser og er alltid like store.',
  },
  {
    question: 'Hvis to vinkler i en trekant er $50°$ og $60°$, hva er den tredje?',
    options: ['$70°$', '$80°$', '$110°$', '$130°$'],
    explanation: '$180 - 50 - 60 = 70°$.',
  },
  {
    question: 'Hva kjennetegner en likebent trekant?',
    options: ['To sider er like lange', 'Alle sider er like lange', 'Ingen sider er like', 'Den har en rett vinkel'],
    explanation: 'En likebent trekant har minst to sider som er like lange.',
  },
],


  '1t-5-2': [
  {
    question: 'Hva betyr det at to trekanter er kongruente?',
    options: ['De har samme form og størrelse', 'De har samme form men ulik størrelse', 'De har samme areal', 'De har samme vinkler'],
    explanation: 'Kongruente trekanter er identiske kopier - samme form og størrelse.',
  },
  {
    question: 'Hva er SSS-kriteriet for kongruens?',
    options: ['Alle tre sidene er parvis like', 'To sider og en vinkel er like', 'To vinkler og en side er like', 'Alle vinkler er like'],
    explanation: 'SSS: Side-Side-Side. Alle tre sidene er parvis like lange.',
  },
  {
    question: 'Hva betyr formlikhet?',
    options: ['Samme form men kan ha ulik størrelse', 'Samme størrelse men ulik form', 'Identiske figurer', 'Samme areal'],
    explanation: 'Formlike figurer har samme form, men kan være skalert (større eller mindre).',
  },
  {
    question: 'Hvis to trekanter er formlike, hva vet vi om vinklene?',
    options: ['Vinklene er like store', 'Vinklene er forskjellige', 'Summen er ulik', 'Ingen sammenheng'],
    explanation: 'Formlike trekanter har like store vinkler.',
  },
  {
    question: 'Hva er forholdet mellom sidene i formlike trekanter?',
    options: ['Sidene er proporsjonale', 'Sidene er like', 'Sidene er uavhengige', 'Sidene summerer til det samme'],
    explanation: 'I formlike trekanter er tilsvarende sider proporsjonale (har samme forholdstall).',
  },
],


  '1t-5-3': [
  {
    question: 'Hva sier Pytagoras setning?',
    options: ['$a^2 + b^2 = c^2$ i en rettvinklet trekant', '$a + b = c$', '$a \\cdot b = c$', '$a^2 = b^2 + c^2$'],
    explanation: 'I en rettvinklet trekant er summen av katetenes kvadrater lik hypotenusens kvadrat.',
  },
  {
    question: 'I en rettvinklet trekant med kateter $3$ og $4$, hva er hypotenusen?',
    options: ['$5$', '$7$', '$12$', '$25$'],
    explanation: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
  },
  {
    question: 'Hva er hypotenusen?',
    options: ['Den lengste siden, motstatt den rette vinkelen', 'Den korteste siden', 'Siden ved den rette vinkelen', 'Alle sider'],
    explanation: 'Hypotenusen er siden overfor den rette vinkelen og er alltid lengst.',
  },
  {
    question: 'Et pytagoreisk trippel er?',
    options: ['Tre heltall som oppfyller $a^2 + b^2 = c^2$', 'Tre like tall', 'Tre primtall', 'Tre påfølgende tall'],
    explanation: 'Et pytagoreisk trippel er tre positive heltall som tilfredsstiller Pytagoras.',
  },
  {
    question: 'Hypotenusen er $13$ og en katet er $5$. Hva er den andre kateten?',
    options: ['$12$', '$8$', '$18$', '$144$'],
    explanation: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
  },
],


  '1t-5-4': [
  {
    question: 'Hva er $\\sin v$ i en rettvinklet trekant?',
    options: ['Motstående katet / hypotenus', 'Hosliggende katet / hypotenus', 'Motstående / hosliggende', 'Hypotenus / motstående'],
    explanation: 'Sinus er forholdet mellom motstående katet og hypotenus.',
  },
  {
    question: 'Hva er $\\cos v$?',
    options: ['Hosliggende katet / hypotenus', 'Motstående katet / hypotenus', 'Motstående / hosliggende', 'Hypotenus / hosliggende'],
    explanation: 'Cosinus er forholdet mellom hosliggende katet og hypotenus.',
  },
  {
    question: 'Hva er $\\tan v$?',
    options: ['Motstående katet / hosliggende katet', 'Hosliggende / motstående', 'Hypotenus / motstående', 'Motstående / hypotenus'],
    explanation: 'Tangens er forholdet mellom motstående og hosliggende katet.',
  },
  {
    question: 'Hva er huskeregelen SOH-CAH-TOA?',
    options: ['Sin=O/H, Cos=A/H, Tan=O/A', 'Sin=H/O, Cos=H/A, Tan=A/O', 'Sin=A/H, Cos=O/H, Tan=O/A', 'Sin=O/A, Cos=A/H, Tan=O/H'],
    explanation: 'SOH-CAH-TOA: Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent.',
  },
  {
    question: 'Hva er $\\sin 30°$?',
    options: ['$0{,}5$', '$1$', '$0$', '$\\frac{\\sqrt{3}}{2}$'],
    explanation: '$\\sin 30° = \\frac{1}{2} = 0{,}5$.',
  },
],


  '1t-5-5': [
  {
    question: 'Hva er grunnformelen for arealet av en trekant?',
    options: ['$A = \\frac{1}{2}gh$', '$A = gh$', '$A = g + h$', '$A = 2gh$'],
    explanation: 'Arealet av en trekant er halvparten av grunnlinje ganger høyde.',
  },
  {
    question: 'Hva er arealsetningen?',
    options: ['$A = \\frac{1}{2}ab\\sin C$', '$A = ab\\sin C$', '$A = a + b + c$', '$A = \\frac{1}{2}ab$'],
    explanation: 'Arealsetningen bruker to sider og vinkelen mellom dem.',
  },
  {
    question: 'Finn arealet av en trekant med grunnlinje $8$ og høyde $5$.',
    options: ['$20$', '$40$', '$13$', '$80$'],
    explanation: '$A = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20$.',
  },
  {
    question: 'Når bruker vi arealsetningen?',
    options: ['Når vi kjenner to sider og vinkelen mellom dem', 'Når vi kjenner grunnlinje og høyde', 'Når vi bare kjenner sidene', 'Alltid'],
    explanation: 'Arealsetningen brukes når vi kjenner to sider og den mellomliggende vinkelen.',
  },
  {
    question: 'Hva er arealet av en likesidet trekant med side $6$?',
    options: ['$9\\sqrt{3}$', '$18$', '$36$', '$6\\sqrt{3}$'],
    explanation: '$A = \\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 60° = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$.',
  },
],


  '1t-5-6': [
  {
    question: 'Hva sier sinussetningen?',
    options: ['$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$', '$a + b = c$', '$\\sin A = \\sin B$', '$a \\cdot \\sin A = b \\cdot \\sin B$'],
    explanation: 'Sinussetningen gir forholdet mellom sider og sinus til motstående vinkler.',
  },
  {
    question: 'Når bruker vi sinussetningen?',
    options: ['Når vi kjenner to vinkler og en side, eller to sider og en motstående vinkel', 'Bare i rettvinklede trekanter', 'Bare for å finne areal', 'Aldri'],
    explanation: 'Sinussetningen brukes i alle trekanter når vi har riktig kombinasjon av informasjon.',
  },
  {
    question: 'Hva er det tvetydige tilfellet i sinussetningen?',
    options: ['Når vi finner en vinkel, kan det være to mulige løsninger', 'Når det ikke finnes løsning', 'Når det er tre løsninger', 'Når alle vinkler er like'],
    explanation: 'Siden $\\sin v = \\sin(180° - v)$, kan en vinkel ha to mulige verdier.',
  },
  {
    question: 'I trekant ABC er $A = 30°$, $a = 5$ og $B = 60°$. Finn $b$.',
    options: ['$5\\sqrt{3}$', '$5$', '$10$', '$2{,}5$'],
    explanation: '$b = a \\cdot \\frac{\\sin B}{\\sin A} = 5 \\cdot \\frac{\\sin 60°}{\\sin 30°} = 5 \\cdot \\frac{\\sqrt{3}/2}{1/2} = 5\\sqrt{3}$.',
  },
  {
    question: 'Gjelder sinussetningen for alle trekanter?',
    options: ['Ja, alle trekanter', 'Bare rettvinklede', 'Bare likebeinte', 'Bare likesidede'],
    explanation: 'Sinussetningen gjelder for alle trekanter, ikke bare rettvinklede.',
  },
],


  '1t-5-7': [
  {
    question: 'Hva sier cosinussetningen?',
    options: ['$c^2 = a^2 + b^2 - 2ab\\cos C$', '$c = a + b$', '$\\cos C = a + b$', '$c^2 = a^2 + b^2$'],
    explanation: 'Cosinussetningen generaliserer Pytagoras til alle trekanter.',
  },
  {
    question: 'Når bruker vi cosinussetningen?',
    options: ['Når vi kjenner tre sider, eller to sider og vinkelen mellom dem', 'Bare i rettvinklede trekanter', 'Bare for vinkler', 'Aldri'],
    explanation: 'Cosinussetningen brukes når vi har to sider og mellomliggende vinkel, eller alle tre sider.',
  },
  {
    question: 'Hva blir cosinussetningen når $C = 90°$?',
    options: ['Pytagoras setning: $c^2 = a^2 + b^2$', '$c = a + b$', '$c^2 = a^2 - b^2$', '$c = ab$'],
    explanation: 'Når $C = 90°$, er $\\cos C = 0$, og vi får $c^2 = a^2 + b^2$.',
  },
  {
    question: 'I en trekant er $a = 7$, $b = 8$, $C = 60°$. Finn $c$.',
    options: ['$\\sqrt{57}$', '$\\sqrt{113}$', '$15$', '$\\sqrt{169}$'],
    explanation: '$c^2 = 49 + 64 - 2 \\cdot 7 \\cdot 8 \\cdot \\cos 60° = 113 - 56 = 57$, så $c = \\sqrt{57}$.',
  },
  {
    question: 'Kan cosinussetningen brukes til å finne vinkler?',
    options: ['Ja, når vi kjenner alle tre sidene', 'Nei, bare for sider', 'Bare i rettvinklede trekanter', 'Bare for 90-gradersvinkler'],
    explanation: 'Vi kan løse for cos C og finne vinkelen med invers cosinus.',
  },
],


  '1t-6-1': [
  {
    question: 'Hva kjennetegner et godt matematisk argument?',
    options: ['Logisk rekkefølge fra premisser til konklusjon', 'Mange eksempler', 'Kort tekst', 'Vanskelige ord'],
    explanation: 'Et godt argument er en logisk kjede fra kjente fakta til konklusjonen.',
  },
  {
    question: 'Hva er forskjellen på et eksempel og et bevis?',
    options: ['Et bevis viser at noe alltid er sant, et eksempel viser bare ett tilfelle', 'De er det samme', 'Et eksempel er bedre', 'Et bevis trenger ikke være sant'],
    explanation: 'Et eksempel viser at noe kan være sant, mens et bevis viser at det alltid er sant.',
  },
  {
    question: 'Hvabruker vi som grunnlag i matematiske bevis?',
    options: ['Definisjoner, aksiomer og tidligere beviste setninger', 'Gjetninger', 'Bare intuisjon', 'Eksempler fra virkeligheten'],
    explanation: 'Matematiske bevis bygger på aksepterte definisjoner og tidligere resultater.',
  },
  {
    question: 'Hva er et moteksempel?',
    options: ['Et eksempel som viser at en påstand er usann', 'Et ekstra eksempel', 'Et feilaktig eksempel', 'Et vanskelig eksempel'],
    explanation: 'Et moteksempel er nok til å motbevise en generell påstand.',
  },
  {
    question: 'Hvorfor er det viktig å begrunne løsninger?',
    options: ['For å vise at løsningen er riktig og hvorfor', 'Det er ikke viktig', 'Bare for å få poeng', 'Fordi læreren krever det'],
    explanation: 'Begrunnelser viser forståelse og sikrer at løsningen faktisk er korrekt.',
  },
],



  '1t-2-4': [
  {
    question: 'Hvilket tall må du legge til på begge sider for å fullføre kvadratet i likningen $x^2 + 6x = 7$?',
    options: ['$9$', '$3$', '$6$', '$36$'],
    explanation: 'Vi legger til $\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{6}{2}\\right)^2 = 3^2 = 9$ på begge sider.',
  },
  {
    question: 'Løs likningen $x^2 + 6x = 7$ ved å fullføre kvadratet.',
    options: ['$x = 1$ eller $x = -7$', '$x = -1$ eller $x = 7$', '$x = 1$ eller $x = 7$', '$x = 4$ eller $x = -4$'],
    explanation: '$x^2 + 6x + 9 = 16$ gir $(x+3)^2 = 16$, så $x + 3 = \\pm 4$, altså $x = 1$ eller $x = -7$.',
  },
  {
    question: 'Hvordan kan uttrykket $x^2 - 8x + 16$ skrives som et fullstendig kvadrat?',
    options: ['$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)^2$', '$(x - 4)(x + 4)$'],
    explanation: 'Etter andre kvadratsetning er $(x-4)^2 = x^2 - 2 \\cdot 4 \\cdot x + 4^2 = x^2 - 8x + 16$.',
  },
  {
    question: 'I kvadratsetningen $(a + b)^2 = a^2 + 2ab + b^2$ — hva kjennetegner det midterste leddet $2ab$?',
    options: ['Det er det dobbelte produktet av $a$ og $b$', 'Det er summen av $a$ og $b$', 'Det er kvadratet av $a$ og $b$', 'Det er halvparten av produktet av $a$ og $b$'],
    explanation: 'Mønsteret i kvadratsetningene er at det midterste leddet alltid er dobbelt produkt av de to leddene.',
  },
  {
    question: 'For hvilken verdi av $c$ er $x^2 + 10x + c$ et fullstendig kvadrat?',
    options: ['$c = 25$', '$c = 5$', '$c = 10$', '$c = 100$'],
    explanation: '$c = \\left(\\frac{10}{2}\\right)^2 = 5^2 = 25$, og da er $x^2 + 10x + 25 = (x+5)^2$.',
  },
],


  '1t-2-11': [
  {
    question: 'Hvilken GeoGebra-kommando gir kvotienten (svaret uten rest) i en polynomdivisjon?',
    options: ['Div(polynom, divisor)', 'Rest(polynom, divisor)', 'Faktoriser(polynom)', 'Løs(polynom = 0)'],
    explanation: 'Div() utfører polynomdivisjonen og returnerer kvotienten, mens Rest() gir resten.',
  },
  {
    question: 'Hvilken GeoGebra-kommando bruker du for å finne resten i en polynomdivisjon?',
    options: ['Rest(polynom, divisor)', 'Div(polynom, divisor)', 'Nullpunkt(polynom)', 'Modulo(polynom)'],
    explanation: 'Rest(polynom, divisor) returnerer resten etter divisjonen.',
  },
  {
    question: 'Hva betyr det hvis Rest(P(x), x - 1) gir $0$ i GeoGebra CAS?',
    options: ['$x - 1$ er en faktor i $P(x)$', '$P(x)$ har ingen nullpunkter', '$P(1) = 1$', 'Divisjonen er umulig'],
    explanation: 'Rest lik null betyr at divisjonen går opp, altså er $x - 1$ en faktor og $x = 1$ et nullpunkt i $P(x)$.',
  },
  {
    question: 'Hva gir kommandoen Div(x^3 - 2x^2 + 5x - 6, x - 1) i GeoGebra CAS?',
    options: ['$x^2 - x + 4$', '$x^2 + x - 4$', '$x^2 - 2x + 5$', '$x^3 - x + 4$'],
    explanation: 'Polynomdivisjonen $(x^3 - 2x^2 + 5x - 6) : (x - 1)$ gir kvotienten $x^2 - x + 4$.',
  },
  {
    question: 'I hvilken del av GeoGebra skriver du kommandoene Div() og Rest()?',
    options: ['I CAS-vinduet', 'I grafikkfeltet', 'I regnearkdelen', 'I sannsynlighetskalkulatoren'],
    explanation: 'Polynomdivisjon med Div() og Rest() gjøres symbolsk i CAS-vinduet i GeoGebra.',
  },
],


  '1t-3-9': [
  {
    question: 'Hvilken GeoGebra-kommando finner punktene der $f(x) = 0$?',
    options: ['Nullpunkt(f)', 'Ekstrempunkt(f)', 'Skjæring(f)', 'Maks(f)'],
    explanation: 'Nullpunkt(f) markerer alle punktene der grafen krysser $x$-aksen, altså der $f(x) = 0$.',
  },
  {
    question: 'Hvilken kommando bruker du for å finne topp- og bunnpunkter til en funksjon i GeoGebra?',
    options: ['Ekstrempunkt(f)', 'Nullpunkt(f)', 'Stigning(f)', 'Tangent(f)'],
    explanation: 'Ekstrempunkt(f) finner alle lokale maksimums- og minimumspunkter til funksjonen.',
  },
  {
    question: 'Hvordan finner du skjæringspunktene mellom to grafer $f$ og $g$ i GeoGebra?',
    options: ['Skjæring(f, g)', 'Nullpunkt(f, g)', 'Ekstrempunkt(f, g)', 'Sum(f, g)'],
    explanation: 'Skjæring(f, g) finner punktene der de to grafene møtes, altså der $f(x) = g(x)$.',
  },
  {
    question: 'Hva er et nullpunkt for en funksjon $f$?',
    options: ['En $x$-verdi der $f(x) = 0$', 'Punktet der grafen krysser $y$-aksen', 'Et punkt der grafen flater ut', 'Funksjonsverdien når $x = 0$'],
    explanation: 'Nullpunktene er $x$-verdiene der grafen skjærer $x$-aksen, det vil si løsningene av $f(x) = 0$.',
  },
  {
    question: 'Hva gjør kommandoen Maks(f, a, b) i GeoGebra?',
    options: ['Finner maksimum for $f$ i intervallet $[a, b]$', 'Finner alle nullpunkter mellom $a$ og $b$', 'Tegner grafen fra $a$ til $b$', 'Finner den største av verdiene $a$ og $b$'],
    explanation: 'Maks(f, a, b) finner det høyeste punktet på grafen til $f$ i intervallet $[a, b]$.',
  },
],


  '1t-4-1': [
  {
    question: 'Hva er løsningen av et likningssett med to ukjente, grafisk sett?',
    options: ['Skjæringspunktet mellom de to linjene', 'Nullpunktet til den ene linjen', 'Punktet der linjene krysser $y$-aksen', 'Stigningstallet til linjene'],
    explanation: 'Løsningen er punktet $(x, y)$ som passer i begge likningene — der grafene skjærer hverandre.',
  },
  {
    question: 'Hva er det første steget i innsettingsmetoden?',
    options: ['Løse én likning for én variabel', 'Legge sammen de to likningene', 'Gjette en løsning', 'Sette begge likningene lik null'],
    explanation: 'Først løser vi én likning for én variabel, deretter setter vi uttrykket inn i den andre likningen.',
  },
  {
    question: 'Løs likningssettet $y = x + 1$ og $x + y = 5$.',
    options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 1, y = 4$', '$x = 2, y = 2$'],
    explanation: 'Innsetting gir $x + (x + 1) = 5$, så $2x = 4$ og $x = 2$. Da er $y = 2 + 1 = 3$.',
  },
  {
    question: 'Løs likningssettet $2x + y = 7$ og $x - y = 2$ med addisjonsmetoden.',
    options: ['$x = 3, y = 1$', '$x = 1, y = 3$', '$x = 2, y = 3$', '$x = 3, y = -1$'],
    explanation: 'Vi adderer likningene: $3x = 9$, så $x = 3$. Da gir $x - y = 2$ at $y = 1$.',
  },
  {
    question: 'Hvor mange likninger trenger du normalt for å bestemme tre ukjente entydig?',
    options: ['Tre', 'To', 'Én', 'Seks'],
    explanation: 'Vi trenger like mange uavhengige likninger som ukjente — tre ukjente krever tre likninger.',
  },
],


  '1t-4-2': [
  {
    question: 'Når må du snu ulikhetstegnet når du løser en ulikhet?',
    options: ['Når du ganger eller deler med et negativt tall', 'Når du legger til et negativt tall', 'Når du flytter et ledd over likhetstegnet', 'Alltid når du deler'],
    explanation: 'Multiplikasjon eller divisjon med et negativt tall snur ulikhetstegnet. Addisjon og subtraksjon endrer det ikke.',
  },
  {
    question: 'Løs ulikheten $-2x > 6$.',
    options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
    explanation: 'Vi deler på $-2$ og må da snu tegnet: $x < -3$.',
  },
  {
    question: 'Løs ulikheten $3x - 4 < 5$.',
    options: ['$x < 3$', '$x > 3$', '$x < \\frac{1}{3}$', '$x < 9$'],
    explanation: '$3x < 9$ gir $x < 3$. Vi deler på et positivt tall, så tegnet beholdes.',
  },
  {
    question: 'Hva er løsningen av en lineær ulikhet, i motsetning til en likning?',
    options: ['Et intervall med uendelig mange verdier', 'Ett enkelt tall', 'Alltid to tall', 'Bare positive tall'],
    explanation: 'En ulikhet har som regel uendelig mange løsninger som danner et intervall, f.eks. alle $x < 3$.',
  },
  {
    question: 'Løs ulikheten $5 - x \\geq 2$.',
    options: ['$x \\leq 3$', '$x \\geq 3$', '$x \\leq -3$', '$x \\geq 7$'],
    explanation: '$-x \\geq -3$ gir $x \\leq 3$ når vi deler på $-1$ og snur tegnet.',
  },
],


  '1t-4-3': [
  {
    question: 'Hva viser en fortegnslinje for et uttrykk?',
    options: ['Hvor uttrykket er positivt, negativt eller null', 'Hvor grafen er brattest', 'Verdien av uttrykket i hvert punkt', 'Hvor mange løsninger likningen har'],
    explanation: 'Fortegnslinjen viser fortegnet til uttrykket i ulike intervaller, med nullpunktene markert.',
  },
  {
    question: 'For hvilke $x$-verdier er faktoren $(x - 2)$ positiv?',
    options: ['$x > 2$', '$x < 2$', '$x > -2$', 'Alle $x$'],
    explanation: '$x - 2 > 0$ når $x > 2$. For $x < 2$ er faktoren negativ, og i $x = 2$ er den null.',
  },
  {
    question: 'Når er produktet av to faktorer positivt?',
    options: ['Når begge faktorene har samme fortegn', 'Når begge faktorene er positive — bare da', 'Når faktorene har ulikt fortegn', 'Når minst én faktor er positiv'],
    explanation: 'Pluss ganger pluss og minus ganger minus gir begge positivt produkt.',
  },
  {
    question: 'For hvilke $x$ er $f(x) = (x - 1)(x + 3)$ negativ?',
    options: ['$-3 < x < 1$', '$x < -3$ eller $x > 1$', '$1 < x < 3$', '$x < 1$'],
    explanation: 'Mellom nullpunktene $-3$ og $1$ har faktorene ulikt fortegn, så produktet er negativt. Test $x = 0$: $(-1)(3) = -3 < 0$.',
  },
  {
    question: 'Hva markerer vi med en $0$ på fortegnslinjen?',
    options: ['Nullpunktene til faktorene', 'Origo', 'Toppunktet til grafen', 'Skjæringen med $y$-aksen'],
    explanation: 'Vi markerer $x$-verdiene der hver faktor er null, for det er der fortegnet kan skifte.',
  },
],


  '1t-4-4': [
  {
    question: 'Hva er standardmetoden for å løse en andregradsulikhet?',
    options: ['Faktorisere uttrykket og bruke fortegnsskjema', 'Dele på $x$ på begge sider', 'Ta kvadratroten direkte på begge sider', 'Sette inn tilfeldige verdier'],
    explanation: 'Vi flytter alt over på én side, faktoriserer og leser av fortegnene i et fortegnsskjema.',
  },
  {
    question: 'Løs ulikheten $x^2 - 4 > 0$.',
    options: ['$x < -2$ eller $x > 2$', '$-2 < x < 2$', '$x > 2$', '$x > \\pm 2$'],
    explanation: '$(x-2)(x+2) > 0$ når begge faktorene har samme fortegn, altså for $x < -2$ eller $x > 2$.',
  },
  {
    question: 'Løs ulikheten $x^2 - 5x + 6 \\leq 0$.',
    options: ['$2 \\leq x \\leq 3$', '$x \\leq 2$ eller $x \\geq 3$', '$-3 \\leq x \\leq -2$', '$x \\leq 3$'],
    explanation: '$x^2 - 5x + 6 = (x-2)(x-3)$. Produktet er negativt eller null mellom nullpunktene: $2 \\leq x \\leq 3$.',
  },
  {
    question: 'Hva er løsningen av ulikheten $x^2 + 1 > 0$?',
    options: ['Alle reelle tall', '$x > -1$', '$x > 1$', 'Ingen løsning'],
    explanation: '$x^2 \\geq 0$ for alle $x$, så $x^2 + 1 \\geq 1 > 0$ alltid. Ulikheten gjelder for alle reelle tall.',
  },
  {
    question: 'En elev løser $x^2 < 4$ og svarer $x < 2$. Hva er feilen?',
    options: ['Løsningen er $-2 < x < 2$, eleven mister den nedre grensen', 'Svaret skal være $x < 16$', 'Svaret skal være $x > 2$', 'Eleven har gjort alt riktig'],
    explanation: 'Også store negative tall har kvadrat større enn 4, f.eks. $(-3)^2 = 9$. Riktig løsning er $-2 < x < 2$.',
  },
],


  '1t-4-5': [
  {
    question: 'Hvorfor kan vi ikke uten videre gange begge sider av en rasjonal ulikhet med nevneren?',
    options: ['Fordi nevneren kan være negativ, og da må ulikhetstegnet snus', 'Fordi nevneren alltid er null', 'Fordi det gir for mange løsninger', 'Fordi brøker ikke kan ganges'],
    explanation: 'Vi vet ikke fortegnet til nevneren når den inneholder $x$. Derfor samler vi alt på én side og bruker fortegnsskjema i stedet.',
  },
  {
    question: 'Hva kalles en $x$-verdi der nevneren i et rasjonalt uttrykk blir null?',
    options: ['Et bruddpunkt — uttrykket er ikke definert der', 'Et nullpunkt for uttrykket', 'Et toppunkt', 'En løsning av ulikheten'],
    explanation: 'Der nevneren er null, er uttrykket udefinert. Slike bruddpunkter kan aldri være med i løsningen.',
  },
  {
    question: 'Løs ulikheten $\\frac{x - 1}{x + 2} > 0$.',
    options: ['$x < -2$ eller $x > 1$', '$-2 < x < 1$', '$x > 1$', '$x > -2$'],
    explanation: 'Brøken er positiv når teller og nevner har samme fortegn: begge negative for $x < -2$, begge positive for $x > 1$.',
  },
  {
    question: 'Løs ulikheten $\\frac{x + 3}{x - 1} \\leq 0$.',
    options: ['$-3 \\leq x < 1$', '$-3 \\leq x \\leq 1$', '$x \\leq -3$ eller $x > 1$', '$-3 < x < 1$'],
    explanation: 'Brøken er negativ mellom $-3$ og $1$. $x = -3$ gir null og er med, men $x = 1$ gjør nevneren null og må utelates.',
  },
  {
    question: 'Hva er riktig fremgangsmåte for å løse en rasjonal ulikhet?',
    options: ['Flytt alt over på én side, sett på felles brøkstrek og bruk fortegnsskjema', 'Gang med nevneren og løs som vanlig likning', 'Sett teller og nevner lik hverandre', 'Derivér uttrykket og finn nullpunktene'],
    explanation: 'Med alt samlet i én brøk kan vi analysere fortegnet til teller og nevner i et fortegnsskjema.',
  },
],


  '1t-5-8': [
  {
    question: 'Hvilken GeoGebra-kommando lager en trekant direkte av punktene $A$, $B$ og $C$?',
    options: ['Mangekant(A, B, C)', 'Trekant(A, B, C)', 'Linje(A, B, C)', 'Sirkel(A, B, C)'],
    explanation: 'Mangekant(A, B, C) tegner trekanten med de tre punktene som hjørner.',
  },
  {
    question: 'Hvilken kommando tegner et linjestykke mellom punktene $A$ og $B$?',
    options: ['Linjestykke(A, B)', 'Linje(A, B)', 'Stråle(A, B)', 'Vektor(A, B)'],
    explanation: 'Linjestykke(A, B) tegner strekningen fra $A$ til $B$. Linje(A, B) tegner en uendelig lang linje.',
  },
  {
    question: 'Hvilken kommando bruker du for å måle en vinkel i GeoGebra?',
    options: ['Vinkel(A, B, C)', 'Grad(A, B, C)', 'Måling(A, B, C)', 'Bue(A, B, C)'],
    explanation: 'Vinkel(A, B, C) måler vinkelen med toppunkt i $B$, mellom strålene mot $A$ og $C$.',
  },
  {
    question: 'Hvilken sammenheng kan du kontrollere i GeoGebra når du har målt to vinkler og to sider i en trekant?',
    options: ['Sinussetningen: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$', 'Pytagoras i alle trekanter', 'At alle vinkler er $90°$', 'At arealet alltid er $a \\cdot b$'],
    explanation: 'Sinussetningen knytter hver side til sinusen av motstående vinkel og kan kontrolleres med GeoGebra-målinger.',
  },
  {
    question: 'Hva er fordelen med å konstruere figurer med kommandoer fremfor å tegne på frihånd i GeoGebra?',
    options: ['Konstruksjonen beholder egenskapene sine når du drar i punktene', 'Det går raskere å tegne', 'Figuren får penere farger', 'Du slipper å bruke koordinater'],
    explanation: 'En ekte konstruksjon er dynamisk: avhengigheter som rette vinkler og like lengder bevares når du flytter punkter.',
  },
],


  '1t-6-2': [
  {
    question: 'Hva er et matematisk bevis?',
    options: ['En kjede av logiske argumenter som viser at en påstand følger av aksiomer og kjente resultater', 'Mange eksempler som støtter en påstand', 'En overbevisende figur', 'En utregning med kalkulator'],
    explanation: 'Et bevis bygger logisk på definisjoner, aksiomer og tidligere beviste setninger — eksempler alene er ikke nok.',
  },
  {
    question: 'Hva kjennetegner et indirekte bevis (motsigelsesbevis)?',
    options: ['Vi antar det motsatte av påstanden og viser at det fører til en selvmotsigelse', 'Vi sjekker mange tilfeller til vi er overbevist', 'Vi tegner en figur som illustrerer påstanden', 'Vi beviser en annen, enklere påstand'],
    explanation: 'I et indirekte bevis antar vi at påstanden er usann. Når dette gir en motsigelse, må påstanden være sann.',
  },
  {
    question: 'Hvilke to trinn består et induksjonsbevis av?',
    options: ['Basistrinn og induksjonstrinn', 'Hypotese og konklusjon', 'Antakelse og motsigelse', 'Definisjon og eksempel'],
    explanation: 'Vi viser at påstanden gjelder for det første tilfellet (basis), og at hvis den gjelder for $n$, gjelder den for $n+1$.',
  },
  {
    question: 'Hva er et lemma?',
    options: ['En hjelpesetning som brukes til å bevise et større resultat', 'En påstand som ikke kan bevises', 'Et moteksempel', 'En definisjon'],
    explanation: 'Et lemma er en mindre setning som bevises først og deretter brukes som byggekloss i beviset for hovedresultatet.',
  },
  {
    question: 'I beviset for 1. kvadratsetning regner vi ut $(a+b)(a+b) = a^2 + ab + ba + b^2$. Hvilken regneregel brukes?',
    options: ['Den distributive loven', 'Pytagoras\' setning', 'Potensreglene', 'Konjugatsetningen'],
    explanation: 'Vi ganger hvert ledd i den første parentesen med hvert ledd i den andre — det er den distributive loven.',
  },
],


  '1t-7-1': [
  {
    question: 'Hva er den gjennomsnittlige vekstfarten til $f$ i intervallet $[x_1, x_2]$?',
    options: ['Stigningstallet til sekanten gjennom $(x_1, f(x_1))$ og $(x_2, f(x_2))$', 'Stigningstallet til tangenten i $x_1$', 'Differansen $f(x_2) - f(x_1)$', 'Gjennomsnittet av $f(x_1)$ og $f(x_2)$'],
    explanation: 'Gjennomsnittlig vekstfart er $\\frac{f(x_2) - f(x_1)}{x_2 - x_1}$ — nettopp sekantens stigningstall.',
  },
  {
    question: 'Finn den gjennomsnittlige vekstfarten til $f(x) = x^2$ fra $x = 1$ til $x = 3$.',
    options: ['$4$', '$8$', '$2$', '$3$'],
    explanation: '$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$.',
  },
  {
    question: 'Hva er stigningstallet til linjen gjennom punktene $(1, 2)$ og $(4, 11)$?',
    options: ['$3$', '$\\frac{1}{3}$', '$9$', '$-3$'],
    explanation: '$a = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$.',
  },
  {
    question: 'Hva er ettpunktsformelen for en linje med stigningstall $a$ gjennom punktet $(x_0, y_0)$?',
    options: ['$y - y_0 = a(x - x_0)$', '$y = ax_0 + y_0$', '$y + y_0 = a(x + x_0)$', '$y - x_0 = a(x - y_0)$'],
    explanation: 'Ettpunktsformelen $y - y_0 = a(x - x_0)$ gir likningen for linjen direkte.',
  },
  {
    question: 'Hva forteller stigningstallet $a$ til en rett linje?',
    options: ['Hvor mye $y$-verdien endres når $x$ øker med $1$', 'Hvor linjen krysser $y$-aksen', 'Hvor linjen krysser $x$-aksen', 'Lengden av linjen'],
    explanation: 'Stigningstallet er endringen i $y$ per enhet økning i $x$.',
  },
],


  '1t-7-2': [
  {
    question: 'Hva er den momentane vekstfarten til $f$ i punktet $x = a$?',
    options: ['Stigningstallet til tangenten i punktet $(a, f(a))$', 'Stigningstallet til sekanten over et stort intervall', 'Funksjonsverdien $f(a)$', 'Avstanden fra punktet til $x$-aksen'],
    explanation: 'Momentan vekstfart er definert som tangentens stigningstall i punktet.',
  },
  {
    question: 'Hva er forskjellen på gjennomsnittlig og momentan vekstfart?',
    options: ['Gjennomsnittlig gjelder et intervall (sekant), momentan gjelder ett punkt (tangent)', 'De er alltid like store', 'Momentan gjelder et intervall, gjennomsnittlig ett punkt', 'Gjennomsnittlig er alltid størst'],
    explanation: 'Gjennomsnittlig vekstfart bruker sekanten mellom to punkter, momentan vekstfart bruker tangenten i ett punkt.',
  },
  {
    question: 'Hva kjennetegner tangenten til en graf i et punkt?',
    options: ['Den berører grafen i punktet og har samme retning som grafen der', 'Den skjærer grafen i nøyaktig to punkter', 'Den står vinkelrett på grafen', 'Den går alltid gjennom origo'],
    explanation: 'Tangenten følger grafens retning i berøringspunktet — derfor gir stigningstallet dens momentane vekstfart.',
  },
  {
    question: 'Tangenten til en graf i punktet $(2, 3)$ går også gjennom $(4, 7)$. Hva er den momentane vekstfarten i $x = 2$?',
    options: ['$2$', '$4$', '$\\frac{1}{2}$', '$3$'],
    explanation: 'Tangentens stigningstall er $\\frac{7 - 3}{4 - 2} = \\frac{4}{2} = 2$, og det er den momentane vekstfarten.',
  },
  {
    question: 'Hvordan kan vi tilnærme momentan vekstfart uten å kjenne tangenten?',
    options: ['Beregne gjennomsnittlig vekstfart over et svært lite intervall rundt punktet', 'Beregne gjennomsnittlig vekstfart over et stort intervall', 'Lese av funksjonsverdien i punktet', 'Finne nullpunktene til funksjonen'],
    explanation: 'Når intervallet krymper, nærmer sekantens stigningstall seg tangentens — altså den momentane vekstfarten.',
  },
],


  '1t-7-3': [
  {
    question: 'Hva forteller $f\'(a)$ oss om funksjonen $f$?',
    options: ['Stigningstallet til tangenten til grafen i $x = a$', 'Funksjonsverdien i $x = a$', 'Arealet under grafen frem til $a$', 'Avstanden fra grafen til $x$-aksen'],
    explanation: '$f\'(a)$ er den momentane vekstfarten — tangentens stigningstall i punktet $(a, f(a))$.',
  },
  {
    question: 'Hva er den deriverte av en konstant funksjon $f(x) = c$?',
    options: ['$f\'(x) = 0$', '$f\'(x) = c$', '$f\'(x) = 1$', '$f\'(x) = x$'],
    explanation: 'En konstant funksjon har en vannrett graf uten stigning, så den deriverte er $0$ overalt.',
  },
  {
    question: 'Hva er $f\'(x)$ når $f(x) = 3x + 5$?',
    options: ['$3$', '$5$', '$3x$', '$8$'],
    explanation: 'En lineær funksjon $ax + b$ har konstant stigningstall $a$, så $f\'(x) = 3$.',
  },
  {
    question: 'Bruk potensregelen: Hva er $f\'(x)$ når $f(x) = x^3$?',
    options: ['$3x^2$', '$x^2$', '$3x$', '$\\frac{x^4}{4}$'],
    explanation: 'Potensregelen gir $(x^n)\' = n \\cdot x^{n-1}$, så $(x^3)\' = 3x^2$.',
  },
  {
    question: 'La $f(x) = x^2$. Hva er $f\'(2)$?',
    options: ['$4$', '$2$', '$8$', '$1$'],
    explanation: '$f\'(x) = 2x$, så $f\'(2) = 2 \\cdot 2 = 4$.',
  },
],


  '1t-7-4': [
  {
    question: 'Hvilken GeoGebra-kommando finner den deriverte av funksjonen $f$?',
    options: ['Derivert(f)', 'Tangent(f)', 'Stigning(f)', 'Integral(f)'],
    explanation: 'Derivert(f) returnerer den deriverte funksjonen $f\'$.',
  },
  {
    question: 'Hva gir kommandoen Derivert(x^2 - 3x + 1) i GeoGebra?',
    options: ['$2x - 3$', '$2x + 1$', '$x - 3$', '$2x - 3x$'],
    explanation: 'Vi deriverer ledd for ledd: $(x^2)\' = 2x$, $(-3x)\' = -3$ og $(1)\' = 0$, som gir $2x - 3$.',
  },
  {
    question: 'Hva gjør kommandoen Tangent(A, f) i GeoGebra?',
    options: ['Tegner tangenten til $f$ i punktet $A$', 'Finner den deriverte av $f$', 'Tegner sekanten gjennom $A$', 'Finner nullpunktet nærmest $A$'],
    explanation: 'Tangent(A, f) tegner tangentlinjen til grafen i punktet $A$.',
  },
  {
    question: 'Hvilken kommando gir stigningstallet til en linje i GeoGebra?',
    options: ['Stigning(linje)', 'Derivert(linje)', 'Vinkel(linje)', 'Retning(linje)'],
    explanation: 'Stigning(linje) returnerer stigningstallet, f.eks. til en tangent du har tegnet.',
  },
  {
    question: 'Hvordan kan du finne $f\'(2)$ grafisk i GeoGebra?',
    options: ['Tegn tangenten i punktet der $x = 2$ og bruk Stigning() på den', 'Bruk Nullpunkt(f) og les av verdien', 'Bruk Ekstrempunkt(f)', 'Les av $f(2)$ på grafen'],
    explanation: 'Tangent((2, f(2)), f) etterfulgt av Stigning(tangenten) gir tangentens stigningstall, som er $f\'(2)$.',
  },
],


  '1t-7-5': [
  {
    question: 'Hva er Newton-kvotienten for $f$ i punktet $x$ med steglengde $h$?',
    options: ['$\\frac{f(x + h) - f(x)}{h}$', '$\\frac{f(x) - h}{x}$', '$\\frac{f(x + h) + f(x)}{h}$', '$\\frac{f(x+h) - f(x)}{x}$'],
    explanation: 'Newton-kvotienten $\\frac{f(x+h) - f(x)}{h}$ er stigningstallet til sekanten gjennom $(x, f(x))$ og $(x+h, f(x+h))$.',
  },
  {
    question: 'Hva er Newton-kvotienten geometrisk sett?',
    options: ['Stigningstallet til en sekant', 'Stigningstallet til tangenten', 'Arealet under grafen', 'Avstanden mellom to punkter på grafen'],
    explanation: 'Den måler gjennomsnittlig vekstfart mellom to punkter — altså sekantens stigningstall.',
  },
  {
    question: 'Hvordan er den deriverte definert formelt?',
    options: ['$f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$', '$f\'(x) = \\frac{f(x+h) - f(x)}{h}$ for $h = 1$', '$f\'(x) = \\lim_{h \\to \\infty} \\frac{f(x+h) - f(x)}{h}$', '$f\'(x) = \\frac{f(x)}{x}$'],
    explanation: 'Den deriverte er grenseverdien av Newton-kvotienten når steglengden $h$ går mot null.',
  },
  {
    question: 'La $f(x) = x^2$. Hva er Newton-kvotienten i $x = 1$ med $h = 0{,}1$?',
    options: ['$2{,}1$', '$2$', '$0{,}21$', '$1{,}21$'],
    explanation: '$\\frac{f(1{,}1) - f(1)}{0{,}1} = \\frac{1{,}21 - 1}{0{,}1} = 2{,}1$. Den eksakte deriverte er $2$, så tilnærmingen er god.',
  },
  {
    question: 'Hva er sentraldifferansen, og hvorfor brukes den?',
    options: ['$\\frac{f(x+h) - f(x-h)}{2h}$ — den gir vanligvis en mer nøyaktig numerisk derivert', 'En metode for å finne nullpunkter', '$\\frac{f(x+h) + f(x-h)}{2}$ — gjennomsnittet av to verdier', 'En formel for andrederiverte'],
    explanation: 'Sentraldifferansen bruker punkter på begge sider av $x$ og gir som regel bedre tilnærming enn den ensidige Newton-kvotienten.',
  },
],


  '1t-7-6': [
  {
    question: 'Hva sier potensregelen for derivasjon?',
    options: ['$(x^n)\' = n \\cdot x^{n-1}$', '$(x^n)\' = x^{n-1}$', '$(x^n)\' = n \\cdot x^{n+1}$', '$(x^n)\' = \\frac{x^{n+1}}{n+1}$'],
    explanation: 'Eksponenten kommer ned som faktor, og eksponenten reduseres med 1.',
  },
  {
    question: 'Hva er $f\'(x)$ når $f(x) = 4x^3$?',
    options: ['$12x^2$', '$4x^2$', '$12x^3$', '$7x^2$'],
    explanation: 'Konstantfaktoren beholdes: $f\'(x) = 4 \\cdot 3x^2 = 12x^2$.',
  },
  {
    question: 'Hva er $f\'(x)$ når $f(x) = x^4 - 3x^2 + 7$?',
    options: ['$4x^3 - 6x$', '$4x^3 - 6x + 7$', '$4x^3 - 3x$', '$x^3 - 6x$'],
    explanation: 'Sumregelen lar oss derivere ledd for ledd: $4x^3 - 6x + 0$. Konstanten $7$ forsvinner.',
  },
  {
    question: 'Hva er $f\'(x)$ når $f(x) = x^{-2}$?',
    options: ['$-2x^{-3}$', '$-2x^{-1}$', '$2x^{-3}$', '$x^{-3}$'],
    explanation: 'Potensregelen gjelder også for negative eksponenter: $(x^{-2})\' = -2 \\cdot x^{-2-1} = -2x^{-3}$.',
  },
  {
    question: 'La $f(x) = 2x^3 - x$. Hva er den andrederiverte $f\'\'(x)$?',
    options: ['$12x$', '$6x^2 - 1$', '$12x - 1$', '$6x$'],
    explanation: 'Først $f\'(x) = 6x^2 - 1$, deretter $f\'\'(x) = 12x$.',
  },
],


  '1t-7-7': [
  {
    question: 'Hvordan kjenner du igjen et toppunkt med fortegnsanalyse av $f\'$?',
    options: ['$f\'$ skifter fra positiv til negativ i punktet', '$f\'$ skifter fra negativ til positiv i punktet', '$f\'$ er positiv i punktet', '$f$ er null i punktet'],
    explanation: 'Før et toppunkt vokser funksjonen ($f\' > 0$), etterpå avtar den ($f\' < 0$).',
  },
  {
    question: 'Hvis $s(t)$ er posisjonen ved tiden $t$, hva er farten $v(t)$?',
    options: ['$v(t) = s\'(t)$', '$v(t) = s(t) \\cdot t$', '$v(t) = s\'\'(t)$', '$v(t) = \\frac{s(t)}{t}$'],
    explanation: 'Farten er den momentane endringen i posisjon, altså den deriverte av posisjonsfunksjonen.',
  },
  {
    question: 'Hva er sammenhengen mellom akselerasjon og posisjon $s(t)$?',
    options: ['$a(t) = s\'\'(t)$', '$a(t) = s\'(t)$', '$a(t) = s(t)^2$', '$a(t) = \\frac{1}{s(t)}$'],
    explanation: 'Akselerasjonen er den deriverte av farten, og dermed den andrederiverte av posisjonen.',
  },
  {
    question: 'Funksjonen $f(x) = -x^2 + 4x$ beskriver et overskudd. For hvilken $x$ er overskuddet størst?',
    options: ['$x = 2$', '$x = 4$', '$x = -2$', '$x = 0$'],
    explanation: '$f\'(x) = -2x + 4 = 0$ gir $x = 2$. Siden $f\'$ skifter fra $+$ til $-$, er dette et toppunkt.',
  },
  {
    question: 'En bil har posisjon $s(t) = t^2$ (meter etter $t$ sekunder). Hva er farten ved $t = 3$?',
    options: ['$6$ m/s', '$9$ m/s', '$3$ m/s', '$12$ m/s'],
    explanation: '$v(t) = s\'(t) = 2t$, så $v(3) = 6$ m/s.',
  },
],


  '1t-8-1': [
  {
    question: 'Hva er en matematisk modell?',
    options: ['En forenklet matematisk beskrivelse av en virkelig situasjon', 'En nøyaktig kopi av virkeligheten', 'En graf uten tall', 'Et fysisk byggesett'],
    explanation: 'En modell bruker funksjoner og likninger til å beskrive virkeligheten, men er alltid en forenkling.',
  },
  {
    question: 'Hva betyr interpolering?',
    options: ['Å bruke modellen til å anslå verdier mellom kjente datapunkter', 'Å bruke modellen utenfor dataområdet', 'Å fjerne datapunkter som ikke passer', 'Å tegne grafen på nytt'],
    explanation: 'Interpolering skjer innenfor området der vi har data, og er som regel pålitelig.',
  },
  {
    question: 'Hva betyr ekstrapolering?',
    options: ['Å bruke modellen til å anslå verdier utenfor området vi har data for', 'Å anslå verdier mellom datapunktene', 'Å finne gjennomsnittet av dataene', 'Å bytte til en annen modelltype'],
    explanation: 'Ekstrapolering går utenfor dataområdet og er derfor mer usikkert enn interpolering.',
  },
  {
    question: 'Hvorfor er ekstrapolering risikabelt?',
    options: ['Modellen er ikke testet utenfor dataområdet, og utviklingen kan endre seg', 'Det krever mer regning', 'Grafen blir vanskeligere å tegne', 'Det er forbudt i matematikk'],
    explanation: 'Utenfor dataområdet vet vi ikke om sammenhengen fortsetter — modellen kan gi helt urimelige verdier.',
  },
  {
    question: 'Kostnaden ved en produksjon er modellert ved $K(x) = 50x + 200$. Hva representerer tallet $200$?',
    options: ['Den faste startkostnaden, altså kostnaden når $x = 0$', 'Kostnaden per produserte enhet', 'Maksimal kostnad', 'Antall enheter som produseres'],
    explanation: 'Konstantleddet er verdien når $x = 0$ — en fast kostnad uavhengig av produksjonen. $50$ er kostnaden per enhet.',
  },
],


  '1t-8-2': [
  {
    question: 'Hvilken form har en potensfunksjon?',
    options: ['$f(x) = a \\cdot x^b$', '$f(x) = a \\cdot b^x$', '$f(x) = ax + b$', '$f(x) = a \\cdot \\sqrt{b} \\cdot x$'],
    explanation: 'En potensfunksjon har variabelen i grunntallet: $f(x) = a \\cdot x^b$ med $a \\neq 0$.',
  },
  {
    question: 'Hvilken av disse er en potensfunksjon?',
    options: ['$f(x) = 3x^{2{,}5}$', '$f(x) = 2^x$', '$f(x) = 3x + 1$', '$f(x) = x^2 + x$'],
    explanation: '$3x^{2{,}5}$ er på formen $a \\cdot x^b$. $2^x$ er en eksponentialfunksjon, og de andre er ikke rene potensfunksjoner.',
  },
  {
    question: 'Fritt fall kan modelleres med $s(t) = 4{,}9t^2$. Hvor langt faller en gjenstand på $3$ sekunder?',
    options: ['$44{,}1$ m', '$14{,}7$ m', '$29{,}4$ m', '$88{,}2$ m'],
    explanation: '$s(3) = 4{,}9 \\cdot 3^2 = 4{,}9 \\cdot 9 = 44{,}1$ meter.',
  },
  {
    question: 'La $f(x) = 2x^3$. Hva er $f(2)$?',
    options: ['$16$', '$12$', '$8$', '$64$'],
    explanation: '$f(2) = 2 \\cdot 2^3 = 2 \\cdot 8 = 16$.',
  },
  {
    question: 'Hva er forskjellen på en potensfunksjon og en eksponentialfunksjon?',
    options: ['Potensfunksjonen har variabelen i grunntallet, eksponentialfunksjonen har den i eksponenten', 'De er to navn på samme funksjonstype', 'Potensfunksjonen har variabelen i eksponenten', 'Eksponentialfunksjoner finnes bare for $x > 0$'],
    explanation: '$x^b$ (potens) mot $b^x$ (eksponential) — plasseringen av variabelen avgjør funksjonstypen.',
  },
],


  '1t-8-3': [
  {
    question: 'Hva er lineær regresjon?',
    options: ['Å finne den rette linjen som passer best til et sett datapunkter', 'Å tegne en linje gjennom de to første punktene', 'Å finne gjennomsnittet av $y$-verdiene', 'Å fjerne avvikende datapunkter'],
    explanation: 'Regresjonslinjen velges slik at summen av de kvadrerte vertikale avvikene blir minst mulig.',
  },
  {
    question: 'En regresjonslinje er $y = 2{,}5x + 10$. Hvilken $y$-verdi predikerer modellen for $x = 4$?',
    options: ['$20$', '$16{,}5$', '$12{,}5$', '$50$'],
    explanation: '$y = 2{,}5 \\cdot 4 + 10 = 10 + 10 = 20$.',
  },
  {
    question: 'Hva er riktig om korrelasjon og kausalitet?',
    options: ['Korrelasjon betyr ikke nødvendigvis at den ene variabelen forårsaker den andre', 'Korrelasjon beviser alltid årsakssammenheng', 'Kausalitet og korrelasjon er det samme', 'To variabler kan aldri korrelere uten årsakssammenheng'],
    explanation: 'To størrelser kan samvariere uten at den ene påvirker den andre — f.eks. på grunn av en felles bakenforliggende årsak.',
  },
  {
    question: 'I regresjonslinjen $y = ax + b$ — hva forteller stigningstallet $a$?',
    options: ['Hvor mye $y$ endres i gjennomsnitt når $x$ øker med $1$', 'Verdien av $y$ når $x = 0$', 'Hvor mange datapunkter som ble brukt', 'Hvor god modellen er'],
    explanation: '$a$ angir den gjennomsnittlige endringen i $y$ per enhet økning i $x$. $b$ er verdien ved $x = 0$.',
  },
  {
    question: 'Issalget øker når temperaturen øker. Hva slags korrelasjon er dette?',
    options: ['Positiv korrelasjon', 'Negativ korrelasjon', 'Ingen korrelasjon', 'Omvendt proporsjonalitet'],
    explanation: 'Når begge størrelsene øker sammen, er korrelasjonen positiv.',
  },
],


  '1t-8-4': [
  {
    question: 'Hva er et residual i regresjonsanalyse?',
    options: ['Forskjellen mellom observert verdi og modellens predikerte verdi', 'Modellens største verdi', 'Avstanden mellom to datapunkter', 'Stigningstallet til regresjonslinjen'],
    explanation: 'Residualet er $e_i = y_i - \\hat{y}_i$, altså hvor mye observasjonen avviker fra modellen.',
  },
  {
    question: 'Hva tyder det på når residualene er tilfeldig spredt rundt null?',
    options: ['Modellen passer godt til dataene', 'Modellen er feil', 'Dataene inneholder feil', 'Vi må fjerne flere datapunkter'],
    explanation: 'Tilfeldige residualer uten mønster betyr at modellen fanger opp strukturen i dataene.',
  },
  {
    question: 'Et datasett vokser med en fast prosent per tidsenhet. Hvilken regresjonstype passer best?',
    options: ['Eksponentialregresjon', 'Lineær regresjon', 'Polynomregresjon', 'Potensregresjon'],
    explanation: 'Fast prosentvis vekst per tidsenhet er kjennetegnet på en eksponentiell sammenheng.',
  },
  {
    question: 'Residualene viser et tydelig systematisk mønster (f.eks. en bue). Hva tyder det på?',
    options: ['Modelltypen passer ikke — vi bør prøve en annen funksjonstype', 'Modellen er perfekt', 'Dataene er tilfeldige', 'Regresjonen er regnet feil'],
    explanation: 'Et systematisk mønster i residualene betyr at modellen ikke fanger opp formen på sammenhengen.',
  },
  {
    question: 'Hvilken form har modellen ved potensregresjon?',
    options: ['$y = a \\cdot x^b$', '$y = a \\cdot b^x$', '$y = ax + b$', '$y = ax^2 + bx + c$'],
    explanation: 'Potensregresjon tilpasser en potensfunksjon $y = a \\cdot x^b$ til dataene.',
  },
],


  '1t-8-5': [
  {
    question: 'Hva betyr det at en modell har forklaringsgrad $r^2 = 1$?',
    options: ['Modellen forklarer all variasjon i dataene — perfekt tilpasning', 'Modellen forklarer ingenting', 'Modellen har nøyaktig ett datapunkt', 'Modellen er lineær'],
    explanation: '$r^2 = 1$ (100 %) betyr at alle datapunktene ligger nøyaktig på modellkurven.',
  },
  {
    question: 'En modell har $r^2 = 0{,}85$. Hvordan tolker vi det?',
    options: ['Modellen forklarer $85\\,\\%$ av variasjonen i dataene', 'Modellen er $85\\,\\%$ sannsynlig', '$85\\,\\%$ av datapunktene ligger på linjen', 'Modellen bommer med $85\\,\\%$'],
    explanation: 'Forklaringsgraden angir andelen av variasjonen i dataene som modellen forklarer.',
  },
  {
    question: 'Er en høy $r^2$-verdi alene nok til å si at modellen er god?',
    options: ['Nei — vi må også vurdere residualer og om modellen er rimelig i praksis', 'Ja, høy $r^2$ garanterer en god modell', 'Ja, hvis $r^2 > 0{,}5$', 'Nei, $r^2$ sier ingenting om tilpasning'],
    explanation: 'En modell kan ha høy $r^2$ og likevel gi meningsløse prediksjoner, særlig utenfor dataområdet.',
  },
  {
    question: 'Hva bør du vurdere når du velger mellom flere modeller for samme datasett?',
    options: ['Forklaringsgrad, residualmønster og om modellen gir mening i den praktiske situasjonen', 'Bare hvilken modell som har høyest $r^2$', 'Bare hvilken modell som er enklest å regne med', 'Bare hvilken graf som ser penest ut'],
    explanation: 'God modellvurdering kombinerer tallmål som $r^2$ med residualanalyse og faglig rimelighet.',
  },
  {
    question: 'En befolkningsmodell gir negativt folketall for år 2080. Hva forteller det oss?',
    options: ['Modellen er ugyldig utenfor sitt gyldighetsområde og kan ikke brukes så langt frem', 'Folketallet vil faktisk bli negativt', 'Modellen må ganges med $-1$', 'Dataene fra fortiden er feil'],
    explanation: 'Urimelige verdier ved ekstrapolering viser at modellen har et begrenset gyldighetsområde.',
  },
],

};

export default quizData_1t;
