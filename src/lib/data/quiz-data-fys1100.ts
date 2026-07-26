import type { QuizQuestion } from './quiz-data';

const quizData_fys1100: Record<string, QuizQuestion[]> = {
  'fys1100-0-1': [
    {
      question: "Hvordan er vurderingen i FYS1100 satt sammen?",
      options: ["Midtveiseksamen teller 20 % og avsluttende skoleeksamen 80 %", "Midtveiseksamen teller 50 % og avsluttende skoleeksamen 50 %", "Avsluttende skoleeksamen teller 100 %, midtveis er kun øving", "Midtveiseksamen teller 40 % og avsluttende skoleeksamen 60 %"],
      explanation: "Vurderingen er todelt med 20 % på midtveis og 80 % på avsluttende, verifisert mot UiOs emneside. At midtveis «kun er øving» er nærmest, men feil: den teller reelt, og en dårlig midtveis kan koste en halv karakter. Sjekk likevel emnesiden for ditt eget semester, siden ordninger kan endres.",
    },
    {
      question: "Hvilken form har midtveiseksamen i FYS1100?",
      options: ["Digital flervalgsprøve på tre timer med rundt tjue spørsmål", "Skriftlig skoleeksamen på tre timer med fire hovedoppgaver", "Muntlig eksamen på tjue minutter med to fagpersoner", "Hjemmeeksamen over tre dager med innlevering i Inspera"],
      explanation: "Midtveis er ren flervalg i Inspera, tre timer, rundt tjue spørsmål — du krysser av og leverer ingen mellomregning. Alternativet med skriftlig skoleeksamen ligger nærmest, men det er formen på den *avsluttende* eksamenen, som varer fire timer.",
    },
    {
      question: "Hvordan fordeles poengene på en avsluttende skoleeksamen i FYS1100?",
      options: ["Inntil 5 poeng per deloppgave, og alle deloppgaver teller like mye", "Inntil 5 poeng per deloppgave, vektet etter hvor lang deloppgaven er", "Inntil 10 poeng per hovedoppgave, fordelt fritt av den som retter", "Poeng gis kun for helt fullførte hovedoppgaver, ikke for deler"],
      explanation: "Alle deloppgaver teller likt uansett lengde, og det gis poeng for en god løsningsidé selv om den ikke fullføres. Vekting etter lengde er den vanligste misforståelsen, og den fører til feil strategi: nettopp fordi korte og lange deloppgaver teller likt, lønner det seg å ta de innledende i alle oppgavene først.",
    },
    {
      question: "Hvilke hjelpemidler er tillatt på den avsluttende skoleeksamenen?",
      options: ["Godkjent kalkulator, Rottmann og et fagspesifikt formelark", "Godkjent kalkulator og Rottmann, men ingen formler deles ut", "Kun godkjent kalkulator; alle formler må huskes utenat", "Alle trykte hjelpemidler, inkludert egne notater og lærebok"],
      explanation: "Formelarket deles ut bakerst i settet og har vært det samme siden 2023. Alternativet uten formelark er nærmest, men det endrer hele lesestrategien: siden arket finnes, ligger poengene i å velge, begrunne og utlede — ikke i å pugge.",
    },
    {
      question: "Hvilket av disse temaene er testet i alle sju avsluttende settene?",
      options: ["Rotasjon og stive legemer", "Spesiell relativitet", "Sirkelbevegelse og sentripetalakselerasjon", "Overslagsregning i tierpotenser"],
      explanation: "Rotasjon er én av de fire søylene på 100 %, sammen med numerisk Python, Newton med krefttegning og arbeid/energi. Spesiell relativitet ligger nærmest med 6 av 7 sett (86 %) og er også nesten sikkert stoff, men den mangler i ett sett.",
    },
    {
      question: "Hva gir null uttelling ifølge sensorveiledningene i H2023, V2024 og V2025?",
      options: ["Å skrive opp relevante formler uten å forsøke å bruke dem på problemet", "Å bruke en annen gyldig metode enn den fasiten viser", "Å oppgi et svar med ett gjeldende siffer mer enn fasiten", "Å bygge videre på et galt svar fra en tidligere deloppgave"],
      explanation: "En liste med likninger som ikke settes inn i, er ikke en løsningsidé og gir null. De tre andre er derimot uttrykkelig godtatt: flere metoder aksepteres, avvik i siste siffer trekkes ikke, og følgefeil straffes ikke når mellomregningen er vist.",
    },
    {
      question: "Hva innebærer regelen om at følgefeil ikke straffes?",
      options: ["En feil forplantes videre uten nytt trekk, hvis mellomregningen er vist", "En feil forplantes videre uten nytt trekk, uansett om mellomregningen er vist", "Alle deloppgaver etter en feil annulleres og gis null poeng", "Feilen trekkes én gang per deloppgave den påvirker videre"],
      explanation: "Du taper poeng der feilen ble gjort, og ikke etterpå — men den som retter må kunne se hvor det gikk galt. Alternativet uten kravet om vist mellomregning ligger nærmest, og det er nettopp det kravet som gjør regelen praktisk: uten synlig regning kan feilen ikke spores.",
    },
    {
      question: "Hvilket tema nevnes i emnebeskrivelsen, men har aldri vært testet på noen av de sju avsluttende settene?",
      options: ["Lagrange-formalismen", "Numerisk integrasjon med Euler–Cromer", "Rullebetingelsen for et legeme som ruller uten å skli", "Relativitet av samtidighet i et paradoks"],
      explanation: "Lagrange-formalismen er nevnt i læringsutbyttet, men er aldri testet: all mekanikk i settene er kraft- og momentbasert. Euler–Cromer ligger i motsatt ende av skalaen og er testet i alle sju settene, så å prioritere Lagrange framfor koden er den dyreste feilprioriteringen i faget.",
    },
    {
      question: "Hva dekker midtveiseksamen IKKE?",
      options: ["Håndskrevet programkode og spesiell relativitet", "Kinematikk med grafer og bevegelseslikninger", "Newtons lover, friksjon og frilegemediagram", "Arbeid, energi og bevegelsesmengde"],
      explanation: "Midtveis dekker første halvdel av pensum pluss de matematiske verktøyene, men verken den håndskrevne koden, de tunge analytiske løsningene eller relativitet. De tre andre alternativene er alle kjernestoff på midtveis, og kinematikk med grafer er en av de hyppigste spørsmålstypene der.",
    },
    {
      question: "Hvilken numerisk metode forventer og premierer sensor i kodedeloppgavene?",
      options: ["Euler–Cromer, der farten oppdateres før posisjonen", "Forward Euler, der posisjonen oppdateres med den gamle farten", "Runge–Kutta av fjerde orden med adaptivt tidssteg", "Trapesmetoden anvendt direkte på bevegelseslikningen"],
      explanation: "Euler–Cromer er metoden alle løsningsforslagene bruker, og metodevalget skal begrunnes i tekst. Forward Euler ligger nærmest og ser nesten lik ut, men den bruker den gamle farten i posisjonslinja og lekker derfor energi — svingninger vokser og planetbaner spiraler utover. Runge–Kutta er bare beredskap i dette faget og prioriteres ikke.",
    },
    {
      question: "Hvor mange av løsningsforslagene i FYS1100-arkivet har en innebygd sensorveiledning?",
      options: ["Tre — i H2023, V2024 og V2025", "Sju — ett for hvert av de avsluttende settene", "Ti — ett for hver av midtveiseksamenene", "Ett — en frittstående veiledning som dekker alle årene"],
      explanation: "Nøyaktig tre av løsningsforslagene har sensorveiledning innebygd som egne seksjoner, og det er disse tre som er kilden til metareglene om begrunnelse og poeng. Alternativet med sju ligger nærmest, men for de øvrige årene finnes bare selve løsningsforslaget, uten poengfordeling per deloppgave.",
    },
    {
      question: "Hva er den viktigste konsekvensen av at formelarket deles ut på eksamen?",
      options: ["Poengene ligger i å velge, begrunne og utlede — ikke i å huske formlene", "Alle formler kan slås opp, så ingen utledninger kreves under tidspress", "Formlene på arket kan brukes uten å oppgi hvilken situasjon de gjelder i", "Arket erstatter Rottmann, som derfor ikke trengs på eksamen"],
      explanation: "Siden formlene er tilgjengelige, testes bruken av dem: hvilken som gjelder her, hvorfor den gjelder, og det arket ikke gir. Alternativet om at ingen utledninger kreves ligger nærmest, men er feil — flere sentrale resultater må utledes aktivt, og hele kodehåndverket står ikke på arket i det hele tatt.",
    },
  ],
  'fys1100-1-1': [
    {
      question: "Hva er dimensjonsformelen til kraft?",
      options: ["$[M][L][T]^{-2}$", "$[M][L]^{2}[T]^{-2}$", "$[M][L]^{-1}[T]^{-2}$", "$[M][L][T]^{-1}$"],
      explanation: "Fra Newtons 2. lov er kraft masse ganger akselerasjon, altså $[M]\\cdot[L][T]^{-2}$. Uttrykket $[M][L]^{2}[T]^{-2}$ ligger nærmest, men det er dimensjonen til energi — kraft ganger en lengde til.",
    },
    {
      question: "Hva er dimensjonsformelen til trykk, definert som kraft per areal?",
      options: ["$[M][L]^{-1}[T]^{-2}$", "$[M][L][T]^{-2}$", "$[M][L]^{-3}$", "$[M][L]^{2}[T]^{-3}$"],
      explanation: "Kraft delt på areal gir $[M][L][T]^{-2}/[L]^{2} = [M][L]^{-1}[T]^{-2}$. Dimensjonen til kraft selv ligger nærmest, og feilen består i å glemme å dele på arealet — den negative lengdeeksponenten er nettopp sporet etter den divisjonen.",
    },
    {
      question: "Hva er dimensjonsformelen til gravitasjonskonstanten $G$ i $F = GMm/r^{2}$?",
      options: ["$[M]^{-1}[L]^{3}[T]^{-2}$", "$[M][L]^{3}[T]^{-2}$", "$[M]^{-1}[L]^{2}[T]^{-2}$", "$[M]^{-2}[L]^{3}[T]^{-2}$"],
      explanation: "Løser man for $G = Fr^{2}/(Mm)$, blir det $[M][L][T]^{-2}\\cdot[L]^{2}/[M]^{2} = [M]^{-1}[L]^{3}[T]^{-2}$. Varianten med $[M]^{-2}$ ligger nærmest, men den ene massen i telleren fra kraftuttrykket forkorter mot den ene av de to i nevneren.",
    },
    {
      question: "Hvilket av uttrykkene under kan IKKE være riktig, målt ved benevningskontroll?",
      options: ["$s = v_0 t + \\tfrac12 a t$", "$v^{2} = v_0^{2} + 2as$", "$s = v_0 t + \\tfrac12 a t^{2}$", "$v = v_0 + at$"],
      explanation: "Leddet $\\tfrac12 at$ har dimensjonen $[L][T]^{-1}$, altså en fart, mens $s$ og $v_0t$ er lengder — man kan ikke legge sammen en lengde og en fart. Det korrekte uttrykket med $t^{2}$ ligger nærmest, og forskjellen på de to er nøyaktig den ene tidspotensen benevningskontrollen fanger.",
    },
    {
      question: "Hva sier dimensjonshomogenitet?",
      options: ["Hvert ledd i en fysisk riktig likning har samme dimensjon", "Hvert ledd i en fysisk riktig likning har samme tallverdi", "En likning er riktig dersom hvert ledd har samme dimensjon", "Alle størrelser i en likning må måles i SI-grunnenheter"],
      explanation: "Homogenitet er et krav enhver riktig likning oppfyller, fordi ledd med ulik dimensjon ikke kan legges sammen. Alternativet som gjør det til et tilstrekkelig kriterium ligger nærmest, men er galt: $E = 7mv^{2}$ er homogent og likevel fysisk feil — kontrollen kan avvise, aldri godkjenne.",
    },
    {
      question: "Hva er dimensjonen til fjærkonstanten $k$ i kraftmodellen $F = kx$?",
      options: ["$[M][T]^{-2}$", "$[M][L][T]^{-2}$", "$[M][L]^{-1}[T]^{-2}$", "$[M][L]^{2}[T]^{-2}$"],
      explanation: "Fra $k = F/x$ blir det $[M][L][T]^{-2}/[L] = [M][T]^{-2}$, med SI-enhet newton per meter. Dimensjonen til kraft ligger nærmest, og feilen er å glemme divisjonen med utstrekningen.",
    },
    {
      question: "En pendel med masse $m$ i en snor med lengde $\\ell$ svinger i tyngdefeltet $g$. Hva gir dimensjonsanalyse for svingetiden?",
      options: ["$T_p \\sim \\sqrt{\\ell/g}$, uten avhengighet av massen", "$T_p \\sim \\sqrt{m\\ell/g}$, altså økende med massen", "$T_p \\sim \\ell/g$, uten avhengighet av massen", "$T_p \\sim \\sqrt{g/\\ell}$, altså avtakende med lengden"],
      explanation: "Massen er den eneste av størrelsene som inneholder $[M]$, så eksponenten dens må være null når svaret er en ren tid. Varianten $\\ell/g$ ligger nærmest i form, men den har dimensjonen $[T]^{2}$ og mangler derfor kvadratrota.",
    },
    {
      question: "Hva kan dimensjonsanalyse ALDRI bestemme?",
      options: ["Den dimensjonsløse faktoren foran uttrykket, som $2\\pi$ eller $\\tfrac12$", "Hvilke av de gitte størrelsene som skal stå i telleren og hvilke i nevneren", "Hvilken potens hver av størrelsene opptrer med", "Om et gitt uttrykk er dimensjonelt umulig"],
      explanation: "Et rent tall har eksponent null for alle grunnstørrelsene og setter derfor ingen spor i homogenitetslikningene. Å bestemme potensene ligger nærmest, men det er nettopp det metoden gjør — den finner skjelettet, og bare tallfaktoren blir stående igjen ubestemt.",
    },
    {
      question: "Når gir dimensjonsanalyse et entydig svar?",
      options: ["Når antall gitte størrelser er lik antall uavhengige dimensjoner i spill", "Når antall gitte størrelser er større enn antall dimensjoner i spill", "Når alle de gitte størrelsene inneholder minst to grunnstørrelser", "Alltid, så lenge alle tre grunnstørrelsene er nevnt i oppgaven"],
      explanation: "Med like mange ukjente eksponenter som uavhengige likninger har systemet nøyaktig én løsning. Alternativet med flere størrelser enn dimensjoner ligger nærmest, men gir det motsatte: da er systemet underbestemt, og du får en hel familie av mulige uttrykk.",
    },
    {
      question: "Hva er størrelsesorden til tallet $6{,}674\\cdot 10^{-11}$?",
      options: ["$-11$", "$-10$", "$6$", "$-12$"],
      explanation: "På standardform er sifferdelen $6{,}674$, som ligger mellom 1 og 10, så eksponenten $-11$ er størrelsesorden direkte. Svaret $-10$ ligger nærmest og oppstår hvis man runder sifferdelen opp til 10 og flytter en tierpotens.",
    },
    {
      question: "Hvor mange gjeldende siffer skal et vanlig tallsvar i FYS1100 oppgis med?",
      options: ["To til tre, med ett siffer ekstra beholdt i mellomregningen", "Så mange som kalkulatoren viser, for å unngå avrundingsfeil", "Alltid nøyaktig fire, uavhengig av inngangsdataene", "Ett, siden alle fysiske størrelser er beheftet med usikkerhet"],
      explanation: "To til tre gjeldende siffer er standarden, og et ekstra siffer i mellomregningen hindrer at avrundingsfeil hoper seg opp. Å beholde alle kalkulatorens siffer ligger nærmest, men gir falsk presisjon i sluttsvaret — inngangsdataene bærer sjelden mer enn tre siffer.",
    },
    {
      question: "Hva er forskjellen på dimensjon og enhet?",
      options: ["Dimensjonen sier hva slags størrelse det er, enheten hvilken målestokk", "Dimensjonen gjelder vektorer, mens enheten gjelder skalarer", "Dimensjonen brukes i SI-systemet, mens enheten brukes i alle andre systemer", "De to er samme sak, men skrives med ulike symboler"],
      explanation: "Høyden på et bord er en lengde uansett om den måles i meter eller tommer: $[L]$ er dimensjonen, meter er enheten. Alternativet om at det er samme sak ligger nærmest i praktisk bruk, men skillet er reelt — dimensjonsanalyse føres i dimensjoner, mens et svar alltid oppgis i enheter.",
    },
    {
      question: "En sirkelbane har fart $v \\sim r^{-1/2}$. Hva skjer med farten hvis radien nidobles?",
      options: ["Farten blir en tredjedel av det den var", "Farten blir en niendedel av det den var", "Farten blir tre ganger så stor", "Farten blir en attendedel av det den var"],
      explanation: "Med $v \\sim r^{-1/2}$ ganges farten med $9^{-1/2} = 1/3$ når radien ganges med 9. Svaret «en niendedel» ligger nærmest og oppstår hvis man glemmer at eksponenten er en halv og bruker $9^{-1}$ i stedet.",
    },
    {
      question: "Hvilken av disse størrelsene er dimensjonsløs?",
      options: ["Det statiske friksjonstallet $\\mu_s$", "Fjærkonstanten $k$", "Tettheten $\\rho$", "Tyngdeakselerasjonen $g$"],
      explanation: "Friksjonstallet er en kraft delt på en kraft, så alle dimensjonseksponentene blir null. Fjærkonstanten ligger nærmest fordi den også defineres gjennom et forhold, men der deles en kraft på en lengde, og resultatet har dimensjonen $[M][T]^{-2}$.",
    },
    {
      question: "Hva er dimensjonen til koeffisienten $D$ i luftmotstandsmodellen $F_D = Dv^{2}$?",
      options: ["$[M][L]^{-1}$", "$[M][L]^{-2}$", "$[M][T]^{-1}$", "$[M][L][T]^{-1}$"],
      explanation: "Fra $D = F_D/v^{2}$ blir det $[M][L][T]^{-2}/([L]^{2}[T]^{-2}) = [M][L]^{-1}$, med SI-enhet kilogram per meter. Varianten $[M][L]^{-2}$ ligger nærmest og oppstår hvis man kvadrerer lengdeeksponenten i stedet for å trekke den fra.",
    },
    {
      question: "Hva er hensikten med å gjøre benevningskontroll på et sluttsvar?",
      options: ["Å utelukke en stor familie av regnefeil på under et halvt minutt", "Å bevise at svaret er riktig før man leverer det", "Å finne den dimensjonsløse forfaktoren i uttrykket", "Å gjøre om svaret fra dimensjoner til SI-enheter"],
      explanation: "Kontrollen avslører enhver feil som endrer dimensjonen, og den koster nesten ingen tid. Å bevise at svaret er riktig ligger nærmest, men er umulig: et dimensjonelt korrekt uttrykk kan fremdeles ha feil tallfaktor eller feil fortegn.",
    },
  ],
  'fys1100-1-2': [
    {
      question: "Hva er koeffisienten foran $(x-a)^{j}$ i et Taylor-polynom?",
      options: ["$\\dfrac{f^{(j)}(a)}{j!}$", "$\\dfrac{f^{(j)}(a)}{j}$", "$\\dfrac{f^{(j)}(x)}{j!}$", "$j!\\,f^{(j)}(a)$"],
      explanation: "Fakultetet i nevneren nøytraliserer de faktorene som oppstår når $x^{j}$ deriveres $j$ ganger. Varianten med $j$ i stedet for $j!$ ligger nærmest og gir riktig svar for de to første leddene, men bryter sammen fra tredje ledd der $3! = 6$ og ikke 3.",
    },
    {
      question: "Hva er Maclaurin-polynomet av 2. orden til $\\cos\\theta$?",
      options: ["$1 - \\dfrac{\\theta^{2}}{2}$", "$1 - \\dfrac{\\theta^{2}}{6}$", "$1 + \\dfrac{\\theta^{2}}{2}$", "$\\theta - \\dfrac{\\theta^{2}}{2}$"],
      explanation: "Med $f(0)=1$, $f'(0)=0$ og $f''(0)=-1$ blir andreordensleddet $-\\theta^{2}/2$. Varianten med 6 i nevneren ligger nærmest, men den nevneren hører til tredjeordensleddet i sinusrekka, ikke til andreordensleddet i cosinusrekka.",
    },
    {
      question: "Hva er Maclaurin-polynomet av 3. orden til $\\sin\\theta$?",
      options: ["$\\theta - \\dfrac{\\theta^{3}}{6}$", "$\\theta - \\dfrac{\\theta^{3}}{3}$", "$\\theta - \\dfrac{\\theta^{2}}{2}$", "$1 - \\dfrac{\\theta^{3}}{6}$"],
      explanation: "Tredjeordensleddet har koeffisienten $f'''(0)/3! = -1/6$. Varianten med 3 i nevneren ligger nærmest, men den forveksler fakultetet $3! = 6$ med selve ordenen.",
    },
    {
      question: "Hvorfor må vinkler måles i radianer i tilnærmingen $\\sin\\theta \\approx \\theta$?",
      options: ["Fordi derivasjonsregelen $(\\sin x)' = \\cos x$ bare gjelder i radianer", "Fordi radianer er dimensjonsløse, mens grader har en enhet", "Fordi radianer alltid gir mindre tallverdier enn grader", "Fordi kalkulatoren regner internt i radianer uansett innstilling"],
      explanation: "Hele Taylor-rekka bygger på de deriverte, og de har den enkle formen bare når vinkelen måles i radianer; i grader kommer det en faktor $\\pi/180$ inn ved hver derivasjon. Argumentet om dimensjonsløshet ligger nærmest og er delvis riktig, men grader er også dimensjonsløse — det er derivasjonsregelen som er avgjørende.",
    },
    {
      question: "Hva er restleddet $R_n(x)$ i Taylors formel?",
      options: ["Den eksakte differansen mellom funksjonen og polynomet", "Det første leddet som er tatt med i polynomet", "Summen av alle leddene i polynomet av orden $n$", "Den deriverte av polynomet i utviklingspunktet"],
      explanation: "Per definisjon er $R_n(x) = f(x) - P_n(x)$, altså feilen man gjør ved å bytte funksjonen med polynomet. Alternativet om det første leddet som er med ligger nærmest i formulering, men restleddet handler tvert imot om det som er utelatt.",
    },
    {
      question: "Hvor stor kan en vinkel omtrent være før $\\sin\\theta \\approx \\theta$ bommer med mer enn $1\\ \\%$?",
      options: ["Rundt $0{,}25$ radianer, altså omtrent $15^{\\circ}$", "Rundt $0{,}05$ radianer, altså omtrent $3^{\\circ}$", "Rundt $0{,}80$ radianer, altså omtrent $45^{\\circ}$", "Rundt $1{,}6$ radianer, altså omtrent $90^{\\circ}$"],
      explanation: "Ved $\\theta = 0{,}25$ rad er det relative avviket akkurat $1{,}0\\ \\%$, og det er derfor pendeloppgaver alltid sier «små utslag». Grensen på $3^{\\circ}$ ligger nærmest, men er unødvendig streng: der er avviket bare rundt $0{,}05\\ \\%$.",
    },
    {
      question: "Hva er andreordensleddet i utviklingen av $(1+x)^{n}$ om $x = 0$?",
      options: ["$\\dfrac{n(n-1)}{2}x^{2}$", "$\\dfrac{n(n+1)}{2}x^{2}$", "$\\dfrac{n^{2}}{2}x^{2}$", "$n(n-1)x^{2}$"],
      explanation: "Koeffisienten kommer fra $f''(0)/2! = n(n-1)/2$. Varianten med $n(n+1)$ ligger nærmest, men fortegnet blir da galt for brøkeksponenter: for $n = \\tfrac12$ skal leddet være $-x^{2}/8$, ikke $+3x^{2}/8$.",
    },
    {
      question: "Hva er førsteordenstilnærmingen til $\\dfrac{1}{\\sqrt{1-x}}$ for små $x$?",
      options: ["$1 + \\dfrac{x}{2}$", "$1 - \\dfrac{x}{2}$", "$1 + 2x$", "$1 - x$"],
      explanation: "Med $n = -\\tfrac12$ og argumentet $-x$ blir førsteordensleddet $(-\\tfrac12)(-x) = +x/2$. Varianten med minustegn ligger nærmest, men to minustegn opphever hverandre her — og resultatet må være større enn 1, siden nevneren er mindre enn 1.",
    },
    {
      question: "Hva er linearisering?",
      options: ["Å erstatte en funksjon med sitt førsteordens Taylor-polynom om et punkt", "Å erstatte en funksjon med sitt andreordens Taylor-polynom om et punkt", "Å erstatte alle ikke-lineære ledd i en likning med null", "Å velge et utviklingspunkt der funksjonen er tilnærmet rett"],
      explanation: "Resultatet er tangentlinja i punktet, altså $f(a) + f'(a)(x-a)$. Å sette ikke-lineære ledd til null ligger nærmest i virkning, men er ikke det samme: lineariseringen beholder informasjon fra den deriverte i punktet, som ikke er null.",
    },
    {
      question: "Hvorfor forsvinner alltid nullteordensleddet når man lineariserer en kraft om et likevektspunkt?",
      options: ["Fordi kraften per definisjon er null i et likevektspunkt", "Fordi den deriverte av kraften er null i et likevektspunkt", "Fordi den potensielle energien er null i et likevektspunkt", "Fordi man alltid velger origo i likevektspunktet"],
      explanation: "Nullteordensleddet er $F(x_0)$, og et likevektspunkt er nettopp definert ved at summen av kreftene der er null. Alternativet om den deriverte ligger nærmest, men det er den *potensielle energien* som har null derivert der — kraftens deriverte er tvert imot det som blir fjærkonstanten.",
    },
    {
      question: "Hva er den effektive fjærkonstanten for små svingninger om et stabilt likevektspunkt $x_0$?",
      options: ["$k = U''(x_0)$, den andrederiverte av den potensielle energien", "$k = U'(x_0)$, den førstederiverte av den potensielle energien", "$k = -U''(x_0)$, med minustegn foran den andrederiverte", "$k = U(x_0)$, verdien av den potensielle energien"],
      explanation: "Siden $F = -U'$, blir $-F'(x_0) = U''(x_0)$, og for en stabil likevekt er den positiv. Varianten med minustegn ligger nærmest, men den ville gitt negativ fjærkonstant i en energibrønn, altså en kraft som skyver legemet vekk fra likevekten.",
    },
    {
      question: "Hva er Lorentz-faktoren $\\gamma$?",
      options: ["$\\left(1 - v^{2}/c^{2}\\right)^{-1/2}$, alltid større enn eller lik 1", "$\\left(1 - v^{2}/c^{2}\\right)^{1/2}$, alltid mindre enn eller lik 1", "$\\left(1 + v^{2}/c^{2}\\right)^{-1/2}$, alltid mindre enn 1", "$\\left(1 - v/c\\right)^{-1}$, alltid større enn 1"],
      explanation: "Den negative halve eksponenten gjør at $\\gamma$ vokser uten grense når farten nærmer seg lysfarten. Varianten med positiv eksponent ligger nærmest, men den er den omvendte størrelsen og ville gjort tidsdilatasjonen til en sammentrekning.",
    },
    {
      question: "Hva blir $\\gamma$ utviklet til andre orden i $\\beta = v/c$?",
      options: ["$1 + \\tfrac12\\beta^{2}$", "$1 - \\tfrac12\\beta^{2}$", "$1 + \\tfrac12\\beta$", "$1 + \\tfrac38\\beta^{2}$"],
      explanation: "Med $u = \\beta^{2}$ og binomialrekka for $(1-u)^{-1/2}$ blir førsteleddet i $u$ lik $+u/2$. Varianten med minustegn ligger nærmest, men den ville gitt $\\gamma < 1$, som er umulig — og alle leddene i denne rekka er positive.",
    },
    {
      question: "Hva blir den relativistiske kinetiske energien $K = (\\gamma-1)mc^{2}$ for lave farter?",
      options: ["$\\tfrac12 mv^{2} + \\tfrac38\\,mv^{4}/c^{2}$", "$\\tfrac12 mv^{2} + \\tfrac38\\,mv^{4}c^{2}$", "$mc^{2} + \\tfrac12 mv^{2}$", "$\\tfrac12 mv^{2} - \\tfrac38\\,mv^{4}/c^{2}$"],
      explanation: "Første ledd er nøyaktig det klassiske uttrykket, og korreksjonen er positiv fordi alle ledd i $\\gamma$-rekka er positive. Varianten med $mc^{2}$ først ligger nærmest, men det er den *totale* energien — hvileenergien er allerede trukket fra i $K$.",
    },
    {
      question: "Hvorfor inneholder rekka for $\\gamma$ bare like potenser av $\\beta$?",
      options: ["Fordi $\\gamma$ avhenger av farten bare gjennom $\\beta^{2}$", "Fordi odde potenser alltid forsvinner i binomialrekker", "Fordi $\\beta$ er dimensjonsløs og derfor alltid opptrer i par", "Fordi rekka bare er gyldig for positive verdier av $\\beta$"],
      explanation: "Uttrykket $(1-\\beta^{2})^{-1/2}$ inneholder ikke $\\beta$ alene noe sted, så enhver rekke i $\\beta^{2}$ gir bare like potenser tilbake. Påstanden om binomialrekker generelt ligger nærmest, men er gal: $(1+x)^{n}$ har både odde og like potenser av $x$.",
    },
    {
      question: "Hvordan endrer feilen seg når man halverer avstanden til utviklingspunktet i en førsteordens tilnærming?",
      options: ["Den faller til omtrent en fjerdedel", "Den faller til omtrent en halvdel", "Den faller til omtrent en åttedel", "Den faller til omtrent en sekstendedel"],
      explanation: "Restleddet i en førsteordens tilnærming er proporsjonalt med $(x-a)^{2}$, så en halvering gir en faktor $\\tfrac14$. Svaret «en halvdel» ligger nærmest og ville vært riktig for en nullteordens tilnærming, der restleddet går lineært.",
    },
  ],
  'fys1100-1-3': [
    {
      question: "Hva kjennetegner et Fermi-problem?",
      options: ["Svaret skal være riktig størrelsesorden, ikke riktig siffer", "Svaret skal være nøyaktig, men uten oppgitte inngangsdata", "Svaret krever en avansert geometrisk modell av situasjonen", "Svaret finnes bare ved å slå opp tall i en tabell"],
      explanation: "Et Fermi-problem brytes ned i delspørsmål man kan anslå, og svaret er interessant selv om det bommer med en faktor to. Alternativet om nøyaktighet uten inngangsdata ligger nærmest, men er selvmotsigende: uten data kan man umulig få et nøyaktig svar.",
    },
    {
      question: "Hva er de fire stegene i Fermi-oppskriften, i riktig rekkefølge?",
      options: ["Forklar tankegangen, velg modell, regn i tierpotenser, vurdér rimeligheten", "Velg modell, forklar tankegangen, regn i tierpotenser, vurdér rimeligheten", "Regn i tierpotenser, velg modell, forklar tankegangen, oppgi svaret", "Slå opp referanseverdier, regn ut, rund av, kontrollér enheten"],
      explanation: "Forklaringen kommer først fordi den styrer modellvalget, og rimelighetsvurderingen sist fordi den kontrollerer resultatet. Rekkefølgen der modellen kommer først ligger nærmest, men da mister man begrunnelsen for hvorfor akkurat den modellen er valgt.",
    },
    {
      question: "Hvordan fordeles poengene typisk i en Fermi-oppgave?",
      options: ["Rundt 2 poeng for tallet og 3 poeng for forklaringen", "Rundt 4 poeng for tallet og 1 poeng for forklaringen", "Alle 5 poengene for tallet, siden det er svaret på spørsmålet", "Rundt 3 poeng for figuren og 2 poeng for regnestykket"],
      explanation: "Retteregelen i denne sjangeren premierer resonnementet framfor presisjonen, og en velbegrunnet estimering to tierpotenser unna slår et presist tall uten forklaring. Fordelingen med 4 poeng på tallet ligger nærmest, men snur vektingen på hodet og gir feil arbeidsvane.",
    },
    {
      question: "Hvilken geometrisk modell passer best for et fjell i en overslagsoppgave?",
      options: ["En kjegle", "En halvkule", "En rett boks", "En sylinder"],
      explanation: "En kjegle fanger hovedformen med to enkle mål, radius og høyde, og volumet er $\\tfrac13\\pi r^{2}h$. Halvkulen ligger nærmest, men den har bare ett fritt mål og kan ikke uttrykke at fjell varierer sterkt i bratthet.",
    },
    {
      question: "Hva er volumet av en kjegle med grunnflateradius $r$ og høyde $h$?",
      options: ["$\\tfrac13\\pi r^{2}h$", "$\\tfrac23\\pi r^{2}h$", "$\\pi r^{2}h$", "$\\tfrac43\\pi r^{3}$"],
      explanation: "Kjeglen har en tredjedel av volumet til sylinderen den passer inni. Sylindervolumet $\\pi r^{2}h$ ligger nærmest, og forveksles lett fordi de to har samme grunnflate og høyde.",
    },
    {
      question: "Hva er tettheten til luft ved havnivå, omtrent?",
      options: ["$1{,}2\\ \\text{kg}/\\text{m}^{3}$", "$1{,}2\\cdot 10^{-3}\\ \\text{kg}/\\text{m}^{3}$", "$1{,}2\\cdot 10^{3}\\ \\text{kg}/\\text{m}^{3}$", "$12\\ \\text{kg}/\\text{m}^{3}$"],
      explanation: "Lufta veier drøyt ett kilo per kubikkmeter, altså rundt en tusendel av vann. Verdien $1{,}2\\cdot 10^{3}$ ligger nærmest i skrivemåte, men det er tettheten til vann — og forveksles lett fordi luft ofte oppgis som $1{,}2$ gram per liter.",
    },
    {
      question: "En idrettshall har volum $1{,}2\\cdot 10^{4}\\ \\text{m}^{3}$. Omtrent hvor mye veier lufta i den?",
      options: ["Rundt $1\\cdot 10^{4}\\ \\text{kg}$", "Rundt $1\\cdot 10^{2}\\ \\text{kg}$", "Rundt $1\\cdot 10^{7}\\ \\text{kg}$", "Rundt $1\\cdot 10^{1}\\ \\text{kg}$"],
      explanation: "Med lufttetthet $1{,}2\\ \\text{kg}/\\text{m}^{3}$ blir massen $1{,}4\\cdot 10^{4}\\ \\text{kg}$, altså rundt ti tonn — omtrent ti personbiler. Svaret $10^{7}\\ \\text{kg}$ ligger nærmest hvis man forveksler lufttettheten med vannets, som er tusen ganger større.",
    },
    {
      question: "Hva er fyllgraden når like kuler slenges tilfeldig i en beholder?",
      options: ["Rundt $0{,}64$", "Rundt $0{,}90$", "Rundt $0{,}30$", "Rundt $1{,}00$"],
      explanation: "Tilfeldig pakking av kuler fyller omtrent 64 % av volumet; tettest mulig pakking kommer opp i 74 %. Verdien $0{,}90$ ligger nærmest, men er høyere enn selv den tettest mulige pakkingen og er derfor geometrisk umulig.",
    },
    {
      question: "Hvorfor må fyllgraden tas med når man anslår hvor mange kuler som får plass i et rom?",
      options: ["Fordi den er en systematisk skjevhet som alltid trekker samme vei", "Fordi den flytter svaret flere tierpotenser", "Fordi kuler kan presses sammen og dermed endre volum", "Fordi rommets form påvirker hvor mange kuler som får plass"],
      explanation: "Uten fyllgraden blir anslaget alltid for høyt, og systematiske feil opphever ikke hverandre slik tilfeldige gjør. Alternativet om flere tierpotenser ligger nærmest, men korreksjonen er bare rundt 50 % — den er verdt å ta med fordi den viser at du leter etter skjevheter, ikke fordi den flytter tierpotensen.",
    },
    {
      question: "Hva er falsk presisjon?",
      options: ["Å oppgi flere gjeldende siffer enn inngangsdataene bærer", "Å oppgi færre gjeldende siffer enn oppgaven ber om", "Å regne med en unøyaktig verdi for en naturkonstant", "Å bruke en for enkel geometrisk modell i et overslag"],
      explanation: "Å skrive $1{,}4437\\cdot 10^{14}$ etter å ha anslått «rundt en halv millimeter» gir et inntrykk av nøyaktighet som ikke finnes. Det motsatte, for få siffer, ligger nærmest som feiltype, men er et problem i vanlige regneoppgaver — ikke i overslag, der ett siffer ofte er alt tallet fortjener.",
    },
    {
      question: "Hva innebærer min/maks-metoden i en overslagsoppgave?",
      options: ["Å regne overslaget tre ganger: lavt, høyt og med de mest sannsynlige verdiene", "Å regne overslaget to ganger og oppgi gjennomsnittet av de to", "Å velge de anslagene som gir det mest sannsynlige sluttsvaret", "Å regne ut den absolutt minste og den absolutt største teoretisk mulige verdien"],
      explanation: "Metoden gir et ærlig spenn i tillegg til det beste anslaget, og spennet forteller hvor mye man faktisk vet. Alternativet med gjennomsnitt av to ligger nærmest, men et gjennomsnitt skjuler nettopp den usikkerheten spennet er ment å vise.",
    },
    {
      question: "Hvorfor treffer et produkt av mange usikre anslag likevel ofte innenfor en tierpotens?",
      options: ["Fordi uavhengige feil ofte opphever hverandre i produktet", "Fordi hvert enkelt anslag som regel er nøyaktig", "Fordi tierpotensregning i seg selv reduserer feilen", "Fordi feilene alltid trekker i samme retning og kan korrigeres"],
      explanation: "En overvurdering med en faktor to ett sted og en undervurdering med en faktor to et annet sted gir null samlet feil. Alternativet om at feilene trekker samme vei ligger nærmest, men det er nettopp det som *ødelegger* metoden — systematiske skjevheter hoper seg opp i stedet for å kansellere.",
    },
    {
      question: "Hva skal en rimelighetsvurdering inneholde?",
      options: ["En sammenligning med noe kjent, en usikkerhetsvurdering og retningen på den", "En gjentakelse av regnestykket med andre tall for kontroll", "En henvisning til en tabell der den riktige verdien står", "En vurdering av om den geometriske modellen var pen nok"],
      explanation: "Sammenligningen gjør et abstrakt tall vurderbart, og retningen på usikkerheten avslører systematiske skjevheter. Å gjenta regnestykket med andre tall ligger nærmest og er nyttig, men det er min/maks-metoden — rimelighetsvurderingen handler om hvorvidt svaret i det hele tatt kan stemme.",
    },
    {
      question: "Omtrent hvor mange sekunder er det i ett år?",
      options: ["$3\\cdot 10^{7}$", "$3\\cdot 10^{6}$", "$5\\cdot 10^{5}$", "$9\\cdot 10^{8}$"],
      explanation: "Regnestykket $365\\times 24\\times 3600$ gir $3{,}2\\cdot 10^{7}$ sekunder, en referanseverdi det lønner seg å kunne. Verdien $5\\cdot 10^{5}$ ligger nærmest av de gale, men det er antall *minutter* i et år — en faktor 60 fra svaret.",
    },
  ],
  'fys1100-10-1': [
    {
      question: "Hva er Lorentz-faktoren $\\gamma$?",
      options: ["$1/\\sqrt{1-v^2/c^2}$", "$\\sqrt{1-v^2/c^2}\\,$ (den inverse)", "$1/(1-v^2/c^2)$", "$1 - v^2/c^2$"],
      explanation: "Faktoren er definert med kvadratrota i nevneren, slik at $\\gamma \\ge 1$ alltid. Uttrykket $\\sqrt{1-v^2/c^2}$ er den inverse og er alltid mindre enn 1 — bruker du den, får både tidsdilatasjonen og lengdekontraksjonen feil vei.",
    },
    {
      question: "En klokke beveger seg forbi deg. Hvordan går den, målt av deg?",
      options: ["Langsommere enn din egen, med faktoren $\\gamma$", "Fortere enn din egen, med faktoren $\\gamma$", "Like fort som din egen, siden begge er gode klokker", "Langsommere, men bare hvis den akselererer"],
      explanation: "Tidsdilatasjonen $\\Delta t = \\gamma\\Delta t_0$ sier at tida du måler mellom to hendelser på klokka, er $\\gamma$ ganger egentida den selv viser. Akselerasjon er ikke nødvendig — effekten gjelder for konstant fart, altså mellom to inertialsystemer.",
    },
    {
      question: "Hvilken klokke måler egentid mellom to hendelser?",
      options: ["Den som ser begge hendelsene skje på samme sted", "Den som står i ro i forhold til jorda uansett hvor hendelsene skjer", "Den som måler den lengste tida mellom de to hendelsene", "Den som befinner seg nøyaktig midt mellom de to hendelsene"],
      explanation: "Egentid er definert ved at de to hendelsene skjer på samme sted i det systemet, slik at én enkelt klokke kan være til stede ved begge. Egentida er dessuten den **korteste** av alle målte tider — svaret om den lengste tida har det stikk motsatt.",
    },
    {
      question: "En prosess varer $10{,}0$ minutter om bord i et romskip som går med $0{,}800c$. Hvor lenge varer den sett fra jorda?",
      options: ["$16{,}7$ minutter", "$6{,}00$ minutter", "$10{,}0$ minutter", "$12{,}5$ minutter"],
      explanation: "Med $\\gamma = 1{,}667$ blir $\\Delta t = \\gamma\\Delta t_0 = 1{,}667\\cdot10{,}0 = 16{,}7$ minutter — lengre enn egentida, som det skal være. Svaret $6{,}00$ minutter kommer av å dele på $\\gamma$ i stedet for å gange, og det er den hyppigste feilen i sjangeren.",
    },
    {
      question: "Hva er egenlengda til en gjenstand?",
      options: ["Lengden målt i det systemet der gjenstanden er i ro", "Lengden målt i det systemet der gjenstanden beveger seg raskest", "Den korteste lengden noen observatør måler", "Gjennomsnittet av lengdene alle observatører måler"],
      explanation: "Egenlengda er «den vanlige lengden», målt med en målestokk i ro ved siden av gjenstanden, og den er den **største** av alle målte lengder. Svaret om den korteste lengden forveksler egenlengde med egentid, som nettopp er den korteste tida.",
    },
    {
      question: "Et romskip med egenlengde $200\\,\\text{m}$ går med $0{,}600c$. Hvor langt er det målt fra jorda?",
      options: ["$160\\,\\text{m}$", "$250\\,\\text{m}$", "$200\\,\\text{m}$", "$120\\,\\text{m}$"],
      explanation: "Med $\\gamma = 1{,}250$ blir $l = l_0/\\gamma = 200/1{,}250 = 160\\,\\text{m}$ — kortere enn egenlengda ✓. Svaret $250\\,\\text{m}$ kommer av å gange med $\\gamma$ i stedet for å dele, altså å bruke tidsdilatasjonsformelen på en lengde.",
    },
    {
      question: "I hvilken retning skjer lengdekontraksjonen?",
      options: ["Bare langs bevegelsesretningen", "Bare på tvers av bevegelsesretningen", "Like mye i alle retninger", "Langs bevegelsesretningen for lengder over én meter"],
      explanation: "Tverrmålene er upåvirket: et romskip som farer forbi er kortere, men like tykt. Hadde tverrmålene endret seg, ville to identiske ringer som farer gjennom hverandre gitt uforenlige svar på hvilken som gikk utenpå — og det er noe alle observatører må være enige om.",
    },
    {
      question: "Et romskip går med $0{,}600c$ og skyter en sonde framover med $0{,}800c$ i forhold til seg selv. Hva måler jorda?",
      options: ["$0{,}946c$", "$1{,}400c$", "$0{,}200c$", "$0{,}700c$"],
      explanation: "Hastighetstransformasjonen gir $(0{,}800 + 0{,}600)/(1 + 0{,}480) = 1{,}400/1{,}480 = 0{,}946c$. Svaret $1{,}400c$ er den klassiske summen, som er umulig — nevneren i formelen er nettopp det som holder resultatet under lysfarten.",
    },
    {
      question: "Hva skjer hvis du setter $v = c$ inn i hastighetstransformasjonen $v' = (v-u)/(1-uv/c^2)$?",
      options: ["Du får $v' = c$ uansett hvilken $u$ du velger", "Du får $v' = c - u$, altså mindre enn $c$", "Uttrykket blir udefinert fordi nevneren blir null", "Du får $v' > c$ når $u$ er negativ"],
      explanation: "Innsettingen gir $(c-u)/(1-u/c) = c(c-u)/(c-u) = c$, altså lysfarten i alle systemer — postulat 2 er innebygd i formelen. Nevneren blir bare null hvis $uv = c^2$, som krever at begge går med lysfarten.",
    },
    {
      question: "Hvorfor bruker man $ct$ og ikke $t$ på den loddrette aksen i et romtidsdiagram?",
      options: ["Fordi begge akser da måler lengde, så lys får 45 graders helning", "Fordi tida ellers ville fått feil fortegn i transformasjonen", "Fordi $\\gamma$ da kan leses av direkte som en vinkel i figuren", "Fordi Lorentz-transformasjonen bare gjelder for produktet $ct$"],
      explanation: "Med $ct$ på den ene aksen og $x$ på den andre har begge enheten meter, og en lysstråle som går $\\Delta x = c\\Delta t$ får nøyaktig helning 1. Det gjør lyskjegla til en fast 45-graders referanse i alle slike diagrammer.",
    },
    {
      question: "Hvordan ser verdenslinja til et legeme i ro ut i et romtidsdiagram?",
      options: ["Loddrett", "Vannrett", "Med 45 graders helning", "Den finnes ikke, siden ingenting skjer"],
      explanation: "Legemet flytter seg ikke i rom, men tida går, så linja peker rett oppover. En vannrett linje ville betydd at legemet var på uendelig mange steder til samme tid, altså uendelig fart.",
    },
    {
      question: "En observatør beveger seg med $\\beta = 0{,}5$. Hvordan ligger samtidighetslinjene hennes i et romtidsdiagram?",
      options: ["Med stigningstall $0{,}5$, altså skrått oppover mot høyre", "Vannrett, akkurat som for enhver annen observatør i diagrammet", "Loddrett, altså parallelt med hennes egen verdenslinje", "Med stigningstall $2{,}0$, altså brattere enn lyslinja"],
      explanation: "Samtidighetslinjene til et system med fart $\\beta$ har stigningstall $\\beta$ i $(x, ct)$-planet, mens verdenslinja har stigningstall $1/\\beta$ — de to lukker seg symmetrisk om 45-graderslinja. Vannrette linjer hører til den observatøren som er i ro i diagrammet.",
    },
    {
      question: "Et legeme reiser strekningen $d$ i laboratoriet mens klokka om bord viser egentida $\\tau$. Hvilken sammenheng gjelder?",
      options: ["$d = v\\gamma\\tau$", "$d = v\\tau$", "$d = v\\tau/\\gamma$", "$d = \\gamma\\tau/v$"],
      explanation: "Laboratoriet måler tida $\\gamma\\tau$, og strekningen er farten ganger den tida. Å bruke $d = v\\tau$ blander en strekning fra ett system med en tid fra et annet, og det gir **0 poeng** på eksamen, ikke delvis uttelling.",
    },
    {
      question: "Et skip reiser $12{,}0$ lysår (jordas mål) mens mannskapet blir $9{,}00$ år eldre. Hva er $\\beta\\gamma$?",
      options: ["$1{,}33$", "$0{,}750$", "$1{,}80$", "$0{,}800$"],
      explanation: "Størrelsen $\\beta\\gamma$ er nettopp $d/(c\\tau) = 12{,}0/9{,}00 = 1{,}33$ når avstand måles i lysår og tid i år. Verdien $0{,}750$ er den omvendte brøken, som ville gitt en fart under det riktige og et for lite $\\gamma$.",
    },
    {
      question: "Hva er hvileenergien til et legeme med masse $m$?",
      options: ["$mc^2$", "$\\gamma mc^2$", "$\\tfrac12 mc^2$", "$(\\gamma-1)mc^2$"],
      explanation: "Hvileenergien er energien legemet har når det står stille, altså $\\gamma = 1$ i $E = \\gamma mc^2$. Uttrykket $(\\gamma-1)mc^2$ er den kinetiske energien, som er null i ro.",
    },
    {
      question: "Hva blir den kinetiske energien til et proton ved $0{,}900c$, sammenlignet med den klassiske $\\tfrac12 mv^2$?",
      options: ["Omtrent tre ganger så stor", "Omtrent like stor som den", "Omtrent en tredel så stor", "Nøyaktig dobbelt så stor"],
      explanation: "Riktig verdi er $(\\gamma-1)mc^2 = 1{,}29\\cdot940\\,\\text{MeV} = 1220\\,\\text{MeV}$, mens $\\tfrac12 mv^2$ gir $381\\,\\text{MeV}$ — den klassiske formelen bommer med en faktor på drøyt tre. At den skulle være for **stor** er utelukket: den relativistiske energien vokser raskere enn den klassiske, aldri langsommere.",
    },
    {
      question: "Hva gir Taylor-utvikling av $K = (\\gamma-1)mc^2$ for små farter?",
      options: ["$\\tfrac12 mv^2$ pluss en korreksjon i $v^4$", "$mc^2$ pluss en korreksjon som går som $v^2$", "$\\tfrac12 mv^2$ nøyaktig, uten noen korreksjon", "Null, siden $\\gamma$ går mot 1 for små farter"],
      explanation: "Binomialtilnærmingen gir $\\gamma \\approx 1 + \\tfrac12\\beta^2 + \\tfrac38\\beta^4$, og det første leddet i $K$ blir nøyaktig den klassiske kinetiske energien. Korreksjonen forsvinner ikke helt — den er bare liten, med relativt avvik omtrent $\\tfrac34\\beta^2$.",
    },
    {
      question: "Hvor stor kan $\\beta$ være før den klassiske formelen $\\tfrac12 mv^2$ bommer med mer enn 1 %?",
      options: ["Omtrent $0{,}12$", "Omtrent $0{,}50$", "Omtrent $0{,}01$", "Omtrent $0{,}90$"],
      explanation: "Det relative avviket er omtrent $\\tfrac34\\beta^2$, og kravet $\\tfrac34\\beta^2 < 0{,}0100$ gir $\\beta < 0{,}115$. Ved $\\beta = 0{,}50$ er avviket allerede nær 19 %, så der er den klassiske formelen for lengst ubrukelig.",
    },
    {
      question: "Hva menes med at massen $m$ i $E = \\gamma mc^2$ er en invariant?",
      options: ["At den har samme verdi i alle referansesystemer", "At den vokser med farten, men på samme måte i alle systemer", "At den er null for partikler uten hvilemasse", "At den bare kan måles når legemet er i ro"],
      explanation: "Hele fartsavhengigheten sitter i $\\gamma$, mens $m$ er den samme uansett hvem som måler. Den eldre formuleringen om at «massen øker med farten» er ute av bruk nettopp fordi den flytter fartsavhengigheten til feil størrelse.",
    },
    {
      question: "Hvilken kontroll bør du alltid gjøre på slutten av en relativistisk utregning?",
      options: ["At tida ble lengre, lengden kortere og enhver fart mindre enn $c$", "At alle svarene har fått flere gjeldende siffer enn oppgitt i teksten", "At $\\gamma$ er mindre enn 1", "At egentida er lengre enn den observerte tida"],
      explanation: "Retningskontrollen fanger den hyppigste feilen i hele delen — at $\\gamma$ er brukt feil vei — og den tar tre sekunder. Påstanden om at egentida skulle være lengst er nettopp den feilen: egentida er alltid den **korteste** målte tida.",
    },
  ],
  'fys1100-10-2': [
    {
      question: "Hva betyr det at samtidighet er relativ?",
      options: ["At to hendelser kan være samtidige i ett system, men ikke i et annet", "At ingen hendelser noensinne er samtidige for noen observatør", "At tida går like fort i alle systemer, men at klokkene viser feil", "At bare hendelser på nøyaktig samme sted kan sammenlignes i tid"],
      explanation: "Samtidighet er en relasjon mellom hendelsene og et referansesystem, ikke en egenskap ved hendelsene alene. Hendelser på samme sted er et unntak — der er alle systemer enige — men det betyr ikke at hendelser andre steder er usammenlignbare, bare at rekkefølgen kan avhenge av systemet.",
    },
    {
      question: "To hendelser er samtidige i system $S$ med avstanden $\\Delta x$. Hva måler et system som beveger seg med $u$?",
      options: ["$\\Delta t' = -\\gamma u \\Delta x/c^2$", "$\\Delta t' = 0$, siden samtidighet er absolutt", "$\\Delta t' = \\gamma \\Delta x/c$", "$\\Delta t' = -u\\Delta x/c^2$ uten $\\gamma$"],
      explanation: "Lorentz-transformasjonen anvendt på to hendelser med samme $t$ gir nettopp dette uttrykket, der leddet $-ux/c^2$ er kilden til forskyvningen. Uttrykket uten $\\gamma$ er den vanligste regnefeilen — faktoren følger med fra transformasjonen og kan ikke droppes.",
    },
    {
      question: "Når forsvinner samtidighetsforskyvningen helt?",
      options: ["Når hendelsene skjer på samme sted, eller når den relative farten er null", "Når begge hendelsene skjer på samme tidspunkt i begge systemer", "Når avstanden mellom hendelsene er større enn lysfarten ganger tidsforskjellen", "Når begge systemene akselererer likt"],
      explanation: "Forskyvningen $-\\gamma u\\Delta x/c^2$ er null nøyaktig når $\\Delta x = 0$ eller $u = 0$. Kriteriet om avstand større enn $c\\Delta t$ handler om noe annet, nemlig om rekkefølgen **kan** snus i det hele tatt.",
    },
    {
      question: "En stige med egenlengde $12{,}0\\,\\text{m}$ føres gjennom en låve på $8{,}00\\,\\text{m}$ med $0{,}800c$. Hvor lang er stigen i låvens system?",
      options: ["$7{,}20\\,\\text{m}$", "$20{,}0\\,\\text{m}$", "$12{,}0\\,\\text{m}$", "$4{,}80\\,\\text{m}$"],
      explanation: "Med $\\gamma = 1{,}667$ blir $l = 12{,}0/1{,}667 = 7{,}20\\,\\text{m}$, altså kortere enn låven — derfor passer den der. Verdien $4{,}80\\,\\text{m}$ er låvens lengde målt i **stigens** system, en annen størrelse i samme oppgave.",
    },
    {
      question: "Hva er den fysiske kjernen i oppløsningen av stige-i-låve-paradokset?",
      options: ["At portlukkingene er samtidige bare i låvens system", "At stigen bøyer seg litt når den passerer gjennom låven", "At låven egentlig er lengre enn oppgaveteksten oppgir", "At lengdekontraksjonen bare er en optisk synsbedrag"],
      explanation: "Spørsmålet «er stigen inne?» betyr «er begge porter lukket **samtidig** med stigen mellom seg», og det ordet betyr ulike ting i de to systemene. Lengdekontraksjonen er ingen synsbedrag — den er en reell måling, og å kalle den illusjon er nettopp det sensor trekker for.",
    },
    {
      question: "Hva gir null poeng i en paradoksoppgave?",
      options: ["Å skrive opp SR-formlene uten å drøfte samtidighet", "Å bruke flere gjeldende siffer i svaret enn nødvendig", "Å tegne et romtidsdiagram i stedet for å regne", "Å konkludere med at begge observatørene har rett"],
      explanation: "Formlene står på det utdelte formelarket, så avskrift viser ingenting — det er drøftingen av den konkrete situasjonen som gir uttelling. At begge observatørene har rett, er tvert imot den riktige konklusjonen og skal stå der.",
    },
    {
      question: "Hvorfor er tvillingparadokset ikke symmetrisk?",
      options: ["Fordi bare den reisende bytter inertialsystem underveis", "Fordi bare den hjemmeværende befinner seg i et tyngdefelt", "Fordi den reisende beveger seg raskere enn lyset et øyeblikk", "Fordi klokka om bord i romskipet er dårligere justert"],
      explanation: "Den hjemmeværende er i ett og samme inertialsystem hele tiden, mens den reisende snur og dermed skifter system — og det kan hun måle med et akselerometer. Tyngdefeltet er ikke poenget her; den spesielle relativitetsteorien håndterer dette uten gravitasjon.",
    },
    {
      question: "En tvilling reiser med $0{,}800c$ til en stjerne $6{,}00$ lysår unna og tilbake. Hvor mye eldre blir hun?",
      options: ["$9{,}00$ år", "$15{,}0$ år", "$6{,}00$ år", "$25{,}0$ år"],
      explanation: "Jorda måler $2\\cdot6{,}00/0{,}800 = 15{,}0$ år, og den reisende måler egentid $15{,}0/1{,}667 = 9{,}00$ år. Svaret $15{,}0$ år er hvor mye den **hjemmeværende** blir eldre, ikke den reisende.",
    },
    {
      question: "Hva skjer med den hjemmeværendes klokke i den reisendes regnskap ved vendepunktet?",
      options: ["Den ser ut til å hoppe framover, fordi samtidighetslinja endres brått", "Den stopper helt så lenge akselerasjonen varer", "Den går baklengs i noen sekunder", "Den gjør ingenting spesielt — hele forskjellen kommer av akselerasjonen alene"],
      explanation: "Klokka på jorda tikker jevnt hele tiden; det som endres, er hvilke hendelser den reisende regner som samtidige med seg selv, og derfor hopper avlesningen i hennes regnskap. Akselerasjonen er årsaken til systembyttet, men det er samtidighetsforskyvningen som gjør selve regnskapet.",
    },
    {
      question: "Når kan rekkefølgen på to hendelser snus ved å bytte inertialsystem?",
      options: ["Når de er romlik atskilt, altså $|\\Delta x| > c|\\Delta t|$", "Når de er tidlik atskilt, altså $|\\Delta x| < c|\\Delta t|$", "Alltid, siden all tid er relativ", "Bare når begge hendelsene skjer på samme sted"],
      explanation: "For romlik atskilte hendelser rekker ikke engang lys fra den ene til den andre, og da er rekkefølgen systemavhengig. For tidlik atskilte er rekkefølgen absolutt — og det er nettopp de som kan stå i årsakssammenheng.",
    },
    {
      question: "Hvorfor er det ufarlig at to observatører er uenige om hvilket av to skudd som ble avfyrt først?",
      options: ["Fordi hendelsene er romlik atskilt og ikke kan ha påvirket hverandre", "Fordi den ene av de to observatørene rett og slett tar feil", "Fordi tidsforskjellen er så liten at ingen kan rekke å måle den", "Fordi skudd ikke regnes som fysiske hendelser i relativitetsteorien"],
      explanation: "Rekkefølgen kan bare snus for hendelser som ingen signal rekker mellom, og slike hendelser kan per definisjon ikke ha utløst hverandre. Ingen av observatørene tar feil — begge beskrivelsene er riktige i hvert sitt system.",
    },
    {
      question: "Hva ville et signal med fart større enn $c$ ha ført til?",
      options: ["At mottaket kunne skje før sendingen i noen inertialsystemer", "At signalet ville blitt uendelig svakt underveis", "At Lorentz-faktoren ville blitt negativ", "Ingenting spesielt, bortsett fra at det ville vært teknisk vanskelig"],
      explanation: "Sending og mottak ville vært romlik atskilt, og for slike par finnes det systemer der rekkefølgen er snudd — altså der virkningen kommer før årsaken. Lorentz-faktoren for **systemet** blir aldri negativ; den blir imaginær bare for en observatør over lysfarten, som ikke finnes.",
    },
    {
      question: "Hva er alle inertialsystemer alltid enige om?",
      options: ["Alt som er fysisk avgjørbart, som om noe ble knust", "Hvilke to av hendelsene som var samtidige med hverandre", "Hvor lang en gjenstand i bevegelse er", "Hvor lang tid det gikk mellom to gitte hendelser"],
      explanation: "Lengder, tider og samtidighet er alle systemavhengige, men utfall som «ble stigen truffet av porten?» eller «hvem var eldst da de sto side om side?» har entydige svar. Å peke på denne enigheten er en obligatorisk del av en god paradoksdrøfting.",
    },
    {
      question: "Hvorfor finnes det ikke helt stive legemer i relativitetsteorien?",
      options: ["Fordi de ville overført påvirkning momentant fra ende til ende", "Fordi alle kjente materialer varmes kraftig opp ved svært høy fart", "Fordi lengdekontraksjonen ville revet dem i stykker underveis", "Fordi massen deres ville blitt uendelig stor"],
      explanation: "Et helt stivt legeme ville krevd uendelig signalfart internt, og ingen påvirkning kan gå fortere enn lyset. Lengdekontraksjonen i seg selv river ingenting i stykker — den er ikke en kraft, men en måling.",
    },
    {
      question: "Hvordan ligger en observatørs verdenslinje og samtidighetslinje i forhold til hverandre?",
      options: ["De lukker seg symmetrisk om 45-graderslinja for lys", "De står alltid vinkelrett på hverandre i diagrammet", "De er parallelle, med avstand gitt av $\\gamma$", "Samtidighetslinja er alltid vannrett, uansett fart"],
      explanation: "Verdenslinja har stigningstall $1/\\beta$ og samtidighetslinja $\\beta$, så de nærmer seg 45-graderslinja fra hver sin side når farten øker. De står vinkelrett på hverandre bare i det spesialtilfellet at observatøren er i ro i diagrammet.",
    },
    {
      question: "Hva er første steg i drøftingsmetoden for et relativitetsparadoks?",
      options: ["Å navngi hendelsene paradokset handler om", "Å regne ut Lorentz-faktoren for situasjonen", "Å avgjøre hvilken observatør som har rett", "Å tegne romtidsdiagrammet ferdig"],
      explanation: "Uten navngitte hendelser blir drøftingen uunngåelig vag, og vaghet er det som trekker mest i denne sjangeren. Spørsmålet om hvem som «har rett» er dessuten feilstilt — begge har rett, og det er selve poenget.",
    },
  ],
  'fys1100-11-1': [
    {
      question: "Hva er første steg i svarmalen for en kvalitativ fysikkoppgave?",
      options: ["Navngi mekanismen eller loven med fagbegrep", "Skrive ned alle formlene som kan være relevante", "Beskrive situasjonen med egne ord i detalj", "Konkludere med et tall så tidlig som mulig"],
      explanation: "Malen er mekanisme, kobling, konklusjon — og det er navngivingen av loven som gir poeng. Å liste opp formler uten å bruke dem gir null uttelling, og en detaljert gjenfortelling av oppgaveteksten tilfører ingenting sensor ikke allerede vet.",
    },
    {
      question: "En kloss sendes oppover et skråplan med friksjon. Hvorfor kommer den kortere enn uten friksjon, sett med Newtons 2. lov?",
      options: ["Friksjonen virker samme vei som tyngdekomponenten og øker retardasjonen", "Friksjonen øker normalkraften, og dermed blir også tyngdens komponent langs planet større", "Friksjonen gjør at klossen mister masse underveis og bremses mer", "Friksjonen endrer helningsvinkelen slik at planet blir brattere"],
      explanation: "På vei oppover motvirker den dynamiske friksjonen bevegelsen og peker nedover langs planet, altså samme vei som tyngdekomponenten. Retardasjonen blir da $g\\sin\\theta + \\mu_d g\\cos\\theta$ i stedet for $g\\sin\\theta$, og strekningen $v_0^2/(2|a|)$ blir kortere. Normalkraften er uendret $mg\\cos\\theta$ og påvirkes ikke av friksjonen.",
    },
    {
      question: "Hvorfor gjør statisk friksjon ikke arbeid på et legeme som ruller uten å gli?",
      options: ["Kontaktpunktet står momentant stille, så angrepspunktet forflytter seg ikke", "Friksjonskraften står alltid vinkelrett på bevegelsesretningen når legemet ruller uten å gli", "Statisk friksjon er per definisjon null når legemet er i bevegelse", "Rotasjonen opphever arbeidet fra translasjonen, så summen blir null"],
      explanation: "Arbeid er kraft ganger forflytning av angrepspunktet, og rullebetingelsen $v = \\omega R$ betyr nettopp at kontaktpunktet står stille i forhold til underlaget. Friksjonen står langs planet, ikke vinkelrett på bevegelsen, så det er ikke retningen som redder oss — det er at angrepspunktet ikke flytter seg.",
    },
    {
      question: "En kule ruller uten å gli opp en bakke, en annen glir uten friksjon opp samme bakke med samme startfart. Hvem kommer høyest?",
      options: ["Den rullende, fordi rotasjonsenergien også må omdannes til høyde", "Den glidende, fordi den ikke taper energi til friksjonen underveis", "Begge kommer like høyt, siden startfarten er den samme", "Det avhenger av helningsvinkelen til bakken"],
      explanation: "Ved samme fart har den rullende kula $\\tfrac{7}{10}mv^2$ mot den glidendes $\\tfrac12 mv^2$, altså 40 prosent mer kinetisk energi, og alt sammen blir til $mgh$. Den statiske friksjonen ved ren rulling tapper ikke energi, så argumentet om friksjonstap holder ikke — og høydene er uavhengige av helningsvinkelen.",
    },
    {
      question: "Hvorfor er snordraget størst i bunnpunktet av en vertikal sirkelbane?",
      options: ["Farten er størst der, og snora må i tillegg bære tyngden", "Tyngden peker inn mot sentrum der og legges til snordraget", "Sentripetalkraften er en egen kraft som blir størst nederst", "Snorlengden er effektivt kortest i bunnpunktet"],
      explanation: "I bunnen gir energibevaring størst fart, og oppsettet er $T - mg = mv^2/R$, altså $T = mg + mv^2/R$. I toppen peker tyngden inn mot sentrum og hjelper til i stedet, så der blir snordraget minst — differansen er alltid nøyaktig $6mg$.",
    },
    {
      question: "En bil kjører i en jevn vannrett sving med konstant fartsmåler-avlesning. Hva er riktig?",
      options: ["Bilen akselererer, fordi hastighetens retning endres hele tiden", "Bilen akselererer ikke, siden tallverdien av farten er konstant", "Bilen akselererer bare hvis fartsmåleren viser en endring", "Bilen akselererer utover, bort fra svingens sentrum"],
      explanation: "Akselerasjon er endring i hastighet, og hastighet er en vektor med både tallverdi og retning. I en sving endres retningen kontinuerlig, så akselerasjonen er $v^2/r$ inn mot sentrum — den peker altså innover, ikke utover.",
    },
    {
      question: "Hva er galt med å tegne inn en egen pil merket «sentripetalkraft» i et frilegemediagram?",
      options: ["Den er resultanten av de virkelige kreftene, så den telles dobbelt", "Den peker feil vei og skal alltid tegnes utover fra sentrum", "Den har feil enhet og hører hjemme i et energidiagram i stedet", "Den er riktig, men skal tegnes med stiplet strek for å skille den ut"],
      explanation: "Sentripetalkraften er ikke en fysisk kraft ved siden av de andre, men navnet på summen av de virkelige kreftene i radiell retning. Tegner du den inn i tillegg til friksjonen eller normalkraften som faktisk leverer den, har du talt samme kraft to ganger, og det koster omtrent ett poeng.",
    },
    {
      question: "Hvorfor kan du ikke bruke energibevaring til å finne den felles farten etter et fullstendig uelastisk støt?",
      options: ["En del av den kinetiske energien går til deformasjon og varme", "Bevegelsesmengden er ikke bevart i slike støt, og da faller energien bort", "Energibevaring gjelder bare når hastighetene er små i forhold til lydfarten", "Energien er bevart, men den kan ikke regnes ut uten å kjenne massene"],
      explanation: "Når legemene henger sammen etterpå, har de deformert hverandre, og mekanisk energi er ikke bevart. Bevegelsesmengden er derimot bevart i den retningen ingen ytre kraft virker — det er nettopp den loven man skal bruke, og å bytte dem om gir null uttelling.",
    },
    {
      question: "En kule setter seg fast i enden av en stav som er hengslet i den andre enden. Hvilken størrelse er bevart gjennom støtet?",
      options: ["Spinnet om hengselaksen, fordi hengselkraften har null momentarm der", "Bevegelsesmengden, fordi støtet varer så kort at ytre krefter ikke rekker å virke", "Både bevegelsesmengden og den mekaniske energien, siden støtet er kort", "Den mekaniske energien, fordi hengselen er friksjonsfri"],
      explanation: "Hengselen leverer en stor ytre kraft under støtet, så systemets bevegelsesmengde er ikke bevart. Men den kraften angriper i selve aksen og gir derfor null kraftmoment om den, og da er spinnet om hengselaksen bevart. Energien er heller ikke bevart, siden kula blir sittende fast.",
    },
    {
      question: "En person på en friksjonsfri dreiestol roterer og slipper to håndvekter rett ut til siden. Hva skjer med rotasjonsfarten hennes?",
      options: ["Den er uendret, fordi vektene tar sitt eget spinn med seg", "Den øker, fordi systemets treghetsmoment blir mindre", "Den synker, fordi hun mister en del av systemets samlede spinn når vektene forlater hendene", "Den øker, fordi energien fordeles på mindre masse"],
      explanation: "I det øyeblikket vektene slippes, virker det ingen kraft mellom hånd og vekt lenger, og dermed heller ikke noe kraftmoment på personen. Hver vekt farer av gårde med sitt eget spinn, og personens rotasjon er uendret — trakk hun dem derimot inn og holdt på dem, ville treghetsmomentet sunket og farten økt.",
    },
    {
      question: "Hvorfor skrives kvadratisk luftmotstand som $-D|v|v$ og ikke som $-Dv^2$?",
      options: ["Fortegnet må følge fartsretningen, ellers akselererer kraften legemet på vei ned", "Absoluttverdien gjør at kraften vokser raskere ved høye farter enn et rent kvadrat ville gjort", "Uttrykket $-Dv^2$ får feil enhet når farten måles i meter per sekund", "De to uttrykkene er identiske, men $|v|v$ er raskere å regne ut i kode"],
      explanation: "Kvadratet er alltid positivt, så $-Dv^2$ peker samme vei uansett hvilken vei legemet beveger seg, og det ville akselerert i stedet for å bremse når farten snur. Absoluttverdien gir samme tallverdi, men med fortegn som følger farten — i kode skrives det `abs(v[i])*v[i]`.",
    },
    {
      question: "Hvorfor holder Euler–Cromer amplituden stabil i en svingning der Forward Euler lar den vokse?",
      options: ["Den bruker den oppdaterte farten, så feilen veksler fortegn gjennom perioden", "Den bruker mindre steglengde og får dermed mindre feil per steg", "Den regner ut akselerasjonen to ganger per tidssteg og bruker gjennomsnittet av de to verdiene", "Den korrigerer energien eksplisitt etter hvert steg i løkka"],
      explanation: "Forskjellen er én indeks: Euler–Cromer oppdaterer farten først og bruker den nye farten i posisjonslinja. Feilen bommer da vekselvis for høyt og for lavt gjennom en periode og går nesten opp i opp, mens Forward Euler bommer systematisk samme vei — steglengden er den samme i begge.",
    },
    {
      question: "Hva er galt med å «integrere» likningen $m\\,dv/dt = mg - k_v v$ ved å behandle $v$ på høyresiden som konstant?",
      options: ["$v$ er den ukjente funksjonen, og var den konstant, ville $dv/dt$ vært null", "Integrasjonen mangler bare en integrasjonskonstant, og den kan bestemmes fra initialbetingelsen etterpå", "Metoden er riktig, men gir svaret i feil enhet", "Feilen er at man må derivere begge sider i stedet for å integrere"],
      explanation: "I en differensiallikning står den ukjente funksjonen på begge sider, og å låse den fast på høyresiden gjør likningen selvmotsigende. Riktig teknikk her er separasjon av variablene, som gir $v(t) = v_T(1 - e^{-t/\\tau})$ — feilen gir null uttelling fordi den viser at kandidaten ikke har forstått hva en differensiallikning er.",
    },
    {
      question: "En student modellerer et skrått kast med luftmotstand og integrerer bare den loddrette retningen. Hva er galt?",
      options: ["Dragkraften har også en vannrett komponent, så $v_x$ er ikke konstant", "Tyngden får en vannrett komponent så snart luftmotstanden blir stor nok til å vippe legemet", "Den vannrette retningen trenger mindre steglengde enn den loddrette", "Ingenting, så lenge startfarten er dekomponert riktig"],
      explanation: "Dragkraften peker motsatt av den fulle hastighetsvektoren og har derfor komponenten $-Dvv_x$ vannrett, som bremser gjennom hele flukten. Uten den blir rekkevidden kraftig overvurdert — og en todimensjonal kode med bare én romlig retning gir maks to av fem poeng.",
    },
    {
      question: "Hvorfor er samtidighet nøkkelen i relativitetsparadoksene?",
      options: ["Å måle en lengde krever at begge endene noteres samtidig, og «samtidig» er systemavhengig", "Klokkene i de to systemene går ulikt fort, og det gir en systematisk målefeil i lengdemålingen", "Lyset bruker tid på å nå observatøren, og det forsinker den ene enden", "Paradoksene skyldes at akselerasjonen bryter relativitetsprinsippet"],
      explanation: "En lengdemåling er egentlig et par hendelser, og to hendelser som er samtidige i ett system er det ikke i et annet i bevegelse. Effekten er ikke en signalforsinkelse eller en målefeil — observatørene har allerede korrigert for lysets gangtid, og likevel er de uenige om rekkefølgen.",
    },
    {
      question: "En løsning påstår at bevegelsesmengden er bevart når en kule treffer enden av en fritt opphengt stav. Hvordan kritiserer du den best?",
      options: ["Peke på at hengselen gir en ytre kraft, og at det er spinnet som er bevart", "Si at løsningen er upresis flere steder og bør skrives grundigere om før den kan vurderes", "Regne ut svaret på nytt uten å kommentere framgangsmåten", "Påpeke at både energi og bevegelsesmengde må brukes samtidig"],
      explanation: "Kritikkmetoden krever at du peker på det springende steget, navngir den gale antakelsen og sier hvilket prinsipp som faktisk gjelder. Å skrive at noe «er upresist» eller å bare levere et nytt tall gir liten uttelling — det er koblingen mellom hengselkraften og momentarmen som er svaret.",
    },
    {
      question: "Hvorfor gir dimensjonsanalyse aldri faktoren $2\\pi$ i pendelperioden $T_p = 2\\pi\\sqrt{\\ell/g}$?",
      options: ["Faktoren er dimensjonsløs og påvirker ikke enhetsbalansen", "Metoden forutsetter at alle konstanter er heltall større enn null", "Faktoren kommer fra luftmotstanden, som ikke inngår i analysen", "Metoden gir riktig faktor bare hvis man regner i radianer"],
      explanation: "Dimensjonsanalyse balanserer enheter, og en ren tallfaktor har ingen enhet i det hele tatt. Metoden kan derfor gi formens skjelett, men aldri forfaktoren — og det skal sies eksplisitt hver gang metoden brukes.",
    },
    {
      question: "Et overslagssvar på en estimeringsoppgave består bare av et tall, og tallet er rimelig. Hvorfor blir uttellingen lav?",
      options: ["Framgangsmåten er hovedpoenget i sjangeren og teller mest av delene", "Et overslag skal alltid oppgis med en usikkerhet i prosent, ellers regnes svaret som ubegrunnet", "Sensor godtar ikke svar som ikke er regnet ut med kalkulator", "Tallet må være innenfor ti prosent av fasiten for å telle"],
      explanation: "I overslagssjangeren premieres resonnementet: typisk to poeng for et rimelig tall og tre for tankegangen, vist i tierpotenser med en enkel modell. Presisjon er derimot ikke poenget — et velbegrunnet anslag som bommer med to tierpotenser gir mer enn et presist tall uten forklaring.",
    },
  ],
  'fys1100-11-2': [
    {
      question: "Hva dekker midtveiseksamenen i FYS1100?",
      options: ["Del 1 til 7 og Del 9, men verken tung differensiallikningsløsning eller relativitet", "Hele pensum, men med kortere og enklere oppgaver enn den avsluttende skoleeksamenen har", "Bare de numeriske metodene og Python-koden fra Del 8", "Del 1 til 4, altså modelleringsverktøy, kinematikk og Newtons lover"],
      explanation: "Midtveis dekker første halvdel: modelleringsverktøy, kinematikk, Newtons lover, sirkelbevegelse, energi og bevegelsesmengde, rotasjon, gjenkjenning av differensiallikninger og gravitasjon. Håndskrevet Python og spesiell relativitet testes bare på den avsluttende eksamenen.",
    },
    {
      question: "Hvor mye teller midtveiseksamenen av den samlede karakteren?",
      options: ["20 prosent", "50 prosent", "35 prosent", "10 prosent"],
      explanation: "Midtveiseksamenen teller 20 prosent og den avsluttende skoleeksamenen 80 prosent, ifølge UiOs emneside. Tallene bør likevel sjekkes for hvert semester, siden vurderingsordninger kan endres.",
    },
    {
      question: "Et legeme har fart null i et øyeblikk. Hva kan du si om akselerasjonen da?",
      options: ["Ingenting — den kan være null eller ha en hvilken som helst verdi", "Den må også være null i nøyaktig det samme øyeblikket som farten er det", "Den må være positiv, ellers ville legemet ikke startet igjen", "Den må være lik $g$ hvis legemet er i luften"],
      explanation: "Fart og akselerasjon er uavhengige størrelser i samme øyeblikk: i toppunktet av et kast er farten null loddrett mens akselerasjonen er $g$ nedover. Å slutte fra det ene til det andre er en av de vanligste konseptfeilene i kinematikk.",
    },
    {
      question: "Et lodd henger i en fjærvekt i en heis som går oppover og bremser jevnt. Hva viser vekta?",
      options: ["Mindre enn tyngden, fordi akselerasjonen peker nedover", "Mer enn tyngden, fordi heisen fortsatt beveger seg oppover", "Nøyaktig tyngden, siden farten er på vei mot null", "Null, siden bremsingen opphever tyngden"],
      explanation: "Det er akselerasjonens retning som avgjør, ikke fartsretningen. En heis som går opp og bremser har akselerasjon nedover, og Newtons 2. lov gir $F = m(g-a) < mg$ — samme situasjon som når heisen setter fart nedover.",
    },
    {
      question: "Hvilken vei peker den dynamiske friksjonen på en kloss som sendes oppover et skråplan?",
      options: ["Nedover langs planet, motsatt av klossens bevegelse", "Oppover langs planet, motsatt av tyngdekomponenten langs planet", "Vinkelrett ut fra planet, sammen med normalkraften", "Loddrett nedover, sammen med tyngden"],
      explanation: "Dynamisk friksjon motvirker alltid den relative bevegelsen mellom flatene, og klossen glir oppover. Retardasjonen blir dermed $g\\sin\\theta + \\mu_d g\\cos\\theta$ på vei opp, mens den er $g\\sin\\theta - \\mu_d g\\cos\\theta$ på vei ned igjen.",
    },
    {
      question: "En bil dobler farten inn i en sving med samme radius. Hvor mye større må friksjonskraften være?",
      options: ["Fire ganger så stor, siden kravet går som farten i andre potens", "Dobbelt så stor, siden kravet er proporsjonalt med farten", "Uendret, siden radien er den samme", "Åtte ganger så stor, siden både farten og tiden gjennom svingen endrer seg samtidig"],
      explanation: "Kravet i radiell retning er $mv^2/r$, som går som kvadratet av farten. Doblet fart betyr firedoblet krav — og siden friksjonsgrensen $\\mu_s mg$ er uavhengig av farten, er det nettopp derfor svinger har fartsgrenser.",
    },
    {
      question: "Hva er den maksimale statiske friksjonskraften på en kloss som ligger i ro på et skråplan?",
      options: ["$\\mu_s mg\\cos\\theta$", "$\\mu_s mg$", "$\\mu_s mg\\sin\\theta$", "$\\mu_s mg\\tan\\theta$"],
      explanation: "Grensen er friksjonstallet ganger normalkraften, og normalkraften på et skråplan er $mg\\cos\\theta$, ikke $mg$. Den faktiske friksjonskraften er dessuten $mg\\sin\\theta$ så lenge klossen ligger stille — grensen sier bare hvor mye flaten maksimalt kan levere.",
    },
    {
      question: "Hvor mye potensiell energi er lagret i en fjær som er trykt sammen strekningen $x$ fra likevekt?",
      options: ["$\\tfrac12 kx^2$", "$kx$", "$kx^2$", "$\\tfrac12 kx$ målt fra likevekt"],
      explanation: "Fjærkraften er $kx$, og arbeidet er integralet av kraften over strekningen, altså $\\tfrac12 kx^2$. Uttrykket $kx$ er kraften selv og har enheten newton, ikke joule — en rask enhetskontroll skiller de to.",
    },
    {
      question: "To legemer med ulik masse har samme bevegelsesmengde. Hvilket har størst kinetisk energi?",
      options: ["Det letteste, siden $K = p^2/(2m)$ og massen står i nevneren", "Det tyngste, siden større masse alltid gir mer energi", "De har like stor kinetisk energi når bevegelsesmengden er lik", "Det avhenger av hvilken retning de beveger seg i"],
      explanation: "Skriver du $K = \\tfrac12 mv^2$ om ved hjelp av $p = mv$, får du $K = p^2/(2m)$, og med samme $p$ er energien størst for den minste massen. Intuisjonen bak: det lette legemet må gå mye fortere for å ha samme bevegelsesmengde, og energien går som farten i andre potens.",
    },
    {
      question: "Hvor stort er kraftmomentet fra en kraft som virker langs en linje gjennom rotasjonsaksen?",
      options: ["Null, fordi momentarmen er null", "Lik kraften ganger avstanden til kraftens angrepspunkt", "Lik kraften ganger radien til legemet", "Det avhenger av hvor stor kraften er"],
      explanation: "Kraftmoment er kryssproduktet $\\mathbf{r}\\times\\mathbf{F}$, og det er null når kraften er parallell med posisjonsvektoren. Derfor gir aksekrefter og en tyngde som angriper i massesenteret null moment om nettopp den aksen — uansett hvor store de er.",
    },
    {
      question: "En kunstløper trekker armene inn mens hun spinner. Hva skjer med rotasjonsenergien?",
      options: ["Den øker, og økningen kommer fra muskelarbeidet hun gjør", "Den er uendret, siden spinnet er bevart", "Den synker, siden treghetsmomentet blir mindre når armene kommer nærmere aksen", "Den er uendret, siden ingen ytre krefter virker"],
      explanation: "Spinnet er bevart, og med $K = L^2/(2I)$ ser man at energien øker når $I$ synker. Energien kommer fra at hun må dra armene innover mot den kraften som skal til for å holde dem i sirkelbane — spinn og energi er to ulike regnskap.",
    },
    {
      question: "Hvilken av disse ruller raskest ned et skråplan uten å gli?",
      options: ["En massiv kule", "En tynn ring", "En massiv sylinder", "Alle bruker like lang tid"],
      explanation: "Akselerasjonen er $g\\sin\\theta/(1 + I/(mR^2))$, og den massive kula har den minste verdien av $I/(mR^2)$, nemlig $2/5$. Verken massen eller radien inngår i brøken — det er bare masse**fordelingen** som avgjør.",
    },
    {
      question: "Hvilken av disse likningene er separabel?",
      options: ["$dv/dt = g - kv$", "$d^2x/dt^2 = -\\omega_0^2 x$", "$d^2x/dt^2 = -kx - bv$", "$d^2y/dt^2 = -g + \\sin(t)y$"],
      explanation: "Separasjon krever en førsteordens likning der høyresiden kan skrives som et produkt av en funksjon av den ukjente og en funksjon av tiden. De tre andre er andreordens, og de løses med karakteristisk likning eller numerisk.",
    },
    {
      question: "Hva blir terminalfarten for et legeme i fritt fall med kvadratisk luftmotstand $-Dv^2$?",
      options: ["$\\sqrt{mg/D}$", "$mg/D$", "$\\sqrt{2mg/D}$", "$Dg/m$"],
      explanation: "Terminalfarten er den farten der akselerasjonen blir null, altså der $mg = Dv_T^2$. Uttrykket $mg/D$ er terminalfarten for **lineær** motstand $-k_v v$, og en enhetskontroll skiller de to umiddelbart.",
    },
    {
      question: "Hvordan skalerer banefarten i en sirkelbane med baneradien?",
      options: ["Som $r^{-1/2}$ — dobbelt så stor radius gir farten delt på $\\sqrt2$", "Som $r^{-1}$ — dobbelt så stor baneradius halverer farten i banen", "Som $r^{1/2}$ — dobbelt så stor radius gir $\\sqrt2$ ganger farten", "Farten er uavhengig av baneradien"],
      explanation: "Fra $GMm/r^2 = mv^2/r$ følger $v = \\sqrt{GM/r}$, altså $v \\propto r^{-1/2}$. Lengre ute er feltet svakere, og det trengs mindre fart for å holde kurven — kombinert med lengre omkrets gir det omløpstiden $T_p \\propto r^{3/2}$.",
    },
  ],
  'fys1100-11-3': [
    {
      question: "Hvor mange minutter bør du regne per oppgave i et sett med fem flertrinnsoppgaver på fire timer?",
      options: ["Omkring 48 minutter, hvorav noe går til lesing og gjennomlesing", "Omkring 60 minutter, slik at du rekker alt i første gjennomgang", "Omkring 30 minutter, så du har god tid til å kontrollere til slutt", "Det spiller ingen rolle, siden oppgavene teller ulikt"],
      explanation: "Fire timer delt på fem oppgaver gir 48 minutter hver, og av dem går en del til å lese oppgaveteksten, tegne figurer og lese gjennom til slutt. Alle deloppgaver teller likt, så det er ingen oppgaver du kan bruke vesentlig mer tid på uten å tape poeng et annet sted.",
    },
    {
      question: "Hvorfor lønner det seg å ta a-deloppgavene i alle oppgavene før du graver deg ned i én?",
      options: ["Alle deloppgaver teller likt, så de innledende er like mye verdt", "De innledende deloppgavene er alltid enklere enn de siste og gir derfor raskere poeng", "Sensor retter deloppgavene i den rekkefølgen de er besvart", "Det gis bonuspoeng for å ha svart på alle oppgavene"],
      explanation: "Inntil 5 poeng per deloppgave, og alle teller likt — en a-deloppgave i oppgave 5 er verdt like mye som en e-deloppgave i oppgave 1. Det gis dessuten poeng for en god løsningsidé selv om den ikke fullføres, så bredde lønner seg.",
    },
    {
      question: "Hva bør en løsning inneholde for at et frilegemediagram skal gi full uttelling?",
      options: ["Alle krefter navngitt med symbol, riktig retning og angrepspunkt, og et inntegnet koordinatsystem", "En pen tegning av situasjonen med alle mål påført", "Alle krefter, inkludert sentripetalkraften der bevegelsen er sirkulær, tegnet inn med hver sin pil og navngitt", "Bare de kreftene som til slutt inngår i regnestykket"],
      explanation: "Udefinerte symboler eller uforklarte krefter koster omtrent to poeng, og feil angrepspunkt omtrent ett. En oppdiktet sentripetalkraft skal aldri inn — den er resultanten av de virkelige kreftene, ikke en egen kraft.",
    },
    {
      question: "Hva er det viktigste å få med når en oppgave ber om en Euler–Cromer-løkke skrevet for hånd?",
      options: ["Initialbetingelser, riktig akselerasjonsuttrykk og riktig oppdateringsrekkefølge", "Riktig Python-syntaks, inkludert import-linjer, utskrift og plotting av resultatet til slutt", "Et fullstendig kjørbart program med plotting av resultatet", "En kommentar på hver eneste linje i koden"],
      explanation: "Poengene fordeler seg typisk med ett for initialbetingelsene, tre for akselerasjonsuttrykket og ett for løkka. Syntaksfeil straffes ikke, og alle programmeringsspråk godtas — det er strukturen, ikke koden som kjører, som gir uttelling.",
    },
    {
      question: "Hva gjør du hvis du oppdager en regnefeil tidlig i en oppgave, men har ført resten ryddig videre?",
      options: ["Kommenterer feilen og lar mellomregningen stå, siden følgefeil normalt ikke straffes", "Stryker hele oppgaven og begynner helt på nytt hvis det fortsatt er tid igjen på klokka", "Lar det stå uten kommentar, siden sensor ikke ser feilen", "Skriver bare det endelige svaret på nytt uten mellomregning"],
      explanation: "Følgefeil straffes normalt ikke når mellomregningen er vist så feilen er sporbar — derfor er det å skrive symbolsk så lenge som mulig og vise hvert steg en direkte poengstrategi. Å stryke alt kaster bort både tid og de poengene metoden allerede har gitt.",
    },
  ],
  'fys1100-11-4': [
    {
      question: "Hva er det første du bør gjøre med en oppgave som er pakket inn i en fortelling om en jojo eller en romstige?",
      options: ["Oversette fortellingen til hvilken standardsjanger den egentlig er", "Lese hele oppgaveteksten to ganger for å få med alle detaljene", "Begynne på deloppgave a) med en gang for å spare tid", "Hoppe over den til sist, siden slike oppgaver pleier å være vanskeligst"],
      explanation: "Innpakningen varierer, men fysikken under er standard: jojoen er en rotasjonsoppgave med rullebetingelse, stigen i låven er samtidighetens relativitet. Femten sekunder på å navngi sjangeren gir deg oppskriften du allerede har drillet.",
    },
    {
      question: "En jojo faller mens snora rulles av ytterkanten. Hvorfor er farten mindre enn ved fritt fall?",
      options: ["En del av den frigjorte energien går til rotasjon i stedet for translasjon", "Snordraget gjør negativt arbeid på jojoen og tapper systemet for mekanisk energi underveis", "Luftmotstanden er større fordi jojoen roterer", "Massen som roterer teller dobbelt i energiregnskapet"],
      explanation: "Energiregnskapet er $Mgh = \\tfrac12 Mv^2 + \\tfrac12 I\\omega^2$, og med rullebetingelsen havner en tredel av den kinetiske energien i rotasjon. Snordraget gjør derimot ikke arbeid — kontaktpunktet mellom snor og sylinder står momentant stille, akkurat som ved ren rulling.",
    },
    {
      question: "Hva må du gjøre for å linearisere en ikke-lineær kraft om likevekt?",
      options: ["Finne likevekten der kraften er null, og derivere kraften i det punktet", "Sette alle ikke-lineære ledd lik null og løse resten", "Utvikle kraften om origo og beholde bare det lineære leddet", "Erstatte den ikke-lineære kraften med gjennomsnittsverdien over utslaget"],
      explanation: "Den effektive fjærkonstanten er minus den deriverte av nettokraften i likevektspunktet, og vinkelfrekvensen blir $\\sqrt{k_{\\text{eff}}/m}$. Å utvikle om origo i stedet for om likevekten er en klassisk feil, og gir feil frekvens så snart likevekten ikke ligger i origo.",
    },
    {
      question: "Hvorfor må legemets masse stå i akselerasjonsuttrykket når du legger til et nytt kraftledd i en gravitasjonskode?",
      options: ["Fordi den nye kraften ikke er proporsjonal med massen slik gravitasjonen er", "Fordi Newtons 2. lov alltid krever at massen står eksplisitt i hver akselerasjonslinje i koden", "Fordi gravitasjonskoden allerede har massen skjult i konstanten $GM$", "Fordi akselerasjonen ellers får feil enhet"],
      explanation: "Gravitasjonskraften er proporsjonal med legemets masse, så massen faller ut når man deler på den for å få akselerasjonen. En kraft som stråletrykk avhenger av tverrsnitt og ikke av masse, og da blir massen stående i nevneren — å glemme det gir feil svar med en faktor lik hele massen.",
    },
    {
      question: "Hva bør en kritikk av en feilaktig løsning inneholde for å gi full uttelling?",
      options: ["Det springende steget navngitt, riktig prinsipp begrunnet, og en korreksjon", "En fullstendig liste over alt som kunne vært formulert klarere eller mer presist i løsningen", "Et helt nytt løsningsforslag uten kommentar til det gamle", "En vurdering av om svaret er rimelig i størrelsesorden"],
      explanation: "Nesten alle gale løsninger er riktige de første linjene, så poengene ligger i å peke på den ene overgangen der noe usant introduseres. Å skrive at løsningen «er upresis» eller å levere et nytt tall uten å kommentere feilen gir liten uttelling.",
    },
  ],
  'fys1100-2-1': [
    {
      question: "Hva er stigningstallet til tangenten i en posisjon–tid-graf?",
      options: ["Hastigheten i det øyeblikket", "Akselerasjonen i det øyeblikket", "Den tilbakelagte veistrekningen", "Gjennomsnittsfarten over hele turen"],
      explanation: "Hastigheten er definert som $v = dx/dt$, altså nettopp stigningstallet til $x(t)$. Akselerasjonen er stigningstallet i fart–tid-grafen, ikke i posisjon–tid-grafen — det er den vanligste forvekslingen i graftolkning.",
    },
    {
      question: "Hva svarer arealet mellom en fart–tid-graf og tidsaksen til?",
      options: ["Forflytningen i tidsrommet, regnet med fortegn", "Akselerasjonen i tidsrommet", "Veistrekningen, alltid regnet positivt", "Gjennomsnittsfarten i tidsrommet"],
      explanation: "Integralet $\\int v\\,dt$ er forflytningen, og areal under tidsaksen teller negativt. Alternativet «veistrekningen, alltid positivt» er nesten riktig, men gjelder bare hvis farten aldri skifter fortegn; snur legemet, skiller de to svarene lag.",
    },
    {
      question: "En ball kastes rett opp. Hva gjelder i det øyeblikket ballen er på sitt høyeste?",
      options: ["Farten er null, akselerasjonen er $9{,}81\\ \\text{m/s}^2$ nedover", "Både farten og akselerasjonen er null", "Farten er null, akselerasjonen er $9{,}81\\ \\text{m/s}^2$ oppover", "Farten er størst, akselerasjonen er null"],
      explanation: "Tyngden virker hele veien, også i toppunktet, så akselerasjonen er $g$ nedover uavbrutt. At farten er null betyr bare at hastigheten er midt i å skifte retning — «fart null gir akselerasjon null» er en klassisk feilslutning.",
    },
    {
      question: "Når er bevegelseslikningen $x = x_0 + v_0t + \\tfrac12 at^2$ gyldig?",
      options: ["Bare når akselerasjonen er konstant i hele tidsrommet", "For all bevegelse langs en rett linje", "Bare når startfarten $v_0$ er null", "Når gjennomsnittsakselerasjonen er kjent"],
      explanation: "Likningen kommer av å integrere en konstant akselerasjon to ganger, og faller sammen så snart $a$ varierer. Å kjenne gjennomsnittsakselerasjonen hjelper ikke: to bevegelser med samme gjennomsnitt kan ende helt ulike steder.",
    },
    {
      question: "En bil kjører $20\\ \\text{m/s}$ og bremser med konstant $5{,}0\\ \\text{m/s}^2$. Hvor langt kjører den før den står stille?",
      options: ["$40\\ \\text{m}$", "$80\\ \\text{m}$", "$20\\ \\text{m}$", "$4{,}0\\ \\text{m}$"],
      explanation: "Den tidløse likningen gir $\\Delta x = v_0^2/(2a) = 400/10 = 40\\ \\text{m}$. Svaret $80\\ \\text{m}$ kommer av å glemme totallet i nevneren, og $4{,}0\\ \\text{m}$ er bremsetiden i sekunder forvekslet med en strekning.",
    },
    {
      question: "Hva er forskjellen på forflytning og veistrekning?",
      options: ["Forflytning er en vektor mellom start og slutt, veistrekning er banens totale lengde", "Forflytning måles i meter, veistrekning måles i meter per sekund", "Forflytning gjelder krum bane, veistrekning gjelder rett bane", "De er to navn på nøyaktig samme størrelse"],
      explanation: "En løper som fullfører en runde har veistrekning lik banelengden, men forflytning null. Begge måles i meter — det er retningen og fortegnet som skiller dem, ikke enheten.",
    },
    {
      question: "Hvilken av disse grafene beskriver en bevegelse som er fysisk umulig?",
      options: ["En posisjon–tid-graf som er loddrett i et punkt", "En fart–tid-graf med en skarp knekk", "En fart–tid-graf som krysser tidsaksen", "En posisjon–tid-graf som synker mot lavere verdier"],
      explanation: "En loddrett $x(t)$-graf krever uendelig fart, siden legemet da må flytte seg uten at tiden går. En knekk i $v(t)$ er derimot helt vanlig: den betyr bare at akselerasjonen endres brått, for eksempel når bremsene griper.",
    },
    {
      question: "En stein slippes fra ro. Hvor stor er farten etter $3{,}0\\ \\text{s}$ i fritt fall?",
      options: ["$29{,}4\\ \\text{m/s}$ nedover", "$44{,}1\\ \\text{m/s}$ nedover", "$9{,}81\\ \\text{m/s}$ nedover", "$3{,}27\\ \\text{m/s}$ nedover"],
      explanation: "Med $v_0 = 0$ er $v = gt = 9{,}81 \\cdot 3{,}0 = 29{,}4\\ \\text{m/s}$. Tallet $44{,}1$ er falldistansen $\\tfrac12 gt^2$ i meter, altså riktig regnestykke på feil spørsmål.",
    },
    {
      question: "Hva betyr det at akselerasjonen er en vektor?",
      options: ["Den endres også når bare bevegelsesretningen endres", "Den kan bare være positiv eller null", "Den må alltid peke samme vei som hastigheten", "Den har enhet, mens farten er enhetsløs"],
      explanation: "Hastigheten er en vektor, så enhver endring av den — også ren retningsendring — er en akselerasjon. En bil i en sving med konstant speedometeravlesning akselererer derfor, og det er nettopp derfor du kjenner det i kroppen.",
    },
    {
      question: "En bil kjører i en sving med krumningsradius $50\\ \\text{m}$ og konstant banefart $10\\ \\text{m/s}$. Hvor stor er akselerasjonen?",
      options: ["$2{,}0\\ \\text{m/s}^2$ inn mot sentrum", "Null, siden farten er konstant", "$0{,}20\\ \\text{m/s}^2$ inn mot sentrum", "$5{,}0\\ \\text{m/s}^2$ langs banen"],
      explanation: "Normalkomponenten er $a_N = v^2/\\rho = 100/50 = 2{,}0\\ \\text{m/s}^2$, rettet inn mot krumningssentrum. At banefarten er konstant fjerner bare den tangentielle komponenten, ikke normalkomponenten.",
    },
    {
      question: "Hvilken bevegelseslikning er raskest når oppgaven gir strekning og startfart, men ikke nevner tid?",
      options: ["$v^2 - v_0^2 = 2a(x - x_0)$", "$v = v_0 + at$", "$x = x_0 + v_0t + \\tfrac12at^2$", "$v_{\\text{gj}} = (v_0 + v)/2$"],
      explanation: "Den tidløse likningen knytter fart og strekning direkte, uten mellomregning av $t$. De andre krever at du først finner tiden, og hvert ekstra regnetrinn er en ny sjanse for feil.",
    },
    {
      question: "Hva er gjennomsnittsfarten til en tralle som forflytter seg $30\\ \\text{m}$ på $12\\ \\text{s}$?",
      options: ["$2{,}5\\ \\text{m/s}$ i forflytningens retning", "$0{,}40\\ \\text{m/s}$ i forflytningens retning", "$360\\ \\text{m/s}$ i forflytningens retning", "$2{,}5\\ \\text{m/s}^2$ i forflytningens retning"],
      explanation: "Gjennomsnittsfarten er forflytning delt på tid: $30/12 = 2{,}5\\ \\text{m/s}$. Alternativet med $\\text{m/s}^2$ har riktig tall, men feil enhet — enhetskontroll er en gratis sjekk som fanger nettopp dette.",
    },
    {
      question: "En heis akselererer oppover med konstant $1{,}2\\ \\text{m/s}^2$. Hva kjenner passasjeren?",
      options: ["Seg tyngre, fordi gulvet må skyve hardere enn ellers", "Seg lettere, fordi heisen løfter en del av vekten", "Ingen forskjell, siden farten er den samme hele tiden", "Seg tyngre bare i det øyeblikket heisen starter"],
      explanation: "Kroppen registrerer akselerasjon, ikke fart, og en oppadrettet akselerasjon krever at gulvet skyver hardere enn tyngden. Følelsen varer hele akselerasjonsfasen — ikke bare startøyeblikket — og forsvinner når heisen går med konstant fart.",
    },
    {
      question: "Posisjonen er $x(t) = 3t^2 - 12t$ (meter, sekunder). Når snur legemet?",
      options: ["Ved $t = 2{,}0\\ \\text{s}$", "Ved $t = 4{,}0\\ \\text{s}$", "Ved $t = 6{,}0\\ \\text{s}$", "Legemet snur aldri"],
      explanation: "Legemet snur der $v = dx/dt = 6t - 12$ skifter fortegn, altså ved $t = 2{,}0\\ \\text{s}$. Svaret $4{,}0\\ \\text{s}$ er nullpunktet til $x(t)$ selv — der legemet passerer origo, ikke der det snur.",
    },
    {
      question: "Hva forteller initialbetingelsene $x_0$ og $v_0$?",
      options: ["Posisjon og fart ved starttidspunktet, som fastsetter integrasjonskonstantene", "Den største farten og posisjonen bevegelsen kan ha", "Akselerasjonen ved starten av bevegelsen", "Gjennomsnittlig posisjon og fart gjennom hele forløpet"],
      explanation: "Hver integrasjon gir en ukjent konstant, og initialbetingelsene er det som låser dem fast. Uten dem er bevegelsen ubestemt — samme akselerasjon kan gi uendelig mange forskjellige baner.",
    },
    {
      question: "Hvilken påstand om fritt fall uten luftmotstand er riktig?",
      options: ["Alle legemer får samme akselerasjon, uansett masse", "Tunge legemer får større akselerasjon enn lette", "Akselerasjonen avtar mens legemet faller", "Akselerasjonen er null i det øyeblikket legemet slippes"],
      explanation: "Dobler du massen, dobler du både tyngden som drar og tregheten som motsetter seg, så akselerasjonen blir uendret $g$. Med luftmotstand blir bildet et annet, men det er en annen modell enn fritt fall.",
    },
    {
      question: "En bil har $v_x = -15\\ \\text{m/s}$ langs $x$-aksen. Hva er banefarten?",
      options: ["$15\\ \\text{m/s}$", "$-15\\ \\text{m/s}$", "$225\\ \\text{m/s}$", "$7{,}5\\ \\text{m/s}$"],
      explanation: "Banefarten er tallverdien av hastigheten og er aldri negativ; minustegnet forteller bare at bilen kjører i negativ $x$-retning. Fortegnet hører til retningsopplysningen, ikke til farten.",
    },
    {
      question: "Hva er hensikten med en benevningskontroll?",
      options: ["Å sjekke at begge sider av en likning får samme enhet", "Å gjøre om alle svar til grunnenheter i SI-systemet", "Å avgjøre hvor mange gjeldende siffer svaret skal ha", "Å kontrollere at tallet i svaret har rimelig størrelsesorden"],
      explanation: "Kontrollen setter inn enheter i stedet for tall: stemmer de ikke, er uttrykket sikkert galt. Rimelighetsvurdering av størrelsesorden er en nyttig, men annen kontroll — den fanger ikke en formel med feil potens.",
    },
    {
      question: "Hvilken situasjon gir størst tallverdi på akselerasjonen?",
      options: ["Farten går fra $20\\ \\text{m/s}$ til $0$ på $2{,}0\\ \\text{s}$", "Farten går fra $0$ til $20\\ \\text{m/s}$ på $4{,}0\\ \\text{s}$", "Farten holdes konstant på $30\\ \\text{m/s}$ i $2{,}0\\ \\text{s}$", "Farten går fra $10\\ \\text{m/s}$ til $20\\ \\text{m/s}$ på $5{,}0\\ \\text{s}$"],
      explanation: "Tallverdiene blir $10$, $5{,}0$, $0$ og $2{,}0\\ \\text{m/s}^2$, så den kraftige innbremsingen vinner. At akselerasjonen der er negativ betyr bare at den peker motsatt vei av farten — tallverdien er fortsatt størst.",
    },
    {
      question: "Fart–tid-grafen er en rett linje fra $8{,}0\\ \\text{m/s}$ ved $t = 0$ til $-4{,}0\\ \\text{m/s}$ ved $t = 6{,}0\\ \\text{s}$. Hva er forflytningen?",
      options: ["$12\\ \\text{m}$", "$24\\ \\text{m}$", "$20\\ \\text{m}$", "$-12\\ \\text{m}$"],
      explanation: "Grafen krysser aksen ved $t = 4{,}0\\ \\text{s}$: arealet over aksen er $\\tfrac12 \\cdot 4 \\cdot 8 = 16\\ \\text{m}$ og under aksen $\\tfrac12 \\cdot 2 \\cdot 4 = 4\\ \\text{m}$, som trekkes fra. Svaret $20\\ \\text{m}$ får du hvis du legger dem sammen — da har du regnet veistrekning, ikke forflytning.",
    },
  ],
  'fys1100-2-2': [
    {
      question: "Hvorfor er den vannrette farten konstant i et kast uten luftmotstand?",
      options: ["Tyngden peker rett ned og har ingen vannrett komponent", "Fordi den vannrette farten alltid er mindre enn den loddrette", "Fordi luftmotstanden er den eneste vannrette kraften", "Fordi flytiden er for kort til at farten rekker å endres"],
      explanation: "Det er kraften som endrer farten, og tyngden virker bare loddrett, så $a_x = 0$ og $v_x$ forblir uendret. At flytiden er kort spiller ingen rolle: med en vannrett kraft ville farten endret seg uansett hvor kort tiden var.",
    },
    {
      question: "En kule slippes og en annen skytes vannrett ut fra samme høyde samtidig. Hva skjer?",
      options: ["De treffer bakken samtidig", "Den som skytes ut treffer først", "Den som slippes treffer først", "Det avhenger av kulenes masse"],
      explanation: "Falltiden bestemmes bare av $y$-bevegelsen, og begge har $v_{0y} = 0$, så $t = \\sqrt{2h/g}$ er den samme. Massen spiller ingen rolle i fritt fall — det er nettopp uavhengighetsprinsippet i praksis.",
    },
    {
      question: "Hva er riktig om hastigheten i toppunktet av et skrått kast?",
      options: ["Bare den loddrette komponenten er null", "Hele hastigheten er null", "Bare den vannrette komponenten er null", "Hastigheten er størst der"],
      explanation: "I toppen har $v_y$ akkurat skiftet fortegn og er null, mens $v_x$ farer uendret videre. Farten er faktisk på sitt **minste** i toppunktet, ikke på sitt største.",
    },
    {
      question: "Hva gir størst rekkevidde for et kast fra flat bakke uten luftmotstand?",
      options: ["Utskytingsvinkel $45^\\circ$", "Utskytingsvinkel $60^\\circ$", "Utskytingsvinkel $30^\\circ$", "Så bratt vinkel som mulig"],
      explanation: "Rekkevidden $x_1 = v_0^2\\sin 2\\theta/g$ er størst når $\\sin 2\\theta = 1$, altså ved $\\theta = 45^\\circ$. Brattere vinkel gir lengre flytid, men så lav vannrett fart at produktet blir mindre.",
    },
    {
      question: "En ball kastes med $20\\ \\text{m/s}$ i $30^\\circ$ over vannrett. Hva er den loddrette startkomponenten?",
      options: ["$10{,}0\\ \\text{m/s}$", "$17{,}3\\ \\text{m/s}$", "$20{,}0\\ \\text{m/s}$", "$6{,}7\\ \\text{m/s}$"],
      explanation: "Vinkelen måles fra vannrett, så $v_{0y} = v_0\\sin 30^\\circ = 20 \\cdot 0{,}50 = 10{,}0\\ \\text{m/s}$. Tallet $17{,}3$ er $v_0\\cos 30^\\circ$, altså den vannrette komponenten — den klassiske ombyttingen.",
    },
    {
      question: "Hvilke to utskytingsvinkler gir samme rekkevidde fra flat bakke?",
      options: ["$25^\\circ$ og $65^\\circ$", "$25^\\circ$ og $50^\\circ$", "$30^\\circ$ og $45^\\circ$", "$40^\\circ$ og $80^\\circ$"],
      explanation: "Rekkevidden avhenger av $\\sin 2\\theta$, og $\\sin 50^\\circ = \\sin 130^\\circ$, så vinkler som summerer til $90^\\circ$ gir samme resultat. Banene er likevel helt ulike: den bratte varer lenger og går høyere.",
    },
    {
      question: "Når gjelder formelen $t_1 = 2v_0\\sin\\theta/g$ for flytiden?",
      options: ["Bare når nedslaget skjer i samme høyde som utskytingen", "For alle kast uten luftmotstand", "Bare når utskytingsvinkelen er $45^\\circ$", "Bare når startfarten er kjent i komponentform"],
      explanation: "Formelen er utledet av $y = 0$ ved landing, altså samme nivå som start. Kastes ballen fra en balkong, må du i stedet løse annengradslikningen $-h = v_{0y}t - \\tfrac12 gt^2$.",
    },
    {
      question: "Et prosjektil har $v_x = 12\\ \\text{m/s}$ og $v_y = -16\\ \\text{m/s}$ ved nedslag. Hva er farten?",
      options: ["$20\\ \\text{m/s}$, rettet $53^\\circ$ under vannrett", "$16\\ \\text{m/s}$, rettet rett nedover", "$28\\ \\text{m/s}$, rettet $53^\\circ$ under vannrett", "$4\\ \\text{m/s}$, rettet $53^\\circ$ over vannrett"],
      explanation: "Pytagoras gir $\\sqrt{12^2 + 16^2} = 20\\ \\text{m/s}$, og $\\arctan(16/12) = 53^\\circ$ under vannrett. Å legge sammen komponentene direkte ($28$) eller trekke dem fra hverandre ($4$) er en vektorfeil — komponenter står vinkelrett på hverandre.",
    },
    {
      question: "Hvordan finner du tyngdeakselerasjonen fra måledata av et kast på en ukjent planet?",
      options: ["Som stigningstallet i grafen for den loddrette farten mot tid", "Som stigningstallet i grafen for den vannrette farten mot tid", "Ved å dele rekkevidden på flytiden i andre potens", "Ved å måle massen til prosjektilet og bruke tyngdeloven"],
      explanation: "Uten luftmotstand er $v_y = v_{0y} - gt$ lineær, så stigningstallet er $-g$ og to avlesninger holder. Den vannrette farten er konstant og har stigningstall null uansett planet, så den bærer ingen informasjon om $g$.",
    },
    {
      question: "En drone i vannrett flukt slipper en pakke. Hvor er dronen når pakken lander?",
      options: ["Rett over pakken, dersom dronen flyr uendret", "Et godt stykke bak pakken, siden pakken tar med seg farten", "Et godt stykke foran pakken, siden pakken bremses av tyngden", "Det avhenger av hvor tung pakken er"],
      explanation: "Pakken beholder dronens vannrette fart hele veien ned, og begge tilbakelegger derfor like lang vannrett strekning. Tyngden virker bare loddrett og kan ikke bremse pakken framover.",
    },
    {
      question: "Hvilken enhet og form har svaret «farten ved nedslag» i en kastoppgave?",
      options: ["Et tall i $\\text{m/s}$ med retning oppgitt i tillegg", "Et tall i $\\text{m/s}^2$ med retning oppgitt i tillegg", "Bare tallverdien i $\\text{m/s}$, retning er unødvendig", "Bare den loddrette komponenten i $\\text{m/s}$"],
      explanation: "Farten er en vektorstørrelse, så både tallverdi og retning hører med — et svar uten retning trekkes typisk 2 poeng. Enheten er $\\text{m/s}$; $\\text{m/s}^2$ er enheten til akselerasjon.",
    },
    {
      question: "Hvor lang tid bruker en gjenstand som slippes fra $20\\ \\text{m}$ ned til bakken?",
      options: ["$2{,}0\\ \\text{s}$", "$4{,}1\\ \\text{s}$", "$1{,}4\\ \\text{s}$", "$0{,}49\\ \\text{s}$"],
      explanation: "Fra $h = \\tfrac12 gt^2$ får vi $t = \\sqrt{2 \\cdot 20/9{,}81} = 2{,}0\\ \\text{s}$. Svaret $4{,}1\\ \\text{s}$ kommer av å glemme kvadratroten, og $1{,}4\\ \\text{s}$ av å bruke $h$ i stedet for $2h$ under rota.",
    },
    {
      question: "Hva blir banekurven til et kast uten luftmotstand?",
      options: ["En parabel", "En sirkelbue", "En rett linje", "En hyperbel"],
      explanation: "Eliminerer du tiden mellom $x(t)$ og $y(t)$, får du $y$ som en annengradsfunksjon av $x$, altså en parabel. Med luftmotstand blir banen asymmetrisk og ikke lenger en parabel.",
    },
    {
      question: "En ball kastes fra en balkong med en vinkel over vannrett. Hva gjelder ved nedslag på bakken?",
      options: ["Farten er større enn startfarten", "Farten er lik startfarten", "Farten er mindre enn startfarten", "Farten avhenger av ballens masse"],
      explanation: "Ballen faller lenger ned enn den ble kastet fra, så den vertikale komponenten rekker å bli større enn ved start: $v = \\sqrt{v_0^2 + 2gh}$. Lik fart ville den bare hatt dersom nedslaget skjedde i samme høyde som utskytingen.",
    },
    {
      question: "Hva er tiden i et kast en «bro» mellom?",
      options: ["Den vannrette og den loddrette bevegelsen", "Startfarten og utskytingsvinkelen", "Tyngdeakselerasjonen og luftmotstanden", "Topphøyden og rekkevidden i samme likning"],
      explanation: "De to komponentbevegelsene er uavhengige, men deler samme klokke: du finner tiden fra den ene retningen og setter den inn i den andre. Det er nettopp derfor spørsmålet «hva vet jeg i begge retninger?» alltid har svaret $t$.",
    },
    {
      question: "Hva skjer med rekkevidden dersom startfarten dobles og vinkelen holdes fast?",
      options: ["Den firedobles", "Den dobles", "Den øker med rundt 40 prosent", "Den blir åtte ganger så stor"],
      explanation: "Rekkevidden $x_1 = v_0^2\\sin 2\\theta/g$ er proporsjonal med **kvadratet** av startfarten, så dobling gir fire ganger så langt. Samme kvadratavhengighet gjør at bremselengden til en bil firedobles ved dobbel fart.",
    },
    {
      question: "Hvilken feil gjør en kandidat som får $v_x$ forskjellig ved start og ved nedslag i et kast uten luftmotstand?",
      options: ["Har fått tyngden til å virke i vannrett retning", "Har brukt for få gjeldende siffer i mellomregningen", "Har glemt å gjøre om vinkelen til radianer", "Har regnet flytiden med feil fortegn"],
      explanation: "Uten luftmotstand er $a_x = 0$, så $v_x$ kan ikke endre seg; et avvik betyr at tyngden er kommet inn i $x$-likningen. Sensor straffer ikke følgefeilen hardt dersom du kommenterer den, men en ukommentert umulig verdi trekker.",
    },
    {
      question: "En ball kastes i $50^\\circ$ over vannrett og en annen i $40^\\circ$, begge med samme fart fra flat bakke. Hvilken er lengst i lufta?",
      options: ["Den på $50^\\circ$", "Den på $40^\\circ$", "De er like lenge i lufta", "Det avhenger av ballenes masse"],
      explanation: "Flytiden $t_1 = 2v_0\\sin\\theta/g$ vokser med vinkelen helt opp til $90^\\circ$, så den bratteste holder seg lengst oppe. Rekkevidden er derimot den samme for de to, siden vinklene er komplementære.",
    },
    {
      question: "Hva er den største rekkevidden en ball med startfart $15\\ \\text{m/s}$ kan få fra flat bakke?",
      options: ["$23\\ \\text{m}$", "$46\\ \\text{m}$", "$11\\ \\text{m}$", "$15\\ \\text{m}$"],
      explanation: "Med $\\sin 2\\theta = 1$ blir $x_{\\text{maks}} = v_0^2/g = 225/9{,}81 = 23\\ \\text{m}$. Regnestykket er en rask rimelighetssjekk: får du et svar over dette taket, er noe galt i regningen.",
    },
    {
      question: "Hvorfor kan ikke formlene i dette kapitlet brukes når luftmotstanden er stor?",
      options: ["Akselerasjonen er da ikke lenger konstant i noen av retningene", "Fordi tyngdeakselerasjonen endrer seg med høyden", "Fordi banen fortsatt er en parabel, men med annen krumning", "Fordi flytiden da blir uavhengig av utskytingsvinkelen"],
      explanation: "Luftmotstanden avhenger av farten og virker mot bevegelsen, så både $a_x$ og $a_y$ varierer underveis — og da faller hele grunnlaget for bevegelseslikningene for konstant akselerasjon bort. Slike kast må regnes numerisk, slik boka gjør i delen om numerisk modellering.",
    },
  ],
  'fys1100-3-1': [
    {
      question: "Hva viser et frilegemediagram?",
      options: ["Alle kreftene som virker på ett bestemt legeme", "Alle kreftene i hele situasjonen, fordelt på legemene", "Kreftene legemet utøver på omgivelsene sine", "Resultantkraften tegnet som én enkelt pil"],
      explanation: "Diagrammet isolerer ett legeme og viser bare kreftene som virker PÅ det. Resultanten tegnes ikke inn — den regnes ut etterpå, og å tegne både enkeltkreftene og resultanten teller kreftene dobbelt.",
    },
    {
      question: "Hva koster typisk 2 poeng i et frilegemediagram på eksamen?",
      options: ["Udefinerte symboler eller uforklarte krefter", "Å tegne koordinatsystemet inn i figuren", "Å tegne pilene med ulik lengde", "Å tegne tyngden fra massesenteret"],
      explanation: "Sensor retter figuren for seg, og en pil uten navn kan ikke vurderes. Inntegnet koordinatsystem og pillengder som speiler kreftenes størrelse er derimot en del av standarden, ikke feil.",
    },
    {
      question: "En kloss ligger i ro på et vannrett bord. Er normalkraften motkraften til tyngden?",
      options: ["Nei — motkraften til tyngden virker på jorda", "Ja, de er like store og motsatt rettet", "Ja, siden begge er kontaktkrefter", "Nei — normalkraften er alltid større enn tyngden"],
      explanation: "Kraft og motkraft virker alltid på ulike legemer: motkraften til tyngden er klossens gravitasjonskraft på jorda. At $N = mg$ her, følger av Newtons 2. lov med $a = 0$ — i en heis som akselererer er de to ikke like store.",
    },
    {
      question: "Newtons 2. lov er en vektorlikning. Hva betyr det i praksis?",
      options: ["Den skrives ut som én likning per akse", "Den gjelder bare for bevegelse i to dimensjoner", "Bare den største kraften trenger å tas med", "Den gir alltid akselerasjonen langs farten"],
      explanation: "Loven brukes komponentvis: $\\sum F_x = ma_x$ og $\\sum F_y = ma_y$. Akselerasjonen peker langs resultantkraften, ikke langs farten — en ball på vei opp akselererer nedover.",
    },
    {
      question: "En person på $60\\ \\text{kg}$ står i en heis som akselererer oppover med $2{,}0\\ \\text{m/s}^2$. Hva viser badevekta?",
      options: ["$709\\ \\text{N}$", "$589\\ \\text{N}$", "$120\\ \\text{N}$", "$469\\ \\text{N}$"],
      explanation: "Fra $N - mg = ma$ får vi $N = m(g+a) = 60 \\cdot 11{,}81 = 709\\ \\text{N}$. Svaret $589\\ \\text{N}$ er tyngden alene, altså det vekta ville vist uten akselerasjon.",
    },
    {
      question: "Hvilken kraft skal ALDRI tegnes inn i et frilegemediagram?",
      options: ["En «bevegelseskraft» i fartsretningen", "Normalkraften fra underlaget", "Snordraget fra en stram snor", "Tyngden på et legeme i fritt fall"],
      explanation: "Newtons 1. lov sier at bevegelse ikke krever kraft, så en pil som skal «bære» farten framover har ingen kilde. Tyngden virker derimot alltid, også under fritt fall — der er den den eneste kraften.",
    },
    {
      question: "Hva er en masseløs snor over en masseløs trinse sin viktigste egenskap?",
      options: ["Snordraget er det samme i begge ender", "Snordraget dobles når det går over trinsa", "Snordraget blir null i den nederste enden", "Snordraget avhenger av trinsas radius"],
      explanation: "Uten masse trengs ingen netto kraft for å akselerere snora eller trinsa, så tallverdien av snordraget er uendret; trinsa endrer bare retningen. Radien har ingen betydning så lenge trinsa er masseløs og friksjonsfri.",
    },
    {
      question: "Når er et legeme i likevekt?",
      options: ["Når resultantkraften er null", "Bare når legemet står helt stille", "Når alle kreftene på legemet er like store", "Når akselerasjonen er konstant"],
      explanation: "Likevekt betyr $\\sum\\mathbf{F} = 0$ og dermed $a = 0$, som gjelder både for ro og for konstant hastighet. Konstant akselerasjon er noe helt annet — da er resultantkraften nettopp ikke null.",
    },
    {
      question: "En kloss trekkes over et friksjonsfritt gulv av en snor som peker $30^\\circ$ over vannrett. Hva gjelder for normalkraften?",
      options: ["Den er mindre enn $mg$", "Den er nøyaktig $mg$", "Den er større enn $mg$", "Den er null så lenge klossen beveger seg"],
      explanation: "Snordraget har en oppadrettet komponent som bærer en del av klossen, så $N = mg - T\\sin\\theta < mg$. Å bruke $N = mg$ som en fast regel er en av de dyreste vanene i faget.",
    },
    {
      question: "Hva er et inertialsystem?",
      options: ["Et referansesystem der Newtons 1. lov gjelder", "Et system som roterer med konstant vinkelfart", "Et system festet til et legeme i akselerasjon", "Et system der alle krefter er null"],
      explanation: "Definisjonen er nettopp at et legeme uten resultantkraft beholder hastigheten sin der. En buss som bremser er ikke et inertialsystem: der ser passasjerene ut til å akselerere uten at noen kraft virker.",
    },
    {
      question: "Hva er riktig om kraft og motkraft?",
      options: ["De virker på hvert sitt legeme og kan aldri oppheve hverandre", "De virker på samme legeme og opphever hverandre", "Motkraften er alltid litt mindre enn kraften", "De opptrer bare når legemene er i ro"],
      explanation: "Fordi de virker på ulike legemer, havner de i hvert sitt frilegemediagram. Ville de opphevet hverandre, kunne ingenting noen gang akselerert — hest-og-vogn-paradokset bygger nettopp på den feilslutningen.",
    },
    {
      question: "En kasse på $30\\ \\text{kg}$ henger i et tau som akselererer den oppover med $2{,}0\\ \\text{m/s}^2$. Hvor stort er snordraget?",
      options: ["$354\\ \\text{N}$", "$294\\ \\text{N}$", "$60\\ \\text{N}$", "$234\\ \\text{N}$"],
      explanation: "Fra $T - mg = ma$ får vi $T = m(g+a) = 30 \\cdot 11{,}81 = 354\\ \\text{N}$. Svaret $294\\ \\text{N}$ er tyngden alene, og $60\\ \\text{N}$ er $ma$ uten tyngdeleddet.",
    },
    {
      question: "Hvorfor kan du ikke løfte deg selv etter beltestroppene?",
      options: ["Kreftene mellom hånd og belte er indre og summerer seg til null", "Fordi du ikke er sterk nok til å overvinne tyngden", "Fordi normalkraften fra gulvet alltid er større", "Fordi Newtons 1. lov forbyr bevegelse uten fart"],
      explanation: "For systemet «du» er hånd-mot-belte-kreftene indre, og indre krefter opptrer i par som opphever hverandre. Bare en ytre kraft — fra gulvet, en stige eller en annen person — kan endre systemets samlede bevegelse.",
    },
    {
      question: "Hva viser en badevekt for en person i en heis i fritt fall?",
      options: ["Null", "Personens vanlige vekt", "Det dobbelte av vanlig vekt", "Halvparten av vanlig vekt"],
      explanation: "Med $a = -g$ blir $N = m(g - g) = 0$: gulvet og personen faller like fort og har ingenting å presse mot hverandre med. Tyngden er ikke borte — det er kontaktkraften som mangler.",
    },
    {
      question: "En lampe henger i to snorer med ulik vinkel. Hvilken snor har størst snordrag?",
      options: ["Den bratteste", "Den flateste", "De er alltid like store", "Det avhenger bare av lampas masse"],
      explanation: "Den bratteste snora har størst andel av kraften rettet oppover og bærer derfor mest av tyngden. I grensen der begge snorene nærmer seg vannrett, går begge snordragene mot uendelig — derfor kan en klessnor aldri strammes helt rett.",
    },
    {
      question: "Hvilken størrelse skal ALDRI skrives med vektormarkering?",
      options: ["Massen", "Kraften", "Akselerasjonen", "Bevegelsesmengden"],
      explanation: "Massen er en skalar uten retning, og en vektorpil over $m$ er en faglig feil sensor ser etter. Kraft, akselerasjon og bevegelsesmengde er alle vektorer og skal ha markering.",
    },
    {
      question: "Hva er den beste framgangsmåten for å finne ALLE kreftene på et legeme?",
      options: ["Se hvor noe berører legemet, og legg deretter til tyngden", "Tegne én kraft for hver bevegelsesretning legemet har", "Regne ut resultanten først og fordele den på pilene", "Ta med kreftene legemet utøver på omgivelsene"],
      explanation: "Kontaktkrefter finnes ved berøringspunkter, og fjernkrefter — her bare tyngden — legges til på slutten. Krefter legemet utøver på andre, hører hjemme i de andre legemenes diagrammer.",
    },
    {
      question: "En kloss glir med konstant fart over et bord med friksjon. Hva er riktig?",
      options: ["Resultantkraften på klossen er null", "Det virker en netto kraft framover", "Bare tyngden og normalkraften virker", "Akselerasjonen peker i fartsretningen"],
      explanation: "Konstant hastighet betyr $a = 0$, altså $\\sum\\mathbf{F} = 0$ etter Newtons 1. lov. Friksjonen bakover må da balanseres av en like stor drivkraft framover — men summen er fortsatt null.",
    },
    {
      question: "Hvilket koordinatsystem lønner seg på et skråplan?",
      options: ["Én akse langs planet og én normalt på det", "Alltid vannrett og loddrett", "Én akse langs tyngden og én langs normalkraften", "Aksene bør velges tilfeldig og sjekkes etterpå"],
      explanation: "Med én akse langs akselerasjonen blir akselerasjonen null i den andre retningen, og bare tyngden trenger å dekomponeres. Vannrett og loddrett gir riktig svar, men to ukjente akselerasjonskomponenter og mye mer arbeid.",
    },
    {
      question: "Hva betyr det at normalkraften i en utregning blir negativ?",
      options: ["Kontakten er brutt — legemet er løftet fra underlaget", "Underlaget drar legemet ned mot flaten", "Normalkraften peker langs flaten i stedet for vinkelrett", "Massen må ha blitt satt inn med feil fortegn"],
      explanation: "Et underlag kan bare skyve, aldri dra, så en negativ $N$ betyr at forutsetningen om kontakt ikke holder. Dette er nøyaktig samme resonnement som gir betingelsen for at et legeme mister kontakten i toppen av en loop.",
    },
    {
      question: "Hva er forskjellen på Newtons 2. lov og en kraftmodell som $F_g = mg$?",
      options: ["Andre lov kobler summen av kreftene til akselerasjonen; kraftmodellen sier hvor stor én kraft er", "De sier det samme, men med ulike symboler", "Kraftmodellen gjelder bare i inertialsystemer", "Andre lov gjelder bare når kreftene er konstante"],
      explanation: "En full løsning trenger begge: kraftmodellene fyller inn venstresiden, andre lov kobler den til bevegelsen. Andre lov gjelder også for varierende krefter — da blir den bare en differensiallikning i stedet for en enkel ligning.",
    },
    {
      question: "Hvor angriper tyngden på et legeme?",
      options: ["I massesenteret", "I kontaktflaten mot underlaget", "I det punktet som er lavest", "Jevnt fordelt langs overflaten"],
      explanation: "Tyngden virker på hver del av legemet, men den samlede virkningen kan alltid erstattes av én kraft i massesenteret. Angrepspunktet spiller ingen rolle for akselerasjonen, men blir avgjørende så snart rotasjon kommer inn i bildet.",
    },
  ],
  'fys1100-3-2': [
    {
      question: "Hvilken komponent av tyngden virker langs et skråplan?",
      options: ["$mg\\sin\\theta$", "$mg\\cos\\theta$", "$mg\\tan\\theta$", "$mg/\\cos\\theta$"],
      explanation: "Tyngden danner vinkelen $\\theta$ med normalen til planet, så komponenten langs planet er den motstående kateten, $mg\\sin\\theta$. Kontroller med $\\theta = 0$: da skal komponenten langs planet være null, og det er bare $\\sin$ som gir det.",
    },
    {
      question: "Hvor stor er normalkraften på en kloss som ligger på et skråplan uten andre krefter normalt på planet?",
      options: ["$mg\\cos\\theta$", "$mg$", "$mg\\sin\\theta$", "$mg/\\cos\\theta$"],
      explanation: "Likevekt normalt på planet gir $N = mg\\cos\\theta$, altså mindre enn tyngden. Å sette $N = mg$ på et skråplan er en av de dyreste vanene i faget, fordi feilen forplanter seg videre til friksjonen.",
    },
    {
      question: "Hva er akselerasjonen til en kloss på et friksjonsfritt skråplan med helning $\\theta$?",
      options: ["$g\\sin\\theta$, uavhengig av massen", "$g\\cos\\theta$, uavhengig av massen", "$g\\sin\\theta$, men bare for små masser", "$mg\\sin\\theta$, altså proporsjonal med massen"],
      explanation: "Newtons 2. lov gir $mg\\sin\\theta = ma$, og massen faller ut på begge sider. Uttrykket $mg\\sin\\theta$ er en kraft i newton, ikke en akselerasjon — enhetskontrollen avslører det alternativet.",
    },
    {
      question: "Hva er riktig om statisk friksjon?",
      options: ["Den er en øvre grense: $f_s \\le \\mu_s N$", "Den er alltid nøyaktig $\\mu_s N$", "Den er alltid større enn den dynamiske friksjonen", "Den avhenger av kontaktflatens areal"],
      explanation: "Hvilefriksjonen er akkurat så stor som den må være for å holde legemet i ro, opp til taket $\\mu_s N$. Å sette inn $\\mu_s N$ når ingenting glir, gir en netto kraft som ville satt legemet i bevegelse av seg selv.",
    },
    {
      question: "En kloss glir nedover et skråplan. Hvilken vei peker den dynamiske friksjonen?",
      options: ["Oppover langs planet", "Nedover langs planet", "Vinkelrett ut fra planet", "Loddrett oppover"],
      explanation: "Friksjonen motvirker den relative bevegelsen mellom flatene, og klossen glir nedover. Sendes klossen i stedet oppover, snur friksjonen — det gir to ulike akselerasjoner i de to fasene.",
    },
    {
      question: "Ved hvilken helningsvinkel begynner en kloss med $\\mu_s = 0{,}40$ å gli?",
      options: ["$21{,}8^\\circ$", "$23{,}6^\\circ$", "$40{,}0^\\circ$", "$66{,}4^\\circ$"],
      explanation: "Hvilebetingelsen er $\\tan\\theta \\le \\mu_s$, så den kritiske vinkelen er $\\arctan 0{,}40 = 21{,}8^\\circ$. Svaret $23{,}6^\\circ$ får du om du bruker $\\arcsin$ i stedet for $\\arctan$.",
    },
    {
      question: "Hvorfor inneholder ikke hvilebetingelsen $\\mu_s \\ge \\tan\\theta$ massen?",
      options: ["Både drivkraften og friksjonstaket er proporsjonale med massen", "Fordi normalkraften er uavhengig av massen", "Fordi friksjonstallet allerede inneholder massen", "Fordi tyngdeakselerasjonen er den samme for alle masser"],
      explanation: "Drivkraften er $mg\\sin\\theta$ og taket $\\mu_s mg\\cos\\theta$; deler du ulikheten på $mg\\cos\\theta$, forsvinner både $m$ og $g$. En tyngre kloss dras hardere ned, men presses også hardere mot flaten.",
    },
    {
      question: "En kloss glir nedover et plan med $\\theta = 30^\\circ$ og $\\mu_d = 0{,}20$. Hva er akselerasjonen?",
      options: ["$3{,}2\\ \\text{m/s}^2$", "$4{,}9\\ \\text{m/s}^2$", "$6{,}6\\ \\text{m/s}^2$", "$1{,}7\\ \\text{m/s}^2$"],
      explanation: "Fra $a = g(\\sin\\theta - \\mu_d\\cos\\theta) = 9{,}81(0{,}500 - 0{,}173) = 3{,}2\\ \\text{m/s}^2$. Svaret $4{,}9$ er det friksjonsfrie tilfellet, altså friksjonsleddet glemt.",
    },
    {
      question: "Hva sier Hookes lov?",
      options: ["Fjærkraften er $-k(x - x_0)$ og peker mot likevektsstillingen", "Fjærkraften er $kx^2$ og vokser med kvadratet av utslaget", "Fjærkraften er konstant lik $k$ uansett utslag", "Fjærkraften peker alltid bort fra likevektsstillingen"],
      explanation: "Minustegnet er selve poenget: kraften trekker alltid tilbake mot likevekt, og det er derfor en fjær gir svingninger. En kraft bort fra likevekt ville tvert imot gitt ustabilitet.",
    },
    {
      question: "En fjær med $k = 200\\ \\text{N/m}$ strekkes $5{,}0\\ \\text{cm}$. Hvor stor er fjærkraften?",
      options: ["$10\\ \\text{N}$", "$1000\\ \\text{N}$", "$40\\ \\text{N}$", "$4{,}0\\ \\text{N}$"],
      explanation: "$F = k\\Delta x = 200 \\cdot 0{,}050 = 10\\ \\text{N}$. Svaret $1000\\ \\text{N}$ kommer av å sette inn $5{,}0$ i stedet for $0{,}050$ — enhetsomregningen fra centimeter til meter er den vanligste fellen her.",
    },
    {
      question: "Hva skjer med normalkraften når en snor trekker en kloss skrått **ut fra** et skråplan?",
      options: ["Den blir mindre enn $mg\\cos\\theta$", "Den blir større enn $mg\\cos\\theta$", "Den er fortsatt nøyaktig $mg\\cos\\theta$", "Den blir null uansett snordragets størrelse"],
      explanation: "Snordragets komponent ut fra planet bærer en del av klossen, så $N = mg\\cos\\theta - T\\sin\\varphi$. Fordi friksjonstaket er $\\mu N$, synker også friksjonen — og det er derfor man løfter litt i håndtaket på en tung slede.",
    },
    {
      question: "Hvordan kontrollerer du raskest at du ikke har byttet om sinus og cosinus?",
      options: ["Setter inn $\\theta = 0$ og sjekker at komponenten langs planet blir null", "Sjekker at svaret har riktig antall gjeldende siffer", "Regner om vinkelen til radianer og prøver på nytt", "Sammenligner tallverdien med tyngden $mg$"],
      explanation: "Ved $\\theta = 0$ er planet vannrett, og ingenting skal drive klossen bortover. Har du $mg\\cos\\theta$ langs planet, gir testen $mg$ — en kloss som akselererer av seg selv over et flatt gulv.",
    },
    {
      question: "Hva er enheten til friksjonstallet?",
      options: ["Det er dimensjonsløst", "$\\text{N}$", "$\\text{N/m}$", "$\\text{m/s}^2$"],
      explanation: "Friksjonstallet er forholdet mellom to krefter, så enhetene forkorter hverandre. En «friksjonskraft» i newton er $\\mu N$, ikke $\\mu$ alene — og $\\text{N/m}$ er enheten til fjærkonstanten.",
    },
    {
      question: "En kasse ligger i ro på et plan som er langt slakkere enn den kritiske vinkelen. Hvor stor er friksjonskraften?",
      options: ["Nøyaktig $mg\\sin\\theta$", "Nøyaktig $\\mu_s mg\\cos\\theta$", "Null, siden kassa ikke beveger seg", "Nøyaktig $\\mu_d mg\\cos\\theta$"],
      explanation: "Likevekt langs planet krever at friksjonen balanserer tyngdekomponenten, altså $f_s = mg\\sin\\theta$ — mindre enn taket. Å sette inn $\\mu_s N$ her ville gitt kassa en netto kraft oppover langs planet.",
    },
    {
      question: "Hvorfor er en kloss lettere å skyve etter at den har begynt å gli?",
      options: ["Fordi $\\mu_d$ som regel er mindre enn $\\mu_s$", "Fordi normalkraften synker når klossen beveger seg", "Fordi friksjonen avtar med farten i Coulomb-modellen", "Fordi tyngdekomponenten blir mindre i bevegelse"],
      explanation: "Glidefriksjonstallet er typisk litt lavere enn hvilefriksjonstallet, så motstanden faller i det klossen løsner. I Coulomb-modellen er glidefriksjonen uavhengig av farten — den avtar ikke videre etter hvert som klossen får fart.",
    },
    {
      question: "Hvilket koordinatsystem lønner seg i en skråplanoppgave?",
      options: ["Én akse langs planet og én normalt på det", "Vannrett og loddrett, som ellers", "Én akse langs tyngden og én langs normalkraften", "Aksene langs de to friksjonsretningene"],
      explanation: "Med aksene dreid følger akselerasjonen den ene aksen, og den andre gir en ren likevektslikning for $N$. Vannrett/loddrett gir riktig svar, men to ukjente akselerasjonskomponenter og betydelig mer arbeid.",
    },
    {
      question: "En kloss sendes oppover et skråplan med friksjon. Hvordan er akselerasjonen opp sammenlignet med ned?",
      options: ["Større på vei opp", "Større på vei ned", "Nøyaktig like store", "Null på vei opp"],
      explanation: "På vei opp bremser både tyngdekomponenten og friksjonen ($a = g(\\sin\\theta + \\mu_d\\cos\\theta)$), på vei ned motvirker de hverandre. Derfor kommer klossen tilbake med lavere fart enn den ble sendt opp med.",
    },
    {
      question: "Hva må være oppfylt for at uttrykket $N = mg\\cos\\theta$ skal gjelde?",
      options: ["Ingen andre krefter har komponent normalt på planet", "Klossen må være i ro på planet", "Friksjonstallet må være kjent", "Helningsvinkelen må være under $45^\\circ$"],
      explanation: "Uttrykket kommer av $\\sum F_\\perp = 0$ med bare tyngden og normalkraften i den retningen. Ligger det en ekstra kloss oppå eller trekker en snor skrått ut, må $N$ regnes ut på nytt — og det gjelder like fullt om klossen glir eller står stille.",
    },
    {
      question: "Hva betyr det at friksjonen ikke er en konservativ kraft?",
      options: ["Mekanisk energi den tar, kommer ikke tilbake", "At den alltid virker mot tyngdekraften", "At den avhenger av veien, men ikke av farten", "At den bare virker når legemet står stille"],
      explanation: "En kloss som sendes opp et plan og glir tilbake, kommer alltid tilbake med lavere fart; differansen er blitt varme i kontaktflaten. Får du en returfart større enn startfarten i en oppgave med friksjon, er noe galt i regnskapet.",
    },
    {
      question: "Hvilken av disse kontrollene fanger opp en feil i et skråplanuttrykk raskest?",
      options: ["Sett $\\mu = 0$ og sjekk at du får $a = g\\sin\\theta$", "Sett $m = 1\\ \\text{kg}$ og se om tallet blir pent", "Regn om alle vinkler til radianer", "Kontroller at svaret har tre gjeldende siffer"],
      explanation: "Grensetilfellet $\\mu \\to 0$ skal gi det friksjonsfrie svaret, og gjør det ikke det, er fortegnet eller faktoren på friksjonsleddet galt. En slik kontroll er ofte en egen poenggivende deloppgave på eksamen.",
    },
    {
      question: "En kloss ligger på et skråplan med $\\theta = 20^\\circ$ og $\\mu_s = 0{,}50$. Hva skjer?",
      options: ["Den blir liggende, fordi $\\tan 20^\\circ < 0{,}50$", "Den glir, fordi $\\sin 20^\\circ < 0{,}50$", "Den glir, fordi $20^\\circ$ er mindre enn friksjonsvinkelen", "Det avhenger av klossens masse"],
      explanation: "Hvilebetingelsen er $\\tan\\theta \\le \\mu_s$, og $\\tan 20^\\circ = 0{,}36 < 0{,}50$, så klossen blir liggende. Betingelsen bruker tangens, ikke sinus, og massen inngår ikke i det hele tatt.",
    },
    {
      question: "Hvor stor trekkraft trengs for å dra en kasse med konstant fart oppover et skråplan, med snora parallelt med planet?",
      options: ["$mg(\\sin\\theta + \\mu_d\\cos\\theta)$", "$mg(\\sin\\theta - \\mu_d\\cos\\theta)$", "$mg\\sin\\theta$ alene", "$\\mu_d mg\\cos\\theta$ alene"],
      explanation: "Konstant fart betyr likevekt langs planet: trekkraften må balansere både tyngdekomponenten og friksjonen, som begge peker nedover langs planet på vei opp. Minustegnet ville gjeldt for en kasse som glir nedover.",
    },
  ],
  'fys1100-3-3': [
    {
      question: "Hvorfor har to legemer koblet med en uttøyelig snor samme tallverdi på akselerasjonen?",
      options: ["Fordi snorens lengde er fast, så endene flytter seg like mye", "Fordi snordraget er det samme i begge ender av en masseløs snor", "Fordi to koblede legemer alltid har like store masser", "Fordi friksjonstallet er det samme under begge legemene"],
      explanation: "Uttøyelighet gir koblingsbetingelsen: flytter den ene enden seg, må den andre flytte seg like mye. Likt snordrag er en annen egenskap, og den følger av at snora er masseløs — de to forutsetningene gir hver sin opplysning.",
    },
    {
      question: "Hva skjer med snordraget i systemmetoden?",
      options: ["Det faller ut, fordi det er en indre kraft", "Det dobles, siden det opptrer i to ender", "Det blir den eneste ytre kraften i regnskapet", "Det må regnes ut før akselerasjonen kan finnes"],
      explanation: "De to snordragene er et kraftpar etter Newtons 3. lov og opphever hverandre inne i systemet. Nettopp derfor kan systemmetoden ikke brukes til å finne snordraget — da må systemet splittes.",
    },
    {
      question: "Når bør du velge splittemetoden framfor systemmetoden?",
      options: ["Når oppgaven spør etter snordraget", "Når det er friksjon under begge legemene", "Når de to massene er svært forskjellige", "Når systemet står stille på et skråplan"],
      explanation: "Bare splittemetoden gir de indre kreftene, siden de faller ut når systemet behandles som ett legeme. Er bare akselerasjonen etterspurt, er systemmetoden raskere uansett hvor stor friksjonen er.",
    },
    {
      question: "To lodd på $2{,}0\\ \\text{kg}$ og $6{,}0\\ \\text{kg}$ henger over en masseløs trinse. Hva er akselerasjonen?",
      options: ["$4{,}9\\ \\text{m/s}^2$", "$9{,}8\\ \\text{m/s}^2$", "$2{,}5\\ \\text{m/s}^2$", "$29{,}4\\ \\text{m/s}^2$"],
      explanation: "Atwood-maskinen gir $a = (m_2-m_1)g/(m_1+m_2) = 4 \\cdot 9{,}81/8 = 4{,}9\\ \\text{m/s}^2$. Svaret $9{,}8$ ville betydd fritt fall, noe et system med motvekt aldri kan gi.",
    },
    {
      question: "Hva betyr et negativt snordrag i et regnestykke?",
      options: ["Snora er slakk, og legemene går uavhengig", "Snora drar dobbelt så hardt den andre veien", "Massene må ha blitt satt inn i feil rekkefølge", "Systemet akselererer raskere enn fritt fall"],
      explanation: "En snor kan bare dra, aldri skyve, så et negativt svar betyr at forutsetningen om stram snor ikke holder. Riktig svar er «$T = 0$, snora er slakk», med en setning om hvorfor — å rapportere en negativ snorkraft ukommentert er et sikkert poengtap.",
    },
    {
      question: "Hva skal skje med uttrykket for akselerasjonen når du setter $\\mu_d = 0$?",
      options: ["Friksjonsleddet skal forsvinne helt", "Akselerasjonen skal bli null", "Snordraget skal bli lik summen av tyngdene", "Uttrykket skal bli uavhengig av massene"],
      explanation: "Grensen $\\mu_d \\to 0$ skal gi det friksjonsfrie svaret du kjenner fra før. Gjør den ikke det, er fortegnet eller faktoren på friksjonsleddet galt — kontrollen tar ti sekunder og er ofte en egen poenggivende deloppgave.",
    },
    {
      question: "Hvorfor er snordraget det samme i begge ender av en masseløs snor?",
      options: ["Newtons 2. lov på snora gir null netto kraft", "Fordi trinsa fordeler kraften likt mellom de to endene", "Fordi begge legemene har samme akselerasjon i rommet", "Fordi snora er uttøyelig og ikke kan strekkes"],
      explanation: "Med $m = 0$ blir $\\sum F = ma = 0$ uansett akselerasjon, så kreftene i endene må balansere. Uttøyeligheten gir noe annet — nemlig at akselerasjonene er like store.",
    },
    {
      question: "En kloss på $5{,}0\\ \\text{kg}$ på et friksjonsfritt bord er koblet over en trinse til et lodd på $3{,}0\\ \\text{kg}$. Hva er akselerasjonen?",
      options: ["$3{,}7\\ \\text{m/s}^2$", "$5{,}9\\ \\text{m/s}^2$", "$9{,}8\\ \\text{m/s}^2$", "$1{,}9\\ \\text{m/s}^2$"],
      explanation: "Systemmetoden gir $a = m_2g/(m_1+m_2) = 3 \\cdot 9{,}81/8 = 3{,}7\\ \\text{m/s}^2$. Svaret $5{,}9$ får du om du deler loddets tyngde på klossens masse alene og glemmer at hele systemet skal akselereres.",
    },
    {
      question: "To klosser glir nedover samme skråplan, koblet med en snor. Når er snordraget null?",
      options: ["Når friksjonstallene er like", "Når massene er like", "Når planet er friksjonsfritt og bratt", "Når den øverste klossen er tyngst"],
      explanation: "Hver kloss ville hatt $a = g(\\sin\\theta - \\mu\\cos\\theta)$ på egen hånd, som er masseuavhengig — er $\\mu$-ene like, glir de i takt og snora har ingen jobb. Like masser hjelper ikke, siden massen uansett faller ut av akselerasjonen.",
    },
    {
      question: "Hvilken framgangsmåte er raskest når både akselerasjon og snordrag er etterspurt?",
      options: ["Finn $a$ med systemmetoden og sett den inn for ett legeme", "Sett opp begge komponentlikningene og løs likningssettet samlet", "Regn ut snordraget først og finn deretter akselerasjonen", "Bruk systemmetoden to ganger med ulike systemvalg"],
      explanation: "Systemmetoden gir $a$ på én linje, og ett enkelt legeme gir deretter $T$ direkte. Å løse hele likningssettet gir samme svar, men med mer algebra og flere sjanser for fortegnsfeil.",
    },
    {
      question: "Hva avgjør om et koblet system i ro settes i bevegelse?",
      options: ["Det statiske friksjonstallet", "Det dynamiske friksjonstallet", "Forholdet mellom de to massene alene", "Snordragets størrelse"],
      explanation: "Hvilefriksjonen har taket $\\mu_s N$, og den drivende kraften må overstige det for at noe skal begynne å bevege seg. Det dynamiske friksjonstallet styrer først hva som skjer etterpå, når legemene faktisk glir.",
    },
    {
      question: "Hvorfor trenger du to frilegemediagram i en to-kloss-oppgave?",
      options: ["Fordi snordraget er indre for systemet under ett", "Fordi de to klossene som regel har ulik masse", "Fordi friksjonen bare virker på det ene av legemene", "Fordi akselerasjonene peker i ulike retninger i rommet"],
      explanation: "Snordraget kan bare finnes når legemene behandles hver for seg; i ett felles diagram faller det ut. Ett diagram der snordraget likevel er tegnet inn, teller den samme kraften to ganger.",
    },
    {
      question: "Hva gir grensen $m_2 \\to 0$ for snordraget i et system med et hengende lodd $m_2$?",
      options: ["$T \\to 0$", "$T \\to m_1 g$", "$T \\to \\infty$", "$T$ blir uendret"],
      explanation: "Uten lodd er det ingenting som drar i snora, så snordraget må forsvinne. Slike grenser er den billigste kontrollen på et symbolsk uttrykk — og de sjekkes bare symbolsk, aldri med tall.",
    },
    {
      question: "Hva er den fysiske betydningen av grensen $\\theta = 90^\\circ$ i et skråplansystem med trinse?",
      options: ["Systemet blir en Atwood-maskin", "Friksjonen blir maksimal", "Normalkraften blir lik hele tyngden", "Snordraget blir null"],
      explanation: "Et loddrett «plan» gir ingen normalkraft, og dermed ingen friksjon — igjen står to lodd i hver sin ende av en snor. Uttrykket håndterer dette selv, siden $\\cos 90^\\circ = 0$.",
    },
    {
      question: "To klosser skyves inntil hverandre over et bord av én ytre kraft. Hva er riktig om kontaktkraften mellom dem?",
      options: ["Den er indre og finnes bare ved å splitte", "Den er like stor som den ytre kraften", "Den virker bare på den bakerste av klossene", "Den er null når bordet er friksjonsfritt"],
      explanation: "Kontaktkraften oppfører seg som et snordrag med motsatt fortegnsregel: den kan bare skyve. Den er like reell på et friksjonsfritt bord, siden den fremre klossen fortsatt må akselereres.",
    },
    {
      question: "Hvorfor lønner det seg å løse symbolsk før du setter inn tall?",
      options: ["Grensetilfeller kan bare kontrolleres symbolsk", "Fordi kalkulatoren gir mer nøyaktige svar da", "Fordi sensor ikke godtar innsatte tall underveis", "Fordi symbolske svar slipper å oppgis med enhet"],
      explanation: "Et tallsvar røper verken enhetsfeil eller at et ledd har feil fortegn, mens et symbolsk uttrykk kan sjekkes i flere grenser. I tillegg straffes ikke følgefeil når mellomregningen er symbolsk og sporbar — og hvert svar skal uansett ha enhet.",
    },
    {
      question: "En kloss på skråplan er koblet til et hengende lodd. Hvilken vei peker friksjonen på klossen når loddet trekker den oppover?",
      options: ["Nedover langs planet", "Oppover langs planet", "Vinkelrett ut fra planet", "Den er null så lenge snora er stram"],
      explanation: "Friksjonen motvirker den relative bevegelsen, og klossen glir oppover langs planet. Snur bevegelsen — for eksempel om loddet er for lett — snur også friksjonen.",
    },
    {
      question: "Hva er en rimelig øvre grense for akselerasjonen i et system der bare tyngden driver?",
      options: ["$g$", "$2g$", "Summen av massene ganger $g$", "Det finnes ingen øvre grense"],
      explanation: "Selv i det gunstigste tilfellet kan ikke systemet akselerere raskere enn et legeme i fritt fall. Får du $14\\ \\text{m/s}^2$, er typisk en masse havnet i telleren i stedet for nevneren.",
    },
    {
      question: "Hvor ligger snordraget i en Atwood-maskin i forhold til de to tyngdene?",
      options: ["Mellom dem", "Over begge", "Under begge", "Nøyaktig lik gjennomsnittet av dem"],
      explanation: "Det letteste loddet akselererer oppover, så snordraget må overstige tyngden dets; det tyngste akselererer nedover, så snordraget må være mindre enn dets tyngde. Gjennomsnittet stemmer bare i det spesialtilfellet der massene er like.",
    },
    {
      question: "Hva bør du gjøre etter at du har funnet $a$ og $T$ i en to-kloss-oppgave?",
      options: ["Sette svarene inn i den likningen du ikke brukte", "Regne oppgaven på nytt med samme metode", "Runde av til ett gjeldende siffer", "Sjekke at snordraget er større enn begge tyngdene"],
      explanation: "Kryssjekken mot den ubrukte likningen fanger fortegns- og regnefeil på under et halvt minutt. Å regne på nytt med samme metode gir gjerne samme feil om igjen.",
    },
  ],
  'fys1100-3-4': [
    {
      question: "Hva er første steg i løsningsoppskriften for en Newton-oppgave?",
      options: ["Tegne et fullstendig frilegemediagram", "Regne ut normalkraften fra $N = mg\\cos\\theta$", "Sette opp koblingsbetingelsen mellom legemene", "Velge hvilken bevegelseslikning som skal brukes"],
      explanation: "Figuren kommer alltid først, og den er selvstendig poenggivende — den tar under to minutter og er den best betalte tiden i settet. Normalkraft og kobling hører til steg tre og fem, etter at aksene er valgt.",
    },
    {
      question: "En kloss glir nedover et plan med $\\theta = 25^\\circ$ og $\\mu_d = 0{,}20$. Hva er akselerasjonen?",
      options: ["$2{,}4\\ \\text{m/s}^2$", "$4{,}1\\ \\text{m/s}^2$", "$0{,}22\\ \\text{m/s}^2$", "$6{,}1\\ \\text{m/s}^2$"],
      explanation: "$a = g(\\sin\\theta - \\mu_d\\cos\\theta) = 9{,}81(0{,}423 - 0{,}181) = 2{,}4\\ \\text{m/s}^2$. Svaret $4{,}1$ er det friksjonsfrie tilfellet, altså friksjonsleddet glemt.",
    },
    {
      question: "En kloss ligger oppå en annen som akselereres. Hvilken kraft akselererer den øverste?",
      options: ["Hvilefriksjonen fra klossen under", "Normalkraften fra klossen under", "Den ytre kraften som trekker i systemet", "Tyngden på den øverste klossen"],
      explanation: "Friksjonen er den eneste vannrette kraften som berører den øverste klossen — her virker den som drivkraft, ikke bremsekraft. Den ytre kraften berører bare den nederste klossen.",
    },
    {
      question: "Hva er største akselerasjon en stablet kloss kan følge med på uten å skli?",
      options: ["$\\mu_s g$", "$\\mu_s mg$", "$g/\\mu_s$", "$\\mu_d g\\cos\\theta$"],
      explanation: "Newtons 2. lov på den øverste klossen med friksjonen på taket gir $\\mu_s m g = ma$, altså $a = \\mu_s g$ — massen faller ut. Uttrykket $\\mu_s mg$ er en kraft i newton, ikke en akselerasjon.",
    },
    {
      question: "En kloss presses mot en loddrett vegg av en vannrett kraft $F$. Hvilken kraft holder klossen oppe?",
      options: ["Hvilefriksjonen mot veggen", "Normalkraften fra veggen", "Den vannrette kraften $F$", "Kraften klossen utøver på veggen"],
      explanation: "Normalkraften er vannrett og kan ikke bære noe loddrett; det er friksjonen som holder. Betingelsen blir $\\mu_s F \\ge mg$, så trykkraften virker indirekte — gjennom normalkraften den skaper.",
    },
    {
      question: "To klosser står inntil hverandre på et friksjonsfritt gulv og skyves av en kraft på den bakerste. Hva gjelder kontaktkraften?",
      options: ["Den er mindre enn den ytre kraften", "Den er lik den ytre kraften", "Den er større enn den ytre kraften", "Den er null på et friksjonsfritt gulv"],
      explanation: "Kontaktkraften skal bare akselerere den fremste klossen, mens den ytre kraften akselererer begge: $K = m_2F/(m_1+m_2)$. Den er like reell på et friksjonsfritt gulv, siden den fremste klossen fortsatt har masse.",
    },
    {
      question: "Hvilken grensekontroll avslører at et friksjonsledd mangler $\\cos\\theta$?",
      options: ["Å sette $\\theta = 0$", "Å sette $\\mu_d = 0$", "Å sette massen $m = 0$", "Å sette $g = 0$"],
      explanation: "Med $\\theta = 0$ skal uttrykket gi $a = -\\mu_d g$ for en kloss i bevegelse på flatt gulv. Grensen $\\mu_d = 0$ fjerner hele friksjonsleddet og kan derfor ikke skille et riktig ledd fra et som mangler $\\cos\\theta$.",
    },
    {
      question: "Hvorfor er det svakt å «verifisere» uttrykket $a = g(\\sin\\theta - \\mu_d\\cos\\theta)$ ved å sette $m = 0$?",
      options: ["Massen inngår ikke i uttrykket i det hele tatt", "Fordi en masse på null ikke er fysisk mulig", "Fordi akselerasjonen da blir uendelig stor", "Fordi friksjonstallet endrer seg med massen"],
      explanation: "En grensekontroll må ramme en parameter som faktisk står i uttrykket, og der du kjenner svaret fra før. At massen faller ut er en interessant observasjon, men den tester ingenting.",
    },
    {
      question: "Når er $f_s = \\mu_s N$ det riktige å sette inn?",
      options: ["Når du spør etter en grense", "Alltid når legemet ligger i ro", "Alltid når legemet er i kontakt med underlaget", "Når legemet glir med konstant fart"],
      explanation: "Hvilefriksjonen står på taket sitt bare i grensetilfellet — «minste kraft», «brattest mulig plan». Ellers er den akkurat så stor som likevekten krever, og glir legemet, er det $\\mu_d$ som gjelder.",
    },
    {
      question: "En kile med en kloss på skråsiden står på et friksjonsfritt gulv. Hva skjer om kilen får gli?",
      options: ["Normalkraften blir mindre enn $mg\\cos\\theta$", "Normalkraften blir større enn $mg\\cos\\theta$", "Klossens akselerasjon langs planet blir uendret", "Friksjonen mellom kloss og kile forsvinner"],
      explanation: "Kilen viker unna under klossen, slik at kontakten «slipper opp» og normalkraften synker — samme mekanisme som i en heis som akselererer nedover. Klossens akselerasjon i forhold til bakken er da heller ikke lenger rettet langs skråsiden.",
    },
    {
      question: "Hvor mye av tiden i en flertrinnsoppgave bør gå til frilegemediagrammet?",
      options: ["Rundt to minutter — best betalte tid i settet", "Så lite som mulig, siden figuren ikke gir poeng", "Omtrent halvparten av tiden på oppgaven", "Bare hvis det er tid til overs etter regningen"],
      explanation: "Diagrammet er selvstendig poenggivende og tar under to minutter, så avkastningen per minutt er høyest der. Går du tom for tid, er det regningen som skal kuttes — ikke figuren.",
    },
    {
      question: "Hva bør du gjøre med et negativt svar for et snordrag?",
      options: ["Tolke det: snora er slakk, så $T = 0$", "Rapportere tallverdien uten fortegn", "Bytte om massene og regne på nytt", "Sette absoluttverdien inn i neste deloppgave"],
      explanation: "En snor kan bare dra, så et negativt snordrag betyr at forutsetningen om stram snor svikter. Svaret er en opplysning om modellen, ikke en regnefeil — men det må skrives ut, ellers ser sensor bare et umulig tall.",
    },
  ],
  'fys1100-4-1': [
    {
      question: "En bil kjører med konstant fart gjennom en sving. Hva gjelder for akselerasjonen?",
      options: ["Den er ulik null og peker inn mot svingens sentrum", "Den er null, siden farten ikke endrer seg", "Den er ulik null og peker framover langs banen", "Den er ulik null og peker ut fra svingens sentrum"],
      explanation: "Akselerasjon er endring av hastigheten som **vektor**, og en vektor kan endre seg ved å snu. Bilen holder farten konstant, men snur retningen hele tiden, og retningsendringen peker inn mot sentrum. Svaret om at akselerasjonen er null, forveksler fart med hastighet.",
    },
    {
      question: "Hvilket uttrykk gir sentripetalakselerasjonen for en sirkelbane med radius $R$?",
      options: ["$v^2/R$", "$v/R^2$", "$v^2R$", "$vR$"],
      explanation: "Sentripetalakselerasjonen er $a_r = v^2/R$, rettet inn mot sentrum. En benevningskontroll skiller alternativene raskt: bare $v^2/R$ gir $(\\text{m/s})^2/\\text{m} = \\text{m/s}^2$, mens $vR$ gir $\\text{m}^2/\\text{s}$.",
    },
    {
      question: "En karusell dobler banefarten uten å endre radius. Hvordan endres sentripetalakselerasjonen?",
      options: ["Den blir fire ganger så stor", "Den blir dobbelt så stor", "Den er uendret", "Den blir halvparten så stor"],
      explanation: "Akselerasjonen $v^2/R$ går som farten i **andre** potens, så en dobling gir $2^2 = 4$ ganger så stor akselerasjon. Å svare at den dobles, er å tenke lineært der sammenhengen er kvadratisk — samme feil som ved bremselengde.",
    },
    {
      question: "To punkter ligger på samme roterende skive, det ene dobbelt så langt fra aksen som det andre. Hva gjelder?",
      options: ["Samme vinkelfart, men dobbelt så stor banefart", "Dobbelt så stor vinkelfart, men samme banefart", "Samme vinkelfart og samme banefart", "Halv vinkelfart, men dobbelt så stor banefart"],
      explanation: "Alle punkter på en stiv, roterende skive går rundt like mange ganger per sekund, så vinkelfarten $\\omega$ er felles. Banefarten følger $v = \\omega R$ og vokser derfor med avstanden fra aksen. Påstanden om samme banefart ville krevd at det ytterste punktet gikk kortere vei på samme tid.",
    },
    {
      question: "Hva er sentripetalkraften i en frilegemeanalyse?",
      options: ["Resultanten av de virkelige kreftene i radiell retning", "En egen kraft som skal tegnes inn i frilegemediagrammet", "En kraft som alltid peker ut fra sentrum", "Massen ganget med banefarten"],
      explanation: "Sentripetalkraften har ingen egen fysisk kilde: i én situasjon er det friksjonen, i en annen normalkraften eller snordraget som utgjør den. Tegner du den inn som en egen pil ved siden av de virkelige kreftene, har du talt de samme kreftene to ganger — og det koster poeng.",
    },
    {
      question: "Hvilken likning gjelder i **toppunktet** av en vertikal loop, med positiv retning inn mot sentrum?",
      options: ["$N + mg = mv^2/R$", "$N - mg = mv^2/R$", "$mg - N = mv^2/R$", "$N = mv^2/R$"],
      explanation: "I toppen peker sentrum nedover, og både normalkraften og tyngden peker den veien, så begge teller positivt. Formen $N - mg = mv^2/R$ gjelder i **bunnen**, der tyngden peker ut fra sentrum — å bruke bunn-oppsettet i toppen er den vanligste fortegnsfeilen i sjangeren.",
    },
    {
      question: "Hvordan er normalkraften i bunnen av en loop sammenlignet med tyngden?",
      options: ["Alltid større enn $mg$", "Alltid lik $mg$", "Alltid mindre enn $mg$", "Alltid null"],
      explanation: "I bunnen gir Newtons 2. lov $N = m(v^2/R + g)$, og leddet $mv^2/R$ er positivt, så $N > mg$. Å svare $mg$ ville forutsatt at legemet ikke akselererte i det hele tatt, altså at banen var rett.",
    },
    {
      question: "Hva er betingelsen for at en vogn holder kontakt hele veien rundt en vertikal loop med radius $R$?",
      options: ["$v_{\\text{topp}} \\ge \\sqrt{gR}$", "$v_{\\text{topp}} = \\sqrt{gR}$", "$v_{\\text{topp}} \\ge \\sqrt{2gR}$", "$v_{\\text{topp}} \\ge \\sqrt{gR/2}$"],
      explanation: "Betingelsen kommer av at en normalkraft bare kan skyve, altså $N \\ge 0$, og det gir en **ulikhet**. Formen med likhetstegn beskriver bare det ene grensetilfellet der normalkraften akkurat er null, og besvarer derfor et annet spørsmål enn «hvor fort må den minst gå».",
    },
    {
      question: "Fra hvilken minste høyde må en kule slippes fra hvile på en friksjonsfri bane for å komme gjennom en loop med radius $R$?",
      options: ["$\\tfrac52 R$", "$2R$", "$\\tfrac32 R$", "$5R$"],
      explanation: "Energiregnskapet gir $v_{\\text{topp}}^2 = 2g(h-2R)$, og kravet $v_{\\text{topp}}^2 \\ge gR$ gir $h \\ge \\tfrac52 R$. Svaret $2R$ er høyden på toppen av loopen, altså det du får hvis du glemmer at kula også må ha fart der.",
    },
    {
      question: "Hva betyr det fysisk at det utregnede uttrykket for normalkraften blir negativt?",
      options: ["At kontakten er brutt og legemet har forlatt banen", "At normalkraften peker motsatt vei av det du antok", "At legemet presses ekstra hardt mot banen", "At du må regne om farten til vinkelfart"],
      explanation: "En normalkraft kan bare skyve, aldri trekke, så en negativ verdi er fysisk umulig og betyr at modellen ikke lenger gjelder. Å tolke det som at kraften «peker andre veien» er nettopp feilen: underlaget kan ikke holde fast i legemet.",
    },
    {
      question: "Hva er den største farten en bil kan holde i en **flat** sving med radius $R$ og friksjonstall $\\mu_s$?",
      options: ["$\\sqrt{\\mu_s g R}$", "$\\mu_s g R$", "$\\sqrt{\\mu_s g / R}$", "$\\sqrt{gR}$"],
      explanation: "På flat veg er friksjonen den eneste kraften inn mot sentrum, så $mv^2/R \\le \\mu_s mg$ gir $v \\le \\sqrt{\\mu_s gR}$. Formen uten rottegn har enhet $\\text{m}^2/\\text{s}^2$ og kan derfor ikke være en fart.",
    },
    {
      question: "En bil kjører $20\\ \\text{m/s}$ gjennom en sving med radius $80\\ \\text{m}$. Sentripetalakselerasjonen er",
      options: ["$5{,}0\\ \\text{m/s}^2$", "$0{,}25\\ \\text{m/s}^2$", "$4{,}0\\ \\text{m/s}^2$", "$400\\ \\text{m/s}^2$"],
      explanation: "$a_r = v^2/R = 400/80 = 5{,}0\\ \\text{m/s}^2$, rettet inn mot sentrum. Verdien $0{,}25\\ \\text{m/s}^2$ er $v/R$, altså vinkelfarten, og $400\\ \\text{m/s}^2$ er $v^2$ uten å dele på radien.",
    },
    {
      question: "For en konisk pendel med snorvinkel $\\theta$ målt fra loddlinja gjelder",
      options: ["$\\tan\\theta = v^2/(gR)$", "$\\sin\\theta = v^2/(gR)$", "$\\cos\\theta = v^2/(gR)$", "$\\tan\\theta = gR/v^2$"],
      explanation: "Loddrett likevekt gir $T\\cos\\theta = mg$ og radielt $T\\sin\\theta = mv^2/R$; deler du den nederste på den øverste, forsvinner både $T$ og $m$ og du står igjen med $\\tan\\theta = v^2/(gR)$. Den omvendte formen ville gitt at vinkelen **minker** når farten øker, og det stemmer ikke med at kula svinger utover.",
    },
    {
      question: "Når gjelder **ikke** betingelsen $v_{\\text{topp}} \\ge \\sqrt{gR}$ i en vertikal sirkel?",
      options: ["Når legemet sitter på en stiv stang som også kan skyve utover", "Når legemet henger i en snor", "Når banen er friksjonsfri", "Når massen er stor"],
      explanation: "Betingelsen bygger på at banen bare kan **skyve** utenfra og inn, altså $N \\ge 0$. En stiv stang eller et rør kan i tillegg trekke, og da kan legemet krype rundt toppen vilkårlig sakte. En snor kan derimot bare trekke innover, så der gjelder betingelsen fullt ut.",
    },
    {
      question: "Hvorfor gjør normalkraften ikke arbeid på en vogn i en friksjonsfri loop?",
      options: ["Den står vinkelrett på bevegelsen i hvert punkt", "Den er alltid mindre enn tyngden", "Kontaktkrefter gjør per definisjon aldri arbeid", "Den peker mot sentrum, og sentrum står stille"],
      explanation: "Arbeidet er $W = Fd\\cos\\phi$, og med $\\phi = 90^\\circ$ blir det null. Påstanden om at kontaktkrefter aldri gjør arbeid, er gal: friksjon er også en kontaktkraft, og den gjør høyst reelt arbeid.",
    },
    {
      question: "En vogn kjører gjennom bunnen av en loop med radius $10\\ \\text{m}$ i farten $14\\ \\text{m/s}$. Belastningen på passasjerene, målt i antall $g$, er omtrent",
      options: ["$3{,}0$", "$2{,}0$", "$1{,}0$", "$4{,}0$"],
      explanation: "Belastningen er $N/(mg) = v^2/(gR) + 1 = 196/98{,}1 + 1 = 3{,}0$. Verdien $2{,}0$ er det du får hvis du glemmer å legge til tyngdens eget bidrag, altså bruker $v^2/(gR)$ alene.",
    },
    {
      question: "Hva betyr det at en passasjer føler seg vektløs i toppen av en loop?",
      options: ["At normalkraften fra setet er null", "At tyngden på passasjeren er null", "At resultantkraften på passasjeren er null", "At farten er null i toppunktet"],
      explanation: "Det du «kjenner» som vekt, er normalkraften fra underlaget, og den kan bli null ved minstefarten $\\sqrt{gR}$. Tyngden virker uendret hele veien — det er nettopp den som leverer sentripetalkraften i det øyeblikket, så resultantkraften er slett ikke null.",
    },
    {
      question: "Hvilket av uttrykkene har enhet $\\text{m/s}$?",
      options: ["$\\sqrt{gR}$", "$gR$", "$g/R$", "$\\sqrt{g/R}$"],
      explanation: "$\\sqrt{gR}$ gir $\\sqrt{\\text{m/s}^2 \\cdot \\text{m}} = \\text{m/s}$. Produktet $gR$ har enhet $\\text{m}^2/\\text{s}^2$ og er altså en fart i andre potens — en vanlig feil er å glemme rottegnet i minstefartsbetingelsen.",
    },
    {
      question: "En kloss glir fra hvile ned **utsiden** av en glatt kule. Hva bestemmer hvor den forlater flaten?",
      options: ["At normalkraften blir null, ved $\\cos\\varphi = 2/3$", "At farten når $\\sqrt{gR}$, ved $\\varphi = 90^\\circ$", "At tyngdekomponenten langs banen blir null", "At friksjonen ikke lenger holder igjen"],
      explanation: "Newtons 2. lov radielt gir $N = mg(3\\cos\\varphi - 2)$, og kontakten brytes når $N = 0$, altså ved $\\cos\\varphi = 2/3$. Kula er oppgitt som glatt, så friksjon er ikke med i regnestykket i det hele tatt.",
    },
    {
      question: "En sving krever sentripetalakselerasjonen $a_r$. Hvilket friksjonstall trengs minst på en flat veg?",
      options: ["$\\mu_s \\ge a_r/g$", "$\\mu_s \\ge a_r g$", "$\\mu_s \\ge g/a_r$", "$\\mu_s \\ge a_r$"],
      explanation: "Kravet $ma_r \\le \\mu_s mg$ gir $\\mu_s \\ge a_r/g$ etter at massen er forkortet. Formen $\\mu_s \\ge a_r$ er dimensjonsmessig umulig: friksjonstallet er dimensjonsløst, mens akselerasjonen har enhet $\\text{m/s}^2$.",
    },
  ],
  'fys1100-4-2': [
    {
      question: "Hvorfor doserer man en sving?",
      options: ["Fordi normalkraften da får en komponent inn mot svingens sentrum", "Fordi tyngdekraften på bilen blir mindre når vegbanen heller innover", "Fordi friksjonstallet øker med helningen", "Fordi farten da blir lavere gjennom svingen"],
      explanation: "Normalkraften står alltid vinkelrett på vegbanen, så en hellende bane gir den en vannrett komponent $N\\sin\\alpha$ innover, som avlaster friksjonen. Tyngden er uendret uansett hvordan vegen ligger — den avhenger bare av massen.",
    },
    {
      question: "Hva er den ideelle farten i en dosert sving med radius $R$ og doseringsvinkel $\\alpha$?",
      options: ["$\\sqrt{gR\\tan\\alpha}$", "$\\sqrt{gR\\sin\\alpha}$", "$gR\\tan\\alpha$", "$\\sqrt{gR/\\tan\\alpha}$"],
      explanation: "Loddrett likevekt og Newtons 2. lov vannrett gir $\\tan\\alpha = v^2/(gR)$, altså $v = \\sqrt{gR\\tan\\alpha}$. Uttrykket uten rottegn har enhet $\\text{m}^2/\\text{s}^2$ og kan derfor ikke være en fart.",
    },
    {
      question: "Hvor stor er normalkraften på en bil som kjører med akkurat den ideelle farten i en dosert sving?",
      options: ["$mg/\\cos\\alpha$", "$mg\\cos\\alpha$", "$mg$", "$mg\\sin\\alpha$"],
      explanation: "Loddrett likevekt gir $N\\cos\\alpha = mg$, altså $N = mg/\\cos\\alpha$, som er **større** enn tyngden. Formen $mg\\cos\\alpha$ er skråplanuttrykket, og det gjelder ikke her: på skråplanet er akselerasjonen null normalt på flaten, mens bilen i svingen akselererer.",
    },
    {
      question: "Hvilken vei peker den statiske friksjonen når en bil kjører **fortere** enn den ideelle farten i en dosert sving?",
      options: ["Ned langs banen", "Opp langs banen", "Rett innover, vannrett", "Bakover, mot kjøreretningen"],
      explanation: "Ved for høy fart er normalkraftens innoverkomponent for liten, og bilen er i ferd med å skli opp og ut. Friksjonen motsetter seg alltid den bevegelsen som er i ferd med å skje, og peker derfor ned langs banen. Retningen «opp langs banen» gjelder i det motsatte tilfellet, når farten er for lav.",
    },
    {
      question: "Hvilke akser bør du legge når du løser en dosert sving?",
      options: ["Vannrett og loddrett", "Langs og normalt på vegbanen", "Langs kjøreretningen og loddrett", "Radielt og tangentielt langs banen"],
      explanation: "Akselerasjonen peker vannrett inn mot svingens sentrum, så med vannrette og loddrette akser får du én likning med akselerasjon og én uten. Legger du aksene langs vegbanen, slik du gjør på et skråplan, får akselerasjonen komponenter i begge likningene.",
    },
    {
      question: "Når finnes det **ingen** minstefart i en dosert sving?",
      options: ["Når $\\mu_s \\ge \\tan\\alpha$", "Når $\\mu_s \\le \\tan\\alpha$", "Når $\\mu_s \\tan\\alpha \\ge 1$", "Når radien er stor nok"],
      explanation: "Da holder friksjonen bilen på den skrå vegbanen også i ro, og telleren $\\tan\\alpha - \\mu_s$ i uttrykket for $v_{\\min}$ blir negativ. Betingelsen $\\mu_s\\tan\\alpha \\ge 1$ handler derimot om den **øvre** grensen, ikke den nedre.",
    },
    {
      question: "En dosert sving har $R = 200\\ \\text{m}$ og $\\alpha = 15^\\circ$. Den ideelle farten er omtrent",
      options: ["$23\\ \\text{m/s}$", "$14\\ \\text{m/s}$", "$36\\ \\text{m/s}$", "$51\\ \\text{m/s}$"],
      explanation: "$v = \\sqrt{gR\\tan\\alpha} = \\sqrt{9{,}81 \\cdot 200 \\cdot 0{,}268} = \\sqrt{526} = 22{,}9\\ \\text{m/s}$. Verdien $14\\ \\text{m/s}$ er det du får med $\\sin\\alpha$ i stedet for $\\tan\\alpha$ og en ekstra regnefeil; skillet mellom de to trigonometriske funksjonene er lite ved små vinkler, men vokser raskt.",
    },
    {
      question: "Hva skjer med fartsvinduet $v_{\\min} \\le v \\le v_{\\max}$ i en dosert sving når friksjonstallet synker?",
      options: ["Det krymper mot den ideelle farten", "Det utvides i begge retninger", "Det forskyves oppover", "Det er uavhengig av friksjonstallet"],
      explanation: "Begge grensene inneholder $\\mu_s$, og ved $\\mu_s = 0$ faller de sammen med $\\sqrt{gR\\tan\\alpha}$ — da finnes bare én mulig fart. Det er derfor doserte svinger blir langt mer krevende på is enn på tørt dekke.",
    },
    {
      question: "Et legeme følger en spiralbane med radius $R$ og stigningsvinkel $\\theta$, med farten $v$ langs banen. Sentripetalakselerasjonen er",
      options: ["$(v\\cos\\theta)^2/R$", "$v^2/R$", "$(v\\sin\\theta)^2/R$", "$v^2\\cos\\theta/R$"],
      explanation: "Bare den vannrette fartskomponenten $v\\cos\\theta$ krummer banen; den loddrette er konstant og gir ingen akselerasjon. Bruker du hele farten, får du et svar som er $1/\\cos^2\\theta$ ganger for stort — ved $35^\\circ$ nesten $50\\ \\%$.",
    },
    {
      question: "En spiral stiger $H$ per omdreining og har radius $R$. Stigningsvinkelen $\\theta$ fra vannrett er gitt ved",
      options: ["$\\tan\\theta = H/(2\\pi R)$", "$\\tan\\theta = 2\\pi R/H$", "$\\sin\\theta = H/R$", "$\\cos\\theta = H/(2\\pi R)$"],
      explanation: "Én omdreining tilbakelegger $2\\pi R$ vannrett og $H$ loddrett, og de to er katetene i en rettvinklet trekant. Den omvendte brøken ville gitt en bratt vinkel for en slak spiral, altså stikk motsatt av det geometrien tilsier.",
    },
    {
      question: "Hvorfor forsvinner massen ut av uttrykkene for ideell fart, maksfart og minstefart i en dosert sving?",
      options: ["Fordi alle leddene i begge likningene er proporsjonale med massen", "Fordi normalkraften fra vegbanen er den samme uansett hvor tungt kjøretøyet er", "Fordi friksjonen ikke avhenger av massen", "Fordi tyngden er neglisjert i regnestykket"],
      explanation: "Både $mv^2/R$, $mg$ og $\\mu_s N$ vokser proporsjonalt med massen, så den forkortes når den ene likningen deles på den andre. Normalkraften er derimot slett ikke masseuavhengig — den er $mg/\\cos\\alpha$ ved ideell fart.",
    },
    {
      question: "En bil kjører med akkurat den ideelle farten i en dosert sving. Hvor stor er friksjonskraften?",
      options: ["Null", "$\\mu_s N$", "$mg\\sin\\alpha$", "$mv^2/R$"],
      explanation: "Ved ideell fart leverer normalkraftens vannrette komponent hele sentripetalkraften, så det er ingenting igjen for friksjonen å gjøre. Statisk friksjon er en ulikhet og leverer bare det som kreves; å sette den til $\\mu_s N$ gjelder kun i grensetilfellene.",
    },
    {
      question: "En bil kjører saktere enn den ideelle farten i en dosert sving. Hva er den i ferd med å gjøre?",
      options: ["Å skli ned og inn mot sentrum", "Å skli opp og ut av svingen", "Å velte utover", "Å bremse av seg selv"],
      explanation: "Under ideell fart er normalkraftens innoverkomponent større enn nødvendig, og overskuddet driver bilen innover og nedover langs banen. Friksjonen peker da opp langs banen for å motvirke det. Å skli opp og ut skjer i det motsatte tilfellet.",
    },
    {
      question: "Hvilket uttrykk gir maksfarten i en dosert sving med friksjonstall $\\mu_s$?",
      options: ["$\\sqrt{gR\\dfrac{\\tan\\alpha + \\mu_s}{1 - \\mu_s\\tan\\alpha}}$", "$\\sqrt{gR(\\tan\\alpha + \\mu_s)}$", "$\\sqrt{gR\\dfrac{\\tan\\alpha - \\mu_s}{1 + \\mu_s\\tan\\alpha}}$", "$\\sqrt{gR\\tan\\alpha} + \\sqrt{\\mu_s gR}$"],
      explanation: "Uttrykket følger av de to likningene med $f = \\mu_s N$ rettet ned langs banen, etter at $N$ og $m$ er forkortet bort. Formen med minus i telleren og pluss i nevneren er **minste**farten, altså tilfellet der friksjonen peker opp langs banen.",
    },
    {
      question: "Hva er den vanligste grunnen til at en kandidat mister toppoengene på en Daytona-lignende dosert sving-oppgave?",
      options: ["At friksjonsretningen ikke drøftes i klartekst", "At radien regnes om feil", "At massen ikke oppgis", "At kalkulatoren står i radianer"],
      explanation: "Gjennomgangskravet på hvert eksamenssett er at alle svar skal begrunnes, og friksjonsretningen er selve kjernen i denne oppgavetypen. Riktig tall uten setningen om hvilken vei friksjonen peker, gir sjelden full uttelling.",
    },
    {
      question: "Hva er forskjellen på $R$ og $\\rho$ i en spiralbane?",
      options: ["$R$ er den vannrette radien, mens $\\rho$ er banens virkelige krumningsradius", "De er alltid like store", "$R$ er krumningsradien, mens $\\rho$ er avstanden fra aksen", "$\\rho$ er radien sett ovenfra, mens $R$ måles langs banen"],
      explanation: "For en heliks er $\\rho = R/\\cos^2\\theta$, altså større enn $R$. Bruker du den vannrette projeksjonen, regner du med $R$ og farten $v\\cos\\theta$; bruker du banens fulle fart, må du bruke $\\rho$. De to veiene gir samme svar, men må ikke blandes.",
    },
    {
      question: "En sving er dosert med sidefall $6\\ \\%$. Doseringsvinkelen er omtrent",
      options: ["$3{,}4^\\circ$", "$6{,}0^\\circ$", "$0{,}060^\\circ$", "$34^\\circ$"],
      explanation: "Sidefall i prosent er $100\\tan\\alpha$, så $\\tan\\alpha = 0{,}060$ og $\\alpha = \\arctan 0{,}060 = 3{,}4^\\circ$. Å lese prosenttallet direkte som grader gir nesten dobbelt så stor vinkel, og feilen forplanter seg til hele regnestykket.",
    },
    {
      question: "Hvilken av situasjonene løses med **samme** likningspar som en dosert sving ved ideell fart?",
      options: ["En konisk pendel med kule i snor", "En kloss som glir ned et skråplan", "En bil som bremser på flat veg", "En vogn i toppen av en vertikal loop"],
      explanation: "I begge tilfellene er det én skrå kraft som både bærer legemet loddrett og svinger det vannrett, og begge gir $\\tan(\\text{vinkel}) = v^2/(gR)$. På skråplanet går akselerasjonen derimot langs flaten, ikke vannrett, og likningene får en helt annen struktur.",
    },
  ],
  'fys1100-5-1': [
    {
      question: "Hvor stort arbeid gjør en konstant kraft $F$ over en forflytning $d$ når vinkelen mellom dem er $\\phi$?",
      options: ["$Fd\\cos\\phi$", "$Fd\\sin\\phi$", "$Fd$", "$Fd\\tan\\phi$"],
      explanation: "Arbeidet er skalarproduktet $\\mathbf{F}\\cdot\\mathbf{d} = Fd\\cos\\phi$, og bare komponenten langs bevegelsen teller. Formen med sinus ville gitt maksimalt arbeid når kraften står vinkelrett på bevegelsen, altså stikk motsatt av det som skjer fysisk.",
    },
    {
      question: "Hvor stort arbeid gjør normalkraften på en kloss som glir langs et vannrett bord?",
      options: ["Null", "$\\mu_d mgs$", "$mgs$", "Det avhenger av farten"],
      explanation: "Normalkraften står vinkelrett på bevegelsen, og $\\cos 90^\\circ = 0$. Uttrykket $\\mu_d mgs$ er **friksjonens** arbeid — de to forveksles ofte fordi normalkraften inngår i friksjonsformelen.",
    },
    {
      question: "Hva sier arbeids–energi-teoremet?",
      options: ["Det totale arbeidet fra alle krefter er lik endringen i kinetisk energi", "Arbeidet fra tyngden alene er lik endringen i legemets potensielle energi", "Summen av kinetisk og potensiell energi er konstant", "Effekten er lik kraft ganger fart"],
      explanation: "Teoremet lyder $W_{\\text{tot}} = K_B - K_A$, og det gjelder **alltid** — også med friksjon. Påstanden om at summen $K + U$ er konstant, er energibevaring, som til forskjell krever at bare konservative krefter gjør arbeid.",
    },
    {
      question: "Når er mekanisk energi bevart?",
      options: ["Når de eneste kreftene som gjør arbeid, er konservative", "Alltid — bevaring av energi er en av fysikkens grunnleggende naturlover", "Når systemet er lukket", "Når det ikke virker ytre krefter"],
      explanation: "Betingelsen handler om hvilke krefter som gjør **arbeid**: friksjon og luftmotstand ødelegger bevaringen, mens krefter vinkelrett på bevegelsen er uproblematiske. Det er den **totale** energien som alltid er bevart, ikke den mekaniske delen alene.",
    },
    {
      question: "En bil dobler farten. Bremselengden på samme underlag blir",
      options: ["Fire ganger så lang", "Dobbelt så lang", "Uendret", "Halvparten så lang"],
      explanation: "Fra $\\tfrac12 mv^2 = \\mu_d mgs$ følger $s = v^2/(2\\mu_d g)$, altså proporsjonal med $v^2$. Å svare «dobbelt så lang» er å tenke lineært der sammenhengen er kvadratisk, og det er den vanligste feilslutningen i trafikkfysikk.",
    },
    {
      question: "Hvilken størrelse har enheten joule?",
      options: ["Arbeid", "Kraft", "Effekt", "Bevegelsesmengde"],
      explanation: "Joule er $\\text{N}\\cdot\\text{m}$, altså kraft ganger strekning — enheten for arbeid og energi. Effekt måles i watt ($\\text{J/s}$), og forvekslingen mellom de to er den hyppigste enhetsfeilen i temaet.",
    },
    {
      question: "Hva er den potensielle energien i en fjær som er trykt sammen $\\Delta x$ fra likevektslengden?",
      options: ["$\\tfrac12 k(\\Delta x)^2$", "$k(\\Delta x)^2$", "$\\tfrac12 k\\Delta x$", "$k\\Delta x$"],
      explanation: "Fjærenergien er arealet under kraft–forlengelse-grafen, altså $\\tfrac12$ ganger grunnlinje ganger høyde. Uttrykket $k\\Delta x$ er selve fjær**kraften** i newton, ikke en energi — enhetskontroll skiller dem umiddelbart.",
    },
    {
      question: "Hvorfor kan vi ikke definere en potensiell energi for friksjonskraften?",
      options: ["Fordi friksjonsarbeidet avhenger av veien, ikke bare av start- og sluttpunktet", "Fordi friksjonskraften alltid peker motsatt vei av bevegelsen, uansett rute", "Fordi friksjonen ikke er en ekte kraft", "Fordi friksjonen avhenger av massen"],
      explanation: "En potensiell energi er per definisjon en funksjon av posisjonen alene, og da måtte arbeidet være det samme uansett rute. Går du fram og tilbake til samme punkt, er friksjonsarbeidet negativt og ikke null, så noen slik funksjon finnes ikke.",
    },
    {
      question: "Hvordan henger kraft og potensiell energi sammen i én dimensjon?",
      options: ["$F = -dU/dx$", "$F = dU/dx$", "$F = U/x$", "$F = -U\\,dx$"],
      explanation: "Minustegnet uttrykker at kraften peker mot lavere potensiell energi. Setter du inn $U = mgy$, gir uttrykket $F = -mg$, altså tyngden rettet nedover — uten minustegnet ville kraften pekt oppover.",
    },
    {
      question: "En kloss på $2{,}0\\ \\text{kg}$ har farten $4{,}0\\ \\text{m/s}$. Den kinetiske energien er",
      options: ["$16\\ \\text{J}$", "$8{,}0\\ \\text{J}$", "$32\\ \\text{J}$", "$4{,}0\\ \\text{J}$"],
      explanation: "$K = \\tfrac12 mv^2 = \\tfrac12 \\cdot 2{,}0 \\cdot 16 = 16\\ \\text{J}$. Verdien $32\\ \\text{J}$ er $mv^2$ uten faktoren $\\tfrac12$, og $8{,}0\\ \\text{J}$ er $\\tfrac12 mv$, altså med farten i første potens.",
    },
    {
      question: "Hva er effekt?",
      options: ["Arbeid per tidsenhet", "Kraft per strekning", "Energi per strekning", "Kraft ganger tid"],
      explanation: "Effekt er $P = dW/dt$, og for en kraft langs bevegelsen blir det $P = Fv$. Kraft ganget med tid er derimot impuls, som måles i $\\text{N}\\cdot\\text{s}$ og hører til bevegelsesmengden.",
    },
    {
      question: "En heis med masse $500\\ \\text{kg}$ løftes med konstant fart $1{,}0\\ \\text{m/s}$. Motoreffekten er omtrent",
      options: ["$4{,}9\\ \\text{kW}$", "$500\\ \\text{W}$", "$9{,}8\\ \\text{kW}$", "$50\\ \\text{W}$"],
      explanation: "Konstant fart gir null resultantkraft, så trekkraften er $mg$ og $P = mgv = 500 \\cdot 9{,}81 \\cdot 1{,}0 = 4{,}9\\ \\text{kW}$. Verdien $500\\ \\text{W}$ er $mv$, som har enhet $\\text{kg}\\cdot\\text{m/s}$ og altså ikke er en effekt.",
    },
    {
      question: "En kloss glir nedover et skråplan med friksjon. Hvilken likning gjelder?",
      options: ["$K_A + U_A = K_B + U_B + \\mu_d N s$", "$K_A + U_A = K_B + U_B$", "$K_A + U_A + \\mu_d N s = K_B + U_B$", "$K_A = K_B + U_B$"],
      explanation: "Friksjonen tar mekanisk energi ut av systemet, så tapsleddet står på **slutt**siden av regnskapet. Likningen uten friksjonsledd er ren energibevaring, og den gjelder bare på en glatt bane.",
    },
    {
      question: "Hvilken strekning skal brukes i friksjonsleddet $\\mu_d N s$?",
      options: ["Den tilbakelagte veistrekningen", "Forflytningen fra start til slutt", "Høydeforskjellen", "Den vannrette komponenten av bevegelsen"],
      explanation: "Friksjonen gjør negativt arbeid hele veien, uansett retning, så bidragene legges sammen når legemet går fram og tilbake. Bruker du forflytningen, får du null friksjonstap på en tur–retur-bevegelse, noe som åpenbart er galt.",
    },
    {
      question: "En kloss slippes fra hvile på en friksjonsfri bane fra høyden $h$. Farten i bunnen er",
      options: ["$\\sqrt{2gh}$", "$\\sqrt{gh}$", "$2gh$", "$gh$"],
      explanation: "Energibevaring gir $mgh = \\tfrac12 mv^2$, altså $v = \\sqrt{2gh}$, uavhengig av både massen og banens form. Uttrykket $2gh$ uten rottegn har enhet $\\text{m}^2/\\text{s}^2$ og er farten i andre potens.",
    },
    {
      question: "Hvorfor er farten i bunnen av en friksjonsfri bane uavhengig av banens form?",
      options: ["Fordi bare høydeforskjellen inngår i den potensielle energien", "Fordi normalkraften er den samme overalt", "Fordi akselerasjonen er den samme i hvert eneste punkt langs hele banen", "Fordi banelengden alltid er den samme"],
      explanation: "Tyngden er konservativ, så arbeidet den gjør, avhenger bare av start- og sluttpunkt. Akselerasjonen er derimot slett ikke konstant langs en krum bane — den varierer med helningen i hvert punkt.",
    },
    {
      question: "En kloss på $3{,}0\\ \\text{kg}$ løftes $2{,}0\\ \\text{m}$ rett opp med konstant fart. Arbeidet mot tyngden er",
      options: ["$59\\ \\text{J}$", "$29\\ \\text{J}$", "$6{,}0\\ \\text{J}$", "$118\\ \\text{J}$"],
      explanation: "$W = mgh = 3{,}0 \\cdot 9{,}81 \\cdot 2{,}0 = 58{,}9\\ \\text{J}$. Verdien $6{,}0\\ \\text{J}$ er $mh$ uten tyngdeakselerasjonen, og en enhetssjekk avslører at $\\text{kg}\\cdot\\text{m}$ ikke er joule.",
    },
    {
      question: "Hvorfor forsvinner massen ut av uttrykket for bremselengden?",
      options: ["Fordi både den kinetiske energien og friksjonsarbeidet er proporsjonale med massen", "Fordi friksjonstallet mellom to bestemte flater er uavhengig av massen", "Fordi normalkraften er lik tyngden", "Fordi farten ikke avhenger av massen"],
      explanation: "Likningen $\\tfrac12 mv^2 = \\mu_d mgs$ har massen som faktor på begge sider, så den forkortes. At friksjonstallet er masseuavhengig, er riktig i seg selv, men det er ikke det som gjør at massen faller ut av **denne** likningen.",
    },
    {
      question: "Et legeme har den potensielle energien $U(x)$. Hvor ligger likevektspunktene?",
      options: ["Der $dU/dx = 0$", "Der $U = 0$", "Der $U$ er størst", "Der $d^2U/dx^2 = 0$"],
      explanation: "Kraften er $F = -dU/dx$, og likevekt betyr at kraften er null. Nullpunktet for $U$ selv er derimot vilkårlig valgt og har ingen fysisk betydning — bare differanser teller.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av hva som skjer med energien når friksjon bremser en kloss?",
      options: ["Mekanisk energi omdannes til termisk energi i flatene", "Energien blir ødelagt av friksjonen", "Energien forsvinner ut av systemet uten å bli noe annet", "Den potensielle energien øker tilsvarende"],
      explanation: "Energi kan ikke ødelegges — den totale energien er alltid bevart, og friksjonen flytter den fra mekanisk form til varme i kontaktflatene. Formuleringen «ødelagt» er vanlig i dagligtale, men regnes som en faglig feil i en besvarelse.",
    },
    {
      question: "Hvilken metode er raskest når en oppgave kobler fart og posisjon uten å nevne tid?",
      options: ["Energimetoden", "Newtons 2. lov med kinematikk", "Impulsteoremet", "Numerisk integrasjon"],
      explanation: "Energiregnskapet hopper rett fra fart til strekning, siden tiden faller ut i utledningen av arbeids–energi-teoremet. Newtons 2. lov gir samme svar, men krever at du går veien om akselerasjonen — den er til gjengjeld nødvendig når du trenger tiden eller en kraft.",
    },
    {
      question: "Sensor ber om at «kommer lengst opp med eller uten friksjon» skal begrunnes både med energi og med Newtons 2. lov. Hva er Newton-begrunnelsen?",
      options: ["At friksjonen øker retardasjonen, så strekningen blir kortere fra samme startfart", "At friksjonen tapper mekanisk energi ut av systemet som varme i flatene", "At normalkraften blir mindre med friksjon", "At massen faller ut av regnestykket"],
      explanation: "Newton-argumentet handler om krefter og akselerasjon: retardasjonen blir $g(\\sin\\theta + \\mu_d\\cos\\theta)$ i stedet for $g\\sin\\theta$, og $s = v_0^2/(2|a|)$ blir dermed mindre. At friksjonen tapper energi, er **energi**argumentet — sensor vil ha begge, hver for seg.",
    },
  ],
  'fys1100-5-2': [
    {
      question: "Hva er bevegelsesmengden til et legeme med masse $m$ og hastighet $\\mathbf{v}$?",
      options: ["$m\\mathbf{v}$", "$\\tfrac12 mv^2$", "$m\\mathbf{v}^2$", "$mv/2$"],
      explanation: "Bevegelsesmengden er $\\mathbf{p} = m\\mathbf{v}$, en vektor med enhet $\\text{kg}\\cdot\\text{m/s}$. Uttrykket $\\tfrac12 mv^2$ er den kinetiske energien, som er en skalar og går som farten i andre potens.",
    },
    {
      question: "Hva sier impulsteoremet?",
      options: ["Impulsen fra resultantkraften er lik endringen i bevegelsesmengde", "Impulsen fra resultantkraften er lik endringen i den kinetiske energien", "Bevegelsesmengden er alltid bevart", "Kraften er lik massen ganget med farten"],
      explanation: "Teoremet lyder $\\mathbf{J} = \\int\\sum\\mathbf{F}\\,dt = \\Delta\\mathbf{p}$, altså kraft integrert over **tid**. Kraft integrert over **strekning** gir derimot arbeid og dermed endring i kinetisk energi — det er arbeids–energi-teoremet.",
    },
    {
      question: "Hvilken enhet har impuls?",
      options: ["$\\text{N}\\cdot\\text{s}$", "$\\text{J}$", "$\\text{W}$", "$\\text{N/m}$"],
      explanation: "Impuls er kraft ganger tid, og $\\text{N}\\cdot\\text{s}$ er identisk med $\\text{kg}\\cdot\\text{m/s}$ — nettopp derfor kan impuls settes lik en endring i bevegelsesmengde. Joule er energi og hører til arbeidsbegrepet.",
    },
    {
      question: "Når er bevegelsesmengden til et system bevart?",
      options: ["Når summen av de ytre kreftene i den aktuelle retningen er null", "Når det ikke virker noen krefter i det hele tatt, verken indre eller ytre", "Når den kinetiske energien er bevart", "Når alle legemene har samme masse"],
      explanation: "Indre krefter opptrer parvis etter Newtons 3. lov og opphever hverandre, så bare ytre krefter kan endre summen. Betingelsen gjelder **retningsvis**: den vannrette bevegelsesmengden kan være bevart selv om den loddrette ikke er det.",
    },
    {
      question: "To legemer kolliderer og henger sammen etterpå. Hva er bevart?",
      options: ["Bare bevegelsesmengden", "Bare den kinetiske energien", "Både bevegelsesmengden og den kinetiske energien", "Verken bevegelsesmengden eller den kinetiske energien"],
      explanation: "Ingen ytre krefter i bevegelsesretningen gir impulsbevaring, mens et fullstendig uelastisk støt tar ut kinetisk energi til deformasjon og varme. Å påstå at begge er bevart, er fagets dyreste metodefeil og gir null poeng i en regneoppgave.",
    },
    {
      question: "Hvorfor er energibevaring i et uelastisk støt en metodefeil og ikke bare en regnefeil?",
      options: ["Fordi loven er brukt der forutsetningen ikke holder", "Fordi tallene blir litt for små", "Fordi enheten blir feil", "Fordi massen ikke forkortes"],
      explanation: "Sensor gir uttelling for en god løsningsidé, men her er selve ideen gal: mekanisk energi er ikke bevart når legemene henger sammen etterpå. Feilen forplanter seg dessuten til alle senere deloppgaver som bygger på svaret.",
    },
    {
      question: "En kule på $50\\ \\text{g}$ med farten $200\\ \\text{m/s}$ skytes inn i en kloss på $1{,}95\\ \\text{kg}$ og blir sittende. Felles fart etterpå er",
      options: ["$5{,}0\\ \\text{m/s}$", "$32\\ \\text{m/s}$", "$10\\ \\text{m/s}$", "$2{,}5\\ \\text{m/s}$"],
      explanation: "Impulsbevaring gir $v = 0{,}050 \\cdot 200/2{,}00 = 5{,}0\\ \\text{m/s}$. Verdien $32\\ \\text{m/s}$ er det du får med energibevaring, altså nøyaktig metodefellen — og den er over seks ganger for stor.",
    },
    {
      question: "Hvor stor andel av den kinetiske energien er igjen etter et fullstendig uelastisk støt der $m_1$ treffer $m_2$ i ro?",
      options: ["$m_1/(m_1+m_2)$", "$m_2/(m_1+m_2)$", "$m_1/m_2$", "$\\tfrac12$ uansett masser"],
      explanation: "Kombinerer du $v = m_1u_1/(m_1+m_2)$ med $K = \\tfrac12 mv^2$, får du forholdet $m_1/(m_1+m_2)$. Uttrykket med $m_2$ i telleren gjelder i stedet for hvor stor andel som **går tapt**.",
    },
    {
      question: "Hvorfor kan tyngden neglisjeres under selve støtet, men ikke i fasen etterpå?",
      options: ["Fordi impulsen er kraft ganger tid, og støtet varer bare noen millisekunder", "Fordi tyngden regnes som en indre kraft i systemet så lenge støtet varer", "Fordi tyngden alltid er liten sammenlignet med normalkraften", "Fordi bevegelsen er vannrett under støtet"],
      explanation: "Støtkreftene er tusenvis av newton over noen millisekunder, mens tyngdens impuls over samme tid er forsvinnende liten. I fasen etterpå virker tyngden i sekunder, og da er impulsen dens fullt merkbar — det er derfor systemet stopper på toppen av svingen.",
    },
    {
      question: "En sammentrykt fjær skyter to klosser fra hverandre på et friksjonsfritt bord. Hvilken kloss får mest kinetisk energi?",
      options: ["Den letteste", "Den tyngste", "De får like mye", "Det avhenger av hvor mye fjæra var trykt sammen"],
      explanation: "De to får like store bevegelsesmengder, og siden $K = p^2/(2m)$, får den letteste mest energi — andelen er $m_{\\text{tung}}/(m_1+m_2)$. Det er nettopp derfor rekylen fra et gevær er til å leve med, mens kula er dødelig.",
    },
    {
      question: "En ball treffer en vegg med farten $v$ og spretter rett tilbake med samme fart. Hvor stor er endringen i bevegelsesmengde?",
      options: ["$2mv$", "$mv$", "Null", "$\\tfrac12 mv$"],
      explanation: "Bevegelsesmengden snur fortegn, så endringen er $mv - (-mv) = 2mv$. Å svare $mv$ er å regne som om ballen ble liggende inntil veggen — et sprett krever dobbelt så stor impuls som en full stopp.",
    },
    {
      question: "Hva kjennetegner et elastisk støt?",
      options: ["Både bevegelsesmengden og den kinetiske energien er bevart", "Legemene henger sammen etterpå", "Bare den kinetiske energien er bevart", "Legemene bytter hastigheter med hverandre, uansett hvilke masser de har"],
      explanation: "Elastisk betyr per definisjon at ingen mekanisk energi går tapt, i tillegg til den impulsbevaringen som alltid gjelder. At legemene bytter hastigheter, skjer bare i spesialtilfellet der massene er like.",
    },
    {
      question: "En kule treffer en like tung kule i ro, elastisk og sentralt. Hva skjer?",
      options: ["Den første stopper, den andre overtar farten", "Begge går videre med halv fart", "Den første spretter tilbake med samme fart", "Begge stopper"],
      explanation: "Med $m_1 = m_2$ gir uttrykkene $v_1 = 0$ og $v_2 = u_1$ — biljardtilfellet. At begge går med halv fart, ville bevart bevegelsesmengden, men bare halvparten av energien, og bryter derfor med at støtet er elastisk.",
    },
    {
      question: "Hvordan beveger massesenteret til et system seg når summen av de ytre kreftene er null?",
      options: ["Med konstant hastighet, uansett hva som skjer inne i systemet", "Det beveger seg mot det tyngste legemet i systemet, uansett startfart", "Det står alltid stille", "Det følger det letteste legemet"],
      explanation: "Massesenteret oppfyller $M\\mathbf{a}_{cm} = \\sum\\mathbf{F}_{\\text{ytre}}$, så null ytre kraft gir null akselerasjon. At det står stille, gjelder bare hvis det sto stille fra før — en fjærutskyting fra ro er et slikt tilfelle.",
    },
    {
      question: "Hvorfor reduserer en kollisjonspute kraften på en passasjer?",
      options: ["Den forlenger tiden endringen i bevegelsesmengde skjer over", "Den reduserer endringen i passasjerens bevegelsesmengde under støtet", "Den gjør støtet elastisk", "Den reduserer passasjerens masse"],
      explanation: "Endringen $\\Delta p = m\\Delta v$ er gitt av farten som skal bort og kan ikke endres. Puta virker på $\\Delta t$ i $\\bar F = \\Delta p/\\Delta t$: ti ganger lengre stopptid gir en tidel så stor kraft.",
    },
    {
      question: "Hva er impulsen fra en kraft som varierer i tid?",
      options: ["Arealet under kraft–tid-grafen", "Toppverdien av kraften", "Kraften ganget med strekningen", "Middelkraften ganget med strekningen"],
      explanation: "Impulsen er $\\int F\\,dt$, altså arealet under grafen, og det er den som bestemmer fartsendringen. Toppverdien sier ingenting alene: en kort, hard topp kan gi mindre impuls enn en lang, myk kurve.",
    },
    {
      question: "Hvilken formulering begrunner impulsbevaring riktig i en besvarelse?",
      options: ["Ingen ytre krefter virker i vannrett retning under støtet", "Systemet er lukket, så alt er bevart", "Støtet varer så kort at ingen av størrelsene rekker å endre seg merkbart", "Massene er konstante gjennom støtet"],
      explanation: "Begrunnelsen må peke på **ytre** krefter i en **bestemt retning** — det er nøyaktig betingelsen loven hviler på. Formuleringen om at «alt er bevart» er for løs: den kinetiske energien er som regel ikke bevart i det hele tatt.",
    },
    {
      question: "En astronaut i ro kaster en verktøykasse fra seg ute i rommet. Hva skjer?",
      options: ["Astronauten driver motsatt vei, med mindre fart enn kassa", "Astronauten blir stående i ro", "Astronauten driver samme vei som kassa", "Astronauten driver motsatt vei, med samme fart som kassa"],
      explanation: "Samlet bevegelsesmengde var null og må forbli null, så astronauten får like stor bevegelsesmengde motsatt vei. Siden astronauten er tyngst, blir farten tilsvarende mindre — like fart ville krevd like masser.",
    },
    {
      question: "Hva er massesenteret til to legemer på en linje?",
      options: ["$(m_1x_1 + m_2x_2)/(m_1+m_2)$", "$(x_1+x_2)/2$", "$(m_1x_1 + m_2x_2)/(x_1+x_2)$", "$m_1x_1 + m_2x_2$"],
      explanation: "Massesenteret er et veid gjennomsnitt av posisjonene med massene som vekter, og det ligger derfor nærmest det tyngste legemet. Det rene gjennomsnittet $(x_1+x_2)/2$ gjelder bare når massene er like.",
    },
    {
      question: "To biler kolliderer i et kryss og henger sammen. Hvordan behandler du bevegelsesmengden?",
      options: ["Komponentvis, i to vinkelrette retninger hver for seg", "Som en sum av tallverdiene", "Ved å legge sammen de kinetiske energiene", "Ved å bruke bare den største av de to bevegelsesmengdene"],
      explanation: "Bevegelsesmengde er en vektor, og bevaringsloven gjelder i hver retning separat. Legger du sammen tallverdiene, får du et for stort resultat, siden vektorene ikke peker samme vei.",
    },
    {
      question: "Hva må en oppgave gi deg i tillegg, dersom et støt er **delvis** uelastisk?",
      options: ["En opplysning til, for eksempel energitapet eller den ene farten etterpå", "Ingenting mer — de to bevaringslovene er nok til å bestemme begge fartene", "Bare massene", "Kontakttiden"],
      explanation: "Delvis uelastiske støt har to ukjente farter, men bare **én** gyldig likning (impulsbevaring), siden energien ikke er bevart. Å telle ukjente mot likninger er en rask diagnose på om du har oversett en opplysning i teksten.",
    },
    {
      question: "Hva koster $-2$ poeng i et svar på en støtoppgave?",
      options: ["Manglende retning på bevegelsesmengden", "Ett gjeldende siffer for mye", "Å bruke $u$ og $v$ om hverandre", "Å regne i gram i stedet for kilogram"],
      explanation: "Bevegelsesmengde er en vektorstørrelse, og et svar uten retning er ufullstendig. Avrundingsvalg trekkes normalt ikke, så lenge antall gjeldende siffer er rimelig.",
    },
  ],
  'fys1100-5-3': [
    {
      question: "Hva er første steg i løsningsoppskriften for en bevaringsoppgave?",
      options: ["Å dele prosessen i faser med tydelige start- og sluttilstander", "Å skrive opp alle formlene du kan komme på for energi og bevegelsesmengde", "Å regne ut den kinetiske energien før", "Å velge en positiv retning"],
      explanation: "Fase-inndelingen avgjør hvilke lover som er gyldige hvor, og feil inndeling er den vanligste grunnen til at en ellers riktig regnet oppgave ryker. Å skrive opp formler uten å bruke dem gir ingen uttelling i det hele tatt.",
    },
    {
      question: "Hvilket spørsmål avgjør lovvalget gjennom et støt?",
      options: ["Henger legemene sammen etterpå?", "Hvor lenge varer støtet?", "Hvilket legeme er tyngst?", "Er underlaget friksjonsfritt?"],
      explanation: "Er svaret ja, er støtet fullstendig uelastisk: bevegelsesmengden er bevart, mekanisk energi ikke. Støtvarigheten er nyttig for å regne ut middelkraften, men sier ingenting om hvilken bevaringslov som gjelder.",
    },
    {
      question: "I en typisk tre-fase-oppgave (fall, støt, oppsving) — hvilken lov gjelder i midtfasen?",
      options: ["Bevegelsesmengden er bevart, ikke energien", "Energien er bevart, ikke bevegelsesmengden", "Begge er bevart", "Ingen av dem er bevart"],
      explanation: "Under støtet virker ingen vesentlige ytre krefter i bevegelsesretningen, mens kontakten omdanner mekanisk energi til deformasjon og varme. I første og siste fase er det motsatt: der er energien bevart, mens tyngden endrer bevegelsesmengden.",
    },
    {
      question: "Hvor stor andel av kulas kinetiske energi er igjen når en kule på $25\\ \\text{g}$ blir sittende i en kloss på $975\\ \\text{g}$?",
      options: ["$2{,}5\\ \\%$", "$25\\ \\%$", "$97{,}5\\ \\%$", "$50\\ \\%$"],
      explanation: "Andelen er $m/(m+M) = 0{,}025/1{,}000 = 0{,}025$. Verdien $97{,}5\\ \\%$ er andelen som **går tapt**, altså komplementet — les alltid nøye om oppgaven spør etter det som er igjen eller det som forsvant.",
    },
    {
      question: "Hva må stå i besvarelsen hver gang du bruker en bevaringslov?",
      options: ["En setning om hvorfor loven gjelder i akkurat denne fasen", "Formelen for loven skrevet opp i sin mest generelle form, med alle ledd", "En henvisning til formelarket", "En figur av situasjonen"],
      explanation: "Å bruke en bevaringslov uten begrunnelse koster $-1$ poeng, og begrunnelsen er den billigste poengsikringen i faget. Å skrive opp relevante formler uten å bruke dem, gir derimot null.",
    },
    {
      question: "En kloss glir med farten $v$ og stopper etter strekningen $s$ på et vannrett bord med friksjonstall $\\mu_d$. Hva er $v$?",
      options: ["$\\sqrt{2\\mu_d g s}$", "$\\mu_d g s$", "$\\sqrt{\\mu_d g s}$", "$2\\mu_d g s$"],
      explanation: "All kinetisk energi går til friksjonsarbeid: $\\tfrac12 mv^2 = \\mu_d mgs$, og massen forkortes. Uttrykket uten faktoren 2 under rottegnet er en klassisk slurvefeil og gir et svar som er $\\sqrt{2}$ ganger for lite.",
    },
    {
      question: "Hvorfor lønner det seg å regne symbolsk så lenge som mulig i en bevaringsoppgave?",
      options: ["Fordi grensetilfeller bare kan sjekkes på et symbolsk uttrykk", "Fordi innsatte tall alltid gir avrundingsfeil som forplanter seg videre", "Fordi sensor krever det", "Fordi kalkulatoren ikke er tillatt"],
      explanation: "Symbolske uttrykk gjør det mulig å teste $M \\to 0$ eller $\\mu \\to 0$, og de gjør forkortinger synlige — at massen faller ut, er ofte selve poenget. Kalkulator er dessuten et tillatt hjelpemiddel på eksamen.",
    },
    {
      question: "En kule med masse $m$ og fart $v_0$ blir sittende i en kloss $M$ som svinger opp i en snor. Hvilken kjede er riktig?",
      options: ["Bevegelsesmengde gjennom støtet, deretter energi i oppsvingen", "Energi gjennom støtet, deretter bevegelsesmengde i oppsvingen", "Energi i begge fasene", "Bevegelsesmengde i begge fasene"],
      explanation: "Under støtet virker ingen ytre krefter i vannrett retning, men energi går tapt til deformasjon; i oppsvingen gjør bare tyngden arbeid. Å bruke energi gjennom støtet er fagets viktigste metodefelle og gir null poeng.",
    },
    {
      question: "Hva betyr det om du får et negativt kvadrat for en fart i en loop-oppgave?",
      options: ["At legemet aldri når det punktet du regnet på", "At du må bytte fortegn på svaret", "At farten er imaginær og oppgaven er feil", "At du har brukt for få gjeldende siffer"],
      explanation: "Et umulig mellomresultat forteller deg at en forutsetning brast underveis — her at vogna mistet kontakten før toppen. Sensor gir uttelling for å tolke det fysisk, ikke for å bytte fortegn og gå videre.",
    },
    {
      question: "En besvarelse skriver «ingen ytre krefter virker, så både driv og energi er bevart gjennom hele forløpet». Hva er den mest alvorlige feilen?",
      options: ["At energibevaring brukes gjennom et uelastisk støt", "At ordet «driv» brukes i stedet for bevegelsesmengde", "At systemgrensen ikke er tegnet", "At tyngden ikke er nevnt"],
      explanation: "Energibevaring gjennom et uelastisk støt er en metodefeil som gir null poeng, og den forplanter seg til alle senere deloppgaver. «Driv» er et fullt akseptabelt norsk ord for bevegelsesmengde og brukes også i eksamenssettene.",
    },
    {
      question: "Hvor stor del av poengene på en typisk sjanger D-deloppgave henger på begrunnelse og oppsett, før selve regningen?",
      options: ["Over halvparten", "Omtrent en femdel", "Under en tidel", "Ingen — bare svaret teller"],
      explanation: "Fordelingen er typisk 1–2 poeng for lovvalg med begrunnelse og 1 poeng for riktig oppsett, av inntil 5. En kandidat som fører fasene og begrunnelsene ryddig uten å rekke å regne ferdig, får derfor mer enn en som regner riktig uten å begrunne.",
    },
    {
      question: "En fjær skyter to klosser fra hverandre fra ro. Hva er systemets samlede bevegelsesmengde etterpå?",
      options: ["Null", "Lik fjærenergien delt på farten", "Lik summen av de to fartene", "Lik den letteste klossens bevegelsesmengde"],
      explanation: "Den var null før, og med ingen ytre krefter i bevegelsesretningen må den forbli null — de to bevegelsesmengdene er like store og motsatt rettet. Den kinetiske energien **øker** derimot, siden lagret fjærenergi frigjøres.",
    },
  ],
  'fys1100-6-1': [
    {
      question: "Hva er momentarmen til en kraft om en gitt akse?",
      options: ["Den korteste avstanden fra aksen til kraftens virkelinje", "Avstanden fra aksen ut til kraftens angrepspunkt langs armen", "Avstanden fra massesenteret til kraftens angrepspunkt", "Lengden av selve legemet målt fra aksen"],
      explanation: "Momentarmen er den vinkelrette avstanden fra aksen ned på virkelinja, altså $r\\sin\\varphi$. Avstanden ut til angrepspunktet er $r$ selv, og den er bare lik momentarmen når kraften står vinkelrett på armen — ellers er den for stor.",
    },
    {
      question: "En kraft peker rett inn mot rotasjonsaksen. Hvor stort er kraftmomentet om den aksen?",
      options: ["Null, uansett hvor stor kraften er", "Lik kraften ganger avstanden til aksen", "Halvparten av kraften ganger avstanden", "Like stort som for en kraft på tvers"],
      explanation: "Aksen ligger da på kraftens virkelinje, så momentarmen er null og $\\tau = F\\cdot 0 = 0$. Svaret «kraften ganger avstanden» ville krevd at kraften sto vinkelrett på armen; her er $\\sin\\varphi = 0$.",
    },
    {
      question: "Hvilken enhet har kraftmoment?",
      options: ["$\\text{N}\\cdot\\text{m}$", "$\\text{N}/\\text{m}$", "$\\text{kg}\\cdot\\text{m}^2$", "$\\text{N}\\cdot\\text{m}^2$"],
      explanation: "Kraftmoment er kraft ganger momentarm, altså newton ganger meter. $\\text{kg}\\cdot\\text{m}^2$ er enheten for treghetsmoment, ikke for moment — de to blandes lett fordi begge har «moment» i navnet.",
    },
    {
      question: "En fastnøkkel er $0{,}30\\,\\text{m}$ lang, og du trekker med $200\\,\\text{N}$ vinkelrett på nøkkelen. Hvor stort er kraftmomentet om mutteren?",
      options: ["$60\\,\\text{N}\\cdot\\text{m}$", "$30\\,\\text{N}\\cdot\\text{m}$", "$667\\,\\text{N}\\cdot\\text{m}$", "$20\\,\\text{N}\\cdot\\text{m}$"],
      explanation: "Vinkelrett kraft gir $\\tau = rF = 0{,}30 \\cdot 200 = 60\\,\\text{N}\\cdot\\text{m}$. Verdien $667\\,\\text{N}\\cdot\\text{m}$ kommer av å dele kraften på lengden i stedet for å gange, og $30\\,\\text{N}\\cdot\\text{m}$ av å bruke halve nøkkellengden.",
    },
    {
      question: "Hvilken enhet har treghetsmoment?",
      options: ["$\\text{kg}\\cdot\\text{m}^2$", "$\\text{kg}\\cdot\\text{m}$", "$\\text{N}\\cdot\\text{m}$", "$\\text{kg}/\\text{m}^2$"],
      explanation: "Treghetsmomentet er $\\sum m_i\\rho_i^2$, altså masse ganger avstand i annen. $\\text{N}\\cdot\\text{m}$ er enheten for kraftmoment; forveksling av de to enhetene er en klassisk kilde til feil i en benevningskontroll.",
    },
    {
      question: "Fire legemer har samme masse og samme ytre radius og roterer om en akse gjennom massesenteret. Hvilket har størst treghetsmoment?",
      options: ["Den tynne ringa", "Den massive sylinderen", "Den massive kula", "Kuleskallet"],
      explanation: "Bidraget til $I$ går som avstanden i annen, og i en tynn ring sitter all massen ytterst i avstand $R$, som gir $I = MR^2$. Kuleskallet har også all massen ute, men fordelt over en kuleflate der store deler ligger nærmere aksen, så det gir bare $\\tfrac23 MR^2$.",
    },
    {
      question: "Fire legemer har samme masse og samme ytre radius og roterer om en akse gjennom massesenteret. Hvilket har minst treghetsmoment?",
      options: ["Den massive kula", "Den massive sylinderen", "Den hule sylinderen", "Den tynne ringa"],
      explanation: "Kula har $\\tfrac25 MR^2 = 0{,}400\\,MR^2$, mot sylinderens $\\tfrac12 MR^2 = 0{,}500\\,MR^2$. I en kule ligger en større del av massen nær aksen enn i en sylinder, fordi kula smalner av mot polene.",
    },
    {
      question: "En tynn ring og en massiv kule har samme masse og samme radius. Hvor mange ganger større er ringens treghetsmoment?",
      options: ["$2{,}5$ ganger", "$2{,}0$ ganger", "$1{,}5$ ganger", "$5{,}0$ ganger"],
      explanation: "Forholdet er $MR^2$ delt på $\\tfrac25 MR^2$, altså $5/2 = 2{,}5$, og det er uavhengig av både masse og radius. Faktoren $2{,}0$ er forholdet mellom ring og massiv sylinder, ikke mellom ring og kule.",
    },
    {
      question: "En homogen stav har $I_{cm} = \\tfrac{1}{12}M\\ell^2$. Hva er treghetsmomentet om en parallell akse gjennom den ene enden?",
      options: ["$\\tfrac13 M\\ell^2$", "$\\tfrac{1}{12}M\\ell^2$", "$\\tfrac14 M\\ell^2$", "$\\tfrac{1}{6}M\\ell^2$"],
      explanation: "Parallellakseteoremet gir $\\tfrac{1}{12}M\\ell^2 + M(\\ell/2)^2 = \\tfrac{1}{12}M\\ell^2 + \\tfrac14 M\\ell^2 = \\tfrac13 M\\ell^2$. Svaret $\\tfrac14 M\\ell^2$ er bare tilleggsleddet $Md^2$, uten det opprinnelige treghetsmomentet.",
    },
    {
      question: "Kan et legemes treghetsmoment om en akse utenfor massesenteret være mindre enn om den parallelle aksen gjennom massesenteret?",
      options: ["Nei — tilleggsleddet $Md^2$ er aldri negativt", "Ja, dersom legemet er hult og massen sitter ytterst", "Ja, dersom aksen ligger nær randa", "Ja, dersom massen er ujevnt fordelt"],
      explanation: "Parallellakseteoremet $I = I_{cm} + Md^2$ legger til et ledd som er null eller positivt, så $I$ er alltid minst om massesenteraksen. Hulhet og ujevn massefordeling endrer $I_{cm}$ selv, men de kan ikke gjøre tilleggsleddet negativt.",
    },
    {
      question: "To hjul har samme masse og radius, men det ene er en massiv skive og det andre har all massen i felgen. Begge får det samme kraftmomentet. Hvilket får størst vinkelakselerasjon?",
      options: ["Den massive skiva, fordi den har minst treghetsmoment", "Felgen, fordi massen der sitter lengst mulig ute fra aksen", "Begge får nøyaktig samme vinkelakselerasjon", "Felgen, fordi den har størst treghetsmoment"],
      explanation: "Fra $\\alpha = \\tau/I$ gir minst $I$ størst $\\alpha$, og skiva har $\\tfrac12 MR^2$ mot felgens $MR^2$. At massen sitter lengst ute i felgen er nettopp grunnen til at den er tregest, ikke til at den skulle akselerere raskest.",
    },
    {
      question: "En homogen stav er hengslet i den ene enden og slippes fra vannrett stilling. Hva er vinkelakselerasjonen i det den slippes?",
      options: ["$3g/(2\\ell)$", "$g/\\ell$", "$2g/(3\\ell)$", "$6g/\\ell$"],
      explanation: "Momentet er $Mg\\ell/2$ og treghetsmomentet om hengselen er $\\tfrac13 M\\ell^2$, så $\\alpha = (Mg\\ell/2)/(\\tfrac13 M\\ell^2) = 3g/(2\\ell)$. Verdien $6g/\\ell$ kommer av å bruke $I_{cm} = \\tfrac{1}{12}M\\ell^2$ sammen med momentet om hengselen, altså to ulike akser i samme likning.",
    },
    {
      question: "Hvor stor er akselerasjonen til den frie enden av en hengslet stav i det den slippes fra vannrett stilling?",
      options: ["$1{,}5g$, altså større enn fritt fall", "$g$, akkurat som fritt fall", "$0{,}5g$, altså mindre enn fritt fall", "$3g$, altså tre ganger fritt fall"],
      explanation: "Tangentialakselerasjonen er $a = \\alpha\\ell = 3g/2$, fordi $\\alpha = 3g/(2\\ell)$. At enden faller raskere enn $g$ er riktig og kan vises med en mynt lagt ytterst på en linjal: linjalen forsvinner ned under mynten.",
    },
    {
      question: "Hvorfor bidrar ikke hengselkraften til kraftmomentet om hengselaksen?",
      options: ["Fordi den angriper i aksen og dermed har momentarm null", "Fordi den alltid er like stor som tyngden og motsatt rettet", "Fordi den peker rett oppover", "Fordi den oppheves av tyngden"],
      explanation: "En kraft som angriper i selve aksen har virkelinje gjennom aksen, altså momentarm null, og gir null moment uansett størrelse og retning. Hengselkraften er verken alltid loddrett eller like stor som tyngden — den justerer seg etter bevegelsen.",
    },
    {
      question: "Hvor stort moment gir tyngden om en akse gjennom legemets eget massesenter?",
      options: ["Null, fordi tyngden angriper i massesenteret", "$Mg$ ganger halve legemets lengde", "$Mg$ ganger legemets lengde", "Det avhenger av vinkelen legemet står i"],
      explanation: "Tyngden kan behandles som om den angriper i massesenteret, så momentarmen om en akse gjennom det punktet er null. Å la tyngden bidra her er felle #15 og koster typisk 2 poeng; momentarmen $\\ell/2$ hører til aksen i enden, ikke til massesenteraksen.",
    },
    {
      question: "En skive roterer med vinkelakselerasjonen $\\alpha$. Hvilken sammenheng gjelder mellom $\\alpha$ og tangentialakselerasjonen $a_t$ til et punkt i avstand $\\rho$ fra aksen?",
      options: ["$a_t = \\alpha\\rho$", "$a_t = \\alpha$", "$a_t = \\alpha/\\rho$", "$a_t = \\alpha\\rho^2$"],
      explanation: "Fra $s = \\rho\\theta$ følger $v = \\rho\\omega$ og $a_t = \\rho\\alpha$ ved derivasjon. Å sette $a_t = \\alpha$ gir feil enhet: $\\text{rad/s}^2$ er ikke $\\text{m/s}^2$, og en rask benevningskontroll fanger feilen.",
    },
    {
      question: "En massiv skive og en tynn ring har samme masse og radius og snurrer med samme vinkelfart. Hva gjelder for rotasjonsenergien?",
      options: ["Ringa har dobbelt så stor rotasjonsenergi", "Skiva har dobbelt så stor rotasjonsenergi", "De har nøyaktig samme rotasjonsenergi", "Ringa har halvparten så stor rotasjonsenergi"],
      explanation: "Med $K_{\\text{rot}} = \\tfrac12 I\\omega^2$ og felles $\\omega$ er forholdet mellom energiene lik forholdet mellom treghetsmomentene, altså $MR^2$ mot $\\tfrac12 MR^2$. Samme masse og samme vinkelfart er ikke nok til lik energi — massefordelingen avgjør.",
    },
    {
      question: "Hvorfor må vinkler måles i radianer i rotasjonsformlene?",
      options: ["Fordi $s = \\rho\\theta$ og $v = \\rho\\omega$ bare gjelder da", "Fordi radianer alltid gir penere tall", "Fordi grader ikke kan brukes i fysiske utregninger", "Fordi radianen har enheten meter"],
      explanation: "Radianen er definert slik at buelengden er $s = \\rho\\theta$, og alle koblingene mellom rotasjon og banebevegelse følger av den. Radianen er dimensjonsløs — den er et forhold mellom to lengder — og har altså ikke enheten meter.",
    },
    {
      question: "Et barn på $290\\,\\text{N}$ sitter $1{,}80\\,\\text{m}$ fra aksen på en vippehuske. Hvor langt fra aksen må et barn på $360\\,\\text{N}$ sitte for at huska skal balansere?",
      options: ["$1{,}45\\,\\text{m}$", "$2{,}23\\,\\text{m}$", "$1{,}80\\,\\text{m}$", "$0{,}81\\,\\text{m}$"],
      explanation: "Momentlikevekt gir $360d = 290 \\cdot 1{,}80$, altså $d = 1{,}45\\,\\text{m}$. Verdien $2{,}23\\,\\text{m}$ kommer av å snu brøken; det tyngste barnet må sitte nærmere aksen, ikke lenger unna.",
    },
    {
      question: "Hvilken av disse påstandene om et stivt legeme i rotasjon er umulig?",
      options: ["To punkter på legemet har ulik vinkelfart", "To punkter på legemet har ulik banefart", "Vinkelfarten er null mens vinkelakselerasjonen ikke er det", "Vinkelakselerasjonen peker motsatt vei av vinkelfarten"],
      explanation: "I et stivt legeme har alle punkter samme $\\omega$ og samme $\\alpha$ — det er nettopp det stivheten betyr. Banefarten $v = \\omega\\rho$ varierer derimot med avstanden fra aksen, og et legeme som bremses ned har $\\alpha$ motsatt $\\omega$.",
    },
    {
      question: "Hvilken størrelse spiller samme rolle i rotasjon som massen gjør i rettlinjet bevegelse?",
      options: ["Treghetsmomentet", "Kraftmomentet", "Vinkelfarten", "Momentarmen"],
      explanation: "I $\\tau = I\\alpha$ står $I$ nøyaktig der $m$ står i $\\sum F = ma$, og i $K_{\\text{rot}} = \\tfrac12 I\\omega^2$ der $m$ står i $K = \\tfrac12 mv^2$. Kraftmomentet er motstykket til kraften, ikke til massen.",
    },
    {
      question: "En hengslet stav slippes fra vannrett stilling. Hvorfor kan du ikke bruke $\\omega = \\alpha t$ til å finne vinkelfarten i loddrett stilling?",
      options: ["Fordi momentarmen krymper, så $\\alpha$ ikke er konstant", "Fordi likningen bare gjelder for legemer uten treghetsmoment", "Fordi vinkelfarten alltid må måles i grader per sekund", "Fordi tyngden ikke gjør arbeid på staven"],
      explanation: "Momentet er $Mg(\\ell/2)\\cos\\theta$, som synker mot null når staven nærmer seg loddrett, så $\\alpha$ avtar underveis og bevegelseslikningene for konstant $\\alpha$ gjelder ikke. Energibevaring er derimot gyldig, og gir $\\omega = \\sqrt{3g/\\ell}$ — tyngden gjør nettopp arbeid på staven under fallet.",
    },
  ],
  'fys1100-6-2': [
    {
      question: "Hva sier rullebetingelsen for et legeme som ruller uten å gli?",
      options: ["$v = \\omega R$, der $v$ er massesenterets fart", "$v = \\omega R^2$, der $R$ er rulleradien", "$v = \\omega/R$, altså vinkelfart delt på radius", "$v = 2\\omega R$, siden toppunktet går dobbelt så fort"],
      explanation: "Betingelsen følger av $s = R\\theta$ ved derivasjon: ruller legemet uten å skli, er tilbakelagt strekning lik utrullet buelengde. Faktoren 2 hører til farten i **toppunktet**, ikke til massesenteret.",
    },
    {
      question: "Hvor fort beveger kontaktpunktet seg ved ren rulling, sett fra underlaget?",
      options: ["Det står momentant stille", "Like fort som massesenteret", "Dobbelt så fort som massesenteret", "Halvparten så fort som massesenteret"],
      explanation: "Massesenterets fart framover og rotasjonens bidrag bakover er nøyaktig like store i kontaktpunktet, så summen er null. At punktet står stille er nettopp grunnen til at et dekk ikke slites av å rulle, men slites raskt når det låser seg og skrenser.",
    },
    {
      question: "Hvor fort går det øverste punktet på et rullende sykkelhjul, sett fra bakken?",
      options: ["Dobbelt så fort som sykkelen", "Like fort som sykkelen", "Halvparten så fort som sykkelen", "Det står momentant stille"],
      explanation: "Der peker rotasjonens bidrag $\\omega R$ samme vei som massesenterets fart $v$, og med $\\omega R = v$ blir summen $2v$. Punktet som står stille er kontaktpunktet nederst, ikke toppunktet.",
    },
    {
      question: "Hva er den totale kinetiske energien til et legeme som ruller uten å gli?",
      options: ["$\\tfrac12 Mv^2 + \\tfrac12 I\\omega^2$", "$\\tfrac12 Mv^2$", "$\\tfrac12 I\\omega^2$", "$Mv^2 + I\\omega^2$, altså uten faktoren en halv"],
      explanation: "Et rullende legeme har begge energiformene samtidig: massesenteret beveger seg, og legemet snurrer om massesenteret. Å bruke bare translasjonsleddet er den vanligste feilen i sjangeren og gir alltid for stor fart.",
    },
    {
      question: "Hvorfor er mekanisk energi bevart for et legeme som ruller uten å gli, selv om det er friksjon i kontaktflaten?",
      options: ["Fordi kontaktpunktet står stille, så friksjonen ikke gjør arbeid", "Fordi friksjonen ved rulling alltid er for liten til å merkes", "Fordi friksjonen peker vinkelrett på bevegelsen", "Fordi friksjonen oppheves av normalkraften"],
      explanation: "Arbeid er kraft ganger forskyvning av angrepspunktet, og ved ren rulling flytter ikke kontaktpunktet seg. Friksjonen står verken vinkelrett på bevegelsen eller oppheves av normalkraften — den er tvert imot den eneste kraften med moment om massesenteret.",
    },
    {
      question: "Hva er formfaktoren $c$ for en massiv sylinder?",
      options: ["$0{,}500$", "$0{,}400$", "$0{,}667$", "$1{,}00$"],
      explanation: "Formfaktoren er $c = I/(MR^2)$, og for en massiv sylinder er $I = \\tfrac12 MR^2$. Verdien $0{,}400$ hører til en massiv kule, som har $\\tfrac25 MR^2$.",
    },
    {
      question: "Fire legemer ruller uten å gli ned fra samme høyde. Hvilket har størst fart nederst?",
      options: ["Den massive kula", "Den massive sylinderen", "Kuleskallet", "Den tynne ringa"],
      explanation: "Sluttfarten er $v = \\sqrt{2gh/(1+c)}$, så minst formfaktor gir størst fart, og kula har den minste ($0{,}400$). Ringa har $c = 1$ og må bruke halvparten av energien på å snurre.",
    },
    {
      question: "Hvorfor spiller verken massen eller radien noen rolle for hvor fort et legeme ruller ned et skråplan?",
      options: ["Fordi begge forkortes bort, så bare formfaktoren står igjen", "Fordi tyngden og friksjonen alltid opphever hverandre nøyaktig", "Fordi friksjonstallet er uavhengig av massen", "Fordi radien inngår både i $I$ og i $\\omega$"],
      explanation: "Energilikningen $Mgh = \\tfrac12(1+c)Mv^2$ har $M$ på begge sider, og radien forsvinner fordi rotasjonsenergien kan skrives $\\tfrac12 cMv^2$ der $c = I/(MR^2)$ er ren geometri. Tyngden og friksjonen oppheves ikke — nettokraften er nettopp det som driver legemet nedover.",
    },
    {
      question: "Hva er massesenterets akselerasjon for et legeme som ruller uten å gli ned et plan med helning $\\theta$?",
      options: ["$g\\sin\\theta/(1+c)$", "$g\\sin\\theta$", "$cg\\sin\\theta/(1+c)$", "$g\\tan\\theta/(1+c)$"],
      explanation: "Kraftlikningen og momentlikningen kobles av $a = \\alpha R$, og resultatet er $a = g\\sin\\theta/(1+c)$. Uttrykket $g\\sin\\theta$ alene gjelder for et legeme som glir friksjonsfritt, altså $c = 0$.",
    },
    {
      question: "En massiv sylinder ruller uten å gli ned et skråplan. Hvilken vei peker den statiske friksjonen?",
      options: ["Oppover langs planet", "Nedover langs planet", "Vinkelrett ut fra planet", "Rett nedover, parallelt med tyngden"],
      explanation: "Friksjonen må gi et moment som setter sylinderen i spinn i takt med at den akselererer nedover, og det krever at den peker oppover langs planet. Friksjon virker alltid langs kontaktflaten, aldri vinkelrett på den — den vinkelrette kraften er normalkraften.",
    },
    {
      question: "Hvilken kraft gir moment om massesenteret til en sylinder som ruller ned et skråplan?",
      options: ["Bare friksjonen", "Bare tyngden", "Både tyngden og normalkraften", "Både friksjonen og normalkraften"],
      explanation: "Tyngden angriper i massesenteret og har momentarm null, og normalkraftens virkelinje går rett gjennom massesenteret. Bare friksjonen har momentarm $R$ — å la tyngden bidra her er felle #15 og koster typisk 2 poeng.",
    },
    {
      question: "En massiv sylinder ruller uten å gli. Hvor stor andel av den kinetiske energien er rotasjonsenergi?",
      options: ["En tredjedel", "En halv", "To tredjedeler", "En femtedel"],
      explanation: "Andelen er $c/(1+c)$, og med $c = 0{,}500$ blir det $0{,}500/1{,}500 = 1/3$. Andelen en halv hører til en tynn ring, der $c = 1$.",
    },
    {
      question: "Hvilket krav må friksjonstallet oppfylle for at et legeme skal rulle rent ned et plan med helning $\\theta$?",
      options: ["$\\mu_s \\ge \\dfrac{c}{1+c}\\tan\\theta$", "$\\mu_s \\ge \\tan\\theta$", "$\\mu_s \\ge \\dfrac{c}{1+c}\\sin\\theta$", "$\\mu_s \\ge (1+c)\\tan\\theta$"],
      explanation: "Kravet kommer av å sammenligne den friksjonen rullebetingelsen krever med taket $\\mu_s N$, og $N = Mg\\cos\\theta$ gir tangens. Betingelsen $\\mu_s \\ge \\tan\\theta$ er hvilebetingelsen for en kloss som ikke skal gli i det hele tatt, en helt annen situasjon.",
    },
    {
      question: "Hva skjer når friksjonstallet er mindre enn kravet for ren rulling?",
      options: ["Legemet glir, og rullebetingelsen gjelder ikke lenger", "Legemet stopper helt opp", "Legemet ruller fortsatt rent, bare med mindre akselerasjon", "Friksjonen øker til den er stor nok"],
      explanation: "Hvilefriksjonen kan ikke overskride $\\mu_s N$, så når kravet ikke er oppfylt begynner kontaktflaten å gli og $v \\neq \\omega R$. Friksjonen kan ikke «øke til den er stor nok» — taket er nettopp det som gjør at rullingen svikter.",
    },
    {
      question: "En jojo modellert som en homogen sylinder slippes fra hvile. Hvor stor er massesenterets akselerasjon?",
      options: ["$\\tfrac23 g$", "$g$", "$\\tfrac12 g$", "$\\tfrac13 g$"],
      explanation: "Med $a = g/(1+c)$ og $c = 0{,}500$ blir $a = g/1{,}5 = \\tfrac23 g$. Verdien $g$ ville krevd at snordraget var null, altså at snora ikke hadde momentarm om massesenteret.",
    },
    {
      question: "Hvor stort er snordraget i en jojo modellert som en homogen sylinder?",
      options: ["En tredjedel av tyngden", "Like stort som tyngden", "To tredjedeler av tyngden", "Halvparten av tyngden"],
      explanation: "Fra $mg - T = ma$ med $a = \\tfrac23 g$ følger $T = \\tfrac13 mg$. Snordraget kan ikke være like stort som tyngden — da ville jojoen hengt stille i stedet for å falle.",
    },
    {
      question: "En kule som ruller og en kloss som glir friksjonsfritt sendes oppover den samme bakken med samme startfart. Hvem kommer høyest?",
      options: ["Kula, fordi den har rotasjonsenergi i tillegg", "Klossen, fordi den ikke bremses av friksjon", "De kommer nøyaktig like høyt", "Klossen, fordi den har mindre treghetsmoment"],
      explanation: "Med samme fart har kula mer kinetisk energi, og siden statisk friksjon ved ren rulling ikke gjør arbeid, blir all denne energien til høyde. Friksjonen bremser ikke kula i energiforstand — den flytter energi mellom rotasjon og translasjon.",
    },
    {
      question: "En kule som ruller og en kloss som glir friksjonsfritt starter fra hvile i samme høyde. Hvem kommer først ned?",
      options: ["Klossen, fordi all energien går til framoverfart", "Kula, fordi den har rotasjonsenergi i tillegg", "De kommer nøyaktig samtidig", "Kula, fordi friksjonen fra underlaget driver den framover"],
      explanation: "Nå er **energien** felles, og kula må dele sin mellom translasjon og rotasjon, så massesenterets akselerasjon blir $g\\sin\\theta/(1+c) < g\\sin\\theta$. Merk at svaret er motsatt av oppgaven med felles startfart — det er avgjørende å vite hva som er likt i sammenligningen.",
    },
    {
      question: "Hva blir akselerasjonen i en Atwood-maskin når trinsa har treghetsmoment $I$ og radius $R$?",
      options: ["$\\dfrac{(m_1-m_2)g}{m_1+m_2+I/R^2}$", "$\\dfrac{(m_1-m_2)g}{m_1+m_2}$", "$\\dfrac{(m_1-m_2)g}{m_1+m_2+I}$", "$\\dfrac{(m_1-m_2)g}{m_1+m_2+IR^2}$"],
      explanation: "Leddet $I/R^2$ er trinsas effektive masse og har enheten kilogram, som en dimensjonssjekk bekrefter. Å skrive $I$ eller $IR^2$ i nevneren gir feil enhet og dermed et uttrykk som ikke kan stemme.",
    },
    {
      question: "En sylinder ruller uten å gli og har massesenterfarten $v$. Hvilken påstand er umulig?",
      options: ["Kontaktpunktet har farten $v$ framover", "Toppunktet har farten $2v$ framover", "Vinkelfarten er $v/R$", "Rotasjonsenergien er en tredjedel av den totale"],
      explanation: "Ved ren rulling står kontaktpunktet momentant stille — hadde det hatt farten $v$, ville legemet glidd og rullebetingelsen vært brutt. De tre andre påstandene følger alle direkte av $v = \\omega R$ for en massiv sylinder.",
    },
  ],
  'fys1100-6-3': [
    {
      question: "Hva er spinnet til et stivt legeme som roterer om en fast akse?",
      options: ["$L = I\\omega$", "$L = mv$", "$L = \\tfrac12 I\\omega^2$", "$L = I\\alpha$"],
      explanation: "Spinnet er rotasjonens motstykke til bevegelsesmengden $p = mv$, med treghetsmomentet i massens rolle og vinkelfarten i fartens. Uttrykket $\\tfrac12 I\\omega^2$ er rotasjonsenergien, og $I\\alpha$ er kraftmomentet.",
    },
    {
      question: "Hvilken enhet har spinn?",
      options: ["$\\text{kg}\\cdot\\text{m}^2/\\text{s}$", "$\\text{kg}\\cdot\\text{m}^2$", "$\\text{kg}\\cdot\\text{m}/\\text{s}$", "$\\text{N}\\cdot\\text{m}$, altså newtonmeter"],
      explanation: "Fra $L = I\\omega$ blir enheten $\\text{kg}\\cdot\\text{m}^2$ ganger $\\text{s}^{-1}$. Enheten $\\text{kg}\\cdot\\text{m}/\\text{s}$ hører til bevegelsesmengden, og $\\text{kg}\\cdot\\text{m}^2$ til treghetsmomentet alene.",
    },
    {
      question: "Når er spinnet til et system bevart?",
      options: ["Når det ytre kraftmomentet om aksen er null", "Når summen av alle de ytre kreftene på systemet er null", "Når systemets treghetsmoment er konstant", "Når den kinetiske energien er bevart"],
      explanation: "Spinnsatsen $\\boldsymbol{\\tau} = d\\mathbf{L}/dt$ sier at det er kraftmomentet, ikke kraften, som endrer spinnet. En stor ytre kraft uten momentarm om aksen — for eksempel fra et hengsel — endrer derfor ikke spinnet.",
    },
    {
      question: "En kule skytes inn i en stav som er hengslet i den ene enden, og setter seg fast. Hva er bevart gjennom støtet?",
      options: ["Spinnet om hengselaksen", "Systemets bevegelsesmengde", "Systemets mekaniske energi", "Både bevegelsesmengden og energien"],
      explanation: "Hengselkraften angriper i aksen og har null momentarm, så det ytre kraftmomentet om aksen er null. Bevegelsesmengden er derimot ikke bevart — hengselen gir nettopp en betydelig ytre kraft — og støtet er uelastisk, så energi går tapt.",
    },
    {
      question: "Hva er hovedgrunnen til at bevegelsesmengden **ikke** er bevart i et kule-i-stav-støt med hengsel?",
      options: ["Hengselen utøver en ytre kraft på systemet", "Kula setter seg fast i staven", "Staven roterer om hengselet i stedet for å flytte seg", "Tyngden virker på begge legemene"],
      explanation: "Bevegelsesmengdebevaring krever at netto ytre kraft er null, og hengselet leverer nettopp en stor ytre kraft under støtet. At kula setter seg fast avgjør bare om energien er bevart, ikke om bevegelsesmengden er det.",
    },
    {
      question: "En kunstløper trekker armene inn til kroppen mens hun snurrer. Hva skjer?",
      options: ["Treghetsmomentet synker og vinkelfarten øker", "Både treghetsmomentet og vinkelfarten synker", "Treghetsmomentet øker og vinkelfarten synker", "Begge holder seg konstante siden spinnet er bevart"],
      explanation: "Spinnet $L = I\\omega$ er bevart fordi de ytre kreftene virker langs rotasjonsaksen og ikke har momentarm om den. Når massen flyttes nærmere aksen, synker $I$, og $\\omega$ må øke tilsvarende for at produktet skal holde seg.",
    },
    {
      question: "Hva skjer med rotasjonsenergien til kunstløperen når hun trekker inn armene?",
      options: ["Den øker, fordi musklene gjør arbeid", "Den holder seg konstant, siden spinnet er bevart", "Den synker, fordi treghetsmomentet synker", "Den holder seg konstant, siden ingen ytre krefter virker"],
      explanation: "Med $L$ konstant er $K = L^2/(2I)$, så en halvering av $I$ dobler energien. Spinnbevaring sier noe om $I\\omega$, ikke om $I\\omega^2$ — differansen kommer fra arbeidet hun gjør når hun drar armene innover.",
    },
    {
      question: "Et barn hopper rett ned på kanten av en karusell som snurrer fritt. Hva skjer med rotasjonsenergien?",
      options: ["Den synker, fordi støtet er uelastisk", "Den øker, fordi barnet tilfører masse", "Den holder seg konstant, siden spinnet er bevart", "Den holder seg konstant, siden barnet lander mykt"],
      explanation: "Barnet og karusellen ender med felles vinkelfart, altså et uelastisk støt, og med $L$ konstant og $I$ økt følger $K = L^2/(2I)$ nedover. Energien går til varme og deformasjon i landingen.",
    },
    {
      question: "En kloss glir i rett linje over et bord. Har den spinn om et punkt utenfor bevegelseslinja?",
      options: ["Ja, $L = mvb$ med $b$ som momentarm", "Nei, spinn krever at legemet roterer", "Ja, men bare hvis klossen akselererer", "Nei, siden bevegelsen er rettlinjet"],
      explanation: "Spinn om et punkt er bevegelsesmengden ganger momentarmen, altså den vinkelrette avstanden fra punktet ned på bevegelseslinja. Det er nettopp derfor en kule i rett flukt kan sette en hengslet stav i rotasjon.",
    },
    {
      question: "Hvilket treghetsmoment skal brukes for systemet etter at en kule med masse $m$ har satt seg fast i avstand $d$ fra hengselet på en stav?",
      options: ["$\\tfrac13 M\\ell^2 + md^2$", "$(M+m)\\ell^2$", "$\\tfrac{1}{12}M\\ell^2 + md^2$", "$\\tfrac13 (M+m)\\ell^2$"],
      explanation: "Treghetsmomenter om samme akse legges sammen: staven bidrar med $\\tfrac13 M\\ell^2$ om enden, kula som punktmasse med $md^2$. Å bruke totalmassen $(M+m)$ som om den satt samlet ett sted er den mest siterte feilen i sjangeren.",
    },
    {
      question: "En løsning setter $mv_0 = (m+M)v$ for en kule som setter seg fast i en hengslet stav. Hva er den mest presise kritikken?",
      options: ["Bevegelsesmengden er ikke bevart, og masse er ikke $I$", "Farten $v$ skulle vært regnet i meter per sekund", "Kula burde vært behandlet som et utstrakt legeme", "Massene skulle vært trukket fra hverandre"],
      explanation: "To feil ligger i samme likning: hengselen gir en ytre kraft, så $\\sum p$ er ikke konstant, og en roterende stav har ikke én felles fart, så $(m+M)$ kan ikke erstatte treghetsmomentet. Riktig oppsett er spinnbevaring om hengselaksen med $I = \\tfrac13 M\\ell^2 + md^2$.",
    },
    {
      question: "Hvor treffer en kule for at en hengslet stav skal få minst mulig vinkelfart?",
      options: ["Så nær hengselet som mulig", "Så langt fra hengselet som mulig", "Nøyaktig i stavens massesenter", "Det spiller ingen rolle hvor den treffer"],
      explanation: "Kulas spinn om hengselaksen er $mv_0d$, så en liten momentarm $d$ gir lite spinn å fordele. Treffer den helt inntil aksen, går $d$ mot null og staven blir stående — all bevegelsesmengden tas opp av hengselet.",
    },
    {
      question: "Hva gjelder for energien i et uelastisk rotasjonsstøt?",
      options: ["Den er alltid mindre etter støtet enn før", "Den er alltid den samme før og etter", "Den er alltid større etter støtet", "Den er bevart så lenge spinnet om aksen er bevart"],
      explanation: "I et uelastisk støt går mekanisk energi til varme og deformasjon, og legemene ender med felles vinkelfart. Spinnbevaring og energibevaring er uavhengige lover — den ene sier ingenting om den andre.",
    },
    {
      question: "Når gjelder $\\tau = I\\alpha$, og når må du bruke $\\boldsymbol{\\tau} = d\\mathbf{L}/dt$ i stedet?",
      options: ["$\\tau = I\\alpha$ krever konstant treghetsmoment", "De to formene er alltid likeverdige", "$\\tau = I\\alpha$ krever at spinnet er bevart", "$\\tau = I\\alpha$ gjelder bare for punktmasser i sirkelbane"],
      explanation: "Spinnsatsen er den generelle formen, og $\\tau = I\\alpha$ følger av den bare når $I$ kan settes utenfor derivasjonen. For en kunstløper som endrer form er $I$ ikke konstant, og den enkle formen gjelder ikke.",
    },
    {
      question: "Hvor høyt løftes et punkt i avstand $r$ fra hengselet når en stav svinger ut vinkelen $\\theta$ fra loddrett?",
      options: ["$r(1-\\cos\\theta)$", "$r\\sin\\theta$", "$r\\cos\\theta$", "$r\\theta$ med $\\theta$ i radianer"],
      explanation: "Punktet henger $r$ under hengselet i loddrett stilling og $r\\cos\\theta$ under det ved vinkelen $\\theta$, så differansen er $r(1-\\cos\\theta)$. Uttrykket $r\\sin\\theta$ er den vannrette forskyvningen, ikke løftehøyden.",
    },
    {
      question: "En kule treffer enden av en **fritt liggende** stav på et glatt underlag og setter seg fast. Hva er bevart?",
      options: ["Både bevegelsesmengden og spinnet om massesenteret", "Bare spinnet om stavens massesenter", "Bare bevegelsesmengden", "Bevegelsesmengden og systemets mekaniske energi"],
      explanation: "Uten hengsel finnes ingen ytre horisontal kraft og heller ikke noe ytre kraftmoment, så begge bevaringslovene gjelder samtidig. Energien er derimot ikke bevart, siden kula setter seg fast.",
    },
    {
      question: "Hvilken påstand om et støt mot en hengslet stav er umulig?",
      options: ["Spinnet om hengselaksen endres uten ytre kraftmoment", "Bevegelsesmengden endres mens spinnet er bevart", "Energien synker mens spinnet er bevart", "Staven får vinkelfart uten at kula traff i massesenteret"],
      explanation: "Spinnsatsen sier at spinnet bare kan endres av et ytre kraftmoment, så påstanden er selvmotsigende. De tre andre beskriver nettopp det som skjer i et vanlig kule-i-stav-støt.",
    },
    {
      question: "Hva gir uttelling i en «kritiser løsningen»-oppgave?",
      options: ["Å peke på den konkrete feilen og si hva som faktisk gjelder", "Å regne oppgaven på nytt uten å kommentere den gitte løsningen", "Å skrive at løsningen kan være riktig, men usikker", "Å liste opp alle formlene som er relevante for temaet"],
      explanation: "Sensor ser etter at du navngir feilen med fagbegrep, sier hvilket prinsipp som gjelder i stedet og hvorfor, og skisserer riktig framgangsmåte. Helgardering og formellister uten bruk gir null — å skrive opp formler uten å bruke dem er den hyppigst påpekte enkeltfeilen i faget.",
    },
  ],
  'fys1100-6-4': [
    {
      question: "Hvilken rotasjonsakse lønner det seg å velge for en stav som er hengslet i den ene enden?",
      options: ["Hengselaksen, siden hengselkraften da faller ut", "Massesenteret, siden tyngden angriper nettopp der", "Den frie enden, siden den beveger seg fortest", "Det spiller ingen rolle for regnestykket"],
      explanation: "Hengselkraften er ukjent i både størrelse og retning, men angriper i aksen og har derfor null momentarm. Massesenteret er en gyldig akse, men da må den ukjente hengselkraften med i momentregnskapet — regningen blir vesentlig lengre.",
    },
    {
      question: "Du skal finne friksjonskraften på en sylinder som ruller uten å gli. Hvilken metode virker?",
      options: ["Kraft- og momentmetoden med rullebetingelsen", "Energibevaring med rotasjonsleddet inkludert", "Energibevaring kombinert med rullebetingelsen", "Arbeids-energi-teoremet for friksjonskraften"],
      explanation: "Statisk friksjon ved ren rulling gjør ikke arbeid, så den opptrer ikke i noe energiregnskap i det hele tatt. Den finnes bare ved å løse kraftlikningen og momentlikningen sammen med $a = \\alpha R$.",
    },
    {
      question: "Hvor mange likninger trengs for å løse en oppgave om et legeme som ruller uten å gli ned et skråplan?",
      options: ["Tre: kraft, moment og rullebetingelse", "To: kraft og moment", "To: kraftlikningen og energibevaring", "Én: Newtons 2. lov langs planet"],
      explanation: "De ukjente er $a$, $\\alpha$ og $f_s$, altså tre — så det trengs tre likninger. Uten rullebetingelsen $a = \\alpha R$ er systemet underbestemt, og det er nettopp den likningen som oftest glemmes.",
    },
    {
      question: "En homogen stav hengslet i den ene enden slippes fra vannrett stilling. Hvilken metode gir vinkelfarten i loddrett stilling?",
      options: ["Energibevaring, siden $\\alpha$ ikke er konstant", "Bevegelseslikningen $\\omega = \\alpha t$ med $\\alpha = 3g/(2\\ell)$", "Spinnbevaring om hengselaksen gjennom fallet", "Rullebetingelsen $v = \\omega \\ell$ anvendt på enden"],
      explanation: "Momentarmen krymper som $\\cos\\theta$ mens staven faller, så $\\alpha$ avtar og bevegelseslikningene for konstant $\\alpha$ gjelder ikke. Spinnet er heller ikke bevart, siden tyngden gir et ytre moment om hengselen under hele fallet.",
    },
    {
      question: "Hva er den effektive massen til en homogen skive som trinse med radius $R$?",
      options: ["Halve trinsemassen", "Hele trinsemassen", "En tredjedel av trinsemassen", "To tredjedeler av trinsemassen"],
      explanation: "Den effektive massen er $I/R^2$, og for en skive er $I = \\tfrac12 MR^2$, altså $I/R^2 = M/2$. Å bruke hele trinsemassen gir for stor treghet og dermed for liten akselerasjon.",
    },
    {
      question: "En sylinder skal rulle rent ned et plan med helning $30^\\circ$. Hva er minste friksjonstall?",
      options: ["$0{,}192$", "$0{,}577$", "$0{,}289$", "$0{,}096$"],
      explanation: "Kravet er $\\mu_s \\ge \\dfrac{c}{1+c}\\tan\\theta = \\tfrac13\\tan 30^\\circ = 0{,}192$. Verdien $0{,}577$ er $\\tan 30^\\circ$ alene, altså hvilebetingelsen for en kloss som ikke skal gli i det hele tatt.",
    },
    {
      question: "En jojo modellert som en homogen sylinder faller. Hvor stor andel av energien sitter i rotasjonen?",
      options: ["En tredjedel", "To tredjedeler", "Halvparten", "En fjerdedel"],
      explanation: "Andelen er $c/(1+c)$, og for en sylinder med $c = 0{,}500$ blir det $1/3$. Andelen en halv hører til en tynn ring, der $c = 1$.",
    },
    {
      question: "Hva må stå i besvarelsen når du bruker spinnbevaring i et støt mot en hengslet stav?",
      options: ["At det ytre kraftmomentet om hengselaksen er null, og hvorfor", "At systemet er lukket og bevegelsesmengden er bevart", "At støtet er elastisk, slik at energien er bevart", "At hengselkraften er neglisjerbart liten under støtet"],
      explanation: "Begrunnelsen er det som gir poeng: hengselkraften angriper i aksen og har derfor null momentarm, selv om den er stor. Å bruke en bevaringslov uten begrunnelse er felle #7 og koster typisk 1 poeng.",
    },
    {
      question: "Hvilken kontroll avslører raskest at en løsning har brukt bevegelsesmengde der spinn skulle vært brukt?",
      options: ["La treffpunktet nærme seg hengselet og se på $\\omega$", "Sjekk at svaret har riktig enhet", "Regn ut energitapet og se om det er positivt", "Se om massen faller ut av det symbolske sluttuttrykket"],
      explanation: "En bevegelsesmengdeløsning gir samme vinkelfart uansett hvor kula treffer, mens spinnløsningen gir $\\omega \\to 0$ når momentarmen $d \\to 0$. Både enhetssjekk og fortegn på energitapet passerer i den gale løsningen, så de avslører ingenting.",
    },
    {
      question: "En sylinder ligger på et plan der $\\mu_s$ er mindre enn kravet for ren rulling. Hva gjelder da?",
      options: ["Friksjonen er dynamisk, og $v \\neq \\omega R$", "Friksjonen er statisk, men mindre enn vanlig", "Rullebetingelsen gjelder fortsatt, med redusert $a$", "Sylinderen blir liggende i ro på planet"],
      explanation: "Når hvilefriksjonen ikke strekker til, glir kontaktflaten, og friksjonen blir dynamisk med kjent størrelse $\\mu_d N$. Rullebetingelsen gjelder da ikke, og translasjon og rotasjon må regnes hver for seg.",
    },
    {
      question: "Hva er den viktigste grunnen til at $I$ må gjelde om samme akse som momentene?",
      options: ["Fordi $\\tau = I\\alpha$ ellers ikke er en gyldig likning", "Fordi treghetsmomentet ellers får feil enhet", "Fordi vinkelakselerasjonen varierer med aksen", "Fordi parallellakseteoremet bare gjelder om massesenteret"],
      explanation: "Loven er utledet for én bestemt akse, og å blande akser gir et regnestykke uten fysisk mening — for en stav gir det en faktor 3 i feil. Enheten blir riktig uansett, så en benevningskontroll fanger ikke denne feilen.",
    },
    {
      question: "Hva bør du gjøre først når du møter en rotasjonsoppgave med fire deloppgaver på eksamen?",
      options: ["Tegne diagram, velge akse og sette opp likningene symbolsk", "Regne ut treghetsmomentet med tall med én gang", "Løse den siste deloppgaven, siden den gir flest poeng", "Slå opp alle relevante formler på formelarket og skrive dem av"],
      explanation: "Diagrammet er selvstendig poenggivende, og aksevalget avgjør om resten blir riktig. Å skrive av formler uten å bruke dem gir null — det er den hyppigst påpekte enkeltfeilen, og alle deloppgaver teller uansett likt.",
    },
  ],
  'fys1100-7-1': [
    {
      question: "Hva er den ukjente i en differensiallikning?",
      options: ["En funksjon", "Et tall", "En konstant", "En enhet"],
      explanation: "Løsningen er en hel kurve, for eksempel $y(t)$, som oppfyller likningen i hvert tidspunkt. Svaret «et tall» er den vanligste misforståelsen: et tall kan være svaret på «hvor fort går den etter 2 s», men aldri på «løs likningen».",
    },
    {
      question: "Hvilken orden har likningen $m\\,d^2y/dt^2 = -ky - b\\,dy/dt$?",
      options: ["Andre orden", "Første orden", "Tredje orden", "Nulte orden"],
      explanation: "Ordenen er nummeret på den høyeste deriverte, og her er det $d^2y/dt^2$. At likningen også inneholder en førstederivert endrer ingenting — det er den høyeste som teller, ikke antallet ulike deriverte.",
    },
    {
      question: "Hvilken av likningene er IKKE lineær?",
      options: ["$m\\,dv/dt = mg - D\\lvert v\\rvert v$", "$m\\,dv/dt = mg - k_v v$", "$d^2x/dt^2 + 4x = 0$", "$d^2x/dt^2 + 3\\,dx/dt + x = 2t + 5$"],
      explanation: "Den ukjente er kvadrert gjennom $\\lvert v\\rvert v$, og det bryter lineariteten. Likningen med $2t$ på høyresiden er fortsatt lineær — det er *inhomogenitet*, ikke ulinearitet, siden det er tiden og ikke den ukjente som står der.",
    },
    {
      question: "Hva gjør en differensiallikning inhomogen?",
      options: ["Et ledd uten den ukjente funksjonen i seg", "At den ukjente opptrer i andre potens", "At koeffisientene endrer seg underveis i bevegelsen", "At den er av andre orden"],
      explanation: "Samler du alt med den ukjente på venstre side og det står noe igjen på høyre, er likningen inhomogen — typisk en konstant tyngde eller en ytre påkjenning. At den ukjente opptrer i andre potens gjør likningen ikke-lineær, som er en helt annen egenskap.",
    },
    {
      question: "Hvor mange initialbetingelser trengs for å bestemme løsningen av $m\\,d^2y/dt^2 = -ky$?",
      options: ["To", "En", "Tre", "Ingen"],
      explanation: "Antallet er lik ordenen, og likningen er av andre orden: hver integrasjon føder én ubestemt konstant. Fysisk må du kjenne både hvor legemet er og hvor fort det går for å forutsi resten av bevegelsen.",
    },
    {
      question: "En student integrerer $m\\,dv/dt = mg - k_v v$ og skriver $mv = mgt - k_v vt$. Hva er galt?",
      options: ["$\\int v\\,dt$ er ikke $vt$ når $v$ varierer", "Massen skulle ikke stått på venstre side", "Fortegnet på motstandsleddet skulle vært positivt", "Tiden skulle vært kvadrert"],
      explanation: "Å sette $\\int v\\,dt = vt$ forutsetter at farten er konstant, og hele poenget med likningen er at farten endrer seg. Fortegnet på motstandsleddet er faktisk riktig — motstanden bremser — så feilen ligger i integrasjonen, ikke i oppsettet.",
    },
    {
      question: "Hva gir det å «integrere» en differensiallikning som om den ukjente var konstant?",
      options: ["Null poeng, ikke delvis uttelling", "Full uttelling hvis svaret stemmer", "Halv uttelling som følgefeil", "Trekk på ett poeng"],
      explanation: "Sensor retter metoden, og dette er en metodefeil som viser manglende forståelse av hva en differensiallikning er. Regelen om at følgefeil ikke straffes gjelder regnefeil i en gyldig metode, ikke en ugyldig metode.",
    },
    {
      question: "Hvordan finner du likevektsløsningen til $m\\,dv/dt = mg - k_v v$?",
      options: ["Setter $dv/dt = 0$ og løser for $v$", "Setter $v = 0$ og løser for $t$", "Integrerer begge sider fra $0$ til $\\infty$", "Deriverer begge sider en gang til"],
      explanation: "Likevektsløsningen er den konstante løsningen, og en konstant har derivert null — det gir $v = mg/k_v$ direkte. Å sette $v = 0$ gir tvert imot akselerasjonen i startøyeblikket, som er en helt annen opplysning.",
    },
    {
      question: "En kloss på en fjær følger $d^2x/dt^2 = -36x$. Hva er svingefrekvensen $\\omega_0$?",
      options: ["$6{,}0\\ \\text{rad/s}$", "$36\\ \\text{rad/s}$", "$3{,}0\\ \\text{rad/s}$", "$18\\ \\text{rad/s}$"],
      explanation: "Likningen har formen $d^2x/dt^2 = -\\omega_0^2 x$, så $\\omega_0^2 = 36$ og $\\omega_0 = 6{,}0\\ \\text{rad/s}$. Verdien $36$ er koeffisienten selv, altså kvadratet — en av de vanligste feilavlesningene.",
    },
    {
      question: "Hvorfor skrives kvadratisk luftmotstand $-D\\lvert v\\rvert v$ og ikke $-Dv^2$?",
      options: ["Slik at kraften snur retning når farten snur", "Slik at kraften alltid får samme fortegn som farten", "For at enheten skal bli riktig", "Fordi $v^2$ er for stort"],
      explanation: "Med $-Dv^2$ ville leddet peke samme vei uansett fartsretning, og et legeme på vei oppover ville bli drevet i stedet for bremset. Absoluttverdien gjør at leddet skifter fortegn samtidig med farten, slik at motstanden alltid peker mot bevegelsen.",
    },
    {
      question: "Når er konstant-$a$-formlene $v = v_0 + at$ og $x = x_0 + v_0t + \\tfrac12at^2$ gyldige?",
      options: ["Bare når resultantkraften er konstant hele veien", "Så lenge legemet beveger seg i én og samme retning", "Når legemet starter fra ro i origo", "Når massen er kjent"],
      explanation: "Formlene forutsetter konstant akselerasjon, altså at høyresiden i Newtons 2. lov er en ren konstant. At bevegelsen går i én og samme retning hjelper ikke: en fjærkraft eller en luftmotstand bryter forutsetningen med det samme, selv i rettlinjet bevegelse.",
    },
    {
      question: "Hva er tilstanden til et system som følger en andreordens bevegelseslikning?",
      options: ["Posisjon og fart samtidig", "Bare posisjonen", "Bare farten", "Posisjon, fart og akselerasjon"],
      explanation: "Paret $(y, v)$ bestemmer hele den videre bevegelsen gjennom likningen, og det er nettopp derfor to initialbetingelser trengs. Akselerasjonen er ikke en del av tilstanden — den regnes ut av likningen når posisjon og fart er kjent.",
    },
    {
      question: "Hvilken metode peker klassifiseringen «første orden, separabel» på?",
      options: ["Separer variablene og integrer hver side", "Karakteristisk likning", "Taylor-utvikling om likevekt", "Superposisjon av to uavhengige grunnløsninger"],
      explanation: "Separable førsteordens likninger løses ved å samle alt med den ukjente på den ene siden og alt med tiden på den andre. Karakteristisk likning er verktøyet for andreordens lineære likninger og gjelder ikke her.",
    },
    {
      question: "Et lodd har $m\\,dv/dt = mg - k_v v$ med $m = 0{,}0200\\ \\text{kg}$ og $k_v = 0{,}0800\\ \\text{kg/s}$. Hva er terminalfarten?",
      options: ["$2{,}45\\ \\text{m/s}$", "$0{,}408\\ \\text{m/s}$", "$4{,}91\\ \\text{m/s}$", "$9{,}81\\ \\text{m/s}$"],
      explanation: "Terminalfarten er $mg/k_v = 0{,}1962/0{,}0800 = 2{,}45\\ \\text{m/s}$. Svaret $0{,}408\\ \\text{m/s}$ kommer av å snu brøken, altså $k_v/(mg)$, som dessuten har feil enhet — en benevningskontroll avslører den feilen umiddelbart.",
    },
    {
      question: "Hva blir $m\\,d^2y/dt^2 = -ky - mg$ skrevet på tilstandsform?",
      options: ["$dy/dt = v$ og $dv/dt = -(k/m)y - g$", "$dy/dt = v$ og $dv/dt = -ky - mg$", "$dy/dt = -ky$ og $dv/dt = -g$", "$dv/dt = y$ og $dy/dt = -(k/m)v - g$"],
      explanation: "Hvert kraftledd må deles på massen, siden det er akselerasjonen som står alene på venstre side. Varianten med $-ky - mg$ har glemt nettopp den divisjonen og gir da et uttrykk med enheten newton der det skulle stått $\\text{m/s}^2$.",
    },
    {
      question: "Hva er forskjellen på generell og partikulær løsning?",
      options: ["Den partikulære oppfyller også initialbetingelsene", "Den generelle gjelder for alle likninger av samme orden", "Den partikulære er alltid en konstant funksjon", "Den generelle er den numeriske løsningen"],
      explanation: "Den generelle løsningen har konstantene stående og beskriver hele familien av mulige bevegelser; den partikulære er det ene medlemmet som passer til den gitte starten. Konstant løsning er noe annet igjen, nemlig likevektsløsningen.",
    },
    {
      question: "En pendel følger $\\ell\\,d^2\\theta/dt^2 = -g\\sin\\theta$. Hvorfor er denne ikke lineær?",
      options: ["Den ukjente står inne i en sinusfunksjon", "Fordi den er av andre orden", "Fordi $g$ og $\\ell$ er konstanter", "Fordi utslaget må måles i radianer og ikke i grader"],
      explanation: "Linearitet krever at den ukjente og dens deriverte opptrer i første potens og ikke inne i noen funksjon, og $\\sin\\theta$ bryter kravet. Orden og linearitet er uavhengige egenskaper — den lineære fjærlikningen er også av andre orden.",
    },
    {
      question: "En andreordens likning er oppgitt med bare $y(0)$. Hva er situasjonen?",
      options: ["Én betingelse mangler, så én konstant blir ubestemt", "Løsningen er entydig bestemt av den ene betingelsen", "Likningen har da ingen løsning", "Ordenen faller til én"],
      explanation: "Andre orden gir to ubestemte konstanter, og hver av dem krever sin egen betingelse. Ofte ligger den manglende opplysningen skjult i oppgaveteksten i en formulering som «slippes fra ro», som er en opplysning om farten.",
    },
  ],
  'fys1100-7-2': [
    {
      question: "Hva er egenfrekvensen til en fjær med $k = 50{,}0\\ \\text{N/m}$ og masse $0{,}200\\ \\text{kg}$?",
      options: ["$15{,}8\\ \\text{rad/s}$", "$250\\ \\text{rad/s}$", "$0{,}0632\\ \\text{rad/s}$", "$2{,}52\\ \\text{rad/s}$"],
      explanation: "$\\omega_0 = \\sqrt{k/m} = \\sqrt{250} = 15{,}8\\ \\text{rad/s}$. Verdien $250\\ \\text{rad/s}$ er forholdet $k/m$ selv, altså kvadratet av svaret — en av de vanligste avlesningsfeilene.",
    },
    {
      question: "Hvorfor svinger en hengende fjær med samme periode som den samme fjæra på et vannrett bord?",
      options: ["Tyngden flytter likevekten, men endrer ikke stivheten", "Fordi tyngden er neglisjerbar mot fjærkraften", "Fordi normalkraften fra opphenget nøytraliserer tyngden", "Fordi loddet er tyngre enn fjæra"],
      explanation: "Substitusjonen $u = y - y_L$ fjerner tyngdeleddet helt fra svingelikningen, og igjen står $d^2u/dt^2 = -(k/m)u$ med samme $\\omega_0$. At tyngden skulle være neglisjerbar er galt — den er tvert imot det som bestemmer hvor likevekten ligger.",
    },
    {
      question: "Hva blir den karakteristiske likningen til $2\\,d^2u/dt^2 + 6\\,du/dt + 8u = 0$?",
      options: ["$2\\lambda^2 + 6\\lambda + 8 = 0$", "$\\lambda^2 + 6\\lambda + 8 = 0$", "$2\\lambda + 6 = 0$", "$2\\lambda^3 + 6\\lambda^2 + 8\\lambda = 0$"],
      explanation: "Sett inn $u = e^{\\lambda t}$: hver derivasjon gir én faktor $\\lambda$, og koeffisientene følger med uendret. Varianten uten totallet foran $\\lambda^2$ har mistet massen, og gir da feil røtter.",
    },
    {
      question: "Et lodd starter i likevekt med farten $v_0$. Hva blir konstanten $B$ i $u = A\\cos\\omega_0t + B\\sin\\omega_0t$?",
      options: ["$B = v_0/\\omega_0$", "$B = v_0$", "$B = v_0\\omega_0$", "$B = \\omega_0/v_0$"],
      explanation: "Deriverer du løsningen og setter $t = 0$, får du $v_0 = B\\omega_0$. Å skrive $B = v_0$ gir feil enhet: $B$ er et utslag i meter, mens $v_0$ måles i meter per sekund.",
    },
    {
      question: "En svingning har $u(t) = 0{,}060\\cos(4{,}0t) + 0{,}080\\sin(4{,}0t)$ i meter. Hva er amplituden?",
      options: ["$0{,}100\\ \\text{m}$", "$0{,}140\\ \\text{m}$", "$0{,}060\\ \\text{m}$", "$0{,}020\\ \\text{m}$"],
      explanation: "Amplituden er $\\sqrt{A^2+B^2} = \\sqrt{0{,}0036+0{,}0064} = 0{,}100\\ \\text{m}$. Verdien $0{,}140\\ \\text{m}$ er summen $A+B$, som overvurderer utslaget fordi de to leddene aldri er på topp samtidig.",
    },
    {
      question: "Hva kjennetegner kritisk demping?",
      options: ["Systemet går raskest mulig tilbake uten å svinge forbi", "Systemet svinger med halvert amplitude hver periode", "Dempingen er akkurat stor nok til å stanse legemet", "Systemet bruker uendelig lang tid på å nå likevekt"],
      explanation: "Ved $b = 2\\sqrt{km}$ har den karakteristiske likningen dobbeltrot, og løsningen $(A+Bt)e^{-\\gamma t}$ passerer aldri likevekten. Kraftigere demping enn dette gjør bevegelsen tilbake **langsommere**, ikke raskere.",
    },
    {
      question: "Hvorfor må $\\sin\\theta \\approx \\theta$ brukes med vinkelen i radianer?",
      options: ["Taylor-utviklingen om null forutsetter radianer", "Fordi grader gir negative verdier", "Fordi radianer er en SI-enhet", "Fordi kalkulatorer regner i radianer som standard"],
      explanation: "Den deriverte av $\\sin\\theta$ er $\\cos\\theta$ bare når vinkelen måles i radianer; i grader kommer det en faktor $\\pi/180$ i tillegg. Med grader ville $\\sin 20 \\approx 20$ vært feil med en faktor på nesten sytti.",
    },
    {
      question: "Hvor mye strekkes en fjær med $k = 40{,}0\\ \\text{N/m}$ av et lodd på $0{,}600\\ \\text{kg}$?",
      options: ["$0{,}147\\ \\text{m}$", "$0{,}0150\\ \\text{m}$", "$24{,}0\\ \\text{m}$", "$6{,}80\\ \\text{m}$"],
      explanation: "I likevekt er $k\\Delta y = mg$, altså $\\Delta y = 5{,}886/40{,}0 = 0{,}147\\ \\text{m}$. Verdien $0{,}0150\\ \\text{m}$ kommer av å glemme $g$ og bare dele massen på fjærkonstanten, noe en enhetssjekk avslører umiddelbart.",
    },
    {
      question: "Hva er den effektive fjærkonstanten for en kraft $F(x)$ nær en likevekt $x_0$?",
      options: ["$k_{\\text{ef}} = -F'(x_0)$", "$k_{\\text{ef}} = F(x_0)$", "$k_{\\text{ef}} = -F''(x_0)$", "$k_{\\text{ef}} = F'(0)$"],
      explanation: "Taylor-utvikling om likevekten gir $F \\approx F'(x_0)\\xi$, så den tilbakedrivende koeffisienten er $-F'(x_0)$. Uttrykket $F(x_0)$ er null per definisjon av likevekt og kan derfor umulig være svaret.",
    },
    {
      question: "En partikkel er i en likevekt der $U''(x_0) < 0$. Hva skjer ved et lite utslag?",
      options: ["Den beveger seg vekk fra punktet", "Den svinger harmonisk om punktet", "Den blir stående i ro", "Den svinger med dobbel frekvens"],
      explanation: "Negativ andrederivert betyr at potensialet har en topp, og kraften peker vekk fra punktet. Da blir $\\omega^2$ negativ, og løsningen er eksponentiell vekst i stedet for en svingning.",
    },
    {
      question: "Hvilken periode har en pendel med lengde $2{,}00\\ \\text{m}$ ved små utslag?",
      options: ["$2{,}84\\ \\text{s}$", "$1{,}42\\ \\text{s}$", "$0{,}352\\ \\text{s}$", "$12{,}6\\ \\text{s}$"],
      explanation: "$T_p = 2\\pi\\sqrt{\\ell/g} = 2\\pi\\sqrt{0{,}2039} = 2{,}84\\ \\text{s}$. Verdien $1{,}42\\ \\text{s}$ er halvparten, altså tiden for én vei — perioden er hele svingningen fram og tilbake.",
    },
    {
      question: "Hva bestemmer amplituden i en fri harmonisk svingning?",
      options: ["Initialbetingelsene", "Fjærkonstanten", "Massen til loddet", "Egenfrekvensen"],
      explanation: "Likningen bestemmer bare $\\omega_0$; amplituden kommer fra hvor langt ut og hvor fort systemet ble satt i gang. Fjærkonstanten påvirker frekvensen, ikke hvor stort utslaget blir.",
    },
    {
      question: "Et lodd henger i en fjær og slippes fra fjærens avspente lengde. Hvor langt under avspent lengde kommer det?",
      options: ["$2mg/k$", "$mg/k$", "$mg/(2k)$", "$\\sqrt{mg/k}$"],
      explanation: "Startutslaget fra likevekt er $mg/k$, så amplituden er $mg/k$ og det laveste punktet ligger $2mg/k$ under avspent lengde. Svaret $mg/k$ er bare den statiske strekken, altså likevektsposisjonen, ikke vendepunktet.",
    },
    {
      question: "Hva skjer med den dempede vinkelfrekvensen $\\omega_d$ når dempingen øker fra null?",
      options: ["Den synker langsomt under $\\omega_0$", "Den stiger over $\\omega_0$", "Den holder seg lik $\\omega_0$", "Den blir umiddelbart null"],
      explanation: "$\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$ er alltid mindre enn $\\omega_0$, men fallet er lite ved svak demping — ved $\\gamma/\\omega_0 = 0{,}075$ er avviket bare $0{,}3\\ \\%$. Først ved kritisk demping når $\\omega_d$ null.",
    },
    {
      question: "Hvor i svingningen er akselerasjonen størst i tallverdi?",
      options: ["I vendepunktene", "I likevektspunktet", "Midt mellom likevekt og vendepunkt", "Akselerasjonen er konstant"],
      explanation: "Akselerasjonen er $-\\omega_0^2u$, altså proporsjonal med utslaget, og utslaget er størst i vendepunktene. I likevektspunktet er akselerasjonen null, men **farten** er størst — de to bytter plass.",
    },
    {
      question: "Hvorfor er svingetiden til en pendel uavhengig av kulas masse?",
      options: ["Massen står både i drivkraften og i treghetsleddet", "Fordi snordraget vokser proporsjonalt med kulas masse", "Fordi tyngdeakselerasjonen er konstant", "Fordi kula er punktformig"],
      explanation: "Likningen $m\\ell\\,d^2\\theta/dt^2 = -mg\\sin\\theta$ har $m$ på begge sider, så den forkortes bort. Samme mekanisme som gjør at alle legemer faller like fort i vakuum.",
    },
    {
      question: "En fjærsvingning har $\\omega_0 = 12{,}0\\ \\text{rad/s}$ og amplitude $0{,}050\\ \\text{m}$. Hva er den største farten?",
      options: ["$0{,}600\\ \\text{m/s}$", "$7{,}20\\ \\text{m/s}$", "$0{,}0042\\ \\text{m/s}$", "$240\\ \\text{m/s}$"],
      explanation: "$v_{\\max} = C\\omega_0 = 0{,}050 \\cdot 12{,}0 = 0{,}600\\ \\text{m/s}$, og den oppnås i likevektspunktet. Verdien $7{,}20\\ \\text{m/s}$ er $C\\omega_0^2$, som er den største **akselerasjonen** og har enheten $\\text{m/s}^2$.",
    },
    {
      question: "Når har den karakteristiske likningen $\\lambda^2 + (b/m)\\lambda + \\omega_0^2 = 0$ komplekse røtter?",
      options: ["Når $b < 2\\sqrt{km}$", "Når $b > 2\\sqrt{km}$", "Når $b = 2\\sqrt{km}$", "Når $b = 0$ og bare da"],
      explanation: "Komplekse røtter krever negativt uttrykk under rottegnet, altså $(b/2m)^2 < \\omega_0^2$, som gir $b < 2\\sqrt{km}$. Tilfellet $b = 0$ er inkludert i dette, men er langt fra det eneste — all svak demping gir svingninger.",
    },
    {
      question: "Hva er feilen i å linearisere kraften $F(x) = -kx - cx^2 - mg$ om $x = 0$?",
      options: ["$x = 0$ er ikke likevekten når tyngden er med", "Kraften er allerede lineær i origo", "Taylor-utvikling krever et positivt punkt", "Det kvadratiske leddet må stå alene"],
      explanation: "Lineariseringen forutsetter at det utvikles om et punkt der kraften er null, og tyngden flytter det punktet vekk fra origo. Utvikler du likevel om origo, får du feil effektiv fjærkonstant og dermed feil frekvens.",
    },
    {
      question: "Hva forteller innhyllingskurven $\\pm Ce^{-\\gamma t}$ i en dempet svingning?",
      options: ["Hvordan amplituden avtar med tiden", "Hvordan frekvensen avtar med tiden", "Hvor mange svingninger som gjenstår", "Hvor mye energi som er igjen ved start"],
      explanation: "Kurven berører svingningen i hvert vendepunkt og viser amplitudens forfall, med halveringstid $\\ln 2/\\gamma$. Frekvensen er derimot nesten uendret ved svak demping — det er amplituden dempingen angriper.",
    },
    {
      question: "En pendel svinger med utslag $45^\\circ$. Hva skjer med perioden sammenliknet med småvinkelformelen?",
      options: ["Den blir omtrent $4\\ \\%$ lengre", "Den blir omtrent $4\\ \\%$ kortere", "Den er nøyaktig den samme", "Den blir omtrent dobbelt så lang"],
      explanation: "Fordi $\\sin\\theta < \\theta$, er den tilbakedrivende kraften svakere enn den lineære modellen sier, og svingningen tar lengre tid. Korreksjonsleddet $\\theta_0^2/16$ gir $3{,}9\\ \\%$ ved $0{,}785\\ \\text{rad}$.",
    },
    {
      question: "Hvorfor er superposisjon av to løsninger også en løsning for $d^2u/dt^2 + \\omega_0^2u = 0$?",
      options: ["Fordi likningen er lineær og homogen", "Fordi begge løsningene er periodiske", "Fordi likningen er av andre orden", "Fordi konstantene kan velges fritt"],
      explanation: "I en lineær homogen likning gir derivasjon av en sum summen av de deriverte, og hvert ledd oppfyller likningen for seg. Egenskapen gjelder ikke for ikke-lineære likninger, uansett hvor pene løsningene måtte være.",
    },
  ],
  'fys1100-7-3': [
    {
      question: "Hva er terminalfarten for et legeme med lineær motstand, $m = 0{,}0200\\ \\text{kg}$ og $k_v = 0{,}0500\\ \\text{kg/s}$?",
      options: ["$3{,}92\\ \\text{m/s}$", "$0{,}400\\ \\text{m/s}$", "$2{,}50\\ \\text{m/s}$", "$0{,}255\\ \\text{m/s}$"],
      explanation: "$v_T = mg/k_v = 0{,}1962/0{,}0500 = 3{,}92\\ \\text{m/s}$ nedover. Verdien $0{,}400\\ \\text{m/s}$ er $m/k_v$ uten $g$, altså tidskonstanten forvekslet med en fart — enhetene avslører byttet.",
    },
    {
      question: "Hvorfor skrives kvadratisk motstand $-D\\lvert v\\rvert v$?",
      options: ["Fordi kraften må skifte fortegn samtidig med farten", "Fordi $v^2$ blir for stort ved høy fart", "Fordi $D$ alltid er et positivt tall", "Fordi enheten ellers ikke ville blitt newton i formelen"],
      explanation: "Motstanden skal alltid peke mot bevegelsen, og $-Dv^2$ peker samme vei uansett fartsretning. Enheten er derimot den samme i begge skrivemåter, så det er ikke der problemet ligger.",
    },
    {
      question: "Hva er terminalfarten med kvadratisk motstand, $m = 70{,}0\\ \\text{kg}$ og $D = 0{,}300\\ \\text{kg/m}$?",
      options: ["$47{,}8\\ \\text{m/s}$", "$2290\\ \\text{m/s}$", "$6{,}91\\ \\text{m/s}$", "$233\\ \\text{m/s}$"],
      explanation: "$v_T = \\sqrt{mg/D} = \\sqrt{2289} = 47{,}8\\ \\text{m/s}$. Verdien $2290\\ \\text{m/s}$ er tallet under rottegnet, altså kvadratrota glemt — og enheten der er $\\text{m}^2/\\text{s}^2$, ikke $\\text{m/s}$.",
    },
    {
      question: "Hvordan finner du terminalfarten uten å løse differensiallikningen?",
      options: ["Setter akselerasjonen lik null i bevegelseslikningen", "Setter startfarten lik null i selve bevegelseslikningen", "Integrerer likningen over hele falltiden", "Deriverer kraftuttrykket med hensyn på farten"],
      explanation: "Terminalfarten er likevektsløsningen, altså den konstante løsningen der $dv/dt = 0$ og kreftene balanserer. Setter du farten lik null i stedet, får du startakselerasjonen $g$, som er en helt annen opplysning.",
    },
    {
      question: "Hva blir farten etter én tidskonstant for et legeme som slippes fra ro med lineær motstand?",
      options: ["$63\\ \\%$ av $v_T$", "$50\\ \\%$ av $v_T$", "$37\\ \\%$ av $v_T$", "$95\\ \\%$ av $v_T$"],
      explanation: "$v(\\tau) = v_T(1 - e^{-1}) = 0{,}632\\,v_T$. Verdien $37\\ \\%$ er $e^{-1}$ selv, altså hvor mye som **gjenstår** opp til terminalfarten, ikke hvor mye som er nådd.",
    },
    {
      question: "Hva er akselerasjonen i det øyeblikket et legeme slippes fra ro i luft?",
      options: ["$g$", "Null", "$g/2$", "Avhenger av dragkoeffisienten"],
      explanation: "Ved $v = 0$ er motstanden null uansett modell, så bare tyngden virker. Dragkoeffisienten påvirker hvor raskt akselerasjonen deretter avtar, men ikke startverdien.",
    },
    {
      question: "Hvilken enhet har $k_v$ i den lineære modellen $F_D = -k_v v$?",
      options: ["$\\text{kg/s}$", "$\\text{kg/m}$", "$\\text{N/m}$", "$\\text{kg}\\cdot\\text{m/s}$"],
      explanation: "Produktet $k_v v$ skal bli en kraft, så $[k_v] = \\text{N}/(\\text{m/s}) = \\text{kg/s}$. Enheten $\\text{kg/m}$ hører til $D$ i den kvadratiske modellen, og forveksling av de to gir feil terminalfart.",
    },
    {
      question: "Hva gir $v(t) = v_T(1 - e^{-gt/v_T})$ når $t$ er liten?",
      options: ["Fritt fall, $v \\approx gt$", "Konstant fart $v_T$", "Null fart hele veien", "En kvadratisk vekst i tiden"],
      explanation: "Taylor-utviklingen $e^{-x} \\approx 1 - x$ gir $v \\approx gt$, som er fritt fall — motstanden er null når farten er null. Konstant $v_T$ er tvert imot grensen den andre veien, når $t$ blir stor.",
    },
    {
      question: "En fallskjermhopper som veier dobbelt så mye, med samme $D$. Hvordan endres terminalfarten?",
      options: ["Den blir $\\sqrt{2}$ ganger så stor", "Den blir dobbelt så stor", "Den blir uendret", "Den blir halvert"],
      explanation: "Med kvadratisk motstand er $v_T = \\sqrt{mg/D}$, så farten vokser som kvadratrota av massen. Den lineære doblingen ville gjeldt hvis motstanden var proporsjonal med farten, altså i den lineære modellen.",
    },
    {
      question: "Hva er $\\tau$ i uttrykket $v(t) = v_T(1 - e^{-t/\\tau})$ for lineær motstand?",
      options: ["$m/k_v$", "$k_v/m$", "$mg/k_v$", "$2\\pi\\sqrt{m/k_v}$"],
      explanation: "Tidskonstanten er $\\tau = m/k_v$, og siden $v_T = mg/k_v$ er den også lik $v_T/g$. Uttrykket $mg/k_v$ er terminalfarten selv og har enhet $\\text{m/s}$, ikke sekund.",
    },
    {
      question: "Hvorfor kan et skrått kast med luftmotstand ikke løses analytisk?",
      options: ["Komponentlikningene kobles gjennom den samlede farten", "Fordi tyngdeakselerasjonen varierer med høyden over bakken", "Fordi likningen blir av tredje orden", "Fordi startbetingelsene er ukjente"],
      explanation: "Motstanden i hver retning inneholder $v = \\sqrt{v_x^2+v_y^2}$, så $x$- og $y$-likningene kan ikke løses hver for seg. Ordenen er fortsatt to i hver komponent — det er koblingen, ikke ordenen, som er problemet.",
    },
    {
      question: "Hva er integralet $\\int dv/(v_T - v)$?",
      options: ["$-\\ln\\lvert v_T - v\\rvert + C$", "$\\ln\\lvert v_T - v\\rvert + C$", "$\\ln\\lvert v_T\\rvert - \\ln\\lvert v\\rvert + C$", "$(v_T - v)^{-2} + C$"],
      explanation: "Den indre funksjonen $v_T - v$ har derivert $-1$, så kjerneregelen gir et minustegn. Uten det vokser løsningen uten grense i stedet for å flate ut mot $v_T$ — og det er den vanligste fortegnsfeilen i hele delen.",
    },
    {
      question: "Hvor lang tid tar det før farten når $95\\ \\%$ av $v_T$ ved lineær motstand?",
      options: ["Omtrent tre tidskonstanter", "Omtrent én tidskonstant", "Omtrent ti tidskonstanter", "Farten når aldri $95\\ \\%$"],
      explanation: "$-\\ln(0{,}05) = 3{,}0$, så $t \\approx 3\\tau$. Etter én tidskonstant er bare $63\\ \\%$ nådd, og terminalfarten selv nås aldri eksakt — men $95\\ \\%$ nås i endelig tid.",
    },
    {
      question: "Har den kvadratiske dragmodellen i én dimensjon en lukket løsning når legemet faller fra ro?",
      options: ["Ja, $v = v_T\\tanh(gt/v_T)$", "Nei, den må alltid løses numerisk", "Bare hvis $D$ er svært liten", "Bare hvis massen er kjent"],
      explanation: "Likningen er separabel så lenge farten ikke skifter fortegn, og integrasjonen gir en $\\tanh$. Numerikk blir nødvendig først i to dimensjoner, eller når legemet snur og absoluttverdien får betydning.",
    },
    {
      question: "En kule kastes rett opp med luftmotstand. Hvordan er farten ved retur sammenliknet med startfarten?",
      options: ["Lavere, fordi motstanden bremser i begge faser", "Like stor, fordi høyden er den samme", "Høyere, fordi motstanden hjelper på vei ned", "Avhenger av om motstanden er lineær"],
      explanation: "Luftmotstanden peker alltid mot bevegelsen og gjør derfor negativt arbeid både opp og ned, så mekanisk energi går tapt. Uten motstand ville fartene vært like, men da ville det ikke vært noen motstand å diskutere.",
    },
    {
      question: "Hva er farten når luftmotstanden er akkurat halvparten av tyngden, i den lineære modellen?",
      options: ["$v_T/2$", "$v_T/\\sqrt{2}$", "$v_T/4$", "$2v_T$"],
      explanation: "Motstanden $k_v v$ er halve tyngden $k_v v_T$ når $v = v_T/2$. I den kvadratiske modellen ville svaret vært $v_T/\\sqrt{2}$, siden motstanden der vokser med kvadratet av farten.",
    },
    {
      question: "Hvor mange uavhengige målinger trengs for å bestemme både $v_T$ og $\\tau$ fra en fallkurve?",
      options: ["To", "En", "Tre", "Fire"],
      explanation: "Modellen har to ukjente parametre, og hver måling gir én likning. Med bare ett målepunkt går det uendelig mange kurver av samme form gjennom punktet.",
    },
    {
      question: "Hva blir motstandsleddet $-D\\lvert v\\rvert v$ når farten er negativ?",
      options: ["Positivt, altså rettet i positiv retning", "Negativt, altså rettet i negativ retning", "Null uansett", "Uendret fra det positive tilfellet"],
      explanation: "Med $v < 0$ er $\\lvert v\\rvert v < 0$, og med minustegnet foran blir hele leddet positivt — altså motsatt av bevegelsen, som det skal være. Det er nettopp denne fortegnsvekslingen $-Dv^2$ ikke klarer.",
    },
    {
      question: "Hvilken av disse er en riktig klassifisering av $m\\,dv/dt = mg - k_v v$?",
      options: ["Første orden, lineær, inhomogen, separabel", "Andre orden, lineær, homogen, separabel", "Første orden, ikke lineær, homogen", "Andre orden, ikke lineær, inhomogen"],
      explanation: "Høyeste deriverte er $dv/dt$, den ukjente står i første potens, og leddet $mg$ inneholder ikke $v$. At likningen også er separabel, er det som gir metoden — separabel og lineær er to uavhengige egenskaper.",
    },
    {
      question: "Et legeme har $v_T = 40\\ \\text{m/s}$ og faller i $0{,}20\\ \\text{s}$. Hva er farten ved slutten?",
      options: ["Langt under $v_T$, fordi falltiden er kort", "Nøyaktig $40\\ \\text{m/s}$", "Nøyaktig halvparten av $v_T$", "Over $v_T$, siden fallet er fritt i starten"],
      explanation: "Tidskonstanten er $\\tau = v_T/g = 4{,}1\\ \\text{s}$, så $0{,}20\\ \\text{s}$ er en brøkdel av den, og farten er nær fritt fall: omtrent $2\\ \\text{m/s}$. Å svare $v_T$ er å forveksle terminalfarten med sluttfarten.",
    },
  ],
  'fys1100-7-4': [
    {
      question: "Hva er andre steg i løsningsoppskriften for en ODE-oppgave?",
      options: ["Klassifisere likningen", "Sette opp den karakteristiske likningen", "Bruke initialbetingelsene på løsningen", "Kontrollere svaret i grensetilfellene"],
      explanation: "Klassifiseringen kommer rett etter oppsettet og er selvstendig poenggivende — den avgjør dessuten hvilken metode som i det hele tatt gjelder. Karakteristisk likning hører til steg tre, og bare for andreordens lineære homogene likninger.",
    },
    {
      question: "Hvorfor må en hengende fjærs bevegelseslikning substitueres før oppskriften brukes?",
      options: ["Tyngdeleddet gjør likningen inhomogen", "Fordi tyngden endrer fjærkonstanten", "Fordi ordenen ellers blir feil", "Fordi løsningen ellers får feil frekvens"],
      explanation: "Oppskriften med karakteristisk likning gjelder for homogene likninger, og tyngden er et ledd uten den ukjente i seg. Frekvensen er derimot **uendret** av tyngden — det er nettopp det substitusjonen viser.",
    },
    {
      question: "Et lodd med $m = 0{,}300\\ \\text{kg}$ henger i en fjær med $k = 30{,}0\\ \\text{N/m}$. Hva er $T_p$?",
      options: ["$0{,}628\\ \\text{s}$", "$10{,}0\\ \\text{s}$", "$0{,}100\\ \\text{s}$", "$1{,}59\\ \\text{s}$"],
      explanation: "$\\omega_0 = \\sqrt{k/m} = 10{,}0\\ \\text{rad/s}$ og $T_p = 2\\pi/10{,}0 = 0{,}628\\ \\text{s}$. Verdien $10{,}0$ er egenfrekvensen selv, som har enhet $\\text{rad/s}$ og ikke sekund.",
    },
    {
      question: "En kule slippes fra ro med lineær motstand, $m = 25{,}0\\ \\text{g}$, $k_v = 0{,}100\\ \\text{kg/s}$. Hva er tidskonstanten?",
      options: ["$0{,}250\\ \\text{s}$", "$2{,}45\\ \\text{s}$", "$4{,}00\\ \\text{s}$", "$0{,}0250\\ \\text{s}$"],
      explanation: "$\\tau = m/k_v = 0{,}0250/0{,}100 = 0{,}250\\ \\text{s}$. Verdien $2{,}45$ er terminalfarten $mg/k_v$ i meter per sekund, altså riktig tall for et helt annet spørsmål.",
    },
    {
      question: "Hvilken metode peker klassifiseringen «andre orden, lineær, homogen» på?",
      options: ["Karakteristisk likning", "Separasjon av variable", "Numerisk integrasjon", "Direkte integrasjon to ganger"],
      explanation: "Prøveløsningen $e^{\\lambda t}$ gjør likningen om til en andregradslikning i $\\lambda$, og oppskriften for de tre rot-tilfellene står i Rottmann. Separasjon fungerer bare på førsteordens likninger.",
    },
    {
      question: "En pendel har $\\ell = 0{,}450\\ \\text{m}$. Hva er svingeperioden for små utslag?",
      options: ["$1{,}35\\ \\text{s}$", "$4{,}67\\ \\text{s}$", "$0{,}214\\ \\text{s}$", "$2{,}69\\ \\text{s}$"],
      explanation: "$T_p = 2\\pi\\sqrt{\\ell/g} = 2\\pi\\sqrt{0{,}04587} = 1{,}35\\ \\text{s}$. Verdien $4{,}67$ er $\\omega_0$ i radianer per sekund, altså frekvensen forvekslet med perioden.",
    },
    {
      question: "Hva er kritisk demping for $m = 1{,}20\\ \\text{kg}$ og $k = 75{,}0\\ \\text{N/m}$?",
      options: ["$19{,}0\\ \\text{kg/s}$", "$90{,}0\\ \\text{kg/s}$", "$9{,}49\\ \\text{kg/s}$", "$2{,}50\\ \\text{kg/s}$"],
      explanation: "$b_{\\text{kr}} = 2\\sqrt{km} = 2\\sqrt{90{,}0} = 19{,}0\\ \\text{kg/s}$. Verdien $9{,}49$ er $\\sqrt{km}$ uten totallet, altså halvparten av den kritiske dempingen.",
    },
    {
      question: "Hvordan finner du frekvensen for små svingninger om en likevekt i et potensial $U(x)$?",
      options: ["$\\omega = \\sqrt{U''(x_0)/m}$", "$\\omega = \\sqrt{U(x_0)/m}$", "$\\omega = \\sqrt{-U'(x_0)/m}$", "$\\omega = U''(x_0)/m$"],
      explanation: "Den effektive fjærkonstanten er krumningen i bunnen, altså $U''(x_0)$. Den førstederiverte er null i en likevekt per definisjon, så den kan umulig gi frekvensen.",
    },
    {
      question: "Hva er det avgjørende ved rekkefølgen i Euler–Cromer-oppdateringen?",
      options: ["Farten oppdateres først, og den nye farten brukes på posisjonen", "Posisjonen oppdateres først, og den nye posisjonen brukes på farten", "Begge oppdateres samtidig med gamle verdier", "Akselerasjonen oppdateres til slutt"],
      explanation: "Å bruke den **oppdaterte** farten i posisjonssteget er nettopp det som gjør metoden tilnærmet energibevarende, slik at en svingning ikke får kunstig voksende amplitude. Bruker du gammel fart, har du Forward Euler, som lekker energi.",
    },
    {
      question: "Et lodd svinger med $u(t) = 0{,}060\\cos(14t) - 0{,}020\\sin(14t)$ i meter. Hva var startfarten?",
      options: ["$-0{,}280\\ \\text{m/s}$", "$-0{,}020\\ \\text{m/s}$", "$+0{,}840\\ \\text{m/s}$", "$0$"],
      explanation: "Den deriverte i null er $B\\omega_0 = -0{,}020 \\cdot 14 = -0{,}280\\ \\text{m/s}$, altså nedover. Å svare $-0{,}020$ er å lese av konstanten $B$ i stedet for farten — og enhetene er da meter, ikke meter per sekund.",
    },
    {
      question: "En student skriver $T_p = 2\\pi\\sqrt{k/m}$ for en fjær. Hvordan avslører du feilen raskest?",
      options: ["Enhetssjekk: uttrykket får enhet $1/\\text{s}$", "Ved å sette inn tall og se om svaret er stort", "Ved å derivere uttrykket", "Ved å sammenlikne med pendelformelen"],
      explanation: "$\\sqrt{k/m}$ har enhet $1/\\text{s}$ og er nettopp $\\omega_0$; perioden er $2\\pi$ delt på den, altså $2\\pi\\sqrt{m/k}$. En enhetssjekk tar fem sekunder og virker uansett hvilke tall oppgaven har.",
    },
    {
      question: "Hvilken av likningene kan IKKE løses ved separasjon av variable?",
      options: ["$m\\,d^2x/dt^2 = -kx$", "$m\\,dv/dt = mg - k_v v$", "$m\\,dv/dt = mg - Dv^2$ med $v > 0$", "$dv/dt = -\\lambda v$"],
      explanation: "Separasjon forutsetter en førsteordens likning, og fjærlikningen er av andre orden — den krever karakteristisk likning. De tre andre er alle førsteordens og lar seg separere, også den ikke-lineære.",
    },
  ],
  'fys1100-8-1': [
    {
      question: "Hva kjennetegner Euler–Cromer sammenliknet med Forward Euler?",
      options: ["Farten oppdateres først, og den nye farten brukes på posisjonen", "Posisjonen oppdateres først, og den nye posisjonen brukes på farten", "Begge oppdateres samtidig fra tilstanden i forrige tidspunkt", "Akselerasjonen regnes ut midt i steget i stedet for i starten"],
      explanation: "Euler–Cromer bytter rekkefølge og bruker den oppdaterte farten $v_{i+1}$ i posisjonslinja. Svaret om at begge oppdateres fra forrige tilstand, beskriver nettopp Forward Euler — og det er den kansellerende feilen fra den nye farten som gjør Euler–Cromer tilnærmet energibevarende.",
    },
    {
      question: "Hvorfor går løkka over `range(N - 1)` og ikke `range(N)`?",
      options: ["Fordi løkka skriver til indeks $i+1$, og siste plass er $N-1$", "Fordi det første tidspunktet allerede er regnet ut på forhånd", "Fordi Python teller indekser fra én og ikke fra null", "Fordi den siste verdien alltid kastes bort som unøyaktig"],
      explanation: "Med $N$ punkt finnes indeksene $0$ til $N-1$, og løkka skriver til $i+1$ — derfor må $i$ stoppe på $N-2$. Python teller riktignok fra null, men det er ikke grunnen; grunnen er at antall steg alltid er én mindre enn antall punkt.",
    },
    {
      question: "En kode for en fjærpendel gir amplitude som vokser jevnt gjennom simuleringen. Hva er mest sannsynlig galt?",
      options: ["Posisjonen oppdateres med den gamle farten, altså Forward Euler", "Steglengden $dt$ er valgt for liten i forhold til perioden", "Initialbetingelsene er satt til null i begge tabellene", "Massen er glemt i nevneren i akselerasjonslinja"],
      explanation: "Voksende amplitude i et konservativt system er energidrift, og det er signaturen til Forward Euler. Nullstilte initialbetingelser ville gitt en kode som står bom stille, ikke en som vokser, og for liten $dt$ gjør aldri en løsning dårligere.",
    },
    {
      question: "Hvor mange av de fem poengene i en typisk kodedeloppgave ligger i akselerasjonsuttrykket?",
      options: ["Tre", "Ett", "Fem", "To"],
      explanation: "Sensorveiledningene i H2023, V2024 og V2025 fordeler poengene som 1 for initialbetingelsene, 3 for akselerasjonsuttrykket og 1 for løkka. Akselerasjonslinja er det eneste stedet fysikken i akkurat den oppgaven står, og derfor tyngst vektet.",
    },
    {
      question: "Bevegelseslikningen er $m\\,d^2x/dt^2 = -kx - mg$. Hvilken akselerasjonslinje er riktig?",
      options: ["`a = -(k/m)*x[i] - g`", "`a = -(k/m)*x[i] - m*g`", "`a = -k*x[i] - g`", "`a = (k/m)*x[i] - g`"],
      explanation: "Del hele likningen på $m$: leddet $-kx$ blir $-(k/m)x$, og leddet $-mg$ blir $-g$ fordi massen forkortes. Varianten med `- m*g` har glemt å dele tyngdeleddet, og varianten uten minus foran $k$ beskriver en frastøtende fjær.",
    },
    {
      question: "Hva er sammenhengen mellom antall punkt $N$, steglengden $dt$ og sluttiden?",
      options: ["$t_{\\text{slutt}} = (N-1)\\,dt$", "$t_{\\text{slutt}} = N\\,dt$", "$t_{\\text{slutt}} = N/dt$", "$t_{\\text{slutt}} = (N+1)\\,dt$"],
      explanation: "Med $N$ punkt er det $N-1$ mellomrom, og hvert mellomrom har lengde $dt$. Formen $N\\,dt$ er den vanligste avrundingen, og den er ubetydelig for store $N$ — men den er likevel feil, og den avslører at telleforholdet ikke er gjennomtenkt.",
    },
    {
      question: "Hva skriver du i indeks 0 for en kloss som passerer likevekt med farten $0{,}400\\ \\text{m/s}$?",
      options: ["`x[0] = 0.0` og `v[0] = 0.400`", "`x[0] = 0.400` og `v[0] = 0.0`", "`x[0] = 0.0` og `v[0] = 0.0`", "`x[0] = 0.400` og `v[0] = 0.400`"],
      explanation: "«Passerer likevekt» gir posisjon null, og «med farten $0{,}400\\ \\text{m/s}$» gir den farten. Å sette begge til null er den vanligste vanefeilen, og den gir en kode som står bom stille fordi ingenting setter bevegelsen i gang.",
    },
    {
      question: "Hva menes med at Euler–Cromer er en førsteordens metode?",
      options: ["Feilen i sluttsvaret er tilnærmet proporsjonal med $dt$", "Metoden løser bare differensiallikninger av første orden", "Bare den første deriverte inngår i oppdateringslinjene", "Feilen i sluttsvaret er tilnærmet proporsjonal med $dt^2$"],
      explanation: "Ordenen sier hvordan den samlede feilen skalerer: halvert steglengde gir omtrent halvert feil. At metoden håndterer andreordens likninger via tilstandsformen, er en annen sak, og feilen per enkeltsteg går som $dt^2$ — det er summen over $t/dt$ steg som gir $dt$.",
    },
    {
      question: "Hvorfor skrives akselerasjonen `a` uten indeks mens farten alltid har indeks?",
      options: ["Fordi `a` regnes på nytt hvert steg og ikke skal lagres", "Fordi akselerasjonen er konstant gjennom hele simuleringen", "Fordi `a` er en skalar mens `v` alltid er en vektor", "Fordi indeks på `a` ville gitt feil resultat i posisjonslinja"],
      explanation: "Akselerasjonen brukes umiddelbart og trengs ikke etterpå, mens farten må lagres for hvert tidspunkt. Å skrive `a[i]` er også helt riktig — bare mer arbeid for hånd — så det er ikke slik at indeks der ville ødelagt noe.",
    },
    {
      question: "En simulering gir feil svar. Du halverer $dt$ og svaret endrer seg ikke. Hva forteller det?",
      options: ["Feilen ligger i modellen, ikke i diskretiseringen", "Steglengden var fortsatt for stor til å gi utslag", "Metoden er energibevarende og trenger ingen finere steg", "Koden er riktig, og avviket skyldes avrundingsfeil"],
      explanation: "En diskretiseringsfeil krymper når $dt$ krymper; en modellfeil står helt urørt. At svaret ikke rører seg, peker derfor på et manglende kraftledd, et galt fortegn eller en feil initialbetingelse.",
    },
    {
      question: "Hva er den mekaniske energien til en fjærpendel med masse $m$, fjærkonstant $k$, utslag $x$ og fart $v$?",
      options: ["$\\tfrac12 mv^2 + \\tfrac12 kx^2$", "$\\tfrac12 mv^2 - \\tfrac12 kx^2$", "$mv^2 + kx^2$", "$\\tfrac12 mv^2 + \\tfrac12 kx$"],
      explanation: "Kinetisk energi er $\\tfrac12 mv^2$ og fjærens potensielle energi $\\tfrac12 kx^2$; begge er positive og legges sammen. Varianten med minus ville tillatt negativ total energi for en fjær, og varianten uten kvadrat på $x$ har feil enhet.",
    },
    {
      question: "Hvilken linje er skrevet med brudd på indeksdisiplinen?",
      options: ["`v = v[i] + a*dt`", "`v[i+1] = v[i] + a*dt`", "`x[i+1] = x[i] + v[i+1]*dt`", "`a = -(k/m)*x[i]`"],
      explanation: "Venstre side mangler indeks, så hele fartsarrayet erstattes av ett tall og forløpet går tapt. Dette er felle #5 i feilregisteret og koster typisk to poeng, selv når meningen er åpenbar for en leser.",
    },
    {
      question: "En pendel med $\\ell = 0{,}800\\ \\text{m}$ svinges med startutslag $0{,}600\\ \\text{rad}$. Hva sier den numeriske løsningen om perioden?",
      options: ["Den er om lag $2\\ \\%$ lengre enn småvinkelformelen gir", "Den er om lag $2\\ \\%$ kortere enn småvinkelformelen gir", "Den er nøyaktig den samme som småvinkelformelen gir", "Den er om lag $16\\ \\%$ lengre enn småvinkelformelen gir"],
      explanation: "Kjøringen gir $1{,}8355\\ \\text{s}$ mot $1{,}7943\\ \\text{s}$ fra $2\\pi\\sqrt{\\ell/g}$, altså $2{,}3\\ \\%$ lengre — perioden vokser med utslaget fordi $\\sin\\theta < \\theta$. Avviket $16\\ \\%$ hører til et langt større utslag, om lag $1{,}5\\ \\text{rad}$.",
    },
    {
      question: "Hva er hovedgrunnen til at initialbetingelser gir egne poeng på eksamen?",
      options: ["De er det eneste stedet oppgavens starttilstand kommer inn", "De bestemmer hvilken numerisk metode koden faktisk bruker", "De avgjør hvor liten steglengden $dt$ må velges", "De sikrer at tabellene får riktig lengde før løkka"],
      explanation: "Differensiallikningen er loven, og initialbetingelsene plukker ut den ene bevegelsen loven beskriver i denne oppgaven. Metodevalget ligger i rekkefølgen på oppdateringene, og tabellengden i valget av $N$ — begge deler er uavhengig av startverdiene.",
    },
    {
      question: "Hvordan lager du et analytisk kontrollcase for en kode med luftmotstand?",
      options: ["Sett dragkoeffisienten til null og sammenlikn med den kjente løsningen", "Sett massen til null og se om koden fortsatt gir endelige tall", "Øk dragkoeffisienten kraftig og sjekk at farten går mot null", "Kjør koden to ganger med samme $dt$ og sammenlikn resultatene"],
      explanation: "Å slå av det leddet som gjør problemet vanskelig, gir et tilfelle du kan regne ut for hånd, og det tester hele infrastrukturen. Å kjøre samme kode to ganger med samme steglengde gir per definisjon samme svar og tester ingenting.",
    },
    {
      question: "Hvilken tommelfingerregel gjelder for valg av steglengde i dette emnet?",
      options: ["Et par tusen ganger mindre enn systemets karakteristiske tid", "Om lag tjue ganger mindre enn systemets karakteristiske tid", "Så liten at antallet steg blir minst en million", "Nøyaktig lik systemets periode delt på antall punkt"],
      explanation: "Med et par tusen steg per svingeperiode eller falltid er både amplituden og perioden godt gjengitt. Tjue steg per periode gir en kurve der selve formen er borte, og en million steg er sjelden nødvendig og bare kostbart.",
    },
    {
      question: "Hvorfor er metodevalget verdt å begrunne i tekst, og ikke bare i koden?",
      options: ["Sensorveiledningene skiller på om mekanismen er skrevet ut", "Koden alene regnes ikke som en gyldig besvarelse på eksamen", "Begrunnelsen erstatter kravet om riktige initialbetingelser", "Uten begrunnelse godtas ikke andre programmeringsspråk"],
      explanation: "Sensorveiledningene i H2023, V2024 og V2025 trekker fram forskjellen på en kandidat som skriver riktig løkke og en som også sier hvorfor. Alle språk godtas uansett, og begrunnelsen kommer i tillegg til — ikke i stedet for — initialbetingelsene.",
    },
    {
      question: "En kode for en fjær gir bare nuller i alle tidspunkt, uten feilmelding. Hva er mest sannsynlig?",
      options: ["Initialbetingelsene mangler, så systemet starter i likevekt uten fart", "Steglengden er så liten at ingenting rekker å skje", "Akselerasjonslinja har fått feil fortegn på fjærkraften", "Tabellene ble opprettet etter at løkka hadde kjørt ferdig"],
      explanation: "`np.zeros(N)` fyller alt med null, og uten `x[0]` og `v[0]` blir akselerasjonen null i første steg og alt står stille for alltid. Feil fortegn på fjærkraften ville gitt det motsatte symptomet: tall som vokser uten grense i løpet av få steg.",
    },
  ],
  'fys1100-8-2': [
    {
      question: "Hvorfor skrives kvadratisk drag `abs(v[i])*v[i]` og ikke `v[i]**2` i en éndimensjonal kode?",
      options: ["Fordi kraften må snu når farten snur", "Fordi kvadratet blir numerisk for stort ved høy fart", "Fordi absoluttverdien gir riktig enhet på kraften", "Fordi `v[i]**2` ikke lar seg skrive for hånd"],
      explanation: "Kvadratet er positivt uansett fortegn, så med `v[i]**2` peker motstanden samme vei i begge faser og driver et fallende legeme fortere ned. Enheten er derimot identisk i begge skrivemåtene, så det er ikke der problemet ligger.",
    },
    {
      question: "Hvor mange tabeller trengs i en kode for et todimensjonalt kast?",
      options: ["Fire: `x`, `y`, `vx` og `vy`", "To: `x` og `v`", "Tre: `x`, `y` og `v`", "Seks: også `ax` og `ay`"],
      explanation: "Hver romlig retning trenger både en posisjon og en fart, altså fire tabeller. Akselerasjonene regnes på nytt hvert steg og trenger ingen tabell, og en samlet fart holder ikke — retningen ville gått tapt.",
    },
    {
      question: "Hva koster det å ta med bare én romlig komponent i en 2D-kode?",
      options: ["Maks 2 av 5 poeng på deloppgaven", "Ett poeng, som ved manglende absoluttverdi", "To poeng, som ved manglende indeks", "Ingenting, hvis resten av koden er riktig"],
      explanation: "Sensorveiledningene i H2023, V2024 og V2025 setter et tak på to poeng når en romlig retning mangler helt. Det er strengere enn både absoluttverdi-trekket og indeks-trekket, fordi koden da beskriver et annet problem.",
    },
    {
      question: "Hva er riktig uttrykk for $x$-komponenten av dragkraften i to dimensjoner?",
      options: ["$-D\\,v\\,v_x$ med $v = \\sqrt{v_x^2+v_y^2}$", "$-D\\,v_x^2$ uansett fortegn på $v_x$", "$-D\\lvert v_x\\rvert v_y$ med kryssede komponenter", "$-D\\,v\\,v_y$ med $v = \\sqrt{v_x^2+v_y^2}$"],
      explanation: "Kraften peker langs $-\\mathbf{v}$, så komponenten er $-D$ ganget med fartens tallverdi og den tilhørende fartskomponenten. Uttrykket $-Dv_x^2$ mister både fortegnsbyttet og koblingen til den andre komponenten.",
    },
    {
      question: "Hva må regnes ut FØRST inne i løkka i en 2D-kode med drag?",
      options: ["Fartens tallverdi $v$, siden den inngår i begge akselerasjonene", "Posisjonene, siden akselerasjonen avhenger av hvor legemet er", "Begge fartskomponentene, siden de skal oppdateres først", "Steglengden, som må justeres etter hvor fort legemet går"],
      explanation: "Tallverdien av farten er fellesfaktoren i begge akselerasjonskomponentene og må stå ferdig før noen av dem regnes. Oppdaterer du en fartskomponent først, blander du to tidspunkt i samme uttrykk.",
    },
    {
      question: "En ball har $v_x = 18{,}0\\ \\text{m/s}$ og $v_y = -12{,}0\\ \\text{m/s}$. Hva er fartens tallverdi?",
      options: ["$21{,}6\\ \\text{m/s}$", "$6{,}00\\ \\text{m/s}$", "$30{,}0\\ \\text{m/s}$", "$468\\ \\text{m/s}$"],
      explanation: "$v = \\sqrt{18{,}0^2+12{,}0^2} = \\sqrt{468} = 21{,}6\\ \\text{m/s}$. Verdien $468$ er tallet under rottegnet og har enheten $\\text{m}^2/\\text{s}^2$, mens $30{,}0$ er summen av tallverdiene — som bare ville stemt hvis komponentene var parallelle.",
    },
    {
      question: "Hva skjer med rekkevidden til et kast når kvadratisk luftmotstand tas med?",
      options: ["Den blir vesentlig kortere, og banen blir usymmetrisk", "Den blir kortere, men banen forblir en symmetrisk parabel", "Den blir lengre, fordi lufta bærer legemet en stund", "Den er uendret, siden motstanden virker likt begge veier"],
      explanation: "Motstanden spiser av den vannrette farten hele veien, og fordi bremsingen er størst tidlig i banen, blir nedturen brattere enn oppturen. Symmetrien gjelder bare uten motstand, der $v_x$ er konstant.",
    },
    {
      question: "Hvor ligger den optimale utkastvinkelen når kvadratisk luftmotstand er med?",
      options: ["Lavere enn $45^\\circ$", "Nøyaktig på $45^\\circ$ som uten motstand", "Høyere enn $45^\\circ$", "Ved $60^\\circ$ uansett dragkoeffisient"],
      explanation: "En høy bane bruker lang tid i lufta, og lang tid i lufta betyr lang tid med bremsing, så de høye banene straffes hardest. For ballen i kapitlet ligger optimum ved om lag $41$–$42^\\circ$, og den synker videre når dragkoeffisienten vokser.",
    },
    {
      question: "Hvorfor har et 2D-kast med kvadratisk drag ingen løsning i elementære funksjoner?",
      options: ["Komponentlikningene kobles gjennom farten $\\sqrt{v_x^2+v_y^2}$", "Fordi luftmotstanden endrer seg med høyden over bakken", "Fordi akselerasjonen ikke er konstant gjennom bevegelsen", "Fordi tyngden og motstanden har ulike angrepspunkt"],
      explanation: "Hver komponentlikning inneholder begge de ukjente fartskomponentene gjennom fellesfaktoren, og de kan derfor ikke løses hver for seg. At akselerasjonen ikke er konstant, gjelder også for den lineære modellen, som likevel har en lukket løsning.",
    },
    {
      question: "Hvilken kontroll tester dragleddet i en 2D-kode?",
      options: ["Et 1D-fall sammenliknet med $v_T\\tanh(gt/v_T)$", "En kjøring med $D = 0$ mot kastformlene", "En kjøring med halvert steglengde $dt$", "En kjøring der startvinkelen settes til null"],
      explanation: "Med $D = 0$ er dragleddet slått helt av, så den kontrollen tester alt annet enn nettopp det. Bare et case der dragleddet faktisk er i bruk og fasiten er kjent, kan avsløre en feil der.",
    },
    {
      question: "Hvordan dekomponeres en startfart $v_0$ i vinkelen $\\theta$ over vannrett?",
      options: ["$v_{x,0} = v_0\\cos\\theta$ og $v_{y,0} = v_0\\sin\\theta$", "$v_{x,0} = v_0\\sin\\theta$ og $v_{y,0} = v_0\\cos\\theta$", "$v_{x,0} = v_0\\tan\\theta$ og $v_{y,0} = v_0$", "$v_{x,0} = v_0/\\cos\\theta$ og $v_{y,0} = v_0/\\sin\\theta$"],
      explanation: "Vinkelen måles fra vannrett, så nabokateten hører til $x$-retningen og motstående katet til $y$-retningen. Byttet mellom sinus og cosinus gir riktig totalfart, men feil bane — og er en av de vanligste kastefeilene.",
    },
    {
      question: "Hva er $y$-komponenten av akselerasjonen i et kast med kvadratisk drag?",
      options: ["$-g - (D/m)\\,v\\,v_y$", "$-g + (D/m)\\,v\\,v_y$", "$-g - (D/m)\\,v_y^2$", "$-(D/m)\\,v\\,v_y$"],
      explanation: "Tyngden gir $-g$ etter deling på massen, og dragleddet har samme form som i $x$-retningen, bare med $v_y$. Formen med $v_y^2$ mister fortegnsbyttet etter toppunktet, og formen uten $-g$ har glemt tyngden helt.",
    },
    {
      question: "Hvorfor skrives fartens tallverdi `v` uten indeks i en 2D-kode?",
      options: ["Den er en mellomregning som lages på nytt hvert steg", "Den er en skalar, og skalarer får aldri indeks i kode", "Den er konstant gjennom hele simuleringen", "Den skal ikke brukes i akselerasjonslinjene i det hele tatt"],
      explanation: "Regelen er at det som beskriver en tilstand og skal kunne leses av etterpå, får indeks; en mellomregning som brukes og kastes, trenger det ikke. At `v` er en skalar er sant, men irrelevant — også skalarer lagres med indeks når de er tilstandsvariabler.",
    },
    {
      question: "En ball kastes opp og lander i samme høyde med luftmotstand. Hvordan er nedslagsfarten?",
      options: ["Lavere enn startfarten, fordi drag gjør negativt arbeid begge veier", "Lik startfarten, fordi høyden er den samme ved start og slutt", "Høyere enn startfarten, fordi lufta hjelper til på vei ned", "Lik startfarten, men med motsatt retning på begge komponenter"],
      explanation: "Dragkraften peker alltid mot bevegelsen, så arbeidet er negativt både på vei opp og på vei ned. Likheten mellom start- og sluttfart gjelder bare uten motstand, der mekanisk energi er bevart.",
    },
    {
      question: "Hva er riktig komponentform for gravitasjonsakselerasjonen mot et sentrum i origo?",
      options: ["$a_x = -GM\\,x/(x^2+y^2)^{3/2}$", "$a_x = -GM\\,x/(x^2+y^2)$", "$a_x = -GM/(x^2+y^2)$", "$a_x = -GM\\,x/(x^2+y^2)^{1/2}$"],
      explanation: "Kraften går som $1/r^2$, og komponenten legger til en faktor $x/r$ fra enhetsvektoren, til sammen $x/r^3$. Å skrive $r^2$ i nevneren gir en kraft som avtar altfor sakte med avstanden.",
    },
    {
      question: "Hvordan virker en jevn vannrett vind inn i en kodemodell for et kast?",
      options: ["Gjennom relativfarten mot lufta i hele dragleddet", "Som et eget konstant kraftledd i $x$-akselerasjonen", "Ved å forskyve hele banen sidelengs med $w\\,t$", "Ved å endre tyngdeakselerasjonen i $y$-retningen"],
      explanation: "Vinden merkes bare gjennom luftmotstanden, som avhenger av farten relativt til lufta — både i fellesfaktoren og i komponentfaktoren. En ren sideforskyvning ville gitt samme flytid og høyde uansett vindstyrke, og det stemmer ikke.",
    },
    {
      question: "Er en sykkel som triller nedover en rett bakke, et endimensjonalt eller todimensjonalt problem?",
      options: ["Endimensjonalt, siden bevegelsen er bundet til én linje", "Todimensjonalt, siden bevegelsen skjer i et loddrett plan", "Todimensjonalt, siden både tyngde og normalkraft virker", "Endimensjonalt bare hvis luftmotstanden neglisjeres"],
      explanation: "Det er antallet frie retninger som avgjør, og sykkelen kan bare bevege seg langs bakken. Kreftene på tvers opphever hverandre, uansett hvor mange de er og uansett om drag er med.",
    },
    {
      question: "Hvilken startfart gir en sirkelbane i avstanden $r_0$ fra et sentrum med parameter $GM$?",
      options: ["$\\sqrt{GM/r_0}$", "$\\sqrt{2GM/r_0}$", "$GM/r_0$", "$\\sqrt{GM\\,r_0}$"],
      explanation: "Gravitasjonen er sentripetalkraften, så $GMm/r_0^2 = mv^2/r_0$, som gir $v = \\sqrt{GM/r_0}$. Uttrykket $\\sqrt{2GM/r_0}$ er unnslipningsfarten, altså den som gir en åpen bane i stedet for en lukket.",
    },
  ],
  'fys1100-8-3': [
    {
      question: "En simulert planetbane spiraler jevnt utover. Hva er den mest sannsynlige årsaken?",
      options: ["Forward Euler tilfører energi i hvert tidssteg", "Gravitasjonskraften er en ikke-konservativ kraft", "Steglengden er valgt altfor liten for problemet", "Initialbetingelsene mangler i begge fartstabellene"],
      explanation: "Gravitasjonen er konservativ, så energien skal være bevart og banen lukke seg; en jevn vekst kan derfor ikke være fysikk. Manglende initialbetingelser ville gitt en sonde som står stille, ikke en som spiraler.",
    },
    {
      question: "Du halverer $dt$ og avviket står helt urørt. Hva slags feil er det?",
      options: ["En modellfeil, for eksempel et manglende kraftledd", "En diskretiseringsfeil som krever enda finere steg", "Energidrift fra valget av numerisk metode", "En avrundingsfeil i maskinens flyttallsregning"],
      explanation: "Diskretiseringsfeil og energidrift krymper begge når steglengden krymper. En feil som ikke rører seg, betyr at koden løser en annen likning — og den løses bare stadig mer nøyaktig.",
    },
    {
      question: "Hvilket grep fjerner ÅRSAKEN til energidrift, ikke bare symptomet?",
      options: ["Bytte til Euler–Cromer", "Halvere steglengden $dt$", "Kjøre simuleringen kortere", "Lagre færre punkt i tabellene"],
      explanation: "Euler–Cromer har ingen systematisk drift i det hele tatt, mens mindre $dt$ bare demper en drift som fortsatt er der. Kortere simulering skjuler problemet uten å røre det.",
    },
    {
      question: "Kometen påvirkes av en solvind $F_s = s/r^2$ utover. Hvordan endres akselerasjonslinja?",
      options: ["Et ledd $+(s/m)\\,x/r^3$ legges til", "Et ledd $+s\\,x/r^3$ legges til uten massen", "Et ledd $+(s/m)\\,x/r^2$ legges til", "Gravitasjonsleddet erstattes helt av solvindleddet"],
      explanation: "Kraften $s/r^2$ inneholder ingen faktor $m$, så bidraget til akselerasjonen er $F_s/m$ — massen må stå i nevneren. Nevneren blir $r^3$ fordi enhetsvektoren utover legger til en faktor $x/r$.",
    },
    {
      question: "Hvorfor står ikke massen i gravitasjonsleddet i akselerasjonslinja?",
      options: ["Kraften $GMm/r^2$ inneholder selv massen, som forkortes", "Fordi gravitasjon per definisjon er en akselerasjon og ikke en kraft", "Fordi $GM$ allerede har enheten $\\text{m}^3/\\text{s}^2$", "Fordi massen er så liten at den kan neglisjeres i praksis"],
      explanation: "Akselerasjonen er alltid $F/m$, men gravitasjonskraften er proporsjonal med legemets masse, så $m$ forkortes bort. Enheten på $GM$ er en konsekvens av dette, ikke årsaken.",
    },
    {
      question: "Hva er trapesformelen for arbeid fra ujevne måledata?",
      options: ["$W = \\sum (F_{i+1}+F_i)(x_{i+1}-x_i)/2$", "$W = \\Delta x\\sum F_i$ med fast $\\Delta x$", "$W = \\sum F_i (x_{i+1}-x_i)$", "$W = \\sum (F_{i+1}-F_i)(x_{i+1}+x_i)/2$"],
      explanation: "Hvert trapes har gjennomsnittshøyden $(F_{i+1}+F_i)/2$ og sin egen bredde $x_{i+1}-x_i$. Formen med fast $\\Delta x$ vekter alle punktene likt uansett hvor tett de ligger, og gir systematisk feil på ujevne data.",
    },
    {
      question: "Hvor stort ble avviket ved å bruke fast steglengde på det ujevne datasettet i kapitlet?",
      options: ["$29\\ \\%$ for lavt", "$0{,}7\\ \\%$ for høyt", "$29\\ \\%$ for høyt", "$3\\ \\%$ for lavt"],
      explanation: "Riktig metode ga $32{,}2\\ \\text{J}$ og fast-steg-formelen $22{,}9\\ \\text{J}$. Avviket på $0{,}7\\ \\%$ hører til noe annet: det er trapesmetodens egen krumningsfeil mot den analytiske fasiten.",
    },
    {
      question: "Trapesmetoden brukes på en kraftkurve som krummer oppover. Hva blir resultatet?",
      options: ["Litt for høyt, siden trapesene ligger over kurven", "Litt for lavt, siden trapesene ligger under kurven", "Nøyaktig riktig, uansett hvordan kurven krummer", "Umulig å si uten å kjenne antallet målepunkter"],
      explanation: "En rett linje mellom to punkt på en oppoverkrummet kurve ligger over kurven, så trapeset dekker mer enn det virkelige arealet. For en nedoverkrummet kurve blir svaret tilsvarende for lavt.",
    },
    {
      question: "Når er trapesmetoden eksakt?",
      options: ["Når kraften varierer lineært med posisjonen", "Når målepunktene ligger jevnt fordelt", "Når kraften er positiv i alle målepunktene", "Når antall målepunkter er et partall"],
      explanation: "Et trapes mellom to punkt på en rett linje følger linja nøyaktig, så det finnes ingen krumning å bomme på. Jevn fordeling gjør bare de to trapesformlene like, den gjør dem ikke eksakte.",
    },
    {
      question: "Hva er gravitasjonsparameteren for sola i astronomiske enheter?",
      options: ["$4\\pi^2\\ \\text{AU}^3/\\text{år}^2$", "$2\\pi\\ \\text{AU}^3/\\text{år}^2$", "$1\\ \\text{AU}^3/\\text{år}^2$", "$9{,}81\\ \\text{AU}^3/\\text{år}^2$"],
      explanation: "Jordas sirkelbane med $r = 1$ AU og omløpstid 1 år gir banefarten $2\\pi$ AU/år, og $GM = v^2r = 4\\pi^2$. Verdien $2\\pi$ er selve banefarten, ikke gravitasjonsparameteren.",
    },
    {
      question: "En komet har $E/m = -11{,}4\\ \\text{AU}^2/\\text{år}^2$. Hva sier det om banen?",
      options: ["Den er lukket, og kometen kommer tilbake", "Den er åpen, og kometen forsvinner for godt", "Den er en eksakt sirkel rundt sentrallegemet", "Den er ubestemt uten å kjenne kometens masse"],
      explanation: "Negativ mekanisk energi betyr at kometen er bundet: den mangler energi til å komme uendelig langt bort. Massen trengs ikke, siden energien allerede er oppgitt per masseenhet.",
    },
    {
      question: "Hvorfor er mekanisk energi et godt måltall for å avsløre feil i en banesimulering?",
      options: ["Den skal være konstant og bestemmer banens størrelse", "Den er den eneste størrelsen koden regner ut direkte", "Den endrer seg forutsigbart gjennom hvert omløp", "Den er uavhengig av hvilken numerisk metode som brukes"],
      explanation: "Energien er bevart i en ren gravitasjonsmodell, og den store halvaksen følger av den, så et avvik er entydig en feil. Den er nettopp ikke uavhengig av metoden — det er derfor den avslører Forward Euler.",
    },
    {
      question: "En kodemodifikasjonsoppgave besvares med uendret kode og kommentaren «kraften er liten». Hva gir det?",
      options: ["Null poeng, siden ferdigheten ikke er vist i det hele tatt", "Full uttelling, hvis kraften faktisk er liten", "Halv uttelling, som ved en glemt massefaktor", "Trekk på ett poeng, som ved manglende absoluttverdi"],
      explanation: "Deloppgaven tester om kandidaten kan oversette en ny kraft til en akselerasjonslinje, og en uendret kode viser ingenting av det. Regelen om uttelling for en god løsningsidé forutsetter at det finnes en idé.",
    },
    {
      question: "Du legger et fartsavhengig kraftledd til en gravitasjonskode. Hva må i tillegg regnes ut i løkka?",
      options: ["Fartens tallverdi $v = \\sqrt{v_x^2+v_y^2}$", "En ny og mindre steglengde $dt$", "Den mekaniske energien i hvert tidssteg", "Avstanden $r$, som ikke trengtes tidligere"],
      explanation: "Gravitasjonen avhenger bare av posisjonen, så fellesfarten fantes ikke i den opprinnelige koden, men et dragledd trenger den. Avstanden $r$ var derimot allerede der, siden gravitasjonsleddet krever den.",
    },
    {
      question: "En satellitt i lav jordbane får banefarten $7{,}67\\ \\text{m/s}$ i en simulering. Hva er galt?",
      options: ["Enhetsblanding — riktig svar er om lag $7{,}67\\ \\text{km/s}$", "Steglengden er for stor, så farten er underestimert", "Metoden er Forward Euler, som gir for lav banefart", "Ingenting — dette er riktig fart for en lav bane"],
      explanation: "En satellitt i lav bane går i om lag $7{,}7\\ \\text{km/s}$, og tallverdien stemmer påfallende godt med en faktor tusen imellom. Verken steglengde eller metodevalg gir feil av den størrelsesordenen.",
    },
    {
      question: "Hvordan skalerer den samlede feilen i trapesmetoden med avstanden mellom målepunktene?",
      options: ["Som kvadratet: halvert avstand gir en firedel av feilen", "Lineært: halvert avstand gir halvparten av feilen", "Som fjerde potens, siden metoden er fjerdeordens", "Den er uavhengig av hvor tett punktene ligger"],
      explanation: "Feilen i ett trapes går som $h^3$, og summert over intervallet gir det $h^2$ — altså en andreordens metode. Euler–Cromer er derimot førsteordens, med feil proporsjonal med steglengden.",
    },
  ],
  'fys1100-9-1': [
    {
      question: "I uttrykket $F = GMm/r^2$ — hva er $r$?",
      options: ["Avstanden mellom sentrene til de to legemene", "Høyden over overflaten til det tunge legemet", "Radien til det tunge legemet", "Avstanden fra overflaten til det lette legemet"],
      explanation: "Gravitasjonsloven gjelder mellom sentrene til to kulesymmetriske legemer, så for en satellitt i høyden $h$ er $r = R + h$. Svaret «høyden over overflaten» er den vanligste feilen i sjangeren: for en satellitt i $400\\,\\text{km}$ bane bommer den med en faktor nesten 300.",
    },
    {
      question: "Hvorfor er den potensielle energien $U = -GMm/r$ negativ?",
      options: ["Fordi nullnivået er lagt uendelig langt unna, og alt nærmere har mindre energi enn null", "Fordi gravitasjonskraften alltid peker innover mot sentrum", "Fordi massen til satellitten regnes som negativ i banemekanikk", "Fordi energien avtar når avstanden øker"],
      explanation: "Fortegnet er en konsekvens av valget av nullnivå: $U \\to 0$ når $r \\to \\infty$, så alt som er nærmere, ligger under null. Begrunnelsen om kraftretningen er nær sannheten, men kraftens retning bestemmer ikke fortegnet på energien — nullnivået gjør det. Og energien **vokser** mot null når avstanden øker.",
    },
    {
      question: "Hva er tyngdeakselerasjonen ved overflaten av en planet med masse $M$ og radius $R$?",
      options: ["$g = GM/R^2$", "$g = GM/R$", "$g = GMm/R^2$", "$g = 2GM/R$"],
      explanation: "Newtons 2. lov med gravitasjonsloven gir $mg = GMm/R^2$, og massen $m$ faller ut. Uttrykket med $m$ i telleren er kraften, ikke akselerasjonen — kraften har enheten newton, akselerasjonen $\\text{m/s}^2$.",
    },
    {
      question: "En satellitt går i sirkelbane. Hva er banefarten?",
      options: ["$v = \\sqrt{GM/r}$", "$v = \\sqrt{2GM/r}$", "$v = GM/r^2$", "$v = \\sqrt{GM r}$"],
      explanation: "Gravitasjonen er hele resultanten inn mot sentrum: $GMm/r^2 = mv^2/r$, som gir $v^2 = GM/r$. Uttrykket med faktoren 2 under rota er unnslipningsfarten, som er $\\sqrt2$ ganger større.",
    },
    {
      question: "Hva skjer med banefarten til en satellitt når baneradien økes?",
      options: ["Den avtar, som $1/\\sqrt{r}$", "Den øker, som $\\sqrt{r}$", "Den er uendret, siden massen faller ut", "Den avtar, som $1/r^2$"],
      explanation: "Fra $v = \\sqrt{GM/r}$ følger $v \\propto r^{-1/2}$: lengre ute er feltet svakere, og da holder det med mindre fart for å holde kurven. At satellittens egen masse faller ut, er riktig, men det sier ingenting om hvordan farten avhenger av radien.",
    },
    {
      question: "Hvordan avhenger omløpstiden i en sirkelbane av baneradien?",
      options: ["$T_p \\propto r^{3/2}$", "$T_p \\propto r$", "$T_p \\propto r^{1/2}$", "$T_p \\propto r^2$"],
      explanation: "Fra $T_p = 2\\pi\\sqrt{r^3/(GM)}$ følger $T_p^2 \\propto r^3$, altså Keplers 3. lov. Forslaget $T_p \\propto r$ ville stemt hvis farten var konstant, men farten avtar som $1/\\sqrt r$, og det gir en halv potens ekstra.",
    },
    {
      question: "Hva gir dimensjonsanalyse deg når du setter opp $v = C\\,(GM)^a r_0^{\\,b}$?",
      options: ["Eksponentene $a$ og $b$, men ikke forfaktoren $C$", "Både eksponentene og forfaktoren $C$", "Bare forfaktoren $C$, ikke eksponentene", "Verken eksponentene eller forfaktoren, bare en dimensjonskontroll"],
      explanation: "Dimensjonshomogenitet gir én likning per grunndimensjon, og det bestemmer eksponentene entydig — her $a = \\tfrac12$ og $b = -\\tfrac12$. Den dimensjonsløse forfaktoren kan metoden aldri gi: for banefarten er $C = 1$, men for omløpstiden er $C = 2\\pi$.",
    },
    {
      question: "Hvor stor er unnslipningsfarten fra overflaten av et legeme med masse $M$ og radius $R$?",
      options: ["$v_u = \\sqrt{2GM/R}$", "$v_u = \\sqrt{GM/R}$", "$v_u = 2GM/R$", "$v_u = \\sqrt{GM/R^2}$"],
      explanation: "Energibevaring med betingelsen «null fart uendelig langt unna» gir $\\tfrac12 mv_u^2 = GMm/R$. Uttrykket uten faktoren 2 er banefarten i en sirkelbane like over overflaten, altså $\\sqrt2$ ganger mindre.",
    },
    {
      question: "Hvor mye større er unnslipningsfarten enn banefarten på samme avstand?",
      options: ["En faktor $\\sqrt2$, altså omtrent 41 % større", "En faktor 2, altså dobbelt så stor", "En faktor 4, siden energien går som farten i annen", "De er like store, siden begge følger av gravitasjonsloven"],
      explanation: "Banefarten er $\\sqrt{GM/r}$ og unnslipningsfarten $\\sqrt{2GM/r}$, så forholdet er $\\sqrt2 \\approx 1{,}41$. Faktoren 2 er forholdet mellom **energiene**, ikke mellom fartene — det er nettopp der forvekslingen oppstår.",
    },
    {
      question: "Hvorfor er spinnet til en komet om sola bevart?",
      options: ["Fordi gravitasjonen peker rett mot sola og derfor har null momentarm om sola", "Fordi gravitasjonen er en konservativ kraft", "Fordi kometens masse er så liten sammenlignet med solas", "Fordi den mekaniske energien er bevart"],
      explanation: "En kraft med virkelinje gjennom punktet har momentarm null, så kraftmomentet om sola er null, og spinnsatsen gir da konstant spinn. At kraften er konservativ er også sant, men det er begrunnelsen for **energibevaring** — de to lovene har ulike betingelser, og de skal ikke byttes om.",
    },
    {
      question: "En komet har perihel $r_p$ med fart $v_p$ og aphel $r_a$ med fart $v_a$. Hvilken likning gjelder?",
      options: ["$v_p r_p = v_a r_a$", "$v_p r_a = v_a r_p$", "$v_p r_p^2 = v_a r_a^2$", "$v_p/r_p = v_a/r_a$"],
      explanation: "Spinnbevaring gir $mvr\\sin\\varphi = $ konstant, og i perihel og aphel står farten vinkelrett på radien, slik at $\\sin\\varphi = 1$. Den ombyttede formen gir farten feil vei — når avstanden krymper, må farten **øke**, ikke synke.",
    },
    {
      question: "Hva forteller fortegnet til $E = \\tfrac12 mv^2 - GMm/r$ deg?",
      options: ["Om banen er bundet ($E<0$) eller ubundet ($E>0$)", "Om legemet beveger seg innover eller utover langs banen", "Om banen er en sirkel eller en ellipse", "Om spinnet er bevart eller ikke"],
      explanation: "Negativ totalenergi betyr at legemet aldri kommer lenger enn til en endelig maksimalavstand — banen er lukket. Positiv energi betyr fart til overs i det uendelige. Skillet sirkel/ellipse avgjøres av spinnet, ikke av energien alene, så det svaret er nær men galt.",
    },
    {
      question: "Hva er riktig komponentform av bevegelseslikningen for en komet i planet?",
      options: ["$\\ddot x = -GMx/(x^2+y^2)^{3/2}$", "$\\ddot x = -GMx/(x^2+y^2)$", "$\\ddot x = -GM/(x^2+y^2)$", "$\\ddot x = -GMx/(x^2+y^2)^{1/2}$"],
      explanation: "Kraftens tallverdi går som $1/r^2$, og komponenten plukkes ut med faktoren $x/r$, slik at det blir $r^3$ i nevneren. Uttrykket uten $x$ i telleren mangler komponentoppdelingen helt og gir legemet akselerasjon i samme retning uansett hvor det befinner seg.",
    },
    {
      question: "Hvorfor brukes Euler–Cromer og ikke Forward Euler til planetbaner?",
      options: ["Fordi Euler–Cromer bruker den oppdaterte farten og derfor er tilnærmet energibevarende", "Fordi Euler–Cromer krever færre tidssteg for samme nøyaktighet", "Fordi Forward Euler ikke kan brukes på koblede likninger", "Fordi Euler–Cromer er den eneste metoden som gir lukkede baner"],
      explanation: "Forward Euler bruker den gamle farten i posisjonssteget, og feilen får samme fortegn hvert steg, slik at energien vokser og banen spiralerer utover. Forward Euler fungerer utmerket på koblede likninger rent teknisk — problemet er ikke at den ikke kjører, men at den lekker energi systematisk.",
    },
    {
      question: "En astronaut i romstasjonen føler seg vektløs. Hva er den fysiske forklaringen?",
      options: ["Alt om bord faller med samme akselerasjon, så ingen kontaktkrefter trengs", "Tyngdefeltet er praktisk talt null i denne høyden", "Rotasjonen om jorda opphever tyngdekraften", "Farten er så stor at tyngdekraften ikke rekker å virke"],
      explanation: "I $400\\,\\text{km}$ høyde er tyngdeakselerasjonen fortsatt $8{,}7\\,\\text{m/s}^2$, altså $89\\ \\%$ av verdien ved bakken — feltet er slett ikke null. Vektløsheten kommer av felles fritt fall, nøyaktig som i en heis der kabelen ryker.",
    },
    {
      question: "Hva bestemmer baneradien til en geostasjonær satellitt?",
      options: ["Kravet om at omløpstiden er lik jordas rotasjonstid", "Kravet om at banefarten er lik jordas rotasjonsfart ved ekvator", "Kravet om at tyngdeakselerasjonen i banen er null", "Kravet om at satellittens masse er kjent"],
      explanation: "Skal satellitten stå stille over samme punkt, må den runde jorda på nøyaktig én rotasjonsperiode, og $r = (GMT_p^2/4\\pi^2)^{1/3}$ gir da $4{,}22\\cdot10^{7}\\,\\text{m}$. Banefarten der er $3{,}07\\,\\text{km/s}$, mens ekvator beveger seg med $0{,}46\\,\\text{km/s}$ — de to fartene er slett ikke like, det er **vinkelfartene** som er det.",
    },
  ],
};

export default quizData_fys1100;
