import type { QuizQuestion } from './quiz-data';

const quizData_mat111uib: Record<string, QuizQuestion[]> = {
  'mat111-uib-0-1': [
    {
      question: "Hvordan vurderes MAT111?",
      options: ["Én avsluttende 5-timers skoleeksamen som teller 100 %", "Midtsemesterprøve som teller 30 % pluss avsluttende skoleeksamen som teller 70 %", "Mappevurdering med tellende innleveringer gjennom semesteret", "To deleksamener på 3 timer, én per halvdel av pensum"],
      explanation: "Alt avgjøres av den ene 5-timers skoleeksamenen (kl. 09–14). Ingen prøver eller innleveringer teller.",
    },
    {
      question: "Hva betyr «åpen bok» i praksis for hva MAT111-oppgavene tester?",
      options: ["Teknikk og føring — fasitsvar fra permen uten utledning gir ikke uttelling", "Mindre pensum å lese, siden alt uansett kan slås opp i læreboka underveis på eksamen", "At oppgavene er lettere enn i emner med lukket bok", "At kilder må siteres med sidetall fra læreboka i besvarelsen"],
      explanation: "Når boka er tilgjengelig, måles det du kan VISE: integraler skal løses med grunnleggende teknikker, og ren avskrift av lærebokeksempler gir null.",
    },
    {
      question: "Hvilket tema åpner nesten alle moderne MAT111-sett?",
      options: ["Komplekse tall", "Differensiallikninger", "ε-δ-bevis", "Taylorpolynomer"],
      explanation: "28/34 sett (8/9 siste periode) åpner med komplekse tall — de billige poengene for den som er trent. Difflikningen kommer til slutt.",
    },
    {
      question: "Hvilke to temaer har høyest frekvens (97 %) i arkivet?",
      options: ["Differensiallikninger og integrasjonsteknikk", "Komplekse tall og Taylorpolynomer", "ε-δ-bevis og kontinuitet i punkt", "Omdreiningsvolum og numerisk integrasjon"],
      explanation: "Begge står i 33 av 34 sett: integrasjonsteknikk bærer midten, differensiallikningen avslutter. Komplekse tall (82 %) og Taylor (74 %) følger.",
    },
    {
      question: "Et sett har 15 likt vektede deloppgaver på 300 minutter. Hva er den riktige strategiske konsekvensen?",
      options: ["Sikre de billige sjangrene først — alle deloppgaver betaler likt", "Bruke nøyaktig 20 minutter på hver deloppgave, i settets rekkefølge fra første til siste", "Starte med den vanskeligste oppgaven mens hodet er friskt", "Prioritere oppgavene med flest delspørsmål"],
      explanation: "Likevekting betyr samme betaling for ulik pris: høst de raske poengene (åpningen, standardintegraler) først, og bruk overskuddet på bevisene.",
    },
    {
      question: "Hva sier fasitpraksisen fra 2019 om fremgangsmåte kontra sluttsvar?",
      options: ["Riktig fremgangsmåte gir godt med poeng selv uten korrekt sluttsvar", "Bare korrekt sluttsvar gir uttelling; hvilken vei du velger dit er helt valgfri", "Fremgangsmåte teller kun i bevisoppgavene", "Sluttsvar uten enhet gir automatisk null på hele oppgaven"],
      explanation: "Instruksen er eksplisitt fra 2019 — føringen er varen. Derfor drilles løsningsoppskrifter og føringsbokser gjennom hele boka.",
    },
    {
      question: "Hva er «signaturoppgaven» i MAT111, og hvor ofte har den stått siste ti år?",
      options: ["Kontinuitet/deriverbarhet i ett punkt — 79 % av settene siste tiår", "Full funksjonsdrøfting med asymptoter og fortegnsskjema — den står i nesten hvert eneste sett", "Bevis for skjæringssetningen — annethvert sett", "Konvergens av uendelige rekker — 79 % av settene"],
      explanation: "Oscillasjonsfamilien $x^k\\sin/\\cos(1/x^m)$ med skvis og differansekvotient er UiBs teoritunge gjenganger og den tydeligste karakterskilleren.",
    },
    {
      question: "Hvorfor dekker boka uendelige rekker når frekvensen etter 2005 er null?",
      options: ["De står i emnebeskrivelsen for 2026 og er dermed pensumpliktige", "Fordi rekker er det hyppigste enkelttemaet i grunnkursene ved de andre norske universitetene", "De dekkes ikke — del 7 handler om noe annet", "Fordi rekker alltid kommer tilbake i vårsettene"],
      explanation: "Frekvensstyringens ene unntak: pensumplikt trumfer arkivet. Del 7 dekker stoffet kompakt, med ærlighetsforbeholdet sagt rett ut.",
    },
    {
      question: "En kjedet deloppgave bygger på et delsvar du ikke fikk til. Hva er riktig grep?",
      options: ["Anta/bruk det oppgitte delsvaret, si at du gjør det, og høst fremgangsmåtepoengene", "Hopp over hele oppgaven — uten første ledd er resten poengløs", "Regn første ledd på nytt helt til det stemmer, uansett hvor mye eksamenstid det skulle koste", "Svar bare med sluttformelen uten mellomregning"],
      explanation: "Poengene i hvert ledd deles ut for leddets egen fremgangsmåte. Å forlate en kjedet oppgave fordi første ledd røk, er en dyr metafeil.",
    },
    {
      question: "Hvilken av disse er en dokumentert tidsfelle i MAT111-arkivet?",
      options: ["Å regne fire Newton-iterasjoner der oppgaven ber om én", "Å tegne en hjelpefigur med navngitte variabler i relaterte rater-oppgaver", "Å skrive konklusjonssetning med enhet", "Å navngi teoremene man bruker"],
      explanation: "Ekstra iterasjoner (og unødvendige ensidige grenser) stjeler minutter uten å gi poeng. Figur, enhet og teoremnavn er derimot god føring.",
    },
  ],
  'mat111-uib-1-1': [
    {
      question: "Hva er $(2+i)(3-i)$ på normalform?",
      options: ["$7+i$", "$6+i$", "$7-i$", "$5+i$"],
      explanation: "$(2+i)(3-i)=6-2i+3i-i^2=6+i+1=7+i$. Husk $-i^2=+1$.",
    },
    {
      question: "For å dele $\\frac{z}{w}$ forlenger du brøken med:",
      options: ["konjugatet $\\bar w$ av nevneren", "konjugatet $\\bar z$ av telleren", "modulusen $|w|$ av nevneren", "den inverse $w^{-1}$ av telleren"],
      explanation: "Forleng med $\\bar w$: nevneren blir $w\\bar w=|w|^2$, altså reell, og brøken kan skrives på normalform.",
    },
    {
      question: "Hva blir nevneren når du regner $\\frac{3+i}{2+5i}$ ferdig?",
      options: ["$29$", "$7$", "$21$", "$\\sqrt{29}$"],
      explanation: "Nevneren blir $|2+5i|^2=2^2+5^2=29$ etter forlengning med konjugatet — et reelt tall.",
    },
    {
      question: "Hvilken størrelse er $z\\bar z$ alltid lik?",
      options: ["$|z|^2$ (reelt, ikke-negativt)", "$z^2$ (komplekst kvadrat)", "$2\\operatorname{Re}(z)$ (dobbel realdel)", "$\\bar z^2$ (konjugert kvadrat)"],
      explanation: "$z\\bar z=(a+bi)(a-bi)=a^2+b^2=|z|^2$. Det er reelt og $\\ge 0$ — ikke det samme som $z^2$.",
    },
    {
      question: "Første steg for å skrive $z=a+bi$ på polarform bør være å:",
      options: ["tegne punktet $(a,b)$ og finne kvadranten", "regne $\\arctan(b/a)$ direkte på kalkulator", "opphøye $z$ i andre for å finne $r$", "dele på $\\bar z$ for å normere $z$"],
      explanation: "Å tegne punktet avgjør kvadranten, slik at argumentet blir riktig. $\\arctan$ alene bommer i kvadrant 2 og 3.",
    },
    {
      question: "Hva er modulusen $r$ til $z=-2+2i$?",
      options: ["$2\\sqrt2$", "$2$", "$4$", "$\\sqrt2$"],
      explanation: "$r=\\sqrt{(-2)^2+2^2}=\\sqrt8=2\\sqrt2$.",
    },
    {
      question: "Hva er hovedargumentet til $z=-2+2i$?",
      options: ["$\\tfrac{3\\pi}{4}$", "$-\\tfrac{\\pi}{4}$", "$\\tfrac{\\pi}{4}$", "$\\tfrac{5\\pi}{4}$"],
      explanation: "Punktet ligger i andre kvadrant; med referansevinkel $\\pi/4$ blir $\\theta=\\pi-\\pi/4=3\\pi/4$.",
    },
    {
      question: "Hvorfor holder det ikke å sette $\\theta=\\arctan(b/a)$ blindt?",
      options: ["$\\arctan$ gir alltid svar i $(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$ og bommer i kvadrant 2 og 3", "$\\arctan$ gir alltid svar i $(0,2\\pi)$ og bommer i kvadrant 1", "$\\arctan(b/a)$ gir modulusen, ikke argumentet, til tallet", "$\\arctan$ er udefinert for alle rent imaginære tall $bi$"],
      explanation: "$\\arctan$ har verdimengde $(-\\pi/2,\\pi/2)$, så for tall i 2. og 3. kvadrant må du legge til eller trekke fra $\\pi$ etter kvadrant.",
    },
    {
      question: "Skriv $z=4e^{i\\,2\\pi/3}$ på normalform.",
      options: ["$-2+2\\sqrt3\\,i$", "$2+2\\sqrt3\\,i$", "$-2\\sqrt3+2i$", "$-2-2\\sqrt3\\,i$"],
      explanation: "$z=4(\\cos\\tfrac{2\\pi}{3}+i\\sin\\tfrac{2\\pi}{3})=4(-\\tfrac12+i\\tfrac{\\sqrt3}{2})=-2+2\\sqrt3\\,i$.",
    },
    {
      question: "Hva sier Eulers formel?",
      options: ["$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$", "$e^{i\\theta}=\\sin\\theta+i\\cos\\theta$", "$e^{i\\theta}=\\cos\\theta-i\\sin\\theta$", "$e^{i\\theta}=i(\\cos\\theta+\\sin\\theta)$"],
      explanation: "Eulers formel $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ er broa mellom eksponentialform og normalform.",
    },
    {
      question: "På polarform: hva skjer med argumentene når du multipliserer $r_1e^{i\\theta_1}\\cdot r_2e^{i\\theta_2}$?",
      options: ["de adderes, og modulusene multipliseres", "de multipliseres, og modulusene adderes", "de subtraheres, og modulusene divideres", "de blir uendret, kun modulusene endres"],
      explanation: "$r_1e^{i\\theta_1}\\cdot r_2e^{i\\theta_2}=r_1r_2\\,e^{i(\\theta_1+\\theta_2)}$: modulus ganges, argument legges sammen.",
    },
    {
      question: "Hva er $|z-3i|=2$ geometrisk?",
      options: ["en sirkel med sentrum $(0,3)$ og radius $2$", "en sirkel med sentrum $(0,-3)$ og radius $2$", "en midtnormal mellom $0$ og $3i$", "en linje gjennom $(0,3)$ med stigning $2$"],
      explanation: "$|z-3i|$ er avstanden til $3i=(0,3)$; «avstand lik $2$» gir sirkelen med sentrum $(0,3)$ og radius $2$.",
    },
    {
      question: "Mengden $|z-a|=|z-b|$ beskriver:",
      options: ["midtnormalen til linjestykket mellom $a$ og $b$", "sirkelen med diameter fra $a$ til $b$", "linjestykket som forbinder $a$ og $b$", "ellipsen med brennpunkter $a$ og $b$"],
      explanation: "Punkter like langt fra $a$ og $b$ danner den vinkelrette halveringslinja — midtnormalen.",
    },
    {
      question: "Hva er konjugatet $\\bar z$ av $z=5-3i$?",
      options: ["$5+3i$", "$-5+3i$", "$-5-3i$", "$3-5i$"],
      explanation: "Konjugering bytter fortegn på imaginærdelen: $\\overline{5-3i}=5+3i$.",
    },
    {
      question: "Hvilken av disse er en gyldig regneregel for konjugat?",
      options: ["$\\overline{zw}=\\bar z\\,\\bar w$", "$\\overline{zw}=\\bar z+\\bar w$", "$\\overline{z+w}=\\bar z\\,\\bar w$", "$\\overline{zw}=|z||w|$"],
      explanation: "Konjugering fordeler seg multiplikativt: $\\overline{zw}=\\bar z\\,\\bar w$ (og additivt over sum).",
    },
    {
      question: "Hva er $\\operatorname{Im}(z)$ for $z=7-4i$?",
      options: ["$-4$", "$-4i$", "$4$", "$7$"],
      explanation: "Imaginærdelen er tallet $b$ (uten $i$): for $7-4i$ er $\\operatorname{Im}(z)=-4$.",
    },
    {
      question: "Hvilken potens av $i$ er lik $i^3$?",
      options: ["$-i$", "$i$", "$-1$", "$1$"],
      explanation: "Potensene sykler med periode 4: $i^1=i,\\ i^2=-1,\\ i^3=-i,\\ i^4=1$.",
    },
    {
      question: "Et komplekst tall $z$ er reelt nøyaktig når:",
      options: ["$z=\\bar z$", "$z=-\\bar z$", "$|z|=1$", "$z\\bar z=1$"],
      explanation: "$z=\\bar z$ betyr $\\operatorname{Im}(z)=0$, altså at $z$ er reelt. $z=-\\bar z$ gir rent imaginært.",
    },
    {
      question: "Hva er inversen $z^{-1}$ uttrykt ved konjugat og modulus?",
      options: ["$\\dfrac{\\bar z}{|z|^2}$", "$\\dfrac{z}{|z|^2}$", "$\\dfrac{\\bar z}{|z|}$", "$\\dfrac{|z|^2}{\\bar z}$"],
      explanation: "$z^{-1}=\\dfrac1z=\\dfrac{\\bar z}{z\\bar z}=\\dfrac{\\bar z}{|z|^2}$ — forleng med $\\bar z$ for reell nevner.",
    },
    {
      question: "Hva blir $|zw|$ når $|z|=3$ og $|w|=2$?",
      options: ["$6$", "$5$", "$\\sqrt{13}$", "$1$"],
      explanation: "Modulus er multiplikativ: $|zw|=|z||w|=3\\cdot2=6$.",
    },
    {
      question: "Hvilket svar er «ferdig» når oppgaven ber om normalform?",
      options: ["$-2+2\\sqrt3\\,i$ (formen $a+bi$)", "$4e^{i\\,2\\pi/3}$ (eksponentialform)", "$4(\\cos\\tfrac{2\\pi}{3}+i\\sin\\tfrac{2\\pi}{3})$", "modulus $4$ og argument $\\tfrac{2\\pi}{3}$"],
      explanation: "Normalform betyr $a+bi$. Et polarform-svar må skrives helt ut — ellers trekk (sensormerknad H2016).",
    },
    {
      question: "Hva er $\\dfrac{1}{i}$ på normalform?",
      options: ["$-i$", "$i$", "$1$", "$-1$"],
      explanation: "$\\dfrac1i=\\dfrac{\\bar i}{|i|^2}=\\dfrac{-i}{1}=-i$. (Eller: gang teller og nevner med $i$.)",
    },
  ],
  'mat111-uib-1-2': [
    {
      question: "Hva sier de Moivres formel for $z=re^{i\\theta}$?",
      options: ["$z^n=r^n e^{in\\theta}$", "$z^n=r^n e^{i\\theta/n}$", "$z^n=nr\\,e^{in\\theta}$", "$z^n=r^n e^{i\\theta+n}$"],
      explanation: "Modulusen opphøyes i $n$-te, argumentet multipliseres med $n$: $z^n=r^n e^{in\\theta}$.",
    },
    {
      question: "Hvor mange forskjellige løsninger har $z^5=w$ når $w\\ne0$?",
      options: ["nøyaktig $5$", "nøyaktig $1$", "uendelig mange", "nøyaktig $10$"],
      explanation: "Likningen $z^n=w$ har nøyaktig $n$ distinkte røtter for $w\\ne0$ — her $5$.",
    },
    {
      question: "I rotformelen $z_k=R^{1/n}e^{i(\\varphi+2k\\pi)/n}$, hva er modulusen til hver rot?",
      options: ["$R^{1/n}$", "$R/n$", "$R^{n}$", "$nR$"],
      explanation: "Alle røttene har modulus $R^{1/n}$ — den reelle $n$-te roten av $R=|w|$, ikke $R/n$.",
    },
    {
      question: "Hva er det vanligste feilgrepet som gir bare én rot i stedet for alle?",
      options: ["å glemme $2k\\pi$-leddet i argumentet", "å glemme å opphøye modulusen", "å bruke normalform i stedet for polar", "å redusere argumentet for mye"],
      explanation: "Uten $2k\\pi$-leddet får du bare prinsipalroten. $(\\varphi+2k\\pi)/n$ for $k=0,\\dots,n-1$ gir alle.",
    },
    {
      question: "Regn ut $(\\sqrt3+i)^6$ på normalform.",
      options: ["$-64$", "$64$", "$64i$", "$-64i$"],
      explanation: "$\\sqrt3+i=2e^{i\\pi/6}$, så $(\\sqrt3+i)^6=2^6e^{i\\pi}=64\\cdot(-1)=-64$.",
    },
    {
      question: "Etter de Moivre får du vinkelen $\\tfrac{9\\pi}{2}$. Hva blir den redusert mod $2\\pi$?",
      options: ["$\\tfrac{\\pi}{2}$", "$\\tfrac{3\\pi}{2}$", "$\\tfrac{5\\pi}{2}$", "$\\tfrac{\\pi}{4}$"],
      explanation: "$\\tfrac{9\\pi}{2}-4\\pi=\\tfrac{9\\pi}{2}-\\tfrac{8\\pi}{2}=\\tfrac{\\pi}{2}$.",
    },
    {
      question: "Hvordan ligger de $n$ røttene av $z^n=w$ i planet?",
      options: ["jevnt fordelt på en sirkel med radius $R^{1/n}$", "jevnt fordelt på en rett linje ut fra origo", "samlet nær prinsipalroten på sirkelen", "på en spiral som vokser utover fra origo"],
      explanation: "Røttene danner en regulær $n$-kant på sirkelen med radius $R^{1/n}$, med vinkelavstand $2\\pi/n$.",
    },
    {
      question: "Hva er vinkelavstanden mellom to naborøtter av $z^n=w$?",
      options: ["$\\tfrac{2\\pi}{n}$", "$\\tfrac{\\pi}{n}$", "$\\tfrac{2\\pi}{n-1}$", "$\\tfrac{\\varphi}{n}$"],
      explanation: "Argumentene skiller seg med $\\tfrac{2\\pi}{n}$ — derfor den regulære $n$-kanten.",
    },
    {
      question: "Hva er de $n$-te enhetsrøttene (løsningene av $z^n=1$)?",
      options: ["$e^{i2k\\pi/n}$ for $k=0,\\dots,n-1$", "$e^{ik\\pi/n}$ for $k=0,\\dots,n-1$", "$n\\cdot e^{i2k\\pi}$ for $k=0,\\dots,n$", "$e^{i\\pi/(2k)}$ for $k=1,\\dots,n$"],
      explanation: "$1=e^{i0}$ gir røttene $e^{i2k\\pi/n}$, jevnt fordelt på enhetssirkelen med $z_0=1$.",
    },
    {
      question: "Hva er summen av alle $n$-te enhetsrøtter når $n\\ge2$?",
      options: ["$0$", "$1$", "$n$", "$-1$"],
      explanation: "$1+\\omega+\\dots+\\omega^{n-1}=\\tfrac{\\omega^n-1}{\\omega-1}=0$ siden $\\omega^n=1$. Nyttig kontroll.",
    },
    {
      question: "Hvordan løser du en bikvadratisk likning $z^4+pz^2+q=0$?",
      options: ["substituer $u=z^2$, løs for $u$, ta så kvadratrot", "del alt på $z^2$ og løs den resulterende lineære likningen", "sett $u=z^4$ og løs den lineære likningen", "deriver venstresiden og finn nullpunktene"],
      explanation: "$u=z^2$ gir andregradslikningen $u^2+pu+q=0$; hver $u$ gir $z=\\pm\\sqrt{u}$, til sammen fire løsninger.",
    },
    {
      question: "Løs $z^4+3z^2-4=0$.",
      options: ["$z=1,-1,2i,-2i$", "$z=2,-2,i,-i$", "$z=1,-1,4i,-4i$", "$z=1,-1,2,-2$"],
      explanation: "$u=z^2$: $u^2+3u-4=(u+4)(u-1)=0$, så $z^2=1\\Rightarrow\\pm1$ og $z^2=-4\\Rightarrow\\pm2i$.",
    },
    {
      question: "Hva blir prinsipalroten kalt, og hvilken $k$ svarer den til?",
      options: ["roten for $k=0$: $z_0=R^{1/n}e^{i\\varphi/n}$", "roten for $k=n$: $z_n=R^{1/n}e^{i\\varphi}$", "roten med størst modulus av alle", "roten som ligger nærmest den reelle aksen"],
      explanation: "Prinsipalroten er $k=0$-roten $R^{1/n}e^{i\\varphi/n}$; de andre fås ved å legge til $2\\pi/n$.",
    },
    {
      question: "Begge kvadratrøttene av et tall $w$ er:",
      options: ["hverandres motsatte, $\\pm z_0$", "hverandres konjugerte, $z_0$ og $\\bar z_0$", "like store og med samme argument", "alltid rent imaginære tall"],
      explanation: "$z^2=w$ har to røtter som skiller seg med $\\pi$ i argument — altså $\\pm z_0$.",
    },
    {
      question: "Finn begge kvadratrøttene av $3+4i$.",
      options: ["$2+i$ og $-2-i$", "$2-i$ og $-2+i$", "$1+2i$ og $-1-2i$", "$4+i$ og $-4-i$"],
      explanation: "Med $z=a+bi$: $a^2-b^2=3,\\ 2ab=4,\\ a^2+b^2=5$ gir $a=\\pm2,\\ b=\\pm1$ med likt fortegn: $\\pm(2+i)$.",
    },
    {
      question: "de Moivre på trig-form gir hvilken identitet for $\\cos3\\theta$?",
      options: ["$\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta$", "$\\cos3\\theta=3\\cos^3\\theta-4\\cos\\theta$", "$\\cos3\\theta=4\\cos^2\\theta-3$", "$\\cos3\\theta=\\cos^3\\theta-3\\sin^2\\theta$"],
      explanation: "Realdelen av $(\\cos\\theta+i\\sin\\theta)^3$ gir $\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta$.",
    },
    {
      question: "Hva er den reelle $n$-te roten av $R$ for $R=16$ og $n=4$?",
      options: ["$2$", "$4$", "$8$", "$16$"],
      explanation: "$16^{1/4}=\\sqrt{\\sqrt{16}}=\\sqrt4=2$ — ikke $16/4=4$.",
    },
    {
      question: "For et reelt $w$ kommer de ikke-reelle $n$-te røttene:",
      options: ["i konjugatpar ($z$ og $\\bar z$)", "alltid som rent imaginære tall", "kun som positive reelle tall", "aldri — alle røttene er reelle"],
      explanation: "Reelle koeffisienter gir at ikke-reelle røtter opptrer i konjugatpar — grunnlaget for reell faktorisering (kap. 1.3).",
    },
    {
      question: "Hvordan skriver du negative potenser med de Moivre?",
      options: ["$z^{-n}=r^{-n}e^{-in\\theta}$", "$z^{-n}=-r^{n}e^{in\\theta}$", "$z^{-n}=r^{n}e^{-in\\theta}$", "$z^{-n}=r^{-n}e^{in\\theta}$"],
      explanation: "de Moivre gjelder for alle heltall: $z^{-n}=r^{-n}e^{-in\\theta}$ — både modulus og argument snus.",
    },
    {
      question: "Hvis $z_0$ er prinsipalroten og $\\omega=e^{i2\\pi/n}$, hva er de andre røttene?",
      options: ["$z_k=z_0\\,\\omega^k$", "$z_k=z_0+\\omega k$", "$z_k=z_0^{\\,k}$", "$z_k=\\omega/z_0^{\\,k}$"],
      explanation: "Alle røtter er prinsipalroten rotert med enhetsrøttene: $z_k=z_0\\omega^k$.",
    },
  ],
  'mat111-uib-1-3': [
    {
      question: "Hva forteller diskriminanten $D=b^2-4ac<0$ (reelle koeffisienter)?",
      options: ["to komplekse konjugerte røtter", "én dobbel reell rot", "to forskjellige reelle røtter", "ingen røtter i det hele tatt, verken reelle eller komplekse"],
      explanation: "$D<0$ gir $\\sqrt D=i\\sqrt{|D|}$, altså to konjugerte komplekse røtter $\\alpha\\pm\\beta i$.",
    },
    {
      question: "Løs $z^2+2z+5=0$.",
      options: ["$-1\\pm2i$", "$1\\pm2i$", "$-2\\pm i$", "$-1\\pm\\sqrt5$"],
      explanation: "$D=4-20=-16$, $\\sqrt D=4i$, så $z=\\tfrac{-2\\pm4i}{2}=-1\\pm2i$.",
    },
    {
      question: "Hva er $\\sqrt{-36}$ skrevet med $i$?",
      options: ["$6i$", "$-6$", "$36i$", "$6$"],
      explanation: "$\\sqrt{-36}=\\sqrt{36}\\cdot\\sqrt{-1}=6i$.",
    },
    {
      question: "Konjugatrotsetningen sier at hvis $z_0$ er rot i et polynom med reelle koeffisienter, så:",
      options: ["er $\\bar z_0$ også en rot", "er $-z_0$ også en rot i det samme polynomet", "er $1/z_0$ også en rot", "er $z_0$ en dobbel rot"],
      explanation: "Med reelle koeffisienter opptrer komplekse røtter i konjugatpar: $z_0$ rot $\\Rightarrow \\bar z_0$ rot.",
    },
    {
      question: "Hvilken forutsetning MÅ være oppfylt for at konjugatrotsetningen skal gjelde?",
      options: ["polynomet har reelle koeffisienter", "polynomet har grad minst tre", "roten er rent imaginær", "polynomet er normert (ledende $1$)"],
      explanation: "Setningen krever reelle koeffisienter. For komplekse koeffisienter (f.eks. $z^2-iz$) gjelder den ikke.",
    },
    {
      question: "Hva blir den reelle kvadratiske faktoren fra konjugatparet $z_0,\\bar z_0$?",
      options: ["$z^2-2\\operatorname{Re}(z_0)z+|z_0|^2$", "$z^2+2\\operatorname{Re}(z_0)z+|z_0|^2$", "$z^2-2\\operatorname{Im}(z_0)z+|z_0|^2$", "$z^2-|z_0|^2 z+2\\operatorname{Re}(z_0)$"],
      explanation: "$(z-z_0)(z-\\bar z_0)=z^2-(z_0+\\bar z_0)z+z_0\\bar z_0=z^2-2\\operatorname{Re}(z_0)z+|z_0|^2$.",
    },
    {
      question: "Hva sier algebraens fundamentalteorem?",
      options: ["grad $n$ gir nøyaktig $n$ røtter i $\\mathbb{C}$ (m/multiplisitet)", "grad $n$ gir nøyaktig $n$ reelle røtter når koeffisientene er reelle", "ethvert polynom har minst én reell rot", "komplekse røtter finnes bare for like grad"],
      explanation: "Et gradtall-$n$-polynom har nøyaktig $n$ komplekse røtter regnet med multiplisitet — derfor $n$ lineære faktorer over $\\mathbb{C}$.",
    },
    {
      question: "Hvordan ser faktoriseringen over $\\mathbb{R}$ ut for et reelt polynom?",
      options: ["lineære faktorer og irreduserbare kvadratiske", "bare lineære faktorer", "bare kvadratiske faktorer", "lineære, kvadratiske og kubiske faktorer om hverandre"],
      explanation: "Over $\\mathbb{R}$: én lineær faktor per reell rot, én irreduserbar kvadratisk per konjugatpar.",
    },
    {
      question: "Når er et reelt andregradspolynom $z^2+pz+q$ irreduserbart over $\\mathbb{R}$?",
      options: ["når $p^2-4q<0$", "når $p^2-4q>0$", "når $p^2-4q=0$", "når $q<0$"],
      explanation: "Negativ diskriminant betyr ingen reelle røtter — polynomet kan ikke splittes videre over $\\mathbb{R}$.",
    },
    {
      question: "Faktoriser $z^3-8$ over $\\mathbb{R}$.",
      options: ["$(z-2)(z^2+2z+4)$", "$(z-2)(z^2-2z+4)$", "$(z+2)(z^2-2z+4)$", "$(z-2)(z^2+4)$"],
      explanation: "Reell rot $2$; konjugatparet $-1\\pm\\sqrt3 i$ gir $z^2+2z+4$ (irreduserbar).",
    },
    {
      question: "Faktoriser $z^4+4$ over $\\mathbb{R}$.",
      options: ["$(z^2-2z+2)(z^2+2z+2)$", "$(z^2-2z-2)(z^2+2z-2)$", "$(z-2)(z+2)(z^2+1)$", "$(z^2+2)^2$"],
      explanation: "Røttene $1\\pm i$ og $-1\\pm i$ gir to reelle kvadratiske faktorer $z^2\\mp2z+2$.",
    },
    {
      question: "Faktorsetningen sier at $z_0$ er rot i $p$ hvis og bare hvis:",
      options: ["$(z-z_0)$ er en faktor i $p$", "$(z+z_0)$ er en faktor i $p$", "$z_0$ deler den konstante leddet", "$p'(z_0)=0$"],
      explanation: "$p(z_0)=0 \\iff p(z)=(z-z_0)q(z)$ — broa mellom røtter og faktorer.",
    },
    {
      question: "Etter polynomdivisjon: hvordan sjekker du raskt at faktoriseringen stemmer?",
      options: ["gang faktorene sammen igjen og se om du får $p$", "deriver $p$ og sjekk at $p'$ har de samme nullpunktene", "sett $z=0$ i restfaktoren", "tell antall ledd i restfaktoren"],
      explanation: "Gjenmultiplikasjon (eller å sette en kjent rot inn i restfaktoren) fanger regnefeil i divisjonen.",
    },
    {
      question: "Hvor mange faktoriseringer må du levere når oppgaven ber om «over $\\mathbb{C}$ og over $\\mathbb{R}$»?",
      options: ["begge — ellers mistes full pott", "bare over $\\mathbb{C}$, den impliserer $\\mathbb{R}$", "bare over $\\mathbb{R}$, den er mest generell", "én av dem, valgfritt hvilken"],
      explanation: "Full pott krever begge når begge er etterspurt — å levere bare den ene er en vanlig poengtapsfelle.",
    },
    {
      question: "Vis at $3-i$ er rot i $z^2-6z+10$. Hva er den andre roten?",
      options: ["$3+i$ (konjugatet)", "$-3+i$", "$3-i$ igjen (dobbel)", "$-3-i$"],
      explanation: "Reelle koeffisienter ⇒ konjugatet $3+i$ er den andre roten. (Sum $6$, produkt $10$ ✓.)",
    },
    {
      question: "Hvorfor har hvert reelt tredjegradspolynom minst én reell rot?",
      options: ["ikke-reelle røtter kommer i par, så oddegrad gir en reell", "tredjegradspolynomer har alltid tre forskjellige reelle røtter", "diskriminanten er alltid positiv for grad tre", "komplekse røtter finnes bare for grad fire og opp"],
      explanation: "Ikke-reelle røtter opptrer parvis; et odde antall røtter kan derfor ikke være rent komplekst — minst én er reell.",
    },
    {
      question: "Hva er produktet av konjugatparet $z_0,\\bar z_0$?",
      options: ["$|z_0|^2$", "$2\\operatorname{Re}(z_0)$", "$z_0^2$", "$2i\\operatorname{Im}(z_0)$"],
      explanation: "$z_0\\bar z_0=|z_0|^2$ — den konstante leddet i den reelle kvadratiske faktoren.",
    },
    {
      question: "Er $z^2-iz$ et moteksempel mot konjugatrotsetningen?",
      options: ["ja, koeffisientene er komplekse så setningen gjelder ikke", "nei, setningen gjelder for alle polynomer uansett koeffisienter", "ja, men bare fordi graden er to", "nei, $z^2-iz$ har ingen røtter"],
      explanation: "$z^2-iz$ har røtter $0$ og $i$, men $\\bar i=-i$ er ikke rot — setningen krever reelle koeffisienter.",
    },
    {
      question: "En reell kvadratisk faktor $z^2+2z+4$ — er den ferdig faktorisert over $\\mathbb{C}$?",
      options: ["nei, over $\\mathbb{C}$ må den splittes i to lineære faktorer", "ja, kvadratiske faktorer er alltid ferdige", "ja, siden diskriminanten er negativ", "nei, den må først skrives om som et produkt av tredjegradsfaktorer"],
      explanation: "Over $\\mathbb{C}$ splittes den til $(z-(-1+\\sqrt3 i))(z-(-1-\\sqrt3 i))$. Irreduserbel gjelder bare over $\\mathbb{R}$.",
    },
    {
      question: "Hvordan går du fra ett kjent (ikke-reelt) rot $z_0$ til resten av faktoriseringen?",
      options: ["lag reell faktor fra $z_0,\\bar z_0$ og del $p$ på den", "del $p$ på $(z-z_0)$ direkte med komplekse tall", "gjett de andre røttene og sjekk", "deriver $p$ og finn nullpunktene til $p'$, som gir resten av røttene"],
      explanation: "Konjugatparet gir en reell kvadratisk faktor; polynomdivisjon med den gir restfaktoren og de øvrige røttene.",
    },
    {
      question: "For $z^2+bz+c=(z-z_1)(z-z_2)$: hva er $z_1+z_2$ og $z_1z_2$ (Vieta)?",
      options: ["$z_1+z_2=-b$ og $z_1z_2=c$", "$z_1+z_2=b$ og $z_1z_2=-c$", "$z_1+z_2=-c$ og $z_1z_2=b$", "$z_1+z_2=c$ og $z_1z_2=b$"],
      explanation: "Vietas formler: summen er $-b$, produktet er $c$ (for normert andregradspolynom).",
    },
    {
      question: "Hva er en god sluttkontroll på at en faktorisering er komplett?",
      options: ["summen av faktorenes grader er lik $\\deg p$", "at alle faktorene har positivt konstantledd og positiv ledende koeffisient", "at ingen faktor inneholder $i$", "at ledende koeffisient er fjernet"],
      explanation: "Tell gradene: de skal summere til $\\deg p$, og ingen faktor skal kunne splittes videre over det aktuelle tallområdet.",
    },
  ],
  'mat111-uib-1-4': [
    {
      question: "En åpningsoppgave ber deg regne $z^6$. Hva er første, tidsbesparende steg?",
      options: ["skriv $z$ på polarform", "gang $z$ med seg selv seks ganger", "forleng $z$ med konjugatet", "finn $|z|^2=z\\bar z$ først"],
      explanation: "På polarform blir potensen tre linjer med de Moivre; gjentatt normalform-multiplikasjon er tidsfellen.",
    },
    {
      question: "Skriv $z=-4$ på polarform.",
      options: ["$4e^{i\\pi}$", "$4e^{i0}$", "$-4e^{i0}$", "$4e^{i\\pi/2}$"],
      explanation: "$-4$ ligger på den negative reelle aksen: $r=4$, $\\theta=\\pi$.",
    },
    {
      question: "Skriv $\\dfrac{3-2i}{1+i}$ på normalform.",
      options: ["$\\tfrac12-\\tfrac52 i$", "$\\tfrac12+\\tfrac52 i$", "$\\tfrac52-\\tfrac12 i$", "$1-5i$"],
      explanation: "Forleng med $1-i$: teller $1-5i$, nevner $2$, altså $\\tfrac12-\\tfrac52 i$.",
    },
    {
      question: "Regn $(1-i)^8$.",
      options: ["$16$", "$-16$", "$16i$", "$256$"],
      explanation: "$1-i=\\sqrt2 e^{-i\\pi/4}$, så $(1-i)^8=(\\sqrt2)^8 e^{-i2\\pi}=2^4=16$.",
    },
    {
      question: "Hvor mange løsninger har $z^4=16$, og hva er modulusen deres?",
      options: ["fire, alle med modulus $2$", "fire, med ulike modulus", "to reelle løsninger", "én løsning $z=2$"],
      explanation: "$16^{1/4}=2$; fire røtter jevnt på sirkelen med radius $2$: $2,2i,-2,-2i$.",
    },
    {
      question: "I oppgave $u^3=-8$: hvilket ledd sikrer at du får alle tre røttene?",
      options: ["$2k\\pi$-leddet i argumentet", "opphøyingen av modulusen", "konjugatrotsetningen", "diskriminanten"],
      explanation: "$u_k=2e^{i(\\pi+2k\\pi)/3}$ for $k=0,1,2$ — uten $2k\\pi$ får du bare prinsipalroten.",
    },
    {
      question: "Løs $v^2-2v+2=0$.",
      options: ["$1\\pm i$", "$-1\\pm i$", "$2\\pm i$", "$1\\pm2i$"],
      explanation: "$D=4-8=-4$, $\\sqrt D=2i$, så $v=\\tfrac{2\\pm2i}{2}=1\\pm i$.",
    },
    {
      question: "Løs den bikvadratiske $z^4+5z^2+4=0$.",
      options: ["$\\pm i,\\ \\pm2i$", "$\\pm1,\\ \\pm2$", "$\\pm i,\\ \\pm2$", "$\\pm1,\\ \\pm2i$"],
      explanation: "$u=z^2$: $(u+1)(u+4)=0$, så $z^2=-1\\Rightarrow\\pm i$ og $z^2=-4\\Rightarrow\\pm2i$.",
    },
    {
      question: "Du har vist at $2+i$ er rot i et reelt polynom. Hva er den reelle kvadratiske faktoren?",
      options: ["$z^2-4z+5$", "$z^2+4z+5$", "$z^2-4z-5$", "$z^2-2z+5$"],
      explanation: "$(z-(2+i))(z-(2-i))=z^2-2\\operatorname{Re}(2+i)z+|2+i|^2=z^2-4z+5$.",
    },
    {
      question: "Faktoriser $z^4-1$ over $\\mathbb{R}$.",
      options: ["$(z-1)(z+1)(z^2+1)$", "$(z-1)(z+1)(z-i)(z+i)$", "$(z^2-1)^2$", "$(z-1)^2(z+1)^2$"],
      explanation: "Over $\\mathbb{R}$: $(z-1)(z+1)(z^2+1)$ med $z^2+1$ irreduserbar. Over $\\mathbb{C}$ splittes $z^2+1$.",
    },
    {
      question: "Begge kvadratrøttene av $-5+12i$ er:",
      options: ["$\\pm(2+3i)$", "$\\pm(3+2i)$", "$\\pm(2-3i)$", "$\\pm(5+12i)$"],
      explanation: "$a^2-b^2=-5,\\ 2ab=12,\\ a^2+b^2=13$ gir $a=\\pm2,\\ b=\\pm3$ med likt fortegn.",
    },
    {
      question: "Mengden $|z-1|=|z+3|$ er:",
      options: ["den loddrette linja $x=-1$", "en sirkel om $(1,0)$", "den vannrette linja $y=-1$", "linjestykket fra $1$ til $-3$"],
      explanation: "Midtnormalen mellom $(1,0)$ og $(-3,0)$: $-2x+1=6x+9\\Rightarrow x=-1$.",
    },
    {
      question: "Hva menes med at delpunktene i en åpningsoppgave er «kjedet»?",
      options: ["et delsvar (f.eks. en faktorisering) gjenbrukes senere", "alle delpunktene har samme svar skrevet på ulike former", "du må løse dem i omvendt rekkefølge", "hvert delpunkt teller dobbelt så mye"],
      explanation: "MAT111-åpninger gjenbruker ofte et tidligere delsvar; å se kjeden sparer regning.",
    },
    {
      question: "Når skal et polarform-svar skrives ut til normalform?",
      options: ["når oppgaven eksplisitt ber om normalform", "alltid, uansett hva som spørres", "aldri — polarform er alltid nok", "bare når modulusen ikke er heltall"],
      explanation: "Lever i den formen oppgaven ber om. Polarsvar der normalform er etterspurt gir trekk.",
    },
    {
      question: "Skriv $6e^{i5\\pi/6}$ på normalform.",
      options: ["$-3\\sqrt3+3i$", "$3\\sqrt3+3i$", "$-3\\sqrt3-3i$", "$-3+3\\sqrt3\\,i$"],
      explanation: "$6(\\cos\\tfrac{5\\pi}{6}+i\\sin\\tfrac{5\\pi}{6})=6(-\\tfrac{\\sqrt3}{2}+i\\tfrac12)=-3\\sqrt3+3i$.",
    },
    {
      question: "Regn $(\\sqrt3-i)^5$ på normalform.",
      options: ["$-16\\sqrt3-16i$", "$16\\sqrt3-16i$", "$-16\\sqrt3+16i$", "$-32i$"],
      explanation: "$\\sqrt3-i=2e^{-i\\pi/6}$, så $(\\sqrt3-i)^5=32e^{-i5\\pi/6}=32(-\\tfrac{\\sqrt3}{2}-i\\tfrac12)=-16\\sqrt3-16i$.",
    },
    {
      question: "Etter en polynomdivisjon i en faktoriseringsoppgave — hva bør du gjøre?",
      options: ["gange faktorene sammen igjen som kontroll", "runde av alle koeffisientene", "droppe den reelle faktoren og bare oppgi de komplekse", "bytte til polarform"],
      explanation: "Gjenmultiplikasjon (eller innsetting av en rot) fanger regnefeil i divisjonen — billig forsikring.",
    },
    {
      question: "$z^3=-27i$ gir tre røtter. Hva er modulusen til hver av dem?",
      options: ["$3$", "$27$", "$9$", "$\\sqrt3$"],
      explanation: "$|-27i|=27$, og $27^{1/3}=3$ — alle tre røttene har modulus $3$.",
    },
  ],
  'mat111-uib-2-1': [
    {
      question: "I ε-δ-definisjonen: hvilken størrelse gis først, og hvilken skal du velge etterpå?",
      options: ["$\\varepsilon$ gis først; deretter velger du $\\delta$ (som får avhenge av $\\varepsilon$)", "$\\delta$ gis først; deretter velger du $\\varepsilon$ (som får avhenge av $\\delta$)", "Begge velges samtidig og uavhengig av hverandre", "$x$ gis først, deretter både $\\varepsilon$ og $\\delta$"],
      explanation: "Kvantorrekkefølgen er $\\forall\\varepsilon\\ \\exists\\delta$: toleransen $\\varepsilon$ er gitt, og du svarer med et $\\delta$ som avhenger av $\\varepsilon$.",
    },
    {
      question: "Du skal vise $\\lim_{x\\to 2}x^2=4$. Etter faktorisering $|x^2-4|=|x-2||x+2|$, hva er neste steg i malen?",
      options: ["Avgrens restfaktoren $|x+2|$ på kontrollintervallet $|x-2|<1$", "Velg $\\delta=\\varepsilon$ direkte uten å avgrense noe", "Sett $x=2$ i $|x+2|$ og bruk $|x+2|=4$ som eksakt verdi", "Derivér $x^2$ og bruk L'Hôpital"],
      explanation: "Restfaktoren $|x+2|$ avhenger av $x$ og må avgrenses av en konstant $K$ på et kontrollintervall før $\\delta$ velges.",
    },
    {
      question: "På kontrollintervallet $|x-2|<1$ (altså $x\\in(1,3)$): hvilken skranke $K$ gjelder for $|x+2|$?",
      options: ["$|x+2|<5$", "$|x+2|<4$", "$|x+2|<1$", "$|x+2|<3$"],
      explanation: "For $x\\in(1,3)$ er $x+2\\in(3,5)$, så $|x+2|<5$. Bruk øvre ende av intervallet.",
    },
    {
      question: "Hvorfor bruker vi $\\delta=\\min\\{1,\\ \\varepsilon/K\\}$ og ikke bare $\\delta=\\varepsilon/K$?",
      options: ["For at kontrollkravet $|x-a|<1$ også skal holde, slik at $|g(x)|\\le K$ er garantert", "Fordi $\\varepsilon/K$ alltid er negativt, og $\\delta$ må velges positivt for at definisjonen skal gi mening", "Fordi $\\delta$ må være et helt tall", "Det er ingen forskjell; $\\min$ er bare pynt"],
      explanation: "Uten $|x-a|<1$ er ikke avgrensningen $|g(x)|\\le K$ sikret. $\\min$ tvinger begge kravene til å holde samtidig.",
    },
    {
      question: "Hva er det siste (avgjørende) steget i et ε-δ-bevis?",
      options: ["Verifisere implikasjonen: anta $0<|x-a|<\\delta$ og vis at $|f(x)-L|<\\varepsilon$", "Oppgi et konkret tall for $\\delta$ og stoppe der — valget trenger ingen verifikasjon", "Regne ut grenseverdien $L$", "Tegne grafen til $f$"],
      explanation: "Selve verifikasjonen er beviset. Et $\\delta$-valg uten den fullførte implikasjonen er bare en påstand.",
    },
    {
      question: "For $\\lim_{x\\to 3}(2x+1)=7$ er $|(2x+1)-7|=2|x-3|$. Hvilket $\\delta$ virker?",
      options: ["$\\delta=\\varepsilon/2$", "$\\delta=2\\varepsilon$", "$\\delta=\\varepsilon$", "$\\delta=\\min\\{1,\\varepsilon/2\\}$ er nødvendig"],
      explanation: "Lineært uttrykk: $2|x-3|<\\varepsilon \\iff |x-3|<\\varepsilon/2$. Ingen restfaktor, så $\\min$-grepet trengs ikke — men et mindre $\\delta$ virker også.",
    },
    {
      question: "I R-ε-varianten $\\lim_{x\\to\\infty}f(x)=L$ erstattes «$0<|x-a|<\\delta$» av hvilket krav?",
      options: ["$x>R$ for et tall $R=R(\\varepsilon)$", "$|x|<\\delta$", "$x<R$", "$0<|x-\\infty|<\\delta$"],
      explanation: "Mot uendelig krever vi at $x$ er stor nok: $x>R \\Rightarrow |f(x)-L|<\\varepsilon$.",
    },
    {
      question: "For $\\lim_{x\\to\\infty}\\frac{2x+1}{x}=2$ er $\\left|\\frac{2x+1}{x}-2\\right|=\\frac1x$. Hvilken $R$ virker?",
      options: ["$R=1/\\varepsilon$", "$R=\\varepsilon$", "$R=2/\\varepsilon$", "$R=1/\\varepsilon^2$"],
      explanation: "$\\frac1x<\\varepsilon \\iff x>\\frac1\\varepsilon$, så $R=1/\\varepsilon$.",
    },
    {
      question: "Hva betyr betingelsen $0<|x-a|$ i grensedefinisjonen?",
      options: ["Punktet $x=a$ er utelatt — grensen ser bort fra $f(a)$", "$x$ må være positiv", "$f(a)$ må være definert og forskjellig fra grenseverdien $L$", "$a$ må være et heltall"],
      explanation: "$0<|x-a|$ tar $a$ selv ut (punktert omegn). Derfor kan grensen finnes selv om $f(a)$ mangler eller er noe annet.",
    },
    {
      question: "En funksjon har $\\lim_{x\\to a}f(x)=L$ men er ikke definert i $a$. Er dette mulig?",
      options: ["Ja — grensen avhenger bare av oppførselen i den punkterte omegnen, ikke av $f(a)$", "Nei — grensen krever at $f(a)=L$", "Nei — grensedefinisjonen krever at $f(a)$ finnes og brukes som sammenligningspunkt", "Bare hvis $L=0$"],
      explanation: "Grensen og funksjonsverdien er to ulike ting. $\\frac{\\sin x}{x}$ har grense $1$ i $0$ uten å være definert der.",
    },
    {
      question: "For $\\lim_{x\\to 1}x^3=1$: faktoriseringen $|x^3-1|=|x-1||x^2+x+1|$. Hva er $K$ på $|x-1|<1$?",
      options: ["$K=7$ (siden $x^2+x+1<7$ for $x\\in(0,2)$)", "$K=3$ (verdien av $x^2+x+1$ i punktet $x=1$)", "$K=1$", "$K=4$"],
      explanation: "På $x\\in(0,2)$ er $x^2+x+1$ voksende og $<2^2+2+1=7$, så $|x^2+x+1|<7$.",
    },
    {
      question: "Hvilken av disse er en gyldig $\\delta$ hvis $\\delta=\\min\\{1,\\varepsilon/4\\}$ virker for et bevis?",
      options: ["Ethvert positivt tall $\\le \\min\\{1,\\varepsilon/4\\}$", "Bare nøyaktig $\\min\\{1,\\varepsilon/4\\}$ — ingen andre", "Et hvilket som helst større $\\delta$", "$\\delta$ må være det største mulige tallet"],
      explanation: "$\\delta$ er ikke entydig: virker ett $\\delta$, virker ethvert mindre positivt tall også.",
    },
    {
      question: "En kandidat skriver bare «$\\lim_{x\\to2}(3x^2-1)=11$ fordi jeg setter inn $x=2$». Hva mangler i en sjanger D-oppgave?",
      options: ["Selve ε-δ-beviset — å velge $\\delta$ og verifisere implikasjonen", "Ingenting; å sette inn verdien er et fullstendig bevis for grensen", "En graf av funksjonen", "En tabell med funksjonsverdier"],
      explanation: "Sjanger D ber om et *bevis med definisjonen*, ikke en utregning. Innsetting viser bare hva grensen er, ikke at definisjonen er oppfylt.",
    },
    {
      question: "For $\\lim_{x\\to\\infty}\\frac{3x-2}{x}=3$: hva blir $\\left|\\frac{3x-2}{x}-3\\right|$?",
      options: ["$\\frac{2}{x}$", "$\\frac{3}{x}$", "$\\frac{2x}{x}$", "$\\frac{1}{x}$"],
      explanation: "$\\frac{3x-2}{x}-3=\\frac{3x-2-3x}{x}=\\frac{-2}{x}$, med absoluttverdi $\\frac2x$.",
    },
    {
      question: "Hvorfor velger vi ofte tallet $1$ i kontrollkravet $|x-a|<1$?",
      options: ["Det er et bekvemt fast valg; enhver fast positiv radius kan brukes", "Fordi $\\delta$ alltid må være $1$", "Fordi grenseverdien bare er definert for de $x$ som oppfyller $|x-a|<1$", "Fordi $\\varepsilon$ alltid er $1$"],
      explanation: "$1$ er bare praktisk. Man kunne like gjerne krevd $|x-a|<\\tfrac12$; da endres bare $K$.",
    },
    {
      question: "For et lineært uttrykk $f(x)=mx+b$ ($m\\neq0$): trengs $\\min\\{1,\\cdot\\}$-grepet?",
      options: ["Nei — $|f(x)-L|=|m||x-a|$ har ingen restfaktor å avgrense, så $\\delta=\\varepsilon/|m|$ holder", "Ja — $\\min\\{1,\\cdot\\}$-grepet er obligatorisk i absolutt alle ε-δ-bevis, også for lineære funksjoner", "Nei — lineære grenser finnes ikke", "Ja — fordi $m$ må avgrenses"],
      explanation: "Uten restfaktor er $\\delta=\\varepsilon/|m|$ direkte gyldig. $\\min$-grepet trengs bare når en $x$-avhengig restfaktor må avgrenses.",
    },
    {
      question: "Hva sier grensesetningene deg om $\\lim_{x\\to a}p(x)$ når $p$ er et polynom?",
      options: ["$\\lim_{x\\to a}p(x)=p(a)$ (bygget fra $\\lim x=a$ og $\\lim k=k$)", "Grensen finnes aldri for polynomer", "$\\lim_{x\\to a}p(x)=0$ alltid", "Grensen er alltid den deriverte $p'(a)$, etter én bruk av L'Hôpitals regel"],
      explanation: "Sum-/produktregelen på grunngrensene $\\lim x=a$ og $\\lim k=k$ gir $\\lim p(x)=p(a)$ for ethvert polynom.",
    },
    {
      question: "I malen $\\delta=\\min\\{1,\\varepsilon/K\\}$: hva blir $\\delta$ for stor $\\varepsilon$ (f.eks. $\\varepsilon/K>1$)?",
      options: ["$\\delta=1$ (kontrollkravet vinner)", "$\\delta=\\varepsilon/K$ (kan bli $>1$)", "$\\delta=\\varepsilon$", "$\\delta=0$"],
      explanation: "Når $\\varepsilon/K>1$ er minimum lik $1$. Det er nettopp derfor vi tar $\\min$: uten det kunne $\\delta>1$ ødelegge avgrensningen.",
    },
  ],
  'mat111-uib-2-2': [
    {
      question: "Hva må du gjøre FØR hver bruk av L'Hôpitals regel?",
      options: ["Markere den ubestemte formen ($[0/0]$ eller $[\\infty/\\infty]$) og sjekke forutsetningene", "Derivere hele uttrykket (teller og nevner under ett) minst to ganger før du setter inn verdien", "Sette $x=0$ i svaret", "Ta logaritmen av uttrykket"],
      explanation: "Formsjekken er føringskravet: L'Hôpital gjelder bare på ubestemt form, og formen markeres ved hver anvendelse.",
    },
    {
      question: "På hvilke former kan L'Hôpital brukes DIREKTE?",
      options: ["$[0/0]$ og $[\\infty/\\infty]$", "$1^\\infty$ og $0^0$", "$\\infty-\\infty$ og $0\\cdot\\infty$", "Alle syv ubestemte former"],
      explanation: "Bare de to brøkformene $[0/0]$ og $[\\infty/\\infty]$; de øvrige må skrives om til en av dem først.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0}\\frac{\\sin 3x}{5x}=?$",
      options: ["$3/5$", "$1$", "$5/3$", "$0$"],
      explanation: "$\\frac{\\sin3x}{5x}=\\frac35\\cdot\\frac{\\sin3x}{3x}\\to\\frac35\\cdot1=\\frac35$.",
    },
    {
      question: "Hvilket grep bruker du på $\\displaystyle\\lim_{x\\to\\infty}(\\sqrt{x^2+4x}-x)$ (form $\\infty-\\infty$)?",
      options: ["Gange og dele med den konjugerte $\\sqrt{x^2+4x}+x$", "Bruke L'Hôpital direkte på differansen slik den står skrevet", "Ta logaritmen", "Sette $x=\\infty$ inn i hvert ledd"],
      explanation: "Konjugattrikset fjerner røttene: differansen blir en brøk du kan behandle videre. $\\infty-\\infty$ er ikke klar for L'Hôpital.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to\\infty}(\\sqrt{x^2+4x}-x)=?$",
      options: ["$2$", "$0$", "$4$", "$\\infty$"],
      explanation: "Konjugat: $\\frac{4x}{\\sqrt{x^2+4x}+x}$, del på $x$: $\\frac{4}{\\sqrt{1+4/x}+1}\\to\\frac42=2$.",
    },
    {
      question: "For $\\lim_{x\\to0^+}(1+3x)^{1/x}$ (form $1^\\infty$): hva er riktig første steg?",
      options: ["Ta logaritmen: sett $y=(1+3x)^{1/x}$, så $\\ln y=\\frac{\\ln(1+3x)}{x}$", "Bruke L'Hôpital direkte på $(1+3x)^{1/x}$ ved å derivere basis og eksponent hver for seg", "Sette inn $x=0$ og få $1$", "Konjugattrikset"],
      explanation: "Potensformer løses med logaritmetrikset: $\\ln y=\\frac1x\\ln(1+3x)$, som er $[0/0]$.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0^+}(1+3x)^{1/x}=?$",
      options: ["$e^3$", "$3$", "$1$", "$e$"],
      explanation: "$\\ln y=\\frac{\\ln(1+3x)}{x}\\to3$ (L'Hôpital), så grensen er $e^3$. Husk å eksponentiere tilbake.",
    },
    {
      question: "Vanligste feil i logaritmetrikset er å ...",
      options: ["glemme å eksponentiere tilbake (svaret er $e^{\\lim\\ln y}$, ikke $\\lim\\ln y$)", "ta logaritmen i det hele tatt, siden trikset er helt unødvendig for $1^\\infty$-former", "bruke fellesnevner", "markere formen"],
      explanation: "Man finner $\\lim\\ln y=L$, men grensen av $y$ selv er $e^L$. Å stoppe ved $L$ er den klassiske feilen.",
    },
    {
      question: "Hva krever korrekt bruk av skviseteoremet på $x^2\\sin\\frac1x$?",
      options: ["Å uttale begrensetheten $|\\sin\\frac1x|\\le1$, som gir $-x^2\\le x^2\\sin\\frac1x\\le x^2$", "Å derivere $\\sin\\frac1x$", "Å skrive om til $\\frac{\\sin(1/x)}{1/x^2}$ og bruke L'Hôpital gjentatte ganger til svingingen forsvinner", "Å sette $\\frac1x=0$"],
      explanation: "Klemmen hviler på $|\\sin|\\le1$; begge ytterfunksjonene $\\pm x^2\\to0$, så grensen er $0$.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0}x^2\\sin\\frac1x=?$",
      options: ["$0$", "$1$", "finnes ikke", "$\\infty$"],
      explanation: "Skvis: $-x^2\\le x^2\\sin\\frac1x\\le x^2$, begge sider $\\to0$, så grensen er $0$.",
    },
    {
      question: "Når bør du IKKE bruke L'Hôpital?",
      options: ["Når uttrykket ikke er ubestemt, eller når svinging gjør $f'/g'$ grenseløs", "Alltid — L'Hôpital er universell", "Bare når nevneren er et polynom — for alle andre nevnere gjelder regelen alltid", "Når grensen er mot $0$"],
      explanation: "L'Hôpital gjelder bare på ubestemt form; ved svinging ($\\sin\\frac1x$) eller ikke-ubestemte uttrykk brukes skvis/standardgrense.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to\\infty}\\frac{x^2}{e^x}=?$ (raskeste begrunnelse)",
      options: ["$0$ — veksthierarkiet $x^p\\ll e^x$", "$\\infty$ — polynomet vokser fortest", "$1$ — teller og nevner balanserer", "finnes ikke"],
      explanation: "Eksponentialen slår ethvert polynom, så grensen er $0$. Raskere enn to runder L'Hôpital.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0}\\frac{e^{2x}-1}{x}=?$",
      options: ["$2$", "$1$", "$0$", "$e^2$"],
      explanation: "$[0/0]$; L'Hôpital: $\\frac{2e^{2x}}{1}\\to2$. (Den deriverte av $e^{2x}$ i $0$.)",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0}\\frac{\\sin x - x}{x^3}$ krever hvor mange runder L'Hôpital, og hva blir svaret?",
      options: ["Tre runder; svaret er $-1/6$", "Én runde; svaret er $0$", "To runder; svaret er $1/6$", "Det er ikke ubestemt"],
      explanation: "Etter tre deriveringer: $\\frac{-\\cos x}{6}\\to-\\frac16$. Formsjekk bekrefter $[0/0]$ alle tre gangene.",
    },
    {
      question: "Hvordan skriver du om $0\\cdot\\infty$-produktet $x\\ln x$ til en L'Hôpital-form?",
      options: ["$\\dfrac{\\ln x}{1/x}$ (form $[\\infty/\\infty]$)", "$\\dfrac{x}{\\ln x}$, som gir formen $[0/{-\\infty}]$ direkte", "$(x\\ln x)^2$", "$e^{x\\ln x}$"],
      explanation: "Flytt en faktor til nevneren: $x\\ln x=\\frac{\\ln x}{1/x}$, som er $[\\infty/\\infty]$, deretter L'Hôpital.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0^+}x\\ln x=?$",
      options: ["$0$", "$-\\infty$", "$1$", "$-1$"],
      explanation: "$\\frac{\\ln x}{1/x}$ (L'Hôpital) $=\\frac{1/x}{-1/x^2}=-x\\to0$. Standardgrensen.",
    },
    {
      question: "Hva sier veksthierarkiet?",
      options: ["$\\ln x \\ll x^p \\ll e^x$ når $x\\to\\infty$ (for $p>0$)", "$e^x \\ll x^p \\ll \\ln x$ når $x\\to\\infty$ (for alle $p>0$)", "Alle vokser like fort", "$x^p \\ll \\ln x \\ll e^x$"],
      explanation: "Logaritmen vokser langsomst, eksponentialen fortest; ethvert polynom ligger imellom.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=?$",
      options: ["$1/2$", "$1$", "$0$", "$2$"],
      explanation: "Standardgrense (eller L'Hôpital to ganger): $\\frac{\\sin x}{2x}\\to\\frac12$. Merk kvadratet i nevneren.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to\\infty}x^{1/x}$ (form $\\infty^0$) er ...",
      options: ["$1$ (via $\\ln y=\\frac{\\ln x}{x}\\to0$, så $e^0=1$)", "$\\infty$ (potensen vokser uten grense når $x\\to\\infty$)", "$0$", "$e$"],
      explanation: "$\\ln y=\\frac{\\ln x}{x}\\to0$ ved veksthierarkiet, så $\\lim x^{1/x}=e^0=1$.",
    },
    {
      question: "Et grenseuttrykk gir $\\frac{2}{3}$ ved innsetting. Hva gjør du?",
      options: ["Konkluderer: grensen er $2/3$ (bestemt form, ferdig)", "Bruker L'Hôpital én gang til for å bekrefte resultatet", "Tar logaritmen", "Bruker skvis"],
      explanation: "$\\frac23$ er en bestemt verdi — grensen er $2/3$. Å derivere videre med L'Hôpital ville gitt feil.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2-x}{2x^2+5}=?$ (ledende ledd)",
      options: ["$3/2$", "$0$", "$\\infty$", "$1$"],
      explanation: "Del på $x^2$: $\\frac{3-1/x}{2+5/x^2}\\to\\frac32$. Ledende ledd i teller og nevner bestemmer grensen.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to\\infty}\\frac{2x+\\sin x}{x}=?$",
      options: ["$2$", "$3$", "finnes ikke (pga. $\\sin x$)", "$1$"],
      explanation: "$2+\\frac{\\sin x}{x}$; siden $|\\sin x|\\le1$ er $\\frac{\\sin x}{x}\\to0$ (skvis), så grensen er $2$.",
    },
  ],
  'mat111-uib-2-3': [
    {
      question: "Hva er den presise definisjonen av at $f$ er kontinuerlig i $a$?",
      options: ["$\\lim_{x\\to a}f(x)=f(a)$ (grensen finnes og er lik funksjonsverdien)", "$f(a)$ er definert", "$\\lim_{x\\to a}f(x)$ finnes, uavhengig av om $f(a)$ er definert eller ikke", "$f$ er deriverbar i $a$"],
      explanation: "Kontinuitet krever alle tre: $f(a)$ definert, grensen finnes, og de er like.",
    },
    {
      question: "Hva må stå i føringen FØR du konkluderer med skjæringssetningen?",
      options: ["At $f$ er kontinuerlig på $[a,b]$ og har fortegnsskifte", "At $f$ er deriverbar", "At $f$ er strengt voksende gjennom hele intervallet $[a,b]$", "Verdien av roten $c$"],
      explanation: "Skjæringssetningen forutsetter kontinuitet; fortegnsskiftet gir eksistensen. Begge må nevnes, og setningen navngis.",
    },
    {
      question: "For å vise at $x^5=3-2x$ har en løsning i $[0,2]$: hva er $f$, og hva er fortegnene?",
      options: ["$f(x)=x^5+2x-3$; $f(0)=-3<0$, $f(2)=33>0$", "$f(x)=x^5-2x-3$; $f(0)=-3$, $f(2)=25$", "$f(x)=x^5+3$; begge positive", "$f(x)=3-2x$; $f(0)=3$, $f(2)=-1$"],
      explanation: "Flytt alt til én side: $f(x)=x^5+2x-3$. $f(0)=-3$, $f(2)=32+4-3=33$ — motsatt fortegn.",
    },
    {
      question: "Hvilken forutsetning er nødvendig for ekstremalverdisetningen (Max–Min)?",
      options: ["$f$ kontinuerlig på et lukket, begrenset intervall", "$f$ deriverbar på et åpent intervall", "$f$ kontinuerlig på et hvilket som helst intervall", "$f$ voksende"],
      explanation: "Både lukket OG begrenset OG kontinuerlig kreves; ellers garanteres ikke ekstremalverdiene.",
    },
    {
      question: "Garanterer ekstremalverdisetningen en største verdi for $g(x)=\\frac1x$ på $(0,1]$?",
      options: ["Nei — intervallet er ikke lukket i $0$, og $g\\to\\infty$ der", "Ja — $g$ er kontinuerlig på hele intervallet $(0,1]$, og det holder", "Ja — intervallet er begrenset", "Ja — $g$ er avtagende"],
      explanation: "$(0,1]$ er ikke lukket i venstre ende; $g\\to\\infty$ når $x\\to0^+$, så ingen største verdi finnes.",
    },
    {
      question: "I en kontinuerlig utvidelse: hva er føringskravet ut over å regne grensen?",
      options: ["Å koble grensen eksplisitt til $f(a)$: sette $c=f(a)=\\lim f$", "Å derivere funksjonen", "Å tegne grafen", "Å finne definisjonsmengden og vise at den kan utvides med punktet $a$"],
      explanation: "Å bare regne grensen gir trekk; du må slå fast at $c=f(a)=L$ for kontinuitet.",
    },
    {
      question: "Bestem $c$ slik at $f(x)=\\frac{\\sin 2x}{x}$ ($x\\neq0$), $f(0)=c$, blir kontinuerlig i $0$.",
      options: ["$c=2$", "$c=1$", "$c=0$", "$c=\\frac12$"],
      explanation: "$\\lim_{x\\to0}\\frac{\\sin2x}{x}=2\\cdot\\frac{\\sin2x}{2x}\\to2$, så $c=f(0)=2$.",
    },
    {
      question: "Bestem $c$ slik at $f(x)=\\frac{x^2-9}{x-3}$ ($x\\neq3$), $f(3)=c$, blir kontinuerlig i $3$.",
      options: ["$c=6$", "$c=3$", "$c=0$", "$c=9$"],
      explanation: "$\\frac{(x-3)(x+3)}{x-3}=x+3\\to6$, så $c=f(3)=6$.",
    },
    {
      question: "Kan $f(x)=\\frac{|x|}{x}$ ($x\\neq0$) utvides kontinuerlig i $0$?",
      options: ["Nei — venstregrense $-1$ og høyregrense $1$ er ulike (sprang)", "Ja — med $c=0$, som er gjennomsnittet av de to ensidige grensene", "Ja — med $c=1$", "Ja — med $c=-1$"],
      explanation: "Ulike ensidige grenser betyr at grensen ikke finnes; et sprang kan ikke fylles av én verdi.",
    },
    {
      question: "Hvorfor må hver side regnes for seg i et skjøtepunkt for en stykkevis funksjon?",
      options: ["Kontinuitet krever at begge ensidige grenser og $f$-verdien er like", "Fordi en stykkevis funksjon alltid er diskontinuerlig i selve skjøtepunktet", "Fordi grensen ikke finnes i skjøter", "Fordi $f(a)$ aldri er definert"],
      explanation: "Venstre- og høyresiden er ulike uttrykk; kontinuitet krever at grensene fra begge og $f(a)$ faller sammen.",
    },
    {
      question: "En 'fjernbar diskontinuitet' (hull) kjennetegnes ved at ...",
      options: ["grensen finnes, men $f(a)$ mangler eller avviker — kan fikses ved utvidelse", "venstre- og høyregrensen er ulike, slik at grafen gjør et hopp akkurat i punktet", "funksjonen går mot $\\pm\\infty$", "funksjonen ikke er definert noe sted"],
      explanation: "Et hull har en eksisterende grense; å definere $f(a)=$ grensen lukker det (kontinuerlig utvidelse).",
    },
    {
      question: "Hva gir et fortegnsskifte $f(a)f(b)<0$ for en kontinuerlig $f$?",
      options: ["Minst én rot $c\\in(a,b)$ med $f(c)=0$ (nullpunktsetningen)", "Nøyaktig én rot", "Ingen rot", "Et lokalt maksimum eller minimum et sted mellom $a$ og $b$ på grafen"],
      explanation: "Motsatt fortegn + kontinuitet ⇒ grafen krysser aksen minst én gang (Bolzano/skjæringssetningen).",
    },
    {
      question: "Hvordan viser du at en likning har NØYAKTIG én løsning?",
      options: ["Eksistens med skjæringssetningen + entydighet med strengt monotoni ($f'$ fast fortegn)", "Bare med skjæringssetningen — setningen gir både eksistens og entydighet i ett og samme steg", "Bare ved å sjekke ett punkt", "Med ekstremalverdisetningen"],
      explanation: "To atskilte leveranser: skjæring gir eksistens, monotoni gir at verdien treffes høyst én gang.",
    },
    {
      question: "Hvilke av disse er kontinuerlige overalt der de er definert?",
      options: ["Polynomer, $\\sin$, $\\cos$, $e^x$, $\\ln x$ og alt bygget av disse", "Bare polynomer", "Bare lineære funksjoner og andre polynomer av grad høyst to er kontinuerlige", "Ingen brøkfunksjoner"],
      explanation: "De elementære funksjonene er kontinuerlige på sitt definisjonsområde, og kombinasjoner/sammensetninger arver det.",
    },
    {
      question: "Vis-at-oppgave: er $f(x)=\\frac{1}{x-2}$ dekket av ekstremalverdisetningen på $[3,5]$?",
      options: ["Ja — $f$ er kontinuerlig på $[3,5]$ (nevner $\\neq0$), og intervallet er lukket og begrenset", "Nei — $f$ er aldri kontinuerlig", "Nei — intervallet er åpent", "Ja — men setningen garanterer bare den minste verdien; den største verdien må undersøkes separat"],
      explanation: "På $[3,5]$ er $x-2\\in[1,3]\\neq0$, så $f$ er kontinuerlig; lukket + begrenset ⇒ begge ekstremalverdier finnes.",
    },
    {
      question: "Hva er forskjellen mellom 'grensen finnes' og 'funksjonen er kontinuerlig' i $a$?",
      options: ["Kontinuitet krever i tillegg at $f(a)$ finnes og er lik grensen", "Ingen forskjell", "Grensen finnes krever at $f$ er deriverbar", "Kontinuitet er et strengt svakere krav enn at grensen finnes i punktet"],
      explanation: "Et hull har grense uten kontinuitet; kontinuitet = grense finnes OG $f(a)$ finnes OG de er like.",
    },
  ],
  'mat111-uib-2-4': [
    {
      question: "I ε-δ-drillen: hva er riktig rekkefølge i malen?",
      options: ["Faktoriser → avgrens restfaktoren → velg $\\delta=\\min$ → verifiser implikasjonen", "Velg $\\delta$ først → faktoriser deretter → avgrens restfaktoren → verifiser implikasjonen", "Avgrens restfaktoren → verifiser implikasjonen → faktoriser → velg $\\delta$", "Verifiser implikasjonen → velg $\\delta=\\min$ → faktoriser → avgrens"],
      explanation: "Malen er fast: faktoriser $|f(x)-L|=|x-a||\\text{rest}|$, avgrens resten på et kontrollintervall, velg $\\delta=\\min\\{1,\\varepsilon/K\\}$, og verifiser. $\\delta$ kan ikke velges før skranken finnes.",
    },
    {
      question: "For $\\lim_{x\\to2}(3x^2-1)=11$: hvordan faktoriseres $|3x^2-1-11|$?",
      options: ["$3|x-2|\\,|x+2|$", "$3|x-2|\\,|x-2|$", "$|x-2|\\,|x+2|$", "$3|x+2|$"],
      explanation: "$3x^2-12=3(x^2-4)=3(x-2)(x+2)$. Faktoren $|x-2|$ er den $\\delta$ styrer; resten $3|x+2|$ må avgrenses.",
    },
    {
      question: "Med kontrollkravet $|x-2|<1$: hvilken skranke $K$ gjelder for restfaktoren $3|x+2|$?",
      options: ["$K=15$, siden $1<x<3$ gir $|x+2|<5$", "$K=12$, verdien av $3|x+2|$ i punktet $x=2$", "$K=9$, siden $|x+2|$ høyst er $3$", "$K=3$, koeffisienten foran $|x+2|$"],
      explanation: "$|x-2|<1$ gir $1<x<3$, altså $3<x+2<5$, så $3|x+2|<15$. Å bruke verdien i selve punktet ($K=12$) er ikke en gyldig skranke for hele intervallet.",
    },
    {
      question: "Hva blir $\\delta$-valget i oppgaven over?",
      options: ["$\\delta=\\min\\{1,\\ \\varepsilon/15\\}$", "$\\delta=\\varepsilon/15$ — min-grepet er unødvendig siden skranken alltid gjelder", "$\\delta=\\min\\{1,\\ 15/\\varepsilon\\}$", "$\\delta=\\varepsilon$"],
      explanation: "Skranken $K=15$ gjelder BARE når $|x-2|<1$, så begge krav må inn: $\\delta=\\min\\{1,\\varepsilon/15\\}$. Uten min-grepet kan stor $\\varepsilon$ gi $\\delta>1$ og skranken ryker.",
    },
    {
      question: "$R$-$\\varepsilon$-varianten for $\\dfrac{5x+2}{x}\\to5$ ($x\\to\\infty$): $|f(x)-5|=2/x$. Hvilken $R$ duger?",
      options: ["$R=2/\\varepsilon$", "$R=\\varepsilon/2$", "$R=5/\\varepsilon$", "$R=2\\varepsilon$"],
      explanation: "$2/x<\\varepsilon \\iff x>2/\\varepsilon$, så $R(\\varepsilon)=2/\\varepsilon$ duger (og alle større $R$).",
    },
    {
      question: "Hva er ALLTID første steg i en grenseoppgave i tempo?",
      options: ["Sett inn og klassifiser formen", "Bruk L'Hôpital med én gang — det er raskest", "Ta logaritmen av hele uttrykket uansett form", "Deriver teller og nevner hver for seg to ganger"],
      explanation: "Beslutningstreet starter med formsjekk: er innsetting bestemt, er du ferdig; er den ubestemt, velger formen våpenet. L'Hôpital uten formsjekk er føringstrekk — og av og til direkte galt.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)$: hvilken form, og hvilket våpen?",
      options: ["$[\\infty-\\infty]$ — gang og del med den konjugerte", "$[0/0]$ — L'Hôpital direkte på differansen", "$[\\infty/\\infty]$ — forkort med $x^2$ i begge ledd", "Bestemt form — sett inn og få $0$"],
      explanation: "Begge ledd går mot $\\infty$: formen er $[\\infty-\\infty]$. Konjugattrikset gir $\\frac{2x}{\\sqrt{x^2+2x}+x}\\to1$.",
    },
    {
      question: "$(1+2x)^{3/x}$ når $x\\to0^+$: hvilken form har uttrykket?",
      options: ["$1^\\infty$ — ubestemt, bruk logaritmetrikset", "$\\infty^0$ — ubestemt, bruk konjugattrikset på basisen", "$0^0$ — ubestemt, deriver eksponenten", "Bestemt form — svaret er $1$ direkte"],
      explanation: "Basis $\\to1$ og eksponent $\\to\\infty$: formen $1^\\infty$ er ubestemt (svaret her blir $e^6$, ikke $1$). Logaritmetrikset er standardgrepet.",
    },
    {
      question: "Etter logaritmetrikset finner du $\\lim\\ln y = 6$. Hva er svaret på originalgrensen?",
      options: ["$e^6$", "$6$", "$\\ln 6$", "$e^{1/6}$"],
      explanation: "$y=e^{\\ln y}$, så $\\lim y = e^{\\lim\\ln y}=e^6$. Å levere $6$ er den klassiske glemte-eksponentieringen.",
    },
    {
      question: "$\\lim_{x\\to0}x^2\\cos(1/x)$: hvilket verktøy er riktig?",
      options: ["Skvis: $|\\cos(1/x)|\\le1$ gir $-x^2\\le x^2\\cos(1/x)\\le x^2$", "L'Hôpital på brøken $\\frac{\\cos(1/x)}{1/x^2}$ — deriver til svingingen forsvinner", "Innsetting: $\\cos(1/0)=1$, så grensen er $0\\cdot1=0$", "Logaritmetriks med $y=x^2\\cos(1/x)$"],
      explanation: "Svingende faktor uten grense ⇒ skviseteoremet, med begrensetheten UTTALT. L'Hôpital hjelper ikke (deriverte svinger verre), og $\\cos(1/0)$ er udefinert.",
    },
    {
      question: "Veksthierarki-tempo: $\\lim_{x\\to\\infty}\\dfrac{x^3}{e^x} = \\ ?$",
      options: ["$0$ — eksponentialen slår enhver potens", "$\\infty$ — potensen $x^3$ vokser raskest av de to", "$1$", "$3$"],
      explanation: "$x^p\\ll e^x$: eksponentialfunksjonen vokser fortere enn enhver fast potens, så brøken går mot $0$ (alternativt tre runder L'Hôpital).",
    },
    {
      question: "Hvilken av disse grensene får du IKKE lov å angripe med L'Hôpital?",
      options: ["$\\lim_{x\\to0}\\dfrac{\\cos x}{1+x}$", "$\\lim_{x\\to0}\\dfrac{\\sin x}{x}$", "$\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}$", "$\\lim_{x\\to0}\\dfrac{e^x-1}{x}$"],
      explanation: "$\\frac{\\cos x}{1+x}$ gir $\\frac{1}{1}=1$ ved innsetting — bestemt form, L'Hôpitals forutsetninger er ikke oppfylt. De tre andre er $[0/0]$ eller $[\\infty/\\infty]$.",
    },
    {
      question: "Etter én L'Hôpital-runde er uttrykket fortsatt $[0/0]$. Hva krever føringen før runde to?",
      options: ["Ny markering av formen og ny sjekk av forutsetningene", "Ingenting — markeringen fra første runde dekker alle senere runder", "At du bytter til skviseteoremet, siden L'Hôpital bare kan brukes én gang", "At du konkluderer med at grensen ikke finnes"],
      explanation: "Hver anvendelse av L'Hôpital er et nytt teorembruk: formen markeres og forutsetningene sjekkes på nytt. Gjentatt bruk er helt lovlig når formen fortsatt er ubestemt.",
    },
    {
      question: "Hva må stå EKSPLISITT til slutt i et ε-δ-bevis?",
      options: ["Verifikasjonen: anta $0<|x-a|<\\delta$ og vis $|f(x)-L|<\\varepsilon$", "En verditabell som viser at $f(x)$ nærmer seg $L$ fra begge sider av $a$", "En figur av grafen med $\\varepsilon$-båndet tegnet inn", "Bare tallverdien av $\\delta$"],
      explanation: "Minstekravet i fasitpraksis er at definisjonens betingelser vises oppfylt — implikasjonen må føres, ikke bare $\\delta$-valget.",
    },
    {
      question: "$\\lim_{x\\to0^+}\\left(\\dfrac{1}{x}-\\dfrac{1}{\\sin x}\\right)$: riktig første grep?",
      options: ["Fellesnevner: $\\dfrac{\\sin x - x}{x\\sin x}$, som er $[0/0]$", "Trekk fra direkte: $\\infty-\\infty=0$, så grensen er $0$", "Konjugattriks: gang og del med den «konjugerte» $\\dfrac1x+\\dfrac{1}{\\sin x}$", "Logaritmetriks på hele differansen"],
      explanation: "$[\\infty-\\infty]$ med brøker ⇒ fellesnevner (konjugat er for røtter). $\\frac{\\sin x-x}{x\\sin x}$ er $[0/0]$; svaret blir $0$ — men det må VISES, «$\\infty-\\infty=0$» er ugyldig.",
    },
    {
      question: "Fasiten bemerker at «flere ulike gyldige $\\delta$ finnes». Hvorfor gir et mindre $\\delta$ enn malens aldri feil?",
      options: ["Definisjonen krever bare at ETT $\\delta$ virker — krymper du $\\delta$, holder implikasjonen fortsatt", "Fordi $\\delta$ ikke inngår i selve verifikasjonen", "Det stemmer ikke — $\\delta$ skal velges størst mulig, og et mindre $\\delta$ koster full pott i føringen", "Fordi $\\delta$ alltid må settes lik $\\varepsilon$"],
      explanation: "Kvantoren er $\\exists\\delta$: alt som kreves er ett fungerende $\\delta$, og ethvert mindre positivt tall arver implikasjonen. Ingen «optimal $\\delta$»-premie finnes i sjangeren.",
    },
  ],
  'mat111-uib-3-1': [
    {
      question: "Oppgaven sier «bruk definisjonen av den deriverte». Hva er eneste føring som gir uttelling?",
      options: ["Sette opp $\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$ og føre grensen ut", "Derivere formelen med derivasjonsreglene og sette inn $x=a$ til slutt", "Vise at $\\lim_{x\\to a}f'(x)$ finnes og oppgi den verdien", "Tegne grafen og lese av tangentens stigningstall i punktet"],
      explanation: "Der definisjonen etterspørres, er differansekvotient-grensen selve beviset — å derivere formelen og sette inn er emnets mest dokumenterte felle og gir null.",
    },
    {
      question: "Hva er sekantformen av definisjonen av $f'(a)$?",
      options: ["$\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}$", "$\\lim_{x\\to a}\\dfrac{f(x)+f(a)}{x-a}$", "$\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x+a}$", "$\\lim_{h\\to 0}\\dfrac{f(x)-f(h)}{x-h}$"],
      explanation: "Med $x=a+h$ blir h-formen til $\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$ — differansen i teller og nevner, målt fra samme punkt $a$.",
    },
    {
      question: "$f$ er deriverbar i $a$. Hva kan du automatisk konkludere?",
      options: ["$f$ er kontinuerlig i $a$", "$f'$ er kontinuerlig i $a$", "$\\lim_{x\\to a}f'(x)$ finnes og er lik $f'(a)$", "$f$ er deriverbar i alle punkter nær $a$"],
      explanation: "Deriverbar ⇒ kontinuerlig er teoremet. De andre er fristende, men gale: $f'$ kan være diskontinuerlig i $a$ (oscillasjonsfamilien), og deriverbarhet i nabopunkter følger ikke.",
    },
    {
      question: "Hvorfor er $|x|$ ikke deriverbar i $0$?",
      options: ["Differansekvotienten $|h|/h$ har ulike ensidige grenser ($1$ og $-1$)", "Fordi $|x|$ ikke er kontinuerlig i $0$, og kontinuitet kreves for deriverbarhet", "Fordi differansekvotienten $|h|/h$ går mot uendelig i $0$", "Fordi $|x|$ ikke er definert for negative verdier av $x$"],
      explanation: "$|h|/h$ er $1$ for $h>0$ og $-1$ for $h<0$ — ensidige grenser finnes, men er ulike, så den tosidige grensen finnes ikke. $|x|$ er kontinuerlig overalt; det redder den ikke.",
    },
    {
      question: "Riktig rekkefølge når du undersøker deriverbarhet i et skjøtepunkt:",
      options: ["Sjekk kontinuitet først, deretter ensidige differansekvotienter", "Regn ensidige deriverte først, og sjekk kontinuitet bare hvis de er like", "Deriver hver gren og sett inn — er verdiene like, er skjøten glatt", "Sjekk at begge grenene er definert i punktet, deretter derivér én av dem"],
      explanation: "Ikke kontinuerlig ⇒ ikke deriverbar, så kontinuitetssjekken kommer først og kan avslutte oppgaven. Å «derivere hver gren og sette inn» hopper dessuten over definisjonen.",
    },
    {
      question: "$\\lim_{x\\to a}f'(x)$ finnes ikke. Hva vet du om deriverbarheten til $f$ i $a$?",
      options: ["Ingenting — $f$ kan fortsatt være deriverbar i $a$", "$f$ er ikke deriverbar i $a$, siden $f'$ ikke har grense der", "$f$ er deriverbar i $a$, men $f'(a)$ kan ikke beregnes", "$f$ er ikke kontinuerlig i $a$, og dermed ikke deriverbar"],
      explanation: "Grense-av-derivert-setningen går bare én vei. $x^2\\sin(1/x)$ er deriverbar i $0$ selv om $\\lim f'(x)$ ikke finnes — å konkludere «ikke deriverbar» her er kjernefellen.",
    },
    {
      question: "Hvilke forutsetninger krever grense-av-derivert-setningen for å gi $f'(a)=b$?",
      options: ["$f$ kontinuerlig i $a$ og $\\lim_{x\\to a}f'(x)=b$ finnes", "$f$ deriverbar i $a$ og $\\lim_{x\\to a}f'(x)=b$ finnes", "$\\lim_{x\\to a}f'(x)=b$ finnes — det er alt som trengs", "$f$ kontinuerlig i $a$ og $f'$ begrenset i en omegn om $a$"],
      explanation: "Begge kreves: kontinuitet i punktet OG at grensen av $f'$ finnes. Uten kontinuitet kan $f$ hoppe i $a$ selv om $f'$ har grense fra sidene.",
    },
    {
      question: "I beviset for «deriverbar ⇒ kontinuerlig» skrives $f(x)-f(a)$ som:",
      options: ["$\\dfrac{f(x)-f(a)}{x-a}\\cdot(x-a)$, som går mot $f'(a)\\cdot 0=0$", "$f'(a)(x-a) + f(a)$, som går mot $f(a)$ når $x\\to a$", "$\\dfrac{f(x)-f(a)}{x-a}\\cdot(x-a)$, som går mot $f'(a)$ når $x\\to a$", "$f'(x)\\cdot(x-a)$, som går mot $0$ fordi $f'$ er begrenset"],
      explanation: "Trikset er å gange og dele med $x-a$: første faktor → $f'(a)$ (sekantformen), andre → $0$, så produktet → $0$ og dermed $f(x)\\to f(a)$.",
    },
    {
      question: "Fasitpraksis i skjøtepunkt-oppgaver: hvorfor holder det ikke å regne bare høyresidig differansekvotient?",
      options: ["Deriverbarhet i et indre punkt krever at begge ensidige grenser finnes og er like", "Fordi venstresiden alltid har en annen formel enn høyresiden i skjøten", "Det holder — høyregrensen bestemmer $f'(a)$ alene når funksjonen er kontinuerlig i punktet", "Fordi høyregrensen bare finnes når funksjonen er lineær på den siden"],
      explanation: "Én side er et halvt svar: den tosidige grensen finnes bare når venstre og høyre grense begge finnes og er like. Kontinuitet endrer ikke det.",
    },
    {
      question: "For $f(x)=\\sqrt{x}$ gir definisjonen $f'(9)$ via hvilket grep?",
      options: ["Utvid med konjugatet $\\sqrt{9+h}+3$ og forkort $h$", "Bruk L'Hôpital på $\\frac{\\sqrt{9+h}-3}{h}$ etter å ha markert $[0/0]$", "Skriv $\\sqrt{9+h}\\approx 3+\\frac{h}{6}$ og les av koeffisienten", "Faktoriser telleren som $(\\sqrt{h}-3)(\\sqrt{h}+3)$ og forkort"],
      explanation: "Konjugatgrepet gir $\\frac{1}{\\sqrt{9+h}+3}\\to\\frac16$. L'Hôpital ville brukt derivertregelen for kvadratrot — sirkulært når det er den deriverte vi skal etablere.",
    },
    {
      question: "Grensen $\\lim_{x\\to 5}\\frac{x^2-25}{x-5}$ tolket som derivert er:",
      options: ["$f'(5)$ for $f(x)=x^2$", "$f'(25)$ for $f(x)=x^2$", "$f'(5)$ for $f(x)=\\sqrt{x}$", "$f'(0)$ for $f(x)=x^2-25$"],
      explanation: "Mønsteret $\\frac{f(x)-f(a)}{x-a}$ med $f(x)=x^2$, $a=5$, $f(5)=25$. Verdien er $\\lim(x+5)=10$.",
    },
    {
      question: "$f(x)=x|x|$. Differansekvotienten i $0$ er $h|h|/h=|h|$. Konklusjonen er:",
      options: ["$f$ er deriverbar i $0$ med $f'(0)=0$", "$f$ er ikke deriverbar i $0$, siden $|h|$ har knekk i $0$", "$f$ er deriverbar i $0$ med $f'(0)=1$ fra høyre og $-1$ fra venstre", "$f$ er ikke deriverbar i $0$, fordi $|x|$ ikke er det"],
      explanation: "$|h|\\to 0$ fra begge sider, så grensen finnes og er $0$. At faktoren $|x|$ alene er ikke-deriverbar smitter ikke — det er produktets differansekvotient som teller.",
    },
    {
      question: "$f(x)=\\sqrt[3]{x}$ i $x=0$: differansekvotienten er $h^{-2/3}\\to+\\infty$. Hva betyr det?",
      options: ["Ikke deriverbar — grafen har vertikal tangent i origo", "Deriverbar med $f'(0)=+\\infty$ som gyldig verdi", "Ikke deriverbar — grafen har et hjørne med to tangentretninger i origo", "Ikke kontinuerlig i $0$, og dermed ikke deriverbar"],
      explanation: "Grensen er uegentlig, så $f'(0)$ finnes ikke. Geometrien er uendelig bratthet (vertikal tangent), ikke et hjørne — og $\\sqrt[3]{x}$ er kontinuerlig i $0$.",
    },
    {
      question: "Skjøten $f(x)=ax+b$ for $x<2$, $f(x)=x^2-x$ for $x\\ge2$ skal bli deriverbar i $2$. Likningssettet er:",
      options: ["$2a+b=2$ og $a=3$", "$2a+b=2$ og $a=2$", "$a+b=2$ og $a=3$", "$2a+b=3$ og $a=2$"],
      explanation: "Kontinuitet: $2a+b=f(2)=2$. Derivert: høyresidig differansekvotient av $x^2-x$ i $2$ er $3$, og venstre gren har stigningstall $a$ — så $a=3$, $b=-4$.",
    },
    {
      question: "Når er derivasjonsreglene (og ikke definisjonen) lovlig verktøy?",
      options: ["Der funksjonen er gitt ved én pen formel på et åpent intervall rundt punktet", "Alltid — derivasjonsreglene og definisjonen er likeverdige bevis i alle typer punkter", "Aldri i MAT111 — alle deriverte skal føres via differansekvotienten", "Bare når oppgaven eksplisitt oppgir at funksjonen er kontinuerlig"],
      explanation: "Reglene gjelder der forutsetningene deres holder — på åpne intervaller med én formel. I skjøte-/spesialpunkter, og der oppgaven ber om definisjonen, er differansekvotienten det som gjelder.",
    },
    {
      question: "En graf har entydig, ikke-vertikal tangent i $(a,f(a))$. Hvilket utsagn er riktig?",
      options: ["Sekantene gjennom punktet dreier mot tangenten når det andre punktet nærmer seg", "Tangenten skjærer alltid grafen i nøyaktig ett punkt, nemlig tangeringspunktet selv", "Funksjonen må være deriverbar på et helt intervall rundt $a$", "Tangentens stigningstall er gjennomsnittet av de ensidige deriverte"],
      explanation: "Tangenten er per definisjon grensestillingen til sekantene. En tangent kan fint skjære grafen flere steder, og deriverbarhet i ett punkt sier ikke noe om nabopunktene.",
    },
  ],
  'mat111-uib-3-2': [
    {
      question: "Signaturoppgavens steg 1 (kontinuitet i $0$ for $x^k\\cos(1/x^m)$): hva SKAL stå i føringen?",
      options: ["Begrensetheten $|\\cos(1/x^m)|\\le1$, skvisen mellom $\\pm|x|^k$, og koblingen til $f(0)$", "Grensen regnet ut med L'Hôpital etter markert $[0/0]$-form, og deretter koblingen til $f(0)$", "At $\\cos$ er kontinuerlig overalt, så sammensetningen er kontinuerlig i $0$", "En verditabell som viser at $f(x)$ nærmer seg $0$ fra begge sider av origo"],
      explanation: "Skvis med uttalt begrensethet er malen — L'Hôpital passer ikke (ingen brøkform), og kontinuitet av cos hjelper ikke i origo der $1/x^m$ sprenger.",
    },
    {
      question: "Steg 2 (deriverbarhet i $0$): differansekvotienten for $f(x)=x^k\\sin(1/x^m)$, $f(0)=0$, er",
      options: ["$h^{k-1}\\sin(1/h^m)$", "$h^{k}\\sin(1/h^m)$", "$k h^{k-1}\\sin(1/h^m) - m h^{k-m-1}\\cos(1/h^m)$", "$h^{k-1}\\sin(1/h^{m-1})$"],
      explanation: "$\\frac{f(h)-f(0)}{h} = \\frac{h^k\\sin(1/h^m)}{h} = h^{k-1}\\sin(1/h^m)$. Svaret $k h^{k-1}\\sin(1/h^m) - m h^{k-m-1}\\cos(1/h^m)$ er derivertformelen for $x\\neq0$ — feil verktøy i punktet.",
    },
    {
      question: "$f(x)=x\\sin(1/x)$, $f(0)=0$. Fasitkonklusjonen i $0$ er:",
      options: ["Kontinuerlig, men ikke deriverbar — kvotienten $\\sin(1/h)$ oscillerer", "Verken kontinuerlig eller deriverbar — $\\sin(1/x)$ har ingen grense i $0$", "Både kontinuerlig og deriverbar — skvisen gir $f'(0)=0$ som vanlig", "Deriverbar, men ikke kontinuerlig — kvotienten har grensen $0$"],
      explanation: "$k=1$: skvisen $|f(x)|\\le|x|$ gir kontinuitet, men differansekvotienten $\\sin(1/h)$ har ingen grense. «Deriverbar men ikke kontinuerlig» er umulig uansett.",
    },
    {
      question: "$f(x)=x^2\\sin(1/x)$, $f(0)=0$ — standardmoteksemplet. Hva viser det?",
      options: ["At $f$ kan være deriverbar i $0$ selv om $\\lim_{x\\to0}f'(x)$ ikke finnes", "At $f$ kan være kontinuerlig i $0$ uten å være deriverbar der", "At $\\lim_{x\\to0}f'(x)$ kan finnes uten at $f$ er deriverbar i $0$", "At en deriverbar funksjon alltid har kontinuerlig derivert nær origo"],
      explanation: "$f'(0)=0$ via kvotienten $h\\sin(1/h)$, mens $f'(x)=2x\\sin(1/x)-\\cos(1/x)$ oscillerer uten grense. Det er nettopp kjernefellens moteksempel.",
    },
    {
      question: "Eksponentregnskapet: $f(x)=x^k\\sin(1/x^m)$ er deriverbar i $0$ nøyaktig når",
      options: ["$k\\ge2$", "$k\\ge1$", "$k\\ge m$", "$k\\ge m+2$"],
      explanation: "Kvotienten $h^{k-1}\\sin(1/h^m)$ skvises til $0$ når $k-1\\ge1$. Kravet $k\\ge1$ er kontinuitet, og $k\\ge m+2$ er kontinuerlig derivert — ikke deriverbarhet.",
    },
    {
      question: "Eksponentregnskapet: $f'$ er kontinuerlig i $0$ nøyaktig når",
      options: ["$k\\ge m+2$", "$k\\ge2$", "$k\\ge m$", "$k\\ge 2m$"],
      explanation: "Det kritiske cos-leddet $m\\,x^{k-m-1}\\cos(1/x^m)$ trenger eksponent $k-m-1\\ge1$ for å skvises, altså $k\\ge m+2$.",
    },
    {
      question: "Hvorfor er det ugyldig å «bevise» $f'(0)$ ved å derivere formelen $x^2\\sin(1/x)$ og sette inn $x=0$?",
      options: ["Formelen for $f'$ er utledet for $x\\neq0$ og sier ingenting om punktet $0$ selv", "Fordi produktregelen ikke gjelder for produkter med trigonometriske faktorer", "Fordi $\\sin(1/x)$ ikke er definert i $0$, så $f$ er ikke kontinuerlig der", "Det er gyldig, men bare dersom man også markerer formen $[0/0]$ først"],
      explanation: "Derivasjonsreglene gjelder på åpne intervaller der forutsetningene holder — utenfor origo. I selve punktet finnes bare definisjonen (og formelen gir uansett ikke mening i $x=0$).",
    },
    {
      question: "I skjøteparameter-oppgaven «bestem $a,b$ for kontinuitet og deriverbarhet i skjøten» kommer likningene fra:",
      options: ["Én likning fra like verdier i skjøten, én fra like ensidige deriverte", "To likninger fra å sette de to grenformlene lik hverandre i to punkter", "Én likning fra $f(a)=0$ og én fra $f'(a)=0$ i skjøtepunktet", "Én likning fra like verdier og én fra like andrederiverte i skjøten"],
      explanation: "Kontinuitet = verdibetingelse, deriverbarhet = derivertbetingelse — én av hver per skjøtepunkt. Å blande dem er en av de dokumenterte feilene.",
    },
    {
      question: "For å vise at $\\lim_{h\\to0}\\cos(1/h^2)$ ikke finnes, bruker fasit:",
      options: ["To følger mot $0$ som gir verdiene $1$ og $-1$", "Skvis mellom $-1$ og $1$, som viser at grensen er $0$", "L'Hôpital på $\\cos(1/h^2)$ etter markert $[\\infty/\\infty]$", "At $\\cos$ er begrenset, så grensen må være et tall i $[-1,1]$"],
      explanation: "Følgene $(2\\pi n)^{-1/2}$ og $(\\pi+2\\pi n)^{-1/2}$ gir $1$ og $-1$ — to verdier, ingen grense. Skvis viser bare begrensethet, ikke konvergens.",
    },
    {
      question: "$f(x)=x^3\\cos(1/x)$, $f(0)=0$. Hva er riktig om $f'$ i $0$?",
      options: ["$f'(0)=0$, og $f'$ er kontinuerlig i $0$ siden begge ledd i $f'(x)$ skvises", "$f'(0)=0$, men $f'$ er diskontinuerlig i $0$ på grunn av cos-leddet", "$f'(0)$ finnes ikke — kvotienten $h^2\\cos(1/h)$ oscillerer uten grense", "$f'(0)=0$, men kontinuiteten til $f'$ kan ikke avgjøres uten mer informasjon"],
      explanation: "$k=3$, $m=1$: $k\\ge m+2$, så $f'(x)=3x^2\\cos(1/x)+x\\sin(1/x)$ skvises leddvis til $0=f'(0)$ — kontinuerlig derivert.",
    },
    {
      question: "Hva er forskjellen på grensene $f'(0)$ og $\\lim_{x\\to0}f'(x)$?",
      options: ["Den første er grensen av differansekvotienter i $0$; den andre er grensen av derivertfunksjonen utenfor $0$", "Ingen — de er per definisjon samme grense skrevet på to måter", "Den første finnes bare i de tilfellene der den andre finnes, men de to kan ha ulik verdi", "Den andre er alltid lettest å regne, og er den fasit foretrekker som bevis"],
      explanation: "To ulike grenser av to ulike uttrykk. De sammenfaller når grense-av-derivert-setningens forutsetninger holder — ellers kan den ene finnes uten den andre.",
    },
    {
      question: "Skjøten $f(x)=ax+b$ ($x\\le0$), $f(x)=x^2\\cos(1/x)$ ($x>0$) skal bli deriverbar i $0$. Fasit:",
      options: ["$a=0$, $b=0$", "$a=1$, $b=0$", "$a=0$, $b=1$", "$a$ og $b$ kan velges fritt — høyregrenen er uansett deriverbar"],
      explanation: "Kontinuitet: høyregrensen er $0$ (skvis), så $b=0$. Derivert: høyresidig kvotient $h\\cos(1/h)\\to0$, venstre gir $a$ — så $a=0$.",
    },
    {
      question: "Grense-av-derivert-setningen kan i signaturoppgavene brukes til å:",
      options: ["Bekrefte deriverbarhet i skjøter der $f$ er kontinuerlig og $\\lim f'(x)$ finnes", "Avkrefte deriverbarhet i punkter der grensen av $f'$ ikke eksisterer fra noen av sidene", "Erstatte kontinuitetssjekken, siden setningen forutsetter mindre enn den", "Vise at $f'$ er kontinuerlig i punktet så snart $f'(a)$ eksisterer der"],
      explanation: "Setningen virker bare positivt: kontinuitet + eksisterende grense av $f'$ gir $f'(a)$. Den kan aldri avkrefte, og kontinuiteten er en av forutsetningene.",
    },
    {
      question: "«Vis at $f$ er kontinuerlig i $0$» — hvilken avslutning gjør kontinuitetsbeviset komplett?",
      options: ["«… så $\\lim_{x\\to0}f(x) = 0 = f(0)$, og $f$ er kontinuerlig i $0$»", "«… så grensen eksisterer, og dermed er $f$ kontinuerlig i $0$»", "«… så $f$ er begrenset nær $0$, og dermed kontinuerlig der»", "«… så begge ensidige grenser finnes, og $f$ er kontinuerlig i $0$»"],
      explanation: "Kontinuitet er likheten mellom grense og funksjonsverdi. Eksisterende grense (eller like ensidige grenser) uten kobling til $f(0)$ er et ufullført bevis.",
    },
    {
      question: "$f(x)=x^4\\sin(1/x^3)$, $f(0)=0$: $f'(x)=4x^3\\sin(1/x^3)-3\\cos(1/x^3)$ for $x\\neq0$. Hva gjelder i $0$?",
      options: ["$f'(0)=0$ finnes, men $\\lim_{x\\to0}f'(x)$ finnes ikke", "$f'(0)$ finnes ikke, siden cos-leddet i $f'$ oscillerer uten demping", "$f'(0)=-3$, som er grensen av det dominerende cos-leddet", "$f'(0)=0$ og $\\lim_{x\\to0}f'(x)=0$ — begge skvises til null"],
      explanation: "Kvotienten $h^3\\sin(1/h^3)$ skvises til $0$, så $f'(0)=0$. Men $-3\\cos(1/x^3)$ har konstant amplitude ($k-m-1=0$) — ingen grense for $f'$.",
    },
    {
      question: "Hvilken følge egner seg til å treffe toppene til $\\cos(1/x^3)$ når $x\\to0^+$?",
      options: ["$x_n=(2\\pi n)^{-1/3}$", "$x_n=(2\\pi n)^{-3}$", "$x_n=2\\pi n$", "$x_n=(\\pi/2+2\\pi n)^{-1/3}$"],
      explanation: "Vi vil ha $1/x_n^3 = 2\\pi n$, altså $x_n=(2\\pi n)^{-1/3}$. Alternativet med $\\pi/2$ treffer nullpunktene til cos, ikke toppene.",
    },
    {
      question: "I oppgaven «bestem $a,b$ slik at $g(x)=ax^2+b$ ($x\\le1$), $\\ln x+2$ ($x>1$) blir deriverbar i $1$» inngår standardgrensen:",
      options: ["$\\lim_{h\\to0}\\dfrac{\\ln(1+h)}{h}=1$, som gir høyresidig derivert $1$", "$\\lim_{h\\to0}\\dfrac{e^h-1}{h}=1$, som gir høyresidig derivert $1$", "$\\lim_{h\\to0}\\dfrac{\\ln(1+h)}{h}=0$, som gir høyresidig derivert $0$", "$\\lim_{h\\to0}\\dfrac{\\sin h}{h}=1$, som gir venstresidig derivert $1$"],
      explanation: "Høyresidig differansekvotient blir $\\frac{\\ln(1+h)}{h}\\to1$. Likningene er $a+b=2$ og $2a=1$, så $a=\\frac12$, $b=\\frac32$.",
    },
    {
      question: "Tidsdisponering på eksamen: hva er lurest når (c)-spørsmålet «er $f'$ kontinuerlig i $0$?» dukker opp etter (a) og (b)?",
      options: ["Regn $f'(x)$ med reglene for $x\\neq0$ og undersøk grensen — uten å endre svaret i (b)", "Gå tilbake og juster svaret i (b) slik at det stemmer overens med grensen av $f'$", "Svar med eksponentregnskapet alene — tabellen er gyldig føring i alle tre delspørsmål", "Dropp (c): delspørsmålet gir erfaringsmessig for få poeng i forhold til tidsbruken"],
      explanation: "(c) er et selvstendig spørsmål om $\\lim f'(x)$ — reglene er lovlige utenfor punktet. (b) står uansett; tabellen er kontrollverktøy, ikke føring; og (c) er ofte selve karakterskillet.",
    },
  ],
  'mat111-uib-3-3': [
    {
      question: "Første linje i fasit for «finn tangenten til kurven i punktet $(x_0,y_0)$» er:",
      options: ["Å sette punktet inn i kurvelikningen og vise at den stemmer", "Å derivere kurvelikningen implisitt og løse den for $y'$ med det samme", "Å løse kurvelikningen for $y$ slik at kurven blir eksplisitt", "Å skrive tangentformelen $y=y_0+y'(x_0)(x-x_0)$ med ukjent $y'$"],
      explanation: "Punktverifikasjonen kommer først — ligger ikke punktet på kurven, er resten meningsløst, og steget gir egen uttelling i løsningsforslagene.",
    },
    {
      question: "$\\dfrac{d}{dx}\\,y^3$ når $y$ er funksjon av $x$ er:",
      options: ["$3y^2\\,y'$", "$3y^2$", "$3x^2\\,y$", "$y^3\\,y'$"],
      explanation: "Kjerneregelen: ytre derivert $3y^2$ ganger kjernefaktoren $y'$. Uten $y'$ har man behandlet $y$ som uavhengig variabel — feilkilde nummer én.",
    },
    {
      question: "$\\dfrac{d}{dx}(xy)$ når $y=y(x)$ er:",
      options: ["$y + x\\,y'$", "$y'$", "$x\\,y'$", "$y - x\\,y'$"],
      explanation: "Produktregelen: $(xy)' = 1\\cdot y + x\\cdot y'$. Begge leddene skal med.",
    },
    {
      question: "På kurven $x^3+y^3=9$ er $y' = -x^2/y^2$. I punktet $(1,2)$ er tangentens stigningstall:",
      options: ["$-\\dfrac14$", "$-\\dfrac12$", "$\\dfrac14$", "$-4$"],
      explanation: "$y' = -1^2/2^2 = -1/4$. Fortegnet følger av minustegnet i formelen; $-4$ er den inverterte fellen.",
    },
    {
      question: "Horisontal tangent på en implisitt kurve med $y'=\\frac{\\text{teller}}{\\text{nevner}}$ finnes der:",
      options: ["Telleren er null, nevneren ikke — og punktet ligger på kurven", "Nevneren er null, telleren ikke — og punktet ligger på kurven", "Både teller og nevner er null samtidig i kurvepunktet", "Telleren er null — kurvelikningen trengs ikke i dette steget"],
      explanation: "Horisontal: teller null (og nevner ikke). Kandidatene MÅ settes inn i kurvelikningen — $y'$-formelen alene vet ikke hvor kurven er. Nevner null gir vertikal tangent.",
    },
    {
      question: "For å finne $y''$ i et punkt på $x^2+y^2=25$ gjør fasit følgende:",
      options: ["Deriverer relasjonen to ganger og setter inn $x$, $y$ og $y'$ til slutt", "Løser likningen for $y$, deriverer formelen to ganger og setter inn $x$", "Deriverer $y'=-x/y$ med kvotientregelen der $y$ behandles som konstant", "Setter inn punktet i relasjonen først og deriverer det som da står igjen"],
      explanation: "To derivasjonsrunder på relasjonen: $2x+2yy'=0$, så $2+2((y')^2+y\\,y'')=0$ — og tall inn helt til slutt. Å behandle $y$ som konstant mister kjernefaktoren.",
    },
    {
      question: "I rateoppgaver: hvorfor settes øyeblikkstallene inn ETTER derivasjonen?",
      options: ["Settes de inn før, deriverer man konstanter og ratene forsvinner", "Fordi tallene i oppgaven ofte er avrundet og ville gitt en unøyaktig derivert", "Av føringshensyn — matematisk gir begge rekkefølgene samme svar", "Fordi relasjonen bare gjelder i selve øyeblikket, ikke over tid"],
      explanation: "Relasjonen gjelder for alle $t$ og skal deriveres som funksjonslikning. Fryser du tallene først, er alt konstant og alle rater blir null — galt svar, ikke bare stygg føring.",
    },
    {
      question: "Stigemodellen: stige 5 m, $x^2+y^2=25$, $x=3$, $x'=0{,}3$ m/s. Da er $y'$:",
      options: ["$-0{,}225$ m/s — toppen synker", "$0{,}225$ m/s — toppen stiger", "$-0{,}4$ m/s — toppen av stigen synker", "$-2{,}25$ m/s — toppen synker"],
      explanation: "$y=4$ (3–4–5), og $y'=-xx'/y = -3\\cdot0{,}3/4 = -0{,}225$ m/s. Negativt fortegn = toppen på vei ned — tolkningen hører med i svaret.",
    },
    {
      question: "Synsvinkelmodellen $\\tan\\theta = h/d$ derivert mhp. $t$ gir:",
      options: ["$\\dfrac{\\theta'}{\\cos^2\\theta} = \\dfrac{h'}{d}$", "$\\theta' = \\dfrac{h'}{d}$", "$\\dfrac{\\theta'}{\\sin^2\\theta} = \\dfrac{h'}{d}$", "$\\theta'\\tan\\theta = \\dfrac{h'}{d}$"],
      explanation: "$(\\tan\\theta)' = \\theta'/\\cos^2\\theta$ via kjerneregelen. Å glemme $1/\\cos^2\\theta$-faktoren er samme feil som å glemme kjernefaktoren $y'$.",
    },
    {
      question: "Kuleballong: $V=\\frac43\\pi r^3$, $V'=100$ cm³/s, $r=5$ cm. Radien vokser med:",
      options: ["$\\dfrac{1}{\\pi}$ cm/s", "$\\dfrac{4}{\\pi}$ cm/s", "$\\dfrac{1}{4\\pi}$ cm/s", "$\\dfrac{100}{3\\pi}$ cm/s"],
      explanation: "$V'=4\\pi r^2 r'$ gir $r' = 100/(4\\pi\\cdot25) = 1/\\pi$ cm/s. Distraktorene svarer til å miste faktorer i $4\\pi r^2$.",
    },
    {
      question: "Hva er riktig konklusjonssetning når utregningen gir $y'(t) = -\\frac47$ km/t for bilens $y$-koordinat?",
      options: ["«$y$-koordinaten avtar med $\\frac47$ km/t i dette øyeblikket»", "«Svaret er $-\\frac47$» — tallet er tilstrekkelig som konklusjon", "«$y$-koordinaten øker med $\\frac47$ km/t i dette øyeblikket, siden raten er negativ»", "«Bilen bremser med $\\frac47$ km/t² i dette øyeblikket»"],
      explanation: "Fortegn tolkes som retning (negativ rate = avtar) og enheten oppgis. Nakent tall trekker; «bremser» blander rate av posisjon med akselerasjon.",
    },
    {
      question: "Kjegletank med $r=h/3$: hva gjøres med bibetingelsen?",
      options: ["Settes inn i volumformelen FØR derivasjonen, så $V$ blir funksjon av $h$ alene", "Settes inn etter derivasjonen, samtidig med at de andre øyeblikkstallene settes inn", "Deriveres separat og legges til: $V' = \\frac13\\pi(2rr'h + r^2h') + r'/3$", "Ignoreres — $r$ og $h$ er uavhengige rater som må måles hver for seg"],
      explanation: "Bibetingelsen gjelder alle $t$ og eliminerer $r$: $V=\\pi h^3/27$, så $V'=\\pi h^2 h'/9$. (Alternativt kan man derivere begge relasjonene — men da riktig, ikke som i tredje alternativ.)",
    },
    {
      question: "To biler fra samme kryss, $s^2=x^2+y^2$. Derivert mhp. $t$ gir:",
      options: ["$s\\,s' = x\\,x' + y\\,y'$", "$s' = x' + y'$", "$2s = 2x\\,x' + 2y\\,y'$", "$s'^2 = x'^2 + y'^2$"],
      explanation: "Alle tre variable er tidsavhengige: $2ss'=2xx'+2yy'$. Rater adderes ikke lineært, og Pytagoras gjelder ikke for ratene selv.",
    },
    {
      question: "I punktet $(1,2)$ på $x^2 - xy + y^2 = 3$ er $y' = \\frac{y-2x}{2y-x} = 0$. Det betyr:",
      options: ["Tangenten er horisontal i punktet", "Tangenten er vertikal i punktet", "Punktet ligger ikke på kurven likevel", "Kurven har ingen tangent i punktet"],
      explanation: "$y'=0$ er nettopp horisontal tangent. Vertikal tangent svarer til at nevneren $2y-x$ er null; her er den $3$.",
    },
    {
      question: "Hvorfor må vinkler måles i radianer i rateoppgaver med $\\theta'$?",
      options: ["Derivasjonsformlene for sin, cos og tan forutsetter radianer", "Fordi grader gir for store tall til å være praktiske i svaret", "Radianer og grader gir samme verdi av $\\theta'$, men radianer er den vanlige konvensjonen", "Fordi $\\cos^2\\theta$ bare kan regnes ut når $\\theta$ er i radianer"],
      explanation: "$(\\sin\\theta)'=\\cos\\theta$ osv. gjelder kun i radianer — i grader kommer en faktor $\\pi/180$ inn, og svaret i rad/s blir galt uten den.",
    },
    {
      question: "Fasit fører ofte rateoppgaver på 2–4 likeverdige måter. Hvilket par er et slikt gyldig metodevalg?",
      options: ["Implisitt derivasjon av relasjonen, eller eksplisitt kjerneregel-oppsett der én variabel er løst ut", "Implisitt derivasjon, eller å sette inn øyeblikkstallene først og derivere etterpå", "Kjerneregel-oppsett, eller å estimere raten numerisk fra to nærliggende tidspunkter", "Implisitt derivasjon, eller å anta at ratene er proporsjonale med størrelsene"],
      explanation: "Begge de første er eksakte og honoreres likt («Alternativt:»). Tall-før-derivasjon er den klassiske feilen, numerisk estimat er ikke eksakt føring, og proporsjonalitetsantakelsen er grunnløs.",
    },
    {
      question: "$y'' = -\\frac{1+(y')^2}{y}$ på sirkelen $x^2+y^2=25$. I $(3,4)$ med $y'=-\\frac34$ blir $y''$:",
      options: ["$-\\dfrac{25}{64}$", "$-\\dfrac{7}{16}$", "$\\dfrac{25}{64}$", "$-\\dfrac{1}{4}$"],
      explanation: "$1+(y')^2 = 1+\\frac{9}{16} = \\frac{25}{16}$, delt på $y=4$ med minus: $-\\frac{25}{64}$. Negativ $y''$ = konkav — øvre halvsirkel krummer ned, som den skal.",
    },
    {
      question: "Skyggeoppgaven ga $s = \\frac{2x}{3}$ og dermed $s' = 0{,}8$ m/s uansett posisjon. Hvorfor?",
      options: ["Relasjonen er lineær i $x$, så raten blir konstant", "Fordi formlikheten mellom trekantene bare gjelder i ett bestemt øyeblikk", "Det er en avrunding — raten varierer svakt med posisjonen", "Fordi skyggespissen alltid beveger seg like fort som personen"],
      explanation: "Formlikheten gir en lineær sammenheng $s=\\frac23 x$ for alle $t$, så $s'=\\frac23 x'$ er konstant. Skyggespissen går derimot med $x'+s'=2{,}0$ m/s — fortere enn personen.",
    },
  ],
  'mat111-uib-3-4': [
    {
      question: "Standardbegrunnelsen i fasit for at $f^{-1}$ finnes er:",
      options: ["$f'$ har fast fortegn på intervallet, så $f$ er strengt monoton og dermed én-til-én", "$f$ er kontinuerlig på hele intervallet, så hver eneste verdi i verdimengden treffes minst én gang", "$f$ er deriverbar på intervallet, og deriverbare funksjoner har alltid invers", "$f(x)\\to\\pm\\infty$ i hver sin ende, så funksjonen dekker alle verdier"],
      explanation: "Monotonikriteriet: fast fortegn på $f'$ over et intervall gir streng monotoni, som gir én-til-én. Kontinuitet/grenser gir bare verdimengden, ikke entydighet.",
    },
    {
      question: "Skal du regne $(f^{-1})'(4)$ for $f(x)=x^7+x+2$, er første steg:",
      options: ["Å løse $f(a)=4$ — her gir $a=1$ treff", "Å regne $f'(4)$ og invertere: svaret er $1/f'(4)$", "Å finne et uttrykk for $f^{-1}$ og derivere det", "Å regne $f''(1)$ for å sjekke at inversen er deriverbar"],
      explanation: "«Finn $a$ først»: $f(1)=1+1+2=4$, så $(f^{-1})'(4) = 1/f'(1) = 1/8$. Å derivere i $b=4$ er sjangerens klassiske feil, og noe uttrykk for $f^{-1}$ finnes ikke elementært.",
    },
    {
      question: "Definisjonsmengden til $f^{-1}$ er alltid:",
      options: ["Verdimengden til $f$", "Definisjonsmengden til $f$", "Alle $x$ der inversuttrykkets formel er definert", "Hele $\\mathbb{R}$, så sant $f$ er strengt monoton"],
      explanation: "$D_{f^{-1}} = V_f$ — mengdene bytter plass. «Alt formelen tåler» kan være større enn $V_f$; da beskriver formelen ikke lenger inversen.",
    },
    {
      question: "$f(x) = (x-2)^2+3$ på $[2,\\infty)$. Inversen er:",
      options: ["$f^{-1}(x) = 2+\\sqrt{x-3}$ med $D_{f^{-1}} = [3,\\infty)$", "$f^{-1}(x) = 2-\\sqrt{x-3}$ med $D_{f^{-1}} = [3,\\infty)$", "$f^{-1}(x) = 2+\\sqrt{x-3}$ med $D_{f^{-1}} = [2,\\infty)$", "$f^{-1}(x) = 2+\\sqrt{x+3}$ med $D_{f^{-1}} = [-3,\\infty)$"],
      explanation: "På $[2,\\infty)$ er $x-2\\ge0$, så plussroten gjelder; og $V_f=[3,\\infty)$ blir definisjonsmengden. Minusroten hører til venstre parabelgren.",
    },
    {
      question: "Hvorfor beviser $f'>0$ på hele definisjonsmengden IKKE at $\\tan x$ er én-til-én på $(-\\frac{\\pi}{2},\\frac{\\pi}{2})\\cup(\\frac{\\pi}{2},\\frac{3\\pi}{2})$?",
      options: ["Monotonikriteriet gjelder bare på intervaller — over gapet kan verdiene gjenta seg", "Fordi $\\tan x$ ikke er deriverbar i $\\frac{\\pi}{2}$, som ligger mellom grenene", "Fordi $f'>0$ bare gir voksende, og voksende funksjoner kan bruke verdier flere ganger", "Fordi $\\tan x$ er ubegrenset, og ubegrensede funksjoner har ikke invers"],
      explanation: "$\\tan0=\\tan\\pi=0$ tross positivt $f'$ overalt i mengden: kriteriet forutsetter en sammenhengende mengde. ($\\frac{\\pi}{2}$ ligger ikke i mengden, så deriverbarhet der er irrelevant.)",
    },
    {
      question: "$(f^{-1})'(b) = 1/f'(a)$ utledes ved å:",
      options: ["Derivere identiteten $f(f^{-1}(x))=x$ med kjerneregelen", "Speile tangentlikningen om linja $y=x$ og lese av konstantleddet", "Bruke differansekvotienten på $f^{-1}$ og bytte teller og nevner", "Derivere identiteten $f^{-1}(x)\\cdot f(x) = x$ med produktregelen"],
      explanation: "Kjerneregelen på $f(f^{-1}(x))=x$ gir $f'(f^{-1}(b))\\cdot(f^{-1})'(b)=1$. (Speilingsargumentet er intuisjonen, differansekvotient-byttet kan gjøres stringent — men kjerneregelen er standardføringen.)",
    },
    {
      question: "$f$ er strengt voksende med $f(3)=8$ og $f'(3)=4$. Da er $(f^{-1})'(8)$:",
      options: ["$\\dfrac14$", "$\\dfrac18$", "$4$", "$\\dfrac13$"],
      explanation: "$a=3$, $b=8$: $(f^{-1})'(8)=1/f'(3)=1/4$. $1/8$ deriverer i feil punkt; $4$ glemmer inverteringen.",
    },
    {
      question: "Største intervall rundt $x=3$ der $f(x)=x^3-12x$ har invers ($f'=3(x-2)(x+2)$):",
      options: ["$[2,\\infty)$", "$(2,\\infty)$", "$[-2,2]$", "$[3,\\infty)$"],
      explanation: "$x=3$ ligger i den voksende delen $x>2$; endepunktet $x=2$ kan tas med siden ett nullpunkt for $f'$ ikke ødelegger streng monotoni. $[-2,2]$ er den avtakende delen rundt origo.",
    },
    {
      question: "Hvorfor kan endepunktet med $f'=0$ tas med i inverterbarhetsintervallet?",
      options: ["Streng monotoni tåler at $f'$ er null i isolerte punkter — som $x^3$ i origo viser", "Fordi $f'=0$ i et punkt betyr at funksjonen er konstant bare i det punktet", "Det kan det ikke — intervallet må være åpent der $f'$ er null", "Fordi fortegnsskjemaet bare gjelder for indre punkter i intervallet"],
      explanation: "$x^3$ er strengt voksende på hele $\\mathbb{R}$ tross $f'(0)=0$: isolerte nullpunkter for $f'$ bryter ikke monotonien, så lenge fortegnet ellers er fast.",
    },
    {
      question: "Tangenten til grafen til $f^{-1}$ i punktet der $x=3$, for $f(x)=x^3+2x$ (med $f(1)=3$, $f'(1)=5$), er:",
      options: ["$y = 1 + \\frac15(x-3)$", "$y = 3 + \\frac15(x-1)$", "$y = 1 + 5(x-3)$", "$y = 1 + \\frac{1}{29}(x-3)$"],
      explanation: "Punktet er $(3, f^{-1}(3)) = (3,1)$, stigningstallet $(f^{-1})'(3) = 1/f'(1) = 1/5$. Andre alternativ blander punktene; $1/29$ er $1/f'(3)$ — feil punkt.",
    },
    {
      question: "$g(x) = \\ln(x^2+4x+5)$ på $[-2,\\infty)$ har invers $g^{-1}(x) = -2+\\sqrt{e^x-1}$. Definisjonsmengden til $g^{-1}$ er:",
      options: ["$[0,\\infty)$, siden $g$ vokser fra $g(-2)=\\ln 1 = 0$", "$\\mathbb{R}$, siden $e^x-1$ kan regnes ut for alle $x$", "$[1,\\infty)$, siden argumentet i logaritmen er minst $1$", "$(-2,\\infty)$, siden det er definisjonsmengden til $g$"],
      explanation: "$V_g = [0,\\infty)$ (voksende fra $\\ln1=0$). Formelen tåler alle $x$ med $e^x\\ge1$, dvs. $x\\ge0$ — som her stemmer med $V_g$; men begrunnelsen skal gå via verdimengden.",
    },
    {
      question: "Grafen til $f$ inneholder punktet $(a,b)$. Grafen til $f^{-1}$ inneholder da:",
      options: ["$(b,a)$ — speiling om linja $y=x$", "$(-a,-b)$ — speiling om origo", "$(a,-b)$ — speiling om $x$-aksen", "$(1/a,\\,1/b)$ — invertering av koordinatene"],
      explanation: "Invertering bytter rollene til inn- og utverdi: $f(a)=b$ betyr $f^{-1}(b)=a$. Grafisk er det speiling om $y=x$ — ikke fortegns- eller brøkinvertering.",
    },
    {
      question: "Hvilket utsagn om formelen $(f^{-1})'(b)=1/f'(a)$ sitt gyldighetskrav er riktig?",
      options: ["Den krever $f'(a)\\neq0$ — der tangenten til $f$ er horisontal, får inversen vertikal tangent", "Den krever $f'(b)\\neq0$ — ellers ender man med å dele på null i selve formelen", "Den gjelder alltid når $f^{-1}$ finnes, uansett verdien av $f'(a)$", "Den krever at $f''(a)$ eksisterer, siden inversen ellers ikke blir glatt"],
      explanation: "Divisjonen krever $f'(a)\\neq0$. Geometrisk: horisontal tangent på $f$-siden speiles til vertikal tangent på inverssiden — der er inversen ikke deriverbar.",
    },
    {
      question: "«$f(x)=x^5+4x-2$ er én-til-én» — hvilken føring er komplett?",
      options: ["«$f'(x)=5x^4+4\\ge4>0$ for alle $x$, så $f$ er strengt voksende på $\\mathbb{R}$ og dermed én-til-én»", "«$f$ er et polynom av odde grad, og alle polynomer av odde grad er én-til-én på hele $\\mathbb{R}$»", "«Grafen består horisontallinjetesten, noe en skisse på kalkulatoren bekrefter»", "«$f(0)=-2$ og $f(1)=3$ har ulike fortegn, så $f$ treffer hver verdi nøyaktig én gang»"],
      explanation: "Fast fortegn på $f'$ + monotonikriteriet er standardføringen. Odde grad er ikke nok ($x^3-x$ er odde og ikke én-til-én), skisse er ikke bevis, og fortegnsskifte gir eksistens av nullpunkt — ikke entydighet.",
    },
    {
      question: "$f(x)=x+e^x$: hvorfor kan $(f^{-1})'(1)$ regnes ut selv om $f^{-1}$ ikke har elementært uttrykk?",
      options: ["Formelen trenger bare punktet $a$ med $f(a)=1$ — her $a=0$ — og verdien $f'(0)$", "Fordi $f^{-1}$ alltid kan tilnærmes numerisk med vilkårlig god presisjon i en omegn om $x=1$", "Det kan den ikke — uten uttrykk for $f^{-1}$ finnes ingen eksakt derivert", "Fordi $e^x$ kan erstattes med sin tangent i $0$, som gjør likningen løsbar"],
      explanation: "$(f^{-1})'(1) = 1/f'(0) = 1/(1+e^0) = 1/2$ — formelen er punktvis og omgår hele uttrykksproblemet. Det er nettopp poenget med denne eksamenskonstruksjonen.",
    },
  ],
  'mat111-uib-3-5': [
    {
      question: "Fasitpraksisen krever at en monotonikonklusjon («$f$ vokser på …») dokumenteres. Hva er dokumentasjonen?",
      options: ["Et fortegnsskjema for $f'$ med intervaller, faktorenes fortegn og produktlinje", "En verditabell som viser at funksjonsverdiene øker gjennom flere valgte punkter", "En graftegning fra kalkulator som viser at kurven stiger på hele intervallet", "Utsagnet «$f'(x) > 0$» uten videre — fortegnet regnes som kjent fra uttrykket"],
      explanation: "Skjemaet ER dokumentasjonen; en konklusjon uten skjema er et føringstrekk selv når svaret er riktig. Verditabeller og kalkulatorgrafer beviser ingenting.",
    },
    {
      question: "Du har regnet riktig, men skrev monotonikonklusjonen uten fortegnsskjema. Hva sier løsningsforslagenes praksis?",
      options: ["Det er et føringstrekk — konklusjonen er udokumentert selv om den er korrekt", "Det er uproblematisk så lenge både uttrykket for $f'$ og konklusjonen stemmer", "Skjemaet kreves bare når $f'$ har mer enn to nullpunkter i intervallet man ser på", "Skjemaet kreves bare i oppgaver som eksplisitt sier «dokumentér med skjema»"],
      explanation: "H2016-typen anmerkninger gjelder nettopp manglende dokumentasjon: kravet gjelder alltid, uavhengig av antall nullpunkter og av oppgaveteksten.",
    },
    {
      question: "Hva kreves for at $x_0$ skal være et vendepunkt?",
      options: ["At $f''$ faktisk skifter fortegn i $x_0$ — dokumentert med fortegnsskjema", "At $f''(x_0) = 0$ — nullpunktet for den andrederiverte er selve definisjonen", "At både $f'(x_0) = 0$ og $f''(x_0) = 0$ er oppfylt i det samme punktet", "At grafen bytter fra å stige til å avta, eller omvendt, akkurat i $x_0$"],
      explanation: "$f''(x_0)=0$ gir bare en kandidat: $f(x)=x^4$ har $f''(0)=0$ uten vendepunkt ($f''=12x^2\\ge0$ på begge sider). Fortegnsskiftet er kravet.",
    },
    {
      question: "Hvilken funksjon er standardmoteksemplet mot «$f''(x_0)=0$ gir vendepunkt»?",
      options: ["$f(x) = x^4$ i $x_0 = 0$", "$f(x) = x^3$ i $x_0 = 0$", "$f(x) = e^{-x}$ i $x_0 = 0$", "$f(x) = 1/x$ i $x_0 = 0$"],
      explanation: "$x^4$ har $f''(0) = 0$, men $f'' = 12x^2 \\ge 0$ på begge sider — intet fortegnsskifte, intet vendepunkt. ($x^3$ HAR vendepunkt i origo.)",
    },
    {
      question: "Andrederiverttesten i et stasjonært punkt gir $f''(x_0) = 0$. Hva er riktig konklusjon?",
      options: ["Ingen konklusjon — fall tilbake på fortegnsskjemaet for $f'$", "Punktet er et vendepunkt, siden den andrederiverte er null der", "Punktet er verken maksimum eller minimum når testverdien blir null", "Punktet er et terrassepunkt, som for tredjegradsfunksjonens origo"],
      explanation: "$f''(x_0)=0$ er testens blindsone: alt kan skje ($x^4$ har minimum, $-x^4$ maksimum, $x^3$ ingen av delene). Skjemaet for $f'$ feller dommen.",
    },
    {
      question: "Hvilke forutsetninger krever ekstremalverdisetningen for å garantere globalt maksimum og minimum?",
      options: ["Kontinuerlig funksjon på et lukket, begrenset intervall $[a,b]$", "Deriverbar funksjon på et vilkårlig intervall med endepunkter", "Kontinuerlig funksjon på et åpent intervall $(a,b)$ av endelig lengde", "Strengt monoton og kontinuerlig funksjon på et begrenset område"],
      explanation: "Begge kravene trengs: kontinuitet OG lukket, begrenset intervall. Åpne render lar verdiene «rømme», og deriverbarhet er verken nødvendig eller tilstrekkelig.",
    },
    {
      question: "Kandidatlisten for globale ekstremalverdier på $[a,b]$ består av:",
      options: ["De kritiske punktene i det indre pluss begge randpunktene $a$ og $b$", "De kritiske punktene alene — randen fanges opp av fortegnsskjemaet", "Alle nullpunktene til $f$ sammen med nullpunktene til $f'$ i intervallet", "Punktene der $f'' = 0$, siden krumningen avgjør hvor ytterpunktene sitter"],
      explanation: "Randpunktene står IKKE i skjemaets indre og fanges ikke av $f'=0$ — de skal alltid med. Glemte randpunkter er en av de dokumenterte feilene.",
    },
    {
      question: "I kapitlets eksempel med $g(x) = x^3 - 3x^2 + 2$ på $[-1,4]$ ble globalt maksimum $18$. Hvor satt det?",
      options: ["I randpunktet $x = 4$ — utenfor alle de kritiske punktene", "I det lokale maksimumspunktet $x = 0$, der $g(0) = 2$", "I det kritiske punktet $x = 2$, der $g$ snur fra å avta til å vokse", "I randpunktet $x = -1$, som ga den største kandidatverdien"],
      explanation: "$g(4) = 18$ slo det lokale maksimumet $g(0) = 2$ klart — maksimum ligger påfallende ofte i randen, og uten randpunktene i kandidatlisten blir svaret galt.",
    },
    {
      question: "Globale ekstremalverdier skal undersøkes på et åpent eller ubegrenset område. Hva er FØRSTE grep i eksistensvurderingen?",
      options: ["Sjekk grensene for $f$ mot $\\pm\\infty$ og mot eventuelle åpne render", "Bruk ekstremalverdisetningen — den gjelder for alle kontinuerlige funksjoner", "Regn ut alle kritiske punkter; det største og minste av dem er svaret", "Sett opp fortegnsskjema for $f''$ og les eksistensen ut av krumningen"],
      explanation: "Uten lukket, begrenset intervall finnes ingen automatikk: grensene avgjør om verdiene «rømmer». EVS gjelder ikke her, og kritiske punkter alene er bare kandidater.",
    },
    {
      question: "For $f(x) = x^2e^{-x}$ på $\\mathbb{R}$ finnes ikke globalt maksimum. Hva er dokumentasjonen?",
      options: ["$\\lim_{x\\to-\\infty} x^2e^{-x} = \\infty$ — funksjonen blir så stor den vil", "$f$ har to kritiske punkter, og ingen av dem kan være globale samtidig", "$\\lim_{x\\to\\infty} x^2e^{-x} = 0$, så funksjonen dør ut og blir flat på høyre side", "$f(2) = 4e^{-2}$ er bare et lokalt maksimum fordi $f''(2)$ er negativ"],
      explanation: "Mot $-\\infty$ vokser begge faktorene — $f\\to\\infty$, så ingen verdi kan være størst. Grensen mot $+\\infty$ truer ikke maksimum, og lokale argumenter avgjør ikke det globale.",
    },
    {
      question: "Hva er et «positivt argument» for globalt minimum (som for $f(x) = x^2e^{-x}$)?",
      options: ["$f(x) \\ge 0$ for alle $x$, og verdien $0$ nås faktisk i et punkt", "$f'$ skifter fortegn fra minus til pluss i det aktuelle punktet", "$f$ er konveks i en omegn av punktet, så bunnen er den dypeste", "$f$ har bare ett kritisk punkt av minimumstype på hele området"],
      explanation: "«$f \\ge 0$ overalt og $f(x_0) = 0$» kan ikke underbys — minimum er bevist globalt. Fortegnsskifte og konveksitet gir bare LOKALE konklusjoner.",
    },
    {
      question: "Undersøkelsen viser at globalt maksimum ikke finnes. Hvordan leveres det i besvarelsen?",
      options: ["Som fullverdig konklusjon: «finnes ikke», med grensene som dokumentasjon", "Som et forbehold: oppgi det største lokale maksimumet som svar likevel", "Utelates — spørsmål om ekstremalverdier forutsetter alltid at de finnes", "Som en numerisk tilnærming av supremum med kalkulator, merket «ca.»"],
      explanation: "«Finnes ikke» er et ofte riktig svar — MED grensene som begrunnelse. Å levere det lokale maksimumet som globalt er nettopp feilen H2016-merknaden påpeker.",
    },
    {
      question: "Hva er riktig rekkefølge i optimeringsoppskriften?",
      options: ["Målfunksjon fra bibetingelse → deriver → kandidater → globalt-argument", "Deriver → målfunksjon fra bibetingelse → globalt-argument → kandidater", "Kandidater → deriver → målfunksjon fra bibetingelse → konklusjonssetning", "Målfunksjon fra bibetingelse → kandidater → deriver → svar med enhet"],
      explanation: "Bibetingelsen eliminerer variable FØR derivasjonen; kandidatene kommer av $f'=0$ pluss randen; globalt-argumentet avslutter. Uten siste steg er optimeringen uferdig.",
    },
    {
      question: "Optimering på et åpent, ubegrenset område som $(0,\\infty)$: hva kan globalt-argumentet være?",
      options: ["Monotoni ($S' < 0$ før og $S' > 0$ etter kandidaten) eller grenser mot rendene", "Ekstremalverdisetningen — den sikrer eksistens også på åpne intervaller", "At kandidaten er det eneste stasjonære punktet i hele definisjonsområdet", "Andrederiverttesten i kandidaten, som viser at punktet er et lokalt minimum for $S$"],
      explanation: "EVS krever lukket, begrenset intervall. «Eneste kritiske punkt» og lokale tester løfter ikke alene til globalt — monotoni-/grenseargumentet gjør det.",
    },
    {
      question: "Grafgjenkjenning: kurve $A$ har toppunkt i $x=1$, og kurve $B$ krysser null i $x=1$ med fortegnsskifte fra pluss til minus. Hva er koblingen?",
      options: ["$B = A'$ — toppunkt hos $A$ svarer til nullpunkt med $+\\to-$ hos $B$", "$A = B'$ — nullpunkter hos $B$ gir alltid ekstremalpunkter hos $A$", "$B = A''$ — fortegnsskiftet hos $B$ betyr at $A$ har vendepunkt i $x=1$", "$A$ og $B$ er uavhengige kurver; ett felles punkt beviser ingen kobling"],
      explanation: "Der $f$ har toppunkt, krysser $f'$ null fra pluss til minus — det er begrunnelsessetningen fasit vil se: «$A$ har toppunkt i $x=1$ der $B$ skifter fortegn, så $B = A'$».",
    },
    {
      question: "Grafgjenkjenning med tre kurver ($f$, $f'$, $f''$): hva er lurest å finne først?",
      options: ["Den «mest deriverte» kurven — den hvis nullpunkter treffer de andres ekstremalpunkter", "Den originale funksjonen $f$ — den har alltid flest nullpunkter av de tre kurvene", "Kurven med størst verdier — derivasjon gjør alltid amplitudene mindre for hvert hakk", "Skjæringspunktene mellom kurvene — der er alle tre funksjonene per definisjon like"],
      explanation: "Arbeidsrekkefølgen fra kapitlet: identifiser den mest deriverte via nullpunkt-mot-ekstremalpunkt-koblingen. Antall nullpunkter og amplituder følger ingen fast regel.",
    },
    {
      question: "Når har en rasjonal funksjon skrå asymptote, og hvordan finnes den?",
      options: ["Når tellergraden er én mer enn nevnergraden — polynomdivisjon gir $y = kx+m$, og resten dør ut", "Når teller og nevner har nøyaktig samme grad — asymptoten er forholdet mellom de to ledende leddene", "Når nevneren har et reelt nullpunkt — asymptoten går gjennom det tilhørende bruddpunktet", "Når funksjonen mangler horisontal asymptote — den skrå finnes da alltid ved derivasjon"],
      explanation: "Tellergrad = nevnergrad + 1: divisjonen gir $f(x) = kx + m + r(x)$ med $r\\to0$. Lik grad gir horisontal asymptote, og nullpunkt i nevner gir vertikal — ikke skrå.",
    },
    {
      question: "I kapitlets eksempel 5 lå det lokale minimumet ($6$) HØYERE enn det lokale maksimumet ($2$). Hvorfor er det ingen selvmotsigelse?",
      options: ["«Lokalt» sammenligner bare med en omegn — og grenene ligger på hver sin side av asymptoten", "Fordi funksjonen er rasjonal; for polynomer ligger lokale maksima alltid over lokale minima", "Det ER en selvmotsigelse, som viser at fortegnsskjemaet var satt opp galt i det eksemplet", "Fordi punktene er terrassepunkter, ikke ekte ekstremalpunkter, når verdiene kommer i feil orden"],
      explanation: "Lokale begreper gjelder i en omegn; $x=1$ og $x=3$ konkurrerer aldri i samme omegn siden asymptoten $x=2$ skiller grenene. Skjemaet i eksemplet er korrekt.",
    },
  ],
  'mat111-uib-4-1': [
    {
      question: "Oppgaven lyder «vis at likningen har nøyaktig én løsning». Hva må besvarelsen inneholde?",
      options: ["To atskilte steg: eksistens (skjæringssetningen) og entydighet (monotoni eller Rolle-motsigelse)", "Ett samlet steg: fortegnsskifte pluss kontinuitet dekker både eksistens og entydighet i én og samme henvisning til skjæringssetningen", "En graftegning som viser at kurven bare krysser $x$-aksen én gang i intervallet", "En numerisk løsning med Newtons metode som viser hvilken verdi roten faktisk har"],
      explanation: "«Nøyaktig én» er to påstander: minst én (eksistens) og høyst én (entydighet). De krever hvert sitt teorem og føres som to atskilte steg — sjangerens klassiske poengtap er å levere bare det ene.",
    },
    {
      question: "Hvilket teorem bærer eksistens-steget i malen?",
      options: ["Skjæringssetningen: kontinuitet pluss fortegnsskifte gir en rot i intervallet", "Sekantsetningen: gjennomsnittlig endring antas som øyeblikkelig endring et sted", "Ekstremalverdisetningen: kontinuerlig på lukket intervall gir maks og min", "Rolles teorem: like endepunktverdier gir et punkt med vannrett tangent"],
      explanation: "Eksistens leveres av skjæringssetningen: $f$ kontinuerlig på $[a,b]$ og $f(a), f(b)$ med motsatt fortegn gir en rot i $(a,b)$. MVT/Rolle hører til entydighets- og hjelpefunksjonsargumentene.",
    },
    {
      question: "Hvilke forutsetninger krever Rolles teorem?",
      options: ["Kontinuerlig på $[a,b]$, deriverbar på $(a,b)$, og $f(a) = f(b)$", "Deriverbar på hele $[a,b]$, inkludert begge endepunktene, og $f(a) = f(b)$", "Kontinuerlig på $(a,b)$, deriverbar på $[a,b]$, og $f(a) \\cdot f(b) < 0$", "To ganger deriverbar på $(a,b)$ med $f'(a) = f'(b)$ i endepunktene"],
      explanation: "Kontinuitet kreves på det lukkede intervallet, deriverbarhet bare på det åpne, pluss like endepunktverdier. Fortegnsskifte ($f(a)f(b)<0$) hører til skjæringssetningen, ikke Rolle.",
    },
    {
      question: "Du har vist $f(0) < 0$, $f(1) > 0$ og at $f$ er kontinuerlig, og navngitt skjæringssetningen. Hva gjenstår for «nøyaktig én løsning»?",
      options: ["Entydigheten: vis at $f'$ har fast fortegn, eller kjør en Rolle-motsigelse", "Ingenting — fortegnsskiftet viser allerede at det bare finnes én rot", "Å regne ut roten med to desimaler slik at leseren ser hvilken løsning det er", "Å sjekke at $f$ også er deriverbar i endepunktene $x=0$ og $x=1$"],
      explanation: "Skjæringssetningen gir bare *minst én* rot. Entydigheten («høyst én») er en egen leveranse: monotoni via fortegnet på $f'$, eller motsigelse via Rolle.",
    },
    {
      question: "Hva sier sekantsetningen (MVT) for $f$ kontinuerlig på $[a,b]$ og deriverbar på $(a,b)$?",
      options: ["Det finnes minst én $c \\in (a,b)$ med $f'(c) = \\frac{f(b)-f(a)}{b-a}$", "Det finnes nøyaktig én $c \\in (a,b)$ med $f'(c) = \\frac{f(b)-f(a)}{b-a}$", "For alle $c \\in (a,b)$ gjelder ulikheten $f'(c) \\le \\frac{f(b)-f(a)}{b-a}$", "Det finnes minst én $c \\in (a,b)$ der den deriverte skifter fortegn"],
      explanation: "MVT lover *minst én* $c$ der øyeblikkelig endring er lik sekantstigningen — verken entydighet, en ulikhet for alle punkter eller noe fortegnsskifte.",
    },
    {
      question: "For $f(x) = 1/x$ på $[1,4]$ er sekantstigningen $-\\tfrac14$. Hvilken $c$ lover sekantsetningen?",
      options: ["$c = 2$, siden $-1/c^2 = -\\tfrac14$ gir $c^2 = 4$ og bare $c=2$ ligger i intervallet", "$c = \\tfrac52$, siden punktet sekantsetningen lover alltid ligger nøyaktig midt i intervallet, her midt mellom $1$ og $4$", "$c = 4$, siden det er der funksjonen $1/x$ har sin minste verdi på intervallet", "$c = \\sqrt2$, siden $1/c^2 = \\tfrac12$ gir det riktige stigningstallet der"],
      explanation: "$f'(c) = -1/c^2$ settes lik sekantstigningen $-\\tfrac14$: $c^2 = 4$, så $c = 2$ (mens $c = -2$ forkastes). MVT-punktet ligger generelt ikke i midten av intervallet.",
    },
    {
      question: "I entydighetssteget for $f(x) = x^3 + x + 1$: hva er Rolle-motsigelsen?",
      options: ["To røtter ville gitt en $c$ med $f'(c) = 0$, men $f'(x) = 3x^2 + 1 \\ge 1$ overalt", "To røtter ville gitt en $c$ med $f(c) = 0$, men $f$ er aldri null mellom røttene", "To røtter ville gitt $f(a) \\ne f(b)$, og da kan ikke Rolles teorem brukes i det hele tatt", "To røtter ville gitt en $c$ med $f''(c) = 0$, men $f''(x) = 6x$ er null bare i origo"],
      explanation: "Rolle på intervallet mellom to antatte røtter gir $f'(c) = 0$ for en mellomliggende $c$. Siden $f'(x) = 3x^2+1$ aldri er null, er antagelsen om to røtter umulig.",
    },
    {
      question: "Du skal vise at det finnes $c$ med $f'(c) = 2c$ når $f(0)=0$ og $f(1)=1$. Hvilken hjelpefunksjon er riktig?",
      options: ["$g(x) = f(x) - x^2$, fordi $g'(c) = 0$ da er nøyaktig utsagnet $f'(c) = 2c$", "$g(x) = f(x) - 2x$, fordi den deriverte av $2x$ er $2$, som står i målet", "$g(x) = f'(x) - 2x$, fordi målet handler om den deriverte av funksjonen $f$", "$g(x) = e^x f(x)$, fordi eksponentialfaktoren alltid fungerer i slike bevis"],
      explanation: "Målet $f'(c) - 2c = 0$ skal være $g'(c) = 0$; da må $g(x) = f(x) - x^2$. Sjekk endepunktene: $g(0) = 0$ og $g(1) = 1 - 1 = 0$, så Rolle gjelder. $e^x f(x)$ er riktig for mål av typen $f' + f = 0$.",
    },
    {
      question: "Mål: vis at det finnes $c$ med $f'(c) = -f(c)$, gitt $f(0) = f(1) = 0$. Hvilken $g$ gjør jobben?",
      options: ["$g(x) = e^x f(x)$, siden $g' = e^x(f + f')$ og $e^c \\neq 0$ kan deles bort", "$g(x) = f(x) + x$, siden den deriverte da blir $f'(x) + 1$, og Rolle gir dermed direkte punktet der $f'(c) = -f(c)$", "$g(x) = -f(x)$, siden minustegnet i målet må inn i selve hjelpefunksjonen", "$g(x) = \\ln f(x)$, siden logaritmen gjør om produktet til en sum av ledd"],
      explanation: "$g = e^x f$ gir $g' = e^x(f + f')$; Rolle gir $g'(c) = 0$, og siden $e^c \\ne 0$ følger $f'(c) = -f(c)$. Mønster: mål av typen $f' + kf = 0$ løses med faktoren $e^{kx}$.",
    },
    {
      question: "Hva er første grep når du skal vise $\\ln(1+x) < x$ for $x > 0$ med sekantsetningen?",
      options: ["Bruk MVT på $f(t) = \\ln(1+t)$ over $[0,x]$ og avgrens $f'(c) = \\frac{1}{1+c}$", "Derivér begge sider av ulikheten og sammenlikn de to deriverte direkte", "Sett inn $x = 1$ og $x = 2$ og vis at ulikheten stemmer i begge punktene", "Bruk Rolles teorem på $f(t) = \\ln(1+t) - t$ over intervallet $[0, x]$, siden endepunktverdiene der er like"],
      explanation: "Ulikhetsmaskinen: MVT på $[0,x]$ gir $\\ln(1+x) = \\frac{x}{1+c}$, og $\\frac{1}{1+c} < 1$ for $c > 0$. Talltesting beviser ingenting, og Rolle krever like endepunktverdier — som ikke foreligger her.",
    },
    {
      question: "Hvorfor gir $|f'| \\le K$ overalt et Lipschitz-estimat $|f(a) - f(b)| \\le K|a-b|$?",
      options: ["MVT skriver differansen som $f'(c)(a-b)$, og $|f'(c)| \\le K$ uansett hvor $c$ ligger", "Skjæringssetningen gir et punkt der $f$ er null, og derfra vokser $f$ høyst med $K$", "Integrasjon av ulikheten $|f'| \\le K$ gir automatisk $|f| \\le K$ på hele intervallet", "Fordi $f$ da er strengt monoton, og monotone funksjoner endrer seg høyst lineært"],
      explanation: "$f(a) - f(b) = f'(c)(a-b)$ for en $c$ mellom $a$ og $b$ (MVT); ta absoluttverdi og bruk skranken på $f'$. Poenget er at skranken gjelder for alle mulige $c$.",
    },
    {
      question: "Hvilket estimat følger av MVT for $f(x) = \\sin x$, der $|\\cos c| \\le 1$?",
      options: ["$|\\sin a - \\sin b| \\le |a - b|$ for alle reelle $a$ og $b$", "$|\\sin a - \\sin b| \\le |a| + |b|$ for alle reelle $a$ og $b$", "$|\\sin a - \\sin b| \\ge |a - b|$ for alle reelle $a$ og $b$", "$|\\sin a + \\sin b| \\le |a + b|$ for alle reelle $a$ og $b$"],
      explanation: "MVT: $\\sin a - \\sin b = \\cos(c)(a-b)$, og begrensetheten $|\\cos c| \\le 1$ gir Lipschitz-estimatet med konstant $K = 1$. Retningen på ulikheten er «høyst», ikke «minst».",
    },
    {
      question: "Hva er bevisideen for Rolles teorem?",
      options: ["Ekstremalverdisetningen gir maks/min; er ikke $f$ konstant, ligger et ekstremum i et indre punkt, der $f' = 0$", "Skjæringssetningen gir et nullpunkt for $f$ mellom $a$ og $b$, og der må også tangenten være vannrett", "Sekanten har stigning null, så den deriverte er null i alle punkter i hele intervallet $(a,b)$", "Definisjonen av den deriverte viser direkte at grensen blir null når endepunktverdiene er like"],
      explanation: "Kontinuitet på $[a,b]$ aktiverer ekstremalverdisetningen. Konstant $f$ gir $f' \\equiv 0$; ellers antas et ekstremum i et indre punkt $c$, og i et indre ekstremum med deriverbarhet er $f'(c) = 0$.",
    },
    {
      question: "Hvordan bevises sekantsetningen fra Rolles teorem?",
      options: ["Trekk sekanten fra $f$: $h(x) = f(x) - [f(a) + \\frac{f(b)-f(a)}{b-a}(x-a)]$ har $h(a)=h(b)=0$, så Rolle gir $h'(c)=0$", "Del intervallet i to like deler og bruk Rolles teorem på hver halvdel hver for seg", "Bruk skjæringssetningen på $f'$, som må skifte fortegn et sted mellom $a$ og $b$", "Speil funksjonen om sekanten slik at endepunktene bytter plass, og bruk symmetrien"],
      explanation: "Hjelpefunksjonen $h$ måler avstanden fra grafen ned til sekanten; den er null i begge ender, så Rolle gir $h'(c) = 0$ — som er nøyaktig $f'(c) = \\frac{f(b)-f(a)}{b-a}$.",
    },
    {
      question: "Grove overslag i eksistens-steget («$e < 3$, så $f(1) = e - 3 < 0$»): hva er fasitpraksisens holdning?",
      options: ["Full uttelling — testpunktene skal bare vise fortegnsskifte, ikke lokalisere roten presist", "Trekk — endepunktverdiene må regnes ut med minst to desimalers nøyaktighet", "Bare godkjent hvis overslaget suppleres med en kalkulatorverdi i en fotnote", "Underkjent — overslag er kun tillatt i entydighetssteget, ikke i eksistenssteget"],
      explanation: "Skjæringssetningen trenger bare motsatte fortegn, og et trygt overslag som $e < 3$ er fullgod matematikk. Presis lokalisering av roten er Newtons jobb i kap. 4.2.",
    },
    {
      question: "$f$ er to ganger deriverbar med $f(0) = f(1) = f(2) = 0$. Hvorfor har $f''$ et nullpunkt i $(0,2)$?",
      options: ["Rolle to ganger: først på $f$ over $[0,1]$ og $[1,2]$ (gir $f'(c_1)=f'(c_2)=0$), så på $f'$ over $[c_1,c_2]$", "Skjæringssetningen på $f''$: den skifter fortegn fordi funksjonen har tre nullpunkter", "MVT på $f$ over $[0,2]$ gir direkte et punkt der den andrederiverte er lik null", "Tre nullpunkter betyr at $f$ er et tredjegradspolynom, og da er $f''$ lineær med ett nullpunkt"],
      explanation: "Rolle i to etasjer: de to naboparene av nullpunkter gir to nullpunkter for $f'$, og Rolle på $f'$ mellom dem gir ett for $f''$. Generelt: $n+1$ nullpunkter for $f$ gir minst ett for $f^{(n)}$.",
    },
  ],
  'mat111-uib-4-2': [
    {
      question: "Hva er Newtons iterasjonsformel for likningen $f(x) = 0$?",
      options: ["$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$", "$x_{n+1} = x_n - \\dfrac{f'(x_n)}{f(x_n)}$", "$x_{n+1} = x_n + \\dfrac{f(x_n)}{f'(x_n)}$", "$x_{n+1} = f(x_n) - \\dfrac{x_n}{f'(x_n)}$"],
      explanation: "Steget er tangentens nullpunkt: løs $f(x_n) + f'(x_n)(x - x_n) = 0$. Bytter du teller og nevner, eller fortegnet, går iterasjonen gal vei — en klassisk hukommelsesfeil quizen skal lukke.",
    },
    {
      question: "Hva er den geometriske tolkningen av ett Newton-steg fra $x_n$?",
      options: ["Du følger tangenten i $(x_n, f(x_n))$ ned til der den krysser $x$-aksen", "Du følger sekanten gjennom de to siste iteratene ned til der den krysser $x$-aksen", "Du halverer intervallet der funksjonen er vist å skifte sitt fortegn", "Du projiserer punktet $(x_n, f(x_n))$ loddrett ned på $x$-aksen"],
      explanation: "Newton erstatter grafen med tangenten og hopper til dens nullpunkt. Sekantvarianten er en annen metode, og halvering er skjæringssetnings-basert intervallhalvering.",
    },
    {
      question: "$f$ er voksende og konveks ($f' > 0$, $f'' > 0$) på hele intervallet mellom iteratene og roten. Hva gjelder for $x_1, x_2, \\dots$?",
      options: ["De ligger til høyre for roten — tilnærmingene er for store", "De ligger til venstre for roten — tilnærmingene er for små", "De hopper annenhver side av roten i et spiralmønster", "De kan ligge på begge sider, avhengig av startpunktet $x_0$"],
      explanation: "Konveks graf ligger over tangentene, så tangent-nullpunktet lander der $f > 0$ — for voksende $f$ er det høyre side av roten. Regelen gjelder fra og med $x_1$ uansett hvor $x_0$ lå.",
    },
    {
      question: "Hvorfor er det utilstrekkelig å sjekke $f''(x_0) > 0$ i ett punkt for å konkludere «for stor»?",
      options: ["Argumentet sammenlikner tangent og graf på hele strekningen til roten — $f''$ kan skifte fortegn underveis", "Fordi $f''$ i ett punkt bare gir krumningen til tangenten i akkurat det punktet, ikke krumningen til selve grafen", "Fordi fortegnet til $f''$ i startpunktet alltid er motsatt av fortegnet nær selve roten", "Det er tilstrekkelig — å kreve mer enn ett punkt er bare en konvensjon i løsningsforslagene"],
      explanation: "Tangent-over/under-graf-egenskapen må holde langs hele intervallet mellom iterat og rot; skifter $f''$ fortegn, kan grafen krysse tangenten og konklusjonen ryke. Derav sensormerknaden fra H2016: intervallargument, ikke punktevaluering.",
    },
    {
      question: "For $f(x) = x^2 - 5$ fra $x_0 = 3$: hva er $x_1$?",
      options: ["$x_1 = \\dfrac73$", "$x_1 = \\dfrac{47}{21}$", "$x_1 = \\dfrac83$", "$x_1 = \\dfrac{14}{6}$… altså $\\dfrac73$, men etter to steg"],
      explanation: "$x_1 = 3 - \\frac{9-5}{6} = 3 - \\frac23 = \\frac73 \\approx 2{,}333$. ($47/21$ er $x_2$.) Å holde regningen i brøk gir renere føring.",
    },
    {
      question: "Oppgaven ber om to Newton-steg, og du regner seks «for sikkerhets skyld». Hva er konsekvensen?",
      options: ["Tapt tid uten ekstra poeng — antall steg er spesifisert, og settet er tidspresset", "Ekstra poeng for grundighet, siden flere steg gir en mer nøyaktig tilnærming som sensor premierer", "Trekk for feil metode, siden Newtons metode kun er definert for to iterasjoner", "Det avhenger av settet: noen år premieres ekstra steg, andre år straffes de"],
      explanation: "Å regne flere steg enn bedt om er sjangerens klassiske tidsfelle: null uttelling, mange minutter. Les oppgaven, tell steg, gå videre.",
    },
    {
      question: "Hva er et fikspunkt for funksjonen $g$?",
      options: ["Et tall $r$ med $g(r) = r$ — grafisk der $y = g(x)$ krysser diagonalen $y = x$", "Et tall $r$ med $g(r) = 0$ — grafisk der kurven $y = g(x)$ krysser den vannrette $x$-aksen", "Et tall $r$ med $g'(r) = 0$ — et punkt der tangenten til $g$ er vannrett", "Et tall $r$ med $g'(r) = 1$ — et punkt der $g$ vokser i nøyaktig takt med $x$"],
      explanation: "Fikspunkt = punkt $g$ lar stå i ro: $g(r) = r$. Nullpunkter og kritiske punkter er andre begreper — forveksling her koster hele fikspunktoppgaven.",
    },
    {
      question: "Hvilket vilkår sikrer at fikspunktiterasjonen $x_{n+1} = g(x_n)$ konvergerer mot $r$ (for start i intervallet $I$)?",
      options: ["$|g'(x)| \\le k < 1$ for alle $x \\in I$, og $g$ sender $I$ inn i $I$", "$|g'(r)| < 1$ i selve fikspunktet — det er nok, uansett oppførsel ellers i $I$", "$g'(x) > 0$ for alle $x \\in I$, slik at funksjonen $g$ er voksende der", "$g$ er kontinuerlig på $I$ — kontinuitet er alt sekantsetningen behøver"],
      explanation: "Leveransen er en skranke $k < 1$ som gjelder hele intervallet, pluss invariansen $g(I) \\subseteq I$; da gir sekantsetningen $|x_{n+1} - r| \\le k|x_n - r|$. Kun punktvis info i $r$ dekker ikke iterater lenger unna uten mer arbeid.",
    },
    {
      question: "Hvor kommer sekantsetningen inn i kontraksjonsargumentet?",
      options: ["Den skriver $g(x_n) - g(r) = g'(c)(x_n - r)$, som kobler ny feil til gammel feil via $|g'(c)|$", "Den viser at $g$ har et fikspunkt i intervallet, fordi sekanten mellom endepunktene må krysse diagonalen $y = x$", "Den gir at $g$ er kontinuerlig på intervallet, slik at grenseverdien blir et fikspunkt", "Den brukes ikke — kontraksjonsargumentet bygger utelukkende på skjæringssetningen"],
      explanation: "MVT på $g$ over intervallet mellom $x_n$ og $r$: $x_{n+1} - r = g(x_n) - g(r) = g'(c)(x_n - r)$. Skranken $|g'(c)| \\le k$ gir så den geometriske feilkrympingen.",
    },
    {
      question: "$g(x) = \\frac{x^2+2}{3}$ har fikspunktene $1$ og $2$, med $g'(x) = \\frac{2x}{3}$. Hva skjer med iterasjonen nær hvert av dem?",
      options: ["$1$ tiltrekker ($|g'(1)| = \\tfrac23 < 1$); $2$ frastøter ($|g'(2)| = \\tfrac43 > 1$)", "$2$ tiltrekker ($g'(2) = \\tfrac43$ er størst); $1$ frastøter fordi $g'(1)$ er minst", "Begge tiltrekker — alle fikspunkter tiltrekker når $g$ er kontinuerlig og voksende", "Begge frastøter — kvadratiske iterasjonsfunksjoner har aldri stabile fikspunkter"],
      explanation: "Testen er $|g'(r)|$ mot $1$: under 1 tiltrekker, over 1 frastøter. Derfor finner iterasjonen $1$ fra startpunkter i nærheten, men rømmer fra $2$ — størrelsen, ikke «størst vinner», avgjør.",
    },
    {
      question: "Hva kjennetegner spindelvevet når $-1 < g'(r) < 0$?",
      options: ["En spiral: iteratene hopper annenhver side av fikspunktet mens de nærmer seg", "En trapp: iteratene kryper ensidig og monotont innover mot fikspunktet fra én og samme side", "Et utovervendt vev: iteratene fjerner seg fra fikspunktet for hvert steg", "En lukket firkant: iteratene går i en evig sykel rundt fikspunktet"],
      explanation: "Negativ derivert snur fortegnet på feilen i hvert steg (spiral); positiv derivert under 1 gir ensidig trapp; $|g'(r)| > 1$ gir utovervendt vev. Sykler er ikke standardtilfellene her.",
    },
    {
      question: "Hva er sammenhengen mellom Taylorpolynomet $P_1$ om $a$ og Newtons metode?",
      options: ["$P_1$ er tangenten i $a$, og nullpunktet til $P_1$ er nøyaktig ett Newton-steg fra $a$", "$P_1$ er sekanten gjennom $a$ og roten, og Newton følger denne sekanten nedover", "$P_1$ gir feilskranken for Newton-steget gjennom sitt tilhørende Lagrange-restledd", "$P_1$ og Newton er uavhengige verktøy som tilfeldigvis står i samme kapittel"],
      explanation: "$P_1(x) = f(a) + f'(a)(x-a)$ er tangenten; $P_1(x) = 0$ gir $x = a - f(a)/f'(a)$. Newton = lineariser med $P_1$, løs, gjenta — koblingen som binder kap. 4.2 og 4.3 sammen.",
    },
    {
      question: "I konvergensbeviset: hvorfor konvergerer den avtakende følgen $x_n > r$?",
      options: ["Kompletthetsprinsippet: en monoton og begrenset følge har en grense", "Skjæringssetningen: følgen skifter fortegn og må derfor treffe roten", "Rolles teorem: mellom to iterater finnes et punkt med derivert null", "Definisjonen av grense: avstanden mellom iteratene går alltid mot null"],
      explanation: "Avtakende + nedad begrenset (av $r$) ⇒ konvergent, ved kompletthetsprinsippet. Deretter identifiseres grensen som roten ved grenseovergang i iterasjonsformelen — to separate trinn i skjemaet.",
    },
    {
      question: "Newton på $f(x) = \\ln x$ fra $x_0 = 2$ gir $x_1 \\approx 0{,}614 < 1$, altså på motsatt side av roten $r = 1$. Hva illustrerer det?",
      options: ["Sideregelen gjelder fra og med $x_1$ — startpunktet kan ligge på «feil» side", "At krumningstabellen ikke gjelder for logaritmefunksjoner og må erstattes", "At Newtons metode divergerer for konkave funksjoner uansett startpunkt", "En regnefeil — tangentnullpunktet kan aldri krysse over til andre siden"],
      explanation: "Konkav + voksende plasserer iteratene fra $x_1$ på venstresiden — men $x_0$ selv er fritt. Første steg hopper over roten; deretter kryper følgen ensidig mot $1$ ($0{,}614, 0{,}913, 0{,}996, \\dots$).",
    },
    {
      question: "Full sjanger F-kjede på eksamen: hvilken rekkefølge har leveransene?",
      options: ["Eksistens (skjæringssetningen) → entydighet (monotoni/Rolle) → iterér → feilens fortegn med krumning på hele intervallet", "Iterér til ønsket presisjon → sjekk krumningen i sluttpunktet → vis til slutt at roten finnes med skjæringssetningen", "Entydighet først (ellers er iterasjon meningsløst) → eksistens → krumning → til slutt selve iterasjonsstegene", "Krumningsargument → iterasjon → kontraksjonsvilkår → skjæringssetning, i nøyaktig denne faste rekkefølgen"],
      explanation: "Kjeden speiler kapittelrekkefølgen: kap. 4.1 leverer at og hvor roten finnes (og at den er alene), deretter tilnærmer Newton, og krumningsargumentet feller dommen over feilens fortegn.",
    },
    {
      question: "Hvorfor krever Newton-formelen $f'(x_n) \\neq 0$?",
      options: ["En vannrett tangent har ikke noe nullpunkt — steget er udefinert (og nær null slynges iteratet langt av gårde)", "Fordi $f'(x_n) = 0$ ville bety at $x_n$ allerede er roten, og da er metoden ferdig", "Fordi divisjon med små tall gir avrundingsfeil på kalkulatoren, som er forbudt i føringen", "Kravet er unødvendig — formelen fungerer like godt når den deriverte er null"],
      explanation: "Steget deler på $f'(x_n)$: null gir vannrett tangent uten nullpunkt. $f'(x_n) = 0$ betyr kritisk punkt for $f$, ikke rot — og nesten-null derivert gir enorme, upålitelige hopp.",
    },
  ],
  'mat111-uib-4-3': [
    {
      question: "Hva er Taylorpolynomet av grad $n$ til $f$ om punktet $a$?",
      options: ["$P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$", "$P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x)}{k!}(x-a)^k$", "$P_n(x) = \\sum_{k=0}^{n} f^{(k)}(a)\\,(x-a)^k$", "$P_n(x) = \\sum_{k=1}^{n} \\frac{f^{(k)}(a)}{k}(x-a)^k$"],
      explanation: "Deriverte evalueres i utviklingspunktet $a$ (ikke i $x$), deles på $k!$ (ikke $k$), og summen starter i $k=0$ med konstantleddet $f(a)$.",
    },
    {
      question: "Hva er Lagrange-restleddet $R_n(x)$?",
      options: ["$\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for en $c$ strengt mellom $a$ og $x$", "$\\frac{f^{(n)}(c)}{n!}(x-a)^{n}$ for en $c$ strengt mellom $a$ og $x$", "$\\frac{f^{(n+1)}(a)}{(n+1)!}(x-a)^{n+1}$ — neste ledd i polynomet, evaluert i $a$", "$\\frac{f^{(n+1)}(x)}{(n+1)!}(x-a)^{n+1}$ — neste ledd, evaluert i endepunktet $x$"],
      explanation: "Restleddet er «neste ledd», men med den $(n{+}1)$-te deriverte i et *ukjent* punkt $c$ mellom $a$ og $x$ — verken i $a$ eller i $x$. Det er nettopp usikkerheten i $c$ skrankeanalysen håndterer.",
    },
    {
      question: "Hvor ligger $c$ i restleddet når du tilnærmer $\\ln(1{,}1)$ med Maclaurinpolynom ($a = 0$)?",
      options: ["$c \\in (0,\\ 0{,}1)$ — strengt mellom utviklingspunktet og evalueringspunktet", "$c \\in (1,\\ 1{,}1)$ — mellom logaritmens argumenter i utviklings- og evalueringspunktet", "$c = 0{,}05$ — restleddspunktet ligger alltid i midten av intervallet", "$c \\in (0,\\ 1)$ — et vilkårlig punkt i enhetsintervallet for logaritmen"],
      explanation: "$c$ ligger mellom $a = 0$ og $x = 0{,}1$ (variabelen i $f(x) = \\ln(1+x)$). Å flytte $c$ til $(1,\\ 1{,}1)$ er en klassisk forveksling av variabelen og logaritme-argumentet.",
    },
    {
      question: "«Angi et minst mulig intervall som inneholder $\\sqrt5$» — hva kreves for full uttelling?",
      options: ["Skarpeste skranker: faktisk min og maks av $f'''$ på $(4,5)$, hentet fra endepunktene", "En hvilken som helst gyldig skranke for $f'''$, for eksempel en grov, rund overslagsverdi — det gir full uttelling", "Kalkulatorverdien $2{,}2360$ med mange desimaler og en kort rimelighetsvurdering", "Bare fortegnet på restleddet, siden det avgjør hvilken side feilen ligger på"],
      explanation: "«Minst mulig» peker på skarpest mulig skranke: min/maks av $f^{(n+1)}$ på intervallet (endepunktverdiene når den er monoton). Grovere skranker er gyldige, men gir delvis uttelling; kalkulatorverdi erstatter ingenting.",
    },
    {
      question: "$P_2$ for $\\sqrt[3]{x}$ om $27$ brukes på $x = 26$. Hvorfor blir tilnærmingen for stor?",
      options: ["$f''' > 0$, men $(x-a)^3 = (-1)^3 < 0$, så $R_2 < 0$ — sann verdi ligger under $P_2$", "$f''' > 0$ og dermed $R_2 > 0$ — restleddet er alltid positivt når $f'''$ er positiv", "Fordi $\\sqrt[3]{x}$ er konkav, ligger polynomverdiene alltid over funksjonsverdiene", "Fordi utviklingspunktet $27$ er større enn $26$, blir polynomet automatisk størst"],
      explanation: "Utvikling nedover: oddetallspotensen $(x-a)^3$ blir negativ og snur fortegnet — $R_2 = \\frac{f'''(c)}{6}(-1)^3 < 0$, så $f(x) = P_2 + R_2 < P_2$. Fortegnet må *regnes*, ikke gjettes fra krumningsintuisjonen alene.",
    },
    {
      question: "Hvilket resultat er Taylors formel med $n = 0$?",
      options: ["Sekantsetningen (MVT): $f(x) = f(a) + f'(c)(x-a)$", "Rolles teorem: $f'(c) = 0$ når endepunktverdiene er like", "Skjæringssetningen: fortegnsskifte pluss kontinuitet gir rot", "Newtons metode: $x_1 = a - f(a)/f'(a)$ fra startpunktet $a$"],
      explanation: "Med $n = 0$ er $P_0 = f(a)$ og $R_0 = f'(c)(x-a)$ — nøyaktig middelverdisetningen. Taylorapparatet er en gradvis skjerping av MVT fra kap. 4.1.",
    },
    {
      question: "Hva er koeffisienten foran $(x-a)^3$ i $P_3$, hvis $f'''(a) = 12$?",
      options: ["$\\dfrac{12}{3!} = 2$", "$\\dfrac{12}{3} = 4$", "$12$, siden koeffisienten er den tredjederiverte selv", "$\\dfrac{12}{2!} = 6$"],
      explanation: "Koeffisienten er $f'''(a)/3! = 12/6 = 2$. Fakulteten (ikke graden, ikke $2!$) i nevneren er sjangerens vanligste rene regnefeil.",
    },
    {
      question: "Hvorfor står det $k!$ i nevneren til Taylorkoeffisientene?",
      options: ["$k$-te derivasjon av $(x-a)^k$ gir faktoren $k!$ — divisjonen sikrer $P_n^{(k)}(a) = f^{(k)}(a)$", "Det er en ren normeringskonvensjon som bare skal gi polynomene pene rasjonale koeffisienter i tabellene", "Fordi restleddet har $(n+1)!$ i nevneren, må polynomleddene ha $k!$ av symmetrihensyn", "For å sikre at polynomet konvergerer mot funksjonen når graden vokser mot uendelig"],
      explanation: "$\\frac{d^k}{dx^k}(x-a)^k = k!$; koeffisienten $f^{(k)}(a)/k!$ nøytraliserer akkurat denne faktoren, så polynomets $k$-te deriverte i $a$ matcher funksjonens. Det er konstruksjonens hele idé.",
    },
    {
      question: "Skrankene $1 \\le f''(t) \\le 2$ på $[1,3]$, med $f(1) = 2$, $f'(1) = 1$. Hva er minste garanterte intervall for $f(3)$?",
      options: ["$[6,\\ 8]$, fra $f(3) = 4 + 2f''(c)$ med $f''(c) \\in [1,2]$", "$[5,\\ 7]$, fra $f(3) = 3 + 2f''(c)$ med $f''(c) \\in [1,2]$", "$[4,\\ 8]$, siden $f''$-skrankene må dobles for sikkerhets skyld", "$[6{,}5,\\ 7{,}5]$, ved å bruke gjennomsnittsverdien $f'' \\approx 1{,}5$"],
      explanation: "$f(3) = f(1) + f'(1)\\cdot2 + \\frac{f''(c)}{2}\\cdot4 = 2 + 2 + 2f''(c)$; innsetting av $1$ og $2$ gir $[6, 8]$. Gjennomsnittsbruk av $f''$ er ugyldig — $c$ er ukjent.",
    },
    {
      question: "I innkapslingen $P_3(x) + Gx^4 < f(x) < P_3(x) + Hx^4$: hva er $G$ og $H$?",
      options: ["$\\min$ og $\\max$ av $\\dfrac{f^{(4)}}{4!}$ på intervallet", "$\\min$ og $\\max$ av $\\dfrac{f'''}{3!}$ på intervallet", "Verdiene av $\\dfrac{f^{(4)}}{4!}$ i de to endepunktene, i vilkårlig rekkefølge", "Frie konstanter som velges slik at ulikheten ser skarpest mulig ut"],
      explanation: "Innkapsling er restleddsanalysen levert som funksjonsulikhet: $R_3(x) = \\frac{f^{(4)}(c)}{4!}x^4$ sperres inn av min og maks av $\\frac{f^{(4)}}{4!}$. (Endepunktverdiene er riktige *hvis* $f^{(4)}$ er monoton — men da ordnet som min/maks.)",
    },
    {
      question: "$f'(x) = 1 + x f(x)$ med $f(0) = 2$. Hva er $f''(0)$?",
      options: ["$2$, siden $f''(x) = f(x) + x f'(x)$ gir $f''(0) = f(0)$", "$1$, siden $f''(0) = f'(0)$ når likningen deriveres én gang", "$0$, siden leddet $x f(x)$ forsvinner når vi setter inn $x = 0$", "$3$, ved å summere $1 + f(0)$ direkte fra den gitte likningen"],
      explanation: "Deriver likningen med produktregelen: $f'' = (1 + xf)' = f + xf'$; i $x=0$: $f''(0) = f(0) = 2$. Rekursjonen gjenbruker verdiene nedenfra — det er H2013-mønsteret.",
    },
    {
      question: "Hva er Maclaurinpolynomet $P_3$ til $e^{-x}$?",
      options: ["$1 - x + \\dfrac{x^2}{2} - \\dfrac{x^3}{6}$", "$1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$", "$1 - x + x^2 - x^3$", "$1 - x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$"],
      explanation: "$f^{(k)}(0) = (-1)^k$ gir alternerende fortegn med fakultetsnevnere: $1 - x + x^2/2 - x^3/6$. Uten kjerneregel-minusen eller uten fakulteter blir det galt.",
    },
    {
      question: "Restleddet for $e^{-0{,}2}$ med $P_3$ om $0$ er $R_3 = \\frac{e^{-c}}{24}(0{,}2)^4 > 0$. Hva betyr det?",
      options: ["$P_3(0{,}2)$ er for liten — den sanne verdien ligger over polynomverdien", "$P_3(0{,}2)$ er for stor — den sanne verdien ligger under polynomverdien", "Feilen kan ha begge fortegn siden $c$ er ukjent i intervallet $(0,\\ 0{,}2)$", "Polynomet er eksakt i $0{,}2$, siden restleddet bare gjelder utenfor intervallet"],
      explanation: "$R_n = f(x) - P_n(x)$: positivt restledd betyr sann verdi over polynomet, altså underestimat. Fortegnet er fast fordi alle faktorene har kjent fortegn — selv om $c$ er ukjent.",
    },
    {
      question: "Hvorfor gir monotonien til $f^{(n+1)}$ skrankene «gratis»?",
      options: ["En monoton funksjon på et intervall har min og maks i endepunktene", "Monotone funksjoner er begrensede av sin verdi i utviklingspunktet", "Fordi monotoni betyr at $f^{(n+1)}$ er konstant på hele intervallet", "Monotonien viser at restleddet går mot null når graden øker"],
      explanation: "Monoton på $[a,x]$ ⇒ ekstremverdiene sitter i endene — regn $f^{(n+1)}$ i $a$ og i $x$, og du har skarpest mulige skranker. Én setning om monotonien hører med i føringen.",
    },
    {
      question: "Hva er sammenhengen mellom $P_1$ om $a$ og Newtons metode?",
      options: ["$P_1$ er tangenten i $a$, og løsningen av $P_1(x) = 0$ er ett Newton-steg fra $a$", "$P_1$ er sekanten gjennom $a$ og roten, som Newton følger mot nullpunktet", "$P_1$ brukes til å beregne feilskranken for Newton-steget via restleddet $R_1$", "Ingen direkte — Newton bruker $f$ selv, mens Taylor bruker polynomtilnærminger"],
      explanation: "$P_1(x) = f(a) + f'(a)(x-a) = 0$ gir $x = a - f(a)/f'(a)$: Newton = «erstatt $f$ med grad-1-Taylor, løs, gjenta». Trekanten $P_1$–tangent–Newton binder Del 4 sammen.",
    },
    {
      question: "For hvilke utviklingspunkter er $\\sqrt[3]{x}$-oppgavene «pene»?",
      options: ["$a \\in \\{1, 8, 27\\}$ — perfekte kuber der alle deriverte får eksakte brøkverdier", "$a \\in \\{4, 9, 16, 25\\}$ — kvadrattallene som gir pene kvadratrøtter", "$a = 0$ — origo er alltid det peneste utviklingspunktet for potensfunksjoner", "$a = e$ — der logaritmen og eksponentialfunksjonen har verdien én"],
      explanation: "Kubikkrot trenger perfekte kuber ($27^{1/3} = 3$, $27^{2/3} = 9$ osv.). Kvadrattallene hører til $\\sqrt x$; $a = 0$ er ubrukelig for $x^{1/3}$ (deriverte eksploderer der).",
    },
    {
      question: "Hva er galt med føringen «$R_2$ er liten, så $P_2(5) \\approx \\sqrt5$ er godt nok»?",
      options: ["«Liten» er ikke tallfestet — sjangeren krever eksplisitt skranke, intervall eller fortegn", "Ingenting — en kvalitativ vurdering av restleddet er nettopp det oppgaven ber om", "Feilen er at $R_2$ aldri er liten; tredjegradsrestledd er alltid av størrelsesorden én", "Ordet «restledd» skal ikke brukes; fasit omtaler feilen som «differanseleddet»"],
      explanation: "Aktiv bruk = tall: skranke på $f'''$, tallintervall, feilfortegn. Restledd sitert-men-ikke-brukt er sjangerens hovedfelle og mister nøyaktig de poengene oppgaven er laget for å teste.",
    },
    {
      question: "$f''(x) = x f(x)$, $f(0) = 1$, $f'(0) = 0$. Hva er $P_3$?",
      options: ["$1 + \\dfrac{x^3}{6}$", "$1 + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$", "$1 + x + \\dfrac{x^3}{3}$", "$1 - \\dfrac{x^3}{6}$"],
      explanation: "$f''(0) = 0\\cdot f(0) = 0$; derivasjon gir $f''' = f + xf'$, så $f'''(0) = 1$, og koeffisienten er $1/3! = 1/6$. Kvadratleddet faller bort — ikke anta at alle ledd er med.",
    },
    {
      question: "Hvilken påstand om intervalleveransen er riktig?",
      options: ["$f(x) \\in [P_n + R_{\\min},\\, P_n + R_{\\max}]$ — skrankene for restleddet legges direkte på polynomverdien", "$f(x) \\in [P_n - |R_{\\max}|,\\, P_n + |R_{\\max}|]$ — feilen legges symmetrisk til begge sider", "$f(x) \\in [R_{\\min},\\, R_{\\max}]$ — restleddskrankene er selv intervallet som fanger verdien", "$f(x) \\in [P_{n-1},\\, P_n]$ — to påfølgende polynomverdier sperrer alltid inne sannheten"],
      explanation: "$f = P_n + R_n$ og $R_{\\min} \\le R_n \\le R_{\\max}$ gir intervallet direkte — usymmetrisk når restleddet har fast fortegn. Symmetrisering sløser bort halve skarpheten.",
    },
    {
      question: "Hvorfor er derivertetabellen (med eksakte verdier i $a$) en del av leveransen?",
      options: ["Åpen bok-standarden: utregningen skal vises — også når formelen kunne vært slått opp", "Fordi kalkulatoren ikke håndterer brøkeksponenter og derfor ikke kan brukes her", "Tabellen er valgfri pynt; kun sluttpolynomet gir uttelling i løsningsforslagene", "Fordi tabellen trengs for å kunne tegne grafen til polynomet i besvarelsen"],
      explanation: "MAT111 er åpen bok-eksamen: fasitpraksis krever synlig utledning — derivertetabell med eksakte verdier, koeffisienter, polynom. Et oppslått eller ubegrunnet svar gir ikke uttelling.",
    },
  ],
  'mat111-uib-4-4': [
    {
      question: "Hva er riktig rekkefølge i et komplett induksjonsbevis for en $f^{(n)}$-formel?",
      options: ["Basissteg for $n=1$, induksjonshypotese, induksjonstrinn med derivasjon, konklusjon", "Induksjonshypotese, basissteg for $n=1$, konklusjon, induksjonstrinn med derivasjon", "Gjettefase, verifikasjon for $n=1$, $n=2$ og $n=3$, og deretter direkte konklusjon", "Basissteg for $n=1$ og $n=2$, generell formelavlesning, avsluttende kontrollregning"],
      explanation: "Malen har fire faste ledd i denne rekkefølgen. Tre verifiserte tilfeller er gjettefase, ikke bevis — bare trinnet dekker alle $n$.",
    },
    {
      question: "Hva består induksjonstrinnet av for en $f^{(n)}$-formel?",
      options: ["Deriver den antatte formelen for $f^{(n)}$ én gang og kjenn igjen strukturen for $n+1$", "Sett $n+1$ inn i formelen og kontroller at uttrykket da får nøyaktig samme form som for $n$", "Regn ut $f^{(n+1)}$ direkte fra $f$ uten å bruke induksjonshypotesen underveis", "Vis at formelen stemmer for $n = 1$ og $n = 2$; det generelle trinnet følger av det"],
      explanation: "Siden $f^{(n+1)} = (f^{(n)})'$ er trinnet alltid: deriver hypotesen, rydd, kjenn igjen $n+1$-strukturen. Ren innsetting eller flere talltilfeller beviser ingenting.",
    },
    {
      question: "Hvorfor må basissteget verifiseres mot direkte regning?",
      options: ["Fordi trinnet bare viser arven fra $n$ til $n+1$ — en gal formel kan «arves» like fint som en riktig", "Fordi basissteget er den eneste delen av beviset der induksjonshypotesen faktisk kan brukes", "Fordi direkte regning for $n=1$ automatisk bekrefter at induksjonstrinnet er gyldig for alle $n$", "Fordi formelen ellers må sjekkes for $n=2$ og $n=3$ i tillegg før konklusjonen kan skrives ned"],
      explanation: "Trinnet er en implikasjon: holder $P(n)$, holder $P(n+1)$. Uten et verifisert startpunkt faller ingen dominobrikker — og en gal gjetning ville sklidd gjennom.",
    },
    {
      question: "Hva er $\\dfrac{d^n}{dx^n}\\,\\ln x$ for $n \\ge 1$?",
      options: ["$\\dfrac{(-1)^{n-1}\\,(n-1)!}{x^n}$", "$\\dfrac{(-1)^{n}\\,n!}{x^{n}}$", "$\\dfrac{(-1)^{n-1}\\,n!}{x^{n+1}}$", "$\\dfrac{(n-1)!}{x^{n}}$"],
      explanation: "Sjekk mot $n=1$: formelen gir $0!/x = 1/x$ ✓. Fortegnet starter positivt ($(-1)^{n-1}$), fakulteten ligger ett hakk bak ($f'' = -1/x^2$, $f''' = 2/x^3$), og potensen er $n$.",
    },
    {
      question: "Hva er $\\dfrac{d^n}{dx^n}\\,\\dfrac{1}{1+x}$ for $n \\ge 1$?",
      options: ["$\\dfrac{(-1)^n\\,n!}{(1+x)^{n+1}}$", "$\\dfrac{(-1)^{n-1}\\,(n-1)!}{(1+x)^{n}}$", "$\\dfrac{(-1)^n\\,(n+1)!}{(1+x)^{n+2}}$", "$\\dfrac{(-1)^{n-1}\\,n!}{(1+x)^{n+1}}$"],
      explanation: "Startpotensen er $1$: nevnerpotensen blir $n+1$ og fakulteten $n!$; $f' = -(1+x)^{-2}$ gir negativ start, altså $(-1)^n$. Alternativet med $(n+1)!$ er formelen for $1/(1+x)^2$.",
    },
    {
      question: "Du deriverer hypotesen $f^{(n)}(x) = C_n\\,(3x+2)^{-n}$ i induksjonstrinnet. Hvilke faktorer produserer derivasjonen?",
      options: ["$-n$ fra potensregelen OG $3$ fra kjerneregelen — begge skal bokføres", "$-n$ fra potensregelen; den indre deriverte er allerede bakt inn i $C_n$", "$3$ fra kjerneregelen; potensregelen endrer bare eksponenten, ikke konstanten", "$-3n^2$ samlet, siden potens- og kjerneregelen multipliseres med hverandre to ganger"],
      explanation: "$\\frac{d}{dx}(3x+2)^{-n} = -n(3x+2)^{-n-1}\\cdot 3$: fortegn/fakultet-oppdateringen ($-n$) og kjernefaktoren ($3$) er separate poster — glemt kjernefaktor er en klassisk trinnfeil.",
    },
    {
      question: "For $f(x) = \\ln(1-x)$ er $f^{(n)}(x) = -\\dfrac{(n-1)!}{(1-x)^n}$ — uten fortegnsveksling. Hvorfor?",
      options: ["Hver derivasjon gir to minusfaktorer (potensregelens $-n$ og indre derivert $-1$) som opphever hverandre", "Logaritmefunksjoner har aldri fortegnsveksling i sine høyere ordens deriverte, uansett hvilken indre funksjon de har", "Fortegnet forsvinner fordi $(1-x)^n$ alltid er positivt på definisjonsområdet $x < 1$", "Formelen er bare gyldig for odde $n$; for like $n$ kommer det et ekstra minustegn i telleren"],
      explanation: "Indre derivert $-1$ ganger potensregelens $-n$ gir pluss — de to minusene per derivasjon nuller hverandre, så fortegnet står fast. Sammenlign med $\\ln(3x+2)$, der indre derivert er positiv og fortegnet veksler.",
    },
    {
      question: "En besvarelse viser at formelen stemmer for $n = 1, 2, 3$ og skriver «mønsteret fortsetter åpenbart». Hva mangler?",
      options: ["Induksjonstrinnet: hypotesen må faktisk deriveres, med ryddelinje som viser $n+1$-strukturen", "Ingenting vesentlig — tre verifiserte tilfeller regnes som fullgodt bevis i denne sjangeren", "Bare konklusjonssetningen: verifikasjonene utgjør til sammen et komplett induksjonsbevis", "Ett tilfelle til: fire verifiserte verdier av $n$ er minstekravet før konklusjonen kan trekkes"],
      explanation: "Talltilfeller sjekker enkeltbrikker; kun trinnet garanterer at hver brikke feller den neste. «Mønsteret fortsetter» uten derivasjon er sjangerens mest dokumenterte hull.",
    },
    {
      question: "Fakulteten i $f^{(n)}$-formelen for $\\dfrac{1}{(x+b)^2}$ er $(n+1)!$, ikke $(n-1)!$ som for $\\ln(ax+b)$. Hva er grunnen?",
      options: ["Startpotensen er $2$: derivasjonene henter ned $2, 3, 4, \\dots$, som gir fakultet med forsprang", "Potensfunksjoner har alltid $(n+1)!$ i telleren, uavhengig av hvilken potens man starter med", "Kjernefaktoren $a^n$ smelter sammen med fakulteten når den indre funksjonen er lineær i $x$", "Fortegnsfaktoren $(-1)^n$ konverterer $(n-1)!$ til $(n+1)!$ i alle potens-typene av denne formen"],
      explanation: "Nedhentede eksponenter er $2\\cdot3\\cdots(n+1) = (n+1)!$ når starten er $2$ — mot $1\\cdot2\\cdots(n-1)$ ett hakk bak for ln-typen. Fakultetsmønsteret leses av startnivået, aldri av en huskeregel.",
    },
    {
      question: "I Del 7-varianten av induksjon (rekursive følger, f.eks. $a_{n+1} = \\sqrt{2+a_n}$): hva er trinnets håndgrep?",
      options: ["Mat hypotesen (f.eks. $a_n < 2$) inn i rekursjonsformelen og utled samme påstand for $a_{n+1}$", "Deriver rekursjonsformelen én gang med hensyn på $n$ og les av mønsteret for neste ledd", "Regn ut $a_2, a_3$ og $a_4$ numerisk og observer at verdiene nærmer seg en fast grense", "Løs rekursjonen eksplisitt som en formel i $n$ først; deretter følger skranken ved direkte innsetting"],
      explanation: "Samme mal, annet håndgrep: for følger brukes rekursjonen på hypotesen ($a_n < 2 \\Rightarrow a_{n+1} = \\sqrt{2+a_n} < \\sqrt4 = 2$). Derivasjon mhp. $n$ gir ikke mening, og numerikk beviser ikke.",
    },
  ],
  'mat111-uib-5-1': [
    {
      question: "Hva er $\\dfrac{d}{dx}\\displaystyle\\int_0^x e^{-t^2}\\,dt$?",
      options: ["$e^{-x^2}$", "$-2x\\,e^{-x^2}$", "$e^{-t^2}$", "Kan ikke finnes — integranden har ingen elementær antiderivert"],
      explanation: "Fundamentalteoremets del 1: derivasjon av integralfunksjonen gir integranden avlest i $t=x$. Ingen antiderivert trengs — det er hele poenget med oppgavetypen.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\displaystyle\\int_1^{x^2}\\frac{\\sin t}{t}\\,dt$?",
      options: ["$\\dfrac{2\\sin(x^2)}{x}$", "$\\dfrac{\\sin(x^2)}{x^2}$", "$\\dfrac{\\sin x}{x}\\cdot 2x$", "$\\dfrac{\\cos(x^2)}{x^2}\\cdot 2x$"],
      explanation: "Les av integranden i $t=x^2$ og gang med kjerneregel-faktoren $2x$: $\\frac{\\sin(x^2)}{x^2}\\cdot2x = \\frac{2\\sin(x^2)}{x}$. Å glemme $2x$ er den klassiske glippen.",
    },
    {
      question: "Hvorfor står det $t$ og ikke $x$ inni $F(x)=\\int_a^x f(t)\\,dt$?",
      options: ["Integrasjonsvariabelen er stum — $x$ er opptatt som grense", "Fordi $t$ alltid betyr tid i integralfunksjoner", "Det er valgfritt — $\\int_a^x f(x)\\,dx$ betyr det samme", "Fordi $f$ bare er definert i variabelen $t$"],
      explanation: "Variabelen inni er en intern telle-variabel og kan hete hva som helst — men den kan ikke hete det samme som den ytre grensen. $\\int_a^x f(x)\\,dx$ er notasjonsfeil.",
    },
    {
      question: "Hva er standardargumentet for at $F(x)=\\int_2^x \\ln(1+t^2)\\,dt$ er veldefinert?",
      options: ["Integranden er kontinuerlig på hele integrasjonsområdet", "Integranden er deriverbar i $x$", "Integralet er positivt for alle $x$", "$F(2)=0$, så funksjonen starter i et kjent punkt"],
      explanation: "Veldefinerthet = integralet eksisterer. For kontinuerlige integrander på integrasjonsområdet eksisterer det bestemte integralet alltid — den setningen er hele argumentet (og den kreves i føringen, jf. H2018).",
    },
    {
      question: "Begge grensene varierer: $\\dfrac{d}{dx}\\displaystyle\\int_{h(x)}^{g(x)} f(t)\\,dt = ?$",
      options: ["$f(g(x))\\,g'(x) - f(h(x))\\,h'(x)$", "$f(g(x))\\,g'(x) + f(h(x))\\,h'(x)$", "$f(g(x)) - f(h(x))$", "$f'(g(x))\\,g'(x) - f'(h(x))\\,h'(x)$"],
      explanation: "Splitt i et fast punkt: øvre grense bidrar med pluss, nedre med minus (fortegnssnuen). Integranden skal ikke deriveres — den leses bare av i grensene.",
    },
    {
      question: "$F(x)=\\displaystyle\\int_0^x (t^2-9)e^{-t}\\,dt$. Hvor har $F$ lokalt maksimum?",
      options: ["$x=-3$", "$x=3$", "$x=0$", "$F$ har ikke noe lokalt maksimum"],
      explanation: "$F'(x)=(x^2-9)e^{-x}$ har nullpunkter $\\pm3$. Fortegnet følger $(x-3)(x+3)$: pluss→minus i $x=-3$ (lokalt maks), minus→pluss i $x=3$ (lokalt min).",
    },
    {
      question: "Hva er $\\displaystyle\\int_5^5 \\sqrt{1+t^8}\\,dt$?",
      options: ["$0$", "$\\sqrt{1+5^8}$", "Udefinert — integranden kan ikke antideriveres", "$5$"],
      explanation: "Like grenser gir alltid null (normeringen $\\int_a^a f=0$) — uansett hvor stygg integranden er.",
    },
    {
      question: "$K(x)=\\displaystyle\\int_{\\cos x}^{2}\\frac{dt}{1+t^2}$. Hva er $K'(x)$?",
      options: ["$\\dfrac{\\sin x}{1+\\cos^2 x}$", "$-\\dfrac{\\sin x}{1+\\cos^2 x}$", "$\\dfrac{1}{1+\\cos^2 x}$", "$\\dfrac{1}{1+4}-\\dfrac{1}{1+\\cos^2x}$"],
      explanation: "Nedre grense varierer: snu fortegnet, $K(x)=-\\int_2^{\\cos x}$. Da er $K'(x)=-\\frac{1}{1+\\cos^2x}\\cdot(-\\sin x)=\\frac{\\sin x}{1+\\cos^2x}$ — to minuser blir pluss.",
    },
    {
      question: "Hvilken påstand om fundamentalteoremets del 2 er riktig?",
      options: ["$\\int_a^b f\\,dx = F(b)-F(a)$ for en vilkårlig antiderivert $F$ av $f$", "Formelen krever at man velger antideriverten med $C=0$", "$\\int_a^b f\\,dx = F(a)-F(b)$", "Formelen gjelder bare når $f\\ge0$ på $[a,b]$"],
      explanation: "Hvilken som helst antiderivert duger — konstanten $C$ kansellerer i differansen $F(b)-F(a)$. Rekkefølgen er øvre minus nedre, og fortegnet på $f$ spiller ingen rolle.",
    },
    {
      question: "$F(x)=\\displaystyle\\int_0^x\\frac{t-2}{1+t^2}\\,dt$. Hva vet vi om $F$ på intervallet $(0,2)$?",
      options: ["$F$ er avtagende der", "$F$ er voksende der", "$F$ er konstant der", "$F$ er ikke definert der"],
      explanation: "$F'(x)=\\frac{x-2}{1+x^2}$ har samme fortegn som $x-2$, altså negativt på $(0,2)$. Integralfunksjonen arver monotonien fra integrandens fortegn.",
    },
    {
      question: "Hvor er $F(x)=\\displaystyle\\int_1^x\\frac{dt}{t-4}$ (med startpunkt $1$) veldefinert?",
      options: ["For $x<4$", "For alle $x\\neq4$", "For $x>4$", "For alle $x\\in\\mathbb{R}$"],
      explanation: "Integranden har brudd i $t=4$. Startpunktet er $1$, og bruddet må ikke ligge mellom grensene: det krever $x<4$. For $x>4$ ville integrasjonsområdet inneholde bruddet.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\displaystyle\\int_0^{3x}\\cos(t^2)\\,dt$?",
      options: ["$3\\cos(9x^2)$", "$\\cos(9x^2)$", "$3\\cos(3x^2)$", "$-6x\\sin(9x^2)$"],
      explanation: "Avlesning i $t=3x$ gir $\\cos((3x)^2)=\\cos(9x^2)$, og kjerneregel-faktoren er $(3x)'=3$.",
    },
    {
      question: "En oppgave ber deg beregne $\\int_1^4(2x+\\frac1x)\\,dx$. Hva er riktig føring i klammesteget?",
      options: ["$\\big[x^2+\\ln x\\big]_1^4 = (16+\\ln4)-(1+0)$", "$\\big[x^2+\\ln x\\big]_1^4 = (1+\\ln1)-(16+\\ln4)$", "$\\big[2+\\ln x\\big]_1^4 = (2+\\ln4)-(2+0)$", "$\\big[x^2-\\tfrac1{x^2}\\big]_1^4$"],
      explanation: "Antiderivert av $2x$ er $x^2$, av $\\frac1x$ er $\\ln x$; innsettingen er øvre minus nedre: $(16+\\ln4)-(1+0)=15+\\ln4$.",
    },
    {
      question: "Hva skiller det ubestemte og det bestemte integralet?",
      options: ["Ubestemt er en funksjonsfamilie med $+C$; bestemt er et tall", "Ubestemt er alltid positivt; bestemt kan være negativt", "Bestemt krever kontinuerlig integrand; ubestemt gjør ikke", "De er to skrivemåter for det samme objektet"],
      explanation: "$\\int f\\,dx=F(x)+C$ er alle antideriverte (en funksjonsfamilie); $\\int_a^b f\\,dx$ er ett tall. Konstanten $C$ kansellerer i det bestemte.",
    },
  ],
  'mat111-uib-5-2': [
    {
      question: "Hva skal med i substitusjonsboksen for et bestemt integral?",
      options: ["Kjernen $u$, differensialet $du$ og de nye grensene", "Kjernen $u$ og differensialet $du$ — grensene endres ikke", "Bare kjernen $u$", "Antideriverten og innsettingsklammen"],
      explanation: "Alle tre: $u$, $du$ og oversettelsen av begge grensene. Uten grenselinjene er føringen mangelfull etter løsningsforslagenes standard.",
    },
    {
      question: "$\\displaystyle\\int_0^2\\frac{x}{1+x^2}\\,dx$ med $u=1+x^2$ — hvilke nye grenser gjelder?",
      options: ["$u$ fra $1$ til $5$", "$u$ fra $0$ til $2$", "$u$ fra $0$ til $5$", "$u$ fra $1$ til $4$"],
      explanation: "$x=0$ gir $u=1+0=1$; $x=2$ gir $u=1+4=5$. Grensene skal alltid gjennom kjernen.",
    },
    {
      question: "Hva er $\\displaystyle\\int\\frac{f'(x)}{f(x)}\\,dx$?",
      options: ["$\\ln|f(x)|+C$", "$\\dfrac{1}{f(x)}+C$", "$f(x)\\ln|x|+C$", "$-\\dfrac{f'(x)}{f(x)^2}+C$"],
      explanation: "Nevnerens deriverte i telleren er $\\ln$-mønsteret: substitusjonen $u=f(x)$ gir $\\int du/u = \\ln|u|+C$.",
    },
    {
      question: "I $\\int x e^{2x}\\,dx$: hvilket valg er riktig etter LIATE, og hvorfor?",
      options: ["$u=x$, $v'=e^{2x}$ — polynomet deriveres bort", "$u=e^{2x}$, $v'=x$ — eksponentialen deriveres bort", "$u=x$, $v'=e^{2x}$ — fordi $e^{2x}$ ikke kan antideriveres", "Valget spiller ingen rolle for hvor tungt restintegralet blir"],
      explanation: "A(lgebraisk) står før E(ksponential) i LIATE: polynomet skal deriveres. Velger du motsatt, øker graden i restintegralet, og integralet blir verre.",
    },
    {
      question: "Hvorfor krever føringen at $u/v'$-valget skrives eksplisitt?",
      options: ["Den viser at teknikken er valgt bevisst — kravet i åpen bok-formatet", "Uten den blir selve svaret matematisk galt, uansett hvor riktig regningen ellers er", "Den erstatter kontrollderivasjonen", "Det er bare en tradisjon uten poengverdi"],
      explanation: "I åpen bok-formatet er føringen selve prestasjonen: valglinjen dokumenterer teknikken. Svaret kan være riktig uten den — men gir da ikke full uttelling.",
    },
    {
      question: "Hva kjennetegner en «ensom» funksjon som $\\ln x$ i integrasjon?",
      options: ["Den antideriveres ikke direkte, men deriveres lett — så vi integrerer delvis mot 1", "Den har ingen antiderivert i det hele tatt", "Den må alltid substitueres med $u=\\ln x$ før noen annen teknikk kan brukes på integralet", "Den kan bare integreres numerisk"],
      explanation: "$\\ln x$ og $\\arctan x$ står ikke i grunnintegral-tabellen, men har enkle deriverte. Mot 1-trikset ($v'=1$) flytter alt arbeid over på derivasjonen.",
    },
    {
      question: "Hva er $\\displaystyle\\int\\ln x\\,dx$?",
      options: ["$x\\ln x - x + C$", "$\\dfrac{1}{x}+C$", "$\\dfrac{(\\ln x)^2}{2}+C$", "$x\\ln x + x + C$"],
      explanation: "Delvis mot 1: $u=\\ln x$, $v'=1$ gir $x\\ln x - \\int 1\\,dx = x\\ln x - x + C$. Kontroll: $(x\\ln x - x)' = \\ln x + 1 - 1 = \\ln x$.",
    },
    {
      question: "Etter to runder delvis på $I=\\int e^x\\cos x\\,dx$ står det $I = e^x\\cos x + e^x\\sin x - I$. Hva nå?",
      options: ["Flytt $I$ over og del på 2: $I=\\frac{e^x(\\sin x+\\cos x)}{2}+C$", "Konkluder med at metoden feilet siden $I$ kom tilbake, og velg en helt annen teknikk", "Sett $I=0$ siden det står på begge sider", "Kjør en tredje runde delvis"],
      explanation: "At integralet kommer tilbake, gir en likning: $2I = e^x(\\sin x+\\cos x)$. «Løs for integralet» er hele poenget med sykliske tilfeller.",
    },
    {
      question: "Hvorfor må samme strategi brukes i begge rundene av et syklisk integral?",
      options: ["Bytter du strategi, reverserer runde 2 runde 1 og gir $I=I$", "Fordi LIATE forbyr å derivere eksponentialer", "Fordi restintegralet ellers divergerer", "Det må den ikke — begge varianter fører like raskt fram til svaret i runde to"],
      explanation: "Med motsatt valg i runde 2 gjør du nøyaktig den omvendte operasjonen og ender med identiteten $I=I$ — sann, men ubrukelig.",
    },
    {
      question: "$\\displaystyle\\int_0^{\\pi^2}\\sin\\sqrt x\\,dx$ løses best ved …",
      options: ["substitusjonen $u=\\sqrt x$ og deretter delvis integrasjon", "delvis integrasjon direkte med $u=\\sin\\sqrt x$", "$\\ln$-mønsteret", "substitusjonen $u=\\sin x$"],
      explanation: "Sammensatt kjerne $\\sqrt x$ → substituér først ($dx=2u\\,du$), som gir $2\\int u\\sin u\\,du$ — et klassisk delvis-integral. Kjeden substitusjon → delvis.",
    },
    {
      question: "I et ubestemt integral etter substitusjon står svaret som $\\frac{e^u}{3}+C$. Hva gjenstår?",
      options: ["Tilbakebytting: sett inn $u=g(x)$", "Ingenting — svaret er ferdig", "Sette inn grensene", "Derivere svaret og legge til $C$"],
      explanation: "Ubestemte integraler skal tilbake til den opprinnelige variabelen. Bestemte integraler slipper — der oversetter man i stedet grensene.",
    },
    {
      question: "Hva er $\\displaystyle\\int_0^{\\sqrt\\pi} x\\sin(x^2)\\,dx$?",
      options: ["$1$", "$0$", "$\\pi/2$", "$2$"],
      explanation: "$u=x^2$, $x\\,dx=\\frac12du$, grenser $0\\to0$ og $\\sqrt\\pi\\to\\pi$: $\\frac12\\int_0^\\pi\\sin u\\,du = \\frac12\\cdot2 = 1$.",
    },
    {
      question: "Fortegnsfellen i delvis integrasjon: med $v=-\\cos x$ blir $-\\int u'v\\,dx$ til …",
      options: ["$+\\int u'\\cos x\\,dx$ — to minuser gir pluss", "$-\\int u'\\cos x\\,dx$", "$-\\int u'\\sin x\\,dx$", "null, siden minusene kansellerer integralet"],
      explanation: "$-\\int u'\\cdot(-\\cos x)\\,dx = +\\int u'\\cos x\\,dx$. Fortegnsglipp her er en gjenganger i arkivets sensorkommentarer om trekk.",
    },
    {
      question: "Hvilket integral passer IKKE for substitusjon alene?",
      options: ["$\\int x\\cos x\\,dx$", "$\\int x\\cos(x^2)\\,dx$", "$\\int \\frac{2x}{1+x^2}\\,dx$", "$\\int x^2e^{x^3}\\,dx$"],
      explanation: "I $\\int x\\cos x\\,dx$ er det ingen kjerne med matchende derivert — det er et produkt av uavhengige faktorer og krever delvis integrasjon. De tre andre har kjerner med $u'$ som faktor.",
    },
    {
      question: "Hva er $\\displaystyle\\int_1^e x\\ln x\\,dx$?",
      options: ["$\\dfrac{e^2+1}{4}$", "$\\dfrac{e^2-1}{4}$", "$\\dfrac{e^2}{2}$", "$e-1$"],
      explanation: "$u=\\ln x$, $v'=x$: $\\big[\\frac{x^2}{2}\\ln x\\big]_1^e - \\frac12\\int_1^e x\\,dx = \\frac{e^2}{2}-\\frac{e^2-1}{4} = \\frac{e^2+1}{4}$.",
    },
    {
      question: "En besvarelse skriver bare «$\\int x\\arctan x\\,dx = \\frac{x^2+1}{2}\\arctan x - \\frac x2 + C$ (tabelloppslag)». Hva skjer?",
      options: ["Null uttelling — oppgaven krever grunnleggende teknikker, ikke oppslag", "Full uttelling — svaret er riktig", "Halv uttelling for riktig svar", "Full uttelling hvis svaret kontrollderiveres"],
      explanation: "Åpen bok-regelen: oppgaven ber eksplisitt om at teknikken vises. Riktig fasitsvar uten utledning gir null — føringen er det som måles.",
    },
    {
      question: "$\\displaystyle\\int_1^4\\frac{e^{\\sqrt x}}{\\sqrt x}\\,dx = ?$",
      options: ["$2(e^2-e)$", "$e^2-e$", "$2(e^4-e)$", "$\\dfrac{e^2-e}{2}$"],
      explanation: "$u=\\sqrt x$ gir $dx/\\sqrt x = 2\\,du$ og grenser $1\\to1$, $4\\to2$: $2\\int_1^2e^u\\,du = 2(e^2-e)$.",
    },
    {
      question: "Når trengs gjentatt delvis integrasjon?",
      options: ["Når polynomfaktoren har grad 2 eller høyere", "Når integranden er en brøk", "Bare i sykliske integraler", "Når substitusjonen ikke har matchende $u'$"],
      explanation: "Én runde delvis senker polynomgraden med 1. Grad 2 krever to runder, grad 3 tre — med samme strategi hele veien.",
    },
  ],
  'mat111-uib-5-3': [
    {
      question: "Før delbrøkoppspalting av $\\dfrac{x^3+1}{x^2-1}$ må du …",
      options: ["utføre polynomdivisjon, siden tellergraden ikke er lavere enn nevnergraden", "faktorisere telleren", "fullføre kvadratet i nevneren", "ingenting — brøken er en ekte rasjonal brøk og dermed klar for delbrøkoppspalting"],
      explanation: "Tellergrad 3 ≥ nevnergrad 2 → uekte brøk. Delbrøk krever ekte brøk; divider først så resten får lavere grad enn nevneren.",
    },
    {
      question: "Riktig delbrøkoppsett for $\\dfrac{x+5}{(x-1)(x+3)}$?",
      options: ["$\\dfrac{A}{x-1}+\\dfrac{B}{x+3}$", "$\\dfrac{Ax+B}{(x-1)(x+3)}$", "$\\dfrac{A}{x-1}\\cdot\\dfrac{B}{x+3}$", "$\\dfrac{Ax}{x-1}+\\dfrac{Bx}{x+3}$"],
      explanation: "To distinkte lineære faktorer → én konstant per faktor, som sum. Produktform eller x-teller er feil ansats.",
    },
    {
      question: "I $x+5 = A(x+3)+B(x-1)$: hva gir innsettingsmetoden med $x=1$?",
      options: ["$6=4A$, så $A=\\frac32$", "$6=4B$, så $B=\\frac32$", "$5=3A$, så $A=\\frac53$", "$4=2A$, så $A=2$"],
      explanation: "Innsetting av rota $x=1$ nuller $B$-leddet: venstre side $1+5=6$, høyre side $A\\cdot4$. Dermed $A=3/2$.",
    },
    {
      question: "Riktig oppsett for $\\dfrac{r(x)}{(x+1)^2}$ (gjentatt lineær faktor)?",
      options: ["$\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}$", "$\\dfrac{A}{(x+1)^2}$ alene — den høyeste potensen dekker automatisk hele faktoren", "$\\dfrac{A}{x+1}+\\dfrac{B}{x+1}$", "$\\dfrac{Ax+B}{x+1}$"],
      explanation: "Multiplisitet 2 gir ett ledd per potens: $\\frac{A}{x+1}+\\frac{B}{(x+1)^2}$. Merk at $B$-leddet integreres med potensregelen, ikke til logaritme.",
    },
    {
      question: "Hva er $\\displaystyle\\int\\frac{B}{(x+1)^2}\\,dx$?",
      options: ["$-\\dfrac{B}{x+1}+C$", "$B\\ln(x+1)^2+C$", "$\\dfrac{B}{x+1}+C$", "$B\\ln|x+1|+C$ — lineære faktorer i nevneren gir alltid logaritme"],
      explanation: "Potensregelen med eksponent $-2$: $\\int(x+1)^{-2}dx = -(x+1)^{-1}$. Bare enkle lineære faktorer gir logaritmer.",
    },
    {
      question: "Når er en kvadratisk faktor «irreduserbar»?",
      options: ["Når den mangler reelle røtter (negativ diskriminant)", "Når den ikke kan deriveres", "Når koeffisienten foran $x^2$ ikke er 1", "Når den har to like reelle røtter, altså når diskriminanten er lik null"],
      explanation: "Irreduserbar over de reelle tallene = kan ikke faktoriseres i reelle lineære faktorer = diskriminanten er negativ, som i $x^2+4x+13$.",
    },
    {
      question: "Hva er $\\displaystyle\\int\\frac{dx}{x^2+a^2}$?",
      options: ["$\\dfrac1a\\arctan\\dfrac xa+C$", "$\\arctan\\dfrac xa+C$", "$\\dfrac1{2a}\\ln(x^2+a^2)+C$", "$\\dfrac1a\\arcsin\\dfrac xa+C$"],
      explanation: "Grunnintegralet for irreduserbare faktorer — med faktoren $\\frac1a$ foran, som kontrollderivasjon bekrefter. Uten den er svaret galt med en faktor $a$.",
    },
    {
      question: "$\\displaystyle\\int\\frac{2x+5}{x^2+4x+13}\\,dx$ splittes i to deler. Hvilke?",
      options: ["$\\ln$-del med teller $2x+4$ og $\\arctan$-del med konstant teller", "To $\\ln$-deler", "$\\arctan$-del alene — nevneren er irreduserbar, så hele telleren følger med dit", "$\\ln$-del med teller $2x+5$ og en restdel"],
      explanation: "Skriv $2x+5=(2x+4)+1$: nevnerens deriverte gir $\\ln(x^2+4x+13)$, konstanten gir via fullført kvadrat $(x+2)^2+9$ et arctan-ledd. Begge skal med.",
    },
    {
      question: "Riktig ansats for den irreduserbare faktoren i $\\dfrac{r(x)}{x(x^2+4)}$?",
      options: ["$\\dfrac Ax+\\dfrac{Bx+C}{x^2+4}$", "$\\dfrac Ax+\\dfrac{B}{x^2+4}$", "$\\dfrac Ax+\\dfrac{B}{x-2}+\\dfrac{C}{x+2}$", "$\\dfrac{A}{x(x^2+4)}$"],
      explanation: "Irreduserbar kvadratisk faktor krever lineær teller $Bx+C$. Konstant teller er for snever ansats, og $x^2+4$ kan ikke splittes reelt.",
    },
    {
      question: "Hvorfor kreves $\\theta\\in[-\\frac\\pi2,\\frac\\pi2]$ i substitusjonen $x=a\\sin\\theta$?",
      options: ["Da er $\\cos\\theta\\ge0$, så $\\sqrt{a^2-x^2}=a\\cos\\theta$ uten fortegnsfeil, og $\\theta=\\arcsin\\frac xa$ er entydig", "Fordi sinusfunksjonen bare er definert for vinkler i intervallet $[-\\frac\\pi2,\\frac\\pi2]$ og ikke for noen vinkler utenfor det", "Fordi integralet ellers divergerer", "Det er valgfri konvensjon uten matematisk innhold"],
      explanation: "Verdimengdekravet gjør to jobber: $\\sqrt{\\cos^2\\theta}=|\\cos\\theta|$ blir $\\cos\\theta$, og tilbaketransformasjonen blir veldefinert. Uten deklarert intervall er føringen ufullstendig.",
    },
    {
      question: "Hvilken substitusjon passer for $\\displaystyle\\int\\frac{dx}{(9+x^2)^{3/2}}$?",
      options: ["$x=3\\tan\\theta$", "$x=3\\sin\\theta$", "$u=9+x^2$", "$x=9\\tan\\theta$"],
      explanation: "Summen $9+x^2$ peker på tangens med $a=3$: $9+x^2 = 9/\\cos^2\\theta$. ($u=9+x^2$ feiler fordi $du=2x\\,dx$ ikke står som faktor; $a$ er 3, ikke 9.)",
    },
    {
      question: "Etter trig-substitusjon står svaret som $\\frac{\\sin\\theta}{4}+C$ med $\\tan\\theta=\\frac x2$. Hva er $\\sin\\theta$ uttrykt i $x$?",
      options: ["$\\dfrac{x}{\\sqrt{4+x^2}}$", "$\\dfrac{2}{\\sqrt{4+x^2}}$", "$\\dfrac{x}{2}$", "$\\dfrac{\\sqrt{4+x^2}}{x}$"],
      explanation: "Tegn trekanten: motstående katet $x$, hosliggende $2$, hypotenus $\\sqrt{4+x^2}$. Da er $\\sin\\theta = x/\\sqrt{4+x^2}$.",
    },
    {
      question: "$\\displaystyle\\int\\frac{e^x}{e^{2x}+3e^x+2}\\,dx$ løses med …",
      options: ["$u=e^x$, som gir $\\int\\frac{du}{(u+1)(u+2)}$ — deretter delbrøk", "delvis integrasjon med $u=e^x$", "trig-substitusjon $e^x=\\tan\\theta$", "polynomdivisjon direkte"],
      explanation: "Rasjonal i forkledning: $du=e^x dx$ står klar som faktor, og nevneren blir $u^2+3u+2=(u+1)(u+2)$. Kjeden substitusjon → delbrøk.",
    },
    {
      question: "Hva er den vanligste kontrollen av delbrøk-koeffisienter?",
      options: ["Legg småbrøkene sammen igjen og sjekk at telleren stemmer", "Deriver hver småbrøk", "Sett $x=0$ i det opprinnelige integralet", "Sjekk at $A+B+C=1$"],
      explanation: "Gjenskap brøken (eller sett inn en ekstra x-verdi i identiteten). Én fortegnsfeil i koeffisientene ødelegger hele integralet — kontrollen tar ti sekunder.",
    },
    {
      question: "$\\displaystyle\\int\\frac{x^3}{x^2+4}\\,dx = ?$",
      options: ["$\\dfrac{x^2}{2}-2\\ln(x^2+4)+C$", "$\\dfrac{x^4/4}{x^3/3+4x}+C$", "$\\dfrac{x^2}{2}+2\\ln(x^2+4)+C$", "$\\dfrac{x^2}{2}-4\\arctan\\dfrac x2+C$"],
      explanation: "Divider: $x^3 = x(x^2+4)-4x$ gir $x - \\frac{4x}{x^2+4}$; siste ledd er ln-mønsteret og gir $-2\\ln(x^2+4)$. (Leddvis «integrasjon» av teller og nevner er ikke en regel.)",
    },
    {
      question: "Nevneren er $(x-2)^2(x^2+9)$. Hvor mange ukjente koeffisienter har riktig delbrøkoppsett?",
      options: ["4: $\\frac{A}{x-2}+\\frac{B}{(x-2)^2}+\\frac{Cx+D}{x^2+9}$", "3: én per faktor", "2: $A$ og $B$", "5: $A,B,C,D,E$"],
      explanation: "Gjentatt lineær faktor gir to ledd ($A$, $B$), irreduserbar kvadratisk gir lineær teller ($Cx+D$) — til sammen fire ukjente.",
    },
    {
      question: "Hvilket integral krever IKKE trig-substitusjon?",
      options: ["$\\int\\frac{x\\,dx}{\\sqrt{4-x^2}}$ — vanlig substitusjon $u=4-x^2$ holder", "$\\int\\sqrt{4-x^2}\\,dx$", "$\\int\\frac{dx}{(4+x^2)^{3/2}}$", "$\\int\\frac{x^2\\,dx}{\\sqrt{4-x^2}}$"],
      explanation: "Med faktoren $x$ i telleren står $u'=-2x$ klar: $u=4-x^2$ er raskere og enklere. Trig-substitusjon er siste utvei — sjekk alltid vanlig substitusjon først.",
    },
    {
      question: "Fullført kvadrat av $x^2+6x+13$?",
      options: ["$(x+3)^2+4$", "$(x+3)^2-4$", "$(x+6)^2-23$", "$(x+3)^2+13$"],
      explanation: "Halver 6 → 3, kvadrer → 9, kompenser: $x^2+6x+13 = (x+3)^2 + 13-9 = (x+3)^2+4$. Dermed $a=2$ i arctan-formen.",
    },
  ],
  'mat111-uib-5-4': [
    {
      question: "Beslutningstreets første spørsmål til $\\displaystyle\\int\\frac{x^3+2}{x^2-1}\\,dx$?",
      options: ["Rasjonal og uekte → polynomdivisjon først", "Rotuttrykk → trig-substitusjon", "Produkt → delvis integrasjon", "Kjerne → substitusjon $u=x^2-1$, siden $du=2x\\,dx$ matcher telleren direkte"],
      explanation: "Rasjonal integrand med tellergrad 3 ≥ nevnergrad 2: divider først, delbrøk på resten. ($u=x^2-1$ feiler: $du=2x\\,dx$ matcher ikke telleren.)",
    },
    {
      question: "$\\displaystyle\\int\\frac{x}{x^2+9}\\,dx$ — raskeste korrekte vei?",
      options: ["$\\ln$-mønsteret: $\\tfrac12\\ln(x^2+9)+C$", "Trig-substitusjon $x=3\\tan\\theta$", "Delbrøk med $x^2+9=(x-3i)(x+3i)$", "Arctan-grunnintegralet: $\\tfrac13\\arctan\\tfrac x3+C$"],
      explanation: "Telleren er halvparten av nevnerens deriverte → substitusjon/$\\ln$-mønster direkte. Arctan-svaret gjelder konstant teller; trig-substitusjon fungerer, men er mange linjer lenger.",
    },
    {
      question: "Hvorfor er $x$-faktor-sjekken viktig før trig-substitusjon?",
      options: ["Med en $x$-faktor i telleren er vanlig substitusjon ($u$ = radikanden) mye raskere", "Uten $x$-faktor er integralet uløselig", "Trig-substitusjon krever alltid en $x$-faktor i telleren for at $d\\theta$ skal matche", "$x$-faktoren endrer verdimengdekravet"],
      explanation: "$\\int\\frac{x\\,dx}{\\sqrt{9-x^2}}$ løses på tre linjer med $u=9-x^2$; trig-substitusjon gir samme svar med mye mer arbeid. Velg letteste gyldige vei.",
    },
    {
      question: "I kjeden $\\int_0^4 e^{\\sqrt x}\\,dx$ med $u=\\sqrt x$: hva blir det nye integralet?",
      options: ["$2\\displaystyle\\int_0^2 u\\,e^u\\,du$", "$\\displaystyle\\int_0^2 e^u\\,du$", "$2\\displaystyle\\int_0^4 u\\,e^u\\,du$", "$\\tfrac12\\displaystyle\\int_0^2 e^u\\,du$"],
      explanation: "$x=u^2$ gir $dx=2u\\,du$, og grensene oversettes: $0\\to0$, $4\\to2$. Faktoren $2u$ er det som tvinger fram delvis integrasjon i neste ledd.",
    },
    {
      question: "Hva er $\\displaystyle\\int_1^2\\frac{2x+1}{x^2+x}\\,dx$?",
      options: ["$\\ln 3$", "$\\ln 2$", "$\\ln 6$", "$\\tfrac32$"],
      explanation: "Telleren er nevnerens deriverte: $[\\ln|x^2+x|]_1^2 = \\ln6-\\ln2 = \\ln3$. (Alternativt via delbrøk — samme svar.)",
    },
    {
      question: "I det sykliske integralet $I=\\int e^{2x}\\cos x\\,dx$ ender man med $I = \\text{ledd} - \\frac14 I$. Hva er $I$?",
      options: ["$\\tfrac45\\cdot\\text{ledd}$ (pluss $C$)", "$\\tfrac54\\cdot\\text{ledd}$, ved å gange begge sider av likningen med $\\tfrac54$", "$\\text{ledd} - \\tfrac14$", "$4\\cdot\\text{ledd}$"],
      explanation: "$\\frac54I = \\text{ledd}$, så $I = \\frac45\\,\\text{ledd}+C$. Det algebraiske slutt-trekket er hele poenget med «løs for integralet».",
    },
    {
      question: "Hvilket integral er et rent omskrivingstilfelle (trig-identitet før substitusjon)?",
      options: ["$\\int\\sin^3x\\,dx$", "$\\int x\\sin x\\,dx$", "$\\int\\frac{\\sin x}{\\cos x}\\,dx$", "$\\int e^x\\sin x\\,dx$"],
      explanation: "$\\sin^3x = (1-\\cos^2x)\\sin x$ åpner for $u=\\cos x$. ($\\tan$-integralet er direkte ln-mønster, $x\\sin x$ er delvis, $e^x\\sin x$ er syklisk.)",
    },
    {
      question: "«Alternativt:»-praksisen i løsningsforslagene betyr at …",
      options: ["flere likeverdige veier gir full uttelling — velg den korteste", "bare den første metoden i fasit godkjennes", "alternative metoder gir halv uttelling", "man må vise to uavhengige metoder for å få full uttelling på oppgaven"],
      explanation: "Fasit fører gjerne to veier og honorerer begge. Du trenger bare én — men komplett ført.",
    },
    {
      question: "Hva er galt i denne føringen: «$\\int_0^{\\sqrt3}x\\sqrt{x^2+1}\\,dx = \\frac12\\int\\sqrt u\\,du = \\frac{u^{3/2}}{3} = \\frac{(x^2+1)^{3/2}}{3}$, innsatt: $\\frac{8-1}{3}=\\frac73$»?",
      options: ["Grensene forsvant underveis — de skal bokføres i boksen eller stå på integralene hele veien", "Sluttsvaret $\\frac73$ er galt, siden tilbakebytting til $x$ aldri er tillatt i et bestemt integral", "Substitusjonen $u=x^2+1$ er ugyldig her", "Man kan ikke bytte tilbake til $x$ i et bestemt integral"],
      explanation: "Tallet stemmer, men de grenseløse mellomstegene er føringshull: enten nye grenser på $u$-integralet, eller tilbakebytting med $x$-grensene eksplisitt. Fasitpraksis krever at grensene aldri «flyter».",
    },
    {
      question: "$\\displaystyle\\int_1^e\\frac{\\ln x}{x^2}\\,dx$: riktig $u/v'$-valg?",
      options: ["$u=\\ln x$, $v'=x^{-2}$", "$u=x^{-2}$, $v'=\\ln x$", "Substitusjon $u=\\ln x$ uten delvis", "$u=\\frac{\\ln x}{x}$, $v'=\\frac1x$"],
      explanation: "LIATE: logaritmen deriveres, potensen antideriveres ($v=-1/x$). Å antiderivere $\\ln x$ som $v'$ krever selv delvis — feil vei. Ren substitusjon feiler fordi $du=\\frac1x dx$, ikke $\\frac{1}{x^2}dx$.",
    },
    {
      question: "For $\\displaystyle\\int\\frac{dx}{(1+x^2)^2}$ gir $x=\\tan\\theta$ integranden …",
      options: ["$\\cos^2\\theta$", "$\\cos^4\\theta$", "$\\frac{1}{\\cos^2\\theta}$", "$\\sin^2\\theta$"],
      explanation: "$(1+x^2)^2 = \\cos^{-4}\\theta$ og $dx=\\cos^{-2}\\theta\\,d\\theta$: $\\cos^4\\theta\\cdot\\cos^{-2}\\theta = \\cos^2\\theta$. Deretter halvvinkelformelen.",
    },
    {
      question: "Hva er det siste steget i ethvert ubestemt teknikk-integral?",
      options: ["Tilbakebytting til opprinnelig variabel og $+C$", "Innsetting av grensene i den antideriverte funksjonen", "Å stryke integrasjonskonstanten", "Å derivere oppgaveteksten"],
      explanation: "Ubestemte integraler skal ende i den opprinnelige variabelen med integrasjonskonstant. (Bestemte: innsetting av de oversatte grensene i stedet.)",
    },
    {
      question: "$\\displaystyle\\int x^2\\arctan x\\,dx$ er en kjede av …",
      options: ["delvis → polynomdivisjon → ln-mønster", "substitusjon → delbrøk", "trig-substitusjon → delvis", "syklisk → delbrøk"],
      explanation: "Delvis (arctan deriveres) etterlater $\\int\\frac{x^3}{1+x^2}dx$ — uekte brøk som divideres og ender i ln-mønsteret. Tre teknikker i én oppgave.",
    },
    {
      question: "Delbrøk-ansatsen for $\\dfrac{x+4}{(x-2)(x+1)^2}$ har hvilke ledd?",
      options: ["$\\frac{A}{x-2}+\\frac{B}{x+1}+\\frac{C}{(x+1)^2}$", "$\\frac{A}{x-2}+\\frac{B}{(x+1)^2}$", "$\\frac{A}{x-2}+\\frac{Bx+C}{(x+1)^2}$", "$\\frac{Ax+B}{x-2}+\\frac{C}{x+1}$"],
      explanation: "Gjentatt lineær faktor får ett ledd per potens (både $\\frac{B}{x+1}$ og $\\frac{C}{(x+1)^2}$) i tillegg til $\\frac{A}{x-2}$ — tre konstanter.",
    },
    {
      question: "Hvorfor gir «fasitsvar uten synlig teknikk» null i sjanger B?",
      options: ["Åpen bok gjør at svaret kan stå i permen — det som måles, er teknikken", "Fordi fasitsvarene i permen ofte er gale", "Fordi sensor ikke sjekker sluttsvar", "Det gir ikke null — bare litt trekk"],
      explanation: "Oppgavene sier eksplisitt «med grunnleggende teknikker, ikke ved oppslag». Uten utledning kan ikke besvarelsen skilles fra ren avskrift — derfor null.",
    },
    {
      question: "$\\displaystyle\\int_0^{\\pi/3}\\sin^3x\\,dx = ?$",
      options: ["$\\dfrac{5}{24}$", "$\\dfrac{1}{4}$", "$\\dfrac{7}{24}$", "$\\dfrac{3}{8}$"],
      explanation: "$u=\\cos x$: $\\int_{1/2}^1(1-u^2)du = \\big[u-\\frac{u^3}3\\big]_{1/2}^1 = \\frac23-\\frac{11}{24} = \\frac5{24}$.",
    },
    {
      question: "I delvis-runden på $\\int_0^{\\pi/2}u\\cos u\\,du$: hva er $\\big[-\\cos u\\big]_0^{\\pi/2}$?",
      options: ["$1$", "$-1$", "$0$", "$2$"],
      explanation: "$-\\cos\\frac\\pi2 + \\cos 0 = 0+1 = 1$. Innsettingsfortegnene i cosinus-ledd er en klassisk kilde til slurvefeil i kjedene.",
    },
    {
      question: "Hvilken omskriving åpner $\\displaystyle\\int\\frac{dx}{e^x+e^{-x}}$ for beslutningstreet?",
      options: ["Gang med $e^x$ oppe og nede: $\\int\\frac{e^x\\,dx}{e^{2x}+1}$, så $u=e^x$ → arctan", "Delvis med $u=e^{-x}$", "Polynomdivisjon", "Trig-substitusjon $e^x=\\sin\\theta$"],
      explanation: "Utvidelsen med $e^x$ gir $\\frac{e^x}{e^{2x}+1}$ — substitusjonen $u=e^x$ har matchende $du$, og $\\int\\frac{du}{u^2+1}=\\arctan u$. Omskriving først, så treet.",
    },
  ],
  'mat111-uib-5-5': [
    {
      question: "Hva er korrekt føring av $\\displaystyle\\int_1^\\infty f(x)\\,dx$?",
      options: ["$\\displaystyle\\lim_{b\\to\\infty}\\int_1^b f(x)\\,dx$", "$\\big[F(x)\\big]_1^\\infty$ med $\\infty$ satt rett inn", "$\\displaystyle\\int_1^N f(x)\\,dx$ for et stort tall $N$", "$F(\\infty)-F(1)$, uten grensesymbol"],
      explanation: "Definisjonen er en grense av vanlige integraler — og $\\lim$-symbolet er selve føringskravet. «Sett inn $\\infty$» underkjennes.",
    },
    {
      question: "$\\displaystyle\\int_1^\\infty \\frac{dx}{x^p}$ konvergerer hvis og bare hvis …",
      options: ["$p>1$", "$p<1$", "$p\\ge 1$", "$p\\ne 1$"],
      explanation: "Ved uendelig må grafen falle fort: $p>1$. Merk at $p=1$ divergerer ($\\ln b\\to\\infty$), så $p\\ge1$ er feil — og $p\\ne1$ inkluderer f.eks. $p=\\tfrac12$, som også divergerer.",
    },
    {
      question: "$\\displaystyle\\int_0^1 \\frac{dx}{x^p}$ konvergerer hvis og bare hvis …",
      options: ["$p<1$", "$p>1$", "$p\\le 1$", "alle $p$"],
      explanation: "Ved null snur ulikheten: toppen må være lav nok, altså $p<1$. Grensetilfellet $p=1$ divergerer i begge ender.",
    },
    {
      question: "Hva er $\\displaystyle\\int_1^\\infty \\frac{dx}{x}$?",
      options: ["Divergerer — $p$-integralet med $p=1$", "Konvergerer med verdi $1$", "Konvergerer — mot verdien $\\ln 2$ i grensen", "Konvergerer med verdi $0$"],
      explanation: "Antideriverten er $\\ln x$, og $\\ln b\\to\\infty$ når $b\\to\\infty$ — grensetilfellet $p=1$ faller på feil side.",
    },
    {
      question: "Full uttelling for en konvergensavgjørelse med sammenligning krever (H2014-fasitkravet) …",
      options: ["uttalt ikke-negativitet OG navngitt majorant med endelig integral", "bare ulikheten $f(x)\\le g(x)$ på intervallet", "at integranden er kontinuerlig og begrenset på hele integrasjonsintervallet", "at majoranten er avtagende mot null"],
      explanation: "Begge premissene skal stå: $f\\ge 0$ og et navngitt sammenligningsintegral som konvergerer. Ulikheten alene er ikke et argument.",
    },
    {
      question: "Integranden i $\\displaystyle\\int_{-4}^{4}\\frac{dx}{x^2}$ er udefinert i $x=0$. Hva er riktig håndtering?",
      options: ["Splitt i $x=0$; hver del får sin egen ensidige grense", "Integrer med antideriverten $-1/x$ rett fra $-4$ til $4$", "Fjern punktet $x=0$ og integrer resten under ett", "Bruk symmetrien og doble integralet fra $0$ til $4$"],
      explanation: "Indre singularitet krever splitting — begge delene må konvergere. Direkte innsetting gir det absurde svaret $-\\tfrac12$ av en positiv integrand. (Symmetrigrepet strander på samme problem: delen fra $0$ divergerer.)",
    },
    {
      question: "Hva er $\\displaystyle\\int_0^\\infty e^{-x}\\,dx$?",
      options: ["$1$", "$0$", "$e$", "Divergerer"],
      explanation: "$\\lim_{b\\to\\infty}\\big[-e^{-x}\\big]_0^b = 0-(-1) = 1$. Denne halen er også standardmajoranten for raskt avtagende integrander.",
    },
    {
      question: "Singulariteten ligger i øvre endepunkt $c$. Hvilken grense hører til føringen?",
      options: ["$t\\to c^-$", "$t\\to c^+$", "$b\\to\\infty$", "$t\\to 0$"],
      explanation: "Du nærmer deg det farlige punktet nedenfra (fra venstre): $\\lim_{t\\to c^-}\\int_a^t$. Retningen skal stå i føringen.",
    },
    {
      question: "For $p>1$ er $\\displaystyle\\int_1^\\infty x^{-p}\\,dx$ lik …",
      options: ["$\\dfrac{1}{p-1}$", "$\\dfrac{1}{1-p}$", "$\\dfrac{1}{p}$", "$p-1$"],
      explanation: "$\\lim_{b\\to\\infty}\\Big[\\frac{x^{1-p}}{1-p}\\Big]_1^b = 0 - \\frac{1}{1-p} = \\frac{1}{p-1}$. Fortegnsslurv her gir det umulige svaret $\\frac{1}{1-p}<0$.",
    },
    {
      question: "For å vise at et uegentlig integral DIVERGERER med sammenligning, trenger du …",
      options: ["en divergent minorant: $f\\ge g\\ge 0$ der $\\int g$ divergerer", "en divergent majorant: $f\\le g$ på intervallet, der $\\int g$ divergerer", "en konvergent majorant over integranden", "at integranden ikke går mot null"],
      explanation: "Et divergent «gulv» presser integralet i været. En divergent majorant beviser ingenting — $f$ kan fint være liten under noe stort. (Og $f\\to 0$ hindrer ikke divergens: se $1/x$.)",
    },
    {
      question: "Hvorfor er $\\dfrac{2+\\sin x}{x^2}\\ge 0$ for alle $x\\ge 1$?",
      options: ["Fordi $|\\sin x|\\le 1$ gir $2+\\sin x\\ge 1$", "Fordi $\\sin x\\ge 0$ for alle $x\\ge 1$", "Fordi $x^2$ vokser raskere enn $\\sin x$ når $x\\to\\infty$", "Det er den ikke — den skifter fortegn"],
      explanation: "Standardgrepet for ikke-negativitet: begrensetheten $|\\sin x|\\le1$ uttales, og gir $2+\\sin x\\in[1,3]$. ($\\sin x$ selv skifter fortegn — det er konstanten 2 som redder.)",
    },
    {
      question: "Ulikheten $e^{-x^2}\\le e^{-x}$ gjelder …",
      options: ["for $x\\ge 1$, siden $x^2\\ge x$ der", "for alle $x$", "for $0\\le x\\le 1$", "aldri — funksjonene kan ikke sammenlignes"],
      explanation: "$x^2\\ge x \\iff x\\le 0$ eller $x\\ge 1$. På $[0,1]$ er ulikheten motsatt. Derfor splittes $\\int_0^\\infty e^{-x^2}dx$ i $[0,1]$ (vanlig integral) og halen $[1,\\infty)$.",
    },
    {
      question: "Hva er $\\displaystyle\\int_0^1 \\frac{dx}{\\sqrt x}$?",
      options: ["Konvergerer med verdi $2$", "Divergerer — singularitet i $0$", "Konvergerer med verdi $\\tfrac12$", "Konvergerer med verdi $1$"],
      explanation: "$p$-integral ved null med $p=\\tfrac12<1$: $\\lim_{t\\to0^+}\\big[2\\sqrt x\\big]_t^1 = 2$. Singularitet betyr ikke automatisk divergens.",
    },
    {
      question: "En besvarelse skriver «$\\int_2^\\infty f\\,dx = F(\\infty)-F(2)$» og setter $F(\\infty)=0$. Hva er innvendingen?",
      options: ["$F(\\infty)$ er ikke et tall — grenseovergangen må skrives som $\\lim$", "Verdien blir feil — grensen skal alltid regnes på nytt med delbrøkoppspalting", "Ingen — notasjonen er grei når grensen finnes", "$F$ skal evalueres i $0$, ikke i $\\infty$"],
      explanation: "Selv når tallet blir riktig, underkjennes føringen: $\\infty$ er ikke et innsettingspunkt. Skriv $\\lim_{b\\to\\infty}\\big(F(b)-F(2)\\big)$.",
    },
    {
      question: "Hvilken teknikk-kjede løser $\\displaystyle\\int_2^\\infty \\frac{dx}{x(\\ln x)^2}$?",
      options: ["Substitusjon $u=\\ln x$ med nye grenser, deretter $\\lim$", "Delbrøkoppspalting av $\\frac{1}{x(\\ln x)^2}$ i lineære faktorer", "Delvis integrasjon med $u=(\\ln x)^{-2}$", "Trigonometrisk substitusjon $x=2\\tan\\theta$"],
      explanation: "Faktoren $\\frac1x$ er den deriverte av $\\ln x$ — klassisk kjerne. Delbrøk krever polynomer i nevneren; $\\ln x$ er ikke et sådan.",
    },
    {
      question: "Konvergerer $\\displaystyle\\int_1^\\infty \\frac{2+\\cos x}{x}\\,dx$?",
      options: ["Nei — integranden ligger over $\\frac1x$, hvis integral divergerer", "Ja — telleren er begrenset av $3$", "Ja — sammenlign med den konvergente majoranten $\\frac{3}{x}$ over integranden", "Nei — integranden skifter fortegn og grensen oscillerer"],
      explanation: "$2+\\cos x\\ge 1$ gir minoranten $\\frac1x$ — $p$-integralet med $p=1$ divergerer. Begrenset teller hjelper ikke når nevneren bare er $x$; $\\int 3/x\\,dx$ divergerer også (majoranten har feil skjebne), og integranden er positiv, så oscillasjon er ikke problemet.",
    },
  ],
  'mat111-uib-5-6': [
    {
      question: "Området under $y=f(x)\\ge 0$ på $[a,b]$ dreies om $x$-aksen. Volumet er …",
      options: ["$\\pi\\displaystyle\\int_a^b f(x)^2\\,dx$", "$\\pi\\displaystyle\\int_a^b f(x)\\,dx$", "$2\\pi\\displaystyle\\int_a^b x\\,f(x)\\,dx$", "$\\displaystyle\\int_a^b f(x)^2\\,dx$"],
      explanation: "Skiver vinkelrett på aksen: hver har areal $\\pi R^2$ med $R=f(x)$. Skallformelen ($2\\pi\\int xf$) hører til rotasjon om $y$-aksen, og uten $\\pi$ er det ikke et volum.",
    },
    {
      question: "Ringmetodens integrand med ytre radius $R$ og indre radius $r$ er …",
      options: ["$R^2-r^2$", "$(R-r)^2$", "$R - r$", "$2Rr$"],
      explanation: "Ringens areal er $\\pi R^2 - \\pi r^2$ — kvadrér radiene hver for seg. $(R-r)^2$ er sjangerens klassiske algebrafelle.",
    },
    {
      question: "Sylinderskallmetoden om $y$-aksen gir volumet …",
      options: ["$2\\pi\\displaystyle\\int_a^b x\\,h(x)\\,dx$", "$\\pi\\displaystyle\\int_a^b h(x)^2\\,dx$", "$2\\pi\\displaystyle\\int_a^b h(x)\\,dx$", "$\\pi\\displaystyle\\int_a^b x^2\\,h(x)\\,dx$"],
      explanation: "Omkrets ($2\\pi x$) × høyde ($h(x)$) × tykkelse ($dx$). Uten radiusfaktoren $x$ er det ikke et volum — det er den vanligste skallfeilen.",
    },
    {
      question: "Området er gitt som $y=f(x)$, og rotasjonsaksen er $y$-aksen. Hvilken metode slipper å invertere $f$?",
      options: ["Sylinderskall", "Skivemetoden", "Ringmetoden", "Ingen — inversjon kreves alltid"],
      explanation: "Skall integrerer i $x$ og bruker $f(x)$ direkte som høyde. Skiver/ringer om $y$-aksen krever randen som $x=g(y)$ — altså inversjon.",
    },
    {
      question: "Hva mangler i «$V = 2\\pi\\int_0^1 h(x)\\,dx$» som skallformel?",
      options: ["Radiusfaktoren $x$ i integranden", "Faktoren $\\pi$ — det skal være $\\pi^2$", "Kvadratet på høyden $h(x)$", "Ingenting — formelen er riktig"],
      explanation: "Skallets volum er omkrets × høyde × tykkelse $= 2\\pi x\\,h(x)\\,dx$. Uten $x$ summerer du bare (skalerte) arealer.",
    },
    {
      question: "Området under $y=\\sqrt x$ for $0\\le x\\le 4$ dreies om $x$-aksen. Volumet er …",
      options: ["$8\\pi$", "$16\\pi$", "$4\\pi$", "$8$"],
      explanation: "$V=\\pi\\int_0^4(\\sqrt x)^2dx = \\pi\\int_0^4 x\\,dx = 8\\pi$. Uten $\\pi$ har du glemt at skivene er sirkler.",
    },
    {
      question: "Kjapp sjekk på om et uttrykk er volum eller areal:",
      options: ["Volumformlene bærer $\\pi$ eller $2\\pi$; arealet mellom kurver har ingen", "Volum har alltid større tallverdi enn areal", "Areal bruker bestemte integraler, volum bruker alltid ubestemte integraler", "Volum krever alltid to funksjoner, areal én"],
      explanation: "Kjennetegnet sitter i formelen: $\\pi R^2$-skiver eller $2\\pi x$-skall mot $\\int(\\text{øvre}-\\text{nedre})$. H2016-fella var nettopp å levere det ene når det ble spurt om det andre.",
    },
    {
      question: "Gabriels horn — $y=\\frac1x$ for $x\\ge1$ dreid om $x$-aksen — har volum …",
      options: ["$\\pi$, siden $\\int_1^\\infty x^{-2}dx$ konvergerer ($p=2$)", "uendelig, siden legemet strekker seg uendelig langt bortover aksen", "$2\\pi$, siden $\\int_1^\\infty x^{-2}dx = 2$", "$\\pi^2$, siden begge faktorene gir $\\pi$"],
      explanation: "$V=\\pi\\int_1^\\infty x^{-2}dx = \\pi\\cdot 1 = \\pi$. Uendelig utstrekning hindrer ikke endelig volum — det avgjøres av $p$-integralet.",
    },
    {
      question: "Snus hornet til $y=\\frac{1}{\\sqrt x}$ for $x\\ge 1$ (om $x$-aksen), blir volumet …",
      options: ["uendelig — kvadreringen gir $p$-integralet med $p=1$", "$\\pi$ — nøyaktig samme verdi som for det opprinnelige $\\frac1x$-hornet", "$2\\pi$ — dobbelt så stort som for $\\frac1x$", "$\\frac{\\pi}{2}$ — halvparten av det forrige"],
      explanation: "$R^2 = \\frac1x$, og $\\int_1^\\infty\\frac{dx}{x}$ divergerer. Kvadreringen flytter $p$ — fra $\\tfrac12$ til $1$ — og $p=1$ er akkurat for tykt.",
    },
    {
      question: "En beholder har indre radius $x=g(y)$ i høyde $y$. Volumet fylt til høyde $h$ er …",
      options: ["$V(h) = \\pi\\displaystyle\\int_0^h g(y)^2\\,dy$", "$V(h) = \\pi\\,g(h)^2$", "$V(h) = 2\\pi\\displaystyle\\int_0^h y\\,g(y)\\,dy$", "$V(h) = \\pi\\displaystyle\\int_0^h g(y)\\,dy$"],
      explanation: "Skiver i høyderetningen, med $h$ i grensen — $V$ er en funksjon av fyllingshøyden. $\\pi g(h)^2$ er væskespeilets AREAL, altså $V'(h)$.",
    },
    {
      question: "Hva er $V'(h)$ når $V(h)=\\pi\\int_0^h g(y)^2\\,dy$?",
      options: ["$\\pi\\,g(h)^2$ — væskespeilets areal $A(h)$", "$\\pi\\,g(h)$ — væskespeilets omkrets delt på 2", "$2\\pi\\,g(h)\\,g'(h)$ — kjerneregelen på radien", "$0$ — integralet har faste grenser"],
      explanation: "Analysens fundamentalteorem: deriver med hensyn på øvre grense og sett inn. Dette er første ledd i Torricelli-kjeden (kap. 6.3).",
    },
    {
      question: "Området mellom $y=x$ og $y=x^2$ dreies om $x$-aksen. Volumet er …",
      options: ["$\\frac{2\\pi}{15}$", "$\\dfrac{\\pi}{6}$", "$\\dfrac16$", "$\\dfrac{\\pi}{15}$"],
      explanation: "Ring: $\\pi\\int_0^1(x^2-x^4)dx = \\pi(\\tfrac13-\\tfrac15) = \\tfrac{2\\pi}{15}$. $\\tfrac16$ er OMRÅDETS AREAL — kontrastfellen. $\\tfrac{\\pi}{6}$ er volumet av området mellom $\\sqrt x$ og $x$.",
    },
    {
      question: "Skallhøyden $h(x)$ for området mellom to grafer er …",
      options: ["øvre minus nedre graf i posisjon $x$", "avstanden fra $x$-aksen til øverste graf", "gjennomsnittet av de to grafene", "differansen kvadrert"],
      explanation: "Stripen i posisjon $x$ går fra nedre til øvre graf — det er dens lengde som feies rundt. Kvadrering hører hjemme i skive-/ringmetoden, ikke i skall.",
    },
    {
      question: "H2016-fasitten trakk kandidater som …",
      options: ["skrev av et lærebokeksempel som lignet, uten å svare på oppgavens spørsmål", "førte begge metodene som likeverdige alternativer og fikk samme svar to ganger", "begrunnet metodevalget sitt før regningen", "tegnet en skisse med rotasjonsaksen markert"],
      explanation: "Avskrift av noe som ligner er ikke svar på DIN oppgave — radiene skal settes opp fra ditt område og din akse. De tre andre er god skikk som honoreres.",
    },
    {
      question: "Området under $y=e^{-2x}$ for $x\\ge 0$ dreies om $x$-aksen. Riktig oppsett er …",
      options: ["$\\pi\\displaystyle\\lim_{b\\to\\infty}\\int_0^b e^{-4x}\\,dx$", "$\\pi\\displaystyle\\int_0^\\infty e^{-2x}\\,dx$ uten videre", "$2\\pi\\displaystyle\\lim_{b\\to\\infty}\\int_0^b x\\,e^{-2x}\\,dx$", "$\\pi\\big[e^{-4x}\\big]_0^\\infty$ med $\\infty$ satt inn"],
      explanation: "Kvadrert radius: $(e^{-2x})^2=e^{-4x}$, og uegentlige volumintegraler følger lim-føringen fra kap. 5.5. (Skalloppsettet ville hørt til rotasjon om $y$-aksen.) Verdien blir $\\tfrac{\\pi}{4}$.",
    },
    {
      question: "«Alternativt:»-føringen i volumoppgaver betyr at …",
      options: ["begge metodene føres som likeverdige — og samsvaret er en innebygd kontroll", "den andre metoden nevnes bare ved navn helt til slutt i besvarelsen, uten regning", "man trekkes hvis man velger den tyngste metoden", "kun én metode kan gi full uttelling"],
      explanation: "Løsningsforslagene fører regelmessig skiver OG skall som likeverdige veier. Å velge tungt koster tid, ikke poeng — og navnedropp uten regning er ingen føring.",
    },
  ],
  'mat111-uib-5-7': [
    {
      question: "Steglengden i numerisk integrasjon med $n$ delintervaller på $[a,b]$ er …",
      options: ["$h = \\dfrac{b-a}{n}$", "$h = \\dfrac{b-a}{n+1}$", "$h = \\dfrac{n}{b-a}$", "$h = \\dfrac{b-a}{2n}$"],
      explanation: "$n$ delintervaller à lengde $h$ skal dekke $[a,b]$. Fellen $n+1$ kommer av å blande delintervaller ($n$) og noder ($n+1$).",
    },
    {
      question: "Vektmønsteret i trapesformelen $T_n$ er …",
      options: ["$1,2,2,\\dots,2,1$", "$1,4,2,4,\\dots,4,1$", "$1,1,1,\\dots,1,1$", "$2,1,1,\\dots,1,2$"],
      explanation: "Indre noder deles av to trapeser og teller dobbelt; endepunktene én gang. $1,4,2,\\dots$ er Simpson — å blande dem er en klassisk tabellfeil.",
    },
    {
      question: "Vektmønsteret i Simpsons formel $S_n$ er …",
      options: ["$1,4,2,4,\\dots,2,4,1$", "$1,2,2,\\dots,2,1$", "$1,3,3,1,\\dots$ som i binomialkoeffisientene", "$4,1,2,1,\\dots,1,4$"],
      explanation: "Oddetallsnodene (parabelmidtpunktene) veier 4, indre partallsnoder 2, endene 1 — alltid 4 nest først og nest sist. Kontroll: vektsum $3n$.",
    },
    {
      question: "Hvilket krav stiller Simpsons metode til $n$?",
      options: ["$n$ må være partall", "$n$ må være odde", "$n$ må være delelig med 4", "Ingen krav — alle $n$ duger"],
      explanation: "Parablene bruker delintervallene i par. En Simpson-regning med odde $n$ er ugyldig uansett hvor rimelig tallet ser ut.",
    },
    {
      question: "Feilskranken for trapesmetoden er …",
      options: ["$|E_T|\\le \\dfrac{K(b-a)^3}{12n^2}$ med $K=\\max|f''|$", "$|E_T|\\le \\dfrac{K(b-a)^5}{180n^4}$ med $K=\\max|f^{(4)}|$", "$|E_T|\\le \\dfrac{K(b-a)^2}{12n}$ med $K=\\max|f'|$", "$|E_T|\\le \\dfrac{K}{12n^2}$ uten intervallfaktor"],
      explanation: "Krumningen ($f''$) skiller korde fra graf — og $(b-a)^3$ skal med. Femtepotens-varianten er Simpsons skranke.",
    },
    {
      question: "Feilskranken for Simpsons metode er …",
      options: ["$|E_S|\\le \\dfrac{K(b-a)^5}{180n^4}$ med $K=\\max|f^{(4)}|$", "$|E_S|\\le \\dfrac{K(b-a)^3}{12n^2}$ med $K=\\max|f''|$", "$|E_S|\\le \\dfrac{K(b-a)^4}{90n^3}$ med $K=\\max|f'''|$", "$|E_S|\\le \\dfrac{K(b-a)^5}{180n^2}$ med $K=\\max|f^{(4)}|$"],
      explanation: "Fjerdederiverte og $n^4$ — det er $n^4$ som gjør Simpson så billig i delintervaller. Sjekk begge detaljene; distraktorene bommer på én hver.",
    },
    {
      question: "Skranken $K$ i feilformlene skal være …",
      options: ["et begrunnet maksimum av $|f''|$ (hhv. $|f^{(4)}|$) på hele $[a,b]$", "verdien av $|f''|$ i midtpunktet av intervallet, der feilen er størst", "verdien av $|f''|$ i venstre endepunkt, alltid", "gjennomsnittet av $|f''|$ over intervallet"],
      explanation: "Maksimum på HELE intervallet, med begrunnelse (typisk monotoni) — eller en begrunnet grov overskranke. Endepunktet er bare riktig når monotonien tilsier det.",
    },
    {
      question: "En Simpson-dimensjonering gir $n\\ge 4{,}55$. Hva er svaret?",
      options: ["$n=6$", "$n=5$", "$n=4$", "$n=8$"],
      explanation: "Rund opp — og videre opp til partall: $5$ er odde og ugyldig i Simpson, $4$ bryter garantien, og $8$ er unødvendig stor.",
    },
    {
      question: "Hvorfor er Simpsons metode eksakt for tredjegradspolynomer?",
      options: ["Fordi $f^{(4)}\\equiv 0$ gjør feilskranken til null for alle $n$", "Fordi parabler kan legges gjennom fire vilkårlige punkter i planet", "Fordi vektene $1,4,1$ summerer til 6", "Den er ikke eksakt — bare svært god"],
      explanation: "Grad $\\le 3$ gir $f^{(4)}\\equiv0$, så $K=0$ i skranken — feilen tvinges til null. (Parabler er grad 2; eksaktheten for grad 3 er symmetri-gratisgraden.)",
    },
    {
      question: "Dobles $n$ i Simpsons metode, deles feilskranken på …",
      options: ["$16$", "$32$", "$4$", "$8$"],
      explanation: "$n^4$ i nevneren: $2^4=16$. Trapes har $n^2$ og deles bare på 4 — derfor vinner Simpson kappløpet om nøyaktighet per node. ($32$ ville krevd $n^5$-avhengighet.)",
    },
    {
      question: "Trapesmetoden med $n=2$ på $\\displaystyle\\int_0^2 x^2\\,dx$ (noder $0,1,2$) gir …",
      options: ["$T_2 = 3$", "$T_2 = \\dfrac83$", "$T_2 = 5$", "$T_2 = 2{,}5$"],
      explanation: "$T_2=\\frac12[0+2\\cdot1+4]=3$. ($\\frac83$ er den EKSAKTE verdien — trapes overestimerer konvekse funksjoner.)",
    },
    {
      question: "En fartstabell i m/s integreres over tid i sekunder med Simpson. Svaret får enhet …",
      options: ["meter", "meter per sekund", "sekunder", "meter per sekund i andre"],
      explanation: "$\\int v\\,dt$ har enhet (m/s)·s = m — tilbakelagt strekning. Enheten skal med i konklusjonssetningen.",
    },
    {
      question: "For $\\displaystyle\\int_0^1 x^4\\,dx$ med feilkrav $0{,}01$: $f''(x)=12x^2$ gir $K=12$, og trapesmetoden trenger …",
      options: ["$n=10$", "$n=12$", "$n=4$", "$n=100$"],
      explanation: "$\\frac{12}{12n^2}\\le0{,}01 \\Rightarrow n^2\\ge100 \\Rightarrow n\\ge10$. ($K$ hentes i $x=1$ fordi $12x^2$ er voksende — begrunnelsen skal med.)",
    },
    {
      question: "Et moteksempel der trapes slår Simpson (V2020-varianten) er …",
      options: ["$\\cos(2\\pi x)$ på $[0,1]$ med $n=2$: $T_2=0$ (eksakt), $S_2=-\\tfrac13$", "$x^3$ på $[0,2]$ med $n=2$: der er trapes eksakt og Simpson bommer grovt", "$e^x$ på $[0,1]$ med stort $n$: trapes vinner alltid til slutt", "umulig — feilskrankene garanterer at Simpson alltid er nærmest"],
      explanation: "Tre noder ser en hel cosinus-periode: verdiene $1,-1,1$ gir $T_2=0$ (treff) og $S_2=-\\tfrac13$ (grov bom). For $x^3$ er det motsatt (Simpson eksakt), og skrankene er garantier ovenfra — ikke løfter om rangering.",
    },
    {
      question: "Kontrollsummen av vektene er … (trapes / Simpson)",
      options: ["$2n$ / $3n$", "$n$ / $2n$", "$2n$ / $4n$", "$n+1$ / $n+1$"],
      explanation: "Trapes: $1+2(n-1)+1 = 2n$. Simpson: $1+4\\cdot\\frac n2+2(\\frac n2-1)+1 = 3n$. Tell før du summerer — ett glemt 2-tall er sjangerens vanligste slurvefeil.",
    },
    {
      question: "Forholdet mellom feilskranke og faktisk feil:",
      options: ["Skranken er en garanti — den faktiske feilen er som regel mindre", "Skranken treffer den faktiske feilen eksakt", "Den faktiske feilen er alltid nøyaktig halvparten av den oppgitte skranken", "Skranken gjelder bare når $f$ er et polynom"],
      explanation: "For $T_4$ på $\\int_1^2 dx/x$: skranke $0{,}0104$, faktisk feil $0{,}0039$. Garanti ovenfra — aldri fasit, og aldri gjenbrukbar som «skranke» i en annen oppgave.",
    },
  ],
  'mat111-uib-6-1': [
    {
      question: "Føringsmalens steg 1 for $y'=g(x)h(y)$ — hva SKAL skje før du deler på $h(y)$?",
      options: ["Nullpunktene til $h$ noteres som konstante løsninger og sjekkes mot initialbetingelsen", "Likningen integreres direkte på begge sider uten omforming", "Integrasjonskonstanten $C$ bestemmes fra initialbetingelsen — det må alltid gjøres før variablene separeres", "Løsningen kontrolleres ved innsetting i likningen"],
      explanation: "Divisjonen på $h(y)$ er bare lovlig når $h(y)\\neq 0$ — derfor må nullpunktene noteres og sjekkes FØRST. Konstantbestemmelse og innsettingskontroll er steg 4 og 5.",
    },
    {
      question: "Hvilke konstante løsninger har $y' = y(2-y)$?",
      options: ["$y\\equiv 0$ og $y\\equiv 2$", "Bare $y\\equiv 0$", "Bare $y\\equiv 2$", "Ingen — høyresiden avhenger av $y$"],
      explanation: "Konstante løsninger er nullpunktene til $h(y)=y(2-y)$: begge faktorene gir hvert sitt nullpunkt. Å glemme den ene (typisk $y\\equiv M$) er en dokumentert feil.",
    },
    {
      question: "Oppgaven har INGEN initialbetingelse. Hva gjør du med de konstante løsningene?",
      options: ["De skal stå igjen som en del av svaret", "De forkastes — de er aldri interessante uten startverdi", "De brukes bare som kontroll av langtidsoppførselen", "De skrives om til $A=0$-tilfellet og droppes"],
      explanation: "Uten initialbetingelse er det ingenting som avviser dem: de konstante løsningene er fullverdige løsninger og hører med i svaret. ($A=0$-merknaden fanger bare $y\\equiv 0$-tilfellet i noen likninger.)",
    },
    {
      question: "Delbrøkoppspaltingen av $\\dfrac{1}{y(M-y)}$ er",
      options: ["$\\dfrac{1}{M}\\Big(\\dfrac{1}{y}+\\dfrac{1}{M-y}\\Big)$", "$\\dfrac{1}{y}+\\dfrac{1}{M-y}$", "$\\dfrac{1}{M}\\Big(\\dfrac{1}{y}-\\dfrac{1}{M-y}\\Big)$", "$\\dfrac{M}{y}+\\dfrac{M}{M-y}$"],
      explanation: "Gang opp og sett inn $y=0$ og $y=M$: begge koeffisientene blir $1/M$. Å miste $\\frac1M$-faktoren er delbrøk-feilen fasitpraksisen oftest retter. Kontroller ved å sette på felles brøkstrek.",
    },
    {
      question: "$\\displaystyle\\int\\frac{dy}{3-y}$ er lik",
      options: ["$-\\ln|3-y| + C$", "$\\ln|3-y| + C$", "$\\dfrac{1}{3-y^2/2} + C$", "$\\ln|y-3|\\cdot y + C$"],
      explanation: "Kjerneregelen: den indre deriverte av $3-y$ er $-1$, så antideriverten får minus foran. Dette fortegnet er den klassiske regnefeilen i logistisk-utregningen.",
    },
    {
      question: "Integrasjonen ga $\\ln|y| = G(x) + C$. Standardføringen for absoluttverdien er:",
      options: ["Eksponentiér til $|y|=e^Ce^{G(x)}$ og samle fortegn og konstant i $A=\\pm e^C$: $y=Ae^{G(x)}$", "Dropp absoluttverdien — den påvirker aldri sluttsvaret", "Del i to tilfeller $y>0$ og $y<0$ og lever begge som separate svar", "Skriv $y = e^{G(x)} + C$ med konstanten lagt til som et eget ledd etter at begge sider er eksponentiert"],
      explanation: "$A=\\pm e^C$-omskrivingen viser at absoluttverdien er håndtert, ikke stille droppet — det er poenget sensor ser etter. «Legge til $C$ til slutt» gir feil konstantstruktur.",
    },
    {
      question: "Når skal integrasjonskonstanten $C$ inn i regningen?",
      options: ["Idet du integrerer — og den bestemmes fra initialbetingelsen etterpå", "Etter at $y$ er isolert, som et tillegg på slutten", "Før separasjonen, som startverdi for $y$", "På begge sider av likningen, som $C_1$ og $C_2$ som holdes atskilt gjennom hele resten av utregningen"],
      explanation: "$C$ hører til integrasjonssteget; å «legge til $C$ til slutt» etter eksponentiering gir feil konstantstruktur. To konstanter slås sammen til én — de trengs ikke atskilt.",
    },
    {
      question: "Logistisk likning $y'=ky(M-y)$ med $0<y(0)<M$. Hva er $\\displaystyle\\lim_{x\\to\\infty}y(x)$?",
      options: ["$M$ — løsningen vokser mot bæreevnen uten å nå den", "$M/2$ — nivået der veksten er størst", "$0$ — veksten dør ut når faktoren $M-y$ blir liten", "Grensen avhenger av $k$ og kan ikke avgjøres generelt"],
      explanation: "Løsninger som starter i $(0,M)$ vokser mot metningsnivået $M$. $M/2$ er der veksten er raskest — ikke der den ender. $k$ styrer bare hvor fort det går.",
    },
    {
      question: "I logistisk vekst er veksten $y'$ størst når",
      options: ["$y = M/2$ — produktet $y(M-y)$ maksimeres når faktorene balanserer", "$y$ er nær $0$ — der er det flest ressurser igjen, så totalveksten i bestanden er størst der", "$y$ er nær $M$ — der er bestanden størst", "$x = 0$ — veksten avtar alltid med tiden"],
      explanation: "$y'$ er proporsjonal med produktet $y(M-y)$, som er størst i symmetripunktet $y=M/2$ (vendepunktet på løsningskurven). Nær $0$ og nær $M$ er én av faktorene liten.",
    },
    {
      question: "Hvilken av likningene er IKKE separabel?",
      options: ["$y' = x + y$", "$y' = xe^{-y}$", "$y' = y\\cos x$", "$y' = e^xe^y$"],
      explanation: "En sum som $x+y$ kan ikke faktoriseres som $g(x)h(y)$ — men likningen er lineær (kap. 6.2). De tre andre er produkter av en ren $x$-faktor og en ren $y$-faktor.",
    },
    {
      question: "$y' = 2xe^{-y}$ har ingen konstante løsninger. Hva krever føringen likevel?",
      options: ["Én setning som viser at du har sjekket: $e^{-y}$ er aldri null", "Ingenting — steg 1 gjelder bare når konstante løsninger finnes", "At $y\\equiv 0$ testes mot initialbetingelsen og avvises", "At likningen i stedet løses som lineær likning"],
      explanation: "Sjekken skal dokumenteres også når svaret er «ingen»: én setning holder. $y\\equiv 0$ er ikke en konstant løsning her ($e^{-0}=1\\neq 0$), så det er ingenting å teste mot initialbetingelsen.",
    },
    {
      question: "Hva består innsettingskontrollen (steg 5) av?",
      options: ["Deriver svaret, sett $y$ og $y'$ inn i den opprinnelige likningen, og sjekk initialbetingelsen", "Sett svaret inn i den separerte formen $\\frac{dy}{h(y)}=g(x)\\,dx$ og sjekk at begge sider får samme konstant", "Sjekk at integrasjonskonstanten er entydig bestemt", "Regn ut $y$ i ett ekstra punkt og sammenlign med retningsfeltet"],
      explanation: "Kontrollen går mot den OPPRINNELIGE likningen (pluss initialbetingelsen) — den fanger fortegns-, delbrøk- og konstantfeil på under et minutt.",
    },
    {
      question: "$y^2 = x^2+4$ med $y(0)=2$. Hvordan velges fortegnet i $y=\\pm\\sqrt{x^2+4}$?",
      options: ["Initialbetingelsen $y(0)=2>0$ velger plusstegnet", "Begge fortegn beholdes i sluttsvaret", "Plusstegnet velges alltid — rotuttrykk er per konvensjon positive", "Fortegnet bestemmes av fortegnet til $x$"],
      explanation: "Én løsning skal ut, og det er startverdien som peker den ut: $y(0)=2$ passer bare plussgrenen. Konvensjonen om positiv kvadratrot handler om symbolet $\\sqrt{\\ }$, ikke om løsningsvalget.",
    },
    {
      question: "Hvorfor holder løsningen i eksempel 3 ($y(0)=1$, konstante løsninger $y\\equiv 0$ og $y\\equiv 3$) seg i intervallet $(0,3)$?",
      options: ["Løsningskurver kan ikke krysse hverandre (entydighet) — de konstante løsningene sperrer", "Fordi delbrøkoppspaltingen bare er definert for $0<y<3$", "Fordi initialverdien er mindre enn bæreevnen, og logistiske løsninger alltid er voksende overalt der de finnes", "Fordi $\\ln$-uttrykkene ellers ville byttet fortegn"],
      explanation: "Entydighetsteoremet gir at to løsningskurver aldri krysser — så en løsning som starter mellom de konstante løsningene, er fanget der. Det er dette som begrunner at absoluttverdiene kan sløyfes.",
    },
    {
      question: "Hva er spesielt med initialverdiproblemet $y'=\\sqrt{y}$, $y(0)=0$?",
      options: ["Entydigheten svikter — både $y\\equiv 0$ og $y=x^2/4$ løser det for $x\\ge 0$", "Det har ingen løsninger i det hele tatt, siden $\\sqrt{y}$ ikke er deriverbar i $0$ og likningen bryter sammen der", "Det har nøyaktig én løsning, som alle andre initialverdiproblemer", "Likningen er ikke separabel når høyresiden er en rot"],
      explanation: "$\\sqrt{y}$ endrer seg ikke glatt i $y=0$, så entydighetsteoremets forutsetning ryker — og to ulike løsninger passer. Eksamensoppgaver stilles med initialbetingelser der teorien holder.",
    },
    {
      question: "Sluttformen på logistiske løsninger er $y = \\dfrac{M}{1+Be^{-kMx}}$ med",
      options: ["$B = \\dfrac{M-y_0}{y_0}$", "$B = \\dfrac{y_0}{M-y_0}$", "$B = \\dfrac{y_0}{M}$", "$B = M - y_0$"],
      explanation: "Sett $x=0$: $y_0 = \\frac{M}{1+B}$ gir $1+B = M/y_0$, altså $B=(M-y_0)/y_0$. Kontroller alltid med innsetting av $x=0$ — de tre andre variantene stryker på den testen.",
    },
    {
      question: "Løsningen $y=\\dfrac{1}{x+1}$ av $y'=-y^2$, $y(0)=1$: hva er riktig om definisjonsområdet?",
      options: ["Løsningen lever på intervallet $x>-1$ — det som inneholder initialpunktet", "Den gjelder for alle $x\\neq -1$, forstått som to separate grener som til sammen utgjør én og samme løsning", "Den gjelder for alle $x$, siden likningen er definert overalt", "Den gjelder bare for $x>0$, der initialbetingelsen er gitt"],
      explanation: "En løsning lever på ETT intervall, og det er intervallet rundt initialpunktet $x=0$: altså $x>-1$. At selve likningen er snill overalt, hindrer ikke løsningen i å blåse opp.",
    },
    {
      question: "Likevekten $y\\equiv M$ i logistisk vekst er stabil fordi",
      options: ["naboløsninger trekkes mot den — løsninger under $M$ vokser opp mot nivået", "den er den største av de konstante løsningene, og en større konstant betyr alltid sterkere stabilitet", "$y'$ er størst der, så løsningene suges inn", "initialbetingelsen alltid ligger under $M$"],
      explanation: "Stabilitet handler om hva naboløsninger gjør: under $M$ er $y'>0$ (vokser mot $M$), rett over er $y'<0$. I kontrast er $y\\equiv 0$ ustabil — små bestander vokser VEKK fra null. ($y'$ er for øvrig null i likevekten, ikke stor.)",
    },
  ],
  'mat111-uib-6-2': [
    {
      question: "Likningen er $xy' + 2y = 4x^2$ (for $x>0$). Hva er $p(x)$?",
      options: ["$\\dfrac{2}{x}$ — etter at likningen er delt på $x$", "$2$ — koeffisienten foran $y$ nøyaktig slik likningen står skrevet", "$4x$ — høyresiden etter deling", "$x$ — koeffisienten foran $y'$"],
      explanation: "$p$ kan bare leses av STANDARDFORMEN $y'+p(x)y=q(x)$: del på $x$ først og få $y'+\\frac2x y = 4x$. Å lese av $p=2$ direkte gir feil integrerende faktor. ($4x$ er $q$, ikke $p$.)",
    },
    {
      question: "Hva er den integrerende faktoren til $y' - 3y = x$?",
      options: ["$e^{-3x}$", "$e^{3x}$", "$e^{-3x^2/2}$", "$-3e^{x}$"],
      explanation: "$p=-3$ — fortegnet følger med inn i $\\mu = e^{\\int p\\,dx} = e^{-3x}$. Å miste minuset er den vanligste $\\mu$-feilen.",
    },
    {
      question: "Definisjonen av den integrerende faktoren er $\\mu(x) =$",
      options: ["$e^{\\int p\\,dx}$", "$\\int e^{p(x)}\\,dx$", "$e^{\\int q\\,dx}$", "$e^{p(x)}$"],
      explanation: "Eksponenten er en antiderivert av koeffisientfunksjonen $p$ (én holder — konstanten kan sløyfes). Det er $p$, ikke høyresiden $q$, som styrer $\\mu$.",
    },
    {
      question: "Hvorfor skal linjen «$(\\mu y)' = \\mu q$» stå eksplisitt i føringen?",
      options: ["Den ER gjenkjenningen av venstresiden som en produktderivert — og der ligger føringspoenget", "Fordi den erstatter innsettingskontrollen på slutten", "Fordi konstanten $C$ må bestemmes i akkurat den linjen", "Den er valgfri pynt — løsningsforslagene ser uansett bare på sluttformelen for $y$, ikke på mellomregningen"],
      explanation: "Uten gjenkjenningslinjen blir venstresiden stående som to ledd som mange integrerer hver for seg — feil. Linjen viser at du forstår hvorfor metoden virker, og det er der løsningsforslagene legger poenget.",
    },
    {
      question: "Forenkle $\\mu = e^{2\\ln x}$ (for $x>0$):",
      options: ["$x^2$", "$2x$", "$e^{2x}$", "$\\ln(x^2)$"],
      explanation: "$e^{a\\ln x} = x^a$, så $e^{2\\ln x} = x^2$. Uforenklet $\\mu$ gjør gjennomgangingen unødig stygg — forenkle før du ganger gjennom.",
    },
    {
      question: "Standardføringen bestemmer konstanten $C$",
      options: ["etter at $y$ er isolert — innsetting i $\\mu y = \\int\\mu q\\,dx + C$ er feilutsatt siden $\\mu(x_0)\\neq 1$ generelt", "i linjen $\\mu y = \\int\\mu q\\,dx + C$, før divisjonen på $\\mu$ — det sparer regning og er derfor standardføringens anbefaling", "før integrasjonen, direkte fra initialbetingelsen", "aldri — den generelle løsningen er sluttsvaret"],
      explanation: "Begge tidspunkter er matematisk mulige, men å sette inn før $y$ er isolert krever at du husker $\\mu(x_0)$-faktoren — en klassisk glipp. Isolér $y$ først; da er innsettingen ren.",
    },
    {
      question: "$y' + 2y = e^{-2x}$: hva er «resonans-signalet» i utregningen?",
      options: ["$\\mu q = e^{2x}e^{-2x} = 1$ blir konstant — forvent et $x$-ledd i svaret", "$\\mu$ blir konstant, så metoden bryter sammen", "Likningen slutter å være lineær i det øyeblikket og må i stedet løses separabelt", "Integralet $\\int\\mu q\\,dx$ divergerer"],
      explanation: "Når $q$ har samme form som den homogene løsningen, blir $\\mu q$ konstant og integralet gir $x + C$: løsningen inneholder $xe^{-2x}$. Ingen ny teknikk trengs — malen håndterer det automatisk.",
    },
    {
      question: "I variasjon av parameter settes $y = u(x)e^{-\\int p\\,dx}$. Hva er kontrollen på at du har regnet riktig?",
      options: ["Leddene med $u$ uten derivert kansellerer, og det står igjen $u' = \\mu q$", "Uttrykket for $u$ blir alltid et polynom", "$u$-leddene samler seg til $(\\mu u)' = q$", "Alle ledd som inneholder faktoren $e^{-\\int p\\,dx}$ forsvinner helt fra likningen"],
      explanation: "Innsettingen er skrudd sammen slik at $u$-leddene uten derivert skal kansellere — skjer ikke det, var homogenløsningen feil. Igjen står $u'e^{-\\int p\\,dx} = q$, altså $u'=\\mu q$.",
    },
    {
      question: "Fasitpraksisen for de to metodene (integrerende faktor / variasjon av parameter) er:",
      options: ["Begge er likeverdige og honoreres likt; forslagene fører gjerne den andre som «Alternativt:»", "Integrerende faktor kreves alltid; variasjon av parameter gir bare delvis uttelling som skissemetode", "Variasjon av parameter kreves i oppgaver med variabel koeffisient", "Metodene gir litt forskjellige svar, så begge må alltid føres"],
      explanation: "Metodene er to veier til samme svar, og begge føringer gir full uttelling — velg den som gir minst regning. «Alternativt:»-merket i løsningsforslagene er nettopp dette.",
    },
    {
      question: "Den homogene likningen $y' + p(x)y = 0$ har løsningen",
      options: ["$y_h = Ce^{-\\int p\\,dx}$", "$y_h = Ce^{+\\int p\\,dx}$", "$y_h = C - \\int p\\,dx$", "$y_h = \\dfrac{C}{p(x)}$"],
      explanation: "Separér: $\\frac{dy}{y} = -p\\,dx$ gir $y = Ce^{-\\int p\\,dx}$ — merk MINUS i eksponenten (integrerende faktor har pluss; de er hverandres inverse).",
    },
    {
      question: "Strukturen på den generelle løsningen av $y'+py=q$ er",
      options: ["én fast partikulærløsning pluss homogenløsningen: $y = y_p + Ce^{-\\int p\\,dx}$", "produktet av partikulær- og homogenløsningen", "homogenløsningen alene, med $C$ bestemt av $q$", "summen av to uavhengige partikulærløsninger, som hver får sin egen frie konstant"],
      explanation: "Derfor har svarene alltid formen «noe bestemt $+\\ C\\cdot$noe eksponentielt», og differansen mellom to løsninger av samme likning er alltid en homogenløsning.",
    },
    {
      question: "$y' + py = q$ med konstante $p>0$ og $q$: likevektsnivået som alle løsninger glir mot, er",
      options: ["$q/p$", "$p/q$", "$q$", "$pq$"],
      explanation: "Sett $y'=0$: $py=q$ gir $y=q/p$. Løsningene er $y = \\frac qp + Ce^{-px}$ — eksponentialleddet dør, og nivået $q/p$ står igjen. Tolkningsspråk for kap. 6.3-modellene.",
    },
    {
      question: "Tidskonstanten $1/p$ i $y = \\frac{q}{p} + Ce^{-px}$ betyr at",
      options: ["etter tiden $1/p$ er avviket fra likevekten redusert med faktoren $e^{-1}\\approx 0{,}37$", "løsningen når likevekten eksakt ved $t = 1/p$", "avviket fra likevekten halveres nøyaktig i løpet av hvert tidsintervall av lengden $1/p$", "$C$ mister betydning for $t > 1/p$"],
      explanation: "$e^{-p\\cdot(1/p)} = e^{-1}$: per tidskonstant krymper avviket med faktoren $e^{-1}$, ikke $\\frac12$ (halveringstiden er $\\ln 2/p$, et litt kortere intervall). Likevekten nås aldri eksakt.",
    },
    {
      question: "$2y' + 6y = x$: riktig integrerende faktor er",
      options: ["$e^{3x}$ — standardformen er $y' + 3y = \\frac{x}{2}$", "$e^{6x}$ — koeffisienten foran $y$ er $6$ slik likningen står", "$e^{2x}$ — koeffisienten foran $y'$ er $2$", "$e^{x^2/2}$ — høyresiden er $x$"],
      explanation: "Del på $2$ FØR du leser av: $p=3$, ikke $6$. Å hoppe over standardform-steget gir $e^{6x}$ — den dokumenterte fellen i denne oppgavetypen.",
    },
    {
      question: "En student ganger venstresiden med $\\mu$, men glemmer høyresiden. Hva blir konsekvensen?",
      options: ["Likningen $(\\mu y)' = q$ er en ANNEN likning — alt etterpå løser feil problem", "Ingen — $\\mu$ forkortes uansett bort til slutt", "Bare konstanten $C$ blir feil til slutt; selve formen på løsningen består uendret", "Metoden gir da den homogene løsningen i stedet"],
      explanation: "$\\mu$ må ganges inn på BEGGE sider: gjenkjenningen gjelder likningen $(\\mu y)'=\\mu q$. Med $q$ uganget følger både form og konstant feil — og feilen synes først i innsettingskontrollen.",
    },
    {
      question: "$y' = 2-y$ kan løses både separabelt og lineært. Hva er riktig om de to veiene?",
      options: ["Begge honoreres likt — men den separable veien krever setningen om den konstante løsningen $y\\equiv 2$", "Bare den lineære veien er gyldig når likningen har konstantledd", "Den separable veien er ugyldig fordi uttrykket $2-y$ ikke kan faktoriseres som $g(x)h(y)$ med ekte $x$-del", "De to veiene gir forskjellige løsningsfamilier"],
      explanation: "Likninger på formen $y'=a(x)y+b(x)$ med konstant forhold mellom leddene er begge deler, og begge føringer gir full uttelling. Forskjellen er føringskravet: separasjon deler på $2-y$ og må derfor sjekke $y\\equiv 2$ først.",
    },
  ],
  'mat111-uib-6-3': [
    {
      question: "«Temperaturen avtar med en rate proporsjonal med differansen mellom $T$ og romtemperaturen $20$.» Riktig modell:",
      options: ["$T' = -k(T-20)$, $k>0$", "$T' = -kT$, $k>0$", "$T' = -k(20-T)$, $k>0$, siden temperaturen avtar", "$T' = -20k$, $k>0$"],
      explanation: "«Differansen» skal med som faktor: $T-20$. Formen $-k(20-T)$ gir $T'>0$ for $T>20$ — feil retning; test alltid fortegnet ved startverdien.",
    },
    {
      question: "«Båten bremses med en rate proporsjonal med kvadratet av farten»:",
      options: ["$v' = -kv^2$", "$v' = -kv$", "$v' = -k\\sqrt{v}$", "$v' = -2kv$"],
      explanation: "«Kvadratet av farten» oversettes ord for ord til $v^2$. Å skrive $-kv$ er den dokumenterte modellfeilen — den gir eksponentielt henfall, mens $v^2$-motstand gir det mye tregere $1/v$-forløpet.",
    },
    {
      question: "Hvorfor er klassifiseringssteget (separabel eller lineær?) med i modelleringsoppskriften?",
      options: ["Det bestemmer hvilken løsningsmal du skal bruke fra kap. 6.1 eller 6.2", "Det avgjør hvor mange datapunkter du trenger for å bestemme konstantene i modellen", "Det er et rent formkrav uten praktisk funksjon", "Det avgjør om likevektsløsninger finnes"],
      explanation: "Klassifiseringen velger verktøyet: separasjonsmalen (med konstant-løsnings-setningen) eller integrerende faktor. Datapunktbehovet styres av antall ukjente konstanter, og likevekter kan finnes i begge typer.",
    },
    {
      question: "Modellen er $T = 20 + Ae^{-kt}$ med to datapunkter: $T(0)=90$ og $T(5)=70$. Riktig rekkefølge:",
      options: ["Startverdien gir $A=70$ først; deretter gir $T(5)=70$ konstanten $k$", "Datapunktet $T(5)=70$ gir $A$; startverdien gir $k$", "Begge konstantene finnes fra det ene punktet alene ved å derivere modellen én gang", "Rekkefølgen er likegyldig — sett inn begge samtidig og gjett"],
      explanation: "Startverdien bestemmer $A$ (der er $e^{-kt}=1$, så $k$ ikke forstyrrer); det ANDRE punktet bestemmer $k$. Bland rekkefølgen, og begge blir gale — den dokumenterte konstantfeilen.",
    },
    {
      question: "Utregningen ender med $t = 4{,}5$. Hva mangler for at svaret er komplett i sjanger A?",
      options: ["En konklusjonssetning med tolkning og enhet: «farten passerer 2 km/t etter 4,5 timer»", "En ekstra desimal i tallsvaret", "En graf av løsningen", "Ingenting — riktig tall er i seg selv et fullverdig svar på en anvendt eksamensoppgave"],
      explanation: "Fasitpraksis: et tall uten tolkning og enhet regnes som ufullstendig besvarelse. Setningen koster ti sekunder og er et fast poeng i avslutningsoppgaven.",
    },
    {
      question: "Torricelli-kjeden: hvordan kommer $V(h)$ fra deloppgave a) inn i differensiallikningen?",
      options: ["Via kjerneregelen: $\\dfrac{dV}{dt} = V'(h)\\,h'$, som likestilles med $-a\\sqrt{2gh}$", "Via $V(h)$ innsatt direkte for $h$ i Torricellis lov", "Via arealformelen $A(h) = V(h)/h$", "Den brukes ikke videre — likningen for $h$ settes opp helt uavhengig av deloppgave a)"],
      explanation: "$V$ og $h$ er begge funksjoner av $t$; kjerneregelen omsetter volumstrøm til høydeendring. Vanligste kjedefeil er nettopp å svare på a) og så IKKE bruke $V(h)$ videre — kjeden er poenget.",
    },
    {
      question: "Hullarealet er $2{,}0\\ \\text{cm}^2$. I SI-enheter er det",
      options: ["$2{,}0\\cdot 10^{-4}\\ \\text{m}^2$", "$2{,}0\\cdot 10^{-2}\\ \\text{m}^2$", "$2{,}0\\cdot 10^{-6}\\ \\text{m}^2$", "$0{,}2\\ \\text{m}^2$"],
      explanation: "$1\\ \\text{cm}^2 = (10^{-2}\\ \\text{m})^2 = 10^{-4}\\ \\text{m}^2$ — arealer skalerer med KVADRATET av lengdefaktoren. Dette er den klassiske tallfellen i Torricelli-oppgavene.",
    },
    {
      question: "Minustegnet i $\\dfrac{dV}{dt} = -a\\sqrt{2gh}$ skal i føringen",
      options: ["begrunnes med én setning: volumet avtar når vannet renner ut", "utelates helt — absoluttverdiene ordner retningen av seg selv", "flyttes over til $a$, som settes negativ", "begrunnes med at $\\sqrt{2gh}$ er negativ"],
      explanation: "Fasitpraksis er å si fortegnet i én setning, ikke la det dukke opp umotivert. $a$ er et areal (positivt), og en kvadratrot er aldri negativ.",
    },
    {
      question: "Halveringstiden for $y = y_0e^{-kt}$ er",
      options: ["$T_{1/2} = \\dfrac{\\ln 2}{k}$ — uavhengig av startverdien", "$T_{1/2} = \\dfrac{k}{\\ln 2}$, proporsjonal med raten", "$T_{1/2} = \\dfrac{y_0}{2k}$ — avhengig av startverdien $y_0$", "$T_{1/2} = \\dfrac{1}{k}$, tidskonstanten"],
      explanation: "Løs $e^{-kT}=\\frac12$: $T = \\ln 2/k$. At den er uavhengig av $y_0$ er selve poenget: hver ny halvering tar like lang tid. Tidskonstanten $1/k$ er det litt lengre intervallet der avviket faller med $e^{-1}$.",
    },
    {
      question: "En bestand vokser med 2 % per time ($y'=0{,}02y$). Doblingstiden er om lag",
      options: ["$35$ timer — $\\ln 2/0{,}02$", "$50$ timer — $100\\ \\%$ delt på $2\\ \\%$", "$20$ timer — den inverse raten $1/0{,}05$", "$69$ timer — $\\ln 2$ ganger $100$"],
      explanation: "Eksponentiell vekst dobler seg på $\\ln 2/k \\approx 0{,}693/0{,}02 \\approx 35$ timer. Den lineære magefølelsen «100/2 = 50» overser at bestanden vokser underveis — en fin rimelighetskontroll.",
    },
    {
      question: "Tank med volum $V$ liter, innstrøm $r$ L/min med konsentrasjon $c_{\\text{inn}}$ kg/L, lik utstrøm. Saltbalansen er",
      options: ["$y' = c_{\\text{inn}}\\,r - \\dfrac{y}{V}\\,r$", "$y' = c_{\\text{inn}}\\,r - y\\,r$", "$y' = c_{\\text{inn}}\\,r + \\dfrac{y}{V}\\,r$", "$y' = \\dfrac{c_{\\text{inn}} - y}{V}$"],
      explanation: "Rate ut = utstrømmen ganger TANKENS konsentrasjon $y/V$ — ikke saltmengden $y$ selv. Med likt inn- og utløp er $V$ konstant, og likningen blir lineær.",
    },
    {
      question: "Langtidsnivået i tanken kan finnes uten å løse likningen, som",
      options: ["$c_{\\text{inn}}\\cdot V$ — til slutt har alt vannet innløpskonsentrasjonen", "$c_{\\text{inn}}\\cdot r$ — innraten i kilo per minutt bestemmer nivået alene", "startmengden $y_0$, som bevares på lang sikt", "$V/r$ — tiden det tar å skifte ut vannet"],
      explanation: "Likevekten ($y'=0$) svarer til at tankvannet har innløpskonsentrasjonen: $c_{\\text{inn}}\\cdot V$ kg. Regn den først — den er både langtidssvar og kontroll på løsningen. ($V/r$ er en tid, ikke en saltmengde.)",
    },
    {
      question: "I logistisk sluttform $N = \\dfrac{M}{1+Be^{-kt}}$ med $N(0)=N_0$ er $B =$",
      options: ["$\\dfrac{M-N_0}{N_0}$", "$\\dfrac{N_0}{M-N_0}$", "$M - N_0$", "$\\dfrac{M}{N_0}$"],
      explanation: "Innsetting av $t=0$: $N_0 = \\frac{M}{1+B}$ gir $B = (M-N_0)/N_0$ — f.eks. $B = 990/10 = 99$ for $N_0=10$ av $M=1000$. Kontrollér alltid med $t=0$.",
    },
    {
      question: "Hvorfor sprer et rykte seg raskest når halvparten har hørt det?",
      options: ["Raten $ky(1-y)$ er et produkt som maksimeres når faktorene balanserer — mange kan fortelle OG mange har ikke hørt", "Fordi $k$ er størst midtveis i forløpet", "Fordi løsningskurven er brattest ved start når nesten ingen har hørt det, og $y=\\frac12$ nås uansett veldig tidlig", "Det stemmer ikke — spredningen er raskest helt i starten"],
      explanation: "Produktet $y(1-y)$ toppes i symmetripunktet $y=\\frac12$. Før det er det få fortellere; etter er det få som ikke har hørt. $k$ er konstant, og logistisk vekst starter langsomt (få smittebærere).",
    },
    {
      question: "En kald brus ($5\\ ^\\circ$C) settes i et rom på $25\\ ^\\circ$C. Hvilken likning gjelder?",
      options: ["Samme Newton-likning $T'=-k(T-25)$ — for $T<25$ blir $T'>0$ av seg selv", "$T'=+k(T-25)$, siden temperaturen nå øker", "$T'=-k(25-T)$, med differansen snudd fordi det nå er snakk om oppvarming", "Newtons lov gjelder bare avkjøling; oppvarming krever en annen modell"],
      explanation: "Én og samme likning dekker begge retninger: faktoren $T-25$ er negativ når brusen er kaldest, så $-k(T-25)>0$ og temperaturen stiger. Å bytte fortegn manuelt ødelegger modellen for $T>25$. (Varianten $-k(25-T)$ gir $T'<0$ for kald brus — feil vei.)",
    },
    {
      question: "For $v'=-kv^2$ (fartskvadrat-motstand) er løsningsformen",
      options: ["$\\dfrac{1}{v} = \\dfrac{1}{v_0} + kt$ — lineær i $1/v$, og $v=0$ nås aldri i endelig tid", "$v = v_0e^{-kt}$ — eksponentielt henfall mot null", "$v = v_0 - kt^2$ — kvadratisk fall som når null", "$v = \\dfrac{v_0}{1+kt^2}$ — kvadratisk nevner som gir at farten når null i endelig tid"],
      explanation: "Separasjon av $v'=-kv^2$ gir $1/v$ lineær i $t$. Kontrasten til eksponentielt henfall ($v'=-kv$) er selve poenget i konteksten: farten dør langt tregere, og null nås aldri eksakt.",
    },
    {
      question: "Algedammen $A' = 0{,}3A - 12$ har likevekten $A=40$ kg. Stabiliteten avgjøres ved å",
      options: ["sjekke fortegnet til $A'$ rett under og rett over $40$: begge peker BORT — ustabil", "sammenligne $A_0$ med $40$: starter bestanden under likevekten, er likevekten stabil", "regne ut $A''$ i likevektspunktet", "se at likevekter i lineære likninger alltid er stabile"],
      explanation: "$A' = 0{,}3(A-40)$: under $40$ er $A'<0$ (synker vekk), over er $A'>0$ (vokser vekk) — ustabil. Kontrast: i tankmodellen $y'=0{,}4-0{,}04y$ peker fortegnene INN mot likevekten. Fortegnssjekken er hele verktøyet.",
    },
    {
      question: "Siste kontroll av en ferdig modell FØR du løser den:",
      options: ["Har $y'$ riktig fortegn ved startverdien — avtar det som skal avta?", "Er høyresiden et polynom i $y$?", "Er $k$ mellom $0$ og $1$?", "Har likningen nøyaktig like mange konstanter som datapunkter pluss én?"],
      explanation: "Fortegnssjekken ved startverdien fanger de fleste modellfeilene (glemte minustegn, snudd differanse) før du har regnet et eneste integral. Formen på høyresiden og størrelsen på $k$ sier ingenting om riktig retning.",
    },
  ],
  'mat111-uib-7-1': [
    {
      question: "Rekken inneholder fakulteter og $n$-te potenser ($n!$, $c^n$). Testvelgeren peker på",
      options: ["forholdstesten — forhold mellom naboledd forenkler slikt", "integraltesten — fakulteter er lette å integrere", "grensesammenligning mot en $p$-rekke", "$n$-te-ledd-testen som endelig avgjørelse"],
      explanation: "Formen velger testen: $\\frac{(n+1)!}{n!}=n+1$ og $\\frac{c^{n+1}}{c^n}=c$ rydder opp av seg selv. Fakulteter kan ikke integreres, og $p$-sammenligning passer rasjonale uttrykk.",
    },
    {
      question: "Forholdstesten gir $L = 1$. Riktig konklusjon:",
      options: ["Ingen — testen er uavgjort; bytt test", "Rekken konvergerer, så vidt", "Rekken divergerer, så vidt", "Rekken konvergerer betinget, men ikke absolutt"],
      explanation: "$L=1$ betyr null informasjon — verken konvergens eller divergens. Alle $p$-rekker gir $L=1$ (både konvergente og divergente finnes der), så testen KAN ikke skille dem. Å konkludere fra $L=1$ er den klassiske forholdstest-feilen.",
    },
    {
      question: "Hvilke forutsetninger skal sjekkes eksplisitt før integraltesten brukes på $f$?",
      options: ["$f$ er positiv, kontinuerlig og avtakende på intervallet", "$f$ er begrenset og har grense null i uendelig", "$f$ er deriverbar med $f'$ kontinuerlig", "$f$ er konveks og går mot null"],
      explanation: "De tre forutsetningene (positiv, kontinuerlig, avtakende) er det som gjør trappesum-argumentet gyldig — å bruke testen uten å nevne dem er et føringstrekk. $a_n\\to 0$ alene beviser som kjent ingenting.",
    },
    {
      question: "Integraltesten på $\\sum_{n=2}^\\infty \\frac{1}{n(\\ln n)^2}$ ga integralverdien $\\frac{1}{\\ln 2}$. Hva vet du nå?",
      options: ["Rekken konvergerer — men summen er IKKE $\\frac{1}{\\ln 2}$", "Rekken konvergerer med sum $\\frac{1}{\\ln 2}$", "Rekken konvergerer med sum høyst $\\frac{1}{2\\ln 2}$", "Ingenting før også forholdstesten er kjørt"],
      explanation: "Testen gir bare konvergens/divergens — integral og rekke deler skjebne, ikke verdi. Å oppgi integralverdien som rekkesum er en dokumentert feil.",
    },
    {
      question: "$n$-te-ledd-testen: hvilken slutning er gyldig?",
      options: ["$a_n \\not\\to 0 \\Rightarrow \\sum a_n$ divergerer", "$a_n \\to 0 \\Rightarrow \\sum a_n$ konvergerer", "$a_n \\to 0 \\Rightarrow \\sum a_n$ divergerer", "$\\sum a_n$ divergerer $\\Rightarrow a_n \\not\\to 0$"],
      explanation: "Testen virker bare én vei: den kan felle, aldri frikjenne. Den harmoniske rekken ($a_n = 1/n \\to 0$, divergent) er moteksemplet mot begge «baklengs»-variantene.",
    },
    {
      question: "Spørsmålet er «absolutt konvergent, betinget konvergent eller divergent?». Fast undersøkelsesrekkefølge:",
      options: ["Først $\\sum|a_n|$; divergerer den, deretter Leibniz på originalen", "Først Leibniz; konvergerer originalen, er den absolutt konvergent", "Forholdstesten på originalen avgjør alle tre kategoriene", "$n$-te-ledd-testen avgjør først om klassifisering er mulig"],
      explanation: "Absolutt-sjekken kommer først — konvergerer $\\sum|a_n|$, er du ferdig (absolutt). «Konvergent etter Leibniz» alene besvarer ikke klassifiseringsspørsmålet: betinget krever at absoluttrekken divergerer.",
    },
    {
      question: "Føringskravene i grensesammenligningstesten er:",
      options: ["Navngi sammenligningsrekken $\\sum b_n$ (med status) og regn grensen $c = \\lim a_n/b_n \\in (0,\\infty)$ eksplisitt", "Vis at $a_n \\le b_n$ for alle $n$ fra et punkt av", "Vis at begge rekkene har samme sum", "Regn forholdet $a_{n+1}/a_n$ for begge rekkene"],
      explanation: "Sammenligningsrekken (typisk en $p$-rekke plukket fra dominerende ledd) skal navngis, og grensen skal være et endelig, positivt tall. Leddvis ulikhet er den DIREKTE sammenligningstesten — en annen test.",
    },
    {
      question: "$\\displaystyle\\sum_{n=2}^\\infty \\Big(\\frac13\\Big)^n$: hva er $a$ i formelen $\\frac{a}{1-r}$?",
      options: ["$\\dfrac19$ — det første leddet som faktisk summeres", "$1$ — leddet for $n=0$", "$\\dfrac13$ — kvotienten", "$\\dfrac{1}{27}$ — leddet for $n=3$"],
      explanation: "$a$ er første ledd i summen, her $(1/3)^2 = 1/9$; summen blir $\\frac{1/9}{2/3} = \\frac16$. Startindeks-slurv (å bruke $n=0$-leddet uansett) er den dokumenterte geometrisk-rekke-fellen.",
    },
    {
      question: "$p$-rekke-kriteriet sier at $\\sum 1/n^p$ konvergerer nøyaktig når",
      options: ["$p > 1$", "$p \\ge 1$", "$p > 0$", "$p \\ge 2$"],
      explanation: "Grensen er skarp og randtilfellet faller UTENFOR: $p=1$ er den harmoniske rekken, som divergerer. Speilbildet av $p$-integralene fra kap. 5.5.",
    },
    {
      question: "Leibniz' kriterium er oppfylt for $\\sum(-1)^{n+1}b_n$ med $N$ ledd summert. Feilskranken er",
      options: ["$|S - S_N| \\le b_{N+1}$ — det første utelatte leddet", "$|S - S_N| \\le b_N$ — det siste medregnede leddet", "$|S - S_N| \\le \\frac{1}{2}(b_N + b_{N+1})$", "$|S - S_N| \\le b_{N+1} - b_{N+2}$"],
      explanation: "Delsummene hopper vekselvis over og under grensen, med stadig kortere hopp — sannheten ligger alltid mellom to naboer, så feilen er høyst neste ledd $b_{N+1}$.",
    },
    {
      question: "«Avtakende»-kravet i Leibniz er ikke opplagt for $b_n = \\frac{n}{n^2+1}$. Standardføringen er å",
      options: ["derivere $f(x) = \\frac{x}{x^2+1}$ og vise $f'(x)<0$ på intervallet", "regne ut de fem første leddene og se at de synker", "vise at $b_n \\to 0$, som medfører avtakende fra et punkt av", "bruke forholdstesten på $b_n$"],
      explanation: "Derivert-sjekken av den tilhørende funksjonen er standardargumentet når monotonien ikke er opplagt. Noen utregnede ledd er indikasjon, ikke bevis — og $b_n\\to 0$ medfører IKKE monotoni.",
    },
    {
      question: "I integraltesten regnes $\\int_2^\\infty \\frac{dx}{x\\ln x}$. Fasitkravet for selve integralet er",
      options: ["$\\lim$-føring: $\\lim_{R\\to\\infty}\\big[\\ln\\ln x\\big]_2^R = \\infty$ — «sett inn $\\infty$» underkjennes", "innsetting av grensene direkte: $\\ln\\ln\\infty - \\ln\\ln 2$", "numerisk tilnærming med trapesmetoden", "en øvre skranke er nok — verdien trengs aldri"],
      explanation: "Uegentlige integraler føres ALLTID med grenseverdi (kap. 5.5-regelen gjelder også inne i integraltesten). Her divergerer integralet, og rekken $\\sum\\frac{1}{n\\ln n}$ følger med.",
    },
  ],
  'mat111-uib-7-2': [
    {
      question: "Forholdstesten på $\\sum a_n(x-a)^n$ ga $L(x) = \\frac{|x-a|}{3}$. Konvergensradien er",
      options: ["$R = 3$", "$R = \\dfrac13$", "$R = a + 3$", "$R = 9$"],
      explanation: "Kravet $L(x)<1$ gir $|x-a|<3$ — radien er avstanden fra sentrum, altså $3$. ($a+3$ er høyre ENDEPUNKT, ikke radien.)",
    },
    {
      question: "Hvorfor må endepunktene $x = a\\pm R$ alltid undersøkes separat?",
      options: ["Der er forholdstest-grensen $L=1$ — testen er uavgjort, og en annen test må dømme", "Fordi rekken alltid divergerer i minst ett endepunkt", "Fordi koeffisientene $a_n$ skifter fortegn i endepunktene", "Det er en ren konvensjon i føringsstandarden uten matematisk innhold"],
      explanation: "I endepunktene blir $L = R\\cdot\\frac1R = 1$ — forholdstestens blinde sone. Alle fire intervallfasonger forekommer (begge med, én med, ingen), så ingenting kan tas for gitt: sett inn og test tallrekken.",
    },
    {
      question: "«Finn konvergensradien til $\\sum\\frac{(x-1)^n}{n2^n}$» — hva slags objekt er svaret?",
      options: ["Et tall: $R=2$ (intervallet $[-1,3)$ er svaret på et ANNET spørsmål)", "En mengde: $[-1,3)$", "Et punkt: sentrum $x=1$", "En funksjon av $x$: $L(x) = |x-1|/2$"],
      explanation: "Radius er et tall, intervallet en mengde — å svare «radius $[-1,3)$» er kategorifeilen kapitlet advarer mot. Oppgaver spør ofte etter begge; da leveres begge, hver med sin begrunnelse.",
    },
    {
      question: "Taylorrekken til $f$ om $a$ er definert som",
      options: ["potensrekken $\\sum_{k=0}^\\infty \\frac{f^{(k)}(a)}{k!}(x-a)^k$ — grensen av Taylorpolynomene $P_n$", "polynomet $P_n$ av høyeste grad oppgaven ber om", "rekken $\\sum f^{(k)}(a)(x-a)^k$ uten fakultetene", "restleddsfølgen $R_1, R_2, R_3, \\ldots$"],
      explanation: "Delsummene av Taylorrekken er nøyaktig $P_n(x)$ — rekken er polynomene «som aldri stopper». Fakulteten i nevneren hører med (kap. 4.3s vanligste regnefeil er å miste den).",
    },
    {
      question: "Taylorrekken til $f$ har $R=\\infty$. Hva kreves i tillegg for å skrive «$f(x) = $ rekken»?",
      options: ["Et restleddsargument: $R_n(x)\\to 0$ når $n\\to\\infty$", "Ingenting — konvergens for alle $x$ er nettopp det som kreves", "At $f$ er kontinuerlig på hele tallinjen", "At også integraltesten bekrefter konvergensen"],
      explanation: "At rekken konvergerer og at den konvergerer MOT $f$ er to påstander. Uten $R_n\\to 0$ kan rekken i prinsippet summere til noe annet enn $f(x)$ — derfor er restleddsargumentet føringskravet.",
    },
    {
      question: "I $R_n\\to 0$-argumentet for $e^x$ brukes skranken $e^c \\le e^{|x|}$. Hva begrunner den?",
      options: ["$c$ ligger strengt mellom $0$ og $x$, og $e^t$ er voksende", "$c$ er alltid mindre enn $1$", "$e^c$ er begrenset av $1$ for alle relevante $c$", "Restleddet krymper uansett, så skranken er valgfri"],
      explanation: "Restleddets $c$ er ukjent, men innesperret mellom $0$ og $x$ — så $e^c$ kan aldri overstige $e^{|x|}$, en KONSTANT når $x$ er fiksert. Deretter gjør $\\frac{|x|^{n+1}}{(n+1)!}\\to 0$ resten av jobben.",
    },
    {
      question: "Standardrekken $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$ er gyldig for",
      options: ["$-1 < x \\le 1$", "alle $x$", "$-1 \\le x \\le 1$", "$0 \\le x < 1$"],
      explanation: "Radien er 1, og endepunktene oppfører seg ulikt: $x=1$ gir den alternerende harmoniske rekken (konvergent), $x=-1$ den harmoniske (divergent). Kontrasten til $e^x$/$\\sin$/$\\cos$ (som gjelder overalt) er selve poenget.",
    },
    {
      question: "$\\sin(0{,}3)$ tilnærmes med $0{,}3 - \\frac{0{,}3^3}{3!}$. Leibniz-feilskranken er",
      options: ["$\\dfrac{0{,}3^5}{5!}$ — det første utelatte leddet", "$\\dfrac{0{,}3^3}{3!}$ — det siste medregnede leddet", "$\\dfrac{0{,}3^4}{4!}$ — neste potens i rekken", "$0{,}3^5$ — potensen alene"],
      explanation: "Skranken er første UTELATTE ledd i den alternerende rekken. Merk at $\\sin$-rekken bare har oddetallspotenser — neste ledd er $x^5/5!$, ikke $x^4/4!$. Fortegnet på det utelatte leddet gir attpåtil over-/underestimat.",
    },
    {
      question: "Hvilke konvergensmønstre kan en potensrekke ha?",
      options: ["Nøyaktig ett av tre: bare i sentrum, hele tallinjen, eller et intervall med radius $R$", "Hvilken som helst delmengde av tallinjen kan forekomme", "Alltid et åpent intervall — endepunkter er aldri med", "Alltid et lukket intervall — konvergens er en lukket egenskap"],
      explanation: "$R=0$ ($\\sum n!x^n$), $R=\\infty$ ($e^x$-rekken) eller endelig radius der HVERT endepunkt kan gå begge veier ($\\ln(1+x)$: $(-1,1]$). Spredte flekker finnes ikke — det er radiusstrukturens innhold.",
    },
    {
      question: "Potensrekken til $\\dfrac{1}{1+2x}$ om $0$ finnes raskest ved å",
      options: ["sette $u=-2x$ inn i den geometriske rekken $\\frac{1}{1-u}=\\sum u^n$", "derivere funksjonen gjentatte ganger og bygge Taylorkoeffisientene", "bruke forholdstesten på funksjonen selv", "sette $u=2x$ inn i rekken for $\\ln(1+u)$"],
      explanation: "Innsetting i den geometriske rekken gir $\\sum(-2x)^n = \\sum(-1)^n2^nx^n$ uten én eneste derivert — med gyldighet $2|x|<1$, altså $R=\\frac12$, på kjøpet. Derivasjonsveien gir samme svar, men er mye lengre.",
    },
  ],
  'mat111-uib-8-1': [
    {
      question: "Hva betyr åpen bok-regelen for hvordan poengene deles ut i MAT111?",
      options: ["Utledningen og føringen måles — det som kan slås opp gir null i seg selv", "Alle formler må siteres med sidetall fra læreboken for at bruken skal gi uttelling", "Sluttsvaret teller dobbelt siden hjelpemidlene gjør regningen lettere", "Bare oppgaver uten fasit i permen kan gi full uttelling på settet"],
      explanation: "Åpen bok flytter målingen fra memorering til teknikk og føring: der svaret står i permen, er det utledningen som gir poeng — avskrift av lærebokeksempler ga null (H2016).",
    },
    {
      question: "Hva sier oppgavesettene eksplisitt fra 2019 om fremgangsmåte og sluttsvar?",
      options: ["Riktig fremgangsmåte gir godt med poeng selv uten riktig sluttsvar", "Riktig sluttsvar gir full uttelling selv uten synlig fremgangsmåte", "Fremgangsmåte og sluttsvar må begge være feilfrie for å gi poeng", "Sluttsvaret skal alltid kontrolleres med kalkulator før innlevering"],
      explanation: "Fra 2019 står det eksplisitt at riktig fremgangsmåte gir godt med poeng selv uten korrekt sluttsvar — føringen er det som måles.",
    },
    {
      question: "Hvilke tre linjer skal substitusjonsboksen i et bestemt integral inneholde?",
      options: ["Substitusjonen $u=g(x)$, differensialen $du$, og de nye grensene", "Substitusjonen $u=g(x)$, den antideriverte, og kontrollderivasjonen", "Differensialen $du$, tilbaketransformasjonen, og sluttsvaret markert", "De gamle grensene, de nye grensene, og verdien av integralet"],
      explanation: "Boksen bokfører $u=g(x)$, $du=g'(x)\\,dx$ og grensebyttet $x:a\\to b \\Rightarrow u:g(a)\\to g(b)$ — da er teknikken dokumentert og tilbaketransformasjon unødvendig.",
    },
    {
      question: "Når skal et teorem navngis i besvarelsen?",
      options: ["Når setningen bærer argumentet — som eksistens, skvis eller ekstremalverdier", "Hver gang en regneregel brukes, inkludert kjerneregelen, produktregelen og kvotientregelen", "Bare i bevisoppgaver der oppgaveteksten eksplisitt ber om teoremnavn", "Aldri — korte begrunnelser betyr at navn på setninger skal utelates"],
      explanation: "Navngivningsregelen: setninger som leverer eksistens, entydighet, grenser (skvis), ekstremalverdier og FTC navngis når de bærer argumentet; regneregler navngis ikke.",
    },
    {
      question: "Hva mangler i føringen «$\\int_1^\\infty x^{-2}dx = [-x^{-1}]_1^\\infty = 1$»?",
      options: ["Eksplisitt $\\lim$-føring: $\\lim_{b\\to\\infty}\\int_1^b x^{-2}dx$", "En substitusjonsboks med ny variabel og nye grenser for integralet", "Et sammenligningsargument med et navngitt konvergent $p$-integral", "En kontroll av at integranden er kontinuerlig i punktet $x=1$"],
      explanation: "«Sett inn $\\infty$» underkjennes: uegentlige integraler føres med eksplisitt grense, $\\lim_{b\\to\\infty}\\int_1^b$. Verdien 1 er riktig, men føringen er ikke godkjent.",
    },
    {
      question: "«Vis at likningen har nøyaktig én løsning» — hva er de to leveransene?",
      options: ["Eksistens (skjæringssetningen) og entydighet (monotoni eller Rolle) som to steg", "Et fortegnsskifte i to punkter og en verifikasjon med Newtons metode etterpå", "En numerisk tilnærming av løsningen og en feilskranke for tilnærmingen", "Kontinuitet på intervallet og deriverbarhet i det indre — forutsetningene er selve leveransene"],
      explanation: "Eksistens og entydighet føres som to atskilte steg: skjæringssetningen (fortegnsskifte + kontinuitet + navn) gir eksistens; monotoni eller Rolle-motsigelse gir entydighet.",
    },
    {
      question: "Hva kreves for konklusjonen «Newton-tilnærmingen er for stor»?",
      options: ["Krumningsargument med fast fortegn på $f''$ på hele intervallet mellom start og rot", "At $f''(x_0)>0$ i startpunktet, siden tangenten da ligger under grafen der", "At iterasjonene avtar: $x_1 > x_2$ viser at følgen nærmer seg roten ovenfra", "At feilen $|f(x_2)|$ er mindre enn feilen $|f(x_1)|$ etter andre iterasjon"],
      explanation: "Krumningen må begrunnes på HELE intervallet mellom startpunkt og rot — å sjekke $f''$ i ett punkt er utilstrekkelig (dokumentert anmerkning H2016).",
    },
    {
      question: "Hva vil det si å bruke Lagrange-restleddet kvantitativt?",
      options: ["Skranke $f^{(n+1)}$ på intervallet og levere et tallintervall eller et fortegn på feilen", "Sitere formelen for $R_n(x)$ ved siden av Taylorpolynomet i besvarelsen", "Vise at restleddet går mot null når graden av polynomet vokser mot uendelig", "Regne ut $f^{(n+1)}$ i punktet $a$ og sette verdien inn i restleddsformelen"],
      explanation: "Kvantitativ bruk: $m \\le f^{(n+1)}(c) \\le M$ på intervallet gir et intervall som fanger sann verdi (eller feilens fortegn). Skarpest tilgjengelige skranke gir full pott.",
    },
    {
      question: "Hva skal stå FØR hver bruk av L'Hôpital?",
      options: ["Markeringen av ubestemt form, for eksempel $[0/0]$, etter innsetting", "En omskriving av uttrykket til produktform med logaritmen tatt først", "Definisjonen av den deriverte for både telleren og for nevneren", "En kontroll av at telleren og nevneren begge er polynomfunksjoner"],
      explanation: "Formmarkeringen ($[0/0]$ eller $[\\infty/\\infty]$) dokumenterer at forutsetningen er sjekket — og gjentas ved gjentatt bruk. L'Hôpital uten ubestemt form gir galt svar.",
    },
    {
      question: "Før du deler på $h(y)$ i en separabel likning $y'=g(x)h(y)$, skal du:",
      options: ["notere de konstante løsningene $h(y)=0$ og sjekke dem mot initialbetingelsen", "verifisere at $g$ og $h$ begge er kontinuerlige på hele definisjonsmengden", "bestemme integrasjonskonstanten fra initialbetingelsen i den gitte likningen", "klassifisere likningen som lineær og finne den integrerende faktoren først"],
      explanation: "Konstante løsninger-sjekken: $h(y)=0$ gir løsninger som forsvinner når du deler — de noteres og avvises (eller beholdes) mot initialbetingelsen FØR separasjonen.",
    },
    {
      question: "Hva er galt med å levere svaret «$1{,}8$» i en relatert rate-oppgave?",
      options: ["Konklusjonssetningen mangler: tolkning av fortegn og enhet er en del av svaret", "Tallet skulle vært oppgitt som eksakt brøk i stedet for som desimaltall", "Svaret skulle vært kontrollert med en alternativ metode i tillegg", "Ingenting — et riktig tall er et fullført svar i anvendte oppgaver"],
      explanation: "Anvendte oppgaver avsluttes med hel setning: «avstanden øker med 1,8 m/s i det aktuelle øyeblikket» — tall, enhet og fortegnstolkning. Et nakent tall er et halvt svar.",
    },
    {
      question: "Du står fast på en deloppgave etter fem minutter over budsjett. Hva gjør du?",
      options: ["Noterer fremgangsmåten du ville brukt, og går videre til neste deloppgave", "Fortsetter til deloppgaven er løst — påbegynte oppgaver bør alltid fullføres", "Hopper over uten å skrive noe, siden ufullstendige svar trekker ned", "Bytter til en annen metode og starter hele deloppgaven helt på nytt"],
      explanation: "Alle deloppgaver er likt vektet, og fremgangsmåte gir poeng (eksplisitt fra 2019). Noter metoden du ville brukt, marker for retur, og hent poengene i de neste deloppgavene.",
    },
  ],
  'mat111-uib-8-2': [
    {
      question: "Settet har 16 likt vektede deloppgaver på 300 minutter. Hva er tidsbudsjettet?",
      options: ["Ca. 18–19 minutter per deloppgave, siden alle teller likt", "Ca. 30 minutter per oppgavenummer, siden settet har ni nummer", "Ca. 10 minutter per deloppgave, så halve tiden blir til kontroll", "Fri disponering — de senere oppgavene teller mer enn åpningen"],
      explanation: "$300/16 \\approx 18{,}75$ min. Lik vekting betyr at tidsdisiplinen er avgjørende: ingen deloppgave er verdt en halvtime.",
    },
    {
      question: "Hvorfor bør du sikre oppgave 1 (komplekse tall) først i et høstsett?",
      options: ["Åpningen er settets billigste poeng — ren teknikk uten teoretiske feller", "Oppgave 1 teller mer enn de andre oppgavene i settets offisielle poengfordeling", "De senere oppgavene forutsetter at tallene fra oppgave 1 gjenbrukes", "Komplekse tall er det vanskeligste temaet og krever mest arbeidstid"],
      explanation: "Komplekse tall åpner nesten alle moderne sett og er ren teknikk (polarform, de Moivre, faktorisering) — raske, sikre poeng som frigjør tid til teorioppgavene i midten.",
    },
    {
      question: "I 4a ($\\int_1^4 e^{\\sqrt x}dx$): hva skal bokføres FØR videre regning?",
      options: ["Substitusjonen $u=\\sqrt x$, differensialen, og de nye grensene $u:1\\to2$", "Den antideriverte $2(\\sqrt x - 1)e^{\\sqrt x}$ med kontrollderivasjon som første linje", "LIATE-valget for den delvise integrasjonen som kommer senere i kjeden", "En vurdering av om integralet konvergerer på hele intervallet"],
      explanation: "Substitusjonsboksen ($u$, $du$/dx-relasjonen og nye grenser) er første føringskrav; den delvise integrasjonen med dokumentert valg kommer i neste steg av kjeden.",
    },
    {
      question: "Hva kreves for konklusjonen «$x_2$ er større enn løsningen» i 8b?",
      options: ["At $g''>0$ på hele intervallet mellom roten og startpunktet, med begrunnelse", "At $g''(x_0)>0$ i startpunktet $x_0=1$, der den første tangenten legges an mot grafen", "At $x_1>x_2$, som viser at Newton-følgen er avtakende mot roten", "At $g(x_2)>0$, som viser at $x_2$ ligger til høyre for nullpunktet"],
      explanation: "Krumningsargumentet gjelder HELE intervallet: $g''=6x>0$ på $[c,1]$ gjør $g$ konveks der, så Newton-følgen fra høyre forblir til høyre. Ett-punkts-sjekk er utilstrekkelig. (At $g(x_2)>0$ er sant her, men uten konveksitetsargumentet forklarer det ikke hvorfor hele følgen forblir til høyre.)",
    },
    {
      question: "Hva skal sjekkes FØR du deler på $y(2000-y)$ i oppgave 9a?",
      options: ["De konstante løsningene $y\\equiv 0$ og $y\\equiv 2000$, mot initialbetingelsen", "At konstanten $k$ er positiv, slik at bestanden er voksende for alle $t$", "At delbrøkoppspaltingen har riktige koeffisienter på begge leddene", "At $y(1)=400$ stemmer med den generelle løsningen av likningen"],
      explanation: "Konstante løsninger-sjekken: $h(y)=y(2000-y)=0$ gir $y\\equiv0$ og $y\\equiv2000$. De noteres og avvises mot $y(0)=200$ FØR separasjonen — ellers er delingen udokumentert.",
    },
  ],
  'mat111-uib-8-3': [
    {
      question: "Settet har 13 likt vektede deloppgaver på 300 minutter. Hva er tidsbudsjettet?",
      options: ["Ca. 23 minutter per deloppgave — noe romsligere enn i høstsettene", "Ca. 19 minutter per deloppgave — samme budsjett som i høstsettene", "Ca. 15 minutter per deloppgave, så resten kan brukes på kontroll", "Ca. 30 minutter per deloppgave, siden vårsettene er vanskeligere"],
      explanation: "$300/13 \\approx 23$ min per deloppgave. Vårsettene er litt kortere enn høstsettene (13 mot 16 deloppgaver) — men lik vekting gjør tidsdisiplinen like viktig.",
    },
    {
      question: "I 3b skal $(g^{-1})'(6)$ beregnes. Hva er første steg?",
      options: ["Finn $a$ med $g(a)=6$ — formelen er $1/g'(a)$, ikke $1/g'(6)$", "Deriver $g$ og sett inn $6$ direkte: svaret er $1/g'(6)$ uten mer arbeid", "Finn en formel for $g^{-1}$ og deriver den ledd for ledd", "Sjekk at $g''>0$, slik at den inverse er definert nær $6$"],
      explanation: "«Finn $a$ først»: $g(1)=6$ gir $a=1$, og $(g^{-1})'(6)=1/g'(1)=1/7$. Å regne $1/g'(6)$ er den klassiske feilen i sjanger L.",
    },
    {
      question: "Hvilke vekter har trapesmetoden på måleverdiene i 6a?",
      options: ["Halv vekt på de to endepunktene, full vekt på alle indre punkter", "Full vekt på de to endepunktene og halv vekt på alle de indre punktene", "Vektene $1, 4, 2, 4, 1$ delt på $3$, som i formelen for metoden", "Lik vekt på alle fem målepunktene, delt på antall intervaller"],
      explanation: "Trapesformelen: $h[\\tfrac{v_0}2 + v_1 + \\dots + v_{n-1} + \\tfrac{v_n}2]$ — endepunktene teller halvt. Vektene $1,4,2,4,1$ hører til Simpsons metode.",
    },
    {
      question: "Hva må stå i føringen FØR L'Hôpital brukes i oppgave 2?",
      options: ["Formmarkeringene: først $[1^\\infty]$ ved omskrivingen, så $[0/0]$ for kvotienten", "En verifikasjon av at grensen eksisterer, ved ensidige grenser fra begge sider", "Standardgrensen $\\sin x/x \\to 1$, som hele omskrivingen av grenseuttrykket bygger på her", "En substitusjonsboks som bytter variabelen $x$ ut med $1/n$ for heltall $n$"],
      explanation: "Formsjekk-disiplinen: $[1^\\infty]$ identifiseres og sendes via logaritmen; kvotienten markeres $[0/0]$ FØR L'Hôpital. Umarkert form er føringstrekk.",
    },
    {
      question: "Hva er den integrerende faktoren for $y' + \\tfrac{1}{100}y = 4$?",
      options: ["$\\mu(t) = e^{t/100}$ — eksponentialen av $\\int p\\,dt$ med $p=\\tfrac1{100}$", "$\\mu(t) = e^{-t/100}$ — eksponentialen med negativt fortegn i eksponenten", "$\\mu(t) = \\tfrac{t}{100}$ — integralet av koeffisienten $p(t)$ direkte", "$\\mu(t) = e^{4t}$ — eksponentialen av høyresiden $q$ ganget med tiden"],
      explanation: "$\\mu = e^{\\int p\\,dt} = e^{t/100}$. Da blir venstresiden $(\\mu y)'$ — det er gjenkjenningssteget føringen skal vise. Feil fortegn i eksponenten er den vanligste glippen.",
    },
  ],
  'mat111-uib-8-4': [
    {
      question: "Settet har 15 likt vektede deloppgaver på 300 minutter. Hva er tidsbudsjettet?",
      options: ["Rundt 20 minutter per deloppgave, siden alle 15 teller helt likt", "Rundt 30 minutter per deloppgave, siden bevisoppgavene tar lengst tid", "Rundt 12 minutter per deloppgave, så resten kan brukes på kontroll", "Fri disponering, ettersom de siste oppgavene er verdt mest poeng"],
      explanation: "$300/15 = 20$ min per deloppgave. Lik vekting betyr at en bevisoppgave du står fast på koster like mye som en du aldri rekker — tidsdisiplinen er avgjørende.",
    },
    {
      question: "For at fikspunktiterasjonen i oppgave 6 skal konvergere, hva må vises om $g$?",
      options: ["At $g'(x^*) = 0$ nøyaktig i selve fikspunktet $x^*$ som iterasjonen søker", "At $|g'| \\le K < 1$ på hele intervallet, med sekantsetningen som bro", "At $g' < 0$ overalt, slik at iteratene $x_n$ da alltid vil avta jevnt", "At $g$ har et indre lokalt maksimum et eller annet sted i intervallet"],
      explanation: "Kontraksjon krever $K = \\max|g'| < 1$ på HELE intervallet; sekantsetningen (MVT) gir da $|g(u)-g(v)| \\le K|u-v|$. Ett-punkts-sjekk holder ikke, og $g' < 0$ gir oscillasjon (ikke i seg selv konvergens).",
    },
    {
      question: "I oppgave 4 bestemmes $a, b$ ved grense-av-derivert. Hvilket vilkår glemmes lettest?",
      options: ["At den andrederiverte $f''$ må stemme overens fra begge sidene av skjøten", "At $f'$ må være voksende på begge sider av skjøtepunktet $x = 2$", "At $f$ må være et polynom for at grense-av-derivert-setningen gjelder", "Kontinuitetslikningen i skjøten — setningen forutsetter $f$ kontinuerlig"],
      explanation: "Setningen krever $f$ kontinuerlig i punktet OG at $\\lim f'$ fra hver side finnes og er like. Kontinuitetslikningen ($4a+2b=6$) er den ene av to ligninger — glemmes den, kan ikke $a$ og $b$ bestemmes.",
    },
    {
      question: "Hvorfor integrerer Simpsons metode ethvert tredjegradspolynom eksakt?",
      options: ["Fordi metoden legger en tilpasset parabel gjennom de tre punktene på grafen", "Fordi feilleddet inneholder $f'''$, som blir konstant for alle kubiske polynom", "Fordi $\\int$ og $S$ er lineære og eksakte på basisen $1, x, x^2, x^3$", "Fordi de indre trapesleddene alltid kansellerer de kubiske bidragene parvis"],
      explanation: "Linearitet av både $\\int$ og $S$ + eksakthet på basisen $\\{1,x,x^2,x^3\\}$ gir eksakthet for alle kubiske. Feilleddet inneholder $f^{(4)}$ (ikke $f'''$), som er $0$ for kubiske. Parabel-svaret er sant om konstruksjonen, men forklarer ikke kubisk-eksaktheten.",
    },
    {
      question: "Hva er IKKE tilstrekkelig for å konkludere at $\\sum a_n$ konvergerer?",
      options: ["At forholdet $a_{n+1}/a_n$ har en grenseverdi som ligger strengt under $1$", "At $a_n \\le b_n$ for en $b_n$ der $\\sum b_n$ er en konvergent majorant", "At $\\sqrt[n]{a_n}$ har en grenseverdi som er strengt mindre enn tallet $1$", "At leddene $a_n \\to 0$ — nødvendig, men langtfra tilstrekkelig alene"],
      explanation: "$a_n \\to 0$ er nødvendig, men ikke tilstrekkelig: den harmoniske rekken $\\sum 1/n$ divergerer selv om leddene går mot $0$. Forholdstest ($L<1$), rottest ($L<1$) og sammenligning med konvergent majorant er derimot alle gyldige konvergenskriterier.",
    },
  ],
};

export default quizData_mat111uib;
