import type { QuizQuestion } from './quiz-data';

const quizData_r2: Record<string, QuizQuestion[]> = {
  'r2-1-1': [
  {
    question: 'En følge er gitt ved den eksplisitte formelen $a_n = n^2 + 1$. Hva er $a_4$?',
    options: ['$17$', '$16$', '$15$', '$25$'],
    explanation: 'Vi setter inn $n = 4$: $a_4 = 4^2 + 1 = 16 + 1 = 17$.',
  },
  {
    question: 'Hva er forskjellen på en eksplisitt og en rekursiv formel for en følge?',
    options: ['En eksplisitt formel gir $a_n$ direkte fra $n$, mens en rekursiv formel uttrykker $a_n$ ved hjelp av tidligere ledd', 'En eksplisitt formel gjelder bare for aritmetiske følger', 'En rekursiv formel gir $a_n$ direkte fra $n$, mens en eksplisitt formel bruker tidligere ledd', 'Det er ingen forskjell, bare ulik notasjon'],
    explanation: 'Med en eksplisitt formel kan vi beregne et hvilket som helst ledd direkte fra $n$. En rekursiv formel krever at vi kjenner ett eller flere tidligere ledd.',
  },
  {
    question: 'Fibonacci-følgen starter med $1, 1, 2, 3, 5, 8, 13, \\ldots$ Hva er det neste leddet?',
    options: ['$21$', '$18$', '$20$', '$26$'],
    explanation: 'I Fibonacci-følgen er hvert ledd summen av de to foregående: $8 + 13 = 21$.',
  },
  {
    question: 'En følge er gitt rekursivt ved $a_1 = 3$ og $a_{n+1} = 2a_n - 1$. Hva er $a_3$?',
    options: ['$9$', '$5$', '$17$', '$11$'],
    explanation: '$a_2 = 2 \\cdot 3 - 1 = 5$, og $a_3 = 2 \\cdot 5 - 1 = 9$.',
  },
  {
    question: 'Trekanttallene er $1, 3, 6, 10, 15, \\ldots$ Hvilken eksplisitt formel gir det $n$-te trekanttallet?',
    options: ['$a_n = \\frac{n(n+1)}{2}$', '$a_n = n^2$', '$a_n = 2n - 1$', '$a_n = \\frac{n^2 + 1}{2}$'],
    explanation: 'Trekanttallene er summen $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$. Sjekk: $n = 4$ gir $\\frac{4 \\cdot 5}{2} = 10$. ✓',
  },
  ],
  'r2-1-2': [
  {
    question: 'Hva er differansen $d$ i den aritmetiske følgen $4, 7, 10, 13, \\ldots$?',
    options: ['$3$', '$4$', '$7$', '$-3$'],
    explanation: 'Differansen er avstanden mellom to påfølgende ledd: $d = 7 - 4 = 3$.',
  },
  {
    question: 'En aritmetisk følge har $a_1 = 5$ og $d = 4$. Hva er $a_{10}$?',
    options: ['$41$', '$45$', '$40$', '$36$'],
    explanation: 'Eksplisitt formel: $a_n = a_1 + (n-1)d$, så $a_{10} = 5 + 9 \\cdot 4 = 41$. En vanlig feil er å bruke $n$ i stedet for $n - 1$, som gir $45$.',
  },
  {
    question: 'Hva er summen $1 + 2 + 3 + \\cdots + 100$?',
    options: ['$5050$', '$5000$', '$10100$', '$4950$'],
    explanation: 'Sum av aritmetisk følge: $S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{100 \\cdot (1 + 100)}{2} = 5050$.',
  },
  {
    question: 'Hvilken av disse følgene er aritmetisk?',
    options: ['$2, 5, 8, 11, \\ldots$', '$2, 4, 8, 16, \\ldots$', '$1, 1, 2, 3, \\ldots$', '$1, 4, 9, 16, \\ldots$'],
    explanation: 'En aritmetisk følge har konstant differanse mellom leddene. I $2, 5, 8, 11$ er differansen alltid $3$. De andre er geometrisk, Fibonacci og kvadrattall.',
  },
  {
    question: 'En aritmetisk følge har $a_1 = 2$ og $d = 3$. Hva er summen av de 20 første leddene?',
    options: ['$610$', '$590$', '$1220$', '$620$'],
    explanation: '$a_{20} = 2 + 19 \\cdot 3 = 59$, og $S_{20} = \\frac{20(2 + 59)}{2} = 10 \\cdot 61 = 610$.',
  },
  ],
  'r2-1-3': [
  {
    question: 'Hva er kvotienten $k$ i den geometriske følgen $3, 6, 12, 24, \\ldots$?',
    options: ['$2$', '$3$', '$\\frac{1}{2}$', '$6$'],
    explanation: 'Kvotienten er forholdet mellom to påfølgende ledd: $k = \\frac{6}{3} = 2$.',
  },
  {
    question: 'En geometrisk følge har $a_1 = 2$ og $k = 3$. Hva er $a_5$?',
    options: ['$162$', '$486$', '$54$', '$32$'],
    explanation: 'Eksplisitt formel: $a_n = a_1 \\cdot k^{n-1}$, så $a_5 = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$. Bruker man $k^n$ i stedet, får man feilsvaret $486$.',
  },
  {
    question: 'Hva kjennetegner en geometrisk følge?',
    options: ['Forholdet mellom to påfølgende ledd er konstant', 'Differansen mellom to påfølgende ledd er konstant', 'Hvert ledd er summen av de to foregående', 'Leddene er alltid positive'],
    explanation: 'I en geometrisk følge får vi neste ledd ved å multiplisere med en fast kvotient $k$. Konstant differanse kjennetegner aritmetiske følger.',
  },
  {
    question: 'Du setter $10\\,000$ kr i banken med $5\\,\\%$ rente per år. Hvor mye har du etter 3 år?',
    options: ['$11\\,576{,}25$ kr', '$11\\,500$ kr', '$10\\,157{,}63$ kr', '$13\\,310$ kr'],
    explanation: 'Rentes rente gir en geometrisk følge med vekstfaktor $1{,}05$: $10\\,000 \\cdot 1{,}05^3 = 11\\,576{,}25$ kr. Svaret $11\\,500$ kr svarer til enkel rente uten rentes rente.',
  },
  {
    question: 'En geometrisk følge har $a_1 = 160$ og $k = \\frac{1}{2}$. Hva er $a_4$?',
    options: ['$20$', '$10$', '$40$', '$80$'],
    explanation: '$a_4 = 160 \\cdot \\left(\\frac{1}{2}\\right)^3 = 160 \\cdot \\frac{1}{8} = 20$. Slike følger beskriver for eksempel halvering.',
  },
  ],
  'r2-1-4': [
  {
    question: 'Hva er verdien av $\\sum_{i=1}^{4} i^2$?',
    options: ['$30$', '$16$', '$10$', '$36$'],
    explanation: '$\\sum_{i=1}^{4} i^2 = 1 + 4 + 9 + 16 = 30$.',
  },
  {
    question: 'Hva betyr sigmanotasjonen $\\sum_{i=1}^{n} a_i$?',
    options: ['Summen $a_1 + a_2 + \\cdots + a_n$', 'Produktet $a_1 \\cdot a_2 \\cdots a_n$', 'Det største av leddene $a_1, \\ldots, a_n$', 'Gjennomsnittet av leddene'],
    explanation: 'Sigma ($\\Sigma$) er den greske bokstaven for S og står for sum: vi legger sammen alle leddene fra $i = 1$ til $i = n$.',
  },
  {
    question: 'Hva er summen av den geometriske rekken $1 + 2 + 4 + 8 + 16$?',
    options: ['$31$', '$32$', '$30$', '$15$'],
    explanation: 'Med $a_1 = 1$, $k = 2$ og $n = 5$ gir sumformelen $S_5 = \\frac{k^5 - 1}{k - 1} = \\frac{32 - 1}{1} = 31$.',
  },
  {
    question: 'Den aritmetiske rekken $3 + 7 + 11 + \\cdots + 39$ har $a_1 = 3$ og $d = 4$. Hva er summen?',
    options: ['$210$', '$420$', '$189$', '$200$'],
    explanation: 'Antall ledd: $39 = 3 + (n-1) \\cdot 4$ gir $n = 10$. Summen er $S_{10} = \\frac{10(3 + 39)}{2} = 210$.',
  },
  {
    question: 'Hvilken formel gir summen av de $n$ første naturlige tallene, $\\sum_{i=1}^{n} i$?',
    options: ['$\\frac{n(n+1)}{2}$', '$\\frac{n^2}{2}$', '$n(n+1)$', '$\\frac{n(n-1)}{2}$'],
    explanation: 'Dette er den klassiske sumformelen for aritmetiske rekker med $a_1 = 1$ og $d = 1$: $S_n = \\frac{n(1 + n)}{2}$.',
  },
  ],
  'r2-1-5': [
  {
    question: 'Når konvergerer en uendelig geometrisk rekke med kvotient $k$?',
    options: ['Når $|k| < 1$', 'Når $k < 1$', 'Når $k > 0$', 'Alltid, hvis leddene blir mindre'],
    explanation: 'En uendelig geometrisk rekke konvergerer hvis og bare hvis $|k| < 1$. Merk at $k < 1$ ikke er nok — for eksempel divergerer rekken hvis $k = -2$.',
  },
  {
    question: 'Hva er summen av den uendelige geometriske rekken $8 + 4 + 2 + 1 + \\cdots$?',
    options: ['$16$', '$15$', '$\\infty$', '$12$'],
    explanation: 'Her er $a_1 = 8$ og $k = \\frac{1}{2}$, så $S = \\frac{a_1}{1 - k} = \\frac{8}{1 - \\frac{1}{2}} = 16$.',
  },
  {
    question: 'Den harmoniske rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ har ledd som går mot null. Hva gjelder for rekken?',
    options: ['Den divergerer likevel', 'Den konvergerer mot $1$', 'Den konvergerer mot $2$', 'Den konvergerer mot $e$'],
    explanation: 'At leddene går mot null er en nødvendig, men ikke tilstrekkelig betingelse for konvergens. Den harmoniske rekken er det klassiske eksempelet på en divergent rekke med ledd som går mot null.',
  },
  {
    question: 'Hva er summen av rekken $\\sum_{n=1}^{\\infty} \\left(\\frac{1}{3}\\right)^n = \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\cdots$?',
    options: ['$\\frac{1}{2}$', '$\\frac{3}{2}$', '$\\frac{1}{3}$', '$1$'],
    explanation: 'Med $a_1 = \\frac{1}{3}$ og $k = \\frac{1}{3}$: $S = \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.',
  },
  {
    question: 'For hvilke verdier av $p$ konvergerer p-rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$?',
    options: ['$p > 1$', '$p \\geq 1$', '$p > 0$', 'Alle $p$'],
    explanation: 'p-rekken konvergerer hvis og bare hvis $p > 1$. For $p = 1$ får vi den harmoniske rekken, som divergerer.',
  },
  ],
  'r2-1-6': [
  {
    question: 'Hvilke to steg består et induksjonsbevis av?',
    options: ['Basistrinn (vis at påstanden gjelder for $n = 1$) og induksjonstrinn (vis at hvis den gjelder for $n = k$, gjelder den for $n = k + 1$)', 'Vis at påstanden gjelder for $n = 1$ og $n = 2$', 'Anta påstanden er gal og utled en motsigelse', 'Test påstanden for mange verdier av $n$'],
    explanation: 'Induksjon fungerer som dominobrikker: basistrinnet velter første brikke, og induksjonstrinnet sikrer at hver brikke velter den neste.',
  },
  {
    question: 'Hva er induksjonshypotesen i et induksjonsbevis?',
    options: ['Antakelsen om at påstanden er sann for $n = k$', 'Konklusjonen av beviset', 'Antakelsen om at påstanden er sann for alle $n$', 'Påstanden for $n = 1$'],
    explanation: 'I induksjonstrinnet antar vi at påstanden gjelder for et vilkårlig $n = k$ (induksjonshypotesen), og bruker dette til å vise at den gjelder for $n = k + 1$.',
  },
  {
    question: 'Vi skal bevise $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ ved induksjon. Hva sjekker vi i basistrinnet ($n = 1$)?',
    options: ['At venstresiden $1$ er lik høyresiden $\\frac{1 \\cdot 2}{2} = 1$', 'At formelen gjelder for $n = k + 1$', 'At begge sider er lik $0$', 'At formelen gjelder for store $n$'],
    explanation: 'Basistrinnet er å verifisere påstanden for den minste verdien: venstresiden er $1$ og høyresiden er $\\frac{1(1+1)}{2} = 1$, så de stemmer overens.',
  },
  {
    question: 'Hvorfor er ikke basistrinnet alene nok til å bevise en påstand for alle $n$?',
    options: ['Fordi en påstand kan gjelde for $n = 1$ uten å gjelde for større $n$ — induksjonstrinnet sikrer at sannheten "smitter" videre', 'Fordi basistrinnet bare gjelder partall', 'Det er faktisk nok hvis vi sjekker $n = 1$ og $n = 2$', 'Fordi basistrinnet bare gir en tilnærming'],
    explanation: 'At noe stemmer for $n = 1$ (eller mange enkeltverdier) beviser ikke at det gjelder generelt. Induksjonstrinnet gir den logiske kjeden fra hvert tilfelle til det neste.',
  },
  {
    question: 'I induksjonstrinnet for å vise at $n^3 + 2n$ er delelig med $3$, antar vi at $k^3 + 2k = 3m$ for et heltall $m$. Hva må vi så vise?',
    options: ['At $(k+1)^3 + 2(k+1)$ også er delelig med $3$', 'At $k^3 + 2k$ er delelig med $9$', 'At $m$ er delelig med $3$', 'At $(k-1)^3 + 2(k-1)$ er delelig med $3$'],
    explanation: 'Induksjonstrinnet går alltid fra $k$ til $k + 1$: vi bruker antakelsen for $n = k$ til å vise påstanden for $n = k + 1$. Utregning gir $(k+1)^3 + 2(k+1) = k^3 + 2k + 3(k^2 + k + 1)$, som er delelig med 3.',
  },
  ],
  'r2-1-7': [
  {
    question: 'Hvorfor må en rekursiv funksjon i Python ha et basistilfelle?',
    options: ['For at rekursjonen skal stoppe — uten basistilfelle kaller funksjonen seg selv i det uendelige', 'For at funksjonen skal kjøre raskere enn en tilsvarende løsning skrevet med en vanlig løkke', 'Fordi Python krever at enhver rekursiv funksjon har minst to ulike return-setninger i seg', 'For å unngå avrundingsfeil'],
    explanation: 'Basistilfellet er stoppbetingelsen. Uten det ville funksjonen kalt seg selv uten ende, og programmet krasjer med "maximum recursion depth exceeded".',
  },
  {
    question: 'Fakultet kan defineres rekursivt ved $n! = n \\cdot (n-1)!$ med $0! = 1$. Hva er $5!$?',
    options: ['$120$', '$25$', '$60$', '$720$'],
    explanation: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
  },
  {
    question: 'Hvilken rekursiv sammenheng definerer Fibonacci-følgen i et Python-program?',
    options: ['fib(n) = fib(n-1) + fib(n-2)', 'fib(n) = 2 * fib(n-1)', 'fib(n) = fib(n-1) * fib(n-2)', 'fib(n) = fib(n-1) + 1'],
    explanation: 'Hvert Fibonacci-tall er summen av de to foregående, med basistilfellene fib(1) = fib(2) = 1.',
  },
  {
    question: 'En funksjon er definert ved: def f(n): return 1 if n == 1 else f(n-1) + 3. Hva returnerer f(4)?',
    options: ['$10$', '$12$', '$9$', '$13$'],
    explanation: 'Dette er en aritmetisk følge med $a_1 = 1$ og $d = 3$: f(2) = 4, f(3) = 7, f(4) = 10.',
  },
  {
    question: 'Hva er hovedproblemet med en naiv rekursiv implementasjon av Fibonacci i Python?',
    options: ['Den beregner de samme verdiene mange ganger, så kjøretiden vokser eksplosivt med $n$', 'Den gir feil svar for store $n$', 'Python støtter ikke rekursjon i funksjoner uten at man først slår på en egen innstilling', 'Den bruker for lite minne til å kunne mellomlagre de resultatene den regner ut underveis'],
    explanation: 'fib(n) kaller både fib(n-1) og fib(n-2), som igjen gjør egne kall — antall kall vokser omtrent eksponentielt. En løkke (iterativ løsning) er mye mer effektiv.',
  },
  ],
  'r2-2-1': [
  {
    question: 'Hva er den deriverte av $f(x) = x^5$?',
    options: ['$f\'(x) = 5x^4$', '$f\'(x) = x^4$', '$f\'(x) = \\frac{x^6}{6}$', '$f\'(x) = 5x^5$'],
    explanation: 'Potensregelen: $(x^n)\' = nx^{n-1}$, så $(x^5)\' = 5x^4$. Svaret $\\frac{x^6}{6}$ er en antiderivert, ikke den deriverte.',
  },
  {
    question: 'Hva sier produktregelen for derivasjon?',
    options: ['$(u \\cdot v)\' = u\'v + uv\'$', '$(u \\cdot v)\' = u\' \\cdot v\'$', '$(u \\cdot v)\' = u\'v - uv\'$', '$(u \\cdot v)\' = \\frac{u\'v - uv\'}{v^2}$'],
    explanation: 'Produktregelen: $(uv)\' = u\'v + uv\'$. Det er en vanlig misforståelse at man bare kan derivere faktorene hver for seg.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = (3x^2 + 1)^4$?',
    options: ['$f\'(x) = 24x(3x^2 + 1)^3$', '$f\'(x) = 4(3x^2 + 1)^3$', '$f\'(x) = 12x(3x^2 + 1)^4$', '$f\'(x) = 6x(3x^2 + 1)^3$'],
    explanation: 'Kjerneregelen med kjerne $u = 3x^2 + 1$: $f\'(x) = 4u^3 \\cdot u\' = 4(3x^2+1)^3 \\cdot 6x = 24x(3x^2+1)^3$. Glemmer man kjernens deriverte, får man $4(3x^2+1)^3$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\ln x$?',
    options: ['$f\'(x) = \\frac{1}{x}$', '$f\'(x) = \\ln x$', '$f\'(x) = e^x$', '$f\'(x) = \\frac{1}{\\ln x}$'],
    explanation: 'En av grunnformlene: $(\\ln x)\' = \\frac{1}{x}$.',
  },
  {
    question: 'Hva sier kvotientregelen for $\\left(\\frac{u}{v}\\right)\'$?',
    options: ['$\\frac{u\'v - uv\'}{v^2}$', '$\\frac{u\'}{v\'}$', '$\\frac{u\'v + uv\'}{v^2}$', '$\\frac{uv\' - u\'v}{v^2}$'],
    explanation: 'Kvotientregelen: $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$. Pass på rekkefølgen i telleren — det er $u\'v$ minus $uv\'$.',
  },
  ],
  'r2-2-2': [
  {
    question: 'Hva er $\\int x^3 \\, dx$?',
    options: ['$\\frac{x^4}{4} + C$', '$3x^2 + C$', '$\\frac{x^3}{3} + C$', '$x^4 + C$'],
    explanation: 'Potensregelen for integrasjon: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Her: $\\frac{x^4}{4} + C$. Svaret $3x^2$ er den deriverte, ikke integralet.',
  },
  {
    question: 'Hvorfor må vi alltid legge til en konstant $C$ i et ubestemt integral?',
    options: ['Fordi alle funksjoner på formen $F(x) + C$ har samme deriverte — den antideriverte er ikke entydig', 'Fordi integralet ellers blir null', 'Det er bare en konvensjon uten matematisk betydning', 'Fordi $C$ angir arealet under grafen'],
    explanation: 'Konstanter forsvinner ved derivasjon, så hvis $F\'(x) = f(x)$, er også $(F(x) + C)\' = f(x)$ for enhver konstant $C$. Alle antideriverte fanges opp av $+ C$.',
  },
  {
    question: 'Hva er $\\int (2x + 3) \\, dx$?',
    options: ['$x^2 + 3x + C$', '$2x^2 + 3x + C$', '$2 + C$', '$\\frac{x^2}{2} + 3x + C$'],
    explanation: 'Vi integrerer ledd for ledd: $\\int 2x \\, dx = x^2$ og $\\int 3 \\, dx = 3x$, så svaret er $x^2 + 3x + C$.',
  },
  {
    question: 'Hva betyr det at $F(x)$ er en antiderivert til $f(x)$?',
    options: ['At $F\'(x) = f(x)$', 'At $f\'(x) = F(x)$', 'At $F(x) = f(x) + C$', 'At $F(x) \\cdot f(x) = 1$'],
    explanation: 'En antiderivert er en funksjon som gir $f(x)$ når vi deriverer den: $F\'(x) = f(x)$. Integrasjon er den motsatte operasjonen av derivasjon.',
  },
  {
    question: 'For hvilken verdi av $n$ gjelder IKKE potensregelen $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$?',
    options: ['$n = -1$', '$n = 0$', '$n = 1$', '$n = -2$'],
    explanation: 'For $n = -1$ ville formelen gi divisjon med null. Integralet $\\int x^{-1} \\, dx = \\int \\frac{1}{x} \\, dx$ er i stedet $\\ln|x| + C$.',
  },
  ],
  'r2-2-3': [
  {
    question: 'Hva er $\\int \\frac{1}{x} \\, dx$?',
    options: ['$\\ln|x| + C$', '$-\\frac{1}{x^2} + C$', '$\\frac{x^0}{0} + C$', '$e^x + C$'],
    explanation: '$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$. Absoluttverdien trengs fordi $\\ln$ bare er definert for positive tall, mens $\\frac{1}{x}$ også er definert for negative $x$.',
  },
  {
    question: 'Hva er $\\int e^{3x} \\, dx$?',
    options: ['$\\frac{1}{3}e^{3x} + C$', '$3e^{3x} + C$', '$e^{3x} + C$', '$\\frac{e^{3x+1}}{3x+1} + C$'],
    explanation: 'Generelt er $\\int e^{kx} \\, dx = \\frac{1}{k}e^{kx} + C$. Vi deler på den indre deriverte $3$. Kontroll: $\\left(\\frac{1}{3}e^{3x}\\right)\' = e^{3x}$. ✓',
  },
  {
    question: 'Hva er $\\int a^x \\, dx$ for $a > 0$, $a \\neq 1$?',
    options: ['$\\frac{a^x}{\\ln a} + C$', '$a^x + C$', '$\\frac{a^{x+1}}{x+1} + C$', '$a^x \\ln a + C$'],
    explanation: 'Siden $(a^x)\' = a^x \\ln a$, må vi dele på $\\ln a$: $\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$. Svaret $a^x \\ln a$ er den deriverte.',
  },
  {
    question: 'Hva er $\\int \\frac{2x}{x^2 + 1} \\, dx$?',
    options: ['$\\ln(x^2 + 1) + C$', '$\\frac{1}{x^2 + 1} + C$', '$2x \\ln(x^2 + 1) + C$', '$\\arctan(x) + C$'],
    explanation: 'Telleren $2x$ er nøyaktig den deriverte av nevneren $x^2 + 1$. Da er integralet $\\ln|x^2 + 1| + C = \\ln(x^2+1) + C$, siden $x^2 + 1 > 0$.',
  },
  {
    question: 'Hva er det bestemte integralet $\\int_1^e \\frac{1}{x} \\, dx$?',
    options: ['$1$', '$e - 1$', '$0$', '$e$'],
    explanation: '$\\int_1^e \\frac{1}{x} \\, dx = [\\ln x]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$.',
  },
  ],
  'r2-2-4': [
  {
    question: 'Hva er en Riemannsum?',
    options: ['En sum av rektangelarealer som tilnærmer arealet under en graf', 'Summen av en uendelig geometrisk rekke med kvotient mindre enn én', 'Differansen mellom to antideriverte i endepunktene av intervallet', 'Arealet av ett enkelt trapes tegnet under grafen på intervallet'],
    explanation: 'Vi deler intervallet i $n$ delintervaller og summerer arealene av rektangler med høyde lik funksjonsverdien i et punkt i hvert delintervall.',
  },
  {
    question: 'Intervallet $[0, 4]$ deles i $n = 8$ like delintervaller. Hva er bredden $\\Delta x$?',
    options: ['$0{,}5$', '$2$', '$0{,}25$', '$1$'],
    explanation: '$\\Delta x = \\frac{b - a}{n} = \\frac{4 - 0}{8} = 0{,}5$.',
  },
  {
    question: 'Hva er forholdet mellom oversummen $O_n$ og undersummen $U_n$ for en funksjon på et intervall?',
    options: ['$U_n \\leq O_n$, og det bestemte integralet ligger mellom dem', '$O_n \\leq U_n$ alltid', 'De er alltid like', '$U_n$ og $O_n$ kan ikke sammenliknes'],
    explanation: 'Undersummen bruker minste funksjonsverdi i hvert delintervall, oversummen den største. Integralet er klemt mellom dem, og begge nærmer seg integralet når $n \\to \\infty$.',
  },
  {
    question: 'Hvordan defineres det bestemte integralet $\\int_a^b f(x) \\, dx$?',
    options: ['Som grenseverdien av Riemannsummer når antall delintervaller går mot uendelig', 'Som $F(b) - F(a)$ per definisjon', 'Som arealet av det aller største rektangelet som får plass under grafen på intervallet', 'Som gjennomsnittet av over- og undersummen for $n = 10$'],
    explanation: 'Definisjonen er $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\Delta x$. At dette kan beregnes som $F(b) - F(a)$ er innholdet i fundamentalsetningen — et teorem, ikke definisjonen.',
  },
  {
    question: 'Beregn venstre Riemannsum for $f(x) = x$ på $[0, 1]$ med $n = 4$.',
    options: ['$0{,}375$', '$0{,}5$', '$0{,}625$', '$0{,}25$'],
    explanation: '$\\Delta x = 0{,}25$ og venstre endepunkter er $0$, $0{,}25$, $0{,}5$, $0{,}75$. Summen blir $(0 + 0{,}25 + 0{,}5 + 0{,}75) \\cdot 0{,}25 = 0{,}375$. Den er mindre enn det eksakte arealet $0{,}5$ fordi $f$ er voksende.',
  },
  ],
  'r2-2-5': [
  {
    question: 'Hva sier analysens fundamentalsetning (del 2) om beregning av bestemte integraler?',
    options: ['$\\int_a^b f(x) \\, dx = F(b) - F(a)$, der $F$ er en antiderivert til $f$', '$\\int_a^b f(x) \\, dx = F(a) - F(b)$', '$\\int_a^b f(x) \\, dx = f(b) - f(a)$', '$\\int_a^b f(x) \\, dx = F(b) \\cdot F(a)$'],
    explanation: 'Fundamentalsetningen knytter integrasjon til derivasjon: integralet kan beregnes ved å sette inn grensene i en antiderivert, $F(b) - F(a)$.',
  },
  {
    question: 'Hva er $\\int_0^2 3x^2 \\, dx$?',
    options: ['$8$', '$12$', '$4$', '$6$'],
    explanation: 'Antiderivert: $F(x) = x^3$. Da er $\\int_0^2 3x^2 \\, dx = 2^3 - 0^3 = 8$.',
  },
  {
    question: 'Hva er $\\frac{d}{dx} \\int_a^x f(t) \\, dt$ ifølge fundamentalsetningen (del 1)?',
    options: ['$f(x)$', '$f(x) - f(a)$', '$F(x)$', '$f\'(x)$'],
    explanation: 'Del 1 av fundamentalsetningen sier at arealfunksjonen $A(x) = \\int_a^x f(t)\\,dt$ er en antiderivert til $f$, altså $A\'(x) = f(x)$.',
  },
  {
    question: 'Hva er $\\int_1^3 (2x + 1) \\, dx$?',
    options: ['$10$', '$12$', '$8$', '$7$'],
    explanation: '$[x^2 + x]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$.',
  },
  {
    question: 'En elev beregner $\\int_1^4 2x \\, dx$ som $F(1) - F(4) = 1 - 16 = -15$. Hva er feilen?',
    options: ['Grensene er satt inn i feil rekkefølge — riktig er $F(4) - F(1) = 15$', 'Antideriverten skulle vært $2x^2$', 'Man kan ikke integrere $2x$', 'Svaret skal alltid være positivt, så man tar absoluttverdien til slutt'],
    explanation: 'Newton-Leibniz-formelen er $F(b) - F(a)$ med øvre grense først: $F(4) - F(1) = 16 - 1 = 15$. Å bytte om rekkefølgen gir feil fortegn.',
  },
  ],
  'r2-2-6': [
  {
    question: 'Hva blir det bestemte integralet av en funksjon på et intervall der grafen ligger under $x$-aksen?',
    options: ['Negativt — integralet regner arealet med fortegn', 'Positivt — bestemte integraler er alltid positive', 'Null', 'Udefinert'],
    explanation: 'Det bestemte integralet er et fortegnsareal: områder under $x$-aksen bidrar negativt. Vil vi ha det geometriske arealet, må vi ta absoluttverdi av bidragene.',
  },
  {
    question: 'Hva er arealet under grafen til $f(x) = x^2$ på intervallet $[0, 3]$?',
    options: ['$9$', '$27$', '$6$', '$3$'],
    explanation: '$\\int_0^3 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} = 9$.',
  },
  {
    question: 'Hvordan finner du det absolutte arealet mellom grafen til $f$ og $x$-aksen når $f$ skifter fortegn på intervallet?',
    options: ['Del opp intervallet i nullpunktene og summer absoluttverdiene av integralene over hver del', 'Integrer over hele intervallet under ett og ta til slutt absoluttverdien av det svaret du får', 'Integrer bare der funksjonen er positiv', 'Bruk $|f(b) - f(a)|$'],
    explanation: 'Positive og negative bidrag kan utlikne hverandre. Derfor må vi finne nullpunktene, integrere hver del for seg, og summere absoluttverdiene.',
  },
  {
    question: 'For $f(x) = x$ på $[-2, 2]$: hva er det bestemte integralet, og hva er det absolutte arealet?',
    options: ['Integralet er $0$, det absolutte arealet er $4$', 'Begge er $0$', 'Begge er $4$', 'Integralet er $4$, det absolutte arealet er $0$'],
    explanation: 'Arealene over og under aksen er like store ($2$ hver) og kansellerer i integralet. Det absolutte arealet er $2 + 2 = 4$.',
  },
  {
    question: 'En bil har fart $v(t)$ (i m/s) ved tiden $t$. Hva representerer $\\int_0^{10} v(t) \\, dt$ når $v(t) \\geq 0$?',
    options: ['Strekningen bilen kjører i løpet av de 10 første sekundene', 'Bilens akselerasjon målt ved slutten av de 10 første sekundene', 'Bilens gjennomsnittsfart gjennom hele det målte tidsrommet', 'Bilens momentane fart i det øyeblikket klokken viser 10 sekunder'],
    explanation: 'Integralet av farten gir tilbakelagt strekning — arealet under fartsgrafen. Dette er en sentral praktisk tolkning av integralet.',
  },
  ],
  'r2-2-7': [
  {
    question: 'Hvordan beregner du arealet mellom to grafer $f$ og $g$ når $f(x) \\geq g(x)$ på $[a, b]$?',
    options: ['$A = \\int_a^b (f(x) - g(x)) \\, dx$', '$A = \\int_a^b (g(x) - f(x)) \\, dx$', '$A = \\int_a^b f(x) \\, dx + \\int_a^b g(x) \\, dx$', '$A = \\int_a^b f(x) \\cdot g(x) \\, dx$'],
    explanation: 'Arealet mellom kurvene er integralet av differansen øvre minus nedre funksjon: $\\int_a^b (f - g)\\,dx$.',
  },
  {
    question: 'Hva er arealet mellom $y = x$ og $y = x^2$ på intervallet $[0, 1]$?',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{5}{6}$'],
    explanation: 'På $[0,1]$ er $x \\geq x^2$, så $A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.',
  },
  {
    question: 'Hva er det naturlige første steget når du skal finne arealet avgrenset av to kurver, men grensene ikke er oppgitt?',
    options: ['Finne skjæringspunktene ved å løse $f(x) = g(x)$', 'Derivere begge funksjonene', 'Integrere begge funksjonene fra $0$ til $1$', 'Tegne tangentene til kurvene'],
    explanation: 'Skjæringspunktene gir integrasjonsgrensene. Vi løser $f(x) = g(x)$ og bruker løsningene som $a$ og $b$.',
  },
  {
    question: 'Hva må du gjøre hvis kurvene $f$ og $g$ krysser hverandre inne i intervallet du integrerer over?',
    options: ['Dele opp intervallet i skjæringspunktene, slik at du alltid integrerer øvre minus nedre funksjon', 'Ingenting — formelen gjelder uansett', 'Bytte om på integrasjonsgrensene', 'Multiplisere svaret med $2$'],
    explanation: 'Hvis kurvene bytter på å ligge øverst, vil $\\int (f - g)\\,dx$ gi bidrag med ulikt fortegn som kansellerer. Vi deler derfor opp i skjæringspunktene.',
  },
  {
    question: 'Grafene til $y = x + 2$ og $y = x^2$ skjærer hverandre i $x = -1$ og $x = 2$. Hva er arealet mellom dem?',
    options: ['$\\frac{9}{2}$', '$\\frac{10}{3}$', '$\\frac{7}{6}$', '$3$'],
    explanation: 'Linjen ligger øverst: $A = \\int_{-1}^{2} (x + 2 - x^2)\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2} = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{9}{2}$.',
  },
  ],
  'r2-3-1': [
  {
    question: 'Hva er $\\int 2x(x^2 + 1)^3 \\, dx$ med substitusjonen $u = x^2 + 1$?',
    options: ['$\\frac{(x^2 + 1)^4}{4} + C$', '$\\frac{(x^2 + 1)^3}{3} + C$', '$2x \\cdot \\frac{(x^2+1)^4}{4} + C$', '$(x^2 + 1)^4 + C$'],
    explanation: 'Med $u = x^2 + 1$ er $du = 2x \\, dx$, så integralet blir $\\int u^3 \\, du = \\frac{u^4}{4} + C = \\frac{(x^2+1)^4}{4} + C$.',
  },
  {
    question: 'Hva er den vanligste strategien for å velge $u$ ved substitusjon?',
    options: ['Velg $u$ som den indre funksjonen, slik at $u\'$ (eventuelt ganget med en konstant) finnes igjen som faktor i integranden', 'Velg $u$ som hele integranden', 'Velg alltid $u = x^2$', 'Velg $u$ som den ytre funksjonen'],
    explanation: 'Substitusjon er kjerneregelen baklengs: vi lar $u$ være kjernen (den indre funksjonen) og trenger at $du = u\' \\, dx$ kan dannes fra resten av integranden.',
  },
  {
    question: 'Hva er $\\int \\cos(5x) \\, dx$?',
    options: ['$\\frac{1}{5}\\sin(5x) + C$', '$5\\sin(5x) + C$', '$-\\frac{1}{5}\\sin(5x) + C$', '$\\frac{1}{5}\\cos(5x) + C$'],
    explanation: 'Med lineær kjerne $u = 5x$ deler vi på den indre deriverte: $\\int \\cos(5x)\\,dx = \\frac{1}{5}\\sin(5x) + C$. Kontroll ved derivasjon: $\\frac{1}{5} \\cdot 5\\cos(5x) = \\cos(5x)$. ✓',
  },
  {
    question: 'Hva er $\\int x e^{x^2} \\, dx$?',
    options: ['$\\frac{1}{2}e^{x^2} + C$', '$e^{x^2} + C$', '$\\frac{x^2}{2}e^{x^2} + C$', '$2e^{x^2} + C$'],
    explanation: 'Sett $u = x^2$, da er $du = 2x\\,dx$, altså $x\\,dx = \\frac{1}{2}du$. Integralet blir $\\frac{1}{2}\\int e^u \\, du = \\frac{1}{2}e^{x^2} + C$.',
  },
  {
    question: 'Hva må du huske på med grensene når du bruker substitusjon i et BESTEMT integral?',
    options: ['Enten regne om grensene til $u$-verdier, eller substituere tilbake til $x$ før du setter inn de opprinnelige grensene', 'Grensene endres aldri', 'Grensene skal alltid byttes om', 'Grensene skal alltid multipliseres med $u\'$'],
    explanation: 'De opprinnelige grensene er $x$-verdier. Bytter vi variabel til $u$, må grensene regnes om med $u(a)$ og $u(b)$ — eller vi substituerer tilbake til $x$ til slutt.',
  },
  ],
  'r2-3-2': [
  {
    question: 'Hva er formelen for delvis integrasjon?',
    options: ['$\\int u v\' \\, dx = uv - \\int u\' v \\, dx$', '$\\int u v\' \\, dx = u\'v\' - \\int uv \\, dx$', '$\\int u v\' \\, dx = uv + \\int u\' v \\, dx$', '$\\int u v\' \\, dx = \\int u \\, dx \\cdot \\int v\' \\, dx$'],
    explanation: 'Delvis integrasjon er produktregelen baklengs: $(uv)\' = u\'v + uv\'$ gir $\\int uv\'\\,dx = uv - \\int u\'v\\,dx$.',
  },
  {
    question: 'Hva er $\\int x e^x \\, dx$?',
    options: ['$xe^x - e^x + C$', '$xe^x + e^x + C$', '$\\frac{x^2}{2}e^x + C$', '$xe^x + C$'],
    explanation: 'Med $u = x$ og $v\' = e^x$: $\\int xe^x\\,dx = xe^x - \\int 1 \\cdot e^x\\,dx = xe^x - e^x + C$.',
  },
  {
    question: 'Hva er $\\int \\ln x \\, dx$?',
    options: ['$x \\ln x - x + C$', '$\\frac{1}{x} + C$', '$\\frac{(\\ln x)^2}{2} + C$', '$x \\ln x + C$'],
    explanation: 'Trikset er å skrive $\\ln x = 1 \\cdot \\ln x$ og bruke delvis integrasjon med $u = \\ln x$, $v\' = 1$: $x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\ln x - x + C$.',
  },
  {
    question: 'I integralet $\\int x \\cos x \\, dx$ — hvilket valg av $u$ gjør delvis integrasjon enklest?',
    options: ['$u = x$, fordi $u\' = 1$ forenkler det nye integralet', '$u = \\cos x$, fordi den er periodisk', '$u = x\\cos x$', 'Valget spiller ingen rolle'],
    explanation: 'Vi velger $u$ som blir enklere ved derivasjon. Med $u = x$ får vi $u\' = 1$, og det gjenstående integralet $\\int \\sin x \\, dx$ er lett. Motsatt valg gjør integralet vanskeligere.',
  },
  {
    question: 'Hva er $\\int x \\sin x \\, dx$?',
    options: ['$-x\\cos x + \\sin x + C$', '$x\\cos x - \\sin x + C$', '$-x\\cos x - \\sin x + C$', '$\\frac{x^2}{2}\\sin x + C$'],
    explanation: 'Med $u = x$, $v\' = \\sin x$ (så $v = -\\cos x$): $\\int x\\sin x\\,dx = -x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\sin x + C$.',
  },
  ],
  'r2-3-3': [
  {
    question: 'Vi vil spalte $\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$. Hva er $A$?',
    options: ['$\\frac{1}{3}$', '$-\\frac{1}{3}$', '$1$', '$\\frac{1}{2}$'],
    explanation: 'Multipliser med fellesnevneren: $1 = A(x+2) + B(x-1)$. Sett $x = 1$: $1 = 3A$, så $A = \\frac{1}{3}$.',
  },
  {
    question: 'Hva kjennetegner en EKTE rasjonal brøk $\\frac{P(x)}{Q(x)}$?',
    options: ['Graden til telleren er lavere enn graden til nevneren', 'Graden til telleren er høyere enn graden til nevneren', 'Telleren og nevneren har ingen felles faktorer', 'Nevneren er et førstegradspolynom'],
    explanation: 'En ekte brøk har tellergrad strengt mindre enn nevnergrad. Delbrøkoppspalting krever ekte brøk — er brøken uekte, må vi først utføre polynomdivisjon.',
  },
  {
    question: 'Bruk at $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$. Hva er $\\int \\frac{1}{x(x+1)} \\, dx$?',
    options: ['$\\ln|x| - \\ln|x+1| + C$', '$\\ln|x| + \\ln|x+1| + C$', '$\\frac{\\ln|x|}{\\ln|x+1|} + C$', '$-\\frac{1}{x^2} - \\frac{1}{(x+1)^2} + C$'],
    explanation: 'Etter oppspaltingen integrerer vi hver delbrøk for seg: $\\int \\frac{1}{x}dx - \\int \\frac{1}{x+1}dx = \\ln|x| - \\ln|x+1| + C$.',
  },
  {
    question: 'Hvilken ansats bruker vi for delbrøkoppspalting av $\\frac{x + 3}{(x-2)^2}$?',
    options: ['$\\frac{A}{x-2} + \\frac{B}{(x-2)^2}$', '$\\frac{A}{(x-2)^2}$ alene', '$\\frac{A}{x-2} + \\frac{B}{x+2}$', '$\\frac{Ax + B}{x-2}$'],
    explanation: 'For en gjentatt lineær faktor $(x-a)^n$ må vi ta med én delbrøk for hver potens fra $1$ til $n$: her $\\frac{A}{x-2} + \\frac{B}{(x-2)^2}$.',
  },
  {
    question: 'Hva må du gjøre FØR du kan delbrøkoppspalte $\\frac{x^3 + 1}{x^2 - 1}$?',
    options: ['Utføre polynomdivisjon, siden telleren har høyere grad enn nevneren', 'Derivere telleren', 'Sette $x = 1$ for å finne koeffisientene', 'Multiplisere teller og nevner med $x$'],
    explanation: 'Brøken er uekte (grad 3 over grad 2). Polynomdivisjon gir et polynom pluss en ekte brøk, og bare den ekte brøken delbrøkoppspaltes.',
  },
  ],
  'r2-3-4': [
  {
    question: 'Hva er ideen bak trapesmetoden for numerisk integrasjon?',
    options: ['Tilnærme arealet under grafen med trapeser, der grafen erstattes av rette linjestykker mellom punktene', 'Tilnærme arealet med rektangler med høyde lik venstre endepunkt', 'Tilnærme grafen med parabler gjennom tre og tre punkter', 'Velge helt tilfeldige punkter i et rektangel rundt grafen og telle hvor mange av dem som havner under grafen'],
    explanation: 'Trapesmetoden forbinder punktene på grafen med rette linjer og summerer trapesarealene. Parabeltilnærming er Simpsons metode, og tilfeldige punkter er Monte Carlo.',
  },
  {
    question: 'For polynomer opp til hvilken grad gir Simpsons metode eksakt svar?',
    options: ['Grad $3$', 'Grad $2$', 'Grad $1$', 'Grad $4$'],
    explanation: 'Simpsons metode bygger på parabeltilnærming (grad 2), men på grunn av symmetri blir den også eksakt for tredjegradspolynomer.',
  },
  {
    question: 'Bruk trapesmetoden med $n = 2$ på $\\int_0^2 x^2 \\, dx$ ($h = 1$). Hva blir tilnærmingen?',
    options: ['$3$', '$\\frac{8}{3}$', '$2{,}5$', '$5$'],
    explanation: '$T = \\frac{h}{2}(f(0) + 2f(1) + f(2)) = \\frac{1}{2}(0 + 2 + 4) = 3$. Eksakt verdi er $\\frac{8}{3} \\approx 2{,}67$ — trapesmetoden overestimerer fordi grafen er konveks.',
  },
  {
    question: 'Feilen i Simpsons metode er av orden $O(h^4)$. Omtrent hvor mye reduseres feilen hvis vi dobler antall delintervaller?',
    options: ['Med en faktor $16$', 'Med en faktor $2$', 'Med en faktor $4$', 'Med en faktor $8$'],
    explanation: 'Dobling av $n$ halverer $h$, og siden feilen er proporsjonal med $h^4$, reduseres den med faktoren $2^4 = 16$. For trapesmetoden ($O(h^2)$) er faktoren bare $4$.',
  },
  {
    question: 'Hvorfor er midtpunktmetoden vanligvis mer nøyaktig enn venstre rektangelmetode?',
    options: ['Funksjonsverdien i midtpunktet representerer delintervallet bedre, slik at feil over og under delvis utlikner hverandre', 'Den bruker flere delintervaller', 'Den bruker antideriverte i beregningen', 'Den er ikke mer nøyaktig, bare raskere'],
    explanation: 'Venstrepunktmetoden under- eller overestimerer systematisk for monotone funksjoner. Midtpunktet gir feil av orden $O(h^2)$, mot $O(h)$ for venstrepunktmetoden.',
  },
  ],
  'r2-3-5': [
  {
    question: 'Hvilken Python-kode implementerer venstre rektangelmetode for $\\int_a^b f(x)\\,dx$ med $n$ delintervaller av bredde h = (b-a)/n?',
    options: ['s = sum(f(a + i*h) for i in range(n)) * h', 's = sum(f(a + i*h) for i in range(1, n+1)) * h', 's = sum(f(a + i*h) for i in range(n)) / h', 's = f(a) * f(b) * h'],
    explanation: 'Venstre endepunkter er $a, a+h, \\ldots, a+(n-1)h$, som svarer til range(n). Hvert bidrag er $f(x_i) \\cdot h$. Med range(1, n+1) får man høyre rektangelmetode.',
  },
  {
    question: 'Hva kjennetegner Monte Carlo-integrasjon?',
    options: ['Integralet estimeres ved hjelp av tilfeldige tall', 'Grafen tilnærmes med parabler', 'Intervallet deles i nøyaktig 100 deler', 'Metoden gir alltid eksakt svar'],
    explanation: 'Monte Carlo-metoden bruker tilfeldige punkter til å estimere integralet, for eksempel ved gjennomsnitt av tilfeldige funksjonsverdier. Nøyaktigheten øker langsomt med antall punkter.',
  },
  {
    question: 'Hvilken SciPy-funksjon brukes typisk til numerisk integrasjon av en funksjon i Python?',
    options: ['scipy.integrate.quad', 'scipy.optimize.minimize', 'numpy.diff', 'scipy.linalg.solve'],
    explanation: 'quad fra scipy.integrate beregner bestemte integraler numerisk og returnerer både estimatet og et feilestimat.',
  },
  {
    question: 'I trapesmetode-koden s = (f(a) + f(b)) / 2 + sum(f(a + i*h) for i in range(1, n)) etterfulgt av s * h — hvorfor halveres endepunktene?',
    options: ['Fordi endepunktene bare inngår i ett trapes hver, mens de indre punktene inngår i to', 'For å unngå divisjon med null', 'Fordi funksjonen alltid er null i endepunktene', 'Det er en feil i koden'],
    explanation: 'Trapesformelen er $\\frac{h}{2}(f_0 + 2f_1 + \\cdots + 2f_{n-1} + f_n)$: indre punkter teller dobbelt, endepunktene enkelt. Koden samler dette ved å halvere endepunktene.',
  },
  {
    question: 'Du dobler antall delintervaller $n$ i en numerisk beregning, og feilen blir omtrent en firedel. Hvilken metode er dette konsistent med?',
    options: ['Trapesmetoden, som har feil av orden $O(h^2)$', 'Simpsons metode, som har feil av orden $O(h^4)$', 'Monte Carlo-integrasjon', 'Venstre rektangelmetode, som har feil av orden $O(h)$'],
    explanation: 'Halvering av $h$ ga feilreduksjon $2^2 = 4$, som svarer til konvergensorden 2 — trapesmetoden (og midtpunktmetoden). Simpsons ville gitt faktor 16, venstrepunkt faktor 2.',
  },
  ],
  'r2-3-6': [
  {
    question: 'Hva er formelen for volumet når området under $y = f(x)$ på $[a, b]$ roteres om $x$-aksen?',
    options: ['$V = \\pi \\int_a^b f(x)^2 \\, dx$', '$V = \\pi \\int_a^b f(x) \\, dx$', '$V = 2\\pi \\int_a^b f(x) \\, dx$', '$V = \\int_a^b f(x)^2 \\, dx$'],
    explanation: 'Hvert tverrsnitt er en sirkelskive med radius $f(x)$ og areal $\\pi f(x)^2$. Volumet er integralet av tverrsnittsarealene: $V = \\pi\\int_a^b f(x)^2\\,dx$.',
  },
  {
    question: 'Området under $y = \\sqrt{x}$ på $[0, 4]$ roteres om $x$-aksen. Hva er volumet?',
    options: ['$8\\pi$', '$16\\pi$', '$4\\pi$', '$\\frac{64\\pi}{3}$'],
    explanation: '$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi \\cdot \\frac{16}{2} = 8\\pi$.',
  },
  {
    question: 'Den konstante funksjonen $f(x) = r$ på $[0, h]$ roteres om $x$-aksen. Hvilket legeme og volum får vi?',
    options: ['En sylinder med volum $\\pi r^2 h$', 'En kjegle med volum $\\frac{1}{3}\\pi r^2 h$', 'En kule med volum $\\frac{4}{3}\\pi r^3$', 'En sylinder med volum $2\\pi r h$'],
    explanation: 'En vannrett linje i høyde $r$ rotert om aksen gir en sylinder: $V = \\pi\\int_0^h r^2\\,dx = \\pi r^2 h$ — i samsvar med den kjente formelen.',
  },
  {
    question: 'Området mellom to kurver $f(x) \\geq g(x) \\geq 0$ roteres om $x$-aksen. Hva er volumformelen?',
    options: ['$V = \\pi \\int_a^b \\left(f(x)^2 - g(x)^2\\right) dx$', '$V = \\pi \\int_a^b (f(x) - g(x))^2 \\, dx$', '$V = \\pi \\int_a^b (f(x) - g(x)) \\, dx$', '$V = \\pi \\int_a^b \\left(f(x)^2 + g(x)^2\\right) dx$'],
    explanation: 'Vi trekker det indre volumet fra det ytre: $V = \\pi\\int (f^2 - g^2)\\,dx$. Merk at $(f - g)^2 \\neq f^2 - g^2$ — dette er en klassisk feil.',
  },
  {
    question: 'Hvilken funksjon rotert om $x$-aksen på $[-r, r]$ gir en kule, og brukes til å utlede kuleformelen $V = \\frac{4}{3}\\pi r^3$?',
    options: ['$f(x) = \\sqrt{r^2 - x^2}$', '$f(x) = r - x$', '$f(x) = r^2 - x^2$', '$f(x) = \\sqrt{r - x}$'],
    explanation: 'Halvsirkelen $y = \\sqrt{r^2 - x^2}$ rotert om $x$-aksen gir en kule: $V = \\pi\\int_{-r}^{r}(r^2 - x^2)\\,dx = \\frac{4}{3}\\pi r^3$.',
  },
  ],
  'r2-3-7': [
  {
    question: 'Gitt $f\'(x) = 2x$ og $f(1) = 3$. Hva er $f(x)$?',
    options: ['$f(x) = x^2 + 2$', '$f(x) = x^2$', '$f(x) = x^2 + 3$', '$f(x) = 2x^2 + 1$'],
    explanation: 'Integrasjon gir $f(x) = x^2 + C$. Betingelsen $f(1) = 3$ gir $1 + C = 3$, altså $C = 2$.',
  },
  {
    question: 'Arealfunksjonen er definert som $A(x) = \\int_a^x f(t) \\, dt$. Hva er $A\'(x)$?',
    options: ['$f(x)$', '$f(x) - f(a)$', '$f\'(x)$', '$F(x) + C$'],
    explanation: 'Dette er analysens fundamentalteorem del 1: arealfunksjonen er en antiderivert til $f$, så $A\'(x) = f(x)$.',
  },
  {
    question: 'Hva er gjennomsnittsverdien til $f(x) = x^2$ på intervallet $[0, 3]$?',
    options: ['$3$', '$9$', '$4{,}5$', '$1{,}5$'],
    explanation: 'Gjennomsnittsverdi: $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.',
  },
  {
    question: 'Hva er $\\frac{d}{dx} \\int_0^{x^2} f(t) \\, dt$?',
    options: ['$f(x^2) \\cdot 2x$', '$f(x^2)$', '$f(x) \\cdot 2x$', '$2x$'],
    explanation: 'Fundamentalteoremet kombinert med kjerneregelen: når øvre grense er $u(x) = x^2$, blir den deriverte $f(u(x)) \\cdot u\'(x) = f(x^2) \\cdot 2x$.',
  },
  {
    question: 'Gitt $f\'\'(x) = 6x$, $f\'(0) = 1$ og $f(0) = 2$. Hva er $f(x)$?',
    options: ['$f(x) = x^3 + x + 2$', '$f(x) = 3x^2 + x + 2$', '$f(x) = x^3 + 2x + 1$', '$f(x) = 6x^3 + x + 2$'],
    explanation: 'Første integrasjon: $f\'(x) = 3x^2 + C_1$, og $f\'(0) = 1$ gir $C_1 = 1$. Andre integrasjon: $f(x) = x^3 + x + C_2$, og $f(0) = 2$ gir $C_2 = 2$.',
  },
  ],
  'r2-4-1': [
  {
    question: 'Hvor mange radianer tilsvarer $180°$?',
    options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$180$'],
    explanation: 'Definisjonen av sammenhengen mellom grader og radianer: $180° = \\pi$ radianer. En hel omdreining er $360° = 2\\pi$.',
  },
  {
    question: 'Hva er $60°$ i radianer?',
    options: ['$\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{3}$'],
    explanation: 'Vi multipliserer med $\\frac{\\pi}{180°}$: $60° \\cdot \\frac{\\pi}{180°} = \\frac{\\pi}{3}$.',
  },
  {
    question: 'En sirkelsektor har radius $r = 5$ og vinkel $\\theta = 2$ radianer. Hva er buelengden?',
    options: ['$10$', '$2{,}5$', '$25$', '$5\\pi$'],
    explanation: 'Med vinkel i radianer er buelengden $b = r\\theta = 5 \\cdot 2 = 10$. Dette er nettopp fordelen med radianer — formelen blir enkel.',
  },
  {
    question: 'En sektor har radius $r = 4$ og vinkel $\\theta = \\frac{\\pi}{2}$. Hva er sektorarealet?',
    options: ['$4\\pi$', '$8\\pi$', '$2\\pi$', '$16\\pi$'],
    explanation: 'Sektorareal: $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2} \\cdot 16 \\cdot \\frac{\\pi}{2} = 4\\pi$. (Kontroll: kvart sirkel med areal $\\frac{\\pi \\cdot 16}{4} = 4\\pi$. ✓)',
  },
  {
    question: 'Hva er $\\frac{3\\pi}{4}$ radianer i grader?',
    options: ['$135°$', '$120°$', '$150°$', '$225°$'],
    explanation: 'Vi multipliserer med $\\frac{180°}{\\pi}$: $\\frac{3\\pi}{4} \\cdot \\frac{180°}{\\pi} = \\frac{3 \\cdot 180°}{4} = 135°$.',
  },
  ],
  'r2-4-2': [
  {
    question: 'Hvordan defineres $\\cos v$ og $\\sin v$ på enhetssirkelen?',
    options: ['$\\cos v$ er $x$-koordinaten og $\\sin v$ er $y$-koordinaten til punktet på sirkelen som svarer til vinkelen $v$', '$\\sin v$ er $x$-koordinaten og $\\cos v$ er $y$-koordinaten', 'Begge er avstanden fra punktet til origo', '$\\cos v$ er buelengden og $\\sin v$ er vinkelen'],
    explanation: 'På enhetssirkelen er punktet som svarer til vinkelen $v$ gitt ved $(\\cos v, \\sin v)$. Dette utvider definisjonene til alle vinkler, ikke bare spisse.',
  },
  {
    question: 'Hva er $\\sin(150°)$?',
    options: ['$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$'],
    explanation: 'Referansevinkelen til $150°$ er $30°$, og sinus er positiv i 2. kvadrant: $\\sin(150°) = \\sin(30°) = \\frac{1}{2}$.',
  },
  {
    question: 'Hvilke fortegn har de trigonometriske funksjonene i 3. kvadrant?',
    options: ['$\\sin$ og $\\cos$ er negative, $\\tan$ er positiv', 'Alle tre er negative', '$\\sin$ er positiv, $\\cos$ og $\\tan$ er negative', 'Alle tre er positive'],
    explanation: 'I 3. kvadrant er både $x$- og $y$-koordinaten negative, så $\\cos$ og $\\sin$ er negative. Da blir $\\tan = \\frac{\\sin}{\\cos}$ positiv.',
  },
  {
    question: 'Hva er den eksakte verdien av $\\cos\\left(\\frac{\\pi}{3}\\right)$?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{\\sqrt{3}}$'],
    explanation: '$\\frac{\\pi}{3} = 60°$, og $\\cos(60°) = \\frac{1}{2}$. Verdien $\\frac{\\sqrt{3}}{2}$ er $\\sin(60°)$.',
  },
  {
    question: 'Hva sier den pytagoreiske identiteten?',
    options: ['$\\sin^2 v + \\cos^2 v = 1$ for alle vinkler $v$', '$\\sin v + \\cos v = 1$ for alle vinkler $v$', '$\\tan^2 v = \\sin^2 v - \\cos^2 v$', '$\\sin^2 v - \\cos^2 v = 1$'],
    explanation: 'Punktet $(\\cos v, \\sin v)$ ligger på enhetssirkelen $x^2 + y^2 = 1$, så $\\cos^2 v + \\sin^2 v = 1$ gjelder for alle $v$.',
  },
  ],
  'r2-4-3': [
  {
    question: 'Hva er den generelle løsningen av $\\sin x = a$ (for $|a| \\leq 1$)?',
    options: ['$x = \\arcsin a + 2\\pi n$ eller $x = \\pi - \\arcsin a + 2\\pi n$', '$x = \\arcsin a + 2\\pi n$ alene', '$x = \\pm\\arcsin a + 2\\pi n$', '$x = \\arcsin a + \\pi n$'],
    explanation: 'Sinus tar samme verdi i to punkter per periode: ved $x_0 = \\arcsin a$ og ved $\\pi - x_0$. Begge familiene må med, hver med periode $2\\pi$.',
  },
  {
    question: 'Hva er løsningene av $\\sin x = \\frac{1}{2}$ i intervallet $[0, 2\\pi)$?',
    options: ['$x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$', '$x = \\frac{\\pi}{6}$ alene', '$x = \\frac{\\pi}{6}$ og $x = \\frac{7\\pi}{6}$', '$x = \\frac{\\pi}{3}$ og $x = \\frac{2\\pi}{3}$'],
    explanation: '$\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$, og den andre løsningen er $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.',
  },
  {
    question: 'Hvor mange løsninger har likningen $\\sin x = 2$?',
    options: ['Ingen', 'Én', 'To i hver periode', 'Uendelig mange'],
    explanation: 'Sinusfunksjonen har verdimengde $[-1, 1]$, så $\\sin x = 2$ har ingen løsninger.',
  },
  {
    question: 'Hva er den generelle løsningen av $\\sin 2x = 1$?',
    options: ['$x = \\frac{\\pi}{4} + \\pi n$', '$x = \\frac{\\pi}{2} + 2\\pi n$', '$x = \\frac{\\pi}{4} + 2\\pi n$', '$x = \\frac{\\pi}{2} + \\pi n$'],
    explanation: '$\\sin u = 1$ gir $u = \\frac{\\pi}{2} + 2\\pi n$. Med $u = 2x$: $2x = \\frac{\\pi}{2} + 2\\pi n$, altså $x = \\frac{\\pi}{4} + \\pi n$. Husk å dele HELE uttrykket på 2, også perioden.',
  },
  {
    question: 'En elev løser $\\sin x = 0{,}8$ og oppgir bare $x = \\arcsin(0{,}8) + 2\\pi n$. Hva er feilen?',
    options: ['Løsningsfamilien $x = \\pi - \\arcsin(0{,}8) + 2\\pi n$ mangler', 'Perioden skulle vært $\\pi$', 'Det finnes ingen løsning siden $0{,}8$ ikke er en eksakt verdi', 'Fortegnet på $\\arcsin(0{,}8)$ er galt'],
    explanation: 'Sinuslikninger har to løsningsfamilier per periode. Den vanligste feilen er å glemme den supplementære løsningen $\\pi - x_0$.',
  },
  ],
  'r2-4-4': [
  {
    question: 'Hva er den generelle løsningen av $\\cos x = a$ (for $|a| \\leq 1$)?',
    options: ['$x = \\pm\\arccos a + 2\\pi n$', '$x = \\arccos a + 2\\pi n$ alene', '$x = \\arccos a + \\pi n$', '$x = \\arccos a + 2\\pi n$ eller $x = \\pi - \\arccos a + 2\\pi n$'],
    explanation: 'Cosinus er en like funksjon, så løsningene ligger symmetrisk om $x$-aksen i enhetssirkelen: $x = \\pm\\arccos a + 2\\pi n$.',
  },
  {
    question: 'Hva er løsningene av $\\cos x = -\\frac{1}{2}$ i $[0, 2\\pi)$?',
    options: ['$x = \\frac{2\\pi}{3}$ og $x = \\frac{4\\pi}{3}$', '$x = \\frac{\\pi}{3}$ og $x = \\frac{5\\pi}{3}$', '$x = \\frac{2\\pi}{3}$ og $x = \\frac{5\\pi}{6}$', '$x = \\frac{\\pi}{3}$ og $x = \\frac{2\\pi}{3}$'],
    explanation: '$\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$. Den andre løsningen i intervallet er $2\\pi - \\frac{2\\pi}{3} = \\frac{4\\pi}{3}$.',
  },
  {
    question: 'Hva er den generelle løsningen av $\\cos x = 0$?',
    options: ['$x = \\frac{\\pi}{2} + \\pi n$', '$x = \\pi n$', '$x = \\frac{\\pi}{2} + 2\\pi n$ alene', '$x = 2\\pi n$'],
    explanation: 'Cosinus er null på toppen og bunnen av enhetssirkelen: $x = \\frac{\\pi}{2}$ og $x = \\frac{3\\pi}{2}$, som samlet kan skrives $x = \\frac{\\pi}{2} + \\pi n$.',
  },
  {
    question: 'Hva er den generelle løsningen av $\\cos 2x = \\frac{1}{2}$?',
    options: ['$x = \\pm\\frac{\\pi}{6} + \\pi n$', '$x = \\pm\\frac{\\pi}{3} + 2\\pi n$', '$x = \\pm\\frac{\\pi}{6} + 2\\pi n$', '$x = \\pm\\frac{\\pi}{3} + \\pi n$'],
    explanation: '$\\cos u = \\frac{1}{2}$ gir $u = \\pm\\frac{\\pi}{3} + 2\\pi n$. Med $u = 2x$ deler vi alt på 2: $x = \\pm\\frac{\\pi}{6} + \\pi n$.',
  },
  {
    question: 'Hvor mange løsninger har likningen $\\cos x = 1{,}5$?',
    options: ['Ingen', 'Én i hver periode', 'To i hver periode', 'Nøyaktig én'],
    explanation: 'Verdimengden til cosinus er $[-1, 1]$, og $1{,}5$ ligger utenfor. Likningen har derfor ingen løsninger.',
  },
  ],
  'r2-4-5': [
  {
    question: 'Hva er den generelle løsningen av $\\tan x = a$?',
    options: ['$x = \\arctan a + \\pi n$', '$x = \\arctan a + 2\\pi n$', '$x = \\pm\\arctan a + \\pi n$', '$x = \\arctan a + 2\\pi n$ eller $x = \\pi - \\arctan a + 2\\pi n$'],
    explanation: 'Tangens har periode $\\pi$ (ikke $2\\pi$) og tar hver verdi nøyaktig én gang per periode. Derfor holder én løsningsfamilie: $x = \\arctan a + \\pi n$.',
  },
  {
    question: 'Hva er den generelle løsningen av $\\tan x = 1$?',
    options: ['$x = \\frac{\\pi}{4} + \\pi n$', '$x = \\frac{\\pi}{4} + 2\\pi n$', '$x = \\frac{\\pi}{2} + \\pi n$', '$x = \\pm\\frac{\\pi}{4} + 2\\pi n$'],
    explanation: '$\\arctan 1 = \\frac{\\pi}{4}$, og siden tangens har periode $\\pi$: $x = \\frac{\\pi}{4} + \\pi n$.',
  },
  {
    question: 'Hva er den generelle løsningen av $\\tan x = \\sqrt{3}$?',
    options: ['$x = \\frac{\\pi}{3} + \\pi n$', '$x = \\frac{\\pi}{6} + \\pi n$', '$x = \\frac{\\pi}{3} + 2\\pi n$', '$x = \\frac{\\pi}{4} + \\pi n$'],
    explanation: '$\\tan\\frac{\\pi}{3} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$, så $x = \\frac{\\pi}{3} + \\pi n$.',
  },
  {
    question: 'For hvilke $x$ er $\\tan x$ IKKE definert?',
    options: ['$x = \\frac{\\pi}{2} + \\pi n$', '$x = \\pi n$', '$x = \\frac{\\pi}{4} + \\pi n$', '$x = 2\\pi n$'],
    explanation: '$\\tan x = \\frac{\\sin x}{\\cos x}$ er udefinert der $\\cos x = 0$, altså for $x = \\frac{\\pi}{2} + \\pi n$. Der har grafen vertikale asymptoter.',
  },
  {
    question: 'Hvorfor har likningen $\\tan x = 100$ løsninger, mens $\\sin x = 100$ ikke har det?',
    options: ['Tangens har hele $\\mathbb{R}$ som verdimengde, mens sinus bare tar verdier i $[-1, 1]$', 'Tangens har lengre periode enn sinus', 'Det stemmer ikke — ingen av dem har løsninger', 'Tangens er definert for alle $x$, sinus er ikke'],
    explanation: 'Tangensfunksjonen går fra $-\\infty$ til $+\\infty$ i hver periode, så $\\tan x = a$ har løsning for alle reelle $a$. Sinus er begrenset til $[-1, 1]$.',
  },
  ],
  'r2-4-6': [
  {
    question: 'Hva er addisjonsformelen for $\\sin(u + v)$?',
    options: ['$\\sin u \\cos v + \\cos u \\sin v$', '$\\sin u \\cos v - \\cos u \\sin v$', '$\\cos u \\cos v - \\sin u \\sin v$', '$\\sin u + \\sin v$'],
    explanation: '$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$. En vanlig feil er å tro at $\\sin(u+v) = \\sin u + \\sin v$.',
  },
  {
    question: 'Hvilket uttrykk er lik $\\cos 2x$?',
    options: ['$\\cos^2 x - \\sin^2 x$', '$2\\sin x \\cos x$', '$\\cos^2 x + \\sin^2 x$', '$2\\cos^2 x + 1$'],
    explanation: 'Dobbeltvinkelformelen: $\\cos 2x = \\cos^2 x - \\sin^2 x$, som også kan skrives $1 - 2\\sin^2 x$ eller $2\\cos^2 x - 1$. Uttrykket $2\\sin x\\cos x$ er $\\sin 2x$.',
  },
  {
    question: 'Hva er dobbeltvinkelformelen for $\\sin 2x$?',
    options: ['$2\\sin x \\cos x$', '$\\sin^2 x - \\cos^2 x$', '$2\\sin x$', '$\\sin^2 x$'],
    explanation: 'Setter vi $u = v = x$ i addisjonsformelen for sinus: $\\sin 2x = \\sin x\\cos x + \\cos x\\sin x = 2\\sin x\\cos x$.',
  },
  {
    question: 'Bruk addisjonsformelen til å finne den eksakte verdien av $\\sin 75°$.',
    options: ['$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$', '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$', '$\\frac{\\sqrt{3} + 1}{2}$', '$\\frac{\\sqrt{2} + 1}{2}$'],
    explanation: '$\\sin 75° = \\sin(45° + 30°) = \\sin 45°\\cos 30° + \\cos 45°\\sin 30° = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
  },
  {
    question: 'Hva er addisjonsformelen for $\\cos(u - v)$?',
    options: ['$\\cos u \\cos v + \\sin u \\sin v$', '$\\cos u \\cos v - \\sin u \\sin v$', '$\\sin u \\cos v - \\cos u \\sin v$', '$\\cos u - \\cos v$'],
    explanation: '$\\cos(u - v) = \\cos u\\cos v + \\sin u\\sin v$. Merk fortegnsbyttet: for differanse i argumentet blir det pluss mellom leddene.',
  },
  ],
  'r2-4-7': [
  {
    question: 'Uttrykket $a\\sin x + b\\cos x$ skrives om til $A\\sin(x + \\varphi)$. Hva er amplituden $A$?',
    options: ['$A = \\sqrt{a^2 + b^2}$', '$A = a + b$', '$A = \\frac{a + b}{2}$', '$A = \\sqrt{a^2 - b^2}$'],
    explanation: 'Sammenlikning med addisjonsformelen gir $a = A\\cos\\varphi$ og $b = A\\sin\\varphi$, og dermed $a^2 + b^2 = A^2$, altså $A = \\sqrt{a^2 + b^2}$.',
  },
  {
    question: 'Hva er amplituden til $f(x) = \\sin x + \\cos x$ på ren sinusform?',
    options: ['$\\sqrt{2}$', '$2$', '$1$', '$\\frac{1}{2}$'],
    explanation: 'Med $a = b = 1$: $A = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Faktisk er $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$.',
  },
  {
    question: 'Hva er den største verdien til $f(x) = 3\\sin x + 4\\cos x$?',
    options: ['$5$', '$7$', '$4$', '$3$'],
    explanation: 'Maksimum er amplituden: $A = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. Svaret $7$ ($3 + 4$) er feil fordi $\\sin x$ og $\\cos x$ aldri er $1$ samtidig.',
  },
  {
    question: 'Hvordan bestemmes fasevinkelen $\\varphi$ i omskrivingen $a\\sin x + b\\cos x = A\\sin(x + \\varphi)$?',
    options: ['Fra $\\tan\\varphi = \\frac{b}{a}$, med kvadrant valgt etter fortegnene til $a$ og $b$', 'Fra $\\tan\\varphi = \\frac{a}{b}$, alltid i første kvadrant', '$\\varphi = \\arcsin(a)$', '$\\varphi$ er alltid $\\frac{\\pi}{4}$'],
    explanation: 'Av $a = A\\cos\\varphi$ og $b = A\\sin\\varphi$ følger $\\tan\\varphi = \\frac{b}{a}$. Fortegnene til $a$ og $b$ avgjør hvilken kvadrant $\\varphi$ ligger i — ren kalkulatorbruk kan gi feil kvadrant.',
  },
  {
    question: 'Hva er amplituden til $f(x) = 2\\sin x + 2\\sqrt{3}\\cos x$?',
    options: ['$4$', '$2 + 2\\sqrt{3}$', '$\\sqrt{8}$', '$2\\sqrt{3}$'],
    explanation: '$A = \\sqrt{2^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$.',
  },
  ],
  'r2-4-8': [
  {
    question: 'Hva er perioden til $f(x) = \\sin(kx)$?',
    options: ['$\\frac{2\\pi}{k}$', '$2\\pi k$', '$\\frac{\\pi}{k}$', '$2\\pi$ uansett $k$'],
    explanation: 'Faktoren $k$ presser grafen sammen: én full svingning skjer når $kx$ øker med $2\\pi$, altså når $x$ øker med $\\frac{2\\pi}{k}$.',
  },
  {
    question: 'Hva er amplituden til $f(x) = 3\\sin(2x) + 1$?',
    options: ['$3$', '$2$', '$1$', '$4$'],
    explanation: 'Amplituden er tallet foran sinusleddet: $A = 3$. Grafen svinger mellom $1 - 3 = -2$ og $1 + 3 = 4$.',
  },
  {
    question: 'Hva er perioden til $f(x) = \\sin(2x)$?',
    options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\frac{\\pi}{2}$'],
    explanation: 'Perioden er $\\frac{2\\pi}{k} = \\frac{2\\pi}{2} = \\pi$ — grafen svinger dobbelt så raskt som $\\sin x$.',
  },
  {
    question: 'Hva forteller konstanten $d$ i $f(x) = A\\sin(kx + c) + d$ om grafen?',
    options: ['Likevektslinjen — grafen svinger om den vannrette linjen $y = d$', 'Amplituden til svingningen', 'Faseforskyvningen', 'Perioden'],
    explanation: '$d$ løfter hele grafen: funksjonen svinger mellom $d - A$ og $d + A$ med $y = d$ som likevektslinje.',
  },
  {
    question: 'En sinusfunksjon svinger mellom $-1$ og $3$ med periode $\\pi$ og er på likevektslinjen med stigende verdi når $x = 0$. Hvilket uttrykk passer?',
    options: ['$f(x) = 2\\sin(2x) + 1$', '$f(x) = 4\\sin(\\pi x) + 1$', '$f(x) = 2\\sin(x) + 1$', '$f(x) = 3\\sin(2x) - 1$'],
    explanation: 'Amplitude: $\\frac{3 - (-1)}{2} = 2$. Likevektslinje: $\\frac{3 + (-1)}{2} = 1$. Periode $\\pi$ gir $k = \\frac{2\\pi}{\\pi} = 2$. Altså $f(x) = 2\\sin(2x) + 1$.',
  },
  ],
  'r2-4-9': [
  {
    question: 'Hva er den deriverte av $f(x) = \\sin x$?',
    options: ['$f\'(x) = \\cos x$', '$f\'(x) = -\\cos x$', '$f\'(x) = -\\sin x$', '$f\'(x) = \\tan x$'],
    explanation: '$(\\sin x)\' = \\cos x$. Merk at dette forutsetter at $x$ måles i radianer.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\cos x$?',
    options: ['$f\'(x) = -\\sin x$', '$f\'(x) = \\sin x$', '$f\'(x) = -\\cos x$', '$f\'(x) = \\frac{1}{\\sin x}$'],
    explanation: '$(\\cos x)\' = -\\sin x$. Husk minustegnet — det er den klassiske feilen.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\tan x$?',
    options: ['$f\'(x) = \\frac{1}{\\cos^2 x}$', '$f\'(x) = \\frac{1}{\\sin^2 x}$', '$f\'(x) = \\sec x$', '$f\'(x) = -\\frac{1}{\\cos^2 x}$'],
    explanation: 'Kvotientregelen på $\\tan x = \\frac{\\sin x}{\\cos x}$ gir $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$, som også kan skrives $1 + \\tan^2 x$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = \\sin(3x)$?',
    options: ['$f\'(x) = 3\\cos(3x)$', '$f\'(x) = \\cos(3x)$', '$f\'(x) = -3\\cos(3x)$', '$f\'(x) = 3\\sin(3x)$'],
    explanation: 'Kjerneregelen med kjerne $u = 3x$: $f\'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$.',
  },
  {
    question: 'Hva er den deriverte av $f(x) = x\\sin x$?',
    options: ['$f\'(x) = \\sin x + x\\cos x$', '$f\'(x) = \\cos x$', '$f\'(x) = x\\cos x$', '$f\'(x) = \\sin x - x\\cos x$'],
    explanation: 'Produktregelen: $f\'(x) = (x)\'\\sin x + x(\\sin x)\' = \\sin x + x\\cos x$.',
  },
  ],
  'r2-5-1': [
  {
    question: 'Gitt punktene $A(1, 2, 3)$ og $B(4, 0, 5)$. Hva er vektoren $\\vec{AB}$?',
    options: ['$[3, -2, 2]$', '$[-3, 2, -2]$', '$[5, 2, 8]$', '$[3, 2, 2]$'],
    explanation: '$\\vec{AB} = [4 - 1, 0 - 2, 5 - 3] = [3, -2, 2]$. Vi trekker alltid startpunktets koordinater fra endepunktets.',
  },
  {
    question: 'Hva er lengden av vektoren $\\vec{u} = [2, -1, 2]$?',
    options: ['$3$', '$9$', '$\\sqrt{5}$', '$5$'],
    explanation: '$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.',
  },
  {
    question: 'Hvordan beregner du avstanden mellom to punkter $A$ og $B$ i rommet?',
    options: ['Som lengden av vektoren $\\vec{AB}$: $\\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$', 'Som summen av differansene i hver koordinat', 'Som $|x_B - x_A| + |y_B - y_A| + |z_B - z_A|$', 'Som skalarproduktet $\\vec{OA} \\cdot \\vec{OB}$'],
    explanation: 'Avstandsformelen i rommet er Pytagoras i tre dimensjoner — lengden av forbindelsesvektoren $\\vec{AB}$.',
  },
  {
    question: 'Hva er enhetsvektoren med samme retning som $\\vec{u} = [3, 0, 4]$?',
    options: ['$\\left[\\frac{3}{5}, 0, \\frac{4}{5}\\right]$', '$[3, 0, 4]$', '$\\left[\\frac{1}{3}, 0, \\frac{1}{4}\\right]$', '$\\left[\\frac{3}{7}, 0, \\frac{4}{7}\\right]$'],
    explanation: '$|\\vec{u}| = \\sqrt{9 + 16} = 5$. Enhetsvektoren får vi ved å dele hver koordinat på lengden: $\\frac{1}{5}[3, 0, 4] = \\left[\\frac{3}{5}, 0, \\frac{4}{5}\\right]$.',
  },
  {
    question: 'Hvor ligger punktet $(0, 0, 5)$ i koordinatsystemet?',
    options: ['På $z$-aksen', 'På $x$-aksen', 'I $xy$-planet', 'I origo'],
    explanation: 'Både $x$- og $y$-koordinaten er null, så punktet ligger på $z$-aksen, 5 enheter over origo.',
  },
  ],
  'r2-5-2': [
  {
    question: 'Hva er $[1, 2, 3] + 2 \\cdot [2, 0, -1]$?',
    options: ['$[5, 2, 1]$', '$[3, 2, 2]$', '$[6, 4, 4]$', '$[5, 2, 5]$'],
    explanation: 'Først skalarmultiplikasjon: $2[2, 0, -1] = [4, 0, -2]$. Så addisjon koordinatvis: $[1+4, 2+0, 3-2] = [5, 2, 1]$.',
  },
  {
    question: 'Når er to vektorer $\\vec{u}$ og $\\vec{v}$ parallelle?',
    options: ['Når det finnes et tall $t$ slik at $\\vec{v} = t\\vec{u}$', 'Når $\\vec{u} \\cdot \\vec{v} = 0$', 'Når de har samme lengde', 'Når $\\vec{u} \\times \\vec{v} \\neq \\vec{0}$'],
    explanation: 'Parallelle vektorer er skalarmultipler av hverandre. For eksempel er $[2, 4, -2]$ og $[1, 2, -1]$ parallelle med $t = 2$. ($\\vec{u}\\cdot\\vec{v} = 0$ betyr derimot at de står vinkelrett.)',
  },
  {
    question: 'Hva er midtpunktet på linjestykket fra $A(2, 4, 6)$ til $B(4, 0, 2)$?',
    options: ['$(3, 2, 4)$', '$(6, 4, 8)$', '$(1, -2, -2)$', '$(2, 2, 2)$'],
    explanation: 'Midtpunktet har koordinater lik gjennomsnittet: $M = \\left(\\frac{2+4}{2}, \\frac{4+0}{2}, \\frac{6+2}{2}\\right) = (3, 2, 4)$.',
  },
  {
    question: 'Hva vil det si at $\\vec{w}$ er en lineærkombinasjon av $\\vec{u}$ og $\\vec{v}$?',
    options: ['At $\\vec{w} = s\\vec{u} + t\\vec{v}$ for noen tall $s$ og $t$', 'At $\\vec{w} = \\vec{u} + \\vec{v}$ nøyaktig', 'At $\\vec{w}$ står vinkelrett på både $\\vec{u}$ og $\\vec{v}$', 'At $\\vec{w}$ har samme lengde som $\\vec{u}$ og $\\vec{v}$'],
    explanation: 'En lineærkombinasjon er en sum av skalarmultipler: $\\vec{w} = s\\vec{u} + t\\vec{v}$, der $s$ og $t$ kan være hvilke som helst reelle tall.',
  },
  {
    question: 'Hva er $[3, 1, 2] - [1, 4, -2]$?',
    options: ['$[2, -3, 4]$', '$[2, 3, 0]$', '$[4, 5, 0]$', '$[2, -3, 0]$'],
    explanation: 'Vi trekker fra koordinatvis: $[3-1, 1-4, 2-(-2)] = [2, -3, 4]$. Husk at $2 - (-2) = 4$.',
  },
  ],
  'r2-5-3': [
  {
    question: 'Hva er skalarproduktet $[1, 2, 3] \\cdot [4, -1, 2]$?',
    options: ['$8$', '$[4, -2, 6]$', '$5$', '$12$'],
    explanation: '$1 \\cdot 4 + 2 \\cdot (-1) + 3 \\cdot 2 = 4 - 2 + 6 = 8$. Skalarproduktet er et tall, ikke en vektor.',
  },
  {
    question: 'Hva er den geometriske formelen for skalarproduktet?',
    options: ['$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$', '$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\sin\\theta$', '$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| + |\\vec{v}|$', '$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\tan\\theta$'],
    explanation: 'Skalarproduktet er produktet av lengdene ganger cosinus til vinkelen mellom vektorene. Formelen med $\\sin\\theta$ gjelder lengden av kryssproduktet.',
  },
  {
    question: 'Er vektorene $[1, 2, -1]$ og $[3, -1, 1]$ ortogonale?',
    options: ['Ja, fordi skalarproduktet er $3 - 2 - 1 = 0$', 'Nei, fordi skalarproduktet er $3$', 'Nei, fordi de har ulik lengde', 'Ja, fordi de ikke er parallelle'],
    explanation: 'To vektorer er ortogonale (står vinkelrett på hverandre) hvis og bare hvis skalarproduktet er null: $1 \\cdot 3 + 2 \\cdot (-1) + (-1) \\cdot 1 = 0$. ✓',
  },
  {
    question: 'Hva kan du si om vinkelen $\\theta$ mellom $\\vec{u}$ og $\\vec{v}$ hvis $\\vec{u} \\cdot \\vec{v} > 0$?',
    options: ['Vinkelen er spiss ($\\theta < 90°$)', 'Vinkelen er stump ($\\theta > 90°$)', 'Vinkelen er nøyaktig $90°$', 'Vektorene er parallelle'],
    explanation: 'Siden $\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$ og lengdene er positive, har skalarproduktet samme fortegn som $\\cos\\theta$. Positivt skalarprodukt betyr spiss vinkel.',
  },
  {
    question: 'Hva er formelen for vektorprojeksjonen av $\\vec{u}$ på $\\vec{v}$?',
    options: ['$\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2}\\vec{v}$', '$\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|^2}\\vec{u}$', '$(\\vec{u} \\cdot \\vec{v})\\vec{v}$', '$\\frac{\\vec{u} \\times \\vec{v}}{|\\vec{v}|}$'],
    explanation: 'Projeksjonen av $\\vec{u}$ på $\\vec{v}$ er vektoren langs $\\vec{v}$ gitt ved $\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$ — skyggen av $\\vec{u}$ langs $\\vec{v}$ sin retning.',
  },
  ],
  'r2-5-4': [
  {
    question: 'Hva er den viktigste geometriske egenskapen til kryssproduktet $\\vec{u} \\times \\vec{v}$?',
    options: ['Det står vinkelrett på både $\\vec{u}$ og $\\vec{v}$', 'Det er parallelt med $\\vec{u}$', 'Det halverer vinkelen mellom $\\vec{u}$ og $\\vec{v}$', 'Det har alltid lengde $1$'],
    explanation: 'Kryssproduktet gir en vektor normalt på planet utspent av $\\vec{u}$ og $\\vec{v}$ — derfor brukes det til å finne normalvektorer.',
  },
  {
    question: 'Hva er $[1, 0, 0] \\times [0, 1, 0]$?',
    options: ['$[0, 0, 1]$', '$[0, 0, -1]$', '$[1, 1, 0]$', '$0$'],
    explanation: 'Enhetsvektorene følger høyrehåndsregelen: $\\vec{e}_x \\times \\vec{e}_y = \\vec{e}_z = [0, 0, 1]$.',
  },
  {
    question: 'Hva er sammenhengen mellom $\\vec{u} \\times \\vec{v}$ og $\\vec{v} \\times \\vec{u}$?',
    options: ['$\\vec{v} \\times \\vec{u} = -(\\vec{u} \\times \\vec{v})$', 'De er like', '$\\vec{v} \\times \\vec{u} = 2(\\vec{u} \\times \\vec{v})$', 'De står vinkelrett på hverandre'],
    explanation: 'Kryssproduktet er antikommutativt: bytter vi rekkefølgen, snur retningen. Lengden er den samme, men fortegnet skifter.',
  },
  {
    question: 'Hva er lengden av kryssproduktet, $|\\vec{u} \\times \\vec{v}|$?',
    options: ['$|\\vec{u}||\\vec{v}|\\sin\\theta$', '$|\\vec{u}||\\vec{v}|\\cos\\theta$', '$|\\vec{u}| + |\\vec{v}|$', '$|\\vec{u}||\\vec{v}|$ alltid'],
    explanation: '$|\\vec{u} \\times \\vec{v}| = |\\vec{u}||\\vec{v}|\\sin\\theta$, som geometrisk er arealet av parallellogrammet utspent av vektorene.',
  },
  {
    question: 'Hva er $[2, 1, 0] \\times [1, 3, 0]$?',
    options: ['$[0, 0, 5]$', '$[0, 0, 1]$', '$[5, 0, 0]$', '$[0, 0, -5]$'],
    explanation: 'Formelen gir $[1 \\cdot 0 - 0 \\cdot 3,\\; 0 \\cdot 1 - 2 \\cdot 0,\\; 2 \\cdot 3 - 1 \\cdot 1] = [0, 0, 5]$. Vektorene ligger i $xy$-planet, så kryssproduktet peker langs $z$-aksen.',
  },
  ],
  'r2-5-5': [
  {
    question: 'Hvordan beregnes arealet av parallellogrammet utspent av $\\vec{u}$ og $\\vec{v}$?',
    options: ['$A = |\\vec{u} \\times \\vec{v}|$', '$A = \\vec{u} \\cdot \\vec{v}$', '$A = |\\vec{u}||\\vec{v}|$', '$A = \\frac{1}{2}|\\vec{u} \\times \\vec{v}|$'],
    explanation: 'Lengden av kryssproduktet er nettopp parallellogramarealet: $|\\vec{u} \\times \\vec{v}| = |\\vec{u}||\\vec{v}|\\sin\\theta$ (grunnlinje ganger høyde).',
  },
  {
    question: 'Hvordan beregnes arealet av trekanten utspent av $\\vec{u}$ og $\\vec{v}$?',
    options: ['$A = \\frac{1}{2}|\\vec{u} \\times \\vec{v}|$', '$A = |\\vec{u} \\times \\vec{v}|$', '$A = \\frac{1}{2}\\vec{u} \\cdot \\vec{v}$', '$A = \\frac{1}{3}|\\vec{u} \\times \\vec{v}|$'],
    explanation: 'Trekanten er halvparten av parallellogrammet, så $A = \\frac{1}{2}|\\vec{u} \\times \\vec{v}|$.',
  },
  {
    question: 'Hva er formelen for volumet av parallellepipedet utspent av $\\vec{u}$, $\\vec{v}$ og $\\vec{w}$?',
    options: ['$V = |(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$', '$V = |\\vec{u} \\times \\vec{v} \\times \\vec{w}|$', '$V = (\\vec{u} \\cdot \\vec{v}) \\cdot \\vec{w}$', '$V = \\frac{1}{6}|(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$'],
    explanation: 'Det skalare trippelproduktet $(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}$ gir volumet med fortegn; absoluttverdien gir volumet. Faktoren $\\frac{1}{6}$ gjelder tetraederet.',
  },
  {
    question: 'Hva er volumet av tetraederet utspent av $\\vec{u}$, $\\vec{v}$ og $\\vec{w}$?',
    options: ['$V = \\frac{1}{6}|(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$', '$V = \\frac{1}{3}|(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$', '$V = \\frac{1}{2}|(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$', '$V = |(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}|$'],
    explanation: 'Tetraederet utgjør en seksdel av parallellepipedet: $V = \\frac{1}{6}$ av trippelproduktets absoluttverdi.',
  },
  {
    question: 'Hvordan kan du teste om tre vektorer er koplanare (ligger i samme plan)?',
    options: ['Sjekke om trippelproduktet $(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w} = 0$', 'Sjekke om alle har samme lengde', 'Sjekke om $\\vec{u} \\cdot \\vec{v} = 0$', 'Sjekke om $\\vec{u} + \\vec{v} + \\vec{w} = \\vec{0}$'],
    explanation: 'Koplanare vektorer utspenner et "flatt" parallellepiped med volum null — trippelproduktet er null hvis og bare hvis vektorene ligger i samme plan.',
  },
  ],
  'r2-5-6': [
  {
    question: 'Hva er en normalvektor til planet $2x - 3y + z - 5 = 0$?',
    options: ['$[2, -3, 1]$', '$[2, 3, 1]$', '$[-5, 2, -3]$', '$[2, -3, -5]$'],
    explanation: 'For et plan på formen $ax + by + cz + d = 0$ kan normalvektoren leses direkte av koeffisientene: $\\vec{n} = [a, b, c] = [2, -3, 1]$.',
  },
  {
    question: 'Hva er likningen for planet gjennom $P(1, 2, 3)$ med normalvektor $\\vec{n} = [1, 0, 2]$?',
    options: ['$x + 2z - 7 = 0$', '$x + 2z + 7 = 0$', '$x + 2y + 3z - 7 = 0$', '$x + 2z = 0$'],
    explanation: 'Vi bruker $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$: $1(x - 1) + 0(y - 2) + 2(z - 3) = 0$, som gir $x + 2z - 7 = 0$.',
  },
  {
    question: 'Når er to plan parallelle?',
    options: ['Når normalvektorene deres er parallelle', 'Når de har samme konstantledd $d$', 'Når normalvektorene står vinkelrett på hverandre', 'Når begge går gjennom origo'],
    explanation: 'To plan er parallelle nøyaktig når normalvektorene er parallelle (skalarmultipler av hverandre). Er i tillegg konstantleddene forenlige, er planene sammenfallende.',
  },
  {
    question: 'Ligger punktet $(1, 1, 1)$ i planet $x + y + z - 3 = 0$?',
    options: ['Ja, fordi $1 + 1 + 1 - 3 = 0$', 'Nei, fordi $1 + 1 + 1 = 3 \\neq 0$', 'Nei, fordi planet ikke går gjennom origo', 'Det kan ikke avgjøres uten normalvektoren'],
    explanation: 'Et punkt ligger i planet hvis koordinatene oppfyller likningen. Innsetting gir $1 + 1 + 1 - 3 = 0$. ✓',
  },
  {
    question: 'Et plan er gitt på parameterform med retningsvektorer $\\vec{u}$ og $\\vec{v}$. Hvordan finner du en normalvektor?',
    options: ['Beregn kryssproduktet $\\vec{u} \\times \\vec{v}$', 'Beregn skalarproduktet $\\vec{u} \\cdot \\vec{v}$', 'Adder vektorene: $\\vec{u} + \\vec{v}$', 'Bruk en av retningsvektorene direkte'],
    explanation: 'Normalvektoren skal stå vinkelrett på begge retningsvektorene i planet — nettopp det kryssproduktet gir.',
  },
  ],
  'r2-5-7': [
  {
    question: 'En linje i rommet er gitt ved $(x, y, z) = (1, 2, 3) + t(2, -1, 4)$. Hva er retningsvektoren?',
    options: ['$[2, -1, 4]$', '$[1, 2, 3]$', '$[3, 1, 7]$', '$[2, 1, 4]$'],
    explanation: 'I parameterframstillingen $\\vec{r} = \\vec{r}_0 + t\\vec{v}$ er $\\vec{v} = [2, -1, 4]$ retningsvektoren, mens $(1, 2, 3)$ er et punkt på linjen.',
  },
  {
    question: 'Hvorfor beskrives linjer i rommet med parameterframstilling og ikke med én likning som i planet?',
    options: ['Én lineær likning i rommet beskriver et plan, ikke en linje', 'Det er bare en konvensjon som lærebøkene har blitt enige om', 'Linjer i rommet har ingen entydig retningsvektor å regne med', 'Likningsformen finnes ikke for skrå linjer'],
    explanation: 'I rommet gir én lineær likning $ax + by + cz + d = 0$ et helt plan. En linje (et endimensjonalt objekt) trenger parameterform — eller to plan-likninger samtidig.',
  },
  {
    question: 'Hva kjennetegner to vindskjeve linjer?',
    options: ['De er ikke parallelle og skjærer hverandre ikke', 'De skjærer hverandre i nøyaktig ett felles punkt i rommet', 'De er parallelle, men ikke sammenfallende noe sted', 'De ligger begge i ett og samme plan i rommet uten å møtes'],
    explanation: 'Vindskjeve linjer finnes bare i rommet: de hverken møtes eller er parallelle, og de ligger ikke i noe felles plan.',
  },
  {
    question: 'Hvordan finner du vinkelen mellom to linjer i rommet?',
    options: ['Bruk skalarproduktformelen på retningsvektorene: $\\cos\\theta = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}||\\vec{v}|}$', 'Beregn avstanden mellom linjene', 'Bruk kryssproduktet av punktene på linjene', 'Finn først skjæringspunktet mellom de to linjene, og mål deretter vinkelen mellom dem der med en gradskive på papiret'],
    explanation: 'Vinkelen mellom linjer bestemmes av retningsvektorene. Absoluttverdien sørger for at vi får den spisse vinkelen mellom linjene.',
  },
  {
    question: 'Hvordan undersøker du om to linjer på parameterform skjærer hverandre?',
    options: ['Sett framstillingene lik hverandre med ULIKE parameternavn og sjekk om likningssystemet har løsning', 'Sett framstillingene lik hverandre med samme parameter $t$', 'Sjekk om retningsvektorene er like', 'Sjekk om begge går gjennom origo'],
    explanation: 'Linjene kan passere samme punkt ved ulike parameterverdier, så vi må bruke $s$ og $t$: tre likninger med to ukjente. Har systemet løsning, skjærer linjene hverandre.',
  },
  ],
  'r2-5-8': [
  {
    question: 'Hva er formelen for avstanden fra punktet $(x_0, y_0, z_0)$ til planet $ax + by + cz + d = 0$?',
    options: ['$\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$', '$\\frac{ax_0 + by_0 + cz_0 + d}{a + b + c}$', '$|ax_0 + by_0 + cz_0 + d|$', '$\\sqrt{x_0^2 + y_0^2 + z_0^2}$'],
    explanation: 'Vi setter punktet inn i planlikningen og deler på lengden av normalvektoren. Absoluttverdien sikrer at avstanden blir positiv.',
  },
  {
    question: 'Hva er avstanden fra punktet $(1, 2, 2)$ til planet $2x + y + 2z - 3 = 0$?',
    options: ['$\\frac{5}{3}$', '$\\frac{5}{9}$', '$5$', '$\\frac{8}{3}$'],
    explanation: 'Teller: $|2 \\cdot 1 + 2 + 2 \\cdot 2 - 3| = |5| = 5$. Nevner: $\\sqrt{4 + 1 + 4} = 3$. Avstanden er $\\frac{5}{3}$.',
  },
  {
    question: 'Hva er formelen for avstanden fra et punkt $P$ til en linje gjennom $A$ med retningsvektor $\\vec{v}$?',
    options: ['$\\frac{|\\vec{AP} \\times \\vec{v}|}{|\\vec{v}|}$', '$\\frac{|\\vec{AP} \\cdot \\vec{v}|}{|\\vec{v}|}$', '$|\\vec{AP}|$', '$\\frac{|\\vec{AP}|}{|\\vec{v}|}$'],
    explanation: 'Kryssproduktet $|\\vec{AP} \\times \\vec{v}|$ er arealet av parallellogrammet med grunnlinje $|\\vec{v}|$ — høyden (avstanden) er areal delt på grunnlinje.',
  },
  {
    question: 'Hvordan finner du avstanden mellom to PARALLELLE plan?',
    options: ['Velg et punkt i det ene planet og beregn avstanden fra punktet til det andre planet', 'Trekk konstantleddene i de to planlikningene fra hverandre direkte og bruk differansen som avstand', 'Avstanden mellom to parallelle plan er alltid null, uansett hvor langt fra hverandre de ligger', 'Beregn vinkelen mellom normalvektorene'],
    explanation: 'Siden planene er parallelle, er avstanden lik overalt. Vi velger derfor et vilkårlig punkt i det ene planet og bruker punkt-plan-formelen.',
  },
  {
    question: 'Hva er formelen for avstanden mellom to vindskjeve linjer med retningsvektorer $\\vec{u}$ og $\\vec{v}$, der $P_1$ og $P_2$ er punkter på hver sin linje?',
    options: ['$\\frac{|\\vec{P_1P_2} \\cdot (\\vec{u} \\times \\vec{v})|}{|\\vec{u} \\times \\vec{v}|}$', '$\\frac{|\\vec{P_1P_2} \\times (\\vec{u} \\cdot \\vec{v})|}{|\\vec{u} \\cdot \\vec{v}|}$', '$|\\vec{P_1P_2}|$', '$\\frac{|\\vec{u} \\times \\vec{v}|}{|\\vec{P_1P_2}|}$'],
    explanation: 'Vi projiserer forbindelsesvektoren $\\vec{P_1P_2}$ på fellesnormalen $\\vec{u} \\times \\vec{v}$. Det gir den korteste avstanden mellom linjene.',
  },
  ],
  'r2-6-1': [
  {
    question: 'Hvilken parameterframstilling beskriver en sirkel med sentrum i origo og radius $r$?',
    options: ['$x = r\\cos t$, $y = r\\sin t$', '$x = r\\sin t$, $y = r\\tan t$', '$x = rt$, $y = rt^2$', '$x = r\\cos t$, $y = r\\cos t$'],
    explanation: 'Punktet $(r\\cos t, r\\sin t)$ oppfyller $x^2 + y^2 = r^2\\cos^2 t + r^2\\sin^2 t = r^2$ for alle $t$ — altså en sirkel med radius $r$.',
  },
  {
    question: 'Kurven er gitt ved $x = t + 1$ og $y = 2t$. Hvilken likning får vi ved å eliminere parameteren?',
    options: ['$y = 2x - 2$', '$y = 2x + 2$', '$y = \\frac{x}{2} - 1$', '$y = 2x$'],
    explanation: 'Fra $x = t + 1$ får vi $t = x - 1$. Innsatt i $y = 2t$: $y = 2(x - 1) = 2x - 2$ — en rett linje.',
  },
  {
    question: 'Hvilken kurve beskriver $x = 3\\cos t$, $y = 3\\sin t$ for $t \\in [0, 2\\pi)$?',
    options: ['En sirkel med sentrum i origo og radius $3$', 'En ellipse med halvakser $3$ og $1$', 'En rett linje gjennom origo', 'En parabel'],
    explanation: 'Begge koeffisientene er $3$, så $x^2 + y^2 = 9$: en sirkel med radius $3$.',
  },
  {
    question: 'Hvilken parameterframstilling beskriver en ellipse med halvakser $a$ (langs $x$) og $b$ (langs $y$)?',
    options: ['$x = a\\cos t$, $y = b\\sin t$', '$x = a\\sin t$, $y = a\\cos t$', '$x = at$, $y = bt$', '$x = a\\cos t$, $y = a\\sin t$'],
    explanation: 'Da blir $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\cos^2 t + \\sin^2 t = 1$, som er ellipselikningen.',
  },
  {
    question: 'En kurve er gitt ved $x = t^2$, $y = t^3$. Hvilket punkt svarer til $t = 2$?',
    options: ['$(4, 8)$', '$(2, 8)$', '$(4, 6)$', '$(8, 4)$'],
    explanation: 'Vi setter inn $t = 2$: $x = 2^2 = 4$ og $y = 2^3 = 8$, altså punktet $(4, 8)$.',
  },
  ],
  'r2-6-2': [
  {
    question: 'Hvordan deriverer du en vektorfunksjon $\\vec{r}(t) = [x(t), y(t)]$?',
    options: ['Koordinatvis: $\\vec{r}\\,\'(t) = [x\'(t), y\'(t)]$', 'Med produktregelen på koordinatene', 'Ved å derivere lengden $|\\vec{r}(t)|$', 'Vektorfunksjoner kan ikke deriveres'],
    explanation: 'En vektorfunksjon deriveres komponent for komponent. Resultatet er en ny vektorfunksjon — tangentvektoren til kurven.',
  },
  {
    question: 'Hva er $\\vec{r}\\,\'(t)$ når $\\vec{r}(t) = [t^2, \\sin t]$?',
    options: ['$[2t, \\cos t]$', '$[2t, -\\cos t]$', '$[t, \\cos t]$', '$[2t, \\sin t]$'],
    explanation: 'Vi deriverer hver koordinat: $(t^2)\' = 2t$ og $(\\sin t)\' = \\cos t$, så $\\vec{r}\\,\'(t) = [2t, \\cos t]$.',
  },
  {
    question: 'Hva representerer $\\vec{r}\\,\'(t_0)$ geometrisk?',
    options: ['En tangentvektor til kurven i punktet som svarer til $t_0$', 'En normalvektor til kurven', 'Posisjonen ved tiden $t_0$', 'Arealet under kurven fram til $t_0$'],
    explanation: 'Den deriverte av posisjonsvektoren peker langs kurvens tangent i punktet — det er fartsretningen til et punkt som beveger seg langs kurven.',
  },
  {
    question: 'Et objekt har hastighetsvektor $\\vec{v}(t_0) = [3, 4]$. Hva er farten i dette øyeblikket?',
    options: ['$5$', '$7$', '$12$', '$\\sqrt{7}$'],
    explanation: 'Farten er lengden av hastighetsvektoren: $|\\vec{v}| = \\sqrt{3^2 + 4^2} = 5$.',
  },
  {
    question: 'Hvordan beregnes buelengden av kurven $\\vec{r}(t)$ for $t \\in [a, b]$?',
    options: ['$L = \\int_a^b |\\vec{r}\\,\'(t)| \\, dt$', '$L = \\int_a^b \\vec{r}(t) \\, dt$', '$L = |\\vec{r}(b) - \\vec{r}(a)|$', '$L = \\int_a^b |\\vec{r}(t)| \\, dt$'],
    explanation: 'Buelengden er integralet av farten: $L = \\int_a^b \\sqrt{x\'(t)^2 + y\'(t)^2}\\,dt$. Differansen $|\\vec{r}(b) - \\vec{r}(a)|$ gir bare luftlinjeavstanden.',
  },
  ],
  'r2-6-3': [
  {
    question: 'Hva er sammenhengen mellom posisjon $\\vec{r}(t)$, hastighet $\\vec{v}(t)$ og akselerasjon $\\vec{a}(t)$?',
    options: ['$\\vec{v}(t) = \\vec{r}\\,\'(t)$ og $\\vec{a}(t) = \\vec{v}\\,\'(t) = \\vec{r}\\,\'\'(t)$', '$\\vec{a}(t) = \\vec{r}\\,\'(t)$ og $\\vec{v}(t) = \\vec{a}\\,\'(t)$', '$\\vec{v}(t) = \\int \\vec{r}(t)\\,dt$', 'De er uavhengige av hverandre'],
    explanation: 'Hastigheten er den deriverte av posisjonen, og akselerasjonen er den deriverte av hastigheten — altså den andrederiverte av posisjonen.',
  },
  {
    question: 'Et objekt har posisjon $\\vec{r}(t) = [t^3, 2t]$. Hva er akselerasjonsvektoren?',
    options: ['$\\vec{a}(t) = [6t, 0]$', '$\\vec{a}(t) = [3t^2, 2]$', '$\\vec{a}(t) = [6t, 2]$', '$\\vec{a}(t) = [t^2, 0]$'],
    explanation: 'Hastighet: $\\vec{v}(t) = [3t^2, 2]$. Akselerasjon: $\\vec{a}(t) = [6t, 0]$ — vi deriverer to ganger.',
  },
  {
    question: 'Hva er akselerasjonsvektoren ved et skrått kast (uten luftmotstand)?',
    options: ['$\\vec{a} = [0, -g]$ — konstant og rettet nedover', '$\\vec{a} = [g, 0]$', '$\\vec{a} = [0, 0]$', '$\\vec{a}$ peker alltid langs hastigheten'],
    explanation: 'Den eneste kraften er tyngdekraften, som virker rett nedover med konstant akselerasjon $g \\approx 9{,}8$ m/s². Horisontalkomponenten av farten er derfor konstant.',
  },
  {
    question: 'Hvilken retning har akselerasjonen ved uniform sirkelbevegelse (konstant fart)?',
    options: ['Inn mot sirkelens sentrum', 'Langs tangenten til sirkelen', 'Ut fra sentrum', 'Akselerasjonen er null siden farten er konstant'],
    explanation: 'Selv om farten er konstant, endrer hastighetsvektoren retning hele tiden. Sentripetalakselerasjonen peker alltid inn mot sentrum.',
  },
  {
    question: 'Hva er forskjellen på fart og hastighet i vektorregningen?',
    options: ['Hastigheten $\\vec{v}(t)$ er en vektor med retning, mens farten $|\\vec{v}(t)|$ er et tall (vektorens lengde)', 'De betyr nøyaktig det samme', 'Farten er en vektor, hastigheten et tall', 'Hastighet brukes bare ved rettlinjet bevegelse'],
    explanation: 'Hastigheten beskriver både hvor raskt og i hvilken retning objektet beveger seg. Farten er størrelsen (lengden) av hastighetsvektoren.',
  },
  ],
  'r2-6-4': [
  {
    question: 'Hva kjennetegner en logistisk vekstmodell i forhold til en eksponentiell?',
    options: ['Veksten flater ut mot en øvre grense (bæreevnen)', 'Veksten holder seg helt konstant hele tiden uten å endre seg', 'Veksten øker raskere og raskere helt uten noen øvre grense', 'Modellen kan bare beskrive størrelser som avtar over tid'],
    explanation: 'Logistisk vekst starter omtrent eksponentielt, men bremses etter hvert og nærmer seg bæreevnen. Ren eksponentiell vekst fortsetter ubegrenset.',
  },
  {
    question: 'En bakteriekultur følger $N(t) = N_0 \\cdot e^{kt}$. Hva betyr det at $k > 0$?',
    options: ['Kulturen vokser eksponentielt', 'Kulturen dør gradvis ut over tid', 'Antallet holder seg helt konstant', 'Veksten er helt lineær over tid'],
    explanation: 'Konstanten $k$ er den relative vekstraten. Positiv $k$ gir eksponentiell vekst; negativ $k$ gir eksponentiell nedbrytning.',
  },
  {
    question: 'Hvilken modelltype passer best for å beskrive årlige temperatursvingninger?',
    options: ['En trigonometrisk modell, f.eks. $T(t) = A\\sin(kt + c) + d$', 'En lineær modell', 'En eksponentiell modell', 'En potensmodell'],
    explanation: 'Temperaturen gjentar seg med periode ett år — et periodisk fenomen. Da er sinusfunksjoner det naturlige valget.',
  },
  {
    question: 'Et radioaktivt stoff har halveringstid $T$. Hvilken formel gir mengden etter tiden $t$?',
    options: ['$N(t) = N_0 \\cdot 0{,}5^{t/T}$', '$N(t) = N_0 - \\frac{t}{T}$', '$N(t) = N_0 \\cdot 0{,}5 \\cdot \\frac{t}{T}$', '$N(t) = N_0 \\cdot 2^{t/T}$'],
    explanation: 'Hver gang det går en halveringstid $T$, halveres mengden. Etter tiden $t$ har det gått $\\frac{t}{T}$ halveringer: $N(t) = N_0 \\cdot 0{,}5^{t/T}$.',
  },
  {
    question: 'Hva er et naturlig FØRSTE steg i modelleringsprosessen når du har et reelt problem?',
    options: ['Forenkle problemet og identifisere de viktigste variablene', 'Velge en helt tilfeldig formel og justere den litt i etterkant', 'Beregne den deriverte', 'Tegne grafen til en sinusfunksjon'],
    explanation: 'Modellering starter med å forenkle virkeligheten: Hvilke størrelser er viktige, og hva kan ignoreres? Deretter velges modelltype, parametere bestemmes, og modellen vurderes mot data.',
  },
  ],
  'r2-6-5': [
  {
    question: 'Hva går minste kvadraters metode ut på?',
    options: ['Å finne modellen som minimerer summen av kvadratene av residualene', 'Å finne den linjen som går gjennom flest mulig datapunkter', 'Å minimere antall datapunkter', 'Å maksimere summen av avvikene'],
    explanation: 'Metoden velger parametrene slik at $\\sum (y_i - \\hat{y}_i)^2$ — summen av de kvadrerte avvikene mellom observert og modellert verdi — blir minst mulig.',
  },
  {
    question: 'Hva betyr det at bestemmelseskoeffisienten $R^2$ er nær $1$?',
    options: ['Modellen forklarer det meste av variasjonen i dataene', 'Modellen er garantert riktig også utenfor datamaterialet', 'Dataene har stor spredning rundt modellen', 'Modellen har for mange parametere'],
    explanation: '$R^2$ måler hvor stor andel av variasjonen modellen fanger opp. Nær $1$ betyr god tilpasning til dataene — men sier ikke at modellen kan ekstrapoleres trygt.',
  },
  {
    question: 'Hvorfor er ekstrapolasjon (bruk av modellen utenfor dataområdet) risikabelt?',
    options: ['Modellen er bare testet mot data i det observerte området — utenfor kan virkeligheten oppføre seg helt annerledes', 'Fordi regresjonen ikke kan beregnes utenfor dataområdet', 'Det er ikke risikabelt hvis $R^2$ er høy', 'Fordi datamaskiner ikke kan regne med store tall'],
    explanation: 'En modell med god tilpasning innenfor dataområdet kan bomme grovt utenfor. Høy $R^2$ beskytter ikke mot dette — trender flater ut, snur eller endrer karakter.',
  },
  {
    question: 'Hva er residualet for et datapunkt?',
    options: ['Differansen mellom observert verdi og modellens verdi: $y_i - \\hat{y}_i$', 'Kvadratet av den observerte verdien', 'Modellens verdi i punktet', 'Avstanden mellom to nabodatapunkter'],
    explanation: 'Residualet måler hvor mye modellen bommer i hvert punkt. Et mønster i residualene (f.eks. en bue) tyder på at feil modelltype er valgt.',
  },
  {
    question: 'Et polynom av grad 9 går nøyaktig gjennom alle 10 datapunktene, men svinger vilt mellom dem. Hva kalles dette fenomenet?',
    options: ['Overtilpasning', 'Interpolasjon', 'Konvergens', 'Residualanalyse'],
    explanation: 'Overtilpasning betyr at modellen tilpasser seg tilfeldig støy i dataene i stedet for den underliggende trenden. En enklere modell generaliserer ofte bedre.',
  },
  ],
  'r2-6-6': [
  {
    question: 'Hvilken bevisteknikk brukes i det klassiske beviset for at $\\sqrt{2}$ er irrasjonal?',
    options: ['Motsigelsesbevis: anta at $\\sqrt{2} = \\frac{p}{q}$ er en forkortet brøk, og utled en selvmotsigelse', 'Induksjonsbevis over $n$', 'Direkte utregning av alle desimalene i kvadratroten helt til man ser at mønsteret gjentar seg selv igjen', 'Et moteksempel'],
    explanation: 'Vi antar det motsatte av påstanden — at $\\sqrt{2}$ er rasjonal — og viser at både $p$ og $q$ da må være partall, i strid med at brøken var forkortet.',
  },
  {
    question: 'I et direkte bevis skriver vi et partall som $2k$. Hvordan vises det at summen av to partall er et partall?',
    options: ['$2k + 2m = 2(k + m)$, som er delelig med $2$', 'Ved å sjekke eksemplene $2 + 4$ og $6 + 8$', 'Ved å anta at summen er et oddetall', 'Ved induksjon på $k$'],
    explanation: 'Med $2k$ og $2m$ som vilkårlige partall: summen $2(k + m)$ har faktoren 2 og er dermed et partall. Eksempler alene beviser aldri en generell påstand.',
  },
  {
    question: 'Hva er ideen i Euklids bevis for at det finnes uendelig mange primtall?',
    options: ['Anta endelig mange primtall, og se på produktet av alle pluss $1$ — det gir en motsigelse', 'List opp alle primtall under en million og vis at ingen av dem kan være det aller siste primtallet', 'Vis at hvert eneste partall kan skrives som summen av nøyaktig to primtall, uansett hvor stort det er', 'Bruk induksjon på antall primtall'],
    explanation: 'Tallet $N = p_1 p_2 \\cdots p_n + 1$ gir rest 1 ved divisjon med hvert av primtallene i listen, så det må ha en primfaktor utenfor listen — motsigelse.',
  },
  {
    question: 'Hva er den raskeste måten å MOTBEVISE en generell påstand som "alle tall på formen $n^2 + n + 41$ er primtall"?',
    options: ['Finne ett moteksempel, f.eks. $n = 41$, som gir $41^2 + 41 + 41 = 41 \\cdot 43$', 'Bevise påstanden ved induksjon over alle naturlige tall etter tur, fra og med $n = 1$', 'Sjekke de 10 første verdiene av $n$', 'Vise at formelen vokser raskt'],
    explanation: 'Ett eneste moteksempel feller en allmenn påstand. For $n = 41$ er $n^2 + n + 41 = 41(41 + 1 + 1) = 41 \\cdot 43$, som ikke er et primtall.',
  },
  {
    question: 'Vis at summen av tre påfølgende heltall alltid er delelig med $3$. Hvilket resonnement er korrekt?',
    options: ['$n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)$, som har faktoren $3$', '$1 + 2 + 3 = 6$ er delelig med $3$, så det gjelder alltid', 'Summen av tre tall er alltid delelig med $3$', '$n + (n+1) + (n+2) = 3n$, som har faktoren $3$'],
    explanation: 'Med $n$ som vilkårlig heltall blir summen $3n + 3 = 3(n+1)$ — alltid delelig med 3. Ett eksempel ($1+2+3$) er ikke et bevis, og summen er $3n + 3$, ikke $3n$.',
  },
  ],
};

export default quizData_r2;
