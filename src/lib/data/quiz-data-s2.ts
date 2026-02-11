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


};

export default quizData_s2;
