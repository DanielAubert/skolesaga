import type { QuizQuestion } from './quiz-data';

const quizData_stk1110: Record<string, QuizQuestion[]> = {
  'stk1110-0-1': [
    {
      question: "Hvordan er et typisk STK1110-eksamenssett bygd opp?",
      options: ["To–tre store oppgaver, hver en kjede av deloppgaver", "Én lang oppgave med tjue korte, uavhengige delspørsmål", "En flervalgsdel fulgt av to store, adskilte regneoppgaver", "Fire helt uavhengige kortsvarsoppgaver uten sammenheng"],
      explanation: "Nesten hvert sett har 2–3 store oppgaver, hver en kjede av 4–7 punktdelte deloppgaver (a, b, c, …) i samme kontekst — ingen flervalgs- eller kortsvarsdel.",
    },
    {
      question: "Hvilke tre likevektede søyler bærer STK1110-eksamen?",
      options: ["Estimering, hypotesetesting med KI, og lineær regresjon", "Kombinatorikk, simultantetthet, og momentgenererende funksjoner", "Sannsynlighetsregning, Python-koding, og deskriptiv statistikk", "Bayes, ANOVA, og ikke-parametriske metoder utelukkende"],
      explanation: "De tre søylene — estimeringsteori, hypotesetesting+KI, og lineær regresjon — opptrer hver i rundt 90 % av settene og er likevektede.",
    },
    {
      question: "Hvilke hjelpemidler er tillatt på eksamen?",
      options: ["Godkjent kalkulator og formelsamlingen for STK1110", "Alle notater, læreboka og fri tilgang til internett", "Kun blyant og papir, ingen kalkulator tillatt", "En datamaskin med R og Python installert for koding"],
      explanation: "Eneste hjelpemidler er godkjent kalkulator og formelsamlingen for STK1110; derfor tester eksamen valg og utledning, ikke pugging.",
    },
    {
      question: "Du står fast på deltrinn (b) i en oppgave med punktene (a)–(f). Hva bør du gjøre?",
      options: ["Gå videre og bruk et oppgitt mellomresultat i (c)–(f)", "Hoppe over hele oppgaven siden (b) trengs for alt videre", "Levere blankt på (c)–(f) fordi de alle bygger på (b)", "Bruke resten av eksamenstiden på kun å fullføre (b)"],
      explanation: "Deltrinnene poengsettes hver for seg; senere punkter kan løses med et oppgitt eller antatt mellomresultat, så en blank (b) sperrer ikke (c)–(f).",
    },
    {
      question: "Hva testes så godt som aldri på STK1110-eksamen?",
      options: ["Ren sannsynlighetsregning (MGF, Jacobi) og Python-koding", "Konfidensintervall og hypotesetesting av forventning", "Enkel og multippel lineær regresjon med R-utskrift", "Maximum likelihood og forventningsretthet av estimatorer"],
      explanation: "Simultantetthet/MGF/Jacobi/kombinatorikk hører til STK1100 (≈0/22), og STK1110 tolker R-utskrift i stedet for å skrive kode (0/22).",
    },
    {
      question: "Hvilken bokstavsjanger dekker hele hypotesetest-pakken?",
      options: ["Sjanger E", "Sjanger A", "Sjanger H", "Sjanger D"],
      explanation: "Sjanger E er hypotesetesten med fullt rituale; A er moment/ML, D er konfidensintervall, og H er enkel regresjon.",
    },
    {
      question: "Hva må en ML-utledning alltid inneholde for full uttelling?",
      options: ["En bekreftelse av at punktet faktisk er et maksimum", "En numerisk simulering av estimatoren i R eller Python", "En tabell over alle mulige verdier parameteren kan ta", "En sammenligning med minst tre helt andre fordelinger"],
      explanation: "Sensor krever hele kjeden L→ℓ→score→løs OG bekreftelsen av maksimum ($\\ell''(\\hat\\theta)<0$) — sistnevnte glemmes ofte.",
    },
    {
      question: "Hva brukes til å sammenligne regresjonsmodeller med ulikt antall variabler?",
      options: ["Justert $R^2$", "Vanlig (Multiple) $R^2$", "Residual standard error alene", "Summen av alle t-verdiene"],
      explanation: "Vanlig $R^2$ øker alltid når en variabel legges til; justert $R^2$ straffer ekstra variabler og brukes derfor til modellvalg.",
    },
    {
      question: "Hva er den korrekte verbale definisjonen av en P-verdi?",
      options: ["Sannsynligheten under $H_0$ for et minst like ekstremt utfall", "Sannsynligheten for at nullhypotesen $H_0$ faktisk er sann", "Sannsynligheten for at den alternative hypotesen er sann", "Andelen av observasjonene som støtter den alternative hypotesen"],
      explanation: "P-verdien er sannsynligheten under $H_0$ for et minst like ekstremt utfall som det observerte — ikke sannsynligheten for at $H_0$ er sann.",
    },
    {
      question: "Hvordan bør du forholde deg til karakteren C i STK1110?",
      options: ["C er en god og vanlig karakter som viser solid kunnskap", "C betyr at besvarelsen så vidt bestod, med store mangler", "C er en strykkarakter man må ta eksamen på nytt for", "C oppnås bare ved å løse alle de A-differensierende delene"],
      explanation: "C er en god og vanlig karakter — den betyr at du behersker kjernestoffet solid. Du trenger ikke være feilfri for å gjøre det bra.",
    },
  ],
  'stk1110-0-2': [
    {
      question: "Hva er nøkkelleddet i $\\text{Var}(X+Y)$ når $X$ og $Y$ er avhengige?",
      options: ["Kovariansleddet $2\\text{Cov}(X,Y)$", "Produktet $E(X)E(Y)$ av forventningene", "Differansen $\\text{Var}(X)-\\text{Var}(Y)$", "Kvadratet av summen $(X+Y)^2$"],
      explanation: "$\\text{Var}(X+Y)=\\text{Var}(X)+\\text{Var}(Y)+2\\text{Cov}(X,Y)$; kovariansleddet er null kun når variablene er ukorrelerte.",
    },
    {
      question: "Hva er $\\text{Var}(\\bar X)$ for $n$ uavhengige, identisk fordelte variable med varians $\\sigma^2$?",
      options: ["$\\sigma^2/n$", "$\\sigma^2$", "$n\\sigma^2$", "$\\sigma/\\sqrt n$"],
      explanation: "Variansen til gjennomsnittet er $\\sigma^2/n$ — den krymper med $n$, som er grunnlaget for standardfeilen $\\sigma/\\sqrt n$.",
    },
    {
      question: "Hvilken gammafordeling er $\\chi^2_n$ lik?",
      options: ["$\\text{gamma}(\\alpha=n/2,\\ \\beta=2)$", "$\\text{gamma}(\\alpha=n,\\ \\beta=1)$", "$\\text{gamma}(\\alpha=2,\\ \\beta=n/2)$", "$\\text{gamma}(\\alpha=n/2,\\ \\beta=1/2)$"],
      explanation: "$\\chi^2_n=\\text{gamma}(n/2,2)$; da blir $E=\\alpha\\beta=n$ og $\\text{Var}=\\alpha\\beta^2=2n$, akkurat kjikvadratens verdier.",
    },
    {
      question: "Hva er forventningen til en $\\text{gamma}(\\alpha,\\beta)$-fordeling?",
      options: ["$\\alpha\\beta$", "$\\alpha/\\beta$", "$\\alpha\\beta^2$", "$\\alpha+\\beta$"],
      explanation: "For gamma er $E=\\alpha\\beta$ og $\\text{Var}=\\alpha\\beta^2$; begge står i formelsamlingen.",
    },
    {
      question: "Hvorfor tar vi logaritmen av likelihoodfunksjonen før vi deriverer?",
      options: ["Fordi $\\log$ gjør produktet om til en enklere sum", "Fordi $\\log$ flytter maksimumet til et annet, enklere punkt", "Fordi likelihooden ellers alltid blir negativ og ubrukelig", "Fordi logaritmen fjerner alle ukjente parametrene fra uttrykket"],
      explanation: "$\\log$ er strengt voksende (maksimum ligger samme sted) og gjør $\\prod$ om til $\\sum$, som er langt enklere å derivere.",
    },
    {
      question: "Hva er scorefunksjonen $s(\\theta)$?",
      options: ["Den deriverte av log-likelihood, $\\ell'(\\theta)$", "Selve likelihoodfunksjonen $L(\\theta)$", "Den andrederiverte $\\ell''(\\theta)$ av log-likelihood", "Logaritmen $\\log L(\\theta)$ av likelihooden"],
      explanation: "$s(\\theta)=\\ell'(\\theta)$; ML-estimatoren løser $s(\\theta)=0$, og selve løsningen gjøres i kap. 1.2.",
    },
    {
      question: "Hvilken faktor må alltid være med i transformasjonsformelen for tettheter?",
      options: ["Jacobi-faktoren $|dx/dv|$", "Forventningen $E(X)$ til variabelen", "Normeringskonstanten $1/\\sqrt{2\\pi}$", "Standardavviket $\\sigma$ til fordelingen"],
      explanation: "$g(v)=f(x(v))\\,|dx/dv|$; absoluttverdien av den deriverte (Jacobi) skal alltid være med, ellers blir tettheten feil.",
    },
    {
      question: "Hvordan behandler STK1110 STK1100-apparatet som simultantetthet og MGF?",
      options: ["Det forutsettes kjent og re-testes nesten aldri", "Det testes tungt i minst én egen storoppgave hvert år", "Det er fullstendig utenfor pensum og nevnes aldri", "Det erstattes helt av Python-simuleringer i besvarelsen"],
      explanation: "Simultantetthet, MGF, Jacobi og kombinatorikk hører til STK1100 (≈0/22 som egen oppgave); STK1110 forutsetter dem uten å gjenta dem.",
    },
    {
      question: "Testes ren sannsynlighetsregning som selvstendig oppgave på STK1110?",
      options: ["Nei, det forekommer i praksis aldri (≈0 av 22 sett)", "Ja, i om lag halvparten av alle eksamenssettene", "Ja, det er en av de tre bærende søylene i emnet", "Ja, nesten alltid plassert som den siste storoppgaven"],
      explanation: "Ren sannsynlighetsregning er STK1100s domene og testes ≈0/22 i STK1110, som i stedet er et inferensemne.",
    },
    {
      question: "Hva er forventning og varians for en $\\text{Poisson}(\\lambda)$-fordeling?",
      options: ["Begge er $\\lambda$", "$E=\\lambda$ og $\\text{Var}=\\lambda^2$", "$E=\\lambda$ og $\\text{Var}=\\sqrt\\lambda$", "$E=1/\\lambda$ og $\\text{Var}=1/\\lambda^2$"],
      explanation: "Poissonfordelingen har den karakteristiske egenskapen $E(X)=\\text{Var}(X)=\\lambda$.",
    },
    {
      question: "Hvilket argument er variansen i notasjonen $N(\\mu,\\sigma^2)$?",
      options: ["Det andre argumentet, $\\sigma^2$", "Det første argumentet, $\\mu$", "Ingen — begge er standardavvik", "Det andre argumentet, men tolket som $\\sigma$"],
      explanation: "I settenes notasjon er andre argument alltid variansen $\\sigma^2$, aldri standardavviket.",
    },
    {
      question: "Hva setter momentmetoden det teoretiske momentet $E(X)$ lik?",
      options: ["Det empiriske gjennomsnittet $\\bar X$", "Den empiriske variansen $S^2$", "Medianen i utvalget", "Maksimumsverdien blant observasjonene"],
      explanation: "Momentmetoden avstemmer $E(X)=\\bar X$ og løser for parameteren; for Poisson gir det $\\hat\\lambda=\\bar X$.",
    },
    {
      question: "Hva er forventningen til en eksponensialfordeling med rate $\\lambda$?",
      options: ["$1/\\lambda$", "$\\lambda$", "$\\lambda^2$", "$1/\\lambda^2$"],
      explanation: "Eksponensialfordelingen med rate $\\lambda$ har $E(X)=1/\\lambda$ og $\\text{Var}(X)=1/\\lambda^2$.",
    },
    {
      question: "Hva er den viktigste felles broen mellom STK1100 og STK1110?",
      options: ["ML-kjeden $L\\to\\ell\\to s(\\theta)\\to$ løs", "Kombinatorikk og telleprinsipper", "Momentgenererende funksjoner og Jacobi", "Bayes-regelen for betingede sannsynligheter"],
      explanation: "ML-kjeden er den felles kjernen; STK1110 forlenger den nedover mot testing og utover mot regresjon.",
    },
    {
      question: "Når faller kovariansleddet $2ab\\,\\text{Cov}(X,Y)$ bort i variansregelen?",
      options: ["Når $X$ og $Y$ er uavhengige (eller ukorrelerte)", "Når $X$ og $Y$ har nøyaktig samme forventning", "Når konstantene $a$ og $b$ begge er positive", "Alltid — kovariansleddet er kun en grov tilnærming"],
      explanation: "Uavhengige (eller bare ukorrelerte) variable har $\\text{Cov}(X,Y)=0$, så leddet forsvinner; ellers må det med.",
    },
  ],
  'stk1110-1-1': [
    {
      question: "Hva skiller en *estimator* fra et *estimat*?",
      options: ["Estimatoren er regelen $\\hat\\Theta$ (tilfeldig), estimatet er tallet den gir", "Estimatoren er tallet, mens estimatet er regelen som produserer det", "Estimatoren er alltid forventningsrett, mens estimatet alltid er systematisk skjevt", "Estimatoren brukes i store utvalg, mens estimatet brukes i små og usikre utvalg"],
      explanation: "En estimator er en funksjon av de tilfeldige $X_i$ og dermed selv en tilfeldig variabel ($\\hat\\Theta$, stor bokstav); estimatet ($\\hat\\theta$, liten bokstav) er det faste tallet den gir på ett datasett.",
    },
    {
      question: "Hvorfor er uttrykket «variansen til estimatet $\\bar x = 4{,}9$» en kategorifeil?",
      options: ["Et estimat er ett fast tall uten varians; kun estimatoren $\\bar X$ har varians", "Variansen kan bare regnes ut når verdien er større enn tallet 1", "Estimatet har alltid varians nøyaktig lik null per definisjon", "Variansen finnes bare for estimater som ligger over gjennomsnittet"],
      explanation: "$\\bar x = 4{,}9$ er ett observert tall, ikke tilfeldig, så det har ingen varians. Det er estimatoren $\\bar X$ (stor bokstav) som er en tilfeldig variabel med varians. Å blande dem straffes av sensor.",
    },
    {
      question: "Når er en estimator $\\hat\\Theta$ forventningsrett for $\\theta$?",
      options: ["Når $E(\\hat\\Theta)=\\theta$ for alle mulige verdier av $\\theta$", "Når $\\text{Var}(\\hat\\Theta)=\\theta$ for alle mulige verdier av $\\theta$", "Når $\\hat\\Theta$ gir samme tall uansett hvilket utvalg vi trekker", "Når $\\hat\\Theta$ nærmer seg $\\theta$ etter hvert som utvalget vokser"],
      explanation: "Forventningsretthet betyr at forventningen treffer parameteren eksakt: $E(\\hat\\Theta)=\\theta$. Svaret om at $\\hat\\Theta$ nærmer seg $\\theta$ etter hvert som utvalget vokser, beskriver konsistens, ikke forventningsretthet.",
    },
    {
      question: "Hvordan defineres skjevheten $b(\\hat\\Theta)$ til en estimator?",
      options: ["$b(\\hat\\Theta)=E(\\hat\\Theta)-\\theta$, det systematiske avviket fra parameteren", "$b(\\hat\\Theta)=\\theta-\\text{Var}(\\hat\\Theta)$, avviket målt mot variansen", "$b(\\hat\\Theta)=E(\\hat\\Theta)-\\bar X$, avviket fra utvalgsgjennomsnittet", "$b(\\hat\\Theta)=\\text{Var}(\\hat\\Theta)-\\theta$, spredningen minus parameteren"],
      explanation: "Skjevheten er $b(\\hat\\Theta)=E(\\hat\\Theta)-\\theta$. Er den 0, er estimatoren forventningsrett; positiv betyr systematisk for høyt, negativ for lavt.",
    },
    {
      question: "En vektet sum $\\sum w_i X_i$ av uavhengige $X_i$ med $E(X_i)=\\mu$ er forventningsrett for $\\mu$ nettopp når:",
      options: ["vektene summerer til 1, altså $\\sum w_i = 1$", "alle vektene er like store, altså $w_i = 1/n$", "vektene summerer til 0, altså $\\sum w_i = 0$", "kvadratene av vektene summerer til 1, altså $\\sum w_i^2 = 1$"],
      explanation: "$E(\\sum w_i X_i)=\\mu\\sum w_i$, som er lik $\\mu$ nettopp når $\\sum w_i=1$. Like vekter er ett spesialtilfelle, men ikke nødvendig for forventningsretthet.",
    },
    {
      question: "Hvorfor har utvalgsvariansen $S^2$ divisor $n-1$ og ikke $n$?",
      options: ["Avvikene måles fra $\\bar X$, ikke fra $\\mu$, så divisor $n-1$ gjør $S^2$ forventningsrett", "Divisor $n-1$ gjør regnestykket enklere fordi leddet med $\\bar X$ da faller helt bort", "Divisor $n-1$ gir alltid mindre varians enn divisor $n$ ville gjort på de samme dataene", "Divisor $n-1$ kreves fordi $S^2$ ellers kunne blitt et negativt tall for små utvalg"],
      explanation: "Fordi avvikssummen $\\sum(X_i-\\bar X)^2$ har $n-1$ frihetsgrader (avvik fra $\\bar X$, ikke $\\mu$), gir divisor $n-1$ nettopp $E(S^2)=\\sigma^2$ — altså forventningsrett.",
    },
    {
      question: "ML-variansestimatoren $\\hat\\sigma^2=\\frac1n\\sum(X_i-\\bar X)^2$ har $E(\\hat\\sigma^2)=\\frac{n-1}{n}\\sigma^2$. Hva blir skjevheten?",
      options: ["$b=-\\sigma^2/n$, altså bommer den systematisk litt for lavt", "$b=+\\sigma^2/n$, altså bommer den systematisk litt for høyt", "$b=0$, altså er den forventningsrett akkurat som $S^2$", "$b=-\\sigma^2/(n-1)$, altså bommer den kraftig for lavt"],
      explanation: "$b=\\frac{n-1}{n}\\sigma^2-\\sigma^2=-\\frac{\\sigma^2}{n}<0$, så ML-estimatoren undervurderer $\\sigma^2$; bommen krymper som $1/n$.",
    },
    {
      question: "En estimator har $E(\\hat\\theta)=\\frac{n}{n+2}\\theta$. Hvilken konstant $c$ gjør $c\\hat\\theta$ forventningsrett?",
      options: ["$c=\\dfrac{n+2}{n}$, slik at $c\\cdot E(\\hat\\theta)=\\theta$", "$c=\\dfrac{n}{n+2}$, slik at skjevheten dobles bort", "$c=\\dfrac{n+2}{n^2}$, slik at variansen minimeres", "$c=\\dfrac{2}{n+2}$, slik at skjevheten trekkes fra"],
      explanation: "Vi vil ha $c\\cdot\\frac{n}{n+2}\\theta=\\theta$, som gir $c=\\frac{n+2}{n}$. Å korrigere en skjev estimator er å gange med den inverse konstanten foran $\\theta$.",
    },
    {
      question: "Hva er variansen til utvalgsgjennomsnittet $\\bar X$ når $X_i$ er uavhengige med varians $\\sigma^2$?",
      options: ["$\\text{Var}(\\bar X)=\\sigma^2/n$, som krymper når utvalget vokser", "$\\text{Var}(\\bar X)=\\sigma^2$, uavhengig av utvalgsstørrelsen", "$\\text{Var}(\\bar X)=\\sigma^2/\\sqrt{n}$, som krymper sakte i $n$", "$\\text{Var}(\\bar X)=n\\sigma^2$, som vokser når utvalget vokser"],
      explanation: "$\\text{Var}(\\bar X)=\\frac{1}{n^2}\\sum\\text{Var}(X_i)=\\frac{n\\sigma^2}{n^2}=\\frac{\\sigma^2}{n}$. Det er $\\sigma/\\sqrt n$ som er standardfeilen, ikke variansen.",
    },
    {
      question: "Blant to *forventningsrette* estimatorer for samme parameter kalles den beste den mest effisiente. Hva kjennetegner den?",
      options: ["Den har minst varians av de to", "Den har størst varians av de to", "Den har størst skjevhet av de to", "Den har flest observasjoner utelatt"],
      explanation: "Når begge er forventningsrette, er den med minst varians den mest effisiente — den utnytter dataene best og gir mest presise anslag.",
    },
    {
      question: "$\\bar X$ og $\\hat\\mu_2=\\frac12(X_1+X_2)$ er begge forventningsrette for $\\mu$ ($n\\ge3$). Hvilken foretrekkes, og hvorfor?",
      options: ["$\\bar X$, fordi $\\sigma^2/n<\\sigma^2/2$ — den har minst varians", "$\\hat\\mu_2$, fordi den bruker færre observasjoner og er enklere", "$\\hat\\mu_2$, fordi $\\sigma^2/2<\\sigma^2/n$ for enhver $n$", "Det er likegyldig, fordi begge er forventningsrette"],
      explanation: "$\\text{Var}(\\bar X)=\\sigma^2/n$ og $\\text{Var}(\\hat\\mu_2)=\\sigma^2/2$. For $n>2$ er $\\bar X$ mest effisient — den bruker all informasjonen, mens $\\hat\\mu_2$ kaster bort $n-2$ observasjoner.",
    },
    {
      question: "Når skal to estimatorer sammenlignes på MSE i stedet for på varians alene?",
      options: ["Når minst én av dem er skjev", "Når begge er forventningsrette", "Når begge har nøyaktig samme varians", "Når utvalget er større enn 30 observasjoner"],
      explanation: "Varians-sammenligning er bare gyldig når begge er forventningsrette. Er minst én skjev, må du bruke MSE $=\\text{Var}+b^2$, som veier både spredning og systematisk bom.",
    },
    {
      question: "Hvordan dekomponeres middels kvadratisk feil (MSE)?",
      options: ["$\\text{MSE}=\\text{Var}(\\hat\\Theta)+b(\\hat\\Theta)^2$ — varians pluss skjevhet i annen", "$\\text{MSE}=\\text{Var}(\\hat\\Theta)+b(\\hat\\Theta)$ — varians pluss skjevhet", "$\\text{MSE}=\\text{Var}(\\hat\\Theta)-b(\\hat\\Theta)^2$ — varians minus skjevhet i annen", "$\\text{MSE}=\\text{Var}(\\hat\\Theta)\\cdot b(\\hat\\Theta)^2$ — varians gange skjevhet i annen"],
      explanation: "$\\text{MSE}(\\hat\\Theta)=\\text{Var}(\\hat\\Theta)+b(\\hat\\Theta)^2$. Skjevheten inngår i *annen* — ikke som ledd uten kvadrat. For en forventningsrett estimator ($b=0$) er MSE lik variansen.",
    },
    {
      question: "$\\hat\\theta_A$ er forventningsrett med varians 9; $\\hat\\theta_B$ har skjevhet 2 og varians 4. Hvem har minst MSE?",
      options: ["$\\hat\\theta_B$: $\\text{MSE}=4+2^2=8<9=\\text{MSE}(\\hat\\theta_A)$", "$\\hat\\theta_A$: $\\text{MSE}=9<4=\\text{MSE}(\\hat\\theta_B)$, siden $B$ er skjev", "$\\hat\\theta_B$: $\\text{MSE}=4$, fordi skjevheten ikke teller med", "De er like: begge har $\\text{MSE}$ nøyaktig lik $8$"],
      explanation: "$\\text{MSE}(\\hat\\theta_A)=9+0=9$ og $\\text{MSE}(\\hat\\theta_B)=4+4=8$. Den litt skjeve $\\hat\\theta_B$ har minst samlet feil — varians alene ($4$ mot $9$) ville villedet.",
    },
    {
      question: "Hvorfor er det feil å velge den konstante estimatoren $\\hat\\theta\\equiv 0$ selv om den har varians 0?",
      options: ["Den er sterkt skjev, så MSE $=b^2$ blir stor selv om variansen er 0", "Den har egentlig uendelig stor varians, ikke 0", "Konstante estimatorer er alltid forventningsrette og dermed helt uinteressante i praksis", "Variansen er 0 bare når parameteren $\\theta$ helt tilfeldigvis er nøyaktig lik 0"],
      explanation: "En estimator som alltid gir 0 spriker ikke (varians 0), men bommer systematisk med $b=-\\theta$. MSE $=0+\\theta^2$ blir stor — nettopp derfor kreves MSE, ikke varians, når skjevheten er ulik.",
    },
    {
      question: "Hva betyr at estimatorfølgen $\\hat\\Theta_n$ konvergerer i sannsynlighet mot $\\theta$?",
      options: ["$P(|\\hat\\Theta_n-\\theta|\\ge\\varepsilon)\\to 0$ når $n\\to\\infty$, for enhver $\\varepsilon>0$", "$E(\\hat\\Theta_n)=\\theta$ for enhver fast utvalgsstørrelse $n$", "$\\hat\\Theta_n$ gir nøyaktig $\\theta$ når $n$ er større enn en grense", "Variansen $\\text{Var}(\\hat\\Theta_n)$ er konstant lik $\\theta$ uansett hvor stort utvalget blir"],
      explanation: "Konvergens i sannsynlighet betyr at sannsynligheten for å bomme mer enn en vilkårlig liten $\\varepsilon$ dør ut når utvalget vokser. Kravet $E(\\hat\\Theta_n)=\\theta$ for hver fast $n$ er forventningsretthet, ikke konvergens.",
    },
    {
      question: "Hva sier Tsjebysjeffs ulikhet for en variabel $Y$ med endelig varians?",
      options: ["$P(|Y-E(Y)|\\ge\\varepsilon)\\le \\text{Var}(Y)/\\varepsilon^2$", "$P(|Y-E(Y)|\\ge\\varepsilon)\\ge \\text{Var}(Y)/\\varepsilon^2$", "$P(|Y-E(Y)|\\ge\\varepsilon)= \\text{Var}(Y)\\cdot\\varepsilon^2$", "$P(|Y-E(Y)|\\ge\\varepsilon)\\le \\varepsilon^2/\\text{Var}(Y)$"],
      explanation: "Tsjebysjeff binder bomsannsynligheten oppover av $\\text{Var}(Y)/\\varepsilon^2$. Jo mindre varians, desto mindre sjanse for stort avvik — broen fra «varians mot 0» til konsistens.",
    },
    {
      question: "Hva er den vanlige eksamensbegrunnelsen for at en estimator $\\hat\\Theta_n$ er konsistent?",
      options: ["$\\text{MSE}(\\hat\\Theta_n)\\to 0$, så Tsjebysjeff gir $\\hat\\Theta_n\\xrightarrow{P}\\theta$", "$\\text{MSE}(\\hat\\Theta_n)$ er konstant, så avviket forsvinner helt av seg selv når $n$ vokser", "$E(\\hat\\Theta_n)=\\theta$ alene, uten noe krav til variansen", "$\\text{Var}(\\hat\\Theta_n)$ vokser, slik at fordelingen brer seg ut"],
      explanation: "Er $\\text{MSE}=\\text{Var}+b^2\\to 0$, gir Tsjebysjeff $P(|\\hat\\Theta_n-\\theta|\\ge\\varepsilon)\\le\\text{MSE}/\\varepsilon^2\\to 0$. Forventningsretthet alene holder ikke — variansen må også gå mot 0.",
    },
    {
      question: "Er en forventningsrett estimator automatisk konsistent?",
      options: ["Nei — variansen må også gå mot 0 når $n\\to\\infty$", "Ja — forventningsretthet medfører alltid konsistens", "Ja — så lenge skjevheten er nøyaktig lik 0", "Nei — en forventningsrett estimator er aldri konsistent"],
      explanation: "Forventningsretthet gir riktig senter, men sier ingenting om spredningen. Estimatoren $\\hat\\mu=X_1$ er forventningsrett, men variansen $\\sigma^2$ krymper ikke — den er ikke konsistent. Kravet er $\\text{Var}\\to 0$.",
    },
    {
      question: "Hva betyr at en estimator er *asymptotisk* forventningsrett?",
      options: ["Skjevheten går mot 0 når $n\\to\\infty$: $b(\\hat\\Theta_n)\\to 0$", "Skjevheten er nøyaktig 0 for enhver fast $n$", "Variansen går mot 0 når $n\\to\\infty$, uansett skjevhet", "Estimatoren treffer $\\theta$ eksakt for store nok $n$"],
      explanation: "Asymptotisk forventningsrett betyr at skjevheten forsvinner i grensen. Det er et svakere krav enn forventningsrett, men nok (sammen med $\\text{Var}\\to 0$) for konsistens.",
    },
    {
      question: "To uavhengige, forventningsrette estimatorer har varianser $\\sigma_1^2$ og $\\sigma_2^2$. Hvilken vekt $w$ i $w\\hat\\theta_1+(1-w)\\hat\\theta_2$ gir minst varians?",
      options: ["$w=\\dfrac{\\sigma_2^2}{\\sigma_1^2+\\sigma_2^2}$ — omvendt proporsjonalt med variansene", "$w=\\dfrac{\\sigma_1^2}{\\sigma_1^2+\\sigma_2^2}$ — proporsjonalt med egen varians", "$w=\\dfrac12$ — alltid lik vekting av de to", "$w=\\dfrac{\\sigma_1^2}{\\sigma_2^2}$ — forholdet mellom variansene"],
      explanation: "Invers-varians-vekting: den mest presise estimatoren (minst varians) får størst vekt, $w=\\sigma_2^2/(\\sigma_1^2+\\sigma_2^2)$. Kombinasjonen slår alltid begge de opprinnelige.",
    },
    {
      question: "Hva er standardfeilen $se(\\hat\\Theta)$ til en estimator?",
      options: ["$se(\\hat\\Theta)=\\sqrt{\\text{Var}(\\hat\\Theta)}$ — estimatorens standardavvik", "$se(\\hat\\Theta)=\\text{Var}(\\hat\\Theta)$ — estimatorens varians", "$se(\\hat\\Theta)=\\text{Var}(\\hat\\Theta)^2$ — variansen i annen", "$se(\\hat\\Theta)=E(\\hat\\Theta)-\\theta$ — estimatorens skjevhet"],
      explanation: "Standardfeilen er kvadratroten av variansen, altså estimatorens standardavvik. For $\\bar X$ er $se(\\bar X)=\\sigma/\\sqrt n$; med $\\sigma$ ukjent settes $S$ inn.",
    },
    {
      question: "Hva uttrykker den relative effisiensen $\\text{Var}(\\hat\\Theta_2)/\\text{Var}(\\hat\\Theta_1)$ mellom to forventningsrette estimatorer?",
      options: ["Er forholdet $>1$, er $\\hat\\Theta_1$ mest effisient", "Er forholdet $>1$, er $\\hat\\Theta_2$ mest effisient", "Forholdet måler den samlede skjevheten til de to", "Forholdet er alltid lik 1 for forventningsrette estimatorer"],
      explanation: "Er $\\text{Var}(\\hat\\Theta_2)>\\text{Var}(\\hat\\Theta_1)$ (forhold $>1$), spriker $\\hat\\Theta_2$ mer — altså er $\\hat\\Theta_1$ mest effisient. Tallet viser hvor mye informasjon den dårligere estimatoren kaster bort.",
    },
    {
      question: "Hvordan vises at $\\bar X$ er konsistent for $\\mu$ (loven om store tall)?",
      options: ["$\\bar X$ er forventningsrett og $\\text{Var}(\\bar X)=\\sigma^2/n\\to 0$, så Tsjebysjeff gir resten", "$\\bar X$ er skjev, men skjevheten vokser slik at avviket jevnes ut", "$\\text{Var}(\\bar X)=\\sigma^2$ er konstant, og det alene er nok til å sikre konsistens uansett utvalgsstørrelse", "$\\bar X$ treffer $\\mu$ eksakt for enhver endelig utvalgsstørrelse"],
      explanation: "$E(\\bar X)=\\mu$ (skjevhet 0) og $\\text{Var}(\\bar X)=\\sigma^2/n\\to 0$, så $\\text{MSE}\\to 0$ og Tsjebysjeff gir $\\bar X\\xrightarrow{P}\\mu$. Dette er loven om store tall utledet via Tsjebysjeff.",
    },
    {
      question: "Hva blir MSE for en *forventningsrett* estimator?",
      options: ["$\\text{MSE}=\\text{Var}(\\hat\\Theta)$, siden skjevheten er 0", "$\\text{MSE}=b(\\hat\\Theta)^2$, siden variansen faller bort", "$\\text{MSE}=0$, siden estimatoren treffer eksakt", "$\\text{MSE}=\\text{Var}(\\hat\\Theta)+\\theta^2$, med parameteren i annen"],
      explanation: "Med $b=0$ reduseres $\\text{MSE}=\\text{Var}+b^2$ til bare variansen. Derfor er varians-sammenligning gyldig nettopp når begge estimatorene er forventningsrette.",
    },
  ],
  'stk1110-1-2': [
    {
      question: "Hva er grunnideen bak momentmetoden med én ukjent parameter?",
      options: ["Sett teoretisk moment lik empirisk: $E(X)=\\bar X$, og løs for parameteren", "Maksimer likelihood-funksjonen $L(\\theta)$ og løs $s(\\hat\\theta)=0$", "Minimer summen av kvadrerte avvik mellom data og modell", "Sett andrederiverte lik null og løs den resulterende ligningen"],
      explanation: "Momentmetoden setter det teoretiske momentet $E(X)$ (en funksjon av parameteren) lik det empiriske $\\bar X$ og løser. Å maksimere likelihood-funksjonen beskriver ML, og å minimere summen av kvadrerte avvik er minste kvadrater.",
    },
    {
      question: "Hva er det $k$-te *teoretiske* momentet?",
      options: ["Forventningen $E(X^k)$ — en funksjon av den ukjente parameteren", "Gjennomsnittet $\\frac1n\\sum X_i^k$ regnet ut av dataene", "Den $k$-te deriverte av log-likelihood-funksjonen", "Variansen til den $k$-te observasjonen i utvalget"],
      explanation: "Det $k$-te teoretiske momentet er $E(X^k)$, lest ut av fordelingen. Gjennomsnittet $\\frac1n\\sum X_i^k$ er det tilhørende *empiriske* momentet.",
    },
    {
      question: "Hva er det første *empiriske* momentet?",
      options: ["Utvalgsgjennomsnittet $\\bar X=\\frac1n\\sum X_i$", "Forventningen $E(X)$ uttrykt ved parameteren", "Utvalgsvariansen $S^2$ med divisor $n-1$", "Summen $\\sum X_i^2$ av kvadrerte observasjoner"],
      explanation: "Det første empiriske momentet er $\\bar X$. Momentmetoden setter dette lik det første teoretiske momentet $E(X)$.",
    },
    {
      question: "For Poisson$(\\lambda)$ er $E(X)=\\lambda$. Hva blir momentestimatoren?",
      options: ["$\\hat\\lambda=\\bar X$, siden momentligningen gir $\\lambda=\\bar X$", "$\\hat\\lambda=1/\\bar X$, siden $\\lambda$ er en rate", "$\\hat\\lambda=\\bar X/2$, siden $E(X)=2\\lambda$", "$\\hat\\lambda=S^2$, siden variansen i Poisson også er lik raten $\\lambda$"],
      explanation: "Momentligningen $E(X)=\\bar X$ blir $\\lambda=\\bar X$, så $\\hat\\lambda=\\bar X$. For Poisson sammenfaller dette med ML-estimatoren.",
    },
    {
      question: "Levetider er eksponentialfordelte med $E(X)=1/\\lambda$. Hva blir momentestimatoren for $\\lambda$?",
      options: ["$\\hat\\lambda=1/\\bar X$, ved å invertere $1/\\lambda=\\bar X$", "$\\hat\\lambda=\\bar X$, ved å sette $\\lambda=\\bar X$ direkte", "$\\hat\\lambda=\\bar X/n$, ved å dele på utvalgsstørrelsen", "$\\hat\\lambda=1/S^2$, ved å bruke utvalgsvariansen"],
      explanation: "Momentligningen $1/\\lambda=\\bar X$ inverteres til $\\hat\\lambda=1/\\bar X$. Samme som ML-estimatoren for eksponentialfordelingen.",
    },
    {
      question: "En fordeling har $E(X)=2\\theta$. Hva blir momentestimatoren for $\\theta$?",
      options: ["$\\hat\\theta=\\bar X/2$, ved å løse $2\\theta=\\bar X$", "$\\hat\\theta=2\\bar X$, ved å gange gjennomsnittet med 2", "$\\hat\\theta=\\bar X$, siden konstanten 2 faller bort", "$\\hat\\theta=\\bar X^2$, ved å kvadrere gjennomsnittet"],
      explanation: "Momentligningen $2\\theta=\\bar X$ løses til $\\hat\\theta=\\bar X/2$. Man inverterer funksjonen $g(\\theta)=2\\theta$.",
    },
    {
      question: "Hvordan defineres likelihood-funksjonen $L(\\theta)$ for uavhengige data?",
      options: ["$L(\\theta)=\\prod_{i=1}^n f(x_i;\\theta)$ — produktet av tetthetene", "$L(\\theta)=\\sum_{i=1}^n f(x_i;\\theta)$ — summen av tetthetene", "$L(\\theta)=\\prod_{i=1}^n \\log f(x_i;\\theta)$ — produktet av log-tetthetene", "$L(\\theta)=\\frac1n\\sum_{i=1}^n f(x_i;\\theta)$ — gjennomsnittet av tetthetene"],
      explanation: "Uavhengighet gjør simultantettheten til et produkt: $L(\\theta)=\\prod f(x_i;\\theta)$. Uten uavhengighet gjelder ikke produktformen.",
    },
    {
      question: "Hva gjør logaritmen med likelihood-funksjonen?",
      options: ["Gjør produktet om til en sum: $\\ell(\\theta)=\\sum\\log f(x_i;\\theta)$", "Gjør summen om til et produkt av log-ledd", "Flytter toppunktet til en annen parameterverdi", "Fjerner behovet for å bekrefte at punktet er et maksimum"],
      explanation: "$\\ell(\\theta)=\\log L(\\theta)=\\sum\\log f(x_i;\\theta)$ — produkt blir sum, langt lettere å derivere. Logaritmen er strengt voksende, så toppunktet flytter seg ikke.",
    },
    {
      question: "Hvorfor tar vi logaritmen *før* vi deriverer, i stedet for å derivere $L(\\theta)$ direkte?",
      options: ["Log gjør produkt til sum; å derivere produktet direkte drukner deg i produktregelen", "Log flytter toppunktet til et sted som er lettere å regne ut", "Log er nødvendig fordi $L(\\theta)$ ellers ville blitt negativ for enkelte parameterverdier", "Log fjerner kravet om å sjekke andrederiverte til slutt"],
      explanation: "Å derivere et produkt av $n$ faktorer krever produktregelen gjentatte ganger. Logaritmen gjør det til en sum, som deriveres ledd for ledd — og toppunktet er uendret siden log er strengt voksende.",
    },
    {
      question: "Hva er scorefunksjonen $s(\\theta)$?",
      options: ["Den deriverte av log-likelihood: $s(\\theta)=\\ell'(\\theta)$", "Den andrederiverte av log-likelihood: $s(\\theta)=\\ell''(\\theta)$", "Log-likelihood selv: $s(\\theta)=\\ell(\\theta)$", "Likelihood-funksjonen selv: $s(\\theta)=L(\\theta)$"],
      explanation: "Scoren er $s(\\theta)=\\ell'(\\theta)$. Toppen av $\\ell$ ligger der scoren er null; scoren er også byggesteinen for Fisher-informasjonen.",
    },
    {
      question: "Hva gir løsningen av likelihoodligningen $s(\\hat\\theta)=0$?",
      options: ["Et stasjonærpunkt — kandidaten til ML-estimator, som må bekreftes å være et maksimum", "Garantert det globale maksimumet, helt uten behov for noen videre sjekk av krumningen", "Alltid et minimum av log-likelihood-funksjonen", "Momentestimatoren, som alltid er ulik ML-estimatoren"],
      explanation: "$s(\\hat\\theta)=0$ gir bare et stasjonærpunkt (kan være maks, min eller vendepunkt). Du må bekrefte at det er et maksimum med $\\ell''(\\hat\\theta)<0$.",
    },
    {
      question: "Hva er det obligatoriske siste trinnet i ML-kjeden?",
      options: ["Bekreft maksimum ved at $\\ell''(\\hat\\theta)<0$", "Bekreft at $\\ell''(\\hat\\theta)>0$, altså positiv krumning", "Bekreft at scoren $s(\\hat\\theta)>0$ i punktet", "Bekreft at estimatoren er forventningsrett"],
      explanation: "Andrederiverttesten $\\ell''(\\hat\\theta)<0$ viser at $\\ell$ buer nedover — altså et toppunkt. Dette trinnet glemmes oftest og straffes hardt av sensor.",
    },
    {
      question: "Hvilket trinn i ML-utledningen glemmes oftest og gir mest trekk?",
      options: ["Maksimumsbekreftelsen $\\ell''(\\hat\\theta)<0$", "Å sette opp likelihood-funksjonen $L(\\theta)$", "Å ta logaritmen av likelihooden", "Å regne ut det empiriske gjennomsnittet $\\bar X$"],
      explanation: "Uten trinn 5, andrederiverttesten, er ML-utledningen ufullstendig — dette er den vanligste trekkbelastningen i estimeringsoppgaven.",
    },
    {
      question: "Hva er riktig rekkefølge på de fem trinnene i ML-kjeden?",
      options: ["$L \\to \\ell \\to$ score $\\to$ løs $s(\\hat\\theta)=0 \\to$ bekreft $\\ell''<0$", "$\\ell \\to L \\to$ score $\\to$ bekreft $\\ell''<0 \\to$ løs $s(\\hat\\theta)=0$", "score $\\to L \\to \\ell \\to$ løs $s(\\hat\\theta)=0 \\to$ bekreft $\\ell''<0$", "$L \\to$ score $\\to \\ell \\to$ bekreft $\\ell''<0 \\to$ løs $s(\\hat\\theta)=0$"],
      explanation: "Kjeden er: sett opp $L$, ta log til $\\ell$, deriver til score $s$, løs $s(\\hat\\theta)=0$, bekreft $\\ell''(\\hat\\theta)<0$. Log kommer alltid før derivasjon.",
    },
    {
      question: "Hva blir ML-estimatoren for $\\lambda$ i Poisson$(\\lambda)$?",
      options: ["$\\hat\\lambda_{ML}=\\bar X$, samme som momentestimatoren", "$\\hat\\lambda_{ML}=1/\\bar X$, den inverse av gjennomsnittet", "$\\hat\\lambda_{ML}=\\sum X_i^2/n$, det andre momentet", "$\\hat\\lambda_{ML}=\\max_i X_i$, den største observasjonen"],
      explanation: "Scoren $s(\\lambda)=-n+\\sum x_i/\\lambda=0$ gir $\\hat\\lambda=\\bar X$, og $\\ell''=-\\sum x_i/\\lambda^2<0$ bekrefter maksimum. Moment og ML sammenfaller for Poisson.",
    },
    {
      question: "For Bernoulli$(p)$ med $f(x;p)=p^x(1-p)^{1-x}$ — hva blir ML-estimatoren for $p$?",
      options: ["$\\hat p=\\bar X$, andelen enere i utvalget", "$\\hat p=1/\\bar X$, den inverse av gjennomsnittet", "$\\hat p=1-\\bar X$, andelen nuller i utvalget", "$\\hat p=\\bar X/n$, gjennomsnittet delt på $n$"],
      explanation: "Scoren $\\frac{\\sum x_i}{p}-\\frac{n-\\sum x_i}{1-p}=0$ gir $\\hat p=\\sum x_i/n=\\bar X$, og $\\ell''<0$ bekrefter maksimum. ML- og momentestimator er begge $\\bar X$.",
    },
    {
      question: "For eksponentialfordelingen $f(x;\\lambda)=\\lambda e^{-\\lambda x}$ — hva blir ML-estimatoren for $\\lambda$?",
      options: ["$\\hat\\lambda=1/\\bar X$, fra $\\ell'(\\lambda)=n/\\lambda-\\sum x_i=0$", "$\\hat\\lambda=\\bar X$, fra $\\ell'(\\lambda)=n\\lambda-\\sum x_i=0$", "$\\hat\\lambda=\\sum x_i/n^2$, fra det andre momentet", "$\\hat\\lambda=\\max_i x_i$, siden støtten avhenger av $\\lambda$"],
      explanation: "$\\ell(\\lambda)=n\\log\\lambda-\\lambda\\sum x_i$ gir $s(\\lambda)=n/\\lambda-\\sum x_i=0$, altså $\\hat\\lambda=n/\\sum x_i=1/\\bar X$. $\\ell''=-n/\\lambda^2<0$ bekrefter maksimum.",
    },
    {
      question: "For $N(\\mu,\\sigma^2)$ blir ML-estimatoren $\\hat\\sigma^2=\\frac1n\\sum(X_i-\\bar X)^2$. Hva er viktig å merke seg?",
      options: ["Den deler på $n$ og er derfor skjev; forventningsrett er $S^2$ med $n-1$", "Den deler på $n-1$ og er derfor forventningsrett akkurat som $S^2$", "Den er alltid lik $S^2$ uansett hvordan divisoren velges", "Den er forventningsrett fordi ML garanterer forventningsretthet"],
      explanation: "ML-variansen deler på $n$ og er skjev med $b=-\\sigma^2/n$. ML gir ikke automatisk forventningsrette estimatorer — den forventningsrette varianten er $S^2$ (divisor $n-1$).",
    },
    {
      question: "Hva sier invariansprinsippet om ML-estimatoren for en omregnet parameter $\\psi=g(\\theta)$?",
      options: ["$\\hat\\psi=g(\\hat\\theta)$ — sett ML-estimatoren rett inn i funksjonen", "$\\hat\\psi=g^{-1}(\\hat\\theta)$ — bruk den inverse funksjonen", "$\\hat\\psi=g(\\bar X)$ — bruk gjennomsnittet uansett modell", "$\\hat\\psi$ krever en helt ny ML-kjede fra bunnen av"],
      explanation: "Invariansprinsippet: er $\\hat\\theta$ ML for $\\theta$, er $\\hat\\psi=g(\\hat\\theta)$ ML for $\\psi=g(\\theta)$. Ingen ny derivasjon — bare sett inn.",
    },
    {
      question: "For Poisson med $\\hat\\lambda=\\bar X$ — hva blir ML-estimatoren for $\\psi=P(X=0)=e^{-\\lambda}$?",
      options: ["$\\hat\\psi=e^{-\\bar X}$, ved å sette $\\hat\\lambda=\\bar X$ inn i $e^{-\\lambda}$", "$\\hat\\psi=e^{-1/\\bar X}$, ved å bruke den inverse raten", "$\\hat\\psi=1-e^{-\\bar X}$, sannsynligheten for minst én", "$\\hat\\psi=\\bar X e^{-\\bar X}$, sannsynligheten for nøyaktig én hendelse per enhet"],
      explanation: "Invariansprinsippet gir $\\hat\\psi=g(\\hat\\lambda)=e^{-\\bar X}$. Man setter ML-estimatoren rett inn i funksjonen $g(\\lambda)=e^{-\\lambda}$.",
    },
    {
      question: "Gir momentmetoden og ML alltid samme estimator?",
      options: ["Nei — de sammenfaller i noen modeller (Poisson), men skiller lag i andre (Rayleigh)", "Ja — de gir alltid nøyaktig samme estimator uansett hvilken fordeling dataene har", "Nei — de gir alltid forskjellige estimatorer, aldri like", "Ja — så lenge fordelingen bare har én ukjent parameter"],
      explanation: "For Poisson, Bernoulli og eksponential sammenfaller de (begge $\\bar X$ eller $1/\\bar X$), men det er ikke en generell regel — Rayleigh er standardeksempelet der de skiller lag.",
    },
    {
      question: "For Rayleigh er $E(X)=\\theta\\sqrt{\\pi/2}$ og ML gir $\\hat\\theta_{ML}=\\sqrt{\\sum X_i^2/(2n)}$. Hvorfor skiller moment og ML lag her?",
      options: ["Momentestimatoren bruker det første momentet, mens ML svarer til det andre", "Momentestimatoren bruker det andre momentet, mens ML bruker det første", "ML glemmer å bekrefte maksimum, så resultatet blir feil", "Momentmetoden er egentlig minste kvadrater i forkledning"],
      explanation: "Momentestimatoren $\\bar X\\sqrt{2/\\pi}$ matcher $E(X)$ (første moment), mens ML-uttrykket svarer til $E(X^2)=2\\theta^2$ (andre moment). Ulike momenter gir ulike estimatorer.",
    },
    {
      question: "For Poisson$(\\lambda)$ — hvordan forholder momentestimatoren og ML-estimatoren seg?",
      options: ["Begge blir $\\bar X$ — de sammenfaller", "Moment gir $\\bar X$, ML gir $1/\\bar X$ — de skiller lag", "Moment gir $1/\\bar X$, ML gir $\\bar X$ — de skiller lag", "Begge blir $\\max_i X_i$ — de sammenfaller på randen"],
      explanation: "For Poisson gir både momentmetoden og ML $\\bar X$. Denne «alt blir $\\bar X$»-strukturen er grunnen til at Poisson er den hyppigste modellen i Oppgave 1.",
    },
    {
      question: "For uniform på $[0,\\theta]$ er $L(\\theta)=\\theta^{-n}$ (når $\\theta\\ge\\max_i x_i$). Hva blir ML-estimatoren?",
      options: ["$\\hat\\theta=\\max_i X_i$ — maksimum ligger på randen, siden scoren aldri blir null", "$\\hat\\theta=\\bar X$ — fra den vanlige likelihoodligningen $s(\\hat\\theta)=0$", "$\\hat\\theta=2\\bar X$ — samme som momentestimatoren", "$\\hat\\theta=\\min_i X_i$ — den minste observasjonen"],
      explanation: "$\\ell(\\theta)=-n\\log\\theta$ er avtakende, så $s(\\theta)=-n/\\theta$ blir aldri null. Likelihooden maksimeres ved minste tillatte $\\theta$, som er $\\max_i X_i$. Sjekk alltid definisjonsområdet.",
    },
    {
      question: "Hvorfor virker ikke den vanlige score-metoden for uniform på $[0,\\theta]$?",
      options: ["Støtten $0\\le x\\le\\theta$ avhenger av $\\theta$, så maksimum ligger på randen", "Likelihooden er ikke deriverbar noe sted i det tillatte parameterområdet for $\\theta$", "Log-likelihood er konstant, så scoren er null overalt", "Andrederiverte blir positiv, så punktet er et minimum"],
      explanation: "Når støtten flytter seg med $\\theta$, brytes regularitetsbetingelsene. $\\ell$ er strengt avtakende og scoren aldri null — maksimum ligger på randen ($\\max_i X_i$).",
    },
    {
      question: "Hva skjer med konstantledd i $\\ell(\\theta)$ som ikke inneholder $\\theta$ (f.eks. $-\\log(\\prod x_i!)$ i Poisson)?",
      options: ["De forsvinner ved derivasjon og påvirker ikke estimatoren", "De må beholdes fordi de endrer plasseringen av maksimum", "De gjør likelihooden negativ og må trekkes fra", "De inngår i skjevheten til den ferdige estimatoren"],
      explanation: "Ledd uten $\\theta$ har derivert 0 og påvirker ikke $s(\\theta)$ eller estimatoren. De kan droppes tidlig for å forenkle regningen.",
    },
    {
      question: "Har en fordeling to ukjente parametre, hvordan brukes momentmetoden?",
      options: ["Løs de to første momentligningene simultant: $E(X)=\\bar X$ og $E(X^2)=\\frac1n\\sum X_i^2$", "Løs bare den første momentligningen $E(X)=\\bar X$ for begge", "Maksimer likelihooden med hensyn på begge parametrene samtidig ved å sette score lik null", "Bruk det tredje og fjerde momentet for de to parametrene"],
      explanation: "Med to ukjente trengs to ligninger: første og andre moment settes lik sine empiriske motstykker og løses simultant. I normalmodellen gir det $\\hat\\mu=\\bar X$ og $\\hat\\sigma^2=\\frac1n\\sum(X_i-\\bar X)^2$.",
    },
    {
      question: "Hva er forskjellen på momentmetoden og minste kvadrater?",
      options: ["Momentmetoden matcher momenter; minste kvadrater minimerer kvadrerte avvik", "Momentmetoden minimerer kvadrerte avvik; minste kvadrater matcher momenter", "De er to ulike navn på nøyaktig samme metode", "Momentmetoden maksimerer likelihood; minste kvadrater tar logaritmen"],
      explanation: "Momentmetoden setter teoretiske momenter lik empiriske; minste kvadrater (Del 3) minimerer $\\sum(\\text{observert}-\\text{modell})^2$. Å forveksle dem er en klassisk feil.",
    },
    {
      question: "Hva betyr det geometrisk at $\\ell''(\\hat\\theta)<0$ i ML-punktet?",
      options: ["Log-likelihood-kurven buer nedover i punktet — altså et toppunkt", "Log-likelihood-kurven buer oppover i punktet — altså et bunnpunkt", "Log-likelihood-kurven er rett i punktet — altså et vendepunkt", "Scoren vokser i punktet, så estimatoren blir skjev"],
      explanation: "Negativ andrederivert betyr at $\\ell$ krummer nedover, som kjennetegner et maksimum. Er $\\ell''>0$ er det et bunnpunkt, er $\\ell''=0$ kan det være et vendepunkt.",
    },
    {
      question: "Hva er den observerte informasjonen, og hvordan henger den sammen med maksimumsbekreftelsen?",
      options: ["$-\\ell''(\\hat\\theta)$; at den er positiv er nettopp kravet $\\ell''(\\hat\\theta)<0$", "$+\\ell''(\\hat\\theta)$; at den er negativ i selve punktet bekrefter et lokalt maksimum", "$\\ell'(\\hat\\theta)$; at den er null bekrefter et maksimum", "$L(\\hat\\theta)$; at den er stor bekrefter et maksimum"],
      explanation: "Observert informasjon er $-\\ell''(\\hat\\theta)$. At den er positiv er det samme som $\\ell''(\\hat\\theta)<0$ — altså maksimumsbekreftelsen. Forventningen av $-\\ell''$ er Fisher-informasjonen.",
    },
  ],
  'stk1110-1-3': [
    {
      question: "Hva er Fisher-informasjonen $I(\\theta)$ i én observasjon?",
      options: ["$-E[\\partial^2\\log f(X;\\theta)/\\partial\\theta^2]$, den forventede negative krumningen av log-tettheten", "$+E[\\partial^2\\log f(X;\\theta)/\\partial\\theta^2]$, altså uten det viktige minustegnet", "$-\\ell''(\\hat\\theta)$, den datavhengige observerte krumningen i estimatet", "$\\partial^2\\log f(x;\\theta)/\\partial\\theta^2$ regnet for den ene observerte $x$"],
      explanation: "Fisher-informasjonen er den forventede negative andrederiverte av log-tettheten. Uten forventningen får du observert informasjon; uten minus får du feil fortegn.",
    },
    {
      question: "Hvordan henger utvalgsinformasjonen $I_n(\\theta)$ sammen med $I(\\theta)$?",
      options: ["$I_n(\\theta)=n\\,I(\\theta)$, additiv over uavhengige observasjoner", "$I_n(\\theta)=I(\\theta)/n$, slik at informasjonen avtar med utvalget", "$I_n(\\theta)=I(\\theta)$, altså helt uavhengig av antall observasjoner", "$I_n(\\theta)=n^2 I(\\theta)$, med kvadratisk vekst i utvalgsstørrelsen"],
      explanation: "Informasjonen er additiv over uavhengige observasjoner, så $n$ observasjoner gir $n$ ganger informasjonen i én.",
    },
    {
      question: "Hva er den tilnærmede fordelingen til ML-estimatoren for stor $n$?",
      options: ["$\\hat\\theta\\approx N(\\theta,\\ 1/(nI(\\theta)))$", "$\\hat\\theta\\approx N(\\theta,\\ nI(\\theta))$, med selve informasjonen som varians", "$\\hat\\theta\\approx N(\\theta,\\ 1/I(\\theta))$, altså helt uten faktoren $n$", "$\\hat\\theta\\approx N(0,\\ 1/(nI(\\theta)))$, feilaktig sentrert i null"],
      explanation: "ML-asymptotikken gir en normalfordeling sentrert på $\\theta$ med varians lik den inverse utvalgsinformasjonen $1/(nI(\\theta))$.",
    },
    {
      question: "Hva er standardfeilen $se(\\hat\\theta)$ til en ML-estimator?",
      options: ["$se(\\hat\\theta)=\\sqrt{1/(nI(\\hat\\theta))}$", "$se(\\hat\\theta)=1/(nI(\\hat\\theta))$, altså glemt å ta kvadratroten", "$se(\\hat\\theta)=\\sqrt{nI(\\hat\\theta)}$, med informasjonen oppe i telleren", "$se(\\hat\\theta)=\\sqrt{1/I(\\hat\\theta)}$, uten faktoren $n$ i nevneren"],
      explanation: "Standardfeilen er kvadratroten av den estimerte variansen $1/(nI(\\hat\\theta))$, med $\\theta$ erstattet av estimatet.",
    },
    {
      question: "Hvordan skrives et symmetrisk $(1-\\alpha)$ Wald-konfidensintervall for $\\theta$?",
      options: ["$\\hat\\theta\\pm z_{\\alpha/2}\\,se(\\hat\\theta)$, der $z_{\\alpha/2}$ er øvre haleareal-kvantilen i normalfordelingen", "$\\hat\\theta\\pm z_{\\alpha}\\,se(\\hat\\theta)$, med helt haleareal i stedet for $\\alpha/2$", "$\\hat\\theta\\pm t_{\\alpha/2}\\,se(\\hat\\theta)$, med en $t$-kvantil i stedet for $z$", "$\\hat\\theta\\pm z_{\\alpha/2}\\,I(\\hat\\theta)$, med informasjonen selv i stedet for $se$"],
      explanation: "Wald-intervallet legger på et antall standardfeil gitt av øvre $\\alpha/2$-kvantil i normalfordelingen; tosidig bruker $\\alpha/2$ i hver hale.",
    },
    {
      question: "Hva er Fisher-informasjonen $I(\\lambda)$ for Poisson$(\\lambda)$ i én observasjon?",
      options: ["$I(\\lambda)=1/\\lambda$, siden $E(X)=\\lambda$ for Poisson", "$I(\\lambda)=\\lambda$, altså forvekslet med selve raten i modellen", "$I(\\lambda)=1/\\lambda^2$, som er svaret for eksponentialfordelingen", "$I(\\lambda)=\\lambda^2$, altså kvadratet av den ukjente raten"],
      explanation: "$\\log f=-\\lambda+x\\log\\lambda-\\log x!$ gir andrederivert $-x/\\lambda^2$; med $E(X)=\\lambda$ blir $I(\\lambda)=\\lambda/\\lambda^2=1/\\lambda$.",
    },
    {
      question: "Hva er Fisher-informasjonen $I(\\lambda)$ for eksponential med rate $\\lambda$?",
      options: ["$I(\\lambda)=1/\\lambda^2$, fra konstant andrederivert $-1/\\lambda^2$", "$I(\\lambda)=1/\\lambda$, som egentlig er svaret for Poisson-modellen", "$I(\\lambda)=\\lambda^2$, altså kvadratet av raten i stedet", "$I(\\lambda)=\\lambda$, altså forvekslet med selve raten"],
      explanation: "$\\log f=\\log\\lambda-\\lambda x$ gir andrederivert $-1/\\lambda^2$ (konstant), så $I(\\lambda)=1/\\lambda^2$.",
    },
    {
      question: "Hva sier Cramér–Raos nedre grense om en forventningsrett estimator $T$?",
      options: ["$\\operatorname{Var}(T)\\ge 1/(nI(\\theta))$, en teoretisk nedre variansgr", "$\\operatorname{Var}(T)\\le 1/(nI(\\theta))$, altså feil vei på ulikheten", "$\\operatorname{Var}(T)= nI(\\theta)$, satt lik selve informasjonsmengden", "$\\operatorname{Var}(T)\\ge nI(\\theta)$, med informasjonen som nedre grense"],
      explanation: "Ingen forventningsrett estimator kan ha mindre varians enn den inverse utvalgsinformasjonen; ML-estimatoren oppnår grensen asymptotisk.",
    },
    {
      question: "Hvorfor sies ML-estimatoren å være asymptotisk effisient?",
      options: ["Variansen når Cramér–Rao-grensen når $n\\to\\infty$, altså at estimatoren i praksis henter ut all informasjon i dataene", "Fordi den er forventningsrett for absolutt alle utvalgsstørrelser $n$", "Fordi den alltid har den minste tenkelige skjevheten av alle", "Fordi variansen dens blir eksakt lik null når $n$ blir stor nok"],
      explanation: "Asymptotisk effisiens betyr at variansen når den teoretisk minst mulige (Cramér–Rao) i grensen; ML henter da ut all informasjon i dataene.",
    },
    {
      question: "Hva er den vanligste feilen når man definerer Fisher-informasjonen?",
      options: ["Å glemme forventningen eller minustegnet i $-E[\\ell'']$", "Å bruke førstederiverte $\\ell'$ i stedet for den andrederiverte $\\ell''$", "Å ta kvadratroten av hele uttrykket $I(\\theta)$ helt til slutt", "Å dele på utvalgsstørrelsen $n$ på et altfor tidlig tidspunkt"],
      explanation: "Uten forventningen blir størrelsen datavhengig (observert informasjon), og uten minustegnet får den feil fortegn.",
    },
    {
      question: "Hvorfor bruker Wald-intervallet $z$ og ikke $t$?",
      options: ["Fordi det hviler på ML-estimatorens normaltilnærming", "Fordi standardavviket $\\sigma$ av en eller annen grunn alltid er kjent", "Fordi $t$-fordelingen utelukkende gjelder for data om andeler", "Fordi $z$-kvantilen konsekvent gir et smalere intervall enn $t$"],
      explanation: "Wald-intervallet er en normaltilnærming (ML-asymptotikk). $t$ brukes derimot for et normalgjennomsnitt der $\\sigma$ er estimert med $S$.",
    },
    {
      question: "Når foretrekkes en asymmetrisk pivot-form framfor det symmetriske Wald-intervallet?",
      options: ["Når standardavviket til estimatoren avhenger av parameteren", "Når utvalget er lite, men standardavviket $\\sigma$ tilfeldigvis er kjent", "Når den ukjente parameteren i prinsippet kan bli negativ", "Når man skal utføre en tosidig hypotesetest i stedet"],
      explanation: "Avhenger $se$ av $\\theta$ (som for eksponential), gir det å beholde sann $\\theta$ i pivoten et mer presist, asymmetrisk intervall.",
    },
    {
      question: "Hva er den asymmetriske pivot-formen for eksponential ($se=\\theta/\\sqrt n$)?",
      options: ["$[\\hat\\theta/(1+z/\\sqrt n),\\ \\hat\\theta/(1-z/\\sqrt n)]$, som følger av å beholde sann $\\theta$ i pivotens nevner", "$[\\hat\\theta/(1-z/\\sqrt n),\\ \\hat\\theta/(1+z/\\sqrt n)]$, med byttede nevnere", "$[\\hat\\theta(1-z/\\sqrt n),\\ \\hat\\theta(1+z/\\sqrt n)]$, med multiplikasjon", "$[\\hat\\theta-z/\\sqrt n,\\ \\hat\\theta+z/\\sqrt n]$, den symmetriske formen"],
      explanation: "Løser man $-z\\le(\\hat\\theta-\\theta)/(\\theta/\\sqrt n)\\le z$ for $\\theta$, får nedre grense $1+z/\\sqrt n$ i nevneren og øvre grense $1-z/\\sqrt n$.",
    },
    {
      question: "Er den asymmetriske Wald-formen en feil?",
      options: ["Nei, asymmetrien er riktig når $se$ avhenger av parameteren", "Ja, fordi et konfidensintervall alltid skal være symmetrisk om $\\hat\\theta$", "Ja, fordi den asymmetriske formen alltid gir for lav dekning", "Nei, men bare dersom den ukjente parameteren kan bli negativ"],
      explanation: "Sensor regner det asymmetriske intervallet som riktig — den symmetriske Wald-formen er en grovere tilnærming (§4.7).",
    },
    {
      question: "Hva må du nevne når du bruker normaltilnærming for ML-estimatoren?",
      options: ["At det er ML-asymptotikken (sentralgrenseteoremet) som gjelder", "At standardavviket $\\sigma$ i den underliggende modellen er kjent", "At utvalget er trukket helt uten tilbakelegging fra populasjonen", "At Fisher-informasjonen $I(\\theta)$ tilfeldigvis er negativ her"],
      explanation: "Sensorkravet (§4.4) er å begrunne normalformen med ML-asymptotikken/sentralgrenseteoremet, ikke bare påstå at $\\hat\\theta$ er normal.",
    },
    {
      question: "Et 95 % konfidensintervall $[2{,}9,\\ 4{,}1]$ for $\\lambda$ betyr korrekt at:",
      options: ["Prosedyren fanger sann $\\lambda$ i 95 % av gjentatte utvalg", "Det er 95 % sannsynlig at $\\lambda$ ligger i akkurat dette ene intervallet", "At $\\lambda$ er stokastisk med 95 % sannsynlighet innenfor grensene", "At hele 95 % av de observerte verdiene ligger mellom grensene"],
      explanation: "Konfidens gjelder prosedyren over gjentatte utvalg. Parameteren $\\lambda$ er ikke stokastisk; det er intervallgrensene som er det.",
    },
    {
      question: "Hvordan transformerer man et konfidensintervall $[L,U]$ for $\\theta$ til et intervall for $\\psi=g(\\theta)$ når $g$ er voksende?",
      options: ["$[g(L),\\ g(U)]$, fordi en monoton voksende $g$ bevarer dekningsgraden direkte", "$[g(U),\\ g(L)]$, som om endepunktene alltid skulle bytte plass", "$[1/g(L),\\ 1/g(U)]$, med grensene feilaktig invertert hver for seg", "$[g(\\hat\\theta)-L,\\ g(\\hat\\theta)+U]$, en forskjøvet feilkonstruksjon"],
      explanation: "For en monoton voksende $g$ bevares dekningsgraden, og endepunktene transformeres direkte: $[g(L),g(U)]$.",
    },
    {
      question: "Hva skjer med endepunktene når $g$ er avtakende (f.eks. $\\lambda=1/\\theta$)?",
      options: ["De bytter plass: $[g(U),\\ g(L)]$, fordi $g$ er avtakende der", "De beholder rekkefølgen $[g(L),\\ g(U)]$ akkurat som for voksende $g$", "Intervallet blir plutselig symmetrisk om punktestimatet $g(\\hat\\theta)$", "Dekningsgraden endres fra $1-\\alpha$ til $1-2\\alpha$ ved transformen"],
      explanation: "En avtakende $g$ snur rekkefølgen, så nedre grense blir $g$ av den øvre og omvendt.",
    },
    {
      question: "Hva er Fisher-informasjonen $I(p)$ for Bernoulli$(p)$?",
      options: ["$I(p)=1/[p(1-p)]$, som gir $se=\\sqrt{\\hat p(1-\\hat p)/n}$", "$I(p)=p(1-p)$, som egentlig er variansen til én Bernoulli-variabel", "$I(p)=1/p$, altså uten leddet som gjelder mislykket utfall", "$I(p)=1/(1-p)$, altså uten leddet som gjelder suksess"],
      explanation: "$\\log f=x\\log p+(1-x)\\log(1-p)$ gir $I(p)=1/p+1/(1-p)=1/[p(1-p)]$, som gir andels-standardfeilen $\\sqrt{\\hat p(1-\\hat p)/n}$.",
    },
    {
      question: "Den alternative formelen for Fisher-informasjonen bruker scoren. Hvilken er riktig?",
      options: ["$I(\\theta)=E[(\\partial\\log f/\\partial\\theta)^2]$, to ekvivalente uttrykk", "$I(\\theta)=(E[\\partial\\log f/\\partial\\theta])^2$, med kvadrat utenfor forventningen", "$I(\\theta)=E[\\partial\\log f/\\partial\\theta]$, som bare er score-forventningen null", "$I(\\theta)=\\operatorname{Var}(\\partial^2\\log f/\\partial\\theta^2)$, variansen av andrederiverte"],
      explanation: "Fisher-informasjonen er lik variansen av scoren, som fordi scoren har forventning null er $E[(\\partial\\log f/\\partial\\theta)^2]$.",
    },
    {
      question: "For Poisson er $\\hat\\lambda=\\bar X$ med $\\operatorname{Var}(\\bar X)=\\lambda/n$ og $I(\\lambda)=1/\\lambda$. Er $\\bar X$ effisient?",
      options: ["Ja, variansen $\\lambda/n$ er lik grensen, slik at $\\bar X$ er en effisient forventningsrett estimator", "Nei, variansen ligger et godt stykke over Cramér–Rao-grensen her", "Ja, men estimatoren når grensen bare i den asymptotiske grensen", "Nei, fordi $\\bar X$ faktisk ikke er en forventningsrett estimator"],
      explanation: "Grensen er $1/(n\\cdot 1/\\lambda)=\\lambda/n$, nøyaktig lik $\\operatorname{Var}(\\bar X)$, så $\\bar X$ er effisient (ikke bare asymptotisk).",
    },
    {
      question: "Hva blir standardfeilen for et Poisson-estimat $\\hat\\lambda$ med $I(\\lambda)=1/\\lambda$?",
      options: ["$\\sqrt{\\hat\\lambda/n}$, fra $I(\\lambda)=1/\\lambda$", "$\\sqrt{n/\\hat\\lambda}$, altså med utvalgsstørrelsen oppe i telleren", "$\\hat\\lambda/n$, uten å ta noen kvadratrot i det hele tatt", "$\\sqrt{\\hat\\lambda}$, altså uten å dele på utvalgsstørrelsen $n$"],
      explanation: "$se=\\sqrt{1/(nI(\\hat\\lambda))}=\\sqrt{1/(n\\cdot 1/\\hat\\lambda)}=\\sqrt{\\hat\\lambda/n}$.",
    },
    {
      question: "Hva er forskjellen på observert informasjon og Fisher-informasjon?",
      options: ["Observert er $-\\ell''(\\hat\\theta)$; Fisher er forventningen $-E[\\ell'']$", "De er alltid nøyaktig like for enhver tenkelig tetthet man møter", "Fisher er datavhengig, mens observert informasjon er et fast tall", "Observert informasjon kan bli negativ, men Fisher-informasjon aldri"],
      explanation: "Observert informasjon er den negative andrederiverte i estimatet; Fisher-informasjonen er forventningen av den over $X$.",
    },
    {
      question: "Hvorfor gir mer data et smalere Wald-intervall?",
      options: ["Fordi $se=\\sqrt{1/(nI(\\hat\\theta))}$ krymper som $1/\\sqrt n$", "Fordi kvantilen $z_{\\alpha/2}$ blir mindre og mindre for økende $n$", "Fordi Fisher-informasjonen $I(\\theta)$ vokser med estimatet $\\hat\\theta$", "Fordi estimatoren $\\hat\\theta$ blir stadig mer forventningsrett"],
      explanation: "Bredden er $2z_{\\alpha/2}se$, og $se$ avtar proporsjonalt med $1/\\sqrt n$ når $n$ vokser; kvantilen $z_{\\alpha/2}$ er fast.",
    },
    {
      question: "Hva er Fisher-informasjonen $I(\\mu)$ for $N(\\mu,\\sigma^2)$ med kjent $\\sigma^2$?",
      options: ["$I(\\mu)=1/\\sigma^2$, slik at $\\operatorname{Var}(\\bar X)=1/I_n(\\mu)=\\sigma^2/n$", "$I(\\mu)=\\sigma^2$, altså forvekslet med selve variansen i modellen", "$I(\\mu)=n/\\sigma^2$, som egentlig er hele utvalgsinformasjonen $I_n$", "$I(\\mu)=1/(n\\sigma^2)$, altså med en unødvendig deling på $n$"],
      explanation: "$\\log f$ har andrederivert $-1/\\sigma^2$ i $\\mu$, så $I(\\mu)=1/\\sigma^2$ og $I_n(\\mu)=n/\\sigma^2$, altså $\\operatorname{Var}(\\bar X)=\\sigma^2/n$.",
    },
    {
      question: "For Rayleigh$(\\theta)$ er $I(\\theta)=4/\\theta^2$. Hva blir standardfeilen $se(\\hat\\theta)$?",
      options: ["$se(\\hat\\theta)=\\hat\\theta/(2\\sqrt n)$, siden $I(\\theta)=4/\\theta^2$", "$se(\\hat\\theta)=\\hat\\theta/\\sqrt n$, altså uten faktoren 2 i nevneren", "$se(\\hat\\theta)=2\\hat\\theta/\\sqrt n$, med faktoren 2 flyttet opp i telleren", "$se(\\hat\\theta)=\\hat\\theta^2/(4n)$, altså variansen uten å ta kvadratroten"],
      explanation: "$se=\\sqrt{1/(nI(\\hat\\theta))}=\\sqrt{\\hat\\theta^2/(4n)}=\\hat\\theta/(2\\sqrt n)$.",
    },
    {
      question: "Punktestimatet for en omregnet parameter $\\psi=g(\\theta)$ finnes ved:",
      options: ["Invariansprinsippet: $\\hat\\psi=g(\\hat\\theta)$", "En helt ny ML-kjede regnet fra bunnen av spesielt for parameteren $\\psi$", "Delta-metoden anvendt direkte på standardfeilen $se$ til estimatoren", "Å bytte $\\theta$ med $1/\\theta$ overalt der den forekommer i uttrykket"],
      explanation: "Invariansprinsippet (kap. 1.2) sier at ML for en funksjon av parameteren er funksjonen av ML-estimatoren — ingen ny utledning trengs.",
    },
    {
      question: "Hva betyr det geometrisk at Fisher-informasjonen er stor?",
      options: ["Log-likelihood har en skarp, sterkt krummet topp, som gir l", "Log-likelihood er nesten helt flat i området rundt toppunktet", "Estimatoren får da en tilsvarende stor varians og usikkerhet", "Utvalgsstørrelsen $n$ må nødvendigvis være ganske liten her"],
      explanation: "Fisher-informasjonen er forventet krumning av log-likelihood; en skarp topp betyr liten varians og presis estimering.",
    },
    {
      question: "En estimator $T=X_1$ (kun første observasjon) for Poisson$(\\lambda)$ har relativ effisiens mot $\\bar X$ lik:",
      options: ["$1/n$, verdien med $P(Z>z_{0{,}025})=0{,}025$ i øvre hale", "$n$, som om $T$ skulle brukt flere observasjoner enn $\\bar X$", "$1$, som om begge estimatorene var like effektive her", "$1/n^2$, altså med en kvadrert utvalgsstørrelse i nevneren"],
      explanation: "$\\operatorname{Var}(\\bar X)/\\operatorname{Var}(T)=(\\lambda/n)/\\lambda=1/n$; $T$ kaster bort $n-1$ observasjoner.",
    },
    {
      question: "Hva er $z_{\\alpha/2}$ i notasjonen med øvre haleareal for et 95 %-intervall?",
      options: ["$z_{0{,}025}=1{,}96$, et 95 %-intervall med $\\alpha/2=0{,}025$", "$z_{0{,}05}=1{,}645$, som hører til et 90 %-intervall i stedet", "$z_{0{,}025}=2{,}576$, definert feil via $P(Z<z)=0{,}025$", "$z_{0{,}95}=1{,}96$, med feil kvantilnavn og $P(Z>z)=0{,}95$"],
      explanation: "For 95 % er $\\alpha=0{,}05$, så $\\alpha/2=0{,}025$ i hver hale, og øvre kvantilen er $z_{0{,}025}=1{,}96$ med $P(Z>1{,}96)=0{,}025$.",
    },
  ],
  'stk1110-1-4': [
    {
      question: "Hva er aposteriorifordelingen proporsjonal med?",
      options: ["Apriori ganget med likelihood, $\\pi(\\theta)L(\\theta)$, der normeringskonstanten fylles inn til slutt fra formen", "Apriori delt på likelihood, altså $\\pi(\\theta)/L(\\theta)$ i stedet", "Kun likelihooden $L(\\theta)$, uten noe apriori-ledd i det hele tatt", "Kun apriorifordelingen $\\pi(\\theta)$, uten dataenes likelihood"],
      explanation: "Bayes' setning gir $\\pi(\\theta\\mid x)\\propto\\pi(\\theta)L(\\theta)$; normeringskonstanten fylles inn ved å kjenne igjen fordelingsformen.",
    },
    {
      question: "Hva vil det si at en apriori er konjugert til en likelihood?",
      options: ["Aposteriori havner i samme fordelingsfamilie som apriori", "At apriori og likelihood tilfeldigvis har akkurat samme forventning", "At aposteriorifordelingen alltid blir en normalfordeling til slutt", "At likelihooden forsvinner helt ut av aposteriorifordelingen"],
      explanation: "Konjugering betyr at oppdateringen bare endrer parametrene, ikke fordelingsfamilien — da slipper man å integrere.",
    },
    {
      question: "Hva er kjernetrikset for å gjenkjenne en konjugert aposteriori?",
      options: ["Samle eksponentene og sammenligne med en kjent kjerne", "Å integrere produktet apriori $\\times$ likelihood helt eksplisitt ut", "Å derivere likelihooden og deretter sette den deriverte lik null", "Å ta logaritmen av produktet og finne dets maksimumspunkt"],
      explanation: "Man samler potensene av parameteren og leddene i eksponenten, og gjenkjenner så fordelingsformen (f.eks. gamma-kjernen).",
    },
    {
      question: "Hva er gamma-kjernen (skala-form) man skal gjenkjenne?",
      options: ["$\\theta^{\\alpha-1}e^{-\\theta/\\beta}$", "$\\theta^{\\alpha}e^{-\\theta\\beta}$, med feil eksponenter og skala oppe", "$e^{-\\theta}\\theta^{\\alpha}/\\alpha!$, som egentlig er Poisson-formen", "$\\theta^{\\alpha-1}e^{-\\theta^2/\\beta}$, med feilaktig kvadrert $\\theta$"],
      explanation: "En gamma$(\\alpha,\\beta)$ i skala-form har kjerne $\\theta^{\\alpha-1}e^{-\\theta/\\beta}$; et uttrykk $\\theta^a e^{-b\\theta}$ er gamma med $\\alpha=a+1$, $\\beta=1/b$.",
    },
    {
      question: "For Poisson–gamma med apriori gamma$(\\alpha,\\beta)$ og datasum $s$, hva er aposterioriens formparameter?",
      options: ["$\\alpha+s$, siden Poisson-likelihood bidrar med $\\lambda^{s}$", "$\\alpha+n$, altså med antall observasjoner i stedet for summen", "$\\alpha\\cdot s$, altså formparameteren ganget med datasummen", "$\\alpha+s+n$, med både datasum og antall observasjoner lagt til"],
      explanation: "Poisson-likelihooden bidrar med $\\lambda^{s}$, så potensen (og dermed formparameteren) øker fra $\\alpha$ til $\\alpha+s$.",
    },
    {
      question: "Hva er aposterioriens skalaparameter for Poisson–gamma?",
      options: ["$\\beta/(1+n\\beta)$", "$\\beta(1+n\\beta)$, altså skalaen ganget opp i stedet for ned", "$\\beta/n$, altså bare delt på antall observasjoner alene", "$\\beta+n$, altså skalaparameteren pluss antall observasjoner"],
      explanation: "Eksponentleddene $1/\\beta$ og $n$ legges sammen: $1/\\beta'=1/\\beta+n$, så $\\beta'=\\beta/(1+n\\beta)$.",
    },
    {
      question: "Hva er Bayes-estimatoren (under kvadratisk tap)?",
      options: ["Forventningen i aposteriorifordelingen, $E(\\theta\\mid x)$, altså tyngdepunktet i den oppdaterte troen om parameteren", "Toppunktet (modus) i aposteriorifordelingen i stedet for snittet", "Verdien som maksimerer selve likelihooden, altså ML-estimatet", "Forventningen i apriorifordelingen før dataene er tatt inn"],
      explanation: "Under kvadratisk tap er den optimale Bayes-estimatoren aposteriori forventning; for gamma$(\\alpha',\\beta')$ er den $\\alpha'\\beta'$.",
    },
    {
      question: "Aposteriori er gamma$(\\alpha',\\beta')$. Hva er Bayes-estimatoren?",
      options: ["$\\alpha'\\beta'$, altså gamma-forventningen $E=\\alpha'\\beta'$", "$\\alpha'/\\beta'$, altså formen delt på skalaen i stedet for gange", "$\\alpha'+\\beta'$, altså summen av de to aposteriori-parametrene", "$\\alpha'\\beta'^2$, som egentlig er variansen i gammafordelingen"],
      explanation: "Forventningen i en gamma (skala) er formen ganger skalaen, $E=\\alpha'\\beta'$, som er nettopp Bayes-estimatoren.",
    },
    {
      question: "Hva skjer med Bayes-estimatoren når $n\\to\\infty$?",
      options: ["Den nærmer seg ML-estimatoren $\\bar x$", "Den nærmer seg apriori-forventningen $\\alpha\\beta$ i stedet", "Den går mot null uansett hvilken apriori man har valgt", "Den blir lik aprioriens modus når utvalget blir stort"],
      explanation: "For store utvalg dominerer likelihooden apriorien, så Bayes-estimatoren $\\frac{\\alpha+s}{1/\\beta+n}\\to s/n=\\bar x$.",
    },
    {
      question: "Bayes-estimatoren for Poisson–gamma er et vektet snitt. Hva veier den mellom?",
      options: ["ML-estimatet $\\bar x$ og apriori-forventningen $\\alpha\\beta$", "Aposteriori-fordelingens modus og dens median mot hverandre", "To ulike likelihood-funksjoner fra to forskjellige datasett", "Apriori-variansen og datavariansen veid mot hverandre"],
      explanation: "$\\hat\\lambda_{\\text{Bayes}}=w\\bar x+(1-w)\\alpha\\beta$ med datavekt $w=n\\beta/(1+n\\beta)$; den balanserer data mot forhåndstro.",
    },
    {
      question: "Et aposteriori-uttrykk er $\\lambda^{9}e^{-4{,}5\\lambda}$. Hvilken gamma$(\\alpha',\\beta')$ er det?",
      options: ["gamma$(10,\\ 1/4{,}5)$, der potensen gir formen og eksponenten gir invers skala", "gamma$(9,\\ 4{,}5)$, altså form uten $+1$ og skala uinvertert", "gamma$(9,\\ 1/4{,}5)$, altså med formparameteren én for lav", "gamma$(10,\\ 4{,}5)$, altså med skalaparameteren uinvertert"],
      explanation: "Potensen $\\alpha'-1=9$ gir $\\alpha'=10$, og faktoren foran $\\lambda$ i eksponenten er $1/\\beta'=4{,}5$, så $\\beta'=1/4{,}5$.",
    },
    {
      question: "Hvorfor slipper man å regne normeringskonstanten i konjugerte tilfeller?",
      options: ["Fordi fordelingsformen gjenkjennes fra kjernen", "Fordi likelihooden allerede er ferdig normert på forhånd", "Fordi apriorifordelingen tilfeldigvis integrerer til null", "Fordi parameteren $\\theta$ er diskret i disse tilfellene"],
      explanation: "Når kjernen matcher en kjent fordeling, kjenner man normeringskonstanten fra den familien — ingen integrasjon nødvendig.",
    },
    {
      question: "Hva er den vanligste feilen når man skal vise konjugering?",
      options: ["Å påstå konjugering uten å samle eksponentene", "Å ta logaritmen av apriorifordelingen før man multipliserer", "Å bruke altfor mange observasjoner enn oppgaven gir", "Å regne ut forventningen av selve likelihood-funksjonen"],
      explanation: "Sensor krever at du faktisk multipliserer, samler eksponentene og identifiserer fordelingsfamilien — ikke bare påstår at gamma er konjugert.",
    },
    {
      question: "For eksponential-rate med gamma$(a,b)$-apriori og datasum $\\sum x_i$, hva er aposteriori?",
      options: ["gamma$(a+n,\\ b/(1+b\\sum x_i))$", "gamma$(a+\\sum x_i,\\ b/(1+nb))$, med sum og antall byttet om", "gamma$(a,\\ b+n)$, altså formen uendret og skalaen økt", "gamma$(a\\cdot n,\\ b/\\sum x_i)$, med multipliserte parametre"],
      explanation: "Eksponential-likelihooden er $\\lambda^{n}e^{-\\lambda\\sum x_i}$, så formen øker med $n$ og skalaen krymper med datasummen: gamma$(a+n,\\ b/(1+b\\sum x_i))$.",
    },
    {
      question: "Hva er forskjellen på Bayes-estimatoren og ML-estimatoren prinsipielt?",
      options: ["Bayes tar aposteriori forventning; ML maksimerer likelihood, som er grunnen til at de sammenfaller for store utvalg", "Bayes maksimerer likelihooden, mens ML tar en forventning i stedet", "De to estimatorene er alltid nøyaktig identiske uansett utvalg", "Bayes-estimatoren ignorerer dataene og bruker kun apriorien"],
      explanation: "ML velger verdien som maksimerer $L(\\theta)$; Bayes bruker apriori og tar forventningen i aposteriori. De sammenfaller for stor $n$.",
    },
    {
      question: "Hvilken parametrisering av gamma bruker denne boka?",
      options: ["Skala: gamma$(\\alpha,\\beta)$ med $E=\\alpha\\beta$", "Rate: gamma$(\\alpha,\\lambda)$ med forventning $E=\\alpha\\lambda$ i stedet", "Standardavvik: gamma$(\\alpha,\\sigma)$ parametrisert ved spredningen", "Log-skala: gamma$(\\alpha,\\log\\beta)$ med logaritmert skalaparameter"],
      explanation: "Boka bruker skala-formen med $E=\\alpha\\beta$ og $\\text{Var}=\\alpha\\beta^2$, i tråd med kap. 0.2; et rate-oppsett gir samme svar med $\\beta=1/\\lambda$.",
    },
    {
      question: "Apriori gamma$(3,2)$, $n=10$ Poisson-observasjoner med $s=45$. Hva er Bayes-estimatoren?",
      options: ["$48/10{,}5=4{,}571$, fra gamma$(48,2/21)$", "$45/10=4{,}5$, som egentlig bare er ML-estimatet $\\bar x$", "$3\\cdot2=6$, som bare er apriori-forventningen $\\alpha\\beta$", "$48\\cdot10{,}5=504$, altså form ganget med feil skala"],
      explanation: "Aposteriori er gamma$(\\alpha+s,\\ \\beta/(1+n\\beta))=$ gamma$(48,\\ 2/21)$, så $\\hat\\lambda_{\\text{Bayes}}=48\\cdot(2/21)=48/10{,}5=4{,}571$.",
    },
    {
      question: "Hva betyr tegnet $\\propto$ i $\\pi(\\theta\\mid x)\\propto\\pi(\\theta)L(\\theta)$?",
      options: ["Proporsjonal med — faktorer uten $\\theta$ droppes", "At venstre og høyre side er nøyaktig like for enhver konstant", "At venstre side er mye mindre enn høyre side i uttrykket", "At aposteriorifordelingen er tilnærmet normalfordelt her"],
      explanation: "$\\propto$ betyr proporsjonal; alle faktorer som ikke inneholder $\\theta$ er en konstant som normeringen tar hånd om.",
    },
    {
      question: "Hva representerer apriori-parametrene $\\alpha$ og $1/\\beta$ intuitivt i Poisson–gamma?",
      options: ["Som pseudo-observasjoner: en forhåndssum og et forhåndsantall, der ekte data $(s,n)$ legges oppå og overtar for stor $n$", "Den eksakte variansen til de observerte dataene i utvalget", "Antall frihetsgrader man bruker i en tilhørende $t$-test", "Standardfeilen til ML-estimatet regnet før dataene kom inn"],
      explanation: "$\\alpha$ virker som en forhåndssum og $1/\\beta$ som et forhåndsantall observasjoner; ekte data ($s$, $n$) legges oppå og overtar for stor $n$.",
    },
    {
      question: "Hvilket sensorpoeng bør du alltid nevne i et Bayes-punkt?",
      options: ["At Bayes-estimatoren nærmer seg ML når $n$ er stor", "At apriorifordelingen alltid dominerer aposteriori uansett $n$", "At normeringskonstanten alltid må integreres ut for hånd", "At gammafordelingen aldri kan være konjugert til Poisson"],
      explanation: "Å knytte Bayes til ML — de smelter sammen når dataene overdøver apriorien — er et fast delpoeng i løsningsforslagene.",
    },
  ],
  'stk1110-1-5': [
    {
      question: "Hva er det obligatoriske siste trinnet i ML-kjeden som oftest glemmes?",
      options: ["Bekrefte at $\\ell''(\\hat\\theta)<0$, altså at punktet er et maksimum", "Ta logaritmen av likelihooden", "Sette scoren $s(\\theta)$ lik null", "Skrive likelihooden som et produkt av tetthetene før man tar den deriverte scoren"],
      explanation: "Løsning av $s(\\hat\\theta)=0$ gir bare et stasjonærpunkt; maksimumsbekreftelsen $\\ell''(\\hat\\theta)<0$ er det siste, obligatoriske trinnet.",
    },
    {
      question: "En estimator skrives $\\hat\\Theta$ (stor bokstav) og et estimat $\\hat\\theta$ (tall). Hva er riktig?",
      options: ["$\\hat\\Theta$ er en stokastisk variabel med varians; $\\hat\\theta$ er ett fast tall", "Begge er tilfeldige variabler med samme varians", "$\\hat\\theta$ (liten bokstav) har en varians, mens $\\hat\\Theta$ (stor bokstav) bare er ett observert tall", "De betyr det samme og kan brukes om hverandre"],
      explanation: "Estimatoren er en funksjon av de tilfeldige dataene (stokastisk, har varians); estimatet er tallet den gir på ett datasett.",
    },
    {
      question: "ML-estimatorens tilnærmede fordeling for stor $n$ er $\\hat\\theta\\approx N(\\theta,1/(nI(\\theta)))$. Hva er det andre argumentet?",
      options: ["Variansen til ML-estimatoren", "Standardavviket til ML-estimatoren", "Fisher-informasjonen $I(\\theta)$", "Konfidensnivået $1-\\alpha$"],
      explanation: "I notasjonen $N(\\mu,\\sigma^2)$ er andre argument alltid variansen; her $1/(nI(\\theta))$.",
    },
    {
      question: "Fisher-informasjonen i én observasjon defineres som:",
      options: ["$I(\\theta)=-E[\\partial^2\\log f(X;\\theta)/\\partial\\theta^2]$", "$I(\\theta)=\\partial^2\\log f(x;\\theta)/\\partial\\theta^2$ i estimatet", "$I(\\theta)=E[\\partial^2\\log f(X;\\theta)/\\partial\\theta^2]$", "$I(\\theta)=nI_1(\\theta)$ for én observasjon"],
      explanation: "Fisher-info er den forventede negative andrederiverte. Uten minustegn får du feil fortegn; uten forventning får du observert informasjon.",
    },
    {
      question: "Hva er forholdet mellom $I(\\theta)$ (én observasjon) og informasjonen i hele utvalget?",
      options: ["$I_n(\\theta)=nI(\\theta)$", "$I_n(\\theta)=I(\\theta)/n$", "$I_n(\\theta)=I(\\theta)$ uansett $n$", "$I_n(\\theta)=n^2 I(\\theta)$"],
      explanation: "Informasjonen er additiv for uavhengige observasjoner, så $n$ observasjoner gir $n$ ganger informasjonen i én.",
    },
    {
      question: "I et Wald-konfidensintervall $\\hat\\theta\\pm z_{\\alpha/2}\\,se$, hvorfor brukes $z$ og ikke $t$?",
      options: ["Fordi normalformen kommer fra ML-asymptotikken (sentralgrenseteoremet)", "Fordi standardavviket $\\sigma$ er estimert med utvalgsstandardavviket $S$ fra de samme observasjonene", "Fordi utvalget alltid er lite", "Fordi $t$ bare gjelder for andeler"],
      explanation: "Wald hviler på at ML-estimatoren er tilnærmet normal via CLT; $t_{n-1}$ hører derimot til et normalgjennomsnitt med estimert $\\sigma$.",
    },
    {
      question: "For Poisson$(\\lambda)$ er Fisher-informasjonen i én observasjon:",
      options: ["$I(\\lambda)=1/\\lambda$", "$I(\\lambda)=1/\\lambda^2$", "$I(\\lambda)=\\lambda$", "$I(\\lambda)=1/(\\lambda(1-\\lambda))$"],
      explanation: "$\\log f=-\\lambda+x\\log\\lambda-\\log x!$ gir andrederivert $-x/\\lambda^2$; forventning med $E(X)=\\lambda$ gir $I(\\lambda)=1/\\lambda$.",
    },
    {
      question: "Standardfeilen til en ML-estimator er $se(\\hat\\theta)=\\sqrt{1/(nI(\\hat\\theta))}$. Hvorfor står $\\hat\\theta$ og ikke $\\theta$ i uttrykket?",
      options: ["Den sanne $\\theta$ er ukjent, så vi plugger inn estimatet", "Fordi standardfeilen $se$ egentlig måler skjevheten til estimatoren, ikke spredningen rundt forventningen", "Fordi $I$ alltid evalueres i null", "For å gjøre intervallet symmetrisk"],
      explanation: "Variansen er $1/(nI(\\theta))$ med sann $\\theta$; siden den er ukjent, setter standardfeilen inn estimatet $\\hat\\theta$.",
    },
    {
      question: "Cramér–Raos nedre grense sier at for enhver forventningsrett estimator $T$ for $\\theta$:",
      options: ["$\\text{Var}(T)\\ge 1/(nI(\\theta))$", "$\\text{Var}(T)\\le 1/(nI(\\theta))$", "$\\text{Var}(T)=nI(\\theta)$", "$E(T)\\ge\\theta$"],
      explanation: "Ingen forventningsrett estimator har mindre varians enn $1/(nI(\\theta))$; ML oppnår grensen asymptotisk.",
    },
    {
      question: "En oppgave gir en fordeling der standardfeilen selv er proporsjonal med parameteren ($se\\propto\\theta$, eksponential-typen). Hvilket intervall er da mest presist?",
      options: ["Den asymmetriske pivot-formen $[\\hat\\theta/(1+z/\\sqrt n),\\ \\hat\\theta/(1-z/\\sqrt n)]$", "Det symmetriske $\\hat\\theta\\pm z\\,se$", "Et $t$-intervall med $n-1$ frihetsgrader", "Et andels-intervall $\\hat p\\pm z\\sqrt{\\hat p(1-\\hat p)/n}$, som er konstruert nettopp for parameteravhengig spredning"],
      explanation: "Når $se$ avhenger av parameteren, gir pivoten med sann $\\theta$ i nevneren et mer presist, asymmetrisk intervall som også unngår negative grenser.",
    },
    {
      question: "Invariansprinsippet sier at ML-estimatoren for $\\psi=g(\\theta)$ er:",
      options: ["$\\hat\\psi=g(\\hat\\theta)$ — sett ML-estimatoren rett inn", "$\\hat\\psi=g^{-1}(\\hat\\theta)$", "Funnet ved en helt ny ML-kjede for $\\psi$", "$\\hat\\psi=g(\\theta)$ med sann $\\theta$"],
      explanation: "ML er invariant under omparametrisering: du setter bare $\\hat\\theta$ inn i $g$, uten ny derivasjon.",
    },
    {
      question: "For Rayleigh$(\\theta)$ med $E(X^2)=2\\theta^2$ er Fisher-informasjonen:",
      options: ["$I(\\theta)=4/\\theta^2$", "$I(\\theta)=1/\\theta^2$", "$I(\\theta)=2/\\theta^2$", "$I(\\theta)=\\theta^2/4$"],
      explanation: "$\\partial^2\\log f/\\partial\\theta^2=2/\\theta^2-3x^2/\\theta^4$; med $E(X^2)=2\\theta^2$ blir $I(\\theta)=-2/\\theta^2+6/\\theta^2=4/\\theta^2$.",
    },
    {
      question: "Momentmetoden for én ukjent parameter går ut på å:",
      options: ["Sette teoretisk moment $E(X)$ lik empirisk $\\bar X$ og løse", "Maksimere likelihooden $L(\\theta)$", "Minimere kvadratavvikene $\\sum(x_i-\\bar x)^2$", "Sette scoren lik null"],
      explanation: "Momentmetoden matcher første teoretiske moment $E(X)$ med utvalgsgjennomsnittet og løser for parameteren.",
    },
    {
      question: "For uniform på $[0,\\theta]$ svikter score-metoden. Hva er ML-estimatoren?",
      options: ["$\\hat\\theta=\\max_i X_i=X_{(n)}$", "$\\hat\\theta=2\\bar X$", "$\\hat\\theta=\\bar X$", "$\\hat\\theta=n/\\sum X_i$"],
      explanation: "Støtten avhenger av $\\theta$, så $L(\\theta)=\\theta^{-n}$ er avtakende og maksimeres ved den minste tillatte verdien — den største observasjonen.",
    },
    {
      question: "Når skal du sammenligne to estimatorer på MSE i stedet for varians?",
      options: ["Så snart minst én av dem er skjev", "Alltid, uansett skjevhet", "Bare når begge er forventningsrette", "Bare når variansene er like"],
      explanation: "MSE $=\\text{Var}+b^2$ veier bom mot spredning; ved forskjellig skjevhet er varians alene misvisende.",
    },
    {
      question: "En ML-estimator gir $\\hat\\sigma^2=\\frac1n\\sum(X_i-\\bar X)^2$ i normalmodellen. Er den forventningsrett for $\\sigma^2$?",
      options: ["Nei, den er skjev med $b=-\\sigma^2/n$; $S^2$ (divisor $n-1$) er forventningsrett", "Ja, alle ML-estimatorer er forventningsrette fordi de per konstruksjon maksimerer sannsynligheten for de observerte dataene", "Ja, fordi den maksimerer likelihooden", "Nei, den er skjev med $b=+\\sigma^2/n$"],
      explanation: "ML deler på $n$ og undervurderer variansen; forventningen er $\\frac{n-1}{n}\\sigma^2$, så skjevheten er $-\\sigma^2/n$. ML garanterer ikke forventningsretthet.",
    },
    {
      question: "I Poisson–gamma-konjugering med gamma$(\\alpha,\\beta)$-apriori (skala) og datasum $s=\\sum x_i$, hva er aposteriorifordelingen?",
      options: ["gamma$(\\alpha+s,\\ \\beta/(1+n\\beta))$", "gamma$(\\alpha+n,\\ \\beta/(1+s\\beta))$", "gamma$(\\alpha s,\\ \\beta n)$", "Poisson$(\\alpha+s)$"],
      explanation: "Poisson-likelihooden $\\lambda^s e^{-n\\lambda}$ samlet med gamma-kjernen gir form $\\alpha+s$ og skala $\\beta/(1+n\\beta)$.",
    },
    {
      question: "Bayes-estimatoren (under kvadratisk tap) er:",
      options: ["Aposteriori forventning $E(\\theta\\mid x)$", "Aposteriori-toppen (modus)", "ML-estimatet $\\hat\\theta_{ML}$", "Apriori-forventningen $\\alpha\\beta$"],
      explanation: "Under kvadratisk tap er den optimale Bayes-estimatoren aposteriori forventning; for gamma$(\\alpha',\\beta')$ er den $\\alpha'\\beta'$.",
    },
    {
      question: "Hva skjer med Bayes-estimatoren i Poisson–gamma når $n$ blir stor?",
      options: ["Den nærmer seg ML-estimatet $\\bar x$ fordi dataene overdøver apriorien", "Den nærmer seg apriori-forventningen $\\alpha\\beta$ fordi apriorien får stadig mer å si etter hvert som utvalget vokser", "Den blir eksakt lik apriori-modus", "Den divergerer"],
      explanation: "Bayes er et vektet snitt av $\\bar x$ og $\\alpha\\beta$ med datavekt $w=n\\beta/(1+n\\beta)\\to1$, så Bayes $\\to$ ML.",
    },
    {
      question: "For eksponential med forventning $\\theta$ er $I(\\theta)=1/\\theta^2$. Hva blir standardfeilen $se(\\hat\\theta)$?",
      options: ["$\\hat\\theta/\\sqrt n$", "$1/(\\hat\\theta\\sqrt n)$", "$\\hat\\theta^2/n$", "$\\sqrt{\\hat\\theta/n}$"],
      explanation: "$se=\\sqrt{1/(nI(\\hat\\theta))}=\\sqrt{\\hat\\theta^2/n}=\\hat\\theta/\\sqrt n$.",
    },
    {
      question: "En estimator er konsistent hvis:",
      options: ["$\\hat\\Theta_n\\xrightarrow{P}\\theta$ når $n\\to\\infty$ (typisk: forventningsrett og varians mot 0)", "$E(\\hat\\Theta)=\\theta$ for enhver utvalgsstørrelse $n$, altså at estimatoren treffer eksakt i gjennomsnitt uansett datamengde", "Variansen er minst mulig for fast $n$", "Den maksimerer likelihooden"],
      explanation: "Konsistens er konvergens i sannsynlighet mot $\\theta$; en praktisk sjekk er (asymptotisk) forventningsrett + varians mot 0, via Tsjebysjeff.",
    },
    {
      question: "En besvarelse bruker normaltilnærming for ML-estimatoren, men nevner ikke hvorfor $\\hat\\theta$ er normal. Hva mangler ifølge sensorkravet?",
      options: ["En eksplisitt henvisning til ML-asymptotikken/sentralgrenseteoremet", "En figur av tettheten", "Et $t$-kvantil i stedet for $z$", "Beregning av apriorifordelingen"],
      explanation: "Sensor krever at du sier hvorfor normalformen gjelder — det er ML-estimatorens asymptotiske fordeling (CLT), ikke en selvfølge.",
    },
    {
      question: "Momentestimatoren $\\hat\\theta_{\\text{mom}}=\\bar X\\sqrt{2/\\pi}$ for Rayleigh er eksakt forventningsrett, mens ML-estimatoren $\\sqrt{\\sum X_i^2/(2n)}$ er:",
      options: ["Bare asymptotisk forventningsrett (svak nedadskjevhet for lite $n$), men mer effisient", "Eksakt forventningsrett for enhver utvalgsstørrelse $n$ og samtidig mindre effisient enn momentestimatoren i denne modellen", "Alltid skjev og aldri brukbar", "Identisk med momentestimatoren"],
      explanation: "Kvadratrota gir ML en liten nedadskjevhet for endelig $n$ (den forsvinner asymptotisk), men ML har mindre varians og er dermed mer effisient.",
    },
    {
      question: "Et 95 % konfidensintervall for $\\theta$ betyr korrekt at:",
      options: ["Prosedyren fanger $\\theta$ i 95 % av gjentatte utvalg", "Det er 95 % sannsynlig at $\\theta$ ligger i akkurat dette intervallet", "$\\theta$ er stokastisk med 95 % sannsynlighet innenfor", "95 % av dataene ligger i intervallet"],
      explanation: "$\\theta$ er en fast (ukjent) størrelse; det er *prosedyren* som har 95 % dekningsgrad over gjentatte utvalg.",
    },
    {
      question: "Ved invarians-transform av et konfidensintervall $[L,U]$ for $\\theta$ til raten $\\lambda=1/\\theta$, hva skjer?",
      options: ["Endepunktene bytter plass fordi $g(\\theta)=1/\\theta$ er avtakende: $[1/U,\\ 1/L]$", "Intervallet blir $[1/L,\\ 1/U]$ i samme rekkefølge", "Man må regne ut en helt ny Fisher-informasjon for $\\lambda$ og bygge konfidensintervallet fra bunnen av på nytt", "Intervallet blir symmetrisk om $1/\\hat\\theta$"],
      explanation: "For en monoton avtakende funksjon bevares dekningen, men øvre og nedre endepunkt bytter plass; ingen ny ML- eller Fisher-regning trengs.",
    },
  ],
  'stk1110-2-1': [
    {
      question: "Hvorfor bruker vi t-fordelingen (ikke z) i intervallet $\\bar X\\pm t_{n-1,\\alpha/2}\\,S/\\sqrt n$?",
      options: ["Fordi $\\sigma$ er ukjent og erstattet med den stokastiske $S$", "Fordi t-fordelingen alltid gir smalere intervall enn z", "Fordi $\\bar X$ ikke er normalfordelt for små utvalg", "Fordi t-fordelingen kreves for alle andels-intervaller"],
      explanation: "Når $\\sigma$ estimeres med $S$, blir nevneren stokastisk og halene tyngre — pivoten blir $t_{n-1}$, ikke $N(0,1)$.",
    },
    {
      question: "Hvor mange frihetsgrader har t-intervallet for forventningen fra ett utvalg med $n$ observasjoner?",
      options: ["$n-1$", "$n$", "$n-2$", "$n+1$"],
      explanation: "Ett estimert senter ($\\bar X$) binder én frihetsgrad, og $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$ gir $n-1$.",
    },
    {
      question: "Hva er riktig kvantil i et tosidig 95 % t-intervall med 15 frihetsgrader?",
      options: ["$t_{15,\\,0{,}025}$", "$t_{15,\\,0{,}05}$", "$t_{16,\\,0{,}025}$", "$z_{0{,}025}$"],
      explanation: "Tosidig 95 % gir $\\alpha/2=0{,}025$ i hver hale, med $n-1=15$ frihetsgrader.",
    },
    {
      question: "Et 95 % konfidensintervall for $\\mu$ betyr korrekt at:",
      options: ["prosedyren fanger den sanne $\\mu$ i 95 % av gjentatte utvalg", "det er 95 % sannsynlig at $\\mu$ ligger i akkurat dette intervallet", "95 % av observasjonene ligger innenfor intervallet", "$\\mu$ er stokastisk og treffer intervallet 95 % av tiden"],
      explanation: "$\\mu$ er et fast tall; sannsynligheten 0,95 hører til metoden over gjentatte utvalg, ikke det enkelte intervallet.",
    },
    {
      question: "Hvorfor bruker Wald-intervallet $\\hat\\theta\\pm z_{\\alpha/2}\\,se$ z-kvantilen og ikke t?",
      options: ["Fordi normalformen er ML-asymptotikken (sentralgrenseteoremet), ikke en eksakt normalmodell", "Fordi ML-estimatoren alltid har flere frihetsgrader tilgjengelig enn utvalgsgjennomsnittet $\\bar X$ har", "Fordi z-kvantilen alltid gir vesentlig mer konservative konfidensintervaller enn t-kvantilen gjør", "Fordi Wald-intervaller etter teorien aldri kan gjelde for data som faktisk er normalfordelte"],
      explanation: "Wald hviler på at MLE er tilnærmet normal i store utvalg — en asymptotisk normaltilnærming bruker z.",
    },
    {
      question: "Standardfeilen til gjennomsnittet i t-intervallet er:",
      options: ["$S/\\sqrt n$", "$S/n$", "$\\sigma/\\sqrt n$", "$S^2/\\sqrt n$"],
      explanation: "$se(\\bar X)=S/\\sqrt n$; det sanne $\\sigma$ er ukjent, så vi bruker $S$.",
    },
    {
      question: "Andels-intervallet $\\hat p\\pm z_{\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$ er et spesialtilfelle av:",
      options: ["Wald-intervallet for en ML-estimator", "t-intervallet for en forventning", "khikvadrat-intervallet for en varians", "et eksakt pivot-intervall for en rate"],
      explanation: "$\\hat p$ er ML-estimatoren for binomisk med $I(p)=1/[p(1-p)]$, så $se=\\sqrt{1/(nI(\\hat p))}=\\sqrt{\\hat p(1-\\hat p)/n}$.",
    },
    {
      question: "Hvilken pivot står bak khikvadrat-intervallet for variansen?",
      options: ["$(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$", "$(\\bar X-\\mu)/(S/\\sqrt n)\\sim t_{n-1}$", "$nS^2/\\sigma^2\\sim\\chi^2_{n}$", "$(\\hat p-p)/se\\sim N(0,1)$"],
      explanation: "Den skalerte utvalgsvariansen er khikvadratfordelt med $n-1$ frihetsgrader for normale data.",
    },
    {
      question: "Hvorfor er konfidensintervallet for variansen asymmetrisk om $S^2$?",
      options: ["Fordi khikvadratfordelingen er skjev, så de to $\\alpha/2$-kvantilene ligger ulikt", "Fordi utvalgsvariansen $S^2$ ikke er en forventningsrett estimator for den sanne variansen $\\sigma^2$", "Fordi man etter konvensjon alltid runder den nedre grensen oppover til nærmeste heltall", "Fordi variansen prinsipielt ikke kan estimeres presist fra et endelig utvalg av data"],
      explanation: "Khikvadratfordelingen er ikke symmetrisk, så kvantilene $\\chi^2_{n-1,\\alpha/2}$ og $\\chi^2_{n-1,1-\\alpha/2}$ ligger ulikt langt fra midten.",
    },
    {
      question: "I $\\sigma^2$-intervallet $\\left[\\frac{(n-1)S^2}{\\chi^2_{n-1,\\alpha/2}},\\frac{(n-1)S^2}{\\chi^2_{n-1,1-\\alpha/2}}\\right]$ står den STORE kvantilen i:",
      options: ["nedre grense (nevneren der)", "øvre grense (nevneren der)", "begge grenser likt", "telleren av øvre grense"],
      explanation: "Å dele på et stort tall gir en liten verdi, så den store kvantilen $\\chi^2_{n-1,\\alpha/2}$ gir den nedre grensen.",
    },
    {
      question: "For $n=25$, $\\bar x=100$, $s=10$ og $t_{24,0{,}025}=2{,}064$: hva er 95 %-intervallet for $\\mu$?",
      options: ["$[95{,}87,\\ 104{,}13]$", "$[98{,}00,\\ 102{,}00]$", "$[96{,}08,\\ 103{,}92]$", "$[90{,}00,\\ 110{,}00]$"],
      explanation: "$se=10/5=2$, margin $=2{,}064\\cdot 2=4{,}128$, så $100\\pm 4{,}128$.",
    },
    {
      question: "Hva skjer med bredden på et KI hvis du firedobler utvalgsstørrelsen $n$ (alt annet likt)?",
      options: ["Bredden halveres", "Bredden firedobles", "Bredden er uendret", "Bredden dobles"],
      explanation: "Marginen går som $1/\\sqrt n$; firedobling av $n$ dobler $\\sqrt n$ og halverer dermed bredden.",
    },
    {
      question: "Betingelsen for at normaltilnærmingen i andels-intervallet er god, er typisk:",
      options: ["både $n\\hat p$ og $n(1-\\hat p)$ romslig større enn 5", "at $n$ er større enn 30 uansett hvilken verdi $\\hat p$ tar", "at den estimerte andelen $\\hat p$ ligger svært nær enten 0 eller 1", "at populasjonens sanne standardavvik $\\sigma$ er kjent på forhånd"],
      explanation: "Med få suksesser eller feil blir binomialfordelingen for skjev til at normaltilnærmingen holder.",
    },
    {
      question: "Et ensidig konfidensintervall (bare øvre grense) bruker hvilken kvantil?",
      options: ["$t_{n-1,\\alpha}$ (hele $\\alpha$ i én hale)", "$t_{n-1,\\alpha/2}$ som tosidig", "$z_{\\alpha/2}$ alltid", "$\\chi^2_{n-1,\\alpha/2}$"],
      explanation: "Et ensidig intervall legger hele feilsannsynligheten $\\alpha$ i én hale, så kvantilen er $t_{n-1,\\alpha}$.",
    },
    {
      question: "For et 99 % intervall (i stedet for 95 %) blir intervallet:",
      options: ["bredere, fordi kvantilen er større", "smalere, fordi vi er mer sikre", "uendret i bredde", "alltid asymmetrisk"],
      explanation: "Høyere konfidens krever større kvantil ($t$ eller $z$), som gir større margin og bredere intervall.",
    },
    {
      question: "Hvilken av disse tilsvarer feil frihetsgrad i et ett-utvalgs t-intervall?",
      options: ["Å bruke $n$ i stedet for $n-1$", "Å bruke $n-1$ i stedet for $n-2$", "Å bruke $\\alpha/2$ i hver hale", "Å bruke $S/\\sqrt n$ som standardfeil"],
      explanation: "Ett-utvalgs t-intervall har $n-1$ frihetsgrader; å bruke $n$ er den klassiske df-feilen (§4.6).",
    },
    {
      question: "For Poisson med $I(\\lambda)=1/\\lambda$, $n=50$, $\\bar x=2{,}4$: hva er Wald-standardfeilen $se(\\hat\\lambda)$?",
      options: ["$\\sqrt{2{,}4/50}\\approx 0{,}219$", "$2{,}4/50=0{,}048$", "$\\sqrt{2{,}4}/50\\approx 0{,}031$", "$\\sqrt{2{,}4\\cdot 50}\\approx 10{,}95$"],
      explanation: "$se=\\sqrt{1/(nI(\\hat\\lambda))}=\\sqrt{\\hat\\lambda/n}=\\sqrt{2{,}4/50}$.",
    },
    {
      question: "Hvordan får du et konfidensintervall for standardavviket $\\sigma$ fra intervallet for $\\sigma^2$?",
      options: ["Ta kvadratrot av begge grensene", "Ta kvadratrot bare av øvre grense", "Del begge grensene på $n-1$", "Legg til $\\pm z_{\\alpha/2}$"],
      explanation: "Kvadratrot er monotont voksende, så grensene transformeres direkte; intervallet forblir asymmetrisk.",
    },
    {
      question: "Hvilket intervall passer for forventningen når data er normale og $\\sigma$ er UKJENT?",
      options: ["t-intervallet $\\bar X\\pm t_{n-1,\\alpha/2}S/\\sqrt n$", "Wald-intervallet med z-kvantil og standardfeil fra Fisher-informasjonen", "khikvadrat-intervallet basert på $(n-1)S^2/\\sigma^2$", "andels-intervallet $\\hat p\\pm z_{\\alpha/2}\\sqrt{\\hat p(1-\\hat p)/n}$"],
      explanation: "Normale data + estimert $\\sigma$ gir eksakt t-fordeling med $n-1$ frihetsgrader.",
    },
    {
      question: "Utvalgsvariansen $S^2=\\frac{1}{n-1}\\sum(X_i-\\bar X)^2$ har deleren $n-1$ fordi:",
      options: ["avvikene måles fra $\\bar X$, som binder én frihetsgrad", "$n-1$ alltid gir et mindre tall enn $n$", "det er en konvensjon uten matematisk grunn", "variansen ellers ville blitt negativ"],
      explanation: "Med $n$ som deler ville $S^2$ vært skjevt for $\\sigma^2$; $n-1$ gjør den forventningsrett.",
    },
    {
      question: "Hva er feilmarginen i et symmetrisk konfidensintervall?",
      options: ["Kvantil $\\times$ standardfeil (halve bredden)", "Hele bredden på intervallet", "Standardfeilen alene", "Kvantilen alene"],
      explanation: "Intervallet er estimat $\\pm$ feilmargin, der marginen = kvantil $\\times$ standardfeil.",
    },
    {
      question: "For $n=16$ normale målinger, ukjent $\\sigma$, hvor mange frihetsgrader har khikvadrat-intervallet for $\\sigma^2$?",
      options: ["15", "16", "14", "8"],
      explanation: "Både t- og khikvadrat-intervallet for ett utvalg bruker $n-1=15$.",
    },
    {
      question: "Dualiteten mellom KI og test sier at et tosidig $(1-\\alpha)$-KI inneholder nøyaktig de $\\theta_0$ som:",
      options: ["IKKE forkastes av en tosidig test på nivå $\\alpha$", "forkastes av en tosidig test på nivå $\\alpha$", "gir P-verdi mindre enn $\\alpha$", "ligger mer enn $z_{\\alpha/2}$ standardfeil unna $\\hat\\theta$"],
      explanation: "Verdier utenfor intervallet forkastes; verdier innenfor beholdes — det er CI↔test-dualiteten.",
    },
    {
      question: "t-intervallet for en forventning er relativt robust mot avvik fra normalitet, mens khikvadrat-intervallet for variansen er:",
      options: ["følsomt for ikke-normalitet", "enda mer robust enn t", "helt uavhengig av fordelingsform", "bare gyldig for $n<10$"],
      explanation: "Variansintervallet avhenger sterkt av normalantakelsen; bruk det med forsiktighet ved ikke-normale data.",
    },
    {
      question: "Hvilken størrelse er stokastisk (stor bokstav) i konfidensintervall-teorien?",
      options: ["Estimatoren $\\bar X$", "Parameteren $\\mu$", "Utvalgsstørrelsen $n$", "Konfidensnivået $1-\\alpha$"],
      explanation: "$\\bar X$ er en stokastisk variabel; $\\mu$, $n$ og $1-\\alpha$ er faste. Estimator (stor) skilles fra estimat (tall).",
    },
    {
      question: "For $n=400$, $X=120$ defekte, gir $\\hat p=0{,}30$. Hva er $se(\\hat p)$?",
      options: ["$\\sqrt{0{,}30\\cdot 0{,}70/400}\\approx 0{,}023$", "$0{,}30/400=0{,}00075$", "$\\sqrt{0{,}30/400}\\approx 0{,}027$", "$0{,}30\\cdot 0{,}70=0{,}21$"],
      explanation: "$se(\\hat p)=\\sqrt{\\hat p(1-\\hat p)/n}=\\sqrt{0{,}21/400}$.",
    },
    {
      question: "Hvorfor sier vi at KI-formlene «ligger i formelsamlingen»?",
      options: ["Fordi eksamen tester valg av riktig intervall/kvantil/df, ikke pugging", "Fordi disse formlene i praksis aldri skal måtte brukes på selve eksamen i det hele tatt", "Fordi kvantilene alltid må utledes fra grunnen av selv når du har formelsamlingen tilgjengelig", "Fordi formelsamlingen for STK1110 regnes som et forbudt hjelpemiddel under eksamen"],
      explanation: "Formelsamlingen for STK1110 er tillatt; ferdigheten som testes er å *velge* riktig intervall, kvantil og frihetsgrad.",
    },
    {
      question: "Et symmetrisk Wald-intervall for en positiv parameter kan i prinsippet gi:",
      options: ["en negativ nedre grense (uheldig — asymmetrisk pivot er da bedre)", "en bredde på nøyaktig null uansett hvor stort utvalget er", "en øvre grense som ender opp med å være mindre enn den nedre grensen", "et konfidensintervall som helt mangler måleenhet på grensene sine"],
      explanation: "Fordi Wald er symmetrisk, kan nedre grense bli negativ for en positiv parameter; da foretrekkes en asymmetrisk/eksakt pivot (kap. 1.3/2.5).",
    },
    {
      question: "Hva er den vanligste feilen når man går fra 95 % til et tosidig intervall?",
      options: ["Å bruke $\\alpha$ i stedet for $\\alpha/2$ i kvantilen", "Å regne $\\bar x$ feil", "Å bruke for mange desimaler", "Å velge feil enhet"],
      explanation: "Tosidig intervall krever $\\alpha/2$ i hver hale; å bruke $\\alpha$ gir for smalt intervall.",
    },
    {
      question: "Standardavviket $S$ er, i motsetning til $S^2$, IKKE:",
      options: ["forventningsrett for $\\sigma$", "et anslag på spredningen", "kvadratroten av $S^2$", "brukt i standardfeilen"],
      explanation: "Kvadratrot er ikke-lineær, så selv om $E(S^2)=\\sigma^2$, er $E(S)\\ne\\sigma$ generelt.",
    },
  ],
  'stk1110-2-2': [
    {
      question: "Hva er den korrekte verbale definisjonen av P-verdien?",
      options: ["Sannsynligheten under $H_0$ for et minst like ekstremt utfall som det observerte", "Sannsynligheten for at nullhypotesen $H_0$ faktisk er sann gitt de dataene vi har samlet inn", "Sannsynligheten for at alternativhypotesen $H_a$ er den korrekte hypotesen i denne situasjonen", "Sannsynligheten for å gjøre en type II-feil, altså å beholde en $H_0$ som egentlig er falsk"],
      explanation: "P-verdien beregnes UNDER $H_0$ og måler hvor ekstreme dataene er — ikke sannsynligheten for hypotesen.",
    },
    {
      question: "Signifikansnivået $\\alpha$ er sannsynligheten for å:",
      options: ["forkaste $H_0$ når $H_0$ faktisk er sann (type I-feil)", "beholde $H_0$ når $H_0$ faktisk er falsk (type II-feil)", "forkaste $H_0$ når $H_a$ faktisk er sann (styrken)", "beholde $H_0$ når $H_0$ faktisk er sann (korrekt valg)"],
      explanation: "$\\alpha=P(\\text{forkast }H_0\\mid H_0\\text{ sann})$ er type I-feilraten, valgt på forhånd.",
    },
    {
      question: "Hva innebærer det å 'utlede at nivået blir $\\alpha$' i det ensidige tilfellet?",
      options: ["Vise at $P(T>t_{n-1,\\alpha}\\mid H_0)=\\alpha$", "Sette $\\alpha=0{,}05$ og bruke det uten videre", "Regne P-verdien og sjekke om den er under $\\alpha$", "Vise at styrken $1-\\beta$ er lik $\\alpha$"],
      explanation: "Nivå-utledningen skriver ut forkastningssannsynligheten under $H_0$ og viser at den er nøyaktig $\\alpha$ — det eksplisitte sensorkravet.",
    },
    {
      question: "Hvordan velges retningen (en- eller tosidig) i $H_a$?",
      options: ["Ut fra hva situasjonen ber deg påvise, FØR du ser dataene", "Ut fra hvilken retning observatoren peker etter at du har regnet", "Alltid tosidig for å være på den sikre siden uansett", "Ut fra hvilken retning som gir lavest P-verdi"],
      explanation: "Å velge retning etter dataene ('fiske') ugyldiggjør nivået; retningen følger av spørsmålet.",
    },
    {
      question: "En tosidig test på nivå $\\alpha$ forkaster $H_0:\\mu=\\mu_0$ hvis og bare hvis:",
      options: ["$\\mu_0$ ligger utenfor det tosidige $(1-\\alpha)$-konfidensintervallet", "$\\mu_0$ ligger innenfor det tosidige $(1-\\alpha)$-konfidensintervallet", "P-verdien er større enn $\\alpha$", "estimatet $\\bar x$ er lik $\\mu_0$"],
      explanation: "Det er CI-test-dualiteten: verdier utenfor KI-et forkastes, verdier innenfor beholdes.",
    },
    {
      question: "For en tosidig t-test på nivå $\\alpha$ er forkastningsregelen:",
      options: ["forkast når $|T|>t_{n-1,\\alpha/2}$", "forkast når $T>t_{n-1,\\alpha}$", "forkast når $|T|>t_{n-1,\\alpha}$", "forkast når $T>z_{\\alpha/2}$"],
      explanation: "Tosidig legger $\\alpha/2$ i hver hale, så kritisk verdi er $t_{n-1,\\alpha/2}$ på absoluttverdien.",
    },
    {
      question: "Testobservatoren for forventningen med ukjent $\\sigma$ er:",
      options: ["$T=(\\bar X-\\mu_0)/(S/\\sqrt n)$, med $T\\sim t_{n-1}$ under $H_0$", "$Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$, med $Z\\sim N(0,1)$", "$T=(\\bar X-\\mu_0)/S$, med $T\\sim t_{n}$ under $H_0$", "$T=(\\bar X-\\mu_0)\\sqrt n$, med $T\\sim N(0,1)$"],
      explanation: "Ukjent $\\sigma$ estimeres med $S$; da er observatoren $t_{n-1}$-fordelt under $H_0$.",
    },
    {
      question: "En P-verdi på 0,03 betyr korrekt at:",
      options: ["hvis $H_0$ er sann, er det 3 % sjanse for et minst like ekstremt utfall", "det er 3 % sannsynlig at nullhypotesen $H_0$ er den sanne hypotesen i dette forsøket", "det er dermed hele 97 % sannsynlig at alternativhypotesen $H_a$ må være den sanne", "nøyaktig 3 % av de innsamlede observasjonene ligger i det vi kaller det ekstreme området"],
      explanation: "P-verdien er en halesannsynlighet BEREGNET under $H_0$, ikke en sannsynlighet for selve hypotesen.",
    },
    {
      question: "Vi forkaster $H_0$ når:",
      options: ["P-verdi $<\\alpha$", "P-verdi $>\\alpha$", "P-verdi $=1-\\alpha$", "P-verdi $>0{,}5$"],
      explanation: "Liten P-verdi betyr at dataene er uforenlige med $H_0$; vi forkaster når den er under det valgte nivået.",
    },
    {
      question: "Hva er galt med å konkludere 'vi beholder $H_0$, altså er $H_0$ sann'?",
      options: ["Å ikke forkaste betyr bare utilstrekkelig belegg mot $H_0$, ikke bevis for den", "Ingenting er galt — det å beholde nullhypotesen beviser faktisk at den er sann", "Man skal i praksis alltid forkaste $H_0$ i de tilfellene der P-verdien er stor", "En nullhypotese kan aldri beholdes i en test, den kan bare forkastes eller ikke"],
      explanation: "Fravær av bevis er ikke bevis på fravær; en beholdt $H_0$ er ikke bevist.",
    },
    {
      question: "For en ensidig (høyresidig) test er P-verdien:",
      options: ["$P(T\\ge t_{\\text{obs}}\\mid H_0)$", "$2\\,P(T\\ge |t_{\\text{obs}}|\\mid H_0)$", "$P(T\\le t_{\\text{obs}}\\mid H_0)$", "$1-P(T\\ge t_{\\text{obs}}\\mid H_0)$"],
      explanation: "Ensidig P-verdi er halesannsynligheten i retning av $H_a$; tosidig ville doblet den.",
    },
    {
      question: "I eksempel med $\\bar x=53$, $\\mu_0=50$, $s=6$, $n=25$: hva er t-observatoren?",
      options: ["$2{,}5$", "$3{,}0$", "$0{,}5$", "$1{,}2$"],
      explanation: "$T=(53-50)/(6/\\sqrt{25})=3/1{,}2=2{,}5$.",
    },
    {
      question: "Hvilken feil endrer både forkastningsgrense og P-verdi mest direkte?",
      options: ["Feil retning i $H_a$ (en- mot tosidig)", "Å oppgi konklusjonen i kontekst", "Å regne standardfeilen som $S/\\sqrt n$", "Å bruke $\\bar x$ som estimat"],
      explanation: "Sidethet bestemmer om kvantilen er $\\alpha$ eller $\\alpha/2$, og om P-verdien dobles — feil retning slår rett inn.",
    },
    {
      question: "Hva må trinn 2 i ritualet alltid inkludere?",
      options: ["Observatoren OG dens fordeling under $H_0$ (type og frihetsgrader)", "Bare den ferdig utregnede tallverdien av selve testobservatoren", "Konklusjonen oversatt til situasjonens språk med P-verdi og nivå", "Et fullstendig konfidensintervall for den ukjente parameteren"],
      explanation: "Fordelingen under $H_0$ (med riktige frihetsgrader) er nødvendig for både kritisk verdi og P-verdi.",
    },
    {
      question: "Et resultat er 'statistisk signifikant på 5 %-nivå' når:",
      options: ["P-verdien er mindre enn 0,05", "effekten er stor og praktisk viktig", "utvalget er større enn 30", "konfidensintervallet inneholder $\\mu_0$"],
      explanation: "Signifikans er en terskel på P-verdien; den sier ikke at effekten er stor eller viktig.",
    },
    {
      question: "Hvorfor gir P-verdi-regelen og kritisk-verdi-regelen alltid samme konklusjon?",
      options: ["P-verdi $<\\alpha$ er nøyaktig det samme som at observatoren er i forkastningsområdet", "Fordi den beregnede P-verdien i en test alltid ender opp med å bli lik nivået $\\alpha$", "Fordi den kritiske verdien i enhver hypotesetest alltid har verdien 1,96 uansett", "De to reglene gir faktisk bare samme konklusjon når testen er tosidig, ikke ellers"],
      explanation: "De to reglene er to formuleringer av samme grense, derfor ekvivalente.",
    },
    {
      question: "Med kjent $\\sigma$ blir testobservatoren og nullfordelingen:",
      options: ["$Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$, $Z\\sim N(0,1)$", "$T=(\\bar X-\\mu_0)/(S/\\sqrt n)$, $T\\sim t_{n-1}$", "$Z=(\\bar X-\\mu_0)/\\sigma$, $Z\\sim t_{n}$", "$Z=(\\bar X-\\mu_0)\\sqrt n$, $Z\\sim \\chi^2_{n-1}$"],
      explanation: "Når $\\sigma$ er kjent, er standardiseringen eksakt normal — z-test.",
    },
    {
      question: "For den tosidige nivå-utledningen: $P(|Z|>z_{\\alpha/2}\\mid H_0)$ er lik:",
      options: ["$\\alpha/2+\\alpha/2=\\alpha$", "$\\alpha/2$", "$2\\alpha$", "$1-\\alpha$"],
      explanation: "Symmetrisk nullfordeling gir $\\alpha/2$ i hver hale, som summerer til $\\alpha$.",
    },
    {
      question: "Siste trinn i ritualet (konklusjon) skal:",
      options: ["oversette forkast/behold til situasjonens språk, med P-verdi og nivå", "kun oppgi den nakne konklusjonen om $T$ er større enn den kritiske verdien", "gjenta de to hypotesene $H_0$ og $H_a$ slik de ble formulert i trinn 1", "regne det tosidige konfidensintervallet for parameteren helt på nytt igjen"],
      explanation: "Sensor krever en konklusjon i kontekst, ikke bare «forkast $H_0$».",
    },
    {
      question: "Et 95 %-KI er $[48{,}2,\\ 51{,}8]$. Forkastes $H_0:\\mu=50$ tosidig på 5 %-nivå?",
      options: ["Nei, fordi 50 ligger innenfor intervallet", "Ja, fordi 50 er nær midten", "Ja, fordi intervallet er smalt", "Kan ikke avgjøres fra KI-et alene"],
      explanation: "Dualiteten: 50 er innenfor $\\Rightarrow$ $H_0:\\mu=50$ kan ikke forkastes.",
    },
    {
      question: "Type II-feil er å:",
      options: ["beholde $H_0$ når den faktisk er falsk", "forkaste $H_0$ når den faktisk er sann", "velge feil retning i $H_a$", "regne P-verdien feil"],
      explanation: "Type II ($\\beta$) er en bommet alarm; styrken er $1-\\beta$.",
    },
    {
      question: "Hvorfor er 'statistisk signifikant' ikke det samme som 'stor effekt'?",
      options: ["Med stort $n$ kan selv en liten effekt gi liten P-verdi", "Signifikans krever alltid en stor effekt", "P-verdien måler effektstørrelsen direkte", "Store effekter gir alltid P-verdi over 0,05"],
      explanation: "P-verdien avhenger av både effekt og $n$; rapporter alltid estimatet ved siden av.",
    },
    {
      question: "Nullhypotesen formuleres vanligvis som:",
      options: ["en likhet, f.eks. $H_0:\\mu=\\mu_0$", "en streng ulikhet, f.eks. $H_0:\\mu>\\mu_0$", "en sannsynlighet, f.eks. $P(H_0)=0{,}5$", "et konfidensintervall"],
      explanation: "$H_0$ er 'status quo' som en likhet; ulikheten hører til $H_a$.",
    },
    {
      question: "Kritisk verdi for en ensidig t-test på nivå $\\alpha$ er valgt slik at:",
      options: ["forkastningssannsynligheten under $H_0$ blir nøyaktig $\\alpha$", "den beregnede P-verdien i testen alltid ender opp med å bli lik $\\alpha$", "teststyrken $1-\\beta$ under alternativhypotesen alltid ender opp lik $\\alpha$", "testobservatoren for ethvert utvalg alltid faller i det signifikante området"],
      explanation: "Kritisk verdi $t_{n-1,\\alpha}$ er nettopp kvantilen som gir haleareal $\\alpha$ under $H_0$.",
    },
    {
      question: "Uten programvare avgrenser man ofte P-verdien ved å:",
      options: ["plassere den mellom to tabellkvantiler, f.eks. $0{,}01<P<0{,}025$", "sette den nøyaktig lik den nærmeste kvantilverdien man finner i tabellen", "anta uten videre at P-verdien i enhver test alltid er lik nivået 0,05", "regne P-verdien om til et fullstendig konfidensintervall for parameteren"],
      explanation: "Tabellene gir intervaller; det holder ofte å vite om P-verdi $<\\alpha$.",
    },
    {
      question: "Med $\\bar x=98{,}5$, $\\mu_0=100$, kjent $\\sigma=5$, $n=40$: hva er z-observatoren (ca.)?",
      options: ["$-1{,}90$", "$-1{,}50$", "$-0{,}30$", "$-3{,}00$"],
      explanation: "$Z=(98{,}5-100)/(5/\\sqrt{40})=-1{,}5/0{,}791\\approx -1{,}90$.",
    },
    {
      question: "For en skjev nullfordeling (som $\\chi^2$ eller $F$) må den tosidige P-verdien:",
      options: ["håndtere de to halene hver for seg (ikke bare doble)", "alltid være dobbelt av den ensidige", "settes lik den ensidige", "regnes som $1-\\alpha$"],
      explanation: "Doblingsregelen gjelder symmetriske fordelinger; skjeve haler er ulike.",
    },
    {
      question: "Hva er nullfordelingen?",
      options: ["Fordelingen til observatoren når $H_0$ er sann", "Fordelingen til dataene før innsamling", "Fordelingen til P-verdien under $H_a$", "Fordelingen til estimatet $\\bar x$ over alle hypoteser"],
      explanation: "Alt (kritisk verdi, P-verdi, nivå) leses av observatorens fordeling under $H_0$.",
    },
    {
      question: "En lavere $\\alpha$ (f.eks. 0,01 i stedet for 0,05) gir:",
      options: ["færre type I-feil, men lavere styrke (flere type II-feil)", "både færre type I- og type II-feil", "høyere styrke og flere falske alarmer", "ingen endring i noen feilrate"],
      explanation: "Å gjøre det vanskeligere å forkaste reduserer falske alarmer, men gjør reelle effekter vanskeligere å oppdage.",
    },
    {
      question: "Hvilken tolkning av dualiteten er riktig?",
      options: ["KI-et inneholder nettopp de $\\mu_0$ som en tosidig test ikke forkaster", "Konfidensintervallet inneholder derimot nettopp de verdiene $\\mu_0$ som faktisk forkastes", "Konfidensintervallet og den tosidige testen kan i praksis gi motstridende svar", "Dualiteten mellom test og intervall gjelder utelukkende for ensidige tester"],
      explanation: "Det tosidige $(1-\\alpha)$-KI-et er mengden av ikke-forkastede nullverdier — kryssjekken.",
    },
  ],
  'stk1110-2-3': [
    {
      question: "Hvor mange frihetsgrader har den pooled to-utvalgs t-testen med gruppestørrelser $m$ og $n$?",
      options: ["$m+n-2$", "$m+n-1$", "$m+n$", "$n-1$"],
      explanation: "Hver gruppe mister én frihetsgrad til sitt eget gjennomsnitt, så samlet $m+n-2$.",
    },
    {
      question: "Pooled varians $S_p^2$ regnes som:",
      options: ["$\\frac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$", "$\\frac{S_1^2+S_2^2}{2}$", "$\\frac{(m-1)S_1^2+(n-1)S_2^2}{m+n}$", "$\\frac{mS_1^2+nS_2^2}{m+n-2}$"],
      explanation: "Variansene vektes med sine egne frihetsgrader $(m-1)$ og $(n-1)$, delt på $m+n-2$.",
    },
    {
      question: "Hva er den klassiske fellen ved parvise data?",
      options: ["Å behandle dem som to uavhengige utvalg i stedet for å redusere til differanser", "Å redusere dem til differanser i stedet for å bruke to-utvalgstest", "Å bruke z i stedet for t på differansene", "Å regne pooled varians av differansene"],
      explanation: "Parvise data er koblet; de skal reduseres til $D_i$ og testes som ett utvalg med $n-1$ df.",
    },
    {
      question: "For parvise data med $n$ par har den parvise t-testen hvor mange frihetsgrader?",
      options: ["$n-1$", "$2n-2$", "$2n-1$", "$n$"],
      explanation: "Differansene $D_i$ er ETT utvalg av størrelse $n$ (antall par), så df er $n-1$.",
    },
    {
      question: "Under $H_0:p_1=p_2$ skal andelstestens standardfeil bruke:",
      options: ["pooled $\\hat p=(x_1+x_2)/(n_1+n_2)$", "separate $\\hat p_1$ og $\\hat p_2$", "gjennomsnittet $(\\hat p_1+\\hat p_2)/2$", "den største av $\\hat p_1,\\hat p_2$"],
      explanation: "$H_0$ antar felles $p$, så vi slår sammen alle suksessene til ett pooled estimat.",
    },
    {
      question: "To-utvalgs t-observatoren er:",
      options: ["$T=\\frac{\\bar Y_1-\\bar Y_2}{S_p\\sqrt{1/m+1/n}}\\sim t_{m+n-2}$", "$T=\\frac{\\bar Y_1-\\bar Y_2}{S_p\\sqrt{1/m-1/n}}\\sim t_{m+n-2}$", "$T=\\frac{\\bar Y_1-\\bar Y_2}{S_p/\\sqrt{m+n}}\\sim t_{m+n-1}$", "$Z=\\frac{\\bar Y_1-\\bar Y_2}{S_p\\sqrt{1/m+1/n}}\\sim N(0,1)$"],
      explanation: "Standardfeilen har $1/m+1/n$ (pluss) under rota, og fordelingen er $t_{m+n-2}$.",
    },
    {
      question: "For uavhengige grupper er $\\operatorname{Var}(\\bar Y_1-\\bar Y_2)$ lik:",
      options: ["$\\sigma^2(1/m+1/n)$", "$\\sigma^2(1/m-1/n)$", "$\\sigma^2/(m+n)$", "$\\sigma^2(m+n)$"],
      explanation: "Variansene av de to uavhengige gjennomsnittene legges sammen, også for en differanse.",
    },
    {
      question: "Hvorfor er en parvis test ofte kraftigere enn et uavhengig oppsett?",
      options: ["Differansene fjerner individvariasjonen, så standardfeilen blir mindre", "Fordi den bruker flere frihetsgrader", "Fordi den alltid gir lavere P-verdi uansett data", "Fordi den ikke krever normalitet"],
      explanation: "Koblingen tar bort variasjonen mellom enheter, som ellers øker støyen.",
    },
    {
      question: "I et konfidensintervall for andelsdifferansen $p_1-p_2$ brukes:",
      options: ["separate $\\hat p_1$ og $\\hat p_2$ (ingen likhetsantakelse)", "pooled $\\hat p$ som i testen", "bare $\\hat p_1$", "en t-kvantil med $n_1+n_2-2$ df"],
      explanation: "KI antar ikke $p_1=p_2$, så vi bruker de separate estimatene; pooled brukes bare i testen under $H_0$.",
    },
    {
      question: "Den parvise t-observatoren er:",
      options: ["$T=\\bar D/(S_D/\\sqrt n)\\sim t_{n-1}$", "$T=\\bar D/(S_D/\\sqrt{2n})\\sim t_{2n-2}$", "$T=\\bar D\\cdot S_D/\\sqrt n\\sim t_{n-1}$", "$Z=\\bar D/(S_D/\\sqrt n)\\sim N(0,1)$"],
      explanation: "Differansene behandles som ett utvalg: gjennomsnitt over standardfeil, $t_{n-1}$.",
    },
    {
      question: "Med $x_1=70/200$ og $x_2=45/180$: hva er pooled $\\hat p$?",
      options: ["$115/380\\approx 0{,}303$", "$(0{,}35+0{,}25)/2=0{,}30$", "$70/380\\approx 0{,}184$", "$115/200=0{,}575$"],
      explanation: "Pooled $\\hat p=(x_1+x_2)/(n_1+n_2)=(70+45)/(200+180)$.",
    },
    {
      question: "En to-utvalgs t-test er ekvivalent med:",
      options: ["en enkel regresjon på en dummy $x\\in\\{0,1\\}$ (test av $\\beta_1=0$)", "en multippel regresjon med to prediktorer", "en khikvadrat-test for variansen", "en parvis t-test på de samme dataene"],
      explanation: "Koder man gruppen som dummy, blir $\\hat\\beta_1=\\bar Y_1-\\bar Y_2$ og t-testen for $\\beta_1=0$ identisk med to-utvalgstesten.",
    },
    {
      question: "Hva forutsetter pooling av variansene?",
      options: ["at de to gruppene har lik varians $\\sigma^2$", "at de to gruppene har lik forventning", "at gruppene er like store", "at dataene er parvise"],
      explanation: "Pooled varians er ett felles anslag på $\\sigma^2$ — bare meningsfullt hvis variansene faktisk er like.",
    },
    {
      question: "Blodtrykk måles hos 20 pasienter FØR og ETTER medisin. Hvilket oppsett?",
      options: ["Parvis t-test på differansene, $t_{19}$", "To-utvalgs pooled t, $t_{38}$", "To-utvalgs andels-z", "Khikvadrat-test, $\\chi^2_{19}$"],
      explanation: "Samme pasient måles to ganger — koblede (parvise) data, redusert til differanser.",
    },
    {
      question: "Reaksjonstid hos 15 menn og 18 kvinner (ulike personer). Hvilket oppsett og df?",
      options: ["To-utvalgs pooled t med $15+18-2=31$ frihetsgrader", "Parvis t med 14 frihetsgrader", "To-utvalgs andels-z uten df", "Ett-utvalgs t med 32 frihetsgrader"],
      explanation: "Ulike, uavhengige personer i to grupper → pooled to-utvalg med $m+n-2=31$.",
    },
    {
      question: "Konfidensintervallet for $\\mu_1-\\mu_2$ (pooled) er:",
      options: ["$(\\bar Y_1-\\bar Y_2)\\pm t_{m+n-2,\\alpha/2}\\,S_p\\sqrt{1/m+1/n}$", "$(\\bar Y_1-\\bar Y_2)\\pm z_{\\alpha/2}\\,S_p\\sqrt{1/m+1/n}$", "$(\\bar Y_1-\\bar Y_2)\\pm t_{m+n-2,\\alpha/2}\\,S_p/\\sqrt{m+n}$", "$(\\bar Y_1-\\bar Y_2)\\pm t_{m+n,\\alpha/2}\\,S_p\\sqrt{1/m-1/n}$"],
      explanation: "Samme form som ett-utvalgs t-intervall, men på differansen med df $m+n-2$.",
    },
    {
      question: "Inneholder KI-et for $\\mu_1-\\mu_2$ verdien 0, betyr det at:",
      options: ["$H_0:\\mu_1=\\mu_2$ ikke kan forkastes tosidig på nivå $\\alpha$", "$H_0:\\mu_1=\\mu_2$ forkastes tosidig på nivå $\\alpha$", "gruppene har nøyaktig lik varians", "utvalgene er for små"],
      explanation: "Dualiteten: 0 (ingen forskjell) inne i KI-et betyr at $H_0$ ikke forkastes.",
    },
    {
      question: "Andels-z-testen krever for normaltilnærmingen at:",
      options: ["antall suksesser OG feil i hver gruppe er romslig over 5", "gruppene er like store", "$\\hat p_1=\\hat p_2$", "$n_1+n_2>1000$"],
      explanation: "For få suksesser/feil i en gruppe gjør normaltilnærmingen upålitelig.",
    },
    {
      question: "Slitasje på venstre og høyre sko hos 12 personer (to materialer). Hvilket oppsett?",
      options: ["Parvis t på differanse per person, $t_{11}$", "To-utvalgs pooled t, $t_{22}$", "Andels-z-test", "Enveis ANOVA"],
      explanation: "Venstre og høyre sko på samme person er koblet — parvise data, $n-1=11$ df.",
    },
    {
      question: "Feil varianssum i differanse-KI-et betyr typisk å:",
      options: ["trekke fra i stedet for å legge til under rota", "bruke $S_p$ i stedet for $S_1,S_2$", "bruke t i stedet for z", "glemme kvadratroten"],
      explanation: "For uavhengige grupper legges variansene sammen: $1/m+1/n$, ikke $1/m-1/n$.",
    },
    {
      question: "Welch-varianten av to-utvalgs t brukes når:",
      options: ["variansene ikke kan antas like", "dataene er parvise", "man tester andeler", "utvalget er svært stort"],
      explanation: "Welch bruker separate varianser og en tilnærmet df; pooled t forutsetter lik varians.",
    },
    {
      question: "Estimatet på effekten i en parvis test er:",
      options: ["gjennomsnittet av differansene $\\bar D$", "differansen av standardavvikene", "pooled varians $S_p^2$", "P-verdien"],
      explanation: "$\\bar D$ er selve effektestimatet; rapporter det med KI ved siden av P-verdien.",
    },
    {
      question: "«Er metode A bedre enn B?» gir hvilken alternativhypotese?",
      options: ["Ensidig $H_a:\\mu_1>\\mu_2$", "Tosidig $H_a:\\mu_1\\ne\\mu_2$", "Ensidig $H_a:\\mu_1<\\mu_2$", "$H_a:\\sigma_1^2\\ne\\sigma_2^2$"],
      explanation: "«Bedre enn» peker på én retning — ensidig, akkurat som for ett utvalg.",
    },
    {
      question: "Hvorfor er det feil å bruke to-utvalgs df på parvise data?",
      options: ["Man overvurderer frihetsgradene og bruker en for stor standardfeil", "Man undervurderer frihetsgradene", "Det gir alltid en for liten P-verdi", "Det spiller ingen rolle for konklusjonen"],
      explanation: "Parvise data har $n-1$ df, ikke $2n-2$; å ignorere koblingen gir også en oppblåst standardfeil og svakere test.",
    },
    {
      question: "Hvilken beslutningsregel velger riktig to-gruppe-test?",
      options: ["Andel → andels-z; koblede enheter → parvis t; uavhengige → pooled to-utvalg", "Alltid pooled to-utvalgs t uansett datastruktur", "Alltid parvis t når det er to grupper", "Andel → parvis t; forventning → andels-z"],
      explanation: "Responstype og datastruktur (koblet vs. uavhengig) bestemmer observator og frihetsgrader.",
    },
  ],
  'stk1110-2-4': [
    {
      question: "Hva er styrken til en test?",
      options: ["Sannsynligheten $1-\\beta$ for å forkaste $H_0$ når $H_a$ er sann", "Sannsynligheten $\\alpha$ for å forkaste $H_0$ når $H_0$ er sann", "Sannsynligheten $\\beta$ for å beholde $H_0$ når $H_a$ er sann", "Sannsynligheten $1-\\alpha$ for å beholde $H_0$ når $H_0$ er sann"],
      explanation: "Styrken er $1-\\beta$: evnen til å oppdage en reell effekt (forkaste $H_0$ når $H_a$ faktisk er sann).",
    },
    {
      question: "En type II-feil er å:",
      options: ["beholde $H_0$ når $H_0$ faktisk er falsk", "forkaste $H_0$ når $H_0$ faktisk er sann", "forkaste $H_0$ når $H_a$ faktisk er sann", "beholde $H_0$ når $H_0$ faktisk er sann"],
      explanation: "Type II-feil ($\\beta$) er å overse en reell effekt — å beholde en falsk $H_0$.",
    },
    {
      question: "I dimensjoneringsformelen $n\\ge (z_\\alpha+z_{\\beta})^2\\sigma^2/\\delta^2$: hva gjør du med et desimalt svar?",
      options: ["Runder alltid OPP til nærmeste heltall", "Runder alltid NED til nærmeste heltall", "Runder til nærmeste heltall på vanlig måte", "Beholder desimalen som det nødvendige antallet"],
      explanation: "Kravet er en minst-betingelse på styrken; runder du ned, faller styrken under kravet. Rund derfor opp.",
    },
    {
      question: "For en ensidig høyresidig normaltest er styrken ved sann verdi $\\mu_1$:",
      options: ["$\\Phi(-z_\\alpha+(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n))$", "$\\Phi(-z_\\alpha-(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n))$", "$\\Phi(z_\\alpha+(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n))$", "$1-\\Phi(-z_\\alpha+(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n))$"],
      explanation: "Leddet $(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n)$ er positivt når $\\mu_1>\\mu_0$ og løfter styrken fra $\\alpha$ mot 1.",
    },
    {
      question: "Ved $\\mu=\\mu_0$ (altså $H_0$ akkurat sann) er styrken til en ensidig test lik:",
      options: ["$\\alpha$", "$1-\\alpha$", "$\\beta$", "$0{,}5$"],
      explanation: "Da er $(\\mu_1-\\mu_0)=0$, så styrken er $\\Phi(-z_\\alpha)=\\alpha$ — styrkekurven starter i $\\alpha$.",
    },
    {
      question: "Med $\\sigma=6$, $\\mu_0=50$, $\\mu_1=54$, $n=16$, $z_{0{,}05}=1{,}645$: hva er styrken (bruk $\\Phi(1{,}02)\\approx 0{,}85$)?",
      options: ["Om lag 0,85", "Om lag 0,15", "Om lag 0,05", "Om lag 0,95"],
      explanation: "Standardfeil $6/4=1{,}5$; styrke $=\\Phi(-1{,}645+4/1{,}5)=\\Phi(1{,}02)\\approx 0{,}85$.",
    },
    {
      question: "For et Poisson-antall $X\\sim\\text{Poisson}(\\mu)$: hva er standardavviket?",
      options: ["$\\sqrt{\\mu}$, siden forventning og varians begge er $\\mu$", "$\\mu$, siden forventning og varians begge er $\\mu$", "$\\mu^2$, siden variansen er kvadratet av forventningen", "$1/\\sqrt{\\mu}$, siden variansen avtar med raten"],
      explanation: "Poisson har $E(X)=\\text{Var}(X)=\\mu$, så standardavviket er $\\sqrt{\\mu}$.",
    },
    {
      question: "Hvilken antakelse hviler Poisson-styrkeregningen med z-kvantiler på?",
      options: ["Normaltilnærmingen $X\\approx N(\\mu,\\mu)$ fra sentralgrenseteoremet", "At Poisson-fordelingen er eksakt symmetrisk om $\\mu$", "At variansen er ukjent og estimeres med $S^2$", "At observasjonene er parvise og reduseres til differanser"],
      explanation: "For stor $\\mu$ gir sentralgrenseteoremet $X\\approx N(\\mu,\\mu)$; dette må nevnes eksplisitt (§4.4).",
    },
    {
      question: "Hva skjer med styrken når du øker utvalgsstørrelsen $n$ (alt annet likt)?",
      options: ["Styrken øker, fordi standardfeilen $\\sigma/\\sqrt n$ krymper", "Styrken synker, fordi det blir flere måter å ta feil på", "Styrken er uendret, fordi $n$ ikke inngår i styrken", "Styrken øker bare hvis $\\alpha$ samtidig senkes"],
      explanation: "Større $n$ gir mindre standardfeil, som løfter leddet $(\\mu_1-\\mu_0)/(\\sigma/\\sqrt n)$ og dermed styrken.",
    },
    {
      question: "Hva er den standardiserte effekten som styrer nødvendig $n$?",
      options: ["$\\delta/\\sigma$ — effekten målt i standardavvik", "$\\delta\\cdot\\sigma$ — effekten ganget med spredningen", "$\\delta/\\sqrt n$ — effekten delt på rot-$n$", "$\\sigma/\\delta$ — spredningen delt på effekten"],
      explanation: "Formelen kan skrives $n\\ge (z_\\alpha+z_\\beta)^2/(\\delta/\\sigma)^2$, så det er $\\delta/\\sigma$ som avgjør.",
    },
    {
      question: "I Poisson-styrken bruker du hvilket standardavvik i den kritiske grensen $c$ mot i selve styrken?",
      options: ["$\\sqrt{\\mu_0}$ i grensen $c$, men $\\sqrt{\\mu_1}$ i styrken", "$\\sqrt{\\mu_1}$ i grensen $c$, men $\\sqrt{\\mu_0}$ i styrken", "$\\sqrt{\\mu_0}$ begge steder, siden $H_0$ styrer alt", "$\\sqrt{\\mu_1}$ begge steder, siden vi regner under sann rate"],
      explanation: "Grensen $c=\\mu_0+z_\\alpha\\sqrt{\\mu_0}$ regnes under $H_0$; styrken regnes under sann rate, med $\\sqrt{\\mu_1}$.",
    },
    {
      question: "En test har $\\alpha=0{,}05$ og $\\beta=0{,}30$ ved en sann verdi. Hva er styrken der?",
      options: ["0,70", "0,30", "0,95", "0,05"],
      explanation: "Styrke $=1-\\beta=1-0{,}30=0{,}70$.",
    },
    {
      question: "Hvorfor er ikke $\\beta$ én fast verdi slik $\\alpha$ er?",
      options: ["Fordi $\\beta$ avhenger av hvor den sanne parameteren ligger", "Fordi $\\beta$ velges på forhånd akkurat som $\\alpha$", "Fordi $\\beta$ alltid er lik $1-\\alpha$", "Fordi $\\beta$ bare finnes for tosidige tester"],
      explanation: "$\\beta$ er en funksjon av den sanne verdien; derfor snakker vi om styrke ved et bestemt alternativ $\\mu_1$.",
    },
    {
      question: "Går du fra 90 % til 99 % styrkekrav (alt annet likt), hva skjer med nødvendig $n$?",
      options: ["$n$ øker, fordi $z_{\\beta}$ vokser og står kvadrert i telleren", "$n$ synker, fordi kravet blir enklere å oppfylle", "$n$ er uendret, fordi styrkekravet ikke inngår i formelen", "$n$ halveres, fordi 99 % er strengere enn 90 %"],
      explanation: "Høyere styrkekrav gir større $z_{\\beta}$, som kvadreres i telleren — $n$ vokser (her nesten dobles).",
    },
    {
      question: "Hva er den vanligste feilen i en dimensjoneringsoppgave?",
      options: ["Å runde $n$ ned i stedet for opp", "Å bruke t-fordeling i stedet for normalfordeling", "Å regne styrken som $1-\\alpha$", "Å glemme å oppgi frihetsgradene"],
      explanation: "Avrunding ned gir for få observasjoner og dermed styrke under kravet — rund alltid opp (§5.1).",
    },
  ],
  'stk1110-2-5': [
    {
      question: "Hva kjennetegner en pivotal størrelse (pivot)?",
      options: ["Fordelingen avhenger ikke av parameteren, selv om størrelsen gjør det", "Den er et rent tall som ikke inneholder parameteren i det hele tatt", "Den er alltid normalfordelt uansett utvalgsstørrelse", "Den er identisk med maximum-likelihood-estimatoren"],
      explanation: "En pivot er en funksjon av data OG parameter hvis fordeling er fri for parameteren — derfor kan kvantiler leses av og ulikheten løses for $\\theta$.",
    },
    {
      question: "For uavhengige eksponensialdata med forventning $\\theta$, hvilken fordeling har $2\\sum X_i/\\theta$?",
      options: ["$\\chi^2_{2n}$", "$\\chi^2_{n}$", "$\\chi^2_{n-1}$", "$t_{n-1}$"],
      explanation: "Hvert ledd $2X_i/\\theta$ er $\\chi^2_2$, og summen av $n$ slike er $\\chi^2_{2n}$ — les frihetsgradene riktig (§5.13).",
    },
    {
      question: "Et eksakt konfidensintervall fra en $\\chi^2$-pivot er asymmetrisk om $\\hat\\theta$. Hva betyr det?",
      options: ["Det er riktig og forventet, fordi $\\chi^2$ er en skjev fordeling", "Det er en regnefeil som må rettes til et symmetrisk intervall", "Det betyr at pivoten ble valgt feil", "Det betyr at utvalgsstørrelsen $n$ er altfor liten til at intervallet kan brukes i praksis"],
      explanation: "Skjeve pivoter ($\\chi^2$, $F$) gir naturlig asymmetriske intervaller — det er en egenskap, ikke en feil (§4.7).",
    },
    {
      question: "I det eksakte KI-et $[2\\sum X_i/\\chi^2_{2n,\\alpha/2},\\ 2\\sum X_i/\\chi^2_{2n,1-\\alpha/2}]$: hvor havner den STORE kvantilen?",
      options: ["I nevneren til den NEDRE grensen", "I nevneren til den ØVRE grensen", "I telleren til den øvre grensen", "Den store kvantilen brukes ikke i intervallet"],
      explanation: "Fordi $\\theta$ står i nevneren av pivoten, byttes ulikhetstegnene: den store kvantilen $\\chi^2_{2n,\\alpha/2}$ gir den nedre grensen.",
    },
    {
      question: "F-testen for variansforhold bruker hvilken observator og fordeling?",
      options: ["$F=S_1^2/S_2^2\\sim F_{m-1,n-1}$ under $H_0:\\sigma_1^2=\\sigma_2^2$", "$F=S_1^2/S_2^2\\sim F_{m+n-2}$ under $H_0:\\sigma_1^2=\\sigma_2^2$", "$F=S_1/S_2\\sim t_{m-1,n-1}$ under $H_0:\\sigma_1=\\sigma_2$", "$F=S_1^2-S_2^2\\sim \\chi^2_{m+n-2}$ under $H_0$"],
      explanation: "Forholdet mellom to utvalgsvarianser er F-fordelt med teller-df $m-1$ og nevner-df $n-1$.",
    },
    {
      question: "Hvorfor F-teste variansene før en pooled to-utvalgs t-test?",
      options: ["Fordi pooling forutsetter lik varians i de to gruppene", "Fordi F-testen erstatter t-testen når $n$ er liten", "Fordi F-testen gir frihetsgradene til t-testen", "Fordi pooling forutsetter at gjennomsnittene er like"],
      explanation: "Pooled t slår sammen variansene og krever at de er like; F-testen sjekker $H_0:\\sigma_1^2=\\sigma_2^2$.",
    },
    {
      question: "Når foretrekkes et eksakt pivot-intervall framfor Wald-intervallet?",
      options: ["Når standardfeilen selv avhenger av parameteren, eller $n$ er liten", "Alltid, fordi Wald aldri gir riktig dekning", "Bare når dataene er normalfordelte", "Bare når den ukjente parameteren tilfeldigvis er en varians og ikke en forventning"],
      explanation: "Wald er en symmetrisk normaltilnærming for store $n$; når $se$ avhenger av parameteren eller $n$ er liten, er den eksakte pivoten bedre (§4.7).",
    },
    {
      question: "Med $n=10$ eksponensialobservasjoner og $\\sum x_i=50$, hva er pivotens verdi $2\\sum x_i$ og frihetsgradene?",
      options: ["$2\\sum x_i=100$ og df $=20$", "$2\\sum x_i=50$ og df $=10$", "$2\\sum x_i=100$ og df $=10$", "$2\\sum x_i=500$ og df $=9$"],
      explanation: "$2\\cdot 50=100$, og frihetsgradene er $2n=20$.",
    },
    {
      question: "Kjikvadratfordelingen $\\chi^2_\\nu$ er et spesialtilfelle av hvilken fordeling?",
      options: ["Gamma$(\\nu/2,\\,2)$ — form $\\nu/2$, skala 2", "Gamma$(\\nu,\\,1)$ — form $\\nu$, skala 1", "Normal med forventning $\\nu$ og varians $2\\nu$", "Eksponensial med forventning $\\nu$"],
      explanation: "$\\chi^2_\\nu=\\text{gamma}(\\nu/2,2)$; denne identiteten lar oss gjenkjenne pivotens fordeling.",
    },
    {
      question: "For en eksakt ensidig test av $H_0:\\theta=\\theta_0$ mot $H_a:\\theta>\\theta_0$ med $W=2\\sum X_i/\\theta_0$: når forkaster du?",
      options: ["For store $W$: $W>\\chi^2_{2n,\\alpha}$", "For små $W$: $W<\\chi^2_{2n,\\alpha}$", "For $|W|>\\chi^2_{2n,\\alpha/2}$", "For verdier av $W$ som ligger nær forventningen $2n$ midt i fordelingen"],
      explanation: "Stor $\\theta$ gir stor $\\sum X_i$ og dermed stor $W$, så alternativet $\\theta>\\theta_0$ forkaster for store $W$.",
    },
    {
      question: "Hva er $\\chi^2_{\\nu,\\alpha}$ i notasjonen med øvre haleareal?",
      options: ["Verdien med $P(\\chi^2_\\nu>\\chi^2_{\\nu,\\alpha})=\\alpha$", "Verdien med $P(\\chi^2_\\nu<\\chi^2_{\\nu,\\alpha})=\\alpha$", "Forventningen i $\\chi^2_\\nu$, altså $\\nu$", "Variansen i $\\chi^2_\\nu$, altså $2\\nu$"],
      explanation: "Boka bruker øvre haleareal: $\\chi^2_{\\nu,\\alpha}$ har sannsynlighet $\\alpha$ til høyre for seg.",
    },
    {
      question: "Hvorfor er $\\sum X_i$ alene IKKE en pivot for $\\theta$?",
      options: ["Fordi fordelingen (gamma$(n,\\theta)$) avhenger av $\\theta$", "Fordi $\\sum X_i$ ikke inneholder dataene", "Fordi $\\sum X_i$ alltid er eksakt normalfordelt uansett hvor liten utvalgsstørrelsen $n$ er", "Fordi $\\sum X_i$ er et rent tall uten fordeling"],
      explanation: "$\\sum X_i\\sim$ gamma$(n,\\theta)$; kvantilene avhenger av det ukjente $\\theta$, så vi kan ikke løse for $\\theta$. Å dele på $\\theta$ skalerer parameteren bort.",
    },
    {
      question: "I F-testen $F=S_1^2/S_2^2\\sim F_{m-1,n-1}$: hvilken df er teller-df?",
      options: ["$m-1$, fra utvalget i telleren", "$n-1$, fra utvalget i nevneren", "$m+n-2$, de samlede frihetsgradene", "$2n$, som i kjikvadrat-pivoten"],
      explanation: "Teller-df kommer fra variansen i telleren ($m-1$), nevner-df fra nevneren ($n-1$).",
    },
    {
      question: "Hva er første steg i pivot-oppskriften?",
      options: ["Finn $W(X,\\theta)$ med fordeling uavhengig av $\\theta$", "Sett $\\theta$ lik gjennomsnittet $\\bar X$", "Regn Wald-standardfeilen $se(\\hat\\theta)$", "Tegn et QQ-plott av observasjonene og vurder om de er tilnærmet normalfordelte"],
      explanation: "Steg 1 er å finne en pivot; deretter setter man kvantiler rundt og løser for $\\theta$.",
    },
    {
      question: "En F-test gir $F=3{,}75$ med df $(12,15)$, og $F_{12,15,0{,}025}=2{,}96$. Konklusjon (tosidig, 5 %)?",
      options: ["Forkast $H_0$: variansene er forskjellige", "Behold $H_0$: variansene kan antas like", "Testen er ugyldig fordi $F>1$", "Kan ikke avgjøres uten P-verdien"],
      explanation: "$3{,}75>2{,}96$, så $H_0:\\sigma_1^2=\\sigma_2^2$ forkastes — lik-varians-antakelsen holder ikke.",
    },
  ],
  'stk1110-2-6': [
    {
      question: "Hva er nullhypotesen i en enveis ANOVA?",
      options: ["At alle gruppeforventningene er like: $\\mu_1=\\mu_2=\\cdots=\\mu_k$", "At alle gruppeforventningene er forskjellige fra hverandre", "At gruppevariansene er like: $\\sigma_1^2=\\cdots=\\sigma_k^2$", "At minst én gruppeforventning skiller seg fra de øvrige"],
      explanation: "$H_0$ sier at alle $\\mu_i$ er like; $H_a$ er at minst én skiller seg.",
    },
    {
      question: "ANOVA-observatoren er:",
      options: ["$F=\\text{MSB}/\\text{MSW}\\sim F_{k-1,\\,N-k}$ under $H_0$", "$F=\\text{MSW}/\\text{MSB}\\sim F_{N-k,\\,k-1}$ under $H_0$", "$T=\\text{MSB}/\\text{MSW}\\sim t_{N-k}$ under $H_0$", "$\\chi^2=\\text{SSB}/\\text{SSW}\\sim\\chi^2_{k-1}$ under $H_0$"],
      explanation: "F er forholdet mellom variasjon mellom grupper (MSB) og innen grupper (MSW), med df $(k-1,\\,N-k)$.",
    },
    {
      question: "En ANOVA gir P-verdi 0,20. En medstudent konkluderer «gruppene er like». Er det riktig?",
      options: ["Nei — vi har bare ikke belegg for forskjell, ikke bevis for likhet", "Ja — høy P-verdi beviser at forventningene er identiske", "Ja — så lenge $n$ er stor nok i hver gruppe", "Nei — en P-verdi på hele 0,20 betyr tvert imot alltid at gruppene helt sikkert er ulike"],
      explanation: "Å ikke forkaste $H_0$ betyr «ikke tilstrekkelig belegg for forskjell» — ikke at likhet er bevist (§5.14).",
    },
    {
      question: "I ANOVA-tabellen: hvordan regnes F value fra kolonnene?",
      options: ["Mean Sq for gruppe delt på Mean Sq for Residuals", "Sum Sq for gruppe delt på Sum Sq for Residuals", "Df for gruppe delt på Df for Residuals", "Mean Sq for Residuals delt på Mean Sq for gruppe"],
      explanation: "F value $=$ MSB/MSW $=$ (Mean Sq gruppe)/(Mean Sq Residuals).",
    },
    {
      question: "I R-utskriften er Df for gruppe 3 og for Residuals 36. Hvor mange grupper og observasjoner?",
      options: ["$k=4$ grupper og $N=40$ observasjoner", "$k=3$ grupper og $N=36$ observasjoner", "$k=4$ grupper og $N=36$ observasjoner", "$k=3$ grupper og $N=39$ observasjoner"],
      explanation: "$k-1=3\\Rightarrow k=4$; $N-k=36\\Rightarrow N=40$.",
    },
    {
      question: "Hva er den empiriske fordelingsfunksjonen $\\hat F(x)$?",
      options: ["Andelen observasjoner som er $\\le x$: $\\tfrac1n\\sum I(x_i\\le x)$", "Gjennomsnittet av observasjonene opp til $x$", "Den antatte normalfordelingen tilpasset dataene", "Den forhåndsvalgte sannsynligheten $\\alpha$ for å gjøre en type I-feil i en test"],
      explanation: "$\\hat F$ legger sannsynlighet $1/n$ på hvert datapunkt og er grunnlaget for bootstrap.",
    },
    {
      question: "Hvordan trekkes et bootstrap-gjenutvalg?",
      options: ["Med tilbakelegging fra de opprinnelige dataene, samme størrelse $n$", "Uten tilbakelegging fra en ny populasjon", "Ved å simulere fra en antatt normalfordeling", "Ved å fjerne nøyaktig én observasjon om gangen, slik som i leave-one-out-metoden"],
      explanation: "Bootstrap trekker $n$ observasjoner MED tilbakelegging fra dataene og gjentar mange ganger.",
    },
    {
      question: "Et 95 % bootstrap-persentilintervall leses av som:",
      options: ["2,5- og 97,5-persentilene av bootstrap-fordelingen", "Estimatet $\\pm 1{,}96$ ganger bootstrap-standardfeilen", "Minste og største verdi i bootstrap-fordelingen", "5- og 95-persentilene av bootstrap-fordelingen"],
      explanation: "For 95 % tas $\\alpha/2=2{,}5$-persentilen og $1-\\alpha/2=97{,}5$-persentilen direkte.",
    },
    {
      question: "Hva antyder en tydelig S-form (tunge haler) i et QQ-plott?",
      options: ["Ikke-normalitet — normalantakelsen er tvilsom", "Perfekt normalfordelte data", "At variansen er konstant på tvers av grupper", "At utvalget er for stort"],
      explanation: "Avvik fra den rette linjen (S-form) tyder på ikke-normalitet; da er t-testen mindre pålitelig.",
    },
    {
      question: "Når QQ-plottet klart bryter normalitet ved lite $n$, hva foretrekkes?",
      options: ["En rang-/Wilcoxon-test, som ikke antar normalitet", "En t-test med flere frihetsgrader", "En z-test med kjent varians", "Å fjerne alle observasjoner som ikke passer"],
      explanation: "Rangtester bruker rekkefølgen og krever ikke normalitet — riktigere når normalantakelsen svikter.",
    },
    {
      question: "En rangtest gir høyere P-verdi (0,078) enn t-testen (0,03) på samme ikke-normale data. Hva betyr det?",
      options: ["Rangtesten bygger på svakere, men her oppfylte antakelser — prisen for robusthet", "Rangtesten er alltid dårligere og bør forkastes", "t-testen er mer pålitelig fordi P-verdien er lavere", "De to testene måler fullstendig forskjellige parametere og kan derfor aldri sammenlignes direkte"],
      explanation: "Svakere antakelser gir gjerne høyere P-verdi; når t-testens antakelser er brutt, er rangtestens svar mer troverdig.",
    },
    {
      question: "Hva er koblingen mellom enveis ANOVA og regresjon?",
      options: ["ANOVA er en regresjon på dummyvariabler for gruppene", "ANOVA er en logistisk regresjon på gruppene", "ANOVA og regresjon har ingen sammenheng", "ANOVA er et spesialtilfelle av et prediksjonsintervall"],
      explanation: "Med $k-1$ dummyer blir ANOVAs F-test regresjonens samlede F-test, og kontraster er t-tester på koeffisientene.",
    },
    {
      question: "En signifikant ANOVA forteller oss:",
      options: ["at minst én gruppe skiller seg, men ikke hvilken", "nøyaktig hvilke grupper som er forskjellige", "at alle grupper er forskjellige fra hverandre", "at gruppevariansene er ulike"],
      explanation: "F-testen påviser at en forskjell finnes et sted; hvilke grupper krever oppfølgende kontraster.",
    },
    {
      question: "Hva er en vanlig feil ved bootstrap-persentilintervallet?",
      options: ["Å blande det med det normaltilnærmede $\\hat\\theta\\pm z\\,se$-intervallet", "Å trekke gjenutvalg med tilbakelegging", "Å bruke 2,5- og 97,5-persentilene for 95 %", "Å behandle de innsamlede dataene som om de selv utgjorde den empiriske fordelingen"],
      explanation: "Persentilintervallet leses av bootstrap-fordelingens persentiler; det er ikke en symmetrisk normalformel (§5.14).",
    },
    {
      question: "MSW i ANOVA er generaliseringen av hva fra to-utvalgstesten?",
      options: ["Den pooled variansen $S_p^2$", "Den pooled andelen $\\hat p$", "Differansen $\\bar Y_1-\\bar Y_2$", "Standardfeilen til gjennomsnittet"],
      explanation: "MSW slår sammen variasjon innen grupper til ett anslag på $\\sigma^2$ — akkurat som $S_p^2$, men for $k$ grupper.",
    },
  ],
  'stk1110-2-7': [
    {
      question: "Hvilke fem trinn utgjør testmalen, i riktig rekkefølge?",
      options: ["Hypoteser med retning; observator + fordeling under $H_0$; utled nivået; tallfest + P-verdi; konkluder i kontekst", "Regn først P-verdien; velg deretter $\\alpha$; sett så opp $H_a$; finn til slutt observatoren og konkluder raskt", "Observatoren først; så hypotesene; deretter konklusjonen; så tallfestingen; og helt til slutt selve P-verdien", "Konfidensintervall; så dualiteten; deretter hypotesene; så den kritiske verdien; og til sist nivå-utledningen"],
      explanation: "Malen er fast: (1) hypoteser med begrunnet retning, (2) observator + fordeling under $H_0$, (3) nivå-utledning, (4) tallfest + P-verdi, (5) konklusjon i kontekst.",
    },
    {
      question: "Hva innebærer trinn 3 — å 'utlede at nivået blir $\\alpha$' — for en ensidig test?",
      options: ["Å skrive ut $P(\\text{forkast } H_0\\mid H_0)=P(T>t_{\\nu,\\alpha}\\mid H_0)=\\alpha$", "Å velge signifikansnivået $\\alpha=0{,}05$ og deretter bruke det videre uten noen nærmere begrunnelse", "Å regne den observerte P-verdien og etterpå sjekke om den tilfeldigvis havner under nivået $\\alpha$", "Å vise at teststyrken $1-\\beta$ under alternativhypotesen blir nøyaktig lik signifikansnivået $\\alpha$"],
      explanation: "Nivå-utledningen skriver forkastningssannsynligheten under $H_0$ eksplisitt og viser at den er $\\alpha$ — det eksplisitte sensorkravet.",
    },
    {
      question: "Testobservatoren for én forventning med UKJENT $\\sigma$ er:",
      options: ["$T=(\\bar X-\\mu_0)/(S/\\sqrt n)$, med $T\\sim t_{n-1}$ under $H_0$", "$Z=(\\bar X-\\mu_0)/(\\sigma/\\sqrt n)$, med $Z\\sim N(0,1)$ under $H_0$", "$T=(\\bar X-\\mu_0)/S$, med $T\\sim t_{n}$ ($n$ frihetsgrader) under $H_0$", "$Z=(\\bar X-\\mu_0)\\sqrt n$, med $Z\\sim N(0,1)$ standardnormal under $H_0$"],
      explanation: "Ukjent $\\sigma$ estimeres med $S$; da er observatoren $t_{n-1}$-fordelt under $H_0$ — ikke normal.",
    },
    {
      question: "For PARVISE data (samme enhet målt to ganger) er riktig observator og frihetsgrad:",
      options: ["$T=\\bar D/(S_D/\\sqrt n)\\sim t_{n-1}$, der $n$ er antall par", "$T=(\\bar Y_1-\\bar Y_2)/(S_p\\sqrt{1/m+1/n})\\sim t_{m+n-2}$, med pooled varians", "$Z=(\\bar Y_1-\\bar Y_2)/\\sqrt{\\ldots}\\sim N(0,1)$, som for to uavhengige utvalg", "$T=\\bar D/(S_D/\\sqrt n)\\sim t_{2n-2}$, med dobbelt så mange frihetsgrader"],
      explanation: "Parvise data reduseres til differansene $D_i$ og testes som ETT utvalg med $n-1$ frihetsgrader ($n$ = par), ikke som to uavhengige utvalg.",
    },
    {
      question: "I to-utvalgs andelstesten skal standardfeilen under $H_0$ bruke:",
      options: ["pooled $\\hat p=(x_1+x_2)/(n_1+n_2)$", "de separate estimatene $\\hat p_1$ og $\\hat p_2$ hver for seg, uten sammenslåing", "det uvektede gjennomsnittet $(\\hat p_1+\\hat p_2)/2$ av de to gruppeandelene", "den største av de to gruppeandelene $\\hat p_1$ og $\\hat p_2$, som en øvre grense"],
      explanation: "Under $H_0:p_1=p_2$ antas én felles andel, så standardfeilen bruker pooled $\\hat p$. Separate $\\hat p_i$ hører til KI for differansen.",
    },
    {
      question: "Frihetsgradene i en pooled to-utvalgs t-test er:",
      options: ["$m+n-2$", "$m+n-1$", "$n-1$", "$2n-2$"],
      explanation: "Hver gruppe mister én frihetsgrad til sitt eget gjennomsnitt, så pooled df er $m+n-2$.",
    },
    {
      question: "Fordelingen til ANOVA-observatoren $F=\\text{MSB}/\\text{MSW}$ under $H_0$ er:",
      options: ["$F_{k-1,\\,N-k}$ (teller-df mellom, nevner-df innen)", "$F_{N-k,\\,k-1}$ (teller- og nevner-df byttet om)", "$t_{N-k}$ (t-fordeling med nevner-df)", "$\\chi^2_{k-1}$ (kjikvadrat med teller-df)"],
      explanation: "Teller-df er $k-1$ (mellom grupper) og nevner-df er $N-k$ (innen grupper), i den rekkefølgen.",
    },
    {
      question: "En Poisson-test av $H_0:\\mu=\\mu_0$ med normaltilnærming bruker observatoren:",
      options: ["$Z=(X-\\mu_0)/\\sqrt{\\mu_0}$, fordi $E(X)=\\text{Var}(X)=\\mu$", "$Z=(X-\\mu_0)/\\mu_0$, siden Poisson-variansen er lik $\\mu_0^2$", "$T=(X-\\mu_0)/\\sqrt{X}\\sim t_{n-1}$, som en t-fordelt observator", "$Z=(X-\\mu_0)/\\sqrt{X}$, standardisert med det observerte antallet $X$"],
      explanation: "For Poisson er forventning og varians begge $\\mu$; under $H_0$ er standardavviket $\\sqrt{\\mu_0}$, og CLT gir $Z\\approx N(0,1)$.",
    },
    {
      question: "F-testen for likhet av to varianser bruker observatoren og fordelingen:",
      options: ["$F=S_1^2/S_2^2\\sim F_{m-1,\\,n-1}$ under $H_0:\\sigma_1^2=\\sigma_2^2$", "$F=S_1/S_2\\sim F_{m,\\,n}$ (forholdet mellom standardavvikene) under $H_0$", "$F=S_1^2-S_2^2\\sim F_{m-1,\\,n-1}$ (differansen mellom variansene) under $H_0$", "$T=(S_1^2-S_2^2)/se\\sim t_{m+n-2}$ (en t-test på variansdifferansen)"],
      explanation: "F-testen bruker forholdet mellom utvalgsvariansene med df $(m-1,\\,n-1)$ — teller-df fra utvalg 1.",
    },
    {
      question: "Hvordan begrunnes valget mellom ensidig og tosidig $H_a$?",
      options: ["Ut fra hva situasjonen ber deg påvise, FØR du ser dataene", "Ut fra hvilken retning testobservatoren peker etter at du har regnet den ut", "Ut fra hvilken av de to retningene som ender opp med å gi den minste P-verdien", "Alltid tosidig uansett situasjon, for å være på den sikre siden i alle tilfeller"],
      explanation: "Retningen følger av spørsmålet og bestemmes før dataene ses; å velge retning etter dataene ugyldiggjør nivået.",
    },
    {
      question: "P-verdien er korrekt definert som:",
      options: ["sannsynligheten under $H_0$ for et minst like ekstremt utfall som det observerte", "sannsynligheten for at nullhypotesen $H_0$ er den sanne hypotesen gitt de innsamlede dataene", "sannsynligheten for at alternativhypotesen $H_a$ er den korrekte hypotesen i dette forsøket", "andelen av de innsamlede observasjonene som faktisk ligger i det vi kaller det ekstreme området"],
      explanation: "P-verdien beregnes UNDER $H_0$ og måler hvor ekstreme dataene er — ikke sannsynligheten for en hypotese.",
    },
    {
      question: "En ett-utvalgs t-test som skal 'påvise ØKNING' over $\\mu_0$ skal ha:",
      options: ["$H_a:\\mu>\\mu_0$ (ensidig, høyresidig)", "$H_a:\\mu\\ne\\mu_0$ (tosidig, endring i begge retninger)", "$H_a:\\mu<\\mu_0$ (ensidig, venstresidig alternativ)", "$H_0:\\mu>\\mu_0$ (ulikhet som selve nullhypotesen)"],
      explanation: "'Påvise økning' er en bestemt retning, så $H_a$ er ensidig høyresidig; $H_0$ er alltid likheten $\\mu=\\mu_0$.",
    },
    {
      question: "Med $\\bar x=27{,}2$, $\\mu_0=25$, $s=4{,}5$, $n=20$: hva er t-observatoren?",
      options: ["$\\approx 2{,}19$", "$\\approx 4{,}89$", "$\\approx 0{,}49$", "$\\approx 1{,}10$"],
      explanation: "Standardfeil $4{,}5/\\sqrt{20}=1{,}006$; $T=(27{,}2-25)/1{,}006\\approx 2{,}19$.",
    },
    {
      question: "En medstudent behandler før/etter-målinger på samme personer som to uavhengige utvalg. Hva er galt?",
      options: ["Dataene er koblet og skal reduseres til differanser $D_i$ med $t_{n-1}$", "Ingenting er galt — før/etter-målinger regnes alltid som to helt uavhengige utvalg", "Han skulle egentlig brukt en F-test for varianser i stedet for en t-test her", "Han skulle brukt observatoren $Z\\sim N(0,1)$ i stedet for en t-fordelt observator"],
      explanation: "Koblede målinger på samme enhet er parvise; å ignorere koblingen gir feil df og for stor standardfeil.",
    },
    {
      question: "En tosidig ANOVA-F gir en signifikant P-verdi. Hva kan du konkludere?",
      options: ["At minst én gruppe skiller seg — men ikke hvilke", "At samtlige grupper er innbyrdes forskjellige fra hverandre", "At nøyaktig to av gruppene skiller seg fra de øvrige gruppene", "At den første av gruppene har den klart høyeste forventningen"],
      explanation: "F-testen sier bare AT det finnes en forskjell; hvilke grupper krever oppfølgende kontraster.",
    },
    {
      question: "En ikke-signifikant ANOVA (P-verdi 0,30) betyr:",
      options: ["at vi ikke har belegg for forskjell — ikke at gruppene er like", "at det nå er bevist at alle gruppeforventningene er nøyaktig like store", "at minst én av gruppene likevel skiller seg klart fra de øvrige", "at utvalget er altfor lite til at man i det hele tatt kan bruke ANOVA"],
      explanation: "Å beholde $H_0$ er 'ikke belegg for forskjell', ikke bevis for likhet — fravær av bevis er ikke bevis på fravær.",
    },
    {
      question: "Hvorfor foretrekkes en rangtest framfor t-testen når QQ-plottet buer sterkt ved lite $n$?",
      options: ["Rangtesten antar ikke normalitet og er robust mot tunge haler", "Rangtesten gir alltid en lavere og dermed mer overbevisende P-verdi enn t-testen", "Rangtesten krever langt færre observasjoner enn det en vanlig t-test gjør", "t-testen kan rett og slett ikke brukes når man sammenligner to grupper"],
      explanation: "Ved klart brudd på normalitet og lite $n$ er t-testens forutsetning ikke oppfylt, mens rangtesten bygger på svakere, oppfylte antakelser.",
    },
    {
      question: "Rangtesten gir en HØYERE P-verdi enn t-testen på de samme (ikke-normale) dataene. Hva betyr det?",
      options: ["Det er prisen for svakere antakelser — ikke at rangtesten er dårligere", "Det betyr helt sikkert at rangtesten har regnet feil et sted underveis", "Det betyr at t-testen alltid er den man skal foretrekke i praksis", "Det betyr at de underliggende dataene egentlig var normalfordelte likevel"],
      explanation: "Robuste tester gir gjerne høyere P-verdi; en lavere P fra en test med brutte forutsetninger er ikke mer pålitelig.",
    },
    {
      question: "For en tosidig test på nivå $\\alpha$ er nivå-utledningen:",
      options: ["$P(|T|>t_{\\nu,\\alpha/2}\\mid H_0)=\\alpha/2+\\alpha/2=\\alpha$", "$P(T>t_{\\nu,\\alpha}\\mid H_0)=\\alpha$ (hele arealet i én hale)", "$P(|T|>t_{\\nu,\\alpha}\\mid H_0)=2\\alpha$ (dobbelt haleareal)", "$P(T>t_{\\nu,\\alpha/2}\\mid H_0)=\\alpha$ (halv kvantil, hel hale)"],
      explanation: "Tosidig legger $\\alpha/2$ i hver hale, og for en symmetrisk nullfordeling summerer de to halene til $\\alpha$.",
    },
    {
      question: "Siste trinn (konklusjon) i ritualet skal:",
      options: ["oversette forkast/behold til situasjonens språk, med P-verdi og nivå", "kun oppgi den nakne konklusjonen om $T$ er større enn den kritiske verdien", "gjenta de to hypotesene $H_0$ og $H_a$ ordrett slik de ble formulert", "regne det tosidige konfidensintervallet for parameteren helt på nytt igjen"],
      explanation: "Sensor krever en konklusjon i kontekst — ikke bare 'forkast $H_0$', men hva det betyr for situasjonen.",
    },
    {
      question: "Du har både regnet et 95 %-KI og gjort en tosidig 5 %-test. Dualiteten sier at:",
      options: ["$H_0:\\theta=\\theta_0$ forkastes hvis og bare hvis $\\theta_0$ ligger utenfor KI-et", "test og konfidensintervall i praksis godt kan ende opp med å gi motstridende svar", "dualiteten mellom test og intervall bare gjelder for ensidige tester, ikke tosidige", "konfidensintervallet inneholder nettopp de nullverdiene $\\theta_0$ som faktisk forkastes"],
      explanation: "Det tosidige $(1-\\alpha)$-KI-et er mengden av nullverdier som IKKE forkastes — en direkte kryssjekk.",
    },
    {
      question: "Med $x=118$ observerte Poisson-hendelser og $\\mu_0=100$: hva er den normaltilnærmede z-observatoren?",
      options: ["$1{,}80$", "$0{,}18$", "$18{,}0$", "$1{,}18$"],
      explanation: "$Z=(118-100)/\\sqrt{100}=18/10=1{,}80$.",
    },
    {
      question: "Hvilken feil endrer BÅDE forkastningsgrensen og P-verdien mest direkte?",
      options: ["Feil retning i $H_a$ (en- mot tosidig)", "Å oppgi den endelige konklusjonen i situasjonens eget kontekst-språk", "Å regne standardfeilen til gjennomsnittet som $S/\\sqrt n$ på vanlig måte", "Å bruke utvalgsgjennomsnittet $\\bar x$ som punktestimat for forventningen $\\mu$"],
      explanation: "Sidetheten bestemmer om kvantilen er $\\alpha$ eller $\\alpha/2$ og om P-verdien dobles — feil retning slår rett inn på begge.",
    },
    {
      question: "Hva må trinn 2 i malen alltid inneholde?",
      options: ["observatoren OG dens fordeling under $H_0$ (type og frihetsgrader)", "utelukkende den ferdig utregnede tallverdien av selve testobservatoren", "konklusjonen oversatt til situasjonens språk, med P-verdi og signifikansnivå", "et fullstendig tosidig konfidensintervall for den ukjente parameteren"],
      explanation: "Fordelingen under $H_0$ med riktige frihetsgrader er nødvendig for både kritisk verdi og P-verdi.",
    },
    {
      question: "En F-test av lik varians gir $F=2{,}5$ mot kritisk verdi 2,76 og beholder $H_0$. Hva betyr det for en påfølgende pooled t-test?",
      options: ["Lik-varians-antakelsen kan beholdes, så pooling er forsvarlig", "Det er nå bevist at de to variansene er nøyaktig like store", "Man må uansett bytte til Welch-varianten som ikke antar lik varians", "Pooling er nå forbudt, ganske enkelt fordi observatoren $F$ er større enn 1"],
      explanation: "Ikke-forkastet $H_0$ gir ikke belegg mot lik varians, så pooling er forsvarlig — men det er ikke et bevis for at variansene er identiske.",
    },
  ],
  'stk1110-3-1': [
    {
      question: "Hva er minste kvadraters estimator for stigningstallet?",
      options: ["$\\hat\\beta_1=\\dfrac{\\sum(x_i-\\bar x)(Y_i-\\bar Y)}{\\sum(x_i-\\bar x)^2}=\\dfrac{S_{xy}}{S_{xx}}$", "$\\hat\\beta_1=\\dfrac{\\sum(x_i-\\bar x)^2}{\\sum(x_i-\\bar x)(Y_i-\\bar Y)}=\\dfrac{S_{xx}}{S_{xy}}$", "$\\hat\\beta_1=\\dfrac{\\sum(Y_i-\\bar Y)^2}{\\sum(x_i-\\bar x)^2}=\\dfrac{S_{yy}}{S_{xx}}$", "$\\hat\\beta_1=\\dfrac{\\sum x_iY_i}{\\sum x_i^2}$ uten sentrering om $\\bar x$"],
      explanation: "Stigningstallet er samvariasjonen $S_{xy}$ delt på spredningen i $x$, $S_{xx}$.",
    },
    {
      question: "Hvor mange frihetsgrader har feilvariansen $S^2$ i enkel lineær regresjon med $n$ observasjoner?",
      options: ["$n-2$, fordi to parametere ($\\beta_0$ og $\\beta_1$) er estimert", "$n-1$, fordi bare senteret $\\bar Y$ er estimert, ikke stigningstallet", "$n$, fordi ingen frihetsgrader bindes i regresjon", "$n-3$, fordi også $\\sigma^2$ teller som en estimert parameter"],
      explanation: "To parametere ($\\beta_0,\\beta_1$) estimeres, så $S^2=\\text{SSE}/(n-2)$. Å skrive $n-1$ er den klassiske df-feilen.",
    },
    {
      question: "$\\hat\\beta_0=\\bar Y-\\hat\\beta_1\\bar x$ følger direkte av at:",
      options: ["regresjonslinja alltid går gjennom tyngdepunktet $(\\bar x,\\bar Y)$", "residualene $e_i$ per konstruksjon alltid er positive størrelser", "stigningstallet $\\hat\\beta_1$ er forventningsrett", "forklaringsvariablene $x_i$ er normalfordelte"],
      explanation: "Den første normalligningen sier $\\bar Y=\\hat\\beta_0+\\hat\\beta_1\\bar x$, altså at linja treffer $(\\bar x,\\bar Y)$.",
    },
    {
      question: "Variansen er $V(\\hat\\beta_1)=\\sigma^2/S_{xx}$. Hva betyr dette for presisjonen?",
      options: ["Mer spredte $x$-verdier (stor $S_{xx}$) gir mer presist stigningstall", "Mer spredte $x$-verdier (stor $S_{xx}$) gir mindre presist stigningstall", "Presisjonen avhenger overhodet ikke av hvordan $x$-verdiene ligger", "Variansen blir eksakt null så snart utvalgsstørrelsen $n$ er partall"],
      explanation: "Stor $S_{xx}$ i nevneren gjør $V(\\hat\\beta_1)$ liten — spre $x$-verdiene for presisjon.",
    },
    {
      question: "I enkel lineær regresjon er determinasjonskoeffisienten $R^2$ lik:",
      options: ["kvadratet av korrelasjonen mellom $x$ og $y$, altså $r^2$", "korrelasjonskoeffisienten $r$ selv, altså uten å kvadrere den først", "stigningstallet $\\hat\\beta_1$ ganget med $\\bar x$", "differansen $1-r$ mellom én og korrelasjonen"],
      explanation: "$R^2=r^2$ i enkel regresjon. Å forveksle $R^2$ med $r$ (glemme kvadratet) er en hyppig feil.",
    },
    {
      question: "En regresjon av vekt på høyde (voksne, 150-195 cm) gir $\\hat\\beta_0=-90$ kg. Hvordan tolkes dette?",
      options: ["Som et regneteknisk skjæringspunkt — $x=0$ cm er urealistisk, uten reell tolkning", "Som forventet vekt for en tenkt person med en høyde på nøyaktig 0 cm", "Som et sikkert tegn på at hele modellen er feil og bør forkastes", "Som den observerte gjennomsnittsvekten blant personene i utvalget"],
      explanation: "$x=0$ ligger langt utenfor dataområdet; $\\hat\\beta_0$ er da bare der linja skjærer aksen, ikke en meningsfull forventet vekt.",
    },
    {
      question: "Testobservatoren for $H_0:\\beta_1=\\beta_1^0$ er:",
      options: ["$T=\\dfrac{\\hat\\beta_1-\\beta_1^0}{se(\\hat\\beta_1)}$, som er $t_{n-2}$-fordelt under $H_0$", "$T=\\dfrac{\\hat\\beta_1-\\beta_1^0}{se(\\hat\\beta_1)}$, som er $t_{n-1}$-fordelt under $H_0$", "$Z=\\dfrac{\\hat\\beta_1-\\beta_1^0}{se(\\hat\\beta_1)}$, som alltid er $N(0,1)$-fordelt", "$T=\\dfrac{\\hat\\beta_1-\\beta_1^0}{S_{xx}}$, som er $t_{n-2}$-fordelt under $H_0$"],
      explanation: "Observatoren er (estimator − nullverdi)/standardfeil, t-fordelt med $n-2$ frihetsgrader.",
    },
    {
      question: "Hvorfor bruker inferensen for $\\beta_1$ t-fordelingen og ikke normalfordelingen?",
      options: ["Fordi $\\sigma$ er ukjent og erstattet med den stokastiske estimatoren $S$", "Fordi selve estimatoren $\\hat\\beta_1$ i dette tilfellet ikke er normalfordelt", "Fordi forklaringsvariablene $x_i$ er trukket tilfeldig", "Fordi $R^2$ per definisjon alltid er mindre enn 1"],
      explanation: "Estimert $\\sigma$ (via $S$) gir t-fordeling med $n-2$ frihetsgrader, akkurat som i ett-utvalgstesten.",
    },
    {
      question: "Et 95 %-KI for $\\beta_1$ er $[1{,}63,\\ 2{,}68]$. Hva sier dualiteten om $H_0:\\beta_1=0$ tosidig på 5 %-nivå?",
      options: ["$H_0$ forkastes, fordi verdien 0 ligger utenfor intervallet", "$H_0$ beholdes, fordi verdien 0 ligger utenfor intervallet", "$H_0$ beholdes, fordi hele intervallet består av positive tall", "Dualiteten mellom test og KI kan ikke brukes i regresjon"],
      explanation: "Forkast $H_0:\\beta_1=\\beta_1^0$ hviss $\\beta_1^0$ ligger utenfor KI-et; 0 er utenfor $[1{,}63,\\ 2{,}68]$.",
    },
    {
      question: "Minste kvadrater minimerer:",
      options: ["$\\sum(y_i-\\hat\\beta_0-\\hat\\beta_1 x_i)^2$, summen av kvadrerte loddrette avstander", "$\\sum|y_i-\\hat\\beta_0-\\hat\\beta_1 x_i|$, altså summen av de absolutte loddrette avvikene", "$\\sum(x_i-\\bar x)^2$, den totale spredningen i forklaringsvariabelen", "summen av de vinkelrette (ortogonale) avstandene fra punktene til linja"],
      explanation: "LS minimerer summen av kvadrerte residualer (loddrette avvik), ikke absoluttavvik eller vinkelrett avstand.",
    },
    {
      question: "For $\\hat\\beta_1=2{,}15$ og $se(\\hat\\beta_1)=0{,}23$ med $n=10$: hva er t-observatoren for $H_0:\\beta_1=0$?",
      options: ["$T=2{,}15/0{,}23\\approx 9{,}3$, med $n-2=8$ frihetsgrader", "$T=2{,}15/0{,}23\\approx 9{,}3$, med $n-1=9$ frihetsgrader", "$T=0{,}23/2{,}15\\approx 0{,}11$, med $n-2=8$ frihetsgrader", "$T=2{,}15\\cdot 0{,}23\\approx 0{,}49$, med $n=10$ frihetsgrader"],
      explanation: "$T=\\hat\\beta_1/se$, og enkel regresjon har $n-2=8$ frihetsgrader.",
    },
    {
      question: "Hva er standardfeilen $se(\\hat\\beta_1)$?",
      options: ["$S/\\sqrt{S_{xx}}$, der $S=\\sqrt{\\text{SSE}/(n-2)}$ estimerer $\\sigma$", "$S/\\sqrt{n}$, som er standardfeilen til det vanlige utvalgsgjennomsnittet $\\bar X$", "$\\sigma^2/S_{xx}$, altså selve variansen til $\\hat\\beta_1$", "$S\\cdot\\sqrt{S_{xx}}$, produktet av $S$ og roten av $S_{xx}$"],
      explanation: "$se(\\hat\\beta_1)=\\sqrt{V(\\hat\\beta_1)}$ med $\\sigma$ erstattet av $S$: $S/\\sqrt{S_{xx}}$.",
    },
    {
      question: "Egenskapen $E(\\hat\\beta_1)=\\beta_1$ betyr at estimatoren er:",
      options: ["forventningsrett — den treffer riktig verdi i snitt over gjentatte utvalg", "konsistent, men ikke uten videre forventningsrett i endelige, små utvalg", "alltid nøyaktig lik den sanne $\\beta_1$ i hvert enkelt datasett", "normalfordelt rundt et senter som avviker litt fra $\\beta_1$"],
      explanation: "Forventningsrett betyr $E(\\hat\\theta)=\\theta$; det handler om gjennomsnittet over utvalg, ikke det enkelte estimatet.",
    },
    {
      question: "Uttrykket $\\text{SSE}=\\sum(y_i-\\hat y_i)^2$ måler:",
      options: ["variasjonen i $y$ som linja IKKE forklarer (residualvariasjon)", "den totale variasjonen i $y$ rundt sitt eget gjennomsnitt", "den delen av variasjonen i $y$ som linja nettopp forklarer", "spredningen i forklaringsvariabelens $x$-verdier rundt $\\bar x$"],
      explanation: "SSE er summen av kvadrerte residualer — den uforklarte delen. $R^2=1-\\text{SSE}/\\text{SST}$.",
    },
    {
      question: "Under normalfordelte feilledd gjelder at minste kvadrater:",
      options: ["gir nøyaktig de samme estimatorene som maximum likelihood", "alltid gir et høyere $R^2$ enn maximum likelihood ville gjort", "er en helt annen metode uten noen kobling til likelihood", "bare gir gyldige estimatorer i tilfellet der $\\beta_0=0$"],
      explanation: "Log-likelihooden inneholder $-\\frac{1}{2\\sigma^2}\\sum(y_i-\\beta_0-\\beta_1x_i)^2$, så å maksimere $\\ell$ er å minimere residualkvadratsummen.",
    },
    {
      question: "$R^2=0{,}64$ i en enkel regresjon med $\\hat\\beta_1>0$. Hva er korrelasjonen mellom $x$ og $y$?",
      options: ["$r=\\sqrt{0{,}64}=0{,}80$, positiv fordi $\\hat\\beta_1>0$", "$r=0{,}64$, siden $R^2$ og $r$ er samme størrelse", "$r=0{,}64^2=0{,}41$, altså $R^2$ kvadrert", "$r=1-0{,}64=0{,}36$, komplementet til $R^2$"],
      explanation: "$r=\\sqrt{R^2}=\\sqrt{0{,}64}=0{,}80$, med samme fortegn som $\\hat\\beta_1$.",
    },
    {
      question: "Ekstrapolering i regresjon betyr å:",
      options: ["bruke linja for $x$-verdier utenfor det området dataene dekker", "legge til nok en forklaringsvariabel i den eksisterende modellen", "fjerne mistenkelige uteliggere før man tilpasser linja på nytt", "regne determinasjonskoeffisienten $R^2$ på nytt for et delutvalg"],
      explanation: "Modellen er bare understøttet i dataområdet; utenfor kan sammenhengen bryte sammen.",
    },
    {
      question: "I regresjon uten konstantledd ($Y_i=\\gamma x_i+\\varepsilon_i$) er estimatoren:",
      options: ["$\\hat\\gamma=\\dfrac{\\sum x_iY_i}{\\sum x_i^2}$, med summer uten sentrering", "$\\hat\\gamma=\\dfrac{\\sum(x_i-\\bar x)(Y_i-\\bar Y)}{\\sum(x_i-\\bar x)^2}$, sentrert om $\\bar x$", "$\\hat\\gamma=\\bar Y/\\bar x$, forholdet mellom gjennomsnittene", "$\\hat\\gamma=\\dfrac{\\sum x_i^2}{\\sum x_iY_i}$, den inverse formen"],
      explanation: "Uten konstantledd minimeres $\\sum(y_i-\\gamma x_i)^2$, som gir $\\hat\\gamma=\\sum x_iy_i/\\sum x_i^2$ (ikke sentrert).",
    },
    {
      question: "Hvilken størrelse er den forklarte delen i dekomponeringen $\\text{SST}=\\text{SSR}+\\text{SSE}$?",
      options: ["SSR $=\\sum(\\hat y_i-\\bar y)^2$, avstanden fra tilpassede verdier til $\\bar y$", "SSE $=\\sum(y_i-\\hat y_i)^2$, avstanden fra hvert punkt ned til regresjonslinja", "SST $=\\sum(y_i-\\bar y)^2$, den totale variasjonen i responsen", "$S_{xx}=\\sum(x_i-\\bar x)^2$, spredningen i forklaringsvariabelen"],
      explanation: "SSR (forklart) er avstanden fra tilpassede verdier til $\\bar y$; SSE er den uforklarte residualdelen.",
    },
    {
      question: "Modellantakelsen om konstant feilvarians $V(\\varepsilon_i)=\\sigma^2$ for alle $x_i$ kalles:",
      options: ["homoskedastisitet (lik spredning uansett $x$-verdi)", "heteroskedastisitet (spredning som øker eller avtar med $x$)", "multikollinearitet (sterk samvariasjon mellom prediktorer)", "autokorrelasjon (avhengighet mellom påfølgende feilledd)"],
      explanation: "Homoskedastisitet = lik varians for alle $x_i$. Brytes den, er standardfeilene upålitelige.",
    },
    {
      question: "For $\\bar x=30$, $\\bar y=52$, $S_{xx}=1000$, $S_{xy}=720$: hva er $\\hat\\beta_0$?",
      options: ["$\\hat\\beta_0=52-0{,}72\\cdot 30=30{,}4$", "$\\hat\\beta_0=720/1000=0{,}72$", "$\\hat\\beta_0=52$, altså $\\bar y$ direkte", "$\\hat\\beta_0=0{,}72\\cdot 30=21{,}6$"],
      explanation: "$\\hat\\beta_1=720/1000=0{,}72$; $\\hat\\beta_0=52-0{,}72\\cdot 30=52-21{,}6=30{,}4$.",
    },
    {
      question: "Hva sier den andre normalligningen $\\sum x_iy_i=\\hat\\beta_0\\sum x_i+\\hat\\beta_1\\sum x_i^2$ geometrisk?",
      options: ["At residualene er ukorrelert med $x$ — ingen lineær trend igjen å hente", "At hver enkelt av residualene $e_i$ er nøyaktig lik null samtidig", "At determinasjonskoeffisienten $R^2$ er lik 1", "At regresjonslinja er helt vannrett med $\\hat\\beta_1=0$"],
      explanation: "Den følger av $\\sum x_i e_i=0$: residualene har ingen lineær sammenheng med $x$ igjen.",
    },
    {
      question: "$\\hat\\beta_1=\\sum c_iY_i$ med $c_i=(x_i-\\bar x)/S_{xx}$. Hvilke egenskaper gir $E(\\hat\\beta_1)=\\beta_1$?",
      options: ["$\\sum c_i=0$ og $\\sum c_ix_i=1$", "$\\sum c_i=1$ og $\\sum c_ix_i=0$", "$\\sum c_i^2=1$ og $\\sum c_i=1$", "$\\sum c_i=n$ og $\\sum c_ix_i=n$"],
      explanation: "$E(\\hat\\beta_1)=\\beta_0\\sum c_i+\\beta_1\\sum c_ix_i=\\beta_0\\cdot 0+\\beta_1\\cdot 1=\\beta_1$.",
    },
    {
      question: "Uttrykket $\\hat\\beta_1=\\sum c_iY_i$ (funksjon av stokastiske $Y_i$) er en:",
      options: ["estimator — en stokastisk variabel med forventning og varians", "et estimat — et fast tall regnet ut fra ett datasett", "parameter — en fast, ukjent egenskap ved populasjonen", "residual — avviket mellom observert og tilpasset verdi"],
      explanation: "$\\hat\\beta_1$ er en funksjon av de stokastiske $Y_i$, altså en estimator; tallverdien fra data er et estimat.",
    },
    {
      question: "Et 95 %-KI for stigningstallet $\\beta_1$ konstrueres som:",
      options: ["$\\hat\\beta_1\\pm t_{n-2,\\,0{,}025}\\,se(\\hat\\beta_1)$", "$\\hat\\beta_1\\pm t_{n-1,\\,0{,}025}\\,se(\\hat\\beta_1)$", "$\\hat\\beta_1\\pm z_{0{,}05}\\,se(\\hat\\beta_1)$", "$\\hat\\beta_1\\pm t_{n-2,\\,0{,}05}\\,se(\\hat\\beta_1)$"],
      explanation: "Tosidig 95 % gir $\\alpha/2=0{,}025$ i hver hale, med $n-2$ frihetsgrader.",
    },
    {
      question: "$R^2=0{,}30$ i en regresjon. Hva er en korrekt tolkning?",
      options: ["30 % av variasjonen i $y$ forklares av forklaringsvariabelen $x$", "korrelasjonen mellom $x$ og $y$ er nøyaktig lik 0,30", "30 % av observasjonene ligger nøyaktig på regresjonslinja", "stigningstallet $\\hat\\beta_1$ har verdien 0,30 i denne modellen"],
      explanation: "$R^2$ er andelen forklart variasjon; korrelasjonen er $\\sqrt{0{,}30}\\approx 0{,}55$.",
    },
    {
      question: "Hvorfor deler vi på $n-2$ (ikke $n$) i $S^2=\\text{SSE}/(n-2)$?",
      options: ["To parametere ($\\beta_0,\\beta_1$) er estimert, så $n-2$ gir forventningsrett $S^2$", "Fordi det å dividere med $n-2$ alltid gir et litt mindre tallresultat enn med $n$", "Det er en ren konvensjon uten noe egentlig matematisk grunnlag", "Fordi noen av residualene $e_i$ typisk er negative størrelser"],
      explanation: "Med $n$ ville $S^2$ vært skjevt for $\\sigma^2$; $n-2$ korrigerer for de to estimerte parameterne.",
    },
    {
      question: "En A-besvarelse tolker $\\hat\\beta_1=2{,}15$ (poeng per studietime) slik:",
      options: ["«Én ekstra studietime svarer til om lag 2,15 flere forventede poeng.»", "«Forklaringsvariabelen $x$ og responsen $y$ har en korrelasjon på 2,15.»", "«Ved 0 studietimer er den forventede poengsummen lik 2,15.»", "«2,15 % av variasjonen forklares av antall studietimer.»"],
      explanation: "$\\hat\\beta_1$ er forventet endring i $y$ per enhet $x$, tolket i kontekst med enhet.",
    },
    {
      question: "Hva er $se(\\hat\\beta_1)$ når $S=4{,}13$ og $S_{xx}=330$?",
      options: ["$4{,}13/\\sqrt{330}\\approx 0{,}227$", "$4{,}13/330\\approx 0{,}0125$", "$\\sqrt{4{,}13/330}\\approx 0{,}112$", "$4{,}13\\cdot\\sqrt{330}\\approx 75{,}0$"],
      explanation: "$se(\\hat\\beta_1)=S/\\sqrt{S_{xx}}=4{,}13/18{,}17\\approx 0{,}227$.",
    },
    {
      question: "Feilleddet $\\varepsilon_i$ i regresjonsmodellen representerer:",
      options: ["alt i $Y_i$ som den rette linja ikke fanger — støy og utelatte faktorer", "den systematiske, ikke-tilfeldige delen $\\beta_0+\\beta_1x_i$ av responsen $Y_i$", "residualen $e_i=y_i-\\hat y_i$, altså nøyaktig det samme", "stigningstallet $\\beta_1$ i den underliggende modellen"],
      explanation: "$\\varepsilon_i$ er det uobserverbare tilfeldige avviket; residualen $e_i$ er dets empiriske motstykke etter tilpasning.",
    },
  ],
  'stk1110-3-2': [
    {
      question: "Hva står i `Estimate`-kolonnen i en R-utskrift?",
      options: ["Punktestimatet $\\hat\\beta_j$ for koeffisienten på den raden", "Standardfeilen $se(\\hat\\beta_j)$ til koeffisienten på raden", "Testobservatoren $\\hat\\beta_j/se(\\hat\\beta_j)$ for raden", "Den tosidige P-verdien for $H_0:\\beta_j=0$ på raden"],
      explanation: "`Estimate` er selve den tilpassede koeffisienten $\\hat\\beta_j$.",
    },
    {
      question: "Hvordan regner du ut `t value` fra de andre kolonnene?",
      options: ["`t value` $=$ `Estimate` delt på `Std. Error`", "`t value` $=$ `Std. Error` delt på `Estimate`", "`t value` $=$ `Estimate` ganget med `Std. Error`", "`t value` $=$ `Estimate` delt på `Pr(>|t|)`"],
      explanation: "$\\texttt{t value}=\\hat\\beta_j/se(\\hat\\beta_j)=$ `Estimate`/`Std. Error` — en fin kryssjekk.",
    },
    {
      question: "Hva er `Pr(>|t|)` i Coefficients-tabellen?",
      options: ["Den tosidige P-verdien for $H_0:\\beta_j=0$", "Sannsynligheten for at koeffisienten $\\beta_j$ er lik null", "Sannsynligheten for at modellen som helhet er riktig", "Andelen forklart variasjon knyttet til den variabelen"],
      explanation: "`Pr(>|t|)` er P-verdien for at nettopp den koeffisienten er null, IKKE sannsynligheten for at $\\beta_j=0$.",
    },
    {
      question: "«Residual standard error: 4,133 on 8 degrees of freedom» forteller deg at:",
      options: ["$\\hat\\sigma=4{,}133$, og residualfrihetsgraden er $n-k-1=8$", "$R^2=4{,}133$, og modellen har 8 forklaringsvariabler", "korrelasjonen er 4,133 basert på 8 observasjoner totalt", "F-statistikken er 4,133 på 8 frihetsgrader i telleren"],
      explanation: "«Residual standard error» er $\\hat\\sigma=\\sqrt{\\text{SSE}/(n-k-1)}$; linja gir også frihetsgraden.",
    },
    {
      question: "Hvorfor bruker du `Adjusted R-squared` (ikke `Multiple R-squared`) til å sammenligne modeller?",
      options: ["Fordi `Multiple R-squared` øker uansett når en variabel legges til", "Fordi `Adjusted R-squared` alltid er større og dermed mer optimistisk", "Fordi `Multiple R-squared` bare gjelder for enkel regresjon", "Fordi `Adjusted R-squared` måler korrelasjonen mellom prediktorene"],
      explanation: "`Multiple R-squared` kan aldri synke ved flere variabler; den justerte straffer for antall prediktorer.",
    },
    {
      question: "Et 95 %-KI for en koeffisient bygges fra utskriften som:",
      options: ["`Estimate` $\\pm t_{n-k-1,\\,0{,}025}\\cdot$ `Std. Error`", "`Estimate` $\\pm t_{n-1,\\,0{,}025}\\cdot$ `Std. Error`", "`Estimate` $\\pm z_{0{,}05}\\cdot$ `Std. Error`", "`Estimate` $\\pm t_{n-k-1,\\,0{,}05}\\cdot$ `t value`"],
      explanation: "KI = estimat $\\pm$ t-kvantil $\\times$ standardfeil, med frihetsgrad $n-k-1$ fra Residual-linja.",
    },
    {
      question: "En koeffisient har `Pr(>|t|)` $=0{,}42$. Hva kan du konkludere på 5 %-nivå?",
      options: ["Koeffisienten er ikke signifikant — vi kan ikke forkaste at den er null gitt de øvrige", "Koeffisienten er signifikant — en P-verdi på 0,42 betyr at variabelen forklarer 42 % av variasjonen i responsen", "Variabelen er helt uviktig for responsen uansett modell", "Det er 42 % sannsynlig at koeffisienten er nøyaktig null"],
      explanation: "$0{,}42>0{,}05$, så $H_0:\\beta_j=0$ beholdes; ikke-signifikant betyr ikke automatisk «uviktig».",
    },
    {
      question: "Hva tester F-statistikken nederst i utskriften?",
      options: ["$H_0:$ alle helninger $\\beta_1=\\cdots=\\beta_k=0$ samtidig (samlet test)", "$H_0:$ konstantleddet $\\beta_0$ er lik null", "$H_0:$ residualene er normalfordelte", "$H_0:$ den første forklaringsvariabelen $\\beta_1$ er lik null alene (enkeltvis koeffisienttest)"],
      explanation: "F-statistikken tester om modellen som helhet forklarer noe — alle helninger null mot minst én ulik null.",
    },
    {
      question: "For `Estimate` $=22{,}305$ og `Std. Error` $=0{,}863$: hva er `t value`?",
      options: ["$22{,}305/0{,}863\\approx 25{,}8$", "$0{,}863/22{,}305\\approx 0{,}039$", "$22{,}305\\cdot 0{,}863\\approx 19{,}2$", "$22{,}305-0{,}863\\approx 21{,}4$"],
      explanation: "`t value` = `Estimate`/`Std. Error` $=22{,}305/0{,}863\\approx 25{,}8$.",
    },
    {
      question: "I `(Intercept)`-raden er `Estimate` lik:",
      options: ["konstantleddet $\\hat\\beta_0$ — forventet respons når alle prediktorer er null", "stigningstallet $\\hat\\beta_1$ — forventet endring i responsen per enhet økning i variabelen", "residualspredningen $\\hat\\sigma$ for modellen", "determinasjonskoeffisienten $R^2$ for tilpasningen"],
      explanation: "`(Intercept)`-raden gir $\\hat\\beta_0$, tolket som respons ved null i alle prediktorer (om realistisk).",
    },
    {
      question: "Den vanligste lesefeilen i R-utskrift er å:",
      options: ["forveksle `Std. Error`-kolonnen med `t value`-kolonnen", "lese `Estimate` som antall observasjoner i utvalget", "tro at `Multiple R-squared` er residualspredningen", "regne F-statistikken som gjennomsnittet av t-verdiene"],
      explanation: "`Std. Error` (en spredning) forveksles ofte med `t value` (et forhold); del `Estimate`/`Std. Error` for å skille dem.",
    },
    {
      question: "«on 9 degrees of freedom» i en multippel regresjon med $k=2$ prediktorer betyr at:",
      options: ["$n-k-1=9$, altså $n=9+2+1=12$ observasjoner", "$n-1=9$, altså $n=10$ observasjoner totalt", "det er 9 forklaringsvariabler i modellen", "$R^2$ bygger på 9 frihetsgrader i nevneren"],
      explanation: "Residualfrihetsgraden er $n-k-1$; med $k=2$ gir $9$ at $n=12$.",
    },
    {
      question: "Signifikanskoden `***` bak en P-verdi betyr:",
      options: ["$P<0{,}001$", "$P<0{,}05$", "$P<0{,}1$", "$P\\ge 0{,}1$"],
      explanation: "`***` markerer $P<0{,}001$; `**` er $<0{,}01$, `*` er $<0{,}05$.",
    },
    {
      question: "En koeffisient er ikke-signifikant i en multippel regresjon. Hva er den riktige tolkningen?",
      options: ["Variabelen bidrar ikke utover det de øvrige variablene allerede fanger", "Variabelen har garantert ingen sammenheng med responsen i det hele tatt", "Modellen som helhet må forkastes fordi én koeffisient er null", "Estimatet er nøyaktig null og kan fjernes uten videre vurdering"],
      explanation: "P-verdien er betinget på de øvrige; en korrelert variabel kan skjule effekten (§5.14).",
    },
    {
      question: "Hvordan henter du residualspredningen $\\hat\\sigma$ fra utskriften?",
      options: ["Den er selve tallet i «Residual standard error»-linja", "Den er kvadratroten av `Multiple R-squared`", "Den er `Std. Error` for `(Intercept)`-raden", "Den er F-statistikken delt på antall frihetsgrader"],
      explanation: "$\\hat\\sigma$ leses direkte som «Residual standard error»; frihetsgraden $n-k-1$ står på samme linje.",
    },
    {
      question: "I enkel regresjon er sammenhengen mellom F-statistikken og t-verdien for stigningstallet:",
      options: ["$F=(\\texttt{t value})^2$, og de gir samme P-verdi", "$F=\\texttt{t value}$, altså nøyaktig samme tall", "$F=2\\cdot\\texttt{t value}$ på grunn av tosidigheten", "$F$ og t har ingen fast sammenheng i enkel regresjon"],
      explanation: "Med én prediktor er $F=(\\texttt{t value})^2$ og den samlede P-verdien lik `Pr(>|t|)` for stigningstallet.",
    },
    {
      question: "En medstudent sier: «`Pr(>|t|)` = 0,001 betyr at det er 0,1 % sjanse for at $\\beta_1=0$.» Hva er feil?",
      options: ["$\\beta_1$ er et fast ukjent tall — P-verdien er sannsynligheten under $H_0$ for et ekstremt utfall", "Ingenting; det er en helt korrekt tolkning av P-verdien", "Feilen er at 0,001 skulle vært lest som 0,1 og ikke 0,1 %", "Feilen er at P-verdien alltid må ganges med antall koeffisienter i modellen før den kan sammenlignes med nivået"],
      explanation: "Koeffisienten er ikke stokastisk; P-verdien er beregnet UNDER $H_0:\\beta_1=0$, ikke sannsynligheten for den.",
    },
    {
      question: "`Multiple R-squared` i utskriften er:",
      options: ["$R^2=1-\\text{SSE}/\\text{SST}$, andelen forklart variasjon", "korrelasjonen $r$ mellom respons og prediktor", "residualspredningen $\\hat\\sigma$ i modellen", "den justerte $R^2$-en, som straffer for antall prediktorer i modellen"],
      explanation: "«Multiple R-squared» er $R^2$; den justerte varianten står i egen kolonne ved siden av.",
    },
    {
      question: "Hvorfor er `Adjusted R-squared` (0,9968) litt lavere enn `Multiple R-squared` (0,9974)?",
      options: ["Fordi den justerte straffer for antall prediktorer via faktoren $\\frac{n-1}{n-k-1}$", "Fordi den justerte alltid runder nedover til nærmeste hundredel", "Fordi den justerte bare teller de signifikante variablene", "Fordi den justerte måler korrelasjonen mellom respons og prediktorer i stedet for andelen forklart variasjon"],
      explanation: "$R^2_{\\text{just}}=1-(1-R^2)\\frac{n-1}{n-k-1}\\le R^2$; forskjellen vokser med antall prediktorer.",
    },
    {
      question: "For å bygge et KI fra utskriften trenger du frihetsgraden. Hvor er den?",
      options: ["På «Residual standard error»-linja: «on $\\ldots$ degrees of freedom» ($=n-k-1$)", "I `t value`-kolonnen på stigningstallets rad, der estimatet er delt på standardfeilen", "I `Multiple R-squared`-tallet ganget med $n$", "På F-statistic-linja, som teller-frihetsgraden $k$"],
      explanation: "Residualfrihetsgraden $n-k-1$ (til t-kvantilen) står på «Residual standard error»-linja.",
    },
    {
      question: "Den samlede P-verdien på F-statistic-linja forteller om:",
      options: ["hvorvidt minst én av forklaringsvariablene bidrar (modellen forklarer noe)", "hvilken enkelt variabel som er den viktigste i modellen", "om residualene tilfredsstiller normalitetsantakelsen i alle de tre standard residualplottene", "om `(Intercept)` er signifikant forskjellig fra null"],
      explanation: "F-P-verdien gjelder $H_0:$ alle helninger null; liten P-verdi betyr at minst én prediktor bidrar.",
    },
    {
      question: "Boligeksempelet: `Estimate` for areal er 22,305 (1000 kr per m², alder holdt konstant). Riktig tolkning:",
      options: ["«Med alder holdt konstant er én ekstra m² assosiert med ca. 22 300 kr høyere forventet pris.»", "«Når arealet øker med én m², øker den faktiske prisen på enhver bolig i utvalget med nøyaktig 22 300 kr.»", "«Korrelasjonen mellom areal og pris er 22,305 i datasettet.»", "«En bolig på 0 m² har en forventet pris på 22 300 kr.»"],
      explanation: "En koeffisient i multippel regresjon er endring per enhet med de øvrige holdt konstant, tolket med enhet.",
    },
    {
      question: "Hvorfor inneholder STK1110-utskriftene ingen kjørbar kode?",
      options: ["Fordi ferdigheten som testes er å LESE og tolke sammendraget, ikke å skrive kode", "Fordi R ikke kan produsere regresjonssammendrag uten spesialpakker som ikke inngår i pensum", "Fordi koden alltid oppgis muntlig av sensor under eksamen", "Fordi utskriften bare gjelder når man bruker Python i stedet for R"],
      explanation: "STK1110 tolker ferdige utskrifter (68 % av settene); kodeskriving var STK1100s domene.",
    },
    {
      question: "En koeffisient har $t=0{,}84$ og et 95 %-KI $[-1{,}52,\\ 0{,}70]$. Hva sier dualiteten?",
      options: ["Ikke signifikant på 5 %-nivå, fordi 0 ligger inne i intervallet", "Signifikant på 5 %-nivå, fordi intervallet inneholder negative tall", "Signifikant, fordi t-verdien er positiv og under 1", "Dualiteten gjelder ikke for koeffisienter i multippel regresjon"],
      explanation: "0 ligger inne i KI-et, så $H_0:\\beta_j=0$ beholdes — i tråd med den lave t-verdien.",
    },
    {
      question: "Hva er den korrekte rekkefølgen på kolonnene i Coefficients-tabellen?",
      options: ["`Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`", "`Std. Error`, `Estimate`, `Pr(>|t|)`, `t value`", "`t value`, `Estimate`, `Std. Error`, `Pr(>|t|)`", "`Estimate`, `t value`, `Std. Error`, `Pr(>|t|)`"],
      explanation: "Fra venstre: estimat, standardfeil, t-verdi (estimat/se), tosidig P-verdi. Å huske rekkefølgen hindrer forveksling.",
    },
  ],
  'stk1110-3-3': [
    {
      question: "Hvordan skrives den multiple regresjonsmodellen på matriseform?",
      options: ["$Y=X\\beta+\\varepsilon$ med $\\varepsilon\\sim N(0,\\sigma^2 I)$", "$Y=\\beta X+\\varepsilon$ med $\\varepsilon\\sim N(0,\\sigma^2)$ skalar", "$Y=X^T\\beta+\\varepsilon$ med $\\varepsilon\\sim N(0,\\sigma^2 I)$", "$Y=X\\beta\\varepsilon$ med $\\varepsilon\\sim N(1,\\sigma^2 I)$"],
      explanation: "Responsvektoren er designmatrisen ganger koeffisientvektoren pluss feilvektoren: $Y=X\\beta+\\varepsilon$.",
    },
    {
      question: "Hva er minste kvadraters estimator på matriseform?",
      options: ["$\\hat\\beta=(X^TX)^{-1}X^TY$", "$\\hat\\beta=(XX^T)^{-1}XY$", "$\\hat\\beta=X^{-1}Y$ for alle $X$", "$\\hat\\beta=X^T(XX^T)^{-1}Y$"],
      explanation: "Normalligningene $X^TX\\hat\\beta=X^TY$ løses ved å invertere $X^TX$: $\\hat\\beta=(X^TX)^{-1}X^TY$.",
    },
    {
      question: "Hvilket krav sikrer at $\\hat\\beta=(X^TX)^{-1}X^TY$ er entydig?",
      options: ["$X$ har full kolonnerang, så $X^TX$ er inverterbar", "$X$ er kvadratisk, så $X^{-1}$ eksisterer direkte", "Feilleddene er normalfordelte med kjent varians", "Prediktorene er sentrerte slik at $X^TX$ blir diagonal"],
      explanation: "Uten full kolonnerang er $X^TX$ singulær og normalligningene har uendelig mange løsninger.",
    },
    {
      question: "Hvor mange frihetsgrader har $S^2$ i multippel regresjon med $n$ observasjoner og $k$ prediktorer?",
      options: ["$n-k-1$, fordi $k+1$ parametre er estimert", "$n-k$, fordi bare de $k$ helningene regnes som estimerte parametre", "$n-1$, som for vanlig utvalgsvarians", "$n-2$, uansett antall prediktorer"],
      explanation: "Konstantleddet teller med: $k+1$ estimerte parametre gir df $=n-k-1$.",
    },
    {
      question: "Hva skjer med $R^2$ når en ny prediktor legges til modellen?",
      options: ["Den kan aldri synke — uansett hvor irrelevant variabelen er", "Den øker bare hvis den nye variabelen er statistisk signifikant på 5 %-nivå", "Den kan synke hvis variabelen er ukorrelert med responsen", "Den er uendret til variabelen testes med F-test"],
      explanation: "Den store modellen inneholder den lille som spesialtilfelle, så SSE kan ikke øke — dermed kan $R^2$ ikke synke.",
    },
    {
      question: "Hvilken størrelse skal brukes til å sammenligne modeller med ulikt antall prediktorer?",
      options: ["Justert $R^2$ — den straffer ekstra parametre", "Multiple R-squared — den måler forklart andel", "Residual standard error uten justering", "F-statistikken for den største modellen"],
      explanation: "Justert $R^2$ kan synke ved unyttige utvidelser og egner seg derfor til modellvalg; vanlig $R^2$ øker alltid.",
    },
    {
      question: "Hva er formelen for justert $R^2$?",
      options: ["$1-(1-R^2)\\,\\dfrac{n-1}{n-k-1}$", "$1-(1-R^2)\\,\\dfrac{n-k-1}{n-1}$", "$R^2\\cdot\\dfrac{n-1}{n-k-1}$", "$1-R^2\\cdot\\dfrac{n-1}{n-k-1}$"],
      explanation: "Justert $R^2=1-\\frac{\\text{SSE}/(n-k-1)}{\\text{SST}/(n-1)}$, som omskrives til $1-(1-R^2)(n-1)/(n-k-1)$.",
    },
    {
      question: "Hva er kovariansmatrisen til $\\hat\\beta$?",
      options: ["$\\sigma^2(X^TX)^{-1}$", "$\\sigma^2 X^TX$", "$\\sigma^2(XX^T)^{-1}$", "$\\sigma^2 I$ av dimensjon $k+1$"],
      explanation: "$\\text{Cov}(\\hat\\beta)=\\sigma^2(X^TX)^{-1}$; standardfeilene er røttene av diagonalelementene med $S$ for $\\sigma$.",
    },
    {
      question: "Hva betyr koeffisienten $\\beta_j$ i multippel regresjon?",
      options: ["Endring i forventet respons per enhet $x_j$ når de andre variablene holdes konstant", "Den totale effekten av $x_j$ på responsen, uavhengig av modellens øvrige innhold", "Korrelasjonen mellom $x_j$ og responsen, omregnet til standardisert skala med standardavvikene", "Andelen av variasjonen i responsen som $x_j$ alene forklarer"],
      explanation: "Tolkningen er betinget: effekten av $x_j$ med de øvrige prediktorene i modellen holdt faste.",
    },
    {
      question: "Hva kjennetegner en konfunderende variabel?",
      options: ["Den påvirker responsen og er korrelert med prediktoren av interesse", "Den er korrelert med prediktoren, men helt uten effekt på responsen", "Den påvirker responsen, men er ukorrelert med alle prediktorene", "Den har målefeil som blåser opp residualvariansen i modellen"],
      explanation: "Begge krav må til: sammenheng med både respons og prediktor. Da arver prediktoren dens effekt når den utelates.",
    },
    {
      question: "Prediktorene $x_1$ og $x_2$ er sentrerte og ukorrelerte. Hva skjer med $\\hat\\beta_1$ når $x_2$ fjernes fra modellen?",
      options: ["Den er uendret — koeffisientene beregnes uavhengig", "Den øker, fordi $x_1$ overtar $x_2$ sin forklaringskraft", "Den synker mot null når forklaringskraft går tapt", "Den skifter fortegn på grunn av utelatt variabel-skjevhet"],
      explanation: "Med ukorrelerte, sentrerte prediktorer er $X^TX$ diagonal, og hver koeffisient estimeres som om de andre ikke fantes.",
    },
    {
      question: "Hva er $R^2$ når to sentrerte, ukorrelerte prediktorer brukes?",
      options: ["$R^2=r_1^2+r_2^2$ — bidragene er additive", "$R^2=r_1^2\\cdot r_2^2$ — bidragene multipliseres", "$R^2=(r_1+r_2)^2$ — korrelasjonene summeres først", "$R^2=\\max(r_1^2,r_2^2)$ — den sterkeste teller"],
      explanation: "Uten korrelasjon overlapper ikke forklaringsbitene, og forklart andel blir summen av de kvadrerte korrelasjonene.",
    },
    {
      question: "Hva er multikollinearitet?",
      options: ["Sterk korrelasjon mellom prediktorene som blåser opp standardfeilene", "Sterk korrelasjon mellom residualene og de tilpassede verdiene i modellen", "At feilleddene er avhengige over tid i stedet for uavhengige", "At responsen er lineær i noen prediktorer og ikke i andre"],
      explanation: "Nesten-overlappende prediktorer gjør $X^TX$ nær singulær: koeffisientene blir upresise selv om modellen samlet er god.",
    },
    {
      question: "En koeffisient endrer seg kraftig når en ny variabel legges til modellen. Hva er den naturlige forklaringen?",
      options: ["Den nye variabelen er korrelert med prediktoren og påvirker responsen — konfundering", "Modellen har mistet en frihetsgrad, og det forskyver alle estimatene", "Minste kvadraters metode er numerisk ustabil og gir litt ulike koeffisienter hver gang", "Residualvariansen har økt, og det trekker koeffisientene mot null"],
      explanation: "Uten den nye variabelen arvet prediktoren dens effekt; med den måles bare prediktorens egen, betingede effekt.",
    },
    {
      question: "Hva sier normalligningene på matriseform?",
      options: ["$X^TX\\hat\\beta=X^TY$ — residualene er ukorrelerte med kolonnene i $X$", "$XX^T\\hat\\beta=XY$ — residualene er ukorrelerte med hver enkelt rad i $X$", "$X\\hat\\beta=Y$ — modellen skal treffe alle observasjonene", "$X^T\\hat\\beta=Y^TX$ — transponert balanse mellom sidene"],
      explanation: "Minimering av $\\lVert y-X\\beta\\rVert^2$ gir $X^T(y-X\\hat\\beta)=0$, altså $X^TX\\hat\\beta=X^Ty$.",
    },
    {
      question: "Hvilken dimensjon har designmatrisen $X$ med $n$ observasjoner og $k$ prediktorer?",
      options: ["$n\\times(k+1)$ — én rad per observasjon, én kolonne per parameter", "$n\\times k$ — konstantleddet trenger ingen kolonne", "$(k+1)\\times n$ — én rad per parameter, én kolonne per observasjon", "$(k+1)\\times(k+1)$ — kvadratisk som $X^TX$"],
      explanation: "Første kolonne er 1-ere (bærer $\\beta_0$), deretter én kolonne per prediktor: $n\\times(k+1)$.",
    },
    {
      question: "Hva inneholder første kolonne i designmatrisen, og hvorfor?",
      options: ["Bare 1-ere — den bærer konstantleddet $\\beta_0$ inn i hver ligning", "Responsverdiene — de må stå først for at produktet skal stemme", "Radnumrene — de identifiserer observasjonene i systemet", "Gjennomsnittene av prediktorene — de sentrerer modellen rundt tyngdepunktet"],
      explanation: "Rad $i$ av $X\\beta$ starter med $1\\cdot\\beta_0$, så konstantleddet kommer med i alle $n$ ligningene.",
    },
    {
      question: "I R-utskriften for multippel regresjon: hvor finner du $\\hat\\sigma$ og frihetsgradene?",
      options: ["På «Residual standard error»-linja: tallet og «on … degrees of freedom»", "I «Std. Error»-kolonnen: det øverste tallet og antallet rader i tabellen", "På «Multiple R-squared»-linja: roten av tallet og $n-1$", "På «F-statistic»-linja: første tall og andre DF-tall"],
      explanation: "«Residual standard error: $s$ on $n-k-1$ degrees of freedom» gir både $\\hat\\sigma$ og frihetsgradene.",
    },
    {
      question: "Modell A ($k=2$) har justert $R^2=0{,}83$; modell B ($k=3$) har $R^2$ som er høyere, men justert $R^2=0{,}80$. Hva velger du?",
      options: ["Modell A — utvidelsen forsvarer ikke den tapte frihetsgraden", "Modell B — høyest $R^2$ betyr mest forklart variasjon", "Modell B — flere variabler gir alltid mer presise prediksjoner av nye data", "Ingen av dem før en F-test har sammenlignet modellene"],
      explanation: "Ved modellvalg vinner høyest justert $R^2$; at $R^2$ steg er automatikk, ikke bevis på bedre modell.",
    },
    {
      question: "Hvorfor kan ikke to prediktorer der den ene er et fast multiplum av den andre stå i samme modell?",
      options: ["Kolonnene blir lineært avhengige, så $X^TX$ ikke kan inverteres", "Korrelasjonen mellom dem gjør at t-testene mister all sin statistiske styrke", "Residualene blir da avhengige og bryter modellantakelsene", "$R^2$ ville oversteget 1 når begge bidrar med det samme"],
      explanation: "Perfekt lineær avhengighet bryter full kolonnerang: normalligningene får uendelig mange løsninger.",
    },
    {
      question: "Hva er t-observatoren for $H_0:\\beta_j=\\beta_j^0$ i multippel regresjon, og hvilken fordeling har den?",
      options: ["$T=(\\hat\\beta_j-\\beta_j^0)/se(\\hat\\beta_j)\\sim t_{n-k-1}$", "$T=(\\hat\\beta_j-\\beta_j^0)/se(\\hat\\beta_j)\\sim t_{n-2}$", "$T=\\hat\\beta_j/S\\sim t_{n-k-1}$ uansett hypoteseverdi", "$T=(\\hat\\beta_j-\\beta_j^0)^2/se(\\hat\\beta_j)\\sim F_{1,n-k}$"],
      explanation: "Samme mønster som alltid — estimat minus hypoteseverdi delt på standardfeil — men med df $=n-k-1$.",
    },
    {
      question: "Hva gir 1-erkolonnen i $X$ innsatt i $X^Te=0$?",
      options: ["$\\sum e_i=0$ — residualene summerer seg til null", "$\\sum e_i^2=0$ — residualene er alle null", "$\\sum e_i=n\\bar y$ — residualene balanserer responsen", "$\\sum x_ie_i=1$ — residualene er normerte"],
      explanation: "Normalligningene sier at residualvektoren er ortogonal på hver kolonne; 1-erkolonnen gir $\\sum e_i=0$.",
    },
    {
      question: "Hva er overtilpasning?",
      options: ["Modellen jager tilfeldig støy i utvalget med for mange parametre", "Modellen bruker for få parametre og overser dermed reelle effekter i dataene", "Modellen brukes utenfor dataområdet der den ikke gjelder", "Modellen bryter normalitetsantakelsen for feilleddene"],
      explanation: "Symptom: høy $R^2$ men synkende justert $R^2$ — god beskrivelse av utvalget, dårlig prediksjon av nye data.",
    },
    {
      question: "Regresjon med én dummyvariabel (0/1 for gruppe) tilsvarer hvilken kjent test?",
      options: ["Pooled to-utvalgs-t-test — samme testobservator og frihetsgrader", "Parvis t-test — differansene mellom gruppene modelleres direkte som par", "Kjikvadrattest for uavhengighet i en $2\\times 2$-tabell", "Wilcoxons rangsumtest for to grupper"],
      explanation: "$\\beta_1$ er gruppedifferansen, og t-testen for $\\beta_1=0$ er identisk med pooled to-utvalgs-t-testen.",
    },
    {
      question: "Hva er $\\hat\\beta_0$ og $\\hat\\beta_1$ i dummy-modellen $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$ med $x_i\\in\\{0,1\\}$?",
      options: ["$\\hat\\beta_0=\\bar y$ i gruppe 0, og $\\hat\\beta_1$ er differansen mellom gruppegjennomsnittene", "$\\hat\\beta_0$ er det samlede gjennomsnittet av alle observasjonene, og $\\hat\\beta_1$ er halve differansen mellom gruppene", "$\\hat\\beta_0=\\bar y$ i gruppe 1, og $\\hat\\beta_1$ er gjennomsnittet i gruppe 0", "$\\hat\\beta_0$ er alltid null, og $\\hat\\beta_1$ er forholdet mellom gjennomsnittene"],
      explanation: "Med $x=0$ er forventningen $\\beta_0$ (gruppe 0); med $x=1$ er den $\\beta_0+\\beta_1$, så $\\beta_1$ er forskjellen.",
    },
    {
      question: "Med sterk multikollinearitet: hva kan du se i utskriften?",
      options: ["Høy $R^2$ og sterk F-test, men store standardfeil og svake t-verdier per koeffisient", "Lav $R^2$ og svak F-test, men sterke t-verdier for hver koeffisient", "Standardfeilene blir negative for de korrelerte prediktorene, og P-verdiene kan ikke tolkes", "Justert $R^2$ større enn vanlig $R^2$ for samme modell"],
      explanation: "Modellen samlet forklarer mye, men effektene kan ikke skilles: enkeltkoeffisientene blir upresise.",
    },
    {
      question: "Hvordan inverteres $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$?",
      options: ["$\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$, når $ad-bc\\neq0$", "$\\dfrac{1}{ad-bc}\\begin{pmatrix}a&-b\\\\-c&d\\end{pmatrix}$, når $ad-bc\\neq0$", "$\\dfrac{1}{ad+bc}\\begin{pmatrix}d&b\\\\c&a\\end{pmatrix}$, når $ad+bc\\neq0$", "$\\begin{pmatrix}1/a&1/b\\\\1/c&1/d\\end{pmatrix}$, når alle elementene er ulik null"],
      explanation: "Bytt diagonalelementene, skift fortegn på de andre, og del på determinanten $ad-bc$.",
    },
    {
      question: "Hva er $E(\\hat\\beta)$ under modellantakelsene?",
      options: ["$\\beta$ — minste kvadraters estimator er forventningsrett", "$0$ — estimatoren er sentrert rundt null", "$(X^TX)^{-1}\\beta$ — forventningen skaleres av designet", "$\\beta$, men bare når prediktorene er sentrerte rundt sine gjennomsnitt"],
      explanation: "$E(\\hat\\beta)=(X^TX)^{-1}X^TE(Y)=(X^TX)^{-1}X^TX\\beta=\\beta$ uansett design med full rang.",
    },
    {
      question: "Modellen har $k=3$ prediktorer og $n=24$. Hvilken t-kvantil hører til et 95 %-KI for $\\beta_2$?",
      options: ["$t_{20,\\,0{,}025}$ — frihetsgrader $24-3-1=20$", "$t_{22,\\,0{,}025}$ — frihetsgrader $24-2$", "$t_{21,\\,0{,}05}$ — frihetsgrader $24-3$ og hele $\\alpha$", "$z_{0{,}025}$ — normalkvantil siden $n>20$"],
      explanation: "df $=n-k-1=20$, og tosidig 95 % bruker øvre haleareal $\\alpha/2=0{,}025$.",
    },
    {
      question: "Hvorfor er ikke $R^2$ i seg selv et argument for å legge til en variabel?",
      options: ["Fordi økningen kommer automatisk — minimum av SSE over en større mengde kan ikke bli større", "Fordi $R^2$ måler bare lineære sammenhenger og derfor overser både kurvatur og samspill i dataene", "Fordi $R^2$ avhenger av måleenhetene til den nye variabelen", "Fordi $R^2$ bare kan beregnes når prediktorene er ukorrelerte"],
      explanation: "Utvidet modell inneholder den gamle som spesialtilfelle; SSE synker mekanisk og $R^2$ øker uansett variabelens verdi.",
    },
  ],
  'stk1110-3-4': [
    {
      question: "Hva sjekker plottet av residualer mot tilpassede verdier?",
      options: ["Linearitetsantakelsen — kurvatur avslører at den lineære formen er feil", "Normalitetsantakelsen — skjeve residualer gir bue i punktskyen", "Variansantakelsen — trakten viser at residualene er avhengige", "Uavhengighetsantakelsen — mønster betyr at feilleddene er korrelerte over tid"],
      explanation: "Plott 1 «eier» lineariteten: et parabelmønster betyr at modellen mangler et ledd, typisk et kvadratledd.",
    },
    {
      question: "Hva plottes i scale-location-plottet, og hva avdekker en stigende trend?",
      options: ["$\\sqrt{|e_i|}$ mot $\\hat y_i$; trend betyr at variansen ikke er konstant", "$e_i^2$ mot $x_i$; trend betyr at modellen mangler et kvadratledd i prediktoren", "$|e_i|$ mot tid; trend betyr avhengighet mellom målingene", "$e_i$ mot normalkvantiler; trend betyr tunge haler i fordelingen"],
      explanation: "Roten av absolutte residualer mot tilpassede verdier: en trend viser heteroskedastisitet.",
    },
    {
      question: "Hva tyder en S-form i QQ-plottet på (venstre ende under linja, høyre over)?",
      options: ["Tunge haler — ekstreme residualer er vanligere enn normalfordelingen tilsier", "Heteroskedastisitet — spredningen i residualene vokser med nivået på responsen", "Ikke-linearitet — sammenhengen krummer i endene av dataområdet", "Autokorrelasjon — nabomålingene henger sammen i tid"],
      explanation: "Haleavvik i QQ-plottet handler om fordelingens form: S-formen er signaturen til tunge haler.",
    },
    {
      question: "Hva er hatmatrisen?",
      options: ["$H=X(X^TX)^{-1}X^T$ — den sender $Y$ til de tilpassede verdiene", "$H=(X^TX)^{-1}X^TY$ — den beregner koeffisientvektoren direkte fra dataene", "$H=X^TX$ — den oppsummerer designets spredning", "$H=I-X(X^TX)^{-1}X^T$ — den sender $Y$ til residualene"],
      explanation: "$\\hat Y=X\\hat\\beta=X(X^TX)^{-1}X^TY=HY$; «hatten» settes på $Y$. Residualene bruker $I-H$.",
    },
    {
      question: "Hvilke to egenskaper ved $H$ (og $I-H$) brukes i utledningene?",
      options: ["Symmetrisk ($H^T=H$) og idempotent ($HH=H$)", "Ortogonal ($H^TH=I$) og diagonal i riktig basis", "Inverterbar ($H^{-1}$ finnes) og positiv definit", "Antisymmetrisk ($H^T=-H$) og nilpotent ($HH=0$)"],
      explanation: "Symmetri og idempotens gir $(I-H)(I-H)^T=I-H$ — nøkkelen til $\\text{Cov}(E)=\\sigma^2(I-H)$.",
    },
    {
      question: "Hva er $\\text{Cov}(E)$ for residualvektoren $E=(I-H)Y$?",
      options: ["$\\sigma^2(I-H)$ — ulik varians og svak korrelasjon", "$\\sigma^2 I$ — samme fordeling som feilleddene", "$\\sigma^2 H$ — variansen følger leveragene direkte", "$\\sigma^2(I-H)^2$ — kvadratet av projeksjonen"],
      explanation: "$\\text{Cov}(E)=(I-H)\\sigma^2I(I-H)^T=\\sigma^2(I-H)$ ved symmetri og idempotens.",
    },
    {
      question: "Hva er variansen til én enkelt residual $E_i$?",
      options: ["$\\sigma^2(1-h_{ii})$ — mindre for punkter med høy leverage", "$\\sigma^2 h_{ii}$ — større for punkter med høy leverage", "$\\sigma^2$ — residualene arver feilleddenes varians eksakt", "$\\sigma^2/n$ — variansen deles likt mellom observasjonene"],
      explanation: "Diagonalen i $\\sigma^2(I-H)$: høy-leverage-punkter trekker linja mot seg og får presset residualvarians.",
    },
    {
      question: "Hva er formelen for standardiserte residualer?",
      options: ["$e_i^*=e_i/(\\hat\\sigma\\sqrt{1-h_{ii}})$", "$e_i^*=e_i/(\\hat\\sigma\\sqrt{h_{ii}})$", "$e_i^*=e_i/\\hat\\sigma$ uten leverage-korreksjon", "$e_i^*=e_i\\sqrt{1-h_{ii}}/\\hat\\sigma$"],
      explanation: "Residualen deles på sitt estimerte standardavvik $\\hat\\sigma\\sqrt{1-h_{ii}}$ — da får alle omtrent varians 1.",
    },
    {
      question: "Hvorfor trengs $\\sqrt{1-h_{ii}}$-korreksjonen?",
      options: ["Rå residualer har ulik varians — kantpunktenes avvik undervurderes uten den", "Rå residualer summerer seg ikke til null uten korreksjonen", "Rå residualer er målt i responsens enheter og må gjøres enhetsløse før tolkning", "Rå residualer er avhengige av rekkefølgen observasjonene kom i"],
      explanation: "Høy-leverage-punkter har liten residualvarians; uten korreksjon ser dårlig tilpassede kantpunkter «pene» ut.",
    },
    {
      question: "Hva er leverage $h_{ii}$ i enkel regresjon?",
      options: ["$\\frac1n+\\frac{(x_i-\\bar x)^2}{S_{xx}}$ — vokser med avstanden fra $\\bar x$", "$\\frac1n+\\frac{(y_i-\\bar y)^2}{S_{yy}}$ — vokser med observasjonens avvik i responsverdien", "$\\frac{(x_i-\\bar x)^2}{n\\,S_{xx}}$ — normert med utvalgsstørrelsen", "$\\frac1n-\\frac{(x_i-\\bar x)^2}{S_{xx}}$ — synker mot kantene"],
      explanation: "Leverage måler hvor uvanlig $x$-verdien er: minst ($1/n$) i tyngdepunktet, størst i kantene.",
    },
    {
      question: "Hva er $\\sum_{i=1}^n h_{ii}$?",
      options: ["$k+1$ — antall parametre i modellen", "$n$ — én for hver observasjon", "$1$ — leveragene er sannsynligheter", "$n-k-1$ — frihetsgradene til $\\hat\\sigma^2$"],
      explanation: "Diagonalsummen av $H$ er $k+1$; gjennomsnittlig leverage er $(k+1)/n$, og ~det dobbelte flagges.",
    },
    {
      question: "En observasjon har høy leverage men liten standardisert residual. Hva er riktig karakteristikk?",
      options: ["Potensielt innflytelsesrik posisjon i $x$, men godt tilpasset — ikke automatisk et problem", "En klar uteligger i responsen som bør fjernes fra datasettet før modellen tilpasses på nytt", "Et bevis på heteroskedastisitet i den delen av dataområdet", "En feilmåling, siden kantpunkter alltid har store residualer"],
      explanation: "Leverage beskriver bare plassering i $x$. Farlig blir det først i kombinasjon med stor residual.",
    },
    {
      question: "Residualplottet viser et parabelmønster. Hva er standardtiltaket?",
      options: ["Utvide modellen med et kvadratledd og tegne plottene på nytt", "Transformere responsen med logaritme for å dempe den voksende variansen", "Bytte til en rangbasert test som ikke krever normalitet", "Fjerne observasjonene med de største residualene"],
      explanation: "Kurvatur = ikke-linearitet: legg til $x^2$ som prediktor (fortsatt lineær regresjon) og sjekk diagnosen på nytt.",
    },
    {
      question: "Scale-location-plottet viser en klar stigende trend. Hvilket tiltak er mest naturlig?",
      options: ["Transformere responsen, for eksempel til $\\log y$", "Legge til et kvadratledd i prediktoren", "Standardisere prediktorene til gjennomsnitt null og varians én", "Øke signifikansnivået for å kompensere"],
      explanation: "Voksende spredning (heteroskedastisitet) dempes ofte av en logtransformasjon av responsen.",
    },
    {
      question: "QQ-plottet viser tunge haler i et lite utvalg. Hvilket alternativ bør vurderes?",
      options: ["En rangbasert test (Wilcoxon) som ikke bygger på normalitet", "En F-test, som er robust mot alle typer avvik fra normalfordelingen", "Å doble utvalget ved å telle hver observasjon to ganger", "En z-test, siden normalkvantilene da ikke trengs"],
      explanation: "Med tunge haler og små $n$ er t-apparatet sårbart; rangtester er den robuste utveien.",
    },
    {
      question: "Hvorfor sier «plottet ser greit ut» ingenting til sensor?",
      options: ["Fordi vurderingen skal navngi mønsteret som sjekkes og knytte det til en antakelse", "Fordi plott aldri kan brukes som selvstendig argument i en formell statistisk vurdering", "Fordi bare formelle tester av antakelsene godkjennes til eksamen", "Fordi residualplott alltid inneholder et mønster å slå ned på"],
      explanation: "Sensorkravet er mønsterord + antakelse: «ingen kurvatur, ingen varianstrend, ingen haleavvik» — ikke synsing.",
    },
    {
      question: "Hva er $E(E)$ for residualvektoren, og hvorfor?",
      options: ["$0$, fordi $(I-H)X\\beta=0$ når $HX=X$", "$X\\beta$, fordi residualene arver modellens systematiske del", "$\\sigma^2$, fordi forventningen følger feilleddenes varians", "$\\bar y$, fordi residualene er sentrert rundt gjennomsnittet"],
      explanation: "$E(E)=(I-H)E(Y)=(I-H)X\\beta$, og $HX=X$ gir null: alt systematisk ligger i projeksjonen.",
    },
    {
      question: "Hva er kovariansen mellom to ulike residualer $E_i$ og $E_j$?",
      options: ["$-\\sigma^2h_{ij}$ — residualene er svakt korrelerte", "$0$ — residualene er uavhengige som feilleddene", "$\\sigma^2h_{ij}$ — korrelasjonen følger hatmatrisen direkte", "$-\\sigma^2h_{ii}h_{jj}$ — produktet av leveragene"],
      explanation: "Utenfor diagonalen i $\\sigma^2(I-H)$ står $-\\sigma^2h_{ij}$: en forskjell fra de uavhengige feilleddene.",
    },
    {
      question: "Hvilket plott hører til hvilken antakelse (i rekkefølge: linearitet, konstant varians, normalitet)?",
      options: ["Residual mot tilpasset; scale-location; QQ-plott", "QQ-plott; residual mot tilpasset; scale-location", "Scale-location; QQ-plott; residual mot tilpasset", "Residual mot tilpasset; QQ-plott; scale-location"],
      explanation: "Én antakelse per plott: kurvatur (plott 1), varianstrend (plott 2), haleavvik (plott 3).",
    },
    {
      question: "Standardisert residual for $e_i=2{,}4$ med $\\hat\\sigma=1{,}5$ og $h_{ii}=0{,}36$?",
      options: ["$2{,}4/(1{,}5\\cdot0{,}8)=2{,}0$ — på grensen av det påfallende", "$2{,}4/(1{,}5\\cdot0{,}6)=2{,}67$ — klart utenfor den vanlige grensen", "$2{,}4/1{,}5=1{,}6$ — leverage påvirker ikke skalaen", "$2{,}4\\cdot0{,}8/1{,}5=1{,}28$ — godt innenfor grensen"],
      explanation: "$\\sqrt{1-0{,}36}=\\sqrt{0{,}64}=0{,}8$, så $e^*=2{,}4/1{,}2=2{,}0$; verdier rundt $\\pm2$ er påfallende.",
    },
  ],
  'stk1110-3-5': [
    {
      question: "Hva er forskjellen på det KI for forventet respons og prediksjonsintervallet skal fange?",
      options: ["KI fanger parameteren $\\beta_0+\\beta_1x_0$; PI fanger en ny stokastisk enkeltobservasjon", "KI fanger en ny enkeltobservasjon; PI fanger gjennomsnittslinja i det aktuelle punktet", "KI fanger $\\hat y_0$; PI fanger residualet til den nye observasjonen", "KI fanger hele regresjonslinja; PI fanger bare stigningstallet"],
      explanation: "Forventet respons er en fast parameter; en ny observasjon er stokastisk og trenger prediksjonsintervall.",
    },
    {
      question: "Hva er formelen for 95 %-prediksjonsintervallet ved $x_0$ i enkel regresjon?",
      options: ["$\\hat y_0\\pm t_{n-2,\\,0{,}025}\\,\\hat\\sigma\\sqrt{1+\\frac1n+\\frac{(x_0-\\bar x)^2}{S_{xx}}}$", "$\\hat y_0\\pm t_{n-2,\\,0{,}025}\\,\\hat\\sigma\\,\\sqrt{\\frac{1}{n}+\\frac{(x_0-\\bar x)^2}{S_{xx}}}$", "$\\hat y_0\\pm z_{0{,}025}\\,\\hat\\sigma\\sqrt{1+\\frac1n+\\frac{(x_0-\\bar x)^2}{S_{xx}}}$", "$\\hat y_0\\pm t_{n-1,\\,0{,}025}\\,\\hat\\sigma\\sqrt{1+\\frac{(x_0-\\bar x)^2}{S_{xx}}}$"],
      explanation: "PI har «$1+$» under rota og t-kvantil med $n-2$ frihetsgrader; uten «$1+$» er det KI-et.",
    },
    {
      question: "Hvor kommer «$1+$» under rota i prediksjonsintervallet fra?",
      options: ["Den nye observasjonens eget feilledd $\\varepsilon_0$ med varians $\\sigma^2$", "Usikkerheten i konstantleddet $\\hat\\beta_0$ som alltid bidrar med $\\sigma^2$", "Korreksjonen for at $\\hat\\sigma$ er estimert og ikke kjent", "Avrundingsfeilen i punktprediksjonen $\\hat y_0$"],
      explanation: "$V(Y_0-\\hat Y_0)=V(Y_0)+V(\\hat Y_0)$: den nye målingen spres selv $\\sigma^2$ rundt linja.",
    },
    {
      question: "Hva er $V(\\hat Y_0)$ for den tilpassede verdien i $x_0$?",
      options: ["$\\sigma^2\\bigl(\\frac1n+\\frac{(x_0-\\bar x)^2}{S_{xx}}\\bigr)$", "$\\sigma^2\\bigl(1+\\frac1n+\\frac{(x_0-\\bar x)^2}{S_{xx}}\\bigr)$", "$\\frac{\\sigma^2}{n}$ uavhengig av $x_0$", "$\\sigma^2\\frac{(x_0-\\bar x)^2}{S_{xx}}$ uten nivåleddet"],
      explanation: "Nivåledd $\\sigma^2/n$ pluss helningsledd $(x_0-\\bar x)^2\\sigma^2/S_{xx}$ — uten enkeltobservasjonens støy.",
    },
    {
      question: "Hvor er begge intervallene smalest?",
      options: ["Ved $x_0=\\bar x$ — der forsvinner helningsleddet", "Ved $x_0=0$ — der er konstantleddet eksakt kjent", "Ved største observerte $x$ — der er mest data", "Bredden er konstant over hele dataområdet"],
      explanation: "Helningsusikkerheten vipper linja om tyngdepunktet; i $\\bar x$ gjenstår bare nivåusikkerheten.",
    },
    {
      question: "Hvorfor er prediksjonsintervallet alltid bredere enn KI-et ved samme $x_0$ og nivå?",
      options: ["Uttrykket under rota er større med «$1+$», alt annet likt", "Prediksjonsintervallet bruker en større t-kvantil enn KI-et", "KI-et bruker $\\hat\\sigma$ mens prediksjonsintervallet bruker $\\sigma$", "Prediksjonsintervallet har færre frihetsgrader enn KI-et"],
      explanation: "Samme kvantil, samme $\\hat\\sigma$ — bare «$1+$» skiller, og det gjør PI-et bredere overalt.",
    },
    {
      question: "Hva skjer med de to intervallene når $n\\to\\infty$ (og $S_{xx}\\to\\infty$)?",
      options: ["KI-bredden går mot null; PI-halvbredden mot $z_{\\alpha/2}\\,\\sigma$", "Begge bredder går mot null når linja blir kjent eksakt", "Begge stabiliserer seg på $z_{\\alpha/2}\\,\\sigma$ som felles grense", "KI-bredden går mot $z_{\\alpha/2}\\,\\sigma$; PI-bredden mot null"],
      explanation: "Parameteren læres eksakt (KI → 0), men enkeltobservasjonens støy $\\sigma$ er irreduserbar (PI-gulv).",
    },
    {
      question: "Hvilke frihetsgrader har t-kvantilen i begge intervallene (enkel regresjon)?",
      options: ["$n-2$ — de følger $\\hat\\sigma$ fra regresjonen", "$n-1$ — som for et vanlig gjennomsnittsintervall", "$n$ — prediksjon binder ingen frihetsgrader", "$n-2$ for KI, men $n-1$ for prediksjonsintervallet"],
      explanation: "Frihetsgradene følger variansestimatoren $\\hat\\sigma^2=\\text{SSE}/(n-2)$ — samme i begge intervallene.",
    },
    {
      question: "Hva er ekstrapolering?",
      options: ["Å bruke modellen for $x_0$ utenfor de observerte $x$-verdiene", "Å predikere responsen for en $x_0$-verdi som allerede finnes i datasettet", "Å utvide modellen med flere prediktorer enn nødvendig", "Å gjenta prediksjonen for mange $x_0$-verdier samtidig"],
      explanation: "Utenfor dataområdet mangler både presisjon (bred rot) og belegg for linearitet — derfor advarselen.",
    },
    {
      question: "Hvorfor er ekstrapolering «dobbelt farlig»?",
      options: ["Intervallet eksploderer i bredde, og lineariteten er ubegrunnet utenfor dataene", "Frihetsgradene synker kraftig, og t-kvantilen blir udefinert utenfor dataområdet", "$\\hat\\sigma$ overvurderes, og $S_{xx}$ kan bli negativ langt ute", "Punktprediksjonen skifter fortegn, og residualene blir korrelerte"],
      explanation: "Både statistisk (helningsleddet vokser kvadratisk) og modellmessig (formen der ute er ren gjetning).",
    },
    {
      question: "«Hva blir strømforbruket i akkurat denne boligen på 120 m²?» Hvilket intervall?",
      options: ["Prediksjonsintervall — spørsmålet gjelder én ny enkeltobservasjon", "KI for forventet respons — spørsmålet gjelder boligtypens gjennomsnittsnivå", "KI for $\\beta_1$ — spørsmålet gjelder arealeffekten", "Ingen av dem — enkeltboliger kan ikke intervallestimeres"],
      explanation: "Nøkkelord «akkurat denne»: en stokastisk enkeltmåling krever prediksjonsintervall.",
    },
    {
      question: "«Hva er gjennomsnittlig avling ved gjødselmengde 8?» Hvilket intervall?",
      options: ["KI for forventet respons $\\mu_{Y\\mid 8}$ — gjennomsnittet er en parameter", "Prediksjonsintervall — hver enkelt avlingsmåling er jo alltid en enkeltobservasjon", "KI for $\\beta_0$ — konstantleddet beskriver nivået", "Et tosidig testintervall for $\\hat y_0$"],
      explanation: "Nøkkelord «gjennomsnittlig»: den sanne snittresponsen er en fast parameter og får et KI.",
    },
    {
      question: "Hva betyr 95 % for et prediksjonsintervall?",
      options: ["Den nye observasjonen havner i intervallet med sannsynlighet 0,95", "95 % av de gamle observasjonene ligger i intervallet", "Sannsynligheten er 0,95 for at snittlinja ligger i intervallet", "95 % av alle mulige regresjonslinjer passerer gjennom intervallet"],
      explanation: "PI er kalibrert mot den *neste enkeltmålingen* — ikke mot parameteren og ikke mot gamle data.",
    },
    {
      question: "Punktprediksjonen $\\hat y_0$ for en ny observasjon og punktestimatet for forventet respons er …",
      options: ["identiske — begge er $\\hat\\beta_0+\\hat\\beta_1x_0$; bare usikkerheten skiller", "forskjellige — prediksjonen legger til et eget anslag for støyleddet $\\varepsilon_0$", "forskjellige — forventningen bruker $\\bar y$ i stedet for linja", "identiske bare når $x_0=\\bar x$, ellers ulike"],
      explanation: "Beste gjetning på $\\varepsilon_0$ er null, så punktsvarene sammenfaller; intervallene gjør ikke det.",
    },
    {
      question: "Med $\\hat\\sigma=1{,}095$, $n=5$, $\\bar x=30$, $S_{xx}=1000$: hva er uttrykket under rota i PI ved $x_0=35$?",
      options: ["$1+0{,}2+0{,}025=1{,}225$", "$0{,}2+0{,}025=0{,}225$", "$1+0{,}2+0{,}25=1{,}45$", "$1+0{,}0025+0{,}2=1{,}2025$"],
      explanation: "$1+1/n+(x_0-\\bar x)^2/S_{xx}=1+1/5+25/1000$; uten «$1+$» hadde det vært KI-uttrykket.",
    },
    {
      question: "KI-et ved $x_0$ er $(53{,}95,\\ 57{,}25)$ og prediksjonsintervallet $(51{,}74,\\ 59{,}46)$. En rapport bytter dem om. Hva blir konsekvensen?",
      options: ["Enkeltprediksjonen fremstår altfor presis — det smale intervallet fanger langt under 95 % av nye målinger", "Ingen praktisk konsekvens — de to intervallene er kalibrert mot samme dekningsgrad på 95 % og kan derfor trygt byttes om", "Snittanslaget blir for smalt, siden det brede intervallet gjelder snittet", "Begge intervallene mister gyldighet og må regnes ut på nytt"],
      explanation: "Det smale (KI) gjelder snittet; å selge det som PI gir falsk presisjon for enkeltmålinger.",
    },
    {
      question: "Hva er linje-usikkerheten i multippel regresjon (kjenne til)?",
      options: ["$V(\\hat Y_0)=\\sigma^2\\,x_0^T(X^TX)^{-1}x_0$ med $t_{n-k-1}$-kvantil i intervallene", "$V(\\hat Y_0)=\\sigma^2\\,x_0^TX^TXx_0$ med $t_{n-2}$-kvantil i begge de to intervallene", "$V(\\hat Y_0)=\\sigma^2/n$ uansett hvor $x_0$ ligger i prediktorrommet", "$V(\\hat Y_0)=\\sigma^2(1-x_0^Tx_0)$ med normalkvantil i intervallene"],
      explanation: "Samme logikk som i enkel regresjon: kvadratisk form i $(X^TX)^{-1}$ måler avstanden fra datatyngdepunktet.",
    },
    {
      question: "Hvorfor bør dataområdet alltid oppgis i en prediksjonsoppgave?",
      options: ["Fordi vurderingen av om $x_0$ er interpolering eller ekstrapolering avhenger av det", "Fordi $S_{xx}$ ikke kan beregnes uten at områdets endepunkter er kjent på forhånd", "Fordi t-kvantilen skal slås opp med dataområdets bredde", "Fordi intervallet alltid skal sentreres i midten av området"],
      explanation: "Sensor ser etter forsvarlighetsvurderingen: innenfor = støtte i data, utenfor = advarsel.",
    },
    {
      question: "Bredden på KI-et ved $x_0=20$ vs. $x_0=30$ (med $\\bar x=30$): hvilket utsagn stemmer?",
      options: ["Intervallet ved 20 er bredere — helningsleddet $(20-30)^2/S_{xx}$ kommer i tillegg", "Intervallet ved 30 er bredere — der er usikkerheten i nivået på sitt aller største", "Like brede — bredden avhenger ikke av $x_0$ i enkel regresjon", "Det avhenger av responsverdiene, ikke av $x$-plasseringen"],
      explanation: "Avstand fra tyngdepunktet koster bredde: i $\\bar x$ er helningsbidraget null.",
    },
    {
      question: "Når er prediksjonsintervallet til å stole på?",
      options: ["Når $x_0$ ligger i dataområdet og residualdiagnostikken er godkjent", "Når $n$ er stort nok, uansett hvor $x_0$ ligger", "Når $R^2$ er høy, uansett modellantakelsene", "Når punktprediksjonen er positiv og $\\hat\\sigma$ er tilstrekkelig liten i forhold"],
      explanation: "Interpolering + holdbare antakelser (kap. 3.4) er forutsetningene formlene hviler på.",
    },
  ],
  'stk1110-3-6': [
    {
      question: "Hva modellerer logistisk regresjon for en binær respons $Y$?",
      options: ["Sannsynligheten $P(Y=1\\mid x)$ via en logit-lenke", "Forventningen til $Y$ som en rett linje direkte i $x$", "Variansen til $Y$ som en funksjon av forklaringsvariabelen", "Antall suksesser i utvalget som en Poisson-prosess i $x$"],
      explanation: "Modellen legger den rette linja $\\beta_0+\\beta_1x$ på logit-skalaen, slik at $p(x)=P(Y=1\\mid x)$ alltid ligger mellom 0 og 1.",
    },
    {
      question: "Hva er logiten til en sannsynlighet $p$?",
      options: ["$\\log\\dfrac{p}{1-p}$, altså logaritmen til oddsen", "$\\dfrac{p}{1-p}$, altså oddsen for hendelsen selv", "$\\log p$, altså logaritmen av sannsynligheten alene", "$\\dfrac{1-p}{p}$, altså den inverterte oddsen for utfallet"],
      explanation: "Logiten er log-oddsen $\\log\\frac{p}{1-p}$ — størrelsen som er lineær i $x$ i den logistiske modellen.",
    },
    {
      question: "Hva er den korrekte tolkningen av $\\beta_1$ i logistisk regresjon?",
      options: ["Logiten øker med $\\beta_1$ per enhet $x$; oddsen ganges med $e^{\\beta_1}$", "Sannsynligheten $p$ øker med nøyaktig $\\beta_1$ for hver enhetsøkning i forklaringsvariabelen $x$", "Sannsynligheten øker med $\\beta_1$ prosentpoeng uansett utgangsnivå", "Antall suksesser i utvalget øker med $\\beta_1$ per enhet $x$"],
      explanation: "$\\beta_1$ er en logit-/oddsforskjell. Endringen i $p$ selv avhenger av hvor på S-kurven du står — den er ikke konstant.",
    },
    {
      question: "Med dummy $x\\in\\{0,1\\}$ for to grupper: hva betyr $\\beta_1=0$?",
      options: ["At suksess-sannsynligheten er lik i de to gruppene", "At suksess-sannsynligheten er 0,5 i referansegruppen", "At modellen mangler konstantledd og må tilpasses på nytt", "At begge gruppene har suksess-sannsynlighet nøyaktig null"],
      explanation: "Logiten er strengt voksende, så $p_0=p_1\\iff\\beta_1=0$. Det er nøkkelen til to-gruppe-testen. ($p_0=0{,}5$ svarer til $\\beta_0=0$.)",
    },
    {
      question: "Hva er $e^{\\beta_1}$ i dummymodellen for to grupper?",
      options: ["Oddsforholdet mellom gruppe 1 og gruppe 0", "Differansen i suksessandel mellom de to gruppene", "Sannsynligheten for suksess i gruppen med $x=1$", "Forholdet mellom de to gruppenes utvalgsstørrelser"],
      explanation: "$\\beta_1$ er logit-differansen, så $e^{\\beta_1}$ er forholdet mellom gruppenes odds — oddsforholdet (OR).",
    },
    {
      question: "Hvorfor passer ikke vanlig lineær regresjon for en 0/1-respons?",
      options: ["Linja $\\beta_0+\\beta_1x$ kan gi «sannsynligheter» under 0 eller over 1", "Minste kvadraters metode kan ikke regnes ut når $Y$ bare tar to verdier", "En binær respons har ingen forventning, så modellen blir udefinert", "Fordi $R^2$ ikke kan beregnes når responsen bare har to nivåer"],
      explanation: "En rett linje er ubegrenset og bryter $0\\le p\\le 1$; i tillegg er variansen $p(1-p)$ ikke konstant. Logit-lenken løser begge problemene.",
    },
    {
      question: "Utskriften fra en logistisk regresjon har kolonnene z value og Pr(>|z|). Hvorfor z og ikke t?",
      options: ["Inferensen bygger på normaltilnærmingen for ML-estimatorer i store utvalg", "Fordi utvalget i logistisk regresjon alltid er for lite til at t-fordelingen kan brukes", "Fordi feilleddene i logistisk regresjon er eksakt normalfordelte", "Fordi frihetsgradene $n-2$ ikke lar seg beregne for binære data"],
      explanation: "Wald-inferensen i logistisk regresjon er asymptotisk: $\\hat\\beta_1/se$ er tilnærmet $N(0,1)$ — ingen eksakt t-fordeling finnes her.",
    },
    {
      question: "Hvilke verdier kan $p(x)=e^{\\beta_0+\\beta_1x}/(1+e^{\\beta_0+\\beta_1x})$ ta?",
      options: ["Alltid strengt mellom 0 og 1, for alle verdier av $x$", "Alle reelle verdier, siden den lineære prediktoren er ubegrenset", "Bare verdier mellom 0 og 0,5 når helningen $\\beta_1$ er negativ", "Nøyaktig verdiene 0 og 1, siden responsen selv er binær"],
      explanation: "S-kurven ligger strengt mellom 0 og 1 uansett $x$ — det er hele poenget med logit-lenken. ($p=0{,}5$ nås der $\\eta=0$.)",
    },
    {
      question: "Hva er $\\beta_0$ i dummymodellen $\\operatorname{logit}(p)=\\beta_0+\\beta_1x$, $x\\in\\{0,1\\}$?",
      options: ["Logiten til suksess-sannsynligheten i referansegruppen ($x=0$)", "Suksess-sannsynligheten i referansegruppen målt i prosent", "Gjennomsnittet av logitene i de to gruppene som sammenlignes", "Oddsforholdet mellom gruppene før dummyen legges inn"],
      explanation: "Med $x=0$ er $\\operatorname{logit}(p_0)=\\beta_0$ — konstantleddet er referansegruppens log-odds, ikke en sannsynlighet.",
    },
    {
      question: "$\\hat\\beta_1=1{,}2$ for en dummy. Hvorfor kan du IKKE si «tiltaket øker sannsynligheten med et fast antall prosentpoeng»?",
      options: ["Endringen i $p$ avhenger av basisnivået $p_0$ sin plassering på S-kurven", "Fordi $\\hat\\beta_1$ først må ganges med utvalgsstørrelsen $n$ før den kan tolkes som effekt", "Fordi dummyvariabler aldri kan gi effekter på sannsynlighetsskalaen", "Fordi 1,2 er større enn 1 og sannsynligheter må ligge under 1"],
      explanation: "Konstant er bare logit-økningen (odds ganges med $e^{1{,}2}$). Prosentpoeng-endringen i $p$ varierer med basisnivået — størst nær $p=0{,}5$.",
    },
  ],
  'stk1110-3-7': [
    {
      question: "Hva er alltid første trinn i syvtrinnsoppskriften for en regresjonsoppgave?",
      options: ["Definere modellen $Y_i=\\beta_0+\\beta_1x_{i1}+\\dots+\\varepsilon_i$ med antakelsene", "Regne ut $R^2$ og justert $R^2$ for alle kandidatmodellene som er oppgitt i oppgaven", "Tegne de tre residualplottene og vurdere mønstrene i dem grundig", "Konstruere prediksjonsintervallet for den nye observasjonen i oppgaven"],
      explanation: "Trinn 1 er modell + antakelser (uavhengige $\\varepsilon_i\\sim N(0,\\sigma^2)$); diagnostikk og prediksjon kommer i trinn 6–7.",
    },
    {
      question: "Hvilken frihetsgrad brukes i koeffisientinferens i en multippel regresjon med $k$ prediktorer?",
      options: ["$n-k-1$, fordi $k+1$ parametere er estimert", "$n-1$, samme som for ett utvalg med estimert varians", "$n-2$, uansett hvor mange prediktorer modellen har", "$n-k$, fordi konstantleddet ikke teller som parameter"],
      explanation: "Modellen estimerer $\\beta_0,\\beta_1,\\dots,\\beta_k$ — altså $k+1$ parametere — og residualfrihetsgraden blir $n-k-1$ ($n-2$ er spesialtilfellet $k=1$).",
    },
    {
      question: "Hvordan verifiserer du t value-kolonnen i en R-utskrift?",
      options: ["Del Estimate på Std. Error for hver rad i tabellen", "Del Std. Error på Estimate og sammenlign med kvantilen", "Gang Estimate med Std. Error og se mot F-statistikken", "Del Estimate på Residual standard error fra df-linja"],
      explanation: "t value $=$ Estimate/Std. Error — observatoren for $H_0:\\beta_j=0$.",
    },
    {
      question: "Hva betyr tallet i Pr(>|t|)-kolonnen?",
      options: ["Tosidig P-verdi for testen av $H_0:\\beta_j=0$", "Sannsynligheten for at koeffisienten $\\beta_j$ er lik null", "Andelen av variasjonen i $y$ som variabelen forklarer", "Sannsynligheten for at modellen som helhet er riktig"],
      explanation: "Pr(>|t|) er P-verdien: sannsynligheten under $H_0:\\beta_j=0$ for et minst like ekstremt utfall. Hypoteser har ingen sannsynlighet.",
    },
    {
      question: "Hvordan bygger du et 95 %-KI for $\\beta_j$ rett fra utskriften?",
      options: ["Estimate $\\pm\\ t_{df,\\,0{,}025}\\cdot$ Std. Error, med df fra RSE-linja", "Estimate $\\pm\\ 1{,}96\\cdot$ Residual standard error, lest fra bunnlinja i utskriften", "t value $\\pm\\ t_{df,\\,0{,}025}\\cdot$ Std. Error fra samme rad", "Estimate $\\pm\\ 2\\cdot$ Pr(>|t|) multiplisert med standardfeilen"],
      explanation: "KI $=$ Estimate $\\pm\\ t_{df,\\,\\alpha/2}\\cdot$ Std. Error; frihetsgraden leses av «on … degrees of freedom».",
    },
    {
      question: "Hvilken hypotese tester F-statistic-linja i en multippel regresjon?",
      options: ["$H_0:\\beta_1=\\dots=\\beta_k=0$ — ingen av prediktorene har effekt", "$H_0:$ alle koeffisientene i modellen, inkludert konstantleddet $\\beta_0$, er lik null", "$H_0:$ feilleddene er normalfordelte med konstant varians", "$H_0:R^2=0{,}5$ — modellen forklarer halvparten av variasjonen"],
      explanation: "F-testen er den samlede testen av alle helningene (konstantleddet inngår ikke).",
    },
    {
      question: "I enkel regresjon: hva er sammenhengen mellom F-statistikken og t-verdien for stigningstallet?",
      options: ["$F=T^2$ — de er samme test med samme P-verdi", "$F=2T$ — F-testen dobler t-verdien for tosidighet", "$F=T/2$ fordi F-testen bare bruker én hale av fordelingen", "Ingen — F og t tester helt forskjellige nullhypoteser der"],
      explanation: "Med én prediktor er $F=T^2$ og $F_{1,\\nu}$-testen identisk med den tosidige $t_\\nu$-testen.",
    },
    {
      question: "Hvorfor kan ikke Multiple R-squared brukes til å velge mellom modeller med ulikt antall variabler?",
      options: ["$R^2$ øker alltid når en variabel legges til, uansett om den er nyttig", "$R^2$ kan bare beregnes når modellen har nøyaktig én prediktor", "$R^2$ synker alltid når utvalgsstørrelsen vokser, og er derfor for ustabil til modellvalg", "$R^2$ måler bare variansen til residualene, ikke tilpasningen"],
      explanation: "SSE kan aldri øke når en variabel legges til, så $R^2$ stiger automatisk — derfor brukes justert $R^2$ til modellvalg.",
    },
    {
      question: "Hva er formelen for justert $R^2$?",
      options: ["$1-\\dfrac{\\text{SSE}/(n-k-1)}{\\text{SST}/(n-1)}$", "$1-\\dfrac{\\text{SSE}}{\\text{SST}}$ multiplisert med $\\dfrac{k}{n}$", "$R^2-\\dfrac{k}{n-1}$ der $k$ er antall prediktorer i modellen", "$\\dfrac{\\text{SSR}}{\\text{SST}}\\cdot\\dfrac{n-1}{n-k-1}$ uten fratrekk"],
      explanation: "Justert $R^2$ erstatter kvadratsummene med variansestimater — det straffer ekstra prediktorer via $n-k-1$ i telleren.",
    },
    {
      question: "Hva er konfundering i regresjonssammenheng?",
      options: ["At en koeffisient endres når en korrelert variabel tas inn i modellen", "At to prediktorer alltid må fjernes samtidig fra en multippel regresjonsmodell", "At residualene blir korrelerte når modellen har flere prediktorer", "At $R^2$ og justert $R^2$ gir motsatte konklusjoner om modellvalget"],
      explanation: "Uten den korrelerte variabelen fanger den gamle koeffisienten også noe av dens effekt; i multippel modell måles effekten med den andre holdt konstant.",
    },
    {
      question: "Når endrer en koeffisient seg IKKE fra enkel til multippel modell?",
      options: ["Når prediktorene er ukorrelerte (ortogonale), som ved balansert design", "Når begge prediktorene i modellen er signifikante på 5 %-nivået", "Når utvalgsstørrelsen er over 30, slik at sentralgrenseteorem-tilnærmingen gjelder", "Når responsen er standardisert til gjennomsnitt null før analysen"],
      explanation: "Konfunderingen drives av korrelasjon mellom prediktorene; med ortogonale prediktorer står koeffisienten (tilnærmet) fast.",
    },
    {
      question: "Et parabelmønster i residual-mot-tilpasset-plottet tyder på hva?",
      options: ["Ikke-linearitet — modellen mangler f.eks. et kvadratledd", "Heteroskedastisitet — variansen vokser med nivået på responsen", "Ikke-normalitet — feilleddene har tydelig tyngre haler enn normalen", "Autokorrelasjon — feilleddene er avhengige over tid i datasettet"],
      explanation: "Kurvatur i residual-mot-tilpasset avslører feil funksjonsform; varians sjekkes i scale-location og normalitet i QQ-plottet.",
    },
    {
      question: "Hva avslører en stigende trend i scale-location-plottet?",
      options: ["Heteroskedastisitet — feilvariansen er ikke konstant", "Ikke-linearitet — sammenhengen er krum og ikke en rett linje", "At residualene ikke summerer seg til null slik teorien krever", "At QQ-plottet også nødvendigvis vil vise et klart brudd"],
      explanation: "Scale-location plotter $\\sqrt{|e_i|}$ mot tilpassede verdier; en trend betyr at spredningen endrer seg med nivået — brutt konstant varians.",
    },
    {
      question: "Hva sjekker QQ-plottet av residualene?",
      options: ["Om feilleddene er forenlige med normalfordelingen", "Om det finnes kurvatur som tilsier et ekstra kvadratledd", "Om residualvariansen er konstant over tilpassede verdier", "Om prediktorene er sterkt korrelerte med hverandre"],
      explanation: "QQ-plottet sammenligner residualkvantiler med normalkvantiler; systematisk avvik fra linja indikerer ikke-normalitet.",
    },
    {
      question: "Hvorfor er prediksjonsintervallet alltid bredere enn KI-et for forventet respons ved samme $x_0$?",
      options: ["Den nye observasjonens eget støyledd $\\varepsilon_0$ kommer i tillegg", "Prediksjonsintervallet bruker en større t-kvantil enn konfidensintervallet", "KI-et gjelder bare i $\\bar x$, der usikkerheten alltid er minst", "PI-et bruker frihetsgraden $n-1$ i stedet for $n-2$ i kvantilen"],
      explanation: "PI-et skal fange en ny enkeltobservasjon, ikke bare linjas nivå — derfor «$1+$» under rota. Kvantil og df er de samme.",
    },
    {
      question: "Hvilket ledd i intervallformlene gjør at bredden vokser når $x_0$ fjerner seg fra $\\bar x$?",
      options: ["$(x_0-\\bar x)^2/S_{xx}$ under rottegnet", "$1/n$-leddet, som dominerer i begge haler av dataområdet", "t-kvantilen, som øker med avstanden fra gjennomsnittet", "$\\hat\\sigma$, som estimeres på nytt for hver verdi av $x_0$"],
      explanation: "Avstandsleddet $(x_0-\\bar x)^2/S_{xx}$ vokser kvadratisk — derfor blir intervaller stadig bredere mot og utenfor kanten av dataområdet.",
    },
    {
      question: "Hva er den riktige reaksjonen når noen vil predikere langt utenfor dataområdet?",
      options: ["Fraråde det: lineariteten er udokumentert der og intervallene eser ut", "Godta det så lenge prediksjonsintervallet regnes med «$1+$» under rota", "Bytte til konfidensintervall for forventningen, som tåler ekstrapolering", "Øke konfidensnivået til 99 % slik at intervallet garantert dekker"],
      explanation: "Ekstrapolering er et modellproblem, ikke et intervallproblem: utenfor dataområdet finnes ikke belegg for linjeformen.",
    },
    {
      question: "Hva er «Residual standard error» i utskriften?",
      options: ["$\\hat\\sigma=\\sqrt{\\text{SSE}/df}$ — estimatet av feilleddets standardavvik", "Standardfeilen til stigningstallet $\\hat\\beta_1$, klar til bruk i konfidensintervallet", "Summen av de kvadrerte residualene delt på utvalgsstørrelsen $n$", "Gjennomsnittet av absoluttverdien til residualene i tilpasningen"],
      explanation: "RSE er $\\hat\\sigma$ på $df=n-k-1$ frihetsgrader; standardfeilen til $\\hat\\beta_1$ står i Std. Error-kolonnen.",
    },
    {
      question: "En koeffisient i en multippel modell er ikke signifikant. Hva er korrekt tolkning?",
      options: ["Ingen påvisbar tilleggseffekt utover de andre variablene i modellen", "Variabelen er uviktig og kan alltid strykes uten konsekvenser", "Variabelen har effekt, men bare i den enkle modellen uten de andre", "Testen er ugyldig fordi frihetsgradene blir for små i multippel modell"],
      explanation: "t-testen er betinget på de øvrige variablene; særlig ved korrelerte prediktorer kan en viktig variabel få svak t-test.",
    },
    {
      question: "Utskriftens Pr(>|t|) hjelper deg ikke når du skal teste $H_0:\\beta_1=1$. Hvorfor?",
      options: ["Kolonnen gjelder nullverdien 0; mot 1 må $T=(\\hat\\beta_1-1)/se$ regnes selv", "Kolonnen gjelder bare konstantleddet i modellen, aldri helningskoeffisientene", "P-verdier kan ikke brukes for andre nivåer enn akkurat 5 prosent", "Testen mot 1 krever F-fordelingen, som ikke står i utskriften"],
      explanation: "t value og Pr(>|t|) er bygget for $H_0:\\beta_j=0$. Andre nullverdier: sett inn i $T=(\\hat\\beta_j-c)/se(\\hat\\beta_j)$ med samme df.",
    },
    {
      question: "Hva krever sensor av en koeffisienttolkning i kontekst?",
      options: ["Tall med enhet, og i multippel modell «med de øvrige holdt konstant»", "At koeffisienten alltid standardiseres til enhetsfri form før den tolkes i svaret", "At tolkningen alltid gjøres på logaritmisk skala for presisjon", "At bare signifikante koeffisienter tolkes, resten hoppes over"],
      explanation: "«Per enhet $x$ endres forventet $y$ med … [enhet], med øvrige variabler holdt konstant» — naken tallverdi gir trekk.",
    },
    {
      question: "Hva gjør du på eksamen hvis du ikke klarer deloppgave (b), men (c) bygger på svaret?",
      options: ["Bruker det oppgitte mellomresultatet og regner (c) videre med det", "Hopper over resten av oppgaven og går videre til neste storoppgave", "Lar (c) stå blank siden den formelt sett avhenger av (b)-svaret", "Gjetter et tall i (b) uten kommentar og fører det stille videre"],
      explanation: "Kjedene er bygget slik at oppgitte mellomresultater holder resten åpen — å stoppe ved første hinder er den dyreste strategifeilen.",
    },
    {
      question: "Hvor i utskriften finner du både $\\hat\\sigma$ og utvalgsstørrelsen (indirekte)?",
      options: ["I «Residual standard error: … on … degrees of freedom»-linja", "I Estimate-kolonnen, som alltid har $n$ som siste oppføring", "I F-statistic-linja, der $n$ alltid står oppført som den første frihetsgraden", "I signifikanskodene (stjernene) etter Pr(>|t|)-kolonnen"],
      explanation: "Linja gir $\\hat\\sigma$ og $df$; med kjent $k$ er $n=df+k+1$. (F-linjas første df er $k$, ikke $n$.)",
    },
    {
      question: "Standardiserte residualer deler $e_i$ på $\\hat\\sigma\\sqrt{1-h_{ii}}$. Hvorfor korreksjonen $1-h_{ii}$?",
      options: ["Residualene har ulik varians, $\\sigma^2(1-h_{ii})$, avhengig av posisjon", "Fordi hatmatrisen ellers gjør alle residualene i utvalget nøyaktig like store", "Fordi $h_{ii}$ er residualets P-verdi, som må skaleres bort først", "For å tvinge residualene til å summere seg til nøyaktig null"],
      explanation: "Fra $E=(I-H)Y$ følger $\\text{Var}(e_i)=\\sigma^2(1-h_{ii})$ — punkter med høy leverage har små rå-residualer, og korreksjonen gjør dem sammenlignbare.",
    },
    {
      question: "Hva må være med i en full a–f-besvarelse av prediksjonsleddet (trinn 7)?",
      options: ["KI/PI-skillet, «$1+$» i PI-rota og en dataområde-kommentar", "Bare punktprediksjonen $\\hat y_0$, siden intervallene er valgfrie", "En ny F-test som bekrefter at prediksjonen er signifikant", "Standardiserte residualer for den nye observasjonen $x_0$"],
      explanation: "Sensor ser etter at du skiller forventnings- og prediksjonsintervall, peker på «$1+$»-leddet og vurderer ekstrapoleringsfaren.",
    },
  ],
  'stk1110-4-1': [
    {
      question: "Et deltrinn lyder «utled ML-estimatoren for $\\theta$ og vis at du har funnet et maksimum». Hvilken sjanger er dette?",
      options: ["Sjanger A — moment-/ML-utledning", "Sjanger B — forventningsretthet og varians", "Sjanger C — Fisher-informasjon og Wald", "Sjanger E — testritualet (full pakke)"],
      explanation: "Utledning av punktestimatoren (moment eller ML, med bekreftet maksimum) er sjanger A — åpningen av Oppgave 1.",
    },
    {
      question: "Et deltrinn lyder «vis at $\\hat\\theta$ er forventningsrett og finn variansen». Hvilken sjanger er dette?",
      options: ["Sjanger B — forventningsretthet og varians", "Sjanger A — moment-/ML-utledning med bekreftet maksimum", "Sjanger D — konfidensintervall", "Sjanger C — Fisher-informasjon og Wald"],
      explanation: "Kvalitetsvurdering av estimatoren ($E$, Var, eventuelt sammenligning) er sjanger B.",
    },
    {
      question: "Et deltrinn ber deg finne $I(\\theta)$ og angi den tilnærmede fordelingen til ML-estimatoren. Hvilken sjanger?",
      options: ["Sjanger C — Fisher-informasjon og Wald", "Sjanger N — eksakt pivot", "Sjanger B — forventningsretthet og varians", "Sjanger L — Bayesiansk inferens"],
      explanation: "Fisher-informasjon og MLE-asymptotikken $N(\\theta,1/(nI(\\theta)))$ er sjanger C — spesialistpunktet i estimeringskjeden.",
    },
    {
      question: "Oppgaven oppgir en gammafordelt apriori for en Poisson-rate og ber om aposteriorifordelingen. Hvilken sjanger?",
      options: ["Sjanger L — Bayesiansk inferens", "Sjanger M — enveis ANOVA", "Sjanger O — ikke-parametrikk og bootstrap", "Sjanger N — eksakt pivot"],
      explanation: "Apriori → aposteriori via $\\pi(\\theta\\mid x)\\propto\\pi(\\theta)L(\\theta)$ er sjanger L, det roterende Bayes-punktet (nytt fast innslag siden 2022).",
    },
    {
      question: "Deltrinn c) i en kjede stopper helt for deg, men c)-svaret står oppgitt i d). Hva er riktig strategi?",
      options: ["Bruk det oppgitte mellomresultatet og løs d)–f) som normalt", "Fortsett med c) til det løsner, siden d)–f) bygger på det", "Dropp resten av storoppgaven og gå rett videre til neste oppgave i settet", "Løs d)–f) rent symbolsk og la være å sette inn tallverdier"],
      explanation: "Kjeden er konstruert for å tåle hull: et oppgitt mellomresultat gir full uttelling på alle senere trinn.",
    },
    {
      question: "Hvilken storoppgave bør du aldri gi mindre enn omtrent en tredjedel av tiden, og hvorfor?",
      options: ["Regresjonsoppgaven — den bærer flest delpunkter", "Estimeringsoppgaven — den kommer alltid først i settet", "Test/KI-oppgaven — den har flest mulige testtyper", "Det er likegyldig — alle oppgavene teller nøyaktig likt"],
      explanation: "Regresjonsoppgaven (Oppgave 3) er settets lengste og mest poengtunge; å underprioritere den er en klassisk strategifeil.",
    },
    {
      question: "Hva er riktig rekkefølge i toppbesvarelsens fem trinn på et deltrinn?",
      options: ["Modell → utledning → fordeling/df → tolkning → kryssjekk", "Utledning → modell → tolkning → fordeling/df → kryssjekk", "Fordeling/df → modell → utledning → kryssjekk → tolkning", "Modell → tolkning → utledning → kryssjekk → fordeling/df"],
      explanation: "Definer modellen først, vis alle utledningstrinn, angi riktig fordeling med frihetsgrader, tolk i ord, og kryssjekk til slutt.",
    },
    {
      question: "Hva sier KI↔test-dualiteten?",
      options: ["$\\theta_0$ utenfor det tosidige 95 %-intervallet $\\iff$ tosidig test på 5 %-nivå forkaster $H_0:\\theta=\\theta_0$", "$\\theta_0$ innenfor det tosidige 95 %-intervallet $\\iff$ den tosidige testen på 5 %-nivå forkaster $H_0:\\theta=\\theta_0$", "$\\theta_0$ utenfor 95 %-intervallet $\\iff$ P-verdien for $H_0:\\theta=\\theta_0$ er større enn 0,05", "$\\theta_0$ i 95 %-intervallet $\\iff$ $H_0:\\theta=\\theta_0$ er sann med 95 % sannsynlighet"],
      explanation: "Det tosidige $(1-\\alpha)$-intervallet består av nøyaktig de $\\theta_0$ som den tosidige testen på nivå $\\alpha$ ikke forkaster.",
    },
    {
      question: "Hvilke fem trinn utgjør testritualet (sjanger E)?",
      options: ["$H_0/H_a$ med retning; observator med fordeling; nivå-utledning; tallfesting; konklusjon i ord", "$H_0/H_a$; P-verdi; konfidensintervall; styrkeberegning; konklusjon i ord", "Definer modell; utled estimator; vis forventningsretthet; finn varians; konstruer konfidensintervall", "Observator; kvantiltabell; forkastningsområde; P-verdi; dualitetssjekk"],
      explanation: "Ritualet er hypoteser med begrunnet retning, observator med fordeling under $H_0$, utledning av at nivået blir $\\alpha$, tallfesting og konklusjon i ord.",
    },
    {
      question: "Et deltrinn ber om «et 95 % intervall for *neste enkeltmåling*» i $x_0$. Hvilken sjanger, og hvilket intervall?",
      options: ["Sjanger K — prediksjonsintervallet, som har «$1+$» under rota", "Sjanger D — konfidensintervallet for forventet respons i punktet $x_0$", "Sjanger K — konfidensintervallet, som alltid er bredest", "Sjanger H — t-intervallet for stigningstallet $\\beta_1$"],
      explanation: "En ny enkeltobservasjon krever prediksjonsintervallet (sjanger K); det bærer også støyleddets varians og er bredere enn KI-et for forventningen.",
    },
    {
      question: "Deltrinnet gir deg to R-utskrifter og ber deg velge modell. Hvilken sjanger og hvilket tall avgjør?",
      options: ["Sjanger I — sammenlign justert $R^2$", "Sjanger I — sammenlign vanlig $R^2$", "Sjanger J — sammenlign Residual standard error", "Sjanger H — sammenlign F-statistikkene direkte"],
      explanation: "Modellvalg hører til sjanger I og gjøres med justert $R^2$ — vanlig $R^2$ øker alltid når en variabel legges til.",
    },
    {
      question: "Blodtrykk måles på de samme personene før og etter behandling. Hvilken sjanger, og hva er grepet?",
      options: ["Sjanger G — reduser til differansene $D_i$ og analyser som ett utvalg", "Sjanger G — kjør pooled to-utvalgs t-test på gruppene med $m+n-2$ frihetsgrader", "Sjanger M — enveis ANOVA med gruppene før og etter", "Sjanger O — rangtest, siden dataene ikke er uavhengige"],
      explanation: "Parvise data er sjanger G-varianten der du analyserer differansene som ett utvalg — to-utvalgsanalyse er selve fellen.",
    },
    {
      question: "Når foretrekker fasiten et eksakt pivot-intervall (sjanger N) framfor Wald?",
      options: ["Når standardavviket til estimatoren avhenger av parameteren selv", "Når utvalget er stort, siden normaltilnærmingen da blir for upresis til Wald", "Aldri — Wald-intervallet er alltid førstevalget i fasitene", "Når parameteren er en andel mellom 0 og 1"],
      explanation: "Avhenger $se(\\hat\\theta)$ av $\\theta$, gir pivoten et eksakt (gjerne asymmetrisk) intervall — asymmetrien er et trekk, ikke en feil.",
    },
    {
      question: "Hvilke deltrinn er de «sikre punktene» du tar først i alle kjedene?",
      options: ["Modelldefinisjon, standard estimator/intervall og R-utskrift-avlesning", "Fisher-informasjon, eksakt pivot og Bayes-oppdateringen", "Kryssjekkene — dualitetssjekk og rimelighetsvurdering av alle tallsvarene", "Diagnostikk-drøftingene, siden de ikke krever regning"],
      explanation: "Sikre-punkter-strategien: ta de tidlige, metodesikre punktene i alle oppgavene før spesialistpunktene.",
    },
    {
      question: "Ved tre storoppgaver på 240 minutter — hvilket tidsoppsett anbefaler kapitlet?",
      options: ["~75 min estimering, ~65 min test/KI, ~85 min regresjon, ~15 min kontroll", "Nøyaktig 80 min på hver av de tre oppgavene, uten avsatt sluttkontroll", "~50 min på estimeringen, ~50 min på test/KI og ~140 min på regresjonsoppgaven", "Ingen plan — regn kronologisk til tiden går ut"],
      explanation: "Budsjettet gir regresjonen mest (den bærer flest delpunkter), holder av sluttkontroll, og settes opp *før* du begynner å regne.",
    },
  ],
  'stk1110-4-2': [
    {
      question: "I oppgave 1f brukes $z_{0{,}025}$ i Wald-intervallet, men i oppgave 2d brukes $t_{20;\\,0{,}025}$. Hvorfor?",
      options: ["Wald bygger på ML-asymptotikkens normaltilnærming; t-intervallet gjelder normaldata med estimert $\\sigma$", "Wald-intervallet gjelder for små utvalg, mens t-intervallet brukes når utvalgene er store nok for normaltilnærming", "Begge burde brukt t-kvantil, men Wald-intervallet avrunder $t$ til $z$ for enkelhets skyld", "Valget er fritt — z- og t-kvantilene gir i praksis samme intervall så lenge nivået er 95 %"],
      explanation: "Wald-intervallet hviler på at $\\hat\\theta_{ML}$ er tilnærmet normalfordelt (z-kvantil); i to-utvalgsoppgaven er dataene normale med estimert felles varians, som gir eksakt $t_{m+n-2}$.",
    },
    {
      question: "Hva er frihetsgradene til den poolede to-utvalgs t-observatoren i oppgave 2, med $m=10$ og $n=12$?",
      options: ["20", "21", "22", "11"],
      explanation: "Pooled to-utvalg har $m+n-2=10+12-2=20$ frihetsgrader — ett tap per estimert gruppeforventning.",
    },
    {
      question: "Hvorfor må $\\ell''(\\hat\\theta)<0$ sjekkes i oppgave 1b?",
      options: ["Score-nullpunktet kan i prinsippet være et minimum eller sadelpunkt; fortegnet bekrefter maksimum", "Det viser at estimatoren er forventningsrett og dessuten konsistent for alle verdier av parameteren $\\theta$", "Det sikrer at likelihoodfunksjonen er veldefinert og positiv på hele parameterrommet $\\theta>0$", "Det beviser at moment- og ML-estimatoren sammenfaller for denne modellen"],
      explanation: "$s(\\hat\\theta)=0$ sier bare at punktet er stasjonært; $\\ell''(\\hat\\theta)<0$ bekrefter at det maksimerer likelihooden — et eget delpoeng i fasitene.",
    },
    {
      question: "P-verdien i oppgave 2c er omtrent 0,011. Hva betyr det?",
      options: ["Under $H_0$ er sannsynligheten 0,011 for en testobservator minst like ekstrem som den observerte", "Sannsynligheten for at nullhypotesen $H_0$ er sann, gitt de observerte dataene, er 0,011", "Sannsynligheten for at alternativet $H_a$ er feilaktig er 0,011, gitt at testen endte med å forkaste $H_0$", "Testen tar feil i 1,1 % av alle mulige utfall av forsøket"],
      explanation: "P-verdien er en halesannsynlighet beregnet under $H_0$ — aldri sannsynligheten for at en hypotese er sann.",
    },
    {
      question: "Hvorfor brukes justert $R^2$ (ikke `Multiple R-squared`) til modellvalget i oppgave 3d?",
      options: ["Vanlig $R^2$ øker alltid når en variabel legges til, også når den er unyttig", "Justert $R^2$ måler prediksjonsfeilen direkte, mens vanlig $R^2$ måler tilpasning", "Vanlig $R^2$ kan ikke beregnes når modellen har mer enn én forklaringsvariabel", "Justert $R^2$ er alltid størst i den modellen som har flest variabler"],
      explanation: "Minste kvadrater tilpasser aldri dårligere med flere ledd, så $R^2$ stiger uansett; justert $R^2$ straffer forbrukte frihetsgrader.",
    },
    {
      question: "Hvorfor er prediksjonsintervallet i oppgave 3f mye bredere enn konfidensintervallet i samme punkt?",
      options: ["Det gjelder én ny observasjon og bærer i tillegg støyleddets varians $\\sigma^2$", "Det bruker en strengere t-kvantil enn konfidensintervallet ved samme konfidensnivå", "Det tar høyde for at $x_0$ ligger utenfor dataområdet til modellen", "Det er beregnet med flere frihetsgrader enn konfidensintervallet"],
      explanation: "Prediksjonsintervallet har $\\hat\\sigma^2$ i tillegg under rota («$1+$»-leddet) fordi en ny enkeltobservasjon også har egen støy.",
    },
    {
      question: "Hva er forskjellen på estimatoren $\\hat\\theta_{ML}=n/T$ og tallet $2{,}00$ i oppgave 1?",
      options: ["Estimatoren er en stokastisk variabel (funksjon av utvalget); 2,00 er estimatet i det observerte utvalget", "Estimatoren er det faste tallet man slår opp i formelsamlingen; 2,00 er den stokastiske realiseringen av utvalget", "De er samme objekt — notasjonen med stor bokstav er bare en skrivekonvensjon", "Estimatoren er avrundingen av estimatet til nærmeste hele parameterverdi"],
      explanation: "Utsagn som $E(\\hat\\theta_{ML})=n\\theta/(n-1)$ gjelder den stokastiske estimatoren $n/T$ — ikke tallet 2,00. Skillet er et fast sensorkrav.",
    },
    {
      question: "Hvorfor er alternativet i oppgave 2 ensidig ($H_a:\\mu_2>\\mu_1$)?",
      options: ["Påstanden som skal belegges har en retning: den nye legeringen hevdes å være sterkere", "Ensidige tester er alltid å foretrekke fordi de har større styrke", "Utvalgene har ulik størrelse, og da må testen legges ensidig", "Fordi $\\bar y_2>\\bar y_1$ i det observerte datamaterialet — retningen leses rett av observasjonene"],
      explanation: "Retningen følger av påstanden som formuleres *før* dataene brukes — aldri av hvilket gjennomsnitt som ble størst.",
    },
    {
      question: "Temperatur-koeffisienten endres fra $-3{,}151$ til $-2{,}904$ når vind inkluderes. Hva er forklaringen?",
      options: ["Konfundering: vind samvarierer med temperatur, og den enkle modellen lot temp bære deler av vindeffekten", "Multikolinearitet gjorde begge estimatene i modell 2 upålitelige og forskjøvet", "Modell 1 var feilregnet; med flere variabler blir minste kvadrater mer nøyaktig", "Ren tilfeldig utvalgsstøy — koeffisientestimater flytter seg alltid omtrent like mye i begge retninger ved omtilpasning"],
      explanation: "Med $r(\\texttt{temp},\\texttt{vind})=-0{,}48$ fanget den enkle modellens temp-koeffisient også vindeffekten; i modell 2 tolkes den med vind holdt konstant.",
    },
    {
      question: "Standardfeilen i oppgave 1f avhenger av parameteren ($se=\\theta/\\sqrt n$). Hva er da riktig om det asymmetriske intervallet?",
      options: ["Det er en gyldig løsning av pivot-ulikheten — asymmetrien er et trekk ved metoden, ikke en feil", "Det er galt, siden konfidensintervaller per definisjon skal ligge symmetrisk rundt punktestimatet", "Det har systematisk lavere dekning enn Wald og bør bare brukes som kontroll", "Det krever at fordelingen til $\\hat\\theta$ er kjent eksakt, ikke bare tilnærmet"],
      explanation: "Løses ulikheten $|\\hat\\theta-\\theta|\\le z\\,\\theta/\\sqrt n$ for $\\theta$, blir intervallet asymmetrisk om $\\hat\\theta$ — fasitene fører det som fullverdig svar.",
    },
  ],
  'stk1110-4-3': [
    {
      question: "Med gamma$(\\alpha,\\beta)$-apriori (skala) og $n$ Poisson-observasjoner med sum $s$: hva er aposteriorifordelingen for $\\lambda$?",
      options: ["gamma$(\\alpha+s,\\ \\beta/(1+n\\beta))$ — form øker med datasummen, skala krymper", "gamma$(\\alpha+s,\\ \\beta)$ — datasummen oppdaterer formen, mens skalaparameteren står urørt", "gamma$(\\alpha+n,\\ \\beta/(1+\\beta s))$ — form øker med antall observasjoner", "$N(\\bar x,\\ \\bar x/n)$ — aposteriori blir normal når likelihooden er Poisson"],
      explanation: "Samling av eksponentene gir $\\lambda^{(\\alpha+s)-1}e^{-\\lambda(1/\\beta+n)}$ — gamma-kjernen med $\\alpha'=\\alpha+s$ og $\\beta'=\\beta/(1+n\\beta)$.",
    },
    {
      question: "Hva er Bayes-estimatoren (under kvadratisk tap) i STK1110?",
      options: ["Forventningen i aposteriorifordelingen", "Toppunktet (modus) i aposteriorifordelingen", "Forventningen i apriorifordelingen", "Maksimumspunktet til likelihoodfunksjonen"],
      explanation: "Bayes-estimatoren er $E(\\theta\\mid x)$ — aposteriori forventning. Modus er et annet estimat (MAP), og likelihood-maksimum er ML.",
    },
    {
      question: "I Poisson–gamma-oppsettet er $\\hat\\lambda_{\\text{Bayes}}=w\\bar x+(1-w)\\alpha\\beta$ med $w=n\\beta/(1+n\\beta)$. Hva skjer når $n$ vokser?",
      options: ["$w\\to 1$, og Bayes-estimatoren nærmer seg ML-estimatoren $\\bar x$", "$w\\to 0$, slik at apriori-forventningen til slutt dominerer helt over dataene", "$w\\to 1/2$, så data og apriori teller til slutt nøyaktig likt", "$w$ er konstant i $n$ — vekten bestemmes bare av apriorien"],
      explanation: "Med mye data dominerer likelihooden: $w=n\\beta/(1+n\\beta)\\to 1$, og Bayes smelter sammen med ML.",
    },
    {
      question: "Hva innebærer «kjernetrikset» når du skal vise konjugering?",
      options: ["Samle potensene av $\\theta$ og leddene i eksponenten, og kjenne igjen fordelingens kjerne", "Regne ut normeringskonstanten eksplisitt ved å integrere produktet av apriori og likelihood", "Derivere aposteriorifordelingen og sette den deriverte lik null", "Erstatte likelihooden med normaltilnærmingen sin før du ganger med apriori"],
      explanation: "Konjugering vises ved å skrive $\\pi(\\theta)L(\\theta)$ som $\\theta^{a}e^{-b\\theta}$-form og lese av parametrene — integrasjon er unødvendig.",
    },
    {
      question: "I enveis ANOVA med $k$ grupper og $N$ observasjoner totalt: hvilken fordeling har $F=\\text{MSB}/\\text{MSW}$ under $H_0$?",
      options: ["$F_{k-1,\\,N-k}$ — frihetsgradene mellom grupper i telleren, innen grupper i nevneren", "$F_{k,\\,N-1}$ — antall grupper i telleren, totalt antall minus én i nevneren", "$F_{N-k,\\,k-1}$ — innengruppe-df i telleren, mellomgruppe-df i nevneren", "$t_{N-k}$ — forholdet er t-fordelt fordi det bygger på pooled varians"],
      explanation: "SSB har $k-1$ frihetsgrader og SSW har $N-k$; under $H_0$ er MSB/MSW $\\sim F_{k-1,N-k}$.",
    },
    {
      question: "I dummy-regresjonen for enveis ANOVA (én gruppe som referanse): hva estimerer koeffisienten til en dummy?",
      options: ["Differansen mellom gruppens forventning og referansegruppens forventning", "Gruppens egen forventning, helt uavhengig av hvilken gruppe som er valgt som referanse", "Gruppens andel av den totale kvadratsummen i ANOVA-tabellen", "Den felles støyvariansen målt innenfor akkurat den gruppen"],
      explanation: "Konstantleddet er referansegruppens forventning; hver dummy-koeffisient er en gruppedifferanse mot referansen — derfor er dummy-t-tester kontraster.",
    },
    {
      question: "En enveis ANOVA gir P-verdi 0,0002. Hva kan du konkludere?",
      options: ["Minst én gruppeforventning skiller seg fra de andre — men ikke hvilken", "Alle gruppene i forsøket har innbyrdes forskjellige forventninger på 5 %-nivå", "Den største gruppen er signifikant forskjellig fra den minste", "Sannsynligheten for at alle gruppene er like er 0,0002"],
      explanation: "$H_a$ sier bare at ikke alle $\\mu_i$ er like. Hvilke grupper som skiller seg krever oppfølgende kontraster; P-verdien er heller ikke en sannsynlighet for hypotesen.",
    },
    {
      question: "Hvorfor brukes justert $R^2$ — ikke Multiple R-squared — til å sammenligne modeller med ulikt antall prediktorer?",
      options: ["$R^2$ kan aldri synke når en variabel legges til; justert $R^2$ straffer parametertallet", "$R^2$ kan bare beregnes i modeller som har nøyaktig én prediktor", "Justert $R^2$ er alltid størst i modellen med flest prediktorer, noe som gjør valget entydig", "$R^2$ måler bare tilpasningen til konstantleddet, ikke til helningene"],
      explanation: "SSE synker mekanisk for hver ny variabel, så $R^2$ premierer alltid størst modell. Justert $R^2$ kan synke når tilskuddet er støy.",
    },
    {
      question: "En koeffisient endrer seg markant når en korrelert kovariat legges til modellen. Hva er riktig tolkning?",
      options: ["Koeffisienten i den lille modellen fanget også en del av kovariatens effekt (konfundering)", "Den lille modellen var rett og slett feilregnet, og bare den store modellens tall kan brukes", "Endringen beviser at prediktoren har en kausal effekt på responsen", "Kovariaten må fjernes igjen, siden den destabiliserer estimatene"],
      explanation: "Med en utelatt, korrelert variabel «arver» prediktoren dens effekt. Begge modeller er riktige svar på hver sin spørsmålsstilling — og ingen av dem beviser kausalitet.",
    },
    {
      question: "Når er minste kvadraters estimator $\\hat\\beta=(X^TX)^{-1}X^TY$ entydig?",
      options: ["Når $X$ har full kolonnerang, slik at matrisen $X^TX$ er inverterbar", "Når alle prediktorene er ukorrelerte med responsen $Y$", "Når $n$ er større enn 30, slik at sentralgrenseteoremet gjelder", "Når residualene er eksakt normalfordelte med konstant varians"],
      explanation: "Entydighet er et rent lineær-algebra-krav: ingen kolonne i $X$ kan være en lineærkombinasjon av de andre. Normalitet og utvalgsstørrelse angår inferensen, ikke entydigheten.",
    },
  ],
  'stk1110-4-4': [
    {
      question: "For $X_1,\\dots,X_n$ uavhengige eksponensial med forventning $\\theta$: hvilken fordeling har pivoten $2\\sum X_i/\\theta$?",
      options: ["$\\chi^2_{2n}$ — gamma$(n,\\theta)$ skalert med $2/\\theta$ gir gamma$(n,2)$", "$\\chi^2_{n}$ — én frihetsgrad per observasjon i summen", "$\\chi^2_{n-1}$ — én frihetsgrad går tapt fordi parameteren $\\theta$ må estimeres fra dataene", "$\\chi^2_{2n-1}$ — dobling av observasjonene minus én estimert parameter"],
      explanation: "$\\sum X_i\\sim\\text{gamma}(n,\\theta)$, og $\\chi^2_\\nu=\\text{gamma}(\\nu/2,2)$; skaleringen gir $\\nu/2=n$, altså $2n$ frihetsgrader.",
    },
    {
      question: "Det eksakte KI-et for $\\theta$ fra kjikvadrat-pivoten er ikke symmetrisk om $\\hat\\theta$. Hva betyr det?",
      options: ["Ingenting galt — et eksakt intervall fra en skjev pivot er asymmetrisk", "Det er en regnefeil, siden konfidensintervaller alltid skal være symmetriske om estimatet", "Det må symmetriseres ved å ta gjennomsnittet av de to grensene", "Konfidensnivået er feil og må justeres ned til under 95 prosent"],
      explanation: "Kjikvadratfordelingen er skjev, og pivot-intervallet arver skjevheten. Symmetri gjelder bare når pivoten er (tilnærmet) normal.",
    },
    {
      question: "Hva gjør en størrelse til en pivot?",
      options: ["Den avhenger av både data og parameter, men fordelingen dens er fri for parameteren", "Den avhenger bare av dataene og inneholder ikke parameteren i det hele tatt", "Den er forventningsrett og har minst mulig varians blant alle estimatorer", "Den er normalfordelt uansett hvilken modell dataene kommer fra"],
      explanation: "Pivotens fordeling er kjent og parameterfri — derfor kan kvantiler settes rundt den og ulikheten løses for parameteren.",
    },
    {
      question: "I KI-utledningen fra pivoten $2\\sum X_i/\\theta$ havner den *store* kvantilen $\\chi^2_{2n,\\,\\alpha/2}$ i nevneren til den *nedre* grensen. Hvorfor?",
      options: ["$\\theta$ står i nevneren i pivoten, så ulikhetene snur når det løses for $\\theta$", "Kvantilene sorteres alltid slik at det minste tallet havner i den øverste grensen av intervallet", "Den store kvantilen har størst usikkerhet og hører derfor til nedre hale", "Det er en konvensjon uten matematisk innhold, valgt for lesbarhet"],
      explanation: "Fra $a<2\\sum X_i/\\theta<b$ følger $2\\sum X_i/b<\\theta<2\\sum X_i/a$ — divisjon med $\\theta>0$ og løsning snur plasseringen av kvantilene.",
    },
    {
      question: "Samme ni prøvestykker måles med to metoder. Hvordan testes «samme forventning» korrekt?",
      options: ["t-test på de ni differansene $d_i$ med $n-1=8$ frihetsgrader (ett-utvalgs oppsett)", "To-utvalgs t-test med pooled varians og $9+9-2=16$ frihetsgrader", "z-test med kjent varians, siden begge metodene måler samme størrelse", "F-test for variansforholdet mellom de to måleseriene"],
      explanation: "Målingene på samme prøvestykke er avhengige — paringen utnyttes ved å redusere til differanser og kjøre ett-utvalgs t-test med df $=n-1$.",
    },
    {
      question: "Hvorfor brukes pooled andel $\\hat p$ i standardfeilen når to andeler testes mot $H_0:p_1=p_2$?",
      options: ["Under $H_0$ er andelene samme ukjente $p$, som best estimeres med alle data samlet", "Pooling gir alltid mindre standardfeil og dermed en sterkere test", "Pooling korrigerer for at de to utvalgene har ulik størrelse", "Pooling er nødvendig for at differansen mellom andelene skal bli nøyaktig normalfordelt"],
      explanation: "Standardfeilen beregnes under $H_0$, og der finnes bare én andel $p$ — fellesestimatet $\\hat p=(x_1+x_2)/(n_1+n_2)$ er det riktige.",
    },
    {
      question: "Hva er forskjellen på KI for forventet respons og prediksjonsintervall ved samme $x_0$?",
      options: ["PI har et ekstra støyledd («$1+$» under roten) for den nye observasjonen og er bredere", "KI er bredere fordi en forventning er vanskeligere å anslå enn en enkelt ny observasjon", "De er like brede når $x_0$ ligger nøyaktig i gjennomsnittet $\\bar x$", "PI bruker z-kvantiler mens KI bruker t-kvantiler, ellers er de identiske"],
      explanation: "KI fanger usikkerheten i linja; PI legger til den individuelle støyen $\\varepsilon_0$. Derfor «$1+$»-leddet — og PI er alltid bredere.",
    },
    {
      question: "Hva skjer med de to intervallene ved $x_0$ når $n\\to\\infty$ (med samme $x$-spredning)?",
      options: ["KI-bredden går mot null, mens PI-bredden er nedad begrenset av støyleddet $\\sigma$", "Begge intervallene krymper mot null når linja blir kjent eksakt", "PI-bredden går mot null først, siden enkeltobservasjoner er lettest å treffe", "Begge stabiliserer seg til slutt på samme bredde, som bestemmes av residualvariansen alene"],
      explanation: "Linjeusikkerheten forsvinner med mye data, men en ny observasjon spres fortsatt med $\\sigma$ — «$1+$»-leddet forsvinner aldri.",
    },
    {
      question: "Data dekker luftfuktighet 30–70 %. Hva er hovedproblemet med å predikere tørketid ved 90 %?",
      options: ["Ingen data støtter at sammenhengen fortsatt er lineær utenfor 30–70", "Prediksjonsintervallet blir smalere enn i dataområdet og virker for sikkert", "t-fordelingen gjelder ikke lenger og må byttes ut med normalfordelingen", "Regresjonen må regnes på nytt uten konstantledd før den kan brukes"],
      explanation: "Ekstrapolering hviler på en modellform ingen data har testet; i tillegg vokser intervallbredden når avstanden til $\\bar x$ øker — men det største problemet er ukjent modellgyldighet.",
    },
    {
      question: "QQ-plottet av differansene avviker klart fra referanselinja. Hvilket alternativ er naturlig for parvise data, og hva tester det?",
      options: ["Wilcoxons fortegnsrangtest — at differansefordelingens senter (median) er null", "To-utvalgs t-test med pooled varians — at de to uavhengige gruppene har samme forventning", "F-test for variansforhold — at de to metodene har samme presisjon", "Kjikvadrattest for uavhengighet — at metode og prøvestykke er uavhengige"],
      explanation: "Signed-rank-testen bruker fortegn og ranger av differansene og krever bare symmetri, ikke normalitet; den tester om senteret i differansefordelingen er 0.",
    },
  ],
};

export default quizData_stk1110;
