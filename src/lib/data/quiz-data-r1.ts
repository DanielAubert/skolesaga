import type { QuizQuestion } from './quiz-data';

const quizData_r1: Record<string, QuizQuestion[]> = {
  'r1-1-1': [
  {
    question: 'Hva er graden og konstantleddet til polynomet $Q(x) = -2x^3 + x$?',
    options: ['Grad $3$ og konstantledd $0$', 'Grad $3$ og konstantledd $1$', 'Grad $2$ og konstantledd $0$', 'Grad $1$ og konstantledd $-2$'],
    explanation: 'Graden er den høyeste eksponenten, altså $3$. Polynomet har ikke noe konstantledd skrevet ut, så konstantleddet er $0$.',
  },
  {
    question: 'Hva sier faktorteoremet om polynomet $P(x)$ når $P(1) = 0$?',
    options: ['$(x - 1)$ er en faktor i $P(x)$', '$(x + 1)$ er en faktor i $P(x)$', '$P(x)$ har grad $1$', '$P(x)$ har ingen andre nullpunkter'],
    explanation: 'Faktorteoremet: $P(a) = 0$ hvis og bare hvis $(x - a)$ er en faktor i $P(x)$. Her er $a = 1$, så $(x - 1)$ er en faktor.',
  },
  {
    question: 'Hva er resten når $P(x) = x^3 - 3x + 1$ deles på $(x - 2)$?',
    options: ['$3$', '$0$', '$-1$', '$5$'],
    explanation: 'Resten er $P(2) = 2^3 - 3 \\cdot 2 + 1 = 8 - 6 + 1 = 3$.',
  },
  {
    question: 'Hva blir kvotienten og resten i polynomdivisjonen $(x^3 - 2x^2 + 5x - 3) : (x - 1)$?',
    options: ['Kvotient $x^2 - x + 4$, rest $1$', 'Kvotient $x^2 - x + 4$, rest $0$', 'Kvotient $x^2 + x - 4$, rest $1$', 'Kvotient $x^2 - 3x + 8$, rest $-11$'],
    explanation: 'Divisjonen gir $x^3 - 2x^2 + 5x - 3 = (x - 1)(x^2 - x + 4) + 1$. Kontroll: $P(1) = 1 - 2 + 5 - 3 = 1$, som stemmer med resten.',
  },
  {
    question: 'Hvilke nullpunkter har $P(x) = x^3 - 6x^2 + 11x - 6$?',
    options: ['$x = 1$, $x = 2$ og $x = 3$', '$x = -1$, $x = -2$ og $x = -3$', '$x = 0$, $x = 2$ og $x = 3$', '$x = 1$, $x = 6$ og $x = 11$'],
    explanation: '$P(1) = 1 - 6 + 11 - 6 = 0$, så $(x-1)$ er en faktor. Divisjon gir $P(x) = (x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$, med nullpunkter $1$, $2$ og $3$.',
  },
  ],
  'r1-1-2': [
  {
    question: 'Hva betyr $\\log_a b = x$?',
    options: ['$a^x = b$', '$b^x = a$', '$x^a = b$', '$a^b = x$'],
    explanation: 'Logaritmen $\\log_a b$ er per definisjon den eksponenten $x$ vi må opphøye $a$ i for å få $b$, altså $a^x = b$.',
  },
  {
    question: 'Hva er $\\log_2 32$?',
    options: ['$5$', '$16$', '$4$', '$6$'],
    explanation: '$2^5 = 32$, så $\\log_2 32 = 5$.',
  },
  {
    question: 'Forenkle $\\ln 8 - \\ln 2$.',
    options: ['$\\ln 4$', '$\\ln 6$', '$\\ln 16$', '$\\frac{\\ln 8}{\\ln 2}$'],
    explanation: 'Regneregelen $\\ln a - \\ln b = \\ln \\frac{a}{b}$ gir $\\ln 8 - \\ln 2 = \\ln \\frac{8}{2} = \\ln 4$.',
  },
  {
    question: 'Hva er $8^{\\frac{2}{3}}$?',
    options: ['$4$', '$\\frac{16}{3}$', '$2$', '$16$'],
    explanation: '$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
  },
  {
    question: 'Hvordan kan $\\log_5 7$ skrives med naturlig logaritme?',
    options: ['$\\frac{\\ln 7}{\\ln 5}$', '$\\frac{\\ln 5}{\\ln 7}$', '$\\ln 7 - \\ln 5$', '$\\ln \\frac{7}{5}$'],
    explanation: 'Formelen for skifte av grunntall: $\\log_a b = \\frac{\\ln b}{\\ln a}$, så $\\log_5 7 = \\frac{\\ln 7}{\\ln 5}$.',
  },
  ],
  'r1-1-3': [
  {
    question: 'Hva er den eksakte løsningen av $3^x = 50$?',
    options: ['$x = \\frac{\\ln 50}{\\ln 3}$', '$x = \\frac{\\ln 3}{\\ln 50}$', '$x = \\ln \\frac{50}{3}$', '$x = \\frac{50}{3}$'],
    explanation: 'Vi tar logaritmen på begge sider: $x \\ln 3 = \\ln 50$, som gir $x = \\frac{\\ln 50}{\\ln 3} \\approx 3{,}56$.',
  },
  {
    question: 'Løs ligningen $\\ln(x - 1) + \\ln(x + 1) = \\ln 8$.',
    options: ['$x = 3$', '$x = \\pm 3$', '$x = 9$', '$x = 4$'],
    explanation: 'Venstre side blir $\\ln((x-1)(x+1)) = \\ln(x^2 - 1)$, så $x^2 - 1 = 8$ og $x = \\pm 3$. Men $x = -3$ gir negativt argument i $\\ln(x-1)$ og må forkastes. Bare $x = 3$ er gyldig.',
  },
  {
    question: 'Hvorfor må vi alltid kontrollere løsningene av en logaritmeligning?',
    options: ['Fordi argumentet til logaritmen må være positivt', 'Fordi logaritmer alltid har to løsninger', 'Fordi kalkulatoren runder av feil', 'Fordi logaritmen kan være negativ'],
    explanation: 'Logaritmen er bare definert for positive argumenter. Algebraen kan gi «løsninger» som gjør argumentet null eller negativt, og disse må forkastes.',
  },
  {
    question: 'En størrelse vokser med $2\\%$ per år. Hva er doblingstiden?',
    options: ['$T = \\frac{\\ln 2}{\\ln 1{,}02} \\approx 35$ år', '$T = \\frac{\\ln 1{,}02}{\\ln 2} \\approx 0{,}03$ år', '$T = 50$ år, fordi $100/2 = 50$', '$T = \\ln 2 \\approx 0{,}69$ år'],
    explanation: 'Vi løser $1{,}02^T = 2$, som gir $T = \\frac{\\ln 2}{\\ln 1{,}02} \\approx 35{,}0$ år.',
  },
  {
    question: 'Løs ligningen $5^{2x} = 125$.',
    options: ['$x = \\frac{3}{2}$', '$x = 3$', '$x = \\frac{2}{3}$', '$x = 25$'],
    explanation: '$125 = 5^3$, så $5^{2x} = 5^3$ gir $2x = 3$ og $x = \\frac{3}{2}$.',
  },
  ],
  'r1-1-4': [
  {
    question: 'Hva er et rasjonalt uttrykk?',
    options: ['En brøk der teller og nevner er polynomer', 'Et uttrykk som bare inneholder rasjonale tall', 'Et polynom med rasjonale koeffisienter', 'En brøk der nevneren er et tall'],
    explanation: 'Et rasjonalt uttrykk er på formen $\\frac{P(x)}{Q(x)}$ der $P(x)$ og $Q(x)$ er polynomer og $Q(x) \\neq 0$.',
  },
  {
    question: 'Hva er definisjonsmengden til $\\frac{x + 3}{x^2 - 4}$?',
    options: ['Alle $x$ unntatt $x = 2$ og $x = -2$', 'Alle $x$ unntatt $x = -3$', 'Alle $x$ unntatt $x = 4$', 'Alle reelle tall'],
    explanation: 'Nevneren $x^2 - 4 = (x-2)(x+2)$ er null når $x = \\pm 2$, så disse verdiene må utelukkes.',
  },
  {
    question: 'Forkort $\\frac{x^2 - 4}{x^2 + 4x + 4}$.',
    options: ['$\\frac{x - 2}{x + 2}$', '$\\frac{x + 2}{x - 2}$', '$\\frac{-4}{4x + 4}$', '$\\frac{1}{x + 2}$'],
    explanation: 'Teller: $x^2 - 4 = (x-2)(x+2)$. Nevner: $x^2 + 4x + 4 = (x+2)^2$. Forkorting av felles faktor $(x+2)$ gir $\\frac{x-2}{x+2}$.',
  },
  {
    question: 'Regn ut $\\frac{2}{x-1} + \\frac{3}{x+2}$.',
    options: ['$\\frac{5x + 1}{(x-1)(x+2)}$', '$\\frac{5}{(x-1)(x+2)}$', '$\\frac{5}{2x + 1}$', '$\\frac{6}{(x-1)(x+2)}$'],
    explanation: 'Fellesnevner er $(x-1)(x+2)$: $\\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \\frac{2x + 4 + 3x - 3}{(x-1)(x+2)} = \\frac{5x + 1}{(x-1)(x+2)}$.',
  },
  {
    question: 'Kan brøken $\\frac{x + 3}{3}$ forkortes til $x + 1$?',
    options: ['Nei, fordi $3$ ikke er en faktor i hele telleren', 'Ja, vi stryker $3$ i teller og nevner', 'Ja, men bare når $x > 0$', 'Nei, riktig svar er $x$'],
    explanation: 'Vi kan bare forkorte felles faktorer. Telleren $x + 3$ er en sum, ikke et produkt med faktor $3$, så brøken kan ikke forkortes.',
  },
  ],
  'r1-1-5': [
  {
    question: 'Hva betyr intervallnotasjonen $[a, b)$?',
    options: ['$a \\leq x < b$', '$a < x \\leq b$', '$a < x < b$', '$a \\leq x \\leq b$'],
    explanation: 'Hakeparentes betyr at endepunktet er med, vanlig parentes at det ikke er med. $[a, b)$ betyr derfor $a \\leq x < b$.',
  },
  {
    question: 'Løs ulikheten $x^2 - x - 6 > 0$.',
    options: ['$x < -2$ eller $x > 3$', '$-2 < x < 3$', '$x > 3$', '$x < -3$ eller $x > 2$'],
    explanation: 'Faktorisering: $x^2 - x - 6 = (x - 3)(x + 2)$, med nullpunkter $x = 3$ og $x = -2$. Fortegnsskjema viser at uttrykket er positivt utenfor nullpunktene: $x < -2$ eller $x > 3$.',
  },
  {
    question: 'Løs ligningen $|2x - 3| = 7$.',
    options: ['$x = 5$ eller $x = -2$', '$x = 5$', '$x = \\pm 5$', '$x = 2$ eller $x = -5$'],
    explanation: '$|2x - 3| = 7$ gir $2x - 3 = 7$ eller $2x - 3 = -7$, altså $x = 5$ eller $x = -2$.',
  },
  {
    question: 'Løs ulikheten $|x - 2| < 5$.',
    options: ['$-3 < x < 7$', '$x < 7$', '$-5 < x < 5$', '$x < -3$ eller $x > 7$'],
    explanation: '$|x - 2| < 5$ betyr at avstanden fra $x$ til $2$ er mindre enn $5$: $-5 < x - 2 < 5$, altså $-3 < x < 7$.',
  },
  {
    question: 'Hva er den geometriske tolkningen av $|a - b|$?',
    options: ['Avstanden mellom $a$ og $b$ på tallinjen', 'Summen av $a$ og $b$', 'Avstanden fra $a$ til origo', 'Differansen $a - b$, som alltid er negativ'],
    explanation: 'Absoluttverdien av en differanse, $|a - b|$, måler avstanden mellom tallene $a$ og $b$ på tallinjen, uansett hvilket som er størst.',
  },
  ],
  'r1-2-1': [
  {
    question: 'Hvilken funksjonstype er $g(x) = \\frac{x^2 - 1}{x + 3}$?',
    options: ['Rasjonal funksjon', 'Polynomfunksjon', 'Eksponentialfunksjon', 'Logaritmefunksjon'],
    explanation: '$g(x)$ er en brøk der både teller og nevner er polynomer, og er derfor en rasjonal funksjon.',
  },
  {
    question: 'Hva er definisjonsmengden til $h(x) = \\ln(x - 1)$?',
    options: ['$x > 1$', '$x \\geq 1$', '$x > 0$', '$x \\neq 1$'],
    explanation: 'Logaritmen krever positivt argument: $x - 1 > 0$, altså $x > 1$.',
  },
  {
    question: 'Funksjonen $g(x) = x^3 - x$ er en odde funksjon. Hva betyr det?',
    options: ['$g(-x) = -g(x)$, og grafen er symmetrisk om origo', '$g(-x) = g(x)$, og grafen er symmetrisk om $y$-aksen', 'Graden til polynomet er et oddetall', 'Funksjonen har bare negative verdier'],
    explanation: 'En odde funksjon oppfyller $g(-x) = -g(x)$. Her: $g(-x) = -x^3 + x = -(x^3 - x) = -g(x)$. Grafen er punktsymmetrisk om origo.',
  },
  {
    question: 'Hva er verdimengden til $g(x) = e^x$?',
    options: ['$(0, \\infty)$', '$[0, \\infty)$', 'Alle reelle tall', '$(1, \\infty)$'],
    explanation: 'Eksponentialfunksjonen er alltid strengt positiv, men kan komme vilkårlig nær $0$. Verdimengden er $(0, \\infty)$.',
  },
  {
    question: 'Hvilke nullpunkter har $f(x) = x^3 - 4x$?',
    options: ['$x = -2$, $x = 0$ og $x = 2$', '$x = 0$ og $x = 4$', '$x = 2$ og $x = -2$', '$x = 0$ og $x = 2$'],
    explanation: 'Faktorisering: $f(x) = x(x^2 - 4) = x(x-2)(x+2)$, som gir nullpunktene $x = 0$, $x = 2$ og $x = -2$.',
  },
  ],
  'r1-2-2': [
  {
    question: 'Hva er $f^{-1}(f(x))$ når $f$ har en omvendt funksjon?',
    options: ['$x$', '$1$', '$\\frac{1}{f(x)}$', '$f(x)^{-1}$'],
    explanation: 'Den omvendte funksjonen «angrer» det $f$ gjør, så $f^{-1}(f(x)) = x$ for alle $x$ i definisjonsmengden til $f$.',
  },
  {
    question: 'Hvorfor har $g(x) = x^2$ (definert for alle reelle tall) ingen omvendt funksjon?',
    options: ['Fordi flere $x$-verdier gir samme funksjonsverdi, f.eks. $g(2) = g(-2) = 4$', 'Fordi $g$ ikke er kontinuerlig', 'Fordi $g$ aldri blir negativ', 'Fordi $g$ ikke er deriverbar i $x = 0$'],
    explanation: 'En funksjon har omvendt funksjon bare hvis den er én-til-én (injektiv). Siden $g(2) = g(-2)$, kan vi ikke entydig «gå tilbake» fra $4$.',
  },
  {
    question: 'Finn den omvendte funksjonen til $f(x) = 2x + 3$.',
    options: ['$f^{-1}(x) = \\frac{x - 3}{2}$', '$f^{-1}(x) = \\frac{x + 3}{2}$', '$f^{-1}(x) = \\frac{1}{2x + 3}$', '$f^{-1}(x) = 3x + 2$'],
    explanation: 'Vi løser $y = 2x + 3$ for $x$: $x = \\frac{y - 3}{2}$. Den omvendte funksjonen er $f^{-1}(x) = \\frac{x - 3}{2}$.',
  },
  {
    question: 'Finn den omvendte funksjonen til $f(x) = e^{2x}$.',
    options: ['$f^{-1}(x) = \\frac{\\ln x}{2}$', '$f^{-1}(x) = \\ln(2x)$', '$f^{-1}(x) = 2 \\ln x$', '$f^{-1}(x) = e^{-2x}$'],
    explanation: 'Vi løser $y = e^{2x}$: $\\ln y = 2x$, så $x = \\frac{\\ln y}{2}$. Dermed er $f^{-1}(x) = \\frac{\\ln x}{2}$.',
  },
  {
    question: 'Hvordan henger grafene til $f$ og $f^{-1}$ sammen?',
    options: ['De er speilinger av hverandre om linjen $y = x$', 'De er speilinger av hverandre om $y$-aksen', 'De er speilinger av hverandre om $x$-aksen', 'De er parallellforskyvninger av hverandre'],
    explanation: 'Hvis $(a, b)$ ligger på grafen til $f$, ligger $(b, a)$ på grafen til $f^{-1}$. Å bytte koordinater svarer til speiling om linjen $y = x$.',
  },
  ],
  'r1-2-3': [
  {
    question: 'Hva betyr $(f \\circ g)(x)$?',
    options: ['$f(g(x))$', '$g(f(x))$', '$f(x) \\cdot g(x)$', '$f(x) + g(x)$'],
    explanation: 'Komposisjonen $f \\circ g$ betyr at vi først bruker $g$, deretter $f$: $(f \\circ g)(x) = f(g(x))$.',
  },
  {
    question: 'La $f(x) = x^2$ og $g(x) = x + 3$. Hva er $(f \\circ g)(2)$?',
    options: ['$25$', '$7$', '$13$', '$10$'],
    explanation: '$(f \\circ g)(2) = f(g(2)) = f(5) = 5^2 = 25$.',
  },
  {
    question: 'Er $f \\circ g$ alltid lik $g \\circ f$?',
    options: ['Nei, komposisjon er generelt ikke kommutativ', 'Ja, rekkefølgen spiller ingen rolle', 'Ja, men bare for polynomer', 'Nei, de er aldri like'],
    explanation: 'Med $f(x) = x^2$ og $g(x) = x + 3$ er $(f \\circ g)(x) = (x+3)^2$ mens $(g \\circ f)(x) = x^2 + 3$ — forskjellige funksjoner. Rekkefølgen har altså betydning (men i spesielle tilfeller kan de være like).',
  },
  {
    question: 'Hva er indre og ytre funksjon i $h(x) = e^{x^2}$?',
    options: ['Indre: $g(x) = x^2$, ytre: $f(u) = e^u$', 'Indre: $f(u) = e^u$, ytre: $g(x) = x^2$', 'Indre: $g(x) = e^x$, ytre: $f(u) = u^2$', 'Indre: $g(x) = x$, ytre: $f(u) = e^{u^2}$'],
    explanation: 'Vi regner først ut $x^2$ (indre funksjon/kjerne) og setter resultatet inn i $e^u$ (ytre funksjon): $h(x) = f(g(x))$ med $g(x) = x^2$ og $f(u) = e^u$.',
  },
  {
    question: 'La $f(x) = x^2$, $g(x) = x + 1$ og $h(x) = 2x$. Hva er $(f \\circ g \\circ h)(x)$?',
    options: ['$(2x + 1)^2$', '$2x^2 + 1$', '$(2x)^2 + 1$', '$2(x + 1)^2$'],
    explanation: 'Vi jobber innenfra: $h(x) = 2x$, deretter $g(2x) = 2x + 1$, og til slutt $f(2x + 1) = (2x + 1)^2$.',
  },
  ],
  'r1-2-4': [
  {
    question: 'La $f(x) = \\begin{cases} x^2 & \\text{når } x < 1 \\\\ 2x - 1 & \\text{når } x \\geq 1 \\end{cases}$. Hva er $f(1)$?',
    options: ['$1$', '$2$', '$0$', 'Udefinert'],
    explanation: 'Siden $x = 1$ oppfyller $x \\geq 1$, bruker vi uttrykket $2x - 1$: $f(1) = 2 \\cdot 1 - 1 = 1$.',
  },
  {
    question: 'Hva må sjekkes for at en stykkevis definert funksjon skal være kontinuerlig i et skjøtepunkt $x = a$?',
    options: ['At venstresidig og høyresidig grenseverdi begge er lik $f(a)$', 'At begge funksjonsuttrykkene er polynomer', 'At funksjonen er deriverbar i $a$', 'At funksjonsuttrykkene har samme stigningstall i $a$'],
    explanation: 'Kontinuitet i skjøtepunktet krever at $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$. Deriverbarhet er et strengere krav som ikke er nødvendig for kontinuitet.',
  },
  {
    question: 'Er $g(x) = \\begin{cases} x + 1 & \\text{når } x < 2 \\\\ x^2 - 5 & \\text{når } x \\geq 2 \\end{cases}$ kontinuerlig i $x = 2$?',
    options: ['Nei, venstresidig grense er $3$ mens høyresidig er $-1$', 'Ja, begge grensene er $3$', 'Ja, fordi begge uttrykkene er kontinuerlige funksjoner', 'Nei, fordi $g(2)$ ikke er definert'],
    explanation: 'Fra venstre: $\\lim_{x \\to 2^-} (x + 1) = 3$. Fra høyre: $\\lim_{x \\to 2^+} (x^2 - 5) = -1$. Grensene er ulike, så $g$ har et hopp i $x = 2$ og er ikke kontinuerlig der.',
  },
  {
    question: 'Hvordan skrives $f(x) = |2x - 4|$ som en stykkevis definert funksjon?',
    options: ['$f(x) = \\begin{cases} 2x - 4 & \\text{når } x \\geq 2 \\\\ 4 - 2x & \\text{når } x < 2 \\end{cases}$', '$f(x) = \\begin{cases} 2x - 4 & \\text{når } x \\geq 0 \\\\ 4 - 2x & \\text{når } x < 0 \\end{cases}$', '$f(x) = \\begin{cases} 2x + 4 & \\text{når } x \\geq 2 \\\\ -2x - 4 & \\text{når } x < 2 \\end{cases}$', '$f(x) = \\begin{cases} 2x - 4 & \\text{når } x \\geq 4 \\\\ 4 - 2x & \\text{når } x < 4 \\end{cases}$'],
    explanation: 'Uttrykket $2x - 4$ skifter fortegn i $x = 2$. For $x \\geq 2$ er $2x - 4 \\geq 0$, og for $x < 2$ er $|2x - 4| = -(2x - 4) = 4 - 2x$.',
  },
  {
    question: 'En portotabell der prisen er konstant innenfor hvert vektintervall, er et eksempel på hvilken funksjonstype?',
    options: ['En trappefunksjon, som er diskontinuerlig i hoppunktene', 'En lineær funksjon', 'En kontinuerlig stykkevis funksjon', 'En eksponentialfunksjon'],
    explanation: 'Prisen er stykkevis konstant og «hopper» ved intervallgrensene — en trappefunksjon med sprangdiskontinuiteter.',
  },
  ],
  'r1-2-5': [
  {
    question: 'Hva er den geometriske tolkningen av gjennomsnittlig vekstfart på intervallet $[a, b]$?',
    options: ['Stigningstallet til sekanten gjennom $(a, f(a))$ og $(b, f(b))$', 'Stigningstallet til tangenten i $x = a$', 'Arealet under grafen mellom $a$ og $b$', 'Den deriverte i midtpunktet av intervallet'],
    explanation: 'Gjennomsnittlig vekstfart er $\\frac{f(b) - f(a)}{b - a}$, som nettopp er stigningstallet til sekanten gjennom de to punktene på grafen.',
  },
  {
    question: 'En ball har høyde $h(t) = 20t - 5t^2$ meter etter $t$ sekunder. Hva er gjennomsnittlig vekstfart på $[0, 2]$?',
    options: ['$10$ m/s', '$20$ m/s', '$15$ m/s', '$5$ m/s'],
    explanation: '$h(2) = 40 - 20 = 20$ og $h(0) = 0$. Gjennomsnittlig vekstfart: $\\frac{20 - 0}{2 - 0} = 10$ m/s.',
  },
  {
    question: 'Hva er den momentane vekstfarten til $f$ i $x = a$?',
    options: ['$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$', '$\\frac{f(a+h) - f(a)}{h}$ for en fast $h$', '$\\frac{f(a)}{a}$', '$\\lim_{h \\to 0} \\frac{f(a+h) + f(a)}{h}$'],
    explanation: 'Momentan vekstfart er grenseverdien av gjennomsnittlig vekstfart når intervallbredden $h$ går mot null — dette er definisjonen av den deriverte $f\'(a)$.',
  },
  {
    question: 'Bruk definisjonen av den deriverte på $f(x) = x^2$. Hva blir $f\'(x)$?',
    options: ['$2x$', '$x$', '$2x + h$', '$x^2$'],
    explanation: '$\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h$, som går mot $2x$ når $h \\to 0$.',
  },
  {
    question: 'Finn likningen for tangenten til $f(x) = x^2 - 3x + 2$ i punktet der $x = 2$.',
    options: ['$y = x - 2$', '$y = 2x - 4$', '$y = x + 2$', '$y = -3x + 6$'],
    explanation: '$f(2) = 4 - 6 + 2 = 0$ og $f\'(x) = 2x - 3$, så $f\'(2) = 1$. Tangenten: $y = 0 + 1 \\cdot (x - 2) = x - 2$.',
  },
  ],
  'r1-3-1': [
  {
    question: 'Hva er $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$?',
    options: ['$6$', '$0$', '$3$', 'Grenseverdien eksisterer ikke'],
    explanation: 'Uttrykket gir $\\frac{0}{0}$, men faktorisering gir $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$. Grenseverdien er $3 + 3 = 6$.',
  },
  {
    question: 'Hva er $\\lim_{x \\to \\infty} \\frac{3x^2 - 2x + 1}{x^2 + 5}$?',
    options: ['$3$', '$0$', '$\\infty$', '$\\frac{1}{5}$'],
    explanation: 'Vi deler teller og nevner på $x^2$: $\\frac{3 - 2/x + 1/x^2}{1 + 5/x^2} \\to \\frac{3}{1} = 3$. Når teller og nevner har samme grad, er grenseverdien forholdet mellom de ledende koeffisientene.',
  },
  {
    question: 'Hvorfor eksisterer ikke $\\lim_{x \\to 0} \\frac{|x|}{x}$?',
    options: ['Venstresidig grense er $-1$ og høyresidig er $1$, og de er ulike', 'Fordi funksjonen ikke er definert i $x = 0$', 'Fordi grenseverdien er uendelig', 'Fordi absoluttverdier ikke har grenseverdier'],
    explanation: 'For $x < 0$ er $\\frac{|x|}{x} = -1$, og for $x > 0$ er den $1$. Siden de ensidige grenseverdiene er forskjellige, eksisterer ikke grenseverdien. At $f(0)$ ikke er definert hindrer i seg selv ikke at grensen kan eksistere.',
  },
  {
    question: 'Hvilken påstand om $\\lim_{x \\to a} f(x)$ er riktig?',
    options: ['Grenseverdien avhenger ikke av verdien $f(a)$', 'Grenseverdien er alltid lik $f(a)$', 'Grenseverdien eksisterer bare hvis $f(a)$ er definert', 'Grenseverdien er gjennomsnittet av de ensidige grensene'],
    explanation: 'Grenseverdien beskriver hva $f(x)$ nærmer seg når $x \\to a$ med $x \\neq a$. Funksjonen trenger ikke engang være definert i $a$. Likheten $\\lim_{x \\to a} f(x) = f(a)$ gjelder bare for kontinuerlige funksjoner.',
  },
  {
    question: 'Hva er $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$?',
    options: ['$\\frac{1}{4}$', '$0$', '$\\frac{1}{2}$', '$2$'],
    explanation: 'Vi utvider med den konjugerte: $\\frac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2} \\to \\frac{1}{4}$.',
  },
  ],
  'r1-3-2': [
  {
    question: 'Hvilke tre krav må være oppfylt for at $f$ skal være kontinuerlig i $x = a$?',
    options: ['$f(a)$ er definert, $\\lim_{x \\to a} f(x)$ eksisterer, og grenseverdien er lik $f(a)$', '$f(a)$ er definert, $f$ er deriverbar i $a$, og $f\'(a) > 0$', 'Grenseverdien eksisterer, $f$ er positiv i $a$, og $f$ er definert overalt', '$f(a) = 0$, grenseverdien eksisterer, og $f$ er et polynom'],
    explanation: 'Definisjonen av kontinuitet i et punkt: (1) $f(a)$ eksisterer, (2) $\\lim_{x \\to a} f(x)$ eksisterer, (3) $\\lim_{x \\to a} f(x) = f(a)$.',
  },
  {
    question: 'Hvilken type diskontinuitet har $f(x) = \\frac{x^2 - 4}{x - 2}$ i $x = 2$?',
    options: ['Fjernbar diskontinuitet (hull)', 'Hoppunkt', 'Pol (uendelig diskontinuitet)', 'Ingen — funksjonen er kontinuerlig der'],
    explanation: 'Grenseverdien eksisterer: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = 4$, men $f(2)$ er ikke definert. Diskontinuiteten kan «fjernes» ved å definere $f(2) = 4$.',
  },
  {
    question: 'Hvilke asymptoter har $f(x) = \\frac{2x + 1}{x - 3}$?',
    options: ['Vertikal asymptote $x = 3$ og horisontal asymptote $y = 2$', 'Vertikal asymptote $x = 2$ og horisontal asymptote $y = 3$', 'Bare horisontal asymptote $y = 0$', 'Vertikal asymptote $x = -3$ og horisontal asymptote $y = 2$'],
    explanation: 'Nevneren er null i $x = 3$ (mens telleren er $7 \\neq 0$), så $x = 3$ er vertikal asymptote. Når $x \\to \\pm\\infty$ går $f(x) \\to \\frac{2x}{x} = 2$, så $y = 2$ er horisontal asymptote.',
  },
  {
    question: 'Hva kjennetegner et hoppunkt (sprangdiskontinuitet) i $x = a$?',
    options: ['De ensidige grenseverdiene eksisterer, men er forskjellige', 'Funksjonsverdiene går mot uendelig', 'Grenseverdien eksisterer, men er ulik $f(a)$', 'Funksjonen er ikke definert i noe intervall rundt $a$'],
    explanation: 'Ved et hoppunkt er $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$ — funksjonen «hopper» fra én verdi til en annen. Pol gir uendelige grenser, og fjernbar diskontinuitet har eksisterende grenseverdi.',
  },
  {
    question: 'I hvilke punkter er $f(x) = \\frac{x + 1}{x^2 - 4}$ diskontinuerlig?',
    options: ['$x = 2$ og $x = -2$', '$x = -1$', '$x = 4$', '$x = 2$, $x = -2$ og $x = -1$'],
    explanation: 'Rasjonale funksjoner er kontinuerlige overalt der de er definert. Nevneren $x^2 - 4 = 0$ gir $x = \\pm 2$, og der har funksjonen poler. $x = -1$ er bare et nullpunkt for telleren.',
  },
  ],
  'r1-3-3': [
  {
    question: 'Hva er definisjonen av den deriverte $f\'(a)$?',
    options: ['$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$', '$\\frac{f(a+h) - f(a)}{h}$', '$\\lim_{h \\to 0} \\frac{f(a) - f(h)}{a - h}$', '$\\frac{f(b) - f(a)}{b - a}$'],
    explanation: 'Den deriverte er grenseverdien av differansekvotienten når $h \\to 0$: $f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
  {
    question: 'Bruk av definisjonen på $f(x) = x^3$ gir $\\frac{(x+h)^3 - x^3}{h} = 3x^2 + 3xh + h^2$. Hva er $f\'(x)$?',
    options: ['$3x^2$', '$3x^2 + 3xh$', '$x^3$', '$3x$'],
    explanation: 'Når $h \\to 0$ forsvinner leddene med $h$: $f\'(x) = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\frac{1}{x}$?',
    options: ['$f\'(x) = -\\frac{1}{x^2}$', '$f\'(x) = \\frac{1}{x^2}$', '$f\'(x) = \\ln x$', '$f\'(x) = -\\frac{1}{x}$'],
    explanation: '$f(x) = x^{-1}$ gir $f\'(x) = -1 \\cdot x^{-2} = -\\frac{1}{x^2}$. Dette kan også vises direkte fra definisjonen.',
  },
  {
    question: 'Hvorfor er $f(x) = |x|$ ikke deriverbar i $x = 0$?',
    options: ['De ensidige grensene for differansekvotienten er $-1$ og $1$, og de er ulike', 'Fordi $f(0)$ ikke er definert', 'Fordi funksjonen ikke er kontinuerlig i $x = 0$', 'Fordi $f(x)$ aldri er negativ'],
    explanation: 'Fra venstre er stigningen $-1$, fra høyre $+1$. Siden grenseverdien av differansekvotienten ikke eksisterer, er funksjonen ikke deriverbar i knekkpunktet — selv om den er kontinuerlig der.',
  },
  {
    question: 'Hvilken numerisk tilnærming til $f\'(a)$ er vanligvis mest nøyaktig?',
    options: ['Sentral differanse: $\\frac{f(a+h) - f(a-h)}{2h}$', 'Framoverdifferanse: $\\frac{f(a+h) - f(a)}{h}$', 'Bakoverdifferanse: $\\frac{f(a) - f(a-h)}{h}$', 'Alle tre er like nøyaktige'],
    explanation: 'Sentraldifferansen bruker punkter symmetrisk rundt $a$, og feilen avtar proporsjonalt med $h^2$, mens framover- og bakoverdifferansen har feil proporsjonal med $h$.',
  },
  ],
  'r1-3-4': [
  {
    question: 'Når kan L\'Hôpitals regel brukes på $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?',
    options: ['Når grenseverdien gir en ubestemt form $\\frac{0}{0}$ eller $\\frac{\\infty}{\\infty}$', 'Alltid når uttrykket er en brøk', 'Bare når $f$ og $g$ er polynomer', 'Når grenseverdien er et endelig tall'],
    explanation: 'Regelen gjelder kun for de ubestemte formene $\\frac{0}{0}$ og $\\frac{\\infty}{\\infty}$. Brukes den ellers, kan den gi feil svar.',
  },
  {
    question: 'Hva er $\\lim_{x \\to 0} \\frac{\\sin x}{x}$?',
    options: ['$1$', '$0$', '$\\infty$', 'Grenseverdien eksisterer ikke'],
    explanation: 'Formen er $\\frac{0}{0}$. L\'Hôpital gir $\\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1$.',
  },
  {
    question: 'Hva er $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$?',
    options: ['$1$', '$0$', '$e$', '$\\infty$'],
    explanation: 'Formen er $\\frac{0}{0}$. Derivasjon av teller og nevner gir $\\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1$.',
  },
  {
    question: 'Hva er $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$?',
    options: ['$0$', '$1$', '$\\infty$', '$e$'],
    explanation: 'Formen er $\\frac{\\infty}{\\infty}$. L\'Hôpital gir $\\lim_{x \\to \\infty} \\frac{1/x}{1} = 0$. Logaritmen vokser langsommere enn enhver potens av $x$.',
  },
  {
    question: 'Hva gjør man i L\'Hôpitals regel?',
    options: ['Deriverer teller og nevner hver for seg', 'Deriverer brøken med kvotientregelen', 'Multipliserer med den konjugerte', 'Setter inn $x = a$ direkte'],
    explanation: 'En vanlig feil er å bruke kvotientregelen. L\'Hôpital sier at vi skal derivere teller og nevner separat: $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$.',
  },
  ],
  'r1-3-5': [
  {
    question: 'Hva er iterasjonsformelen i Newtons metode?',
    options: ['$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$', '$x_{n+1} = x_n + \\frac{f(x_n)}{f\'(x_n)}$', '$x_{n+1} = x_n - \\frac{f\'(x_n)}{f(x_n)}$', '$x_{n+1} = \\frac{x_n}{2} + \\frac{f(x_n)}{2}$'],
    explanation: 'Newtons metode itererer med $x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$ for å finne nullpunkter til $f$.',
  },
  {
    question: 'Hva er den geometriske tolkningen av ett steg i Newtons metode?',
    options: ['Vi følger tangenten i $(x_n, f(x_n))$ ned til der den krysser $x$-aksen', 'Vi halverer intervallet der nullpunktet ligger', 'Vi trekker en sekant gjennom to punkter på grafen', 'Vi speiler punktet om $x$-aksen'],
    explanation: 'Tangenten i $(x_n, f(x_n))$ skjærer $x$-aksen i $x_{n+1}$ — det er nettopp dette formelen uttrykker.',
  },
  {
    question: 'Vi løser $x^2 - 2 = 0$ med Newtons metode og $x_0 = 1$. Hva blir $x_1$?',
    options: ['$1{,}5$', '$1{,}4$', '$2$', '$0{,}5$'],
    explanation: '$f(1) = -1$ og $f\'(x) = 2x$ gir $f\'(1) = 2$. Dermed $x_1 = 1 - \\frac{-1}{2} = 1{,}5$.',
  },
  {
    question: 'I hvilken situasjon bryter Newtons metode sammen?',
    options: ['Når $f\'(x_n) = 0$, fordi vi da deler på null', 'Når $f(x_n) = 0$', 'Når startverdien er nøyaktig lik løsningen', 'Når funksjonen er et polynom av høy grad'],
    explanation: 'Formelen deler på $f\'(x_n)$. Hvis den deriverte er null (horisontal tangent), er steget udefinert. Hvis $f(x_n) = 0$ har vi derimot funnet løsningen.',
  },
  {
    question: 'Hva slags problem er Newtons metode laget for å løse?',
    options: ['Å finne tilnærmede løsninger av ligningen $f(x) = 0$', 'Å beregne den deriverte numerisk', 'Å finne arealet under en graf', 'Å finne eksakte løsninger av polynomligninger'],
    explanation: 'Newtons metode er en numerisk metode som gir stadig bedre tilnærminger til nullpunkter av $f$ — for eksempel for ligninger som ikke kan løses eksakt, som $\\cos x = x$.',
  },
  ],
  'r1-3-6': [
  {
    question: 'Hvilken differanseformel er sentraldifferansen?',
    options: ['$f\'(a) \\approx \\frac{f(a+h) - f(a-h)}{2h}$', '$f\'(a) \\approx \\frac{f(a+h) - f(a)}{h}$', '$f\'(a) \\approx \\frac{f(a) - f(a-h)}{h}$', '$f\'(a) \\approx \\frac{f(a+h) + f(a-h)}{2h}$'],
    explanation: 'Sentraldifferansen bruker funksjonsverdier på begge sider av $a$: $\\frac{f(a+h) - f(a-h)}{2h}$, og er som regel den mest nøyaktige av de tre formlene.',
  },
  {
    question: 'La $f(x) = x^3$ og $h = 0{,}1$. Hva gir framoverdifferansen som tilnærming til $f\'(2) = 12$?',
    options: ['$\\frac{2{,}1^3 - 2^3}{0{,}1} = 12{,}61$', '$\\frac{2{,}1^3 - 1{,}9^3}{0{,}2} = 12{,}01$', '$\\frac{2^3 - 1{,}9^3}{0{,}1} = 11{,}41$', '$12$ nøyaktig'],
    explanation: 'Framoverdifferanse: $\\frac{f(2+h) - f(2)}{h} = \\frac{9{,}261 - 8}{0{,}1} = 12{,}61$. Avviket fra $12$ er klart større enn for sentraldifferansen.',
  },
  {
    question: 'Med $f(x) = x^3$ og $h = 0{,}1$ gir sentraldifferansen $12{,}01$ og framoverdifferansen $12{,}61$ for $f\'(2) = 12$. Hva illustrerer dette?',
    options: ['At sentraldifferansen er mer nøyaktig enn framoverdifferansen', 'At framoverdifferansen alltid gir for lave verdier', 'At numerisk derivasjon ikke kan brukes på polynomer', 'At $h$ må være større enn $1$ for godt resultat'],
    explanation: 'Feilen i sentraldifferansen er proporsjonal med $h^2$, mens feilen i framover-/bakoverdifferansen er proporsjonal med $h$. Derfor er sentraldifferansen mest nøyaktig for samme $h$.',
  },
  {
    question: 'Hva er forskjellen på symbolsk og numerisk derivasjon i et CAS-verktøy?',
    options: ['Symbolsk derivasjon gir et eksakt uttrykk for $f\'(x)$, numerisk gir en tilnærmet tallverdi i et punkt', 'Numerisk derivasjon er alltid mer nøyaktig', 'Symbolsk derivasjon fungerer bare for polynomer', 'Det er ingen forskjell'],
    explanation: 'Symbolsk derivasjon bruker derivasjonsreglene og gir det eksakte uttrykket. Numerisk derivasjon beregner en tilnærming med differanseformler i et bestemt punkt.',
  },
  {
    question: 'Hva skjer typisk med feilen i sentraldifferansen når steglengden $h$ halveres?',
    options: ['Feilen reduseres til omtrent en fjerdedel', 'Feilen halveres', 'Feilen dobles', 'Feilen endres ikke'],
    explanation: 'Feilen i sentraldifferansen er proporsjonal med $h^2$. Halveres $h$, blir feilen omtrent $(1/2)^2 = 1/4$ av den opprinnelige.',
  },
  ],
  'r1-4-1': [
  {
    question: 'Hva sier potensregelen for derivasjon?',
    options: ['$(x^n)\' = n \\cdot x^{n-1}$', '$(x^n)\' = x^{n-1}$', '$(x^n)\' = n \\cdot x^{n+1}$', '$(x^n)\' = \\frac{x^{n+1}}{n+1}$'],
    explanation: 'Potensregelen: $(x^n)\' = n x^{n-1}$. Eksponenten settes foran som faktor, og den nye eksponenten reduseres med $1$.',
  },
  {
    question: 'Deriver $P(x) = 3x^4 - 2x^3 + 5x^2 - x + 4$.',
    options: ['$P\'(x) = 12x^3 - 6x^2 + 10x - 1$', '$P\'(x) = 12x^3 - 6x^2 + 10x - 1 + 4$', '$P\'(x) = 12x^4 - 6x^3 + 10x^2 - x$', '$P\'(x) = 3x^3 - 2x^2 + 5x - 1$'],
    explanation: 'Hvert ledd deriveres med potensregelen: $12x^3 - 6x^2 + 10x - 1$. Konstantleddet $4$ forsvinner (deriverer til $0$).',
  },
  {
    question: 'Hva er den deriverte av $g(x) = \\frac{1}{x}$?',
    options: ['$g\'(x) = -\\frac{1}{x^2}$', '$g\'(x) = \\frac{1}{x^2}$', '$g\'(x) = \\ln |x|$', '$g\'(x) = -\\frac{2}{x^3}$'],
    explanation: 'Vi skriver $g(x) = x^{-1}$ og bruker potensregelen: $g\'(x) = -1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sqrt{x}$?',
    options: ['$f\'(x) = \\frac{1}{2\\sqrt{x}}$', '$f\'(x) = \\sqrt{x}$', '$f\'(x) = \\frac{2}{\\sqrt{x}}$', '$f\'(x) = \\frac{1}{\\sqrt{x}}$'],
    explanation: '$f(x) = x^{1/2}$ gir $f\'(x) = \\frac{1}{2} x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.',
  },
  {
    question: 'Finn likningen for tangenten til $f(x) = x^3 - 2x + 1$ i punktet der $x = 2$.',
    options: ['$y = 10x - 15$', '$y = 10x + 5$', '$y = 5x - 5$', '$y = 12x - 19$'],
    explanation: '$f(2) = 8 - 4 + 1 = 5$ og $f\'(x) = 3x^2 - 2$ gir $f\'(2) = 10$. Tangenten: $y = 5 + 10(x - 2) = 10x - 15$.',
  },
  ],
  'r1-4-2': [
  {
    question: 'Hva er den deriverte av $f(x) = e^x$?',
    options: ['$f\'(x) = e^x$', '$f\'(x) = x e^{x-1}$', '$f\'(x) = e^{x-1}$', '$f\'(x) = \\frac{e^x}{x}$'],
    explanation: 'Eksponentialfunksjonen $e^x$ er sin egen deriverte — det er nettopp det som gjør grunntallet $e$ spesielt.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = 2^x$?',
    options: ['$f\'(x) = 2^x \\ln 2$', '$f\'(x) = 2^x$', '$f\'(x) = x \\cdot 2^{x-1}$', '$f\'(x) = \\frac{2^x}{\\ln 2}$'],
    explanation: 'For generelt grunntall gjelder $(a^x)\' = a^x \\ln a$, så $(2^x)\' = 2^x \\ln 2$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\ln x$?',
    options: ['$f\'(x) = \\frac{1}{x}$', '$f\'(x) = \\ln x$', '$f\'(x) = \\frac{1}{\\ln x}$', '$f\'(x) = e^x$'],
    explanation: 'Den naturlige logaritmen har derivert $(\\ln x)\' = \\frac{1}{x}$ for $x > 0$.',
  },
  {
    question: 'Deriver $f(x) = x^2 + 3e^x - 2\\ln x$.',
    options: ['$f\'(x) = 2x + 3e^x - \\frac{2}{x}$', '$f\'(x) = 2x + 3e^x - \\frac{2}{\\ln x}$', '$f\'(x) = 2x + 3e^{x-1} - \\frac{2}{x}$', '$f\'(x) = 2x + 3xe^{x-1} - 2x$'],
    explanation: 'Ledd for ledd: $(x^2)\' = 2x$, $(3e^x)\' = 3e^x$ og $(-2\\ln x)\' = -\\frac{2}{x}$.',
  },
  {
    question: 'Finn likningen for tangenten til $f(x) = e^x$ i punktet $(0, 1)$.',
    options: ['$y = x + 1$', '$y = ex + 1$', '$y = x$', '$y = e^x$'],
    explanation: '$f\'(x) = e^x$ gir stigningstall $f\'(0) = 1$. Tangenten gjennom $(0, 1)$: $y = x + 1$.',
  },
  ],
  'r1-4-3': [
  {
    question: 'Hva sier kjerneregelen om den deriverte av $h(x) = f(g(x))$?',
    options: ['$h\'(x) = f\'(g(x)) \\cdot g\'(x)$', '$h\'(x) = f\'(g\'(x))$', '$h\'(x) = f\'(x) \\cdot g\'(x)$', '$h\'(x) = f(g\'(x)) \\cdot g(x)$'],
    explanation: 'Kjerneregelen: Deriver den ytre funksjonen med kjernen urørt, og multipliser med den deriverte av kjernen: $h\'(x) = f\'(g(x)) \\cdot g\'(x)$.',
  },
  {
    question: 'Deriver $f(x) = (x^2 + 1)^5$.',
    options: ['$f\'(x) = 10x(x^2 + 1)^4$', '$f\'(x) = 5(x^2 + 1)^4$', '$f\'(x) = 5(2x)^4$', '$f\'(x) = 10x(x^2 + 1)^5$'],
    explanation: 'Ytre funksjon $u^5$ og kjerne $u = x^2 + 1$: $f\'(x) = 5(x^2+1)^4 \\cdot 2x = 10x(x^2+1)^4$.',
  },
  {
    question: 'Deriver $g(x) = e^{x^2}$.',
    options: ['$g\'(x) = 2x e^{x^2}$', '$g\'(x) = e^{2x}$', '$g\'(x) = x^2 e^{x^2 - 1}$', '$g\'(x) = e^{x^2}$'],
    explanation: 'Kjernen er $x^2$ med derivert $2x$: $g\'(x) = e^{x^2} \\cdot 2x = 2x e^{x^2}$.',
  },
  {
    question: 'Deriver $h(x) = \\ln(x^2 + 1)$.',
    options: ['$h\'(x) = \\frac{2x}{x^2 + 1}$', '$h\'(x) = \\frac{1}{x^2 + 1}$', '$h\'(x) = \\frac{2x}{\\ln(x^2 + 1)}$', '$h\'(x) = 2x \\ln(x^2 + 1)$'],
    explanation: '$(\\ln u)\' = \\frac{u\'}{u}$ med kjerne $u = x^2 + 1$: $h\'(x) = \\frac{2x}{x^2 + 1}$.',
  },
  {
    question: 'Deriver $f(x) = \\sqrt{x^2 + 4}$.',
    options: ['$f\'(x) = \\frac{x}{\\sqrt{x^2 + 4}}$', '$f\'(x) = \\frac{1}{2\\sqrt{x^2 + 4}}$', '$f\'(x) = \\frac{2x}{\\sqrt{x^2 + 4}}$', '$f\'(x) = \\sqrt{2x}$'],
    explanation: '$f(x) = (x^2+4)^{1/2}$ gir $f\'(x) = \\frac{1}{2}(x^2+4)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+4}}$.',
  },
  ],
  'r1-4-4': [
  {
    question: 'Hva sier produktregelen om $(u \\cdot v)\'$?',
    options: ['$(uv)\' = u\'v + uv\'$', '$(uv)\' = u\'v\'$', '$(uv)\' = u\'v - uv\'$', '$(uv)\' = u\' + v\'$'],
    explanation: 'Produktregelen: $(uv)\' = u\'v + uv\'$. En vanlig feil er å tro at den deriverte av et produkt er produktet av de deriverte.',
  },
  {
    question: 'Deriver $h(x) = x^2 \\cdot e^x$.',
    options: ['$h\'(x) = 2x e^x + x^2 e^x$', '$h\'(x) = 2x e^x$', '$h\'(x) = 2x \\cdot e^x \\cdot x^2$', '$h\'(x) = x^2 e^{x-1} \\cdot 2x$'],
    explanation: 'Produktregelen med $u = x^2$ og $v = e^x$: $h\'(x) = 2x \\cdot e^x + x^2 \\cdot e^x = (2x + x^2)e^x$.',
  },
  {
    question: 'Hva sier kvotientregelen om $\\left(\\frac{u}{v}\\right)\'$?',
    options: ['$\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$', '$\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v + uv\'}{v^2}$', '$\\left(\\frac{u}{v}\\right)\' = \\frac{u\'}{v\'}$', '$\\left(\\frac{u}{v}\\right)\' = \\frac{uv\' - u\'v}{v^2}$'],
    explanation: 'Kvotientregelen: $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$. Husk minustegnet og rekkefølgen i telleren.',
  },
  {
    question: 'Hva er den deriverte av $\\tan x$?',
    options: ['$\\frac{1}{\\cos^2 x}$', '$\\frac{1}{\\sin^2 x}$', '$-\\frac{1}{\\cos^2 x}$', '$\\sec x$'],
    explanation: 'Kvotientregelen på $\\tan x = \\frac{\\sin x}{\\cos x}$ gir $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$.',
  },
  {
    question: 'Deriver $h(x) = x^2 \\cdot e^{3x}$.',
    options: ['$h\'(x) = 2x e^{3x} + 3x^2 e^{3x}$', '$h\'(x) = 2x e^{3x} + x^2 e^{3x}$', '$h\'(x) = 6x e^{3x}$', '$h\'(x) = 2x \\cdot 3e^{3x}$'],
    explanation: 'Produktregel kombinert med kjerneregel: $(x^2)\' = 2x$ og $(e^{3x})\' = 3e^{3x}$, så $h\'(x) = 2xe^{3x} + 3x^2 e^{3x}$.',
  },
  ],
  'r1-4-5': [
  {
    question: 'Hva er sammenhengen mellom den deriverte til $f$ og den deriverte til den omvendte funksjonen $f^{-1}$?',
    options: ['$(f^{-1})\'(b) = \\frac{1}{f\'(a)}$ der $b = f(a)$', '$(f^{-1})\'(b) = -f\'(b)$', '$(f^{-1})\'(b) = f\'(b)$', '$(f^{-1})\'(b) = \\frac{1}{f\'(b)}$'],
    explanation: 'Hvis $b = f(a)$, er $(f^{-1})\'(b) = \\frac{1}{f\'(a)} = \\frac{1}{f\'(f^{-1}(b))}$. Merk at den deriverte av $f$ evalueres i $a$, ikke i $b$.',
  },
  {
    question: 'Hva er den deriverte av $\\arctan x$?',
    options: ['$\\frac{1}{1 + x^2}$', '$\\frac{1}{\\sqrt{1 - x^2}}$', '$-\\frac{1}{1 + x^2}$', '$\\frac{1}{\\cos^2 x}$'],
    explanation: 'Med formelen for derivasjon av omvendte funksjoner og $\\tan$ som utgangspunkt får vi $(\\arctan x)\' = \\frac{1}{1 + x^2}$.',
  },
  {
    question: 'Hva er den deriverte av $\\arcsin x$ for $|x| < 1$?',
    options: ['$\\frac{1}{\\sqrt{1 - x^2}}$', '$\\frac{1}{1 + x^2}$', '$-\\frac{1}{\\sqrt{1 - x^2}}$', '$\\cos x$'],
    explanation: '$(\\arcsin x)\' = \\frac{1}{\\sqrt{1 - x^2}}$. Den negative varianten, $-\\frac{1}{\\sqrt{1-x^2}}$, er den deriverte av $\\arccos x$.',
  },
  {
    question: 'Gitt sirkelen $x^2 + y^2 = 1$. Hva gir implisitt derivasjon for $\\frac{dy}{dx}$?',
    options: ['$\\frac{dy}{dx} = -\\frac{x}{y}$', '$\\frac{dy}{dx} = \\frac{x}{y}$', '$\\frac{dy}{dx} = -\\frac{y}{x}$', '$\\frac{dy}{dx} = 2x + 2y$'],
    explanation: 'Derivasjon av begge sider mhp. $x$: $2x + 2y \\cdot y\' = 0$, som gir $y\' = -\\frac{x}{y}$.',
  },
  {
    question: 'Hvorfor dukker faktoren $y\'$ opp når vi deriverer $y^2$ implisitt med hensyn på $x$?',
    options: ['Fordi $y$ er en funksjon av $x$, og kjerneregelen gir $(y^2)\' = 2y \\cdot y\'$', 'Fordi $y$ alltid er lik $x$', 'Fordi vi bruker produktregelen på $y \\cdot y$ og $y\' = 1$', 'Det er en konvensjon uten matematisk begrunnelse'],
    explanation: 'I implisitt derivasjon oppfattes $y$ som en funksjon $y(x)$. Kjerneregelen gir da $\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}$.',
  },
  ],
  'r1-4-6': [
  {
    question: 'Hva forteller fortegnet til $f\'(x)$ om grafen til $f$?',
    options: ['$f\'(x) > 0$ betyr at $f$ vokser, $f\'(x) < 0$ at $f$ avtar', '$f\'(x) > 0$ betyr at grafen ligger over $x$-aksen', '$f\'(x) > 0$ betyr at grafen vender den hule siden opp', '$f\'(x) > 0$ betyr at $f$ har et toppunkt'],
    explanation: 'Den deriverte er stigningstallet til tangenten: positiv derivert gir voksende funksjon, negativ gir avtagende. Krumning bestemmes av $f\'\'$, ikke $f\'$.',
  },
  {
    question: 'Finn ekstremalpunktene til $f(x) = x^3 - 3x$.',
    options: ['Toppunkt $(-1, 2)$ og bunnpunkt $(1, -2)$', 'Toppunkt $(1, -2)$ og bunnpunkt $(-1, 2)$', 'Bare ett bunnpunkt i $(0, 0)$', 'Toppunkt $(\\sqrt{3}, 0)$ og bunnpunkt $(-\\sqrt{3}, 0)$'],
    explanation: '$f\'(x) = 3x^2 - 3 = 0$ gir $x = \\pm 1$. Fortegnsskjema viser at $f\'$ skifter fra $+$ til $-$ i $x = -1$ (toppunkt, $f(-1) = 2$) og fra $-$ til $+$ i $x = 1$ (bunnpunkt, $f(1) = -2$).',
  },
  {
    question: 'Hva kjennetegner et vendepunkt?',
    options: ['$f\'\'(x) = 0$ og $f\'\'$ skifter fortegn, slik at grafen skifter krumning', '$f\'(x) = 0$ og $f\'$ skifter fortegn', 'Grafen krysser $x$-aksen', 'Funksjonen skifter fra positiv til negativ'],
    explanation: 'I et vendepunkt skifter grafen krumning (fra hul opp til hul ned eller omvendt). Det skjer der $f\'\'$ skifter fortegn — det er ikke nok at $f\'\'(x) = 0$.',
  },
  {
    question: 'Hvilke asymptoter har $f(x) = \\frac{2x + 1}{x - 1}$?',
    options: ['Vertikal $x = 1$ og horisontal $y = 2$', 'Vertikal $x = 2$ og horisontal $y = 1$', 'Vertikal $x = 1$ og skrå $y = 2x + 1$', 'Bare horisontal asymptote $y = 0$'],
    explanation: 'Nevneren er null i $x = 1$ (telleren er $3 \\neq 0$), så $x = 1$ er vertikal asymptote. Teller og nevner har samme grad, så $y = \\frac{2}{1} = 2$ er horisontal asymptote.',
  },
  {
    question: 'Når har en rasjonal funksjon en skrå asymptote?',
    options: ['Når graden i telleren er nøyaktig én høyere enn graden i nevneren', 'Når graden i telleren er lavere enn i nevneren', 'Når teller og nevner har samme grad', 'Når nevneren ikke har nullpunkter'],
    explanation: 'Hvis tellergraden er nevnergraden pluss $1$, gir polynomdivisjon $f(x) = ax + b + \\frac{r(x)}{q(x)}$, og linjen $y = ax + b$ er skrå asymptote.',
  },
  ],
  'r1-4-7': [
  {
    question: 'Hva er det sentrale steget i en oppgave med relaterte rater?',
    options: ['Å derivere sammenhengen mellom variablene implisitt med hensyn på tiden $t$', 'Å derivere funksjonen med hensyn på $x$', 'Å integrere raten over tid', 'Å sette opp en tabell over verdier'],
    explanation: 'Vi finner en ligning som knytter størrelsene sammen, og deriverer den implisitt med hensyn på $t$. Da knyttes endringsratene $\\frac{dV}{dt}$, $\\frac{dr}{dt}$ osv. sammen.',
  },
  {
    question: 'En kuleformet ballong blåses opp med $\\frac{dV}{dt} = 100$ cm³/s. Hvor fort øker radien når $r = 5$ cm? ($V = \\frac{4}{3}\\pi r^3$)',
    options: ['$\\frac{dr}{dt} = \\frac{1}{\\pi}$ cm/s', '$\\frac{dr}{dt} = \\frac{100}{\\pi}$ cm/s', '$\\frac{dr}{dt} = 4\\pi$ cm/s', '$\\frac{dr}{dt} = \\frac{4}{3}\\pi$ cm/s'],
    explanation: 'Derivasjon gir $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Med $r = 5$: $100 = 4\\pi \\cdot 25 \\cdot \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$, så $\\frac{dr}{dt} = \\frac{1}{\\pi} \\approx 0{,}32$ cm/s.',
  },
  {
    question: 'En 5 m lang stige står mot en vegg. Bunnen sklir utover med $0{,}5$ m/s. Hvor fort synker toppen når bunnen er 3 m fra veggen?',
    options: ['$0{,}375$ m/s', '$0{,}5$ m/s', '$0{,}3$ m/s', '$0{,}667$ m/s'],
    explanation: 'Pytagoras: $x^2 + y^2 = 25$, så $y = 4$ når $x = 3$. Derivasjon: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$, som gir $\\frac{dy}{dt} = -\\frac{3 \\cdot 0{,}5}{4} = -0{,}375$ m/s. Toppen synker med $0{,}375$ m/s.',
  },
  {
    question: 'Hvilken derivasjonsregel er grunnlaget for at $\\frac{d}{dt} f(x) = f\'(x) \\cdot \\frac{dx}{dt}$?',
    options: ['Kjerneregelen', 'Produktregelen', 'Kvotientregelen', 'Potensregelen'],
    explanation: 'Når $x$ avhenger av $t$, er $f(x(t))$ en sammensatt funksjon, og kjerneregelen gir $\\frac{d}{dt}f(x(t)) = f\'(x) \\cdot \\frac{dx}{dt}$.',
  },
  {
    question: 'Når i løsningen av et relatert rate-problem skal de konkrete tallverdiene settes inn?',
    options: ['Etter at ligningen er derivert med hensyn på tiden', 'Før derivasjonen, så blir regningen enklere', 'Det spiller ingen rolle', 'Tallverdier brukes ikke i slike problemer'],
    explanation: 'Setter vi inn tallverdier for variablene før derivasjonen, blir de behandlet som konstanter og deriverer til null — og svaret blir feil. Deriver først, sett inn etterpå.',
  },
  ],
  'r1-4-8': [
  {
    question: 'Hva sier ekstremalverdisetningen?',
    options: ['En kontinuerlig funksjon på et lukket intervall $[a, b]$ har både globalt maksimum og globalt minimum', 'Alle funksjoner har et globalt maksimum', 'En deriverbar funksjon har alltid et stasjonært punkt', 'Globale ekstremalpunkter finnes bare i indre punkter'],
    explanation: 'Ekstremalverdisetningen garanterer globalt maksimum og minimum når funksjonen er kontinuerlig og intervallet er lukket og begrenset.',
  },
  {
    question: 'Hvor kan de globale ekstremalpunktene til en kontinuerlig funksjon på $[a, b]$ ligge?',
    options: ['I stasjonære punkter, i punkter der $f\'$ ikke eksisterer, eller i endepunktene', 'Bare der $f\'(x) = 0$', 'Bare i endepunktene', 'Bare der $f\'\'(x) = 0$'],
    explanation: 'Kandidatene er: stasjonære punkter ($f\'(x) = 0$), punkter der den deriverte ikke eksisterer, og endepunktene $a$ og $b$. Alle må sjekkes.',
  },
  {
    question: 'Hva er den globale maksimumsverdien til $f(x) = x^3 - 3x + 1$ på $[-2, 2]$?',
    options: ['$3$', '$1$', '$-1$', '$5$'],
    explanation: '$f\'(x) = 3x^2 - 3 = 0$ gir $x = \\pm 1$. Kandidatverdier: $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Største verdi er $3$ (i både $x = -1$ og $x = 2$).',
  },
  {
    question: 'En bonde har 200 m gjerde og lager en rektangulær innhegning mot en elv (ingen gjerde langs elven). Hva er det største arealet?',
    options: ['$5000$ m²', '$2500$ m²', '$10\\,000$ m²', '$4000$ m²'],
    explanation: 'Med bredde $x$ og lengde $200 - 2x$ er $A(x) = x(200 - 2x)$. $A\'(x) = 200 - 4x = 0$ gir $x = 50$, og $A(50) = 50 \\cdot 100 = 5000$ m².',
  },
  {
    question: 'Hva er forskjellen på et lokalt og et globalt maksimum?',
    options: ['Et lokalt maksimum er størst i et område rundt punktet, et globalt er størst i hele definisjonsområdet', 'De er alltid det samme', 'Et globalt maksimum må ligge i et indre punkt', 'Et lokalt maksimum har alltid $f\'\'(x) > 0$'],
    explanation: 'Lokalt maksimum: $f(c) \\geq f(x)$ for $x$ nær $c$. Globalt maksimum: $f(c) \\geq f(x)$ for alle $x$ i definisjonsområdet. Et globalt maksimum kan også ligge i et endepunkt.',
  },
  ],
  'r1-4-9': [
  {
    question: 'Hva er den typiske fremgangsmåten i et optimeringsproblem med to variabler og en bibetingelse?',
    options: ['Bruk bibetingelsen til å uttrykke målfunksjonen med én variabel, og finn så ekstremalpunkter med derivasjon', 'Deriver begge variablene hver for seg', 'Sett begge variablene lik hverandre', 'Prøv tilfeldige verdier til man finner den beste'],
    explanation: 'Standardmetoden: still opp målfunksjonen, bruk bibetingelsen til å eliminere én variabel, deriver, og finn kandidatpunkter der den deriverte er null.',
  },
  {
    question: 'Fra et ark på $20 \\times 30$ cm lages en åpen boks ved å klippe kvadrater med side $x$ fra hjørnene. Hvilket uttrykk gir volumet?',
    options: ['$V(x) = x(20 - 2x)(30 - 2x)$', '$V(x) = x(20 - x)(30 - x)$', '$V(x) = 20 \\cdot 30 \\cdot x$', '$V(x) = x^2(20 - 2x)(30 - 2x)$'],
    explanation: 'Bunnen får sider $20 - 2x$ og $30 - 2x$ (det klippes fra begge sider), og høyden blir $x$: $V(x) = x(20-2x)(30-2x)$.',
  },
  {
    question: 'En lukket sylinder skal ha gitt volum og minst mulig overflate. Hvilken sammenheng gjelder i optimum?',
    options: ['Høyden er lik diameteren: $h = 2r$', 'Høyden er lik radien: $h = r$', 'Radien er lik diameteren', 'Høyden er lik $\\pi r$'],
    explanation: 'Med $V = \\pi r^2 h$ fast og $O = 2\\pi r^2 + 2\\pi r h$ gir derivasjon at optimum oppnås når $h = 2r$ — sylinderen er like høy som den er bred.',
  },
  {
    question: 'Et firma har inntekt $I(x)$ og kostnad $K(x)$. Når er overskuddet størst?',
    options: ['Når $I\'(x) = K\'(x)$, altså grenseinntekt lik grensekostnad', 'Når $I(x) = K(x)$', 'Når $K\'(x) = 0$', 'Når $I(x)$ er størst'],
    explanation: 'Overskuddet er $O(x) = I(x) - K(x)$, og $O\'(x) = 0$ gir $I\'(x) = K\'(x)$: produksjonen bør økes til den siste enheten koster like mye som den smaker.',
  },
  {
    question: 'Hvorfor må man kontrollere kandidatpunktet etter å ha løst $f\'(x) = 0$ i et praktisk optimeringsproblem?',
    options: ['Fordi punktet kan være et minimum i stedet for et maksimum, og det må ligge i det gyldige definisjonsområdet', 'Fordi den deriverte alltid har flere nullpunkter', 'Fordi praktiske problemer ikke kan løses med derivasjon', 'Det er unødvendig — $f\'(x) = 0$ gir alltid svaret'],
    explanation: '$f\'(x) = 0$ gir bare kandidater. Med fortegnslinje eller andrederiverttest sjekker vi om det er maksimum eller minimum, og vi må forsikre oss om at løsningen gir mening fysisk (f.eks. positiv lengde).',
  },
  ],
  'r1-5-1': [
  {
    question: 'En befolkning vokser med $2\\%$ per år. Hva er vekstfaktoren i modellen $N(t) = N_0 \\cdot a^t$?',
    options: ['$a = 1{,}02$', '$a = 0{,}02$', '$a = 1{,}2$', '$a = 2$'],
    explanation: 'Vekst på $2\\%$ betyr at vi hvert år multipliserer med $1 + \\frac{2}{100} = 1{,}02$.',
  },
  {
    question: 'En bilverdi synker med $15\\%$ per år. Hva er vekstfaktoren?',
    options: ['$0{,}85$', '$1{,}15$', '$-0{,}15$', '$0{,}15$'],
    explanation: 'Nedgang på $15\\%$ gir vekstfaktor $1 - 0{,}15 = 0{,}85$.',
  },
  {
    question: 'En størrelse vokser med $3\\%$ per år. Hva er doblingstiden?',
    options: ['$T = \\frac{\\ln 2}{\\ln 1{,}03} \\approx 23{,}4$ år', '$T = \\frac{100}{3} \\approx 33{,}3$ år', '$T = \\frac{\\ln 1{,}03}{\\ln 2} \\approx 0{,}04$ år', '$T = 2 \\cdot 3 = 6$ år'],
    explanation: 'Vi løser $1{,}03^T = 2$: $T = \\frac{\\ln 2}{\\ln 1{,}03} \\approx 23{,}4$ år.',
  },
  {
    question: 'For modellen $N(t) = N_0 e^{kt}$ gjelder $N\'(t) = k \\cdot N(t)$. Hva betyr det?',
    options: ['Veksthastigheten er proporsjonal med størrelsen selv', 'Veksthastigheten er konstant', 'Størrelsen vokser lineært', 'Veksthastigheten avtar med tiden'],
    explanation: 'Kjennetegnet på eksponentiell vekst er at endringen per tidsenhet er proporsjonal med den aktuelle mengden — jo mer som finnes, jo raskere vokser det.',
  },
  {
    question: 'Du setter 100 000 kr i banken med $5\\%$ årlig rente. Omtrent hvor mye har du etter 20 år?',
    options: ['Ca. 265 000 kr', 'Ca. 200 000 kr', 'Ca. 150 000 kr', 'Ca. 500 000 kr'],
    explanation: '$100\\,000 \\cdot 1{,}05^{20} \\approx 100\\,000 \\cdot 2{,}653 \\approx 265\\,000$ kr. Rentes rente gir mer enn en dobling, selv om $20 \\cdot 5\\% = 100\\%$ skulle tilsi nøyaktig dobling.',
  },
  ],
  'r1-5-2': [
  {
    question: 'Hva representerer $K$ i den logistiske modellen $N(t) = \\frac{K}{1 + Ce^{-rt}}$?',
    options: ['Bærekapasiteten — den øvre grensen $N(t)$ nærmer seg', 'Startverdien', 'Vekstraten', 'Tiden ved vendepunktet'],
    explanation: '$K$ er bærekapasiteten. Når $t \\to \\infty$ går $e^{-rt} \\to 0$, og $N(t) \\to K$.',
  },
  {
    question: 'En fiskedam rommer maksimalt $K = 10\\,000$ fisk, og vi setter ut $N_0 = 500$. Hva blir konstanten $C = \\frac{K - N_0}{N_0}$?',
    options: ['$C = 19$', '$C = 20$', '$C = 0{,}05$', '$C = 9500$'],
    explanation: '$C = \\frac{10\\,000 - 500}{500} = \\frac{9500}{500} = 19$.',
  },
  {
    question: 'Når er veksthastigheten størst i en logistisk modell?',
    options: ['Ved vendepunktet, der $N = \\frac{K}{2}$', 'Ved starten, der $N = N_0$', 'Når $N$ nærmer seg $K$', 'Veksthastigheten er konstant'],
    explanation: 'Den logistiske kurven (S-kurven) vokser raskest ved vendepunktet, som inntreffer når bestanden er halvparten av bærekapasiteten.',
  },
  {
    question: 'Hva skiller logistisk vekst fra eksponentiell vekst?',
    options: ['Logistisk vekst flater ut mot en øvre grense, mens eksponentiell vekst fortsetter ubegrenset', 'Logistisk vekst er alltid raskere', 'Eksponentiell vekst har en bærekapasitet', 'Logistisk vekst er lineær i starten'],
    explanation: 'Logistisk vekst ligner eksponentiell vekst i starten, men bremser når bestanden nærmer seg bærekapasiteten $K$. Eksponentiell vekst har ingen slik grense.',
  },
  {
    question: 'For modellen $N(t) = \\frac{1000}{1 + 9e^{-0{,}2t}}$: Hva er $N(0)$?',
    options: ['$100$', '$1000$', '$9$', '$111$'],
    explanation: '$N(0) = \\frac{1000}{1 + 9e^0} = \\frac{1000}{1 + 9} = \\frac{1000}{10} = 100$.',
  },
  ],
  'r1-5-3': [
  {
    question: 'Hva betyr det at en regresjonsmodell har $R^2 = 0{,}98$?',
    options: ['Modellen forklarer $98\\%$ av variasjonen i dataene — en svært god tilpasning', 'Modellen er feil i $98\\%$ av tilfellene', 'Dataene vokser med $98\\%$ per tidsenhet', 'Modellen har $98$ datapunkter'],
    explanation: 'Forklaringsgraden $R^2$ måler hvor godt modellen fanger opp variasjonen i dataene. Verdier nær $1$ betyr god tilpasning.',
  },
  {
    question: 'Et datasett vokser raskt i starten, men flater ut mot en øvre grense. Hvilken modelltype passer best?',
    options: ['Logistisk modell', 'Eksponentiell modell', 'Lineær modell', 'Potensmodell'],
    explanation: 'Utflating mot en grense (S-form) er kjennetegnet på logistisk vekst. En eksponentiell modell ville fortsatt å vokse ubegrenset.',
  },
  {
    question: 'Når passer en eksponentiell modell godt til et datasett?',
    options: ['Når dataene vokser med tilnærmet samme prosent per tidsenhet', 'Når dataene øker med samme antall per tidsenhet', 'Når dataene veksler mellom å øke og avta', 'Når dataene har en øvre grense'],
    explanation: 'Eksponentiell vekst kjennetegnes ved konstant relativ (prosentvis) endring. Konstant absolutt endring gir derimot en lineær modell.',
  },
  {
    question: 'Hvorfor bør man være forsiktig med å bruke en modell utenfor dataområdet den er tilpasset på?',
    options: ['Ekstrapolering er usikkert — utviklingen kan endre seg utenfor området der vi har data', 'Fordi $R^2$ alltid blir negativ utenfor dataområdet', 'Fordi regresjon bare fungerer for heltall', 'Det er uproblematisk så lenge $R^2$ er høy'],
    explanation: 'En modell beskriver dataene i det observerte området. Utenfor dette kan virkeligheten avvike kraftig — f.eks. kan eksponentiell vekst i praksis flate ut. Høy $R^2$ garanterer ingenting om fremtiden.',
  },
  {
    question: 'Hva betyr $R^2 = 1$ for en regresjonsmodell?',
    options: ['Alle datapunktene ligger nøyaktig på modellkurven', 'Modellen forklarer ingenting av variasjonen', 'Modellen har stigningstall $1$', 'Dataene er normalfordelte'],
    explanation: '$R^2 = 1$ betyr perfekt tilpasning: modellens avvik fra datapunktene er null.',
  },
  ],
  'r1-6-1': [
  {
    question: 'Hva kjennetegner en vektor?',
    options: ['Den har både lengde og retning', 'Den har bare lengde', 'Den har bare retning', 'Den er alltid festet i origo'],
    explanation: 'En vektor er en størrelse med både lengde og retning. To vektorer er like hvis de har samme lengde og samme retning, uansett hvor de er plassert.',
  },
  {
    question: 'Finn $\\vec{AB}$ på komponentform når $A = (2, 3)$ og $B = (5, 7)$.',
    options: ['$[3, 4]$', '$[7, 10]$', '$[-3, -4]$', '$[2, 5]$'],
    explanation: '$\\vec{AB} = [5 - 2, 7 - 3] = [3, 4]$ — koordinatene til sluttpunktet minus koordinatene til startpunktet.',
  },
  {
    question: 'La $\\vec{u} = [3, 2]$ og $\\vec{v} = [-1, 4]$. Hva er $\\vec{u} + \\vec{v}$?',
    options: ['$[2, 6]$', '$[4, 6]$', '$[2, -2]$', '$[-3, 8]$'],
    explanation: 'Vektorer adderes komponentvis: $[3 + (-1), 2 + 4] = [2, 6]$.',
  },
  {
    question: 'Er vektorene $\\vec{u} = [2, 6]$ og $\\vec{v} = [1, 3]$ parallelle?',
    options: ['Ja, fordi $\\vec{u} = 2\\vec{v}$', 'Nei, fordi de har ulik lengde', 'Ja, fordi begge har positive komponenter', 'Nei, fordi $2 + 6 \\neq 1 + 3$'],
    explanation: 'To vektorer er parallelle hvis den ene er et skalart multiplum av den andre. Her er $[2, 6] = 2 \\cdot [1, 3]$, så de er parallelle. Lengden trenger ikke være lik.',
  },
  {
    question: 'Finn midtpunktet $M$ på linjestykket mellom $A = (1, 3)$ og $B = (5, 7)$.',
    options: ['$M = (3, 5)$', '$M = (4, 4)$', '$M = (6, 10)$', '$M = (2, 2)$'],
    explanation: 'Midtpunktet har koordinatene $\\left(\\frac{1+5}{2}, \\frac{3+7}{2}\\right) = (3, 5)$.',
  },
  ],
  'r1-6-2': [
  {
    question: 'Hva er lengden av vektoren $\\vec{u} = [3, 4]$?',
    options: ['$5$', '$7$', '$\\sqrt{7}$', '$12$'],
    explanation: '$|\\vec{u}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
  },
  {
    question: 'Hva er enhetsvektoren i samme retning som $\\vec{v} = [3, 4]$?',
    options: ['$\\left[\\frac{3}{5}, \\frac{4}{5}\\right]$', '$[1, 1]$', '$\\left[\\frac{1}{3}, \\frac{1}{4}\\right]$', '$[3, 4]$'],
    explanation: 'Enhetsvektoren er $\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|} = \\frac{1}{5}[3, 4] = \\left[\\frac{3}{5}, \\frac{4}{5}\\right]$, som har lengde $1$.',
  },
  {
    question: 'Regn ut skalarproduktet $\\vec{u} \\cdot \\vec{v}$ når $\\vec{u} = [2, 3]$ og $\\vec{v} = [4, -1]$.',
    options: ['$5$', '$11$', '$[8, -3]$', '$-5$'],
    explanation: '$\\vec{u} \\cdot \\vec{v} = 2 \\cdot 4 + 3 \\cdot (-1) = 8 - 3 = 5$. Skalarproduktet er et tall, ikke en vektor.',
  },
  {
    question: 'Hvordan avgjør vi om to vektorer er ortogonale (står vinkelrett på hverandre)?',
    options: ['Skalarproduktet er null: $\\vec{u} \\cdot \\vec{v} = 0$', 'Lengdene er like: $|\\vec{u}| = |\\vec{v}|$', 'Summen er nullvektoren', 'Den ene er et multiplum av den andre'],
    explanation: '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. For eksempel er $[2,3] \\cdot [3,-2] = 6 - 6 = 0$.',
  },
  {
    question: 'Finn vinkelen mellom $\\vec{u} = [1, \\sqrt{3}]$ og $\\vec{v} = [\\sqrt{3}, 1]$.',
    options: ['$30°$', '$60°$', '$45°$', '$90°$'],
    explanation: '$\\vec{u} \\cdot \\vec{v} = \\sqrt{3} + \\sqrt{3} = 2\\sqrt{3}$ og $|\\vec{u}| = |\\vec{v}| = 2$. $\\cos\\theta = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$, så $\\theta = 30°$.',
  },
  ],
  'r1-6-3': [
  {
    question: 'Hvilken parameterframstilling beskriver linjen gjennom $P = (1, 2)$ med retningsvektor $\\vec{v} = [3, 4]$?',
    options: ['$x = 1 + 3t, \\; y = 2 + 4t$', '$x = 3 + t, \\; y = 4 + 2t$', '$x = 1 + 4t, \\; y = 2 + 3t$', '$x = 3t, \\; y = 4t$'],
    explanation: 'Parameterframstillingen er $\\vec{r}(t) = \\vec{p} + t\\vec{v}$: startpunktets koordinater pluss $t$ ganger retningsvektorens komponenter.',
  },
  {
    question: 'Finn den kartesiske ligningen for linjen $x = 1 + 2t, \\; y = 3 + 4t$.',
    options: ['$y = 2x + 1$', '$y = 4x + 3$', '$y = \\frac{1}{2}x + 3$', '$y = 2x - 1$'],
    explanation: 'Fra første ligning: $t = \\frac{x - 1}{2}$. Innsatt: $y = 3 + 4 \\cdot \\frac{x-1}{2} = 3 + 2(x - 1) = 2x + 1$.',
  },
  {
    question: 'Hvilken parameterframstilling beskriver sirkelen med sentrum $(2, 3)$ og radius $4$?',
    options: ['$x = 2 + 4\\cos t, \\; y = 3 + 4\\sin t$', '$x = 4 + 2\\cos t, \\; y = 4 + 3\\sin t$', '$x = 2\\cos t, \\; y = 3\\sin t$', '$x = 2 + 3\\cos t, \\; y = 3 + 2\\sin t$'],
    explanation: 'Sirkel med sentrum $(h, k)$ og radius $r$: $x = h + r\\cos t$, $y = k + r\\sin t$. Her: $x = 2 + 4\\cos t$, $y = 3 + 4\\sin t$.',
  },
  {
    question: 'Et punkt beveger seg langs $\\vec{r}(t) = [x(t), y(t)]$. Hva er hastighetsvektoren?',
    options: ['$\\vec{v}(t) = [x\'(t), y\'(t)]$', '$\\vec{v}(t) = [x(t), y(t)]$', '$\\vec{v}(t) = \\sqrt{x(t)^2 + y(t)^2}$', '$\\vec{v}(t) = [y(t), -x(t)]$'],
    explanation: 'Hastighetsvektoren er den deriverte av posisjonsvektoren: $\\vec{v}(t) = \\vec{r}\'(t) = [x\'(t), y\'(t)]$. Den er tangent til banen.',
  },
  {
    question: 'En partikkel følger banen $\\vec{r}(t) = [1 + 2t, 3 + 4t]$ (meter, sekunder). Hva er farten?',
    options: ['$\\sqrt{20} = 2\\sqrt{5}$ m/s', '$6$ m/s', '$\\sqrt{10}$ m/s', '$20$ m/s'],
    explanation: 'Hastighetsvektoren er $\\vec{v} = [2, 4]$, og farten er $|\\vec{v}| = \\sqrt{2^2 + 4^2} = \\sqrt{20} = 2\\sqrt{5} \\approx 4{,}47$ m/s.',
  },
  ],
  'r1-6-4': [
  {
    question: 'Finn avstanden mellom punktene $A = (1, 2)$ og $B = (5, -1)$.',
    options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
    explanation: '$|AB| = \\sqrt{(5-1)^2 + (-1-2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.',
  },
  {
    question: 'Hva er lengden av vektoren $\\vec{u} = (3, -4)$?',
    options: ['$5$', '$-1$', '$7$', '$\\sqrt{5}$'],
    explanation: '$|\\vec{u}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$. Lengden er alltid ikke-negativ.',
  },
  {
    question: 'Finn midtpunktet mellom $A = (-3, 5)$ og $B = (7, -1)$.',
    options: ['$(2, 2)$', '$(5, 3)$', '$(4, 4)$', '$(2, 3)$'],
    explanation: 'Midtpunktsformelen: $M = \\left(\\frac{-3 + 7}{2}, \\frac{5 + (-1)}{2}\\right) = (2, 2)$.',
  },
  {
    question: 'Hva er avstanden fra punktet $P = (3, 1)$ til linjen $2x - y + 4 = 0$?',
    options: ['$\\frac{9}{\\sqrt{5}} = \\frac{9\\sqrt{5}}{5}$', '$\\frac{9}{5}$', '$9$', '$\\frac{5}{\\sqrt{9}}$'],
    explanation: 'Avstandsformelen: $d = \\frac{|2 \\cdot 3 - 1 + 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|9|}{\\sqrt{5}} = \\frac{9\\sqrt{5}}{5} \\approx 4{,}02$.',
  },
  {
    question: 'Finn avstanden mellom de parallelle linjene $3x + 4y - 5 = 0$ og $3x + 4y + 10 = 0$.',
    options: ['$3$', '$15$', '$5$', '$\\frac{15}{25}$'],
    explanation: 'Velg et punkt på den ene linjen, f.eks. $(0, \\frac{5}{4})$ fra den første, og bruk avstandsformelen til den andre: $d = \\frac{|{-5} - 10|}{\\sqrt{9 + 16}} = \\frac{15}{5} = 3$.',
  },
  ],
  'r1-6-5': [
  {
    question: 'Hva er normalvektoren til linjen $ax + by + c = 0$?',
    options: ['$\\vec{n} = (a, b)$', '$\\vec{n} = (b, a)$', '$\\vec{n} = (-b, a)$', '$\\vec{n} = (c, c)$'],
    explanation: 'Koeffisientene foran $x$ og $y$ gir normalvektoren $\\vec{n} = (a, b)$, som står vinkelrett på linjen. $(-b, a)$ er derimot en retningsvektor.',
  },
  {
    question: 'Skriv linjen $y = 2x - 3$ på normalform og finn en normalvektor.',
    options: ['$2x - y - 3 = 0$ med normalvektor $(2, -1)$', '$2x + y - 3 = 0$ med normalvektor $(2, 1)$', '$x - 2y - 3 = 0$ med normalvektor $(1, -2)$', '$2x - y - 3 = 0$ med normalvektor $(1, 2)$'],
    explanation: 'Vi flytter alt til én side: $2x - y - 3 = 0$. Normalvektoren leses av koeffisientene: $(2, -1)$.',
  },
  {
    question: 'Hva er sentrum og radius til sirkelen $(x - 3)^2 + (y + 2)^2 = 16$?',
    options: ['Sentrum $(3, -2)$ og radius $4$', 'Sentrum $(-3, 2)$ og radius $4$', 'Sentrum $(3, -2)$ og radius $16$', 'Sentrum $(3, 2)$ og radius $8$'],
    explanation: 'Standardformen $(x-a)^2 + (y-b)^2 = r^2$ gir sentrum $(3, -2)$ (merk fortegnsskiftet) og radius $\\sqrt{16} = 4$.',
  },
  {
    question: 'Omskriv $x^2 + y^2 - 6x + 4y - 12 = 0$ til standardform. Hva er sentrum og radius?',
    options: ['Sentrum $(3, -2)$ og radius $5$', 'Sentrum $(-3, 2)$ og radius $5$', 'Sentrum $(3, -2)$ og radius $25$', 'Sentrum $(6, -4)$ og radius $12$'],
    explanation: 'Fullføring av kvadratene: $(x - 3)^2 - 9 + (y + 2)^2 - 4 - 12 = 0$, altså $(x-3)^2 + (y+2)^2 = 25$. Sentrum $(3, -2)$, radius $5$.',
  },
  {
    question: 'Finn skjæringspunktene mellom linjen $y = x + 1$ og sirkelen $x^2 + y^2 = 13$.',
    options: ['$(2, 3)$ og $(-3, -2)$', '$(2, 3)$ og $(3, 2)$', '$(-2, -1)$ og $(3, 4)$', 'Linjen skjærer ikke sirkelen'],
    explanation: 'Innsetting: $x^2 + (x+1)^2 = 13$ gir $2x^2 + 2x - 12 = 0$, altså $x^2 + x - 6 = 0$ med løsninger $x = 2$ og $x = -3$. Punktene er $(2, 3)$ og $(-3, -2)$.',
  },
  ],
  'r1-6-6': [
  {
    question: 'En gjenstand har hastighetsvektor $\\vec{v} = (v_x, v_y)$. Hva er farten?',
    options: ['$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$', '$v_x + v_y$', '$v_x \\cdot v_y$', '$\\frac{v_y}{v_x}$'],
    explanation: 'Farten er lengden av hastighetsvektoren: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Farten er en skalar, hastigheten en vektor.',
  },
  {
    question: 'To krefter $\\vec{F}_1 = (3, 4)$ N og $\\vec{F}_2 = (-1, 2)$ N virker på et legeme. Hva er den resulterende kraften?',
    options: ['$(2, 6)$ N med størrelse $2\\sqrt{10} \\approx 6{,}3$ N', '$(4, 2)$ N med størrelse $\\sqrt{20}$ N', '$(2, 6)$ N med størrelse $8$ N', '$(-3, 8)$ N med størrelse $\\sqrt{73}$ N'],
    explanation: 'Resultanten er vektorsummen: $(3 + (-1), 4 + 2) = (2, 6)$, med størrelse $\\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} \\approx 6{,}3$ N.',
  },
  {
    question: 'En kraft $\\vec{F} = (30, 40)$ N flytter en gjenstand langs $\\vec{s} = (5, 0)$ m. Hvor stort arbeid utføres? ($W = \\vec{F} \\cdot \\vec{s}$)',
    options: ['$150$ J', '$350$ J', '$250$ J', '$200$ J'],
    explanation: '$W = \\vec{F} \\cdot \\vec{s} = 30 \\cdot 5 + 40 \\cdot 0 = 150$ J. Bare kraftkomponenten langs bevegelsesretningen bidrar til arbeidet.',
  },
  {
    question: 'En båt krysser en elv med strøm. Hvordan finner vi båtens faktiske hastighet over grunnen?',
    options: ['Som vektorsummen av båtens hastighet i vannet og strømmens hastighet', 'Som summen av fartene', 'Som differansen mellom fartene', 'Strømmen påvirker ikke bevegelsen'],
    explanation: 'Hastigheter er vektorer og adderes vektorielt: $\\vec{v}_{\\text{resultant}} = \\vec{v}_{\\text{båt}} + \\vec{v}_{\\text{strøm}}$. Både fart og retning påvirkes.',
  },
  {
    question: 'Et fly skal rett nordover, men det blåser vind fra vest. Hva må piloten gjøre?',
    options: ['Styre litt mot vest, slik at vektorsummen av flyets hastighet og vinden peker rett nord', 'Styre rett nord — vinden har ingen betydning', 'Styre mot øst, samme vei som vinden', 'Øke farten uten å endre kurs'],
    explanation: 'Vinden fra vest driver flyet østover. Piloten må vinkle kursen mot vinden (vestover) slik at den resulterende hastighetsvektoren peker rett nord.',
  },
  ],
  'r1-7-1': [
  {
    question: 'Hvilke koordinater har punktet på enhetssirkelen som svarer til vinkelen $v$?',
    options: ['$(\\cos v, \\sin v)$', '$(\\sin v, \\cos v)$', '$(\\tan v, 1)$', '$(v, \\sin v)$'],
    explanation: 'Per definisjon er $\\cos v$ $x$-koordinaten og $\\sin v$ $y$-koordinaten til punktet på enhetssirkelen.',
  },
  {
    question: 'Gjør om $135°$ til radianer.',
    options: ['$\\frac{3\\pi}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{4}$'],
    explanation: '$135° = 135 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{4}$ radianer.',
  },
  {
    question: 'Hva er $\\sin 150°$ og $\\cos 150°$?',
    options: ['$\\sin 150° = \\frac{1}{2}$ og $\\cos 150° = -\\frac{\\sqrt{3}}{2}$', '$\\sin 150° = -\\frac{1}{2}$ og $\\cos 150° = \\frac{\\sqrt{3}}{2}$', '$\\sin 150° = \\frac{\\sqrt{3}}{2}$ og $\\cos 150° = -\\frac{1}{2}$', '$\\sin 150° = \\frac{1}{2}$ og $\\cos 150° = \\frac{\\sqrt{3}}{2}$'],
    explanation: '$150°$ ligger i andre kvadrant der sinus er positiv og cosinus negativ. Referansevinkelen er $30°$: $\\sin 150° = \\sin 30° = \\frac{1}{2}$ og $\\cos 150° = -\\cos 30° = -\\frac{\\sqrt{3}}{2}$.',
  },
  {
    question: 'Gitt at $\\sin x = \\frac{3}{5}$ og $x$ ligger i andre kvadrant. Hva er $\\cos x$?',
    options: ['$-\\frac{4}{5}$', '$\\frac{4}{5}$', '$-\\frac{3}{5}$', '$\\frac{2}{5}$'],
    explanation: 'Den pytagoreiske identiteten gir $\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$, så $\\cos x = \\pm\\frac{4}{5}$. I andre kvadrant er cosinus negativ: $\\cos x = -\\frac{4}{5}$.',
  },
  {
    question: 'For hvilke vinkler er $\\tan v$ ikke definert?',
    options: ['Der $\\cos v = 0$, altså $v = 90° + n \\cdot 180°$', 'Der $\\sin v = 0$, altså $v = n \\cdot 180°$', 'Der $\\sin v = \\cos v$', 'Tangens er definert for alle vinkler'],
    explanation: '$\\tan v = \\frac{\\sin v}{\\cos v}$ er udefinert når nevneren $\\cos v = 0$, dvs. for $v = 90°, 270°, \\ldots$',
  },
  ],
  'r1-7-2': [
  {
    question: 'Hva er amplituden til $f(x) = 3\\sin(2x - \\frac{\\pi}{3}) + 1$?',
    options: ['$3$', '$2$', '$1$', '$\\frac{\\pi}{3}$'],
    explanation: 'Amplituden er $|a|$ i $y = a\\sin(bx + c) + d$, her $|3| = 3$ — største avstand fra midtlinjen $y = 1$.',
  },
  {
    question: 'Hva er perioden til $f(x) = 3\\sin(2x - \\frac{\\pi}{3}) + 1$?',
    options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'],
    explanation: 'Perioden er $T = \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$.',
  },
  {
    question: 'En sinusfunksjon har største verdi $5$ og minste verdi $1$. Hva er amplituden og midtlinjen?',
    options: ['Amplitude $2$ og midtlinje $y = 3$', 'Amplitude $4$ og midtlinje $y = 3$', 'Amplitude $2$ og midtlinje $y = 2$', 'Amplitude $5$ og midtlinje $y = 1$'],
    explanation: 'Amplituden er $\\frac{5 - 1}{2} = 2$ og midtlinjen er gjennomsnittet: $d = \\frac{5 + 1}{2} = 3$.',
  },
  {
    question: 'Hvordan er grafen til $g(x) = -2\\cos x + 1$ transformert i forhold til $y = \\cos x$?',
    options: ['Strukket med faktor $2$, speilet om midtlinjen og flyttet $1$ opp', 'Strukket med faktor $2$ og flyttet $1$ ned', 'Flyttet $2$ til venstre og $1$ opp', 'Bare speilet om $y$-aksen'],
    explanation: 'Faktoren $-2$ gir amplitude $2$ og speiling (negativt fortegn), og $+1$ hever midtlinjen til $y = 1$.',
  },
  {
    question: 'Hva er perioden til $y = \\tan x$?',
    options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$4\\pi$'],
    explanation: 'Tangensfunksjonen gjentar seg med periode $\\pi$ — i motsetning til sinus og cosinus som har periode $2\\pi$.',
  },
  ],
  'r1-7-3': [
  {
    question: 'Hva er alle løsningene av $\\sin x = \\frac{1}{2}$?',
    options: ['$x = \\frac{\\pi}{6} + 2\\pi n$ eller $x = \\frac{5\\pi}{6} + 2\\pi n$', '$x = \\frac{\\pi}{6} + 2\\pi n$', '$x = \\frac{\\pi}{6} + \\pi n$', '$x = \\pm\\frac{\\pi}{6} + 2\\pi n$'],
    explanation: 'Sinus er $\\frac{1}{2}$ i første og andre kvadrant: $x = \\frac{\\pi}{6}$ og $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$, begge pluss multipler av $2\\pi$.',
  },
  {
    question: 'Hva er alle løsningene av $\\cos x = -\\frac{\\sqrt{3}}{2}$?',
    options: ['$x = \\pm\\frac{5\\pi}{6} + 2\\pi n$', '$x = \\pm\\frac{\\pi}{6} + 2\\pi n$', '$x = \\frac{5\\pi}{6} + \\pi n$', '$x = \\pm\\frac{2\\pi}{3} + 2\\pi n$'],
    explanation: 'Cosinus er $-\\frac{\\sqrt{3}}{2}$ for $x = \\frac{5\\pi}{6}$ og $x = -\\frac{5\\pi}{6}$ (dvs. $\\frac{7\\pi}{6}$). Den generelle løsningen av $\\cos x = k$ er $x = \\pm x_0 + 2\\pi n$.',
  },
  {
    question: 'Hva er alle løsningene av $\\tan x = 1$?',
    options: ['$x = \\frac{\\pi}{4} + \\pi n$', '$x = \\frac{\\pi}{4} + 2\\pi n$', '$x = \\pm\\frac{\\pi}{4} + 2\\pi n$', '$x = \\frac{\\pi}{4}$ eller $x = \\frac{3\\pi}{4} + 2\\pi n$'],
    explanation: 'Tangens har periode $\\pi$, så alle løsninger fås ved å legge multipler av $\\pi$ til grunnløsningen $\\frac{\\pi}{4}$.',
  },
  {
    question: 'Løs $2\\cos^2 x - \\cos x - 1 = 0$ for $x \\in [0, 2\\pi)$.',
    options: ['$x = 0$, $x = \\frac{2\\pi}{3}$ og $x = \\frac{4\\pi}{3}$', '$x = 0$ og $x = \\pi$', '$x = \\frac{\\pi}{3}$ og $x = \\frac{5\\pi}{3}$', '$x = \\frac{2\\pi}{3}$ og $x = \\frac{4\\pi}{3}$'],
    explanation: 'Sett $u = \\cos x$: $2u^2 - u - 1 = 0$ gir $u = 1$ eller $u = -\\frac{1}{2}$. $\\cos x = 1$ gir $x = 0$; $\\cos x = -\\frac{1}{2}$ gir $x = \\frac{2\\pi}{3}$ og $x = \\frac{4\\pi}{3}$.',
  },
  {
    question: 'Hvorfor har ligningen $\\sin x = k$ (med $-1 < k < 1$) to løsningsfamilier?',
    options: ['Fordi sinus har samme verdi i to vinkler per periode: $x_0$ og $\\pi - x_0$', 'Fordi sinus er en lineær funksjon', 'Fordi sinus har periode $\\pi$', 'Det stemmer ikke — den har bare én løsningsfamilie'],
    explanation: 'På enhetssirkelen finnes det to punkter med samme $y$-koordinat (ett i hver av to kvadranter). Derfor er løsningene $x = x_0 + 2\\pi n$ og $x = \\pi - x_0 + 2\\pi n$.',
  },
  ],
  'r1-7-4': [
  {
    question: 'Hva er addisjonsformelen for $\\sin(u + v)$?',
    options: ['$\\sin u \\cos v + \\cos u \\sin v$', '$\\sin u \\cos v - \\cos u \\sin v$', '$\\cos u \\cos v - \\sin u \\sin v$', '$\\sin u + \\sin v$'],
    explanation: '$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$. En vanlig feil er å tro at $\\sin(u+v) = \\sin u + \\sin v$.',
  },
  {
    question: 'Finn den eksakte verdien av $\\sin 75°$.',
    options: ['$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$', '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$', '$\\frac{\\sqrt{3} + 1}{2}$', '$\\frac{\\sqrt{2}}{2}$'],
    explanation: '$\\sin 75° = \\sin(45° + 30°) = \\sin 45° \\cos 30° + \\cos 45° \\sin 30° = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
  },
  {
    question: 'Hva er dobbeltvinkelformelen for $\\sin 2x$?',
    options: ['$2 \\sin x \\cos x$', '$\\sin^2 x - \\cos^2 x$', '$2 \\sin x$', '$\\sin x \\cos x$'],
    explanation: '$\\sin 2x = \\sin(x + x) = \\sin x \\cos x + \\cos x \\sin x = 2\\sin x \\cos x$.',
  },
  {
    question: 'Gitt $\\cos x = \\frac{3}{5}$ med $x \\in (0, \\frac{\\pi}{2})$. Hva er $\\sin 2x$ og $\\cos 2x$?',
    options: ['$\\sin 2x = \\frac{24}{25}$ og $\\cos 2x = -\\frac{7}{25}$', '$\\sin 2x = \\frac{12}{25}$ og $\\cos 2x = \\frac{7}{25}$', '$\\sin 2x = \\frac{24}{25}$ og $\\cos 2x = \\frac{7}{25}$', '$\\sin 2x = \\frac{6}{5}$ og $\\cos 2x = \\frac{9}{25}$'],
    explanation: '$\\sin x = \\frac{4}{5}$ (første kvadrant). $\\sin 2x = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$ og $\\cos 2x = \\cos^2 x - \\sin^2 x = \\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$.',
  },
  {
    question: 'Hvilke uttrykk er alle gyldige former for $\\cos 2x$?',
    options: ['$\\cos^2 x - \\sin^2 x$, $\\; 2\\cos^2 x - 1$ og $1 - 2\\sin^2 x$', 'Bare $\\cos^2 x - \\sin^2 x$', '$2\\sin x \\cos x$ og $\\cos^2 x + \\sin^2 x$', '$1 + 2\\sin^2 x$ og $2\\cos^2 x + 1$'],
    explanation: 'Med den pytagoreiske identiteten kan $\\cos 2x = \\cos^2 x - \\sin^2 x$ skrives om til både $2\\cos^2 x - 1$ og $1 - 2\\sin^2 x$.',
  },
  ],
  'r1-7-5': [
  {
    question: 'Hva er den deriverte av $\\sin x$?',
    options: ['$\\cos x$', '$-\\cos x$', '$-\\sin x$', '$\\tan x$'],
    explanation: '$(\\sin x)\' = \\cos x$ (når $x$ måles i radianer).',
  },
  {
    question: 'Hva er den deriverte av $\\cos x$?',
    options: ['$-\\sin x$', '$\\sin x$', '$-\\cos x$', '$\\frac{1}{\\cos^2 x}$'],
    explanation: '$(\\cos x)\' = -\\sin x$. Husk minustegnet — en vanlig feilkilde.',
  },
  {
    question: 'Deriver $f(x) = \\sin(3x)$.',
    options: ['$f\'(x) = 3\\cos(3x)$', '$f\'(x) = \\cos(3x)$', '$f\'(x) = -3\\cos(3x)$', '$f\'(x) = 3\\sin(3x)$'],
    explanation: 'Kjerneregelen med kjerne $u = 3x$: $f\'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$.',
  },
  {
    question: 'Deriver $g(x) = \\cos(x^2)$.',
    options: ['$g\'(x) = -2x\\sin(x^2)$', '$g\'(x) = -\\sin(x^2)$', '$g\'(x) = 2x\\sin(x^2)$', '$g\'(x) = -2x\\cos(x^2)$'],
    explanation: 'Kjerneregelen: ytre derivert $-\\sin(u)$ med $u = x^2$, ganget med indre derivert $2x$: $g\'(x) = -2x\\sin(x^2)$.',
  },
  {
    question: 'Deriver $f(x) = \\sin^2(3x)$.',
    options: ['$f\'(x) = 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$', '$f\'(x) = 2\\sin(3x)$', '$f\'(x) = 2\\cos^2(3x)$', '$f\'(x) = 6\\cos^2(3x)$'],
    explanation: 'Dobbel kjerneregel: $f\'(x) = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x)$, som med dobbeltvinkelformelen er $3\\sin(6x)$.',
  },
  ],
  'r1-7-6': [
  {
    question: 'Hva sier sinussetningen for en trekant $ABC$?',
    options: ['$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$', '$a^2 = b^2 + c^2 - 2bc\\cos A$', '$\\frac{\\sin A}{\\sin B} = \\frac{b}{a}$', '$a \\sin A = b \\sin B = c \\sin C$'],
    explanation: 'Sinussetningen: forholdet mellom en side og sinus til motstående vinkel er likt for alle tre sidene.',
  },
  {
    question: 'Hva sier cosinussetningen for siden $c$?',
    options: ['$c^2 = a^2 + b^2 - 2ab\\cos C$', '$c^2 = a^2 + b^2 + 2ab\\cos C$', '$c^2 = a^2 + b^2 - 2ab\\sin C$', '$c = a + b - 2ab\\cos C$'],
    explanation: 'Cosinussetningen: $c^2 = a^2 + b^2 - 2ab\\cos C$. Med $C = 90°$ blir den til Pytagoras-setningen.',
  },
  {
    question: 'I trekant $ABC$ er $a = 7$, $b = 10$ og $C = 60°$. Hva er $c$?',
    options: ['$c = \\sqrt{79} \\approx 8{,}9$', '$c = \\sqrt{149} \\approx 12{,}2$', '$c = \\sqrt{219} \\approx 14{,}8$', '$c = 17$'],
    explanation: '$c^2 = 7^2 + 10^2 - 2 \\cdot 7 \\cdot 10 \\cdot \\cos 60° = 49 + 100 - 140 \\cdot \\frac{1}{2} = 79$, så $c = \\sqrt{79} \\approx 8{,}9$.',
  },
  {
    question: 'Finn arealet av trekant $ABC$ der $a = 8$, $b = 11$ og $C = 50°$.',
    options: ['$T = \\frac{1}{2} \\cdot 8 \\cdot 11 \\cdot \\sin 50° \\approx 33{,}7$', '$T = \\frac{1}{2} \\cdot 8 \\cdot 11 \\cdot \\cos 50° \\approx 28{,}3$', '$T = 8 \\cdot 11 \\cdot \\sin 50° \\approx 67{,}4$', '$T = \\frac{1}{2} \\cdot 8 \\cdot 11 = 44$'],
    explanation: 'Arealsetningen: $T = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\cdot 8 \\cdot 11 \\cdot \\sin 50° \\approx 44 \\cdot 0{,}766 \\approx 33{,}7$.',
  },
  {
    question: 'Hva er «tvetydighetsproblemet» ved bruk av sinussetningen?',
    options: ['Ligningen $\\sin B = k$ kan gi to mulige vinkler, $B$ og $180° - B$, som begge må vurderes', 'Sinussetningen gjelder bare for rettvinklede trekanter', 'Sinus kan være negativ i en trekant', 'Setningen kan ikke brukes når to sider er like lange'],
    explanation: 'Siden $\\sin v = \\sin(180° - v)$, kan sinussetningen gi to geometrisk mulige trekanter. Vi må sjekke om begge vinklene gir en gyldig vinkelsum under $180°$.',
  },
  ],
  'r1-8-1': [
  {
    question: 'Hva sier multiplikasjonsprinsippet?',
    options: ['Antall måter å gjøre flere uavhengige delvalg på er produktet av antall måter for hvert delvalg', 'Antall måter er summen av antall måter for hvert delvalg', 'Alle valg må multipliseres med $2$', 'Antall måter er alltid $n!$'],
    explanation: 'Hvis delvalgene kan gjøres på $n_1, n_2, \\ldots, n_k$ måter, kan det sammensatte valget gjøres på $n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$ måter.',
  },
  {
    question: 'Du har $2$ skjorter og $3$ bukser. Hvor mange ulike antrekk kan du sette sammen?',
    options: ['$6$', '$5$', '$8$', '$12$'],
    explanation: 'Multiplikasjonsprinsippet: $2 \\cdot 3 = 6$ antrekk.',
  },
  {
    question: 'Et bilskilt har $2$ bokstaver (26 mulige) fulgt av $5$ siffer. Hvor mange skilt er mulige?',
    options: ['$26^2 \\cdot 10^5 = 67\\,600\\,000$', '$26 \\cdot 2 + 10 \\cdot 5 = 102$', '$26^2 \\cdot 5^{10}$', '$2^{26} \\cdot 5^{10}$'],
    explanation: 'Hver bokstav kan velges på $26$ måter og hvert siffer på $10$ måter: $26 \\cdot 26 \\cdot 10^5 = 676 \\cdot 100\\,000 = 67{,}6$ millioner.',
  },
  {
    question: 'En klasse har $15$ gutter og $12$ jenter. Det skal velges én representant — enten en gutt eller en jente. Hvor mange muligheter finnes?',
    options: ['$15 + 12 = 27$', '$15 \\cdot 12 = 180$', '$15$', '$2$'],
    explanation: 'Addisjonsprinsippet: når valgene er gjensidig utelukkende alternativer («enten–eller»), adderer vi: $15 + 12 = 27$.',
  },
  {
    question: 'Når bruker vi addisjonsprinsippet i stedet for multiplikasjonsprinsippet?',
    options: ['Når vi velger mellom gjensidig utelukkende alternativer («enten–eller»), ikke gjør flere delvalg etter hverandre', 'Når tallene er små', 'Når rekkefølgen har betydning', 'Når vi trekker uten tilbakelegging'],
    explanation: 'Multiplikasjon brukes for sammensatte valg («både–og»), addisjon for alternativer som utelukker hverandre («enten–eller»).',
  },
  ],
  'r1-8-2': [
  {
    question: 'Hva er $0!$ per definisjon?',
    options: ['$1$', '$0$', 'Udefinert', '$\\infty$'],
    explanation: 'Per definisjon er $0! = 1$. Dette gjør at formlene for permutasjoner og kombinasjoner fungerer også i ytterpunktene.',
  },
  {
    question: 'På hvor mange måter kan $5$ bøker plasseres på en hylle?',
    options: ['$5! = 120$', '$5^5 = 3125$', '$25$', '$5 \\cdot 4 = 20$'],
    explanation: 'Alle $5$ bøkene skal ordnes i rekkefølge: $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
  },
  {
    question: '$10$ løpere deltar i et løp. På hvor mange måter kan gull, sølv og bronse fordeles?',
    options: ['$10 \\cdot 9 \\cdot 8 = 720$', '$\\binom{10}{3} = 120$', '$10^3 = 1000$', '$3! = 6$'],
    explanation: 'Rekkefølgen har betydning (ulike medaljer), så vi bruker permutasjoner: $P(10, 3) = 10 \\cdot 9 \\cdot 8 = 720$.',
  },
  {
    question: 'I en gruppe på $12$ personer skal det velges en komité med $4$ medlemmer. Hvor mange mulige komitéer finnes?',
    options: ['$\\binom{12}{4} = 495$', '$12 \\cdot 11 \\cdot 10 \\cdot 9 = 11\\,880$', '$12^4$', '$4! = 24$'],
    explanation: 'Rekkefølgen er uten betydning, så vi bruker kombinasjoner: $\\binom{12}{4} = \\frac{12!}{4! \\cdot 8!} = 495$.',
  },
  {
    question: 'Hva er forskjellen på en permutasjon og en kombinasjon?',
    options: ['I en permutasjon har rekkefølgen betydning, i en kombinasjon ikke', 'En permutasjon er alltid et mindre tall', 'Kombinasjoner brukes bare med tilbakelegging', 'Det er ingen forskjell'],
    explanation: 'Permutasjoner teller ordnede utvalg, kombinasjoner teller uordnede. Derfor er $P(n, r) = \\binom{n}{r} \\cdot r!$.',
  },
  ],
  'r1-8-3': [
  {
    question: 'Hva er sannsynligheten for en hendelse $A$ i en uniform sannsynlighetsmodell?',
    options: ['$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{totalt antall utfall}}$', '$P(A) = \\text{antall gunstige utfall}$', '$P(A) = \\frac{\\text{totalt antall utfall}}{\\text{antall gunstige utfall}}$', '$P(A) = 1 - \\text{antall gunstige utfall}$'],
    explanation: 'Når alle utfall er like sannsynlige (Laplace-modell): $P(A) = \\frac{|A|}{|\\Omega|}$, og alltid $0 \\leq P(A) \\leq 1$.',
  },
  {
    question: 'Du kaster to terninger. Hva er sannsynligheten for at summen blir $7$?',
    options: ['$\\frac{6}{36} = \\frac{1}{6}$', '$\\frac{7}{36}$', '$\\frac{1}{12}$', '$\\frac{5}{36}$'],
    explanation: 'Av $36$ mulige utfall gir $6$ av dem sum $7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. $P = \\frac{6}{36} = \\frac{1}{6}$.',
  },
  {
    question: 'Du kaster $3$ mynter. Hva er sannsynligheten for å få minst én krone?',
    options: ['$1 - \\frac{1}{8} = \\frac{7}{8}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$', '$\\frac{1}{8}$'],
    explanation: 'Komplementsetningen: $P(\\text{minst én krone}) = 1 - P(\\text{ingen krone}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
  {
    question: 'Du trekker ett kort fra en kortstokk med $52$ kort. Hva er sannsynligheten for hjerter eller ess?',
    options: ['$\\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$', '$\\frac{13}{52} + \\frac{4}{52} = \\frac{17}{52}$', '$\\frac{13}{52} \\cdot \\frac{4}{52}$', '$\\frac{13 + 4}{52 + 52}$'],
    explanation: 'Addisjonssetningen: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Hjerteresset telles ellers dobbelt: $\\frac{13 + 4 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}$.',
  },
  {
    question: 'Fra en kortstokk trekkes $5$ kort. Hvilket uttrykk gir sannsynligheten for nøyaktig $3$ hjerter?',
    options: ['$\\frac{\\binom{13}{3}\\binom{39}{2}}{\\binom{52}{5}}$', '$\\frac{\\binom{13}{3}}{\\binom{52}{5}}$', '$\\left(\\frac{13}{52}\\right)^3$', '$\\frac{\\binom{13}{3}\\binom{39}{2}}{\\binom{52}{3}}$'],
    explanation: 'Gunstige: velg $3$ av $13$ hjerter og $2$ av de $39$ andre kortene. Mulige: $\\binom{52}{5}$. Dette gir $\\approx 0{,}082$.',
  },
  ],
  'r1-8-4': [
  {
    question: 'Hva er definisjonen av betinget sannsynlighet $P(A \\mid B)$?',
    options: ['$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$', '$P(A \\mid B) = \\frac{P(B)}{P(A \\cap B)}$', '$P(A \\mid B) = P(A) \\cdot P(B)$', '$P(A \\mid B) = P(A) + P(B)$'],
    explanation: 'Betinget sannsynlighet: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ — vi innskrenker utfallsrommet til $B$.',
  },
  {
    question: 'Du kaster en terning. La $A$ = «viser 6» og $B$ = «viser partall». Hva er $P(A \\mid B)$?',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
    explanation: 'Gitt at terningen viser partall, er utfallsrommet $\\{2, 4, 6\\}$. Bare ett av tre utfall er $6$: $P(A \\mid B) = \\frac{1}{3}$.',
  },
  {
    question: 'En eske har $8$ røde og $4$ blå kuler. Du trekker $2$ uten tilbakelegging. Hva er sannsynligheten for at begge er røde?',
    options: ['$\\frac{8}{12} \\cdot \\frac{7}{11} = \\frac{14}{33}$', '$\\frac{8}{12} \\cdot \\frac{8}{12} = \\frac{4}{9}$', '$\\frac{8}{12} \\cdot \\frac{7}{12}$', '$\\frac{2}{3}$'],
    explanation: 'Uten tilbakelegging endres sannsynligheten i andre trekk: $P = \\frac{8}{12} \\cdot \\frac{7}{11} = \\frac{56}{132} = \\frac{14}{33}$.',
  },
  {
    question: 'Når er to hendelser $A$ og $B$ uavhengige?',
    options: ['Når $P(A \\cap B) = P(A) \\cdot P(B)$', 'Når $P(A \\cap B) = 0$', 'Når $P(A) = P(B)$', 'Når $A$ og $B$ ikke kan inntreffe samtidig'],
    explanation: 'Uavhengighet betyr $P(A \\mid B) = P(A)$, som er ekvivalent med $P(A \\cap B) = P(A) \\cdot P(B)$. Disjunkte hendelser ($P(A \\cap B) = 0$) er derimot sterkt avhengige.',
  },
  {
    question: 'Maskin I lager $60\\%$ av delene med $2\\%$ defekte, maskin II lager $40\\%$ med $5\\%$ defekte. Hva er den totale andelen defekte?',
    options: ['$0{,}6 \\cdot 0{,}02 + 0{,}4 \\cdot 0{,}05 = 0{,}032 = 3{,}2\\%$', '$\\frac{2\\% + 5\\%}{2} = 3{,}5\\%$', '$2\\% \\cdot 5\\% = 0{,}1\\%$', '$7\\%$'],
    explanation: 'Totalsetningen: $P(D) = P(D \\mid I)P(I) + P(D \\mid II)P(II) = 0{,}02 \\cdot 0{,}6 + 0{,}05 \\cdot 0{,}4 = 0{,}012 + 0{,}020 = 0{,}032$.',
  },
  ],
  'r1-8-5': [
  {
    question: 'Hvilke krav må være oppfylt for at et forsøk skal være binomisk?',
    options: ['Fast antall delforsøk, to mulige utfall, konstant suksesssannsynlighet og uavhengige delforsøk', 'Minst $30$ delforsøk og normalfordelte data', 'Trekninger uten tilbakelegging fra en liten populasjon', 'At suksesssannsynligheten endrer seg for hvert forsøk'],
    explanation: 'Binomisk forsøk: (1) fast $n$, (2) to utfall per delforsøk, (3) samme $p$ hver gang, (4) uavhengige delforsøk.',
  },
  {
    question: 'Du kaster en rettferdig mynt $8$ ganger. Hva er sannsynligheten for nøyaktig $5$ krone?',
    options: ['$\\binom{8}{5}\\left(\\frac{1}{2}\\right)^8 = \\frac{56}{256} \\approx 0{,}219$', '$\\frac{5}{8}$', '$\\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$', '$\\binom{8}{5}\\left(\\frac{1}{2}\\right)^5 = \\frac{56}{32}$'],
    explanation: '$P(X = 5) = \\binom{8}{5}\\left(\\frac{1}{2}\\right)^5\\left(\\frac{1}{2}\\right)^3 = 56 \\cdot \\frac{1}{256} \\approx 0{,}219$.',
  },
  {
    question: 'En fabrikk har $2\\%$ feilrate. Hva er forventet antall defekte i et parti på $200$ komponenter?',
    options: ['$E(X) = 200 \\cdot 0{,}02 = 4$', '$E(X) = 200 \\cdot 0{,}98 = 196$', '$E(X) = 2$', '$E(X) = \\sqrt{200 \\cdot 0{,}02}$'],
    explanation: 'For binomisk fordeling er forventningsverdien $E(X) = np = 200 \\cdot 0{,}02 = 4$.',
  },
  {
    question: 'Hva er standardavviket til $X \\sim \\text{Bin}(200, \\; 0{,}02)$?',
    options: ['$\\sigma = \\sqrt{200 \\cdot 0{,}02 \\cdot 0{,}98} \\approx 1{,}98$', '$\\sigma = 200 \\cdot 0{,}02 = 4$', '$\\sigma = \\sqrt{200 \\cdot 0{,}02} = 2$', '$\\sigma = 0{,}02 \\cdot 0{,}98$'],
    explanation: 'Standardavviket er $\\sigma = \\sqrt{np(1-p)} = \\sqrt{200 \\cdot 0{,}02 \\cdot 0{,}98} = \\sqrt{3{,}92} \\approx 1{,}98$.',
  },
  {
    question: 'Hva betyr den kumulative sannsynligheten $P(X \\leq 3)$ for en binomisk variabel?',
    options: ['$P(X = 0) + P(X = 1) + P(X = 2) + P(X = 3)$', '$P(X = 3)$', '$1 - P(X = 3)$', '$P(X = 1) \\cdot P(X = 2) \\cdot P(X = 3)$'],
    explanation: 'Kumulativ sannsynlighet er summen av punktsannsynlighetene opp til og med verdien: $P(X \\leq 3) = \\sum_{k=0}^{3} P(X = k)$.',
  },
  ],
  'r1-8-6': [
  {
    question: 'Hva betyr «sensitivitet» for en medisinsk test?',
    options: ['$P(\\text{positiv} \\mid \\text{syk})$ — sannsynligheten for at testen slår ut hos en som er syk', '$P(\\text{syk} \\mid \\text{positiv})$', '$P(\\text{negativ} \\mid \\text{frisk})$', 'Andelen syke i befolkningen'],
    explanation: 'Sensitiviteten er testens evne til å fange opp de syke: $P(\\text{positiv} \\mid \\text{syk})$. $P(\\text{negativ} \\mid \\text{frisk})$ kalles spesifisitet.',
  },
  {
    question: 'En test har sensitivitet $0{,}99$ og spesifisitet $0{,}95$. Sykdommen rammer $1\\%$. Hva er omtrent $P(\\text{syk} \\mid \\text{positiv})$?',
    options: ['Ca. $\\frac{1}{6} \\approx 17\\%$', 'Ca. $99\\%$', 'Ca. $95\\%$', 'Ca. $50\\%$'],
    explanation: 'Bayes: $P(\\text{syk} \\mid +) = \\frac{0{,}99 \\cdot 0{,}01}{0{,}99 \\cdot 0{,}01 + 0{,}05 \\cdot 0{,}99} = \\frac{0{,}0099}{0{,}0594} \\approx 0{,}167$. De falske positive fra den store friske gruppen dominerer.',
  },
  {
    question: 'Hvorfor kan en svært treffsikker test likevel gi lav $P(\\text{syk} \\mid \\text{positiv})$?',
    options: ['Fordi sykdommen er sjelden — de få ekte positive drukner i falske positive fra den store friske gruppen', 'Fordi testen alltid er feilkalibrert', 'Fordi sannsynligheter ikke kan kombineres', 'Det er umulig — høy sensitivitet gir alltid høy treffsikkerhet'],
    explanation: 'Ved lav forekomst er det mange flere friske enn syke. Selv en liten andel falske positive blant de friske blir i antall større enn de ekte positive.',
  },
  {
    question: 'Hva er ideen bak Monte Carlo-simulering?',
    options: ['Å estimere en sannsynlighet ved å gjenta et tilfeldig forsøk svært mange ganger og telle andelen gunstige utfall', 'Å beregne sannsynligheten eksakt med en formel', 'Å bruke terninger i stedet for datamaskin', 'Å fjerne all tilfeldighet fra forsøket'],
    explanation: 'I Monte Carlo-simulering kjører vi forsøket tusenvis av ganger digitalt. Den relative frekvensen nærmer seg den sanne sannsynligheten (store talls lov).',
  },
  {
    question: 'Hva er den omtrentlige sannsynligheten for at minst to av $23$ personer deler fødselsdag?',
    options: ['Ca. $50\\%$', 'Ca. $6\\%$', 'Ca. $23\\%$', 'Ca. $95\\%$'],
    explanation: 'Bursdagsproblemet: med $23$ personer er $P \\approx 0{,}507$ — overraskende høyt fordi antall par, $\\binom{23}{2} = 253$, er stort.',
  },
  ],
  'r1-8-7': [
  {
    question: 'Hva er den viktigste forskjellen mellom binomisk og hypergeometrisk fordeling?',
    options: ['Hypergeometrisk gjelder trekning uten tilbakelegging, binomisk krever konstant suksesssannsynlighet', 'Binomisk gjelder bare myntkast', 'Hypergeometrisk har alltid større forventningsverdi', 'Binomisk gjelder uten tilbakelegging'],
    explanation: 'Binomisk krever uavhengige delforsøk med samme $p$ (f.eks. med tilbakelegging). Trekker vi uten tilbakelegging fra en endelig populasjon, endres sannsynligheten underveis — da er fordelingen hypergeometrisk.',
  },
  {
    question: 'En terning kastes $10$ ganger og $X$ er antall seksere. Hva er $P(X = 3)$?',
    options: ['$\\binom{10}{3}\\left(\\frac{1}{6}\\right)^3\\left(\\frac{5}{6}\\right)^7 \\approx 0{,}155$', '$\\left(\\frac{1}{6}\\right)^3 \\approx 0{,}005$', '$\\binom{10}{3}\\left(\\frac{1}{6}\\right)^3 \\approx 0{,}556$', '$\\frac{3}{10}$'],
    explanation: '$X \\sim B(10, \\frac{1}{6})$: $P(X = 3) = \\binom{10}{3}\\left(\\frac{1}{6}\\right)^3\\left(\\frac{5}{6}\\right)^7 = 120 \\cdot \\frac{1}{216} \\cdot 0{,}279 \\approx 0{,}155$. Husk faktoren $\\left(\\frac{5}{6}\\right)^7$ for de mislykkede kastene.',
  },
  {
    question: 'Hvilken formel gir $P(X = k)$ for en hypergeometrisk fordeling $X \\sim H(N, M, n)$?',
    options: ['$P(X = k) = \\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$', '$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$', '$P(X = k) = \\frac{\\binom{N}{k}}{\\binom{M}{n}}$', '$P(X = k) = \\frac{M^k}{N^n}$'],
    explanation: 'Vi velger $k$ suksesser blant $M$ og $n - k$ fiaskoer blant $N - M$, delt på alle måter å trekke $n$ av $N$: $\\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$.',
  },
  {
    question: 'Et parti har $20$ produkter der $4$ er defekte. Vi trekker $3$ uten tilbakelegging. Hva er sannsynligheten for ingen defekte?',
    options: ['$\\frac{\\binom{16}{3}}{\\binom{20}{3}} = \\frac{560}{1140} \\approx 0{,}49$', '$\\left(\\frac{16}{20}\\right)^3 = 0{,}512$', '$\\frac{\\binom{4}{0}}{\\binom{20}{3}}$', '$\\frac{16}{20} = 0{,}8$'],
    explanation: 'Hypergeometrisk: $P(X = 0) = \\frac{\\binom{4}{0}\\binom{16}{3}}{\\binom{20}{3}} = \\frac{560}{1140} = \\frac{28}{57} \\approx 0{,}49$. Uttrykket $(16/20)^3$ ville forutsatt tilbakelegging.',
  },
  {
    question: 'En elev gjetter på alle $8$ flervalgsspørsmål med $4$ alternativer. Hva er sannsynligheten for minst ett riktig svar?',
    options: ['$1 - \\left(\\frac{3}{4}\\right)^8 \\approx 0{,}90$', '$\\left(\\frac{1}{4}\\right)^8 \\approx 0{,}0000153$', '$\\frac{8}{4} = 2$, altså sikkert', '$8 \\cdot \\frac{1}{4} = 2$'],
    explanation: 'Komplementsetningen: $P(\\text{minst ett riktig}) = 1 - P(\\text{alle feil}) = 1 - \\left(\\frac{3}{4}\\right)^8 \\approx 1 - 0{,}100 = 0{,}90$.',
  },
  ],
  'r1-9-1': [
  {
    question: 'I implikasjonen $P \\Rightarrow Q$, hva kalles $P$ og $Q$?',
    options: ['$P$ er forutsetningen (hypotesen) og $Q$ er konklusjonen', '$P$ er konklusjonen og $Q$ er forutsetningen', 'Begge kalles aksiomer', '$P$ er beviset og $Q$ er setningen'],
    explanation: 'I «hvis $P$, så $Q$» er $P$ forutsetningen og $Q$ konklusjonen. En ekvivalens $P \\Leftrightarrow Q$ krever implikasjon begge veier.',
  },
  {
    question: 'Hvordan defineres et partall formelt?',
    options: ['Et heltall $n$ er partall hvis det finnes et heltall $k$ slik at $n = 2k$', 'Et tall som slutter på $0$, $2$, $4$, $6$ eller $8$', 'Et heltall $n$ slik at $n = 2k + 1$ for et heltall $k$', 'Et tall som er større enn null og delelig med seg selv'],
    explanation: 'Den formelle definisjonen $n = 2k$ (for et heltall $k$) er utgangspunktet for bevis. Sifferregelen er en konsekvens, ikke definisjonen.',
  },
  {
    question: 'Hva kreves for å motbevise påstanden «summen av to primtall er alltid et partall»?',
    options: ['Ett moteksempel, f.eks. $2 + 3 = 5$', 'Mange eksempler som taler imot', 'Et induksjonsbevis', 'Påstanden kan ikke motbevises'],
    explanation: 'En allmenn påstand felles av ett eneste moteksempel: $2$ og $3$ er primtall, men $2 + 3 = 5$ er odde.',
  },
  {
    question: 'Hva er kjernen i et direkte bevis for at summen av to partall er et partall?',
    options: ['Skriv $n = 2k$ og $m = 2l$; da er $n + m = 2(k + l)$, som er et partall', 'Test mange eksempler, som $2 + 4 = 6$ og $8 + 10 = 18$', 'Anta at summen er odde og finn en selvmotsigelse', 'Bruk induksjon på det største av tallene'],
    explanation: 'Et direkte bevis går fra definisjonen: $n + m = 2k + 2l = 2(k + l)$. Siden $k + l$ er et heltall, er summen per definisjon et partall. Eksempler beviser ingenting generelt.',
  },
  {
    question: 'Hvorfor gjelder ulikheten $a^2 + b^2 \\geq 2ab$ for alle reelle tall $a$ og $b$?',
    options: ['Fordi $a^2 + b^2 - 2ab = (a - b)^2 \\geq 0$', 'Fordi kvadrater alltid er større enn produkter', 'Fordi $a$ og $b$ må være positive', 'Det gjelder bare når $a = b$'],
    explanation: 'Omskriving gir $(a - b)^2 \\geq 0$, som alltid er sant siden et kvadrat aldri er negativt. Likhet inntreffer nettopp når $a = b$.',
  },
  ],
  'r1-9-2': [
  {
    question: 'Hvilke to steg består et induksjonsbevis av?',
    options: ['Basissteg: vis $P(n_0)$; induksjonssteg: vis at $P(k)$ medfører $P(k+1)$', 'Hypotese og konklusjon', 'Å teste påstanden for små og store tall', 'Direkte bevis og moteksempel'],
    explanation: 'Induksjon krever både at påstanden gjelder for startverdien (basissteget), og at sannhet for $k$ alltid gir sannhet for $k + 1$ (induksjonssteget).',
  },
  {
    question: 'Hva er induksjonsantagelsen?',
    options: ['Antagelsen om at påstanden $P(k)$ er sann for et vilkårlig $k \\geq n_0$', 'Antagelsen om at påstanden er sann for alle $n$', 'At basissteget er unødvendig', 'At påstanden er usann for $k + 1$'],
    explanation: 'I induksjonssteget antar vi at $P(k)$ holder (induksjonsantagelsen) og bruker dette til å vise $P(k+1)$. Vi antar ikke det vi skal bevise for alle $n$.',
  },
  {
    question: 'Hva er summen $1 + 2 + 3 + \\cdots + n$?',
    options: ['$\\frac{n(n+1)}{2}$', '$\\frac{n^2}{2}$', '$n^2$', '$\\frac{n(n-1)}{2}$'],
    explanation: 'Den klassiske formelen $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ bevises med induksjon. Kontroll for $n = 3$: $1 + 2 + 3 = 6 = \\frac{3 \\cdot 4}{2}$.',
  },
  {
    question: 'Hva er basissteget i induksjonsbeviset for $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ med $n_0 = 1$?',
    options: ['Sjekke at venstre side er $1$ og høyre side $\\frac{1 \\cdot 2}{2} = 1$ for $n = 1$', 'Anta at formelen gjelder for $n = k$', 'Vise formelen for $n = k + 1$', 'Sjekke formelen for $n = 100$'],
    explanation: 'Basissteget verifiserer startverdien: for $n = 1$ er begge sider lik $1$, så $P(1)$ er sann.',
  },
  {
    question: 'Hvorfor er et induksjonsbevis ugyldig uten basissteget?',
    options: ['Induksjonssteget viser bare at sannhet «arves» — uten et sant startpunkt er ingenting bevist', 'Basissteget er bare en formalitet og kan sløyfes', 'Fordi induksjonssteget da blir feil', 'Fordi basissteget beviser påstanden for alle $n$'],
    explanation: 'Induksjonssteget er en kjede av implikasjoner. Hvis ikke $P(n_0)$ er etablert, har kjeden ikke noe sant utgangspunkt, og påstanden kan godt være usann for alle $n$.',
  },
  ],
  'r1-9-3': [
  {
    question: 'Hva er kontrapositiven til implikasjonen $P \\Rightarrow Q$?',
    options: ['$\\neg Q \\Rightarrow \\neg P$', '$Q \\Rightarrow P$', '$\\neg P \\Rightarrow \\neg Q$', '$P \\Rightarrow \\neg Q$'],
    explanation: 'Kontrapositiven bytter om og negerer begge: $\\neg Q \\Rightarrow \\neg P$. Varianten $\\neg P \\Rightarrow \\neg Q$ er den «inverse» og er IKKE ekvivalent med originalen.',
  },
  {
    question: 'Hvilket logisk forhold er det mellom $P \\Rightarrow Q$ og kontrapositiven $\\neg Q \\Rightarrow \\neg P$?',
    options: ['De er logisk ekvivalente — alltid begge sanne eller begge usanne', 'Kontrapositiven er svakere', 'Kontrapositiven er det motsatte utsagnet', 'De er ekvivalente bare for matematiske utsagn om tall'],
    explanation: 'En implikasjon og dens kontrapositiv er logisk ekvivalente. Derfor kan vi fritt velge å bevise kontrapositiven i stedet.',
  },
  {
    question: 'Hvordan er strukturen i et bevis ved kontradiksjon (selvmotsigelse)?',
    options: ['Anta at påstanden er usann, utled en selvmotsigelse, og konkluder at påstanden må være sann', 'Vis påstanden direkte fra definisjonene', 'Finn et moteksempel til påstanden', 'Vis påstanden for $n$ og deretter for $n + 1$'],
    explanation: 'Vi antar $\\neg P$ og resonnerer logisk til vi når noe åpenbart umulig. Da kan ikke $\\neg P$ være sann, så $P$ må være sann.',
  },
  {
    question: 'Hvilken bevismetode brukes klassisk for å vise at $\\sqrt{2}$ er irrasjonell?',
    options: ['Kontradiksjon: anta $\\sqrt{2} = \\frac{p}{q}$ som forkortet brøk, og utled at både $p$ og $q$ må være partall', 'Induksjon på nevneren $q$', 'Direkte utregning av desimalene', 'Et moteksempel'],
    explanation: 'Antagelsen $\\sqrt{2} = \\frac{p}{q}$ (forkortet) gir $p^2 = 2q^2$, så $p$ er partall, og dermed blir også $q$ partall — i strid med at brøken var forkortet.',
  },
  {
    question: 'Du skal bevise «hvis $n^2$ er odde, så er $n$ odde». Hva er kontrapositiven du kan bevise i stedet?',
    options: ['Hvis $n$ er partall, så er $n^2$ partall', 'Hvis $n$ er odde, så er $n^2$ odde', 'Hvis $n^2$ er partall, så er $n$ odde', 'Hvis $n$ er odde, så er $n^2$ partall'],
    explanation: 'Kontrapositiven negerer og bytter om: «$n$ ikke odde $\\Rightarrow$ $n^2$ ikke odde», altså «$n$ partall $\\Rightarrow$ $n^2$ partall» — som vises direkte: $(2k)^2 = 2(2k^2)$.',
  },
  ],

};

export default quizData_r1;
