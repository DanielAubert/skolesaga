import type { QuizQuestion } from './quiz-data';

const quizData_mat1100: Record<string, QuizQuestion[]> = {
  'mat1100-0-1': [
    {
      question: "Hvor stor del av karakteren i MAT1100 teller midtveiseksamenen?",
      options: ["En tredjedel (1/3) av samlet karakter", "To tredjedeler (2/3) av samlet karakter", "Halvparten (1/2) av samlet karakter", "En firedel (1/4) av samlet karakter"],
      explanation: "Midtveis teller 1/3 og slutteksamen 2/3. Fordi midtveis likevel er en hel tredjedel, er det en dyr feil å kun trene langsvar og hoppe over flervalgstempoet.",
    },
    {
      question: "Hvor mange flervalgsoppgaver har midtveiseksamenen typisk?",
      options: ["Mellom 18 og 20 oppgaver à fem alternativer", "Mellom 25 og 30 oppgaver à fem alternativer", "Mellom 10 og 12 oppgaver à fem alternativer", "Mellom 40 og 45 oppgaver à fem alternativer"],
      explanation: "Midtveis har 18–20 flervalg på to timer, altså rundt seks minutter per oppgave. Tidsbudsjettet er nøkkelen til å rekke gjennom hele settet.",
    },
    {
      question: "Hvilket tema er størst på midtveiseksamenen?",
      options: ["Komplekse tall, med rundt 30 prosent av spørsmålene", "Integrasjonsteknikk, med rundt 30 prosent av spørsmålene", "Lineær algebra, med rundt 30 prosent av spørsmålene", "Uegentlige integraler, med rundt 30 prosent av spørsmålene"],
      explanation: "Komplekse tall er nesten en tredjedel av midtveis og åpner alltid settet. Integrasjon og lineær algebra hører derimot til slutteksamen, ikke midtveis.",
    },
    {
      question: "Hvilken oppgavetype har vært på alle 21 slutteksamenene i arkivet?",
      options: ["Gradient og retningsderivert (sjanger A)", "Omdreiningsvolum om en akse (sjanger D)", "Komplekse likninger og faktorisering (sjanger G)", "Middelverdisetningen med hjelpefunksjon (sjanger I)"],
      explanation: "Gradient/retningsderivert er 21/21 — alltid, og ofte tidlige billige poeng. De andre er hyppige, men ikke på hvert eneste sett: D er 15/21, G er 10/21 og MVT er 4/21.",
    },
    {
      question: "Hva er grunnregelen for poenggiving på slutteksamen?",
      options: ["Et riktig svar uten begrunnelse gir null poeng", "Et riktig svar gir fulle poeng uansett begrunnelse", "Et galt svar trekker poeng fra de andre oppgavene", "Bare det siste delpunktet i hver oppgave gir poeng"],
      explanation: "Sensorregelen «ubegrunnet svar = 0» betyr at veien til svaret må føres ut: teoremer navngis, mellomregning står der, konklusjonen skrives i ord. Dette gjelder ikke på midtveis, som er ren avkryssing.",
    },
    {
      question: "Omtrent hvor lang tid har du per oppgave på midtveiseksamenen?",
      options: ["Rundt seks minutter per flervalgsoppgave", "Rundt femten minutter per flervalgsoppgave", "Rundt to minutter per flervalgsoppgave", "Rundt tjue minutter per flervalgsoppgave"],
      explanation: "120 minutter fordelt på 20 oppgaver gir seks minutter hver. Å grave seg ned i én vanskelig oppgave i femten minutter stjeler tid fra flere du kunne tatt trygt.",
    },
    {
      question: "Omtrent hvor lang tid er satt av per delpunkt på slutteksamen?",
      options: ["Rundt atten til tjue minutter per delpunkt", "Rundt førti til femti minutter per delpunkt", "Rundt fem til seks minutter per delpunkt", "Rundt seksti til sytti minutter per delpunkt"],
      explanation: "Fire timer fordelt på 12–13 delpunkter gir omtrent 18–20 minutter hver. Det gir rom for full føring, som sensorregelen krever — men ikke for å stå fast lenge.",
    },
    {
      question: "Hvor mange ganger har rekker vært på de 21 slutteksamenene i arkivet?",
      options: ["Null ganger — rekker har ingen forekomster", "Elleve ganger — rekker er et fast innslag", "Sytten ganger — rekker er nærmest garantert", "Tjueen ganger — rekker er på hvert sett"],
      explanation: "Rekker er 0/21 og differensialligninger 0/21; Taylor bare 1/21. De dekkes fordi emnebeskrivelsen krever dem, men prioriteres sist — med forbeholdet at arkivet stopper i 2023.",
    },
    {
      question: "Hva bør du gjøre med flervalgsoppgaver du er usikker på mot slutten av midtveis?",
      options: ["Krysse av likevel, siden det ikke er gjettestraff", "La feltet stå tomt for å unngå poengtrekk", "Stryke over alle alternativene for å markere tvil", "Vente og be om ekstra tid til de vanskelige"],
      explanation: "Midtveis har ingen gjettestraff, så et tomt felt kan aldri gi poeng, mens en gjetning kan. Derfor skal alt være krysset av når du leverer.",
    },
    {
      question: "Hvor ofte har signaturoppgaven (kontinuitet/deriverbarhet i punkt) vært på de siste settene?",
      options: ["På fem av de seks siste slutteksamenene", "På én av de seks siste slutteksamenene", "På ingen av de seks siste slutteksamenene", "På tre av de seks siste slutteksamenene"],
      explanation: "Sjanger H er 10/21 totalt, men hele 5 av 6 siste år — oscillasjonsfamilien fire år på rad. Den skiller toppkarakterene og drilles i [kap. 3.3](/mat1100/mat1100-3-3).",
    },
  ],
  'mat1100-1-1': [
    {
      question: "Regn ut $(3+2i)+(1-4i)$.",
      options: ["$4-2i$", "$4+6i$", "$2-2i$", "$4-6i$"],
      explanation: "Legg sammen ledd for ledd: realdel $3+1=4$, imaginærdel $2+(-4)=-2$, altså $4-2i$. Feilen $4+6i$ kommer av å legge sammen imaginærdelene med feil fortegn.",
    },
    {
      question: "Regn ut $(2+i)(3-i)$.",
      options: ["$7+i$", "$6+i$", "$5+i$", "$7-i$"],
      explanation: "Gang ut: $6-2i+3i-i^2 = 6+i+1 = 7+i$ (husk $i^2=-1$). Glemmer man $i^2$-leddet, får man $6+i$.",
    },
    {
      question: "Hva er $|3-4i|$?",
      options: ["$5$", "$7$", "$25$", "$1$"],
      explanation: "Modulus er $\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}=5$. Å legge sammen $3+4$ gir feilsvaret $7$; å glemme rota gir $25$.",
    },
    {
      question: "Hva er konjugatet $\\bar z$ av $z=-2+5i$?",
      options: ["$-2-5i$", "$2-5i$", "$2+5i$", "$-2+5i$"],
      explanation: "Konjugatet snur fortegnet på imaginærdelen og lar realdelen stå: $\\overline{-2+5i}=-2-5i$. Å snu realdelen òg er en vanlig feil.",
    },
    {
      question: "Skriv $\\dfrac{1}{i}$ på formen $a+bi$.",
      options: ["$-i$", "$i$", "$1$", "$-1$"],
      explanation: "Utvid med $\\bar i=-i$: $\\dfrac{1}{i}\\cdot\\dfrac{-i}{-i}=\\dfrac{-i}{-i^2}=\\dfrac{-i}{1}=-i$. Fortegnsfeil gir $i$.",
    },
    {
      question: "Skriv $\\dfrac{2+i}{1-i}$ på formen $a+bi$.",
      options: ["$\\tfrac12+\\tfrac32 i$", "$\\tfrac32+\\tfrac12 i$", "$\\tfrac12-\\tfrac32 i$", "$\\tfrac32-\\tfrac12 i$"],
      explanation: "Utvid med $1+i$: teller $(2+i)(1+i)=1+3i$, nevner $(1-i)(1+i)=2$. Svar $\\tfrac{1+3i}{2}=\\tfrac12+\\tfrac32 i$. Å bytte real- og imaginærdel gir $\\tfrac32+\\tfrac12 i$.",
    },
    {
      question: "Skriv $z=-2+2i$ på polarform.",
      options: ["$2\\sqrt2\\,e^{3\\pi i/4}$", "$2\\sqrt2\\,e^{-\\pi i/4}$", "$2\\sqrt2\\,e^{\\pi i/4}$", "$2\\,e^{3\\pi i/4}$"],
      explanation: "Punktet ligger i andre kvadrant: $r=\\sqrt8=2\\sqrt2$, referansevinkel $\\pi/4$, så $\\theta=\\pi-\\pi/4=3\\pi/4$. Blind $\\arctan(-1)=-\\pi/4$ gir feil kvadrant.",
    },
    {
      question: "Skriv $z=1-i$ på polarform.",
      options: ["$\\sqrt2\\,e^{-\\pi i/4}$", "$\\sqrt2\\,e^{\\pi i/4}$", "$\\sqrt2\\,e^{3\\pi i/4}$", "$2\\,e^{-\\pi i/4}$"],
      explanation: "Fjerde kvadrant: $r=\\sqrt2$, argument $-\\pi/4$. Å glemme fortegnet på vinkelen gir $\\pi/4$ (feil kvadrant); å glemme rota i modulus gir $2$.",
    },
    {
      question: "Hva er argumentet (hovedargument) til $-1+\\sqrt3\\,i$?",
      options: ["$2\\pi/3$", "$\\pi/3$", "$-\\pi/3$", "$5\\pi/6$"],
      explanation: "Andre kvadrant, $r=2$, referansevinkel $\\pi/3$, så $\\theta=\\pi-\\pi/3=2\\pi/3$. Å ignorere kvadranten gir $\\pi/3$.",
    },
    {
      question: "Hva er $|-\\sqrt3-i|$?",
      options: ["$2$", "$4$", "$\\sqrt2$", "$1+\\sqrt3$"],
      explanation: "$|-\\sqrt3-i|=\\sqrt{3+1}=\\sqrt4=2$. Å glemme rota gir $4$.",
    },
    {
      question: "Skriv $z=4e^{i\\pi/3}$ på kartesisk form.",
      options: ["$2+2\\sqrt3\\,i$", "$2\\sqrt3+2i$", "$-2+2\\sqrt3\\,i$", "$2-2\\sqrt3\\,i$"],
      explanation: "$a=4\\cos\\tfrac{\\pi}{3}=4\\cdot\\tfrac12=2$, $b=4\\sin\\tfrac{\\pi}{3}=4\\cdot\\tfrac{\\sqrt3}{2}=2\\sqrt3$. Å bytte $\\cos$ og $\\sin$ gir $2\\sqrt3+2i$.",
    },
    {
      question: "Hva er $2e^{i\\pi}$ på kartesisk form?",
      options: ["$-2$", "$2$", "$2i$", "$-2i$"],
      explanation: "$e^{i\\pi}=\\cos\\pi+i\\sin\\pi=-1$, så $2e^{i\\pi}=-2$. Dette er Eulers identitet $e^{i\\pi}=-1$ ganget med $2$.",
    },
    {
      question: "Hva er $3e^{i\\pi/2}$ på kartesisk form?",
      options: ["$3i$", "$-3i$", "$3$", "$-3$"],
      explanation: "$e^{i\\pi/2}=\\cos\\tfrac{\\pi}{2}+i\\sin\\tfrac{\\pi}{2}=i$, så $3e^{i\\pi/2}=3i$. Fortegnsfeil på $\\sin$ gir $-3i$.",
    },
    {
      question: "Regn ut $\\bigl(\\sqrt2\\,e^{i\\pi/4}\\bigr)\\bigl(2\\,e^{i\\pi/4}\\bigr)$.",
      options: ["$2\\sqrt2\\,e^{i\\pi/2}$", "$2\\sqrt2\\,e^{i\\pi/4}$", "$\\sqrt2\\,e^{i\\pi/2}$", "$4\\,e^{i\\pi/2}$"],
      explanation: "Gang modulusene ($\\sqrt2\\cdot2=2\\sqrt2$) og legg sammen argumentene ($\\pi/4+\\pi/4=\\pi/2$). Å glemme å addere vinklene gir feil argument $\\pi/4$.",
    },
    {
      question: "Hvilken mengde er enhetssirkelen i det komplekse planet?",
      options: ["$|z|=1$", "$|z|<1$", "$|z|=0$", "$\\operatorname{Re}(z)=1$"],
      explanation: "Enhetssirkelen er alle tall med modulus (avstand til origo) lik $1$: $|z|=1$. Ulikheten $|z|<1$ gir den åpne skiven inni.",
    },
    {
      question: "Hvilken figur er mengden $|z-2i|=3$?",
      options: ["Sirkel, sentrum $2i$, radius $3$", "Sirkel, sentrum $-2i$, radius $3$", "Skive, sentrum $2i$, radius $3$", "Sirkel, sentrum $3i$, radius $2$"],
      explanation: "$|z-2i|$ er avstanden fra $z$ til punktet $2i$; lik $3$ gir sirkelen med sentrum $2i$ og radius $3$. Sentrum er $+2i$, ikke $-2i$.",
    },
    {
      question: "Hva beskriver ulikheten $|z-1|<2$?",
      options: ["Åpen skive, sentrum $1$, radius $2$", "Lukket skive, sentrum $1$, radius $2$", "Sirkel, sentrum $1$, radius $2$", "Åpen skive, sentrum $2$, radius $1$"],
      explanation: "Avstanden til $1$ er mindre enn $2$: den åpne skiven om $1$ med radius $2$; randsirkelen er ikke med (streng ulikhet). Med $\\le$ ville randen vært med.",
    },
    {
      question: "Hva er $z\\bar z$ lik for et komplekst tall $z$?",
      options: ["$|z|^2$", "$z^2$", "$2\\operatorname{Re}(z)$", "$\\bar z^2$"],
      explanation: "$z\\bar z=(a+bi)(a-bi)=a^2+b^2=|z|^2$, et reelt tall. Forveksling med $z^2=(a^2-b^2)+2abi$ (komplekst) er en vanlig felle.",
    },
    {
      question: "Hvilket utsagn er alltid sant for et komplekst tall $z$?",
      options: ["$|z|\\ge 0$ for alle $z$", "$|z|$ kan være negativ", "$\\operatorname{Im}(z)=bi$ i $a+bi$", "$\\arg z$ er alltid entydig"],
      explanation: "Modulus er en avstand og aldri negativ. Imaginærdelen er $b$ (ikke $bi$), og argumentet er bare bestemt opp til $2\\pi$.",
    },
    {
      question: "Hva er $\\operatorname{Im}(3-5i)$?",
      options: ["$-5$", "$5$", "$-5i$", "$3$"],
      explanation: "Imaginærdelen er tallet foran $i$, altså $-5$ — et reelt tall uten $i$. Å ta med $i$ ($-5i$) er en vanlig notasjonsfeil.",
    },
    {
      question: "Regn ut $i^2(1+i)$.",
      options: ["$-1-i$", "$1+i$", "$-1+i$", "$1-i$"],
      explanation: "$i^2=-1$, så $i^2(1+i)=-(1+i)=-1-i$. Å glemme at $i^2=-1$ gir $1+i$.",
    },
    {
      question: "Regn ut $(1+i)^2$.",
      options: ["$2i$", "$2$", "$-2i$", "$2+2i$"],
      explanation: "$(1+i)^2=1+2i+i^2=1+2i-1=2i$. Å droppe $i^2$-leddet gir feilsvaret $2+2i$.",
    },
    {
      question: "Hva er hovedargumentet (i $(-\\pi,\\pi]$) til $-i$?",
      options: ["$-\\pi/2$", "$\\pi/2$", "$\\pi$", "$3\\pi/2$"],
      explanation: "$-i$ ligger rett ned på den imaginære aksen, altså vinkel $-\\pi/2$ i hovedintervallet. Verdien $3\\pi/2$ er samme retning, men utenfor $(-\\pi,\\pi]$.",
    },
    {
      question: "Reduser vinkelen $9\\pi/4$ mod $2\\pi$.",
      options: ["$\\pi/4$", "$\\pi/2$", "$5\\pi/4$", "$-\\pi/4$"],
      explanation: "$9\\pi/4-2\\pi=9\\pi/4-8\\pi/4=\\pi/4$. Vinklene $9\\pi/4$ og $\\pi/4$ peker i samme retning.",
    },
    {
      question: "Hvilken mengde beskriver $|z-1|=|z+1|$?",
      options: ["Imaginæraksen, $\\operatorname{Re}(z)=0$", "Reelle aksen, $\\operatorname{Im}(z)=0$", "Sirkel om origo, radius $1$", "Enhetssirkelen $|z|=1$"],
      explanation: "Punkter like langt fra $1$ og $-1$ ligger på midtnormalen til strekningen, som er den loddrette linjen $\\operatorname{Re}(z)=0$ — den imaginære aksen.",
    },
  ],
  'mat1100-1-2': [
    {
      question: "Regn ut $(1+i)^8$.",
      options: ["$16$", "$16i$", "$8$", "$-16$"],
      explanation: "$1+i=\\sqrt2 e^{i\\pi/4}$, så $(1+i)^8=(\\sqrt2)^8 e^{i8\\pi/4}=2^4 e^{i2\\pi}=16$. Argumentet $2\\pi$ reduseres til $0$.",
    },
    {
      question: "Regn ut $(1-i)^{14}$.",
      options: ["$128i$", "$-128i$", "$128$", "$-128$"],
      explanation: "$1-i=\\sqrt2 e^{-i\\pi/4}$; modulus $(\\sqrt2)^{14}=2^7=128$, argument $14\\cdot(-\\pi/4)=-7\\pi/2\\equiv\\pi/2$. Svar $128 e^{i\\pi/2}=128i$.",
    },
    {
      question: "Regn ut $(\\sqrt3+i)^6$.",
      options: ["$-64$", "$64$", "$64i$", "$-64i$"],
      explanation: "$\\sqrt3+i=2e^{i\\pi/6}$; modulus $2^6=64$, argument $6\\cdot\\pi/6=\\pi$. Svar $64 e^{i\\pi}=64\\cdot(-1)=-64$.",
    },
    {
      question: "Hva er $|z^n|$ uttrykt ved $|z|$?",
      options: ["$|z|^n$", "$n\\,|z|$", "$|z|/n$", "$n+|z|$"],
      explanation: "de Moivre gir $|z^n|=|z|^n$ — modulusen opphøyes i $n$. Å gange med $n$ i stedet ($n|z|$) er en vanlig felle.",
    },
    {
      question: "Hva er $\\arg(z^n)$ uttrykt ved $\\arg z$?",
      options: ["$n\\,\\arg z$", "$\\arg z/n$", "$\\arg z$", "$n+\\arg z$"],
      explanation: "Argumentet multipliseres med $n$ (mod $2\\pi$): $\\arg(z^n)=n\\arg z$. Å dele på $n$ hører til rotutregning, ikke potens.",
    },
    {
      question: "Hvor mange løsninger har likningen $z^6=5$ i $\\mathbb{C}$?",
      options: ["$6$", "$1$", "$3$", "$12$"],
      explanation: "$z^n=w$ (med $w\\ne0$) har nøyaktig $n$ forskjellige løsninger. Her er $n=6$, så seks røtter jevnt fordelt på en sirkel.",
    },
    {
      question: "Hva er modulusen til hver av de fem femterøttene til $32$?",
      options: ["$2$", "$32$", "$16$", "$6$"],
      explanation: "Alle røttene har modulus $32^{1/5}=2$ (den reelle femterota av $32$). Å dele $32/5$ eller glemme rota gir feilsvarene.",
    },
    {
      question: "Hvor mange av de tre kubikkrøttene til $8$ er reelle?",
      options: ["$1$", "$3$", "$2$", "$0$"],
      explanation: "Kubikkrøttene er $2$, $-1+\\sqrt3 i$ og $-1-\\sqrt3 i$. Bare $2$ er reell; de to andre er et konjugatpar.",
    },
    {
      question: "Hvilke er de fire fjerderøttene til $1$?",
      options: ["$1,\\ i,\\ -1,\\ -i$", "$1,\\ -1,\\ 2,\\ -2$", "$i,\\ -i,\\ 2i,\\ -2i$", "$0,\\ 1,\\ i,\\ -1$"],
      explanation: "Enhetsrøttene $z^4=1$ er $e^{i2k\\pi/4}$ for $k=0,1,2,3$, altså $1, i, -1, -i$ — jevnt fordelt på enhetssirkelen.",
    },
    {
      question: "Regn ut $(1+i)^4$.",
      options: ["$-4$", "$4$", "$4i$", "$-4i$"],
      explanation: "$(1+i)^2=2i$, så $(1+i)^4=(2i)^2=4i^2=-4$. Alternativt: $(\\sqrt2)^4 e^{i4\\pi/4}=4e^{i\\pi}=-4$.",
    },
    {
      question: "Hvor stor er vinkelavstanden mellom to nabo-røtter når $n=6$?",
      options: ["$\\pi/3$", "$\\pi/6$", "$2\\pi/3$", "$\\pi$"],
      explanation: "Røttene ligger $2\\pi/n$ fra hverandre. For $n=6$ er dette $2\\pi/6=\\pi/3$ (altså $60^\\circ$).",
    },
    {
      question: "Hva er $i^{2023}$?",
      options: ["$-i$", "$i$", "$1$", "$-1$"],
      explanation: "Potenser av $i$ har periode $4$. $2023=4\\cdot505+3$, så $i^{2023}=i^3=-i$.",
    },
    {
      question: "Regn ut $\\left(2e^{i\\pi/6}\\right)^3$.",
      options: ["$8i$", "$8$", "$-8i$", "$6i$"],
      explanation: "de Moivre: modulus $2^3=8$, argument $3\\cdot\\pi/6=\\pi/2$. Svar $8e^{i\\pi/2}=8i$.",
    },
    {
      question: "En kvadratrot $w$ av $z$ har argument $\\pi/5$. Hva er argumentet til $z$?",
      options: ["$2\\pi/5$", "$\\pi/10$", "$\\pi/5$", "$4\\pi/5$"],
      explanation: "$z=w^2$, så argumentet dobles: $\\arg z=2\\cdot\\pi/5=2\\pi/5$. Å halvere i stedet ($\\pi/10$) er baklengsfellen.",
    },
    {
      question: "Hva er startvinkelen (rota med $k=0$) til $z^3=w$ når $\\arg w=\\pi/2$?",
      options: ["$\\pi/6$", "$\\pi/2$", "$3\\pi/2$", "$\\pi/3$"],
      explanation: "Startvinkelen er $\\arg w/n=(\\pi/2)/3=\\pi/6$. De andre røttene fås ved å legge til $2\\pi/3$.",
    },
    {
      question: "Hvilket tall er en løsning av $z^2=i$?",
      options: ["$e^{i\\pi/4}$", "$e^{i\\pi/2}$", "$e^{i3\\pi/4}$", "$e^{i\\pi}$"],
      explanation: "$i=e^{i\\pi/2}$, så røttene har modulus $1$ og argument $(\\pi/2)/2=\\pi/4$ (og $\\pi/4+\\pi$). Dermed er $e^{i\\pi/4}$ en løsning.",
    },
    {
      question: "Hva er summen av alle $n$ røttene til $z^n=w$ (for $n\\ge 2$)?",
      options: ["$0$", "$w$", "$1$", "$n$"],
      explanation: "Røttene ligger symmetrisk som hjørnene i en regulær $n$-kant om origo, så summen (tyngdepunktet ganget med $n$) er $0$.",
    },
    {
      question: "Reduser vinkelen $15\\pi/2$ mod $2\\pi$.",
      options: ["$3\\pi/2$", "$\\pi/2$", "$7\\pi/2$", "$\\pi$"],
      explanation: "$15\\pi/2-6\\pi=15\\pi/2-12\\pi/2=3\\pi/2$. Vinklene $15\\pi/2$ og $3\\pi/2$ peker i samme retning.",
    },
    {
      question: "Hvilken feil gjør at du finner bare én rot i stedet for $n$?",
      options: ["Å glemme $2k\\pi$-leddet", "Å redusere mod $2\\pi$", "Å ta reell $n$-te rot", "Å tegne punktet først"],
      explanation: "Uten $2k\\pi$-leddet i $z_k=\\rho^{1/n}e^{i(\\varphi+2k\\pi)/n}$ får alle røttene samme vinkel, og du finner bare $z_0$.",
    },
    {
      question: "Regn ut $\\left(\\sqrt2\\,e^{i\\pi/4}\\right)^6$.",
      options: ["$-8i$", "$8i$", "$8$", "$-8$"],
      explanation: "Modulus $(\\sqrt2)^6=2^3=8$; argument $6\\cdot\\pi/4=3\\pi/2$. Svar $8e^{i3\\pi/2}=8\\cdot(-i)=-8i$.",
    },
  ],
  'mat1100-1-3': [
    {
      question: "Løs $z^2+9=0$.",
      options: ["$z=\\pm 3i$", "$z=\\pm 9i$", "$z=\\pm 3$", "$z=\\pm 9$"],
      explanation: "$z^2=-9$, så $z=\\pm\\sqrt{-9}=\\pm i\\sqrt9=\\pm 3i$. Å glemme rota gir feilsvaret $\\pm9i$.",
    },
    {
      question: "Løs $z^2-2z+2=0$.",
      options: ["$z=1\\pm i$", "$z=-1\\pm i$", "$z=1\\pm 2i$", "$z=2\\pm i$"],
      explanation: "Diskriminant $4-8=-4$, $\\sqrt{-4}=2i$, så $z=\\dfrac{2\\pm2i}{2}=1\\pm i$ — et konjugatpar.",
    },
    {
      question: "Hva slags røtter har $z^2+2z+5=0$?",
      options: ["Komplekse konjugerte røtter", "To forskjellige reelle røtter", "Én reell dobbeltrot", "Ingen løsning i planet"],
      explanation: "Diskriminanten $4-20=-16<0$ gir to komplekse konjugerte røtter ($-1\\pm2i$). «Ingen løsning» gjelder bare over de reelle tallene.",
    },
    {
      question: "Hva er $\\sqrt{-16}$ (skrevet med $i$)?",
      options: ["$4i$", "$-4$", "$16i$", "$8i$"],
      explanation: "$\\sqrt{-16}=i\\sqrt{16}=4i$, siden $(4i)^2=16i^2=-16$. Å glemme rota gir $16i$.",
    },
    {
      question: "Et polynom med reelle koeffisienter har rota $3+2i$. Hvilket tall må også være rot?",
      options: ["$3-2i$", "$-3+2i$", "$-3-2i$", "$2+3i$"],
      explanation: "Konjugatrotsetningen: med reelle koeffisienter er den konjugerte $\\overline{3+2i}=3-2i$ også rot.",
    },
    {
      question: "Hvilken reell andregradsfaktor svarer til konjugatparet $2\\pm i$?",
      options: ["$z^2-4z+5$", "$z^2+4z+5$", "$z^2-4z-5$", "$z^2-2z+5$"],
      explanation: "$(z-(2-i))(z-(2+i))=z^2-2\\,\\mathrm{Re}(2\\!-\\!i)z+|2-i|^2=z^2-4z+5$ ($\\mathrm{Re}=2$, $|2-i|^2=5$).",
    },
    {
      question: "Hvilket er det moniske reelle polynomet av lavest grad med røttene $1$ og $1+2i$?",
      options: ["$z^3-3z^2+7z-5$", "$z^3-3z^2+5z-7$", "$z^3+3z^2+7z+5$", "$z^2-2z+5$"],
      explanation: "Konjugatet $1-2i$ må med → tre røtter, grad 3. $(z-1)(z^2-2z+5)=z^3-3z^2+7z-5$.",
    },
    {
      question: "Hvor mange røtter (talt med multiplisitet) har et fjerdegradspolynom i $\\mathbb{C}$?",
      options: ["$4$", "$2$", "$8$", "$3$"],
      explanation: "Algebraens fundamentalteorem: et polynom av grad $n$ har nøyaktig $n$ røtter i $\\mathbb{C}$. Her $n=4$.",
    },
    {
      question: "Hvilken forutsetning krever konjugatrotsetningen?",
      options: ["Reelle koeffisienter", "Komplekse koeffisienter", "Grad minst 3", "Positiv diskriminant"],
      explanation: "Setningen om at komplekse røtter kommer i konjugatpar gjelder bare når koeffisientene er reelle.",
    },
    {
      question: "Et reelt tredjegradspolynom har røttene $2+i$ og $2-i$. Hva slags tall er den tredje rota?",
      options: ["Reell", "Kompleks", "Lik $2i$", "Finnes ikke"],
      explanation: "Grad 3 gir tre røtter. To utgjør konjugatparet; siden komplekse røtter kommer parvis, må den tredje være reell.",
    },
    {
      question: "Hva er $|1-2i|^2$?",
      options: ["$5$", "$3$", "$\\sqrt5$", "$1$"],
      explanation: "$|1-2i|^2=1^2+(-2)^2=1+4=5$. Dette er konstantleddet i faktoren $z^2-2z+5$ fra paret $1\\pm2i$.",
    },
    {
      question: "Regn ut $(z-(1-2i))(z-(1+2i))$.",
      options: ["$z^2-2z+5$", "$z^2+2z+5$", "$z^2-2z-3$", "$z^2-4z+5$"],
      explanation: "$z^2-2\\,\\mathrm{Re}(1\\!-\\!2i)z+|1-2i|^2=z^2-2z+5$. Konjugatpar gir alltid en reell andregradsfaktor.",
    },
    {
      question: "Hva er den komplekse faktoriseringen av $z^2+1$?",
      options: ["$(z-i)(z+i)$", "$(z-1)(z+1)$", "$(z-i)^2$", "$(z+i)^2$"],
      explanation: "Røttene til $z^2+1=0$ er $\\pm i$, så $z^2+1=(z-i)(z+i)$ over $\\mathbb{C}$.",
    },
    {
      question: "Gjelder konjugatrotsetningen for $z^2-(3+i)z+2=0$?",
      options: ["Nei, en koeffisient er kompleks", "Ja, den gjelder alle polynom", "Ja, siden graden er lik to", "Nei, diskriminanten er null"],
      explanation: "Koeffisienten $-(3+i)$ er kompleks, så setningen gjelder ikke; røttene trenger ikke være konjugerte.",
    },
    {
      question: "Hva er $\\sqrt{2i}$ (begge kvadratrøtter, via polarform)?",
      options: ["$\\pm(1+i)$", "$\\pm(1-i)$", "$\\pm 2i$", "$\\pm\\sqrt2$"],
      explanation: "$2i=2e^{i\\pi/2}$, så $\\sqrt{2i}=\\pm\\sqrt2 e^{i\\pi/4}=\\pm(1+i)$. Kontroll: $(1+i)^2=2i$.",
    },
    {
      question: "Når er $z_0$ en rot i polynomet $p(z)$?",
      options: ["Når $(z-z_0)$ er faktor", "Når $(z+z_0)$ er en faktor", "Når $z_0$ er reell", "Når $p'(z_0)=0$"],
      explanation: "Faktorteoremet: $z_0$ er rot nøyaktig når $(z-z_0)$ deler $p(z)$ (rest $0$).",
    },
    {
      question: "Hvilken multiplisitet har rota $2$ i $(z-2)^3(z+1)$?",
      options: ["$3$", "$1$", "$4$", "$2$"],
      explanation: "Faktoren $(z-2)$ opptrer tre ganger, så multiplisiteten er $3$. Summen av multiplisiteter (3+1) er graden 4.",
    },
    {
      question: "Hva er summen av røttene til $z^2-2z+2=0$?",
      options: ["$2$", "$-2$", "$1$", "$0$"],
      explanation: "For $z^2+bz+c$ er rotsummen $-b=2$ (røttene $1\\pm i$ summerer til $2$). Et raskt kontrollgrep.",
    },
    {
      question: "Løs $z^2+4z+13=0$.",
      options: ["$z=-2\\pm 3i$", "$z=2\\pm 3i$", "$z=-4\\pm 3i$", "$z=-2\\pm 9i$"],
      explanation: "Diskriminant $16-52=-36$, $\\sqrt{-36}=6i$, så $z=\\dfrac{-4\\pm6i}{2}=-2\\pm3i$.",
    },
    {
      question: "Hvilken grad har det minste reelle polynomet med $i$ og $3$ som røtter?",
      options: ["$3$", "$2$", "$4$", "$1$"],
      explanation: "Konjugatet $-i$ må med → røtter $i, -i, 3$, altså grad $3$.",
    },
    {
      question: "Hva er den reelle faktoriseringen av $z^3-3z^2+z+5$ (røtter $2\\pm i$ og $-1$)?",
      options: ["$(z^2-4z+5)(z+1)$", "$(z^2+4z+5)(z-1)$", "$(z^2-4z+5)(z-1)$", "$(z-2)^2(z+1)$"],
      explanation: "Konjugatparet gir $z^2-4z+5$, og den reelle rota $-1$ gir $(z+1)$: $p(z)=(z^2-4z+5)(z+1)$.",
    },
    {
      question: "Hvordan opptrer komplekse røtter i et polynom med reelle koeffisienter?",
      options: ["I konjugatpar", "Enkeltvis", "Bare reelle", "I tripler"],
      explanation: "Konjugatrotsetningen: er $z_0$ rot, er $\\bar{z_0}$ det også — de kommer alltid parvis.",
    },
    {
      question: "Løs $z^2=-1$.",
      options: ["$z=\\pm i$", "$z=\\pm 1$", "$z=i$", "$z=-1$"],
      explanation: "Per definisjon av $i$ er $i^2=-1$, og $(-i)^2=-1$ også, så $z=\\pm i$ — begge kvadratrøttene.",
    },
    {
      question: "Hva er diskriminanten $b^2-4ac$ i $z^2-(5-i)z+(6-3i)=0$?",
      options: ["$2i$", "$-2i$", "$2$", "$-2$"],
      explanation: "$b^2=(5-i)^2=24-10i$ og $4ac=4(6-3i)=24-12i$, så $b^2-4ac=(24-10i)-(24-12i)=2i$.",
    },
    {
      question: "Hvilken faktorisering bruker bare førstegradsfaktorer?",
      options: ["Den komplekse", "Den reelle", "Begge alltid", "Ingen av dem"],
      explanation: "Over $\\mathbb{C}$ deles polynomet helt ned i førstegradsfaktorer. Den reelle stopper ved reelle andregradsfaktorer for konjugatpar.",
    },
  ],
  'mat1100-1-4': [
    {
      question: "Skriv $z = 3i$ på polarform.",
      options: ["$3e^{i\\pi/2}$", "$3e^{-i\\pi/2}$", "$3e^{i\\pi}$", "$e^{i\\pi/2}$"],
      explanation: "$|3i| = 3$ og tallet peker rett opp, så $\\arg = \\pi/2$: $3e^{i\\pi/2}$. $3e^{-i\\pi/2}$ peker ned; $e^{i\\pi/2}$ har feil modulus.",
    },
    {
      question: "Skriv $z = -2 - 2i$ på polarform.",
      options: ["$2\\sqrt2\\,e^{-i3\\pi/4}$", "$2\\sqrt2\\,e^{i3\\pi/4}$", "$2\\sqrt2\\,e^{i\\pi/4}$", "$4\\,e^{-i3\\pi/4}$"],
      explanation: "$r = \\sqrt{8} = 2\\sqrt2$; $(-2,-2)$ ligger i tredje kvadrant, $\\arg = -3\\pi/4$. Feil kvadrant gir $3\\pi/4$ eller $\\pi/4$; $r = 4$ er kvadratsummen uten rot.",
    },
    {
      question: "Regn ut $(1+i)^8$.",
      options: ["$16$", "$-16$", "$16i$", "$256$"],
      explanation: "$1+i = \\sqrt2\\,e^{i\\pi/4}$, så $(1+i)^8 = 2^4 e^{i2\\pi} = 16$. $256$ er $(\\sqrt2)^8$ regnet som $2^8$; $16i$ glemmer at $e^{i2\\pi}=1$.",
    },
    {
      question: "Regn ut $(\\sqrt3 - i)^4$.",
      options: ["$-8 - 8\\sqrt3\\,i$", "$8 + 8\\sqrt3\\,i$", "$-8 + 8\\sqrt3\\,i$", "$8 - 8\\sqrt3\\,i$"],
      explanation: "$\\sqrt3 - i = 2e^{-i\\pi/6}$, så $(\\sqrt3-i)^4 = 16e^{-i2\\pi/3} = 16(-\\tfrac12 - \\tfrac{\\sqrt3}{2}i) = -8 - 8\\sqrt3 i$. $\\pm16$ glemmer at vinkelen ikke lander på realaksen.",
    },
    {
      question: "Hvor mange løsninger har $z^6 = 1$?",
      options: ["$6$", "$1$", "$2$", "$3$"],
      explanation: "$z^n = w$ har nøyaktig $n$ løsninger. For $n = 6$ er det $6$ enhetsrøtter, jevnt fordelt på enhetssirkelen.",
    },
    {
      question: "Alle femterøttene til $32$ har samme modulus. Hvilken?",
      options: ["$2$", "$32$", "$\\sqrt{32}$", "$5$"],
      explanation: "Modulusen til en $n$-te rot er $|w|^{1/n} = 32^{1/5} = 2$. $32$ er modulusen til $w$; $5$ er antallet røtter.",
    },
    {
      question: "Løs $z^2 + 2z + 2 = 0$.",
      options: ["$-1 \\pm i$", "$1 \\pm i$", "$-2 \\pm 2i$", "$-1 \\pm 2i$"],
      explanation: "Diskriminant $4 - 8 = -4$, $z = \\frac{-2 \\pm 2i}{2} = -1 \\pm i$. $-2\\pm2i$ glemmer $/2a$; $1\\pm i$ mister fortegnet på realdelen.",
    },
    {
      question: "Løs $z^2 = 2i$.",
      options: ["$\\pm(1 + i)$", "$\\pm(1 - i)$", "$\\pm 2i$", "$\\pm\\sqrt2\\,i$"],
      explanation: "$(1+i)^2 = 2i$, så $z = \\pm(1+i)$. $\\pm(1-i)$ gir $-2i$; modulusen alene ($\\sqrt2$) er ikke en rot.",
    },
    {
      question: "Et reelt polynom av lavest grad har røttene $2$ og $i$. Hvilket er det?",
      options: ["$z^3 - 2z^2 + z - 2$", "$z^3 + 2z^2 + z + 2$", "$(z-2)(z-i)$", "$z^2 - 2z + 1$"],
      explanation: "Reelle koeffisienter ⇒ $-i$ er også rot: $(z-i)(z+i) = z^2+1$, gang med $(z-2)$: $z^3 - 2z^2 + z - 2$. Uten konjugatroten blir graden feil.",
    },
    {
      question: "Regn ut kvotienten $\\dfrac{2 - 2i}{1 + i}$.",
      options: ["$-2i$", "$2i$", "$-2$", "$1 - 2i$"],
      explanation: "Multipliser med konjugatet: $\\frac{(2-2i)(1-i)}{2} = \\frac{-4i}{2} = -2i$. Fortegnsfeil i utregningen gir $2i$ eller $-2$.",
    },
    {
      question: "Hva er $\\left|\\dfrac{3 - 4i}{2}\\right|$?",
      options: ["$\\dfrac{5}{2}$", "$5$", "$\\dfrac{7}{2}$", "$\\sqrt7$"],
      explanation: "$|3-4i| = 5$, delt på $|2| = 2$ gir $5/2$. $\\frac72$ legger sammen $3+4$ i telleren i stedet for kvadratsummen.",
    },
    {
      question: "Hvilket tall er en tredjerot av $-8$?",
      options: ["$1 + \\sqrt3\\,i$", "$-1 + \\sqrt3\\,i$", "$\\sqrt3 - i$", "$-\\sqrt3 - i$"],
      explanation: "$-8 = 8e^{i\\pi}$, tredjerøttene er $2e^{i\\pi/3}, 2e^{i\\pi}, 2e^{i5\\pi/3}$, altså $1+\\sqrt3 i,\\ -2,\\ 1-\\sqrt3 i$. De øvrige har riktig modulus $2$ men feil vinkel, så de er ikke røtter.",
    },
    {
      question: "Regn ut $\\left(\\cos\\tfrac{\\pi}{9} + i\\sin\\tfrac{\\pi}{9}\\right)^3$.",
      options: ["$\\tfrac12 + \\tfrac{\\sqrt3}{2}i$", "$\\tfrac{\\sqrt3}{2} + \\tfrac12 i$", "$\\cos\\tfrac{\\pi}{3}$", "$1$"],
      explanation: "de Moivre: vinkelen tredobles til $\\pi/3$, modulus $1$, så $\\cos\\frac\\pi3 + i\\sin\\frac\\pi3 = \\frac12 + \\frac{\\sqrt3}{2}i$. Å bytte $\\cos$ og $\\sin$ gir $\\tfrac{\\sqrt3}{2} + \\tfrac12 i$.",
    },
    {
      question: "Hvilken mengde beskriver $|z - 2i| = 3$?",
      options: ["en sirkel om $2i$ med radius $3$", "en sirkel om $-2i$ med radius $3$", "en åpen skive om $2i$", "en linje gjennom $2i$"],
      explanation: "$|z - 2i|$ er avstanden fra $z$ til $2i$; lik $3$ gir en sirkel om $2i$ med radius $3$. Fortegnsfeil flytter sentrum til $-2i$; $=$ gir sirkel, ikke skive.",
    },
    {
      question: "Hvilken mengde beskriver $|z - 1| = |z + 1|$?",
      options: ["den imaginære aksen", "den reelle aksen", "enhetssirkelen", "punktet $0$"],
      explanation: "Punkter like langt fra $1$ og $-1$ ligger på midtnormalen, som her er den imaginære aksen $\\mathrm{Re}\\,z = 0$. Å forveksle aksene gir realaksen.",
    },
    {
      question: "Hvilket utsagn er sant for alle komplekse $z$?",
      options: ["$z\\bar{z} = |z|^2$", "$z^2 = |z|^2$", "$z + \\bar{z} = 2i\\,\\mathrm{Im}\\,z$", "$\\bar{z} = -z$"],
      explanation: "$z\\bar z = a^2 + b^2 = |z|^2$ alltid. $z^2 = |z|^2$ gjelder bare reelle $z$; $z + \\bar z = 2\\,\\mathrm{Re}\\,z$; $\\bar z = -z$ bare for rent imaginære.",
    },
    {
      question: "En kvadratrot av $w$ har argument $\\pi/8$. Hva er $\\arg w$?",
      options: ["$\\pi/4$", "$\\pi/16$", "$\\pi/8$", "$\\pi/2$"],
      explanation: "Er $z$ kvadratrot av $w$, er $w = z^2$ og $\\arg w = 2\\arg z = \\pi/4$. Å dele i stedet for å gange gir $\\pi/16$.",
    },
    {
      question: "Regn ut $(1 - i)^6$.",
      options: ["$8i$", "$-8i$", "$8$", "$-8$"],
      explanation: "$1 - i = \\sqrt2\\,e^{-i\\pi/4}$, så $(1-i)^6 = 8e^{-i3\\pi/2} = 8i$ (siden $e^{-i3\\pi/2} = i$). Uten reduksjon av vinkelen roter man fortegnet.",
    },
    {
      question: "Skriv $z = 3e^{i2\\pi/3}$ på kartesisk form.",
      options: ["$-\\tfrac32 + \\tfrac{3\\sqrt3}{2}i$", "$\\tfrac32 + \\tfrac{3\\sqrt3}{2}i$", "$-\\tfrac{3\\sqrt3}{2} + \\tfrac32 i$", "$3 + 3i$"],
      explanation: "$3(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}) = 3(-\\frac12 + \\frac{\\sqrt3}{2}i) = -\\frac32 + \\frac{3\\sqrt3}{2}i$. Feil fortegn eller byttet $\\cos/\\sin$ gir de andre.",
    },
    {
      question: "Hva er argumentet (i $(-\\pi, \\pi]$) til $z = -1 - i$?",
      options: ["$-3\\pi/4$", "$3\\pi/4$", "$\\pi/4$", "$-\\pi/4$"],
      explanation: "$(-1,-1)$ ligger i tredje kvadrant; referansevinkel $\\pi/4$ gir $\\arg = -\\pi + \\pi/4 = -3\\pi/4$. Blindt $\\arctan(1) = \\pi/4$ er kvadrantfellen.",
    },
  ],
  'mat1100-2-1': [
    {
      question: "Hva er den korrekte kvantorrekkefølgen i ε-δ-definisjonen av $\\lim_{x\\to a}f(x)=L$?",
      options: ["For alle $\\varepsilon>0$ finnes en $\\delta>0$ (først $\\varepsilon$, så $\\delta$)", "Det finnes en $\\delta>0$ som virker for alle $\\varepsilon>0$ (først $\\delta$, så $\\varepsilon$)", "For alle $\\delta>0$ finnes en $\\varepsilon>0$ (først $\\delta$, så $\\varepsilon$)", "Det finnes en $\\varepsilon>0$ og en $\\delta>0$ uavhengig av hverandre"],
      explanation: "Definisjonen er $\\forall\\varepsilon\\,\\exists\\delta$: $\\varepsilon$ gis først, $\\delta$ velges som svar og kan avhenge av $\\varepsilon$. De tre andre bytter om rekkefølgen eller rollene.",
    },
    {
      question: "I definisjonen av grenseverdi hører feilmarginen $\\varepsilon$ til hvilken side?",
      options: ["Funksjonssiden: $|f(x)-L|<\\varepsilon$", "$x$-siden: $|x-a|<\\varepsilon$", "Både $x$-siden og funksjonssiden samtidig", "Ingen av sidene; $\\varepsilon$ er en fast konstant"],
      explanation: "$\\varepsilon$ styrer nærheten til $L$ på funksjonssiden, $\\delta$ styrer nærheten til $a$ på $x$-siden. Å bytte disse er en klassisk distraktor.",
    },
    {
      question: "Hva betyr betingelsen $0<|x-a|$ i definisjonen?",
      options: ["At $x=a$ selv holdes utenfor grensebetraktningen i punktet", "At variabelen $x$ må være strengt positiv i hele det aktuelle intervallet", "At funksjonsverdien $f(x)$ må være forskjellig fra grenseverdien $L$ overalt", "At nærhetsradien $\\delta$ må velges som et strengt positivt reelt tall her"],
      explanation: "$0<|x-a|$ punkterer omegnen: $x$ nærmer seg $a$, men er aldri lik $a$. Derfor påvirker $f(a)$ ikke grensen.",
    },
    {
      question: "For $\\lim_{x\\to 2}(3x-1)=5$, hvilket $\\delta$ virker for en gitt $\\varepsilon>0$?",
      options: ["$\\delta=\\varepsilon/3$", "$\\delta=\\varepsilon/5$", "$\\delta=3\\varepsilon$", "$\\delta=\\varepsilon$"],
      explanation: "$|f(x)-5|=|3x-6|=3|x-2|$, så kravet $3|x-2|<\\varepsilon$ gir $|x-2|<\\varepsilon/3$. Koeffisienten 3 havner i nevneren.",
    },
    {
      question: "Hva er riktig negasjon av $\\lim_{x\\to a}f(x)=L$?",
      options: ["$\\exists\\varepsilon>0\\,\\forall\\delta>0\\,\\exists x:\\,0<|x-a|<\\delta$ og $|f(x)-L|\\ge\\varepsilon$", "$\\forall\\varepsilon>0\\,\\exists\\delta>0:\\,0<|x-a|<\\delta$, og samtidig $|f(x)-L|\\ge\\varepsilon$ overalt", "$\\exists\\varepsilon>0\\,\\forall\\delta>0\\,\\exists x:\\,0<|x-a|<\\delta$ og $|f(x)-L|>\\varepsilon$ (streng)", "$\\forall\\varepsilon>0\\,\\forall\\delta>0\\,\\exists x:\\,|x-a|<\\delta$ og $|f(x)-L|<\\varepsilon$ (uendret)"],
      explanation: "Negasjon bytter $\\forall\\leftrightarrow\\exists$ og snur $<\\varepsilon$ til $\\ge\\varepsilon$. Distraktorene beholder feil rekkefølge eller bruker streng ulikhet.",
    },
    {
      question: "Når faktoren $|f(x)-L|$ ved $x^2\\to 4$ i $x\\to2$ avgrenses, hvorfor tar man $\\delta=\\min(\\varepsilon/5,1)$?",
      options: ["1-tallet sikrer avgrensningen $|x+2|<5$; $\\varepsilon/5$ sikrer $\\varepsilon$-kravet", "1-tallet gjør $\\delta$ større, slik at selve beviset går fortere igjennom uansett", "Leddet $\\varepsilon/5$ holder alltid helt alene, helt uten noe kontrollintervall i det hele", "Man skal alltid ta det aller største av de to tallene for å få en gyldig $\\delta$ her"],
      explanation: "Kontrollintervallet $|x-2|<1$ gir $|x+2|<5$; $\\delta$ må være $\\le 1$ for at dette skal gjelde og $\\le\\varepsilon/5$ for $\\varepsilon$-kravet, altså minimum av de to.",
    },
    {
      question: "Hva sier kriteriet for at den tosidige grensen $\\lim_{x\\to a}f(x)$ finnes?",
      options: ["Venstregrensen og høyregrensen finnes og er like", "Bare høyregrensen finnes", "Funksjonsverdien $f(a)$ finnes", "Venstre- og høyregrensen finnes, men kan være ulike"],
      explanation: "Tosidig grense finnes hvis og bare hvis begge ensidige grenser finnes og er like. Ulike ensidige grenser gir en hoppdiskontinuitet.",
    },
    {
      question: "For $f(x)=|x|/x$, hva er $\\lim_{x\\to0^-}f(x)$?",
      options: ["$-1$", "$1$", "$0$", "Finnes ikke"],
      explanation: "For $x<0$ er $|x|=-x$, så $f(x)=-x/x=-1$. Høyregrensen er $+1$; siden de er ulike finnes ikke den tosidige grensen.",
    },
    {
      question: "Hvilke krav må ALLE holde for at $f$ er kontinuerlig i $a$?",
      options: ["$f(a)$ finnes, grensen finnes, og de to er like", "Bare at grenseverdien $\\lim_{x\\to a}f(x)$ finnes i punktet $a$", "Bare at funksjonsverdien $f(a)$ er definert, uten flere krav", "At venstregrensen alene er lik funksjonsverdien $f(a)$ i punktet"],
      explanation: "Kontinuitet krever alle tre: $f(a)$ definert, grensen finnes, og $\\lim_{x\\to a}f(x)=f(a)$. Å nøye seg med grensen glemmer å treffe funksjonsverdien.",
    },
    {
      question: "$g(x)=\\frac{x^2-9}{x-3}$ for $x\\ne3$ og $g(3)=5$. Er $g$ kontinuerlig i 3?",
      options: ["Nei — grensen er 6, men $g(3)=5$", "Ja — grensen finnes, det holder", "Nei — grensen finnes ikke i 3", "Ja — $g(3)$ er definert, det holder"],
      explanation: "Forkorting gir $\\lim_{x\\to3}g=x+3\\to6$, men $g(3)=5\\ne6$, så krav 3 svikter. Dette er en hevbar diskontinuitet.",
    },
    {
      question: "Hva erstatter nærhetskravet på $x$ i definisjonen av $\\lim_{x\\to\\infty}f(x)=L$?",
      options: ["Et størrelseskrav $x>N$", "Kravet $|x|<\\delta$", "Kravet $|f(x)|<N$", "Ingenting — $\\varepsilon$ fjernes"],
      explanation: "Når $x\\to\\infty$ gir $|x-a|<\\delta$ ikke mening; man krever i stedet $x>N$. $\\varepsilon$-kravet på funksjonssiden består.",
    },
    {
      question: "Hva betyr $\\lim_{x\\to a}f(x)=\\infty$ presist?",
      options: ["For enhver terskel $M$ finnes $\\delta>0$ med $0<|x-a|<\\delta\\Rightarrow f(x)>M$", "For enhver $\\varepsilon>0$ finnes en $\\delta>0$ slik at $|f(x)-\\infty|<\\varepsilon$ nær $a$", "At funksjonsverdien i selve punktet er uendelig stor, altså at $f(a)=\\infty$ der", "At grenseverdien rett og slett er lik det bestemte tallet uendelig i punktet"],
      explanation: "$\\varepsilon$ byttes med en terskel $M$: $f$ kan gjøres større enn en hvilken som helst $M$ nær $a$. Grafen har vertikal asymptote $x=a$; $\\infty$ er ikke et tall.",
    },
    {
      question: "Utsagnet $\\exists\\delta>0\\,\\forall\\varepsilon>0:\\,0<|x-a|<\\delta\\Rightarrow|f(x)-L|<\\varepsilon$ er...",
      options: ["For sterkt: det tvinger $f$ til å være konstant lik $L$ i en omegn om $a$", "Nettopp den korrekte grensedefinisjonen, med kvantorene i helt riktig rekkefølge her", "Den riktige negasjonen av grensedefinisjonen, med alle ulikhetstegn snudde motsatt vei", "Definisjonen av en ensidig grense, altså enten høyre- eller venstregrensen i punktet"],
      explanation: "Med $\\exists\\delta$ først kreves én $\\delta$ som virker for alle $\\varepsilon$ — det tvinger $|f(x)-L|<\\varepsilon$ for vilkårlig små $\\varepsilon$, altså $f\\equiv L$. Feil rekkefølge.",
    },
    {
      question: "Ved sumregelen $\\lim(f+g)=L+M$ deles $\\varepsilon$ i beviset. Hvorfor bruker man margin $\\varepsilon/2$ på hver?",
      options: ["Så trekantulikheten gir $|f-L|+|g-M|<\\varepsilon/2+\\varepsilon/2=\\varepsilon$", "Fordi to funksjoner som legges sammen alltid vil doble den totale feilmarginen man har", "For at nærhetsradien $\\delta$ helt automatisk skal bli nøyaktig dobbelt så stor til slutt", "Fordi feilmarginen $\\varepsilon$ av rent tekniske grunner alltid må velges som et partall"],
      explanation: "Med $|f-L|<\\varepsilon/2$ og $|g-M|<\\varepsilon/2$ gir trekantulikheten samlet feil under $\\varepsilon$. $\\delta=\\min(\\delta_1,\\delta_2)$ sikrer begge.",
    },
    {
      question: "Grenseverdien til en funksjon i et punkt er...",
      options: ["Entydig: en funksjon kan ikke nærme seg to ulike tall på én gang", "Kan være to ulike tall, avhengig av hvilken retning $x$ kommer fra", "Alltid nøyaktig lik funksjonsverdien $f(a)$ i selve grensepunktet", "Uendelig stor i alle punkter der funksjonsverdien $f(a)$ ikke finnes"],
      explanation: "Grensen er entydig: antar $f$ både $L$ og $L'$, kan man velge $\\varepsilon=|L-L'|/2$ og få $f(x)$ i to atskilte bånd — umulig. Så $L=L'$.",
    },
    {
      question: "Hvilken $\\delta$ trengs for $\\lim_{x\\to3}(2x+1)=7$ gitt $\\varepsilon>0$?",
      options: ["$\\delta=\\varepsilon/2$", "$\\delta=\\varepsilon/7$", "$\\delta=2\\varepsilon$", "$\\delta=\\varepsilon/3$"],
      explanation: "$|2x+1-7|=2|x-3|$, så $2|x-3|<\\varepsilon$ gir $|x-3|<\\varepsilon/2$. Koeffisienten 2 gir nevneren.",
    },
    {
      question: "For $f$ kontinuerlig i $a$ tillater ε-δ-formen $|x-a|<\\delta$ (uten $0<$). Hvorfor er det greit?",
      options: ["Fordi $x=a$ gir $|f(a)-f(a)|=0<\\varepsilon$ uansett", "Fordi kontinuitet i et punkt ikke bruker feilmarginen $\\varepsilon$ i det hele tatt", "Fordi nærhetsradien $\\delta$ i så fall må velges uendelig stor for å virke der", "Det er faktisk ikke greit; man må alltid ha den strenge betingelsen $0<|x-a|$"],
      explanation: "For kontinuitet inkluderes $x=a$; der er $|f(a)-f(a)|=0$, som trivielt er $<\\varepsilon$. Grensedefinisjonen punkterer, men kontinuitetsformen trenger det ikke.",
    },
    {
      question: "Et polynom $p(x)$ har alltid $\\lim_{x\\to a}p(x)=p(a)$. Hvorfor?",
      options: ["Polynomer er kontinuerlige overalt på hele tallinjen", "Polynomer har alltid grenseverdien null i ethvert punkt", "Fordi funksjonsverdien $p(a)$ alltid er udefinert i punktet", "Dette gjelder utelukkende i det spesielle tilfellet $a=0$"],
      explanation: "Polynomer er kontinuerlige på hele $\\mathbb{R}$, så grensen er lik funksjonsverdien — innsetting er lov.",
    },
    {
      question: "Hvilken avgrensning bruker min-grepet for $|x-1|$ i beviset for $\\lim_{x\\to1}(3x^2+1)=4$?",
      options: ["Krev $|x-1|<1$, da er $|x+1|<3$, så $K=9$", "Krev $|x-1|<1$, da er $|x+1|<5$, så $K=15$", "Krev $|x-1|<\\varepsilon$, da er $K=3$", "Ingen avgrensning trengs; funksjonen er lineær"],
      explanation: "$|3x^2-3|=3|x-1||x+1|$; med $|x-1|<1$ er $0<x<2$, så $|x+1|<3$ og $K=3\\cdot3=9$. Dermed $\\delta=\\min(\\varepsilon/9,1)$.",
    },
    {
      question: "Hva er den vanligste midtveis-distraktoren på definisjonsspørsmål?",
      options: ["Kvantorrekkefølgen byttet, eller $\\varepsilon$ og $\\delta$ i ombyttede roller", "Et feil fortegn plassert foran funksjonsuttrykket $f(x)$ inne i absoluttverditegnet", "En manglende parentes rundt hele argumentet i selve funksjonsuttrykket $f(x)$", "En altfor stor tallverdi valgt for nærhetsradien $\\delta$ i det aktuelle beviset"],
      explanation: "Distraktorene bygger nesten alltid på snudd kvantorrekkefølge ($\\exists\\delta\\,\\forall\\varepsilon$) eller ombyttede roller for $\\varepsilon$ og $\\delta$. Kjenner du definisjonen ordrett, faller de bort.",
    },
  ],
  'mat1100-2-2': [
    {
      question: "Hvor mange ubestemte former finnes det?",
      options: ["Sju: $\\tfrac00,\\tfrac\\infty\\infty,0\\cdot\\infty,\\infty-\\infty,1^\\infty,0^0,\\infty^0$", "Fire, altså de fire brøk- og differanseformene bygget på null og uendelig sammen", "To, ettersom bare $[0/0]$ og $[\\infty/\\infty]$ i det hele tatt regnes som ubestemte", "Fem, altså de fire brøkformene pluss potensformen $1^\\infty$ regnet med som den femte"],
      explanation: "Det er nøyaktig sju ubestemte former. L'Hôpital takler direkte bare $[0/0]$ og $[\\infty/\\infty]$; de fem andre skrives om til en av disse.",
    },
    {
      question: "Hvilke to former kan L'Hôpital brukes direkte på?",
      options: ["$[0/0]$ og $[\\infty/\\infty]$", "$0\\cdot\\infty$ og $\\infty-\\infty$", "$1^\\infty$ og $0^0$", "Alle sju formene"],
      explanation: "L'Hôpital gjelder kun de to brøkformene $[0/0]$ og $[\\infty/\\infty]$. De øvrige må først skrives om til én av disse.",
    },
    {
      question: "$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=?$",
      options: ["$1$", "$0$", "$\\infty$", "Finnes ikke"],
      explanation: "Dette er standardgrensen: $\\sin x\\approx x$ for små $x$ (radianer), så brøken går mot 1.",
    },
    {
      question: "$\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}=?$",
      options: ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac14$", "$1$"],
      explanation: "Standardgrensen $(1-\\cos x)/x^2\\to 1/2$. To L'Hôpital-runder gir samme svar: $\\sin x/(2x)\\to\\cos x/2\\to 1/2$.",
    },
    {
      question: "$\\lim_{x\\to0^+}(1+3x)^{1/x}=?$",
      options: ["$e^3$", "$e^2$", "$e$", "$3$"],
      explanation: "Formen er $1^\\infty$. Logaritmetrikset: $\\ln y=\\ln(1+3x)/x\\to 3$, så svaret er $e^3$ — ikke $e$ (feil $k$) og ikke 3 (glemt eksponentiering).",
    },
    {
      question: "Hva må gjøres FØR hver L'Hôpital-anvendelse?",
      options: ["Markere eksplisitt at formen er $[0/0]$ eller $[\\infty/\\infty]$", "Forkorte hele brøken helt ned til den ikke lenger er en ubestemt form", "Sette inn grenseverdien direkte i det allerede ferdig deriverte uttrykket", "Bruke kvotientregelen på hele brøken $f/g$ før man begynner å derivere den"],
      explanation: "Sensorkrav: formen markeres før hver bruk, også ved gjentatt anvendelse. L'Hôpital på et ikke-ubestemt uttrykk gir trekk.",
    },
    {
      question: "Ved L'Hôpital på $f/g$, hva deriverer du?",
      options: ["Teller og nevner hver for seg, altså $f'/g'$", "Hele brøken samlet, med kvotientregelen", "Bare telleren $f$, mens nevneren står urørt", "Produktet $f\\cdot g$ ved hjelp av produktregelen"],
      explanation: "L'Hôpital er $\\lim f/g=\\lim f'/g'$ — teller og nevner derivert separat. Dette er IKKE kvotientregelen.",
    },
    {
      question: "Veksthierarkiet for $x\\to\\infty$ er (tregest til raskest):",
      options: ["$\\ln x\\ll x^p\\ll e^x$", "$e^x\\ll x^p\\ll\\ln x$", "$x^p\\ll\\ln x\\ll e^x$", "$\\ln x\\ll e^x\\ll x^p$"],
      explanation: "Logaritme vokser tregest, eksponential raskest. Derfor $\\ln x/x^p\\to0$, $x^p/e^x\\to0$, $e^x/x^p\\to\\infty$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}=?$",
      options: ["$0$", "$1$", "$\\infty$", "$e$"],
      explanation: "Fra hierarkiet $\\ln x\\ll x$: nevneren vokser mye raskere, så brøken går mot 0.",
    },
    {
      question: "For formen $0\\cdot\\infty$ i $\\lim f\\cdot g$, hva gjør du?",
      options: ["Flytter en faktor til nevner som resiprok, får $[0/0]$ eller $[\\infty/\\infty]$", "Deriverer produktet direkte med produktregelen og kaller resultatet for L'Hôpital", "Setter rett og slett bare inn grenseverdien og leser av det ferdige svaret med en gang", "Tar logaritmen av hele produktet allerede før man i det hele tatt begynner å regne"],
      explanation: "$f\\cdot g=f/(1/g)$ eller $g/(1/f)$ gir en brøk L'Hôpital takler. Å derivere produktet direkte er en klassisk feil.",
    },
    {
      question: "$\\lim_{x\\to0^+}x\\ln x=?$",
      options: ["$0$", "$-\\infty$", "$1$", "$-1$"],
      explanation: "Form $0\\cdot\\infty$. Skriv $\\ln x/(1/x)$, form $[\\infty/\\infty]$; L'Hôpital gir $\\frac{1/x}{-1/x^2}=-x\\to 0$.",
    },
    {
      question: "Konjugattrikset skriver $\\sqrt A-\\sqrt B$ om til:",
      options: ["$\\dfrac{A-B}{\\sqrt A+\\sqrt B}$", "$\\dfrac{A+B}{\\sqrt A-\\sqrt B}$", "$\\sqrt{A-B}$", "$\\dfrac{\\sqrt A-\\sqrt B}{A-B}$"],
      explanation: "Gang med den konjugerte $\\sqrt A+\\sqrt B$: telleren blir $(\\sqrt A)^2-(\\sqrt B)^2=A-B$, rottegnet forsvinner der.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+4x}-x\\right)=?$",
      options: ["$2$", "$0$", "$4$", "$\\infty$"],
      explanation: "Form $\\infty-\\infty$. Konjugat gir $\\frac{4x}{\\sqrt{x^2+4x}+x}=\\frac{4}{\\sqrt{1+4/x}+1}\\to 4/2=2$.",
    },
    {
      question: "Etter logaritmetrikset finner du $\\lim\\ln y=A$. Hva er den søkte grensen?",
      options: ["$e^{A}$", "$A$", "$\\ln A$", "$1/A$"],
      explanation: "Svaret er $e$ opphøyd i logaritmegrensen: $\\lim f^g=e^{A}$. Å stoppe ved $A$ er den vanligste potensform-feilen.",
    },
    {
      question: "$\\lim_{x\\to0^+}x^x=?$ (formen $0^0$)",
      options: ["$1$", "$0$", "$e$", "Finnes ikke"],
      explanation: "$\\ln y=x\\ln x\\to 0$, så $x^x\\to e^0=1$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}x^{1/x}=?$ (formen $\\infty^0$)",
      options: ["$1$", "$\\infty$", "$e$", "$0$"],
      explanation: "$\\ln y=\\frac{\\ln x}{x}\\to 0$ (veksthierarkiet), så $x^{1/x}\\to e^0=1$.",
    },
    {
      question: "Hvorfor feiler L'Hôpital på $\\lim_{x\\to\\infty}\\dfrac{x+\\sin x}{x}$?",
      options: ["$\\lim f'/g'=\\lim(1+\\cos x)$ finnes ikke — forutsetningen svikter", "Formen er ikke ubestemt, så L'Hôpital gjelder ikke i dette tilfellet", "Man kan ikke derivere $\\sin x$ på en entydig måte når $x\\to\\infty$", "Svaret som L'Hôpital gir blir uendelig i stedet for et endelig tall"],
      explanation: "Etter derivasjon blir det $1+\\cos x$, som svinger mellom 0 og 2 uten grense. L'Hôpital krever at $\\lim f'/g'$ finnes. Del i stedet: $1+\\sin x/x\\to 1$.",
    },
    {
      question: "Skviseteoremet krever at...",
      options: ["$h\\le f\\le H$ nær $a$, der $h$ og $H$ har samme grense $L$", "At funksjonen $f$ er deriverbar i en hel omegn rundt punktet $a$", "At funksjonen $f$ kan skrives som en brøk med kjent teller og nevner", "At skrankene $h$ og $H$ har to forskjellige grenser i punktet $a$"],
      explanation: "Klemmer $f$ mellom to funksjoner med felles grense $L$, så $f\\to L$. Brukes på oscillerende ledd via $|\\sin|\\le1$.",
    },
    {
      question: "$\\lim_{x\\to0}x^2\\sin(1/x)=?$",
      options: ["$0$", "$1$", "Finnes ikke", "$\\infty$"],
      explanation: "$|\\sin(1/x)|\\le 1$ gir $-x^2\\le x^2\\sin(1/x)\\le x^2$; begge skranker $\\to 0$, så skvis gir 0. L'Hôpital hjelper ikke her.",
    },
    {
      question: "$\\lim_{x\\to0}\\dfrac{\\sin 5x}{3x}=?$",
      options: ["$\\tfrac53$", "$1$", "$\\tfrac35$", "$5$"],
      explanation: "Skriv $\\frac{\\sin 5x}{5x}\\cdot\\frac{5}{3}\\to 1\\cdot\\frac53=\\frac53$.",
    },
    {
      question: "$\\lim_{x\\to0}\\dfrac{e^x-1-x}{x^2}=?$",
      options: ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac14$", "$1$"],
      explanation: "Form $[0/0]$; L'Hôpital gir $\\frac{e^x-1}{2x}$, igjen $[0/0]$; ny L'Hôpital gir $\\frac{e^x}{2}\\to 1/2$. Marker formen begge ganger.",
    },
    {
      question: "$\\lim_{x\\to\\infty}x(e^{1/x}-1)=?$",
      options: ["$1$", "$0$", "$\\infty$", "$e$"],
      explanation: "Form $\\infty\\cdot 0$. Skriv $\\frac{e^{1/x}-1}{1/x}$, form $[0/0]$; L'Hôpital gir $\\frac{e^{1/x}(-1/x^2)}{-1/x^2}=e^{1/x}\\to 1$.",
    },
    {
      question: "Hvilket triks løser formen $\\infty-\\infty$ for en brøkdifferanse som $\\frac1x-\\frac1{\\sin x}$?",
      options: ["Sette de to brøkene på fellesnevner, slik at du får formen $[0/0]$", "Ta logaritmen av hele differansen og deretter regne på selve eksponentleddet", "Bruke veksthierarkiet helt direkte på hvert av de to leddene i differansen", "Konjugattrikset, altså å gange og dele med en passende kvadratrotskonjugert"],
      explanation: "Fellesnevner samler til én brøk: $\\frac{\\sin x-x}{x\\sin x}$, som er $[0/0]$ og angripes med L'Hôpital.",
    },
    {
      question: "Hva er den vanligste feilen med potensformene $1^\\infty,0^0,\\infty^0$?",
      options: ["Å glemme å eksponentiere tilbake — svare $A$ i stedet for $e^A$", "Å sette de to leddene på en felles nevner før man regner videre", "Å markere den ubestemte formen $[0/0]$ før hver L'Hôpital-runde", "Å bruke en standardgrense i stedet for å skrive om potensen først"],
      explanation: "Etter logaritmetrikset gir $\\lim\\ln y=A$ svaret $e^A$. Å stoppe ved $A$ er den typiske tabben.",
    },
    {
      question: "$\\lim_{x\\to0}\\dfrac{\\tan x}{x}=?$",
      options: ["$1$", "$0$", "$\\tfrac12$", "$\\infty$"],
      explanation: "$\\tan x=\\sin x/\\cos x$, så $\\frac{\\tan x}{x}=\\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x}\\to 1\\cdot 1=1$.",
    },
  ],
  'mat1100-2-3': [
    {
      question: "Hva er den presise formen av kompletthetsaksiomet?",
      options: ["En følge som er både monoton og begrenset, konvergerer", "En følge som bare er begrenset, vil helt sikkert konvergere av seg selv", "En følge som bare er monoton, vil uansett konvergere mot en grenseverdi", "En følge som er strengt voksende, vil alltid ende opp med å divergere helt"],
      explanation: "Begge egenskapene kreves. Bare begrenset ($(-1)^n$) eller bare monoton ($a_n=n$) er ikke nok.",
    },
    {
      question: "For en rekursiv følge $a_{n+1}=g(a_n)$: hva må du gjøre FØR du bruker $L=g(L)$?",
      options: ["Bevise at følgen konvergerer, altså monoton og begrenset", "Regne ut leddet $a_{100}$ numerisk for å se hvor det havner", "Anta uten videre begrunnelse at grenseverdien faktisk finnes", "Derivere funksjonen $g$ og undersøke fortegnet til $g'$"],
      explanation: "Fikspunktet er bare en kandidat. Å løse $L=g(L)$ uten konvergensbevis gir 0 uten begrunnelse — konvergens må vises først.",
    },
    {
      question: "Følgen $a_1=1$, $a_{n+1}=\\sqrt{2a_n+3}$ er voksende og begrenset. Hva er grensen?",
      options: ["$3$", "$-1$", "$\\sqrt5$", "$1$"],
      explanation: "Fikspunkt: $L=\\sqrt{2L+3}\\Rightarrow L^2-2L-3=(L-3)(L+1)=0$. Positiv følge ⇒ $L=3$; $-1$ forkastes.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}=?$",
      options: ["$2$", "$\\tfrac13$", "$\\infty$", "$1$"],
      explanation: "Del på $n$: $\\frac{2+1/n}{1+3/n}\\to 2/1=2$.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+n}-n\\right)=?$",
      options: ["$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}=2$", "$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}=\\tfrac13$", "$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}=\\infty$", "$\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}=1$"],
      explanation: "Konjugat: $\\frac{n}{\\sqrt{n^2+n}+n}=\\frac{1}{\\sqrt{1+1/n}+1}\\to 1/2$.",
    },
    {
      question: "Hvorfor er $a_n=(-1)^n$ divergent selv om den er begrenset?",
      options: ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac14$", "$0$"],
      explanation: "Begrenset ($|a_n|=1$), men ikke monoton; leddene veksler evig, så ingen $L$ finnes. Viser at begrenset alene ikke gir konvergens.",
    },
    {
      question: "Følgegrensen $\\lim_{n\\to\\infty}a_n=L$ bruker hvilken størrelse i stedet for $\\delta$?",
      options: ["Den svinger mellom 569Xl1$ og $ og faller aldri til ro", "Den er ubegrenset og vokser derfor uten noen øvre skranke i det hele tatt", "Den er strengt voksende hele veien og har aldri noe tak den nærmer seg", "Den konvergerer faktisk mot null når man ser på nok mange ledd av den"],
      explanation: "Siden $n$ er heltall mot $\\infty$, kreves «fra og med ledd $N$» i stedet for «nær $a$». $\\varepsilon$-kravet består.",
    },
    {
      question: "Et fikspunkt for $g$ er et tall $L$ med...",
      options: ["$g(L)=L$", "$g(L)=0$", "$g'(L)=0$", "$g(L)=\\infty$"],
      explanation: "Fikspunkt: $g$ flytter ikke $L$. En konvergent rekursiv følge (med kontinuerlig $g$) har grense som er et fikspunkt.",
    },
    {
      question: "Ved $L=\\sqrt{2L+3}$ gir kvadrering også $L=-1$. Hvorfor forkastes den?",
      options: ["Et tall $L$ med $g(L)=L$", "Et tall $L$ med $g(L)=0$", "Et tall $L$ med $g'(L)=0$", "Et tall $L$ med $g(L)=\\infty$"],
      explanation: "Kvadrering kan innføre falske røtter. Alle ledd er $\\ge 0$, så en negativ kandidat er uforenlig med følgen og forkastes.",
    },
    {
      question: "For en åpen oppgave «angi en følge som er begrenset, men ikke konvergent», hva kreves for fullt svar?",
      options: ["Følgens ledd er positive (kvadratrøtter), så grensen kan ikke være negativ", "Tallet minus én er ikke et heltall og kan derfor ikke være en grenseverdi her", "Selve kvadreringen er en ulovlig operasjon når man løser en fikspunktlikning", "Tallet minus én er faktisk større enn tre, så det passer ikke inn i modellen"],
      explanation: "Sensorregel: eksempel uten verifikasjon er ikke fullt svar. Både begrensetheten og divergensen må vises eksplisitt.",
    },
    {
      question: "En følge er begrenset dersom...",
      options: ["Et eksempel PLUSS verifikasjon av BEGGE de to egenskapene", "Bare et konkret eksempel på en slik følge er tilstrekkelig for fullt svar", "Kun at følgen faktisk er begrenset, uansett hva som skjer med konvergensen", "En generell formel skrevet uten et eneste konkret talleksempel er det som kreves"],
      explanation: "Begrenset betyr at alle ledd ligger i et fast intervall $[-M,M]$. Konvergens er ikke nødvendig.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\dfrac{3n^2-n}{2n^2+5}=?$",
      options: ["Det finnes $M$ med $|a_n|\\le M$ for alle $n$", "Leddene $a_n$ nærmer seg tallet null når $n$ vokser", "Følgen $a_n$ er strengt voksende for hver indeks $n$", "Alle ledd $a_n$ er strengt positive tall for hver $n$"],
      explanation: "Del på $n^2$: $\\frac{3-1/n}{2+5/n^2}\\to 3/2$.",
    },
    {
      question: "En konvergent følge er alltid...",
      options: ["Begrenset", "Voksende", "Rekursiv", "Ubegrenset"],
      explanation: "Konvergens medfører begrensethet (leddene samler seg nær $L$). Det motsatte gjelder ikke: begrenset ⇏ konvergent.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt n\\right)=?$",
      options: ["$0$", "$\\tfrac12$", "$1$", "$\\infty$"],
      explanation: "Konjugat: $\\frac{1}{\\sqrt{n+1}+\\sqrt n}$; nevneren $\\to\\infty$, så grensen er 0.",
    },
    {
      question: "I fikspunktanalysen av $a_1=0$, $a_{n+1}=\\sqrt{a_n+2}$, hva er grensen?",
      options: ["$2$", "$-1$", "$0$", "$\\sqrt2$"],
      explanation: "$L=\\sqrt{L+2}\\Rightarrow L^2-L-2=(L-2)(L+1)=0$; positiv følge ⇒ $L=2$.",
    },
    {
      question: "Hvorfor konvergerer IKKE $a_n=n$ selv om den er monoton?",
      options: ["$2$", "$-1$", "$0$", "$\\sqrt2$"],
      explanation: "Monoton, men ubegrenset ($a_n\\to\\infty$). Kompletthetsaksiomet krever begge deler; her mangler begrensetheten.",
    },
    {
      question: "Skvis for følger: hvis $b_n\\le a_n\\le c_n$ og $b_n,c_n\\to L$, da...",
      options: ["$a_n\\to L$", "$a_n\\to 0$", "$a_n$ divergerer", "$a_n\\to b_n$"],
      explanation: "$a_n$ klemmes mellom to følger med felles grense $L$, så $a_n\\to L$. Brukes på f.eks. $\\frac{\\sin n}{n}\\to 0$.",
    },
    {
      question: "Hva er forskjellen på en eksplisitt og en rekursiv følge?",
      options: ["$a_n\\to L$", "$a_n\\to 0$", "$a_n$ divergerer", "$a_n\\to b_n$"],
      explanation: "Eksplisitt: formel i $n$. Rekursiv: startledd + regel $a_{n+1}=g(a_n)$, uten direkte formel — krever fikspunktanalyse.",
    },
    {
      question: "En voksende, oppad begrenset følge konvergerer mot...",
      options: ["Sitt supremum, altså den minste øvre skranken", "Sitt infimum, altså den største nedre skranken", "Sitt aller første ledd $a_1$ i selve følgen", "Tallet null uansett hvordan følgen er bygget"],
      explanation: "Supremum er den minste øvre skranken; en voksende begrenset følge kryper opp mot nettopp dette tallet.",
    },
    {
      question: "Hva er hovedfeilen studenter gjør på rekursive følgeoppgaver?",
      options: ["Løser $L=g(L)$ uten å bevise konvergens først", "Bruker altfor mange desimaler i selve utregningen", "Glemmer å skrive opp startleddet $a_1$ i følgen", "Deriverer funksjonen $g$ helt unødvendig underveis"],
      explanation: "Å hoppe rett til fikspunktet uten monotoni- og begrensethetsbevis er den dokumenterte hovedfeilen — gir 0 uten begrunnelse.",
    },
  ],
  'mat1100-2-4': [
    {
      question: "Hva kreves for at $f$ er kontinuerlig i punktet $a$?",
      options: ["At grensen finnes og er lik $f(a)$", "At venstre- og høyregrensen finnes", "At $f(a)$ er definert i punktet", "At $f$ er deriverbar i punktet $a$"],
      explanation: "Kontinuitet krever alle tre: $f(a)$ definert, grensen finnes, og de er like. Svaret «At venstre- og høyregrensen finnes» og 3 er hver for seg nødvendige, men ikke tilstrekkelige; deriverbarhet er et sterkere krav enn nødvendig.",
    },
    {
      question: "$\\lim_{x\\to 3} f(x) = 4$, men $f(3) = 1$. Er $f$ kontinuerlig i $x = 3$?",
      options: ["Nei, grensen er ulik funksjonsverdien", "Ja, grensen fra begge sider finnes", "Ja, funksjonsverdien er definert her", "Nei, grensen finnes ikke i punktet"],
      explanation: "Grensen ($4$) finnes, men er ulik $f(3) = 1$, så kravet $\\lim = f(a)$ svikter. Det holder ikke at grensen finnes eller at $f(3)$ er definert.",
    },
    {
      question: "Skjæringssetningen (nullpunktsform) krever at $f$ er:",
      options: ["kontinuerlig på $[a,b]$ med motsatt fortegn", "deriverbar på $[a,b]$ med lik verdi", "kontinuerlig på $(a,b)$ med samme fortegn overalt", "begrenset på $[a,b]$ med motsatt fortegn"],
      explanation: "Forutsetningene er kontinuitet på det lukkede $[a,b]$ og $f(a)\\cdot f(b) < 0$. Deriverbarhet trengs ikke; kontinuitet (ikke bare begrensethet) er nødvendig.",
    },
    {
      question: "Ekstremverdisetningen garanterer maks og min når $f$ er kontinuerlig på:",
      options: ["et lukket, begrenset intervall $[a,b]$", "et åpent, begrenset intervall $(a,b)$", "et lukket, ubegrenset intervall $[a,\\infty)$", "et vilkårlig intervall der $f$ er glatt"],
      explanation: "Begge forutsetningene trengs: lukket OG begrenset. På $(a,b)$ eller $[a,\\infty)$ kan maks/min mangle.",
    },
    {
      question: "På hvilket intervall gjelder ekstremverdisetningen IKKE for $f(x) = x$?",
      options: ["$(0, 1)$, fordi intervallet er åpent", "$[0, 1]$, fordi intervallet er kort", "$[-2, 2]$, fordi det er symmetrisk", "$[0, 5]$, fordi $f$ er lineær her"],
      explanation: "Bare $(0,1)$ bryter en forutsetning (åpent). De andre er lukkede og begrensede, så setningen gjelder der.",
    },
    {
      question: "$g(x) = \\dfrac{x^2 - 4}{x - 2}$ for $x \\ne 2$. Hvilken verdi $g(2)$ gjør $g$ kontinuerlig?",
      options: ["$g(2) = 4$", "$g(2) = 2$", "$g(2) = 0$", "$g(2) = 8$"],
      explanation: "For $x \\ne 2$ er $g(x) = x + 2$, så $\\lim_{x\\to 2} g(x) = 4$. Å sette $g(2) = 4$ tetter hullet (hevbar diskontinuitet).",
    },
    {
      question: "For hvilken $a$ er $f = \\{x^2 + a\\ (x<2);\\ 5 - x\\ (x\\ge 2)\\}$ kontinuerlig i $x = 2$?",
      options: ["$a = -1$", "$a = 1$", "$a = 3$", "$a = -3$"],
      explanation: "Venstregrense $4 + a$, høyregrense/verdi $5 - 2 = 3$. Kravet $4 + a = 3$ gir $a = -1$.",
    },
    {
      question: "Skjæringssetningen gir minst én løsning. Hva gir «nøyaktig én»?",
      options: ["At $f$ er strengt monoton på intervallet", "At $f$ er kontinuerlig på intervallet", "At $f$ har motsatt fortegn i endene", "At $f$ er begrenset på hele det lukkede intervallet"],
      explanation: "Streng monotoni ($f' > 0$ eller $f' < 0$) gir høyst én løsning; sammen med skjæringssetningen (minst én) blir det nøyaktig én. De andre er allerede brukt til eksistensen.",
    },
    {
      question: "$h(x) = x^3 + x - 5$ har $h(1) = -3$ og $h(2) = 5$. Hva følger?",
      options: ["Et nullpunkt finnes i $(1, 2)$", "Et nullpunkt finnes i $(0, 1)$", "Ingen nullpunkt i intervallet", "To nullpunkter finnes i $(1, 2)$"],
      explanation: "Motsatt fortegn og kontinuitet gir minst ett nullpunkt i $(1,2)$ ved skjæringssetningen. Monotoni ($h' = 3x^2+1 > 0$) gir at det er nøyaktig ett.",
    },
    {
      question: "For å vise at $e^x = 3 - x^2$ har en løsning i $[0,1]$, hvilken hjelpefunksjon?",
      options: ["$h(x) = e^x - 3 + x^2$", "$h(x) = e^x + 3 - x^2$", "$h(x) = e^x \\cdot (3 - x^2)$", "$h(x) = 3 - x^2 - e^{-x}$"],
      explanation: "Sett $h = f - g = e^x - (3 - x^2) = e^x - 3 + x^2$. Et nullpunkt for $h$ er en løsning av $e^x = 3 - x^2$.",
    },
    {
      question: "At $f$ er høyrekontinuerlig i $a$ betyr at:",
      options: ["$\\lim_{x\\to a^+} f(x) = f(a)$", "$\\lim_{x\\to a^-} f(x) = f(a)$", "$\\lim_{x\\to a} f(x) = \\infty$", "$f(a)$ er større enn grensen"],
      explanation: "Høyrekontinuitet er at høyregrensen treffer funksjonsverdien. Svaret «$\\lim_{x\\to a^-} f(x) = f(a)$» er venstrekontinuitet.",
    },
    {
      question: "Venstre- og høyregrensen finnes, men er ulike. Diskontinuiteten er:",
      options: ["en sprangdiskontinuitet", "en hevbar diskontinuitet", "en uendelig diskontinuitet", "ingen diskontinuitet her"],
      explanation: "Ulike ensidige grenser gir et sprang. Hevbar krever lik grense fra begge sider; uendelig krever at en grense går mot $\\pm\\infty$.",
    },
    {
      question: "$f(x) = x^3 - 3x$ på $[0, 2]$. Hvor antar $f$ sin største verdi?",
      options: ["I endepunktet $x = 2$", "I det stasjonære $x = 1$", "I endepunktet $x = 0$", "I det stasjonære $x = -1$"],
      explanation: "$f(0)=0$, $f(1)=-2$, $f(2)=2$. Største verdi er $f(2)=2$ (endepunkt). $x=-1$ ligger ikke i intervallet.",
    },
    {
      question: "Hvorfor må kontinuitet nevnes før skjæringssetningen brukes?",
      options: ["Uten den kan grafen hoppe over verdien", "Fordi setningen krever deriverbarhet", "Fordi grensen ellers blir uendelig", "Det er bare en ren formalitet uten reell effekt"],
      explanation: "Kontinuitet er selve forutsetningen: en diskontinuerlig funksjon kan hoppe rett over nullverdien uten å anta den. Derfor gir sensor trekk hvis den ikke uttales.",
    },
    {
      question: "$f(x) = 1/x$ på $(0, 1]$. Har $f$ en største verdi?",
      options: ["Nei, $f$ er ubegrenset oppover", "Ja, den nås i $x = 1$", "Ja, i midtpunktet $x = 0{,}5$", "Nei, men $f$ har et maksimum"],
      explanation: "Nær $x = 0^+$ går $f \\to +\\infty$, så $f$ er ubegrenset oppover og har ingen største verdi. Intervallet er ikke lukket, og ekstremverdisetningen gjelder ikke.",
    },
  ],
  'mat1100-2-5': [
    {
      question: "$\\lim_{x\\to 0}\\dfrac{\\sin 5x}{\\sin 2x} = ?$",
      options: ["$\\tfrac52$", "$\\tfrac25$", "$1$", "$5$"],
      explanation: "$[0/0]$: $\\frac{\\sin 5x}{5x}\\cdot\\frac{2x}{\\sin 2x}\\cdot\\frac{5}{2}\\to\\frac52$. Å invertere gir $2/5$; å forkorte til $1$ overser argumentene.",
    },
    {
      question: "$\\lim_{x\\to 0}\\dfrac{e^{2x}-1}{x} = ?$",
      options: ["$2$", "$1$", "$\\tfrac12$", "$0$"],
      explanation: "$\\frac{e^{2x}-1}{x}=2\\cdot\\frac{e^{2x}-1}{2x}\\to 2$. Kjerneregel-faktoren $2$ må med; uten den får man $1$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\dfrac{2x^2+3x}{5x^2-1} = ?$",
      options: ["$\\tfrac25$", "$2$", "$0$", "$\\infty$"],
      explanation: "$[\\infty/\\infty]$: del på $x^2$ $\\to \\frac{2}{5}$. Å glemme nevnerens $5$ gir $2$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\dfrac{(\\ln x)^2}{x} = ?$",
      options: ["$0$", "$\\infty$", "$1$", "$2$"],
      explanation: "Veksthierarkiet $\\ln x \\ll x$: potensen av $x$ slår enhver potens av $\\ln x$, så grensen er $0$.",
    },
    {
      question: "$\\lim_{x\\to 0^+} x^2\\ln x = ?$",
      options: ["$0$", "$-\\infty$", "$-1$", "$1$"],
      explanation: "$[0\\cdot(-\\infty)]$: skriv $\\frac{\\ln x}{1/x^2}$; potensen $x^2$ dør fortere enn $\\ln x$ vokser, så grensen er $0$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+4x}-x\\right) = ?$",
      options: ["$2$", "$0$", "$4$", "$\\infty$"],
      explanation: "$[\\infty-\\infty]$: konjugat gir $\\frac{4x}{\\sqrt{x^2+4x}+x}\\to 2$. Å tro $\\infty-\\infty=0$ gir $0$; å glemme $/2$ gir $4$.",
    },
    {
      question: "$\\lim_{x\\to 0}(1+2x)^{1/x} = ?$",
      options: ["$e^{2}$", "$e$", "$1$", "$\\infty$"],
      explanation: "$[1^\\infty]$: $\\ln = \\frac{\\ln(1+2x)}{x}\\to 2$, så svaret er $e^2$. Å glemme faktoren $2$ gir $e$.",
    },
    {
      question: "$\\lim_{x\\to 0^+} x^{x} = ?$",
      options: ["$1$", "$0$", "$\\infty$", "$e$"],
      explanation: "$[0^0]$: $\\ln = x\\ln x\\to 0$, så $x^x\\to e^0=1$. Basen $\\to 0$ frister til $0$, men eksponenten dør fortere.",
    },
    {
      question: "$\\lim_{x\\to\\infty} x^{1/x} = ?$",
      options: ["$1$", "$\\infty$", "$0$", "$e$"],
      explanation: "$[\\infty^0]$: $\\ln = \\frac{\\ln x}{x}\\to 0$, så $x^{1/x}\\to e^0=1$. Basen vokser, men eksponenten $\\to 0$ vinner.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\dfrac{3n^2+n}{n^2+5} = ?$",
      options: ["$3$", "$1$", "$0$", "$\\tfrac35$"],
      explanation: "Del på $n^2$ $\\to 3$ (forhold mellom ledende koeffisienter). Nevnerkonstanten $5$ hører ikke med i grensen.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+8n}-n\\right) = ?$",
      options: ["$4$", "$8$", "$0$", "$2$"],
      explanation: "Konjugat: $\\frac{8n}{\\sqrt{n^2+8n}+n}\\to 4$. Å glemme $/2$ i nevneren gir $8$.",
    },
    {
      question: "Følgen $a_1 = 1$, $a_{n+1} = \\sqrt{a_n + 2}$ er voksende og begrenset. Grensen er:",
      options: ["$2$", "$-1$", "$1$", "$\\sqrt{2}$"],
      explanation: "Fikspunkt: $L = \\sqrt{L+2}\\Rightarrow L^2 - L - 2 = 0\\Rightarrow L = 2$ (positiv rot). $-1$ er den forkastede roten; $1$ er startverdien.",
    },
    {
      question: "$\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^2} = ?$",
      options: ["$\\tfrac12$", "$1$", "$0$", "$2$"],
      explanation: "Standardgrensen $\\frac{1-\\cos x}{x^2}\\to\\frac12$. Å forveksle med $\\frac{\\sin x}{x}\\to 1$ gir $1$; å glemme kvadratet gir feil.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\left(1-\\dfrac{2}{x}\\right)^{x} = ?$",
      options: ["$e^{-2}$", "$e^{2}$", "$e^{-1}$", "$1$"],
      explanation: "$[1^\\infty]$: $\\ln = x\\ln(1-\\frac2x)\\to -2$, så grensen er $e^{-2}$. Å glemme minustegnet gir $e^2$.",
    },
    {
      question: "$\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+6n}-n\\right) = ?$",
      options: ["$3$", "$6$", "$0$", "$\\infty$"],
      explanation: "Konjugat: $\\frac{6n}{\\sqrt{n^2+6n}+n}\\to 3$. Å glemme $/2$ gir $6$; å tro $\\infty-\\infty=0$ gir $0$.",
    },
    {
      question: "Hvilket utsagn er sant for alle reelle følger?",
      options: ["Voksende + begrenset ovenfra $\\Rightarrow$ konvergent", "Begrenset alene $\\Rightarrow$ alltid konvergent", "Voksende alene $\\Rightarrow$ alltid konvergent", "Konvergent $\\Rightarrow$ følgen er voksende"],
      explanation: "Kompletthetsaksiomet: monoton + begrenset gir konvergens. $(-1)^n$ er begrenset uten grense; $a_n=n$ er voksende uten grense; konvergente følger trenger ikke være monotone.",
    },
    {
      question: "Hva er negasjonen av $\\lim_{x\\to a} f(x) = L$?",
      options: ["$\\exists\\varepsilon\\,\\forall\\delta\\,\\exists x:\\ |f(x)-L|\\ge\\varepsilon$ nær $a$", "$\\forall\\varepsilon\\,\\exists\\delta\\,\\forall x:\\ |f(x)-L|\\ge\\varepsilon$ nær $a$", "$\\exists\\varepsilon\\,\\exists\\delta:\\ |f(x)-L|\\ge\\varepsilon$ for alle $x$", "$\\forall\\delta\\,\\exists\\varepsilon:\\ |f(x)-L|<\\varepsilon$ nær $a$"],
      explanation: "Negasjon snur hver kvantor ($\\forall\\leftrightarrow\\exists$ i rekkefølge) og bytter $<$ mot $\\ge$: $\\exists\\varepsilon\\,\\forall\\delta\\,\\exists x$ med $|f-L|\\ge\\varepsilon$.",
    },
    {
      question: "$\\lim_{x\\to 0}\\dfrac{e^{3x}-1}{2x} = ?$",
      options: ["$\\tfrac32$", "$3$", "$1$", "$\\tfrac23$"],
      explanation: "$\\frac{e^{3x}-1}{2x}=\\frac{3}{2}\\cdot\\frac{e^{3x}-1}{3x}\\to\\frac32$. Å glemme nevnerens $2$ gir $3$.",
    },
    {
      question: "$\\lim_{x\\to\\infty}\\dfrac{x+\\sin x}{x} = ?$ (pass på L'Hôpital-fellen)",
      options: ["$1$", "eksisterer ikke", "$0$", "$\\infty$"],
      explanation: "Del: $1+\\frac{\\sin x}{x}\\to 1$ (skvis, $|\\sin x|\\le 1$). L'Hôpital gir $\\frac{1+\\cos x}{1}$ som oscillerer — men det betyr ikke at grensen ikke finnes.",
    },
    {
      question: "$\\lim_{x\\to 0}\\dfrac{\\sqrt{1+x}-1}{x} = ?$",
      options: ["$\\tfrac12$", "$1$", "$2$", "$0$"],
      explanation: "$[0/0]$: konjugat gir $\\frac{x}{x(\\sqrt{1+x}+1)}=\\frac{1}{\\sqrt{1+x}+1}\\to\\frac12$.",
    },
  ],
  'mat1100-3-1': [
    {
      question: "Etter forkorting med $h$ blir differansekvotienten $\\frac{(a+h)^2-a^2}{h}$ til:",
      options: ["$2a+h$", "$2ah+h$", "$a+2h$", "$2a-h$"],
      explanation: "$(a+h)^2-a^2=2ah+h^2=h(2a+h)$; forkort $h$ og få $2a+h$. Grensen $h\\to0$ gir $f'(a)=2a$.",
    },
    {
      question: "Med grensedefinisjonen: hva er $f'(a)$ når $f(x)=x^2+3x$?",
      options: ["$2a+3$", "$2a+3h$", "$a^2+3$", "$2a-3$"],
      explanation: "Differansekvotienten forkortes til $2a+h+3$, og grensen $h\\to0$ gir $2a+3$.",
    },
    {
      question: "Bruk definisjonen: $f'(4)$ for $f(x)=\\sqrt{x}$ er:",
      options: ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$", "$2$"],
      explanation: "Sekantvarianten med konjugattriks gir $\\frac{1}{\\sqrt{x}+2}\\to\\frac{1}{4}$ når $x\\to4$.",
    },
    {
      question: "Bruk definisjonen: $f'(a)$ for $f(x)=1/x$ (med $a\\ne0$) er:",
      options: ["$-1/a^2$", "$1/a^2$", "$-1/a$", "$-2/a^2$"],
      explanation: "Fellesnevner gir teller $-h$; etter forkorting $\\frac{-1}{a(a+h)}\\to-1/a^2$.",
    },
    {
      question: "Er $f(x)=|x|$ deriverbar i $0$?",
      options: ["Nei, de ensidige deriverte er $-1$ og $1$", "Ja, den er deriverbar med $f'(0)=1$ i knekken", "Ja, den er deriverbar med $f'(0)=0$", "Nei, fordi den er diskontinuerlig der"],
      explanation: "$f'_-(0)=-1\\ne1=f'_+(0)$, så grensen finnes ikke. $|x|$ er kontinuerlig, men ikke deriverbar.",
    },
    {
      question: "Hvilken implikasjon er alltid sann?",
      options: ["Deriverbar i $a$ medfører kontinuerlig i $a$", "Kontinuerlig i $a$ medfører deriverbar i $a$", "Deriverbar i $a$ medfører $f(a)=0$", "Kontinuerlig i $a$ medfører $f'(a)=0$"],
      explanation: "Deriverbar medfører kontinuerlig (bevises via $f(x)-f(a)=\\frac{f(x)-f(a)}{x-a}(x-a)$). Omvendt gjelder ikke ($|x|$).",
    },
    {
      question: "Hva viser $f(x)=|x|$ om sammenhengen kontinuitet–deriverbarhet?",
      options: ["At kontinuerlig ikke medfører deriverbar", "At deriverbar ikke medfører kontinuerlig", "At kontinuerlig medfører deriverbar", "At deriverbar medfører $f'=0$"],
      explanation: "$|x|$ er kontinuerlig overalt, men ikke deriverbar i $0$ — moteksemplet mot den omvendte implikasjonen.",
    },
    {
      question: "Hva må du sjekke FØRST i et skjøtepunkt?",
      options: ["At funksjonen er kontinuerlig der", "At de ensidige deriverte finnes og er like", "At $f'(a)=0$ i punktet", "At formelen er den samme på begge sider"],
      explanation: "Er $f$ ikke kontinuerlig, kan den ikke være deriverbar. Sjekk kontinuitet før du regner ensidige deriverte.",
    },
    {
      question: "Når er en stykkevis funksjon deriverbar i skjøtepunktet $a$?",
      options: ["Når $f'_-(a)=f'_+(a)$ og $f$ er kontinuerlig der", "Når høyrederiverten $f'_+(a)$ finnes, uansett venstre", "Når $f'_-(a)\\ne f'_+(a)$ i skjøtepunktet", "Når $f(a)=0$ og formlene er like"],
      explanation: "Deriverbarhet krever kontinuitet pluss at begge ensidige deriverte finnes og er like.",
    },
    {
      question: "Tangenten til $f(x)=x^2$ i $x=3$ er:",
      options: ["$y=6x-9$", "$y=6x+9$", "$y=3x-9$", "$y=9x-6$"],
      explanation: "$f(3)=9$, $f'(3)=6$; $y=9+6(x-3)=6x-9$.",
    },
    {
      question: "Hvorfor er det ugyldig å 'bevise' deriverbarhet ved å derivere formelen og sette inn?",
      options: ["Derivertformelen forutsetter allerede at funksjonen er deriverbar", "Fordi derivasjonsreglene alltid gir feil tallverdi i slike punkter", "Man må alltid bruke L'Hôpital på differansekvotienten", "Fordi innsetting av $h=0$ gir formen $0/0$"],
      explanation: "Å bruke derivasjonsreglene forutsetter deriverbarhet; der definisjonen etterspørres, må differansekvotientens grense regnes.",
    },
    {
      question: "Setter du $h=0$ rett inn i differansekvotienten, får du:",
      options: ["Den ubestemte formen $[0/0]$", "Alltid tallet $0$ i telleren", "Verdien $f'(a)$ direkte uten regning", "En vertikal asymptote i punktet"],
      explanation: "Direkte innsetting gir $\\frac{0}{0}$ — forenkle (forkort $h$, konjuger) før grensen tas.",
    },
    {
      question: "En funksjon har $\\lim_{x\\to2^-}f=1$ og $\\lim_{x\\to2^+}f=3$. Kan den være deriverbar i $2$?",
      options: ["Nei, den er ikke engang kontinuerlig i $2$", "Ja, dersom vi setter $f(2)=2$ som verdi", "Ja, med $f'(2)=1$ fra venstre side", "Nei, men bare dersom $f(2)=3$ velges riktig"],
      explanation: "Ulike ensidige grenser gir ingen grense, altså ikke kontinuerlig; da kan den ikke være deriverbar.",
    },
    {
      question: "Hvorfor er $f(x)=\\sqrt[3]{x}$ ikke deriverbar i $0$?",
      options: ["Differansekvotienten går mot uendelig (vertikal tangent)", "De ensidige deriverte er ulike, $-1$ og $1$, i knekken", "Fordi den er diskontinuerlig i punktet $0$", "Fordi $f(0)\\ne0$ i origo"],
      explanation: "$f'(x)=\\tfrac13x^{-2/3}\\to\\infty$; grensen er ikke et endelig tall, så ingen derivert — vertikal tangent.",
    },
    {
      question: "Grensen $\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$ er stigningstallet til:",
      options: ["Tangenten i $(a,f(a))$", "En vilkårlig sekant", "Normallinjen i $a$", "Den vannrette asymptoten"],
      explanation: "Sekantvarianten av definisjonen: sekantens stigningstall går mot tangentens når $x\\to a$.",
    },
  ],
  'mat1100-3-2': [
    {
      question: "Kjerneregelen $(f(g(x)))'$ er lik:",
      options: ["$f'(g(x))\\cdot g'(x)$", "$f'(g(x))$", "$f'(x)\\cdot g'(x)$", "$f'(g'(x))$"],
      explanation: "Deriver ytre med indre urørt, gang med indres deriverte. Å droppe $g'(x)$ er å miste et lag.",
    },
    {
      question: "Deriver $f(x)=(3x+2)^5$:",
      options: ["$15(3x+2)^4$", "$5(3x+2)^4$", "$15(3x+2)^5$", "$3(3x+2)^4$"],
      explanation: "Ytre $5u^4$ ganges med indres deriverte $3$: $5(3x+2)^4\\cdot3=15(3x+2)^4$. Faktoren $3$ er kjerneleddet.",
    },
    {
      question: "Deriver $g(x)=\\ln(\\cos(x^3))$:",
      options: ["$-3x^2\\tan(x^3)$", "$-\\tan(x^3)$", "$3x^2\\tan(x^3)$", "$-3x^2\\cot(x^3)$"],
      explanation: "Tre lag: $\\frac{1}{\\cos(x^3)}\\cdot(-\\sin(x^3))\\cdot3x^2=-3x^2\\tan(x^3)$.",
    },
    {
      question: "Den deriverte av $\\arctan x$ er:",
      options: ["$\\dfrac{1}{1+x^2}$", "$\\dfrac{1}{\\sqrt{1-x^2}}$", "$\\dfrac{1}{1-x^2}$", "$\\dfrac{-1}{1+x^2}$"],
      explanation: "Utledes via $\\tan y=x$: $(1+\\tan^2y)y'=1$, så $y'=1/(1+x^2)$.",
    },
    {
      question: "Den deriverte av $\\arcsin x$ (for $|x|<1$) er:",
      options: ["$\\dfrac{1}{\\sqrt{1-x^2}}$", "$\\dfrac{-1}{\\sqrt{1-x^2}}$", "$\\dfrac{1}{1+x^2}$", "$\\dfrac{1}{\\sqrt{1+x^2}}$"],
      explanation: "$\\sin y=x$ gir $\\cos y\\, y'=1$, og $\\cos y=\\sqrt{1-x^2}>0$ på hovedgrenen.",
    },
    {
      question: "Den deriverte av $\\arccos x$ skiller seg fra $\\arcsin x$ ved:",
      options: ["Et minustegn foran", "En faktor $2$", "At nevneren er $1+x^2$", "Ingenting, de er like"],
      explanation: "$\\arccos'x=-\\frac{1}{\\sqrt{1-x^2}}$; fortegnet speiler at $\\arcsin x+\\arccos x=\\pi/2$.",
    },
    {
      question: "Deriver $h(x)=\\arctan(3x^2)$:",
      options: ["$\\dfrac{6x}{1+9x^4}$", "$\\dfrac{6x}{1+3x^2}$", "$\\dfrac{6x}{1+9x^2}$", "$\\dfrac{1}{1+9x^4}$"],
      explanation: "$\\frac{1}{1+(3x^2)^2}\\cdot6x$; merk $(3x^2)^2=9x^4$.",
    },
    {
      question: "For $y=x^{\\sin x}$ ($x>0$): hva er siste steg i logaritmisk derivasjon?",
      options: ["Gange $\\frac{y'}{y}$-uttrykket med $y=x^{\\sin x}$", "Sette $y=1$ og forenkle uttrykket", "Dele hele uttrykket på $\\ln x$", "Bruke den vanlige potensregelen $(x^n)'=nx^{n-1}$"],
      explanation: "$\\frac{y'}{y}=(\\cdots)$ er ikke svaret; $y'=y\\cdot(\\cdots)$. Å glemme å gange tilbake med $y$ er en klassisk feil.",
    },
    {
      question: "Deriver $y=x^{\\sin x}$ for $x>0$:",
      options: ["$x^{\\sin x}\\!\\left(\\cos x\\ln x+\\tfrac{\\sin x}{x}\\right)$", "$\\sin x\\cdot x^{\\sin x-1}$", "$x^{\\sin x}\\cos x\\ln x$", "$x^{\\sin x}\\!\\left(\\cos x\\ln x+\\tfrac{\\cos x}{x}\\right)$"],
      explanation: "$\\ln y=\\sin x\\ln x$; deriver og gang tilbake med $y=x^{\\sin x}$.",
    },
    {
      question: "Hvorfor kan du ikke bruke potensregelen $(x^n)'=nx^{n-1}$ på $x^{\\sin x}$?",
      options: ["Eksponenten er ikke konstant", "Grunntallet er negativt", "Potensregelen krever $n>0$", "$x$ kan være $0$"],
      explanation: "Potensregelen krever konstant eksponent; variabel eksponent krever logaritmisk derivasjon.",
    },
    {
      question: "For $(f^{-1})'(b)$ skal du dele på:",
      options: ["$f'(a)$ der $f(a)=b$", "$f'(b)$", "$f(a)$ der $f(a)=b$", "$f'(a)$ der $f(b)=a$"],
      explanation: "$(f^{-1})'(b)=1/f'(a)$ med $f(a)=b$. Å dele på $f'(b)$ er den årvisse fella — finn $a$ først.",
    },
    {
      question: "La $f(x)=x^3+2x-1$ (strengt voksende). Da er $(f^{-1})'(2)$ lik:",
      options: ["$\\tfrac15$", "$\\tfrac{1}{14}$", "$5$", "$\\tfrac13$"],
      explanation: "$f(a)=2$ gir $a=1$; $f'(1)=3+2=5$, så $(f^{-1})'(2)=1/5$. Fella $1/f'(2)=1/14$.",
    },
    {
      question: "La $f(x)=x^5+x^3+2x$ (strengt voksende). Da er $(f^{-1})'(4)$ lik:",
      options: ["$\\tfrac{1}{10}$", "$\\tfrac{1}{1330}$", "$10$", "$\\tfrac14$"],
      explanation: "$f(1)=4$; $f'(1)=5+3+2=10$, så $(f^{-1})'(4)=1/10$. Fella $1/f'(4)=1/1330$.",
    },
    {
      question: "Første steg for å finne $(f^{-1})'(b)$ er å:",
      options: ["Løse $f(a)=b$ for å finne $a$", "Regne $f'(b)$", "Derivere $f^{-1}$ direkte", "Sette $a=b$"],
      explanation: "Oppskriften 'finn $a$ først': løs $f(a)=b$, så $f'(a)$, så $1/f'(a)$.",
    },
    {
      question: "Ved implisitt derivasjon av $y^2$ mhp. $x$ får du:",
      options: ["$2yy'$", "$2y$", "$2y'$", "$y^2y'$"],
      explanation: "Kjerneregel: $\\frac{d}{dx}y^2=2y\\cdot y'$. Å glemme faktoren $y'$ er en typisk feil.",
    },
    {
      question: "Implisitt derivasjon av $x^2+xy+y^2=7$ gir $y'=$",
      options: ["$-\\dfrac{2x+y}{x+2y}$", "$-\\dfrac{2x}{2y}$", "$\\dfrac{2x+y}{x+2y}$", "$-\\dfrac{x+2y}{2x+y}$"],
      explanation: "$2x+y+xy'+2yy'=0$ (produktregel på $xy$); løs: $y'=-(2x+y)/(x+2y)$.",
    },
    {
      question: "Kvotientregelen $(u/v)'$ har teller:",
      options: ["$u'v-uv'$", "$uv'-u'v$", "$u'v+uv'$", "$u'v'-uv$"],
      explanation: "$(u/v)'=\\frac{u'v-uv'}{v^2}$; rekkefølgen og fortegnet i telleren er avgjørende.",
    },
    {
      question: "Produktregelen $(uv)'$ er:",
      options: ["$u'v+uv'$", "$u'v'$", "$u'v-uv'$", "$uv'+u'v'$"],
      explanation: "$(uv)'=u'v+uv'$ — deriver den ene, behold den andre, i begge ledd.",
    },
    {
      question: "Deriver $f(x)=\\sin(\\sqrt{x^2+1})$:",
      options: ["$\\dfrac{x\\cos(\\sqrt{x^2+1})}{\\sqrt{x^2+1}}$", "$\\cos(\\sqrt{x^2+1})$", "$\\dfrac{\\cos(\\sqrt{x^2+1})}{2\\sqrt{x^2+1}}$", "$\\dfrac{x\\cos(x^2+1)}{\\sqrt{x^2+1}}$"],
      explanation: "Tre lag: $\\cos(\\sqrt{x^2+1})\\cdot\\frac{1}{2\\sqrt{x^2+1}}\\cdot2x$; $2x$ og $2$ forkorter.",
    },
    {
      question: "$f''(x)$ når $f(x)=x^4-\\sin x$ er:",
      options: ["$12x^2+\\sin x$", "$12x^2-\\sin x$", "$4x^3-\\cos x$", "$12x^2+\\cos x$"],
      explanation: "$f'=4x^3-\\cos x$; $f''=12x^2+\\sin x$ (siden $(-\\cos x)'=+\\sin x$).",
    },
    {
      question: "Den deriverte av $e^x$ er:",
      options: ["$e^x$", "$xe^{x-1}$", "$e^x\\ln x$", "$\\tfrac{1}{x}e^x$"],
      explanation: "$e^x$ er sin egen deriverte. For generelt grunntall: $(a^x)'=a^x\\ln a$.",
    },
    {
      question: "Hva sikrer at en strengt voksende funksjon har en omvendt funksjon?",
      options: ["Den er én-til-én", "Den er begrenset", "Den har $f'=0$ et sted", "Den er periodisk"],
      explanation: "Strengt monoton medfører injektiv, som garanterer at inversen finnes.",
    },
    {
      question: "Deriver $f(x)=\\arcsin(2x)$, og angi hvor det er definert:",
      options: ["$\\dfrac{2}{\\sqrt{1-4x^2}}$, for $|x|<\\tfrac12$", "$\\dfrac{2}{\\sqrt{1-2x^2}}$, for $|x|<1$", "$\\dfrac{1}{\\sqrt{1-4x^2}}$, for $|x|<\\tfrac12$", "$\\dfrac{2}{\\sqrt{1+4x^2}}$, for alle $x$"],
      explanation: "$\\frac{1}{\\sqrt{1-(2x)^2}}\\cdot2$; definert når $1-4x^2>0$.",
    },
    {
      question: "Den deriverte av $\\tan x$ kan skrives:",
      options: ["$1+\\tan^2 x$", "$1-\\tan^2 x$", "$\\tan^2 x$", "$\\cos^2 x$"],
      explanation: "$\\tan'x=\\frac{1}{\\cos^2x}=1+\\tan^2x$; sistnevnte form driver utledningen av $\\arctan'$.",
    },
    {
      question: "Deriver $y=x^{\\cos x}$ for $x>0$:",
      options: ["$x^{\\cos x}\\!\\left(\\tfrac{\\cos x}{x}-\\sin x\\ln x\\right)$", "$\\cos x\\cdot x^{\\cos x-1}$", "$x^{\\cos x}\\!\\left(\\tfrac{\\cos x}{x}+\\sin x\\ln x\\right)$", "$-\\sin x\\cdot x^{\\cos x}$"],
      explanation: "$\\ln y=\\cos x\\ln x$; deriver med produktregel og gang tilbake med $y$.",
    },
  ],
  'mat1100-3-3': [
    {
      question: "For $f(x)=x^k\\sin(1/x^m)$ (med $f(0)=0$): når er $f$ kontinuerlig i $0$?",
      options: ["Når $k>0$", "Når $k>1$", "Når $k>m+1$", "Bare når $k=m$"],
      explanation: "$|f(x)|\\le|x|^k\\to0$ nettopp for $k>0$ (skvis med $|\\sin|\\le1$).",
    },
    {
      question: "Når er $f(x)=x^k\\sin(1/x^m)$ deriverbar i $0$?",
      options: ["Når $k>1$", "Når $k>0$", "Når $k>m+1$", "For alle $k$"],
      explanation: "Differansekvotienten er $h^{k-1}\\sin(1/h^m)$, som klemmes mot $0$ kun når $k-1>0$.",
    },
    {
      question: "Når er $f'$ kontinuerlig i $0$ (klasse $C^1$) for $x^k\\sin(1/x^m)$?",
      options: ["Når $k>m+1$", "Når $k>m-1$", "Når $k>0$", "Når $m>k$"],
      explanation: "Leddet $x^{k-m-1}$ i $f'$ dør ut kun for $k-m-1>0$, i tillegg til $k>1$.",
    },
    {
      question: "For $f(x)=x^2\\sin(1/x)$ (med $f(0)=0$): hva er riktig?",
      options: ["Deriverbar i $0$, men $f'$ er diskontinuerlig i $0$", "Ikke deriverbar i $0$, fordi $f'$ oscillerer", "$f'$ er kontinuerlig i $0$, så $f$ er $C^1$", "Ikke kontinuerlig i $0$, fordi den oscillerer vilt der"],
      explanation: "$k=2>1$ gir deriverbar ($f'(0)=0$); $k=2\\not>m+1=2$ gir diskontinuerlig $f'$ — oscillasjonsfellen.",
    },
    {
      question: "En medstudent sier: '$\\lim_{x\\to0}f'(x)$ finnes ikke, altså er $f$ ikke deriverbar i $0$.' Dette er:",
      options: ["Galt — deriverbarhet avgjøres av differansekvotienten", "Riktig, dette gjelder for alle funksjoner av denne typen", "Riktig bare for $\\cos$-varianten av familien", "Galt bare når $f$ er en odde funksjon"],
      explanation: "Manglende grense for $f'$ betyr kun at $f'$ er diskontinuerlig; deriverbarhet avgjøres av differansekvotienten. Kjernefella.",
    },
    {
      question: "Hvordan avgjøres deriverbarhet i et punkt der formelverket ikke gjelder?",
      options: ["Med differansekvotienten $\\frac{f(h)-f(0)}{h}$", "Ved å derivere formelen $f'(x)$ og sette inn $x=0$", "Ved å sjekke om $\\lim_{x\\to0}f'(x)$ finnes", "Ved å tegne grafen nøye rundt punktet"],
      explanation: "Grensedefinisjonen er eneste gyldige metode; derivertformelen forutsetter allerede deriverbarhet.",
    },
    {
      question: "I skvisargumentet for $x^3\\cos(1/x^2)$ er det avgjørende å uttale at:",
      options: ["$|\\cos(1/x^2)|\\le1$", "$x^3>0$", "$\\cos$ er deriverbar", "$1/x^2\\to\\infty$"],
      explanation: "Begrensetheten $|\\cos|\\le1$ gir rammen $-|x|^3\\le f\\le|x|^3$; uten den er det ingen klemme.",
    },
    {
      question: "Differansekvotienten for $x^3\\cos(1/x^2)$ i $0$ er:",
      options: ["$h^2\\cos(1/h^2)$", "$3h^2\\cos(1/h^2)$", "$\\cos(1/h^2)$", "$h^3\\cos(1/h^2)$"],
      explanation: "$\\frac{h^3\\cos(1/h^2)}{h}=h^2\\cos(1/h^2)\\to0$ (skvis), så $f'(0)=0$.",
    },
    {
      question: "For $g(x)=x\\sin(1/x)$ (med $g(0)=0$) i $0$ gjelder:",
      options: ["Kontinuerlig, men ikke deriverbar", "Deriverbar med $g'(0)=1$", "Ikke kontinuerlig i punktet $0$", "Deriverbar med $g'(0)=0$ ved skvis"],
      explanation: "Differansekvotienten $\\sin(1/h)$ oscillerer uten grense ($k=1\\not>1$); kontinuerlig fordi $k>0$.",
    },
    {
      question: "Grense-av-derivert-setningen kan brukes til å finne $f'(a)$ når:",
      options: ["$\\lim_{x\\to a}f'(x)$ finnes og $f$ er kontinuerlig", "$\\lim_{x\\to a}f'(x)$ ikke finnes, men $f$ kontinuerlig", "$f$ er diskontinuerlig i punktet $a$", "$f'(a)=0$ allerede er kjent fra før"],
      explanation: "Setningen har en 'hvis': eksisterer grensen av $f'$, er $f'(a)$ lik den. Den kan ikke brukes baklengs.",
    },
    {
      question: "Hva sier grense-av-derivert-setningen når $\\lim_{x\\to a}f'(x)$ IKKE finnes?",
      options: ["Ingenting — bruk differansekvotienten i stedet", "At $f$ dermed ikke er deriverbar i punktet", "At $f$ dermed ikke er kontinuerlig der heller", "At $f'(a)=0$ må gjelde der"],
      explanation: "Setningen er ingen ekvivalens; manglende grense gir ingen konklusjon om deriverbarhet.",
    },
    {
      question: "Beviset for grense-av-derivert-setningen bygger på:",
      options: ["Middelverdisetningen", "Skjæringssetningen (IVT)", "Konjugattrikset", "Induksjon"],
      explanation: "MVT gir $\\frac{f(a+h)-f(a)}{h}=f'(c_h)$ med $c_h\\to a$, så differansekvotienten $\\to\\lim f'$.",
    },
    {
      question: "For at $f(x)=\\begin{cases}ax+b,&x\\le2\\\\x^2,&x>2\\end{cases}$ skal bli deriverbar i $2$:",
      options: ["$a=4,\\ b=-4$", "$a=2,\\ b=0$", "$a=4,\\ b=4$", "$a=-4,\\ b=4$"],
      explanation: "Derivert: $a=2\\cdot2=4$. Kontinuitet: $2a+b=4\\Rightarrow b=-4$.",
    },
    {
      question: "Ved skjøteparametre: hvilken betingelse gir kontinuitet i skjøten?",
      options: ["Verdiene fra begge sider er like", "De ensidige deriverte er like", "De andrederiverte matcher hverandre", "Andrederiverten er lik $0$ der"],
      explanation: "Kontinuitet matcher verdier; deriverbarhet matcher førstederiverte; $C^1$/to-ganger matcher andrederiverte.",
    },
    {
      question: "$g(x)=\\sin(1/x)$ på $(0,1]$ med $g(0)=0$ er integrerbar på $[0,1]$ fordi den er:",
      options: ["Begrenset med endelig mange diskontinuiteter", "Kontinuerlig overalt på hele intervallet $[0,1]$", "Strengt voksende på $(0,1]$", "Deriverbar i punktet $0$ ved skvis"],
      explanation: "$|g|\\le1$ og eneste bruddpunkt er $x=0$ — teoremet 'begrenset + endelig mange diskontinuiteter' gir integrerbarhet.",
    },
    {
      question: "Hvilket teorem gir integrerbarhet uten å regne integralet?",
      options: ["Begrenset + stykkevis monoton medfører integrerbar", "Deriverbar medfører integrerbar overalt", "Kontinuerlig i ett punkt medfører integrerbar", "Begrenset alene medfører kontinuerlig og integrerbar"],
      explanation: "Både 'begrenset + stykkevis monoton' og 'begrenset + endelig mange diskontinuiteter' garanterer integrerbarhet.",
    },
    {
      question: "En diskontinuerlig derivert er en $f'$ som:",
      options: ["Eksisterer i hvert punkt, men ikke er kontinuerlig", "Ikke eksisterer i noe eneste punkt i det hele tatt", "Alltid er lik konstanten $0$ overalt", "Gjør at $f$ ikke er deriverbar der"],
      explanation: "$x^2\\sin(1/x)$: $f'$ finnes overalt, men oscillerer rundt $0$ uten grense — deriverbar, ikke $C^1$.",
    },
    {
      question: "For $x^4\\sin(1/x^2)$ i $0$ ($k=4,m=2$) gjelder:",
      options: ["Deriverbar OG $f'$ kontinuerlig ($C^1$)", "Verken deriverbar eller kontinuerlig der", "Deriverbar, men $f'$ diskontinuerlig", "Ikke kontinuerlig i punktet $0$"],
      explanation: "$k=4>1$ (deriverbar) og $k=4>m+1=3$ ($f'$ kontinuerlig), så $f$ er $C^1$ i $0$.",
    },
    {
      question: "Amplituden til $\\sin(1/x^m)$ nær $0$ er:",
      options: ["Konstant $1$ — det er $x^k$ som demper", "Voksende mot uendelig når $x$ nærmer seg $0$", "Alltid nøyaktig lik $0$ overalt", "Lik eksponenten $m$ i argumentet"],
      explanation: "$\\sin$ svinger mellom $-1$ og $1$; faktoren $x^k$ demper utslaget mot $0$.",
    },
    {
      question: "At $f$ er 'deriverbar' er en svakere egenskap enn at $f$ er:",
      options: ["$C^1$ (kontinuerlig deriverbar)", "kontinuerlig i punktet og en omegn av det", "begrenset i en omegn", "definert i selve punktet $a$"],
      explanation: "$C^1$ krever i tillegg at $f'$ er kontinuerlig; $x^2\\sin(1/x)$ er deriverbar, men ikke $C^1$.",
    },
  ],
  'mat1100-3-4': [
    {
      question: "Hva garanterer Rolles teorem for en funksjon som oppfyller forutsetningene?",
      options: ["Det finnes en $c\\in(a,b)$ med $f'(c)=0$", "Det finnes en $c\\in(a,b)$ med $f(c)=0$", "Det finnes en $c\\in(a,b)$ med $f''(c)=0$", "Det finnes en $c$ med $f'(c)=f(b)-f(a)$"],
      explanation: "Rolle gir vannrett tangent i et indre punkt: $f'(c)=0$. De øvrige blander inn nullpunkt, andrederivert eller sekantstigning.",
    },
    {
      question: "Hvilken ekstra forutsetning krever Rolle utover det middelverdisetningen krever?",
      options: ["At $f(a)=f(b)$", "At $f$ er to ganger deriverbar", "At $f$ er voksende på $[a,b]$", "At $f(a)=0$ og $f(b)=0$"],
      explanation: "Rolle er MVT med kravet om like endepunktverdier $f(a)=f(b)$. De trenger ikke være null, og to ganger deriverbarhet kreves ikke.",
    },
    {
      question: "Middelverdisetningen gir en $c\\in(a,b)$ der $f'(c)$ er lik hva?",
      options: ["$\\dfrac{f(b)-f(a)}{b-a}$", "$\\dfrac{f(b)+f(a)}{b-a}$", "$\\dfrac{f(b)-f(a)}{b+a}$", "$f(b)-f(a)$"],
      explanation: "$f'(c)$ er lik sekantstigningen $\\frac{f(b)-f(a)}{b-a}$. De andre har feil fortegn, feil nevner eller mangler nevner.",
    },
    {
      question: "For $f(x)=x^2-4x+3$ på $[1,3]$ oppfyller Rolle. Hvilken $c$ gir teoremet?",
      options: ["$c=2$", "$c=1$", "$c=3$", "$c=\\tfrac{3}{2}$"],
      explanation: "$f'(x)=2x-4=0$ gir $c=2$, midt mellom nullpunktene. Endepunktene $1,3$ er ikke indre; $3/2$ løser ikke $f'=0$.",
    },
    {
      question: "For $f(x)=x^2$ på $[0,2]$: hvilken $c$ gir middelverdisetningen?",
      options: ["$c=1$", "$c=2$", "$c=\\tfrac{1}{2}$", "$c=\\sqrt{2}$"],
      explanation: "Sekantstigning $=\\frac{4-0}{2}=2$, og $f'(c)=2c=2$ gir $c=1$. De andre løser ikke $2c=2$.",
    },
    {
      question: "Hvorfor gjelder ikke Rolle for $f(x)=|x|$ på $[-1,1]$ selv om $f(-1)=f(1)$?",
      options: ["$f$ er ikke deriverbar i $0$", "$f$ er ikke kontinuerlig i $0$", "$f$ er ikke definert i $0$", "Intervallet er ikke lukket"],
      explanation: "$|x|$ er kontinuerlig og definert, men ikke deriverbar i $0$, så forutsetningen om deriverbarhet på $(-1,1)$ svikter.",
    },
    {
      question: "Er $f'(x)=0$ for alle $x$ i et intervall, hva kan du konkludere om $f$?",
      options: ["$f$ er konstant på intervallet", "$f$ er voksende på intervallet", "$f$ har et vendepunkt der", "$f$ er lik null på intervallet"],
      explanation: "Konstant-kriteriet (via MVT): $f'\\equiv 0$ på et intervall gir konstant $f$. Konstanten trenger ikke være null.",
    },
    {
      question: "Har $f$ og $h$ samme deriverte på et intervall, hvordan er de relatert?",
      options: ["$f=h+K$ for en konstant $K$", "$f=h$ nødvendigvis", "$f=Kh$ for en konstant $K$", "$f$ og $h$ er begge konstante"],
      explanation: "Samme-derivert-kriteriet: de skiller seg bare med en konstant. Kjenner du i tillegg ett felles punkt, er $K=0$ og $f=h$.",
    },
    {
      question: "Bruk MVT: hva er en gyldig øvre skranke for $|\\sin b-\\sin a|$?",
      options: ["$|b-a|$", "$2|b-a|$", "$|b-a|^2$", "$\\tfrac{1}{2}|b-a|$"],
      explanation: "$f(x)=\\sin x$ har $|f'|=|\\cos x|\\le 1$, så MVT gir $|\\sin b-\\sin a|\\le 1\\cdot|b-a|$.",
    },
    {
      question: "Beviset for Rolles teorem hviler på hvilket resultat?",
      options: ["Ekstremverdisetningen", "Skjæringssetningen", "Analysens fundamentalteorem", "L'Hôpitals regel"],
      explanation: "Ekstremverdisetningen sikrer at $f$ antar et ekstremum; i et indre ekstremum er $f'=0$. De andre setningene brukes i andre sammenhenger.",
    },
    {
      question: "Skal du vise $f'(c)=f(c)$ med Rolle, hvilken hjelpefunksjon passer?",
      options: ["$g(x)=e^{-x}f(x)$", "$g(x)=e^{x}f(x)$", "$g(x)=f(x)-x$", "$g(x)=f(x)^2$"],
      explanation: "$\\frac{d}{dx}[e^{-x}f]=e^{-x}(f'-f)$, som er $0$ når $f'=f$. Da gir $g'(c)=0$ nettopp $f'(c)=f(c)$.",
    },
    {
      question: "For en to ganger deriverbar funksjon: $f$ er konveks på et intervall nøyaktig når",
      options: ["$f'$ er voksende der", "$f'$ er avtakende der", "$f'=0$ der", "$f$ er voksende der"],
      explanation: "Konveks betyr $f''\\ge 0$, altså at $f'$ vokser. Avtakende $f'$ gir konkav; $f$ voksende sier ingenting om krumning.",
    },
    {
      question: "Middelverdisetningen garanterer punktet $c$. Hvor ligger $c$?",
      options: ["I det åpne intervallet $(a,b)$", "I det lukkede intervallet $[a,b]$", "I ett av endepunktene", "Utenfor $[a,b]$"],
      explanation: "$c$ er alltid et indre punkt, $c\\in(a,b)$ — aldri et endepunkt og aldri utenfor.",
    },
    {
      question: "For $f(x)=\\ln x$ på $[1,e]$ gir middelverdisetningen hvilken $c$?",
      options: ["$c=e-1$", "$c=1$", "$c=e$", "$c=\\tfrac{e}{2}$"],
      explanation: "Sekantstigning $=\\frac{1-0}{e-1}=\\frac{1}{e-1}$, og $f'(c)=\\frac{1}{c}=\\frac{1}{e-1}$ gir $c=e-1\\approx 1{,}72$.",
    },
    {
      question: "På hvilket intervall krever middelverdisetningen at $f$ er deriverbar?",
      options: ["Det åpne intervallet $(a,b)$", "Det lukkede intervallet $[a,b]$", "Hele $\\mathbb{R}$", "Bare i endepunktene"],
      explanation: "Deriverbarhet kreves på det åpne $(a,b)$; kontinuitet kreves på det lukkede $[a,b]$. Derfor virker MVT for $\\sqrt{x}$ på $[0,1]$.",
    },
  ],
  'mat1100-3-5': [
    {
      question: "Grafen til $f(x)=x\\,e^{2/x}$ har en skråasymptote. Hvilken?",
      options: ["$y=x+2$", "$y=x$", "$y=2x$", "$y=x-2$"],
      explanation: "$x e^{2/x}=x+2+\\frac{2}{x}+\\cdots$, så asymptoten er $y=x+2$. Å svare $y=x$ er den vanlige fellen — konstantleddet $k=2$ hører med.",
    },
    {
      question: "Grafen til $f(x)=x\\,e^{5/x}$ har skråasymptote",
      options: ["$y=x+5$", "$y=x$", "$y=5x$", "$y=x-5$"],
      explanation: "Utviklingen gir $x e^{5/x}=x+5+\\frac{25}{2x}+\\cdots$, altså $y=x+5$. Konstantleddet er $k=5$.",
    },
    {
      question: "Er $f''(c)=0$ nok til at $c$ er et vendepunkt?",
      options: ["Nei, $f''$ må også skifte fortegn i $c$", "Ja, $f''(c)=0$ alene er tilstrekkelig for vendepunkt", "Ja, dersom $f'(c)=0$ gjelder samtidig", "Nei, det kreves i stedet at $f''(c)>0$"],
      explanation: "Vendepunkt krever fortegnsskifte i $f''$. $x^4$ har $f''(0)=0$ uten fortegnsskifte, og $0$ er ikke vendepunkt.",
    },
    {
      question: "Har $f(x)=x^4$ et vendepunkt i $x=0$?",
      options: ["Nei, $f''$ skifter ikke fortegn i $x=0$", "Ja, nettopp fordi $f''(0)=0$ der", "Ja, siden $f'(0)=0$ i punktet", "Nei, siden $f(0)=0$ i punktet"],
      explanation: "$f''=12x^2\\ge 0$ overalt — ingen krumningsendring, så ikke vendepunkt, selv om $f''(0)=0$.",
    },
    {
      question: "Hva forteller fortegnet til $f'$ deg direkte?",
      options: ["Hvor $f$ vokser og avtar", "Hvor $f$ er konveks og konkav", "Hvor $f$ har vendepunkter", "Hvor $f$ har asymptoter"],
      explanation: "$f'>0$ gir voksende, $f'<0$ avtakende. Konveksitet og vendepunkter styres av $f''$.",
    },
    {
      question: "Hva forteller fortegnet til $f''$ deg?",
      options: ["Om $f$ er konveks eller konkav", "Om $f$ vokser eller avtar", "Hvor $f$ har nullpunkter", "Hvor $f$ har vertikale asymptoter"],
      explanation: "$f''>0$ gir konveks, $f''<0$ konkav. Monotoni leses av $f'$, ikke $f''$.",
    },
    {
      question: "Hvordan finner du en horisontal asymptote for $f$?",
      options: ["Via grensen $\\lim_{x\\to\\pm\\infty} f(x)$", "Via grensen $\\lim_{x\\to 0} f(x)$ i null", "Der den deriverte $f'(x)=0$", "Der nevneren i uttrykket er null"],
      explanation: "Horisontal asymptote $y=L$ finnes via $\\lim_{x\\to\\pm\\infty} f(x)=L$. Der nevneren er null får du vertikale asymptoter.",
    },
    {
      question: "Når har $f$ en vertikal asymptote i $x=a$?",
      options: ["Når $\\lim_{x\\to a^\\pm} f(x)=\\pm\\infty$", "Når $\\lim_{x\\to\\infty} f(x)=a$ i begge ender", "Når den deriverte $f'(a)=0$", "Når funksjonsverdien $f(a)=0$"],
      explanation: "Vertikal asymptote betyr at $f$ går mot $\\pm\\infty$ ved $x=a$ (typisk nevner $\\to 0$, teller $\\neq 0$).",
    },
    {
      question: "En funksjon er kontinuerlig på hele $\\mathbb{R}$. Hva sier det om vertikale asymptoter?",
      options: ["Den har ingen vertikale asymptoter", "Den har nøyaktig én vertikal asymptote", "Den har alltid en asymptote i $x=0$", "Det er umulig å avgjøre fra dette"],
      explanation: "Uten bruddpunkter kan funksjonen ikke gå mot $\\pm\\infty$ i et endelig punkt, så ingen vertikale asymptoter — dette skal uttales i drøftingen.",
    },
    {
      question: "Hva er $\\lim_{x\\to\\pm\\infty}\\arctan(x^2)$, altså den horisontale asymptoten?",
      options: ["$y=\\tfrac{\\pi}{2}$", "$y=0$", "$y=\\pi$", "$y=-\\tfrac{\\pi}{2}$"],
      explanation: "$x^2\\to+\\infty$ på begge sider, og $\\arctan u\\to\\frac{\\pi}{2}$, så asymptoten er $y=\\frac{\\pi}{2}$ (begge retninger).",
    },
    {
      question: "For $f(x)=\\dfrac{x^2}{x-1}$: hva er skråasymptoten?",
      options: ["$y=x+1$", "$y=x$", "$y=x-1$", "$y=2x$"],
      explanation: "Polynomdivisjon: $\\frac{x^2}{x-1}=x+1+\\frac{1}{x-1}$, restleddet $\\to 0$, så $y=x+1$.",
    },
    {
      question: "Ved søk etter globale ekstrema på $[a,b]$ — hva må du huske i tillegg til de kritiske punktene?",
      options: ["Å regne $f$ i endepunktene", "Å regne $f''$ i alle punkter", "Å finne asymptotene", "Å sjekke om $f$ er konveks"],
      explanation: "På et lukket intervall kan globalt maks/min ligge i et randpunkt, så endepunktene $a,b$ må alltid evalueres.",
    },
    {
      question: "$f'$ skifter fra $+$ til $-$ i et kritisk punkt $c$. Hva er $c$?",
      options: ["Et lokalt maksimumspunkt", "Et lokalt minimumspunkt", "Et ekte vendepunkt der", "Et flatt terrassepunkt"],
      explanation: "Førstederiverttesten: $+\\to-$ betyr topp (lokalt maksimum). $-\\to+$ ville gitt minimum.",
    },
    {
      question: "For $g(x)=2x^3-9x^2+12x$ ligger de lokale ekstremalpunktene i",
      options: ["$x=1$ og $x=2$", "$x=0$ og $x=3$", "$x=-1$ og $x=2$", "$x=2$ og $x=3$"],
      explanation: "$g'(x)=6(x-1)(x-2)=0$ gir $x=1$ (maks) og $x=2$ (min).",
    },
    {
      question: "Hvor er $f(x)=x^4-6x^2$ konkav?",
      options: ["På $(-1,1)$", "På $(-\\infty,-1)$", "På $(1,\\infty)$", "På hele $\\mathbb{R}$"],
      explanation: "$f''(x)=12(x-1)(x+1)<0$ for $-1<x<1$, altså konkav der; konveks utenfor.",
    },
    {
      question: "En andrederiverttest gir $f''(c)=0$ i et kritisk punkt. Hva gjør du?",
      options: ["Bruker fortegnsskjema for $f'$ i stedet", "Konkluderer straks at $c$ er vendepunkt", "Konkluderer at $c$ er et maksimum", "Konkluderer at $c$ er et minimum"],
      explanation: "Andrederiverttesten er inkonklusiv når $f''(c)=0$; bruk førstederiverttesten (fortegnsskifte i $f'$).",
    },
    {
      question: "Hva menes med at $f$ har en skråasymptote $y=ax+b$?",
      options: ["$\\lim_{x\\to\\pm\\infty}\\big(f(x)-(ax+b)\\big)=0$", "At $f(x)$ blir nøyaktig lik $ax+b$ for store $x$", "At $f'(x)\\to a$ samtidig som $f(0)=b$", "At grafen krysser linja $y=ax+b$ et sted"],
      explanation: "Skråasymptote betyr at avstanden $f(x)-(ax+b)$ går mot null i det uendelige — funksjonen er ikke lik linja.",
    },
    {
      question: "For en rasjonal funksjon får du skråasymptote når",
      options: ["tellergraden er én mer enn nevnergraden", "tellergraden er lik nevnergraden", "tellergraden er mindre enn nevnergraden", "nevneren har en dobbel rot"],
      explanation: "Tellergrad = nevnergrad $+1$ gir en grad-1-kvotient ved divisjon (skråasymptote). Lik grad gir horisontal asymptote.",
    },
    {
      question: "Hvordan begrunnes en asymptote i en drøfting?",
      options: ["Med en grenseberegning", "Ved å sette inn et stort tall", "Ved å tegne grafen", "Ved å derivere $f$"],
      explanation: "Asymptoter skal begrunnes med grenser ($\\lim_{x\\to a^\\pm}$ eller $\\lim_{x\\to\\pm\\infty}$), ikke bare påstås eller tegnes.",
    },
    {
      question: "Hvor er $f(x)=\\dfrac{x}{x^2+1}$ konveks?",
      options: ["På $(-\\sqrt{3},0)$ og $(\\sqrt{3},\\infty)$", "På hele tallinja $\\mathbb{R}$ uten unntak", "På intervallet $(0,\\sqrt{3})$ alene", "På intervallet $(-\\infty,0)$ alene"],
      explanation: "$f''(x)=\\frac{2x(x^2-3)}{(x^2+1)^3}>0$ på $(-\\sqrt3,0)$ og $(\\sqrt3,\\infty)$; konkav ellers.",
    },
  ],
  'mat1100-3-6': [
    {
      question: "Hva er den avgjørende rekkefølgen i en relatert rate-oppgave?",
      options: ["Deriver implisitt mhp. $t$, sett så inn øyeblikkstallene", "Sett først inn øyeblikkstallene, deriver så uttrykket etterpå", "Deriver og sett inn tallene i samme operasjon", "Sett inn alle tallene og løs rent algebraisk"],
      explanation: "Setter du inn tall før derivasjonen, blir størrelsene konstanter og de deriverte $0$. Deriver alltid først.",
    },
    {
      question: "Hva blir $\\dfrac{d}{dt}(x^2)$ når $x$ avhenger av tiden?",
      options: ["$2x\\dfrac{dx}{dt}$", "$2x$", "$x^2\\dfrac{dx}{dt}$", "$2\\dfrac{dx}{dt}$"],
      explanation: "Kjerneregelen gir kjernefaktoren $\\frac{dx}{dt}$: $\\frac{d}{dt}x^2=2x\\frac{dx}{dt}$. Å glemme den er en vanlig feil.",
    },
    {
      question: "Hva er $\\dfrac{d}{dt}\\tan\\theta$ når $\\theta$ avhenger av tiden?",
      options: ["$\\sec^2\\theta\\,\\dfrac{d\\theta}{dt}$", "$\\sec^2\\theta$", "$\\tan\\theta\\,\\dfrac{d\\theta}{dt}$", "$\\dfrac{1}{\\cos\\theta}\\dfrac{d\\theta}{dt}$"],
      explanation: "$\\frac{d}{dt}\\tan\\theta=\\sec^2\\theta\\frac{d\\theta}{dt}$, med kjernefaktoren $\\frac{d\\theta}{dt}$ og $\\sec^2\\theta=1+\\tan^2\\theta$.",
    },
    {
      question: "En båt trekkes mot en kai; vinsjen sitter $3$ m over vannet, tauet hales inn $1$ m/s. Når $x=4$ m ($L=5$), hvor fort nærmer båten seg?",
      options: ["$1{,}25$ m/s", "$1$ m/s", "$0{,}8$ m/s", "$0{,}6$ m/s"],
      explanation: "$x\\frac{dx}{dt}=L\\frac{dL}{dt}$: $4\\frac{dx}{dt}=5(-1)$ gir $\\frac{dx}{dt}=-1{,}25$ m/s — geometrien forsterker.",
    },
    {
      question: "En ballong stiger $3$ m/s, observatør $50$ m unna. Ved høyde $50$ m ($\\theta=45°$), hvor fort øker synsvinkelen?",
      options: ["$0{,}03$ rad/s", "$0{,}06$ rad/s", "$0{,}05$ rad/s", "$0{,}02$ rad/s"],
      explanation: "$\\sec^2\\theta\\frac{d\\theta}{dt}=\\frac{1}{50}\\frac{dh}{dt}$ med $\\sec^2 45°=2$: $2\\frac{d\\theta}{dt}=\\frac{3}{50}$ gir $0{,}03$ rad/s.",
    },
    {
      question: "Hva mangler i svaret «$\\frac{ds}{dt}=-288$ km/t» på en rate-oppgave?",
      options: ["En fortegnstolket konklusjonssetning til slutt", "En tydelig figur som viser hele situasjonen", "En andrederivert av den aktuelle funksjonen", "Et fullstendig globalt ekstremum-argument"],
      explanation: "Svaret må tolkes: negativt fortegn betyr «avstanden avtar med $288$ km/t». Uten setningen er svaret ufullstendig.",
    },
    {
      question: "Hva kreves for å konkludere at et kritisk punkt gir et globalt maksimum?",
      options: ["Et globalt argument (rand eller fortegnsskjema)", "Bare at den deriverte $f'(x)=0$ i punktet", "At funksjonsverdien $f(x)>0$ i punktet", "At det aktuelle punktet er et indre punkt"],
      explanation: "$f'=0$ gir bare en kandidat; du må begrunne globalt med fortegnsskjema, randargument eller ekstremverdisetningen.",
    },
    {
      question: "En bonde har $200$ m gjerde til en rektangulær innhegning mot en elv (elvesiden gratis). Største areal?",
      options: ["$5000$ m$^2$", "$2500$ m$^2$", "$10000$ m$^2$", "$4000$ m$^2$"],
      explanation: "$2x+y=200$, $A=x(200-2x)$, $A'=0$ gir $x=50$, $y=100$, $A=5000$ m$^2$.",
    },
    {
      question: "Av et $24\\times 24$ cm ark lages en åpen eske ved å klippe hjørnekvadrater med side $x$. Hvilken $x$ gir størst volum?",
      options: ["$x=4$", "$x=6$", "$x=12$", "$x=8$"],
      explanation: "$V=x(24-2x)^2$, $V'=(24-2x)(24-6x)=0$ gir $x=4$ (forkast $x=12$). $V(4)=1024$ cm$^3$.",
    },
    {
      question: "Livredder løper $5$ m/s, svømmer $3$ m/s; offer $60$ m ut, start $100$ m langs stranda. Optimal $x$ fra $P$?",
      options: ["$x=45$ m", "$x=60$ m", "$x=30$ m", "$x=75$ m"],
      explanation: "$\\frac{x}{\\sqrt{x^2+3600}}=\\frac{3}{5}$ gir $16x^2=32400$, $x=45$ m (svømmestrekning $75$ m).",
    },
    {
      question: "Hvilken modell passer når to lengder står vinkelrett på hverandre?",
      options: ["Pytagoras: $x^2+y^2=s^2$", "tan-modellen: $\\tan\\theta=y/x$", "Arealformelen $A=xy$", "Kjerneregelen alene"],
      explanation: "To vinkelrette lengder kobles med Pytagoras. tan-modellen brukes når en vinkel er involvert.",
    },
    {
      question: "Hvilken modell passer når en synsvinkel endrer seg?",
      options: ["tan-modellen $\\tan\\theta=$ motstående/hosliggende", "Pytagoras-modellen $x^2+y^2=s^2$ for to lengder", "Volumformelen for et omdreiningslegeme her", "Produktregelen anvendt direkte på to faktorer"],
      explanation: "En vinkel mot en lengde kobles med $\\tan\\theta$. Pytagoras brukes for to vinkelrette lengder.",
    },
    {
      question: "Et fly i høyde $4$ km flyr $480$ km/t mot punktet over en observatør. Når $s=5$ km, hvor fort minker $s$?",
      options: ["$288$ km/t", "$480$ km/t", "$384$ km/t", "$240$ km/t"],
      explanation: "$x\\frac{dx}{dt}=s\\frac{ds}{dt}$ med $x=3$: $3(-480)=5\\frac{ds}{dt}$ gir $\\frac{ds}{dt}=-288$ km/t.",
    },
    {
      question: "Hva sier fortegnet $\\frac{dy}{dt}<0$ i en stige-oppgave?",
      options: ["Toppen glir nedover veggen", "Toppen glir oppover veggen", "Foten står stille", "Stigen blir lengre"],
      explanation: "$\\frac{dy}{dt}<0$ betyr at høyden $y$ avtar — toppen glir nedover. Fortegnet må tolkes i konklusjonen.",
    },
    {
      question: "En oljeflekk har radius som øker $2$ m/s. Hvor fort vokser arealet når $r=10$ m? ($A=\\pi r^2$)",
      options: ["$40\\pi$ m$^2$/s", "$20\\pi$ m$^2$/s", "$100\\pi$ m$^2$/s", "$4\\pi$ m$^2$/s"],
      explanation: "$\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}=2\\pi\\cdot 10\\cdot 2=40\\pi$ m$^2$/s.",
    },
  ],
  'mat1100-4-1': [
    {
      question: "En funksjon $f$ er begrenset på $[0,3]$ og kontinuerlig unntatt i to punkter, der den har hopp. Er $f$ integrerbar?",
      options: ["Ja — begrenset med endelig mange diskontinuiteter er nok (arbeidsteorem 1)", "Nei — integrerbarhet krever at funksjonen er kontinuerlig i hvert eneste punkt", "Nei — to hopp gjør Darboux-kriteriet umulig å oppfylle", "Bare hvis hoppene er like store i begge punktene"],
      explanation: "Arbeidsteorem 1 krever begrenset + endelig mange diskontinuiteter — begge oppfylt. Fellen er å tro at kontinuitet er nødvendig; den er bare tilstrekkelig.",
    },
    {
      question: "Hva sier Darboux-kriteriet at må gjelde for at $f$ skal være integrerbar?",
      options: ["Under- og oversummen kan bringes vilkårlig nær hverandre", "Under- og oversummen er nøyaktig like for enhver partisjon", "Funksjonen har en antiderivert som kan skrives med formler", "Alle Riemann-summer gir det samme heltallet"],
      explanation: "Integrerbarhet betyr at gapet $\\overline{S}(P)-\\underline{S}(P)$ kan gjøres mindre enn enhver $\\varepsilon$. De trenger ikke være helt like for en enkelt partisjon.",
    },
    {
      question: "Er $f(x)=1/x$ (med $f(0)=0$) Riemann-integrerbar på $[0,1]$?",
      options: ["Nei — den er ubegrenset nær $0$, så et premiss svikter", "Ja — den er kontinuerlig på $(0,1]$ og det holder", "Ja — verdien $f(0)=0$ gjør den integrerbar", "Nei — men bare fordi den ikke er monoton der"],
      explanation: "$1/x\\to\\infty$ når $x\\to0^+$, så $f$ er ikke begrenset. Arbeidsteoremene krever begrensethet; dette er et uegentlig integral (kap. 4.6).",
    },
    {
      question: "Hvilken sum undervurderer alltid arealet under grafen til en positiv funksjon?",
      options: ["Nedre trappesum (minste verdi på hver bit)", "Øvre trappesum (største verdi på hver bit)", "Gjennomsnittet av under- og oversum", "Riemann-summen med tilfeldig valgte punkter"],
      explanation: "Nedre trappesum bruker minste verdi $m_i$ på hver bit og ligger derfor under det sanne arealet; oversummen ligger over.",
    },
    {
      question: "Grensen $\\lim_{n\\to\\infty}\\sum_{i=1}^n \\frac{1}{n}\\left(\\frac{i}{n}\\right)^2$ er lik hvilket integral?",
      options: ["$\\int_0^1 x^2\\,dx$", "$\\int_0^1 x\\,dx$", "$\\int_0^n x^2\\,dx$", "$\\int_1^n \\frac{x^2}{n}\\,dx$"],
      explanation: "Bredde $\\tfrac1n$ gir $[0,1]$, punkt $\\tfrac in=x$, høyde $(i/n)^2=x^2$. Summen er en Riemann-sum for $\\int_0^1 x^2\\,dx$.",
    },
    {
      question: "En monoton (voksende) funksjon på et lukket, begrenset intervall er alltid:",
      options: ["integrerbar, selv om den har hopp", "kontinuerlig i hvert punkt", "deriverbar overalt", "ubegrenset i minst ett punkt"],
      explanation: "Byggesteins-teoremet: monotone funksjoner er integrerbare. Gapet mellom trappesummene teleskoperer til $(f(b)-f(a))\\Delta x\\to0$. En monoton funksjon kan godt ha hopp.",
    },
    {
      question: "Hvilket premiss er felles for begge arbeidsteoremene om integrerbarhet?",
      options: ["Funksjonen må være begrenset på intervallet", "Funksjonen må være kontinuerlig på intervallet", "Funksjonen må ha en kjent antiderivert", "Funksjonen må være deriverbar på intervallet"],
      explanation: "Begge teoremene krever begrensethet. Det ene legger til «endelig mange diskontinuiteter», det andre «stykkevis monoton» — men begrensethet må alltid sjekkes.",
    },
    {
      question: "Du vet at $\\int_0^2 f=5$ og $\\int_2^7 f=-1$. Hva er $\\int_0^7 f$?",
      options: ["$4$", "$6$", "$-5$", "$5$"],
      explanation: "Intervalladditivitet: $\\int_0^7 f=\\int_0^2 f+\\int_2^7 f=5+(-1)=4$.",
    },
    {
      question: "Dirichlet-funksjonen ($1$ på rasjonale, $0$ på irrasjonale tall) er ikke integrerbar fordi:",
      options: ["hver bit har både verdien $0$ og $1$, så gapet lukkes aldri", "den er ubegrenset i alle punkter i intervallet", "den mangler en antiderivert på formelform", "den er kontinuerlig overalt, men ikke deriverbar i noe eneste punkt i intervallet"],
      explanation: "På enhver bit er $m_i=0$ og $M_i=1$, så $\\underline{S}=0$ og $\\overline{S}=(b-a)$ uansett partisjon. Gapet lukkes aldri — den er begrenset, men ikke integrerbar.",
    },
    {
      question: "Hvis $3\\le f(x)\\le 8$ for alle $x\\in[2,5]$, hva kan du si om $\\int_2^5 f$?",
      options: ["Den ligger mellom $9$ og $24$", "Den er nøyaktig $16{,}5$", "Den ligger mellom $3$ og $8$", "Den kan ikke avgrenses uten formelen for $f$"],
      explanation: "Monotoni av integralet med bredde $5-2=3$: $3\\cdot3\\le\\int_2^5 f\\le 8\\cdot3$, altså $9\\le\\int_2^5 f\\le 24$.",
    },
  ],
  'mat1100-4-2': [
    {
      question: "$\\frac{d}{dx}\\int_1^{x^2} e^{3t}\\,dt$ er lik:",
      options: ["$e^{3x^2}\\cdot 2x$", "$e^{3x^2}$", "$e^{3x^2}\\cdot 3$", "$e^{3t}\\cdot 2x$"],
      explanation: "Leibniz: sett $g(x)=x^2$ inn i $e^{3t}$ og gang med $g'(x)=2x$. Å droppe faktoren $2x$ er sjangerens vanligste feil.",
    },
    {
      question: "$\\frac{d}{dx}\\int_0^{x} \\cos(t^2)\\,dt$ er lik:",
      options: ["$\\cos(x^2)$", "$\\cos(x^2)\\cdot 2x$", "$-\\sin(x^2)$", "$\\sin(x^2)\\cdot 2x$"],
      explanation: "Øvre grense er $x$ selv, så $g'(x)=1$ og FTC del 1 gir bare $\\cos(x^2)$ — ingen ekstra faktor.",
    },
    {
      question: "Hva sier fundamentalteoremet del 2 om $\\int_a^b f$ når $F'=f$?",
      options: ["Det er lik $F(b)-F(a)$", "Det er lik $f(b)-f(a)$", "Det er lik $F(b)+F(a)$", "Det er lik $F'(b)-F'(a)$"],
      explanation: "Finn en antiderivert $F$ og sett inn grensene: $\\int_a^b f=F(b)-F(a)$.",
    },
    {
      question: "$\\frac{d}{dx}\\int_2^{\\sin x} \\sqrt{1+t^2}\\,dt$ er lik:",
      options: ["$\\sqrt{1+\\sin^2 x}\\cdot\\cos x$", "$\\sqrt{1+\\sin^2 x}$", "$\\sqrt{1+\\cos^2 x}\\cdot\\cos x$", "$\\sqrt{1+x^2}\\cdot\\cos x$"],
      explanation: "Sett $g(x)=\\sin x$ inn i integranden og gang med $g'(x)=\\cos x$.",
    },
    {
      question: "For $H(x)=\\int_x^{x^2} h(t)\\,dt$ er $H'(x)$ lik:",
      options: ["$h(x^2)\\cdot 2x-h(x)$", "$h(x^2)\\cdot 2x+h(x)$", "$h(x^2)-h(x)$", "$h(x^2)\\cdot 2x$"],
      explanation: "Splitteregelen: øvre-leddet $h(x^2)\\cdot 2x$ minus nedre-leddet $h(x)\\cdot 1$. Nedre grense gir minustegn.",
    },
    {
      question: "$\\int_0^1 e^x\\,dx$ er lik:",
      options: ["$e-1$", "$e$", "$e+1$", "$1-e$"],
      explanation: "Antiderivert $e^x$; $[e^x]_0^1=e^1-e^0=e-1$.",
    },
    {
      question: "Middelverdisetningen for integraler garanterer et $c\\in[a,b]$ slik at:",
      options: ["$\\int_a^b f=f(c)(b-a)$", "$\\int_a^b f=f'(c)(b-a)$", "$f(b)-f(a)=f'(c)(b-a)$", "$\\int_a^b f=F(c)$"],
      explanation: "En kontinuerlig funksjon antar sin gjennomsnittsverdi i et punkt $c$: $\\int_a^b f=f(c)(b-a)$. (Alternativet med $f'(c)$ er MVT for derivasjon.)",
    },
    {
      question: "Hvorfor skrives integralfunksjonen som $\\int_a^x f(t)\\,dt$ og ikke $\\int_a^x f(x)\\,dx$?",
      options: ["Integrasjonsvariabelen $t$ er en dummy, adskilt fra grensen $x$", "Fordi variabelen $t$ alltid gir et større integral enn grensen $x$ noensinne gjør", "Fordi $dx$ er forbudt i bestemte integraler", "Fordi $f$ må deriveres før den integreres"],
      explanation: "Den løpende variabelen ($t$) må ikke kollidere med den variable grensen ($x$). Det er ren notasjonsdisiplin.",
    },
    {
      question: "$\\lim_{x\\to 0}\\frac{1}{x}\\int_0^x \\cos(t^2)\\,dt$ er lik:",
      options: ["$1$", "$0$", "$\\infty$", "eksisterer ikke"],
      explanation: "Formen er $[0/0]$. L'Hôpital: teller deriveres til $\\cos(x^2)$ (FTC), nevner til $1$; grensen er $\\cos 0=1$.",
    },
    {
      question: "For $F(x)=\\int_1^{2x^2} e^{3t}\\,dt$ er $F'(x)=4x\\,e^{6x^2}$. Hvilken regel trengs for å finne $F''(x)$?",
      options: ["Produktregelen (og kjerneregelen igjen)", "Bare FTC del 1 en gang til", "Kvotientregelen", "Ingen — $F''=0$"],
      explanation: "$F'(x)=4x\\cdot e^{6x^2}$ er et produkt; $F''$ krever produktregel, og $e^{6x^2}$ krever kjerneregel inni.",
    },
    {
      question: "Hva er en antiderivert til $f(x)=\\frac{1}{x}$?",
      options: ["$\\ln|x|+C$", "$-\\frac{1}{x^2}+C$", "$x\\ln x+C$", "$\\frac{1}{2}x^{-2}+C$"],
      explanation: "$\\frac{d}{dx}\\ln|x|=\\frac1x$. Absoluttverdien trengs for negative $x$. Alternativet $-1/x^2$ er den deriverte, ikke antiderivert.",
    },
    {
      question: "FTC del 1 sier at hvis $F(x)=\\int_a^x f(t)\\,dt$ og $f$ er kontinuerlig, så er:",
      options: ["$F'(x)=f(x)$", "$F'(x)=f(a)$", "$F'(x)=f(x)-f(a)$", "$F(x)=f'(x)$"],
      explanation: "Integralfunksjonen er en antiderivert til $f$: derivasjon opphever integrasjon, $F'(x)=f(x)$.",
    },
    {
      question: "$\\frac{d}{dx}\\int_{x}^{5} h(t)\\,dt$ (nedre grense variabel) er lik:",
      options: ["$-h(x)$", "$h(x)$", "$h(5)-h(x)$", "$-h(5)$"],
      explanation: "Variabel nedre grense gir minustegn: $\\int_x^5=-\\int_5^x$, så den deriverte er $-h(x)$.",
    },
    {
      question: "Hvorfor kanselleres integrasjonskonstanten $C$ i et bestemt integral?",
      options: ["Den inngår i både $F(b)$ og $F(a)$ og forsvinner i differansen", "Fordi bestemte integraler alltid er lik null", "Fordi $C$ må settes til $1$ i bestemte integraler", "Fordi grensene alltid er like store"],
      explanation: "$\\int_a^b f=(F(b)+C)-(F(a)+C)=F(b)-F(a)$; $C$ faller bort. I *ubestemte* integraler må $+C$ skrives.",
    },
    {
      question: "$\\int_1^2 \\frac{1}{x}\\,dx$ er lik:",
      options: ["$\\ln 2$", "$\\ln 2-1$", "$1$", "$\\frac{1}{2}$"],
      explanation: "$[\\ln|x|]_1^2=\\ln 2-\\ln 1=\\ln 2-0=\\ln 2$.",
    },
  ],
  'mat1100-4-3': [
    {
      question: "I substitusjonen $u=x^2$ for $\\int 2x\\cos(x^2)\\,dx$, hva er $du$?",
      options: ["$2x\\,dx$", "$x\\,dx$", "$2\\,dx$", "$x^2\\,dx$"],
      explanation: "$u=x^2\\Rightarrow du/dx=2x\\Rightarrow du=2x\\,dx$ — nettopp den faktoren som står i integralet.",
    },
    {
      question: "Ved substitusjon i et bestemt integral må du:",
      options: ["skifte grensene til de nye $u$-verdiene", "beholde de gamle $x$-grensene i $u$-integralet", "alltid gange svaret med 2", "sette begge grenser lik 0"],
      explanation: "Grensene bytter med: $x=a\\Rightarrow u=g(a)$. Å regne videre med $x$-grensene i $u$-verden er den dokumenterte gjengangerfeilen.",
    },
    {
      question: "$\\int \\sin^3 x\\cos x\\,dx$ er lik:",
      options: ["$\\tfrac{\\sin^4 x}{4}+C$", "$\\tfrac{\\cos^4 x}{4}+C$", "$\\tfrac{\\sin^2 x}{2}+C$", "$-\\tfrac{\\cos^4 x}{4}+C$"],
      explanation: "$u=\\sin x$, $du=\\cos x\\,dx$: $\\int u^3\\,du=\\tfrac{u^4}{4}=\\tfrac{\\sin^4 x}{4}+C$.",
    },
    {
      question: "Delvis integrasjon-formelen er:",
      options: ["$\\int uv'=uv-\\int u'v$", "$\\int uv'=uv+\\int u'v$", "$\\int uv'=u'v-\\int uv$", "$\\int uv'=\\tfrac{uv}{2}$"],
      explanation: "$\\int u\\,v'\\,dx=uv-\\int u'\\,v\\,dx$ — merk minustegnet foran restintegralet.",
    },
    {
      question: "For $\\int x e^x\\,dx$ sier LIATE at du skal velge $u=$?",
      options: ["$x$ (algebraisk kommer før eksponentiell)", "$e^x$ (eksponentiell kommer aller først i LIATE-rekkefølgen)", "$xe^x$ (hele produktet)", "hverken — bruk substitusjon"],
      explanation: "LIATE: A (algebraisk) før E (eksponentiell), så $u=x$, $v'=e^x$. Da blir restintegralet enklere.",
    },
    {
      question: "$\\int \\ln x\\,dx$ er lik:",
      options: ["$x\\ln x-x+C$", "$\\tfrac{1}{x}+C$", "$x\\ln x+x+C$", "$\\tfrac{(\\ln x)^2}{2}+C$"],
      explanation: "Ensom funksjon: $v'=1$, $u=\\ln x$: $\\int\\ln x\\,dx=x\\ln x-\\int x\\cdot\\tfrac1x\\,dx=x\\ln x-x+C$.",
    },
    {
      question: "$\\int_0^1 \\frac{x}{1+x^2}\\,dx$ er lik:",
      options: ["$\\tfrac12\\ln 2$", "$\\ln 2$", "$\\tfrac12$", "$\\arctan 1$"],
      explanation: "$u=1+x^2$, $x\\,dx=\\tfrac12\\,du$, grenser $1\\to2$: $\\tfrac12[\\ln u]_1^2=\\tfrac12\\ln 2$.",
    },
    {
      question: "Hvilken nevner er signalet for arcsin-formen?",
      options: ["$\\sqrt{1-u^2}$", "$1+u^2$", "$1-u$", "$\\sqrt{u^2-1}$"],
      explanation: "$\\int\\frac{du}{\\sqrt{1-u^2}}=\\arcsin u+C$. Nevneren $1+u^2$ gir derimot arctan.",
    },
    {
      question: "$\\int e^x\\sin x\\,dx$ løses med rundtur-varianten. Hva er ideen?",
      options: ["To runder gir en ligning $I=(\\text{ledd})-I$ som løses for $I$", "Substituer $u=e^x$, integrer direkte, og du er straks ferdig uten flere runder", "Integralet er null fordi $\\sin$ er periodisk", "Deriver $\\sin x$ til det blir en konstant"],
      explanation: "Etter to delvis-runder kommer det opprinnelige integralet tilbake; du løser den algebraiske ligningen for $I$.",
    },
    {
      question: "$\\int \\frac{(\\ln x)^2}{x}\\,dx$ er lik:",
      options: ["$\\tfrac{(\\ln x)^3}{3}+C$", "$\\tfrac{(\\ln x)^3}{x}+C$", "$\\tfrac{2\\ln x}{x}+C$", "$(\\ln x)^3+C$"],
      explanation: "$u=\\ln x$, $du=\\tfrac{dx}{x}$: $\\int u^2\\,du=\\tfrac{u^3}{3}=\\tfrac{(\\ln x)^3}{3}+C$.",
    },
    {
      question: "I et ubestemt integral løst med substitusjon må du til slutt:",
      options: ["substituere tilbake til den opprinnelige variabelen", "la svaret stå i $u$", "sette inn grenser", "gange med $du$"],
      explanation: "Uten grenser å bytte må svaret uttrykkes i $x$: sett $u=g(x)$ tilbake. Et svar i $u$ er ufullstendig.",
    },
    {
      question: "$\\int x^2 e^x\\,dx$ krever:",
      options: ["gjentatt delvis integrasjon (to runder)", "én substitusjon $u=x^2$", "kvotientregelen", "ingen teknikk — det står i tabellen"],
      explanation: "Første delvis-runde senker $x^2$ til $2x$; en runde til fullfører. Svar: $(x^2-2x+2)e^x+C$.",
    },
    {
      question: "$\\int \\frac{e^{1/x}}{x^2}\\,dx$ med $u=1/x$ gir:",
      options: ["$-e^{1/x}+C$", "$e^{1/x}+C$", "$\\tfrac{e^{1/x}}{x}+C$", "$-\\tfrac{e^{1/x}}{x^2}+C$"],
      explanation: "$u=1/x$, $du=-\\tfrac{1}{x^2}\\,dx$: $\\int e^u(-du)=-e^u=-e^{1/x}+C$. Fellen er å glemme minustegnet i $du$.",
    },
    {
      question: "Hvorfor virker $u=\\sqrt{x}$ på $\\int \\frac{e^{\\sqrt x}}{\\sqrt x}\\,dx$?",
      options: ["$\\tfrac{dx}{\\sqrt x}=2\\,du$, så $\\sqrt x$ og dens deriverte står klart", "$\\sqrt x$ deriveres til $\\ln x$", "fordi $e^{\\sqrt x}$ ikke kan integreres på noe annet vis enn nettopp denne ene", "fordi grensene blir like"],
      explanation: "$u=\\sqrt x$, $du=\\tfrac{1}{2\\sqrt x}\\,dx$, altså $\\tfrac{dx}{\\sqrt x}=2\\,du$; integralet blir $2\\int e^u\\,du=2e^{\\sqrt x}+C$.",
    },
    {
      question: "Hvilket signal forteller at substitusjon (ikke delvis) er riktig verktøy?",
      options: ["Integranden er «indre funksjon · dens deriverte»", "Integranden er et produkt av to ubeslektede funksjoner", "Integranden er en ren logaritme", "Nevneren har to reelle røtter"],
      explanation: "Substitusjon reverserer kjerneregelen — den biter når du ser en indre funksjon og (opp til konstant) dens deriverte som faktor.",
    },
    {
      question: "$\\int \\frac{\\arctan x}{1+x^2}\\,dx$ er lik:",
      options: ["$\\tfrac{(\\arctan x)^2}{2}+C$", "$\\arctan(x^2)+C$", "$\\ln(1+x^2)+C$", "$\\tfrac{\\arctan x}{x}+C$"],
      explanation: "$u=\\arctan x$, $du=\\tfrac{dx}{1+x^2}$: $\\int u\\,du=\\tfrac{u^2}{2}=\\tfrac{(\\arctan x)^2}{2}+C$.",
    },
    {
      question: "I konstruksjonsvarianten («lag et integral med substitusjon $u=\\dots$») skal du:",
      options: ["bygge integranden baklengs fra $du$ og verifisere svaret", "kopiere en tidligere eksamensoppgave fra arkivet mest mulig ordrett", "velge et integral uten løsning", "unngå å skifte grenser"],
      explanation: "Velg $u$, regn $du$, sett sammen en integrand $f(u)\\cdot u'(x)$, løs, og verifiser ved derivasjon — verifikasjon er fasitkrav i åpne oppgaver.",
    },
    {
      question: "$\\int x\\cos x\\,dx$ er lik:",
      options: ["$x\\sin x+\\cos x+C$", "$x\\sin x-\\cos x+C$", "$-x\\sin x+\\cos x+C$", "$x\\cos x+\\sin x+C$"],
      explanation: "Delvis med $u=x$, $v'=\\cos x$: $x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+C$.",
    },
    {
      question: "$\\int \\frac{dx}{4+x^2}$ er lik:",
      options: ["$\\tfrac12\\arctan\\tfrac{x}{2}+C$", "$\\arctan\\tfrac{x}{2}+C$", "$\\tfrac12\\ln(4+x^2)+C$", "$\\tfrac{1}{4}\\arctan x+C$"],
      explanation: "Skriv $4+x^2=4(1+(x/2)^2)$, $u=x/2$: $\\tfrac12\\int\\tfrac{du}{1+u^2}=\\tfrac12\\arctan\\tfrac{x}{2}+C$.",
    },
    {
      question: "Hva er tegnet på at valget av $u$/$v'$ i delvis integrasjon var riktig?",
      options: ["Restintegralet $\\int u'v$ er enklere enn utgangspunktet", "Restintegralet er mer komplisert enn utgangspunktet", "Restintegralet er identisk med utgangspunktet med en gang", "Du slipper å skrive $+C$"],
      explanation: "Poenget med LIATE er at $u$ blir enklere når den deriveres, så $\\int u'v$ blir lettere. Blir det verre, har du valgt feil vei.",
    },
  ],
  'mat1100-4-4': [
    {
      question: "Riktig delbrøk-ansats over en irreduserbar kvadratisk faktor $x^2+1$ er:",
      options: ["$\\frac{Bx+C}{x^2+1}$", "$\\frac{A}{x^2+1}$", "$\\frac{A}{x}+\\frac{B}{x+1}$", "$\\frac{A}{x^2}+\\frac{B}{x}$"],
      explanation: "Over et irreduserbart kvadratisk ledd må telleren være lineær: $Bx+C$. Konstant teller $A$ gir for få frihetsgrader — den klassiske A-ansats-fellen.",
    },
    {
      question: "Før delbrøk på $\\frac{x^2}{x^2+1}$ må du:",
      options: ["utføre polynomdivisjon (brøken er uekte)", "faktorisere nevneren fullstendig i lineære faktorer aller først", "fullføre kvadratet i telleren", "substituere $u=x^2$"],
      explanation: "Tellergrad = nevnergrad ⇒ uekte brøk. Del først: $\\frac{x^2}{x^2+1}=1-\\frac{1}{x^2+1}$.",
    },
    {
      question: "Delbrøk-ansatsen for $\\frac{1}{x^2(x+1)}$ er:",
      options: ["$\\frac{A}{x}+\\frac{B}{x^2}+\\frac{C}{x+1}$", "$\\frac{A}{x^2}+\\frac{B}{x+1}$", "$\\frac{A}{x}+\\frac{B}{x+1}$", "$\\frac{Ax+B}{x^2}+\\frac{C}{x+1}$"],
      explanation: "Gjentatt faktor $x^2$ krever ett ledd per potens: $\\frac{A}{x}+\\frac{B}{x^2}$. Å droppe $\\frac{A}{x}$ er en dokumentert felle.",
    },
    {
      question: "$\\int\\frac{dx}{(x+2)^2+9}$ er lik:",
      options: ["$\\tfrac13\\arctan\\frac{x+2}{3}+C$", "$\\arctan\\frac{x+2}{3}+C$", "$3\\arctan(x+2)+C$", "$\\tfrac13\\ln((x+2)^2+9)+C$"],
      explanation: "Fullført kvadrat med $k=3$: $\\int\\frac{dx}{(x+a)^2+k^2}=\\frac1k\\arctan\\frac{x+a}{k}$. Faktoren $\\tfrac13$ glemmes lett.",
    },
    {
      question: "Diskriminanttesten på en kvadratisk nevner: hvis $D=p^2-4q<0$, velger du:",
      options: ["fullført kvadrat (ingen reelle røtter)", "delbrøk med lineære faktorer", "polynomdivisjon", "substitusjon $u=x^2$"],
      explanation: "$D<0$ betyr ingen reelle røtter ⇒ irreduserbar ⇒ fullført kvadrat. $D\\ge0$ ville gitt delbrøk.",
    },
    {
      question: "$\\int\\frac{dx}{(x-1)(x+2)}$ har formen:",
      options: ["$\\frac13\\ln|x-1|-\\frac13\\ln|x+2|+C$", "$\\ln|x-1|+\\ln|x+2|+C$", "$\\arctan(x-1)+C$", "$\\frac{1}{3}\\ln|x-1|+\\frac{1}{3}\\ln|x+2|+C$"],
      explanation: "Delbrøk gir $A=\\tfrac13$, $B=-\\tfrac13$; hver lineær bit integreres til en logaritme.",
    },
    {
      question: "I splitteteknikken for $\\frac{ax+b}{x^2+px+q}$ gir «multiplum av nevnerens deriverte»-biten:",
      options: ["en logaritme-del", "en arctan-del", "en potens $-1/(x+a)$", "null"],
      explanation: "$\\int\\frac{f'}{f}=\\ln|f|$: telleren skrevet som multiplum av nevnerens deriverte gir ln-delen. Konstant-resten gir arctan-delen.",
    },
    {
      question: "$x^2+4x+13$ skrevet som fullført kvadrat er:",
      options: ["$(x+2)^2+9$", "$(x+2)^2+13$", "$(x+4)^2+13$", "$(x-2)^2+9$"],
      explanation: "$(x+2)^2=x^2+4x+4$; legg til $9$ for å nå $13$. Så $(x+2)^2+9$.",
    },
    {
      question: "$\\int\\frac{2x}{x^2+1}\\,dx$ er lik:",
      options: ["$\\ln(x^2+1)+C$", "$\\arctan(x^2)+C$", "$2\\arctan x+C$", "$\\frac{1}{x^2+1}+C$"],
      explanation: "Telleren $2x$ er nevnerens deriverte, så $\\int\\frac{f'}{f}=\\ln|f|=\\ln(x^2+1)+C$.",
    },
    {
      question: "Hvorfor gir $\\int\\frac{B}{(x-r)^2}\\,dx$ ikke en logaritme?",
      options: ["Potensen er $-2$, så potensregelen gir $-\\frac{B}{x-r}$", "Fordi $(x-r)^2$ alltid er positiv og derfor aldri kan gi en logaritme", "Fordi $B$ er en konstant", "Fordi nevneren er irreduserbar"],
      explanation: "Bare potensen $-1$ gir logaritme. $(x-r)^{-2}$ integreres med potensregelen til $-\\frac{B}{x-r}+C$.",
    },
    {
      question: "Koeffisientene i en delbrøk med lineære faktorer finnes raskest ved:",
      options: ["å sette $x$ lik hver rot av nevneren", "å derivere begge sider", "å integrere begge sider", "gjetting og prøving"],
      explanation: "Innsetting av røtter: settes $x$ lik en rot, forsvinner alle ledd unntatt ett, og konstanten faller ut direkte.",
    },
    {
      question: "$\\int\\frac{x+7}{(x-1)(x+3)}\\,dx$ er lik:",
      options: ["$2\\ln|x-1|-\\ln|x+3|+C$", "$\\ln|x-1|-2\\ln|x+3|+C$", "$\\ln|(x-1)(x+3)|+C$", "$\\arctan(x-1)+C$"],
      explanation: "Ansats gir $A=2$ (fra $x=1$) og $B=-1$ (fra $x=-3$), altså $2\\ln|x-1|-\\ln|x+3|$.",
    },
    {
      question: "En 'ekte' rasjonal brøk kjennetegnes ved at:",
      options: ["tellergraden er lavere enn nevnergraden", "tellergraden er høyere enn nevnergraden", "teller og nevner har samme grad", "nevneren er et førstegradspolynom"],
      explanation: "Ekte brøk: $\\deg P<\\deg Q$. Bare da kan du gå rett på delbrøk; uekte brøker deles først.",
    },
    {
      question: "For $\\frac{2x+3}{x^2+2x+5}$ (irreduserbar nevner) skriver du telleren som:",
      options: ["$(2x+2)+1$, siden nevnerens deriverte er $2x+2$", "$2(x+3)$, ren utklamring", "$A(x^2+2x+5)$, konstant ganger nevner", "$(x+1)^2+4$, ved å fullføre kvadratet i selve telleren i stedet"],
      explanation: "Splitteteknikken: nevnerens deriverte er $2x+2$, så $2x+3=(2x+2)+1$ gir en ln-del pluss en arctan-del.",
    },
    {
      question: "Hva er den vanligste konsekvensen av å bruke $\\frac{A}{x^2+1}$ i stedet for $\\frac{Bx+C}{x^2+1}$?",
      options: ["Ligningssystemet blir uløselig eller gir feil svar", "Svaret blir nøyaktig like riktig, det tar bare litt lengre tid å regne", "Man må gange med 2 til slutt", "Integralet blir alltid null"],
      explanation: "Konstant teller over et irreduserbart ledd har for få frihetsgrader; koeffisientene kan ikke matche, og resultatet blir galt.",
    },
  ],
  'mat1100-4-5': [
    {
      question: "Hvilken teknikk løser $\\int x\\,e^{x^2}\\,dx$ enklest?",
      options: ["Substitusjon $u=x^2$", "Delvis integrasjon", "Delbrøkoppspalting", "Fullført kvadrat"],
      explanation: "«Indre $x^2$ · dens deriverte $x$» → substitusjon $u=x^2$, $du=2x\\,dx$. De andre teknikkene passer ikke strukturen.",
    },
    {
      question: "Hvilken teknikk løser den ensomme $\\int \\ln x\\,dx$?",
      options: ["Delvis med $v'=1$", "Substitusjon $u=\\ln x$", "Delbrøk i to ledd", "Direkte fra tabellen"],
      explanation: "En ensom $\\ln x$ integreres delvis med $v'=1$: $x\\ln x-x$. Det står ikke i antiderivert-tabellen.",
    },
    {
      question: "Hva blir $u$ i delvis integrasjon av $\\int x^2\\ln x\\,dx$ (LIATE)?",
      options: ["$u=\\ln x$", "$u=x^2$", "$u=x^2\\ln x$", "$u=1$"],
      explanation: "LIATE: Logaritme kommer før Algebra, så $\\ln x$ blir $u$ og $v'=x^2$. Velger du $u=x^2$, blir integralet verre.",
    },
    {
      question: "Hva er $\\int \\dfrac{e^{x}}{1+e^{2x}}\\,dx$?",
      options: ["$\\arctan(e^{x})+C$", "$\\ln(1+e^{2x})+C$", "$\\arctan(e^{2x})+C$", "$\\tfrac12\\arctan(e^{x})+C$"],
      explanation: "Substitusjon $u=e^x$ gir $\\int\\frac{du}{1+u^2}=\\arctan u=\\arctan(e^x)$. Nevneren $1+(e^x)^2$ gir arctan, ikke ln.",
    },
    {
      question: "Hva er verdien av $\\int_0^1 x\\,e^{x^2}\\,dx$?",
      options: ["$\\dfrac{e-1}{2}$", "$e-1$", "$\\dfrac{e}{2}$", "$e^2-1$"],
      explanation: "$u=x^2$: $\\tfrac12\\int_0^1 e^u\\,du=\\tfrac12(e-1)$. Faktoren $\\tfrac12$ fra $du=2x\\,dx$ må med.",
    },
    {
      question: "Hva er $\\int \\dfrac{3x^2}{x^3+1}\\,dx$?",
      options: ["$\\ln|x^3+1|+C$", "$3\\ln|x^3+1|+C$", "$\\dfrac{1}{x^3+1}+C$", "$\\arctan(x^3)+C$"],
      explanation: "«$g'/g$»-form med $g=x^3+1$: telleren $3x^2$ er $g'$, så integralet er $\\ln|x^3+1|$.",
    },
    {
      question: "Hva MÅ du gjøre ved substitusjon i et bestemt integral?",
      options: ["Bytte til nye grenser", "Beholde de gamle grensene", "Legge til en konstant", "Derivere grensene"],
      explanation: "Grensene er $x$-verdier; når du bytter til $u$, må de bli $u$-verdier. Ellers setter du inn feil tall.",
    },
    {
      question: "Hvilken teknikk-kjede løser $\\int \\cos\\sqrt{x}\\,dx$?",
      options: ["Substitusjon, så delvis", "Delvis, så delbrøk", "Delbrøk, så substitusjon", "Fullført kvadrat alene"],
      explanation: "$u=\\sqrt{x}$ rydder roten bort og gir $2\\int u\\cos u\\,du$, som løses delvis. Én teknikk holder ikke.",
    },
    {
      question: "Hva er $\\int_1^e \\ln x\\,dx$?",
      options: ["$1$", "$e-1$", "$e$", "$0$"],
      explanation: "$[x\\ln x-x]_1^e=(e-e)-(0-1)=1$. Delvis med $v'=1$.",
    },
    {
      question: "For hvilket integral trengs «rundtur-delvis» (flytt $I$ over)?",
      options: ["$\\int e^{x}\\sin x\\,dx$", "$\\int x e^{x}\\,dx$", "$\\int x\\ln x\\,dx$", "$\\int x\\cos x\\,dx$"],
      explanation: "$\\int e^x\\sin x\\,dx$ gir integralet tilbake etter to delvis-steg; da løser du en likning i $I$. De andre lukkes på ett–to steg.",
    },
    {
      question: "Hva er $\\int \\dfrac{dx}{x^2+4x+5}$?",
      options: ["$\\arctan(x+2)+C$", "$\\ln(x^2+4x+5)+C$", "$\\dfrac{1}{x+2}+C$", "$\\tfrac12\\arctan(x+2)+C$"],
      explanation: "Negativ diskriminant → fullført kvadrat: $(x+2)^2+1$ gir $\\arctan(x+2)$. Ingen reelle røtter, så ikke ln/delbrøk.",
    },
    {
      question: "Hva er $\\int_0^{\\pi/2}\\sin^2 x\\cos x\\,dx$?",
      options: ["$\\dfrac13$", "$\\dfrac12$", "$1$", "$\\dfrac{\\pi}{4}$"],
      explanation: "$u=\\sin x$, $du=\\cos x\\,dx$: $\\int_0^1 u^2\\,du=\\tfrac13$. Grensene blir $0$ og $1$.",
    },
    {
      question: "Hvilken teknikk løser den ensomme $\\int \\arctan x\\,dx$?",
      options: ["Delvis med $v'=1$", "Substitusjon $u=\\arctan x$", "Fullført kvadrat", "Delbrøk i to ledd"],
      explanation: "Ensom invers trig → delvis med $v'=1$: $x\\arctan x-\\tfrac12\\ln(1+x^2)$.",
    },
    {
      question: "Rasjonal integrand med tellergrad $\\ge$ nevnergrad — hva gjør du først?",
      options: ["Polynomdivisjon", "Delbrøk direkte", "Fullført kvadrat", "Substitusjon"],
      explanation: "Divider ned til en polynomdel pluss en ekte brøk før delbrøk/fullført kvadrat. Ellers stemmer ikke ansatsen.",
    },
    {
      question: "Hva er $\\int \\dfrac{dx}{x^2-1}$?",
      options: ["$\\tfrac12\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C$", "$\\arctan x+C$", "$\\ln|x^2-1|+C$", "$\\dfrac{1}{2x}+C$"],
      explanation: "Delbrøk: $\\frac{1}{(x-1)(x+1)}=\\frac{1/2}{x-1}-\\frac{1/2}{x+1}$. To reelle røtter → delbrøk, ikke arctan.",
    },
    {
      question: "Hva er $\\int_0^{\\sqrt{\\pi}} x^3\\cos(x^2)\\,dx$?",
      options: ["$-1$", "$1$", "$-2$", "$0$"],
      explanation: "$u=x^2$ gir $\\tfrac12\\int_0^\\pi u\\cos u\\,du$; delvis gir $\\tfrac12[u\\sin u+\\cos u]_0^\\pi=\\tfrac12(-1-1)=-1$.",
    },
    {
      question: "Hva er hovedgrepet i steg 7 i beslutningstreet?",
      options: ["Reklassifiser resten", "Legg til $+C$", "Bytt tilbake til $x$", "Sjekk diskriminanten"],
      explanation: "Etter et grep: er integralet ferdig? Hvis ikke, kjør treet på nytt på det du sitter igjen med — det er kjeding.",
    },
    {
      question: "Hva er $\\int x\\,e^{x}\\,dx$?",
      options: ["$(x-1)e^{x}+C$", "$x e^{x}+C$", "$\\tfrac12 x^2 e^{x}+C$", "$(x+1)e^{x}+C$"],
      explanation: "Delvis $u=x$, $v'=e^x$: $x e^x-\\int e^x\\,dx=(x-1)e^x$. Fortegnet på $-1$ er nøkkelen.",
    },
    {
      question: "Hvilken substitusjon rydder roten i $\\int f(\\sqrt{x})\\,dx$?",
      options: ["$u=\\sqrt{x}$", "$u=x^2$", "$u=1/x$", "$u=\\ln x$"],
      explanation: "$u=\\sqrt{x}$ gir $x=u^2$, $dx=2u\\,du$ og fjerner roten. De andre innfører nye røtter.",
    },
    {
      question: "Hvorfor teller ikke $\\int x\\,e^{x^2}\\,dx$ som en gyldig konstruksjon av «krever både substitusjon og delvis»?",
      options: ["Substitusjon alene løser det", "Det krever delbrøk", "Det har ingen antiderivert", "Det er et uegentlig integral"],
      explanation: "$u=x^2$ gir $\\tfrac12\\int e^u\\,du$ — ferdig uten delvis. En ekte kjede må etterlate et delvis-integral, som $\\int x^3 e^{x^2}\\,dx$.",
    },
  ],
  'mat1100-4-6': [
    {
      question: "$\\int_1^{\\infty} x^{-p}\\,dx$ konvergerer nøyaktig når:",
      options: ["$p>1$", "$p<1$", "$p\\ge 1$", "$p\\le 1$"],
      explanation: "På uendelig intervall må integranden dø fort nok: konvergens $\\iff p>1$. Grensetilfellet $p=1$ (harmonisk) divergerer.",
    },
    {
      question: "$\\int_0^{1} x^{-p}\\,dx$ konvergerer nøyaktig når:",
      options: ["$p<1$", "$p>1$", "$p\\ge 1$", "$p\\le 1$"],
      explanation: "Nær $0$ er kriteriet speilvendt: konvergens $\\iff p<1$ (mild nok singularitet). $p=1$ divergerer.",
    },
    {
      question: "Konvergerer $\\int_1^{\\infty}\\dfrac{dx}{\\sqrt{x}}$?",
      options: ["Nei, den divergerer", "Ja, mot $2$", "Ja, mot $0$", "Ja, mot $1$"],
      explanation: "$x^{-1/2}$ er et $p$-integral på $\\infty$ med $p=\\tfrac12\\le 1$ → divergerer. Kriteriet $p>1$ er ikke oppfylt.",
    },
    {
      question: "Hva er $\\int_0^{1}\\dfrac{dx}{\\sqrt{x}}$?",
      options: ["$2$", "Divergerer", "$1$", "$\\infty$"],
      explanation: "$p=\\tfrac12<1$ → konvergent $p$-integral av 0-typen. $\\lim_{t\\to0^+}[2\\sqrt{x}]_t^1=2$.",
    },
    {
      question: "Hvordan føres $\\int_1^{\\infty} f(x)\\,dx$ korrekt?",
      options: ["$\\lim_{R\\to\\infty}\\int_1^{R} f\\,dx$", "Sett inn $\\infty$ i antiderivert", "$\\int_1^{R} f\\,dx$ direkte", "$\\lim_{R\\to 0}\\int_1^{R} f\\,dx$"],
      explanation: "$\\infty$ er ikke et tall — integrer opp til $R$ og la $R\\to\\infty$. «Sett inn $\\infty$» er et føringstrekk.",
    },
    {
      question: "GS-testen gir samme skjebne for $\\int f$ og $\\int g$ når $L=\\lim f/g$ er:",
      options: ["$0<L<\\infty$", "$L=0$", "$L=\\infty$", "$L=1$ kun"],
      explanation: "GS-testen krever endelig OG positiv grense. Blir $L=0$ eller $\\infty$, må du velge et annet $g$.",
    },
    {
      question: "For å vise at et integral KONVERGERER, klemmer du integranden:",
      options: ["Oppover mot noe konvergent", "Nedover mot noe konvergent", "Oppover mot noe divergent", "Nedover mot noe divergent"],
      explanation: "Mindre positivt areal enn et endelig areal er endelig. For divergens klemmer du derimot nedover mot noe divergent.",
    },
    {
      question: "Konvergerer $\\int_1^{\\infty}\\dfrac{2+\\sin x}{x^{2}}\\,dx$?",
      options: ["Ja, sammenlign med $3/x^2$", "Nei, den divergerer", "Ja, den er lik $\\pi/2$", "Kan ikke avgjøres"],
      explanation: "$|\\sin x|\\le 1$ gir $0<\\frac{2+\\sin x}{x^2}\\le\\frac{3}{x^2}$; $\\int 3/x^2$ er konvergent $p$-integral ($p=2$) → konvergerer.",
    },
    {
      question: "Konvergerer $\\int_1^{\\infty}\\dfrac{dx}{x}$?",
      options: ["Nei, den divergerer", "Ja, mot $1$", "Ja, mot $0$", "Ja, mot $\\ln 2$"],
      explanation: "$p=1$ → divergent $p$-integral ($\\ln R\\to\\infty$). At integranden $\\frac1x\\to 0$ er IKKE nok til konvergens.",
    },
    {
      question: "I hvilke punkter er $\\int_0^{\\infty}\\dfrac{dx}{\\sqrt{x}(1+x)}$ uegentlig?",
      options: ["Både i $0$ og ved $\\infty$", "Bare ved $\\infty$", "Bare i $0$", "Ingen — den er egentlig"],
      explanation: "Type 2 i $0$ (der $\\frac{1}{\\sqrt x}\\to\\infty$) OG type 1 ved $\\infty$. Splitt, og krev at begge stykker konvergerer.",
    },
    {
      question: "Samme integrand $x^{-1/2}$ — hvilket integral konvergerer?",
      options: ["$\\int_0^{1} x^{-1/2}\\,dx$", "$\\int_1^{\\infty} x^{-1/2}\\,dx$", "Begge konvergerer", "Ingen konvergerer"],
      explanation: "I $0$ konvergerer $p=\\tfrac12<1$; på $\\infty$ divergerer $p=\\tfrac12\\le 1$. Endepunktet avgjør — kriteriene er speilvendt.",
    },
    {
      question: "I GS-testen for $\\dfrac{x+1}{x^{3}+2x}$ — hvilken $g$ velger du?",
      options: ["$g=1/x^2$", "$g=1/x$", "$g=1/x^3$", "$g=x$"],
      explanation: "Behold dominerende ledd: teller $\\sim x$, nevner $\\sim x^3$, så $f\\sim\\frac{x}{x^3}=\\frac1{x^2}$. Da blir $L$ endelig og positiv.",
    },
    {
      question: "Absolutt konvergens ($\\int|f|$ konvergerer) medfører:",
      options: ["At $\\int f$ konvergerer", "At $\\int f$ divergerer", "Ingenting om $\\int f$", "At $f\\ge 0$"],
      explanation: "Absolutt konvergens medfører vanlig konvergens — nyttig når $f$ skifter fortegn, for testene krever positiv integrand.",
    },
    {
      question: "Konvergerer $\\int_1^{\\infty}\\dfrac{\\ln x}{x^{2}}\\,dx$?",
      options: ["Ja, verdien er $1$", "Nei, den divergerer", "Ja, verdien er $\\ln 2$", "Ja, verdien er $0$"],
      explanation: "Delvis + lim: $[-\\frac{\\ln x}{x}-\\frac1x]_1^R\\to 1$ (siden $\\frac{\\ln R}{R}\\to 0$). Konvergerer mot $1$.",
    },
    {
      question: "For å vise at et integral DIVERGERER, klemmer du integranden:",
      options: ["Nedover mot noe divergent", "Oppover mot noe divergent", "Nedover mot noe konvergent", "Oppover mot noe konvergent"],
      explanation: "Et større areal enn et uendelig areal er uendelig. Å overvurdere når du vil vise divergens beviser ingenting.",
    },
  ],
  'mat1100-4-7': [
    {
      question: "Et område dreies om $x$-aksen. Hvilken formel gir volumet?",
      options: ["$V=\\pi\\int_a^b f(x)^2\\,dx$", "$V=2\\pi\\int_a^b x f(x)\\,dx$", "$V=\\pi\\int_a^b f(x)\\,dx$", "$V=2\\pi\\int_a^b f(x)^2\\,dx$"],
      explanation: "Rotasjon om $x$-aksen → skiver med radius $f(x)$ og areal $\\pi f(x)^2$. Skallformelen $2\\pi\\int xf$ hører til $y$-aksen.",
    },
    {
      question: "Et område dreies om $y$-aksen. Hvilken formel gir volumet?",
      options: ["$V=2\\pi\\int_a^b x f(x)\\,dx$", "$V=\\pi\\int_a^b f(x)^2\\,dx$", "$V=2\\pi\\int_a^b f(x)^2\\,dx$", "$V=\\pi\\int_a^b x f(x)\\,dx$"],
      explanation: "Rotasjon om $y$-aksen → sylinderskall med radius $x$ og omkrets $2\\pi x$. Skiveformelen $\\pi\\int f^2$ hører til $x$-aksen.",
    },
    {
      question: "Hvilken faktor står foran skiveintegralet?",
      options: ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$4\\pi$"],
      explanation: "Skivens areal er $\\pi r^2$, så skivemetoden har faktor $\\pi$. Skallmetoden har $2\\pi$ (omkrets).",
    },
    {
      question: "Hvilken faktor står foran skallintegralet?",
      options: ["$2\\pi$", "$\\pi$", "$\\pi/2$", "$4\\pi$"],
      explanation: "Skallets omkrets er $2\\pi x$, så skallmetoden har faktor $2\\pi$. Skivemetoden har $\\pi$.",
    },
    {
      question: "Området mellom ytre $f$ og indre $g$ dreies om $x$-aksen. Volumet er:",
      options: ["$\\pi\\int_a^b (f^2-g^2)\\,dx$", "$\\pi\\int_a^b (f-g)^2\\,dx$", "$\\pi\\int_a^b (f-g)\\,dx$", "$2\\pi\\int_a^b (f-g)\\,dx$"],
      explanation: "Ring = ytre skive minus indre skive: $\\pi(f^2-g^2)$. Det er kvadratene som trekkes fra, aldri $(f-g)^2$.",
    },
    {
      question: "Buelengden av $y=f(x)$ fra $a$ til $b$ er:",
      options: ["$\\int_a^b\\sqrt{1+f'(x)^2}\\,dx$", "$\\int_a^b\\sqrt{1+f(x)^2}\\,dx$", "$\\int_a^b (1+f'(x)^2)\\,dx$", "$\\int_a^b f'(x)\\,dx$"],
      explanation: "Hvert kurveelement er hypotenusen $\\sqrt{1+f'^2}\\,dx$. Det er den DERIVERTE $f'$ under roten, ikke $f$.",
    },
    {
      question: "Området under $y=x$, $0\\le x\\le 2$, dreies om $x$-aksen (kjegle). Volumet er:",
      options: ["$\\dfrac{8\\pi}{3}$", "$\\dfrac{4\\pi}{3}$", "$4\\pi$", "$8\\pi$"],
      explanation: "Skiver: $\\pi\\int_0^2 x^2\\,dx=\\pi\\cdot\\tfrac83=\\tfrac{8\\pi}{3}$. Stemmer med kjegleformelen $\\tfrac13\\pi r^2 h$.",
    },
    {
      question: "Området under $y=\\sin x$, $0\\le x\\le\\pi$, dreies om $x$-aksen. Volumet er:",
      options: ["$\\dfrac{\\pi^2}{2}$", "$\\dfrac{\\pi}{2}$", "$\\pi^2$", "$2\\pi^2$"],
      explanation: "Skiver: $\\pi\\int_0^\\pi\\sin^2 x\\,dx=\\pi\\cdot\\tfrac\\pi2=\\tfrac{\\pi^2}{2}$ (halvvinkelformel).",
    },
    {
      question: "Området under $y=\\ln x$, $1\\le x\\le e$, dreies om $y$-aksen. Riktig oppsett er:",
      options: ["$2\\pi\\int_1^e x\\ln x\\,dx$", "$\\pi\\int_1^e (\\ln x)^2\\,dx$", "$2\\pi\\int_1^e (\\ln x)^2\\,dx$", "$\\pi\\int_1^e x\\ln x\\,dx$"],
      explanation: "Om $y$-aksen → skall: radius $x$, høyde $\\ln x$, faktor $2\\pi$. Integralet løses med delvis.",
    },
    {
      question: "I skallmetoden er radien til et skall lik:",
      options: ["Avstanden $x$ til $y$-aksen", "Funksjonsverdien $f(x)$", "Halve intervallet", "Omkretsen $2\\pi x$"],
      explanation: "Radien er $x$ (avstanden til rotasjonsaksen); $f(x)$ er høyden. I skivemetoden er derimot $f(x)$ radien.",
    },
    {
      question: "Området under $y=\\sqrt{x}$, $0\\le x\\le 4$, dreies om $x$-aksen. Volumet er:",
      options: ["$8\\pi$", "$4\\pi$", "$16\\pi$", "$\\dfrac{8\\pi}{3}$"],
      explanation: "Skiver: $\\pi\\int_0^4(\\sqrt x)^2\\,dx=\\pi\\int_0^4 x\\,dx=8\\pi$. Kvadratet fjerner roten.",
    },
    {
      question: "Området under $y=x^2$, $0\\le x\\le 2$, dreies om $y$-aksen. Volumet er:",
      options: ["$8\\pi$", "$\\dfrac{32\\pi}{5}$", "$4\\pi$", "$16\\pi$"],
      explanation: "Skall: $2\\pi\\int_0^2 x\\cdot x^2\\,dx=2\\pi\\int_0^2 x^3\\,dx=8\\pi$.",
    },
    {
      question: "Hva er den vanligste feilen i omdreiningsvolum-oppgaver?",
      options: ["Bytte skive og skall", "Glemme å tegne akser", "Bruke for få desimaler", "Regne areal i stedet"],
      explanation: "Skive hører til $x$-aksen, skall til $y$-aksen. Bytter du metode etter akse, blir hele oppgaven feil.",
    },
    {
      question: "Buelengden av $y=\\tfrac23 x^{3/2}$ fra $0$ til $3$ er:",
      options: ["$\\dfrac{14}{3}$", "$\\dfrac{7}{3}$", "$\\dfrac{8}{3}$", "$7$"],
      explanation: "$f'=\\sqrt{x}$, så $1+f'^2=1+x$; $\\int_0^3\\sqrt{1+x}\\,dx=\\tfrac23(8-1)=\\tfrac{14}{3}$.",
    },
    {
      question: "I skallmetoden om $y$-aksen er høyden på skallet lik:",
      options: ["Funksjonsverdien $f(x)$", "Avstanden $x$", "Omkretsen $2\\pi x$", "Kvadratet $f(x)^2$"],
      explanation: "Høyden er $f(x)$ og radien er $x$; volumet av ett skall er $2\\pi x\\cdot f(x)\\,dx$.",
    },
  ],
  'mat1100-5-1': [
    {
      question: "Hva er $\\det\\begin{pmatrix}3&1\\\\ 5&2\\end{pmatrix}$?",
      options: ["$1$", "$11$", "$13$", "$-1$"],
      explanation: "$\\det=ad-bc=3\\cdot2-1\\cdot5=6-5=1$. Distraktoren $11$ er $ad+bc$, $13$ er $3\\cdot5-2\\cdot1$ (feil elementer), $-1$ er $bc-ad$.",
    },
    {
      question: "Volumet av en pyramide utspent av kantvektorene $\\mathbf{u},\\mathbf{v},\\mathbf{w}$ er:",
      options: ["$\\tfrac16\\,|\\det[\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}]|$", "$\\tfrac13\\,|\\det[\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}]|$", "$\\tfrac12\\,|\\det[\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}]|$", "$|\\det[\\mathbf{u}\\;\\mathbf{v}\\;\\mathbf{w}]|$"],
      explanation: "Pyramiden er $\\tfrac13\\cdot$grunnflate$\\cdot$høyde, og grunnflaten er halve parallellogrammet: $\\tfrac13\\cdot\\tfrac12=\\tfrac16$. De andre er de vanlige glemte faktorene; $|\\det|$ alene er parallellepipedvolumet.",
    },
    {
      question: "To vektorer $\\mathbf{a}$ og $\\mathbf{b}$ er ortogonale nøyaktig når:",
      options: ["$\\mathbf{a}\\cdot\\mathbf{b}=0$", "$\\mathbf{a}\\times\\mathbf{b}=\\mathbf{0}$", "$|\\mathbf{a}|=|\\mathbf{b}|$", "$\\mathbf{a}\\cdot\\mathbf{b}=1$"],
      explanation: "Skalarproduktet er $|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$, som er null når $\\theta=90^\\circ$. $\\mathbf{a}\\times\\mathbf{b}=\\mathbf{0}$ betyr derimot parallelle vektorer.",
    },
    {
      question: "Arealet av parallellogrammet utspent av $\\mathbf{a}=(5,2)$ og $\\mathbf{b}=(1,3)$ er:",
      options: ["$13$", "$17$", "$7$", "$11$"],
      explanation: "Areal $=|a_1b_2-a_2b_1|=|5\\cdot3-2\\cdot1|=13$. Distraktoren $17$ er $5\\cdot3+2\\cdot1$, $7$ er $5\\cdot1+2\\cdot1$, $11$ er en annen kombinasjon.",
    },
    {
      question: "I kofaktorutvikling langs første rad er fortegnene i rekkefølge:",
      options: ["$+,\\,-,\\,+$", "$+,\\,+,\\,+$", "$-,\\,+,\\,-$", "$+,\\,-,\\,-$"],
      explanation: "Sjakkbrettmønsteret $(-1)^{i+j}$ gir $+,-,+$ langs første rad. Andre rad ville gitt $-,+,-$.",
    },
    {
      question: "Kryssproduktet $\\mathbf{a}\\times\\mathbf{b}$ er en vektor som:",
      options: ["står vinkelrett på både $\\mathbf{a}$ og $\\mathbf{b}$", "er parallell med $\\mathbf{a}$", "alltid har lengde $1$", "er lik tallet $\\mathbf{a}\\cdot\\mathbf{b}$"],
      explanation: "$\\mathbf{a}\\times\\mathbf{b}$ står normalt på planet til $\\mathbf{a}$ og $\\mathbf{b}$, og lengden er parallellogramarealet — ikke $1$. Skalarproduktet er derimot et tall.",
    },
    {
      question: "Volumet av parallellepipedet utspent av $\\mathbf{a},\\mathbf{b},\\mathbf{c}$ er:",
      options: ["$|(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{c}|$", "$(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{c}$ uten tallverdi", "$|\\mathbf{a}\\times\\mathbf{b}|+|\\mathbf{c}|$", "$|\\mathbf{a}|\\cdot|\\mathbf{b}|\\cdot|\\mathbf{c}|$"],
      explanation: "Trippelproduktet gir volumet, men det kan bli negativt (orientering), så vi tar tallverdien. Å legge sammen lengder eller gange dem gir feil (det siste bare når alt er ortogonalt).",
    },
    {
      question: "En determinant er lik null. Hva betyr det for vektorene i radene (i $\\mathbb{R}^3$)?",
      options: ["De ligger i samme plan (komplanære)", "De er parvis ortogonale", "De har alle lengde $1$", "Volumet er uendelig stort"],
      explanation: "Determinant $0$ betyr trippelprodukt $0$, altså volum $0$ — vektorene ligger i étt plan. Ortogonalitet har ikke noe med determinantens verdi å gjøre direkte.",
    },
    {
      question: "For å finne volum fra fire hjørner $P,Q,R,S$ skal du først lage:",
      options: ["kantvektorene $Q-P,\\,R-P,\\,S-P$", "posisjonsvektorene til $P,Q,R,S$", "summen $P+Q+R+S$", "midtpunktet av de fire punktene"],
      explanation: "Volumformlene bruker kantvektorer fra ett felles hjørne. Å bruke posisjonsvektorene direkte er en dokumentert gjengangerfeil.",
    },
    {
      question: "Hva er $\\det\\begin{pmatrix}2&1&3\\\\ 0&4&1\\\\ 5&2&1\\end{pmatrix}$?",
      options: ["$-51$", "$51$", "$-9$", "$-41$"],
      explanation: "Utvikling langs første søyle: $2(4-2)+5(1-12)=4-55=-51$. Fortegnsfeil på siste ledd gir $-41$; glemt tallverdi-orientering gir $51$.",
    },
    {
      question: "Arealet av trekanten med $\\mathbf{u}$ og $\\mathbf{v}$ som to sider er:",
      options: ["$\\tfrac12\\,|\\det[\\mathbf{u}\\;\\mathbf{v}]|$", "$|\\det[\\mathbf{u}\\;\\mathbf{v}]|$", "$2\\,|\\det[\\mathbf{u}\\;\\mathbf{v}]|$", "$\\tfrac16\\,|\\det[\\mathbf{u}\\;\\mathbf{v}]|$"],
      explanation: "Trekanten er halve parallellogrammet, så arealet er $\\tfrac12$ av determinantens tallverdi. $\\tfrac16$ hører til pyramidevolum, ikke areal.",
    },
    {
      question: "Skalar trippelprodukt $(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{c}$ er alltid lik:",
      options: ["$\\det[\\mathbf{a}\\;\\mathbf{b}\\;\\mathbf{c}]$", "$\\mathbf{a}\\times(\\mathbf{b}\\cdot\\mathbf{c})$", "lengden $|\\mathbf{a}\\times\\mathbf{b}|$", "summen $\\mathbf{a}+\\mathbf{b}+\\mathbf{c}$"],
      explanation: "Trippelproduktet er determinanten med de tre vektorene som rader. Uttrykket $\\mathbf{b}\\cdot\\mathbf{c}$ er et tall, så $\\mathbf{a}\\times(\\mathbf{b}\\cdot\\mathbf{c})$ er udefinert.",
    },
    {
      question: "Determinanten $\\det[\\mathbf{a}\\;\\mathbf{b}\\;\\mathbf{c}]=29$. Volumet av parallellepipedet er da:",
      options: ["$29$", "$\\tfrac{29}{6}$", "$29^2$", "$-29$"],
      explanation: "Volum er tallverdien av determinanten, altså $29$. Faktoren $\\tfrac16$ gjelder pyramider, ikke parallellepiped; volum er aldri negativt.",
    },
    {
      question: "Hvis du bytter om to rader i en $3\\times3$-determinant, så:",
      options: ["skifter determinanten fortegn", "er determinanten uendret", "blir determinanten alltid $0$", "dobles determinanten"],
      explanation: "Radbytte snur fortegnet. Å legge et multiplum av én rad til en annen lar den derimot være uendret.",
    },
    {
      question: "Lengden $|\\mathbf{a}\\times\\mathbf{b}|$ er lik:",
      options: ["arealet av parallellogrammet utspent av $\\mathbf{a}$ og $\\mathbf{b}$", "volumet de spenner ut", "skalarproduktet $\\mathbf{a}\\cdot\\mathbf{b}$", "vinkelen mellom $\\mathbf{a}$ og $\\mathbf{b}$"],
      explanation: "Per definisjon er $|\\mathbf{a}\\times\\mathbf{b}|=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$, nettopp parallellogramarealet. Skalarproduktet gir cosinus-uttrykket i stedet.",
    },
  ],
  'mat1100-5-2': [
    {
      question: "Inversen av $\\begin{pmatrix}a&b\\\\ c&d\\end{pmatrix}$ (når $\\det\\ne0$) er:",
      options: ["$\\tfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\ -c&a\\end{pmatrix}$", "$\\tfrac{1}{ad-bc}\\begin{pmatrix}a&-b\\\\ -c&d\\end{pmatrix}$", "$\\tfrac{1}{ad-bc}\\begin{pmatrix}d&b\\\\ c&a\\end{pmatrix}$", "$\\begin{pmatrix}d&-b\\\\ -c&a\\end{pmatrix}$"],
      explanation: "Bytt om $a$ og $d$, skift fortegn på $b$ og $c$, og del på $\\det$. Distraktor 2 glemmer å bytte diagonalen, distraktor 3 glemmer fortegnsskiftet, distraktor 4 glemmer $1/\\det$.",
    },
    {
      question: "En kvadratisk matrise $A$ er inverterbar nøyaktig når:",
      options: ["$\\det A\\ne 0$", "$\\det A=0$", "$A$ er symmetrisk", "alle elementer er positive"],
      explanation: "Kriteriet er inverterbar $\\Leftrightarrow \\det A\\ne0$. Er $\\det A=0$ er matrisen singulær og har ingen invers.",
    },
    {
      question: "Er $AB=BA$ for alle kvadratiske matriser $A,B$?",
      options: ["Nei — produktet er ikke kommutativt", "Ja, akkurat som for vanlige tall", "Ja, når begge matrisene er $2\\times2$", "Bare når determinantene er like store"],
      explanation: "$AB\\ne BA$ som hovedregel. Identitetsmatrisen er et unntak ($AI=IA$), men generelt betyr rekkefølgen noe.",
    },
    {
      question: "Hvis $\\det A=2$ og $\\det B=5$, hva er $\\det(AB)$?",
      options: ["$10$", "$7$", "$25$", "$\\tfrac{5}{2}$"],
      explanation: "Produktregelen: $\\det(AB)=\\det A\\cdot\\det B=2\\cdot5=10$. Distraktoren $7$ er summen, $25=5^2$, $\\tfrac52$ er kvotienten.",
    },
    {
      question: "Hvis $\\det A=3$, hva er $\\det(A^4)$?",
      options: ["$81$", "$12$", "$7$", "$64$"],
      explanation: "Potenskorollaret: $\\det(A^4)=(\\det A)^4=3^4=81$. Distraktoren $12$ er $3\\cdot4$, $64=4^3$ (byttet base/eksponent).",
    },
    {
      question: "For å bekrefte at $B$ er inversen til $A$ holder det å sjekke at:",
      options: ["$AB=I$ (da følger $BA=I$)", "$A+B=I$", "$\\det B=\\det A$", "$AB=BA$ uansett verdi"],
      explanation: "Fasit 2014: $AB=I$ er nok — $BA=I$ følger automatisk for kvadratiske matriser. Du trenger ikke regne begge veier.",
    },
    {
      question: "Hva er $\\det\\begin{pmatrix}2&4\\\\ 1&2\\end{pmatrix}$, og er matrisen inverterbar?",
      options: ["$0$ — ikke inverterbar", "$0$ — inverterbar", "$8$ — inverterbar", "$2$ — ikke inverterbar"],
      explanation: "$\\det=2\\cdot2-4\\cdot1=0$, så matrisen er singulær og har ingen invers. $\\det=0$ og inverterbar utelukker hverandre.",
    },
    {
      question: "Identitetsmatrisen $I$ oppfyller for enhver kvadratisk $A$:",
      options: ["$AI=IA=A$", "$AI=0$", "$AI=I$ alltid", "$AI=A^{-1}$"],
      explanation: "$I$ virker som tallet $1$: å gange med den endrer ingenting. Den er også målet ved invertering ($AA^{-1}=I$).",
    },
    {
      question: "Produktet $\\begin{pmatrix}2&1\\\\ 0&3\\end{pmatrix}\\begin{pmatrix}1&0\\\\ 2&1\\end{pmatrix}$ er:",
      options: ["$\\begin{pmatrix}4&1\\\\ 6&3\\end{pmatrix}$", "$\\begin{pmatrix}2&0\\\\ 0&3\\end{pmatrix}$", "$\\begin{pmatrix}4&6\\\\ 1&3\\end{pmatrix}$", "$\\begin{pmatrix}3&1\\\\ 2&4\\end{pmatrix}$"],
      explanation: "Rad ganger søyle: øvre rad $(2\\cdot1+1\\cdot2,\\;2\\cdot0+1\\cdot1)=(4,1)$; nedre $(0\\cdot1+3\\cdot2,\\;0+3\\cdot1)=(6,3)$. Distraktor 3 er den transponerte (rader/søyler byttet).",
    },
    {
      question: "En matrise med $\\det=0$ kalles:",
      options: ["singulær", "ortogonal", "invertibel", "diagonal"],
      explanation: "Singulær = ingen invers. En invertibel (regulær) matrise har derimot $\\det\\ne0$.",
    },
    {
      question: "For familien $M(a)=\\begin{pmatrix}1&a\\\\ 0&1\\end{pmatrix}$ gjelder $M(a)M(b)=$?",
      options: ["$M(a+b)$", "$M(ab)$", "$M(a-b)$", "$M(a)+M(b)$"],
      explanation: "Multiplikasjon svarer til addisjon av parameteren: $M(a)M(b)=M(a+b)$. Derfor er $M(a)^{-1}=M(-a)$.",
    },
    {
      question: "Inversen $M(a)^{-1}$ for $M(a)=\\begin{pmatrix}1&a\\\\ 0&1\\end{pmatrix}$ er:",
      options: ["$M(-a)$", "$M(a)$", "$M(1/a)$", "$M(2a)$"],
      explanation: "Siden $M(a)M(-a)=M(0)=I$, er inversen $M(-a)=\\begin{pmatrix}1&-a\\\\ 0&1\\end{pmatrix}$.",
    },
    {
      question: "Matrise-vektor-produktet $\\begin{pmatrix}1&2\\\\ 3&0\\end{pmatrix}\\begin{pmatrix}2\\\\ -1\\end{pmatrix}$ er:",
      options: ["$(0,\\,6)$", "$(4,\\,6)$", "$(2,\\,-2)$", "$(0,\\,3)$"],
      explanation: "Første komponent $1\\cdot2+2\\cdot(-1)=0$; andre $3\\cdot2+0\\cdot(-1)=6$. Distraktoren $(2,-2)$ er elementvis produkt (feil operasjon).",
    },
    {
      question: "Hvorfor krever inversformelen at $\\det\\ne0$?",
      options: ["Fordi vi deler på $\\det$ i formelen", "Fordi $\\det$ ellers ikke ville vært et helt tall", "Fordi matrisen da ikke lenger er kvadratisk", "Fordi $\\det$ alltid må være strengt positiv"],
      explanation: "Inversen har faktoren $1/\\det$. Er $\\det=0$, er brøken udefinert — matrisen er singulær og har ingen invers. Fortegnet på $\\det$ spiller ingen rolle.",
    },
    {
      question: "Determinanten av inversen, $\\det(A^{-1})$, er lik:",
      options: ["$\\tfrac{1}{\\det A}$", "$\\det A$", "$-\\det A$", "$0$"],
      explanation: "Siden $A A^{-1}=I$ og $\\det I=1$, gir produktregelen $\\det A\\cdot\\det(A^{-1})=1$, altså $\\det(A^{-1})=1/\\det A$.",
    },
  ],
  'mat1100-5-3': [
    {
      question: "I en overgangsmodell er neste tilstand gitt ved:",
      options: ["$\\mathbf{x}_{n+1}=M\\mathbf{x}_n$", "$\\mathbf{x}_{n+1}=\\mathbf{x}_n+M$", "$\\mathbf{x}_{n+1}=M+\\mathbf{x}_n$", "$\\mathbf{x}_{n+1}=\\mathbf{x}_n M^{-1}$"],
      explanation: "Overgangen er én matrise-vektor-multiplikasjon $M\\mathbf{x}_n$. Å legge til $M$ eller bruke inversen er feil operasjon.",
    },
    {
      question: "Med konvensjonen rader = mottaker er element $M_{ij}$:",
      options: ["andelen som går fra kategori $j$ til kategori $i$", "andelen som går fra kategori $i$ til kategori $j$", "alltid lik $\\tfrac12$", "determinanten til raden"],
      explanation: "Rad = mottaker, søyle = avsender: $M_{ij}$ er strømmen fra $j$ inn til $i$. Bytter du dette, får du den transponerte matrisen (den dokumenterte fella).",
    },
    {
      question: "Å ta systemet $k$ steg framover svarer til å gange starttilstanden med:",
      options: ["$M^k$", "$kM$", "$M^{-k}$", "$M/k$"],
      explanation: "$\\mathbf{x}_k=M^k\\mathbf{x}_0$ — gjentatt anvendelse av $M$. $kM$ er skalering (feil), $M^{-k}$ går bakover.",
    },
    {
      question: "«Finnes en entydig vei ett steg tilbake?» avgjøres av:",
      options: ["om $\\det M\\ne0$", "om alle elementer er positive", "om $M$ er symmetrisk", "om søylene summerer til $1$"],
      explanation: "Entydig vei tilbake $\\Leftrightarrow$ $M$ inverterbar $\\Leftrightarrow$ $\\det M\\ne0$. Stokastisitet (søylesum $1$) sier ingenting om invertibilitet.",
    },
    {
      question: "En overgangsmatrise har $\\det M=0$. Hva betyr det for veien tilbake?",
      options: ["Ingen entydig vei tilbake (singulær)", "Det finnes da akkurat to veier tilbake", "Veien tilbake er matrisen $M$ selv", "Systemet blir stående helt stille"],
      explanation: "$\\det=0$ betyr singulær: informasjon går tapt, og ulike fortilstander kan gi samme neste tilstand. Ingen entydig rekonstruksjon.",
    },
    {
      question: "En likevektsfordeling $\\mathbf{v}$ oppfyller:",
      options: ["$M\\mathbf{v}=\\mathbf{v}$", "$M\\mathbf{v}=\\mathbf{0}$", "$\\det M=1$", "$\\mathbf{v}=M^{-1}$"],
      explanation: "Likevekt = uendret av overgangen: $M\\mathbf{v}=\\mathbf{v}$, altså en egenvektor med egenverdi $k=1$. $M\\mathbf{v}=\\mathbf{0}$ ville betydd at alt forsvinner.",
    },
    {
      question: "Når du bygger overgangsmatrisen fra en tekst, skal du:",
      options: ["begrunne hver rad ut fra teksten", "gjette matrisen etter magefølelse", "alltid bruke identitetsmatrisen", "velge den med størst determinant"],
      explanation: "Fasit krever rad-for-rad-begrunnelse. Å sette matrisen opp etter magefølelse gir ofte byttede rader/søyler.",
    },
    {
      question: "For $M=\\begin{pmatrix}0{,}8&0{,}3\\\\ 0{,}2&0{,}7\\end{pmatrix}$ og $\\mathbf{x}_0=(500,500)$ er $\\mathbf{x}_1=M\\mathbf{x}_0$ lik:",
      options: ["$(550,\\,450)$", "$(500,\\,500)$", "$(450,\\,550)$", "$(575,\\,425)$"],
      explanation: "$0{,}8\\cdot500+0{,}3\\cdot500=550$ og $0{,}2\\cdot500+0{,}7\\cdot500=450$. $(575,425)$ er derimot tilstanden etter TO steg.",
    },
    {
      question: "I et induksjonsbevis for en matrisepotens bruker induksjonssteget:",
      options: ["$M^{k+1}=M^k\\cdot M$ (elementvis)", "addisjonen $M^{k+1}=M^k+M$", "at mønsteret opplagt fortsetter videre", "kvadreringen $M^{k+1}=(M^k)^2$"],
      explanation: "Steget er matrisemultiplikasjonen $M^k\\cdot M$ med hypotesen satt inn — vist ledd for ledd. «Mønsteret fortsetter» er ikke et bevis.",
    },
    {
      question: "Hva må et induksjonsbevis alltid inneholde i tillegg til induksjonssteget?",
      options: ["et eksplisitt basissteg $P(1)$", "en fullstendig beregning av $\\det M$", "en likevektsvektor for matrisen", "en utregnet invers matrise $M^{-1}$"],
      explanation: "Basissteget $P(1)$ må skrives ut — fasit trekker om det mangler. Determinant og invers hører til andre deler av kapitlet.",
    },
    {
      question: "En stokastisk overgangsmatrise kjennetegnes ved at:",
      options: ["hver søyle summerer til $1$", "determinanten alltid er lik $1$", "den er sin egen inverse matrise", "alle elementene er nøyaktig like"],
      explanation: "Søylesum $1$ betyr at en fast total fordeles uten tap — ingen skapes eller forsvinner. Det sier ikke at $\\det=1$.",
    },
    {
      question: "For $M=\\begin{pmatrix}0{,}8&0{,}3\\\\ 0{,}2&0{,}7\\end{pmatrix}$ er $\\det M$ lik:",
      options: ["$0{,}5$", "$0{,}62$", "$1$", "$0$"],
      explanation: "$\\det=0{,}8\\cdot0{,}7-0{,}3\\cdot0{,}2=0{,}56-0{,}06=0{,}5$. Distraktoren $0{,}62$ legger til i stedet for å trekke fra.",
    },
    {
      question: "Rekursjonslikningen $U_{n+1}=0\\cdot U_n+3\\,V_n$ betyr at:",
      options: ["nye unge kommer bare fra voksnes avkom", "hver unge reproduserer tre ganger selv", "de voksne forsvinner deretter helt", "totalen er alltid bevart uansett"],
      explanation: "Koeffisienten $0$ foran $U_n$ sier at unge ikke bidrar til nye unge; $3V_n$ at hver voksen gir 3 unger. $0$-leddet skal skrives ut for oversiktens skyld.",
    },
    {
      question: "Byttematrisen $M=\\begin{pmatrix}0&1\\\\ 1&0\\end{pmatrix}$ har $M^n$ lik:",
      options: ["$I$ for partall $n$ og $M$ for oddetall $n$", "matrisen $M$ selv for alle $n$", "identiteten $I$ for alle verdier av $n$", "det skalerte produktet $nM$"],
      explanation: "To bytter bringer deg tilbake til start ($M^2=I$), så $M^n$ veksler: partall gir $I$, oddetall gir $M$. Dette er partall/oddetall-casedelingen.",
    },
    {
      question: "Endres flytteratene fra et visst år (ny matrise $M'$ i $m$ år etter $j$ år med $M$), er tilstanden:",
      options: ["$M'^{\\,m}M^{\\,j}\\mathbf{x}_0$", "$M^{\\,j}M'^{\\,m}\\mathbf{x}_0$", "$(M+M')\\mathbf{x}_0$", "$M'^{\\,m}+M^{\\,j}$"],
      explanation: "Den som virker sist står lengst til venstre: først $j$ år med $M$, så $m$ år med $M'$, gir $M'^{\\,m}M^{\\,j}\\mathbf{x}_0$. Matriser kommuterer ikke, så rekkefølgen betyr noe.",
    },
  ],
  'mat1100-5-4': [
    {
      question: "Hva er $\\nabla f$ for $f(x,y)=x^2y+y^3$?",
      options: ["$(2xy,\\ x^2+3y^2)$", "$(x^2+3y^2,\\ 2xy)$", "$(2xy,\\ 3y^2)$", "$(2x,\\ 3y^2)$"],
      explanation: "$f_x=2xy$ (hold $y$ konstant), $f_y=x^2+3y^2$ (begge ledd bidrar). Rekkefølgen er $(f_x,f_y)$.",
    },
    {
      question: "Hva er den partiellderiverte $f_y$ for $f(x,y)=x^3-2xy^2$?",
      options: ["$-4xy$", "$3x^2-2y^2$", "$-2y^2$", "$-4xy^2$"],
      explanation: "Hold $x$ konstant: $x^3\\to 0$ og $-2xy^2\\to -2x\\cdot 2y=-4xy$. Leddet $3x^2-2y^2$ er $f_x$.",
    },
    {
      question: "Hva er retningsderiverten til $f$ i $\\mathbf a$ i retningen $\\mathbf r$ (kursets konvensjon)?",
      options: ["$\\nabla f(\\mathbf a)\\cdot\\mathbf r$", "$|\\nabla f(\\mathbf a)|\\cdot|\\mathbf r|$", "$\\nabla f(\\mathbf a)+\\mathbf r$", "$\\nabla f(\\mathbf a)\\times\\mathbf r$"],
      explanation: "Konvensjonen er skalarproduktet $f'(\\mathbf a;\\mathbf r)=\\nabla f(\\mathbf a)\\cdot\\mathbf r$ — gjelder også for unormalisert $\\mathbf r$.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(4,1)$. Hva er retningsderiverten i retningen $\\mathbf r=(2,1)$?",
      options: ["$9$", "$\\dfrac{9}{\\sqrt5}$", "$5$", "$\\sqrt{17}$"],
      explanation: "$\\mathbf r$ er oppgitt direkte, så $(4,1)\\cdot(2,1)=8+1=9$. $9/\\sqrt5$ ville vært for enhetsvektoren; $\\sqrt{17}$ er $|\\nabla f|$.",
    },
    {
      question: "Når skal retningsvektoren $\\mathbf r$ normaliseres før du regner retningsderivert?",
      options: ["Bare når oppgaven ber om enhetsvektor eller «retningen til»", "Alltid, uansett formulering", "Aldri i dette kurset", "Bare når retningsvektoren $\\mathbf r$ har tre eller flere komponenter"],
      explanation: "Konvensjonen gjelder for oppgitt $\\mathbf r$; du normaliserer kun ved «enhetsvektor»/«retningen til». Sjekk om $\\mathbf r$ alt har lengde 1.",
    },
    {
      question: "I hvilken retning vokser $f$ raskest i punktet $\\mathbf a$?",
      options: ["I retningen til $\\nabla f(\\mathbf a)$", "I retningen til $-\\nabla f(\\mathbf a)$", "Normalt på $\\nabla f(\\mathbf a)$", "I retningen $|\\nabla f(\\mathbf a)|$"],
      explanation: "Raskest vekst følger gradienten. $-\\nabla f$ gir raskest fall; normalt på $\\nabla f$ gir rate 0.",
    },
    {
      question: "Hva er den maksimale vekstraten til $f$ i et punkt?",
      options: ["$|\\nabla f(\\mathbf a)|$", "$\\nabla f(\\mathbf a)$", "$\\nabla f(\\mathbf a)\\cdot\\mathbf a$", "$\\dfrac{1}{|\\nabla f(\\mathbf a)|}$"],
      explanation: "Maksimal rate er lengden av gradienten (et tall), ikke gradientvektoren selv.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(3,4)$. Hva er den maksimale vekstraten?",
      options: ["$5$", "$7$", "$25$", "$(3,4)$"],
      explanation: "$|\\nabla f|=\\sqrt{3^2+4^2}=\\sqrt{25}=5$. $7$ er summen $3+4$; $(3,4)$ er en vektor, ikke en rate.",
    },
    {
      question: "Retningsderiverten er 0 i retningen $\\mathbf r$ nøyaktig når:",
      options: ["$\\mathbf r$ står normalt på $\\nabla f(\\mathbf a)$", "$\\mathbf r$ er parallell med $\\nabla f(\\mathbf a)$", "$|\\mathbf r|=0$", "$\\mathbf r=\\nabla f(\\mathbf a)$"],
      explanation: "$\\nabla f\\cdot\\mathbf r=0\\iff \\mathbf r\\perp\\nabla f$. Parallell gir maksimal (ikke null) rate.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(2,5)$. Hvilken vektor er en nullretning?",
      options: ["$(5,-2)$", "$(2,5)$", "$(-2,-5)$", "$(5,2)$"],
      explanation: "Bytt komponenter og sett minus: $(5,-2)$, og $(2,5)\\cdot(5,-2)=10-10=0$. $(5,2)$ gir $10+10\\ne0$.",
    },
    {
      question: "Hva forteller fortegnet til en retningsderivert deg?",
      options: ["Om $f$ vokser (+), avtar (−) eller er flat (0) i den retningen", "Hvor bratt nivåkurven er", "Om gradienten tilfeldigvis er en enhetsvektor nettopp i dette punktet", "Om punktet er et toppunkt"],
      explanation: "Positivt: $f$ vokser; negativt: avtar; null: flat. Denne tolkningen hører med i konklusjonssetningen.",
    },
    {
      question: "Hvordan står gradienten $\\nabla f$ i forhold til nivåkurven gjennom punktet?",
      options: ["Den står normalt på nivåkurven", "Den er tangent til nivåkurven", "Den peker langs nivåkurven mot lavere verdier", "Den er alltid en enhetsvektor"],
      explanation: "$\\nabla f$ står normalt på nivåkurven og peker mot økende verdier. Tangenten til nivåkurven er derimot en nullretning.",
    },
    {
      question: "Kjerneregelen langs en kurve $\\mathbf r(t)$ sier at $\\dfrac{d}{dt}f(\\mathbf r(t))$ er lik:",
      options: ["$\\nabla f(\\mathbf r(t))\\cdot\\mathbf r'(t)$", "$\\nabla f(\\mathbf r(t))\\cdot\\mathbf r(t)$", "$|\\nabla f(\\mathbf r(t))|\\cdot|\\mathbf r'(t)|$", "$\\nabla f(\\mathbf r'(t))$"],
      explanation: "Skalarproduktet av gradienten i punktet og fartsvektoren $\\mathbf r'(t)$.",
    },
    {
      question: "$f(x,y,z)=xyz$. Hva er $\\nabla f$?",
      options: ["$(yz,\\ xz,\\ xy)$", "$(xy,\\ yz,\\ xz)$", "$(x,\\ y,\\ z)$", "$(yz,\\ xy,\\ xz)$"],
      explanation: "$f_x=yz$, $f_y=xz$, $f_z=xy$ — hver variabel deriveres mens de to andre holdes konstante.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(1,2,2)$. Hva er den maksimale vekstraten?",
      options: ["$3$", "$5$", "$9$", "$\\sqrt{5}$"],
      explanation: "$|(1,2,2)|=\\sqrt{1+4+4}=\\sqrt9=3$. $5$ er komponentsummen; $9$ er kvadratsummen.",
    },
    {
      question: "En student svarer at «$f$ vokser raskest med rate $(4,1)$». Hva er galt?",
      options: ["$(4,1)$ er en retning (vektor), ikke en rate; raten er tallet $|\\nabla f|=\\sqrt{17}$", "Ingenting, svaret er riktig", "Retningen skulle vært $(1,4)$", "Raten skulle vært negativ"],
      explanation: "Retning og rate forveksles: retningen er vektoren $(4,1)$, den maksimale raten er tallet $\\sqrt{17}$.",
    },
    {
      question: "$g(x,y)=x^2-y^2$, $\\mathbf a=(3,1)$. Hva er $\\nabla g(\\mathbf a)$?",
      options: ["$(6,-2)$", "$(6,2)$", "$(2x,-2y)$", "$(-2,6)$"],
      explanation: "$g_x=2x=6$, $g_y=-2y=-2$ i $(3,1)$. Fortegnet på $y$-komponenten er negativt.",
    },
    {
      question: "For å regne retningsderivert i retningen til vektoren $(3,4)$ (ikke enhetsvektor) må du:",
      options: ["Dele på $|(3,4)|=5$ etter skalarproduktet, siden det bes om en retning", "Bruke vektoren $(3,4)$ direkte uten noen form for endring i det hele tatt", "Dele gradienten på 5", "Gange svaret med 5"],
      explanation: "«Retningen til» krever enhetsvektor: bruk $\\tfrac15(3,4)$, altså del skalarproduktet på lengden 5.",
    },
    {
      question: "Hvorfor kan retningsderiverten (for en enhetsvektor) aldri overstige $|\\nabla f|$?",
      options: ["Fordi $\\nabla f\\cdot\\hat{\\mathbf r}=|\\nabla f|\\cos\\theta\\le|\\nabla f|$", "Fordi gradienten alltid er en enhetsvektor", "Fordi $\\cos\\theta\\ge 1$ alltid", "Fordi retningsderiverten er kvadratet av $|\\nabla f|$"],
      explanation: "$\\cos\\theta\\le 1$ gir øvre grense $|\\nabla f|$, nådd når $\\hat{\\mathbf r}$ peker langs $\\nabla f$ (Cauchy–Schwarz).",
    },
    {
      question: "Langs en nivåkurve til $f$ er endringsraten til $f$:",
      options: ["Null, fordi $f$ er konstant på nivåkurven", "Maksimal", "Lik lengden av gradienten, altså $|\\nabla f|$ i det aktuelle punktet", "Alltid negativ"],
      explanation: "På nivåkurven er $f=c$ konstant, så endringsraten er 0 — derfor er tangentretningen en nullretning.",
    },
  ],
  'mat1100-5-5': [
    {
      question: "Første steg i gradientalgoritmen for en sjanger A-oppgave er å:",
      options: ["regne alle partiellderiverte komponentvis", "normalisere retningsvektoren med en gang", "ta skalarproduktet $\\nabla f\\cdot\\mathbf r$", "skrive konklusjonssetningen"],
      explanation: "Steg 1 er partiellderiverte; deretter settes $\\nabla f$ sammen og evalueres, så håndteres $\\mathbf r$.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(1,4)$, $\\mathbf r=(2,1)$ (oppgitt direkte). Retningsderiverten er:",
      options: ["$6$", "$\\dfrac{6}{\\sqrt5}$", "$\\sqrt{17}$", "$9$"],
      explanation: "Oppgitt vektor brukes direkte: $(1,4)\\cdot(2,1)=2+4=6$. $6/\\sqrt5$ ville vært for enhetsvektoren.",
    },
    {
      question: "Oppgaven ber om retningsderivert «i retningen til vektoren $(3,4)$». Hva må du gjøre med $(3,4)$?",
      options: ["Dele på lengden $5$ (normalisere)", "Bruke vektoren $(3,4)$ helt uendret slik den er", "Kvadrere komponentene", "Bytte om komponentene"],
      explanation: "«Retningen til» krever enhetsvektor: del på $|(3,4)|=5$.",
    },
    {
      question: "$\\nabla g(\\mathbf a)=(6,-2)$, og enhetsvektoren er $\\tfrac15(3,4)$. Retningsderiverten er:",
      options: ["$2$", "$10$", "$\\dfrac{26}{5}$", "$-2$"],
      explanation: "$(6,-2)\\cdot(3,4)=18-8=10$, delt på $5$ gir $2$.",
    },
    {
      question: "Vektoren $\\mathbf r=(3/5,4/5)$ er oppgitt som retning. Hva bør du sjekke først?",
      options: ["Om $|\\mathbf r|=1$, altså om den alt er en enhetsvektor", "Om komponentene er heltall", "Om $\\mathbf r$ er parallell med $\\nabla f$", "Om $\\mathbf r$ er parallell med gradienten $\\nabla f(\\mathbf a)$"],
      explanation: "$|(3/5,4/5)|=1$, så den er allerede en enhetsvektor — ikke normaliser på nytt.",
    },
    {
      question: "«I hvilken retning vokser $f$ raskest?» Svaret er:",
      options: ["vektoren $\\nabla f(\\mathbf a)$", "tallet $|\\nabla f(\\mathbf a)|$", "vektoren $-\\nabla f(\\mathbf a)$", "tallet $\\nabla f(\\mathbf a)\\cdot\\mathbf a$"],
      explanation: "Retning = gradientvektoren. $|\\nabla f|$ er raten (et tall); $-\\nabla f$ gir raskest fall.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(3,1)$. Den maksimale vekstraten er:",
      options: ["$\\sqrt{10}$", "$4$", "$(3,1)$", "$10$"],
      explanation: "$|\\nabla f|=\\sqrt{3^2+1^2}=\\sqrt{10}$. $4$ er komponentsummen; $(3,1)$ er en vektor.",
    },
    {
      question: "En oppgave spør «hva er den største verdien retningsderiverten kan ha?». Du svarer med:",
      options: ["tallet $|\\nabla f(\\mathbf a)|$", "retningsvektoren $\\nabla f(\\mathbf a)$", "tallet $0$", "enhetsvektoren $\\hat{\\mathbf r}$"],
      explanation: "Den største retningsderiverten er $|\\nabla f|$, et tall — ikke retningen den nås i.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(2,-2)$. Hvilken vektor er en nullretning?",
      options: ["$(1,1)$", "$(2,-2)$", "$(1,-1)$", "$(-2,2)$"],
      explanation: "$(2,-2)\\cdot(1,1)=2-2=0$. $(1,-1)$ gir $2+2\\ne0$; $(2,-2)$ og $(-2,2)$ er parallelle med gradienten.",
    },
    {
      question: "Hvorfor er retningsderiverten 0 langs en nivåkurve?",
      options: ["Fordi $f$ er konstant langs nivåkurven", "Fordi gradienten er null der", "Fordi nivåkurven alltid er en rett linje", "Fordi $|\\mathbf r|=0$ på nivåkurven"],
      explanation: "På nivåkurven er $f=c$, så endringsraten er 0 — tangenten er en nullretning.",
    },
    {
      question: "$f(x,y,z)=xyz$, $\\mathbf a=(1,2,3)$. Hva er $\\nabla f(\\mathbf a)$?",
      options: ["$(6,3,2)$", "$(2,3,6)$", "$(1,2,3)$", "$(3,6,2)$"],
      explanation: "$f_x=yz=6$, $f_y=xz=3$, $f_z=xy=2$.",
    },
    {
      question: "$\\nabla f(\\mathbf a)=(2,4,4)$. Maksimal vekstrate:",
      options: ["$6$", "$10$", "$36$", "$\\sqrt{10}$"],
      explanation: "$\\sqrt{4+16+16}=\\sqrt{36}=6$. $10$ er komponentsummen; $36$ er kvadratsummen.",
    },
    {
      question: "Kjerneregelen langs kurven $\\mathbf r(t)$ gir $\\dfrac{d}{dt}f(\\mathbf r(t))=$",
      options: ["$\\nabla f(\\mathbf r(t))\\cdot\\mathbf r'(t)$", "$\\nabla f(\\mathbf r(t))\\cdot\\mathbf r(t)$", "$|\\nabla f(\\mathbf r(t))|\\cdot|\\mathbf r'(t)|$", "$\\nabla f(\\mathbf r'(t))$"],
      explanation: "Gradienten i punktet prikket med fartsvektoren $\\mathbf r'(t)$; retningsderiverten er spesialtilfellet.",
    },
    {
      question: "Sensorregelen «ubegrunnet svar = 0» betyr i sjanger A at du alltid bør:",
      options: ["skrive en verbal konklusjonssetning med tolkningen", "bare oppgi sluttallet", "hoppe helt over partiellderivasjonen for å spare tid", "normalisere alle vektorer"],
      explanation: "Riktig tall uten begrunnelse gir sjelden full uttelling; konklusjonssetningen er en del av poengsummen.",
    },
    {
      question: "En student svarer at «$f$ vokser raskest med rate $(4,4)$». Feilen er at:",
      options: ["$(4,4)$ er en retning; raten er tallet $|\\nabla f|=4\\sqrt2$", "retningen skulle vært $(4,-4)$", "raten skulle vært negativ", "at gradienten her skulle vært normalisert til lengde 1"],
      explanation: "Retning (vektor) og rate (tall) forveksles: raten er $|(4,4)|=4\\sqrt2$.",
    },
  ],
  'mat1100-5-6': [
    {
      question: "En vektorfunksjon $F:\\mathbb{R}^n\\to\\mathbb{R}^m$ har en Jacobimatrise med:",
      options: ["$m$ rader og $n$ kolonner", "$n$ rader og $m$ kolonner", "$m$ rader og $m$ kolonner", "alltid like mange rader som kolonner"],
      explanation: "Én rad per komponentfunksjon ($m$ stk) og én kolonne per inngangsvariabel ($n$ stk): en $m\\times n$-matrise.",
    },
    {
      question: "Hva står i rad $i$ av Jacobimatrisen?",
      options: ["Gradienten til komponentfunksjonen $F_i$", "Alle partiellderiverte tatt med hensyn på variabelen $x_i$", "Den $i$-te inngangsvariabelen", "Determinanten til $F$"],
      explanation: "Rad $i$ = $(\\partial F_i/\\partial x_1,\\dots,\\partial F_i/\\partial x_n)$, altså gradienten til $F_i$. Kolonne $j$ er derivert mhp. $x_j$.",
    },
    {
      question: "$F(x,y)=(xy,\\ x^2+y^2)$. Hva er $JF(2,1)$?",
      options: ["$\\begin{pmatrix} 1 & 2 \\\\ 4 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 2 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$"],
      explanation: "Rad 1 $(y,x)=(1,2)$, rad 2 $(2x,2y)=(4,2)$. Alternativene med byttede rader/kolonner er transponerte.",
    },
    {
      question: "Teoremveien til deriverbarhet krever at partiellderivertene er:",
      options: ["kontinuerlige i en omegn om punktet", "at de bare eksisterer i akkurat det ene punktet", "lik null i punktet", "like store"],
      explanation: "«Kontinuerlige partiellderiverte ⇒ deriverbar». At de bare finnes er ikke nok.",
    },
    {
      question: "Hvorfor holder det ikke å si «deriverbar fordi partiellderivertene finnes»?",
      options: ["Fordi teoremet krever at de er kontinuerlige, ikke bare eksisterer", "Fordi partiellderiverte aldri finnes", "Fordi man må transponere matrisen først", "Fordi Jacobimatrisen alltid må være en kvadratisk matrise"],
      explanation: "Eksistens av partiellderiverte er svakere enn deriverbarhet; teoremveien bruker kontinuitet av dem.",
    },
    {
      question: "I deriverbarhetsdefinisjonen står nevneren $|\\mathbf x-\\mathbf a|$. Hva er poenget med den?",
      options: ["Restleddet må gå mot 0 raskere enn avstanden", "Den gjør telleren større", "Den kan alltid sløyfes", "Den sørger for at $F$ blir kontinuerlig i selve punktet"],
      explanation: "Normeringen sikrer at avviket fra lineariseringen forsvinner raskere enn $|\\mathbf x-\\mathbf a|$ — mer enn ren kontinuitet.",
    },
    {
      question: "Den vanligste feilen når man setter opp en Jacobimatrise er å:",
      options: ["transponere den (bytte rader og kolonner)", "å glemme å kvadrere hvert enkelt element i matrisen", "bruke determinanten", "dele på antall variabler"],
      explanation: "Transponering bytter komponentfunksjoner og variabler. Hold fast: rad = komponentfunksjon.",
    },
    {
      question: "$F(x,y)=(e^x\\cos y,\\ e^x\\sin y)$. Hva er $JF(0,0)$?",
      options: ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$"],
      explanation: "Med $e^0=1,\\cos0=1,\\sin0=0$ blir matrisen identitetsmatrisen $I_2$.",
    },
    {
      question: "En funksjon med kontinuerlige partiellderiverte kalles:",
      options: ["kontinuerlig deriverbar ($C^1$)", "en harmonisk funksjon av flere reelle variable", "lineær", "harmonisk"],
      explanation: "$C^1$ = kontinuerlig deriverbar, og $C^1\\Rightarrow$ deriverbar (teoremveien).",
    },
    {
      question: "Når $F$ har bare én utgang ($m=1$), er Jacobimatrisen:",
      options: ["én rad — gradienten $\\nabla f$", "en kvadratisk matrise", "en kolonnevektor", "determinanten til $f$"],
      explanation: "Med $m=1$ er $JF$ raden $(\\partial f/\\partial x_1,\\dots)=\\nabla f$, og lineariseringen er tangentplanet.",
    },
  ],
  'mat1100-6-1': [
    {
      question: "Hva er andregrads Maclaurinpolynom $T_2$ til $e^x$?",
      options: ["$1+x+\\tfrac{x^2}{2}$", "$1+x+x^2$", "$1+x-\\tfrac{x^2}{2}$", "$x+\\tfrac{x^2}{2}$"],
      explanation: "Alle deriverte av $e^x$ er $1$ i $0$, så $T_2=1+x+\\tfrac{x^2}{2!}$. $1+x+x^2$ glemmer fakultetet $2!$; fortegnet er $+$; leddet $f(0)=1$ må være med.",
    },
    {
      question: "I Lagrange-restleddet $R_n(x)=\\tfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ — hvor evalueres den $(n+1)$-te deriverte?",
      options: ["I et ukjent punkt $c$ mellom $a$ og $x$", "I utviklingspunktet $a$", "I punktet $x$ der vi tilnærmer", "I gjennomsnittet $\\tfrac{a+x}{2}$"],
      explanation: "$c$ er et ukjent mellompunkt strengt mellom $a$ og $x$. Å sette $c=a$ eller $c=x$ er kjernefellen; vi kjenner aldri $c$ og avgrenser derfor $|f^{(n+1)}(c)|$ med et maksimum.",
    },
    {
      question: "Hvilken utvikling er riktig Maclaurin for $\\sin x$?",
      options: ["$x-\\tfrac{x^3}{6}+\\tfrac{x^5}{120}$", "$1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}$", "$x-\\tfrac{x^2}{2}+\\tfrac{x^3}{3}$", "$x+\\tfrac{x^3}{6}+\\tfrac{x^5}{120}$"],
      explanation: "$\\sin$ er odde, så bare odde potenser med vekslende fortegn: $x-\\tfrac{x^3}{3!}+\\tfrac{x^5}{5!}$. Det andre er $\\cos x$; det tredje er $\\ln(1+x)$; det fjerde har feil fortegn på $x^3$.",
    },
    {
      question: "Feilestimatet $|R_n|\\le\\tfrac{M}{(n+1)!}|x-a|^{n+1}$ — hva er $M$?",
      options: ["Maksimum av $|f^{(n+1)}|$ over intervallet", "Verdien $|f^{(n+1)}(a)|$ i selve utviklingspunktet $a$", "Største verdi av $|f|$ over hele intervallet $[a,x]$", "Antall ledd i selve Taylorpolynomet $T_n$"],
      explanation: "Siden $c$ er ukjent, avgrenser vi $|f^{(n+1)}(c)|$ med maksimum over hele intervallet. Å bruke bare verdien i $a$ gir ingen garanti; det er $f^{(n+1)}$, ikke $f$, som skal maksimeres.",
    },
    {
      question: "For $\\ln(1+x)$: hvorfor deles $x^3$-leddet på $3$ og ikke på $3!$?",
      options: ["Fordi $(k-1)!$ forkorter $k!$ til $1/k$", "Fordi $\\ln$-funksjonen ikke har noe fakultet i formelen sin", "Fordi utviklingen egentlig foregår rundt $1$ og ikke rundt $0$", "Fordi $\\ln(1+x)$ er en jamn funksjon i variabelen $x$"],
      explanation: "$\\tfrac{f^{(k)}(0)}{k!}=\\tfrac{(-1)^{k-1}(k-1)!}{k!}=\\tfrac{(-1)^{k-1}}{k}$. Fakultetet er der, men forkorter seg bort. $\\ln(1+x)$ er ikke jamn, og utvikles her rundt $0$.",
    },
    {
      question: "Taylors formel med $n=0$ og Lagrange-restledd tilsvarer hvilken kjent setning?",
      options: ["Middelverdisetningen", "Skjæringssetningen", "Analysens fundamentalteorem", "Rolles teorem"],
      explanation: "$f(x)=f(a)+f'(c)(x-a)$ er nøyaktig middelverdisetningen. Skjæringssetningen og Rolle er andre eksistenssetninger; fundamentalteoremet knytter derivasjon og integrasjon.",
    },
    {
      question: "Beregn $\\displaystyle\\lim_{x\\to 0}\\frac{e^x-1-x}{x^2}$ med Taylor.",
      options: ["$1/2$", "$-1/2$", "$1$", "$0$"],
      explanation: "$e^x=1+x+\\tfrac{x^2}{2}+\\dots$, så telleren er $\\tfrac{x^2}{2}+\\dots$ og forholdet $\\to\\tfrac12$. Formen er $[0/0]$; svaret $1$ kommer av å glemme $\\tfrac12$-faktoren, $-1/2$ av fortegnsfeil.",
    },
    {
      question: "Hva sier integralformen av restleddet for $n=1$?",
      options: ["$R_1(x)=\\int_a^x f''(t)(x-t)\\,dt$", "$R_1(x)=\\int_a^x f''(t)\\,dt$", "$R_1(x)=f''(c)(x-a)$", "$R_1(x)=\\int_a^x f'(t)(x-t)\\,dt$"],
      explanation: "Delvis integrasjon av $\\int_a^x f'(t)\\,dt$ gir $f'(a)(x-a)+\\int_a^x f''(t)(x-t)\\,dt$; restleddet er det siste integralet. Vekten $(x-t)$ og andrederiverte $f''$ er begge nødvendige.",
    },
    {
      question: "Tredjegrads Maclaurinpolynom $T_3$ til $\\cos x$ er:",
      options: ["$1-\\tfrac{x^2}{2}$", "$1-\\tfrac{x^2}{2}+\\tfrac{x^3}{6}$", "$1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}$", "$x-\\tfrac{x^3}{6}$"],
      explanation: "$\\cos$ er jamn, så odde ledd forsvinner: $T_3=1-\\tfrac{x^2}{2}$ (samme som $T_2$). $\\tfrac{x^4}{24}$ er grad 4 (ikke med i $T_3$); $x-\\tfrac{x^3}{6}$ er $\\sin$.",
    },
    {
      question: "Hvilken av disse er en dokumentert felle i Taylor-oppgaver?",
      options: ["Gi et feilestimat uten å maksimere $|f^{(n+1)}|$", "Skrive potensene som $(x-a)^k$ når $a\\ne 0$", "Dele hvert enkelt ledd på fakultetet $k!$", "Bruke Lagrange-restleddet til nøyaktig feilavgrensning"],
      explanation: "Å hoppe over maksimeringen gjør «estimatet» til en gjetning uten garanti. De tre andre er nettopp riktig framgangsmåte: riktige potenser, riktig fakultet, og restleddet til feilavgrensning.",
    },
  ],
  'mat1100-6-2': [
    {
      question: "Hva er summen av $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\tfrac13\\right)^{n}$?",
      options: ["$\\tfrac32$", "$\\tfrac12$", "$3$", "$\\tfrac13$"],
      explanation: "Geometrisk med $a=1$ (leddet for $n=0$) og $k=\\tfrac13$: sum $=\\tfrac{1}{1-1/3}=\\tfrac32$. $\\tfrac12$ er svaret hvis summen starter på $n=1$; startindeksen bestemmer førsteleddet.",
    },
    {
      question: "Rekken $\\sum a_n$ har $a_n\\to 0$. Hva kan du konkludere?",
      options: ["Ingenting sikkert om konvergens", "At rekken da helt sikkert konvergerer mot en endelig sum", "At rekken da helt sikkert divergerer mot uendelig", "At rekken er geometrisk med kvotient $|k|<1$"],
      explanation: "$a_n\\to 0$ er nødvendig, men ikke tilstrekkelig: den harmoniske rekken $\\sum\\tfrac1n$ har $a_n\\to 0$, men divergerer. Divergenstesten kan bare vise divergens (når $a_n\\not\\to 0$).",
    },
    {
      question: "For hvilke $p$ konvergerer $p$-rekken $\\displaystyle\\sum_{n=1}^{\\infty}\\tfrac{1}{n^{p}}$?",
      options: ["$p>1$", "$p<1$", "$p\\ge 1$", "Alle $p$"],
      explanation: "$p$-rekken speiler $\\int_1^\\infty x^{-p}\\,dx$: konvergerer $\\iff p>1$. $p<1$ er kriteriet for $p$-integralet i $0$ (speilvendt); $p=1$ (harmonisk) divergerer.",
    },
    {
      question: "Forholdstesten gir $L=\\lim a_{n+1}/a_n=1$. Hva betyr det?",
      options: ["Testen er inkonklusiv", "At rekken konvergerer, ettersom $L\\le 1$ i grensen", "At rekken divergerer, ettersom $L\\ge 1$ i grensen", "At rekken er absolutt konvergent"],
      explanation: "$L=1$ sier ingenting: både $\\sum\\tfrac1n$ (div.) og $\\sum\\tfrac1{n^2}$ (konv.) gir $L=1$. Å tolke $L=1$ som konvergens er en dokumentert felle; bytt til $p$-rekke eller GS.",
    },
    {
      question: "Hvilken rekke viser at «$a_n\\to 0$» ikke er nok for konvergens?",
      options: ["Den harmoniske rekken $\\sum\\tfrac1n$", "Den geometriske rekken $\\sum 2^{-n}$", "Rekken $\\sum\\tfrac{1}{n^2}$", "Rekken $\\sum\\tfrac{n}{2n+1}$"],
      explanation: "$\\sum\\tfrac1n$ har $a_n\\to 0$ men divergerer. $\\sum 2^{-n}$ og $\\sum\\tfrac1{n^2}$ konvergerer; $\\sum\\tfrac{n}{2n+1}$ har $a_n\\to\\tfrac12\\ne 0$ (divergerer allerede ved divergenstesten).",
    },
    {
      question: "I GS-testen for $\\displaystyle\\sum\\tfrac{n}{n^3+2}$ — hvilken $b_n$ velger du?",
      options: ["$b_n=\\tfrac{1}{n^2}$", "$b_n=\\tfrac{1}{n^3}$", "$b_n=\\tfrac1n$", "$b_n=\\tfrac{n}{n^3}=n^{-2}$ er feil"],
      explanation: "Dominant ledd: teller $\\sim n$, nevner $\\sim n^3$, så $a_n\\sim\\tfrac{1}{n^2}$ → $b_n=\\tfrac1{n^2}$ (konvergent $p$-rekke, $p=2$). $\\tfrac1{n^3}$ og $\\tfrac1n$ gir $L=0$ eller $L=\\infty$.",
    },
    {
      question: "Integraltesten knytter $\\sum_{n\\ge 1} a_n$ til hva?",
      options: ["Integralet $\\int_1^{\\infty}f\\,dx$, der $f(n)=a_n$", "Følgegrensen $\\lim_{n\\to\\infty}a_n$ av selve leddene", "Den deriverte $f'(n)$ av leddfunksjonen", "Taylorpolynomet til leddfunksjonen $f$"],
      explanation: "For positiv, avtakende, kontinuerlig $f$ med $f(n)=a_n$ har rekken og $\\int_1^\\infty f$ samme skjebne — broen til kap. 4.6. Leddgrensen alene avgjør ikke konvergens.",
    },
    {
      question: "Avgjør $\\displaystyle\\sum_{n=1}^{\\infty}\\tfrac{2^n}{n!}$ med forholdstesten. Hva blir $L$?",
      options: ["$L=0$, konvergerer", "$L=2$, divergerer", "$L=1$, inkonklusiv", "$L=\\infty$, divergerer"],
      explanation: "$\\tfrac{a_{n+1}}{a_n}=\\tfrac{2}{n+1}\\to 0<1$, så rekken konvergerer. Fakultetet vokser raskere enn $2^n$; $L=2$ ville vært svaret hvis nevneren var $n$ i stedet for $n!$.",
    },
    {
      question: "En rekke er betinget konvergent. Hva betyr det?",
      options: ["$\\sum a_n$ konvergerer, men $\\sum|a_n|$ divergerer", "$\\sum a_n$ og $\\sum|a_n|$ konvergerer begge", "$\\sum a_n$ divergerer, men $\\sum|a_n|$ konvergerer", "Rekken er geometrisk med $k=1$"],
      explanation: "Betinget = konvergerer bare fordi fortegnene hjelper. Standard: $\\sum\\tfrac{(-1)^{n+1}}{n}$ konvergerer (Leibniz), men tallverdiene $\\sum\\tfrac1n$ divergerer. Konvergerer begge, er den absolutt konvergent.",
    },
    {
      question: "Hva er $s_N$, den $N$-te delsummen til $\\sum a_n$?",
      options: ["$a_1+a_2+\\dots+a_N$", "Grensen $\\lim_{n\\to\\infty}a_n$", "Hele den uendelige summen", "Det $N$-te leddet $a_N$ alene"],
      explanation: "Delsummen er summen av de $N$ første leddene; rekkesummen er $\\lim_N s_N$. Å forveksle $s_N$ med leddet $a_N$ eller leddgrensen er en klassisk feil.",
    },
  ],
  'mat1100-6-3': [
    {
      question: "Hva er den integrerende faktoren for $y'+2y=e^{-x}$?",
      options: ["$e^{2x}$", "$e^{-2x}$", "$e^{x}$", "$2e^{x}$"],
      explanation: "$\\mu=e^{\\int p\\,dx}$ med $p=2$ gir $e^{2x}$. $e^{-2x}$ har fortegnsfeil i eksponenten; $e^x$ bruker feil $p$. Faktoren gjør venstresiden til $(e^{2x}y)'$.",
    },
    {
      question: "Ved separasjon av $y'=xy$ — hvilken konstantløsning må sjekkes?",
      options: ["$y\\equiv 0$", "$y\\equiv 1$", "$y\\equiv x$", "Ingen konstantløsning finnes"],
      explanation: "Konstantløsninger kommer fra $g(y)=0$; her er $g(y)=y$, så $y\\equiv 0$. Den mistes når man deler på $y$ i separasjonen — en dokumentert felle. $y\\equiv 1$ og $y\\equiv x$ løser ikke ligningen.",
    },
    {
      question: "Løsningen av $y'+2y=e^{-x}$ med $y(0)=3$ er:",
      options: ["$y=e^{-x}+2e^{-2x}$", "$y=e^{-x}+2e^{2x}$", "$y=3e^{-2x}$", "$y=e^{-x}-2e^{-2x}$"],
      explanation: "Generell løsning $y=e^{-x}+Ce^{-2x}$; $y(0)=1+C=3$ gir $C=2$. $2e^{2x}$ har feil fortegn i eksponenten; $3e^{-2x}$ ignorerer partikulærleddet; $-2$ feil fortegn på $C$.",
    },
    {
      question: "Hvorfor er $y'+y=x$ ikke løst ved separasjon?",
      options: ["Høyresiden faktoriserer ikke $f(x)g(y)$", "Fordi $y$ mangler helt i selve ligningen", "Fordi ligningen er av andre orden i $y$", "Fordi $x$ ikke lar seg integrere"],
      explanation: "$y'=x-y$ kan ikke skrives $f(x)g(y)$, så den er lineær (ikke separabel) og løses med integrerende faktor. Ligningen er første orden, inneholder $y$, og $x$ integreres fint.",
    },
    {
      question: "Løsningen av $y'=ky$ (eksponentiell modell) med $y(0)=y_0$ er:",
      options: ["$y=y_0 e^{kt}$", "$y=y_0+kt$", "$y=y_0 t^{k}$", "$y=k e^{y_0 t}$"],
      explanation: "Separasjon gir $\\ln|y|=kt+C$, så $y=y_0 e^{kt}$. $y_0+kt$ er lineær vekst (feil modell); de to andre har feil struktur. $k>0$ vekst, $k<0$ henfall.",
    },
    {
      question: "Hva betyr det å verifisere en løsning $y(x)$?",
      options: ["Derivere $y$ og sette inn i ligningen", "Sjekke at $y(0)=0$ i hvert tilfelle", "Tegne retningsfeltet punkt for punkt", "Regne ut grensen $\\lim y(x)$ mot uendelig"],
      explanation: "Verifikasjon = deriver løsningen, sett $y$ og $y'$ inn, og sjekk at begge sider blir like. Det er obligatorisk føring. Initialbetingelsen er ikke alltid $y(0)=0$; retningsfelt og grenser er ikke verifikasjon.",
    },
    {
      question: "I lineær metode — hvor plasseres integrasjonskonstanten $C$?",
      options: ["I $\\mu y=\\int\\mu q\\,dx+C$, før divisjon", "Helt til slutt, etter at $y$ er fullstendig isolert", "Inne i selve den integrerende faktoren $\\mu$", "$C$ trengs ikke i lineære ligninger"],
      explanation: "$C$ kommer inn ved integrasjonen av $(\\mu y)'=\\mu q$, altså før divisjon med $\\mu$; deretter $y=\\tfrac1\\mu(\\int\\mu q\\,dx+C)$. Legger du $C$ på etterpå, blir den skalert feil av $1/\\mu$.",
    },
    {
      question: "En bestand følger $y'=0{,}2y$. Hva slags modell er dette?",
      options: ["Eksponentiell vekst", "Eksponentielt henfall", "Lineær vekst", "Newtons avkjøling"],
      explanation: "$y'=ky$ med $k=0{,}2>0$ gir eksponentiell vekst $y=y_0e^{0{,}2t}$. Henfall krever $k<0$; lineær vekst er $y'=$ konstant; avkjøling har formen $y'=-k(y-y_s)$.",
    },
    {
      question: "Hva er den generelle løsningen sammenlignet med en partikulær løsning?",
      options: ["Generell har fri $C$; partikulær er én kurve", "Generell er alltid $y=0$; partikulær er tilfeller med $y\\ne 0$", "De er nøyaktig det samme", "Partikulær har en fri konstant, generell ikke"],
      explanation: "Generell løsning er hele kurveskaren med fri $C$; en initialbetingelse plukker ut den partikulære. Første ordens ligninger har nøyaktig én fri konstant.",
    },
    {
      question: "For $y'=3x^2y$ med $y(0)=2$ — når brukes initialbetingelsen?",
      options: ["Til slutt, for å bestemme $C$", "Først, før man separerer variablene", "Underveis, i hvert integrasjonssteg", "Den brukes ikke i separable ligninger"],
      explanation: "Finn først generell løsning $y=Ae^{x^3}$, sett så inn $x=0,y=2$ for å få $A=2$. Betingelsen brukes helt til slutt — ikke underveis; den er nødvendig også i separable ligninger.",
    },
  ],
  'mat1100-7-1': [
    {
      question: "Hva innebærer sensorregelen «ubegrunnet svar = 0» i MAT1100?",
      options: ["Et helt riktig sluttsvar uten begrunnelse gir null poeng", "Et galt sluttsvar med grundig begrunnelse gir likevel null poeng", "Bare det endelige sluttsvaret vurderes ved retting", "Begrunnelse kreves utelukkende på rene teorioppgaver"],
      explanation: "Poeng gis for resonnementet, ikke for tallet — et riktig svar uten mellomregning teller som blankt.",
    },
    {
      question: "Hva må stå på arket før hver anvendelse av L'Hôpitals regel?",
      options: ["At uttrykket er på ubestemt form $[0/0]$ eller $[\\infty/\\infty]$", "At funksjonen er kontinuerlig og deriverbar i grensepunktet man ser på", "At retningsvektoren i uttrykket er blitt normalisert først", "At det er tegnet et fullstendig fortegnsskjema for telleren"],
      explanation: "Den ubestemte formen markeres eksplisitt før hver bruk (gjentatt bruk = ny markering).",
    },
    {
      question: "Hva skal alltid gjøres med grensene i en substitusjon i et bestemt integral?",
      options: ["De byttes fra $x$-verdier til de tilsvarende $u$-verdiene", "De beholdes uendret som de opprinnelige $x$-verdiene", "De ganges hver for seg med den deriverte til substitusjonsvariabelen", "De deriveres til slutt for å kontrollere hele svaret"],
      explanation: "Substitusjonsboksen krever nye grenser når du bytter fra $x$ til $u$.",
    },
    {
      question: "Hvordan må deriverbarhet vises i et punkt der formelverket ikke gjelder?",
      options: ["Med differansekvotienten $\\frac{f(a+h)-f(a)}{h}$ som en grense", "Ved å derivere selve uttrykket og sette inn punktet direkte", "Ved å ta grensen av den deriverte funksjonen mot punktet", "Ved å sette opp et fortegnsskjema for den deriverte rundt punktet"],
      explanation: "Grensedefinisjonen er eneste gyldige vei; å derivere formelen og sette inn er ugyldig der.",
    },
    {
      question: "Hvilken setning navngis når du viser at en likning har en løsning i et intervall?",
      options: ["Skjæringssetningen (mellomverdisetningen)", "Middelverdisetningen for deriverbare funksjoner", "Ekstremverdisetningen om maksimum og minimum", "L'Hôpitals regel for ubestemte grenseformer"],
      explanation: "Kontinuerlig + fortegnsskifte ⇒ skjæringssetningen garanterer et nullpunkt.",
    },
    {
      question: "Hva må uttales eksplisitt i et skviseargument for $x^k\\sin(1/x)$?",
      options: ["At $|\\sin(1/x)|\\le 1$ for alle $x\\ne 0$", "At den deriverte av sinusleddet er begrenset nær null", "At funksjonen er monoton i et intervall rundt null", "At L'Hôpital er brukt på selve differansekvotienten"],
      explanation: "Begrensetheten er det som gir klemmerammen $-|x|^k\\le x^k\\sin\\le|x|^k$.",
    },
    {
      question: "Hvordan skal et uegentlig integral $\\int_a^\\infty f\\,dx$ føres?",
      options: ["Som grensen $\\lim_{b\\to\\infty}\\int_a^b f\\,dx$", "Ved å sette $\\infty$ rett inn i den antideriverte", "Ved sammenligning med en vilkårlig konvergent rekke", "Ved delvis integrasjon uansett hvordan integranden ser ut"],
      explanation: "lim-føring er obligatorisk — aldri «sett inn $\\infty$» som om det var et tall.",
    },
    {
      question: "Hvilke forutsetninger må sjekkes eksplisitt før du bruker Rolles teorem?",
      options: ["Kontinuerlig på lukket og deriverbar på åpent intervall", "Deriverbar i begge endepunktene av det lukkede intervallet", "Konveks på hele det intervallet oppgaven arbeider med", "Strengt voksende mellom de to endepunktene i intervallet"],
      explanation: "Rolle krever kontinuitet på $[a,b]$, deriverbarhet på $(a,b)$ (og $f(a)=f(b)$).",
    },
    {
      question: "Hvordan dokumenteres valget av $u$ og $v'$ i delvis integrasjon?",
      options: ["Med LIATE-regelen for rekkefølgen på faktorene", "Med kvadratkomplettering av hele integranden først", "Med polynomdivisjon før selve integrasjonen starter", "Med en substitusjonsboks der grensene byttes ut"],
      explanation: "LIATE (logaritme, invers trig, algebra, trig, eksponential) styrer valget av $u$.",
    },
    {
      question: "Du klarte ikke delpunkt (a). Hva gir full uttelling for delpunkt (b)?",
      options: ["Å anta resultatet fra (a) eksplisitt og bruke det i (b)", "Å hoppe over (b) helt siden det bygger videre på (a)", "Å levere (b) i visshet om at det gir halv uttelling", "Å bruke kalkulator på (b) uten å forklare noe steg"],
      explanation: "Instruksen tillater å bruke resultater fra ubesvarte delpunkter — skriv «antar fra (a) …».",
    },
    {
      question: "Når er en «konstruer et eksempel»-oppgave fullstendig besvart?",
      options: ["Når du har verifisert at eksemplet oppfyller alle kravene", "Når du har oppgitt minst tre ulike mulige eksempler", "Når du har valgt det aller enkleste og mest opplagte eksemplet", "Når du har forklart hvorfor oppgaven er formulert åpent"],
      explanation: "Eksempel uten verifikasjon er halvt svar; hvert krav må sjekkes for ditt eksempel.",
    },
    {
      question: "Hva kreves i fasit når et reelt polynom skal faktoriseres fra en kompleks rot?",
      options: ["Både den komplekse og den reelle faktoriseringen skrives ut", "Kun den reelle faktoriseringen med kvadratiske faktorer", "Kun den komplekse faktoriseringen med lineære faktorer", "En numerisk tilnærming til alle røttene med desimaler"],
      explanation: "Fasitkravet er begge former; konjugatparet gir den reelle kvadratiske faktoren.",
    },
    {
      question: "Hvordan begrunnes det at en kvadratisk matrise er inverterbar?",
      options: ["Ved å regne ut $\\det M$ og vise at den er forskjellig fra null", "Ved å peke på at radene ser lineært uavhengige ut", "Ved å konstatere at matrisen i det hele tatt er en kvadratisk matrise", "Ved å vise at sporet til matrisen er forskjellig fra null"],
      explanation: "«Inverterbar $\\Leftrightarrow \\det\\ne 0$» — determinanten må regnes synlig.",
    },
    {
      question: "Hvordan dokumenteres monotoni i en drøftingsoppgave (sjanger K)?",
      options: ["Med et tegnet eller beskrevet fortegnsskjema for $f'$", "Med en tabell over noen utvalgte funksjonsverdier", "Med grensen til selve funksjonen mot pluss uendelig for seg selv", "Med nullpunktene til den andrederiverte for seg selv"],
      explanation: "Fortegnsskjema for $f'$ er den forventede føringen; konklusjon uten det gir trekk.",
    },
    {
      question: "Hva gjelder for et kalkulatorsvar på en oppgave som ber om regning?",
      options: ["Det gir ikke poeng uten at mellomregningen er vist", "Det gir full uttelling så lenge tallet er riktig", "Det er alltid forbudt å bruke kalkulator på slutteksamen", "Det må rundes av til nøyaktig to desimalers presisjon"],
      explanation: "Kalkulatoren er kontrollverktøy; regning som etterspørres må vises på arket.",
    },
  ],
  'mat1100-7-2': [
    {
      question: "Skriv $z=-1+i\\sqrt3$ på polarform.",
      options: ["$2e^{i2\\pi/3}$", "$2e^{i\\pi/3}$", "$4e^{i2\\pi/3}$", "$2e^{-i2\\pi/3}$"],
      explanation: "$r=2$; punktet ligger i andre kvadrant, så $\\theta=\\pi-\\pi/3=2\\pi/3$.",
    },
    {
      question: "$\\displaystyle\\lim_{x\\to 0}(1+2x)^{1/x}=?$",
      options: ["$e^2$", "$e$", "$1$", "$\\infty$"],
      explanation: "$1^\\infty$: $\\ln y=\\frac{\\ln(1+2x)}{x}\\to 2$, så grensen er $e^2$.",
    },
    {
      question: "La $f(x)=x^3+2x+1$. Hva er $(f^{-1})'(4)$?",
      options: ["$\\tfrac{1}{5}$", "$\\tfrac{1}{50}$", "$5$", "$\\tfrac{1}{2}$"],
      explanation: "$f(1)=4$, så $a=1$; $f'(1)=5$ gir $(f^{-1})'(4)=1/5$. Fella $1/50$ bruker $f'(4)$.",
    },
    {
      question: "Følgen $a_1=1$, $a_{n+1}=\\sqrt{2a_n+3}$ er voksende og begrenset. Grensen er?",
      options: ["$3$", "$-1$", "$1$", "$\\sqrt5$"],
      explanation: "Fikspunkt $L=\\sqrt{2L+3}\\Rightarrow L^2-2L-3=0\\Rightarrow L=3$ ($-1$ forkastes).",
    },
    {
      question: "Hvilken skråasymptote har grafen til $f(x)=x\\,e^{3/x}$ når $x\\to\\infty$?",
      options: ["$y=x+3$", "$y=x$", "$y=x+\\tfrac{9}{2}$", "$y=3x$"],
      explanation: "$x e^{3/x}=x+3+\\frac{9}{2x}+\\cdots\\to y=x+3$.",
    },
  ],
  'mat1100-7-3': [
    {
      question: "Hvordan er slutteksamen i MAT1100 bygget opp etter 2017?",
      options: ["Tolv til tretten begrunnede langsvar-delpunkter som teller likt", "Tjue flervalgsspørsmål med fem alternativer og ingen gjettestraff", "Tre store oppgaver der bare det endelige sluttsvaret gir uttelling", "En blanding av flervalg og ett enkelt langt bevis helt til slutt"],
      explanation: "Siden 2017 er slutteksamen 100 % begrunnet langsvar: 12–13 kjedede delpunkter som teller likt, over 4 timer. Flervalgsformatet hører til midtveiseksamen, ikke slutteksamen.",
    },
    {
      question: "Hva kreves i en konvergensavgjørelse (sjanger F) for full uttelling?",
      options: ["At sammenligningsobjektet navngis som et konvergent $p$-integral", "At integranden regnes ut eksakt og deretter settes lik uendelig helt til slutt", "At man slår fast at integranden går mot null når $x$ vokser mot uendelig", "At man tegner grafen til integranden nøye over hele integrasjonsområdet"],
      explanation: "Fasitpraksis krever et navngitt $p$-integral (konvergent for $p>1$ ved $\\infty$) og lim-føring. «Integranden går mot null» er ikke tilstrekkelig — den harmoniske typen $1/x$ går mot null, men integralet divergerer.",
    },
    {
      question: "Hvordan avgjøres deriverbarhet i et punkt (sjanger H) på gyldig vis?",
      options: ["Med differansekvotienten $f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$", "Ved å derivere formelen for $f$ og sette punktet rett inn i den", "Ved å sjekke om grensen av $f'(x)$ finnes når $x$ nærmer seg punktet", "Ved å vise at $f$ bare er kontinuerlig i det aktuelle punktet"],
      explanation: "Grensedefinisjonen er eneste gyldige vei. Å derivere formelen er ugyldig i skjøte-/oscillasjonspunkter, og at $\\lim f'(x)$ mangler beviser ikke at $f$ er ikke-deriverbar (oscillasjonsfellen).",
    },
    {
      question: "Når kan man entydig regne én periode bakover i en overgangsmodell (sjanger B)?",
      options: ["Når $\\det(M)\\ne0$, det vil si at $M$ er inverterbar", "Når alle kolonnene i matrisen $M$ summerer til tallet én", "Når $M$ bare har positive tall langs hoveddiagonalen sin", "Når matrisepotensen $M^k$ nærmer seg en fast grenseverdi"],
      explanation: "«Entydig vei tilbake» er ekvivalent med at $M$ er inverterbar, og kriteriet er $\\det M\\ne0$. Kolonnesum $1$ (stokastisk) og positive tall garanterer ikke inverterbarhet.",
    },
    {
      question: "Et område dreies om $y$-aksen. Hvilken metode gir enklest integral (sjanger D)?",
      options: ["Sylinderskall om $y$-aksen, $V=2\\pi\\int x\\,f(x)\\,dx$", "Skivemetoden med kvadrert radius, altså $V=\\pi\\int f(x)^2\\,dx$", "Buelengdeformelen med kvadratroten av $1+f'(x)^2$ i integranden", "Areal mellom to kurver integrert direkte i $y$-retningen isteden"],
      explanation: "Rotasjon om $y$-aksen løses enklest med sylinderskall, $V=2\\pi\\int x f(x)\\,dx$. Skiver om $y$-aksen ville krevd at man løser $x=f^{-1}(y)$ og integrerer i $y$ — som regel mye tyngre.",
    },
  ],
  'mat1100-7-4': [
    {
      question: "Hva skiller slutteksamen-simulering 2 fra simulering 1?",
      options: ["Den er bevistung: induksjon, Rolle-bevis og Jacobi-teoremveien", "Den er et rent flervalgssett i midtveisformat på bare to timer", "Den dekker bare komplekse tall og har ingen egen integrasjonsdel", "Den er kortere og teller langt mindre enn den første simuleringen"],
      explanation: "Simulering 2 følger samme mal (12–13 langsvar-delpunkter, 4 timer), men vektlegger bevis og teori: induksjon, Rolle med hjelpefunksjon, Jacobi og drøfting. Den er ikke flervalg og teller like mye som simulering 1.",
    },
    {
      question: "Hvilken faktor skiller volumet av et tetraeder fra parallellepipedet (sjanger C)?",
      options: ["En faktor $\\tfrac16$ ganget med tallverdien av determinanten", "En faktor $\\tfrac12$ fordi tetraederet er nøyaktig en halv boks", "En faktor $\\tfrac13$ akkurat som i formelen for volum av en kjegle", "Ingen faktor i det hele tatt; det er samme volum som parallellepipedet"],
      explanation: "Tetraederets volum er $\\tfrac16|\\det[\\mathbf a\\,\\mathbf b\\,\\mathbf c]|$ av kantvektorene. Den glemte $\\tfrac16$-faktoren er en dokumentert sensorfelle.",
    },
    {
      question: "Hva må et induksjonsbevis for $M^{2n}$ inneholde for full uttelling (sjanger L)?",
      options: ["Et verifisert basissteg og et eksplisitt induksjonstrinn", "Bare formelen for $M^n$ satt inn og sjekket for noen få verdier av $n$", "En utregning av selve grenseverdien når $n$ går mot uendelig", "En påstand om at mønsteret må gjelde fordi det ser slik ut i tabellen"],
      explanation: "Et gyldig induksjonsbevis krever basis (verifisert mot regningen) og et eksplisitt trinn $M^{2(k+1)}=M^{2k}M^2$. Å sjekke noen verdier eller vise til at «det ser slik ut» er ikke bevis.",
    },
    {
      question: "Et reelt polynom har roten $1+2i$. Hva følger av konjugatrotsetningen (sjanger G)?",
      options: ["At $1-2i$ også er en rot, siden koeffisientene er reelle", "At polynomet nødvendigvis må ha grad nøyaktig lik to", "At $1+2i$ opptrer som en dobbeltrot i det samme polynomet", "At alle røttene i polynomet må ligge på en sirkel om origo"],
      explanation: "For polynomer med reelle koeffisienter opptrer komplekse røtter i konjugatpar, så $\\overline{1+2i}=1-2i$ er også rot. Setningen sier ingenting om grad, multiplisitet eller plassering på en sirkel.",
    },
    {
      question: "Når skal $\\mathbf{r}$ normaliseres i retningsderiverten $f'(\\mathbf{a};\\mathbf{r})=\\nabla f(\\mathbf{a})\\cdot\\mathbf{r}$ (sjanger A)?",
      options: ["Bare når oppgaven ber om en enhetsretning eller «retningen til»", "Alltid, helt uavhengig av hvordan retningsvektoren er oppgitt", "Aldri, fordi kursets konvensjon forbyr normalisering fullstendig", "Bare når gradienten selv tilfeldigvis har lengde ulik tallet én"],
      explanation: "Kursets konvensjon $f'(\\mathbf a;\\mathbf r)=\\nabla f(\\mathbf a)\\cdot\\mathbf r$ bruker $\\mathbf r$ direkte. Du normaliserer kun når oppgaven eksplisitt ber om en enhetsretning eller «retningen til».",
    },
  ],
};

export default quizData_mat1100;
