import type { QuizQuestion } from './quiz-data';

const quizData_s2: Record<string, QuizQuestion[]> = {
  's2-1-1': [
  {
    question: 'Hva er det ubestemte integralet av $x^3$?',
    options: ['$\\frac{x^4}{4} + C$', '$3x^2 + C$', '$x^4 + C$', '$4x^3 + C$'],
    explanation: 'Bruker formelen: integral av $x^n$ er $\\frac{x^{n+1}}{n+1} + C$. Så $x^3$ gir $\\frac{x^4}{4} + C$.',
  },
  {
    question: 'Hvorfor inkluderer vi $+C$ i ubestemte integraler?',
    options: ['Fordi alle funksjoner med samme deriverte skiller seg bare med en konstant', 'Fordi $C$ representerer arealet', 'Det er bare konvensjon', 'For å gjøre svåret eksakt'],
    explanation: 'Deriverten av en konstant er 0, så $F(x)+C$ og $F(x)$ har samme deriverte.',
  },
  {
    question: 'Hva er integralet av $\\frac{1}{x}$?',
    options: ['$\\ln|x| + C$', '$\\frac{1}{x^2} + C$', '$x + C$', '$-\\frac{1}{x^2} + C$'],
    explanation: 'Integralet av $\\frac{1}{x}$ er $\\ln|x| + C$. Dette er et spesialtilfelle.',
  },
  {
    question: 'Hva er integralet av $e^x$?',
    options: ['$e^x + C$', '$x \\cdot e^x + C$', '$e^{x+1} + C$', '$\\ln(e^x) + C$'],
    explanation: '$e^x$ er sin egen antideriverte: integralet av $e^x$ er $e^x + C$.',
  },
  {
    question: 'Ved substitusjon $u = 2x$, hvå blir $du$?',
    options: ['$2 \\, dx$', '$dx$', '$x \\, dx$', '$2x \\, dx$'],
    explanation: 'Hvis $u = 2x$, så er $\\frac{du}{dx} = 2$, som gir $du = 2 \\, dx$.',
  },
],


  's2-1-2': [
  {
    question: 'Hva sier analysens fundamentalteorem?',
    options: ['Integralet fra $a$ til $b$ av $f(x)$ er $F(b) - F(a)$', 'Integralet er alltid positivt', 'Derivasjon og integrasjon er uavhengige', '$F(a) = F(b)$ alltid'],
    explanation: 'Fundamentalteoremet kobler integrasjon og derivasjon: integral fra $a$ til $b$ er $F(b) - F(a)$.',
  },
  {
    question: 'Hva er integralet fra 0 til 2 av $3x^2 \, dx$?',
    options: ['8', '12', '6', '4'],
    explanation: 'Integralet er $[x^3]$ fra 0 til 2 = $2^3 - 0^3 = 8$.',
  },
  {
    question: 'Hva skjer når man bytter grensene på et bestemt integral?',
    options: ['Svåret skifter fortegn', 'Svåret forblir det samme', 'Svåret blir null', 'Svåret dobles'],
    explanation: 'Integral fra $a$ til $b$ = $-$(integral fra $b$ til $a$).',
  },
  {
    question: 'Hva er integralet fra $a$ til $a$ av $f(x) \, dx$?',
    options: ['0', '1', '$f(a)$', 'a'],
    explanation: 'Integral over et punktintervall er null: $F(a) - F(a) = 0$.',
  },
  {
    question: 'Hvis $f(x) \geq 0$ på $[a,b]$, hva representerer integralet?',
    options: ['Arealet mellom grafen og $x$-aksen', 'Lengden av kurven', 'Stigningstallet', 'Gjennomsnittet av $f$'],
    explanation: 'For ikke-negative funksjoner gir det bestemte integralet arealet under kurven.',
  },
],


  's2-1-3': [
  {
    question: 'Hvordan finner man arealet mellom to kurver $f(x)$ og $g(x)$?',
    options: ['Integral av $|f(x) - g(x)| \, dx$', 'Integral av $f(x) \cdot g(x) \, dx$', '$f(x) - g(x)$ for alle $x$', 'Integral av $f(x) + g(x) \, dx$'],
    explanation: 'Arealet mellom to kurver er integralet av absoluttverdien av differansen.',
  },
  {
    question: 'Hvis $f(x) < 0$ på intervallet $[a,b]$, hva gir integralet?',
    options: ['Et negativt tall (ikke arealet direkte)', 'Arealet som positivt tall', 'Null', 'Uendelig'],
    explanation: 'Integralet blir negativt. For å finne arealet må man ta absoluttverdien.',
  },
  {
    question: 'Finn arealet mellom $f(x) = x$ og $g(x) = x^2$ fra 0 til 1.',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
    explanation: 'Integral av $(x - x^2)$ fra 0 til 1 = $[\frac{x^2}{2} - \frac{x^3}{3}] = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.',
  },
  {
    question: 'Når vi beregner areal, hvorfor deler vi noen ganger opp intervallet?',
    options: ['Fordi funksjonen skifter fortegn og kurven krysser x-aksen', 'For å gjøre regninga enklære', 'Det er ikke nødvendig', 'For å finne gjennomsnitt'],
    explanation: 'Når funksjonen skifter fortegn, må vi dele opp for å få riktig totalareal.',
  },
  {
    question: 'Hva er første steg for å finne arealet mellom $y = x^2$ og $y = 2x$?',
    options: ['Finne skjæringspunktene', 'Derivere begge funksjoner', 'Integrere hver funksjon separat', 'Tegne grafene'],
    explanation: 'Vi må finne hvor kurvene skjærer hverandre for å bestemme grensene.',
  },
],


  's2-1-4': [
  {
    question: 'Hvis $v(t)$ er hastighet, hva gir integralet av $v(t)$?',
    options: ['Posisjonen $s(t)$ (+ konstant)', 'Akselerasjonen $a(t)$', 'Farten', 'Strekningen direkte'],
    explanation: 'Posisjon er integralet av hastighet: $s(t) = \int v(t) \, dt$.',
  },
  {
    question: 'Hva er gjennomsnittsverdien av $f$ på $[a,b]$?',
    options: ['$\frac{1}{b-a} \cdot \int_a^b f(x) \, dx$', '$\int_a^b f(x) \, dx$', '$\frac{f(a) + f(b)}{2}$', '$f\left(\frac{a+b}{2}\right)$'],
    explanation: 'Gjennomsnittsverdien er integralet delt på intervallets lengde.',
  },
  {
    question: 'En partikkel har hastighet $v(t) = 3t^2$ m/s. Hvor langt beveger den seg fra $t=0$ til $t=2$?',
    options: ['8 m', '12 m', '6 m', '4 m'],
    explanation: 'Strekning = integral av $v(t) = [t^3]$ fra 0 til 2 = $8 - 0 = 8$ m.',
  },
  {
    question: 'Hvabrukes integrasjon til i økonomi?',
    options: ['Finne total kostnad/inntekt fra grensefunksjoner', 'Bare å derivere', 'Finne maksimum', 'Ingenting spesielt'],
    explanation: 'Integralet av grensekostnad gir total variabel kostnad (+ fast kostnad).',
  },
  {
    question: 'For å finne arbeid utført av en variabel kraft $F(x)$, bruker man:',
    options: ['$\int F(x) \, dx$', '$F \cdot d$ direkte', 'Derivasjon av $F$', '$F(b) - F(a)$'],
    explanation: 'Arbeid med variabel kraft er $W = \int F(x) \, dx$ over strekningen.',
  },
],


  's2-2-1': [
  {
    question: 'Hva er en differensiallikning?',
    options: ['En likning som inneholder en ukjent funksjon og dens deriverte', 'En likning med bare deriverte', 'En likning som deriveres', 'En likning uten ukjente'],
    explanation: 'En differensiallikning relaterer en funksjon til sine deriverte.',
  },
  {
    question: 'Hva betyr det å løse en differensiallikning?',
    options: ['Finne alle funksjoner $y(x)$ som tilfredsstiller likningen', 'Derivere likningen', 'Integrere likningen en gang', 'Finne $y\'$'],
    explanation: 'Å løse betyr å finne funksjonen $y(x)$ (eller familien av funksjoner) som oppfyller likningen.',
  },
  {
    question: 'Hva er den generelle løsningen på $y\' = 2x$?',
    options: ['$y = x^2 + C$', '$y = 2x + C$', '$y = 2$', '$y = x^2$'],
    explanation: 'Integrerer: $y = \int 2x \, dx = x^2 + C$.',
  },
  {
    question: 'Hva er en initialverdi-betingelse?',
    options: ['En gitt verdi av $y$ for en bestemt $x$-verdi', 'Deriverten ved $x = 0$', 'Den generelle løsningen', 'Integrasjonskonstanten'],
    explanation: 'Initialverdi (f.eks. $y(0) = 3$) brukes til å bestemme konstanten $C$.',
  },
  {
    question: 'Gitt $y\' = 3x^2$ og $y(0) = 5$, finn $y(x)$.',
    options: ['$y = x^3 + 5$', '$y = x^3$', '$y = 3x^2 + 5$', '$y = x^3 + C$'],
    explanation: '$y = x^3 + C$. Med $y(0) = 5$: $0 + C = 5$, så $C = 5$. Altså $y = x^3 + 5$.',
  },
],


  's2-2-2': [
  {
    question: 'Hva er en separabel differensiallikning?',
    options: ['En likning der $y$ og $x$ kan separeres til hver sin side', 'En likning som ikke kan løses', 'En likning der $y\'$ = konstant', 'En likning med bare $x$'],
    explanation: 'En separabel likning kan skrives på formen $\frac{dy}{dx} = f(x)g(y)$, så vi kan separere variablene.',
  },
  {
    question: 'Hvordan løser man $\frac{dy}{dx} = xy$?',
    options: ['Separerer: $\frac{1}{y}dy = x \, dx$, integrerer begge sider', 'Deriverer begge sider', 'Setter $y = x$', 'Bruker kjerneregelen'],
    explanation: 'Separerer til $\frac{dy}{y} = x \, dx$. Integrerer: $\ln|y| = \frac{x^2}{2} + C$, så $y = Ae^{x^2/2}$.',
  },
  {
    question: 'Løs $\frac{dy}{dx} = y$ med $y(0) = 2$.',
    options: ['$y = 2e^x$', '$y = e^x$', '$y = 2x$', '$y = e^{2x}$'],
    explanation: 'Separerer: $\frac{dy}{y} = dx$. Integrerer: $\ln|y| = x + C$. $y = Ae^x$. $y(0)=2$ gir $A=2$.',
  },
  {
    question: 'Når man integrerer $\frac{1}{y}dy$, hva får man?',
    options: ['$\ln|y| + C$', '$\frac{1}{y^2} + C$', '$y + C$', '$-\frac{1}{y} + C$'],
    explanation: 'Integralet av $\frac{1}{y} dy$ er $\ln|y| + C$.',
  },
  {
    question: 'Løs $\frac{dy}{dx} = y^2$ med $y(0) = 1$.',
    options: ['$y = \frac{1}{1-x}$', '$y = x^2$', '$y = e^x$', '$y = \frac{1}{1+x}$'],
    explanation: 'Separerer: $\frac{dy}{y^2} = dx$. Integrerer: $-\frac{1}{y} = x + C$. $y(0)=1$ gir $C=-1$. Så $y = \frac{1}{1-x}$.',
  },
],


  's2-2-3': [
  {
    question: 'Hva er formen til en første ordens lineær differensiallikning?',
    options: ['$y\' + p(x)y = q(x)$', '$y\' = y^2$', '$y\'\' + y = 0$', '$y\' = xy^2$'],
    explanation: 'En lineær første ordens likning har formen $y\' + p(x)y = q(x)$.',
  },
  {
    question: 'Hva er en integrerende faktor?',
    options: ['En funksjon man multipliserer med for å gjøre venstre side til en derivert', 'Et tall man legger til', 'Integrasjonskonstanten', 'En type løsning'],
    explanation: 'Integrerende faktor $\mu(x) = e^{\int p(x)dx}$ gjør likningen enklære å løse.',
  },
  {
    question: 'For $y\' + 2y = 0$, hva er løsningen?',
    options: ['$y = Ce^{-2x}$', '$y = Ce^{2x}$', '$y = 2x + C$', '$y = \frac{C}{x^2}$'],
    explanation: 'Dette er separabel: $\frac{dy}{y} = -2dx$. Integrerer: $\ln|y| = -2x + C$, så $y = Ae^{-2x}$.',
  },
  {
    question: 'Hva betyr "homogen" differensiallikning?',
    options: ['$q(x) = 0$ (høyre side er null)', 'Likningen har ingen løsning', 'Alle ledd har samme grad', 'Likningen er umulig'],
    explanation: 'En homogen lineær likning har formen $y\' + p(x)y = 0$.',
  },
  {
    question: 'Hva er strategien for å løse $y\' - 3y = e^{2x}$?',
    options: ['Finn først homogen løsning, deretter partikulær løsning', 'Bare integrere', 'Sette $y = x$', 'Derivere begge sider'],
    explanation: 'Total løsning = homogen løsning $(y_h)$ + partikulær løsning $(y_p)$.',
  },
],


  's2-2-4': [
  {
    question: 'Hvilken differensiallikning beskriver eksponentiell vekst?',
    options: ['$\frac{dy}{dt} = ky$ der $k > 0$', '$\frac{dy}{dt} = -ky$', '$\frac{dy}{dt} = k$', '$\frac{dy}{dt} = y^2$'],
    explanation: 'Eksponentiell vekst: veksthastigheten er proporsjonal med nåværende mengde ($k > 0$).',
  },
  {
    question: 'Hva er løsningen på $\frac{dy}{dt} = ky$ med $y(0) = y_0$?',
    options: ['$y = y_0 \cdot e^{kt}$', '$y = y_0 + kt$', '$y = y_0 \cdot t^k$', '$y = ke^t$'],
    explanation: 'Løsningen på eksponentiell vekst/nedgang er $y = y_0 \cdot e^{kt}$.',
  },
  {
    question: 'Hva er formelen for halvveringstid i radioaktivt henfall?',
    options: ['$T = \frac{\ln(2)}{k}$', '$T = \frac{k}{\ln(2)}$', '$T = 2k$', '$T = e^k$'],
    explanation: 'Ved halvveringstid er $y = \frac{y_0}{2}$, så $e^{-kT} = 0{,}5$, som gir $T = \frac{\ln(2)}{k}$.',
  },
  {
    question: 'Newtons avkjølingslov sier at:',
    options: ['Endringshastigheten i temperatur er proporsjonal med temperaturforskjellen til omgivelsene', 'Temperaturen faller lineært', 'Temperaturen er konstant', 'Varme stiger alltid'],
    explanation: '$\frac{dT}{dt} = -k(T - T_{omgivelser})$, der $T$ er objektets temperatur.',
  },
  {
    question: 'Den logistiske vekstmodellen har likningen:',
    options: ['$\frac{dy}{dt} = ky(1 - \frac{y}{M})$', '$\frac{dy}{dt} = ky$', '$\frac{dy}{dt} = \frac{k}{y}$', '$\frac{dy}{dt} = y - k$'],
    explanation: 'Logistisk vekst begrenses av bæreevnen $M$: veksten avtar når $y$ nærmer seg $M$.',
  },
],


  's2-1-5': [
  {
    question: 'Hvorfor trenger vi numerisk integrasjon?',
    options: ['Fordi mange funksjoner ikke har en elementær antiderivert, eller fordi vi bare har datapunkter', 'Fordi numeriske svar alltid er mer nøyaktige enn analytiske', 'Fordi bestemte integraler ikke kan beregnes analytisk', 'Fordi trapesformelen gir eksakte svar'],
    explanation: 'Funksjoner som $e^{-x^2}$ mangler elementær antiderivert, og målte data har ikke noe funksjonsuttrykk. Da må vi tilnærme integralet numerisk.',
  },
  {
    question: 'Hvilket koeffisientmønster har trapesformelen?',
    options: ['$1, 2, 2, \\ldots, 2, 1$', '$1, 4, 2, 4, \\ldots, 4, 1$', '$1, 1, 1, \\ldots, 1, 1$', '$2, 1, 1, \\ldots, 1, 2$'],
    explanation: 'Trapesformelen er $T_n = \\frac{h}{2}[f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)]$ — endepunktene teller én gang, de indre punktene to ganger.',
  },
  {
    question: 'Bruk trapesformelen med $n = 2$ på $\\int_0^2 x^2 \\, dx$. Hva blir tilnærmingen?',
    options: ['$3$', '$\\frac{8}{3}$', '$2$', '$4$'],
    explanation: '$h = 1$ gir $T_2 = \\frac{1}{2}[f(0) + 2f(1) + f(2)] = \\frac{1}{2}[0 + 2 + 4] = 3$. (Eksakt verdi er $\\frac{8}{3} \\approx 2{,}67$ — trapesformelen overestimerer her.)',
  },
  {
    question: 'Hva er et krav for å kunne bruke Simpsons regel?',
    options: ['Antall delintervaller $n$ må være et partall', 'Antall delintervaller $n$ må være et oddetall', 'Funksjonen må være lineær', 'Intervallet må være symmetrisk om null'],
    explanation: 'Simpsons regel tilpasser parabler gjennom tre og tre punkter, og krever derfor et partall antall delintervaller. Koeffisientene er $1, 4, 2, 4, \\ldots, 4, 1$.',
  },
  {
    question: 'Hva skjer med feilen i Simpsons regel når vi dobler antall delintervaller $n$?',
    options: ['Den blir ca. 16 ganger mindre', 'Den blir ca. 4 ganger mindre', 'Den halveres', 'Den blir ca. 2 ganger mindre'],
    explanation: 'Feilen i Simpsons regel er proporsjonal med $\\frac{1}{n^4}$, så dobling av $n$ gir $2^4 = 16$ ganger mindre feil. Trapesformelen ($\\frac{1}{n^2}$) gir bare 4 ganger forbedring.',
  },
],


  's2-1-6': [
  {
    question: 'Hva er formelen for delvis integrasjon?',
    options: ['$\\int u \\, dv = uv - \\int v \\, du$', '$\\int u \\, dv = uv + \\int v \\, du$', '$\\int u \\, dv = u\'v\' - \\int uv \\, dx$', '$\\int u \\, dv = \\int u \\, dx \\cdot \\int dv$'],
    explanation: 'Delvis integrasjon følger fra produktregelen $(uv)\' = u\'v + uv\'$: integrasjon av begge sider gir $\\int u \\, dv = uv - \\int v \\, du$.',
  },
  {
    question: 'Etter LIATE-regelen: hva bør du velge som $u$ i $\\int x \\ln x \\, dx$?',
    options: ['$u = \\ln x$', '$u = x$', '$u = x \\ln x$', '$u = dx$'],
    explanation: 'LIATE prioriterer Logaritmiske funksjoner høyest, så $u = \\ln x$ og $dv = x \\, dx$.',
  },
  {
    question: 'Hva er $\\int x e^x \\, dx$?',
    options: ['$e^x(x - 1) + C$', '$e^x(x + 1) + C$', '$\\frac{x^2}{2} e^x + C$', '$x e^x + C$'],
    explanation: 'Med $u = x$, $dv = e^x dx$: $\\int x e^x \\, dx = x e^x - \\int e^x \\, dx = x e^x - e^x + C = e^x(x-1) + C$.',
  },
  {
    question: 'Hva er $\\int \\ln x \\, dx$?',
    options: ['$x \\ln x - x + C$', '$\\frac{1}{x} + C$', '$x \\ln x + C$', '$\\frac{(\\ln x)^2}{2} + C$'],
    explanation: 'Velg $u = \\ln x$ og $dv = dx$: $\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - x + C$.',
  },
  {
    question: 'Hvordan løses integraler som $\\int e^x \\sin x \\, dx$?',
    options: ['Delvis integrasjon to ganger, deretter løse en likning for integralet', 'Vanlig substitusjon med $u = \\sin x$', 'Delvis integrasjon én gang er nok', 'De kan ikke integreres'],
    explanation: 'Etter to delvise integrasjoner dukker det opprinnelige integralet opp igjen («sirkulær» delvis integrasjon), og vi løser likningen for integralet.',
  },
],


  's2-1-7': [
  {
    question: 'Hva er volumet når området mellom $y = f(x)$ og $x$-aksen for $a \\leq x \\leq b$ roteres om $x$-aksen (skivemetoden)?',
    options: ['$V = \\pi \\int_a^b [f(x)]^2 \\, dx$', '$V = \\pi \\int_a^b f(x) \\, dx$', '$V = 2\\pi \\int_a^b x f(x) \\, dx$', '$V = \\int_a^b [f(x)]^2 \\, dx$'],
    explanation: 'Hvert tverrsnitt er en sirkelskive med radius $f(x)$ og areal $\\pi[f(x)]^2$, som integreres langs $x$-aksen.',
  },
  {
    question: 'Området under $f(x) = \\sqrt{x}$ for $0 \\leq x \\leq 4$ roteres om $x$-aksen. Hva blir volumet?',
    options: ['$8\\pi$', '$16\\pi$', '$4\\pi$', '$\\frac{16}{3}\\pi$'],
    explanation: '$V = \\pi \\int_0^4 (\\sqrt{x})^2 \\, dx = \\pi \\int_0^4 x \\, dx = \\pi \\cdot \\frac{16}{2} = 8\\pi$.',
  },
  {
    question: 'Hva er skallmetodens formel for rotasjon om $y$-aksen?',
    options: ['$V = 2\\pi \\int_a^b x \\cdot f(x) \\, dx$', '$V = \\pi \\int_a^b [f(x)]^2 \\, dx$', '$V = 2\\pi \\int_a^b f(x) \\, dx$', '$V = \\pi \\int_a^b x^2 f(x) \\, dx$'],
    explanation: 'En vertikal stripe ved $x$ danner et sylindrisk skall med radius $x$, høyde $f(x)$ og tykkelse $dx$ — volum $2\\pi x f(x) \\, dx$.',
  },
  {
    question: 'Hvordan beregnes volumet når området mellom to kurver $f(x) \\geq g(x) \\geq 0$ roteres om $x$-aksen?',
    options: ['$V = \\pi \\int_a^b ([f(x)]^2 - [g(x)]^2) \\, dx$', '$V = \\pi \\int_a^b [f(x) - g(x)]^2 \\, dx$', '$V = \\pi \\int_a^b (f(x) - g(x)) \\, dx$', '$V = 2\\pi \\int_a^b (f(x) - g(x)) \\, dx$'],
    explanation: 'Vi trekker det indre volumet fra det ytre: $\\pi \\int ([f]^2 - [g]^2) dx$. Merk at $[f-g]^2 \\neq f^2 - g^2$!',
  },
  {
    question: 'Halvsirkelen $y = \\sqrt{9 - x^2}$ roteres om $x$-aksen. Hva blir volumet av kulen?',
    options: ['$36\\pi$', '$12\\pi$', '$27\\pi$', '$9\\pi$'],
    explanation: '$V = \\pi \\int_{-3}^{3} (9 - x^2) \\, dx = \\pi [9x - \\frac{x^3}{3}]_{-3}^{3} = \\pi(18 + 18 - 9 - 9)$... mer direkte: $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
  },
],


  's2-3-1': [
  {
    question: 'Hva kalles et punkt der $f\'(a) = 0$?',
    options: ['Et stasjonært punkt', 'Et vendepunkt', 'Et nullpunkt', 'En asymptote'],
    explanation: 'Stasjonære punkter er der den deriverte er null. De kan være toppunkter, bunnpunkter eller terrassepunkter.',
  },
  {
    question: 'Når har $f$ et toppunkt i $x = a$?',
    options: ['Når $f\'(x)$ skifter fra positiv til negativ i $x = a$', 'Når $f\'(a) = 0$, uansett fortegnsskifte', 'Når $f(a) = 0$', 'Når $f\'\'(a) > 0$'],
    explanation: 'Toppunkt krever at funksjonen vokser før og avtar etter punktet — altså at $f\'$ skifter fra $+$ til $-$. At $f\'(a)=0$ alene er ikke nok (terrassepunkt).',
  },
  {
    question: '$f(x) = x^3 - 3x$ har stasjonære punkter i $x = \\pm 1$. Hvor er toppunktet?',
    options: ['$x = -1$', '$x = 1$', '$x = 0$', 'Funksjonen har ikke toppunkt'],
    explanation: '$f\'(x) = 3x^2 - 3$. Fortegnsskjema: $f\' > 0$ for $x < -1$, $f\' < 0$ for $-1 < x < 1$. Skiftet $+ \\to -$ i $x = -1$ gir toppunkt der, med $f(-1) = 2$.',
  },
  {
    question: 'Hva kjennetegner et vendepunkt?',
    options: ['$f\'\'(x)$ skifter fortegn i punktet', '$f\'(x) = 0$ i punktet', '$f(x) = 0$ i punktet', 'Grafen krysser $x$-aksen'],
    explanation: 'I et vendepunkt skifter grafen krumning (mellom konkav og konveks), som svarer til at $f\'\'$ skifter fortegn.',
  },
  {
    question: 'Hvilke av disse inngår i en fullstendig funksjonsdrøfting?',
    options: ['Definisjonsmengde, nullpunkter, asymptoter, monotoni, ekstremalpunkter og vendepunkter', 'Bare nullpunkter og ekstremalpunkter', 'Bare den deriverte og den andrederiverte', 'Bare grafen tegnet digitalt'],
    explanation: 'En fullstendig drøfting kartlegger hele funksjonens oppførsel: $D_f$, nullpunkter, fortegn, asymptoter, monotoni ($f\'$), krumning og vendepunkter ($f\'\'$).',
  },
],


  's2-3-2': [
  {
    question: 'Hva betyr det at $f\'\'(x) > 0$ på et intervall?',
    options: ['Grafen er konveks (buer oppover) på intervallet', 'Grafen er konkav (buer nedover) på intervallet', 'Funksjonen er voksende på intervallet', 'Funksjonen har toppunkt på intervallet'],
    explanation: '$f\'\' > 0$ betyr konveks — grafen «smiler» (U-form). Merk: krumning og monotoni er uavhengige egenskaper.',
  },
  {
    question: 'Andrederivert-testen: $f\'(a) = 0$ og $f\'\'(a) < 0$. Hva kan vi konkludere?',
    options: ['$f$ har lokalt toppunkt i $x = a$', '$f$ har lokalt bunnpunkt i $x = a$', '$f$ har vendepunkt i $x = a$', 'Testen er inkonklusiv'],
    explanation: 'Stasjonært punkt med konkav graf ($f\'\' < 0$) gir lokalt maksimum (toppunkt).',
  },
  {
    question: 'Hvor har $f(x) = x^3 - 6x^2$ vendepunkt?',
    options: ['$x = 2$', '$x = 4$', '$x = 0$', '$x = 6$'],
    explanation: '$f\'\'(x) = 6x - 12 = 0$ gir $x = 2$, og $f\'\'$ skifter fortegn der (negativ før, positiv etter). Altså vendepunkt i $x = 2$.',
  },
  {
    question: 'Er $f\'\'(a) = 0$ alene nok til å garantere vendepunkt i $x = a$?',
    options: ['Nei — $f\'\'$ må også skifte fortegn i punktet', 'Ja, alltid', 'Ja, hvis $f\'(a) = 0$ også', 'Nei — det må i tillegg gjelde at $f(a) = 0$'],
    explanation: 'Moteksempel: $f(x) = x^4$ har $f\'\'(0) = 0$, men $f\'\'(x) = 12x^2 \\geq 0$ skifter ikke fortegn — intet vendepunkt i $x=0$.',
  },
  {
    question: 'Hva gjør du hvis $f\'(a) = 0$ og $f\'\'(a) = 0$?',
    options: ['Bruker fortegnsskjema for $f\'(x)$ — andrederivert-testen er inkonklusiv', 'Konkluderer med toppunkt', 'Konkluderer med bunnpunkt', 'Konkluderer med at punktet ikke er ekstremalpunkt'],
    explanation: 'Når $f\'\'(a) = 0$ gir testen ingen konklusjon. Eksempler: $x^4$ har bunnpunkt, $-x^4$ toppunkt og $x^3$ terrassepunkt i origo — alle med $f\'\'(0)=0$.',
  },
],


  's2-3-3': [
  {
    question: 'Hva er et viktig steg i optimeringsproblemer med to variabler?',
    options: ['Bruke begrensningen til å uttrykke målfunksjonen med én variabel', 'Derivere med hensyn på begge variablene samtidig', 'Gjette en løsning og kontrollere den', 'Sette begge variablene lik null'],
    explanation: 'Begrensningen (f.eks. fast omkrets eller budsjett) lar oss eliminere én variabel, slik at vi kan derivere en funksjon av én variabel.',
  },
  {
    question: 'Et rektangel har omkrets 40. Hva er det største arealet det kan ha?',
    options: ['$100$', '$80$', '$400$', '$40$'],
    explanation: 'Med sider $x$ og $20 - x$: $A(x) = x(20-x) = 20x - x^2$. $A\'(x) = 20 - 2x = 0$ gir $x = 10$ — et kvadrat $10 \\times 10$ med areal $100$.',
  },
  {
    question: 'For hvilken $x$ er $P(x) = -2x^2 + 80x$ størst?',
    options: ['$x = 20$', '$x = 40$', '$x = 80$', '$x = 10$'],
    explanation: '$P\'(x) = -4x + 80 = 0$ gir $x = 20$. Siden $P\'\'(x) = -4 < 0$ er dette et maksimum, med $P(20) = 800$.',
  },
  {
    question: 'Hvorfor må du sjekke endepunktene av definisjonsmengden i optimeringsproblemer?',
    options: ['Fordi den største eller minste verdien kan ligge i et endepunkt, ikke bare der $f\'(x) = 0$', 'Fordi den deriverte alltid er null i endepunktene', 'Fordi endepunktene alltid gir maksimum', 'Det er ikke nødvendig å sjekke endepunktene'],
    explanation: 'På et lukket intervall kan ekstremverdien ligge i endepunktene selv om $f\' \\neq 0$ der. Sammenlikn alltid funksjonsverdiene.',
  },
  {
    question: 'Du finner at $f\'(x) = 0$ for $x = 5$. Hva må du gjøre før du konkluderer med at dette gir maksimum?',
    options: ['Verifisere med fortegnsskjema for $f\'$ eller andrederivert-testen', 'Ingenting — $f\'(x) = 0$ betyr alltid maksimum', 'Sjekke at $f(5) > 0$', 'Sjekke at $f(5) = 0$'],
    explanation: '$f\'(x) = 0$ kan også bety bunnpunkt eller terrassepunkt. Bruk fortegnsskjema eller sjekk at $f\'\'(5) < 0$.',
  },
],


  's2-3-4': [
  {
    question: 'Hvor finner vi typisk vertikale asymptoter for en rasjonell funksjon?',
    options: ['Der nevneren er null (og telleren ikke er null i samme punkt)', 'Der telleren er null', 'Der funksjonen krysser $x$-aksen', 'Der den deriverte er null'],
    explanation: 'Når nevneren går mot null mens telleren ikke gjør det, går $|f(x)| \\to \\infty$, som gir en vertikal asymptote.',
  },
  {
    question: 'Hva er asymptotene til $f(x) = \\frac{2x + 1}{x - 3}$?',
    options: ['Vertikal $x = 3$ og horisontal $y = 2$', 'Vertikal $x = -3$ og horisontal $y = 2$', 'Vertikal $x = 3$ og horisontal $y = \\frac{1}{3}$', 'Vertikal $x = 2$ og horisontal $y = 3$'],
    explanation: 'Nevneren er null i $x = 3$ (vertikal asymptote). Når $x \\to \\pm\\infty$ går $f(x) \\to \\frac{2x}{x} = 2$ (horisontal asymptote $y = 2$).',
  },
  {
    question: 'Når har en rasjonell funksjon $\\frac{P(x)}{Q(x)}$ horisontal asymptote $y = 0$?',
    options: ['Når graden til telleren er lavere enn graden til nevneren', 'Når gradene er like', 'Når graden til telleren er høyere enn graden til nevneren', 'Aldri'],
    explanation: 'Med $\\deg P < \\deg Q$ dominerer nevneren, så $f(x) \\to 0$ når $x \\to \\pm\\infty$. Like grader gir $y = \\frac{a_m}{b_n}$, og grad én høyere gir skrå asymptote.',
  },
  {
    question: 'Hva er den skrå asymptoten til $f(x) = \\frac{x^2 + 1}{x}$?',
    options: ['$y = x$', '$y = x + 1$', '$y = 1$', '$x = 0$ er eneste asymptote'],
    explanation: '$f(x) = x + \\frac{1}{x}$, og $\\frac{1}{x} \\to 0$ når $x \\to \\pm\\infty$. Altså er $y = x$ skrå asymptote (i tillegg til vertikal $x = 0$).',
  },
  {
    question: 'Hvordan finner du en skrå asymptote $y = ax + b$ for en rasjonell funksjon?',
    options: ['Utfør polynomdivisjon — kvotienten gir asymptoten', 'Sett nevneren lik null', 'Deriver funksjonen og sett lik null', 'Sett telleren lik null'],
    explanation: 'Polynomdivisjon gir $f(x) = ax + b + \\frac{r(x)}{Q(x)}$, der restleddet går mot null. Skrå asymptote finnes når teller har grad nøyaktig én høyere enn nevner.',
  },
],


  's2-3-5': [
  {
    question: 'Hva er nøkkelregelen i implisitt derivasjon?',
    options: ['Hver gang vi deriverer et ledd med $y$, multipliserer vi med $\\frac{dy}{dx}$ (kjerneregelen)', 'Vi løser alltid likningen for $y$ først', 'Ledd med $y$ behandles som konstanter', 'Vi deriverer bare venstresiden av likningen'],
    explanation: 'Siden $y = y(x)$ er en funksjon av $x$, gir kjerneregelen $\\frac{d}{dx}[g(y)] = g\'(y) \\cdot \\frac{dy}{dx}$.',
  },
  {
    question: 'Hva er $\\frac{d}{dx}[y^2]$ ved implisitt derivasjon?',
    options: ['$2y \\cdot \\frac{dy}{dx}$', '$2y$', '$2x$', '$y^2 \\cdot \\frac{dy}{dx}$'],
    explanation: 'Kjerneregelen med ytre funksjon $u^2$ og kjerne $y(x)$: $\\frac{d}{dx}[y^2] = 2y \\cdot y\'$.',
  },
  {
    question: 'Sirkelen $x^2 + y^2 = 25$: hva er $\\frac{dy}{dx}$ i punktet $(3, 4)$?',
    options: ['$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$-\\frac{4}{3}$', '$\\frac{4}{3}$'],
    explanation: 'Implisitt derivasjon: $2x + 2y y\' = 0$, så $y\' = -\\frac{x}{y} = -\\frac{3}{4}$ i $(3, 4)$.',
  },
  {
    question: 'Likningen $xy = 6$: hva er $\\frac{dy}{dx}$?',
    options: ['$-\\frac{y}{x}$', '$\\frac{y}{x}$', '$-\\frac{x}{y}$', '$\\frac{6}{x}$'],
    explanation: 'Produktregelen: $y + x y\' = 0$, som gir $y\' = -\\frac{y}{x}$.',
  },
  {
    question: 'Når er implisitt derivasjon spesielt nyttig?',
    options: ['Når likningen ikke enkelt kan løses for $y$ som funksjon av $x$', 'Når funksjonen er et polynom i bare $x$', 'Når vi skal integrere', 'Når funksjonen er lineær'],
    explanation: 'For kurver som $x^2 + y^2 = 25$ eller $x^3 + y^3 = 6xy$ slipper vi å isolere $y$ — vi deriverer likningen direkte.',
  },
],


  's2-3-6': [
  {
    question: 'Hva er den deriverte av $f(x) = e^{g(x)}$?',
    options: ['$g\'(x) \\cdot e^{g(x)}$', '$e^{g\'(x)}$', '$g(x) \\cdot e^{g(x) - 1}$', '$e^{g(x)}$'],
    explanation: 'Kjerneregelen: ytre funksjon $e^u$ deriveres til $e^u$, multiplisert med den deriverte av kjernen $g(x)$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\ln(g(x))$?',
    options: ['$\\frac{g\'(x)}{g(x)}$', '$\\frac{1}{g(x)}$', '$\\frac{1}{g\'(x)}$', '$g\'(x) \\cdot \\ln(g(x))$'],
    explanation: 'Kjerneregelen: $\\frac{d}{dx}[\\ln u] = \\frac{u\'}{u}$, så svaret er $\\frac{g\'(x)}{g(x)}$.',
  },
  {
    question: '$f(x) = x e^x$. For hvilken $x$ er $f\'(x) = 0$?',
    options: ['$x = -1$', '$x = 0$', '$x = 1$', '$f\'(x)$ er aldri null'],
    explanation: 'Produktregelen: $f\'(x) = e^x + x e^x = e^x(1 + x)$. Siden $e^x \\neq 0$ må $1 + x = 0$, altså $x = -1$.',
  },
  {
    question: 'Hvorfor kan vi «stryke» faktoren $e^{g(x)}$ når vi løser $f\'(x) = 0$?',
    options: ['Fordi $e^{g(x)}$ aldri er null', 'Fordi $e^{g(x)}$ alltid er lik 1', 'Fordi eksponentialfunksjoner ikke kan deriveres', 'Det kan vi ikke — vi mister løsninger'],
    explanation: 'Eksponentialfunksjonen er alltid strengt positiv, så likningen $e^{g(x)} \\cdot h(x) = 0$ har samme løsninger som $h(x) = 0$.',
  },
  {
    question: '$f(x) = x^2 \\ln x$. Hva er definisjonsmengden, og hvor er det stasjonære punktet?',
    options: ['$D_f = (0, \\infty)$ og stasjonært punkt i $x = e^{-1/2}$', '$D_f = \\mathbb{R}$ og stasjonært punkt i $x = 0$', '$D_f = (0, \\infty)$ og stasjonært punkt i $x = e$', '$D_f = [0, \\infty)$ og stasjonært punkt i $x = 1$'],
    explanation: '$\\ln x$ krever $x > 0$. $f\'(x) = 2x \\ln x + x = x(2\\ln x + 1) = 0$ gir $\\ln x = -\\frac{1}{2}$, altså $x = e^{-1/2}$.',
  },
],


  's2-3-7': [
  {
    question: 'Hva gir det bestemte integralet $\\int_a^b f(x) \\, dx$ når $f(x) < 0$ på hele $[a, b]$?',
    options: ['En negativ verdi — arealet er $-\\int_a^b f(x) \\, dx$', 'Arealet direkte', 'Null', 'En positiv verdi lik arealet'],
    explanation: 'Det bestemte integralet gir fortegnsarealet. Under $x$-aksen er det negativt, og det geometriske arealet er absoluttverdien.',
  },
  {
    question: 'Hvordan beregnes arealet mellom to kurver når $f(x) \\geq g(x)$ på $[a, b]$?',
    options: ['$A = \\int_a^b (f(x) - g(x)) \\, dx$', '$A = \\int_a^b (f(x) + g(x)) \\, dx$', '$A = \\int_a^b f(x) \\, dx \\cdot \\int_a^b g(x) \\, dx$', '$A = \\int_a^b (g(x) - f(x)) \\, dx$'],
    explanation: 'Vi integrerer differansen øvre minus nedre funksjon: $\\int (f - g) \\, dx$.',
  },
  {
    question: 'Hva er arealet mellom $y = x$ og $y = x^2$ for $0 \\leq x \\leq 1$?',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{5}{6}$'],
    explanation: 'På $[0,1]$ er $x \\geq x^2$: $A = \\int_0^1 (x - x^2) \\, dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.',
  },
  {
    question: 'Kurvene krysser hverandre i $x = c$ inne i intervallet $[a, b]$. Hvordan finner du det totale arealet mellom dem?',
    options: ['Del opp integralet i $[a, c]$ og $[c, b]$ og ta absoluttverdien av hver del', 'Integrer $f - g$ over hele $[a, b]$ direkte', 'Bruk bare det største delintervallet', 'Bytt om grensene $a$ og $b$'],
    explanation: 'Differansen $f - g$ skifter fortegn i skjæringspunktet, så uten oppdeling vil bidragene delvis kansellere hverandre.',
  },
  {
    question: '$f(x) = x^2 - 4$ er negativ på $[0, 2]$. Hva er arealet mellom grafen og $x$-aksen der?',
    options: ['$\\frac{16}{3}$', '$-\\frac{16}{3}$', '$\\frac{8}{3}$', '$4$'],
    explanation: '$\\int_0^2 (x^2 - 4) dx = \\frac{8}{3} - 8 = -\\frac{16}{3}$. Arealet er absoluttverdien: $\\frac{16}{3}$.',
  },
],


  's2-3-8': [
  {
    question: 'Ved implisitt derivasjon: hva er $\\frac{d}{dx}[y^3]$?',
    options: ['$3y^2 \\cdot \\frac{dy}{dx}$', '$3y^2$', '$3x^2$', '$y^3 \\cdot \\frac{dy}{dx}$'],
    explanation: 'Kjerneregelen gir $\\frac{d}{dx}[y^n] = n y^{n-1} \\cdot \\frac{dy}{dx}$.',
  },
  {
    question: 'Hva kjennetegner problemer med «relaterte rater»?',
    options: ['Flere størrelser endrer seg med tiden, og vi deriverer en sammenheng mellom dem med hensyn på $t$', 'Vi deriverer alltid med hensyn på $x$', 'Ratene er alltid konstante', 'Vi integrerer i stedet for å derivere'],
    explanation: 'Vi har en likning som knytter størrelsene sammen (f.eks. Pytagoras), og implisitt derivasjon med hensyn på tiden $t$ knytter endringsratene sammen.',
  },
  {
    question: '$x^2 + y^2 = 100$ med $x = 6$, $y = 8$ og $\\frac{dx}{dt} = 3$. Hva er $\\frac{dy}{dt}$?',
    options: ['$-2{,}25$', '$2{,}25$', '$-4$', '$-0{,}75$'],
    explanation: 'Derivasjon mhp. $t$: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$, så $\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt} = -\\frac{6 \\cdot 3}{8} = -2{,}25$.',
  },
  {
    question: 'En kuleballong blåses opp. Hvordan henger $\\frac{dV}{dt}$ og $\\frac{dr}{dt}$ sammen når $V = \\frac{4}{3}\\pi r^3$?',
    options: ['$\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt}$', '$\\frac{dV}{dt} = \\frac{4}{3}\\pi r^3 \\cdot \\frac{dr}{dt}$', '$\\frac{dV}{dt} = 4\\pi r \\cdot \\frac{dr}{dt}$', '$\\frac{dV}{dt} = \\frac{dr}{dt}$'],
    explanation: 'Kjerneregelen mhp. tid: $\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.',
  },
  {
    question: 'En 5 m lang stige sklir: foten beveger seg utover med 0,5 m/s når foten er 3 m fra veggen (toppen 4 m oppe). Hvor fort synker toppen?',
    options: ['$0{,}375$ m/s', '$0{,}5$ m/s', '$0{,}667$ m/s', '$0{,}3$ m/s'],
    explanation: '$x^2 + y^2 = 25$ gir $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt} = -\\frac{3}{4} \\cdot 0{,}5 = -0{,}375$. Toppen synker med 0,375 m/s.',
  },
],


  's2-4-1': [
  {
    question: 'Hvilke krav stilles til en sannsynlighetsfordeling for en diskret stokastisk variabel?',
    options: ['$0 \\leq P(X = x_i) \\leq 1$ for alle $i$, og summen av alle sannsynlighetene er 1', 'Alle sannsynlighetene må være like store', 'Summen av sannsynlighetene må være større enn 1', 'Forventningsverdien må være 0'],
    explanation: 'Hver sannsynlighet ligger mellom 0 og 1, og $\\sum P(X = x_i) = 1$ siden ett av utfallene må inntreffe.',
  },
  {
    question: 'Hva er formelen for forventningsverdien til en diskret stokastisk variabel?',
    options: ['$E(X) = \\sum x_i \\cdot P(X = x_i)$', '$E(X) = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$', '$E(X) = \\sum P(X = x_i)$', '$E(X) = \\max(x_i) - \\min(x_i)$'],
    explanation: 'Forventningsverdien er det vektede gjennomsnittet av verdiene, med sannsynlighetene som vekter — ikke et vanlig (uvektet) gjennomsnitt.',
  },
  {
    question: '$X$ tar verdien 0 med sannsynlighet 0,3, verdien 1 med 0,5 og verdien 2 med 0,2. Hva er $E(X)$?',
    options: ['$0{,}9$', '$1{,}0$', '$0{,}7$', '$1{,}2$'],
    explanation: '$E(X) = 0 \\cdot 0{,}3 + 1 \\cdot 0{,}5 + 2 \\cdot 0{,}2 = 0 + 0{,}5 + 0{,}4 = 0{,}9$.',
  },
  {
    question: 'Hva er den alternative beregningsformelen for varians?',
    options: ['$\\text{Var}(X) = E(X^2) - [E(X)]^2$', '$\\text{Var}(X) = [E(X)]^2 - E(X^2)$', '$\\text{Var}(X) = E(X^2) + [E(X)]^2$', '$\\text{Var}(X) = \\sqrt{E(X^2)}$'],
    explanation: 'Variansen er «forventningen av kvadratet minus kvadratet av forventningen». Standardavviket er $\\sigma = \\sqrt{\\text{Var}(X)}$.',
  },
  {
    question: '$E(X) = 4$. Hva er $E(2X + 3)$?',
    options: ['$11$', '$8$', '$14$', '$10$'],
    explanation: 'Forventningsverdien er lineær: $E(2X + 3) = 2E(X) + 3 = 2 \\cdot 4 + 3 = 11$.',
  },
],


  's2-4-2': [
  {
    question: 'Når bruker vi hypergeometrisk fordeling i stedet for binomisk?',
    options: ['Når vi trekker uten tilbakelegging fra en endelig populasjon', 'Når forsøkene er uavhengige', 'Når sannsynligheten er den samme i hvert forsøk', 'Når vi har flere enn to mulige utfall'],
    explanation: 'Uten tilbakelegging endres sannsynligheten for hvert trekk — da er fordelingen hypergeometrisk. Binomisk krever uavhengige forsøk med konstant $p$.',
  },
  {
    question: 'Hvilke kjennetegn har et binomisk forsøk?',
    options: ['$n$ uavhengige forsøk, to mulige utfall, samme sannsynlighet $p$ i hvert forsøk', '$n$ avhengige forsøk med varierende sannsynlighet', 'Trekninger uten tilbakelegging', 'Kontinuerlige målinger med normalfordelte feil'],
    explanation: 'Binomisk fordeling: fast antall uavhengige forsøk, suksess/fiasko, og konstant suksessannsynlighet $p$.',
  },
  {
    question: 'Du kaster en mynt 4 ganger. Hva er sannsynligheten for nøyaktig 2 kron?',
    options: ['$0{,}375$', '$0{,}25$', '$0{,}5$', '$0{,}125$'],
    explanation: '$P(X = 2) = \\binom{4}{2} \\cdot 0{,}5^2 \\cdot 0{,}5^2 = 6 \\cdot \\frac{1}{16} = \\frac{6}{16} = 0{,}375$.',
  },
  {
    question: '$X \\sim B(20, \\ 0{,}3)$. Hva er $E(X)$?',
    options: ['$6$', '$0{,}3$', '$4{,}2$', '$10$'],
    explanation: 'For binomisk fordeling er $E(X) = np = 20 \\cdot 0{,}3 = 6$.',
  },
  {
    question: 'En eske har 10 lodd, hvorav 4 gir gevinst. Du trekker 2 uten tilbakelegging. Hva er sannsynligheten for at begge gir gevinst?',
    options: ['$\\frac{2}{15}$', '$\\frac{4}{25}$', '$\\frac{1}{5}$', '$\\frac{6}{45} \\cdot 2$'],
    explanation: 'Hypergeometrisk: $P(X = 2) = \\frac{\\binom{4}{2}\\binom{6}{0}}{\\binom{10}{2}} = \\frac{6}{45} = \\frac{2}{15}$. (Eller $\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{2}{15}$.)',
  },
],


  's2-4-3': [
  {
    question: 'Etter 68-95-99,7-regelen: hvor stor andel av observasjonene ligger innenfor $\\pm 2\\sigma$ fra gjennomsnittet?',
    options: ['Ca. 95 %', 'Ca. 68 %', 'Ca. 99,7 %', 'Ca. 50 %'],
    explanation: 'For normalfordelte data: ca. 68 % innenfor $\\pm 1\\sigma$, 95 % innenfor $\\pm 2\\sigma$ og 99,7 % innenfor $\\pm 3\\sigma$.',
  },
  {
    question: 'Hva blir $z$-verdien for $x = 85$ når $\\mu = 70$ og $\\sigma = 10$?',
    options: ['$1{,}5$', '$15$', '$0{,}67$', '$8{,}5$'],
    explanation: '$z = \\frac{x - \\mu}{\\sigma} = \\frac{85 - 70}{10} = 1{,}5$ — verdien ligger 1,5 standardavvik over gjennomsnittet.',
  },
  {
    question: 'Hva sier sentralgrensesetningen om gjennomsnittet $\\bar{X}$ av $n$ uavhengige, likt fordelte variabler?',
    options: ['$\\bar{X}$ er tilnærmet normalfordelt med forventning $\\mu$ og varians $\\frac{\\sigma^2}{n}$ for store $n$', '$\\bar{X}$ er alltid eksakt normalfordelt uansett $n$', '$\\bar{X}$ har varians $n\\sigma^2$', 'Setningen gjelder bare hvis variablene selv er normalfordelte'],
    explanation: 'Uansett utgangsfordeling blir gjennomsnittet tilnærmet $N(\\mu, \\frac{\\sigma^2}{n})$ når $n$ er stor — derfor er normalfordelingen så sentral i statistikk.',
  },
  {
    question: '$X$ er normalfordelt med $\\mu = 50$. Hva er $P(X < 50)$?',
    options: ['$0{,}5$', '$0{,}68$', '$1$', 'Kan ikke avgjøres uten å kjenne $\\sigma$'],
    explanation: 'Normalfordelingen er symmetrisk om $\\mu$, så nøyaktig halvparten av sannsynligheten ligger under gjennomsnittet — uansett $\\sigma$.',
  },
  {
    question: 'Når kan binomisk fordeling tilnærmes med normalfordeling?',
    options: ['Når $np \\geq 5$ og $n(1-p) \\geq 5$', 'Når $n \\geq 5$', 'Når $p = 0{,}5$ nøyaktig', 'Alltid'],
    explanation: 'Tommelfingerregelen krever $np \\geq 5$ og $n(1-p) \\geq 5$. Husk også kontinuitetskorreksjonen $\\pm 0{,}5$ siden vi tilnærmer en diskret fordeling.',
  },
],


  's2-4-4': [
  {
    question: '$\\text{Var}(X) = 4$. Hva er $\\text{Var}(3X + 2)$?',
    options: ['$36$', '$12$', '$14$', '$38$'],
    explanation: '$\\text{Var}(aX + b) = a^2 \\text{Var}(X) = 9 \\cdot 4 = 36$. Konstanten $+2$ påvirker ikke variansen.',
  },
  {
    question: 'Hvorfor påvirker ikke konstanten $b$ variansen i $\\text{Var}(aX + b)$?',
    options: ['Å legge til en konstant forskyver fordelingen, men endrer ikke spredningen', 'Fordi $b$ alltid er null', 'Fordi variansen alltid er positiv', 'Fordi $b$ inngår i forventningsverdien med negativt fortegn'],
    explanation: 'Variansen måler spredning rundt gjennomsnittet. En konstant flytter alle verdiene (og gjennomsnittet) like mye, så avvikene er uendret.',
  },
  {
    question: 'Hvilken regel gjelder ALLTID, også for avhengige variabler?',
    options: ['$E(X + Y) = E(X) + E(Y)$', '$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$', '$E(XY) = E(X)E(Y)$', '$\\text{SD}(X + Y) = \\text{SD}(X) + \\text{SD}(Y)$'],
    explanation: 'Forventningsverdien er alltid additiv. Variansen av en sum krever derimot uavhengighet for å kunne splittes.',
  },
  {
    question: 'Hvilke egenskaper har den standardiserte variabelen $Z = \\frac{X - \\mu}{\\sigma}$?',
    options: ['$E(Z) = 0$ og $\\text{SD}(Z) = 1$', '$E(Z) = \\mu$ og $\\text{SD}(Z) = \\sigma$', '$E(Z) = 1$ og $\\text{SD}(Z) = 0$', '$E(Z) = 0$ og $\\text{SD}(Z) = \\sigma$'],
    explanation: 'Standardisering trekker fra gjennomsnittet (gir forventning 0) og deler på standardavviket (gir standardavvik 1).',
  },
  {
    question: '$\\text{SD}(X) = 5$. Hva er $\\text{SD}(2X)$?',
    options: ['$10$', '$20$', '$25$', '$7$'],
    explanation: '$\\text{Var}(2X) = 4 \\cdot 25 = 100$, så $\\text{SD}(2X) = 10$. Standardavviket skaleres med $|a|$, ikke $a^2$.',
  },
],


  's2-4-5': [
  {
    question: 'Hva sier store talls lov?',
    options: ['Gjennomsnittet av observasjonene nærmer seg forventningsverdien når antall forsøk øker', 'Alle store tall er tilnærmet normalfordelte', 'Sannsynligheten øker med antall forsøk', 'Etter mange tap er det «på tide» med en gevinst'],
    explanation: '$\\bar{X}_n \\to \\mu$ når $n \\to \\infty$. Merk: loven sier ingenting om at tilfeldigheter «utligner seg» på kort sikt (gamblers fallacy).',
  },
  {
    question: 'Hvordan estimeres en sannsynlighet med Monte Carlo-simulering?',
    options: ['$P(A) \\approx \\frac{\\text{antall ganger } A \\text{ inntreffer}}{\\text{antall simuleringer}}$', '$P(A) \\approx \\frac{\\text{antall simuleringer}}{\\text{antall ganger } A \\text{ inntreffer}}$', 'Ved å beregne integralet av tetthetsfunksjonen', 'Ved å multiplisere antall suksesser med antall forsøk'],
    explanation: 'Den relative frekvensen av hendelsen i mange simuleringer er et estimat for sannsynligheten — begrunnet av store talls lov.',
  },
  {
    question: 'Hva kjennetegner pseudotilfeldige tall fra en datamaskin?',
    options: ['De er generert av en deterministisk algoritme, men ser tilfeldige ut', 'De er ekte tilfeldige', 'De kan aldri reproduseres', 'De er alltid uniformt fordelt mellom 0 og 100'],
    explanation: 'En PRNG er deterministisk: samme «seed» gir samme tallsekvens. Det er nyttig for å reprodusere simuleringer.',
  },
  {
    question: 'Standardfeilen i en Monte Carlo-simulering avtar som $\\frac{1}{\\sqrt{N}}$. Hvor mange ganger flere simuleringer trengs for å få 10 ganger bedre presisjon?',
    options: ['$100$ ganger flere', '$10$ ganger flere', '$1000$ ganger flere', '$\\sqrt{10}$ ganger flere'],
    explanation: 'Siden presisjonen bedres med kvadratroten av $N$, krever 10 ganger bedre presisjon $10^2 = 100$ ganger flere simuleringer.',
  },
  {
    question: 'I 10 000 simuleringer inntreffer hendelsen $A$ 2300 ganger. Hva er estimatet for $P(A)$?',
    options: ['$0{,}23$', '$0{,}023$', '$2{,}3$', '$0{,}77$'],
    explanation: '$\\hat{P}(A) = \\frac{2300}{10000} = 0{,}23$.',
  },
],


  's2-4-6': [
  {
    question: 'Hvilke krav stilles til en tetthetsfunksjon $f(x)$?',
    options: ['$f(x) \\geq 0$ for alle $x$, og $\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$', '$f(x) \\leq 1$ for alle $x$, og $f$ må være symmetrisk', '$f(x)$ må være avtagende og positiv', '$f$ må være deriverbar overalt og gå mot null'],
    explanation: 'Tettheten kan ikke være negativ, og det totale arealet under kurven (total sannsynlighet) må være 1. Merk at $f(x)$ godt kan være større enn 1 lokalt.',
  },
  {
    question: 'Hva er $P(X = a)$ for en kontinuerlig stokastisk variabel?',
    options: ['$0$', '$f(a)$', '$F(a)$', '$\\frac{1}{b - a}$'],
    explanation: 'For kontinuerlige variabler er sannsynligheten for én eksakt verdi alltid null — bare intervaller har positiv sannsynlighet: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$.',
  },
  {
    question: '$X \\sim U(2, 7)$ (uniform fordeling). Hva er $P(3 \\leq X \\leq 5)$?',
    options: ['$0{,}4$', '$0{,}2$', '$0{,}5$', '$0{,}6$'],
    explanation: 'Tettheten er $\\frac{1}{7-2} = \\frac{1}{5}$, så $P(3 \\leq X \\leq 5) = \\frac{5 - 3}{5} = \\frac{2}{5} = 0{,}4$.',
  },
  {
    question: 'Hva er sammenhengen mellom den kumulative fordelingsfunksjonen $F(x)$ og tetthetsfunksjonen $f(x)$?',
    options: ['$F\'(x) = f(x)$', '$f\'(x) = F(x)$', '$F(x) = f(x)^2$', '$F(x) \\cdot f(x) = 1$'],
    explanation: '$F(x) = P(X \\leq x) = \\int_{-\\infty}^x f(t) \\, dt$, så derivasjon gir $F\'(x) = f(x)$ (analysens fundamentalteorem).',
  },
  {
    question: 'Hva brukes eksponentialfordelingen typisk til å modellere?',
    options: ['Ventetider mellom hendelser', 'Antall suksesser i $n$ forsøk', 'Høyder i en befolkning', 'Terningkast'],
    explanation: 'Eksponentialfordelingen $f(x) = \\lambda e^{-\\lambda x}$ modellerer ventetid til neste hendelse, med $E(X) = \\frac{1}{\\lambda}$.',
  },
],


  's2-5-1': [
  {
    question: 'Hva er et punktestimat for populasjonsgjennomsnittet $\\mu$?',
    options: ['Utvalgsgjennomsnittet $\\bar{x}$', 'Utvalgsstørrelsen $n$', 'Standardfeilen $\\frac{s}{\\sqrt{n}}$', 'Konfidensnivået $1 - \\alpha$'],
    explanation: 'Et punktestimat er én tallverdi som er beste gjetning for parameteren — $\\bar{x}$ estimerer $\\mu$, $\\hat{p}$ estimerer $p$.',
  },
  {
    question: 'Hvilken kritisk $z$-verdi brukes i et 95 % konfidensintervall?',
    options: ['$1{,}96$', '$1{,}645$', '$2{,}576$', '$0{,}95$'],
    explanation: 'For 95 % konfidens er $z_{\\alpha/2} = z_{0{,}025} = 1{,}96$. (90 % gir 1,645 og 99 % gir 2,576.)',
  },
  {
    question: '$\\bar{x} = 50$, $s = 10$, $n = 25$. Hva er et 95 % konfidensintervall for $\\mu$?',
    options: ['$[46{,}1, \\ 53{,}9]$', '$[48{,}0, \\ 52{,}0]$', '$[40{,}0, \\ 60{,}0]$', '$[49{,}2, \\ 50{,}8]$'],
    explanation: '$\\bar{x} \\pm 1{,}96 \\cdot \\frac{s}{\\sqrt{n}} = 50 \\pm 1{,}96 \\cdot \\frac{10}{5} = 50 \\pm 3{,}92$, altså ca. $[46{,}1, \\ 53{,}9]$.',
  },
  {
    question: 'Hva skjer med standardfeilen $\\text{SE} = \\frac{s}{\\sqrt{n}}$ hvis utvalgsstørrelsen firedobles?',
    options: ['Den halveres', 'Den firedobles', 'Den blir fire ganger mindre', 'Den er uendret'],
    explanation: '$\\sqrt{4n} = 2\\sqrt{n}$, så standardfeilen blir halvparten så stor. Presisjonen vokser bare med kvadratroten av $n$.',
  },
  {
    question: 'Hvilken forutsetning gjelder for konfidensintervallet for en andel $p$?',
    options: ['$n\\hat{p} \\geq 5$ og $n(1 - \\hat{p}) \\geq 5$', '$n \\geq 100$', '$\\hat{p} = 0{,}5$', 'Populasjonen må være normalfordelt'],
    explanation: 'Normalapproksimasjonen av binomisk fordeling krever minst 5 forventede suksesser og 5 forventede fiaskoer i utvalget.',
  },
],


  's2-5-2': [
  {
    question: 'Hva uttrykker nullhypotesen $H_0$ vanligvis?',
    options: ['Ingen effekt eller ingen forskjell — antakelsen vi tester mot', 'Det vi ønsker å påvise', 'At utvalget er for lite', 'At resultatet er statistisk signifikant'],
    explanation: '$H_0$ er status quo («ingen endring»), mens alternativhypotesen $H_1$ er det vi ønsker å finne bevis for.',
  },
  {
    question: 'Hva er p-verdien i en hypotesetest?',
    options: ['Sannsynligheten for et resultat minst like ekstremt som det observerte, gitt at $H_0$ er sann', 'Sannsynligheten for at $H_0$ er sann', 'Sannsynligheten for at $H_1$ er sann', 'Signifikansnivået'],
    explanation: 'P-verdien beregnes under antakelsen om at $H_0$ stemmer. Den er IKKE sannsynligheten for at hypotesen er sann — en vanlig misforståelse.',
  },
  {
    question: 'P-verdien er 0,03 og signifikansnivået $\\alpha = 0{,}05$. Hva blir konklusjonen?',
    options: ['Forkast $H_0$ — resultatet er statistisk signifikant', 'Behold $H_0$ — resultatet er ikke signifikant', 'Forkast $H_1$', 'Testen må gjentas med større utvalg'],
    explanation: 'Siden $p = 0{,}03 \\leq \\alpha = 0{,}05$ forkaster vi nullhypotesen.',
  },
  {
    question: '$\\bar{x} = 52$, $\\mu_0 = 50$, $s = 8$, $n = 16$. Hva blir testobservatoren $z$?',
    options: ['$1$', '$2$', '$0{,}25$', '$4$'],
    explanation: '$z = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}} = \\frac{52 - 50}{8/4} = \\frac{2}{2} = 1$.',
  },
  {
    question: 'Hvilken alternativhypotese gir en tosidig test?',
    options: ['$H_1: \\mu \\neq \\mu_0$', '$H_1: \\mu > \\mu_0$', '$H_1: \\mu < \\mu_0$', '$H_1: \\mu = \\mu_0$'],
    explanation: 'Tosidig test ser etter avvik i begge retninger ($\\neq$). Ensidige tester bruker $>$ eller $<$, og p-verdien beregnes da bare i én hale.',
  },
],


  's2-5-3': [
  {
    question: 'Hva er en Type I-feil?',
    options: ['Å forkaste en sann nullhypotese (falsk positiv)', 'Å beholde en usann nullhypotese (falsk negativ)', 'Å velge feil signifikansnivå', 'Å bruke for lite utvalg'],
    explanation: 'Type I-feil er «falsk alarm»: vi konkluderer med en effekt som ikke finnes. Sannsynligheten er $P(\\text{Type I}) = \\alpha$.',
  },
  {
    question: 'Hva er sannsynligheten for Type I-feil?',
    options: ['Signifikansnivået $\\alpha$', '$\\beta$', 'Teststyrken $1 - \\beta$', 'P-verdien'],
    explanation: 'Vi forkaster $H_0$ når p-verdien er under $\\alpha$ — og hvis $H_0$ er sann, skjer dette med sannsynlighet nøyaktig $\\alpha$.',
  },
  {
    question: 'Hva er teststyrken?',
    options: ['$1 - \\beta$: sannsynligheten for å forkaste $H_0$ når den faktisk er usann', '$\\alpha$: sannsynligheten for falsk alarm', '$\\beta$: sannsynligheten for å overse en effekt', 'Antall observasjoner i testen'],
    explanation: 'Styrken måler testens evne til å oppdage en reell effekt. Den øker med større utvalg, større reell effekt og høyere $\\alpha$.',
  },
  {
    question: 'Hva skjer med Type II-feil hvis vi senker signifikansnivået fra 0,05 til 0,01 (alt annet likt)?',
    options: ['Sannsynligheten for Type II-feil øker', 'Sannsynligheten for Type II-feil synker', 'Den er uendret', 'Type II-feil blir umulig'],
    explanation: 'Strengere krav for å forkaste $H_0$ gir færre falske positive (Type I), men flere tilfeller der reelle effekter ikke oppdages (Type II).',
  },
  {
    question: 'En medisin uten reell effekt blir godkjent fordi testen viste «signifikant» virkning. Hvilken feiltype er dette?',
    options: ['Type I-feil', 'Type II-feil', 'Ingen feil — testen var signifikant', 'Målefeil'],
    explanation: 'Nullhypotesen («ingen effekt») var sann, men ble forkastet — en falsk positiv, altså Type I-feil.',
  },
],


  's2-5-4': [
  {
    question: 'Hva er feilmarginen $E$?',
    options: ['Halvparten av bredden til konfidensintervallet', 'Hele bredden til konfidensintervallet', 'Standardavviket i utvalget', 'Sannsynligheten for å ta feil'],
    explanation: 'Konfidensintervallet er $\\bar{x} \\pm E$, så $E$ er halve bredden: $E = z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$.',
  },
  {
    question: 'Hvor mye større utvalg trengs for å halvere feilmarginen?',
    options: ['Fire ganger større', 'Dobbelt så stort', 'Åtte ganger større', 'Like stort'],
    explanation: 'Feilmarginen avtar som $\\frac{1}{\\sqrt{n}}$, så halvering av $E$ krever firedobling av $n$.',
  },
  {
    question: 'Du vil estimere $\\mu$ med feilmargin $E = 3$ ved 95 % konfidens, og $\\sigma \\approx 15$. Hvor stort utvalg trengs?',
    options: ['$n = 97$', '$n = 25$', '$n = 10$', '$n = 384$'],
    explanation: '$n \\geq \\left(\\frac{1{,}96 \\cdot 15}{3}\\right)^2 = 9{,}8^2 = 96{,}04$. Rund alltid opp: $n = 97$.',
  },
  {
    question: 'Hvorfor bruker vi $p = 0{,}5$ når andelen er ukjent i utvalgsberegninger?',
    options: ['Fordi $p(1-p)$ er størst når $p = 0{,}5$, så vi får et konservativt (stort nok) utvalg', 'Fordi de fleste andeler er nær 50 %', 'Fordi formelen ikke virker for andre verdier', 'Fordi det gir minst mulig utvalg'],
    explanation: 'Produktet $p(1-p)$ maksimeres i $p = 0{,}5$ (verdi 0,25). Med dette valget blir $n$ aldri for lite, uansett hva den sanne andelen er.',
  },
  {
    question: 'Hvor mange må spørres for å estimere en andel med feilmargin 5 prosentpoeng ved 95 % konfidens (ukjent $p$)?',
    options: ['$n = 385$', '$n = 97$', '$n = 1000$', '$n = 40$'],
    explanation: '$n \\geq \\frac{1{,}96^2 \\cdot 0{,}5 \\cdot 0{,}5}{0{,}05^2} = \\frac{3{,}8416 \\cdot 0{,}25}{0{,}0025} = 384{,}16$, rundet opp til 385.',
  },
],


  's2-5-5': [
  {
    question: 'Hva tester fortegnstesten?',
    options: ['Om medianen er lik en bestemt verdi $m_0$', 'Om gjennomsnittet er lik $\\mu_0$', 'Om variansen er konstant', 'Om dataene er normalfordelte'],
    explanation: 'Fortegnstesten ser bare på om observasjonene ligger over eller under $m_0$ — den tester medianen, ikke gjennomsnittet.',
  },
  {
    question: 'Hvilken fordeling har antall positive differanser $n_+$ under $H_0$ i fortegnstesten?',
    options: ['Binomisk fordeling med $p = 0{,}5$', 'Normalfordeling med $\\mu = 0$', 'Hypergeometrisk fordeling', 'Uniform fordeling'],
    explanation: 'Hvis medianen er $m_0$, er hver observasjon over eller under $m_0$ med sannsynlighet $\\frac{1}{2}$: $n_+ \\sim \\text{Bin}(n, \\ 0{,}5)$.',
  },
  {
    question: 'Hvorfor er Wilcoxons rangtest mer effektiv enn fortegnstesten?',
    options: ['Den bruker også størrelsen på differansene (via ranger), ikke bare fortegnet', 'Den krever færre observasjoner enn 5', 'Den er parametrisk', 'Den tester gjennomsnittet direkte'],
    explanation: 'Fortegnstesten kaster bort informasjon om hvor store avvikene er. Wilcoxon rangerer $|d_i|$ og utnytter dermed mer av dataene.',
  },
  {
    question: 'Hva er testobservatoren i en kjikvadrattest?',
    options: ['$\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$', '$\\chi^2 = \\sum (O_i - E_i)$', '$\\chi^2 = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$', '$\\chi^2 = \\sum \\frac{O_i}{E_i}$'],
    explanation: 'Vi summerer kvadrerte avvik mellom observerte ($O_i$) og forventede ($E_i$) frekvenser, delt på forventet. Krav: $E_i \\geq 5$ i hver kategori.',
  },
  {
    question: 'Hva gjør du med observasjoner der $x_i - m_0 = 0$ i fortegnstesten?',
    options: ['Fjerner dem og reduserer $n$ tilsvarende', 'Teller dem som positive', 'Teller dem som negative', 'Teller dem som en halv i hver retning'],
    explanation: 'Nuller gir verken positivt eller negativt fortegn og fjernes fra analysen før vi teller $n_+$ og $n_-$.',
  },
],


  's2-5-6': [
  {
    question: 'Hva er stegene i den statistiske syklusen?',
    options: ['Problem → Plan → Data → Analyse → Konklusjon', 'Data → Problem → Konklusjon → Analyse → Plan', 'Hypotese → Konklusjon → Data', 'Plan → Konklusjon → Problem → Data'],
    explanation: 'Et statistisk prosjekt starter med en problemstilling, planlegger datainnsamlingen, samler og analyserer data, og konkluderer.',
  },
  {
    question: 'Hva kjennetegner en god statistisk problemstilling?',
    options: ['Den er spesifikk, målbar og statistisk interessant', 'Den er bred og åpen for tolkning', 'Den kan besvares med ja/nei uten data', 'Den inneholder minst tre variabler'],
    explanation: 'En vag problemstilling kan ikke testes. «Er gjennomsnittlig skjermtid blant elever over 4 timer?» er målbar — «Er mobil dårlig?» er det ikke.',
  },
  {
    question: 'Når skal hypotesene formuleres i et statistisk prosjekt?',
    options: ['Før dataene samles inn', 'Etter at dataene er analysert', 'Bare hvis resultatet ikke ble signifikant', 'Samtidig med konklusjonen'],
    explanation: 'Å formulere hypoteser etter å ha sett dataene gir skjevhet («data snooping») og ugyldige p-verdier.',
  },
  {
    question: 'Hva uttrykker alternativhypotesen $H_1$ i et prosjekt?',
    options: ['Det vi ønsker å påvise, gjerne med faglig begrunnelse', 'Det vi antar er sant inntil annet er bevist', 'At dataene er normalfordelte', 'At utvalget er representativt'],
    explanation: '$H_1$ er forskningspåstanden. $H_0$ er «ingen effekt»-antakelsen som vi tester mot.',
  },
  {
    question: 'Hva avgjør hvilken statistisk test som bør brukes?',
    options: ['Datatypen og problemstillingen', 'Hvilken test som gir lavest p-verdi', 'Antall sider i rapporten', 'Alltid t-test uansett'],
    explanation: 'Numeriske data om ett gjennomsnitt peker mot t-/z-test, andeler mot andelstest, kategoriske fordelinger mot kjikvadrat osv. Å velge test etter ønsket resultat er juks.',
  },
],


  's2-6-1': [
  {
    question: 'Hva minimerer minste kvadraters metode?',
    options: ['Summen av kvadrerte avvik mellom observerte og predikerte verdier, $\\sum (y_i - \\hat{y}_i)^2$', 'Summen av avvikene $\\sum (y_i - \\hat{y}_i)$', 'Den største enkeltfeilen', 'Antall datapunkter utenfor linjen'],
    explanation: 'MKM velger $a$ og $b$ i $\\hat{y} = ax + b$ slik at SSE $= \\sum (y_i - ax_i - b)^2$ blir minst mulig. Kvadrering hindrer at positive og negative avvik kansellerer.',
  },
  {
    question: 'Hva er sammenhengen mellom konstantleddet $b$, stigningstallet $a$ og gjennomsnittene i lineær regresjon?',
    options: ['$b = \\bar{y} - a\\bar{x}$', '$b = \\bar{x} - a\\bar{y}$', '$b = a \\cdot \\bar{x} \\cdot \\bar{y}$', '$b = \\bar{y} + a\\bar{x}$'],
    explanation: 'Regresjonslinjen går alltid gjennom tyngdepunktet $(\\bar{x}, \\bar{y})$, som gir $b = \\bar{y} - a\\bar{x}$.',
  },
  {
    question: 'En modell har $R^2 = 0{,}81$. Hva betyr det?',
    options: ['81 % av variasjonen i $y$ forklares av modellen', 'Korrelasjonen er 0,81', 'Modellen tar feil i 81 % av tilfellene', '81 % av punktene ligger på linjen'],
    explanation: '$R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}}$ angir andelen av totalvariasjonen i $y$ som modellen forklarer.',
  },
  {
    question: 'Hvordan tolkes stigningstallet $a$ i regresjonslinjen $\\hat{y} = ax + b$?',
    options: ['Endringen i predikert $y$ når $x$ øker med én enhet', 'Verdien av $y$ når $x = 0$', 'Andelen forklart variasjon', 'Korrelasjonen mellom $x$ og $y$'],
    explanation: '$a$ er linjens helning: én enhets økning i $x$ gir $a$ enheter endring i $\\hat{y}$. Konstantleddet $b$ er predikert verdi ved $x = 0$.',
  },
  {
    question: 'Regresjonslinjen er $\\hat{y} = 2x + 3$. Hva er predikert verdi for $x = 5$?',
    options: ['$13$', '$10$', '$25$', '$7$'],
    explanation: '$\\hat{y} = 2 \\cdot 5 + 3 = 13$.',
  },
],


  's2-6-2': [
  {
    question: 'Hvilke verdier kan Pearsons korrelasjonskoeffisient $r$ ta?',
    options: ['Alle verdier i intervallet $[-1, 1]$', 'Alle verdier i $[0, 1]$', 'Alle reelle tall', 'Bare verdiene $-1$, $0$ og $1$'],
    explanation: '$r$ ligger alltid mellom $-1$ og $1$. Fortegnet angir retningen og absoluttverdien styrken på den lineære sammenhengen.',
  },
  {
    question: 'Hva betyr $r \\approx 0$?',
    options: ['Ingen lineær sammenheng — men det kan finnes en ikke-lineær sammenheng', 'Ingen sammenheng av noe slag mellom variablene', 'Variablene er identiske', 'Dataene inneholder feil'],
    explanation: '$r$ måler kun lineære sammenhenger. En perfekt parabel kan gi $r = 0$ selv om $y$ er fullstendig bestemt av $x$.',
  },
  {
    question: 'Hva betyr $r = -0{,}9$?',
    options: ['Sterk negativ lineær sammenheng: når $x$ øker, avtar $y$ tilnærmet lineært', 'Svak negativ sammenheng', 'At 90 % av punktene ligger under linjen', 'En regnefeil — $r$ kan ikke være negativ'],
    explanation: 'Fortegnet viser at sammenhengen er negativ (avtagende), og $|r| = 0{,}9$ nær 1 viser at den er sterk.',
  },
  {
    question: 'Iskremsalg og drukningsulykker samvarierer sterkt. Hva er den beste forklaringen?',
    options: ['Spuriøs korrelasjon — begge påvirkes av en felles faktor (varmt vær)', 'Iskrem forårsaker drukning', 'Drukningsulykker øker iskremsalget', 'Korrelasjonen beviser årsakssammenheng'],
    explanation: 'Klassisk eksempel på at korrelasjon ikke er kausalitet: en bakenforliggende variabel (sommervarme) driver begge.',
  },
  {
    question: 'Hva er forskjellen på korrelasjon og kausalitet?',
    options: ['Korrelasjon er statistisk samvariasjon; kausalitet betyr at den ene faktisk påvirker den andre', 'De betyr det samme', 'Kausalitet er svakere enn korrelasjon', 'Korrelasjon gjelder bare for negative sammenhenger'],
    explanation: 'Høy $|r|$ viser samvariasjon, men årsakssammenheng krever mer — typisk kontrollerte eksperimenter eller faglig begrunnelse.',
  },
],


  's2-6-3': [
  {
    question: 'Hvordan lineariseres den eksponentielle modellen $y = a \\cdot b^x$?',
    options: ['Ta logaritmen: $\\ln y = \\ln a + x \\ln b$, og plott $(x, \\ln y)$', 'Ta logaritmen av $x$: plott $(\\ln x, y)$', 'Kvadrer begge sider: plott $(x^2, y^2)$', 'Den kan ikke lineariseres'],
    explanation: 'Med $Y = \\ln y$ blir modellen $Y = \\ln a + (\\ln b) x$ — en rett linje i $(x, \\ln y)$-plottet.',
  },
  {
    question: 'Hvilket plott blir lineært for potensmodellen $y = a \\cdot x^b$?',
    options: ['$(\\ln x, \\ln y)$ — logaritme av begge variablene', '$(x, \\ln y)$', '$(\\ln x, y)$', '$(x, y^2)$'],
    explanation: '$\\ln y = \\ln a + b \\ln x$ er lineær i $\\ln x$ og $\\ln y$. Stigningstallet i plottet er eksponenten $b$.',
  },
  {
    question: 'Lineær regresjon på $(x, \\ln y)$ gir $\\ln y = 0{,}7 + 0{,}2x$. Hva er $b$ i modellen $y = a \\cdot b^x$?',
    options: ['$b = e^{0{,}2} \\approx 1{,}22$', '$b = 0{,}2$', '$b = e^{0{,}7} \\approx 2{,}01$', '$b = 0{,}7$'],
    explanation: 'Stigningstallet er $\\ln b = 0{,}2$, så $b = e^{0{,}2} \\approx 1{,}22$. Konstantleddet gir $a = e^{0{,}7} \\approx 2{,}01$.',
  },
  {
    question: 'Hvilken modell er allerede lineær i $X = \\ln x$ uten å transformere $y$?',
    options: ['Logaritmisk modell: $y = a + b \\ln x$', 'Eksponentiell modell: $y = a \\cdot b^x$', 'Potensmodell: $y = a \\cdot x^b$', 'Kvadratisk modell: $y = ax^2$'],
    explanation: 'Den logaritmiske modellen er på formen $y = a + bX$ med $X = \\ln x$ — bare $x$-variabelen transformeres.',
  },
  {
    question: 'Et datasett viser at $y$ dobles for hver enhet $x$ øker. Hvilken modelltype passer best?',
    options: ['Eksponentiell modell med $b = 2$', 'Lineær modell med stigningstall 2', 'Potensmodell med $b = 2$', 'Logaritmisk modell'],
    explanation: 'Konstant prosentvis (multiplikativ) vekst per enhet er kjennetegnet på eksponentiell vekst: $y = a \\cdot 2^x$.',
  },
],


  's2-6-4': [
  {
    question: 'Hva er en polynomisk regresjonsmodell av grad 2?',
    options: ['$y = a + bx + cx^2$', '$y = a \\cdot b^x$', '$y = a + b \\ln x$', '$y = \\frac{a}{x^2}$'],
    explanation: 'Kvadratisk regresjon tilpasser en parabel til dataene. Koeffisientene bestemmes med minste kvadraters metode.',
  },
  {
    question: 'Hvordan lineariseres modellen $y = a e^{kx}$?',
    options: ['$\\ln y = \\ln a + kx$ — lineær regresjon på $(x, \\ln y)$ gir stigningstall $k$', '$\\ln y = a + e^{kx}$', '$y = \\ln a \\cdot kx$', 'Den kan ikke lineariseres'],
    explanation: 'Logaritmen gjør eksponentialmodellen lineær: stigningstallet i $(x, \\ln y)$-plottet er vekstraten $k$, og konstantleddet er $\\ln a$.',
  },
  {
    question: 'Lineær regresjon på $(x_i, \\ln y_i)$ gir stigningstall $0{,}3$ og konstantledd $1{,}1$. Hva er modellen $y = a e^{kx}$?',
    options: ['$y = e^{1{,}1} \\cdot e^{0{,}3x} \\approx 3{,}0 \\cdot e^{0{,}3x}$', '$y = 1{,}1 \\cdot e^{0{,}3x}$', '$y = 0{,}3 \\cdot e^{1{,}1x}$', '$y = 3{,}0 \\cdot e^{1{,}1x}$'],
    explanation: '$k = 0{,}3$ (stigningstallet) og $\\ln a = 1{,}1$, så $a = e^{1{,}1} \\approx 3{,}0$.',
  },
  {
    question: 'Hva er faren ved å bruke et polynom av veldig høy grad i regresjon?',
    options: ['Overtilpasning: modellen følger støyen i dataene og predikerer dårlig på nye data', 'Polynomet kan ikke beregnes', '$R^2$ blir for lav', 'Residualene blir alltid null i alle fremtidige punkter'],
    explanation: 'Høy grad kan gi nesten perfekt $R^2$ på treningsdataene, men kurven svinger vilt mellom og utenfor punktene — dårlig prediksjon.',
  },
  {
    question: 'Hvordan velger du mellom flere mulige regresjonsmodeller?',
    options: ['Sammenlikn $R^2$, vurder residualplott og bruk faglig kunnskap om situasjonen', 'Velg alltid modellen med flest parametre', 'Velg alltid den lineære modellen', 'Velg modellen med størst stigningstall'],
    explanation: 'God modellvalg kombinerer føyningsmål ($R^2$), mønsterfrie residualer og en funksjonsform som gir faglig mening.',
  },
],


  's2-6-5': [
  {
    question: 'Hva er residualet for observasjon $i$?',
    options: ['$e_i = y_i - \\hat{y}_i$ — observert minus predikert verdi', '$e_i = \\hat{y}_i - \\bar{y}$', '$e_i = x_i - \\bar{x}$', '$e_i = y_i \\cdot \\hat{y}_i$'],
    explanation: 'Residualet er feilen modellen gjør for ett datapunkt: positivt når punktet ligger over regresjonskurven.',
  },
  {
    question: 'Hvordan ser residualplottet ut for en god modell?',
    options: ['Tilfeldig spredning rundt null med konstant spredning', 'Et tydelig buet mønster', 'En traktform med økende spredning', 'Alle residualer er positive'],
    explanation: 'Mønsterfrie residualer betyr at modellen har fanget opp den systematiske strukturen — det som er igjen er bare støy.',
  },
  {
    question: 'Residualplottet viser et tydelig buet mønster. Hva tyder det på?',
    options: ['Sammenhengen er ikke-lineær — en annen modellform bør prøves', 'Modellen er perfekt', 'Dataene har for høy korrelasjon', 'Utvalget er for stort'],
    explanation: 'Et buet residualmønster betyr systematikk modellen ikke fanger — prøv f.eks. kvadratisk, eksponentiell eller logaritmisk modell.',
  },
  {
    question: 'Hva bør du gjøre med en uteligger (standardisert residual $|z_i| > 2$)?',
    options: ['Undersøke den — ikke fjerne den automatisk', 'Alltid slette den fra datasettet', 'Doble vekten dens i regresjonen', 'Ignorere den fullstendig'],
    explanation: 'Uteliggere kan være målefeil, men også reelle og viktige observasjoner. Fjerning uten begrunnelse er dårlig statistisk praksis.',
  },
  {
    question: 'Observert verdi er $y = 10$ og modellen predikerer $\\hat{y} = 8{,}5$. Hva er residualet?',
    options: ['$1{,}5$', '$-1{,}5$', '$18{,}5$', '$0{,}85$'],
    explanation: '$e = y - \\hat{y} = 10 - 8{,}5 = 1{,}5$. Punktet ligger over regresjonskurven.',
  },
],


  's2-7-1': [
  {
    question: 'Hva kjennetegner en aritmetisk følge?',
    options: ['Differansen mellom påfølgende ledd er konstant', 'Forholdet mellom påfølgende ledd er konstant', 'Leddene er alltid positive', 'Summen av leddene er konstant'],
    explanation: '$a_{n+1} - a_n = d$ for alle $n$. Konstant kvotient kjennetegner derimot geometriske følger.',
  },
  {
    question: 'En aritmetisk følge har $a_1 = 2$ og $d = 3$. Hva er $a_{10}$?',
    options: ['$29$', '$32$', '$30$', '$27$'],
    explanation: '$a_n = a_1 + (n-1)d$ gir $a_{10} = 2 + 9 \\cdot 3 = 29$.',
  },
  {
    question: 'Hva er summen $1 + 2 + 3 + \\cdots + 100$?',
    options: ['$5050$', '$5000$', '$10100$', '$4950$'],
    explanation: '$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{100}{2}(1 + 100) = 50 \\cdot 101 = 5050$.',
  },
  {
    question: 'Hva er $\\sum_{k=1}^{5} (2k + 1)$?',
    options: ['$35$', '$30$', '$25$', '$11$'],
    explanation: 'Leddene er $3 + 5 + 7 + 9 + 11 = 35$ — en aritmetisk rekke med $a_1 = 3$, $d = 2$ og $n = 5$.',
  },
  {
    question: 'En aritmetisk rekke har $a_1 = 5$ og $d = 4$. Hva er summen av de 20 første leddene?',
    options: ['$860$', '$820$', '$1720$', '$430$'],
    explanation: '$S_{20} = \\frac{20}{2}(2 \\cdot 5 + 19 \\cdot 4) = 10(10 + 76) = 860$.',
  },
],


  's2-7-2': [
  {
    question: 'Hva kjennetegner en geometrisk følge?',
    options: ['Forholdet mellom påfølgende ledd er en konstant $k$', 'Differansen mellom påfølgende ledd er konstant', 'Leddene vokser alltid', 'Hvert ledd er summen av de to foregående'],
    explanation: '$\\frac{a_{n+1}}{a_n} = k$ for alle $n$ — hvert ledd fås ved å multiplisere det forrige med kvotienten $k$.',
  },
  {
    question: 'En geometrisk følge har $a_1 = 3$ og $k = 2$. Hva er $a_6$?',
    options: ['$96$', '$192$', '$48$', '$64$'],
    explanation: '$a_n = a_1 \\cdot k^{n-1}$ gir $a_6 = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$.',
  },
  {
    question: 'Hva er summen av de 4 første leddene i den geometriske rekken med $a_1 = 2$ og $k = 3$?',
    options: ['$80$', '$54$', '$26$', '$162$'],
    explanation: '$S_4 = a_1 \\cdot \\frac{k^4 - 1}{k - 1} = 2 \\cdot \\frac{81 - 1}{2} = 80$. (Kontroll: $2 + 6 + 18 + 54 = 80$.)',
  },
  {
    question: 'En investering vokser 5 % per år. Hvilken kvotient $k$ har den geometriske følgen av årsverdier?',
    options: ['$k = 1{,}05$', '$k = 0{,}05$', '$k = 5$', '$k = 0{,}95$'],
    explanation: 'Vekst på $p\\%$ gir vekstfaktor $k = 1 + \\frac{p}{100} = 1{,}05$. ($k = 0{,}95$ ville betydd 5 % reduksjon.)',
  },
  {
    question: 'Hva er en vanlig feil med formelen for det $n$-te leddet i en geometrisk følge?',
    options: ['Å bruke $a_n = a_1 \\cdot k^n$ i stedet for $a_n = a_1 \\cdot k^{n-1}$', 'Å multiplisere med $n$ i stedet for å opphøye', 'Å bruke divisjon i stedet for multiplikasjon', 'Å glemme at $k$ må være positiv'],
    explanation: 'Eksponenten er $n - 1$, ikke $n$: første ledd skal være $a_1 \\cdot k^0 = a_1$.',
  },
],


  's2-7-3': [
  {
    question: 'Når konvergerer en uendelig geometrisk rekke?',
    options: ['Når $|k| < 1$', 'Når $k < 1$', 'Når $a_1 < 1$', 'Alltid'],
    explanation: 'Konvergens krever $|k| < 1$, altså $-1 < k < 1$. Merk at f.eks. $k = -2$ gir divergens selv om $k < 1$.',
  },
  {
    question: 'En uendelig geometrisk rekke har $a_1 = 6$ og $k = \\frac{1}{2}$. Hva er summen?',
    options: ['$12$', '$6$', '$3$', '$\\infty$'],
    explanation: '$S = \\frac{a_1}{1 - k} = \\frac{6}{1 - \\frac{1}{2}} = \\frac{6}{\\frac{1}{2}} = 12$.',
  },
  {
    question: 'Hva er summen av rekken $1 - \\frac{1}{3} + \\frac{1}{9} - \\frac{1}{27} + \\cdots$?',
    options: ['$\\frac{3}{4}$', '$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$'],
    explanation: 'Geometrisk rekke med $a_1 = 1$ og $k = -\\frac{1}{3}$: $S = \\frac{1}{1 - (-\\frac{1}{3})} = \\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$.',
  },
  {
    question: 'Er betingelsen $a_n \\to 0$ tilstrekkelig for at rekken $\\sum a_n$ konvergerer?',
    options: ['Nei — den er nødvendig, men ikke tilstrekkelig (moteksempel: den harmoniske rekken)', 'Ja, alltid', 'Ja, men bare for positive ledd', 'Nei — leddene må i tillegg være positive'],
    explanation: 'Den harmoniske rekken $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$ har $a_n \\to 0$, men divergerer likevel.',
  },
  {
    question: 'Skriv det periodiske desimaltallet $0{,}444\\ldots$ som brøk ved hjelp av en geometrisk rekke.',
    options: ['$\\frac{4}{9}$', '$\\frac{4}{10}$', '$\\frac{44}{100}$', '$\\frac{4}{11}$'],
    explanation: '$0{,}444\\ldots = \\frac{4}{10} + \\frac{4}{100} + \\cdots$ er geometrisk med $a_1 = \\frac{4}{10}$ og $k = \\frac{1}{10}$: $S = \\frac{4/10}{9/10} = \\frac{4}{9}$.',
  },
],


  's2-7-4': [
  {
    question: 'Hva kjennetegner et annuitetslån?',
    options: ['Terminbeløpet (renter + avdrag) er konstant gjennom hele løpetiden', 'Avdraget er konstant, mens terminbeløpet synker', 'Renten er null', 'Lånet betales tilbake i én sum til slutt'],
    explanation: 'I et annuitetslån betales samme beløp hver termin. Tidlig i løpetiden er rentedelen stor; mot slutten dominerer avdragene.',
  },
  {
    question: 'Du setter inn beløpet $b$ ved slutten av hver termin i $n$ terminer med rente $r$. Hva er sluttverdien?',
    options: ['$K_n = b \\cdot \\frac{(1+r)^n - 1}{r}$', '$K_n = b \\cdot (1+r)^n$', '$K_n = b \\cdot n \\cdot (1+r)$', '$K_n = \\frac{b}{(1+r)^n}$'],
    explanation: 'Innskuddene danner en geometrisk rekke: det første vokser i $n-1$ terminer, det siste ikke i det hele tatt. Summen er $b \\cdot \\frac{(1+r)^n - 1}{r}$.',
  },
  {
    question: 'Hva er nåverdien av 10 000 kr som mottas om 2 år, med rente 5 % per år?',
    options: ['Ca. 9070 kr', 'Ca. 11 025 kr', 'Ca. 9500 kr', '10 000 kr'],
    explanation: '$NV = \\frac{10000}{1{,}05^2} = \\frac{10000}{1{,}1025} \\approx 9070$ kr.',
  },
  {
    question: 'Du sparer 1000 kr ved slutten av hvert år i 3 år med 10 % rente. Hva har du rett etter siste innskudd?',
    options: ['$3310$ kr', '$3000$ kr', '$3641$ kr', '$3300$ kr'],
    explanation: '$K = 1000 \\cdot \\frac{1{,}1^3 - 1}{0{,}1} = 1000 \\cdot \\frac{0{,}331}{0{,}1} = 3310$ kr. (Kontroll: $1210 + 1100 + 1000 = 3310$.)',
  },
  {
    question: 'Hva brukes nåverdi til?',
    options: ['Å sammenlikne betalinger som skjer på ulike tidspunkter', 'Å beregne fremtidig verdi av dagens penger', 'Å finne renten i et lån', 'Å beregne inflasjonen'],
    explanation: 'Nåverdien $NV = \\frac{B}{(1+r)^n}$ omregner fremtidige beløp til dagens verdi, slik at betalingsstrømmer kan sammenliknes rettferdig.',
  },
],


  's2-7-5': [
  {
    question: 'Hva må en rekursiv formel for en følge inneholde?',
    options: ['Startverdi(er) og en rekursjonsrelasjon som gir neste ledd fra foregående ledd', 'Bare en eksplisitt formel for $a_n$', 'Bare det siste leddet', 'Summen av alle leddene'],
    explanation: 'Uten startverdi kan ikke rekursjonen «komme i gang» — f.eks. $a_1 = 3$ og $a_{n+1} = a_n + 5$.',
  },
  {
    question: 'Fibonacci-følgen starter $1, 1, 2, 3, 5, 8, \\ldots$ Hva er neste ledd?',
    options: ['$13$', '$11$', '$12$', '$16$'],
    explanation: 'Hvert ledd er summen av de to foregående: $F_{n+2} = F_{n+1} + F_n$, så neste er $5 + 8 = 13$.',
  },
  {
    question: 'Hva er likevektspunktet for rekursjonen $a_{n+1} = 0{,}5 a_n + 10$?',
    options: ['$a^* = 20$', '$a^* = 10$', '$a^* = 5$', '$a^* = 0{,}5$'],
    explanation: '$a^* = \\frac{q}{1 - p} = \\frac{10}{1 - 0{,}5} = 20$. (Kontroll: $0{,}5 \\cdot 20 + 10 = 20$.)',
  },
  {
    question: 'Når er likevektspunktet til $a_{n+1} = p \\cdot a_n + q$ stabilt?',
    options: ['Når $|p| < 1$ — følgen konvergerer da mot $a^*$ uansett startverdi', 'Når $|p| > 1$', 'Når $q = 0$', 'Når $p = 1$'],
    explanation: 'Med $|p| < 1$ dempes avvik fra likevekten ut for hvert steg. Med $|p| > 1$ forsterkes de, og følgen divergerer fra $a^*$.',
  },
  {
    question: 'Følgen er gitt ved $a_1 = 4$ og $a_{n+1} = 2a_n - 3$. Hva er $a_3$?',
    options: ['$7$', '$5$', '$11$', '$13$'],
    explanation: '$a_2 = 2 \\cdot 4 - 3 = 5$ og $a_3 = 2 \\cdot 5 - 3 = 7$.',
  },
],


  's2-8-1': [
  {
    question: 'Hva representerer $K(0)$ i en kostnadsfunksjon $K(x)$?',
    options: ['De faste kostnadene — kostnader som påløper uavhengig av produksjonen', 'De variable kostnadene', 'Marginalkostnaden', 'Enhetskostnaden'],
    explanation: 'Ved null produksjon gjenstår bare faste kostnader som husleie og forsikring. De variable kostnadene er $K(x) - K(0)$.',
  },
  {
    question: 'Hva er forskjellen på enhetskostnad og marginalkostnad?',
    options: ['Enhetskostnaden er $\\frac{K(x)}{x}$ (gjennomsnitt per enhet), marginalkostnaden er $K\'(x)$ (kostnad for neste enhet)', 'De er alltid like', 'Enhetskostnaden er den deriverte av marginalkostnaden', 'Marginalkostnaden er totalkostnaden delt på antall enheter'],
    explanation: '$E(x) = \\frac{K(x)}{x}$ er gjennomsnittskostnad, mens $K\'(x) \\approx K(x+1) - K(x)$ er den tilnærmede kostnaden ved å produsere én enhet til.',
  },
  {
    question: '$K(x) = 0{,}5x^2 + 200$. Hva er marginalkostnaden ved $x = 100$?',
    options: ['$100$', '$5200$', '$52$', '$200$'],
    explanation: '$K\'(x) = x$, så $K\'(100) = 100$ — det koster ca. 100 kr å produsere enhet nr. 101.',
  },
  {
    question: 'Hvor har enhetskostnaden $E(x) = \\frac{K(x)}{x}$ sitt minimum?',
    options: ['Der marginalkostnaden er lik enhetskostnaden: $K\'(x) = E(x)$', 'Der marginalkostnaden er null', 'Der totalkostnaden er minst', 'Der $K\'\'(x) = 0$'],
    explanation: '$E\'(x) = 0$ gir $K\'(x) = \\frac{K(x)}{x} = E(x)$. Så lenge neste enhet koster mindre enn snittet, trekker den snittet ned.',
  },
  {
    question: 'Etterspørselen er lineær: $p(x) = a - bx$. Hva er grenseinntekten?',
    options: ['$I\'(x) = a - 2bx$ — den faller dobbelt så raskt som prisen', '$I\'(x) = a - bx$', '$I\'(x) = -b$', '$I\'(x) = a$'],
    explanation: '$I(x) = p(x) \\cdot x = ax - bx^2$, så $I\'(x) = a - 2bx$. Grenseinntektslinjen har dobbelt så bratt helning som etterspørselslinjen.',
  },
],


  's2-8-2': [
  {
    question: 'Hva er profittfunksjonen $P(x)$?',
    options: ['$P(x) = I(x) - K(x)$ — inntekt minus kostnad', '$P(x) = I(x) + K(x)$', '$P(x) = \\frac{I(x)}{K(x)}$', '$P(x) = I\'(x) - K\'(x)$'],
    explanation: 'Profitten (overskuddet) er totalinntekten minus totalkostnaden. Negativ $P(x)$ betyr underskudd.',
  },
  {
    question: 'Hva sier MR = MC-prinsippet?',
    options: ['Profitten er maksimal der grenseinntekten er lik marginalkostnaden: $I\'(x) = K\'(x)$', 'Profitten er maksimal der inntekten er lik kostnaden', 'Profitten er maksimal der marginalkostnaden er null', 'Profitten er maksimal der prisen er høyest'],
    explanation: '$P\'(x) = I\'(x) - K\'(x) = 0$ gir $I\'(x) = K\'(x)$. Husk også å sjekke at $P\'\'(x) < 0$.',
  },
  {
    question: 'Hva er break-even-punktene?',
    options: ['Produksjonsnivåene der $I(x) = K(x)$, altså null profitt', 'Punktene der profitten er maksimal', 'Punktene der marginalkostnaden er null', 'Punktene der inntekten er maksimal'],
    explanation: 'Break-even svarer på «hvor mange enheter må selges for å gå i null?». Mellom to break-even-punkter er det overskudd.',
  },
  {
    question: '$I(x) = 100x$ og $K(x) = x^2 + 1600$. Hvilket produksjonsnivå gir størst profitt?',
    options: ['$x = 50$', '$x = 100$', '$x = 40$', '$x = 80$'],
    explanation: '$P(x) = 100x - x^2 - 1600$, $P\'(x) = 100 - 2x = 0$ gir $x = 50$. $P\'\'(x) = -2 < 0$ bekrefter maksimum, med $P(50) = 900$.',
  },
  {
    question: 'En bedrift selger til fast pris $p$ (fullkommen konkurranse). Hvor er profitten maksimal?',
    options: ['Der prisen er lik marginalkostnaden: $p = K\'(x)$', 'Der prisen er lik enhetskostnaden', 'Der marginalkostnaden er minst', 'Der $K(x) = 0$'],
    explanation: 'Med fast pris er $I\'(x) = p$, så MR = MC blir $p = K\'(x)$. I tillegg må marginalkostnaden være voksende der.',
  },
],


  's2-8-3': [
  {
    question: 'Hva kjennetegner markedslikevekten?',
    options: ['Tilbudt mengde er lik etterspurt mengde: $p_E(x) = p_T(x)$', 'Prisen er høyest mulig', 'Tilbudet er større enn etterspørselen', 'Konsumentoverskuddet er null'],
    explanation: 'I likevekt krysser tilbuds- og etterspørselskurvene hverandre, og det er ingen tendens til prisendring.',
  },
  {
    question: '$p_E(x) = 100 - 2x$ og $p_T(x) = 20 + 2x$. Hva er likevektsmengden og likevektsprisen?',
    options: ['$x^* = 20$ og $p^* = 60$', '$x^* = 40$ og $p^* = 20$', '$x^* = 60$ og $p^* = 20$', '$x^* = 25$ og $p^* = 50$'],
    explanation: '$100 - 2x = 20 + 2x$ gir $80 = 4x$, altså $x^* = 20$ og $p^* = 100 - 40 = 60$.',
  },
  {
    question: 'Hva betyr det at etterspørselen er elastisk ($|E_p| > 1$)?',
    options: ['Prosentvis mengdeendring er større enn prosentvis prisendring — prisøkning gir lavere inntekt', 'Mengden påvirkes ikke av prisen', 'Prisen er konstant', 'Inntekten øker alltid når prisen øker'],
    explanation: 'Elastisk etterspørsel betyr prisfølsomme kunder: settes prisen opp, faller salget så mye at totalinntekten synker.',
  },
  {
    question: 'For en lineær etterspørselsfunksjon: hvor er totalinntekten maksimal?',
    options: ['Der etterspørselen er enhetselastisk: $|E_p| = 1$', 'Der prisen er høyest', 'Der mengden er størst', 'Der elastisiteten er null'],
    explanation: 'For $p(x) = a - bx$ er $I\'(x) = a - 2bx = 0$ i $x = \\frac{a}{2b}$ — midt på etterspørselskurven, nøyaktig der $|E_p| = 1$.',
  },
  {
    question: 'Prisen ligger over likevektsprisen. Hva skjer i markedet?',
    options: ['Overskuddstilbud — prisen presses nedover mot likevekt', 'Etterspørselsoverskudd — prisen presses oppover', 'Ingenting endres', 'Tilbudet synker til null'],
    explanation: 'Ved for høy pris vil produsentene tilby mer enn forbrukerne etterspør. Usolgte varer presser prisen ned mot $p^*$.',
  },
],


  's2-8-4': [
  {
    question: 'Hva er konsumentoverskuddet (KO)?',
    options: ['Gevinsten forbrukerne får ved å betale likevektsprisen i stedet for sin maksimale betalingsvilje', 'Den totale inntekten til produsentene', 'Statens avgiftsinntekter', 'Differansen mellom tilbud og etterspørsel'],
    explanation: 'Grafisk er KO arealet mellom etterspørselskurven og prislinjen $p = p^*$: $KO = \\int_0^{x^*} p_E(x)dx - p^* x^*$.',
  },
  {
    question: '$p_E(x) = 100 - 2x$, likevekt i $x^* = 20$, $p^* = 60$. Hva er konsumentoverskuddet?',
    options: ['$400$', '$800$', '$1200$', '$200$'],
    explanation: 'For lineær etterspørsel: $KO = \\frac{1}{2} x^* (p_E(0) - p^*) = \\frac{1}{2} \\cdot 20 \\cdot (100 - 60) = 400$.',
  },
  {
    question: 'Hva er formelen for produsentoverskuddet?',
    options: ['$PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx$', '$PO = \\int_0^{x^*} p_T(x) \\, dx - p^* \\cdot x^*$', '$PO = \\int_0^{x^*} p_E(x) \\, dx - p^* \\cdot x^*$', '$PO = p^* \\cdot x^*$'],
    explanation: 'PO er arealet mellom prislinjen og tilbudskurven: salgsinntektene minus det produsentene minst måtte ha for hver enhet.',
  },
  {
    question: 'Hva skjer med overskuddene når staten innfører en avgift på varen?',
    options: ['Både konsument- og produsentoverskuddet synker, staten får avgiftsinntekt, og det oppstår et dødvektstap', 'Begge overskuddene øker', 'Bare produsentoverskuddet endres', 'Det samfunnsøkonomiske overskuddet øker'],
    explanation: 'Avgiften reduserer omsatt mengde. Tapet i KO + PO er større enn statens inntekt — differansen er dødvektstapet (effektivitetstap).',
  },
  {
    question: '$p_T(x) = 20 + 2x$ med likevekt $x^* = 20$ og $p^* = 60$. Hva er produsentoverskuddet?',
    options: ['$400$', '$1200$', '$200$', '$800$'],
    explanation: 'For lineært tilbud: $PO = \\frac{1}{2} x^* (p^* - p_T(0)) = \\frac{1}{2} \\cdot 20 \\cdot (60 - 20) = 400$.',
  },
],


  's2-8-5': [
  {
    question: 'Hva er kapitalen etter $t$ år med startkapital $K_0$ og årlig rente $r$ (rentes rente)?',
    options: ['$K(t) = K_0 (1 + r)^t$', '$K(t) = K_0 (1 + rt)$', '$K(t) = K_0 + rt$', '$K(t) = K_0 \\cdot r^t$'],
    explanation: 'Rentes rente gir eksponentiell vekst med vekstfaktor $1 + r$ per år. Ved kontinuerlig forrentning: $K(t) = K_0 e^{rt}$.',
  },
  {
    question: 'En størrelse vokser kontinuerlig med rate $r = 0{,}07$ per år. Hva er doblingstiden?',
    options: ['$T_2 = \\frac{\\ln 2}{0{,}07} \\approx 9{,}9$ år', '$T_2 = \\frac{2}{0{,}07} \\approx 28{,}6$ år', '$T_2 = 14$ år', '$T_2 = 7$ år'],
    explanation: '$K_0 e^{0{,}07t} = 2K_0$ gir $t = \\frac{\\ln 2}{0{,}07} \\approx 9{,}9$ år. (72-regelen gir det raske anslaget $\\frac{72}{7} \\approx 10$.)',
  },
  {
    question: 'Når er en investering lønnsom etter nåverdiprinsippet?',
    options: ['Når nåverdien av fremtidige inntekter er større enn investeringskostnaden', 'Når de fremtidige inntektene nominelt overstiger kostnaden', 'Når renten er null', 'Når doblingstiden er kort'],
    explanation: 'Fremtidige beløp må diskonteres: $NV = \\frac{B}{(1+r)^t}$. Bare hvis samlet nåverdi overstiger investeringen i dag, lønner den seg.',
  },
  {
    question: 'Når vokser en logistisk modell $P(t) = \\frac{L}{1 + ae^{-kt}}$ raskest?',
    options: ['Når $P = \\frac{L}{2}$ — halvveis til bæreevnen', 'Når $P = L$', 'Helt i starten, når $P$ er minst', 'Når $P = 2L$'],
    explanation: 'Av $P\' = kP(1 - \\frac{P}{L})$ ser vi at vekstraten maksimeres når $P(1 - P/L)$ er størst, altså ved $P = \\frac{L}{2}$ (vendepunktet på kurven).',
  },
  {
    question: 'Hva er nåverdien av en kontinuerlig inntektsstrøm $R(t)$ over $T$ år med kontinuerlig rente $r$?',
    options: ['$NV = \\int_0^T R(t) e^{-rt} \\, dt$', '$NV = \\int_0^T R(t) e^{rt} \\, dt$', '$NV = R(T) \\cdot e^{-rT}$', '$NV = \\frac{R(0)}{r}$'],
    explanation: 'Hvert lille inntektsbidrag $R(t)\\,dt$ diskonteres med faktoren $e^{-rt}$, og integralet summerer alle bidragene.',
  },
],


  's2-8-6': [
  {
    question: 'Hva er overskuddsfunksjonen $O(x)$?',
    options: ['$O(x) = I(x) - K(x)$', '$O(x) = K(x) - I(x)$', '$O(x) = I(x) \\cdot K(x)$', '$O(x) = I\'(x) - K\'(x)$'],
    explanation: 'Overskuddet er inntekt minus kostnad. Break-even er der $O(x) = 0$, altså $I(x) = K(x)$.',
  },
  {
    question: 'Hva er de variable kostnadene i $K(x)$?',
    options: ['$V(x) = K(x) - K(0)$ — kostnadene som avhenger av produksjonsmengden', '$V(x) = K(0)$', '$V(x) = K\'(x)$', '$V(x) = \\frac{K(x)}{x}$'],
    explanation: 'Trekker vi de faste kostnadene $K(0)$ fra totalkostnaden, står de variable kostnadene (råvarer, lønn per enhet osv.) igjen.',
  },
  {
    question: '$K(x) = 2x + 500$ og fast pris $p = 12$. Hva er break-even-mengden?',
    options: ['$x = 50$', '$x = 25$', '$x = 100$', '$x = 42$'],
    explanation: '$O(x) = 12x - 2x - 500 = 10x - 500 = 0$ gir $x = 50$ enheter.',
  },
  {
    question: 'Hvilken betingelse gir maksimalt overskudd?',
    options: ['$I\'(x) = K\'(x)$ — grenseinntekt lik marginalkostnad (og $O\'\'(x) < 0$)', '$I(x) = K(x)$', '$K\'(x) = 0$', '$I(x)$ er maksimal'],
    explanation: '$O\'(x) = I\'(x) - K\'(x) = 0$. Merk at maksimal inntekt og maksimalt overskudd vanligvis inntreffer ved ulike produksjonsnivåer.',
  },
  {
    question: '$K(x) = x^2 + 400$. For hvilken $x$ er enhetskostnaden $E(x) = \\frac{K(x)}{x}$ minst?',
    options: ['$x = 20$', '$x = 40$', '$x = 10$', '$x = 400$'],
    explanation: '$E(x) = x + \\frac{400}{x}$, $E\'(x) = 1 - \\frac{400}{x^2} = 0$ gir $x^2 = 400$, altså $x = 20$ (med $E(20) = 40$).',
  },
],


  's2-8-7': [
  {
    question: 'Hva forteller grensekostnaden $K\'(x)$ oss i praksis?',
    options: ['Tilnærmet hva det koster å produsere én enhet til: $K\'(x) \\approx K(x+1) - K(x)$', 'Gjennomsnittskostnaden per enhet', 'De faste kostnadene', 'Totalkostnaden delt på antall enheter'],
    explanation: 'Grensekostnaden (marginalkostnaden) er den deriverte av totalkostnaden og tilnærmer kostnadsøkningen for neste enhet.',
  },
  {
    question: '$K(x) = 0{,}01x^2 + 5x + 1000$. Hva er grensekostnaden ved $x = 200$?',
    options: ['$9$', '$5$', '$13$', '$2400$'],
    explanation: '$K\'(x) = 0{,}02x + 5$, så $K\'(200) = 4 + 5 = 9$.',
  },
  {
    question: 'Hva er grenseinntekten når bedriften selger til fast pris $p$?',
    options: ['$I\'(x) = p$ — hver ekstra enhet gir nøyaktig prisen i ekstrainntekt', '$I\'(x) = 0$', '$I\'(x) = px$', '$I\'(x) = p - x$'],
    explanation: 'Med $I(x) = px$ er $I\'(x) = p$. MR = MC-betingelsen blir da $p = K\'(x)$.',
  },
  {
    question: 'Ved dagens produksjonsnivå er $I\'(x) > K\'(x)$. Hva bør bedriften gjøre?',
    options: ['Øke produksjonen — hver ekstra enhet gir mer i inntekt enn den koster', 'Redusere produksjonen', 'Holde produksjonen uendret', 'Senke prisen umiddelbart'],
    explanation: 'Så lenge grenseinntekten overstiger grensekostnaden, øker overskuddet med produksjonen. Optimum nås der $I\'(x) = K\'(x)$.',
  },
  {
    question: 'Hvorfor er MC = MR nødvendig, men ikke tilstrekkelig, for maksimalt overskudd?',
    options: ['Vi må også sjekke at $O\'\'(x) < 0$, ellers kan punktet være et minimum', 'Betingelsen er alltid tilstrekkelig', 'Fordi kostnadene alltid er større enn inntektene', 'Fordi MC = MR bare gjelder ved fast pris'],
    explanation: '$O\'(x) = 0$ kan også gi et bunnpunkt for overskuddet. Andrederivert-testen $I\'\'(x) < K\'\'(x)$ bekrefter at det er et maksimum.',
  },
],


  's2-8-8': [
  {
    question: 'Hvordan beskrives konsumentoverskuddet grafisk?',
    options: ['Arealet mellom etterspørselskurven og prislinjen $p = p_0$ fra $x = 0$ til $x = x_0$', 'Arealet under tilbudskurven', 'Rektangelet $p_0 \\cdot x_0$', 'Arealet mellom tilbuds- og etterspørselskurven'],
    explanation: '$KO = \\int_0^{x_0} D(x) \\, dx - p_0 x_0$: differansen mellom samlet betalingsvilje og det forbrukerne faktisk betaler.',
  },
  {
    question: 'Etterspørselen er $D(x) = 80 - x$ og markedsprisen $p_0 = 50$. Hva er konsumentoverskuddet?',
    options: ['$450$', '$900$', '$1500$', '$300$'],
    explanation: '$D(x_0) = 50$ gir $x_0 = 30$. $KO = \\frac{1}{2} \\cdot 30 \\cdot (80 - 50) = 450$ (trekantareal under lineær etterspørsel).',
  },
  {
    question: 'Hva uttrykker produsentoverskuddet?',
    options: ['Gevinsten produsentene får ved å selge til markedspris i stedet for sin laveste akseptable pris', 'Produsentenes totale inntekt', 'Produksjonskostnadene', 'Statens avgiftsinntekter'],
    explanation: '$PO = p_0 x_0 - \\int_0^{x_0} S(x) \\, dx$ — arealet mellom prislinjen og tilbudskurven.',
  },
  {
    question: 'Ved hvilken pris/mengde er det samfunnsøkonomiske overskuddet (KO + PO) størst?',
    options: ['Ved markedslikevekten, der $D(x^*) = S(x^*)$', 'Ved høyest mulig pris', 'Ved lavest mulig pris', 'Når produksjonen er størst mulig'],
    explanation: 'Markedslikevekten maksimerer KO + PO. Prisregulering eller avgifter reduserer det samlede overskuddet (dødvektstap).',
  },
  {
    question: 'Tilbudet er $S(x) = 20 + x$ og markedsprisen $p_0 = 50$. Hva er produsentoverskuddet?',
    options: ['$450$', '$1500$', '$900$', '$600$'],
    explanation: '$S(x_0) = 50$ gir $x_0 = 30$. $PO = \\frac{1}{2} \\cdot 30 \\cdot (50 - 20) = 450$ (trekantareal over lineær tilbudskurve).',
  },
],


  's2-9-1': [
  {
    question: 'Hva skiller en aritmetisk følge fra en geometrisk følge?',
    options: ['Aritmetisk har konstant differanse, geometrisk har konstant kvotient', 'Aritmetisk har konstant kvotient, geometrisk har konstant differanse', 'Aritmetiske følger er alltid voksende', 'Geometriske følger har alltid positive ledd'],
    explanation: 'Aritmetisk: $a_{n+1} = a_n + d$ (legge til). Geometrisk: $a_{n+1} = a_n \\cdot k$ (multiplisere).',
  },
  {
    question: 'Følgen $3, 7, 11, 15, \\ldots$: hva er $a_{20}$?',
    options: ['$79$', '$83$', '$80$', '$60$'],
    explanation: 'Aritmetisk med $a_1 = 3$ og $d = 4$: $a_{20} = 3 + 19 \\cdot 4 = 79$.',
  },
  {
    question: 'Når konvergerer en geometrisk følge $a_n = a_1 \\cdot k^{n-1}$ (med $a_1 \\neq 0$) mot 0?',
    options: ['Når $|k| < 1$', 'Når $k > 1$', 'Når $k = 1$', 'Aldri'],
    explanation: 'Med $|k| < 1$ blir $k^{n-1}$ vilkårlig liten, så leddene går mot 0. Med $|k| > 1$ divergerer følgen.',
  },
  {
    question: 'Hva er summen av de 5 første leddene i den geometriske følgen med $a_1 = 5$ og $k = 2$?',
    options: ['$155$', '$160$', '$80$', '$310$'],
    explanation: '$S_5 = 5 \\cdot \\frac{2^5 - 1}{2 - 1} = 5 \\cdot 31 = 155$. (Kontroll: $5 + 10 + 20 + 40 + 80 = 155$.)',
  },
  {
    question: 'Når konvergerer en aritmetisk følge?',
    options: ['Bare når $d = 0$ (konstant følge)', 'Når $d < 1$', 'Når $a_1 = 0$', 'Alltid'],
    explanation: 'Med $d \\neq 0$ vokser eller avtar leddene uten grense. Bare den konstante følgen ($d = 0$) konvergerer.',
  },
],


  's2-9-2': [
  {
    question: 'Hva er formelen for det $n$-te trekantallet?',
    options: ['$T_n = \\frac{n(n+1)}{2}$', '$T_n = n^2$', '$T_n = \\frac{n(3n-1)}{2}$', '$T_n = 2n - 1$'],
    explanation: 'Trekantallene $1, 3, 6, 10, 15, \\ldots$ er summene $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.',
  },
  {
    question: 'Hva er det 10. trekantallet?',
    options: ['$55$', '$50$', '$100$', '$45$'],
    explanation: '$T_{10} = \\frac{10 \\cdot 11}{2} = 55$.',
  },
  {
    question: 'Hvor mange prikker legges til for å gå fra kvadrattallet $K_n$ til $K_{n+1}$?',
    options: ['$2n + 1$', '$n + 1$', '$2n$', '$n^2$'],
    explanation: '$(n+1)^2 - n^2 = 2n + 1$ — en L-formet «vinkel» (gnomon). Differansene $3, 5, 7, \\ldots$ er oddetallene.',
  },
  {
    question: 'Hvilken sammenheng gjelder mellom trekantall og kvadrattall?',
    options: ['$T_n + T_{n-1} = n^2$', '$T_n \\cdot T_{n-1} = n^2$', '$T_n - T_{n-1} = n^2$', '$T_n = n^2 + 1$'],
    explanation: 'To påfølgende trekanter kan settes sammen til et kvadrat: f.eks. $T_4 + T_3 = 10 + 6 = 16 = 4^2$.',
  },
  {
    question: 'Pentagonaltallene er gitt ved $P_n = \\frac{n(3n-1)}{2}$. Hva er $P_4$?',
    options: ['$22$', '$12$', '$35$', '$26$'],
    explanation: '$P_4 = \\frac{4 \\cdot (12 - 1)}{2} = \\frac{4 \\cdot 11}{2} = 22$.',
  },
],


  's2-9-3': [
  {
    question: 'Når passer en while-løkke bedre enn en for-løkke?',
    options: ['Når vi itererer til en betingelse er oppfylt og ikke vet antall iterasjoner på forhånd', 'Når antall iterasjoner er kjent på forhånd', 'Når vi skal summere nøyaktig 10 ledd', 'While-løkker bør aldri brukes'],
    explanation: 'For-løkker passer for kjent antall gjentakelser; while-løkker for «fortsett til betingelsen slår til» — f.eks. «første ledd under 200».',
  },
  {
    question: 'Du skal finne det første leddet i en avtagende følge som er mindre enn 200. Hvilken løkketype er mest naturlig?',
    options: ['En while-løkke som kjører så lenge leddet er $\\geq 200$', 'En for-løkke med 200 iterasjoner', 'En for-løkke med 10 iterasjoner', 'Ingen løkke — det må regnes for hånd'],
    explanation: 'Vi vet ikke hvor mange ledd som trengs, så vi itererer med while til betingelsen «ledd < 200» er oppfylt.',
  },
  {
    question: 'Hva genererer denne koden? a = 3, og i hver runde: a = a + 5',
    options: ['En aritmetisk følge med $a_1 = 3$ og $d = 5$', 'En geometrisk følge med $k = 5$', 'Fibonacci-følgen', 'En tilfeldig tallfølge'],
    explanation: 'Å legge til samme tall i hver iterasjon gir konstant differanse — følgen blir $3, 8, 13, 18, \\ldots$',
  },
  {
    question: 'Hvordan summeres leddene i en følge med en løkke?',
    options: ['Med en sumvariabel som oppdateres i hver runde: s = s + a', 'Ved å multiplisere alle leddene', 'Ved å skrive ut hvert ledd', 'Ved å lagre bare det siste leddet'],
    explanation: 'En akkumulator startes på 0, og hvert ledd legges til i løkken. Etter løkken inneholder s hele summen.',
  },
  {
    question: 'I Python beregnes Fibonacci-følgen med: a, b = b, a + b. Hva gjør denne linjen?',
    options: ['Oppdaterer begge variablene samtidig: a får verdien til b, og b blir summen av de gamle verdiene', 'Setter a og b til samme verdi', 'Bytter bare om a og b', 'Gir alltid feilmelding'],
    explanation: 'Samtidig tilordning bruker de gamle verdiene på høyresiden — nøyaktig rekursjonen $F_{n+2} = F_{n+1} + F_n$ uten hjelpevariabel.',
  },
],


};

export default quizData_s2;
