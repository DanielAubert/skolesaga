import type { QuizQuestion } from './quiz-data';

const quizData_biOkonomi: Record<string, QuizQuestion[]> = {
  'bi-okonomi-1-1': [
    {
      question: 'Hva er $2^3 \\cdot 2^4$?',
      options: ['$2^7$', '$2^{12}$', '$4^7$', '$2^{1}$'],
      explanation: 'Ved multiplikasjon av potenser med samme grunntall legger vi sammen eksponentene: $2^{3+4} = 2^7$.',
    },
    {
      question: 'Hva er $\\frac{5^6}{5^2}$?',
      options: ['$5^4$', '$5^8$', '$5^3$', '$1^4$'],
      explanation: 'Ved divisjon av potenser med samme grunntall trekker vi eksponentene fra hverandre: $5^{6-2} = 5^4$.',
    },
    {
      question: 'Hva er $a^0$ for et tall $a \\neq 0$?',
      options: ['$1$', '$0$', '$a$', 'Udefinert'],
      explanation: 'Per definisjon er enhver potens med eksponent $0$ lik $1$ (når grunntallet ikke er $0$).',
    },
    {
      question: 'Hva er $3^{-2}$?',
      options: ["$\\frac{1}{9}$", "$-9$", "$\\frac{2}{3}$ (deler feil)", "$-6$"],
      explanation: 'Negativ eksponent betyr invers: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.',
    },
    {
      question: 'Hva er $(2^3)^2$?',
      options: ['$2^6$', '$2^5$', '$2^9$', '$4^3$'],
      explanation: 'Potens av potens: vi multipliserer eksponentene, $2^{3 \\cdot 2} = 2^6 = 64$.',
    },
  ],

  'bi-okonomi-1-2': [
    {
      question: 'Hva blir $3x + 2x - x$ forenklet?',
      options: ['$4x$', '$5x$', '$6x$', '$4x^3$'],
      explanation: 'Vi samler like ledd: $3x + 2x - x = (3+2-1)x = 4x$.',
    },
    {
      question: 'Hva blir $2(x + 3) - 4$?',
      options: ['$2x + 2$', '$2x + 6$', '$2x - 1$', '$2x + 10$'],
      explanation: 'Vi multipliserer inn: $2x + 6 - 4 = 2x + 2$.',
    },
    {
      question: 'Hva er $x \\cdot x \\cdot x$ skrevet som potens?',
      options: ['$x^3$', '$3x$', '$x^2$', '$3^x$'],
      explanation: 'Tre like faktorer multiplisert gir $x^3$.',
    },
    {
      question: 'Hva blir $5a - (2a - 3)$?',
      options: ['$3a + 3$', '$3a - 3$', '$7a - 3$', '$3a + 5$'],
      explanation: 'Minustegnet snur fortegnene i parentesen: $5a - 2a + 3 = 3a + 3$.',
    },
    {
      question: 'Hva er verdien av $2x^2$ når $x = 3$?',
      options: ['$18$', '$36$', '$12$', '$6$'],
      explanation: 'Vi regner potensen først: $2 \\cdot 3^2 = 2 \\cdot 9 = 18$.',
    },
  ],

  'bi-okonomi-1-3': [
    {
      question: 'Hva er $\\frac{2}{3} + \\frac{1}{6}$?',
      options: ['$\\frac{5}{6}$', '$\\frac{3}{9}$', '$\\frac{1}{2}$', '$\\frac{3}{6}$'],
      explanation: 'Felles nevner er $6$: $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.',
    },
    {
      question: 'Hva er $\\frac{3}{4} \\cdot \\frac{2}{5}$?',
      options: ['$\\frac{6}{20}$', '$\\frac{5}{9}$', '$\\frac{6}{9}$', '$\\frac{3}{10}$'],
      explanation: 'Vi multipliserer teller med teller og nevner med nevner: $\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20}$.',
    },
    {
      question: 'Hva er $\\frac{2}{3} : \\frac{4}{9}$?',
      options: ['$\\frac{3}{2}$', '$\\frac{8}{27}$', '$\\frac{2}{3}$', '$\\frac{6}{12}$'],
      explanation: 'Vi multipliserer med den inverse: $\\frac{2}{3} \\cdot \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$.',
    },
    {
      question: 'Hva er $\\frac{6}{8}$ forkortet mest mulig?',
      options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{6}{8}$', '$\\frac{1}{2}$'],
      explanation: 'Både teller og nevner deles på $2$: $\\frac{6:2}{8:2} = \\frac{3}{4}$.',
    },
    {
      question: 'Hva er $\\frac{5}{6} - \\frac{1}{3}$?',
      options: ['$\\frac{1}{2}$', '$\\frac{4}{3}$', '$\\frac{4}{6}$', '$\\frac{2}{3}$'],
      explanation: 'Felles nevner $6$: $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$.',
    },
  ],

  'bi-okonomi-1-4': [
    {
      question: 'Hvor mye er $25\\%$ av $800$ kr?',
      options: ['$200$ kr', '$250$ kr', '$160$ kr', '$320$ kr'],
      explanation: '$25\\%$ er det samme som $0{,}25$: $0{,}25 \\cdot 800 = 200$ kr.',
    },
    {
      question: 'En vare koster $400$ kr og settes opp $15\\%$. Hva er ny pris?',
      options: ['$460$ kr', '$415$ kr', '$340$ kr', '$600$ kr'],
      explanation: 'Vekstfaktor $1{,}15$: $400 \\cdot 1{,}15 = 460$ kr.',
    },
    {
      question: 'En pris faller fra $500$ kr til $400$ kr. Hvor mange prosent er nedgangen?',
      options: ['$20\\%$', '$25\\%$', '$10\\%$', '$100\\%$'],
      explanation: 'Nedgang $100$ kr av $500$ kr: $\\frac{100}{500} = 0{,}20 = 20\\%$.',
    },
    {
      question: 'Hva er vekstfaktoren ved en nedgang på $8\\%$?',
      options: ['$0{,}92$', '$1{,}08$', '$0{,}08$', '$0{,}80$'],
      explanation: 'Ved nedgang: vekstfaktor $= 1 - 0{,}08 = 0{,}92$.',
    },
    {
      question: 'Et beløp øker med $10\\%$ og deretter med $10\\%$ til. Samlet vekstfaktor er:',
      options: ['$1{,}21$', '$1{,}20$', '$1{,}10$', '$2{,}00$'],
      explanation: 'To økninger multipliseres: $1{,}10 \\cdot 1{,}10 = 1{,}21$, altså $21\\%$ samlet økning.',
    },
  ],

  'bi-okonomi-1-5': [
    {
      question: 'Hva er $(a + b)^2$?',
      options: ['$a^2 + 2ab + b^2$', '$a^2 + b^2$', '$a^2 - 2ab + b^2$', '$a^2 + ab + b^2$'],
      explanation: 'Første kvadratsetning: $(a+b)^2 = a^2 + 2ab + b^2$.',
    },
    {
      question: 'Hva er $(a - b)(a + b)$?',
      options: ['$a^2 - b^2$', '$a^2 + b^2$', '$a^2 - 2ab + b^2$', '$a^2 - ab$'],
      explanation: 'Konjugatsetningen: $(a-b)(a+b) = a^2 - b^2$.',
    },
    {
      question: 'Faktoriser $x^2 - 9$.',
      options: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x-9)(x+1)$', '$(x+3)^2$'],
      explanation: 'Dette er konjugatsetningen med $a=x$, $b=3$: $x^2 - 9 = (x-3)(x+3)$.',
    },
    {
      question: 'Faktoriser $2x^2 + 4x$.',
      options: ['$2x(x + 2)$', '$2x(x + 4)$', '$x(2x + 4x)$', '$2(x^2 + 2)$'],
      explanation: 'Vi setter felles faktor $2x$ utenfor: $2x^2 + 4x = 2x(x + 2)$.',
    },
    {
      question: 'Hva er $(x - 4)^2$?',
      options: ['$x^2 - 8x + 16$', '$x^2 + 16$', '$x^2 - 16$', '$x^2 - 8x - 16$'],
      explanation: 'Andre kvadratsetning: $(x-4)^2 = x^2 - 2\\cdot 4 x + 16 = x^2 - 8x + 16$.',
    },
  ],

  'bi-okonomi-1-6': [
    {
      question: 'Hva er $\\frac{x^2 - 9}{x - 3}$ forkortet (for $x \\neq 3$)?',
      options: ['$x + 3$', '$x - 3$', '$x^2 - 3$', '$x + 9$'],
      explanation: 'Teller faktoriseres: $\\frac{(x-3)(x+3)}{x-3} = x + 3$.',
    },
    {
      question: 'Hva er $\\frac{2}{x} + \\frac{3}{x}$?',
      options: ['$\\frac{5}{x}$', '$\\frac{5}{2x}$', '$\\frac{6}{x}$', '$\\frac{5}{x^2}$'],
      explanation: 'Samme nevner, så vi legger tellerne sammen: $\\frac{2+3}{x} = \\frac{5}{x}$.',
    },
    {
      question: 'Hva er $\\frac{x}{2} \\cdot \\frac{4}{x}$ (for $x \\neq 0$)?',
      options: ['$2$', '$\\frac{4}{2}$', '$\\frac{x^2}{8}$', '$\\frac{1}{2}$'],
      explanation: '$\\frac{x \\cdot 4}{2 \\cdot x} = \\frac{4x}{2x} = 2$.',
    },
    {
      question: 'For hvilken $x$-verdi er $\\frac{1}{x - 5}$ ikke definert?',
      options: ['$x = 5$', '$x = 0$', '$x = -5$', '$x = 1$'],
      explanation: 'Et brøkuttrykk er udefinert når nevneren er $0$, altså $x - 5 = 0 \\Rightarrow x = 5$.',
    },
    {
      question: 'Hva er $\\frac{x^2}{x}$ forkortet (for $x \\neq 0$)?',
      options: ['$x$', '$x^2$', '$1$', '$\\frac{1}{x}$'],
      explanation: 'Vi forkorter én $x$: $\\frac{x \\cdot x}{x} = x$.',
    },
  ],

  'bi-okonomi-2-1': [
    {
      question: 'Løs likningen $2x + 6 = 14$.',
      options: ['$x = 4$', '$x = 10$', '$x = 7$', '$x = 8$'],
      explanation: '$2x = 14 - 6 = 8$, så $x = 4$.',
    },
    {
      question: 'Løs likningen $3x - 5 = x + 7$.',
      options: ['$x = 6$', '$x = 1$', '$x = 3$', '$x = 12$'],
      explanation: '$3x - x = 7 + 5 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.',
    },
    {
      question: 'Løs $\\frac{x}{4} = 3$.',
      options: ['$x = 12$', '$x = \\frac{3}{4}$', '$x = 7$', '$x = \\frac{4}{3}$'],
      explanation: 'Vi multipliserer begge sider med $4$: $x = 12$.',
    },
    {
      question: 'Løs $5(x - 2) = 20$.',
      options: ['$x = 6$', '$x = 4$', '$x = 22$', '$x = 2$'],
      explanation: 'Del på $5$: $x - 2 = 4$, så $x = 6$.',
    },
    {
      question: 'Hva er løsningen på $-3x = 12$?',
      options: ['$x = -4$', '$x = 4$', '$x = -9$', '$x = -36$'],
      explanation: 'Vi deler på $-3$: $x = \\frac{12}{-3} = -4$.',
    },
  ],

  'bi-okonomi-2-2': [
    {
      question: 'Hva er abc-formelen for $ax^2 + bx + c = 0$?',
      options: ['$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', '$x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$', '$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$', '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}$'],
      explanation: 'Andregradsformelen er $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
    },
    {
      question: 'Løs $x^2 - 5x + 6 = 0$.',
      options: ['$x = 2$ eller $x = 3$', '$x = -2$ eller $x = -3$', '$x = 1$ eller $x = 6$', '$x = 5$ eller $x = 6$'],
      explanation: 'Diskriminant $25 - 24 = 1$. $x = \\frac{5 \\pm 1}{2}$, altså $x = 3$ eller $x = 2$.',
    },
    {
      question: 'Hva er diskriminanten til $x^2 + 2x + 5 = 0$?',
      options: ["$-16$", "$16$", "$-24$ (feil ledd)", "$24$"],
      explanation: 'Diskriminant $= b^2 - 4ac = 2^2 - 4 \\cdot 1 \\cdot 5 = 4 - 20 = -16$.',
    },
    {
      question: 'Hvor mange reelle løsninger har en andregradslikning når diskriminanten er negativ?',
      options: ['Ingen', 'Én', 'To', 'Uendelig mange'],
      explanation: 'Negativ diskriminant gir ingen reelle løsninger (kvadratroten av et negativt tall er ikke reell).',
    },
    {
      question: 'Løs $x^2 - 4 = 0$.',
      options: ["$x = 2$ eller $x = -2$", "$x = 0$ eller $x = 4$", "$x = 2$ (glemmer negativ rot)", "$x = 4$ eller $x = -4$ (ikke rot)"],
      explanation: '$x^2 = 4 \\Rightarrow x = \\pm 2$.',
    },
  ],

  'bi-okonomi-2-3': [
    {
      question: 'Løs likningssettet $x + y = 5$ og $x - y = 1$.',
      options: ['$x = 3, y = 2$', '$x = 2, y = 3$', '$x = 4, y = 1$', '$x = 1, y = 4$'],
      explanation: 'Adderer vi likningene: $2x = 6 \\Rightarrow x = 3$, og da $y = 2$.',
    },
    {
      question: 'I innsettingsmetoden gjør vi hva først?',
      options: ["Uttrykker én variabel ved hjelp av den andre", "Multipliserer likningene", "Multipliserer de to likningene sammen ledd for ledd", "Adderer likningene direkte for å fjerne en variabel"],
      explanation: 'I innsettingsmetoden løser vi én likning for en variabel og setter dette inn i den andre.',
    },
    {
      question: 'Løs $2x + y = 7$ og $y = x - 2$.',
      options: ['$x = 3, y = 1$', '$x = 2, y = 0$', '$x = 1, y = -1$', '$x = 4, y = 2$'],
      explanation: 'Setter inn: $2x + (x - 2) = 7 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, $y = 1$.',
    },
    {
      question: 'Hva betyr det grafisk at et lineært likningssett har én løsning?',
      options: ["Linjene skjærer hverandre i ett punkt", "Linjene er sammenfallende", "Linjene er parallelle og skjærer aldri", "Linjene er sammenfallende (uendelig mange)"],
      explanation: 'Løsningen er skjæringspunktet; én løsning betyr at linjene krysser i nøyaktig ett punkt.',
    },
    {
      question: 'Løs $3x + 2y = 12$ og $x = 2$.',
      options: ['$y = 3$', '$y = 6$', '$y = 4$', '$y = 2$'],
      explanation: 'Setter inn $x = 2$: $6 + 2y = 12 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.',
    },
  ],

  'bi-okonomi-2-4': [
    {
      question: 'Løs ulikheten $2x + 3 > 9$.',
      options: ['$x > 3$', '$x > 6$', '$x < 3$', '$x > 12$'],
      explanation: '$2x > 6 \\Rightarrow x > 3$.',
    },
    {
      question: 'Hva skjer med ulikhetstegnet når vi deler på et negativt tall?',
      options: ['Det snur', 'Det forblir likt', 'Det blir til likhetstegn', 'Det forsvinner'],
      explanation: 'Multiplikasjon eller divisjon med et negativt tall snur ulikhetstegnet.',
    },
    {
      question: 'Løs $-3x \\geq 12$.',
      options: ['$x \\leq -4$', '$x \\geq -4$', '$x \\leq 4$', '$x \\geq 4$'],
      explanation: 'Del på $-3$ og snu tegnet: $x \\leq -4$.',
    },
    {
      question: 'Løs $x - 5 < 2$.',
      options: ['$x < 7$', '$x < -3$', '$x > 7$', '$x < 3$'],
      explanation: 'Vi legger til $5$ på begge sider: $x < 7$.',
    },
    {
      question: 'Hvilke heltall oppfyller $1 \\leq x < 4$?',
      options: ['$1, 2, 3$', '$1, 2, 3, 4$', '$2, 3$', '$0, 1, 2, 3$'],
      explanation: 'Fra og med $1$ til, men ikke med, $4$: heltallene $1, 2$ og $3$.',
    },
  ],

  'bi-okonomi-2-5': [
    {
      question: 'Løs $\\frac{6}{x} = 3$.',
      options: ['$x = 2$', '$x = 18$', '$x = 9$', '$x = \\frac{1}{2}$'],
      explanation: 'Multipliser med $x$: $6 = 3x \\Rightarrow x = 2$.',
    },
    {
      question: 'Hva må vi sjekke etter å ha løst en rasjonal likning?',
      options: ["At løsningen ikke gjør en nevner lik 0", "At løsningen er mindre enn 1", "At løsningen alltid er et positivt tall", "At løsningen er et heltall uten desimaler"],
      explanation: 'Verdier som gjør en nevner $0$ er ikke gyldige løsninger og må forkastes.',
    },
    {
      question: 'Løs $\\frac{x}{x - 1} = 2$.',
      options: ['$x = 2$', '$x = 1$', '$x = -2$', '$x = \\frac{1}{2}$'],
      explanation: '$x = 2(x - 1) = 2x - 2 \\Rightarrow -x = -2 \\Rightarrow x = 2$ (gyldig, $x \\neq 1$).',
    },
    {
      question: 'Hva er felles nevner for $\\frac{1}{x}$ og $\\frac{1}{x+2}$?',
      options: ["$x(x+2)$", "$x + 2$", "$2x + 2$", "$x$ alene"],
      explanation: 'Felles nevner er produktet $x(x+2)$.',
    },
    {
      question: 'Løs $\\frac{10}{x} = 5$.',
      options: ['$x = 2$', '$x = 50$', '$x = 5$', '$x = 15$'],
      explanation: '$10 = 5x \\Rightarrow x = 2$.',
    },
  ],

  'bi-okonomi-2-6': [
    {
      question: 'Et tall økt med 7 gir 20. Hvilken likning beskriver dette?',
      options: ['$x + 7 = 20$', '$7x = 20$', '$x - 7 = 20$', '$\\frac{x}{7} = 20$'],
      explanation: '"Et tall økt med 7" er $x + 7$, satt lik $20$.',
    },
    {
      question: 'To varer koster til sammen 150 kr. Den ene koster 30 kr mer enn den andre. Hva koster den billigste?',
      options: ['$60$ kr', '$90$ kr', '$75$ kr', '$45$ kr'],
      explanation: '$x + (x + 30) = 150 \\Rightarrow 2x = 120 \\Rightarrow x = 60$ kr.',
    },
    {
      question: 'En bedrift har faste kostnader $5000$ kr og selger til $50$ kr per enhet. Hvor mange enheter dekker kostnadene ved inntekt $7000$ kr?',
      options: ['$140$ enheter', '$100$ enheter', '$120$ enheter', '$35$ enheter'],
      explanation: '$50x = 7000 \\Rightarrow x = 140$ enheter (de faste kostnadene var oppgitt som ekstra info).',
    },
    {
      question: 'Hva er det første steget når man løser et praktisk problem med likning?',
      options: ["Sette opp en likning som beskriver situasjonen", "Sette inn tilfeldige tall", "Tegne grafen til uttrykket før noe annet gjøres", "Derivere uttrykket for å finne et ekstremalpunkt"],
      explanation: 'Vi oversetter teksten til en matematisk likning før vi løser den.',
    },
    {
      question: 'Tre ganger et tall minus 4 er 11. Hva er tallet?',
      options: ['$5$', '$7$', '$3$', '$15$'],
      explanation: '$3x - 4 = 11 \\Rightarrow 3x = 15 \\Rightarrow x = 5$.',
    },
  ],

  'bi-okonomi-2-7': [
    {
      question: 'Produktet av et tall og tallet økt med 3 er 10. Hvilken likning?',
      options: ['$x(x + 3) = 10$', '$x + (x+3) = 10$', '$3x = 10$', '$x^2 = 10$'],
      explanation: 'Produktet av $x$ og $x+3$ er $x(x+3)$, satt lik $10$.',
    },
    {
      question: 'Et rektangel har areal $24$ og lengden er $2$ mer enn bredden $b$. Hvilken likning?',
      options: ['$b(b + 2) = 24$', '$b + (b+2) = 24$', '$2b = 24$', '$b^2 + 2 = 24$'],
      explanation: 'Areal $= $ bredde $\\cdot$ lengde $= b(b+2) = 24$.',
    },
    {
      question: 'Løs $x^2 + 3x - 10 = 0$ (positiv løsning).',
      options: ['$x = 2$', '$x = 5$', '$x = -5$', '$x = 10$'],
      explanation: 'Faktorisert: $(x+5)(x-2) = 0$, så $x = 2$ eller $x = -5$. Positiv løsning er $2$.',
    },
    {
      question: 'En bedrifts overskudd er $O(x) = -x^2 + 10x$. For hvilken $x > 0$ er overskuddet $0$?',
      options: ['$x = 10$', '$x = 5$', '$x = 0$', '$x = 100$'],
      explanation: '$-x^2 + 10x = 0 \\Rightarrow x(10 - x) = 0$, så $x = 0$ eller $x = 10$. Positiv løsning $x = 10$.',
    },
    {
      question: 'Hvorfor forkaster vi ofte den negative løsningen i praktiske andregradsoppgaver?',
      options: ["Fordi antall, lengder og priser ikke kan være negative", "Fordi negative tall er forbudt i alle typer likninger", "Fordi andregradsformelen bare gir oss én gyldig løsning", "Fordi negative tall ikke lar seg kvadrere i slike oppgaver"],
      explanation: 'I praktiske kontekster (antall, lengde, pris) gir negative verdier ikke mening og forkastes.',
    },
  ],

  'bi-okonomi-3-1': [
    {
      question: 'Hva er stigningstallet til $f(x) = 3x + 2$?',
      options: ['$3$', '$2$', '$5$', '$\\frac{2}{3}$'],
      explanation: 'I formen $f(x) = ax + b$ er $a$ stigningstallet, altså $3$.',
    },
    {
      question: 'Hvor skjærer $f(x) = 2x - 4$ $y$-aksen?',
      options: ['$(0, -4)$', '$(0, 2)$', '$(2, 0)$', '$(-4, 0)$'],
      explanation: '$y$-aksen er der $x = 0$: $f(0) = -4$, altså punktet $(0, -4)$.',
    },
    {
      question: 'Hvor skjærer $f(x) = 2x - 4$ $x$-aksen?',
      options: ['$(2, 0)$', '$(0, -4)$', '$(-2, 0)$', '$(4, 0)$'],
      explanation: '$x$-aksen er der $f(x) = 0$: $2x - 4 = 0 \\Rightarrow x = 2$.',
    },
    {
      question: 'En lineær funksjon har stigningstall $-2$. Hva betyr det?',
      options: ["$y$ minker med 2 når $x$ øker med 1", "$y$ øker med 2 når $x$ øker med 1", "$y$ øker med 2 hver gang $x$ øker med 1", "Grafen går alltid gjennom origo $(0,0)$"],
      explanation: 'Negativt stigningstall betyr at grafen synker; $-2$ gir nedgang på $2$ per steg i $x$.',
    },
    {
      question: 'Finn stigningstallet til linjen gjennom $(1, 3)$ og $(3, 7)$.',
      options: ['$2$', '$4$', '$\\frac{1}{2}$', '$3$'],
      explanation: 'Stigningstall $= \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.',
    },
  ],

  'bi-okonomi-3-2': [
    {
      question: 'Grafen til en andregradsfunksjon kalles en:',
      options: ['Parabel', 'Hyperbel', 'Rett linje', 'Sirkel'],
      explanation: 'Andregradsfunksjoner $f(x) = ax^2 + bx + c$ gir en parabel.',
    },
    {
      question: 'Når vender parabelen til $f(x) = ax^2 + bx + c$ den hule siden opp?',
      options: ['Når $a > 0$', 'Når $a < 0$', 'Når $c > 0$', 'Alltid'],
      explanation: 'Positiv $a$ gir en parabel som åpner oppover (smiler).',
    },
    {
      question: 'Hva er $x$-koordinaten til toppunktet/bunnpunktet til $f(x) = ax^2 + bx + c$?',
      options: ["$x = -\\frac{b}{2a}$", "$x = \\frac{b}{2a}$", "$x = \\frac{-b}{a}$ (glemt 2)", "$x = -\\frac{c}{a}$"],
      explanation: 'Symmetrilinjen og ekstremalpunktet ligger ved $x = -\\frac{b}{2a}$.',
    },
    {
      question: 'Finn bunnpunktets $x$-verdi for $f(x) = x^2 - 6x + 5$.',
      options: ['$x = 3$', '$x = 6$', '$x = -3$', '$x = 5$'],
      explanation: '$x = -\\frac{b}{2a} = -\\frac{-6}{2} = 3$.',
    },
    {
      question: 'Hvor mange nullpunkter har $f(x) = x^2 + 1$?',
      options: ["Ingen", "Ett", "Tre (feil grad)", "Tre"],
      explanation: '$x^2 + 1 = 0$ har ingen reell løsning, så grafen skjærer ikke $x$-aksen.',
    },
  ],

  'bi-okonomi-3-3': [
    {
      question: 'En eksponentialfunksjon har formen:',
      options: ['$f(x) = a \\cdot b^x$', '$f(x) = ax + b$', '$f(x) = ax^2 + b$', '$f(x) = \\frac{a}{x}$'],
      explanation: 'Eksponentialfunksjoner skrives $f(x) = a \\cdot b^x$ der $x$ står i eksponenten.',
    },
    {
      question: 'For $f(x) = 100 \\cdot 1{,}05^x$ vokser verdien med hvor mange prosent per steg?',
      options: ['$5\\%$', '$105\\%$', '$1{,}05\\%$', '$50\\%$'],
      explanation: 'Vekstfaktoren $1{,}05$ tilsvarer $5\\%$ vekst per enhet av $x$.',
    },
    {
      question: 'Hva er $f(0)$ for $f(x) = 200 \\cdot 1{,}1^x$?',
      options: ['$200$', '$220$', '$1$', '$0$'],
      explanation: '$1{,}1^0 = 1$, så $f(0) = 200 \\cdot 1 = 200$.',
    },
    {
      question: 'Et beløp på $1000$ kr vokser med $1{,}03^x$. Hva er verdien etter 2 år?',
      options: ["$1060{,}90$ kr", "$1060$ kr", "$1030$ kr (kun ett år)", "$1030$ kr"],
      explanation: '$1000 \\cdot 1{,}03^2 = 1000 \\cdot 1{,}0609 = 1060{,}90$ kr.',
    },
    {
      question: 'Når $b < 1$ i $f(x) = a \\cdot b^x$ (med $a > 0$), er funksjonen:',
      options: ["Avtagende", "Voksende", "Voksende (vekst)", "Konstant"],
      explanation: 'Når vekstfaktoren er mindre enn $1$, avtar funksjonsverdien (eksponentiell nedgang).',
    },
  ],

  'bi-okonomi-3-4': [
    {
      question: 'Hva er $\\lg 1000$ (logaritmen med grunntall 10)?',
      options: ['$3$', '$2$', '$10$', '$100$'],
      explanation: '$\\lg 1000 = \\lg 10^3 = 3$.',
    },
    {
      question: 'Hva er $\\ln e$?',
      options: ['$1$', '$0$', '$e$', '$2{,}718$'],
      explanation: 'Den naturlige logaritmen av $e$ er $1$, siden $e^1 = e$.',
    },
    {
      question: 'Løs $10^x = 100$.',
      options: ['$x = 2$', '$x = 10$', '$x = 100$', '$x = 1$'],
      explanation: '$100 = 10^2$, så $x = 2$.',
    },
    {
      question: 'Hva er logaritmeregelen $\\ln(ab)$ lik?',
      options: ['$\\ln a + \\ln b$', '$\\ln a \\cdot \\ln b$', '$\\ln a - \\ln b$', '$\\frac{\\ln a}{\\ln b}$'],
      explanation: 'Logaritmen av et produkt er summen av logaritmene: $\\ln(ab) = \\ln a + \\ln b$.',
    },
    {
      question: 'Løs $2^x = 8$ med logaritme.',
      options: ['$x = 3$', '$x = 4$', '$x = 2$', '$x = 16$'],
      explanation: '$8 = 2^3$, så $x = 3$. (Kan også løses som $x = \\frac{\\ln 8}{\\ln 2} = 3$.)',
    },
  ],

  'bi-okonomi-3-5': [
    {
      question: 'Nullpunktene til en funksjon er der:',
      options: ['$f(x) = 0$', '$x = 0$', '$f\'(x) = 0$', 'Grafen er høyest'],
      explanation: 'Nullpunkter er $x$-verdiene der funksjonen skjærer $x$-aksen, altså $f(x) = 0$.',
    },
    {
      question: 'Finn nullpunktene til $f(x) = (x - 2)(x + 3)$.',
      options: ['$x = 2$ og $x = -3$', '$x = -2$ og $x = 3$', '$x = 2$ og $x = 3$', '$x = 6$'],
      explanation: 'Et produkt er $0$ når en faktor er $0$: $x = 2$ eller $x = -3$.',
    },
    {
      question: 'Hvor er $f(x) = x - 4$ positiv?',
      options: ['For $x > 4$', 'For $x < 4$', 'For $x > 0$', 'Aldri'],
      explanation: '$x - 4 > 0 \\Rightarrow x > 4$.',
    },
    {
      question: 'En fortegnslinje brukes til å:',
      options: ["Vise hvor en funksjon er positiv og negativ", "Finne stigningstallet", "Finne stigningstallet til en rett linjegraf", "Tegne en parabel ut fra to kjente nullpunkter"],
      explanation: 'Fortegnslinjer viser intervallene der funksjonen er positiv (over aksen) og negativ (under).',
    },
    {
      question: 'For hvilke $x$ er $f(x) = x^2 - 4$ negativ?',
      options: ["$-2 < x < 2$", "$x < -2$", "$x > 2$ (kun høyre)", "$x > 2$"],
      explanation: 'Nullpunkter $x = \\pm 2$. Parabelen åpner opp, så den er negativ mellom nullpunktene: $-2 < x < 2$.',
    },
  ],

  'bi-okonomi-3-6': [
    {
      question: 'En rasjonal funksjon er en:',
      options: ["Brøk med polynom i teller og nevner", "Eksponentialfunksjon", "Eksponentialfunksjon med grunntall $b$", "Logaritmefunksjon med grunntallet $10$"],
      explanation: 'En rasjonal funksjon er $f(x) = \\frac{P(x)}{Q(x)}$ der $P$ og $Q$ er polynomer.',
    },
    {
      question: 'Hva kalles linjen $x = a$ som grafen nærmer seg når nevneren går mot 0?',
      options: ['Vertikal asymptote', 'Horisontal asymptote', 'Tangent', 'Symmetrilinje'],
      explanation: 'Der nevneren blir $0$ får man en vertikal (loddrett) asymptote.',
    },
    {
      question: 'Hvor har $f(x) = \\frac{1}{x - 3}$ en vertikal asymptote?',
      options: ['$x = 3$', '$x = 0$', '$x = 1$', '$x = -3$'],
      explanation: 'Nevneren er $0$ ved $x = 3$, som gir en vertikal asymptote.',
    },
    {
      question: 'Hva er den horisontale asymptoten til $f(x) = \\frac{1}{x}$?',
      options: ['$y = 0$', '$y = 1$', '$x = 0$', '$y = x$'],
      explanation: 'Når $x \\to \\pm\\infty$ går $\\frac{1}{x} \\to 0$, så $y = 0$ er horisontal asymptote.',
    },
    {
      question: 'Gjennomsnittskostnaden $\\bar{C}(x) = \\frac{C(x)}{x}$ er et eksempel på en:',
      options: ['Rasjonal funksjon', 'Lineær funksjon', 'Eksponentialfunksjon', 'Logaritmefunksjon'],
      explanation: 'Gjennomsnittskostnad er total kostnad delt på antall, altså en brøk = rasjonal funksjon.',
    },
  ],

  'bi-okonomi-4-1': [
    {
      question: 'Et beløp på $10\\,000$ kr settes i banken til $4\\%$ rente per år. Hvor mye er det etter 1 år?',
      options: ['$10\\,400$ kr', '$10\\,040$ kr', '$14\\,000$ kr', '$10\\,004$ kr'],
      explanation: 'Vekstfaktor $1{,}04$: $10\\,000 \\cdot 1{,}04 = 10\\,400$ kr.',
    },
    {
      question: 'Hva er formelen for sluttverdi med rentes rente?',
      options: ['$K = K_0 \\cdot (1 + r)^n$', '$K = K_0 \\cdot r \\cdot n$', '$K = K_0 + r \\cdot n$', '$K = K_0 \\cdot (1 - r)^n$'],
      explanation: 'Med rentes rente vokser kapitalen som $K = K_0 (1+r)^n$.',
    },
    {
      question: '$5000$ kr til $3\\%$ rente per år. Hvor mye etter 2 år (rentes rente)?',
      options: ["$5304{,}50$ kr", "$5300$ kr", "$5150$ kr (kun ett år)", "$5150$ kr"],
      explanation: '$5000 \\cdot 1{,}03^2 = 5000 \\cdot 1{,}0609 = 5304{,}50$ kr.',
    },
    {
      question: 'Hva er forskjellen mellom enkel rente og rentes rente?',
      options: ["Rentes rente gir rente også på opptjente renter", "Rentes rente regnes bare på lån", "Enkel rente gir alltid en høyere sluttverdi enn rentes rente", "Rentes rente brukes bare når man tar opp lån, ikke ved sparing"],
      explanation: 'Ved rentes rente legges rentene til kapitalen, slik at man får rente av rentene.',
    },
    {
      question: 'Renten oppgis ofte som nominell årsrente. Hva betyr nominell rente?',
      options: ["Den oppgitte renten uten å justere for inflasjon eller rentesammensetning", "Den oppgitte renten etter at renteskatt er trukket fra av banken", "Renten som allerede er justert opp eller ned for prisstigning (inflasjon)", "Renten omregnet til en effektiv sats per måned i stedet for per år samlet"],
      explanation: 'Nominell rente er den oppgitte renten; realrenten justerer for inflasjon.',
    },
  ],

  'bi-okonomi-4-2': [
    {
      question: 'Hva er nåverdien av et beløp $K$ som mottas om $n$ år ved rente $r$?',
      options: ["$\\frac{K}{(1 + r)^n}$", "$K \\cdot (1 + r)^n$", "$K \\cdot (1 + r)^n$ (renter opp)", "$K \\cdot (1 - r)^n$"],
      explanation: 'Nåverdi diskonterer fremtidig beløp: $NV = \\frac{K}{(1+r)^n}$.',
    },
    {
      question: 'Hva er nåverdien av $11\\,000$ kr om 1 år ved $10\\%$ rente?',
      options: ['$10\\,000$ kr', '$11\\,000$ kr', '$9900$ kr', '$12\\,100$ kr'],
      explanation: '$NV = \\frac{11\\,000}{1{,}10} = 10\\,000$ kr.',
    },
    {
      question: 'Hva er fremtidsverdien av $2000$ kr om 3 år ved $5\\%$ rente?',
      options: ["$2315{,}25$ kr", "$2300$ kr", "$2100$ kr (kun ett år)", "$2100$ kr"],
      explanation: '$2000 \\cdot 1{,}05^3 = 2000 \\cdot 1{,}157625 = 2315{,}25$ kr.',
    },
    {
      question: 'Hvorfor er $1000$ kr i dag verdt mer enn $1000$ kr om ett år?',
      options: ["Fordi pengene kan settes i banken og gi rente", "Fordi inflasjon ikke finnes", "Fordi inflasjon aldri påvirker verdien på penger", "Fordi banken alltid tar et gebyr for oppbevaring"],
      explanation: 'Penger i dag kan investeres og vokse, så de har høyere verdi enn samme beløp senere.',
    },
    {
      question: 'Når renten øker, hva skjer med nåverdien av et fremtidig beløp?',
      options: ['Den synker', 'Den øker', 'Den er uendret', 'Den blir negativ'],
      explanation: 'Høyere rente gir større diskontering, så nåverdien blir lavere.',
    },
  ],

  'bi-okonomi-4-3': [
    {
      question: 'Hva er en annuitet?',
      options: ["En serie like store betalinger over flere perioder", "En enkelt engangsutbetaling på ett gitt tidspunkt", "En type aksje som gir årlig utbytte til eieren sin", "En fast rentesats som gjelder for hele låneperioden"],
      explanation: 'En annuitet er en rekke like store inn- eller utbetalinger med faste mellomrom.',
    },
    {
      question: 'Nåverdien av en etterskuddsannuitet med beløp $B$, rente $r$, $n$ terminer er:',
      options: ["$B \\cdot \\frac{1 - (1+r)^{-n}}{r}$", "$B \\cdot (1+r)^n$ (kun ett beløp)", "$B \\cdot \\frac{(1+r)^n - 1}{r}$ (sluttverdi)", "$B \\cdot \\frac{(1+r)^n - 1}{r}$"],
      explanation: 'Nåverdiformelen for en annuitet er $NV = B \\cdot \\frac{1 - (1+r)^{-n}}{r}$.',
    },
    {
      question: 'Sluttverdien av en annuitet med innskudd $B$ er gitt ved hvilken formel?',
      options: ['$B \\cdot \\frac{(1+r)^n - 1}{r}$', '$B \\cdot \\frac{1 - (1+r)^{-n}}{r}$', '$\\frac{B}{r}$', '$B \\cdot n$'],
      explanation: 'Sluttverdien av en annuitet er $SV = B \\cdot \\frac{(1+r)^n - 1}{r}$.',
    },
    {
      question: 'Man sparer $1000$ kr ved slutten av hvert år i 3 år til $0\\%$ rente. Hva er sluttverdien?',
      options: ['$3000$ kr', '$1000$ kr', '$3300$ kr', '$0$ kr'],
      explanation: 'Uten rente blir det rett og slett summen: $3 \\cdot 1000 = 3000$ kr.',
    },
    {
      question: 'En annuitet med beløp $B$ og uendelig mange terminer kalles en:',
      options: ["Perpetuitet", "Obligasjon", "Aksje (eierandel)", "Diskonto"],
      explanation: 'En evigvarende annuitet kalles en perpetuitet med nåverdi $\\frac{B}{r}$.',
    },
  ],

  'bi-okonomi-4-4': [
    {
      question: 'Ved et annuitetslån er hva likt i alle terminer?',
      options: ["Terminbeløpet", "Renteandelen", "Renteandelen (fast)", "Restgjelden"],
      explanation: 'I et annuitetslån er det totale terminbeløpet (avdrag + rente) likt hver termin.',
    },
    {
      question: 'Ved et serielån er hva likt i alle terminer?',
      options: ['Avdraget', 'Terminbeløpet', 'Renten i kroner', 'Ingenting'],
      explanation: 'I et serielån er avdraget fast, mens renten (og dermed terminbeløpet) synker over tid.',
    },
    {
      question: 'Et lån på $100\\,000$ kr med $5\\%$ rente: hvor mye er renten første år?',
      options: ['$5000$ kr', '$500$ kr', '$10\\,000$ kr', '$50\\,000$ kr'],
      explanation: 'Rente $= 0{,}05 \\cdot 100\\,000 = 5000$ kr første år.',
    },
    {
      question: 'Hva skjer med renteandelen av terminbeløpet utover i et annuitetslån?',
      options: ["Den synker, mens avdraget øker", "Den blir null umiddelbart", "Den øker, mens avdraget synker", "Den er konstant gjennom hele lånet"],
      explanation: 'Etter hvert som restgjelden synker, blir renten mindre og avdraget større.',
    },
    {
      question: 'Restgjelden etter en termin er:',
      options: ['Forrige restgjeld minus avdraget', 'Forrige restgjeld pluss renten', 'Terminbeløpet', 'Lånebeløpet delt på antall terminer'],
      explanation: 'Avdraget reduserer restgjelden: ny restgjeld $=$ gammel restgjeld $-$ avdrag.',
    },
  ],

  'bi-okonomi-4-5': [
    {
      question: 'Hva er nettonåverdi (NNV) for et investeringsprosjekt?',
      options: ["Nåverdien av innbetalingene minus investeringen", "Investeringen delt på levetiden", "Investeringsbeløpet fordelt jevnt utover prosjektets levetid", "Summen av alle innbetalingene uten å diskontere dem til nåtid"],
      explanation: 'NNV $=$ nåverdi av fremtidige kontantstrømmer $-$ investeringsbeløpet.',
    },
    {
      question: 'Et prosjekt bør gjennomføres når:',
      options: ['NNV $> 0$', 'NNV $< 0$', 'NNV $= 0$', 'Investeringen er størst mulig'],
      explanation: 'Positiv nettonåverdi betyr at prosjektet gir mer enn avkastningskravet og er lønnsomt.',
    },
    {
      question: 'Hva er internrenten (IRR) til et prosjekt?',
      options: ['Renten som gir NNV $= 0$', 'Bankens rente', 'Investeringsbeløpet', 'Den høyeste innbetalingen'],
      explanation: 'Internrenten er diskonteringsrenten som gjør nettonåverdien lik null.',
    },
    {
      question: 'Et prosjekt koster $1000$ kr og gir $1100$ kr om ett år. Ved $5\\%$ avkastningskrav, er NNV positiv?',
      options: ["Ja, NNV $\\approx 47{,}6$ kr", "Nei, NNV er negativ", "NNV er nøyaktig lik $0$ ved balanse", "NNV er nøyaktig $0$"],
      explanation: 'NNV $= \\frac{1100}{1{,}05} - 1000 = 1047{,}6 - 1000 = 47{,}6$ kr $> 0$.',
    },
    {
      question: 'Tilbakebetalingstiden (payback) måler:',
      options: ["Hvor lang tid det tar før investeringen er tjent inn", "Skatten på prosjektet", "Skattebelastningen som påløper på prosjektets overskudd", "Den totale fortjenesten prosjektet gir over hele levetiden"],
      explanation: 'Tilbakebetalingstiden er tiden til de akkumulerte innbetalingene dekker investeringen.',
    },
  ],

  'bi-okonomi-4-6': [
    {
      question: 'Formelen for kontinuerlig forrentning er:',
      options: ['$K = K_0 \\cdot e^{rt}$', '$K = K_0 \\cdot (1+r)^t$', '$K = K_0 \\cdot r \\cdot t$', '$K = K_0 \\cdot e^{-rt}$'],
      explanation: 'Ved kontinuerlig forrentning vokser kapitalen som $K = K_0 e^{rt}$.',
    },
    {
      question: '$1000$ kr forrentes kontinuerlig med $r = 0{,}05$ i 2 år. Hvilket uttrykk gir beløpet?',
      options: ['$1000 \\cdot e^{0{,}10}$', '$1000 \\cdot e^{0{,}05}$', '$1000 \\cdot 0{,}10$', '$1000 \\cdot e^{2}$'],
      explanation: '$K = 1000 \\cdot e^{0{,}05 \\cdot 2} = 1000 \\cdot e^{0{,}10} \\approx 1105$ kr.',
    },
    {
      question: 'Hva er tallet $e$ tilnærmet?',
      options: ['$2{,}718$', '$3{,}141$', '$1{,}618$', '$2{,}303$'],
      explanation: 'Eulers tall $e \\approx 2{,}71828$.',
    },
    {
      question: 'Kontinuerlig forrentning gir, sammenlignet med årlig rentes rente med samme rentesats:',
      options: ['Litt høyere sluttverdi', 'Lavere sluttverdi', 'Nøyaktig samme sluttverdi', 'Alltid dobbelt så mye'],
      explanation: 'Hyppigere rentesammensetning gir noe høyere vekst; kontinuerlig er grensen og gir mest.',
    },
    {
      question: 'For å finne tiden $t$ ved kontinuerlig forrentning bruker vi:',
      options: ['Naturlig logaritme', 'Kvadratrot', 'Andregradsformelen', 'Prosentregning'],
      explanation: 'Siden $e$ er grunntallet, løser vi for $t$ med naturlig logaritme ($\\ln$).',
    },
  ],

  'bi-okonomi-5-1': [
    {
      question: 'Gjennomsnittlig vekstfart for $f$ på $[a, b]$ er:',
      options: ["$\\frac{f(b) - f(a)}{b - a}$", "$\\frac{f(a)}{f(b)}$", "$f(b) - f(a)$ uten å dele på intervallengden", "$f(b) - f(a)$"],
      explanation: 'Gjennomsnittlig vekstfart er endring i $y$ delt på endring i $x$: $\\frac{f(b)-f(a)}{b-a}$.',
    },
    {
      question: 'Momentan vekstfart i et punkt er det samme som:',
      options: ['Den deriverte i punktet', 'Funksjonsverdien', 'Gjennomsnittlig vekstfart', 'Nullpunktet'],
      explanation: 'Momentan vekstfart er stigningen til tangenten, altså $f\'(x)$ i punktet.',
    },
    {
      question: 'For $f(x) = x^2$, hva er gjennomsnittlig vekstfart på $[1, 3]$?',
      options: ['$4$', '$2$', '$8$', '$3$'],
      explanation: '$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$.',
    },
    {
      question: 'Den deriverte tolkes geometrisk som:',
      options: ["Stigningstallet til tangenten", "Avstanden til x-aksen", "Den korteste avstanden fra grafen ned til x-aksen", "Arealet under grafen"],
      explanation: '$f\'(x)$ er stigningstallet til tangenten i punktet $(x, f(x))$.',
    },
    {
      question: 'Definisjonen av den deriverte er grensen av:',
      options: ["$\\frac{f(x+h) - f(x)}{h}$ når $h \\to 0$", "$\\frac{f(x) - f(0)}{x}$", "$f(x) \\cdot h$ når $h$ vokser mot uendelig", "$\\frac{f(x)}{h}$ når $h$ nærmer seg tallet $1$"],
      explanation: 'Den deriverte defineres som $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.',
    },
  ],

  'bi-okonomi-5-2': [
    {
      question: 'Hva er den deriverte av $f(x) = x^3$?',
      options: ['$3x^2$', '$x^2$', '$3x$', '$\\frac{x^4}{4}$'],
      explanation: 'Potensregelen: $(x^n)\' = n x^{n-1}$, så $(x^3)\' = 3x^2$.',
    },
    {
      question: 'Hva er den deriverte av $f(x) = 5x^2 + 2x$?',
      options: ["$10x + 2$", "$5x + 2$", "$10x$, uten leddet fra $2x$", "$10x$"],
      explanation: 'Ledd for ledd: $(5x^2)\' = 10x$ og $(2x)\' = 2$, så $f\'(x) = 10x + 2$.',
    },
    {
      question: 'Hva er den deriverte av en konstant, $f(x) = 7$?',
      options: ['$0$', '$7$', '$1$', '$7x$'],
      explanation: 'Den deriverte av en konstant er alltid $0$.',
    },
    {
      question: 'Produktregelen sier at $(u \\cdot v)\'$ er:',
      options: ['$u\'v + uv\'$', '$u\'v\'$', '$u\'v - uv\'$', '$\\frac{u\'}{v\'}$'],
      explanation: 'Produktregelen: $(uv)\' = u\'v + uv\'$.',
    },
    {
      question: 'Hva er den deriverte av $f(x) = 4x - 9$?',
      options: ['$4$', '$4x$', '$-9$', '$0$'],
      explanation: '$(4x)\' = 4$ og $(-9)\' = 0$, så $f\'(x) = 4$.',
    },
  ],

  'bi-okonomi-5-3': [
    {
      question: 'Hva er den deriverte av $f(x) = e^x$?',
      options: ['$e^x$', '$x e^{x-1}$', '$\\frac{e^x}{x}$', '$1$'],
      explanation: 'Eksponentialfunksjonen $e^x$ er sin egen deriverte.',
    },
    {
      question: 'Hva er den deriverte av $f(x) = \\ln x$?',
      options: ['$\\frac{1}{x}$', '$\\ln x$', '$x$', '$\\frac{1}{x^2}$'],
      explanation: 'Den deriverte av den naturlige logaritmen er $\\frac{1}{x}$.',
    },
    {
      question: 'Kjerneregelen brukes til å derivere:',
      options: ["Sammensatte funksjoner", "Summer av ledd", "Rene summer av flere enkeltledd", "Rette linjer på formen $ax + b$"],
      explanation: 'Kjerneregelen $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$ brukes på sammensatte funksjoner.',
    },
    {
      question: 'Hva er den deriverte av $f(x) = e^{2x}$?',
      options: ["$2e^{2x}$", "$e^{2x}$", "$2e^{x}$, med feil eksponent", "$e^{2}$"],
      explanation: 'Kjerneregelen: ytre derivert $e^{2x}$ ganget med indre derivert $2$ gir $2e^{2x}$.',
    },
    {
      question: 'Hva er den deriverte av $f(x) = \\ln(3x)$?',
      options: ['$\\frac{1}{x}$', '$\\frac{3}{x}$', '$\\frac{1}{3x}$', '$3 \\ln x$'],
      explanation: 'Kjerneregelen: $\\frac{1}{3x} \\cdot 3 = \\frac{3}{3x} = \\frac{1}{x}$.',
    },
  ],

  'bi-okonomi-5-4': [
    {
      question: 'En funksjon vokser der den deriverte er:',
      options: ['Positiv', 'Negativ', 'Lik null', 'Udefinert'],
      explanation: 'Funksjonen er voksende der $f\'(x) > 0$.',
    },
    {
      question: 'I et toppunkt er den deriverte:',
      options: ['Lik null', 'Positiv', 'Negativ', 'Uendelig'],
      explanation: 'I et topp- eller bunnpunkt (lokalt ekstremalpunkt) er $f\'(x) = 0$.',
    },
    {
      question: 'Finn $x$-verdien der $f(x) = x^2 - 4x + 1$ har bunnpunkt.',
      options: ['$x = 2$', '$x = 4$', '$x = -2$', '$x = 1$'],
      explanation: '$f\'(x) = 2x - 4 = 0 \\Rightarrow x = 2$.',
    },
    {
      question: 'Hvordan avgjør man om et stasjonært punkt er topp- eller bunnpunkt?',
      options: ["Med fortegnsskifte til $f'$ eller med $f''$", "Ved å regne ut $f(0)$", "Ved alltid å sette inn $x = 0$ i funksjonen", "Ved å regne ut funksjonsverdien $f(0)$ i origo"],
      explanation: 'Man bruker fortegnslinje for $f\'$, eller andrederiverttesten ($f\'\' > 0$ gir bunnpunkt).',
    },
    {
      question: 'Hvor er $f(x) = -x^2 + 6x$ avtagende?',
      options: ['For $x > 3$', 'For $x < 3$', 'Overalt', 'Aldri'],
      explanation: '$f\'(x) = -2x + 6 < 0 \\Rightarrow x > 3$, så funksjonen avtar for $x > 3$.',
    },
  ],

  'bi-okonomi-5-5': [
    {
      question: 'Optimering handler om å finne:',
      options: ["Største eller minste verdi av en funksjon", "Stigningstallet", "Stigningstallet til grafen i et enkelt punkt", "De horisontale og vertikale asymptotene til grafen"],
      explanation: 'Optimering søker maksimum (f.eks. størst overskudd) eller minimum (f.eks. lavest kostnad).',
    },
    {
      question: 'Et overskudd $O(x) = -2x^2 + 40x$ er størst ved hvilken $x$?',
      options: ['$x = 10$', '$x = 20$', '$x = 40$', '$x = 5$'],
      explanation: '$O\'(x) = -4x + 40 = 0 \\Rightarrow x = 10$.',
    },
    {
      question: 'Hva er det maksimale overskuddet for $O(x) = -2x^2 + 40x$?',
      options: ['$200$', '$400$', '$100$', '$40$'],
      explanation: 'Ved $x = 10$: $O(10) = -2 \\cdot 100 + 400 = -200 + 400 = 200$.',
    },
    {
      question: 'Ved en grenseoptimal produksjon gjelder ofte at:',
      options: ["Grenseinntekt $=$ grensekostnad", "Inntekt $=$ kostnad", "Samlet inntekt $=$ samlet kostnad", "Salgsprisen per enhet $=$ null i markedet"],
      explanation: 'Overskuddet er størst der grenseinntekt og grensekostnad er like ($R\' = C\'$).',
    },
    {
      question: 'Når man optimerer med en bibetingelse, kan man bruke:',
      options: ["Innsetting eller Lagranges metode", "Andregradsformelen alene", "Kun andregradsformelen anvendt alene", "Logaritmer på begge sider av likningen"],
      explanation: 'Bibetingelser løses ved innsetting i målfunksjonen eller med Lagranges multiplikatormetode.',
    },
  ],

  'bi-okonomi-5-6': [
    {
      question: 'Implisitt derivasjon brukes når:',
      options: ["$y$ ikke er løst eksplisitt som funksjon av $x$", "Det ikke finnes noen $y$", "Funksjonen er en rett linje av første grad i $x$", "Det ikke finnes noen $y$-variabel i selve likningen"],
      explanation: 'Implisitt derivasjon brukes når $x$ og $y$ er knyttet i en likning uten at $y$ er isolert.',
    },
    {
      question: 'Når vi deriverer $y^2$ implisitt med hensyn på $x$, får vi:',
      options: ["$2y \\cdot y'$", "$2y$", "$2y$, uten faktoren $y'$", "$y'$"],
      explanation: 'Kjerneregelen gir $\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx} = 2y y\'$.',
    },
    {
      question: 'Deriver $x^2 + y^2 = 25$ implisitt og finn $y\'$.',
      options: ['$y\' = -\\frac{x}{y}$', '$y\' = \\frac{x}{y}$', '$y\' = -\\frac{y}{x}$', '$y\' = x y$'],
      explanation: '$2x + 2y y\' = 0 \\Rightarrow y\' = -\\frac{x}{y}$.',
    },
    {
      question: 'Hvilken regel er sentral i implisitt derivasjon av ledd med $y$?',
      options: ['Kjerneregelen', 'Konjugatsetningen', 'Prosentregning', 'Pythagoras'],
      explanation: 'Siden $y$ er en funksjon av $x$, må vi bruke kjerneregelen på ledd med $y$.',
    },
    {
      question: 'Implisitt derivasjon er nyttig i økonomi for å finne:',
      options: ["Hvordan to størrelser endrer seg i forhold til hverandre langs en kurve", "Nullpunktene der en enkelt funksjon alene skjærer x-aksen på grafen", "Gjennomsnittsverdien til én enkelt variabel målt over et gitt intervall", "Standardavviket som brukes som spredningsmål i en samling observasjoner"],
      explanation: 'Den brukes f.eks. på indifferens- eller isokvantkurver for å finne bytteforhold (MRS).',
    },
  ],

  'bi-okonomi-5-7': [
    {
      question: 'L\'Hôpitals regel brukes ved grenseverdier av formen:',
      options: ["$\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$", "$\\frac{1}{2}$", "$0 + 0$, som gir en klart definert sum lik null", "$\\frac{1}{2}$, altså en helt bestemt endelig brøk"],
      explanation: 'L\'Hôpitals regel gjelder ubestemte uttrykk som $\\frac{0}{0}$ og $\\frac{\\infty}{\\infty}$.',
    },
    {
      question: 'Etter L\'Hôpitals regel erstatter vi teller og nevner med:',
      options: ['Sine deriverte', 'Sine kvadrater', 'Sine inverse', 'Sine logaritmer'],
      explanation: 'Vi deriverer teller og nevner hver for seg og tar grensen på nytt.',
    },
    {
      question: 'Hva er $\\lim_{x \\to 0} \\frac{\\sin x}{x}$?',
      options: ['$1$', '$0$', '$\\infty$', 'Udefinert'],
      explanation: 'Dette er en kjent grense lik $1$ (kan også sees med L\'Hôpital: $\\frac{\\cos x}{1} \\to 1$).',
    },
    {
      question: 'Hva er $\\lim_{x \\to \\infty} \\frac{2x + 1}{x}$?',
      options: ['$2$', '$0$', '$1$', '$\\infty$'],
      explanation: 'Deler vi på $x$: $\\frac{2 + 1/x}{1} \\to 2$ når $x \\to \\infty$.',
    },
    {
      question: 'Før man bruker L\'Hôpitals regel må man sjekke at uttrykket:',
      options: ["Faktisk er en ubestemt form", "Har et nullpunkt", "At uttrykket faktisk er et polynom", "At uttrykket har minst ett nullpunkt"],
      explanation: 'Regelen gjelder kun ubestemte former; ellers gir den feil svar.',
    },
  ],

  'bi-okonomi-5-8': [
    {
      question: 'En funksjon er konveks (hul opp) der:',
      options: ['$f\'\'(x) > 0$', '$f\'\'(x) < 0$', '$f\'(x) = 0$', '$f(x) > 0$'],
      explanation: 'Positiv andrederivert betyr at grafen krummer oppover, altså konveks.',
    },
    {
      question: 'En funksjon er konkav (hul ned) der:',
      options: ['$f\'\'(x) < 0$', '$f\'\'(x) > 0$', '$f\'(x) > 0$', '$f(x) < 0$'],
      explanation: 'Negativ andrederivert betyr at grafen krummer nedover, altså konkav.',
    },
    {
      question: 'Et vendepunkt er der:',
      options: ["Krumningen skifter fortegn", "Grafen skjærer x-aksen", "Stigningen $f'$ er lik null der", "Funksjonsverdien $f$ er lik null"],
      explanation: 'I et vendepunkt går grafen fra konveks til konkav eller omvendt, ofte der $f\'\' = 0$.',
    },
    {
      question: 'Andrederiverttesten: hvis $f\'(a) = 0$ og $f\'\'(a) > 0$, så er $a$ et:',
      options: ['Bunnpunkt', 'Toppunkt', 'Vendepunkt', 'Nullpunkt'],
      explanation: 'Stasjonært punkt med positiv andrederivert (konveks) er et lokalt minimum (bunnpunkt).',
    },
    {
      question: 'For $f(x) = x^3$, hvor er vendepunktet?',
      options: ['$x = 0$', '$x = 1$', '$x = -1$', 'Det finnes ikke'],
      explanation: '$f\'\'(x) = 6x = 0 \\Rightarrow x = 0$, og krumningen skifter der.',
    },
  ],

  'bi-okonomi-6-1': [
    {
      question: 'Hva er faste kostnader?',
      options: ["Kostnader som ikke endrer seg med produsert mengde", "Kostnader som øker med salget", "Kostnadene som stiger i takt med økende salgsvolum", "Kostnadene knyttet til reklame og markedsføringstiltak"],
      explanation: 'Faste kostnader er uavhengige av produksjonsmengden (f.eks. husleie).',
    },
    {
      question: 'En kostnadsfunksjon $C(x) = 5000 + 20x$. Hva er de faste kostnadene?',
      options: ['$5000$', '$20$', '$5020$', '$20x$'],
      explanation: 'Konstantleddet $5000$ er de faste kostnadene; $20x$ er de variable.',
    },
    {
      question: 'I $C(x) = 5000 + 20x$, hva er de variable kostnadene per enhet?',
      options: ['$20$', '$5000$', '$5020$', '$100$'],
      explanation: 'Koeffisienten foran $x$ er den variable enhetskostnaden, altså $20$.',
    },
    {
      question: 'Gjennomsnittskostnaden $\\bar{C}(x)$ er definert som:',
      options: ["$\\frac{C(x)}{x}$", "$C(x) \\cdot x$", "$C(x) - x$, kostnad minus antall enheter", "$C(x) - x$"],
      explanation: 'Gjennomsnittskostnad (enhetskostnad) er total kostnad delt på antall: $\\frac{C(x)}{x}$.',
    },
    {
      question: 'For $C(x) = 5000 + 20x$, hva er totale kostnader ved $x = 100$?',
      options: ['$7000$', '$5020$', '$2000$', '$5100$'],
      explanation: '$C(100) = 5000 + 20 \\cdot 100 = 5000 + 2000 = 7000$.',
    },
  ],

  'bi-okonomi-6-2': [
    {
      question: 'Inntektsfunksjonen ved pris $p$ og solgt mengde $x$ er:',
      options: ['$R(x) = p \\cdot x$', '$R(x) = p + x$', '$R(x) = \\frac{p}{x}$', '$R(x) = p - x$'],
      explanation: 'Inntekt $=$ pris $\\times$ mengde, altså $R(x) = p \\cdot x$.',
    },
    {
      question: 'Overskuddsfunksjonen er definert som:',
      options: ['$O(x) = R(x) - C(x)$', '$O(x) = R(x) + C(x)$', '$O(x) = \\frac{R(x)}{C(x)}$', '$O(x) = C(x) - R(x)$'],
      explanation: 'Overskudd (fortjeneste) er inntekt minus kostnad.',
    },
    {
      question: 'Med $R(x) = 50x$ og $C(x) = 1000 + 30x$, hva er overskuddsfunksjonen?',
      options: ['$O(x) = 20x - 1000$', '$O(x) = 80x - 1000$', '$O(x) = 20x + 1000$', '$O(x) = 50x - 1000$'],
      explanation: '$O(x) = 50x - (1000 + 30x) = 20x - 1000$.',
    },
    {
      question: 'Når er bedriften i nullpunkt (break-even) med $O(x) = 20x - 1000$?',
      options: ['$x = 50$', '$x = 20$', '$x = 1000$', '$x = 100$'],
      explanation: '$20x - 1000 = 0 \\Rightarrow x = 50$.',
    },
    {
      question: 'Hva betyr det at overskuddet er negativt?',
      options: ["Bedriften går med tap", "Bedriften tjener mye", "Bedriften tjener uvanlig mye penger", "Kostnadene er null"],
      explanation: 'Negativt overskudd betyr at kostnadene overstiger inntekten – altså tap.',
    },
  ],

  'bi-okonomi-6-3': [
    {
      question: 'Grensekostnaden er:',
      options: ["Den deriverte av kostnadsfunksjonen, $C'(x)$", "Total kostnad delt på antall", "Inntekten bedriften får inn per solgte enhet", "Den totale kostnaden fordelt på antall enheter"],
      explanation: 'Grensekostnad er kostnaden ved å produsere én enhet til, altså $C\'(x)$.',
    },
    {
      question: 'Grenseinntekten er:',
      options: ["Den deriverte av inntektsfunksjonen, $R'(x)$", "Prisen ganget med kostnaden", "Den samlede totale inntekten fra hele salget", "Salgsprisen multiplisert med enhetskostnaden"],
      explanation: 'Grenseinntekt er inntekten ved å selge én enhet til, altså $R\'(x)$.',
    },
    {
      question: 'For $C(x) = 1000 + 5x^2$, hva er grensekostnaden $C\'(x)$?',
      options: ['$10x$', '$5x$', '$1000 + 10x$', '$5x^2$'],
      explanation: '$C\'(x) = \\frac{d}{dx}(1000 + 5x^2) = 10x$.',
    },
    {
      question: 'Overskuddet er størst der:',
      options: ["$R'(x) = C'(x)$", "$R(x) = C(x)$", "$R(x) = C(x)$, inntekt lik kostnad", "$C'(x) = 0$"],
      explanation: 'Maksimalt overskudd er der grenseinntekt er lik grensekostnad.',
    },
    {
      question: 'Hva forteller grensekostnaden økonomisk?',
      options: ["Tilnærmet kostnad ved å produsere én ekstra enhet", "Den totale fortjenesten summert over hele salget", "Den gjennomsnittlige kostnaden per produserte enhet", "Salgsprisen kunden betaler for hver enkelt vare"],
      explanation: 'Grensekostnaden anslår hvor mye kostnaden øker når produksjonen øker med én enhet.',
    },
  ],

  'bi-okonomi-6-4': [
    {
      question: 'En etterspørselsfunksjon viser sammenhengen mellom:',
      options: ['Pris og etterspurt mengde', 'Kostnad og inntekt', 'Tid og rente', 'Faste og variable kostnader'],
      explanation: 'Etterspørselsfunksjonen angir hvor mye som etterspørres ved en gitt pris.',
    },
    {
      question: 'Vanligvis, når prisen øker, gjør etterspørselen som regel:',
      options: ['Synker', 'Øker', 'Er konstant', 'Blir null'],
      explanation: 'Etterspørselsloven: høyere pris gir normalt lavere etterspurt mengde.',
    },
    {
      question: 'Priselastisiteten måler:',
      options: ["Prosentvis endring i mengde delt på prosentvis endring i pris", "Den samlede totale inntekten ved gitt pris og mengde", "De faste kostnadene som ikke varierer med produksjon", "Grensekostnaden ved å produsere én ekstra enhet vare"],
      explanation: 'Priselastisitet $= \\frac{\\%\\text{ endring i mengde}}{\\%\\text{ endring i pris}}$.',
    },
    {
      question: 'Etterspørselen kalles elastisk når tallverdien av elastisiteten er:',
      options: ['Større enn 1', 'Lik 0', 'Mellom 0 og 1', 'Negativ uansett størrelse'],
      explanation: 'Når $|E| > 1$ er etterspørselen elastisk (mengden reagerer sterkt på prisendring).',
    },
    {
      question: 'Hvis prisen øker $10\\%$ og mengden faller $5\\%$, hva er tallverdien av elastisiteten?',
      options: ["$0{,}5$", "$50$", "$15$, summen av de to prosentene", "$2$"],
      explanation: '$\\frac{-5\\%}{10\\%} = -0{,}5$, tallverdi $0{,}5$ – altså uelastisk etterspørsel.',
    },
  ],

  'bi-okonomi-6-5': [
    {
      question: 'Markedslikevekt oppstår der:',
      options: ["Tilbud er lik etterspørsel", "Etterspørselen er null", "Produsentenes samlede kostnad er lik null", "Kostnaden er null"],
      explanation: 'Likevekt er der etterspurt mengde er lik tilbudt mengde.',
    },
    {
      question: 'Etterspørsel $D(p) = 100 - 2p$ og tilbud $S(p) = 20 + 2p$. Finn likevektsprisen.',
      options: ['$p = 20$', '$p = 40$', '$p = 10$', '$p = 60$'],
      explanation: '$100 - 2p = 20 + 2p \\Rightarrow 80 = 4p \\Rightarrow p = 20$.',
    },
    {
      question: 'Hva er likevektsmengden for $D(p) = 100 - 2p$ ved $p = 20$?',
      options: ['$60$', '$40$', '$100$', '$20$'],
      explanation: '$D(20) = 100 - 40 = 60$ (samme som tilbudet $20 + 40 = 60$).',
    },
    {
      question: 'Hva skjer hvis prisen er over likevektsprisen?',
      options: ["Det blir overskudd av varer (tilbud > etterspørsel)", "Etterspørselen øker fordi varen fremstår attraktiv", "Det oppstår mangel på varer (etterspørsel > tilbud)", "Markedet forblir i perfekt balanse uten press"],
      explanation: 'Over likevekt tilbys mer enn det etterspørres, så det oppstår overskuddstilbud.',
    },
    {
      question: 'Konsumentoverskuddet er:',
      options: ["Forskjellen mellom det kunder er villige til å betale og det de faktisk betaler", "Summen av de totale variable og faste kostnadene ved å produsere hele mengden", "Bedriftens samlede fortjeneste etter at alle kostnadene er trukket fra salgsinntekten", "Markedsprisen på varen ganget med antall enheter som faktisk blir solgt"],
      explanation: 'Konsumentoverskudd er gevinsten kundene får ved å betale mindre enn maksimal betalingsvilje.',
    },
  ],

  'bi-okonomi-7-1': [
    {
      question: 'En funksjon av to variabler skrives:',
      options: ['$f(x, y)$', '$f(x)$', '$f(x)(y)$', '$f + x + y$'],
      explanation: 'En funksjon av to variabler tar to inn-verdier: $z = f(x, y)$.',
    },
    {
      question: 'For $f(x, y) = x^2 + 3y$, hva er $f(2, 1)$?',
      options: ['$7$', '$5$', '$10$', '$4$'],
      explanation: '$f(2, 1) = 2^2 + 3 \\cdot 1 = 4 + 3 = 7$.',
    },
    {
      question: 'En produktfunksjon $Q(K, L)$ avhenger ofte av:',
      options: ['Kapital og arbeid', 'Pris og kostnad', 'Rente og tid', 'Tilbud og etterspørsel'],
      explanation: 'I produksjonsteori avhenger produsert mengde $Q$ av innsatsfaktorene kapital $K$ og arbeid $L$.',
    },
    {
      question: 'Grafen til en funksjon av to variabler er vanligvis:',
      options: ["En flate i rommet", "En rett linje", "En rett linje i planet", "Et enkelt isolert punkt"],
      explanation: '$z = f(x, y)$ gir en todimensjonal flate i tredimensjonalt rom.',
    },
    {
      question: 'En nivåkurve viser punkter der:',
      options: ["Funksjonen har samme verdi", "Begge variablene er like", "Funksjonen er lik null overalt", "Den deriverte er null"],
      explanation: 'En nivåkurve forbinder punkter $(x, y)$ med samme funksjonsverdi $f(x, y) = c$.',
    },
  ],

  'bi-okonomi-7-2': [
    {
      question: 'Den partielle deriverte $\\frac{\\partial f}{\\partial x}$ deriverer med hensyn på $x$ og behandler $y$ som:',
      options: ['En konstant', 'En variabel', 'Null', 'Lik $x$'],
      explanation: 'Ved partiell derivasjon m.h.p. $x$ holdes $y$ konstant.',
    },
    {
      question: 'For $f(x, y) = x^2 y$, hva er $\\frac{\\partial f}{\\partial x}$?',
      options: ['$2xy$', '$x^2$', '$2x$', '$x^2 y$'],
      explanation: 'Behandler $y$ som konstant: $\\frac{\\partial}{\\partial x}(x^2 y) = 2xy$.',
    },
    {
      question: 'For $f(x, y) = x^2 y$, hva er $\\frac{\\partial f}{\\partial y}$?',
      options: ['$x^2$', '$2xy$', '$2x$', '$y$'],
      explanation: 'Behandler $x$ som konstant: $\\frac{\\partial}{\\partial y}(x^2 y) = x^2$.',
    },
    {
      question: 'I økonomi kalles $\\frac{\\partial Q}{\\partial L}$ ofte:',
      options: ["Grenseproduktiviteten til arbeid", "Den totale inntekten ved salg", "Gjennomsnittskostnaden per enhet", "Priselastisiteten i etterspørsel"],
      explanation: 'Den partielle deriverte av produksjonen m.h.p. arbeid er grenseproduktiviteten til arbeid.',
    },
    {
      question: 'For $f(x, y) = 3x + 4y$, hva er $\\frac{\\partial f}{\\partial x}$?',
      options: ['$3$', '$4$', '$7$', '$3x$'],
      explanation: 'Den partielle deriverte m.h.p. $x$ er koeffisienten $3$ (leddet $4y$ er konstant).',
    },
  ],

  'bi-okonomi-7-3': [
    {
      question: 'Et stasjonært punkt for $f(x, y)$ er der:',
      options: ['Begge partielle deriverte er null', 'Funksjonen er null', 'Bare $\\frac{\\partial f}{\\partial x} = 0$', '$x = y$'],
      explanation: 'Et stasjonært punkt krever $\\frac{\\partial f}{\\partial x} = 0$ OG $\\frac{\\partial f}{\\partial y} = 0$.',
    },
    {
      question: 'Andrederiverttesten for to variabler bruker:',
      options: ["Hesse-determinanten (diskriminanten)", "Konjugatsetningen for kvadrater", "Kun fortegnet til den førstederiverte", "Det bestemte integralet av $f$"],
      explanation: 'Man undersøker fortegnet til diskriminanten $D = f_{xx} f_{yy} - (f_{xy})^2$.',
    },
    {
      question: 'Hvis $D > 0$ og $f_{xx} > 0$ i et stasjonært punkt, er det et:',
      options: ['Lokalt minimum', 'Lokalt maksimum', 'Sadelpunkt', 'Vendepunkt'],
      explanation: '$D > 0$ med $f_{xx} > 0$ gir et lokalt minimum.',
    },
    {
      question: 'Hvis $D < 0$ i et stasjonært punkt, er det et:',
      options: ["Sadelpunkt", "Nullpunkt", "Maksimum", "Minimum"],
      explanation: 'Negativ diskriminant betyr at punktet er et sadelpunkt (verken topp eller bunn).',
    },
    {
      question: 'Hvis $D > 0$ og $f_{xx} < 0$, er punktet et:',
      options: ["Lokalt maksimum", "Lokalt minimum", "Sadelpunkt", "Vendepunkt"],
      explanation: '$D > 0$ med $f_{xx} < 0$ (konkav) gir et lokalt maksimum.',
    },
  ],

  'bi-okonomi-7-4': [
    {
      question: 'Lagranges multiplikatormetode brukes til:',
      options: ["Optimering med en bibetingelse", "Derivasjon av polynomer", "Løse lineære likninger", "Beregne enkel rente"],
      explanation: 'Metoden finner ekstremalverdier av $f(x, y)$ under en bibetingelse $g(x, y) = c$.',
    },
    {
      question: 'I Lagranges metode setter vi opp funksjonen:',
      options: ["$L = f - \\lambda(g - c)$", "$L = f \\cdot (g - c)$", "$L = \\frac{f}{g - c}$", "$L = f + \\lambda g$"],
      explanation: 'Lagrangefunksjonen er $L(x, y, \\lambda) = f(x, y) - \\lambda(g(x, y) - c)$.',
    },
    {
      question: 'Symbolet $\\lambda$ i metoden kalles:',
      options: ["Lagrangemultiplikatoren", "Diskriminanten", "Determinanten", "Vekstfaktoren"],
      explanation: '$\\lambda$ er Lagrangemultiplikatoren, som også har en økonomisk skyggepristolkning.',
    },
    {
      question: 'I optimum er gradienten til $f$ og gradienten til $g$:',
      options: ['Parallelle', 'Vinkelrette', 'Null', 'Like store'],
      explanation: 'I betinget optimum gjelder $\\nabla f = \\lambda \\nabla g$, altså gradientene er parallelle.',
    },
    {
      question: 'En typisk økonomisk bruk av Lagrange er:',
      options: ["Maksimere nytte under en budsjettbetingelse", "Beregne enkel rente over en periode", "Faktorisere andregradspolynomer", "Tegne grafen til en rett linje"],
      explanation: 'Klassisk eksempel: maksimere nytte gitt at forbruket må holde seg innenfor budsjettet.',
    },
  ],

  'bi-okonomi-7-5': [
    {
      question: 'En Cobb-Douglas-funksjon har formen:',
      options: ["$Q = A K^{\\alpha} L^{\\beta}$", "$Q = \\frac{K^{\\alpha}}{L}$", "$Q = A(K + L)^{\\alpha}$", "$Q = A K + \\alpha L$"],
      explanation: 'Cobb-Douglas: $Q = A K^{\\alpha} L^{\\beta}$ med kapital $K$ og arbeid $L$.',
    },
    {
      question: 'Hvis $\\alpha + \\beta = 1$ i en Cobb-Douglas-funksjon, har den:',
      options: ['Konstant skalautbytte', 'Avtagende skalautbytte', 'Økende skalautbytte', 'Null produksjon'],
      explanation: 'Summen av eksponentene lik $1$ gir konstant skalautbytte (dobler innsats → dobler produksjon).',
    },
    {
      question: 'Eksponentene $\\alpha$ og $\\beta$ i Cobb-Douglas tolkes som:',
      options: ["Elastisiteter for henholdsvis kapital og arbeid", "De totale produksjonskostnadene", "De faste kostnadene i drift", "Renten på investert kapital"],
      explanation: 'De er produksjonselastisitetene med hensyn på de respektive innsatsfaktorene.',
    },
    {
      question: 'For $Q = 10 K^{0{,}5} L^{0{,}5}$, hva er $Q$ når $K = 4$ og $L = 9$?',
      options: ['$60$', '$30$', '$120$', '$45$'],
      explanation: '$Q = 10 \\cdot \\sqrt{4} \\cdot \\sqrt{9} = 10 \\cdot 2 \\cdot 3 = 60$.',
    },
    {
      question: 'Hvis $\\alpha + \\beta > 1$, har funksjonen:',
      options: ['Økende skalautbytte', 'Konstant skalautbytte', 'Avtagende skalautbytte', 'Ingen produksjon'],
      explanation: 'Sum av eksponenter over $1$ gir økende skalautbytte.',
    },
  ],

  'bi-okonomi-8-1': [
    {
      question: 'Den antideriverte til $f(x) = 2x$ er:',
      options: ["$x^2 + C$", "$2 + C$", "$2x^2 + C$", "$2x^2$"],
      explanation: 'Vi reverserer derivasjon: $\\int 2x \\, dx = x^2 + C$ (med en konstant $C$).',
    },
    {
      question: 'Hva er $\\int x^2 \\, dx$?',
      options: ['$\\frac{x^3}{3} + C$', '$2x + C$', '$x^3 + C$', '$\\frac{x^3}{2} + C$'],
      explanation: 'Potensregelen for integral: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$, så $\\frac{x^3}{3} + C$.',
    },
    {
      question: 'Hvorfor legger vi til $+ C$ i et ubestemt integral?',
      options: ["Fordi konstanter forsvinner ved derivasjon", "For å sikre at resultatet blir positivt", "Fordi konstanten $C$ alltid er lik null", "Fordi svaret da alltid ser penere ut"],
      explanation: 'Mange funksjoner som skiller seg med en konstant har samme deriverte, derfor integrasjonskonstanten.',
    },
    {
      question: 'Hva er $\\int e^x \\, dx$?',
      options: ['$e^x + C$', '$x e^x + C$', '$\\frac{e^x}{x} + C$', '$\\ln x + C$'],
      explanation: 'Siden $(e^x)\' = e^x$, er $\\int e^x dx = e^x + C$.',
    },
    {
      question: 'Hva er $\\int \\frac{1}{x} \\, dx$?',
      options: ['$\\ln |x| + C$', '$-\\frac{1}{x^2} + C$', '$\\frac{1}{x^2} + C$', '$x + C$'],
      explanation: 'Den antideriverte til $\\frac{1}{x}$ er $\\ln|x| + C$.',
    },
  ],

  'bi-okonomi-8-2': [
    {
      question: 'Fundamentalteoremet sier at $\\int_a^b f(x) \\, dx$ er lik:',
      options: ['$F(b) - F(a)$', '$F(a) - F(b)$', '$f(b) - f(a)$', '$F(b) + F(a)$'],
      explanation: 'Med $F$ en antiderivert: $\\int_a^b f(x) dx = F(b) - F(a)$.',
    },
    {
      question: 'Et bestemt integral $\\int_a^b f(x)\\,dx$ med $f(x) \\geq 0$ tolkes som:',
      options: ["Arealet under grafen mellom $a$ og $b$", "Funksjonsverdien $f(b)$ i endepunktet", "Den deriverte av $f$ i intervallet", "Stigningstallet til grafen i $a$"],
      explanation: 'Når $f \\geq 0$ gir det bestemte integralet arealet mellom grafen og $x$-aksen.',
    },
    {
      question: 'Regn ut $\\int_0^2 2x \\, dx$.',
      options: ['$4$', '$2$', '$8$', '$1$'],
      explanation: '$\\left[x^2\\right]_0^2 = 4 - 0 = 4$.',
    },
    {
      question: 'Regn ut $\\int_1^3 1 \\, dx$.',
      options: ['$2$', '$3$', '$1$', '$4$'],
      explanation: '$\\left[x\\right]_1^3 = 3 - 1 = 2$.',
    },
    {
      question: 'Hva blir $\\int_a^a f(x) \\, dx$?',
      options: ['$0$', '$f(a)$', '$F(a)$', '$1$'],
      explanation: 'Integralet over et intervall med null bredde er alltid $0$.',
    },
  ],

  'bi-okonomi-8-3': [
    {
      question: 'Substitusjon (variabelskifte) er nyttig når integranden inneholder:',
      options: ["En sammensatt funksjon og dens indre deriverte", "En logaritme uten indre funksjon", "Bare et konstant tall alene", "En rett linje uten kjerne"],
      explanation: 'Substitusjon er motstykket til kjerneregelen og brukes ved sammensatte funksjoner.',
    },
    {
      question: 'Delvis integrasjon er motstykket til hvilken derivasjonsregel?',
      options: ['Produktregelen', 'Kjerneregelen', 'Kvotientregelen', 'Potensregelen'],
      explanation: 'Delvis integrasjon ($\\int u v\' = uv - \\int u\' v$) følger av produktregelen.',
    },
    {
      question: 'Ved substitusjon $u = g(x)$ erstatter vi $dx$ med:',
      options: ["$\\frac{du}{g'(x)}$", "$dx$ helt uendret", "$du \\cdot g(x)$", "$dx$ uendret"],
      explanation: 'Siden $du = g\'(x)\\,dx$, blir $dx = \\frac{du}{g\'(x)}$.',
    },
    {
      question: 'Hva er $\\int (2x+1)^3 \\cdot 2 \\, dx$ ved substitusjon $u = 2x + 1$?',
      options: ['$\\frac{(2x+1)^4}{4} + C$', '$(2x+1)^4 + C$', '$\\frac{(2x+1)^3}{3} + C$', '$2(2x+1)^4 + C$'],
      explanation: 'Med $u = 2x+1$, $du = 2dx$: $\\int u^3 du = \\frac{u^4}{4} + C = \\frac{(2x+1)^4}{4} + C$.',
    },
    {
      question: 'Formelen for delvis integrasjon er:',
      options: ["$\\int u\\,v' \\, dx = uv - \\int u'\\,v \\, dx$", "$\\int u\\,v' \\, dx = \\frac{u}{v}$", "$\\int u\\,v' \\, dx = u'v + uv'$", "$\\int u\\,v' \\, dx = u'v'$"],
      explanation: 'Delvis integrasjon: $\\int u v\' dx = uv - \\int u\' v \\, dx$.',
    },
  ],

  'bi-okonomi-8-4': [
    {
      question: 'Hvis grensekostnaden er $C\'(x)$, finner vi total kostnadsøkning ved å:',
      options: ["Integrere grensekostnaden", "Multiplisere med prisen", "Dele den på antall enheter $x$", "Derivere grensekostnaden $C'(x)$"],
      explanation: 'Integralet av grensekostnaden gir den akkumulerte (totale) kostnadsendringen.',
    },
    {
      question: 'Konsumentoverskudd kan beregnes som:',
      options: ["Et integral av etterspørselsfunksjonen", "Den deriverte av prisfunksjonen", "Prisen multiplisert med mengden", "Summen av de faste kostnadene"],
      explanation: 'Konsumentoverskudd er arealet mellom etterspørselskurven og prisen, altså et integral.',
    },
    {
      question: 'Hvis grenseinntekten er $R\'(x) = 100 - 2x$, hva er inntektsfunksjonen $R(x)$ (med $R(0)=0$)?',
      options: ['$100x - x^2$', '$100 - x^2$', '$50x - x^2$', '$100x - 2x^2$'],
      explanation: '$R(x) = \\int (100 - 2x)\\,dx = 100x - x^2 + C$, og $R(0) = 0$ gir $C = 0$.',
    },
    {
      question: 'Integralet brukes i økonomi til å gå fra grensestørrelser til:',
      options: ["Totalstørrelser", "Prosentandeler", "Rentekostnader", "Elastisiteter"],
      explanation: 'Integrasjon summerer opp grensestørrelser til totaler (motsatt av derivasjon).',
    },
    {
      question: 'Arealet mellom tilbuds- og etterspørselskurven opp til likevekt kan tolkes som:',
      options: ["Samlet overskudd (konsument- + produsentoverskudd)", "Bedriftens samlede faste kostnader", "Skatteinntektene til myndighetene", "Grensekostnaden ved siste enhet"],
      explanation: 'Disse arealene (integralene) representerer konsument- og produsentoverskudd.',
    },
  ],

  'bi-okonomi-9-1': [
    {
      question: 'En matrise er:',
      options: ["Et rektangulært oppsett av tall i rader og kolonner", "En kontinuerlig funksjon av én variabel", "Et enkelt tall uten rader og kolonner", "En likning med ukjente på begge sider"],
      explanation: 'En matrise er et rutenett av tall ordnet i rader og kolonner.',
    },
    {
      question: 'Hva er dimensjonen til en matrise med 2 rader og 3 kolonner?',
      options: ['$2 \\times 3$', '$3 \\times 2$', '$6$', '$5$'],
      explanation: 'Dimensjonen oppgis som rader $\\times$ kolonner, altså $2 \\times 3$.',
    },
    {
      question: 'For å kunne addere to matriser må de ha:',
      options: ['Samme dimensjon', 'Like determinanter', 'Lik første rad', 'Bare positive tall'],
      explanation: 'Matriseaddisjon krever at matrisene har nøyaktig samme dimensjon (rad-for-rad).',
    },
    {
      question: 'For at produktet $A \\cdot B$ skal være definert må:',
      options: ["Antall kolonner i $A$ være lik antall rader i $B$", "Matrisene $A$ og $B$ være nøyaktig like store", "Matrisen $A$ være kvadratisk og inverterbar", "Begge matrisene ha determinant lik tallet 1"],
      explanation: 'Matrisemultiplikasjon krever at indre dimensjoner stemmer: kolonner i $A$ = rader i $B$.',
    },
    {
      question: 'Identitetsmatrisen $I$ oppfører seg ved multiplikasjon som:',
      options: ['Tallet 1', 'Tallet 0', 'Determinanten', 'En invers'],
      explanation: '$A \\cdot I = A$, så identitetsmatrisen spiller samme rolle som tallet $1$.',
    },
  ],

  'bi-okonomi-9-2': [
    {
      question: 'Determinanten til $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ er:',
      options: ['$ad - bc$', '$ab - cd$', '$ad + bc$', '$ac - bd$'],
      explanation: 'For en $2 \\times 2$-matrise: $\\det = ad - bc$.',
    },
    {
      question: 'Regn ut determinanten til $\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.',
      options: ['$5$', '$11$', '$8$', '$-5$'],
      explanation: '$2 \\cdot 4 - 1 \\cdot 3 = 8 - 3 = 5$.',
    },
    {
      question: 'En matrise har en invers hvis og bare hvis determinanten er:',
      options: ['Ulik null', 'Lik null', 'Positiv', 'Et heltall'],
      explanation: 'En matrise er inverterbar nettopp når $\\det \\neq 0$.',
    },
    {
      question: 'Hvis $\\det(A) = 0$, kalles matrisen:',
      options: ['Singulær', 'Identitet', 'Diagonal', 'Symmetrisk'],
      explanation: 'En matrise med determinant $0$ er singulær og har ingen invers.',
    },
    {
      question: 'For en $2\\times2$-matrise multipliseres den inverse med faktoren:',
      options: ["$\\frac{1}{\\det A}$", "$\\frac{1}{2}$", "$\\det A$", "$1$"],
      explanation: 'Den inverse er $\\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.',
    },
  ],

  'bi-okonomi-9-3': [
    {
      question: 'Gauss-eliminasjon brukes til å løse:',
      options: ["Lineære likningssystem", "Eksponentiallikninger", "Andregradslikninger med to reelle røtter", "Andregradslikninger"],
      explanation: 'Gauss-eliminasjon løser systemer av lineære likninger ved radoperasjoner.',
    },
    {
      question: 'Hvilke operasjoner er tillatt i Gauss-eliminasjon?',
      options: ["Bytte rader, gange en rad med et tall, legge til et multiplum av en rad", "Bytte kolonner med rader", "Dele en hel rad på null, sette inn en tom kolonne og fjerne konstantleddene helt", "Bytte kolonner med rader, transponere hele koeffisientmatrisen og speile diagonalen"],
      explanation: 'Tillatte radoperasjoner: ombytting, skalering og addisjon av et multiplum av en annen rad.',
    },
    {
      question: 'Målet med Gauss-eliminasjon er å få matrisen på:',
      options: ['Trappeform (echelon-form)', 'Diagonal med determinant 1', 'Symmetrisk form', 'Sirkelform'],
      explanation: 'Vi reduserer til trappeform slik at variablene kan løses ved tilbakesubstitusjon.',
    },
    {
      question: 'Et likningssystem kan ha:',
      options: ["Én, ingen eller uendelig mange løsninger", "Alltid nøyaktig én løsning", "Aldri noen gyldig løsning når det finnes flere ukjente", "Alltid nøyaktig én entydig løsning uansett koeffisienter"],
      explanation: 'Lineære systemer har enten én entydig løsning, ingen, eller uendelig mange.',
    },
    {
      question: 'En totalmatrise (utvidet matrise) inneholder:',
      options: ["Koeffisientene og høyresidene", "Bare determinanten", "Bare determinanten til koeffisientmatrisen", "Bare nullpunktene"],
      explanation: 'Totalmatrisen kombinerer koeffisientmatrisen med kolonnen av konstantledd.',
    },
  ],

  'bi-okonomi-9-4': [
    {
      question: 'Cramers regel uttrykker løsningen ved hjelp av:',
      options: ["Determinanter", "Integraler", "Bestemte integraler", "Logaritmer"],
      explanation: 'Cramers regel gir hver ukjente som en brøk mellom to determinanter.',
    },
    {
      question: 'I Cramers regel er $x_1 = \\frac{\\det A_1}{\\det A}$, der $A_1$ er $A$ med:',
      options: ["Første kolonne erstattet av høyresidene", "Determinanten doblet", "Alle tallelementer opphøyd i andre potens", "Første rad fullstendig fjernet fra matrisen"],
      explanation: '$A_1$ fås ved å bytte ut kolonnen som hører til $x_1$ med konstantkolonnen.',
    },
    {
      question: 'Cramers regel krever at koeffisientdeterminanten er:',
      options: ['Ulik null', 'Lik null', 'Negativ', 'Et partall'],
      explanation: 'Regelen forutsetter $\\det A \\neq 0$ (entydig løsning).',
    },
    {
      question: 'Løs $x + y = 5$, $x - y = 1$ med determinanter. Hva er $x$?',
      options: ['$3$', '$2$', '$5$', '$4$'],
      explanation: '$\\det A = (1)(-1)-(1)(1) = -2$; $\\det A_x = (5)(-1)-(1)(1) = -6$; $x = \\frac{-6}{-2} = 3$.',
    },
    {
      question: 'En typisk økonomisk anvendelse av lineære likningssystem er:',
      options: ["Å finne markedslikevekt for flere varer samtidig", "Å faktorisere et polynom", "Å beregne enkel rente på et innskudd over ett år", "Å faktorisere et polynom for å finne nullpunktene"],
      explanation: 'Systemer brukes f.eks. til å løse for likevektspriser i flere sammenkoblede markeder.',
    },
  ],

  'bi-okonomi-10-1': [
    {
      question: 'En tallfølge er:',
      options: ['En ordnet liste av tall', 'En sum av tall', 'En matrise', 'En funksjon av to variabler'],
      explanation: 'En tallfølge er tall ordnet etter en bestemt rekkefølge: $a_1, a_2, a_3, \\dots$',
    },
    {
      question: 'For følgen $a_n = 2n + 1$, hva er $a_3$?',
      options: ['$7$', '$6$', '$5$', '$9$'],
      explanation: '$a_3 = 2 \\cdot 3 + 1 = 7$.',
    },
    {
      question: 'En rekursiv formel angir et ledd ved hjelp av:',
      options: ["Det/de foregående leddet/leddene", "Bare leddnummeret", "Bare leddnummeret $n$ satt inn direkte", "En bestemt integrering av forrige ledd"],
      explanation: 'Rekursive følger defineres ved tidligere ledd, f.eks. $a_{n+1} = a_n + 3$.',
    },
    {
      question: 'For den rekursive følgen $a_1 = 2$, $a_{n+1} = a_n + 4$, hva er $a_3$?',
      options: ['$10$', '$8$', '$6$', '$12$'],
      explanation: '$a_2 = 2 + 4 = 6$, $a_3 = 6 + 4 = 10$.',
    },
    {
      question: 'En følge som nærmer seg en bestemt verdi når $n$ blir stor, sies å:',
      options: ['Konvergere', 'Divergere', 'Faktorisere', 'Integreres'],
      explanation: 'En følge som går mot en grenseverdi konvergerer.',
    },
  ],

  'bi-okonomi-10-2': [
    {
      question: 'En aritmetisk rekke har:',
      options: ["Konstant differanse mellom påfølgende ledd", "Tilfeldig valgte ledd uten fast mønster", "Konstant forhold (kvotient) mellom påfølgende ledd", "Ledd som dobles for hvert steg i rekka"],
      explanation: 'I en aritmetisk rekke er differansen $d = a_{n+1} - a_n$ konstant.',
    },
    {
      question: 'Formelen for $n$-te ledd i en aritmetisk følge er:',
      options: ['$a_n = a_1 + (n-1)d$', '$a_n = a_1 \\cdot d^{n-1}$', '$a_n = a_1 + nd$', '$a_n = a_1 \\cdot n$'],
      explanation: '$a_n = a_1 + (n-1)d$ der $d$ er differansen.',
    },
    {
      question: 'For $a_1 = 3$ og $d = 5$, hva er $a_4$?',
      options: ['$18$', '$15$', '$20$', '$23$'],
      explanation: '$a_4 = 3 + (4-1)\\cdot 5 = 3 + 15 = 18$.',
    },
    {
      question: 'Summen av de $n$ første leddene i en aritmetisk rekke er:',
      options: ["$S_n = \\frac{n(a_1 + a_n)}{2}$", "$S_n = \\frac{a_1 + a_n}{n}$", "$S_n = n \\cdot a_1$ (kun første ledd ganget)", "$S_n = a_1 \\cdot a_n$"],
      explanation: '$S_n = \\frac{n}{2}(a_1 + a_n)$ er summen av en aritmetisk rekke.',
    },
    {
      question: 'Hva er summen $1 + 2 + 3 + \\dots + 10$?',
      options: ['$55$', '$50$', '$45$', '$100$'],
      explanation: '$S_{10} = \\frac{10(1 + 10)}{2} = \\frac{110}{2} = 55$.',
    },
  ],

  'bi-okonomi-10-3': [
    {
      question: 'En geometrisk rekke har:',
      options: ["Konstant forhold mellom påfølgende ledd", "Ledd som legges sammen", "Ledd som legges sammen med et fast tall", "Tilfeldig valgte ledd uten fast kvotient"],
      explanation: 'I en geometrisk rekke er kvotienten $k = \\frac{a_{n+1}}{a_n}$ konstant.',
    },
    {
      question: 'Formelen for $n$-te ledd i en geometrisk følge er:',
      options: ["$a_n = a_1 \\cdot k^{n-1}$", "$a_n = a_1 + (n-1)k$", "$a_n = a_1 + k$ (kun ett tillegg)", "$a_n = a_1 \\cdot n$"],
      explanation: '$a_n = a_1 \\cdot k^{n-1}$ der $k$ er kvotienten.',
    },
    {
      question: 'For $a_1 = 2$ og $k = 3$, hva er $a_4$?',
      options: ['$54$', '$18$', '$24$', '$162$'],
      explanation: '$a_4 = 2 \\cdot 3^{3} = 2 \\cdot 27 = 54$.',
    },
    {
      question: 'Summen av de $n$ første leddene i en geometrisk rekke (med $k \\neq 1$) er:',
      options: ["$S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$", "$S_n = \\frac{n(a_1 + a_n)}{2}$", "$S_n = a_1 + n k$ (feilaktig lineær sum)", "$S_n = a_1 \\cdot k^n$ (leddet, ikke summen)"],
      explanation: 'Geometrisk sum: $S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$.',
    },
    {
      question: 'Sparing av et fast beløp hvert år med rente er et eksempel på en:',
      options: ['Geometrisk rekke', 'Aritmetisk rekke', 'Lineær funksjon', 'Konstant følge'],
      explanation: 'Rentes rente gir multiplikasjon med vekstfaktoren hvert år, altså en geometrisk struktur.',
    },
  ],

  'bi-okonomi-10-4': [
    {
      question: 'En uendelig geometrisk rekke konvergerer når:',
      options: ['$|k| < 1$', '$|k| > 1$', '$k = 1$', '$k = 0$ alltid kreves'],
      explanation: 'En uendelig geometrisk rekke har endelig sum bare når tallverdien av kvotienten er under $1$.',
    },
    {
      question: 'Summen av en uendelig geometrisk rekke (med $|k|<1$) er:',
      options: ['$\\frac{a_1}{1 - k}$', '$\\frac{a_1}{k - 1}$', '$a_1 \\cdot k$', '$\\frac{1 - k}{a_1}$'],
      explanation: '$S = \\frac{a_1}{1 - k}$ for $|k| < 1$.',
    },
    {
      question: 'Hva er summen av $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$?',
      options: ['$2$', '$1$', '$\\frac{3}{2}$', 'Uendelig'],
      explanation: '$a_1 = 1$, $k = \\frac{1}{2}$: $S = \\frac{1}{1 - 1/2} = 2$.',
    },
    {
      question: 'En perpetuitet er:',
      options: ["En evigvarende serie like betalinger", "En aksje som gir varierende utbytte", "Et annuitetslån nedbetalt over ti år", "En enkelt engangsbetaling utbetalt i dag"],
      explanation: 'En perpetuitet gir en fast betaling i all evighet.',
    },
    {
      question: 'Nåverdien av en perpetuitet med årlig betaling $B$ og rente $r$ er:',
      options: ['$\\frac{B}{r}$', '$B \\cdot r$', '$\\frac{r}{B}$', '$B \\cdot (1 + r)$'],
      explanation: 'Som grensen av en uendelig geometrisk rekke: nåverdi $= \\frac{B}{r}$.',
    },
  ],

};

export default quizData_biOkonomi;
