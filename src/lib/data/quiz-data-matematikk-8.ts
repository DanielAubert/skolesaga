import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_8: Record<string, QuizQuestion[]> = {
  '8-1-1': [
    {
      question: 'Hva er $5 - (-3)$?',
      options: ['$8$', '$2$', '$-8$', '$-2$'],
      explanation: 'Minus minus blir pluss: $5 - (-3) = 5 + 3 = 8$.',
    },
    {
      question: 'Regn ut $(-3) \\cdot (-6)$.',
      options: ['$18$', '$-18$', '$9$', '$-9$'],
      explanation: 'Like fortegn gir pluss: $(-3) \\cdot (-6) = 18$.',
    },
    {
      question: 'Hva blir $3 + 4 \\cdot 2$ etter regnerekkefølgen?',
      options: ['$11$', '$14$', '$10$', '$24$'],
      explanation: 'Multiplikasjon før addisjon: $4 \\cdot 2 = 8$, så $3 + 8 = 11$.',
    },
    {
      question: 'Hva er et heltall?',
      options: ['Alle hele tall, både positive og negative, inkludert null', 'Bare positive hele tall', 'Tall med komma', 'Bare tall større enn null'],
      explanation: 'Heltall er $\\ldots, -2, -1, 0, 1, 2, \\ldots$ — alle hele tall, både positive og negative, og null.',
    },
    {
      question: 'Regn ut $(3 + 4) \\cdot 2$.',
      options: ['$14$', '$11$', '$10$', '$24$'],
      explanation: 'Parentes først: $3 + 4 = 7$, deretter $7 \\cdot 2 = 14$.',
    },
  ],
  '8-1-2': [
    {
      question: 'Hva kaller vi tallet over brøkstreken?',
      options: ['Telleren', 'Nevneren', 'Faktoren', 'Kvotienten'],
      explanation: 'Telleren står øverst og forteller hvor mange deler vi har; nevneren står nederst.',
    },
    {
      question: 'Regn ut $\\frac{1}{2} + \\frac{1}{3}$.',
      options: ['$\\frac{5}{6}$', '$\\frac{2}{5}$', '$\\frac{1}{6}$', '$\\frac{2}{6}$'],
      explanation: 'Fellesnevner 6: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.',
    },
    {
      question: 'Regn ut $\\frac{2}{3} \\cdot \\frac{4}{5}$.',
      options: ['$\\frac{8}{15}$', '$\\frac{6}{15}$', '$\\frac{8}{8}$', '$\\frac{2}{15}$'],
      explanation: 'Gang teller med teller og nevner med nevner: $\\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15}$.',
    },
    {
      question: 'Hva blir $\\frac{2}{3} \\div \\frac{4}{5}$?',
      options: ['$\\frac{5}{6}$', '$\\frac{8}{15}$', '$\\frac{6}{5}$', '$\\frac{3}{10}$'],
      explanation: 'Del med en brøk = gang med den omvendte: $\\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.',
    },
    {
      question: 'Hva betyr det å forkorte en brøk?',
      options: ['Dele teller og nevner med samme tall', 'Gange teller og nevner med samme tall', 'Legge til samme tall i teller og nevner', 'Snu brøken'],
      explanation: 'Å forkorte er å dele teller og nevner med samme tall, f.eks. $\\frac{6}{8} = \\frac{3}{4}$.',
    },
  ],
  '8-1-3': [
    {
      question: 'Hvilken plassverdi har sifferet $4$ i tallet $3,147$?',
      options: ['Hundredeler', 'Tideler', 'Tusendeler', 'Enere'],
      explanation: 'Etter komma: $1$ er tideler, $4$ er hundredeler, $7$ er tusendeler.',
    },
    {
      question: 'Regn ut $4,7 + 3,85$.',
      options: ['$8,55$', '$8,42$', '$7,85$', '$8,12$'],
      explanation: 'Still opp komma under komma: $4,70 + 3,85 = 8,55$.',
    },
    {
      question: 'Hva blir $1,2 \\cdot 0,3$?',
      options: ['$0,36$', '$3,6$', '$0,036$', '$3,6$'],
      explanation: 'Gang uten komma: $12 \\cdot 3 = 36$. Totalt 2 desimaler gir $0,36$.',
    },
    {
      question: 'Avrund $7,348$ til to desimaler.',
      options: ['$7,35$', '$7,34$', '$7,3$', '$7,4$'],
      explanation: 'Sifferet etter andre desimal er $8 \\geq 5$, så vi runder opp: $7,35$.',
    },
    {
      question: 'Hva blir $7,2 \\div 0,6$?',
      options: ['$12$', '$1,2$', '$120$', '$6$'],
      explanation: 'Flytt komma ett hakk i begge tall: $72 \\div 6 = 12$.',
    },
  ],
  '8-1-4': [
    {
      question: 'Hva er $25\\%$ skrevet som desimaltall?',
      options: ['$0,25$', '$2,5$', '$25$', '$0,025$'],
      explanation: 'Prosent betyr per hundre: $25\\% = \\frac{25}{100} = 0,25$.',
    },
    {
      question: 'Hva er $20\\%$ av $150$?',
      options: ['$30$', '$3$', '$300$', '$15$'],
      explanation: '$0,20 \\cdot 150 = 30$.',
    },
    {
      question: 'En jakke til 800 kr settes ned 25 %. Hva blir den nye prisen?',
      options: ['$600$ kr', '$200$ kr', '$775$ kr', '$640$ kr'],
      explanation: 'Vekstfaktor $1 - 0,25 = 0,75$, så $800 \\cdot 0,75 = 600$ kr.',
    },
    {
      question: 'Hva er vekstfaktoren ved 8 % økning?',
      options: ['$1,08$', '$0,92$', '$8$', '$0,08$'],
      explanation: 'Vekstfaktor ved økning $= 1 + \\frac{p}{100} = 1 + 0,08 = 1,08$.',
    },
    {
      question: 'Hvordan finner du hvor mange prosent delen er av helheten?',
      options: ['$\\frac{\\text{del}}{\\text{helhet}} \\cdot 100\\%$', '$\\frac{\\text{helhet}}{\\text{del}} \\cdot 100\\%$', '$\\text{del} \\cdot \\text{helhet}$', '$\\text{del} + \\text{helhet}$'],
      explanation: 'Del på helheten og gang med 100: $\\frac{\\text{del}}{\\text{helhet}} \\cdot 100\\%$.',
    },
  ],
  '8-1-5': [
    {
      question: 'Hva er $2^5$?',
      options: ['$32$', '$10$', '$25$', '$16$'],
      explanation: '$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$.',
    },
    {
      question: 'Hva er $a^0$ for et tall $a \\neq 0$?',
      options: ['$1$', '$0$', '$a$', 'Udefinert'],
      explanation: 'Ethvert tall (utenom 0) i nullte potens er $1$.',
    },
    {
      question: 'Hva blir $(-2)^4$?',
      options: ['$16$', '$-16$', '$8$', '$-8$'],
      explanation: 'Negativt grunntall med partallseksponent gir positivt svar: $(-2)^4 = 16$.',
    },
    {
      question: 'Hva blir $a^m \\cdot a^n$?',
      options: ['$a^{m+n}$', '$a^{m \\cdot n}$', '$a^{m-n}$', '$a^{mn}$'],
      explanation: 'Ved produkt av potenser med samme grunntall legger vi sammen eksponentene.',
    },
    {
      question: 'Hva blir $(-2)^3$?',
      options: ['$-8$', '$8$', '$6$', '$-6$'],
      explanation: 'Negativt grunntall med oddetallseksponent gir negativt svar: $(-2)^3 = -8$.',
    },
  ],
  '8-2-1': [
    {
      question: 'Hva kalles tallet foran variabelen, f.eks. $3$ i $3x$?',
      options: ['Koeffisient', 'Konstantledd', 'Variabel', 'Eksponent'],
      explanation: 'Koeffisienten er tallet foran variabelen. Konstantleddet er et tall uten variabel.',
    },
    {
      question: 'Regn ut $2a + 5$ når $a = 3$.',
      options: ['$11$', '$10$', '$16$', '$8$'],
      explanation: '$2 \\cdot 3 + 5 = 6 + 5 = 11$.',
    },
    {
      question: 'Forenkle $3x + 5x$.',
      options: ['$8x$', '$15x$', '$8x^2$', '$2x$'],
      explanation: 'Like ledd slås sammen: $3x + 5x = 8x$.',
    },
    {
      question: 'Hva blir $3x \\cdot 2x$?',
      options: ['$6x^2$', '$5x^2$', '$6x$', '$5x$'],
      explanation: 'Gang tallene og legg sammen eksponentene: $3 \\cdot 2 = 6$ og $x \\cdot x = x^2$, altså $6x^2$.',
    },
    {
      question: 'Hvilke av disse er like ledd?',
      options: ['$2x^2$ og $7x^2$', '$3x$ og $3x^2$', '$2a$ og $5b$', '$x$ og $x^3$'],
      explanation: 'Like ledd har samme variabel med samme eksponent. $2x^2$ og $7x^2$ har begge $x^2$.',
    },
  ],
  '8-2-2': [
    {
      question: 'Hva blir $-(2a - 5)$?',
      options: ['$-2a + 5$', '$-2a - 5$', '$2a - 5$', '$2a + 5$'],
      explanation: 'Minus foran parentes: alle ledd skifter fortegn, $-(2a - 5) = -2a + 5$.',
    },
    {
      question: 'Multipliser inn: $3(x + 4)$.',
      options: ['$3x + 12$', '$3x + 4$', '$x + 12$', '$3x + 7$'],
      explanation: 'Gang hvert ledd med 3: $3 \\cdot x + 3 \\cdot 4 = 3x + 12$.',
    },
    {
      question: 'Forenkle $2(x + 3) + 4x$.',
      options: ['$6x + 6$', '$6x + 3$', '$2x + 6$', '$8x + 6$'],
      explanation: '$2x + 6 + 4x = 6x + 6$.',
    },
    {
      question: 'Hva blir $x(x + 3)$?',
      options: ['$x^2 + 3x$', '$x^2 + 3$', '$2x + 3$', '$3x^2$'],
      explanation: 'Gang inn: $x \\cdot x + x \\cdot 3 = x^2 + 3x$.',
    },
    {
      question: 'Forenkle $5(x + 2) - 2(x - 3)$.',
      options: ['$3x + 16$', '$3x + 4$', '$7x + 16$', '$3x - 4$'],
      explanation: '$5x + 10 - 2x + 6 = 3x + 16$.',
    },
  ],
  '8-2-3': [
    {
      question: 'Løs $x + 4 = 10$.',
      options: ['$x = 6$', '$x = 14$', '$x = 4$', '$x = 40$'],
      explanation: 'Trekk fra 4 på begge sider: $x = 10 - 4 = 6$.',
    },
    {
      question: 'Løs $2x + 3 = 11$.',
      options: ['$x = 4$', '$x = 7$', '$x = 8$', '$x = 5$'],
      explanation: '$2x = 11 - 3 = 8$, så $x = 4$.',
    },
    {
      question: 'Løs $5x = 3x + 8$.',
      options: ['$x = 4$', '$x = 2$', '$x = 8$', '$x = 1$'],
      explanation: '$5x - 3x = 8$, altså $2x = 8$, så $x = 4$.',
    },
    {
      question: 'Hva må vi gjøre med ulikhetstegnet når vi ganger eller deler med et negativt tall?',
      options: ['Snu det', 'Beholde det', 'Fjerne det', 'Erstatte med likhetstegn'],
      explanation: 'Når vi ganger eller deler med et negativt tall, snur ulikhetstegnet.',
    },
    {
      question: 'Løs ulikheten $3x - 2 \\leq 10$.',
      options: ['$x \\leq 4$', '$x \\geq 4$', '$x \\leq 12$', '$x \\leq 8$'],
      explanation: '$3x \\leq 12$, så $x \\leq 4$.',
    },
  ],
  '8-3-1': [
    {
      question: 'Hva slags vinkel er $135°$?',
      options: ['Stump vinkel', 'Spiss vinkel', 'Rett vinkel', 'Flat vinkel'],
      explanation: 'En stump vinkel er større enn $90°$, men mindre enn $180°$.',
    },
    {
      question: 'Hva er supplementvinkelen til $70°$?',
      options: ['$110°$', '$20°$', '$90°$', '$130°$'],
      explanation: 'Supplementvinkler har sum $180°$: $180° - 70° = 110°$.',
    },
    {
      question: 'Hva er komplementvinkelen til $30°$?',
      options: ['$60°$', '$150°$', '$70°$', '$90°$'],
      explanation: 'Komplementvinkler har sum $90°$: $90° - 30° = 60°$.',
    },
    {
      question: 'Hva gjelder for toppvinkler når to linjer krysser hverandre?',
      options: ['De er alltid like store', 'De har alltid sum $180°$', 'De er alltid rette', 'De er alltid spisse'],
      explanation: 'Toppvinkler (motstående vinkler) er alltid like store.',
    },
    {
      question: 'To linjer krysser hverandre. En vinkel er $70°$. Hva er nabovinkelen?',
      options: ['$110°$', '$70°$', '$20°$', '$90°$'],
      explanation: 'Nabovinkler er supplementvinkler: $180° - 70° = 110°$.',
    },
  ],
  '8-3-2': [
    {
      question: 'I $f(x) = 2x + 3$, hva er stigningstallet?',
      options: ['$2$', '$3$', '$5$', '$1$'],
      explanation: 'I $f(x) = ax + b$ er $a$ stigningstallet, her $2$.',
    },
    {
      question: 'Hva er $f(2)$ for $f(x) = 2x + 3$?',
      options: ['$7$', '$5$', '$4$', '$9$'],
      explanation: '$f(2) = 2 \\cdot 2 + 3 = 7$.',
    },
    {
      question: 'Finn stigningstallet til linjen gjennom $(1, 3)$ og $(4, 9)$.',
      options: ['$2$', '$3$', '$6$', '$\\frac{1}{2}$'],
      explanation: '$a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.',
    },
    {
      question: 'Hva forteller konstantleddet $b$ i en lineær funksjon?',
      options: ['Hvor linjen krysser y-aksen', 'Hvor bratt linjen er', 'Hvor linjen krysser x-aksen', 'Funksjonens toppunkt'],
      explanation: 'Konstantleddet $b$ er der grafen krysser y-aksen, altså $f(0) = b$.',
    },
    {
      question: 'En linje går gjennom $(0, 5)$ og har stigningstall $-2$. Hva er funksjonsuttrykket?',
      options: ['$f(x) = -2x + 5$', '$f(x) = 2x + 5$', '$f(x) = -2x - 5$', '$f(x) = 5x - 2$'],
      explanation: '$a = -2$ og $b = 5$ gir $f(x) = -2x + 5$.',
    },
  ],
  '8-3-3': [
    {
      question: 'Hva kjennetegner en proporsjonal sammenheng $y = kx$?',
      options: ['Forholdet $\\frac{y}{x}$ er konstant', 'Produktet $xy$ er konstant', 'Differansen $y - x$ er konstant', 'Summen $x + y$ er konstant'],
      explanation: 'Ved proporsjonalitet er $\\frac{y}{x} = k$ konstant, og grafen går gjennom origo.',
    },
    {
      question: 'En eske med 12 egg koster 48 kr. Hva koster 18 egg?',
      options: ['$72$ kr', '$66$ kr', '$54$ kr', '$96$ kr'],
      explanation: 'Konstanten $k = \\frac{48}{12} = 4$, så $18 \\cdot 4 = 72$ kr.',
    },
    {
      question: 'Et arbeid tar 6 timer med 4 personer. Hvor lang tid med 8 personer (omvendt proporsjonalt)?',
      options: ['$3$ timer', '$12$ timer', '$2$ timer', '$4$ timer'],
      explanation: 'Konstanten $k = 4 \\cdot 6 = 24$, så $t = \\frac{24}{8} = 3$ timer.',
    },
    {
      question: 'Hva kjennetegner omvendt proporsjonalitet?',
      options: ['Produktet $x \\cdot y$ er konstant', 'Forholdet $\\frac{y}{x}$ er konstant', 'Grafen er en rett linje gjennom origo', 'Summen er konstant'],
      explanation: 'Ved omvendt proporsjonalitet er $x \\cdot y = k$ konstant; én øker når den andre minker.',
    },
    {
      question: 'For tabellen $x: 2, 4, 6$ og $y: 10, 20, 30$, hva er proporsjonalitetskonstanten?',
      options: ['$5$', '$2$', '$10$', '$8$'],
      explanation: '$\\frac{10}{2} = 5$, $\\frac{20}{4} = 5$, $\\frac{30}{6} = 5$. Konstant $k = 5$.',
    },
  ],
  '8-3-4': [
    {
      question: 'Hva er arealet av et rektangel med lengde 8 cm og bredde 5 cm?',
      options: ['$40 \\text{ cm}^2$', '$26 \\text{ cm}^2$', '$13 \\text{ cm}^2$', '$80 \\text{ cm}^2$'],
      explanation: '$A = l \\cdot b = 8 \\cdot 5 = 40 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er arealet av en trekant med grunnlinje 10 cm og høyde 6 cm?',
      options: ['$30 \\text{ cm}^2$', '$60 \\text{ cm}^2$', '$16 \\text{ cm}^2$', '$15 \\text{ cm}^2$'],
      explanation: '$A = \\frac{1}{2} \\cdot g \\cdot h = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er arealet av en sirkel med radius 5 cm? Bruk $\\pi \\approx 3,14$.',
      options: ['$78,5 \\text{ cm}^2$', '$31,4 \\text{ cm}^2$', '$15,7 \\text{ cm}^2$', '$25 \\text{ cm}^2$'],
      explanation: '$A = \\pi r^2 = 3,14 \\cdot 25 = 78,5 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er arealet av et trapes med parallelle sider 6 cm og 10 cm og høyde 5 cm?',
      options: ['$40 \\text{ cm}^2$', '$80 \\text{ cm}^2$', '$30 \\text{ cm}^2$', '$16 \\text{ cm}^2$'],
      explanation: '$A = \\frac{(a + b) \\cdot h}{2} = \\frac{(6 + 10) \\cdot 5}{2} = \\frac{80}{2} = 40 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er formelen for arealet av et parallellogram?',
      options: ['$A = g \\cdot h$', '$A = \\frac{1}{2} g \\cdot h$', '$A = s^2$', '$A = \\pi r^2$'],
      explanation: 'Areal av parallellogram er grunnlinje ganger høyde: $A = g \\cdot h$.',
    },
  ],
  '8-3-5': [
    {
      question: 'Hva er omkretsen av et rektangel med lengde 8 cm og bredde 5 cm?',
      options: ['$26$ cm', '$40$ cm', '$13$ cm', '$80$ cm'],
      explanation: '$O = 2l + 2b = 16 + 10 = 26$ cm.',
    },
    {
      question: 'Hva er omkretsen av et kvadrat med sidelengde 6 cm?',
      options: ['$24$ cm', '$36$ cm', '$12$ cm', '$30$ cm'],
      explanation: '$O = 4s = 4 \\cdot 6 = 24$ cm.',
    },
    {
      question: 'Hva er omkretsen av en sirkel med radius 5 cm? Bruk $\\pi \\approx 3,14$.',
      options: ['$31,4$ cm', '$78,5$ cm', '$15,7$ cm', '$10$ cm'],
      explanation: '$O = 2\\pi r = 2 \\cdot 3,14 \\cdot 5 = 31,4$ cm.',
    },
    {
      question: 'Hva er omkretsen av en sirkel med diameter 12 cm? Bruk $\\pi \\approx 3,14$.',
      options: ['$37,68$ cm', '$75,36$ cm', '$18,84$ cm', '$144$ cm'],
      explanation: '$O = \\pi d = 3,14 \\cdot 12 = 37,68$ cm.',
    },
    {
      question: 'Hva er sammenhengen mellom diameter $d$ og radius $r$?',
      options: ['$d = 2r$', '$d = r^2$', '$d = \\frac{r}{2}$', '$d = \\pi r$'],
      explanation: 'Diameteren er dobbelt så lang som radien: $d = 2r$.',
    },
  ],
  '8-3-6': [
    {
      question: 'Hva er volumet av en kube med sidekant 5 cm?',
      options: ['$125 \\text{ cm}^3$', '$25 \\text{ cm}^3$', '$15 \\text{ cm}^3$', '$75 \\text{ cm}^3$'],
      explanation: '$V = s^3 = 5^3 = 125 \\text{ cm}^3$.',
    },
    {
      question: 'Hva er volumet av en boks med lengde 8 cm, bredde 5 cm og høyde 3 cm?',
      options: ['$120 \\text{ cm}^3$', '$16 \\text{ cm}^3$', '$40 \\text{ cm}^3$', '$240 \\text{ cm}^3$'],
      explanation: '$V = l \\cdot b \\cdot h = 8 \\cdot 5 \\cdot 3 = 120 \\text{ cm}^3$.',
    },
    {
      question: 'Hva er formelen for volum av en sylinder?',
      options: ['$V = \\pi r^2 h$', '$V = 2\\pi r h$', '$V = \\pi r^2$', '$V = s^3$'],
      explanation: 'Sylinder: grunnflate $\\pi r^2$ ganger høyde $h$, altså $V = \\pi r^2 h$.',
    },
    {
      question: 'Hvor mange liter er $1 \\text{ dm}^3$?',
      options: ['$1$ liter', '$10$ liter', '$1000$ liter', '$0,1$ liter'],
      explanation: '$1 \\text{ dm}^3 = 1$ liter, og $1000 \\text{ cm}^3 = 1$ liter.',
    },
    {
      question: 'Et akvarium er $80 \\times 40 \\times 50$ cm. Hvor mange liter rommer det?',
      options: ['$160$ liter', '$1600$ liter', '$16$ liter', '$170$ liter'],
      explanation: '$V = 80 \\cdot 40 \\cdot 50 = 160000 \\text{ cm}^3 = 160$ liter.',
    },
  ],
  '8-4-1': [
    {
      question: 'Hva er vinkelsummen i en trekant?',
      options: ['$180°$', '$360°$', '$90°$', '$270°$'],
      explanation: 'Vinkelsummen i en trekant er alltid $180°$.',
    },
    {
      question: 'To vinkler i en trekant er $60°$ og $70°$. Hva er den tredje?',
      options: ['$50°$', '$70°$', '$60°$', '$130°$'],
      explanation: '$180° - 60° - 70° = 50°$.',
    },
    {
      question: 'Hva kalles en trekant der alle sider er like lange?',
      options: ['Likesidet', 'Likebeint', 'Ulikesidet', 'Rettvinklet'],
      explanation: 'En likesidet trekant har alle sider like og alle vinkler $60°$.',
    },
    {
      question: 'Hva slags trekant har vinklene $20°$, $40°$ og $120°$?',
      options: ['Stumpvinklet', 'Spissvinklet', 'Rettvinklet', 'Likesidet'],
      explanation: 'En vinkel ($120°$) er større enn $90°$, så trekanten er stumpvinklet.',
    },
    {
      question: 'En likebeint trekant har to vinkler på $35°$. Hva er den tredje?',
      options: ['$110°$', '$35°$', '$70°$', '$90°$'],
      explanation: '$180° - 35° - 35° = 110°$.',
    },
  ],
  '8-4-2': [
    {
      question: 'Finn arealet av et kvadrat med side 6 cm.',
      options: ['$36 \\text{ cm}^2$', '$24 \\text{ cm}^2$', '$12 \\text{ cm}^2$', '$18 \\text{ cm}^2$'],
      explanation: '$A = s^2 = 6^2 = 36 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er formelen for omkrets av et rektangel?',
      options: ['$O = 2(l + b)$', '$O = l \\cdot b$', '$O = 4s$', '$O = \\pi d$'],
      explanation: 'Omkrets av rektangel: $O = 2l + 2b = 2(l + b)$.',
    },
    {
      question: 'Et rektangulært rom er 6 m langt og 4 m bredt. Gulvbelegg koster 250 kr/m². Hva koster det?',
      options: ['$6000$ kr', '$2500$ kr', '$5000$ kr', '$1000$ kr'],
      explanation: 'Areal $= 6 \\cdot 4 = 24 \\text{ m}^2$, så $24 \\cdot 250 = 6000$ kr.',
    },
    {
      question: 'Finn arealet av et parallellogram med grunnlinje 8 m og høyde 5 m.',
      options: ['$40 \\text{ m}^2$', '$26 \\text{ m}^2$', '$20 \\text{ m}^2$', '$13 \\text{ m}^2$'],
      explanation: '$A = g \\cdot h = 8 \\cdot 5 = 40 \\text{ m}^2$.',
    },
    {
      question: 'Hva måler vi areal i?',
      options: ['Kvadratenheter (cm², m²)', 'Lengdeenheter (cm, m)', 'Kubikkenheter (cm³)', 'Grader'],
      explanation: 'Areal måler en flate og oppgis i kvadratenheter som cm² eller m².',
    },
  ],
  '8-4-3': [
    {
      question: 'En rettvinklet trekant har kateter 3 cm og 4 cm. Hva er hypotenusen?',
      options: ['$5$ cm', '$7$ cm', '$6$ cm', '$12$ cm'],
      explanation: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ cm.',
    },
    {
      question: 'Hypotenusen er 13 cm og en katet er 5 cm. Hva er den andre kateten?',
      options: ['$12$ cm', '$8$ cm', '$18$ cm', '$144$ cm'],
      explanation: '$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.',
    },
    {
      question: 'Hva kalles den lengste siden i en rettvinklet trekant?',
      options: ['Hypotenusen', 'Kateten', 'Grunnlinjen', 'Diagonalen'],
      explanation: 'Hypotenusen er den lengste siden og ligger overfor den rette vinkelen.',
    },
    {
      question: 'En stige på 5 m står 3 m fra veggen. Hvor høyt opp rekker den?',
      options: ['$4$ m', '$2$ m', '$8$ m', '$16$ m'],
      explanation: '$h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ m.',
    },
    {
      question: 'Er en trekant med sider 7, 24 og 25 rettvinklet?',
      options: ['Ja, fordi $7^2 + 24^2 = 25^2$', 'Nei', 'Ja, fordi $7 + 24 = 31$', 'Kan ikke avgjøres'],
      explanation: '$49 + 576 = 625 = 25^2$, så trekanten er rettvinklet.',
    },
  ],
  '8-4-4': [
    {
      question: 'Hva er koordinatene til origo?',
      options: ['$(0, 0)$', '$(1, 1)$', '$(0, 1)$', '$(1, 0)$'],
      explanation: 'Origo er der aksene krysser, med koordinatene $(0, 0)$.',
    },
    {
      question: 'I hvilken kvadrant ligger punktet $(-2, 7)$?',
      options: ['2. kvadrant', '1. kvadrant', '3. kvadrant', '4. kvadrant'],
      explanation: '$x$ negativ, $y$ positiv gir 2. kvadrant.',
    },
    {
      question: 'I hvilken kvadrant ligger punktet $(3, -6)$?',
      options: ['4. kvadrant', '1. kvadrant', '2. kvadrant', '3. kvadrant'],
      explanation: '$x$ positiv, $y$ negativ gir 4. kvadrant.',
    },
    {
      question: 'Hva kalles den vannrette aksen i et koordinatsystem?',
      options: ['$x$-aksen', '$y$-aksen', 'Origo', 'Diagonalen'],
      explanation: 'Den vannrette aksen er $x$-aksen (førsteaksen).',
    },
    {
      question: 'Hva er den loddrette avstanden mellom $(2, 1)$ og $(2, 6)$?',
      options: ['$5$', '$4$', '$8$', '$2$'],
      explanation: 'Loddrett avstand: $|6 - 1| = 5$.',
    },
  ],
  '8-4-5': [
    {
      question: 'Hva betyr det at en graf er stigende?',
      options: ['Verdien øker fra venstre mot høyre', 'Verdien minker', 'Verdien er konstant', 'Grafen er vannrett'],
      explanation: 'En stigende graf går oppover fra venstre mot høyre — verdien øker.',
    },
    {
      question: 'Temperaturen steg fra 5 °C kl. 06 til 18 °C kl. 14. Hvor mye steg den?',
      options: ['$13$ °C', '$18$ °C', '$5$ °C', '$23$ °C'],
      explanation: '$18 - 5 = 13$ °C.',
    },
    {
      question: 'Hva betyr en vannrett (konstant) graf i en avstand-tid-graf?',
      options: ['Personen står stille', 'Personen beveger seg raskt', 'Personen snur', 'Avstanden minker'],
      explanation: 'Konstant avstand betyr at personen ikke beveger seg — står stille.',
    },
    {
      question: 'Hva betyr en bratt stigning på en graf?',
      options: ['Rask endring', 'Sakte endring', 'Ingen endring', 'Synkende verdi'],
      explanation: 'Bratt stigning betyr at verdien endrer seg raskt.',
    },
    {
      question: 'Hvilke tre måter kan en sammenheng beskrives på?',
      options: ['Tabell, graf og formel', 'Tall, ord og bilde', 'Linje, kurve og punkt', 'Sum, differanse og produkt'],
      explanation: 'En sammenheng kan beskrives med tabell, graf og formel.',
    },
  ],
  '8-5-1': [
    {
      question: 'Finn gjennomsnittet av $4, 7, 8, 5, 6$.',
      options: ['$6$', '$5$', '$7$', '$30$'],
      explanation: 'Sum $= 30$, antall $= 5$, gjennomsnitt $= \\frac{30}{5} = 6$.',
    },
    {
      question: 'Finn medianen av $4, 6, 9, 11$.',
      options: ['$7,5$', '$9$', '$6$', '$8$'],
      explanation: 'Like antall: median = gjennomsnitt av de to midterste, $\\frac{6 + 9}{2} = 7,5$.',
    },
    {
      question: 'Hva er typetallet i $3, 5, 5, 7, 5, 8, 9$?',
      options: ['$5$', '$7$', '$8$', '$3$'],
      explanation: 'Typetallet er verdien som forekommer oftest, her $5$ (3 ganger).',
    },
    {
      question: 'Hva er variasjonsbredden til $12, 15, 18, 14, 16, 20, 13, 17, 15, 10$?',
      options: ['$10$', '$20$', '$15$', '$8$'],
      explanation: 'Variasjonsbredde = største − minste $= 20 - 10 = 10$.',
    },
    {
      question: 'Hva er interkvartilbredden (IQR)?',
      options: ['$Q_3 - Q_1$', '$Q_3 + Q_1$', 'Største − minste', 'Median delt på 2'],
      explanation: 'IQR $= Q_3 - Q_1$ og viser spredningen av de midterste 50 %.',
    },
  ],
  '8-5-2': [
    {
      question: 'Hva er relativ frekvens?',
      options: ['Frekvensen delt på totalt antall', 'Antall ganger en verdi forekommer', 'Summen av alle verdier', 'Største minus minste verdi'],
      explanation: 'Relativ frekvens $= \\frac{\\text{frekvens}}{\\text{totalt antall}}$.',
    },
    {
      question: 'Av 20 elever liker 8 fotball. Hva er den relative frekvensen?',
      options: ['$40\\%$', '$80\\%$', '$8\\%$', '$20\\%$'],
      explanation: '$\\frac{8}{20} = 0,40 = 40\\%$.',
    },
    {
      question: 'En sektor utgjør 25 %. Hvor stor er vinkelen i et sektordiagram?',
      options: ['$90°$', '$25°$', '$72°$', '$144°$'],
      explanation: 'Vinkel $= 0,25 \\cdot 360° = 90°$.',
    },
    {
      question: 'Hva representerer hele sirkelen i et sektordiagram?',
      options: ['100 % (360°)', '50 %', '180°', '100°'],
      explanation: 'Hele sirkelen er 100 % eller $360°$.',
    },
    {
      question: 'Salget var Jan 50, Feb 65, Mar 80, Apr 70. Hva var gjennomsnittlig salg?',
      options: ['$66,25$', '$65$', '$80$', '$70$'],
      explanation: '$\\frac{50 + 65 + 80 + 70}{4} = \\frac{265}{4} = 66,25$.',
    },
  ],
  '8-5-3': [
    {
      question: 'Hvilket tallområde ligger en sannsynlighet alltid mellom?',
      options: ['$0$ og $1$', '$0$ og $100$', '$-1$ og $1$', '$1$ og $10$'],
      explanation: 'Sannsynlighet er alltid et tall mellom 0 (umulig) og 1 (sikkert).',
    },
    {
      question: 'Hva er sannsynligheten for å få et partall med en terning?',
      options: ['$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      explanation: 'Partall = {2, 4, 6}, altså $\\frac{3}{6} = \\frac{1}{2}$.',
    },
    {
      question: 'I en pose er det 3 røde, 5 blå og 2 grønne kuler. Hva er $P(\\text{rød})$?',
      options: ['$\\frac{3}{10}$', '$\\frac{1}{3}$', '$\\frac{3}{7}$', '$\\frac{1}{2}$'],
      explanation: 'Totalt 10 kuler, 3 røde: $P = \\frac{3}{10}$.',
    },
    {
      question: 'Sannsynligheten for regn er 0,3. Hva er $P(\\text{ikke regn})$?',
      options: ['$0,7$', '$0,3$', '$1,3$', '$0,5$'],
      explanation: '$P(\\text{ikke } A) = 1 - P(A) = 1 - 0,3 = 0,7$.',
    },
    {
      question: 'Du kaster en mynt to ganger. Hva er $P(\\text{to krone})$?',
      options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{1}{3}$'],
      explanation: 'Utfallsrom {KK, KM, MK, MM}, KK er ett av fire: $\\frac{1}{4}$.',
    },
  ],
  '8-6-1': [
    {
      question: 'Hva er vennlige tall i hoderegning?',
      options: ['Hele tiere og hundrere', 'Bare primtall', 'Tall med komma', 'Negative tall'],
      explanation: 'Vennlige tall er lette å regne med, typisk hele tiere ($10, 20, \\ldots$) og hundrere.',
    },
    {
      question: 'Regn ut $47 + 38$ med vennlige tall (rund $38$ til $40$).',
      options: ['$85$', '$87$', '$83$', '$80$'],
      explanation: '$47 + 40 = 87$, la til 2 for mye, $87 - 2 = 85$.',
    },
    {
      question: 'Bruk kompensasjon: $72 - 38$ ved å legge 2 til begge.',
      options: ['$34$', '$36$', '$32$', '$40$'],
      explanation: '$72 - 38 = 74 - 40 = 34$.',
    },
    {
      question: 'Regn ut $276 + 198$ ved å runde $198$ til $200$.',
      options: ['$474$', '$476$', '$472$', '$478$'],
      explanation: '$276 + 200 = 476$, la til 2 for mye, $476 - 2 = 474$.',
    },
    {
      question: 'Hva er hovedideen bak kompensasjonsmetoden for subtraksjon?',
      options: ['Legg til samme tall på begge tall', 'Doble begge tall', 'Snu rekkefølgen', 'Trekk fra null'],
      explanation: 'Ved subtraksjon endres ikke differansen om vi legger til samme tall på begge: $(a + k) - (b + k) = a - b$.',
    },
  ],
  '8-6-2': [
    {
      question: 'Hva er ideen bak dobling og halvering i multiplikasjon?',
      options: ['Doble én faktor og halvere den andre', 'Doble begge faktorer', 'Halvere begge faktorer', 'Legge til faktorene'],
      explanation: '$a \\times b = (2a) \\times (b/2)$ — produktet endres ikke.',
    },
    {
      question: 'Regn ut $25 \\times 16$ med dobling og halvering.',
      options: ['$400$', '$420$', '$380$', '$200$'],
      explanation: '$25 \\times 16 = 50 \\times 8 = 100 \\times 4 = 400$.',
    },
    {
      question: 'Regn ut $7 \\times 13$ ved å dele opp $13 = 10 + 3$.',
      options: ['$91$', '$70$', '$21$', '$84$'],
      explanation: '$7 \\times 10 + 7 \\times 3 = 70 + 21 = 91$.',
    },
    {
      question: 'Regn ut $6 \\times 98$ ved å skrive $98 = 100 - 2$.',
      options: ['$588$', '$600$', '$612$', '$586$'],
      explanation: '$6 \\times 100 - 6 \\times 2 = 600 - 12 = 588$.',
    },
    {
      question: 'Regn ut $168 \\div 4$ ved gjentatt halvering.',
      options: ['$42$', '$84$', '$40$', '$36$'],
      explanation: '$168 \\div 2 = 84$, $84 \\div 2 = 42$.',
    },
  ],
  '8-6-3': [
    {
      question: 'Hva betyr symbolet $\\approx$?',
      options: ['Er omtrent lik', 'Er nøyaktig lik', 'Er større enn', 'Er mindre enn'],
      explanation: '$\\approx$ betyr «er omtrent lik» og brukes i overslag.',
    },
    {
      question: 'Avrund $67$ til nærmeste tier.',
      options: ['$70$', '$60$', '$65$', '$80$'],
      explanation: 'Enersifferet er $7 \\geq 5$, så vi runder opp til $70$.',
    },
    {
      question: 'Gjør et overslag for $38 \\times 52$.',
      options: ['$2000$', '$1976$', '$1500$', '$2500$'],
      explanation: 'Avrund: $40 \\times 50 = 2000$ (nøyaktig $1976$).',
    },
    {
      question: 'Hva er overestimering nyttig til?',
      options: ['Å være sikker på at man har nok', 'Å finne minimum', 'Å regne nøyaktig', 'Å avrunde nedover'],
      explanation: 'Overestimering (runde opp) gir et for høyt svar — nyttig for å sikre at man har nok, f.eks. penger.',
    },
    {
      question: 'Avrund $347$ til nærmeste hundrer.',
      options: ['$300$', '$400$', '$350$', '$340$'],
      explanation: 'Tiersifferet er $4 < 5$, så vi runder ned til $300$.',
    },
  ],
  '8-7-1': [
    {
      question: 'Hva er et primtall?',
      options: ['Et tall større enn 1 som bare er delelig med 1 og seg selv', 'Et partall', 'Et tall delelig med mange tall', 'Et tall mindre enn 1'],
      explanation: 'Et primtall er et naturlig tall større enn 1 som bare er delelig med 1 og seg selv.',
    },
    {
      question: 'Hvilket av disse er et primtall?',
      options: ['$29$', '$51$', '$49$', '$57$'],
      explanation: '$29$ er bare delelig med 1 og 29. $51 = 3 \\times 17$, $49 = 7^2$, $57 = 3 \\times 19$.',
    },
    {
      question: 'Hvilken regel gjelder for delelighet med 3?',
      options: ['Tverrsummen er delelig med 3', 'Siste siffer er partall', 'Siste siffer er 0 eller 5', 'De to siste sifrene er delelige med 3'],
      explanation: 'Et tall er delelig med 3 dersom tverrsummen (sifrenes sum) er delelig med 3.',
    },
    {
      question: 'Er $360$ delelig med 9?',
      options: ['Ja, fordi tverrsummen er 9', 'Nei', 'Ja, fordi det slutter på 0', 'Kan ikke avgjøres'],
      explanation: 'Tverrsummen $3 + 6 + 0 = 9$, som er delelig med 9.',
    },
    {
      question: 'Hvor mange primtall er det mellom 1 og 100?',
      options: ['$25$', '$20$', '$30$', '$15$'],
      explanation: 'Det er 25 primtall mellom 1 og 100.',
    },
  ],
  '8-7-2': [
    {
      question: 'Hva er primtallsfaktorisering?',
      options: ['Å skrive et tall som et produkt av bare primtall', 'Å finne alle delere', 'Å avrunde tallet', 'Å gange to primtall'],
      explanation: 'Primtallsfaktorisering er å skrive et tall som et produkt av bare primtallsfaktorer.',
    },
    {
      question: 'Hva er primtallsfaktoriseringen av $60$?',
      options: ['$2^2 \\times 3 \\times 5$', '$2 \\times 3 \\times 5$', '$2^3 \\times 3$', '$2^2 \\times 3^2$'],
      explanation: '$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$.',
    },
    {
      question: 'Hva er primtallsfaktoriseringen av $84$?',
      options: ['$2^2 \\times 3 \\times 7$', '$2^3 \\times 3$', '$2 \\times 3 \\times 7$', '$2^2 \\times 21$'],
      explanation: '$84 = 2 \\times 2 \\times 3 \\times 7 = 2^2 \\times 3 \\times 7$.',
    },
    {
      question: 'Hva er primtallsfaktoriseringen av $180$?',
      options: ['$2^2 \\times 3^2 \\times 5$', '$2^3 \\times 3 \\times 5$', '$2^2 \\times 3 \\times 5$', '$2 \\times 3^2 \\times 5$'],
      explanation: '$180 = 4 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$.',
    },
    {
      question: 'Hva sier aritmetikkens fundamentalteorem?',
      options: ['Hvert tall har en unik primtallsfaktorisering', 'Alle tall er primtall', 'Primtall er uendelig mange', 'Alle tall er delelige med 2'],
      explanation: 'Hvert naturlig tall større enn 1 kan skrives som et produkt av primtall på en unik måte.',
    },
  ],
  '8-7-3': [
    {
      question: 'Hva er største felles faktor (SFF) av to tall?',
      options: ['Det største tallet som går opp i begge', 'Det minste tallet begge går opp i', 'Produktet av tallene', 'Summen av tallene'],
      explanation: 'SFF er det største tallet som er en faktor i alle tallene.',
    },
    {
      question: 'Finn SFF av $36$ og $60$.',
      options: ['$12$', '$6$', '$180$', '$24$'],
      explanation: '$36 = 2^2 \\times 3^2$, $60 = 2^2 \\times 3 \\times 5$. Felles med laveste eksponent: $2^2 \\times 3 = 12$.',
    },
    {
      question: 'Finn MFM av $36$ og $60$.',
      options: ['$180$', '$12$', '$2160$', '$90$'],
      explanation: 'Alle faktorer med høyeste eksponent: $2^2 \\times 3^2 \\times 5 = 180$.',
    },
    {
      question: 'Hvilken sammenheng gjelder mellom SFF og MFM?',
      options: ['$a \\times b = \\text{SFF} \\times \\text{MFM}$', '$a + b = \\text{SFF} + \\text{MFM}$', '$\\text{SFF} = \\text{MFM}$', '$a \\times b = \\text{SFF}$'],
      explanation: 'For to tall gjelder alltid $a \\times b = \\text{SFF}(a,b) \\times \\text{MFM}(a,b)$.',
    },
    {
      question: 'To busser går hver 12. og 18. minutt. Når går de samtidig igjen?',
      options: ['Etter 36 minutter', 'Etter 6 minutter', 'Etter 30 minutter', 'Etter 216 minutter'],
      explanation: 'Vi finner MFM(12, 18) $= 2^2 \\times 3^2 = 36$ minutter.',
    },
  ],
  '8-7-4': [
    {
      question: 'Hvilket begrep bruker vi for å forkorte en brøk maksimalt?',
      options: ['SFF av teller og nevner', 'MFM av teller og nevner', 'Produktet', 'Tverrsummen'],
      explanation: 'Vi deler teller og nevner på SFF for å forkorte til uforkortelig brøk.',
    },
    {
      question: 'Forkort $\\frac{24}{36}$.',
      options: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{4}{6}$'],
      explanation: 'SFF(24, 36) $= 12$: $\\frac{24}{36} = \\frac{2}{3}$.',
    },
    {
      question: 'Forkort $\\frac{84}{126}$.',
      options: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{4}{6}$', '$\\frac{6}{9}$'],
      explanation: 'SFF(84, 126) $= 42$: $\\frac{84}{126} = \\frac{2}{3}$.',
    },
    {
      question: 'Regn ut $\\frac{5}{12} + \\frac{7}{18}$.',
      options: ['$\\frac{29}{36}$', '$\\frac{12}{30}$', '$\\frac{35}{36}$', '$\\frac{12}{36}$'],
      explanation: 'MFM(12, 18) $= 36$: $\\frac{15}{36} + \\frac{14}{36} = \\frac{29}{36}$.',
    },
    {
      question: 'Regn ut $\\frac{11}{15} - \\frac{3}{10}$.',
      options: ['$\\frac{13}{30}$', '$\\frac{8}{5}$', '$\\frac{14}{30}$', '$\\frac{8}{30}$'],
      explanation: 'MFM(15, 10) $= 30$: $\\frac{22}{30} - \\frac{9}{30} = \\frac{13}{30}$.',
    },
  ],
  '8-8-1': [
    {
      question: 'Hva kalles hvert tall i en tallfølge?',
      options: ['Et ledd', 'En faktor', 'En differanse', 'En koeffisient'],
      explanation: 'Hvert tall i en tallfølge kalles et ledd, betegnet $a_1, a_2, \\ldots$.',
    },
    {
      question: 'Hva er differansen i følgen $2, 5, 8, 11, 14, \\ldots$?',
      options: ['$3$', '$2$', '$5$', '$-3$'],
      explanation: '$d = 5 - 2 = 3$. Vi legger til 3 for hvert ledd.',
    },
    {
      question: 'Hva er det neste leddet i $4, 9, 14, 19, \\ldots$?',
      options: ['$24$', '$23$', '$25$', '$22$'],
      explanation: 'Differansen er 5: $19 + 5 = 24$.',
    },
    {
      question: 'Er følgen $1, 4, 9, 16, 25, \\ldots$ aritmetisk?',
      options: ['Nei, det er kvadrattallene', 'Ja, med differanse 3', 'Ja, med differanse 5', 'Ja, med differanse 7'],
      explanation: 'Differansene $3, 5, 7, 9$ er ikke like — dette er kvadrattallene $n^2$.',
    },
    {
      question: 'Hva kjennetegner en aritmetisk følge?',
      options: ['Vi legger til det samme tallet hver gang', 'Vi ganger med det samme tallet', 'Tallene er tilfeldige', 'Tallene er primtall'],
      explanation: 'En aritmetisk følge har konstant differanse — vi legger til det samme tallet hver gang.',
    },
  ],
  '8-8-2': [
    {
      question: 'Hva er formelen for trekanttall nr. $n$?',
      options: ['$T_n = \\frac{n(n+1)}{2}$', '$T_n = n^2$', '$T_n = 2n$', '$T_n = n + 1$'],
      explanation: 'Trekanttall er summen $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.',
    },
    {
      question: 'Hva er det 5. trekanttallet?',
      options: ['$15$', '$10$', '$21$', '$25$'],
      explanation: '$T_5 = \\frac{5 \\cdot 6}{2} = 15$.',
    },
    {
      question: 'Hva er formelen for kvadrattall nr. $n$?',
      options: ['$K_n = n^2$', '$K_n = \\frac{n(n+1)}{2}$', '$K_n = 2n$', '$K_n = n + n$'],
      explanation: 'Kvadrattall er $K_n = n^2$.',
    },
    {
      question: 'Summen av de $n$ første oddetallene er alltid lik:',
      options: ['$n^2$', '$2n$', '$\\frac{n(n+1)}{2}$', '$n + 1$'],
      explanation: '$1 + 3 + 5 + \\cdots = n^2$. F.eks. $1 + 3 + 5 = 9 = 3^2$.',
    },
    {
      question: 'De første trekanttallene er:',
      options: ['$1, 3, 6, 10, 15, \\ldots$', '$1, 4, 9, 16, 25, \\ldots$', '$2, 4, 6, 8, \\ldots$', '$1, 2, 3, 4, \\ldots$'],
      explanation: 'Trekanttallene er $1, 3, 6, 10, 15, 21, \\ldots$',
    },
  ],
  '8-8-3': [
    {
      question: 'Hva betyr generalisering i denne sammenhengen?',
      options: ['Å finne en formel som fungerer for alle verdier', 'Å regne ut ett ledd', 'Å tegne en figur', 'Å avrunde et tall'],
      explanation: 'Generalisering er å finne en formel (regel) som gjelder for alle verdier av $n$.',
    },
    {
      question: 'For tabellen $n: 1,2,3,4$ og verdier $4,7,10,13$, hva er formelen?',
      options: ['$a_n = 3n + 1$', '$a_n = 4n$', '$a_n = n + 3$', '$a_n = 3n$'],
      explanation: 'Differanse $d = 3$, og $a_1 = 4 = 3 \\cdot 1 + c$ gir $c = 1$, så $a_n = 3n + 1$.',
    },
    {
      question: 'Med formelen $a_n = 3n + 1$, hva er $a_{50}$?',
      options: ['$151$', '$150$', '$153$', '$51$'],
      explanation: '$a_{50} = 3 \\cdot 50 + 1 = 151$.',
    },
    {
      question: 'Hva er formen på en lineær formel for en aritmetisk følge?',
      options: ['$a_n = d \\cdot n + c$', '$a_n = n^2$', '$a_n = d \\cdot n^2$', '$a_n = c \\cdot n$'],
      explanation: 'Når differansen er konstant, er formelen $a_n = d \\cdot n + c$.',
    },
    {
      question: 'Bruk $T_n = \\frac{n(n+1)}{2}$ til å finne $T_8$.',
      options: ['$36$', '$28$', '$45$', '$40$'],
      explanation: '$T_8 = \\frac{8 \\cdot 9}{2} = 36$.',
    },
  ],
  '8-9-1': [
    {
      question: 'Hvor mange centimeter er $3,5$ m?',
      options: ['$350$ cm', '$35$ cm', '$3500$ cm', '$0,35$ cm'],
      explanation: '$1$ m $= 100$ cm, så $3,5 \\cdot 100 = 350$ cm.',
    },
    {
      question: 'Hvor mange cm er $450$ mm?',
      options: ['$45$ cm', '$4,5$ cm', '$4500$ cm', '$450$ cm'],
      explanation: '$1$ cm $= 10$ mm, så $\\frac{450}{10} = 45$ cm.',
    },
    {
      question: 'Hvor mange cm² er $1$ m²?',
      options: ['$10\\,000 \\text{ cm}^2$', '$100 \\text{ cm}^2$', '$1000 \\text{ cm}^2$', '$1\\,000\\,000 \\text{ cm}^2$'],
      explanation: '$1 \\text{ m}^2 = 100 \\text{ cm} \\cdot 100 \\text{ cm} = 10\\,000 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er omregningsfaktoren mellom naboenheter for areal (f.eks. cm² til mm²)?',
      options: ['$100$', '$10$', '$1000$', '$1$'],
      explanation: 'Arealfaktoren er kvadratet av lengdefaktoren: $10^2 = 100$.',
    },
    {
      question: 'Hvor mange m² er $1$ hektar?',
      options: ['$10\\,000 \\text{ m}^2$', '$1000 \\text{ m}^2$', '$100 \\text{ m}^2$', '$100\\,000 \\text{ m}^2$'],
      explanation: '$1$ hektar $= 10\\,000 \\text{ m}^2$ (en firkant på $100 \\times 100$ m).',
    },
  ],
  '8-9-2': [
    {
      question: 'Hvor mange cm³ er $1 \\text{ dm}^3$?',
      options: ['$1000 \\text{ cm}^3$', '$100 \\text{ cm}^3$', '$10 \\text{ cm}^3$', '$10\\,000 \\text{ cm}^3$'],
      explanation: '$1 \\text{ dm}^3 = 10 \\cdot 10 \\cdot 10 = 1000 \\text{ cm}^3$.',
    },
    {
      question: 'Hva er sammenhengen mellom $\\text{dm}^3$ og liter?',
      options: ['$1 \\text{ dm}^3 = 1$ liter', '$1 \\text{ dm}^3 = 10$ liter', '$1 \\text{ dm}^3 = 1000$ liter', '$1 \\text{ dm}^3 = 0,1$ liter'],
      explanation: '$1 \\text{ dm}^3 = 1$ liter, og $1 \\text{ cm}^3 = 1$ mL.',
    },
    {
      question: 'Hvor mange mL er $3,5$ liter?',
      options: ['$3500$ mL', '$350$ mL', '$35$ mL', '$35\\,000$ mL'],
      explanation: '$1$ L $= 1000$ mL, så $3,5 \\cdot 1000 = 3500$ mL.',
    },
    {
      question: 'Hvor mange dm³ er $4500 \\text{ cm}^3$?',
      options: ['$4,5 \\text{ dm}^3$', '$45 \\text{ dm}^3$', '$0,45 \\text{ dm}^3$', '$450 \\text{ dm}^3$'],
      explanation: '$1 \\text{ dm}^3 = 1000 \\text{ cm}^3$, så $\\frac{4500}{1000} = 4,5 \\text{ dm}^3$.',
    },
    {
      question: 'Hva er omregningsfaktoren mellom naboenheter for volum?',
      options: ['$1000$', '$100$', '$10$', '$1$'],
      explanation: 'Volumfaktoren er lengdefaktoren i tredje potens: $10^3 = 1000$.',
    },
  ],
  '8-9-3': [
    {
      question: 'Hva er formelen for fart?',
      options: ['$v = \\frac{s}{t}$', '$v = s \\cdot t$', '$v = \\frac{t}{s}$', '$v = s + t$'],
      explanation: 'Fart er strekning delt på tid: $v = \\frac{s}{t}$.',
    },
    {
      question: 'En bil kjører $180$ km på $2,5$ timer. Hva er gjennomsnittsfarten?',
      options: ['$72$ km/t', '$80$ km/t', '$450$ km/t', '$60$ km/t'],
      explanation: '$v = \\frac{180}{2,5} = 72$ km/t.',
    },
    {
      question: 'Hvordan gjør du om $90$ km/t til m/s?',
      options: ['Del på $3,6$', 'Gang med $3,6$', 'Del på $10$', 'Gang med $1000$'],
      explanation: 'km/t $\\div 3,6 = $ m/s, så $90 \\div 3,6 = 25$ m/s.',
    },
    {
      question: 'Hva er $1 \\text{ g/cm}^3$ i kg/m³?',
      options: ['$1000 \\text{ kg/m}^3$', '$100 \\text{ kg/m}^3$', '$1 \\text{ kg/m}^3$', '$10 \\text{ kg/m}^3$'],
      explanation: '$1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$.',
    },
    {
      question: 'En jernklump har masse $394$ g og volum $50 \\text{ cm}^3$. Hva er tettheten?',
      options: ['$7,88 \\text{ g/cm}^3$', '$78,8 \\text{ g/cm}^3$', '$0,79 \\text{ g/cm}^3$', '$444 \\text{ g/cm}^3$'],
      explanation: '$\\rho = \\frac{m}{V} = \\frac{394}{50} = 7,88 \\text{ g/cm}^3$.',
    },
  ],
  '8-9-4': [
    {
      question: 'En oppskrift for 4 personer skal lages til 10. Hva er skalafaktoren?',
      options: ['$2,5$', '$2$', '$6$', '$1,5$'],
      explanation: 'Skalafaktor $= \\frac{10}{4} = 2,5$.',
    },
    {
      question: 'Hvordan finner du gjennomsnittsfarten på en reise med flere etapper?',
      options: ['Total strekning delt på total tid', 'Gjennomsnittet av fartene', 'Summen av fartene', 'Største fart minus minste'],
      explanation: 'Gjennomsnittsfart $= \\frac{s_{\\text{total}}}{t_{\\text{total}}}$, ikke gjennomsnittet av fartene.',
    },
    {
      question: 'En bil kjører $300$ km med $80$ km/t. Hvor lang tid tar det?',
      options: ['$3,75$ timer', '$3$ timer', '$4$ timer', '$3,5$ timer'],
      explanation: '$t = \\frac{300}{80} = 3,75$ timer (3 t 45 min).',
    },
    {
      question: 'Et gulv er $4,5$ m langt og $3,5$ m bredt. Hva er gulvarealet?',
      options: ['$15,75 \\text{ m}^2$', '$16 \\text{ m}^2$', '$8 \\text{ m}^2$', '$12,5 \\text{ m}^2$'],
      explanation: '$A = 4,5 \\cdot 3,5 = 15,75 \\text{ m}^2$.',
    },
    {
      question: 'Hva bør du alltid gjøre før du regner med ulike måleenheter?',
      options: ['Gjøre om til samme enhet', 'Avrunde alle tall', 'Gange alt med 1000', 'Bytte til prosent'],
      explanation: 'Du må sørge for at alle tall har samme enhet før du regner.',
    },
  ],
  '8-10-1': [
    {
      question: 'Hva er en funksjon?',
      options: ['En regel som gir hver innverdi nøyaktig én utverdi', 'En tilfeldig sammenheng', 'En tabell med tall', 'Et tall som ganges'],
      explanation: 'En funksjon tilordner hver innverdi $x$ nøyaktig én utverdi $f(x)$.',
    },
    {
      question: 'En funksjonsmaskin ganger med 3 og trekker fra 1. Hva blir utverdien for $x = 2$?',
      options: ['$5$', '$6$', '$7$', '$3$'],
      explanation: '$3 \\cdot 2 - 1 = 6 - 1 = 5$.',
    },
    {
      question: 'For $f(x) = 4x - 2$, hva er $f(3)$?',
      options: ['$10$', '$12$', '$14$', '$6$'],
      explanation: '$f(3) = 4 \\cdot 3 - 2 = 12 - 2 = 10$.',
    },
    {
      question: 'Hva betyr $f(x)$?',
      options: ['Verdien av funksjonen $f$ når innverdien er $x$', '$f$ ganget med $x$', 'Funksjonen pluss $x$', 'Et tall delt på $x$'],
      explanation: '$f(x)$ betyr utverdien til funksjonen for innverdien $x$, ikke $f$ ganget med $x$.',
    },
    {
      question: 'En taxitur koster $P(x) = 15x + 50$. Hva koster en tur på 8 km?',
      options: ['$170$ kr', '$120$ kr', '$65$ kr', '$150$ kr'],
      explanation: '$P(8) = 15 \\cdot 8 + 50 = 120 + 50 = 170$ kr.',
    },
  ],
  '8-10-2': [
    {
      question: 'Hva er en verditabell?',
      options: ['En tabell med $x$-verdier og tilhørende $f(x)$-verdier', 'En graf', 'En formel', 'En liste med ord'],
      explanation: 'En verditabell viser sammenhengen mellom innverdier $x$ og utverdier $f(x)$.',
    },
    {
      question: 'For $f(x) = x^2 - 2$, hva er $f(-3)$?',
      options: ['$7$', '$-7$', '$11$', '$1$'],
      explanation: '$f(-3) = (-3)^2 - 2 = 9 - 2 = 7$.',
    },
    {
      question: 'Hva slags graf har en lineær funksjon $f(x) = ax + b$?',
      options: ['En rett linje', 'En parabel', 'En sirkel', 'En bølge'],
      explanation: 'Lineære funksjoner gir alltid en rett linje.',
    },
    {
      question: 'Hva er nullpunktet til en funksjon?',
      options: ['Punktet der grafen krysser x-aksen ($f(x) = 0$)', 'Punktet der grafen krysser y-aksen', 'Toppunktet', 'Origo'],
      explanation: 'Nullpunktet er der grafen krysser x-aksen, altså der $f(x) = 0$.',
    },
    {
      question: 'For $f(x) = 2x - 4$, hva er nullpunktet?',
      options: ['$x = 2$', '$x = 4$', '$x = -4$', '$x = 0$'],
      explanation: '$2x - 4 = 0$ gir $x = 2$.',
    },
  ],
  '8-10-3': [
    {
      question: 'Hvilke fire måter kan en funksjon beskrives på?',
      options: ['Tekst, tabell, graf og formel', 'Tall, bokstav, tegn og bilde', 'Sum, produkt, brøk og rot', 'Linje, kurve, punkt og flate'],
      explanation: 'En funksjon kan beskrives med tekst, tabell, graf og formel.',
    },
    {
      question: 'For tabellen $x: 0,1,2,3,4$ og $f(x): 4,7,10,13,16$, hva er funksjonsuttrykket?',
      options: ['$f(x) = 3x + 4$', '$f(x) = 4x + 3$', '$f(x) = x + 4$', '$f(x) = 3x$'],
      explanation: 'Stigningstall $a = 3$ (konstant endring), konstantledd $b = f(0) = 4$, så $f(x) = 3x + 4$.',
    },
    {
      question: 'En linje går gjennom $(1, 5)$ og $(3, 11)$. Hva er stigningstallet?',
      options: ['$3$', '$2$', '$6$', '$5$'],
      explanation: '$a = \\frac{11 - 5}{3 - 1} = \\frac{6}{2} = 3$.',
    },
    {
      question: 'Hvor finner vi konstantleddet $b$ på en graf?',
      options: ['Der grafen krysser y-aksen', 'Der grafen krysser x-aksen', 'I toppunktet', 'I origo alltid'],
      explanation: 'Konstantleddet $b = f(0)$ er der grafen krysser y-aksen.',
    },
    {
      question: 'En elektriker tar 300 kr i utkjøring pluss 450 kr per time. Hva er formelen?',
      options: ['$P(t) = 450t + 300$', '$P(t) = 300t + 450$', '$P(t) = 750t$', '$P(t) = 450 + 300t$'],
      explanation: 'Stigningstall (timepris) 450, konstantledd (utkjøring) 300: $P(t) = 450t + 300$.',
    },
  ],
  '8-11-1': [
    {
      question: 'Hva bruker vi `print()` til i Python?',
      options: ['Å skrive ut tekst eller verdier på skjermen', 'Å lagre en verdi', 'Å lese inn data', 'Å gjenta kode'],
      explanation: '`print()` skriver ut tekst eller verdier på skjermen.',
    },
    {
      question: 'Hva er en variabel i programmering?',
      options: ['Et navn som lagrer en verdi', 'En matematisk formel', 'En feilmelding', 'En løkke'],
      explanation: 'En variabel er et navn som lagrer en verdi, f.eks. `alder = 13`.',
    },
    {
      question: 'Hva skriver `print(2 + 3 * 4)` ut?',
      options: ['$14$', '$20$', '$24$', '$9$'],
      explanation: 'Python følger PEMDAS: $3 \\cdot 4 = 12$, så $2 + 12 = 14$.',
    },
    {
      question: 'Hva gir alltid `input()` tilbake?',
      options: ['Tekst (en streng)', 'Et heltall', 'Et desimaltall', 'En liste'],
      explanation: 'Alt fra `input()` er tekst. Bruk `int()` eller `float()` for å gjøre det om til tall.',
    },
    {
      question: 'Hva betyr operatoren `**` i Python?',
      options: ['Potens', 'Multiplikasjon', 'Heltallsdivisjon', 'Rest (modulo)'],
      explanation: '`**` er potens, f.eks. `2 ** 3` gir $8$.',
    },
  ],
  '8-11-2': [
    {
      question: 'Hva gjør en for-løkke?',
      options: ['Gjentar en kodeblokk et bestemt antall ganger', 'Lagrer en verdi', 'Skriver ut tekst én gang', 'Leser inn data'],
      explanation: 'En for-løkke gjentar koden et bestemt antall ganger, ofte med `range()`.',
    },
    {
      question: 'Hvilke tall gir `range(1, 6)`?',
      options: ['$1, 2, 3, 4, 5$', '$1, 2, 3, 4, 5, 6$', '$0, 1, 2, 3, 4, 5$', '$2, 3, 4, 5, 6$'],
      explanation: '`range(1, 6)` gir tallene fra 1 til, men ikke med, 6.',
    },
    {
      question: 'Hva er kortformen for `x = x + 3`?',
      options: ['`x += 3`', '`x =+ 3`', '`x ++ 3`', '`x * 3`'],
      explanation: '`x += 3` er kortform for `x = x + 3`.',
    },
    {
      question: 'Hva blir summen $1 + 2 + \\cdots + 100$ beregnet med en løkke?',
      options: ['$5050$', '$5000$', '$10100$', '$100$'],
      explanation: '$\\frac{100 \\cdot 101}{2} = 5050$.',
    },
    {
      question: 'Hva gjør en while-løkke?',
      options: ['Gjentar kode så lenge en betingelse er sann', 'Kjører alltid 10 ganger', 'Skriver ut én linje', 'Lagrer flere variabler'],
      explanation: 'En while-løkke gjentar koden så lenge betingelsen er sann.',
    },
  ],
  '8-11-3': [
    {
      question: 'Hva er en algoritme?',
      options: ['En steg-for-steg-beskrivelse av hvordan man løser et problem', 'En tilfeldig kode', 'En matematisk formel', 'En variabel'],
      explanation: 'En algoritme er en nøyaktig, steg-for-steg-beskrivelse av hvordan et problem løses.',
    },
    {
      question: 'Hvilken form i et flytdiagram brukes for en ja/nei-beslutning?',
      options: ['Rombe (diamant)', 'Rektangel', 'Oval', 'Pil'],
      explanation: 'En rombe brukes for beslutninger (ja/nei-spørsmål) i et flytdiagram.',
    },
    {
      question: 'Hva gjør Euklids algoritme?',
      options: ['Finner største felles divisor (SFD)', 'Sorterer tall', 'Finner primtall', 'Beregner gjennomsnitt'],
      explanation: 'Euklids algoritme finner SFD ved gjentatt divisjon: $\\text{SFD}(a, b) = \\text{SFD}(b, a \\bmod b)$.',
    },
    {
      question: 'Hva er SFD av 48 og 18 med Euklids algoritme?',
      options: ['$6$', '$12$', '$3$', '$9$'],
      explanation: '$48 \\bmod 18 = 12$, $18 \\bmod 12 = 6$, $12 \\bmod 6 = 0$. SFD $= 6$.',
    },
    {
      question: 'Hva gjør `break` i en løkke?',
      options: ['Avslutter løkken umiddelbart', 'Hopper til neste runde', 'Starter løkken på nytt', 'Pauser programmet'],
      explanation: '`break` avslutter løkken med en gang, f.eks. når en deler er funnet.',
    },
  ],

};

export default quizData_matematikk_8;
