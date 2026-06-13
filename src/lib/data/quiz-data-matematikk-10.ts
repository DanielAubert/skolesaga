import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_10: Record<string, QuizQuestion[]> = {
  '10-1-1': [
    {
      question: 'Hva er $\\sqrt{144}$?',
      options: ['$12$', '$14$', '$72$', '$11$'],
      explanation: '$\\sqrt{144} = 12$ fordi $12 \\cdot 12 = 144$.',
    },
    {
      question: 'Forenkle $\\sqrt{50}$.',
      options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$'],
      explanation: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
    },
    {
      question: 'Regn ut $3\\sqrt{2} + 5\\sqrt{2}$.',
      options: ['$8\\sqrt{2}$', '$8\\sqrt{4}$', '$15\\sqrt{2}$', '$8$'],
      explanation: 'Vi legger sammen koeffisientene til like røtter: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$.',
    },
    {
      question: 'Regn ut $\\sqrt{3} \\cdot \\sqrt{12}$.',
      options: ['$6$', '$\\sqrt{15}$', '$36$', '$3\\sqrt{12}$'],
      explanation: '$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$.',
    },
    {
      question: 'Hva er $\\sqrt{8} + \\sqrt{18}$?',
      options: ['$5\\sqrt{2}$', '$\\sqrt{26}$', '$2\\sqrt{2}$', '$26$'],
      explanation: '$2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.',
    },
  ],
  '10-1-2': [
    {
      question: 'Hva er et rasjonalt tall?',
      options: ['Et tall som kan skrives som brøk $\\frac{p}{q}$ med heltall', 'Et tall med uendelig desimaler', 'Bare hele tall', 'Bare positive tall'],
      explanation: 'Et rasjonalt tall kan skrives som $\\frac{p}{q}$ der $p, q$ er heltall og $q \\neq 0$.',
    },
    {
      question: 'Skriv $0,625$ som forkortet brøk.',
      options: ['$\\frac{5}{8}$', '$\\frac{625}{100}$', '$\\frac{5}{6}$', '$\\frac{3}{5}$'],
      explanation: '$0,625 = \\frac{625}{1000} = \\frac{5}{8}$.',
    },
    {
      question: 'Skriv $0,\\overline{6}$ (0,666...) som brøk.',
      options: ['$\\frac{2}{3}$', '$\\frac{6}{10}$', '$\\frac{1}{6}$', '$\\frac{3}{5}$'],
      explanation: 'La $x = 0,666...$, da $9x = 6$, så $x = \\frac{6}{9} = \\frac{2}{3}$.',
    },
    {
      question: 'Regn ut $\\frac{2}{3} + \\frac{3}{4}$.',
      options: ['$\\frac{17}{12}$', '$\\frac{5}{7}$', '$\\frac{6}{12}$', '$\\frac{5}{12}$'],
      explanation: 'Fellesnevner 12: $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$.',
    },
    {
      question: 'Regn ut $\\frac{5}{6} : \\frac{2}{3}$.',
      options: ['$\\frac{5}{4}$', '$\\frac{10}{18}$', '$\\frac{5}{9}$', '$\\frac{1}{2}$'],
      explanation: '$\\frac{5}{6} \\cdot \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$.',
    },
  ],
  '10-1-3': [
    {
      question: 'Faktoriser $4x^2 - 8x$.',
      options: ['$4x(x - 2)$', '$4(x^2 - 8x)$', '$x(4x - 8)$', '$4x(x - 8)$'],
      explanation: 'Felles faktor $4x$: $4x^2 - 8x = 4x(x - 2)$.',
    },
    {
      question: 'Faktoriser $x^2 - 16$.',
      options: ['$(x + 4)(x - 4)$', '$(x - 4)^2$', '$(x + 4)^2$', '$(x - 16)(x + 1)$'],
      explanation: 'Konjugatsetningen: $x^2 - 16 = (x + 4)(x - 4)$.',
    },
    {
      question: 'Faktoriser $x^2 + 5x + 6$.',
      options: ['$(x + 2)(x + 3)$', '$(x + 1)(x + 6)$', '$(x + 5)(x + 6)$', '$(x - 2)(x - 3)$'],
      explanation: 'Tall som ganger gir 6 og summerer til 5: 2 og 3. $(x + 2)(x + 3)$.',
    },
    {
      question: 'Forenkle $\\frac{x^2 - 9}{x + 3}$.',
      options: ['$x - 3$', '$x + 3$', '$x - 9$', '$x^2 - 3$'],
      explanation: '$\\frac{(x+3)(x-3)}{x+3} = x - 3$.',
    },
    {
      question: 'Faktoriser $x^2 - 10x + 25$.',
      options: ['$(x - 5)^2$', '$(x + 5)^2$', '$(x - 5)(x + 5)$', '$(x - 25)(x - 1)$'],
      explanation: 'Andre kvadratsetning: $x^2 - 10x + 25 = (x - 5)^2$.',
    },
  ],
  '10-1-4': [
    {
      question: 'Hva er $a^{\\frac{1}{n}}$ skrevet som rot?',
      options: ['$\\sqrt[n]{a}$', '$a^n$', '$\\frac{1}{a^n}$', '$n\\sqrt{a}$'],
      explanation: 'En brøkeksponent $\\frac{1}{n}$ tilsvarer den $n$-te roten: $a^{\\frac{1}{n}} = \\sqrt[n]{a}$.',
    },
    {
      question: 'Hva er $16^{\\frac{1}{2}}$?',
      options: ['$4$', '$8$', '$256$', '$2$'],
      explanation: '$16^{\\frac{1}{2}} = \\sqrt{16} = 4$.',
    },
    {
      question: 'Hva er $8^{\\frac{2}{3}}$?',
      options: ['$4$', '$16$', '$8$', '$2$'],
      explanation: '$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
    },
    {
      question: 'Forenkle $x^{\\frac{1}{2}} \\cdot x^{\\frac{3}{2}}$.',
      options: ['$x^2$', '$x^{\\frac{3}{4}}$', '$x^3$', '$x$'],
      explanation: 'Legg sammen eksponentene: $x^{\\frac{1}{2} + \\frac{3}{2}} = x^2$.',
    },
    {
      question: 'Hva er $4^{-\\frac{1}{2}}$?',
      options: ['$\\frac{1}{2}$', '$2$', '$-2$', '$\\frac{1}{4}$'],
      explanation: '$4^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2}$.',
    },
  ],
  '10-2-1': [
    {
      question: 'Løs $3x + 7 = 22$.',
      options: ['$x = 5$', '$x = 7$', '$x = 15$', '$x = 9$'],
      explanation: '$3x = 22 - 7 = 15$, så $x = 5$.',
    },
    {
      question: 'Løs $5x - 12 = 2x + 9$.',
      options: ['$x = 7$', '$x = 3$', '$x = 21$', '$x = 1$'],
      explanation: '$5x - 2x = 9 + 12$, altså $3x = 21$, $x = 7$.',
    },
    {
      question: 'Hva betyr det at en likning gir $-14 = 6$ etter forenkling?',
      options: ['Ingen løsning', 'Uendelig mange løsninger', '$x = 0$', '$x = -14$'],
      explanation: 'En selvmotsigelse betyr at likningen ikke har noen løsning.',
    },
    {
      question: 'Løs $\\frac{x}{3} + 2 = 5$.',
      options: ['$x = 9$', '$x = 3$', '$x = 15$', '$x = 1$'],
      explanation: '$\\frac{x}{3} = 3$, så $x = 9$.',
    },
    {
      question: 'Standardformen for en førstegradslikning er:',
      options: ['$ax + b = 0$', '$ax^2 + bx + c = 0$', '$x = ax + b$', '$a + b = 0$'],
      explanation: 'En førstegradslikning kan skrives $ax + b = 0$ med $a \\neq 0$.',
    },
  ],
  '10-2-2': [
    {
      question: 'Hva er abc-formelen?',
      options: ['$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', '$x = \\frac{-b}{2a}$', '$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$', '$x = -\\frac{b}{a}$'],
      explanation: 'abc-formelen: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
    },
    {
      question: 'Løs $x^2 - 5x + 6 = 0$.',
      options: ['$x = 2$ eller $x = 3$', '$x = -2$ eller $x = -3$', '$x = 1$ eller $x = 6$', '$x = 5$ eller $x = 6$'],
      explanation: '$(x - 2)(x - 3) = 0$ gir $x = 2$ eller $x = 3$.',
    },
    {
      question: 'Løs $2x^2 - 5x - 3 = 0$ med abc-formelen.',
      options: ['$x = 3$ eller $x = -\\frac{1}{2}$', '$x = -3$ eller $x = \\frac{1}{2}$', '$x = 2$ eller $x = 3$', '$x = 1$ eller $x = 3$'],
      explanation: '$x = \\frac{5 \\pm \\sqrt{49}}{4} = \\frac{5 \\pm 7}{4}$, så $x = 3$ eller $x = -\\frac{1}{2}$.',
    },
    {
      question: 'Hva forteller diskriminanten $D = b^2 - 4ac$ når $D = 0$?',
      options: ['Én løsning (dobbeltrot)', 'To ulike løsninger', 'Ingen reelle løsninger', 'Uendelig mange løsninger'],
      explanation: '$D = 0$ gir én løsning (dobbeltrot).',
    },
    {
      question: 'Hva er nullpunktene til $f(x) = x^2 - 2x - 8$?',
      options: ['$x = 4$ og $x = -2$', '$x = -4$ og $x = 2$', '$x = 8$ og $x = -1$', '$x = 2$ og $x = 4$'],
      explanation: '$(x - 4)(x + 2) = 0$ gir $x = 4$ og $x = -2$.',
    },
  ],
  '10-2-3': [
    {
      question: 'Hva er et likningssett?',
      options: ['To eller flere likninger som løses samtidig', 'En likning med to ledd', 'En andregradslikning', 'En ulikhet'],
      explanation: 'Et likningssett er flere likninger som skal tilfredsstilles samtidig.',
    },
    {
      question: 'Løs settet $y = 2x + 1$ og $3x + y = 11$.',
      options: ['$(2, 5)$', '$(5, 2)$', '$(1, 3)$', '$(3, 1)$'],
      explanation: 'Sett inn: $3x + 2x + 1 = 11$ gir $x = 2$, $y = 5$.',
    },
    {
      question: 'I addisjonsmetoden for $2x + 3y = 13$ og $4x - 3y = 5$, hva blir $x$?',
      options: ['$x = 3$', '$x = 2$', '$x = 18$', '$x = 6$'],
      explanation: 'Legg sammen: $6x = 18$, så $x = 3$.',
    },
    {
      question: 'Hva er den grafiske tolkningen av løsningen til et likningssett?',
      options: ['Skjæringspunktet mellom linjene', 'Nullpunktet', 'Toppunktet', 'Origo'],
      explanation: 'Løsningen er der de to linjene krysser hverandre.',
    },
    {
      question: 'En billettautomat tok 1800 kr fra 24 billetter. Voksen 100 kr, barn 50 kr. Hvor mange voksne?',
      options: ['$12$', '$24$', '$18$', '$6$'],
      explanation: '$x + y = 24$ og $100x + 50y = 1800$ gir $x = 12$ voksne (og 12 barn).',
    },
  ],
  '10-2-4': [
    {
      question: 'Løs ulikheten $3x - 7 > 8$.',
      options: ['$x > 5$', '$x < 5$', '$x > 15$', '$x > 1$'],
      explanation: '$3x > 15$, så $x > 5$.',
    },
    {
      question: 'Løs $-2x + 5 \\leq 11$.',
      options: ['$x \\geq -3$', '$x \\leq -3$', '$x \\geq 3$', '$x \\leq 3$'],
      explanation: '$-2x \\leq 6$, deler med $-2$ og snur tegnet: $x \\geq -3$.',
    },
    {
      question: 'Løs den doble ulikheten $-3 < 2x + 1 \\leq 7$.',
      options: ['$-2 < x \\leq 3$', '$-3 < x \\leq 7$', '$-2 \\leq x < 3$', '$-1 < x \\leq 3$'],
      explanation: 'Trekk fra 1: $-4 < 2x \\leq 6$, del på 2: $-2 < x \\leq 3$.',
    },
    {
      question: 'Løs $x^2 - 4x - 5 > 0$.',
      options: ['$x < -1$ eller $x > 5$', '$-1 < x < 5$', '$x < 5$', '$x > -1$'],
      explanation: '$(x - 5)(x + 1) > 0$ gir $x < -1$ eller $x > 5$ (fortegnsskjema).',
    },
    {
      question: 'Hvilket verktøy bruker vi til å løse andregradsulikheter?',
      options: ['Fortegnsskjema', 'Abc-formelen alene', 'Vekstfaktor', 'Pytagoras'],
      explanation: 'Vi finner nullpunktene og bruker et fortegnsskjema for å lese av løsningen.',
    },
  ],
  '10-3-1': [
    {
      question: 'For $f(x) = -2x + 7$, hva er stigningstall og konstantledd?',
      options: ['$a = -2$, $b = 7$', '$a = 7$, $b = -2$', '$a = 2$, $b = 7$', '$a = -2$, $b = -7$'],
      explanation: 'Sammenlign med $ax + b$: $a = -2$, $b = 7$.',
    },
    {
      question: 'Finn stigningstallet gjennom $(1, 8)$ og $(3, 2)$.',
      options: ['$-3$', '$3$', '$-6$', '$2$'],
      explanation: '$a = \\frac{2 - 8}{3 - 1} = \\frac{-6}{2} = -3$.',
    },
    {
      question: 'Finn nullpunktet til $f(x) = 2x + 6$.',
      options: ['$x = -3$', '$x = 3$', '$x = 6$', '$x = -6$'],
      explanation: '$2x + 6 = 0$ gir $x = -3$.',
    },
    {
      question: 'Finn skjæringspunktet mellom $f(x) = 2x + 1$ og $g(x) = -x + 10$.',
      options: ['$(3, 7)$', '$(7, 3)$', '$(3, 10)$', '$(1, 9)$'],
      explanation: '$2x + 1 = -x + 10$ gir $x = 3$, og $f(3) = 7$.',
    },
    {
      question: 'En taxi koster $P(x) = 15x + 50$. Hva koster en tur på 8 km?',
      options: ['$170$ kr', '$120$ kr', '$65$ kr', '$400$ kr'],
      explanation: '$P(8) = 15 \\cdot 8 + 50 = 170$ kr.',
    },
  ],
  '10-3-2': [
    {
      question: 'Hva er grafen til en andregradsfunksjon?',
      options: ['En parabel', 'En rett linje', 'En sirkel', 'En hyperbel'],
      explanation: 'Grafen til $f(x) = ax^2 + bx + c$ er en parabel.',
    },
    {
      question: 'Hva betyr det at $a < 0$ i en andregradsfunksjon?',
      options: ['Parabelen åpner nedover (toppunkt)', 'Parabelen åpner oppover (bunnpunkt)', 'Linjen synker', 'Det er ingen nullpunkter'],
      explanation: '$a < 0$ gir en parabel som åpner nedover med et toppunkt.',
    },
    {
      question: 'Hva er likningen for symmetrilinjen?',
      options: ['$x = -\\frac{b}{2a}$', '$x = -\\frac{b}{a}$', '$x = \\frac{c}{a}$', '$x = b^2 - 4ac$'],
      explanation: 'Symmetrilinjen er $x = -\\frac{b}{2a}$.',
    },
    {
      question: 'Finn bunnpunktet til $f(x) = x^2 - 4x + 3$.',
      options: ['$(2, -1)$', '$(2, 1)$', '$(-2, -1)$', '$(4, 3)$'],
      explanation: '$x = \\frac{4}{2} = 2$, $f(2) = 4 - 8 + 3 = -1$. Bunnpunkt $(2, -1)$.',
    },
    {
      question: 'En ball: $h(t) = -5t^2 + 20t + 2$. Når er den høyest?',
      options: ['Etter $2$ sekunder', 'Etter $4$ sekunder', 'Etter $5$ sekunder', 'Etter $20$ sekunder'],
      explanation: '$t = -\\frac{20}{2 \\cdot (-5)} = 2$ sekunder.',
    },
  ],
  '10-3-3': [
    {
      question: 'Hva er startverdien på en graf?',
      options: ['Verdien når $x = 0$ (krysser y-aksen)', 'Nullpunktet', 'Toppunktet', 'Stigningstallet'],
      explanation: 'Startverdien er $f(0)$, der grafen krysser y-aksen.',
    },
    {
      question: 'Et museum: voksen 50 kr, barn 25 kr. Hva koster 3 voksne og 4 barn?',
      options: ['$250$ kr', '$200$ kr', '$300$ kr', '$175$ kr'],
      explanation: '$50 \\cdot 3 + 25 \\cdot 4 = 150 + 100 = 250$ kr.',
    },
    {
      question: 'Senter A: $30x + 300$, Senter B: $600$. Ved hvor mange økter er de like dyre?',
      options: ['10 økter', '20 økter', '5 økter', '15 økter'],
      explanation: '$30x + 300 = 600$ gir $30x = 300$, så $x = 10$.',
    },
    {
      question: 'Hva er den uavhengige variabelen i en funksjon?',
      options: ['$x$ (det vi styrer)', '$f(x)$ (det som endrer seg)', 'Konstantleddet', 'Stigningstallet'],
      explanation: 'Den uavhengige variabelen er $x$; $f(x)$ er den avhengige.',
    },
    {
      question: 'Hvordan finner du når ett alternativ lønner seg fremfor et annet?',
      options: ['Finn skjæringspunktet mellom funksjonene', 'Finn nullpunktet', 'Finn toppunktet', 'Regn ut gjennomsnittet'],
      explanation: 'Skjæringspunktet viser når de to alternativene koster det samme.',
    },
  ],
  '10-3-4': [
    {
      question: 'Hva er lineær regresjon?',
      options: ['Å finne den rette linjen som passer best til datapunkter', 'Å løse en likning', 'Å tegne en parabel', 'Å faktorisere'],
      explanation: 'Lineær regresjon finner linjen $y = ax + b$ som best beskriver dataene.',
    },
    {
      question: 'Hva betyr en korrelasjonskoeffisient $r = 1$?',
      options: ['Perfekt positiv korrelasjon', 'Ingen sammenheng', 'Perfekt negativ korrelasjon', 'Svak sammenheng'],
      explanation: '$r = 1$ betyr at alle punktene ligger på en stigende rett linje.',
    },
    {
      question: 'Hva betyr $r = 0,85$?',
      options: ['Sterk positiv korrelasjon', 'Svak korrelasjon', 'Negativ korrelasjon', 'Ingen korrelasjon'],
      explanation: '$r = 0,85$ er positiv og sterk fordi $|r| > 0,7$.',
    },
    {
      question: 'Hva er forskjellen på interpolasjon og ekstrapolasjon?',
      options: ['Interpolasjon er innenfor dataområdet, ekstrapolasjon er utenfor', 'De er det samme', 'Ekstrapolasjon er mer pålitelig', 'Interpolasjon er utenfor dataområdet'],
      explanation: 'Interpolasjon (innenfor) er pålitelig; ekstrapolasjon (utenfor) er mer usikker.',
    },
    {
      question: 'Hvilken metode finner regresjonslinjen ved å minimere kvadratavvik?',
      options: ['Minste kvadraters metode', 'Abc-formelen', 'Fortegnsskjema', 'Pytagoras'],
      explanation: 'Minste kvadraters metode minimerer summen av kvadrerte avvik fra linjen.',
    },
  ],
  '10-4-1': [
    {
      question: 'En rettvinklet trekant har kateter 6 cm og 8 cm. Finn hypotenusen.',
      options: ['$10$ cm', '$14$ cm', '$48$ cm', '$7$ cm'],
      explanation: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ cm.',
    },
    {
      question: 'Hypotenusen er 25 cm og en katet 7 cm. Finn den andre kateten.',
      options: ['$24$ cm', '$18$ cm', '$32$ cm', '$26$ cm'],
      explanation: '$b = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$ cm.',
    },
    {
      question: 'Finn diagonalen i et rektangel med sider 12 m og 5 m.',
      options: ['$13$ m', '$17$ m', '$7$ m', '$169$ m'],
      explanation: '$d = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ m.',
    },
    {
      question: 'Finn avstanden mellom $A(1, 2)$ og $B(5, 5)$.',
      options: ['$5$', '$7$', '$25$', '$4$'],
      explanation: '$d = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$.',
    },
    {
      question: 'En eske er $3 \\times 4 \\times 12$ cm. Hva er romdiagonalen?',
      options: ['$13$ cm', '$19$ cm', '$169$ cm', '$12$ cm'],
      explanation: '$D = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{169} = 13$ cm.',
    },
  ],
  '10-4-2': [
    {
      question: 'Hva betyr huskeregelen SOH i SOH-CAH-TOA?',
      options: ['Sinus = motstående / hypotenus', 'Sinus = hosliggende / hypotenus', 'Cosinus = motstående / hypotenus', 'Tangens = motstående / hypotenus'],
      explanation: 'SOH: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenus}}$.',
    },
    {
      question: 'En trekant har hypotenus 10 cm og vinkel $30°$. Finn motstående katet.',
      options: ['$5$ cm', '$8,66$ cm', '$10$ cm', '$3$ cm'],
      explanation: '$a = 10 \\cdot \\sin 30° = 10 \\cdot 0,5 = 5$ cm.',
    },
    {
      question: 'Hvilket forhold bruker vi for å finne motstående katet fra hosliggende katet?',
      options: ['Tangens', 'Sinus', 'Cosinus', 'Pytagoras'],
      explanation: '$\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$.',
    },
    {
      question: 'En trekant har kateter 5 cm og 12 cm. Hva er den minste spisse vinkelen (ca.)?',
      options: ['$22,6°$', '$67,4°$', '$45°$', '$30°$'],
      explanation: '$\\tan v = \\frac{5}{12}$, så $v = \\arctan(0,417) \\approx 22,6°$.',
    },
    {
      question: 'Hvilket verktøy bruker vi for å finne en vinkel når vi kjenner sidene?',
      options: ['Inverse trigonometriske funksjoner ($\\sin^{-1}$ osv.)', 'Vekstfaktor', 'Abc-formelen', 'Fortegnsskjema'],
      explanation: 'Vi bruker $\\sin^{-1}$, $\\cos^{-1}$ eller $\\tan^{-1}$ for å finne vinkelen.',
    },
  ],
  '10-4-3': [
    {
      question: 'Hva kjennetegner en vektor?',
      options: ['Den har både lengde og retning', 'Den har bare verdi', 'Den er alltid positiv', 'Den er et heltall'],
      explanation: 'En vektor har både lengde (størrelse) og retning.',
    },
    {
      question: 'Finn vektoren fra $A(1, 2)$ til $B(4, 6)$.',
      options: ['$[3, 4]$', '$[5, 8]$', '$[3, 8]$', '$[4, 6]$'],
      explanation: '$\\vec{AB} = [4 - 1, 6 - 2] = [3, 4]$.',
    },
    {
      question: 'Hva er lengden til vektoren $[3, 4]$?',
      options: ['$5$', '$7$', '$25$', '$12$'],
      explanation: '$|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
    },
    {
      question: 'Gitt $\\vec{a} = [3, 2]$ og $\\vec{b} = [1, 4]$. Finn $\\vec{a} + \\vec{b}$.',
      options: ['$[4, 6]$', '$[2, -2]$', '$[3, 8]$', '$[4, 8]$'],
      explanation: 'Legg sammen komponentene: $[3 + 1, 2 + 4] = [4, 6]$.',
    },
    {
      question: 'Gitt $\\vec{v} = [2, -3]$. Hva er $3\\vec{v}$?',
      options: ['$[6, -9]$', '$[5, 0]$', '$[6, 9]$', '$[2, -9]$'],
      explanation: 'Skalarmultiplikasjon: $3 \\cdot [2, -3] = [6, -9]$.',
    },
  ],
  '10-4-4': [
    {
      question: 'Finn volumet av en kjegle med radius 6 cm og høyde 10 cm.',
      options: ['$120\\pi \\text{ cm}^3$', '$360\\pi \\text{ cm}^3$', '$60\\pi \\text{ cm}^3$', '$240\\pi \\text{ cm}^3$'],
      explanation: '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\cdot 36 \\cdot 10 = 120\\pi \\text{ cm}^3$.',
    },
    {
      question: 'Finn volumet av en kule med radius 6 cm.',
      options: ['$288\\pi \\text{ cm}^3$', '$144\\pi \\text{ cm}^3$', '$216\\pi \\text{ cm}^3$', '$72\\pi \\text{ cm}^3$'],
      explanation: '$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi \\text{ cm}^3$.',
    },
    {
      question: 'Hva er overflaten av en kule med radius 5 cm?',
      options: ['$100\\pi \\text{ cm}^2$', '$25\\pi \\text{ cm}^2$', '$50\\pi \\text{ cm}^2$', '$125\\pi \\text{ cm}^2$'],
      explanation: '$A = 4\\pi r^2 = 4\\pi \\cdot 25 = 100\\pi \\text{ cm}^2$.',
    },
    {
      question: 'Hva er slanthøyden $s$ for en kjegle?',
      options: ['$s = \\sqrt{r^2 + h^2}$', '$s = r + h$', '$s = \\sqrt{r^2 - h^2}$', '$s = r \\cdot h$'],
      explanation: 'Slanthøyden følger av Pytagoras: $s = \\sqrt{r^2 + h^2}$.',
    },
    {
      question: 'En iskremkjegle: halvkule ($r=3$) + kjegle ($r=3$, $h=8$). Totalvolum?',
      options: ['$42\\pi \\text{ cm}^3$', '$60\\pi \\text{ cm}^3$', '$24\\pi \\text{ cm}^3$', '$18\\pi \\text{ cm}^3$'],
      explanation: 'Halvkule $18\\pi$ + kjegle $24\\pi = 42\\pi \\text{ cm}^3$.',
    },
  ],
  '10-5-1': [
    {
      question: 'Marie har 4 bukser og 5 t-skjorter. Hvor mange antrekk?',
      options: ['$20$', '$9$', '$45$', '$25$'],
      explanation: 'Multiplikasjonsprinsippet: $4 \\cdot 5 = 20$.',
    },
    {
      question: 'Hva er $5!$ (5 fakultet)?',
      options: ['$120$', '$25$', '$15$', '$24$'],
      explanation: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
    },
    {
      question: 'På hvor mange måter kan 6 personer stille seg på rekke?',
      options: ['$720$', '$36$', '$120$', '$6$'],
      explanation: '$6! = 720$.',
    },
    {
      question: 'Hva er forskjellen på permutasjoner og kombinasjoner?',
      options: ['Permutasjoner: rekkefølge betyr noe; kombinasjoner: ikke', 'De er det samme', 'Kombinasjoner: rekkefølge betyr noe', 'Permutasjoner brukes bare på tall'],
      explanation: 'I permutasjoner betyr rekkefølgen noe; i kombinasjoner gjør den ikke det.',
    },
    {
      question: 'En komité på 4 velges fra 10 personer. Hvor mange måter? ($\\binom{10}{4}$)',
      options: ['$210$', '$5040$', '$24$', '$40$'],
      explanation: '$\\binom{10}{4} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{24} = 210$.',
    },
  ],
  '10-5-2': [
    {
      question: 'Hva er $P(\\text{partall})$ med en terning?',
      options: ['$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      explanation: 'Partall = {2, 4, 6}, altså $\\frac{3}{6} = \\frac{1}{2}$.',
    },
    {
      question: 'To terninger kastes. Hva er $P(6 \\text{ på begge})$?',
      options: ['$\\frac{1}{36}$', '$\\frac{1}{6}$', '$\\frac{2}{36}$', '$\\frac{1}{12}$'],
      explanation: 'Uavhengige: $\\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$.',
    },
    {
      question: 'Hva er addisjonssetningen?',
      options: ['$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$', '$P(A \\cup B) = P(A) \\cdot P(B)$', '$P(A \\cup B) = P(A) - P(B)$', '$P(A \\cup B) = P(A) + P(B)$ alltid'],
      explanation: 'Addisjonssetningen: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
    },
    {
      question: 'Fra en kortstokk trekkes 2 kort uten tilbakelegging. $P(\\text{to ess})$?',
      options: ['$\\frac{1}{221}$', '$\\frac{1}{169}$', '$\\frac{2}{52}$', '$\\frac{1}{13}$'],
      explanation: '$\\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$.',
    },
    {
      question: 'En pose har 5 røde og 3 blå. To trekkes uten tilbakelegging. $P(\\text{to røde})$?',
      options: ['$\\frac{5}{14}$', '$\\frac{25}{64}$', '$\\frac{5}{8}$', '$\\frac{1}{2}$'],
      explanation: '$\\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.',
    },
  ],
  '10-5-3': [
    {
      question: 'Hva er en populasjon i en undersøkelse?',
      options: ['Hele gruppen vi ønsker å si noe om', 'De vi faktisk spør', 'Antall spørsmål', 'Bare de som svarer'],
      explanation: 'Populasjonen er hele gruppen vi vil si noe om; utvalget er de vi spør.',
    },
    {
      question: 'Hvilken utvalgsmetode gir mest representative resultater?',
      options: ['Tilfeldig (randomisert) utvalg', 'Bekvemmelighetsutvalg', 'Selvseleksjon', 'Nettavstemning'],
      explanation: 'Tilfeldig utvalg gir representative resultater fordi alle har lik sjanse.',
    },
    {
      question: 'Hva er en kvantitativ variabel?',
      options: ['En variabel som måles med tall', 'En variabel som beskriver egenskaper', 'En tilfeldig variabel', 'En kategorisk variabel'],
      explanation: 'Kvantitative variabler måles med tall (høyde, inntekt).',
    },
    {
      question: 'Hva er problemet med et ledende spørsmål?',
      options: ['Det styrer svaret i en bestemt retning', 'Det er for kort', 'Det er for vanskelig', 'Det bruker tall'],
      explanation: 'Et ledende spørsmål er formulert slik at det påvirker svaret.',
    },
    {
      question: 'Karakterene $2, 3, 3, 4, 4, 4, 5, 5, 6$. Hva er gjennomsnittet?',
      options: ['$4$', '$4,5$', '$3$', '$5$'],
      explanation: '$\\frac{36}{9} = 4$.',
    },
  ],
  '10-6-1': [
    {
      question: 'Finn 35 % av 800 kr.',
      options: ['$280$ kr', '$350$ kr', '$28$ kr', '$520$ kr'],
      explanation: '$0,35 \\cdot 800 = 280$ kr.',
    },
    {
      question: 'En TV koster 7500 kr inkludert 25 % moms. Hva var prisen uten moms?',
      options: ['$6000$ kr', '$5625$ kr', '$9375$ kr', '$5000$ kr'],
      explanation: '$\\frac{7500}{1,25} = 6000$ kr.',
    },
    {
      question: 'Arbeidsledigheten gikk fra 6 % til 9 %. Hvor mange prosentpoeng er det?',
      options: ['$3$ prosentpoeng', '$50$ prosentpoeng', '$3$ prosent', '$9$ prosentpoeng'],
      explanation: '$9\\% - 6\\% = 3$ prosentpoeng (den prosentvise økningen er derimot 50 %).',
    },
    {
      question: 'En vare koster 720 kr etter 20 % rabatt. Hva var originalprisen?',
      options: ['$900$ kr', '$864$ kr', '$576$ kr', '$740$ kr'],
      explanation: '$x \\cdot 0,80 = 720$ gir $x = \\frac{720}{0,80} = 900$ kr.',
    },
    {
      question: 'En aksje stiger 20 % og synker så 20 %. Hva er resultatet?',
      options: ['4 % lavere enn start', 'Tilbake til start', '4 % høyere enn start', 'Uendret'],
      explanation: '$1,20 \\cdot 0,80 = 0,96$, altså 96 % av start (4 % lavere).',
    },
  ],
  '10-6-2': [
    {
      question: 'Hva er vekstfaktoren ved 12 % økning?',
      options: ['$1,12$', '$0,88$', '$12$', '$1,2$'],
      explanation: 'Vekstfaktor $= 1 + 0,12 = 1,12$.',
    },
    {
      question: 'Hva er vekstfaktoren ved 7 % reduksjon?',
      options: ['$0,93$', '$1,07$', '$0,07$', '$0,7$'],
      explanation: 'Vekstfaktor $= 1 - 0,07 = 0,93$.',
    },
    {
      question: 'Hvilken formel brukes ved gjentatt prosentvis endring?',
      options: ['$\\text{ny verdi} = \\text{startverdi} \\cdot v^n$', '$\\text{ny verdi} = \\text{startverdi} \\cdot v \\cdot n$', '$\\text{ny verdi} = \\text{startverdi} + v^n$', '$\\text{ny verdi} = v^n$'],
      explanation: 'Ny verdi $=$ startverdi $\\cdot v^n$, der $v$ er vekstfaktor og $n$ antall perioder.',
    },
    {
      question: 'Med 70-regelen, hvor lang tid tar det å doble verdien ved 5 % årlig vekst?',
      options: ['Ca. 14 år', 'Ca. 5 år', 'Ca. 70 år', 'Ca. 7 år'],
      explanation: 'Doblingtid $\\approx \\frac{70}{5} = 14$ år.',
    },
    {
      question: 'Et medikament halveres hver 4. time. Hvor mye av 100 mg gjenstår etter 12 timer?',
      options: ['$12,5$ mg', '$25$ mg', '$50$ mg', '$33$ mg'],
      explanation: '3 halveringer: $100 \\cdot 0,5^3 = 100 \\cdot 0,125 = 12,5$ mg.',
    },
  ],
  '10-6-3': [
    {
      question: 'Hva er formelen for rentesrente?',
      options: ['$K_n = K_0 \\cdot (1 + r)^n$', '$K_n = K_0 \\cdot (1 + r \\cdot n)$', '$K_n = K_0 + r^n$', '$K_n = K_0 \\cdot r \\cdot n$'],
      explanation: 'Rentesrente: $K_n = K_0 \\cdot (1 + r)^n$.',
    },
    {
      question: '10 000 kr med 5 % rente i 10 år (rentesrente) blir ca.:',
      options: ['$16\\,289$ kr', '$15\\,000$ kr', '$10\\,500$ kr', '$50\\,000$ kr'],
      explanation: '$10\\,000 \\cdot 1,05^{10} \\approx 16\\,289$ kr.',
    },
    {
      question: 'Hva kjennetegner et serielån?',
      options: ['Like store avdrag, synkende terminbeløp', 'Like store terminbeløp', 'Ingen renter', 'Bare ett avdrag'],
      explanation: 'Serielån har like store avdrag; terminbeløpet synker over tid.',
    },
    {
      question: 'Et serielån på 100 000 kr over 4 år. Hva er det årlige avdraget?',
      options: ['$25\\,000$ kr', '$100\\,000$ kr', '$6000$ kr', '$31\\,000$ kr'],
      explanation: 'Avdrag $= \\frac{100\\,000}{4} = 25\\,000$ kr.',
    },
    {
      question: 'Hva er forskjellen på nominell og effektiv rente?',
      options: ['Effektiv rente inkluderer rentens rente og gebyrer', 'De er alltid like', 'Nominell rente er høyere', 'Effektiv rente ignorerer gebyrer'],
      explanation: 'Effektiv rente er den faktiske renten inkludert rentens rente og gebyrer.',
    },
  ],
  '10-7-1': [
    {
      question: 'Hvilket symbol brukes for de hele tallene?',
      options: ['$\\mathbb{Z}$', '$\\mathbb{N}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
      explanation: '$\\mathbb{Z}$ (fra tysk Zahlen) er de hele tallene.',
    },
    {
      question: 'Hvilket av disse tallene er irrasjonalt?',
      options: ['$\\sqrt{7}$', '$\\sqrt{9}$', '$0,75$', '$\\frac{22}{7}$'],
      explanation: '$\\sqrt{7}$ har uendelig, ikke-periodisk desimalutvikling. $\\sqrt{9} = 3$ er rasjonalt.',
    },
    {
      question: 'Hva kjennetegner et rasjonalt tall sin desimalutvikling?',
      options: ['Endelig eller periodisk', 'Alltid uendelig og ikke-periodisk', 'Alltid endelig', 'Aldri periodisk'],
      explanation: 'Rasjonale tall har enten endelig eller periodisk desimalutvikling.',
    },
    {
      question: 'Skriv $0,\\overline{36}$ (0,363636...) som brøk.',
      options: ['$\\frac{4}{11}$', '$\\frac{36}{100}$', '$\\frac{1}{3}$', '$\\frac{9}{25}$'],
      explanation: 'La $x = 0,3636...$, da $99x = 36$, så $x = \\frac{36}{99} = \\frac{4}{11}$.',
    },
    {
      question: 'Hvilken sammenheng mellom tallmengdene er riktig?',
      options: ['$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$', '$\\mathbb{R} \\subset \\mathbb{Q} \\subset \\mathbb{Z}$', '$\\mathbb{Q} \\subset \\mathbb{N}$', '$\\mathbb{Z} \\subset \\mathbb{N}$'],
      explanation: 'Hver tallmengde er inneholdt i den neste: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.',
    },
  ],
  '10-7-2': [
    {
      question: 'Hva er kravet til $a$ i standardform $a \\times 10^n$?',
      options: ['$1 \\leq a < 10$', '$0 < a < 1$', '$a \\geq 10$', '$a = 1$'],
      explanation: 'På standardform er $1 \\leq a < 10$.',
    },
    {
      question: 'Skriv $4\\,700\\,000$ på standardform.',
      options: ['$4,7 \\times 10^6$', '$47 \\times 10^5$', '$4,7 \\times 10^7$', '$0,47 \\times 10^7$'],
      explanation: 'Flytt komma 6 plasser: $4,7 \\times 10^6$.',
    },
    {
      question: 'Skriv $0,00045$ på standardform.',
      options: ['$4,5 \\times 10^{-4}$', '$4,5 \\times 10^4$', '$45 \\times 10^{-5}$', '$4,5 \\times 10^{-5}$'],
      explanation: 'Flytt komma 4 plasser til høyre: $4,5 \\times 10^{-4}$.',
    },
    {
      question: 'Regn ut $(3 \\times 10^4) \\cdot (2 \\times 10^5)$.',
      options: ['$6 \\times 10^9$', '$6 \\times 10^{20}$', '$5 \\times 10^9$', '$6 \\times 10^4$'],
      explanation: 'Gang tallene og legg sammen eksponentene: $6 \\times 10^9$.',
    },
    {
      question: 'Resultatet $35 \\times 10^9$ skrevet på standardform er:',
      options: ['$3,5 \\times 10^{10}$', '$35 \\times 10^9$', '$3,5 \\times 10^9$', '$0,35 \\times 10^{11}$'],
      explanation: '$35 \\geq 10$, så vi justerer: $35 \\times 10^9 = 3,5 \\times 10^{10}$.',
    },
  ],
  '10-7-3': [
    {
      question: 'Hva er et primtall?',
      options: ['Et tall > 1 som bare er delelig med 1 og seg selv', 'Et partall', 'Et tall med mange delere', 'Tallet 1'],
      explanation: 'Et primtall er større enn 1 og bare delelig med 1 og seg selv.',
    },
    {
      question: 'Hvilket av disse er et sammensatt tall?',
      options: ['$51$', '$29$', '$67$', '$2$'],
      explanation: '$51 = 3 \\times 17$ er sammensatt; 29 og 67 er primtall.',
    },
    {
      question: 'Hva er primtallsfaktoriseringen av $180$?',
      options: ['$2^2 \\times 3^2 \\times 5$', '$2^3 \\times 3 \\times 5$', '$2^2 \\times 3 \\times 5$', '$2 \\times 3^2 \\times 5$'],
      explanation: '$180 = 2^2 \\times 3^2 \\times 5$.',
    },
    {
      question: 'Finn SFF av $60$ og $84$.',
      options: ['$12$', '$420$', '$6$', '$24$'],
      explanation: '$60 = 2^2 \\times 3 \\times 5$, $84 = 2^2 \\times 3 \\times 7$. SFF $= 2^2 \\times 3 = 12$.',
    },
    {
      question: 'Finn MFF (MFM) av $60$ og $84$.',
      options: ['$420$', '$12$', '$5040$', '$144$'],
      explanation: 'Høyeste potens av alle primtall: $2^2 \\times 3 \\times 5 \\times 7 = 420$.',
    },
  ],
  '10-7-4': [
    {
      question: 'Forenkle forholdstallet $24 : 36$.',
      options: ['$2 : 3$', '$3 : 4$', '$4 : 6$', '$1 : 2$'],
      explanation: 'SFF er 12: $24 : 36 = 2 : 3$.',
    },
    {
      question: 'Hva kjennetegner rett proporsjonalitet?',
      options: ['Forholdet $\\frac{y}{x} = k$ er konstant', 'Produktet $xy$ er konstant', 'Summen er konstant', 'Differansen er konstant'],
      explanation: 'Ved rett proporsjonalitet er $\\frac{y}{x} = k$ konstant; grafen går gjennom origo.',
    },
    {
      question: 'En bil bruker 0,6 liter per mil. Hvor mye på 35 mil?',
      options: ['$21$ liter', '$0,6$ liter', '$35$ liter', '$58$ liter'],
      explanation: '$y = 0,6 \\cdot 35 = 21$ liter.',
    },
    {
      question: 'En bil bruker 3 timer på en strekning med 80 km/t. Hvor lang tid med 60 km/t (omvendt proporsjonalt)?',
      options: ['$4$ timer', '$2,25$ timer', '$3$ timer', '$5$ timer'],
      explanation: 'Strekning $= 240$ km, så $\\frac{240}{60} = 4$ timer.',
    },
    {
      question: 'På et kart med målestokk $1 : 50\\,000$, hva er den virkelige avstanden til 3,4 cm?',
      options: ['$1,7$ km', '$17$ km', '$0,17$ km', '$170$ km'],
      explanation: '$3,4 \\cdot 50\\,000 = 170\\,000$ cm $= 1,7$ km.',
    },
  ],
  '10-8-1': [
    {
      question: 'Hva er den distributive loven?',
      options: ['$a(b + c) = ab + ac$', '$a + (b \\cdot c) = ab + ac$', '$a(b + c) = a + bc$', '$ab + ac = a + bc$'],
      explanation: 'Distributiv lov: $a(b + c) = ab + ac$.',
    },
    {
      question: 'Utvid $3x(2x + 5)$.',
      options: ['$6x^2 + 15x$', '$6x^2 + 5$', '$5x^2 + 15x$', '$6x + 15$'],
      explanation: '$3x \\cdot 2x + 3x \\cdot 5 = 6x^2 + 15x$.',
    },
    {
      question: 'Hva står FOIL for ved multiplikasjon av to binomier?',
      options: ['First, Outer, Inner, Last', 'First, Only, Inner, Last', 'Full, Outer, Inner, Last', 'First, Outer, Inverse, Last'],
      explanation: 'FOIL: First, Outer, Inner, Last — fire delprodukter.',
    },
    {
      question: 'Utvid $(x + 3)(x + 5)$.',
      options: ['$x^2 + 8x + 15$', '$x^2 + 15x + 8$', '$x^2 + 8x + 8$', '$x^2 + 15$'],
      explanation: '$x^2 + 5x + 3x + 15 = x^2 + 8x + 15$.',
    },
    {
      question: 'Utvid $(x^2 + 3x + 2)(x + 4)$.',
      options: ['$x^3 + 7x^2 + 14x + 8$', '$x^3 + 3x^2 + 2x + 4$', '$x^3 + 7x^2 + 8$', '$x^3 + 12x^2 + 14x + 8$'],
      explanation: '$x^3 + 4x^2 + 3x^2 + 12x + 2x + 8 = x^3 + 7x^2 + 14x + 8$.',
    },
  ],
  '10-8-2': [
    {
      question: 'Hva er første kvadratsetning?',
      options: ['$(a + b)^2 = a^2 + 2ab + b^2$', '$(a + b)^2 = a^2 + b^2$', '$(a - b)^2 = a^2 - 2ab + b^2$', '$(a + b)(a - b) = a^2 - b^2$'],
      explanation: 'Første kvadratsetning: $(a + b)^2 = a^2 + 2ab + b^2$.',
    },
    {
      question: 'Utvid $(x + 4)^2$.',
      options: ['$x^2 + 8x + 16$', '$x^2 + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 8$'],
      explanation: '$(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 16 = x^2 + 8x + 16$.',
    },
    {
      question: 'Utvid $(x - 6)^2$.',
      options: ['$x^2 - 12x + 36$', '$x^2 + 36$', '$x^2 - 36$', '$x^2 - 12x - 36$'],
      explanation: '$(x - 6)^2 = x^2 - 12x + 36$.',
    },
    {
      question: 'Utvid $(x + 8)(x - 8)$.',
      options: ['$x^2 - 64$', '$x^2 + 64$', '$x^2 - 16x - 64$', '$x^2 - 16$'],
      explanation: 'Konjugatsetningen: $(x + 8)(x - 8) = x^2 - 64$.',
    },
    {
      question: 'Regn ut $47 \\cdot 53$ med konjugatsetningen.',
      options: ['$2491$', '$2500$', '$2509$', '$2400$'],
      explanation: '$(50 - 3)(50 + 3) = 2500 - 9 = 2491$.',
    },
  ],
  '10-8-3': [
    {
      question: 'Forenkle $\\frac{6x^3 + 9x^2 - 3x}{3x}$.',
      options: ['$2x^2 + 3x - 1$', '$2x^2 + 3x$', '$6x^2 + 9x - 3$', '$2x^3 + 3x^2 - x$'],
      explanation: 'Del hvert ledd på $3x$: $2x^2 + 3x - 1$.',
    },
    {
      question: 'Hva kan vi forkorte i en algebraisk brøk?',
      options: ['Bare faktorer, ikke ledd', 'Bare ledd', 'Alt i telleren', 'Bare tall'],
      explanation: 'Vi kan bare forkorte faktorer, ikke enkeltstående ledd.',
    },
    {
      question: 'Forkort $\\frac{x^2 - 9}{x + 3}$.',
      options: ['$x - 3$', '$x + 3$', '$x - 9$', '$x^2 - 3$'],
      explanation: '$\\frac{(x+3)(x-3)}{x+3} = x - 3$.',
    },
    {
      question: 'Forenkle $\\frac{2}{x} + \\frac{3}{x + 1}$.',
      options: ['$\\frac{5x + 2}{x(x + 1)}$', '$\\frac{5}{2x + 1}$', '$\\frac{5x}{x(x+1)}$', '$\\frac{6}{x(x+1)}$'],
      explanation: 'Fellesnevner $x(x+1)$: $\\frac{2(x+1) + 3x}{x(x+1)} = \\frac{5x + 2}{x(x+1)}$.',
    },
    {
      question: 'Forenkle $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2}$.',
      options: ['$x + 2$', '$x - 2$', '$x^2 - 4$', '$\\frac{1}{x + 2}$'],
      explanation: '$\\frac{(x+2)(x-2)}{x+1} \\cdot \\frac{x+1}{x-2} = x + 2$.',
    },
  ],
  '10-9-1': [
    {
      question: 'Hva kjennetegner eksponentiell vekst?',
      options: ['Vekst med fast prosent per periode', 'Vekst med fast beløp per periode', 'Konstant verdi', 'Lineær økning'],
      explanation: 'Eksponentiell vekst øker med samme prosentandel hver periode.',
    },
    {
      question: 'Hva er formen til en eksponentialfunksjon?',
      options: ['$f(x) = a \\cdot b^x$', '$f(x) = ax + b$', '$f(x) = ax^2 + bx + c$', '$f(x) = \\frac{a}{x}$'],
      explanation: 'En eksponentialfunksjon er $f(x) = a \\cdot b^x$, der $a$ er startverdi og $b$ vekstfaktor.',
    },
    {
      question: 'En by har 12 000 innbyggere og øker 3 % per år. Hvor mange etter 2 år?',
      options: ['Ca. 12 731', 'Ca. 12 720', 'Ca. 13 000', 'Ca. 12 360'],
      explanation: '$12\\,000 \\cdot 1,03^2 = 12\\,730,8 \\approx 12\\,731$.',
    },
    {
      question: 'En bakteriekultur starter med 500 og dobles hver time. Hvor mange etter 6 timer?',
      options: ['$32\\,000$', '$3000$', '$6000$', '$16\\,000$'],
      explanation: '$f(6) = 500 \\cdot 2^6 = 500 \\cdot 64 = 32\\,000$.',
    },
    {
      question: 'Hvis $f(2) = 1800$ og $f(5) = 14400$, hva er vekstfaktoren $b$?',
      options: ['$2$', '$3$', '$8$', '$4$'],
      explanation: '$b^3 = \\frac{14\\,400}{1800} = 8$, så $b = \\sqrt[3]{8} = 2$.',
    },
  ],
  '10-9-2': [
    {
      question: 'Hvilket punkt går grafen til $f(x) = a \\cdot b^x$ alltid gjennom?',
      options: ['$(0, a)$', '$(a, 0)$', '$(1, b)$', '$(0, 0)$'],
      explanation: '$f(0) = a \\cdot b^0 = a$, så grafen går gjennom $(0, a)$.',
    },
    {
      question: 'Hva er en horisontal asymptote?',
      options: ['En vannrett linje grafen nærmer seg men aldri når', 'Et nullpunkt', 'Et toppunkt', 'En loddrett linje'],
      explanation: 'En horisontal asymptote er en vannrett linje grafen nærmer seg men aldri krysser.',
    },
    {
      question: 'For $f(x) = a \\cdot b^x$ med $a > 0$, hva er den horisontale asymptoten?',
      options: ['$y = 0$ (x-aksen)', '$y = a$', '$x = 0$', '$y = b$'],
      explanation: 'Asymptoten er x-aksen, $y = 0$ (funksjonsverdien blir aldri 0).',
    },
    {
      question: 'For $f(x) = 3 \\cdot 2^x$, hva er $f(0)$?',
      options: ['$3$', '$6$', '$1$', '$2$'],
      explanation: '$f(0) = 3 \\cdot 2^0 = 3 \\cdot 1 = 3$.',
    },
    {
      question: 'Hva er forskjellen på lineær og eksponentiell vekst?',
      options: ['Lineær: fast beløp, eksponentiell: fast prosent', 'De er like', 'Lineær er alltid raskere', 'Eksponentiell gir en rett linje'],
      explanation: 'Lineær vekst øker med fast beløp; eksponentiell vekst øker med fast prosent.',
    },
  ],
  '10-9-3': [
    {
      question: 'Hvordan velger du mellom lineær og eksponentiell modell?',
      options: ['Lik endring i enheter → lineær; lik prosent → eksponentiell', 'Alltid lineær', 'Alltid eksponentiell', 'Etter hvor mange data du har'],
      explanation: 'Er endringen et fast beløp velges lineær; er den en fast prosent velges eksponentiell.',
    },
    {
      question: 'Data øker ca. 30 % hver måned. Hvilken modell passer?',
      options: ['Eksponentiell ($b = 1,30$)', 'Lineær', 'Andregrads', 'Ingen modell'],
      explanation: 'Konstant prosentvis økning gir en eksponentiell modell med $b = 1,30$.',
    },
    {
      question: 'Hva er tryggest: interpolering eller ekstrapolering?',
      options: ['Interpolering (mellom datapunkt)', 'Ekstrapolering (utenfor datapunkt)', 'Begge er like trygge', 'Ingen av dem'],
      explanation: 'Interpolering mellom datapunktene er tryggere enn ekstrapolering utenfor.',
    },
    {
      question: 'Hvorfor er en eksponentiell smittemodell upålitelig på lang sikt?',
      options: ['Folketallet er begrenset og veksten avtar', 'Den er alltid feil', 'Den vokser for sakte', 'Den gir negative tall'],
      explanation: 'I virkeligheten avtar veksten (immunitet, tiltak, færre å smitte), så modellen overdriver på lang sikt.',
    },
    {
      question: 'Hva er et viktig prinsipp om matematiske modeller?',
      options: ['Ingen modell er perfekt; den er en forenkling', 'Modeller er alltid eksakte', 'Modeller trenger ikke data', 'En modell gjelder for alle situasjoner'],
      explanation: 'En modell er en forenkling av virkeligheten og har alltid begrensninger.',
    },
  ],
  '10-10-1': [
    {
      question: 'Hva betyr det at to figurer er kongruente?',
      options: ['De har nøyaktig samme form og størrelse', 'De har samme form, ulik størrelse', 'De har samme areal', 'De har samme omkrets'],
      explanation: 'Kongruente figurer har nøyaktig samme form og størrelse.',
    },
    {
      question: 'Hva sier SSS-setningen?',
      options: ['Tre par like sider gir kongruens', 'To sider og en vinkel gir kongruens', 'To vinkler og en side gir kongruens', 'Tre like vinkler gir kongruens'],
      explanation: 'SSS: tre par like sider gir kongruente trekanter.',
    },
    {
      question: 'I SVS-setningen, hvor må vinkelen ligge?',
      options: ['Mellom de to kjente sidene', 'Overfor den lengste siden', 'Hvor som helst', 'Ved hypotenusen'],
      explanation: 'I SVS må vinkelen ligge mellom de to kjente sidene.',
    },
    {
      question: 'Hvilken kombinasjon er IKKE en gyldig kongruenssetning (generelt)?',
      options: ['SSV (side-side-vinkel)', 'SSS', 'SVS', 'VSV'],
      explanation: 'SSV er generelt ikke gyldig (med mindre vinkelen ligger overfor den lengste siden).',
    },
    {
      question: 'Når to linjer krysser i M (midtpunkt på begge), hvilken setning viser $\\triangle AMC \\cong \\triangle BMD$?',
      options: ['SVS (med toppvinkler)', 'SSS', 'AAS', 'Ingen'],
      explanation: 'To sider og toppvinkelen mellom dem gir SVS.',
    },
  ],
  '10-10-2': [
    {
      question: 'Hva betyr det at to figurer er formlike?',
      options: ['Like vinkler og samme forholdstall mellom sider', 'Samme størrelse', 'Samme areal', 'Like lange sider'],
      explanation: 'Formlike figurer har like vinkler og samme forholdstall mellom korresponderende sider.',
    },
    {
      question: 'To trekanter har sider 3,4,5 og 6,8,10. Hva er forstørrelsesfaktoren?',
      options: ['$2$', '$3$', '$0,5$', '$5$'],
      explanation: '$k = \\frac{6}{3} = 2$ (samme for alle sider).',
    },
    {
      question: 'Hva sier AA-kriteriet for formlikhet?',
      options: ['To par like vinkler gir formlikhet', 'To par like sider gir formlikhet', 'Tre like sider gir formlikhet', 'En vinkel og en side gir formlikhet'],
      explanation: 'AA: to par like vinkler gir formlike trekanter.',
    },
    {
      question: 'Du er 1,70 m høy med 2,00 m skygge. Et tre har 14,00 m skygge. Hvor høyt er treet?',
      options: ['$11,9$ m', '$14$ m', '$7$ m', '$10$ m'],
      explanation: '$\\frac{h}{1,70} = \\frac{14,00}{2,00}$, så $h = 1,70 \\cdot 7 = 11,9$ m.',
    },
    {
      question: 'Ved forstørrelsesfaktor $k$, hva skjer med volumet?',
      options: ['Det ganges med $k^3$', 'Det ganges med $k$', 'Det ganges med $k^2$', 'Det er uendret'],
      explanation: 'Volum skaleres med $k^3$ (lengder med $k$, areal med $k^2$).',
    },
  ],
  '10-11-1': [
    {
      question: 'Hva er en algoritme?',
      options: ['En presis, endelig oppskrift for å løse et problem', 'En tilfeldig kode', 'En matematisk formel', 'En variabel'],
      explanation: 'En algoritme er en presis, endelig fremgangsmåte for å løse et problem.',
    },
    {
      question: 'Hvilken form i et flytdiagram brukes for en beslutning (ja/nei)?',
      options: ['Diamant (rombe)', 'Rektangel', 'Oval', 'Parallellogram'],
      explanation: 'En diamant/rombe brukes for beslutninger i et flytdiagram.',
    },
    {
      question: 'Hva gjør Euklids algoritme?',
      options: ['Finner største felles divisor (SFD)', 'Sorterer en liste', 'Finner primtall', 'Beregner gjennomsnitt'],
      explanation: 'Euklids algoritme finner SFD ved gjentatt divisjon med rest.',
    },
    {
      question: 'Hva er $\\text{SFD}(48, 18)$ med Euklids algoritme?',
      options: ['$6$', '$12$', '$3$', '$9$'],
      explanation: '$48 \\bmod 18 = 12$, $18 \\bmod 12 = 6$, $12 \\bmod 6 = 0$. SFD $= 6$.',
    },
    {
      question: 'Hvordan fungerer boblesortering?',
      options: ['Sammenligner og bytter naboer gjentatte ganger', 'Halverer søkeområdet', 'Velger tilfeldige tall', 'Deler i to like halvdeler'],
      explanation: 'Boblesortering sammenligner par av naboer og bytter dem til listen er sortert.',
    },
  ],
  '10-11-2': [
    {
      question: 'Hva bruker vi i Python som desimaltegn?',
      options: ['Punktum', 'Komma', 'Skråstrek', 'Kolon'],
      explanation: 'I Python brukes punktum som desimaltegn, f.eks. `3.14`.',
    },
    {
      question: 'Hva gir alltid `input()` tilbake?',
      options: ['Tekst (streng)', 'Et heltall', 'Et desimaltall', 'En liste'],
      explanation: '`input()` gir alltid tekst; bruk `int()` eller `float()` for å få tall.',
    },
    {
      question: 'Hva betyr operatoren `%` i Python?',
      options: ['Modulo (rest ved divisjon)', 'Prosent', 'Multiplikasjon', 'Potens'],
      explanation: '`%` gir resten ved divisjon, f.eks. `7 % 3` gir `1`.',
    },
    {
      question: 'Hvilke tall gir `range(1, 6)`?',
      options: ['$1, 2, 3, 4, 5$', '$1, 2, 3, 4, 5, 6$', '$0, 1, 2, 3, 4, 5$', '$2, 3, 4, 5, 6$'],
      explanation: '`range(1, 6)` gir tallene fra 1 til, men ikke med, 6.',
    },
    {
      question: 'Hva gir `sum([4, 7, 2])` i Python?',
      options: ['$13$', '$3$', '$7$', '$2$'],
      explanation: '`sum()` legger sammen elementene: $4 + 7 + 2 = 13$.',
    },
  ],
  '10-11-3': [
    {
      question: 'Hva er numerisk løsning av en likning?',
      options: ['Å finne en tilnærmet løsning ved systematisk prøving', 'Å løse den med formel', 'Å tegne grafen', 'Å gjette ett tall'],
      explanation: 'Numerisk løsning tester mange verdier til $f(x) \\approx 0$.',
    },
    {
      question: 'Hva er en Monte Carlo-simulering?',
      options: ['Å bruke tilfeldige tall for å estimere et resultat', 'Å løse en likning eksakt', 'Å sortere en liste', 'Å tegne en parabel'],
      explanation: 'Monte Carlo bruker mange tilfeldige forsøk for å estimere f.eks. en sannsynlighet.',
    },
    {
      question: 'Opp til hvilken verdi trenger vi sjekke divisorer for å avgjøre om $n$ er primtall?',
      options: ['$\\sqrt{n}$', '$n$', '$n/2$', '$2n$'],
      explanation: 'Det holder å sjekke divisorer opp til $\\sqrt{n}$.',
    },
    {
      question: 'Hva gir en Monte Carlo-simulering av to terninger typisk for $P(\\text{sum} = 7)$?',
      options: ['Ca. 0,167', 'Ca. 0,5', 'Ca. 0,083', 'Ca. 1,0'],
      explanation: 'Den nærmer seg den eksakte verdien $\\frac{6}{36} = \\frac{1}{6} \\approx 0,167$.',
    },
    {
      question: 'Hva er medianen til $[3, 3, 4, 4, 4, 5, 5, 5, 5, 6]$ (10 verdier)?',
      options: ['$4,5$', '$4$', '$5$', '$4,4$'],
      explanation: 'De to midterste er 4 og 5: $\\frac{4 + 5}{2} = 4,5$.',
    },
  ],
  '10-12-1': [
    {
      question: 'Hvor lang er matematikkeksamen i 10. klasse?',
      options: ['5 timer', '2 timer', '3 timer', '4 timer'],
      explanation: 'Eksamen varer 5 timer, delt i Del 1 og Del 2.',
    },
    {
      question: 'Hva kjennetegner Del 1 av eksamen?',
      options: ['Ingen hjelpemidler (ingen kalkulator)', 'Alle hjelpemidler tillatt', 'Bare tekstoppgaver', 'Gruppearbeid'],
      explanation: 'Del 1 er uten hjelpemidler — ingen kalkulator, formelsamling eller digitale verktøy.',
    },
    {
      question: 'Hva betyr det å «vise utregning»?',
      options: ['Skrive formel, sette inn tall og vise mellomregning', 'Bare skrive svaret', 'Bruke kalkulator', 'Tegne en figur'],
      explanation: 'Du må vise formel, innsetting og mellomregning, ikke bare svaret.',
    },
    {
      question: 'Hva er en vanlig feil som koster poeng på eksamen?',
      options: ['Å glemme enheter', 'Å skrive for mye', 'Å lese oppgaven flere ganger', 'Å vise mellomregning'],
      explanation: 'Å glemme enheter (cm, kr osv.) gir ufullstendige svar og tap av poeng.',
    },
    {
      question: 'Hvorfor bør du skrive ned det du vet selv om du ikke klarer hele oppgaven?',
      options: ['Du kan få delpoeng', 'Det er påkrevd', 'Sensor liker lange svar', 'For å bruke opp tiden'],
      explanation: 'Delpoeng gis for riktig fremgangsmåte, formler og delregninger.',
    },
  ],
  '10-12-2': [
    {
      question: 'Hva blir $(-3) \\cdot (-4)$?',
      options: ['$12$', '$-12$', '$7$', '$-7$'],
      explanation: 'Minus ganger minus blir pluss: $(-3) \\cdot (-4) = 12$.',
    },
    {
      question: 'Regn ut $\\frac{1}{3} + \\frac{1}{4}$.',
      options: ['$\\frac{7}{12}$', '$\\frac{2}{7}$', '$\\frac{1}{12}$', '$\\frac{2}{12}$'],
      explanation: 'Fellesnevner 12: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$.',
    },
    {
      question: 'Finn arealet av en trekant med grunnlinje 8 cm og høyde 5 cm.',
      options: ['$20 \\text{ cm}^2$', '$40 \\text{ cm}^2$', '$13 \\text{ cm}^2$', '$26 \\text{ cm}^2$'],
      explanation: '$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = 20 \\text{ cm}^2$.',
    },
    {
      question: 'En jakke koster 1200 kr med 25 % rabatt. Hva er prisen?',
      options: ['$900$ kr', '$1175$ kr', '$300$ kr', '$960$ kr'],
      explanation: '$1200 \\cdot 0,75 = 900$ kr.',
    },
    {
      question: 'Løs $2x + 3 = 11$.',
      options: ['$x = 4$', '$x = 7$', '$x = 8$', '$x = 5$'],
      explanation: '$2x = 8$, så $x = 4$.',
    },
  ],
  '10-12-3': [
    {
      question: 'Hva kjennetegner Del 2 av eksamen?',
      options: ['Alle hjelpemidler er tillatt (kalkulator, GeoGebra)', 'Ingen hjelpemidler', 'Bare hoderegning', 'Kun 30 minutter'],
      explanation: 'På Del 2 kan du bruke kalkulator, GeoGebra, regneark og formelsamling.',
    },
    {
      question: 'En vare på 1200 kr får 25 % rabatt og deretter 10 % ekstra. Hvordan regner du rabatt 2?',
      options: ['10 % av den allerede reduserte prisen', '10 % av originalprisen', '35 % totalt', '10 % lagt til'],
      explanation: 'Den andre rabatten tas av den allerede reduserte prisen, ikke originalprisen.',
    },
    {
      question: 'En sparekonto: 10 000 kr med 3 % rente i 5 år (rentesrente). Hvilken formel?',
      options: ['$K_n = 10\\,000 \\cdot 1,03^5$', '$K_n = 10\\,000 \\cdot 3 \\cdot 5$', '$K_n = 10\\,000 + 0,03 \\cdot 5$', '$K_n = 10\\,000 \\cdot 0,03^5$'],
      explanation: 'Rentesrente: $K_n = K_0 \\cdot (1 + r)^n = 10\\,000 \\cdot 1,03^5$.',
    },
    {
      question: 'Hvilket digitalt verktøy er nyttig for regresjon på Del 2?',
      options: ['GeoGebra', 'Tekstbehandler', 'Kun kalkulator uten grafer', 'Ingen'],
      explanation: 'GeoGebra kan finne regresjonslinjer og tegne grafer på Del 2.',
    },
    {
      question: 'Hvilken funksjon har grafen som en parabel?',
      options: ['Andregradsfunksjon $f(x) = ax^2 + bx + c$', 'Lineær funksjon', 'Eksponentialfunksjon', 'Konstant funksjon'],
      explanation: 'En andregradsfunksjon har en parabel som graf.',
    },
  ],

};

export default quizData_matematikk_10;
