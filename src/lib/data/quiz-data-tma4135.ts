import type { QuizQuestion } from './quiz-data';

const quizData_tma4135: Record<string, QuizQuestion[]> = {
  'tma4135-0-1': [
    {
      question: "Hvor lang er eksamen i TMA4135, og hvilken hjelpemiddelkode gjelder?",
      options: ["Fire timer skriftlig skoleeksamen, hjelpemiddelkode C", "Fire timer skriftlig skoleeksamen, hjelpemiddelkode D", "Fem timer skriftlig skoleeksamen, hjelpemiddelkode C", "Tre timer skriftlig skoleeksamen, hjelpemiddelkode B"],
      explanation: "Eksamen er fire timer, kl. 09:00–13:00, med hjelpemiddelkode C. Kode C betyr bestemt enkel kalkulator, ett gult stemplet A5-ark med egne håndskrevne notater, og et formelark som deles ut sammen med oppgavesettet. Kode D — som gjelder i andre emner — ville betydd ingen trykte eller håndskrevne hjelpemidler i det hele tatt.",
    },
    {
      question: "Hva er nevneren i alle frekvenspåstander av typen «N av M sett» i denne boka?",
      options: ["13 — de gjennomgåtte settene fra høsten 2015 til kontinuasjon 2024", "29 — antall oppgavesett som finnes i arkivet totalt", "56 — alle unike filer i arkivet, sett og fasiter samlet", "27 — antall løsningsforslag som følger med settene"],
      explanation: "Nevneren er 13. Arkivet har 56 unike filer (29 oppgavesett og 27 løsningsforslag), men bare 13 sett er gjennomgått oppgave for oppgave, og det er de frekvenstallene bygger på. De eldre settene fra 2003–2014 er ikke talt med, fordi de ikke er gjennomgått og fordi pensum har flyttet seg.",
    },
    {
      question: "Hvilke to temaer var oppe i samtlige 13 gjennomgåtte sett?",
      options: ["Laplace-transform og Fourier-rekker", "Separasjon av variable og numerisk integrasjon", "Fourier-transform og differansemetoder for gitter", "Interpolasjon og numeriske løsere for differensiallikninger"],
      explanation: "Laplace-transform og Fourier-rekker står begge i 13 av 13 sett. Separasjon av variable og numerisk løser ligger på 12 av 13, differansemetode på 11 av 13, mens Fourier-transform, interpolasjon og numerisk integrasjon ligger lavere. De to øverste er derfor de tryggeste å prioritere først.",
    },
    {
      question: "Hva står IKKE på det utdelte formelarket?",
      options: ["Derivasjonsregelen for Laplace-transformen av en derivert", "Feilleddet til Simpsons formel med maksimum av fjerdederiverte", "Transformparet for sinus, altså rada med vinkelfrekvensen i telleren", "Differansekvotientene for førstederiverte og andrederiverte"],
      explanation: "Arket har transformtabellene og hele numerikk-siden, men ikke regelen for hvordan en derivert transformeres. Den regelen er motoren i hele Laplace-delen og må sitte i hodet eller på ditt eget A5-ark. Feilleddet i Simpson, transformparene og differansekvotientene står alle på det utdelte arket.",
    },
    {
      question: "Hva sier den faste instruksen som står trykt på hvert oppgavesett?",
      options: ["Alle svar skal begrunnes med nok mellomregning til at tenkemåten framgår", "Bare sluttsvaret vurderes, så mellomregning kan sløyfes ved tidsnød", "Delpunktene rettes uavhengig, så en feil tidlig senker alle senere svar", "Svarene skal oppgis med tallverdi, aldri som eksakte uttrykk med rottegn"],
      explanation: "Instruksen krever begrunnelse og nok mellomregning. Et riktig sluttsvar uten utregning gir ikke full uttelling. Motsatt tolereres feilforplantning: regner du korrekt videre med en gal mellomverdi, gir de senere delpunktene fortsatt poeng. Og eksakte uttrykk foretrekkes der de finnes.",
    },
    {
      question: "Hva betyr det at eksamen fra 2018 er felles med TMA4130 Matematikk 4N?",
      options: ["Nesten alle oppgavene er identiske; bare én per sett har egne varianter", "Halvparten av oppgavene finnes i to versjoner, en for hvert av emnene", "Settene er helt like, og de to emnene har derfor identisk pensum", "Kandidatene velger selv hvilken av de to oppgavesamlingene de vil løse"],
      explanation: "Fra 2018 skrives ett sett for begge emnene, og bare én oppgave per sett finnes i to merkede varianter. Den 4D-merkede varianten er nesten alltid enten verifikasjon av at en funksjon løser en partiell differensiallikning, eller et kort gradient-innslag. Gamle sett merket 4N er derfor fullverdig øvingsmateriale.",
    },
    {
      question: "Hva er karakterskalaen på de nyeste settene, oppgitt i prosent av 100 poeng?",
      options: ["A fra 80, B 69–79, C 59–68, D 48–58, E 37–47, F under 37", "A fra 90, B 80–89, C 70–79, D 60–69, E 50–59, F under 50", "A fra 85, B 75–84, C 65–74, D 55–64, E 45–54, F under 45", "A fra 75, B 65–74, C 55–64, D 45–54, E 35–44, F under 35"],
      explanation: "Settene fra 2023 og 2024 trykker skalaen på forsiden: A fra 80 %, B 69–79, C 59–68, D 48–58, E 37–47, F under 37. Merk hvor lavt bestått ligger — 37 av 100 poeng, omtrent fire hele oppgaver av ti. C på 59 er en god og vanlig karakter du når uten å beherske de sjeldne temaene.",
    },
    {
      question: "Hvilken av disse tre oppgavetypene har tynnest belegg i arkivet?",
      options: ["Diskret Fourier-transform, som er i 2 av 13 sett", "Numerisk integrasjon med presisjonsgrad, som er i 8 av 13 sett", "Differansemetode for et gitter, som er i 11 av 13 sett", "Numerisk løser for differensiallikning, som er i 12 av 13 sett"],
      explanation: "Den diskrete Fourier-transformen står i 2 av 13 sett, begge kontinuasjonssett fra 2023 og 2024. Belegget er tynt fordi typen er ny, ikke fordi den er uviktig — den er fast i de nyeste settene, og boka dekker den grundig med et ærlig forbehold om belegget.",
    },
    {
      question: "Hvorfor driller denne boka metodevalg og føring i stedet for pugging?",
      options: ["Fordi kode C gir et utdelt formelark med tabellene og numerikkformlene", "Fordi eksamen er kortere enn i andre emner og krever raskere regning", "Fordi løsningsforslagene bare godtar én bestemt metode per oppgavetype", "Fordi kalkulatoren som er tillatt kan slå opp transformparene selv"],
      explanation: "Kode C betyr at formelarket deles ut sammen med oppgavesettet, og at du i tillegg har ditt eget A5-ark. Da tester eksamen ikke om du husker formler, men om du velger riktig metode og fører den. Merk også at flere metoder ofte godtas — delbrøk eller kvadratkomplettering, Lagrange eller Newton.",
    },
    {
      question: "Hva er tidsfella på et typisk sett i dette emnet?",
      options: ["Å bruke for lang tid på separasjon og differanseoppgaven midt i settet", "Å bruke for lang tid på de to Laplace-oppgavene helt i starten av settet", "Å bruke for lang tid på å lese gjennom hele settet før du begynner å regne", "Å bruke for lang tid på å kontrollere svarene i det siste kvarteret"],
      explanation: "Separasjon av variable og den store differanseoppgaven er de tyngste enkeltoppgavene, og de ligger midt i settet. Bruker du 45 minutter på én av dem, stjeler du fra sluttoppgaver som er verdt like mye. Å lese gjennom settet først og å kontrollere til slutt er derimot tid godt brukt — de er en del av budsjettet, ikke et tap.",
    },
    {
      question: "Hva kjennetegner en toppbesvarelse ifølge kalibreringen i kapitlet?",
      options: ["Begge fikspunktvilkårene, ordenssjekk rad for rad og korrekt randbehandling", "Flere utregnede oppgaver enn de andre, med kortere og mer effektiv føring", "Bruk av avanserte metoder som ikke er gjennomgått i undervisningen", "At alle svar oppgis med mange desimaler i stedet for eksakte uttrykk"],
      explanation: "Toppsjiktet skiller seg på fem detaljer: begge fikspunktvilkårene, ordensverifikasjon rad for rad i Butcher-tabellen, korrekt rand- og stabilitetsbehandling, andreforskyvning brukt med funksjonen funnet før forskyvningen, og at koblingene mellom delpunktene sees. Ingenting av det handler om å huske mer — det handler om å føre mer fullstendig.",
    },
    {
      question: "Hva bør du gjøre hvis du oppdager en regnefeil i delpunkt a) med ti minutter igjen?",
      options: ["Notere hva som er galt og regne videre, siden feil bare straffes én gang", "Regne om hele oppgaven fra starten, siden alle senere svar nå er ugyldige", "Stryke hele oppgaven, siden en besvarelse med feil ikke gir uttelling", "La feilen stå ukommentert og håpe at den ikke oppdages under rettingen"],
      explanation: "Feilforplantning tolereres: har du regnet korrekt videre med en gal mellomverdi, gir de senere delpunktene fortsatt uttelling. Å regne om hele oppgaven med ti minutter igjen er derfor dårlig bruk av tid. Å kommentere feilen er både ærlig og nyttig for den som retter.",
    },
  ],
  'tma4135-1-1': [
    {
      question: "Hvorfor har boka et helt kapittel om komplekse tall når temaet aldri er egen eksamensoppgave?",
      options: ["Fordi apparatet trengs inne i Laplace, Fourier og den diskrete transformen", "Fordi komplekse tall har vært egen oppgave i de fleste av de eldste settene", "Fordi formelarket forutsetter at du kan regne med komplekse tall for å leses", "Fordi karakterskalaen gir egne poeng for korrekt bruk av kompleks notasjon"],
      explanation: "Komplekse tall er en forutsetning, ikke en egen oppgavetype. De dukker opp i kompleks delbrøk når en Laplace-nevner har røtter av formen a pluss minus bi, i kompleks Fourier-rekke, i enhetsrøttene bak den diskrete Fourier-transformen, og i komplekse egenverdier ved stabilitetsanalyse.",
    },
    {
      question: "Hva er hovedargumentet til $-1-i$?",
      options: ["$-3\\pi/4$", "$3\\pi/4$", "$5\\pi/4$", "$\\pi/4$"],
      explanation: "Punktet ligger i tredje kvadrant, med cosinus og sinus begge lik minus én over rota av to. Vinkelen 5π/4 peker på samme punkt, men hovedargumentet skal ligge i intervallet fra minus π til π, så svaret er minus 3π/4. Regner du bare arctan av 1, får du π/4 — vinkelen til det motsatte punktet.",
    },
    {
      question: "Hva er $|3-4i|$?",
      options: ["$5$", "$7$", "$\\sqrt{7}$", "$25$"],
      explanation: "Modulusen er kvadratrota av summen av kvadratene: rota av 9 pluss 16, altså rota av 25, som er 5. Tallet 25 er modulusen kvadrert, altså produktet av tallet og konjugatet. Tallet 7 er summen av tallverdiene av realdel og imaginærdel, som ikke er modulusen.",
    },
    {
      question: "Hvilken av disse er Eulers formel for sinus?",
      options: ["$\\sin\\theta = \\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}$", "$\\sin\\theta = \\dfrac{e^{i\\theta}-e^{-i\\theta}}{2}$", "$\\sin\\theta = \\dfrac{e^{i\\theta}+e^{-i\\theta}}{2i}$", "$\\sin\\theta = \\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}$"],
      explanation: "Sinus har differansen i telleren og 2i i nevneren. Med pluss i telleren og 2 i nevneren får du cosinus. De to blandingsformene er de vanligste fortegnsfellene, og de forplanter seg rett inn i den komplekse Fourier-rekka i kapittel 3.3.",
    },
    {
      question: "Hvor mange løsninger har likningen $z^5 = 32$ i de komplekse tallene?",
      options: ["Fem", "Én", "Ti", "Uendelig mange"],
      explanation: "Likningen z opphøyd i n er lik w har nøyaktig n løsninger når w ikke er null. Alle fem har modulus 2, og vinklene ligger jevnt fordelt med 2π/5 mellom seg. Bare én av dem er reell, nemlig z lik 2 — svarer du «én», har du bare telt den reelle.",
    },
    {
      question: "Hva er $(1+i)^2$?",
      options: ["$2i$", "$2$", "$1+i^2$", "$-2i$"],
      explanation: "Gang ut: 1 pluss 2i pluss i i andre, og i i andre er minus 1, så svaret er 2i. Alternativet 2 er modulusen kvadrert, ikke tallet kvadrert. Minus 2i er kvadratet av det konjugerte tallet 1 minus i.",
    },
    {
      question: "Hvorfor er summen av alle $N$ enhetsrøttene null når $N \\ge 2$?",
      options: ["Fordi summen er en geometrisk rekke med teller $w^N-1$, og $w^N=1$", "Fordi hver enhetsrot er null bortsett fra den første, som er lik én", "Fordi enhetsrøttene er reelle tall som ligger symmetrisk om origo", "Fordi modulusen til hver enhetsrot er én, og $N$ ganger null er null"],
      explanation: "Summen er en geometrisk rekke med kvotient w, altså w opphøyd i N minus 1, delt på w minus 1. Telleren er null fordi w opphøyd i N er 1. Geometrisk: punktene ligger jevnt fordelt på enhetssirkelen og kansellerer parvis. Enhetsrøttene er verken null eller reelle, bortsett fra to av dem.",
    },
    {
      question: "Hva blir $s^2+6s+25$ etter kvadratkomplettering?",
      options: ["$(s+3)^2+16$", "$(s+3)^2+25$", "$(s+6)^2-11$", "$(s+3)^2-16$"],
      explanation: "Halvparten av 6 er 3, og kvadratet er s i andre pluss 6s pluss 9. Da mangler det 25 minus 9, altså 16. Alternativet med pluss 25 glemmer å trekke fra det man la til, og alternativet med s pluss 6 bruker hele koeffisienten i stedet for halvparten.",
    },
    {
      question: "Hva vet du om tellerne $A$ og $B$ i en kompleks partialbrøk med et konjugert polpar?",
      options: ["De er hverandres konjugat, så bare den ene må regnes ut", "De er alltid reelle tall, siden hele uttrykket er reelt", "De er alltid rent imaginære, siden nevnerne er komplekse", "De er uavhengige av hverandre og må regnes ut hver for seg"],
      explanation: "Når nevneren har reelle koeffisienter, er tellerne hverandres konjugat. Det halverer regningen: finn A med tildekkingsmetoden og skriv den andre ved å bytte fortegn på alle i-ene. Summen av de to brøkene er reell, men de enkelte tellerne er det som regel ikke.",
    },
    {
      question: "Hva er $e^{i\\pi/2}$?",
      options: ["$i$", "$-1$", "$-i$", "$1$"],
      explanation: "Eulers formel gir cosinus av π/2 pluss i ganger sinus av π/2, altså 0 pluss i, som er i. Verdien minus 1 svarer til vinkelen π, minus i til vinkelen minus π/2, og 1 til vinkelen 0. Enhetssirkelen deles altså i fire av disse.",
    },
    {
      question: "Hva sier de Moivres formel om $(re^{i\\theta})^n$?",
      options: ["Modulusen opphøyes i $n$, og vinkelen multipliseres med $n$", "Modulusen multipliseres med $n$, og vinkelen opphøyes i $n$", "Både modulusen og vinkelen opphøyes i $n$ hver for seg", "Modulusen holdes uendret, og bare vinkelen multipliseres med $n$"],
      explanation: "Regelen er at r blir r opphøyd i n, og θ blir n ganger θ. Det følger av at eksponentialfunksjonen legger sammen eksponenter. Å multiplisere modulusen med n i stedet for å opphøye den, er den vanligste feilen — sjekk alltid med et enkelt tilfelle som 2 opphøyd i 3.",
    },
    {
      question: "Hvilken av disse påstandene om $z\\bar z$ er riktig?",
      options: ["$z\\bar z = |z|^2$, altså alltid et ikke-negativt reelt tall", "$z\\bar z = z^2$, siden konjugering ikke endrer kvadratet", "$z\\bar z = 2\\operatorname{Re} z$, altså det dobbelte av realdelen", "$z\\bar z = |z|$, altså avstanden fra origo til punktet"],
      explanation: "Produktet av et tall og konjugatet er a i andre pluss b i andre, altså modulusen kvadrert. Det er trikset for å dele: gang teller og nevner med konjugatet av nevneren. Det dobbelte av realdelen er derimot z pluss konjugatet, ikke produktet.",
    },
    {
      question: "Du har funnet én løsning av $z^4 = -16$. Hvordan finner du de tre andre raskest?",
      options: ["Legg $\\pi/2$ til vinkelen tre ganger og behold samme modulus", "Bytt fortegn på hele tallet, og deretter på bare den imaginære delen", "Multipliser tallet med $2$, $3$ og $4$ og behold samme argument", "Ta konjugatet, og deretter konjugatet av konjugatet på nytt"],
      explanation: "De n røttene har alle samme modulus, og vinklene ligger 2π/n fra hverandre — her 2π/4, altså π/2. Å ta konjugatet gir bare én av de andre røttene i dette tilfellet, og å multiplisere med et helt tall endrer modulusen, som må være fast.",
    },
    {
      question: "Hvilken form er riktig svarform for tredjerøttene av $\\sqrt3+i$?",
      options: ["Polar form, siden argumentet ikke er en pen brøkdel av $\\pi$", "Kartesisk form med fire desimaler, siden det er mest presist", "Bare den reelle av de tre røttene, siden de andre er komplekse", "Kartesisk form med heltall, siden modulusen til slutt blir hel"],
      explanation: "Røttene er 2 opphøyd i en tredel, ganger e opphøyd i i ganger vinkler som starter på π/18. Vinkelen er ikke en standardvinkel, så en kartesisk form ville bare gitt desimaltall — mindre eksakt og ikke penere. Alle tre røttene er dessuten komplekse, ingen av dem er reell.",
    },
  ],
  'tma4135-2-1': [
    {
      question: "Hva er Laplace-transformen av en funksjon $f(t)$?",
      options: ["Integralet av $e^{-st}f(t)$ fra $0$ til uendelig", "Integralet av $e^{st}f(t)$ fra $0$ til uendelig", "Integralet av $e^{-st}f(t)$ over hele tallinja", "Den deriverte av $f$ ganget med faktoren $e^{-st}$"],
      explanation: "Definisjonen er integralet av e opphøyd i minus s t, ganget med f av t, fra null til uendelig. Fortegnet i eksponenten er negativt for at integralet skal konvergere, og nedre grense er null fordi transformen bare ser på tiden fra start og framover.",
    },
    {
      question: "Hvorfor har $e^{t^2}$ ingen Laplace-transform?",
      options: ["Den vokser fortere enn enhver eksponentialfunksjon", "Den er ikke kontinuerlig i noe punkt på aksen", "Den er negativ for store verdier av variabelen", "Den er ikke definert for negative verdier av $t$"],
      explanation: "Kravet om eksponentiell orden sier at funksjonen til slutt må vokse langsommere enn en eksponentialfunksjon M ganger e opphøyd i c t. Kvadratet i eksponenten vokser fortere enn enhver slik funksjon, så dempefaktoren taper kappløpet uansett hvor stor s er.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{t^4\\}$?",
      options: ["$\\dfrac{24}{s^5}$", "$\\dfrac{4}{s^5}$", "$\\dfrac{24}{s^4}$", "$\\dfrac{4!}{s^4}$"],
      explanation: "Potensraden er n fakultet delt på s opphøyd i n pluss én. Med n lik fire er telleren fire fakultet, altså 24, og nevneren er s i femte. Alternativene med s i fjerde bruker feil eksponent, og telleren 4 forveksler n med n fakultet.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{\\sin 6t\\}$?",
      options: ["$\\dfrac{6}{s^2+36}$", "$\\dfrac{s}{s^2+36}$", "$\\dfrac{1}{s^2+36}$", "$\\dfrac{6}{s^2-36}$"],
      explanation: "Sinusraden har omega i telleren, altså 6. Alternativet med s i telleren er cosinusraden, alternativet med 1 glemmer omega-faktoren, og alternativet med minus i nevneren er den hyperbolske raden.",
    },
    {
      question: "Hva skiller $\\mathcal{L}\\{\\cos\\omega t\\}$ fra $\\mathcal{L}\\{\\cosh at\\}$?",
      options: ["Fortegnet i nevneren: pluss mot minus", "Telleren: $s$ i den ene og $\\omega$ i den andre", "Eksponenten i nevneren: kvadrat mot første potens", "Konstanten foran: den ene har en faktor $2$"],
      explanation: "Begge har s i telleren. Forskjellen er at cosinus gir s i annen pluss omega i annen, mens hyperbolsk cosinus gir s i annen minus a i annen. Pluss gir svingninger, minus gir vekst og demping.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{y''\\}$ uttrykt ved $Y$?",
      options: ["$s^2Y - s\\,y(0) - y'(0)$", "$s^2Y - y(0) - y'(0)$", "$s^2Y + s\\,y(0) + y'(0)$", "$s^2Y - y'(0) - y''(0)$"],
      explanation: "Regelen har tre ledd, og startverdien y i null skal ha en faktor s foran seg. Alternativet uten den faktoren er den vanligste feilen. Alternativet med pluss har riktige ledd, men feil fortegn på begge.",
    },
    {
      question: "En funksjon har $y(0)=0$ og $y'(0)=-5$. Hva blir $\\mathcal{L}\\{y''\\}$?",
      options: ["$s^2Y + 5$", "$s^2Y - 5$", "$s^2Y - 5s$", "$s^2Y + 5s$"],
      explanation: "Leddet er minus y merket i null, altså minus minus fem, som blir pluss fem. Alternativet med minus fem glemmer at to minustegn gir pluss. Alternativene med en s-faktor blander sammen de to startverdileddene.",
    },
    {
      question: "Hvilken egenskap gjør at du kan transformere en likning ledd for ledd?",
      options: ["Lineariteten til integralet i definisjonen", "At transformen alltid gir en rasjonal funksjon", "At transformen er entydig for kontinuerlige funksjoner", "At faktoren $e^{-st}$ går mot null når $t$ vokser"],
      explanation: "Linearitet betyr at transformen av en sum er summen av transformene, og at konstanter kan settes utenfor. Den følger direkte av at integralet er lineært. Entydighet er en annen egenskap, som brukes ved tabelloppslag baklengs.",
    },
    {
      question: "Gjelder $\\mathcal{L}\\{f\\cdot g\\} = F(s)\\,G(s)$?",
      options: ["Nei — produktet svarer til konvolusjonen, ikke til produktet", "Ja — det følger direkte av lineariteten til integralet", "Ja, men bare når begge funksjonene er positive", "Nei — transformen av et produkt er alltid null"],
      explanation: "Transformen av et vanlig produkt er ikke produktet av transformene. Det er konvolusjonen, altså integralet av g av tau ganger y av t minus tau, som svarer til produktet i s-planet. Dette er konvolusjonsteoremet.",
    },
    {
      question: "Hva er første skritt i fireskrittsoppskriften for Laplace-metoden?",
      options: ["Transformer hvert ledd i likningen", "Faktoriser nevneren i uttrykket for $Y$", "Finn den generelle løsningen av likningen", "Bestem konstantene fra startverdiene"],
      explanation: "Oppskriften er: transformer, sett inn startverdiene med det samme, løs algebraisk for Y, og transformer tilbake. Å bestemme konstanter til slutt hører til den klassiske løsningsmetoden, ikke til denne.",
    },
    {
      question: "Når skal startverdiene settes inn i Laplace-metoden?",
      options: ["Samtidig med at derivasjonsregelen brukes", "Etter at $Y(s)$ er spaltet opp i delbrøker", "Helt til slutt, når $y(t)$ er funnet", "Bare når de er forskjellige fra null"],
      explanation: "Hele gevinsten ved metoden er at startverdiene bygges inn i den algebraiske likningen fra første linje. Setter du dem inn senere, har du mistet fordelen og risikerer å regne feil på konstantene.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{e^{2t}\\cos 3t\\}$?",
      options: ["$\\dfrac{s-2}{(s-2)^2+9}$", "$\\dfrac{s}{(s-2)^2+9}$", "$\\dfrac{s+2}{(s+2)^2+9}$", "$\\dfrac{3}{(s-2)^2+9}$"],
      explanation: "Førsteforskyvningsteoremet sier at hver eneste s i F skal byttes med s minus a, også den i telleren. Alternativet med s alene i telleren er den vanligste feilen. Alternativet med tre i telleren er sinusraden.",
    },
    {
      question: "Hva sier førsteforskyvningsteoremet?",
      options: ["Å gange med $e^{at}$ forskyver argumentet til $s-a$", "Å forskyve tiden gir en faktor $e^{-as}$ i $s$-planet", "Å derivere svarer til å gange transformen med $s$", "Å integrere svarer til å dele transformen på $s$"],
      explanation: "Teoremet sier at transformen av e opphøyd i a t ganger f av t er F av s minus a. Svaret om at forskyvning i tid gir en faktor e opphøyd i minus a s, beskriver derimot andreforskyvningsteoremet — der havner eksponentialfaktoren utenfor brøken.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{t^2e^{-3t}\\}$?",
      options: ["$\\dfrac{2}{(s+3)^3}$", "$\\dfrac{2}{(s-3)^3}$", "$\\dfrac{2}{(s+3)^2}$", "$\\dfrac{1}{(s+3)^3}$"],
      explanation: "Start med to delt på s i tredje, og bytt s med s minus a der a er minus tre, altså s pluss tre. Alternativet med minus i parentesen har feil fortegn på a, og alternativet med kvadrat har feil eksponent.",
    },
    {
      question: "Hvordan finner du telleren $A$ over faktoren $(s-3)$ ved tildekking?",
      options: ["Dekk til faktoren og sett $s=3$ i resten", "Dekk til faktoren og sett $s=-3$ i resten", "Deriver hele brøken og sett inn $s=3$", "Gang opp med hele nevneren og sett $s=0$"],
      explanation: "Tildekking betyr at du fjerner faktoren fra brøken og setter inn den s-verdien som gjør faktoren null. For s minus tre er det s lik tre. Fortegnet er en klassisk felle: faktoren s pluss tre har rot minus tre.",
    },
    {
      question: "Hva slags funksjon er $Y(s)$ når likningen har konstante koeffisienter?",
      options: ["En rasjonal funksjon, altså en brøk mellom polynomer", "Alltid et polynom av samme grad som likningen", "En eksponentialfunksjon med en polynomfaktor", "En sum av sinus- og cosinusledd i variabelen $s$"],
      explanation: "Både venstresiden og de vanlige høyresidene gir polynomer eller brøker mellom polynomer. Derfor blir Y alltid rasjonal, og det er nettopp grunnen til at delbrøkoppspalting alltid virker som siste skritt.",
    },
    {
      question: "Hva forteller polene til $Y(s)$ deg før du har regnet ferdig?",
      options: ["Hvilken form leddene i svaret får", "Hvor store koeffisientene i svaret blir", "Hvilke startverdier likningen må ha hatt", "Om brøken er ekte eller uekte"],
      explanation: "Reelle poler gir eksponentialledd, et rent imaginært par gir rene svingninger, og et komplekst par a pluss minus b i gir dempede svingninger. Koeffisientene må du regne ut, men formen leser du rett ut av nevneren.",
    },
    {
      question: "Hva må gjelde for $F(s)$ når $s$ går mot uendelig?",
      options: ["Den må gå mot null", "Den må gå mot en konstant større enn null", "Den må vokse over alle grenser", "Den må skifte fortegn minst én gang"],
      explanation: "For enhver funksjon av eksponentiell orden går transformen mot null. I praksis betyr det at telleren må ha lavere grad enn nevneren. Ender du med noe som går mot en konstant, har du regnet feil et sted.",
    },
    {
      question: "Hvorfor driller boka metodevalg framfor å pugge transformtabellen?",
      options: ["Fordi hjelpemiddelkode C gir et utdelt formelark med tabellen", "Fordi tabellen er for lang til at noen kan lære den utenat", "Fordi tabellen endres fra ett eksamenssett til det neste", "Fordi kalkulatoren regner ut transformene automatisk"],
      explanation: "Eksamen har hjelpemiddelkode C, som betyr at et formelark deles ut sammen med oppgavesettet. Tabellen ligger altså foran deg. Ferdigheten som gir uttelling, er å se hvilken rad en oppgave hører til og føre regningen fram.",
    },
    {
      question: "Hvilken av disse må du kunne eller utlede aktivt, uten å slå opp?",
      options: ["Derivasjonsregelen $\\mathcal{L}\\{y'\\}=sY-y(0)$", "Transformparet $\\mathcal{L}\\{t^n\\}=n!/s^{n+1}$", "Transformparet $\\mathcal{L}\\{\\sin\\omega t\\}$", "Transformparet $\\mathcal{L}\\{\\cosh at\\}$"],
      explanation: "Alle transformparene står på det utdelte formelarket, så dem skal du trene på å slå opp. Derivasjonsregelen står ikke der, og uten den finnes det ingen Laplace-metode for differensiallikninger.",
    },
    {
      question: "Hva blir parentesen foran $Y$ når du transformerer $y''+5y'-6y$?",
      options: ["$s^2+5s-6$", "$s^2+5s+6$", "$s^2-5s-6$", "$2s+5-6$"],
      explanation: "Parentesen er likningens venstreside med y dobbeltmerket erstattet av s i annen, y merket av s, og y av én. Fortegnene følger med uendret. Dette er også likningens karakteristiske uttrykk, og det gir en rask kontroll.",
    },
    {
      question: "Hvordan kan du utlede $\\mathcal{L}\\{\\cos\\omega t\\}$ fra sinusraden?",
      options: ["Bruk derivasjonsregelen på $f(t)=\\sin\\omega t$", "Bruk førsteforskyvningsteoremet med $a=\\omega$", "Deriver transformen av sinus med hensyn på $s$", "Sett $s=\\omega$ i transformen av sinus"],
      explanation: "Med f lik sinus omega t er f i null lik null, og den deriverte er omega ganger cosinus omega t. Derivasjonsregelen gir da s ganger sinustransformen, og deler du på omega, står cosinusraden der.",
    },
  ],
  'tma4135-2-2': [
    {
      question: "Når er en rasjonal brøk **ekte**?",
      options: ["Når telleren har lavere grad enn nevneren", "Når telleren har høyere grad enn nevneren", "Når nevneren kan faktoriseres fullstendig", "Når nevneren ikke har noen reelle røtter"],
      explanation: "En ekte brøk har lavere grad i telleren enn i nevneren. Bare ekte brøker kan spaltes rett i delbrøker. Er brøken uekte, må du dele ut med polynomdivisjon først.",
    },
    {
      question: "Nevneren i $Y(s)$ er $(s+2)^2$. Hva inneholder svaret?",
      options: ["Leddene $e^{-2t}$ og $te^{-2t}$", "Leddene $e^{2t}$ og $te^{2t}$", "Leddene $\\cos 2t$ og $\\sin 2t$", "Leddene $e^{-2t}$ og $e^{2t}$"],
      explanation: "En dobbel reell rot i minus to gir et ledd på formen A pluss B t, ganget med e opphøyd i minus to t. Faktoren t kommer fra at transformen av t ganger e opphøyd i a t er én delt på s minus a i annen.",
    },
    {
      question: "Hva er diskriminanten til $s^2+4s+20$, og hva betyr den?",
      options: ["$-64$, altså ingen reelle røtter", "$-64$, altså to forskjellige reelle røtter", "$96$, altså ingen reelle røtter", "$0$, altså én dobbel reell rot"],
      explanation: "Diskriminanten er p i annen minus fire q, altså 16 minus 80, som er minus 64. Negativ diskriminant betyr at uttrykket ikke kan faktoriseres i reelle førstegradsfaktorer, og da er kvadratkomplettering veien videre.",
    },
    {
      question: "Hvor mange ledd skal ansatsen ha for $\\dfrac{N(s)}{(s-2)^2(s+5)}$?",
      options: ["Tre — to for den doble faktoren og ett for den enkle", "To — ett for hver forskjellige rot i nevneren", "Fire — to for hver av de to faktorene i nevneren", "Ett — siden telleren bare er ett polynom"],
      explanation: "En gjentatt faktor krever ett ledd per potens opp til multiplisiteten. Antall ukjente må stemme med nevnerens grad, som her er tre. Med bare to ledd går likningssystemet ikke opp.",
    },
    {
      question: "Hvilken teller skal stå over en irredusibel andregradsfaktor?",
      options: ["En lineær teller $Bs+C$", "En konstant teller $B$", "En kvadratisk teller $Bs^2+C$", "Samme teller som over de enkle polene"],
      explanation: "Telleren skal ha grad én lavere enn faktoren under. En andregradsfaktor krever derfor en lineær teller. Med bare en konstant har du for få ukjente, og systemet blir uløselig.",
    },
    {
      question: "Hva blir $s^2-6s+25$ kvadratkomplettert?",
      options: ["$(s-3)^2+16$", "$(s-3)^2+25$", "$(s-6)^2+16$", "$(s+3)^2+16$"],
      explanation: "Halvparten av minus seks er minus tre, og tre i annen er ni. Da er uttrykket lik s minus tre i annen, minus ni, pluss 25, altså s minus tre i annen pluss 16. Alternativet med 25 glemte å trekke fra ni.",
    },
    {
      question: "Nevneren er kvadratkomplettert til $(s+2)^2+9$. Hva er $\\omega$?",
      options: ["$3$", "$9$", "$81$", "$2$"],
      explanation: "Restleddet er omega i annen, ikke omega. Her er restleddet ni, så omega er tre. Å bruke ni direkte gir feil frekvens i hele svaret, og feilen er vanskelig å oppdage uten kontroll.",
    },
    {
      question: "Hva må telleren være for at $\\dfrac{?}{(s-1)^2+16}$ skal treffe sinusraden?",
      options: ["Nøyaktig $4$", "Nøyaktig $16$", "Nøyaktig $s-1$", "Nøyaktig $1$"],
      explanation: "Sinusraden krever omega i telleren, og omega er kvadratrota av 16, altså fire. Alternativet s minus én treffer cosinusraden i stedet. Har du et annet tall, må du skrive det som en konstant ganger fire.",
    },
    {
      question: "Hvordan skriver du $3s+1$ når nevneren er kvadratkomplettert til $(s-2)^2+9$?",
      options: ["$3(s-2)+7$", "$3(s-2)+1$", "$3(s-2)-5$", "$3(s+2)+7$"],
      explanation: "Ganger du ut tre ganger s minus to, får du tre s minus seks, så du må legge til sju for å komme tilbake til tre s pluss én. Kontrollen er alltid å gange ut igjen og se at du får det du startet med.",
    },
    {
      question: "Hvilke to metoder for å finne delbrøk-koeffisienter honoreres begge?",
      options: ["Tildekking og løsning av et lineært system", "Tildekking og derivasjon av hele brøken", "Polynomdivisjon og kvadratkomplettering", "Innsetting av $s=0$ og innsetting av $s=1$"],
      explanation: "Begge metodene gir samme svar og er godtatt i arkivets løsningsforslag. Tildekking er raskest ved enkle reelle poler, mens et lineært system virker alltid, også ved multiple poler og irredusible faktorer.",
    },
    {
      question: "Hva er $\\mathcal{L}^{-1}\\left\\{\\dfrac{s+3}{(s+3)^2+4}\\right\\}$?",
      options: ["$e^{-3t}\\cos 2t$", "$e^{-3t}\\sin 2t$", "$e^{3t}\\cos 2t$", "$e^{-3t}\\cos 4t$"],
      explanation: "Telleren er nøyaktig s minus a med a lik minus tre, altså cosinusformen. Restleddet fire er omega i annen, så omega er to. Alternativet med sinus krever at telleren er omega, ikke s minus a.",
    },
    {
      question: "Hvilke røtter har $s^2-6s+25$, og hvordan henger de sammen med kvadratkompletteringen?",
      options: ["$3\\pm 4i$ — realdelen er $a$ og imaginærdelen er $\\omega$", "$3\\pm 4i$ — realdelen er $\\omega$ og imaginærdelen er $a$", "$6\\pm 25i$ — koeffisientene leses rett av uttrykket", "$-3\\pm 4i$ — fortegnet snur når du kvadratkompletterer"],
      explanation: "Kvadratkompletteringen ga s minus tre i annen pluss 16, altså a lik tre og omega lik fire. De samme tallene er realdelen og imaginærdelen i polparet. Det er ingen tilfeldighet — de to formene beskriver samme faktorisering.",
    },
    {
      question: "Hva gir et konjugert polpar i sluttsvaret?",
      options: ["Ett reelt ledd, en dempet svingning", "To komplekse ledd som må stå igjen", "To reelle eksponentialledd uten svingning", "Ingen bidrag, siden delene kansellerer"],
      explanation: "De to leddene er hverandres konjugerte, og summen er reell: e opphøyd i a t ganger en kombinasjon av cosinus og sinus. Blir det stående en imaginær enhet i svaret ditt, har du regnefeil et sted.",
    },
    {
      question: "Hvordan finner du telleren $A$ ved kompleks delbrøkoppspalting?",
      options: ["Ved tildekking, med den komplekse rota satt inn", "Ved å derivere brøken og sette inn rota", "Ved å ta realdelen av hele brøken først", "Ved å løse et system med fire reelle ukjente"],
      explanation: "Tildekking virker på komplekse poler nøyaktig som på reelle: dekk til faktoren og sett inn den komplekse rota i det som blir igjen. Den andre telleren er automatisk konjugatet, så du trenger bare regne én av dem.",
    },
    {
      question: "Hvordan kommer du fra $A$ og polparet tilbake til et reelt svar?",
      options: ["Ta to ganger realdelen av $A\\,e^{(a+bi)t}$", "Legg sammen $A$ og konjugatet og gang med $e^{at}$", "Ta absoluttverdien av $A$ og gang med $\\cos bt$", "Ta imaginærdelen av $A$ og gang med $\\sin bt$"],
      explanation: "De to leddene er konjugerte, så summen er to ganger realdelen av det ene. Skrevet ut blir det to e opphøyd i a t, ganget med realdelen av A ganger cosinus minus imaginærdelen av A ganger sinus.",
    },
    {
      question: "Hva er den raskeste kontrollen på en ferdig delbrøkoppspalting?",
      options: ["Sett inn en $s$-verdi som ikke er en pol", "Deriver begge sider og sammenlign", "Sett $s$ lik hver av polene etter tur", "Regn ut den inverse og transformer tilbake"],
      explanation: "Velg gjerne s lik null eller én, og regn ut begge sider. Sjekken tar femten sekunder og fanger nesten alle regnefeil i koeffisientene. Polene kan ikke brukes, siden begge sider da er udefinerte.",
    },
    {
      question: "$Y(s)$ er en ekte brøk der telleren har grad to lavere enn nevneren. Hva er $y(0)$?",
      options: ["Null", "Én", "Forholdet mellom de ledende koeffisientene", "Summen av alle koeffisientene i telleren"],
      explanation: "Er gradforskjellen minst to, går s ganger Y mot null når s vokser, og da er y i null lik null. Er gradforskjellen nøyaktig én, er y i null lik forholdet mellom de ledende koeffisientene.",
    },
    {
      question: "Hva er første skritt når du får en ny $Y(s)$ som skal inverteres?",
      options: ["Sjekk om brøken er ekte, og faktoriser nevneren", "Sett opp ansatsen med ukjente tellere", "Kvadratkompletter alle andregradsledd", "Finn den inverse av telleren for seg"],
      explanation: "Nevneren bestemmer alt: hvor mange ledd ansatsen skal ha, og hvilken teknikk hvert ledd krever. Er brøken uekte, må du dele ut først. Ansatsen kan ikke settes opp før faktoriseringen er gjort.",
    },
    {
      question: "Hva er $\\mathcal{L}^{-1}\\left\\{\\dfrac{2}{(s-5)^3}\\right\\}$?",
      options: ["$t^2e^{5t}$", "$2t^2e^{5t}$", "$t^3e^{5t}$", "$t^2e^{-5t}$"],
      explanation: "Raden er n fakultet delt på s minus a opphøyd i n pluss én. Med n lik to er telleren to, som stemmer nøyaktig, og eksponenten i nevneren er tre. Svaret er derfor t i annen ganger e opphøyd i fem t.",
    },
    {
      question: "Hvilken av disse manøvrene står **ikke** på det utdelte formelarket?",
      options: ["Selve kvadratkompletteringen av en nevner", "Måltabellformen for dempet cosinus", "Måltabellformen for dempet sinus", "Transformparet for $t^n$ ganget med $e^{at}$"],
      explanation: "Alle måltabellformene og transformparene står på arket. Det som ikke står der, er manøveren som bringer brøken din over på en av dem: delbrøkoppspalting, kvadratkomplettering og tilpasning av telleren.",
    },
  ],
  'tma4135-2-3': [
    {
      question: "Hva er verdien av $u(t-3)$ for $t=1$?",
      options: ["Null, siden $t$ er mindre enn $3$", "Én, siden funksjonen alltid er positiv", "Minus én, siden argumentet er negativt", "Tre, siden konstanten leses rett av"],
      explanation: "Enhetssprangfunksjonen er null fram til påslagstidspunktet og én deretter. Med a lik tre og t lik én er argumentet negativt, altså er verdien null. Bryteren er ennå ikke slått på.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{u(t-5)\\}$?",
      options: ["$\\dfrac{e^{-5s}}{s}$", "$\\dfrac{e^{5s}}{s}$", "$\\dfrac{1}{s-5}$", "$e^{-5s}$"],
      explanation: "Raden er e opphøyd i minus a s, delt på s. Alternativet én delt på s minus fem er transformen av e opphøyd i fem t — en helt annen funksjon. Og e opphøyd i minus fem s alene er transformen av Dirac-deltaen.",
    },
    {
      question: "En last er $2$ på $[0,4)$ og $9$ for $t\\ge 4$. Hva er trappeleddformen?",
      options: ["$2 + 7u(t-4)$", "$2 + 9u(t-4)$", "$9 - 2u(t-4)$", "$2u(t) + 9u(t-4)$"],
      explanation: "Koeffisienten er spranghøyden, altså ni minus to som er sju. Kontroll ved t lik fem: to pluss sju er ni. Bruker du ni som koeffisient, får du elleve der, som er feil.",
    },
    {
      question: "Hva sier andreforskyvningsteoremet?",
      options: ["$\\mathcal{L}\\{f(t-a)u(t-a)\\} = e^{-as}F(s)$", "$\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$", "$\\mathcal{L}\\{f(t-a)\\} = F(s)-f(a)$", "$\\mathcal{L}\\{f(t)u(t-a)\\} = e^{-as}F(s)$"],
      explanation: "Både funksjonen og sprangfunksjonen må ha argumentet t minus a, med samme a begge steder. Formen med f av t ganget med sprangfunksjonen mangler forskyvningen i funksjonen selv og er derfor gal. Formen F av s minus a er førsteforskyvningsteoremet.",
    },
    {
      question: "Hvordan skiller du første fra andre forskyvningsteorem i et uttrykk?",
      options: ["Faktor $e^{-as}$ utenfor betyr andre; $s-a$ inne betyr første", "Faktor $e^{-as}$ utenfor betyr første; $s-a$ inne betyr andre", "Første gjelder brøker, andre gjelder polynomer", "Første gjelder når $a$ er positiv, andre når den er negativ"],
      explanation: "En eksponentialfaktor som står utenfor brøken er signaturen til en tidsforskyvning, altså andre teorem. Et forskjøvet argument inne i brøken kommer fra en eksponentialfaktor i tid, altså første teorem.",
    },
    {
      question: "Hva er $\\mathcal{L}^{-1}\\left\\{e^{-4s}F(s)\\right\\}$?",
      options: ["$f(t-4)\\,u(t-4)$", "$f(t)\\,u(t-4)$", "$e^{-4t}f(t)$", "$f(t+4)\\,u(t-4)$"],
      explanation: "Hver eneste t i f skal byttes med t minus fire, og hele uttrykket ganges med sprangfunksjonen. Alternativet f av t ganger sprangfunksjonen er den vanligste feilen: det ganger med bryteren, men glemmer forskyvningen.",
    },
    {
      question: "I hvilken rekkefølge arbeider du med $e^{-as}F(s)$?",
      options: ["Finn $f$ helt ferdig først, forskyv til slutt", "Forskyv først, og finn $f$ etterpå", "Gjør begge deler samtidig i ett uttrykk", "Deriver $F$ først, og forskyv deretter"],
      explanation: "Dekk til eksponentialfaktoren, noter a, finn den inverse av det som blir igjen med delbrøk og kvadratkomplettering, og bytt så hver t med t minus a. Det finnes ingen snarvei som gjør begge deler i ett.",
    },
    {
      question: "Hvordan skriver du $t^2$ ved hjelp av $t-1$?",
      options: ["$(t-1)^2 + 2(t-1) + 1$", "$(t-1)^2 + 1$", "$(t-1)^2 + 2(t-1)$", "$(t-1)^2 - 2(t-1) + 1$"],
      explanation: "Sett t lik t minus én pluss én og gang ut kvadratet. Kontrollen er å gange ut igjen: t i annen minus to t pluss én, pluss to t minus to, pluss én, blir t i annen. De andre alternativene gir ikke det tilbake.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{\\delta(t-2)\\}$?",
      options: ["$e^{-2s}$", "$\\dfrac{e^{-2s}}{s}$", "$\\dfrac{1}{s-2}$", "$2e^{-2s}$"],
      explanation: "Transformen av Dirac-deltaen er bare eksponentialfaktoren, uten nevner. Alternativet med s i nevneren er transformen av sprangfunksjonen, og forskjellen er nettopp at sprangfunksjonen er integralet av deltaen.",
    },
    {
      question: "Hva sier silingsegenskapen til Dirac-deltaen?",
      options: ["Integralet av $\\delta(t-a)f(t)$ er $f(a)$", "Integralet av $\\delta(t-a)f(t)$ er null", "Integralet av $\\delta(t-a)$ er lik $a$", "Deltaen er lik uendelig i punktet $t=a$"],
      explanation: "Integralet plukker ut funksjonsverdien i det ene punktet der deltaen sitter. Setter du inn e opphøyd i minus s t som funksjon, faller transformraden ut på én linje.",
    },
    {
      question: "Hva skjer med løsningen når en impuls $\\delta(t-a)$ treffer?",
      options: ["$y$ er kontinuerlig, mens $y'$ hopper", "$y$ hopper, mens $y'$ er kontinuerlig", "Både $y$ og $y'$ hopper i punktet", "Verken $y$ eller $y'$ endres i punktet"],
      explanation: "Integrerer du likningen over et lite intervall om punktet, bidrar leddene med y og y merket med null i grensen, mens integralet av den andrederiverte er spranget i y merket. Impulsen overfører bevegelsesmengde, ikke forflytning.",
    },
    {
      question: "Hva er spranget i $y'$ ved en impuls $5\\,\\delta(t-a)$?",
      options: ["Fem — altså impulsens styrke", "Én, uansett hva styrken er", "Fem delt på koeffisienten foran $y''$", "Null, siden løsningen er kontinuerlig"],
      explanation: "Argumentet med integrasjon over et lite intervall gir at spranget er lik impulsens styrke, forutsatt at koeffisienten foran den andrederiverte er én. Dette er en gratis kontroll på enhver Dirac-oppgave.",
    },
    {
      question: "Hva er $\\mathcal{L}\\{(t-3)u(t-3)\\}$?",
      options: ["$\\dfrac{e^{-3s}}{s^2}$", "$\\dfrac{e^{-3s}}{s}$", "$\\dfrac{3e^{-3s}}{s^2}$", "$\\dfrac{e^{-3s}}{s^3}$"],
      explanation: "Dette er rampefunksjonen, altså andreforskyvningsteoremet med f lik t. Siden transformen av t er én delt på s i annen, blir svaret eksponentialfaktoren delt på s i annen.",
    },
    {
      question: "Hva betyr det at hele $Y(s)$ er ganget med $e^{-as}$?",
      options: ["Løsningen er identisk null for $t<a$", "Løsningen er konstant fram til $t=a$", "Løsningen vokser eksponentielt fra start", "Løsningen har et sprang i selve punktet $a$"],
      explanation: "Dette kalles kausalitet: systemet kan ikke reagere før noe skjer. Setter du inn en t-verdi mindre enn a og får noe annet enn null, har du mistet en sprangfunksjon underveis i regningen.",
    },
    {
      question: "Hva er $u(t-1)-u(t-4)$?",
      options: ["En puls som er én mellom $1$ og $4$", "En puls som er én mellom $0$ og $1$", "En rampe som stiger fra $t=1$ til $t=4$", "En konstant funksjon lik minus tre"],
      explanation: "Trekker du to sprang fra hverandre, får du en rektangelpuls av endelig varighet. Ganger du en funksjon med dette, klipper du ut den delen som ligger mellom de to tidspunktene og setter resten til null.",
    },
    {
      question: "Hvordan skriver du $e^{3t}$ når sprangfunksjonen har argument $t-2$?",
      options: ["$e^{6}e^{3(t-2)}$", "$e^{3}e^{3(t-2)}$", "$e^{-6}e^{3(t-2)}$", "$e^{3(t-2)}$"],
      explanation: "Skriv eksponenten som tre ganger t minus to, pluss seks, og bruk potensregelen. Konstanten e i sjette blir stående utenfor som et rent tall. Uten den mangler svaret en faktor.",
    },
    {
      question: "Løsningen av en likning med trappelast: hva er kontinuerlig ved påslagstidspunktet?",
      options: ["Både $y$ og $y'$", "Bare $y$, mens $y'$ hopper", "Bare $y'$, mens $y$ hopper", "Verken $y$ eller $y'$"],
      explanation: "Et endelig sprang i pådraget gir et sprang i den andrederiverte, men både funksjonen og den førstederiverte er kontinuerlige. Bare en impuls gir sprang i den førstederiverte.",
    },
    {
      question: "Hva er $\\mathcal{L}^{-1}\\left\\{\\dfrac{e^{-\\pi s}}{s^2+1}\\right\\}$?",
      options: ["$\\sin(t-\\pi)\\,u(t-\\pi)$", "$\\sin(t)\\,u(t-\\pi)$", "$\\sin(t+\\pi)\\,u(t-\\pi)$", "$e^{-\\pi t}\\sin t$"],
      explanation: "Den inverse av én delt på s i annen pluss én er sinus t, og andreforskyvningsteoremet bytter t med t minus pi. Uttrykket kan også skrives minus sinus t ganget med sprangfunksjonen, siden sinus er periodisk.",
    },
    {
      question: "Hva forteller et konstantledd som dukker opp etter $t=a$ deg?",
      options: ["At pådraget var en kraft, ikke en impuls", "At pådraget var en impuls, ikke en kraft", "At løsningen har et sprang i punktet", "At likningen mangler en startverdi"],
      explanation: "En kraft som slås på og blir stående, flytter systemets likevekt, og løsningen svinger om et nytt nivå. En impuls endrer bare farten, så løsningen svinger om det gamle nivået med ny amplitude.",
    },
    {
      question: "Hvilken del av arbeidet med en trappelast står **ikke** på formelarket?",
      options: ["Oppdelingen av lasten i trappeledd", "Transformen av sprangfunksjonen", "Transformen av Dirac-deltaen", "Selve andreforskyvningsteoremet"],
      explanation: "Alle tre transformradene står på arket og skal trenes som oppslag. Det som må kunnes aktivt, er å skrive en stykkevis definert last som en sum av trappeledd, og å bruke teoremet i riktig rekkefølge.",
    },
  ],
  'tma4135-2-4': [
    {
      question: "Hvordan er konvolusjonen $(g*y)(t)$ definert?",
      options: ["Integralet av $g(\\tau)y(t-\\tau)$ fra $0$ til $t$", "Integralet av $g(\\tau)y(\\tau)$ fra $0$ til $t$", "Produktet $g(t)\\,y(t)$ i hvert punkt", "Integralet av $g(\\tau)y(t-\\tau)$ fra $0$ til uendelig"],
      explanation: "Grensene går fra null til t, integranden er et produkt, og argumentene summerer til t. Det siste er kjennetegnet: den ene faktoren har tau, den andre t minus tau.",
    },
    {
      question: "Hvilket av disse er **ikke** en konvolusjon?",
      options: ["$\\int_0^t \\tau\\,y(\\tau)\\,d\\tau$", "$\\int_0^t y(\\tau)\\,d\\tau$", "$\\int_0^t e^{t-\\tau}y(\\tau)\\,d\\tau$", "$\\int_0^t \\sin(t-\\tau)y(\\tau)\\,d\\tau$"],
      explanation: "I det første har begge faktorene argument tau, så summen blir ikke t. Det andre ser ikke ut som et produkt, men er konvolusjonen mellom konstantfunksjonen én og y, og er derfor en konvolusjon.",
    },
    {
      question: "Hva sier konvolusjonsteoremet?",
      options: ["$\\mathcal{L}\\{g*y\\} = G(s)\\,Y(s)$", "$\\mathcal{L}\\{g\\cdot y\\} = G(s)\\,Y(s)$", "$\\mathcal{L}\\{g*y\\} = G(s) + Y(s)$", "$\\mathcal{L}\\{g*y\\} = G(s)/Y(s)$"],
      explanation: "Konvolusjon i tidsplanet svarer til vanlig multiplikasjon i s-planet. Alternativet med et vanlig produkt på venstre side er den grunnleggende misforståelsen: transformen av et produkt er ikke produktet av transformene.",
    },
    {
      question: "Hva er $\\mathcal{L}\\left\\{\\int_0^t y(\\tau)\\,d\\tau\\right\\}$?",
      options: ["$Y(s)/s$", "$sY(s)$", "$Y(s) - y(0)$", "$Y(s)/s^2$"],
      explanation: "Integralet er konvolusjonen mellom konstantfunksjonen én og y, og transformen av én er én delt på s. Regelen er speilbildet av derivasjonsregelen: derivere er å gange med s, integrere er å dele på s.",
    },
    {
      question: "Er konvolusjonen kommutativ?",
      options: ["Ja — rekkefølgen spiller ingen rolle", "Nei — den første funksjonen må alltid være kjernen", "Bare når begge funksjonene er positive overalt", "Bare når begge funksjonene er polynomer i $t$"],
      explanation: "Et variabelskifte i integralet viser at de to rekkefølgene gir samme resultat. Praktisk betyr det at du kan la integrasjonsvariabelen sitte på den faktoren som er lettest å regne på.",
    },
    {
      question: "Hva er $(1 * t^2)(t)$?",
      options: ["$t^3/3$", "$t^2$", "$t^3$", "$2t^3/3$"],
      explanation: "Integralet av tau i annen fra null til t er t i tredje delt på tre. Merk at konstantfunksjonen én ikke er en enhet for konvolusjon — den integrerer. Kontroll: produktet av transformene er to delt på s i fjerde.",
    },
    {
      question: "Hvorfor kan et integralledd gjøre et førsteordens system svingende?",
      options: ["Fordi det hever graden i nevneren til $Y(s)$ med én", "Fordi det gjør likningen ikke-lineær", "Fordi det gir en ekstra startverdi å bestemme", "Fordi det innfører komplekse koeffisienter"],
      explanation: "Integralet gir en faktor én delt på s, og etter multiplikasjon med s er graden i nevneren hevet med én. Et andregradsuttrykk med negativ diskriminant gir en dempet svingning. Systemet har fått hukommelse.",
    },
    {
      question: "Hva er $\\mathcal{L}^{-1}\\{F(s)G(s)\\}$ når produktet ikke står i tabellen?",
      options: ["Konvolusjonen $(f*g)(t)$", "Det vanlige produktet $f(t)g(t)$", "Summen $f(t)+g(t)$ av de to inversene", "Integralet av $f$ ganget med $g$ i null"],
      explanation: "Konvolusjonsteoremet lest baklengs gir konvolusjonen. Metoden brukes når nevneren ikke lar seg faktorisere, for eksempel ved en dobbel irredusibel faktor, eller når oppgaven ber om svaret som et integral.",
    },
    {
      question: "Hva signaliserer en dobbel irredusibel faktor $\\left(s^2+\\omega^2\\right)^2$?",
      options: ["Resonans — et ledd med $t$ ganget på en svingning", "Demping — svaret dør ut raskere enn med en enkel faktor", "To atskilte frekvenser som opptrer i det samme svaret", "At brøken må deles ut med polynomdivisjon aller først"],
      explanation: "Den inverse inneholder et ledd med t ganget på cosinus, og faktoren t betyr at amplituden vokser lineært. Fysisk dytter pådraget i takt med systemets egen frekvens hele veien.",
    },
    {
      question: "Hva skal du skrive i besvarelsen når du transformerer et integralledd?",
      options: ["At du bruker konvolusjonsteoremet, med navnet skrevet ut", "At integralet forsvinner ved vanlig regning", "At integralet deriveres bort før transformen", "At integralet er null fordi grensene faller sammen"],
      explanation: "Instruksen på hvert sett krever at tenkemåten framgår, og løsningsforslagene i arkivet skriver teoremnavnet ut. Setningen koster ti sekunder og er et eksplisitt krav i denne oppgavetypen.",
    },
    {
      question: "Når virker snarveien «deriver likningen for å bli kvitt integralet»?",
      options: ["Bare når kjernen er konstant", "Alltid, uansett hvordan kjernen ser ut", "Bare når kjernen er en eksponentialfunksjon", "Aldri, siden derivasjon ikke fjerner integraler"],
      explanation: "Er kjernen konstant, gir derivasjon et vanlig ledd med y. Er den ikke konstant, får du kjernen i null ganger y pluss et nytt integral med den deriverte kjernen — og en ekstra derivert på kjøpet.",
    },
    {
      question: "Hva er kjernen i $\\displaystyle\\int_0^t e^{-3(t-\\tau)}y(\\tau)\\,d\\tau$?",
      options: ["$g(t)=e^{-3t}$, med $G(s)=1/(s+3)$", "$g(t)=e^{3t}$, med $G(s)=1/(s-3)$", "$g(t)=e^{-3\\tau}$, med $G(s)=1/(s+3)$", "$g(t)=-3$, med $G(s)=-3/s$"],
      explanation: "Kjernen er den kjente funksjonen, uttrykt i sin egen variabel: e opphøyd i minus tre t. Transformen slås opp i tabellen. Kjernen skal aldri skrives med tau, siden tau bare er integrasjonsvariabelen.",
    },
    {
      question: "Hvorfor trenger en ren integrallikning ingen oppgitt startverdi?",
      options: ["Fordi integralet er null ved $t=0$ og gir $y(0)$", "Fordi startverdien alltid er null i slike likninger", "Fordi integrallikninger ikke har entydige løsninger", "Fordi konvolusjonsteoremet fjerner behovet for den"],
      explanation: "Setter du t lik null, faller grensene sammen og integralet blir null. Da leser du y i null rett av høyresiden. En integro-differensiallikning har derimot en derivert og trenger startverdien for derivasjonsregelen.",
    },
    {
      question: "Hva er det første ryddegrepet etter at du har transformert en integro-differensiallikning?",
      options: ["Gang hele likningen med fellesnevneren", "Sett opp ansatsen for delbrøkoppspaltingen", "Faktoriser telleren i høyresidens transform", "Del begge sider på startverdien"],
      explanation: "En transformert integro-differensiallikning har typisk både et ledd med s ganger Y og et med Y delt på s. Ganger du opp, står det et rent polynom foran Y, og resten er vanlig algebra.",
    },
    {
      question: "Hvilken vei bør du velge til den inverse når nevneren lar seg faktorisere?",
      options: ["Delbrøkoppspalting, som gir et lukket uttrykk", "Konvolusjon, siden den metoden alltid virker", "Kvadratkomplettering, uansett hva diskriminanten er", "Polynomdivisjon, for å redusere graden i telleren"],
      explanation: "Delbrøkoppspalting gir svaret uten integrasjon og går raskest. Konvolusjonsveien er reservert for tilfeller der nevneren ikke lar seg spalte, eller der oppgaven eksplisitt ber om et integraluttrykk.",
    },
    {
      question: "Hva er den typiske feilen i denne oppgavetypen?",
      options: ["Å ikke se konvolusjonsstrukturen i det hele tatt", "Å regne konvolusjonsintegralet med feil grenser", "Å bruke feil transformrad for kjernen", "Å glemme å faktorisere nevneren til slutt"],
      explanation: "Feilen er ikke en regnefeil, men at studenten ikke kjenner igjen strukturen og i stedet prøver å derivere seg ut av integralet. Gjenkjenningen er derfor viktigere enn regningen i denne sjangeren.",
    },
  ],
  'tma4135-2-5': [
    {
      question: "Hva er skritt 1 i løsningsoppskriften for Laplace-blokken?",
      options: ["Klassifiser likningen etter hva slags høyreside den har", "Transformer alle leddene med derivasjonsregelen med én gang", "Faktoriser nevneren i det algebraiske uttrykket for $Y(s)$", "Slå opp transformen av høyresiden i tabellen på arket"],
      explanation: "Klassifiseringen tar tre sekunder og bestemmer hele veien videre. Ser du klammeparentes, sprangfunksjon eller delta på høyresiden, er det trappe- eller impulslast; ser du et integral fra null til t, er det konvolusjon.",
    },
    {
      question: "Hvor i oppskriften hører andreforskyvningsteoremet hjemme?",
      options: ["Helt til slutt, etter at den inverse er funnet", "Helt i starten, før likningen i det hele tatt transformeres", "Samtidig med at startverdiene settes inn i likningen", "Rett etter at nevneren i $Y(s)$ er faktorisert"],
      explanation: "Regelen er å finne f helt ferdig og forskyve sist. Dekk til eksponentialfaktoren, noter a, gjør ferdig delbrøk og kvadratkomplettering, og bytt så hver t med t minus a i det ferdige uttrykket.",
    },
    {
      question: "Hva bør du gjøre når en sjanger har to godtatte metoder?",
      options: ["Velg den raskeste og nevn at den andre finnes", "Vis begge metodene fullstendig, uansett tidsbruk", "Velg den som gir det korteste sluttsvaret å skrive", "Unngå begge to og let etter en tredje vei"],
      explanation: "Arkivets løsningsforslag viser flere veier og honorerer dem alle. Å velge den raskeste og nevne alternativet i én linje viser at du kjenner begge, uten å bruke tid du ikke har.",
    },
    {
      question: "Hva er kontrollen ved en oppspalting som tar minst tid?",
      options: ["Sett inn en $s$-verdi som ikke er en pol", "Regn ut den inverse og transformer den tilbake igjen", "Deriver begge sider av oppspaltingen og sammenlign", "Sammenlign grafene til de to uttrykkene punktvis"],
      explanation: "Velg gjerne s lik null eller én og regn ut begge sider. Sjekken tar femten sekunder og fanger nesten alle regnefeil i koeffisientene, uten at du må gjøre noe av regningen om igjen.",
    },
    {
      question: "Hva gjør du hvis du ikke rekker siste skritt i en Laplace-oppgave?",
      options: ["Skriver ned $Y(s)$ og den ansatsen du kom fram til", "Stryker det du har og går videre", "Gjetter et sluttsvar med riktig form", "Skriver at metoden er kjent, uten regning"],
      explanation: "Poengene ligger spredt over hele oppgaven, ikke bare i sluttsvaret. Transformen, faktoriseringen og ansatsen er ofte over halve uttellingen, og de gis selv om siste skritt mangler.",
    },
    {
      question: "Hvilken føring kreves i hver eneste fasit i denne blokken?",
      options: ["Teoremnavnet skrevet ut der teoremet faktisk brukes", "Et diagram over løsningens oppførsel", "En numerisk kontroll gjort med kalkulator", "En begrunnelse for at metoden konvergerer"],
      explanation: "Instruksen på hvert sett krever nok mellomregning til at tenkemåten klart framgår. I praksis betyr det å skrive ut andreforskyvningsteoremet, konvolusjonsteoremet og derivasjonsregelen der de brukes.",
    },
    {
      question: "Hva er første grep når høyresiden er gitt med klammeparentes?",
      options: ["Skriv lasten som en sum av trappeledd før transformen", "Transformer hvert intervall for seg", "Løs likningen separat på hvert intervall", "Deriver lasten for å finne spranghøydene"],
      explanation: "Oppdelingen i trappeledd gjør hele lasten til én formel som kan transformeres på én gang. Å løse på hvert intervall og lime sammen er den klassiske veien, og den er langt mer arbeid.",
    },
    {
      question: "Hvordan kontrollerer du en Dirac-oppgave på under et halvt minutt?",
      options: ["Sjekk at spranget i $y'$ er lik impulsens styrke", "Sjekk at $y$ selv hopper med impulsens styrke ved $t=a$", "Sjekk at løsningen er identisk null etter påslaget", "Sjekk at nevneren i $Y(s)$ har en dobbel rot"],
      explanation: "Deriver svaret og sett inn påslagstidspunktet. Spranget skal være lik styrken foran deltaen. Kontrollen er uavhengig av hvor rotete resten av regningen var, og fanger både faktorfeil og glemte forskyvninger.",
    },
    {
      question: "Hvilke tre varianter dekker Laplace-blokken på eksamen?",
      options: ["Ren likning, integralledd, og trappe- eller impulslast", "Førsteordens, andreordens og tredjeordens likninger med startverdier", "Homogene, ikke-homogene og separable likninger", "Reelle poler, komplekse polpar og doble poler i nevneren"],
      explanation: "Boka kaller dem A, B og C. Alle tre bruker samme oppskrift; det er bare skritt 3 og 6 som slår inn av og til. Til sammen står blokken på alle de tretten settene i frekvensgrunnlaget.",
    },
    {
      question: "Hva er det siste du gjør før du leverer en Laplace-oppgave?",
      options: ["Kontrollerer startverdiene på det ferdige svaret", "Regner om hele svaret til desimaltall med fire siffer", "Skriver om svaret på hyperbolsk form der det går an", "Sjekker at nevneren i $Y(s)$ er faktorisert helt"],
      explanation: "Sett t lik null i svaret og i den deriverte, og sammenlign med det oppgaven ga. Kontrollen er gratis og fanger de fleste fortegnsfeil. Svaret skal for øvrig stå som eksakt uttrykk, ikke som desimaltall.",
    },
    {
      question: "Hva betyr «gang opp med fellesnevneren tidlig»?",
      options: ["Fjern brøkene i den transformerte likningen med én gang", "Sett alle delbrøkene på felles nevner rett før du leser av", "Multipliser sluttsvaret med graden til nevneren", "Gang begge sider av likningen med den oppgitte startverdien"],
      explanation: "En transformert integro-differensiallikning har både s ganger Y og Y delt på s. Ganger du hele likningen med s, står det et rent polynom foran Y, og du slipper brøk i brøk.",
    },
    {
      question: "Hvilken opplysning leser du ut av nevneren før du regner?",
      options: ["Om svaret svinger, og med hvilken demping", "Hvor store koeffisientene i det ferdige svaret blir", "Hvilke startverdier oppgaven må ha oppgitt", "Hvor mange minutter hele oppgaven tar å regne"],
      explanation: "Reelle poler gir eksponentialledd, og et komplekst polpar gir dempet svingning der realdelen er dempingen og imaginærdelen er frekvensen. Du kjenner formen på svaret før én koeffisient er regnet ut.",
    },
    {
      question: "Hvorfor er det bortkastet å pugge transformtabellen til denne eksamenen?",
      options: ["Fordi hjelpemiddelkode C gir et utdelt formelark", "Fordi oppgavene sjelden trenger en rad fra tabellen", "Fordi kalkulatoren kan slå opp radene automatisk", "Fordi tabellradene varierer fra ett sett til neste"],
      explanation: "Formelarket deles ut sammen med oppgavesettet. Det som avgjør karakteren, er om du ser hvilken rad en oppgave hører til og klarer å føre regningen — ikke om du husker tabellen.",
    },
    {
      question: "Hva slags oppgaver består drillkapitlet av?",
      options: ["Nyskrevne oppgaver på eksamensnivå, i blandet rekkefølge", "Oppgaver hentet ordrett fra tidligere eksamenssett i arkivet", "Enkle innstegsoppgaver sortert etter oppgavetype og år", "Teorispørsmål uten regning, med en kort fasit til hver"],
      explanation: "Alle oppgavene er nyskrevne for boka, og de er ikke sortert etter variant. Det er med vilje: på eksamen står det ikke hvilken type du har, og klassifiseringen er en del av ferdigheten.",
    },
  ],
  'tma4135-3-1': [
    {
      question: "Hva er halvperioden $L$ når en funksjon er gitt på $[-2,2]$ og gjentas periodisk?",
      options: ["$L=2$, og perioden er 4", "$L=4$, og perioden er 2", "$L=1$, og perioden er 2", "$L=2$, og perioden er 2"],
      explanation: "Halvperioden er halve perioden. Intervallet fra minus 2 til 2 har lengde 4, og det er én hel periode, så L er 2 og perioden er 4. Argumentet i rekka blir n pi x delt på 2.",
    },
    {
      question: "Hvilken nevner står i formelen for konstantleddet $a_0$?",
      options: ["$2L$, altså hele periodelengden", "$L$, altså halve periodelengden", "$n\\pi$, som i argumentet", "$2n\\pi$, som i argumentet"],
      explanation: "Konstantleddet er middelverdien over en hel periode, og derfor deles integralet på hele periodelengden 2L. De to andre koeffisientformlene har L i nevneren. Forveksling av de to gir et konstantledd som er dobbelt eller halvparten så stort.",
    },
    {
      question: "En funksjon $f$ på $[-L,L]$ er odde. Hvilke koeffisienter forsvinner?",
      options: ["$a_0$ og alle $a_n$; bare $b_n$ blir igjen", "Alle $b_n$; bare $a_0$ og $a_n$ blir igjen", "Bare $a_0$; både $a_n$ og $b_n$ blir igjen", "Bare $b_1$; alle andre koeffisienter blir igjen"],
      explanation: "Er f odde, er produktet f ganger cosinus odde, og integralet av en odde funksjon over et symmetrisk intervall er null. Det tar både a null og alle a n. Produktet f ganger sinus er derimot like, så b n overlever.",
    },
    {
      question: "Hvorfor er $\\int_{-L}^{L} g(x)\\,dx = 0$ når $g$ er odde?",
      options: ["Fordi de to halvdelene gir like bidrag med motsatt fortegn", "Fordi en odde funksjon alltid tar verdien null i origo og der omkring", "Fordi en odde funksjon er periodisk med periode $L$", "Fordi en odde funksjon alltid har negativ middelverdi"],
      explanation: "Substitusjonen x til minus x på den negative halvdelen viser at bidraget derfra er minus bidraget fra den positive halvdelen. At funksjonen er null i origo er riktig, men det alene forklarer ikke at hele integralet blir null.",
    },
    {
      question: "Hva er $\\cos n\\pi$ for et heltall $n$?",
      options: ["$(-1)^n$, altså vekselvis $-1$ og $1$", "$0$ for alle heltall $n$", "$1$ for alle heltall $n$", "$(-1)^{n+1}$, altså vekselvis $1$ og $-1$"],
      explanation: "Vinkelen n pi lander vekselvis på minus 1 og 1 på den reelle aksen. For n lik 1 er cosinus minus 1, som passer med minus én opphøyd i n. Alternativet med n pluss 1 i eksponenten gir riktig verdi for sinus-relaterte uttrykk, ikke for cosinus.",
    },
    {
      question: "Hvilket valg gjør du for $u$ når du bruker delvis integrasjon på $\\int x^2\\cos ax\\,dx$?",
      options: ["$u = x^2$, fordi derivasjon gjør polynomet enklere", "$u = \\cos ax$, fordi cosinus er lett å derivere", "$u = a$, fordi konstanten er enklest", "$u = x$, fordi det gir færrest runder"],
      explanation: "Polynomet velges som u fordi hver derivasjon senker graden, mens trigonometrifunksjonen holder seg like enkel under integrasjon. Velger du cosinus som u, blir integralet verre for hver runde.",
    },
    {
      question: "Hva er $a$ i reduksjonsformelen når argumentet i rekka er $\\frac{n\\pi x}{L}$?",
      options: ["$a = \\frac{n\\pi}{L}$", "$a = n\\pi L$", "$a = \\frac{L}{n\\pi}$", "$a = n$, uansett $L$"],
      explanation: "Reduksjonsformelen er skrevet med cosinus av a x, så a er alt som står foran x. For L lik 2 blir a lik n pi delt på 2, og da er a i andre lik n i andre ganger pi i andre delt på 4. Faktoren 4 er lett å miste.",
    },
    {
      question: "En periodisk utvidelse har sprang. Hvordan faller Fourier-koeffisientene typisk?",
      options: ["Som $1/n$, altså ganske sakte", "Som $1/n^2$, altså raskere", "Som $1/n^3$, altså svært raskt", "De faller ikke, men holder seg konstante"],
      explanation: "Sprang gir det tregeste fallet. En kontinuerlig utvidelse med knekk gir 1 delt på n i andre, og en utvidelse med kontinuerlig derivert gir enda raskere fall. Regelen er nyttig som plausibilitetssjekk på et ferdig svar.",
    },
    {
      question: "Funksjonen $f(x)=x^2$ på $[-\\pi,\\pi]$ har $a_n = \\frac{4(-1)^n}{n^2}$. Hva er $b_n$?",
      options: ["$b_n = 0$, fordi funksjonen er like", "$b_n = \\frac{4(-1)^n}{n^2}$, samme som $a_n$", "$b_n = \\frac{2(-1)^{n+1}}{n}$, som for sagtannen", "$b_n = \\frac{4}{n^2}$, uten fortegnsveksling"],
      explanation: "Kvadratfunksjonen er speilsymmetrisk om y-aksen, altså like. Da er produktet med sinus odde, og integralet over det symmetriske intervallet blir null. Alternativet med 2 og n i nevneren hører til sagtannen, som er odde.",
    },
    {
      question: "Hvilket uttrykk er null for alle like $n$ og lik 2 for alle odde $n$?",
      options: ["$1-(-1)^n$", "$1+(-1)^n$", "$(-1)^n - 1$ for like og $0$ for odde", "$2(-1)^n$"],
      explanation: "For like n er minus én opphøyd i n lik 1, så uttrykket blir null. For odde n blir det 1 minus minus 1, altså 2. Uttrykket med pluss foran har det motsatt: det er 2 for like n og null for odde.",
    },
    {
      question: "Hva er den fysiske tolkningen av $a_0$?",
      options: ["Middelverdien av funksjonen over én periode", "Amplituden til grunnsvingningen", "Perioden til den langsomste svingningen", "Den maksimale verdien funksjonen tar"],
      explanation: "Konstantleddet er nivået rekka svinger rundt. En rask kontroll er at a null alltid må ligge mellom funksjonens minste og største verdi.",
    },
    {
      question: "Hva sier produktregelen for paritet om odde ganger odde?",
      options: ["Resultatet er en like funksjon", "Resultatet er en odde funksjon", "Resultatet er verken like eller odde", "Resultatet er alltid identisk null"],
      explanation: "Paritet oppfører seg som fortegn: minus ganger minus blir pluss. Det er grunnen til at produktet av en odde funksjon og sinus blir like, slik at integralet over det symmetriske intervallet er dobbelt så stort som over halve.",
    },
    {
      question: "Hva er den halverte formelen for $b_n$ når $f$ er odde?",
      options: ["$b_n = \\frac{2}{L}\\int_0^L f\\sin\\frac{n\\pi x}{L}\\,dx$", "$b_n = \\frac{1}{L}\\int_0^L f\\sin\\frac{n\\pi x}{L}\\,dx$", "$b_n = \\frac{2}{L}\\int_{-L}^{L} f\\sin\\frac{n\\pi x}{L}\\,dx$", "$b_n = \\frac{1}{2L}\\int_0^L f\\sin\\frac{n\\pi x}{L}\\,dx$"],
      explanation: "Integranden er like når f er odde, så integralet over hele intervallet er dobbelt så stort som over halve. Faktoren 2 kommer derfra, og grensene går fra 0 til L.",
    },
    {
      question: "En funksjon er verken like eller odde. Hva er den raskeste veien videre?",
      options: ["Splitte den i en odde og en like del og behandle delene hver for seg", "Regne ut alle tre integralene over hele $[-L,L]$ uten forenkling", "Bruke den halverte formelen likevel, siden feilen blir liten", "Bytte til en annen halvperiode slik at symmetri oppstår"],
      explanation: "Fourier-koeffisienter er lineære, så koeffisientene til en sum er summen av koeffisientene. Den odde delen gir bare b n, den like bare a null og a n. Å regne alt direkte gir samme svar, men tar omtrent dobbelt så lang tid.",
    },
    {
      question: "Hva er $\\sin n\\pi$ for heltall $n$, og hvorfor er det nyttig?",
      options: ["Det er 0, og det luker ut halvparten av leddene i grensene", "Det er $(-1)^n$, og det gir fortegnsvekslingen i svarene", "Det er 1, og det forenkler nevnerne", "Det veksler mellom 0 og 1, avhengig av pariteten til $n$"],
      explanation: "Setter du inn grensen x lik L, blir argumentet n pi. Alle ledd med sinus av det forsvinner umiddelbart. Fortegnsvekslingen i svarene kommer derimot fra cosinus av n pi.",
    },
    {
      question: "Hvilke to ledd inngår i den $n$-te harmoniske?",
      options: ["$a_n\\cos\\frac{n\\pi x}{L}$ og $b_n\\sin\\frac{n\\pi x}{L}$", "$a_0$ og $a_n\\cos\\frac{n\\pi x}{L}$", "$a_n\\cos\\frac{n\\pi x}{L}$ og $a_{n+1}\\cos\\frac{(n+1)\\pi x}{L}$", "$b_n\\sin\\frac{n\\pi x}{L}$ og $b_{2n}\\sin\\frac{2n\\pi x}{L}$"],
      explanation: "Den n-te harmoniske er hele leddet med indeks n, altså både cosinus- og sinusbidraget på den frekvensen. Amplituden er kvadratrota av a n i andre pluss b n i andre.",
    },
    {
      question: "Hva er ortogonalitetsrelasjonen mellom $\\cos\\frac{m\\pi x}{L}$ og $\\sin\\frac{n\\pi x}{L}$?",
      options: ["Integralet over $[-L,L]$ er null for alle $m,n$", "Integralet er lik $L$ når $m=n$, og null i alle andre tilfeller", "Integralet er $2L$ når $m=n$ og null ellers", "Integralet er null bare når $m\\ne n$"],
      explanation: "Cosinus er like og sinus er odde, så produktet er odde. Integralet av en odde funksjon over et symmetrisk intervall er null uansett hvilke indekser man velger.",
    },
    {
      question: "Hvorfor skal du sjekke symmetrien før du integrerer?",
      options: ["Fordi det sparer et helt integral og en fortegnsfelle", "Fordi integralene ellers ikke konvergerer", "Fordi formelarket bare gjelder for symmetriske funksjoner", "Fordi rekka ellers får feil halvperiode"],
      explanation: "Ett minutt på paritet sparer deg for et integral du vet blir null. Integralene konvergerer uansett, og formelarket bryr seg ikke om symmetri — gevinsten er tid og færre fortegn å bomme på.",
    },
    {
      question: "Hvordan kontrollerer du en ferdig Fourier-rekke raskest?",
      options: ["Ved å sette inn en bekvem $x$ og sjekke verdien", "Ved å derivere rekka ledd for ledd og sammenlikne", "Ved å telle antall ledd med odde indeks", "Ved å sjekke at alle koeffisientene er positive"],
      explanation: "Innsetting tar to minutter og fanger nesten alle regnefeil. Kontrollen er bare gyldig i punkter der den periodiske utvidelsen er kontinuerlig — i et sprang gir rekka midlingsverdien i stedet.",
    },
    {
      question: "Hva menes med at en funksjon er stykkevis glatt?",
      options: ["At både $f$ og $f'$ er stykkevis kontinuerlige", "At $f$ er kontinuerlig, men $f'$ kan være hva som helst", "At $f$ er deriverbar overalt og har begrenset derivert", "At $f$ er sammensatt av rette linjestykker"],
      explanation: "Betingelsen tillater endelig mange sprang, og krever at grensene i sprangene er endelige. Alle funksjonene i dette emnet oppfyller den, men du bør kunne si den når du bruker konvergensteoremet.",
    },
  ],
  'tma4135-3-2': [
    {
      question: "Hvilken utvidelse av $f$ på $[0,L]$ gir en ren sinusrekke?",
      options: ["Den odde utvidelsen, altså speiling gjennom origo", "Den like utvidelsen, altså speiling om $y$-aksen", "Utvidelsen med konstant verdi $f(L)$ til venstre", "Utvidelsen med verdien null på hele $[-L,0]$"],
      explanation: "En odde funksjon har alle cosinuskoeffisienter lik null, så bare sinusleddene blir igjen. Speiling om y-aksen gir en like funksjon og dermed en ren cosinusrekke.",
    },
    {
      question: "Hva konvergerer Fourier-rekka mot i et sprang?",
      options: ["Midlingsverdien $\\tfrac12\\left(f(x^+)+f(x^-)\\right)$", "Funksjonsverdien $f(x)$ slik den er definert i punktet", "Høyregrensen $f(x^+)$, siden rekka leses fra venstre", "Venstregrensen $f(x^-)$, siden summen bygges opp bakfra"],
      explanation: "Konvergensteoremet gir midlingsverdien uansett hvordan funksjonen er definert i punktet. Å bruke funksjonsverdien i stedet er den hyppigste enkeltfeilen i hele Fourier-blokken.",
    },
    {
      question: "Når har den odde utvidelsen av $f$ på $[0,L]$ et sprang i $x=0$?",
      options: ["Når $f(0)\\ne0$", "Når $f(L)\\ne0$", "Når $f$ ikke er deriverbar i null", "Alltid, uansett hva $f(0)$ er"],
      explanation: "Den odde utvidelsen krever at verdien til venstre er minus verdien til høyre, så det oppstår et hopp med mindre funksjonen starter i null. Betingelsen på f av L gjelder spranget i det andre endepunktet.",
    },
    {
      question: "Hvilken egenskap har hvert ledd i en sinusrekke i punktene $x=0$ og $x=L$?",
      options: ["Det er null i begge punktene", "Det er null bare i $x=0$", "Det er null bare i $x=L$", "Det er lik 1 i begge punktene"],
      explanation: "Argumentet er n pi x delt på L, som blir 0 i venstre endepunkt og n pi i høyre. Sinus er null begge steder. Dette er grunnen til at sinusrekka passer til en streng festet i begge ender.",
    },
    {
      question: "Hva er Gibbs-fenomenet?",
      options: ["At delsummene skyter over målet ved et sprang, uansett $N$", "At rekka konvergerer mot feil verdi i alle sprangpunkter", "At koeffisientene vokser i stedet for å avta for store $n$", "At delsummene svinger uten å nærme seg funksjonen noe sted"],
      explanation: "Oversvinget holder seg på omtrent 9 prosent av springhøyden uansett hvor mange ledd du tar med. Det som skjer, er at området der oversvinget ligger, klemmes stadig nærmere sprangpunktet.",
    },
    {
      question: "Hvor stort blir Gibbs-oversvinget, målt mot springhøyden?",
      options: ["Omtrent 9 prosent", "Omtrent 18 prosent", "Omtrent 25 prosent", "Omtrent 50 prosent"],
      explanation: "Toppen av delsummen går mot 1,179 ganger halve springhøyden, altså et oversving på omtrent 8,95 prosent av hele spranget. Tallet 18 prosent er samme oversving målt mot halve springhøyden.",
    },
    {
      question: "En funksjon på $[0,L]$ utvides like. Hvor er den periodiske utvidelsen typisk ikke deriverbar?",
      options: ["I $x=0$ og $x=\\pm L$, der den har knekk", "I $x=L/2$, midt i intervallet", "Ingen steder — den like utvidelsen er alltid glatt", "Overalt, siden den er satt sammen av to biter"],
      explanation: "Speilingen gir et hjørne der de to bitene møtes, med mindre den deriverte tilfeldigvis er null der. En knekk er ikke et sprang: funksjonen henger sammen, og rekka gir funksjonsverdien.",
    },
    {
      question: "Hva gir Fourier-rekka i et knekkpunkt?",
      options: ["Funksjonsverdien, siden funksjonen er kontinuerlig der", "Gjennomsnittet av de to ensidige deriverte", "Null, siden den deriverte hopper", "Gjennomsnittet av verdiene på hver side av knekken"],
      explanation: "Et hjørne er ikke et hopp. Funksjonen er kontinuerlig i et knekkpunkt, de to ensidige grensene er like, og midlingen gir dermed bare funksjonsverdien.",
    },
    {
      question: "Hvilket punkt bør du prøve først når du skal summere en tallrekke fra en Fourier-rekke?",
      options: ["$x=0$, fordi alle cosinuser blir 1 og alle sinuser blir 0", "$x=L/2$, fordi mønsteret der er mest variert", "$x=L/4$, fordi det gir flest overlevende ledd", "Et tilfeldig punkt, siden alle gir like enkle uttrykk"],
      explanation: "I origo forenkler alt seg maksimalt. Får du en triviell likning der, prøv x lik L og deretter halvparten av L. Punktet må dessuten være et der utvidelsen er kontinuerlig.",
    },
    {
      question: "Hva må sjekkes før du setter funksjonsverdien inn på venstre side i en tallrekkeutledning?",
      options: ["At utvidelsen er kontinuerlig i det punktet", "At koeffisientene er positive i punktet", "At rekka har endelig mange ledd", "At punktet ligger i det indre av intervallet $[0,L]$"],
      explanation: "Er utvidelsen kontinuerlig, gir rekka funksjonsverdien. Er det et sprang, gir den midlingsverdien, og da må du bruke den i stedet. Sjekken tar én setning og er et eget poeng.",
    },
    {
      question: "Cosinusrekka til $f$ på $[0,L]$ har koeffisienten $a_n$ lik:",
      options: ["$\\frac{2}{L}\\int_0^L f\\cos\\frac{n\\pi x}{L}\\,dx$", "$\\frac{1}{L}\\int_0^L f\\cos\\frac{n\\pi x}{L}\\,dx$", "$\\frac{2}{L}\\int_{-L}^{L} f\\cos\\frac{n\\pi x}{L}\\,dx$", "$\\frac{1}{2L}\\int_0^L f\\cos\\frac{n\\pi x}{L}\\,dx$"],
      explanation: "Den like utvidelsen gjør integranden like, så integralet over hele intervallet er dobbelt så stort som over halve. Faktoren 2 kommer derfra. Merk at konstantleddet a null derimot har bare 1 delt på L foran.",
    },
    {
      question: "Hvilken utvidelse gir en rekke der den deriverte automatisk er null i $x=0$?",
      options: ["Den like utvidelsen, som gir en ren cosinusrekke", "Den odde utvidelsen, som gir en ren sinusrekke", "Begge, siden alle rekker har null derivert i origo", "Ingen av dem — betingelsen må pålegges i tillegg"],
      explanation: "Deriverer du cosinus av n pi x delt på L, får du en sinus som er null i origo. Dette svarer til en stav med isolert ende, der varmestrømmen er null.",
    },
    {
      question: "En funksjon har $f(L)=0$. Hva betyr det for den odde utvidelsen i $x=L$?",
      options: ["Utvidelsen er kontinuerlig der, uten sprang", "Utvidelsen har et sprang med høyde $2f(L)$", "Utvidelsen er ikke definert i punktet", "Utvidelsen har alltid knekk der"],
      explanation: "Fra venstre kommer verdien null, og fra høyre kommer minus den samme verdien, altså også null. Nivåene møtes, og det er ingen midling å gjøre.",
    },
    {
      question: "Hvor mange perioder bør en skisse vise når oppgaven ber om intervallet $[-3,3]$ og perioden er 2?",
      options: ["Tre hele perioder", "Én periode, siden resten er en gjentakelse", "Seks perioder, én per heltall", "En halv periode på hver side av origo"],
      explanation: "Intervallet har lengde 6, og perioden er 2, så det rommer tre perioder. Det er nettopp periodisiteten som skal vises, så en skisse av bare grunnintervallet gir sjelden mer enn halv uttelling.",
    },
    {
      question: "Hvilken av disse utvidelsene konvergerer raskest for en funksjon med $f(0)\\ne0$ og $f(L)=0$?",
      options: ["Den like, fordi den blir kontinuerlig og faller som $1/n^2$", "Den odde, fordi sinusledd alltid konvergerer raskest", "Begge like raskt, siden koeffisientene har nøyaktig samme størrelse", "Den odde, fordi den har færre ledd å summere"],
      explanation: "Den odde utvidelsen får et sprang i origo når f i null ikke er null, og sprang gir det tregeste fallet. Den like utvidelsen er kontinuerlig og gir raskere konvergens.",
    },
    {
      question: "Hva er $\\sin\\frac{n\\pi}{2}$ for like $n$?",
      options: ["Null", "$(-1)^{n/2}$", "Én", "Vekselvis $1$ og $-1$"],
      explanation: "For n lik 2, 4, 6 og så videre lander argumentet på hele multipler av pi, der sinus er null. Uttrykket med minus én opphøyd i n halve hører til cosinus av samme argument.",
    },
    {
      question: "Hva er konvergensverdien i $x=L$ for en periodisk utvidelse med periode $2L$?",
      options: ["$\\tfrac12\\left(f(L^-)+f(-L^+)\\right)$", "$f(L)$, uansett hva som skjer på den andre siden", "Null, siden alle rekker er null i endepunktene", "$\\tfrac12\\left(f(L^-)+f(0^+)\\right)$"],
      explanation: "I høyre endepunkt møter funksjonen sin egen kopi fra neste periode, som starter der venstre endepunkt lå. Midlingen går derfor mellom venstregrensen i L og høyregrensen i minus L.",
    },
  ],
  'tma4135-3-3': [
    {
      question: "Hvilken eksponent står i integralet for $c_n$?",
      options: ["$e^{-in\\pi x/L}$, altså med minus", "$e^{+in\\pi x/L}$, altså med pluss", "$e^{-in\\pi x/L^2}$, med $L$ i andre potens", "$e^{-inx}$, uansett halvperiode"],
      explanation: "Integralet har minus i eksponenten og rekka har pluss. Bytter du om, får du koeffisientene til den speilvendte funksjonen. Formen uten L gjelder bare i spesialtilfellet der halvperioden er pi.",
    },
    {
      question: "Hva er sammenhengen mellom $c_n$ og de reelle koeffisientene?",
      options: ["$c_n = \\tfrac12\\left(a_n-ib_n\\right)$ for $n\\ge1$", "$c_n = \\tfrac12\\left(a_n+ib_n\\right)$ for $n\\ge1$", "$c_n = a_n - ib_n$ uten faktoren en halv", "$c_n = \\tfrac12\\left(b_n-ia_n\\right)$ for $n\\ge1$"],
      explanation: "Utledningen med Eulers formler gir minus foran i for positiv indeks og pluss for negativ. Faktoren en halv kommer av at hvert reelt ledd spaltes i to komplekse ledd.",
    },
    {
      question: "Hvordan finner du $b_n$ fra $c_n$ når funksjonen er reell?",
      options: ["$b_n = -2\\operatorname{Im}(c_n)$", "$b_n = 2\\operatorname{Im}(c_n)$", "$b_n = 2\\operatorname{Re}(c_n)$", "$b_n = \\lvert c_n\\rvert$"],
      explanation: "Minustegnet er avgjørende og er den enkeltdetaljen som oftest går galt i broen. Formelen med realdel er den for a n, og absoluttverdien gir bare amplituden uten fortegn.",
    },
    {
      question: "Hva kjennetegner $c_n$ når $f$ er reell?",
      options: ["$c_{-n} = \\overline{c_n}$ for alle $n$", "$c_{-n} = c_n$ for alle $n$", "Alle $c_n$ er reelle tall", "$c_0 = 0$ og resten er komplekse"],
      explanation: "Konjugert symmetri følger av å konjugere koeffisientformelen. At c minus n er lik c n gjelder for reelle like funksjoner, og at alle c n er reelle gjelder også bare da.",
    },
    {
      question: "Hva er $c_0$?",
      options: ["Middelverdien av $f$, altså det samme som $a_0$", "Amplituden til grunnsvingningen, altså $\\lvert c_1\\rvert$", "Alltid null, siden eksponenten forsvinner", "Summen av alle de øvrige koeffisientene"],
      explanation: "Setter du n lik null, blir eksponentialfunksjonen 1, og integralet er middelverdien. Formelen for de øvrige koeffisientene har ofte n i nevneren og må derfor behandles separat for null.",
    },
    {
      question: "En reell funksjon er odde. Hva kan du si om $c_n$?",
      options: ["Alle $c_n$ er rent imaginære", "Alle $c_n$ er reelle", "Alle $c_n$ er null for odde $n$", "Alle $c_n$ har positiv realdel"],
      explanation: "En odde funksjon har alle a n lik null, og broformelen gir da c n lik minus i halve b n, som er rent imaginær. Rent reelle koeffisienter hører til en like funksjon.",
    },
    {
      question: "Hvorfor går summen i den komplekse rekka over negative $n$?",
      options: ["Fordi hvert reelle ledd spaltes i to komplekse ledd ved Eulers formler", "Fordi negative frekvenser beskriver svingninger som går bakover i tid", "Fordi rekka ellers ikke ville konvergert", "Fordi konstantleddet krever en indeks på hver side av null"],
      explanation: "Cosinus og sinus skrives hver som en sum av to eksponentialer, én med pluss og én med minus i eksponenten. De negative indeksene er altså den andre halvparten av leddene man allerede hadde, ikke nye frekvenser.",
    },
    {
      question: "Når lønner den komplekse formen seg mest?",
      options: ["Når integranden har en eksponentialfunksjon", "Når funksjonen er et polynom med kjent paritet", "Når funksjonen er stykkevis konstant", "Når halvperioden er et helt tall"],
      explanation: "Ganget med den komplekse eksponentialen blir integranden én enkelt eksponential, og integralet er ferdig på én linje. For polynomer med kjent paritet er den reelle veien kortere, fordi symmetriregelen fjerner et helt integral.",
    },
    {
      question: "Hva er nevneren i Eulers formel for $\\sin\\theta$?",
      options: ["$2i$", "$2$", "$i$", "$-2i$"],
      explanation: "Sinus er differansen mellom de to eksponentialene delt på 2 i. Skriver du bare 2 der, får du et rent imaginært svar der det skulle vært reelt.",
    },
    {
      question: "Hva gir ortogonaliteten $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}e^{i(m-n)x}\\,dx$ når $m\\ne n$?",
      options: ["Null", "Én", "$2\\pi$", "$\\frac{1}{m-n}$"],
      explanation: "Antideriverte er eksponentialen delt på i ganger differansen, og siden eksponentialen har samme verdi i begge grensene, blir differansen null. For like indekser er integranden konstant lik 1, og integralet blir 1 etter delingen.",
    },
    {
      question: "Hva er amplitudespekteret?",
      options: ["Følgen $\\lvert c_n\\rvert$, altså energien per frekvens", "Følgen $\\arg c_n$, altså forskyvningen på hver frekvens", "Følgen $a_n$ alene, uten sinusbidraget", "Følgen $c_n$ med fortegn beholdt"],
      explanation: "Absoluttverdien måler hvor kraftig svingningen på frekvens n er. Argumentet måler i stedet hvor svingningen ligger i tid, og kalles fasespekteret.",
    },
    {
      question: "Hvordan påvirkes $\\lvert c_n\\rvert$ av at funksjonen forskyves langs $x$-aksen?",
      options: ["Den endres ikke; bare fasen endres", "Den skaleres med forskyvningen $d$", "Den blir null for alle $n$ som ikke deler $d$", "Den speiles slik at $c_n$ bytter plass med $c_{-n}$"],
      explanation: "Forskyvning ganger koeffisienten med en kompleks faktor av absoluttverdi 1, så amplituden er upåvirket. Samme egenskap dukker opp igjen for den diskrete transformen, der den kalles skifteegenskapen.",
    },
    {
      question: "Hvorfor tas delsummen av en kompleks rekke symmetrisk fra $-N$ til $N$?",
      options: ["Fordi leddene $n$ og $-n$ gir et reelt bidrag", "Fordi rekka ellers ikke konvergerer i det hele tatt", "Fordi bare positive indekser har fysisk mening", "Fordi konstantleddet ellers telles to ganger"],
      explanation: "Paret n og minus n er hverandres konjugerte når funksjonen er reell, og summen av et tall og dets konjugerte er reell. Tar du bare den ene, står du igjen med et komplekst tall der svaret skulle vært reelt.",
    },
    {
      question: "Hva er $e^{in\\pi}$ for heltall $n$?",
      options: ["$(-1)^n$, det samme som $e^{-in\\pi}$", "$(-1)^{n+1}$, motsatt av $e^{-in\\pi}$", "$i^n$, som gjentar seg med periode fire", "Alltid $1$, siden eksponenten er rent imaginær"],
      explanation: "Eulers formel gir cosinus av n pi pluss i ganger sinus av n pi, og sinusleddet forsvinner. Cosinus er like, så fortegnet på eksponenten spiller ingen rolle.",
    },
  ],
  'tma4135-3-4': [
    {
      question: "Hva er det aller første steget i løsningsoppskriften?",
      options: ["Skrive ned halvperioden $L$", "Sette opp alle tre koeffisientintegralene", "Slå opp reduksjonsformelen på formelarket", "Tegne den periodiske utvidelsen"],
      explanation: "Halvperioden styrer integrasjonsgrensene, faktoren foran og argumentet i rekka. Bommer du på den, blir alt annet feil på én gang, og ingen kontroll i etterkant vil se riktig ut.",
    },
    {
      question: "Hva gir uttelling i tillegg til riktig svar når du bruker symmetri?",
      options: ["Å skrive én linje som begrunner pariteten", "Å regne ut de nulle koeffisientene som kontroll", "Å oppgi antall ledd du tok med", "Å tegne funksjonen før du integrerer"],
      explanation: "Begrunnelsen er et eget poeng. Én linje med f av minus x lik f av x holder, men den må stå. Å regne ut koeffisienter du vet blir null, koster tid uten å gi uttelling.",
    },
    {
      question: "Når skal du bruke faktoren $2/L$ foran integralet fra 0 til $L$?",
      options: ["Bare når symmetrien gjør integranden like", "Alltid når integralet går fra 0 til $L$", "Bare når funksjonen er null på venstre halvdel", "Alltid når halvperioden er et helt tall"],
      explanation: "Den doble faktoren kommer fra at en like integrand gir like store bidrag fra begge halvdeler. Er funksjonen bare null til venstre uten å være symmetrisk, forblir faktoren 1 delt på L.",
    },
    {
      question: "Hva er hovedgevinsten ved formelark-doktrinen i denne sjangeren?",
      options: ["At du kan bruke tiden på metodevalg og føring", "At du slipper å begrunne svarene dine", "At du kan hoppe over kontrollregningen", "At koeffisientintegralene ligger ferdig utregnet"],
      explanation: "Hjelpemiddelkode C gir deg reduksjonsformlene og trigonometriidentitetene på papir. Koeffisientintegralene og symmetriargumentet står ikke der og må kunnes. Kravet om begrunnelse gjelder uansett.",
    },
    {
      question: "Hva bør du gjøre når en koeffisientformel har en nevner som kan bli null?",
      options: ["Regne den aktuelle $n$-verdien ut separat", "Sette koeffisienten til null for den verdien", "Endre halvperioden slik at nevneren ikke forsvinner", "Utelate leddet fra rekka uten kommentar"],
      explanation: "Formelen er utledet under antagelsen om at nevneren ikke er null, så den verdien må behandles for seg. I mange tilfeller viser den separate regningen at koeffisienten faktisk er null, men det må vises.",
    },
    {
      question: "Hvilket fall i koeffisientene forventer du av en trekantbølge?",
      options: ["Som $1/n^2$, siden utvidelsen er kontinuerlig med knekk", "Som $1/n$, siden utvidelsen har hjørner", "Som $1/n^3$, siden funksjonen er stykkevis lineær", "Ingen systematisk avtakelse"],
      explanation: "Trekantbølgen henger sammen overalt, men den deriverte hopper i hjørnene. Sprang i funksjonen selv ville gitt det tregere fallet 1 delt på n.",
    },
    {
      question: "Hva er den raskeste veien når funksjonen er en kjent funksjon pluss en konstant?",
      options: ["Bruke lineariteten: konstanten flytter bare $a_0$", "Regne alle integralene på nytt fra bunn", "Trekke fra konstanten og se bort fra den i svaret", "Endre halvperioden slik at konstanten forsvinner"],
      explanation: "Fourier-koeffisienter er lineære. En konstant bidrar bare til middelverdien, og en skalering ganger alle koeffisientene med samme tall. Å regne fra bunn gir samme svar, men tar unødvendig lang tid.",
    },
    {
      question: "Hvorfor er det nyttig å kjenne igjen de fire standardsummene?",
      options: ["For å vurdere raskt om et utledet svar er plausibelt", "For å slippe å utlede dem når oppgaven ber om det", "Fordi de står på det utdelte formelarket", "Fordi de erstatter kontrollregningen fullstendig"],
      explanation: "Gjenkjenning er en kontroll, ikke en snarvei. Oppgaven vil at du skal utlede summen fra rekka ved innsetting, og den utledningen er selve poenget med delpunktet.",
    },
    {
      question: "Hva er riktig rekkefølge på de siste stegene i oppskriften?",
      options: ["Skriv rekka, skissér utvidelsen, angi konvergensverdier, finn summen", "Finn summen, skriv rekka, skissér utvidelsen, angi konvergensverdier", "Skissér utvidelsen, finn summen, skriv rekka, angi konvergensverdier", "Angi konvergensverdier, skriv rekka, finn summen, skissér utvidelsen"],
      explanation: "Rekka må stå før du kan sette inn i den, og konvergensverdien i innsettingspunktet må avklares før du bruker funksjonsverdien. Skissen hjelper deg dessuten å se hvor sprangene ligger.",
    },
    {
      question: "En oppgave ber om skisse over flere perioder. Hva må være med for full uttelling?",
      options: ["Minst tre perioder, med sprangene markert", "Én periode tegnet nøyaktig med målestokk", "Alle koeffisientene skrevet inn i figuren", "Delsummen $S_5$ tegnet sammen med funksjonen"],
      explanation: "Poenget er å vise at du har forstått periodisiteten og hva som skjer i sprangene. En enkelt periode viser ikke det, og delsummer er ikke etterspurt med mindre oppgaven sier det.",
    },
    {
      question: "Hva er kontrollrutinens første punkt før du leverer?",
      options: ["Sjekke at $L$ er riktig, altså at perioden er $2L$", "Sjekke at alle koeffisientene er positive", "Telle antall ledd i rekka", "Sammenlikne med fasiten i læreboka"],
      explanation: "Halvperioden er den ene feilen som ødelegger alt annet samtidig. Koeffisienter skal ofte veksle i fortegn, så positivitet er ingen kontroll.",
    },
    {
      question: "Hvorfor lønner det seg å splitte en funksjon i odde og like del?",
      options: ["Fordi hver del får utnyttet symmetrien sin", "Fordi integralene ellers ikke lar seg regne ut", "Fordi rekka ellers får feil halvperiode", "Fordi bare symmetriske funksjoner har Fourier-rekke"],
      explanation: "Den odde delen gir bare sinuskoeffisienter og den like bare cosinuskoeffisienter, så to halve oppgaver med symmetri erstatter én hel uten. Enhver stykkevis glatt funksjon har Fourier-rekke, symmetrisk eller ikke.",
    },
    {
      question: "Hva sier drillens kort om nevneren $2L$ mot $L$?",
      options: ["$2L$ hører til $a_0$, mens $L$ hører til $a_n$ og $b_n$", "$2L$ hører til $b_n$, mens $L$ hører til $a_0$ og $a_n$", "Begge nevnere er $L$ når funksjonen er symmetrisk", "Nevneren er $2L$ i alle tre formlene"],
      explanation: "Konstantleddet er middelverdien over hele perioden og deles derfor på hele periodelengden. De to andre deles på halvperioden. Forveksling gir et konstantledd som er dobbelt eller halvparten så stort.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom et solid resultat og et toppresultat i denne sjangeren?",
      options: ["At symmetri, midling og tallrekkesum blir fullført", "At man tar med flere ledd i rekka enn oppgaven ber om", "At man bruker kompleks form i stedet for reell", "At man skriver svaret med flere desimaler"],
      explanation: "De mekaniske delpunktene gir et solid og helt vanlig resultat. Forskjellen opp ligger i begrunnelsene og i å fullføre de siste delpunktene, ikke i å gjøre mer av det samme.",
    },
  ],
  'tma4135-4-1': [
    {
      question: "Hvilken faktor står foran integralet i bokas Fourier-transform?",
      options: ["$\\frac{1}{\\sqrt{2\\pi}}$, både fram og tilbake", "$\\frac{1}{2\\pi}$ fram og $1$ tilbake", "$1$ fram og $\\frac{1}{2\\pi}$ tilbake", "$\\sqrt{2\\pi}$ fram og tilbake"],
      explanation: "Boka og det utdelte arket bruker den symmetriske konvensjonen med samme faktor begge veier. Andre plasseringer er like riktige, men da endres også konvolusjonsteoremet.",
    },
    {
      question: "Hva skiller den inverse transformen fra transformen selv?",
      options: ["Bare fortegnet i eksponenten", "Bare faktoren foran integralet", "Integrasjonsgrensene", "At den ene er kompleks og den andre reell"],
      explanation: "Begge har samme faktor og samme grenser; transformen har minus i eksponenten og den inverse pluss. Det er nettopp den symmetrien som gjør at en tabellrad kan leses begge veier.",
    },
    {
      question: "Transformen av $e^{-ax^2}$ er:",
      options: ["$\\frac{1}{\\sqrt{2a}}e^{-\\omega^2/(4a)}$", "$\\frac{1}{\\sqrt{2a}}e^{-a\\omega^2/4}$", "$\\sqrt{2a}\\,e^{-\\omega^2/(4a)}$", "$\\frac{1}{\\sqrt{4a}}e^{-\\omega^2/(2a)}$"],
      explanation: "Gauss-raden på formelarket. Parameteren a står i nevneren under omega i andre, og under rottegnet i faktoren. Sett a inn på begge steder.",
    },
    {
      question: "Hvilken funksjon har transform $\\sqrt{\\frac{2}{\\pi}}\\frac{a}{a^2+\\omega^2}$?",
      options: ["$e^{-a|x|}$", "$e^{-ax^2}$", "$\\frac{1}{x^2+a^2}$", "boksfunksjonen på $(-a,a)$"],
      explanation: "Dette er raden for eksponentialfunksjonen med absoluttverdi. Blandingen med Gauss-raden er den vanligste feilen: se etter om x står i absoluttverdi eller i andre potens.",
    },
    {
      question: "Derivasjonsregelen sier at $\\widehat{f'}(\\omega)$ er:",
      options: ["$i\\omega\\,\\hat{f}(\\omega)$", "$-i\\omega\\,\\hat{f}(\\omega)$", "$\\omega\\,\\hat{f}(\\omega)$", "$\\frac{d}{d\\omega}\\hat{f}(\\omega)$"],
      explanation: "Regelen følger av delvis integrasjon, der randleddet forsvinner fordi funksjonen går mot null. Formen $\\frac{d}{d\\omega}\\hat{f}(\\omega)$ er derivasjon i frekvensdomenet, som hører til regelen for multiplikasjon med x.",
    },
    {
      question: "Hva er $\\widehat{f''}(\\omega)$?",
      options: ["$-\\omega^2\\hat{f}(\\omega)$", "$\\omega^2\\hat{f}(\\omega)$", "$i\\omega^2\\hat{f}(\\omega)$", "$-i\\omega^2\\hat{f}(\\omega)$"],
      explanation: "To derivasjoner gir faktoren i omega opphøyd i andre, som er minus omega i andre. Mister du minustegnet, får varmelikningen en løsning som vokser i stedet for å dempes.",
    },
    {
      question: "Konvolusjonsteoremet i denne konvensjonen sier:",
      options: ["$\\widehat{f*g} = \\sqrt{2\\pi}\\,\\hat{f}\\hat{g}$", "$\\widehat{f*g} = \\hat{f}\\hat{g}$", "$\\widehat{f*g} = 2\\pi\\,\\hat{f}\\hat{g}$", "$\\widehat{f*g} = \\frac{1}{\\sqrt{2\\pi}}\\hat{f}\\hat{g}$"],
      explanation: "Faktoren følger av at normeringen er delt likt mellom transform og invers. I den fysiske konvensjonen faller den bort — derfor må du si hvilken konvensjon du bruker.",
    },
    {
      question: "Hvordan er konvolusjonen $(f*g)(x)$ definert i Fourier-sammenheng?",
      options: ["$\\int_{-\\infty}^{\\infty}f(t)g(x-t)\\,dt$", "$\\int_0^{t}f(\\tau)g(t-\\tau)\\,d\\tau$", "$\\int_{-\\infty}^{\\infty}f(t)g(x+t)\\,dt$", "$\\int_{-\\infty}^{\\infty}f(t)g(t)\\,dt$"],
      explanation: "Argumentet må være x minus t, og integralet går over hele tallinja. Formen med grensene 0 og t er Laplace-konvolusjonen fra Del 2, som brukes for funksjoner som er null for negative argumenter.",
    },
    {
      question: "Forskyvningsregelen sier at $\\widehat{f(x-b)}(\\omega)$ er:",
      options: ["$e^{-ib\\omega}\\hat{f}(\\omega)$", "$e^{ib\\omega}\\hat{f}(\\omega)$", "$\\hat{f}(\\omega-b)$", "$\\frac{1}{b}\\hat{f}\\!\\left(\\frac{\\omega}{b}\\right)$"],
      explanation: "Forskyvning i x gir en fasefaktor med minus i eksponenten. Formen $\\frac{1}{b}\\hat{f}\\!\\left(\\frac{\\omega}{b}\\right)$ er skaleringsregelen, som handler om å strekke funksjonen, ikke å flytte den.",
    },
    {
      question: "Hva skjer med amplitudespekteret når funksjonen forskyves?",
      options: ["Ingenting — bare fasen endres", "Det skaleres med forskyvningen", "Det speiles om $\\omega=0$", "Det blir null for store $\\omega$"],
      explanation: "Fasefaktoren har absoluttverdi 1, så amplituden er upåvirket. Det er derfor to lyder som bare skiller seg i starttidspunkt, har identisk amplitudespekter.",
    },
    {
      question: "Boksfunksjonen på $(-a,a)$ har transform som dør ut som:",
      options: ["$1/\\omega$", "$1/\\omega^2$", "$1/\\omega^3$", "$e^{-\\omega}$"],
      explanation: "Skarpe kanter gir bredt frekvensinnhold og det tregeste fallet. En funksjon med bare knekk gir 1 delt på omega i andre, og en glatt funksjon dør ut raskere enn enhver potens.",
    },
    {
      question: "Hvorfor kan tabellen leses begge veier?",
      options: ["Fordi de to retningene bare skiller seg i fortegn", "Fordi alle transformene er reelle funksjoner", "Fordi alle radene gjelder like funksjoner", "Fordi alle integralene konvergerer absolutt og entydig"],
      explanation: "Den symmetriske konvensjonen gjør de to retningene nesten identiske. Derfor kan du finne en transform som ikke står i tabellen, ved å lete etter den inverse i stedet.",
    },
    {
      question: "Første steg i å løse en integrallikning med transform er å:",
      options: ["Kjenne igjen venstre side som en konvolusjon", "Derivere begge sider med hensyn på $x$", "Sette $\\omega=0$ og lese av konstanten", "Gjette en funksjonsform og sette inn"],
      explanation: "Uten å identifisere konvolusjonen kan ikke konvolusjonsteoremet brukes, og hele metoden faller. Å skrive setningen er dessuten et eget poeng i besvarelsen.",
    },
    {
      question: "Hva er siste steg i en integrallikning av konvolusjonstype?",
      options: ["Å lese tabellen baklengs og oppgi $f$", "Å oppgi $\\hat{f}$ på enklest mulig form", "Å sette inn $\\omega=0$ og sjekke", "Å derivere svaret for å kontrollere"],
      explanation: "Oppgaven spør etter funksjonen, ikke etter transformen. Å stanse ved transformen er et halvt svar, selv om alt før er riktig.",
    },
    {
      question: "En reell og like funksjon har en transform som er:",
      options: ["Reell og like", "Rent imaginær og odde", "Kompleks uten symmetri", "Alltid positiv"],
      explanation: "Symmetrireglene er de samme som for komplekse Fourier-koeffisienter. En reell odde funksjon får derimot en rent imaginær og odde transform.",
    },
    {
      question: "Regelen for multiplikasjon med $x$ sier at $\\widehat{xf(x)}$ er:",
      options: ["$i\\frac{d}{d\\omega}\\hat{f}(\\omega)$", "$-i\\frac{d}{d\\omega}\\hat{f}(\\omega)$", "$i\\omega\\hat{f}(\\omega)$", "$\\frac{1}{i\\omega}\\hat{f}(\\omega)$"],
      explanation: "Regelen er speilbildet av derivasjonsregelen og følger av å derivere transformintegralet under integraltegnet. Alternativet med i omega er derivasjonsregelen selv.",
    },
    {
      question: "Hvilken kontroll fanger raskest en gal konstant i en transform?",
      options: ["Sette $\\omega=0$ og sammenlikne med arealet", "Sjekke at transformen er positiv", "Telle antall ledd i uttrykket", "Derivere transformen og se om den er null"],
      explanation: "Transformen i null er integralet av funksjonen delt på rota av 2 pi. Kontrollen tar femten sekunder og avslører feil parameter eller glemt normeringsfaktor.",
    },
    {
      question: "Hva kreves for at Fourier-transformen skal finnes?",
      options: ["At $f$ er absolutt integrerbar", "At $f$ er periodisk med endelig periode", "At $f$ er deriverbar overalt", "At $f$ er positiv for alle $x$"],
      explanation: "Funksjonen må dø ut raskt nok i begge retninger. En konstant funksjon eller en ren sinus oppfyller ikke kravet og har derfor ingen vanlig Fourier-transform.",
    },
  ],
  'tma4135-4-2': [
    {
      question: "Hva er signalet om at Fourier-transform er riktig metode for en PDE?",
      options: ["At $x$ løper over hele $\\mathbb{R}$ uten randbetingelser", "At likningen inneholder en andrederivert i $x$", "At initialbetingelsen er en Gauss-funksjon", "At likningen er lineær med konstante koeffisienter"],
      explanation: "Det er domenet som avgjør, ikke likningen. Samme varmelikning løses med transform på hele tallinja og med separasjon av variable på et endelig intervall med randbetingelser.",
    },
    {
      question: "Hva blir $u_{xx}$ etter Fourier-transform i $x$?",
      options: ["$-\\omega^2\\hat{u}$", "$\\omega^2\\hat{u}$", "$i\\omega\\hat{u}$", "$\\frac{\\partial^2\\hat{u}}{\\partial\\omega^2}$"],
      explanation: "To derivasjoner gir faktoren i omega i andre, altså minus omega i andre. Uten minustegnet blir løsningen voksende i stedet for dempet, og det er fysisk meningsløst.",
    },
    {
      question: "I den transformerte likningen er $\\omega$:",
      options: ["En konstant", "En variabel det deriveres etter", "Alltid lik null", "Et positivt heltall"],
      explanation: "Transformen er tatt i x, og i den resulterende likningen deriveres det bare i t. Derfor er likningen ordinær, ikke partiell — og det er hele gevinsten.",
    },
    {
      question: "Hvordan skal integrasjonskonstanten skrives?",
      options: ["$C(\\omega)$, som en funksjon av frekvensen", "$C$, som et vanlig tall", "$C(t)$, som en funksjon av tiden", "$C(x)$, som en funksjon av stedet"],
      explanation: "Likningen løses separat for hver frekvens, så hver av dem har sin egen konstant. Skriver du bare C, mister du koblingen til initialbetingelsen.",
    },
    {
      question: "Hvordan bestemmes $C(\\omega)$?",
      options: ["Ved å sette $t=0$ og transformere initialbetingelsen", "Ved å sette $\\omega=0$ i den transformerte likningen", "Ved å kreve at løsningen er begrenset", "Ved å integrere den transformerte likningen over $\\omega$"],
      explanation: "Ved tiden null reduseres eksponentialfaktoren til 1, så konstanten er nettopp transformen av initialdataene. Det er steg 3 i firestegsoppskriften.",
    },
    {
      question: "Hva er løsningen av $u_t + cu_x = 0$ med $u(x,0)=f(x)$?",
      options: ["$f(x-ct)$", "$f(x+ct)$", "$e^{-ct}f(x)$", "$f(x)-ct$"],
      explanation: "Profilen flyttes med fart c i positiv retning uten å endre form. Alternativet med pluss svarer til likningen med motsatt fortegn foran førstederiverte.",
    },
    {
      question: "Hva styrer realdelen av $\\lambda(\\omega)$ i $\\hat{u}_t = \\lambda\\hat{u}$?",
      options: ["Dempingen av hver frekvenskomponent", "Transporten av profilen langs $x$-aksen", "Startamplituden", "Bredden av initialpulsen"],
      explanation: "En negativ realdel gir eksponentiell demping. En rent imaginær lambda gir bare faseforskyvning, altså at profilen flyttes uten å dø ut.",
    },
    {
      question: "Hvorfor glatter varmelikningen ut skarpe kanter?",
      options: ["Fordi $e^{-\\omega^2 t}$ dempes raskest for høy $\\omega$", "Fordi alle frekvenser dempes like mye med tiden", "Fordi løsningen alltid er en Gauss-funksjon", "Fordi arealet under kurven synker med tiden"],
      explanation: "Dempingsraten er omega i andre, så en dobling av frekvensen firedobler dempingen. Skarpe kanter er nettopp de høye frekvensene. Arealet holder seg for øvrig konstant.",
    },
    {
      question: "Varmekjernen $G(x,t)$ er:",
      options: ["$\\frac{1}{\\sqrt{4\\pi t}}e^{-x^2/(4t)}$", "$\\frac{1}{\\sqrt{2\\pi t}}e^{-x^2/(2t)}$", "$\\frac{1}{\\sqrt{4\\pi t}}e^{-x^2 t/4}$", "$\\frac{1}{\\sqrt{2\\pi}}e^{-\\omega^2 t}$"],
      explanation: "Kjernen er en Gauss-kurve med areal 1 for alle t og bredde proporsjonal med rota av t. Uttrykket $\\frac{1}{\\sqrt{2\\pi}}e^{-\\omega^2 t}$ er transformen av kjernen, ikke kjernen selv.",
    },
    {
      question: "Løsningen $u = f*G$ betyr at temperaturen i et punkt er:",
      options: ["Et veid gjennomsnitt av starttemperaturen", "Startverdien i det samme punktet", "Summen av alle startverdiene", "Startverdien i punktet forskjøvet med $t$"],
      explanation: "Vekten er en klokkeform sentrert i punktet, med bredde som vokser med tiden. Jo lenger du venter, jo lenger unna henter punktet informasjon.",
    },
    {
      question: "Hva er siste steg i firestegsoppskriften?",
      options: ["Å transformere tilbake og oppgi $u(x,t)$", "Å oppgi $\\hat{u}(\\omega,t)$ på enklest form", "Å kontrollere at $\\lambda$ er negativ", "Å integrere over $\\omega$ fra null til uendelig"],
      explanation: "Oppgaven spør etter funksjonen, ikke transformen. Tilbaketransformasjonen gjøres ved å kjenne igjen en tabellrad med tiden gjemt inne i parameteren.",
    },
    {
      question: "Hvilken kontroll bør alltid gjøres til slutt?",
      options: ["Sette $t=0$ og sjekke initialbetingelsen", "Sette $x=0$ og se om svaret er positivt", "Derivere svaret med hensyn på $\\omega$", "Sammenlikne med varmekjernen uansett likning"],
      explanation: "Kontrollen tar ti sekunder og avslører feil i både steg 3 og steg 4. Å sette inn løsningen i selve likningen er en enda sterkere kontroll, hvis du har tid.",
    },
  ],
  'tma4135-4-3': [
    {
      question: "Hva er $w$ i den diskrete Fourier-transformen?",
      options: ["$e^{2\\pi i/N}$, den $N$-te enhetsroten", "$e^{2\\pi i N}$, en potens av enhetsroten", "$e^{i\\pi/N}$, den $2N$-te enhetsroten", "$1/N$, normeringsfaktoren"],
      explanation: "Enhetsroten ligger på enhetssirkelen med vinkel to pi delt på N. For N lik 4 er den i. Potensene gjentar seg med periode N.",
    },
    {
      question: "DFT-koeffisienten $c_k$ er i bokas konvensjon:",
      options: ["$\\frac1N\\sum_j f_j w^{-jk}$", "$\\sum_j f_j w^{-jk}$", "$\\frac1N\\sum_j f_j w^{jk}$", "$\\frac{1}{\\sqrt N}\\sum_j f_j w^{jk}$"],
      explanation: "Boka legger faktoren 1 delt på N foran transformen og bruker minus i eksponenten. Andre konvensjoner er like riktige, men må brukes konsekvent begge veier.",
    },
    {
      question: "Hva er $c_0$ i bokas konvensjon?",
      options: ["Middelverdien av dataene", "Summen av alle dataene", "Den største verdien i datavektoren", "Alltid null"],
      explanation: "Med faktoren 1 delt på N foran blir koeffisienten med indeks null gjennomsnittet. Det er den billigste kontrollen som finnes på et DFT-svar.",
    },
    {
      question: "Den inverse DFT-en er:",
      options: ["$f_j = \\sum_k c_k w^{jk}$", "$f_j = \\frac1N\\sum_k c_k w^{jk}$", "$f_j = \\sum_k c_k w^{-jk}$", "$f_j = \\frac1N\\sum_k c_k w^{-jk}$"],
      explanation: "Faktoren 1 delt på N ligger allerede i transformen, så den skal ikke gjentas. Og eksponenten har pluss, akkurat som i den komplekse Fourier-rekka.",
    },
    {
      question: "Reell-testen for en reell datavektor sier at:",
      options: ["$c_{N-k} = \\overline{c_k}$", "$c_{N-k} = c_k$ for alle $k$", "alle $c_k$ er reelle", "$c_k = 0$ for odde $k$"],
      explanation: "Kravet er konjugert symmetri. At koeffisientene er like uten konjugering, gjelder bare i det spesialtilfellet der de tilfeldigvis er reelle.",
    },
    {
      question: "For like $N$ må $c_{N/2}$ være:",
      options: ["Reell, når dataene er reelle", "Rent imaginær, når dataene er reelle", "Null, uansett data", "Lik $c_0$"],
      explanation: "Indeksen N halve er sin egen speiling i reell-testen, så koeffisienten må være lik sin egen konjugerte. Det betyr at den er reell.",
    },
    {
      question: "Hva sier skifteegenskapen for $\\tilde{f}_j = f_{j+1}$?",
      options: ["$\\tilde{c}_k = w^{k}c_k$", "$\\tilde{c}_k = w^{-k}c_k$", "$\\tilde{c}_k = c_{k+1}$", "$\\tilde{c}_k = w^{j}c_k$"],
      explanation: "Skift fram gir positiv eksponent; skift bakover gir negativ. Retningen må oppgis for at fortegnet skal være entydig.",
    },
    {
      question: "Hva skjer med amplitudespekteret ved et syklisk skift?",
      options: ["Det er uendret, siden $\\lvert w^k\\rvert = 1$", "Det skaleres med $N$", "Det speiles om midtindeksen $N/2$ i spekteret", "Det blir null for odde indekser"],
      explanation: "Faktoren har absoluttverdi 1 og endrer bare fasen. All informasjon om posisjonen til svingningene ligger i fasene, ikke i amplitudene.",
    },
    {
      question: "Hva er aliasing?",
      options: ["At frekvensene $m$ og $m+N$ gir identiske måleverdier", "At koeffisientene blir komplekse for reelle data", "At summen av koeffisientene ikke blir null", "At den inverse transformen mister et ledd"],
      explanation: "Siden w opphøyd i N er 1, kan de to frekvensene ikke skilles av N målepunkter. Det er derfor et hjul i film kan se ut til å gå baklengs.",
    },
    {
      question: "Når gir avlesning av koeffisientene et eksakt svar?",
      options: ["Når signalet er båndbegrenset med $|m| < N/2$", "Når alle dataene er positive", "Når $N$ er et primtall", "Når signalet er periodisk med periode $N$"],
      explanation: "Er alle frekvensene innenfor båndet, oppstår ingen aliasing, og koeffisientene kan leses rett av. Ellers folder høye frekvenser seg ned på lave.",
    },
    {
      question: "Hvor havner bidraget fra leddet $e^{-2\\pi i m j/N}$?",
      options: ["På indeks $N-m$", "På indeks $m$", "På indeks $N+m$", "På indeks $N/2$"],
      explanation: "Negativ frekvens oversettes til positiv indeks ved periodisiteten. Det er derfor et cosinusledd gir to like bidrag, symmetrisk plassert om midten.",
    },
    {
      question: "Hva gir ortogonalitetsrelasjonen for enhetsrøtter?",
      options: ["$\\frac1N\\sum_j w^{j(m-k)}$ er 1 for $m=k$ og 0 ellers", "$\\frac1N\\sum_j w^{j(m-k)}$ er $N$ for $m=k$ og 0 ellers", "$\\sum_j w^{j(m-k)}$ er alltid null", "$\\sum_j w^{j(m-k)}$ er alltid $N$"],
      explanation: "For like indekser er hvert ledd 1, og summen delt på N blir 1. For ulike indekser gir den geometriske rekka null, fordi telleren inneholder w opphøyd i N minus 1.",
    },
    {
      question: "Hva er periodisiteten i koeffisientene?",
      options: ["$c_{k+N} = c_k$", "$c_{k+N} = w^N c_k$", "$c_{k+1} = w c_k$", "$c_{2k} = c_k$"],
      explanation: "Egenskapen følger av at w opphøyd i N er 1. Konsekvensen er at indeks minus k betyr det samme som indeks N minus k, som er praktisk i reell-testen.",
    },
    {
      question: "Hvor sterkt er arkivbelegget for den diskrete transformen i dette emnet?",
      options: ["2 av 13 sett, begge kontinuasjonssett", "7 av 13 sett, jevnt fordelt", "13 av 13 sett, den er alltid med", "Ingen av settene — den er rent framtidsrettet"],
      explanation: "Sjangeren er ny og opptrer i de to siste kontinuasjonssettene i arkivet. Den skal beherskes fordi den er fast der, men den bør prioriteres etter de fire søylene i emnet.",
    },
  ],
  'tma4135-5-1': [
    {
      question: "Hva er separasjonsansatsen i denne sjangeren?",
      options: ["$u(x,t) = F(x)\\,G(t)$ — et produkt av to enfaktorfunksjoner", "$u(x,t) = F(x) + G(t)$ — en sum av to enfaktorfunksjoner", "$u(x,t) = F(x)/G(t)$ — en kvotient av to funksjoner", "$u(x,t) = F(x,t)\\,G(x,t)$ — et produkt av to tofaktorfunksjoner"],
      explanation: "Ansatsen er et produkt av en funksjon av x alene og en funksjon av t alene. Det er nettopp produktformen som gjør at likningen kan deles i to, siden en sum eller kvotient ikke lar seg skille på samme måte.",
    },
    {
      question: "Hva blir $u_{xx}$ når $u = F(x)G(t)$?",
      options: ["$F''(x)\\,G(t)$", "$F(x)\\,G''(t)$", "$F''(x)\\,G''(t)$", "$F'(x)\\,G'(t)$"],
      explanation: "Når vi deriverer med hensyn på x, er G en konstant og blir stående uendret. Bare F deriveres, og to ganger, så resultatet er F dobbeltderivert ganger G.",
    },
    {
      question: "Med bokas konvensjon $F''/F = -k$, hvilke to likninger gir separasjonen av $u_t = c^2u_{xx}$?",
      options: ["$F'' + kF = 0$ og $G' + c^2kG = 0$", "$F'' - kF = 0$ og $G' - c^2kG = 0$", "$F'' + kF = 0$ og $G'' + c^2kG = 0$", "$F' + kF = 0$ og $G' + c^2kG = 0$"],
      explanation: "Konvensjonen gir F dobbeltderivert lik minus k ganger F, altså den første. Varmelikningen har bare én tidsderivert, så G-likningen er av første orden, ikke andre.",
    },
    {
      question: "Hvorfor må begge sider i $\\dfrac{G'}{c^2G} = \\dfrac{F''}{F}$ være konstante?",
      options: ["Venstre side avhenger bare av $t$, høyre bare av $x$, men de er like overalt", "Fordi $F$ og $G$ begge er antatt å være konstante funksjoner helt fra starten", "Fordi randbetingelsene tvinger begge brøkene til å være null i hele intervallet", "Fordi varmelikningen er lineær, og lineære likninger har konstante brøksider"],
      explanation: "Holder du x fast og lar t variere, kan ikke høyresiden endre seg, og dermed heller ikke venstresiden. Det samme argumentet motsatt vei gjør at begge må være én og samme konstant.",
    },
    {
      question: "Hva er den trivielle løsningen?",
      options: ["Funksjonen $u \\equiv 0$, som alltid oppfyller homogene randbetingelser", "Funksjonen $u \\equiv 1$, som alltid oppfyller homogene randbetingelser", "Den enkleste egenfunksjonen, altså moden med $n = 1$ og lavest egenverdi", "Løsningen som svarer til tilfellet $k = 0$ ved kalde ender i begge ender"],
      explanation: "Den trivielle løsningen er funksjonen som er null overalt. Den oppfyller likningen og alle homogene randbetingelser, men er uinteressant, og halve arbeidet består i å vise at to av k-tilfellene bare gir den.",
    },
    {
      question: "Hvilken løsningsform har $F'' + kF = 0$ når $k > 0$, med $k = p^2$?",
      options: ["$F = A\\cos px + B\\sin px$", "$F = A\\cosh px + B\\sinh px$", "$F = Ax + B$", "$F = Ae^{px} + Bxe^{px}$"],
      explanation: "Positiv k gir en ren svingningslikning, og løsningene er cosinus og sinus. Hyperbelfunksjonene hører til negativ k, og den rette linja til k lik null.",
    },
    {
      question: "Hvilken løsningsform har $F'' + kF = 0$ når $k < 0$, med $k = -\\mu^2$?",
      options: ["$F = A\\cosh\\mu x + B\\sinh\\mu x$", "$F = A\\cos\\mu x + B\\sin\\mu x$", "$F = Ax + B$", "$F = A\\cos\\mu x + Bx\\sin\\mu x$"],
      explanation: "Negativ k gir F dobbeltderivert lik mu i andre ganger F, altså hyperbolske løsninger. De kan like gjerne skrives som en sum av to eksponentialer, og de to formene er like gode.",
    },
    {
      question: "Hvorfor gir tilfellet $k < 0$ bare den trivielle løsningen ved Dirichlet-rand?",
      options: ["Fordi $\\cosh$ aldri er null og $\\sinh$ bare er null i $x = 0$", "Fordi $\\cosh$ og $\\sinh$ vokser og aldri kan være null noe sted", "Fordi hyperbelfunksjoner ikke er deriverbare i randpunktene", "Fordi tidsfaktoren vokser og derfor er fysisk umulig for en kald stang"],
      explanation: "Randbetingelsen i null gir A lik null, og betingelsen i den andre enden krever at sinus hyperbolsk av et positivt tall er null, noe den aldri er. Argumentet om voksende tidsfaktor er riktig fysikk, men er ikke det fasitene godtar som bevis.",
    },
    {
      question: "Ved hvilken randtype overlever tilfellet $k = 0$ med en ikke-triviell løsning?",
      options: ["Når begge randbetingelsene er av Neumann-type, altså $F'(0) = F'(L) = 0$", "Når begge randbetingelsene er av Dirichlet-type, altså $F(0) = F(L) = 0$", "Når venstre ende er kald og høyre ende er isolert, altså blandet rand", "Ved alle randtyper, siden en konstant alltid løser $F'' = 0$ og randkravet"],
      explanation: "Med k lik null er F en rett linje, og den deriverte er en konstant. To Neumann-krav sier begge det samme, nemlig at stigningen er null, og konstantleddet står fritt. Så snart minst én ende fastsetter verdien av F, dør den rette linja.",
    },
    {
      question: "Hva er egenverdiene ved Dirichlet-rand på $[0,L]$?",
      options: ["$k_n = \\left(\\dfrac{n\\pi}{L}\\right)^2$ for $n = 1,2,3,\\dots$", "$k_n = \\left(\\dfrac{n\\pi}{2L}\\right)^2$ for $n = 1,2,3,\\dots$", "$k_n = \\left(\\dfrac{n\\pi}{L}\\right)^2$ for $n = 0,1,2,\\dots$", "$k_n = \\dfrac{n\\pi}{L}$ for $n = 1,2,3,\\dots$"],
      explanation: "Sluttlikningen er at sinus av p ganger L er null, altså at p er et helt multiplum av pi delt på L. Egenverdien er kvadratet av p, og tellingen starter på 1 fordi n lik 0 ville gitt den forkastede nullverdien.",
    },
    {
      question: "Hva er egenfunksjonene ved Neumann-rand på $[0,L]$?",
      options: ["$F_0 = 1$ og $F_n = \\cos\\dfrac{n\\pi x}{L}$ for $n \\ge 1$", "$F_0 = 1$ og $F_n = \\sin\\dfrac{n\\pi x}{L}$ for $n \\ge 1$", "$F_n = \\cos\\dfrac{n\\pi x}{L}$ for $n \\ge 1$, uten konstantledd", "$F_n = \\cos\\dfrac{(2n-1)\\pi x}{2L}$ for $n \\ge 1$, bare odde ledd"],
      explanation: "Isolerte ender krever at den deriverte er null, og cosinus har vannrett tangent både i null og i L. I tillegg overlever tilfellet k lik null som en konstant, og det er det leddet som ikke dør ut med tida.",
    },
    {
      question: "Hva er sluttlikningen ved blandet rand, altså $F(0) = 0$ og $F'(L) = 0$?",
      options: ["$\\cos pL = 0$, som gir odde multipler av $\\pi/2$", "$\\sin pL = 0$, som gir hele multipler av $\\pi$", "$\\sinh pL = 0$, som bare har løsningen $p = 0$", "$\\tan pL = 0$, som gir hele multipler av $\\pi$"],
      explanation: "Betingelsen i null gir F lik en konstant ganger sinus. Deriverer du og setter inn L, står det cosinus av p ganger L lik null, og cosinus er null i odde multipler av pi delt på to.",
    },
    {
      question: "Hvor hører konstanten $c^2$ hjemme i den ferdige produktløsningen?",
      options: ["I tidsfaktoren, som eksponenten $e^{-c^2k_nt}$", "I egenverdien, som $k_n = c^2\\left(n\\pi/L\\right)^2$", "I egenfunksjonen, som $F_n = \\sin\\dfrac{cn\\pi x}{L}$", "I randbetingelsen, som $u(0,t) = c^2$ ved kalde ender"],
      explanation: "Konstanten står bare i G-likningen, altså i tidsfaktoren. Egenverdiene avhenger utelukkende av intervallengden og randtypen, aldri av hvor rask stanga er.",
    },
    {
      question: "Hvordan begrunnes overgangen fra $u(0,t) = 0$ til $F(0) = 0$?",
      options: ["$F(0)G(t)$ er null for alle $t$, og $G \\not\\equiv 0$ hvis løsningen ikke er triviell", "Produktet $F(0)G(t)$ er null, og derfor må begge faktorene være null samtidig overalt", "Randbetingelsen gjelder bare i ett punkt, så $F$ må være null i hele intervallet uansett", "Fordi $G(t)$ per definisjon er lik 1 i alle punkter på randen av det gitte intervallet"],
      explanation: "Er G identisk null, er hele løsningen null, altså den trivielle. Siden vi leter etter ikke-trivielle løsninger, må F være null i randpunktet. Denne ene setningen er et eget poeng på eksamen.",
    },
    {
      question: "Hva blir tidsfaktoren $G$ for varmelikningen med egenverdi $k_n$?",
      options: ["$G_n(t) = e^{-c^2k_nt}$, en eksponentiell demping", "$G_n(t) = e^{+c^2k_nt}$, en eksponentiell vekst", "$G_n(t) = \\cos\\!\\left(c\\sqrt{k_n}\\,t\\right)$, en ren svingning", "$G_n(t) = 1 - c^2k_nt$, en lineær avtakning"],
      explanation: "Likningen G derivert pluss c i andre ganger k ganger G lik null er den enkleste eksponentiallikningen, og løsningen dør ut fordi både k og c i andre er positive. Svingningen hører til bølgeligningen, som har to tidsderiverte.",
    },
    {
      question: "Hva er den eneste forskjellen mellom separasjonen av varme- og bølgeligningen?",
      options: ["$G$-likningen blir av andre orden i stedet for første; $F$-likningen er identisk", "$F$-likningen blir av fjerde orden i stedet for andre; $G$-likningen er identisk", "Randbetingelsene må være av Neumann-type i bølgetilfellet, ikke Dirichlet", "Separasjonskonstanten må være negativ i bølgetilfellet og positiv for varme"],
      explanation: "Randbetingelsene sier ingenting om G, så hele analysen av de tre k-tilfellene er ordrett den samme. Det er bare tidslikningen som får en ekstra derivasjon, og den gir svingning i stedet for demping.",
    },
    {
      question: "En stang ligger på $[-1,1]$ med kalde ender. Hva er egenverdiene?",
      options: ["$k_n = \\left(\\dfrac{n\\pi}{2}\\right)^2$, siden lengden er 2", "$k_n = \\left(n\\pi\\right)^2$, siden randpunktet er $x = 1$", "$k_n = \\left(\\dfrac{n\\pi}{4}\\right)^2$, siden lengden er 4", "$k_n = \\left(\\dfrac{(2n-1)\\pi}{4}\\right)^2$, siden intervallet er symmetrisk"],
      explanation: "Egenverdiene avhenger bare av lengden på intervallet, ikke av hvor det ligger. Fra minus 1 til 1 er lengden 2, så nevneren er 2. En forskyvning endrer verken den dobbeltderiverte eller randkravene.",
    },
    {
      question: "Hva kjennetegner egenverdiene ved blandet rand?",
      options: ["Bare odde multipler av $\\pi/(2L)$ er tillatt", "Bare like multipler av $\\pi/(2L)$ er tillatt", "Alle hele multipler av $\\pi/L$ er tillatt, som ved Dirichlet", "Alle multipler av $\\pi/(2L)$ er tillatt, både odde og like"],
      explanation: "Sluttlikningen blir en cosinuslikning i stedet for en sinuslikning, og cosinus er null bare i odde multipler av pi halve. Det gir større avstand mellom egenverdiene enn ved lik randtype i begge ender.",
    },
    {
      question: "Hva er en egenfunksjon i denne sammenhengen?",
      options: ["En ikke-triviell løsning $F_n$, bestemt opp til en konstant faktor", "En løsning $F_n$ av randverdiproblemet med normert lengde lik 1 over hele intervallet", "Tidsfaktoren $G_n$ som hører til den $n$-te tillatte verdien av separasjonskonstanten", "Den fullstendige produktløsningen $u_n = F_nG_n$ for den $n$-te tillatte egenverdien"],
      explanation: "Egenfunksjonen er romfaktoren, ikke tidsfaktoren og ikke produktet. Er F en løsning, er også sju ganger F det, så vi skriver den alltid i enklest mulig form uten konstant foran.",
    },
    {
      question: "Hva er den beste kontrollen av en ferdig produktløsning?",
      options: ["Sett den inn i likningen og i begge randbetingelsene, og vis at alle er oppfylt", "Sett den inn i likningen alene, siden randbetingelsene alt er brukt underveis", "Sjekk at tidsfaktoren avtar, som den må for enhver fysisk varmeløsning", "Sjekk at egenverdien er positiv, siden bare positive $k$ overlever randkravet"],
      explanation: "Innsettingen tar to minutter og fanger både fortegnsfeil og feil egenverdi. På eksamen gir selve kontrollen ofte uttelling i seg selv, og delpunktet ber ofte eksplisitt om den.",
    },
  ],
  'tma4135-5-2': [
    {
      question: "Hva krever superposisjonsprinsippet for at det skal være lovlig?",
      options: ["At likningen er lineær og at randbetingelsene er homogene", "At likningen er lineær og at initialbetingelsen er en sum av sinuser", "At randbetingelsene er homogene og at intervallet er symmetrisk om null", "At likningen har konstante koeffisienter og at tidsfaktoren er avtakende"],
      explanation: "Både derivasjon og homogene randbetingelser er lineære operasjoner, så en sum av løsninger er en løsning. Er en randverdi ulik null, blir summen dobbelt så stor der, og hele metoden bryter sammen.",
    },
    {
      question: "Når kan koeffisientene $B_n$ leses av uten å regne et integral?",
      options: ["Når $u(x,0)$ allerede er en endelig sum av egenfunksjonene", "Når $u(x,0)$ er kontinuerlig og deriverbar på hele intervallet", "Når randbetingelsene er homogene og likningen er lineær", "Når intervallet har lengde $\\pi$, slik at argumentet blir $nx$"],
      explanation: "Egenfunksjonene er lineært uavhengige, så en endelig sum av dem kan sammenliknes ledd for ledd. Homogene randbetingelser og pene initialdata er nødvendige for metoden generelt, men de gjør ikke koeffisientene gratis.",
    },
    {
      question: "Hva er koeffisientformelen ved Dirichlet-rand på $[0,L]$?",
      options: ["$B_n = \\dfrac{2}{L}\\displaystyle\\int_0^L f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$", "$B_n = \\dfrac{1}{L}\\displaystyle\\int_0^L f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$", "$B_n = \\dfrac{2}{L}\\displaystyle\\int_{-L}^{L} f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$", "$B_n = \\dfrac{1}{2L}\\displaystyle\\int_0^L f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$"],
      explanation: "Dette er koeffisienten i Fourier-sinusrekka, altså den odde halvintervall-utvidelsen. Faktoren to over L kommer av at integralet over det symmetriske intervallet halveres når integranden er like.",
    },
    {
      question: "Hvilken faktor har konstantleddet $A_0$ ved Neumann-rand?",
      options: ["$\\dfrac{1}{L}$, mens de øvrige $A_n$ har $\\dfrac{2}{L}$", "$\\dfrac{2}{L}$, akkurat som de øvrige $A_n$", "$\\dfrac{1}{2L}$, mens de øvrige $A_n$ har $\\dfrac{1}{L}$", "$\\dfrac{2}{L}$, mens de øvrige $A_n$ har $\\dfrac{1}{L}$"],
      explanation: "Konstantleddet er middelverdien av initialtemperaturen over intervallet, og middelverdien deles på hele lengden. Dette er samme nevnerfelle som i den reelle Fourier-rekka i Del 3.",
    },
    {
      question: "Hva må gjøres først når randbetingelsene er $u(0,t) = 4$ og $u(L,t) = 9$?",
      options: ["Finn den stasjonære løsningen $w(x)$ og sett $v = u - w$", "Superponer egenfunksjonene og match initialbetingelsen som vanlig", "Bytt til Neumann-rand, siden Dirichlet-rand krever nullverdier", "Del hele likningen på 4 og 9 for å normere de to randverdiene"],
      explanation: "Ikke-homogene randbetingelser gjør superposisjon ulovlig. Reduksjonen med en stasjonær løsning gjør randbetingelsene null og lar resten av metoden virke uendret.",
    },
    {
      question: "Hva er den stasjonære løsningen for $u_t = c^2u_{xx}$ med $u(0,t) = T_0$ og $u(L,t) = T_1$?",
      options: ["$w(x) = T_0 + \\dfrac{T_1 - T_0}{L}x$, en rett linje mellom randverdiene", "$w(x) = T_0 + \\dfrac{T_1 - T_0}{2L}x$, en rett linje med halv stigning", "$w(x) = \\dfrac{T_0 + T_1}{2}$, altså middelverdien av de to randverdiene", "$w(x) = T_0\\cos\\dfrac{\\pi x}{L} + T_1\\sin\\dfrac{\\pi x}{L}$, en svingning"],
      explanation: "Setter du tidsderiverte lik null, blir kravet at den dobbeltderiverte er null, altså en rett linje. Randverdiene bestemmer skjæringspunkt og stigning, og linja er nettopp den fordelingen stanga ender opp med.",
    },
    {
      question: "Hvorfor oppfyller $v = u - w$ den samme likningen som $u$?",
      options: ["Fordi $w$ ikke avhenger av $t$ og $w'' = 0$, så begge sider er uendret", "Fordi $w$ er en løsning av likningen med de samme initialbetingelsene", "Fordi differansen av to vilkårlige løsninger alltid løser samme likning", "Fordi $w$ er konstant, og en konstant kan alltid legges til en løsning"],
      explanation: "Tidsderiverte av w er null, og den dobbeltderiverte er null, så begge ledd i likningen er upåvirket. Påstanden om at w er konstant er nær-sann, men w er som regel en rett linje eller en parabel, og da er det den dobbeltderiverte som gjør jobben.",
    },
    {
      question: "På $[0,2]$ med kalde ender, hvilken mode svarer $\\sin(\\pi x)$ til?",
      options: ["$n = 2$, siden egenfunksjonene er $\\sin\\dfrac{n\\pi x}{2}$", "$n = 1$, siden det står nøyaktig én $\\pi$ i argumentet", "$n = 4$, siden intervallet har lengde 2 og $2\\cdot 2 = 4$", "$n = \\pi$, siden faktoren foran $x$ i uttrykket er $\\pi$"],
      explanation: "Egenfunksjonene på et intervall av lengde 2 har argumentet n pi x delt på 2. Skriv om sinus av pi x til sinus av to pi x delt på to, og les av at n er 2. Bommer du her, blir dempingen fire ganger for treg.",
    },
    {
      question: "Hva nærmer løsningen seg når $t \\to \\infty$ ved isolerte ender?",
      options: ["Middelverdien av initialtemperaturen, altså konstantleddet $A_0$", "Null, siden alle eksponentialfaktorene går mot null med tida", "Den stasjonære løsningen $w(x)$, som er en rett linje mellom endene", "Verdien av initialtemperaturen i midtpunktet av intervallet"],
      explanation: "Isolerte ender slipper ikke ut varme, så middeltemperaturen er bevart. Alle moder med positiv egenverdi dør ut, og konstantleddet blir stående igjen som likevektstemperaturen.",
    },
    {
      question: "Hva er den stasjonære løsningen for $u_t = c^2u_{xx} + \\alpha$ med nullrand på $[0,L]$?",
      options: ["$w(x) = \\dfrac{\\alpha}{2c^2}\\,x(L-x)$, en parabel med topp på midten", "$w(x) = \\dfrac{\\alpha}{c^2}\\,x(L-x)$, en parabel med topp på midten", "$w(x) = \\dfrac{\\alpha}{2c^2}\\,x^2$, en parabel med minimum i venstre ende", "$w(x) = \\dfrac{\\alpha L}{2c^2}$, en konstant bestemt av kildeleddets styrke"],
      explanation: "Kravet er at c i andre ganger den dobbeltderiverte pluss alfa er null, altså at den dobbeltderiverte er minus alfa over c i andre. To integrasjoner og de to randkravene gir parabelen, som buer oppover fordi midten har lengst vei til de kalde endene.",
    },
    {
      question: "Hvilket ledd dominerer en varmeløsning etter kort tid?",
      options: ["Leddet med lavest egenverdi, siden dempingen vokser som $n^2$", "Leddet med høyest egenverdi, siden det har størst amplitude i starten", "Leddet med størst koeffisient, uavhengig av hvilken egenverdi det har", "Alle leddene like mye, siden de dempes med samme eksponentielle rate"],
      explanation: "Egenverdiene vokser som n i andre, så høye moder dør langt raskere enn lave. Etter kort tid ser enhver varmeprofil ut som grunnmoden, og det er derfor slike profiler alltid blir glatte.",
    },
    {
      question: "Hvorfor kan $\\sin x\\cos x$ på $[0,\\pi]$ behandles uten koeffisientintegral?",
      options: ["Fordi identiteten $\\sin\\theta\\cos\\theta = \\tfrac12\\sin 2\\theta$ gir én egenfunksjon", "Fordi produktet av to egenfunksjoner alltid selv er en egenfunksjon i samme basis", "Fordi funksjonen er odde, og odde funksjoner har bare sinusledd i Fourier-rekka", "Fordi funksjonen er null i begge endepunktene og derfor må være en egenfunksjon"],
      explanation: "Dobbeltvinkelformelen står på det utdelte formelarket og gjør uttrykket om til en halv sinus av to x, altså moden med n lik 2. Å være null i endene er ikke nok til at en funksjon er en egenfunksjon.",
    },
    {
      question: "Hva er Fourier-matching?",
      options: ["Å bestemme koeffisientene ved å kreve at rekka treffer initialbetingelsen", "Å bestemme koeffisientene ved å kreve at rekka treffer randbetingelsene", "Å velge egenfunksjonsbasis slik at den passer til den gitte randtypen", "Å tilpasse intervallengden slik at egenverdiene blir hele tall"],
      explanation: "Matchingen skjer ved tiden null, der alle tidsfaktorene er lik 1 og rekka reduseres til en ren egenfunksjonsutvikling av initialdataene. Randbetingelsene er alt brukt i det foregående steget.",
    },
    {
      question: "Hva er den vanligste tidsfella i denne sjangeren?",
      options: ["Å regne et koeffisientintegral der koeffisientene kunne vært lest av", "Å skrive ut alle tre $k$-tilfellene i stedet for bare det som overlever", "Å kontrollere den ferdige løsningen ved innsetting i randbetingelsene", "Å skrive ned intervallengden før man setter opp koeffisientformelen"],
      explanation: "Er initialdataene alt en egenfunksjonssum, koster integralet fem til ti minutter uten å gi ett ekstra poeng. De tre andre er tvert imot ting som gir uttelling eller sparer feil.",
    },
    {
      question: "Hva skjer i endepunktet hvis $u(x,0) = 1$ mens randbetingelsen er $u(0,t) = 0$?",
      options: ["Rekka gir midlingsverdien $\\tfrac12$, siden dataene har et sprang der", "Rekka gir verdien 1, siden initialbetingelsen har forrang i $t = 0$", "Rekka gir verdien 0, som er randbetingelsen, uten noen midling", "Rekka divergerer i punktet, siden dataene motsier hverandre der"],
      explanation: "Dataene er motstridende bare i det ene hjørnepunktet, og der har den odde utvidelsen et sprang. Konvergensteoremet gir da gjennomsnittet av de to ensidige grensene. For enhver positiv tid er løsningen glatt.",
    },
    {
      question: "Hva er riktig rekkefølge i en full separasjonsoppgave?",
      options: ["Gjør problemet homogent, separer, tre $k$-tilfeller, superponer, match, kontroller", "Separer, superponer, match, gjør problemet homogent, tre $k$-tilfeller, kontroller", "Match initialbetingelsen, separer, tre $k$-tilfeller, superponer, kontroller", "Separer, tre $k$-tilfeller, kontroller, gjør problemet homogent, superponer"],
      explanation: "Reduksjonen til et homogent problem må komme aller først, ellers er superposisjonen ulovlig og alt som følger blir feil. Kontrollen kommer sist, når det er noe å kontrollere.",
    },
  ],
  'tma4135-5-3': [
    {
      question: "Hva er bølgefarten i likningen $u_{tt} = 16u_{xx}$?",
      options: ["$c = 4$, altså kvadratroten av tallet foran $u_{xx}$", "$c = 16$, altså tallet foran $u_{xx}$ direkte", "$c = 8$, altså halvparten av tallet foran $u_{xx}$", "$c = 256$, altså kvadratet av tallet foran $u_{xx}$"],
      explanation: "Standardformen er u dobbeltderivert i tid lik c i andre ganger u dobbeltderivert i rom. Tallet foran er altså c i andre, og farten er kvadratroten. Å bruke tallet direkte er den vanligste feilen i denne sjangeren.",
    },
    {
      question: "Hva er den generelle løsningen av $u_{tt} = c^2u_{xx}$ på hele tallinja?",
      options: ["$u = \\phi(x + ct) + \\psi(x - ct)$ for vilkårlige to ganger deriverbare $\\phi, \\psi$", "$u = \\phi(x + ct)\\cdot\\psi(x - ct)$ for vilkårlige to ganger deriverbare $\\phi, \\psi$", "$u = \\phi(x)\\,\\psi(ct)$ for vilkårlige to ganger deriverbare $\\phi$ og $\\psi$", "$u = \\phi(x + ct) + \\psi(x + ct)$ for vilkårlige to ganger deriverbare $\\phi, \\psi$"],
      explanation: "Løsningen er en sum, ikke et produkt, av én venstregående og én høyregående bølge. Har begge leddene samme fortegn i argumentet, går begge samme vei, og du mister halve løsningsrommet.",
    },
    {
      question: "Hvilken vei beveger $\\psi(x - ct)$ seg?",
      options: ["Mot høyre med fart $c$, uten å endre form", "Mot venstre med fart $c$, uten å endre form", "Mot høyre med fart $c^2$, mens formen flates ut", "Den står stille og bare amplituden endrer seg med tida"],
      explanation: "Verdien i punktet x ved tiden t er den samme som verdien i x minus c t ved start, altså har profilen flyttet seg c t enheter til høyre. Minustegn i argumentet betyr høyre.",
    },
    {
      question: "Hvilke to koordinater gjør bølgeligningen om til $u_{yz} = 0$?",
      options: ["$y = x + ct$ og $z = x - ct$", "$y = x + t$ og $z = x - t$, uavhengig av $c$", "$y = ct + x^2$ og $z = ct - x^2$", "$y = x/c + t$ og $z = x/c - t$"],
      explanation: "De karakteristiske koordinatene må inneholde farten, ellers kansellerer ikke leddene. Regningen gir at differansen mellom de to sidene er minus fire c i andre ganger den blandede deriverte.",
    },
    {
      question: "Hva er d'Alemberts formel?",
      options: ["$u = \\tfrac12\\left(f(x+ct)+f(x-ct)\\right) + \\tfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct} g$", "$u = \\tfrac12\\left(f(x+ct)+f(x-ct)\\right) + \\tfrac{1}{2}\\displaystyle\\int_{x-ct}^{x+ct} g$", "$u = f(x+ct)+f(x-ct) + \\tfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct} g$", "$u = \\tfrac12\\left(f(x+ct)+f(x-ct)\\right) + \\tfrac{1}{2c}\\displaystyle\\int_{x-t}^{x+t} g$"],
      explanation: "Tre detaljer må stemme samtidig: halveringen i første ledd, faktoren en over to c foran integralet, og grensene x minus c t og x pluss c t. Faktoren en halv alene er riktig bare når farten tilfeldigvis er 1.",
    },
    {
      question: "Hva skjer med en startpuls når $u_t(x,0) = 0$?",
      options: ["Den deles i to like halvdeler som løper hver sin vei", "Den beholder full høyde og løper mot høyre med fart $c$", "Den står stille og amplituden synker eksponentielt med tida", "Den dobles i høyde og deles i to som løper hver sin vei"],
      explanation: "Med null starthastighet forsvinner integralleddet, og bare midlingsleddet står igjen. Det er nettopp halve startformen forskjøvet hver sin vei, så toppverdien halveres.",
    },
    {
      question: "Hvor mange initialbetingelser trenger bølgeligningen?",
      options: ["To, fordi likningen er av andre orden i tid", "Én, akkurat som varmelikningen på hele tallinja", "Tre, én for hver derivert som opptrer i likningen", "Ingen, siden randbetingelsene bestemmer løsningen entydig"],
      explanation: "To tidsderiverte krever både startposisjon og starthastighet, akkurat som Newtons andre lov. Varmelikningen har bare én tidsderivert og klarer seg med startposisjonen.",
    },
    {
      question: "Hva er avhengighetsområdet til $u(x,t)$?",
      options: ["Intervallet $[x-ct,\\; x+ct]$ på $x$-aksen", "Hele tallinja, siden signalet merkes overalt umiddelbart", "Intervallet $[x-t,\\; x+t]$, uavhengig av bølgefarten", "Punktet $x$ alene, siden løsningen er lokal i rommet"],
      explanation: "Verdien avhenger bare av startdataene mellom de to karakteristikkene. Utenfor har forstyrrelsen ikke rukket fram — det er den skarpeste kontrasten til varmelikningen, der alt merkes overalt straks.",
    },
    {
      question: "Startdata er null utenfor $[a,b]$, og farten er $c$. Hvor kan noe merkes ved tiden $t$?",
      options: ["I intervallet $[a-ct,\\; b+ct]$", "I intervallet $[a-t,\\; b+t]$, uavhengig av farten", "I intervallet $[a,\\;b]$, siden forstyrrelsen ikke sprer seg", "Overalt, siden løsningen er en sum over hele tallinja"],
      explanation: "Påvirkningsområdet vokser med c t i hver retning. Dette er den samme regelen som avhengighetsområdet, sett fra den motsatte siden.",
    },
    {
      question: "Hva blir $u_{tt} - c^2u_{xx}$ uttrykt i karakteristiske koordinater?",
      options: ["$-4c^2\\,u_{yz}$", "$-2c^2\\,u_{yz}$", "$4c^2\\,u_{yy}$", "$-4c^2\\,u_{yy}$"],
      explanation: "Kjerneregelen gir at leddene med dobbelt y og dobbelt z kansellerer, mens kryssleddene legger seg sammen med faktoren minus fire c i andre. Det er nettopp derfor likningen blir triviell i disse koordinatene.",
    },
    {
      question: "Hva blir tidsfaktoren $G$ når bølgeligningen separeres på et endelig intervall?",
      options: ["$G_n = a_n\\cos\\!\\left(c\\sqrt{k_n}t\\right) + b_n\\sin\\!\\left(c\\sqrt{k_n}t\\right)$", "$G_n = a_ne^{-c^2k_nt} + b_ne^{+c^2k_nt}$, en sum av to eksponentialer", "$G_n = e^{-c^2k_nt}$, akkurat som for varmelikningen", "$G_n = a_n\\cosh\\!\\left(c\\sqrt{k_n}t\\right) + b_n\\sinh\\!\\left(c\\sqrt{k_n}t\\right)$"],
      explanation: "To tidsderiverte gir en andreordens svingningslikning, og løsningen er en ren svingning som ikke dør ut. Hyperbelfunksjonene ville krevd motsatt fortegn på leddet, som ikke forekommer her.",
    },
    {
      question: "Hva er en stående bølge?",
      options: ["En løsning $F(x)G(t)$ der romprofilen står i ro og amplituden pulserer", "En løsning som ikke endrer seg i det hele tatt, verken i rom eller tid", "En bølge som beveger seg så sakte at den ser ut til å stå stille", "En løsning der amplituden er konstant og profilen flytter seg"],
      explanation: "Formen er et produkt av en fast romprofil og en svingende amplitude. Den er likevel summen av to motgående vandrebølger — det ser du direkte ved å bruke en produktformel fra formelarket.",
    },
    {
      question: "Hvordan forholder frekvensene til modene seg på en streng med faste ender?",
      options: ["$\\omega_n = \\dfrac{cn\\pi}{L}$, altså proporsjonalt med $n$", "$\\omega_n = \\dfrac{cn^2\\pi^2}{L^2}$, altså proporsjonalt med $n^2$", "$\\omega_n = \\dfrac{c\\pi}{nL}$, altså omvendt proporsjonalt med $n$", "$\\omega_n = \\dfrac{c\\pi}{L}$, altså den samme for alle moder"],
      explanation: "Frekvensen er proporsjonal med n, og derfor er overtonene hele multipler av grunntonen. Det er nettopp det som gjør at en streng gir én gjenkjennelig tone. Varmelikningen har derimot dempingsrate proporsjonal med n i andre.",
    },
    {
      question: "Hva er den vanligste feilen i integralleddet i d'Alemberts formel?",
      options: ["Å bruke $x \\pm t$ som grenser i stedet for $x \\pm ct$", "Å integrere med hensyn på $t$ i stedet for med hensyn på $s$", "Å bruke $f$ i stedet for $g$ som integrand i uttrykket", "Å utelate integralleddet også når starthastigheten er null"],
      explanation: "Farten må inn både i grensene og i faktoren foran. Å utelate integralleddet når starthastigheten er null er tvert imot riktig — da er hele leddet null.",
    },
    {
      question: "Hva slags likning er $u_{tt} = c^2u_{xx}$?",
      options: ["Lineær, homogen og av andre orden", "Lineær, ikke-homogen og av andre orden", "Ikke-lineær og av andre orden på grunn av $c^2$", "Lineær, homogen og av første orden i tid"],
      explanation: "Hvert ledd inneholder nøyaktig én u-faktor i første potens, så den er lineær og homogen. Konstanten c i andre gjør ingenting med lineariteten, og den høyeste derivasjonen er dobbel.",
    },
    {
      question: "Hvorfor kan ikke d'Alemberts formel brukes direkte på et intervall med to faste ender?",
      options: ["Formelen er utledet uten randbetingelser, og bølgene reflekteres i endene", "Formelen krever at bølgefarten er 1, noe den sjelden er på et intervall", "Formelen krever at starthastigheten er null, noe som sjelden er oppfylt", "Formelen gir bare høyregående bølger, og en streng har begge retninger"],
      explanation: "Med to faster ender må bølgene snu, og det håndteres enten ved odde periodisk utvidelse eller — som er den forventede metoden — ved separasjon av variable.",
    },
    {
      question: "Hva er den fysiske tolkningen av midlingsleddet i d'Alemberts formel?",
      options: ["Startformen deles i to like halvdeler som transporteres hver sin vei", "Startformen glattes ut og synker jevnt mot null med tida", "Starthastigheten integreres opp til et bidrag i utslaget", "Startformen speiles om origo og legges til seg selv uendret"],
      explanation: "Halveringen og de to forskjøvne argumentene sier nettopp at startformen splittes i to like store deler. Integralleddet er derimot bidraget fra starthastigheten.",
    },
    {
      question: "Hvordan sjekker du raskt at et uttrykk løser $u_{tt} = c^2u_{xx}$?",
      options: ["Se om alle ledd er funksjoner av $x + ct$ eller $x - ct$ med samme $c$", "Se om alle ledd er funksjoner av $x$ ganget med funksjoner av $t$", "Se om alle ledd inneholder en eksponentialfaktor som avtar med tida", "Se om uttrykket er null i to punkter, som randbetingelsene krever"],
      explanation: "Enhver funksjon av x pluss c t eller x minus c t løser likningen med den farten. Sjekken tar femten sekunder og forteller deg svaret før du deriverer — men den erstatter ikke regningen oppgaven ber om.",
    },
  ],
  'tma4135-5-4': [
    {
      question: "Hva kommer ned som faktor når du deriverer $h(4x - 2t)$ med hensyn på $t$?",
      options: ["$-2$, den indre deriverte av argumentet med hensyn på $t$", "$4$, den indre deriverte av argumentet med hensyn på $x$", "$2$, tallverdien av den indre deriverte uten fortegn", "$-8$, produktet av de to koeffisientene i argumentet"],
      explanation: "Kjerneregelen gir ytre derivert ganger indre derivert, og den indre deriverte med hensyn på tid er koeffisienten foran t, med fortegn. Deriverer du to ganger, kommer den ned to ganger.",
    },
    {
      question: "Hva blir $u_{tt}$ for $u = h(ax + bt)$?",
      options: ["$b^2h''(ax+bt)$", "$b\\,h''(ax+bt)$", "$a^2h''(ax+bt)$", "$ab\\,h''(ax+bt)$"],
      explanation: "Den indre deriverte med hensyn på tid er b, og den kommer ned én gang per derivasjon. To derivasjoner gir derfor b i andre. Det er også grunnen til at fortegnet forsvinner.",
    },
    {
      question: "Er $u_t = u_{xx} + \\sin(x^3)$ lineær?",
      options: ["Ja, og den er ikke-homogen på grunn av leddet uten $u$-faktor", "Nei, fordi $\\sin$ er en ikke-lineær funksjon av argumentet sitt", "Nei, fordi $x^3$ er en tredjegradsfunksjon inne i likningen", "Ja, og den er homogen siden alle leddene står på hver sin side"],
      explanation: "Bare u og dens deriverte teller. Et krokete uttrykk i x alene endrer verken linearitet eller orden, men et ledd uten u-faktor gjør likningen ikke-homogen.",
    },
    {
      question: "Hvilken av disse er ikke-lineær?",
      options: ["$u_t = u\\,u_x$, siden to $u$-faktorer er ganget sammen", "$u_t = x^2u_x$, siden koeffisienten avhenger av $x$", "$u_t = u_{xx} + e^{t}$, siden kildeleddet vokser med tida", "$u_{tt} = 4u_{xx} - 3u$, siden $u$ opptrer i tre ulike ledd"],
      explanation: "Et produkt av to u-faktorer i samme ledd gjør likningen ikke-lineær. De tre andre er alle lineære: koeffisienter og kildeledd som bare avhenger av de uavhengige variablene, endrer ingenting.",
    },
    {
      question: "Hva betyr det at en lineær likning er homogen?",
      options: ["At hvert ledd inneholder en $u$-faktor, altså at det ikke finnes noe kildeledd", "At alle koeffisientene i likningen er konstanter uten $x$- eller $t$-avhengighet", "At randbetingelsene er null i begge ender av intervallet det gjelder", "At likningen har like mange derivasjoner i $x$ som i $t$ på hver side"],
      explanation: "Homogenitet handler om leddene i selve likningen, ikke om randbetingelsene. Er det et ledd uten u-faktor, må det fjernes med en partikulærløsning før superposisjon er lovlig.",
    },
    {
      question: "Hvorfor er verifikasjon en billig oppgave på eksamen?",
      options: ["Den krever bare kjerneregelen, mens å løse likningen krever hele apparatet", "Den er verdt færre poeng, men tar til gjengjeld svært kort tid å gjøre", "Den kan besvares uten regning, siden svaret er oppgitt i teksten", "Den forutsetter at du har løst den samme likningen i et tidligere delpunkt"],
      explanation: "Poengene er de samme som for en full løsning, men arbeidet er fem minutters derivasjon. Det er den beste poeng-per-minutt-oppgaven i Del 5, og svaret må fortsatt regnes ut.",
    },
    {
      question: "Hva må stå i en fullstendig verifikasjon?",
      options: ["Begge sider skrevet ut, og en linje som sier at de er identiske", "Bare den ene siden, siden den andre er oppgitt i oppgaveteksten", "Bare konklusjonen, siden derivasjonene regnes som kjent stoff", "Alle deriverte, men konklusjonen kan utelates når de er like"],
      explanation: "Instruksen på settet krever at tenkemåten framgår klart. En linje som bare sier at det stemmer, uten at begge sider er skrevet ut, gir ikke full uttelling.",
    },
    {
      question: "Løser $u = t^{-1/2}e^{-x^2/(4t)}$ varmelikningen $u_t = u_{xx}$?",
      options: ["Ja, for alle $t > 0$; funksjonen er udefinert i $t = 0$", "Ja, for alle $t$, siden uttrykket er glatt overalt i planet", "Nei, den løser bølgeligningen $u_{tt} = u_{xx}$ i stedet", "Ja, men bare i punktet $x = 0$, der eksponenten er null"],
      explanation: "Både produktregelen og kjerneregelen trengs, og de to sidene blir identiske. Definisjonsområdet må skrives ut: både potensen og eksponenten er udefinert når tida er null, og det er verdt et eget poeng.",
    },
    {
      question: "Hva er varmekjernens fysiske tolkning?",
      options: ["En varmeklump smøres ut: toppen synker, bredden vokser, arealet er konstant", "En varmeklump transporteres langs stanga med konstant fart og form", "En varmeklump svinger opp og ned med avtakende amplitude over tid", "En varmeklump vokser i høyde mens bredden holder seg uendret"],
      explanation: "Klokkeformen blir lavere og bredere, og det totale varmeinnholdet holder seg. Transport med fast form hører til bølgeligningen, ikke varmelikningen.",
    },
    {
      question: "Hva må du i tillegg sjekke når oppgaven sier «vis at $u$ løser problemet»?",
      options: ["Rand- og initialbetingelsene, ikke bare selve differensiallikningen", "At løsningen er entydig, altså at ingen annen funksjon også passer", "At løsningen er positiv i hele området der problemet er definert", "At likningen er lineær, siden verifikasjon bare gjelder lineære likninger"],
      explanation: "Ordet «problemet» dekker likningen og alle betingelsene. Hver innsetting er femten sekunder og et eget poeng, og det er her flest lar poeng ligge.",
    },
    {
      question: "Hva er gradienten $\\nabla f$?",
      options: ["En vektor av de partielle deriverte, som peker i retningen for raskest vekst", "Et tall som sier hvor raskt funksjonen vokser i sin bratteste retning", "En vektor som alltid peker langs nivåkurven gjennom punktet", "Et tall som sier hvor bratt nivåkurven er i det aktuelle punktet"],
      explanation: "Gradienten er en vektor. Tallet som sier hvor fort funksjonen vokser i den bratteste retningen, er lengden av den, og gradienten står vinkelrett på nivåkurven, ikke langs den.",
    },
    {
      question: "Hva må gjøres med $\\mathbf v$ før den brukes i $D_{\\hat{\\mathbf v}}f = \\nabla f\\cdot\\hat{\\mathbf v}$?",
      options: ["Den må normeres, altså deles på sin egen lengde", "Den må deriveres komponentvis med hensyn på $x$ og $y$", "Den må projiseres ned på gradientens retning først", "Ingenting; prikkproduktet håndterer lengden automatisk"],
      explanation: "Retningsderiverte måler vekst per lengdeenhet, så retningen må ha lengde 1. Bruker du en vektor av lengde 5 direkte, blir svaret fem ganger for stort.",
    },
    {
      question: "I hvilken retning endrer $f$ seg ikke i et punkt?",
      options: ["Vinkelrett på gradienten, altså langs nivåkurven gjennom punktet", "Langs gradienten, siden den peker mot raskest vekst i punktet", "Motsatt gradienten, siden vekst og fall da kansellerer hverandre", "I alle retninger like mye, siden endringen er null i et fast punkt"],
      explanation: "Retningsderiverte er null nøyaktig når prikkproduktet med gradienten er null, altså når retningen står vinkelrett på gradienten. Det er tangentretningen til nivåkurven.",
    },
    {
      question: "Hva er den vanligste regnefeilen i verifikasjonsoppgaver?",
      options: ["Å miste eller feilberegne den indre deriverte av et sammensatt argument", "Å bruke produktregelen der kvotientregelen skulle vært brukt i stedet", "Å derivere med hensyn på feil variabel i det andre av to ledd", "Å glemme å sette inn tallverdier i det ferdig deriverte uttrykket"],
      explanation: "Nesten alle feil i sjangeren skyldes den indre deriverte. Skriv den ned på egen linje før du begynner, og husk at den kommer ned én gang per derivasjon.",
    },
  ],
  'tma4135-5-5': [
    {
      question: "Hva er første steg i separasjonsoppskriften?",
      options: ["Sjekke om problemet er homogent, og eventuelt sette $v = u - w$", "Sette $u = F(x)G(t)$ og dele likningen i to vanlige differensiallikninger", "Finne egenverdiene ved å behandle alle tre tilfellene for konstanten", "Skrive opp superposisjonen og matche mot initialbetingelsen"],
      explanation: "Reduksjonen må komme aller først. Er en randverdi ulik null eller finnes det et kildeledd, er superposisjonen ulovlig, og alt som følger blir feil uansett hvor riktig det regnes.",
    },
    {
      question: "Hvor mange $k$-tilfeller skal skrives ut i en full besvarelse?",
      options: ["Alle tre, også de som ender med den trivielle løsningen", "Bare det ene som gir ikke-trivielle løsninger, for å spare tid på settet", "To av dem: det som overlever, og det nærmeste som ikke gjør det", "Alle tre, men de trivielle kan nøyes med en påstand uten begrunnelse"],
      explanation: "Løsningsforslagene behandler alle tre hver gang, og de to som ender trivielt er verdt omtrent en fjerdedel av poengene på delpunktet. Hvert tilfelle trenger en begrunnelse, ikke bare en påstand.",
    },
    {
      question: "Hvor lang er intervallengden når problemet er gitt på $[-2,2]$?",
      options: ["$4$, altså avstanden mellom endepunktene", "$2$, altså tallverdien av det høyeste endepunktet", "$8$, altså det dobbelte av avstanden mellom endepunktene", "$1$, siden intervallet er symmetrisk om origo"],
      explanation: "Egenverdiene avhenger av avstanden mellom endene, ikke av hvor intervallet ligger. En forskyvning endrer verken den dobbeltderiverte eller randkravene, så bare lengden teller.",
    },
    {
      question: "Hvilken sluttlikning får du ved isolerte ender i begge ender på $[0,L]$?",
      options: ["$\\sin pL = 0$, og i tillegg overlever tilfellet $k = 0$", "$\\cos pL = 0$, og i tillegg overlever tilfellet $k = 0$", "$\\sin pL = 0$, men tilfellet $k = 0$ gir bare triviell løsning", "$\\cos pL = 0$, men tilfellet $k = 0$ gir bare triviell løsning"],
      explanation: "Med Neumann-rand er egenfunksjonen cosinus, og kravet i høyre ende blir at sinus av p ganger L er null. I tillegg overlever konstanten fra tilfellet k lik null, og det er det leddet som ikke dør ut.",
    },
    {
      question: "Hva er tidsfaktoren for Laplace-likningen på et rektangel?",
      options: ["Ingen tidsfaktor; den andre romretningen gir $\\cosh$ og $\\sinh$", "En eksponentiell demping, akkurat som tidsfaktoren for varmelikningen", "En ren svingning, akkurat som tidsfaktoren for bølgeligningen på et intervall", "En konstant, siden Laplace-likningen beskriver en ren likevektstilstand uten tid"],
      explanation: "Laplace-likningen inneholder ingen tid. Fortegnet i den andre romlikningen blir motsatt, og løsningene der blir hyperbolske i stedet for oscillerende.",
    },
    {
      question: "Hvilken retning blir den oscillerende ved Laplace-likningen på et rektangel?",
      options: ["Retningen med to homogene randbetingelser", "Retningen med den lengste sidekanten i rektangelet", "Retningen med den korteste sidekanten i rektangelet", "Alltid $x$-retningen, uansett hvor randbetingelsene sitter"],
      explanation: "Det er randbetingelsene som bestemmer, ikke geometrien. To homogene betingelser gir et ordentlig randverdiproblem med egenverdier, og den andre retningen får hyperbelfunksjonene.",
    },
    {
      question: "Hvorfor er romanalysen identisk for varme- og bølgeligningen?",
      options: ["Fordi randbetingelsene bare berører $F$, og $F$-likningen er lik", "Fordi begge likningene har samme antall derivasjoner på hver av sidene", "Fordi tidsfaktoren alltid kan skrives som en ren eksponentialfunksjon", "Fordi begge likningene har samme fysiske tolkning på et endelig intervall"],
      explanation: "Randbetingelsene sier ingenting om G, og de tre k-tilfellene handler utelukkende om F. Det er bare tidslikningen som skiller de to, og den gir demping i det ene tilfellet og svingning i det andre.",
    },
    {
      question: "Hva bør du gjøre før du regner et koeffisientintegral?",
      options: ["Sjekke om en trigonometrisk identitet gir en ferdig egenfunksjonssum", "Sjekke at randbetingelsene er homogene i begge ender av det gitte intervallet", "Sjekke at intervallengden er et helt multiplum av tallet $\\pi$ eller av $2\\pi$", "Sjekke at koeffisientene i rekka avtar raskere enn $1/n$ når $n$ vokser"],
      explanation: "Uttrykk som cosinus i andre, sinus i andre og sinus ganger cosinus skjuler ofte en ren egenfunksjon. Identitetene står på det utdelte formelarket, og oppslaget sparer fem til ti minutter.",
    },
    {
      question: "Hvor mye er separasjonsoppgaven typisk verdt på et sett?",
      options: ["14 til 20 poeng, den tyngste enkeltoppgaven på settet", "3 til 5 poeng, en kort oppvarmingsoppgave tidlig i settet", "30 til 40 poeng, altså mer enn en tredjedel av hele settet", "10 poeng nøyaktig, som alle andre oppgaver på settet"],
      explanation: "Sjangeren står på tolv av tretten gjennomgåtte sett og er den dyreste enkeltoppgaven. Nettopp derfor er tidsbudsjettet viktig: bruker du førti minutter her, mister du numerikk-blokken til slutt.",
    },
    {
      question: "Hva er riktig når du matcher $u_t(x,0)$ for bølgeligningen?",
      options: ["Faktoren fra derivasjonen av tidsfaktoren må tas med i koeffisienten", "Koeffisientene leses av direkte, uten noen faktor fra derivasjonen", "Bare cosinusleddene i tidsfaktoren bidrar til starthastigheten", "Matchingen gjøres mot randbetingelsene i stedet for initialdataene"],
      explanation: "Deriverer du cosinus og sinus av vinkelfrekvensen ganger t, kommer vinkelfrekvensen ned som faktor. Glemmer du den, får du riktig svar bare tilfeldigvis for den ene moden der faktoren er 1.",
    },
    {
      question: "Hva er den beste kontrollen på slutten av en separasjonsoppgave?",
      options: ["Innsetting i likningen, i begge randbetingelsene og i initialdataene", "Innsetting i likningen alene, siden randbetingelsene allerede er brukt", "Å sjekke at alle koeffisientene i rekka er positive tall som avtar", "Å sjekke at egenverdiene vokser monotont med økende modenummer $n$"],
      explanation: "De tre innsettingene tar til sammen tre minutter og fanger nesten alle feil, også feil egenverdi. På eksamen ber delpunktet ofte eksplisitt om kontrollen, og da er den egne poeng.",
    },
    {
      question: "Hva skjer hvis du legger $c^2$ inn i egenverdiene?",
      options: ["Tidsfaktoren får feil dempingsrate for hver eneste mode i rekka", "Egenfunksjonene får feil argument, men dempingen blir riktig", "Randbetingelsene blir ikke lenger oppfylt i høyre endepunkt", "Ingenting; de to plasseringene gir samme sluttresultat"],
      explanation: "Konstanten hører hjemme i tidslikningen, ikke i romlikningen. Legger du den i egenverdiene, blir eksponenten galt skalert, mens egenfunksjonene i tillegg kan få feil argument.",
    },
    {
      question: "Hvordan bør du håndtere et mellomsvar du er usikker på?",
      options: ["Skriv det tydelig ned og regn videre; feilforplantning tolereres", "Stopp opp og la resten av delpunktene stå ubesvart til du er sikker", "Stryk hele delpunktet og begynn på nytt fra oppgavens første linje", "Skriv bare sluttsvaret, uten mellomregning, for å spare tid"],
      explanation: "Delpunktene er ofte kjedet, og regner du riktig videre med en feil mellomverdi, gir det fortsatt uttelling. Å la resten stå tomt koster langt mer enn selve regnefeilen.",
    },
    {
      question: "Hva er det raskeste sikre grepet når en oppgave gir isolerte ender?",
      options: ["Skriv opp cosinusbasisen og konstantleddet med én gang", "Skriv opp sinusbasisen og legg til et konstantledd helt til slutt", "Skriv opp cosinusbasisen og hopp over tilfellet $k = 0$ med det samme", "Skriv opp sinusbasisen og bytt fortegn på alle koeffisientene i rekka"],
      explanation: "Neumann-rand gir cosinuser og et konstantledd fra tilfellet k lik null. Hopper du over det tilfellet, mister du nettopp det leddet som avgjør hva som skjer når tida går mot uendelig.",
    },
  ],
  'tma4135-6-1': [
    {
      question: "Hvor mange punkter trengs for et interpolasjonspolynom av grad høyst $n$?",
      options: ["$n+1$ punkter med innbyrdes ulike $x$-verdier", "$n$ punkter med innbyrdes ulike $x$-verdier", "$n+2$ punkter med innbyrdes ulike $x$-verdier", "$2n$ punkter med innbyrdes ulike $x$-verdier"],
      explanation: "Antall punkter er alltid én mer enn graden. Tre punkter gir grad høyst 2. Feil telling her forplanter seg til feilformelen, der ordenen på den deriverte er $n+1$.",
    },
    {
      question: "Hva er verdien av kardinalfunksjonen $\\ell_k$ i sin egen node $x_k$?",
      options: ["$1$, og $0$ i alle de andre nodene", "$0$, og $1$ i alle de andre nodene", "$f_k$, og $0$ i alle de andre nodene", "$1$, og $1$ i alle de andre nodene"],
      explanation: "Setter du inn en annen node, står faktoren $(x_j-x_j)$ i telleren og nuller produktet. Setter du inn $x_k$, blir hver brøk lik 1.",
    },
    {
      question: "Hva sier entydighetssetningen for interpolasjon?",
      options: ["Det finnes nøyaktig ett polynom av grad høyst $n$ gjennom $n+1$ punkter", "Det finnes minst to polynomer av grad høyst $n$ gjennom $n+1$ punkter", "Det finnes nøyaktig ett polynom av grad nøyaktig $n$ gjennom $n+1$ punkter", "Det finnes uendelig mange polynomer av grad høyst $n$ gjennom $n+1$ punkter"],
      explanation: "Graden er høyst $n$, ikke nøyaktig $n$ — ligger punktene på en linje, faller den ledende koeffisienten bort. Beviset ser på differansen av to slike polynomer, som får for mange nullpunkter.",
    },
    {
      question: "Hva er nevneren i en dividert differanse av orden $k$?",
      options: ["Spennet over hele gruppen, $x_{i+k}-x_i$", "Spennet mellom to nabonoder, $x_{i+1}-x_i$", "Antall noder i gruppen, altså $k+1$", "Produktet av nodeavstandene i gruppen"],
      explanation: "Nevneren spenner over hele gruppen. Med ekvidistante noder er den $kh$, ikke $h$ — det er en av de hyppigste tabellfeilene.",
    },
    {
      question: "Hvilken fordel har Newton-formen framfor Lagrange-formen?",
      options: ["Et nytt punkt legger bare til ett nytt ledd i polynomet", "Den gir et polynom av lavere grad enn Lagrange-formen", "Den krever ikke at nodene er innbyrdes forskjellige", "Den gir alltid mindre interpolasjonsfeil enn Lagrange-formen"],
      explanation: "Begge formene gir nøyaktig samme polynom, så feil og grad er like. Forskjellen er organiseringen: Newton-leddene er null i alle tidligere noder.",
    },
    {
      question: "Hva er koeffisienten foran $x^n$ i interpolasjonspolynomet?",
      options: ["Den siste differansen $f[x_0,\\dots,x_n]$", "Den første differansen, $f[x_0,x_1]$", "Nodeverdien $f_n$ i den ytterste noden til høyre", "Summen av alle dividerte differanser i tabellen"],
      explanation: "Bare det siste leddet i Newton-formen inneholder $x^n$. Er den siste differansen null, har polynomet lavere grad enn ventet.",
    },
    {
      question: "Hvilken derivert inngår i feilformelen når du interpolerer i fire noder?",
      options: ["Den fjerdederiverte, med fakultetet $4!=24$", "Den tredjederiverte, med fakultetet $3!=6$", "Den femtederiverte, med fakultetet $5!=120$", "Den fjerdederiverte, med fakultetet $3!=6$"],
      explanation: "Fire noder gir $n=3$, og formelen bruker orden $n+1=4$ i både derivasjonen og fakultetet. Å telle antall noder som $n$ er den klassiske feilen.",
    },
    {
      question: "Hva er nodepolynomet $\\omega(x)$?",
      options: ["Produktet $\\prod_{k}(x-x_k)$ over nodene, av grad $n+1$", "Summen $\\sum_k (x-x_k)$ over alle nodene, av grad 1", "Produktet $\\prod_k (x_k-x)$ over alle nodene, av grad $n$", "Produktet av alle kardinalfunksjonene $\\ell_k(x)$"],
      explanation: "Nodepolynomet er null i hver node, akkurat som feilen må være. Det er den delen av feilen du selv styrer, gjennom valget av noder.",
    },
    {
      question: "Hvorfor er $\\xi$ i feilformelen ikke et problem i praksis?",
      options: ["Fordi $f^{(n+1)}(\\xi)$ byttes mot en øvre grense", "Fordi $\\xi$ alltid ligger midt mellom to nabonoder", "Fordi $f^{(n+1)}(\\xi)$ alltid kan settes lik null", "Fordi $\\xi$ kan leses av på det utdelte formelarket"],
      explanation: "Du bytter den ukjente verdien mot en øvre grense og får et anslag. Det er en garanti, ikke en prognose — den virkelige feilen er som regel klart mindre.",
    },
    {
      question: "Hva er Runge-fenomenet?",
      options: ["At mange ekvidistante noder kan gi større feil nær kantene", "At mange ekvidistante noder alltid gir mindre feil nær kantene", "At interpolasjonspolynomet aldri treffer nodene eksakt", "At Newton- og Lagrange-formen gir ulike polynomer"],
      explanation: "Nodepolynomet blir mye større nær kantene ved jevn fordeling. Chebyshev-punktene, som ligger tettere mot kantene, er botemidlet.",
    },
    {
      question: "Hvor ligger Chebyshev-punktene tettest?",
      options: ["Nær kantene av intervallet", "Nær midten av intervallet", "Jevnt fordelt over hele intervallet", "Nær det høyre endepunktet alene"],
      explanation: "Det strider mot intuisjonen, men det er der ekvidistante noder svikter. Punktene minimerer maksimum av nodepolynomet.",
    },
    {
      question: "Nodene er symmetriske om null og dataene er odde. Hva vet du om $p$?",
      options: ["$p$ er odde, så bare ulike potenser opptrer", "$p$ er like, så bare like potenser opptrer", "$p$ har konstantledd lik gjennomsnittet av dataene", "$p$ må ha grad nøyaktig lik antall noder"],
      explanation: "Sett $q(x)=-p(-x)$; den interpolerer de samme punktene, så entydigheten gir $q=p$. Argumentet sparer deg halve regningen.",
    },
    {
      question: "Hva blir interpolasjonspolynomet hvis $f$ selv er et polynom av grad høyst $n$?",
      options: ["$p=f$, fordi $f$ selv treffer alle punktene", "$p$ er nullpolynomet, fordi feilen er null i nodene", "$p$ blir $f$ pluss et ledd med nodepolynomet $\\omega$", "$p$ får alltid én grad lavere enn $f$ selv har"],
      explanation: "Entydigheten gir det direkte. Feilformelen gir det samme: den $(n+1)$-te deriverte av et polynom av grad $n$ er null.",
    },
    {
      question: "Hvorfor er ekstrapolasjon farligere enn interpolasjon?",
      options: ["Fordi alle faktorene i $\\omega(x)$ vokser samtidig", "Fordi feilformelen ikke gjelder utenfor nodeintervallet", "Fordi polynomet slutter å treffe nodene utenfor intervallet", "Fordi den $(n+1)$-te deriverte alltid er større der"],
      explanation: "Innenfor har faktorene ulike fortegn og utlikner delvis hverandre. Utenfor peker de samme vei, og produktet vokser raskt.",
    },
    {
      question: "Nodene er $0$, $2$ og $3$. Hva er $\\ell_1(x)$?",
      options: ["$\\dfrac{x(x-3)}{-2}$", "$\\dfrac{x(x-2)}{-2}$", "$\\dfrac{(x-2)(x-3)}{6}$", "$\\dfrac{x(x-3)}{2}$"],
      explanation: "Node 1 er $x_1=2$, så faktoren $(x-2)$ utelates. Nevneren er $(2-0)(2-3)=-2$. Kontroll: $\\ell_1(2)=2\\cdot(-1)/(-2)=1$.",
    },
    {
      question: "Den siste dividerte differansen i en tabell med fire punkter blir null. Hva betyr det?",
      options: ["Polynomet har grad høyst 2, ikke 3", "Punktene kan ikke interpoleres med et polynom", "To av nodene må være like", "Alle nodeverdiene $f_k$ må være null"],
      explanation: "Den siste differansen er koeffisienten foran $x^3$. Blir den null, ligger punktene på en enklere kurve enn du trodde.",
    },
    {
      question: "Hva er $\\max|\\omega|$ mellom to noder med avstand $h$ ved lineær interpolasjon?",
      options: ["$h^{2}/4$, oppnådd midt mellom nodene", "$h^{2}/2$, oppnådd midt mellom nodene", "$h/2$, oppnådd i en av nodene", "$h^{3}/4$, oppnådd midt mellom nodene"],
      explanation: "Med $s=x-x_0$ er $\\omega=s(s-h)$, en parabel med bunnpunkt i $s=h/2$ og verdi $-h^2/4$ der.",
    },
    {
      question: "Oppgaven ber deg vise at Lagrange- og Newton-formen gir samme polynom. Hva kreves?",
      options: ["Regn begge og påberop entydighetssetningen ved navn", "Regn begge og konstater at tallene stemte overens", "Regn bare Newton-formen, siden den er raskest", "Regn bare Lagrange-formen og henvis til formelarket"],
      explanation: "Regningen er kontrollen; argumentet er entydigheten. Løsningsforslagene skriver teoremnavnet ut, og det skal du også.",
    },
  ],
  'tma4135-6-2': [
    {
      question: "Hva er vektmønsteret i sammensatt Simpsons regel?",
      options: ["$1,4,2,4,\\dots,4,1$ med faktoren $h/3$", "$1,2,2,2,\\dots,2,1$ med faktoren $h/3$", "$1,4,2,4,\\dots,4,1$ med faktoren $h/2$", "$4,1,2,1,\\dots,1,4$ med faktoren $h/3$"],
      explanation: "Mønsteret begynner og slutter med 1, og hver 1 har en 4 ved siden av seg. Kontroll: summen av vektene ganget med faktoren skal bli $b-a$.",
    },
    {
      question: "Hvorfor må $n$ være et partall i sammensatt Simpson?",
      options: ["Hvert parabelstykke dekker to delintervall", "Hvert parabelstykke dekker tre delintervall", "Fordi vektene ellers ikke summerer til null", "Fordi feilleddet ellers skifter fortegn"],
      explanation: "En parabel går gjennom venstre, midtre og høyre node, altså over to delintervall. Er $n$ odde, finnes det ingen sammensatt formel over de nodene.",
    },
    {
      question: "Hvilken derivert står i feilleddet for trapesregelen?",
      options: ["Den andrederiverte, sammen med $h^{2}$", "Den fjerdederiverte, sammen med $h^{4}$", "Den førstederiverte, sammen med $h^{1}$", "Den andrederiverte, sammen med $h^{4}$"],
      explanation: "Trapes bruker rette linjer, så det er krumningen som ikke fanges. Simpson har derimot $f^{(4)}$ og $h^4$.",
    },
    {
      question: "Hva skjer med trapesfeilen når du halverer $h$?",
      options: ["Den blir omtrent fire ganger mindre", "Den blir omtrent seksten ganger mindre", "Den blir omtrent to ganger mindre", "Den blir omtrent åtte ganger mindre"],
      explanation: "Feilen går som $h^2$, altså konvergensorden 2. Simpson har orden 4 og gir faktoren seksten.",
    },
    {
      question: "Hva er presisjonsgraden til Simpsons regel?",
      options: ["3 — eksakt til og med $x^{3}$, feiler på $x^{4}$", "4 — eksakt til og med $x^{4}$, feiler på $x^{5}$", "2 — eksakt til og med $x^{2}$, feiler på $x^{3}$", "5 — eksakt til og med $x^{5}$, feiler på $x^{6}$"],
      explanation: "Formelen bygger på en parabel, men symmetrien gir $x^3$ gratis. Graden er den høyeste som går gjennom, ikke den som feiler.",
    },
    {
      question: "Hvorfor får symmetriske kvadraturformler odde potenser gratis?",
      options: ["Bidragene fra de to sidene kanselleres", "Fordi vektene til odde potenser alltid er null", "Fordi odde potenser har null andrederivert", "Fordi nodene alltid ligger i $\\pm 1$ ved symmetri"],
      explanation: "Både summen og integralet blir null for en odde funksjon over et symmetrisk intervall. Derfor er presisjonsgraden til en symmetrisk formel alltid et oddetall.",
    },
    {
      question: "Hvilken presisjonsgrad har Gauss–Legendre med $N$ noder?",
      options: ["$2N-1$, fordi nodene også er frie parametre", "$N-1$, som for en formel med faste noder", "$2N+1$, fordi vektene teller dobbelt", "$N+1$, fordi nodene er nullpunkter til polynomer"],
      explanation: "Med $N$ noder og $N$ vekter er det $2N$ frihetsgrader, altså $2N$ krav som kan oppfylles. To Gauss-noder er like gode som Simpsons tre.",
    },
    {
      question: "Hva er jacobifaktoren i transformasjonen $[a,b]\\to[-1,1]$?",
      options: ["$\\dfrac{b-a}{2}$, siden $dx=\\dfrac{b-a}{2}d\\xi$", "$\\dfrac{a+b}{2}$, som følger av at midtpunktet flyttes", "$\\dfrac{2}{b-a}$, som er den omvendte skaleringen", "$b-a$, som er lengden av det opprinnelige intervallet"],
      explanation: "Å glemme faktoren er den vanligste feilen i sjangeren. Kontroll: bruk formelen på $f\\equiv 1$ og se at svaret blir $b-a$.",
    },
    {
      question: "Du finner $n\\ge 36{,}5$ for trapesregelen. Hva svarer du?",
      options: ["$n=37$, siden antallet må rundes oppover", "$n=36$, siden antallet må rundes nedover", "$n=36{,}5$, siden $n$ kan være et desimaltall", "$n=38$, siden $n$ må være et partall"],
      explanation: "Runder du ned, blir $h$ større enn tillatt og garantien brister. Partallskravet gjelder bare Simpson.",
    },
    {
      question: "Hva er presisjonsgraden til midtpunktsregelen?",
      options: ["1, selv om den bare bruker ett punkt", "0, siden den bare bruker ett eneste punkt", "3, like høy som for Simpsons regel", "2, siden den treffer parabler eksakt"],
      explanation: "Symmetrien om midtpunktet gjør at førstegradsleddet kanselleres. Den er altså like god som trapes, med halvparten så mange evalueringer.",
    },
    {
      question: "Hva er nodene i Gauss–Legendre med to punkter?",
      options: ["$\\xi=\\pm 1/\\sqrt3$, begge med vekt 1", "$\\xi=\\pm 1$, begge med vekt 1 som i trapes", "$\\xi=\\pm 1/2$, begge med vekt 1", "$\\xi=0$ og $\\xi=1$, med vekt 1"],
      explanation: "Kravet $2c^2=2/3$ gir $c=1/\\sqrt3$. Tabellen deles ut i oppgaven, men kontrollen $\\sum w_i=2$ bør du gjøre uansett.",
    },
    {
      question: "En kvadraturformel er eksakt for $1$ og $x$, men ikke for $x^{2}$. Graden er",
      options: ["1, altså den høyeste som går gjennom", "2, altså graden som først feiler i testen", "0, siden bare konstanter er trygge", "3, av symmetrigrunner i formelen"],
      explanation: "Dette er trapesregelen. Presisjonsgraden er den høyeste graden som er eksakt, ikke den som bryter sammen.",
    },
    {
      question: "Hva er den enkleste kontrollen på at en kvadraturformel er avskrevet riktig?",
      options: ["Summen av vektene skal bli $b-a$", "Summen av vektene skal bli lik $h$", "Summen av nodene skal bli $b-a$", "Produktet av vektene skal bli 1"],
      explanation: "Det svarer til at formelen er eksakt for $f\\equiv 1$. På $[-1,1]$ betyr det at vektene summerer til 2.",
    },
    {
      question: "$f$ er konveks på hele intervallet. Hva vet du om trapesverdien?",
      options: ["Den er for stor, siden linjene ligger over kurven", "Den er for liten, siden linjene ligger under kurven", "Den er eksakt, siden konveksitet fjerner feilen", "Den er for stor bare hvis $f$ også er voksende"],
      explanation: "Fortegnsargumentet er en gratis kvalitetsmarkør i en besvarelse. Midtpunktsregelen bommer motsatt vei.",
    },
    {
      question: "Hvorfor er en kvadraturformel eksakt for alle polynomer av grad $\\le d$ når den treffer $1,\\dots,x^{d}$?",
      options: ["Fordi både formelen og integralet er lineære", "Fordi et polynom alltid har grad nøyaktig $d$", "Fordi vektene er valgt uavhengig av $f$", "Fordi feilleddet inneholder en høy derivert"],
      explanation: "Ethvert polynom av grad $\\le d$ er en linearkombinasjon av potensene. Lineariteten overfører eksaktheten til kombinasjonen.",
    },
    {
      question: "Hvilken sammenheng er det mellom kvadratur og interpolasjon?",
      options: ["Formelen er integralet av et interpolasjonspolynom", "Interpolasjonspolynomet er den deriverte av kvadraturen", "De to har ingen sammenheng utover navnelikheten", "Kvadraturformelen er den deriverte av nodepolynomet"],
      explanation: "Trapes integrerer linja gjennom to punkter, Simpson parabelen gjennom tre. Feilleddene arver formen fra interpolasjonsfeilen.",
    },
    {
      question: "Hvor mange funksjonsevalueringer bruker Gauss–Legendre med tre noder?",
      options: ["3, og presisjonsgraden er da 5", "3, og presisjonsgraden er da 3", "6, siden hver node teller dobbelt", "5, som for Simpson med $n=4$"],
      explanation: "Antall evalueringer er antall noder, og graden er $2N-1$. Det er derfor Gauss slår Simpson per evaluering.",
    },
    {
      question: "Simpson gir mye større feil på $\\int_0^2 xe^{x}dx$ med $n=2$ enn på $\\int_1^3 dx/x$ med $n=4$. Hvorfor?",
      options: ["Både $h$ og $\\max|f^{(4)}|$ er større", "Formelen gjelder ikke for eksponentialfunksjoner", "Vektmønsteret er et annet når $n=2$", "Fordi intervallet ikke er symmetrisk om null"],
      explanation: "$h$ er dobbelt så stor, og $h^4$ gir alene faktoren seksten. Den fjerdederiverte er dessuten omtrent dobbelt så stor.",
    },
  ],
  'tma4135-6-3': [
    {
      question: "Hvilke to vilkår krever fikspunktteoremet?",
      options: ["$|g'|\\le L<1$ på $I$, og $g(I)\\subseteq I$", "$|g'|\\le L<1$ på $I$, og at $g$ er voksende", "$g(I)\\subseteq I$, og at $g$ er kontinuerlig", "$|g'|<1$ i fikspunktet, og $g(I)\\subseteq I$"],
      explanation: "Begge trengs i beviset: det første gir krymping, det andre at følgen blir i intervallet. Å sjekke bare det ene er den dokumenterte hovedfeilen i sjangeren.",
    },
    {
      question: "Hvilket av vilkårene glemmes oftest i besvarelser?",
      options: ["At $g$ avbilder intervallet inn i seg selv", "At den deriverte er mindre enn 1 i tallverdi", "At $g$ er deriverbar på hele intervallet", "At startverdien ligger inne i intervallet"],
      explanation: "Kontraksjonsvilkåret huskes; bildekravet glemmes. Uten det kan iterasjonen forlate intervallet, og garantien faller bort.",
    },
    {
      question: "Hva er kontraksjonskonstanten $L$?",
      options: ["$\\max_I|g'|$, den verste krympingen på intervallet", "$|g'(r)|$, altså den deriverte i selve fikspunktet", "$\\min_I|g'|$, altså den beste krympingen på intervallet", "Lengden $b-a$ av intervallet iterasjonen skjer på"],
      explanation: "Maksimeringen går over hele intervallet, ikke bare i roten. Den faktiske krympingen nær roten er $|g'(r)|$ og er som regel mindre.",
    },
    {
      question: "Hva er a-priori-estimatet for feilen i $x_{k+1}$?",
      options: ["$\\dfrac{L^{k+1}}{1-L}\\left|x_1-x_0\\right|$", "$\\dfrac{L^{k}}{1-L}\\left|x_1-x_0\\right|$", "$\\dfrac{L^{k+1}}{1+L}\\left|x_1-x_0\\right|$", "$\\dfrac{1-L}{L^{k+1}}\\left|x_1-x_0\\right|$"],
      explanation: "Eksponenten er $k+1$, ikke $k$ — bruker du $k$, får du ett skritt for lite. Estimatet står vanligvis ikke på det utdelte formelarket.",
    },
    {
      question: "Du får $k+1\\ge 10{,}29$ i et a-priori-estimat. Hva svarer du?",
      options: ["11 iterasjoner, siden tallet rundes oppover", "10 iterasjoner, siden tallet rundes nedover", "10 iterasjoner, siden $10{,}29$ ligger nær 10", "12 iterasjoner, for å ha en sikkerhetsmargin"],
      explanation: "Runder du ned, er kravet ikke oppfylt og hele regnestykket bortkastet. Avrunding nedover er en dokumentert feil i sjangeren.",
    },
    {
      question: "Hvorfor snur ulikheten når du deler på $\\ln L$?",
      options: ["Fordi $L<1$ gjør $\\ln L$ negativ", "Fordi $L>0$ gjør $\\ln L$ positiv", "Fordi logaritmen er en avtakende funksjon", "Fordi $k+1$ alltid er et positivt heltall"],
      explanation: "Å dele en ulikhet på et negativt tall snur tegnet, som i vanlig algebra. Dette skjer i hver eneste a-priori-utregning.",
    },
    {
      question: "$g$ er avtakende på $[a,b]$. Hva er $g([a,b])$?",
      options: ["$[g(b),\\,g(a)]$, med byttet rekkefølge", "$[g(a),\\,g(b)]$, altså med samme rekkefølge", "$[a,\\,b]$, uavhengig av hva $g$ gjør", "$[g(a),\\,g(a)]$, siden bildet er et punkt"],
      explanation: "En avtakende funksjon sender det minste argumentet til det største bildet. Feil rekkefølge gir et intervall som ser galt ut.",
    },
    {
      question: "Hva slags konvergens har en vanlig fikspunktiterasjon?",
      options: ["Lineær — feilen faller med en fast faktor per skritt", "Kvadratisk — antall korrekte siffer dobles per skritt", "Kubisk — antall korrekte siffer tredobles per skritt", "Ingen — den stopper alltid etter endelig mange skritt"],
      explanation: "Faktoren er omtrent $|g'(r)|$. Newtons metode har derimot $g'(r)=0$ og dermed kvadratisk konvergens.",
    },
    {
      question: "$|g'|\\le 1/2$ på $[0,1]$, men $g(1)=1{,}5$. Hva sier teoremet?",
      options: ["Ingenting — vilkår (ii) er ikke oppfylt", "At iterasjonen konvergerer for enhver $x_0$", "At iterasjonen divergerer for enhver $x_0$", "At fikspunktet er entydig, men ikke stabilt"],
      explanation: "Uten begge forutsetningene kan konklusjonen ikke brukes. Iterasjonen kan likevel konvergere i praksis — men da har du ikke vist det.",
    },
    {
      question: "Hva er a-posteriori-estimatet?",
      options: ["$\\dfrac{L}{1-L}\\left|x_k-x_{k-1}\\right|$", "$\\dfrac{L}{1+L}\\left|x_k-x_{k-1}\\right|$", "$\\left|x_k-x_{k-1}\\right|$ helt uten faktor", "$\\dfrac{1-L}{L}\\left|x_k-x_{k-1}\\right|$"],
      explanation: "Det bruker det siste skrittet du faktisk har regnet, og er som regel skarpere. Merk at differansen alene ikke er feilen.",
    },
    {
      question: "Hvorfor gir $g(x)=x^{2}-2$ divergens nær fikspunktet $x=2$?",
      options: ["Fordi $g'(2)=4>1$, så avstander vokser", "Fordi $g$ ikke er kontinuerlig i punktet 2", "Fordi $g$ har to fikspunkter i stedet for ett", "Fordi $g$ er avtakende i nærheten av 2"],
      explanation: "Kontraksjonsvilkåret svikter, og iterasjonen løper fra fikspunktet. Fra $x_0=2{,}05$ er den over 1000 etter fem skritt.",
    },
    {
      question: "Samme likning kan skrives på flere fikspunktformer. Hva betyr det?",
      options: ["Formene har samme røtter, men ulik konvergens", "Formene har ulike røtter, men samme konvergens", "Formene er alltid likeverdige i praksis", "Bare én av formene har et fikspunkt i det hele tatt"],
      explanation: "Røttene er de samme fordi likningene er ekvivalente. Velg den med minst $|g'|$ nær roten — det er ofte det billigste grepet i hele beregningen.",
    },
    {
      question: "Hvordan finner du $\\max_I|g'|$ i praksis?",
      options: ["Avgjør monotonien og regn i endepunktene", "Sett inn fikspunktet og bruk verdien der", "Regn gjennomsnittet av $|g'(a)|$ og $|g'(b)|$", "Bruk alltid verdien i intervallets midtpunkt"],
      explanation: "Er $|g'|$ monoton, ligger maksimum i et endepunkt, og begrunnelsen er et halvt poeng verdt. Er den ikke monoton, må indre ekstremalverdier med.",
    },
    {
      question: "Hvilken setning knytter derivasjon til kontraksjon?",
      options: ["Middelverdisetningen", "Mellomverdisetningen", "Entydighetssetningen", "Konvergensteoremet"],
      explanation: "Middelverdisetningen gir $g(u)-g(v)=g'(\\eta)(u-v)$, så et anslag på $|g'|$ blir et anslag på krympingen. Mellomverdisetningen brukes derimot til å vise at en rot finnes.",
    },
    {
      question: "Hva kjennetegner iterasjonen når $g'<0$ på intervallet?",
      options: ["Iteratene hopper vekselvis over og under roten", "Iteratene nærmer seg roten fra samme side hele veien", "Iterasjonen kan ikke konvergere i det hele tatt", "Iterasjonen konvergerer alltid dobbelt så fort"],
      explanation: "Det gir et spiralmønster i stedet for en trapp. Nyttig som kontroll: roten må da ligge mellom to nabo-iterater.",
    },
    {
      question: "Hvorfor er en besvarelse ufullstendig uten teoremets navn?",
      options: ["Fordi metodenavnet er et uttalt krav i sjangeren", "Fordi navnet inngår i selve formelen som brukes", "Fordi teoremet ikke gjelder uten at det navngis", "Fordi navnet erstatter kontrollen av vilkårene"],
      explanation: "Instruksen krever nok begrunnelse til at tenkemåten framgår, og løsningsforslagene skriver teoremnavnene ut. Det koster deg fire ord.",
    },
  ],
  'tma4135-6-4': [
    {
      question: "Hva er Newtons metode i skalarform?",
      options: ["$x_{k+1}=x_k-\\dfrac{f(x_k)}{f'(x_k)}$", "$x_{k+1}=x_k+\\dfrac{f(x_k)}{f'(x_k)}$", "$x_{k+1}=x_k-\\dfrac{f'(x_k)}{f(x_k)}$", "$x_{k+1}=x_k-f(x_k)\\,f'(x_k)$"],
      explanation: "Formelen finner nullpunktet til tangenten i $\\left(x_k,f(x_k)\\right)$. Den står på det utdelte formelarket, men innsettingen må trenes.",
    },
    {
      question: "Hvilken setning gir at en rot finnes ved fortegnsskifte?",
      options: ["Mellomverdisetningen", "Middelverdisetningen", "Entydighetssetningen", "Fikspunktteoremet"],
      explanation: "Den krever kontinuitet og motsatte fortegn i endepunktene. Middelverdisetningen brukes derimot til kontraksjonsargumentet i fikspunktkapitlet.",
    },
    {
      question: "Hva gir entydighet av roten?",
      options: ["At $f'$ har fast fortegn, så $f$ er monoton", "At $f$ skifter fortegn mellom $a$ og $b$ i endene", "At $f$ er kontinuerlig på hele intervallet", "At $f'$ er null i minst ett punkt i intervallet"],
      explanation: "Fortegnsskiftet gir eksistens; monotonien gir at aksen krysses høyst én gang. Begge delene må med i besvarelsen.",
    },
    {
      question: "Hvor mange biseksjonsskritt trengs på $[1,2]$ for feil under $10^{-3}$?",
      options: ["9, siden $\\log_2 500\\approx 8{,}97$ rundes opp", "8, siden $\\log_2 500\\approx 8{,}97$ rundes ned", "10, siden man legger til et sikkerhetsskritt", "7, siden intervallet allerede er kort"],
      explanation: "Formelen er $k\\ge\\log_2\\frac{b-a}{2\\,\\text{tol}}$. Avrunding nedover gjør at kravet ikke er oppfylt.",
    },
    {
      question: "Hva slags konvergens har Newtons metode ved en enkel rot?",
      options: ["Kvadratisk — antall korrekte siffer dobles", "Lineær — et fast antall nye siffer per skritt", "Kubisk — antall korrekte siffer tredobles", "Logaritmisk — konvergensen bremser opp"],
      explanation: "Grunnen er at $g(x)=x-f/f'$ har $g'(r)=0$. Ved en multippel rot faller den til lineær.",
    },
    {
      question: "Hva er Jacobi-matrisen $J_F$ for et system?",
      options: ["Matrisen av partielt deriverte, rad = likning", "Matrisen av partielt deriverte, rad = variabel", "Matrisen av andre partielt deriverte av $F$", "Den inverse av koeffisientmatrisen til $F$"],
      explanation: "Kolonne $j$ hører til variabel $j$. Å transponere den ved et uhell gir et helt galt Newton-skritt.",
    },
    {
      question: "Hvorfor bør du regne determinanten til $J_F$ før du går videre?",
      options: ["Er den null, er Newton-skrittet udefinert", "Den er selve lengden på Newton-skrittet", "Den avgjør om systemet har flere løsninger", "Den brukes direkte i stoppkriteriet"],
      explanation: "Det er systemversjonen av kravet $f'(x_k)\\ne 0$. Kontrollen tar fem sekunder.",
    },
    {
      question: "Hva kjennetegner sekantmetoden sammenliknet med Newton?",
      options: ["Den bruker to punkter og ingen derivert", "Den bruker ett punkt og ingen derivert", "Den bruker to punkter og den deriverte", "Den bruker ett punkt og den andrederiverte"],
      explanation: "Stigningstallet gjennom de to siste punktene erstatter $f'$. Ordenen er omtrent $1{,}618$ i stedet for 2.",
    },
    {
      question: "Hvorfor kan biseksjon ikke svikte?",
      options: ["Feilgrensen avhenger bare av intervall og skritt", "Fordi hvert skritt gir dobbelt så mange korrekte siffer", "Fordi metoden bruker den deriverte som kontroll", "Fordi fortegnsskiftet forsvinner etter få skritt"],
      explanation: "Grensen $\\frac{b-a}{2^{k+1}}$ inneholder ikke $f$ i det hele tatt. Prisen er at metoden ikke får noen gevinst av at funksjonen er snill.",
    },
    {
      question: "Newton brukes på $f(x)=(x-1)^{2}$. Hva skjer?",
      options: ["Konvergensen blir lineær med faktor $1/2$", "Konvergensen blir kvadratisk som vanlig", "Iterasjonen divergerer fra enhver startverdi", "Iterasjonen treffer roten etter ett skritt"],
      explanation: "Roten er dobbel, så $f(r)=f'(r)=0$ og $g'(r)=1-1/m=1/2$. Symptomet er ett nytt siffer per tredje–fjerde skritt.",
    },
    {
      question: "Hva er den geometriske tolkningen av Newtons metode?",
      options: ["Tangentens nullpunkt blir neste iterat", "Sekantens nullpunkt blir neste iterat", "Midtpunktet i intervallet blir neste iterat", "Speilingen om linja $y=x$ blir neste iterat"],
      explanation: "Kurven erstattes av tangenten i punktet. Sekanten hører til sekantmetoden, midtpunktet til biseksjon.",
    },
    {
      question: "Hva er sjanger S i denne boka?",
      options: ["Lineære systemer: LU, Jacobi, Gauss–Seidel", "Numerisk integrasjon med trapes og Simpson", "Rotsøking med Newton, biseksjon og sekant", "Interpolasjon med Lagrange og Newton"],
      explanation: "Metodene står på det utdelte formelarket, men har tynt belegg: LU i 1 av 13 sett, Jacobi og Gauss–Seidel i 2 av 13. De holdes på kjenne-nivå.",
    },
    {
      question: "Hva er forskjellen på Jacobis metode og Gauss–Seidel?",
      options: ["Gauss–Seidel bruker de nyeste verdiene straks", "Jacobi bruker de nyeste verdiene med én gang", "Gauss–Seidel krever at matrisen er symmetrisk", "Jacobi krever at matrisen er triangulær"],
      explanation: "Jacobi holder på hele forrige vektor gjennom en runde. Derfor konvergerer Gauss–Seidel som regel raskere.",
    },
    {
      question: "I hvilken situasjon er biseksjon å foretrekke framfor Newton?",
      options: ["Når du må garantere antall skritt på forhånd", "Når du har en god startverdi og kjenner $f'$", "Når du trenger mange korrekte siffer raskt", "Når systemet har flere likninger og ukjente"],
      explanation: "Garantien er uavhengig av funksjonen. Newton er raskere, men bare lokalt konvergent.",
    },
    {
      question: "Hvorfor må du regne med mange siffer i en Newton-utregning?",
      options: ["Fordi feilen kvadreres for hvert skritt", "Fordi metoden er ustabil for alle startverdier", "Fordi den deriverte alltid er nær null i roten", "Fordi kalkulatoren avrunder brøken automatisk"],
      explanation: "Med tre desimaler ser to riktige iterater like ut, og du kan ikke vise konvergensen. Bruk minst sju siffer underveis.",
    },
  ],
  'tma4135-7-1': [
    {
      question: "Hva er Eulers metode?",
      options: ["$y_{n+1}=y_n+h\\,f\\left(t_n,y_n\\right)$", "$y_{n+1}=y_n+h\\,f\\left(t_{n+1},y_{n+1}\\right)$", "$y_{n+1}=y_n+\\tfrac{h}{2}\\left(k_1+k_2\\right)$", "$y_{n+1}=y_n+h\\,f\\left(t_n,y_{n+1}\\right)$"],
      explanation: "Metoden følger tangenten fra startpunktet. Alternativ B er bakover-Euler, som er implisitt.",
    },
    {
      question: "Hva er argumentet i $k_2$ i Heuns metode?",
      options: ["$y_n+hk_1$, altså Euler-prediksjonen", "$y_n$, altså den samme verdien som i $k_1$", "$y_n+\\tfrac h2 k_1$, altså et halvt skritt", "$y_{n+1}$, altså den ukjente sluttverdien"],
      explanation: "Bruker du $y_n$, degenererer Heun til Euler. Halvskrittet hører til RK4, ikke til Heun.",
    },
    {
      question: "Hvilke vekter har klassisk RK4?",
      options: ["$\\tfrac16\\left(k_1+2k_2+2k_3+k_4\\right)$", "$\\tfrac14\\left(k_1+k_2+k_3+k_4\\right)$", "$\\tfrac16\\left(k_1+2k_2+k_3+2k_4\\right)$", "$\\tfrac13\\left(k_1+k_2+k_3\\right)$"],
      explanation: "De to midtstigningstallene teller dobbelt. Kontroll: vektene summerer til 1, som de må for konstant $f$.",
    },
    {
      question: "Hvilken verdi bruker $k_3$ i RK4?",
      options: ["$k_2$, gjennom argumentet $y_n+\\tfrac h2 k_2$", "$k_1$, gjennom argumentet $y_n+\\tfrac h2 k_1$", "både $k_1$ og $k_2$ i en vektet sum", "ingen av dem; $k_3$ bruker bare $y_n$"],
      explanation: "Stigningstallene er kjedet: $k_2$ bygger på $k_1$, $k_3$ på $k_2$, $k_4$ på $k_3$. Å bryte kjeden ødelegger fjerdeordensstrukturen.",
    },
    {
      question: "Hva er den globale ordenen til Heuns metode?",
      options: ["2 — feilen faller med faktoren 4 ved halvering", "1 — feilen faller med faktoren 2 ved halvering", "3 — feilen faller med faktoren 8 ved halvering", "4 — feilen faller med faktoren 16 ved halvering"],
      explanation: "Den lokale avkuttingsfeilen er $O(h^3)$, og global orden er én mindre. Heun svarer til trapesregelen for integralet.",
    },
    {
      question: "Hvorfor er bakover-Euler implisitt?",
      options: ["Fordi $y_{n+1}$ står på begge sider av likheten", "Fordi den bruker to stigningstall i stedet for ett", "Fordi den krever at $f$ er lineær i $y$", "Fordi den bruker halve steglengden i argumentet"],
      explanation: "Du må løse en likning for $y_{n+1}$. Er $f$ ikke-lineær i $y$, gjøres det med Newtons metode.",
    },
    {
      question: "Hvor mange $f$-evalueringer koster ett RK4-skritt?",
      options: ["4, én for hvert stigningstall", "2, som for Heuns metode", "6, siden vektene har nevner 6", "1, siden metoden er ett-skritts"],
      explanation: "Antall evalueringer er metodens pris. Den riktige sammenlikningen mellom metoder er per evaluering, ikke per skritt.",
    },
    {
      question: "Hva er sammenhengen mellom lokal og global feil?",
      options: ["Lokal $O\\left(h^{p+1}\\right)$ gir global $O\\left(h^{p}\\right)$", "Lokal $O\\left(h^{p}\\right)$ gir global $O\\left(h^{p+1}\\right)$", "De er alltid av nøyaktig samme orden", "Global feil er kvadratet av den lokale"],
      explanation: "Hvert skritt blir bedre, men du tar dobbelt så mange. De to effektene gir tap av én potens.",
    },
    {
      question: "$y'=-20y$ løses med Euler og $h=0{,}1$. Hva skjer?",
      options: ["$y_1=-1$, altså feil fortegn og vekst", "$y_1=0{,}5$, altså for stort, men avtakende", "$y_1\\approx 0{,}135$, altså nesten eksakt", "$y_1=1$, altså ingen endring i det hele tatt"],
      explanation: "Faktoren $1+h\\lambda$ er $-1$, så tallverdien holder seg og fortegnet snur. Problemet er stivt, og eksplisitt Euler bryter sammen.",
    },
    {
      question: "Hva kjennetegner et stivt problem?",
      options: ["Komponenter med svært ulike tidsskalaer", "Løsningen er ikke deriverbar i noen punkter", "Differensiallikningen er ikke-lineær i $y$", "Initialbetingelsen er gitt i et endepunkt"],
      explanation: "Den raskeste komponenten tvinger eksplisitte metoder til svært små skritt, selv om den er uinteressant. Implisitte metoder slipper unna.",
    },
    {
      question: "Hvilken kvadraturformel svarer Heuns metode til?",
      options: ["Trapesregelen", "Simpsons regel", "Midtpunktsregelen", "Gauss–Legendre med to noder"],
      explanation: "Gjennomsnittet av stigningstallene i de to endepunktene er trapesregelen for $\\int f\\,dt$. RK4 svarer tilsvarende til Simpsons regel.",
    },
    {
      question: "Hvordan løser du en andreordens likning $y''=g(t,y,y')$ numerisk?",
      options: ["Sett $u=y$, $v=y'$ og løs som system", "Bruk RK4 direkte på den andrederiverte", "Integrer likningen én gang og bruk Euler", "Del steglengden på 2 og bruk Heun to ganger"],
      explanation: "Alle metodene i kapitlet virker uendret på systemer, med vektorer i stedet for tall. Det finnes ingen egen metode for høyere ordens likninger.",
    },
    {
      question: "Hva er den lokale avkuttingsfeilen til eksplisitt Euler?",
      options: ["$\\tfrac{h^{2}}{2}y''(\\eta)$, altså $O\\left(h^{2}\\right)$", "$\\tfrac{h^{3}}{6}y'''(\\eta)$, altså $O\\left(h^{3}\\right)$", "$h\\,y'(\\eta)$, altså $O\\left(h\\right)$", "$\\tfrac{h^{2}}{2}y'(\\eta)$, altså $O\\left(h^{2}\\right)$"],
      explanation: "Taylor-utviklingen gir leddet Euler kutter bort. Global orden er da 1.",
    },
    {
      question: "Hva er den viktigste gevinsten ved bakover-Euler?",
      options: ["Stabilitet for stive problemer", "Høyere orden enn eksplisitt Euler", "Færre $f$-evalueringer per skritt", "At den aldri krever likningsløsning"],
      explanation: "Ordenen er 1, akkurat som for eksplisitt Euler. Du kjøper ikke nøyaktighet, du kjøper at metoden ikke bryter sammen.",
    },
    {
      question: "Hvilke av metodene i kapitlet står på det utdelte formelarket?",
      options: ["Euler, forbedret Euler, RK4 og bakover-Euler", "Bare Euler og RK4, ikke de to andre metodene", "Bare RK4, siden den formelen er lengst å huske", "Ingen — alle må skrives fra hukommelsen"],
      explanation: "Alle fire er ferdig oppskrevet. Ferdigheten er å sette inn riktig $f$, $t_n$, $y_n$ og $h$ i riktig rekkefølge.",
    },
    {
      question: "$f<0$ i startpunktet. Hva skal skje med $y_1$ i et Euler-skritt?",
      options: ["$y_1$ blir mindre enn $y_0$", "$y_1$ blir større enn $y_0$", "$y_1$ blir lik $y_0$", "$y_1$ skifter fortegn"],
      explanation: "Skrittet er $y_0+hf$ med $h>0$. Dette er den raskeste kontrollen på om du har regnet riktig vei.",
    },
    {
      question: "Hva betyr $y_n$ kontra $y\\left(t_n\\right)$?",
      options: ["Beregnet tilnærming kontra eksakt løsning", "Eksakt løsning kontra beregnet tilnærming", "Verdi i tid kontra verdi i rom", "Startverdi kontra sluttverdi"],
      explanation: "Parentesen er hele forskjellen. Å skille dem tydelig i føringen er en billig kvalitetsmarkør.",
    },
    {
      question: "Hvilken faktor ganges $y_0$ med i ett bakover-Euler-skritt på $y'=\\lambda y$?",
      options: ["$\\dfrac{1}{1-h\\lambda}$", "$1+h\\lambda$", "$\\dfrac{1}{1+h\\lambda}$", "$1-h\\lambda$"],
      explanation: "Samle $y_1$ på venstre side i $y_1=y_0+h\\lambda y_1$. For $\\lambda<0$ ligger faktoren alltid mellom 0 og 1.",
    },
  ],
  'tma4135-7-2': [
    {
      question: "Hva står i venstre kolonne i en Butcher-tabell?",
      options: ["Nodene $c_i$, altså tidsforskyvningene", "Vektene $b_i$, altså sluttblandingen", "Koeffisientene $a_{ij}$ fra $y$-argumentene", "Stigningstallene $k_i$ som skal regnes ut"],
      explanation: "Stigningstall nummer $i$ regnes i tiden $t_n+c_ih$. Vektene står i nederste rad, under streken.",
    },
    {
      question: "Hvor mange ordensbetingelser er det på nivå 3?",
      options: ["To, og begge må holde", "Én, og den må holde", "Fire, og alle må holde", "To, men det holder at én av dem gjelder"],
      explanation: "Den ene er $\\sum b_ic_i^2=1/3$, den andre $\\sum b_ia_{ij}c_j=1/6$. Å stoppe etter den første er den dokumenterte hovedfeilen.",
    },
    {
      question: "En metode feiler på en nivå-3-betingelse. Hva er ordenen?",
      options: ["2, altså nivået under det som feilet", "3, altså nivået der den feilet", "4, siden nivå 1 og 2 gikk gjennom", "1, siden bare den første betingelsen gjelder"],
      explanation: "Ordenen er det høyeste nivået der alle betingelsene holder. Å telle det nivået som feilet, er den klassiske tellefeilen.",
    },
    {
      question: "Hva kjennetegner en eksplisitt Runge–Kutta-metode i tabellen?",
      options: ["$A$ er strengt nedre triangulær", "$A$ er strengt øvre triangulær", "$A$ er en diagonalmatrise", "$A$ er symmetrisk om diagonalen"],
      explanation: "Nuller på og over diagonalen betyr at hvert $k_i$ bare bruker tidligere stigningstall. Bakover-Euler har derimot $a_{11}=1$ og er implisitt.",
    },
    {
      question: "Hva sier radsum-betingelsen $c_i=\\sum_j a_{ij}$?",
      options: ["Den er nødvendig, men ikke tilstrekkelig", "Den er tilstrekkelig for at metoden har orden 3", "Den gjelder bare for implisitte metoder", "Den erstatter den første ordensbetingelsen"],
      explanation: "Den er en god avskriftskontroll, men metoden i eksempel 3 oppfyller den og har likevel bare orden 2.",
    },
    {
      question: "`return y + h*(k1 + 4*k2 + k3)/6` gir hvilke vekter?",
      options: ["$\\tfrac16,\\ \\tfrac23,\\ \\tfrac16$", "$1,\\ 4,\\ 1$", "$\\tfrac16,\\ \\tfrac46,\\ \\tfrac36$", "$\\tfrac13,\\ \\tfrac13,\\ \\tfrac13$"],
      explanation: "Faktoren utenfor parentesen må ganges inn. Kontroll: vektsummen blir 1.",
    },
    {
      question: "Hva er den første ordensbetingelsen?",
      options: ["$\\sum_i b_i=1$", "$\\sum_i c_i=1$", "$\\sum_i b_ic_i=1$", "$\\sum_{i,j} a_{ij}=1$"],
      explanation: "Den sier at metoden er konsistent og treffer eksakt når $f$ er konstant. Feiler den, konvergerer metoden ikke i det hele tatt.",
    },
    {
      question: "Hva er høyest mulige orden for en eksplisitt metode med 5 steg?",
      options: ["4, på grunn av en kjent barriere", "5, siden orden aldri overstiger stegtallet", "6, siden vektene gir ekstra frihet", "3, siden nivå 4 krever fire steg"],
      explanation: "Barrieren $p\\le s$ gjelder alltid, men for $s=5$ er den skjerpet til $p\\le 4$. Det er derfor RK4 er så utbredt.",
    },
    {
      question: "Et konvergenseksperiment gir forholdet 8 mellom påfølgende feil. Ordenen er",
      options: ["3, siden $2^{3}=8$", "8, siden forholdet er ordenen", "2, siden $2\\cdot 4=8$", "4, siden $16$ ville gitt orden 5"],
      explanation: "Forholdet nærmer seg $2^p$ når $h$ halveres. Forhold 4 gir orden 2, forhold 16 gir orden 4.",
    },
    {
      question: "Hvor mange ordensbetingelser er det på nivå 4?",
      options: ["Fire, og alle må holde", "To, og begge må holde", "Én, og den må holde", "Åtte, men fire er automatiske"],
      explanation: "Antallet vokser: 1, 1, 2, 4 nye per nivå. Formelarket stopper ved $p=4$ nettopp fordi antallet eksploderer videre.",
    },
    {
      question: "I `k3 = f(t + h/2, y + h*k2/2)` — hvilken koeffisient leses av?",
      options: ["$a_{32}=\\tfrac12$, siden det er `k2` som brukes", "$a_{31}=\\tfrac12$, siden det er tredje linje", "$c_3=\\tfrac12$ og ingen $a$-er i det hele tatt", "$b_3=\\tfrac12$, siden faktoren står i argumentet"],
      explanation: "Kolonneindeksen følger hvilket $k$ som står i argumentet. $c_3=1/2$ leses derimot av tidsargumentet.",
    },
    {
      question: "Hvorfor er $\\tfrac12$, $\\tfrac13$ og $\\tfrac14$ høyresider i ordensbetingelsene?",
      options: ["De er $\\int_0^1\\xi^{m}d\\xi$ for $m=1,2,3$ på $[0,1]$", "De er de reciproke av stegtallet $s$ i tabellen", "De er vektene i klassisk RK4", "De er nodene i Gauss-kvadratur"],
      explanation: "Betingelsene av typen $\\sum b_ic_i^m$ er presisjonsgrad-testen flyttet til $[0,1]$. Betingelsene med $A$ har ingen slik tolkning.",
    },
    {
      question: "Hva betyr $b_2=0$ i en trestegs tabell?",
      options: ["$k_2$ er ute av sluttsvaret, men trengs for $k_3$", "$k_2$ trenger ikke regnes ut i det hele tatt", "Metoden er egentlig en tostegsmetode", "Tabellen er skrevet av feil et sted"],
      explanation: "Midtpunktsmetoden har $b_1=0$ på samme måte. Stigningstallet brukes indirekte, gjennom argumentet til det neste.",
    },
    {
      question: "Hva er Butcher-tabellen for bakover-Euler?",
      options: ["Ett steg med $c_1=1$, $a_{11}=1$ og $b_1=1$", "Ett steg med $c_1=0$, $a_{11}=0$ og $b_1=1$", "To steg med vektene $\\tfrac12$ og $\\tfrac12$", "Ett steg med $c_1=1$, $a_{11}=0$ og $b_1=1$"],
      explanation: "Tallet på diagonalen gjør metoden implisitt. Alternativ B er derimot eksplisitt Euler.",
    },
    {
      question: "Du har verifisert alle betingelsene til og med nivå 3 for en trestegsmetode. Hva nå?",
      options: ["Sjekk nivå 4 — men barrieren gir $p\\le 3$ her", "Konkluder med orden 3 uten flere sjekker", "Konkluder med orden 4, siden nivå 3 holdt", "Sjekk radsummene på nytt for sikkerhets skyld"],
      explanation: "For en eksplisitt trestegsmetode er $p\\le s=3$, så orden 3 er det høyeste mulige. En rask sjekk av nivå 4 bekrefter at den feiler.",
    },
    {
      question: "Hva er den vanligste feilen ved avlesning av $a_{ij}$ fra kode?",
      options: ["Å forveksle hvilket $k$ som står i argumentet", "Å lese tidsargumentet som en vekt", "Å glemme at $c_1$ alltid er 1", "Å tro at negative koeffisienter er ulovlige i $A$"],
      explanation: "`y + h*k1/2` og `y + h*k2/2` skiller seg med ett tegn og gir helt ulike metoder. Negative koeffisienter er derimot helt vanlige.",
    },
  ],
  'tma4135-7-3': [
    {
      question: "Hva deler de to metodene i et innfelt Runge–Kutta-par?",
      options: ["Nodene $\\mathbf c$ og matrisen $A$, og dermed alle $k_i$", "Vektraden $\\mathbf b$, men de har hver sin matrise $A$", "Steglengden $h$, men de har hver sine noder $\\mathbf c$", "Ordenen $p$, men de har hver sine stigningstall $k_i$"],
      explanation: "Bare sluttblandingen skiller dem: $y_{n+1}$ og $\\hat y_{n+1}$ vektes ulikt over de samme stigningstallene. Derfor koster det ekstra svaret én vektet sum, ikke en ny runde funksjonsevalueringer.",
    },
    {
      question: "Det lokale feilestimatet i et innfelt par er",
      options: ["$\\hat\\varepsilon=h\\left|\\sum_i\\left(\\hat b_i-b_i\\right)k_i\\right|$", "$\\hat\\varepsilon=h\\left|\\sum_i\\left(\\hat b_i-b_i\\right)c_i\\right|$", "$\\hat\\varepsilon=\\left|\\sum_i\\left(\\hat b_i-b_i\\right)k_i\\right|$", "$\\hat\\varepsilon=h^{2}\\left|\\sum_i\\left(\\hat b_i-b_i\\right)k_i\\right|$"],
      explanation: "Trekk de to løsningene fra hverandre: $y_n$ faller bort, og $h$ står igjen utenfor summen. Uttrykket er nøyaktig det samme som $\\left|\\hat y_{n+1}-y_{n+1}\\right|$, og er ofte raskere fordi vektdifferansene er enkle brøker.",
    },
    {
      question: "Hvilken av de to løsningene gjelder feilestimatet for?",
      options: ["Den av orden $p$, altså den lavere av de to", "Den av orden $p+1$, altså den høyere av de to", "Begge like godt, siden differansen er felles", "Gjennomsnittet av de to, siden det er en differanse"],
      explanation: "Den eksakte løsningen ligger nær $\\hat y_{n+1}$, så differansen måler i praksis avstanden ned til $y_{n+1}$. For $\\hat y_{n+1}$ selv er estimatet en overvurdering — i eksempel 1 med omtrent en faktor ti.",
    },
    {
      question: "Modellen for den lokale feilen til en metode av orden $p$ er",
      options: ["$\\hat\\varepsilon\\approx Ch^{p+1}$, med $C$ uavhengig av $h$", "$\\hat\\varepsilon\\approx Ch^{p}$, med $C$ uavhengig av $h$", "$\\hat\\varepsilon\\approx Ch^{p+1}$, med $C$ proporsjonal med $h$", "$\\hat\\varepsilon\\approx C^{p+1}h$, med $C$ uavhengig av $h$"],
      explanation: "Eksponenten er én høyere enn ordenen fordi det er feilen **per skritt** som modelleres. At $C$ ikke avhenger av $h$, er nettopp det som gjør at den faller bort når du deler to slike likninger på hverandre.",
    },
    {
      question: "Hvilken eksponent står i steglengdeformelen?",
      options: ["$\\tfrac{1}{p+1}$, med $p$ fra den propagerte løsningen", "$\\tfrac1p$, med $p$ fra den propagerte løsningen", "$\\tfrac{1}{p+1}$, med $p$ fra referanseløsningen", "$p+1$, med $p$ fra den propagerte løsningen"],
      explanation: "Eksponenten følger av modellen $\\hat\\varepsilon\\approx Ch^{p+1}$, og $p$ er ordenen til den løsningen du fører videre — som regel den lavere. Å bruke $\\tfrac1p$ er den dokumenterte hovedfeilen i sjangeren.",
    },
    {
      question: "Et skritt med $\\hat\\varepsilon>\\text{Tol}$ skal",
      options: ["forkastes og regnes om fra samme startpunkt", "aksepteres, men med kortere neste steglengde", "forkastes, og integrasjonen avbrytes med feil", "aksepteres, siden estimatet er konservativt"],
      explanation: "Verdien $y_{n+1}$ kastes, og hele skrittet gjøres om med den nye $h$ — fra $t_n$, ikke fra $t_{n+1}$. Å justere svaret i ettertid finnes ikke i metoden.",
    },
    {
      question: "Hvorfor er sikkerhetsfaktoren $P$ satt litt under 1?",
      options: ["Modellen er tilnærmet, så treff på Tol gir mange forkast", "Fordi brøken $\\text{Tol}/\\hat\\varepsilon$ ellers kan bli negativ", "Fordi eksponenten $\\tfrac1{p+1}$ ellers blir for liten", "Fordi $h$ ellers kan vokse forbi den øvre grensen på 5"],
      explanation: "Sikter du rett på toleransen, bommer omtrent halvparten av skrittene litt over. Et forkastet skritt koster hele arbeidet om igjen, så $P=0{,}9$ er en god handel: noen prosent flere skritt mot langt færre forkast.",
    },
    {
      question: "Ved forkast skal den nye steglengden være",
      options: ["mindre enn $h$ — er den større, er brøken snudd", "større enn $h$ — er den mindre, er brøken snudd", "lik $h$, siden det samme skrittet skal gjentas", "uavhengig av $h$, siden Tol alene bestemmer den"],
      explanation: "Kontrollen tar to sekunder og fanger den vanligste regnefeilen: å sette $\\hat\\varepsilon/\\text{Tol}$ i stedet for $\\text{Tol}/\\hat\\varepsilon$. Ved aksept skal forslaget peke motsatt vei.",
    },
    {
      question: "Et 2(3)-par gir $\\hat\\varepsilon=0{,}0133$ ved $h=0{,}2$. Med Tol $=10^{-2}$ og $P=0{,}9$ blir $h_{\\text{ny}}$",
      options: ["$\\approx 0{,}164$, fra $0{,}18\\cdot 0{,}75^{1/3}$", "$\\approx 0{,}198$, fra $0{,}18\\cdot 1{,}333^{1/3}$", "$\\approx 0{,}156$, fra $0{,}18\\cdot 0{,}75^{1/2}$", "$\\approx 0{,}182$, fra $0{,}20\\cdot 0{,}75^{1/3}$"],
      explanation: "Den propagerte løsningen har orden 2, så eksponenten er $\\tfrac13$, og brøken er $\\text{Tol}/\\hat\\varepsilon=0{,}75$. Svaret $0{,}198$ kommer av snudd brøk, $0{,}156$ av eksponenten $\\tfrac12$, og $0{,}182$ av glemt sikkerhetsfaktor.",
    },
    {
      question: "Heun–Euler-paret på $y'=t-2y$, $y(0)=1$, $h=0{,}2$ gir $k_1=-2$ og $k_2=-1$. Da er $\\hat\\varepsilon$",
      options: ["$0{,}1$, fra $\\tfrac h2\\left|k_2-k_1\\right|$", "$0{,}2$, fra $h\\left|k_2-k_1\\right|$", "$0{,}05$, fra $\\tfrac h4\\left|k_2-k_1\\right|$", "$1{,}0$, fra $\\left|k_2-k_1\\right|$"],
      explanation: "Vektdifferansene er $\\left(-\\tfrac12,\\tfrac12\\right)$, så estimatet er halve steglengden ganger forskjellen på stigningstallene. Kontroll fra sluttsvarene: Euler gir $0{,}6$, Heun gir $0{,}7$, og differansen er $0{,}1$.",
    },
    {
      question: "Et feilestimat oppgis å oppføre seg som $Ch^{4}$. Hvilken eksponent bruker du?",
      options: ["$\\tfrac14$ — den leses rett ut av oppgaveteksten", "$\\tfrac15$ — én mer enn potensen i feilmodellen", "$\\tfrac13$ — én mindre enn potensen i feilmodellen", "$4$ — potensen brukes som eksponent direkte"],
      explanation: "Modellen $\\hat\\varepsilon\\approx Ch^{p+1}$ med $p+1=4$ gir $p=3$, og steglengdeformelen får eksponenten $\\tfrac1{p+1}=\\tfrac14$. Du trenger ikke vite hvilken metode det er.",
    },
    {
      question: "Hva menes med lokal ekstrapolasjon?",
      options: ["At $\\hat y_{n+1}$, den av orden $p+1$, føres videre", "At $y_{n+1}$, den av orden $p$, føres videre", "At steglengden ekstrapoleres fra de to siste skrittene", "At feilestimatet ekstrapoleres til hele intervallet"],
      explanation: "Man tar den beste løsningen man har, og bruker estimatet som en konservativ styring — det er nesten alltid praksis. På eksamen: bruk $\\tfrac1{p+1}$ med den $p$ oppgaven oppgir for den propagerte løsningen, og si hva du har antatt.",
    },
    {
      question: "Et par har vektrader av orden 3 og 1. Hvorfor er det ubrukelig?",
      options: ["Differansen måler feilen i ingen av de to løsningene", "Differansen blir alltid null når ordenene er ulike", "Steglengdeformelen har ingen eksponent for orden 1", "Den laveste raden bryter betingelsen $\\sum_i b_i=1$"],
      explanation: "Estimatet blir $O\\left(h^{2}\\right)$ fra orden-1-raden, mens den gode løsningen har lokal feil $O\\left(h^{4}\\right)$ — to hele ordener for stort. Steglengdeformelen krever at ordenene ligger inntil hverandre.",
    },
    {
      question: "Hva koster steghalvering sammenliknet med et innfelt par?",
      options: ["Omtrent dobbelt så mange $f$-evalueringer per skritt", "Omtrent halvparten så mange $f$-evalueringer per skritt", "Like mange, men den krever en egen ekstra vektrad", "Ingenting ekstra, men estimatet blir mindre pålitelig"],
      explanation: "Steghalvering regner skrittet én gang med $h$ og to ganger med $h/2$. Fordelen er at den virker for enhver metode; ulempen er prisen når $f$ er dyr — og det er derfor de innfelte parene brukes i praksis.",
    },
  ],
  'tma4135-7-4': [
    {
      question: "Hva er testlikningen i stabilitetsanalyse?",
      options: ["$y'=\\lambda y$, med løsning $y_0e^{\\lambda t}$", "$y'=\\lambda t$, med løsning $\\lambda t^{2}/2$", "$y'=f(t,y)$, altså den generelle likningen", "$y''=\\lambda y$, med løsning på eksponentialform"],
      explanation: "For $\\lambda<0$ dør løsningen ut, og det er den oppførselen en metode kan svikte på. Et lineært system faller fra hverandre i slike likninger, én per egenverdi.",
    },
    {
      question: "Hva er $R(z)$?",
      options: ["Faktoren $y_n$ ganges med per skritt", "Feilestimatet metoden gir for hvert skritt", "Steglengden metoden foreslår for neste skritt", "Antall stigningstall metoden bruker per skritt"],
      explanation: "Etter $n$ skritt er $y_n=R(z)^n y_0$. Metoden er absolutt stabil når $|R(z)|\\le 1$.",
    },
    {
      question: "Hva er $z$ i stabilitetsanalysen?",
      options: ["$\\lambda h$, produktet av koeffisient og steglengde", "$\\lambda/h$, forholdet mellom koeffisient og steglengde", "$h$ alene, altså steglengden", "$\\lambda$ alene, altså problemets koeffisient"],
      explanation: "Ingen metode kan skille $h$ fra $\\lambda$ — de opptrer alltid sammen. Derfor er stabilitet en egenskap ved produktet, ikke ved noen av dem alene.",
    },
    {
      question: "Hva er $R(z)$ for eksplisitt Euler?",
      options: ["$1+z$", "$1-z$", "$\\dfrac{1}{1-z}$", "$1+z+\\dfrac{z^{2}}{2}$"],
      explanation: "Sett $f=\\lambda y$ inn i $y_{n+1}=y_n+hf$ og faktoriser ut $y_n$. Alternativ C er bakover-Euler.",
    },
    {
      question: "Hva er stabilitetsintervallet for Heuns metode på den reelle aksen?",
      options: ["$-2\\le z\\le 0$, det samme som for Euler", "$-4\\le z\\le 0$, dobbelt så bredt som Eulers", "$-1\\le z\\le 0$, halvparten av Eulers", "Hele $z\\le 0$, siden metoden er A-stabil"],
      explanation: "Høyere orden gir ikke automatisk større stabilitetsområde. For Heun er det den øvre ulikheten $R\\le 1$ som binder, for Euler den nedre.",
    },
    {
      question: "Et system har egenverdier $-1$ og $-6$. Hvilken binder steglengden?",
      options: ["$-6$, den med størst tallverdi av de to", "$-1$, den med minst tallverdi", "Gjennomsnittet $-3{,}5$", "Summen $-7$, altså sporet"],
      explanation: "Alle egenverdiene må inn i stabilitetsområdet samtidig, så det strengeste kravet gjelder. Dette er den dokumenterte fella i sjangeren.",
    },
    {
      question: "Hva betyr at en metode er A-stabil?",
      options: ["$|R(z)|\\le 1$ i hele venstre halvplan", "$|R(z)|\\le 1$ bare for reelle $z$", "Metoden har orden minst 2 og er implisitt", "Metoden gir alltid nøyaktige svar"],
      explanation: "Bakover-Euler er A-stabil; ingen eksplisitt metode kan være det, siden $R$ da er et polynom. A-stabilitet sier ingenting om nøyaktighet.",
    },
    {
      question: "Hvorfor har enhver eksplisitt metode et endelig stabilitetsintervall?",
      options: ["Fordi $R$ er et polynom og vokser uten grense", "Fordi $R$ er en brøk med nevner nær null", "Fordi ordenen alltid er lavere enn stegtallet", "Fordi stigningstallene er kjedet til hverandre"],
      explanation: "For eksplisitte metoder er $R$ det avkuttede Taylor-polynomet til $e^z$. Et polynom går mot uendelig, så det finnes alltid en $h$ som er for stor.",
    },
    {
      question: "Maks steglengde for eksplisitt Euler på $y'=-8y$ er",
      options: ["$h\\le 0{,}25$, fra $h\\le 2/|\\lambda|$", "$h\\le 0{,}5$, fra $h\\le 4/|\\lambda|$", "$h\\le 4$, fra $h\\le |\\lambda|/2$", "$h\\le 0{,}125$, fra $h\\le 1/|\\lambda|$"],
      explanation: "Intervallet $-2\\le z\\le 0$ med $z=-8h$ gir $h\\le 2/8$. Ved $h=0{,}25$ er $R=-1$, altså akkurat på grensen.",
    },
    {
      question: "Hvordan kontrollerer du en utledet $R(z)$?",
      options: ["Den skal stemme med $e^{z}$ opp til $z^{p}$", "Den skal alltid være lik $e^{z}$ eksakt", "Den skal ha samme grad som ordenen minus 1", "Summen av koeffisientene skal bli 1"],
      explanation: "Metoden er eksakt til orden $p$, så tilnærmingen til $e^z$ må stemme så langt. Får du $1+z+z^2$ for en andreordens metode, har du regnefeil.",
    },
    {
      question: "En metode er stabil, men gir svar 25 ganger for store. Hva betyr det?",
      options: ["Stabilitet og nøyaktighet er uavhengige krav", "Metoden er likevel ustabil ved nærmere ettersyn", "Stabilitetsanalysen må være regnet feil", "Metoden har negativ konvergensorden"],
      explanation: "Stabilitet garanterer bare at løsningen ikke eksploderer. Bakover-Euler på $y'=-10y$ med $h=0{,}5$ er nettopp et slikt tilfelle.",
    },
    {
      question: "Hva er stivhetsforholdet $S$?",
      options: ["$\\max_j|\\lambda_j|$ delt på $\\min_j|\\lambda_j|$", "$\\min_j|\\lambda_j|$ delt på $\\max_j|\\lambda_j|$", "Summen av alle egenverdiene til $A$", "Produktet av alle egenverdiene til $A$"],
      explanation: "Et stort $S$ betyr at steglengden bestemmes av en komponent som forsvinner nesten umiddelbart. Da er en implisitt metode nødvendig.",
    },
    {
      question: "RK4 har $|z^{*}|=2{,}785$ mot Eulers 2. Hva følger av det for stive problemer?",
      options: ["RK4 er dyrere per evaluering ved stivhet", "RK4 er alltid billigere, siden ordenen er høyere", "RK4 kan bruke fire ganger så lang steglengde", "RK4 blir A-stabil for tilstrekkelig liten $h$"],
      explanation: "Intervallet vokser 39 prosent, men kostnaden per skritt firedobles. Er stabiliteten flaskehalsen, er svaret å bytte til en implisitt metode.",
    },
  ],
  'tma4135-7-5': [
    {
      question: "I RK4 er $y$-argumentet i $k_3$ lik",
      options: ["$y_n+\\tfrac h2k_2$ — det bygger på $k_2$", "$y_n+\\tfrac h2k_1$ — det bygger på $k_1$", "$y_n+hk_2$ — hele steget ganger $k_2$", "$y_n+\\tfrac h2\\left(k_1+k_2\\right)$ — snittet"],
      explanation: "Kjedingen er $k_1\\to k_2\\to k_3\\to k_4$, og både $k_2$ og $k_3$ regnes i tiden $t_n+\\tfrac h2$. I det gjennomregnede caset ble $k_2=0{,}75$ og $k_3=0{,}8125$ — så like at feilen er lett å gjøre og vanskelig å oppdage.",
    },
    {
      question: "I Heuns metode er $y$-argumentet i $k_2$ lik",
      options: ["$y_n+hk_1$, altså den fulle Euler-prediksjonen", "$y_n$, altså samme verdi som brukes i $k_1$", "$y_n+\\tfrac h2k_1$, altså halve Euler-skrittet", "$y_{n+1}$, altså sluttresultatet av skrittet"],
      explanation: "Prøveskrittet er hele Euler-skrittet, og $t$-argumentet er $t_n+h$. Dette er den dokumenterte hovedfeilen i sjangeren — skriv argumentet ut i besvarelsen, så ser den som retter at du har gjort det riktig.",
    },
    {
      question: "Ett bakover-Euler-skritt på $y'=-y^{2}$ med $y(0)=2$ og $h=0{,}25$ gir en likning som er",
      options: ["andregrads, med den brukbare rota $2\\sqrt3-2$", "lineær, med den eneste løsningen $y_1=1{,}6$", "lineær, med den eneste løsningen $y_1=1{,}0$", "andregrads, med den brukbare rota $-2\\sqrt3-2$"],
      explanation: "Likningen $y_1=2-0{,}25y_1^{2}$ blir $y_1^{2}+4y_1-8=0$ med røttene $-2\\pm 2\\sqrt3$. Løsningen starter i $y_0=2>0$ og avtar, så den negative rota forkastes, og svaret er $\\approx 1{,}4641$. Verdien $1{,}0$ er eksplisitt Euler.",
    },
    {
      question: "Ett bakover-Euler-skritt på $y'=3-y$ med $y(0)=1$ og $h=0{,}5$ gir",
      options: ["$y_1=\\tfrac53\\approx 1{,}667$, fra $1{,}5y_1=2{,}5$", "$y_1=2$, fra $y_1=1+0{,}5\\left(3-1\\right)$", "$y_1=1{,}75$, fra $y_1=1+0{,}25\\left(k_1+k_2\\right)$", "$y_1=1{,}25$, fra $2y_1=2{,}5$ etter innsetting"],
      explanation: "Formelen er implisitt: $y_1=1+0{,}5\\left(3-y_1\\right)$, og $y_1$ må samles på venstre side. Verdien $2$ er eksplisitt Euler, og $1{,}75$ er Heun — en besvarelse som lander på $2$ har behandlet metoden som eksplisitt.",
    },
    {
      question: "Hvor mange ordensbetingelser må sjekkes på nivå 3 og på nivå 4?",
      options: ["To på nivå 3 og fire på nivå 4", "Én på nivå 3 og to på nivå 4", "To på nivå 3 og tre på nivå 4", "Tre på nivå 3 og fire på nivå 4"],
      explanation: "Går den første betingelsen på et nivå gjennom, er du ikke ferdig med nivået — å stoppe der er den dokumenterte hovedfeilen i sjangeren. Feiler én betingelse på nivå 3, er ordenen 2, ikke 3: konkluder alltid med nivået under det første som feilet.",
    },
    {
      question: "Returlinja `return y + h*(k1 + 4*k2 + k3)/6` gir vektene",
      options: ["$\\left(\\tfrac16,\\ \\tfrac23,\\ \\tfrac16\\right)$", "$\\left(1,\\ 4,\\ 1\\right)$", "$\\left(\\tfrac16,\\ 4,\\ \\tfrac16\\right)$", "$\\left(\\tfrac13,\\ \\tfrac43,\\ \\tfrac13\\right)$"],
      explanation: "Faktoren $\\tfrac16$ utenfor parentesen må ganges inn i hvert ledd. Kontrollen er at vektsummen blir 1: $\\tfrac16+\\tfrac23+\\tfrac16=1$. Å glemme faktoren er en dokumentert feil i avlesningen fra kode.",
    },
    {
      question: "En metode med $\\mathbf b=\\left(\\tfrac29,\\tfrac13,\\tfrac49\\right)$ og $\\mathbf c=\\left(0,\\tfrac12,\\tfrac34\\right)$ har $\\sum_i b_ic_i^{3}=\\tfrac{11}{48}$. Ordenen er",
      options: ["3, siden nivå-4-kravet $\\tfrac{12}{48}$ ikke holder", "4, siden $\\tfrac{11}{48}$ er nær nok kravet $\\tfrac14$", "2, siden også en nivå-3-betingelse må ha feilet", "3, men bare hvis $\\sum_{i,j} b_ia_{ij}c_j\\ne\\tfrac16$"],
      explanation: "Kravet på nivå 4 er $\\tfrac14=\\tfrac{12}{48}$, og en ordensbetingelse er oppfylt eller ikke — det finnes ingen «nesten». Begge nivå-3-betingelsene holder for denne metoden (Ralstons), så ordenen er nivået under 4. Regn med brøker, ikke desimaltall.",
    },
    {
      question: "Heun–Euler-paret på $y'=3-y$, $y(0)=1$, $h=0{,}5$ gir $\\hat\\varepsilon=0{,}25$. Med Tol $=10^{-1}$ og $P=0{,}9$ blir $h_{\\text{ny}}$",
      options: ["$\\approx 0{,}285$, med eksponenten $\\tfrac12$", "$\\approx 0{,}332$, med eksponenten $\\tfrac13$", "$\\approx 0{,}316$, uten sikkerhetsfaktoren", "$\\approx 0{,}712$, med snudd brøk i formelen"],
      explanation: "Euler-svaret propageres, så $p=1$ og eksponenten er $\\tfrac1{p+1}=\\tfrac12$: $0{,}9\\cdot 0{,}5\\cdot\\sqrt{0{,}4}$. Estimatet ligger over toleransen, så skrittet forkastes — og forslaget må da bli mindre enn $h=0{,}5$.",
    },
    {
      question: "Med $P=0{,}9$ og et 3(4)-par gir sikkerhetsfaktoren en margin i feilen på",
      options: ["$1-0{,}9^{4}\\approx 34$ prosent", "$1-0{,}9^{3}\\approx 27$ prosent", "$1-0{,}9\\ =\\ 10$ prosent nøyaktig", "$0{,}9^{4}\\approx 66$ prosent av Tol"],
      explanation: "Feilen skalerer med $h^{p+1}=h^{4}$, så 10 prosent kortere steglengde gir 34 prosent mindre feil. Det er derfor andelen forkastede skritt faller fra omtrent halvparten til noen få prosent, mens antall skritt bare øker med rundt 9 prosent.",
    },
    {
      question: "Et system har $\\operatorname{tr}A=-11$ og $\\det A=24$, altså egenverdiene $-3$ og $-8$. Maks steglengde for eksplisitt Euler er",
      options: ["$h\\le 0{,}250$, fra $2/8$", "$h\\le 0{,}667$, fra $2/3$", "$h\\le 0{,}182$, fra $2/11$", "$h\\le 0{,}348$, fra $2{,}785/8$"],
      explanation: "Alle egenverdiene må ligge i stabilitetsområdet samtidig, så den mest negative binder — å bruke $-3$ er den dokumenterte fella. Grensen $2{,}785/8$ gjelder RK4, og $2/11$ bruker sporet i stedet for en egenverdi.",
    },
    {
      question: "Heun brukes på $y'=-4y+4$ med $h=0{,}4$. Stabilitetsgrensen er",
      options: ["$h\\le 0{,}5$, så $h=0{,}4$ ligger innenfor", "$h\\le 0{,}5$, så $h=0{,}4$ ligger utenfor", "$h\\le 0{,}25$, så $h=0{,}4$ ligger utenfor", "$h\\le 1{,}0$, så $h=0{,}4$ ligger innenfor"],
      explanation: "Koeffisienten foran $y$ er $\\lambda=-4$; konstantleddet $+4$ påvirker ikke stabiliteten. Heuns intervall $-2\\le z\\le 0$ gir $h\\le 2/4$, og $R(-1{,}6)=0{,}68$ bekrefter det. Men Heun-svaret $0{,}32$ mot eksakt $0{,}798$ viser at stabil ikke er det samme som brukbar.",
    },
    {
      question: "Feilene firedeles for hver halvering av $h$. Den observerte ordenen er",
      options: ["2, siden $2^{p}=4$ og dermed er $p=2$", "4, siden feilen firedeles per halvering", "1, siden $2^{p}=2$ for hver halvering", "3, siden ordenen er stegtallet minus én"],
      explanation: "Forholdet $e(h)/e(h/2)\\approx 2^{p}$ gir $p=2$. Målingen forutsetter at du ligger godt innenfor stabilitetsområdet — er stabiliteten aktiv, følger feilene ikke $h^{p}$-mønsteret i det hele tatt, og ordensmålingen blir meningsløs.",
    },
  ],
  'tma4135-8-1': [
    {
      question: "Hva er den sentrale differansekvotienten for $u'(x_i)$?",
      options: ["$\\dfrac{U_{i+1} - U_{i-1}}{2h}$", "$\\dfrac{U_{i+1} - U_{i-1}}{h}$", "$\\dfrac{U_{i+1} - U_i}{2h}$", "$\\dfrac{U_{i+1} - 2U_i + U_{i-1}}{2h}$"],
      explanation: "Avstanden fra $x_{i-1}$ til $x_{i+1}$ er to steg, så nevneren er $2h$. Uttrykket $\\dfrac{U_{i+1} - U_i}{2h}$ er den forlengs kvotienten med feil nevner, og $\\dfrac{U_{i+1} - 2U_i + U_{i-1}}{2h}$ er telleren fra den dobbeltderiverte satt over feil nevner.",
    },
    {
      question: "Hvilken orden har den forlengs differansekvotienten?",
      options: ["Orden 1 — feilen halveres når $h$ halveres", "Orden 2 — feilen deles på fire når $h$ halveres", "Orden 0 — feilen endrer seg ikke med $h$", "Orden 4 — feilen deles på seksten når $h$ halveres"],
      explanation: "Taylor gir $\\frac{u(x+h)-u(x)}{h} = u' + \\frac{h}{2}u'' + O(h^2)$. Første ledd som overlever er proporsjonalt med $h$, altså orden 1. Orden 2 tilhører de sentrale kvotientene.",
    },
    {
      question: "Hvorfor er sentraldifferansen for $u'$ av andre orden?",
      options: ["Fordi $hu''$-leddene kansellerer når rekkene trekkes fra hverandre", "Fordi den bruker tre gitterpunkter i stedet for bare to naboverdier", "Fordi nevneren $2h$ er dobbelt så stor som i de ensidige formlene", "Fordi et gjennomsnitt av to anslag alltid blir mer nøyaktig enn ett"],
      explanation: "Kanselleringen er hele mekanismen: den forlengs kvotienten har feilen $+\\frac h2 u''$, den baklengs har $-\\frac h2 u''$, og i gjennomsnittet blir summen null. Antall punkter og størrelsen på nevneren er konsekvenser, ikke årsaker.",
    },
    {
      question: "Avkuttingsfeilen til $\\dfrac{U_{i+1} - 2U_i + U_{i-1}}{h^2}$ har hovedledd",
      options: ["$\\dfrac{h^2}{12}u^{(4)}(x_i)$", "$\\dfrac{h^2}{12}u'''(x_i)$", "$\\dfrac{h^2}{6}u'''(x_i)$", "$\\dfrac{h^2}{4}u^{(4)}(x_i)$"],
      explanation: "Summen av de to Taylor-rekkene gir $2\\cdot\\frac{h^4}{24}u^{(4)} = \\frac{h^4}{12}u^{(4)}$, og etter divisjon med $h^2$ står $\\frac{h^2}{12}u^{(4)}$ igjen. Både derivertordenen og nevneren må stemme: $\\frac{h^2}{6}u'''$ hører til den sentrale førstederiverte.",
    },
    {
      question: "En feiltabell viser at feilen deles på 4 hver gang $h$ halveres. Hvilken orden har metoden?",
      options: ["Orden 2, siden $2^p = 4$ gir $p = 2$", "Orden 4, siden feilen deles på nettopp 4", "Orden 1, siden feilen synker når $h$ synker", "Orden 3, siden 4 ligger mellom $2^1$ og $2^3$"],
      explanation: "Halveringstesten sier at forholdet er $2^p$. Forholdet 4 gir $p = 2$. Å lese tallet 4 rett av som ordenen er den vanligste feilen her — da ville forholdet 16 gitt orden 16.",
    },
    {
      question: "Hva er forskjellen på avkuttingsfeil og avrundingsfeil?",
      options: ["Avkutting kommer av at Taylor-rekka stoppes, avrunding av maskinens siffer", "Avkutting kommer av maskinens endelige siffer, avrunding av at rekka stoppes", "De er to navn på samme feil, brukt i ulike lærebøker og fagtradisjoner", "Avkutting gjelder deriverte, mens avrunding bare gjelder ved integraler"],
      explanation: "De har helt ulike kilder og motsatt oppførsel: avkuttingsfeilen synker når $h$ synker, avrundingsfeilen stiger. Blandes de, blir hele balanseringsargumentet meningsløst.",
    },
    {
      question: "Hvorfor vokser avrundingsfeilen når $h$ blir svært liten?",
      options: ["Telleren blir en differanse av nesten like tall, delt på noe bittelite", "Datamaskinen bruker færre gjeldende siffer på små tall enn på store tall", "Taylor-rekka konvergerer langsommere jo mindre steglengden $h$ blir", "Antall gitterpunkter øker, så det blir flere avrundinger å summere opp"],
      explanation: "Det er kanselleringen som er problemet: de like sifrene i front stryker hverandre, bare de usikre bakerste blir igjen, og divisjonen med $h$ blåser dem opp. Bidraget er omtrent $\\varepsilon/h$ for førstederiverte.",
    },
    {
      question: "For sentral $u'$ med avrundingsbidrag $\\varepsilon/h$ og avkuttingsfeil $\\frac{h^2}{6}M_3$ er optimal steglengde",
      options: ["$h = \\left(3\\varepsilon/M_3\\right)^{1/3}$, altså av orden $\\varepsilon^{1/3}$", "$h = \\left(3\\varepsilon/M_3\\right)^{1/2}$, altså av orden $\\varepsilon^{1/2}$", "$h = \\left(6\\varepsilon/M_3\\right)^{1/4}$, altså av orden $\\varepsilon^{1/4}$", "$h = \\varepsilon$, altså så liten som maskinen tillater"],
      explanation: "Deriver $E(h)=\\varepsilon/h + \\frac{M_3}{6}h^2$ og sett lik null: $-\\varepsilon/h^2 + \\frac{M_3}{3}h = 0$ gir $h^3 = 3\\varepsilon/M_3$. Eksponenten $1/4$ hører til den dobbeltderiverte, der nevneren er $h^2$.",
    },
    {
      question: "Med avkuttingsfeil $O(h^p)$ og avrundingsbidrag $O(\\varepsilon/h^q)$ er optimal $h$",
      options: ["$O\\!\\left(\\varepsilon^{1/(p+q)}\\right)$", "$O\\!\\left(\\varepsilon^{1/(p-q)}\\right)$", "$O\\!\\left(\\varepsilon^{q/p}\\right)$", "$O\\!\\left(\\varepsilon^{1/(pq)}\\right)$"],
      explanation: "Balanseringen gir $h^{p+q} \\propto \\varepsilon$, altså eksponenten $1/(p+q)$ — én delt på summen av ordenen og nevnerpotensen. Differansen $p-q$ kan bli null eller negativ og gir meningsløse svar.",
    },
    {
      question: "Den baklengs differansekvotienten skrives",
      options: ["$\\dfrac{U_i - U_{i-1}}{h}$", "$\\dfrac{U_{i-1} - U_i}{h}$", "$\\dfrac{U_i - U_{i-1}}{-h}$", "$\\dfrac{U_i - U_{i-1}}{2h}$"],
      explanation: "Telleren er denne verdien minus forrige, og nevneren er $+h$ selv om steget peker bakover. Snus telleren eller settes $-h$ i nevneren, bytter hele svaret fortegn.",
    },
    {
      question: "Hvilket enkelt regnestykke avslører raskest at du har skrevet $h$ i stedet for $2h$ i nevneren?",
      options: ["Test formelen på $u(x) = x$ — riktig kvotient gir nøyaktig 1", "Test formelen på $u(x) = x^2$ — riktig kvotient skal gi nøyaktig 0 der", "Test formelen på $u(x) = e^x$ og se om svaret blir positivt", "Test formelen med $h = 1$ og se om svaret blir et helt tall"],
      explanation: "For $u = x$ er $u' = 1$, og enhver konsistent kvotient treffer eksakt. Med feil nevner får du 2 eller 0,5 i stedet. Testen på $x^2$ gir ikke 0 for førstederiverte, og de to siste sier ingenting om nevneren.",
    },
    {
      question: "Feilrekka til en symmetrisk differansekvotient inneholder",
      options: ["bare like potenser av $h$: $h^2, h^4, h^6, \\dots$", "bare odde potenser av $h$: $h^1, h^3, h^5, \\dots$", "alle potenser av $h$ fra og med førsteordensleddet $h^1$", "bare ett eneste ledd, siden resten alltid kanselleres"],
      explanation: "Bytter du $h$ med $-h$, endres ikke en symmetrisk formel, så feilen må være en jevn funksjon av $h$. Derfor er symmetriske formler minst av orden 2, mens ensidige formler har både odde og like potenser.",
    },
    {
      question: "Ensidige kvotienter trengs først og fremst fordi",
      options: ["randpunktene mangler naboer på den ene siden", "de alltid har høyere orden enn sentrale kvotienter", "sentrale kvotienter ikke finnes på det utdelte formelarket", "de er billigere å regne ut enn sentrale kvotienter"],
      explanation: "I $x_0$ finnes ingen $U_{-1}$ og i $x_N$ ingen $U_{N+1}$, så sentraldifferansen kan ikke brukes. Ensidige formler har snarere dårligere feilkonstant for samme orden — den ensidige $(-3U_0+4U_1-U_2)/(2h)$ har $\\frac{h^2}{3}u'''$ mot sentralens $\\frac{h^2}{6}u'''$.",
    },
    {
      question: "Hva betyr det at en differansekvotient er konsistent?",
      options: ["At avkuttingsfeilen går mot null når $h \\to 0$", "At den beregnede løsningen holder seg begrenset uansett antall steg", "At den bruker like mange punkter på hver side av $x_i$", "At den gir eksakt svar for alle polynomer opp til grad to"],
      explanation: "Konsistens handler bare om avkuttingsfeilen. At løsningen holder seg begrenset, er stabilitet — et helt annet krav, og det som gir stabilitetsgrensen i det neste kapitlet. Konsistens pluss stabilitet gir konvergens.",
    },
  ],
  'tma4135-8-2': [
    {
      question: "Hva er stabilitetstallet $r$ for det eksplisitte skjemaet?",
      options: ["$r = \\dfrac{c^2\\Delta t}{h^2}$", "$r = \\dfrac{c^2 h^2}{\\Delta t}$", "$r = \\dfrac{\\Delta t}{c^2 h}$", "$r = \\dfrac{c\\,\\Delta t}{h}$"],
      explanation: "Tidssteget står i telleren og romsteget i annen i nevneren, og diffusiviteten $c^2$ er med. De to vanligste feilene er å bytte om teller og nevner og å glemme $c^2$ når diffusiviteten ikke er 1.",
    },
    {
      question: "Stabilitetskravet for det eksplisitte skjemaet er",
      options: ["$r \\le \\tfrac12$", "$r \\le 1$", "$r \\le \\tfrac14$", "$r \\ge \\tfrac12$"],
      explanation: "Sagtannmoden ganges med $1-4r$ per steg, og $|1-4r| \\le 1$ gir nettopp $0 \\le r \\le \\tfrac12$. Ved $r = \\tfrac14$ dør sagtannen ut på ett skritt, men det er ikke grensen for stabilitet.",
    },
    {
      question: "Skrevet som veid middelverdi er det eksplisitte skjemaet",
      options: ["$U_i^{n+1} = rU_{i-1}^n + (1-2r)U_i^n + rU_{i+1}^n$", "$U_i^{n+1} = rU_{i-1}^n + (1+2r)U_i^n + rU_{i+1}^n$", "$U_i^{n+1} = 2rU_{i-1}^n + (1-r)U_i^n + 2rU_{i+1}^n$", "$U_i^{n+1} = rU_{i-1}^n + (1-2r)U_i^n - rU_{i+1}^n$"],
      explanation: "Vektene må summere seg til 1, og det gjør bare $r + (1-2r) + r$. Er $1-2r \\ge 0$, er alle tre ikke-negative, og den nye verdien er fanget mellom den minste og den største av naboverdiene.",
    },
    {
      question: "Hvorfor kalles skjemaet eksplisitt?",
      options: ["Den nye verdien står alene og regnes ut ved ren innsetting", "Fordi det gjelder eksplisitt bare for varmelikningen og ingen andre", "Fordi randbetingelsene må skrives eksplisitt inn på hver rad", "Fordi alle tre vektene er eksplisitt oppgitt på det utdelte arket"],
      explanation: "Forlengs differanse i tid gir nøyaktig én ukjent per likning, så hver ny verdi kan leses rett ut. Et implisitt skjema har flere ukjente per likning og krever at et system løses — det er kontrasten i det neste kapitlet.",
    },
    {
      question: "Halveres romsteget $h$, må tidssteget",
      options: ["deles på fire for at $r$ skal holde seg uendret", "halveres for at $r$ skal holde seg uendret", "beholdes uendret, siden $r$ ikke avhenger av $h$", "dobles for at $r$ skal holde seg uendret"],
      explanation: "$r$ inneholder $h^2$ i nevneren, så halvering av $h$ firedobler $r$ om $\\Delta t$ står stille. Det er nettopp denne kvadreringen som gjør det eksplisitte skjemaet dyrt: totalarbeidet vokser som $1/h^3$.",
    },
    {
      question: "Med hvilken faktor forsterkes sagtannmønsteret $U_i = (-1)^iA$ per tidssteg?",
      options: ["$1-4r$", "$1-2r$", "$1+4r$", "$-4r$"],
      explanation: "Begge naboene har motsatt fortegn av midtpunktet, så bidragene blir $-r$, $1-2r$ og $-r$, til sammen $1-4r$. Faktoren $1-2r$ er midtvekten alene og gjelder ikke for hele moden.",
    },
    {
      question: "Et skjema med $r = 0{,}52$ og glatte startdata kjøres på en datamaskin. Hva skjer?",
      options: ["Løsningen ser riktig ut en stund, men sprenger til slutt", "Løsningen forblir riktig, siden startdataene er glatte", "Løsningen sprenger allerede i det aller første tidssteget", "Løsningen blir konstant, siden $r$ ligger så nær grensen"],
      explanation: "Avrundingsfeil sår en bitteliten sagtannkomponent, og den vokser med omtrent 3 % per steg mens alt annet dør ut. At de første radene ser fine ut, er nettopp det farlige — «kjøringen så riktig ut» er ikke et stabilitetsargument.",
    },
    {
      question: "Hva er avkuttingsfeilen til det eksplisitte skjemaet?",
      options: ["$O(\\Delta t) + O(h^2)$", "$O(\\Delta t^2) + O(h^2)$", "$O(\\Delta t) + O(h)$", "$O(\\Delta t^2) + O(h^4)$"],
      explanation: "Tidsleddet bruker den forlengs kvotienten, som er førsteordens; romleddet bruker den andre sentraldifferansen, som er andreordens. Denne ubalansen er hele motivasjonen bak Crank–Nicolson.",
    },
    {
      question: "Løst for tidssteget lyder stabilitetskravet",
      options: ["$\\Delta t \\le \\dfrac{h^2}{2c^2}$", "$\\Delta t \\le \\dfrac{h^2}{2}$", "$\\Delta t \\le \\dfrac{2h^2}{c^2}$", "$\\Delta t \\le \\dfrac{h}{2c^2}$"],
      explanation: "Fra $c^2\\Delta t/h^2 \\le \\tfrac12$ følger $\\Delta t \\le h^2/(2c^2)$. Utelates $c^2$, får du et tidssteg som er for stort når diffusiviteten er større enn 1 — og skjemaet sprenger.",
    },
    {
      question: "For $u_t = 4u_{xx}$ med $h = 0{,}2$ og $\\Delta t = 0{,}002$ er $r$ lik",
      options: ["0,2 og skjemaet er stabilt", "0,05 og skjemaet er stabilt", "0,8 og skjemaet er ustabilt", "2,0 og skjemaet er ustabilt"],
      explanation: "$r = 4 \\cdot 0{,}002/0{,}04 = 0{,}2$. Svaret 0,05 kommer av å glemme $c^2 = 4$ — det ser like stabilt ut, men gir feil bilde av hvor mye slakk du faktisk har.",
    },
    {
      question: "Hva garanterer maksimumsprinsippet for det eksplisitte skjemaet?",
      options: ["At ingen verdi går utenfor spennet i start- og randdataene", "At alle verdiene synker monotont mot null uansett hvilken $r$ som velges", "At feilen mot den eksakte løsningen alltid er mindre enn $h^2$", "At symmetriske startdata gir symmetriske rader for enhver $r$"],
      explanation: "Garantien gjelder når $r \\le \\tfrac12$: med ikke-negative vekter som summerer seg til 1 er den nye verdien et gjennomsnitt, og et gjennomsnitt ligger alltid mellom ytterpunktene. Det gir en gratis kontroll av enhver håndregning.",
    },
    {
      question: "Randverdiene $U_0^{n+1}$ og $U_N^{n+1}$ finner du ved å",
      options: ["lese dem av randbetingelsen på det nye tidsnivået", "bruke skjemaet med naboverdiene utenfor gitteret satt til null", "kopiere verdiene fra forrige tidsnivå uendret", "sette dem lik gjennomsnittet av de to nærmeste indre verdiene"],
      explanation: "Skjemaet gjelder bare for de indre punktene $i = 1,\\dots,N-1$. Randverdiene kommer fra randbetingelsen og settes inn på nytt på hver rad — glemmes det, bryter løsningen randbetingelsen, slik du ser i kapitlet om kodefeil.",
    },
    {
      question: "Hva betyr det at et skjema er konsistent, men ikke stabilt?",
      options: ["Avkuttingsfeilen går mot null, men feilene forsterkes underveis", "Feilene forsterkes ikke, men avkuttingsfeilen går ikke mot null", "Skjemaet konvergerer, men langsommere enn ordenen tilsier", "Skjemaet gir riktig svar bare for helt glatte startdata"],
      explanation: "Konsistens gjelder én enkelt formel; stabilitet gjelder hva som skjer over mange steg. Konvergens krever begge — det er innholdet i Lax' ekvivalensteorem, og det eksplisitte skjemaet er alltid konsistent, men bare betinget stabilt.",
    },
    {
      question: "Testproblemet $u_t = u_{xx}$, kalde ender, $u(x,0) = \\sin\\pi x$ har eksakt løsning",
      options: ["$u = e^{-\\pi^2 t}\\sin \\pi x$", "$u = e^{-\\pi t}\\sin \\pi x$", "$u = e^{-\\pi^2 t}\\cos \\pi x$", "$u = e^{-2\\pi t}\\sin \\pi x$"],
      explanation: "Startfunksjonen er selve egenfunksjonen med $n = 1$, og egenverdien er $k_1 = \\pi^2$, så tidsfaktoren blir $e^{-\\pi^2t}$. Cosinus hører til isolerte ender, ikke til kalde.",
    },
    {
      question: "Ved $r = \\tfrac14$ blir sagtannmoden",
      options: ["fjernet fullstendig på ett eneste tidssteg", "forsterket med faktoren to for hvert tidssteg", "stående uendret, med fortegnsskifte hver gang", "delt i to moder med halvparten av amplituden hver"],
      explanation: "Faktoren er $1-4r = 1-1 = 0$. Det er den kraftigste dempningen skjemaet kan gi. Ved $r = \\tfrac12$ blir faktoren $-1$, og da står moden og vipper uten å dø ut.",
    },
    {
      question: "Hvorfor bruker skjemaet forlengs differanse i tid og ikke sentral?",
      options: ["Fordi forlengs gir nøyaktig én ukjent per likning", "Fordi sentral differanse i tid ikke står på det utdelte formelarket", "Fordi forlengs differanse har høyere orden enn sentral i tid", "Fordi sentral differanse krever at randbetingelsene er homogene"],
      explanation: "Sentral differanse i tid ville trukket inn både $U^{n+1}$ og $U^{n-1}$ og ødelagt den eksplisitte formen. Ordensmessig er forlengs dårligere, ikke bedre — det er prisen for at skjemaet er så enkelt.",
    },
  ],
  'tma4135-8-3': [
    {
      question: "Crank–Nicolson-skjemaet slik det står på det utdelte formelarket er",
      options: ["$(2+2r)U_i^{n+1} - r(U_{i+1}^{n+1}+U_{i-1}^{n+1}) = (2-2r)U_i^n + r(U_{i+1}^n+U_{i-1}^n)$", "$(2-2r)U_i^{n+1} - r(U_{i+1}^{n+1}+U_{i-1}^{n+1}) = (2+2r)U_i^n + r(U_{i+1}^n+U_{i-1}^n)$", "$(2+2r)U_i^{n+1} + r(U_{i+1}^{n+1}+U_{i-1}^{n+1}) = (2-2r)U_i^n - r(U_{i+1}^n+U_{i-1}^n)$", "$(1+2r)U_i^{n+1} - r(U_{i+1}^{n+1}+U_{i-1}^{n+1}) = (1-2r)U_i^n + r(U_{i+1}^n+U_{i-1}^n)$"],
      explanation: "Diagonalleddet er $2+2r$ på det nye nivået og $2-2r$ på det gamle, og naboene har $-r$ til venstre og $+r$ til høyre. Byttes de to diagonalleddene, blir skjemaet ustabilt for alle $r$; med $1\\pm 2r$ er det bakover-Euler-formen som er blandet inn.",
    },
    {
      question: "Hvorfor må et likningssystem løses i hvert tidssteg med Crank–Nicolson?",
      options: ["Fordi tre ukjente verdier på nytt tidsnivå står i samme likning", "Fordi matrisen endrer seg fra tidssteg til tidssteg underveis", "Fordi randbetingelsene bare kan settes inn ved å løse et system", "Fordi skjemaet krever at alle tidsnivåer regnes ut samtidig"],
      explanation: "Stensilen dekker tre punkter på nivå $n+1$, så ingen av dem kan isoleres. Matrisen er faktisk den samme hele veien — bare høyresiden endres, og det er en praktisk fordel, ikke en grunn til å løse system.",
    },
    {
      question: "Hva er forsterkningsfaktoren til Crank–Nicolson, med $s = 2r\\sin^2(\\beta h/2)$?",
      options: ["$\\xi = \\dfrac{1-s}{1+s}$", "$\\xi = \\dfrac{1}{1+2s}$", "$\\xi = 1-2s$", "$\\xi = \\dfrac{1+s}{1-s}$"],
      explanation: "$1/(1+2s)$ er bakover-Euler og $1-2s$ er det eksplisitte skjemaet. Snus brøken, får du noe som er større enn 1 i tallverdi — altså et skjema som sprenger.",
    },
    {
      question: "Crank–Nicolson er stabilt",
      options: ["for enhver verdi av $r$", "bare når $r \\le \\tfrac12$", "bare når $r \\le 1$", "bare når $r$ er et helt tall"],
      explanation: "Siden $|1-s| \\le 1+s$ for alle $s \\ge 0$, er $|\\xi| \\le 1$ uansett hvor stor $r$ er. Kravet $r \\le \\tfrac12$ gjelder det eksplisitte skjemaet og skal aldri brukes på et implisitt.",
    },
    {
      question: "Hva er avkuttingsfeilen til Crank–Nicolson?",
      options: ["$O(\\Delta t^2) + O(h^2)$", "$O(\\Delta t) + O(h^2)$", "$O(\\Delta t^2) + O(h^4)$", "$O(\\Delta t) + O(h)$"],
      explanation: "Andre orden i begge retninger. Tidsdelen er trapesregelen, som er symmetrisk om midtpunktet $t_{n+1/2}$ og derfor andreordens — det er nettopp forbedringen fra det eksplisitte skjemaets $O(\\Delta t)$.",
    },
    {
      question: "Koeffisientmatrisen til Crank–Nicolson med tre indre punkter er",
      options: ["tridiagonal, med $2+2r$ på diagonalen og $-r$ ved siden", "tridiagonal, med $2-2r$ på diagonalen og $+r$ ved siden", "full, med $2+2r$ på diagonalen og $-r$ overalt ellers", "diagonal, med $2+2r$ på diagonalen og null ellers"],
      explanation: "Stensilen knytter hvert punkt bare til sine to nærmeste naboer, så bare tre diagonaler er fylt. Diagonalleddet $2-2r$ tilhører høyresiden, ikke matrisen.",
    },
    {
      question: "Ved ikke-homogen randbetingelse skal randverdien på det nye tidsnivået",
      options: ["flyttes over til høyresiden i første og siste likning", "settes inn som en ekstra rad nederst i matrisen", "ignoreres, siden bare det gamle nivået står i høyresiden", "trekkes fra diagonalelementet i første og siste rad"],
      explanation: "$U_0^{n+1}$ og $U_N^{n+1}$ står på venstre side i formelen, men er kjente, så de hører hjemme i $\\mathbf b$. Å glemme dette bidraget er en av de dokumenterte feilene i sjangeren — randverdien opptrer på begge tidsnivåer.",
    },
    {
      question: "Bakover-Euler-skjemaet skrives",
      options: ["$-rU_{i-1}^{n+1} + (1+2r)U_i^{n+1} - rU_{i+1}^{n+1} = U_i^n$", "$+rU_{i-1}^{n+1} + (1-2r)U_i^{n+1} + rU_{i+1}^{n+1} = U_i^n$", "$-rU_{i-1}^{n} + (1+2r)U_i^{n} - rU_{i+1}^{n} = U_i^{n+1}$", "$-rU_{i-1}^{n+1} + (1-2r)U_i^{n+1} - rU_{i+1}^{n+1} = U_i^n$"],
      explanation: "Romleddet regnes på det nye nivået, som gir $-r$ på naboene og $+(1+2r)$ på diagonalen. Med $1-2r$ er diagonalen fra det eksplisitte skjemaet, og med gamle indekser på venstre side er skjemaet snudd feil vei.",
    },
    {
      question: "Hva koster det å løse et tridiagonalt system med $m$ ukjente?",
      options: ["omtrent $8m$ operasjoner, altså lineært i $m$", "omtrent $\\tfrac23 m^3$ operasjoner, som for en full matrise", "omtrent $m^2$ operasjoner, siden matrisen er kvadratisk", "omtrent $m\\log m$ operasjoner, som for en rask transform"],
      explanation: "Thomas-algoritmen utnytter at hver rad bare har ett element å eliminere. Kostnaden per tidssteg blir dermed proporsjonal med antall punkter, akkurat som for det eksplisitte skjemaet — bare med større konstant.",
    },
    {
      question: "Med $r = 1$, $h = 0{,}25$ og kalde ender forenkles Crank–Nicolson til",
      options: ["$4U_i^{n+1} - (U_{i+1}^{n+1}+U_{i-1}^{n+1}) = U_{i+1}^{n}+U_{i-1}^{n}$", "$4U_i^{n+1} - (U_{i+1}^{n+1}+U_{i-1}^{n+1}) = 4U_i^{n}+U_{i+1}^{n}$", "$2U_i^{n+1} - (U_{i+1}^{n+1}+U_{i-1}^{n+1}) = U_{i+1}^{n}+U_{i-1}^{n}$", "$4U_i^{n+1} + (U_{i+1}^{n+1}+U_{i-1}^{n+1}) = U_{i+1}^{n}-U_{i-1}^{n}$"],
      explanation: "Med $r = 1$ blir $2+2r = 4$ og $2-2r = 0$, så hele det gamle midtleddet faller bort. Det er en tilfeldighet ved akkurat $r = 1$, og den gjør håndregningen kort.",
    },
    {
      question: "Et implisitt skjema lønner seg framfor et eksplisitt særlig når",
      options: ["gitteret er fint, kjøringen lang eller diffusiviteten stor", "startdataene er glatte og randbetingelsene homogene", "gitteret er grovt og bare noen få tidssteg skal regnes", "man ønsker å unngå å regne ut stabilitetstallet $r$"],
      explanation: "Sammenlign tidssteget nøyaktigheten krever med det stabiliteten tillater. Fordi grensen $\\Delta t \\le h^2/(2c^2)$ krymper som $h^2$, blir gapet stort på fine gitre. På grove gitre er det eksplisitte skjemaet enklest og fullt brukbart.",
    },
    {
      question: "Hvorfor har bakover-Euler et maksimumsprinsipp for alle $r$, mens Crank–Nicolson ikke har det?",
      options: ["Alle koeffisientene i bakover-Euler har riktig fortegn uansett $r$", "Bakover-Euler er av høyere orden i tid enn Crank–Nicolson", "Crank–Nicolson gir en matrise som ikke er diagonaldominant", "Bakover-Euler bruker færre gitterpunkter i stensilen sin"],
      explanation: "I Crank–Nicolson blir høyresidens koeffisient $2-2r$ negativ når $r > 1$, og monotoniargumentet faller. Begge matrisene er diagonaldominante, og bakover-Euler er lavere orden i tid, ikke høyere.",
    },
    {
      question: "Hva skjer med Crank–Nicolson når $r$ velges svært stor?",
      options: ["Skjemaet er stabilt, men korte bølger kan gi svingninger som ikke dør ut", "Skjemaet blir ustabilt og løsningen vokser uten grenser", "Matrisen blir singulær og systemet kan ikke løses", "Skjemaet går over til å bli eksplisitt og krever $r \\le \\tfrac12$"],
      explanation: "For sagtannmoden er $\\xi = (1-2r)/(1+2r)$, som går mot $-1$ når $r$ vokser: fortegnsskifte hvert steg og nesten ingen dempning. Ubetinget stabilitet betyr at du kan velge $\\Delta t$ fritt, ikke at du bør velge det stort.",
    },
  ],
  'tma4135-8-4': [
    {
      question: "Hva skiller et randverdiproblem fra et initialverdiproblem?",
      options: ["Betingelsene er gitt i begge ender, ikke i samme punkt", "Løsningen er en funksjon av to variabler i stedet for én", "Likningen er av andre orden i stedet for av første orden", "Betingelsene gjelder den deriverte i stedet for funksjonen"],
      explanation: "Fordi betingelsene er delt mellom endepunktene, finnes ingen retning å marsjere i — alle verdiene må finnes samtidig ved å løse et system. Begge problemtyper kan ha andreordens likning og betingelser på den deriverte.",
    },
    {
      question: "Hvorfor innføres en falsk node ved en Neumann-rand?",
      options: ["Fordi sentraldifferansen i randpunktet peker utenfor intervallet", "Fordi differensiallikningen ikke gjelder helt ut til randpunktet", "Fordi matrisen ellers ikke blir tridiagonal og båndstrukturen ryker", "Fordi randverdien $U_N$ ellers ville vært kjent på forhånd"],
      explanation: "Vi vil bruke den sentrale kvotienten $(U_{N+1}-U_{N-1})/(2h)$, som er $O(h^2)$, og den trenger en verdi i $x_{N+1}$. Likningen gjelder tvert imot også i randpunktet — det er nettopp derfor vi kan skrive den der.",
    },
    {
      question: "Randbetingelsen $u'(b) = 0$ gir hvilken relasjon for den falske noden?",
      options: ["$U_{N+1} = U_{N-1}$", "$U_{N+1} = U_N$", "$U_{N+1} = -U_{N-1}$", "$U_{N+1} = 2U_N - U_{N-1}$"],
      explanation: "Sentraldifferansen $(U_{N+1}-U_{N-1})/(2h) = 0$ gir at den falske verdien er speilbildet av naboen innenfor. At $U_{N+1} = U_N$ svarer til den ensidige differansen, som bare er $O(h)$.",
    },
    {
      question: "Etter eliminering av den falske noden blir koeffisienten foran $U_{N-1}$ i randraden",
      options: ["$2/h^2$", "$1/h^2$", "$1/(2h^2)$", "$-2/h^2$"],
      explanation: "De to naboleddene $U_{N+1}$ og $U_{N-1}$ faller sammen til én verdi og legger seg oppå hverandre. Å skrive $1/h^2$ er den dokumenterte enkeltfeilen i sjangeren, og den som plantes i kodefeil-oppgavene.",
    },
    {
      question: "Hva skjer med ordenen om du bruker $\\frac{U_N - U_{N-1}}{h} = 0$ i stedet for falsk node?",
      options: ["Hele skjemaet faller til orden 1", "Ordenen holder seg på 2, men feilkonstanten blir større", "Ordenen stiger til 3 fordi færre punkter er involvert", "Ordenen blir uendret, siden bare én rad er berørt"],
      explanation: "Én førsteordens rad trekker hele løsningen ned, fordi alle likningene er koblet. Målt gir falsk node forholdet 4 ved halvering av $h$, den ensidige bare 2 — og feilen blir titalls ganger større på fine gitre.",
    },
    {
      question: "En kjent Dirichlet-verdi $U_0$ i første likning skal",
      options: ["flyttes over til høyresiden med motsatt fortegn", "flyttes over til høyresiden med uendret fortegn", "beholdes på venstre side som en ekstra ukjent", "settes inn i diagonalelementet i første rad"],
      explanation: "$U_0$ er et tall, ikke en ukjent, så det hører hjemme i $\\mathbf b$ — og fortegnet snur når leddet flyttes. Å glemme fortegnsbyttet er like vanlig som å glemme leddet.",
    },
    {
      question: "Første steg når et differanseprogram gir feil svar er å",
      options: ["sjekke om randbetingelsene er oppfylt i utskriften", "kjøre programmet på nytt med et mindre tidssteg", "lete etter en av-ved-én-feil i den innerste løkka", "kontrollere at matrisen er symmetrisk og diagonaldominant"],
      explanation: "Er en randverdi feil i utskriften, ligger feilen i randbehandlingen — løkka over de indre punktene rører ikke randen. Denne ene erkjennelsen sparer minutter, og det er nøyaktig det oppgavetekstene ber om.",
    },
    {
      question: "Et program gir en løsning som IKKE blir bedre når gitteret forfines. Hva betyr det?",
      options: ["Feilen er strukturell — en rad svarer til et annet problem", "Avrundingsfeilen har tatt over og dominerer avkuttingsfeilen", "Steglengden er fortsatt for grov til at ordenen slår inn", "Løseren har konvergert til feil rot i et ikke-lineært system"],
      explanation: "En ren regnefeil eller for grov $h$ gir mindre feil ved forfining. Blir den stående eller vokser den, løser programmet en annen likning — og den gale raden er nesten alltid den som er utledet spesielt, altså randraden.",
    },
    {
      question: "Et eksplisitt skjema oppdaterer verdiene på plass med `U[i] = U[i] + r*(...)`. Symptomet er",
      options: ["at symmetriske startdata gir et usymmetrisk svar", "at løsningen vokser uten grenser allerede etter få steg", "at randverdiene forsvinner og settes til null", "at alle verdiene blir like store og løsningen flater ut"],
      explanation: "Naboverdien til venstre er allerede oppdatert når løkka kommer til punktet, mens den til høyre ikke er det. Det favoriserer den ene retningen, og symmetrien brytes — den billigste feilsøkingstesten som finnes.",
    },
    {
      question: "Diskretiseringen av $u'' + qu = g$, ganget opp med $h^2$, gir",
      options: ["$U_{i-1} + (-2+h^2q_i)U_i + U_{i+1} = h^2g_i$", "$U_{i-1} + (-2+q_i)U_i + U_{i+1} = h^2g_i$", "$U_{i-1} + (2+h^2q_i)U_i + U_{i+1} = h^2g_i$", "$U_{i-1} - (2+h^2q_i)U_i - U_{i+1} = h^2g_i$"],
      explanation: "Naboene får koeffisient 1, og hele likningens egenart samles i diagonalleddet $-2+h^2q_i$. Uten $h^2$ foran $q_i$ blir leddet feil skalert, og med $+2$ har fortegnet på den andre sentraldifferansen falt bort.",
    },
    {
      question: "Hva er residualtesten $\\mathbf s = A\\mathbf U - \\mathbf b$ god for?",
      options: ["Å skille mellom feil oppsett av systemet og feil løsning av det", "Å bestemme ordenen til skjemaet uten å kjenne fasiten", "Å avgjøre om randbetingelsen er av Dirichlet- eller Neumann-type", "Å finne den optimale steglengden for det aktuelle problemet"],
      explanation: "Er residualet nær null, er systemet løst riktig, og en eventuell feil ligger i selve oppsettet. Er residualet stort, er det løseren eller innsettingen som svikter. Ordenen finner du med gitterforfining, ikke med residualet.",
    },
    {
      question: "Ved randbetingelsen $u'(b) = \\beta$ med $\\beta \\ne 0$ blir den falske noden",
      options: ["$U_{N+1} = U_{N-1} + 2h\\beta$", "$U_{N+1} = U_{N-1} + h\\beta$", "$U_{N+1} = U_{N-1} + \\beta/(2h)$", "$U_{N+1} = U_{N-1} - 2h\\beta$"],
      explanation: "Fra $(U_{N+1}-U_{N-1})/(2h) = \\beta$ følger $U_{N+1} = U_{N-1} + 2h\\beta$. Delt på $h^2$ i skjemaet blir ekstraleddet $2\\beta/h$ — merk at det inneholder $1/h$, ikke $h$.",
    },
    {
      question: "Hvorfor er matrisen i et falsk-rand-problem ikke symmetrisk?",
      options: ["Fordi randraden har koeffisienten 2 der de andre radene har 1", "Fordi randraden er utledet fra en ensidig differansekvotient", "Fordi den falske noden gir en ekstra kolonne i matrisen", "Fordi høyresiden inneholder et ekstra bidrag fra randverdien"],
      explanation: "Elimineringen legger to like naboledd oppå hverandre, så bare den ene raden har 2-tallet. Det er normalt for falsk-rand-behandlingen og er ikke en feil — den falske noden gir ingen ekstra kolonne, den elimineres bort.",
    },
    {
      question: "Hva må et fullstendig svar i en kodefeil-oppgave inneholde?",
      options: ["Både linja som er feil og hvorfor symptomet følger av den", "Bare linja som er feil, siden rettelsen er opplagt", "Et fullstendig rettet program skrevet ut i sin helhet", "En vurdering av om skjemaet er stabilt for det gitte $r$"],
      explanation: "Halve poengsummen ligger i koblingen: hvilket problem koden faktisk løser, og hvorfor det gir nettopp det utslaget man ser. Å skrive om hele programmet kreves aldri — oppgaven ber om lokalisering og forklaring.",
    },
  ],
  'tma4135-9-1': [
    {
      question: "Hva betyr hjelpemiddelkode C på eksamen i TMA4135?",
      options: ["Enkel kalkulator, eget A5-ark og et utdelt formelark", "Enkel kalkulator og et formelark, men ingen egne notater", "Enkel kalkulator og ett eget A5-ark, uten noe utdelt ark", "Alle trykte hjelpemidler samt en programmerbar kalkulator"],
      explanation: "Kode C gir bestemt enkel kalkulator, ett gult stemplet A5-ark med egne håndskrevne notater, og et formelark vedlagt oppgavesettet. Svarene som utelater egne notater, og som utelater det utdelte arket, er hver sin halvdel av sannheten og begge lette å tro på; «alle trykte hjelpemidler samt en programmerbar kalkulator» beskriver et helt annet regime.",
    },
    {
      question: "Hvilken av disse står IKKE på det utdelte formelarket?",
      options: ["Derivasjonsregelen $\\mathcal{L}\\{y''\\} = s^2Y - s\\,y(0) - y'(0)$", "Transformparet $t^n \\leftrightarrow n!/s^{n+1}$", "Andreforskyvningsteoremet $f(t-a)u(t-a) \\leftrightarrow e^{-as}F(s)$", "Dirac-paret $\\delta(t-a) \\leftrightarrow e^{-as}$"],
      explanation: "Laplace-tabellen på arket er en liste over par $f(t) \\leftrightarrow F(s)$. Derivasjonsregelen er en regel om hvordan transformen virker på en derivert, ikke et par, og står derfor ikke der. De tre andre er tabellrader.",
    },
    {
      question: "Hva er det viktigste utvalgskriteriet når du bestemmer hva som skal på ditt eget A5-ark?",
      options: ["Om formelen mangler på arket og er lett å skrive feil", "Om formelen er den vanskeligste å utlede fra bunn av", "Om formelen dekker det temaet du synes er mest krevende", "Om formelen har flest symboler og dermed er tyngst å huske"],
      explanation: "Kriteriet er frekvens ganget med risiko for feilskriving, gitt at formelen ikke allerede deles ut. Svarene om det vanskeligste å utlede og om det mest krevende temaet er nær-sanne: vanskelig stoff frister, men en formel du sjelden bruker og lett kan utlede, fortjener ikke plassen.",
    },
    {
      question: "Hva sier rekkefølgeregelen når du skal invers-transformere $e^{-as}F(s)$?",
      options: ["Finn $f(t)$ av $F(s)$ først, og skriv deretter $y = u(t-a)f(t-a)$", "Forskyv $F(s)$ til $F(s-a)$ først, og finn deretter den inverse av det", "Finn $f(t)$ av $F(s)$ først, og skriv deretter $y = f(t)u(t-a)$", "Del opp $F(s)$ i delbrøker først, og forskyv hver brøk for seg"],
      explanation: "Selve teoremet står på arket; rekkefølgen gjør ikke det. Formen $y = f(t)u(t-a)$ er den nære fellen — riktig $f$, men argumentet ble ikke forskjøvet, så løsningen slås aldri ordentlig på. Å forskyve $F(s)$ til $F(s-a)$ først bruker første i stedet for andre forskyvningsteorem.",
    },
    {
      question: "Hvilken faktor står i konvolusjonsteoremet for Fourier-transformen i bokas konvensjon?",
      options: ["$\\widehat{f*g} = \\sqrt{2\\pi}\\,\\hat f\\hat g$", "$\\widehat{f*g} = \\hat f\\hat g$", "$\\widehat{f*g} = 2\\pi\\,\\hat f\\hat g$", "$\\widehat{f*g} = \\dfrac{1}{\\sqrt{2\\pi}}\\hat f\\hat g$"],
      explanation: "Med den symmetriske konvensjonen $1/\\sqrt{2\\pi}$ begge veier får konvolusjonsteoremet faktoren $\\sqrt{2\\pi}$. Faktoren 1, altså $\\widehat{f*g} = \\hat f\\hat g$, gjelder i en annen konvensjon og er derfor svært lett å svare; det er nettopp derfor faktoren skal skrives ut med en gang.",
    },
    {
      question: "Hvor mange ordensbetingelser må sjekkes for å slå fast at en metode har orden 3?",
      options: ["Fire — én på nivå 1, én på nivå 2 og to på nivå 3", "Tre — én på hvert av de tre nivåene", "To — bare betingelsene på nivå 2 og nivå 3", "Seks — alle betingelsene til og med nivå 4 må kontrolleres"],
      explanation: "Nivå 3 har to betingelser, $\\sum b_ic_i^2 = 1/3$ og $\\sum b_ia_{ij}c_j = 1/6$. Svaret «tre — én på hvert av de tre nivåene» er den dokumenterte fellen: sjekker du bare den første på nivå 3, kan du påstå en orden som er én for høy.",
    },
    {
      question: "Hva er eksponenten i steglengdeformelen for et innfelt par?",
      options: ["$1/(p+1)$, der $p$ er ordenen til den propagerte løsningen", "$1/p$, der $p$ er ordenen til den propagerte løsningen", "$1/(p+1)$, der $p$ er ordenen til den høyeste av de to radene", "$1/(p-1)$, der $p$ er ordenen til den laveste av de to"],
      explanation: "Det er den lokale feilen med orden $p+1$ som modelleres, og $p$ er ordenen til løsningen du faktisk fører videre. Varianten der $p$ er ordenen til den høyeste av de to radene, har riktig eksponentform, men feil $p$ — en nær-sann variant som gir systematisk for stort skritt.",
    },
    {
      question: "Hvilket krav gjelder for at det eksplisitte skjemaet for varmelikningen skal være stabilt?",
      options: ["$r = c^2\\Delta t/h^2 \\le \\tfrac12$", "$r = c^2\\Delta t/h^2 \\le 1$", "$r = c^2 h^2/\\Delta t \\le \\tfrac12$", "$r = c^2\\Delta t/h \\le \\tfrac12$"],
      explanation: "Kravet er $r \\le 1/2$ med $r = c^2\\Delta t/h^2$. Formene $r = c^2 h^2/\\Delta t$ og $r = c^2\\Delta t/h$ har byttet om eller mistet en potens i nevneren; grensen $r \\le 1$ hører til en annen forsterkningsanalyse og gir vekst i sagtannmoden.",
    },
    {
      question: "Hva er det største tidstapet i arbeidet med et eget A5-ark?",
      options: ["Å skrive av formler som allerede står på det utdelte arket", "Å skrive arket for hånd i stedet for på maskin", "Å bruke plass på overskrifter og luft i stedet for tett tekst", "Å ta med framgangsmåter i stedet for bare formler"],
      explanation: "Halve arket går ofte med til transformpar og metodeformler som deles ut uansett. Innvendingene om håndskrift og om plass til overskrifter og luft er nær-sanne, men begge peker på faktiske fordeler: håndskriften er halve læringen, og luft er det som gjør arket brukbart under press.",
    },
    {
      question: "Hva konvergerer en Fourier-rekke mot i et sprangpunkt?",
      options: ["Gjennomsnittet av de to ensidige grensene", "Funksjonsverdien i selve sprangpunktet, uansett side", "Den venstre ensidige grensen", "Verdien som gir minst mulig oversving"],
      explanation: "Konvergensteoremet gir $\\tfrac12(f(x^+)+f(x^-))$. Å svare funksjonsverdien i selve sprangpunktet er den dokumenterte feilen i sjangeren, og svaret om minst mulig oversving blander inn Gibbs-fenomenet, som handler om hvordan delsummene oppfører seg nær spranget — ikke om grenseverdien.",
    },
    {
      question: "Hvilken sjanger krever absolutt ingenting fra det utdelte formelarket?",
      options: ["Diskret Fourier-transform", "Numerisk integrasjon med presisjonsgrad", "Interpolasjon med feilanslag", "Ett skritt med en Runge–Kutta-metode"],
      explanation: "Den diskrete transformen står ikke noe sted på arket — definisjon, reell-test og skifteegenskap må alle komme fra hodet eller ditt eget ark. De tre andre har hver sin ferdige rad eller formel på arket, selv om framgangsmåten må kunnes.",
    },
    {
      question: "Hvilke to vilkår må vises for at en fikspunktiterasjon konvergerer på et intervall?",
      options: ["At $|g'| \\le L < 1$ på $I$, og at $g$ avbilder $I$ inn i seg selv", "At $|g'| \\le L < 1$ på $I$, og at $g$ er kontinuerlig på $I$", "At $g$ avbilder $I$ inn i seg selv, og at $g$ er strengt voksende", "At $|g'| \\le L < 1$ på $I$, og at startpunktet ligger nær roten"],
      explanation: "Både $|g'| \\le L < 1$ på $I$ og at $g$ avbilder $I$ inn i seg selv kreves, og å ta med bare det ene er den dokumenterte feilen. De øvrige svarene inneholder hver en sann, men utilstrekkelig tilleggsbetingelse — kontinuitet følger allerede av deriverbarhet, og monotoni er et hjelpemiddel, ikke et krav.",
    },
    {
      question: "Hva er den praktiske funksjonen til en linje øverst på A5-arket som sier hvor blokkene på det utdelte arket ligger?",
      options: ["Den senker tiden og bomraten i hvert oppslag", "Den erstatter behovet for å lese det utdelte arket i det hele tatt", "Den gir uttelling fordi den viser at du kjenner pensum", "Den gjør at du slipper å skrive «fra tabellen» i besvarelsen"],
      explanation: "Et helt sett krever typisk 12 til 15 oppslag; et kart reduserer både tiden per oppslag og andelen bom. Tanken om å slippe å skrive «fra tabellen» er direkte skadelig — oppslaget skal alltid synes i besvarelsen, uansett hvor raskt du fant raden.",
    },
    {
      question: "Hva bør du gjøre med lineæralgebra-numerikk, altså faktorisering og iterative løsere for likningssystemer, når du bygger arket?",
      options: ["La det stå — det er i 2 av 13 sett, og formlene deles ut uansett", "Ta det med i sin helhet fordi formlene er lange og lette å rote til", "Ta med bare framgangsmåten, siden formlene deles ut", "Ta det med fordi det er den eneste sjangeren uten støtte på arket"],
      explanation: "Sjangeren er i 2 av 13 sett, alle fra de eldste årene, og står på det utdelte arket. Å ta med bare framgangsmåten er nær-sant og forsvarlig hvis du har god plass — men prioriteringen tilsier at plassen går til noe annet.",
    },
    {
      question: "Når bør A5-arket skrives?",
      options: ["Tre til fem dager før, slik at det kan prøves ut og rettes", "Kvelden før, slik at innholdet er ferskest mulig", "Tidlig i semesteret, mens stoffet er nytt og uklart", "Underveis, med én ny linje for hvert kapittel du leser ferdig"],
      explanation: "Skrives det for sent, får du ikke prøvd det; skrives det for tidlig, speiler det hva du ikke forsto den gangen. Å skrive én ny linje for hvert ferdiglest kapittel er nær-sant som råmateriale, men et ark bygget slik blir like langt som boka og må uansett kuttes til slutt.",
    },
    {
      question: "Hvordan bestemmes presisjonsgraden til en kvadraturformel?",
      options: ["Ved å teste formelen på $1, x, x^2, \\dots$ til den feiler", "Ved å lese av eksponenten i feilleddet som står på formelarket", "Ved å telle antall noder og gange med to", "Ved å sammenlikne to kjøringer med halvert steglengde"],
      explanation: "Testen er direkte og står ikke på arket. Å telle noder og gange med to er nesten riktig for Gauss–Legendre, der $N$ noder gir grad $2N-1$, men det gjelder ikke formler med faste noder; å sammenlikne to kjøringer med halvert steglengde måler konvergensorden, som er noe annet.",
    },
    {
      question: "Hva skjer med randraden når en Neumann-betingelse elimineres med falsk node?",
      options: ["Nabo-leddet får en faktor 2 etter speilingen $U_{N+1} = U_{N-1}$", "Randraden faller bort, siden verdien i randpunktet allerede er kjent", "Nabo-leddet halveres, fordi bare én nabo finnes", "Høyresiden får et ekstraledd, mens matrisen står uendret"],
      explanation: "Speilingen gir to like naboledd, altså faktoren 2. Svaret om at randraden faller bort, gjelder Dirichlet-rand, og svaret om et ekstraledd på høyresiden er halvsant: ved en ikke-homogen Neumann-betingelse kommer det et ekstraledd på høyresiden i tillegg til faktoren 2.",
    },
    {
      question: "Hvilke tre formler er det mest lønnsomt å ha på arket fordi de skal navngis og ofte mangler på det utdelte?",
      options: ["Konvolusjonsteoremet, a-priori-estimatet og d'Alemberts formel", "Gauss-paret, Simpsons regel og interpolasjonsfeilen", "Derivasjonsregelen, Crank–Nicolson og Chebyshev-punktene", "Trapesregelen, Newtons metode og de dividerte differansene fra arket"],
      explanation: "Konvolusjonsteoremet, a-priori-estimatet og d'Alemberts formel mangler alle på arket, skal bæres med navn i besvarelsen, og hører til sjangre som til sammen dekker godt over halvparten av settene. De øvrige listene består i hovedsak av ting som allerede deles ut — listen med Crank–Nicolson blander inn derivasjonsregelen, som riktignok hører hjemme på arket ditt.",
    },
  ],
  'tma4135-9-2': [
    {
      question: "Hva er den mest effektive strategien hvis du merker at et sett er for tungt til å bli ferdig?",
      options: ["Gå gjennom alle oppgavene og ta det første delpunktet i hver", "Løs de tre første oppgavene helt ferdig og hopp over resten", "Bruk mest tid på den oppgaven som er verdt flest poeng", "Begynn bakfra, siden de siste oppgavene ofte er enklest"],
      explanation: "De mekaniske delpunktene ligger spredt over alle oppgavene og er de billigste poengene på settet. Å bruke mest tid på oppgaven med flest poeng er nær-sant og fungerer når tiden holder, men når den ikke gjør det, er det nettopp den dyre oppgaven som spiser opp resten.",
    },
    {
      question: "En løsning $Y(s)$ har nevner $s^2+3s+2$. Hvilket grep er riktig?",
      options: ["Faktoriser og bruk delbrøkoppspalting, siden diskriminanten er positiv", "Kvadratkompletter, siden nevneren er en andregradsfaktor", "Bruk konvolusjonsteoremet, siden nevneren er et produkt", "Bruk andreforskyvningsteoremet, siden nevneren har to røtter"],
      explanation: "Diskriminanten $9-8=1$ er positiv, så nevneren har to reelle røtter og faktoriserer. Kvadratkomplettering er den nære fellen: den er riktig grep bare når diskriminanten er negativ og nevneren er irredusibel.",
    },
    {
      question: "Den odde utvidelsen av en funksjon $f$ på $[0,L]$ får sprang i $x=L$ når",
      options: ["$f(L) \\ne 0$", "$f(0) \\ne 0$", "$f$ ikke er kontinuerlig", "$f$ ikke er deriverbar i $L$"],
      explanation: "Odde utvidelse speiler med fortegnsskifte, så høyre- og venstregrensen i $x=L$ blir $f(L)$ og $-f(L)$. Vilkåret $f(0) \\ne 0$ gjelder spranget i $x=0$ og er derfor den nære fellen; kravene om kontinuitet og deriverbarhet handler om $f$ selv, ikke om utvidelsen.",
    },
    {
      question: "Hvorfor må alle tre tilfellene for separasjonskonstanten behandles?",
      options: ["Oppgaven ber om ALLE ikke-trivielle løsninger, ikke bare noen", "Fordi to av tilfellene kan gi ikke-trivielle løsninger samtidig", "Fordi randbetingelsene ellers ikke lar seg overføre til $F$", "Fordi tidsfaktoren $G$ ellers ikke kan bestemmes entydig"],
      explanation: "Uttømmende behandling er selve oppgaven, og de to tilfellene som gir triviell løsning, må vises å gjøre det. Påstanden om at to tilfeller kan gi ikke-trivielle løsninger samtidig, er ikke helt usann — ved isolerte ender gir både $k=0$ og $k>0$ løsninger — men det er ikke grunnen til at alle tre skal skrives ut.",
    },
    {
      question: "En trestegs metode oppfyller $\\sum b_i=1$, $\\sum b_ic_i=1/2$ og $\\sum b_ic_i^2=1/3$, men $\\sum b_ia_{ij}c_j=1/12$. Hvilken orden har den?",
      options: ["2", "3", "4", "Ubestemt uten flere betingelser"],
      explanation: "Nivå 3 har to betingelser, og den andre feiler. Da er ordenen én mindre enn nivået, altså 2. Svaret 3 er den dokumenterte fellen: stopper man etter den første betingelsen på nivå 3, blir svaret én for høyt.",
    },
  ],
  'tma4135-9-3': [
    {
      question: "Hvilken faktor har konvolusjonsteoremet for Fourier-transformen i bokas konvensjon?",
      options: ["$\\sqrt{2\\pi}$", "$1$", "$2\\pi$", "$1/\\sqrt{2\\pi}$"],
      explanation: "Med den symmetriske konvensjonen $1/\\sqrt{2\\pi}$ begge veier blir $\\widehat{f*g}=\\sqrt{2\\pi}\\,\\hat f\\hat g$. Faktoren $1$ er riktig i en annen mye brukt konvensjon, og er derfor den nære fellen som koster flest poeng i sjangeren.",
    },
    {
      question: "Hvorfor er $\\omega$ en konstant i den transformerte likningen for $\\hat u(\\omega,t)$?",
      options: ["Fordi transformasjonen har fjernet all $x$-avhengighet", "Fordi $\\omega$ per definisjon er en positiv konstant", "Fordi initialbetingelsen bare avhenger av $x$", "Fordi likningen bare inneholder deriverte med hensyn på $t$"],
      explanation: "Etter transformasjon i $x$ er $\\hat u$ for hver fast $\\omega$ en funksjon av $t$ alene, og det deriveres aldri etter $\\omega$. Påstanden om at likningen bare inneholder deriverte etter $t$, er nær-sann om den transformerte likningen, men er en følge av transformasjonen, ikke grunnen.",
    },
    {
      question: "En stasjonær løsning $w$ brukes til å redusere et ikke-homogent varmeproblem. Hva må $w$ oppfylle?",
      options: ["Både randverdiene og den tidsuavhengige likningen", "Bare randverdiene, siden kildeleddet håndteres separat", "Bare initialbetingelsen, siden randen allerede er homogen", "Både initialbetingelsen og randverdiene"],
      explanation: "$w$ velges slik at den absorberer kildeleddet og de ikke-homogene randverdiene på én gang. Svaret som tar med initialbetingelsen, er den nære fellen: den håndteres av $v=u-w$, ikke av $w$ selv.",
    },
    {
      question: "Hva blir riktig svar hvis jakobifaktoren glemmes i Gauss–Legendre på $[1,2]$?",
      options: ["Svaret blir dobbelt så stort som det skal", "Svaret blir halvparten så stort", "Svaret får feil fortegn", "Svaret blir uendret, siden intervallet har lengde 1"],
      explanation: "Jakobifaktoren er $(b-a)/2=1/2$. Glemmes den, blir svaret ganget med 2. Påstanden om at svaret blir uendret, er den nære fellen: intervallengden er riktignok 1, men faktoren er halve lengden, ikke lengden.",
    },
    {
      question: "Et program for et randverdiproblem gir en løsning som ikke nærmer seg den kjente verdien i høyre rand. Hvor bør du lete først?",
      options: ["I høyresiden, der den kjente randverdien skulle vært flyttet over", "I differansekvotienten for den andrederiverte", "I løsningsrutinen for det lineære systemet", "I diskretiseringen av selve differensiallikningen"],
      explanation: "Symptomet er at en randbetingelse ikke er oppfylt, og randbetingelser kommer inn gjennom høyresiden. Feil i differansekvotienten eller i diskretiseringen av likningen ville gitt feil som vokser jevnt over hele intervallet, ikke et brudd som er lokalisert til randen.",
    },
  ],
  'tma4135-9-4': [
    {
      question: "Hva er den viktigste strategiske forskjellen på et sett med ti likevektede oppgaver?",
      options: ["Ingen oppgave er verdt å prioritere, så tidsdisiplin avgjør", "De siste oppgavene er alltid de vanskeligste og tas sist", "Poengene per minutt er høyest på de lengste oppgavene", "Rekkefølgen i settet speiler stigende vanskelighetsgrad"],
      explanation: "Når alle oppgaver er verdt 10 poeng, koster hvert minutt du bruker for mye på én, like mye et annet sted. Påstanden om at poengene per minutt er høyest på de lengste oppgavene, er nær-sann på et vektet sett, men faller bort nettopp når vektene er like.",
    },
    {
      question: "Hva sier reell-testen for en diskret Fourier-transform?",
      options: ["Datavektoren er reell hvis og bare hvis $c_{N-k}=\\overline{c_k}$ for alle $k$", "Datavektoren er reell hvis og bare hvis alle $c_k$ er reelle", "Datavektoren er reell hvis og bare hvis $c_{N-k}=c_k$ for alle $k$", "Datavektoren er reell hvis og bare hvis $c_k=0$ for odde $k$"],
      explanation: "Konjugert symmetri er testen, og den medfører at $c_0$ og for like $N$ også $c_{N/2}$ er reelle. Kravet om at alle $c_k$ er reelle, er den nære fellen: reelle data gir som regel komplekse koeffisienter, bare parvis konjugerte.",
    },
    {
      question: "Hva skiller tilfellet $k=0$ ved isolerte ender fra tilfellet ved faste ender?",
      options: ["Ved isolerte ender gir $k=0$ en ikke-triviell konstantløsning", "Ved isolerte ender gir $k=0$ en lineær løsning med ulik helning", "Ved isolerte ender kan $k=0$ ikke behandles med samme ansats", "Ved isolerte ender faller $k=0$ sammen med tilfellet $k<0$"],
      explanation: "Med $F'(0)=F'(L)=0$ blir $F=Ax+B$ redusert til en vilkårlig konstant, som overlever og bærer likevektstemperaturen. Svaret om en lineær løsning med ulik helning er nær-sant, men helningen må være null nettopp fordi den deriverte er null i randen.",
    },
    {
      question: "Hvilken $p$ skal brukes i eksponenten $1/(p+1)$ i steglengdeformelen?",
      options: ["Ordenen til den løsningen som føres videre", "Ordenen til den høyeste av de to vektradene", "Antall steg i Butcher-tabellen", "Ordenen til feilestimatet selv"],
      explanation: "$p$ er ordenen til den propagerte løsningen, altså den lavere når du ikke gjør lokal ekstrapolasjon. Å bruke ordenen til den høyeste vektraden er den nære fellen, og gir riktig tall bare ved en tilfeldighet i noen par.",
    },
    {
      question: "Hvorfor binder den mest negative egenverdien steglengden for et system?",
      options: ["Fordi $|\\lambda|h$ blir størst der og først forlater intervallet", "Fordi den moden inneholder mest av løsningens energi", "Fordi den moden dør langsomst ut og dominerer for store $t$", "Fordi stabilitetsintervallet er smalere for store egenverdier"],
      explanation: "Kravet $|R(\\lambda h)|\\le1$ må holde for alle egenverdier, og $\\lambda h$ er lengst til venstre for den mest negative. Svaret om den moden som dør langsomst ut, beskriver den MINST negative, og er nettopp den fellen som gir for stor steglengde.",
    },
  ],
};

export default quizData_tma4135;
