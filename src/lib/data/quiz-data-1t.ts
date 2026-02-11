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
    options: ['$\frac{1}{16}$', '$-8$', '$16$', '$-16$'],
    explanation: 'Negativ eksponent betyr at vi tar den omvendte: $4^{-2} = \frac{1}{4^2} = \frac{1}{16}$.',
  },
  {
    question: 'Hva er $\left(\frac{a}{b}\right)^2$?',
    options: ['$\frac{a^2}{b^2}$', '$a^2 \cdot b^2$', '$\frac{2a}{2b}$', '$\frac{a}{b^2}$'],
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
    question: 'Hva er $\frac{2}{3} \cdot \frac{3}{4}$?',
    options: ['$\frac{1}{2}$', '$\frac{6}{12}$', '$\frac{5}{7}$', '$\frac{2}{4}$'],
    explanation: 'Når vi ganger brøker, ganger vi teller med teller og nevner med nevner: $\frac{2 \cdot 3}{3 \cdot 4} = \frac{6}{12} = \frac{1}{2}$.',
  },
  {
    question: 'Hva er $\frac{2}{5} \div \frac{4}{3}$?',
    options: ['$\frac{3}{10}$', '$\frac{8}{15}$', '$\frac{6}{20}$', '$\frac{2}{5}$'],
    explanation: 'Å dele med en brøk er det samme som å gange med den omvendte: $\frac{2}{5} \cdot \frac{3}{4} = \frac{6}{20} = \frac{3}{10}$.',
  },
  {
    question: 'Hva får vi når vi forkorter $\frac{12}{18}$?',
    options: ['$\frac{2}{3}$', '$\frac{6}{9}$', '$\frac{4}{6}$', '$\frac{3}{2}$'],
    explanation: 'Både $12$ og $18$ kan deles på $6$: $\frac{12}{18} = \frac{2}{3}$.',
  },
  {
    question: 'Hva er $\frac{1}{3} + \frac{1}{4}$?',
    options: ['$\frac{7}{12}$', '$\frac{2}{7}$', '$\frac{1}{7}$', '$\frac{2}{12}$'],
    explanation: 'Vi må ha fellesnevner: $\frac{1}{3} = \frac{4}{12}$ og $\frac{1}{4} = \frac{3}{12}$. $\frac{4}{12} + \frac{3}{12} = \frac{7}{12}$.',
  },
  {
    question: 'Hvordan utvider vi $\frac{2}{5}$ til nevner $15$?',
    options: ['$\frac{6}{15}$', '$\frac{10}{15}$', '$\frac{2}{15}$', '$\frac{3}{15}$'],
    explanation: 'Vi ganger både teller og nevner med $3$: $\frac{2 \cdot 3}{5 \cdot 3} = \frac{6}{15}$.',
  },
],


  '1t-1-5': [
  {
    question: 'Hva er $\sqrt{16}$?',
    options: ['$4$', '$8$', '$256$', '$2$'],
    explanation: 'Kvadratroten av $16$ er $4$ fordi $4 \cdot 4 = 16$.',
  },
  {
    question: 'Hva er $\sqrt{a} \cdot \sqrt{b}$?',
    options: ['$\sqrt{ab}$', '$\sqrt{a+b}$', '$ab$', '$\frac{\sqrt{a}}{\sqrt{b}}$'],
    explanation: 'Produktregelen for roter: $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$.',
  },
  {
    question: 'Hvordan førenkles $\sqrt{50}$?',
    options: ['$5\sqrt{2}$', '$25\sqrt{2}$', '$\sqrt{50}$', '$10\sqrt{5}$'],
    explanation: '$\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25} \cdot \sqrt{2} = 5\sqrt{2}$.',
  },
  {
    question: 'Hva er $\sqrt{a^2}$?',
    options: ['$|a|$', '$a$', '$a^2$', '$\sqrt{a}$'],
    explanation: '$\sqrt{a^2} = |a|$ fordi kvadratroten alltid er positiv.',
  },
  {
    question: 'Hva er $3\sqrt{2} + 5\sqrt{2}$?',
    options: ['$8\sqrt{2}$', '$15\sqrt{2}$', '$\sqrt{8}$', '$8\sqrt{4}$'],
    explanation: 'Vi legger sammen like rotuttrykk: $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$.',
  },
],


  '1t-1-6': [
  {
    question: 'Hvordan forkortes $\frac{x^2 - 4}{x + 2}$?',
    options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$\frac{x-4}{x+2}$'],
    explanation: '$x^2 - 4 = (x-2)(x+2)$. Når vi forkorter med $(x+2)$ får vi $x - 2$.',
  },
  {
    question: 'Hva er $\frac{2}{x} + \frac{3}{x}$?',
    options: ['$\frac{5}{x}$', '$\frac{6}{x^2}$', '$\frac{5}{2x}$', '$2x + 3x$'],
    explanation: 'Når nevnerne er like, adderer vi tellerne: $\frac{2}{x} + \frac{3}{x} = \frac{5}{x}$.',
  },
  {
    question: 'Hva er fellesnevneren for $\frac{1}{x}$ og $\frac{1}{x+1}$?',
    options: ['$x(x+1)$', '$x + x + 1$', '$1$', '$x^2 + 1$'],
    explanation: 'Fellesnevneren er produktet av de to nevnerne: $x(x+1)$.',
  },
  {
    question: 'Hvordan førenkles $\frac{3x}{6x^2}$?',
    options: ['1/(2x)', '$\\frac{1}{2}$', 'x/2', '2/x'],
    explanation: 'Vi forkorter med $3x$: $\frac{3x}{6x^2} = \frac{1}{2x}$.',
  },
  {
    question: 'Hva er $\frac{x}{2} \div \frac{x}{4}$?',
    options: ['2', '$\\frac{1}{2}$', 'x^2/8', '4x'],
    explanation: 'Å dele med en brøk er å gange med den omvendte: $\frac{x}{2} \cdot \frac{4}{x} = \frac{4x}{2x} = 2$.',
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
    question: 'Hva er $\frac{6x^3}{2x}$?',
    options: ['$3x^2$', '$3x^3$', '$4x^2$', '$6x^2$'],
    explanation: 'Vi deler koeffisientene ($6/2=3$) og trekker fra eksponentene ($3-1=2$): $3x^2$.',
  },
  {
    question: 'Hva kalles svåret når vi deler et polynom på et annet?',
    options: ['Kvotienten', 'Dividenden', 'Divisoren', 'Resten'],
    explanation: 'Når vi deler P(x) på D(x), kalles svåret Q(x) for kvotienten.',
  },
  {
    question: 'Hva er $\frac{8x^4 + 4x^2}{2x}$?',
    options: ['$4x^3 + 2x$', '$4x^4 + 2x^2$', '$6x^3$', '$4x^3 + 4x$'],
    explanation: 'Vi deler hvert ledd: $\frac{8x^4}{2x} = 4x^3$ og $\frac{4x^2}{2x} = 2x$.',
  },
  {
    question: 'Hva betyr det at resten er 0 ved polynomdivisjon?',
    options: ['Divisoren går opp i dividenden', 'Kvotienten er 0', 'Dividenden er 0', 'Divisoren er 0'],
    explanation: 'Når resten er 0, går divisoren opp i dividenden uten rest.',
  },
  {
    question: 'Hva er $\frac{12x^5}{4x^2}$?',
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
    explanation: 'Vi deler begge sider på $3$: $x = \frac{15}{3} = 5$.',
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
    options: ['Hvis $A \cdot B = 0$, så er $A = 0$ eller $B = 0$', '$A + B = 0$ betyr $A = B$', '$0 \cdot x = x$', '$A/0 = 0$'],
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
    options: ['$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$', '$x = -\frac{b}{a}$', '$x = \frac{c}{a}$', '$x = a + b + c$'],
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
    question: 'Hvordan løser vi $\frac{x}{3} = 4$?',
    options: ['Ganger begge sider med 3', 'Deler begge sider på 3', 'Trekker fra 3', 'Legger til 3'],
    explanation: 'Vi ganger begge sider med nevneren $3$: $x = 4 \cdot 3 = 12$.',
  },
  {
    question: 'Hva er løsningen på $\frac{6}{x} = 2$?',
    options: ['x = 3', 'x = 12', 'x = 4', 'x = $\\frac{1}{3}$'],
    explanation: 'Vi ganger begge sider med $x$: $6 = 2x$, så $x = 3$.',
  },
  {
    question: 'Når må vi være forsiktige med brøklikninger?',
    options: ['Når nevneren kan bli 0', 'Når tellæren er stor', 'Når x er positiv', 'Alltid'],
    explanation: 'Vi kan ikke dele på 0, så vi må sjekke at løsningen ikke gjør nevneren lik 0.',
  },
  {
    question: 'Hvordan løser vi $\frac{2}{x} + \frac{3}{x} = 10$?',
    options: ['5/x = 10, så x = $\\frac{1}{2}$', 'x = 50', 'x = 5', 'x = 2'],
    explanation: 'Vi trekker sammen: $\frac{5}{x} = 10$, så $x = \frac{5}{10} = \frac{1}{2}$.',
  },
  {
    question: 'Hva er produktregelen for brøklikninger?',
    options: ['Hvis a/b = c/d, så er a*d = b*c', 'a/b + c/d = (a+c)/(b+d)', 'a/b = b/a', 'a*b = c*d'],
    explanation: 'Vi kan krysse og gange: a*d = b*c.',
  },
],


  '1t-2-6': [
  {
    question: 'Hvordan løser vi $\sqrt{x} = 5$?',
    options: ['Kvadrerer begge sider: $x = 25$', 'Tar roten: $x = \sqrt{5}$', 'Deler på $2$: $x = 2{,}5$', '$x = 10$'],
    explanation: 'Vi kvadrerer begge sider: $(\sqrt{x})^2 = 5^2$, så $x = 25$.',
  },
  {
    question: 'Hvorfor må vi kontrollære løsningene i rotlikninger?',
    options: ['Kvadrering kan gi falske løsninger', 'For å sjekke regnefeil', 'Det er ikke nødvendig', 'Fordi sqrt er negativ'],
    explanation: 'Når vi kvadrerer, kan vi introdusere løsninger som ikke fungerer i den opprinnelige likningen.',
  },
  {
    question: 'Hva er løsningen på $\sqrt{x+3} = 4$?',
    options: ['$x = 13$', '$x = 1$', '$x = 7$', '$x = 19$'],
    explanation: 'Vi kvadrerer: $x + 3 = 16$, så $x = 13$. Kontroll: $\sqrt{16} = 4$.',
  },
  {
    question: 'Kan $\sqrt{x} = -3$ ha en løsning?',
    options: ['Nei, $\sqrt{}$ gir alltid positiv verdi', 'Ja, $x = 9$', 'Ja, $x = -9$', 'Ja, $x = -3$'],
    explanation: 'Kvadratroten er alltid positiv eller null, så $\sqrt{x} = -3$ har ingen løsning.',
  },
  {
    question: 'Løs $\sqrt{2x-1} = 3$.',
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
    options: ['$A = \frac{1}{2} \cdot g \cdot h$', '$A = g \cdot h$', '$A = g + h$', '$A = g^2$'],
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
    question: 'Hvis $x^3 + 2x^2 - 5x - 6 = (x-2) \cdot Q(x)$, hva er graden til $Q(x)$?',
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
    explanation: 'Vi setter inn $x = 2$: $f(2) = 3 \cdot 2 + 1 = 6 + 1 = 7$.',
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
    explanation: 'Symmetrilinjen er $x = -\frac{b}{2a} = -\frac{-4}{2 \cdot 1} = \frac{4}{2} = 2$.',
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
    question: 'Hva er definisjonsmengden til $f(x) = \frac{1}{x-3}$?',
    options: ['Alle $x$ unntatt $3$', 'Alle $x$', 'Bare $x = 3$', '$x > 3$'],
    explanation: 'Nevneren er null når $x = 3$, så $x = 3$ er utelukket.',
  },
  {
    question: 'Hvor har $f(x) = \frac{2}{x^2-4}$ vertikale asymptoter?',
    options: ['$x = 2$ og $x = -2$', '$x = 4$ og $x = -4$', '$x = 0$', 'Ingen'],
    explanation: '$x^2 - 4 = 0$ når $x = 2$ eller $x = -2$.',
  },
  {
    question: 'Hva skjer med $f(x) = \frac{1}{x}$ når $x$ går mot uendelig?',
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
    question: 'Hva er vekstfaktoren i $f(x) = 500 \cdot 1{,}05^x$?',
    options: ['$1{,}05$', '$500$', '$0{,}05$', '$5$'],
    explanation: 'Vekstfaktoren er grunntallet i eksponenten, altså $1{,}05$.',
  },
  {
    question: 'Hvis en befolkning vokser med 3% årlig, hva er vekstfaktoren?',
    options: ['$1{,}03$', '$0{,}03$', '$3$', '$1{,}3$'],
    explanation: '$3\%$ økning betyr at vi beholder $100\%$ og legger til $3\%$: $1 + 0{,}03 = 1{,}03$.',
  },
  {
    question: 'Hvis $b < 1$ i $f(x) = a \cdot b^x$, hva skjer?',
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
    options: ['$a^2 + b^2 = c^2$ i en rettvinklet trekant', '$a + b = c$', '$a \cdot b = c$', '$a^2 = b^2 + c^2$'],
    explanation: 'I en rettvinklet trekant er summen av katetenes kvadrater lik hypotenusens kvadrat.',
  },
  {
    question: 'I en rettvinklet trekant med kateter $3$ og $4$, hva er hypotenusen?',
    options: ['$5$', '$7$', '$12$', '$25$'],
    explanation: '$c = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.',
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
    explanation: '$b = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$.',
  },
],


  '1t-5-4': [
  {
    question: 'Hva er $\sin v$ i en rettvinklet trekant?',
    options: ['Motstående katet / hypotenus', 'Hosliggende katet / hypotenus', 'Motstående / hosliggende', 'Hypotenus / motstående'],
    explanation: 'Sinus er forholdet mellom motstående katet og hypotenus.',
  },
  {
    question: 'Hva er $\cos v$?',
    options: ['Hosliggende katet / hypotenus', 'Motstående katet / hypotenus', 'Motstående / hosliggende', 'Hypotenus / hosliggende'],
    explanation: 'Cosinus er forholdet mellom hosliggende katet og hypotenus.',
  },
  {
    question: 'Hva er $\tan v$?',
    options: ['Motstående katet / hosliggende katet', 'Hosliggende / motstående', 'Hypotenus / motstående', 'Motstående / hypotenus'],
    explanation: 'Tangens er forholdet mellom motstående og hosliggende katet.',
  },
  {
    question: 'Hva er huskeregelen SOH-CAH-TOA?',
    options: ['Sin=O/H, Cos=A/H, Tan=O/A', 'Sin=H/O, Cos=H/A, Tan=A/O', 'Sin=A/H, Cos=O/H, Tan=O/A', 'Sin=O/A, Cos=A/H, Tan=O/H'],
    explanation: 'SOH-CAH-TOA: Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent.',
  },
  {
    question: 'Hva er $\sin 30°$?',
    options: ['$0{,}5$', '$1$', '$0$', '$\frac{\sqrt{3}}{2}$'],
    explanation: '$\sin 30° = \frac{1}{2} = 0{,}5$.',
  },
],


  '1t-5-5': [
  {
    question: 'Hva er grunnformelen for arealet av en trekant?',
    options: ['$A = \frac{1}{2}gh$', '$A = gh$', '$A = g + h$', '$A = 2gh$'],
    explanation: 'Arealet av en trekant er halvparten av grunnlinje ganger høyde.',
  },
  {
    question: 'Hva er arealsetningen?',
    options: ['$A = \frac{1}{2}ab\sin C$', '$A = ab\sin C$', '$A = a + b + c$', '$A = \frac{1}{2}ab$'],
    explanation: 'Arealsetningen bruker to sider og vinkelen mellom dem.',
  },
  {
    question: 'Finn arealet av en trekant med grunnlinje $8$ og høyde $5$.',
    options: ['$20$', '$40$', '$13$', '$80$'],
    explanation: '$A = \frac{1}{2} \cdot 8 \cdot 5 = 20$.',
  },
  {
    question: 'Når bruker vi arealsetningen?',
    options: ['Når vi kjenner to sider og vinkelen mellom dem', 'Når vi kjenner grunnlinje og høyde', 'Når vi bare kjenner sidene', 'Alltid'],
    explanation: 'Arealsetningen brukes når vi kjenner to sider og den mellomliggende vinkelen.',
  },
  {
    question: 'Hva er arealet av en likesidet trekant med side $6$?',
    options: ['$9\sqrt{3}$', '$18$', '$36$', '$6\sqrt{3}$'],
    explanation: '$A = \frac{1}{2} \cdot 6 \cdot 6 \cdot \sin 60° = 18 \cdot \frac{\sqrt{3}}{2} = 9\sqrt{3}$.',
  },
],


  '1t-5-6': [
  {
    question: 'Hva sier sinussetningen?',
    options: ['$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$', '$a + b = c$', '$\sin A = \sin B$', '$a \cdot \sin A = b \cdot \sin B$'],
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
    explanation: 'Siden $\sin v = \sin(180° - v)$, kan en vinkel ha to mulige verdier.',
  },
  {
    question: 'I trekant ABC er $A = 30°$, $a = 5$ og $B = 60°$. Finn $b$.',
    options: ['$5\sqrt{3}$', '$5$', '$10$', '$2{,}5$'],
    explanation: '$b = a \cdot \frac{\sin B}{\sin A} = 5 \cdot \frac{\sin 60°}{\sin 30°} = 5 \cdot \frac{\sqrt{3}/2}{1/2} = 5\sqrt{3}$.',
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
    options: ['$c^2 = a^2 + b^2 - 2ab\cos C$', '$c = a + b$', '$\cos C = a + b$', '$c^2 = a^2 + b^2$'],
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
    explanation: 'Når $C = 90°$, er $\cos C = 0$, og vi får $c^2 = a^2 + b^2$.',
  },
  {
    question: 'I en trekant er $a = 7$, $b = 8$, $C = 60°$. Finn $c$.',
    options: ['$\sqrt{57}$', '$\sqrt{113}$', '$15$', '$\sqrt{169}$'],
    explanation: '$c^2 = 49 + 64 - 2 \cdot 7 \cdot 8 \cdot \cos 60° = 113 - 56 = 57$, så $c = \sqrt{57}$.',
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


};

export default quizData_1t;
