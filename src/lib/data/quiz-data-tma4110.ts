import type { QuizQuestion } from './quiz-data';

const quizData_tma4110: Record<string, QuizQuestion[]> = {
  'tma4110-0-1': [
    {
      question: "Hvor mange timer varer den skriftlige eksamenen, og hvordan er deloppgavene vektet?",
      options: ["Fire timer, med rundt ti deloppgaver som teller helt likt uansett vanskegrad", "Tre timer, med én stor hovedoppgave som teller langt mer enn de andre delene", "Fem timer, der deloppgavene er vektet trinnvis etter hvor vanskelige de er", "To timer, der den aller siste oppgaven på settet alltid teller dobbelt så mye"],
      explanation: "Formatet er stabilt: fire timers skriftlig skoleeksamen med omtrent ti likt vektede deloppgaver. Fordi de teller likt, lønner det seg å sikre de enkle poengene først.",
    },
    {
      question: "Hvilke to temaer forekommer oftest av alle, i rundt 95 % av settene?",
      options: ["Komplekse tall (polarform og røtter) sammen med egenverdier og diagonalisering", "Minste kvadraters metode sammen med lineærtransformasjoner og deres standardmatriser", "Determinantregning ved kofaktorutvikling sammen med vanlig matrisemultiplikasjon", "Markov-kjeder med stasjonær fordeling sammen med systemer av differensiallikninger"],
      explanation: "Både komplekse tall ($z^n=c$, polarform) og egenverdier/diagonalisering ligger på rundt 95 % — de er de to sikreste søylene.",
    },
    {
      question: "Hva betyr hjelpemiddelkode E for hvordan du må forberede deg til eksamen?",
      options: ["Ingen hjelpemidler er tillatt, så alle formler og prosedyrer må sitte helt utenat", "Kalkulator er tillatt til utregninger, men formelsamling får du ikke bruke", "Formelsamling er tillatt å slå opp i, så selve formlene trenger du ikke pugge", "Alle digitale hjelpemidler er tillatt, inkludert både kalkulator og oppslagsverk"],
      explanation: "Kode E betyr ingen hjelpemidler i det hele tatt. Da må de Moivres formel, egenverdiprosedyren, ODE-metodene og resten sitte i hodet.",
    },
    {
      question: "Hvorfor skal du gi eksakte svar som $\\sqrt3$ og $\\frac{\\pi}{4}$ i stedet for desimaltall?",
      options: ["Det kreves eksakte svar, og et ustelt mellomsvar tyder som regel på en regnefeil", "Desimaltall regnes alltid som feil svar innenfor all høyere matematikk", "Sensor foretrekker lange svar med så mange desimaler som overhodet mulig", "Eksakte svar tar systematisk mye kortere tid å skrive ned enn desimaltall gjør"],
      explanation: "Eksamen krever eksakte svar. Under ingen-hjelpemidler-kravet finnes ingen kalkulator uansett, og et ustelt mellomsvar er nesten alltid tegn på en regnefeil.",
    },
    {
      question: "Hva kjennetegner et bevis som gir full uttelling på den siste oppgaven?",
      options: ["Forutsetningssjekk, navngitt teorem og tydelig skille mellom medfører og hvis-og-bare-hvis", "Et riktig sluttsvar helt til slutt, uansett hvordan selve argumentet er begrunnet", "At det er så kort og komprimert som mulig og hopper over alle mellomsteg", "At det bruker praktiske desimaltilnærminger underveis for å spare verdifull tid"],
      explanation: "Et fullt uttellende bevis sjekker forutsetningene, navngir teoremet som bærer argumentet, og viser begge veier ved en hvis-og-bare-hvis-påstand.",
    },
    {
      question: "Hvilket av disse temaene er IKKE en del av det denne boka dekker?",
      options: ["Fourier-rekker og partielle differensiallikninger fra et helt annet matematikkemne", "Egenverdier og diagonalisering av kvadratiske matriser med reelle egenverdier", "Komplekse tall skrevet på polarform, med de Moivres formel og $n$-te røtter", "Andregrads differensiallikninger løst med den karakteristiske likningen"],
      explanation: "Fourier-rekker, partielle differensiallikninger, vektorkalkulus og kompleks funksjonsteori hører til andre emner. Boka dekker lineær algebra, elementære komplekse tall og vanlige differensiallikninger.",
    },
    {
      question: "Hva sier sensorregelen «begrunn alle svar»?",
      options: ["Et riktig sluttsvar uten synlig utregning og begrunnelse gir ikke full uttelling", "At det utelukkende er selve tallsvaret som teller når besvarelsen skal rettes", "At begrunnelse bare kreves på den aller siste oppgaven, som ofte er et bevis", "At du trygt kan hoppe over all mellomregning så lenge sluttsvaret blir riktig"],
      explanation: "Du må vise nok mellomregning til at tankegangen framgår, og navngi teoremet som bærer hvert avgjørende steg — ellers mister du poeng selv med riktig svar.",
    },
    {
      question: "Hva er en fornuftig hurtigrute hvis du bare har noen få dager igjen til eksamen?",
      options: ["Øv først og mest på de fem søylene som forekommer i nesten hvert eneste sett", "Les hele boka rolig og lineært fra første til siste kapittel, uten å prioritere", "Konsentrer deg om de aller sjeldneste temaene for å kunne overraske sensor", "Hopp over all regneøving og les i stedet gjennom hele teoridelen to ganger"],
      explanation: "Med kort tid bør du prioritere de nesten garanterte søylene (komplekse tall, egenverdier, kolonnerom/nullrom, abstrakt vektorrom, Gram–Schmidt) og regne mange oppgaver på dem.",
    },
    {
      question: "Hva innebærer det at karakteren C er «en god og vanlig karakter»?",
      options: ["At du behersker kjernemekanikken godt, uten at du trenger å være helt feilfri", "At du har gjort en rekke alvorlige feil og så vidt unngått å stryke på eksamen", "At du bare akkurat har bestått og ligger helt nederst blant de som klarte seg", "At du er nødt til å sikte deg inn mot en A for å ha et brukbart sluttresultat"],
      explanation: "C betyr at kjernemekanikken sitter. Målet er å sikre de trygge poengene først; A-stoffet er det ekstra du tar med hvis tiden rekker.",
    },
    {
      question: "Hvorfor er boka bred med mange kapitler og svært mange flashcards?",
      options: ["Den dekker tre fagfelt som alle testes hvert år, og ingen-hjelpemidler krever pugging", "Fordi hvert enkelt tema i faget bare forekommer sjelden og med lang tids mellomrom", "Fordi selve eksamenen består av svært få oppgaver som må dekkes grundig", "Fordi stoffet er lett og trenger mye gjentakelse bare for å fylle opp sidene"],
      explanation: "Emnet dekker lineær algebra, komplekse tall og differensiallikninger — alle testes årlig — og kode E krever at hele apparatet pugges, derfor den høye flashcard-tettheten.",
    },
  ],
  'tma4110-1-1': [
    {
      question: "Hva er totalmatrisen (den utvidede matrisen) til et lineært system?",
      options: ["Koeffisientmatrisen utvidet med en kolonne for høyresidene", "Bare tabellen av koeffisientene, uten høyresidene", "Matrisen der alle radene er byttet om i rekkefølge", "Den kvadratiske delen av koeffisientene alene"],
      explanation: "Totalmatrisen $[A\\mid\\mathbf b]$ er koeffisientmatrisen $A$ med en ekstra kolonne $\\mathbf b$ for høyresidene, skilt med en strek.",
    },
    {
      question: "Hvorfor endrer ikke en elementær radoperasjon løsningsmengden?",
      options: ["Fordi operasjonene bare omformer likningene til ekvivalente likninger", "Fordi de alltid gjør systemet inkonsistent", "Fordi de fjerner de frie variablene fra systemet", "Fordi de bytter ut høyresidene med nuller"],
      explanation: "Ombytting, skalering (med tall ulik null) og addisjon av multiplum gir radekvivalente matriser, som har nøyaktig samme løsningsmengde.",
    },
    {
      question: "Hva kjennetegner redusert trappeform i forhold til vanlig trappeform?",
      options: ["Hvert ledende innslag er 1 og er eneste ikke-null i sin kolonne", "Alle radene består bare av nuller", "De ledende innslagene kan være hvilke som helst tall", "Nullradene står øverst i matrisen"],
      explanation: "I redusert trappeform er hvert ledende innslag et ledende ener, med nuller både over og under seg i kolonnen. Vanlig trappeform krever bare nuller under.",
    },
    {
      question: "Hva forteller en rad $[\\,0\\ 0\\ 0\\mid 1\\,]$ deg om systemet?",
      options: ["At systemet er inkonsistent og ikke har noen løsning", "At systemet har uendelig mange løsninger", "At det finnes en fri variabel i systemet", "At systemet har nøyaktig én løsning"],
      explanation: "Raden betyr «$0=1$», en motsigelse. Systemet er inkonsistent og har ingen løsning.",
    },
    {
      question: "Når har et lineært system nøyaktig én løsning?",
      options: ["Når det er konsistent og har en pivot i hver variabelkolonne", "Når minst én variabelkolonne mangler pivot", "Når høyresidekolonnen inneholder en pivot", "Når alle høyresidene er lik null"],
      explanation: "Pivot i hver variabelkolonne betyr ingen frie variabler, altså entydig løsning (forutsatt at systemet er konsistent).",
    },
    {
      question: "Hva er en fri variabel?",
      options: ["En ukjent hvis kolonne ikke inneholder en pivot", "En ukjent hvis kolonne inneholder en pivot", "Høyresiden i den siste likningen", "En likning som er lik null overalt"],
      explanation: "En fri variabel svarer til en variabelkolonne uten pivot; den kan velges fritt, og de andre variablene følger av den.",
    },
    {
      question: "Hvor mange løsninger har et homogent system $A\\mathbf x=\\mathbf 0$ alltid minst?",
      options: ["Minst én, nemlig den trivielle løsningen $\\mathbf x=\\mathbf 0$", "Ingen, det er alltid inkonsistent", "Nøyaktig to løsninger", "Uendelig mange, uansett antall pivoter"],
      explanation: "Et homogent system er alltid konsistent fordi $\\mathbf x=\\mathbf 0$ alltid løser det. Om det har flere, avhenger av frie variabler.",
    },
    {
      question: "Når har et homogent system ikke-trivielle løsninger?",
      options: ["Hvis og bare hvis det finnes minst én fri variabel", "Bare hvis det er inkonsistent", "Aldri, det har alltid bare nullløsningen", "Bare hvis antall likninger er større enn antall ukjente"],
      explanation: "Ikke-trivielle løsninger finnes nøyaktig når en variabelkolonne mangler pivot, altså når det er en fri variabel.",
    },
    {
      question: "Et homogent system har 3 likninger og 4 ukjente. Hva vet du?",
      options: ["Det har ikke-trivielle løsninger, siden minst én variabel må være fri", "Det har bare den trivielle løsningen", "Det er inkonsistent", "Det har nøyaktig én løsning"],
      explanation: "Med flere ukjente enn likninger er det høyst 3 pivoter, så minst én variabel er fri. Et homogent system er alltid konsistent, så det får uendelig mange løsninger.",
    },
    {
      question: "Hva menes med rangen til en matrise?",
      options: ["Antallet pivotposisjoner i matrisen", "Antallet rader i matrisen", "Summen av alle tallene i matrisen", "Antallet frie variabler i systemet"],
      explanation: "Rangen $\\operatorname{rang}A$ er antall pivoter, altså antall ledende innslag i en trappeform.",
    },
    {
      question: "Hvordan skal en løsningsmengde med uendelig mange løsninger skrives?",
      options: ["På parameterform, som en partikulær løsning pluss retningsvektorer", "Som ett enkelt tallpunkt", "Som en rad med bare nuller", "Som en tom mengde"],
      explanation: "Med frie variabler skrives svaret $\\mathbf x=\\mathbf x_p+t_1\\mathbf v_1+\\dots$, med én parameter per fri variabel.",
    },
    {
      question: "Hva gjør radoperasjonen $R_i\\to R_i+kR_j$?",
      options: ["Legger $k$ ganger rad $j$ til rad $i$", "Bytter om rad $i$ og rad $j$", "Ganger rad $i$ med tallet $k$", "Setter rad $i$ lik null"],
      explanation: "Dette er addisjon av et multiplum — arbeidshesten som lager nuller under en pivot. Rad $j$ endres ikke.",
    },
    {
      question: "Hvilket krav gjelder for skaleringsoperasjonen $R_i\\to kR_i$?",
      options: ["Tallet $k$ må være ulik null", "Tallet $k$ må være et helt tall", "Tallet $k$ må være positivt", "Tallet $k$ må være mindre enn 1"],
      explanation: "Ganger du en rad med $0$, mister du likningen og endrer løsningsmengden. Derfor kreves $k\\ne0$.",
    },
    {
      question: "Hva er de tre mulige utfallene for et lineært system?",
      options: ["Entydig, ingen eller uendelig mange løsninger", "Bare entydig eller ingen løsning", "Alltid uendelig mange løsninger", "Nøyaktig to eller tre løsninger"],
      explanation: "Et lineært system har alltid enten én løsning, ingen løsning, eller uendelig mange — aldri for eksempel nøyaktig to.",
    },
    {
      question: "Hva er forskjellen på et konsistent og et inkonsistent system?",
      options: ["Et konsistent system har minst én løsning; et inkonsistent har ingen", "Et konsistent system har ingen løsning; et inkonsistent har mange", "Et konsistent system er alltid homogent", "Et inkonsistent system har alltid en fri variabel"],
      explanation: "Konsistent = har minst én løsning (én eller uendelig mange). Inkonsistent = løsningsmengden er tom.",
    },
    {
      question: "Hva menes med Gauss–Jordan-eliminasjon?",
      options: ["Radreduksjon helt til redusert trappeform", "Å stoppe ved vanlig trappeform", "Å bytte om alle radene i matrisen", "Å regne ut determinanten til matrisen"],
      explanation: "Gauss–Jordan fortsetter til redusert trappeform, så løsningen står ferdig avlest uten bakoversubstitusjon.",
    },
    {
      question: "Et konsistent system i 3 ukjente har 2 pivoter. Hvor mange løsninger?",
      options: ["Uendelig mange, siden én variabel er fri", "Nøyaktig én løsning", "Ingen løsning", "Nøyaktig to løsninger"],
      explanation: "Tre ukjente minus to pivoter gir én fri variabel, altså uendelig mange løsninger (en linje).",
    },
    {
      question: "Hvorfor gjør vi radreduksjon for hånd under ingen-hjelpemidler-kravet?",
      options: ["Fordi det ikke finnes kalkulator, og sensor vil se radoperasjonene", "Fordi svaret alltid blir feil med kalkulator", "Fordi trappeform ikke kan regnes ut med kalkulator", "Fordi radreduksjon bare gjelder homogene system"],
      explanation: "Under kode E er det ingen hjelpemidler. Sensor krever dessuten at radoperasjonene vises, ikke bare sluttsvaret.",
    },
  ],
  'tma4110-1-2': [
    {
      question: "Hvilke tre utfall kan et lineært system ha?",
      options: ["Entydig, ingen eller uendelig mange løsninger", "Alltid nøyaktig én løsning", "Bare ingen eller uendelig mange løsninger", "Nøyaktig én, to eller tre løsninger"],
      explanation: "Et lineært system har alltid enten én løsning, ingen løsning eller uendelig mange — aldri for eksempel akkurat to.",
    },
    {
      question: "Når er et system entydig løsbart?",
      options: ["Når det er konsistent og har pivot i hver variabelkolonne", "Når en variabelkolonne mangler pivot", "Når høyresidekolonnen inneholder en pivot", "Når det har flere ukjente enn likninger"],
      explanation: "Pivot i hver variabelkolonne betyr ingen frie variabler, altså nøyaktig én løsning, forutsatt konsistens.",
    },
    {
      question: "Hva menes med en partikulær løsning?",
      options: ["Én bestemt løsning av systemet, for eksempel med frie variabler satt til null", "Løsningen av det homogene systemet", "En retningsvektor i parameterformen", "Verdien til en fri variabel"],
      explanation: "En partikulær løsning $\\mathbf x_p$ er ett konkret punkt i løsningsmengden og danner startpunktet i parameterformen.",
    },
    {
      question: "Hva er strukturen på løsningsmengden til $A\\mathbf x=\\mathbf b$?",
      options: ["En partikulær løsning pluss alle løsninger av $A\\mathbf x=\\mathbf 0$", "Bare løsningene av det homogene systemet", "Bare den ene partikulære løsningen", "Løsningene av $A\\mathbf x=\\mathbf 0$ ganget med $\\mathbf b$"],
      explanation: "Løsningsmengden er $\\mathbf x_p$ pluss hele nullrommet — det homogene systemets løsninger flyttet ut til å gå gjennom $\\mathbf x_p$.",
    },
    {
      question: "Hvordan finner du de kritiske verdiene i en parameteranalyse?",
      options: ["Der en pivot forsvinner, altså der et pivotuttrykk blir null", "Der høyresiden er størst", "Der alle koeffisientene er like", "Der systemet har flest likninger"],
      explanation: "Kritiske verdier er de $a$-verdiene som gjør et diagonalt uttrykk i trappeformen lik null, slik at en pivot forsvinner.",
    },
    {
      question: "Hva er den dyreste fellen i en parameteranalyse?",
      options: ["Å glemme et tilfelle i tilfelledelingen", "Å radredusere for nøyaktig", "Å skrive svaret på parameterform", "Å oppgi de frie variablene"],
      explanation: "Å hoppe over et tilfelle — typisk fordi man delte på et uttrykk som kunne være null — er den vanligste og mest kostbare feilen.",
    },
    {
      question: "Hvorfor kan du ikke uten videre dele en rad på $(a-1)$ under symbolsk radreduksjon?",
      options: ["Fordi $a-1$ kan være null, og da mister du det tilfellet", "Fordi $a-1$ alltid er null", "Fordi deling ikke er en radoperasjon", "Fordi det gjør systemet homogent"],
      explanation: "Å dele på $(a-1)$ antar taust $a\\ne1$. Verdien $a=1$ må behandles separat, ellers forsvinner et helt tilfelle.",
    },
    {
      question: "Ved en kritisk parameterverdi blir en rad $[\\,0\\ 0\\ 0\\mid c\\,]$. Hva avgjør utfallet?",
      options: ["Om $c$ er null (uendelig mange) eller ikke null (ingen løsning)", "Antall likninger i systemet", "Om systemet er homogent", "Fortegnet på parameteren $a$"],
      explanation: "Er $c=0$ blir raden $0=0$ (nullrad, fri variabel, uendelig mange). Er $c\\ne0$ blir den en motsigelse (ingen løsning).",
    },
    {
      question: "Hvor mange parametre trengs i parameterformen?",
      options: ["Én parameter per fri variabel", "Alltid nøyaktig én", "Én per likning i systemet", "Like mange som antall pivoter"],
      explanation: "Antall parametre = antall frie variabler = antall ukjente minus antall pivoter.",
    },
    {
      question: "Hva er den geometriske tolkningen av tre likninger i tre ukjente med entydig løsning?",
      options: ["Tre plan som skjærer hverandre i ett punkt", "Tre parallelle plan uten fellespunkt", "Tre sammenfallende plan", "Tre linjer i planet"],
      explanation: "Hver likning er et plan i rommet; entydig løsning betyr at de tre planene møtes i nøyaktig ett punkt.",
    },
    {
      question: "Hva er nullrommet $\\operatorname{Nul}A$?",
      options: ["Løsningsmengden til det homogene systemet $A\\mathbf x=\\mathbf 0$", "Mengden av alle høyresider $\\mathbf b$", "Kolonnene i matrisen $A$", "Raden med bare nuller i trappeformen"],
      explanation: "Nullrommet er alle løsninger av $A\\mathbf x=\\mathbf 0$; retningsvektorene i parameterformen beskriver nettopp det.",
    },
    {
      question: "Når er systemet $A\\mathbf x=\\mathbf b$ konsistent, uttrykt med kolonnerommet?",
      options: ["Når $\\mathbf b$ ligger i kolonnerommet $\\operatorname{Col}A$", "Når $\\mathbf b$ er nullvektoren", "Når $A$ har flere rader enn kolonner", "Når $\\mathbf b$ er en pivotkolonne"],
      explanation: "Systemet er løsbart hvis og bare hvis $\\mathbf b$ er en lineærkombinasjon av kolonnene i $A$, altså $\\mathbf b\\in\\operatorname{Col}A$.",
    },
    {
      question: "Hva vet du om et underbestemt system (færre likninger enn ukjente)?",
      options: ["Det kan aldri ha entydig løsning — enten ingen eller uendelig mange", "Det har alltid entydig løsning", "Det er alltid inkonsistent", "Det har alltid nøyaktig to løsninger"],
      explanation: "Med færre likninger enn ukjente er det garantert minst én fri variabel, så entydig løsning er umulig.",
    },
    {
      question: "Hva er forskjellen på «ingen løsning» og «bare trivialløsningen»?",
      options: ["Ingen løsning gjelder et inkonsistent inhomogent system; trivialløsningen gjelder et homogent", "De betyr det samme", "Trivialløsningen betyr uendelig mange løsninger", "Ingen løsning gjelder bare homogene system"],
      explanation: "Et homogent system har alltid minst $\\mathbf x=\\mathbf 0$; det kan aldri være «ingen løsning». Ingen løsning gjelder et inkonsistent inhomogent system.",
    },
    {
      question: "Systemet har nederste rad $(a-4)z=b-7$. For hvilke $a,b$ er det uendelig mange løsninger?",
      options: ["$a=4$ og $b=7$", "$a=4$ og $b\\ne7$", "$a\\ne4$ for enhver $b$", "$a=7$ og $b=4$"],
      explanation: "Ved $a=4$ blir raden $0=b-7$. Er $b=7$, blir den $0=0$ (fri variabel, uendelig mange); er $b\\ne7$, blir den en motsigelse.",
    },
    {
      question: "Hva betyr konsistensbetingelsen uttrykt med rang?",
      options: ["$\\operatorname{rang}[A\\mid\\mathbf b]=\\operatorname{rang}A$", "$\\operatorname{rang}[A\\mid\\mathbf b]>\\operatorname{rang}A$", "$\\operatorname{rang}A=0$", "$\\operatorname{rang}A$ er lik antall rader"],
      explanation: "Systemet er konsistent nettopp når høyresiden ikke øker rangen; blir rangen større, finnes en motsigelsesrad.",
    },
    {
      question: "Hva er «det generiske tilfellet» i en parameteranalyse?",
      options: ["Parameterverdiene utenom de kritiske, der ingen pivot forsvinner", "Verdien der systemet er inkonsistent", "Verdien der to likninger blir like", "Tilfellet der alle variabler er frie"],
      explanation: "Det generiske tilfellet er verdiene der systemet oppfører seg som vanlig (som regel entydig); de kritiske verdiene er unntakene.",
    },
    {
      question: "To linjer i planet er sammenfallende. Hva sier det om likningssystemet?",
      options: ["Det har uendelig mange løsninger", "Det har nøyaktig én løsning", "Det har ingen løsning", "Det er inkonsistent"],
      explanation: "Sammenfallende linjer betyr at de to likningene beskriver samme linje — hvert punkt på linja er en løsning, altså uendelig mange.",
    },
  ],
  'tma4110-1-3': [
    {
      question: "Hva er første steg i oppskriften for en oppgave-1-oppgave?",
      options: ["Skrive systemet som totalmatrise, med null der en ukjent mangler", "Gjette på antall løsninger", "Regne ut determinanten", "Sette alle variabler lik null"],
      explanation: "Steg 1 er å skrive totalmatrisen $[A\\mid\\mathbf b]$; husk å sette inn $0$ der en ukjent ikke er med.",
    },
    {
      question: "En pivot står i høyresidekolonnen. Hva betyr det?",
      options: ["Systemet har ingen løsning (inkonsistent)", "Systemet har entydig løsning", "Det finnes en fri variabel", "Systemet er homogent"],
      explanation: "Pivot i høyresidekolonnen svarer til en rad $[\\,0\\ \\cdots\\ 0\\mid c\\,]$ med $c\\ne0$ — en motsigelse, altså ingen løsning.",
    },
    {
      question: "Hvordan bør du behandle et homogent system raskest?",
      options: ["Dropp høyresidekolonnen og radreduser bare koeffisientmatrisen", "Legg til en ekstra kolonne med enere", "Regn ut determinanten først", "Sett inn en tilfeldig løsning"],
      explanation: "Høyresiden er null hele veien, så du kan radredusere $A$ alene. Systemet er alltid konsistent.",
    },
    {
      question: "Hvorfor skal du gjøre en innsettingskontroll til slutt?",
      options: ["Den avslører de fleste fortegns- og regnefeil på sekunder", "Den er påkrevd for at svaret skal være gyldig", "Den endrer løsningsmengden", "Den erstatter radreduksjonen"],
      explanation: "Å sette svaret inn i en opprinnelig likning er en billig sjekk som fanger de vanligste regnefeilene før de teller.",
    },
    {
      question: "Ved en kritisk parameterverdi får du raden $[\\,0\\ 0\\ 0\\mid c\\,]$. Hva må du gjøre?",
      options: ["Regne ut $c$: er $c=0$ uendelig mange, ellers ingen løsning", "Automatisk konkludere med uendelig mange", "Automatisk konkludere med ingen løsning", "Droppe det tilfellet"],
      explanation: "Utfallet ved en kritisk verdi er ikke gitt på forhånd — det avhenger av om $c$ er null eller ikke.",
    },
    {
      question: "Hva kjennetegner et korrekt svar når det er uendelig mange løsninger?",
      options: ["Det står på parameterform med partikulær løsning og retningsvektor", "Det er ett enkelt tallpunkt", "Det er determinanten til matrisen", "Det er antall pivoter"],
      explanation: "Uendelig mange løsninger må skrives $\\mathbf x_p+t\\mathbf v$; ett punkt alene gir trekk.",
    },
    {
      question: "Hvorfor kan du ikke dele en rad på $(a-3)$ uten videre?",
      options: ["Fordi $a-3$ kan være null, og da mister du tilfellet $a=3$", "Fordi deling ikke er tillatt i matriser", "Fordi $a-3$ alltid er positivt", "Fordi det gjør systemet inkonsistent"],
      explanation: "Å dele på $(a-3)$ antar $a\\ne3$; verdien $a=3$ er ofte nettopp det kritiske tilfellet og må behandles for seg.",
    },
    {
      question: "Systemet gir nederste rad $(a-3)z=b-10$. Når er det entydig løsning?",
      options: ["Når $a\\ne3$, for enhver $b$", "Bare når $a=3$ og $b=10$", "Bare når $b=0$", "Aldri"],
      explanation: "Så lenge $a\\ne3$ er det pivot i $z$-kolonnen, altså entydig løsning uansett $b$.",
    },
    {
      question: "Systemet gir nederste rad $(a-3)z=b-10$. Når er det uendelig mange løsninger?",
      options: ["Når $a=3$ og $b=10$", "Når $a=3$ og $b\\ne10$", "Når $a\\ne3$", "Aldri"],
      explanation: "Ved $a=3$ blir raden $0=b-10$. Bare $b=10$ gir $0=0$ (fri variabel, uendelig mange).",
    },
    {
      question: "Systemet gir nederste rad $(a-3)z=b-10$. Når er det ingen løsning?",
      options: ["Når $a=3$ og $b\\ne10$", "Når $a=3$ og $b=10$", "Når $a\\ne3$", "For alle $a,b$"],
      explanation: "Ved $a=3$ og $b\\ne10$ blir raden $0=b-10\\ne0$, en motsigelse.",
    },
    {
      question: "Hvor mange frie variabler har et homogent system med 4 ukjente og 2 pivoter?",
      options: ["To frie variabler", "Ingen frie variabler", "Én fri variabel", "Fire frie variabler"],
      explanation: "Antall frie variabler = antall ukjente minus antall pivoter = $4-2=2$.",
    },
    {
      question: "Hva menes med det «generiske» tilfellet i en parameteranalyse?",
      options: ["Parameterverdiene utenom de kritiske, der ingen pivot forsvinner", "Tilfellet der systemet er inkonsistent", "Tilfellet der alle variabler er frie", "Verdien der to likninger er like"],
      explanation: "Det generiske tilfellet er der systemet oppfører seg som vanlig (som regel entydig); de kritiske verdiene er unntakene.",
    },
    {
      question: "Hva bør du gjøre hvis oppgave 1 gir stygge brøker selv om systemet ser pent ut?",
      options: ["Stoppe og lete etter en regnefeil", "Regne videre og godta svaret", "Bytte til en annen metode", "Anta at systemet er inkonsistent"],
      explanation: "Et «ustelt» mellomsvar der oppgaven ser pen ut, er nesten alltid et tegn på en regnefeil i radoperasjonene.",
    },
    {
      question: "Hvor mye tid har du i snitt per deloppgave på eksamen?",
      options: ["Omtrent 24 minutter (fire timer på rundt ti deler)", "Omtrent én time", "Omtrent fem minutter", "Omtrent 45 minutter"],
      explanation: "Fire timer delt på rundt ti likt vektede deloppgaver gir cirka 24 minutter hver; oppgave 1 bør gå raskere enn snittet.",
    },
    {
      question: "Hva er retningsvektoren i parameterformen en løsning av?",
      options: ["Det tilhørende homogene systemet $A\\mathbf x=\\mathbf 0$", "Det inhomogene systemet $A\\mathbf x=\\mathbf b$", "Determinantlikningen", "Høyresidekolonnen alene"],
      explanation: "Retningsvektorene løser $A\\mathbf x=\\mathbf 0$; de beskriver nullrommet, og du kan kontrollere dem der.",
    },
    {
      question: "Et system har pivot i hver av de tre variabelkolonnene og ingen i høyresiden. Utfall?",
      options: ["Entydig løsning", "Uendelig mange løsninger", "Ingen løsning", "Kan ikke avgjøres"],
      explanation: "Pivot i hver variabelkolonne (uten motsigelsesrad) betyr ingen frie variabler, altså nøyaktig én løsning.",
    },
  ],
  'tma4110-10-1': [
    {
      question: "Hva menes med et system på formen x'=Ax?",
      options: ["Et sett koblede 1. ordens likninger der de deriverte er lineære kombinasjoner av funksjonene, samlet på matriseform", "En enkelt 2. ordens likning som er skrevet om ved hjelp av en kvadratisk koeffisientmatrise A", "Et likningssystem Ax=b som løses med Gauss-eliminasjon for å finne en konstant vektor x", "En diagonalisering A=PDP⁻¹ der D inneholder de deriverte av komponentene langs diagonalen"],
      explanation: "x'=Ax samler flere koblede 1. ordens differensiallikninger: hver derivert x_i' er en lineær kombinasjon av x_1,...,x_n, med koeffisientene i den konstante matrisen A.",
    },
    {
      question: "Hvorfor er e^{λt}v en løsning av x'=Ax når Av=λv?",
      options: ["Fordi begge sider blir like: x'=λe^{λt}v og Ax=e^{λt}Av=e^{λt}λv=λe^{λt}v", "Fordi eksponentialfunksjonen alltid løser ethvert lineært system uansett valg av vektor v", "Fordi v er en løsning av det homogene systemet og e^{λt} bare skalerer den opp med tiden", "Fordi determinanten til A-λI er null, og da forsvinner høyresiden av likningen fullstendig"],
      explanation: "Deriverer man e^{λt}v får man λe^{λt}v. Høyresiden er A(e^{λt}v)=e^{λt}(Av)=e^{λt}(λv). Sidene er like nettopp fordi Av=λv.",
    },
    {
      question: "Hva er den generelle løsningen av x'=Ax når A (n×n) har n reelle, distinkte egenverdier?",
      options: ["x(t)=c₁e^{λ₁t}v₁+...+c_ne^{λ_nt}v_n, en kombinasjon av grunnløsningene med frie konstanter", "x(t)=e^{λt}(v₁+v₂+...+v_n), der alle egenvektorene ganges med samme eksponentialfaktor", "x(t)=c₁v₁+c₂v₂+...+c_nv_n, altså en fast lineær kombinasjon av egenvektorene uten tid", "x(t)=(c₁+c₂t+...)e^{λt}v, med et polynom i t foran den ene dominerende egenvektoren"],
      explanation: "Distinkte egenverdier gir uavhengige egenvektorer, så de n grunnløsningene e^{λ_i t}v_i spenner ut alt: x(t)=Σ c_i e^{λ_i t}v_i.",
    },
    {
      question: "Hvordan finner du egenvektoren til en gitt egenverdi λ?",
      options: ["Ved å radredusere A-λI og lese av en ikke-triviell løsning av (A-λI)v=0", "Ved å regne ut determinanten det(A-λI) og sette den inn som komponentene i v", "Ved å gange matrisen A med standardvektoren e₁ og normalisere resultatet til lengde 1", "Ved å løse det inhomogene systemet Av=λ, der høyresiden er tallet λ som konstant"],
      explanation: "Egenvektorene er ikke-null-løsningene av (A-λI)v=0. Radreduser A-λI og les av en frivektor. Aldri gjett — en liten feil ødelegger hele løsningen.",
    },
    {
      question: "Egenverdiene til A=[[1,2],[2,1]] er:",
      options: ["3 og -1", "1 og 2, altså tallene på diagonalen i matrisen A", "2 og -2, symmetrisk fordelt rundt null på tallinjen", "3 og 1, summen og differansen av diagonalelementene"],
      explanation: "det(A-λI)=(1-λ)²-4=λ²-2λ-3=(λ-3)(λ+1), så egenverdiene er 3 og -1. Diagonalelementene er ikke egenverdiene når matrisen ikke er diagonal.",
    },
    {
      question: "Ved et begynnelsesverdiproblem: hvordan bestemmer du konstantene c_i?",
      options: ["Sett t=0 i den generelle løsningen; eksponentialene blir 1, og du løser c₁v₁+...+c_nv_n=x₀", "Deriver den generelle løsningen én gang og sett den lik startvektoren x₀ i punktet t=0", "Regn ut den inverse matrisen A⁻¹ og gang den med startvektoren for å få konstantene direkte", "Del startvektoren x₀ komponentvis på egenverdiene λ_i for å få hver konstant c_i"],
      explanation: "Ved t=0 er alle e^{λ_i·0}=1, så x(0)=c₁v₁+...+c_nv_n=x₀. Dette er et lineært system for c_i som løses direkte.",
    },
    {
      question: "Hva blir grunnløsningen som svarer til egenverdien λ=2 med egenvektor v=(1,3)?",
      options: ["e^{2t}(1,3)", "2e^{t}(1,3), der egenverdien tas ut som en faktor foran eksponentialen", "e^{2t}(2,6), fordi egenvektoren må ganges med egenverdien før innsetting", "(1,3)+2t·(1,3), en lineær vekst langs egenvektorretningen med tiden"],
      explanation: "Grunnløsningen er e^{λt}v=e^{2t}(1,3): egenverdien i eksponenten, egenvektoren som konstant retning.",
    },
    {
      question: "Hva er koblingen mellom egenverdimetoden og diagonalisering?",
      options: ["Er A=PDP⁻¹, gir substitusjonen x=Py det avkoblede systemet y'=Dy med løsninger y_i=c_ie^{λ_it}", "Diagonalisering gjør at matrisen A blir symmetrisk, og symmetriske systemer har alltid enkle løsninger", "P⁻¹ fjerner tidsavhengigheten fra systemet, slik at man kan integrere hver komponent for seg selv", "Determinanten til D er lik produktet av egenverdiene, og dette produktet blir eksponentialfaktoren"],
      explanation: "Med x=Py blir x'=Ax til y'=Dy, som er avkoblet (y_i'=λ_i y_i). Løsningen y_i=c_i e^{λ_i t} gir tilbake x=Py=Σ c_i e^{λ_i t}v_i.",
    },
    {
      question: "Hvordan omformer du y''+py'+qy=0 til et system med x₁=y, x₂=y'?",
      options: ["x₁'=x₂ og x₂'=-qx₁-px₂, altså A=[[0,1],[-q,-p]]", "x₁'=x₁ og x₂'=y'', der begge likningene beholder sine opprinnelige koeffisienter p og q", "x₁'=px₁ og x₂'=qx₂, ved å fordele koeffisientene p og q på hver sin komponent", "x₁'=x₂ og x₂'=qx₁+px₂, med positive fortegn fordi leddene flyttes over på venstresiden"],
      explanation: "x₁'=y'=x₂, og x₂'=y''=-py'-qy=-qx₁-px₂. Følgematrisen blir A=[[0,1],[-q,-p]].",
    },
    {
      question: "Hva er egenverdiene til følgematrisen [[0,1],[-q,-p]] i forhold til y''+py'+qy=0?",
      options: ["Nøyaktig røttene til den karakteristiske likningen r²+pr+q=0", "De negative koeffisientene -p og -q hentet rett fra nederste rad i matrisen", "Alltid et par komplekst konjugerte tall uansett fortegnet på diskriminanten p²-4q", "Tallene 0 og 1 fra øverste rad, siden det er der den deriverte-koblingen sitter"],
      explanation: "Følgematrisens karakteristiske polynom er λ²+pλ+q — identisk med r²+pr+q. Systemets egenverdier er nettopp ODE-ens karakteristiske røtter.",
    },
    {
      question: "Hva sier superposisjonsprinsippet for det homogene systemet x'=Ax?",
      options: ["Er x₁ og x₂ løsninger, så er enhver kombinasjon c₁x₁+c₂x₂ også en løsning", "Produktet av to løsninger er en løsning, fordi matrisen A distribuerer over multiplikasjon", "Summen av to løsninger løser i stedet det inhomogene systemet x'=Ax+g med et pådrag g", "Bare den løsningen med størst egenverdi overlever på lang sikt, så de andre kan sløyfes"],
      explanation: "Fordi A er lineær er A(c₁x₁+c₂x₂)=c₁Ax₁+c₂Ax₂. Derfor er kombinasjoner av grunnløsninger igjen løsninger — det er dette som lar oss legge dem sammen.",
    },
    {
      question: "Hva er en fundamentalmatrise Ψ(t) for systemet x'=Ax?",
      options: ["En matrise med de lineært uavhengige grunnløsningene som søyler, slik at x(t)=Ψ(t)c", "Den konstante koeffisientmatrisen A selv, sett på som en avbildning av startvektoren", "Den inverse matrisen P⁻¹ som brukes i substitusjonen for å avkoble hele systemet fullstendig", "En diagonalmatrise med egenverdiene e^{λt} langs diagonalen og nuller ellers utenom"],
      explanation: "Fundamentalmatrisen har grunnløsningene som søyler; da er x(t)=Ψ(t)c, og begynnelsesverdien løses kompakt som c=Ψ(0)⁻¹x₀.",
    },
    {
      question: "Løs x'=[[1,2],[2,1]]x med x(0)=(3,1). Hva er svaret?",
      options: ["x(t)=2e^{3t}(1,1)+e^{-t}(1,-1)", "x(t)=e^{3t}(1,1)+2e^{-t}(1,-1), med konstantene byttet om mellom de to leddene", "x(t)=3e^{3t}(1,1)+e^{-t}(1,-1), ved å bruke komponentene i startvektoren som konstanter", "x(t)=2e^{3t}(1,1)-e^{-t}(1,-1), med negativt fortegn på det andre leddet"],
      explanation: "Generell løsning c₁e^{3t}(1,1)+c₂e^{-t}(1,-1). x(0)=(3,1) gir c₁+c₂=3, c₁-c₂=1, altså c₁=2, c₂=1.",
    },
    {
      question: "Hva er den vanligste feilen når man setter opp den generelle løsningen?",
      options: ["Å glemme e^{λt}-faktoren, slik at egenvektoren alene (uten tidsavhengighet) brukes som løsning", "Å bruke for få desimaler i egenverdiene når de settes inn i eksponentialfunksjonen", "Å normalisere egenvektorene til lengde 1, noe som alltid gir helt feil sluttsvar", "Å regne determinanten det(A-λI) med feil fortegn på det konstante leddet q"],
      explanation: "Egenvektoren v alene er ikke en løsning — hver grunnløsning er e^{λt}v. Å slippe eksponentialfaktoren er en klassisk feil.",
    },
    {
      question: "Hva er dimensjonen til løsningsrommet til x'=Ax når A er n×n?",
      options: ["n — det trengs n uavhengige grunnløsninger og n frie konstanter", "2n, fordi hver komponent bidrar med to konstanter slik som i en 2. ordens likning", "n-1, siden den ene retningen alltid låses av begynnelsesbetingelsen på forhånd", "Uendelig, fordi det finnes uendelig mange valg av startvektor x₀ i rommet"],
      explanation: "Løsningsrommet har dimensjon n: n uavhengige grunnløsninger spenner det ut, og en startvektor i Rⁿ gir akkurat nok betingelser til å låse løsningen entydig.",
    },
    {
      question: "For A=[[2,0],[0,-3]] (diagonal): hva er den generelle løsningen?",
      options: ["x(t)=c₁e^{2t}(1,0)+c₂e^{-3t}(0,1)", "x(t)=c₁e^{2t}(1,1)+c₂e^{-3t}(1,-1), med de vanlige symmetriske egenvektorene", "x(t)=e^{2t}e^{-3t}(c₁,c₂), som produktet av de to eksponentialfaktorene", "x(t)=c₁e^{-t}(1,0)+c₂e^{-t}(0,1), der eksponenten er summen av diagonalen"],
      explanation: "En diagonal matrise gir avkoblede likninger x₁'=2x₁, x₂'=-3x₂ med løsninger c₁e^{2t} og c₂e^{-3t}. Egenvektorene er standardvektorene (1,0),(0,1).",
    },
  ],
  'tma4110-10-2': [
    {
      question: "Når har koeffisientmatrisen A (2×2) komplekse egenverdier?",
      options: ["Når den karakteristiske likningen har negativ diskriminant, altså (tr A)²<4·det A", "Når determinanten det A er negativ, slik at røttene havner på hver sin side av null", "Når matrisen A ikke er symmetrisk og dermed ikke kan diagonaliseres over de reelle tallene", "Når sporet tr A er lik null, uansett hva verdien av determinanten det A måtte være"],
      explanation: "Egenverdiene løser λ²-(tr A)λ+det A=0. Negativ diskriminant (tr A)²<4·det A gir et komplekst konjugert par a±bi.",
    },
    {
      question: "Fra én kompleks grunnløsning z(t)=e^{λt}w, hvordan får du to reelle løsninger?",
      options: ["Ta realdelen og imaginærdelen hver for seg — begge løser det reelle systemet", "Bruk både λ=a+bi og den konjugerte λ=a-bi som to separate grunnløsninger i summen", "Gang z(t) med sin egen konjugerte for å fjerne den imaginære delen fullstendig", "Del z(t) opp i modulus og argument, og bruk disse to som de reelle grunnløsningene"],
      explanation: "Er z=u+iw en kompleks løsning av et reelt system, løser både u=Re z og w=Im z systemet, og de er uavhengige. Bruk kun én egenverdi.",
    },
    {
      question: "Hva gir Eulers formel når du skriver ut e^{(a+bi)t}?",
      options: ["e^{at}(cos bt + i sin bt), med demping/vekst i e^{at} og svingning i cos/sin", "e^{at}·e^{bt}, altså produktet av to reelle eksponentialfunksjoner uten svingeledd", "cos(at) + i sin(bt), der realdelen og imaginærdelen får hver sin uavhengige frekvens", "e^{abt}(cos t + i sin t), med eksponentene slått sammen til ett produkt abt"],
      explanation: "e^{(a+bi)t}=e^{at}·e^{ibt}=e^{at}(cos bt+i sin bt). Realdelen a styrer amplituden, imaginærdelen b styrer svingefrekvensen.",
    },
    {
      question: "Hvilken egenverdi skal du bruke når egenverdiene er a±bi?",
      options: ["Bare den ene (a+bi) med sin egenvektor; real- og imaginærdel gir begge reelle løsninger", "Begge to, slik at hver konjugerte egenverdi bidrar med sin egen uavhengige grunnløsning", "Den med størst absoluttverdi, siden den dominerer oppførselen til systemet på lang sikt", "Gjennomsnittet a av de to, fordi den imaginære delen likevel forsvinner i det reelle svaret"],
      explanation: "Bruk kun λ=a+bi og dens egenvektor. Real- og imaginærdelen av e^{λt}w gir de to reelle grunnløsningene. Den konjugerte gir ingen ny informasjon.",
    },
    {
      question: "Egenverdiene til A=[[0,-2],[2,0]] er:",
      options: ["±2i (rent imaginære)", "±2 (reelle og motsatt like), fra produktet av de to elementene utenfor diagonalen", "0 og 4, altså sporet og determinanten til matrisen hver for seg", "-2 og 2i, ett reelt og ett imaginært tall blandet sammen"],
      explanation: "det(A-λI)=λ²+4=0 gir λ=±2i. Sporet er 0 og determinanten 4, så (tr A)²=0<16=4·det A — rent imaginære egenverdier.",
    },
    {
      question: "Hva styrer stabiliteten ved komplekse egenverdier a±bi?",
      options: ["Fortegnet på realdelen a: a<0 gir stabil (inn), a>0 ustabil (ut), a=0 marginal (senter)", "Størrelsen på imaginærdelen b, siden raskere svingning alltid trekker banene inn mot origo", "Forholdet a/b mellom real- og imaginærdel, som avgjør hvor bratt spiralen snor seg", "Determinanten det A alene, fordi den bestemmer om løsningen vokser eller avtar over tid"],
      explanation: "Faktoren e^{at} avgjør alt: a<0 demper svingningen (stabil), a>0 forsterker (ustabil), a=0 gir konstant amplitude (senter, marginal). b endrer bare svingehastigheten.",
    },
    {
      question: "Hvilken type likevekt gir to reelle egenverdier med samme fortegn?",
      options: ["En node — stabil hvis begge er negative, ustabil hvis begge er positive", "Et sadelpunkt, siden reelle egenverdier alltid gir en sadelformet fasegeometri", "Et senter med lukkede baner, fordi like fortegn holder amplituden konstant", "En spiral, der like fortegn tvinger banene til å rotere jevnt rundt origo"],
      explanation: "Reelle egenverdier med samme fortegn gir en node: begge negative ⇒ stabil node (inn), begge positive ⇒ ustabil node (ut). Ingen rotasjon.",
    },
    {
      question: "Hvilken type likevekt gir to reelle egenverdier med motsatt fortegn?",
      options: ["Et sadelpunkt, som alltid er ustabilt", "En stabil node, siden den negative egenverdien trekker alle baner inn mot origo", "Et senter, fordi de motsatte fortegnene balanserer hverandre ut til lukkede kurver", "En stabil spiral, der den ene retningen demper mens den andre får banen til å rotere"],
      explanation: "Motsatt fortegn (λ₁<0<λ₂) gir et sadelpunkt: baner trekkes inn langs den ene egenvektoren og støtes ut langs den andre. Alltid ustabilt.",
    },
    {
      question: "Hvilken type likevekt gir rent imaginære egenverdier ±bi?",
      options: ["Et senter med lukkede baner — marginalt stabilt", "En stabil spiral som spiraler inn mot origo med avtakende amplitude over tid", "En ustabil node der alle løsningskurvene beveger seg rett utover fra origo", "Et sadelpunkt, siden imaginære egenverdier oppfører seg som motsatte reelle tall"],
      explanation: "Rent imaginære egenverdier (a=0) gir et senter: konstant amplitude, lukkede baner rundt origo, verken inn eller ut — marginalt stabilt.",
    },
    {
      question: "Hvilken type likevekt gir komplekse egenverdier a±bi med a≠0?",
      options: ["En spiral — stabil hvis a<0, ustabil hvis a>0", "Et senter, fordi den imaginære delen b tvinger banene til å lukke seg til sirkler", "En node uten rotasjon, siden realdelen a bestemmer den rette bevegelsesretningen", "Et sadelpunkt, der realdelen og imaginærdelen trekker i hver sin motsatte retning"],
      explanation: "Komplekse egenverdier med a≠0 gir en spiral: b gir svingningen (rotasjonen), a gir inn/ut-driften. a<0 ⇒ stabil spiral, a>0 ⇒ ustabil spiral.",
    },
    {
      question: "Hva betyr at et likevektspunkt er asymptotisk stabilt?",
      options: ["Alle løsninger går mot 0 når t→∞ (alle egenverdier har negativ realdel)", "Løsningene holder seg i nærheten av origo men uten nødvendigvis å nærme seg det", "Minst én løsning vokser mot uendelig mens de andre forblir konstante over tid", "Banene danner lukkede kurver som gjentar seg periodisk med fast amplitude for alltid"],
      explanation: "Asymptotisk stabil betyr at alle løsninger trekkes mot 0 når t→∞, noe som skjer nettopp når alle egenverdier har Re λ<0 (stabil node eller stabil spiral).",
    },
    {
      question: "Løs x'=[[-1,-2],[2,-1]]x med x(0)=(1,0). Hva er svaret?",
      options: ["x(t)=e^{-t}(cos 2t, sin 2t)", "x(t)=e^{-t}(cos 2t, -sin 2t), med negativt fortegn på den andre komponenten", "x(t)=e^{t}(cos 2t, sin 2t), med voksende amplitude fordi realdelen tolkes positiv", "x(t)=(cos 2t, sin 2t) uten eksponentialfaktor, siden startpunktet ligger på enhetssirkelen"],
      explanation: "λ=-1±2i, egenvektor (1,-i). Real/imaginærdel gir e^{-t}(cos2t,sin2t) og e^{-t}(sin2t,-cos2t). x(0)=(1,0) gir c₁=1, c₂=0, altså e^{-t}(cos2t,sin2t).",
    },
    {
      question: "Hva er en typisk feil i den komplekse metoden?",
      options: ["Å bruke begge de konjugerte egenverdiene i stedet for real- og imaginærdel av den ene", "Å regne egenvektoren med for få desimaler slik at svingefrekvensen b blir unøyaktig", "Å bruke Eulers formel, som gir et komplekst svar der man egentlig trenger et reelt", "Å sette startvektoren inn før man har derivert den generelle løsningen minst én gang"],
      explanation: "En vanlig feil er å ta med både a+bi og a-bi som separate løsninger. Det holder å bruke den ene og hente to reelle løsninger via real- og imaginærdel.",
    },
    {
      question: "Klassifiser likevekten til A=[[3,0],[0,1]].",
      options: ["Ustabil node (begge egenverdier 3 og 1 er positive)", "Stabil node, siden de positive egenverdiene trekker banene inn mot origo", "Sadelpunkt, fordi de to egenverdiene er forskjellige i størrelse", "Ustabil spiral, der banene roterer utover på grunn av de reelle egenverdiene"],
      explanation: "Egenverdiene er 3 og 1 — begge reelle og positive, samme fortegn ⇒ node, og positivt fortegn ⇒ ustabil. Ingen komplekse verdier, så ingen spiral.",
    },
    {
      question: "Hvordan bruker du spor og determinant til å skille node fra spiral (2×2)?",
      options: ["(tr A)²>4·det A gir reelle egenverdier (node/sadel); (tr A)²<4·det A gir komplekse (spiral/senter)", "det A>0 gir alltid en node, mens det A<0 uten unntak gir en spiral rundt origo", "tr A>0 gir spiral og tr A<0 gir node, uavhengig av hva determinanten er", "Produktet tr A · det A avgjør typen: positivt gir node, negativt gir spiral"],
      explanation: "Diskriminanten er (tr A)²-4·det A. Positiv ⇒ reelle egenverdier (node hvis samme fortegn på det, sadel hvis det A<0); negativ ⇒ komplekse (spiral, eller senter hvis tr A=0).",
    },
    {
      question: "Hva er kvasifrekvensen ved komplekse egenverdier a±bi?",
      options: ["Tallet b — imaginærdelen, som bestemmer hvor fort løsningen svinger", "Tallet a — realdelen, som bestemmer hvor fort amplituden vokser eller dempes", "Summen a+b av real- og imaginærdel, som gir den samlede svingehastigheten", "Absoluttverdien √(a²+b²), altså avstanden fra egenverdien til origo i planet"],
      explanation: "Imaginærdelen b er kvasifrekvensen (svingehastigheten), mens realdelen a er dempingsraten. Samme rolle som i en dempet svingemodell.",
    },
  ],
  'tma4110-10-3': [
    {
      question: "Hva er første steg i løsningsoppskriften for x'=Ax?",
      options: ["Løs den karakteristiske likningen det(A-λI)=0 for å finne egenverdiene", "Sett inn begynnelsesverdien x(0) med det samme for å låse konstantene tidlig", "Diagonaliser matrisen fullstendig ved å regne ut både P, D og den inverse P⁻¹", "Klassifiser likevektspunktet som node, sadel, senter eller spiral før noe annet"],
      explanation: "Første steg er alltid egenverdiene fra det(A-λI)=0. De avgjør om du er i det reelle eller komplekse sporet, og alt annet bygger på dem.",
    },
    {
      question: "Hvordan kjenner du igjen om du er i det reelle eller komplekse tilfellet?",
      options: ["På diskriminanten: reelle distinkte egenverdier gir det reelle sporet, komplekse gir det andre", "På størrelsen til matrisen: 2×2 er alltid reelt, mens større matriser blir komplekse", "På om startvektoren x(0) har positive eller negative komponenter i utgangspunktet", "På fortegnet til determinanten alene, som bestemmer om egenvektorene blir reelle"],
      explanation: "Diskriminanten til den karakteristiske likningen avgjør det: er den ≥0 får du reelle egenverdier, er den <0 får du et komplekst konjugert par.",
    },
    {
      question: "For det komplekse tilfellet: hva er de to reelle grunnløsningene?",
      options: ["Realdelen og imaginærdelen av e^{λt}w, der λ=a+bi og w er egenvektoren", "e^{at}cos bt og e^{at}sin bt hver for seg, uten å ta hensyn til egenvektoren w", "De to konjugerte grunnløsningene e^{(a+bi)t}w og e^{(a-bi)t}w̄ lagt sammen", "Modulus og argument av den komplekse løsningen z(t), regnet ut ved hvert tidspunkt"],
      explanation: "Bruk kun λ=a+bi: dann e^{λt}w=e^{at}(cos bt+i sin bt)w, og de to reelle grunnløsningene er Re og Im av dette uttrykket.",
    },
    {
      question: "Løs x'=[[1,3],[3,1]]x med x(0)=(2,4). Hva er svaret?",
      options: ["x(t)=3e^{4t}(1,1)-e^{-2t}(1,-1)", "x(t)=2e^{4t}(1,1)+4e^{-2t}(1,-1), ved å bruke startvektorens komponenter som konstanter", "x(t)=e^{4t}(1,1)+3e^{-2t}(1,-1), med konstantene 1 og 3 fra egenverdiene", "x(t)=3e^{4t}(1,1)+e^{-2t}(1,-1), begge ledd med positivt fortegn"],
      explanation: "λ=4,-2, egenvektorer (1,1),(1,-1). x(0)=(2,4) gir c₁+c₂=2, c₁-c₂=4, altså c₁=3, c₂=-1. Svaret er 3e^{4t}(1,1)-e^{-2t}(1,-1).",
    },
    {
      question: "Klassifiser likevekten når egenverdiene er λ=2±3i.",
      options: ["Ustabil spiral, fordi realdelen a=2 er positiv", "Stabil spiral, siden den imaginære delen 3 demper svingningen inn mot origo", "Senter, fordi de to egenverdiene er komplekst konjugerte av hverandre", "Ustabil node, ettersom begge egenverdiene har positiv realdel lik 2"],
      explanation: "Komplekse egenverdier med a=2>0 gir en ustabil spiral: b=3 gir rotasjonen, og den positive realdelen gjør at amplituden vokser.",
    },
    {
      question: "Hvordan bestemmer du konstantene i et begynnelsesverdiproblem for et system?",
      options: ["Sett t=0 i den ferdige generelle løsningen og løs det lineære systemet som oppstår", "Gang startvektoren med den inverse koeffisientmatrisen A⁻¹ for å få konstantene direkte", "Deriver hver grunnløsning og sammenlign med startvektorens deriverte komponentvis", "Sett konstantene lik egenverdiene, siden disse allerede bærer all informasjonen"],
      explanation: "Sett t=0 i den generelle løsningen (eksponentialene blir 1) og løs det lineære systemet for konstantene — alltid etter at den generelle løsningen er komplett.",
    },
    {
      question: "Omform y''+4y=0 til et system med x₁=y, x₂=y'. Hva blir A?",
      options: ["A=[[0,1],[-4,0]]", "A=[[0,1],[4,0]], med positivt fortegn fordi leddet 4y flyttes til høyre side", "A=[[4,0],[0,1]], en diagonal matrise med koeffisienten 4 øverst til venstre", "A=[[0,4],[1,0]], der koeffisienten fra likningen står i øverste rad"],
      explanation: "x₁'=x₂ og x₂'=y''=-4y=-4x₁, så A=[[0,1],[-4,0]]. Følgematrisen har -q=-4 nederst til venstre og -p=0 nederst til høyre.",
    },
    {
      question: "Hva blir egenverdiene til følgematrisen [[0,1],[-4,0]] fra y''+4y=0?",
      options: ["±2i — de samme som røttene til r²+4=0", "±4, altså koeffisienten 4 med begge fortegn hentet fra likningen", "0 og 1, tallene som står i den øverste raden av følgematrisen", "±2, de reelle kvadratrøttene av koeffisienten foran y i likningen"],
      explanation: "det(A-λI)=λ²+4=0 gir λ=±2i — nøyaktig røttene til den karakteristiske likningen r²+4=0. Systemet svarer til en ren svingning y=c₁cos2t+c₂sin2t.",
    },
    {
      question: "Klassifiser likevekten til A=[[-2,0],[0,-5]].",
      options: ["Stabil node (begge egenverdier -2 og -5 er negative)", "Ustabil node, siden egenverdiene har ulik størrelse selv om fortegnene er like", "Stabil spiral, der de negative egenverdiene tvinger banene inn i en spiral", "Sadelpunkt, fordi -2 og -5 er to forskjellige reelle egenverdier"],
      explanation: "Egenverdiene -2 og -5 er reelle med samme (negative) fortegn ⇒ stabil node. Ingen komplekse verdier ⇒ ingen spiral, samme fortegn ⇒ ingen sadel.",
    },
    {
      question: "Hva er en typisk feil i det komplekse tilfellet under tidspress?",
      options: ["Å bytte om real- og imaginærdel når egenvektoren ganges inn i cos bt + i sin bt", "Å regne egenverdiene med for mange desimaler slik at svaret ikke blir eksakt nok", "Å bruke radreduksjon på A-λI, som ikke fungerer når egenverdien er kompleks", "Å sette opp den karakteristiske likningen med feil fortegn på determinanten det A"],
      explanation: "En vanlig feil er å bytte real- og imaginærdel eller rote med i²=-1 når egenvektoren ganges inn. Resultatet blir 'nesten riktig' men galt.",
    },
    {
      question: "Klassifiser likevekten til A=[[0,-1],[1,0]].",
      options: ["Senter (egenverdiene ±i er rent imaginære)", "Stabil spiral, siden banene snor seg innover mot origo over tid", "Ustabil node, fordi determinanten er positiv og sporet er null", "Sadelpunkt, ettersom de to elementene utenfor diagonalen har motsatt fortegn"],
      explanation: "det(A-λI)=λ²+1=0 gir λ=±i — rent imaginære (a=0) ⇒ senter, marginalt stabilt med lukkede baner.",
    },
    {
      question: "Hvorfor må du finne egenvektorene ved radreduksjon og ikke ved gjetting?",
      options: ["Fordi en liten fortegns- eller regnefeil i egenvektoren forplanter seg til hele løsningen", "Fordi gjetting bare fungerer for symmetriske matriser, og de fleste systemer er usymmetriske", "Fordi radreduksjon samtidig gir egenverdiene, slik at du slipper den karakteristiske likningen", "Fordi egenvektorene ellers ikke blir normaliserte til lengde 1, som kreves i sluttsvaret"],
      explanation: "Egenvektoren bærer retningen i hver grunnløsning; en feil der ødelegger alt. Radreduser (A-λI)v=0 og les av — og sjekk med Av=λv.",
    },
    {
      question: "Hva er kortsjekken for stabilitet uansett om egenverdiene er reelle eller komplekse?",
      options: ["Se på fortegnet til realdelen: alle Re λ<0 gir asymptotisk stabilitet", "Se på determinanten det A: er den positiv, er systemet alltid stabilt", "Se på sporet tr A alene: negativt spor garanterer at alle baner går mot origo", "Se på den største egenverdien i absoluttverdi, som styrer hele langtidsatferden"],
      explanation: "Stabiliteten leses av fortegnet til realdelene: alle Re λ<0 ⇒ asymptotisk stabil, noen Re λ>0 ⇒ ustabil, rent imaginære ⇒ marginal. For reelle egenverdier er Re λ bare λ selv.",
    },
    {
      question: "Ved omforming av y''+py'+qy=0 til system: hva er sluttsvaret y(t)?",
      options: ["Den første komponenten x₁ i systemløsningen, siden x₁=y ble satt i omformingen", "Summen x₁+x₂ av begge komponentene, fordi begge inneholder informasjon om y", "Den andre komponenten x₂, ettersom den er den deriverte og bærer dynamikken", "Produktet x₁·x₂ av komponentene, som gjenskaper det opprinnelige andregradsuttrykket"],
      explanation: "Siden x₁=y ble valgt i omformingen, er y(t)=x₁(t) — bare den første komponenten. Den andre komponenten x₂=y' er den deriverte.",
    },
  ],
  'tma4110-11-1': [
    {
      question: "Hva innebærer hjelpemiddelkode E på denne eksamenen?",
      options: ["Ingen hjelpemidler — verken kalkulator eller formelsamling, så hele apparatet må sitte utenat", "Alle trykte hjelpemidler er tillatt, men digitale verktøy som kalkulator er forbudt hele tiden", "Kalkulator uten grafisk skjerm er tillatt sammen med en offisiell formelsamling fra instituttet", "Ingen hjelpemidler i del 1, men full tilgang til formelsamling og kalkulator i del 2 av eksamen"],
      explanation: "Kode E betyr ingen hjelpemidler i det hele tatt. Derfor må de Moivre, egenverdiprosedyren, de tre ODE-tilfellene, Gram–Schmidt og normallikningene kunnes utenat — det er grunnen til den store utenat-banken.",
    },
    {
      question: "Fra hvilke kolonner henter du en basis for kolonnerommet Col A?",
      options: ["De opprinnelige kolonnene i A som svarer til pivotposisjonene i RREF", "Pivotkolonnene i RREF, altså kolonnene som inneholder de ledende enerne", "Alle kolonnene i A, siden hele matrisen til sammen spenner ut kolonnerommet", "De frie kolonnene i RREF, altså de uten pivot, satt sammen til en basis"],
      explanation: "Radreduksjon endrer kolonnerommet, så RREF-kolonnene ligger ikke i Col A. RREF forteller bare HVOR pivotene er; basisvektorene tas fra de tilsvarende originalkolonnene i A. Dette er den mest sanksjonerte føringsfellen i sjanger E.",
    },
    {
      question: "Hvordan finner du en basis for nullrommet Nul A?",
      options: ["Fra RREF: la hver fri variabel være parameter og les av retningsvektorene", "Fra originalmatrisen A ved å plukke ut de kolonnene som ikke har pivot", "Ved å transponere A og lese kolonnerommet til den transponerte matrisen", "Ved å regne ut egenvektorene til A som hører til egenverdien null i spekteret"],
      explanation: "For Nul A SKAL du bruke RREF (i motsetning til Col A): løs Ax=0 på parameterform, la hver fri variabel være parameter, og retningsvektorene danner en basis. Antall basisvektorer = antall frie variabler.",
    },
    {
      question: "Hva sier de Moivres formel?",
      options: ["(cos θ + i sin θ)^n = cos nθ + i sin nθ — opphøy modulus, multipliser argumentet", "(cos θ + i sin θ)^n = n(cos θ + i sin θ) — potensen fordeles som en faktor foran", "(cos θ + i sin θ)^n = cos(θ/n) + i sin(θ/n) — argumentet deles på eksponenten n", "(cos θ + i sin θ)^n = cos^n θ + i sin^n θ — hver trigonometrisk del opphøyes hver for seg"],
      explanation: "de Moivre: z^n = r^n e^{inθ}, altså (cos θ + i sin θ)^n = cos nθ + i sin nθ. Modulus opphøyes i n, argumentet multipliseres med n. Grunnlaget for både potenser og n-te røtter.",
    },
    {
      question: "Hvordan ligger de n løsningene av z^n = c i det komplekse planet?",
      options: ["Jevnt fordelt på en sirkel med radius |c|^(1/n), med vinkelavstand 2π/n", "På en rett linje gjennom origo, med lik avstand mellom nabopunktene langs linja", "Alle i samme punkt |c|^(1/n) på den positive reelle aksen, som en n-dobbel rot", "Spredt tilfeldig innenfor sirkelen med radius |c|, uten noe fast vinkelmønster"],
      explanation: "Alle n røttene har samme modulus |c|^(1/n) og ligger derfor på én sirkel, jevnt fordelt med vinkelavstand 2π/n. Skriv c=Re^{iφ}; da er z_k = R^(1/n) e^{i(φ+2πk)/n}, k=0,…,n-1.",
    },
    {
      question: "Når er en n×n-matrise A diagonaliserbar?",
      options: ["Når A har n lineært uavhengige egenvektorer, altså geometrisk = algebraisk multiplisitet for hver egenverdi", "Når A har minst én reell egenverdi som er forskjellig fra alle de andre egenverdiene", "Alltid, så lenge determinanten er forskjellig fra null slik at matrisen er inverterbar", "Bare når alle egenverdiene er positive og matrisen i tillegg er symmetrisk om diagonalen"],
      explanation: "A er diagonaliserbar nettopp når den har n lineært uavhengige egenvektorer, dvs. geometrisk multiplisitet = algebraisk multiplisitet for hver egenverdi. Tilstrekkelig (ikke nødvendig): n distinkte egenverdier, eller A symmetrisk. Begrunn alltid.",
    },
    {
      question: "I diagonaliseringen A=PDP^{-1}, hvordan skal P og D matches?",
      options: ["Kolonne i i P er egenvektoren som hører til egenverdien i posisjon (i,i) i D", "Egenverdiene sorteres alltid stigende i D, uavhengig av rekkefølgen på egenvektorene i P", "P inneholder egenverdiene på diagonalen og D inneholder egenvektorene som kolonner", "Rekkefølgen er likegyldig så lenge både P og D inneholder de riktige tallene et sted"],
      explanation: "Kolonne i i P må være egenvektoren til egenverdien som står i posisjon (i,i) i D. Feilmatchet P/D er en klassisk føringsfelle — da gir PDP^{-1} ikke A tilbake.",
    },
    {
      question: "Hva er normallikningene i minste kvadraters metode?",
      options: ["A^T A x̂ = A^T b — det systemet som gir den beste tilnærmede løsningen av Ax=b", "A x̂ = b, men der man runder hver komponent til nærmeste hele tall til slutt", "A^T A = A^T b, en likhet mellom to matriser som bestemmer koeffisientene direkte", "A x̂ = A^T b, der man ganger høyresiden med den transponerte for å skalere den"],
      explanation: "Normallikningene er A^T A x̂ = A^T b. Har A lineært uavhengige kolonner, er A^T A inverterbar og x̂=(A^T A)^{-1}A^T b. Dette er verktøyet for kurvetilpasning (sjanger I). Navngi det i føringen.",
    },
    {
      question: "Hva sier dimensjonsteoremet (rang–nullitet)?",
      options: ["rang A + dim Nul A = n, der n er antall kolonner i matrisen", "rang A · dim Nul A = n, altså produktet av rangen og nullitetsdimensjonen", "rang A + dim Col A = n, siden kolonnerommet og rangen begge teller pivoter", "dim Nul A − rang A = n, som differansen mellom nullrom og kolonnerom"],
      explanation: "rang A + dim Nul A = n (antall kolonner). Her er rang A = dim Col A = antall pivoter. Bruk teoremet som kontroll: teller basisene dine og summen ikke blir n, har du en feil.",
    },
    {
      question: "Ved resonans i en 2. ordens ODE — hva gjør du med ansatsen for y_p?",
      options: ["Ganger hele ansatsen med x^s, der s er multiplisiteten til den kolliderende roten", "Bytter fortegn på pådraget g(x) og prøver den samme ansatsen på nytt en gang til", "Dropper den partikulære løsningen og bruker bare den homogene løsningen y_h", "Deler ansatsen på x for å fjerne leddet som allerede finnes i den homogene delen"],
      explanation: "Resonansregelen: kolliderer standardansatsen med et ledd i y_h, gang hele ansatsen med x^s, der s er multiplisiteten (s=1 enkel rot, s=2 dobbel). Å glemme x^s er den dyreste feilen i sjanger L.",
    },
    {
      question: "Hvilket utsagn er ekvivalent med at en kvadratisk matrise A er inverterbar?",
      options: ["det A ≠ 0, som igjen er ekvivalent med at Nul A = {0} og at kolonnene er uavhengige", "det A = 0, siden en inverterbar matrise nettopp har forsvinnende determinant", "A er symmetrisk, altså at A er lik sin egen transponerte matrise A^T", "A har minst én egenverdi lik null blant løsningene av den karakteristiske likningen"],
      explanation: "Etter inverterbarhetssetningen er A inverterbar ⇔ det A ≠ 0 ⇔ Nul A = {0} ⇔ rang A = n ⇔ kolonnene er en basis. Du kan bytte fritt mellom betingelsene og navngi setningen i bevis og føring.",
    },
    {
      question: "Hvorfor skal du oppgi eksakte svar (ikke desimaler) under kode E?",
      options: ["Desimaltilnærming signaliserer kalkulatorbruk, som ikke er tillatt, og trekker ned — svar som 1/2, √2 og e^{iπ/3} står eksakt", "Fordi desimaler alltid blir feil, siden alle svar i faget tilfeldigvis er hele tall", "Fordi eksakte svar er raskere å skrive enn desimaler når man regner for hånd på papir", "Det er egentlig likegyldig; både desimalsvar og eksakte brøker gir full uttelling på eksamen"],
      explanation: "Under kode E oppgis alt eksakt: brøker forkortes, røtter og e/π står som symboler. Et desimalsvar tyder på kalkulator (ikke tillatt) og gir trekk. Eksempel: skriv 9/10, ikke 0,9.",
    },
    {
      question: "Hva må gjelde før du bruker projeksjonsformelen proj_W y = Σ (⟨y,v_j⟩/⟨v_j,v_j⟩) v_j?",
      options: ["Basisen {v_1,…,v_p} for W må være ortogonal, ellers gir formelen feil projeksjon", "Vektoren y må allerede ligge i underrommet W før man i det hele tatt projiserer", "Alle basisvektorene må ha lengde nøyaktig 1, altså være normaliserte enhetsvektorer", "Underrommet W må ha samme dimensjon som hele rommet vektoren y lever i"],
      explanation: "Projeksjonsformelen krever en ORTOGONAL basis for W. Er basisen ikke ortogonal, kjør Gram–Schmidt først. (Normalisering til lengde 1 er ikke nødvendig — nevneren ⟨v_j,v_j⟩ tar høyde for lengden.)",
    },
    {
      question: "Hva sier Eulers formel?",
      options: ["e^{iθ} = cos θ + i sin θ, broa mellom eksponentialfunksjon og trigonometri", "e^{iθ} = cos θ − i sin θ, med negativt fortegn foran det imaginære sinusleddet", "e^{iθ} = i(cos θ + sin θ), der i settes utenfor som en felles faktor foran", "e^{iθ} = 1 + iθ, den lineære tilnærmingen som gjelder eksakt for alle vinkler θ"],
      explanation: "Eulers formel: e^{iθ} = cos θ + i sin θ. Den gir polarformen z = r e^{iθ} og ligger bak de Moivre. Spesialtilfellet θ=π gir e^{iπ} = −1.",
    },
  ],
  'tma4110-11-2': [
    {
      question: "Hva er det første steget i et «vis at …»-bevis?",
      options: ["Skriv opp gitt (forutsetningene) og skal-vises (påstanden) hver for seg", "Sett opp et konkret 2×2-eksempel og regn deg gjennom det for å se mønsteret", "Anta alltid at påstanden er usann og let umiddelbart etter en motsigelse", "Slå opp det aktuelle teoremet og skriv det av ordrett som en innledning"],
      explanation: "Første steg er å skille det du VET fra det du SKAL frem til. Det gir struktur, hindrer sirkelargumentasjon (å bruke det du skal vise), og gir ofte delpoeng i seg selv.",
    },
    {
      question: "Hvorfor er et konkret tallesempel ikke et gyldig bevis for en generell påstand?",
      options: ["At noe stemmer for én matrise sier ingenting om alle matriser — beviset må gjelde en vilkårlig A", "Fordi tallesempler alltid inneholder regnefeil som gjør konklusjonen upålitelig", "Fordi et eksempel bare kan brukes til å motbevise, aldri til å illustrere en idé", "Det er faktisk et gyldig bevis så lenge tallene i eksempelet er tilstrekkelig store og valgt helt tilfeldig av deg"],
      explanation: "Et «for alle»-utsagn må bevises for en vilkårlig matrise som bare oppfyller forutsetningen. Ett eksempel viser ikke at påstanden gjelder generelt. (Ett moteksempel kan derimot FELLE en påstand.)",
    },
    {
      question: "Hva kreves for å bevise en «hvis og bare hvis»-påstand (P ⇔ Q)?",
      options: ["To separate bevis: både P ⇒ Q og Q ⇒ P må vises hver for seg", "Ett bevis for P ⇒ Q holder, siden den motsatte veien følger automatisk", "Man viser at P og Q har samme sannhetsverdi ved å sette opp en verditabell", "Man beviser bare den retningen som er lettest, og påpeker at den andre er triviell"],
      explanation: "En ekvivalens krever BEGGE retninger: P ⇒ Q og Q ⇒ P, vist hver for seg. Å vise bare den ene halvparten er den vanligste bevis-fellen i sjanger N.",
    },
    {
      question: "La A ha A²=A, og la λ være en egenverdi. Hva blir konklusjonen?",
      options: ["λ er 0 eller 1, fordi Av=λv gir λ²v=λv, og v≠0 tvinger λ²=λ", "λ kan være et hvilket som helst reelt tall, siden A²=A ikke begrenser spekteret", "λ er alltid lik 1, fordi en idempotent matrise oppfører seg som identiteten", "λ må være negativ eller null, siden kvadreringen ikke kan øke egenverdien"],
      explanation: "Av=λv gir A²v=λ²v, mens A²=A gir A²v=Av=λv. Altså λ²v=λv, så (λ²−λ)v=0. Med v≠0 må λ²−λ=λ(λ−1)=0, altså λ=0 eller λ=1.",
    },
    {
      question: "Hvorfor er forutsetningen v≠0 avgjørende i et egenverdibevis?",
      options: ["Den lar deg konkludere fra (λ²−λ)v=0 at skalaren λ²−λ selv er null", "Den garanterer at egenverdien λ blir et positivt tall i sluttsvaret", "Den sikrer at matrisen A er inverterbar slik at man kan dele på A", "Den er egentlig unødvendig; beviset fungerer like godt med v=0"],
      explanation: "Fra (λ²−λ)v=0 kan du bare slutte at λ²−λ=0 fordi v≠0 (en ikke-null-vektor ganget med en skalar er null bare hvis skalaren er null). Med v=0 ville enhver λ «passet» — derfor krever definisjonen av egenverdi v≠0.",
    },
    {
      question: "For en nilpotent matrise med A^k=O, hva er (I−A)^{-1}?",
      options: ["I + A + A² + … + A^{k−1}, den endelige geometriske matriseserien", "I − A + A² − A³ + …, en alternerende serie som fortsetter i det uendelige", "(I + A)^{k}, altså identiteten pluss A opphøyd i nilpotensgraden k", "Matrisen finnes ikke, siden en nilpotent A gjør I−A singulær"],
      explanation: "For nilpotent A (A^k=O) er (I−A)^{-1} = I+A+A²+…+A^{k−1}. Det vises ved (I−A)(I+A+…+A^{k−1}) = I−A^k = I. Serien stopper fordi A^k=O — ingen konvergens trengs.",
    },
    {
      question: "Hvordan viser du at M = I+A+A² er inversen til I−A når A³=O?",
      options: ["Gang ut og vis at både (I−A)M=I og M(I−A)=I, ved at leddene teleskoperer til I−A³", "Regn ut determinanten til I−A og sjekk at den er forskjellig fra null", "Sett inn en konkret nilpotent matrise og bekreft at produktet blir identiteten", "Vis at M og I−A har samme egenverdier, som medfører at de er inverse"],
      explanation: "Definisjonen av invers krever at produktet er I begge veier. (I−A)(I+A+A²) = I−A³, og A³=O gir I. Samme regning fra andre siden. Teleskoperingen er kjernen.",
    },
    {
      question: "Hva er skalar-trikset som kobler Nul(A^T A) til Nul(A)?",
      options: ["x^T A^T A x = ‖Ax‖² ≥ 0, så A^T A x = 0 medfører ‖Ax‖=0, altså Ax=0", "det(A^T A) = (det A)², så nullrommene er like når determinanten er positiv", "A^T A = A², slik at de to matrisene har nøyaktig samme nullrom per definisjon", "(A^T A)^{-1} = A^{-1}(A^T)^{-1}, som viser at nullrommet alltid er trivielt"],
      explanation: "x^T A^T A x = (Ax)^T(Ax) = ‖Ax‖². Er A^T A x=0, så er x^T A^T A x=0, altså ‖Ax‖²=0, som gir Ax=0. Dette gir Nul(A^T A)=Nul(A) — lemmaet bak normallikningene og AᵀA-beviset.",
    },
    {
      question: "Hvis A er inverterbar, hvorfor er A^T A også inverterbar?",
      options: ["Fordi A^T er inverterbar (siden (A^{-1})^T=(A^T)^{-1}), og produkt av inverterbare er inverterbart", "Fordi A^T A alltid er symmetrisk, og enhver symmetrisk matrise er automatisk inverterbar uansett hva A måtte være", "Fordi A^T A = A², og en potens av en inverterbar matrise er inverterbar", "Fordi determinanten til A^T A er null, som kjennetegner en inverterbar matrise"],
      explanation: "A inverterbar ⇒ A^T inverterbar (transponert av invers er invers av transponert). Produktet av to inverterbare matriser er inverterbart, så A^T A er inverterbar med (A^T A)^{-1}=A^{-1}(A^T)^{-1}.",
    },
    {
      question: "La λ være egenverdi for A med egenvektor v. Hva gjelder for A^k?",
      options: ["λ^k er egenverdi for A^k med samme egenvektor v, vist ved induksjon", "λ/k er egenverdi for A^k, siden potensen fordeles på egenverdien", "A^k har ingen egenverdier relatert til λ med mindre A er diagonaliserbar", "kλ er egenverdi for A^k, ved at potensen trekkes ut som en faktor"],
      explanation: "Induksjon: A^{k+1}v = A(A^k v) = A(λ^k v) = λ^k(Av) = λ^{k+1}v. Basis k=1 er gitt. Så λ^k er egenverdi for A^k med samme egenvektor v (og v≠0).",
    },
    {
      question: "Hva må du vise for at en delmengde W skal være et underrom?",
      options: ["At 0 ligger i W, og at W er lukket under både addisjon og skalarmultiplikasjon", "At W inneholder minst to lineært uavhengige vektorer som utspenner rommet", "At W er endelig, slik at man kan liste opp alle elementene i mengden", "At W har samme dimensjon som rommet det er en delmengde av"],
      explanation: "De tre underrom-betingelsene: (1) 0 ∈ W, (2) lukket under addisjon, (3) lukket under skalarmultiplikasjon. I sjanger D må alle tre verifiseres eksplisitt — «det ser lukket ut» gir ikke uttelling.",
    },
    {
      question: "Hva er forskjellen på v v^T og v^T v?",
      options: ["v^T v er skalaren ‖v‖², mens v v^T er en n×n-matrise med rang høyst 1", "v v^T er skalaren ‖v‖², mens v^T v er en n×n-matrise med full rang", "Begge er skalarer, men v v^T er alltid dobbelt så stor som v^T v", "Begge er matriser; forskjellen er bare rekkefølgen på radene og kolonnene"],
      explanation: "v^T v (rad × kolonne) er et tall, nemlig ‖v‖². v v^T (kolonne × rad) er en n×n-matrise med rang ≤ 1. Forvekslingen er en klassisk feilkilde i AᵀA-bevis — sjekk dimensjonene.",
    },
    {
      question: "Hva er et kontrapositivt bevis av P ⇒ Q?",
      options: ["Man viser den logisk ekvivalente påstanden «ikke Q ⇒ ikke P» i stedet", "Man antar P og Q samtidig og utleder en selvmotsigelse fra begge", "Man viser Q ⇒ P, altså den omvendte implikasjonen, som er det samme", "Man deler beviset i tilfeller og behandler P og Q hver for seg"],
      explanation: "P ⇒ Q er logisk ekvivalent med ¬Q ⇒ ¬P (kontrapositivet). Å bevise kontrapositivet er ofte lettere når «ikke Q» er en grei forutsetning å jobbe med. Merk: dette er ikke det samme som Q ⇒ P.",
    },
    {
      question: "Hvordan viser du at v_1, v_2 (egenvektorer for ulike egenverdier λ_1 ≠ λ_2) er lineært uavhengige?",
      options: ["Sett c_1v_1+c_2v_2=0, gang med A og med λ_1, trekk fra og få c_2(λ_2−λ_1)v_2=0, som tvinger c_2=0", "Regn ut determinanten av matrisen [v_1 v_2] og vis at den er forskjellig fra null, noe som følger direkte av at egenverdiene er ulike", "Vis at v_1 og v_2 står vinkelrett på hverandre, altså at v_1·v_2=0", "Bruk at egenvektorer for en symmetrisk matrise alltid utgjør en ortonormal basis"],
      explanation: "Anta c_1v_1+c_2v_2=0. Gang med A: c_1λ_1v_1+c_2λ_2v_2=0. Gang originalen med λ_1: c_1λ_1v_1+c_2λ_1v_2=0. Trekk fra: c_2(λ_2−λ_1)v_2=0. Med v_2≠0 og λ_2≠λ_1 blir c_2=0, deretter c_1=0. (Egenvektorer for ulike egenverdier trenger ikke være ortogonale med mindre A er symmetrisk.)",
    },
  ],
  'tma4110-11-3': [
    {
      question: "Øvingseksamen 1 er kalibrert på «den typiske eksamenen». Hvilken form har settet?",
      options: ["Rundt 10 likt vektede deloppgaver, 4 timer, kode E, og ingen flervalg — alt er langsvar", "Tre store oppgaver med ulik vekt, 5 timer, og adgang til godkjent formelsamling", "En blanding av flervalg og korte regnesvar uten krav om begrunnelse, over 3 timer", "To deler, én uten og én med hjelpemidler, der bare del 2 gir uttelling til slutt"],
      explanation: "Den stabile malen er ~10 likt vektede deloppgaver, 4 timer, hjelpemiddelkode E (ingen hjelpemidler), ingen flervalg. Instruksen er «alle svar skal begrunnes», så alt er langsvar. Snittid ~24 min per deloppgave.",
    },
    {
      question: "I oppgave 1 skal du løse z³=8i. Hvor mange løsninger har den, og hvordan ligger de?",
      options: ["Tre løsninger, jevnt fordelt med 120° på sirkelen med radius 2", "Én løsning, siden 8i er et rent imaginært tall uten reell komponent", "Seks løsninger, tre fra realdelen og tre fra imaginærdelen hver for seg", "To løsninger som er komplekst konjugerte av hverandre om den reelle aksen"],
      explanation: "z³=8i har tre løsninger (n=3), alle med modulus 8^(1/3)=2, jevnt fordelt med 2π/3=120°. De er √3+i, −√3+i og −2i. Oppgi alle tre på x+iy-form.",
    },
    {
      question: "I oppgave 2 (parametersystem) reduseres siste rad til (a−7)z = b−7. Når har systemet uendelig mange løsninger?",
      options: ["Når a=7 og b=7, slik at siste rad blir 0=0 og gir én fri variabel", "Når a=7 og b≠7, slik at siste rad blir en selvmotsigelse uten løsning", "Når a≠7, uansett verdi av b, siden pivoten da finnes i alle tre kolonner", "Aldri, fordi et system med tre likninger og tre ukjente alltid har én løsning"],
      explanation: "Med (a−7)z=b−7: a≠7 gir én løsning; a=7 og b≠7 gir 0=b−7≠0 (ingen løsning); a=7 og b=7 gir 0=0, altså én fri variabel og uendelig mange løsninger. Parameterform: (−1,2,0)+t(1,−2,1).",
    },
    {
      question: "I oppgave 4 er A=[[2,1],[1,2]] diagonaliserbar. Hva er den beste begrunnelsen?",
      options: ["Den har to distinkte egenverdier (3 og 1), og er dessuten symmetrisk — begge sikrer diagonaliserbarhet", "Determinanten er 3, altså forskjellig fra null, så matrisen er inverterbar og dermed diagonaliserbar", "Alle elementene er positive heltall, noe som alltid garanterer en full egenvektorbasis", "Matrisen er 2×2, og alle 2×2-matriser kan diagonaliseres uansett egenverdier"],
      explanation: "To distinkte egenverdier (λ=3 og λ=1) gir to lineært uavhengige egenvektorer ⇒ diagonaliserbar; A er dessuten symmetrisk. Begrunn ALLTID — inverterbarhet eller «det er en 2×2» er ikke gyldige argumenter for diagonaliserbarhet.",
    },
    {
      question: "I oppgave 6 skal y''−3y'+2y=2e^{3x} løses. Er det resonans, og hvorfor/hvorfor ikke?",
      options: ["Nei — røttene er 1 og 2, og pådragets α=3 er ikke en rot, så ansatsen Ae^{3x} brukes direkte", "Ja — pådraget e^{3x} treffer alltid systemets egenfrekvens uansett hva røttene er", "Ja — fordi tallet 3 i eksponenten er større enn begge røttene i den karakteristiske likningen", "Nei — det er aldri resonans når høyresiden er en eksponentialfunksjon av formen e^{αx}"],
      explanation: "Røttene er r=1,2. Pådraget har α=3, som ikke er en rot, så ingen resonans — ansats y_p=Ae^{3x} gir A=1. Selv om det ikke er resonans, gir det uttelling å skrive resonanssjekken eksplisitt.",
    },
  ],
  'tma4110-11-4': [
    {
      question: "Øvingseksamen 2 er vridd mot restsjangrene. Hvilke temaer legger settet ekstra vekt på?",
      options: ["Abstrakt vektorrom (P₂), lineær transformasjon, minste kvadrater og system av differensiallikninger", "Bare komplekse tall og egenverdier, de to sjangrene som kommer aller oftest på eksamen", "Utelukkende numerisk avrunding og overslagsregning, drillet i mange varianter etter hverandre", "Utelukkende radreduksjon og Gauss-eliminasjon, drillet i mange varianter etter hverandre"],
      explanation: "Sett 2 dekker restsjangrene sett 1 ikke rakk: abstrakt vektorrom (P₂), lineær transformasjon T(p)=p', minste kvadrater og ODE-system, alt innenfor lineær algebra og vanlige differensiallikninger.",
    },
    {
      question: "I oppgave 3 er W={p i P₂ : p(1)=0}. Hva er dimensjonen til W?",
      options: ["2, med basis {x−1, x²−1}, siden betingelsen p(1)=0 fjerner én frihetsgrad fra P₂", "3, siden W arver hele dimensjonen til P₂ uten at noen betingelse reduserer den", "1, fordi bare nullpolynomet oppfyller p(1)=0 blant polynomene av grad høyst 2", "0, ettersom kravet p(1)=0 er så strengt at ingen ikke-trivielle polynomer passer"],
      explanation: "P₂ har dimensjon 3. Betingelsen p(1)=0, dvs. a+b+c=0, er én lineær likning som fjerner én frihetsgrad, så dim W=2. En basis er {x−1, x²−1} (begge har verdien 0 i x=1).",
    },
    {
      question: "I oppgave 4 er T(p)=p' på P₂ med basis {1,x,x²}. Hva er ker T og im T?",
      options: ["ker T = konstantene (dim 1), im T = P₁ (dim 2), og 1+2=3 bekrefter dimensjonsteoremet", "ker T = {0} (dim 0), im T = hele P₂ (dim 3), siden derivasjon er en injektiv avbildning", "ker T = P₁ (dim 2), im T = konstantene (dim 1), fordi derivasjon hever polynomgraden", "ker T = hele P₂ (dim 3), im T = {0} (dim 0), ettersom den deriverte alltid blir null"],
      explanation: "T(p)=p'=0 ⇔ p konstant, så ker T=Span{1}, dim 1. Derivasjon senker graden, så im T=Span{1,x}=P₁, dim 2. Dimensjonsteoremet: 1+2=3=dim P₂.",
    },
    {
      question: "I oppgave 5 tilpasses en rett linje til data. Hvilket system løser du?",
      options: ["Normallikningene A^T A β̂ = A^T y, der A har en kolonne med 1-ere og en med x-verdiene", "Det opprinnelige Aβ=y direkte, siden en rett linje alltid går gjennom alle datapunktene", "Egenverdilikningen det(A−λI)=0 for datamatrisen, og velger den største egenverdien", "Den karakteristiske likningen til en differensiallikning som datapunktene tilfredsstiller"],
      explanation: "Minste kvadrater løses via normallikningene A^T A β̂ = A^T y. A bygges med en kolonne 1-ere (konstantleddet) og en kolonne med x-verdiene. Svaret her blir y = 9/10 + (2/5)x.",
    },
    {
      question: "I oppgave 6 har systemet x'=Ax komplekse egenverdier 1±2i. Hvordan får du den reelle løsningen, og hva slags likevekt er origo?",
      options: ["Ta real- og imaginærdel av den komplekse løsningen e^{(1+2i)t}v; Re λ=1>0 gir en ustabil spiral", "Legg sammen to komplekse eksponentialer med komplekse konstanter; origo blir et stabilt senter", "Bruk bare den reelle delen av egenverdien og ignorer den imaginære; origo blir en sadel", "Diagonaliser A over de reelle tallene direkte; origo blir en stabil node siden sporet er positivt"],
      explanation: "Ved komplekse egenverdier a±bi tar du real- og imaginærdel av e^{(a+bi)t}v — det gir to reelle basisløsninger. Her er a=Re λ=1>0, så origo er en ustabil spiral (spiralkilde); e^{t} gjør at banene spiralerer utover.",
    },
  ],
  'tma4110-11-5': [
    {
      question: "Øvingseksamen 3 er kalibrert på de vanskeligste variantene. Hvilke to feller advarer settet spesielt mot?",
      options: ["Å bruke standard prikkprodukt i et integral-indreprodukt (O4), og å glemme resonansfaktoren x (O5)", "Å skrive for mange desimaler i sluttsvaret (O1), og å bytte om radene og kolonnene når en matrise transponeres (O3)", "Å regne determinanten feil (O2), og å velge feil fortegn på en kvadratrot (O6)", "Å glemme initialbetingelsene (O5), og å bruke for få egenvektorer i en diagonalisering (O7)"],
      explanation: "De to skarpe fellene: i O4 er indreproduktet et integral, så alle skalarprodukt/normer regnes med integralet (ikke prikkproduktet); i O5 er det resonans, så ansatsen må ganges med x. Begge er dokumenterte karakterkostere.",
    },
    {
      question: "I oppgave 1a skal z⁴=−16 løses. Hva kreves for full uttelling?",
      options: ["Alle fire røttene (√2±√2i og −√2±√2i) oppgitt eksakt, OG en skisse i det komplekse planet", "Den ene reelle løsningen alene, siden −16 er et reelt tall og de øvrige imaginære røttene trygt kan utelates", "En desimaltilnærming av de fire røttene, avrundet til to gjeldende siffer hver", "Bare modulusen |z|=2 og antallet røtter, uten å regne ut de enkelte verdiene"],
      explanation: "z⁴=−16 har fire røtter på sirkelen r=2, jevnt med 90°: √2±√2i og −√2±√2i. Oppgaven ber om SKISSE, så et svar uten figur er ufullstendig. Eksakte verdier — ikke desimaler.",
    },
    {
      question: "I oppgave 3 er A=[[3,1],[0,3]] ikke diagonaliserbar. Hvordan vises det?",
      options: ["λ=3 har algebraisk multiplisitet 2, men egenrommet har dimensjon 1 — geometrisk < algebraisk", "Determinanten er 9, altså forskjellig fra null, noe som utelukker diagonalisering", "Matrisen er øvre triangulær, og triangulære matriser kan aldri diagonaliseres", "De to egenverdiene 3 og 3 er like, og like egenverdier gir alltid en diagonaliserbar matrise"],
      explanation: "λ=3 er dobbel (algebraisk multiplisitet 2), men (A−3I)=[[0,1],[0,0]] har nullrom av dimensjon 1 (bare (1,0)). Geometrisk multiplisitet 1 < 2 ⇒ for få uavhengige egenvektorer ⇒ ikke diagonaliserbar. Vis dette eksplisitt.",
    },
    {
      question: "I oppgave 4 brukes indreproduktet ⟨f,g⟩=∫ f g dx over [−1,1]. Hva blir den ortogonale basisen fra Gram–Schmidt på {1,x,x²}?",
      options: ["{1, x, x²−1/3}, der leddet −1/3 kommer fra at ⟨x²,1⟩/⟨1,1⟩ = (2/3)/2", "{1, x, x²}, siden de tre monomene allerede er ortogonale i ethvert indreprodukt", "{1, x−1, x²−x}, ved å trekke fra forrige ledd uten å bruke integralene", "{1, x, x²−1}, der konstanten kommer fra at ⟨x²,1⟩=1 i dette indreproduktet"],
      explanation: "Med integralet: ⟨x,1⟩=0 (odd), så v₂=x. ⟨x²,1⟩=2/3, ⟨1,1⟩=2, ⟨x²,x⟩=0, så v₃=x²−(2/3)/2·1=x²−1/3. Ortogonal basis {1, x, x²−1/3}. Bruk integralet overalt, ikke prikkproduktet.",
    },
    {
      question: "I oppgave 5 skal y''+4y=sin 2x løses. Hva er den avgjørende observasjonen?",
      options: ["±2i er røttene i den karakteristiske likningen, så det er resonans — ansatsen ganges med x", "Pådraget sin 2x er allerede en løsning, så y_p kan settes lik null uten videre regning", "Det er ingen resonans, siden trigonometriske pådrag aldri kolliderer med den homogene delen", "Frekvensen 2 er større enn koeffisienten 4, så systemet er overdempet uten svingninger"],
      explanation: "r²+4=0 gir r=±2i, og pådraget sin 2x svarer nettopp til ±2i ⇒ resonans (s=1). Standardansatsen ligger i y_h, så gang med x: y_p=x(A cos 2x+B sin 2x). Løsningen blir y=(1/8)sin 2x−(1/4)x cos 2x.",
    },
  ],
  'tma4110-2-1': [
    {
      question: "Når er matriseproduktet $AB$ definert?",
      options: ["Når antall kolonner i $A$ er lik antall rader i $B$", "Når $A$ og $B$ har nøyaktig samme format", "Når $A$ og $B$ begge er kvadratiske av samme størrelse", "Når antall rader i $A$ er lik antall kolonner i $B$"],
      explanation: "Er $A$ av format $m\\times n$ og $B$ av $n\\times p$, må de indre tallene ($n$) matche; produktet blir da $m\\times p$.",
    },
    {
      question: "Hvordan finner du elementet i rad $i$, kolonne $j$ av $AB$?",
      options: ["Ta rad $i$ i $A$ mot kolonne $j$ i $B$, gang parvis og summer", "Gang element $(i,j)$ i $A$ med element $(i,j)$ i $B$", "Ta kolonne $i$ i $A$ mot rad $j$ i $B$ og summer", "Legg sammen rad $i$ i $A$ og kolonne $j$ i $B$"],
      explanation: "Rad-gang-kolonne: $(AB)_{ij}=a_{i1}b_{1j}+\\dots+a_{in}b_{nj}$. Produktet er ikke elementvis.",
    },
    {
      question: "Hva gjelder generelt om $AB$ og $BA$ for matriser?",
      options: ["De er vanligvis forskjellige — multiplikasjonen er ikke kommutativ", "De er alltid like, akkurat som for tall", "De er alltid begge definert og like store", "$BA$ er alltid den transponerte av $AB$"],
      explanation: "Matrisemultiplikasjon er ikke kommutativ; ofte er ett produkt ikke engang definert, og selv når begge er, er de vanligvis ulike.",
    },
    {
      question: "Hva sier regelen for transponering av et produkt?",
      options: ["$(AB)^{T}=B^{T}A^{T}$ — rekkefølgen snus", "$(AB)^{T}=A^{T}B^{T}$ — rekkefølgen beholdes", "$(AB)^{T}=AB$ — transponering endrer ingenting", "$(AB)^{T}=(BA)^{T}$ — faktorene kan byttes fritt"],
      explanation: "Transponering av et produkt snur rekkefølgen på faktorene: $(AB)^{T}=B^{T}A^{T}$.",
    },
    {
      question: "Hva kjennetegner en symmetrisk matrise?",
      options: ["Den er lik sin egen transponerte: $A^{T}=A$", "Den er lik den negative transponerte: $A^{T}=-A$", "Alle elementene utenfor diagonalen er null", "Den har bare nuller under hoveddiagonalen"],
      explanation: "Symmetrisk betyr $a_{ij}=a_{ji}$, altså $A^{T}=A$ — matrisen er speilsymmetrisk om hoveddiagonalen.",
    },
    {
      question: "Hvorfor er $A^{T}A$ alltid symmetrisk?",
      options: ["Fordi $(A^{T}A)^{T}=A^{T}(A^{T})^{T}=A^{T}A$", "Fordi $A^{T}A$ alltid er en diagonalmatrise", "Fordi $A^{T}A=AA^{T}$ for enhver $A$", "Fordi $A^{T}A$ alltid er lik identitetsmatrisen"],
      explanation: "Bruk $(XY)^{T}=Y^{T}X^{T}$ og $(A^{T})^{T}=A$: $(A^{T}A)^{T}=A^{T}(A^{T})^{T}=A^{T}A$.",
    },
    {
      question: "Hva betyr $A^{2}$ for en kvadratisk matrise?",
      options: ["Matriseproduktet $AA$", "Matrisen der hvert element er kvadrert", "Matrisen $A$ ganget element for element med $I$", "Den transponerte $A^{T}$ ganget med $A$"],
      explanation: "$A^2=AA$ er et matriseprodukt, ikke elementvis kvadrering.",
    },
    {
      question: "Hva er identitetsmatrisen $I_n$?",
      options: ["Den $n\\times n$-matrisen med $1$-ere på diagonalen og $0$ ellers", "Matrisen der alle elementene er $1$", "En hvilken som helst diagonalmatrise av format $n\\times n$", "Matrisen der alle elementene er $0$"],
      explanation: "$I_n$ har $1$ på hoveddiagonalen og $0$ ellers, og virker som «tallet 1»: $IA=A=AI$.",
    },
    {
      question: "Når er matriseaddisjonen $A+B$ definert?",
      options: ["Når $A$ og $B$ har samme format", "Når antall kolonner i $A$ er lik antall rader i $B$", "Alltid, uansett format på $A$ og $B$", "Bare når $A$ og $B$ begge er kvadratiske"],
      explanation: "Addisjon skjer element for element, så $A$ og $B$ må ha nøyaktig samme format.",
    },
    {
      question: "Hva er en øvre triangulær matrise?",
      options: ["En kvadratisk matrise med bare nuller under hoveddiagonalen", "En kvadratisk matrise med bare nuller over hoveddiagonalen", "En matrise med bare nuller på hoveddiagonalen", "En matrise der alle elementene over diagonalen er like"],
      explanation: "Øvre triangulær: alle elementer under hoveddiagonalen er $0$. Nedre triangulær har nuller over.",
    },
    {
      question: "Hvilken av disse regnereglene gjelder for matriser?",
      options: ["$A(BC)=(AB)C$ (assosiativ lov)", "$AB=BA$ (kommutativ lov)", "$AB=AC$ medfører alltid $B=C$ (forkorting)", "$(AB)^{T}=A^{T}B^{T}$ (rekkefølgen beholdes)"],
      explanation: "Assosiativ lov gjelder. Kommutativitet og forkorting gjelder ikke, og transponering av produkt snur rekkefølgen.",
    },
    {
      question: "Hva blir formatet til $A^{T}$ når $A$ er en $2\\times3$-matrise?",
      options: ["$3\\times2$", "$2\\times3$", "$3\\times3$", "$2\\times2$"],
      explanation: "Transponering bytter roller: rader blir kolonner, så en $2\\times3$-matrise blir $3\\times2$.",
    },
    {
      question: "Hva menes med sporet $\\operatorname{spor}A$?",
      options: ["Summen av diagonalelementene $a_{11}+a_{22}+\\dots+a_{nn}$", "Summen av alle elementene i matrisen", "Produktet av diagonalelementene", "Antall ikke-null elementer på diagonalen"],
      explanation: "Sporet er summen av diagonalelementene; senere ser vi at det er lik summen av egenverdiene.",
    },
    {
      question: "Følger det av $AB=O$ (nullmatrisen) at $A=O$ eller $B=O$?",
      options: ["Nei — to matriser ulik null kan gi nullproduktet", "Ja, minst én av dem må være nullmatrisen", "Ja, begge må være nullmatrisen", "Bare hvis $A$ og $B$ er symmetriske"],
      explanation: "For matriser gjelder ikke nullproduktregelen fra tall: $AB=O$ kan skje uten at noen av faktorene er $O$.",
    },
    {
      question: "Hva er en diagonalmatrise?",
      options: ["En kvadratisk matrise med bare nuller utenfor hoveddiagonalen", "En matrise der hoveddiagonalen bare inneholder nuller", "En matrise med like mange rader som kolonner, uansett innhold", "En matrise som er lik sin egen transponerte"],
      explanation: "En diagonalmatrise har $a_{ij}=0$ for $i\\ne j$; bare diagonalelementene kan være ulik null.",
    },
    {
      question: "Hva må gjelde for at to matriser skal være like?",
      options: ["Samme format og alle tilsvarende elementer like", "Samme spor og samme determinant", "Samme antall ikke-null elementer", "At den ene er den transponerte av den andre"],
      explanation: "$A=B$ betyr at de har samme format og $a_{ij}=b_{ij}$ for alle $i,j$.",
    },
  ],
  'tma4110-2-2': [
    {
      question: "Hva kjennetegner den inverse matrisen $A^{-1}$?",
      options: ["$AA^{-1}=A^{-1}A=I$", "$AA^{-1}=A^{-1}A=A$", "$A^{-1}$ er den transponerte av $A$", "$A+A^{-1}=I$"],
      explanation: "Inversen «nøytraliserer» $A$ fra begge sider: $AA^{-1}=A^{-1}A=I$.",
    },
    {
      question: "Hva er inversen til $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$ når $ad-bc\\ne0$?",
      options: ["$\\frac{1}{ad-bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}$", "$\\frac{1}{ad-bc}\\begin{bmatrix}a&-b\\\\-c&d\\end{bmatrix}$", "$\\frac{1}{ad-bc}\\begin{bmatrix}d&b\\\\c&a\\end{bmatrix}$", "$\\frac{1}{ad+bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}$"],
      explanation: "Bytt diagonalen, skift fortegn på $b$ og $c$, og del på $\\det A=ad-bc$.",
    },
    {
      question: "Når er en 2×2-matrise singulær (uten invers)?",
      options: ["Når $ad-bc=0$", "Når $ad-bc=1$", "Når $a=d$", "Når alle elementene er positive"],
      explanation: "En matrise er singulær nøyaktig når determinanten er null; for 2×2 er det $ad-bc=0$.",
    },
    {
      question: "Hva sier regelen for inversen til et produkt?",
      options: ["$(AB)^{-1}=B^{-1}A^{-1}$ — rekkefølgen snus", "$(AB)^{-1}=A^{-1}B^{-1}$ — rekkefølgen beholdes", "$(AB)^{-1}=A^{-1}+B^{-1}$", "$(AB)^{-1}=(BA)^{-1}$ — faktorene kan byttes fritt"],
      explanation: "Som for transponert snur rekkefølgen: $(AB)^{-1}=B^{-1}A^{-1}$.",
    },
    {
      question: "Hvordan finner du inversen med Gauss–Jordan-metoden?",
      options: ["Radreduser $[A\\mid I]$ til $[I\\mid A^{-1}]$", "Radreduser $[A\\mid \\mathbf 0]$ til $[I\\mid A^{-1}]$", "Transponer $A$ og del på determinanten", "Radreduser bare $A$ til trappeform"],
      explanation: "Utvid $A$ med $I$, radreduser til venstresiden blir $I$; da står $A^{-1}$ til høyre.",
    },
    {
      question: "Hvilket av disse er ETT av utsagnene i inverterbarhetssetningen?",
      options: ["$\\det A\\ne0$", "$A$ er symmetrisk", "$A$ har bare positive elementer", "$\\operatorname{spor}A\\ne0$"],
      explanation: "$A$ inverterbar $\\Leftrightarrow$ $\\det A\\ne0$ $\\Leftrightarrow$ $\\operatorname{rang}A=n$ $\\Leftrightarrow$ $\\operatorname{Nul}A=\\{\\mathbf 0\\}$ osv. Symmetri og spor er ikke med i kjeden.",
    },
    {
      question: "Hva følger av at $A\\mathbf x=\\mathbf 0$ har bare den trivielle løsningen?",
      options: ["$A$ er inverterbar (alle utsagn i inverterbarhetssetningen holder)", "$A$ er singulær", "$\\det A=0$", "$\\operatorname{rang}A<n$"],
      explanation: "$\\operatorname{Nul}A=\\{\\mathbf 0\\}$ er ett av de ekvivalente utsagnene; da er $A$ inverterbar, $\\det A\\ne0$ og $\\operatorname{rang}A=n$.",
    },
    {
      question: "Hva er $(I-A)^{-1}$ når $A^{3}=O$ (Neumann-trikset)?",
      options: ["$I+A+A^{2}$", "$I-A+A^{2}$", "$I+A+A^{2}+A^{3}$", "$I-A-A^{2}$"],
      explanation: "For nilpotent $A$ med $A^3=O$ er $(I-A)^{-1}=I+A+A^2$ — den avkortede geometriske rekken.",
    },
    {
      question: "Hvordan løser du $A\\mathbf x=\\mathbf b$ når $A$ er inverterbar?",
      options: ["$\\mathbf x=A^{-1}\\mathbf b$", "$\\mathbf x=A\\mathbf b$", "$\\mathbf x=\\mathbf b A^{-1}$", "$\\mathbf x=A^{T}\\mathbf b$"],
      explanation: "Gang likningen med $A^{-1}$ fra venstre: $A^{-1}A\\mathbf x=A^{-1}\\mathbf b$, altså $\\mathbf x=A^{-1}\\mathbf b$.",
    },
    {
      question: "Hva er sammenhengen mellom $(A^{T})^{-1}$ og $(A^{-1})^{T}$?",
      options: ["De er like: $(A^{T})^{-1}=(A^{-1})^{T}$", "$(A^{T})^{-1}=A^{-1}$", "$(A^{T})^{-1}=-(A^{-1})^{T}$", "$(A^{T})^{-1}=(A^{T})^{T}$"],
      explanation: "Transponer $AA^{-1}=I$: $(A^{-1})^{T}A^{T}=I$, som viser at $(A^{-1})^{T}$ er inversen til $A^{T}$.",
    },
    {
      question: "Hva er en nilpotent matrise?",
      options: ["En matrise der en potens $A^{k}$ er nullmatrisen", "En matrise som er lik sin egen invers", "En matrise med determinant lik 1", "En matrise der alle diagonalelementene er null"],
      explanation: "Nilpotent betyr $A^k=O$ for en eksponent $k\\ge1$. Slike matriser er singulære, men $I-A$ er inverterbar.",
    },
    {
      question: "Er inversen til en matrise entydig?",
      options: ["Ja — hvis en invers finnes, er den den eneste", "Nei, en matrise kan ha flere ulike inverser", "Bare når matrisen er symmetrisk", "Bare for 2×2-matriser"],
      explanation: "Antar man to inverser $B,C$, gir $B=B(AC)=(BA)C=C$. Derfor er inversen entydig — vi skriver $A^{-1}$.",
    },
    {
      question: "Hva er $(A^{-1})^{-1}$?",
      options: ["$A$", "$I$", "$A^{T}$", "$-A$"],
      explanation: "Å invertere to ganger fører tilbake til den opprinnelige matrisen: $(A^{-1})^{-1}=A$.",
    },
    {
      question: "Når er en diagonalmatrise $\\operatorname{diag}(d_1,\\dots,d_n)$ inverterbar?",
      options: ["Når alle diagonalelementene er ulik null", "Når minst ett diagonalelement er null", "Alltid, uansett diagonalelementer", "Bare når alle diagonalelementene er like"],
      explanation: "Er alle $d_i\\ne0$, er inversen $\\operatorname{diag}(1/d_1,\\dots,1/d_n)$. Ett null-element gjør den singulær.",
    },
    {
      question: "Hva blir $(ABC)^{-1}$ når alle er inverterbare?",
      options: ["$C^{-1}B^{-1}A^{-1}$", "$A^{-1}B^{-1}C^{-1}$", "$C^{-1}A^{-1}B^{-1}$", "$A^{-1}C^{-1}B^{-1}$"],
      explanation: "Hele rekkefølgen snus når man inverterer et produkt av flere faktorer.",
    },
    {
      question: "Hva skjer hvis du får en nullrad på venstresiden under Gauss–Jordan på $[A\\mid I]$?",
      options: ["$A$ er singulær og har ingen invers", "$A$ er inverterbar med invers lik $I$", "Du har regnet feil — det kan aldri skje", "Inversen er den transponerte av høyresiden"],
      explanation: "En nullrad på $A$-siden betyr $\\operatorname{rang}A<n$, altså at $A$ er singulær og mangler invers.",
    },
  ],
  'tma4110-2-3': [
    {
      question: "Hva er $\\det\\begin{bmatrix}3&4\\\\1&2\\end{bmatrix}$?",
      options: ["$2$, siden $\\det=ad-bc=3\\cdot2-4\\cdot1=6-4$", "$10$, siden $\\det=ad+bc=3\\cdot2+4\\cdot1=6+4$", "$-2$, siden $\\det=bc-ad=4\\cdot1-3\\cdot2=4-6$", "$11$, siden $\\det=3\\cdot2+1\\cdot5$ regnet langs diagonalen"],
      explanation: "2×2-determinanten er $ad-bc$: hoveddiagonalproduktet $3\\cdot2=6$ minus antidiagonalproduktet $4\\cdot1=4$, altså $2$.",
    },
    {
      question: "En matrise $A$ har $\\det A=0$. Hva følger av determinantkriteriet?",
      options: ["$A$ er singulær, altså ikke inverterbar, og $A\\mathbf x=\\mathbf 0$ har ikke-trivielle løsninger", "$A$ er inverterbar, og $A\\mathbf x=\\mathbf b$ har entydig løsning for hver $\\mathbf b$", "$A$ må være nullmatrisen, siden bare $O$ har determinant $0$", "$A$ er symmetrisk, siden determinanten forsvinner nettopp for symmetriske matriser"],
      explanation: "$\\det A=0$ er kriteriet for at $A$ er singulær: ikke inverterbar, $\\operatorname{rang}A<n$, og $A\\mathbf x=\\mathbf 0$ har ikke-trivielle løsninger.",
    },
    {
      question: "Hva er kofaktorens fortegn $(-1)^{i+j}$ for posisjon $(2,3)$?",
      options: ["$-1$, siden $i+j=2+3=5$ er et oddetall", "$+1$, siden $i+j=2+3=5$ regnes som partall i mønsteret", "$-1$, siden alle kofaktorer utenfor diagonalen har fortegn minus", "$+1$, siden kofaktorer i tredje kolonne alltid har fortegn pluss"],
      explanation: "Fortegnet er $(-1)^{i+j}$. Med $i=2,j=3$ er $i+j=5$, et oddetall, så fortegnet er $-1$ (sjakkbrettmønsteret gir minus i posisjon $(2,3)$).",
    },
    {
      question: "Du skal kofaktorutvikle en 4×4-determinant. Hvilken rad eller kolonne bør du velge?",
      options: ["Den med flest nuller, siden hvert nullelement dreper sitt ledd og sparer en kofaktor", "Alltid første rad, siden kofaktorutvikling per definisjon starter øverst til venstre", "Den med størst tall, siden store tall gir mest nøyaktig determinant", "Diagonalen, siden determinanten uansett bare avhenger av diagonalelementene"],
      explanation: "Svaret blir det samme uansett hvilken rad/kolonne du velger, så velg den med flest nuller: et element $0$ gir et ledd $0$, som du slipper å regne ut.",
    },
    {
      question: "Hva skjer med determinanten når du bytter om to rader i en matrise?",
      options: ["Den skifter fortegn (ganges med $-1$)", "Den ganges med $2$, siden to rader er involvert i byttet", "Den forblir uendret, siden radbytte bare omorganiserer de samme tallene", "Den blir $0$, siden et radbytte ødelegger triangulærformen"],
      explanation: "Å bytte to rader ganger determinanten med $-1$. Teller du antall radbytter, får du riktig fortegn til slutt.",
    },
    {
      question: "Hva skjer med determinanten når du adderer et multiplum av én rad til en annen?",
      options: ["Den er uendret, så dette er den foretrukne operasjonen ved radreduksjon", "Den ganges med multiplumet $k$ du la til, akkurat som ved radskalering", "Den skifter fortegn, på samme måte som når du bytter om to rader", "Den blir produktet av de to involverte radenes tilsvarende elementer"],
      explanation: "Operasjonen «adder multiplum av en rad til en annen» lar determinanten være uendret. Det er nettopp derfor du kan bruke den fritt til å lage nuller ved radreduksjon.",
    },
    {
      question: "For en $n\\times n$-matrise med $\\det A=5$, hva er $\\det(cA)$?",
      options: ["$c^{n}\\cdot 5$, siden hver av de $n$ radene skaleres med $c$", "$c\\cdot 5$, siden skalering ganger determinanten med samme faktor $c$", "$5$, siden skalering av hele matrisen ikke endrer determinanten", "$n\\cdot c\\cdot 5$, siden det er $n$ rader som hver bidrar med $c$"],
      explanation: "Å gange hele matrisen med $c$ skalerer alle $n$ radene med $c$, og hver radskalering ganger determinanten med $c$ — til sammen $c^{n}$. Så $\\det(cA)=c^{n}\\det A$.",
    },
    {
      question: "Hvilken sammenheng gjelder for determinanten av et produkt?",
      options: ["$\\det(AB)=\\det A\\cdot\\det B$ (produktregelen)", "$\\det(AB)=\\det A+\\det B$, akkurat som for sporet", "$\\det(AB)=\\det B\\cdot\\det A^{-1}$ når rekkefølgen snus", "$\\det(AB)$ er ikke definert med mindre $A=B$"],
      explanation: "Produktregelen sier $\\det(AB)=\\det A\\cdot\\det B$. Det finnes derimot ingen tilsvarende sum-regel: $\\det(A+B)\\ne\\det A+\\det B$ generelt.",
    },
    {
      question: "Hva er sammenhengen mellom $\\det A^{T}$ og $\\det A$?",
      options: ["$\\det A^{T}=\\det A$ — transponering endrer ikke determinanten", "$\\det A^{T}=-\\det A$ — transponering skifter fortegn som et radbytte", "$\\det A^{T}=1/\\det A$ — transponering virker som en invers på determinanten", "$\\det A^{T}=(\\det A)^{2}$ — transponering kvadrerer determinanten"],
      explanation: "$\\det A^{T}=\\det A$. En konsekvens er at kofaktorutvikling langs en kolonne gir samme svar som langs en rad.",
    },
    {
      question: "Er $A$ inverterbar, hva er $\\det(A^{-1})$?",
      options: ["$\\dfrac{1}{\\det A}$, siden $\\det A\\cdot\\det(A^{-1})=\\det I=1$", "$-\\det A$, siden invers virker som et fortegnsskifte", "$\\det A$, siden invertering ikke endrer determinanten", "$(\\det A)^{2}$, siden $A^{-1}$ ganges med $A$ i definisjonen"],
      explanation: "Fra $AA^{-1}=I$ gir produktregelen $\\det A\\cdot\\det(A^{-1})=\\det I=1$, så $\\det(A^{-1})=1/\\det A$.",
    },
    {
      question: "Hva er determinanten til en triangulær matrise?",
      options: ["Produktet av diagonalelementene $a_{11}a_{22}\\cdots a_{nn}$", "Summen av diagonalelementene $a_{11}+a_{22}+\\cdots+a_{nn}$", "Produktet av alle elementene over diagonalen", "Alltid $0$, siden en triangulær matrise har nuller på den ene siden"],
      explanation: "For en øvre eller nedre triangulær matrise er determinanten produktet av diagonalelementene. Dette er grunnen til at vi radreduserer til triangulær form.",
    },
    {
      question: "En $3\\times3$-matrise har $\\det A=4$. Hva er $\\det(2A)$?",
      options: ["$32$, siden $\\det(2A)=2^{3}\\det A=8\\cdot4$", "$8$, siden $\\det(2A)=2\\cdot\\det A=2\\cdot4$", "$16$, siden $\\det(2A)=2^{2}\\det A=4\\cdot4$", "$4$, siden skalering av hele matrisen ikke endrer determinanten"],
      explanation: "For en $3\\times3$-matrise ($n=3$) er $\\det(2A)=2^{3}\\det A=8\\cdot4=32$. Potensen er formatet $n=3$, ikke $1$.",
    },
    {
      question: "Hvilket uttrykk gir løsningen $x_i$ i Cramers regel for $A\\mathbf x=\\mathbf b$?",
      options: ["$x_i=\\dfrac{\\det A_i(\\mathbf b)}{\\det A}$, der $A_i(\\mathbf b)$ er $A$ med kolonne $i$ byttet ut med $\\mathbf b$", "$x_i=\\dfrac{\\det A}{\\det A_i(\\mathbf b)}$, der $A_i(\\mathbf b)$ er $A$ med kolonne $i$ byttet ut med $\\mathbf b$", "$x_i=\\det A_i(\\mathbf b)\\cdot\\det A$, der $A_i(\\mathbf b)$ er $A$ med rad $i$ byttet ut med $\\mathbf b$", "$x_i=\\det A-\\det A_i(\\mathbf b)$, der $A_i(\\mathbf b)$ er $A$ med rad $i$ byttet ut med $\\mathbf b$"],
      explanation: "Cramers regel er $x_i=\\det A_i(\\mathbf b)/\\det A$, der telleren er $A$ med kolonne $i$ erstattet av $\\mathbf b$. Den krever $\\det A\\ne0$.",
    },
    {
      question: "Hva er sammenhengen mellom $\\det A$ og egenverdiene $\\lambda_1,\\dots,\\lambda_n$?",
      options: ["$\\det A=\\lambda_1\\lambda_2\\cdots\\lambda_n$ — determinanten er produktet av egenverdiene", "$\\det A=\\lambda_1+\\lambda_2+\\cdots+\\lambda_n$ — determinanten er summen av egenverdiene", "$\\det A=\\max_i\\lambda_i$ — determinanten er den største egenverdien", "$\\det A$ og egenverdiene henger ikke sammen på noen fast måte"],
      explanation: "Determinanten er produktet av egenverdiene, $\\det A=\\prod\\lambda_i$ (mens sporet er summen). Derfor er $\\det A=0$ nettopp når $0$ er en egenverdi.",
    },
    {
      question: "Hvorfor kan du IKKE bruke regelen $\\det(A+B)=\\det A+\\det B$?",
      options: ["Fordi den er usann — det finnes ingen sum-regel for determinanter", "Fordi den bare gjelder når $A$ og $B$ er triangulære", "Fordi den bare gjelder når $\\det A=\\det B$", "Fordi den bare gjelder for $2\\times2$-matriser, ikke større"],
      explanation: "Det finnes ingen sum-regel: $\\det(A+B)\\ne\\det A+\\det B$ generelt. (Produktregelen $\\det(AB)=\\det A\\det B$ gjelder derimot alltid.)",
    },
    {
      question: "Hva er determinanten til en matrise med to like rader?",
      options: ["$0$, siden radbytte gir $\\det A=-\\det A$, som tvinger $\\det A=0$", "$1$, siden like rader gjør matrisen til en identitetslignende form", "Produktet av de to like radenes elementer", "Uendelig, siden matrisen ikke kan radreduseres til triangulær form"],
      explanation: "Bytter du de to like radene, skal determinanten skifte fortegn, men matrisen er uendret. Da må $\\det A=-\\det A$, altså $\\det A=0$.",
    },
    {
      question: "Hvorfor foretrekkes radreduksjon fremfor blind kofaktorutvikling for en 5×5-determinant?",
      options: ["Fordi radreduksjon til triangulær form gir determinanten som produkt av diagonalen med få steg", "Fordi kofaktorutvikling gir systematisk feil svar for matriser som er større enn 3×3", "Fordi radreduksjon alltid gir determinanten $0$, som er langt raskere å skrive ned", "Fordi kofaktorutvikling per definisjon bare er tillatt for symmetriske matriser"],
      explanation: "Blind kofaktorutvikling av en 5×5 forgrener seg til svært mange små determinanter. Radreduksjon (med kontroll på fortegn/skalering) gir triangulær form, og determinanten leses av som produktet av diagonalen.",
    },
    {
      question: "En $4\\times4$-matrise reduseres ved radoperasjoner (kun «adder multiplum») til øvre triangulær form med diagonal $(2,1,3,-1)$. Hva er $\\det A$?",
      options: ["$-6$, siden determinanten er produktet $2\\cdot1\\cdot3\\cdot(-1)$ av triangulær-diagonalen", "$5$, siden determinanten er summen $2+1+3+(-1)$ av triangulær-diagonalen", "$6$, siden fortegnet på diagonalelementene ikke skal regnes med i produktet", "$0$, siden en negativ verdi på diagonalen gjør matrisen singulær og $\\det=0$"],
      explanation: "Operasjonen «adder multiplum av en rad» endrer ikke determinanten, så $\\det A$ er produktet av triangulær-diagonalen: $2\\cdot1\\cdot3\\cdot(-1)=-6$. (Negativ verdi er helt greit; $\\ne0$, så matrisen er inverterbar.)",
    },
  ],
  'tma4110-3-1': [
    {
      question: "Hva er et vektorrom?",
      options: ["En mengde du kan addere og skalere i, slik at de åtte aksiomene holder", "En mengde piler i planet som alltid peker ut fra origo mot et gitter", "Enhver delmengde av $\\mathbb R^n$ uansett hvilken form den måtte ha", "En samling reelle tall som er lukket under multiplikasjon og deling"],
      explanation: "Et vektorrom er en mengde med en addisjon og en skalarmultiplikasjon som oppfyller de åtte regnereglene — vektorene trenger ikke være piler.",
    },
    {
      question: "Hva må du sjekke for at $W$ skal være et underrom?",
      options: ["At $\\mathbf 0\\in W$, og at $W$ er lukket under addisjon og skalarmultiplikasjon", "Bare at mengden $W$ inneholder minst én vektor som er forskjellig fra selve nullvektoren", "At $W$ er lukket under addisjon, men gjerne ikke under skalering med tall", "At alle de åtte vektorromsaksiomene sjekkes på nytt fra bunnen for $W$"],
      explanation: "De tre underromsbetingelsene holder — aksiomene arves fra det omsluttende rommet, så du slipper å sjekke alle åtte.",
    },
    {
      question: "Hva er $\\dim\\operatorname{P}_n$?",
      options: ["$n+1$", "$n$", "$n-1$", "$2n$"],
      explanation: "Byggeklossene er $1,t,\\dots,t^n$ — det er $n+1$ stykker, så $\\dim\\operatorname{P}_n=n+1$.",
    },
    {
      question: "Hvilken betingelse glemmes oftest i et underrom-bevis?",
      options: ["At nullvektoren $\\mathbf 0$ faktisk ligger i mengden $W$", "At $W$ er lukket under addisjon av to vilkårlige elementer", "At $W$ er lukket under skalering med et vilkårlig tall $c$", "At $W$ i det hele tatt er en delmengde av rommet $V$"],
      explanation: "$\\mathbf 0\\in W$ er den vanligst glemte — og en rask motprøve når kravet er «lik et tall $\\ne0$».",
    },
    {
      question: "Hvorfor er $\\{p\\in\\operatorname{P}_2:p(0)=1\\}$ ikke et underrom?",
      options: ["Fordi nullpolynomet har $p(0)=0\\ne1$, så $\\mathbf 0$ mangler i mengden", "Fordi polynomer av grad høyst to ikke kan legges sammen", "Fordi rommet $\\operatorname{P}_2$ i seg selv strengt tatt ikke er et ekte vektorrom i det hele tatt", "Fordi uttrykket $p(0)$ ikke lar seg regne ut for polynomer"],
      explanation: "Kravet $p(0)=1$ setter en verdi lik et tall forskjellig fra $0$; nullpolynomet oppfyller det ikke, så $\\mathbf 0\\notin W$.",
    },
    {
      question: "Er $\\operatorname{Span}\\{\\mathbf v_1,\\dots,\\mathbf v_k\\}$ alltid et underrom?",
      options: ["Ja — det inneholder $\\mathbf 0$ og er lukket under addisjon og skalering", "Nei, bare når vektorene $\\mathbf v_1,\\dots,\\mathbf v_k$ er lineært uavhengige", "Nei, det gjelder utelukkende inne i tallrommene $\\mathbb R^n$", "Ja, men bare dersom antallet $k$ er minst like stort som $n$"],
      explanation: "Span er alltid et underrom: sett alle koeffisienter $0$ for $\\mathbf 0$, og lineærkombinasjoner av lineærkombinasjoner er igjen lineærkombinasjoner.",
    },
    {
      question: "Hva er dimensjonen til de symmetriske $2\\times2$-matrisene?",
      options: ["$3$", "$4$", "$2$", "$1$"],
      explanation: "En symmetrisk $2\\times2$-matrise har frie diagonalelementer og ett felles off-diagonalelement — tre frihetsgrader.",
    },
    {
      question: "Hvilken mengde er IKKE et underrom av $\\mathbb R^2$?",
      options: ["$\\{(x,y):x\\ge 0\\}$ — hele den høyre halvplanen medregnet den loddrette aksen selv", "$\\{(x,y):x+y=0\\}$ — linja gjennom origo med stigning $-1$", "$\\{(x,y):y=2x\\}$ — linja gjennom origo med stigning $2$", "$\\{(0,0)\\}$ — mengden som bare består av nullvektoren"],
      explanation: "Første halvplan er ikke lukket under skalering med negative tall: $(-1)(1,0)=(-1,0)$ faller utenfor.",
    },
    {
      question: "Løsningsmengden til hvilket system er alltid et underrom?",
      options: ["Et homogent system $A\\mathbf x=\\mathbf 0$", "Ethvert inhomogent system $A\\mathbf x=\\mathbf b$", "Et system der høyresiden $\\mathbf b\\ne\\mathbf 0$", "Et inkonsistent system uten noen løsning"],
      explanation: "Homogene løsningsmengder ($\\operatorname{Nul}A$) inneholder $\\mathbf 0$ og er lukket — inhomogene mangler $\\mathbf 0$.",
    },
    {
      question: "Hva er nullvektoren i funksjonsrommet $F(\\mathbb R)$?",
      options: ["Funksjonen som gir verdien $0$ for absolutt alle $x$", "Selve tallet $0$ regnet som en konstant skalar", "Den konstante funksjonen som gir verdien $1$ overalt", "Den deriverte av en vilkårlig konstant funksjon"],
      explanation: "Nullvektoren er nullfunksjonen $f(x)=0$ — den oppfyller $f+g=g$ for alle $g$.",
    },
    {
      question: "Hvor mange betingelser i et underrom-bevis må du sjekke?",
      options: ["Alle tre — å bestå to av tre betingelser er ikke nok", "Bare den ene betingelsen som tilfeldigvis ser aller vanskeligst ut ved første øyekast", "Bare betingelsen om at $\\mathbf 0$ ligger i $W$", "Alle de åtte vektorromsaksiomene, ett for ett"],
      explanation: "En mengde kan bestå to betingelser og likevel falle på den tredje, så alle tre må vises.",
    },
    {
      question: "Hva er forskjellen på en delmengde og et underrom?",
      options: ["Et underrom er en delmengde som også består de tre betingelsene", "De to begrepene betyr nøyaktig det samme i lineær algebra", "En delmengde må inneholde $\\mathbf 0$, mens et underrom ikke må det", "Et underrom er per definisjon alltid hele det omsluttende rommet"],
      explanation: "Enhver samling vektorer er en delmengde, men bare de med $\\mathbf 0$ og lukkethet er underrom.",
    },
    {
      question: "Hvorfor er $\\{p:\\deg p=2\\}$ (eksakt grad 2) ikke et underrom?",
      options: ["Det mangler $\\mathbf 0$ og er ikke lukket under addisjon", "Fordi polynomer av grad nøyaktig to ikke lar seg skalere med et reelt tall i det hele tatt", "Fordi mengden har for høy dimensjon til å være et rom", "Fordi uttrykket $t^2$ strengt tatt ikke er et polynom"],
      explanation: "Nullpolynomet har ikke grad $2$, og $t^2+(-t^2+t)=t$ har grad $1$ — verken $\\mathbf 0$ eller lukkethet holder.",
    },
    {
      question: "Hva sier betingelse (3), lukket under skalarmultiplikasjon?",
      options: ["Hvis $\\mathbf u\\in W$ og $c\\in\\mathbb R$, så ligger $c\\mathbf u$ i $W$", "Hvis $\\mathbf u,\\mathbf v\\in W$, så ligger summen $\\mathbf u+\\mathbf v$ i $W$", "At nullvektoren $\\mathbf 0$ alltid ligger i mengden $W$", "At mengden $W$ nødvendigvis har endelig dimensjon"],
      explanation: "Lukkethet under skalar: å gange et element i $W$ med et hvilket som helst tall gir fortsatt et element i $W$.",
    },
    {
      question: "Hva er $\\dim M_{2\\times 2}$?",
      options: ["$4$", "$2$", "$3$", "$6$"],
      explanation: "En $2\\times2$-matrise har fire frie posisjoner, så matriserommet har dimensjon $4$.",
    },
    {
      question: "Snittet $U\\cap W$ av to underrom er:",
      options: ["Alltid et underrom", "Aldri et underrom", "Et underrom bare hvis $U=W$", "Det samme som unionen $U\\cup W$"],
      explanation: "Snittet inneholder $\\mathbf 0$ og arver lukketheten fra begge, så det er alltid et underrom (unionen er det sjelden).",
    },
    {
      question: "Er $\\{(x,y):xy=0\\}$ (de to aksene) et underrom av $\\mathbb R^2$?",
      options: ["Nei — mengden er ikke lukket under addisjon av to elementer", "Ja — fordi mengden inneholder nullvektoren $\\mathbf 0$", "Ja — fordi mengden er lukket under skalering med tall", "Nei — fordi mengden ikke inneholder nullvektoren $\\mathbf 0$"],
      explanation: "$(1,0)$ og $(0,1)$ ligger begge i mengden, men summen $(1,1)$ har $xy=1\\ne0$ — ikke lukket under $+$.",
    },
    {
      question: "Hva betyr det at aksiomene «arves» når $W$ er et underrom?",
      options: ["At regnereglene automatisk holder i $W$ fordi de holder i $V$", "At $W$ må utstyres med en helt egen og ny addisjon", "At $W$ alltid har nøyaktig samme dimensjon som $V$", "At mengden $W$ overhodet ikke er nødt til å måtte inneholde selve nullvektoren $\\mathbf 0$"],
      explanation: "Siden $W\\subseteq V$ og bruker samme regneoperasjoner, gjelder de åtte aksiomene automatisk — derfor holder det å sjekke de tre betingelsene.",
    },
  ],
  'tma4110-3-2': [
    {
      question: "Hva betyr det at $\\mathbf v_1,\\dots,\\mathbf v_k$ er lineært uavhengige?",
      options: ["At $c_1\\mathbf v_1+\\dots+c_k\\mathbf v_k=\\mathbf 0$ bare har løsningen der alle $c_i=0$", "At minst én av vektorene kan skrives som en lineærkombinasjon av de øvrige vektorene i mengden", "At alle vektorene peker i nøyaktig samme retning i rommet", "At vektorene til sammen utspenner hele det omsluttende rommet"],
      explanation: "Uavhengighet betyr at den eneste relasjonen som gir nullvektoren er den trivielle — ingen vektor er overflødig.",
    },
    {
      question: "Hva er en basis for et vektorrom $V$?",
      options: ["En mengde som er lineært uavhengig og utspenner $V$", "Enhver mengde vektorer som utspenner rommet $V$ alene", "Enhver lineært uavhengig mengde vektorer i rommet $V$", "Mengden av samtlige vektorer som finnes i rommet $V$"],
      explanation: "En basis er begge deler samtidig: uavhengig (ingen overflødig) og utspennende (når alt) — et minimalt komplett sett.",
    },
    {
      question: "Hvordan tester du lineær uavhengighet av vektorer i $\\mathbb R^n$?",
      options: ["Sett dem som kolonner og sjekk om det er pivot i hver kolonne", "Sett dem opp som rader i en matrise og regn ut summen av samtlige rader", "Sjekk om alle vektorene har samme lengde i rommet", "Regn ut skalarproduktet mellom hvert par av vektorer"],
      explanation: "Kolonnene er uavhengige hvis og bare hvis radreduksjon gir en pivot i hver kolonne (ingen frie variabler).",
    },
    {
      question: "Hva sier dimensjonsargumentet?",
      options: ["$n$ uavhengige vektorer i et $n$-dimensjonalt rom er automatisk en basis", "At ethvert vektorrom med dimensjon $n$ nødvendigvis har uendelig mange helt ulike baser", "Antall vektorer i en basis kan variere fra basis til basis", "Enhver mengde på $n$ vektorer i et $n$-dim rom er en basis"],
      explanation: "Har du riktig antall ($=\\dim V$) uavhengige vektorer, utspenner de automatisk — så én sjekk holder.",
    },
    {
      question: "Hva er $\\dim\\operatorname{P}_2$?",
      options: ["$3$", "$2$", "$4$", "$1$"],
      explanation: "Basisen $\\{1,t,t^2\\}$ har tre elementer, så andregradspolynomene har dimensjon $3$.",
    },
    {
      question: "Er $\\{1+t,\\ t+t^2,\\ 1+2t+t^2\\}$ lineært uavhengige i $\\operatorname{P}_2$?",
      options: ["Nei — det tredje polynomet er summen av de to første", "Ja — fordi de tre oppgitte polynomene alle har innbyrdes forskjellig grad", "Ja — determinanten av koordinatmatrisen er $2$", "Nei — de inneholder alle nullpolynomet som ledd"],
      explanation: "$(1+t)+(t+t^2)=1+2t+t^2$, så $(1+t)+(t+t^2)-(1+2t+t^2)=0$ er en ikke-triviell relasjon — de er avhengige.",
    },
    {
      question: "Hvordan sjekker du uavhengighet av polynomer?",
      options: ["Sammenlign koeffisienter potens for potens, eller radreduser koordinatvektorene", "Sett inn verdien $t=0$ i hvert av polynomene og sammenlign resultatene mot hverandre", "Regn ut den deriverte av hvert polynom og legg dem sammen", "Kontroller at polynomene har innbyrdes forskjellig grad"],
      explanation: "Lineærkombinasjonen settes lik nullpolynomet, og koeffisientene sammenlignes — ekvivalent med å radredusere koordinatvektorene.",
    },
    {
      question: "Hva er den vanligste fellen i en basis-oppgave?",
      options: ["Å vise bare uavhengighet ELLER bare utspenning i stedet for begge", "Å regne ut determinanten av koordinatmatrisen med altfor stor nøyaktighet underveis", "Å skrive vektorene som kolonner i stedet for som rader", "Å bruke standardbasisen i stedet for en oppgitt basis"],
      explanation: "Basis krever begge egenskaper (eller riktig antall + én av dem); å nøye seg med kun én er den klassiske fellen.",
    },
    {
      question: "Hvor mange vektorer må en basis for $V$ ha?",
      options: ["Nøyaktig $\\dim V$ vektorer", "Minst $\\dim V + 1$ vektorer", "Færre enn $\\dim V$ vektorer", "Et vilkårlig antall vektorer"],
      explanation: "Enhver basis har nøyaktig $\\dim V$ vektorer — færre utspenner ikke, flere er avhengige.",
    },
    {
      question: "En mengde vektorer inneholder nullvektoren $\\mathbf 0$. Hva vet du?",
      options: ["Mengden er lineært avhengig", "Mengden er lineært uavhengig", "Mengden er automatisk en basis", "Mengden utspenner hele rommet"],
      explanation: "Relasjonen $1\\cdot\\mathbf 0+0\\cdot\\mathbf v_2+\\dots=\\mathbf 0$ er ikke-triviell, så enhver mengde med $\\mathbf 0$ er avhengig.",
    },
    {
      question: "Kan to vektorer utspenne $\\mathbb R^3$?",
      options: ["Nei — spennet av to vektorer er høyst et plan", "Ja — hvis de to vektorene er uavhengige", "Ja — hvis de begge har lengde $1$", "Ja — hvis de står vinkelrett på hverandre"],
      explanation: "Færre enn $\\dim V=3$ vektorer kan aldri utspenne $\\mathbb R^3$; to vektorer når høyst et plan gjennom origo.",
    },
    {
      question: "Fire vektorer i $\\mathbb R^3$ er:",
      options: ["Alltid lineært avhengige", "Alltid lineært uavhengige", "Alltid en basis for $\\mathbb R^3$", "Alltid utspennende og uavhengige"],
      explanation: "Mer enn $\\dim V=3$ vektorer i $\\mathbb R^3$ er garantert avhengige, uansett hvilke fire vektorer det er.",
    },
    {
      question: "Når er to vektorer $\\mathbf u,\\mathbf v$ lineært uavhengige?",
      options: ["Når ingen av dem er et skalarmultiplum av den andre", "Når begge har nøyaktig samme lengde i rommet", "Når summen $\\mathbf u+\\mathbf v$ er lik nullvektoren", "Når de peker i stikk motsatt retning av hverandre"],
      explanation: "To vektorer er uavhengige nettopp når de ikke er parallelle — ellers er den ene et multiplum av den andre.",
    },
    {
      question: "Hva er koordinatene til $3-2t+t^2$ relativt standardbasisen $\\{1,t,t^2\\}$?",
      options: ["$(3,-2,1)$", "$(1,-2,3)$", "$(3,2,1)$", "$(-2,3,1)$"],
      explanation: "Koordinatene er koeffisientene i rekkefølge $1,t,t^2$: konstantledd $3$, $t$-ledd $-2$, $t^2$-ledd $1$.",
    },
    {
      question: "Hva menes med at fremstillingen i en basis er entydig?",
      options: ["Hver vektor kan skrives på nøyaktig én måte som lineærkombinasjon av basisen", "At alle vektorene i hele rommet har nøyaktig de samme koordinatene relativt basisen", "Basisen kan velges på nøyaktig én måte for hvert rom", "Hver basisvektor kan bare skaleres med tallet $1$"],
      explanation: "Uavhengigheten gir at koeffisientene $c_1,\\dots,c_n$ i $\\mathbf x=c_1\\mathbf b_1+\\dots+c_n\\mathbf b_n$ er unikt bestemt.",
    },
    {
      question: "Vektorene er kolonner i $A$. Når er de uavhengige, uttrykt med rang?",
      options: ["Når $\\operatorname{rang}A$ er lik antall vektorer (kolonner)", "Når $\\operatorname{rang}A$ er lik null", "Når verdien av $\\operatorname{rang}A$ er strengt mindre enn det totale antallet kolonner i matrisen", "Når $\\operatorname{rang}A$ er lik antall rader"],
      explanation: "Uavhengighet ⇔ pivot i hver kolonne ⇔ $\\operatorname{rang}A$ = antall kolonner.",
    },
    {
      question: "Hva er $\\operatorname{Span}\\{\\mathbf v\\}$ for én enkelt vektor $\\mathbf v\\ne\\mathbf 0$?",
      options: ["En linje gjennom origo", "Et plan gjennom origo", "Hele rommet $\\mathbb R^n$", "Bare punktet $\\mathbf v$ selv"],
      explanation: "Alle multipler $c\\mathbf v$ danner en rett linje gjennom origo i retning $\\mathbf v$.",
    },
    {
      question: "Hva er en basis, beskrevet som en «minimal» eller «maksimal» mengde?",
      options: ["En minimal utspennende mengde, ekvivalent med en maksimal uavhengig mengde", "En maksimal utspennende mengde som inneholder flest mulige vektorer fra hele rommet", "En minimal uavhengig mengde med færrest mulige vektorer", "En mengde som verken utspenner eller er uavhengig"],
      explanation: "En basis kan ikke trimmes uten å slutte å utspenne (minimal utspennende), og ikke utvides uten å bli avhengig (maksimal uavhengig).",
    },
  ],
  'tma4110-3-3': [
    {
      question: "Hvor henter du en basis for $\\operatorname{Col}A$?",
      options: ["Fra de opprinnelige pivotkolonnene i $A$", "Fra de reduserte pivotkolonnene i RREF-matrisen", "Fra de ikke-null-radene i RREF-matrisen", "Fra de spesielle løsningene av $A\\mathbf x=\\mathbf 0$"],
      explanation: "RREF avslører hvilke kolonner som er pivotkolonner, men basisen er de kolonnene i den opprinnelige $A$ — den klassiske fellen er å bruke RREF-kolonnene.",
    },
    {
      question: "Hva sier dimensjonsteoremet?",
      options: ["$\\operatorname{rang}A+\\dim\\operatorname{Nul}A=n$ (antall kolonner)", "$\\operatorname{rang}A+\\dim\\operatorname{Nul}A=m$ (antall rader)", "$\\operatorname{rang}A\\cdot\\dim\\operatorname{Nul}A=n$", "$\\dim\\operatorname{Col}A+\\dim\\operatorname{Row}A=n$"],
      explanation: "Hver kolonne er enten pivotkolonne (rang) eller uten pivot (nullitet), så de to summerer til antall kolonner $n$.",
    },
    {
      question: "Hvordan finner du en basis for $\\operatorname{Nul}A$?",
      options: ["Ved de spesielle løsningene — én per fri variabel", "Ved de opprinnelige pivotkolonnene i $A$", "Ved de ikke-null-radene i den reduserte trappeformen", "Ved å ta determinanten av koeffisientmatrisen"],
      explanation: "For hver fri variabel settes den til $1$ og de andre til $0$; de bundne leses av RREF, og løsningene danner en basis for nullrommet.",
    },
    {
      question: "Hva er $\\operatorname{rang}A$?",
      options: ["Antall pivoter i trappeformen", "Antall frie variabler i systemet", "Antall rader i matrisen $A$", "Antall nullrader i RREF"],
      explanation: "Rangen er antallet pivoter = antall pivotkolonner = $\\dim\\operatorname{Col}A$.",
    },
    {
      question: "I hvilket rom lever $\\operatorname{Nul}A$ for en $m\\times n$-matrise?",
      options: ["I $\\mathbb R^n$", "I $\\mathbb R^m$", "I $\\mathbb R^{m+n}$", "I $\\mathbb R^{mn}$"],
      explanation: "Nullrommet består av $\\mathbf x$ med $A\\mathbf x=\\mathbf 0$, og $\\mathbf x$ har like mange komponenter som $A$ har kolonner, altså $n$.",
    },
    {
      question: "I hvilket rom lever $\\operatorname{Col}A$ for en $m\\times n$-matrise?",
      options: ["I $\\mathbb R^m$", "I $\\mathbb R^n$", "I $\\mathbb R^{m+n}$", "I $\\mathbb R^{mn}$"],
      explanation: "Hver kolonne er en vektor med $m$ komponenter (antall rader), så kolonnerommet er et underrom av $\\mathbb R^m$.",
    },
    {
      question: "Hva er nulliteten $\\dim\\operatorname{Nul}A$?",
      options: ["Antall frie variabler (kolonner uten pivot)", "Antall pivotkolonner i matrisen", "Antall rader i matrisen $A$", "Rangen til matrisen $A$"],
      explanation: "Nulliteten er antall frie variabler; sammen med rangen fyller den alle kolonnene.",
    },
    {
      question: "Når er $A\\mathbf x=\\mathbf b$ løsbart, uttrykt med kolonnerommet?",
      options: ["Når $\\mathbf b$ ligger i $\\operatorname{Col}A$", "Når $\\mathbf b$ ligger i $\\operatorname{Nul}A$", "Når $\\mathbf b$ er nullvektoren", "Når $\\mathbf b$ ligger i $\\operatorname{Row}A$"],
      explanation: "Systemet er konsistent nettopp når $\\mathbf b$ er en lineærkombinasjon av kolonnene, altså $\\mathbf b\\in\\operatorname{Col}A$.",
    },
    {
      question: "Hvor henter du en basis for $\\operatorname{Row}A$?",
      options: ["Fra de ikke-null-radene i RREF", "Fra de opprinnelige pivotkolonnene i $A$", "Fra de spesielle løsningene i nullrommet", "Fra kolonnene i den reduserte matrisen"],
      explanation: "For radrommet er RREF lov: radoperasjoner bevarer radrommet, så de ikke-null-radene i RREF er en basis.",
    },
    {
      question: "Hva er sammenhengen mellom radrang og kolonnerang?",
      options: ["De er alltid like, begge lik $\\operatorname{rang}A$", "Radrangen er alltid størst av de to", "Kolonnerangen er alltid størst av de to", "De er uavhengige størrelser uten sammenheng"],
      explanation: "Antall uavhengige rader er alltid lik antall uavhengige kolonner — begge er rangen.",
    },
    {
      question: "En $3\\times5$-matrise har rang $3$. Hva er $\\dim\\operatorname{Nul}A$?",
      options: ["$2$", "$3$", "$5$", "$0$"],
      explanation: "Dimensjonsteoremet: $\\dim\\operatorname{Nul}A=n-\\operatorname{rang}A=5-3=2$.",
    },
    {
      question: "Hva menes med at en $n\\times n$-matrise har full rang?",
      options: ["$\\operatorname{rang}A=n$, altså inverterbar med $\\operatorname{Nul}A=\\{\\mathbf 0\\}$", "At matrisen har flere rader enn kolonner totalt", "At alle elementene i matrisen er forskjellige fra null", "At determinanten til matrisen er lik null"],
      explanation: "Full rang for en kvadratisk matrise betyr pivot i hver kolonne — uavhengige kolonner, trivielt nullrom og inverterbarhet.",
    },
    {
      question: "Hva er den vanligste fellen ved $\\operatorname{Col}A$?",
      options: ["Å oppgi de reduserte RREF-kolonnene i stedet for de opprinnelige", "Å glemme å radredusere matrisen helt til trappeform", "Å telle antall rader i stedet for antall kolonner", "Å bruke de spesielle løsningene som basis"],
      explanation: "RREF avslører hvilke kolonner som er pivotkolonner, men basisen må hentes fra den opprinnelige $A$.",
    },
    {
      question: "En matrise har RREF med pivoter i kolonne 1 og 3, av 4 kolonner. Hvor mange spesielle løsninger?",
      options: ["$2$", "$1$", "$3$", "$4$"],
      explanation: "Kolonne 2 og 4 mangler pivot, altså to frie variabler — én spesiell løsning per fri variabel gir $2$.",
    },
    {
      question: "Hva er en øvre grense for $\\operatorname{rang}A$ når $A$ er $m\\times n$?",
      options: ["$\\min(m,n)$", "$\\max(m,n)$", "$m+n$", "$mn$"],
      explanation: "Rangen kan ikke overstige verken antall rader eller antall kolonner, så $\\operatorname{rang}A\\le\\min(m,n)$.",
    },
    {
      question: "Hva betyr $\\operatorname{Nul}A=\\{\\mathbf 0\\}$?",
      options: ["At kolonnene er lineært uavhengige (ingen frie variabler)", "At matrisen bare inneholder nuller overalt", "At kolonnerommet er hele $\\mathbb R^m$", "At matrisen har flere rader enn kolonner"],
      explanation: "Trivielt nullrom betyr pivot i hver kolonne, altså uavhengige kolonner og $\\operatorname{rang}A=n$.",
    },
    {
      question: "Hva brukes dimensjonsteoremet mest til i en besvarelse?",
      options: ["Som kontroll: rang + nullitet må bli $n$", "Til å regne ut determinanten raskere", "Til å finne inversen av matrisen", "Til å bytte om rader og kolonner"],
      explanation: "Etter å ha regnet rang og nullitet hver for seg, sjekker du at summen er $n$ — det fanger regnefeil.",
    },
    {
      question: "$\\operatorname{Col}B$ har dimensjon 3 for en $3\\times4$-matrise $B$. Hva følger?",
      options: ["$\\operatorname{Col}B=\\mathbb R^3$ — kolonnene utspenner hele $\\mathbb R^3$", "$B$ er inverterbar med determinant ulik null", "$\\operatorname{Nul}B=\\{\\mathbf 0\\}$ — bare den trivielle løsningen", "$B$ har full kolonnerang lik antall kolonner"],
      explanation: "Et $3$-dimensjonalt underrom av $\\mathbb R^3$ er hele $\\mathbb R^3$, så $A\\mathbf x=\\mathbf b$ er løsbart for alle $\\mathbf b$.",
    },
    {
      question: "Hvorfor er de spesielle løsningene automatisk lineært uavhengige?",
      options: ["Hver har en $1$-ener i sin egen frie posisjon der de andre har $0$", "Fordi de alltid står vinkelrett på hverandre", "Fordi de alle har samme lengde i rommet", "Fordi de utspenner hele kolonnerommet"],
      explanation: "Ser du bare på de frie posisjonene, danner de spesielle løsningene en enhetsmatrise, så ingen er en kombinasjon av de andre.",
    },
    {
      question: "Hva er $\\dim\\operatorname{Row}A$ i forhold til rangen?",
      options: ["$\\dim\\operatorname{Row}A=\\operatorname{rang}A$", "$\\dim\\operatorname{Row}A=\\operatorname{rang}A+1$", "$\\dim\\operatorname{Row}A=m-\\operatorname{rang}A$", "$\\dim\\operatorname{Row}A=n-\\operatorname{rang}A$"],
      explanation: "Radrommet har dimensjon lik rangen, akkurat som kolonnerommet — radrang = kolonnerang.",
    },
  ],
  'tma4110-3-4': [
    {
      question: "Hva er koordinatvektoren $[\\mathbf x]_{\\mathcal B}$ relativt en ordnet basis $\\mathcal B=\\{\\mathbf b_1,\\dots,\\mathbf b_n\\}$?",
      options: ["Listen av koeffisienter $c_i$ i den entydige fremstillingen $\\mathbf x=c_1\\mathbf b_1+\\dots+c_n\\mathbf b_n$", "Listen av lengdene til hver av basisvektorene $\\mathbf b_i$, målt i den vanlige normen i rommet", "Basisvektorene $\\mathbf b_1,\\dots,\\mathbf b_n$ selv, stablet oppå hverandre i én lang kolonnevektor", "Komponentene til $\\mathbf x$ relativt standardbasisen, uansett hvilken basis $\\mathcal B$ faktisk er"],
      explanation: "En basis gir en entydig fremstilling $\\mathbf x=c_1\\mathbf b_1+\\dots+c_n\\mathbf b_n$, og koordinatvektoren er nettopp koeffisientene $(c_1,\\dots,c_n)$.",
    },
    {
      question: "Hvorfor er koordinatvektoren veldefinert (entydig)?",
      options: ["Fordi basisen er uavhengig, så fremstillingen $\\mathbf x=\\sum c_i\\mathbf b_i$ har nøyaktig ett koeffisientsett", "Fordi basisvektorene alltid velges slik at de står innbyrdes vinkelrett på hverandre i rommet", "Fordi hver enkelt av basisvektorene per definisjon skaleres til å ha lengde nøyaktig lik $1$", "Fordi ethvert vektorrom vi arbeider med her har endelig dimensjon og en fast standardbasis"],
      explanation: "Uavhengigheten utelukker to ulike fremstillinger av samme vektor — differansen ville vært en ikke-triviell relasjon mellom basisvektorene.",
    },
    {
      question: "Hva er $[\\,5-3t+2t^2\\,]_{\\mathcal B}$ relativt standardbasisen $\\mathcal B=\\{1,t,t^2\\}$?",
      options: ["$(5,-3,2)$", "$(2,-3,5)$", "$(5,3,2)$", "$(-3,5,2)$"],
      explanation: "Relativt $\\{1,t,t^2\\}$ er koordinatene koeffisientene i rekkefølge: $5$ for $1$, $-3$ for $t$, $2$ for $t^2$.",
    },
    {
      question: "Hvordan finner du $[\\mathbf x]_{\\mathcal B}$ i $\\mathbb R^n$ når $\\mathcal B$ ikke er standardbasisen?",
      options: ["Løs det lineære systemet $B\\,[\\mathbf x]_{\\mathcal B}=\\mathbf x$ der $B$ har basisvektorene som kolonner", "Ta prikkproduktet av $\\mathbf x$ med hver enkelt basisvektor $\\mathbf b_i$ og samle resultatene", "Del hver komponent i $\\mathbf x$ på den tilhørende komponenten i basisvektoren $\\mathbf b_i$", "Les komponentene i $\\mathbf x$ direkte av uten regning, akkurat som for standardbasisen"],
      explanation: "Å finne koordinatene er å skrive $\\mathbf x$ som en kombinasjon av basisvektorene, altså å løse det lineære systemet $B\\,[\\mathbf x]_{\\mathcal B}=\\mathbf x$.",
    },
    {
      question: "Med $\\mathcal B=\\{(1,1),(1,-1)\\}$, hva er $[(4,2)]_{\\mathcal B}$?",
      options: ["$(3,1)$", "$(4,2)$", "$(1,3)$", "$(2,2)$"],
      explanation: "Løs $c_1(1,1)+c_2(1,-1)=(4,2)$: $c_1+c_2=4$, $c_1-c_2=2$ gir $c_1=3$, $c_2=1$.",
    },
    {
      question: "Hva kalles avbildningen $T:V\\to\\mathbb R^n$, $T(\\mathbf x)=[\\mathbf x]_{\\mathcal B}$, når $\\dim V=n$?",
      options: ["En isomorfi — lineær, og både injektiv og surjektiv på hele $\\mathbb R^n$", "En projeksjon som avbilder $V$ ned på et ekte underrom av $\\mathbb R^n$", "En ikke-lineær omforming som bevarer lengder, men ikke addisjon", "En determinantavbildning fra rommet $V$ til de reelle tallene $\\mathbb R$"],
      explanation: "Koordinatavbildningen er lineær, injektiv og surjektiv, altså en isomorfi — $V$ og $\\mathbb R^n$ er «samme rom i forkledning».",
    },
    {
      question: "Hva betyr det at koordinatavbildningen er en isomorfi, for et uavhengighetsspørsmål i $V$?",
      options: ["Vektorer er uavhengige i $V$ hvis og bare hvis koordinatvektorene er uavhengige i $\\mathbb R^n$", "Vektorer er uavhengige i $V$ bare hvis koordinatvektorene i tillegg er ortogonale i $\\mathbb R^n$", "Uavhengighet i $V$ kan aldri avgjøres fra koordinatvektorene alene, bare fra vektorene selv", "Alle vektorer i $V$ blir automatisk uavhengige så snart de er oversatt til koordinater"],
      explanation: "Isomorfien speiler struktur: uavhengighet, span og dimensjon i $V$ tilsvarer nøyaktig det samme for koordinatvektorene i $\\mathbb R^n$.",
    },
    {
      question: "Hvorfor kan uavhengighet av polynomer avgjøres med radreduksjon i $\\mathbb R^n$?",
      options: ["Koordinatavbildningen er en isomorfi, så uavhengigheten speiles i koordinatvektorene i $\\mathbb R^n$", "Polynomer av ulik grad er alltid uavhengige, uansett hvilke koeffisienter de har foran leddene", "Radreduksjon gjør om polynomene til standardbasispolynomene $1,t,t^2$ underveis i regningen", "Determinanten av en samling polynomer er per definisjon alltid lik null i polynomrommet"],
      explanation: "Oversett hvert polynom til sin koordinatvektor; uavhengighet i $\\operatorname{P}_n$ er ekvivalent med uavhengighet av koordinatvektorene i $\\mathbb R^n$.",
    },
    {
      question: "Hva gjør basisskiftematrisen $P_{\\mathcal C\\leftarrow\\mathcal B}$?",
      options: ["Tar $\\mathcal B$-koordinater inn og gir $\\mathcal C$-koordinater ut, via $[\\mathbf x]_{\\mathcal C}=P_{\\mathcal C\\leftarrow\\mathcal B}[\\mathbf x]_{\\mathcal B}$", "Tar $\\mathcal C$-koordinater inn og gir $\\mathcal B$-koordinater ut, altså den motsatte veien av pilen", "Projiserer en vilkårlig vektor ned på basisen $\\mathcal C$ og forkaster resten av vektoren", "Regner ut determinanten til overgangen og skalerer koordinatene med denne determinanten"],
      explanation: "Les pilen $\\mathcal C\\leftarrow\\mathcal B$ som «ut $\\leftarrow$ inn»: matrisen oversetter fra $\\mathcal B$-koordinater til $\\mathcal C$-koordinater.",
    },
    {
      question: "Hva er kolonne $j$ i $P_{\\mathcal C\\leftarrow\\mathcal B}$?",
      options: ["$\\mathcal C$-koordinatene til den $j$-te $\\mathcal B$-vektoren, altså kolonnevektoren $[\\mathbf b_j]_{\\mathcal C}$", "Selve den $j$-te $\\mathcal B$-vektoren $\\mathbf b_j$, satt inn i matrisen helt uendret slik den er", "$\\mathcal B$-koordinatene til den $j$-te $\\mathcal C$-vektoren, altså kolonnevektoren $[\\mathbf c_j]_{\\mathcal B}$", "Den $j$-te standardbasisvektoren $\\mathbf e_j$, uavhengig av hva basene $\\mathcal B$ og $\\mathcal C$ er"],
      explanation: "Du uttrykker hver gamle basisvektor $\\mathbf b_j$ i den nye basisen $\\mathcal C$ og stabler koordinatene $[\\mathbf b_j]_{\\mathcal C}$ som kolonner.",
    },
    {
      question: "Hvordan skifter du koordinater den motsatte veien, fra $\\mathcal C$ til $\\mathcal B$?",
      options: ["Bruk den inverse matrisen $P_{\\mathcal B\\leftarrow\\mathcal C}=(P_{\\mathcal C\\leftarrow\\mathcal B})^{-1}$", "Bruk den transponerte matrisen $(P_{\\mathcal C\\leftarrow\\mathcal B})^{T}$ i stedet", "Bruk den samme matrisen $P_{\\mathcal C\\leftarrow\\mathcal B}$ en ekstra gang", "Bruk determinanten $\\det P_{\\mathcal C\\leftarrow\\mathcal B}$ som en ren skalarfaktor"],
      explanation: "De to skiftene opphever hverandre, $P_{\\mathcal B\\leftarrow\\mathcal C}P_{\\mathcal C\\leftarrow\\mathcal B}=I$, så motsatt vei er den inverse matrisen.",
    },
    {
      question: "Hva er den vanligste fellen ved basisskiftematriser?",
      options: ["Å bruke feil retning og forveksle $P_{\\mathcal C\\leftarrow\\mathcal B}$ med sin egen inverse matrise", "Å glemme å regne ut determinanten til alle basisvektorene helt først i oppgaven", "Å bruke altfor få desimaler i mellomregningen og dermed miste presisjon i svaret", "Å skrive koordinatvektoren som en radvektor i stedet for som en stående kolonne"],
      explanation: "Retningen på pilen $\\mathcal C\\leftarrow\\mathcal B$ avgjør alt; bytter du den, får du inversen og feil svar.",
    },
    {
      question: "I $\\mathbb R^n$ med $\\mathcal C$ lik standardbasisen: hva er $P_{\\mathcal C\\leftarrow\\mathcal B}$?",
      options: ["Matrisen som har $\\mathcal B$-vektorene som kolonner, satt inn slik de er", "Identitetsmatrisen $I$, uansett hvilke vektorer basisen $\\mathcal B$ består av", "Den inverse av matrisen som har $\\mathcal B$-vektorene som sine kolonner", "En diagonalmatrise med lengdene til $\\mathcal B$-vektorene på diagonalen"],
      explanation: "Relativt standardbasisen er koordinatene komponentene, så kolonnene $[\\mathbf b_j]_{\\mathcal C}$ er bare $\\mathbf b_j$ selv.",
    },
    {
      question: "Hvordan finner du $P_{\\mathcal C\\leftarrow\\mathcal B}$ i $\\mathbb R^n$ ved radreduksjon?",
      options: ["Radreduser $[\\,C\\mid B\\,]\\to[\\,I\\mid P_{\\mathcal C\\leftarrow\\mathcal B}\\,]$ med $B,C$ = basisvektorene som kolonner", "Radreduser $[\\,B\\mid C\\,]\\to[\\,I\\mid P_{\\mathcal C\\leftarrow\\mathcal B}\\,]$ med basene i motsatt rekkefølge", "Radreduser bare matrisen $B$ til redusert trappeform og les av pivotkolonnene direkte", "Radreduser $[\\,B\\mid I\\,]$ til trappeform og transponer det du får på høyre side"],
      explanation: "Siden $P_{\\mathcal C\\leftarrow\\mathcal B}=C^{-1}B$, gir radreduksjon av $[\\,C\\mid B\\,]$ formen $[\\,I\\mid C^{-1}B\\,]$.",
    },
    {
      question: "Hvorfor er basisskiftematriser alltid inverterbare?",
      options: ["Begge baser gir isomorfier, og skiftet den ene veien har det andre skiftet som invers", "Fordi de alltid er diagonale matriser med bare enere langs hoveddiagonalen sin", "Fordi determinanten deres alltid er lik antallet vektorer i de to basene", "Fordi de utelukkende inneholder hele tall som elementer, aldri brøker eller null"],
      explanation: "$P_{\\mathcal B\\leftarrow\\mathcal C}P_{\\mathcal C\\leftarrow\\mathcal B}=I$, så matrisen har en invers per definisjon — skiftene opphever hverandre.",
    },
    {
      question: "Hva må du huske til slutt når du har regnet et polynomsvar i koordinater?",
      options: ["Å oversette koordinatvektoren tilbake til polynomet $c_1\\mathbf b_1+\\dots+c_n\\mathbf b_n$ i original form", "Å normalisere koordinatvektoren du fikk til å ha lengde nøyaktig lik $1$ først", "Å transponere koordinatvektoren før du fører den opp som sluttsvar på oppgaven", "Å gange hele svaret med determinanten til basisen for å skalere det riktig"],
      explanation: "Sensor vil ofte ha svaret i original form; en koordinatvektor $(c_1,\\dots,c_n)$ svarer til objektet $c_1\\mathbf b_1+\\dots+c_n\\mathbf b_n$.",
    },
    {
      question: "Hvorfor må basisen være ordnet for at koordinater skal gi mening?",
      options: ["Rekkefølgen på basisvektorene bestemmer i hvilken rekkefølge koordinatene skal stå", "Ordningen av basisvektorene er det som gjør at de blir innbyrdes ortogonale", "Uten en fast ordning kan ikke basisvektorene utspenne hele rommet $V$", "Ordningen kreves bare i tilfeller der dimensjonen til rommet er større enn tre"],
      explanation: "$\\{1,t,t^2\\}$ og $\\{t^2,t,1\\}$ er samme mengde, men gir speilvendte koordinatvektorer — derfor må rekkefølgen være fast.",
    },
    {
      question: "Med $P_{\\mathcal C\\leftarrow\\mathcal B}=\\begin{bmatrix}1&-1&0\\\\0&1&-1\\\\0&0&1\\end{bmatrix}$ og $[\\mathbf x]_{\\mathcal B}=(3,-2,1)$, hva er $[\\mathbf x]_{\\mathcal C}$?",
      options: ["$(5,-3,1)$", "$(3,-2,1)$", "$(1,-3,5)$", "$(2,-1,1)$"],
      explanation: "Gang matrisen på $(3,-2,1)$: $(3+2,\\,-2-1,\\,1)=(5,-3,1)$.",
    },
  ],
  'tma4110-3-5': [
    {
      question: "Hvilke tre betingelser må du vise for at $W\\subseteq V$ er et underrom?",
      options: ["At $\\mathbf 0\\in W$, at $W$ er lukket under addisjon, og at $W$ er lukket under skalar", "At $W$ er endelig, at $W$ inneholder en basis, og at $W$ har positiv dimensjon", "At $W$ er lukket under addisjon, under skalar, og under invertering av matriser", "At $W$ inneholder standardbasisen, er lukket under produkt, og under transponering"],
      explanation: "Et underrom må inneholde nullvektoren og være lukket under både addisjon og skalarmultiplikasjon — alle tre må vises.",
    },
    {
      question: "Hvorfor er $W=\\{p\\in\\operatorname{P}_2:p(0)=1\\}$ ikke et underrom?",
      options: ["Nullpolynomet har $p(0)=0\\ne1$, så nullvektoren $\\mathbf 0$ ligger ikke i $W$", "Fordi rommet $\\operatorname{P}_2$ har for høy dimensjon til å ha slike underrom", "Fordi polynomer generelt aldri kan danne et underrom av noe vektorrom", "Fordi betingelsen $p(0)=1$ egentlig er en ren andregradsbetingelse"],
      explanation: "Betingelsen $p(0)=1$ er ikke-homogen; nullpolynomet oppfyller den ikke, så første underromsbetingelse er brutt.",
    },
    {
      question: "Hva er dimensjonen til $W=\\{A\\in M_2:\\operatorname{spor}A=0\\}$?",
      options: ["$3$", "$4$", "$2$", "$1$"],
      explanation: "$\\operatorname{spor}A=a+d=0$ gir $d=-a$, med $a,b,c$ frie — tre basisretninger, altså $\\dim W=3$.",
    },
    {
      question: "Når holder det å vise bare uavhengighet for at en mengde er en basis?",
      options: ["Når antallet vektorer er nøyaktig $\\dim V$, slik at dimensjonsargumentet gjelder", "Når alle vektorene i mengden er innbyrdes ortogonale på hverandre", "Når minst én av vektorene i mengden er lik nullvektoren $\\mathbf 0$", "Alltid — lineær uavhengighet medfører alltid at man har en full basis"],
      explanation: "Dimensjonsargumentet: $n$ uavhengige vektorer i et $n$-dimensjonalt rom utspenner automatisk, så de er en basis.",
    },
    {
      question: "Hvor henter du en basis for $\\operatorname{Col}A$?",
      options: ["Fra de opprinnelige pivotkolonnene i selve matrisen $A$", "Fra de reduserte pivotkolonnene i RREF-matrisen", "Fra de spesielle løsningene av systemet $A\\mathbf x=\\mathbf 0$", "Fra de ikke-null-radene i den reduserte trappeformen"],
      explanation: "RREF avslører hvilke kolonner som er pivotkolonner, men basisen er de kolonnene i den opprinnelige $A$ — RREF-kolonnene er feil.",
    },
    {
      question: "Hva er den mest testede fellen i sjanger E?",
      options: ["Å oppgi de reduserte RREF-kolonnene som basis for $\\operatorname{Col}A$", "Å glemme å skrive opp determinanten av matrisen underveis", "Å telle antallet rader i matrisen i stedet for kolonnene", "Å bruke desimaltall i mellomregningen i stedet for brøk"],
      explanation: "Basis for $\\operatorname{Col}A$ skal være de opprinnelige pivotkolonnene i $A$, ikke de reduserte kolonnene fra RREF.",
    },
    {
      question: "Hvordan finner du en basis for $\\operatorname{Nul}A$?",
      options: ["Ved de spesielle løsningene — én slik løsning per frie variabel", "Ved de opprinnelige pivotkolonnene i matrisen $A$", "Ved de ikke-null-radene i den reduserte trappeformen", "Ved å regne ut determinanten av koeffisientmatrisen"],
      explanation: "For hver fri variabel settes den til $1$ og de andre til $0$; de bundne leses av RREF, og løsningene danner en basis for nullrommet.",
    },
    {
      question: "Hvilken kontroll bruker du etter å ha funnet rang og nullitet?",
      options: ["Dimensjonsteoremet, at $\\operatorname{rang}A+\\dim\\operatorname{Nul}A=n$", "At rangen $\\operatorname{rang}A$ er lik antallet rader $m$", "At determinanten $\\det A$ er forskjellig fra null", "At $\\operatorname{Col}A$ og $\\operatorname{Nul}A$ har samme dimensjon"],
      explanation: "Etter å ha regnet rang og nullitet hver for seg må summen bli antall kolonner $n$ — ellers er det en regnefeil.",
    },
    {
      question: "For $A=\\begin{bmatrix}1&-1&2\\\\2&-2&5\\\\3&-3&7\\end{bmatrix}$ er $\\operatorname{rang}A=2$. Hva er $\\dim\\operatorname{Nul}A$?",
      options: ["$1$", "$2$", "$3$", "$0$"],
      explanation: "Dimensjonsteoremet: $\\dim\\operatorname{Nul}A=n-\\operatorname{rang}A=3-2=1$.",
    },
    {
      question: "Hva er $[(2,3,1)]_{\\mathcal B}$ når $\\mathcal B=\\{(1,1,0),(0,1,1),(1,0,1)\\}$?",
      options: ["$(2,1,0)$", "$(2,3,1)$", "$(1,1,1)$", "$(0,1,2)$"],
      explanation: "Løs $c_1(1,1,0)+c_2(0,1,1)+c_3(1,0,1)=(2,3,1)$: $c_1=2$, $c_2=1$, $c_3=0$.",
    },
    {
      question: "Hva er kolonne $j$ i basisskiftematrisen $P_{\\mathcal C\\leftarrow\\mathcal B}$?",
      options: ["$\\mathcal C$-koordinatene til den $j$-te $\\mathcal B$-vektoren, altså $[\\mathbf b_j]_{\\mathcal C}$", "Selve den $j$-te $\\mathcal B$-vektoren $\\mathbf b_j$, satt inn helt uendret", "$\\mathcal B$-koordinatene til den $j$-te $\\mathcal C$-vektoren, altså $[\\mathbf c_j]_{\\mathcal B}$", "Den $j$-te spesielle løsningen av det tilhørende homogene systemet"],
      explanation: "Du uttrykker hver $\\mathcal B$-vektor i den nye basisen $\\mathcal C$ og stabler koordinatene $[\\mathbf b_j]_{\\mathcal C}$ som kolonner.",
    },
    {
      question: "Hvordan skifter du koordinater fra $\\mathcal C$ tilbake til $\\mathcal B$?",
      options: ["Med den inverse matrisen $P_{\\mathcal B\\leftarrow\\mathcal C}=(P_{\\mathcal C\\leftarrow\\mathcal B})^{-1}$", "Med den transponerte matrisen $(P_{\\mathcal C\\leftarrow\\mathcal B})^{T}$", "Med nøyaktig den samme matrisen $P_{\\mathcal C\\leftarrow\\mathcal B}$ igjen", "Med determinanten $\\det P_{\\mathcal C\\leftarrow\\mathcal B}$ som en skalarfaktor"],
      explanation: "De to skiftene opphever hverandre, $P_{\\mathcal B\\leftarrow\\mathcal C}P_{\\mathcal C\\leftarrow\\mathcal B}=I$, så motsatt vei er den inverse.",
    },
    {
      question: "Hvordan avgjør du om $\\mathbf b$ ligger i $\\operatorname{Col}A$?",
      options: ["Sjekk om $\\mathbf b$ kan skrives som en lineærkombinasjon av en basis for $\\operatorname{Col}A$", "Sjekk om $\\mathbf b$ er en av de spesielle løsningene av systemet $A\\mathbf x=\\mathbf 0$", "Sjekk om $\\mathbf b$ har like mange komponenter som $A$ har kolonner totalt", "Sjekk om determinanten $\\det A$ er forskjellig fra tallet null"],
      explanation: "$\\mathbf b\\in\\operatorname{Col}A$ betyr at $\\mathbf b$ kan skrives som en kombinasjon av kolonnene, altså at $A\\mathbf x=\\mathbf b$ er løsbart.",
    },
    {
      question: "Hvorfor definerer betingelsen $A^{T}=A$ et underrom av $M_2$?",
      options: ["Den er lineær og homogen, så alle de tre underromsbetingelsene holder", "Fordi alle symmetriske matriser i tillegg alltid er inverterbare", "Fordi transponering av en matrise endrer determinanten til null", "Fordi det bare er diagonalmatrisene som oppfyller betingelsen"],
      explanation: "Transponering er lineær og nullmatrisen er symmetrisk, så $W=\\{A:A^{T}=A\\}$ oppfyller alle tre betingelsene.",
    },
    {
      question: "Hva er $\\dim W$ for $W=\\{A\\in M_2:A^{T}=A\\}$ (symmetriske $2\\times2$-matriser)?",
      options: ["$3$", "$4$", "$2$", "$1$"],
      explanation: "$A^{T}=A$ gir $b=c$, med $a,b,d$ frie — tre basisretninger, altså $\\dim W=3$.",
    },
    {
      question: "Hvorfor er de spesielle løsningene til $A\\mathbf x=\\mathbf 0$ automatisk uavhengige?",
      options: ["Hver av dem har en $1$-ener i sin egen frie posisjon der de andre har $0$", "Fordi de spesielle løsningene alltid står vinkelrett på hverandre", "Fordi de til sammen utspenner hele kolonnerommet $\\operatorname{Col}A$", "Fordi de spesielle løsningene alle har nøyaktig samme lengde"],
      explanation: "Ser du bare på de frie posisjonene, danner de spesielle løsningene en enhetsmatrise, så ingen er en kombinasjon av de andre.",
    },
  ],
  'tma4110-4-1': [
    {
      question: "Hva betyr det at en transformasjon $T:\\mathbb R^n\\to\\mathbb R^m$ er lineær?",
      options: ["At $T(\\mathbf u+\\mathbf v)=T(\\mathbf u)+T(\\mathbf v)$ og $T(c\\mathbf u)=c\\,T(\\mathbf u)$ for alle $\\mathbf u,\\mathbf v,c$", "At $T$ sender enhver rett linje i planet til en annen rett linje med nøyaktig samme lengde og retning", "At $T(\\mathbf u\\cdot\\mathbf v)=T(\\mathbf u)\\cdot T(\\mathbf v)$ slik at prikkproduktet bevares under avbildningen", "At $T$ er en funksjon av bare én variabel og har en graf som er en rett linje gjennom origo uten konstantledd"],
      explanation: "Linearitet er nettopp de to betingelsene: additivitet og homogenitet, ekvivalent med at $T$ bevarer lineærkombinasjoner.",
    },
    {
      question: "En lineær avbildning må alltid oppfylle hvilken av disse?",
      options: ["$T(\\mathbf 0)=\\mathbf 0$ — nullvektoren avbildes på nullvektoren", "$T(\\mathbf x)=\\mathbf x$ for enhver vektor $\\mathbf x$ i hele domenet", "$T(\\mathbf x)=\\|\\mathbf x\\|$ slik at lengden av vektoren kommer ut", "$T(\\mathbf x)\\ne\\mathbf 0$ for absolutt alle vektorer $\\mathbf x$ ulik null"],
      explanation: "Sett $c=0$ i homogenitetsbetingelsen: $T(\\mathbf 0)=T(0\\cdot\\mathbf u)=0\\cdot T(\\mathbf u)=\\mathbf 0$. Er $T(\\mathbf 0)\\ne\\mathbf 0$, er $T$ ikke lineær.",
    },
    {
      question: "Er $T(x,y)=(x+1,\\ 2y)$ en lineær transformasjon?",
      options: ["Nei, for $T(\\mathbf 0)=(1,0)\\ne\\mathbf 0$ — konstantleddet ødelegger linearitet", "Ja, for hver komponent er en pen og glatt funksjon av variablene $x$ og $y$", "Ja, for avbildningen sender origo til punktet $(1,0)$ på en entydig måte", "Nei, men bare fordi $y$-komponenten mangler et helt eget konstantledd"],
      explanation: "$T(\\mathbf 0)=(0+1,\\ 0)=(1,0)\\ne\\mathbf 0$, så forkastningstesten slår til: $T$ er ikke lineær (den er affin).",
    },
    {
      question: "Hva sier standardmatrisen $A=[T]$ til en lineær transformasjon $T$?",
      options: ["At $T(\\mathbf x)=A\\mathbf x$ for alle $\\mathbf x$, med kolonner $A=[\\,T(\\mathbf e_1)\\ \\cdots\\ T(\\mathbf e_n)\\,]$", "At $T(\\mathbf x)=\\mathbf x A$ der $\\mathbf x$ ganges inn fra venstre som en radvektor mot matrisen $A$", "At $A$ er en vilkårlig matrise som tilfeldigvis har akkurat samme antall rader og kolonner som $T$ har", "At $A$ inneholder egenverdiene til $T$ oppført langs sin egen hoveddiagonal i stigende rekkefølge"],
      explanation: "Skriver du $\\mathbf x=\\sum x_j\\mathbf e_j$, gir linearitet $T(\\mathbf x)=\\sum x_jT(\\mathbf e_j)=A\\mathbf x$ med $A=[\\,T(\\mathbf e_1)\\ \\cdots\\ T(\\mathbf e_n)\\,]$.",
    },
    {
      question: "Hvordan bygger du kolonne $j$ i standardmatrisen $[T]$?",
      options: ["Regn ut bildet $T(\\mathbf e_j)$ av den $j$-te standardbasisvektoren og sett det inn som kolonne $j$", "Regn ut bildet $T(\\mathbf e_j)$ og sett det inn som rad $j$ i matrisen i stedet", "Ta den $j$-te standardbasisvektoren $\\mathbf e_j$ selv og sett den uendret inn som kolonne $j$", "Ta prikkproduktet av $\\mathbf e_j$ med seg selv og bruk tallet som element $j$ på diagonalen"],
      explanation: "Kolonneregelen: kolonne $j$ er $T(\\mathbf e_j)$. Bytter du om kolonnene, får du en annen avbildning.",
    },
    {
      question: "$T:\\mathbb R^2\\to\\mathbb R^2$ er lineær med $T(1,0)=(3,-1)$ og $T(0,1)=(2,4)$. Hva er $[T]$?",
      options: ["$\\begin{bmatrix}3&2\\\\-1&4\\end{bmatrix}$", "$\\begin{bmatrix}3&-1\\\\2&4\\end{bmatrix}$", "$\\begin{bmatrix}-1&4\\\\3&2\\end{bmatrix}$", "$\\begin{bmatrix}3&2\\\\4&-1\\end{bmatrix}$"],
      explanation: "Kolonne $1$ er $T(\\mathbf e_1)=(3,-1)$ og kolonne $2$ er $T(\\mathbf e_2)=(2,4)$, satt inn stående.",
    },
    {
      question: "Hvorfor er hver matrisetransformasjon $T(\\mathbf x)=A\\mathbf x$ automatisk lineær?",
      options: ["Fordi matrisealgebraen gir $A(\\mathbf u+\\mathbf v)=A\\mathbf u+A\\mathbf v$ og $A(c\\mathbf u)=cA\\mathbf u$", "Fordi enhver matrise $A$ nødvendigvis er kvadratisk og derfor alltid har en veldefinert invers matrise", "Fordi determinanten til $A$ er garantert forskjellig fra tallet null i absolutt alle tenkelige tilfeller", "Fordi kolonnene i matrisen $A$ alltid står innbyrdes vinkelrett på hverandre inne i hele rommet"],
      explanation: "Regnereglene for matrise-vektor-produkt gir nøyaktig de to linearitetsbetingelsene, så $A\\mathbf x$ er alltid lineær.",
    },
    {
      question: "Hva er standardmatrisen for rotasjon med vinkel $\\theta$ mot klokka?",
      options: ["$\\begin{bmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{bmatrix}$", "$\\begin{bmatrix}\\cos\\theta&\\sin\\theta\\\\-\\sin\\theta&\\cos\\theta\\end{bmatrix}$", "$\\begin{bmatrix}\\sin\\theta&\\cos\\theta\\\\\\cos\\theta&-\\sin\\theta\\end{bmatrix}$", "$\\begin{bmatrix}\\cos\\theta&0\\\\0&\\sin\\theta\\end{bmatrix}$"],
      explanation: "$\\mathbf e_1$ roteres til $(\\cos\\theta,\\sin\\theta)$ og $\\mathbf e_2$ til $(-\\sin\\theta,\\cos\\theta)$ — det gir kolonnene i $R_\\theta$.",
    },
    {
      question: "Hva blir bildet av $(2,1)$ under rotasjon $90^\\circ$ mot klokka?",
      options: ["$(-1,2)$", "$(1,-2)$", "$(2,-1)$", "$(-2,-1)$"],
      explanation: "$R_{90^\\circ}=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$, og $R_{90^\\circ}(2,1)=(0\\cdot2-1\\cdot1,\\ 1\\cdot2+0\\cdot1)=(-1,2)$.",
    },
    {
      question: "Hva er standardmatrisen for speiling om linjen $y=x$?",
      options: ["$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$", "$\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$", "$\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}$", "$\\begin{bmatrix}0&-1\\\\-1&0\\end{bmatrix}$"],
      explanation: "Speiling om $y=x$ bytter koordinatene: $(x,y)\\mapsto(y,x)$, altså matrisen $\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$.",
    },
    {
      question: "Hva er standardmatrisen for ortogonal projeksjon på $x$-aksen?",
      options: ["$\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$", "$\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}$", "$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$", "$\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$"],
      explanation: "Projeksjon på $x$-aksen beholder $x$ og nuller $y$: $(x,y)\\mapsto(x,0)$, altså $\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.",
    },
    {
      question: "Du utfører først $S$ og deretter $T$. Hva er standardmatrisen til den sammensatte avbildningen?",
      options: ["$[T][S]$ — matrisen for den sist utførte avbildningen står først", "$[S][T]$ — matrisen for den først utførte avbildningen står først", "$[T]+[S]$ — standardmatrisene legges rett og slett sammen ledd for ledd", "$[S][T]^{-1}$ — den siste avbildningen inverteres før produktet dannes"],
      explanation: "$T(S(\\mathbf x))=[T]([S]\\mathbf x)=([T][S])\\mathbf x$, så $[T\\circ S]=[T][S]$ med den siste avbildningen ($T$) til venstre.",
    },
    {
      question: "Hvorfor gir «rotér så speil» og «speil så rotér» ofte ulikt resultat?",
      options: ["Fordi matriseproduktet ikke er kommutativt, så $[T][S]\\ne[S][T]$ i sin alminnelighet", "Fordi rotasjon alltid endrer lengden av vektoren mens speiling holder den fast", "Fordi den ene rekkefølgen er lineær mens den andre rekkefølgen ikke er det", "Fordi speiling har en invers mens rotasjon ikke har noen invers i det hele tatt"],
      explanation: "Komposisjon svarer til matriseprodukt, og produkt av matriser er ikke-kommutativt — derfor teller rekkefølgen.",
    },
    {
      question: "Hvordan skiller determinanten rotasjon fra speiling?",
      options: ["Rotasjon har $\\det=+1$ (bevarer orientering), speiling har $\\det=-1$ (snur orientering)", "Rotasjon har $\\det=-1$ mens speiling alltid har en determinant nøyaktig lik tallet $+1$ i planet", "Begge to har $\\det=0$, nettopp fordi de begge mister informasjon om vektoren underveis i avbildningen", "Rotasjon har $\\det=2$ mens speiling har $\\det=\\tfrac12$ i absolutt alle tilfeller man kan møte"],
      explanation: "$\\det R_\\theta=\\cos^2\\theta+\\sin^2\\theta=1$; speiling snur orientering og har $\\det=-1$. Projeksjon har $\\det=0$.",
    },
    {
      question: "Hvorfor er det nok å kjenne $T$ på standardbasisen for å kjenne $T$ overalt?",
      options: ["Fordi $\\mathbf x=\\sum x_j\\mathbf e_j$ gir $T(\\mathbf x)=\\sum x_jT(\\mathbf e_j)$ ved linearitet", "Fordi standardbasisvektorene $\\mathbf e_j$ er de eneste vektorene i rommet som har lengde nøyaktig lik $1$", "Fordi ethvert domene $\\mathbb R^n$ bare inneholder endelig mange innbyrdes ulike vektorer å avbilde", "Fordi $T$ per definisjon utelukkende kan evalueres i selve standardbasisvektorene $\\mathbf e_j$"],
      explanation: "Enhver vektor er en lineærkombinasjon av standardbasisvektorene, og linearitet flytter kombinasjonen ut på bildene $T(\\mathbf e_j)$.",
    },
    {
      question: "Hva kjennetegner en ortogonal projeksjon $P$ regnemessig?",
      options: ["Den er idempotent: $P^2=P$, så gjentatt projeksjon endrer ingenting", "Den er sin egen invers: $P^2=I$, så to projeksjoner gir vektoren tilbake", "Den bevarer alle lengder: $\\|P\\mathbf x\\|=\\|\\mathbf x\\|$ for enhver vektor $\\mathbf x$", "Den har alltid determinant lik $+1$ og bevarer arealet av enhver figur"],
      explanation: "En projeksjon som allerede har kastet skyggen ned på linjen, endrer ikke skyggen ved ny projeksjon: $P^2=P$. (Projeksjon har $\\det=0$ og bevarer ikke lengder.)",
    },
  ],
  'tma4110-4-2': [
    {
      question: "Hva er kjernen $\\ker T$ til en lineær transformasjon $T:V\\to W$?",
      options: ["Mengden av alle vektorer $\\mathbf x$ i domenet med $T(\\mathbf x)=\\mathbf 0$, et underrom av $V$", "Mengden av alle vektorer $T(\\mathbf x)$ som faktisk oppnås, et underrom av kodomenet $W$", "Mengden av alle egenvektorer til $T$ med egenverdi lik tallet null i rommet", "Mengden av alle vektorer $\\mathbf x$ i $V$ som avbildes på seg selv, altså $T(\\mathbf x)=\\mathbf x$"],
      explanation: "Kjernen består av vektorene som viskes ut til $\\mathbf 0$; den er et underrom av domenet $V$.",
    },
    {
      question: "Hva er bildet $\\operatorname{im}T$ (range) til $T:V\\to W$?",
      options: ["Mengden $\\{T(\\mathbf x):\\mathbf x\\in V\\}$ av alt som oppnås, et underrom av kodomenet $W$", "Mengden av alle vektorer i domenet $V$ som $T$ sender til nullvektoren $\\mathbf 0$", "Mengden av alle basisvektorer i kodomenet $W$ som har lengde nøyaktig lik $1$", "Mengden av alle skalarer $c$ slik at $T(c\\mathbf x)=\\mathbf 0$ for en eller annen vektor"],
      explanation: "Bildet er alt som faktisk kommer ut av $T$; det er et underrom av kodomenet $W$.",
    },
    {
      question: "Hvordan finner du $\\ker T$ og $\\operatorname{im}T$ fra standardmatrisen $A=[T]$?",
      options: ["$\\ker T=\\operatorname{Nul}A$ og $\\operatorname{im}T=\\operatorname{Col}A$ — samme underrom som i kap. 3.3", "$\\ker T=\\operatorname{Col}A$ og $\\operatorname{im}T=\\operatorname{Nul}A$ — de to underrommene byttet om", "$\\ker T=\\operatorname{Row}A$ og $\\operatorname{im}T=\\operatorname{Nul}A^{T}$ via de transponerte rommene", "$\\ker T$ og $\\operatorname{im}T$ leses direkte av diagonalen i standardmatrisen $A$"],
      explanation: "Kjerne = nullrom, bilde = kolonnerom. Hele regningen er kjent radreduksjon av $A$.",
    },
    {
      question: "Når er en lineær transformasjon $T$ injektiv (én-til-én)?",
      options: ["Nøyaktig når $\\ker T=\\{\\mathbf 0\\}$ — bare nullvektoren viskes ut", "Nøyaktig når bildet $\\operatorname{im}T$ fyller hele kodomenet $W$ helt opp", "Nøyaktig når standardmatrisen $A$ er kvadratisk, uansett determinantens verdi", "Nøyaktig når $T$ sender minst én vektor til nullvektoren i kodomenet"],
      explanation: "For lineære $T$ er injektiv ekvivalent med triviell kjerne: $T(\\mathbf u)=T(\\mathbf v)\\Rightarrow T(\\mathbf u-\\mathbf v)=\\mathbf 0\\Rightarrow \\mathbf u=\\mathbf v$.",
    },
    {
      question: "Når er $T:\\mathbb R^n\\to\\mathbb R^m$ surjektiv (på)?",
      options: ["Nøyaktig når $\\operatorname{rang}A=m$, så bildet fyller hele $\\mathbb R^m$", "Nøyaktig når $\\operatorname{rang}A=n$, så domenet er utnyttet fullt ut", "Nøyaktig når kjernen $\\ker T$ bare inneholder nullvektoren alene", "Nøyaktig når standardmatrisen $A$ har like mange rader som kolonner"],
      explanation: "Surjektiv betyr $\\operatorname{im}T=\\mathbb R^m$, altså at kolonnerommet har full dimensjon $m$: $\\operatorname{rang}A=m$.",
    },
    {
      question: "Hva sier dimensjonsteoremet for en lineær $T:V\\to W$?",
      options: ["$\\dim\\ker T+\\dim\\operatorname{im}T=\\dim V$ (nullitet pluss rang lik domenets dimensjon)", "$\\dim\\ker T+\\dim\\operatorname{im}T=\\dim W$ (nullitet pluss rang lik kodomenets dimensjon)", "$\\dim\\ker T\\cdot\\dim\\operatorname{im}T=\\dim V$ (produktet av de to gir domenets dimensjon)", "$\\dim\\ker T=\\dim\\operatorname{im}T$ alltid (kjerne og bilde har samme dimensjon)"],
      explanation: "Nullitet + rang = dimensjonen til domenet $V$; identisk med $\\dim\\operatorname{Nul}A+\\operatorname{rang}A=n$.",
    },
    {
      question: "$T:\\mathbb R^2\\to\\mathbb R^3$ har $\\operatorname{rang}[T]=2$. Er $T$ surjektiv?",
      options: ["Nei — $\\operatorname{rang}=2<3=\\dim\\mathbb R^3$, så bildet fyller ikke hele kodomenet", "Ja — rangen er lik antallet kolonner i standardmatrisen, og det betyr jo at $T$ har full rang", "Ja — enhver injektiv lineær avbildning er automatisk også surjektiv, helt per definisjon", "Nei — men det skyldes utelukkende at standardmatrisen ikke er en kvadratisk matrise her"],
      explanation: "Kodomenet er $\\mathbb R^3$ ($m=3$), men rangen er bare $2$. En avbildning fra et mindre til et større rom kan aldri være surjektiv.",
    },
    {
      question: "En lineær $T:\\mathbb R^5\\to\\mathbb R^3$ har $\\dim\\operatorname{im}T=3$. Hva er $\\dim\\ker T$?",
      options: ["$2$, ved dimensjonsteoremet $\\dim\\ker T=5-3$", "$3$, siden $\\dim\\ker T$ alltid er lik rangen til avbildningen", "$0$, siden bildet fyller kodomenet og $T$ dermed er injektiv", "$5$, siden domenet $\\mathbb R^5$ har dimensjon $5$ i utgangspunktet"],
      explanation: "Dimensjonsteoremet: $\\dim\\ker T=\\dim V-\\dim\\operatorname{im}T=5-3=2$.",
    },
    {
      question: "Hva er kolonne $j$ i matriserepresentasjonen $[T]_{\\mathcal B}$?",
      options: ["$\\mathcal B$-koordinatene til bildet av den $j$-te basisvektoren, altså $[T(\\mathbf b_j)]_{\\mathcal B}$", "Selve bildet $T(\\mathbf b_j)$ satt inn uendret, uten å oversette til $\\mathcal B$-koordinater", "$\\mathcal B$-koordinatene til den $j$-te basisvektoren $\\mathbf b_j$ selv, altså $[\\mathbf b_j]_{\\mathcal B}$", "Den $j$-te standardbasisvektoren $\\mathbf e_j$ i kodomenet, uavhengig av basisen $\\mathcal B$"],
      explanation: "Kolonne $j$ er $[T(\\mathbf b_j)]_{\\mathcal B}$: avbild basisvektor $\\mathbf b_j$, uttrykk resultatet i $\\mathcal B$, sett koordinatene inn.",
    },
    {
      question: "For $T(p)=p'$ på $\\operatorname{P}_2$ med $\\mathcal B=\\{1,t,t^2\\}$, hva er $[T]_{\\mathcal B}$?",
      options: ["$\\begin{bmatrix}0&1&0\\\\0&0&2\\\\0&0&0\\end{bmatrix}$", "$\\begin{bmatrix}0&0&0\\\\1&0&0\\\\0&2&0\\end{bmatrix}$", "$\\begin{bmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{bmatrix}$", "$\\begin{bmatrix}0&1&2\\\\0&0&0\\\\0&0&0\\end{bmatrix}$"],
      explanation: "$T(1)=0\\to(0,0,0)$, $T(t)=1\\to(1,0,0)$, $T(t^2)=2t\\to(0,2,0)$, satt inn som kolonner.",
    },
    {
      question: "Hva er kjernen til derivasjonsoperatoren $T(p)=p'$ på $\\operatorname{P}_n$?",
      options: ["Konstantpolynomene $\\operatorname{Span}\\{1\\}$ — de eneste med $p'=0$, så $\\dim\\ker T=1$", "Hele $\\operatorname{P}_n$, siden derivasjon sender ethvert polynom til nullpolynomet", "Bare nullpolynomet $\\{\\mathbf 0\\}$, så derivasjon er injektiv på $\\operatorname{P}_n$", "Polynomene av grad nøyaktig $n$, altså de med ledende ledd $a_nt^n$ ulik null"],
      explanation: "$p'=0$ betyr at $p$ er konstant; kjernen er $\\operatorname{Span}\\{1\\}$, dimensjon $1$. Derfor er derivasjon aldri injektiv på $\\operatorname{P}_n$.",
    },
    {
      question: "Hva er bildet til derivasjonsoperatoren $T(p)=p'$ på $\\operatorname{P}_3$?",
      options: ["$\\operatorname{P}_2$ (polynomer av grad $\\le 2$), $\\dim\\operatorname{im}T=3$", "$\\operatorname{P}_3$ (hele rommet), så $T$ er surjektiv på $\\operatorname{P}_3$", "Konstantpolynomene $\\operatorname{Span}\\{1\\}$, altså dimensjon $1$", "$\\operatorname{P}_4$ (polynomer av grad $\\le 4$), $\\dim\\operatorname{im}T=5$"],
      explanation: "Derivasjon senker graden med $1$, så bildet er $\\operatorname{P}_2$; den treffer aldri et grad-$3$-ledd og er ikke surjektiv.",
    },
    {
      question: "Hvorfor kan en lineær $T:\\mathbb R^4\\to\\mathbb R^2$ aldri være injektiv?",
      options: ["Fordi $\\dim\\ker T=4-\\operatorname{rang}[T]\\ge 4-2=2>0$ ved dimensjonsteoremet", "Fordi standardmatrisen $[T]$ da alltid har determinant lik tallet null", "Fordi kodomenet $\\mathbb R^2$ inneholder for få vektorer til å treffe alle", "Fordi rangen til $T$ alltid er lik $4$ når domenet er $\\mathbb R^4$"],
      explanation: "Rangen er høyst $2$, så nulliteten er minst $4-2=2>0$: kjernen er ikke-triviell. Større-til-mindre kan aldri være injektiv.",
    },
    {
      question: "Du har regnet $\\operatorname{Nul}[T]_{\\mathcal B}=\\operatorname{Span}\\{(1,0,0)\\}$ for $T(p)=p'$ på $\\operatorname{P}_2$ med $\\mathcal B=\\{1,t,t^2\\}$. Hva er $\\ker T$ som polynomrom?",
      options: ["Konstantpolynomene $\\operatorname{Span}\\{1\\}$, siden koordinaten $(1,0,0)$ svarer til polynomet $1$", "Førstegradspolynomene $\\operatorname{Span}\\{t\\}$, siden koordinaten $(1,0,0)$ svarer til leddet $t$ i rommet", "Hele $\\operatorname{P}_2$, ettersom nullrommet inneholder minst én ikke-triviell koordinatvektor", "Andregradspolynomene $\\operatorname{Span}\\{t^2\\}$, siden koordinaten $(1,0,0)$ peker på leddet $t^2$"],
      explanation: "Koordinatvektoren $(1,0,0)$ relativt $\\{1,t,t^2\\}$ er polynomet $1$, så $\\ker T$ er konstantene. Husk å oversette tilbake til polynom.",
    },
    {
      question: "En avbildning $T:V\\to V$ på samme rom er injektiv. Hva følger?",
      options: ["$T$ er også surjektiv, altså bijektiv — de tre er ekvivalente når domene og kodomene har samme dimensjon", "$T$ kan likevel godt være ikke-surjektiv, ettersom injektiv og surjektiv er to helt uavhengige egenskaper", "$T$ må da nødvendigvis ha en ikke-triviell kjerne som består av flere vektorer enn bare nullvektoren", "$T$ har nødvendigvis en determinant lik tallet null i sin matriserepresentasjon $[T]_{\\mathcal B}$"],
      explanation: "Med $\\dim V=\\dim W$ gir dimensjonsteoremet at $\\dim\\ker T=0$ tvinger $\\dim\\operatorname{im}T=\\dim V$, så injektiv, surjektiv og bijektiv er ekvivalente.",
    },
    {
      question: "Hva er den vanligste fellen når du bygger $[T]_{\\mathcal B}$?",
      options: ["Å sette inn råverdien $T(\\mathbf b_j)$ i stedet for dens $\\mathcal B$-koordinater $[T(\\mathbf b_j)]_{\\mathcal B}$", "Å regne ut determinanten til hver enkelt basisvektor før man i det hele tatt setter opp matrisen", "Å bruke altfor få desimaler i mellomregningen slik at presisjonen i sluttsvaret dermed går tapt", "Å skrive koordinatvektorene som liggende rader i stedet for som stående kolonnevektorer i matrisen"],
      explanation: "Kolonnene MÅ være i $\\mathcal B$-koordinater; glemmer du å oversette bildet til koordinater, blir hele matrisen feil.",
    },
  ],
  'tma4110-5-1': [
    {
      question: "Hva betyr det at $\\mathbf v$ er en egenvektor for $A$ med egenverdi $\\lambda$?",
      options: ["$\\mathbf v\\ne\\mathbf 0$ og $A\\mathbf v=\\lambda\\mathbf v$", "$A\\mathbf v=\\lambda\\mathbf v$, og $\\mathbf v=\\mathbf 0$ er tillatt", "$\\mathbf v$ løser $A\\mathbf v=\\mathbf 0$, og $\\lambda=\\det A$", "$\\mathbf v$ er en kolonne i $A$ ganget med $\\lambda$"],
      explanation: "Egenvektoren må være $\\ne\\mathbf 0$, og $A\\mathbf v=\\lambda\\mathbf v$ betyr at $A$ virker som ren skalering med faktor $\\lambda$ langs $\\mathbf v$. Nullvektoren utelukkes fordi $A\\mathbf 0=\\lambda\\mathbf 0$ ellers ville gjelde for alle $\\lambda$.",
    },
    {
      question: "Hvordan finner du egenverdiene til en matrise $A$?",
      options: ["Løs $\\det(A-\\lambda I)=0$", "Løs $\\det(A+\\lambda I)=0$ og snu fortegn", "Regn $\\det A$ og trekk $\\lambda$ fra diagonalen", "Radreduser $A$ og les egenverdiene av pivotene"],
      explanation: "$\\lambda$ er egenverdi nettopp når $A-\\lambda I$ er singulær, altså når $\\det(A-\\lambda I)=0$. Denne likningen kalles den karakteristiske likningen; røttene er egenverdiene.",
    },
    {
      question: "Er $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ egenvektor for $A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}$, og med hvilken egenverdi?",
      options: ["Ja, egenverdi $3$", "Ja, egenverdi $2$", "Nei, $A\\mathbf v$ er ikke et multiplum av $\\mathbf v$", "Ja, egenverdi $6$"],
      explanation: "Regn $A\\mathbf v=\\begin{bmatrix}2+1\\\\1+2\\end{bmatrix}=\\begin{bmatrix}3\\\\3\\end{bmatrix}=3\\begin{bmatrix}1\\\\1\\end{bmatrix}$. Svaret er $3$ ganger vektoren, så det er en egenvektor med egenverdi $3$.",
    },
    {
      question: "Hva er egenrommet $E_\\lambda$ til en egenverdi $\\lambda$?",
      options: ["$\\operatorname{Nul}(A-\\lambda I)$", "$\\operatorname{Col}(A-\\lambda I)$", "Mengden av egenverdier lik $\\lambda$", "Løsningsmengden til $A\\mathbf x=\\lambda$"],
      explanation: "Egenrommet er $\\{\\mathbf x:A\\mathbf x=\\lambda\\mathbf x\\}=\\operatorname{Nul}(A-\\lambda I)$, et underrom du finner ved å radredusere $A-\\lambda I$. Det inneholder alle egenvektorer til $\\lambda$ samt $\\mathbf 0$.",
    },
    {
      question: "Hva er egenverdiene til $A=\\begin{bmatrix}4&0&0\\\\7&2&0\\\\3&5&2\\end{bmatrix}$?",
      options: ["$4,2,2$ (fra diagonalen, triangulær)", "$4,7,3$ (den første kolonnen)", "$4,2$ regnet som bare to egenverdier", "Krever full løsning av et tredjegradspolynom"],
      explanation: "Matrisen er nedre triangulær, så egenverdiene står på diagonalen: $4,2,2$. Egenverdien $2$ opptrer to ganger på diagonalen og har derfor algebraisk multiplisitet $2$.",
    },
    {
      question: "Hva er forskjellen på algebraisk og geometrisk multiplisitet?",
      options: ["Algebraisk = rotmultiplisitet; geometrisk = $\\dim E_\\lambda$", "Algebraisk = $\\dim E_\\lambda$; geometrisk = rotmultiplisitet", "Algebraisk = reell del; geometrisk = kompleks del", "De er alltid like, så skillet er uten betydning"],
      explanation: "Algebraisk multiplisitet = rotmultiplisitet i det karakteristiske polynomet; geometrisk multiplisitet = dimensjonen til egenrommet. Det gjelder alltid $1\\le$ geometrisk $\\le$ algebraisk.",
    },
    {
      question: "Hvilken ulikhet gjelder alltid mellom multiplisitetene?",
      options: ["$1\\le$ geometrisk $\\le$ algebraisk", "$1\\le$ algebraisk $\\le$ geometrisk", "geometrisk $=$ algebraisk $-1$", "geometrisk $\\ge$ algebraisk alltid"],
      explanation: "En egenverdi har alltid minst én egenvektor (geometrisk $\\ge1$), og geometrisk multiplisitet kan aldri overstige den algebraiske. Er de like for hver egenverdi, er matrisen diagonaliserbar.",
    },
    {
      question: "For $A=\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$ er $\\dim E_2=1$ mens algebraisk multiplisitet er $2$. Hva forteller det?",
      options: ["At $A$ ikke er diagonaliserbar", "At $A$ er diagonaliserbar", "At $\\lambda=2$ ikke er en ekte egenverdi", "At egenverdien er kompleks"],
      explanation: "Når geometrisk multiplisitet ($\\dim E_2=1$) er strengt mindre enn algebraisk ($2$), mangler egenverdien nok uavhengige egenvektorer, og matrisen er ikke diagonaliserbar (kap. 5.2).",
    },
    {
      question: "En $3\\times3$-matrise har egenverdier $1,2,4$. Hva er $\\det A$?",
      options: ["$8$ (produktet av egenverdiene)", "$7$ (summen av egenverdiene)", "$14$ (dobbelt av summen)", "$1$ (den minste egenverdien)"],
      explanation: "Determinanten er produktet av egenverdiene: $\\det A=1\\cdot2\\cdot4=8$. (Summen $1+2+4=7$ er derimot sporet.)",
    },
    {
      question: "En $2\\times2$-matrise har $\\operatorname{spor}A=5$ og $\\det A=6$. Hva er egenverdiene?",
      options: ["$2$ og $3$", "$5$ og $6$", "$1$ og $6$", "$-2$ og $-3$"],
      explanation: "For 2×2 er den karakteristiske likningen $\\lambda^2-(\\operatorname{spor}A)\\lambda+\\det A=0$, altså $\\lambda^2-5\\lambda+6=0=(\\lambda-2)(\\lambda-3)$. Egenverdiene er $2$ og $3$.",
    },
    {
      question: "Når er $0$ en egenverdi for $A$?",
      options: ["Når $A$ er singulær ($\\det A=0$)", "Når $A$ er inverterbar ($\\det A\\ne0$)", "Aldri, siden egenvektorer er $\\ne\\mathbf 0$", "Alltid, siden $A\\mathbf 0=\\mathbf 0$"],
      explanation: "$0$ er egenverdi når $A\\mathbf v=\\mathbf 0$ har en løsning $\\mathbf v\\ne\\mathbf 0$, altså når $\\operatorname{Nul}A\\ne\\{\\mathbf 0\\}$, som er det samme som at $A$ er singulær ($\\det A=0$).",
    },
    {
      question: "Hvis $A^2=A$, hvilke verdier kan en egenverdi $\\lambda$ ha?",
      options: ["$0$ eller $1$", "$1$ eller $-1$", "Hvilken som helst verdi", "Bare $1$"],
      explanation: "Sett inn egenvektoren: $A^2\\mathbf v=\\lambda^2\\mathbf v$, men $A^2=A$ gir $A^2\\mathbf v=A\\mathbf v=\\lambda\\mathbf v$. Dermed $\\lambda^2=\\lambda$, så $\\lambda(\\lambda-1)=0$ og $\\lambda\\in\\{0,1\\}$.",
    },
    {
      question: "Hvis $A\\mathbf v=\\lambda\\mathbf v$, hva er $A^3\\mathbf v$?",
      options: ["$\\lambda^3\\mathbf v$", "$3\\lambda\\mathbf v$", "$\\lambda\\mathbf v^3$", "Ikke et multiplum av $\\mathbf v$"],
      explanation: "Gjentatt ganging med $A$: $A^2\\mathbf v=\\lambda^2\\mathbf v$ og $A^3\\mathbf v=\\lambda^3\\mathbf v$. Egenvektoren er den samme; egenverdien blir $\\lambda^k$ for $A^k$.",
    },
    {
      question: "Raskeste måte å sjekke om en OPPGITT vektor $\\mathbf v$ er egenvektor?",
      options: ["Regn $A\\mathbf v$ og se om det er et multiplum av $\\mathbf v$", "Løs $\\det(A-\\lambda I)=0$ først", "Radreduser $A$ og let etter $\\mathbf v$ i pivotene", "Regn $\\det A$ og sammenlign med $\\|\\mathbf v\\|$"],
      explanation: "Når $\\mathbf v$ er gitt, er innsetting raskest: er $A\\mathbf v=\\lambda\\mathbf v$ for et tall $\\lambda$, er $\\mathbf v$ egenvektor og $\\lambda$ egenverdien. Du slipper hele den karakteristiske likningen.",
    },
    {
      question: "Egenvektorer for forskjellige egenverdier er alltid …",
      options: ["lineært uavhengige", "lineært avhengige", "ortogonale, uansett matrise", "like lange"],
      explanation: "Egenvektorer for ulike egenverdier er alltid lineært uavhengige. Har en $n\\times n$-matrise $n$ forskjellige egenverdier, gir dette $n$ uavhengige egenvektorer — en egenbasis for $\\mathbb R^n$.",
    },
    {
      question: "Hva er egenverdiene til $A=\\begin{bmatrix}1&2\\\\2&1\\end{bmatrix}$?",
      options: ["$3$ og $-1$", "$1$ og $2$", "$3$ og $1$", "$2$ og $-2$"],
      explanation: "$\\det(A-\\lambda I)=(1-\\lambda)^2-4=\\lambda^2-2\\lambda-3=(\\lambda-3)(\\lambda+1)$. Egenverdiene er $3$ og $-1$. Kontroll: sum $2=\\operatorname{spor}A$, produkt $-3=\\det A$.",
    },
    {
      question: "Hvorfor kan ikke $\\mathbf 0$ være en egenvektor?",
      options: ["Fordi $A\\mathbf 0=\\lambda\\mathbf 0$ ville holdt for enhver $\\lambda$", "Fordi $\\mathbf 0$ ikke ligger i noe nullrom", "Fordi $\\det A$ da måtte være $0$", "Fordi $\\mathbf 0$ alltid gir egenverdi $1$"],
      explanation: "$A\\mathbf 0=\\mathbf 0=\\lambda\\mathbf 0$ er sant for alle $\\lambda$, så hadde $\\mathbf 0$ vært tillatt ville hver eneste $\\lambda$ vært en «egenverdi». Definisjonen krever derfor $\\mathbf v\\ne\\mathbf 0$.",
    },
    {
      question: "Hvordan opptrer komplekse egenverdier for en reell matrise?",
      options: ["I konjugerte par $a\\pm bi$", "Alltid enkeltvis, uten partner", "Bare som rent imaginære $\\pm bi$", "Aldri — reelle matriser har reelle egenverdier"],
      explanation: "Det karakteristiske polynomet har reelle koeffisienter, så komplekse røtter opptrer i konjugerte par $a+bi$ og $a-bi$. Rotasjonsmatrisen $\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$ har egenverdier $\\pm i$ (kap. 5.4).",
    },
    {
      question: "For en triangulær matrise står egenverdiene …",
      options: ["rett på diagonalen", "i den første raden", "som summen av hver rad", "først synlige etter full RREF"],
      explanation: "Er $A$ triangulær, er $A-\\lambda I$ også triangulær, og $\\det(A-\\lambda I)=(a_{11}-\\lambda)\\cdots(a_{nn}-\\lambda)$. Røttene — egenverdiene — er nettopp diagonalelementene.",
    },
    {
      question: "En 2×2-matrise med $\\operatorname{spor}A=4$, $\\det A=3$ er påstått å ha egenverdier $2,2$. Hva sier kontrollen?",
      options: ["Feil: $2\\cdot2=4\\ne3=\\det A$", "Alt stemmer, siden $2+2=4$", "Egenverdiene må være komplekse", "Matrisen har ingen egenverdier"],
      explanation: "Summen $2+2=4$ stemmer med sporet, men produktet $2\\cdot2=4$ skal være $\\det A=3$. Det gjør det ikke, så egenverdiene er regnet feil (riktig er $\\lambda=1,3$).",
    },
  ],
  'tma4110-5-2': [
    {
      question: "Hva betyr det at $A$ er diagonaliserbar?",
      options: ["$A=PDP^{-1}$ med $D$ diagonal og $P$ inverterbar", "At $A$ selv allerede er en diagonalmatrise fra før", "At $\\det A=0$ så $A$ kan radreduseres til diagonal", "At $A$ er symmetrisk med bare reelle egenverdier"],
      explanation: "Diagonaliserbarhet betyr at $A$ kan skrives $A=PDP^{-1}$ med $D$ diagonal og $P$ inverterbar. Det svarer til at $A$ har $n$ lineært uavhengige egenvektorer (en egenbasis).",
    },
    {
      question: "I $A=PDP^{-1}$, hva inneholder $P$ og $D$?",
      options: ["$P$: egenvektorer (kolonner); $D$: egenverdier (diagonal)", "$P$: egenverdier (diagonal); $D$: egenvektorer (kolonner)", "$P$ og $D$ er begge diagonale med de samme egenverdiene", "$P=I$ er identiteten, og $D=A$ etter radreduksjon"],
      explanation: "$D=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$ og $P=[\\mathbf v_1\\ \\cdots\\ \\mathbf v_n]$ der $\\mathbf v_i$ er egenvektor for $\\lambda_i$, matchet søyle for søyle: egenvektoren i kolonne $i$ hører til egenverdien på plass $i$.",
    },
    {
      question: "Hva sier diagonaliserbarhetskriteriet?",
      options: ["Geometrisk = algebraisk multiplisitet for hver egenverdi", "Alle egenverdiene må være strengt positive reelle tall", "Determinanten $\\det A$ må være forskjellig fra null", "Matrisen må være øvre eller nedre triangulær"],
      explanation: "Kriteriet: $A$ er diagonaliserbar nettopp når summen av egenrom-dimensjonene er $n$, ekvivalent at geometrisk = algebraisk multiplisitet for hver egenverdi (nok uavhengige egenvektorer).",
    },
    {
      question: "En $3\\times3$-matrise har tre forskjellige egenverdier. Er den diagonaliserbar?",
      options: ["Ja — $n$ distinkte egenverdier holder alene", "Nei — man må alltid regne ut hvert egenrom", "Bare hvis den i tillegg er symmetrisk", "Bare hvis alle egenverdiene er positive"],
      explanation: "Egenvektorer for ulike egenverdier er lineært uavhengige, så tre distinkte egenverdier gir tre uavhengige egenvektorer — en egenbasis. Snarvei 1 gir diagonaliserbarhet uten mer regning.",
    },
    {
      question: "Hva garanterer spektralteoremet for en symmetrisk matrise?",
      options: ["Ortogonalt diagonaliserbar ($A=PDP^{T}$), reelle egenverdier", "Ikke diagonaliserbar med mindre egenverdiene er distinkte", "At matrisen $A$ alltid er inverterbar uansett egenverdier", "Komplekse egenverdier som opptrer parvis i konjugerte par"],
      explanation: "Spektralteoremet: enhver reell symmetrisk matrise er ortogonalt diagonaliserbar, $A=PDP^{T}$ med ortogonal $P$, har bare reelle egenverdier, og er alltid diagonaliserbar uansett multiplisiteter.",
    },
    {
      question: "Hvordan viser du at en matrise IKKE er diagonaliserbar?",
      options: ["Pek på en egenverdi der geometrisk $<$ algebraisk", "Vis at determinanten $\\det A$ tilfeldigvis er null", "Vis at matrisen ikke er symmetrisk (spektralteorem)", "Vis at minst én av egenverdiene er et negativt tall"],
      explanation: "Det holder å finne én egenverdi der $\\dim E_\\lambda$ er strengt mindre enn den algebraiske multiplisiteten — da mangler uavhengige egenvektorer. Å bare si «ikke diagonaliserbar» uten å peke på egenrommet gir ikke uttelling.",
    },
    {
      question: "Er $A=\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$ diagonaliserbar?",
      options: ["Nei — $\\dim E_2=1$ er mindre enn algebraisk $2$", "Ja — den er triangulær med egenverdi på diagonalen", "Ja — egenverdi $2$ har algebraisk multiplisitet $2$", "Nei — fordi determinanten er $4$ og dermed $\\ne0$"],
      explanation: "Egenverdien $2$ har algebraisk multiplisitet $2$, men $A-2I=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$ gir $\\dim E_2=1$. Geometrisk $<$ algebraisk, så matrisen er ikke diagonaliserbar.",
    },
    {
      question: "Hva er en ortogonal matrise $P$?",
      options: ["Ortonormale kolonner, $P^{T}P=I$ (så $P^{-1}=P^{T}$)", "En kvadratisk matrise med determinant lik null", "Parvis ortogonale kolonner uten krav om lengde $1$", "En diagonalmatrise med bare $\\pm1$ langs diagonalen"],
      explanation: "En ortogonal matrise har ortonormale kolonner (parvis ortogonale OG lengde $1$), ekvivalent $P^{T}P=I$. Da er $P^{-1}=P^{T}$, som utnyttes i $A=PDP^{T}$.",
    },
    {
      question: "En matrise har egenverdier $2,2,5$ med $\\dim E_2=2$. Diagonaliserbar?",
      options: ["Ja — geometrisk er lik algebraisk for begge", "Nei — matrisen har en repetert egenverdi", "Nei — egenverdiene er ikke innbyrdes distinkte", "Kan ikke avgjøres uten å konstruere $P$ først"],
      explanation: "$\\lambda=2$: geometrisk $2$ = algebraisk $2$. $\\lambda=5$: automatisk $1=1$. Summen av dimensjonene er $3=n$, så kriteriet er oppfylt og matrisen er diagonaliserbar — repetert egenverdi hindrer det ikke.",
    },
    {
      question: "$A=\\begin{bmatrix}4&1\\\\2&3\\end{bmatrix}$ har egenverdier $2,5$ med egenvektorer $(1,-2),(1,1)$. Riktig matchet $P,D$?",
      options: ["$P=\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix},\\ D=\\operatorname{diag}(2,5)$", "$P=\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix},\\ D=\\operatorname{diag}(5,2)$", "$P=\\operatorname{diag}(2,5),\\ D=\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix}$", "$P=\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix},\\ D=\\operatorname{diag}(2,5)$"],
      explanation: "Med $D=\\operatorname{diag}(2,5)$ må kolonne 1 i $P$ være egenvektoren $(1,-2)$ for $2$ og kolonne 2 være $(1,1)$ for $5$. Bytter du $D$-rekkefølgen uten å bytte $P$-kolonnene, stemmer ikke $A=PDP^{-1}$.",
    },
    {
      question: "Hvorfor gjelder $A=PDP^{-1}$ når kolonnene i $P$ er egenvektorer?",
      options: ["Fordi $AP=PD$, og inverterbar $P$ gir $A=PDP^{-1}$", "Fordi $D$ per definisjon alltid er $A$ radredusert", "Fordi likningen $AP=PD$ holder for en vilkårlig $P$", "Fordi $P^{-1}=P^{T}$ gjelder for absolutt alle $P$"],
      explanation: "$AP$ ganger $A$ på hver kolonne: $A\\mathbf v_i=\\lambda_i\\mathbf v_i$, som er kolonne $i$ i $PD$. Så $AP=PD$, og siden egenvektorene er uavhengige er $P$ inverterbar: $A=PDP^{-1}$.",
    },
    {
      question: "For hvilke $\\alpha$ er $A=\\begin{bmatrix}3&\\alpha\\\\0&3\\end{bmatrix}$ diagonaliserbar?",
      options: ["Bare for $\\alpha=0$ (ellers $\\dim E_3=1<2$)", "For alle $\\alpha$ (egenverdien $3$ finnes uansett)", "Bare for $\\alpha\\ne0$ (da blir egenverdiene distinkte)", "Bare for $\\alpha=3$ (matrisen blir da symmetrisk)"],
      explanation: "Egenverdien er $3$ (dobbel) uansett $\\alpha$. $A-3I=\\begin{bmatrix}0&\\alpha\\\\0&0\\end{bmatrix}$: for $\\alpha\\ne0$ er $\\dim E_3=1<2$ (ikke diag.), for $\\alpha=0$ er $A=3I$ med $\\dim E_3=2$ (diag.).",
    },
    {
      question: "Fordelen med $A=PDP^{T}$ over $A=PDP^{-1}$?",
      options: ["Du slipper å regne invers, siden $P^{-1}=P^{T}$", "Egenverdiene i $D$ blir automatisk positive tall", "Diagonalen $D$ trenger ikke lenger egenverdiene", "Metoden virker for alle matriser, ikke bare symmetriske"],
      explanation: "For en ortogonal $P$ er $P^{-1}=P^{T}$, så transponering (gratis) erstatter en full inversutregning. Dette gjelder bare når kolonnene er ortonormale, altså for symmetriske $A$ (spektralteoremet).",
    },
    {
      question: "Er en triangulær matrise alltid diagonaliserbar?",
      options: ["Nei — $\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$ er et moteksempel", "Ja — egenverdiene står jo rett på diagonalen", "Ja — men bare når hele diagonalen er positiv", "Nei — ingen triangulær matrise er diagonaliserbar"],
      explanation: "Triangularitet gir egenverdiene, men ikke diagonaliserbarhet. Er diagonalelementene distinkte, følger diagonaliserbarhet (snarvei 1); er noen like, må egenrom-dimensjonen sjekkes — og den kan svikte.",
    },
    {
      question: "Hva er $D^k$ når $D=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$?",
      options: ["$\\operatorname{diag}(\\lambda_1^k,\\dots,\\lambda_n^k)$", "$\\operatorname{diag}(k\\lambda_1,\\dots,k\\lambda_n)$", "$\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$ uendret", "En full matrise, må regnes med produkt hver gang"],
      explanation: "For en diagonalmatrise er potensen elementvis: $D^k=\\operatorname{diag}(\\lambda_1^k,\\dots,\\lambda_n^k)$. Dette gjør $A^n=PD^nP^{-1}$ enkelt (kap. 5.3).",
    },
    {
      question: "Er en diagonaliserbar matrise alltid inverterbar?",
      options: ["Nei — den kan godt ha egenverdi $0$ (singulær)", "Ja — siden $P$ er inverterbar, må $A$ også være det", "Ja — alle diagonaliserbare matriser har $\\det\\ne0$", "Nei — ingen diagonaliserbar matrise er inverterbar"],
      explanation: "Diagonaliserbarhet og inverterbarhet er uavhengige. En diagonaliserbar matrise med egenverdi $0$ (f.eks. en projeksjon) er singulær, mens $\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$ er inverterbar men ikke diagonaliserbar.",
    },
    {
      question: "En symmetrisk matrise har egenverdier $3,3,7$. Diagonaliserbar?",
      options: ["Ja — spektralteoremet garanterer det alltid", "Nei — egenverdien $3$ er repetert", "Bare i tilfellet der $\\dim E_3=1$", "Kan ikke avgjøres uten å regne egenrommene"],
      explanation: "Spektralteoremet garanterer at enhver symmetrisk matrise er (ortogonalt) diagonaliserbar, uansett multiplisiteter. Så $\\dim E_3=2$ er automatisk, og matrisen er diagonaliserbar.",
    },
    {
      question: "Hva menes med at $A$ og $B$ er similære?",
      options: ["$B=P^{-1}AP$ for en inverterbar matrise $P$", "At $A$ og $B$ bare har samme størrelse", "At $A$ er den transponerte, altså $A=B^{T}$", "At både $A$ og $B$ er diagonale matriser"],
      explanation: "Similære matriser ($B=P^{-1}AP$) representerer samme avbildning i ulike baser. De deler karakteristisk polynom, egenverdier, spor og determinant. Diagonalisering er tilfellet der $B=D$ er diagonal.",
    },
    {
      question: "Hvorfor kan egenvektorene i $P$ skaleres fritt?",
      options: ["Fordi $E_\\lambda$ er et underrom av $\\mathbb R^n$", "Fordi skalering endrer egenverdien i $D$ tilsvarende", "Fordi $\\det P$ er nødt til å være lik $1$", "Fordi bare enhetsvektorer er tillatt i $P$"],
      explanation: "En egenvektor ganget med et tall $\\ne0$ er fortsatt egenvektor for samme egenverdi ($E_\\lambda$ er et underrom). Derfor kan fasiten velge de peneste heltallsvektorene; $D$ endres ikke.",
    },
    {
      question: "En matrise oppfyller $A^2=A$. Hva vet du om diagonaliserbarheten?",
      options: ["Alltid diagonaliserbar ($D$ har bare $0$ og $1$)", "Aldri diagonaliserbar, uansett egenverdier", "Bare i tilfellet der $A$ er identitetsmatrisen", "Kan umulig avgjøres ut fra $A^2=A$ alene"],
      explanation: "Idempotente matriser ($A^2=A$) har bare egenverdiene $0$ og $1$ (kap. 5.1), og egenrommene $E_0=\\operatorname{Nul}A$ og $E_1$ fyller opp $\\mathbb R^n$. De er alltid diagonaliserbare — nettopp projeksjoner.",
    },
  ],
  'tma4110-5-3': [
    {
      question: "Hvordan regner du $A^n$ når $A=PDP^{-1}$?",
      options: ["$A^n=PD^nP^{-1}$ ($D^n$ elementvis)", "$A^n=P^nD^nP^{-n}$", "$A^n=nPDP^{-1}$", "$A$ ganget med seg selv $n$ ganger"],
      explanation: "De indre $P^{-1}P$ kanselleres: $(PDP^{-1})^n=PD^nP^{-1}$, og $D^n=\\operatorname{diag}(\\lambda_1^n,\\dots,\\lambda_n^n)$. Det er hele gevinsten ved diagonalisering.",
    },
    {
      question: "Hva er $D^n$ for $D=\\operatorname{diag}(2,3)$?",
      options: ["$\\operatorname{diag}(2^n,3^n)$", "$\\operatorname{diag}(2n,3n)$", "$\\operatorname{diag}(2,3)$ uendret", "$n\\cdot\\operatorname{diag}(2,3)$"],
      explanation: "Potens av en diagonalmatrise er elementvis: hvert diagonalelement opphøyes i $n$, så $D^n=\\operatorname{diag}(2^n,3^n)$.",
    },
    {
      question: "Hvis $A\\mathbf v=\\lambda\\mathbf v$ og $q$ er et polynom, hva er $q(A)\\mathbf v$?",
      options: ["$q(\\lambda)\\mathbf v$", "$q(\\mathbf v)\\lambda$", "$\\lambda\\,q(\\mathbf v)$", "Ikke et multiplum av $\\mathbf v$"],
      explanation: "Siden $A^k\\mathbf v=\\lambda^k\\mathbf v$ for hvert ledd, blir $q(A)\\mathbf v=q(\\lambda)\\mathbf v$. Egenvektoren er den samme; egenverdien blir $q(\\lambda)$.",
    },
    {
      question: "Hva kjennetegner en stokastisk (Markov-)matrise?",
      options: ["Ikke-negative elementer, kolonnesum $1$", "Determinant lik $1$", "Symmetrisk med positive egenverdier", "Alle elementer like"],
      explanation: "En stokastisk matrise har ikke-negative elementer og kolonnesum $1$ — hver kolonne er en sannsynlighetsfordeling for overgangen fra én tilstand.",
    },
    {
      question: "Hvorfor har en stokastisk matrise alltid egenverdi $1$?",
      options: ["Kolonnesum $1$ gir $A^{T}\\mathbf 1=\\mathbf 1$", "Fordi determinanten $\\det A$ alltid er lik $1$", "Fordi samtlige egenverdier tvinges til å bli $1$", "Fordi sporet av matrisen alltid summerer til $1$"],
      explanation: "Kolonnesum $1$ betyr at $A^{T}$ har radsum $1$, så $A^{T}\\mathbf 1=\\mathbf 1$. Da er $1$ egenverdi for $A^{T}$, og $A$ har samme egenverdier som $A^{T}$.",
    },
    {
      question: "Hvordan finner du den stasjonære fordelingen til en Markov-matrise?",
      options: ["Løs $(A-I)\\mathbf q=\\mathbf 0$, normaliser til sum $1$", "Løs $A\\mathbf q=\\mathbf 0$, normaliser til lengde $1$", "Del vektoren på $\\det A$", "Ta gjennomsnittet av kolonnene"],
      explanation: "Stasjonærvektoren er en egenvektor for $\\lambda=1$: løs $(A-I)\\mathbf q=\\mathbf 0$ ($E_1=\\operatorname{Nul}(A-I)$), og skaler så komponentene summerer til $1$ (ikke lengde $1$).",
    },
    {
      question: "Stasjonær fordeling for $A=\\begin{bmatrix}1/2&1/4\\\\1/2&3/4\\end{bmatrix}$?",
      options: ["$(1/3,\\,2/3)$", "$(1/2,\\,1/2)$", "$(1/4,\\,3/4)$", "$(2/3,\\,1/3)$"],
      explanation: "$A-I=\\begin{bmatrix}-1/2&1/4\\\\1/2&-1/4\\end{bmatrix}$ gir $q_2=2q_1$, egenvektor $(1,2)$. Normalisert (sum $3$): $(1/3,2/3)$. Kontroll: $A(1/3,2/3)=(1/3,2/3)$.",
    },
    {
      question: "I $A^n\\mathbf x_0=\\sum c_i\\lambda_i^n\\mathbf v_i$, hvilke ledd overlever når $n\\to\\infty$?",
      options: ["Ledd med $|\\lambda_i|\\ge1$; $|\\lambda_i|<1$ dør ut", "Alle ledd overlever helt uendret uansett $n$", "Bare det ene leddet med minst $|\\lambda_i|$", "Ingen ledd; grensen blir alltid nullvektoren"],
      explanation: "$\\lambda_i^n\\to0$ når $|\\lambda_i|<1$, så disse leddene forsvinner. Ledd med $|\\lambda_i|=1$ (typisk $\\lambda=1$ for Markov) overlever, og eventuelle $|\\lambda_i|>1$ vokser.",
    },
    {
      question: "Egenverdier $1,1/2$; $\\mathbf x_0=(1,0)=\\tfrac15\\mathbf v_1+\\tfrac35\\mathbf v_2$, $\\mathbf v_1=(2,3)$ for $\\lambda=1$. Hva er $\\lim A^n\\mathbf x_0$?",
      options: ["$(2/5,\\,3/5)$", "$(1,\\,0)$", "$\\tfrac35\\mathbf v_2$", "$(2,\\,3)$"],
      explanation: "$A^n\\mathbf x_0=\\tfrac15\\cdot1^n\\mathbf v_1+\\tfrac35(1/2)^n\\mathbf v_2$. Andre ledd $\\to\\mathbf 0$, så grensen er $\\tfrac15(2,3)=(2/5,3/5)$ — den stasjonære fordelingen.",
    },
    {
      question: "Hva er en nilpotent matrise?",
      options: ["$A^k=O$ for et $k\\ge1$", "$A^k=I$ for et $k\\ge1$", "Determinant lik $1$", "Lik sin egen invers"],
      explanation: "Nilpotent betyr at $A^k=O$ (nullmatrisen) for et heltall $k\\ge1$. Et eksempel er $\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$, som har kvadrat $O$.",
    },
    {
      question: "Hvis $A^k=O$, hva er egenverdiene til $A$?",
      options: ["Alle er $0$", "Alle er $1$", "$k$-te enhetsrøtter", "Hva som helst"],
      explanation: "Fra $A\\mathbf v=\\lambda\\mathbf v$ følger $A^k\\mathbf v=\\lambda^k\\mathbf v$. Med $A^k=O$ er venstresiden $\\mathbf 0$, så $\\lambda^k\\mathbf v=\\mathbf 0$; siden $\\mathbf v\\ne\\mathbf 0$ er $\\lambda^k=0$, altså $\\lambda=0$.",
    },
    {
      question: "Kan en nilpotent matrise ($A^k=O$, $A\\ne O$) være inverterbar?",
      options: ["Nei — alle egenverdier $0$, så $\\det A=0$", "Ja — så lenge matrisen ikke er nullmatrisen", "Ja — nilpotente matriser er alltid inverterbare", "Bare når potensen $k$ tilfeldigvis er et partall"],
      explanation: "Nilpotens gir egenverdier $0$, så $\\det A=\\prod\\lambda_i=0$. Ved determinantkriteriet er $A$ singulær, altså ikke inverterbar. (Ellers ville $A^k=O$ gitt $I=O$.)",
    },
    {
      question: "Hva sier Cayley–Hamilton for en $2\\times2$-matrise?",
      options: ["$A^2-(\\operatorname{spor}A)A+(\\det A)I=O$", "$A^2=\\operatorname{spor}A\\cdot\\det A\\cdot I$", "$A^2=A$ for enhver matrise", "$\\det(A^2)=\\operatorname{spor}A$"],
      explanation: "Cayley–Hamilton: $p(A)=O$ der $p$ er det karakteristiske polynomet. For 2×2 er $p(\\lambda)=\\lambda^2-(\\operatorname{spor}A)\\lambda+\\det A$, så $A^2-(\\operatorname{spor}A)A+(\\det A)I=O$.",
    },
    {
      question: "Når går $A^n\\to O$ for en diagonaliserbar matrise?",
      options: ["Når alle $|\\lambda_i|<1$", "Når alle egenverdier er positive", "Når $\\det A=0$", "Alltid"],
      explanation: "$A^n=PD^nP^{-1}$ går mot $O$ nettopp når hvert $\\lambda_i^n\\to0$, altså når alle egenverdier har $|\\lambda_i|<1$. Slike matriser kalles konvergente.",
    },
    {
      question: "En stasjonær fordeling normaliseres slik at komponentene …",
      options: ["summerer til $1$", "har lengde $1$", "blir alle like store", "summerer til $\\det A$"],
      explanation: "En sannsynlighetsfordeling har komponentsum $1$. Du deler derfor egenvektoren på summen av komponentene — ikke på lengden (normen), som ville gitt en enhetsvektor.",
    },
    {
      question: "Har $A$, $A^2$ og $q(A)$ samme egenvektorer?",
      options: ["Ja — bare egenverdiene endres", "Nei — hver potens har nye", "Bare hvis $A$ symmetrisk", "Bare $A$ og $A^2$"],
      explanation: "Enhver potens og ethvert polynom i $A$ har de samme egenvektorene som $A$; egenverdien blir $\\lambda^k$ eller $q(\\lambda)$. Derfor brukes samme $P$ i $A^n=PD^nP^{-1}$ og $q(A)=Pq(D)P^{-1}$.",
    },
    {
      question: "Egenverdiene til $A$ er $2,5$. Egenverdiene til $B=A^2-7A+10I$?",
      options: ["$0$ og $0$", "$4$ og $25$", "$2$ og $5$", "$-7$ og $10$"],
      explanation: "$q(\\lambda)=\\lambda^2-7\\lambda+10$ gir $q(2)=0$ og $q(5)=0$. Begge egenverdier til $B$ er $0$, så $B=O$ — nettopp Cayley–Hamilton, siden $q$ er det karakteristiske polynomet.",
    },
    {
      question: "Ganger du en sannsynlighetsfordeling med en stokastisk matrise, hva skjer med komponentsummen?",
      options: ["Den forblir $1$", "Den dobles", "Den går mot $0$", "Den blir $\\det A$"],
      explanation: "Med kolonnesum $1$ er $\\sum_i(A\\mathbf x)_i=\\sum_j x_j$, så en fordeling med sum $1$ forblir en fordeling med sum $1$ gjennom alle steg — en nyttig kontroll på Markov-regning.",
    },
  ],
  'tma4110-5-4': [
    {
      question: "En reell $2\\times2$-matrise har egenverdi $\\lambda=3+2i$. Hva er den andre egenverdien?",
      options: ["$3-2i$, altså konjugatet, siden komplekse egenverdier kommer parvis", "$3+2i$ igjen, siden en $2\\times2$-matrise har en dobbel egenverdi", "$-3-2i$, med motsatt fortegn på både real- og imaginærdel", "$2+3i$, der real- og imaginærdel har byttet plass i tallet"],
      explanation: "For en reell matrise har karakteristisk polynom reelle koeffisienter, så komplekse røtter opptrer i konjugerte par: $\\lambda=3+2i$ tvinger $\\bar\\lambda=3-2i$.",
    },
    {
      question: "Hvordan finner du egenvektoren til $\\bar\\lambda$ når du kjenner egenvektoren $\\mathbf v$ til $\\lambda$ (reell matrise)?",
      options: ["Konjuger $\\mathbf v$ komponentvis; da hører $\\bar{\\mathbf v}$ til $\\bar\\lambda$", "Bytt fortegn på hele $\\mathbf v$; da hører $-\\mathbf v$ til $\\bar\\lambda$", "Transponer $\\mathbf v$; da hører radvektoren $\\mathbf v^T$ til $\\bar\\lambda$", "Normaliser $\\mathbf v$ til lengde $1$; da hører den til $\\bar\\lambda$"],
      explanation: "Konjugerer du $A\\mathbf v=\\lambda\\mathbf v$ og bruker $\\bar A=A$, får du $A\\bar{\\mathbf v}=\\bar\\lambda\\bar{\\mathbf v}$: den konjugerte vektoren er egenvektor for den konjugerte egenverdien.",
    },
    {
      question: "Når har en reell $2\\times2$-matrise $A$ komplekse egenverdier?",
      options: ["Når diskriminanten $(\\operatorname{spor}A)^2-4\\det A$ er negativ", "Når $\\det A<0$, helt uavhengig av hva sporet er", "Når $\\operatorname{spor}A=0$, som gir rent imaginære egenverdier", "Når $A$ ikke er symmetrisk om sin hoveddiagonal"],
      explanation: "Egenverdiene er $\\lambda=\\tfrac{\\operatorname{spor}A\\pm\\sqrt{\\Delta}}{2}$ med $\\Delta=(\\operatorname{spor}A)^2-4\\det A$; negativ diskriminant gir et komplekst konjugert par.",
    },
    {
      question: "Hva er egenverdiene til $A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$?",
      options: ["$\\pm i$, fordi $\\det(A-\\lambda I)=\\lambda^2+1=0$", "$\\pm1$, fordi matrisen bare bytter om de to koordinatene", "$0$ som dobbel egenverdi, fordi hele diagonalen er null", "$1\\pm i$, fordi sporet er $1$ og determinanten er $1$"],
      explanation: "$\\det(A-\\lambda I)=\\lambda^2+1=0$ gir $\\lambda=\\pm i$ — matrisen roterer $90^\\circ$ og har derfor ingen reell egenvektor.",
    },
    {
      question: "En reell $2\\times2$-matrise med egenverdi $\\lambda=re^{i\\varphi}$ virker på planet som:",
      options: ["en skalering med $r=|\\lambda|$ og en rotasjon med $\\varphi=\\arg\\lambda$", "en skalering med $\\varphi=\\arg\\lambda$ og en rotasjon med $r=|\\lambda|$", "en speiling om en linje som danner vinkelen $\\varphi$ med aksen", "en projeksjon ned på en linje av lengde $r$ gjennom origo"],
      explanation: "Modulus $|\\lambda|$ er skaleringsfaktoren og argumentet $\\arg\\lambda$ er rotasjonsvinkelen; dette er den geometriske tolkningen av komplekse egenverdier.",
    },
    {
      question: "Matrisen $\\begin{bmatrix}a&-b\\\\ b&a\\end{bmatrix}$ (med $b\\ne0$) har egenverdier:",
      options: ["$a\\pm bi$, som kan avleses direkte fra formen", "$a\\pm b$, siden dette er en symmetrisk matrise", "$b\\pm ai$, med real- og imaginærdel byttet om", "$\\pm\\sqrt{a^2+b^2}$, som er lik modulus $|\\lambda|$"],
      explanation: "$\\det(C-\\lambda I)=(a-\\lambda)^2+b^2=0$ gir $a-\\lambda=\\pm bi$, altså $\\lambda=a\\pm bi$ — denne matrisen er selve rotasjons-skaleringsnormalformen.",
    },
    {
      question: "Kan en reell matrise med egenverdier $2\\pm i$ diagonaliseres reelt?",
      options: ["Nei — egenverdiene er ikke-reelle, så $D$ måtte vært kompleks", "Ja — enhver reell $2\\times2$-matrise er reelt diagonaliserbar", "Ja — fordi de to realdelene er like store ($2$ og $2$)", "Nei — men bare fordi determinanten $\\det A$ er negativ"],
      explanation: "Reell diagonalisering krever reelle egenverdier på diagonalen i $D$. Med komplekse egenverdier finnes bare kompleks diagonalisering (over $\\mathbb C$).",
    },
    {
      question: "Hva blir summen $\\lambda+\\bar\\lambda$ for et konjugert par $\\lambda=a+bi$?",
      options: ["$2a$, et reelt tall som samtidig er lik $\\operatorname{spor}A$", "$2bi$, et rent imaginært tall lik dobbelt imaginærdel", "$0$ alltid, siden konjugerte tall opphever hverandre", "$a^2+b^2$, et positivt tall som er lik $\\det A$"],
      explanation: "$\\lambda+\\bar\\lambda=(a+bi)+(a-bi)=2a$, som er reelt og lik sporet. (Produktet $\\lambda\\bar\\lambda=a^2+b^2=\\det A$ er også reelt.)",
    },
    {
      question: "Hva er $\\arg\\lambda$ hvis $A=\\begin{bmatrix}0&-2\\\\2&0\\end{bmatrix}$ har egenverdi $\\lambda=2i$?",
      options: ["$\\tfrac\\pi2$, fordi $2i$ ligger på den positive imaginæraksen", "$0$, fordi realdelen er null og bare den teller", "$\\pi$, fordi tallet ser ut til å peke mot venstre", "$\\tfrac\\pi4$, fordi real- og imaginærdel er like store"],
      explanation: "$2i$ ligger rett opp på imaginæraksen, så argumentet er $\\tfrac\\pi2$; matrisen roterer $90^\\circ$ mot klokka og skalerer med $|2i|=2$.",
    },
    {
      question: "En kompleks egenvektor skrives $\\mathbf v=\\mathbf p+i\\mathbf q$. Hva er $\\mathbf p$ og $\\mathbf q$?",
      options: ["Realdelen $\\operatorname{Re}\\mathbf v$ og imaginærdelen $\\operatorname{Im}\\mathbf v$", "To komplekse egenverdier som hører til den reelle matrisen $A$", "Lengden og vinkelen til $\\mathbf v$ skrevet på polarform", "De to radvektorene i selve koeffisientmatrisen $A$"],
      explanation: "$\\mathbf p=\\operatorname{Re}\\mathbf v$ og $\\mathbf q=\\operatorname{Im}\\mathbf v$ er reelle vektorer som utspenner planet der rotasjonen skjer.",
    },
    {
      question: "For et enkelt komplekst konjugert par av egenverdier, hva er dimensjonen til hvert egenrom over $\\mathbb C$?",
      options: ["$1$, siden hvert egenrom utspennes av én egenvektor", "$2$, siden begge egenverdiene deler det samme egenrommet", "$0$, siden komplekse egenverdier ikke har egenvektor", "Det avhenger helt av verdien til determinanten"],
      explanation: "Et enkelt egenverdi (algebraisk multiplisitet $1$) har ett-dimensjonalt egenrom, utspent av én (kompleks) egenvektor.",
    },
    {
      question: "Hvorfor kommer komplekse egenverdier for en reell matrise nettopp i konjugerte par?",
      options: ["Fordi karakteristisk polynom har reelle koeffisienter (røtter parvis)", "Fordi determinanten alltid er positiv for slike matriser", "Fordi sporet alltid er null når egenverdiene er komplekse", "Fordi en slik matrise nødvendigvis må være symmetrisk"],
      explanation: "Karakteristisk polynom $\\det(A-\\lambda I)$ har reelle koeffisienter når $A$ er reell, og et reelt polynom har komplekse røtter i konjugerte par.",
    },
    {
      question: "Hva sier algebraens fundamentalteorem om egenverdiene til en $n\\times n$-matrise?",
      options: ["Den har nøyaktig $n$ egenverdier i $\\mathbb C$ (med multiplisitet)", "Den har nøyaktig $n$ reelle egenverdier, aldri komplekse", "Den har alltid minst én reell egenverdi blant dem", "Den har høyst $n-1$ forskjellige egenverdier totalt"],
      explanation: "Karakteristisk likning er et polynom av grad $n$, som har $n$ røtter i $\\mathbb C$ med multiplisitet — noen kan være komplekse.",
    },
    {
      question: "Hvis $|\\lambda|=1$ for en kompleks egenverdi, hva slags virkning har matrisen?",
      options: ["En ren rotasjon, der lengder blir bevart", "En ren skalering, helt uten noen rotasjon", "En speiling om den reelle aksen i planet", "En projeksjon ned på en linje gjennom origo"],
      explanation: "Skaleringsfaktoren er $|\\lambda|=1$, så ingen strekking skjer; virkningen er en ren rotasjon på sirkler om origo.",
    },
    {
      question: "Du regner egenvektor for $\\lambda=i$ til $A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$ og får $A-iI=\\begin{bmatrix}-i&-1\\\\1&-i\\end{bmatrix}$. Hvilken egenvektor gir andre rad?",
      options: ["$\\begin{bmatrix}i\\\\1\\end{bmatrix}$, fra likningen $v_1-i\\,v_2=0$", "$\\begin{bmatrix}1\\\\1\\end{bmatrix}$, fra likningen $v_1=v_2$", "$\\begin{bmatrix}1\\\\0\\end{bmatrix}$, fra likningen $v_2=0$", "$\\begin{bmatrix}-1\\\\i\\end{bmatrix}$, fra likningen $v_1+v_2=0$"],
      explanation: "Andre rad gir $v_1-i\\,v_2=0$, altså $v_1=i\\,v_2$; med $v_2=1$ blir egenvektoren $\\begin{bmatrix}i\\\\1\\end{bmatrix}$.",
    },
    {
      question: "Hva forteller realdelen $a$ i egenverdien $a\\pm bi$ om løsninger av ODE-systemet $\\mathbf x'=A\\mathbf x$ (Del 10)?",
      options: ["Om svingningen vokser ($a>0$), dempes ($a<0$) eller er ren ($a=0$)", "Selve svingefrekvensen til den periodiske løsningen", "Antall likevektspunkter systemet totalt sett har", "Om systemet i det hele tatt har en reell egenvektor"],
      explanation: "I $\\mathbf x'=A\\mathbf x$ styrer realdelen $a$ vekst/demping (via $e^{at}$), mens imaginærdelen $b$ styrer svingefrekvensen — faseportrettet blir en spiral (senter når $a=0$).",
    },
  ],
  'tma4110-5-5': [
    {
      question: "En egenvektor $\\mathbf v$ er oppgitt. Hva er den raskeste måten å finne egenverdien på?",
      options: ["Regn $A\\mathbf v$ og se hvilken $\\lambda$ som gir $A\\mathbf v=\\lambda\\mathbf v$", "Sett opp og løs hele karakteristisk likning $\\det(A-\\lambda I)=0$", "Radreduser $A$ til trappeform og les egenverdien av pivotene", "Regn determinanten $\\det A$ og del den på $\\operatorname{spor}A$"],
      explanation: "Når $\\mathbf v$ er gitt, er innsetting raskest: $A\\mathbf v$ blir et multiplum $\\lambda\\mathbf v$, og du leser av $\\lambda$ direkte — ingen karakteristisk likning nødvendig.",
    },
    {
      question: "Hva er den geometriske multiplisiteten til en egenverdi $\\lambda$?",
      options: ["$\\dim E_\\lambda=\\dim\\operatorname{Nul}(A-\\lambda I)$, antall frie variabler", "Rotmultiplisiteten til $\\lambda$ i karakteristisk polynom", "Antall ganger $\\lambda$ opptrer på diagonalen i matrisen $A$", "Selve tallverdien til egenverdien $\\lambda$ som skalar"],
      explanation: "Geometrisk multiplisitet er dimensjonen til egenrommet, altså antall frie variabler i $\\operatorname{Nul}(A-\\lambda I)$. (Rotmultiplisiteten er den algebraiske multiplisiteten.)",
    },
    {
      question: "Når er en $n\\times n$-matrise diagonaliserbar?",
      options: ["Når geometrisk multiplisitet $=$ algebraisk for hver egenverdi", "Når determinanten $\\det A$ er ulik null (inverterbar)", "Når alle egenverdiene er positive reelle tall", "Når matrisen $A$ selv er inverterbar med $\\det A\\ne0$"],
      explanation: "Diagonaliserbarhetskriteriet: for hver egenverdi må $\\dim E_\\lambda$ være lik den algebraiske multiplisiteten, slik at summen av egenrom-dimensjoner blir $n$.",
    },
    {
      question: "Hvilken navngitt snarvei garanterer at en matrise er diagonaliserbar?",
      options: ["At den har $n$ forskjellige egenverdier, altså distinkte", "At determinanten er lik $1$, altså volumbevarende", "At sporet er lik null, altså sum av egenverdier null", "At alle diagonalelementene i matrisen er like store"],
      explanation: "$n$ distinkte egenverdier gir $n$ lineært uavhengige egenvektorer, altså en full basis — matrisen er diagonaliserbar. (Symmetrisk og triangulær er andre nyttige snarveier.)",
    },
    {
      question: "En symmetrisk matrise ($A^T=A$) er alltid:",
      options: ["ortogonalt diagonaliserbar, etter spektralteoremet", "triangulær med egenverdiene på diagonalen", "lik sin egen inverse matrise $A^{-1}$", "uten reelle egenverdier i det hele tatt"],
      explanation: "Spektralteoremet: en reell symmetrisk matrise er ortogonalt diagonaliserbar ($A=PDP^T$ med ortogonal $P$), og har alltid reelle egenverdier.",
    },
    {
      question: "Hvordan bygger du $P$ og $D$ i $A=PDP^{-1}$?",
      options: ["$P$ har egenvektorene som kolonner, $D$ egenverdiene — matchet", "$P$ har egenverdiene som kolonner, $D$ egenvektorene på diagonalen", "$P$ er identitetsmatrisen $I$, og $D$ er matrisen $A$ selv", "$P$ er $A$ radredusert, og $D$ inneholder pivotene til $A$"],
      explanation: "Kolonne $j$ i $P$ må være en egenvektor for egenverdien i posisjon $(j,j)$ i $D$; feilmatching er en klassisk poengtapper.",
    },
    {
      question: "Hvordan regner du $A^n$ når $A=PDP^{-1}$?",
      options: ["$A^n=PD^nP^{-1}$, der bare egenverdiene opphøyes i $n$", "$A^n=P^nD^nP^{-n}$, der alle tre faktorene opphøyes", "$A^n=nPDP^{-1}$, der du ganger uttrykket med $n$", "$A^n=PDP^{-1}$ uendret; potensen påvirker ikke svaret"],
      explanation: "De indre $P^{-1}P$ kanselerer, så $A^n=PD^nP^{-1}$ med $D^n=\\operatorname{diag}(\\lambda_1^n,\\dots,\\lambda_n^n)$ — samme $P$, bare egenverdiene opphøyes.",
    },
    {
      question: "En stokastisk (Markov-)matrise med kolonnesum $1$ har alltid egenverdien:",
      options: ["$\\lambda=1$, med en tilhørende stasjonær fordeling", "$\\lambda=0$, som gir en helt triviell fordeling", "$\\lambda=-1$, som svinger mellom to tilstander", "$\\lambda=\\tfrac12$, som halverer fordelingen hvert steg"],
      explanation: "Kolonnesum $1$ betyr at $(1,\\dots,1)$ er egenvektor for $A^T$ med egenverdi $1$, og $A$ og $A^T$ har samme egenverdier, så $\\lambda=1$ er alltid en egenverdi.",
    },
    {
      question: "Hvordan finner du den stasjonære fordelingen til en Markov-matrise?",
      options: ["Finn egenvektoren til $\\lambda=1$ og normaliser den til sum $1$", "Finn egenvektoren til den største egenverdien, unormalisert", "Regn ut $\\det(P-I)$ og bruk tallet direkte som fordeling", "Ta gjennomsnittet av de to kolonnene i matrisen $P$"],
      explanation: "Stasjonær fordeling $\\mathbf q$ oppfyller $P\\mathbf q=\\mathbf q$ (egenvektor til $\\lambda=1$) og skal være en sannsynlighetsvektor, så du normaliserer den til å summere til $1$.",
    },
    {
      question: "Du skal vise at en matrise IKKE er diagonaliserbar. Hva viser du?",
      options: ["At et egenrom er for lite: geometrisk $<$ algebraisk multiplisitet", "At determinanten $\\det A$ er lik null (singulær matrise)", "At matrisen $A$ ikke er symmetrisk om hoveddiagonalen", "At sporet $\\operatorname{spor}A$ til matrisen er negativt"],
      explanation: "Ikke-diagonaliserbarhet vises ved at $\\dim E_\\lambda$ er mindre enn den algebraiske multiplisiteten for minst én egenverdi — da finnes ikke nok uavhengige egenvektorer.",
    },
    {
      question: "Egenverdiene til $A$ er $2,2,5$ og $\\dim E_2=1$. Er $A$ diagonaliserbar?",
      options: ["Nei — geometrisk multiplisitet $1<2$ = algebraisk for $\\lambda=2$", "Ja — det finnes tre egenverdier totalt sett", "Ja — fordi $\\lambda=5$ er en enkel egenverdi", "Nei — men bare fordi determinanten er null"],
      explanation: "For $\\lambda=2$ er algebraisk multiplisitet $2$ men $\\dim E_2=1$; kriteriet krever likhet, så matrisen er ikke diagonaliserbar.",
    },
    {
      question: "Hvilken kontroll bekrefter at du har funnet riktige egenverdier?",
      options: ["$\\operatorname{spor}A=\\sum\\lambda_i$ og $\\det A=\\prod\\lambda_i$", "$\\operatorname{spor}A=\\prod\\lambda_i$ og $\\det A=\\sum\\lambda_i$ omvendt", "At $\\det A=0$ gjelder for alle diagonaliserbare matriser", "At alle egenverdiene alltid må summere seg opp til null"],
      explanation: "Sporet er summen av egenverdiene og determinanten er produktet; disse to relasjonene er en rask sjekk på regningen.",
    },
    {
      question: "For en triangulær matrise leser du egenverdiene av:",
      options: ["diagonalen til matrisen", "den første raden i matrisen", "den siste kolonnen i matrisen", "antidiagonalen til matrisen"],
      explanation: "For en øvre eller nedre triangulær matrise er $\\det(A-\\lambda I)$ produktet av diagonalleddene $(a_{ii}-\\lambda)$, så egenverdiene er nettopp diagonalelementene.",
    },
    {
      question: "Hvis $A\\mathbf v=\\lambda\\mathbf v$, hva er $q(A)\\mathbf v$ for et polynom $q$?",
      options: ["$q(\\lambda)\\mathbf v$ — samme egenvektor, med egenverdi $q(\\lambda)$", "$q(\\mathbf v)$ — polynomet $q$ anvendt direkte på vektoren", "$\\lambda\\,q(\\mathbf v)$ — egenverdien ganger $q$ av vektoren", "$0$ for alle polynom $q$ uansett egenverdi"],
      explanation: "Hvis $A\\mathbf v=\\lambda\\mathbf v$, gir hver potens $A^k\\mathbf v=\\lambda^k\\mathbf v$, så $q(A)\\mathbf v=q(\\lambda)\\mathbf v$ — nyttig for å regne $q(A)$ med samme $P$.",
    },
    {
      question: "En $2\\times2$-matrise har $\\operatorname{spor}A=0$ og $\\det A=1$. Hva slags egenverdier har den?",
      options: ["Komplekse: $\\lambda=\\pm i$, fra likningen $\\lambda^2+1=0$", "Reelle og like: $\\lambda=1$ som en dobbel egenverdi", "Reelle og forskjellige: $\\lambda=1$ og $\\lambda=-1$", "$\\lambda=0$ som en dobbel egenverdi i origo"],
      explanation: "Karakteristisk likning er $\\lambda^2-0\\cdot\\lambda+1=\\lambda^2+1=0$, så $\\lambda=\\pm i$ — et komplekst par (matrisen er en ren rotasjon $90^\\circ$).",
    },
    {
      question: "Hva er egenrommet $E_\\lambda$?",
      options: ["$\\operatorname{Nul}(A-\\lambda I)$, altså nullrommet til $A-\\lambda I$", "$\\operatorname{Col}(A-\\lambda I)$, altså kolonnerommet til $A-\\lambda I$", "Raden i matrisen $A$ som svarer til egenverdien $\\lambda$", "Mengden av alle egenverdiene til matrisen $A$"],
      explanation: "Egenrommet består av alle $\\mathbf v$ med $(A-\\lambda I)\\mathbf v=\\mathbf 0$, altså $E_\\lambda=\\operatorname{Nul}(A-\\lambda I)$; det finnes ved radreduksjon av $A-\\lambda I$.",
    },
  ],
  'tma4110-6-1': [
    {
      question: "Hva er prikkproduktet $(1,2,2)\\cdot(2,0,1)$?",
      options: ["$4$", "$5$", "$3$", "$6$"],
      explanation: "Komponentvis: $1\\cdot2+2\\cdot0+2\\cdot1=2+0+2=4$.",
    },
    {
      question: "Hvordan er normen $\\|\\mathbf v\\|$ definert ut fra indreproduktet?",
      options: ["$\\|\\mathbf v\\|=\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$", "$\\|\\mathbf v\\|=\\langle\\mathbf v,\\mathbf v\\rangle$", "$\\|\\mathbf v\\|=|\\langle\\mathbf v,\\mathbf v\\rangle|$", "$\\|\\mathbf v\\|=\\langle\\mathbf v,\\mathbf v\\rangle^2$"],
      explanation: "Normen er kvadratrota av indreproduktet med seg selv; derfor er $\\|\\mathbf v\\|^2=\\langle\\mathbf v,\\mathbf v\\rangle$.",
    },
    {
      question: "Når er to vektorer $\\mathbf u$ og $\\mathbf v$ ortogonale?",
      options: ["Når $\\langle\\mathbf u,\\mathbf v\\rangle=0$", "Når $\\|\\mathbf u\\|=\\|\\mathbf v\\|$", "Når $\\langle\\mathbf u,\\mathbf v\\rangle=1$", "Når $\\mathbf u=\\mathbf v$"],
      explanation: "Ortogonalitet betyr per definisjon at indreproduktet er null.",
    },
    {
      question: "Med $\\langle p,q\\rangle=\\int_{-1}^{1}p q\\,dt$, hva er $\\langle 1,t\\rangle$?",
      options: ["$0$", "$2$", "$\\tfrac23$", "$1$"],
      explanation: "$\\int_{-1}^{1}t\\,dt=[t^2/2]_{-1}^1=\\tfrac12-\\tfrac12=0$; $1$ og $t$ er ortogonale på $[-1,1]$.",
    },
    {
      question: "Hva er $\\|(2,-1,2)\\|$?",
      options: ["$3$", "$5$", "$\\sqrt7$", "$9$"],
      explanation: "$\\sqrt{2^2+(-1)^2+2^2}=\\sqrt{4+1+4}=\\sqrt9=3$.",
    },
    {
      question: "Hvilken egenskap kreves IKKE for at $\\langle\\cdot,\\cdot\\rangle$ skal være et indreprodukt?",
      options: ["At $\\langle\\mathbf u,\\mathbf v\\rangle$ alltid er positiv", "Symmetri $\\langle\\mathbf u,\\mathbf v\\rangle=\\langle\\mathbf v,\\mathbf u\\rangle$", "Linearitet i første argument", "$\\langle\\mathbf v,\\mathbf v\\rangle\\ge0$ med likhet bare for $\\mathbf 0$"],
      explanation: "Indreproduktet av to ulike vektorer kan godt være negativt; kravet er kun at $\\langle\\mathbf v,\\mathbf v\\rangle\\ge0$.",
    },
    {
      question: "$\\mathbf u$ og $\\mathbf v$ er ortogonale med $\\|\\mathbf u\\|=3$, $\\|\\mathbf v\\|=4$. Hva er $\\|\\mathbf u+\\mathbf v\\|$?",
      options: ["$5$", "$7$", "$\\sqrt7$", "$12$"],
      explanation: "Pytagoras: $\\|\\mathbf u+\\mathbf v\\|^2=9+16=25$, så $\\|\\mathbf u+\\mathbf v\\|=5$.",
    },
    {
      question: "Hvordan normaliserer du en vektor $\\mathbf v\\ne\\mathbf 0$ til en enhetsvektor?",
      options: ["Del på normen: $\\tfrac{1}{\\|\\mathbf v\\|}\\mathbf v$", "Gang med normen: $\\|\\mathbf v\\|\\mathbf v$", "Trekk fra normen: $\\mathbf v-\\|\\mathbf v\\|$", "Kvadrer vektoren: $\\mathbf v^2$"],
      explanation: "En enhetsvektor i samme retning fås ved å dele vektoren på sin egen lengde.",
    },
    {
      question: "Hva er vinkelformelen mellom to vektorer?",
      options: ["$\\cos\\theta=\\dfrac{\\langle\\mathbf u,\\mathbf v\\rangle}{\\|\\mathbf u\\|\\,\\|\\mathbf v\\|}$", "$\\cos\\theta=\\langle\\mathbf u,\\mathbf v\\rangle\\cdot\\|\\mathbf u\\|\\,\\|\\mathbf v\\|$", "$\\cos\\theta=\\dfrac{\\|\\mathbf u\\|\\,\\|\\mathbf v\\|}{\\langle\\mathbf u,\\mathbf v\\rangle}$", "$\\cos\\theta=\\dfrac{\\langle\\mathbf u,\\mathbf v\\rangle}{\\|\\mathbf u\\|+\\|\\mathbf v\\|}$"],
      explanation: "Cosinus til vinkelen er indreproduktet delt på produktet av de to normene.",
    },
    {
      question: "En oppgave oppgir det vektede indreproduktet $\\langle\\mathbf x,\\mathbf y\\rangle=x_1y_1+2x_2y_2$. Hvordan regner du $\\langle(1,1),(1,1)\\rangle$?",
      options: ["$1\\cdot1+2\\cdot1\\cdot1=3$", "$1\\cdot1+1\\cdot1=2$", "$\\sqrt{1+1}=\\sqrt2$", "$1\\cdot1\\cdot2\\cdot1=2$"],
      explanation: "Bruk det oppgitte vektede indreproduktet: $x_1y_1+2x_2y_2=1+2=3$, ikke det vanlige prikkproduktet.",
    },
    {
      question: "Hva sier Cauchy–Schwarz-ulikheten?",
      options: ["$|\\langle\\mathbf u,\\mathbf v\\rangle|\\le\\|\\mathbf u\\|\\,\\|\\mathbf v\\|$", "$|\\langle\\mathbf u,\\mathbf v\\rangle|\\ge\\|\\mathbf u\\|\\,\\|\\mathbf v\\|$", "$\\langle\\mathbf u,\\mathbf v\\rangle=\\|\\mathbf u\\|\\,\\|\\mathbf v\\|$", "$\\|\\mathbf u+\\mathbf v\\|\\le\\|\\mathbf u\\|\\,\\|\\mathbf v\\|$"],
      explanation: "Cauchy–Schwarz: tallverdien av indreproduktet er høyst produktet av normene; den sikrer at $\\cos\\theta\\in[-1,1]$.",
    },
    {
      question: "Hva er $\\|\\mathbf v\\|^2$ uttrykt ved indreproduktet?",
      options: ["$\\langle\\mathbf v,\\mathbf v\\rangle$", "$\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$", "$2\\langle\\mathbf v,\\mathbf v\\rangle$", "$\\langle\\mathbf v,\\mathbf v\\rangle^2$"],
      explanation: "Siden $\\|\\mathbf v\\|=\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$, er $\\|\\mathbf v\\|^2=\\langle\\mathbf v,\\mathbf v\\rangle$ — nyttig for å fjerne kvadratrøtter.",
    },
    {
      question: "Er $(1,2,-1)$ og $(3,-1,1)$ ortogonale (vanlig prikkprodukt)?",
      options: ["Ja, fordi $3-2-1=0$", "Nei, fordi $3-2-1=1$", "Ja, fordi de har samme norm", "Nei, fordi prikkproduktet er $6$"],
      explanation: "$\\langle(1,2,-1),(3,-1,1)\\rangle=3-2-1=0$, så de er ortogonale.",
    },
    {
      question: "Hva er avstanden mellom $\\mathbf u=(1,2,2)$ og $\\mathbf v=(3,1,0)$?",
      options: ["$3$", "$5$", "$\\sqrt6$", "$9$"],
      explanation: "$\\mathbf u-\\mathbf v=(-2,1,2)$, og $\\|(-2,1,2)\\|=\\sqrt{4+1+4}=3$.",
    },
    {
      question: "Hvorfor må vektene i et vektet indreprodukt $\\sum w_ix_iy_i$ være positive?",
      options: ["Ellers kan $\\langle\\mathbf v,\\mathbf v\\rangle<0$, som bryter positiv definitthet", "Ellers blir produktet ikke-kommutativt", "Ellers blir normen for stor", "Ellers finnes ikke vinkelen $\\theta$"],
      explanation: "Med en negativ vekt kunne $\\langle\\mathbf v,\\mathbf v\\rangle=\\sum w_iv_i^2$ blitt negativ, og aksiom 3 (positiv definitthet) ville brutt sammen.",
    },
    {
      question: "En vektor som er ortogonal på seg selv ($\\langle\\mathbf v,\\mathbf v\\rangle=0$) må være:",
      options: ["Nullvektoren $\\mathbf 0$", "En hvilken som helst enhetsvektor", "En vektor med norm $1$", "En vektor i førstekvadrant"],
      explanation: "Positiv definitthet gir at $\\langle\\mathbf v,\\mathbf v\\rangle=0$ bare for $\\mathbf v=\\mathbf 0$.",
    },
    {
      question: "I $\\mathbb R^3$: hvordan finner du raskt en vektor ortogonal på både $\\mathbf a$ og $\\mathbf b$?",
      options: ["Regn kryssproduktet $\\mathbf a\\times\\mathbf b$", "Regn prikkproduktet $\\mathbf a\\cdot\\mathbf b$", "Legg sammen $\\mathbf a+\\mathbf b$", "Normaliser $\\mathbf a$"],
      explanation: "Kryssproduktet $\\mathbf a\\times\\mathbf b$ står automatisk vinkelrett på både $\\mathbf a$ og $\\mathbf b$.",
    },
    {
      question: "Med $\\langle p,q\\rangle=\\int_{0}^{1}p q\\,dt$: er $1$ og $t$ ortogonale på $[0,1]$?",
      options: ["Nei, fordi $\\langle 1,t\\rangle=\\tfrac12\\ne0$", "Ja, fordi $\\langle 1,t\\rangle=0$", "Ja, fordi de har ulik grad", "Nei, fordi $\\langle 1,t\\rangle=1$"],
      explanation: "$\\int_0^1 t\\,dt=\\tfrac12\\ne0$, så på $[0,1]$ er de ikke ortogonale (i motsetning til på $[-1,1]$).",
    },
  ],
  'tma4110-6-2': [
    {
      question: "Hva kjennetegner en ortogonal mengde $\\{\\mathbf v_1,\\dots,\\mathbf v_k\\}$?",
      options: ["Vektorene er parvis ortogonale: $\\langle\\mathbf v_i,\\mathbf v_j\\rangle=0$ for $i\\ne j$", "Alle vektorene har norm $1$", "Vektorene er parallelle", "Summen av vektorene er $\\mathbf 0$"],
      explanation: "En ortogonal mengde består av vektorer $\\ne\\mathbf 0$ som er parvis ortogonale.",
    },
    {
      question: "Hva er den første vektoren i Gram–Schmidt-prosessen?",
      options: ["$\\mathbf v_1=\\mathbf a_1$ (uendret)", "$\\mathbf v_1=\\mathbf a_1/\\|\\mathbf a_1\\|$", "$\\mathbf v_1=\\mathbf 0$", "$\\mathbf v_1=\\mathbf a_1-\\mathbf a_2$"],
      explanation: "Gram–Schmidt beholder den første vektoren uendret: $\\mathbf v_1=\\mathbf a_1$.",
    },
    {
      question: "Hva er det generelle Gram–Schmidt-steget for $\\mathbf v_k$?",
      options: ["$\\mathbf a_k-\\sum_{i<k}\\frac{\\langle\\mathbf a_k,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}\\mathbf v_i$", "$\\mathbf a_k+\\sum_{i<k}\\frac{\\langle\\mathbf a_k,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}\\mathbf v_i$", "$\\mathbf a_k-\\sum_{i<k}\\langle\\mathbf a_k,\\mathbf v_i\\rangle\\mathbf v_i$", "$\\mathbf a_k-\\sum_{i<k}\\frac{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}{\\langle\\mathbf a_k,\\mathbf v_i\\rangle}\\mathbf v_i$"],
      explanation: "Du trekker fra $\\mathbf a_k$ dens projeksjon på hver allerede ortogonalisert $\\mathbf v_i$; nevneren $\\langle\\mathbf v_i,\\mathbf v_i\\rangle$ må være med.",
    },
    {
      question: "En ortogonal mengde av vektorer $\\ne\\mathbf 0$ er:",
      options: ["Alltid lineært uavhengig", "Alltid lineært avhengig", "Alltid ortonormal", "Aldri en basis"],
      explanation: "Tar man indreprodukt med $\\mathbf v_i$ i en relasjon $\\sum c_j\\mathbf v_j=\\mathbf 0$, faller alt bort unntatt $c_i$, så alle $c_i=0$.",
    },
    {
      question: "Hva er koordinaten (koordinatkoeffisienten) $c_i$ til $\\mathbf y$ i en ortogonal basis?",
      options: ["$c_i=\\dfrac{\\langle\\mathbf y,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}$", "$c_i=\\langle\\mathbf y,\\mathbf v_i\\rangle\\cdot\\langle\\mathbf v_i,\\mathbf v_i\\rangle$", "$c_i=\\dfrac{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}{\\langle\\mathbf y,\\mathbf v_i\\rangle}$", "$c_i=\\langle\\mathbf y,\\mathbf v_i\\rangle$ alltid"],
      explanation: "For en ortogonal basis regnes hver koordinat med koordinatformelen; nevneren er $\\langle\\mathbf v_i,\\mathbf v_i\\rangle$ (blir $1$ bare hvis basisen er ortonormal).",
    },
    {
      question: "Hvorfor lønner det seg med heltalls-oppskalering underveis i Gram–Schmidt?",
      options: ["Det holder regningen fri for brøker uten å endre ortogonaliteten", "Det gjør vektorene til enhetsvektorer", "Det er nødvendig for at svaret skal bli riktig", "Det endrer spennet til et større rom"],
      explanation: "Å gange en $\\mathbf v_i$ med et positivt tall bevarer både retning og ortogonalitet, og fjerner brøker (viktig under kode E).",
    },
    {
      question: "Når normaliserer du vektorene i Gram–Schmidt?",
      options: ["Til slutt, etter at alle er ortogonalisert", "Før du starter prosessen", "Etter hvert eneste steg", "Aldri — normalisering er forbudt"],
      explanation: "Normaliser først når den ortogonale basisen er ferdig; underveis gir det bare unødvendige kvadratrøtter.",
    },
    {
      question: "Gram–Schmidt på $\\{(1,1,1),(1,2,0)\\}$ gir $\\mathbf v_2=$?",
      options: ["$(0,1,-1)$", "$(1,2,0)$", "$(2,3,1)$", "$(1,1,1)$"],
      explanation: "$\\mathbf v_2=(1,2,0)-\\tfrac33(1,1,1)=(1,2,0)-(1,1,1)=(0,1,-1)$.",
    },
    {
      question: "Hva menes med at en basis er ortonormal?",
      options: ["Parvis ortogonal og hver vektor har norm $1$: $\\langle\\mathbf u_i,\\mathbf u_j\\rangle=\\delta_{ij}$", "Bare at vektorene har norm $1$", "Bare at vektorene er parvis ortogonale", "At determinanten er $1$"],
      explanation: "Ortonormal = ortogonal + normalisert, kompakt uttrykt med Kronecker-delta $\\delta_{ij}$.",
    },
    {
      question: "En oppgave ber om Gram–Schmidt i indreproduktet $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$. Hvordan regner du indreproduktene?",
      options: ["Som integraler over $[-1,1]$", "Komponentvis som prikkprodukt", "Ved å telle antall ledd", "Ved å derivere polynomene"],
      explanation: "I et integral-indreprodukt regnes alle $\\langle\\cdot,\\cdot\\rangle$ som integraler — ikke komponentvis.",
    },
    {
      question: "Gram–Schmidt på $\\{1,t,t^2\\}$ med $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$ gir $v_3=$?",
      options: ["$t^2-\\tfrac13$", "$t^2$", "$t^2-1$", "$t^2-\\tfrac23$"],
      explanation: "$v_3=t^2-\\frac{\\langle t^2,1\\rangle}{\\langle 1,1\\rangle}\\cdot1=t^2-\\frac{2/3}{2}=t^2-\\tfrac13$ (Legendre-polynom).",
    },
    {
      question: "Hva bevarer Gram–Schmidt underveis?",
      options: ["Spennet: $\\operatorname{Span}\\{\\mathbf v_1,\\dots,\\mathbf v_m\\}=\\operatorname{Span}\\{\\mathbf a_1,\\dots,\\mathbf a_m\\}$", "Lengden til hver vektor", "Vinklene mellom startvektorene", "Antall komponenter lik null"],
      explanation: "For hver $m$ utspenner de ortogonaliserte vektorene nøyaktig samme rom som startvektorene.",
    },
    {
      question: "Hva er en ortogonal matrise $Q$?",
      options: ["En matrise med ortonormale kolonner, slik at $Q^{T}Q=I$", "En matrise med bare nuller utenfor diagonalen", "En matrise med determinant $0$", "En matrise der alle kolonner er like"],
      explanation: "Ortogonal matrise: kolonnene er en ortonormal mengde, ekvivalent $Q^{T}Q=I$ (så $Q^{-1}=Q^{T}$).",
    },
    {
      question: "Hva er en typisk feil i Gram–Schmidt-steget?",
      options: ["Å bruke $\\mathbf a$-vektorene i stedet for de ortogonaliserte $\\mathbf v$-ene i senere steg", "Å normalisere helt til slutt", "Å starte med $\\mathbf v_1=\\mathbf a_1$", "Å regne $\\langle\\mathbf a_k,\\mathbf v_i\\rangle$"],
      explanation: "I steg $k$ skal du projisere på de allerede ortogonaliserte $\\mathbf v_i$, ikke på de opprinnelige $\\mathbf a$-ene.",
    },
    {
      question: "For en ortonormal basis forenkles koordinatformelen til:",
      options: ["$c_i=\\langle\\mathbf y,\\mathbf u_i\\rangle$", "$c_i=\\dfrac{\\langle\\mathbf y,\\mathbf u_i\\rangle}{2}$", "$c_i=\\|\\mathbf u_i\\|$", "$c_i=\\langle\\mathbf u_i,\\mathbf u_i\\rangle$"],
      explanation: "Nevneren $\\langle\\mathbf u_i,\\mathbf u_i\\rangle=1$, så koordinaten er bare indreproduktet $\\langle\\mathbf y,\\mathbf u_i\\rangle$.",
    },
    {
      question: "Hva blir $\\mathbf v_k$ hvis startvektoren $\\mathbf a_k$ ligger i spennet av de foregående?",
      options: ["$\\mathbf v_k=\\mathbf 0$ (vektoren var avhengig og kastes)", "$\\mathbf v_k=\\mathbf a_k$ uendret", "$\\mathbf v_k$ blir en enhetsvektor", "Prosessen stopper helt opp"],
      explanation: "Er $\\mathbf a_k$ avhengig av de foregående, trekkes den helt bort og $\\mathbf v_k=\\mathbf 0$; da forkaster man den.",
    },
    {
      question: "Normaliser $(2,-1,2)$ til en enhetsvektor.",
      options: ["$\\tfrac13(2,-1,2)$", "$\\tfrac19(2,-1,2)$", "$(2,-1,2)$", "$\\tfrac12(2,-1,2)$"],
      explanation: "$\\|(2,-1,2)\\|=\\sqrt{4+1+4}=3$, så enhetsvektoren er $\\tfrac13(2,-1,2)$.",
    },
    {
      question: "Hva gjør en ortogonal matrise $Q$ med lengder?",
      options: ["Bevarer dem: $\\|Q\\mathbf x\\|=\\|\\mathbf x\\|$", "Dobler dem: $\\|Q\\mathbf x\\|=2\\|\\mathbf x\\|$", "Setter dem til $1$", "Halverer dem"],
      explanation: "Ortogonale matriser bevarer norm og indreprodukt — geometrisk er de rotasjoner eller speilinger.",
    },
  ],
  'tma4110-6-3': [
    {
      question: "Hva er projeksjonen av $\\mathbf y$ på linja utspent av $\\mathbf v$?",
      options: ["$\\dfrac{\\langle\\mathbf y,\\mathbf v\\rangle}{\\langle\\mathbf v,\\mathbf v\\rangle}\\mathbf v$", "$\\dfrac{\\langle\\mathbf y,\\mathbf v\\rangle}{\\|\\mathbf v\\|}\\mathbf v$", "$\\langle\\mathbf y,\\mathbf v\\rangle\\,\\mathbf v$", "$\\dfrac{\\langle\\mathbf v,\\mathbf v\\rangle}{\\langle\\mathbf y,\\mathbf v\\rangle}\\mathbf v$"],
      explanation: "Projeksjonen på en linje er $\\frac{\\langle\\mathbf y,\\mathbf v\\rangle}{\\langle\\mathbf v,\\mathbf v\\rangle}\\mathbf v$ — teller $\\langle\\mathbf y,\\mathbf v\\rangle$, nevner $\\langle\\mathbf v,\\mathbf v\\rangle$.",
    },
    {
      question: "Projeksjonsformelen $\\operatorname{proj}_W\\mathbf y=\\sum\\frac{\\langle\\mathbf y,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}\\mathbf v_i$ krever at basisen $\\{\\mathbf v_i\\}$ er:",
      options: ["Ortogonal", "Kun lineært uavhengig", "På trappeform", "Normalisert til lengde $2$"],
      explanation: "Formelen gjelder bare for en ortogonal basis; er basisen skjev, må du kjøre Gram–Schmidt først.",
    },
    {
      question: "I dekomposisjonen $\\mathbf y=\\hat{\\mathbf y}+\\mathbf z$, hvor ligger $\\mathbf z$?",
      options: ["I $W^{\\perp}$ (ortogonalt komplement)", "I $W$", "På linja gjennom $\\hat{\\mathbf y}$", "I både $W$ og $W^{\\perp}$"],
      explanation: "$\\hat{\\mathbf y}=\\operatorname{proj}_W\\mathbf y\\in W$, mens feilvektoren $\\mathbf z=\\mathbf y-\\hat{\\mathbf y}$ ligger i $W^{\\perp}$.",
    },
    {
      question: "Hva er avstanden fra $\\mathbf y$ til underrommet $W$?",
      options: ["$\\|\\mathbf y-\\operatorname{proj}_W\\mathbf y\\|=\\|\\mathbf z\\|$", "$\\|\\operatorname{proj}_W\\mathbf y\\|$", "$\\|\\mathbf z\\|^2$", "$\\langle\\mathbf y,\\mathbf z\\rangle$"],
      explanation: "Avstanden er lengden av feilvektoren $\\mathbf z=\\mathbf y-\\hat{\\mathbf y}$ — husk kvadratrota (det er $\\|\\mathbf z\\|$, ikke $\\|\\mathbf z\\|^2$).",
    },
    {
      question: "Hva sier beste tilnærmingssetningen?",
      options: ["$\\operatorname{proj}_W\\mathbf y$ er punktet i $W$ nærmest $\\mathbf y$", "$\\operatorname{proj}_W\\mathbf y$ er punktet i $W$ lengst fra $\\mathbf y$", "Alle punkter i $W$ er like nær $\\mathbf y$", "$\\mathbf y$ ligger alltid i $W$"],
      explanation: "Blant alle punkter i $W$ minimerer den ortogonale projeksjonen avstanden til $\\mathbf y$.",
    },
    {
      question: "Hva er $\\operatorname{proj}_W(2,3,4)$ når $W=\\operatorname{Span}\\{(1,1,0),(1,-1,0)\\}$?",
      options: ["$(2,3,0)$", "$(2,3,4)$", "$(0,0,4)$", "$(2,0,3)$"],
      explanation: "Med den ortogonale basisen: koeffisienter $\\tfrac52$ og $-\\tfrac12$ gir $\\hat{\\mathbf y}=(2,3,0)$; resten $(0,0,4)$ er $\\mathbf z$.",
    },
    {
      question: "Hva er det ortogonale komplementet $W^{\\perp}$?",
      options: ["Alle vektorer ortogonale på hele $W$", "Alle vektorer i $W$ med norm $1$", "Basisen for $W$", "Vektorene parallelle med $W$"],
      explanation: "$W^{\\perp}=\\{\\mathbf z:\\langle\\mathbf z,\\mathbf w\\rangle=0\\text{ for alle }\\mathbf w\\in W\\}$; det holder å sjekke mot en basis for $W$.",
    },
    {
      question: "Hva er dimensjonsformelen for et underrom $W$ av $\\mathbb R^n$?",
      options: ["$\\dim W+\\dim W^{\\perp}=n$", "$\\dim W-\\dim W^{\\perp}=n$", "$\\dim W\\cdot\\dim W^{\\perp}=n$", "$\\dim W=\\dim W^{\\perp}$ alltid"],
      explanation: "$W$ og $W^{\\perp}$ fyller sammen hele $\\mathbb R^n$: dimensjonene summerer til $n$.",
    },
    {
      question: "Hvilken identitet knytter kolonnerom til nullrom?",
      options: ["$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}A^{T}$", "$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}A$", "$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Col}A^{T}$", "$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Row}A$"],
      explanation: "$\\mathbf z\\perp\\operatorname{Col}A$ betyr $A^{T}\\mathbf z=\\mathbf 0$, altså $(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}A^{T}$ — broen til minste kvadrater.",
    },
    {
      question: "Basisen for $W$ er $\\{(1,1,1),(1,2,0)\\}$ (ikke ortogonal). Hva må du gjøre før projeksjonsformelen?",
      options: ["Kjøre Gram–Schmidt for å få en ortogonal basis", "Normalisere $\\mathbf y$", "Regne determinanten av basisen", "Bytte til standardbasis"],
      explanation: "Projeksjonsformelen krever ortogonal basis; er den ikke det, ortogonaliser med Gram–Schmidt først.",
    },
    {
      question: "Hvis $\\mathbf y$ allerede ligger i $W$, hva er $\\operatorname{proj}_W\\mathbf y$?",
      options: ["$\\mathbf y$ selv (avstand $0$)", "$\\mathbf 0$", "En enhetsvektor", "Uendelig"],
      explanation: "Ligger $\\mathbf y\\in W$, er den nærmeste vektoren i $W$ den selv, så projeksjonen er $\\mathbf y$ og avstanden $0$.",
    },
    {
      question: "Hva er $W^{\\perp}$ når $W=\\operatorname{Span}\\{(1,1,1)\\}$ i $\\mathbb R^3$?",
      options: ["Planet $x+y+z=0$ (dimensjon $2$)", "Linja gjennom $(1,1,1)$", "Hele $\\mathbb R^3$", "Bare $\\{\\mathbf 0\\}$"],
      explanation: "$W^{\\perp}$ er alle $(x,y,z)$ med $x+y+z=0$ — et $2$-dimensjonalt plan, i tråd med $1+2=3$.",
    },
    {
      question: "Egenskapen $\\operatorname{proj}_W(\\operatorname{proj}_W\\mathbf y)=\\operatorname{proj}_W\\mathbf y$ kalles at projeksjonen er:",
      options: ["Idempotent ($P^2=P$)", "Invertibel", "Skjevsymmetrisk", "Ortogonal matrise"],
      explanation: "Å projisere to ganger endrer ingenting; som matrise betyr det $P^2=P$ (idempotent).",
    },
    {
      question: "Hva er forskjellen på skalarprojeksjon og vektorprojeksjon?",
      options: ["Skalarprojeksjon $\\frac{\\langle\\mathbf y,\\mathbf v\\rangle}{\\|\\mathbf v\\|}$ er et tall; vektorprojeksjon $\\frac{\\langle\\mathbf y,\\mathbf v\\rangle}{\\langle\\mathbf v,\\mathbf v\\rangle}\\mathbf v$ er en vektor", "De er identiske", "Skalarprojeksjon er en vektor, vektorprojeksjon et tall", "Begge deler på $\\langle\\mathbf v,\\mathbf v\\rangle$"],
      explanation: "Skalarprojeksjonen deler på $\\|\\mathbf v\\|$ og gir en komponent (tall); vektorprojeksjonen deler på $\\langle\\mathbf v,\\mathbf v\\rangle$ og ganger med $\\mathbf v$ (vektor).",
    },
    {
      question: "Hva er $\\operatorname{dist}((2,3,4),W)$ når $W=\\operatorname{Span}\\{(1,1,0),(1,-1,0)\\}$?",
      options: ["$4$", "$2$", "$\\sqrt{29}$", "$16$"],
      explanation: "Feilvektoren er $\\mathbf z=(0,0,4)$, så avstanden er $\\|(0,0,4)\\|=4$.",
    },
    {
      question: "Hvordan finner du generelt en basis for $W^{\\perp}$?",
      options: ["Skriv basisen for $W$ som rader og løs det homogene systemet $B\\mathbf z=\\mathbf 0$", "Normaliser basisen for $W$", "Regn projeksjonen av standardvektorene", "Transponer basisvektorene"],
      explanation: "$W^{\\perp}=\\operatorname{Nul}B$ der $B$ har $W$-basisen som rader; løsningsrommet er komplementet.",
    },
    {
      question: "Hvis basisen for $W$ er ortonormal (samlet i $U$), hva er projeksjonsmatrisen?",
      options: ["$P=UU^{T}$", "$P=U^{T}U$", "$P=U^{-1}$", "$P=U+U^{T}$"],
      explanation: "Med ortonormale kolonner er $\\operatorname{proj}_W\\mathbf y=UU^{T}\\mathbf y$, så $P=UU^{T}$ (symmetrisk og idempotent).",
    },
    {
      question: "Når $A\\mathbf x=\\mathbf b$ ikke har løsning, hva er den beste oppnåelige høyresiden?",
      options: ["$\\hat{\\mathbf b}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$", "$\\hat{\\mathbf b}=\\mathbf 0$", "$\\hat{\\mathbf b}=\\mathbf b$ uansett", "$\\hat{\\mathbf b}=A^{T}\\mathbf b$"],
      explanation: "Vi projiserer $\\mathbf b$ ned på $\\operatorname{Col}A$; den nærmeste oppnåelige høyresiden er $\\hat{\\mathbf b}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$ — inngangen til minste kvadrater.",
    },
  ],
  'tma4110-6-4': [
    {
      question: "Hva er normallikningene for minste kvadraters løsning av $A\\mathbf x=\\mathbf b$?",
      options: ["$A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$", "$AA^{T}\\hat{\\mathbf x}=A\\mathbf b^{T}$", "$A\\hat{\\mathbf x}=A^{T}\\mathbf b$ direkte", "$A^{T}\\hat{\\mathbf x}=A\\mathbf b$ etter forkorting"],
      explanation: "Normallikningene er $A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$ — et kvadratisk $n\\times n$-system som alltid har løsning.",
    },
    {
      question: "Hvorfor har et overbestemt system $A\\mathbf x=\\mathbf b$ vanligvis ingen eksakt løsning?",
      options: ["Det har flere likninger enn ukjente, så ingen $\\mathbf x$ kan treffe alle rader samtidig", "Det har flere ukjente enn likninger, så det finnes alltid uendelig mange løsninger", "Matrisen $A$ er alltid singulær, og singulære matriser mangler alltid løsning", "Høyresiden $\\mathbf b$ ligger alltid utenfor kolonnerommet, uansett hvilket system"],
      explanation: "Overbestemt betyr flere likninger ($m$) enn ukjente ($n$), $m>n$; da finnes sjelden en $\\mathbf x$ som løser alle radene.",
    },
    {
      question: "Hva minimerer en minste kvadraters løsning $\\hat{\\mathbf x}$?",
      options: ["Normen av feilen $\\|\\mathbf b-A\\mathbf x\\|$", "Normen av løsningen $\\|\\mathbf x\\|$", "Determinanten til $A^{T}A$", "Sporet av matrisen $A^{T}A$"],
      explanation: "Minste kvadrater velger $\\hat{\\mathbf x}$ som gjør feilen $\\|\\mathbf b-A\\mathbf x\\|$ (og dermed summen av kvadrerte avvik) minst mulig.",
    },
    {
      question: "Prediksjonen $A\\hat{\\mathbf x}$ er lik hvilken vektor?",
      options: ["Projeksjonen $\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$ av $\\mathbf b$ på kolonnerommet", "Projeksjonen av $\\mathbf b$ ned på nullrommet $\\operatorname{Nul}A$ til matrisen", "Residualvektoren $\\mathbf b-A\\hat{\\mathbf x}$, altså selve feilen i tilnærmingen", "Selve høyresiden $\\mathbf b$ uendret, uten noen projeksjon involvert i det"],
      explanation: "$A\\hat{\\mathbf x}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$ — det punktet i $\\operatorname{Col}A$ som ligger nærmest $\\mathbf b$.",
    },
    {
      question: "Matrisen $A^{T}A$ er alltid, uansett hva $A$ er:",
      options: ["Kvadratisk og symmetrisk", "Kvadratisk og inverterbar", "Diagonal med positive tall", "Lik identitetsmatrisen $I$"],
      explanation: "$(A^{T}A)^{T}=A^{T}A$, så den er symmetrisk, og den er $n\\times n$; men inverterbar er den bare når kolonnene i $A$ er uavhengige.",
    },
    {
      question: "Når er minste kvadraters løsningen entydig?",
      options: ["Når kolonnene i $A$ er lineært uavhengige", "Når $A$ har flere rader enn kolonner", "Når $\\mathbf b$ er en enhetsvektor", "Når $A^{T}A$ er en nullmatrise"],
      explanation: "Entydig løsning $\\Leftrightarrow$ kolonnene i $A$ uavhengige $\\Leftrightarrow$ $A^{T}A$ inverterbar.",
    },
    {
      question: "Hva skjer med minste kvadraters løsningen når kolonnene i $A$ er lineært avhengige?",
      options: ["Løsningsmengden blir affin — uendelig mange løsninger", "Det finnes ingen minste kvadraters løsning", "Løsningen blir alltid nullvektoren", "Feilen $\\|\\mathbf b-A\\hat{\\mathbf x}\\|$ blir uendelig stor"],
      explanation: "Ved rangdefekt er $A^{T}A$ singulær; normallikningene har fortsatt løsning, men uendelig mange (affin mengde).",
    },
    {
      question: "Hvordan regnes minste-kvadraters-feilen?",
      options: ["Som $\\|\\mathbf b-A\\hat{\\mathbf x}\\|$, lengden av residualvektoren", "Som $\\|\\hat{\\mathbf x}\\|$, lengden av løsningsvektoren", "Som $\\det(A^{T}A)$, determinanten", "Som $A^{T}\\mathbf b$, høyresiden i normallikningene"],
      explanation: "Feilen er lengden av residualen $\\mathbf b-A\\hat{\\mathbf x}$; husk kvadratrota.",
    },
    {
      question: "For en regresjonslinje $y=c_0+c_1x$ har hver rad i designmatrisen $A$ formen:",
      options: ["$\\begin{bmatrix}1&x_i\\end{bmatrix}$", "$\\begin{bmatrix}x_i&y_i\\end{bmatrix}$", "$\\begin{bmatrix}c_0&c_1\\end{bmatrix}$", "$\\begin{bmatrix}x_i&x_i^2\\end{bmatrix}$"],
      explanation: "Raden er $[\\,1\\ x_i\\,]$: konstantleddet gir en $1$-kolonne, $x$-leddet gir en $x_i$-kolonne. Observasjonen $y_i$ havner i $\\mathbf b$.",
    },
    {
      question: "For $A=\\begin{bmatrix}1&0\\\\1&1\\\\1&1\\end{bmatrix}$, hva er $A^{T}A$?",
      options: ["$\\begin{bmatrix}3&2\\\\2&2\\end{bmatrix}$", "$\\begin{bmatrix}2&3\\\\3&2\\end{bmatrix}$", "$\\begin{bmatrix}3&0\\\\0&2\\end{bmatrix}$", "$\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$"],
      explanation: "Kolonnene er $(1,1,1)$ og $(0,1,1)$: prikkproduktene gir $\\begin{bmatrix}3&2\\\\2&2\\end{bmatrix}$.",
    },
    {
      question: "Hvilken likhet gjelder mellom nullrommene til $A$ og $A^{T}A$?",
      options: ["$\\operatorname{Nul}(A^{T}A)=\\operatorname{Nul}A$", "$\\operatorname{Nul}(A^{T}A)=\\operatorname{Col}A$", "$\\operatorname{Nul}(A^{T}A)=\\operatorname{Nul}A^{T}$", "$\\operatorname{Nul}(A^{T}A)=\\{\\mathbf b\\}$"],
      explanation: "$\\operatorname{Nul}(A^{T}A)=\\operatorname{Nul}A$ — dette er broen fra «kolonnene uavhengige» til «$A^{T}A$ inverterbar».",
    },
    {
      question: "Hva er ortogonalkomplementet til kolonnerommet $\\operatorname{Col}A$?",
      options: ["$\\operatorname{Nul}A^{T}$", "$\\operatorname{Nul}A$", "$\\operatorname{Col}A^{T}$", "$\\operatorname{Row}A$"],
      explanation: "$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}A^{T}$; det er derfor $A^{T}(\\mathbf b-A\\hat{\\mathbf x})=\\mathbf 0$ gir normallikningene.",
    },
    {
      question: "I hvilket underrom ligger residualvektoren $\\mathbf b-A\\hat{\\mathbf x}$?",
      options: ["I $(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}A^{T}$", "I kolonnerommet $\\operatorname{Col}A$, sammen med prediksjonen $A\\hat{\\mathbf x}$", "I nullrommet $\\operatorname{Nul}A$ til den opprinnelige matrisen $A$", "I radrommet $\\operatorname{Row}A$, som spennes ut av radene i $A$"],
      explanation: "Residualen står ortogonalt på $\\operatorname{Col}A$, altså i ortogonalkomplementet $\\operatorname{Nul}A^{T}$.",
    },
    {
      question: "For en regresjonslinje er den øverste komponenten i $A^{T}\\mathbf b$ lik:",
      options: ["$\\sum_i y_i$ (summen av $y$-verdiene)", "$\\sum_i x_i$ (summen av $x$-verdiene)", "$\\sum_i x_iy_i$ (summen av produktene)", "$\\sum_i x_i^2$ (summen av kvadratene)"],
      explanation: "Første kolonne i $A$ er bare ettall, så første komponent i $A^{T}\\mathbf b$ er $\\sum y_i$. Andre komponent blir $\\sum x_iy_i$.",
    },
    {
      question: "Hva blir minste-kvadraters-feilen hvis $A\\mathbf x=\\mathbf b$ faktisk har en eksakt løsning?",
      options: ["$0$ — den eksakte løsningen er også minste kvadraters løsning", "Alltid lik $1$, helt uavhengig av dataene i systemet", "Lik normen $\\|\\mathbf b\\|$ av høyresiden i systemet", "Lik determinanten $\\det(A^{T}A)$ til Gram-matrisen"],
      explanation: "Er systemet konsistent, treffer $A\\hat{\\mathbf x}=\\mathbf b$ nøyaktig, så residualen og dermed feilen er $0$.",
    },
    {
      question: "For polynomregresjon $y=c_0+c_1x+c_2x^2$ får designmatrisen en ekstra kolonne med:",
      options: ["$x_i^2$", "$y_i^2$", "$1/x_i$", "$c_2$"],
      explanation: "Parabelen legger til leddet $c_2x^2$, så designmatrisen får en kolonne med $x_i^2$; problemet er fortsatt lineært i koeffisientene.",
    },
    {
      question: "Normallikningene følger av kravet om at residualen står ortogonalt på $\\operatorname{Col}A$. Hvilken likning uttrykker dette direkte?",
      options: ["$A^{T}(\\mathbf b-A\\hat{\\mathbf x})=\\mathbf 0$", "$A(\\mathbf b-A\\hat{\\mathbf x})=\\mathbf 0$", "$(\\mathbf b-A\\hat{\\mathbf x})^{T}\\mathbf b=\\mathbf 0$", "$\\hat{\\mathbf x}^{T}A^{T}A=\\mathbf 0$"],
      explanation: "At feilen er ortogonal på hver kolonne betyr $A^{T}(\\mathbf b-A\\hat{\\mathbf x})=\\mathbf 0$; ganges ut gir dette normallikningene.",
    },
    {
      question: "Når er $A^{T}A$ positiv definit (ikke bare positiv semidefinit)?",
      options: ["Når kolonnene i $A$ er lineært uavhengige", "Når $A$ er kvadratisk", "Når $\\mathbf b=\\mathbf 0$", "Når $A$ har minst én nullrad"],
      explanation: "$\\mathbf x^{T}(A^{T}A)\\mathbf x=\\|A\\mathbf x\\|^2>0$ for alle $\\mathbf x\\ne\\mathbf 0$ nettopp når $A\\mathbf x=\\mathbf 0$ bare har $\\mathbf x=\\mathbf 0$, dvs. uavhengige kolonner.",
    },
  ],
  'tma4110-6-5': [
    {
      question: "Hva er første steg i ortogonalitetskjeden (sjanger H/I)?",
      options: ["Identifiser hvilket indreprodukt oppgaven bruker", "Sett opp normallikningene med en gang", "Normaliser alle vektorene til lengde 1", "Regn ut determinanten til matrisen"],
      explanation: "Alt (skalarprodukt, norm, projeksjon) må regnes i det oppgitte indreproduktet — så det identifiseres først.",
    },
    {
      question: "I Gram–Schmidt trekker man i hvert steg fra projeksjonen på hvilke vektorer?",
      options: ["De allerede ortogonaliserte $\\mathbf v_i$-ene", "De opprinnelige $\\mathbf a_i$-ene", "Bare den aller første $\\mathbf a_1$", "Enhetsvektorene i standardbasisen"],
      explanation: "$\\mathbf v_k=\\mathbf a_k-\\sum_{i<k}\\frac{\\langle\\mathbf a_k,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}\\mathbf v_i$ — man projiserer på de ortogonaliserte $\\mathbf v_i$, ikke på $\\mathbf a_i$.",
    },
    {
      question: "Projeksjonsformelen $\\operatorname{proj}_W\\mathbf y=\\sum_i\\frac{\\langle\\mathbf y,\\mathbf v_i\\rangle}{\\langle\\mathbf v_i,\\mathbf v_i\\rangle}\\mathbf v_i$ krever at basisen $\\{\\mathbf v_i\\}$ er:",
      options: ["Ortogonal", "Lineært avhengig", "Normalisert til heltall", "Sortert etter lengde"],
      explanation: "Formelen gjelder bare med en ortogonal basis; er spennvektorene ikke ortogonale, må du Gram–Schmidte først.",
    },
    {
      question: "Hvordan finner man avstanden fra en vektor $\\mathbf y$ til underrommet $W$?",
      options: ["$\\|\\mathbf y-\\operatorname{proj}_W\\mathbf y\\|$", "$\\|\\operatorname{proj}_W\\mathbf y\\|$", "$\\|\\mathbf y\\|+\\|\\operatorname{proj}_W\\mathbf y\\|$", "$\\langle\\mathbf y,\\operatorname{proj}_W\\mathbf y\\rangle$"],
      explanation: "Avstanden er lengden av restleddet $\\mathbf z=\\mathbf y-\\operatorname{proj}_W\\mathbf y$, altså $\\|\\mathbf y-\\operatorname{proj}_W\\mathbf y\\|$.",
    },
    {
      question: "Hvordan gjør man en ortogonal basis $\\{\\mathbf v_i\\}$ om til en ortonormal basis?",
      options: ["Del hver vektor på sin egen norm: $\\mathbf u_i=\\mathbf v_i/\\|\\mathbf v_i\\|$", "Legg sammen alle vektorene og normaliser summen til lengde 1", "Multipliser hver vektor med sin egen norm i stedet", "Bytt fortegn på annenhver vektor i basisen, så deles på 2"],
      explanation: "Ortonormal $=$ ortogonal $+$ enhetslengde; del hver $\\mathbf v_i$ på sin norm.",
    },
    {
      question: "Hva er integral-indreproduktet på $\\operatorname{P}_n$ over $[a,b]$?",
      options: ["$\\langle p,q\\rangle=\\int_a^b p(t)q(t)\\,dt$", "$\\langle p,q\\rangle=\\sum_i p_iq_i$ av koeffisientene", "$\\langle p,q\\rangle=p(a)q(b)$", "$\\langle p,q\\rangle=\\int_a^b p(t)\\,dt\\cdot\\int_a^b q(t)\\,dt$"],
      explanation: "Indreproduktet er $\\int_a^b p(t)q(t)\\,dt$; norm og ortogonalitet regnes med dette, ikke med koeffisientene.",
    },
    {
      question: "Hva endrer heltalls-oppskalering av en Gram–Schmidt-vektor?",
      options: ["Ingenting av betydning — retning og ortogonalitet beholdes", "Ortogonaliteten mot de andre vektorene forsvinner umiddelbart", "Vektoren blir automatisk en enhetsvektor med lengde 1", "Underrommet den spenner ut sammen med de andre, endres"],
      explanation: "Å gange $\\mathbf v_k$ med et positivt tall beholder både retning og ortogonalitet; det gir bare renere regning.",
    },
    {
      question: "To vektorer $\\mathbf u$ og $\\mathbf v$ er ortogonale nøyaktig når:",
      options: ["$\\langle\\mathbf u,\\mathbf v\\rangle=0$", "$\\|\\mathbf u\\|=\\|\\mathbf v\\|$", "$\\mathbf u=\\mathbf v$", "$\\langle\\mathbf u,\\mathbf v\\rangle=1$"],
      explanation: "Ortogonalitet betyr at indreproduktet er null, i det oppgitte indreproduktet.",
    },
    {
      question: "Hva er den første vektoren $\\mathbf v_1$ i Gram–Schmidt-prosessen?",
      options: ["$\\mathbf v_1=\\mathbf a_1$ (uendret)", "$\\mathbf v_1=\\mathbf a_1/\\|\\mathbf a_1\\|$", "$\\mathbf v_1=\\mathbf a_2-\\mathbf a_1$", "$\\mathbf v_1=\\mathbf 0$"],
      explanation: "Prosessen starter med $\\mathbf v_1=\\mathbf a_1$; deretter ortogonaliseres de øvrige mot denne.",
    },
    {
      question: "Minste kvadraters løsningen finnes fra hvilket system?",
      options: ["Normallikningene $A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$", "Det opprinnelige $A\\mathbf x=\\mathbf b$ ved radreduksjon", "Egenverdilikningen $A\\mathbf x=\\lambda\\mathbf x$", "Karakteristisk likning $\\det(A-\\lambda I)=0$"],
      explanation: "Normallikningene $A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$ gir minste kvadraters løsningen.",
    },
    {
      question: "Ved rangdefekt (kolonnene i $A$ avhengige) er minste kvadraters løsningen:",
      options: ["Affin — uendelig mange, alle med samme prediksjon $A\\hat{\\mathbf x}$", "Alltid entydig likevel, akkurat som ved uavhengige kolonner", "Ikke-eksisterende — normallikningene mangler da løsning", "Alltid lik nullvektoren, uansett hva $\\mathbf b$ er"],
      explanation: "$A^{T}A$ er da singulær; løsningsmengden er affin, men $A\\hat{\\mathbf x}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$ er entydig.",
    },
    {
      question: "Hvilken sammenheng knytter minste kvadrater til ortogonal projeksjon?",
      options: ["$A\\hat{\\mathbf x}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$", "$\\hat{\\mathbf x}=\\operatorname{proj}_{\\operatorname{Col}A}\\mathbf b$", "$A\\hat{\\mathbf x}=\\mathbf b$ eksakt", "$A^{T}\\hat{\\mathbf x}=\\operatorname{proj}_{\\operatorname{Nul}A}\\mathbf b$"],
      explanation: "Prediksjonen $A\\hat{\\mathbf x}$ er nøyaktig projeksjonen av $\\mathbf b$ på kolonnerommet.",
    },
    {
      question: "I dekomposisjonen $\\mathbf y=\\hat{\\mathbf y}+\\mathbf z$ hva er $\\mathbf z$?",
      options: ["Restleddet $\\mathbf y-\\operatorname{proj}_W\\mathbf y$, som ligger i $W^{\\perp}$", "Projeksjonen $\\operatorname{proj}_W\\mathbf y$, som ligger i $W$", "En enhetsvektor i $W$", "Nullvektoren uansett $\\mathbf y$"],
      explanation: "$\\hat{\\mathbf y}=\\operatorname{proj}_W\\mathbf y\\in W$ og $\\mathbf z=\\mathbf y-\\hat{\\mathbf y}\\in W^{\\perp}$; avstanden er $\\|\\mathbf z\\|$.",
    },
    {
      question: "Hva er $\\langle t,t^2\\rangle=\\int_{-1}^{1}t\\cdot t^2\\,dt$?",
      options: ["$0$ — integranden $t^3$ er en oddefunksjon over $[-1,1]$", "$\\tfrac23$, som er verdien av $\\int_{-1}^1 t^2\\,dt$", "$\\tfrac25$, som er verdien av $\\int_{-1}^1 t^4\\,dt$", "$2$, som er verdien av $\\int_{-1}^1 1\\,dt$"],
      explanation: "$\\int_{-1}^1 t^3\\,dt=0$ fordi $t^3$ er odde og intervallet symmetrisk; altså er $t\\perp t^2$.",
    },
    {
      question: "Hvordan defineres normen i et indreproduktrom?",
      options: ["$\\|\\mathbf v\\|=\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$", "$\\|\\mathbf v\\|=\\langle\\mathbf v,\\mathbf v\\rangle$", "$\\|\\mathbf v\\|=\\sum_i v_i$", "$\\|\\mathbf v\\|=\\max_i|v_i|$"],
      explanation: "Normen er kvadratrota av indreproduktet med seg selv, $\\|\\mathbf v\\|=\\sqrt{\\langle\\mathbf v,\\mathbf v\\rangle}$.",
    },
    {
      question: "Hvilken feil advarer sensor oftest mot i projeksjonsoppgaver?",
      options: ["Å bruke projeksjonsformelen uten å ortogonalisere basisen først", "Å normalisere alle vektorene altfor tidlig i regningen", "Å regne avstanden med kvadratrot i stedet for uten", "Å skalere Gram–Schmidt-vektorene til heltall underveis"],
      explanation: "Projeksjonsformelen krever ortogonal basis; brukes den på en ikke-ortogonal spenn, blir svaret feil.",
    },
  ],
  'tma4110-7-1': [
    {
      question: "Hva er $(2+3i)(1-4i)$ på formen $x+iy$?",
      options: ["$14-5i$", "$2-12i$", "$-10+11i$", "$14+11i$"],
      explanation: "Gang ut: $2-8i+3i-12i^2=2-5i+12=14-5i$. Feilene kommer av å glemme $i^2=-1$.",
    },
    {
      question: "Hva er $\\dfrac{3+i}{1-2i}$ skrevet på formen $x+iy$?",
      options: ["$\\tfrac15+\\tfrac75 i$", "$3-\\tfrac12 i$", "$\\tfrac15-\\tfrac75 i$", "$\\tfrac75+\\tfrac15 i$"],
      explanation: "Utvid med $1+2i$: $\\tfrac{(3+i)(1+2i)}{1+4}=\\tfrac{1+7i}{5}=\\tfrac15+\\tfrac75 i$.",
    },
    {
      question: "Hva er det komplekskonjugerte til $z=-4+7i$?",
      options: ["$-4-7i$", "$4-7i$", "$4+7i$", "$-7+4i$"],
      explanation: "Konjugat bytter fortegn på imaginærdelen, men beholder realdelen: $\\bar z=-4-7i$.",
    },
    {
      question: "Hva er $|3-4i|$?",
      options: ["$5$", "$25$", "$7$", "$\\sqrt7$"],
      explanation: "$|z|=\\sqrt{x^2+y^2}=\\sqrt{9+16}=\\sqrt{25}=5$. Husk kvadratroten.",
    },
    {
      question: "For $z=x+iy$, hva er $z\\bar z$?",
      options: ["$x^2+y^2$", "$x^2-y^2$", "$x^2+y^2+2xyi$", "$x^2-y^2+2xyi$"],
      explanation: "$(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2$, som er $|z|^2$ — reelt og $\\ge0$.",
    },
    {
      question: "Hva er imaginærdelen $\\operatorname{Im}z$ av $z=5-2i$?",
      options: ["$-2$", "$-2i$", "$2$", "$5$"],
      explanation: "Imaginærdelen er det reelle tallet foran $i$, med fortegn: $-2$ (ikke $-2i$).",
    },
    {
      question: "Hvilken regel bruker du for å skrive en kvotient $\\dfrac{z}{w}$ på formen $x+iy$?",
      options: ["Utvid teller og nevner med konjugatet $\\bar w$ av nevneren", "Utvid teller og nevner med konjugatet $\\bar z$ av telleren", "Del realdel på realdel og imaginærdel på imaginærdel", "Gang teller og nevner med $i$"],
      explanation: "$\\tfrac{z}{w}\\cdot\\tfrac{\\bar w}{\\bar w}=\\tfrac{z\\bar w}{|w|^2}$ gjør nevneren reell.",
    },
    {
      question: "Hva er $i^{23}$?",
      options: ["$-i$", "$i$", "$-1$", "$1$"],
      explanation: "$23=4\\cdot5+3$, så $i^{23}=i^3=-i$. Potensene gjentar seg med periode 4.",
    },
    {
      question: "Hva er $|(2+i)(1-3i)|$?",
      options: ["$5\\sqrt2$", "$\\sqrt{50}\\cdot 2$", "$50$", "$\\sqrt{15}$"],
      explanation: "$|zw|=|z||w|=\\sqrt5\\cdot\\sqrt{10}=\\sqrt{50}=5\\sqrt2$.",
    },
    {
      question: "Hvilket geometrisk sted beskriver $|z-a|=r$ i det komplekse planet?",
      options: ["En sirkel med sentrum $a$ og radius $r$", "En rett linje gjennom $a$", "Midtnormalen mellom $a$ og origo", "En sirkel med sentrum origo og radius $a$"],
      explanation: "Fast avstand $r$ til punktet $a$ gir en sirkel om $a$.",
    },
    {
      question: "Likningen $|z-2|=|z-2i|$ beskriver hvilken mengde?",
      options: ["Linja $y=x$ (midtnormalen mellom $2$ og $2i$)", "Sirkelen med sentrum origo og radius $2$", "Linja $y=-x$", "Punktet $(1,1)$ alene"],
      explanation: "Like langt fra $(2,0)$ og $(0,2)$ gir midtnormalen $y=x$ etter kvadrering.",
    },
    {
      question: "Hva er $(5-2i)+(-1+6i)$?",
      options: ["$4+4i$", "$6-8i$", "$4-4i$", "$-5-12i$"],
      explanation: "Legg sammen realdeler og imaginærdeler hver for seg: $(5-1)+(-2+6)i=4+4i$.",
    },
    {
      question: "Hva er $\\dfrac{1}{i}$ på formen $x+iy$?",
      options: ["$-i$", "$i$", "$1$", "$-1$"],
      explanation: "Utvid med $-i$: $\\tfrac{-i}{i(-i)}=\\tfrac{-i}{1}=-i$.",
    },
    {
      question: "Når er et komplekst tall $z$ rent reelt?",
      options: ["Når $z=\\bar z$ (imaginærdelen er null)", "Når $z=-\\bar z$ (realdelen er null)", "Når $|z|=1$", "Når $\\operatorname{Re}z=\\operatorname{Im}z$"],
      explanation: "$z=\\bar z$ betyr $iy=-iy$, altså $y=0$: tallet er reelt.",
    },
    {
      question: "Hva er $(a+bi)^2$?",
      options: ["$a^2-b^2+2ab\\,i$", "$a^2+b^2$", "$a^2+b^2+2ab\\,i$", "$a^2-b^2-2ab\\,i$"],
      explanation: "$(a+bi)^2=a^2+2abi+b^2i^2=a^2-b^2+2ab\\,i$. Ikke forveksle med $|a+bi|^2=a^2+b^2$.",
    },
    {
      question: "Hvilken påstand om modulus er RIKTIG for alle $z,w$?",
      options: ["$|zw|=|z||w|$", "$|z+w|=|z|+|w|$", "$|z|=x^2+y^2$", "$|\\,\\bar z\\,|=-|z|$"],
      explanation: "Modulus er multiplikativ, men ikke additiv (bare $|z+w|\\le|z|+|w|$), og $|\\bar z|=|z|\\ge0$.",
    },
    {
      question: "Geometrisk er $\\bar z$ i forhold til $z$ ...",
      options: ["speilingen om realaksen", "speilingen om imaginæraksen", "speilingen gjennom origo", "rotasjonen $90^\\circ$ om origo"],
      explanation: "$\\bar z=x-iy$ har samme realdel og motsatt imaginærdel — speiling om den reelle aksen.",
    },
    {
      question: "For hvilken $a\\in\\mathbb R$ er $(a+2i)(3-i)$ rent imaginært?",
      options: ["$a=-\\tfrac23$", "$a=\\tfrac23$", "$a=6$", "$a=-6$"],
      explanation: "$(a+2i)(3-i)=(3a+2)+(6-a)i$; rent imaginært krever realdel $3a+2=0$, altså $a=-\\tfrac23$.",
    },
  ],
  'tma4110-7-2': [
    {
      question: "Hva sier Eulers formel?",
      options: ["$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$", "$e^{i\\theta}=\\sin\\theta+i\\cos\\theta$", "$e^{i\\theta}=\\cos\\theta-i\\sin\\theta$", "$e^{i\\theta}=i(\\cos\\theta+\\sin\\theta)$"],
      explanation: "Eulers formel knytter eksponentialfunksjonen til cosinus og sinus.",
    },
    {
      question: "Hva er $z=-1+i$ på eksponentialform?",
      options: ["$\\sqrt2\\,e^{i3\\pi/4}$", "$\\sqrt2\\,e^{i\\pi/4}$", "$2\\,e^{i3\\pi/4}$", "$\\sqrt2\\,e^{-i\\pi/4}$"],
      explanation: "$r=\\sqrt2$ og punktet $(-1,1)$ ligger i 2. kvadrant med $\\theta=\\pi-\\tfrac\\pi4=\\tfrac{3\\pi}4$.",
    },
    {
      question: "Hva blir $z_1z_2$ når $z_1=r_1e^{i\\theta_1}$ og $z_2=r_2e^{i\\theta_2}$?",
      options: ["$r_1r_2\\,e^{i(\\theta_1+\\theta_2)}$", "$r_1r_2\\,e^{i(\\theta_1-\\theta_2)}$", "$(r_1+r_2)e^{i\\theta_1\\theta_2}$", "$r_1r_2\\,e^{i\\theta_1\\theta_2}$"],
      explanation: "Ved multiplikasjon ganges moduli og adderes argumenter.",
    },
    {
      question: "Hva sier de Moivres formel for $z=re^{i\\theta}$?",
      options: ["$z^n=r^n e^{in\\theta}$", "$z^n=nr\\,e^{i\\theta/n}$", "$z^n=r^n e^{i\\theta}$", "$z^n=r\\,e^{in\\theta}$"],
      explanation: "Modulus opphøyes i $n$, argumentet ganges med $n$.",
    },
    {
      question: "Hva er $(1+i)^8$?",
      options: ["$16$", "$16i$", "$-16$", "$256$"],
      explanation: "$1+i=\\sqrt2 e^{i\\pi/4}$, så $(1+i)^8=(\\sqrt2)^8 e^{i2\\pi}=16$.",
    },
    {
      question: "Hva er $z^6$ når $z=-1+i$?",
      options: ["$8i$", "$-8i$", "$8$", "$64i$"],
      explanation: "$z=\\sqrt2 e^{i3\\pi/4}$, $z^6=8e^{i9\\pi/2}=8e^{i\\pi/2}=8i$.",
    },
    {
      question: "Hva er $2e^{i\\pi/3}$ på kartesisk form?",
      options: ["$1+i\\sqrt3$", "$\\sqrt3+i$", "$1+i$", "$\\tfrac12+i\\tfrac{\\sqrt3}2$"],
      explanation: "$2(\\cos\\tfrac\\pi3+i\\sin\\tfrac\\pi3)=2(\\tfrac12+i\\tfrac{\\sqrt3}2)=1+i\\sqrt3$.",
    },
    {
      question: "Hvordan finner du argumentet til et tall i 2. kvadrant ($x<0,y>0$)?",
      options: ["$\\theta=\\pi-\\alpha$, der $\\alpha=\\arctan|y/x|$", "$\\theta=\\alpha$", "$\\theta=-\\alpha$", "$\\theta=\\alpha-\\pi$"],
      explanation: "Referansevinkelen justeres med $\\pi$ i 2. kvadrant; $\\tan^{-1}$ alene gir feil kvadrant.",
    },
    {
      question: "Hva er $\\dfrac{z_1}{z_2}$ når $z_1=4e^{i2\\pi/3}$ og $z_2=2e^{i\\pi/6}$?",
      options: ["$2e^{i\\pi/2}$", "$2e^{i5\\pi/6}$", "$8e^{i\\pi/2}$", "$\\tfrac12 e^{i\\pi/2}$"],
      explanation: "Del moduli ($4/2=2$) og subtraher argumenter ($\\tfrac{2\\pi}3-\\tfrac\\pi6=\\tfrac\\pi2$).",
    },
    {
      question: "Hva er $e^{i\\pi}$?",
      options: ["$-1$", "$1$", "$i$", "$-i$"],
      explanation: "$e^{i\\pi}=\\cos\\pi+i\\sin\\pi=-1$ — Eulers identitet $e^{i\\pi}+1=0$.",
    },
    {
      question: "Hva er modulus $|e^{i\\theta}|$ for reelt $\\theta$?",
      options: ["$1$", "$\\theta$", "$e^\\theta$", "$0$"],
      explanation: "$|e^{i\\theta}|=\\sqrt{\\cos^2\\theta+\\sin^2\\theta}=1$; alle ligger på enhetssirkelen.",
    },
    {
      question: "Geometrisk gjør multiplikasjon med $e^{i\\theta}$ (for $\\theta>0$) at et tall ...",
      options: ["roteres $\\theta$ mot klokka, modulus uendret", "skaleres med $\\theta$, argument uendret", "speiles om realaksen", "roteres $\\theta$ med klokka"],
      explanation: "$e^{i\\theta}\\cdot re^{i\\varphi}=re^{i(\\varphi+\\theta)}$: modulus beholdes, argumentet øker med $\\theta$.",
    },
    {
      question: "Hva er konjugatet av $re^{i\\theta}$?",
      options: ["$re^{-i\\theta}$", "$-re^{i\\theta}$", "$r e^{i\\theta}$", "$\\tfrac1r e^{-i\\theta}$"],
      explanation: "Konjugering speiler om realaksen og snur fortegnet på argumentet.",
    },
    {
      question: "Hva er $(\\sqrt3+i)^4$ på kartesisk form?",
      options: ["$-8+8\\sqrt3\\,i$", "$8+8\\sqrt3\\,i$", "$16$", "$-8-8\\sqrt3\\,i$"],
      explanation: "$\\sqrt3+i=2e^{i\\pi/6}$, så potensen er $16e^{i2\\pi/3}=16(-\\tfrac12+i\\tfrac{\\sqrt3}2)=-8+8\\sqrt3 i$.",
    },
    {
      question: "Hvorfor gir $\\tan^{-1}(y/x)$ ofte feil argument direkte?",
      options: ["Fordi $\\tan^{-1}$ bare gir verdier i $(-\\tfrac\\pi2,\\tfrac\\pi2)$ og ignorerer kvadranten", "Fordi $\\tan^{-1}$ gir svar i grader, ikke radianer", "Fordi $\\tan\\theta=x/y$, ikke $y/x$", "Fordi argumentet alltid er positivt"],
      explanation: "Man må justere referansevinkelen etter fortegnene til $x$ og $y$.",
    },
    {
      question: "Hva er hovedargumentet (i $(-\\pi,\\pi]$) til $z=-\\sqrt3-i$?",
      options: ["$-\\tfrac{5\\pi}6$", "$\\tfrac{5\\pi}6$", "$-\\tfrac\\pi6$", "$\\tfrac{7\\pi}6$ er hovedargumentet"],
      explanation: "$(-\\sqrt3,-1)$ ligger i 3. kvadrant, $\\alpha=\\tfrac\\pi6$, så $\\theta=-\\pi+\\tfrac\\pi6=-\\tfrac{5\\pi}6$.",
    },
    {
      question: "Fra de Moivre med $n=2$: hva er $\\cos2\\theta$?",
      options: ["$\\cos^2\\theta-\\sin^2\\theta$", "$2\\sin\\theta\\cos\\theta$", "$1-2\\sin\\theta$", "$\\cos^2\\theta+\\sin^2\\theta$"],
      explanation: "Realdelen av $(\\cos\\theta+i\\sin\\theta)^2$ gir $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$.",
    },
    {
      question: "Etter de Moivre får du argumentet $\\tfrac{9\\pi}2$. Hva reduseres det til i $(-\\pi,\\pi]$?",
      options: ["$\\tfrac\\pi2$", "$\\tfrac{9\\pi}2$", "$\\tfrac{3\\pi}2$", "$-\\tfrac\\pi2$"],
      explanation: "Trekk fra hele omdreininger: $\\tfrac{9\\pi}2-4\\pi=\\tfrac\\pi2$.",
    },
  ],
  'tma4110-7-3': [
    {
      question: "Hvor mange forskjellige løsninger har $z^n=c$ når $c\\ne0$?",
      options: ["Nøyaktig $n$", "Nøyaktig $2$", "Uendelig mange", "Høyst $2$"],
      explanation: "Algebraens fundamentalsetning gir nøyaktig $n$ løsninger, jevnt fordelt på en sirkel.",
    },
    {
      question: "Hva er felles modulus for de $n$ løsningene av $z^n=c$, der $c=Re^{i\\varphi}$?",
      options: ["$R^{1/n}$", "$R$", "$R/n$", "$nR$"],
      explanation: "Alle røttene har modulus $R^{1/n}$ — den reelle $n$-te roten av $|c|$.",
    },
    {
      question: "Hva er de fire løsningene av $z^4=1$?",
      options: ["$1,\\ i,\\ -1,\\ -i$", "$1,\\ -1$", "$i,\\ -i$", "$1,\\ i,\\ 2,\\ -i$"],
      explanation: "Enhetsrøttene $e^{i\\pi k/2}$ for $k=0,1,2,3$ er $1,i,-1,-i$.",
    },
    {
      question: "Hva er løsningene av $z^3=8$?",
      options: ["$2,\\ -1+i\\sqrt3,\\ -1-i\\sqrt3$", "$2,\\ -2,\\ 8$", "$2,\\ 2i,\\ -2i$", "$8,\\ 8e^{i2\\pi/3},\\ 8e^{i4\\pi/3}$"],
      explanation: "Modulus $8^{1/3}=2$, argumentene $0,\\tfrac{2\\pi}3,\\tfrac{4\\pi}3$ gir de tre løsningene.",
    },
    {
      question: "Hvilken vinkelavstand er det mellom nabo-løsningene av $z^n=c$?",
      options: ["$\\tfrac{2\\pi}{n}$", "$\\tfrac{\\pi}{n}$", "$\\tfrac{2\\pi}{n-1}$", "$2\\pi n$"],
      explanation: "Argumentene skiller seg med $\\tfrac{2\\pi}{n}$; røttene danner en regulær $n$-kant.",
    },
    {
      question: "Hva er løsningene av $z^2+2z+5=0$?",
      options: ["$-1\\pm2i$", "$1\\pm2i$", "$-1\\pm4i$", "$2\\pm i$"],
      explanation: "$D=4-20=-16$, $\\sqrt D=4i$, så $z=\\tfrac{-2\\pm4i}{2}=-1\\pm2i$.",
    },
    {
      question: "For et polynom med REELLE koeffisienter: hvis $2+3i$ er en rot, hva vet vi?",
      options: ["$2-3i$ er også en rot", "$-2-3i$ er også en rot", "$3+2i$ er også en rot", "$2+3i$ er dobbeltrot"],
      explanation: "Konjugatrot-setningen: komplekse røtter opptrer i konjugerte par $a\\pm bi$.",
    },
    {
      question: "Hva er de to kvadratrøttene av $-2i$?",
      options: ["$\\pm(1-i)$", "$\\pm(1+i)$", "$\\pm2i$", "$\\pm\\sqrt2\\,i$"],
      explanation: "$(1-i)^2=1-2i+i^2=-2i$, så kvadratrøttene er $\\pm(1-i)$.",
    },
    {
      question: "Hvordan løser du en tredjegradslikning $p(z)=0$ effektivt?",
      options: ["Gjett en rot, polynomdivider, og løs andregradsresten", "Bruk abc-formelen direkte på tredjegradspolynomet", "Ta tredjeroten av begge sider", "Sett $z=x+iy$ og løs tre likninger"],
      explanation: "Gjett en enkel rot (deler av konstantleddet), del ut faktoren, og bruk abc på resten.",
    },
    {
      question: "Hva sier algebraens fundamentalsetning?",
      options: ["Et polynom av grad $n\\ge1$ har nøyaktig $n$ røtter i $\\mathbb C$ (med multiplisitet)", "Et polynom av grad $n$ har høyst to røtter", "Bare reelle polynom har komplekse røtter", "Et polynom har like mange reelle som komplekse røtter"],
      explanation: "Over $\\mathbb C$ har grad-$n$-polynom nøyaktig $n$ røtter talt med multiplisitet.",
    },
    {
      question: "Løsningene av $z^4=-16$ er ...",
      options: ["$\\pm\\sqrt2\\pm\\sqrt2\\,i$", "$\\pm2,\\ \\pm2i$", "$\\pm4$", "$\\pm2\\pm2i$"],
      explanation: "$-16=16e^{i\\pi}$, modulus $2$, argumenter $\\tfrac\\pi4,\\tfrac{3\\pi}4,\\tfrac{5\\pi}4,\\tfrac{7\\pi}4$.",
    },
    {
      question: "Geometrisk danner de $n$ løsningene av $z^n=c$ ...",
      options: ["hjørnene i en regulær $n$-kant", "en rett linje", "en spiral", "to punkter på realaksen"],
      explanation: "Lik modulus og lik vinkelavstand $\\tfrac{2\\pi}n$ gir en regulær $n$-kant på sirkelen.",
    },
    {
      question: "Hva er diskriminanten $D=b^2-4ac$ til $z^2-(3+i)z+(2+2i)=0$?",
      options: ["$-2i$", "$2i$", "$-2$", "$8+6i$"],
      explanation: "$(3+i)^2-4(2+2i)=(8+6i)-(8+8i)=-2i$.",
    },
    {
      question: "Hva er løsningene av $z^3-2z^2+4z-8=0$?",
      options: ["$2,\\ 2i,\\ -2i$", "$2,\\ -2,\\ 4$", "$2,\\ 1+i,\\ 1-i$", "$-2,\\ 2i,\\ -2i$"],
      explanation: "$z=2$ er rot; divisjon gir $z^2+4=0$, altså $z=\\pm2i$.",
    },
    {
      question: "Et konjugert rotpar $a\\pm bi$ gir hvilken reell faktor?",
      options: ["$z^2-2az+(a^2+b^2)$", "$z^2+2az+(a^2-b^2)$", "$z^2-a z+b$", "$z^2+(a^2+b^2)$"],
      explanation: "$(z-(a+bi))(z-(a-bi))=z^2-2az+(a^2+b^2)$ — reelle koeffisienter.",
    },
    {
      question: "Hva er summen av de tre tredjerøttene av et tall $c\\ne0$?",
      options: ["$0$", "$c$", "$3c^{1/3}$", "$c^{1/3}$"],
      explanation: "Røttene er $\\rho(1+\\omega+\\omega^2)$ med $1+\\omega+\\omega^2=0$, så summen er $0$.",
    },
    {
      question: "En vanlig feil ved $z^n=c$ er å ...",
      options: ["finne bare én rot og glemme $+\\tfrac{2\\pi k}{n}$", "ta for mange kvadratrøtter", "bruke abc-formelen", "skrive svaret på polar form"],
      explanation: "Man må gjennom alle $k=0,\\dots,n-1$ for å få alle $n$ røttene.",
    },
    {
      question: "Hvorfor har et reelt polynom av oddetallsgrad alltid minst én reell rot?",
      options: ["Komplekse røtter kommer i par, og et oddetall kan ikke deles helt i par", "Fordi diskriminanten alltid er positiv", "Fordi alle røtter er reelle", "Fordi konstantleddet er reelt"],
      explanation: "Konjugatrot-setningen parer opp de komplekse røttene; én reell rot blir alltid til overs.",
    },
  ],
  'tma4110-7-4': [
    {
      question: "Hvilken form er enklest for å regne ut en potens som $z^{10}$?",
      options: ["Polar form (de Moivre)", "Kartesisk form (gang ut ti ganger)", "Konjugatform", "Det spiller ingen rolle"],
      explanation: "de Moivre gjør $z^n=r^ne^{in\\theta}$ til én linje; kartesisk krever ti multiplikasjoner.",
    },
    {
      question: "Hva er $(3+2i)(1-i)$?",
      options: ["$5-i$", "$3-2i$", "$1+5i$", "$5+i$"],
      explanation: "$3-3i+2i-2i^2=3-i+2=5-i$.",
    },
    {
      question: "Hva er $\\dfrac{(2+3i)(1-i)}{1+i}$ på kartesisk form?",
      options: ["$3-2i$", "$5+i$", "$3+2i$", "$-3-2i$"],
      explanation: "Teller $=5+i$; del på $1+i$ (utvid med $1-i$) gir $\\tfrac{6-4i}{2}=3-2i$.",
    },
    {
      question: "Løsningene av $z^3=8i$ er ...",
      options: ["$\\sqrt3+i,\\ -\\sqrt3+i,\\ -2i$", "$2,\\ 2i,\\ -2i$", "$2i,\\ -2i,\\ 2$", "$\\sqrt3-i,\\ -\\sqrt3-i,\\ 2i$"],
      explanation: "$8i=8e^{i\\pi/2}$, modulus $2$, argumentene $\\tfrac\\pi6,\\tfrac{5\\pi}6,\\tfrac{3\\pi}2$.",
    },
    {
      question: "Hvor mange løsninger har $z^6=1$, og hvor ligger de?",
      options: ["Seks, jevnt på enhetssirkelen med $60^\\circ$ mellom hver", "To, i $1$ og $-1$", "Seks, på en sirkel med radius $6$", "Én, i $z=1$"],
      explanation: "Enhetsrøttene $e^{i2\\pi k/6}$ danner en regulær sekskant på enhetssirkelen.",
    },
    {
      question: "Løsningene av $z^2+4z+13=0$ er ...",
      options: ["$-2\\pm3i$", "$2\\pm3i$", "$-2\\pm9i$", "$-4\\pm3i$"],
      explanation: "$D=16-52=-36$, $\\sqrt D=6i$, $z=\\tfrac{-4\\pm6i}{2}=-2\\pm3i$.",
    },
    {
      question: "Ved divisjon $\\dfrac{z}{w}$ på kartesisk form utvider du med ...",
      options: ["konjugatet $\\bar w$ av nevneren", "konjugatet $\\bar z$ av telleren", "$i$", "modulus $|w|$"],
      explanation: "$\\tfrac{z}{w}\\cdot\\tfrac{\\bar w}{\\bar w}=\\tfrac{z\\bar w}{|w|^2}$ gjør nevneren reell.",
    },
    {
      question: "Hva er $(1+i)^{10}$?",
      options: ["$32i$", "$32$", "$-32i$", "$1024i$"],
      explanation: "$1+i=\\sqrt2 e^{i\\pi/4}$, så $(1+i)^{10}=32e^{i5\\pi/2}=32e^{i\\pi/2}=32i$.",
    },
    {
      question: "Etter å ha gjettet en rot $z_1$ i en tredjegradslikning, hva gjør du?",
      options: ["Polynomdivider med $(z-z_1)$ og løser andregradsresten", "Ganger med $(z-z_1)$", "Deriverer polynomet", "Setter $z=x+iy$"],
      explanation: "Faktor-setningen: $(z-z_1)$ deler polynomet; resten er en andregrad du løser med abc.",
    },
    {
      question: "Mengden $|z-i|=|z+1|$ er ...",
      options: ["linja $y=-x$ (midtnormalen mellom $i$ og $-1$)", "en sirkel med sentrum $i$", "linja $y=x$", "punktet $(-\\tfrac12,\\tfrac12)$"],
      explanation: "Like langt fra $(0,1)$ og $(-1,0)$; kvadrering gir $y=-x$.",
    },
    {
      question: "Diskriminanten til $z^2-(3+i)z+(2+2i)=0$ er $-2i$. Hva er $\\sqrt{-2i}$?",
      options: ["$\\pm(1-i)$", "$\\pm(1+i)$", "$\\pm\\sqrt2\\,i$", "$\\pm2i$"],
      explanation: "$(1-i)^2=1-2i-1=-2i$, så kvadratrøttene er $\\pm(1-i)$.",
    },
    {
      question: "Hva er modulus til alle løsningene av $z^4=-16$?",
      options: ["$2$", "$16$", "$4$", "$\\sqrt2$"],
      explanation: "$R^{1/n}=16^{1/4}=2$; alle fire røttene ligger på sirkelen $r=2$.",
    },
    {
      question: "Hva er $|5+i|/|2-i|$ (modulus av $\\tfrac{5+i}{2-i}$)?",
      options: ["$\\sqrt{26/5}$", "$\\sqrt{26}$", "$26/5$", "$5/2$"],
      explanation: "$|z/w|=|z|/|w|=\\sqrt{26}/\\sqrt5=\\sqrt{26/5}$.",
    },
    {
      question: "Løsningene av $z^3-2z^2+4z-8=0$ er ...",
      options: ["$2,\\ 2i,\\ -2i$", "$2,\\ -2,\\ 4$", "$-2,\\ 2i,\\ -2i$", "$2,\\ 1+i,\\ 1-i$"],
      explanation: "$z=2$ er rot; divisjon gir $z^2+4=0$, altså $z=\\pm2i$.",
    },
    {
      question: "Hvorfor bør du alltid tegne en skisse når du bestemmer argumentet?",
      options: ["Fordi $\\tan^{-1}$ ikke skiller kvadrantene og lett gir feil vinkel", "Fordi skissen erstatter regningen", "Fordi sensor bare vurderer skissen", "Fordi modulus leses av skissen"],
      explanation: "Fortegnene til $x,y$ (og en skisse) avgjør kvadranten; $\\tan^{-1}$ alene gjør ikke det.",
    },
    {
      question: "Under kode E skal svaret på en komplekstall-oppgave gis som ...",
      options: ["eksakt form, f.eks. $\\sqrt3+i$ eller $32i$", "desimaltall med to gjeldende siffer", "bare modulus", "bare på polar form"],
      explanation: "Ingen kalkulator ⇒ eksakte former forventes; et urent desimalsvar signaliserer regnefeil.",
    },
  ],
  'tma4110-8-1': [
    {
      question: "Hva kjennetegner en separabel 1. ordens differensiallikning?",
      options: ["Høyresida kan skrives som et produkt f(x)·g(y) der x og y er skilt i hver sin faktor", "Høyresida kan skrives som en sum f(x)+g(y) der x og y opptrer i hvert sitt ledd", "Likningen inneholder både y og y' opphøyd i andre potens et eller annet sted", "Den deriverte y' er lik en konstant multiplisert med den uavhengige variabelen x"],
      explanation: "Separabel betyr at y'=f(x)g(y): x-avhengigheten og y-avhengigheten er skilt som faktorer, slik at variablene kan skilles og hver side integreres for seg.",
    },
    {
      question: "Hva er den generelle løsningen av y'=2xy?",
      options: ["y=Ce^{x^2}, der C er en vilkårlig konstant som også dekker konstantløsningen y=0", "y=Ce^{2x}, der eksponenten er 2x fordi koeffisienten foran leddet nettopp er 2", "y=x^2+C, funnet ved å integrere høyresida 2x direkte med hensyn på x alene", "y=Ce^{x^2/2}, der eksponenten halveres slik man gjør når man integrerer 2x"],
      explanation: "Skiller vi de variable får vi dy/y=2x dx, altså ln|y|=x^2+C_1 og y=Ce^{x^2}. Kontroll: y'=Ce^{x^2}·2x=2xy.",
    },
    {
      question: "Hvorfor må man sjekke konstantløsningene g(y)=0 separat i den separable metoden?",
      options: ["Fordi de faller ut i det øyeblikket man deler på g(y), og ellers går tapt i svaret", "Fordi de alltid er de eneste fysisk meningsfulle løsningene av differensiallikningen", "Fordi de bare finnes når høyresida i tillegg avhenger eksplisitt av variabelen x", "Fordi integrasjonskonstanten C ikke kan bestemmes uten at man kjenner dem først"],
      explanation: "Metoden deler på g(y), noe som forutsetter g(y)≠0. Løsningene y=c med g(c)=0 (konstantløsninger) forsvinner da og må hentes inn igjen til slutt.",
    },
    {
      question: "Hva er konstantløsningene til y'=x(y-2)(y+1)?",
      options: ["y=2 og y=-1, fordi det er der faktoren g(y)=(y-2)(y+1) blir null", "y=0 og y=x, fordi det er der høyresida som helhet forsvinner uansett verdi", "y=2 og y=1, fordi man leser av tallene direkte fra parentesene i uttrykket", "Det finnes ingen konstantløsninger fordi høyresida også inneholder faktoren x"],
      explanation: "Konstantløsninger krever g(y)=0. Her er g(y)=(y-2)(y+1), som er null for y=2 og y=-1. (Faktoren x endrer ikke hvor g er null.)",
    },
    {
      question: "Løsningen av y'=xy^2, y(0)=1 er y=2/(2-x^2). Hva er definisjonsintervallet?",
      options: ["(-√2, √2), fordi nevneren 2-x^2 blir null i x=±√2 og løsningen sprekker der", "Hele den reelle tallinja, siden brøkuttrykket er definert for alle verdier av x", "(0, √2), fordi initialpunktet x_0=0 er startpunktet og intervallet går bare oppover", "(-2, 2), fordi nevneren inneholder tallet 2 og løsningen brytes akkurat der"],
      explanation: "Definisjonsintervallet er det største åpne intervallet om x_0=0 der løsningen er definert. Nevneren 2-x^2=0 i x=±√2, så intervallet er (-√2, √2).",
    },
    {
      question: "I et initialverdiproblem — når skal initialbetingelsen y(x_0)=y_0 settes inn?",
      options: ["Etter at man har integrert og har den generelle løsningen med konstanten C", "Før man integrerer, slik at man slipper å bære med seg konstanten C i det hele tatt", "Samtidig som man skiller de variable, ved å bytte ut y med y_0 med en gang", "Bare hvis likningen ikke har noen konstantløsninger som må undersøkes først"],
      explanation: "Man finner først den generelle løsningen (med C), og bestemmer så C ved å sette inn x_0 og y_0. Settes betingelsen inn for tidlig, mister man konstanten.",
    },
    {
      question: "Hva er løsningen av y'=y med y(0)=5?",
      options: ["y=5e^{x}, siden y'=y gir eksponentiell vekst og konstanten fastlegges av y(0)=5", "y=5x+1, funnet ved å integrere den konstante høyresida og bruke startverdien", "y=e^{5x}, der startverdien 5 havner som faktor i eksponenten til funksjonen", "y=5+e^{x}, som en sum av startverdien og den generelle eksponentialløsningen"],
      explanation: "y'=y har generell løsning y=Ce^{x}; y(0)=C=5 gir y=5e^{x}. Kontroll: y'=5e^{x}=y og y(0)=5.",
    },
    {
      question: "Hva sier modellen y'=ky om hvordan en størrelse endrer seg?",
      options: ["Endringsraten er proporsjonal med størrelsen selv, med relativ vekstrate y'/y=k", "Endringsraten er konstant lik k, slik at grafen blir en rett linje med stigning k", "Endringsraten er proporsjonal med tiden t, slik at veksten akselererer jevnt", "Endringsraten avtar alltid mot null uansett fortegn på konstanten k i modellen"],
      explanation: "y'=ky betyr at endringen er proporsjonal med mengden selv (y). Da er den relative vekstraten y'/y=k konstant — det som gir eksponentiell vekst (k>0) eller henfall (k<0).",
    },
    {
      question: "Et stoff har halveringstid 8 dager. Hvor stor andel er igjen etter 24 dager?",
      options: ["1/8, fordi 24 dager er tre halveringstider, og (1/2)^3=1/8", "1/3, fordi 24 dager delt på 8 dager gir tre, og andelen er den inverse av det", "3/8, fordi tre halveringer tar bort tre åttendedeler av den opprinnelige mengden", "1/24, fordi hver dag fjerner en fast brøkdel og 24 dager fjerner tilsvarende mye"],
      explanation: "24=3·8, altså tre halveringstider. Hver halvering ganger med 1/2, så igjen er (1/2)^3=1/8 av stoffet.",
    },
    {
      question: "Hvordan sjekker man om en påstått funksjon er en løsning av en differensiallikning?",
      options: ["Man deriverer funksjonen, setter den og y inn i likningen, og ser om sidene blir like", "Man integrerer funksjonen én gang og sjekker om resultatet inneholder en konstant", "Man setter x=0 inn i funksjonen og kontrollerer at man får en fornuftig tallverdi", "Man teller antall konstanter og sammenligner med ordenen til differensiallikningen"],
      explanation: "Verifikasjon ved innsetting: regn ut y', sett y og y' inn i likningen og forenkle. Blir venstre side lik høyre side for alle x, er funksjonen en løsning.",
    },
    {
      question: "Hva er den generelle løsningen av y'=y cos x?",
      options: ["y=Ce^{sin x}, funnet ved å skille de variable og integrere cos x til sin x", "y=Ce^{cos x}, der eksponenten er cos x fordi det er cos x som står i likningen", "y=sin x + C, ved å integrere høyresida cos x direkte med hensyn på x", "y=C·sin x, siden den deriverte av sin x nettopp er cos x som opptrer her"],
      explanation: "Separabel: dy/y=cos x dx gir ln|y|=sin x+C_1, altså y=Ce^{sin x}. Kontroll: y'=Ce^{sin x}·cos x=y cos x.",
    },
    {
      question: "Hva er ordenen til differensiallikningen y'=xy^2?",
      options: ["1. orden, fordi den høyeste deriverte som forekommer er den førstederiverte y'", "2. orden, fordi y opptrer i andre potens gjennom leddet y^2 på høyre side", "3. orden, fordi man teller både x, y og y' som tre bidrag til ordenen", "0. orden, fordi likningen kan løses algebraisk uten noen form for integrasjon"],
      explanation: "Ordenen er den høyeste deriverte i likningen. Her er det y' (førstederiverte), så likningen er av 1. orden — potensen y^2 påvirker ikke ordenen.",
    },
    {
      question: "En bakteriekultur dobles hver 2. time og starter på y_0. Hva er y(t)?",
      options: ["y=y_0·2^{t/2}, som gir dobling nettopp når t=2 fordi 2^{2/2}=2", "y=y_0·2^{2t}, der doblingstiden legges direkte inn som faktor i eksponenten", "y=y_0+2t, der mengden øker med to enheter for hver time som går", "y=2y_0·t/2, ved å gange startmengden med forholdet mellom tid og doblingstid"],
      explanation: "Doblingstid 2 gir y=y_0·2^{t/2}. Sjekk: y(2)=y_0·2^{1}=2y_0. Dette følger av y=y_0e^{kt} med k=(ln2)/2.",
    },
    {
      question: "Hva garanterer eksistens- og entydighetssetningen for y'=F(x,y), y(x_0)=y_0?",
      options: ["Nøyaktig én løsning nær x_0, når F og dens deriverte etter y er kontinuerlige der", "At det alltid finnes uendelig mange løsninger som alle går gjennom punktet (x_0,y_0)", "At løsningen kan skrives eksplisitt på lukket form med kjente elementærfunksjoner", "At løsningen er definert for alle x på hele den reelle tallinja uten noen brudd"],
      explanation: "Er F og ∂F/∂y kontinuerlige rundt (x_0,y_0), finnes nøyaktig én løsning i et intervall om x_0. Setningen sier ingenting om lukket form eller globalt definisjonsområde.",
    },
    {
      question: "Hvorfor kan to forskjellige løsningskurver av y'=x(y-2)(y+1) aldri krysse hverandre?",
      options: ["Fordi entydighetssetningen gjelder, så bare én løsning kan gå gjennom hvert punkt", "Fordi alle løsningene er konstante funksjoner som ligger på vannrette linjer", "Fordi høyresida er positiv overalt, slik at alle kurvene stiger monotont oppover", "Fordi konstantløsningene y=2 og y=-1 er de eneste løsningene likningen har"],
      explanation: "F=x(y-2)(y+1) og ∂F/∂y er kontinuerlige overalt, så entydighetssetningen gjelder: gjennom hvert punkt går nøyaktig én løsning. Kryssing ville gitt to løsninger i samme punkt.",
    },
    {
      question: "Hva blir resultatet av å integrere begge sider i dy/y = 3x^2 dx?",
      options: ["ln|y| = x^3 + C_1, som etter eksponensiering gir y=Ce^{x^3}", "y = x^3 + C_1, ved å integrere venstre side som om den var dy alene", "ln|y| = 3x^3 + C_1, ved å beholde faktoren 3 gjennom integrasjonen av x^2", "1/y = x^3 + C_1, fordi integralet av dy/y behandles som integralet av y^{-1}"],
      explanation: "∫dy/y=ln|y| og ∫3x^2 dx=x^3, så ln|y|=x^3+C_1. Eksponensiering gir y=Ce^{x^3}.",
    },
  ],
  'tma4110-8-2': [
    {
      question: "Hva er standardformen til en lineær 1. ordens differensiallikning?",
      options: ["y'+p(x)y=q(x), med koeffisient 1 foran y' og p, q som funksjoner av x alene", "y'=f(x)g(y), der høyresida er et produkt av en x-del og en y-del hver for seg", "y'+p(x)y^2=q(x), der y kan forekomme i både første og andre potens samtidig", "y''+py'+qy=0, der p og q er konstante koeffisienter foran de deriverte leddene"],
      explanation: "Standardformen er y'+p(x)y=q(x) med 1 foran y'. Da leser man av p og q entydig, noe som er nødvendig for å regne integrerende faktor riktig.",
    },
    {
      question: "Hva er den integrerende faktoren for y'+p(x)y=q(x)?",
      options: ["μ=e^{∫p dx}, valgt slik at venstresida blir den deriverte av produktet μy", "μ=e^{-∫p dx}, med negativt fortegn i eksponenten for å oppheve leddet py", "μ=e^{∫q dx}, siden det er høyresida q som skal integreres i denne metoden", "μ=∫p dx, altså selve antideriverte av p uten noen eksponentialfunksjon rundt"],
      explanation: "μ=e^{∫p dx}. Da er μ'=pμ, så (μy)'=μy'+pμy=μ(y'+py)=μq, og venstresida blir én derivert. Fortegnet i eksponenten er positivt.",
    },
    {
      question: "Før du leser av p(x): hva må være oppfylt i likningen 2y'+4y=6?",
      options: ["Del på 2 så y' får koeffisient 1: y'+2y=3, deretter er p=2 og q=3", "Les av p=4 direkte fra leddet 4y uten å gjøre noe med koeffisienten foran y'", "Del på 4 slik at leddet 4y blir til y, deretter er p=1/2 og q=3/2 i uttrykket", "Flytt tallet 6 over til venstre side først, så leddet blir 2y'+4y-6=0 og p=4"],
      explanation: "p leses av først når y' har koeffisient 1. Del på 2: y'+2y=3, så p=2, q=3. Leser man p før standardform, blir μ feil.",
    },
    {
      question: "Hva er den generelle løsningen av y'+2y=6?",
      options: ["y=3+Ce^{-2x}, der y_p=3 er likevekten q/p og y_h=Ce^{-2x} er den homogene delen", "y=6+Ce^{-2x}, der konstantleddet leses direkte av høyresida 6 i likningen", "y=3+Ce^{2x}, med positiv eksponent siden koeffisienten foran y er positiv", "y=3x+Ce^{-2x}, der likevektsdelen vokser lineært med den uavhengige variabelen"],
      explanation: "μ=e^{2x} gir (e^{2x}y)'=6e^{2x}, altså e^{2x}y=3e^{2x}+C og y=3+Ce^{-2x}. Her er y_p=q/p=3 og y_h=Ce^{-2x}.",
    },
    {
      question: "Hvorfor gjør den integrerende faktoren venstresida til én enkelt derivert?",
      options: ["Fordi μ'=pμ, slik at μy'+μpy nettopp er produktderiverte (μy)' etter produktregelen", "Fordi μ alltid er lik null i akkurat de punktene der y'+py forsvinner samtidig", "Fordi μ opphever høyresida q slik at bare den deriverte av y blir stående igjen", "Fordi eksponentialfunksjoner alltid er sin egen deriverte uansett hva som står i eksponenten"],
      explanation: "Siden μ=e^{∫p dx} har μ'=pμ. Da er (μy)'=μy'+μ'y=μy'+pμy=μ(y'+py). Det er nettopp derfor venstresida blir én derivert.",
    },
    {
      question: "Hva er den integrerende faktoren for y'+(1/x)y=x, x>0?",
      options: ["μ=x, fordi ∫(1/x)dx=ln x og e^{ln x}=x for x>0", "μ=e^{1/x}, ved å sette hele uttrykket 1/x rett inn i eksponenten uten å integrere", "μ=ln x, altså selve antideriverte av 1/x uten eksponentialfunksjonen rundt", "μ=1/x, ved å bruke koeffisienten p=1/x direkte som integrerende faktor"],
      explanation: "∫(1/x)dx=ln x, så μ=e^{ln x}=x (for x>0). Da blir (xy)'=x·x=x^2, som integreres lett.",
    },
    {
      question: "I strukturen y=y_h+y_p — hva er y_h?",
      options: ["Den homogene løsningen Ce^{-∫p dx}, som bærer den frie konstanten C", "En bestemt løsning av den fulle likningen, helt uten noen fri konstant i seg", "Selve høyresida q(x) i likningen, som driver systemet vekk fra likevekt", "Produktet av den integrerende faktoren μ og den ukjente funksjonen y"],
      explanation: "y_h løser den tilhørende homogene likningen y'+py=0 og er Ce^{-∫p dx} med fri konstant. y_p er én partikulær løsning av den fulle likningen.",
    },
    {
      question: "Hva er løsningen av y'-2y=e^{2x} med y(0)=1?",
      options: ["y=(x+1)e^{2x}, der x-faktoren oppstår fordi e^{2x} selv er en homogen løsning", "y=e^{2x}+C, der man bare legger til en konstant bestemt av startbetingelsen", "y=e^{2x}-2x, ved å trekke fra det leddet som kommer fra venstresidas -2y", "y=(x-1)e^{2x}, med negativt konstantledd valgt for å oppfylle y(0)=1"],
      explanation: "μ=e^{-2x} gir (e^{-2x}y)'=1, altså e^{-2x}y=x+C og y=(x+C)e^{2x}. y(0)=C=1 gir y=(x+1)e^{2x}. x-faktoren skyldes at e^{2x} er homogen løsning.",
    },
    {
      question: "Hva sier Newtons avkjølingslov?",
      options: ["T'=-k(T-T_m): temperaturendringen er proporsjonal med avstanden til omgivelsene", "T'=-kT: temperaturen henfaller alltid mot null uansett omgivelsestemperaturen", "T'=k(T-T_m): temperaturen fjerner seg raskere fra omgivelsene jo varmere den er", "T'=-k·t: temperaturen synker med en fast rate proporsjonal med tiden som har gått"],
      explanation: "T'=-k(T-T_m): endringsraten er proporsjonal med differansen mellom legemet og omgivelsene T_m. Løsningen T=T_m+(T_0-T_m)e^{-kt} nærmer seg T_m.",
    },
    {
      question: "En kaffe på 90°C i et rom på 20°C er 70°C etter 5 min. Hva er T(t)?",
      options: ["T=20+70(5/7)^{t/5}, fordi u=T-20 gir u_0=70 og u(5)/u_0=50/70=5/7", "T=20+90(5/7)^{t/5}, ved å bruke starttemperaturen 90 direkte som faktor", "T=70(5/7)^{t/5}, uten omgivelsesleddet siden temperaturen går mot null til slutt", "T=20+70e^{-5t}, ved å sette måletiden 5 minutter rett inn som fast eksponent"],
      explanation: "Med u=T-20 er u_0=90-20=70 og u=70e^{-kt}. u(5)=50 gir e^{-5k}=50/70=5/7, så T=20+70(5/7)^{t/5}.",
    },
    {
      question: "I et blandingsproblem med godt blandet tank — hva er ut-raten for stoffet?",
      options: ["(volumstrøm ut)·(y/V), fordi konsentrasjonen i utløpet er lik y/V i tanken", "(volumstrøm ut)·y, altså volumstrømmen ganget med hele stoffmengden i tanken", "(volumstrøm inn)·(innkonsentrasjonen), som er den samme raten som strømmer inn", "y/V alene, uten volumstrømmen, siden konsentrasjonen bestemmer alt som forlater tanken"],
      explanation: "I en homogen tank er utløpskonsentrasjonen y/V. Ut-raten (mengde/tid) er derfor (volumstrøm ut)·(y/V). Enhetskontroll: (L/min)·(kg/L)=kg/min.",
    },
    {
      question: "En tank (100 L rent vann) får saltlake 2 kg/L inn med 5 L/min, ut 5 L/min. Likevekt for saltmengden?",
      options: ["200 kg, fordi likevektskonsentrasjonen blir lik innkonsentrasjonen 2 kg/L over 100 L", "100 kg, fordi tankvolumet er 100 L og likevekten alltid tilsvarer volumet i liter", "10 kg, fordi inn-raten er 2·5=10 kg/min og likevekten er lik denne raten", "50 kg, fordi halvparten av det som strømmer inn rekker å strømme ut igjen"],
      explanation: "Likningen er y'+y/20=10, med stasjonær løsning y_p=q/p=10/(1/20)=200 kg. Konsentrasjonen nærmer seg 200/100=2 kg/L, altså innkonsentrasjonen.",
    },
    {
      question: "Hva er en transient (forbigående) del av en løsning?",
      options: ["Den homogene delen Ce^{-∫p dx} som dør ut med tiden når ∫p vokser", "Den partikulære delen som representerer systemets varige likevektstilstand", "Kildeleddet q(x) på høyresida som driver systemet gjennom hele forløpet", "Den delen av svaret som inneholder den uavhengige variabelen i første potens"],
      explanation: "Den transiente delen er typisk y_h=Ce^{-∫p dx}, som forsvinner over tid (for stabile systemer). Igjen står den stasjonære (partikulære) delen.",
    },
    {
      question: "Når kan man løse en 1. ordens likning med integrerende faktor?",
      options: ["Når likningen er lineær, altså kan skrives på formen y'+p(x)y=q(x)", "Bare når koeffisienten p(x) er en konstant og ikke avhenger av variabelen x", "Når likningen inneholder et ledd med y i andre potens et sted på høyre side", "Alltid, uansett form, fordi metoden virker på enhver 1. ordens differensiallikning"],
      explanation: "Integrerende faktor virker på lineære likninger y'+p(x)y=q(x) — også med variabel p(x). Ikke-lineære likninger (f.eks. med y^2) krever andre metoder, typisk å skille de variable.",
    },
    {
      question: "Hva er løsningen av y'-y=x?",
      options: ["y=-x-1+Ce^{x}, funnet med μ=e^{-x} og delvis integrasjon av xe^{-x}", "y=x+1+Ce^{x}, med positivt konstantledd lest direkte av høyresida x", "y=x^2/2+Ce^{x}, ved å integrere høyresida x direkte til x^2/2", "y=-x-1+Ce^{-x}, med negativ eksponent i den homogene delen av løsningen"],
      explanation: "μ=e^{-x}; (e^{-x}y)'=xe^{-x}. Delvis integrasjon: ∫xe^{-x}dx=-(x+1)e^{-x}+C. Del på e^{-x}: y=-x-1+Ce^{x}. Homogen del har e^{+x} siden p=-1.",
    },
    {
      question: "Hvorfor trenger man ingen integrasjonskonstant i ∫p dx når man regner μ=e^{∫p dx}?",
      options: ["Fordi en ekstra konstant c gir faktoren e^{c}, som forkorter bort i (1/μ)∫μq dx", "Fordi integralet av p alltid er null når man integrerer over et lukket intervall", "Fordi konstanten i stedet legges til helt til slutt som den frie konstanten C", "Fordi p(x) per definisjon alltid har en antiderivert som er lik null i origo"],
      explanation: "En ekstra konstant c ville gitt μ=e^{c}·e^{∫p dx}. Faktoren e^{c} står da i både μ og 1/μ og forkorter bort, så enhver antiderivert av p duger.",
    },
  ],
  'tma4110-9-1': [
    {
      question: "Hva er den karakteristiske likningen til y''+py'+qy=0?",
      options: ["r^2+pr+q=0, funnet ved å sette prøveløsningen y=e^{rx} inn i differensiallikningen", "r^2+pr+q=1, der høyresida settes lik 1 fordi prøveløsningen alltid gir en konstant", "pr^2+qr+1=0, der koeffisientene bytter plass når man setter inn prøveløsningen y=e^{rx}", "r^2-pr-q=0, med motsatt fortegn på begge koeffisientene fra differensiallikningen"],
      explanation: "Prøveløsningen y=e^{rx} gir y'=re^{rx}, y''=r^2e^{rx}. Innsatt: (r^2+pr+q)e^{rx}=0, og siden e^{rx}≠0 må r^2+pr+q=0 med samme fortegn på p og q.",
    },
    {
      question: "Hvorfor virker prøveløsningen y=e^{rx} for likninger med konstante koeffisienter?",
      options: ["Fordi e^{rx} gjentar seg selv under derivasjon (y'=re^{rx}), så e^{rx} kan settes utenfor som felles faktor", "Fordi e^{rx} alltid er lik null i minst ett punkt, slik at differensiallikningen forenkles der", "Fordi e^{rx} er den eneste funksjonen som har en andrederivert lik seg selv uansett verdi av r", "Fordi konstante koeffisienter tvinger løsningen til å være et polynom som e^{rx} tilnærmer"],
      explanation: "e^{rx} og dens deriverte er alle konstanter ganger e^{rx}. Da faller e^{rx} ut som felles faktor og etterlater den rene tallikningen r^2+pr+q=0.",
    },
    {
      question: "Hva avgjør diskriminanten D=p^2-4q for likningen y''+py'+qy=0?",
      options: ["Hvilket av de tre tilfellene løsningen er: D>0 reelle ulike, D=0 dobbel, D<0 komplekse røtter", "Hvor mange frie konstanter løsningen har: D>0 gir tre, D=0 gir to, D<0 gir én konstant", "Om likningen er homogen: D>0 betyr homogen, mens D<0 betyr at et pådrag g(x) mangler", "Hvilken initialbetingelse som trengs: D>0 krever y(0), mens D<0 krever y'(0) i tillegg"],
      explanation: "Diskriminanten til andregradslikningen r^2+pr+q=0 skiller de tre løsningsformene: D>0 to reelle ulike røtter, D=0 dobbel rot, D<0 kompleks-konjugerte røtter.",
    },
    {
      question: "Den karakteristiske likningen har to reelle ulike røtter r1 og r2. Hva er løsningen?",
      options: ["y=C1 e^{r1 x}+C2 e^{r2 x}, en kombinasjon av de to uavhengige eksponentialløsningene", "y=C1 e^{r1 x}·C2 e^{r2 x}, et produkt av de to eksponentialene med hver sin konstant", "y=(C1+C2 x)e^{r1 x}, der begge røttene samles i én felles eksponentialfaktor med x-ledd", "y=e^{r1 x}(C1 cos r2 x+C2 sin r2 x), der den andre roten går inn som en frekvens"],
      explanation: "Ved reelle ulike røtter er e^{r1 x} og e^{r2 x} uavhengige løsninger, og superposisjon gir y=C1 e^{r1 x}+C2 e^{r2 x}.",
    },
    {
      question: "Hva er løsningen når den karakteristiske likningen har en dobbel rot r?",
      options: ["y=(C1+C2 x)e^{rx}, med en ekstra x-faktor på den andre uavhengige løsningen", "y=C1 e^{rx}, siden en dobbel rot bare gir én eksponentialløsning å bygge på", "y=C1 e^{rx}+C2 e^{-rx}, der den andre løsningen får motsatt fortegn i eksponenten", "y=e^{rx}(C1 cos x+C2 sin x), der dobbeltroten tolkes som en svingning med frekvens 1"],
      explanation: "En dobbel rot gir bare e^{rx} direkte; den andre uavhengige løsningen er xe^{rx}. Derfor y=(C1+C2 x)e^{rx} med to konstanter. Å glemme x-faktoren er en vanlig felle.",
    },
    {
      question: "Den karakteristiske likningen har røtter r=a±bi. Hva er den reelle løsningen?",
      options: ["y=e^{ax}(C1 cos bx+C2 sin bx), der a står i eksponenten og b i cosinus og sinus", "y=e^{bx}(C1 cos ax+C2 sin ax), der imaginærdelen b styrer veksten og a frekvensen", "y=C1 e^{ax}+C2 e^{bx}, der real- og imaginærdelen hver blir sin egen reelle eksponent", "y=e^{ax}(C1 cos bx+i C2 sin bx), der løsningen beholder en imaginær enhet i sinus-leddet"],
      explanation: "Røttene a±bi gir via Eulers formel de reelle grunnløsningene e^{ax}cos bx og e^{ax}sin bx. Realdelen a inn i eksponenten, imaginærdelen b inn i cos/sin. Sluttsvaret er reelt.",
    },
    {
      question: "Hvilken formel kobler de komplekse røttene til den reelle sin/cos-formen?",
      options: ["Eulers formel e^{iθ}=cos θ+i sin θ, som skriver e^{(a+bi)x} som e^{ax}(cos bx+i sin bx)", "De Moivres formel (cos θ+i sin θ)^n=cos nθ+i sin nθ, som opphøyer røttene til n-te potens", "Pytagoras' formel |z|=√(a^2+b^2), som gir modulusen til de komplekse røttene direkte", "Konjugatregelen z·z̄=a^2+b^2, som ganger de to konjugerte røttene sammen til et reelt tall"],
      explanation: "Eulers formel e^{iθ}=cos θ+i sin θ omgjør e^{(a±bi)x} til e^{ax}(cos bx±i sin bx). Real- og imaginærdel er de to reelle grunnløsningene.",
    },
    {
      question: "Løs y''+9y=0.",
      options: ["y=C1 cos 3x+C2 sin 3x, en udempet svingning fordi realdelen av røttene er null", "y=C1 e^{3x}+C2 e^{-3x}, med reelle røtter ±3 fra den karakteristiske likningen", "y=(C1+C2 x)e^{3x}, en dobbeltrot-løsning fordi 9 er et perfekt kvadrat", "y=C1 cos 9x+C2 sin 9x, der tallet 9 går rett inn som frekvens i cosinus og sinus"],
      explanation: "r^2+9=0 gir r=±3i, altså a=0, b=3. Løsningen er y=C1 cos 3x+C2 sin 3x (ingen eksponentialfaktor siden a=0).",
    },
    {
      question: "Hvor mange frie konstanter har den generelle løsningen av en 2. ordens homogen likning?",
      options: ["To (C1 og C2), fordi løsningsrommet er et vektorrom av dimensjon 2", "Én (C), fordi likningen har én ukjent funksjon som skal bestemmes fullstendig", "Tre (C1, C2, C3), én for hver av de tre mulige tilfellene av røtter i likningen", "Ingen, fordi de konstante koeffisientene p og q allerede fastlegger hele løsningen"],
      explanation: "Løsningsmengden er et vektorrom av dimensjon 2, spent ut av to uavhengige løsninger. Derfor nøyaktig to frie konstanter — én er en typisk felle ved dobbel rot.",
    },
    {
      question: "Hva er riktig rekkefølge når du løser et initialverdiproblem?",
      options: ["Finn generell løsning med C1, C2 først, deriver, og bestem så konstantene fra betingelsene", "Sett inn initialbetingelsene i den karakteristiske likningen før du finner røttene", "Bestem C1 fra y(0) med en gang, og løs deretter en ny likning for resten av løsningen", "Regn ut Wronski-determinanten først, og les av konstantene direkte fra verdien der"],
      explanation: "Riktig rekkefølge: generell løsning (med C1, C2) → deriver → sett inn y(x0) og y'(x0) → løs 2×2-systemet for konstantene. Aldri sett inn før generell løsning er klar.",
    },
    {
      question: "For y''-4y'+13y=0 med y(0)=1, y'(0)=0: hva blir løsningen?",
      options: ["y=e^{2x}(cos 3x-2/3 sin 3x), fra røttene 2±3i og de to initialbetingelsene", "y=e^{2x}(cos 3x+2/3 sin 3x), med positivt fortegn på sinus-leddet fra y'(0)=0", "y=e^{3x}(cos 2x-2/3 sin 2x), der realdelen 3 og imaginærdelen 2 bytter roller", "y=cos 3x-2/3 sin 3x, uten eksponentialfaktor fordi initialbetingelsen y(0)=1 fjerner den"],
      explanation: "Røtter 2±3i gir y=e^{2x}(C1 cos 3x+C2 sin 3x). y(0)=1⇒C1=1; y'(0)=2C1+3C2=0⇒C2=-2/3. Altså y=e^{2x}(cos 3x-2/3 sin 3x).",
    },
    {
      question: "Hva er superposisjonsprinsippet for en homogen lineær likning?",
      options: ["Er y1 og y2 løsninger, så er enhver kombinasjon C1 y1+C2 y2 også en løsning", "Er y1 og y2 løsninger, så er produktet y1·y2 alltid også en løsning av likningen", "Enhver løsning kan skrives som en homogen pluss en partikulær del med et pådrag", "To ulike løsninger må alltid krysse hverandre i minst ett felles initialpunkt"],
      explanation: "For den homogene likningen er en lineærkombinasjon av løsninger igjen en løsning. Dette gjør at C1 y1+C2 y2 dekker hele løsningsrommet. Gjelder ikke inhomogene likninger.",
    },
    {
      question: "Hva forteller Wronski-determinanten W(y1,y2)=y1 y2'-y2 y1'?",
      options: ["Om y1 og y2 er lineært uavhengige: W≠0 i et punkt betyr uavhengige løsninger", "Hvor mange røtter den karakteristiske likningen har i det komplekse planet", "Verdien av den partikulære løsningen y_p i initialpunktet x=0 for likningen", "Om diskriminanten er positiv, slik at man slipper å regne den ut på nytt"],
      explanation: "Er Wronski-determinanten forskjellig fra null i minst ett punkt, er y1 og y2 lineært uavhengige og danner et fundamentalt løsningssett.",
    },
    {
      question: "Hva er den vanligste feilen ved dobbel rot?",
      options: ["Å glemme x-faktoren og skrive C1 e^{rx} i stedet for (C1+C2 x)e^{rx}", "Å bruke komplekse tall selv om roten er reell og dobbel i dette tilfellet", "Å regne diskriminanten som positiv når den egentlig er negativ ved dobbel rot", "Å sette begge konstantene lik null fordi roten teller som to like løsninger"],
      explanation: "Ved dobbel rot er den andre uavhengige løsningen xe^{rx}. Glemmer man den, står man igjen med bare én konstant og har mistet halve det todimensjonale løsningsrommet.",
    },
    {
      question: "Finn den generelle løsningen av y''-y'-6y=0.",
      options: ["y=C1 e^{3x}+C2 e^{-2x}, fra de reelle ulike røttene 3 og -2", "y=C1 e^{-3x}+C2 e^{2x}, der begge røttene får byttet fortegn i eksponenten", "y=(C1+C2 x)e^{3x}, en dobbeltrot-løsning fordi røttene ligger nær hverandre", "y=e^{3x}(C1 cos 2x+C2 sin 2x), der den ene roten tolkes som en svingefrekvens"],
      explanation: "r^2-r-6=(r-3)(r+2)=0 gir r=3 og r=-2 (reelle ulike). Løsningen er y=C1 e^{3x}+C2 e^{-2x}.",
    },
    {
      question: "Hva menes med at løsningene danner et fundamentalt løsningssett?",
      options: ["At de er to lineært uavhengige løsninger, så enhver løsning er en kombinasjon av dem", "At de begge oppfyller den samme initialbetingelsen y(0)=1 i startpunktet", "At de er de eneste to løsningene likningen har, uten noen frie konstanter igjen", "At summen deres alltid er lik null, slik at de utligner hverandre i hvert punkt"],
      explanation: "Et fundamentalt løsningssett er et par lineært uavhengige løsninger. Da kan hver løsning skrives entydig som y=C1 y1+C2 y2 — de utgjør en basis for løsningsrommet.",
    },
    {
      question: "Hvordan skiller et randverdiproblem seg fra et initialverdiproblem?",
      options: ["Randverdiproblemet gir betingelser i to ulike punkter og kan ha 0, 1 eller uendelig mange løsninger", "Randverdiproblemet trenger bare én betingelse, mens initialverdiproblemet krever tre", "Randverdiproblemet gjelder bare komplekse røtter, initialverdiproblemet bare reelle", "Randverdiproblemet løses uten den karakteristiske likningen, kun med Wronski-determinanten"],
      explanation: "Et initialverdiproblem gir y og y' i ett punkt og har alltid nøyaktig én løsning. Et randverdiproblem gir betingelser i to punkter og kan ha ingen, én eller uendelig mange løsninger.",
    },
    {
      question: "Under kode E (ingen hjelpemidler): hvordan kontrollerer du en ODE-løsning?",
      options: ["Deriver løsningen to ganger, sett inn i y''+py'+qy og bekreft at alt kanselleres til null", "Slå opp svaret i en formelsamling og sammenlign med standardformen som står der", "Sett x=0 og sjekk kun at funksjonsverdien stemmer med initialbetingelsen y(0)", "Tegn grafen på kalkulator og se om den nærmer seg null når x blir stor nok"],
      explanation: "Under kode E finnes ingen kalkulator. Eneste feilsjekk er innsetting: deriver y to ganger, sett inn i venstresida, og bekreft at den blir 0 (homogent).",
    },
  ],
  'tma4110-9-2': [
    {
      question: "Hva er strukturen til den generelle løsningen av y''+py'+qy=g(x)?",
      options: ["y=y_h+y_p, den homogene løsningen pluss én partikulær løsning av den fulle likningen", "y=y_h·y_p, produktet av den homogene og den partikulære løsningen med hver sin konstant", "y=y_h-y_p, differansen der partikulærløsningen trekkes fra den homogene løsningen", "y=y_p alene, siden pådraget g(x) gjør den homogene delen overflødig i inhomogene fall"],
      explanation: "For en inhomogen lineær likning er den generelle løsningen y=y_h+y_p: y_h bærer de to frie konstantene, y_p er én bestemt løsning som matcher pådraget g(x).",
    },
    {
      question: "Hva er det første steget når du løser en inhomogen likning?",
      options: ["Løs den homogene likningen y''+py'+qy=0 for å finne y_h og røttene", "Sett inn initialbetingelsene i pådraget g(x) før noe annet gjøres i oppgaven", "Gjett en partikulær løsning y_p og sjekk om den tilfeldigvis passer med en gang", "Regn ut Wronski-determinanten til de to grunnløsningene i startpunktet x=0"],
      explanation: "Finn alltid y_h først: den inngår i sluttsvaret, og røttene avgjør om ansatsen for y_p har resonans. Uten y_h kan du ikke sjekke resonans.",
    },
    {
      question: "Hva er ideen bak metoden med ubestemte koeffisienter?",
      options: ["y_p har samme form som g(x), med ukjente konstanter som bestemmes ved innsetting", "y_p bygges opp av en uendelig rekke ledd som gradvis nærmer seg pådraget g(x)", "y_p finnes ved å integrere pådraget g(x) to ganger og legge til en konstant hver gang", "y_p er alltid lik g(x) selv, siden pådraget per definisjon løser den fulle likningen"],
      explanation: "Ubestemte koeffisienter: velg en ansats med samme form som g (polynom, eksponential, sin/cos) med ukjente konstanter, sett inn i likningen og løs for konstantene.",
    },
    {
      question: "Pådraget er g(x)=e^{3x} og røttene er r=1,2. Hvilken ansats bruker du for y_p?",
      options: ["y_p=A e^{3x}, siden α=3 ikke er en rot og det derfor ikke er resonans", "y_p=A x e^{3x}, fordi alle eksponentielle pådrag krever en ekstra x-faktor", "y_p=A e^{3x}+B e^{x}, der man tar med en homogen løsning i ansatsen også", "y_p=A cos 3x+B sin 3x, fordi eksponenten 3 tolkes som en svingefrekvens"],
      explanation: "α=3 er ikke rot (røttene er 1 og 2), så ingen resonans. Standardansatsen y_p=A e^{3x} brukes direkte, og A bestemmes ved innsetting.",
    },
    {
      question: "Hva er resonans i en inhomogen likning?",
      options: ["At pådraget g(x) selv er en løsning av den homogene likningen, så standardansatsen finnes i y_h", "At de to røttene i den karakteristiske likningen tilfeldigvis er like store", "At pådraget g(x) vokser raskere enn den homogene løsningen når x øker mot uendelig", "At initialbetingelsene y(0) og y'(0) begge er lik null i det samme startpunktet"],
      explanation: "Resonans betyr at g(x) er en homogen løsning. Da gir standardansatsen 0=g(x), umulig, og ansatsen må ganges med x^s.",
    },
    {
      question: "Hva sier resonansregelen?",
      options: ["Kolliderer ansatsen med y_h, gang hele ansatsen med x^s, der s er multiplisiteten til roten", "Kolliderer ansatsen med y_h, dropp den partikulære delen og bruk bare den homogene", "Kolliderer ansatsen med y_h, bytt fortegn på pådraget g(x) og prøv på nytt", "Kolliderer ansatsen med y_h, del ansatsen på x^s for å fjerne den doble løsningen"],
      explanation: "Ved resonans ganges ansatsen med x^s der s er multiplisiteten til den kolliderende roten: s=1 for enkel rot (gang med x), s=2 for dobbel rot (gang med x^2).",
    },
    {
      question: "Pådraget g(x)=e^{2x} og r=2 er en enkel rot. Hvilken ansats for y_p?",
      options: ["y_p=A x e^{2x}, fordi enkel rot gir resonans med multiplisitet s=1", "y_p=A e^{2x}, siden man alltid starter med den enkleste eksponentialansatsen", "y_p=A x^2 e^{2x}, fordi eksponentielle pådrag alltid trenger en x^2-faktor", "y_p=A e^{2x}+B x, der man legger til et lineært ledd for å bryte resonansen"],
      explanation: "α=2 er en enkel rot (s=1), så det er resonans. Standardansatsen A e^{2x} er i y_h; gang med x: y_p=A x e^{2x}.",
    },
    {
      question: "Pådraget g(x)=e^{-3x} og r=-3 er en dobbel rot. Hvilken ansats for y_p?",
      options: ["y_p=A x^2 e^{-3x}, fordi dobbel rot gir resonans med multiplisitet s=2", "y_p=A x e^{-3x}, siden én x-faktor alltid er nok til å bryte all resonans", "y_p=A e^{-3x}, fordi den doble roten allerede dekker begge løsningene selv", "y_p=A e^{-3x}+B x e^{-3x}, der man skriver ut begge de homogene leddene"],
      explanation: "α=-3 er dobbel rot (s=2), så både e^{-3x} og x e^{-3x} er i y_h. Gang med x^2: y_p=A x^2 e^{-3x}.",
    },
    {
      question: "Pådraget er g(x)=sin x. Hvilken ansats bruker du (uten resonans)?",
      options: ["y_p=A cos x+B sin x, med både cosinus og sinus selv om g bare har sinus", "y_p=B sin x, siden pådraget bare inneholder et sinus-ledd og ikke cosinus", "y_p=A e^{x}, fordi sinus kan skrives om til en eksponentialfunksjon via Euler", "y_p=A x sin x, fordi trigonometriske pådrag alltid krever en x-faktor foran"],
      explanation: "Ansatsen for sin x (eller cos x) må ha BEGGE ledd: A cos x+B sin x. Derivasjon bytter mellom dem, så begge trengs selv om g bare inneholder det ene.",
    },
    {
      question: "Når bestemmer du integrasjonskonstantene C1 og C2 i et initialverdiproblem?",
      options: ["Til slutt, etter at hele y=y_h+y_p er satt sammen, ved å sette inn y(x0) og y'(x0)", "Med en gang, rett etter at den homogene løsningen y_h er funnet, før y_p regnes", "Underveis, ett ledd om gangen mens du bygger opp den partikulære løsningen", "Aldri, siden konstantene forsvinner automatisk når pådraget g(x) settes inn"],
      explanation: "Konstantene bestemmes SIST: y_p bidrar også til y(x0) og y'(x0), så du må ha hele y=y_h+y_p klar før du setter inn initialbetingelsene.",
    },
    {
      question: "Hva er superposisjon for et sammensatt pådrag g=g1+g2?",
      options: ["Løs for hvert ledd hver for seg og legg sammen: y_p=y_{p1}+y_{p2}", "Velg det største av leddene g1 og g2 og ignorer det minste i ansatsen", "Gang de to partikulærløsningene sammen: y_p=y_{p1}·y_{p2} med felles konstant", "Bytt g1 og g2 med gjennomsnittet deres og løs for ett samlet pådrag"],
      explanation: "Superposisjon: er g=g1+g2, finn y_{p1} for g1 og y_{p2} for g2 hver for seg og legg dem sammen. Hvert pådrag driver sitt eget partikulære svar.",
    },
    {
      question: "Finn en partikulær løsning av y''-3y'+2y=x^2.",
      options: ["y_p=(1/2)x^2+(3/2)x+7/4, et fullstendig 2.-gradspolynom med alle ledd med", "y_p=(1/2)x^2, bare det høyeste leddet fordi pådraget kun har grad 2", "y_p=A x^2 der A bestemmes senere, siden lavere ledd ikke påvirker resultatet", "y_p=x^2+x+1, med koeffisienter lik 1 fordi pådraget har koeffisient 1 foran x^2"],
      explanation: "Ansats y_p=Ax^2+Bx+C (fullstendig). Innsetting og koeffisientsammenligning gir A=1/2, B=3/2, C=7/4. Alle lavere ledd må med — derivasjon blander gradene.",
    },
    {
      question: "Hvorfor trengs x-faktoren ved resonans (matematisk)?",
      options: ["Standardansatsen løser den homogene likningen og gir 0, så den kan aldri matche pådraget", "Fordi x-faktoren gjør at initialbetingelsene automatisk blir oppfylt i punktet x=0", "Fordi pådraget alltid inneholder en skjult x-faktor som ansatsen må speile", "Fordi den karakteristiske likningen får en ekstra rot når man ganger med x"],
      explanation: "Er α en rot, løser e^{αx} den homogene likningen, så A e^{αx} gir 0≠g. Ganger man med x, gir derivasjonen nye ledd som ikke kanselleres, og A x e^{αx} kan matche g.",
    },
    {
      question: "For hvilke pådrag g(x) svikter metoden med ubestemte koeffisienter?",
      options: ["For g som tan x, sec x eller 1/x — der trengs variasjon av parametere i stedet", "For g som er et vanlig polynom, siden polynomansatser ikke kan deriveres pent", "For g=e^{αx}, fordi eksponentialfunksjoner alltid krever en uendelig rekke ledd", "For alle g der pådraget er positivt, siden ansatsen da ikke kan bli negativ nok"],
      explanation: "Ubestemte koeffisienter virker for polynom/eksponential/sin/cos og produkter av disse. For tan x, sec x, 1/x o.l. svikter den, og man må bruke variasjon av parametere (kap. 9.3).",
    },
    {
      question: "Finn en partikulær løsning av y''+y=sin x (merk: resonans).",
      options: ["y_p=-(1/2)x cos x, med x-faktor fordi ±i er røtter i den karakteristiske likningen", "y_p=(1/2)sin x, en standard sinus-ansats uten noen ekstra x-faktor foran", "y_p=A cos x+B sin x uten x, siden pådraget sin x ikke gir resonans her", "y_p=(1/2)x sin x, med x-faktor men på sinus-leddet i stedet for cosinus"],
      explanation: "r^2+1=0 gir r=±i, så sin x er en homogen løsning — resonans (s=1). Ansats x(A cos x+B sin x); innsetting gir A=-1/2, B=0, altså y_p=-(1/2)x cos x.",
    },
    {
      question: "Hva er koeffisientsammenligning?",
      options: ["Å samle ledd av samme type etter innsetting og sette koeffisientene på hver side like", "Å sammenligne diskriminanten med koeffisienten q for å avgjøre antall røtter", "Å bytte ut alle koeffisienter i ansatsen med tallet 1 for å forenkle regningen", "Å måle hvor stor den partikulære løsningen er sammenlignet med den homogene"],
      explanation: "Etter innsetting samler du ledd av samme type (x^2, x, cos βx, e^{αx} …). Fordi disse er lineært uavhengige, må koeffisientene matche ledd for ledd — det gir likningene for konstantene.",
    },
    {
      question: "Hva er den dyreste feilen på 2. ordens-oppgaven ifølge sensorveiledningene?",
      options: ["Å glemme resonans-multiplikasjonen med x^s når ansatsen kolliderer med y_h", "Å regne den homogene løsningen y_h med feil fortegn på begge konstantene", "Å bruke for mange desimaler i sluttsvaret i stedet for å oppgi eksakte brøker", "Å skrive initialbetingelsene i feil rekkefølge når man setter opp systemet"],
      explanation: "Den dokumenterte fellen er å hoppe over resonans-multiplikasjonen: er g en homogen løsning, må ansatsen ganges med x^s, ellers gir innsetting 0≠g og oppgaven kollapser.",
    },
    {
      question: "Hva er komplementærfunksjonen?",
      options: ["Et annet navn på den homogene løsningen y_h i sammenheng med en inhomogen likning", "Navnet på den partikulære løsningen y_p som komplementerer initialbetingelsene", "Summen y_h+y_p når begge delene er ferdig bestemt med konstanter innsatt", "Pådraget g(x) sett fra høyresida, som utfyller venstresidas deriverte ledd"],
      explanation: "Komplementærfunksjonen er den homogene løsningen y_h. Den 'komplementerer' partikulærløsningen i y=y_h+y_p. Navnet dukker opp i sensorføring.",
    },
  ],
  'tma4110-9-3': [
    {
      question: "Hva måler Wronski-determinanten $W(y_1,y_2)$ for to løsninger av en homogen 2. ordens likning?",
      options: ["Om $y_1$ og $y_2$ er lineært uavhengige, altså om de utgjør et fundamentalt løsningssett", "Hvor stor amplituden til den sammensatte svingningen $y_1+y_2$ blir ved likevekt", "Den totale energien som er lagret i fjær-masse-systemet ved et gitt tidspunkt $t$", "Hvilken av de to funksjonene som vokser raskest når $t$ går mot uendelig"],
      explanation: "$W(y_1,y_2)=y_1y_2'-y_2y_1'$. Er $W\\ne0$ (på et intervall), er $y_1,y_2$ lineært uavhengige og danner et fundamentalt løsningssett, som gir hele $y_h=C_1y_1+C_2y_2$.",
    },
    {
      question: "Når er metoden variasjon av parametere spesielt nødvendig framfor ubestemte koeffisienter?",
      options: ["Når pådraget $g(x)$ ikke passer ansatstabellen, f.eks. $g(x)=\\tan x$ eller $\\sec x$", "Når den karakteristiske likningen har to reelle, ulike røtter av samme fortegn", "Når initialbetingelsene er gitt i et annet punkt enn $x=0$ i selve problemet", "Når høyresida er et rent polynom av lav grad uten trigonometriske ledd"],
      explanation: "Ubestemte koeffisienter krever at $g$ er polynom, eksponential, sinus/cosinus eller produkter av disse. For $g(x)=\\tan x$ finnes ingen slik ansats, og variasjon av parametere (som virker for enhver kontinuerlig $g$) må brukes.",
    },
    {
      question: "Et fritt udempet system $x''+\\omega_0^2x=0$ har karakteristisk likning $r^2+\\omega_0^2=0$. Hva slags løsning gir dette?",
      options: ["Ren harmonisk svingning $x=C_1\\cos\\omega_0t+C_2\\sin\\omega_0t$, fordi røttene er $r=\\pm i\\omega_0$", "Eksponentielt henfall $x=C_1e^{r_1t}+C_2e^{r_2t}$ mot likevekt uten noen svingning i det hele tatt", "En dobbeltrot-løsning på formen $x=(C_1+C_2t)e^{rt}$ med en ekstra $t$-faktor foran seg", "En løsning som vokser lineært i tid på grunn av en resonanskorreksjon $t\\sin\\omega_0t$"],
      explanation: "$r^2+\\omega_0^2=0$ gir rent imaginære røtter $r=\\pm i\\omega_0$. Da er den generelle løsningen den harmoniske svingningen $C_1\\cos\\omega_0t+C_2\\sin\\omega_0t$.",
    },
    {
      question: "For loddet $x''+4x=0$ med $x(0)=3$ og $x'(0)=8$: hva blir amplituden $A$ på formen $x=A\\cos(\\omega_0t-\\varphi)$?",
      options: ["$A=5$", "$A=11$, altså summen av de to startverdiene $3$ og $8$ lagt sammen direkte", "$A=\\sqrt{3}\\cdot\\sqrt{8}$, det geometriske gjennomsnittet av utslag og fart ved start", "$A=3$, siden amplituden alltid er lik startutslaget $x(0)$ uansett starthastighet"],
      explanation: "$\\omega_0=2$ gir $C_1=x(0)=3$ og $2C_2=x'(0)=8\\Rightarrow C_2=4$. Amplituden er $A=\\sqrt{C_1^2+C_2^2}=\\sqrt{9+16}=\\sqrt{25}=5$.",
    },
    {
      question: "Hva bestemmer hvilket av de tre dempingstilfellene et system $mx''+cx'+kx=0$ havner i?",
      options: ["Fortegnet til diskriminanten $c^2-4mk$ i den karakteristiske likningen $mr^2+cr+k=0$", "Fortegnet til drivkraften $F(t)$ på høyresida av den fullstendige svingningslikningen", "Om startutslaget $x(0)$ er positivt, negativt eller nøyaktig lik null ved tida $t=0$", "Størrelsen på egenfrekvensen $\\omega_0=\\sqrt{k/m}$ sammenlignet med det faste tallet $1$"],
      explanation: "Røttene er $r=\\dfrac{-c\\pm\\sqrt{c^2-4mk}}{2m}$. $c^2-4mk>0$ gir overkritisk, $=0$ kritisk, $<0$ underkritisk demping.",
    },
    {
      question: "Hva kjennetegner overkritisk demping ($c^2-4mk>0$)?",
      options: ["To reelle, ulike, negative røtter og en løsning $x=C_1e^{r_1t}+C_2e^{r_2t}$ helt uten svingning", "Kompleks-konjugerte røtter og en løsning som svinger med stadig avtakende amplitude mot null", "En dobbel reell rot og den aller raskest mulige returen til likevekt uten noe oversving", "Rent imaginære røtter og en svingning med helt konstant amplitude i all framtid framover"],
      explanation: "$c^2-4mk>0$ gir to reelle, ulike, negative røtter. Systemet kryper mot likevekt uten å svinge: $x=C_1e^{r_1t}+C_2e^{r_2t}$.",
    },
    {
      question: "Hva er den fysiske betydningen av kritisk demping ($c^2-4mk=0$)?",
      options: ["Raskeste retur til likevekt uten oversving; røttene er én dobbel reell rot $r=-c/2m$", "Den aller langsomste returen der systemet nesten står stille i lang tid før det beveger seg", "Grensen der svingningene akkurat begynner å vokse helt ubegrenset på grunn av resonans", "Tilfellet der dempingen er så svak at systemet svinger mange runder før det endelig stanser"],
      explanation: "$c^2-4mk=0$ gir dobbel reell rot $r=-c/2m$ og $x=(C_1+C_2t)e^{rt}$. Dette er akkurat grensen mot svingning — raskeste retur til likevekt uten oversving.",
    },
    {
      question: "Ved underkritisk demping svinger systemet med kvasifrekvensen $\\omega_d$. Hvordan forholder $\\omega_d$ seg til egenfrekvensen $\\omega_0$?",
      options: ["$\\omega_d<\\omega_0$ — dempingen gjør svingningen langsommere enn den udempede egenfrekvensen", "$\\omega_d>\\omega_0$ — dempingen tilfører energi og gjør svingningen raskere enn helt uten demping", "$\\omega_d=\\omega_0$ alltid — demping endrer bare amplituden, aldri selve frekvensen svingningen har", "$\\omega_d=2\\omega_0$ — kvasifrekvensen er nøyaktig det dobbelte av den naturlige egenfrekvensen"],
      explanation: "$\\omega_d=\\sqrt{k/m-c^2/4m^2}$ er alltid mindre enn $\\omega_0=\\sqrt{k/m}$: dempingen senker svingefrekvensen.",
    },
    {
      question: "Ved dempet tvungen svingning: hva skjer med den homogene delen $x_h$ over tid?",
      options: ["Den er transient og dør ut ($x_h\\to0$), fordi dempingen gir negativ realdel i røttene", "Den vokser helt ubegrenset og dominerer fullstendig hele løsningen når $t$ blir stor", "Den blir selve den stasjonære løsningen som svinger videre med drivfrekvensen $\\omega$", "Den forblir konstant lik startutslaget siden ingenting påvirker den homogene delen noe"],
      explanation: "Med demping har $x_h$ negativ realdel i eksponenten, så $x_h\\to0$ (transient). Det som svinger videre i det lange løp er den stasjonære partikulærløsningen $x_p$.",
    },
    {
      question: "Under hvilke betingelser oppstår (matematisk ubegrenset) resonans i svingningslikningen?",
      options: ["Udempet system ($c=0$) der drivfrekvensen $\\omega$ er lik egenfrekvensen $\\omega_0$", "Sterkt dempet system der drivfrekvensen er mye høyere enn systemets egen egenfrekvens", "Ethvert system med demping så snart det påtrykkes en ytre periodisk drivkraft utenfra", "Et fritt system uten drivkraft der startutslaget tilfeldigvis er svært stort ved start"],
      explanation: "Resonans krever $c=0$ (udempet) og $\\omega=\\omega_0$: drivkraften treffer systemets egen takt, og amplituden vokser uten grense.",
    },
    {
      question: "For resonanstilfellet $x''+\\omega_0^2x=F_0\\cos\\omega_0t$ gir resonansregelen partikulærløsningen. Hvilken form har den?",
      options: ["$x_p=\\dfrac{F_0}{2\\omega_0}\\,t\\sin\\omega_0t$ — en $t$-faktor gjør at utslaget vokser lineært med tida", "$x_p=\\dfrac{F_0}{\\omega_0^2}\\cos\\omega_0t$ — samme form som drivkraften, med helt konstant amplitude", "$x_p=F_0e^{-\\omega_0t}\\cos\\omega_0t$ — en dempet svingning som gradvis avtar mot null over tid", "$x_p=\\dfrac{F_0}{2}\\sin\\omega_0t$ — en ren sinus helt uten noen voksende faktor foran seg her"],
      explanation: "Fordi $\\cos\\omega_0t$ kolliderer med den homogene løsningen, ganges ansatsen med $t$: $x_p=\\dfrac{F_0}{2\\omega_0}t\\sin\\omega_0t$. $t$-faktoren gir lineært voksende amplitude.",
    },
    {
      question: "Vis resonans i $x''+4x=\\cos 2t$ med $x(0)=x'(0)=0$. Hva blir løsningen?",
      options: ["$x(t)=\\dfrac{1}{4}t\\sin 2t$", "$x(t)=\\dfrac{1}{4}\\cos 2t-\\dfrac{1}{4}$, altså en ren svingning uten noen voksende faktor i seg", "$x(t)=\\dfrac{1}{2}t^2\\cos 2t$, der amplituden vokser kvadratisk med tida i stedet for lineært", "$x(t)=\\sin 2t+\\cos 2t$, som er summen av de to grunnleggende harmoniske svingningene"],
      explanation: "$\\omega_0=2=\\omega$ gir resonans. $x_p=\\dfrac{F_0}{2\\omega_0}t\\sin2t=\\dfrac{1}{4}t\\sin2t$; startbetingelsene $x(0)=x'(0)=0$ gir $x_h=0$, så $x=\\tfrac14t\\sin2t$.",
    },
    {
      question: "Hva er den elektriske analogien til fjær-masse-systemet i en RLC-krets $LQ''+RQ'+\\frac{1}{C}Q=E(t)$?",
      options: ["Spole $L$ svarer til masse $m$, motstand $R$ til demping $c$, og $1/C$ til fjærstivheten $k$", "Motstand $R$ svarer til masse $m$, spole $L$ til demping $c$, og $C$ til selve fjærstivheten $k$", "Kondensator $C$ svarer til masse $m$, spole $L$ til drivkraften, og $R$ til det totale utslaget $x$", "Ladningen $Q$ svarer til farten $x'$, og strømmen $Q'$ svarer direkte til selve utslaget $x$ her"],
      explanation: "Samme likning: $L\\leftrightarrow m$ (treghet), $R\\leftrightarrow c$ (demping), $1/C\\leftrightarrow k$ (stivhet), $E(t)\\leftrightarrow F(t)$, og ladningen $Q\\leftrightarrow$ utslaget $x$.",
    },
    {
      question: "For en svingning $x(t)=A\\cos(\\omega t-\\varphi)$ er sammenhengen mellom periode $T$ og vinkelfrekvens $\\omega$:",
      options: ["$T=\\dfrac{2\\pi}{\\omega}$ — perioden er tida det tar for én hel svingning", "$T=\\dfrac{\\omega}{2\\pi}$ — perioden er antall svingninger systemet gjør per sekund", "$T=2\\pi\\omega$ — perioden vokser proporsjonalt med selve vinkelfrekvensen $\\omega$", "$T=\\dfrac{1}{\\omega^2}$ — perioden avtar med kvadratet av den samme vinkelfrekvensen"],
      explanation: "$T=\\dfrac{2\\pi}{\\omega}$ (tid per svingning), og frekvensen er $f=1/T=\\omega/2\\pi$ (svingninger per tidsenhet).",
    },
    {
      question: "Hvordan skrives $x=C_1\\cos\\omega_0t+C_2\\sin\\omega_0t$ om til amplitude-faseform $A\\cos(\\omega_0t-\\varphi)$?",
      options: ["$A=\\sqrt{C_1^2+C_2^2}$ og $\\tan\\varphi=\\dfrac{C_2}{C_1}$", "$A=C_1+C_2$ og $\\varphi=C_2/C_1$, altså summen og forholdet mellom de to konstantene", "$A=C_1\\cdot C_2$ og $\\tan\\varphi=C_1/C_2$, produktet og det inverse forholdet mellom dem", "$A=|C_1-C_2|$ og $\\varphi=\\arccos C_1$, differansen og arcus-cosinus av første konstant"],
      explanation: "Amplituden er $A=\\sqrt{C_1^2+C_2^2}$ og fasen bestemmes av $\\tan\\varphi=C_2/C_1$ (med riktig kvadrant fra fortegnene til $C_1,C_2$).",
    },
    {
      question: "Hva er dempingsforholdet $\\zeta$ på normalisert form $x''+2\\zeta\\omega_0x'+\\omega_0^2x=0$?",
      options: ["$\\zeta=\\dfrac{c}{2\\sqrt{mk}}$ — dimensjonsløst der $\\zeta<1$ er underkritisk og $\\zeta>1$ overkritisk", "$\\zeta=\\dfrac{k}{m}$ — forholdet mellom fjærstivhet og masse, altså kvadratet av egenfrekvensen", "$\\zeta=c^2-4mk$ — selve diskriminanten som avgjør fortegnet i den karakteristiske likningen", "$\\zeta=\\sqrt{k/m}$ — som er nøyaktig lik den udempede egenfrekvensen $\\omega_0$ til systemet"],
      explanation: "$\\zeta=\\dfrac{c}{2\\sqrt{mk}}$ er dimensjonsløst: $\\zeta<1$ underkritisk, $\\zeta=1$ kritisk, $\\zeta>1$ overkritisk demping.",
    },
  ],
  'tma4110-9-4': [
    {
      question: "Hva er første steg i løsningsoppskriften for $y''+py'+qy=g(x)$?",
      options: ["Finn den homogene løsningen $y_h$ fra karakteristisk likning $r^2+pr+q=0$", "Sett inn initialbetingelsene $y(0),y'(0)$ og bestem konstantene $C_1$ og $C_2$ helt i starten av utregningen", "Velg ansatsen for $y_p$ etter formen på $g(x)$ og gang med $x^s$", "Regn ut Wronski-determinanten til de to homogene løsningene"],
      explanation: "Oppskriften starter alltid med den homogene løsningen: sett opp karakteristisk likning, finn røttene, velg riktig av de tre tilfellene. Ansats, resonanssjekk og IVP kommer etterpå.",
    },
    {
      question: "Hvilken homogen løsningsform hører til en dobbel rot $r$?",
      options: ["$y_h=(C_1+C_2x)e^{rx}$", "$y_h=C_1e^{rx}+C_2e^{-rx}$", "$y_h=e^{rx}(C_1\\cos x+C_2\\sin x)$", "$y_h=C_1e^{rx}+C_2xe^{2rx}$"],
      explanation: "Dobbel rot gir bare én eksponential; det andre uavhengige leddet er $xe^{rx}$. Derfor $y_h=(C_1+C_2x)e^{rx}$ — glem ikke $x$-faktoren.",
    },
    {
      question: "Karakteristisk likning til $y''-3y'+2y=0$ er:",
      options: ["$r^2-3r+2=0$", "$r^2+3r+2=0$", "$r^2-3r-2=0$", "$2r^2-3r+1=0$"],
      explanation: "Bytt $y''\\to r^2$, $y'\\to r$, $y\\to 1$ med samme fortegn: $r^2-3r+2=0$. Fortegnsfeil her er en klassisk poengtapper.",
    },
    {
      question: "Når har en inhomogen likning resonans, slik at ansatsen må ganges med $x^s$?",
      options: ["Når standardansatsen for $y_p$ allerede er en løsning av den homogene likningen", "Når høyresida $g(x)$ er et polynom av høy grad", "Når initialbetingelsene $y(0)$ og $y'(0)$ begge er null", "Når karakteristisk likning har to komplekse røtter"],
      explanation: "Resonans betyr at ansatsen kolliderer med $y_h$ (eksponenten/frekvensen svarer til en rot). Da gir standardansatsen $0$, og man må gange med $x^s$ der $s$ er rotens multiplisitet.",
    },
    {
      question: "Ansatsen for $y_p$ ganges med $x^s$ ved resonans. Hva er $s$ når den kolliderende roten er dobbel?",
      options: ["$s=2$", "$s=1$", "$s=0$", "$s=3$"],
      explanation: "$s$ er multiplisiteten til den kolliderende roten: enkel rot gir $s=1$, dobbel rot gir $s=2$. For $y''-4y'+4y=e^{2x}$ (dobbel rot 2) blir ansatsen $Ax^2e^{2x}$.",
    },
    {
      question: "Når skal integrasjonskonstantene $C_1,C_2$ bestemmes fra initialbetingelsene?",
      options: ["Helt til slutt, fra den fullstendige løsningen $y=y_h+y_p$", "Rett etter at den homogene løsningen $y_h$ er funnet, før $y_p$", "Samtidig som ansatskoeffisientene i $y_p$ bestemmes", "Før den homogene løsningen, direkte fra karakteristisk likning"],
      explanation: "Initialbetingelsene skal på HELE løsningen $y=y_h+y_p$. Bestemmer du $C_1,C_2$ på $y_h$ alene (før $y_p$ er lagt til), blir svaret feil — en dokumentert felle.",
    },
    {
      question: "Hvilken ansats passer for høyresida $g(x)=\\sin\\beta x$?",
      options: ["$A\\cos\\beta x+B\\sin\\beta x$ (begge ledd)", "$B\\sin\\beta x$ (bare sinusleddet, siden høyresida $g$ jo ikke inneholder noe cosinusledd i det hele tatt)", "$Ae^{\\beta x}$", "$A\\beta x+B$"],
      explanation: "Selv om $g$ bare inneholder $\\sin\\beta x$, trengs begge ledd $A\\cos\\beta x+B\\sin\\beta x$, fordi derivasjon blander cosinus og sinus. En for kort ansats gir uløselige likninger.",
    },
    {
      question: "Hva er den generelle løsningen av $y''-5y'+6y=0$?",
      options: ["$y=C_1e^{2x}+C_2e^{3x}$", "$y=C_1e^{-2x}+C_2e^{-3x}$", "$y=(C_1+C_2x)e^{2x}$", "$y=e^{2x}(C_1\\cos 3x+C_2\\sin 3x)$"],
      explanation: "$r^2-5r+6=(r-2)(r-3)=0$ gir reelle ulike røtter $r=2,3$, så $y=C_1e^{2x}+C_2e^{3x}$.",
    },
    {
      question: "Hvordan behandler du en sammensatt høyreside $g=g_1+g_2$ med ubestemte koeffisienter?",
      options: ["Superposisjon: finn $y_{p1}$ for $g_1$ og $y_{p2}$ for $g_2$ hver for seg, legg sammen", "Gang $g_1$ og $g_2$ sammen og bruk én ansats for produktet", "Bruk bare leddet med høyest grad og se bort fra det andre", "Sett opp én felles ansats som er summen av ett polynom og én eksponential uansett"],
      explanation: "Superposisjonsprinsippet: løs for hver del hver for seg og adder. Resonanssjekk gjøres per ledd — det ene kan gi resonans uten at det andre gjør det.",
    },
    {
      question: "For $y''-3y'+2y=e^{2x}$: hvorfor er det resonans?",
      options: ["Fordi eksponenten $2$ er en rot i karakteristisk likning $r^2-3r+2=0$", "Fordi høyresida er en eksponential og ikke et polynom", "Fordi likningen mangler et rent førsteordensledd $y'$ på venstresida av likhetstegnet i oppgaven", "Fordi initialbetingelsene ikke er oppgitt i oppgaven"],
      explanation: "$r^2-3r+2=(r-1)(r-2)=0$ har roten $r=2$, som svarer til $e^{2x}$. Ansatsen $Ae^{2x}$ kolliderer med $y_h$, så den må ganges med $x$: $y_p=Axe^{2x}$.",
    },
    {
      question: "Hvilket dempingstilfelle gjelder for $x''+2x'+10x=0$?",
      options: ["Underkritisk (komplekse røtter $-1\\pm 3i$, døende svingning)", "Overkritisk (to reelle, ulike og negative røtter, altså ingen svingning i det hele tatt)", "Kritisk (dobbel reell rot, raskeste retur)", "Udempet (rene komplekse røtter, konstant amplitude)"],
      explanation: "Diskriminanten $c^2-4mk=4-40=-36<0$ gir komplekse røtter $-1\\pm 3i$ — underkritisk demping med en svingning som dempes av $e^{-t}$.",
    },
    {
      question: "Hva er partikulærløsningen $y_p$ til $y''-y=x^2$?",
      options: ["$y_p=-x^2-2$", "$y_p=x^2+2$", "$y_p=-x^2$", "$y_p=\\tfrac13 x^3$"],
      explanation: "Ansats $y_p=ax^2+bx+c$ gir $y_p''-y_p=2a-(ax^2+bx+c)=x^2$. Sammenligning: $a=-1$, $b=0$, $c=2a=-2$, altså $y_p=-x^2-2$.",
    },
    {
      question: "En udempet fjær-masse $x''+16x=\\cos 4t$ drives ved drivfrekvens 4. Hva skjer?",
      options: ["Resonans — drivfrekvens $=$ egenfrekvens $\\sqrt{16}=4$, amplituden vokser", "Ingen resonans — drivfrekvens og egenfrekvens er forskjellige", "Overkritisk demping — svingningen dør raskt ut", "Kritisk demping — systemet returnerer uten å svinge"],
      explanation: "Egenfrekvensen er $\\omega_0=\\sqrt{16}=4$, lik drivfrekvensen. Da er det resonans, og partikulærløsningen $\\tfrac{t}{8}\\sin 4t$ har voksende amplitude.",
    },
    {
      question: "Hvorfor må ansatsen for $y''-4y'+4y=e^{2x}$ ganges med $x^2$?",
      options: ["Fordi $r=2$ er en dobbel rot, så resonans-multiplisiteten er $s=2$", "Fordi høyresida er en eksponential med positiv eksponent", "Fordi karakteristisk likning har to distinkte reelle røtter", "Fordi likningen har konstante koeffisienter"],
      explanation: "$r^2-4r+4=(r-2)^2=0$ har $r=2$ som dobbel rot. Både $e^{2x}$ og $xe^{2x}$ er homogene løsninger, så ansatsen må opp til $x^2e^{2x}$ for å unngå kollisjon.",
    },
    {
      question: "Hva er den generelle løsningen av $y''+4y=\\sin x$?",
      options: ["$y=C_1\\cos 2x+C_2\\sin 2x+\\tfrac13\\sin x$", "$y=C_1\\cos 2x+C_2\\sin 2x-\\tfrac13\\sin x$", "$y=C_1e^{2x}+C_2e^{-2x}+\\tfrac13\\sin x$", "$y=(C_1+C_2x)\\cos 2x+\\tfrac13\\sin x$"],
      explanation: "Homogen: $r^2+4=0\\Rightarrow y_h=C_1\\cos 2x+C_2\\sin 2x$. Ansats $A\\cos x+B\\sin x$ (ingen resonans, $1\\ne 2$) gir $3B\\sin x=\\sin x$, så $B=\\tfrac13$, $A=0$.",
    },
    {
      question: "Hva er riktig rekkefølge når du løser et fullstendig initialverdiproblem $y''+py'+qy=g$, $y(0),y'(0)$ gitt?",
      options: ["Homogen → ansats → resonanssjekk → bestem koeffisienter → sett sammen $y=y_h+y_p$ → bruk IVP", "Bruk IVP → homogen → ansats → resonanssjekk → bestem koeffisienter", "Homogen → bruk IVP på $y_h$ → ansats for $y_p$ → legg til $y_p$", "Ansats → bestem koeffisienter → homogen → resonanssjekk → bruk IVP"],
      explanation: "IVP kommer helt til slutt, på den fullstendige løsningen $y=y_h+y_p$. Resonanssjekk gjøres i ansats-fasen (steg 3), konstantene bestemmes sist (steg 5).",
    },
  ],
};

export default quizData_tma4110;
