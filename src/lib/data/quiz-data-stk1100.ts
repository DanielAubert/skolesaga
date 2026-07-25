import type { QuizQuestion } from './quiz-data';

const quizData_stk1100: Record<string, QuizQuestion[]> = {
  'stk1100-0-1': [
    {
      question: "Hvordan er STK1100-skoleeksamen bygd opp?",
      options: ["Tre til fire store fortellingsoppgaver over fire timer, uten kortsvars- eller flervalgsdel", "En kort flervalgsdel etterfulgt av to store regneoppgaver med automatisk retting i Inspera", "Ti korte kortsvarsoppgaver som hver rettes for seg helt uten sammenhengende utledning underveis", "En muntlig del og en skriftlig del som teller nøyaktig like mye i den endelige sluttkarakteren"],
      explanation: "Skoleeksamen er fire timer med 3–4 store fortellingsoppgaver (hver med flere deloppgaver). Kortsvars-/flervalgsformen ligger i midtveiseksamenen, ikke her.",
    },
    {
      question: "Hva er «kjeden» som bærer 60–70 % av poengene på STK1100?",
      options: ["Fordeling → estimator → egenskaper → gamma/kjikvadrat-pivot → eksakt konfidensintervall", "Nullhypotese → testobservator → p-verdi → konklusjon → beregning av teststyrken ved gitt utvalg", "Datainnsamling → histogram → boksplott → Q-Q-plott → tolkning av residualene fra en modell", "Kombinatorikk → utfallsrom → betinget sannsynlighet → forventning → estimert standardavvik"],
      explanation: "Ryggraden er estimerings-kjeden fra fordeling til eksakt pivotal-KI, gjentatt nesten hvert år. De øvrige beskriver temaer som ikke er på STK1100-eksamen.",
    },
    {
      question: "Hvilket tema er bevisst utelatt fra STK1100-eksamen fordi det hører til STK1110?",
      options: ["Hypotesetesting med nullhypoteser, p-verdier og teststyrke, fraværende i alle ti settene", "Transformasjon av variable med CDF-metoden og Jacobi, som brukes i om lag ni av ti settene", "Simultantetthet med marginaler og uavhengighetssjekk, som er en egen stor oppgave nesten hvert år", "Gammafordelingen og identiteten som knytter kjikvadrat til gamma, byggeklossen i alle pivotalene"],
      explanation: "Hypotesetesting, kombinatorikk og ordningsvariable er 0/10 på STK1100 og ligger i STK1110. De tre andre er høyfrekvente kjernetemaer i boka.",
    },
    {
      question: "Hvilke to temaer forekommer i samtlige ti sett (100 %)?",
      options: ["Forventning/varians med regneregler for lineærkombinasjoner, og konfidensintervall", "Enkel lineær regresjon med minste kvadrater, og kombinatoriske utvalgs-telleoppgaver", "Betinget forventning og prediksjon av Y, og fordelingen til minimum og maksimum", "Kovarians og korrelasjon i binormalfordelingen, og hypotesetesting med teststyrke"],
      explanation: "Forventning/varians/lineærkombinasjoner og konfidensintervall er begge 10/10. De andre alternativene er enten lavfrekvente (20–30 %) eller utenfor pensum.",
    },
    {
      question: "Hva kjennetegner sjanger G, kjerneoppgaven på STK1100?",
      options: ["Å bygge en estimator fra data og et eksakt konfidensintervall via en gamma/kjikvadrat-pivot", "Å definere hendelser med symboler og regne total sannsynlighet og Bayes' formel baklengs igjen", "Å skrive kjørbar Python-kode som trekker mange utvalg og anslår standardfeilen rent numerisk", "Å finne marginaltettheter fra en simultantetthet og avgjøre uavhengighet ved å faktorisere den"],
      explanation: "Sjanger G er estimering + eksakt pivotal-KI — den tunge oppgaven i nesten hvert sett. De andre beskriver sjangrene A, I og D.",
    },
    {
      question: "Hvordan krever sensor at du beviser uavhengighet mellom to kontinuerlige variable?",
      options: ["Ved å vise at simultantettheten faktoriserer som produktet av marginalene for alle punkter", "Ved å argumentere intuitivt for at de to variablene ikke ser ut til å påvirke hverandre her", "Ved å regne ut kovariansen og slå fast uavhengighet straks kovariansen viser seg å bli null", "Ved å sjekke faktoriseringen bare der tettheten er positiv og se helt bort fra null-området"],
      explanation: "Uavhengighet bevises ved at f(x,y) er lik produktet av marginalene f_X(x) og f_Y(y) for ALLE (x,y), også null-området. Intuisjon holder ikke, og ukorrelert medfører ikke uavhengig.",
    },
    {
      question: "Hva bør du prioritere når formelsamlingen for STK1100/STK1110 er tillatt?",
      options: ["Å velge riktig fordeling og pivot og utlede det som ikke står der, framfor å pugge katalogen", "Å pugge hver fordelings tetthet, forventning og varians utenat så du aldri trenger oppslaget", "Å memorere kvantiltabellene for normal og kjikvadrat så du kan gjengi dem uten å slå opp der", "Å lære utledningen av gammafunksjonens egenskaper utenat siden de nesten aldri står oppført"],
      explanation: "Fordi katalogen og tabellene ligger på pulten, testes valg, bruk og utledning (ML, pivotaler, transformasjoner) — ikke pugging.",
    },
    {
      question: "Hva betyr karakteren C på STK1100?",
      options: ["En god og vanlig karakter — midtpunktet på A–F-skalaen, som de fleste kandidatene oppnår", "En så vidt bestått karakter like over strykgrensen, som viser klare mangler i besvarelsen", "En karakter forbeholdt de aller beste besvarelsene med fullstendige og eksakte utledninger", "En ikke bestått karakter som betyr at kandidaten må ta hele eksamensdagen på nytt senere"],
      explanation: "C er god og vanlig — selve midtpunktet på skalaen. På STK1100 nås C–B med ML, forventningsretthet/varians og et standard konfidensintervall.",
    },
    {
      question: "Hvilken planleggingsfeil koster typisk flest poeng på STK1100?",
      options: ["Å øve bare på sannsynlighetsdelen og møte veggen på den tunge estimerings-kjeden i oppgave 3", "Å begynne med den oppgaven man føler seg tryggest på for å sikre de enkle poengene tidlig", "Å sette et fornuftig tak på tiden per oppgave og gå videre når man står fast på ett delpunkt", "Å lese oppgaveteksten to ganger for å få med seg hvilken parametrisering som faktisk er brukt"],
      explanation: "Kjeden bærer 60–70 % av poengene, så å hoppe over den er dyrt. De tre andre er gode vaner, ikke feil.",
    },
    {
      question: "Hva skiller en A-besvarelse fra en C–B-besvarelse på STK1100?",
      options: ["Eksakte pivotal-utledninger, gamma/kjikvadrat-identifikasjon og transformasjonsbevis", "Ryddig regning på Bayes, standardisering og median, som utgjør åpningsdelene av oppgavene", "Å sette opp likelihood, vise forventningsretthet og oppgi et helt standard konfidensintervall", "Å definere alle hendelser med egne symboler og huske å oppgi tallsvar med enhet og tolkning"],
      explanation: "A-nivået ligger i de eksakte pivotalene, gamma/kjikvadrat-identifikasjonene, transformasjonsbevisene og simulering med korrekt kode. De andre er bestått- og C–B-ferdigheter.",
    },
  ],
  'stk1100-1-1': [
    {
      question: "Hva er den korrekte definisjonen av betinget sannsynlighet $P(A \\mid B)$?",
      options: ["$P(A \\cap B) / P(B)$", "$P(A \\cap B) / P(A)$", "$P(A) \\cdot P(B)$", "$P(A) + P(B) - P(A \\cap B)$"],
      explanation: "Betinget sannsynlighet er snittet delt på sannsynligheten for betingelsen $B$. De to siste er produkt- og addisjonsregelen.",
    },
    {
      question: "Multiplikasjonsregelen sier at $P(A \\cap B)$ er lik:",
      options: ["$P(B)\\,P(A \\mid B)$", "$P(A) + P(B \\mid A)$", "$P(A \\mid B)\\,/\\,P(B)$", "$P(A)\\,P(B)$ alltid"],
      explanation: "Snittet er $P(B)P(A \\mid B)$ (eller $P(A)P(B \\mid A)$). Produktet $P(A)P(B)$ gjelder kun ved uavhengighet.",
    },
    {
      question: "To hendelser $A$ og $B$ er uavhengige hvis og bare hvis:",
      options: ["$P(A \\cap B) = P(A)\\,P(B)$", "$P(A \\cap B) = 0$", "$P(A \\mid B) = P(B \\mid A)$", "$P(A) + P(B) = 1$"],
      explanation: "Uavhengighet betyr at snittet faktoriserer. $P(A \\cap B) = 0$ er derimot disjunkthet (uforenlige hendelser).",
    },
    {
      question: "Loven om total sannsynlighet for en partisjon $A_1, \\ldots, A_k$ gir $P(B) =$",
      options: ["$\\sum_i P(B \\mid A_i)\\,P(A_i)$", "$\\sum_i P(A_i \\mid B)\\,P(B)$", "$\\prod_i P(B \\mid A_i)$", "$\\sum_i P(B \\mid A_i)$"],
      explanation: "Vi vekter hver betinget sannsynlighet med sannsynligheten for sin del av partisjonen og summerer.",
    },
    {
      question: "I Bayes' formel $P(A_j \\mid B) = P(B \\mid A_j)P(A_j)/P(B)$ er nevneren $P(B)$ lik:",
      options: ["$\\sum_i P(B \\mid A_i)\\,P(A_i)$", "$P(B \\mid A_j)$ alene", "$P(A_j)$", "$P(B \\mid A_j)\\,P(A_j)$"],
      explanation: "Nevneren er total sannsynlighet — summen over hele partisjonen, ikke bare leddet i telleren.",
    },
    {
      question: "Sensitiviteten til en diagnosetest er:",
      options: ["$P(T \\mid S)$", "$P(S \\mid T)$", "$P(T^c \\mid S^c)$", "$P(S)$"],
      explanation: "Sensitivitet er sann positiv-rate, $P(T \\mid S)$. $P(S \\mid T)$ er PPV, $P(T^c \\mid S^c)$ er spesifisitet.",
    },
    {
      question: "Spesifisiteten til en diagnosetest er:",
      options: ["$P(T^c \\mid S^c)$", "$P(T \\mid S)$", "$P(S^c \\mid T^c)$", "$P(T \\mid S^c)$"],
      explanation: "Spesifisitet er sann negativ-rate, $P(T^c \\mid S^c)$. $P(T \\mid S^c)$ er falsk positiv-rate.",
    },
    {
      question: "Prevalensen i en diagnosetest svarer til:",
      options: ["$P(S)$, forhåndssannsynligheten", "$P(S \\mid T)$, etter testen", "$P(T)$, andel positive", "$1 - P(S)$, andel friske"],
      explanation: "Prevalens er hvor vanlig tilstanden er før testen, altså $P(S)$.",
    },
    {
      question: "Den positive prediktive verdien (PPV) er:",
      options: ["$P(S \\mid T)$", "$P(T \\mid S)$", "$P(T^c \\mid S^c)$", "$P(T \\mid S^c)$"],
      explanation: "PPV er sannsynligheten for tilstand gitt positiv test, $P(S \\mid T)$ — det Bayes' formel regner ut.",
    },
    {
      question: "Falsk positiv-raten uttrykkes ved spesifisiteten som:",
      options: ["$1 - \\text{spesifisitet}$", "$1 - \\text{sensitivitet}$", "lik spesifisiteten", "lik prevalensen"],
      explanation: "Falsk positiv-rate er $P(T \\mid S^c) = 1 - P(T^c \\mid S^c) = 1 - \\text{spesifisitet}$.",
    },
    {
      question: "Hvorfor kan PPV bli lav selv med en svært god test?",
      options: ["Fordi lav prevalens gir langt flere falske positive enn sanne positive", "Fordi sensitiviteten alltid synker under femti prosent ved sjeldne tilstander", "Fordi spesifisiteten automatisk faller når prevalensen i befolkningen synker", "Fordi en test slutter å fungere når tilstanden den leter etter er sjelden"],
      explanation: "Ved lav prevalens er de friske så mange at deres få falske positive dominerer de sanne positive.",
    },
    {
      question: "En test har $P(\\text{positiv} \\mid \\text{syk}) = 0{,}95$. Hva er $P(\\text{syk} \\mid \\text{positiv})$?",
      options: ["Kan ikke avgjøres uten å kjenne prevalensen og spesifisiteten også", "Også $0{,}95$, fordi betingede sannsynligheter er symmetriske", "$1 - 0{,}95 = 0{,}05$, ved komplementregelen for testen", "Alltid høyere enn $0{,}95$, fordi en positiv test styrker mistanken"],
      explanation: "$P(A \\mid B)$ og $P(B \\mid A)$ er ulike; å snu betingelsen krever Bayes med prevalens og falsk positiv-rate.",
    },
    {
      question: "Med $P(S) = 0{,}02$, hva er $P(S^c)$?",
      options: ["$0{,}98$", "$0{,}02$", "$0{,}50$", "$1{,}02$"],
      explanation: "Komplementregelen: $P(S^c) = 1 - P(S) = 1 - 0{,}02 = 0{,}98$.",
    },
    {
      question: "To maskiner: A lager 60 % (defekt 2 %), B lager 40 % (defekt 5 %). $P(\\text{defekt}) =$",
      options: ["$0{,}032$", "$0{,}070$", "$0{,}035$", "$0{,}012$"],
      explanation: "Total sannsynlighet: $0{,}02 \\cdot 0{,}6 + 0{,}05 \\cdot 0{,}4 = 0{,}012 + 0{,}020 = 0{,}032$.",
    },
    {
      question: "Med tallene over: en defekt enhet er trukket. $P(\\text{fra A} \\mid \\text{defekt}) =$",
      options: ["$0{,}375$", "$0{,}600$", "$0{,}020$", "$0{,}625$"],
      explanation: "Bayes: $0{,}012 / 0{,}032 = 0{,}375$. Alternativet $0{,}625$ er $P(\\text{fra B} \\mid \\text{defekt})$.",
    },
    {
      question: "Ved oppdatering over to uavhengige tester bruker vi:",
      options: ["Svaret fra runde 1 (a posteriori) som forhåndssannsynlighet i runde 2", "Den opprinnelige prevalensen i begge runder, uansett hva runde 1 ga", "Produktet av de to testenes sensitiviteter som endelig svar", "Gjennomsnittet av de to rundenes testresultater som endelig svar"],
      explanation: "Hver ny observasjon oppdaterer: gårsdagens a posteriori blir dagens a priori.",
    },
    {
      question: "Forskjellen på disjunkte og uavhengige hendelser er at:",
      options: ["Disjunkte kan ikke skje samtidig, mens uavhengige ikke påvirker hverandre", "Disjunkte og uavhengige hendelser betyr nøyaktig det samme i praksis", "Uavhengige hendelser har alltid snitt lik null og kan ikke skje sammen", "Disjunkte hendelser har alltid snitt lik produktet av marginalsannsynlighetene"],
      explanation: "Disjunkthet ($P(A \\cap B) = 0$) er faktisk sterk avhengighet, ikke uavhengighet.",
    },
    {
      question: "Hvorfor krever sensor at hendelsene defineres med symboler før regning?",
      options: ["For at hver betingede sannsynlighet skal bli entydig og mulig å etterprøve", "Fordi det gir ekstra uttelling helt uavhengig av om tallsvaret er riktig", "Fordi Bayes' formel ikke kan brukes i det hele tatt uten navngitte hendelser", "Fordi kombinatorikk krever navngitte utfall for å telle gunstige og mulige"],
      explanation: "Klart definerte hendelser hindrer forveksling av $P(A \\mid B)$ og $P(B \\mid A)$ og gjør utregningen etterprøvbar.",
    },
    {
      question: "At to tester er «uavhengige gitt tilstanden» betyr:",
      options: ["$P(T_1 \\cap T_2 \\mid S) = P(T_1 \\mid S)\\,P(T_2 \\mid S)$", "$P(T_1 \\cap T_2) = P(T_1)\\,P(T_2)$ ubetinget", "De to testene gir alltid samme resultat", "Testene har lik sensitivitet og spesifisitet"],
      explanation: "Betinget uavhengighet lar oss gange sannsynlighetene innenfor hver tilstandsgruppe når vi oppdaterer.",
    },
    {
      question: "Hva er den negative prediktive verdien (NPV)?",
      options: ["$P(S^c \\mid T^c)$ — sannsynligheten for å være frisk gitt en negativ test", "$P(T^c \\mid S^c)$ — spesifisiteten, altså sann negativ-rate blant friske", "$P(T \\mid S^c)$ — falsk positiv-raten blant de som ikke har tilstanden", "$1 - P(S \\mid T)$ — komplementet av den positive prediktive verdien PPV"],
      explanation: "NPV er $P(S^c \\mid T^c)$ og er som regel svært høy ved lav prevalens.",
    },
  ],
  'stk1100-1-2': [
    {
      question: "For en kontinuerlig stokastisk variabel $X$ gjelder at $P(X = x)$ er:",
      options: ["$0$ for enhver enkeltverdi $x$", "lik tettheten $f(x)$", "alltid mellom 0 og 1 men positiv", "lik $F(x)$ i punktet"],
      explanation: "For kontinuerlig $X$ har et enkeltpunkt areal 0, så $P(X = x) = 0$. Tettheten er ikke en sannsynlighet.",
    },
    {
      question: "Sannsynlighetstettheten $f(x)$ for en kontinuerlig variabel:",
      options: ["kan være større enn 1, fordi den ikke selv er en sannsynlighet", "må alltid være mindre enn eller lik 1, som en vanlig sannsynlighet", "er lik punktsannsynligheten $P(X = x)$ i hvert enkelt punkt", "summerer til 1 når man legger sammen $f(x)$ over alle verdier $x$"],
      explanation: "Det er arealet $\\int f$ som er 1 og gir sannsynligheter; $f(x)$ selv kan overstige 1.",
    },
    {
      question: "Fordelingsfunksjonen er definert som:",
      options: ["$F(x) = P(X \\le x)$", "$F(x) = P(X = x)$", "$F(x) = P(X \\ge x)$", "$F(x) = f'(x)$"],
      explanation: "$F(x) = P(X \\le x)$; den er voksende fra 0 til 1, og for kontinuerlig $X$ er $F' = f$.",
    },
    {
      question: "Forventningen til en diskret variabel er:",
      options: ["$E(X) = \\sum_x x\\,p(x)$", "$E(X) = \\sum_x p(x)$", "$E(X) = \\sum_x x^2\\,p(x)$", "$E(X) = \\max_x p(x)$"],
      explanation: "Forventningen er det sannsynlighetsvektede snittet av verdiene.",
    },
    {
      question: "Regneformelen for varians er:",
      options: ["$\\text{Var}(X) = E(X^2) - [E(X)]^2$", "$\\text{Var}(X) = [E(X)]^2 - E(X^2)$", "$\\text{Var}(X) = E(X^2) - E(X)$", "$\\text{Var}(X) = E(X) - [E(X)]^2$"],
      explanation: "Andre moment minus kvadratet av forventningen. Rekkefølgen er viktig — svaret må bli positivt.",
    },
    {
      question: "Standardavviket er:",
      options: ["kvadratroten av variansen", "kvadratet av variansen", "variansen delt på forventningen", "forventningen minus variansen"],
      explanation: "$\\text{SD}(X) = \\sqrt{\\text{Var}(X)}$ — samme enhet som $X$ selv.",
    },
    {
      question: "Regelen $E(aX + bY) = aE(X) + bE(Y)$ gjelder:",
      options: ["alltid, uten antakelse om uavhengighet", "bare når $X$ og $Y$ er uavhengige", "bare når $X$ og $Y$ er ukorrelerte", "bare når $a = b$"],
      explanation: "Forventning er alltid lineær, uansett avhengighet mellom variablene.",
    },
    {
      question: "For $\\text{Var}(aX + bY)$ med avhengige variable gjelder:",
      options: ["$a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\,\\text{Cov}(X,Y)$", "$a\\,\\text{Var}(X) + b\\,\\text{Var}(Y)$", "$a^2\\text{Var}(X) + b^2\\text{Var}(Y)$", "$a^2\\text{Var}(X) - b^2\\text{Var}(Y)$"],
      explanation: "Koeffisientene kvadreres, og krysleddet $2ab\\,\\text{Cov}$ må med når variablene ikke er ukorrelerte.",
    },
    {
      question: "$\\text{Var}(X - Y)$ er lik:",
      options: ["$\\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X,Y)$", "$\\text{Var}(X) - \\text{Var}(Y)$", "$\\text{Var}(X) - \\text{Var}(Y) + 2\\text{Cov}(X,Y)$", "$\\text{Var}(X) + \\text{Var}(Y)$ alltid"],
      explanation: "Med $b = -1$ er $b^2 = 1$: variansene legges sammen, bare krysleddet skifter fortegn.",
    },
    {
      question: "Kovariansens regneformel er:",
      options: ["$\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$", "$\\text{Cov}(X,Y) = E(XY) + E(X)E(Y)$", "$\\text{Cov}(X,Y) = E(X)E(Y) - E(XY)$", "$\\text{Cov}(X,Y) = E(X^2) - E(Y)^2$"],
      explanation: "Produktmomentet minus produktet av forventningene.",
    },
    {
      question: "Korrelasjonskoeffisienten $\\rho$ ligger alltid:",
      options: ["mellom $-1$ og $1$", "mellom $0$ og $1$", "mellom $-1$ og $0$", "over $0$ for alle variabler"],
      explanation: "$\\rho = \\text{Cov}/\\sqrt{\\text{Var}(X)\\text{Var}(Y)}$ er normert til intervallet $[-1, 1]$.",
    },
    {
      question: "Sammenhengen mellom uavhengig og ukorrelert er:",
      options: ["uavhengig medfører ukorrelert, men ikke omvendt", "ukorrelert medfører uavhengig, men ikke omvendt", "de to betyr alltid det samme", "de utelukker hverandre"],
      explanation: "Uavhengighet gir alltid kovarians 0; men kovarians 0 kan forekomme for avhengige variable (kun lineær samvariasjon måles).",
    },
    {
      question: "En variabel har $E(X) = 1{,}7$ og $E(X^2) = 3{,}7$. Da er $\\text{Var}(X) =$",
      options: ["$0{,}81$", "$2{,}00$", "$3{,}70$", "$6{,}59$"],
      explanation: "$\\text{Var}(X) = 3{,}7 - 1{,}7^2 = 3{,}7 - 2{,}89 = 0{,}81$.",
    },
    {
      question: "Hvis $E(X) = 4$ og $\\text{Var}(X) = 9$, hva er $\\text{Var}(2X + 5)$?",
      options: ["$36$", "$18$", "$23$", "$41$"],
      explanation: "$\\text{Var}(aX + b) = a^2\\text{Var}(X) = 4 \\cdot 9 = 36$; konstantleddet forsvinner.",
    },
    {
      question: "Med $E(X) = 4$: hva er $E(2X + 5)$?",
      options: ["$13$", "$8$", "$9$", "$28$"],
      explanation: "$E(aX + b) = aE(X) + b = 2 \\cdot 4 + 5 = 13$.",
    },
    {
      question: "$X$ og $Y$ er uavhengige med $\\text{Var}(X) = 2$, $\\text{Var}(Y) = 3$. Da er $\\text{Var}(X + Y) =$",
      options: ["$5$", "$1$", "$6$", "$13$"],
      explanation: "Ved uavhengighet er $\\text{Cov} = 0$, så $\\text{Var}(X+Y) = 2 + 3 = 5$.",
    },
    {
      question: "$E[g(X)]$ for en funksjon $g$ av en kontinuerlig $X$ regnes som:",
      options: ["$\\int g(x)\\,f(x)\\,dx$", "$g\\big(\\int x f(x)\\,dx\\big)$", "$\\int g(x)\\,dx$", "$g(E(X))$ alltid"],
      explanation: "Vi vekter $g(x)$ med tettheten. Generelt er $E[g(X)] \\ne g(E(X))$.",
    },
    {
      question: "At variansen alltid er $\\ge 0$ brukes som:",
      options: ["en kontroll — et negativt variansresultat avslører en regnefeil", "selve definisjonen av standardavviket som kvadratrot av variansen", "en nødvendig og tilstrekkelig betingelse for at variable er uavhengige", "en egenskap som bare gjelder for diskrete, ikke kontinuerlige, variable"],
      explanation: "En varians kan ikke være negativ; får du det, har du regnet feil (typisk glemt kvadrat eller krysledd).",
    },
    {
      question: "Skalering av kovarians: $\\text{Cov}(aX + b, cY + d) =$",
      options: ["$ac\\,\\text{Cov}(X,Y)$", "$(a + c)\\,\\text{Cov}(X,Y)$", "$ac\\,\\text{Cov}(X,Y) + bd$", "$abcd\\,\\text{Cov}(X,Y)$"],
      explanation: "Bare skaleringsfaktorene $a, c$ overlever; konstantleddene $b, d$ påvirker ikke samvariasjonen.",
    },
    {
      question: "$\\text{Cov}(X, X)$ er lik:",
      options: ["$\\text{Var}(X)$", "$0$ alltid", "$1$", "$E(X)^2$"],
      explanation: "Kovariansen av en variabel med seg selv er variansen.",
    },
    {
      question: "Hvis $X$ og $Y$ er ukorrelerte, hva kan vi konkludere?",
      options: ["At $\\text{Cov}(X,Y) = 0$, men de kan fortsatt være avhengige", "At $X$ og $Y$ da nødvendigvis også må være uavhengige variable", "At $\\text{Var}(X + Y) = \\text{Var}(X) - \\text{Var}(Y)$ ved subtraksjon", "At korrelasjonen $\\rho = 1$, altså perfekt lineær sammenheng"],
      explanation: "Ukorrelert betyr $\\text{Cov} = 0$; det utelukker lineær, men ikke all, samvariasjon.",
    },
    {
      question: "En kontinuerlig $X$ har $f(x) = \\tfrac{1}{2}x$ på $[0,2]$. Da er $E(X) =$",
      options: ["$4/3$", "$1$", "$1/2$", "$2$"],
      explanation: "$E(X) = \\int_0^2 x \\cdot \\tfrac{1}{2}x\\,dx = \\tfrac{1}{2}\\cdot\\tfrac{8}{3} = 4/3$.",
    },
    {
      question: "Standardisering av $X$ gir en variabel $Z = (X - \\mu)/\\sigma$ med:",
      options: ["forventning 0 og varians 1", "forventning 1 og varians 0", "forventning $\\mu$ og varians $\\sigma^2$", "forventning 0 og varians $\\sigma$"],
      explanation: "Å trekke fra $\\mu$ nuller ut forventningen, og å dele på $\\sigma$ gjør variansen 1.",
    },
    {
      question: "Hvis $Y = X^2$ og $X$ er symmetrisk om 0, kan $X$ og $Y$ være:",
      options: ["ukorrelerte men avhengige", "både uavhengige og ukorrelerte", "perfekt positivt korrelerte", "uavhengige men korrelerte"],
      explanation: "$\\text{Cov}(X, X^2) = 0$ ved symmetri, men $Y$ er bestemt av $X$, altså sterkt avhengig.",
    },
    {
      question: "Det andre momentet $E(X^2)$ oppfyller alltid:",
      options: ["$E(X^2) \\ge [E(X)]^2$", "$E(X^2) \\le [E(X)]^2$", "$E(X^2) = [E(X)]^2$", "$E(X^2) = E(X)$"],
      explanation: "Siden $\\text{Var}(X) = E(X^2) - [E(X)]^2 \\ge 0$, må $E(X^2) \\ge [E(X)]^2$.",
    },
  ],
  'stk1100-1-3': [
    {
      question: "Nøkkelspørsmålet for å skille binomisk fra Poisson er:",
      options: ["Er antall forsøk fast på forhånd?", "Er suksesssannsynligheten større enn 0,5?", "Er variabelen diskret eller kontinuerlig?", "Er forventningen kjent?"],
      explanation: "Fast antall forsøk peker mot binomisk; hendelser fritt i et intervall peker mot Poisson.",
    },
    {
      question: "Den binomiske punktsannsynligheten er:",
      options: ["$\\binom{n}{k}p^k(1-p)^{n-k}$", "$\\binom{n}{k}p^{n-k}(1-p)^k$", "$p^k(1-p)^{n-k}$", "$\\frac{\\mu^k e^{-\\mu}}{k!}$"],
      explanation: "$\\binom{n}{k}$ teller plasseringene av de $k$ suksessene; $\\frac{\\mu^k e^{-\\mu}}{k!}$ er Poisson-punktsannsynligheten.",
    },
    {
      question: "For $X \\sim \\text{bin}(n, p)$ er forventning og varians:",
      options: ["$E(X) = np$, $\\text{Var}(X) = np(1-p)$", "$E(X) = np(1-p)$, $\\text{Var}(X) = np$", "$E(X) = np$, $\\text{Var}(X) = np$", "$E(X) = p$, $\\text{Var}(X) = p(1-p)$"],
      explanation: "Summen av $n$ Bernoulli-forsøk gir $E = np$ og $\\text{Var} = np(1-p)$.",
    },
    {
      question: "Poisson-punktsannsynligheten er:",
      options: ["$\\frac{\\mu^k e^{-\\mu}}{k!}$", "$\\frac{\\mu^k e^{\\mu}}{k!}$", "$\\mu^k e^{-\\mu}$", "$\\binom{n}{k}\\mu^k(1-\\mu)^{n-k}$"],
      explanation: "Merk minustegnet i $e^{-\\mu}$ og delingen på $k!$.",
    },
    {
      question: "For $X \\sim \\text{Poisson}(\\mu)$ gjelder for forventning og varians at:",
      options: ["$E(X) = \\text{Var}(X) = \\mu$", "$E(X) = \\mu$, $\\text{Var}(X) = \\mu^2$", "$E(X) = \\mu$, $\\text{Var}(X) = \\sqrt{\\mu}$", "$E(X) = \\mu^2$, $\\text{Var}(X) = \\mu$"],
      explanation: "Et kjennetegn på Poisson er at forventning og varians er like.",
    },
    {
      question: "I en Poisson-prosess med rate $\\lambda$ er forventet antall i et intervall $t$:",
      options: ["$\\lambda t$", "$\\lambda$", "$\\lambda / t$", "$\\lambda + t$"],
      explanation: "Raten skaleres med intervallstørrelsen: $\\mu = \\lambda t$.",
    },
    {
      question: "Hvilken av disse er IKKE en forutsetning for en Poisson-prosess?",
      options: ["Suksesssannsynligheten er større enn 0,5", "Antall hendelser i disjunkte intervaller er uavhengige", "Raten er konstant over intervallet", "To hendelser skjer ikke i samme punkt"],
      explanation: "«Suksesssannsynlighet» hører til den binomiske modellen; Poisson bygger på de tre andre.",
    },
    {
      question: "Rate 3 per time. Forventet antall i et kvarter (15 min) er:",
      options: ["$0{,}75$", "$3$", "$45$", "$12$"],
      explanation: "Skaler: $\\mu = \\lambda t = 3 \\cdot 0{,}25 = 0{,}75$. Å bruke 3 direkte er den vanlige feilen.",
    },
    {
      question: "For Poisson$(\\mu)$ er $P(X = 0)$ lik:",
      options: ["$e^{-\\mu}$", "$1 - \\mu$", "$\\mu e^{-\\mu}$", "$e^{\\mu}$"],
      explanation: "Sett $k = 0$: $\\mu^0 e^{-\\mu}/0! = e^{-\\mu}$.",
    },
    {
      question: "Sannsynligheten for minst én hendelse regnes enklest som:",
      options: ["$1 - P(X = 0)$", "$P(X = 1)$", "$1 - P(X = 1)$", "summen av alle $P(X = k)$"],
      explanation: "Komplementgrepet: «minst én» er 1 minus «ingen».",
    },
    {
      question: "For å finne hvor stort intervall $t$ som gir $P(X \\ge 1) > p_0$ løser vi:",
      options: ["$t > -\\ln(1 - p_0)/\\lambda$", "$t > \\ln(1 - p_0)/\\lambda$", "$t > (1 - p_0)/\\lambda$", "$t > \\lambda/\\ln(p_0)$"],
      explanation: "Fra $1 - e^{-\\lambda t} > p_0$ følger $t > -\\ln(1 - p_0)/\\lambda$ (husk å snu tegnet ved logaritmen).",
    },
    {
      question: "Den geometriske fordelingen (antall forsøk til første suksess) har:",
      options: ["$P(X = k) = (1-p)^{k-1}p$", "$P(X = k) = p^{k-1}(1-p)$", "$P(X = k) = \\binom{k}{1}p(1-p)^{k-1}$", "$P(X = k) = (1-p)^k p$"],
      explanation: "Vi må mislykkes $k-1$ ganger og så lykkes: $(1-p)^{k-1}p$.",
    },
    {
      question: "For $X \\sim \\text{geometrisk}(p)$ er $E(X) =$",
      options: ["$1/p$", "$p$", "$1 - p$", "$p/(1-p)$"],
      explanation: "Forventet ventetid til første suksess er $1/p$; med $p = 0{,}25$ blir det 4.",
    },
    {
      question: "Summen av to uavhengige Poisson-variable med forventning $\\mu_1$ og $\\mu_2$ er:",
      options: ["Poisson med forventning $\\mu_1 + \\mu_2$", "Poisson med forventning $\\mu_1 \\mu_2$", "binomisk med parametre $\\mu_1, \\mu_2$", "ikke lenger en kjent fordeling"],
      explanation: "Poisson er lukket under summering: forventningene legges sammen.",
    },
    {
      question: "Binomisk$(n, p)$ med stor $n$ og liten $p$ tilnærmes godt av:",
      options: ["Poisson med $\\mu = np$", "Poisson med $\\mu = n$", "geometrisk med $p$", "normal med $\\mu = p$"],
      explanation: "Mange forsøk med sjelden suksess gir Poisson-tilnærming, $\\mu = np$.",
    },
    {
      question: "En behandling virker hos 30 %, ti pasienter, $X$ = antall som blir bra. $E(X) =$",
      options: ["$3$", "$2{,}1$", "$0{,}3$", "$7$"],
      explanation: "$X \\sim \\text{bin}(10; 0{,}3)$, så $E(X) = np = 10 \\cdot 0{,}3 = 3$.",
    },
    {
      question: "$X \\sim \\text{Poisson}(2)$. Hva er $P(X = 0)$?",
      options: ["$e^{-2} \\approx 0{,}135$", "$2 e^{-2} \\approx 0{,}271$", "$1 - e^{-2} \\approx 0{,}865$", "$e^{-1} \\approx 0{,}368$"],
      explanation: "$P(X = 0) = e^{-\\mu} = e^{-2} \\approx 0{,}135$.",
    },
    {
      question: "Rate $0{,}5$ per liter, prøve 2 liter. $P(\\text{minst én}) =$",
      options: ["$1 - e^{-1} \\approx 0{,}632$", "$e^{-1} \\approx 0{,}368$", "$1 - e^{-0{,}5} \\approx 0{,}393$", "$1 - e^{-2} \\approx 0{,}865$"],
      explanation: "$\\mu = 0{,}5 \\cdot 2 = 1$, så $P(X \\ge 1) = 1 - e^{-1} \\approx 0{,}632$.",
    },
    {
      question: "Ventetiden mellom hendelser i en Poisson-prosess med rate $\\lambda$ er:",
      options: ["eksponensialfordelt med forventning $1/\\lambda$", "Poisson-fordelt med forventning $\\lambda$", "geometrisk fordelt med $p = \\lambda$", "normalfordelt med forventning $\\lambda$"],
      explanation: "Antall (Poisson) og ventetid (eksponensial) er to sider av samme prosess; ventetiden behandles i kap. 2.1.",
    },
    {
      question: "Negativ binomisk fordeling teller:",
      options: ["antall forsøk til den $k$-te suksessen", "antall suksesser i $n$ faste forsøk", "antall hendelser i et tidsintervall", "antall mislykkede forsøk totalt uansett"],
      explanation: "Den generaliserer geometrisk (som er $k = 1$) til den $k$-te suksessen.",
    },
    {
      question: "En vanlig feil ved Poisson-modellering er å:",
      options: ["glemme å skalere raten til intervallet, og bruke $\\lambda$ i stedet for $\\lambda t$", "bruke uttrykket $e^{-\\mu}$ for punktsannsynligheten $P(X = 0)$ korrekt", "sette forventningen lik variansen, slik Poisson-modellen faktisk krever", "begrunne modellvalget med prosessens tre forutsetninger slik sensor vil"],
      explanation: "De tre siste er riktige grep; å glemme rateskaleringen er den klassiske feilen.",
    },
    {
      question: "Hvorfor kreves en begrunnelse av modellvalget på eksamen?",
      options: ["Fordi sensor vurderer om forutsetningene er oppfylt, ikke bare om tallsvaret stemmer", "Fordi formelsamlingen ellers ikke kan brukes til å slå opp fordelingene", "Fordi binomisk og Poisson alltid gir nøyaktig samme svar uansett situasjon", "Fordi kombinatorikk og telling kreves som begrunnelse i alle sannsynlighetsoppgaver"],
      explanation: "Selve valget av modell (med forutsetninger) gir mest uttelling — tallregningen er sekundær.",
    },
    {
      question: "Et naturlig anslag for raten $\\lambda$ når vi teller $x$ hendelser i intervall $t$ er:",
      options: ["$\\hat{\\lambda} = x/t$", "$\\hat{\\lambda} = x \\cdot t$", "$\\hat{\\lambda} = t/x$", "$\\hat{\\lambda} = x + t$"],
      explanation: "Observert antall delt på intervallstørrelsen; estimatoren $X/t$ er stokastisk, estimatet $x/t$ er et tall.",
    },
    {
      question: "En terning kastes til første sekser. Antall kast er:",
      options: ["geometrisk fordelt med $p = 1/6$, forventet 6 kast", "binomisk fordelt med $n = 6$", "Poisson-fordelt med $\\mu = 1/6$", "negativ binomisk med $k = 6$"],
      explanation: "Venting til første suksess med $p = 1/6$ gir geometrisk fordeling og $E(X) = 1/p = 6$.",
    },
    {
      question: "Et Bernoulli-forsøk med suksesssannsynlighet $p$ har forventning og varians:",
      options: ["$E = p$, $\\text{Var} = p(1-p)$", "$E = p(1-p)$, $\\text{Var} = p$", "$E = 1$, $\\text{Var} = p$", "$E = p$, $\\text{Var} = p$"],
      explanation: "Indikatorvariabelen (1 ved suksess, 0 ellers) har $E = p$ og $\\text{Var} = p(1-p)$ — byggeklossen bak binomisk.",
    },
  ],
  'stk1100-2-1': [
    {
      question: "Medianen $m$ til en kontinuerlig variabel finnes ved å løse:",
      options: ["$F(m) = \\tfrac12$", "$f(m) = \\tfrac12$", "$f(m) = 0$", "$F(m) = 1$"],
      explanation: "Medianen deler sannsynligheten i to; det er fordelingsfunksjonen (arealet), ikke tettheten, som skal være $\\tfrac12$.",
    },
    {
      question: "Hva er $c$ i tettheten $f(x) = c\\,x^2$ på $[0,2]$ (og 0 ellers)?",
      options: ["$\\tfrac{3}{8}$", "$\\tfrac{1}{8}$", "$\\tfrac{3}{4}$", "$\\tfrac{1}{3}$"],
      explanation: "$\\int_0^2 c x^2 dx = c\\cdot\\tfrac{8}{3} = 1$ gir $c = \\tfrac{3}{8}$.",
    },
    {
      question: "For en kontinuerlig variabel er $f(x)$:",
      options: ["en tetthet som kan overstige 1", "alltid en sannsynlighet mellom 0 og 1", "alltid lik $F(x)$", "alltid mindre enn 1"],
      explanation: "Tettheten er ikke en sannsynlighet; bare arealer under den er sannsynligheter, så $f$ kan være større enn 1.",
    },
    {
      question: "Halen (overlevelsesfunksjonen) $P(X > x)$ er lik:",
      options: ["$1 - F(x)$", "$F(x) - 1$", "$f(x)$", "$F(x)$"],
      explanation: "Per definisjon er $P(X > x) = 1 - P(X \\le x) = 1 - F(x)$.",
    },
    {
      question: "En eksponensialfordeling i rateform $f(x) = \\lambda e^{-\\lambda x}$ har forventning:",
      options: ["$1/\\lambda$", "$\\lambda$", "$\\lambda^2$", "$\\ln 2/\\lambda$"],
      explanation: "I rateform er $E(X) = 1/\\lambda$; $\\ln 2/\\lambda$ er derimot medianen.",
    },
    {
      question: "En eksponensialfordeling i forventningsform $f(x) = \\tfrac1\\mu e^{-x/\\mu}$ har forventning:",
      options: ["$\\mu$", "$1/\\mu$", "$\\mu^2$", "$\\mu\\ln 2$"],
      explanation: "I forventningsform er parameteren selve forventningen, $E(X) = \\mu$.",
    },
    {
      question: "Medianen til en eksponensialfordeling med forventning $\\mu$ er:",
      options: ["$\\mu\\ln 2$", "$\\mu$", "$\\mu/2$", "$2\\mu$"],
      explanation: "$1 - e^{-m/\\mu} = \\tfrac12$ gir $m = \\mu\\ln 2 \\approx 0{,}693\\mu$, altså mindre enn forventningen.",
    },
    {
      question: "Egenskapen $P(X > s+t \\mid X > t) = P(X > s)$ kalles:",
      options: ["minneløshet", "symmetri", "normering", "uavhengighet"],
      explanation: "Dette er minneløsheten, som bare eksponensialfordelingen har blant kontinuerlige fordelinger.",
    },
    {
      question: "For en uniform fordeling på $[a,b]$ er variansen:",
      options: ["$\\tfrac{(b-a)^2}{12}$", "$\\tfrac{(b-a)^2}{2}$", "$\\tfrac{b-a}{12}$", "$\\tfrac{(a+b)^2}{12}$"],
      explanation: "Uniform på $[a,b]$ har $\\text{Var} = (b-a)^2/12$.",
    },
    {
      question: "Fordelingsfunksjonen $F$ til en kontinuerlig variabel er alltid:",
      options: ["voksende fra 0 til 1", "avtakende fra 1 til 0", "konstant lik $\\tfrac12$", "lik tettheten $f$"],
      explanation: "$F(x) = P(X \\le x)$ vokser monotont fra 0 (venstre) til 1 (høyre).",
    },
    {
      question: "Variansen regnes lettest med regneformelen:",
      options: ["$E(X^2) - [E(X)]^2$", "$[E(X)]^2 - E(X^2)$", "$E(X^2) - E(X)$", "$E(X) - [E(X)]^2$"],
      explanation: "$\\text{Var}(X) = E(X^2) - [E(X)]^2$; regn $E(X)$ og $E(X^2)$ hver for seg.",
    },
    {
      question: "Den stykkevise $F$ til en variabel med støtte $[0,2]$ er for $x > 2$ lik:",
      options: ["$1$", "$0$", "$F(2)/2$", "tettheten $f(2)$"],
      explanation: "Over støtten har all sannsynlighet samlet seg opp, så $F(x) = 1$ for $x > 2$.",
    },
    {
      question: "For $F(x) = x^3/8$ på $[0,2]$ er medianen:",
      options: ["$4^{1/3} \\approx 1{,}587$", "$2^{1/3} \\approx 1{,}260$", "$1$", "$8^{1/3} = 2$"],
      explanation: "$m^3/8 = \\tfrac12$ gir $m^3 = 4$, altså $m = 4^{1/3} \\approx 1{,}587$.",
    },
    {
      question: "$P(X = x)$ for en kontinuerlig variabel er:",
      options: ["$0$ for enhver enkeltverdi", "lik $f(x)$", "lik $F(x)$", "alltid positiv"],
      explanation: "Et enkeltpunkt har areal 0, så $P(X = x) = 0$ for kontinuerlig $X$.",
    },
    {
      question: "$E[g(X)]$ regnes ved:",
      options: ["$\\int g(x) f(x)\\,dx$", "$g\\!\\left(\\int x f(x)\\,dx\\right)$", "$\\int g(x)\\,dx$", "$\\int g(x) F(x)\\,dx$"],
      explanation: "Forventningen til en funksjon integreres direkte mot tettheten, uten å finne fordelingen til $g(X)$ først.",
    },
    {
      question: "Standardavviket $\\text{SD}(X)$ er:",
      options: ["$\\sqrt{\\text{Var}(X)}$", "$\\text{Var}(X)$", "$\\text{Var}(X)^2$", "$E(X^2)$"],
      explanation: "Standardavviket er kvadratroten av variansen og har samme enhet som $X$.",
    },
    {
      question: "Sammenhengen mellom eksponensialens rate $\\lambda$ og forventning $\\mu$ er:",
      options: ["$\\mu = 1/\\lambda$", "$\\mu = \\lambda$", "$\\mu = \\lambda^2$", "$\\mu = \\ln\\lambda$"],
      explanation: "Rateform og forventningsform er samme fordeling med $\\mu = 1/\\lambda$.",
    },
    {
      question: "Normeringskonstanten $c$ i $f = c\\,g(x)$ bestemmes av kravet:",
      options: ["$c\\int g(x)\\,dx = 1$", "$c\\,g(x) = 1$", "$\\int c\\,dx = 1$", "$c = g(x)$"],
      explanation: "Tettheten må integrere til 1, så $c$ er den inverse av integralet av $g$ over støtten.",
    },
    {
      question: "For en høyreskjev fordeling gjelder mellom median $m$ og forventning:",
      options: ["$m < E(X)$", "$m > E(X)$", "$m = E(X)$", "$m = 2E(X)$"],
      explanation: "En lang høyrehale drar snittet opp, så medianen ligger under forventningen.",
    },
    {
      question: "$P(a < X \\le b)$ uttrykt ved $F$ er:",
      options: ["$F(b) - F(a)$", "$F(a) - F(b)$", "$F(b) + F(a)$", "$f(b) - f(a)$"],
      explanation: "Sannsynligheten for et intervall er differansen i fordelingsfunksjonen mellom endepunktene.",
    },
    {
      question: "Modus (typetallet) til en eksponensialfordeling ligger i:",
      options: ["$x = 0$", "$x = \\mu$", "$x = \\mu\\ln 2$", "$x = 1/\\lambda$"],
      explanation: "Tettheten $\\lambda e^{-\\lambda x}$ er størst i $x = 0$ og avtar derfra.",
    },
    {
      question: "Interkvartilbredden er definert som:",
      options: ["$Q_3 - Q_1$", "$Q_2 - Q_1$", "$Q_3 - Q_2$", "$Q_3 + Q_1$"],
      explanation: "Interkvartilbredden er avstanden mellom øvre og nedre kvartil, spennet i de midtre 50 %.",
    },
    {
      question: "For en uniform fordeling på $[2,8]$ er $P(3 < X < 5)$:",
      options: ["$\\tfrac13$", "$\\tfrac12$", "$\\tfrac14$", "$\\tfrac25$"],
      explanation: "Lengden 2 delt på total lengde 6 gir $2/6 = 1/3$.",
    },
    {
      question: "Variansen til en eksponensialfordeling med forventning $\\mu$ er:",
      options: ["$\\mu^2$", "$\\mu$", "$1/\\mu$", "$\\mu/2$"],
      explanation: "Eksponensial har $\\text{Var}(X) = \\mu^2$, så standardavviket er lik forventningen.",
    },
    {
      question: "Kvantilfunksjonen $F^{-1}(p)$ gir:",
      options: ["verdien $x_p$ med $F(x_p) = p$", "tettheten i punktet $p$", "arealet under $f$ opp til $p$", "medianen uansett $p$"],
      explanation: "$F^{-1}$ snur $F$: den tar en andel $p$ og returnerer kvantilen $x_p$.",
    },
    {
      question: "En $F$ skrevet uten delene «0 under støtten» og «1 over støtten» er:",
      options: ["ufullstendig og kan gi $F > 1$ ved innsetting", "fullstendig, delene er underforstått", "alltid feil formel", "kun gyldig for uniform"],
      explanation: "Ytterdelene hører med; uten dem kan innsetting utenfor støtten gi meningsløse verdier.",
    },
    {
      question: "For $\\mu = 5$ er $P(X > 8 \\mid X > 3)$ (eksponensial):",
      options: ["$e^{-1} \\approx 0{,}368$", "$e^{-8/5} \\approx 0{,}202$", "$e^{-3/5} \\approx 0{,}549$", "$e^{-11/5} \\approx 0{,}111$"],
      explanation: "Minneløshet: $P(X > 8 \\mid X > 3) = P(X > 5) = e^{-5/5} = e^{-1}$.",
    },
    {
      question: "Andre moment $E(X^2)$ regnes ved:",
      options: ["$\\int x^2 f(x)\\,dx$", "$\\left(\\int x f(x)\\,dx\\right)^2$", "$\\int x^2 F(x)\\,dx$", "$\\int x f(x)^2\\,dx$"],
      explanation: "Andre moment er forventningen til $g(X) = X^2$, altså $\\int x^2 f\\,dx$.",
    },
    {
      question: "Hvilken fordeling er den eneste kontinuerlige som er minneløs?",
      options: ["eksponensialfordelingen", "uniform fordeling", "normalfordelingen", "gammafordelingen med $\\alpha = 2$"],
      explanation: "Konstant rate gir minneløshet, en egenskap unik for eksponensialfordelingen blant kontinuerlige.",
    },
    {
      question: "Variasjonskoeffisienten $\\text{SD}/E$ for en eksponensialfordeling er:",
      options: ["$1$", "$\\tfrac12$", "$\\ln 2$", "$\\mu$"],
      explanation: "Fordi $\\text{SD} = \\mu = E$, blir forholdet nøyaktig 1 — et kjennetegn på eksponensiell spredning.",
    },
  ],
  'stk1100-2-2': [
    {
      question: "Identiteten mellom kjikvadrat og gamma er:",
      options: ["$\\chi^2_n = \\text{gamma}(n/2, 2)$", "$\\chi^2_n = \\text{gamma}(2, n/2)$", "$\\chi^2_n = \\text{gamma}(n, 2)$", "$\\chi^2_n = \\text{gamma}(n/2, 1)$"],
      explanation: "Kjikvadrat med $n$ frihetsgrader er gamma med form $n/2$ og skala 2.",
    },
    {
      question: "Forventningen til $\\text{gamma}(\\alpha, \\beta)$ med skalaparameter $\\beta$ er:",
      options: ["$\\alpha\\beta$", "$\\alpha/\\beta$", "$\\beta/\\alpha$", "$\\alpha\\beta^2$"],
      explanation: "Med skalaparametrisering er $E = \\alpha\\beta$ og $\\text{Var} = \\alpha\\beta^2$.",
    },
    {
      question: "Variansen til $\\text{gamma}(\\alpha, \\beta)$ er:",
      options: ["$\\alpha\\beta^2$", "$\\alpha\\beta$", "$\\alpha^2\\beta$", "$(\\alpha\\beta)^2$"],
      explanation: "Variansen er $\\alpha\\beta^2$; ikke forveksle med kvadratet av forventningen.",
    },
    {
      question: "Rekursjonen for gammafunksjonen er:",
      options: ["$\\Gamma(\\alpha+1) = \\alpha\\,\\Gamma(\\alpha)$", "$\\Gamma(\\alpha+1) = (\\alpha+1)\\Gamma(\\alpha)$", "$\\Gamma(\\alpha) = \\alpha\\,\\Gamma(\\alpha+1)$", "$\\Gamma(\\alpha+1) = \\Gamma(\\alpha)/\\alpha$"],
      explanation: "Rekursjonen $\\Gamma(\\alpha+1) = \\alpha\\Gamma(\\alpha)$ generaliserer $n! = n\\cdot(n-1)!$.",
    },
    {
      question: "Verdien $\\Gamma(\\tfrac12)$ er:",
      options: ["$\\sqrt\\pi$", "$\\pi$", "$1$", "$\\tfrac12\\sqrt\\pi$"],
      explanation: "$\\Gamma(\\tfrac12) = \\sqrt\\pi \\approx 1{,}7725$; ankeret for halvtallige argumenter.",
    },
    {
      question: "For et positivt heltall $a$ er $\\Gamma(a)$ lik:",
      options: ["$(a-1)!$", "$a!$", "$(a+1)!$", "$a$"],
      explanation: "Gammafunksjonen faller sammen med fakultetet forskjøvet ett hakk: $\\Gamma(a) = (a-1)!$.",
    },
    {
      question: "Gammaintegralet gir $\\int_0^\\infty x^{a-1}e^{-x/b}\\,dx = $",
      options: ["$b^a\\,\\Gamma(a)$", "$b\\,\\Gamma(a)$", "$a^b\\,\\Gamma(b)$", "$b^a\\,\\Gamma(a-1)$"],
      explanation: "Standardresultatet $\\int_0^\\infty x^{a-1}e^{-x/b}dx = b^a\\Gamma(a)$; med $b = 1$ er det definisjonen av $\\Gamma(a)$.",
    },
    {
      question: "Forventningen til $\\chi^2_n$ er:",
      options: ["$n$", "$2n$", "$n/2$", "$\\sqrt{2n}$"],
      explanation: "$E(\\chi^2_n) = (n/2)\\cdot 2 = n$ — lik antall frihetsgrader.",
    },
    {
      question: "Variansen til $\\chi^2_n$ er:",
      options: ["$2n$", "$n$", "$n/2$", "$4n$"],
      explanation: "$\\text{Var}(\\chi^2_n) = (n/2)\\cdot 2^2 = 2n$.",
    },
    {
      question: "Momentformelen for $V \\sim \\text{gamma}(\\alpha,\\beta)$ er $E(V^r) = $",
      options: ["$\\beta^r\\,\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$", "$\\beta^r\\,\\Gamma(\\alpha)/\\Gamma(\\alpha+r)$", "$\\alpha^r\\,\\Gamma(\\beta+r)/\\Gamma(\\beta)$", "$\\beta^r\\,\\Gamma(\\alpha+r)$"],
      explanation: "$E(V^r) = \\beta^r\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ for $r > -\\alpha$; gir $\\alpha\\beta$ ved $r = 1$.",
    },
    {
      question: "Gammafordelingen med $\\alpha = 1$ er:",
      options: ["eksponensialfordelingen", "normalfordelingen", "kjikvadrat med 1 frihetsgrad", "uniform fordeling"],
      explanation: "$\\text{gamma}(1, \\beta)$ har tetthet $\\tfrac1\\beta e^{-x/\\beta}$ — eksponensial i forventningsform.",
    },
    {
      question: "Summen av uavhengige $\\text{gamma}(\\alpha_i, \\beta)$ (felles skala) er:",
      options: ["$\\text{gamma}(\\sum\\alpha_i, \\beta)$", "$\\text{gamma}(\\prod\\alpha_i, \\beta)$", "$\\text{gamma}(\\sum\\alpha_i, \\sum\\beta)$", "$\\text{gamma}(\\bar\\alpha, \\beta)$"],
      explanation: "Med felles skala legges formparametrene sammen; skalaen beholdes.",
    },
    {
      question: "Hva er $\\Gamma(\\tfrac52)$?",
      options: ["$\\tfrac34\\sqrt\\pi \\approx 1{,}329$", "$\\tfrac12\\sqrt\\pi \\approx 0{,}886$", "$\\sqrt\\pi \\approx 1{,}772$", "$\\tfrac{15}{8}\\sqrt\\pi \\approx 3{,}323$"],
      explanation: "$\\Gamma(\\tfrac52) = \\tfrac32\\cdot\\tfrac12\\Gamma(\\tfrac12) = \\tfrac34\\sqrt\\pi$.",
    },
    {
      question: "En sum av $n$ uavhengige eksponensiale med felles forventning $\\beta$ er:",
      options: ["$\\text{gamma}(n, \\beta)$", "$\\text{gamma}(1, n\\beta)$", "$\\chi^2_n$", "eksponensial med forventning $n\\beta$"],
      explanation: "Erlang-fordelingen $\\text{gamma}(n, \\beta)$ — tiden til $n$-te hendelse i en Poisson-prosess.",
    },
    {
      question: "Kjikvadrattabellen $\\chi^2_{\\nu,\\alpha}$ er definert ved:",
      options: ["$P(\\chi^2_\\nu > \\chi^2_{\\nu,\\alpha}) = \\alpha$", "$P(\\chi^2_\\nu < \\chi^2_{\\nu,\\alpha}) = \\alpha$", "$P(\\chi^2_\\nu = \\chi^2_{\\nu,\\alpha}) = \\alpha$", "$P(\\chi^2_\\nu > \\chi^2_{\\nu,\\alpha}) = 1-\\alpha$"],
      explanation: "Tabellen bruker øvre haleareal: $\\alpha$ er sannsynligheten for å overstige kvantilen.",
    },
    {
      question: "Skalaparameteren $\\beta$ og raten $\\lambda$ henger sammen som:",
      options: ["$\\lambda = 1/\\beta$", "$\\lambda = \\beta$", "$\\lambda = \\beta^2$", "$\\lambda = \\beta/\\alpha$"],
      explanation: "Skala og rate er inverse: $\\lambda = 1/\\beta$. Forveksling gir feil forventning.",
    },
    {
      question: "For $V \\sim \\text{gamma}(\\alpha,\\beta)$ gjelder mellom $E(\\sqrt V)$ og $\\sqrt{E(V)}$:",
      options: ["$E(\\sqrt V) < \\sqrt{E(V)}$", "$E(\\sqrt V) = \\sqrt{E(V)}$", "$E(\\sqrt V) > \\sqrt{E(V)}$", "de kan ikke sammenlignes"],
      explanation: "Kvadratrot er konkav, så roten underestimerer: $E(\\sqrt V) < \\sqrt{E(V)}$ — en skjevhet.",
    },
    {
      question: "$\\int_0^\\infty x^3 e^{-x/2}\\,dx$ er lik:",
      options: ["$96$", "$48$", "$16$", "$6$"],
      explanation: "$a = 4$, $b = 2$: $2^4\\Gamma(4) = 16\\cdot 6 = 96$.",
    },
    {
      question: "Formparameteren $\\alpha$ i gammafordelingen styrer:",
      options: ["fordelingens form/skjevhet", "fordelingens skala", "enheten til $X$", "raten av hendelser"],
      explanation: "$\\alpha$ styrer formen; ved $\\alpha = 1$ er den eksponensiell, større $\\alpha$ gir mindre skjevhet.",
    },
    {
      question: "For $\\text{gamma}(3, 2)$ er $E(V^2)$ lik:",
      options: ["$48$", "$36$", "$12$", "$24$"],
      explanation: "$E(V^2) = \\beta^2\\alpha(\\alpha+1) = 4\\cdot 3\\cdot 4 = 48$ (og $\\text{Var} = 48 - 36 = 12$).",
    },
    {
      question: "Summen $\\chi^2_{n_1} + \\chi^2_{n_2}$ av uavhengige ledd er:",
      options: ["$\\chi^2_{n_1+n_2}$", "$\\chi^2_{n_1 n_2}$", "$\\chi^2_{\\max(n_1,n_2)}$", "gamma$(n_1+n_2, 1)$"],
      explanation: "Felles skala 2 gir at frihetsgradene legges sammen: $\\chi^2_{n_1+n_2}$.",
    },
    {
      question: "Betingelsen i momentformelen $E(V^r) = \\beta^r\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ er:",
      options: ["$r > -\\alpha$", "$r > 0$", "$r < \\alpha$", "$r$ heltall"],
      explanation: "Kravet $r > -\\alpha$ sikrer at det underliggende gammaintegralet konvergerer.",
    },
    {
      question: "$\\chi^2_{10} = \\text{gamma}(\\alpha,\\beta)$ med:",
      options: ["$\\alpha = 5, \\beta = 2$", "$\\alpha = 10, \\beta = 2$", "$\\alpha = 2, \\beta = 5$", "$\\alpha = 5, \\beta = 1$"],
      explanation: "$\\chi^2_n = \\text{gamma}(n/2, 2)$, så $\\alpha = 10/2 = 5$ og $\\beta = 2$.",
    },
    {
      question: "Den vanligste tabellfeilen i eksponensial-pivoter er:",
      options: ["å blande $\\chi^2_{2n}$ og $\\chi^2_n$", "å bruke normaltabell", "å glemme skalaen", "å bruke feil forventning"],
      explanation: "Feil frihetsgrader — særlig $\\chi^2_{2n}$ mot $\\chi^2_n$ — er den klassiske fellen (utdypes i Del 6).",
    },
    {
      question: "Sumregelen for gamma krever at leddene har:",
      options: ["felles skalaparameter $\\beta$", "felles formparameter $\\alpha$", "samme forventning", "samme varians"],
      explanation: "Uten felles skala er summen ikke lenger gammafordelt; formparametrene legges sammen når $\\beta$ er felles.",
    },
    {
      question: "Tettheten til $\\text{gamma}(\\alpha,\\beta)$ har støtte:",
      options: ["$x > 0$", "hele $\\mathbb{R}$", "$0 \\le x \\le 1$", "$x < 0$"],
      explanation: "Gammafordelingen lever på de positive tallene, som ventetider og levetider.",
    },
    {
      question: "$\\Gamma(4)$ er lik:",
      options: ["$6$", "$24$", "$3$", "$4$"],
      explanation: "$\\Gamma(4) = 3! = 6$.",
    },
    {
      question: "Forventningen til en Erlang $\\text{gamma}(n, \\beta)$ (sum av $n$ eksponensiale) er:",
      options: ["$n\\beta$", "$\\beta/n$", "$n/\\beta$", "$n\\beta^2$"],
      explanation: "$E = \\alpha\\beta = n\\beta$ — $n$ ganger den enkelte forventningen.",
    },
    {
      question: "At $E(\\chi^2_n) = n$ er nyttig fordi:",
      options: ["forventningen avslører om du har riktig frihetsgrad", "det gir medianen direkte", "det gir variansen $= n$", "det gir tettheten"],
      explanation: "Siden forventningen er lik $n$, kan du raskt sjekke at antall frihetsgrader stemmer.",
    },
    {
      question: "For $V \\sim \\text{gamma}(5, 2)$ er $E(1/V)$ lik:",
      options: ["$\\tfrac18 = 0{,}125$", "$\\tfrac1{10} = 0{,}1$", "$\\tfrac15 = 0{,}2$", "$\\tfrac12 = 0{,}5$"],
      explanation: "$E(V^{-1}) = \\beta^{-1}\\Gamma(\\alpha-1)/\\Gamma(\\alpha) = \\tfrac12\\cdot\\tfrac1{4} = \\tfrac18$ (bruk $r = -1$).",
    },
  ],
  'stk1100-2-3': [
    {
      question: "Første steg når en oppgave gir tettheten «proporsjonal med» noe, er å:",
      options: ["finne normeringskonstanten fra $\\int f = 1$", "regne ut medianen fra $F(m) = \\tfrac12$", "derivere tettheten for å finne $F$", "finne forventningen ved integrasjon"],
      explanation: "Uten riktig normeringskonstant blir $F$, median og momenter alle skalert feil.",
    },
    {
      question: "Fordelingsfunksjonen til Pareto $f = \\theta k^\\theta/x^{\\theta+1}$ ($x \\ge k$) er:",
      options: ["$1 - (k/x)^\\theta$", "$(k/x)^\\theta$", "$1 - (x/k)^\\theta$", "$(x/k)^\\theta - 1$"],
      explanation: "Integrasjon fra $k$ gir $F(x) = 1 - (k/x)^\\theta$ for $x \\ge k$.",
    },
    {
      question: "Medianen til en Pareto-fordeling er:",
      options: ["$k\\cdot 2^{1/\\theta}$", "$k\\cdot 2^{\\theta}$", "$k/2$", "$k\\cdot 2^{-1/\\theta}$"],
      explanation: "$(k/m)^\\theta = \\tfrac12$ gir $m = k\\cdot 2^{1/\\theta}$.",
    },
    {
      question: "Forventningen til en Pareto-fordeling er endelig bare når:",
      options: ["$\\theta > 1$", "$\\theta > 0$", "$\\theta > 2$", "$\\theta < 1$"],
      explanation: "$E(X) = \\theta k/(\\theta-1)$ krever $\\theta > 1$; variansen krever $\\theta > 2$.",
    },
    {
      question: "Laplace-fordelingen $f = \\tfrac{1}{2b}e^{-|x-\\mu|/b}$ har median:",
      options: ["$\\mu$", "$0$ alltid", "$\\mu + b$", "$b\\ln 2$"],
      explanation: "Tettheten er symmetrisk om $\\mu$, så medianen er $\\mu$ (og forventningen også).",
    },
    {
      question: "For Weibull med $F(x) = 1 - e^{-(x/\\beta)^\\alpha}$ er medianen:",
      options: ["$\\beta(\\ln 2)^{1/\\alpha}$", "$\\beta\\ln 2$", "$\\beta\\cdot 2^{1/\\alpha}$", "$\\beta^\\alpha\\ln 2$"],
      explanation: "$(m/\\beta)^\\alpha = \\ln 2$ gir $m = \\beta(\\ln 2)^{1/\\alpha}$.",
    },
    {
      question: "For Rayleigh $F(x) = 1 - e^{-x^2/(2\\sigma^2)}$ er medianen:",
      options: ["$\\sigma\\sqrt{2\\ln 2}$", "$\\sigma\\ln 2$", "$\\sigma\\sqrt{2}$", "$2\\sigma\\ln 2$"],
      explanation: "$m^2/(2\\sigma^2) = \\ln 2$ gir $m = \\sigma\\sqrt{2\\ln 2}$.",
    },
    {
      question: "Lognormalfordelingen ($\\ln X \\sim N(\\mu,\\sigma^2)$) har median:",
      options: ["$e^\\mu$", "$\\mu$", "$e^{\\mu+\\sigma^2/2}$", "$e^\\sigma$"],
      explanation: "$\\Phi$-argumentet er 0 når $\\ln m = \\mu$, så $m = e^\\mu$.",
    },
    {
      question: "For en Pareto-variabel er $2\\theta\\ln(X/k)$ fordelt som:",
      options: ["$\\chi^2_2$", "$\\chi^2_1$", "eksponensial med rate $\\theta$", "normalfordelt"],
      explanation: "CDF-metoden gir $P(W \\le w) = 1 - e^{-w/2}$, altså $\\text{gamma}(1,2) = \\chi^2_2$.",
    },
    {
      question: "For en Weibull-variabel er $(X/\\beta)^\\alpha$ fordelt som:",
      options: ["eksponensial med forventning 1", "Weibull med $\\alpha = 2$", "kjikvadrat med 2 frihetsgrader", "normalfordelt"],
      explanation: "Potenstransformasjonen fjerner formparameteren: $P(Z \\le z) = 1 - e^{-z}$, eksponensial(1).",
    },
    {
      question: "Å løse median med $f(m) = \\tfrac12$ i stedet for $F(m) = \\tfrac12$ er:",
      options: ["feil — medianen bestemmes av $F$", "riktig for symmetriske fordelinger", "riktig for Pareto", "riktig når $f$ er avtakende"],
      explanation: "Medianen er alltid løsningen av $F(m) = \\tfrac12$; tettheten i étt punkt er ikke en sannsynlighet.",
    },
    {
      question: "Et ukjent fordelingsnavn i en sjanger C-oppgave betyr at du bør:",
      options: ["kjøre standardoppskriften på oppgitt tetthet", "gjette fordelingen ut fra hukommelsen alene", "hoppe over oppgaven og ta neste i stedet", "uten videre anta at det er normalfordeling"],
      explanation: "Navnet er en etikett; oppgaven gir tettheten/CDF, og de vanlige teknikkene løser den.",
    },
    {
      question: "For potenstettheten $f = (k+1)x^k$ på $[0,1]$ er $F(x)$:",
      options: ["$x^{k+1}$", "$x^k$", "$(k+1)x^{k+1}$", "$1 - x^{k+1}$"],
      explanation: "$\\int_0^x (k+1)t^k dt = x^{k+1}$.",
    },
    {
      question: "For potenstettheten $f = 4x^3$ på $[0,1]$ er $E(X)$:",
      options: ["$0{,}8$", "$0{,}5$", "$0{,}75$", "$1{,}0$"],
      explanation: "$E(X) = \\int_0^1 x\\cdot 4x^3 dx = 4/5 = 0{,}8$.",
    },
    {
      question: "Rayleigh-fordelingens forventning $E(X)$ er:",
      options: ["$\\sigma\\sqrt{\\pi/2}$", "$\\sigma$", "$\\sigma^2$", "$\\sigma\\sqrt{2\\ln 2}$"],
      explanation: "$E(X) = \\sigma\\sqrt{\\pi/2}$; $\\sigma\\sqrt{2\\ln 2}$ er derimot medianen.",
    },
    {
      question: "For Weibull-fordelingen med $\\alpha = 1$ får man:",
      options: ["eksponensialfordelingen", "Rayleigh-fordelingen", "normalfordelingen", "uniform fordeling"],
      explanation: "Weibull med form $\\alpha = 1$ reduseres til eksponensial med forventning $\\beta$.",
    },
    {
      question: "Hale-definerte fordelinger (Pareto/Weibull) regnes ofte lettest via:",
      options: ["$P(X > x) = 1 - F(x)$ direkte", "tettheten $f$ i ett enkelt punkt", "å regne ut medianen aller først", "det andre momentet $E(X^2)$"],
      explanation: "Halen er en ren eksponential/potens for disse, så $P(X > x)$ faller enklere ut enn $F$ selv.",
    },
    {
      question: "Laplace-fordelingens varians er:",
      options: ["$2b^2$", "$b^2$", "$b$", "$\\tfrac12 b^2$"],
      explanation: "To speilede eksponensialhaler gir $\\text{Var}(X) = 2b^2$.",
    },
    {
      question: "For Pareto med $k = 1$, $\\theta = 3$ er medianen:",
      options: ["$2^{1/3} \\approx 1{,}26$", "$2^{3} = 8{,}00$", "$\\tfrac32 = 1{,}50$", "$3^{1/3} \\approx 1{,}44$"],
      explanation: "$m = k\\cdot 2^{1/\\theta} = 2^{1/3} \\approx 1{,}26$.",
    },
    {
      question: "Momentene til en eksotisk tetthet regnes lettest når integranden har form $x^{a-1}e^{-x/b}$, ved å bruke:",
      options: ["gammaintegralet $b^a\\Gamma(a)$", "delbrøkoppspalting av brøken", "oppslag i normaltabellen", "kvantilfunksjonen $F^{-1}$"],
      explanation: "Integraler av form $x^{a-1}e^{-x/b}$ er gammaintegraler med verdi $b^a\\Gamma(a)$.",
    },
    {
      question: "Medianlikningen for Pareto er en:",
      options: ["potenslikning", "logaritmelikning", "andregradslikning", "lineær likning"],
      explanation: "$(k/m)^\\theta = \\tfrac12$ er en potenslikning; Weibull/Rayleigh gir logaritme.",
    },
    {
      question: "Konvergensbetingelsen som må nevnes for Pareto-variansen er:",
      options: ["$\\theta > 2$", "$\\theta > 1$", "$\\theta > 0$", "$\\theta < 2$"],
      explanation: "Endelig varians for Pareto krever $\\theta > 2$; endelig forventning krever $\\theta > 1$.",
    },
    {
      question: "For lognormal ($\\mu = 1$, $\\sigma = 0{,}5$) er medianen omtrent:",
      options: ["$2{,}72$", "$1{,}0$", "$3{,}08$", "$1{,}65$"],
      explanation: "$m = e^\\mu = e^1 \\approx 2{,}72$.",
    },
    {
      question: "Kvantilfunksjonen $F^{-1}$ til en eksotisk fordeling er råstoffet i:",
      options: ["inversjonsmetoden for simulering", "gammaintegralet fra kapittel 2.2", "normaltilnærming via CLT", "MGF-metoden fra kapittel 4.1"],
      explanation: "$F^{-1}(U)$ med $U$ uniform gir en trekning fra fordelingen — inversjonsmetoden.",
    },
    {
      question: "En potens- eller logaritmetransformasjon av en eksotisk fordeling brukes for å:",
      options: ["gjøre den om til eksponensial/gamma", "finne medianen vesentlig raskere", "normere tettheten på nytt", "fjerne den tunge halen helt"],
      explanation: "Slike transformasjoner (Pareto→gamma, Weibull→eksp) er broen til estimering i kap. 4.3.",
    },
  ],
  'stk1100-3-1': [
    {
      question: "Hva må gjelde for at $f(x,y)$ skal være en gyldig simultantetthet?",
      options: ["$f(x,y) \\ge 0$ overalt, og $\\iint f\\,dx\\,dy = 1$", "$f(x,y) \\le 1$ overalt, og $\\iint f\\,dx\\,dy = 1$", "$f(x,y) \\ge 0$ overalt, og $\\iint f\\,dx\\,dy \\le 1$", "$0 \\le f(x,y) \\le 1$, og $\\sum_{x,y} f(x,y) = 1$"],
      explanation: "En tetthet må være ikke-negativ og ha totalt volum 1. Den kan godt være større enn 1 lokalt, og den summeres ikke (den integreres).",
    },
    {
      question: "Hvordan finner du marginaltettheten $f_X(x)$ fra en simultantetthet?",
      options: ["Integrer ut den andre variabelen: $\\int f(x,y)\\,dy$", "Del på den andre marginalen: $f(x,y)/f_Y(y)$ overalt", "Deriver tettheten med hensyn på $x$: $\\partial f/\\partial x$", "Sett $y = 0$ inn i formelen for tettheten: $f(x,0)$"],
      explanation: "Marginalen for $X$ fås ved å integrere bort $y$ over hele dens område. De andre gir henholdsvis betinget tetthet, feil operasjon og en tilfeldig verdi.",
    },
    {
      question: "Den betingede tettheten $f_{Y\\mid X=x}(y)$ er definert som:",
      options: ["$f(x,y)/f_X(x)$, tettheten delt på marginalen for $X$", "$f(x,y)/f_Y(y)$, tettheten delt på marginalen for $Y$", "$f(x,y)\\,f_X(x)$, tettheten ganget med marginalen", "$\\int f(x,y)\\,dx$, tettheten integrert over $x$"],
      explanation: "Betinget tetthet er simultantettheten delt på marginalen i variabelen vi betinger på. Å dele på $f_Y$ gir betinget for $X$ gitt $Y$.",
    },
    {
      question: "Er $f(x,y)$ en sannsynlighet?",
      options: ["Nei — bare $\\iint_A f$ er en sannsynlighet, og $f$ kan overstige 1", "Ja — $f(x,y)$ ligger mellom 0 og 1 og gir sannsynligheten i punktet", "Ja — $f(x,y)$ er punktsannsynligheten $P(X=x,\\ Y=y)$ direkte", "Nei — men $f(x,y)$ er alltid under 1 og tolkes som en sannsynlighet"],
      explanation: "For kontinuerlige variable er punktsannsynligheten 0; tettheten er en volumrate og kan overstige 1. Sannsynlighet krever integrasjon over et område.",
    },
    {
      question: "For å regne $P(Y \\ge X)$ som et dobbeltintegral, hva er det viktigste første steget (sensorkrav 3)?",
      options: ["Tegne integrasjonsområdet, så du kan sette riktige grenser", "Regne ut normeringskonstanten $c$ fra $\\iint f = 1$ på nytt", "Finne begge marginaltetthetene $f_X$ og $f_Y$ aller først", "Sjekke om $X$ og $Y$ er uavhengige ved faktorisering"],
      explanation: "Sensorkrav 3: tegn området. Gale grenser er den vanligste feilen i sjanger D, og en skisse gjør grensene tydelige.",
    },
    {
      question: "$(X,Y)$ er uniform på enhetskvadratet ($f=1$). Hva er $P(X^2 + Y^2 \\le 1)$?",
      options: ["$\\pi/4 \\approx 0{,}785$ (arealet av kvartsirkelen)", "$\\pi/2 \\approx 1{,}571$ (arealet av halvsirkelen)", "$1$ (hele enhetskvadratet dekkes av sirkelen)", "$1/2$ (halvparten av enhetskvadratets areal)"],
      explanation: "Med uniform tetthet er sannsynligheten arealet av kvartsirkelen med radius 1: $\\pi\\cdot 1^2/4 = \\pi/4$. De andre er hele/halve sirkelarealet eller feil.",
    },
    {
      question: "For $f(x,y) = x+y$ på enhetskvadratet er marginaltettheten $f_X(x)$ lik:",
      options: ["$x + \\tfrac12$ (integrert ut $y$ fra 0 til 1)", "$x + y$ (tettheten uendret, ingen integrasjon)", "$2x$ (som om tettheten var $2x$ på kvadratet)", "$\\tfrac12$ (bare konstantleddet blir stående igjen)"],
      explanation: "$f_X(x) = \\int_0^1 (x+y)\\,dy = x + \\tfrac12$. Man integrerer ut $y$, ikke lar $y$ stå igjen.",
    },
    {
      question: "Hvilken formel gir forventningen $E[g(X,Y)]$?",
      options: ["$\\iint g(x,y)\\,f(x,y)\\,dx\\,dy$ over hele planet", "$\\iint g(x,y)\\,dx\\,dy$ uten å vekte med tettheten", "$g\\big(E(X),\\,E(Y)\\big)$, funksjonen av forventningene", "$\\iint f(x,y)/g(x,y)\\,dx\\,dy$, tettheten delt på $g$"],
      explanation: "Forventningen av en funksjon vektes med simultantettheten. $g(E(X),E(Y))$ er generelt feil (Jensens ulikhet).",
    },
    {
      question: "For $f(x,y) = \\tfrac{12}{7}x(x+y)$ på enhetskvadratet er $P(Y \\ge X)$:",
      options: ["$5/14 \\approx 0{,}36$ (massen skjøvet mot store $x$)", "$1/2 \\approx 0{,}50$ (som ved en symmetrisk tetthet)", "$9/14 \\approx 0{,}64$ (feil fortegn på skjevheten)", "$7/12 \\approx 0{,}58$ (forvekslet med normeringen)"],
      explanation: "Integrasjon over trekanten $y \\ge x$ gir $5/14$. Svaret er under $1/2$ fordi $x$-faktoren skyver massen mot store $x$ (området $Y<X$). $1/2$ ville krevd en symmetrisk tetthet.",
    },
    {
      question: "I en diskret simultanfordeling finner du marginalen $p_X(x)$ ved å:",
      options: ["Summere raden over alle $Y$-verdier: $\\sum_y p(x,y)$", "Summere kolonnen over alle $X$-verdier: $\\sum_x p(x,y)$", "Dele cellen på totalsummen av tabellen: $p(x,y)/1$", "Ta det største tallet i raden som hører til $x$"],
      explanation: "Marginalen for $X$ er radsummen (summer over alle $Y$-verdier). Kolonnesummen gir marginalen for $Y$.",
    },
    {
      question: "Hva betyr det at støtten til $f$ er området $\\{(x,y): f(x,y) > 0\\}$?",
      options: ["Området der tettheten er positiv; utenfor er $f = 0$", "Området der $f(x,y) \\ge 1$; ellers er tettheten under 1", "Området der de to marginaltetthetene er like store", "Hele $xy$-planet, uansett hvor tettheten er positiv"],
      explanation: "Støtten er nettopp der tettheten er positiv. Formen på støtten styrer integrasjonsgrensene og avgjør uavhengighet.",
    },
    {
      question: "For en betinget forventning $E(Y \\mid X = x)$ bruker du:",
      options: ["Den betingede tettheten: $\\int y\\,f_{Y\\mid X=x}(y)\\,dy$", "Marginaltettheten til $Y$: $\\int y\\,f_Y(y)\\,dy$ direkte", "Simultantettheten: $\\iint y\\,f(x,y)\\,dx\\,dy$ over alt", "Produktet av forventningene: $E(X)\\cdot E(Y)$ samlet"],
      explanation: "Betinget forventning regnes med den betingede tettheten. Bruker du marginalen $f_Y$, får du den ubetingede $E(Y)$ i stedet.",
    },
    {
      question: "Et $y$-simpelt integrasjonsområde skrives som:",
      options: ["$\\{x_0 \\le x \\le x_1,\\ g_1(x) \\le y \\le g_2(x)\\}$; $y$ innerst", "$\\{y_0 \\le y \\le y_1,\\ h_1(y) \\le x \\le h_2(y)\\}$; $x$ innerst", "Et område der både $x$ og $y$ har faste tallgrenser", "Et sirkulært område med radius bestemt av tettheten"],
      explanation: "I et $y$-simpelt område er de indre $y$-grensene funksjoner av $x$, og du integrerer $y$ først. Det motsatte er et $x$-simpelt område.",
    },
    {
      question: "For $f(x,y) = 6xy^2$ på enhetskvadratet: hva er $f_Y(y)$?",
      options: ["$3y^2$ (integrert ut $x$, som gir faktoren $1/2$)", "$2y$ (som om marginalen var lineær i $y$)", "$6y^2$ (glemte faktoren $1/2$ fra $x$-integralet)", "$y^2$ (droppet hele konstantfaktoren foran)"],
      explanation: "$f_Y(y) = \\int_0^1 6xy^2\\,dx = 6y^2\\cdot\\tfrac12 = 3y^2$. Man integrerer ut $x$ (som gir faktoren $1/2$).",
    },
    {
      question: "Normeringskonstanten $c$ i $f(x,y) = c\\,g(x,y)$ bestemmes av kravet:",
      options: ["$c\\iint_S g = 1$, altså $c = 1/\\iint_S g$ over støtten", "$c = \\max_{(x,y)} g(x,y)$, tetthetens toppverdi på støtten", "$c\\iint_S g = 0$, slik at integralet forsvinner helt", "$c = 1/g(x,y)$, den inverse verdien i hvert punkt"],
      explanation: "Konstanten skalerer tettheten slik at totalvolumet blir 1. Derfor er $c$ den inverse av integralet av $g$ over støtten.",
    },
    {
      question: "Hva er sammenhengen mellom simultan fordelingsfunksjon $F$ og tetthet $f$?",
      options: ["$f = \\partial^2 F/\\partial x\\,\\partial y$, blandet andrederivert", "$f = \\partial F/\\partial x$, bare derivert på $x$ én gang", "$f = F(x,y)$, tetthet og fordeling er samme funksjon", "$f = \\iint F\\,dx\\,dy$, fordelingen integrert opp igjen"],
      explanation: "Tettheten er den blandede andrederiverte av fordelingsfunksjonen. En enkelt derivasjon holder bare i én-variabeltilfellet.",
    },
    {
      question: "En område-sannsynlighet $P((X,Y)\\in A)$ kan også skrives som en forventning:",
      options: ["$E[\\mathbf{1}_A(X,Y)]$, forventningen av indikatoren for $A$", "$E[A(X,Y)]$, forventningen av selve arealet til $A$", "$E(X)\\cdot E(Y)$ regnet over bare området $A$", "$\\iint_A f\\cdot f\\,dx\\,dy$, tettheten kvadrert over $A$"],
      explanation: "Indikatoren $\\mathbf{1}_A$ er 1 på $A$ og 0 ellers, så $E[\\mathbf{1}_A] = \\iint_A f = P((X,Y)\\in A)$.",
    },
    {
      question: "Hvis den betingede tettheten $f_{Y\\mid X=x}(y)$ ikke avhenger av $x$, hva forteller det deg?",
      options: ["At $X$ og $Y$ er uavhengige (betinget = marginalen $f_Y$)", "At $X$ og $Y$ er avhengige (betinget varierer med $x$)", "At tettheten ikke er normert (integralet er ulik 1)", "At $X$ er uniformt fordelt over hele sin støtte"],
      explanation: "Er den betingede fordelingen den samme uansett $x$, endrer ikke $X$ noe om $Y$ — det er nettopp uavhengighet.",
    },
    {
      question: "For $f(x,y) = x+y$ på enhetskvadratet er $P(X+Y \\le 1)$:",
      options: ["$1/3$ (integrert over trekanten under $y=1-x$)", "$1/2$ (som om massen var helt jevnt fordelt)", "$2/3$ (tok komplementærområdet ved en feil)", "$1/4$ (forvekslet med et rent areal på $1/4$)"],
      explanation: "Integrasjon over trekanten under $y = 1-x$ gir $1/3$. Grensene $y$ fra 0 til $1-x$ følger av skissen.",
    },
    {
      question: "Hva er den betingede tettheten $f_{Y\\mid X=x}(y)$ for $f(x,y) = 6xy^2$ på enhetskvadratet?",
      options: ["$3y^2$ — uavhengig av $x$, lik marginalen $f_Y$", "$6xy^2$ — selve simultantettheten står igjen", "$2x$ — forvekslet med marginaltettheten $f_X$", "$6y^2/x$ — delte på feil faktor i nevneren"],
      explanation: "$f_{Y\\mid X=x}(y) = 6xy^2/(2x) = 3y^2$. At $x$ forkortes bort viser uavhengighet.",
    },
    {
      question: "I diskret simultanfordeling: den betingede $P(Y=y\\mid X=x)$ er:",
      options: ["$p(x,y)/p_X(x)$, cellen delt på radsummen", "$p(x,y)/p_Y(y)$, cellen delt på kolonnesummen", "$p(x,y)\\cdot p_X(x)$, cellen ganget med radsummen", "$p_X(x)\\cdot p_Y(y)$, produktet av begge marginaler"],
      explanation: "Betinget = cellen delt på radsummen $p_X(x)$. Å dele på kolonnesummen gir betinget for $X$ gitt $Y$.",
    },
    {
      question: "Hvorfor må du tegne integrasjonsområdet når støtten er en trekant?",
      options: ["Fordi den indre grensen da avhenger av den ytre variabelen", "Fordi trekanter ikke lar seg integrere uten en figur i det hele tatt", "Fordi normeringskonstanten alltid blir 0 på en trekantstøtte", "Fordi begge marginaltetthetene da alltid blir helt like"],
      explanation: "På en skrå støtte er $y$-grensen en funksjon av $x$ (eller omvendt). En skisse gjør det tydelig hvilke grenser som gjelder.",
    },
    {
      question: "$E(X)$ kan regnes fra simultantettheten som:",
      options: ["$\\iint x\\,f\\,dx\\,dy$, eller like gjerne $\\int x\\,f_X(x)\\,dx$", "$\\iint f(x,y)\\,dx\\,dy$, bare tettheten integrert opp", "$\\iint xy\\,f(x,y)\\,dx\\,dy$, som egentlig gir $E(XY)$", "$f_X(x)$ evaluert i punktet $x = 0$ på støtten"],
      explanation: "Forventningen til $X$ kan regnes rett fra simultantettheten eller fra marginalen — begge gir samme tall. $\\iint xy\\,f$ gir $E(XY)$.",
    },
    {
      question: "Uavhengige variable er alltid ukorrelerte. Gjelder det motsatte?",
      options: ["Nei — ukorrelerte variable kan være avhengige likevel", "Ja — ukorrelert og uavhengig betyr nøyaktig det samme", "Ja — ukorrelert medfører alltid uavhengighet også", "Nei — uavhengige variable er faktisk aldri ukorrelerte"],
      explanation: "Uavhengig medfører ukorrelert, men ikke omvendt. Kovarians fanger bare lineær sammenheng. Dette drilles i kap. 3.2.",
    },
    {
      question: "Hva er volumtolkningen av en simultantetthet?",
      options: ["$f$ er en flate, og $P((X,Y)\\in A)$ er volumet over $A$", "$f$ er en kurve, og sannsynlighet er arealet under den", "$f$ er selve sannsynligheten i hvert enkelt punkt $(x,y)$", "$f$ er høyden på en søyle med sannsynlighet lik $f$"],
      explanation: "Simultantettheten er en flate over $xy$-planet; sannsynligheter er volumer under den. Totalvolumet er 1.",
    },
  ],
  'stk1100-3-2': [
    {
      question: "Når er to kontinuerlige variable $X$ og $Y$ uavhengige?",
      options: ["Når $f = f_X f_Y$ for alle $(x,y)$, også i null-området", "Når $f = f_X f_Y$ bare i området der tettheten $f$ er positiv", "Når $f$ kan skrives som en $x$-del ganger en $y$-del", "Når kovariansen er null, altså $\\text{Cov}(X,Y) = 0$"],
      explanation: "Faktoriseringen må holde på HELE planet, også der $f=0$. Å sjekke bare der $f>0$, eller å stole på produktform/nullkovarians, er de klassiske fellene.",
    },
    {
      question: "Støtten til $f$ er en trekant. Hva kan du konkludere om uavhengighet?",
      options: ["Avhengige — en ikke-rektangulær støtte gir alltid avhengighet", "Uavhengige, forutsatt at selve formelen faktoriserer pent", "Umulig å avgjøre uten først å regne ut begge marginaltetthetene", "Alltid uavhengige, siden en trekant er et gyldig område"],
      explanation: "En støtte som ikke er et produktområde (rektangel) gir automatisk avhengighet: det finnes et null-områdepunkt der $f=0$ men $f_X f_Y > 0$.",
    },
    {
      question: "Et vanlig feilresonnement: «$f(x,y) = 8xy$ på $0<x<y<1$ faktoriserer som $8x\\cdot y$, så $X,Y$ er uavhengige.» Hva er feil?",
      options: ["Støtten er en trekant, ikke rektangel, så de er avhengige", "At $8xy$ ikke lar seg faktorisere i det hele tatt her", "Ingenting galt — de ekte marginalene er jo nettopp $8x$ og $y$", "Ingenting, resonnementet med produktformen er korrekt"],
      explanation: "Produktformen alene beviser ingenting når støtten er skrå. De ekte marginalene er $f_X = 4x(1-x^2)$ og $f_Y = 4y^3$, og et null-områdepunkt motbeviser uavhengighet.",
    },
    {
      question: "Hva er de ekte marginaltetthetene til $f(x,y) = 8xy$ på $0 < x < y < 1$?",
      options: ["$f_X = 4x(1-x^2)$ og $f_Y = 4y^3$ (grensene fra trekanten)", "$f_X = 8x$ og $f_Y = y$ (formelen bare splittet i to)", "$f_X = 2x$ og $f_Y = 2y$ (som på et enhetskvadrat)", "$f_X = 4x^3$ og $f_Y = 4y(1-y^2)$ (byttet helt om på de to rollene)"],
      explanation: "Grensene følger trekanten: $f_X = \\int_x^1 8xy\\,dy = 4x(1-x^2)$ og $f_Y = \\int_0^y 8xy\\,dx = 4y^3$. Å bare splitte formelen gir feil marginaler.",
    },
    {
      question: "For $f(x,y) = 4xy$ på enhetskvadratet $0<x<1$, $0<y<1$: er $X$ og $Y$ uavhengige?",
      options: ["Ja — $f_X f_Y = 2x\\cdot 2y = 4xy$, og støtten er et rektangel", "Nei — støtten her er en trekant, så variablene må være avhengige", "Nei — $4xy$ er en sum som ikke lar seg faktorisere", "Umulig å avgjøre uten flere opplysninger om støtten"],
      explanation: "Både formen faktoriserer og støtten er et produktområde, så variablene er uavhengige. Her lurer ikke produktformen.",
    },
    {
      question: "Hvilken diskret regel motbeviser uavhengighet umiddelbart?",
      options: ["En 0-celle der både radsummen og kolonnesummen er positive", "En celle med sannsynlighet $p(x,y)$ større enn $0{,}5$", "At radsummene i tabellen slett ikke er like store som hverandre", "At tabellen har flere kolonner enn den har rader"],
      explanation: "En 0-celle med positive marginaler bryter $p(x,y)=p_X p_Y$ direkte — den diskrete parallellen til null-området.",
    },
    {
      question: "$f(x,y) = x + y$ på enhetskvadratet (rektangulær støtte). Er $X$ og $Y$ uavhengige?",
      options: ["Nei — $(x+\\tfrac12)(y+\\tfrac12) \\ne x+y$; en sum faktoriserer ikke", "Ja — støtten er et rektangel, så de er automatisk uavhengige", "Ja — $x+y$ er en $x$-del pluss en $y$-del, altså delelig", "Umulig å avgjøre uten å kjenne kovariansen $\\text{Cov}(X,Y)$"],
      explanation: "Rektangulær støtte er nødvendig, men ikke nok: formen må også faktorisere. En sum $x+y$ kan ikke skrives som $g(x)h(y)$, så variablene er avhengige.",
    },
    {
      question: "Hva betyr det at $X$ og $Y$ er ukorrelerte?",
      options: ["At $\\text{Cov}(X,Y) = 0$ — ingen lineær samvariasjon", "At $X$ og $Y$ er fullstendig uavhengige av hverandre", "At tettheten faktoriserer: $f = f_X(x)\\,f_Y(y)$ overalt", "At produktforventningen er null, altså $E(XY) = 0$"],
      explanation: "Ukorrelert betyr null kovarians, altså ingen lineær sammenheng. Det er svakere enn uavhengighet, og krever ikke $E(XY)=0$ (bare $E(XY)=E(X)E(Y)$).",
    },
    {
      question: "La $X \\in \\{-1,0,1\\}$ likt fordelt og $Y = X^2$. Hva gjelder?",
      options: ["$\\text{Cov} = 0$ (ukorrelerte), men $X$ og $Y$ er avhengige", "$X$ og $Y$ er uavhengige nettopp fordi $\\text{Cov} = 0$", "$\\text{Cov}(X,Y) \\ne 0$, så $X$ og $Y$ er korrelerte", "$X$ og $Y$ er både ukorrelerte og fullstendig uavhengige"],
      explanation: "$E(X)=0$ og $E(XY)=E(X^3)=0$ gir $\\text{Cov}=0$. Men $Y$ er fullstendig bestemt av $X$, så de er avhengige — det klassiske moteksemplet.",
    },
    {
      question: "Uavhengig medfører ukorrelert. Gjelder det omvendte?",
      options: ["Nei — ukorrelerte variable kan godt være avhengige", "Ja — ukorrelert medfører alltid uavhengighet også", "Ja — de to begrepene betyr nøyaktig det samme", "Nei — ukorrelerte variable er faktisk aldri avhengige"],
      explanation: "Uavhengighet er den sterkere egenskapen. Nullkovarians fanger bare lineær samvariasjon, så ukorrelert medfører ikke uavhengig.",
    },
    {
      question: "Hva er et 'produktområde' (rektangulær støtte)?",
      options: ["Et rektangel der $x$- og $y$-grensene er uavhengige", "Et område formet som en trekant med skrå hypotenus", "Et område der tettheten $f(x,y)$ selv er et produkt", "Et hvilket som helst område med positivt totalareal"],
      explanation: "Uavhengige variable må ha en støtte der den ene variabelens mulige verdier ikke avhenger av den andres — altså et rektangel.",
    },
    {
      question: "For å sjekke uavhengighet i en tabell uten nullceller, hva gjør du?",
      options: ["Sjekker om $p(x,y) = p_X(x)\\,p_Y(y)$ i hver eneste celle", "Sjekker bare at alle radsummene er like store som hverandre", "Ser om noen celle har sannsynlighet større enn $0{,}5$", "Regner kovariansen og sjekker om den blir lik null"],
      explanation: "Uten nullceller må du sjekke formen: hver celle må være radsum ganger kolonnesum. Én avvikende celle motbeviser uavhengighet.",
    },
    {
      question: "$f(x,y) = e^{-(x+y)}$ på $x>0$, $y>0$ (eksponensial, rate $\\lambda=1$). Er $X,Y$ uavhengige?",
      options: ["Ja — $e^{-x}\\cdot e^{-y} = e^{-(x+y)}$ på produktstøtten", "Nei — støtten er ubegrenset, så de blir avhengige", "Nei — $e^{-(x+y)}$ lar seg ikke faktorisere i to deler", "Umulig å avgjøre før tettheten er blitt normert"],
      explanation: "Første kvadrant er et produktområde, og $e^{-(x+y)}$ faktoriserer i $e^{-x}\\cdot e^{-y}$, så variablene er uavhengige (to eksponensiale med rate 1).",
    },
    {
      question: "$f(x,y) = 6x$ på trekanten $0<x<y<1$. Selv om $f$ 'bare' avhenger av $x$, hvorfor er $X,Y$ avhengige?",
      options: ["Støtten er en trekant: $X=x$ begrenser $Y$ til $(x,1)$", "Fordi tettheten $6x$ ikke integrerer til 1 på trekanten", "Fordi marginalen for $X$ rett og slett er lik $6x$", "De er faktisk uavhengige, siden $f$ ikke inneholder $y$"],
      explanation: "Trekantstøtten kobler variablene: mulige $y$-verdier avhenger av $x$. Marginalen er $f_X = 6x(1-x)$, ikke $6x$, og null-området avslører avhengigheten.",
    },
    {
      question: "Hva er den riktige rekkefølgen i løsningsoppskriften for uavhengighetssjekk?",
      options: ["Marginaler, produkt, sammenlign på hele planet, konkluder", "Regn kovariansen først, og konkluder rett fra fortegnet", "Se om formelen ligner et produkt, og konkluder direkte", "Regn $E(XY)$, sammenlign med $E(X)E(Y)$, og konkluder"],
      explanation: "Den faste algoritmen er: marginaler, produkt, sammenligning på hele planet, konklusjon. Kovarians/produktform-snarveier er nettopp fellene.",
    },
  ],
  'stk1100-4-1': [
    {
      question: "Hva er definisjonen av den momentgenererende funksjonen $M_X(t)$?",
      options: ["$E(e^{tX})$", "$E(tX)$", "$e^{E(tX)}$", "$\\ln E(e^{tX})$"],
      explanation: "MGF-en er forventningen av $e^{tX}$; de andre er henholdsvis forventningen av $tX$, eksponentialen av forventningen og den kumulantgenererende funksjonen.",
    },
    {
      question: "Hvordan finner du $E(X)$ fra MGF-en?",
      options: ["$M'(0)$ — den deriverte i null", "$M(0)$ — verdien i null", "$M''(0)$ — den andrederiverte i null", "$\\ln M(0)$ — logaritmen i null"],
      explanation: "Forventningen er den førstederiverte i $t=0$. $M(0)=1$ alltid, $M''(0)=E(X^2)$, og $\\ln M(0)=0$.",
    },
    {
      question: "Hva er $\\text{Var}(X)$ uttrykt ved MGF-en?",
      options: ["$M''(0) - [M'(0)]^2$", "$M''(0)$ alene", "$[M'(0)]^2 - M''(0)$", "$M'(0) - M''(0)$"],
      explanation: "Variansen er $E(X^2) - [E(X)]^2 = M''(0) - [M'(0)]^2$. $M''(0)$ alene er bare andre moment.",
    },
    {
      question: "Hva er MGF-en til $X \\sim \\text{gamma}(\\alpha,\\beta)$ (skala $\\beta$), med gyldighetsområde?",
      options: ["$(1-\\beta t)^{-\\alpha}$ for $t < 1/\\beta$", "$(1-\\beta t)^{-\\alpha}$ for alle $t$", "$(1-\\beta t)^{\\alpha}$ for $t < 1/\\beta$", "$(1+\\beta t)^{-\\alpha}$ for $t > 1/\\beta$"],
      explanation: "Gamma-MGF er $(1-\\beta t)^{-\\alpha}$, og den konvergerer bare for $t < 1/\\beta$ — kravet må alltid oppgis.",
    },
    {
      question: "Hvorfor er konvergenskravet $t < 1/\\beta$ nødvendig i gamma-MGF-en?",
      options: ["Ellers divergerer integralet fordi $e^{tx}$ vokser raskere enn tettheten avtar", "Ellers blir MGF-en negativ, som er umulig", "Ellers blir $M(0) \\ne 1$", "Ellers blir forventningen negativ"],
      explanation: "De sammensmeltede eksponentene har rate $1/\\beta - t$; er den ikke positiv, divergerer integralet. Det er derfor kravet oppstår.",
    },
    {
      question: "Hva er MGF-en til $\\sum_{i=1}^n X_i$ når $X_1,\\ldots,X_n$ er uavhengige?",
      options: ["$\\prod_{i=1}^n M_{X_i}(t)$ — produktet av MGF-ene", "$\\sum_{i=1}^n M_{X_i}(t)$ — summen av MGF-ene", "$\\frac{1}{n}\\sum_{i=1}^n M_{X_i}(t)$ — snittet av MGF-ene", "$M_{X_1}(t)$ — bare den første MGF-en"],
      explanation: "For uavhengige variable multipliseres MGF-ene. Det er kumulantene $R=\\ln M$ som adderes — ikke MGF-ene selv.",
    },
    {
      question: "Hvilket prinsipp lar deg identifisere en fordeling fra MGF-en?",
      options: ["MGF-en bestemmer fordelingen entydig", "MGF-en er alltid lik fordelingsfunksjonen", "MGF-en er alltid lik tettheten", "Enhver funksjon av $t$ er en MGF"],
      explanation: "Entydigheten sier at lik MGF nær $t=0$ betyr lik fordeling; derfor kan du kjenne igjen en sum i katalogen. De andre er gale påstander.",
    },
    {
      question: "En sum av uavhengige $X_i \\sim \\text{Poisson}(\\lambda_i)$ er fordelt som:",
      options: ["$\\text{Poisson}(\\sum_i \\lambda_i)$", "$\\text{Poisson}(\\prod_i \\lambda_i)$", "$\\text{gamma}(\\sum_i \\lambda_i,\\ 1)$", "$\\text{Poisson}(\\bar\\lambda)$ med snittraten"],
      explanation: "Produktet av MGF-ene $e^{\\lambda_i(e^t-1)}$ blir $e^{(\\sum\\lambda_i)(e^t-1)}$, altså Poisson med sum av ratene — ikke produkt eller snitt.",
    },
    {
      question: "En sum av $n$ uavhengige eksponensiale med felles forventning $\\mu$ er fordelt som:",
      options: ["$\\text{gamma}(n, \\mu)$", "$\\text{gamma}(1, n\\mu)$", "eksponensial med forventning $n\\mu$", "$\\text{gamma}(n/2, 2)$"],
      explanation: "Hver har MGF $(1-\\mu t)^{-1}$; produktet er $(1-\\mu t)^{-n}$, som er gamma$(n,\\mu)$ (Erlang). Summen er ikke lenger eksponensial.",
    },
    {
      question: "Gjennomsnittet $\\bar X = \\tfrac1n\\sum X_i$ av $n$ uavhengige eksponensiale med forventning $\\mu$ er fordelt som:",
      options: ["$\\text{gamma}(n, \\mu/n)$", "$\\text{gamma}(n, \\mu)$", "$\\text{gamma}(1, \\mu)$", "$\\text{gamma}(n/2, 2)$"],
      explanation: "$M_{\\bar X}(t)=M_S(t/n)=(1-\\tfrac\\mu n t)^{-n}$, altså gamma$(n,\\mu/n)$ med $E=\\mu$ og $\\text{Var}=\\mu^2/n$.",
    },
    {
      question: "Hva er MGF-en til $X \\sim \\text{Poisson}(\\lambda)$?",
      options: ["$e^{\\lambda(e^t - 1)}$", "$e^{\\lambda t}$", "$(1-\\lambda t)^{-1}$", "$e^{\\lambda t + \\lambda t^2/2}$"],
      explanation: "Poisson-MGF er $e^{\\lambda(e^t-1)}$, gyldig for alle $t$. De andre er henholdsvis feil, gamma- og normal-lignende former.",
    },
    {
      question: "Hva er MGF-en til $X \\sim N(\\mu,\\sigma^2)$?",
      options: ["$e^{\\mu t + \\sigma^2 t^2/2}$", "$e^{\\mu t + \\sigma t^2/2}$", "$e^{\\mu t^2 + \\sigma^2 t/2}$", "$(1 - \\sigma^2 t)^{-\\mu}$"],
      explanation: "Normal-MGF er $e^{\\mu t + \\sigma^2 t^2/2}$ (variansen $\\sigma^2$ i $t^2$-leddet), gyldig for alle $t$.",
    },
    {
      question: "Hva gir den kumulantgenererende funksjonen $R(t) = \\ln M(t)$ direkte?",
      options: ["$E(X) = R'(0)$ og $\\text{Var}(X) = R''(0)$", "$E(X) = R(0)$ og $\\text{Var}(X) = R'(0)$", "$E(X) = R''(0)$ og $E(X^2) = R'(0)$", "$E(X^2) = R'(0)$ og $\\text{Var}(X) = R(0)$"],
      explanation: "Snarveien gir forventning som $R'(0)$ og — praktisk — variansen som $R''(0)$ direkte, uten regneformelen. $R(0)=0$ alltid.",
    },
    {
      question: "Hva er $M_X(0)$ for enhver MGF?",
      options: ["1, fordi $E(e^0) = E(1) = 1$", "0, fordi eksponenten er null", "$E(X)$, forventningen", "Uendelig, fordi integralet divergerer i null"],
      explanation: "$M_X(0)=E(e^{0\\cdot X})=E(1)=1$ alltid — en rask kontroll. $E(X)$ får du derimot av $M'(0)$.",
    },
    {
      question: "Hvorfor kreves uavhengighet for at $M_{\\sum X_i} = \\prod M_{X_i}$?",
      options: ["Fordi $E(\\prod e^{tX_i}) = \\prod E(e^{tX_i})$ bare gjelder for uavhengige variable", "Fordi MGF-en ellers blir negativ", "Fordi konvergenskravet ellers ikke holder", "Fordi summen ellers ikke har forventning"],
      explanation: "Faktoriseringen av forventningen til et produkt krever uavhengighet; uten den må kovariansleddene håndteres direkte.",
    },
    {
      question: "For $Y = aX + b$ er MGF-en:",
      options: ["$e^{bt} M_X(at)$", "$a\\,M_X(t) + b$", "$M_X(at + b)$", "$e^{at} M_X(bt)$"],
      explanation: "$E(e^{t(aX+b)}) = e^{bt}E(e^{(at)X}) = e^{bt}M_X(at)$. Skaleringen går inn i argumentet, forskyvningen som faktor foran.",
    },
    {
      question: "Hva er MGF-en til $\\chi^2_n$?",
      options: ["$(1 - 2t)^{-n/2}$ for $t < 1/2$", "$(1 - 2t)^{-n}$ for $t < 1/2$", "$(1 - t)^{-n/2}$ for $t < 1$", "$e^{n(e^t-1)}$ for alle $t$"],
      explanation: "Siden $\\chi^2_n = \\text{gamma}(n/2, 2)$, er MGF-en $(1-2t)^{-n/2}$ med krav $t < 1/2$.",
    },
    {
      question: "Hva er den vanligste feilen når man finner fordelingen til en sum via MGF?",
      options: ["Å addere MGF-ene i stedet for å multiplisere dem", "Å multiplisere MGF-ene i stedet for å addere dem", "Å derivere MGF-en før man summerer", "Å sette $t = 1$ i stedet for $t = 0$"],
      explanation: "For uavhengige ledd multipliseres MGF-ene. Å addere dem er den klassiske feilen (det er kumulantene som adderes).",
    },
    {
      question: "For Poisson$(\\lambda)$ gjelder for forventning og varians at:",
      options: ["begge er lik $\\lambda$", "$E(X) = \\lambda$ og $\\text{Var}(X) = \\lambda^2$", "$E(X) = \\lambda^2$ og $\\text{Var}(X) = \\lambda$", "$E(X) = \\lambda$ og $\\text{Var}(X) = \\sqrt\\lambda$"],
      explanation: "MGF-utledningen gir $M'(0)=\\lambda$ og $M''(0)-\\lambda^2=\\lambda$, så både forventning og varians er $\\lambda$ — Poisson-signaturen.",
    },
    {
      question: "Hva er MGF-en til en eksponensialfordeling i forventningsform ($\\alpha=1$, skala $\\mu$)?",
      options: ["$(1 - \\mu t)^{-1}$ for $t < 1/\\mu$", "$(1 - \\mu t)^{-\\mu}$ for $t < 1/\\mu$", "$e^{\\mu(e^t - 1)}$ for alle $t$", "$e^{\\mu t}$ for alle $t$"],
      explanation: "Eksponensial er gamma med $\\alpha=1$, skala $\\mu$: MGF $(1-\\mu t)^{-1}$, krav $t < 1/\\mu$.",
    },
  ],
  'stk1100-4-2': [
    {
      question: "Hva er første steg i CDF-metoden for $Y = g(X)$?",
      options: ["Skriv $F_Y(y) = P(g(X) \\le y)$ og oversett til en hendelse om $X$", "Sett $y$ rett inn i tettheten $f_X(y)$ og les av sannsynligheten direkte fra den", "Deriver $g$ og sett lik null", "Gjett fordelingsformen og sjekk momentene"],
      explanation: "CDF-metoden går alltid via fordelingsfunksjonen først; du oversetter $\\{g(X)\\le y\\}$ til en hendelse om $X$ og deriverer etterpå. De andre er nettopp feilene metoden skal unngå.",
    },
    {
      question: "For en monotont voksende $g$ er $F_Y(y)$ lik:",
      options: ["$F_X(g^{-1}(y))$", "$1 - F_X(g^{-1}(y))$", "$f_X(g^{-1}(y))$", "$F_X(g(y))$"],
      explanation: "Voksende $g$ gir $\\{g(X)\\le y\\}=\\{X\\le g^{-1}(y)\\}$, altså $F_X(g^{-1}(y))$. Halen $1-F_X$ hører til avtakende $g$.",
    },
    {
      question: "Når $g$ er avtakende, blir $F_Y(y)$:",
      options: ["$1 - F_X(g^{-1}(y))$, fordi ulikheten snur", "$F_X(g^{-1}(y))$, uendret", "$F_X(g^{-1}(y))$, uendret, fordi ulikheten aldri snur ved en transformasjon", "$1 - f_X(g^{-1}(y))$"],
      explanation: "Avtakende $g$ gjør $\\{g(X)\\le y\\}=\\{X\\ge g^{-1}(y)\\}$, så halen $1-F_X(g^{-1}(y))$ dukker opp. Å glemme å snu er den klassiske feilen.",
    },
    {
      question: "Tettheten $f_Y(y)$ i CDF-metoden er:",
      options: ["$f_X(g^{-1}(y))\\,\\left|\\tfrac{d}{dy}g^{-1}(y)\\right|$", "$f_X(g^{-1}(y))$ alene", "$f_X(g(y))\\,|g'(y)|$", "$F_X(g^{-1}(y))$ multiplisert med den inverse funksjonen $g^{-1}(y)$ selv"],
      explanation: "Etter kjerneregelen ganges med absoluttverdien av den inverses deriverte. Absoluttverdien sikrer en positiv tetthet.",
    },
    {
      question: "Hva er fordelingen til $Z^2$ når $Z \\sim N(0,1)$?",
      options: ["$\\chi^2_1 = \\text{gamma}(\\tfrac12, 2)$", "$\\chi^2_2 = \\text{gamma}(1, 2)$", "$N(0,1)$ igjen", "eksponensial med forventning 1"],
      explanation: "Kvadratet av en standardnormal har én frihetsgrad: $\\chi^2_1 = \\text{gamma}(1/2,2)$. To frihetsgrader ($\\chi^2_2$) hører til eksponensial-pivoten.",
    },
    {
      question: "Hvorfor kan man ikke bruke én enkelt invers for $Y = X^2$?",
      options: ["Fordi $g(x) = x^2$ ikke er monoton — både $+z$ og $-z$ gir samme kvadrat", "Fordi $X^2$ alltid er negativ", "Fordi $X^2$ verken har en veldefinert fordelingsfunksjon eller tetthet på $y > 0$", "Fordi kvadratet ikke er deriverbart"],
      explanation: "Kvadreringen er ikke monoton, så begge greiner må samles i CDF-steget: $\\{X^2\\le y\\}=\\{-\\sqrt y\\le X\\le\\sqrt y\\}$.",
    },
    {
      question: "For $X \\sim N(\\mu, \\sigma^2)$ (kjent $\\mu$) er $(X-\\mu)^2/\\sigma^2$ fordelt som:",
      options: ["$\\chi^2_1$", "$\\chi^2_2$", "$N(0,1)$", "gamma$(1,1)$"],
      explanation: "Standardiseringen gir $Z=(X-\\mu)/\\sigma\\sim N(0,1)$, og $(X-\\mu)^2/\\sigma^2 = Z^2 \\sim \\chi^2_1$ — én frihetsgrad.",
    },
    {
      question: "For eksponensial i forventningsform ($E(X)=\\mu$) er $2X/\\mu$ fordelt som:",
      options: ["$\\chi^2_2$", "$\\chi^2_1$", "eksponensial med forventning $\\mu$", "gamma$(2, \\mu)$"],
      explanation: "$F(w)=1-e^{-w/2}$ er eksponensial med forventning 2 = gamma$(1,2)=\\chi^2_2$. Parameteren $\\mu$ faller ut, så størrelsen er pivotal.",
    },
    {
      question: "For Weibull med skala $\\beta$ og form $\\alpha$ er $(X/\\beta)^\\alpha$ fordelt som:",
      options: ["eksponensial med forventning 1 (gamma$(1,1)$)", "eksponensial med forventning $\\beta$", "$\\chi^2_1$", "Weibull med samme parametre"],
      explanation: "$F((X/\\beta)^\\alpha \\le y)=1-e^{-y}$ — potensløftet retter ut Weibull til en standard eksponensial med forventning 1.",
    },
    {
      question: "Hva er Jacobi-formelen for simultantettheten til $(U,V)=g(X,Y)$?",
      options: ["$f_{UV}(u,v) = f_{XY}(x(u,v), y(u,v))\\cdot |J|$", "$f_{UV}(u,v) = f_{XY}(x(u,v), y(u,v))\\cdot J$", "$f_{UV}(u,v) = f_{XY}(u, v)\\cdot |J|$", "$f_{UV}(u,v) = f_{XY}(x(u,v), y(u,v))$ delt på absoluttverdien $|J|$"],
      explanation: "De gamle variablene settes inn og ganges med absoluttverdien av determinanten. $J$ uten absoluttverdi, feil argument, eller deling er alle gale.",
    },
    {
      question: "Hvorfor bruker Jacobi-formelen $|J|$ og ikke $J$?",
      options: ["Fordi en tetthet aldri kan være negativ, mens $J$ kan bli negativ", "Fordi $J$ alltid er null", "Fordi $|J|$ er lettere å regne ut", "Fordi determinanten ellers ikke er entydig definert for et bivariat variabelbytte"],
      explanation: "Determinantens fortegn avhenger av variabelrekkefølgen og kan bli negativt; en tetthet må være ikke-negativ, derfor absoluttverdien.",
    },
    {
      question: "Hva er første steg når du bruker Jacobi-formelen?",
      options: ["Løs $U, V$ for $X, Y$ (finn inversen)", "Integrer ut $V$ med en gang", "Deriver $f_{XY}$ mhp. $x$ og $y$", "Sett $u = x$ og $v = y$ direkte"],
      explanation: "Du må først uttrykke de gamle variablene ved de nye ($x(u,v), y(u,v)$) for å kunne derivere partielt og sette inn i $f_{XY}$.",
    },
    {
      question: "Jacobi-determinanten $J$ for $(U,V) \\to (X,Y)$ er:",
      options: ["$\\tfrac{\\partial x}{\\partial u}\\tfrac{\\partial y}{\\partial v} - \\tfrac{\\partial x}{\\partial v}\\tfrac{\\partial y}{\\partial u}$", "$\\tfrac{\\partial x}{\\partial u}\\tfrac{\\partial y}{\\partial v} + \\tfrac{\\partial x}{\\partial v}\\tfrac{\\partial y}{\\partial u}$", "$\\tfrac{\\partial x}{\\partial u} + \\tfrac{\\partial y}{\\partial v}$", "$\\tfrac{\\partial u}{\\partial x}\\tfrac{\\partial v}{\\partial y} - \\tfrac{\\partial u}{\\partial y}\\tfrac{\\partial v}{\\partial x}$"],
      explanation: "Determinanten av 2×2-matrisen er produktet av diagonalen minus produktet av antidiagonalen, med de gamle variablene derivert mhp. de nye.",
    },
    {
      question: "For $U = X+Y$, $V = X$ (der $X, Y$ er positive) er integrasjonsområdet i $(u,v)$:",
      options: ["$0 < v < u$ — en kile under linjen $v = u$", "$0 < u < v$ — over linjen $v = u$", "hele førstekvadranten uten begrensning", "et rektangel $0 < u < 1$, $0 < v < 1$"],
      explanation: "$x = v > 0$ og $y = u - v > 0$ gir $0 < v < u$ — en trekantformet kile som må tegnes for å sette grensene.",
    },
    {
      question: "Hvordan finner du marginaltettheten $f_U(u)$ etter et Jacobi-bytte?",
      options: ["$\\int f_{UV}(u,v)\\,dv$ med grenser fra det tegnede området", "$f_{UV}(u, 0)$ ved å sette $v = 0$ i den nye simultantettheten direkte", "$\\tfrac{d}{du}f_{UV}(u,v)$", "$f_{UV}(u,v)\\cdot |J|$ på nytt"],
      explanation: "Marginalen fås ved å integrere ut den andre variabelen; grensene leses av det tegnede støtteområdet.",
    },
    {
      question: "For $U = X+Y$ og $V = X/(X+Y)$ med uavhengige eksponensiale (rate 1) gjelder:",
      options: ["$U \\sim$ gamma$(2,1)$ og $V \\sim$ uniform$[0,1]$, og de er uavhengige", "$U$ og $V$ er avhengige", "$U \\sim$ uniform$[0,1]$ og $V \\sim$ gamma$(2,1)$, altså totalen uniform og andelen gamma", "både $U$ og $V$ er eksponensiale"],
      explanation: "$f_{UV}(u,v)=u e^{-u}$ på $u>0, 0<v<1$ faktoriserer over et produktområde: $U$ er gamma$(2,1)$, $V$ er uniform, og de er uavhengige.",
    },
    {
      question: "Hvordan avgjør du om $U$ og $V$ er uavhengige etter et Jacobi-bytte?",
      options: ["Sjekk om $f_{UV}$ faktoriserer i en $u$-del og en $v$-del over et produktområde", "Sjekk om $|J| = 1$", "Sjekk om $U$ og $V$ har nøyaktig samme forventning og varians etter det utførte byttet", "Sjekk om determinanten er negativ"],
      explanation: "Uavhengighet krever at $f_{UV}(u,v)=f_U(u)f_V(v)$ for alle $(u,v)$ og at støtten er et produktområde — akkurat uavhengighetssjekken fra kap. 3.2.",
    },
    {
      question: "Hva blir $Y = e^{-X}$ når $X$ er eksponensial med rate 1?",
      options: ["uniform på $[0,1]$", "eksponensial med rate 1", "$\\chi^2_2$", "normal $N(0,1)$"],
      explanation: "$g$ er avtakende; $F_Y(y)=P(X\\ge -\\ln y)=e^{\\ln y}=y$ på $(0,1)$, altså uniform. Dette er probability-integral-transformen.",
    },
    {
      question: "Hva blir $Y = -\\ln U$ når $U$ er uniform på $[0,1]$?",
      options: ["eksponensial med rate 1 (forventning 1)", "eksponensial med rate 1 og forventning 1 på hele den positive støtten", "$\\chi^2_1$", "gamma$(2,1)$"],
      explanation: "$F_Y(y)=P(U\\ge e^{-y})=1-e^{-y}$, $y>0$ — eksponensial med rate 1. Dette er inversjonsmetoden for å simulere eksponensiale.",
    },
    {
      question: "Hvilke tre transformasjonsteknikker dekker Del 4?",
      options: ["CDF-metoden, Jacobi og MGF-identifikasjon", "CDF-metoden, momentmetoden og bootstrap", "Jacobi, maximum likelihood og CLT", "CDF-metoden, delvis integrasjon og Bayes"],
      explanation: "CDF-metoden (én variabel), Jacobi (to variable) og MGF-identifikasjon (summer, kap. 4.1) er de tre transformasjonsverktøyene. De andre hører til estimering/inferens.",
    },
    {
      question: "Symmetrien til standardnormalen som brukes i utledningen av $Z^2 \\sim \\chi^2_1$ er:",
      options: ["$\\Phi(-z) = 1 - \\Phi(z)$", "$\\Phi(-z) = \\Phi(z)$", "$\\Phi(-z) = -\\Phi(z)$", "$\\Phi(z) = 1 - \\varphi(z)$"],
      explanation: "Standardnormalens fordelingsfunksjon oppfyller $\\Phi(-z)=1-\\Phi(z)$, som gir $F_Y(y)=2\\Phi(\\sqrt y)-1$.",
    },
    {
      question: "Hva er en 'pivotal' i denne sammenhengen?",
      options: ["En transformert størrelse der de ukjente parametrene faller ut av fordelingen", "En transformert variabel som alltid har forventning lik null uansett hvilken parameter", "En estimator som alltid er forventningsrett", "En fordeling uten varians"],
      explanation: "En pivotal (som $2X/\\mu\\sim\\chi^2_2$) har en fordeling som ikke avhenger av de ukjente parametrene — råstoffet til eksakt KI i Del 6.",
    },
    {
      question: "Hva skjer med skalaparameteren når du skalerer en gammavariabel: $c\\cdot\\text{gamma}(\\alpha,\\beta)$?",
      options: ["Den blir $\\text{gamma}(\\alpha, c\\beta)$ — bare skalaen endres", "Den blir $\\text{gamma}(c\\alpha, \\beta)$ — bare formen endres", "Den blir $\\text{gamma}(c\\alpha, c\\beta)$", "Fordelingen er ikke lenger gamma"],
      explanation: "Positiv skalering endrer kun skalaparameteren: $c\\cdot\\text{gamma}(\\alpha,\\beta)=\\text{gamma}(\\alpha,c\\beta)$. Det er derfor $2X/\\mu$ igjen blir en gamma/$\\chi^2$.",
    },
    {
      question: "Hva er den vanligste feilen etter et Jacobi-bytte når man skal marginalisere?",
      options: ["Feil integrasjonsgrenser fordi støtteområdet ikke er tegnet", "Å bruke $J$ i stedet for $f_{XY}$", "Å derivere $f_{UV}$ mhp. $u$ i stedet for å integrere ut den andre variabelen", "Å glemme å standardisere $U$"],
      explanation: "Grensene i marginaliseringsintegralet må leses av det tegnede området (ofte en kile/trekant); gjettede grenser er hovedfeilen.",
    },
    {
      question: "Setter du en kontinuerlig variabel inn i sin egen fordelingsfunksjon, $Y = F_X(X)$, blir $Y$:",
      options: ["uniform på $[0,1]$", "eksponensial med rate 1", "normal $N(0,1)$", "lik $X$ igjen"],
      explanation: "$Y=F_X(X)$ er alltid uniform på $[0,1]$ (probability integral transform) — omvendt gir $F_X^{-1}(U)$ tilbake $X$, grunnlaget for inversjonsmetoden.",
    },
  ],
  'stk1100-4-3': [
    {
      question: "For eksponensial i forventningsform ($E(X)=\\mu$) er summen $2\\sum_{i=1}^n X_i/\\mu$ fordelt som:",
      options: ["$\\chi^2_{2n}$", "$\\chi^2_n$", "$\\chi^2_{n-1}$", "gamma$(n, \\mu)$"],
      explanation: "Hvert $2X_i/\\mu \\sim \\chi^2_2$, og $n$ ledd med felles skala 2 gir gamma$(n,2)=\\chi^2_{2n}$. Eksponensial gir to frihetsgrader per ledd.",
    },
    {
      question: "For normalfordelte $X_i$ med kjent $\\mu$ er $\\sum_{i=1}^n (X_i-\\mu)^2/\\sigma^2$ fordelt som:",
      options: ["$\\chi^2_n$", "$\\chi^2_{2n}$", "$\\chi^2_{n-1}$", "$\\chi^2_1$"],
      explanation: "Hvert $(X_i-\\mu)^2/\\sigma^2 = Z_i^2 \\sim \\chi^2_1$, så summen av $n$ er $\\chi^2_n$. Normal gir én frihetsgrad per ledd — i motsetning til eksponensial.",
    },
    {
      question: "Hvor mange frihetsgrader bidrar ett eksponensialledd $2X/\\mu$ med?",
      options: ["To ($\\chi^2_2$)", "Én ($\\chi^2_1$)", "Null", "Halvparten ($\\chi^2_{1/2}$)"],
      explanation: "$2X/\\mu \\sim \\chi^2_2$, altså to frihetsgrader. Dette er grunnen til at summen blir $\\chi^2_{2n}$, ikke $\\chi^2_n$.",
    },
    {
      question: "Hva er første trinn i løsningsoppskriften for sjanger E?",
      options: ["Identifiser transformasjonen som gjør observasjonen standard", "Regn ut forventning og varians til $X$ før du velger noen transformasjon overhodet", "Sett opp likelihood-funksjonen", "Slå opp $\\chi^2$-persentilen i tabellen"],
      explanation: "Du starter med å velge transformasjonen (skala/kvadrat/potens/log). Likelihood og persentiler hører til senere ledd i kjeden (Del 5–6).",
    },
    {
      question: "For eksponensial i rateform ($f(x)=\\lambda e^{-\\lambda x}$) er den riktige transformasjonen til $\\chi^2_2$:",
      options: ["$2\\lambda X$", "$2X/\\lambda$", "$\\lambda X / 2$", "$X/(2\\lambda)$"],
      explanation: "I rateform blir det $2\\lambda X \\sim \\chi^2_2$; $F(w)=1-e^{-w/2}$. Forventningsform gir derimot $2X/\\mu$.",
    },
    {
      question: "For en Weibull-variabel med skala $\\beta$ og form $\\alpha$ er $(X/\\beta)^\\alpha$ fordelt som:",
      options: ["eksponensial med forventning 1 (gamma$(1,1)$)", "$\\chi^2_2$", "Weibull med samme parametre", "gamma$(\\alpha, \\beta)$"],
      explanation: "$F((X/\\beta)^\\alpha \\le y)=1-e^{-y}$ — potensløftet gir en standard eksponensial med forventning 1.",
    },
    {
      question: "For Pareto med $F_X(x)=1-(k/x)^\\theta$ er den transformasjonen som gir $\\chi^2_2$:",
      options: ["$2\\theta\\ln(X/k)$", "$2\\theta X/k$", "$(X/k)^\\theta$", "$2\\theta k/X$"],
      explanation: "Log-løftet $2\\theta\\ln(X/k) \\sim \\chi^2_2$; logaritmen gjør potenshalen om til en eksponensial. Summen blir $\\chi^2_{2n}$.",
    },
    {
      question: "Hvilken regel brukes for å løfte fra enkelt-ledd til sum?",
      options: ["Sum av uavhengige gamma med felles skala legger sammen formparametrene", "Sum av gamma legger sammen skalaparametrene mens formparameteren holdes uendret", "Summen av MGF-ene gir fordelingen til summen", "Summen av tetthetene gir fordelingen til summen"],
      explanation: "$\\sum \\text{gamma}(\\alpha_i,\\beta)=\\text{gamma}(\\sum\\alpha_i,\\beta)$ — formparametrene adderes ved felles skala. Bevist via MGF-entydighet (kap. 4.1).",
    },
    {
      question: "Hvorfor er kravet om felles skala avgjørende i sum-av-gamma-regelen?",
      options: ["Uten felles skala er summen ikke lenger en gammafordeling", "Uten felles skala blir formparameteren negativ", "Uten felles skala divergerer MGF-en", "Uten felles skala blir summen normal"],
      explanation: "Bare når skalaen $\\beta$ er lik faktoriserer MGF-produktet til $(1-\\beta t)^{-\\sum\\alpha_i}$. Ulik skala gir ingen ren gamma.",
    },
    {
      question: "Hva kjennetegner en 'pivotal' som $W = 2\\sum X_i/\\mu$?",
      options: ["Fordelingen ($\\chi^2_{2n}$) avhenger ikke av den ukjente parameteren", "Forventningen til den transformerte størrelsen er alltid nøyaktig lik null uansett", "Den er alltid normalfordelt", "Den inneholder ingen observasjoner"],
      explanation: "En pivotal har en fordeling uten den ukjente parameteren, selv om størrelsen inneholder den. Det gir eksakt KI ved å løse $P(a\\le W\\le b)=0{,}95$.",
    },
    {
      question: "I CDF-steget, hva gjør du hvis transformasjonen $g$ er avtakende?",
      options: ["Snu ulikheten: $\\{g(X)\\le y\\}=\\{X\\ge g^{-1}(y)\\}$, så $F_Y=1-F_X(g^{-1}(y))$", "Behold ulikheten uendret, siden retningen aldri påvirkes av om $g$ vokser eller avtar", "Deriver $g$ først og sett lik null", "Bruk $F_Y = F_X(g^{-1}(y))$ som vanlig"],
      explanation: "Avtakende $g$ snur ulikheten, og halen $1-F_X$ dukker opp. Å glemme dette er en klassisk feil.",
    },
    {
      question: "For $\\chi^2_{2n}$ med $n=12$ (altså $\\nu=24$), hva er $E(W)$ og $\\text{Var}(W)$?",
      options: ["$E=24$, $\\text{Var}=48$", "$E=12$, $\\text{Var}=24$", "$E=24$, $\\text{Var}=24$", "$E=48$, $\\text{Var}=24$"],
      explanation: "For $\\chi^2_\\nu$ er $E=\\nu$ og $\\text{Var}=2\\nu$; med $\\nu=24$ blir det $E=24$, $\\text{Var}=48$.",
    },
    {
      question: "Hva er den dyreste (mest belønnede) feilen i denne sjangeren?",
      options: ["Feil frihetsgrader — $n$ i stedet for $2n$ (eller omvendt)", "Å bruke integrasjon i stedet for derivasjon", "Å skrive $F_X$ i stedet for $f_X$", "Å oppgi standardavviket i stedet for variansen"],
      explanation: "Frihetsgradene ($2n$ for eksponensial/Pareto, $n$ for normal med kjent $\\mu$) er der sensor legger A-poenget — tell dem hver gang.",
    },
    {
      question: "For en Rayleigh-variabel med $F_X(x)=1-e^{-x^2/(2\\sigma^2)}$ er $X^2/\\sigma^2$ fordelt som:",
      options: ["$\\chi^2_2$", "$\\chi^2_1$", "Rayleigh med samme $\\sigma$", "eksponensial med forventning $\\sigma^2$"],
      explanation: "$F(x^2/\\sigma^2 \\le y)=1-e^{-y/2}$, altså $\\chi^2_2$. Summen av $n$ slike blir $\\chi^2_{2n}$.",
    },
    {
      question: "Du får en 'oppskriftsfordeling' med ukjent navn men oppgitt $F_X(x)=1-e^{-(x/\\theta)^3}$. Hva gjør du?",
      options: ["Følger oppskriften: potensløftet $(X/\\theta)^3$ gir en standard eksponensial", "Gjetter at det er en normalfordeling og standardiserer observasjonene før summering", "Gir opp fordi fordelingsnavnet er ukjent", "Bruker $\\chi^2_1$ fordi det alltid er én frihetsgrad"],
      explanation: "Ukjent navn skremmer ikke — $F_X$ er alt du trenger. Potensløftet $(X/\\theta)^3$ gir $1-e^{-y}$, en standard eksponensial; deretter summerer du til $\\chi^2_{2n}$.",
    },
  ],
  'stk1100-5-1': [
    {
      question: "Hva er forskjellen på en estimator og et estimat?",
      options: ["Estimatoren er en stokastisk regel av observasjonene; estimatet er tallet regelen gir", "Estimatoren er tallet man leser av; estimatet er den stokastiske regelen som ligger bak", "Estimatoren gjelder for diskrete data, mens estimatet gjelder for kontinuerlige data", "Det er to helt likeverdige navn på samme størrelse, og skillet er uten betydning"],
      explanation: "Estimatoren $\\hat\\theta$ er en funksjon av de stokastiske observasjonene (stor bokstav); estimatet er tallverdien når konkrete data settes inn.",
    },
    {
      question: "En estimator $\\hat\\theta$ kalles forventningsrett for $\\theta$ dersom:",
      options: ["$E(\\hat\\theta) = \\theta$ for alle verdier av $\\theta$", "$\\hat\\theta = \\theta$ for hvert enkelt utvalg man trekker", "$\\text{Var}(\\hat\\theta) = 0$ for alle verdier av $\\theta$", "$\\hat\\theta$ nærmer seg $\\theta$ bare når $n$ blir uendelig stor"],
      explanation: "Forventningsretthet betyr at estimatoren treffer riktig i snitt over alle utvalg, altså $E(\\hat\\theta) = \\theta$.",
    },
    {
      question: "For iid $X_1, \\dots, X_n$ med $E(X_i) = \\mu$ er $E(\\bar X)$ lik:",
      options: ["$\\mu$", "$\\mu/n$", "$n\\mu$", "$\\mu^2$"],
      explanation: "$E(\\bar X) = \\frac1n\\sum E(X_i) = \\frac1n\\cdot n\\mu = \\mu$, så $\\bar X$ er forventningsrett for $\\mu$.",
    },
    {
      question: "For iid-observasjoner med varians $\\sigma^2$ er $\\text{Var}(\\bar X)$ lik:",
      options: ["$\\sigma^2/n$", "$\\sigma^2$", "$\\sigma^2/n^2$", "$n\\sigma^2$"],
      explanation: "$\\text{Var}(\\bar X) = \\frac{1}{n^2}\\sum\\text{Var}(X_i) = \\frac{n\\sigma^2}{n^2} = \\sigma^2/n$.",
    },
    {
      question: "Standardfeilen til $\\bar X$ (med kjent $\\sigma$) er:",
      options: ["$\\sigma/\\sqrt n$", "$\\sigma^2/n$", "$\\sigma/n$", "$\\sigma\\sqrt n$"],
      explanation: "$\\text{SE}(\\bar X) = \\sqrt{\\text{Var}(\\bar X)} = \\sqrt{\\sigma^2/n} = \\sigma/\\sqrt n$.",
    },
    {
      question: "Skjevheten (bias) til en estimator er definert som:",
      options: ["$E(\\hat\\theta) - \\theta$", "$\\hat\\theta - E(\\hat\\theta)$", "$\\theta - \\hat\\theta$ for det aktuelle utvalget", "$\\sqrt{\\text{Var}(\\hat\\theta)}$"],
      explanation: "Skjevheten er den systematiske forskjellen mellom forventningen til estimatoren og sann verdi: $E(\\hat\\theta) - \\theta$.",
    },
    {
      question: "Hvorfor deler utvalgsvariansen $S^2$ på $n-1$ og ikke på $n$?",
      options: ["Fordi $\\frac{1}{n-1}\\sum(X_i-\\bar X)^2$ er forventningsrett for $\\sigma^2$", "Fordi $n-1$ alltid gir et litt større og dermed mer forsiktig og sikkert tall", "Fordi det er dette som gjør at $\\bar X$ blir forventningsrett for forventningen $\\mu$", "Fordi kravet er at den utregnede variansen alltid skal komme ut som et helt tall"],
      explanation: "$n$-varianten er skjev ($E = \\frac{n-1}{n}\\sigma^2$); deling på $n-1$ gjør estimatoren forventningsrett for $\\sigma^2$.",
    },
    {
      question: "$n$-varianten $\\hat\\sigma^2 = \\frac1n\\sum(X_i-\\bar X)^2$ har forventning:",
      options: ["$\\frac{n-1}{n}\\sigma^2$", "$\\sigma^2$", "$\\frac{n}{n-1}\\sigma^2$", "$\\frac{\\sigma^2}{n}$"],
      explanation: "$E(\\hat\\sigma^2) = \\frac{n-1}{n}\\sigma^2 < \\sigma^2$, så $n$-varianten underestimerer systematisk.",
    },
    {
      question: "Er $E(\\hat\\theta) = c\\theta$ med kjent $c \\ne 1$, hvilken estimator er forventningsrett?",
      options: ["$\\hat\\theta/c$", "$c\\,\\hat\\theta$", "$\\hat\\theta - c$", "$\\hat\\theta + c$"],
      explanation: "$E(\\hat\\theta/c) = \\frac1c E(\\hat\\theta) = \\frac1c\\cdot c\\theta = \\theta$, så deling på faktoren $c$ korrigerer skjevheten.",
    },
    {
      question: "Er $S^2$ forventningsrett for $\\sigma^2$, er $S = \\sqrt{S^2}$ for $\\sigma$:",
      options: ["skjev — den underestimerer systematisk fordi $\\sqrt{\\cdot}$ er konkav", "alltid forventningsrett, som en direkte følge av at $S^2$ er forventningsrett", "skjev — den overestimerer systematisk fordi rot-operasjonen forsterker tallet", "forventningsrett, men bare i de tilfellene der $n$ er et partall"],
      explanation: "$E[\\sqrt V] < \\sqrt{E V}$ for konkav rot, så $S$ underestimerer $\\sigma$ selv om $S^2$ treffer $\\sigma^2$.",
    },
    {
      question: "Nøkkelinnsikten $E[\\sqrt V] \\ne \\sqrt{E[V]}$ skyldes at:",
      options: ["kvadratrot er en krum (konkav) funksjon, så forventning og funksjon ikke bytter plass", "$V$ i disse tilfellene alltid er negativ, slik at kvadratrota ikke er definert i det hele tatt", "variansen til $V$ er nøyaktig null her, og likheten faller da sammen av seg selv", "$V$ må være normalfordelt for at en slik likhet mellom sidene skal kunne gjelde"],
      explanation: "For en ikke-lineær (her konkav) funksjon gjelder $E[g(V)] \\ne g(E[V])$; for rot blir det $E[\\sqrt V] < \\sqrt{E V}$.",
    },
    {
      question: "For $V \\sim \\text{gamma}(\\alpha, \\beta)$ gir E(Vʳ)-formelen $E(V^r)$ lik:",
      options: ["$\\beta^r\\,\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$", "$\\beta^r\\,\\Gamma(\\alpha)/\\Gamma(\\alpha+r)$", "$\\alpha^r\\,\\Gamma(\\beta+r)/\\Gamma(\\beta)$", "$\\beta^r\\,\\Gamma(\\alpha)\\,\\Gamma(r)$"],
      explanation: "E(Vʳ)-formelen fra kap. 2.2: $E(V^r) = \\beta^r\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ for $r > -\\alpha$.",
    },
    {
      question: "Γ-faktoren som kvantifiserer skjevheten til en rot-/potensestimator er:",
      options: ["$\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$", "$\\Gamma(\\alpha)/\\Gamma(\\alpha+r)$", "$\\Gamma(\\alpha+r)\\cdot\\Gamma(\\alpha)$", "$\\Gamma(\\alpha)^r$"],
      explanation: "Forholdet $\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ i E(Vʳ)-formelen er akkurat skjevhetsfaktoren; deling på den gir forventningsrett.",
    },
    {
      question: "To forventningsrette estimatorer for samme $\\theta$ velges mellom. Hvilken bør brukes?",
      options: ["Den med lavest varians", "Den med størst varians, for sikkerhets skyld", "Den som gir det største estimatet på dine data", "Det spiller ingen rolle når begge er forventningsrette"],
      explanation: "Blant forventningsrette estimatorer er den med lavest varians mest presis (effektiv).",
    },
    {
      question: "$\\hat\\mu_1 = \\bar X$ (av $n$) og $\\hat\\mu_2 = X_1$ er begge forventningsrette for $\\mu$. Hvilken er best, og hvorfor?",
      options: ["$\\bar X$, fordi $\\text{Var}(\\bar X) = \\sigma^2/n < \\sigma^2 = \\text{Var}(X_1)$", "$X_1$, fordi den er klart enklest å regne ut for hånd på en eksamen", "$X_1$, fordi den er robust ved at den ikke avhenger av utvalgsstørrelsen $n$", "De er nøyaktig like gode i alle henseender, siden begge er forventningsrette"],
      explanation: "Begge treffer i snitt, men $\\bar X$ har $n$ ganger mindre varians og er dermed skarpere.",
    },
    {
      question: "En estimator med $E(\\hat\\theta) = \\frac{n}{n+1}\\theta$ har skjevhet:",
      options: ["$-\\frac{1}{n+1}\\theta$ (underestimerer)", "$+\\frac{1}{n+1}\\theta$ (overestimerer)", "$0$ (forventningsrett)", "$\\frac{n}{n+1}$ uavhengig av $\\theta$"],
      explanation: "$\\text{bias} = E(\\hat\\theta)-\\theta = \\frac{n}{n+1}\\theta - \\theta = -\\frac{1}{n+1}\\theta$, altså negativ (underestimering).",
    },
    {
      question: "Hvordan sjekker man om en estimator er forventningsrett?",
      options: ["Regner ut $E(\\hat\\theta)$ med momentreglene og ser om det blir $\\theta$", "Regner ut variansen $\\text{Var}(\\hat\\theta)$ og sjekker om den er lik null", "Setter inn ett bestemt datasett og ser om estimatet treffer $\\theta$ nøyaktig", "Antar det uten regning, siden de aller fleste estimatorer er forventningsrette"],
      explanation: "Forventningsretthet må regnes ut: ta $E$ av estimatoren via $E(\\sum a_iX_i) = \\sum a_iE(X_i)$ og sammenlign med $\\theta$.",
    },
    {
      question: "For eksponensial i forventningsform ($E(X_i)=\\mu$, $\\text{Var}(X_i)=\\mu^2$) er $\\text{Var}(\\bar X)$:",
      options: ["$\\mu^2/n$", "$\\mu/n$", "$\\mu^2$", "$\\mu^2/n^2$"],
      explanation: "$\\text{Var}(\\bar X) = \\text{Var}(X_i)/n = \\mu^2/n$.",
    },
    {
      question: "Hvor mange målinger trengs for at $\\text{SE}(\\bar X) = \\sigma/\\sqrt n$ skal halveres?",
      options: ["Fire ganger så mange", "Dobbelt så mange", "Halvparten så mange", "Det er umulig å redusere standardfeilen"],
      explanation: "$\\text{SE}$ synker som $1/\\sqrt n$; for å halvere den må $\\sqrt n$ dobles, altså $n$ firedobles.",
    },
    {
      question: "Middelkvadratfeilen (MSE) til en estimator kan skrives som:",
      options: ["$\\text{Var}(\\hat\\theta) + [\\text{bias}(\\hat\\theta)]^2$", "$\\text{Var}(\\hat\\theta) - [\\text{bias}(\\hat\\theta)]^2$", "$\\text{Var}(\\hat\\theta)\\cdot\\text{bias}(\\hat\\theta)$", "$[\\text{bias}(\\hat\\theta)]^2$ alene"],
      explanation: "$\\text{MSE} = E[(\\hat\\theta-\\theta)^2] = \\text{Var}(\\hat\\theta) + [\\text{bias}(\\hat\\theta)]^2$; for forventningsrette er MSE = varians.",
    },
    {
      question: "For korreksjonsfaktoren $c_n$ i $E(S) = c_n\\sigma$ (normal) gjelder:",
      options: ["$c_n < 1$, så $S$ underestimerer $\\sigma$", "$c_n > 1$, så $S$ overestimerer $\\sigma$", "$c_n = 1$, så $S$ er forventningsrett for $\\sigma$", "$c_n$ avhenger av $\\sigma$ og kan ikke regnes ut"],
      explanation: "$c_n = \\sqrt{\\tfrac{2}{n-1}}\\Gamma(n/2)/\\Gamma((n-1)/2) < 1$ (f.eks. $0{,}9727$ for $n=10$), så $S$ bommer nedover.",
    },
    {
      question: "En vektet estimator $\\sum a_i X_i$ er forventningsrett for $\\mu$ nettopp når:",
      options: ["vektene summerer til 1: $\\sum a_i = 1$", "alle vektene er like: $a_i = 1$", "vektene summerer til $n$: $\\sum a_i = n$", "vektene er positive"],
      explanation: "$E(\\sum a_iX_i) = \\mu\\sum a_i$, som er $\\mu$ hviss $\\sum a_i = 1$.",
    },
    {
      question: "Konsistens for en estimator betyr (STK1100-intuisjonen):",
      options: ["at variansen (og skjevheten) går mot null når $n \\to \\infty$", "at estimatoren er nøyaktig forventningsrett for enhver utvalgsstørrelse $n$", "at det utregnede estimatet alltid treffer parameteren $\\theta$ helt eksakt", "at estimatoren beholder én og samme konstante varians uansett $n$"],
      explanation: "En konsistent estimator nærmer seg $\\theta$ når $n$ vokser; kravet er $\\text{Var} \\to 0$ og $\\text{bias} \\to 0$.",
    },
    {
      question: "$X_1$ (én observasjon) er forventningsrett for $\\mu$, men den er:",
      options: ["ikke konsistent — variansen $\\sigma^2$ krymper aldri", "samtidig den mest effektive av alle mulige estimatorer", "skjev nedover, nettopp fordi den bruker bare én observasjon", "konsistent, som en direkte følge av at den er forventningsrett"],
      explanation: "$X_1$ har fast varians $\\sigma^2$ som ikke går mot 0 når $n$ vokser, så den er forventningsrett, men ikke konsistent.",
    },
    {
      question: "Hvorfor er skjevhetskorreksjon via en $c$ med $c = c(\\theta)$ problematisk?",
      options: ["Fordi $c$ da ikke er kjent — den avhenger av den ukjente $\\theta$ vi prøver å estimere", "Fordi en deling på faktoren $c$ i så fall alltid vil føre til overestimering", "Fordi faktoren $c$ da nødvendigvis kommer ut som et negativt tall", "Fordi faktoren $c$ da er nødt til å være et helt tall for å virke"],
      explanation: "Korreksjonen $\\hat\\theta/c$ krever at $c$ kan regnes ut fra kjente størrelser; avhenger $c$ av $\\theta$, er den ukjent og korreksjonen ikke brukbar direkte.",
    },
  ],
  'stk1100-5-2': [
    {
      question: "Likelihood-funksjonen for iid-observasjoner $x_1, \\dots, x_n$ er:",
      options: ["$L(\\theta) = \\prod_{i=1}^n f(x_i;\\theta)$", "$L(\\theta) = \\sum_{i=1}^n f(x_i;\\theta)$", "$L(\\theta) = f(x_1;\\theta) + f(\\bar x;\\theta)$", "$L(\\theta) = \\frac{1}{n}\\sum_{i=1}^n f(x_i;\\theta)$"],
      explanation: "For uavhengige observasjoner er likelihooden produktet av tetthetene over alle $n$ observasjonene.",
    },
    {
      question: "Hvorfor tar man logaritmen av likelihooden før man deriverer?",
      options: ["$\\ln$ gjør produktet til en sum og flytter ikke maksimum (strengt voksende)", "$\\ln$ gjør en tung sum om til et produkt som er langt lettere å maksimere", "$\\ln$ forskyver hvor toppunktet ligger til en mer gunstig og penere verdi", "$\\ln$ er nødvendig for at den utledede estimatoren skal bli forventningsrett"],
      explanation: "Logaritmen gjør $\\prod$ til $\\sum$ (lett å derivere), og siden $\\ln$ er strengt voksende, ligger maksimum på samme sted.",
    },
    {
      question: "ML-estimatoren finnes ved å:",
      options: ["sette den deriverte $\\ell'(\\theta)$ lik null og løse for $\\theta$", "sette likelihooden $L(\\theta)$ lik null og løse", "sette $\\ell(\\theta)$ lik null og løse for $\\theta$", "derivere to ganger og sette $\\ell''(\\theta)$ lik null"],
      explanation: "Score-ligningen $\\ell'(\\theta) = 0$ gir toppunktet til log-likelihooden, altså ML-estimatoren.",
    },
    {
      question: "For eksponensial i rateform $f(x) = \\lambda e^{-\\lambda x}$ er ML-estimatoren:",
      options: ["$\\hat\\lambda = 1/\\bar X$", "$\\hat\\lambda = \\bar X$", "$\\hat\\lambda = 1/\\sum X_i$", "$\\hat\\lambda = n\\bar X$"],
      explanation: "$\\ell'(\\lambda) = n/\\lambda - \\sum x_i = 0$ gir $\\hat\\lambda = n/\\sum x_i = 1/\\bar X$.",
    },
    {
      question: "For eksponensial i forventningsform $f(x) = \\tfrac1\\mu e^{-x/\\mu}$ er ML-estimatoren:",
      options: ["$\\hat\\mu = \\bar X$", "$\\hat\\mu = 1/\\bar X$", "$\\hat\\mu = \\sum X_i$", "$\\hat\\mu = \\bar X/n$"],
      explanation: "$\\ell'(\\mu) = -n/\\mu + \\sum x_i/\\mu^2 = 0$ gir $\\hat\\mu = \\bar X$. Samme fordeling som rateform, men annen parameter.",
    },
    {
      question: "For $X_i \\sim \\text{Poisson}(\\lambda)$ er ML-estimatoren:",
      options: ["$\\hat\\lambda = \\bar X$", "$\\hat\\lambda = 1/\\bar X$", "$\\hat\\lambda = \\sqrt{\\bar X}$", "$\\hat\\lambda = \\bar X^2$"],
      explanation: "$\\ell'(\\lambda) = -n + \\sum x_i/\\lambda = 0$ gir $\\hat\\lambda = \\bar X$; det observerte snittantallet.",
    },
    {
      question: "Er ML-estimatoren for Poisson-parameteren $\\hat\\lambda = \\bar X$ forventningsrett?",
      options: ["Ja, fordi $E(\\bar X) = E(X_i) = \\lambda$", "Nei, den underestimerer med faktoren $(n-1)/n$", "Nei, den overestimerer fordi Poisson er skjev", "Bare når $\\lambda$ er et heltall"],
      explanation: "$E(\\hat\\lambda) = E(\\bar X) = \\lambda$, så $\\bar X$ er forventningsrett for Poisson-parameteren.",
    },
    {
      question: "ML-estimatoren for variansen i $N(\\mu,\\sigma^2)$ er $\\hat\\sigma^2 = \\tfrac1n\\sum(X_i-\\bar X)^2$. Den er:",
      options: ["skjev — den har $n$ i nevneren og underestimerer $\\sigma^2$", "forventningsrett — den er identisk med $S^2$", "skjev — den overestimerer fordi $\\bar X$ er stokastisk", "udefinert med mindre $\\sigma^2$ er kjent på forhånd"],
      explanation: "ML-varians har $n$ (ikke $n-1$) i nevner, så $E = \\frac{n-1}{n}\\sigma^2 < \\sigma^2$: skjev, underestimerer.",
    },
    {
      question: "For $\\text{gamma}(\\alpha,\\beta)$ med kjent form $\\alpha$ og ukjent skala $\\beta$ er ML-estimatoren:",
      options: ["$\\hat\\beta = \\bar X/\\alpha$", "$\\hat\\beta = \\alpha\\bar X$", "$\\hat\\beta = \\bar X$", "$\\hat\\beta = \\alpha/\\bar X$"],
      explanation: "$\\ell'(\\beta) = -n\\alpha/\\beta + \\sum x_i/\\beta^2 = 0$ gir $\\hat\\beta = \\sum x_i/(n\\alpha) = \\bar X/\\alpha$.",
    },
    {
      question: "Er $\\hat\\beta = \\bar X/\\alpha$ (gamma, kjent form) forventningsrett for $\\beta$?",
      options: ["Ja, fordi $E(\\bar X) = \\alpha\\beta$ gir $E(\\hat\\beta) = \\alpha\\beta/\\alpha = \\beta$", "Nei, den er systematisk skjev med en Γ-faktor og må derfor korrigeres først", "Nei, den overestimerer $\\beta$ systematisk med nettopp formfaktoren $\\alpha$", "Bare i det spesialtilfellet der den kjente formparameteren $\\alpha$ er lik 1"],
      explanation: "$E(\\hat\\beta) = E(\\bar X)/\\alpha = \\alpha\\beta/\\alpha = \\beta$ — et av tilfellene der ML-estimatoren er forventningsrett.",
    },
    {
      question: "For Pareto $f(x) = \\theta k^\\theta/x^{\\theta+1}$ ($k$ kjent) er ML-estimatoren:",
      options: ["$\\hat\\theta = n/\\sum\\ln(X_i/k)$", "$\\hat\\theta = \\sum\\ln(X_i/k)/n$", "$\\hat\\theta = \\bar X/(\\bar X - k)$", "$\\hat\\theta = n/\\sum X_i$"],
      explanation: "$\\ell'(\\theta) = n/\\theta + n\\ln k - \\sum\\ln x_i = 0$ gir $\\hat\\theta = n/\\sum\\ln(x_i/k)$.",
    },
    {
      question: "For Weibull med kjent form $\\alpha$ og ukjent skala $\\beta$ er ML-estimatoren:",
      options: ["$\\hat\\beta = \\left(\\tfrac1n\\sum X_i^\\alpha\\right)^{1/\\alpha}$", "$\\hat\\beta = \\tfrac1n\\sum X_i^\\alpha$", "$\\hat\\beta = \\bar X^{1/\\alpha}$", "$\\hat\\beta = \\left(\\sum X_i\\right)^{1/\\alpha}$"],
      explanation: "$\\ell'(\\beta) = 0$ gir $\\beta^\\alpha = \\tfrac1n\\sum x_i^\\alpha$, altså $\\hat\\beta = (\\tfrac1n\\sum X_i^\\alpha)^{1/\\alpha}$. Ved $\\alpha=1$: $\\bar X$.",
    },
    {
      question: "Momentmetoden med én ukjent parameter går ut på å:",
      options: ["sette det teoretiske $E(X)$ lik $\\bar X$ og løse for parameteren", "sette den teoretiske variansen $\\text{Var}(X)$ lik null og deretter løse for parameteren", "derivere log-likelihooden $\\ell(\\theta)$ og sette den deriverte lik null (det er ML)", "sette den teoretiske medianen lik gjennomsnittet $\\bar X$ og så løse for parameteren"],
      explanation: "Momentmetoden avstemmer teoretiske momenter mot empiriske: $E(X) = \\bar X$ løses for parameteren.",
    },
    {
      question: "For hvilken av disse gir ML og momentmetoden det samme svaret?",
      options: ["Eksponensial (begge gir $\\hat\\mu = \\bar X$ i forventningsform)", "Pareto (begge metodene gir det samme uttrykket $n/\\sum\\ln(X_i/k)$)", "Rayleigh (begge metodene gir nøyaktig samme uttrykk for parameteren $\\sigma$)", "Uniform på $(0,\\theta)$ (begge metodene ender opp med samme estimator)"],
      explanation: "For eksponensial (og Poisson, gamma kjent form) sammenfaller ML og moment; for Pareto/Rayleigh skiller de lag.",
    },
    {
      question: "Invariansprinsippet sier at ML-estimatoren for en funksjon $g(\\theta)$ er:",
      options: ["$g(\\hat\\theta)$ — funksjonen anvendt på ML-estimatoren", "$\\hat{g}\\cdot\\hat\\theta$ — produktet av de to estimatorene", "$g^{-1}(\\hat\\theta)$ — den inverse funksjonen av estimatoren", "gjennomsnittet av $g(\\theta)$ over alle observasjoner"],
      explanation: "Invariansprinsippet: $\\widehat{g(\\theta)} = g(\\hat\\theta)$. Sett ML-estimatoren inn i funksjonen.",
    },
    {
      question: "For eksponensial i forventningsform ($\\hat\\mu = \\bar X$), hva er ML-estimatoren for overlevelsen $P(X>t) = e^{-t/\\mu}$?",
      options: ["$e^{-t/\\bar X}$", "$e^{-t\\bar X}$", "$1 - e^{-t/\\bar X}$", "$\\bar X e^{-t}$"],
      explanation: "Invariansprinsippet: sett $\\hat\\mu = \\bar X$ inn i $e^{-t/\\mu}$, som gir $e^{-t/\\bar X}$.",
    },
    {
      question: "Hva er det vanligste sensorfradraget ved en ML-utledning?",
      options: ["At man deriverer uten å ta logaritme først, eller ikke løser ligningen fullstendig", "At man oppgir for mange desimaler i det endelige tallsvaret på oppgaven", "At man skriver estimatoren med store bokstaver i stedet for små bokstaver", "At man tar med et unødvendig konvergenskrav på parameteren i utledningen"],
      explanation: "Sensorkrav 5 er hele regnekjeden: ta log før derivasjon og løs $\\ell'=0$ helt for $\\hat\\theta$.",
    },
    {
      question: "Et ledd i $\\ell(\\theta)$ som ikke inneholder $\\theta$ (f.eks. $\\sum\\ln(x_i!)$ for Poisson):",
      options: ["forsvinner når man deriverer mot $\\theta$", "må trekkes fra estimatet til slutt", "gjør estimatoren skjev", "må maksimeres separat"],
      explanation: "Konstanter i $\\theta$ har derivert null, så de påvirker ikke score-ligningen og kan ignoreres.",
    },
    {
      question: "Hvorfor er det viktig å lese hvilken parametrisering eksponensialoppgaven bruker?",
      options: ["Fordi rateform gir $\\hat\\lambda = 1/\\bar X$ og forventningsform gir $\\hat\\mu = \\bar X$", "Fordi bare den ene av de to parametriseringene i det hele tatt har en ML-estimator", "Fordi den ene parametriseringen alltid ender opp med å gi en systematisk skjev estimator", "Fordi valget av parametrisering avgjør om likelihooden $L$ blir et produkt eller en sum"],
      explanation: "Samme fordeling, men parameteren — og dermed estimatoren — er ulik: $1/\\bar X$ (rate) mot $\\bar X$ (forventning).",
    },
    {
      question: "Bevarer invariansprinsippet forventningsretthet?",
      options: ["Nei — $g(\\hat\\theta)$ er generelt skjev selv om $\\hat\\theta$ er forventningsrett", "Ja, dette gjelder alltid, som en direkte konsekvens av at ML-metoden er invariant", "Ja, men dette gjelder utelukkende for lineære funksjoner $g$ av parameteren", "Bare i det spesielle tilfellet der funksjonen $g$ tilfeldigvis er en logaritme"],
      explanation: "$E[g(\\hat\\theta)] \\ne g(E[\\hat\\theta])$ for ikke-lineære $g$ (jf. $E[\\sqrt V] \\ne \\sqrt{E V}$), så invarians bevarer ikke forventningsretthet.",
    },
    {
      question: "Fem Pareto-inntekter ($k$ kjent) gir $\\sum\\ln(x_i/k) = 2{,}5$. ML-estimatet for $\\theta$ er:",
      options: ["$\\hat\\theta = 5/2{,}5 = 2{,}0$", "$\\hat\\theta = 2{,}5/5 = 0{,}5$", "$\\hat\\theta = 5\\cdot 2{,}5 = 12{,}5$", "$\\hat\\theta = 2{,}5$"],
      explanation: "$\\hat\\theta = n/\\sum\\ln(x_i/k) = 5/2{,}5 = 2{,}0$.",
    },
    {
      question: "Er ML-estimatoren for Pareto-parameteren $\\hat\\theta = n/\\sum\\ln(X_i/k)$ forventningsrett?",
      options: ["Nei — den er skjev og må korrigeres (behandles i drillkapittel 5.3)", "Ja — denne estimatoren er alltid forventningsrett uansett utvalgsstørrelse", "Ja — nettopp fordi nevneren $\\sum\\ln(X_i/k)$ i seg selv er forventningsrett", "Bare i spesialtilfellet der den kjente minsteverdien $k$ er lik 1"],
      explanation: "$\\hat\\theta$ er skjev; nevneren $\\sum\\ln(X_i/k) \\sim \\text{gamma}(n, 1/\\theta)$ gir en Γ-korreksjon i kap. 5.3.",
    },
    {
      question: "Hva skiller likelihooden $L(\\theta)$ fra en sannsynlighetsfordeling?",
      options: ["$L$ er en funksjon av $\\theta$ med dataene faste, ikke en fordeling i $\\theta$", "$L$ er konstruert slik at den alltid integrerer til nøyaktig 1 over $\\theta$", "$L$ tar per definisjon alltid verdier mellom 0 og 1, som en sannsynlighet", "$L$ er en ekte sannsynlighetsfordeling i $\\theta$ på helt lik linje med tettheten"],
      explanation: "Likelihooden måler hvor godt hver $\\theta$ forklarer de faste dataene; den er ikke en fordeling i $\\theta$ og integrerer ikke nødvendigvis til 1.",
    },
    {
      question: "Momentmetoden for Pareto ($E(X) = \\theta k/(\\theta-1)$) gir estimatoren:",
      options: ["$\\hat\\theta = \\bar X/(\\bar X - k)$", "$\\hat\\theta = n/\\sum\\ln(X_i/k)$", "$\\hat\\theta = \\bar X/k$", "$\\hat\\theta = k/(\\bar X - k)$"],
      explanation: "Sett $\\theta k/(\\theta-1) = \\bar X$ og løs: $\\theta(\\bar X - k) = \\bar X$, altså $\\hat\\theta = \\bar X/(\\bar X - k)$. Ulik ML-estimatoren.",
    },
    {
      question: "Hva er variansen til ML-estimatoren $\\hat\\beta = \\bar X/\\alpha$ for gamma med kjent form?",
      options: ["$\\text{Var}(\\hat\\beta) = \\beta^2/(n\\alpha)$", "$\\text{Var}(\\hat\\beta) = \\alpha\\beta^2/n$", "$\\text{Var}(\\hat\\beta) = \\beta^2/n$", "$\\text{Var}(\\hat\\beta) = \\alpha^2\\beta^2/n$"],
      explanation: "$\\text{Var}(\\hat\\beta) = \\tfrac{1}{\\alpha^2}\\text{Var}(\\bar X) = \\tfrac{1}{\\alpha^2}\\cdot\\tfrac{\\alpha\\beta^2}{n} = \\beta^2/(n\\alpha)$.",
    },
  ],
  'stk1100-5-3': [
    {
      question: "Første steg i sjanger G-oppskriften (etter å ha definert observasjonene) er å:",
      options: ["skrive likelihooden $L(\\theta) = \\prod_{i=1}^n f(x_i;\\theta)$ over alle observasjonene", "regne ut forventningen $E(\\hat\\theta)$ for å sjekke om estimatoren er forventningsrett", "finne variansen $\\text{Var}(\\hat\\theta)$ og deretter den estimerte standardfeilen til estimatoren", "sammenligne to foreslåtte kandidatestimatorer og velge den beste av dem med begrunnelse"],
      explanation: "Oppskriften starter med likelihooden som produkt over alle $n$ observasjoner; egenskapene kommer etter at $\\hat\\theta$ er utledet.",
    },
    {
      question: "For Weibull med kjent form $\\alpha$ og ukjent skala $\\beta$ er ML-estimatoren:",
      options: ["$\\hat\\beta = \\left(\\tfrac1n\\sum X_i^\\alpha\\right)^{1/\\alpha}$", "$\\hat\\beta = \\tfrac1n\\sum X_i^\\alpha$ uten noen ekstra rot", "$\\hat\\beta = \\bar X$ nøyaktig som for Poisson-fordelingen", "$\\hat\\beta = \\left(\\sum X_i\\right)^{1/\\alpha}$ uten deling på $n$"],
      explanation: "$\\ell'(\\beta)=0$ gir $\\beta^\\alpha = \\tfrac1n\\sum x_i^\\alpha$, altså $\\hat\\beta = (\\tfrac1n\\sum X_i^\\alpha)^{1/\\alpha}$.",
    },
    {
      question: "Størrelsen $n(\\hat\\beta/\\beta)^\\alpha$ for Weibull-ML er fordelt som:",
      options: ["$\\text{gamma}(n, 1)$", "$\\text{gamma}(n, \\beta)$ med skala lik $\\beta$", "$\\chi^2_{n-1}$ med $n-1$ frihetsgrader", "eksponensial med forventning $n$"],
      explanation: "$n(\\hat\\beta/\\beta)^\\alpha = \\sum(X_i/\\beta)^\\alpha$, en sum av $n$ uavhengige $\\text{gamma}(1,1)$, altså $\\text{gamma}(n,1)$.",
    },
    {
      question: "Hvorfor er den eksponensiale rate-estimatoren $\\hat\\lambda = n/\\sum X_i$ skjev?",
      options: ["Fordi $\\sum X_i \\sim \\text{gamma}(n, 1/\\lambda)$ gir $E(\\hat\\lambda) = \\tfrac{n}{n-1}\\lambda \\ne \\lambda$", "Fordi selve summen $\\sum X_i$ av en eller annen grunn alltid overestimerer forventningen $1/\\lambda$ systematisk", "Fordi rateformen av eksponensialfordelingen slett ikke har noen veldefinert ML-estimator i det hele tatt", "Fordi estimatoren $\\hat\\lambda$ underestimerer $\\lambda$ systematisk med nettopp den kjente faktoren $(n-1)/n$"],
      explanation: "$T = \\sum X_i \\sim \\text{gamma}(n, 1/\\lambda)$; E(Vʳ) med $r=-1$ gir $E(T^{-1}) = \\lambda/(n-1)$, så $E(\\hat\\lambda) = n\\lambda/(n-1)$.",
    },
    {
      question: "En forventningsrett korreksjon av Pareto-ML-estimatoren $\\hat\\theta = n/\\sum\\ln(X_i/k)$ er:",
      options: ["$\\frac{n-1}{\\sum\\ln(X_i/k)}$", "$\\frac{n+1}{\\sum\\ln(X_i/k)}$", "$\\frac{n}{\\sum\\ln(X_i/k)}$ uten noen korreksjon", "$\\frac{\\sum\\ln(X_i/k)}{n-1}$"],
      explanation: "$E(\\hat\\theta) = \\tfrac{n}{n-1}\\theta$, så $\\tfrac{n-1}{n}\\hat\\theta = \\tfrac{n-1}{\\sum\\ln(X_i/k)}$ er forventningsrett.",
    },
    {
      question: "For å korrigere skjevheten til en estimator $\\propto V^r$ med $V \\sim \\text{gamma}(\\alpha,\\beta)$ bruker man:",
      options: ["E(Vʳ)-formelen $E(V^r) = \\beta^r\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ til å finne skjevfaktoren", "variansformelen $\\text{Var}(V) = \\alpha\\beta^2$ for gammafordelingen til å finne skjevfaktoren $c$", "sentralgrenseteoremet til å tilnærme hele fordelingen til potensen $V^r$ med en normalfordeling", "medianformelen for gammafordelingen til å finne den systematiske bommen i estimatoren"],
      explanation: "E(Vʳ)-formelen gir eksakt $E(V^r)$; forholdet $\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$ er skjevfaktoren $c$, og $\\hat\\theta/c$ blir forventningsrett.",
    },
    {
      question: "Skal man velge mellom to forventningsrette estimatorer, velger man den med:",
      options: ["lavest varians", "høyest varians, for å være på den sikre siden", "størst estimat på det aktuelle datasettet", "flest observasjoner i formelen, uansett varians"],
      explanation: "Blant forventningsrette estimatorer er den med lavest varians mest presis og skal velges.",
    },
    {
      question: "Summen $\\sum_{i=1}^n \\ln(X_i/k)$ for Pareto (kjent $k$, form $\\theta$) er fordelt som:",
      options: ["$\\text{gamma}(n, 1/\\theta)$", "$\\text{gamma}(n, \\theta)$ med skala lik $\\theta$", "$\\text{gamma}(1, n/\\theta)$", "$\\chi^2_n$ med $n$ frihetsgrader"],
      explanation: "$\\ln(X_i/k)$ er eksponensial med rate $\\theta$ ($\\text{gamma}(1,1/\\theta)$); summen av $n$ med felles skala er $\\text{gamma}(n, 1/\\theta)$.",
    },
    {
      question: "For eksponensial i forventningsform ($\\hat\\mu = \\bar X$) er estimatoren:",
      options: ["forventningsrett, siden $E(\\bar X) = \\mu$", "skjev, og må korrigeres med faktoren $\\tfrac{n-1}{n}$", "skjev, og må korrigeres med en Γ-faktor", "udefinert med mindre $n$ er stor"],
      explanation: "$E(\\hat\\mu) = E(\\bar X) = \\mu$ i forventningsform, så $\\hat\\mu = \\bar X$ er forventningsrett (i motsetning til rateformens $\\hat\\lambda$).",
    },
    {
      question: "Korreksjonsfaktoren $c$ for Weibull-ML $\\hat\\beta$ ved formparameter $\\alpha = 1$ (eksponensial) blir:",
      options: ["$c = 1$ — da er $\\hat\\beta = \\bar X$ allerede forventningsrett", "$c = \\tfrac{n-1}{n}$ — en liten nedjustering trengs likevel", "$c = \\sqrt{2/(n-1)}$ som for utvalgsstandardavviket", "$c = n$ — en kraftig oppjustering trengs"],
      explanation: "$c = n^{-1}\\Gamma(n+1)/\\Gamma(n) = n^{-1}\\cdot n = 1$, så ingen korreksjon; $\\hat\\beta = \\bar X$ er forventningsrett ved $\\alpha=1$.",
    },
    {
      question: "Bevarer invariansprinsippet forventningsretthet, f.eks. for Pareto-medianen $\\hat m = k\\cdot 2^{1/\\hat\\theta}$?",
      options: ["Nei — $g$ er ikke-lineær, så $E[g(\\hat\\theta)] \\ne g(E[\\hat\\theta])$", "Ja — invariansprinsippet bevarer alltid forventningsretthet uansett funksjon $g$", "Ja — dette gjelder så lenge estimatoren $\\hat\\theta$ selv er forventningsrett for $\\theta$", "Bare i det spesielle tilfellet der medianformelen tilfeldigvis er en lineær funksjon"],
      explanation: "Invariansprinsippet gir ML av en funksjon, men bevarer ikke forventningsretthet for ikke-lineære $g$ (jf. $E[\\sqrt V] \\ne \\sqrt{E V}$).",
    },
    {
      question: "For Rayleigh $f(x;\\sigma^2) = \\tfrac{x}{\\sigma^2}e^{-x^2/(2\\sigma^2)}$ er ML-estimatoren for $\\sigma^2$:",
      options: ["$\\hat\\sigma^2 = \\tfrac{1}{2n}\\sum X_i^2$", "$\\hat\\sigma^2 = \\tfrac1n\\sum X_i^2$ uten faktoren en halv", "$\\hat\\sigma^2 = \\bar X^2$ som kvadratet av snittet", "$\\hat\\sigma^2 = \\tfrac1n\\sum X_i$ som selve snittet"],
      explanation: "$\\ell'(\\theta)=0$ med $\\theta=\\sigma^2$ gir $-n\\theta + \\tfrac12\\sum x_i^2 = 0$, altså $\\hat\\sigma^2 = \\tfrac{1}{2n}\\sum X_i^2$.",
    },
    {
      question: "Den vanligste feilen i sjanger G under tidspress er å:",
      options: ["anta forventningsretthet uten å regne $E(\\hat\\theta)$", "bruke for få desimaler i det endelige tallsvaret", "ta med logaritmen når man deriverer likelihooden", "definere observasjonene før man setter opp likelihooden"],
      explanation: "Mange ML-estimatorer er skjeve (Pareto, Weibull, eksp.-rate); forventningsretthet må regnes ut, ikke antas.",
    },
    {
      question: "For gamma med kjent form $\\alpha$ gir momentmetoden og ML for skalaen $\\beta$:",
      options: ["det samme svaret, $\\hat\\beta = \\bar X/\\alpha$", "helt ulike svar som må avstemmes", "ML $\\bar X/\\alpha$, men moment $\\alpha\\bar X$", "moment $\\bar X/\\alpha$, men ML $\\bar X$"],
      explanation: "Både $E(X) = \\alpha\\beta = \\bar X$ (moment) og score-ligningen (ML) gir $\\hat\\beta = \\bar X/\\alpha$; de sammenfaller.",
    },
    {
      question: "Variansen til den forventningsrette gamma-estimatoren $\\hat\\beta = \\bar X/\\alpha$ (kjent $\\alpha$) er:",
      options: ["$\\text{Var}(\\hat\\beta) = \\beta^2/(n\\alpha)$", "$\\text{Var}(\\hat\\beta) = \\alpha\\beta^2/n$", "$\\text{Var}(\\hat\\beta) = \\beta^2/n$", "$\\text{Var}(\\hat\\beta) = \\alpha^2\\beta^2/n$"],
      explanation: "$\\text{Var}(\\hat\\beta) = \\tfrac{1}{\\alpha^2}\\text{Var}(\\bar X) = \\tfrac{1}{\\alpha^2}\\cdot\\tfrac{\\alpha\\beta^2}{n} = \\beta^2/(n\\alpha)$.",
    },
  ],
  'stk1100-6-1': [
    {
      question: "Hvilken fordeling har pivoten $2\\sum X_i/\\mu$ for $n$ uavhengige eksponensiale observasjoner i forventningsform?",
      options: ["$\\chi^2_{2n}$", "$\\chi^2_{n}$", "$\\chi^2_{n-1}$", "$\\chi^2_{2n-1}$"],
      explanation: "Hvert ledd $2X_i/\\mu \\sim \\chi^2_2$, og summen av $n$ slike gir $\\chi^2_{2n}$.",
    },
    {
      question: "Hva kjennetegner en pivotal størrelse $W(X_1,\\ldots,X_n;\\theta)$?",
      options: ["Fordelingen er kjent og fri for parameteren $\\theta$", "Den er alltid normalfordelt uansett modell", "Den avhenger bare av parameteren, ikke av dataene", "Den er selve punktestimatet for $\\theta$"],
      explanation: "En pivot kobler data og parameter, men fordelingen avhenger ikke av $\\theta$ — derfor kan vi legge kvantiler rundt den.",
    },
    {
      question: "Ved løsning av $w_1 \\le 2\\sum X_i/\\mu \\le w_2$ for $\\mu$ inverterer vi. Hva skjer med ulikheten?",
      options: ["Retningen snur, og endepunktene bytter plass", "Retningen beholdes, og endepunktene står som før", "Bare det nedre endepunktet endres", "Ulikheten blir til en likhet"],
      explanation: "Å ta kehvervverdi er en avtakende operasjon, så ulikhetsretningen snur og endepunktene bytter plass.",
    },
    {
      question: "Med øvre-haleareal-notasjon, hvilken kvantil står i det **nedre** endepunktet av det eksakte KI-et for $\\mu$?",
      options: ["Den store kvantilen $\\chi^2_{2n,\\alpha/2}$", "Den lille kvantilen $\\chi^2_{2n,1-\\alpha/2}$", "Normalkvantilen $z_{\\alpha/2}$", "Medianen $\\chi^2_{2n,0{,}5}$"],
      explanation: "Nedre grense er $2\\sum x_i/\\chi^2_{2n,\\alpha/2}$: den store kvantilen i nevneren gir det minste tallet.",
    },
    {
      question: "Det eksakte $\\chi^2$-baserte konfidensintervallet for $\\mu$ er ofte asymmetrisk om $\\hat\\mu$. Hva betyr det?",
      options: ["Det er korrekt og forventet fordi $\\chi^2$-fordelingen er høyreskjev", "Det er en regnefeil som må rettes til et symmetrisk intervall", "Konfidensgraden er da mindre enn oppgitt", "Punktestimatet ligger utenfor intervallet"],
      explanation: "Den eksakte metoden gir et skjevt intervall fordi $\\chi^2$ er skjev — det skal ikke «rettes».",
    },
    {
      question: "For en normalfordeling med **kjent** $\\mu$ har pivoten $\\sum(X_i-\\mu)^2/\\sigma^2$ hvor mange frihetsgrader?",
      options: ["$n$", "$2n$", "$n-1$", "$n+1$"],
      explanation: "Hvert standardisert kvadrat $(X_i-\\mu)^2/\\sigma^2 \\sim \\chi^2_1$, og de $n$ leddene gir $\\chi^2_n$.",
    },
    {
      question: "Hva er et eksakt 90 %-KI for $\\mu$ når $n=10$, $\\sum x_i = 84$, $\\chi^2_{20,0{,}05}=31{,}41$, $\\chi^2_{20,0{,}95}=10{,}85$?",
      options: ["$[5{,}35,\\ 15{,}48]$", "$[15{,}48,\\ 5{,}35]$", "$[2{,}67,\\ 7{,}74]$", "$[10{,}85,\\ 31{,}41]$"],
      explanation: "$[2\\cdot 84/31{,}41,\\ 2\\cdot 84/10{,}85] = [5{,}35,\\ 15{,}48]$; stor kvantil i nedre grense.",
    },
    {
      question: "Et $[L,U]$ er KI for $\\theta$ og $g$ er strengt **voksende**. Hva er KI for $g(\\theta)$?",
      options: ["$[g(L),\\ g(U)]$", "$[g(U),\\ g(L)]$", "$[L,\\ U]$ uendret", "$[g(L)+g(U),\\ 0]$"],
      explanation: "En voksende $g$ bevarer rekkefølgen, så endepunktene transformeres direkte.",
    },
    {
      question: "Medianen i en eksponensialfordeling med forventning $\\mu$ er $m=\\mu\\ln 2$. Hvordan lager du et KI for $m$ fra et KI $[L,U]$ for $\\mu$?",
      options: ["Gang begge endepunkter med $\\ln 2$: $[L\\ln 2,\\ U\\ln 2]$", "Del begge endepunkter på $\\ln 2$", "Bytt om endepunktene fordi $\\ln 2 < 1$", "Behold $[L,U]$ — medianen har samme KI som forventningen"],
      explanation: "$g(\\mu)=\\mu\\ln 2$ er strengt voksende, så endepunktene ganges med $\\ln 2$ i samme rekkefølge.",
    },
    {
      question: "For eksponensial i **rateform** $f(x)=\\lambda e^{-\\lambda x}$ er pivoten $2\\lambda\\sum X_i \\sim \\chi^2_{2n}$. Hvorfor bytter kvantilene **ikke** plass her?",
      options: ["Fordi $\\lambda$ isoleres ved å dele på den positive $2\\sum x_i$", "Fordi rateformen alltid gir symmetriske intervaller", "Fordi $\\chi^2$-fordelingen er symmetrisk", "Fordi $\\lambda$ er en rate og ikke en forventning"],
      explanation: "Her står $\\lambda$ i telleren; å dele på den positive $2\\sum x_i$ bevarer ulikhetsretningen.",
    },
    {
      question: "Hvilken pivot passer for Pareto-fordeling med kjent minsteverdi $k$ og ukjent form $\\theta$?",
      options: ["$2\\theta\\sum\\ln(X_i/k) \\sim \\chi^2_{2n}$", "$2\\theta\\sum X_i/k \\sim \\chi^2_{n}$", "$\\sum(X_i-k)^2/\\theta \\sim \\chi^2_{2n}$", "$\\theta\\sum X_i \\sim$ gamma$(n,1)$"],
      explanation: "Log-løftet $2\\theta\\ln(X_i/k)$ gir $\\chi^2_2$ per ledd, summen $\\chi^2_{2n}$ = gamma$(n,2)$.",
    },
    {
      question: "Hvilken pivot passer for Weibull med kjent form $\\alpha$ og ukjent skala $\\beta$?",
      options: ["$\\sum(X_i/\\beta)^\\alpha \\sim$ gamma$(n,1)$", "$\\sum(X_i/\\beta)^\\alpha \\sim \\chi^2_{2n}$", "$2\\sum X_i/\\beta \\sim \\chi^2_{2n}$", "$\\sum \\ln(X_i/\\beta) \\sim$ gamma$(n,2)$"],
      explanation: "Potensløftet $(X_i/\\beta)^\\alpha$ er eksponensial(1) per ledd, summen gamma$(n,1)$.",
    },
    {
      question: "En rask konsistenssjekk på et utregnet eksakt KI er at:",
      options: ["punktestimatet ligger inni intervallet", "intervallet alltid er symmetrisk om punktestimatet", "nedre grense er negativ", "bredden er lik $2z_{\\alpha/2}$"],
      explanation: "Punktestimatet ($\\bar x$, $n/T$ osv.) skal alltid ligge inni; ellers har du byttet om kvantiler eller glemt å snu ulikheten.",
    },
    {
      question: "Hva er kvantilen $\\chi^2_{20,0{,}05}$ i notasjonen med øvre haleareal?",
      options: ["Verdien med 5 % sannsynlighet **til høyre** for seg", "Verdien med 5 % sannsynlighet til venstre for seg", "Den 5. persentilen (nedre hale)", "Medianen i $\\chi^2_{20}$"],
      explanation: "Øvre-haleareal-notasjon: $P(\\chi^2_{20} > \\chi^2_{20,0{,}05}) = 0{,}05$ — arealet ligger til høyre.",
    },
    {
      question: "Med $n=15$ og $\\sum x_i = 96$, $\\chi^2_{30,0{,}025}=46{,}98$, $\\chi^2_{30,0{,}975}=16{,}79$: hva er 95 %-KI for $\\mu$?",
      options: ["$[4{,}09,\\ 11{,}43]$", "$[11{,}43,\\ 4{,}09]$", "$[2{,}04,\\ 5{,}72]$", "$[16{,}79,\\ 46{,}98]$"],
      explanation: "$[192/46{,}98,\\ 192/16{,}79] = [4{,}09,\\ 11{,}43]$ med $2\\sum x_i = 192$ og $2n=30$.",
    },
    {
      question: "Hvorfor foretrekkes den eksakte pivotal-metoden framfor å bare gjette et symmetrisk intervall?",
      options: ["Fordi den gir korrekt konfidensgrad ved enhver $n$, også liten", "Fordi den alltid gir smalere intervaller", "Fordi den ikke krever kvantiltabeller", "Fordi den unngår å bruke punktestimatet"],
      explanation: "Den eksakte metoden har dekning lik konfidensgraden per konstruksjon, uansett utvalgsstørrelse.",
    },
    {
      question: "Ved KI-transformasjon med en strengt **avtakende** $g$ (f.eks. $g(\\theta)=k\\cdot 2^{1/\\theta}$):",
      options: ["bytter endepunktene plass: $[g(U),\\ g(L)]$", "beholdes rekkefølgen: $[g(L),\\ g(U)]$", "blir intervallet et punkt", "endres konfidensgraden til $\\alpha$"],
      explanation: "En avtakende $g$ snur ulikhetene, så det nedre endepunktet kommer fra den øvre grensen.",
    },
    {
      question: "Hva må utledes aktivt i en eksakt-KI-oppgave (kontra å slås opp i formelsamlingen)?",
      options: ["Pivoten og ulikhetsløsningen med riktig vending", "Verdien av $\\chi^2_{20,0{,}05}$", "Verdien av normalkvantilen $z_{0{,}025}$", "Tetthetsformelen til gammafordelingen"],
      explanation: "Kvantiler og fordelingskatalog står i formelsamlingen; pivoten og ulikhetsløsningen må utledes.",
    },
    {
      question: "For en normalmodell med kjent $\\mu$ er $\\sum(x_i-\\mu)^2 = 30$, $n=12$, $\\chi^2_{12,0{,}025}=23{,}34$, $\\chi^2_{12,0{,}975}=4{,}40$. Hva er 95 %-KI for $\\sigma^2$?",
      options: ["$[1{,}29,\\ 6{,}81]$", "$[6{,}81,\\ 1{,}29]$", "$[0{,}64,\\ 3{,}41]$", "$[4{,}40,\\ 23{,}34]$"],
      explanation: "$[30/23{,}34,\\ 30/4{,}40] = [1{,}29,\\ 6{,}81]$; stor kvantil i nedre grense.",
    },
    {
      question: "Fra et KI for $\\sigma^2$, $[1{,}29,\\ 6{,}81]$, hva blir KI for standardavviket $\\sigma$?",
      options: ["$[1{,}13,\\ 2{,}61]$", "$[2{,}61,\\ 1{,}13]$", "$[1{,}66,\\ 46{,}4]$", "$[1{,}29,\\ 6{,}81]$"],
      explanation: "$\\sqrt{\\cdot}$ er strengt voksende: $[\\sqrt{1{,}29},\\ \\sqrt{6{,}81}] = [1{,}13,\\ 2{,}61]$.",
    },
    {
      question: "Hva menes med **konfidensgrad** $1-\\alpha$?",
      options: ["Andelen gjentatte intervaller som i det lange løp dekker sann $\\theta$", "Sannsynligheten for at det utregnede intervallet er riktig", "Andelen data som ligger i intervallet", "Sannsynligheten for at punktestimatet er eksakt"],
      explanation: "Konfidensgraden gjelder prosedyren: over mange gjentakelser dekker $1-\\alpha$-andelen sann $\\theta$.",
    },
    {
      question: "Ti eksponensiale levetider gir $\\hat\\mu = 8{,}4$. Punktestimatet for medianlevetiden er da:",
      options: ["$8{,}4\\cdot\\ln 2 \\approx 5{,}82$", "$8{,}4/\\ln 2 \\approx 12{,}1$", "$8{,}4/2 = 4{,}2$", "$8{,}4$ (samme som forventningen)"],
      explanation: "Median $= \\mu\\ln 2$, så $\\hat m = 8{,}4\\cdot 0{,}693 \\approx 5{,}82$.",
    },
    {
      question: "Hvorfor er frihetsgraden for eksponensialpivoten $2n$ og ikke $n$?",
      options: ["Fordi hvert ledd $2X_i/\\mu \\sim \\chi^2_2$ bidrar med 2 frihetsgrader", "Fordi vi estimerer to parametre", "Fordi vi dobler datamengden", "Fordi $\\chi^2$ alltid har partall frihetsgrader"],
      explanation: "Ett eksponensialledd gir $\\chi^2_2$; summen av $n$ slike gir $2n$ frihetsgrader.",
    },
    {
      question: "Et 99 %-KI sammenlignet med et 90 %-KI fra samme data er:",
      options: ["bredere, fordi høyere konfidensgrad krever mer sikkerhet", "smalere, fordi vi er sikrere", "like bredt, konfidensgraden påvirker ikke bredden", "et punkt, fordi $\\alpha \\to 0$"],
      explanation: "Høyere $1-\\alpha$ gir mindre $\\alpha/2$, kvantilene spres, og intervallet blir bredere.",
    },
    {
      question: "Hvilket av disse er den vanligste feilen som gjør et ellers riktig oppsett galt?",
      options: ["Feil kvantil i feil endepunkt eller feil frihetsgrad", "Å definere hendelsene før man regner", "Å bruke øvre-haleareal-notasjon", "Å oppgi svaret med enhet"],
      explanation: "Å bytte om kvantilene eller bruke $n$ i stedet for $2n$ er den hyppigste tapte poengkilden.",
    },
    {
      question: "Pareto med $k=2$, $n=10$, $T=\\sum\\ln(x_i/k)=5$, $\\chi^2_{20,0{,}05}=31{,}41$, $\\chi^2_{20,0{,}95}=10{,}85$. Hva er 90 %-KI for $\\theta$?",
      options: ["$[1{,}09,\\ 3{,}14]$", "$[3{,}14,\\ 1{,}09]$", "$[2{,}17,\\ 6{,}28]$", "$[10{,}85,\\ 31{,}41]$"],
      explanation: "$\\theta = W/(2T)$ med positiv nevner $2T=10$: $[10{,}85/10,\\ 31{,}41/10] = [1{,}09,\\ 3{,}14]$.",
    },
    {
      question: "Weibull med kjent $\\alpha=2$, $n=8$, $S=\\sum x_i^2 = 40$, gamma$(8,1)$-kvantiler $g_{0{,}025}=3{,}45$, $g_{0{,}975}=14{,}42$. Hva er 95 %-KI for $\\beta^2$?",
      options: ["$[2{,}77,\\ 11{,}58]$", "$[11{,}58,\\ 2{,}77]$", "$[3{,}45,\\ 14{,}42]$", "$[5{,}00,\\ 5{,}00]$"],
      explanation: "$S/\\beta^2 \\sim$ gamma$(8,1)$, så $\\beta^2 \\in [40/14{,}42,\\ 40/3{,}45] = [2{,}77,\\ 11{,}58]$.",
    },
    {
      question: "Invariansprinsippet fra ML gjenbrukes for KI ved at:",
      options: ["et KI for $\\theta$ gir et KI for $g(\\theta)$ via en monoton $g$", "ML-estimatet alltid ligger i midten av KI-et", "KI-et blir symmetrisk når $g$ er lineær", "man må estimere $g(\\theta)$ på nytt med ny likelihood"],
      explanation: "Samme monotoni-idé: transformer endepunktene med $g$ (bytt plass hvis $g$ avtar).",
    },
    {
      question: "Hva bør et fullstendig KI-svar til sensor inneholde til slutt?",
      options: ["Tallintervallet med enhet og en tolkende setning", "Bare det numeriske intervallet uten enhet", "En liste over alle kvantiler i tabellen", "Selve tetthetsfunksjonen til dataene"],
      explanation: "Sensor krever tallsvar med enhet og tolkning; et bart intervall gir redusert uttelling.",
    },
    {
      question: "Et eksakt intervall for $\\mu$ er $[4{,}09,\\ 11{,}43]$. Sviktsannsynligheten $p = 1-e^{-1/\\mu}$ er avtakende i $\\mu$. Hvor kommer **nedre** grense for $p$ fra?",
      options: ["Fra **øvre** grense for $\\mu$ (fordi $g$ avtar)", "Fra nedre grense for $\\mu$", "Fra punktestimatet $\\hat\\mu$", "Fra midtpunktet av $\\mu$-intervallet"],
      explanation: "Avtakende $g$ snur endepunktene: minst $p$ svarer til størst $\\mu$.",
    },
  ],
  'stk1100-6-2': [
    {
      question: "Hvilke tre forutsetninger må med i en presis formulering av sentralgrenseteoremet?",
      options: ["Observasjonene er uavhengige, identisk fordelte, og har endelig varians", "Observasjonene er normalfordelte, uavhengige og har kjent forventning", "Observasjonene er identisk fordelte, symmetriske og har stor forventning", "Observasjonene er uavhengige, kontinuerlige og har kjent varians"],
      explanation: "CLT krever iid-observasjoner med endelig varians; alle tre stikkordene må nevnes.",
    },
    {
      question: "Ifølge CLT, hvilken størrelse blir tilnærmet $N(0,1)$ for stor $n$?",
      options: ["Den standardiserte $(\\bar X - \\mu)/(\\sigma/\\sqrt n)$", "Gjennomsnittet $\\bar X$ selv, uten standardisering", "Den usentrerte summen $\\sum X_i$ av observasjonene", "Den halvstandardiserte $(\\bar X - \\mu)/\\sigma$"],
      explanation: "Det er den standardiserte størrelsen som blir $N(0,1)$; $\\bar X$ selv blir $N(\\mu,\\sigma^2/n)$.",
    },
    {
      question: "Hvordan ser det CLT-baserte Wald-konfidensintervallet for en parameter $\\theta$ ut?",
      options: ["$\\hat\\theta \\pm z_{\\alpha/2}\\cdot\\widehat{\\text{SE}}$", "$\\hat\\theta \\pm \\chi^2_{n,\\alpha/2}\\cdot\\widehat{\\text{SE}}$", "$[2\\sum x_i/\\chi^2_{2n,\\alpha/2},\\ 2\\sum x_i/\\chi^2_{2n,1-\\alpha/2}]$", "$\\hat\\theta \\pm t_{n-1,\\alpha/2}\\cdot\\widehat{\\text{SE}}$"],
      explanation: "Wald-intervallet legger et symmetrisk normalintervall $z_{\\alpha/2}\\widehat{\\text{SE}}$ rundt estimatet.",
    },
    {
      question: "I V2024-studien (eksponensiell, nominelt 95 %, $n=10$) dekket eksakt 95,9 % og Wald 91,1 %. Hva forteller det?",
      options: ["Wald underdekker ved lav $n$, mens det eksakte treffer nivået sitt", "Wald er riktigere fordi det er det smaleste av de to intervallene", "Eksakt er altfor bredt og overdekker sann parameter med vilje", "Begge intervallene er ubrukelige for denne lille $n$-en"],
      explanation: "Eksakt har dekning $\\approx 95\\%$ per konstruksjon; Wald dekker sjeldnere enn tilsiktet (underdekning).",
    },
    {
      question: "Hva skjer med dekningsforskjellen mellom eksakt og Wald når $n$ øker fra 10 til 100?",
      options: ["Den forsvinner — begge intervallene nærmer seg ca. 94 %", "Den øker — Wald-intervallet blir stadig mer upålitelig", "Wald blir det klart beste fordi det er det smaleste", "Eksakt slutter å dekke sitt tilsiktede 95 %-nivå"],
      explanation: "For stor $n$ blir CLT-tilnærmingen god, og begge intervallene dekker omtrent likt.",
    },
    {
      question: "Er et smalere Wald-intervall som underdekker å foretrekke framfor det eksakte?",
      options: ["Nei — det gir falsk presisjon; bredden må matche faktisk dekning", "Ja — et smalere konfidensintervall er alltid å foretrekke", "Ja, så lenge punktestimatet ligger midt i intervallet", "Nei, fordi Wald-intervaller alltid blir asymmetriske"],
      explanation: "Et underdekkende intervall undervurderer usikkerheten; smalt er ikke det samme som riktig.",
    },
    {
      question: "For eksponensiell forventning er $\\text{SE}(\\hat\\mu) = \\mu/\\sqrt n$. Hva estimeres den med?",
      options: ["$\\widehat{\\text{SE}} = \\bar X/\\sqrt n$", "$\\widehat{\\text{SE}} = \\sqrt{\\bar X}/n$", "$\\widehat{\\text{SE}} = \\bar X/n$", "$\\widehat{\\text{SE}} = \\sqrt n/\\bar X$"],
      explanation: "Sett $\\hat\\mu=\\bar X$ inn for $\\mu$: $\\widehat{\\text{SE}} = \\bar X/\\sqrt n$.",
    },
    {
      question: "Hvorfor er Wald-intervallet upålitelig for eksponensiale data ved lav $n$?",
      options: ["Fordi standardfeilen $\\mu/\\sqrt n$ selv avhenger av den ukjente parameteren", "Fordi eksponensialfordelingen ikke har en endelig forventning i det hele tatt", "Fordi $z$-kvantilene er ukjente og må estimeres for lave $n$", "Fordi gjennomsnittet $\\bar X$ ikke kan regnes ut for små utvalg"],
      explanation: "Når SE avhenger av parameteren, fanger ikke normaltilnærmingen skjevheten ved lav $n$.",
    },
    {
      question: "Wald-intervallet er $6{,}4 \\pm 1{,}96\\cdot 1{,}28$. Hva blir det?",
      options: ["$[3{,}89,\\ 8{,}91]$", "$[8{,}91,\\ 3{,}89]$", "$[5{,}12,\\ 7{,}68]$", "$[4{,}48,\\ 9{,}89]$"],
      explanation: "$1{,}96\\cdot 1{,}28 = 2{,}51$, så $6{,}4 \\pm 2{,}51 = [3{,}89,\\ 8{,}91]$.",
    },
    {
      question: "Hva er forskjellen på **konfidensgrad** og **dekningsgrad**?",
      options: ["Konfidensgrad er nivået vi sikter mot; dekningsgrad er den faktiske treffandelen", "De er per definisjon alltid identiske for et hvilket som helst intervall", "Konfidensgrad gjelder dataene, mens dekningsgrad gjelder selve parameteren", "Dekningsgraden er per konstruksjon alltid høyere enn konfidensgraden"],
      explanation: "For eksakte intervaller er de like; for tilnærmede (Wald) kan dekningen være lavere ved lav $n$.",
    },
    {
      question: "Hvordan skal Wald-intervallet presenteres på eksamen når en eksakt pivot finnes?",
      options: ["Som et alternativ, mens det eksakte intervallet meldes som hovedsvar", "Som det klart beste svaret nettopp for et lite utvalg", "Som eneste svar, ettersom det er enklest å regne ut", "Uten å nevne det eksakte pivotal-intervallet i det hele tatt"],
      explanation: "Sensor (V2024) vil ha eksakt som hovedsvar; Wald er et alternativ, aldri «best» for liten $n$.",
    },
    {
      question: "Er Wald-intervallet symmetrisk eller asymmetrisk om punktestimatet $\\hat\\theta$?",
      options: ["Symmetrisk, siden det er $\\hat\\theta \\pm z_{\\alpha/2}\\widehat{\\text{SE}}$", "Asymmetrisk, akkurat som det eksakte pivotal-intervallet", "Alltid tydelig forskjøvet oppover mot høyre hale", "Det avhenger av hvor mange frihetsgrader pivoten har"],
      explanation: "$\\pm$-formen gjør Wald symmetrisk; det eksakte $\\chi^2$-intervallet er derimot asymmetrisk.",
    },
    {
      question: "En maskin fyller poser: $\\mu=500$ g, $\\sigma=20$ g, $n=100$. Hva er standardfeilen til $\\bar X$?",
      options: ["$2$ g", "$20$ g", "$0{,}2$ g", "$200$ g"],
      explanation: "$\\text{SE}(\\bar X)=\\sigma/\\sqrt n = 20/\\sqrt{100} = 2$ g.",
    },
    {
      question: "Hva bør du gjøre før du bruker et CLT/Wald-intervall på $n=6$ tydelig skjeve data?",
      options: ["Ta forbehold om at $n$ er for liten, og foretrekk eksakt der en pivot finnes", "Bruke Wald-intervallet uansett, ettersom det er det enkleste alternativet", "Doble antall $z$-kvantiler for å kompensere for skjevheten", "Bytte datasettet ut med et som er tilnærmet symmetrisk fordelt"],
      explanation: "CLT krever stor $n$; ved liten skjev $n$ er eksakt pivotal-KI (uten normaltilnærming) bedre.",
    },
    {
      question: "Hvorfor er $\\bar X$ selv bare tilnærmet $N(\\mu, \\sigma^2/n)$ og ikke $N(0,1)$?",
      options: ["Fordi $\\bar X$ har forventning $\\mu$ og varians $\\sigma^2/n$, ikke 0 og 1", "Fordi gjennomsnittet $\\bar X$ i praksis aldri er tilnærmet normalfordelt", "Fordi standardavviket $\\sigma$ i utgangspunktet er en ukjent størrelse", "Fordi utvalgsstørrelsen $n$ per definisjon alltid er endelig"],
      explanation: "Standardisering flytter $\\bar X$ til forventning 0 og varians 1; usentrert er det $N(\\mu,\\sigma^2/n)$.",
    },
    {
      question: "Et eksakt 95 %-KI er $[4{,}48,\\ 9{,}89]$ (asymmetrisk) og Wald er $[3{,}89,\\ 8{,}91]$ (symmetrisk om 6,4). Hva er korrekt?",
      options: ["Wald strekker seg feilaktig lengre ned og kortere opp enn den korrekte formen", "Wald er riktigere ettersom det er pent sentrert rundt punktestimatet 6,4", "Det eksakte intervallet må være feil siden det ikke er symmetrisk", "De to intervallene er praktisk talt identiske og gir samme svar"],
      explanation: "Den korrekte formen (eksakt) er forskjøvet oppover; Wald-symmetrien bommer på skjevheten.",
    },
    {
      question: "Hva er $z_{0{,}025}$, kvantilen brukt i et 95 % Wald-intervall?",
      options: ["$1{,}96$", "$1{,}645$", "$2{,}576$", "$1{,}00$"],
      explanation: "For 95 % er $\\alpha/2=0{,}025$ og $z_{0{,}025}=1{,}96$ (øvre haleareal).",
    },
    {
      question: "Hvordan måles dekningsgraden til et konfidensintervall i praksis?",
      options: ["Ved å trekke data med kjent $\\theta$, bygge intervallet, telle treff og gjenta", "Ved å lese den ferdig oppgitte dekningsgraden av i formelsamlingen", "Ved å regne ut den tilsiktede $1-\\alpha$ analytisk for hvert datasett", "Ved å måle bredden på ett enkelt utregnet konfidensintervall"],
      explanation: "En dekningssimulering trekker mange datasett med kjent sann $\\theta$ og teller andelen intervaller som dekker den.",
    },
    {
      question: "Hva er den underliggende grunnen til at Wald-intervallet kan legges rundt en ML-estimator?",
      options: ["ML-estimatoren er tilnærmet normalfordelt om sann parameter for stor $n$", "ML-estimatoren er alltid helt nøyaktig normalfordelt uansett $n$", "ML-estimatoren er per definisjon alltid en forventningsrett estimator", "ML-estimatoren har alltid varians nøyaktig lik 1 for enhver modell"],
      explanation: "For stor $n$ er $\\hat\\theta$ tilnærmet $N(\\theta,\\text{Var}(\\hat\\theta))$, som følge av CLT.",
    },
    {
      question: "En student melder Wald-intervallet som «det beste» for $n=8$ eksponensiale data. Hva er galt?",
      options: ["Ved lav $n$ underdekker Wald, så det eksakte pivotal-intervallet foretrekkes", "Ingenting — Wald-intervallet er alltid det beste valget for lave $n$", "Wald-intervallet finnes ikke for eksponensialfordelte observasjoner", "Wald-intervallet krever at utvalgsstørrelsen $n$ er et partall"],
      explanation: "Wald hviler på CLT som svikter ved lav $n$; eksakt har korrekt dekning og skal foretrekkes.",
    },
  ],
  'stk1100-6-3': [
    {
      question: "Hva er riktig rekkefølge på leddene i estimerings-kjeden?",
      options: ["Modell → estimator → forventningsretthet/varians → pivot → eksakt KI → CLT/Wald → bootstrap", "Estimator → modell → eksakt KI → pivot → forventningsretthet → bootstrap", "Pivot → modell → estimator → CLT → forventningsretthet → eksakt KI", "Modell → pivot → eksakt KI → estimator → forventningsretthet → CLT"],
      explanation: "Kjeden går fra modelldefinisjon via ML og transformasjon til eksakt KI, deretter CLT-alternativ og bootstrap-SE.",
    },
    {
      question: "Hvorfor skal en besvarelse alltid åpne med «La $X_i = \\ldots$, iid med fordeling $\\ldots$»?",
      options: ["Det er sensorkrav 1; udefinerte variable gir ufullstendig svar", "Fordi det gir ekstra frihetsgrader", "Fordi ML-estimatoren ellers ikke finnes", "Fordi pivoten da blir symmetrisk"],
      explanation: "Sensor krever at variable og modell defineres før regning; uten det regnes svaret som ufullstendig.",
    },
    {
      question: "Hvilken frihetsgrad har eksponensialpivoten $2\\sum X_i/\\mu$ for $n$ observasjoner?",
      options: ["$2n$", "$n$", "$n-1$", "$2n-1$"],
      explanation: "Hvert ledd gir $\\chi^2_2$; summen av $n$ slike er $\\chi^2_{2n}$.",
    },
    {
      question: "For eksponensial i forventningsform, hva er ML-estimatoren for $\\mu$?",
      options: ["$\\hat\\mu = \\bar X$", "$\\hat\\mu = 1/\\bar X$", "$\\hat\\mu = n/\\sum x_i^2$", "$\\hat\\mu = \\sum x_i^2/n$"],
      explanation: "$\\ell'(\\mu)=-n/\\mu+\\sum x_i/\\mu^2=0$ gir $\\hat\\mu=\\bar X$.",
    },
    {
      question: "Weibull-estimatoren $\\hat\\beta$ (kjent form) er skjev. Hvordan korrigeres den til forventningsrett?",
      options: ["Del ut $\\Gamma$-faktoren via E(Vʳ)-formelen", "Trekk fra standardfeilen", "Kvadrer estimatoren", "Bytt til rateparametriseringen"],
      explanation: "Rot-/potensestimatorer korrigeres ved å dele ut $\\Gamma$-forholdet fra $E(V^r)=\\beta^r\\Gamma(\\alpha+r)/\\Gamma(\\alpha)$.",
    },
    {
      question: "Med $n=15$, $\\sum x_i=96$, $\\chi^2_{30,0{,}025}=46{,}98$, $\\chi^2_{30,0{,}975}=16{,}79$: hva er eksakt 95 %-KI for $\\mu$?",
      options: ["$[4{,}09,\\ 11{,}43]$", "$[11{,}43,\\ 4{,}09]$", "$[2{,}04,\\ 5{,}72]$", "$[16{,}79,\\ 46{,}98]$"],
      explanation: "$2\\sum x_i=192$, $2n=30$: $[192/46{,}98,\\ 192/16{,}79]=[4{,}09,\\ 11{,}43]$.",
    },
    {
      question: "For $n=15$ eksponensiale data — hvilket intervall melder du som hovedsvar?",
      options: ["Det eksakte, fordi Wald underdekker ved lav/moderat $n$", "Wald, fordi det er smalest", "Wald, fordi det er symmetrisk", "Ingen av dem — bruk bare punktestimatet"],
      explanation: "Ved lav/moderat $n$ har det eksakte bedre dekning; Wald oppgis kun som alternativ.",
    },
    {
      question: "Hva er en **parametrisk** bootstrap for standardfeilen til $\\hat\\theta$?",
      options: ["Trekk mange utvalg fra modellen med $\\hat\\theta$ innsatt, og ta SD av $\\hat\\theta^*$-ene", "Trekk med tilbakelegging fra selve dataene og ta gjennomsnittet", "Regn $\\Gamma$-faktoren analytisk", "Bruk normaltilnærmingens $z$-kvantil direkte"],
      explanation: "Parametrisk bootstrap simulerer fra modellen med $\\hat\\theta$ innsatt; SE er SD (ddof=1) til bootstrap-estimatene.",
    },
    {
      question: "For Pareto med $\\hat\\theta=n/T$ står $\\theta$ i telleren av pivoten $2\\theta T$. Hva betyr det for KI-utledningen?",
      options: ["Vi deler kvantilene på $2T$ (positiv) — ingen vending", "Vi inverterer og bytter endepunktene", "Intervallet blir alltid symmetrisk", "Frihetsgraden blir $n$ i stedet for $2n$"],
      explanation: "Når parameteren står i telleren, isoleres den ved å dele på den positive $2T$; ulikheten snur ikke.",
    },
    {
      question: "Pareto-medianen er $m=k\\cdot 2^{1/\\theta}$. Hvordan lager du KI for $m$ fra KI $[\\theta_L,\\theta_U]$?",
      options: ["Bytt endepunktene: $[k2^{1/\\theta_U},\\ k2^{1/\\theta_L}]$, fordi $g$ avtar", "Behold rekkefølgen: $[k2^{1/\\theta_L},\\ k2^{1/\\theta_U}]$", "Gang begge med $\\ln 2$", "Del begge på $\\theta$"],
      explanation: "$g(\\theta)=k2^{1/\\theta}$ er avtakende, så nedre $m$-grense kommer fra øvre $\\theta$-grense.",
    },
    {
      question: "Normal med **kjent** $\\mu$: hvilken frihetsgrad har pivoten $\\sum(X_i-\\mu)^2/\\sigma^2$?",
      options: ["$n$", "$2n$", "$n-1$", "$2n-2$"],
      explanation: "Hvert standardisert kvadrat $\\sim\\chi^2_1$; summen av $n$ gir $\\chi^2_n$ (ikke $2n$).",
    },
    {
      question: "Et smalere Wald-intervall enn det eksakte ved $n=8$ er:",
      options: ["ikke bedre — det underdekker og gir falsk presisjon", "alltid å foretrekke fordi det er kortere", "et tegn på at det eksakte er feil", "bevis for at CLT gjelder eksakt her"],
      explanation: "Ved lav $n$ underdekker Wald; smalt er ikke det samme som riktig dekning.",
    },
    {
      question: "Hva bør et komplett kjede-svar avsluttes med (trinn 8)?",
      options: ["Tallsvar med enhet og en tolkende setning", "Bare det numeriske intervallet", "En liste over brukte kvantiler", "Selve likelihood-funksjonen"],
      explanation: "Sensorkrav 11: tallsvar med enhet og tolkning, samt avledet størrelse der oppgaven ber om det.",
    },
    {
      question: "En kollega bruker $\\chi^2_{10}$ som pivotfordeling for $n=10$ eksponensiale observasjoner. Hva er feil?",
      options: ["Frihetsgraden skal være $2n=20$, ikke $n=10$", "Ingenting — $\\chi^2_{10}$ er riktig", "Han skulle brukt normalfordelingen", "Han skulle brukt $n-1=9$ frihetsgrader"],
      explanation: "Eksponensialpivoten $2\\sum X_i/\\mu$ har $2n=20$ frihetsgrader, ikke $n$.",
    },
    {
      question: "Bootstrap-SE for $\\hat\\mu$ (eksponensial, $n=25$, $\\hat\\mu=6{,}4$) lander på ca. 1,3. Hva stemmer den godt med?",
      options: ["Den analytiske $\\hat\\mu/\\sqrt n = 6{,}4/5 = 1{,}28$", "Punktestimatet $\\hat\\mu = 6{,}4$", "Summen $\\sum x_i = 160$", "Frihetsgraden $2n = 50$"],
      explanation: "For eksponensial er $\\text{SE}(\\hat\\mu)=\\mu/\\sqrt n$; bootstrap $\\approx 1{,}3 \\approx 1{,}28$.",
    },
  ],
  'stk1100-7-1': [
    {
      question: "Hva sier inversjonsmetoden?",
      options: ["Er $U$ uniform på $(0,1)$, har $X = F^{-1}(U)$ fordelingsfunksjon $F$", "Er $U$ uniform på $(0,1)$, har $X = F(U)$ fordelingsfunksjon $F$", "Er $U$ uniform på $(0,1)$, har $X = f^{-1}(U)$ fordelingsfunksjon $F$", "Er $U$ uniform på $(0,1)$, har $X = F^{-1}(U)$ tetthet lik $U$"],
      explanation: "Setter du et uniformt tall inn i den inverse fordelingsfunksjonen, får du en realisasjon fra fordelingen med fordelingsfunksjon $F$.",
    },
    {
      question: "Hvilken funksjon inverterer du i inversjonsmetoden?",
      options: ["Fordelingsfunksjonen $F$ — du løser $F(x) = u$ for $x$", "Tettheten $f$ — du løser $f(x) = u$ for $x$", "Den deriverte $F'$ — du løser $F'(x) = u$ for $x$", "Forventningen $E(X)$ — du løser $E(X) = u$ for $x$"],
      explanation: "Metoden bruker fordelingsfunksjonen. Å invertere tettheten $f$ i stedet er en klassisk feil.",
    },
    {
      question: "Inversjonsformelen for eksponensial med forventning $\\mu$ ($F(x) = 1 - e^{-x/\\mu}$) er:",
      options: ["$x = -\\mu\\ln(1-u)$", "$x = -\\mu\\ln(u)$ og aldri noe annet", "$x = \\mu\\ln(1-u)$", "$x = -\\frac{1}{\\mu}\\ln(1-u)$"],
      explanation: "Løser du $1 - e^{-x/\\mu} = u$, får du $x = -\\mu\\ln(1-u)$. (Med $1-U$ uniform gir $-\\mu\\ln u$ samme fordeling, men grunnformelen bruker $1-u$.)",
    },
    {
      question: "Inversjonsformelen for Pareto ($F(x) = 1 - (k/x)^{\\theta}$, $x>k$) er:",
      options: ["$x = k(1-u)^{-1/\\theta}$", "$x = k(1-u)^{1/\\theta}$", "$x = k(1-u)^{-\\theta}$", "$x = \\theta(1-u)^{-1/k}$"],
      explanation: "Løs $1 - (k/x)^{\\theta} = u$: $(k/x)^{\\theta} = 1-u$, så $x = k(1-u)^{-1/\\theta}$.",
    },
    {
      question: "I `stats.norm.rvs(mu, sigma, size=n)` er annet argument:",
      options: ["standardavviket $\\sigma$", "variansen $\\sigma^2$", "presisjonen $1/\\sigma^2$", "halve variansen $\\sigma^2/2$"],
      explanation: "`scale` er standardavviket. Har du variansen, ta kvadratroten først — å sende variansen er en vanlig felle.",
    },
    {
      question: "Du skal trekke fra $N(\\mu, \\sigma^2)$ med varians $\\sigma^2 = 9$. Riktig kall er:",
      options: ["`stats.norm.rvs(mu, 3, size=n)`", "`stats.norm.rvs(mu, 9, size=n)`", "`stats.norm.rvs(mu, 81, size=n)`", "`stats.norm.rvs(mu, 4.5, size=n)`"],
      explanation: "Standardavviket er $\\sqrt{9} = 3$, og det er standardavviket funksjonen vil ha som annet argument.",
    },
    {
      question: "Hva estimerer `np.mean(x > 2)` når `x` er en vektor av realisasjoner?",
      options: ["$P(X > 2)$ — andelen realisasjoner over 2", "$E(X)$ blant realisasjonene over 2", "antallet realisasjoner over 2", "variansen til realisasjonene over 2"],
      explanation: "`x > 2` er en 1/0-indikatorvektor, og gjennomsnittet er andelen sanne — et estimat av sannsynligheten $P(X > 2)$.",
    },
    {
      question: "Hvorfor bruker vi `ddof=1` i `np.var(x, ddof=1)`?",
      options: ["Divisor $n-1$ gir en forventningsrett estimator av variansen", "Divisor $n-1$ gir alltid en større og dermed sikrere varians", "Det gjør at variansen deles på $n$ i stedet for $n-1$", "Det er nødvendig for at koden i det hele tatt skal kjøre"],
      explanation: "`ddof=1` betyr divisor $n-1$, som gir den forventningsrette empiriske variansen (kobling kap. 5.1).",
    },
    {
      question: "Hva er fordelen med vektorisert kode som `-mu*np.log(1-u)` framfor en `for`-løkke?",
      options: ["Kortere og raskere, og resultatet er et array klart for `np.mean` osv.", "Den gir mer nøyaktige tilfeldige tall enn en løkke gjør", "Den er nødvendig fordi `np.log` ikke virker på enkeltverdier", "Den bruker en helt annen og bedre tilfeldighetskilde"],
      explanation: "Vektorisering behandler hele arrayet elementvis på én gang — kortere, raskere og lett å sende videre til `np.mean`/`np.var`.",
    },
    {
      question: "En snutt gjør `x = -5*np.log(1-u)` og deretter `print(np.mean(x))`. Hva trekkes det fra, og hva estimeres?",
      options: ["Eksponensial med forventning 5; estimerer $E(X) = 5$", "Eksponensial med rate 5; estimerer $E(X) = 1/5$", "Normalfordeling med forventning 5; estimerer $E(X)$", "Uniform på $(0,5)$; estimerer medianen"],
      explanation: "`-5*np.log(1-u)` er $-\\mu\\ln(1-u)$ med $\\mu = 5$ (forventnings-form), og `np.mean(x)` estimerer $E(X) = \\mu = 5$.",
    },
    {
      question: "Inversjonsformelen for Rayleigh ($F(x) = 1 - e^{-x^2/(2\\sigma^2)}$) er:",
      options: ["$x = \\sigma\\sqrt{-2\\ln(1-u)}$", "$x = \\sigma\\sqrt{2\\ln(1-u)}$", "$x = \\sigma\\,(-2\\ln(1-u))$", "$x = \\sqrt{-2\\sigma\\ln(1-u)}$"],
      explanation: "Løs for $x^2 = -2\\sigma^2\\ln(1-u)$ og ta positiv rot: $x = \\sigma\\sqrt{-2\\ln(1-u)}$.",
    },
    {
      question: "Inversjonsformelen for Weibull ($F(x) = 1 - e^{-(x/\\beta)^{\\alpha}}$) er:",
      options: ["$x = \\beta(-\\ln(1-u))^{1/\\alpha}$", "$x = \\beta(-\\ln(1-u))^{\\alpha}$", "$x = \\alpha(-\\ln(1-u))^{1/\\beta}$", "$x = \\beta(\\ln(1-u))^{1/\\alpha}$"],
      explanation: "$(x/\\beta)^{\\alpha} = -\\ln(1-u)$ gir $x = \\beta(-\\ln(1-u))^{1/\\alpha}$; $\\alpha = 1$ gir eksponensial.",
    },
    {
      question: "Hvorfor gir `np.random.uniform(size=n)` det riktige råstoffet til inversjonsmetoden?",
      options: ["Fordi $U$ er uniform på $(0,1)$, og $F(x)$ tar nettopp verdier i $(0,1)$", "Fordi uniforme tall i grensen alltid nærmer seg en normalfordeling ved sentralgrensesetningen", "Fordi $U$ er uniform på hele tallinjen $(-\\infty,\\infty)$", "Fordi `size=n` sørger for at tallene blir avhengige"],
      explanation: "Beviset bruker $P(U \\le c) = c$ for $c \\in (0,1)$, og $F(x)$ ligger nettopp der — derfor $P(F^{-1}(U)\\le x) = F(x)$.",
    },
    {
      question: "Hva er galt hvis `stats.norm.rvs(100, 25, size=n)` var ment for varians $25$?",
      options: ["$25$ blir tolket som standardavvik, så spredningen blir 5 ganger for stor", "$25$ blir tolket som forventning, så senteret havner feil", "Ingenting er galt, for `stats.norm.rvs` tar nettopp variansen som sitt andre argument", "$25$ blir tolket som antall trekk i stedet for spredningen"],
      explanation: "Annet argument er standardavviket. Med varians $25$ er $\\sigma = 5$; sender du $25$, får du spredning 5 ganger for stor.",
    },
    {
      question: "Er $U$ uniform på $(0,1)$. Hva gjelder for $1 - U$?",
      options: ["$1 - U$ er også uniform på $(0,1)$", "$1 - U$ er uniform på $(-1,0)$", "$1 - U$ er eksponensialfordelt", "$1 - U$ er alltid lik $U$"],
      explanation: "$1-U$ er også uniform på $(0,1)$; derfor gir både $-\\mu\\ln(1-u)$ og $-\\mu\\ln(u)$ korrekte eksponensiale tall.",
    },
    {
      question: "Hva estimerer `np.var(x, ddof=1)` når `x` er en vektor av realisasjoner?",
      options: ["Variansen $\\text{Var}(X)$ i fordelingen realisasjonene kommer fra", "Forventningen $E(X)$ i den fordelingen som realisasjonene opprinnelig er trukket fra", "Standardavviket $\\sqrt{\\text{Var}(X)}$", "Sannsynligheten $P(X > 0)$"],
      explanation: "Den empiriske variansen med divisor $n-1$ estimerer fordelingens varians $\\text{Var}(X)$.",
    },
    {
      question: "Hvorfor skal du skaffe $F$ (ikke $f$) før du bruker inversjonsmetoden?",
      options: ["Fordi metoden inverterer $F$; du løser $F(x) = u$", "Fordi $f$ ikke finnes for kontinuerlige fordelinger", "Fordi $f$ alltid er lik $F$ for uniforme tall", "Fordi $F$ ikke kan integreres, men $f$ kan"],
      explanation: "Inversjonsmetoden løser $F(x) = u$. Har du bare $f$, må du integrere til $F$ først.",
    },
    {
      question: "Funksjonsmønsteret `def simuler(n): u = np.random.uniform(size=n); return -mu*np.log(1-u)` returnerer:",
      options: ["et array med $n$ eksponensiale realisasjoner (forventning $\\mu$)", "et enkelt tall som er lik gjennomsnittet av de $n$ trukne uniforme tallene på $(0,1)$", "et array med $n$ uniforme tall på $(0,1)$", "sannsynligheten $P(X > \\mu)$"],
      explanation: "Mønsteret trekker $n$ uniforme og transformerer vektorisert med inversjonsformelen — resultatet er $n$ eksponensiale realisasjoner.",
    },
    {
      question: "En snutt gjør `x = 1*(1-u)**(-1/4)` og `print(np.mean(x > 2))`. Hva estimeres?",
      options: ["$P(X > 2)$ for Pareto med $k=1$, $\\theta=4$, altså $2^{-4} = 0{,}0625$", "$E(X)$ for Pareto med $k=1$, $\\theta=4$", "$P(X > 2)$ for en eksponensialfordeling med forventning lik 2, altså tilnærmet $e^{-1}$", "medianen til Pareto-fordelingen"],
      explanation: "`1*(1-u)**(-1/4)` er Pareto ($k=1,\\theta=4$), og `np.mean(x>2)` estimerer $P(X>2) = (1/2)^4 = 0{,}0625$.",
    },
    {
      question: "Hvorfor er det viktig at simuleringskoden faktisk kjører før innlevering?",
      options: ["Delvis eller ikke-kjørbar kode gir bare delvis uttelling (sensorkrav 10)", "Koden trenger strengt tatt ikke å kjøre så lenge selve idéen og framgangsmåten er riktig beskrevet", "Sensor kjører aldri koden, bare leser den overfladisk", "Kjørbar kode gir automatisk full score uansett resultat"],
      explanation: "Fra V2020 forventes full, kjørbar Python-kode; delvis kode gir bare delvis uttelling. Test alltid snutten.",
    },
  ],
  'stk1100-7-2': [
    {
      question: "Hva er hovedidéen i bootstrap for standardfeil?",
      options: ["Trekk mange nye utvalg, regn estimatoren på nytt, og mål spredningen", "Regn estimatoren én gang og gang svaret med en fast korreksjonsfaktor", "Bruk kun den analytiske formelen for standardfeilen til estimatoren", "Fjern de mest ekstreme observasjonene og regn på resten"],
      explanation: "Bootstrap later som utvalget er befolkningen: gjentatte utvalg gir gjentatte estimater, og spredningen er standardfeilen.",
    },
    {
      question: "I ikke-parametrisk bootstrap trekkes de nye utvalgene:",
      options: ["med tilbakelegging fra selve dataene", "uten tilbakelegging fra selve dataene", "fra en normalfordeling tilpasset dataene", "fra en uniform fordeling over dataområdet"],
      explanation: "Ikke-parametrisk bootstrap gjør ingen fordelingsantakelse og trekker med tilbakelegging fra dataene (`replace=True`).",
    },
    {
      question: "I parametrisk bootstrap trekkes de nye utvalgene:",
      options: ["fra den tilpassede fordelingen, med $\\hat\\theta$ satt inn", "med tilbakelegging fra selve dataene", "uten tilbakelegging fra selve dataene", "fra en uniform fordeling over hele dataområdet, uansett hvilken modell dataene faktisk følger"],
      explanation: "Parametrisk bootstrap antar en fordeling, tilpasser parameteren, og trekker nye utvalg fra den tilpassede fordelingen.",
    },
    {
      question: "Hvordan regnes bootstrap-standardfeilen fra de $B$ estimatene `theta_b`?",
      options: ["`np.std(theta_b, ddof=1)`", "`np.mean(theta_b)`", "`np.std(theta_b, ddof=0)`", "`np.var(theta_b, ddof=1)`"],
      explanation: "SE er det empiriske standardavviket til bootstrap-estimatene, med divisor $B-1$ (`ddof=1`).",
    },
    {
      question: "Hva skjer hvis du bruker `replace=False` i ikke-parametrisk bootstrap (med `size=n` og data av lengde $n$)?",
      options: ["Hvert utvalg blir en omstokking av de samme tallene, og SE-en kollapser mot 0", "Utvalgene blir systematisk større enn de opprinnelige dataene, og standardfeilen blir dermed altfor stor", "Ingenting endres — `replace` har ingen betydning her", "Koden gir en feilmelding og stopper"],
      explanation: "Uten tilbakelegging trekkes alle $n$ elementene hver gang — bare en omstokking med samme gjennomsnitt, så variasjonen forsvinner.",
    },
    {
      question: "Hva er forskjellen på $B$ og $n$ i bootstrap?",
      options: ["$B$ er antall bootstrap-trekk (velges selv); $n$ er utvalgsstørrelsen (fast)", "$B$ er utvalgsstørrelsen (fast); $n$ er antall bootstrap-trekk (velges selv)", "$B$ og $n$ er to navn på samme størrelse", "$B$ er antall parametre; $n$ er antall fordelinger"],
      explanation: "$n$ er gitt av dataene, $B$ velger du selv. Flere $B$ gir et mer presist SE-estimat, men endrer ikke $n$.",
    },
    {
      question: "Monte Carlo-prinsippet sier at en sannsynlighet kan estimeres slik:",
      options: ["$P(\\text{hendelse}) = E(I)$ estimeres med `np.mean(betingelse)`", "$P(\\text{hendelse})$ estimeres med `np.sum(betingelse)` uten deling", "$P(\\text{hendelse})$ estimeres med `np.std(betingelse)`", "$P(\\text{hendelse})$ kan aldri estimeres ved simulering"],
      explanation: "En sannsynlighet er en forventet indikator, og en forventning estimeres med et gjennomsnitt — derfor `np.mean(betingelse)`.",
    },
    {
      question: "Variansen til et Monte Carlo-estimat av en sannsynlighet $p$ basert på $B$ trekk er:",
      options: ["$p(1-p)/B$", "$p(1-p)/n$", "$p(1-p)\\cdot B$", "$p^2/B$"],
      explanation: "Indikatorene er uavhengige med varians $p(1-p)$, så gjennomsnittet har varians $p(1-p)/B$.",
    },
    {
      question: "Hvordan avtar Monte Carlo-standardfeilen med antall trekk $B$?",
      options: ["Proporsjonalt med $1/\\sqrt{B}$ — firedobling av $B$ halverer SE-en", "Proporsjonalt med $1/B$ — dobling av $B$ halverer SE-en", "Proporsjonalt med $1/B^2$ — SE-en faller svært raskt", "Den avtar ikke; SE er uavhengig av $B$"],
      explanation: "SE $= \\sqrt{p(1-p)/B} \\propto 1/\\sqrt B$, så du må firedoble $B$ for å halvere usikkerheten.",
    },
    {
      question: "Hvordan simulerer du dekningsgraden til et 95 %-konfidensintervall?",
      options: ["Lag mange datasett med kjent parameter, bygg KI i hvert, tell andelen som dekker", "Lag ett enkelt datasett og bygg det samme konfidensintervallet om og om igjen på nøyaktig dette ene datasettet", "Regn ut KI-et én gang og sjekk om det er nøyaktig 95 % bredt", "Trekk med tilbakelegging fra KI-ets endepunkter"],
      explanation: "Dekningsstudien genererer mange datasett fra en kjent fordeling, bygger KI i hvert og teller andelen som dekker den sanne parameteren.",
    },
    {
      question: "Hvorfor dekker et eksakt pivotal-KI for eksponensial nominelt 95 % uansett $n$?",
      options: ["Fordi $2n\\bar X/\\mu \\sim \\chi^2_{2n}$ er en eksakt pivotal for alle $n$", "Fordi gjennomsnittet $\\bar X$ er eksakt normalfordelt for enhver utvalgsstørrelse $n$, også de minste", "Fordi Wald-tilnærmingen er eksakt for eksponensial", "Fordi medianen alltid ligger i intervallet"],
      explanation: "Pivotalen $2n\\bar X/\\mu$ er nøyaktig $\\chi^2_{2n}$-fordelt uavhengig av $\\mu$ og $n$, så KI-et bygget på den treffer nominelt.",
    },
    {
      question: "Hvorfor underdekker Wald-KI-et $\\bar X \\pm 1{,}96\\,\\text{SE}$ for eksponensiale data med liten $n$?",
      options: ["$\\bar X$ er høyreskjevt for liten $n$, ikke symmetrisk normalfordelt slik Wald antar", "$\\bar X$ er venstreskjevt for liten $n$, så det symmetriske intervallet blir altfor bredt til å bomme", "Wald bruker feil frihetsgrader i kjikvadratfordelingen", "Wald deler på $n$ i stedet for $n-1$ i standardfeilen"],
      explanation: "Wald forutsetter symmetrisk normalfordelt $\\bar X$. For liten $n$ er $\\bar X$ fortsatt høyreskjevt, så det symmetriske intervallet bommer oftere enn 5 %.",
    },
    {
      question: "Hva skjer med Wald-KI-ets dekning når utvalgsstørrelsen $n$ vokser?",
      options: ["Den nærmer seg 95 %, fordi $\\bar X$ blir mer symmetrisk (sentralgrensesetningen)", "Den synker gradvis under 90 % fordi konfidensintervallet blir stadig smalere når $n$ vokser seg større", "Den holder seg konstant uansett $n$", "Den overstiger 99 %, fordi intervallet blir for bredt"],
      explanation: "Sentralgrensesetningen gjør $\\bar X$ mer symmetrisk og normalfordelt når $n$ vokser, så Wald-antakelsen blir bedre og dekningen nærmer seg 95 %.",
    },
    {
      question: "«Dekker»-indikatoren i en dekningsstudie er:",
      options: ["`lo <= param <= hi` — 1 om KI-et dekker den sanne parameteren", "`lo <= xbar <= hi` — 1 om gjennomsnittet ligger i intervallet", "bredden `hi - lo` på intervallet", "antallet observasjoner som ligger i intervallet"],
      explanation: "For hvert datasett sjekkes om KI-et dekker den *sanne* parameteren; dekningsgraden er gjennomsnittet av disse 1/0-indikatorene.",
    },
    {
      question: "Hva bør du si eksplisitt når du beskriver ikke-parametrisk bootstrap (sensorkrav)?",
      options: ["At du trekker med tilbakelegging fra dataene", "At du trekker uten tilbakelegging fra dataene", "At du fjerner uteliggere før trekking", "At du bruker en normalfordeling som modell"],
      explanation: "«Med tilbakelegging fra dataene» er selve kjennetegnet ved ikke-parametrisk bootstrap; utelates det, taper beskrivelsen poeng.",
    },
    {
      question: "Når er parametrisk bootstrap å foretrekke framfor ikke-parametrisk?",
      options: ["Når du stoler på fordelingsmodellen — den blir da mer presis", "Når du er usikker på fordelingen — den er da mer robust", "Alltid, uansett om modellen er riktig eller gal", "Aldri, fordi den ikke gir en standardfeil"],
      explanation: "Parametrisk bootstrap utnytter modellen og blir mer presis når antakelsen er riktig; er du usikker, er ikke-parametrisk tryggere.",
    },
    {
      question: "Bootstrap-SE-en til estimatoren $\\hat\\theta = \\bar X \\ln 2$ (median i eksponensial) forholder seg til SE-en til $\\bar X$ slik:",
      options: ["Den er $\\ln 2$ ganger SE-en til $\\bar X$", "Den er lik SE-en til $\\bar X$", "Den er $1/\\ln 2$ ganger SE-en til $\\bar X$", "Den er $(\\ln 2)^2$ ganger SE-en til $\\bar X$"],
      explanation: "$\\text{SE}(c\\bar X) = c\\,\\text{SE}(\\bar X)$ for en konstant; her $c = \\ln 2$.",
    },
    {
      question: "Hva estimerer `np.mean((y > 8) & (y < 12))` for realisasjoner `y`?",
      options: ["$P(8 < Y < 12)$ — andelen realisasjoner i intervallet", "$E(Y)$ blant realisasjonene i intervallet", "antallet realisasjoner mellom 8 og 12", "bredden på intervallet $(8, 12)$"],
      explanation: "`(y>8)&(y<12)` er en 1/0-indikator, og `np.mean` gir andelen sanne — et estimat av $P(8 < Y < 12)$.",
    },
    {
      question: "En vanlig feil er å forveksle $B$ og $n$. Hva stemmer?",
      options: ["Å øke $B$ gir et mer presist SE-estimat, men gjør ikke datasettet større", "Å øke $B$ gjør datasettet større og estimatoren mer forventningsrett", "Å øke $n$ gjør bare bootstrap-estimatet mer presist, ikke datasettet", "$B$ og $n$ må alltid være like for at bootstrap skal virke"],
      explanation: "$B$ styrer presisjonen i simuleringen (avtar som $1/\\sqrt B$); $n$ er den faste utvalgsstørrelsen fra dataene.",
    },
    {
      question: "Hva må du passe på når du simulerer dekningsgraden til et KI?",
      options: ["Datasettene må genereres fra den fordelingen KI-et forutsetter", "Datasettene må genereres fra en uniform fordeling uansett KI", "Du må bruke `replace=False` når du lager datasettene", "Du må bruke samme datasett i alle gjentakene"],
      explanation: "Simulerer du under feil fordeling, måler du ikke KI-ets faktiske dekning under sine egne forutsetninger.",
    },
  ],
  'stk1100-8-1': [
    {
      question: "Hva er riktig regneformel for kovariansen $\\text{Cov}(X,Y)$?",
      options: ["$E(XY)-E(X)E(Y)$", "$E(X)E(Y)-E(XY)$", "$E(XY)-E(X^2)E(Y^2)$", "$E(X^2Y^2)-E(X)E(Y)$"],
      explanation: "Kovariansen er forventningen av produktet minus produktet av forventningene: $\\text{Cov}(X,Y)=E(XY)-E(X)E(Y)$.",
    },
    {
      question: "$\\text{Var}(X)=9$, $\\text{Var}(Y)=16$ og $\\text{Cov}(X,Y)=6$. Hva er korrelasjonen $\\rho$?",
      options: ["$0{,}5$", "$0{,}375$", "$0{,}67$", "$0{,}17$"],
      explanation: "$\\rho=\\text{Cov}/\\sqrt{\\text{Var}(X)\\text{Var}(Y)}=6/\\sqrt{9\\cdot 16}=6/12=0{,}5$.",
    },
    {
      question: "Hva blir $\\text{Var}(X-Y)$ når $\\text{Var}(X)=5$, $\\text{Var}(Y)=3$ og $\\text{Cov}(X,Y)=2$?",
      options: ["$4$", "$12$", "$8$", "$0$"],
      explanation: "$\\text{Var}(X-Y)=\\text{Var}(X)+\\text{Var}(Y)-2\\,\\text{Cov}(X,Y)=5+3-2\\cdot 2=4$. Variansen til $Y$ kommer inn med pluss; bare kovariansleddet snur.",
    },
    {
      question: "For hvilken fordeling gjelder at $\\rho=0$ er ensbetydende med at variablene er uavhengige?",
      options: ["Binormalfordelingen", "Enhver fordeling med normale marginaler", "Alle kontinuerlige fordelinger", "Alle fordelinger med endelig varians"],
      explanation: "Bare for binormale par gir ukorrelert (uavhengig). Generelt medfører uavhengig ukorrelert, men ikke omvendt; to normale marginaler er ikke nok.",
    },
    {
      question: "$(X,Y)$ er standardisert binormal ($\\mu_1=\\mu_2=0$, $\\sigma_1=\\sigma_2=1$) med $\\rho=0{,}8$. Hva er $E(Y\\mid X=3)$?",
      options: ["$2{,}4$", "$3$", "$0{,}8$", "$3{,}8$"],
      explanation: "I standardisert binormal er $E(Y\\mid X=x)=\\rho x=0{,}8\\cdot 3=2{,}4$.",
    },
    {
      question: "Hva er den betingede variansen $\\text{Var}(Y\\mid X=x)$ i en binormal?",
      options: ["$\\sigma_2^2(1-\\rho^2)$", "$\\sigma_2^2$", "$\\sigma_2^2(1-\\rho)$", "$\\sigma_2^2\\rho^2$"],
      explanation: "Den betingede variansen er redusert med faktoren $(1-\\rho^2)$: $\\text{Var}(Y\\mid X=x)=\\sigma_2^2(1-\\rho^2)$, og den er den samme for alle $x$.",
    },
    {
      question: "Hvorfor må kovariansleddet med i $\\text{Var}(2X+3Y)$ når $\\text{Cov}(X,Y)\\ne 0$?",
      options: ["Fordi variablene samvarierer, så leddet $12\\,\\text{Cov}(X,Y)$ bidrar til variansen", "Fordi variansformelen alltid inneholder nøyaktig tre ledd uansett fordeling", "Fordi forventningen $E(2X+3Y)$ ikke kan regnes uten et kovariansledd", "Fordi kovariansleddet bare teller når korrelasjonen $\\rho$ er nøyaktig 1"],
      explanation: "Når variablene samvarierer, bidrar $2ab\\,\\text{Cov}(X,Y)=12\\,\\text{Cov}(X,Y)$ til variansen; leddet er null bare ved uavhengighet/ukorrelerthet.",
    },
    {
      question: "$(X,Y)$ er binormal med $\\sigma_1=3$, $\\sigma_2=4$, $\\text{Cov}(X,Y)=0$. Hva er $\\text{Var}(X+Y)$?",
      options: ["$25$", "$49$", "$7$", "$1$"],
      explanation: "$\\text{Cov}=0$ gir intet kovariansledd: $\\text{Var}(X+Y)=9+16=25$. (Og siden paret er binormalt, er variablene også uavhengige.)",
    },
    {
      question: "Hva er stigningstallet i regresjonslinjen $E(Y\\mid X=x)=\\mu_2+\\rho\\frac{\\sigma_2}{\\sigma_1}(x-\\mu_1)$?",
      options: ["$\\rho\\,\\sigma_2/\\sigma_1$", "$\\rho\\,\\sigma_1/\\sigma_2$", "$\\rho$", "$\\sigma_2/\\sigma_1$"],
      explanation: "Faktoren foran $(x-\\mu_1)$ er stigningstallet $\\beta=\\rho\\sigma_2/\\sigma_1$. I standardisert form ($\\sigma_1=\\sigma_2=1$) blir det $\\rho$.",
    },
    {
      question: "To variable har $\\rho=0$, men det er ikke oppgitt at de er binormale. Hva kan du konkludere?",
      options: ["De er ukorrelerte, men kan fortsatt være avhengige (ikke-lineært)", "De er nødvendigvis uavhengige av hverandre", "De er nødvendigvis begge normalfordelte variable", "Kovariansen deres kan da ikke beregnes i det hele tatt"],
      explanation: "$\\rho=0$ betyr ukorrelert (ingen lineær samvariasjon). Uten binormal-antakelsen kan variablene fortsatt være avhengige gjennom en ikke-lineær sammenheng.",
    },
    {
      question: "$(X,Y)$ er binormal med $\\mu_2=100$, $\\sigma_1=10$, $\\sigma_2=20$, $\\rho=0{,}5$, $\\mu_1=50$. Hva er $E(Y\\mid X=60)$?",
      options: ["$110$", "$100$", "$105$", "$120$"],
      explanation: "$E(Y\\mid X=60)=100+0{,}5\\cdot\\frac{20}{10}\\cdot(60-50)=100+0{,}5\\cdot 2\\cdot 10=110$.",
    },
    {
      question: "Hva betyr $\\rho^2$ i en binormal?",
      options: ["Andelen av variansen i $Y$ som forklares lineært av $X$", "Den betingede variansen til $Y$ gitt en observert $X$", "Sannsynligheten for at $X$ og $Y$ er statistisk uavhengige", "Den rene kovariansen mellom variablene $X$ og $Y$"],
      explanation: "Den betingede variansen krymper fra $\\sigma_2^2$ til $\\sigma_2^2(1-\\rho^2)$, en reduksjon på andelen $\\rho^2$ — determinasjonsandelen.",
    },
    {
      question: "Hva er $\\text{Cov}(X,X)$?",
      options: ["$\\text{Var}(X)$", "$0$", "$1$", "$E(X)^2$"],
      explanation: "Kovariansen til en variabel med seg selv er variansen: $\\text{Cov}(X,X)=E(X^2)-[E(X)]^2=\\text{Var}(X)$.",
    },
    {
      question: "Hva skjer med prediksjonen $E(Y\\mid X=x)$ i en standardisert binormal når $\\rho=0$?",
      options: ["Den blir $0$ for alle $x$; beste gjett er marginalen", "Den blir lik den observerte verdien $x$ selv", "Den vokser mot uendelig når $x$ blir stor", "Den kan ikke defineres uten mer informasjon"],
      explanation: "$E(Y\\mid X=x)=\\rho x=0$ når $\\rho=0$. Observasjonen av $X$ gir da ingen informasjon, og beste gjett er den marginale forventningen $\\mu_2=0$.",
    },
    {
      question: "Hvorfor kalles fenomenet at en høy $X$ i snitt følges av en mindre ekstrem $Y$ for «regresjon mot gjennomsnittet»?",
      options: ["Fordi $|\\rho|<1$ gjør at $\\rho x$ ligger nærmere gjennomsnittet enn $x$", "Fordi korrelasjonen alltid er negativ", "Fordi den betingede variansen er større enn den marginale", "Fordi $Y$ alltid blir lik gjennomsnittet uansett $X$"],
      explanation: "Siden $|\\rho|<1$, er $|\\rho x|<|x|$: den predikerte $Y$-verdien trekkes mot midten. Jo svakere korrelasjon, desto sterkere trekk mot gjennomsnittet.",
    },
  ],
  'stk1100-8-2': [
    {
      question: "Hvilken konstant $\\theta$ minimerer forventet kvadratisk avvik $E[(\\theta-X)^2]$?",
      options: ["Forventningen $E(X)$", "Medianen til $X$", "Variansen $\\text{Var}(X)$", "Modusen til $X$"],
      explanation: "Ved variansdekomponeringen er $E[(\\theta-X)^2]=(\\theta-\\mu)^2+\\text{Var}(X)$, som minimeres ved $\\theta=\\mu=E(X)$.",
    },
    {
      question: "Hva blir minsteverdien av $E[(\\theta-X)^2]$ når $\\theta$ velges optimalt?",
      options: ["$\\text{Var}(X)$", "$0$", "$E(X)$", "$[E(X)]^2$"],
      explanation: "Ved $\\theta=\\mu$ nulles $(\\theta-\\mu)^2$ ut, og igjen står $\\text{Var}(X)$ — forventningen kan ikke gjette bedre enn variabelens egen spredning tillater.",
    },
    {
      question: "I variansdekomponeringen $E[(\\theta-X)^2]=(\\theta-\\mu)^2-2(\\theta-\\mu)E(X-\\mu)+E[(X-\\mu)^2]$, hvorfor forsvinner det midterste leddet?",
      options: ["Fordi $E(X-\\mu)=0$", "Fordi $(\\theta-\\mu)=0$ alltid", "Fordi $\\text{Var}(X)=0$", "Fordi $E(X)=0$ alltid"],
      explanation: "En variabel svinger symmetrisk rundt sin egen forventning, så $E(X-\\mu)=E(X)-\\mu=0$, og hele krysseleddet blir null.",
    },
    {
      question: "Hvilken funksjon av $X$ minimerer forventet kvadratisk prediksjonsfeil $E[(Y-g(X))^2]$?",
      options: ["Den betingede forventningen $E(Y\\mid X=x)$", "Den marginale forventningen $E(Y)$ alene", "Kovariansen $\\text{Cov}(X,Y)$ mellom dem", "Korrelasjonskoeffisienten $\\rho$ alene"],
      explanation: "Beste prediksjon under kvadratisk tap er regresjonsfunksjonen $g(x)=E(Y\\mid X=x)$; den minimerer forventet kvadratisk prediksjonsfeil.",
    },
    {
      question: "$(X,Y)$ er standardisert binormal med $\\rho=0{,}4$. Hva er beste prediksjon av $Y$ når $X=5$?",
      options: ["$2$", "$5$", "$0{,}4$", "$0$"],
      explanation: "I standardisert binormal er beste prediksjon $E(Y\\mid X=x_0)=\\rho x_0=0{,}4\\cdot 5=2$.",
    },
    {
      question: "$(X,Y)$ er binormal med $\\mu_2=50$, $\\sigma_1=4$, $\\sigma_2=10$, $\\rho=0{,}7$, $\\mu_1=20$. Hva er $E(Y\\mid X=24)$?",
      options: ["$57$", "$50$", "$60{,}5$", "$54$"],
      explanation: "$E(Y\\mid X=24)=50+0{,}7\\cdot\\frac{10}{4}\\cdot(24-20)=50+0{,}7\\cdot 2{,}5\\cdot 4=50+7=57$.",
    },
    {
      question: "Hva blir det optimale konstante gjettet dersom vi bytter kvadratisk tap med absoluttverditap $E|\\theta-X|$?",
      options: ["Medianen til $X$", "Forventningen $E(X)$", "Variansen $\\text{Var}(X)$", "Standardavviket"],
      explanation: "Under absoluttverditap er medianen det optimale punktestimatet. Valget av tapsfunksjon avgjør hvilket sentralmål som er best.",
    },
    {
      question: "$(X,Y)$ er binormal med $\\sigma_2=10$ og $\\rho=0{,}6$. Hva er forventet kvadratisk prediksjonsfeil når vi predikerer $Y$ fra $X$?",
      options: ["$64$", "$100$", "$36$", "$40$"],
      explanation: "Prediksjonsfeilen er den betingede variansen $\\sigma_2^2(1-\\rho^2)=100\\cdot(1-0{,}36)=64$.",
    },
    {
      question: "Hva er forskjellen på $E(Y\\mid X=x)$ og $E(Y)$?",
      options: ["$E(Y\\mid X=x)$ avhenger av observert $x$; $E(Y)$ er snittet over alt", "De er alltid nøyaktig like hverandre uansett fordeling", "Det er $E(Y)$ som avhenger av $x$, ikke $E(Y\\mid X=x)$", "$E(Y\\mid X=x)$ er alltid strengt større enn $E(Y)$"],
      explanation: "Den betingede forventningen bruker informasjon om $X$ og varierer med $x$; den marginale er et fast tall. De sammenfaller bare når $X$ og $Y$ er uavhengige.",
    },
    {
      question: "Hva skjer med beste prediksjon av $Y$ når $X$ og $Y$ er uavhengige (binormal, $\\rho=0$)?",
      options: ["Den blir $E(Y)$ for alle $x$; observasjonen hjelper ikke", "Den blir lik den observerte verdien $x$ selv", "Den blir $0$ uansett hva marginalforventningen er", "Den kan da ikke beregnes i det hele tatt"],
      explanation: "Ved $\\rho=0$ er $E(Y\\mid X=x)=\\mu_2=E(Y)$ for alle $x$: uavhengighet betyr at $X$ ikke gir informasjon om $Y$.",
    },
    {
      question: "Hvor stor andel av variansen i $Y$ «forklares» av $X$ i en binormal?",
      options: ["$\\rho^2$", "$\\rho$", "$1-\\rho$", "$\\sigma_2^2$"],
      explanation: "Prediksjonsfeilen faller fra $\\sigma_2^2$ til $\\sigma_2^2(1-\\rho^2)$, en reduksjon på andelen $\\rho^2$.",
    },
    {
      question: "En variabel har $E(X)=8$, $\\text{Var}(X)=5$. Hva er $E[(\\theta-X)^2]$ når vi gjetter $\\theta=11$?",
      options: ["$14$", "$9$", "$5$", "$3$"],
      explanation: "$E[(\\theta-X)^2]=(\\theta-\\mu)^2+\\text{Var}(X)=(11-8)^2+5=9+5=14$.",
    },
    {
      question: "Hvorfor er den beste prediksjonen i en binormal lineær i $x$?",
      options: ["Fordi $E(Y\\mid X=x)$ i en binormal er en rett linje i $x$", "Fordi all statistisk prediksjon alltid er lineær i $x$", "Fordi kovariansen mellom $X$ og $Y$ alltid er null", "Fordi den betingede variansen er konstant i $x$"],
      explanation: "Beste prediksjon er $E(Y\\mid X=x)$. For binormalen er denne $\\mu_2+\\rho\\frac{\\sigma_2}{\\sigma_1}(x-\\mu_1)$, altså lineær; for andre fordelinger kan regresjonsfunksjonen være krum.",
    },
    {
      question: "Hva menes med at forventningen er «beste» prediksjon?",
      options: ["Best i betydningen minst forventet kvadratisk avvik", "Best i betydningen alltid nærmest den sanne verdien", "Best fordi den alltid er lik medianen", "Best fordi den har minst varians blant alle estimatorer"],
      explanation: "«Best» er relativt til kvadratisk tap: forventningen minimerer $E[(\\theta-X)^2]$. Med et annet tap ville et annet gjett vært optimalt.",
    },
    {
      question: "$(X,Y)$ er standardisert binormal med $\\rho=0{,}5$. Hvor mye reduseres prediksjonsfeilen ved å observere $X$, sammenlignet med å gjette uten data?",
      options: ["Fra $1$ til $0{,}75$", "Fra $1$ til $0{,}5$", "Fra $1$ til $0{,}25$", "Ingen reduksjon"],
      explanation: "Uten data er feilen $\\text{Var}(Y)=1$; med data er den $1-\\rho^2=1-0{,}25=0{,}75$. Reduksjonen er andelen $\\rho^2=0{,}25$.",
    },
  ],
  'stk1100-8-3': [
    {
      question: "Hva er minste kvadraters estimator for stigningstallet i modellen med konstantledd?",
      options: ["$\\hat\\beta_1=\\frac{\\sum(x_i-\\bar x)(Y_i-\\bar Y)}{\\sum(x_i-\\bar x)^2}$", "$\\hat\\beta_1=\\frac{\\sum(x_i-\\bar x)^2}{\\sum(x_i-\\bar x)(Y_i-\\bar Y)}$", "$\\hat\\beta_1=\\frac{\\sum x_iY_i}{\\sum Y_i^2}$", "$\\hat\\beta_1=\\frac{\\sum(Y_i-\\bar Y)^2}{\\sum(x_i-\\bar x)^2}$"],
      explanation: "Telleren er samvariasjonen $\\sum(x_i-\\bar x)(Y_i-\\bar Y)$, nevneren spredningen i $x$, $\\sum(x_i-\\bar x)^2$. En vanlig felle er å snu teller og nevner.",
    },
    {
      question: "Hva er minste kvadraters estimator for stigningstallet i modellen UTEN konstantledd, $Y_i=\\gamma_1 x_i+\\varepsilon_i$?",
      options: ["$\\hat\\gamma_1=\\frac{\\sum x_iY_i}{\\sum x_i^2}$", "$\\hat\\gamma_1=\\frac{\\sum x_iY_i}{\\sum Y_i^2}$", "$\\hat\\gamma_1=\\frac{\\sum(x_i-\\bar x)Y_i}{\\sum x_i^2}$", "$\\hat\\gamma_1=\\frac{\\sum x_i^2}{\\sum x_iY_i}$"],
      explanation: "Uten konstantledd er $\\hat\\gamma_1=\\sum x_iY_i/\\sum x_i^2$ — rå $x$- og $Y$-verdier, ikke avvik fra gjennomsnittet, fordi linjen er tvunget gjennom origo.",
    },
    {
      question: "Hva er skjæringspunktestimatoren $\\hat\\beta_0$?",
      options: ["$\\bar Y-\\hat\\beta_1\\bar x$", "$\\bar Y+\\hat\\beta_1\\bar x$", "$\\bar x-\\hat\\beta_1\\bar Y$", "$\\hat\\beta_1\\bar x-\\bar Y$"],
      explanation: "$\\hat\\beta_0=\\bar Y-\\hat\\beta_1\\bar x$, som følger av at regresjonslinjen alltid går gjennom tyngdepunktet $(\\bar x,\\bar Y)$.",
    },
    {
      question: "Hva er variansen til stigningsestimatoren $\\hat\\beta_1$?",
      options: ["$\\sigma^2/\\sum(x_i-\\bar x)^2$", "$\\sigma^2\\sum(x_i-\\bar x)^2$", "$\\sigma^2/n$", "$\\sigma^2/\\sum x_i^2$"],
      explanation: "$\\text{Var}(\\hat\\beta_1)=\\sigma^2/S_{xx}$ der $S_{xx}=\\sum(x_i-\\bar x)^2$. Stor spredning i $x$ gir mindre varians og mer presist estimat.",
    },
    {
      question: "I regresjonsmodellen $Y_i=\\beta_0+\\beta_1 x_i+\\varepsilon_i$, hva er stokastisk?",
      options: ["$Y_i$ via feilen $\\varepsilon_i$; $x_i$-ene er faste tall", "Både $x_i$ og $Y_i$ er stokastiske størrelser", "Bare $x_i$ er stokastisk, ikke responsen $Y_i$", "Parametrene $\\beta_0$ og $\\beta_1$ er stokastiske"],
      explanation: "Forklaringsvariablene $x_i$ er faste (kontrollerte) tall; det er responsen $Y_i$ som er stokastisk gjennom den tilfeldige feilen $\\varepsilon_i$.",
    },
    {
      question: "En regresjon har $\\bar x=3$, $\\bar Y=7$, $S_{xx}=10$ og $S_{xY}=20$. Hva er $\\hat\\beta_1$ og $\\hat\\beta_0$?",
      options: ["$\\hat\\beta_1=2$, $\\hat\\beta_0=1$", "$\\hat\\beta_1=0{,}5$, $\\hat\\beta_0=5{,}5$", "$\\hat\\beta_1=2$, $\\hat\\beta_0=13$", "$\\hat\\beta_1=20$, $\\hat\\beta_0=-53$"],
      explanation: "$\\hat\\beta_1=S_{xY}/S_{xx}=20/10=2$; $\\hat\\beta_0=\\bar Y-\\hat\\beta_1\\bar x=7-2\\cdot 3=1$.",
    },
    {
      question: "Hvorfor er $\\text{Var}(\\hat\\gamma_1)\\le\\text{Var}(\\hat\\beta_1)$?",
      options: ["Fordi $\\sum x_i^2=\\sum(x_i-\\bar x)^2+n\\bar x^2\\ge\\sum(x_i-\\bar x)^2$", "Fordi $\\hat\\gamma_1$ alltid er en forventningsrett estimator", "Fordi origo-modellen inneholder flere parametre å estimere", "Fordi $\\sum x_i^2$ alltid er mindre enn spredningen $S_{xx}$"],
      explanation: "Nevneren $\\sum x_i^2$ er minst like stor som $S_{xx}$ (identiteten $\\sum x_i^2=S_{xx}+n\\bar x^2$), så $\\sigma^2/\\sum x_i^2\\le\\sigma^2/S_{xx}$.",
    },
    {
      question: "Når er $\\text{Var}(\\hat\\gamma_1)=\\text{Var}(\\hat\\beta_1)$ (likhet)?",
      options: ["Når $\\bar x=0$", "Når $\\sigma^2=0$", "Når $n=1$", "Aldri"],
      explanation: "Likhet inntreffer når $n\\bar x^2=0$, altså $\\bar x=0$; da er $\\sum x_i^2=S_{xx}$. For $\\bar x\\ne 0$ er ulikheten streng.",
    },
    {
      question: "Hvordan brukes et konfidensintervall til å velge mellom modell med og uten konstantledd?",
      options: ["Inneholder KI for $\\hat\\beta_0$ verdien $0$, kan origo-modellen forsvares", "Inneholder KI for $\\hat\\beta_1$ verdien $0$, droppes konstantleddet", "Er KI for $\\hat\\beta_1$ bredt, velges origo-modellen", "Er $\\hat\\beta_0>\\hat\\beta_1$, droppes konstantleddet"],
      explanation: "Legger man et KI rundt skjæringspunktet $\\hat\\beta_0$ og det dekker $0$, er data forenlige med $\\beta_0=0$, og origo-modellen kan forsvares.",
    },
    {
      question: "En origo-regresjon har $\\sum x_iY_i=120$ og $\\sum x_i^2=80$. Hva er $\\hat\\gamma_1$?",
      options: ["$1{,}5$", "$0{,}67$", "$40$", "$200$"],
      explanation: "$\\hat\\gamma_1=\\sum x_iY_i/\\sum x_i^2=120/80=1{,}5$.",
    },
    {
      question: "Hva innebærer bias-varians-avveiningen ved å droppe konstantleddet?",
      options: ["Lavere varians, men risiko for skjevhet hvis $\\beta_0\\ne 0$", "Alltid bedre presisjon uten noen som helst ulemper", "Høyere varians, men til gjengjeld alltid forventningsrett", "Ingen endring i verken varians eller mulig skjevhet"],
      explanation: "Origo-modellen har mindre varians, men blir skjev om $\\beta_0\\ne 0$. Gevinsten er reell bare når skjevheten er neglisjerbar.",
    },
    {
      question: "Hvorfor er $\\hat\\gamma_1=\\sum x_iY_i/\\sum x_i^2$ forventningsrett i origo-modellen?",
      options: ["Fordi $E(Y_i)=\\gamma_1 x_i$ gir $E(\\hat\\gamma_1)=\\gamma_1$ direkte", "Fordi feilene alltid summerer til $\\sum\\varepsilon_i=0$", "Fordi $x_i$-ene behandles som stokastiske størrelser", "Fordi variansen er lik $\\sigma^2/\\sum x_i^2$ nøyaktig"],
      explanation: "Med $E(Y_i)=\\gamma_1 x_i$ blir $E(\\hat\\gamma_1)=\\frac{\\sum x_i\\gamma_1 x_i}{\\sum x_i^2}=\\gamma_1$ — forventningsrett når origo-modellen stemmer.",
    },
    {
      question: "Et $95\\ \\%$-KI for $\\beta_1$ er $(1{,}69,\\ 2{,}31)$. Hva forteller det?",
      options: ["Det er en klar positiv sammenheng; intervallet dekker ikke $0$", "Sammenhengen kan godt være null, siden intervallet er smalt", "Skjæringspunktet $\\beta_0$ må da være nøyaktig null", "Modellen bør få konstantleddet fjernet fra likningen"],
      explanation: "Intervallet ligger helt over $0$, så en positiv sammenheng mellom $x$ og $Y$ støttes klart.",
    },
    {
      question: "Hvilket av følgende hører IKKE til STK1100-varianten av enkel lineær regresjon?",
      options: ["Residualplott og prediksjonsintervall", "Minste kvadraters estimator", "Forventning og varians til $\\hat\\beta_1$", "Konfidensintervall via $z_{\\alpha/2}$"],
      explanation: "Residualplott og prediksjonsintervall tilhører NTNU-/STK1110-varianten. STK1100 stopper ved LS-estimatorene, deres $E$/$\\text{Var}$ og et KI.",
    },
    {
      question: "For binormale data — hva svarer regresjonens feilvarians $\\sigma^2$ til?",
      options: ["Den betingede variansen $\\sigma_2^2(1-\\rho^2)$", "Den marginale variansen $\\sigma_2^2$ til $Y$", "Kovariansen $\\text{Cov}(X,Y)$ mellom dem", "Korrelasjonskoeffisienten $\\rho$ i seg selv"],
      explanation: "Regresjonsmodellen er binormalens betingede fordeling: stigningstallet svarer til $\\rho\\sigma_2/\\sigma_1$ og feilvariansen til den betingede variansen $\\sigma_2^2(1-\\rho^2)$.",
    },
  ],
  'stk1100-9-1': [
    {
      question: "En oppgave gir en test med sensitivitet 96 % og spesifisitet 99,5 % og spør om sannsynligheten for sykdom gitt positiv test. Hvilken sjanger er dette?",
      options: ["Sjanger A — Bayes og total sannsynlighet", "Sjanger D — simultantetthet i to variable", "Sjanger F — momentgenererende funksjoner", "Sjanger K — enkel lineær regresjon"],
      explanation: "Diagnosetest med sensitivitet/spesifisitet og «gitt positiv test» er kjennetegnet på sjanger A: definer hendelsene, bruk total sannsynlighet i nevneren og Bayes for å snu betingingen.",
    },
    {
      question: "Hvor mange frihetsgrader har den eksakte pivoten for forventningen i en eksponensialfordeling med n observasjoner?",
      options: ["$\\chi^2_{2n}$ — dobbelt så mange som utvalgsstørrelsen", "$\\chi^2_{n}$ — nøyaktig like mange som utvalgsstørrelsen", "$\\chi^2_{n-1}$ — én mindre enn utvalgsstørrelsen", "$\\chi^2_{2n-2}$ — to mindre enn det dobbelte"],
      explanation: "Eksponensial-pivoten $2\\sum X_i/\\mu$ har alltid $2n$ frihetsgrader. Å bruke $\\chi^2_n$ eller $\\chi^2_{n-1}$ her er feil 13 i katalogen.",
    },
    {
      question: "Hva er første trekk når du får en oppgitt simultantetthet $f(x,y)$ og skal finne marginaler og sannsynligheter?",
      options: ["Normere tettheten slik at $\\iint f = 1$", "Regne ut den betingede forventningen $E(Y\\mid X)$", "Derivere fordelingsfunksjonen for å få tettheten", "Sette opp momentgenererende funksjon for summen"],
      explanation: "Uten korrekt normeringskonstant blir alt videre feil. Normering er alltid første steg i sjanger D, før marginaler, sannsynligheter og betinget tetthet.",
    },
    {
      question: "Hvilken egenskap har den betingede forventningen $E(Y\\mid X=x)$ som gjør den til beste prediksjon?",
      options: ["Den minimerer forventet kvadratisk prediksjonsfeil (MSE)", "Den minimerer forventet absoluttavvik fra observasjonen", "Den maksimerer korrelasjonen mellom $X$ og $Y$", "Den gir alltid et symmetrisk konfidensintervall"],
      explanation: "Betinget forventning er den funksjonen av $X$ som minimerer $E[(Y-g(X))^2]$; den minimale verdien er den betingede variansen. Det er kjernen i sjanger L.",
    },
    {
      question: "Hvordan beviser man uavhengighet mellom $X$ og $Y$ fra en simultantetthet, ifølge sensorkravene?",
      options: ["Vise $f(x,y)=f_X(x)f_Y(y)$ for alle $(x,y)$, også null-området", "Vise at kovariansen $\\text{Cov}(X,Y)$ er lik null", "Vise at tettheten ser ut som et produkt av to funksjoner på støtten", "Vise at marginaltetthetene begge integrerer til 1"],
      explanation: "Faktorisering må gjelde på hele planet, inkludert der tettheten er 0. Ett moteksempel motbeviser. Ukorrelert medfører ikke uavhengig (unntatt binormal).",
    },
    {
      question: "Et eksakt pivotal-konfidensintervall for en skalaparameter blir asymmetrisk rundt estimatet. Hva betyr det?",
      options: ["Det er riktig — en skjev $\\chi^2$-pivot gir asymmetriske grenser", "Det er en regnefeil — grensene må gjøres symmetriske", "Det betyr at utvalget er for lite til å bruke intervallet", "Det betyr at man burde brukt Wald-intervallet i stedet"],
      explanation: "Asymmetri er et trekk ved pivotalen, ikke en feil (feil 3). Å «rette opp» til symmetri ødelegger dekningen. Wald er bare et alternativ, ikke det korrekte.",
    },
    {
      question: "Hva er det aller første steget i ML-utledningen etter at likelihooden er satt opp som et produkt?",
      options: ["Ta logaritmen for å gjøre produktet til en sum", "Derivere produktet direkte med produktregelen", "Sette likelihooden lik 1 og løse for parameteren", "Sette inn observasjonene og regne ut en tallverdi"],
      explanation: "Logaritmen gjør produktet til en sum og bevarer maksimum, så derivasjonen blir håndterbar. Å derivere produktet direkte er feil 8.",
    },
    {
      question: "Hvorfor må man bruke `ddof=1` når man regner bootstrap-standardfeilen i numpy?",
      options: ["For å få forventningsrett empirisk varians (deler på $n-1$)", "For å kunne trekke flere bootstrap-utvalg enn observasjoner", "For å gjøre koden raskere ved store $B$", "For å sikre at trekningen skjer med tilbakelegging"],
      explanation: "`ddof=1` gir divisjon på $n-1$, den forventningsrette variansestimatoren. Å glemme det er feil 11 og et brudd på sensorkrav 10.",
    },
    {
      question: "Hvilket av disse må du utlede aktivt, siden det ikke ligger brukbart i formelsamlingen?",
      options: ["Maximum likelihood-estimatoren og pivotalen", "Forventning og varians i fordelingskatalogen", "Kvantiltabellene for $z_\\alpha$ og $\\chi^2$", "Gammafunksjonens standardegenskaper"],
      explanation: "Formelsamlingen har fordelinger, momenter og kvantiler. ML, pivotaler, transformasjoner og bootstrap må utledes aktivt — det er dette eksamen måler.",
    },
    {
      question: "Hvordan finner du medianen $m$ i en kontinuerlig fordeling?",
      options: ["Løse $F(m)=\\tfrac12$ i fordelingsfunksjonen", "Løse $f(m)=\\tfrac12$ i tettheten", "Regne ut forventningen $E(X)$", "Derivere fordelingsfunksjonen i punktet $m$"],
      explanation: "Medianen er der den kumulative sannsynligheten er $\\tfrac12$, altså $F(m)=\\tfrac12$ — ikke der tettheten er $\\tfrac12$ (feil 12).",
    },
    {
      question: "Du har 240 minutter på fire oppgaver. Hvilken bør få mest tid?",
      options: ["Estimerings-kjeden (ML, pivot, eksakt KI) — den tyngste", "Bayes-åpningen, som gir de tryggeste poengene", "Simuleringsoppgaven, fordi koden tar lang tid", "Alle bør få nøyaktig like mye tid uansett innhold"],
      explanation: "Estimerings-kjeden er tyngst og bærer flest poeng; den fortjener mest tid. Ta likevel de sikre åpningspoengene først for å komme i gang.",
    },
    {
      question: "Hvilket tema skal du IKKE bruke tid på til STK1100-eksamen?",
      options: ["Hypotesetesting med nullhypotese og p-verdi", "Eksakt pivotal-konfidensintervall via $\\chi^2$", "Transformasjon av variable med Jacobi-determinant", "Simulering og bootstrap for standardfeil"],
      explanation: "Hypotesetesting, kombinatorikk og ordningsvariable er 0/10 i arkivet — de ligger i STK1110. Inferens-kjeden ender ved konfidensintervallet.",
    },
    {
      question: "Hva er lett å glemme i Jacobi-metoden for en bivariat transformasjon?",
      options: ["Å ta absoluttverdien av Jacobi-determinanten", "Å multiplisere de to marginaltetthetene", "Å normere tettheten før transformasjonen", "Å bruke logaritmen på simultantettheten"],
      explanation: "Tettheten skaleres med $|J|$, absoluttverdien av determinanten. Å droppe absoluttverdien (eller hele $|J|$) er feil 10.",
    },
    {
      question: "En estimator $\\hat\\theta$ er forventningsrett, men du trenger $\\sqrt{\\hat\\theta}$. Hva gjelder?",
      options: ["$\\sqrt{\\hat\\theta}$ er skjev fordi $E[\\sqrt V]\\ne\\sqrt{E[V]}$", "$\\sqrt{\\hat\\theta}$ er automatisk også forventningsrett", "$\\sqrt{\\hat\\theta}$ har alltid mindre varians enn $\\hat\\theta$", "$\\sqrt{\\hat\\theta}$ er udefinert for forventningsrette estimatorer"],
      explanation: "Kvadratrota er konkav, så $E[\\sqrt V]<\\sqrt{E[V]}$ (Jensen) — estimatoren blir skjev og må korrigeres med en $\\Gamma$-faktor (feil 7).",
    },
    {
      question: "Hva er det siste du bør gjøre på hver oppgave for å sikre alle poeng?",
      options: ["Gi et tallsvar med enhet og en setnings tolkning", "Skrive om hele utledningen på nytt for sikkerhets skyld", "Sjekke om oppgaven kunne løses med hypotesetest", "Regne ut fordelingens moment via to ulike metoder"],
      explanation: "Sensorkrav 11: avslutt med tallsvar, enhet og tolkning. Et intervall eller estimat uten tolkning taper de siste poengene.",
    },
  ],
  'stk1100-9-2': [
    {
      question: "I diagnoseoppgaven er bare cirka 80 % av de positive faktisk syke, tross en meget god test. Hva er hovedgrunnen?",
      options: ["Lav prevalens gjør at falske positive teller mye i nevneren", "Sensitiviteten på 96 % er for lav til pålitelige tester", "De to testrundene er avhengige av hverandre", "Spesifisiteten er beregnet på feil populasjon"],
      explanation: "Med bare 2 % syke gir 0,5 % falske positive et betydelig antall relativt til de sanne positive, så $P(\\text{syk}\\mid+)$ blir moderat selv med god test.",
    },
    {
      question: "For $f(x,y)=c(x+2y)$ på enhetskvadratet, hva er normeringskonstanten?",
      options: ["$c=\\tfrac23$, siden $\\iint(x+2y)=\\tfrac32$", "$c=1$, siden tettheten allerede integrerer til 1", "$c=\\tfrac32$, det inverse av integralet", "$c=\\tfrac13$, fra integralet over trekanten"],
      explanation: "$\\int_0^1\\int_0^1(x+2y)\\,dy\\,dx=\\tfrac32$, så $c=1/\\tfrac32=\\tfrac23$ for at tettheten skal integrere til 1.",
    },
    {
      question: "Hva blir $P(Y\\ge X)$ for tettheten $f(x,y)=\\tfrac23(x+2y)$ på enhetskvadratet?",
      options: ["$5/9$, integrert over trekanten der $y\\ge x$", "$1/2$, siden diagonalen deler kvadratet likt", "$4/9$, arealet under diagonalen $y=x$", "$2/3$, lik normeringskonstanten $c$"],
      explanation: "$P(Y\\ge X)=\\tfrac23\\int_0^1\\int_x^1(x+2y)\\,dy\\,dx=5/9$. Det er ikke $1/2$, fordi tettheten ikke er symmetrisk i $x$ og $y$.",
    },
    {
      question: "For Weibull-ML $\\hat\\beta=(\\tfrac1n\\sum X_i^\\alpha)^{1/\\alpha}$ med kjent $\\alpha$: hvorfor er estimatoren skjev?",
      options: ["Fordi $E[V^{1/\\alpha}]\\ne (E[V])^{1/\\alpha}$ — en $\\Gamma$-faktor mangler", "Fordi $\\sum X_i^\\alpha$ ikke er gammafordelt", "Fordi maximum likelihood-metoden i endelige utvalg systematisk gir skjeve estimatorer", "Fordi variansen til $\\hat\\beta$ er uendelig for små $n$"],
      explanation: "$\\hat\\beta$ er en potens av en gamma-størrelse; siden $E[V^{1/\\alpha}]\\ne(E[V])^{1/\\alpha}$, oppstår en $\\Gamma$-faktor $c\\ne1$ som må korrigeres bort.",
    },
    {
      question: "Hva kjennetegner parametrisk bootstrap for standardfeilen til $\\hat\\theta$?",
      options: ["Man trekker nye utvalg fra den tilpassede fordelingen med $\\hat\\theta$", "Man trekker nye utvalg med tilbakelegging direkte fra de observerte dataene", "Man deriverer likelihooden numerisk i estimatet", "Man løser pivotalligningen for $\\theta$ analytisk"],
      explanation: "Parametrisk bootstrap simulerer fra modellen med $\\hat\\theta$ innsatt. Å trekke med tilbakelegging fra dataene er den ikke-parametriske varianten.",
    },
  ],
  'stk1100-9-3': [
    {
      question: "Hva er den momentgenererende funksjonen til en Poisson-variabel med forventning $m$, og for hvilke $t$?",
      options: ["$M(t)=e^{m(e^t-1)}$ for alle $t$", "$M(t)=(1-mt)^{-1}$ for $t<1/m$", "$M(t)=e^{mt}$ for alle $t$", "$M(t)=e^{m(e^t-1)}$ kun for $t<0$"],
      explanation: "Summering av $e^{tk}e^{-m}m^k/k!$ gir $e^{m(e^t-1)}$, konvergent for alle $t$. Da er $E=M'(0)=m$ og $\\text{Var}=M''(0)-m^2=m$.",
    },
    {
      question: "Hvorfor foretrekkes det eksakte $\\chi^2$-intervallet framfor Wald for en eksponensialforventning når $n=10$?",
      options: ["Wald undervurderer dekningen fordi $\\bar X$ er skjev ved liten $n$", "Wald krever at variansen er kjent på forhånd", "Det eksakte intervallet er alltid smalere enn Wald", "Wald kan bare brukes for normalfordelte data"],
      explanation: "For liten $n$ er $\\bar X$ for skjev til CLT; Wald blir for smalt og dekker under 95 %. Det eksakte bygger på pivotens sanne fordeling.",
    },
    {
      question: "En dekningsstudie for eksponensial-KI med $n=10$ gir hvilke tall (nominelt 95 %)?",
      options: ["Eksakt cirka 95,8 %, Wald cirka 91,6 %", "Eksakt cirka 91,6 %, Wald cirka 95,8 %", "Begge cirka 95 %, ingen forskjell", "Eksakt cirka 99 %, Wald cirka 80 %"],
      explanation: "Det eksakte treffer nær nominelt nivå (~95,8 %), Wald undervurderer (~91,6 %). Ved $n=100$ blir begge nær 95 %.",
    },
    {
      question: "For $X,Y$ iid eksponensial(1) og $(U,V)=(X+Y,\\,X/(X+Y))$: hva er $|J|$ og simultantettheten?",
      options: ["$|J|=u$ og $f_{U,V}(u,v)=u\\,e^{-u}$ for $u>0,\\ 0<v<1$", "$|J|=1$ og $f_{U,V}(u,v)=e^{-u}$ for $u>0,\\ 0<v<1$", "$|J|=v$ og $f_{U,V}(u,v)=v\\,e^{-u}$ for $u>0,\\ 0<v<1$", "$|J|=u^2$ og $f_{U,V}(u,v)=u^2 e^{-u}$ for $u>0,\\ 0<v<1$"],
      explanation: "Med $X=UV,\\ Y=U(1-V)$ blir determinanten $-u$, så $|J|=u$, og $f_{U,V}=e^{-u}\\cdot u$. Den faktoriserer, så $U$ og $V$ er uavhengige.",
    },
    {
      question: "Med $(U,V)=(X+Y,X/(X+Y))$ for iid eksponensial(1), hva er $E(X\\mid U=u)$?",
      options: ["$u/2$, siden $X=UV$ med $V\\sim$ uniform$(0,1)$ uavhengig av $U$", "$u$, siden den betingede forventningen alltid er lik hele totalen $U$", "$u^2/12$, som er den betingede variansen", "$1$, den ubetingede forventningen $E(X)$"],
      explanation: "$V\\sim$ uniform$(0,1)$ er uavhengig av $U$, så $E(X\\mid U=u)=u\\,E(V)=u/2$. Den betingede variansen er $u^2/12$.",
    },
  ],
  'stk1100-9-4': [
    {
      question: "Et 95 %-intervall for en andel $p$ bygger på normaltilnærming. Når er den forsvarlig?",
      options: ["Når både $m\\hat p$ og $m(1-\\hat p)$ er minst rundt 10", "Når $m$ er et partall større enn 100", "Når andelen $\\hat p$ er nøyaktig $0{,}5$", "Når variansen $p(1-p)$ er kjent på forhånd i populasjonen"],
      explanation: "Tommelfingerregelen $m\\hat p\\ge 10$ og $m(1-\\hat p)\\ge 10$ sikrer god CLT-tilnærming. Ved svært få suksesser trengs et eksakt intervall.",
    },
    {
      question: "For en lognormalfordeling der $\\ln X\\sim N(\\mu,\\sigma^2)$, hva er medianen?",
      options: ["$e^\\mu$, fordi $F(m)=\\tfrac12$ gir $\\ln m=\\mu$", "$\\mu$, forventningen på log-skala", "$e^{\\mu+\\sigma^2/2}$, som er forventningen til $X$", "$e^{\\sigma}$, bestemt av spredningen alene"],
      explanation: "Medianen løser $F(m)=\\tfrac12$; siden $\\ln X$ har median $\\mu$, er $\\ln m=\\mu$ og $m=e^\\mu$. Forventningen $e^{\\mu+\\sigma^2/2}$ er noe annet.",
    },
    {
      question: "I dekningsstudien: hvilket kvantil hører til det eksakte intervallets NEDRE grense?",
      options: ["Det øvre kvantilet $\\chi^2_{2n,0{,}025}$, fordi pivoten inverteres", "Det nedre kvantilet $\\chi^2_{2n,0{,}975}$, samme side som grensen", "Standardnormalens $z_{0{,}025}$, som i Wald", "Medianen $\\chi^2_{2n,0{,}5}$ i begge grenser"],
      explanation: "Nedre grense $2\\sum x_i/\\chi^2_{2n,0{,}025}$ bruker det øvre kvantilet — endepunktene bytter plass når ulikheten inverteres (feil 13).",
    },
    {
      question: "KI-et for konstantleddet $\\beta_0$ er $[-4{,}14,\\ 4{,}08]$ og inneholder 0. Hva tilsier det?",
      options: ["At konstantleddet kan droppes — modellen $Y=\\gamma x$ er forsvarlig", "At hele regresjonsmodellen er ugyldig fordi $\\beta_0$-estimatet ble negativt", "At helningen $\\beta_1$ også må være null", "At variansen $\\sigma^2$ er feil estimert"],
      explanation: "Når KI-et for $\\beta_0$ dekker 0, er konstantleddet ikke signifikant, og den enklere modellen uten konstantledd kan velges.",
    },
    {
      question: "Hvorfor kan modellen uten konstantledd foretrekkes selv om den fulle modellen er riktig?",
      options: ["Den gir lavere varians for helningen mot en mulig liten skjevhet", "Den gir alltid et større konstantledd enn nødvendig", "Den fjerner helt behovet for å kjenne feilvariansen $\\sigma^2$ på forhånd", "Den gjør at $x$-verdiene kan behandles som stokastiske"],
      explanation: "$\\text{Var}(\\hat\\gamma)=\\sigma^2/\\sum x_i^2 < \\sigma^2/S_{xx}=\\text{Var}(\\hat\\beta_1)$. Bias–varians: lavere varians mot mulig skjevhet — velg enklere når skjevheten er liten.",
    },
  ],
};

export default quizData_stk1100;
