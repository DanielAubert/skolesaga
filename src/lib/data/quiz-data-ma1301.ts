import type { QuizQuestion } from './quiz-data';

const quizData_ma1301: Record<string, QuizQuestion[]> = {
  'ma1301-0-1': [
    {
      question: "Hvor lang er den ordinære eksamenen i MA1301, og hva teller den?",
      options: ["Fire timer, og den teller 100 % av karakteren", "Fire timer, men bare 60 % — resten er obligatoriske øvinger", "Fem timer, og den teller 100 % av karakteren", "Tre timer skriftlig pluss en muntlig del som teller 40 %"],
      explanation: "Emnet vurderes med én skriftlig skoleeksamen på 4 timer som teller 100 %. Karakterskalaen er A–F. Det finnes ingen obligatorisk innleveringsdel som teller på karakteren.",
    },
    {
      question: "Hva innebærer hjelpemiddelkode D på denne eksamenen?",
      options: ["Ingen trykte eller håndskrevne hjelpemidler, bare en bestemt enkel kalkulator", "Alle trykte hjelpemidler tillatt, men ingen håndskrevne notater", "Ett gult stemplet A5-ark med egne notater, pluss enkel kalkulator", "En formelsamling deles ut sammen med oppgavesettet, men kalkulator er forbudt"],
      explanation: "Kode D betyr ingen bok, ingen formelsamling, ingen tabeller og ingen egne notater — bare en bestemt, enkel kalkulator. Det er grunnen til at hele apparatet må sitte utenat eller kunne utledes på stedet.",
    },
    {
      question: "Hvilket tema forekommer i alle de 15 løsningsforslagene som er lest i detalj?",
      options: ["Euklids algoritme frem og baklengs", "Den kvadratiske resiprositetsloven", "Kjedebrøk og konvergenter", "Pytagoreiske tripler med primitiv parametrisering"],
      explanation: "Euklids algoritme har 100 % frekvens — 15 av 15 sett. Resiprositet ligger på 10 av 15, pytagoreiske tripler på 3 av 15, og kjedebrøk på 2 av 15.",
    },
    {
      question: "Hvor mange delpunkt består et nyere eksamenssett typisk av, og hvordan vektes de?",
      options: ["Omtrent ti delpunkt, og de teller alle likt", "Omtrent ti delpunkt, men de siste teller dobbelt", "Fire hovedoppgaver med vekting oppgitt i prosent på forsiden", "Tolv delpunkt der bevisoppgavene teller mest"],
      explanation: "Nyere sett oppgir eksplisitt at settet har omtrent ti delpunkt som alle teller likt. Med fire timer gir det omtrent 24 minutter per delpunkt.",
    },
    {
      question: "Hva er den gjennomgående instruksen på hvert eksamenssett i dette emnet?",
      options: ["Alle svar må begrunnes", "Bare sluttsvaret vurderes, så vis minst mulig mellomregning", "Oppgavene skal besvares i oppgitt rekkefølge", "Hjelpemidler skal oppgis i margen ved hver oppgave"],
      explanation: "Instruksen «alle svar må begrunnes» står på hvert sett. Praktisk betyr det at et riktig sluttall uten vist metode teller lite, mens en riktig ført metode med en regnefeil i siste linje gir betydelig uttelling.",
    },
    {
      question: "Hvilke fem temaer utgjør «de fem søylene» i dette emnet?",
      options: ["Euklids algoritme, Euler og ϕ, det kinesiske restteoremet, Wilson og RSA", "Euklids algoritme, Fermat, Legendre-symbolet, induksjon og RSA", "Diofantiske likninger, kjedebrøk, Pells likning, induksjon og orden modulo n", "Euler og ϕ, Wilson, resiprositet, primitive røtter og τ med σ"],
      explanation: "De fem søylene er de høyfrekvente: Euklid 15 av 15, Euler og ϕ 14 av 15, det kinesiske restteoremet 12 av 15, Wilson 11 av 15 og RSA 10 av 15. Til sammen henter de omtrent 5 av 10 delpunkt.",
    },
    {
      question: "Hvorfor er en «slå opp»-vane skadelig når du forbereder deg til dette emnet?",
      options: ["Den erstatter en ferdighet du trenger med en handling du ikke får utføre", "Den er sjelden effektiv nok til å rekke gjennom hele pensum i tid", "Den fører til at du husker formlene, men glemmer utledningene bak dem", "Den gjør at du bruker for lang tid per delpunkt på selve eksamensdagen"],
      explanation: "Under kode D finnes det ingenting å slå opp i. Øver du inn oppslag, trener du en handling som er utilgjengelig 24. november, i stedet for gjenkallingen eksamen faktisk måler.",
    },
    {
      question: "Hvilken bevisform er den vanligste i arkivet, og med hvilken frekvens?",
      options: ["Induksjon, i 8 av 15 sett", "Induksjon, i 14 av 15 sett", "Motsigelsesbevis, i 12 av 15 sett", "Kontrapositivt bevis, i 6 av 15 sett"],
      explanation: "Induksjon forekommer i 8 av 15 sett, altså 53 %. Bevis om delelighet og primtall ligger på omtrent samme nivå. Hvert sett har minst én ren bevisoppgave.",
    },
    {
      question: "Hva er nevneren i alle frekvenspåstandene i denne boka?",
      options: ["15 — de løsningsforslagene fra 2014 til 2025 som er lest i detalj", "82 — samtlige unike filer som ligger i arkivet, fra 2003 til 2025", "10 — antall delpunkt i et typisk eksamenssett", "11 — de rene skannene som ikke lot seg tekstutvinne"],
      explanation: "Frekvensgrunnlaget er de 15 detaljleste løsningsforslagene 2014–2025. Arkivet har 82 unike filer i alt, men de eldre settene inngår ikke i tallene — de brukes bare til å dokumentere at oppgavetradisjonen er stabil.",
    },
    {
      question: "Hvorfor er Euklids algoritme viktigere enn frekvenstallet alene antyder?",
      options: ["Den er også motoren i diofantiske likninger, modulær invers og RSA", "Den er den eneste teknikken kalkulatoren kan utføre for deg", "Den er den eneste algoritmen som kan brukes uten hjelpemidler", "Den brukes i alle bevisoppgavene som handler om delelighet"],
      explanation: "Algoritmen har 100 % frekvens i seg selv, men bærer i tillegg tre andre sjangre: den finner Bézout-koeffisientene til diofantiske likninger, den gir den modulære inversen, og den gir dekrypteringseksponenten i RSA.",
    },
  ],
  'ma1301-1-1': [
    {
      question: "Hva betyr $a\\mid b$?",
      options: ["Det finnes et helt tall $t$ slik at $b=at$", "Det finnes et helt tall $t$ slik at $a=bt$", "Brøken $a/b$ er et helt tall uten rest", "Tallene $a$ og $b$ har ingen felles primfaktor"],
      explanation: "Delelighet defineres ved at det finnes et helt tall $t$ med $b=at$. Merk retningen: det lille tallet står først, så $3\\mid 12$ er sant og $12\\mid 3$ er galt.",
    },
    {
      question: "Hva sier lineærkombinasjonsregelen for delelighet?",
      options: ["Hvis $a\\mid b$ og $a\\mid c$, så $a\\mid(bx+cy)$ for alle hele $x,y$", "Hvis $a\\mid b$ og $a\\mid c$, så $a\\mid(bx+cy)$ bare for positive $x,y$", "Hvis $a\\mid b$ eller $a\\mid c$, så $a\\mid(bx+cy)$ for alle hele $x,y$", "Hvis $a\\mid bc$, så $a\\mid b$ og $a\\mid c$ for alle hele tall"],
      explanation: "Regelen gjelder for alle hele $x$ og $y$, også negative og null. Den er verktøyet i de fleste delelighetsbevisene, og den er grunnen til at Euklids algoritme virker.",
    },
    {
      question: "Hvilke betingelser inngår i divisjonsalgoritmen $a=qb+r$?",
      options: ["Resten oppfyller $0\\le r<b$, og paret $q,r$ er entydig bestemt", "Resten oppfyller $0<r\\le b$, og paret $q,r$ er entydig bestemt", "Resten oppfyller $|r|<b$, slik at $r$ kan være negativ", "Resten oppfyller $0\\le r<b$, men $q$ kan velges fritt blant flere"],
      explanation: "Betingelsen $0\\le r<b$ er det som gjør paret entydig. Resten er alltid ikke-negativ, også når $a$ er negativ: $-37=(-4)\\cdot 10+3$, ikke $(-3)\\cdot 10-7$.",
    },
    {
      question: "Hva er kvotient og rest når $-37$ deles på $10$?",
      options: ["$q=-4$ og $r=3$", "$q=-3$ og $r=-7$", "$q=-4$ og $r=-3$", "$q=-3$ og $r=7$"],
      explanation: "Kvotienten rundes nedover, altså mot minus uendelig: $-37/10=-3{,}7$ gir $q=-4$. Da er $r=-37+40=3$, som oppfyller $0\\le 3<10$.",
    },
    {
      question: "Hva sier Euklids lemma?",
      options: ["Er $p$ prim og $p\\mid ab$, så $p\\mid a$ eller $p\\mid b$", "Er $p$ prim og $p\\mid ab$, så $p\\mid a$ og $p\\mid b$", "For alle hele tall $n$ gjelder at $n\\mid ab$ gir $n\\mid a$ eller $n\\mid b$", "Er $p$ prim og $p\\nmid ab$, så $p\\nmid a$ eller $p\\nmid b$"],
      explanation: "Konklusjonen er «eller», ikke «og»: fra $3\\mid 6\\cdot 5$ følger $3\\mid 6$, ikke $3\\mid 5$. Og $p$ må være et primtall — $6\\mid 4\\cdot 9$, men $6$ deler ingen av faktorene.",
    },
    {
      question: "Hvorfor holder det å teste primtall opp til $\\sqrt n$ i prøvedivisjon?",
      options: ["Er $n=ab$ med $1<a\\le b$, må $a\\le\\sqrt n$, ellers blir $ab>n$", "Fordi primtall større enn $\\sqrt n$ aldri deler et sammensatt tall", "Fordi hvert sammensatt tall har nøyaktig to divisorer under $\\sqrt n$", "Fordi antall divisorer i $n$ alltid er mindre enn $\\sqrt n$"],
      explanation: "Divisorene kommer i par $(a,b)$ med $ab=n$, og i hvert par ligger én på hver side av $\\sqrt n$. Var begge over, ville produktet blitt større enn $n$. Finner du ingen under, finnes det ingen par.",
    },
    {
      question: "Hvordan leses $\\gcd(a,b)$ av primtallsfaktoriseringene?",
      options: ["Ta hvert felles primtall med den minste av de to eksponentene", "Ta hvert felles primtall med den største av de to eksponentene", "Ta hvert primtall som finnes i minst ett tall, med minste eksponent", "Ta hvert felles primtall med summen av de to eksponentene"],
      explanation: "En felles divisor kan ikke bruke flere kopier av $p_i$ enn det knappeste av tallene har, så $\\gcd$ tar minimum. Motsatt tar $\\operatorname{lcm}$ maksimum. Minnekroken: gcd tar minst, lcm tar mest.",
    },
    {
      question: "Hva er $\\gcd(504,396)$?",
      options: ["$36$", "$12$", "$72$", "$18$"],
      explanation: "Faktoriseringene er $504=2^3\\cdot 3^2\\cdot 7$ og $396=2^2\\cdot 3^2\\cdot 11$. Minste eksponenter gir $2^2\\cdot 3^2=36$. Kontroll med produktregelen: $36\\cdot 5544=199\\,584=504\\cdot 396$.",
    },
    {
      question: "Hva er produktregelen for $\\gcd$ og $\\operatorname{lcm}$?",
      options: ["$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$", "$\\gcd(a,b)+\\operatorname{lcm}(a,b)=a+b$", "$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=a+b$", "$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ bare når $\\gcd(a,b)=1$"],
      explanation: "Regelen gjelder for alle positive $a,b$. Den følger av at $\\min(k,l)+\\max(k,l)=k+l$ for hver eksponent. Bruk den som snarvei ($\\operatorname{lcm}=ab/\\gcd$) og som kontroll.",
    },
    {
      question: "Hva menes med at tallene $6$, $10$ og $15$ ikke er parvis relativt primiske?",
      options: ["Minst ett par har en felles faktor, her $\\gcd(6,10)=2$", "Alle tre tallene har en felles faktor større enn $1$", "Produktet av de tre tallene er ikke kvadratfritt", "Ingen av de tre tallene er selv et primtall"],
      explanation: "Parvis relativt primisk krever at hvert par har $\\gcd=1$. Her er $\\gcd(6,10)=2$. Merk at $\\gcd(6,10,15)=1$ — ingen faktor er felles for alle tre. Skillet er avgjørende i det kinesiske restteoremet.",
    },
    {
      question: "Hvilken halvdel av aritmetikkens fundamentalteorem bruker du når du sammenligner eksponenter i et bevis?",
      options: ["Entydigheten — at det ikke finnes to forskjellige faktoriseringer", "Eksistensen — at hvert tall har en primtallsfaktorisering", "Begge halvdelene må brukes samtidig for at skrittet skal være lovlig", "Ingen av dem; sammenligning av eksponenter følger av Euklids lemma"],
      explanation: "Eksistensen bruker du når du faktoriserer. Entydigheten er det som gjør det lovlig å sammenligne eksponenter på to sider av en likning — og det er den som skal navngis i beviset.",
    },
    {
      question: "Hvorfor regnes ikke $1$ som et primtall?",
      options: ["Fordi entydig primtallsfaktorisering ville falt bort", "Fordi $1$ ikke har noen positive divisorer i det hele tatt", "Fordi $1$ er et kvadrattall og primtall aldri er kvadrattall", "Fordi definisjonen krever at tallet skal være et oddetall"],
      explanation: "Var $1$ et primtall, ville $6=2\\cdot 3=1\\cdot 2\\cdot 3=1\\cdot 1\\cdot 2\\cdot 3$ gitt uendelig mange faktoriseringer. Tallet $1$ er verken primtall eller sammensatt — det kalles en enhet.",
    },
    {
      question: "Hva er primtallsfaktoriseringen til $2450$?",
      options: ["$2\\cdot 5^2\\cdot 7^2$", "$2\\cdot 5^2\\cdot 7^3$", "$2^2\\cdot 5\\cdot 7^2$", "$2\\cdot 5^3\\cdot 7$"],
      explanation: "$2450=2\\cdot 1225$, $1225=5\\cdot 245$, $245=5\\cdot 49$, og $49=7^2$. Kontroll: $2\\cdot 25\\cdot 49=2450$.",
    },
    {
      question: "Er $391$ et primtall?",
      options: ["Nei, $391=17\\cdot 23$", "Nei, $391=13\\cdot 31$ etter prøvedivisjon", "Ja, ingen primtall opp til $19$ deler tallet", "Nei, $391=7\\cdot 57$ som gir en ekte divisor"],
      explanation: "Grensen er $\\sqrt{391}\\approx 19{,}8$, så vi tester opp til $19$. Vi treffer på $17$: $391=17\\cdot 23$. Begge faktorene er primtall, så dette er hele faktoriseringen.",
    },
    {
      question: "Når er et positivt helt tall et kvadrattall, lest av faktoriseringen?",
      options: ["Når alle eksponentene i primtallsfaktoriseringen er like tall", "Når alle eksponentene i primtallsfaktoriseringen er odde tall", "Når antall forskjellige primfaktorer er et like tall", "Når summen av alle eksponentene er et like tall"],
      explanation: "Er alle eksponenter like, kan de halveres, og kvadratrota er produktet av primtallene med de halve eksponentene. $1764=2^2\\cdot 3^2\\cdot 7^2=42^2$, mens $1176=2^3\\cdot 3\\cdot 7^2$ ikke er et kvadrattall.",
    },
    {
      question: "Hva er egenskapen til Euklids tall $N=p_1p_2\\cdots p_k+1$?",
      options: ["Ingen av primtallene $p_1,\\dots,p_k$ deler $N$", "Tallet $N$ er selv alltid et primtall", "Alle primtallene $p_1,\\dots,p_k$ deler $N$ med rest $1$ hver", "Tallet $N$ har nøyaktig $k+1$ forskjellige primfaktorer"],
      explanation: "Deler $p_i$ både $N$ og produktet, deler den differansen $1$ — umulig. Men $N$ er ikke nødvendigvis prim: for listen $2,3,5,7,11,13$ er $N=30\\,031=59\\cdot 509$.",
    },
    {
      question: "Hva bruker beviset for at det finnes uendelig mange primtall Euklids tall til?",
      options: ["Å tvinge fram en primdivisor som ikke står i den antatte listen", "Å vise at $N$ selv er et primtall utenfor listen", "Å vise at listen må inneholde minst ett sammensatt tall", "Å konstruere et tall som ingen primtall i det hele tatt deler"],
      explanation: "Beviset trenger bare at $N>1$ har en primdivisor, og at ingen i listen kan være den. Om $N$ selv er prim, er uvesentlig — det er derfor $30\\,031=59\\cdot 509$ ikke skader argumentet.",
    },
    {
      question: "Hva er $\\operatorname{lcm}(1176,2100)$, gitt at $\\gcd(1176,2100)=84$?",
      options: ["$29\\,400$", "$24\\,600$", "$2\\,469\\,600$", "$14\\,700$"],
      explanation: "Ved produktregelen er $\\operatorname{lcm}=ab/\\gcd=1176\\cdot 2100/84$. Forkort først: $1176/84=14$, så $\\operatorname{lcm}=14\\cdot 2100=29\\,400$. Tallet $2\\,469\\,600$ er produktet $ab$ selv.",
    },
    {
      question: "Hva må gjelde for at $ab\\mid n$ skal følge fra $a\\mid n$ og $b\\mid n$?",
      options: ["At $\\gcd(a,b)=1$", "At både $a$ og $b$ er primtall", "At $a$ og $b$ begge deler $\\gcd(a,n)$", "At $n$ er et kvadrattall"],
      explanation: "Uten $\\gcd(a,b)=1$ faller påstanden: $4\\mid 12$ og $6\\mid 12$, men $24\\nmid 12$. Betingelsen sikrer at eksponentene til hvert primtall i $a$ og $b$ ikke overlapper, så summen ikke overskrider eksponenten i $n$.",
    },
    {
      question: "Hva er den vanligste forvekslingen knyttet til notasjonen $a\\mid b$?",
      options: ["Å bytte om retningen, altså lese den som at $b$ deler $a$", "Å tro at symbolet betyr absoluttverdi av differansen", "Å tro at symbolet krever at både $a$ og $b$ er positive", "Å tro at symbolet betyr det samme som brøken $a/b$"],
      explanation: "Det lille tallet står først: $3\\mid 12$ er sant, $12\\mid 3$ er galt. Feilen forplanter seg til løsbarhetskriteriet $d\\mid c$ i diofantiske likninger, der retningen avgjør hele konklusjonen.",
    },
  ],
  'ma1301-1-2': [
    {
      question: "Hva er svaret Euklids algoritme gir deg?",
      options: ["Den siste resten som ikke er $0$", "Den siste resten, altså $0$ selv", "Divisoren i den første linja av kjeden", "Summen av alle kvotientene i kjeden"],
      explanation: "Kjeden ender med $r_{k-1}=q\\cdot r_k+0$, og svaret er $r_k$ — divisoren i siste linje, som samtidig er resten i linja over. Kontrollér alltid at tallet deler begge de opprinnelige tallene.",
    },
    {
      question: "Hvilke to tall deler du i hver ny linje av divisjonskjeden?",
      options: ["Divisoren fra forrige linje, delt på resten fra forrige linje", "Det opprinnelige $a$, delt på resten fra forrige linje", "Resten fra forrige linje, delt på divisoren fra forrige linje", "Det opprinnelige $a$, delt på divisoren fra forrige linje"],
      explanation: "Tallene flytter seg ett hakk per linje, og det opprinnelige $a$ er ute av bildet etter linje 1. Kontrollen ligger i mønsteret: hvert tall opptrer først som rest, så som divisor, så som dividend.",
    },
    {
      question: "Hva sier Euklids nøkkellemma?",
      options: ["$\\gcd(a,b)=\\gcd(b,r)$ når $a=qb+r$", "$\\gcd(a,b)=\\gcd(q,r)$ når $a=qb+r$", "$\\gcd(a,b)=\\gcd(a,r)$ når $a=qb+r$", "$\\gcd(a,b)=r$ når $a=qb+r$ og $r>0$"],
      explanation: "Lemmaet sier at paret $(a,b)$ og paret $(b,r)$ har nøyaktig de samme felles divisorene, og dermed samme største. Beviset er lineærkombinasjonsregelen brukt i begge retninger.",
    },
    {
      question: "Hvorfor stopper Euklids algoritme alltid?",
      options: ["Restene er en strengt avtakende følge av ikke-negative hele tall", "Restene blir alltid halvert for hver linje i kjeden", "Kvotientene vokser, så resten må nå $0$ etter høyst $b$ linjer", "Fordi det finnes bare endelig mange primtall under $a$"],
      explanation: "Hver rest er mindre enn divisoren den kom fra, siden $0\\le r<b$. En strengt avtakende følge av ikke-negative hele tall kan ikke være uendelig, så en rest blir $0$.",
    },
    {
      question: "Hvor starter du substitusjonskjeden baklengs?",
      options: ["I den nest siste linja, der resten er $\\gcd$", "I den siste linja, der resten er $0$", "I den første linja, der du delte $a$ på $b$", "I den linja der kvotienten er størst"],
      explanation: "Den nest siste linja har $\\gcd$ som rest, og du løser den for $\\gcd$. Deretter substituerer du oppover, én linje av gangen, til bare $a$ og $b$ står igjen.",
    },
    {
      question: "Hvilket råd forhindrer flest feil i baklengs-kjeden?",
      options: ["Ikke gang ut produktene — la for eksempel $5\\cdot 33$ stå som det er", "Gang alltid ut produktene, så tallene blir enkle å trekke sammen", "Regn kjeden nedenfra og opp uten å skrive mellomstegene", "Bytt fortegn på alle kvotientene før du begynner"],
      explanation: "Ganger du $4\\cdot 33$ ut til $132$, forsvinner $33$ fra uttrykket, og du har ingenting å substituere i neste steg. Kjeden er da ødelagt. La produktene stå til siste linje.",
    },
    {
      question: "Hva sier Bézouts identitet?",
      options: ["Det finnes hele tall $x,y$ med $\\gcd(a,b)=ax+by$", "Det finnes hele tall $x,y$ med $\\operatorname{lcm}(a,b)=ax+by$", "For alle hele $x,y$ gjelder at $ax+by$ deler $\\gcd(a,b)$", "Det finnes positive hele tall $x,y$ med $\\gcd(a,b)=ax+by$"],
      explanation: "Mer presist er $\\gcd(a,b)$ det minste positive tallet på formen $ax+by$, og alle tall på formen er multipler av $\\gcd$. Koeffisientene kan godt være negative — som regel er én av dem det.",
    },
    {
      question: "Er Bézout-koeffisientene entydige?",
      options: ["Nei, du får uendelig mange ved å flytte langs $x+\\frac bd t$ og $y-\\frac ad t$", "Ja, det finnes nøyaktig ett par for hvert tallpar $a,b$", "Ja, så snart man krever at begge koeffisientene skal være minst mulige i tallverdi", "Nei, men det finnes nøyaktig $d$ forskjellige par"],
      explanation: "Har du ett par, gir hver verdi av $t$ et nytt: de to ekstraleddene $\\frac{ab}{d}t$ kansellerer. Praktisk betyr det at fasiten din kan avvike fra løsningsforslaget og likevel være riktig — kontrollér ved innsetting.",
    },
    {
      question: "Hva er $\\gcd(803,154)$ skrevet på formen $803x+154y$?",
      options: ["$11=803\\cdot 5+154\\cdot(-26)$", "$11=803\\cdot(-5)+154\\cdot 26$", "$11=803\\cdot 26+154\\cdot(-5)$", "$7=803\\cdot 5+154\\cdot(-26)$"],
      explanation: "Kjeden er $803=5\\cdot 154+33$, $154=4\\cdot 33+22$, $33=1\\cdot 22+11$, $22=2\\cdot 11+0$. Baklengs gir $11=803\\cdot 5+154\\cdot(-26)$. Kontroll: $4015-4004=11$.",
    },
    {
      question: "Hva betyr det at $\\gcd(a,b)=1$, uttrykt med Bézout?",
      options: ["Det finnes hele tall $x,y$ med $ax+by=1$", "Det finnes hele tall $x,y$ med $ax+by=0$", "For alle hele tall $x,y$ er $ax+by$ ulik $1$", "Det finnes hele tall $x,y$ med $ax+by=ab$"],
      explanation: "Begge retninger er korte: Bézout gir slike $x,y$ når $\\gcd=1$, og finnes de, må $\\gcd$ dele $1$. Dette er den formen som tåler en ukjent i koeffisientene, der faktorisering ikke er mulig.",
    },
    {
      question: "Hvordan viser du at $4n+3$ og $3n+2$ er relativt primiske for alle hele $n$?",
      options: ["Ved å regne $3(4n+3)-4(3n+2)=1$ og bruke lineærkombinasjonsregelen", "Ved å kjøre Euklids algoritme på de to uttrykkene som tall", "Ved å faktorisere begge uttrykkene og sammenligne primfaktorene", "Ved å sette inn nok verdier av $n$ til at mønsteret er klart"],
      explanation: "Med en ukjent $n$ finnes ingen divisjonskjede å kjøre og ingenting å faktorisere. Du presenterer $1$ som en lineærkombinasjon: en felles divisor må da dele $1$, altså er $\\gcd=1$ for alle $n$.",
    },
    {
      question: "Hvilket fortegnsmønster har Bézout-koeffisientene når $\\gcd$ er lite i forhold til $a$ og $b$?",
      options: ["De har motsatt fortegn — én positiv og én negativ", "De har samme fortegn — begge positive eller begge negative", "Begge er alltid positive, siden $\\gcd$ er positiv", "Fortegnene avhenger av om antall divisjonslinjer er like"],
      explanation: "Skal $ax+by$ bli et lite positivt tall mens $a$ og $b$ er store, må leddene nesten kansellere hverandre. To positive ledd gir minst $a+b$. Bruk det som kontroll: to positive er et varsel om mistet minustegn.",
    },
    {
      question: "Hvor mange divisjonslinjer gir Euklids algoritme typisk for firesifrede tall?",
      options: ["Fire til seks", "Ti til femten", "Omtrent like mange som antall siffer i produktet $ab$", "Én linje per primfaktor i det største tallet"],
      explanation: "Antall linjer vokser som logaritmen av tallene, og verste tilfelle er nabotall i Fibonacci-følgen. Blir kjeden din tolv linjer på firesifrede tall, har du sannsynligvis regnet feil.",
    },
    {
      question: "Hvorfor bruker du Euklids algoritme og ikke faktorisering på eksamen?",
      options: ["Den krever bare divisjon, og den gir Bézout-koeffisientene", "Den gir alltid et mindre svar enn faktoriseringsmetoden", "Faktorisering er ikke tillatt under hjelpemiddelkode D", "Den fungerer også når tallene ikke har noen felles divisor"],
      explanation: "Oppgavene har tall der prøvedivisjon tar for lang tid, og faktoriseringen gir deg ikke koeffisientene, som er det du trenger videre til diofant, invers og RSA. Faktorisering er nyttig som kontroll.",
    },
    {
      question: "Hvordan får du den modulære inversen ut av Bézout-likningen $ax+my=1$?",
      options: ["Les likningen modulo $m$, så forsvinner $my$-leddet", "Les likningen modulo $a$, så forsvinner $ax$-leddet", "Bytt fortegn på $x$ og reduser resultatet modulo $m$", "Del hele likningen på $a$ og reduser modulo $m$"],
      explanation: "Leddet $my$ er et multiplum av $m$, så modulo $m$ står det $ax\\equiv 1$. Altså er $x$ inversen. Ligger $x$ utenfor $0\\le x<m$, legg til eller trekk fra $m$.",
    },
    {
      question: "Hva er invarianten i hver rad av den utvidede algoritmens tabellform?",
      options: ["$ax+by=r$, der $r$, $x$ og $y$ er radens verdier", "$ax+by=\\gcd(a,b)$ i hver rad, uansett hvor du stopper", "$x+y=q$, der $q$ er radens kvotient", "$r$ er alltid produktet av $x$ og $y$ i samme rad"],
      explanation: "Invarianten gjør tabellen selvkontrollerende: velg en rad, sett inn, og se at det stemmer. Det er tabellformens fordel — feilen oppdages i raden der den skjedde.",
    },
    {
      question: "Kan tabellformen erstatte substitusjonskjeden i en eksamensbesvarelse?",
      options: ["Nei, den er en alternativ føring du kan vise ved siden av", "Ja, den gir samme koeffisienter og er derfor likeverdig føring", "Ja, forutsatt at du oppgir invarianten $ax+by=r$ for hver rad", "Nei, tabellformen gir andre koeffisienter enn substitusjonskjeden"],
      explanation: "De to metodene gir samme svar, men føringskravet i dette emnet er at algoritmen vises frem og baklengs. Tabellen gir koeffisientene uten å vise substitusjonene, som fasitene forventer utskrevet.",
    },
    {
      question: "Hvordan håndterer du negative tall i Euklids algoritme?",
      options: ["Ta absoluttverdiene først, siden $\\gcd(a,b)=\\gcd(|a|,|b|)$", "Behold fortegnene, siden algoritmen håndterer dem selv", "Legg til modulusen til begge tallene før du begynner", "Bytt om tallene, slik at det negative står sist i kjeden"],
      explanation: "Fortegn påvirker ikke $\\gcd$, siden $d\\mid a$ nøyaktig når $d\\mid(-a)$. Gjør det som første linje i besvarelsen, ikke underveis — da har du fjernet en fortegnsfelle fra hele oppgaven.",
    },
    {
      question: "Hvilke tre steg utgjør føringsmalen for Euklid i dette emnet?",
      options: ["Divisjonskjeden frem, substitusjonskjeden baklengs, konklusjonssetning", "Faktorisering, sammenligning av eksponenter, konklusjonssetning", "Divisjonskjeden frem, kontroll ved innsetting, tabellform som alternativ", "Løsbarhetssjekk, divisjonskjeden frem, substitusjonskjeden baklengs"],
      explanation: "Hvert av de tre stegene bærer uttelling for seg selv, fordi instruksen på hvert sett er at alle svar skal begrunnes. Et $\\gcd$ uten kjeden er et sluttall uten metode.",
    },
    {
      question: "Hvilken feil i dette stoffet er best belagt i arkivet?",
      options: ["Euklid baklengs slurves — mistet fortegn eller for tidlig utganging", "Kvotientene regnes ut i gal rekkefølge i divisjonskjeden", "Algoritmen kjøres på tallene i gal rekkefølge, med det minste tallet øverst", "Kjeden avsluttes før resten har blitt mindre enn divisoren"],
      explanation: "De to vanligste variantene er at et fortegn mistes i en substitusjon, og at produktene ganges ut underveis slik at tallet som skulle substitueres forsvinner. Kontrollen ved innsetting fanger begge.",
    },
  ],
  'ma1301-1-3': [
    {
      question: "Når har $ax+by=c$ heltallsløsninger?",
      options: ["Nøyaktig når $\\gcd(a,b)$ deler $c$", "Nøyaktig når $c$ deler $\\gcd(a,b)$", "Nøyaktig når $\\gcd(a,b)=1$, uansett hva $c$ er", "Nøyaktig når $\\gcd(a,c)$ deler $b$"],
      explanation: "Tallene på formen $ax+by$ er nøyaktig multiplene av $\\gcd(a,b)$, så $c$ må være et slikt multiplum. Merk retningen: $\\gcd$ deler $c$, ikke omvendt.",
    },
    {
      question: "Hva er hele løsningsmengden til $ax+by=c$, gitt én løsning $(x_0,y_0)$?",
      options: ["$x=x_0+\\frac bd t$, $y=y_0-\\frac ad t$, $t\\in\\mathbb{Z}$", "$x=x_0+\\frac ad t$, $y=y_0-\\frac bd t$, $t\\in\\mathbb{Z}$", "$x=x_0+bt$, $y=y_0-at$, $t\\in\\mathbb{Z}$", "$x=x_0+\\frac bd t$, $y=y_0+\\frac ad t$, $t\\in\\mathbb{Z}$"],
      explanation: "Koeffisientene bytter plass ($x$ får $b/d$), og fortegnene krysser ($x$ får pluss, $y$ minus). Det er nettopp kryssingen som gjør at de to $t$-leddene kansellerer når du setter inn.",
    },
    {
      question: "Hvorfor er skrittlengden $b/d$ og ikke $b$?",
      options: ["Med $b$ hopper du over $d-1$ av hver $d$ løsninger", "Med $b$ får du løsninger som ikke tilfredsstiller likningen", "Fordi $b/d$ alltid er et primtall når $d=\\gcd(a,b)$", "Fordi $b$ ville gitt negative verdier for $y$ i alle løsninger"],
      explanation: "Skrittet $b$ virker også, men er $d$ ganger for langt. For $803x+154y=44$ med $d=11$ er skrittlengden $14$; bruker du $154$, får du 1 av 11 løsninger — og mister «minste positive», som var $6$ og ikke $20$.",
    },
    {
      question: "Hva er den mest belagte feilen i sjanger A?",
      options: ["Å glemme å skalere Bézout-likningen med $c/d$", "Å glemme å sjekke at $a$ og $b$ er relativt primiske", "Å bruke Euklids algoritme i stedet for faktorisering", "Å oppgi løsningen med negativ verdi for $y$"],
      explanation: "Man finner $d=ax'+by'$ riktig og oppgir $(x',y')$ — men det løser $ax+by=d$, ikke $ax+by=c$. Kontrollen: sett svaret inn og se om du får $c$ eller $d$.",
    },
    {
      question: "Hvor mange heltallsløsninger har en lineær diofantisk likning?",
      options: ["Ingen, eller uendelig mange", "Nøyaktig $\\gcd(a,b)$ løsninger", "Alltid nøyaktig én, når løsbarhetskriteriet er oppfylt", "Høyst $\\operatorname{lcm}(a,b)$ løsninger"],
      explanation: "Har du én løsning, gir hver verdi av $t$ en ny, og alle er forskjellige. Spør oppgaven om et endelig antall, finnes det en tilleggsbetingelse — et intervall eller et krav om ikke-negative verdier.",
    },
    {
      question: "Hva er skaleringsfaktoren du ganger Bézout-likningen med?",
      options: ["$c/d$, som er et helt tall fordi $d\\mid c$", "$d/c$, som er et helt tall fordi $c\\mid d$", "$c$ alene, siden Bézout gir høyresiden $1$", "$\\operatorname{lcm}(a,b)/c$, som er et helt tall når likningen er løsbar"],
      explanation: "Bézout gir alltid $d$ på høyre side, aldri $c$. Faktoren $c/d$ er hel nettopp fordi løsbarhetskriteriet holder. Får du en brøk her, har du hoppet over løsbarhetssjekken.",
    },
    {
      question: "Hvordan finner du den minste positive verdien av $x$?",
      options: ["Løs $x_0+\\frac bd t\\ge 1$ for $t$ og rund oppover", "Velg $t=0$, siden partikulærløsningen alltid er den minste", "Reduser $x_0$ modulo $\\gcd(a,b)$", "Velg det $t$ som gjør $y$ minst mulig positivt"],
      explanation: "Du løser en ulikhet i $t$, runder oppover, og regner ut både $x$ og $y$. Partikulærløsningen er sjelden svaret: for $1666x+646y=204$ er $x_0=42$ mens minste positive $x$ er $4$.",
    },
    {
      question: "Hvorfor kansellerer $t$-leddene når du setter parametriseringen inn i likningen?",
      options: ["Fordi $a\\cdot\\frac bd$ og $b\\cdot\\frac ad$ er samme tall", "Fordi $t$ alltid velges slik at leddene blir null", "Fordi $\\frac bd$ og $\\frac ad$ er hverandres inverser", "Fordi $a$ og $b$ har motsatt fortegn i parametriseringen"],
      explanation: "Begge produktene er $\\frac{ab}{d}=\\operatorname{lcm}(a,b)$, og de opptrer med motsatt fortegn på grunn av kryssingen. Bruk det som kontroll: regn ut $a\\cdot\\frac bd$ og $b\\cdot\\frac ad$ og se at de er like.",
    },
    {
      question: "Har $803x+154y=30$ heltallsløsninger?",
      options: ["Nei, siden $\\gcd(803,154)=11$ og $11\\nmid 30$", "Nei, siden $\\gcd(803,154)=7$ og $7\\nmid 30$", "Ja, med $x_0=20$ og $y_0=-104$ etter skalering", "Ja, siden $30$ er mindre enn begge koeffisientene"],
      explanation: "Løsbarhetssjekken avgjør saken: $30=2\\cdot 11+8$, med rest $8$. Du skal ikke forsøke å løse videre — «ingen heltallsløsninger» er et fullstendig svar når begrunnelsen står der.",
    },
    {
      question: "Hva er hele løsningsmengden til $803x+154y=44$?",
      options: ["$x=20+14t$, $y=-104-73t$, $t\\in\\mathbb{Z}$", "$x=20+73t$, $y=-104-14t$, $t\\in\\mathbb{Z}$", "$x=5+14t$, $y=-26-73t$, $t\\in\\mathbb{Z}$", "$x=20+154t$, $y=-104-803t$, $t\\in\\mathbb{Z}$"],
      explanation: "Her er $d=11$, så $b/d=14$ og $a/d=73$. Bézout ga $11=803\\cdot 5+154\\cdot(-26)$, skalert med $4$: $x_0=20$, $y_0=-104$. Paret $(5,-26)$ løser likningen med høyreside $11$.",
    },
    {
      question: "Hva er det geometriske bildet av en lineær diofantisk likning?",
      options: ["Gitterpunktene en rett linje treffer i planet", "Skjæringspunktet mellom to rette linjer i planet", "Gitterpunktene inne i en trekant med hjørner i origo", "Punktene der en parabel krysser en av aksene"],
      explanation: "Likningen $ax+by=c$ er en linje, og løsningene er punktene med heltallskoordinater den treffer. Bildet forklarer at løsningene ligger jevnt fordelt med skrittet $(b/d,-a/d)$, og at antallet er null eller uendelig.",
    },
    {
      question: "Hvordan finner du antall løsninger når $x$ er begrenset til et intervall?",
      options: ["Tell hele tall $t$ i intervallet: $t_{\\max}-t_{\\min}+1$", "Tell hele tall $t$ i intervallet: $t_{\\max}-t_{\\min}$", "Del intervallets lengde på $\\gcd(a,b)$ og rund nedover", "Del intervallets lengde på $\\operatorname{lcm}(a,b)$ og rund oppover"],
      explanation: "Sett parametriseringen inn i begge grensene, løs for $t$, rund innover, og husk $+1$: fra $t=2$ til $t=5$ er det fire verdier. Sjekk til slutt at $t_{\\min}-1$ og $t_{\\max}+1$ faller utenfor.",
    },
    {
      question: "Hvorfor er Bézout-formen den eneste veien når koeffisientene inneholder en ukjent $n$?",
      options: ["Fordi det ikke finnes noe å faktorisere eller noen kjede å kjøre", "Fordi Euklids algoritme bare virker på positive hele tall", "Fordi $\\gcd$ ikke er definert for uttrykk med en ukjent", "Fordi løsbarhetskriteriet ikke gjelder når $n$ er ukjent"],
      explanation: "Uttrykkene er ikke tall før $n$ er valgt, så prøvedivisjon er meningsløs og divisjonskjeden finnes ikke. Å presentere $1$ som en lineærkombinasjon avgjør saken for alle $n$ samtidig, med én likning.",
    },
    {
      question: "Hva må du gjøre hvis lineærkombinasjonen gir $-1$ i stedet for $1$?",
      options: ["Gange hele likningen med $-1$; en divisor som deler $-1$ deler også $1$", "Bytte om rekkefølgen på de to uttrykkene og regne på nytt", "Velge andre multiplikatorer, siden $-1$ ikke gir noen konklusjon", "Legge til $2$ på begge sider for å få høyresiden $1$"],
      explanation: "Fortegnet er uvesentlig: er $d\\mid(-1)$, så er $d=\\pm 1$. Én multiplikasjon med $-1$ rydder det opp, og konklusjonen $\\gcd=1$ står.",
    },
    {
      question: "Hva er sammenhengen mellom skrittlengden og $\\operatorname{lcm}(a,b)$?",
      options: ["Hvert skritt i $t$ flytter hvert ledd $\\operatorname{lcm}(a,b)$", "Skrittlengden i $x$ er selv lik $\\operatorname{lcm}(a,b)$", "Antall løsninger i et intervall er intervallets lengde delt på $\\operatorname{lcm}$", "Skrittlengden er $\\operatorname{lcm}(a,b)$ delt på $\\gcd(a,b)$"],
      explanation: "Leddet $a\\cdot\\frac bd=\\frac{ab}{d}=\\operatorname{lcm}(a,b)$, og $b\\cdot\\frac ad$ er det samme. Skrittet er derfor den minste flyttingen som kan gjøres med hele tall i begge koordinater.",
    },
    {
      question: "Hva er strukturen i den generelle løsningen av en diofantisk likning?",
      options: ["Én partikulær løsning pluss alle løsninger av $ax+by=0$", "Alle løsninger av $ax+by=0$, ganget med faktoren $c/d$", "Én partikulær løsning ganget med alle multipler av $\\gcd(a,b)$", "Summen av to partikulære løsninger, med en fri parameter"],
      explanation: "Samme struktur som i lineær algebra: én partikulær pluss hele nullrommet. Den homogene likningen $ax+by=0$ har løsningene $x=\\frac bd t$, $y=-\\frac ad t$ — nettopp retningsdelen.",
    },
    {
      question: "Kan en likning ha uendelig mange heltallsløsninger men ingen med begge koordinater ikke-negative?",
      options: ["Ja — $t$-intervallene fra de to ulikhetene kan være tomme", "Nei, uendelig mange løsninger gir alltid noen med begge positive", "Nei, det følger av at $\\gcd(a,b)$ deler $c$", "Ja, men bare når begge koeffisientene $a$ og $b$ er negative"],
      explanation: "For $14x+22y=96$ er løsningsmengden uendelig, men $x\\ge 0$ krever $t\\ge 14$ og $y\\ge 0$ krever $t\\le 13$ — umulig. «Har løsninger» og «har ikke-negative løsninger» er forskjellige spørsmål.",
    },
    {
      question: "Hva må stå i svaret når oppgaven ber om «samtlige heltallsløsninger»?",
      options: ["Parametriseringen, med $t\\in\\mathbb{Z}$ eksplisitt oppgitt", "Den minste positive løsningen, med begrunnelse for at den er minst", "Ett tallpar, sammen med $\\gcd(a,b)$ og Bézout-koeffisientene", "Alle løsninger med $0\\le x<b$, altså $\\gcd(a,b)$ tallpar"],
      explanation: "Et enkelt tallpar besvarer ikke spørsmålet. Parameteren og mengden den løper over hører med — det er et eget føringspoeng, og det står i fasitpraksisen i arkivet.",
    },
    {
      question: "Hvorfor bør du kommentere løsbarheten før du løser, og ikke bare bruke den?",
      options: ["Kommentaren er et føringspoeng, og den sparer tid når svaret er nei", "Fordi løsbarhetskriteriet ikke gjelder hvis det ikke skrives ned", "Fordi skaleringsfaktoren ellers blir feil beregnet", "Fordi kriteriet må sjekkes på nytt etter hvert steg i utregningen"],
      explanation: "Fasitene i arkivet skriver setningen ut, og instruksen er at alle svar skal begrunnes. Er $d\\nmid c$, er du dessuten ferdig etter tjue sekunder i stedet for å oppdage det når $c/d$ blir en brøk.",
    },
    {
      question: "Hvordan skalerer partikulærløsningen når koeffisientene inneholder en ukjent $n$?",
      options: ["Den blir ofte uavhengig av $n$, siden den kommer fra konstantene", "Den blir alltid et uttrykk av første grad i $n$", "Den må regnes ut på nytt for hver verdi av $n$", "Den skalerer med $n$ ganget med høyresiden $c$"],
      explanation: "For $(4n+3)x+(3n+2)y=5$ gir $3(4n+3)-4(3n+2)=1$ skalert med $5$ at $x_0=15$, $y_0=-20$ — uten $n$. Skrittlengdene inneholder derimot $n$, siden de er uttrykkene selv.",
    },
  ],
  'ma1301-1-4': [
    {
      question: "Hva betyr $a\\equiv b\\pmod m$?",
      options: ["$m$ deler differansen $a-b$", "$m$ deler summen $a+b$", "$a$ deler differansen $b-m$", "$a$ og $b$ er begge delelige med $m$"],
      explanation: "De tre likeverdige formene er: samme rest ved divisjon med $m$; $m\\mid(a-b)$; og $a=b+km$ for et helt tall $k$. Delelighetsformen er den du bruker i bevis.",
    },
    {
      question: "Hvilken operasjon er IKKE en generell regneregel for kongruenser?",
      options: ["Divisjon på begge sider", "Multiplikasjon på begge sider", "Opphøying i samme potens på begge sider", "Addisjon av samme tall på begge sider"],
      explanation: "Divisjon krever en betingelse. $6\\cdot 3\\equiv 6\\cdot 8\\pmod{10}$, men $3\\not\\equiv 8\\pmod{10}$ — her er $\\gcd(6,10)=2$. Det er det ene stedet kongruensregning skiller seg fra vanlig algebra.",
    },
    {
      question: "Hva er den generelle forkortingsregelen for kongruenser?",
      options: ["$ca\\equiv cb\\pmod{cm}$ er ekvivalent med $a\\equiv b\\pmod m$", "$ca\\equiv cb\\pmod m$ er ekvivalent med $a\\equiv b\\pmod m$", "$ca\\equiv cb\\pmod{cm}$ er ekvivalent med $a\\equiv b\\pmod{cm}$", "$ca\\equiv cb\\pmod m$ er ekvivalent med $a\\equiv b\\pmod{cm}$"],
      explanation: "Faktoren må ut av alle tre posisjonene, modulusen inkludert. Formen uten å røre modulusen krever i tillegg at $\\gcd(c,m)=1$.",
    },
    {
      question: "Når er $ax\\equiv b\\pmod m$ løsbar?",
      options: ["Nøyaktig når $\\gcd(a,m)$ deler $b$", "Nøyaktig når $\\gcd(a,m)$ deler $m$", "Nøyaktig når $\\gcd(a,b)$ deler $m$", "Nøyaktig når $\\gcd(a,m)=1$, uansett hva $b$ er"],
      explanation: "Kongruensen er likningen $ax-my=b$, så kriteriet er det samme som i kap. 1.3: $\\gcd(a,m)$ deler høyresiden. Merk at det er $b$ som skal deles, ikke $m$ og ikke $a$.",
    },
    {
      question: "Hvor mange inkongruente løsninger har $ax\\equiv b\\pmod m$ når den er løsbar?",
      options: ["Nøyaktig $d=\\gcd(a,m)$", "Nøyaktig én, uansett hva $d$ er", "Nøyaktig $m/d$, der $d=\\gcd(a,m)$", "Uendelig mange, jevnt fordelt langs tallinja"],
      explanation: "Antallet er $d$, og løsningene ligger $m/d$ fra hverandre. Å finne én og stoppe er den best belagte feilen i denne sjangeren — med $d=4$ mangler tre firedeler av svaret.",
    },
    {
      question: "Hva skjer med modulusen når du forkorter en kongruens med $d$?",
      options: ["Den deles også på $d$", "Den står uendret, siden den ikke er en side av kongruensen", "Den ganges med $d$ for å bevare antall løsninger", "Den erstattes av $\\operatorname{lcm}$ av den gamle modulusen og $d$"],
      explanation: "Alle tre tallene deles: $a$, $b$ og $m$. Lar du modulusen stå, løser du en annen kongruens og finner feil antall løsninger. Kontrollen: etter forkortingen skal $\\gcd$ av de nye $a$ og $m$ være $1$.",
    },
    {
      question: "Når har $a$ en invers modulo $m$?",
      options: ["Nøyaktig når $\\gcd(a,m)=1$", "Nøyaktig når $m$ er et primtall", "Nøyaktig når $a<m$ og $a$ er et primtall", "Nøyaktig når $a$ er et oddetall og $m$ et like tall"],
      explanation: "Kravet er bare $\\gcd(a,m)=1$ — modulusen behøver ikke være et primtall. Det er nettopp derfor RSA fungerer, der modulusen alltid er et produkt $pq$ av to primtall.",
    },
    {
      question: "Hvor mange restklasser finnes det modulo $m$?",
      options: ["Nøyaktig $m$, nemlig $[0],[1],\\dots,[m-1]$", "Nøyaktig $m-1$, siden $[0]$ ikke regnes med", "Uendelig mange, én for hvert helt tall", "Nøyaktig $\\gcd(a,m)$ for hver koeffisient $a$"],
      explanation: "Divisjonsalgoritmen gir hvert tall nøyaktig én rest $r$ med $0\\le r<m$, så hvert tall ligger i nøyaktig én klasse. Det er derfor spørsmålet «hvor mange løsninger?» har et endelig svar.",
    },
    {
      question: "Hva menes med at to løsninger er inkongruente modulo $m$?",
      options: ["De ligger i forskjellige restklasser modulo $m$", "De er begge relativt primiske til modulusen $m$", "De gir forskjellig rest når de deles på $\\gcd(a,m)$", "Differansen mellom dem er et multiplum av $m$"],
      explanation: "Løsningene $9$ og $125$ av en kongruens modulo $116$ er samme svar, siden $125=9+116$. Å telle enkelttall ville gitt uendelig mange kopier av samme informasjon.",
    },
    {
      question: "Hvor mange løsninger har $84x\\equiv 60\\pmod{116}$?",
      options: ["Fire, siden $\\gcd(84,116)=4$ og $4\\mid 60$", "Én, siden den forkortede kongruensen har én løsning", "To, siden både $84$ og $116$ er like tall", "Ingen, siden $\\gcd(84,116)=4$ og $4\\nmid 60$"],
      explanation: "Her er $d=4$ og $60=15\\cdot 4$, så kongruensen er løsbar med fire inkongruente løsninger: $9$, $38$, $67$ og $96$. De ligger $116/4=29$ fra hverandre.",
    },
    {
      question: "Hva er splittingsregelen for modulusen?",
      options: ["$a\\equiv b\\pmod{mn}$ er ekvivalent med $a\\equiv b$ modulo $m$ og modulo $n$, når $\\gcd(m,n)=1$", "$a\\equiv b\\pmod{mn}$ er ekvivalent med $a\\equiv b$ modulo $m$ og modulo $n$, uansett $m$ og $n$", "$a\\equiv b\\pmod{m+n}$ er ekvivalent med $a\\equiv b$ modulo $m$ og modulo $n$", "$a\\equiv b\\pmod{mn}$ er ekvivalent med $a\\equiv b$ modulo $\\gcd(m,n)$"],
      explanation: "Betingelsen er ikke til å hoppe over: $12\\equiv 0$ modulo $4$ og modulo $6$, men $12\\not\\equiv 0\\pmod{24}$, og $\\gcd(4,6)=2$. Regelen er grunnlaget for det kinesiske restteoremet.",
    },
    {
      question: "Hva er inversen til $17$ modulo $43$?",
      options: ["$38$", "$12$", "$26$", "$5$"],
      explanation: "Euklids algoritme gir $1=43\\cdot(-15)+17\\cdot 38$, altså $17\\cdot 38\\equiv 1\\pmod{43}$. Kontroll: $17\\cdot 38=646=15\\cdot 43+1$.",
    },
    {
      question: "Hvordan løser du $ax\\equiv b\\pmod m$ når du har inversen $u$ til $a$?",
      options: ["Gang begge sider med $u$: $x\\equiv ub\\pmod m$", "Gang begge sider med $a$: $x\\equiv ab\\pmod m$", "Del begge sider på $u$ og reduser modulo $m$", "Sett $x\\equiv u+b\\pmod m$ og reduser til intervallet"],
      explanation: "Siden $ua\\equiv 1$, blir venstresiden $x$. Reduser $ub$ modulo $m$ til slutt. Dette er kongruensregningens erstatning for divisjon — uttrykt med bare multiplikasjon.",
    },
    {
      question: "Hva er notasjonsskillet mellom $\\pmod m$ og $\\bmod n$?",
      options: ["Det første hører til en hel kongruens; det andre gir resten som et tall", "Det første gir resten som et tall; det andre hører til en hel kongruens", "Det første brukes for primtallsmoduler, det andre for sammensatte", "De betyr det samme, men den første formen brukes bare i bevis"],
      explanation: "$a\\equiv b\\pmod m$ er en relasjon mellom to tall. $a\\bmod n$ er en verdi — $17\\bmod 12=5$. Skriv aldri $a=b\\pmod m$ med likhetstegn: kongruens er ikke likhet.",
    },
    {
      question: "Hva kjennetegner en nulldivisor modulo $m$?",
      options: ["Et tall $a\\not\\equiv 0$ med $\\gcd(a,m)>1$", "Et tall $a\\not\\equiv 0$ med $\\gcd(a,m)=1$", "Et tall som er sin egen invers modulo $m$", "Et tall som deler modulusen $m$ og er et primtall"],
      explanation: "Modulo $12$ er $4\\cdot 3\\equiv 0$ uten at noen faktor er $0$. Hvert tall modulo $m$ er enten inverterbart eller en nulldivisor — de utelukker hverandre. Modulo et primtall finnes ingen nulldivisorer.",
    },
    {
      question: "Hvorfor har $ax\\equiv b\\pmod p$ alltid nøyaktig én løsning når $p$ er et primtall og $p\\nmid a$?",
      options: ["Fordi $\\gcd(a,p)=1$, så $d=1$ og antallet løsninger er $d$", "Fordi primtall bare har to divisorer, så antallet løsninger er to", "Fordi $b$ alltid er relativt primisk til $p$ når $p\\nmid a$", "Fordi Euklids algoritme gir én linje når modulusen er et primtall"],
      explanation: "Et primtall er relativt primisk til alt det ikke deler, så $d=\\gcd(a,p)=1$. Antallet inkongruente løsninger er $d=1$, og kongruensen er løsbar for hver $b$.",
    },
    {
      question: "Hvorfor kan du redusere hver faktor før du multipliserer i en kongruens?",
      options: ["Fordi multiplikasjonsregelen gjelder for kongruente tall", "Fordi resten alltid er mindre enn modulusen uansett rekkefølge", "Fordi produktet av to rester alltid er mindre enn modulusen", "Fordi divisjonsalgoritmen gir entydig rest for hvert produkt"],
      explanation: "Er $a\\equiv b$ og $c\\equiv e$, så $ac\\equiv be$. Derfor er $43\\cdot 58\\equiv 1\\cdot 2=2\\pmod 7$. Under kode D er dette forskjellen mellom regnbart og ikke regnbart.",
    },
    {
      question: "Hvordan finner du alle $d$ løsningene når du har én løsning $x_0$ modulo $m/d$?",
      options: ["Legg til $m/d$ gjentatt: $x_0+k\\cdot\\frac md$ for $k=0,\\dots,d-1$", "Legg til $d$ gjentatt: $x_0+kd$ for $k=0,\\dots,\\frac md-1$", "Gang $x_0$ med $k$ for $k=1,\\dots,d$ og reduser modulo $m$", "Legg til $m$ gjentatt: $x_0+km$ for $k=0,\\dots,d-1$"],
      explanation: "Avstanden mellom nabo-løsningene er $m/d$. Dette siste steget er det som gjør de $d$ løsningene synlige — glemmer du det, har du bare den ene fra den forkortede kongruensen.",
    },
    {
      question: "Hvorfor kan du velge representanten $-1$ i stedet for $m-1$ i en utregning?",
      options: ["Fordi begge ligger i samme restklasse modulo $m$", "Fordi $-1$ alltid er sin egen invers modulo $m$", "Fordi negative representanter gir raskere Euklid-kjeder", "Fordi $m-1$ ikke er en gyldig representant når $m$ er sammensatt"],
      explanation: "Alle representanter for samme klasse er likeverdige, så velg den som gjør regningen lettest. Dette er selve grepet i Wilson-trikset, der $p-1,p-2$ skrives som $-1,-2$.",
    },
    {
      question: "Hva bør du kontrollere når du har funnet alle løsningene av en kongruens?",
      options: ["At det er $d$ av dem, at avstanden er $m/d$, og at alle gir rest $b$", "At den minste er positiv, og at den største er mindre enn $m/d$", "At alle er relativt primiske til modulusen $m$", "At summen av dem er kongruent med $b$ modulo $m$"],
      explanation: "De tre kontrollene fanger til sammen de vanligste feilene: for få løsninger, feil avstand, og regnefeil i inversen. Under kode D er selvkontroll den eneste kontrollen du har.",
    },
  ],
  'ma1301-1-5': [
    {
      question: "Hva er steg 3 i oppskriften for en diofantisk likning?",
      options: ["Kommentere løsbarheten: deler $d$ tallet $c$?", "Skalere Bézout-likningen med faktoren $c/d$", "Skrive hele løsningsmengden med parameteren $t$", "Finne den minste positive verdien av $x$"],
      explanation: "Rekkefølgen er: Euklid frem, Euklid baklengs, løsbarhet kommentert, skalering, hele løsningsmengden, «minste positive» om spurt. Steg 3 og 6 er de som glemmes, og begge er egne føringspoeng.",
    },
    {
      question: "Hva kontrollerer du rett etter skaleringen?",
      options: ["At $ax_0+by_0$ gir $c$ — ikke $d$", "At $ax_0+by_0$ gir $d$ — ikke $c$", "At $x_0$ og $y_0$ har motsatt fortegn", "At $x_0$ ligger i intervallet $0\\le x_0<b/d$"],
      explanation: "Får du $d$, mangler multiplikasjonen med $c/d$ — den mest belagte feilen i sjangeren. Kontrollen tar tjue sekunder og forteller deg presis hva som er galt.",
    },
    {
      question: "Hvor mange divisjonslinjer skal du forvente på et firesifret tallpar?",
      options: ["Fire til seks", "Åtte til tolv", "Én per primfaktor i det minste tallet", "Omtrent like mange som antall siffer i $\\gcd$"],
      explanation: "Antall linjer vokser logaritmisk med tallene, og eksamensoppgavene er valgt så kjeden blir kort. Blir din tolv linjer, har du sannsynligvis regnet feil — ikke fått en vanskelig oppgave.",
    },
    {
      question: "Hva skal du kontrollere etter forkortingen av en kongruens?",
      options: ["At $\\gcd$ av den nye koeffisienten og den nye modulusen er $1$", "At den nye modulusen fortsatt er større enn den nye koeffisienten", "At den nye høyresiden er mindre enn den nye modulusen", "At den nye koeffisienten er relativt primisk til $d$"],
      explanation: "Er $\\gcd$ ikke $1$, har du ikke delt med hele $d$ — og du har sannsynligvis glemt å dele modulusen. Da har den forkortede kongruensen ikke nøyaktig én løsning, som var hele hensikten.",
    },
    {
      question: "Hvilke to størrelser i denne sjangeren utledes på stedet, aldri utenat?",
      options: ["Bézout-koeffisientene og den modulære inversen", "Løsbarhetskriteriet og antall inkongruente løsninger", "Skrittlengdene $b/d$ og $a/d$ i løsningsmengden", "Divisjonsalgoritmen og lineærkombinasjonsregelen"],
      explanation: "Begge leses ut av substitusjonskjeden, for hvert nytt tallpar. Det er derfor prosedyren er puggematerialet her, ikke tallene — og derfor du repeterer ved å regne nye tallpar, ikke ved å lese oppskriften.",
    },
    {
      question: "Hva er kontrollen på at parametriseringen har riktige fortegn og skrittlengder?",
      options: ["At $a\\cdot\\frac bd$ og $b\\cdot\\frac ad$ er like store", "At $x_0$ og $y_0$ har motsatt fortegn", "At $\\frac bd$ og $\\frac ad$ er relativt primiske", "At skrittlengdene begge er mindre enn $\\gcd(a,b)$"],
      explanation: "Begge er $\\operatorname{lcm}(a,b)$, og de opptrer med motsatt fortegn på grunn av kryssingen. Er de ikke like, har du delt på feil tall — eller brukt $b$ i stedet for $b/d$.",
    },
    {
      question: "Hvordan viser du $\\gcd=1$ når koeffisientene er uttrykk i en ukjent $n$?",
      options: ["Gang med hverandres $n$-koeffisient og trekk fra, så $n$ kanselleres", "Sett inn tre forskjellige verdier av $n$ og regn $\\gcd$ for hver", "Faktoriser begge uttrykkene og se at de ikke har noen felles primfaktor", "Kjør Euklids algoritme på uttrykkene som om de var tall"],
      explanation: "For $an+b$ og $cn+e$ gir $c\\cdot(an+b)-a\\cdot(cn+e)$ en konstant. Er den $\\pm 1$, deler enhver felles divisor tallet $1$, og $\\gcd=1$ for alle $n$ samtidig.",
    },
    {
      question: "Hva er tidsbudsjettet per delpunkt på eksamen?",
      options: ["Omtrent 24 minutter, fra 240 minutter på omtrent 10 delpunkt", "Omtrent 30 minutter, fra 240 minutter på 8 delpunkt", "Omtrent 15 minutter, siden settet har 16 delpunkt", "Omtrent 40 minutter for hver av de seks hovedoppgavene"],
      explanation: "Fire timer er 240 minutter, og nyere sett har omtrent 10 likt vektede delpunkt. En tredelt oppgave 1 tar 20–30 minutter når prosedyren sitter — der kjøper du tid til de dyrere oppgavene senere.",
    },
    {
      question: "Hva er den riktige avgjørelsen når du står fast på ett delpunkt etter 20 minutter?",
      options: ["Gå videre, siden delpunktene teller likt og er uavhengige", "Fortsett, siden delpunktet sannsynligvis er verdt mer enn de andre", "Gå videre, men bare hvis du har løst alle de foregående riktig", "Fortsett i ti minutter til, og hopp deretter over hele oppgaven"],
      explanation: "Alle delpunkt teller likt, og hovedoppgavene er selvstendige — ett tema per oppgave. Skriv ned metoden du forsøkte (det kan gi delvis uttelling siden begrunnelse vurderes), og kom tilbake om du har tid.",
    },
    {
      question: "Hva er antallet løsninger når $x$ er begrenset til et intervall?",
      options: ["$t_{\\max}-t_{\\min}+1$, etter at grensene er rundet innover", "$t_{\\max}-t_{\\min}$, etter at grensene er rundet innover", "Intervallets lengde delt på skrittlengden $b/d$", "$\\gcd(a,b)$, som er antallet restklasser i intervallet"],
      explanation: "Husk $+1$: fra $t=2$ til $t=5$ er det fire verdier. Kontrollen er å sjekke at $t_{\\min}-1$ og $t_{\\max}+1$ faller utenfor intervallet.",
    },
    {
      question: "Hvorfor er selvkontroll en del av ferdigheten i dette emnet, ikke et tillegg?",
      options: ["Fordi kode D betyr at det ikke finnes fasit eller oppslagsverk i rommet", "Fordi kontrollene gir uttelling som egne delpunkt på settet", "Fordi den enkle kalkulatoren ikke kan utføre divisjon med rest pålitelig", "Fordi instruksen krever at hver kontroll skrives ned i margen"],
      explanation: "Det finnes ingenting å sammenligne med under eksamen. Kontrollene ved innsetting er derfor den eneste måten du kan vite at svaret er riktig, og de koster under ett minutt til sammen.",
    },
    {
      question: "Hva er skrittlengdene i løsningsmengden når $\\gcd(a,b)=1$?",
      options: ["$b$ og $a$ selv, siden $d=1$", "$1$ i begge retninger, siden $d=1$", "$b/a$ og $a/b$, som da er hele tall", "$\\operatorname{lcm}(a,b)$ i begge retninger"],
      explanation: "Med $d=1$ er $b/d=b$ og $a/d=a$. Det er tilfellet i parameter-i-koeffisient-varianten, der skrittlengdene blir uttrykkene selv.",
    },
    {
      question: "Hva bør du gjøre først når en tredelt oppgave 1 ber om $\\gcd$ i del a) og en kongruens i del c)?",
      options: ["Regne Euklid-kjeden én gang, og gjenbruke den i begge delene", "Regne Euklid-kjeden på nytt i del c), med modulusen som største tall", "Løse del c) først, siden kongruensen gir $\\gcd$ direkte", "Faktorisere begge tallene, siden det gir både $\\gcd$ og modulusen"],
      explanation: "Delpunktene er en trapp. Si eksplisitt at du gjenbruker: «fra del a) er $\\gcd=3$ og $3=1707\\cdot 25+762\\cdot(-56)$». Det sparer tid og viser at du ser sammenhengen.",
    },
    {
      question: "Hva er forskjellen på tellingen i en diofantisk likning og i en kongruens med samme tall?",
      options: ["Likningen teller løsningspar, kongruensen teller restklasser for $x$", "Likningen teller restklasser modulo $b$, kongruensen teller løsningspar", "Likningen har $d$ løsninger, kongruensen har uendelig mange", "Begge teller det samme; forskjellen er bare notasjonen"],
      explanation: "Likningen $ax+by=c$ har uendelig mange par $(x,y)$. Kongruensen $ax\\equiv c\\pmod b$ har $d$ inkongruente $x$-verdier. De uendelig mange $x$-ene fordeler seg på de $d$ restklassene.",
    },
    {
      question: "Hvordan bør du repetere dette kapitlet?",
      options: ["Ved å regne nye tallpar gjennom hele oppskriften med lukket bok", "Ved å lese oppskriften i seks steg tre ganger i rekkefølge", "Ved å pugge Bézout-koeffisientene for de tallparene som er brukt", "Ved å gå gjennom fasitene og se etter mønstre i koeffisientene"],
      explanation: "Prosedyrer pugges ved å kjøres, ikke ved å leses. Tre nye tallpar er mer verdt enn tre gjennomlesninger — og med lukket bok, siden oppslag er nettopp det kode D har fjernet.",
    },
    {
      question: "Hvilket varselstegn tyder på at du har regnet feil i en sjanger A-oppgave?",
      options: ["Skaleringsfaktoren $c/d$ blir en brøk i stedet for et helt tall", "Bézout-koeffisientene har motsatt fortegn av hverandre", "Kjeden har fem divisjonslinjer på et firesifret tallpar", "Partikulærløsningen har negativ verdi for $y$"],
      explanation: "Er $c/d$ en brøk, deler ikke $d$ tallet $c$, og likningen har ingen løsning — du har hoppet over løsbarhetssjekken. Motsatte fortegn og negative verdier er derimot helt normalt.",
    },
  ],
  'ma1301-2-1': [
    {
      question: "Hva teller $\\phi(n)$?",
      options: ["Tallene $a$ med $1\\le a\\le n$ og $\\gcd(a,n)=1$", "Tallene $a$ med $1\\le a\\le n$ som deler $n$", "Primtallene som er mindre enn $n$", "Primfaktorene i $n$, med multiplisitet"],
      explanation: "Antall relativt primiske tall opp til $n$. Antall divisorer er $\\tau(n)$, en annen funksjon (Del 5).",
    },
    {
      question: "Hva er $\\phi(p^k)$ for et primtall $p$?",
      options: ["$p^k-p^{k-1}$", "$p^k-1$", "$p^{k}-k$", "$k(p-1)$"],
      explanation: "Trekk fra de $p^{k-1}$ multiplene av $p$. Formen $p^k-1$ gjelder bare $k=1$ og er den best belagte fellen i faget.",
    },
    {
      question: "Hva er $\\phi(9)$?",
      options: ["$6$", "$8$", "$3$", "$4$"],
      explanation: "$9=3^2$, så $\\phi(9)=9-3=6$. Tell etter: $1,2,4,5,7,8$. Svaret $8$ kommer av den gale formelen $p^k-1$.",
    },
    {
      question: "Hva er vilkåret i Eulers teorem $a^{\\phi(n)}\\equiv 1\\pmod n$?",
      options: ["$\\gcd(a,n)=1$", "$n$ må være et primtall", "$a$ må være mindre enn $n$", "$a$ må være et primtall"],
      explanation: "Vilkåret gjelder $a$ og $n$, ikke størrelsen på $a$. Er $\\gcd(a,n)\\ne 1$, må modulusen splittes i primtallspotenser.",
    },
    {
      question: "Når er $\\phi$ multiplikativ, altså $\\phi(mn)=\\phi(m)\\phi(n)$?",
      options: ["Når $\\gcd(m,n)=1$", "For alle $m$ og $n$", "Bare når både $m$ og $n$ er primtall", "Når $m$ og $n$ er odde"],
      explanation: "Kravet er relativt primiske faktorer. Moteksempel uten det: $\\phi(8)=4$, mens $\\phi(2)\\phi(4)=1\\cdot 2=2$.",
    },
    {
      question: "Hvilken modulus reduseres eksponenten $N$ etter i $a^N\\bmod n$?",
      options: ["Modulo $\\phi(n)$", "Modulo $n$", "Modulo $n-1$", "Modulo $a$"],
      explanation: "Grunntallet reduseres modulo $n$, eksponenten modulo $\\phi(n)$. Formen $n-1$ er riktig bare når $n$ er et primtall, for da er $\\phi(n)=n-1$.",
    },
    {
      question: "Hva er $\\phi(100)$?",
      options: ["$40$", "$50$", "$99$", "$80$"],
      explanation: "$100=2^2\\cdot 5^2$ gir $(4-2)(25-5)=2\\cdot 20=40$. Svaret $80$ kommer av å bruke $p^k-1$ på $5^2$.",
    },
    {
      question: "Hva er $\\phi(pq)$ når $p$ og $q$ er ulike primtall?",
      options: ["$(p-1)(q-1)$", "$pq-1$", "$pq-p-q$", "$(p-1)(q-1)+1$"],
      explanation: "Multiplikativiteten pluss $\\phi(p)=p-1$. Dette er nøkkeltallet i RSA, der $n=pq$.",
    },
    {
      question: "Hva er det første steget i føringsmalen for en restberegning?",
      options: ["Faktoriser modulusen", "Regn ut $\\phi(n)$", "Reduser eksponenten", "Sett opp kvadrattabellen"],
      explanation: "Faktoriseringen kommer først, fordi både $\\phi(n)$ og $\\gcd$-sjekken leses ut av den.",
    },
    {
      question: "Hvorfor kan Eulers teorem ikke brukes på $6^{100}\\bmod 9$?",
      options: ["Fordi $\\gcd(6,9)=3$", "Fordi $9$ ikke er et primtall", "Fordi $6$ er mindre enn $9$", "Fordi eksponenten er et partall"],
      explanation: "Vilkåret svikter. Her er $6^2\\equiv 0\\pmod 9$, så potensen går ikke i ring og kommer aldri tilbake til $1$.",
    },
    {
      question: "Hva gjør du når $\\gcd(a,n)\\ne 1$ i en restberegning?",
      options: ["Splitter modulusen i primtallspotenser og tar hver del for seg", "Bruker $\\phi(n)$ likevel, men trekker først fra $\\gcd(a,n)$", "Erstatter $\\phi(n)$ med $n-1$ i eksponentreduksjonen", "Reduserer grunntallet til det er relativt primisk til $n$"],
      explanation: "Splitting pluss sammensetting med splittingsregelen — systematisert som det kinesiske restteoremet i kap. 2.4.",
    },
    {
      question: "Hva er $a^N$ modulo $p^k$ når primtallet $p$ deler $a$ og $N\\ge k$?",
      options: ["$0$", "$1$", "$a$", "$p^{k-1}$"],
      explanation: "$a=ps$ gir $a^N=p^Ns^N$, og $p^k\\mid p^N$. Det er den lette delen av en splitting.",
    },
    {
      question: "Hva er hensikten med binærutviklingen i kvadrer-og-multipliser?",
      options: ["Å dele eksponenten i toerpotenser man kan kvadrere seg opp til", "Å skrive grunntallet i totallsystemet før man opphøyer det", "Å dele modulusen i toerpotenser man kan redusere mot", "Å avgjøre om eksponenten er et partall eller et oddetall"],
      explanation: "Eksponenten deles i toerpotenser, hver potens fås ved å kvadrere den forrige, og man ganger sammen dem som svarer til enerne.",
    },
    {
      question: "Hvorfor reduserer man modulo $n$ etter hvert kvadrat?",
      options: ["For å holde alle mellomtall under $n$", "For å slippe å bruke binærutviklingen", "Fordi kongruensregning krever det etter hvert steg", "For å gjøre eksponenten mindre for hvert steg"],
      explanation: "Uten reduksjon vokser tallene eksponentielt og blir uregnbare for hånd. Eksponenten er alt redusert før tabellen lages.",
    },
    {
      question: "Hvilken påstand om $\\phi(n)$ er riktig for alle $n\\ge 3$?",
      options: ["$\\phi(n)$ er et partall", "$\\phi(n)$ er et oddetall", "$\\phi(n)$ er et primtall", "$\\phi(n)$ deler $n$"],
      explanation: "Enten har $n$ en odde primfaktor $p$ (og $p-1$ er partall), eller $n=2^k$ med $k\\ge 2$ (og $\\phi=2^{k-1}$). Nyttig som kontroll.",
    },
    {
      question: "For hvilke $n$ gjelder $\\phi(n)=n-1$?",
      options: ["Nøyaktig for primtallene", "For alle primtallspotenser", "Nøyaktig for de odde tallene", "For alle $n$ som er kvadratfrie"],
      explanation: "Er $n=ab$ sammensatt, er også $a$ et tall under $n$ som deler en faktor med $n$, så minst to tall faller ut.",
    },
    {
      question: "Hva er $3^{455}\\bmod 100$?",
      options: ["$7$", "$47$", "$3$", "$27$"],
      explanation: "$\\phi(100)=40$ og $455\\equiv 15$, så svaret er $3^{15}\\equiv 7$. Verdien $47$ er $3^{55}$ — resultatet av å redusere eksponenten modulo $100$.",
    },
    {
      question: "Hvor mange faktorer har produktet i $\\phi(n)=n\\prod(1-1/p)$?",
      options: ["Én per distinkt primtall i $n$", "Én per primtallspotens i $n$", "Én per divisor i $n$", "Én per primfaktor regnet med multiplisitet"],
      explanation: "Produktet går over distinkte primtall. Gjentar du faktoren fordi $p^3$ står i faktoriseringen, blir svaret for lite.",
    },
    {
      question: "Hva gir Eulers teorem som invers til $a$ modulo $n$?",
      options: ["$a^{\\phi(n)-1}$", "$a^{\\phi(n)}$", "$a^{\\phi(n)+1}$", "$\\phi(n)-a$"],
      explanation: "Skill ut én faktor $a$: $a\\cdot a^{\\phi(n)-1}=a^{\\phi(n)}\\equiv 1$. Euklids algoritme er likevel raskere for hånd.",
    },
    {
      question: "Hva bør stå i besvarelsen FØR eksponenten reduseres?",
      options: ["Setningen om at $\\gcd(a,n)=1$", "Kvadrattabellen for grunntallet", "Binærutviklingen av eksponenten", "Sluttsvaret med boks rundt"],
      explanation: "Reduksjonen er bare lovlig når vilkåret er sjekket. Fasitene i arkivet skriver setningen ut, og instruksen er at alle svar skal begrunnes.",
    },
  ],
  'ma1301-2-2': [
    {
      question: "Hva sier Fermats lille teorem i form 1?",
      options: ["$a^{p-1}\\equiv 1\\pmod p$ når $p\\nmid a$", "$a^{p}\\equiv 1\\pmod p$ når $p\\nmid a$", "$a^{p-1}\\equiv a\\pmod p$ for alle $a$", "$a^{p+1}\\equiv 1\\pmod p$ når $p\\nmid a$"],
      explanation: "Eksponenten er $p-1$ og resultatet er $1$. Formen med eksponent $p$ er form 2, og den gir $a$, ikke $1$.",
    },
    {
      question: "Hva sier Fermats lille teorem i form 2?",
      options: ["$a^{p}\\equiv a\\pmod p$ for alle hele tall $a$", "$a^{p}\\equiv 1\\pmod p$ for alle hele tall $a$", "$a^{p-1}\\equiv a\\pmod p$ når $p\\nmid a$", "$a^{p}\\equiv p\\pmod a$ for alle hele tall $a$"],
      explanation: "Form 2 har ingen vilkår, fordi tilfellet $p\\mid a$ gir $0\\equiv 0$. Det er derfor den brukes i bevis.",
    },
    {
      question: "Hvordan følger Fermats lille teorem av Eulers teorem?",
      options: ["Ved å sette $n=p$, siden $\\phi(p)=p-1$", "Ved å sette $a=p$, siden $\\phi(p)=p-1$", "Ved å erstatte $\\phi(n)$ med $n$ når $n$ er et primtall", "Det følger ikke — de to teoremene er uavhengige"],
      explanation: "Fermat er spesialtilfellet med primtallsmodulus. Motsatt vei virker ikke: Euler kan ikke utledes fra Fermat.",
    },
    {
      question: "Hvilken modulus reduseres eksponenten etter når modulusen er primtallet $p$?",
      options: ["Modulo $p-1$", "Modulo $p$", "Modulo $p+1$", "Modulo $p-2$"],
      explanation: "Fordi $a^{p-1}\\equiv 1$. Å redusere modulo $p$ er den mest belagte regnefeilen i sjangeren.",
    },
    {
      question: "Hva er $2^{1000}\\bmod 13$?",
      options: ["$3$", "$1$", "$8$", "$4$"],
      explanation: "$1000=12\\cdot 83+4$, så svaret er $2^4=16\\equiv 3$. Verdien $8$ er $2^3$ — resultatet av å redusere eksponenten modulo $13$.",
    },
    {
      question: "Hva skjer med $a^{p-1}$ modulo $p$ når $p$ deler $a$?",
      options: ["Den blir $\\equiv 0$, og form 1 gjelder ikke", "Den blir $\\equiv 1$ som ellers, siden $p$ er et primtall", "Den blir $\\equiv a$, altså form 2 i stedet", "Den blir $\\equiv p-1$, som er den største resten"],
      explanation: "$a=ps$ gir $a^{p-1}=p^{p-1}s^{p-1}$, delelig med $p$. Form 2 holder likevel, siden begge sider da er $\\equiv 0$.",
    },
    {
      question: "Hvorfor kan Fermats lille teorem ikke brukes med modulus $15$?",
      options: ["Fordi $15$ ikke er et primtall", "Fordi $15$ er et oddetall", "Fordi $15$ er større enn ti", "Fordi $15$ deler for mange tall"],
      explanation: "Teoremet krever primtallsmodulus. Her gjelder $\\phi(15)=8$: $2^8\\equiv 1\\pmod{15}$, mens $2^{14}\\equiv 4$.",
    },
    {
      question: "Hva er inversen til $a$ modulo et primtall $p$, uttrykt som en potens?",
      options: ["$a^{p-2}$", "$a^{p-1}$", "$a^{p}$", "$a^{2-p}$"],
      explanation: "$a\\cdot a^{p-2}=a^{p-1}\\equiv 1$. Euklids algoritme er likevel raskere for hånd, og virker for sammensatt modulus.",
    },
    {
      question: "Hva er $\\binom{p}{k}$ modulo $p$ når $p$ er et primtall og $0<k<p$?",
      options: ["$0$", "$1$", "$k$", "$p-k$"],
      explanation: "$k!(p-k)!\\binom pk=p!$ er delelig med $p$, og etter Euklids lemma deler $p$ ikke $k!(p-k)!$. Kravet $0<k<p$ er nødvendig: $\\binom p0=1$.",
    },
    {
      question: "Hva er $(a+b)^p$ modulo et primtall $p$?",
      options: ["$a^p+b^p$", "$a^p+b^p+ab$", "$a^p\\cdot b^p$", "$a+b$"],
      explanation: "Mellomleddene i binomialformelen har faktoren $\\binom pk$ med $0<k<p$, som er delelig med $p$. I vanlig algebra er regelen gal.",
    },
    {
      question: "Hvilket steg er obligatorisk i et induksjonsbevis, og oftest glemt?",
      options: ["Basissteget", "Konklusjonssetningen", "Hypotesen skrevet på egen linje", "Kontrollen med to tallverdier"],
      explanation: "Et induksjonsbevis uten basissteg er en byggefeil, og den mest belagte sensorregelen i faget. Skriv det selv når det er trivielt.",
    },
    {
      question: "Beviser $a^{n-1}\\equiv 1\\pmod n$ at $n$ er et primtall?",
      options: ["Nei — $2^{340}\\equiv 1\\pmod{341}$, men $341=11\\cdot 31$", "Ja — det er nettopp innholdet i Fermats lille teorem", "Ja, forutsatt at $\\gcd(a,n)=1$ er sjekket først", "Ja, men bare når grunntallet $a$ er $2$"],
      explanation: "Den omvendte påstanden er gal; slike $n$ kalles Fermat-pseudoprimtall. Testen kan bare bevise at et tall IKKE er et primtall.",
    },
    {
      question: "Hvilket av disse tallene er sammensatt og ser ut som et primtall?",
      options: ["$91$, som er $7\\cdot 13$", "$89$, som er $7\\cdot 13$", "$97$, som er $3\\cdot 31$", "$83$, som er $9\\cdot 9$"],
      explanation: "$91=7\\cdot 13$ er en klassisk felle; $83$, $89$ og $97$ er primtall. Sjekk alltid $7$, $11$ og $13$ på tosifrede tall.",
    },
    {
      question: "Hva blir $1^{12}+2^{12}+\\dots+12^{12}$ modulo $13$?",
      options: ["$12$", "$0$", "$1$", "$6$"],
      explanation: "Hvert ledd er $\\equiv 1$ etter form 1, og det er tolv ledd, så summen er $12\\equiv -1\\pmod{13}$.",
    },
    {
      question: "Hva gjør du først i en restberegning med primtallsmodulus?",
      options: ["Reduserer grunntallet modulo $p$ og ser om det blir $0$", "Deler eksponenten på $p-1$ og beholder bare resten", "Setter opp kvadrattabellen for grunntallet modulo $p$", "Skriver binærutviklingen av eksponenten i tabellen"],
      explanation: "Ble grunntallet $0$, er svaret $0$ og oppgaven ferdig. Reduksjonen gjør også vilkårssjekken synlig.",
    },
    {
      question: "Hvilken form av teoremet bruker du i et bevis som skal gjelde for alle hele tall $a$?",
      options: ["Form 2, siden den ikke har noe vilkår", "Form 1, siden den gir den sterkeste konklusjonen", "Form 1, men bare hvis $a$ er et primtall", "Begge, siden de gir samme konklusjon"],
      explanation: "Form 1 krever $p\\nmid a$. Bruker du den i en påstand om alle $a$, mangler tilfellet $p\\mid a$, og case-analysen er ikke uttømmende.",
    },
    {
      question: "Hvorfor er det nyttig å skrive en rest som $-1$ i stedet for $p-1$?",
      options: ["Fordi kvadratet av $-1$ er $1$, som korter ned regningen", "Fordi negative rester alltid er lettere å multiplisere", "Fordi sluttsvaret skal oppgis som et negativt tall", "Fordi Fermats lille teorem krever negative rester"],
      explanation: "Ser du at $a^k\\equiv -1$, er $a^{2k}\\equiv 1$. Samme grep bærer Wilson-trikset. Sluttsvaret konverteres tilbake til $0,\\dots,p-1$.",
    },
    {
      question: "Hva må navngis i besvarelsen når eksponenten reduseres?",
      options: ["Teoremet som gir reduksjonen", "Modulusens primtallsfaktorisering", "Metoden for å regne ut binærutviklingen", "Kilden til oppgavetypen"],
      explanation: "«Fra Fermats lille teorem» eller «fra Eulers teorem». Et argument uten teoremnavn der teoremet bærer det, er en byggefeil.",
    },
  ],
  'ma1301-2-3': [
    {
      question: "Hva sier Wilsons teorem?",
      options: ["$(p-1)!\\equiv -1\\pmod p$ for hvert primtall $p$", "$(p-1)!\\equiv 1\\pmod p$ for hvert primtall $p$", "$(p-1)!\\equiv 0\\pmod p$ for hvert primtall $p$", "$p!\\equiv -1\\pmod p$ for hvert primtall $p$"],
      explanation: "Fortegnet er negativt, fordi $p-1\\equiv -1$ er det ene elementet som står alene i parringen. Merk at $p!\\equiv 0$, siden $p$ er en av faktorene.",
    },
    {
      question: "Hvilke tall er sine egne inverser modulo et primtall $p$?",
      options: ["Bare $1$ og $p-1$", "Bare $1$", "Alle odde tall under $p$", "Alle tall $a$ med $a^2<p$"],
      explanation: "$a^2\\equiv 1$ gir $p\\mid(a-1)(a+1)$, og Euklids lemma gir $a\\equiv\\pm 1$. Modulo $8$ er derimot fire tall selvinverse — derfor krever Wilson et primtall.",
    },
    {
      question: "Hva er $(n-1)!$ modulo $n$ når $n$ er sammensatt og $n>4$?",
      options: ["$0$", "$-1$", "$1$", "$n-2$"],
      explanation: "Faktorene i et produkt $n=ab$ står begge i $(n-1)!$. For $n=a^2$ brukes $a$ og $2a$. Det ene unntaket er $n=4$, der $3!\\equiv 2$.",
    },
    {
      question: "Hva er $3!$ modulo $4$?",
      options: ["$2$", "$0$", "$3$", "$1$"],
      explanation: "$3!=6=4+2$. $n=4$ er unntaket fra regelen om sammensatte moduler, fordi $2a=4=n$ ikke er blant faktorene i $3!$.",
    },
    {
      question: "Hva er kjernen i fakultets-trikset?",
      options: ["Å skrive de manglende faktorene $p-j$ som restene $-j$", "Å skrive de manglende faktorene $p-j$ som restene $+j$", "Å regne ut fakultetet og så dele det på modulusen $p$", "Å redusere hver manglende faktor modulo $p-1$ først"],
      explanation: "Faktoren $p-j$ er kongruent med $-j$, så et produkt av tresifrede tall blir et lite produkt med fortegn. Å bruke $+j$ er den mest belagte feilen i sjangeren.",
    },
    {
      question: "Hva er $(p-2)!$ modulo $p$?",
      options: ["$1$", "$-1$", "$2$", "$p-2$"],
      explanation: "Fra $(p-1)!=(p-2)!(p-1)$ og $p-1\\equiv -1$ får du $-(p-2)!\\equiv -1$. Utled det heller enn å pugge det.",
    },
    {
      question: "Hvilket fortegn har produktet av de negative restene når tre faktorer mangler?",
      options: ["Negativt, og produktet er $-6$", "Positivt, og produktet er $6$", "Negativt, og produktet er $-3$", "Positivt, og produktet er $3$"],
      explanation: "$(-1)(-2)(-3)=-6$, altså $(-1)^j\\cdot j!$ med $j=3$. Tell alltid antallet manglende faktorer.",
    },
    {
      question: "Hva gjør du med kongruensen $c\\cdot m!\\equiv -1\\pmod p$?",
      options: ["Ganger begge sider med inversen til $c$ modulo $p$", "Deler begge sider på $c$ som i vanlig algebra", "Trekker $c$ fra begge sider av kongruensen", "Reduserer $m!$ modulo $c$ før du fortsetter"],
      explanation: "Det finnes ingen divisjon i kongruensregning. Inversen finnes fordi $c$ er et produkt av tall under $p$, så $p\\nmid c$.",
    },
    {
      question: "Hva er resten når $12!$ deles på $13$?",
      options: ["$12$", "$1$", "$0$", "$11$"],
      explanation: "Wilsons teorem gir $-1$, og resten skal oppgis som et tall mellom $0$ og $12$, altså $12$.",
    },
    {
      question: "Hvorfor er forkortingen i steg 4 av malen lovlig?",
      options: ["Fordi $p$ ikke deler koeffisienten $c$, så $\\gcd(c,p)=1$", "Fordi $c$ alltid er mindre enn $p$ i denne sjangeren", "Fordi kongruenser alltid kan forkortes med et helt tall", "Fordi Wilsons teorem gir en likhet, ikke en kongruens"],
      explanation: "$c$ er et produkt av tall mellom $1$ og $p-1$, og etter Euklids lemma deler primtallet ikke produktet. Uten betingelsen er forkorting gal.",
    },
    {
      question: "Gjelder Wilsons teorem begge veier?",
      options: ["Ja — $(n-1)!\\equiv -1\\pmod n$ betyr at $n$ er et primtall", "Nei — det finnes sammensatte tall som oppfyller kongruensen", "Ja, men bare for odde $n$ større enn fire", "Nei — den omvendte påstanden er ubevist"],
      explanation: "I motsetning til Fermats lille teorem har Wilson ingen pseudoprimtall. Kriteriet er skarpt, men ubrukelig i praksis: det krever $n-2$ multiplikasjoner.",
    },
    {
      question: "Hva må sjekkes før Wilsons teorem brukes?",
      options: ["At modulusen er et primtall", "At fakultetet er mindre enn modulusen", "At forfaktoren $k$ er relativt primisk til modulusen", "At antallet manglende faktorer er et partall"],
      explanation: "For sammensatt modulus er $(n-1)!\\equiv 0$, ikke $-1$. Fellene er tall som ser prime ut: $91=7\\cdot 13$, $143=11\\cdot 13$.",
    },
    {
      question: "Hva er $22$ modulo $23$, skrevet som en negativ rest?",
      options: ["$-1$", "$-22$", "$-2$", "$1$"],
      explanation: "$22=23-1$, så $22\\equiv -1\\pmod{23}$. Tilsvarende er $21\\equiv -2$ og $20\\equiv -3$.",
    },
    {
      question: "Hvordan behandles uttrykket $k\\cdot m!+a^N$ modulo $p$?",
      options: ["De to leddene regnes hver for seg og summeres til slutt", "Eksponenten $N$ reduseres modulo $m$ før man begynner", "Fakultetet skrives om til en potens med grunntall $a$", "Wilsons teorem brukes på begge leddene samtidig"],
      explanation: "Wilson på fakultetet, Fermat på potensen, og så adderes restene. De to delene har ingenting med hverandre å gjøre før siste steg.",
    },
    {
      question: "Hvorfor kan man ikke regne ut $80!$ på eksamen?",
      options: ["Fordi tallet har 119 siffer og kalkulatoren renner over", "Fordi kalkulatoren mangler en fakultetsknapp", "Fordi fakultet ikke er definert for tall over $69$", "Fordi resten uansett blir $0$ for store fakulteter"],
      explanation: "Under hjelpemiddelkode D har du bare en enkel kalkulator, og den gir opp rundt $69!$. Teoremet er ikke en snarvei, men den eneste veien.",
    },
    {
      question: "Hva er inversen til $2$ modulo $83$?",
      options: ["$42$", "$41$", "$83$", "$2$"],
      explanation: "$2\\cdot 42=84=83+1$. Se etter små multipler som er $1$ mer enn et multiplum av $p$ før du starter Euklids algoritme.",
    },
    {
      question: "Hvilken idé er felles for bevisene til Wilsons og Eulers teorem?",
      options: ["At multiplikasjon parer eller stokker om restsystemet", "At eksponenten kan reduseres modulo $\\phi(n)$ i begge", "At modulusen kan splittes i primtallspotenser først", "At binomialkoeffisientene $\\binom pk$ er delelige med $p$"],
      explanation: "Euler stokker om et redusert restsystem, Wilson parer det med inverser. Begge bruker at forkorting er lovlig når faktoren er relativt primisk til modulusen.",
    },
    {
      question: "Hvor skal sluttsvaret på en «finn resten»-oppgave ligge?",
      options: ["Mellom $0$ og $p-1$", "Mellom $-p$ og $p$", "Mellom $1$ og $p$", "Mellom $0$ og $k\\cdot p$"],
      explanation: "En rest er per definisjon i $0,\\dots,p-1$. Skriv $-4\\equiv 79\\pmod{83}$, ikke bare $-4$.",
    },
    {
      question: "Hva bør stå i besvarelsen når du bruker teoremet?",
      options: ["Setningen «ved Wilsons teorem», med formelen", "En henvisning til læreboka teoremet står i", "En kontrollutregning av hele fakultetet", "Antall siffer i fakultetet, som begrunnelse"],
      explanation: "Et argument uten teoremnavn der teoremet bærer det, er en byggefeil. Fasitene i arkivet skriver rutinemessig «ved Wilsons teorem».",
    },
    {
      question: "Hva er resten når $9!$ deles på $13$?",
      options: ["$11$", "$1$", "$12$", "$6$"],
      explanation: "Tre faktorer mangler: $10\\cdot 11\\cdot 12\\equiv(-3)(-2)(-1)=-6$, så $-6\\cdot 9!\\equiv -1$, altså $6\\cdot 9!\\equiv 1$ og $9!\\equiv 6^{-1}\\equiv 11$.",
    },
  ],
  'ma1301-2-4': [
    {
      question: "Hva er vilkåret i det kinesiske restteoremet?",
      options: ["At modulene er parvis relativt primiske", "At modulene til sammen har $\\gcd$ lik $1$", "At alle modulene er primtall", "At restene er mindre enn modulene sine"],
      explanation: "Parvis er strengere enn samlet: $\\gcd(6,10,15)=1$, men ingen av parene er relativt primiske.",
    },
    {
      question: "Hvor mange løsninger har systemet når vilkåret er oppfylt?",
      options: ["Én restklasse modulo $M=m_1\\cdots m_k$", "Nøyaktig ett heltall, uten periode", "Én restklasse modulo $\\operatorname{lcm}$ av modulene", "Like mange som produktet av restene $b_j$"],
      explanation: "Med parvis primiske moduler er $\\operatorname{lcm}=M$, så svarene «modulo $M$» og «modulo $\\operatorname{lcm}$» faller sammen — men svaret er en restklasse, ikke ett heltall uten periode.",
    },
    {
      question: "Hva er $N_j$ i CRT-formelen?",
      options: ["$M$ delt på $m_j$", "$M$ ganget med $m_j$", "Inversen til $m_j$ modulo $M$", "Produktet av alle restene $b_j$"],
      explanation: "$N_j$ er produktet av de andre modulene. Derfor er $N_j\\equiv 0$ modulo alle andre moduler, og $\\gcd(N_j,m_j)=1$.",
    },
    {
      question: "Hvilken modulus regnes inversen $x_j$ etter?",
      options: ["Modulo $m_j$", "Modulo $M$", "Modulo $N_j$", "Modulo $b_j$"],
      explanation: "$N_jx_j\\equiv 1\\pmod{m_j}$. Det er derfor tallene holdes små: inversen regnes alltid mot en liten modulus.",
    },
    {
      question: "Hva er CRT-formelen?",
      options: ["$x\\equiv\\sum_j b_jN_jx_j\\pmod M$", "$x\\equiv\\sum_j b_jm_jx_j\\pmod M$", "$x\\equiv\\prod_j b_jN_jx_j\\pmod M$", "$x\\equiv\\sum_j b_jN_j\\pmod M$"],
      explanation: "Hvert ledd er en bryter: tent modulo $m_j$, slukket modulo de andre. Uten inversen $x_j$ treffer leddet ikke resten $b_j$.",
    },
    {
      question: "Hva gjør du med kongruensen $4x\\equiv 3\\pmod 7$ før du bruker CRT?",
      options: ["Ganger med inversen til $4$, så du får $x\\equiv 6\\pmod 7$", "Deler begge sider på $4$, så du får $x\\equiv 3/4\\pmod 7$", "Setter den inn i formelen med $b_j=3$ og $m_j=28$", "Ganger begge sider med $4$, så du får $x\\equiv 12\\pmod 7$"],
      explanation: "Alle kongruenser må ha formen $x\\equiv b_j$ først. Inversen til $4$ modulo $7$ er $2$, og $2\\cdot 3=6$.",
    },
    {
      question: "Når er systemet $x\\equiv b_1\\pmod{m_1}$, $x\\equiv b_2\\pmod{m_2}$ løsbart hvis $\\gcd(m_1,m_2)=d>1$?",
      options: ["Nøyaktig når $d$ deler $b_1-b_2$", "Nøyaktig når $d$ deler $b_1+b_2$", "Nøyaktig når $d$ deler både $b_1$ og $b_2$", "Aldri — vilkåret i teoremet er brutt"],
      explanation: "Kriteriet følger av at $d$ deler både $x-b_1$ og $x-b_2$. Løsningen er da entydig modulo $\\operatorname{lcm}(m_1,m_2)$.",
    },
    {
      question: "Har systemet $x\\equiv 3\\pmod{12}$, $x\\equiv 7\\pmod{18}$ løsning?",
      options: ["Nei, fordi $\\gcd(12,18)=6$ ikke deler $3-7$", "Ja, med periode $12\\cdot 18=216$", "Ja, med periode $\\operatorname{lcm}(12,18)=36$", "Nei, fordi $12$ og $18$ ikke er primtall"],
      explanation: "Modulo $6$ gir de to kongruensene $x\\equiv 3$ og $x\\equiv 1$ — en motsigelse. «Ingen løsning» er et fullgodt eksamenssvar.",
    },
    {
      question: "Hva er perioden i løsningen når modulene har en felles faktor?",
      options: ["$\\operatorname{lcm}$ av modulene", "Produktet av modulene", "$\\gcd$ av modulene", "Den største av modulene"],
      explanation: "Er perioden din produktet i et slikt system, har du brukt formelen der den ikke gjelder. Med parvis primiske moduler er de to like.",
    },
    {
      question: "Hva er første steg i suksessiv innsetting?",
      options: ["Skriv $x=b+mt$ ut fra kongruensen med største modulus", "Skriv $x=b+mt$ ut fra kongruensen med minste modulus", "Regn produktet $M$ av alle modulene først", "Finn inversene til alle modulene modulo $M$"],
      explanation: "Største modulus gir færrest tall å prøve videre. Metoden krever ingen formel — bare kongruensregning.",
    },
    {
      question: "Hvorfor er suksessiv innsetting et sikkerhetsnett under kode D?",
      options: ["Fordi metoden ikke krever at man husker en formel", "Fordi metoden alltid gir mindre tall enn formelen", "Fordi den virker også når modulene er like", "Fordi den gir alle løsningene, mens formelen gir én"],
      explanation: "Det er bare de fire grepene fra kap. 1.4 gjentatt. Fasitene i arkivet regner metoden som fullt likeverdig med formelen.",
    },
    {
      question: "Hva skjer med modulusen når du forkorter $3t\\equiv 3\\pmod 6$?",
      options: ["Den deles også, så du får $t\\equiv 1\\pmod 2$", "Den står uendret, så du får $t\\equiv 1\\pmod 6$", "Den ganges med $3$, så du får $t\\equiv 1\\pmod{18}$", "Den erstattes av $\\gcd(3,6)$, så du får $t\\equiv 1\\pmod 3$"],
      explanation: "Faktoren må ut av alle tre posisjonene. Glemmer du modulusen, mister du to av de tre inkongruente løsningene.",
    },
    {
      question: "Hva er hensikten med rydding når modulene deler en faktor?",
      options: ["Å splitte hver kongruens i primtallspotenser", "Å gange modulene med $\\gcd$ til de blir primiske", "Å erstatte alle modulene med produktet av dem", "Å stryke den kongruensen som har størst modulus"],
      explanation: "Splittingsregelen gir én kongruens per primtallspotens. Motsier to av dem hverandre, har systemet ingen løsning.",
    },
    {
      question: "Hvilken kontroll er obligatorisk til slutt i en CRT-oppgave?",
      options: ["Å sette svaret inn i alle kongruensene", "Å regne $M$ på nytt i en annen rekkefølge", "Å sjekke om svaret er et primtall", "Å regne ut $\\gcd$ av svaret og $M$"],
      explanation: "Innsetting tar tjue sekunder og fanger hver regnefeil. Kontroller mot de opprinnelige kongruensene, ikke de forenklede.",
    },
    {
      question: "Hvordan finner du $3^{100}\\bmod 91$ raskest for hånd?",
      options: ["Regner modulo $7$ og modulo $13$, og setter sammen med CRT", "Reduserer eksponenten modulo $91$ og regner direkte", "Bruker at $91$ er et primtall og reduserer modulo $90$", "Regner $3^{100}$ først og deler på $91$ til slutt"],
      explanation: "$91=7\\cdot 13$ er ikke et primtall. Splitting gir eksponentreduksjon mot $6$ og $12$ i stedet for mot $\\phi(91)=72$.",
    },
    {
      question: "Hva skal svaret på et CRT-system inneholde?",
      options: ["Restklassen med perioden, og minste positive om spurt", "Bare det minste positive tallet, uten periode", "Alle tall under $M$ som passer i én av kongruensene", "Produktet av modulene og summen av restene"],
      explanation: "Samme fasitkrav som for diofantiske likninger: hele løsningsmengden. «$x=157$» alene er ikke fullstendig.",
    },
    {
      question: "Hvorfor finnes inversen $x_j$ alltid?",
      options: ["Fordi $\\gcd(N_j,m_j)=1$ når vilkåret holder", "Fordi $N_j$ alltid er større enn modulusen $m_j$", "Fordi $m_j$ alltid er et primtall i CRT-systemer", "Fordi $M$ er delelig med hver av modulene $m_j$"],
      explanation: "Hver faktor i $N_j$ er relativt primisk til $m_j$, så produktet er det. Her brukes den parvise primiskheten.",
    },
    {
      question: "Hva kan du slutte av $x\\equiv 3\\pmod 5$ og $x\\equiv 3\\pmod 7$?",
      options: ["At $x\\equiv 3\\pmod{35}$", "At $x\\equiv 3\\pmod{12}$", "At $x\\equiv 6\\pmod{35}$", "At $x\\equiv 3\\pmod{5\\cdot 7-1}$"],
      explanation: "Samme rest og relativt primiske moduler lar seg slå sammen — splittingsregelen lest baklengs. Det halverer arbeidet.",
    },
    {
      question: "Hvor brukes CRT i RSA?",
      options: ["I korrekthetsbeviset, og til raskere dekryptering", "Til å velge krypteringseksponenten $e$", "Til å faktorisere modulusen $n$", "Til å sjekke at $p$ og $q$ er primtall"],
      explanation: "Korrektheten vises modulo $p$ og modulo $q$ og settes sammen. Dekryptering via $p$ og $q$ krever at man kjenner dem — det gjør bare eieren av nøkkelen.",
    },
    {
      question: "Hva må stå i besvarelsen før formelen brukes?",
      options: ["Setningen om at modulene er parvis relativt primiske", "Alle inversene, ferdig utregnet i en tabell", "En begrunnelse for at suksessiv innsetting ikke ble valgt", "Antall løsninger under $M$, regnet ut på forhånd"],
      explanation: "Det er premisset for teoremet, og fasitene i arkivet påpeker det eksplisitt. Uten det er metoden ubegrunnet.",
    },
  ],
  'ma1301-2-5': [
    {
      question: "Hva er første steg i den samlede restberegningsalgoritmen?",
      options: ["Faktoriser modulusen", "Del uttrykket i ledd", "Reduser eksponenten", "Sjekk $\\gcd$ mot grunntallet"],
      explanation: "Faktoriseringen avgjør om modulusen er et primtall, og både $\\phi(n)$ og $\\gcd$-sjekken leses ut av den.",
    },
    {
      question: "Hvilket teorem hører til et fakultetsledd med primtallsmodulus?",
      options: ["Wilsons teorem", "Eulers teorem", "Fermats lille teorem", "Det kinesiske restteoremet"],
      explanation: "Wilson gir $(p-1)!\\equiv -1$. Fermat og Euler handler om potenser, ikke om produkter.",
    },
    {
      question: "Hvorfor kan de to leddene i $k\\cdot m!+a^N$ regnes hver for seg?",
      options: ["Fordi kongruenser kan adderes", "Fordi fakultet og potens er uavhengige begreper", "Fordi Wilsons teorem gjelder for hele uttrykket", "Fordi modulusen er et primtall"],
      explanation: "Er $A\\equiv a$ og $B\\equiv b$ modulo $n$, er $A+B\\equiv a+b$. Regnereglene fra kap. 1.4 er hele hjemmelen.",
    },
    {
      question: "Hva gjør du når $\\gcd(a,n)\\ne 1$ i et potensledd?",
      options: ["Splitter modulusen i primtallspotenser og bruker CRT", "Reduserer eksponenten modulo $n$ i stedet for $\\phi(n)$", "Bruker Wilsons teorem på potensleddet", "Trekker $\\gcd(a,n)$ fra eksponenten før reduksjonen"],
      explanation: "Eulers teorem krever vilkåret. Der primtallet deler grunntallet, blir leddet $\\equiv 0$; der det ikke gjør det, virker Euler som normalt.",
    },
    {
      question: "Hva er $12^{75}$ modulo $4$?",
      options: ["$0$", "$1$", "$3$", "$2$"],
      explanation: "$12=4\\cdot 3$, så $12\\equiv 0\\pmod 4$, og alle potenser er $\\equiv 0$. Det er den lette halvdelen av en splitting.",
    },
    {
      question: "Hva er $10!$ modulo $12$?",
      options: ["$0$, fordi $3$ og $4$ er faktorer i $10!$", "$-1$, ved Wilsons teorem for $p=12$", "$1$, fordi $12$ er større enn $10$", "$11$, fordi modulusen er sammensatt"],
      explanation: "Wilsons teorem krever primtallsmodulus. Med sammensatt modulus hvis faktorer står i fakultetet, er svaret $0$.",
    },
    {
      question: "Hvilken modulus reduseres eksponenten etter når modulusen er $35$?",
      options: ["Modulo $\\phi(35)=24$", "Modulo $34$", "Modulo $35$", "Modulo $12$"],
      explanation: "$35=5\\cdot 7$ er sammensatt, så Euler gjelder med $\\phi(35)=4\\cdot 6=24$. Formen $n-1$ er bare riktig for primtall.",
    },
    {
      question: "Hva bør du gjøre før du starter malen på et potensledd?",
      options: ["Redusere grunntallet og se om det blir $0$, $1$ eller $-1$", "Regne ut hele potensen på kalkulatoren som en kontroll", "Skrive eksponenten i binærform før du gjør noe annet", "Sjekke om eksponenten selv er et primtall eller ikke"],
      explanation: "Blir grunntallet $0$, $1$ eller $-1$, er svaret der med én gang. Det tar tjue sekunder og kan spare hele regningen.",
    },
    {
      question: "Hva er den vanligste sammenblandingen i denne sjangeren?",
      options: ["Å bruke $\\phi(n)$ der $p-1$ hører, eller blande ledd", "Å regne fakultetet på kalkulatoren først", "Å glemme at kongruenser kan adderes", "Å bruke to kolonner på arket i stedet for én"],
      explanation: "De to reduksjonsreglene bruker ulike moduler. Fysisk atskilte kolonner på arket er den billigste forsikringen.",
    },
    {
      question: "Hva må stå i besvarelsen før eksponenten reduseres?",
      options: ["$\\gcd$-sjekken og teoremnavnet", "Binærutviklingen av eksponenten", "Antall siffer i det opprinnelige tallet", "Kvadrattabellen, ferdig utfylt"],
      explanation: "Uten vilkåret er reduksjonen ubegrunnet, og uten teoremnavnet bærer argumentet ingenting. Fasitene skriver begge.",
    },
    {
      question: "Hva blir resten hvis ett ledd i et PRODUKT er $\\equiv 0$ modulo $n$?",
      options: ["Hele produktet er $\\equiv 0$", "Hele produktet er $\\equiv 1$", "Produktet blir det andre leddet alene", "Man må regne begge leddene likevel"],
      explanation: "En gratis snarvei som ikke finnes for summer. Er $10!\\equiv 0\\pmod{12}$, er $10!\\cdot 3^{50}\\equiv 0$ uansett potensledd.",
    },
    {
      question: "Hvordan settes en splittet beregning sammen igjen?",
      options: ["Med det kinesiske restteoremet", "Ved å legge sammen delrestene", "Ved å gange delrestene med hverandre", "Ved å velge den største av delrestene"],
      explanation: "Delrestene er rester mot ulike moduler, så de kan verken adderes eller multipliseres. CRT er verktøyet.",
    },
    {
      question: "Hva er de to siste sifrene i et tall, uttrykt som en rest?",
      options: ["Resten modulo $100$", "Resten modulo $10$", "Resten modulo $50$", "Resten modulo $99$"],
      explanation: "Og $100=4\\cdot 25$, så splitting i $4$ og $25$ er standardgrepet. Er resten $7$, er de to siste sifrene $07$.",
    },
    {
      question: "Hva gjør du hvis to eksponenter har samme rest modulo $p-1$?",
      options: ["Regner bare den ene potensen — de er kongruente", "Legger sammen eksponentene før reduksjonen", "Bruker Wilsons teorem på det ene leddet", "Ganger de to potensene og reduserer én gang"],
      explanation: "Fermat gir at potensene er kongruente. Sjekk det først — det kan halvere arbeidet, som i $3^{100}+3^{40}\\bmod 13$.",
    },
    {
      question: "Hvor mange ledd har uttrykket i en typisk eksamensoppgave av denne typen?",
      options: ["To, sjelden tre", "Alltid nøyaktig ett", "Fire eller flere", "Like mange som modulusen har primfaktorer"],
      explanation: "Ett fakultetsledd og ett potensledd er standardformen — den prøver begge teoremene i samme oppgave.",
    },
    {
      question: "Hva er koeffisienten når fire faktorer mangler i fakultetet?",
      options: ["$+24$", "$-24$", "$+4$", "$-4$"],
      explanation: "$(-1)(-2)(-3)(-4)=24$, altså $(-1)^j\\cdot j!$ med $j=4$. Et partall antall gir positivt produkt.",
    },
    {
      question: "Hva er faren ved å hoppe over $\\gcd$-sjekken?",
      options: ["At reduksjonen blir ubegrunnet, og oftest gal", "At man mister tid på å regne den senere", "At kvadrattabellen blir dobbelt så lang", "At man må bruke suksessiv innsetting i stedet"],
      explanation: "Metoden er det som vurderes. Blir sluttallet tilfeldigvis riktig, er begrunnelsen likevel borte — og oftest blir det galt.",
    },
    {
      question: "Hva skal sluttsvaret på «finn resten»-oppgaven være?",
      options: ["Et tall mellom $0$ og $n-1$", "En restklasse med periode $n$", "Et tall mellom $1$ og $n$", "Et negativt tall om det er kortere"],
      explanation: "En rest er per definisjon i $0,\\dots,n-1$. Skriv $-4\\equiv 79\\pmod{83}$, ikke bare $-4$.",
    },
    {
      question: "Hvorfor er denne oppgavetypen kalt signaturoppgaven i faget?",
      options: ["Fordi den prøver alle fire teoremene og valget mellom dem", "Fordi den alltid er oppgave nummer én i settet", "Fordi den er den eneste som gir full uttelling", "Fordi den bare krever ett teorem, men mange regnesteg"],
      explanation: "Den står i praktisk talt hvert sett fra 2014, ofte med 2–3 delpunkt, og krever både Wilson og Fermat eller Euler.",
    },
    {
      question: "Hva må gjøres med summen av delrestene til slutt?",
      options: ["Den reduseres modulo $n$", "Den ganges med modulusen", "Den deles på antall ledd", "Den skrives som en restklasse"],
      explanation: "$8+14=22$ er ikke en rest modulo $19$. Å stoppe før siste reduksjon er en klassisk slurvefeil.",
    },
  ],
  'ma1301-2-6': [
    {
      question: "Hvilke tre spørsmål gir hele løsningsveien i sjanger E?",
      options: ["Er modulusen et primtall? Hvilke ledd? Holder $\\gcd$-vilkåret?", "Er eksponenten stor? Er grunntallet lite? Er modulusen odde?", "Er uttrykket en sum? Er det et produkt? Er det en potens?", "Hvor mange poeng? Hvor lang tid? Hvilken sjanger?"],
      explanation: "Beslutningstreet: modulusen velger mellom Fermat og Euler, leddet velger mellom potens- og fakultetsmalen, og $\\gcd$ avgjør om splitting trengs.",
    },
    {
      question: "Er $91$ et primtall?",
      options: ["Nei, $91=7\\cdot 13$", "Ja, $91$ har ingen ekte divisorer", "Nei, $91=3\\cdot 31$", "Ja, siden $91$ er odde"],
      explanation: "En klassisk felle: $91$ ser prim ut, men $\\phi(91)=6\\cdot 12=72$ skal brukes, ikke $90$. Sjekk alltid $7$, $11$ og $13$.",
    },
    {
      question: "Hva gjør du FØRST i oppskriften for $a^N\\bmod n$?",
      options: ["Faktoriserer modulusen", "Skriver binærutviklingen av eksponenten", "Setter opp kvadrattabellen", "Regner $a^2$ og $a^3$ modulo $n$"],
      explanation: "Faktoriseringen avgjør om modulusen er et primtall, og gir både $\\phi(n)$ og grunnlaget for $\\gcd$-sjekken.",
    },
    {
      question: "Hva er koeffisienten i Wilson-trikset når fem faktorer mangler?",
      options: ["$-120$", "$+120$", "$-5$", "$+5$"],
      explanation: "$(-1)^5\\cdot 5!=-120$. De eneste koeffisientene som forekommer på eksamen, er $-1$, $2$, $-6$, $24$ og $-120$.",
    },
    {
      question: "Hvordan finner du inversen til koeffisienten raskest for hånd?",
      options: ["Prøver små multipler til du får $1$ mer enn et multiplum av $p$", "Regner $c^{p-1}$ modulo $p$ og leser av", "Deler $p$ på koeffisienten og tar resten", "Bruker at inversen alltid er $p-c$"],
      explanation: "$24\\cdot 12=288=41\\cdot 7+1$ gir inversen på tjue sekunder. Euklids algoritme er sikkerhetsnettet når prøvingen ikke treffer.",
    },
    {
      question: "Hva sjekker du før du bruker CRT-formelen?",
      options: ["At modulene er parvis relativt primiske", "At restene er mindre enn modulene", "At produktet $M$ er et primtall", "At antall kongruenser er minst tre"],
      explanation: "Premisset for teoremet. Er perioden i svaret ditt produktet mens $\\operatorname{lcm}$ er mindre, har du brukt formelen ulovlig.",
    },
    {
      question: "Hvilken metode er sikkerhetsnettet under kode D når CRT-formelen glipper?",
      options: ["Suksessiv innsetting", "Kvadrer-og-multipliser", "Wilsons teorem", "Prøving av alle tall under $M$"],
      explanation: "Innsetting krever ingen formel — bare kongruensregning fra kap. 1.4 — og fasitene regner den som fullt likeverdig.",
    },
    {
      question: "Hva blir $18^{50}$ modulo $9$?",
      options: ["$0$", "$1$", "$9$", "$8$"],
      explanation: "$9\\mid 18$, så $18\\equiv 0\\pmod 9$ og alle potenser er $\\equiv 0$. Det er den lette halvdelen av splittingen av modulus $45$.",
    },
    {
      question: "Hva er perioden når to moduler har $\\gcd=3$?",
      options: ["$\\operatorname{lcm}$ av modulene", "Produktet av modulene", "Produktet delt på $9$", "Den minste av modulene"],
      explanation: "For $15$ og $21$ er perioden $105$, ikke $315$. Det er kontrollen på at ikke-primiske moduler er behandlet riktig.",
    },
    {
      question: "Hva skjer med modulusen når du forkorter $6t\\equiv 9\\pmod{15}$?",
      options: ["Den deles på $3$, så du får $2t\\equiv 3\\pmod 5$", "Den står uendret, så du får $2t\\equiv 3\\pmod{15}$", "Den deles på $6$, så du får $t\\equiv 3\\pmod{2{,}5}$", "Den ganges med $3$, så du får $2t\\equiv 3\\pmod{45}$"],
      explanation: "Faktoren må ut av alle tre posisjonene. Glemmer du modulusen, mister du to tredeler av løsningene for $t$.",
    },
    {
      question: "Hva er den vanligste feilen i hele Del 2?",
      options: ["$\\gcd$-sjekken glemt før eksponentreduksjonen", "Kvadrattabellen skrevet med for mange rader", "Teoremnavnet skrevet på engelsk i stedet for norsk", "Modulusen faktorisert to ganger i samme oppgave"],
      explanation: "Fasitene advarer eksplisitt mot Euler brukt uten vilkåret. Skriv $\\gcd(a,n)$ ned som eget tall før du rører eksponenten.",
    },
    {
      question: "Hvor mange kvadrater trenger du typisk etter en riktig eksponentreduksjon?",
      options: ["Mellom to og fem", "Mellom åtte og tolv", "Like mange som modulusen har siffer", "Alltid nøyaktig fire"],
      explanation: "Eksamensoppgavene er kalibrert slik at den reduserte eksponenten er under $32$. Åtte rader i tabellen betyr glemt reduksjon.",
    },
    {
      question: "Hva er den beste kontrollen på et CRT-svar?",
      options: ["Å sette svaret inn i alle kongruensene", "Å sjekke at svaret er mindre enn $M$", "Å regne $M$ på nytt", "Å sjekke at svaret er odde"],
      explanation: "Innsetting tar tjue sekunder og fanger hver regnefeil. Kontroller mot de opprinnelige kongruensene, ikke de forenklede.",
    },
    {
      question: "Hva bør stå i besvarelsen der du bruker $(p-1)!\\equiv -1$?",
      options: ["«Ved Wilsons teorem»", "«Etter Bézout»", "«Fra Eulers teorem»", "«Ved det kinesiske restteoremet»"],
      explanation: "Teoremnavnet der argumentet hviler på det. Fasitene i arkivet gjør dette rutinemessig, og det koster fire ord.",
    },
    {
      question: "Hva gjør du med et fakultet når modulusen er sammensatt og faktorene står i fakultetet?",
      options: ["Konkluderer at fakultetet er $\\equiv 0$", "Bruker Wilsons teorem som ellers", "Reduserer fakultetet modulo $\\phi(n)$", "Deler modulusen på fakultetet"],
      explanation: "Wilson krever primtallsmodulus. Er $n$ sammensatt med faktorene inne i $m!$, deler $n$ tallet $m!$.",
    },
    {
      question: "Hvor lang tid tar en sammensatt oppgave med to ledd når prosedyren sitter?",
      options: ["Omtrent 15 minutter", "Omtrent 45 minutter", "Omtrent 3 minutter", "Omtrent 75 minutter"],
      explanation: "Eksamensbudsjettet er ~24 minutter per delpunkt, så du har god margin — og henter inn tid til bevis- og resiprositetsoppgavene.",
    },
  ],
  'ma1301-3-1': [
    {
      question: "Hva er $\\phi(n)$ når $n=pq$ med $p$ og $q$ ulike primtall?",
      options: ["$(p-1)(q-1)$", "$pq-1$", "$pq-p-q$", "$(p-1)(q-1)+1$"],
      explanation: "Multiplikativiteten pluss $\\phi(p)=p-1$. Kontroll: $(p-1)(q-1)=n-p-q+1$.",
    },
    {
      question: "Hvilke størrelser i RSA er offentlige?",
      options: ["Modulusen $n$ og krypteringseksponenten $e$", "Modulusen $n$ og dekrypteringseksponenten $d$", "Primtallene $p$ og $q$", "Verdien $\\phi(n)$ og eksponenten $e$"],
      explanation: "Alt annet er hemmelig. Kjenner du $p$, $q$ eller $\\phi(n)$, kan du regne $d$ — og systemet er brutt.",
    },
    {
      question: "Hvilken sammenheng definerer dekrypteringseksponenten $d$?",
      options: ["$ed\\equiv 1\\pmod{\\phi(n)}$", "$ed\\equiv 1\\pmod n$", "$e+d\\equiv 0\\pmod{\\phi(n)}$", "$ed\\equiv 0\\pmod{\\phi(n)}$"],
      explanation: "$d$ er inversen til $e$ modulo $\\phi(n)$. Merk at modulusen her er $\\phi(n)$, ikke $n$ — det er en vanlig forveksling.",
    },
    {
      question: "Hva er kravet til krypteringseksponenten $e$?",
      options: ["At $\\gcd(e,\\phi(n))=1$", "At $e$ er et primtall", "At $\\gcd(e,n)=1$", "At $e$ deler $\\phi(n)$"],
      explanation: "Uten det finnes ingen invers $d$, og systemet kan ikke dekryptere. $e$ behøver ikke være et primtall.",
    },
    {
      question: "Hvordan finner man $d$ for hånd?",
      options: ["Med Euklids algoritme, frem og baklengs", "Ved å regne $\\phi(n)$ delt på $e$ og runde av til nærmeste heltall", "Ved å prøve alle tall mellom $1$ og $n$ til ett av dem passer", "Ved å faktorisere $e$ og bytte om rekkefølgen på faktorene"],
      explanation: "$d$ er en modulær invers, og substitusjonskjeden gir Bézout-koeffisientene. Føringen frem og baklengs er føringskravet i emnet.",
    },
    {
      question: "Hva er formelen for kryptering?",
      options: ["$c\\equiv m^{e}\\pmod n$", "$c\\equiv m^{d}\\pmod n$", "$c\\equiv e^{m}\\pmod n$", "$c\\equiv m^{e}\\pmod{\\phi(n)}$"],
      explanation: "$e$ for «encrypt», og regningen skjer modulo $n$. Å bruke $\\phi(n)$ som modulus for meldinger er en klassisk forveksling.",
    },
    {
      question: "Hva hviler sikkerheten i RSA på?",
      options: ["At store tall er vanskelige å faktorisere", "At algoritmen bak systemet holdes strengt hemmelig", "At krypteringseksponenten $e$ er et stort primtall", "At meldingen $m$ alltid er mindre enn modulusen $n$"],
      explanation: "Å finne $\\phi(n)$ er like vanskelig som å faktorisere $n$: $\\phi(n)$ gir $p+q$, og sammen med $pq=n$ gir det $p$ og $q$.",
    },
    {
      question: "Hva gjør en angriper som kjenner $\\phi(n)$?",
      options: ["Kan både faktorisere $n$ og regne $d$", "Kan regne $d$, men ikke faktorisere $n$", "Kan faktorisere $n$, men ikke regne $d$", "Kan ingenting uten å kjenne $m$"],
      explanation: "$p+q=n-\\phi(n)+1$, så $p$ og $q$ er røttene i $x^2-sx+n=0$. Derfor er $\\phi(n)$ like hemmelig som faktoriseringen.",
    },
    {
      question: "Hvilket teorem gir at $(m^e)^d\\equiv m\\pmod n$ når $\\gcd(m,n)=1$?",
      options: ["Eulers teorem", "Wilsons teorem", "Det kinesiske restteoremet", "Euklids lemma"],
      explanation: "$ed=1+k\\phi(n)$ gir $m^{ed}=m\\cdot(m^{\\phi(n)})^k\\equiv m$. Utledningen er tre linjer og skal føres, ikke pugges.",
    },
    {
      question: "Hva må i tillegg behandles hvis korrektheten skal gjelde for ALLE meldinger?",
      options: ["Tilfellet der $p$ eller $q$ deler $m$", "Tilfellet der meldingen $m$ er større enn $n$", "Tilfellet der eksponenten $e$ er et partall", "Tilfellet der $d$ er mindre enn eksponenten $e$"],
      explanation: "Da svikter vilkåret i Eulers teorem. Man viser påstanden modulo $p$ og modulo $q$ med Fermat, og setter sammen med CRT.",
    },
    {
      question: "Hva er $\\phi(247)$?",
      options: ["$216$", "$246$", "$228$", "$208$"],
      explanation: "$247=13\\cdot 19$, så $\\phi=12\\cdot 18=216$. Verdien $246$ ville betydd at $247$ var et primtall.",
    },
    {
      question: "Hvorfor må meldingen $m$ være mindre enn $n$?",
      options: ["Fordi dekrypteringen gir resten modulo $n$", "Fordi kalkulatoren ellers renner over ved kryptering", "Fordi $\\gcd(m,n)$ ellers blir større enn $1$ automatisk", "Fordi $m^e$ ellers får for mange siffer å håndtere"],
      explanation: "To meldinger som er kongruente modulo $n$, gir samme kryptering. I praksis deles meldingen i blokker mindre enn $n$.",
    },
    {
      question: "Hva er den raske veien til dekryptering når man kjenner $p$ og $q$?",
      options: ["Reduser $d$ mot $p-1$ og $q-1$, og bruk CRT", "Reduser $c$ modulo $p$ og modulo $q$, og legg sammen restene", "Regn $c^{d}$ modulo $\\phi(n)$ i stedet for modulo $n$ til slutt", "Faktoriser $c$ og dekrypter hver av faktorene for seg"],
      explanation: "Fermats lille teorem gir de reduserte eksponentene, og CRT setter delsvarene sammen. Begge veier er fullgode.",
    },
    {
      question: "Hvorfor kan en angriper ikke bruke den raske dekrypteringsveien?",
      options: ["Den krever $p$ og $q$ — hemmeligheten han mangler", "Den krever en kraftigere kalkulator enn hjelpemiddelkode D tillater", "Den gir bare resten modulo $p$, og aldri resten modulo $n$", "Den virker bare når meldingen $m$ er mindre enn primtallet $p$"],
      explanation: "Reduksjonen av $d$ mot $p-1$ og $q-1$ forutsetter faktoriseringen. Det er hele asymmetrien i systemet.",
    },
    {
      question: "Hvor mange kvadrer-og-multipliser-steg krever en typisk RSA-dekryptering?",
      options: ["Mellom fem og ni", "Mellom to og tre", "Mer enn tjue", "Like mange som $n$ har siffer"],
      explanation: "$d$ kan ikke reduseres modulo $\\phi(n)$ — den er alt mindre. Derfor er dette dyrere enn en vanlig restberegning.",
    },
    {
      question: "Hva er den beste kontrollen på en RSA-dekryptering?",
      options: ["Å kryptere svaret tilbake og se at man får $c$", "Å sjekke om svaret man fikk, er et primtall", "Å sjekke at svaret er mindre enn tallet $\\phi(n)$", "Å faktorisere svaret og sammenligne det med $n$"],
      explanation: "Den er absolutt: har du dekryptert riktig, gir $m^e\\bmod n$ tilbake $c$. Er du presset på tid, ta i det minste $ed$-kontrollen.",
    },
    {
      question: "Hva er kontrollen på at $d$ er riktig funnet?",
      options: ["At $ed$ gir rest $1$ ved divisjon med $\\phi(n)$", "At $ed$ gir rest $1$ ved divisjon med modulusen $n$", "At $d$ er mindre enn krypteringseksponenten $e$", "At $d$ er en divisor i tallet $\\phi(n)$"],
      explanation: "Tjue sekunder, og du har utelukket den vanligste tallfeilen i sjangeren — slurv i Euklid baklengs.",
    },
    {
      question: "Hvorfor bruker RSA to primtall og ikke ett?",
      options: ["Med ett primtall kunne alle regnet $\\phi(n)=n-1$", "Med ett primtall blir krypteringen for langsom i praksis", "Med ett primtall finnes det ingen invers til eksponenten $e$", "Med ett primtall må meldingen være mindre enn $\\sqrt n$"],
      explanation: "Hele hemmeligheten ligger i at $\\phi(n)$ ikke kan leses av $n$. Flere enn to primtall virker matematisk, men gir mindre faktorer.",
    },
    {
      question: "Hva er den vanligste feilen i sjanger D?",
      options: ["$\\phi(n)$ regnet feil", "Meldingen skrevet med for mange siffer", "Kvadrattabellen satt opp med for få rader", "Teoremnavnet stavet feil"],
      explanation: "Å bruke $n-1$ i stedet for $(p-1)(q-1)$, eller å gange ut galt. Kontroller med $(p-1)(q-1)=n-p-q+1$.",
    },
    {
      question: "Hva SKAL stå i besvarelsen når du oppgir $d$?",
      options: ["Euklids algoritme begge veier, og $ed$-kontrollen", "Bare verdien av $d$, siden den er entydig bestemt", "En henvisning til at $d$ er inversen til $e$ modulo $\\phi(n)$", "Antall siffer i $\\phi(n)$, som en kalibrering"],
      explanation: "Et $d$ uten kjeden er et sluttall uten metode, og instruksen på hvert sett er at alle svar må begrunnes.",
    },
  ],
  'ma1301-3-2': [
    {
      question: "Hva er første steg i RSA-oppskriften?",
      options: ["Regn $\\phi(n)=(p-1)(q-1)$", "Finn $d$ med Euklids algoritme", "Sett opp kvadrattabellen for $c$", "Reduser $c$ modulo $p$ og $q$"],
      explanation: "Har du bare $n$, må du faktorisere først. Kontrollen på $\\phi(n)$ er $n-p-q+1$.",
    },
    {
      question: "Hva er kontrollen på at $d$ er riktig funnet?",
      options: ["At $ed$ gir rest $1$ ved divisjon med $\\phi(n)$", "At $d$ er mindre enn krypteringseksponenten $e$", "At $d$ er et primtall mellom $1$ og $\\phi(n)$", "At $d$ er en divisor i modulusen $n$"],
      explanation: "Tjue sekunder, og du har utelukket den vanligste tallfeilen i sjangeren. Typisk er $ed=\\phi(n)+1$ eller $2\\phi(n)+1$.",
    },
    {
      question: "Hva forteller binærutviklingen av eksponenten deg før du starter?",
      options: ["Hvor mange kvadrater og multiplikasjoner du får", "Om modulusen $n$ er et primtall eller sammensatt", "Om eksponenten $e$ er et lovlig valg i systemet", "Hvor stor meldingen $m$ kan være i dette systemet"],
      explanation: "$d=65=1000001_2$ gir seks kvadrater og én multiplikasjon; $d=63=111111_2$ gir fem og fem. Samme størrelse, dobbelt arbeid.",
    },
    {
      question: "Hva bør du gjøre før du kvadrerer i en dekryptering?",
      options: ["Redusere grunntallet, og se etter negative rester", "Regne ut hele potensen på kalkulatoren som kontroll", "Faktorisere den krypterte meldingen $c$", "Sjekke om $c$ er relativt primisk til $e$"],
      explanation: "Er $c\\equiv -3\\pmod n$, blir kvadratene små. Reduksjonen sparer ofte halve regningen.",
    },
    {
      question: "Hva er den absolutte kontrollen på en RSA-dekryptering?",
      options: ["Å kryptere svaret tilbake og se at man får $c$", "Å sjekke at svaret er mindre enn tallet $\\phi(n)$", "Å regne $\\gcd(m,n)$ og se at den blir $1$", "Å faktorisere svaret og sammenligne det med $p$"],
      explanation: "Den koster like mye som krypteringen, men da VET du at svaret er riktig — en sjelden luksus på en eksamen uten hjelpemidler.",
    },
    {
      question: "Må krypteringseksponenten $e$ være et primtall?",
      options: ["Nei, kravet er at $\\gcd(e,\\phi(n))=1$", "Ja, ellers finnes det ingen invers $d$ i systemet", "Ja, ellers blir krypteringen for langsom i praksis", "Nei, men $e$ må være en divisor i $\\phi(n)$"],
      explanation: "$e=15$ er lovlig når $\\phi(n)=352$, siden $\\gcd(15,352)=1$. En oppgave kan bruke sammensatt $e$ for å prøve nettopp dette.",
    },
    {
      question: "Hvordan reduseres eksponenten i den raske dekrypteringsveien?",
      options: ["Modulo $p-1$ og modulo $q-1$", "Modulo $p$ og modulo $q$", "Modulo $\\phi(n)$ og modulo $n$", "Modulo $e$ og modulo $d$"],
      explanation: "Hjemmelen er Fermats lille teorem mot hvert primtall. Delsvarene settes sammen med det kinesiske restteoremet.",
    },
    {
      question: "Hvorfor er faktoriseringen av $n$ premisset for hele oppgaven?",
      options: ["Fordi $\\phi(n)$ og dermed $d$ følger av $p$ og $q$", "Fordi meldingen må deles i blokker mindre enn $p$", "Fordi kvadrer-og-multipliser krever primtallsmodulus", "Fordi $e$ må velges blant divisorene i tallet $n$"],
      explanation: "Uten faktoriseringen finnes ingen $\\phi(n)$, og uten den ingen $d$. Derfor skal prøvedivisjonen vises i besvarelsen.",
    },
    {
      question: "Hva er $\\phi(437)$ når $437=19\\cdot 23$?",
      options: ["$396$", "$436$", "$418$", "$380$"],
      explanation: "$18\\cdot 22=396$, og kontrollen $437-19-23+1=396$ stemmer. Verdien $436$ ville betydd at $437$ var et primtall.",
    },
    {
      question: "Hva gjør du hvis Bézout-koeffisienten for $d$ blir negativ?",
      options: ["Legger til $\\phi(n)$", "Bytter fortegn på hele likningen", "Legger til modulusen $n$", "Ganger med $-1$ og bruker den"],
      explanation: "Det endrer ikke restklassen, og $d$ skal oppgis i intervallet $0<d<\\phi(n)$.",
    },
    {
      question: "Hvilken variant av RSA-oppgaven ligger på bestått-nivå?",
      options: ["Dekryptere med oppgitt $d$", "Finne $d$ selv og dekryptere", "Bygge et helt nøkkelpar fra $p$, $q$ og $e$", "Føre korrekthetsbeviset for alle meldinger"],
      explanation: "Karakterskillene i arkivet: dekryptere med gitt $d$ er mekanikken, finne $d$ selv er midtsjiktet, og beviset er toppsjiktet.",
    },
    {
      question: "Hva må stå i besvarelsen når du oppgir $d$?",
      options: ["Euklids algoritme frem og baklengs", "Bare tallverdien til $d$", "En kontroll av at $d$ er odde", "Antall siffer i $\\phi(n)$"],
      explanation: "Et $d$ uten kjeden er et sluttall uten metode, og instruksen på hvert sett er at alle svar må begrunnes.",
    },
    {
      question: "Hvorfor kan en angriper ikke bruke den raske dekrypteringsveien?",
      options: ["Den krever $p$ og $q$", "Den krever en bedre kalkulator", "Den gir bare resten modulo $p$", "Den krever at $m$ er liten"],
      explanation: "Reduksjonen av $d$ mot $p-1$ og $q-1$ forutsetter faktoriseringen — nettopp hemmeligheten angriperen mangler.",
    },
    {
      question: "Hva må i tillegg vises hvis korrektheten skal gjelde for alle meldinger?",
      options: ["Tilfellet der $p$ eller $q$ deler $m$", "Tilfellet der eksponenten $e$ er sammensatt", "Tilfellet der $d$ er større enn $e$ i systemet", "Tilfellet der den krypterte $c$ er et primtall"],
      explanation: "Da svikter vilkåret i Eulers teorem. Vis påstanden modulo $p$ og modulo $q$ med Fermat, og sett sammen med CRT.",
    },
    {
      question: "Hvilket teorem navngis der $m^{\\phi(n)}$ erstattes med $1$?",
      options: ["Eulers teorem", "Wilsons teorem", "Bézouts identitet", "Aritmetikkens fundamentalteorem"],
      explanation: "Der hviler hele korrekthetsbeviset, og et argument uten teoremnavn er en byggefeil i dette faget.",
    },
    {
      question: "Hva er kalibreringen for modulusen i en eksamensoppgave om RSA?",
      options: ["$n$ under $10\\,000$, med tosifrede primtall", "$n$ over en million, som i virkelige systemer", "$n$ et primtall under $100$", "$n$ en potens av et primtall"],
      explanation: "Tallene må være regnbare for hånd under kode D. Virkelige systemer bruker flere hundre siffer — og er derfor trygge.",
    },
  ],
  'ma1301-4-1': [
    {
      question: "Hva betyr det at $a$ er en kvadratisk rest modulo $p$?",
      options: ["At $x^2\\equiv a\\pmod p$ har en løsning", "At $a^2\\equiv x\\pmod p$ har en løsning", "At $a$ er et kvadrattall som vanlig heltall", "At $a$ er relativt primisk til $p$"],
      explanation: "Definisjonen handler om kongruensen $x^2\\equiv a$, altså om $a$ er «et kvadrat sett med modulo-$p$-øyne». Med $p=13$ er $10$ en rest, fordi $6^2=36\\equiv 10$ — men $10$ er ikke noe kvadrattall i vanlig forstand.",
    },
    {
      question: "Hvilke verdier kan Legendre-symbolet $\\left(\\frac{a}{p}\\right)$ ha?",
      options: ["$1$, $-1$ eller $0$", "$1$ eller $-1$, aldri noe annet", "alle hele tall mellom $0$ og $p-1$", "$1$, $0$ eller $p-1$ etter tur"],
      explanation: "Symbolet er $1$ for kvadratisk rest, $-1$ for ikke-rest og $0$ når $p\\mid a$. Verdien $0$ er randtilfellet, og det er den man oftest glemmer å sjekke for.",
    },
    {
      question: "Hva er eksponenten i Eulers kriterium?",
      options: ["$\\frac{p-1}{2}$", "$p-1$", "$\\frac{p+1}{2}$", "$\\frac{p-1}{4}$"],
      explanation: "Kriteriet er $\\left(\\frac ap\\right)\\equiv a^{(p-1)/2}$ — halve Fermat-eksponenten. Bruker du $p-1$, får du $1$ uansett hva $a$ er, og svaret blir innholdsløst.",
    },
    {
      question: "Hvor mange kvadratiske rester finnes det blant restene $1,2,\\dots,p-1$?",
      options: ["$\\frac{p-1}{2}$", "$\\frac{p+1}{2}$", "$p-1$, altså alle", "$\\frac{p-1}{4}$"],
      explanation: "Kvadreringen parrer $x$ med $p-x$, så den er to-til-en, og bildet har halvparten så mange elementer. Antallet er den gratis kontrollen på hver tabell du lager.",
    },
    {
      question: "Hva er regelen for hvordan Legendre-symbolet oppfører seg mot et produkt?",
      options: ["$\\left(\\frac{ab}{p}\\right)=\\left(\\frac ap\\right)\\left(\\frac bp\\right)$", "$\\left(\\frac{ab}{p}\\right)=\\left(\\frac ap\\right)+\\left(\\frac bp\\right)$", "$\\left(\\frac{ab}{p}\\right)=\\left(\\frac{a}{p}\\right)^{b}$", "$\\left(\\frac{ab}{p}\\right)=\\left(\\frac{a}{pb}\\right)$"],
      explanation: "Symbolet er fullstendig multiplikativt i telleren, og det er derfor du faktoriserer telleren og regner ett lite symbol per primfaktor. Det er ikke additivt: $\\left(\\frac{a+b}{p}\\right)$ har ingen enkel sammenheng med de to enkeltsymbolene.",
    },
    {
      question: "Hva er det første du gjør når du skal regne ut $\\left(\\frac{158}{13}\\right)$?",
      options: ["Reduserer $158$ modulo $13$", "Faktoriserer $158$ i primtall", "Regner $158^6$ modulo $13$", "Snur symbolet med resiprositetsloven"],
      explanation: "Periodisiteten sier at symbolet bare avhenger av telleren modulo $p$. Her er $158\\equiv 2$, så symbolet er $\\left(\\frac{2}{13}\\right)$ — og du slipper å faktorisere $158=2\\cdot 79$.",
    },
    {
      question: "Hvor mange løsninger har $x^2\\equiv a\\pmod p$ når $\\left(\\frac ap\\right)=1$?",
      options: ["Nøyaktig to, og de er $x\\equiv\\pm x_0$", "Nøyaktig én, nemlig $x\\equiv x_0$", "Like mange som $\\gcd(a,p)$ sier", "$\\frac{p-1}{2}$ stykker, en per rest"],
      explanation: "Er $x_0$ en løsning, er $p-x_0$ også det, og en tredje kan ikke finnes (Euklids lemma på $(x-y)(x+y)$). Å svare «én løsning» er en dokumentert felle.",
    },
    {
      question: "Hva er $\\left(\\frac{a^2}{p}\\right)$ når $p\\nmid a$?",
      options: ["$1$, siden $(\\pm 1)^2=1$", "$-1$, siden kvadrering snur fortegnet", "$a$, redusert modulo $p$", "$0$, siden telleren er et kvadrat"],
      explanation: "Multiplikativiteten gir $\\left(\\frac{a^2}{p}\\right)=\\left(\\frac ap\\right)^2$, og symbolverdien er $\\pm 1$. Praktisk betydning: faktorer med partall eksponent kan strykes med en gang.",
    },
    {
      question: "Hva sier supplementsregelen for $\\left(\\frac{-1}{p}\\right)$?",
      options: ["$1$ hvis $p\\equiv 1\\pmod 4$, ellers $-1$", "$1$ hvis $p\\equiv 1\\pmod 8$, ellers $-1$", "$1$ hvis $p\\equiv 3\\pmod 4$, ellers $-1$", "$-1$ for alle odde primtall $p$, uten unntak"],
      explanation: "Regelen leses ut av Eulers kriterium: $\\left(\\frac{-1}{p}\\right)\\equiv(-1)^{(p-1)/2}$, og $\\frac{p-1}{2}$ er partall nøyaktig når $4\\mid p-1$. Tre linjers utledning når du er i tvil.",
    },
    {
      question: "Du regner $a^{(p-1)/2}\\bmod p$ og får $7$, med $p=23$. Hva er konklusjonen?",
      options: ["Du har regnet feil — svaret må være $1$ eller $22$", "Symbolet er $7$, som er en fullt gyldig symbolverdi", "Symbolet er $-1$, siden potensen ikke ble $1$", "Symbolet er $0$, siden $7$ ikke er $\\pm 1$ modulo $23$"],
      explanation: "Eulers kriterium kan bare gi $1$ eller $p-1$, siden $\\left(a^{(p-1)/2}\\right)^2\\equiv 1$. Alt annet er regnefeil, og det er den billigste kontrollen i hele sjangeren.",
    },
    {
      question: "Hva er produktet av to kvadratiske ikke-rester modulo $p$?",
      options: ["En kvadratisk rest", "En kvadratisk ikke-rest", "Alltid kongruent med $-1$", "Umulig å avgjøre uten regning"],
      explanation: "Multiplikativiteten gir $(-1)(-1)=1$. Med $p=13$ er både $2$ og $5$ ikke-rester, men $10=2\\cdot 5$ er en rest, og faktisk $6^2\\equiv 10$.",
    },
    {
      question: "Hva er $\\left(\\frac{a}{p}\\right)$ når $p\\mid a$?",
      options: ["$0$, og kongruensen har nøyaktig én løsning", "$1$, og kongruensen har to løsninger", "$-1$, og kongruensen har ingen løsning", "udefinert, symbolet krever $p\\nmid a$"],
      explanation: "Da er $a\\equiv 0$, og $x^2\\equiv 0$ har bare $x\\equiv 0$ som løsning — én, ikke to. Dette tilfellet får derfor sin egen symbolverdi.",
    },
    {
      question: "Hva er verdien av $\\sum_{a=1}^{p-1}\\left(\\frac{a}{p}\\right)$?",
      options: ["$0$, fordi det er like mange $+1$ som $-1$", "$\\frac{p-1}{2}$, fordi restene teller positivt", "$1$, fordi bare $a=1$ bidrar", "$p-1$, fordi hvert ledd er $\\pm 1$"],
      explanation: "Halvparten-regelen gir $\\frac{p-1}{2}$ ledd med verdi $+1$ og like mange med $-1$, og de kansellerer. Dette er en «vis at»-oppgave som ikke krever regning.",
    },
    {
      question: "Hvorfor holder det å kvadrere $x=1,\\dots,\\frac{p-1}{2}$ i tabellmetoden?",
      options: ["Fordi $x$ og $p-x$ har samme kvadrat modulo $p$", "Fordi kvadrater over $\\frac{p-1}{2}$ blir større enn $p$", "Fordi bare de små restene kan være kvadrater", "Fordi $\\left(\\frac xp\\right)$ er $0$ for store $x$"],
      explanation: "$(p-x)^2=p^2-2px+x^2\\equiv x^2$, så andre halvdel av tabellen gjentar første baklengs. Samme observasjon gir at antallet rester er $\\frac{p-1}{2}$.",
    },
    {
      question: "Hvilket teoremnavn hører til utsagnet $a^{p-1}\\equiv 1\\pmod p$ for $p\\nmid a$?",
      options: ["Fermats lille teorem", "Eulers kriterium", "Den kvadratiske resiprositetsloven", "Wilsons teorem"],
      explanation: "Eksponenten $p-1$ er Fermats. Er eksponenten halvparten, altså $\\frac{p-1}{2}$, er det Eulers kriterium — og det er det navnet fasiten forventer da.",
    },
    {
      question: "Hva er $\\left(\\frac{45}{59}\\right)$ redusert så langt multiplikativiteten rekker?",
      options: ["$\\left(\\frac{5}{59}\\right)$, siden $45=3^2\\cdot 5$", "$\\left(\\frac{15}{59}\\right)$, siden $45=3\\cdot 15$", "$\\left(\\frac{3}{59}\\right)$, siden $3$ er minste faktor", "$\\left(\\frac{9}{59}\\right)\\left(\\frac{5}{59}\\right)$, uten forenkling"],
      explanation: "Faktoriser telleren, splitt symbolet, og stryk faktorene med partall eksponent: $\\left(\\frac{3}{59}\\right)^2=1$. Igjen står ett symbol, og det er det minste mulige.",
    },
    {
      question: "Hvordan behandler du $\\left(\\frac{-5}{17}\\right)$?",
      options: ["Legg til $17$, eller trekk ut $-1$ som faktor", "Bytt fortegn på hele symbolverdien helt til slutt", "Regn $\\left(\\frac{5}{17}\\right)$ og snu svaret etterpå", "Symbolet er udefinert for en negativ teller"],
      explanation: "Begge veier er fullgode: $-5\\equiv 12\\pmod{17}$, eller $\\left(\\frac{-1}{17}\\right)\\left(\\frac{5}{17}\\right)$ med supplementsregelen på første faktor. Velg den som gir penest faktorisering.",
    },
    {
      question: "Hva er den avgjørende fordelen med Eulers kriterium framfor tabellmetoden?",
      options: ["Arbeidet vokser som logaritmen av $p$, ikke som $p$", "Den gir løsningene, og ikke bare et ja eller nei", "Den virker også når modulusen er et sammensatt tall", "Den krever ingen kjennskap til eksponenten $\\frac{p-1}{2}$"],
      explanation: "Kvadrer-og-multipliser bruker 3–6 kvadreringer der tabellen ville brukt $\\frac{p-1}{2}$. Prisen er at kriteriet bare gir løsbarhet — vil du ha løsningene, må de finnes separat.",
    },
    {
      question: "Hva må stå i konklusjonen på en oppgave som spør om $x^2\\equiv a\\pmod p$ har løsning?",
      options: ["En setning om løsbarhet eller antall løsninger", "Symbolverdien alene, altså tallet $1$ eller $-1$", "Potensen $a^{(p-1)/2}$ redusert modulo $p$", "Faktoriseringen av telleren $a$ i primtall"],
      explanation: "Instruksen på hvert eksamenssett er at alle svar skal begrunnes, og i denne sjangeren betyr det en setning: «Siden $\\left(\\frac ap\\right)=-1$, har kongruensen ingen løsning.» Et symbol alene er et halvt svar.",
    },
    {
      question: "Hva er det andre steget i reduksjonsrekkefølgen for et Legendre-symbol?",
      options: ["Faktorisere telleren i primtall", "Regne ut potensen med Eulers kriterium", "Snu symbolet med resiprositetsloven", "Konkludere om antall løsninger"],
      explanation: "Rekkefølgen er: reduser telleren modulo $p$, faktoriser, splitt og stryk kvadrater, regn de små symbolene. Hvert steg gjør tallene mindre, og det er derfor rekkefølgen er verdt å holde.",
    },
  ],
  'ma1301-4-2': [
    {
      question: "Hva sier den kvadratiske resiprositetsloven for ulike odde primtall $p$ og $q$?",
      options: ["$\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$", "$\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{\\frac{p-1}{2}+\\frac{q-1}{2}}$", "$\\left(\\frac pq\\right)=\\left(\\frac qp\\right)$ for alle odde $p,q$", "$\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{\\frac{pq-1}{2}}$"],
      explanation: "Fortegnsfaktoren har eksponenten $\\frac{p-1}{2}\\cdot\\frac{q-1}{2}$, altså et produkt. Den er $-1$ nøyaktig når begge faktorene er odde, som skjer bare når $p\\equiv q\\equiv 3\\pmod 4$.",
    },
    {
      question: "Når gir resiprositetsloven et fortegnsbytte?",
      options: ["Når begge primtallene er $\\equiv 3\\pmod 4$", "Når minst ett av de to er $\\equiv 3\\pmod 4$", "Når begge primtallene er $\\equiv 1\\pmod 4$", "Når begge primtallene er $\\equiv 3\\pmod 8$"],
      explanation: "Tre av fire tilfeller gir pluss; fortegnsbytte er unntaket. Men det er unntaket som avgjør oppgaven når det inntreffer, og glemt fortegnsfaktor er den mest belagte feilen i sjangeren.",
    },
    {
      question: "Hvilken modulus bruker supplementsregelen for $\\left(\\frac{-1}{p}\\right)$?",
      options: ["$4$", "$8$", "$12$", "$2$"],
      explanation: "$\\left(\\frac{-1}{p}\\right)=1$ nøyaktig når $p\\equiv 1\\pmod 4$. Regelen for $\\left(\\frac 2p\\right)$ bruker derimot modulus $8$ — å bytte om på de to er en dokumentert felle.",
    },
    {
      question: "For hvilke rester modulo $8$ er $\\left(\\frac 2p\\right)=1$?",
      options: ["$p\\equiv 1$ og $p\\equiv 7$", "$p\\equiv 3$ og $p\\equiv 5$", "$p\\equiv 1$ og $p\\equiv 3$", "$p\\equiv 5$ og $p\\equiv 7$"],
      explanation: "8-regelen: de to «ytterste» restene om nullpunktet, altså $p\\equiv\\pm 1\\pmod 8$, gir $+1$. De to indre ($3$ og $5$) gir $-1$.",
    },
    {
      question: "Hvilken av formlene i Del 4 må du pugge fordi beviset er for langt å gjenskape under eksamen?",
      options: ["Supplementsregelen for $\\left(\\frac 2p\\right)$", "Supplementsregelen for $\\left(\\frac{-1}{p}\\right)$", "Multiplikativiteten til Legendre-symbolet", "At kvadrater i telleren faller bort"],
      explanation: "Beviset for 8-regelen går via Gauss' lemma. De tre andre utledes i én til tre linjer, blant annet ut av Eulers kriterium — de kan du gjenskape i margen om de skulle glippe.",
    },
    {
      question: "Hva er første steg i reduksjonsalgoritmen for $\\left(\\frac ap\\right)$?",
      options: ["Redusere telleren modulo $p$", "Snu symbolet med resiprositetsloven", "Regne ut potensen $a^{(p-1)/2}$", "Faktorisere nevneren $p$"],
      explanation: "Rekkefølgen er: reduser, faktoriser, splitt og stryk kvadrater, behandle hver faktor, gang sammen. Hvert steg gjør tallene mindre, og nevneren $p$ er alltid et primtall — den skal ikke faktoriseres.",
    },
    {
      question: "Hvorfor kan du ikke bruke resiprositetsloven direkte på $\\left(\\frac{15}{101}\\right)$?",
      options: ["Fordi $15$ ikke er et primtall", "Fordi $15$ er mindre enn $101$", "Fordi $101\\equiv 1\\pmod 4$", "Fordi $15$ er et oddetall"],
      explanation: "Loven gjelder for to ulike odde primtall. Faktoriser $15=3\\cdot 5$ og splitt med multiplikativiteten først; deretter snus hver primfaktor for seg.",
    },
    {
      question: "Hva gjør du rett etter at du har snudd et symbol?",
      options: ["Reduserer den nye telleren modulo den nye nevneren", "Faktoriserer den nye nevneren i primtallspotenser", "Regner ut hele symbolet med Eulers kriterium", "Ganger fortegnsfaktoren inn i det endelige svaret"],
      explanation: "Reduksjonen er der nedstigningen faktisk skjer. Glemmer du den, vokser tallene i stedet for å krympe — og det er den vanligste grunnen til at en kjede ikke vil ta slutt.",
    },
    {
      question: "Hvor mange snuoperasjoner tar en typisk eksamensoppgave i sjanger F?",
      options: ["Tre til fem", "Én, alltid", "Rundt femten", "Like mange som $\\frac{p-1}{2}$"],
      explanation: "Kjeden er en nedstigning der nevneren krymper for hvert steg, omtrent som i Euklids algoritme. For tresifrede primtall er tre til fem steg normalt. Er kjeden din på ti, er noe galt.",
    },
    {
      question: "Hva er $\\left(\\frac{2}{3}\\right)$?",
      options: ["$-1$, siden $3\\equiv 3\\pmod 8$", "$1$, siden $3\\equiv 3\\pmod 4$", "$1$, siden $2$ er det minste primtallet", "$0$, siden $3$ ikke deler $2$"],
      explanation: "8-regelen med $p=3$: resten $3$ er en av de to indre, så symbolet er $-1$. Samme svar den andre veien: $2\\equiv -1\\pmod 3$, og $\\left(\\frac{-1}{3}\\right)=-1$ siden $3\\equiv 3\\pmod 4$.",
    },
    {
      question: "Hvordan teller du fortegnene til slutt i en lang kjede?",
      options: ["Teller antall $-1$: partall gir $+1$, oddetall $-1$", "Ganger fortegnene inn linje for linje mens du regner", "Ser bare på fortegnet i det aller siste steget", "Teller antall snuoperasjoner i hele reduksjonen"],
      explanation: "Å telle minustegn samlet er raskere og lettere å kontrollere enn å gange dem inn underveis. Husk å ta med både supplementsverdiene og fortegnsbyttene fra resiprositeten.",
    },
    {
      question: "Hva er $\\left(\\frac{45}{59}\\right)$ etter at kvadratet er strøket?",
      options: ["$\\left(\\frac{5}{59}\\right)$", "$\\left(\\frac{3}{59}\\right)$", "$\\left(\\frac{15}{59}\\right)$", "$\\left(\\frac{9}{59}\\right)$"],
      explanation: "$45=3^2\\cdot 5$, og $\\left(\\frac{3}{59}\\right)^2=1$. Se etter kvadratfaktorer i telleren før du gjør noe annet — de er ofte halve arbeidet.",
    },
    {
      question: "For hvilke primtall er $3$ en kvadratisk rest?",
      options: ["For $p\\equiv\\pm 1\\pmod{12}$", "For $p\\equiv\\pm 1\\pmod 8$", "For $p\\equiv 1\\pmod 4$", "For $p\\equiv\\pm 1\\pmod 3$"],
      explanation: "Resultatet kommer fra resiprositet pluss uttømmende case-analyse over $p\\bmod 4$ og $p\\bmod 3$, som til sammen gir $p\\bmod{12}$. Sjekk: $5^2\\equiv 3\\pmod{11}$, og $11\\equiv 11\\pmod{12}$.",
    },
    {
      question: "Hva er sammenhengen mellom primitive røtter og kvadratiske rester?",
      options: ["En primitiv rot er aldri en kvadratisk rest", "En primitiv rot er alltid en kvadratisk rest", "Alle kvadratiske rester er primitive røtter", "Det finnes ingen sammenheng mellom dem"],
      explanation: "Er ordenen $p-1$, kan $r^{(p-1)/2}$ ikke være $1$, så Eulers kriterium gir $-1$. Det er en gratis utelukkelsestest i kap. 5.2 — men den bekrefter ikke: en ikke-rest kan ha mindre orden enn $p-1$.",
    },
    {
      question: "Hva bør du skrive i margen første gang primtallet $p$ dukker opp i en F-oppgave?",
      options: ["$p$ modulo $4$ og $p$ modulo $8$", "Faktoriseringen av tallet $p-1$ i primtall", "Potensen $p^{(p-1)/2}$ redusert modulo $p$", "Hele mengden av kvadratiske rester modulo $p$"],
      explanation: "Du trenger $p\\bmod 4$ til fortegnsfaktoren og til $\\left(\\frac{-1}{p}\\right)$, og $p\\bmod 8$ til $\\left(\\frac 2p\\right)$. Fem sekunder, og en hel klasse fortegnsfeil forsvinner.",
    },
    {
      question: "Hvordan avgjør du løsbarheten av $x^2+3x+1\\equiv 0\\pmod{13}$?",
      options: ["Regner $\\left(\\frac{b^2-4c}{13}\\right)$, altså $\\left(\\frac 5{13}\\right)$", "Regner $\\left(\\frac{3}{13}\\right)$, altså symbolet til koeffisienten $b$", "Prøver alle $13$ restene — det finnes ingen regel her", "Regner $\\left(\\frac{1}{13}\\right)$, altså symbolet til konstantleddet"],
      explanation: "Gang med $4$ og fullfør kvadratet: $(2x+3)^2\\equiv 9-4=5$. Diskriminanten $b^2-4c$ avgjør, akkurat som over de reelle tallene. Her er $\\left(\\frac{5}{13}\\right)=-1$, så det finnes ingen løsning.",
    },
    {
      question: "Hva skal konklusjonen på en F-oppgave inneholde?",
      options: ["En setning om antall løsninger, med begrunnelse", "Symbolverdien alene, altså tallet $1$ eller $-1$", "Alle løsningene, uansett hva oppgaven ber om", "Faktoriseringen av både telleren og av $p-1$"],
      explanation: "Instruksen på hvert eksamenssett er at alle svar skal begrunnes. Å finne løsningene er en egen og tyngre jobb — den gjør du bare når oppgaven ber om det.",
    },
    {
      question: "En kjede ender i $\\left(\\frac{4}{11}\\right)$. Hva er verdien?",
      options: ["$1$, siden $4=2^2$ er et kvadrat", "$-1$, siden $11\\equiv 3\\pmod 8$", "$-1$, siden $11\\equiv 3\\pmod 4$", "$0$, siden $4$ ikke er redusert"],
      explanation: "Kvadrater i telleren gir alltid symbolet $1$: $\\left(\\frac{2^2}{11}\\right)=\\left(\\frac{2}{11}\\right)^2=1$. Det er den raskeste avslutningen på en kjede, og verdt å se etter i hvert steg.",
    },
  ],
  'ma1301-4-3': [
    {
      question: "Hva er første handling i en F-oppgave?",
      options: ["Skrive $p\\bmod 4$ og $p\\bmod 8$ i margen", "Snu symbolet med resiprositetsloven", "Regne potensen $a^{(p-1)/2}$ modulo $p$", "Lete etter løsningene ved å kvadrere oppover"],
      explanation: "Margnotatet koster fem sekunder og fjerner en hel klasse fortegnsfeil. Du trenger $p\\bmod 4$ til fortegnsfaktoren og $p\\bmod 8$ til 8-regelen.",
    },
    {
      question: "Hva gjør du med faktorer som har partall eksponent i telleren?",
      options: ["Stryker dem — de bidrar med $1$", "Snur dem med resiprositetsloven", "Halverer eksponenten før du snur", "Behandler dem med 8-regelen"],
      explanation: "$\\left(\\frac{a^2}{p}\\right)=\\left(\\frac ap\\right)^2=1$. Se etter kvadratfaktorer først — i oppgaven om $\\left(\\frac{45}{59}\\right)$ forsvant halve arbeidet med én gang.",
    },
    {
      question: "Hvor mange minustegn må du telle for å få symbolverdien $+1$?",
      options: ["Et partall antall, inkludert null", "Nøyaktig null minustegn", "Et oddetall antall minustegn", "Like mange som antall snuoperasjoner"],
      explanation: "Fortegnene ganges sammen, så bare pariteten betyr noe. Å telle dem samlet til slutt er lettere å kontrollere enn å gange dem inn linje for linje.",
    },
    {
      question: "Hva er de tre kildene til minustegn i en reduksjonskjede?",
      options: ["Fortegnsbytter, $\\left(\\frac{-1}p\\right)$ og $\\left(\\frac 2p\\right)$", "Fortegnsbytter, periodisitet og multiplikativiteten", "Snuoperasjoner, reduksjoner og faktoriseringene", "Kvadratfaktorer, $\\left(\\frac 1p\\right)$ og $\\left(\\frac 0p\\right)$"],
      explanation: "Alle tre må med i tellingen. Periodisitet og multiplikativitet produserer aldri fortegn — de bare flytter og deler opp symbolet.",
    },
    {
      question: "Nevneren er $\\equiv 1\\pmod 4$. Hva vet du da med én gang?",
      options: ["Ingen snuing med denne nevneren gir fortegnsbytte", "Alle snuinger med denne nevneren gir et fortegnsbytte", "At $\\left(\\frac 2p\\right)=1$ uansett hvilken $p$ det er", "At telleren ikke behøver å reduseres først"],
      explanation: "Fortegnsbytte krever at BEGGE er $\\equiv 3\\pmod 4$. Er nevneren $\\equiv 1$, er hele kjeden med den nevneren fortegnsfri — se oppgavene med $p=97$ og $p=137$.",
    },
    {
      question: "Hva er $\\left(\\frac{9}{11}\\right)$?",
      options: ["$1$, siden $9=3^2$ er et kvadrat", "$-1$, siden $11\\equiv 3\\pmod 4$", "$-1$, siden $11\\equiv 3\\pmod 8$", "$0$, siden $9$ og $11$ er relativt primiske"],
      explanation: "Kvadrattall i telleren gir alltid symbolet $1$. Det er den raskeste avslutningen på en kjede, og verdt å se etter etter hver reduksjon.",
    },
    {
      question: "Hvilke tall er kvadratiske rester modulo $5$?",
      options: ["$1$ og $4$", "$1$ og $2$", "$1$, $2$ og $4$", "$2$ og $3$"],
      explanation: "Kvadrer $1$ og $2$: du får $1$ og $4$. Kjeden ender ofte med nevner $5$, så dette er verdt å ha kaldt — det sparer en snuoperasjon.",
    },
    {
      question: "Kjeden din er kommet til $\\left(\\frac{101}{3}\\right)$. Hva gjør du?",
      options: ["Reduserer $101$ mod $3$ til $\\left(\\frac 23\\right)$", "Snur symbolet til $\\left(\\frac{3}{101}\\right)$ på nytt", "Regner $101^1$ modulo $3$ med Eulers kriterium", "Faktoriserer tallet $101$ før du gjør noe annet"],
      explanation: "Periodisiteten er alltid neste steg etter en snuing — det er der tallene krymper. Og $\\left(\\frac 23\\right)=-1$ ved 8-regelen, siden $3\\equiv 3\\pmod 8$.",
    },
    {
      question: "Hva er symptomet på at du har glemt å redusere telleren mellom stegene?",
      options: ["Kjeden blir lang og vil ikke ta slutt", "Du får symbolverdien $0$ i det siste steget", "Fortegnsfaktoren blir negativ i hvert steg", "Telleren blir et kvadrattall hver gang du snur"],
      explanation: "Reduksjonen er selve nedstigningen. Uten den vokser tallene i stedet for å krympe. Tresifrede primtall skal gi tre til fem snuoperasjoner — er kjeden på ti, er noe galt.",
    },
    {
      question: "Når er Eulers kriterium raskere enn reduksjonskjeden?",
      options: ["Når $p$ er lite, eller $\\frac{p-1}{2}$ er en toerpotens", "Når telleren har mange ulike primfaktorer i seg", "Når $p$ er tresifret og telleren er ensifret", "Alltid — kriteriet er den korteste veien uansett"],
      explanation: "For $p=17$ er $m=8=2^3$, så regningen er bare tre kvadreringer. For $p=137$ er $m=68$, og da er kjeden mye kortere. Kriteriet er ellers den beste kontrollen på én liten faktor.",
    },
    {
      question: "Hva er den beste kontrollen på en resiprositetskjede under kode D?",
      options: ["Å telle minustegnene i kjeden på nytt", "Å lete etter løsningene ved å prøve seg frem", "Å faktorisere nevneren og sjekke primaliteten", "Å regne hele kjeden om med samme splitting"],
      explanation: "Fortegnstellingen er den feilen som oftest skjer, og den er billigst å finne. Deretter kommer annen splitting av telleren, og til sist Eulers kriterium på én liten faktor.",
    },
    {
      question: "Hvor mange kvadratiske rester finnes blant $1,\\dots,60$ modulo $61$?",
      options: ["$30$", "$60$", "$31$", "$15$"],
      explanation: "Halvparten-regelen gir $\\frac{p-1}{2}=30$. Begrunnelsen er at kvadreringen er to-til-en, siden $x$ og $p-x$ har samme kvadrat — og det er begrunnelsen som gir uttellingen, ikke tallet.",
    },
    {
      question: "Hvorfor må telleren faktoriseres før du snur?",
      options: ["Fordi resiprositetsloven bare gjelder for primtall", "Fordi periodisiteten krever en faktorisert teller", "Fordi kvadratfaktorene ellers gir feil fortegn", "Fordi nevneren må være mindre enn telleren"],
      explanation: "Loven er formulert for to ulike odde primtall. Å snu et sammensatt tall er et ugyldig resonnement, selv når det tilfeldigvis gir riktig svar.",
    },
    {
      question: "Hva er $\\left(\\frac{2}{q}\\right)$ for $q=3$, $5$, $7$ og $11$?",
      options: ["$-1$, $-1$, $1$, $-1$", "$-1$, $1$, $-1$, $1$", "$1$, $-1$, $1$, $-1$", "$-1$, $-1$, $-1$, $1$"],
      explanation: "8-regelen: restene er $3$, $5$, $7$ og $3$ modulo $8$. Bare $7\\equiv -1$ gir $+1$. Disse fire verdiene dukker opp i nesten hver kjede og er verdt å ha kaldt.",
    },
    {
      question: "Hva slutter du av at et delsymbol i kjeden din ble $3$?",
      options: ["Du har regnet feil: symbolet er $\\pm 1$ eller $0$", "Symbolet er $3$, som er en helt gyldig symbolverdi", "Du må redusere tallet $3$ modulo $p$ en gang til", "Kjeden er ferdig, og sluttsvaret er da $3$"],
      explanation: "Legendre-symbolet har bare tre mulige verdier. Får du noe annet, er det regnefeil — og det er en gratis kontroll å kjøre på hvert delsymbol før du ganger sammen.",
    },
    {
      question: "Hvor lang tid skal en normal F-oppgave ta på eksamen?",
      options: ["Seks til åtte minutter av de ~24 du har", "Rundt tjuefire minutter, altså hele delpunktet", "Under to minutter, siden alt bare er regneregler", "Rundt førti minutter, med kontrollene inkludert"],
      explanation: "Margnotat og faktorisering ~1 min, kjeden ~4 min, konklusjon ~1 min, kontroll ~2 min. Bruker du femten, er årsaken nesten alltid manglende reduksjon mellom stegene.",
    },
  ],
  'ma1301-5-1': [
    {
      question: "Hva er ordenen til $a$ modulo $n$?",
      options: ["Det minste $k\\ge 1$ med $a^k\\equiv 1\\pmod n$", "Det største $k\\le n$ med $a^k\\equiv 1\\pmod n$", "Antall $k\\le n$ med $a^k\\equiv 1\\pmod n$", "Verdien av $a^{\\phi(n)}$ redusert modulo $n$"],
      explanation: "Ordet «minste» er hele definisjonen. At $a^{12}\\equiv 1$ betyr bare at ordenen deler $12$ — den kan være $1$, $2$, $3$, $4$, $6$ eller $12$.",
    },
    {
      question: "Hvilket vilkår må være oppfylt for at ordenen finnes?",
      options: ["$\\gcd(a,n)=1$", "$n$ må være et primtall", "$a<n$ må gjelde", "$a$ må være en kvadratisk rest"],
      explanation: "Uten vilkåret treffer potensene aldri $1$: modulo $12$ gir potensene av $3$ bare $3,9,3,9,\\dots$. Argumentet er at $a^k\\equiv 1$ ville gitt en lineærkombinasjon $a\\cdot a^{k-1}-nm=1$.",
    },
    {
      question: "Hva sier ordenslemmaet?",
      options: ["$a^t\\equiv 1\\pmod n$ nøyaktig når $\\operatorname{ord}_n(a)\\mid t$", "$a^t\\equiv 1\\pmod n$ nøyaktig når $t\\mid\\operatorname{ord}_n(a)$", "$a^t\\equiv 1\\pmod n$ for alle $t\\ge\\operatorname{ord}_n(a)$", "$a^t\\equiv t\\pmod n$ når $\\operatorname{ord}_n(a)\\mid t$"],
      explanation: "Eksponentene som treffer $1$, er nøyaktig multiplene av ordenen. Beviset for den vanskelige retningen bruker divisjonsalgoritmen: $t=qd+r$ gir $a^r\\equiv 1$, og minimaliteten tvinger $r=0$.",
    },
    {
      question: "Hvorfor deler ordenen alltid $\\phi(n)$?",
      options: ["Eulers teorem gir en eksponent som treffer $1$", "Fordi ordenen per definisjon er en divisor av $\\phi(n)$", "Fordi $\\phi(n)$ alltid er et partall for $n>2$", "Fordi Fermats lille teorem gjelder for enhver $n$"],
      explanation: "Utledningen er én linje og bør kunnes: Eulers teorem gir en eksponent som treffer $1$, og ordenslemmaet sier at ordenen deler den. Dette korollaret er grunnen til at divisortesten virker.",
    },
    {
      question: "Hvilke eksponenter tester du i divisortesten?",
      options: ["Divisorene av $\\phi(n)$, i stigende rekkefølge", "Alle tallene fra $1$ og opp til $\\phi(n)$", "Alle primtallene som er mindre enn $\\phi(n)$", "Bare $\\phi(n)$ selv, og halvparten av den"],
      explanation: "Ordenen deler $\\phi(n)$, så bare divisorene er kandidater. Stigende rekkefølge er viktig: første treff er ordenen, og de mindre er da allerede utelukket.",
    },
    {
      question: "Du finner at $a^{12}\\equiv 1\\pmod n$. Hva vet du om ordenen?",
      options: ["At den deler $12$", "At den er nøyaktig $12$", "At den er større enn $12$", "At den deler $\\phi(n)/12$"],
      explanation: "Ordenslemmaet gir bare delelighet. Å konkludere «ordenen er $12$» uten å utelukke de mindre divisorene er den best belagte feilen i sjangeren.",
    },
    {
      question: "Hva er $\\operatorname{ord}_{17}(3)$?",
      options: ["$16$", "$8$", "$4$", "$17$"],
      explanation: "Divisortesten på $1,2,4,8,16$ gir $3^8\\equiv 16\\equiv -1$ og $3^{16}\\equiv 1$. Ordenen er $\\phi(17)=16$, så $3$ er en primitiv rot modulo $17$.",
    },
    {
      question: "En potens lander på $-1$: $a^m\\equiv -1\\pmod p$. Hva er ordenen?",
      options: ["$2m$, siden $a^{2m}\\equiv 1$ men $a^m\\not\\equiv 1$", "$m$, siden $-1$ er like godt som $1$ her", "$m/2$, siden fortegnet halverer ordenen", "Ubestemt — $-1$ sier ingenting om ordenen her"],
      explanation: "Snarveien sparer mest tid i sjangeren. Se etter tall rett under modulusen i tabellen din: $16$ modulo $17$ er $-1$, og da er ordenen det dobbelte av eksponenten.",
    },
    {
      question: "Hva er $\\operatorname{ord}_n(a^k)$ uttrykt ved $d=\\operatorname{ord}_n(a)$?",
      options: ["$d/\\gcd(k,d)$", "$d\\cdot\\gcd(k,d)$", "$dk$", "$d/k$ i alle tilfeller"],
      explanation: "Formelen utledes i tre linjer via ordenslemmaet. To spesialtilfeller: $\\gcd(k,d)=1$ gir samme orden som $a$, og $k\\mid d$ gir orden $d/k$ — måten du lager et element av ønsket orden.",
    },
    {
      question: "Hvordan reduserer du eksponenten i $a^N\\bmod n$ når du kjenner ordenen $d$?",
      options: ["$a^N\\equiv a^{N\\bmod d}\\pmod n$", "$a^N\\equiv a^{N\\bmod n}\\pmod n$", "$a^N\\equiv a^{N/d}\\pmod n$", "$a^N\\equiv N^{a\\bmod d}\\pmod n$"],
      explanation: "Divisjonsalgoritmen på eksponenten gir $a^N=(a^d)^q a^r\\equiv a^r$. Ordenen er minst mulig periode, så den gir en finere reduksjon enn $\\phi(n)$.",
    },
    {
      question: "Hva er $\\operatorname{ord}_{41}(10)$?",
      options: ["$5$", "$40$", "$20$", "$10$"],
      explanation: "$10^5=100\\,000=2439\\cdot 41+1$, og ingen mindre divisor av $40$ gir $1$. Det er også perioden i desimalutviklingen av $\\tfrac 1{41}=0{,}02439\\,02439\\dots$",
    },
    {
      question: "Hva er perioden i desimalutviklingen av $\\tfrac 1n$ når $\\gcd(10,n)=1$?",
      options: ["$\\operatorname{ord}_n(10)$", "$\\phi(n)$, alltid", "$n-1$, alltid", "$\\operatorname{ord}_{10}(n)$"],
      explanation: "Utviklingen gjentar seg etter $k$ siffer nøyaktig når $n\\mid 10^k-1$, altså når $10^k\\equiv 1$. For $n=7$ er perioden $6=\\phi(7)$, men for $n=41$ er den bare $5$ av $40$.",
    },
    {
      question: "Hvor mange elementer har orden $2$ modulo et odde primtall $p$?",
      options: ["Nøyaktig ett, nemlig $p-1$", "Nøyaktig to, nemlig $1$ og $p-1$", "$\\phi(2)=1$ per divisor av $p-1$", "Det varierer med $p$ modulo $4$"],
      explanation: "$x^2\\equiv 1$ har bare løsningene $x\\equiv\\pm 1$ modulo et primtall, og $x\\equiv 1$ har orden $1$. Modulo $8$ er det derimot tre elementer av orden $2$ — sammensatte moduler oppfører seg annerledes.",
    },
    {
      question: "Du har regnet ut at ordenen er $6$, men $\\phi(n)=20$. Hva slutter du?",
      options: ["At det er regnefeil: ordenen må dele $\\phi(n)$", "At $a$ dermed er en primitiv rot modulo $n$", "At modulusen $n$ ikke kan være et primtall", "At ordenen er $6$, og at alt dermed stemmer"],
      explanation: "$6\\nmid 20$, så noe er galt i potensberegningene. Dette er den billigste kontrollen i sjangeren, og den fanger nettopp de feilene som forplanter seg nedover en tabell.",
    },
    {
      question: "Hva vet du om ordenen hvis $a^{18}\\equiv 1$ og $a^{30}\\equiv 1\\pmod n$?",
      options: ["Den deler $\\gcd(18,30)=6$", "Den deler $\\operatorname{lcm}(18,30)=90$", "Den er nøyaktig $6$, ikke mindre", "Den deler $48$, altså summen av de to"],
      explanation: "Ordenslemmaet gir at ordenen deler begge, og dermed også deres største felles divisor (etter Bézout). Alle fire divisorene $1,2,3,6$ er mulige — mer kan du ikke si.",
    },
    {
      question: "Hvorfor er potensene $a^0,a^1,\\dots,a^{d-1}$ innbyrdes ulike modulo $n$?",
      options: ["Ellers ville $a^{j-i}\\equiv 1$ for en $j-i<d$", "Fordi $a$ nødvendigvis er en primitiv rot", "Fordi ordenen $d$ deler tallet $\\phi(n)$", "Fordi $a^d\\equiv 1$ og $d$ er et primtall"],
      explanation: "Anta $a^i\\equiv a^j$ med $i<j<d$; gang med inversen av $a^i$. Da er $a^{j-i}\\equiv 1$ med $0<j-i<d$, som strider mot at $d$ er den minste. Syklusen har altså nøyaktig $d$ ulike verdier.",
    },
    {
      question: "Hva er ordenen til den modulære inversen $a^{-1}$?",
      options: ["Den samme som ordenen til $a$", "$\\phi(n)$ delt på ordenen til $a$", "$\\phi(n)$ minus ordenen til $a$", "Alltid $2$, siden inversen speiler $a$"],
      explanation: "Fra $a^d\\equiv 1$ følger $(a^{-1})^d\\equiv 1$, og omvendt. De to ordenene deler hverandre, altså er de like. «Deler hverandre, altså like» er en standardmanøver verdt å ha klar.",
    },
    {
      question: "Når er $a$ en kvadratisk rest modulo $p$, uttrykt ved ordenen?",
      options: ["Når ordenen deler $\\frac{p-1}{2}$", "Når ordenen deler $p-1$", "Når ordenen er et partall", "Når ordenen er $p-1$ selv"],
      explanation: "Eulers kriterium sier $\\left(\\frac ap\\right)=1$ nøyaktig når $a^{(p-1)/2}\\equiv 1$, og ordenslemmaet oversetter det til delelighet. Konsekvens: en primitiv rot er aldri kvadratisk rest.",
    },
    {
      question: "Hva må stå i konklusjonen på en oppgave som ber om ordenen?",
      options: ["Tallet, og at det er det minste som gir $1$", "Tallet alene, siden ordenen er entydig bestemt", "Alle potensene $a^d$ som du regnet ut underveis", "Verdien av $\\phi(n)$ og hele faktoriseringen av den"],
      explanation: "Instruksen på hvert eksamenssett er at alle svar skal begrunnes. Setningen «ordenen deler $\\phi(n)$, og av divisorene er $d$ den minste som gir $1$» er den delen som gir uttelling.",
    },
    {
      question: "Hva er $\\operatorname{ord}_{31}(5)$?",
      options: ["$3$", "$30$", "$15$", "$5$"],
      explanation: "$5^3=125=4\\cdot 31+1$, og $5^1$ og $5^2$ gir ikke $1$. Ordenen er ti ganger mindre enn $\\phi(31)=30$ — nettopp det tilfellet der ordensreduksjon slår Euler-reduksjon.",
    },
  ],
  'ma1301-5-2': [
    {
      question: "Hva er en primitiv rot modulo $n$?",
      options: ["Et element med $\\operatorname{ord}_n(a)=\\phi(n)$", "Et element med $\\operatorname{ord}_n(a)=n-1$ for alle $n$", "Den minste kvadratiske resten modulo $n$", "Et element $a$ med $a^2\\equiv 1\\pmod n$"],
      explanation: "Ordenen er så stor den kan bli, siden den alltid deler $\\phi(n)$. Da treffer potensene $a^1,\\dots,a^{\\phi(n)}$ alle restene som er relativt primiske til $n$.",
    },
    {
      question: "For hvilke $n$ finnes det en primitiv rot?",
      options: ["$n=2$, $4$, $p^k$ og $2p^k$, med $p$ odde", "For alle $n\\ge 2$, helt uten unntak", "Bare for primtall og for primtallspotenser", "For alle odde $n$, og i tillegg for $n=2$"],
      explanation: "De to fellene er toerpotenser over $4$ (som $8$ og $16$) og $4p$-formen (som $20$). Sjekk formen på $n$ først — det er bortkastet å lete etter noe som ikke finnes.",
    },
    {
      question: "Hva sier primdivisortesten?",
      options: ["At $a^{\\phi(n)/q}\\not\\equiv 1$ for hver primdivisor $q$", "At $a^{\\phi(n)/2}\\not\\equiv 1$, altså én enkelt test", "At $a^q\\not\\equiv 1$ for hver primdivisor $q$ av $\\phi(n)$", "At $a^{\\phi(n)}\\equiv 1$ mens $a^2\\not\\equiv 1\\pmod n$"],
      explanation: "Antall tester er antall ULIKE primfaktorer i $\\phi(n)$ — typisk to eller tre. Beviset er at en ekte divisor av $\\phi(n)$ alltid deler $\\phi(n)/q$ for minst én primdivisor $q$.",
    },
    {
      question: "Hvor mange primitive røtter finnes modulo $n$?",
      options: ["$\\phi(\\phi(n))$", "$\\phi(n)$", "$\\phi(n)/2$", "$n-1$"],
      explanation: "Primitive røtter er $r^k$ med $\\gcd(k,\\phi(n))=1$, og antallet slike $k$ er $\\phi(\\phi(n))$. For $p=29$ blir det $\\phi(28)=12$, ikke $28$.",
    },
    {
      question: "Hvor mange elementer har orden $d$ modulo $n$, når $d\\mid\\phi(n)$?",
      options: ["$\\phi(d)$, når en primitiv rot finnes", "$d$ stykker, når en primitiv rot finnes", "$\\phi(n)/d$ stykker, uansett modulus", "Nøyaktig ett, siden ordenen er entydig"],
      explanation: "Modulo $29$ har $\\phi(7)=6$ elementer orden $7$. Kontrollen er at summen av $\\phi(d)$ over alle divisorer av $\\phi(n)$ blir $\\phi(n)$ eksakt.",
    },
    {
      question: "Hvordan lager du et element av orden $d$ når $r$ er en primitiv rot?",
      options: ["$r^{\\phi(n)/d}$", "$r^d$", "$r^{d/\\phi(n)}$", "$r\\cdot d$ redusert modulo $n$"],
      explanation: "Potensformelen gir $\\operatorname{ord}(r^{\\phi(n)/d})=\\phi(n)/(\\phi(n)/d)=d$. De øvrige elementene av orden $d$ er potenser av dette med eksponent relativt primisk til $d$.",
    },
    {
      question: "Hvor mange potenser må du regne i primdivisortesten når $\\phi(n)=28$?",
      options: ["To, siden $28=2^2\\cdot 7$ har to primfaktorer", "Fire, siden $28$ har fire ekte divisorer i alt", "Seks, altså alle divisorene av tallet $28$", "Tjueåtte, altså hele syklusen til $a$"],
      explanation: "Bare de ULIKE primfaktorene teller, ikke multiplisiteten. Eksponentene blir $28/2=14$ og $28/7=4$ — to potensberegninger i stedet for en full ordensberegning.",
    },
    {
      question: "Hva vet du om en kandidat $a$ hvis $\\left(\\frac ap\\right)=1$?",
      options: ["At $a$ ikke kan være en primitiv rot", "At $a$ nødvendigvis er en primitiv rot modulo $p$", "At ordenen til $a$ er nøyaktig $\\frac{p-1}{2}$", "At $a$ har orden $2$ modulo primtallet $p$"],
      explanation: "Eulers kriterium gir $a^{(p-1)/2}\\equiv 1$, så ordenen deler halve $p-1$ og kan ikke være $p-1$. Testen utelukker halvparten av kandidatene gratis — men den bekrefter ikke.",
    },
    {
      question: "Er hver kvadratisk ikke-rest en primitiv rot?",
      options: ["Nei — $5$ er ikke-rest mod $13$, med orden $4$", "Ja, ikke-restene er nøyaktig de primitive røttene", "Ja, men bare i tilfellet $p\\equiv 3\\pmod 4$", "Nei, ingen ikke-rest kan være en primitiv rot"],
      explanation: "Ikke-restene er de $a$ der ordenen ikke deler $\\frac{p-1}{2}$, og det utelukker mange små ordener — men ikke alle. Modulo $13$ er det $6$ ikke-rester og bare $4$ primitive røtter.",
    },
    {
      question: "Hva er kontrollen på at ordensfordelingen er komplett?",
      options: ["$\\sum_{d\\mid\\phi(n)}\\phi(d)=\\phi(n)$", "$\\sum_{d\\mid\\phi(n)}d=\\phi(n)$", "$\\prod_{d\\mid\\phi(n)}\\phi(d)=\\phi(n)$", "$\\sum_{d\\mid\\phi(n)}\\phi(d)=n$"],
      explanation: "Hvert element har nøyaktig én orden, så antallene må summere til alle elementene. For $\\phi(n)=28$: $1+1+2+6+6+12=28$ ✓.",
    },
    {
      question: "Modulo $16$ — finnes det en primitiv rot?",
      options: ["Nei, toerpotenser over $4$ har ingen", "Ja, siden $16=2^4$ er en primtallspotens", "Ja, og det er $\\phi(\\phi(16))=4$ av dem", "Nei, siden $\\phi(16)$ ikke er et primtall"],
      explanation: "Eksistenskriteriet tillater bare $2$ og $4$ blant toerpotensene. Største orden modulo $16$ er $4$, mens $\\phi(16)=8$ — for eksempel er $3^4=81\\equiv 1\\pmod{16}$.",
    },
    {
      question: "Hvilke $r^k$ er primitive røtter når $r$ er en primitiv rot modulo $n$?",
      options: ["De med $\\gcd(k,\\phi(n))=1$", "De med $k$ odde", "De med $k$ primtall", "Alle, siden $r$ genererer alt"],
      explanation: "Potensformelen gir $\\operatorname{ord}(r^k)=\\phi(n)/\\gcd(k,\\phi(n))$, som er maksimal nøyaktig når gcd-en er $1$. Antallet slike $k$ er $\\phi(\\phi(n))$.",
    },
    {
      question: "Hva er den vanligste feilen i primdivisortesten?",
      options: ["Å stoppe etter én primdivisor", "Å bruke $\\phi(n)$ som eksponent", "Å teste alle divisorene, ikke bare primdivisorene", "Å glemme å faktorisere modulusen $n$"],
      explanation: "Modulo $13$ består $a=3$ testen for $q=3$ ($3^4\\equiv 3$), men feiler for $q=2$ ($3^6\\equiv 1$). Én test alene kan gi feil konklusjon — skriv opp hele eksponentlisten før du regner.",
    },
    {
      question: "Hvor mange elementer har orden $2$ modulo et odde primtall $p$?",
      options: ["Ett, siden $\\phi(2)=1$", "To, siden $x^2\\equiv 1$ har to løsninger", "$\\frac{p-1}{2}$, altså ikke-restene", "Ingen, siden $2\\nmid p-1$"],
      explanation: "Formelen $\\phi(d)$ med $d=2$ gir ett element, nemlig $p-1\\equiv -1$. Løsningen $x\\equiv 1$ har orden $1$, ikke $2$.",
    },
    {
      question: "Hva er den minste primitive roten modulo $31$?",
      options: ["$3$, siden $2$ er en kvadratisk rest", "$2$, som nesten alltid virker her", "$5$, siden mindre tall har liten orden", "$6$, akkurat som tilfellet modulo $41$"],
      explanation: "$31\\equiv 7\\pmod 8$, så $\\left(\\frac 2{31}\\right)=1$ og $2$ er utelukket gratis. Deretter består $3$ alle tre testene ($3^{15}\\equiv -1$, $3^{10}\\equiv 25$, $3^6\\equiv 16$).",
    },
    {
      question: "Hva forteller en FEILET primdivisortest deg?",
      options: ["At ordenen deler den testede eksponenten", "At $a$ dermed er en kvadratisk rest modulo $n$", "At modulusen $n$ ikke har noen primitiv rot", "Ingenting utover at $a$ ikke er en primitiv rot"],
      explanation: "Er $a^{\\phi(n)/q}\\equiv 1$, deler ordenen $\\phi(n)/q$ ved ordenslemmaet. Det innsnevrer ordenen gratis — les av informasjonen før du begynner å regne på nytt.",
    },
    {
      question: "Hva er den likeverdige formuleringen av «primitiv rot»?",
      options: ["Potensene treffer alle rester primiske til $n$", "Potensene treffer alle kvadratiske rester modulo $n$", "Potensene treffer hvert tall fra $1$ og opp til $n$", "Potensene har periode $2$ modulo modulusen $n$"],
      explanation: "De $\\phi(n)$ første potensene er innbyrdes ulike og alle relativt primiske til $n$, altså hele mengden. Derfor sier man at en primitiv rot GENERERER restene.",
    },
    {
      question: "Hvor mange primitive røtter finnes modulo $41$?",
      options: ["$16$, siden $\\phi(40)=16$", "$40$, siden $\\phi(41)=40$", "$20$, altså halvparten av restene", "$8$, siden $40=2^3\\cdot 5$"],
      explanation: "Antallet er $\\phi(\\phi(41))=\\phi(40)=\\phi(8)\\phi(5)=4\\cdot 4=16$. De er $6^k$ med $\\gcd(k,40)=1$, der $6$ er en primitiv rot.",
    },
  ],
  'ma1301-5-3': [
    {
      question: "Hva er formelen for antall divisorer $\\tau(n)$?",
      options: ["$\\prod(k_i+1)$ for $n=\\prod p_i^{k_i}$", "$\\prod k_i$ for tallet $n=\\prod p_i^{k_i}$", "$\\prod p_i^{k_i-1}$, akkurat som for $\\phi$", "$\\prod(p_i+1)$ over alle primfaktorene"],
      explanation: "Grunnen til «$+1$» er at eksponenten $0$ også er et lovlig valg — divisoren $1$ tar ingen primfaktorer. $\\tau(12)=\\tau(2^2\\cdot 3)=3\\cdot 2=6$, ikke $2$.",
    },
    {
      question: "Hva er $\\tau(360)$?",
      options: ["$24$", "$18$", "$12$", "$36$"],
      explanation: "$360=2^3\\cdot 3^2\\cdot 5$, så $\\tau=(3+1)(2+1)(1+1)=4\\cdot 3\\cdot 2=24$. Faktoriseringen er hele begrunnelsen — formelen er ubrukelig uten den.",
    },
    {
      question: "Hva er $\\sigma(p^k)$?",
      options: ["$1+p+\\dots+p^k=\\frac{p^{k+1}-1}{p-1}$", "$p^k+1$, altså tallet pluss én", "$\\frac{p^k-1}{p-1}$, den geometriske summen", "$k\\cdot p^k$, altså antall ganger tallet"],
      explanation: "Summen har $k+1$ ledd, så teller-eksponenten er $k+1$. For små eksponenter er direkte summering raskest: $\\sigma(8)=1+2+4+8=15$.",
    },
    {
      question: "Hva er vilkåret for at $f(mn)=f(m)f(n)$ for $\\tau$, $\\sigma$ og $\\phi$?",
      options: ["$\\gcd(m,n)=1$", "At både $m$ og $n$ er primtall", "At $m$ og $n$ er odde tall", "Ingen — likheten gjelder alltid"],
      explanation: "$\\tau(4)\\tau(6)=12$, men $\\tau(24)=8$. Vilkåret er ufravikelig, og sjekken hører i besvarelsen når du splitter.",
    },
    {
      question: "Hva er første steg i «finn minste $n$ med $\\tau(n)=18$»?",
      options: ["Faktorisere måltallet $18$ på alle måter", "Faktorisere hvert av tallene opp til $18$", "Regne $\\tau$ av alle tallene opp til $180$", "Faktorisere $18$ i primtall, og stoppe der"],
      explanation: "Hver faktorisering $18=f_1\\cdots f_r$ gir eksponentene $f_i-1$. De fire faktoriseringene $18$, $9\\cdot 2$, $6\\cdot 3$ og $3\\cdot 3\\cdot 2$ gir kandidatene $131\\,072$, $768$, $288$ og $180$.",
    },
    {
      question: "Hvorfor skal den største eksponenten på det minste primtallet?",
      options: ["Fordi $2^{k_1}3^{k_2}<2^{k_2}3^{k_1}$ når $k_1>k_2$", "Fordi $\\tau$-verdien blir større på den måten", "Fordi $2$ er det eneste primtallet som er partall", "Fordi rekkefølgen ikke har noe å si for $\\tau$"],
      explanation: "Forholdet mellom de to er $(3/2)^{k_1-k_2}>1$. $2^2\\cdot 3^2\\cdot 5=180$, men $2\\cdot 3^2\\cdot 5^2=450$ — samme $\\tau$, mer enn dobbelt så stort.",
    },
    {
      question: "Hva er det minste tallet med nøyaktig $12$ divisorer?",
      options: ["$60$", "$72$", "$96$", "$2048$"],
      explanation: "Kandidatene er $2^{11}=2048$, $2^5\\cdot 3=96$, $2^3\\cdot 3^2=72$ og $2^2\\cdot 3\\cdot 5=60$. Den mest oppdelte faktoriseringen vinner her — men ikke alltid, så regn alle.",
    },
    {
      question: "Når er $\\tau(n)$ et oddetall?",
      options: ["Nøyaktig når $n$ er et kvadrattall", "Nøyaktig når $n$ er et primtall", "Nøyaktig når $n$ er et oddetall", "Nøyaktig når $n$ er en primtallspotens"],
      explanation: "Alle $k_i+1$ må være odde, altså alle $k_i$ partall — og det betyr kvadrattall. Det parvise argumentet gir samme svar: $d$ og $n/d$ er ulike unntatt når $d=\\sqrt n$.",
    },
    {
      question: "Hva er $\\sigma(n)/n$ uttrykt som en sum?",
      options: ["$\\sum_{d\\mid n}\\frac 1d$", "$\\sum_{d\\mid n}d$", "$\\sum_{d\\mid n}\\frac dn$", "$\\tau(n)$ delt på antall primfaktorer"],
      explanation: "Bytt $d$ med $n/d$ i summen — avbildningen er en bijeksjon på divisorene. For $n=28$ er summen $2$, som er nettopp betingelsen for at $28$ er perfekt.",
    },
    {
      question: "Hva betyr det at $n$ er et perfekt tall?",
      options: ["At $\\sigma(n)=2n$", "At $\\sigma(n)=n+1$", "At $\\tau(n)$ er et oddetall", "At $n$ er en toerpotens"],
      explanation: "$\\sigma$ teller $n$ selv med, så summen av de ekte divisorene er $\\sigma(n)-n$. De fire minste perfekte tallene er $6$, $28$, $496$ og $8\\,128$.",
    },
    {
      question: "Når er $\\sigma(n)=n+1$?",
      options: ["Nøyaktig når $n$ er et primtall", "Nøyaktig når $n$ er et kvadrattall", "Nøyaktig når $n$ er perfekt", "For alle odde $n$ over $1$"],
      explanation: "Både $1$ og $n$ er divisorer og bidrar med $n+1$. Enhver ekstra divisor ville gjort summen større, så $n$ kan bare ha de to — altså er $n$ et primtall.",
    },
    {
      question: "Hva er $\\sigma(200)$?",
      options: ["$465$", "$420$", "$372$", "$600$"],
      explanation: "$200=2^3\\cdot 5^2$, så $\\sigma=(1+2+4+8)(1+5+25)=15\\cdot 31=465$. Kontroll: $\\sigma(n)>n$ ✓, og under $\\tau(n)\\cdot n=12\\cdot 200$ ✓.",
    },
    {
      question: "Hvor mange tall $n$ har $\\tau(n)=3$?",
      options: ["Uendelig mange — nemlig alle $n=p^2$", "Nøyaktig tre av dem: $4$, $9$ og $25$", "Ingen, siden $\\tau$ alltid er et partall", "Uendelig mange — nemlig alle primtallene"],
      explanation: "$3$ er et primtall, så produktet $\\prod(k_i+1)$ kan bare ha én faktor $>1$: én primfaktor med eksponent $2$. Generelt gir $\\tau(n)=q$ primtall at $n=p^{q-1}$.",
    },
    {
      question: "Hva er den beste kontrollen på et $\\tau$-svar for små $n$?",
      options: ["Å liste divisorene og telle dem", "Å sjekke at svaret er et partall", "Å regne ut $\\sigma(n)$ og dele på $n$", "Å sjekke at svaret ditt deler $n$"],
      explanation: "For $n\\le 100$ tar listingen under et minutt, og den er en helt uavhengig kontroll. Under kode D er to uavhengige veier det nærmeste du kommer en fasit.",
    },
    {
      question: "Hvilke funksjoner i faget er multiplikative?",
      options: ["$\\tau$, $\\sigma$ og $\\phi$", "Bare $\\phi$", "Bare $\\tau$ og $\\sigma$", "Alle tallteoretiske funksjoner er det"],
      explanation: "Alle tre leses av fra samme faktorisering, og arbeidsflyten er identisk: faktoriser, regn per primtallspotens, gang sammen. Legendre-symbolet er derimot FULLSTENDIG multiplikativt i telleren.",
    },
    {
      question: "Hvorfor blir svaret så stort når måltallet har en stor primfaktor, som $\\tau(n)=14$?",
      options: ["Fordi faktoren $7$ tvinger en eksponent på $6$", "Fordi måltallet $14$ er et partall", "Fordi $14$ ikke er noen toerpotens", "Fordi $7$ da må være en primfaktor i $n$"],
      explanation: "$14=2\\cdot 7$ gir bare eksponentlistene $13$ og $6,1$, altså $2^{13}$ eller $2^6\\cdot 3=192$. Store eksponenter er dyre — til sammenligning gir $\\tau(n)=16$ svaret $120$.",
    },
    {
      question: "Hva må stå i besvarelsen når du regner $\\tau(n)$?",
      options: ["Faktoriseringen av $n$, som er begrunnelsen", "Alle divisorene i $n$, listet opp", "Verdien av $\\sigma(n)$ som kontroll", "Bare svaret, siden formelen er kjent"],
      explanation: "Instruksen på hvert eksamenssett er at alle svar skal begrunnes, og i denne sjangeren er faktoriseringen begrunnelsen. Et $\\tau$-tall alene er et sluttall uten metode.",
    },
    {
      question: "Hva sier Euklids karakterisering av perfekte tall?",
      options: ["Er $2^k-1$ primtall, er $2^{k-1}(2^k-1)$ perfekt", "Alle toerpotenser $2^k$ er perfekte tall", "Er eksponenten $k$ et primtall, er $2^k-1$ perfekt", "Alle perfekte tall er kvadrattall av primtall"],
      explanation: "Utledningen er tre linjer med multiplikativitet: $\\sigma(n)=(2^k-1)\\cdot 2^k=2n$. Med $k=2,3,5,7$ får du $6$, $28$, $496$ og $8\\,128$.",
    },
  ],
  'ma1301-5-4': [
    {
      question: "Hvilken prosedyre svarer på «hva er ordenen til $a$?»",
      options: ["Divisortesten: alle divisorer av $\\phi(n)$, stigende", "Primdivisortesten: én potens per primdivisor $q$", "Tellingsformelen $\\phi(d)$ for hver divisor $d$", "Eulers kriterium, med eksponenten $\\frac{p-1}{2}$"],
      explanation: "Primdivisortesten svarer bare på om ordenen er MAKSIMAL. Feil valg av prosedyre er den vanligste grunnen til at et Del 5-delpunkt tar femten minutter i stedet for åtte.",
    },
    {
      question: "Hvor mange potenser krever primdivisortesten?",
      options: ["Én per ulik primfaktor i $\\phi(n)$", "Én per divisor av tallet $\\phi(n)$", "$\\phi(n)$ stykker, altså hele syklusen", "To, uansett hvilken modulus det er"],
      explanation: "For $\\phi(n)=52=2^2\\cdot 13$ er det to tester ($2^{26}$ og $2^4$); for $\\phi(n)=42=2\\cdot 3\\cdot 7$ er det tre. Multiplisiteten teller ikke — bare antall ulike primfaktorer.",
    },
    {
      question: "Hva gjør du først i en ordensoppgave?",
      options: ["Sjekker $\\gcd(a,n)=1$ og regner $\\phi(n)$", "Regner ut $a^{\\phi(n)}$ modulo $n$ først", "Faktoriserer tallet $a$ i primtall", "Tester om $a$ er en primitiv rot"],
      explanation: "Uten $\\gcd(a,n)=1$ finnes ingen orden i det hele tatt, og $\\phi(n)$ trengs for å liste kandidatene. Begge linjene hører i besvarelsen.",
    },
    {
      question: "En potens i divisortesten lander på $-1$. Hva vet du?",
      options: ["Ordenen er det dobbelte av eksponenten", "Ordenen er nøyaktig den eksponenten selv", "Ordenen er $\\phi(n)$, altså maksimal orden", "Du har regnet feil — potensene er positive"],
      explanation: "$12^2\\equiv -1\\pmod{29}$ gir ordenen $4$ direkte. Se etter tall rett under modulusen i tabellen din: de er $-1$ i forkledning, og de er den beste snarveien i sjangeren.",
    },
    {
      question: "Hvor mange elementer har orden $6$ modulo $43$?",
      options: ["$\\phi(6)=2$", "$6$, altså like mange som ordenen", "$\\phi(42)=12$", "$42/6=7$"],
      explanation: "Tellingsformelen er $\\phi(d)$. De to er $7$ og $37$, og de er inverse av hverandre — som de må være, siden inversen har samme orden.",
    },
    {
      question: "Hvordan kontrollerer du at en ordenstelling er komplett?",
      options: ["$\\sum_{d\\mid\\phi(n)}\\phi(d)=\\phi(n)$", "$\\sum_{d\\mid\\phi(n)}d=\\phi(n)$", "$\\prod_{d\\mid\\phi(n)}\\phi(d)=\\phi(n)$", "$\\tau(\\phi(n))=\\phi(n)$"],
      explanation: "Hvert element har nøyaktig én orden, så antallene må summere til alle elementene. For $\\phi(n)=22$: $1+1+10+10=22$ ✓.",
    },
    {
      question: "Hva er $\\tau(720)$?",
      options: ["$30$", "$24$", "$36$", "$20$"],
      explanation: "$720=2^4\\cdot 3^2\\cdot 5$ gir $(4+1)(2+1)(1+1)=30$. Kontroll: $30\\le 2\\sqrt{720}\\approx 54$ ✓, og $720$ er ikke et kvadrattall, så $\\tau$ skal være partall ✓.",
    },
    {
      question: "Hva er det minste tallet med nøyaktig $30$ divisorer?",
      options: ["$720$", "$2592$", "$4608$", "$1260$"],
      explanation: "Kandidatene er $2^{29}$, $2^{14}\\cdot 3$, $2^9\\cdot 3^2$, $2^5\\cdot 3^4$ og $2^4\\cdot 3^2\\cdot 5=720$. Den mest oppdelte faktoriseringen av måltallet vant — som oftest, men ikke alltid.",
    },
    {
      question: "Hvorfor skriver du $36$ som $-7$ når modulusen er $43$?",
      options: ["Fordi kvadratet blir $49$ og ikke $1\\,296$", "Fordi negative rester alltid er de minste", "Fordi ordenen da blir mye lettere å lese av", "Fordi $\\phi(43)$ er et partall, ikke et oddetall"],
      explanation: "Er resten over $n/2$, erstatt den med sin negative motpart. Under kode D er det forskjellen mellom fem og femten minutter på en primdivisortest med tre tester.",
    },
    {
      question: "Hva forteller en feilet primdivisortest deg om ordenen?",
      options: ["At den deler eksponenten $\\phi(n)/q$ du testet", "At den er nøyaktig $\\phi(n)/q$, ikke mindre", "At ordenen nødvendigvis er et primtall", "Ingenting — du må begynne helt forfra"],
      explanation: "Ordenslemmaet gir delelighet, og det innsnevrer kandidatlisten gratis. I oppgaven om $3$ modulo $13$ ga $3^6\\equiv 1$ at ordenen deler $6$ — deretter var det bare fire kandidater igjen.",
    },
    {
      question: "Hvor mange primitive røtter finnes modulo $43$?",
      options: ["$\\phi(42)=12$", "$\\phi(43)=42$", "$\\tau(42)=8$", "$21$, altså halvparten"],
      explanation: "Antallet er $\\phi(\\phi(n))$. Med $42=2\\cdot 3\\cdot 7$ blir det $1\\cdot 2\\cdot 6=12$ — av $42$ rester, altså nesten en tredjedel.",
    },
    {
      question: "Hvilket vilkår kreves for at $\\tau(mn)=\\tau(m)\\tau(n)$?",
      options: ["$\\gcd(m,n)=1$", "At $m$ og $n$ er primtall", "At $m<n$", "Ingen — det gjelder alltid"],
      explanation: "$\\tau(4)\\tau(6)=12$, men $\\tau(24)=8$. Vilkåret gjelder likt for $\\phi$, $\\tau$ og $\\sigma$, og sjekken hører i besvarelsen når du splitter.",
    },
    {
      question: "Hva er antall MULIGE ordener modulo $n$?",
      options: ["$\\tau(\\phi(n))$, antall divisorer av $\\phi(n)$", "$\\phi(\\phi(n))$, som antallet primitive røtter", "$\\phi(n)$, altså like mange som det er rester", "$\\sigma(\\phi(n))$, altså hele divisorsummen"],
      explanation: "Ordenene er nøyaktig divisorene av $\\phi(n)$. Modulo $23$ er $\\phi=22$ med $\\tau(22)=4$ divisorer, altså fire mulige ordener: $1$, $2$, $11$ og $22$.",
    },
    {
      question: "Hvor lang tid skal et tellespørsmål i Del 5 ta?",
      options: ["Rundt to minutter — ingen potensregning", "Rundt åtte minutter, som en ordensoppgave", "Rundt tjuefire minutter, altså hele delpunktet", "Under tretti sekunder, helt uten utregning"],
      explanation: "«Hvor mange primitive røtter?» og «hvor mange har orden $d$?» er ren gjengivelse av $\\phi(\\phi(n))$ og $\\phi(d)$ — men utregningen skal stå, siden alle svar må begrunnes.",
    },
  ],
  'ma1301-6-1': [
    {
      question: "Hva betyr $a\\mid b$, skrevet som en likning?",
      options: ["Det finnes et helt tall $t$ med $b=at$", "Det finnes et helt tall $t$ med $a=bt$", "Det finnes et helt tall $t$ med $b=a+t$", "Brøken $b/a$ er mindre enn $1$"],
      explanation: "Oversettelsen til en likning er første linje i hvert delelighetsbevis. Målet er så å skrive uttrykket du studerer som divisoren ganget med et helt tall.",
    },
    {
      question: "Hvor mange tilfeller har en uttømmende case-analyse modulo $m$?",
      options: ["Nøyaktig $m$ — ett per rest $0,1,\\dots,m-1$", "Nøyaktig $m-1$, siden resten $0$ er trivielt", "Så mange som trengs for å se mønsteret", "To: ett for partall og ett for odde tall"],
      explanation: "Divisjonsalgoritmen gir entydige $q$ og $r$ med $0\\le r<m$, altså $m$ klasser som dekker alt uten overlapp. Færre rader krever en skrevet begrunnelse for hver som mangler.",
    },
    {
      question: "Hva er den kontrapositive til «hvis $3\\mid n^2$, så $3\\mid n$»?",
      options: ["Hvis $3\\nmid n$, så er $3\\nmid n^2$ (begge negert)", "Hvis $3\\mid n$, så $3\\mid n^2$ (omvendingen)", "Hvis $3\\nmid n^2$, så $3\\mid n$ (negert)", "Hvis $3\\mid n^2$, så $3\\nmid n$ (negert)"],
      explanation: "I den kontrapositive negeres begge deler og rekkefølgen byttes. Formen «hvis $3\\mid n$, så $3\\mid n^2$» er omvendingen, som er et annet utsagn.",
    },
    {
      question: "Hva er forskjellen mellom kontrapositiv og omvending?",
      options: ["Kontrapositiv er samme utsagn, omvending et annet", "Omvending er samme utsagn; kontrapositiv er et annet utsagn", "Begge er samme utsagn, bare med ulik notasjon skrevet", "Begge er andre utsagn enn det opprinnelige er"],
      explanation: "Kontrapositiv til «$4\\mid n\\Rightarrow n$ partall» er sann, mens omvendingen «$n$ partall $\\Rightarrow 4\\mid n$» er falsk ($n=6$).",
    },
    {
      question: "Hvilke rester kan et kvadrattall ha modulo $3$?",
      options: ["Bare restene $0$ og $1$", "Bare restene $0$ og $2$", "Bare restene $1$ og $2$", "Alle tre restene $0$, $1$, $2$"],
      explanation: "Case-analysen gir $0^2=0$, $1^2=1$ og $2^2=4\\equiv 1$. At $2$ er utelukket, er nettopp det som feller likningen $x^2-3y^2=2$.",
    },
    {
      question: "Hvilke rester kan et kvadrattall ha modulo $4$?",
      options: ["Bare restene $0$ og $1$", "Bare restene $0$, $1$, $2$", "Bare restene $1$ og $3$", "Alle fire restene $0$–$3$"],
      explanation: "Restene $0,1,2,3$ gir kvadratene $0,1,0,1$. Derfor kan en sum av to kvadrater aldri ha rest $3$ modulo $4$.",
    },
    {
      question: "Hva kreves for å bevise en påstand av formen «$P$ hvis og bare hvis $Q$»?",
      options: ["Begge implikasjonene $P\\Rightarrow Q$ og $Q\\Rightarrow P$", "Bare implikasjonen $P\\Rightarrow Q$, siden den andre følger", "Bare den kontrapositive $\\neg Q\\Rightarrow\\neg P$", "Ett eksempel der begge påstandene er sanne samtidig"],
      explanation: "Ekvivalens er to implikasjoner. Alternativet er en kjede der hvert ledd er en ekvivalens — men da må hvert ledd faktisk gå begge veier.",
    },
    {
      question: "Hvorfor er førti bekreftelser ikke et bevis for «for alle $n$ gjelder $A(n)$»?",
      options: ["Fordi påstanden gjelder uendelig mange tall, ikke bare førti", "Fordi bekreftelser må være minst hundre i tallet for å telle", "Fordi bare bekreftelser med primtall teller i denne sjangeren", "Fordi bekreftelsene også må kontrolleres for negative tall"],
      explanation: "$n^2+n+41$ gir primtall for $n=0,\\dots,39$ og bryter sammen ved $n=40$, der verdien er $41^2$. Eksempler kan felle en allpåstand, aldri bekrefte den.",
    },
    {
      question: "Hva er det ene moteksempelet du trenger for å felle «for alle $n$: $A(n)$»?",
      options: ["Én $n$ der $A(n)$ er falsk, med utregningen vist", "Minst to $n$ der $A(n)$ er falsk, for å vise et mønster", "En $n$ der $A(n)$ er sann, men bare tilfeldig", "Et generelt argument for at $A$ aldri holder"],
      explanation: "Negasjonen av «for alle» er «det finnes én som ikke», så ett vitne er nok. Men det må regnes ut — et oppgitt tall uten utregning er et sluttall uten metode.",
    },
    {
      question: "Når velger du bevis ved motsigelse?",
      options: ["Ved «det finnes ikke», «irrasjonal» og «uendelig mange»", "Ved alle påstander som handler om primtall og delelighet", "Ved påstander som gjelder for alle $n$ fra en startverdi", "Ved oppgaver der hypotesen er gitt som en likning"],
      explanation: "Disse tre formuleringene er de faste signalene. «For alle $n\\ge n_0$» med en rekursjon peker mot induksjon i stedet.",
    },
    {
      question: "Hva er første setning i en case-analyse-besvarelse?",
      options: ["«Ved divisjonsalgoritmen er $n\\equiv r\\pmod m$, $0\\le r<m$»", "«Vi prøver noen verdier av $n$ og ser hvilket mønster de danner»", "«Anta, for å komme til en motsigelse, at påstanden er gal for en $n$»", "«Basissteget: påstanden holder for startverdien $n=0$, ferdig regnet»"],
      explanation: "Setningen er selve begrunnelsen for at listen av tilfeller er komplett, og den er egne føringspoeng. Åpningene «anta, for å komme til en motsigelse …» og «basissteget …» hører til motsigelses- og induksjonsmalen.",
    },
    {
      question: "Hvorfor er $k(k+1)$ alltid et partall?",
      options: ["De er etterfølgende, så ett av dem må være et partall", "Fordi $k^2+k$ alltid er et kvadrattall for hele $k$", "Fordi $k$ og $k+1$ er relativt primiske og dermed ulike", "Fordi produktet alltid er delelig med tallet $k$"],
      explanation: "Dette er case-analyse med $m=2$: er $k=2j$, er produktet $2j(k+1)$; er $k=2j+1$, er $k+1=2(j+1)$. Argumentet brukes i beviset for at $8\\mid n^2-1$ for odde $n$.",
    },
    {
      question: "Hvordan viser du delelighet med et sammensatt tall som $24$ mest effektivt?",
      options: ["Splitt i relativt primiske faktorer $8$ og $3$, og vis begge", "Gjør én case-analyse med alle de $24$ restene modulo $24$", "Splitt i faktorene $4$ og $6$, og vis dem hver for seg", "Vis delelighet med $2$ tre ganger og med $3$ enda en gang"],
      explanation: "Oppsplittingen krever at faktorene er relativt primiske: $\\gcd(8,3)=1$, mens $\\gcd(4,6)=2$, så $4\\mid k$ og $6\\mid k$ gir ikke $24\\mid k$ ($k=12$).",
    },
    {
      question: "Hva er feil med å skrive $b=at$ og $c=at$ når du vet at $a\\mid b$ og $a\\mid c$?",
      options: ["Samme bokstav antar i tillegg at $b=c$", "Bokstaven $t$ er reservert for reelle tall", "Det mangler en betingelse om at $t$ er positiv", "Det er riktig, men unødvendig detaljert"],
      explanation: "To uavhengige delelighetsantakelser gir to uavhengige faktorer, og de trenger ulike navn — $b=at$ og $c=au$. Feilen gjør beviset ugyldig selv når regningen er feilfri.",
    },
    {
      question: "Hva må stå når en case-analyse har færre rader enn modulusen?",
      options: ["En skrevet begrunnelse for hver rad som mangler", "En kommentar om at de øvrige radene går på samme måte", "En kontroll med to tallverdier i stedet for radene", "Ingenting — antall rader er valgfritt her"],
      explanation: "Lovlige begrunnelser er utelukkelse («$r=0$ er umulig siden $p$ er primtall over $m$») og symmetri («$(m-r)^2\\equiv r^2$»). «Går på samme måte» er en utsettelse, ikke en begrunnelse.",
    },
    {
      question: "Hva er de fem stegene i «uendelig mange»-malen?",
      options: ["Anta endelig liste, konstruér $N$, finn en ny primdivisor, konkludér", "Anta uendelig liste, konstruér $N$, faktoriser $N$, tell divisorene, konkludér", "Verifiser basissteget, sett opp hypotesen, gjør steget, kontrollér, konkludér", "Velg modulus, list restene, regn ut hver rad, utelukk umulige, konkludér"],
      explanation: "Malen er et motsigelsesbevis. Rekken «verifiser basissteget, sett opp hypotesen …» er induksjonsmalen, og «velg modulus, list restene …» er case-analyse-malen — begge riktige maler, men for andre påstandsformer.",
    },
    {
      question: "Hvorfor skal teoremnavn stå i en bevisbesvarelse?",
      options: ["Fordi navnet er en del av begrunnelsen som kreves", "Fordi navnet erstatter mellomregningen i det steget", "Fordi det er et formelt krav i delelighetsnotasjonen", "Fordi det gjør beviset kortere enn utregningen ellers"],
      explanation: "Instruksen på hvert sett er at alle svar skal begrunnes, og fasitpraksisen i arkivet skriver rutinemessig «ved Euklids lemma», «ved divisjonsalgoritmen». Navnet erstatter ikke regningen — det forklarer hva som bærer den.",
    },
    {
      question: "Hvilken modulus velger du for å vise at $x^2-5y^2=3$ ikke har heltallsløsninger?",
      options: ["$5$, siden leddet $5y^2$ forsvinner modulo $5$", "$3$, siden høyresiden i likningen er tallet $3$", "$2$, siden paritet nesten alltid er enklest", "$15$, siden både $5$ og $3$ inngår i likningen"],
      explanation: "Grepet er å velge modulusen som dreper flest ledd. Modulo $5$ blir kravet $x^2\\equiv 3$, og en case-analyse med fem rader viser at $3$ ikke er blant kvadratrestene.",
    },
  ],
  'ma1301-6-2': [
    {
      question: "Hva er de tre stegene i et induksjonsbevis?",
      options: ["Basissteg, induksjonshypotese, induksjonssteg", "Antakelse, motsigelse, konklusjon om umulighet", "Basissteg, case-analyse, konklusjonssetning til slutt", "Hypotese, kontrapositiv omskriving, sluttregning"],
      explanation: "De tre navnene er dem fasitene i arkivet bruker, og hvert steg bærer uttelling for seg selv. Rekken «antakelse, motsigelse, konklusjon om umulighet» er motsigelsesmalen fra [kap. 6.1](/ma1301/ma1301-6-1).",
    },
    {
      question: "Hvorfor kan basissteget ikke hoppes over?",
      options: ["Fordi steget bare er en implikasjon", "Fordi basissteget gir mest uttelling", "Fordi hypotesen ellers blir et sirkelbevis", "Fordi $n_0$ ellers ikke er entydig"],
      explanation: "Påstanden «$1+\\dots+n=\\frac{n(n+1)}2+5$» er falsk for alle $n$, men induksjonssteget går perfekt igjennom. Uten et sant startpunkt beviser steget ingenting.",
    },
    {
      question: "Hvilken setning skal stå der hypotesen brukes?",
      options: ["«Her bruker vi induksjonshypotesen:»", "«Ved divisjonsalgoritmen er $n=qm+r$:»", "«Anta, for å komme til en motsigelse:»", "«Vi viser den kontrapositive påstanden:»"],
      explanation: "Fasitene markerer alltid stedet der hypotesen settes inn. De tre andre setningene er åpningene i case-analyse-, motsigelses- og kontrapositiv-malen.",
    },
    {
      question: "Hvorfor er det ikke sirkelbevis å anta $P(k)$?",
      options: ["Fordi du beviser implikasjonen $P(k)\\Rightarrow P(k+1)$", "Fordi $k$ er mindre enn $k+1$ og derfor alt vist", "Fordi basissteget allerede har vist $P(k)$ for alle $k$", "Fordi antakelsen bare gjelder for et endelig antall $k$"],
      explanation: "Å anta det ene leddet i en implikasjon man skal etablere, er nøyaktig hva et direkte bevis gjør. Basissteget er det som gjør implikasjonskjeden til mer enn en tom påstand.",
    },
    {
      question: "Hva er grepet i induksjonssteget for en summeformel?",
      options: ["Skill ut det nye leddet: $S(k+1)=S(k)+a_{k+1}$", "Skriv $S(k+1)$ som $A\\cdot S(k)+R$ med $d\\mid R$", "Sett opp en ulikhetskjede der hypotesen er ett ledd", "Bruk binomialformelen og at $p$ deler mellomleddene"],
      explanation: "De tre andre er grepene i delelighetsvarianten, ulikhetsvarianten og kongruensvarianten. Alle fire bruker samme tre steg — det er koblingen bakover som varierer.",
    },
    {
      question: "Hva er grepet i induksjonssteget for en delelighetspåstand?",
      options: ["Skriv $f(k+1)=A\\cdot f(k)+R$ der $d$ deler $R$", "Skill ut det nye leddet og legg det til summen", "Regn på begge sider til du står med $0=0$", "Sett opp en ulikhetskjede med hypotesen i midten"],
      explanation: "Både $A f(k)$ og $R$ er da delelige med $d$, og summen er det. Å regne til «$0=0$» er sirkelbevis-formen, som er ugyldig med mindre hvert steg er en ekvivalens.",
    },
    {
      question: "Hva er den minste $n_0$ slik at $2^n>n^2$ for alle $n\\ge n_0$?",
      options: ["$n_0=5$, siden $2^5>5^2$", "$n_0=4$, der det er likhet", "$n_0=1$, der den er sann", "$n_0=3$, siden $8<9$"],
      explanation: "For $n=4$ er $2^4=16=4^2$, altså likhet og ikke streng ulikhet. Påstanden er sann for $n=1$, faller for $n=2,3,4$, og holder fra $n=5$.",
    },
    {
      question: "Hvor mange basissteg trenger en rekursjon som ser to ledd tilbake?",
      options: ["To — like mange som antall ledd steget bruker", "Ett, siden induksjonssteget dekker resten", "Tre, for å ha margin i det første steget", "Det avhenger av hva $n_0$ er i oppgaven"],
      explanation: "Bruker steget både $P(k)$ og $P(k-1)$, må $P(n_0)$ og $P(n_0+1)$ verifiseres direkte. Ellers mangler steget for $k+1=n_0+2$ ett av tilfellene det trenger.",
    },
    {
      question: "Hva kjennetegner en sterk induksjonshypotese?",
      options: ["Den antar at $P(j)$ holder for alle $j$ med $n_0\\le j\\le k$", "Den antar $P(k)$ og i tillegg selve påstanden $P(k+1)$", "Den antar $P(k)$ for alle $k$ samtidig, ikke bare én", "Den antar at påstanden er sann for alle primtall $j$"],
      explanation: "Utvidelsen trengs når $P(k+1)$ avhenger av mer enn nabotilfellet — for eksempel når du deler $k+1$ i to faktorer som kan ligge hvor som helst under $k+1$.",
    },
    {
      question: "Hva må du oversette hypotesen «$9$ deler $f(k)$» til før du setter den inn?",
      options: ["Likningen $f(k)=9t$ for et helt tall $t$", "Kongruensen $f(k)\\equiv 9\\pmod{f(k)}$ for en $t$", "Ulikheten $f(k)\\ge 9$ for alle hele $t$", "Brøken $f(k)/9$, som må være et helt tall"],
      explanation: "Dette er vanen «arbeid fra definisjonen» fra [kap. 6.1](/ma1301/ma1301-6-1). Uten likningen har du ingenting å sette inn i steget.",
    },
    {
      question: "Hva er $\\sum_{i=1}^n i^3$?",
      options: ["$\\left(\\frac{n(n+1)}2\\right)^2$", "$\\frac{n(n+1)(2n+1)(3n+1)}{30}$", "$\\frac{n^2(n+1)}{2}+n$", "$\\frac{n(n+1)(n+2)}{3}$"],
      explanation: "Summen av kubene er kvadratet av summen av tallene. Uttrykket med $(2n+1)$ i telleren hører til summer av andre potenser, og $\\frac{n(n+1)(n+2)}{3}$ er summen av $i(i+1)$.",
    },
    {
      question: "Hvordan utleder du $\\sum_{i=1}^n i=\\frac{n(n+1)}2$ hvis formelen glipper?",
      options: ["Skriv summen forlengs og baklengs, og legg sammen", "Del summen i partall og odde tall, og summér hver del", "Bruk induksjon, som er den eneste veien til formelen", "Sett $n=10$ og gjett mønsteret ut av de første ti"],
      explanation: "Gauss-trikset: hver kolonne gir $n+1$, og det er $n$ kolonner, så $2S=n(n+1)$. Det tar to linjer og under ett minutt under kode D.",
    },
    {
      question: "På hvilken variabel går induksjonen i beviset for $a^p\\equiv a\\pmod p$?",
      options: ["På grunntallet $a$", "På eksponenten $p$", "På modulusen $p$", "På $a$ og $p$ samtidig"],
      explanation: "Steget bruker binomialformelen på $(a+1)^p$ og at $p$ deler mellomleddenes binomialkoeffisienter. Eksponenten er et fast primtall gjennom hele beviset.",
    },
    {
      question: "Hvilket lemma trengs i induksjonsbeviset for $a^p\\equiv a\\pmod p$?",
      options: ["At $p$ deler $\\binom pk$ for $1\\le k\\le p-1$", "At $p$ deler $k!$ for alle $k$ mindre enn $p$", "At $\\binom pk$ er odde for alle $k$ mellom $1$ og $p$", "At $a^{p-1}$ er kongruent med $a$ modulo $p$"],
      explanation: "Lemmaet får mellomleddene i binomialutviklingen til å falle bort modulo $p$. Det bevises fra $k!(p-k)!\\binom pk=p!$ og Euklids lemma i [kap. 6.3](/ma1301/ma1301-6-3).",
    },
    {
      question: "Hva er den vanligste feilen i et induksjonsbevis, ifølge arkivets løsningsforslag?",
      options: ["Et glemt eller forkludret basissteg i beviset", "Regnefeil i algebraen midt i induksjonssteget", "Feil valg av bokstav for den faste verdien $k$", "Manglende kontroll av påstanden for negative $n$"],
      explanation: "Feilen er strukturell og synes med ett blikk på arket, i motsetning til en regnefeil. Det er en av grunnene til at strukturfeil koster mer enn regnefeil i denne sjangeren.",
    },
    {
      question: "Hva gjør du hvis du kommer gjennom induksjonssteget uten å bruke hypotesen?",
      options: ["Sjekk om du har et direkte bevis, og si det", "Sett inn hypotesen på slutten for å ha den med", "Legg til flere basissteg for å kompensere", "Bytt til en sterk induksjonshypotese i stedet"],
      explanation: "Uten bruk av hypotesen er beviset ikke et induksjonsbevis. Enten har du funnet et kortere direkte argument — som er fint, men skal sies — eller det er en feil i steget.",
    },
    {
      question: "Hva skal stå i besvarelsen når oppgaven ber deg finne $n_0$ selv?",
      options: ["De prøvde verdiene, og hvilken $n_0$ du så velger", "Bare den valgte $n_0$, siden prøvingen er forarbeid", "En generell formel for $n_0$ uttrykt ved påstanden", "Alle verdier fra $1$ til $20$, satt opp i en tabell"],
      explanation: "Prøvingen er en del av svaret: «for $n=1,2,3,4$ er påstanden falsk, for $n=5$ sann, vi tar $n_0=5$». Basissteget skal deretter bruke $n_0$, ikke $1$.",
    },
    {
      question: "Hva må du gjøre med en restulikhet som «$2k^2\\ge(k+1)^2$ for $k\\ge 5$»?",
      options: ["Bevise den, ved å vise at differansen er positiv", "Påstå den, siden den følger av induksjonshypotesen", "Kontrollere den for $k=5$ og $k=6$, og så bruke den", "Finne den skarpeste grensen der den begynner å holde"],
      explanation: "Restulikheten er en egen liten påstand og må vises. Her er $2k^2-(k+1)^2=(k-1)^2-2$, som er positiv for $k\\ge 5$ — og det holder å vise den der du bruker den.",
    },
    {
      question: "Hvorfor er sterk induksjon nødvendig i beviset for at hvert $n\\ge 2$ er et produkt av primtall?",
      options: ["Fordi faktorene kan ligge hvor som helst under $n$", "Fordi påstanden også må gjelde for primtallene selv", "Fordi antall primfaktorer vokser raskere enn $n$ gjør", "Fordi $n=2$ må behandles som et eget spesialtilfelle"],
      explanation: "Steget skriver $n=ab$ med $1<a,b<n$ og bruker hypotesen på begge. Vanlig induksjon gir bare $P(k)$, og $k=16$ sier ingenting om $17$.",
    },
    {
      question: "Hva er den trygge formen for et induksjonssteg, som unngår sirkelbevis?",
      options: ["Start i den ene enden og regn til den andre", "Regn på begge sider samtidig til du står med $0=0$", "Trekk hypotesen fra begge sider av påstanden", "Sett inn tallverdier og kontrollér at sidene stemmer"],
      explanation: "Å regne på begge sider til en trivialitet er bare gyldig hvis hvert steg er en ekvivalens, og det må skrives. Den ensrettede regningen er alltid trygg.",
    },
  ],
  'ma1301-6-3': [
    {
      question: "Hva sier arketype 1 om relativt primiske divisorer?",
      options: ["Er $\\gcd(m,n)=1$ og begge deler $k$, deler $mn$ tallet $k$", "Er $m$ og $n$ divisorer i $k$, deler $mn$ alltid tallet $k$", "Er $\\gcd(m,n)=1$, deler $m+n$ tallet $k$ når begge gjør det", "Er $m$ og $n$ primtall, deler $m+n$ tallet $k$ dersom begge gjør"],
      explanation: "Betingelsen $\\gcd(m,n)=1$ er nødvendig: $4\\mid 12$ og $6\\mid 12$, men $24\\nmid 12$. Det generelt riktige uten betingelsen er at $\\operatorname{lcm}(m,n)$ deler $k$.",
    },
    {
      question: "Hvilke tre veier fører til arketype 1?",
      options: ["Bézout, Euklids lemma og aritmetikkens fundamentalteorem", "Bézout, induksjon på $k$ og case-analyse modulo $mn$", "Euklids algoritme, kongruensregning og et moteksempel", "Fermats teorem, Eulers teorem og det kinesiske restteoremet"],
      explanation: "Alle tre er fullgode, og fasitpraksisen i arkivet honorerer dem likt. Bézout-veien er kortest: $mx+ny=1$ ganges med $k$.",
    },
    {
      question: "Hvorfor er betingelsen $\\gcd(m,n)=1$ nødvendig i arketype 1?",
      options: ["Fordi $4$ og $6$ deler $12$, mens $24$ ikke deler tallet $12$", "Fordi Bézout-koeffisientene ellers ikke kan finnes i det hele", "Fordi $mn$ ellers ikke ville vært et helt tall å dele med", "Fordi Euklids lemma krever at $m$ og $n$ er primtall selv"],
      explanation: "Moteksempelet viser hvor det bryter: faktoren $2$ finnes i både $4$ og $6$, så produktet teller den to ganger. Riktig konklusjon er $\\operatorname{lcm}(4,6)=12$.",
    },
    {
      question: "Hva er den geometriske faktoriseringen?",
      options: ["$x^d-1=(x-1)(x^{d-1}+\\dots+x+1)$", "$x^d-1=(x-1)(x^{d-1}-x^{d-2}+\\dots-1)$", "$x^d+1=(x+1)(x^{d-1}+x^{d-2}+\\dots+1)$", "$x^d-1=(x^2-1)(x^{d-2}+\\dots+x+1)$"],
      explanation: "Kontrollen er å gange ut: alle mellomledd kansellerer, og bare $x^d$ og $-1$ står igjen. Varianten med vekslende fortegn gjelder $x^q+1$ for odde $q$.",
    },
    {
      question: "Hva følger av at $d$ deler $n$?",
      options: ["At $x^d-1$ deler $x^n-1$ for alle hele $x$", "At $x^n-1$ deler $x^d-1$ for alle $x$", "At $x^d-1$ og $x^n-1$ er relativt primiske", "At $x^d+1$ deler $x^n-1$ for alle hele $x$"],
      explanation: "Sett $y=x^d$ og skriv $x^n-1=y^m-1$ med $n=dm$. Faktoriseringen av $y^m-1$ gir $y-1=x^d-1$ som faktor.",
    },
    {
      question: "Hva må du vise i tillegg til faktoriseringen i arketype 2?",
      options: ["At begge faktorene er større enn tallet $1$", "At begge faktorene er primtall for seg selv", "At faktoriseringen er entydig etter teoremet", "At $n$ har nøyaktig to ulike primfaktorer i seg"],
      explanation: "En faktorisering der én faktor kan være $1$, viser ikke at tallet er sammensatt. Kontrollen er $2^a-1\\ge 3$ og at den andre faktoren er en sum av minst to positive ledd.",
    },
    {
      question: "Er $2^{11}-1$ et primtall?",
      options: ["Nei, $2^{11}-1=2047=23\\cdot 89$", "Ja, siden $11$ selv er et primtall", "Ja, siden $2^{11}$ er en toerpotens", "Nei, siden $11$ er sammensatt"],
      explanation: "Dette er moteksempelet til den omvendte av arketype 2: at $n$ er primtall gir ikke at $2^n-1$ er primtall. $11$ er dessuten selv et primtall.",
    },
    {
      question: "Hva er utgangspunktet for beviset for at $p$ deler $\\binom pk$?",
      options: ["Likningen $k!\\,(p-k)!\\binom pk=p!$ ganget opp", "Binomialformelen anvendt på $(a+1)^p$ direkte", "At $\\binom pk$ er et produkt av etterfølgende tall", "Induksjon på $k$ fra $k=1$ opp til $k=p-1$"],
      explanation: "Fra likningen deler $p$ venstresiden, og Euklids lemma tvinger $p$ til å dele én faktor. De to fakultetene utelukkes fordi alle faktorene der er mindre enn $p$.",
    },
    {
      question: "Hvor brukes betingelsen $1\\le k\\le p-1$ i arketype 3?",
      options: ["I utelukkelsen av at $p$ deler $k!$ og $(p-k)!$", "I anvendelsen av binomialformelen på summen", "I utledningen av at $\\binom pk$ er et helt tall", "I kontrollen av at $p!$ er delelig med $p$ selv"],
      explanation: "Bare når $1\\le k\\le p-1$ er alle faktorene i begge fakultetene mindre enn $p$. For $k=0$ og $k=p$ er koeffisienten $1$, og påstanden er falsk.",
    },
    {
      question: "Hvorfor gjelder arketype 3 ikke for sammensatt $n$?",
      options: ["Fordi Euklids lemma bare gjelder når $p$ er et primtall", "Fordi $\\binom nk$ ikke er et helt tall for sammensatt $n$", "Fordi $n!$ ikke er delelig med $n$ når $n$ er sammensatt", "Fordi betingelsen på $k$ endrer seg for sammensatte tall"],
      explanation: "$\\binom 42=6$ og $4\\nmid 6$. Beviset bryter i steget der lemmaet brukes: $4$ deler $2\\cdot 2$ uten å dele noen av faktorene.",
    },
    {
      question: "Hva følger av arketype 3 om $(a+b)^p$ modulo $p$?",
      options: ["At $(a+b)^p\\equiv a^p+b^p\\pmod p$", "At $(a+b)^p\\equiv a^p\\cdot b^p\\pmod p$", "$(a+b)^p\\equiv a+b\\pmod p$ for alle $a,b$", "$(a+b)^p\\equiv (a+b)\\cdot p\\pmod p$ alltid"],
      explanation: "Alle mellomleddene i binomialutviklingen har koeffisient delelig med $p$ og faller bort. Dette er byggeklossen i induksjonsbeviset for $a^p\\equiv a\\pmod p$.",
    },
    {
      question: "Hvilket tall konstruerer du for «uendelig mange primtall $\\equiv 3\\pmod 4$»?",
      options: ["$N=4p_1p_2\\cdots p_r-1$", "$N=4p_1p_2\\cdots p_r+1$", "$N=p_1p_2\\cdots p_r+3$", "$N=3p_1p_2\\cdots p_r-1$"],
      explanation: "Faktoren $4$ sørger for at $N\\equiv -1\\equiv 3\\pmod 4$, og minus én sørger for at ingen $p_i$ deler $N$. Med pluss én ville resten blitt $1$.",
    },
    {
      question: "Hva er de to stegene som glemmes oftest i arketype 4?",
      options: ["Case-analysen på primdivisorene, og at $q$ ikke er i listen", "Kontrollen av at $N$ er odde, og at $N$ er større enn $1$", "Valget av modulus, og faktoriseringen av tallet $N$", "Basissteget og setningen om hvor hypotesen brukes"],
      explanation: "Case-analysen gir deg primtallet av rett form, og «ikke i listen» gir motsigelsen. Svaret om basissteg og hypotese hører til induksjon i [kap. 6.2](/ma1301/ma1301-6-2).",
    },
    {
      question: "Hvorfor kan ikke alle primdivisorene i $N=4p_1\\cdots p_r-1$ være $\\equiv 1\\pmod 4$?",
      options: ["Fordi produktet da ville vært $\\equiv 1$, men $N\\equiv 3$", "Fordi $N$ er odde og derfor har en divisor $\\equiv 3$", "Fordi $N$ er delelig med $4$ etter konstruksjonen", "Fordi antall primdivisorer i $N$ alltid er et odde tall"],
      explanation: "Gang kongruensene sammen: et produkt av tall $\\equiv 1\\pmod 4$ er selv $\\equiv 1$. Det strider mot at $N\\equiv 3$, så minst én divisor må ha rest $3$.",
    },
    {
      question: "Hvilke rester kan et primtall $p>3$ ha modulo $3$?",
      options: ["Bare $1$ og $2$", "Bare $0$ og $1$", "Bare $1$", "Alle tre restene"],
      explanation: "Resten $0$ ville gitt $3\\mid p$, og siden $p$ er primtall måtte $p=3$ — i strid med $p>3$. Denne utelukkelsen er startskuddet for arketype 5.",
    },
    {
      question: "Hvorfor virker case-analyse modulo $3$ på $p$, $p+8$, $p+16$?",
      options: ["Fordi de tre tallene dekker alle de tre restklassene", "Fordi $8$ og $16$ begge er delelige med $3$ pluss to", "Fordi $p$ må være delelig med $3$ når det er et primtall", "Fordi alle tre tallene har samme rest modulo tallet $3$"],
      explanation: "Differansene $8$ og $16$ er $\\equiv 2$ og $\\equiv 1\\pmod 3$, altså ulike og ikke-null, så ett av tallene må være delelig med $3$.",
    },
    {
      question: "Hvorfor holder ikke arketype 5 for $p$, $p+6$, $p+12$?",
      options: ["Fordi $3$ deler differansen, så alle får samme rest", "Fordi $6$ og $12$ er for store til å gi en motsigelse", "Fordi $p=3$ ikke virker for denne varianten av tallene", "Fordi man må bruke modulo $6$ i stedet for modulo $3$"],
      explanation: "Alle tre er kongruente modulo $3$, så case-analysen tvinger ingen delelighet. Moteksempelet er $p=5$, der $5$, $11$ og $17$ alle er primtall.",
    },
    {
      question: "Hva trengs i tillegg til «$3$ deler $p+8$» for å si at $p+8$ er sammensatt?",
      options: ["At $p+8$ er større enn tallet $3$ selv", "At $p+8$ også er delelig med $2$", "At $p$ selv ikke er delelig med $3$", "At $p+8$ har minst tre ulike divisorer"],
      explanation: "Tallet $3$ er delelig med $3$ og er et primtall. Argumentet trenger både delelighet og at tallet er større enn divisoren — dette er linjen som oftest mangler.",
    },
  ],
  'ma1301-6-4': [
    {
      question: "Hva er første setning i et induksjonsbevis?",
      options: ["«Basissteg: $P(n_0)$ er sann fordi begge sider blir …»", "«Anta at $P(k)$ holder for en $k$ større enn $n_0$ …»", "«Ved divisjonsalgoritmen er $n$ kongruent $r$ modulo $m$ …»", "«Anta, for å komme til en motsigelse, at $P(n)$ er gal …»"],
      explanation: "Basissteget kommer først, med begge sider regnet ut. Åpningene «ved divisjonsalgoritmen …» og «anta, for å komme til en motsigelse …» hører til case-analyse- og motsigelsesmalen.",
    },
    {
      question: "Hvor mange basissteg trenger rekursjonen $b_n=4b_{n-1}-3b_{n-2}$?",
      options: ["To, siden steget bruker to tidligere ledd", "Ett, siden induksjonssteget dekker resten", "Tre, siden koeffisientene er $4$ og $3$", "Fire, ett for hver koeffisient i rekursjonen"],
      explanation: "Steget bruker $P(k)$ og $P(k-1)$, så $P(1)$ og $P(2)$ må verifiseres direkte. Ellers mangler steget for $n=3$ ett av tilfellene.",
    },
    {
      question: "Hva er koblingen i induksjonssteget for en delelighetspåstand?",
      options: ["$f(k+1)=A\\,f(k)+R$ der $d$ deler restleddet $R$", "$S(k+1)=S(k)+a_{k+1}$ med det nye leddet skilt ut", "En ulikhetskjede der hypotesen står som ett av leddene", "Binomialformelen der alle mellomledd faller bort"],
      explanation: "Faktoren $A$ finner du ved å se på det raskest voksende leddet. De tre andre er koblingene i sum-, ulikhets- og kongruensvarianten.",
    },
    {
      question: "Hvordan finner du faktoren $A$ i delelighetsvarianten?",
      options: ["Ved å se på det raskest voksende leddet i uttrykket", "Ved å prøve $A=2$ først og deretter øke verdien", "Ved å sette $A$ lik tallet $d$ som skal dele uttrykket", "Ved å regne ut differansen mellom to nabotilfeller"],
      explanation: "Er leddet $a^{k+1}$, er $A=a$; er det $a^{2(k+1)}$, er $A=a^2$. Standardomskrivningen er $a^{k+1}-1=a(a^k-1)+(a-1)$.",
    },
    {
      question: "Hva må vises i tillegg til faktoriseringen i arketype 2?",
      options: ["At begge faktorene er større enn tallet $1$", "At begge faktorene er primtall hver for seg", "At faktoriseringen av $n$ er entydig etter teoremet", "At tallet $n$ har nøyaktig to ulike primfaktorer"],
      explanation: "En faktorisering der én faktor kan være $1$, viser ikke at tallet er sammensatt. Kontrollen er $2^a-1\\ge 3$ og at den andre faktoren er en sum av minst to ledd.",
    },
    {
      question: "Hvilken betingelse må sjekkes før du bruker arketype 1?",
      options: ["At $\\gcd(m,n)=1$, altså at faktorene er relativt primiske", "At $m$ og $n$ begge er primtall hver for seg", "At $k$ er større enn produktet $mn$ av faktorene", "At $m$ og $n$ begge er mindre enn tallet $k$ selv"],
      explanation: "Moteksempelet uten betingelsen er $4\\mid 12$, $6\\mid 12$, men $24\\nmid 12$. Splitt alltid i primtallspotenser, da er faktorene automatisk primiske.",
    },
    {
      question: "Hva konstruerer du i et «uendelig mange primtall $\\equiv 5\\pmod 6$»-bevis?",
      options: ["$N=6p_1p_2\\cdots p_r-1$ av den antatte listen", "$N=6p_1p_2\\cdots p_r+1$ av den antatte listen", "$N=5p_1p_2\\cdots p_r-1$ av den antatte listen", "$N=p_1p_2\\cdots p_r+5$ av den antatte listen"],
      explanation: "Faktoren $6$ gir $N\\equiv -1\\equiv 5\\pmod 6$, og minus én gjør at ingen $p_i$ deler $N$. Med pluss én ville resten blitt $1$.",
    },
    {
      question: "Hvilken setning gir motsigelsen i arketype 4?",
      options: ["At $q$ ikke er i listen, fordi $q$ ellers ville delt $1$", "At $N$ er større enn $1$ og derfor har en primdivisor", "At $N$ har den resten modulo $m$ som konstruksjonen gir", "At alle primdivisorene i $N$ er større enn modulusen $m$"],
      explanation: "De tre andre er nødvendige steg, men det er «ikke i listen» som feller antakelsen om at listen var komplett. Denne setningen glemmes rutinemessig.",
    },
    {
      question: "Hva trengs i tillegg til «$3$ deler $p+10$» i arketype 5?",
      options: ["At $p+10$ er større enn $3$, så divisoren er ekte", "At $p+10$ også er delelig med tallet $2$", "At $p$ selv ikke er delelig med tallet $3$", "At $p+10$ har minst tre ulike positive divisorer"],
      explanation: "Tallet $3$ er delelig med $3$ og er et primtall. Argumentet trenger både delelighet og at tallet er større enn divisoren.",
    },
    {
      question: "Hvorfor kan arketype 5 ikke brukes på $p$, $p+6$, $p+12$?",
      options: ["Fordi $3$ deler differansen, så alle får samme rest", "Fordi $6$ og $12$ er for store til å gi motsigelse", "Fordi $p=3$ ikke virker for denne varianten av tall", "Fordi man må bruke modulo $6$ i stedet for modulo $3$"],
      explanation: "Alle tre tallene er kongruente modulo $3$, så case-analysen tvinger ingen delelighet. Moteksempelet er $p=5$: $5$, $11$ og $17$ er alle primtall.",
    },
    {
      question: "Hvor mange rader har en uttømmende case-analyse modulo $m$?",
      options: ["Nøyaktig $m$, én per rest fra $0$ til $m-1$", "Nøyaktig $m-1$, siden resten $0$ er trivielt", "Så mange som trengs for å se mønsteret klart", "To, én for partall og én for de odde tallene"],
      explanation: "Divisjonsalgoritmen gir $m$ klasser som dekker alt uten overlapp. Færre rader krever en skrevet begrunnelse for hver som mangler.",
    },
    {
      question: "Hva er de to lovlige måtene å slippe unna en rad i en case-analyse?",
      options: ["Utelukkelse med argument, og symmetri som er begrunnet", "Å skrive at de øvrige radene går på samme måte", "Å kontrollere med to tallverdier i stedet for radene", "Å velge en mindre modulus underveis i regningen"],
      explanation: "Utelukkelse er «$r=0$ er umulig siden $p$ er primtall over $m$»; symmetri er «$(m-r)^2\\equiv r^2$». Begge må skrives ut for å gjelde.",
    },
    {
      question: "Hvordan velger du modulus når du skal vise $42\\mid n^7-n$?",
      options: ["Splitt i $2$, $3$ og $7$ og vis delelighet med hver", "Bruk modulo $42$ og gå gjennom alle førtito restene", "Bruk modulo $6$ og deretter modulo $7$ på samme uttrykk", "Bruk modulo $7$ alene, siden $7$ er den største faktoren"],
      explanation: "Oppsplittingen i primtallspotenser gir to rader paritet pluss to anvendelser av Fermat. Modulo $42$ ville kostet førtito rader for samme konklusjon.",
    },
    {
      question: "Hva forteller den todelte oppgaveformen «(a) vis lemmaet, (b) bruk (a)» deg?",
      options: ["At del a skal brukes eksplisitt i del b, med henvisning", "At del b må løses først for å forstå hva a spør om", "At de to delene kan løses helt uavhengig av hverandre", "At del a er en oppvarming som ikke gir egne poeng"],
      explanation: "Henvisningen «etter a)» skal skrives. Og du kan bruke a) i b) selv om du ikke fikk til a) — delpunktene vektes likt.",
    },
  ],
  'ma1301-7-1': [
    {
      question: "Hvordan finner du kjedebrøken til et rasjonalt tall $a/b$?",
      options: ["Kjør Euklids algoritme og les av kvotientene i rekkefølge", "Kjør Euklids algoritme og les av restene i rekkefølge", "Regn ut desimalutviklingen og les av sifrene gruppevis", "Faktoriser $a$ og $b$ og sammenlign eksponentene parvis"],
      explanation: "Divisjonskjeden gir leddene direkte: $97=2\\cdot 41+15$, $41=2\\cdot 15+11$, … gir $[2;2,\\dots]$. Ingen ny prosedyre kreves ut over [kap. 1.2](/ma1301/ma1301-1-2).",
    },
    {
      question: "Hva er rekursjonsskjemaet for konvergentenes tellere?",
      options: ["$p_n=a_np_{n-1}+p_{n-2}$, med pluss", "$p_n=a_np_{n-1}+a_{n-1}p_{n-2}$", "$p_n=p_{n-1}+p_{n-2}$, uten $a_n$", "$p_n=a_np_{n-1}-p_{n-2}$, med minus"],
      explanation: "Nevnerne følger samme mønster: $q_n=a_nq_{n-1}+q_{n-2}$. Startverdiene er $p_{-1}=1$, $p_{-2}=0$, $q_{-1}=0$, $q_{-2}=1$.",
    },
    {
      question: "Hva er startverdiene i rekursjonsskjemaet?",
      options: ["$p_{-1}=1$, $p_{-2}=0$, $q_{-1}=0$, $q_{-2}=1$", "$p_{-1}=0$, $p_{-2}=1$, $q_{-1}=1$, $q_{-2}=0$", "$p_{-1}=1$, $p_{-2}=1$, $q_{-1}=1$, $q_{-2}=1$", "$p_{-1}=a_0$, $p_{-2}=1$, $q_{-1}=1$, $q_{-2}=0$"],
      explanation: "Kontrollen er at de gir $C_0=a_0/1$: $p_0=a_0\\cdot 1+0=a_0$ og $q_0=a_0\\cdot 0+1=1$ ✓.",
    },
    {
      question: "Når stopper du kjedebrøktabellen for $\\sqrt D$?",
      options: ["Når paret $(m_n,d_n)$ gjentar seg i tabellen", "Når leddet $a_n$ blir større enn $a_0$", "Når $d_n$ blir lik $1$ for andre gang", "Når du har regnet nøyaktig fire rader"],
      explanation: "Da har perioden lukket seg, og hele utviklingen gjentar seg. Si det i besvarelsen — ellers ser det ut som du stoppet tilfeldig.",
    },
    {
      question: "Hva er siste ledd i perioden til $\\sqrt D$?",
      options: ["$2a_0$", "$a_0$", "$a_0+1$", "$D-a_0^2$"],
      explanation: "For $\\sqrt{23}=[4;\\overline{1,3,1,8}]$ er $a_0=4$ og siste periodeledd $8=2\\cdot 4$. Det er en gratis kontroll på at du stoppet på rett sted.",
    },
    {
      question: "Hvilken kontroll regner du i hver rad av konvergenttabellen?",
      options: ["At $p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$", "$p_n+q_n$ skal være et primtall i hver rad", "$p_n/q_n$ skal være større enn forrige rad", "$p_n-q_n$ skal øke med $a_n$ i hver rad"],
      explanation: "Determinantformelen skal gi $\\pm 1$, vekselvis. Får du noe annet, er rekursjonsskjemaet feil brukt — typisk ved å bruke $p_{n-1}$ der $p_{n-2}$ skal stå.",
    },
    {
      question: "Hvordan ligger konvergentene i forhold til tallet de nærmer seg?",
      options: ["Par indeks under tallet, odde indeks over", "Par indeks over, odde indeks under tallet", "Alle ligger under tallet og vokser mot det", "De ligger vekselvis over, men aldri under tallet"],
      explanation: "For $\\sqrt{23}\\approx 4{,}796$ er $C_0=4$, $C_1=5$, $C_2=4{,}75$, $C_3=4{,}8$ — under, over, under, over. Det er en gratis kontroll.",
    },
    {
      question: "Hva er Pells likning?",
      options: ["$x^2-Dy^2=1$ med $D$ ikke et kvadrattall", "$x^2+Dy^2=1$ med $D$ ikke et kvadrattall", "$x^2-Dy^2=D$ med $D$ et vilkårlig positivt tall", "$x^2-y^2=D$ med $D$ ikke et kvadrattall her"],
      explanation: "Kravet om at $D$ ikke er et kvadrattall er nødvendig: med $D=k^2$ faktoriserer venstresiden, og produktet kan bare bli $1$ når $y=0$.",
    },
    {
      question: "Hvordan finner du den minste ikke-trivielle løsningen av $x^2-Dy^2=1$?",
      options: ["Regn $p_n^2-Dq_n^2$ i hver rad og stopp ved første $1$", "Prøv alle $y$ fra $1$ og oppover til $x^2$ blir et kvadrattall", "Sett $x=a_0$ og $y=1$, og juster deretter oppover", "Faktoriser $D$ og bruk det kinesiske restteoremet"],
      explanation: "Kontrollkolonnen forteller deg når du er ferdig, så du behøver ikke huske hvilken rad løsningen kommer i. Kontrollér til slutt ved innsetting.",
    },
    {
      question: "Hva er den minste ikke-trivielle løsningen av $x^2-23y^2=1$?",
      options: ["$(24,5)$, siden $576-575=1$", "$(19,4)$, siden $361-368=-7$", "$(5,1)$, siden $25-23=2$ er nær", "$(211,44)$, som er den første"],
      explanation: "Konvergenten $C_3=\\tfrac{24}5$ til $\\sqrt{23}=[4;\\overline{1,3,1,8}]$ gir nøyaktig $1$. De andre alternativene er konvergenter, men med verdiene $-7$, $2$ og $-7$.",
    },
    {
      question: "Hvordan finner du den nest minste Pell-løsningen fra den minste?",
      options: ["$x_2=x_1^2+Dy_1^2$ og $y_2=2x_1y_1$", "$x_2=2x_1$ og $y_2=2y_1$ ved dobling", "$x_2=x_1+D$ og $y_2=y_1+1$ ved addisjon", "$x_2=x_1y_1$ og $y_2=x_1+y_1$ blandet"],
      explanation: "Formelen faller ut av å gange ut $(x_1+y_1\\sqrt D)^2$. For $D=7$ og $(8,3)$ gir det $(127,48)$, og $127^2-7\\cdot 48^2=1$ ✓.",
    },
    {
      question: "Hvorfor har $x^2-Dy^2=1$ ingen ikke-triviell løsning når $D=k^2$?",
      options: ["Fordi venstresiden faktoriserer, og $1$ har bare $\\pm 1$", "Fordi $\\sqrt D$ da er rasjonal og kjedebrøken blir endelig", "Fordi $x$ og $y$ da må være kvadrattall hver for seg her", "Fordi kjedebrøken til $\\sqrt D$ da ikke er periodisk her"],
      explanation: "$(x-ky)(x+ky)=1$ tvinger begge faktorene til $1$ eller begge til $-1$, og i begge tilfeller blir $y=0$. At $\\sqrt D$ da er rasjonal, er sant, men det er ikke argumentet.",
    },
    {
      question: "Hva forteller et stort ledd i kjedebrøken deg om konvergenten før det?",
      options: ["At den er en uvanlig god tilnærming", "At den ligger uvanlig langt fra tallet", "At nevneren i den er et primtall", "At perioden lukker seg i neste rad"],
      explanation: "Avviket er mindre enn $1/(q_nq_{n+1})$, og et stort ledd $a_{n+1}$ gir stor $q_{n+1}$. Derfor er $\\tfrac{355}{113}$ så god for $\\pi=[3;7,15,1,292,\\dots]$.",
    },
    {
      question: "Hvilken kontroll av en Pell-løsning kan ikke lure deg?",
      options: ["Innsetting: $x^2-Dy^2$ skal bli nøyaktig $1$", "At $x/y$ ligger nær $\\sqrt D$ i desimalverdi", "At $x$ og $y$ er relativt primiske tall", "At $y$ er mindre enn periodens lengde $k$"],
      explanation: "Innsettingen tar tjue sekunder og fanger alle regnefeil oppover i tabellen. Kontrollene av at $x/y$ ligger nær $\\sqrt D$, og at $x$ og $y$ er relativt primiske, er riktige, men de utelukker ikke en nær-løsning.",
    },
  ],
  'ma1301-7-2': [
    {
      question: "Hva er parametriseringen av primitive pytagoreiske tripler?",
      options: ["$x=2st$, $y=s^2-t^2$, $z=s^2+t^2$", "$x=st$, $y=s^2-t^2$, $z=s^2+t^2$", "$x=2st$, $y=s^2+t^2$, $z=s^2-t^2$", "$x=s^2t^2$, $y=s^2-t^2$, $z=s+t$"],
      explanation: "Kontrollen er å kvadrere: $4s^2t^2+(s^2-t^2)^2=(s^2+t^2)^2$. Merk at hypotenusen er summen, ikke differansen — den skal være det største tallet.",
    },
    {
      question: "Hvor mange betingelser har parametriseringen på $s$ og $t$?",
      options: ["Tre: $s>t\\ge 1$, $\\gcd(s,t)=1$, ulik paritet", "To: $s>t\\ge 1$ og $\\gcd(s,t)=1$ er nok", "To: $\\gcd(s,t)=1$ og ulik paritet er nok", "Én: bare at $s$ er større enn $t$ holder"],
      explanation: "Alle tre er nødvendige. $(5,3)$ oppfyller de to første men gir $(30,16,34)=2\\cdot(15,8,17)$ — ikke primitiv.",
    },
    {
      question: "Hva går galt hvis $s$ og $t$ begge er odde?",
      options: ["Alle tre tallene blir par, så trippelen er ikke primitiv", "Kateten $y$ blir negativ, og trippelen dermed ugyldig", "Hypotenusen blir mindre enn den ene kateten", "Trippelen oppfyller ikke $x^2+y^2=z^2$ i det hele tatt"],
      explanation: "$(3,1)$ gir $(6,8,10)=2\\cdot(3,4,5)$. Både $y=s^2-t^2$ og $z=s^2+t^2$ blir par når begge kvadratene er odde.",
    },
    {
      question: "Hva går galt hvis $\\gcd(s,t)=d>1$?",
      options: ["Trippelen får faktoren $d^2$ og er ikke primitiv", "Trippelen får faktoren $d$ alene og er ikke primitiv", "Kateten $x$ blir odde i strid med formen", "Hypotenusen blir ikke et helt tall lenger"],
      explanation: "$(4,2)$ med $d=2$ gir $(16,12,20)=4\\cdot(4,3,5)$, altså faktoren $d^2=4$. Brutt paritet gir derimot alltid faktoren $2$.",
    },
    {
      question: "Hvordan avgjør du raskest om en trippel er primitiv?",
      options: ["Regn $\\gcd(x,y)$ — er den $1$, er trippelen primitiv", "Regn $\\gcd(y,z)$ og sjekk at den er større enn tallet $1$", "Sjekk at hypotenusen $z$ i trippelen er et primtall", "Sjekk at begge katetene er primtall hver for seg"],
      explanation: "For pytagoreiske tripler er $\\gcd(x,y,z)=1$ ekvivalent med $\\gcd(x,y)=1$: deler $d>1$ katetene, deler $d^2$ tallet $z^2$ og dermed $d$ tallet $z$.",
    },
    {
      question: "Kan begge katetene i en primitiv trippel være odde?",
      options: ["Nei — da ville $z^2\\equiv 2\\pmod 4$, som er umulig", "Ja, for eksempel i trippelen $(3,5,7)$ som er primitiv", "Ja, men bare når hypotenusen er delelig med $4$", "Nei — da ville hypotenusen blitt et partall"],
      explanation: "To oddetallskvadrater gir $1+1=2$ modulo $4$, og kvadrattall har bare restene $0$ og $1$. Og $(3,5,7)$ er ikke en trippel i det hele tatt: $9+25=34\\ne 49$.",
    },
    {
      question: "Hvordan finner du alle primitive tripler med en gitt **odde** katet $y$?",
      options: ["Faktoriser $y=(s-t)(s+t)$ og løs for $s$ og $t$", "Sett $2st=y$ og list alle faktorpar av $y/2$", "Prøv alle $s$ opp til $y$ og sjekk om $y$ dukker opp", "Faktoriser $y$ i primtall og bruk multiplikativitet"],
      explanation: "Fra $u=s-t$ og $v=s+t$ er $s=(u+v)/2$ og $t=(v-u)/2$, som blir hele tall siden begge faktorene i et odde tall er odde.",
    },
    {
      question: "Hvor mange primitive tripler har kateten $45$?",
      options: ["To: $(28,45,53)$ og $(1012,45,1013)$", "Tre, én for hver faktorisering av $45$", "Én: bare $(28,45,53)$ er primitiv", "Fire, siden $45$ har seks divisorer i alt"],
      explanation: "Faktoriseringene $1\\cdot 45$, $3\\cdot 15$ og $5\\cdot 9$ gir parene $(23,22)$, $(9,6)$ og $(7,2)$ — og $(9,6)$ faller ut på $\\gcd=3$.",
    },
    {
      question: "Hvorfor finnes ingen primitiv trippel med kateten $14$?",
      options: ["Fordi $st=7$ tvinger $(s,t)=(7,1)$, som er begge odde", "Fordi $14$ ikke er et kvadrattall og derfor umulig", "Fordi $14$ har for få divisorer til å gi en trippel", "Fordi $7$ er et primtall og primtall gir ingen tripler"],
      explanation: "Generelt må en par katet være delelig med $4$, siden $x=2st$ med én av $s,t$ par. Derfor faller $6$, $10$, $14$, $18$ ut.",
    },
    {
      question: "Hva må gjelde om en par katet i en primitiv trippel?",
      options: ["Den er delelig med $4$", "Den er delelig med $8$", "Den er delelig med $3$ eller $5$", "Den er alltid et kvadrattall"],
      explanation: "$x=2st$, og én av $s,t$ er par siden de har ulik paritet — altså $4\\mid x$. Kontroll: $4,12,8,24,20$ i de klassiske triplene.",
    },
    {
      question: "Hvordan viser du at $3$ deler produktet av katetene?",
      options: ["Case-analyse modulo $3$ på $s$ og $t$, med kvadratrestene", "Ved induksjon på hypotenusen $z$ i selve trippelen", "Ved å prøve alle primitive tripler opp til hypotenus $50$", "Ved Fermats lille teorem anvendt på $x$ og $y$ hver for seg"],
      explanation: "Deler $3$ en av $s,t$, deler den $x=2st$. Ellers er begge kvadratene $\\equiv 1$, så $y=s^2-t^2\\equiv 0$. Tre rader i alt.",
    },
    {
      question: "Hvilket produkt er delelig med $5$ i en primitiv trippel?",
      options: ["$xyz$ — produktet av alle tre sidene", "$xy$ — produktet av de to katetene", "$x+y+z$ — omkretsen av trekanten", "$z$ alene — hypotenusen er alltid delelig"],
      explanation: "I $(4,3,5)$ sitter femmeren i hypotenusen, og $xy=12$ er ikke delelig med $5$. Derfor er påstanden om $xyz$ og ikke $xy$.",
    },
    {
      question: "Hva er hypotenusen kongruent med modulo $4$?",
      options: ["$1$, siden $z=s^2+t^2$ med én par og én odde", "$3$, siden hypotenusen i en trippel alltid er odde", "$0$, siden hypotenusen er delelig med $4$", "$2$, siden summen av to kvadrater er par"],
      explanation: "Ett kvadrat er $\\equiv 0$ og det andre $\\equiv 1$ modulo $4$. Konsekvens: ingen primitiv trippel har hypotenus $\\equiv 3\\pmod 4$, så $z\\ne 15$.",
    },
    {
      question: "Hva er svaret på «finn alle tripler med kateten $6$»?",
      options: ["$(6,8,10)$, som er avledet — ingen primitiv finnes", "$(6,8,10)$, som er den eneste primitive trippelen", "$(6,8,10)$ og $(6,45,45{,}4)$ tilnærmet", "Ingen tripler i det hele tatt har kateten $6$"],
      explanation: "$6=2\\cdot 3$ er ikke delelig med $4$, så ingen primitiv trippel har den kateten. Men $(6,8,10)=2\\cdot(3,4,5)$ er en ekte, avledet trippel.",
    },
  ],
  'ma1301-7-3': [
    {
      question: "Hva betyr det at et tall er rasjonalt?",
      options: ["At det kan skrives $a/b$ med $a,b$ hele og $b\\ne 0$", "At det har en endelig desimalutvikling i titallsystemet", "At det er kvadratrota av et helt tall større enn null", "At det kan skrives som en sum av to kvadrattall"],
      explanation: "Hvert rasjonalt tall kan i tillegg skrives i laveste ledd, altså med $\\gcd(a,b)=1$ — og det er den formen bevisene bruker.",
    },
    {
      question: "Hvilken antakelse treffer motsigelsen i et irrasjonalitetsbevis?",
      options: ["At brøken er i laveste ledd, altså $\\gcd(a,b)=1$", "At tallet under rottegnet er et primtall i seg selv", "At nevneren $b$ er et positivt helt tall her", "At kvadratrota er større enn tallet $1$"],
      explanation: "Beviset utleder at en primfaktor deler både $a$ og $b$, i strid med laveste ledd. Derfor må «$\\gcd(a,b)=1$» stå i første linje.",
    },
    {
      question: "Hvilket teorem bærer delelighetssteget i malen?",
      options: ["Euklids lemma for primtall", "Aritmetikkens fundamentalteorem", "Bézouts identitet om gcd", "Fermats lille teorem"],
      explanation: "Fra $p\\mid a^2$ gir lemmaet at $p\\mid a$, og det krever at $p$ er et primtall — $4\\mid 2\\cdot 2$ men $4\\nmid 2$. Fundamentalteoremet brukes i eksponentargumentet i stedet.",
    },
    {
      question: "Hva er steg 0 i et irrasjonalitetsbevis?",
      options: ["Sjekk at tallet ikke er en $k$-te potens", "Sjekk at nevneren $b$ er positiv og hel", "Sjekk at telleren $a$ er større enn nevneren", "Sjekk at tallet er større enn tallet $1$"],
      explanation: "Er $D$ et kvadrattall, er $\\sqrt D$ rasjonal og påstanden falsk. Følger du malen blindt på $\\sqrt{16}$, kommer du til steg 4 uten å få noen motsigelse.",
    },
    {
      question: "Hvorfor virker ikke malen for $\\sqrt{16}$?",
      options: ["Fordi eksponenten til $2$ i $16$ er par", "Fordi $16$ ikke har noen primfaktor i det hele tatt", "Fordi Euklids lemma ikke gjelder for tallet $2$", "Fordi $16$ er større enn kvadratet av nevneren"],
      explanation: "Beviset trenger en primfaktor med **odde** eksponent — den gir «én faktor til overs» som tvinger $p\\mid b$. I $16=2^4$ er eksponenten par, og $\\sqrt{16}=4$ er faktisk rasjonal.",
    },
    {
      question: "Hva er $v_p(n)$?",
      options: ["Eksponenten til $p$ i primtallsfaktoriseringen av $n$", "Antall primfaktorer i $n$ til sammen, med multiplisitet", "Resten når $n$ deles på det gitte primtallet $p$", "Antall divisorer i $n$ som er delelige med $p$"],
      explanation: "For $48=2^4\\cdot 3$ er $v_2(48)=4$, $v_3(48)=1$ og $v_5(48)=0$. Reglene $v_p(mn)=v_p(m)+v_p(n)$ og $v_p(n^k)=k\\,v_p(n)$ følger av entydig faktorisering.",
    },
    {
      question: "Hva er kriteriet for at $\\sqrt[k]{m}$ er rasjonal?",
      options: ["At $k$ deler alle eksponentene i faktoriseringen av $m$", "At $m$ verken er et primtall eller tallet $1$ i seg selv", "At $k$ deler tallet $m$ uten noen rest igjen", "At $m$ er et kvadrattall for enhver verdi av $k$"],
      explanation: "Det er ekvivalent med at $m$ er en $k$-te potens. $\\sqrt[3]{64}$ er rasjonal fordi $64=2^6$ og $3\\mid 6$, selv om $64$ ikke er en kubikk av et primtall.",
    },
    {
      question: "Er $\\sqrt[3]{50}$ rasjonal?",
      options: ["Nei, siden $50=2\\cdot 5^2$ og $3$ ikke deler $1$", "Ja, siden $50$ ikke er noe kvadrattall i det hele tatt", "Ja, siden $3$ ikke deler tallet $50$ i det hele tatt", "Nei, siden $50$ er et sammensatt tall i seg selv"],
      explanation: "Kriteriet krever at $3$ deler alle eksponentene. Her er $v_2(50)=1$ og $3\\nmid 1$, så tallet er irrasjonalt — det ligger mellom $3$ og $4$.",
    },
    {
      question: "Hvorfor er $\\sqrt[k]{p}$ irrasjonal for hvert primtall $p$ og $k\\ge 2$?",
      options: ["Fordi $v_p(p)=1$ og $k$ ikke deler $1$", "Fordi primtall ikke kan være potenser av noe", "Fordi Euklids lemma alltid gir en motsigelse her", "Fordi $p$ er mindre enn $p^k$ for alle $k\\ge 2$"],
      explanation: "Eksponentargumentet gir $k\\mid v_p(p)=1$, som er umulig for $k\\ge 2$. Det ene beviset dekker $\\sqrt 2$, $\\sqrt 3$, $\\sqrt[3]{7}$ og uendelig mange andre.",
    },
    {
      question: "Hva må du vise i et nedstigningsbevis, i tillegg til å konstruere en ny løsning?",
      options: ["At den nye løsningen er strengt mindre enn den gamle", "At den nye løsningen er relativt primisk i seg selv også", "At den nye løsningen er større enn den forrige", "At det finnes uendelig mange nye løsninger totalt"],
      explanation: "Uten ulikheten har du bare en annen løsning, ikke en mindre — og da er det ingen nedstigning. Fra $b^2=Dc^2$ med $D\\ge 2$ er $b>c$.",
    },
    {
      question: "Hvilket prinsipp ligger under uendelig nedstigning?",
      options: ["Velordningsprinsippet: en mengde positive heltall har et minste", "Induksjonsprinsippet anvendt på nevneren i brøken direkte", "Aritmetikkens fundamentalteorem om entydig faktorisering", "Divisjonsalgoritmen med rest mindre enn divisoren"],
      explanation: "Samme prinsipp ligger under induksjon ([kap. 6.2](/ma1301/ma1301-6-2)) og under at Euklids algoritme stopper. En uendelig strengt avtakende følge av positive heltall er umulig.",
    },
    {
      question: "Hvor nær ligger konvergenten $p_n/q_n$ tallet $\\alpha$?",
      options: ["Nærmere enn $1/(q_nq_{n+1})$, altså under $1/q_n^2$", "Nøyaktig $1/(q_nq_{n+1})$ i hvert enkelt tilfelle her", "Nærmere enn $1/q_n$ men ikke nødvendigvis mer", "Nærmere enn $1/(q_n+q_{n+1})$ i alle tilfeller"],
      explanation: "Utledningen: $\\alpha$ ligger mellom nabokonvergentene, og avstanden mellom dem er $1/(q_nq_{n+1})$ etter determinantformelen. Merk at det er en øvre grense, ikke en likhet.",
    },
    {
      question: "Hva gjør du hvis grensen $1/(q_nq_{n+1})$ er for romslig for kravet i oppgaven?",
      options: ["Regner én konvergent til og bruker den i stedet", "Konkluderer at kravet ikke kan oppfylles", "Bruker grensen $1/q_n$, som er skarpere enn denne", "Ganger opp nevneren i konvergenten med to"],
      explanation: "Ulikheten er en garanti, ikke et mål — den faktiske feilen kan være mindre. Én rad mer i tabellen gir en skarpere grense.",
    },
    {
      question: "Hvorfor finnes det uendelig mange brøker med feil under $1/q^2$ når $\\alpha$ er irrasjonal?",
      options: ["Fordi kjedebrøken er uendelig og nevnerne vokser strengt", "Fordi det finnes uendelig mange brøker med hver enkelt nevner", "Fordi konvergentene alltid er relativt primiske tall", "Fordi $\\alpha$ ligger mellom to nabokonvergenter alltid"],
      explanation: "Er $\\alpha$ rasjonal, stopper kjedebrøken og du får bare endelig mange konvergenter. Irrasjonaliteten er nettopp det som gir uendelig mange.",
    },
  ],
  'ma1301-8-1': [
    {
      question: "Hva er det første du skriver når en oppgave ber deg løse $ax+by=c$ i hele tall?",
      options: ["Divisjonskjeden i Euklids algoritme, for å finne $d=\\gcd(a,b)$", "Partikulærløsningen, funnet ved å prøve små verdier for $x$", "Den generelle løsningsmengden med parameteren $t$ satt inn", "Skaleringsfaktoren $c/d$, som ganges inn i likningen først"],
      explanation: "Rekkefølgen er fast: $d$ først, så løsbarhetssetningen $d\\mid c$, så Bézout baklengs, så skalering, og til slutt hele løsningsmengden. Skaleringsfaktoren kan ikke regnes før $d$ er kjent, og partikulærløsningen skal leses ut av substitusjonskjeden, ikke gjettes.",
    },
    {
      question: "Hvorfor er det en byggefeil å oppgi bare $\\gcd(a,b)$ uten Bézout-koeffisientene?",
      options: ["Fordi koeffisientene er det diofant-, invers- og RSA-delpunktet bygger videre på", "Fordi $\\gcd(a,b)$ ikke er entydig bestemt uten at koeffisientene oppgis", "Fordi koeffisientene er de eneste tallene som lar seg kontrollere ved innsetting", "Fordi divisjonskjeden ikke regnes som en fullført algoritme uten dem"],
      explanation: "Både den diofantiske partikulærløsningen, den modulære inversen og RSA-eksponenten $d$ leses ut av substitusjonskjeden. Gcd-en er entydig i seg selv, og kjeden frem er en fullført algoritme — problemet er at det som kommer etter, mangler grunnlaget sitt.",
    },
    {
      question: "Hva skal stå i besvarelsen FØR du løser $ax\\equiv b\\pmod m$?",
      options: ["At $d=\\gcd(a,m)$ deler $b$, og gir $d$ inkongruente løsninger", "At modulusen $m$ er et primtall, slik at inversen finnes", "At $a$ og $b$ er redusert til minste positive rest modulo $m$", "At kongruensen er ekvivalent med en likning med to ukjente"],
      explanation: "Løsbarhetssetningen er $d\\mid b$, og den gir samtidig antallet. Modulusen behøver ikke være et primtall for at kongruensen skal ha løsninger, og omskrivningen til en likning med to ukjente er en lovlig, men valgfri vei.",
    },
    {
      question: "Hvordan reduserer du eksponenten i $a^N\\bmod n$ når $\\gcd(a,n)=1$?",
      options: ["Modulo $\\phi(n)$, med henvisning til Eulers teorem", "Modulo $n$, siden alle utregninger foregår modulo $n$", "Modulo $n-1$, som er antallet mulige rester utenom null", "Modulo $\\tau(n)$, altså antallet divisorer i modulusen"],
      explanation: "Eulers teorem gir $a^{\\phi(n)}\\equiv 1$, og det er nettopp derfor eksponenten kan reduseres modulo $\\phi(n)$. Å redusere modulo $n$ eller modulo $n-1$ er den mest belagte feilen i sjangeren — $n-1$ er bare riktig når $n$ er et primtall, og da fordi $\\phi(n)=n-1$.",
    },
    {
      question: "Hva er koeffisienten foran fakultetet når $j$ faktorer mangler i Wilson-trikset?",
      options: ["$(-1)^j\\cdot j!$, fordi hver manglende faktor blir en negativ rest", "$j!$, fordi de manglende faktorene ganges sammen som vanlig", "$(-1)^j$, fordi bare fortegnet endres når faktorene byttes ut", "$(p-1)!/j!$, fordi $j$ faktorer er delt bort fra fakultetet"],
      explanation: "Hver manglende faktor $p-i$ skrives som $-i$, så produktet blir $(-1)(-2)\\cdots(-j)=(-1)^j\\cdot j!$. Et positivt $j!$ mister fortegnet, og $(-1)^j$ alene mister størrelsen — begge er halve svar.",
    },
    {
      question: "Hvilket vilkår må kommenteres før CRT-formelen brukes?",
      options: ["At modulene er parvis relativt primiske", "At alle restene $b_k$ er mindre enn sin egen modulus", "At produktet av modulene er større enn hver enkelt rest", "At antallet kongruenser er minst to og høyst fire"],
      explanation: "Parvis primiskhet er det som gir entydighet modulo $M$, og uten det gjelder ikke formelen. At restene er reduserte er ryddig, men ikke et vilkår, og antallet kongruenser er uten betydning for teoremet.",
    },
    {
      question: "Hva er hele svaret på et kongruenssystem med parvis primiske moduler?",
      options: ["En restklasse med periode $M$: $x\\equiv x_0\\pmod M$", "Det minste positive tallet som oppfyller alle kongruensene", "En liste over alle løsninger mellom null og den største modulusen", "Ett tall for hver kongruens, satt sammen til en løsningsvektor"],
      explanation: "Systemet har uendelig mange løsninger, og de danner én restklasse modulo $M$. Det minste positive tallet er bare representanten — det oppgis når oppgaven spør om det, men perioden skal alltid med.",
    },
    {
      question: "Etter hvilken modulus leses supplementsregelen for $\\left(\\frac{2}{p}\\right)$?",
      options: ["Etter $p$ modulo $8$: symbolet er $1$ når $p\\equiv\\pm 1$", "Etter $p$ modulo $4$: symbolet er $1$ når $p\\equiv 1$", "Etter $p$ modulo $2$: symbolet er $1$ for alle odde $p$", "Etter $p$ modulo $3$: symbolet er $1$ når $p\\equiv 1$"],
      explanation: "«8-regelen» gjelder $\\left(\\frac{2}{p}\\right)$, mens modulo $4$ hører til $\\left(\\frac{-1}{p}\\right)$ — å bytte om de to modulene er den belagte feilen. Modulo $2$ og modulo $3$ hører ikke til noen av supplementsreglene.",
    },
    {
      question: "Hva er fortegnsfaktoren i den kvadratiske resiprositetsloven?",
      options: ["$(-1)^{\\frac{p-1}{2}\\cdot\\frac{q-1}{2}}$, altså $-1$ når begge er $\\equiv 3\\pmod 4$", "$(-1)^{\\frac{pq-1}{2}}$, altså $-1$ når produktet er $\\equiv 3\\pmod 4$", "$(-1)^{\\frac{p-1}{2}+\\frac{q-1}{2}}$, altså $-1$ når nøyaktig én er $\\equiv 3\\pmod 4$", "$(-1)^{\\frac{p+q}{2}}$, altså $-1$ når summen av primtallene er odde"],
      explanation: "Produktet av de to halvpartene er odde nøyaktig når begge halvpartene er odde, altså når begge primtallene er $\\equiv 3\\pmod 4$. Summeformen ville gitt fortegnsbytte når bare én av dem er det, og de to siste formene finnes ikke i loven.",
    },
    {
      question: "Hva må stå i svaret for at «finn ordenen til $a$ modulo $n$» skal være ferdig besvart?",
      options: ["At mindre divisorer av $\\phi(n)$ er utelukket, så svaret er minst", "At $a^{\\phi(n)}\\equiv 1\\pmod n$, som viser at ordenen finnes", "At $\\gcd(a,n)=1$, og at $a$ derfor har en invers modulo $n$", "At hele syklusen $a,a^2,a^3,\\dots$ er ført ut til den lukker seg igjen"],
      explanation: "Ordenen er per definisjon den minste eksponenten, så utelukkelsen av mindre divisorer er selve svaret. At $a^{\\phi(n)}\\equiv 1$ og at $\\gcd(a,n)=1$ er forutsetninger som kommer først, og hele syklusen er en lovlig, men unødvendig dyr vei.",
    },
    {
      question: "Hvor mange minutter per delpunkt gir eksamensformen deg?",
      options: ["Omtrent $24$: fire timer delt på ti likt vektede delpunkt", "Omtrent $30$: fire timer fordelt på åtte hovedoppgaver", "Omtrent $15$: fire timer fordelt på seksten delpunkt og pauser", "Omtrent $40$: fire timer fordelt på seks tunge hovedoppgaver"],
      explanation: "Nyere sett er organisert som omtrent ti delpunkt som alle teller likt, og $240/10=24$. Delpunkt er den riktige enheten, ikke hovedoppgaver — en hovedoppgave kan ha ett eller tre delpunkt.",
    },
    {
      question: "Du står fast på et delpunkt med ti minutter igjen. Hva gir mest uttelling?",
      options: ["Å skrive sjanger, teoremnavn, oppsettet du har, og hvor du stoppet", "Å oppgi et sannsynlig sluttsvar, slik at delpunktet har et svar", "Å stryke det halvferdige, slik at ingen feil står i besvarelsen", "Å begynne på et nytt delpunkt du ikke har sett på ennå"],
      explanation: "Innenfor ett delpunkt gis uttelling for metode, så tre linjer riktig oppsett er langt fra null. Et gjettet tall uten metode teller ikke, stryking fjerner poeng du alt har tjent, og ti minutter er for lite til et nytt delpunkt.",
    },
    {
      question: "Hvorfor er et induksjonsbevis uten basissteg helt uten verdi?",
      options: ["Fordi implikasjonene kan holde selv om påstanden er gal for alle $n$", "Fordi induksjonshypotesen da blir en antagelse om noe helt udefinert", "Fordi induksjonssteget krever en startverdi for å kunne regnes ut", "Fordi $n_0$ må oppgis for at påstanden i det hele tatt skal ha mening"],
      explanation: "Påstanden $1+2+\\dots+n=\\frac{n(n+1)}{2}+c$ har et gyldig induksjonssteg for hver konstant $c$, og er sann bare for $c=0$ — basissteget er det eneste som skiller dem. Hypotesen og steget lar seg føre helt fint uten basissteget; det er nettopp derfor mangelen er farlig.",
    },
    {
      question: "Hva kreves av en case-analyse modulo $m$ for at den skal være uttømmende?",
      options: ["At alle $m$ restene er behandlet, og umulige tilfeller utelukket i ord", "At de restene som gir det ønskede resultatet, er regnet ut i detalj", "At modulusen $m$ er et primtall, slik at restene danner en gruppe", "At minst halvparten av restene er behandlet, og resten følger av symmetri"],
      explanation: "Divisjonsalgoritmen gir at hvert helt tall har nøyaktig én rest $0,\\dots,m-1$, så alle $m$ radene må stå. Symmetriargumenter må skrives ut for å gjelde, og modulusen trenger ikke være et primtall.",
    },
    {
      question: "Hva er det første du gjør med et nytt oppgavesett, før du regner en linje?",
      options: ["Leser hele settet og skriver sjangerbokstaven i margen per delpunkt", "Begynner på oppgave 1, som erfaringsmessig er den mest tilgjengelige", "Regner ut $\\phi$-verdiene og faktoriseringene som forekommer i settet", "Velger ut de tre delpunktene du kan droppe, slik at tiden rekker"],
      explanation: "Kartleggingsrunden koster fem minutter og bestemmer rekkefølgen for de neste 235. Å starte på oppgave 1 følger settets nummerering istedenfor din egen sikkerhet, og å velge bort delpunkt før du har lest dem er å gi bort poeng du kanskje kunne tatt.",
    },
    {
      question: "Hvilke tre punkter i sjekklisten før innlevering gir oftest treff?",
      options: ["Euklid baklengs, løsbarhet kommentert, og løsningsmengden", "Faktoriseringen, potensregningen, og kontrollen ved innsetting", "Teoremnavnet, basissteget, og fortegnsfaktoren i resiprositetsloven", "Kvadrattabellen, inversen, og reduksjonen av grunntallet"],
      explanation: "De tre første punktene i lista er de som oftest står åpne, fordi de gjelder de tre mest frekvente sjangrene samtidig. De øvrige punktene er reelle, men de treffer sjeldnere — og de gjelder bare oppgaver av en bestemt type.",
    },
  ],
  'ma1301-8-2': [
    {
      question: "Hvor mange av settets ti delpunkt hentes av de fem søylene Euklid, Euler, Wilson, CRT og RSA?",
      options: ["Seks — O1a, O2a, O2b, O3, O4a og O4b", "Fire — ett delpunkt for hver av de fire teoremene", "Alle ti, siden søylene inngår i hver eneste oppgave", "Tre — bare de oppgavene som er merket som kjernesjangre"],
      explanation: "Euklid bærer O1a og er motoren i O4a, Wilson gir O2a, Euler gir O2b, det kinesiske restteoremet gir O3 og RSA gir O4. De fire siste delpunktene er Legendre, orden og bevis, som er der karakteren skilles.",
    },
    {
      question: "Hvorfor kjøres ikke Euklids algoritme direkte på $6n+5$ og $4n+3$ i O1b?",
      options: ["Fordi $1$ leses raskere av differansen $2(6n+5)-3(4n+3)$", "Fordi algoritmen bare er definert for positive hele tall", "Fordi uttrykk med parameter ikke har noen største felles divisor", "Fordi resten i første divisjon avhenger av fortegnet til $n$"],
      explanation: "Grepet er å gange opp til samme koeffisient foran $n$ og ta differansen: den blir $1$, og enhver felles divisor må dele $1$. Uttrykk med parameter har naturligvis en gcd, og algoritmen virker for negative tall også — den er bare upraktisk her.",
    },
    {
      question: "Hva er koeffisienten foran $84!$ når $88!$ skrives ved $84!$ modulo $89$?",
      options: ["$+24$, fordi fire manglende faktorer gir $(-1)^4\\cdot 4!$", "$-24$, fordi hver manglende faktor bidrar med et minustegn", "$+4$, fordi fire faktorer mangler i produktet", "$-1$, fordi Wilsons teorem alt gir fortegnet"],
      explanation: "Faktorene $85,86,87,88$ blir $-4,-3,-2,-1$, og produktet av fire negative tall er positivt: $(-1)^4\\cdot 4!=24$. Antallet faktorer alene gir bare $4$, og Wilson-fortegnet hører til venstre side av kongruensen.",
    },
    {
      question: "Etter hvilken modulus reduseres eksponenten $505$ i $19^{505}\\bmod 132$?",
      options: ["Modulo $\\phi(132)=40$, fordi $\\gcd(19,132)=1$", "Modulo $132$, siden alt regnes modulo modulusen", "Modulo $131$, som er $132$ minus én", "Modulo $11$, den største primfaktoren i $132$"],
      explanation: "Eulers teorem gir $19^{40}\\equiv 1\\pmod{132}$ når vilkåret $\\gcd(19,132)=1$ er oppfylt, og da kan eksponenten reduseres modulo $40$. Formen $n-1$ hører til primtallsmoduler, der den er $\\phi(n)$.",
    },
    {
      question: "Hva må stå i O6 for at «finn ordenen til $2$ modulo $47$» skal være ferdig besvart?",
      options: ["At $2^1$ og $2^2$ ikke er $1$, så $23$ er den minste", "At $2^{23}\\equiv 1$, som er nok til å bestemme ordenen", "At $\\phi(47)=46$, slik at ordenen må dele tallet $46$", "At $\\gcd(2,47)=1$, slik at ordenen i det hele tatt eksisterer"],
      explanation: "Ordenen er per definisjon den minste eksponenten, så utelukkelsen av de mindre divisorene $1$ og $2$ er selve svaret. At $2^{23}\\equiv 1$ viser bare at ordenen deler $23$, og de to andre punktene er forutsetninger som kommer først.",
    },
  ],
  'ma1301-8-3': [
    {
      question: "Hva skjer med modulusen når $92x\\equiv 68\\pmod{120}$ forkortes med $d=4$?",
      options: ["Den deles også, til $23x\\equiv 17\\pmod{30}$", "Den beholdes, så kongruensen blir $23x\\equiv 17\\pmod{120}$", "Den ganges med $d$, altså blir modulusen $480$", "Den byttes med $\\operatorname{lcm}(92,120)$ i den nye kongruensen"],
      explanation: "Forkorting med $d$ krever at også modulusen deles på $d$ — ellers får du feil løsningsmengde. Den opprinnelige kongruensen har $d=4$ inkongruente løsninger modulo $120$, med avstand $120/4=30$.",
    },
    {
      question: "Hvorfor kan Eulers teorem ikke brukes direkte på $18^{307}\\bmod 250$?",
      options: ["Fordi $\\gcd(18,250)=2$, og teoremet krever relativt primiske tall", "Fordi $250$ ikke er et primtall, og teoremet krever primtallsmodulus", "Fordi eksponenten $307$ er større enn $\\phi(250)$ og må reduseres først", "Fordi $18$ ikke er en primitiv rot modulo $250$, slik teoremet krever"],
      explanation: "Vilkåret i Eulers teorem er $\\gcd(a,n)=1$, og her er den felles faktoren $2$. Teoremet gjelder utmerket for sammensatte moduler, og hverken eksponentens størrelse eller primitive røtter har noe med vilkåret å gjøre.",
    },
    {
      question: "Systemet $x\\equiv 7\\pmod{18}$, $x\\equiv 13\\pmod{24}$ er løsbart. Hva er perioden i svaret?",
      options: ["$\\operatorname{lcm}(18,24)=72$, ikke produktet", "Produktet $18\\cdot 24=432$, som i CRT-formelen", "$\\gcd(18,24)=6$, altså faktoren de to har felles", "$24$, altså den største av de to oppgitte modulene"],
      explanation: "Med felles faktor i modulene er løsningen entydig modulo minste felles multiplum, ikke modulo produktet. Å bruke $432$ gir seks ganger for få løsninger i hvert intervall.",
    },
    {
      question: "Hvorfor må RSA-korrektheten bevises i to tilfeller?",
      options: ["Fordi Eulers teorem krever $\\gcd(m,n)=1$, som ikke alle $m$ har", "Fordi $e$ og $d$ må behandles hver for seg i hele beviset", "Fordi meldingen kan være både mindre og større enn modulusen $n$", "Fordi $p$ og $q$ gir ulike rester som må settes sammen til slutt"],
      explanation: "Er $\\gcd(m,n)\\ne 1$, deler ett av primtallene meldingen, og da må argumentet gå via Fermat modulo det andre primtallet pluss det kinesiske restteoremet. Meldinger er per definisjon mindre enn $n$, og $e$ og $d$ opptrer bare gjennom produktet $ed$.",
    },
    {
      question: "Hvor mange potenser må testes for å vise at $2$ er en primitiv rot modulo $61$?",
      options: ["Tre — én for hver primdivisor i $\\phi(61)=60$", "Elleve — én for hver ekte divisor av $\\phi(61)=60$", "En — det holder å vise at $2^{60}\\equiv 1$ modulo $61$", "Seksti — hele syklusen må skrives ut for å se ordenen"],
      explanation: "Primdivisortesten krever $a^{\\phi(n)/q}\\not\\equiv 1$ for hver primdivisor $q$, altså eksponentene $30$, $20$ og $12$. At $2^{60}\\equiv 1$ følger av Fermat for alle tall og skiller ingenting, og hele syklusen er unødvendig dyr.",
    },
  ],
  'ma1301-8-4': [
    {
      question: "Hvor ofte forekommer spesialtemaene i frekvensgrunnlaget på 15 løsningsforslag?",
      options: ["Kjedebrøk i 2 av 15 sett og pytagoreiske tripler i 3 av 15", "Kjedebrøk i 8 av 15 sett og pytagoreiske tripler i 7 av 15", "Begge i omtrent halvparten av settene, som de øvrige sjangrene", "Ingen av dem forekommer, så de er utenfor pensum i emnet"],
      explanation: "Kjedebrøk er belagt i 2 av 15 sett (~13 %) og pytagoreiske tripler i 3 av 15 (20 %); Pells likning i $0$ av $15$. Temaene er likevel pensum, og de var faste i årgangene 2007–2009 før kjedebrøk gjenoppsto i 2016.",
    },
    {
      question: "Hvorfor må kateten $35$ være $y$ og ikke $x$ i parametriseringen $x=2st$, $y=s^2-t^2$?",
      options: ["Fordi $x=2st$ alltid er et partall, og $35$ er et oddetall", "Fordi $x$ alltid er den største av de to katetene", "Fordi $y$ er den eneste kateten som kan være et primtallsprodukt", "Fordi $s$ og $t$ er valgt slik at $x$ blir delelig med $4$"],
      explanation: "Faktoren $2$ i $x=2st$ gjør $x$ til et partall uansett valg av parametre, så et odde kateten må være $y=s^2-t^2$. At $4\\mid x$ er sant i tillegg, men det er ikke grunnen — og $x$ er ikke alltid størst.",
    },
    {
      question: "Hva er kontrollen på at kjedebrøkperioden til $\\sqrt D$ er ferdig?",
      options: ["Siste ledd i perioden er $2a_0$, og raden gjentar seg", "Siste ledd i perioden er $a_0$, altså heltallsdelen selv", "Nevneren $d_k$ i hjelpetabellen blir lik null", "Konvergenten $p_n/q_n$ treffer $\\sqrt D$ eksakt"],
      explanation: "For $\\sqrt D$ slutter perioden alltid med leddet $2a_0$, og hjelperaden $(m_k,d_k,a_k)$ gjentar en tidligere rad. Nevneren blir aldri null, og en konvergent kan aldri bli eksakt lik et irrasjonalt tall.",
    },
    {
      question: "Hva er den minste $n_0$ slik at $2^n>n^3$ for alle $n\\ge n_0$?",
      options: ["$10$, siden ulikheten brytes for $n=2,\\dots,9$", "$1$, siden $2^1=2$ er større enn $1^3=1$", "$5$, som er startverdien i den tilsvarende kvadrat-ulikheten", "$4$, der de to sidene er nærmest hverandre i verdi"],
      explanation: "Ulikheten holder for $n=1$, men brytes fra $n=2$ til $n=9$ — og spørsmålet gjelder alle $n\\ge n_0$. Fra $n=10$ ($1024>1000$) holder den for godt, som induksjonssteget viser.",
    },
    {
      question: "Hva er umulighetssetningen i beviset for uendelig mange primtall $\\equiv 5\\pmod 6$?",
      options: ["At $q$ måtte dele differansen $1$, altså $q\\mid 1$ for et primtall", "At $N$ selv måtte være et primtall større enn alle på listen", "At $N$ ikke kunne være delelig med hverken $2$ eller $3$", "At produktet av tall $\\equiv 1\\pmod 6$ selv er $\\equiv 1\\pmod 6$"],
      explanation: "Sto $q$ på listen, ville den delt både produktet og $N$, altså differansen $1$ — umulig for et primtall. At $N$ er odde og ikke delelig med $3$, og produktargumentet modulo $6$, er nødvendige mellomsteg, ikke motsigelsen; og $N$ behøver ikke være et primtall.",
    },
  ],
};

export default quizData_ma1301;
