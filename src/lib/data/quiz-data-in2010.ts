import type { QuizQuestion } from './quiz-data';

const quizData_in2010: Record<string, QuizQuestion[]> = {
  'in2010-0-1': [
    {
      question: "Hvor lang er IN2010-eksamen, og hvilke hjelpemidler er tillatt?",
      options: ["Fire timer, ingen hjelpemidler tillatt", "Fire timer, med kalkulator og formelark", "Seks timer, ingen hjelpemidler tillatt", "Fire timer, med alle skrevne hjelpemidler"],
      explanation: "Eksamen er en digital firetimers skoleeksamen i Inspera uten hjelpemidler. Alternativene med hjelpemidler beskriver historiske former: settene fra forgjengeremnet INF2220 og korona-hjemmeeksamenen i 2020 tillot alle hjelpemidler, men speiler ikke dagens form.",
    },
    {
      question: "Hva består oppvarmingen på eksamen av, og hva er den verdt?",
      options: ["To spørsmål om hva en algoritme og en datastruktur er, verdt 2 poeng", "To små håndkjøringsoppgaver på en heap, verdt 2 poeng", "Ett spørsmål om kjøretiden til en kodesnutt, verdt 4 poeng", "Fire sant/usant-punkter om sortering, verdt 2 poeng"],
      explanation: "Oppvarmingen er to faste definisjonsspørsmål med maks fire setninger hver, og alle rimelige svar gir full uttelling. De andre alternativene beskriver oppgavetyper som hører hjemme på Del 1, ikke i oppvarmingen.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom Del 1 og Del 2 på settet?",
      options: ["Del 1 rettes automatisk uten delpoeng; Del 2 leses av sensor med delpoeng", "Del 1 leses av sensor med delpoeng; Del 2 rettes automatisk", "Del 1 handler om grafer, mens Del 2 handler om sortering", "Del 1 er valgfri, mens Del 2 er obligatorisk for å bestå"],
      explanation: "Del 1 er auto-rettede sant/usant og korte svar der svaret er riktig eller galt; Del 2 er større pseudokodeoppgaver med poengfordeling per delmoment. Temaene fordeler seg ikke etter del, og ingen av delene er valgfri.",
    },
    {
      question: "En sant/usant-blokk med 32 punkter skaleres med $2 \\cdot \\max(n-16,\\ 0)$. Hva gir 20 riktige?",
      options: ["8 poeng", "4 poeng", "20 poeng", "0 poeng"],
      explanation: "$2 \\cdot (20-16) = 8$. Alternativet 4 er svaret hvis du glemmer faktoren 2; 20 er antall riktige, ikke poengsummen; 0 gjelder ved 16 riktige eller færre.",
    },
    {
      question: "Hva er formålet med antigjettings-skaleringen på sant/usant-blokkene?",
      options: ["Å sørge for at ren gjetting i snitt gir null poeng", "Å gi ekstra minuspoeng for hvert feil svar", "Å belønne den som svarer på flest punkter", "Å gjøre blokken raskere å rette for sensor"],
      explanation: "Terskelen ligger på halvparten av punktene, som er nettopp hva myntkast gir i snitt. Blankt og feil teller likt i de dokumenterte formene, så det er ingen ekstra straff for feil svar, og antall besvarte punkter i seg selv gir ingen uttelling.",
    },
    {
      question: "Hva sier poengtrappen på en Del 2-oppgave?",
      options: ["Lavere kjøretid gir mer poeng på samme oppgave", "Lengre besvarelse gir mer poeng på samme oppgave", "Pseudokode gir alltid mer poeng enn en forklaring i ord", "Bare den raskest mulige løsningen gir uttelling"],
      explanation: "Sensorveiledningene sier eksplisitt at lavere kjøretidskompleksitet er mer poenggivende, med $O(n)$ over $O(n \\log n)$ over $O(n^2)$. En treg løsning gir fortsatt uttelling, lengde belønnes ikke, og en klar forklaring i ord kan gi like mye som pseudokode.",
    },
    {
      question: "Hvor mange av de sju IN2010-settene inneholder en oppgave om hashing med lineær probing?",
      options: ["7 av 7", "5 av 7", "3 av 7", "2 av 7"],
      explanation: "Hashing er en av seks 100 %-gjengangere, sammen med kjøretid fra kode, kjøretidsfakta, sortering, grafrepresentasjon og korteste vei. Temaer med 3 av 7 er blant annet komponentgrafen, balanserte trær og binærsøk.",
    },
    {
      question: "Hvilket av disse temaene er **ikke** IN2010-pensum?",
      options: ["Dynamisk programmering", "Hashing med lineær probing", "Topologisk sortering", "Huffman-koding"],
      explanation: "Dynamisk programmering er fraværende i moderne IN2010, sammen med maks-flyt, masterteoremet og alle-til-alle korteste vei. De tre andre er alle pensum, med frekvenser på henholdsvis 100 %, 71 % og ca. 64 %.",
    },
    {
      question: "Hvordan regnes kjøretiden ut i IN2010?",
      options: ["Ved å telle løkker og runder i koden", "Ved å sette opp og løse en rekurrensligning", "Ved å bruke masterteoremet på hver rekursjon", "Ved å måle kjøretiden i millisekunder"],
      explanation: "Kjøretidsforenkling gjøres ved løkketelling. Masterteoremet, rekurrensligninger og substitusjonsmetoden er ikke IN2010-pensum, og asymptotisk analyse handler uansett om vekst, ikke om målt tid.",
    },
    {
      question: "Hva menes med at en oppgave er en «håndkjøring»?",
      options: ["Du utfører operasjonene steg for steg og oppgir sluttilstanden", "Du skriver pseudokoden for algoritmen og oppgir kjøretiden", "Du sammenligner to strategier og konkluderer med hvilken som er best", "Du forklarer med egne ord hva en datastruktur er"],
      explanation: "Håndkjøring er å utføre for eksempel innsettinger i en heap og levere strukturen slik den ser ut til slutt. De tre andre alternativene beskriver pseudokodeoppgaver, drøftingsoppgaver og oppvarmingen.",
    },
    {
      question: "Hva krever sensor om kjøretiden du oppgir på en Del 2-oppgave?",
      options: ["At den matcher algoritmen du faktisk skrev, og at $n$ er definert", "At den er den lavest mulige, uansett hva du skrev", "At den er oppgitt med både $O$, $\\Omega$ og $\\Theta$", "At den er utledet med en rekurrensligning"],
      explanation: "Det trekkes for manglende kjøretid, for feil kjøretid og for å bruke $n$ uten å definere det. Du må oppgi kjøretiden til din egen løsning, ikke til den beste mulige, og IN2010 bruker nesten utelukkende $O$.",
    },
    {
      question: "Hva er den riktige beskrivelsen av eksamen høsten 2020?",
      options: ["Hjemmeeksamen med alle hjelpemidler, ikke representativ for formen", "Skoleeksamen uten hjelpemidler, som alle de andre settene", "Muntlig eksamen med kontrollsamtale i stedet for skriftlig sett", "Eksamen med krav om Java-kode i stedet for pseudokode"],
      explanation: "Høsten 2020 var korona-hjemmeeksamen med alle hjelpemidler, og formen speiler ikke ordinær eksamen. Java-kravet hører til forgjengeremnet INF2220 i 2015 til 2017, ikke til 2020.",
    },
    {
      question: "Hva er en sensorveiledning, og hva gjør den nyttig i dette faget?",
      options: ["Sensorenes dokument med løsningsforslag og poengfordeling per delmoment", "En samling ekte studentbesvarelser fra tidligere eksamener", "En offisiell statistikk over karakterfordelingen i emnet", "Emnebeskrivelsen med læringsmål og pensumliste"],
      explanation: "IN2010 har offisielle sensorveiledninger for alle sju settene, og de oppgir hvordan poengene fordeles per delmoment. Verken studentbesvarelser eller karakterstatistikk inngår i grunnlaget for denne boka.",
    },
    {
      question: "Hva kjennetegner de siste én til to oppgavene på Del 2?",
      options: ["De er åpen grafmodellering der toppkarakterene skilles", "De er korte faktaspørsmål som gir gratispoeng", "De er håndkjøringer av en heap eller en hashtabell", "De er alltid om kompleksitetsteori og klassene P og NP"],
      explanation: "Oppgavene på Del 2 stiger i vanskelighet, og de siste er nesten alltid en historie som skal oversettes til en graf og en pensumalgoritme. Håndkjøringer og faktaspørsmål ligger på Del 1, og kompleksitetsteori er lavfrekvent.",
    },
  ],
  'in2010-1-1': [
    {
      question: "Hva betyr det at $f(n) = O(g(n))$?",
      options: ["Det finnes en konstant $c$ og en terskel $n_0$ med $f(n) \\leq c \\cdot g(n)$ for $n \\geq n_0$", "Det finnes en konstant $c$ og en terskel $n_0$ med $f(n) \\geq c \\cdot g(n)$ for $n \\geq n_0$", "Det gjelder at $f(n) = c \\cdot g(n)$ for en fast konstant $c$ og alle $n$", "Det gjelder at $f(n) \\leq g(n)$ for hver eneste verdi av $n$"],
      explanation: "$O$ er en øvre grense med rom for både en konstant faktor og en terskel. Ulikheten motsatt vei definerer $\\Omega$; kravet om likhet eller om at det skal gjelde for alle $n$, er strengere enn definisjonen.",
    },
    {
      question: "Hva er det strammeste $O$-uttrykket for $5n^2 + 300n + 40$?",
      options: ["$O(n^2)$", "$O(n^3)$", "$O(n)$", "$O(5n^2)$"],
      explanation: "Det dominerende leddet er $5n^2$, og konstantfaktoren strykes. $O(n^3)$ er en gyldig, men slapp, øvre grense; $O(n)$ er for lavt; og $O(5n^2)$ har riktig orden på feil form.",
    },
    {
      question: "Hvilken av disse rekkefølgene er vekstordningen, fra saktest til raskest voksende?",
      options: ["$\\log n$, $n$, $n \\log n$, $n^2$, $2^n$, $n!$", "$\\log n$, $n$, $n^2$, $n \\log n$, $n!$, $2^n$", "$n$, $\\log n$, $n \\log n$, $n^2$, $2^n$, $n!$", "$\\log n$, $n \\log n$, $n$, $n^2$, $2^n$, $n!$"],
      explanation: "Standardordningen er $1 < \\log n < n < n\\log n < n^2 < n^3 < 2^n < n!$. De tre andre bytter om enten $n \\log n$ og $n^2$, eller $\\log n$ og $n$, eller $2^n$ og $n!$.",
    },
    {
      question: "Er utsagnet «en $O(n \\log n)$-algoritme bruker alltid færre grunnsteg enn en $O(n^2)$-algoritme» sant eller usant?",
      options: ["Usant — $O$ gjelder først for store nok $n$, og konstanter kan snu bildet", "Sant — lavere $O$-klasse betyr færre grunnsteg på enhver input", "Sant — men bare når begge algoritmene er implementert på samme maskin", "Usant — fordi $n \\log n$ i virkeligheten vokser raskere enn $n^2$"],
      explanation: "Skjulte konstanter kan gjøre den asymptotisk bedre algoritmen tregere på små input; grensen gjelder først fra en terskel $n_0$. Maskinen er irrelevant, og $n \\log n$ vokser saktere enn $n^2$, ikke raskere.",
    },
    {
      question: "Hva er forskjellen på $O(g)$ og $\\Theta(g)$?",
      options: ["$O$ er bare øvre grense, mens $\\Theta$ er både øvre og nedre grense", "$O$ er bare nedre grense, mens $\\Theta$ er både øvre og nedre grense", "$O$ gjelder verste tilfelle, mens $\\Theta$ gjelder forventet tilfelle", "$O$ brukes om algoritmer, mens $\\Theta$ brukes om datastrukturer"],
      explanation: "$\\Theta(g)$ krever at funksjonen både er $O(g)$ og $\\Omega(g)$. Nedre grense alene er $\\Omega$, og skillet mellom verste og forventet tilfelle er et annet skille enn skillet mellom notasjonene.",
    },
    {
      question: "Er $3n + 7 = O(n^2)$?",
      options: ["Ja, men det er en slapp grense — det strammeste svaret er $O(n)$", "Nei, fordi $3n + 7$ vokser saktere enn $n^2$", "Ja, og det er også det strammeste mulige svaret på uttrykket", "Nei, fordi konstantleddet 7 må være med i uttrykket"],
      explanation: "En øvre grense kan alltid gjøres slappere, så påstanden er sann — men eksamen ber om det strammeste uttrykket, som er $O(n)$. At funksjonen vokser saktere, er nettopp grunnen til at grensen holder.",
    },
    {
      question: "Hvilken notasjon bruker IN2010 nesten utelukkende i oppgavetekster og fasiter?",
      options: ["$O$", "$\\Theta$", "$\\Omega$", "$o$ og $\\omega$"],
      explanation: "IN2010 svarer med $O$; $\\Omega$ og $\\Theta$ nevnes kort i emnebeskrivelsen, men brukes knapt i oppgavene. Lille $o$ og lille $\\omega$ forekommer ikke i faget i det hele tatt.",
    },
    {
      question: "En algoritme bruker alltid nøyaktig 12 grunnsteg, uansett inputstørrelse. Hva er kjøretiden?",
      options: ["$O(1)$", "$O(12)$", "$O(n)$", "$O(\\log n)$"],
      explanation: "Konstant tid skrives $O(1)$ — konstanten selv skrives aldri inn i uttrykket. $O(n)$ og $O(\\log n)$ er gyldige, men unødvendig slappe øvre grenser.",
    },
    {
      question: "Hva betyr det å si at en analyse er asymptotisk?",
      options: ["At den beskriver oppførselen når $n$ blir stor", "At den beskriver oppførselen for små verdier av $n$", "At den måler kjøretiden i sekunder på en bestemt maskin", "At den gjelder bare for rekursive algoritmer"],
      explanation: "Asymptotisk analyse handler om vekst i det lange løp, uavhengig av maskin og av hva som skjer på små input. Målt tid i sekunder er ikke asymptotisk analyse, og analysen gjelder alle algoritmer, ikke bare rekursive.",
    },
    {
      question: "Hvilket uttrykk vokser raskest av $n^{10}$ og $2^n$?",
      options: ["$2^n$, fordi eksponentiell vekst passerer enhver polynomfunksjon", "$n^{10}$, fordi eksponenten 10 er større enn grunntallet 2", "De vokser like raskt, fordi begge har $n$ i eksponenten", "$n^{10}$, fordi $2^n$ er begrenset oppad av en konstant"],
      explanation: "Vekstordningen plasserer $2^n$ til høyre for enhver $n^k$. At eksponenten er stor, forsinker bare krysningspunktet; den snur ikke rekkefølgen. $2^n$ er ikke begrenset oppad.",
    },
    {
      question: "Hva sier $\\Omega(g(n))$ om en funksjon?",
      options: ["At funksjonen vokser minst så raskt som $g$, altså en nedre grense", "At funksjonen vokser høyst så raskt som $g$, altså en øvre grense", "At funksjonen vokser nøyaktig som $g$, både opp og ned", "At funksjonen vokser strengt saktere enn $g$ for alle $n$"],
      explanation: "$\\Omega$ er nedre grense, med ulikheten $f(n) \\geq c \\cdot g(n)$ for store nok $n$. Øvre grense er $O$, tett grense er $\\Theta$, og «strengt saktere» er lille $o$, som ikke brukes i IN2010.",
    },
    {
      question: "Hva er det strammeste $O$-uttrykket for $n^2 \\log n + n^2$?",
      options: ["$O(n^2 \\log n)$", "$O(n^2)$", "$O(n^3)$", "$O(n \\log n)$"],
      explanation: "$n^2 \\log n$ er $n^2$ ganget med $\\log n$, som er større enn 1 for $n > 2$, så det første leddet dominerer. $O(n^2)$ er for lavt, $O(n^3)$ er slapt, og $O(n \\log n)$ mangler en faktor $n$.",
    },
    {
      question: "Hvorfor er binærsøk $O(\\log n)$ i et sortert array?",
      options: ["Fordi hvert steg kaster halvparten av det som er igjen å søke i", "Fordi hvert steg kaster ett element av det som er igjen å søke i", "Fordi det må lese alle elementene én gang før det kan svare", "Fordi arrayet må sorteres først, og sortering er $O(n \\log n)$"],
      explanation: "Antall halveringer fra $n$ ned til 1 er $\\log_2 n$. Å kaste ett element om gangen gir $O(n)$, og å lese alt gir også $O(n)$; sorteringen er en egen kostnad og inngår ikke i søket.",
    },
    {
      question: "Hva menes med «verste tilfelle» i en kjøretidsanalyse?",
      options: ["Den lengste kjøretiden over alle input av størrelse $n$", "Den gjennomsnittlige kjøretiden over alle input av størrelse $n$", "Kjøretiden på den største inputen algoritmen kan håndtere", "Kjøretiden når maskinen er mest belastet av andre programmer"],
      explanation: "Verste tilfelle er maksimum over inputene av samme størrelse, og det er standardsvaret når en oppgave ikke presiserer noe annet. Gjennomsnittet er forventet tilfelle, og maskinbelastning inngår ikke i asymptotisk analyse.",
    },
    {
      question: "Hva er kjøretiden for å sjekke om et array med $n$ elementer er sortert?",
      options: ["$O(n)$, fordi det holder å sammenligne hvert nabopar én gang", "$O(n \\log n)$, fordi arrayet må sorteres for å kunne sammenlignes", "$O(n^2)$, fordi hvert element må sammenlignes med alle de andre", "$O(\\log n)$, fordi det holder å sjekke midtpunktet"],
      explanation: "Én gjennomgang av naboparene avgjør spørsmålet med $n-1$ sammenligninger. Ingenting skal sorteres, alle par trengs ikke, og et enkelt midtpunkt avslører ikke en usortert nabo lenger ute.",
    },
    {
      question: "En algoritme er $\\Omega(n^2)$. Kan den samtidig være $O(n)$?",
      options: ["Nei, fordi $n^2$ ikke kan holdes under en fast faktor ganger $n$", "Ja, fordi $O$ og $\\Omega$ beskriver uavhengige egenskaper", "Ja, hvis konstanten $c$ velges stor nok i $O$-definisjonen", "Nei, fordi $\\Omega$ og $O$ aldri kan brukes om samme funksjon"],
      explanation: "De to grensene ville krevd at $n^2$ ligger under $c \\cdot n$ for store $n$, og ingen fast $c$ klarer det. $O$ og $\\Omega$ kan godt brukes om samme funksjon — det er nettopp det $\\Theta$ betyr.",
    },
    {
      question: "Hvorfor skrives $f(n) = O(g(n))$ med likhetstegn i IN2010?",
      options: ["Det er en fast konvensjon; tegnet leses «er» og går bare én vei", "Fordi de to sidene er nøyaktig like store for alle $n$", "Fordi $O(g(n))$ er en funksjon, ikke en mengde av funksjoner", "Fordi $f$ og $g$ må ha samme konstantfaktor for at det skal gjelde"],
      explanation: "Strengt tatt er $O(g)$ en mengde, og det korrekte ville vært «tilhører» — men likhetstegnet er en gammel konvensjon i faget. Det går ikke begge veier: $O(n) = 3n+7$ er meningsløst.",
    },
    {
      question: "Hva er det strammeste $O$-uttrykket for $n + n + n + n$?",
      options: ["$O(n)$", "$O(n^4)$", "$O(4n)$", "$O(n^2)$"],
      explanation: "Fire lineære ledd lagt sammen er $4n$, og faktoren 4 er en konstant. Eksponenten hadde blitt 4 om leddene var ganget sammen, ikke lagt sammen, og $O(4n)$ er riktig orden på feil form.",
    },
  ],
  'in2010-1-2': [
    {
      question: "En løkke `for i = 0 to n-1` har inni seg en løkke `for j = 0 to n-1`. Hva er kjøretiden?",
      options: ["$O(n^2)$", "$O(n)$", "$O(n \\log n)$", "$O(2n)$"],
      explanation: "Nøstede løkker ganges: $n \\cdot n$. Hadde de stått etter hverandre i stedet, ville summen gitt $O(n)$; verken en logaritmisk faktor eller formen $O(2n)$ hører hjemme her.",
    },
    {
      question: "En løkke `for i = 0 to n-1` har inni seg en løkke `for j = 0 to 49`. Hva er kjøretiden?",
      options: ["$O(n)$, fordi den indre løkka går et fast antall runder", "$O(n^2)$, fordi de to løkkene er nøstet inni hverandre", "$O(50n)$, fordi den indre løkka går 50 runder hver gang", "$O(n \\log n)$, fordi den indre løkka begrenser den ytre"],
      explanation: "Grensen 49 inneholder ikke $n$, så den indre løkka bidrar bare med en konstant faktor. Nøsting gir $O(n^2)$ først når begge løkkene vokser med $n$, og konstanten skal ikke stå i uttrykket.",
    },
    {
      question: "Hvor mange runder går løkka `j = 1; while j < n: j = j * 2`?",
      options: ["Ca. $\\log_2 n$", "Ca. $n/2$", "Ca. $n$", "Ca. $n \\log n$"],
      explanation: "Tellevariabelen dobler seg, så antall runder er antall doblinger fra 1 opp til $n$. Halvparten av $n$ ville vært svaret hvis oppdateringen var `j = j + 2`, altså additiv.",
    },
    {
      question: "To løkker som hver går over $n$ elementer står **etter** hverandre. Hva er kjøretiden?",
      options: ["$O(n)$, fordi sekvens legges sammen og konstanten forsvinner", "$O(n^2)$, fordi de to løkkene begge går over $n$ elementer", "$O(2n)$, fordi det blir nøyaktig dobbelt så mange runder", "$O(n \\log n)$, fordi den ene løkka fortsetter der den andre slapp"],
      explanation: "Sumregelen gir $n + n = 2n$, og faktoren 2 er en konstant. Nøsting hadde gitt $O(n^2)$, og konstanten skal aldri stå i det ferdige uttrykket.",
    },
    {
      question: "Hva er kjøretiden til `for i = 0 to n-1: for j = i to n-1: c = c + 1`?",
      options: ["$O(n^2)$, fordi trekantsummen er $n(n+1)/2$", "$O(n)$, fordi den indre løkka blir kortere for hver runde", "$O(n \\log n)$, fordi den indre løkka halveres underveis", "$O(n^2/2)$, fordi bare halvparten av parene besøkes"],
      explanation: "Trekantsummen $n + (n-1) + \\cdots + 1$ er $n(n+1)/2$, som er $O(n^2)$. At den indre løkka krymper, halverer arbeidet, men halvparten er en konstant faktor og skrives ikke i uttrykket.",
    },
    {
      question: "Hva er kjøretiden til en ytre løkke over $n$ med en indre halveringsløkke `m = n; while m > 1: m = m / 2`?",
      options: ["$O(n \\log n)$", "$O(n^2)$", "$O(n)$", "$O(\\log n)$"],
      explanation: "Den ytre gir $n$ runder og den indre ca. $\\log_2 n$, og de er nøstet. $O(n^2)$ er svaret hvis du overser halveringen; $O(\\log n)$ mangler den ytre løkka.",
    },
    {
      question: "Hvilken oppdatering i en løkke gir en logaritmisk faktor?",
      options: ["`j = j * 2`", "`j = j + 2`", "`j = j + 1`", "`j = j - 1`"],
      explanation: "En multiplikativ oppdatering gir ca. $\\log n$ runder. Additive oppdateringer gir $n$, $n/2$ eller $n/3$ runder — alle $O(n)$, uansett hvor stort steget er.",
    },
    {
      question: "Hva er kjøretiden til `i = 0; while i < n * n: i = i + 1`?",
      options: ["$O(n^2)$", "$O(n)$", "$O(n \\log n)$", "$O(\\log n)$"],
      explanation: "Grensen er $n^2$ og steget er 1, så løkka går $n^2$ runder. Det er antall runder som avgjør, ikke antall løkker: én løkke kan godt være kvadratisk.",
    },
    {
      question: "Fem løkker over $n$ er nøstet inni hverandre. Hva er kjøretiden?",
      options: ["$O(n^5)$", "$O(5n)$", "$O(n^{25})$", "$O(n \\log n)$"],
      explanation: "Produktregelen ganger antall runder: $n$ opphøyd i antall nøstede nivåer. Summen $5n$ ville vært svaret hvis løkkene sto etter hverandre.",
    },
    {
      question: "Én blokk er $O(n^2)$ og en annen blokk rett etter er $O(n)$. Hva er kjøretiden til de to til sammen?",
      options: ["$O(n^2)$", "$O(n^3)$", "$O(n)$", "$O(n^2 + n)$"],
      explanation: "Sumregelen beholder det dominerende leddet. Å gange dem sammen ville gitt $O(n^3)$ og forutsatt nøsting, og $O(n^2+n)$ er riktig regnet, men feil form.",
    },
    {
      question: "En linje inni en løkke over $n$ kaller en prosedyre med kjøretid $O(\\log n)$. Hva er kjøretiden til løkka?",
      options: ["$O(n \\log n)$", "$O(n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "En linje som kaller en prosedyre arver dens kjøretid, så hver av de $n$ rundene koster $O(\\log n)$. Å behandle kallet som $O(1)$ er en av de vanligste kildene til at et svar bommer med en hel faktor.",
    },
    {
      question: "Hva er kjøretiden til en rekursiv prosedyre der hvert kall gjør **to** nye kall med argumentet redusert med 1?",
      options: ["$O(2^n)$", "$O(n^2)$", "$O(n \\log n)$", "$O(n)$"],
      explanation: "Antall kall dobles for hvert nivå nedover $n$ nivåer, så totalen blir $2^{n+1}-1$ kall. Ett kall per nivå ville gitt $O(n)$, og halvering av argumentet ville gitt $O(\\log n)$ nivåer.",
    },
    {
      question: "Hvilken metode brukes i IN2010 til å analysere kjøretiden til en rekursiv prosedyre?",
      options: ["Å telle antall kall og arbeidet per kall", "Å sette opp en rekurrensligning og løse den", "Å slå opp kjøretiden i en tabell over kjente algoritmer", "Å måle kjøretiden empirisk for økende $n$"],
      explanation: "Analysen er ren telling: hvor mange kall blir det, og hva koster hvert kall. Rekurrensligninger og de generelle teoremene for å løse dem er ikke IN2010-pensum, og empirisk måling er ikke asymptotisk analyse.",
    },
    {
      question: "Hva er kjøretiden til `for i = 0 to n-1: for j = 0 to n-1: for k = 0 to 4: c = c + 1`?",
      options: ["$O(n^2)$", "$O(n^3)$", "$O(n)$", "$O(5n^2)$"],
      explanation: "De to ytterste løkkene vokser med $n$, mens den innerste går fem runder uansett. Tre nøstede løkker er kubisk bare når alle tre går over $n$.",
    },
    {
      question: "Hva skjer med antall kjøringer når $n$ dobles, hvis kjøretiden er $O(n^2)$?",
      options: ["Det firedobles", "Det dobles", "Det åttedobles", "Det øker med én"],
      explanation: "Kvadrering av inputen gir kvadrering av vekstfaktoren: $(2n)^2 = 4n^2$. Dobling svarer til $O(n)$, åttedobling til $O(n^3)$, og ett steg til svarer til $O(\\log n)$.",
    },
    {
      question: "En løkke `while i < n: i = i + 3` — hvor mange runder går den, og hva er $O$-klassen?",
      options: ["Ca. $n/3$ runder, altså $O(n)$", "Ca. $n/3$ runder, altså $O(n/3)$", "Ca. $\\log_3 n$ runder, altså $O(\\log n)$", "Ca. $3n$ runder, altså $O(n)$"],
      explanation: "Et additivt steg på 3 gir en tredel så mange runder, men konstanten $1/3$ forsvinner i $O$. En logaritmisk faktor krever at tellevariabelen ganges eller deles, ikke at den økes.",
    },
    {
      question: "Hva er kjøretiden til to nøstede doblingsløkker, `i = 1; while i < n: (j = 1; while j < n: ...; j = j*2); i = i*2`?",
      options: ["$O((\\log n)^2)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Begge løkkene går ca. $\\log_2 n$ runder, og de er nøstet, så rundene ganges. Svaret inneholder ikke $n$ i det hele tatt — et sjeldent, men lærerikt tilfelle.",
    },
    {
      question: "Hva er den korrekte formen på et svar i sjanger B — kjøretid fra kode?",
      options: ["Ett strammest mulig uttrykk uten konstanter, med $n$ definert", "Et uttrykk med alle leddene og konstantene bevart", "Et intervall mellom beste og verste tilfelle", "Et tall som anslår antall grunnsteg for en typisk $n$"],
      explanation: "Sensor ber om ett forenklet uttrykk, og det trekkes for et udefinert $n$. Et usimplifisert uttrykk som $O(8n^2+n)$ er riktig telling og feil form, og et konkret antall grunnsteg er ikke et $O$-svar.",
    },
  ],
  'in2010-1-3': [
    {
      question: "`i = 0; while i < n: i = i + 2` — hva er kjøretiden?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(n/2)$", "$O(n^2)$"],
      explanation: "Steget 2 halverer antall runder, men $1/2$ er en konstant og forsvinner. En logaritmisk faktor krever multiplikativ oppdatering, og konstanten skal ikke stå i uttrykket.",
    },
    {
      question: "En ytre løkke over $n$ med en indre løkke `for j = 0 to 999` — hva er kjøretiden?",
      options: ["$O(n)$", "$O(n^2)$", "$O(1000n)$", "$O(n \\log n)$"],
      explanation: "Tusen er stort, men fortsatt en konstant, siden grensen ikke inneholder $n$. Nøsting gir kvadratisk kjøretid bare når begge løkkene vokser med inputen.",
    },
    {
      question: "`i = n; while i > 1: (for j = 0 to 4: ...); i = i / 2` — hva er kjøretiden?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(5 \\log n)$"],
      explanation: "Den ytre halverer og gir ca. $\\log_2 n$ runder; den indre går fem runder uansett. En nøstet struktur er ikke automatisk lineær eller kvadratisk — det avhenger av rundene.",
    },
    {
      question: "`for i = 0 to n-1: (j = 0; while j < n / 2: ...; j = j + 1)` — hva er kjøretiden?",
      options: ["$O(n^2)$", "$O(n)$", "$O(n \\log n)$", "$O(n^2/2)$"],
      explanation: "Grensen `n / 2` inneholder $n$ og er derfor ikke konstant: den indre løkka går $n/2$ runder, altså $O(n)$. Nøstet med den ytre gir det $n^2/2$, og konstanten strykes.",
    },
    {
      question: "`for i = 0 to n-1: for j = 0 to i-1: for k = 0 to j-1: c = c + 1` — hva er kjøretiden?",
      options: ["$O(n^3)$", "$O(n^2)$", "$O(n^3/6)$", "$O(n \\log n)$"],
      explanation: "Den innerste linja kjører én gang per trippel $k < j < i$, og det er $n(n-1)(n-2)/6$ slike. Konstanten $1/6$ krymper arbeidet, men ordenen følger antall nivåer.",
    },
    {
      question: "En doblingsløkke står **foran** to nøstede løkker over $n$. Hva er kjøretiden til blokkene til sammen?",
      options: ["$O(n^2)$", "$O(n^2 \\log n)$", "$O(n \\log n)$", "$O(\\log n)$"],
      explanation: "Blokkene står etter hverandre, så kjøretidene legges sammen og det dominerende leddet overlever. Ganging hadde forutsatt nøsting, og det gir $O(n^2 \\log n)$.",
    },
    {
      question: "`for i = 0 to n-1: (j = 1; while j < n: ...; j = j * 3)` — hva er kjøretiden?",
      options: ["$O(n \\log n)$", "$O(n \\log_3 n)$", "$O(n)$", "$O(n^2)$"],
      explanation: "Den indre tredobler og går ca. $\\log_3 n$ runder, men grunntallet er en konstant faktor og skrives aldri i et $O$-uttrykk. Utelates logaritmen helt, blir svaret for lavt.",
    },
    {
      question: "En løkke over $n$ kaller `BinærSøk` på et sortert array i hver runde. Hva er kjøretiden?",
      options: ["$O(n \\log n)$", "$O(n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Kallet arver binærsøkets $O(\\log n)$, og det gjentas $n$ ganger. Å behandle kallet som en enkelt operasjon gir $O(n)$ og bommer med en hel faktor.",
    },
    {
      question: "Hva sier doblingstesten hvis antall kjøringer åttedobles når $n$ dobles?",
      options: ["Kjøretiden er $O(n^3)$", "Kjøretiden er $O(n^2)$", "Kjøretiden er $O(2^n)$", "Kjøretiden er $O(n \\log n)$"],
      explanation: "$(2n)^3 = 8n^3$, så åttedobling svarer til kubisk vekst. Firedobling svarer til $O(n^2)$, og eksponentiell vekst ville kvadrert antall kjøringer, ikke åttedoblet det.",
    },
    {
      question: "`for a`, `for b`, `for d`, `for e`, `for f`, alle `= 0 to n-1` og alle nøstet — hva er kjøretiden?",
      options: ["$O(n^5)$", "$O(n^4)$", "$O(5n)$", "$O(n^6)$"],
      explanation: "Fem nøstede løkker over $n$ gir $n$ opphøyd i fem. Summen $5n$ forutsetter at løkkene står etter hverandre, ikke inni hverandre.",
    },
    {
      question: "En doblende ytre løkke gjentar en trekantløkke over $n$. Hva er kjøretiden?",
      options: ["$O(n^2 \\log n)$", "$O(n^2)$", "$O(n^3)$", "$O(n \\log n)$"],
      explanation: "Trekanten er $O(n^2)$, og den gjentas ca. $\\log_2 n$ ganger. Doblingstesten viser et forholdstall mellom 4 og 8, som er akkurat der $n^2 \\log n$ hører hjemme.",
    },
    {
      question: "En blokk med kjøretid $O(n \\log n)$ står foran en blokk med kjøretid $O(n^2)$. Hva blir totalen?",
      options: ["$O(n^2)$", "$O(n^3 \\log n)$", "$O(n \\log n)$", "$O(n^2 \\log n)$"],
      explanation: "Sekvens legges sammen, og vekstordningen gir $n \\log n < n^2$. De to andre høye svarene forutsetter at blokkene var nøstet, altså at den ene lå inni den andre.",
    },
    {
      question: "En rekursiv prosedyre gjør ett nytt kall med argumentet **halvert**. Hva er kjøretiden?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(2^n)$"],
      explanation: "Argumentkjeden $n$, $n/2$, $n/4$ ned til 1 har ca. $\\log_2 n$ ledd, og hvert kall gjør konstant arbeid. Ett kall med argumentet redusert med 1 ville gitt $O(n)$, og to kall per nivå $O(2^n)$.",
    },
    {
      question: "En rekursiv prosedyre gjør ett nytt kall med argumentet redusert med 1. Hva er kjøretiden?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(n^2)$", "$O(2^n)$"],
      explanation: "Kjeden $n$, $n-1$, $n-2$ ned til 0 gir $n$ kall med konstant arbeid hver. Halvering av argumentet ville gitt $O(\\log n)$, og to kall per nivå eksponentiell vekst.",
    },
    {
      question: "Hva er det første steget i løsningsoppskriften for sjanger B?",
      options: ["Å markere hver løkke og finne rekkevidden dens", "Å skrive ned det $O$-uttrykket snutten minner mest om", "Å telle hvor mange løkker det er i snutten", "Å sjekke om koden ville kompilert uten feil"],
      explanation: "Rekkevidden — går løkka til $n$, til et fast tall, eller ganger den seg? — avgjør alt annet. Antall løkker sier ingenting alene, og orden gir poeng selv om koden har en syntaksfeil.",
    },
    {
      question: "Hvorfor gir en oppgave uttelling selv om pseudokoden i snutten har en syntaksfeil?",
      options: ["Fordi sensor vurderer ordenen du oppgir, ikke om koden ville kjørt", "Fordi syntaksfeil alltid rettes opp automatisk før sensuren", "Fordi oppgaven da tas ut av vurderingen for alle kandidater", "Fordi kandidaten får velge en annen oppgave i stedet"],
      explanation: "Sensorveiledningene sier eksplisitt at riktig orden gir poeng uavhengig av syntaksfeil i snutten. Uklare oppgaver kan riktignok tas ut av vurderingen, men det er noe annet enn en syntaksfeil i koden.",
    },
    {
      question: "`for i = 0 to n-1: for j = 0 to n-1: for k = 0 to 7: c = c + 1` — hva sier doblingstesten?",
      options: ["Antall kjøringer firedobles, som svarer til $O(n^2)$", "Antall kjøringer åttedobles, som svarer til $O(n^3)$", "Antall kjøringer dobles, som svarer til $O(n)$", "Antall kjøringer øker med åtte, som svarer til $O(\\log n)$"],
      explanation: "Bare de to ytterste løkkene vokser med $n$, så kjøretiden er kvadratisk og antall kjøringer firedobles. Den innerste går åtte runder uansett og bidrar bare med en konstant.",
    },
    {
      question: "Hva er kjøretiden til `for i = 0 to n-1: for j = 0 to i-1: for k = 0 to 2: c = c + 1`?",
      options: ["$O(n^2)$", "$O(n^3)$", "$O(n)$", "$O(3n^2)$"],
      explanation: "De to ytterste danner en trekant med $n(n-1)/2$ runder, og den innerste går tre runder uansett. Tre nøstede løkker gir kubisk kjøretid bare når alle tre vokser med $n$.",
    },
    {
      question: "Hvilket av disse svarene har riktig **form** for en sjanger B-oppgave?",
      options: ["$O(n^2)$, der $n$ er antall elementer i arrayet", "$O(3n^2 + 2n + 1)$, der $n$ er antall elementer i arrayet", "Omtrent $n^2$ operasjoner for en typisk input", "Mellom $O(n)$ og $O(n^2)$, avhengig av dataene"],
      explanation: "Svaret skal være ett strammest mulig uttrykk uten konstanter, med $n$ definert. Et usimplifisert uttrykk er riktig telling og feil form, og verken et anslag eller et intervall er et $O$-svar.",
    },
    {
      question: "Hva bør du gjøre først når en snutt har tre blokker etter hverandre?",
      options: ["Analysere hver blokk for seg og legge sammen til slutt", "Gange sammen kjøretidene til de tre blokkene", "Se bare på den første blokken, siden den kjører først", "Telle det totale antallet løkker i alle tre blokkene"],
      explanation: "Sekvens analyseres blokk for blokk, og sumregelen beholder den verste. Ganging forutsetter nøsting, og hvilken blokk som kjører først, er uten betydning for kjøretiden.",
    },
  ],
  'in2010-1-4': [
    {
      question: "Hva er kjøretiden for å bygge en heap fra et vilkårlig array med $n$ elementer?",
      options: ["$O(n)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Bygger du nedenfra og opp, flytter halvparten av nodene seg ikke i det hele tatt og en firedel høyst ett nivå, så summen blir lineær. $O(n \\log n)$ er svaret hvis du regner $n$ separate innsettinger, og det er den vanligste distraktoren i faget.",
    },
    {
      question: "Hva koster det å finne det **største** elementet i en min-heap med $n$ elementer?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(1)$", "$O(n \\log n)$"],
      explanation: "Det største er et blad, men ordningen sier ikke hvilket, så alle de omtrent $n/2$ bladene må sjekkes. $O(\\log n)$ er den faste distraktoren, og $O(1)$ gjelder det **minste** elementet.",
    },
    {
      question: "Hva er kjøretiden til kvikksortering i verste tilfelle?",
      options: ["$O(n^2)$", "$O(n \\log n)$", "$O(n)$", "$O(\\log n)$"],
      explanation: "Treffer pivoten ytterst hver gang, blir det $n$ nivåer og kvadratisk kjøretid. $O(n \\log n)$ er det forventede tilfellet, og forvekslingen av de to er et fast sant/usant-punkt.",
    },
    {
      question: "Er utsagnet «flettesortering er $O(n \\log n)$ også i verste tilfelle» sant eller usant?",
      options: ["Sant — splittingen gir $\\log n$ nivåer uansett hvordan inputen ser ut", "Usant — i verste tilfelle blir flettesortering $O(n^2)$", "Usant — $O(n \\log n)$ gjelder bare når arrayet er tilnærmet sortert", "Sant — men bare fordi flettesortering er in-place"],
      explanation: "Flettesortering har ingen dårlig input: nivåene er $\\log_2 n$ uansett, og hvert nivå fletter $n$ elementer. Det er kvikksortering som har $O(n^2)$ i verste tilfelle, og flettesortering er ikke in-place.",
    },
    {
      question: "Hvorfor er binærsøk raskere på et array enn på en lenket liste?",
      options: ["Fordi et array gir direkte tilgang til midten i konstant tid", "Fordi en lenket liste ikke kan sorteres i det hele tatt", "Fordi et array bruker mindre minne per element enn en lenket liste", "Fordi binærsøk krever at elementene ligger sammenhengende i minnet"],
      explanation: "Halveringen forutsetter at du kan hoppe til et vilkårlig element i $O(1)$; i en lenket liste koster hvert slikt hopp $O(n)$. En lenket liste kan godt sorteres, og minnebruk er ikke det avgjørende.",
    },
    {
      question: "Hva er kjøretiden for å sette inn et element i en heap med $n$ elementer?",
      options: ["$O(\\log n)$ i verste tilfelle", "$O(1)$ i verste tilfelle", "$O(n)$ i verste tilfelle", "$O(n \\log n)$ i verste tilfelle"],
      explanation: "Elementet bobler oppover høyst så mange nivåer som treet er høyt, og høyden er $\\lfloor \\log_2 n \\rfloor$. Konstant tid gjelder å **lese** det minste elementet, ikke å sette inn.",
    },
    {
      question: "Blir en min-heap til en max-heap hvis du reverserer arrayet?",
      options: ["Nei, fordi forelder-barn-relasjonene bestemmes av indeksene, ikke av innholdet", "Ja, fordi ordningen mellom alle elementene blir snudd", "Ja, men bare hvis antall elementer er en toerpotens", "Nei, fordi en heap ikke kan lagres i et array i det hele tatt"],
      explanation: "Formlene $\\lfloor (i-1)/2 \\rfloor$, $2i+1$ og $2i+2$ peker på nye elementer etter reverseringen, og ordningskravet gjelder ingen vei. En heap lagres nettopp i et array, uten pekere.",
    },
    {
      question: "Hva sier heap-egenskapen i en min-heap?",
      options: ["Hver node er mindre enn eller lik begge barna sine", "Hver node er mindre enn alt i venstre subtre og større enn alt i høyre", "Venstre barn er alltid mindre enn høyre barn", "Elementene ligger sortert stigende i arrayet"],
      explanation: "Ordningen går opp-ned, mellom forelder og barn, og sier ingenting om søsken. Venstre-høyre-ordningen er søketre-egenskapen, og et heap-array er ikke sortert.",
    },
    {
      question: "Hvor i en min-heap ligger det minste elementet, og hva koster det å lese det?",
      options: ["I roten, og det koster $O(1)$", "I roten, og det koster $O(\\log n)$", "I et blad, og det koster $O(n)$", "Lengst til venstre på nederste nivå, og det koster $O(\\log n)$"],
      explanation: "Ordningskravet gjelder hele veien ned, så ingen node kan være mindre enn roten, og roten ligger på indeks 0. Det er å **fjerne** det minste som koster $O(\\log n)$.",
    },
    {
      question: "Hvor stor andel av elementene i en heap ligger på det nederste nivået?",
      options: ["Over halvparten", "Omtrent en firedel", "Omtrent en tidel", "Nøyaktig halvparten"],
      explanation: "Nivå $d$ har $2^d$ noder, mens alle nivåene over til sammen har $2^d - 1$ — altså ett færre. Det er nettopp derfor det er billig å bygge en heap nedenfra og opp.",
    },
    {
      question: "Kan et balansert søketre brukes som prioritetskø?",
      options: ["Ja, med samme kjøretidsorden som en heap på begge operasjoner", "Nei, fordi et søketre ikke har noe minste element", "Ja, men innsetting blir $O(n)$ i stedet for $O(\\log n)$", "Nei, fordi et søketre ikke kan holde høyden lav"],
      explanation: "Høyden er $O(\\log n)$, det minste elementet ligger lengst til venstre, og innsetting følger én sti nedover — begge operasjoner er $O(\\log n)$. Heapen vinner bare på konstantfaktorer og minnebruk.",
    },
    {
      question: "Hvilken påstand om klassene $P$ og $NP$ er sann?",
      options: ["$P \\subseteq NP$", "$NP \\subseteq P$", "Det er bevist at $P = NP$", "Det er bevist at $P \\neq NP$"],
      explanation: "Kan du løse et problem raskt, kan du også kontrollere et foreslått svar raskt, så alt i $P$ ligger i $NP$. Motsatt inklusjon er nettopp det åpne spørsmålet, og ingen av de to bevisspåstandene holder.",
    },
    {
      question: "Hva betyr $A \\leq_p B$?",
      options: ["At $A$ kan reduseres til $B$, og at $B$ er minst like vanskelig som $A$", "At $A$ kan reduseres til $B$, og at $A$ er minst like vanskelig som $B$", "At $A$ og $B$ er nøyaktig like vanskelige problemer", "At $A$ har lavere kjøretid enn $B$ på samme input"],
      explanation: "Kan du løse $B$ raskt, kan du løse $A$ raskt, så $B$ er den vanskeligste. Å snu retningen er en dokumentert felle: skal du vise at et problem er vanskelig, reduserer du **fra** et kjent vanskelig problem.",
    },
    {
      question: "Hva skjer hvis noen finner en polynomisk algoritme for ett NP-komplett problem?",
      options: ["Da er $P = NP$, fordi alle problemer i $NP$ kan reduseres til det", "Da er $P \\neq NP$, fordi problemet viste seg å være lett", "Da gjelder det bare for det ene problemet, og ingenting mer følger", "Da må alle andre NP-komplette problemer også løses hver for seg"],
      explanation: "Definisjonen av NP-komplett sier at alle problemer i $NP$ kan reduseres polynomisk til det, så én rask løsning gir raske løsninger på alle. Nettopp derfor er dette et av fagets store åpne spørsmål.",
    },
    {
      question: "Hva står forkortelsen $NP$ for?",
      options: ["Ikke-deterministisk polynomisk", "Ikke-polynomisk", "Nesten polynomisk", "Nødvendigvis polynomisk"],
      explanation: "Navnet villeder mange: klassen defineres ved at et foreslått ja-svar kan **kontrolleres** i polynomisk tid, ikke ved at problemet er umulig å løse raskt. $P$ ligger dessuten inne i $NP$.",
    },
    {
      question: "Hva er et sertifikat i sammenheng med klassen $NP$?",
      options: ["Et foreslått svar som en verifikator kan kontrollere raskt", "Et bevis for at problemet ikke kan løses i polynomisk tid", "En algoritme som løser problemet i polynomisk tid", "En attest på at algoritmen er korrekt implementert"],
      explanation: "Sertifikatet er selve forslaget — for eksempel en konkret rundtur — og verifikatoren er prosedyren som sjekker det. En polynomisk verifikator er nettopp kravet for at problemet skal ligge i $NP$.",
    },
    {
      question: "Er utsagnet «alle avgjørelsesproblemer ligger enten i $P$ eller i $NP$» sant eller usant?",
      options: ["Usant — det finnes problemer utenfor $NP$, også helt uavgjørbare", "Sant — de to klassene dekker alle avgjørelsesproblemer til sammen", "Sant — fordi $P \\subseteq NP$ og $NP$ dekker resten", "Usant — fordi $P$ og $NP$ ikke overlapper i det hele tatt"],
      explanation: "Klassene dekker ikke alt: noen problemer har ingen rask verifikator, og noen kan ingen algoritme avgjøre. At $P \\subseteq NP$ er sant, men det utvider ikke $NP$ til å omfatte alle problemer.",
    },
    {
      question: "Er flettesortering in-place?",
      options: ["Nei, den bruker $O(n)$ ekstra minne til flettingen", "Ja, den klarer seg med konstant ekstra minne", "Ja, men bare når arrayet har et partall antall elementer", "Nei, den bruker $O(n \\log n)$ ekstra minne til flettingen"],
      explanation: "Flettingen trenger et hjelpearray på $O(n)$. Heapsortering og kvikksortering er in-place, og det er nettopp derfor de ofte foretrekkes i praksis selv om flettesortering har bedre garanti.",
    },
    {
      question: "Hva er kjøretiden for å fjerne det minste elementet fra en min-heap?",
      options: ["$O(\\log n)$", "$O(1)$", "$O(n)$", "$O(n \\log n)$"],
      explanation: "Siste element flyttes opp i roten og synker ned på plass gjennom høyst $\\log_2 n$ nivåer. $O(1)$ gjelder å **lese** det minste uten å fjerne det.",
    },
    {
      question: "En sant/usant-blokk har 18 punkter og skaleres med $2 \\cdot \\max(n-9,\\ 0)$. Hva gir 12 riktige?",
      options: ["6 poeng", "3 poeng", "12 poeng", "0 poeng"],
      explanation: "$2 \\cdot (12-9) = 6$. Alternativet 3 er svaret hvis du glemmer faktoren 2; 12 er antall riktige; og 0 gjelder ved 9 riktige eller færre.",
    },
    {
      question: "Hvorfor ligger terskelen i en antigjettings-skalering på halvparten av punktene?",
      options: ["Fordi ren gjetting i snitt treffer halvparten av punktene", "Fordi halvparten av påstandene alltid er usanne", "Fordi sensor bare rekker å rette halvparten av blokken", "Fordi kandidaten bare trenger halvparten riktig for å bestå"],
      explanation: "Myntkast på et sant/usant-punkt treffer med sannsynlighet en halv, så terskelen er satt der en ren gjetter i snitt lander. Fordelingen mellom sanne og usanne påstander varierer fra sett til sett.",
    },
    {
      question: "Hva er kjøretiden for heapsortering, altså å bygge en heap og deretter hente ut minste element $n$ ganger?",
      options: ["$O(n \\log n)$", "$O(n)$", "$O(n^2)$", "$O(\\log n)$"],
      explanation: "Byggingen koster $O(n)$ og de $n$ uthentingene $O(\\log n)$ hver, så det dominerende leddet er $n \\log n$. At byggingen alene er lineær, gjør ikke hele sorteringen lineær.",
    },
    {
      question: "Er utsagnet «en algoritme med kjøretid $O(n)$ kan ikke ha kjøretid $O(n^2)$» sant eller usant?",
      options: ["Usant — en øvre grense kan alltid gjøres slappere", "Sant — en algoritme har nøyaktig én kjøretidsklasse", "Sant — $O(n)$ og $O(n^2)$ utelukker hverandre", "Usant — fordi enhver algoritme også er $\\Theta(n^2)$"],
      explanation: "Alt som er $O(n)$ er også $O(n^2)$, siden $n \\leq n^2$; det er bare et mindre informativt svar. Det er $\\Theta$ som er entydig, og en $O(n)$-algoritme er ikke $\\Theta(n^2)$.",
    },
    {
      question: "Hva er den beste måten å øke poengsummen din på en skalert sant/usant-blokk?",
      options: ["Å flytte flere påstander fra «tror jeg» til «vet sikkert»", "Å svare bare på de påstandene du er helt sikker på", "Å svare det motsatte av det som virker mest opplagt", "Å bruke lengre tid på hver enkelt påstand under eksamen"],
      explanation: "Poengsummen er i praksis antall sikre svar minus terskelen, ganget med to, så kunnskap er den eneste variabelen du kan påvirke. Å la punkter stå blanke hjelper ikke, siden blankt og feil teller likt.",
    },
  ],
  'in2010-2-1': [
    {
      question: "Etter 3 fullførte iterasjoner av boblesortering på et array med 10 elementer — hva er garantert?",
      options: ["De 3 største elementene ligger på endelig plass, helt til høyre", "De 3 minste elementene ligger på endelig plass, helt til venstre", "De 3 første elementene er sortert innbyrdes, men ikke endelig", "De 3 største elementene er funnet, men ikke plassert ennå"],
      explanation: "Bobleinvarianten låser de $i$ største helt til høyre etter $i$ runder. Alternativet med de minste til venstre er utvalgssorteringens invariant, og alternativet om innbyrdes sortering er innsettingssorteringens — begge er nære distraktorer nettopp fordi de tre invariantene er så like i formen.",
    },
    {
      question: "Etter 4 fullførte iterasjoner av innsettingssortering — hva gjelder for de 5 første elementene?",
      options: ["De er sortert innbyrdes, men ikke nødvendigvis endelig plassert", "De er sortert innbyrdes og står på sine endelige plasser", "De er de 5 minste elementene i arrayet, endelig plassert", "De er de 5 største elementene, flyttet mot venstre ende"],
      explanation: "Innsettingssortering utvider et sortert prefiks med ett element per runde, så etter $i$ runder er de $i+1$ første sortert innbyrdes. Et element som kommer senere kan forskyve hele prefikset, så ingenting er endelig plassert. At prefikset er «endelig» er den vanligste feilen på sjanger D.",
    },
    {
      question: "Hvilken av de tre kvadratiske sorteringene er IKKE stabil?",
      options: ["Utvalgssortering", "Boblesortering", "Innsettingssortering", "Boblesortering med tidlig stopp"],
      explanation: "Utvalgssortering bytter minsteelementet over lang avstand og kan hoppe forbi en lik nøkkel. Boblesortering og innsettingssortering flytter kun forbi strengt større elementer og er derfor stabile — tidlig stopp endrer ingenting ved stabiliteten, bare kjøretiden i beste tilfelle.",
    },
    {
      question: "Hva er beste tilfelle for utvalgssortering?",
      options: ["$O(n^2)$ — den må lete gjennom resten uansett", "$O(n)$ — den oppdager at arrayet allerede er sortert", "$O(n \\log n)$ — den er lineærlogaritmisk på sorterte data", "$O(1)$ — den returnerer uten arbeid på sorterte data"],
      explanation: "Utvalgssortering gjør alltid $\\frac{n(n-1)}{2}$ sammenligninger, også på et ferdigsortert array, fordi den ikke kan vite at minsteverdien er funnet før den har sett resten. At den skulle ha $O(n)$ i beste tilfelle er en distraktor som fanger den som blander den sammen med innsettingssortering.",
    },
    {
      question: "Hvilken av de tre kvadratiske sorteringene gjør færrest bytter?",
      options: ["Utvalgssortering, med høyst $n-1$ bytter uansett input", "Boblesortering, som bare bytter naboer og derfor flytter minst", "Innsettingssortering, som forskyver i stedet for å bytte", "Alle tre gjør like mange bytter på det samme arrayet"],
      explanation: "Utvalgssortering gjør høyst ett bytte per runde, altså høyst $n-1$ i alt. Boblesortering kan gjøre opp til $\\frac{n(n-1)}{2}$ bytter, og innsettingssortering like mange forskyvninger — at forskyvninger ikke heter «bytter» gjør dem ikke gratis.",
    },
    {
      question: "Hva betyr det at en sortering er in-place?",
      options: ["Den bruker $O(1)$ ekstra minne utover selve arrayet", "Den bevarer innbyrdes rekkefølge mellom like nøkler", "Den returnerer et nytt array i stedet for å endre inputen", "Den har samme kjøretid i beste og verste tilfelle"],
      explanation: "In-place handler om minnebruk: noen hjelpevariabler er greit, et nytt array på $n$ plasser er det ikke. Alternativet om innbyrdes rekkefølge beskriver stabilitet, som er en helt annen egenskap — de to blandes ofte fordi de nevnes i samme åndedrag.",
    },
    {
      question: "En liste er sortert alfabetisk og skal nå sorteres på årstall, med alfabetisk rekkefølge beholdt innen hvert år. Hvilken egenskap kreves?",
      options: ["Stabilitet — like nøkler må beholde innbyrdes rekkefølge", "In-place — sorteringen må skje uten et nytt hjelpearray", "Lineær kjøretid — ellers rekker den ikke å bevare rekkefølgen", "Sammenligningsbasert — ellers ser den ikke på årstallene"],
      explanation: "Alle bøkene fra samme år har lik nøkkel, og stabilitet er nettopp garantien for at like nøkler beholder rekkefølgen fra input. In-place og kjøretid er reelle egenskaper, men de sier ingenting om hva som skjer med like nøkler.",
    },
    {
      question: "Du skal sortere på hovednøkkel A og andrenøkkel B med en stabil sortering. Hvilken rekkefølge?",
      options: ["Sortér på B først, deretter på A", "Sortér på A først, deretter på B", "Sortér på A og B samtidig i én gjennomgang", "Rekkefølgen spiller ingen rolle når sorteringen er stabil"],
      explanation: "Den siste sorteringen styrer hovedrekkefølgen, så hovednøkkelen må komme sist. Regelen er kontraintuitiv, og den er samtidig hele maskineriet i radix sort, som sorterer på minst signifikante siffer først.",
    },
    {
      question: "Hvor mange sammenligninger gjør den indre løkka i runde 5 av boblesortering på et array med 12 elementer?",
      options: ["7", "8", "5", "12"],
      explanation: "Runde $i$ sammenligner naboparene fra indeks 0 til $n-i-1$, altså $n-i$ par: $12 - 5 = 7$. Svaret 8 er den klassiske bommen med én, fordi antall par er ett mindre enn antall gjenværende elementer.",
    },
    {
      question: "Hva er nedre grensen for antall sammenligninger en sammenligningsbasert sortering trenger i verste tilfelle?",
      options: ["$\\Omega(n \\log n)$", "$\\Omega(n)$", "$\\Omega(n^2)$", "$\\Omega(\\log n)$"],
      explanation: "Hver sammenligning gir ett bit informasjon, og algoritmen må kunne skille $n!$ mulige rekkefølger, som krever minst $\\log_2(n!)$ sammenligninger — det vokser som $n \\log n$. Grensen gjelder verste tilfelle; i beste tilfelle kan innsettingssortering klare seg med $O(n)$.",
    },
    {
      question: "Hvilket utsagn om boblesortering er sant?",
      options: ["Uten tidlig stopp er også beste tilfelle $O(n^2)$", "Med tidlig stopp blir verste tilfelle $O(n \\log n)$", "Den er ustabil fordi den bytter elementer under sorteringen", "Den trenger et hjelpearray på $n$ plasser til byttene"],
      explanation: "Uten `byttet`-flagget kjører den alle $n-1$ rundene uansett, så beste tilfelle er også kvadratisk. Tidlig stopp forbedrer bare beste tilfelle, aldri verste, og selve byttene skjer i arrayet med én hjelpevariabel — algoritmen er både stabil og in-place.",
    },
    {
      question: "Et array på 10 000 elementer er nesten sortert. Hvilken av de tre kvadratiske sorteringene bør du velge?",
      options: ["Innsettingssortering, fordi den nærmer seg $O(n)$ på slike data", "Utvalgssortering, fordi den gjør færrest bytter på slike data", "Boblesortering, fordi nabobyttene er raskest på slike data", "Alle tre er like gode, siden alle tre er $O(n^2)$"],
      explanation: "Er hvert element bare noen få plasser fra sin plass, stopper den indre `while`-løkka nesten umiddelbart, og innsettingssortering nærmer seg lineær kjøretid. Utvalgssortering merker ingenting til at arrayet er nesten sortert — den er $O(n^2)$ uansett input.",
    },
    {
      question: "Hvilken av disse sorteringene er IKKE in-place?",
      options: ["Flettesortering", "Boblesortering", "Utvalgssortering", "Innsettingssortering"],
      explanation: "Flettesortering trenger et hjelpearray på $n$ plasser til selve flettingen og bruker derfor $O(n)$ ekstra minne. Alle tre kvadratiske sorteringene i dette kapitlet arbeider på stedet med bare noen få hjelpevariabler.",
    },
    {
      question: "Etter 6 iterasjoner av utvalgssortering på 20 elementer — hvilke indekser er ferdige?",
      options: ["0 til 5, med de 6 minste elementene", "14 til 19, med de 6 største elementene", "0 til 6, med de 7 minste elementene", "0 til 5, men bare sortert innbyrdes, ikke endelig"],
      explanation: "Utvalgssortering fyller opp fra venstre med de minste, ett per runde, så etter 6 runder er indeksene 0 til 5 endelig plassert. Alternativet med indeks 14 til 19 er bobleinvarianten, og alternativet om «bare innbyrdes» er innsettingssorteringens svakere garanti.",
    },
    {
      question: "Hvorfor er innsettingssortering stabil?",
      options: ["Fordi den bare forskyver elementer forbi strengt større elementer", "Fordi den alltid arbeider fra venstre mot høyre i arrayet", "Fordi den bruker $O(1)$ ekstra minne og aldri kopierer", "Fordi den har $O(n)$ i beste tilfelle på sorterte data"],
      explanation: "Betingelsen `A[j] > x` er strengt større, så et element skyves aldri forbi et likt element, og innbyrdes rekkefølge overlever. Retningen den arbeider i, minnebruken og kjøretiden er ekte egenskaper ved algoritmen, men ingen av dem har noe med stabilitet å gjøre.",
    },
    {
      question: "Hvilken påstand om de tre kvadratiske sorteringene er usann?",
      options: ["Alle tre har $O(n)$ i beste tilfelle på et ferdigsortert array", "Alle tre er $O(n^2)$ i verste tilfelle på en vilkårlig input", "Alle tre er in-place og bruker $O(1)$ ekstra minne", "Alle tre er sammenligningsbaserte og bundet av $\\Omega(n \\log n)$"],
      explanation: "Utvalgssortering er $O(n^2)$ også på et ferdigsortert array, så påstanden om beste tilfelle gjelder bare innsettingssortering og boblesortering med tidlig stopp. De tre andre påstandene er sanne for alle tre, og de fungerer som distraktorer nettopp fordi de føles for enkle til å være riktige.",
    },
  ],
  'in2010-2-2': [
    {
      question: "Hva er kvikksorteringens kjøretid i verste tilfelle?",
      options: ["$O(n^2)$", "$O(n \\log n)$", "$O(n)$", "$O(\\log n)$"],
      explanation: "Havner pivoten ytterst hver gang, skrelles bare ett element av per nivå, og summen blir $\\frac{n(n-1)}{2}$. $O(n \\log n)$ er det **forventede** tilfellet — å oppgi det som verste er den hyppigste enkeltfeilen i hele kapitlet.",
    },
    {
      question: "Hvilken av de tre effektive sorteringene er stabil?",
      options: ["Flettesortering", "Heapsort", "Kvikksortering", "Ingen av dem"],
      explanation: "Flettingen lar venstre bit vinne ved likhet (`V[i] <= H[j]`), så like elementer beholder innbyrdes rekkefølge. Heapsort og kvikksortering flytter begge elementer over lang avstand og er derfor ustabile.",
    },
    {
      question: "Hvilken av de tre effektive sorteringene er IKKE in-place?",
      options: ["Flettesortering", "Heapsort", "Kvikksortering", "Alle tre er in-place"],
      explanation: "`Merge` bygger et nytt array og bruker derfor $O(n)$ ekstra minne. Heapen i heapsort ligger i selve arrayet, og kvikksortering partisjonerer på stedet — begge er in-place.",
    },
    {
      question: "Hva koster det å bygge en heap fra et vilkårlig array?",
      options: ["$O(n)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "De fleste nodene ligger nær bunnen og har kort vei å synke, så byggingen er lineær. $O(n \\log n)$ er en fast distraktor, og den er kjøretiden til hele heapsorteringen — der $n$ uttrekk koster $O(\\log n)$ hver.",
    },
    {
      question: "Hvorfor er flettesortering $O(n \\log n)$?",
      options: ["Splittingen gir $\\log n$ nivåer, og hvert nivå fletter $O(n)$", "Flettingen bruker $\\log n$ sammenligninger per element i arrayet", "Hver rekursjon halverer antall sammenligninger som gjenstår", "Rekursjonsdybden er $n$, og hvert nivå koster $\\log n$"],
      explanation: "Kjøretiden leses ved nivåtelling: antall halveringer fra $n$ til 1 er $\\log_2 n$, og på hvert nivå passerer alle $n$ elementene gjennom én fletting. De tre andre bytter om på hvilken størrelse som er nivåtallet og hvilken som er arbeidet per nivå.",
    },
    {
      question: "Hva garanterer én partisjonering i kvikksortering?",
      options: ["Pivoten står på sin endelige plass, med alt mindre til venstre", "Begge sidene av pivoten er ferdig sortert etter operasjonen", "Arrayet er delt i to like store deler rundt pivoten", "De minste elementene står på sine endelige plasser til venstre"],
      explanation: "Partisjonering garanterer kun pivotens endelige plass og at alt mindre ligger til venstre for den. Sidene er fortsatt usorterte, og de er sjelden like store — nettopp den ubalansen er kilden til det kvadratiske verstetilfellet.",
    },
    {
      question: "Hvor mange sammenligninger bruker én partisjonering av en bit med $m$ elementer?",
      options: ["$m - 1$", "$m$", "$m \\log m$", "$\\frac{m(m-1)}{2}$"],
      explanation: "Løkka går fra `lav` til `hoy-1` og sammenligner hvert element unntatt pivoten med pivoten. $\\frac{m(m-1)}{2}$ er den samlede kostnaden over alle nivåene i verste tilfelle, ikke kostnaden for én partisjonering.",
    },
    {
      question: "Nedre grensen $\\Omega(n \\log n)$ gjelder for:",
      options: ["verste tilfelle for sammenligningsbaserte sorteringer", "alle tilfeller for alle sorteringsalgoritmer som finnes", "forventet tilfelle for sorteringer som bruker rekursjon", "verste tilfelle for alle sorteringer, også counting sort"],
      explanation: "Grensen har to forbehold: den gjelder verste tilfelle, og bare algoritmer som utelukkende sammenligner elementer. Derfor motsier verken innsettingssorteringens $O(n)$ i beste tilfelle eller counting sorts $O(n+k)$ den.",
    },
    {
      question: "Hvorfor kan ikke en sammenligningsbasert sortering komme under $n \\log n$?",
      options: ["Den må skille $n!$ rekkefølger, og $k$ ja/nei-svar skiller høyst $2^k$", "Den må lese alle $n$ elementene $\\log n$ ganger for å bli sikker", "Hver sammenligning koster $\\log n$ tid å utføre på et array", "Rekursjon gir alltid minst $\\log n$ nivåer med $n$ arbeid hver"],
      explanation: "Argumentet er informasjonsteoretisk: $2^k \\ge n!$ gir $k \\ge \\log_2(n!)$, som vokser som $n \\log n$. De tre andre forveksler grensen med kjøretiden til en konkret algoritme, og de forklarer ikke hvorfor ingen annen algoritme kan gjøre det bedre.",
    },
    {
      question: "Hvor mange sammenligninger trengs minst for å sortere 4 ulike elementer i verste tilfelle?",
      options: ["5", "4", "6", "3"],
      explanation: "Treet må ha minst $4! = 24$ blader, og et binærtre med høyde 4 har høyst 16 blader mens høyde 5 gir 32. Svaret 4 er den vanlige bommen for den som setter høyden lik antall elementer i stedet for å regne på antall blader.",
    },
    {
      question: "Et array er allerede sortert. Hva er flettesorteringens kjøretid på det?",
      options: ["$O(n \\log n)$ — splittingen bryr seg ikke om rekkefølgen", "$O(n)$ — den oppdager at arrayet allerede er sortert", "$O(n^2)$ — sorterte data er verstetilfellet for fletting", "$O(\\log n)$ — den trenger bare å bekrefte hvert nivå"],
      explanation: "Splittingen deler blindt på midten, så antall nivåer er $\\log_2 n$ uansett hvordan tallene ligger. Flettesortering har verken en god eller en dårlig dag — det er kvikksortering som får $O(n^2)$ på nettopp denne inputen.",
    },
    {
      question: "Du skal sortere 2 millioner poster på dato, og rekkefølgen mellom like datoer må bevares. Hva velger du?",
      options: ["Flettesortering, fordi den er stabil og garantert $O(n \\log n)$", "Heapsort, fordi den er in-place og garantert $O(n \\log n)$", "Kvikksortering, fordi konstantfaktoren i praksis er svært lav her", "Utvalgssortering, fordi den gjør færrest bytter på store data"],
      explanation: "Kravet om bevart rekkefølge mellom like nøkler er et krav om stabilitet, og bare flettesortering av de effektive er stabil. Heapsort og kvikksortering er raske nok, men begge er ustabile, og utvalgssortering er dessuten $O(n^2)$.",
    },
    {
      question: "Hva gjør tilfeldig pivotvalg med kvikksorteringens verste tilfelle?",
      options: ["Ingenting — verste tilfelle er fortsatt $O(n^2)$, bare usannsynlig", "Det senker verste tilfelle til $O(n \\log n)$ for enhver input", "Det senker verste tilfelle til $O(n)$ når arrayet er nesten sortert", "Det hever forventet kjøretid, men senker verste tilfelle"],
      explanation: "Tilfeldig pivot gjør forventet kjøretid $O(n \\log n)$ for enhver input, men uflaks kan fortsatt gi den ubalanserte delingen. Distraktoren som sier $O(n \\log n)$ verste er nær sann og fanger nettopp den som ikke skiller forventet fra verste.",
    },
    {
      question: "Du står med et usortert array og skal finne to like elementer. Hvilket svar står øverst i poengtrappen?",
      options: ["$O(n)$ forventet med et hash-set over elementene", "$O(n \\log n)$ ved å sortere og skanne naboparene", "$O(n^2)$ ved å sammenligne alle par i en dobbel løkke", "$O(n + k)$ ved å bruke radix sort på elementene"],
      explanation: "Sensorveiledningene gir mest uttelling for lavest kjøretid på samme oppgave, og hash-set gir $O(n)$ forventet. Radix-alternativet er ikke lovlig her: det krever et kjent, begrenset verdiområde, som oppgaven ikke oppgir.",
    },
  ],
  'in2010-2-3': [
    {
      question: "Hva er counting sorts kjøretid?",
      options: ["$O(n + k)$", "$O(n)$", "$O(n \\log n)$", "$O(nk)$"],
      explanation: "Tellingen koster $O(n)$, kumuleringen $O(k)$ og utplasseringen $O(n)$, og sumregelen gir $O(n+k)$. Å skrive bare $O(n)$ er den vanligste unøyaktigheten: med $n = 1000$ og $k = 10^9$ er algoritmen langt tregere enn en sammenligningssortering.",
    },
    {
      question: "Alt du vet om $n$ elementer er at de kan sammenlignes. Hva er lavest mulig kjøretid?",
      options: ["$O(n \\log n)$ med en sammenligningssortering", "$O(n)$ med bucket sort over verdiområdet", "$O(n + k)$ med counting sort på nøklene", "$O(d(n+k))$ med radix sort på sifrene"],
      explanation: "Uten kunnskap om verdiene finnes det ingen adresse å bruke, så nedre grensen $\\Omega(n \\log n)$ gjelder fullt ut. De tre lineære alternativene er felle #5: de forutsetter alle et kjent, begrenset verdiområde som oppgaven ikke har oppgitt.",
    },
    {
      question: "Hvorfor går utplasseringsløkka i counting sort bakfra gjennom inputen?",
      options: ["For at algoritmen skal bli stabil", "For at telleregisteret skal bli riktig", "For at kjøretiden skal bli lineær", "For at utdataarrayet skal fylles helt"],
      explanation: "Bakfra får det siste elementet med en gitt nøkkel den bakerste ledige plassen, så innbyrdes rekkefølge bevares. Snus løkka, blir resultatet fortsatt korrekt sortert, men ustabilt — og da kan ikke counting sort brukes som byggekloss i radix sort.",
    },
    {
      question: "I hvilken rekkefølge sorterer radix sort sifrene?",
      options: ["Minst signifikante siffer først", "Mest signifikante siffer først", "Alle sifrene samtidig i ett pass", "Rekkefølgen har ingen betydning"],
      explanation: "Den siste sorteringen styrer hovedrekkefølgen, så det mest signifikante sifferet må komme sist. Sorterer du motsatt vei, ødelegger hvert pass arbeidet fra det forrige, og resultatet blir feil.",
    },
    {
      question: "Hvorfor må hvert pass i radix sort være stabilt?",
      options: ["Ellers mistes rekkefølgen fra sifrene som allerede er sortert", "Ellers blir kjøretiden $O(n^2)$ i stedet for lineær i $n$", "Ellers kan telleregisteret bli for stort for verdiområdet", "Ellers må algoritmen sortere hvert siffer to ganger"],
      explanation: "Rekkefølgen fra tidligere pass overlever bare inne i en bøtte hvis passet er stabilt. Stabilitet er derfor ikke en fin egenskap her, men en betingelse for at algoritmen i det hele tatt gir riktig svar.",
    },
    {
      question: "Hva er bucket sorts kjøretid i verste tilfelle?",
      options: ["$O(n^2)$ — alle elementene kan havne i samme bøtte", "$O(n)$ — den er lineær uansett hvordan verdiene ligger", "$O(n \\log n)$ — bøttene sorteres med flettesortering", "$O(n + k)$ — verdiområdet legges til antall elementer"],
      explanation: "$O(n)$ er det **forventede** tilfellet, og det forutsetter jevn fordeling. Er fordelingen skjev, faller hele arbeidet på sorteringen inne i den ene fulle bøtta, og verste tilfelle blir kvadratisk.",
    },
    {
      question: "Du skal sortere $n$ personer etter alder, som er et heltall mellom 0 og 120. Beste valg?",
      options: ["Counting sort, $O(n + k)$ med $k = 120$", "Flettesortering, $O(n \\log n)$ og garantert stabil", "Kvikksortering, $O(n \\log n)$ forventet og in-place", "Innsettingssortering, $O(n)$ når data er nesten sortert"],
      explanation: "Alder er heltall i et kjent, lite område, så forutsetningen for counting sort er oppfylt og kjøretiden blir $O(n)$ siden $k$ er konstant. De tre andre er korrekte sorteringer, men ingen av dem utnytter opplysningen om verdiområdet.",
    },
    {
      question: "Hvilken av disse er IKKE en forutsetning for bucket sort?",
      options: ["At elementene kan sammenlignes to og to med hverandre", "At verdiene ligger i et kjent intervall på forhånd", "At verdiene er noenlunde jevnt fordelt i intervallet", "At antall bøtter er omtrent like stort som antall verdier"],
      explanation: "Sammenlignbarhet alene er nettopp det som *ikke* holder — bucket sort trenger å vite hvor verdiene ligger for å regne ut bøttenummeret. De tre andre er reelle forutsetninger for at kjøretiden skal bli lineær.",
    },
    {
      question: "Hvor stort er telleregisteret i counting sort?",
      options: ["$k + 1$ plasser, én per mulig nøkkelverdi", "$n$ plasser, én per element i inputen", "$n + k$ plasser, for å romme begge deler", "$\\log n$ plasser, altså én per nivå i sorteringen"],
      explanation: "Registeret indekseres av verdien, ikke av elementet, så det trenger én plass per mulig nøkkel. Det er nettopp derfor $k$ dukker opp i kjøretiden, og hvorfor counting sort blir ubrukelig når verdiområdet er stort.",
    },
    {
      question: "Motsier de lineære sorteringene nedre grensen $\\Omega(n \\log n)$?",
      options: ["Nei — grensen gjelder bare sammenligningsbaserte algoritmer", "Ja — de sorterer beviselig raskere enn grensen tillater", "Nei — de er egentlig $O(n \\log n)$ når $k$ regnes med", "Ja — men bare når verdiområdet $k$ er mindre enn $n$"],
      explanation: "Ingen av de tre sammenligner to elementer; de bruker verdien som adresse, og faller derfor utenfor grensens rekkevidde. De «slår» ikke grensen — de er ikke omfattet av den, og prisen er forutsetningen om verdiene.",
    },
    {
      question: "Radix sort på $n$ firesifrede postnumre. Hva er kjøretiden?",
      options: ["$O(d(n + k))$ med $d = 4$ og $k = 9$, altså lineært", "$O(n + k)$ med $k = 9999$, altså lineært i verdiområdet", "$O(n \\log n)$ fordi hvert pass må sortere hele arrayet", "$O(n^2)$ fordi sifrene må sammenlignes parvis i hvert pass"],
      explanation: "Fire pass, hvert et counting-pass med ti mulige sifferverdier, gir $O(d(n+k))$ som er lineært når $d$ og $k$ er konstanter. Alternativet med $k = 9999$ beskriver counting sort på hele tallet — det virker også, men telleregisteret blir unødvendig stort.",
    },
    {
      question: "En algoritme bytter bare naboer, og bare når naboen foran er strengt større. Hva vet du?",
      options: ["Den er stabil", "Den er ustabil", "Den er $O(n \\log n)$", "Den er $O(n)$"],
      explanation: "To like elementer byttes aldri når betingelsen er strengt større, så innbyrdes rekkefølge overlever — det er hele stabilitetsargumentet. Kjøretid og minnebruk må leses av løkkestrukturen, ikke av byttebetingelsen.",
    },
    {
      question: "Hvilke egenskaper har gnome sort?",
      options: ["$O(n^2)$ verste, stabil og in-place", "$O(n \\log n)$ verste, stabil, in-place", "$O(n^2)$ verste, ustabil og in-place", "$O(n^2)$ verste, stabil, ikke in-place"],
      explanation: "Gnome sort skyver ett element bakover med nabobytter, akkurat som innsettingssortering, og arver profilen: kvadratisk verste tilfelle, stabil fordi den bare bytter forbi strengt større, og in-place fordi den bare bruker én indeksvariabel.",
    },
    {
      question: "Du skal sortere på avdeling som hovednøkkel og ansiennitet som andrenøkkel med to counting-pass. Rekkefølge?",
      options: ["Ansiennitet først, deretter avdeling", "Avdeling først, deretter ansiennitet", "Begge nøklene i samme pass over dataene", "Avdeling to ganger, med ansiennitet imellom"],
      explanation: "Den siste sorteringen styrer hovedrekkefølgen, så hovednøkkelen må sorteres sist. Passet på avdeling er stabilt og bevarer da ansiennitetsrekkefølgen som ble etablert i det første passet.",
    },
    {
      question: "Når er counting sort et dårlig valg selv om nøklene er heltall?",
      options: ["Når verdiområdet $k$ er mye større enn antallet $n$", "Når elementene allerede ligger nesten ferdig sortert", "Når det finnes mange elementer med nøyaktig lik nøkkel", "Når resultatet må være stabilt på tvers av like nøkler"],
      explanation: "Kjøretiden $O(n+k)$ domineres av $k$ når verdiområdet er stort, og da er $O(n \\log n)$ raskere. Nesten sorterte data og mange like nøkler påvirker ikke counting sort i det hele tatt, og stabilitet er noe den allerede gir.",
    },
    {
      question: "Hva er den avgjørende setningen sensor ser etter når du velger en lineær sortering?",
      options: ["Begrunnelsen for at forutsetningen om verdiene er oppfylt", "Selve pseudokoden for telleregisteret og utplasseringen", "En sammenligning med alle de andre sorteringsalgoritmene", "Et bevis for at algoritmen faktisk sorterer riktig til slutt"],
      explanation: "Poengtrappen belønner lavest kjøretid blant **lovlige** løsninger, og det er forutsetningen som avgjør om løsningen er lovlig. En besvarelse som skriver «counting sort, $O(n)$» uten å nevne heltall og kjent område, mister delpoenget.",
    },
  ],
  'in2010-2-4': [
    {
      question: "`[3, 8, 1, 5]` sorteres med boblesortering. Tilstand etter 1 iterasjon?",
      options: ["`[3, 1, 5, 8]`", "`[1, 8, 3, 5]`", "`[3, 8, 1, 5]`", "`[1, 3, 5, 8]`"],
      explanation: "Runde 1 sammenligner naboparene fra venstre: (3,8) står riktig, (8,1) byttes, (8,5) byttes, og 8-tallet havner sist. Alternativet `[1, 8, 3, 5]` er utvalgssorteringens resultat etter én runde, og `[3, 8, 1, 5]` er innsettingssorteringens.",
    },
    {
      question: "`[3, 8, 1, 5]` sorteres med innsettingssortering. Tilstand etter 1 iterasjon?",
      options: ["`[3, 8, 1, 5]`", "`[3, 1, 5, 8]`", "`[1, 8, 3, 5]`", "`[1, 3, 8, 5]`"],
      explanation: "Runde 1 tar `x = 8` og sammenligner med 3, som ikke er større, så ingen forskyvning skjer og arrayet er uendret. En runde uten endring er et helt riktig svar, og et vanlig sted å tvile på seg selv.",
    },
    {
      question: "Et array med 30 elementer. Etter 8 runder med boblesortering — hvilke indekser er garantert ferdige?",
      options: ["22 til 29", "0 til 7", "0 til 8", "21 til 29"],
      explanation: "De 8 største låses helt til høyre, altså de 8 siste indeksene i et array med indeks 0 til 29. Alternativet 0 til 7 er utvalgssorteringens invariant, og 0 til 8 er innsettingssorteringens svakere garanti om innbyrdes sortering.",
    },
    {
      question: "Et array med 30 elementer. Etter 8 runder med innsettingssortering — hvor mange elementer er sortert innbyrdes?",
      options: ["9", "8", "22", "30"],
      explanation: "Innsettingssortering utvider prefikset med ett element per runde og starter med ett element allerede på plass, så etter $i$ runder er $i+1$ elementer sortert innbyrdes. Svaret 8 er den klassiske bommen med én.",
    },
    {
      question: "Hvor mange sammenligninger gjør den indre løkka i runde 5 av boblesortering på 20 elementer?",
      options: ["15", "16", "14", "20"],
      explanation: "Runde $i$ sammenligner naboparene fra indeks 0 til $n-i-1$, altså $n-i = 20-5 = 15$ par. Svaret 16 kommer av å telle antall gjenværende elementer i stedet for antall par mellom dem.",
    },
    {
      question: "Hvilken algoritme er ustabil blant de tre kvadratiske?",
      options: ["Utvalgssortering", "Boblesortering", "Innsettingssortering", "Alle tre er stabile"],
      explanation: "Utvalgssortering bytter minsteelementet over lang avstand og kan hoppe forbi en lik nøkkel. De to andre flytter bare forbi strengt større naboer og bevarer derfor innbyrdes rekkefølge.",
    },
    {
      question: "Hvilken av de effektive sorteringene er både garantert $O(n \\log n)$ og in-place?",
      options: ["Heapsort", "Flettesortering", "Kvikksortering", "Ingen av dem er begge deler"],
      explanation: "Heapen ligger i selve arrayet, og alle $n$ uttrekkene koster $O(\\log n)$ uansett input. Flettesortering er garantert, men bruker $O(n)$ ekstra minne, og kvikksortering er in-place, men har $O(n^2)$ i verste tilfelle.",
    },
    {
      question: "Utvalgssortering på et allerede sortert array med $n$ elementer. Kjøretid?",
      options: ["$O(n^2)$", "$O(n)$", "$O(n \\log n)$", "$O(1)$"],
      explanation: "Utvalgssortering leter gjennom hele den gjenværende delen i hver runde, uansett hvordan arrayet ligger, og gjør derfor alltid $\\frac{n(n-1)}{2}$ sammenligninger. Den er den eneste av de sju som ikke har noe beste tilfelle.",
    },
    {
      question: "Kvikksortering med siste element som pivot på et allerede sortert array. Kjøretid?",
      options: ["$O(n^2)$", "$O(n \\log n)$", "$O(n)$", "$O(n \\log^2 n)$"],
      explanation: "Pivoten er alltid det største gjenværende elementet og havner ytterst, så hver partisjonering skreller av bare ett element og nivåtellingen gir trekantsummen. Dette er nettopp den verstetilfelle-inputen som gjør at $O(n \\log n)$ bare er forventet.",
    },
    {
      question: "En sortering bytter kun naboer, og kun når naboen foran er strengt større. Hva følger?",
      options: ["Den er stabil", "Den er in-place", "Den er $O(n \\log n)$", "Den er ustabil"],
      explanation: "Strengt større i byttebetingelsen betyr at to like elementer aldri byttes om, og innbyrdes rekkefølge overlever. Minnebruken og kjøretiden må leses av løkkestrukturen og eventuelle nye arrayer, ikke av byttebetingelsen.",
    },
    {
      question: "Du skal sortere $n$ eksamensbesvarelser på karakter A til F. Beste valg og kjøretid?",
      options: ["Counting sort, $O(n + k)$ med $k = 5$", "Flettesortering, $O(n \\log n)$ og stabil", "Kvikksortering, $O(n \\log n)$ forventet", "Heapsort, $O(n \\log n)$ og in-place"],
      explanation: "Seks kjente karakterverdier kan nummereres 0 til 5 og brukes direkte som indeks, så forutsetningen for counting sort er oppfylt og kjøretiden blir $O(n)$. De tre andre er korrekte, men utnytter ikke opplysningen om verdiområdet og står ett trinn lavere i poengtrappen.",
    },
    {
      question: "$n$ flyttall er bare kjent å kunne sammenlignes. Hva er lavest mulig kjøretid?",
      options: ["$O(n \\log n)$", "$O(n)$", "$O(n + k)$", "$O(d(n + k))$"],
      explanation: "Uten kunnskap om verdiene finnes det ingen adresse å bruke, så nedre grensen $\\Omega(n \\log n)$ gjelder fullt ut. De tre lineære alternativene er felle #5: de forutsetter et kjent, begrenset verdiområde som oppgaven ikke har oppgitt.",
    },
    {
      question: "Du sorterer på hovednøkkel A og andrenøkkel B med stabile pass. Rekkefølge?",
      options: ["B først, deretter A", "A først, deretter B", "A og B i samme pass", "A, deretter B, deretter A"],
      explanation: "Den siste sorteringen styrer hovedrekkefølgen, så hovednøkkelen må komme sist. Stabiliteten i det siste passet er det som bevarer andrenøkkelens rekkefølge innen hver gruppe.",
    },
    {
      question: "Hva er galt med «jeg bruker bucket sort, som er $O(n)$» på et array med vilkårlige heltall?",
      options: ["Bucket sort krever kjent intervall og jevn fordeling", "Bucket sort er ustabil og kan ikke brukes på heltall", "Bucket sort er $O(n \\log n)$ og ikke lineær i det hele tatt", "Bucket sort krever at arrayet allerede er nesten sortert"],
      explanation: "Uten et kjent intervall kan ikke bøttenummeret regnes ut, og uten jevn fordeling degenererer kjøretiden til $O(n^2)$. Dessuten er $O(n)$ bare det forventede tilfellet — begge forbeholdene må stå i besvarelsen.",
    },
    {
      question: "Utvalgssortering på `[7, 2, 9, 4, 1, 6]`. Hvor mange bytter er gjort etter 3 iterasjoner?",
      options: ["2", "3", "1", "4"],
      explanation: "Runde 1 byttet 1-tallet fram, runde 2 gjorde ingen bytte fordi 2-tallet allerede lå riktig, og runde 3 byttet 4-tallet fram. Runden uten bytte er det vanligste stedet å telle feil, fordi tilstanden ser uendret ut.",
    },
    {
      question: "Hvilken påstand om kvikksortering er sann?",
      options: ["Den er in-place, men ikke stabil", "Den er stabil, men ikke in-place", "Den er både stabil og in-place", "Den er verken stabil eller in-place"],
      explanation: "Partisjoneringen bytter i selve arrayet og bruker $O(1)$ ekstra minne, men byttene skjer over lang avstand og kan flytte om på like nøkler. Kombinasjonen in-place og ustabil deler den med heapsort og utvalgssortering.",
    },
    {
      question: "Hvor mange sammenligninger gjør utvalgssortering totalt på $n$ elementer?",
      options: ["$\\frac{n(n-1)}{2}$", "$n - 1$", "$n \\log n$", "$n^2$"],
      explanation: "Den indre løkka gjør $n-1$, $n-2$, $n-3$ og så videre sammenligninger, og summen er trekantsummen. $n-1$ er antall **bytter**, ikke antall sammenligninger — å blande de to tellingene er en fast felle.",
    },
    {
      question: "Hva skjer hvis ett pass i radix sort er ustabilt?",
      options: ["Rekkefølgen fra tidligere siffer går tapt, og svaret blir feil", "Kjøretiden stiger til $O(n^2)$, men svaret blir riktig", "Telleregisteret blir for lite til å romme alle sifrene", "Algoritmen må kjøre ett ekstra pass for å rette opp"],
      explanation: "Rekkefølgen fra tidligere pass overlever bare inne i en bøtte hvis passet er stabilt, og et senere pass kan ikke gjenopprette den. Stabilitet er derfor en betingelse for korrekthet i radix sort, ikke en ytelsesdetalj.",
    },
    {
      question: "På hvilken input slår innsettingssortering flettesortering?",
      options: ["Et array som allerede er sortert eller nesten sortert", "Et array som er omvendt sortert fra størst til minst", "Et array med svært mange like elementer i seg", "Aldri — flettesortering er raskere på enhver input"],
      explanation: "På nesten sorterte data stopper den indre `while`-løkka umiddelbart, og innsettingssortering nærmer seg $O(n)$ mot flettesorteringens $O(n \\log n)$. Det viser at asymptotisk klasse er en uttalelse om verste eller forventet tilfelle, ikke om hver enkelt input.",
    },
    {
      question: "Hva bør du gjøre med en håndkjøringsrute du er usikker på?",
      options: ["Svare med det beste forsøket ditt, siden delvis riktig gir delvis uttelling", "La den stå blank, siden feil svar trekker mer enn ubesvart gjør", "Skrive en forklaring i stedet for tilstanden, så sensor ser tankegangen", "Krysse av alle mulige tilstander og la sensor velge den riktige"],
      explanation: "Håndkjøringsoppgaver gir poeng per riktig deltilstand, og de er ikke underlagt antigjettings-skaleringen som gjelder sant/usant-blokkene. På slike oppgaver er ubesvart det samme som feil, så det lønner seg alltid å svare.",
    },
  ],
  'in2010-3-1': [
    {
      question: "Hva er $h(k)$ for nøkkelen 22 i en tabell med $N = 7$ og $h(k) = k \\bmod N$?",
      options: ["1", "3", "2", "0"],
      explanation: "$22 = 3 \\cdot 7 + 1$, så resten er 1. Svaret 3 er kvotienten og ikke resten — en klassisk forveksling under tidspress, og grunnen til at du bør regne ut alle hashverdiene i en egen linje før du setter inn noe.",
    },
    {
      question: "En klynge når plass $N-1$ og plassen er opptatt. Hvilken plass prøves neste gang?",
      options: ["Plass 0", "Plass $N$", "Plass $N-2$", "Innsettingen mislykkes"],
      explanation: "Probing-steget er $(i+1) \\bmod N$, så fra siste plass går sekvensen rundt til plass 0 — tabellen er en ring. Plass $N$ finnes ikke, og å skrive dit er felle #11, den hyppigste feilen i hele Del 3.",
    },
    {
      question: "Hva skjer når `Insert` møter en plass som allerede inneholder nøyaktig nøkkelen som settes inn?",
      options: ["Den skriver over på samme plass og stopper", "Den fortsetter til første helt tomme plass", "Den melder feil fordi nøkkelen er duplisert", "Den flytter den gamle nøkkelen ett hakk fram"],
      explanation: "Løkkebetingelsen `T[i] er ikke tom and T[i] er ulik k` er usann i andre ledd, så løkka stopper og `T[i] = k` skriver over. Alternativet med å fortsette til tom plass gir et duplikat som ingen senere søk vil finne — andre halvdel av felle #11.",
    },
    {
      question: "Sett inn 15, 22, 8 i en tom tabell med $N = 7$. Hva blir tabellen?",
      options: ["`_, 15, 22, 8, _, _, _`", "`_, 15, _, 22, _, 8, _`", "`15, 22, 8, _, _, _, _`", "`_, 15, 22, _, 8, _, _`"],
      explanation: "Alle tre hasher til plass 1, så 15 tar plass 1, 22 forskyves til 2, og 8 til 3. Distraktorene svarer til å starte klyngen på plass 0 eller å hoppe over plasser i probingen.",
    },
    {
      question: "Hva er forventet kjøretid for oppslag i en hashtabell?",
      options: ["$O(1)$", "$O(n)$", "$O(\\log n)$", "$O(n \\log n)$"],
      explanation: "Sprer hashfunksjonen nøklene jevnt, er probing-sekvensen kort og uavhengig av hvor mange nøkler som er lagret. $O(n)$ er derimot verste tilfelle, når alt har havnet i én sammenhengende klynge.",
    },
    {
      question: "Hva er verste kjøretid for oppslag i en hashtabell?",
      options: ["$O(n)$", "$O(1)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Havner alle nøklene i én klynge, må probing-sekvensen gjennom hele, og strukturen er ikke bedre enn et lineært søk. Å oppgi $O(1)$ uten ordet «forventet» er derfor en fast trekkgrunn.",
    },
    {
      question: "Hvorfor kan et søk avsluttes når det treffer en tom plass?",
      options: ["Fordi innsettingen ville stoppet der eller tidligere", "Fordi tomme plasser alltid ligger sist i tabellen", "Fordi hashfunksjonen aldri peker på en tom plass", "Fordi tabellen da er full og søket er uttømmende"],
      explanation: "`Insert` og `Contains` følger nøyaktig samme sekvens, så hadde nøkkelen vært satt inn, ville den ligget på den første ledige plassen i sekvensen. Argumentet forutsetter at ingenting er slettet fra tabellen.",
    },
    {
      question: "Hva er primær klyngedannelse?",
      options: ["At en sammenhengende blokk fanger opp nøkler som hasher inn i den", "At to ulike nøkler får nøyaktig samme hashverdi $h(k)$", "At tabellen blir så full at load-faktoren nærmer seg 1", "At hashfunksjonen bare treffer et lite utvalg av plassene"],
      explanation: "En klynge vokser fordi enhver nøkkel som hasher til en plass inne i den, forskyves helt ut til enden av blokka. At to nøkler får samme hashverdi er en **kollisjon** — klyngedannelsen er følgen, ikke årsaken.",
    },
    {
      question: "Hvordan skal sluttilstanden til en hashtabell leveres på eksamen?",
      options: ["Hele tabellen, med markering av tomme plasser", "Bare nøklene som ble satt inn, i rekkefølgen de kom", "Bare plassene som ble endret av siste innsetting", "Nøklene sortert stigende, uten indeksene"],
      explanation: "Sensor ber om hele tabellen fordi de tomme plassene viser at probing-sekvensen ble fulgt riktig. Å bare liste de innsatte nøklene er felle #11 og gir sterkt redusert uttelling.",
    },
    {
      question: "Hvilken linje i `Insert` inneholder wraparound-detaljen?",
      options: ["`i = (i + 1) mod N`", "`i = k mod N`", "`while T[i] er ikke tom`", "`T[i] = k`"],
      explanation: "Oppdateringslinja er den som må ha `mod N` for at sekvensen skal gå rundt fra plass $N-1$ til plass 0. Startlinja `i = k mod N` har også en modulo, men den sikrer bare at startpunktet er gyldig.",
    },
    {
      question: "Hva betyr det at hashing er «lukket»?",
      options: ["Alle nøkler ligger i selve arrayet, ingen utenfor", "Tabellen kan ikke utvides etter at den er opprettet", "Hashfunksjonen er hemmelig for den som bruker tabellen", "Sletting av nøkler er ikke tillatt i strukturen"],
      explanation: "Lukket hashing, også kalt åpen adressering, løser kollisjoner ved probing inne i arrayet. Alternativet er kjeding, der hver plass peker til en lenket liste — det er ikke varianten som håndkjøres i IN2010.",
    },
    {
      question: "Sett inn 17 og 26 i en tom tabell med $N = 9$. Hvor havner 26?",
      options: ["Plass 0", "Plass 9", "Plass 7", "Plass 8"],
      explanation: "Begge hasher til plass 8, som er siste plass i tabellen, så 26 forskyves til $(8+1) \\bmod 9 = 0$. Svaret «plass 9» er nettopp felle #11: en indeks utenfor det gyldige området $0$ til $N-1$.",
    },
    {
      question: "Hva er forskjellen på $n$ og $N$ i en hashtabell?",
      options: ["$n$ er antall lagrede nøkler, $N$ er antall plasser", "$n$ er antall plasser, $N$ er antall lagrede nøkler", "$n$ er antall kollisjoner, $N$ er antall innsettinger", "$n$ og $N$ betegner det samme og brukes om hverandre"],
      explanation: "Hashfunksjonen $h(k) = k \\bmod N$ avhenger av tabellstørrelsen, mens kjøretidens verste tilfelle $O(n)$ avhenger av hvor mange nøkler som faktisk ligger der. Å bruke dem om hverandre uten å definere dem er felle #10.",
    },
    {
      question: "Hvorfor er sletting problematisk i lukket hashing?",
      options: ["En tømt plass kan avslutte senere søk for tidlig", "Slettede nøkler kan ikke settes inn i tabellen igjen", "Hashfunksjonen må regnes ut på nytt for alle nøkler", "Load-faktoren blir feil og utløser en unødvendig rehash"],
      explanation: "Søket stopper på en tom plass, så tømmer du en plass midt i en klynge, blir nøkler lenger ute i sekvensen usynlige. Løsningen er å markere plassen som slettet i stedet for tom.",
    },
    {
      question: "Hvor mange prøver bruker `Insert` når nøkkelen allerede ligger på sin egen hashverdi?",
      options: ["Én", "Ingen", "To", "Like mange som ved første innsetting"],
      explanation: "Probingen starter på $h(k)$, finner nøkkelen der, og løkka avsluttes umiddelbart uten å flytte seg. Alternativet «like mange som ved første innsetting» er sant bare når nøkkelen ble forskjøvet den gangen.",
    },
    {
      question: "Hvordan testes hashing i IN2010 sammenlignet med et generisk algoritmepensum?",
      options: ["Både som håndkjøring og som pseudokode, i hvert eneste sett", "Bare som et faktapunkt om forventet og verste kjøretid", "Bare som pseudokode, siden håndkjøring tar for lang tid", "Sjeldnere enn sortering, og oftest bare som et randtema"],
      explanation: "Hashing har 100 % frekvens her og prøves både som sjanger E og sjanger I i alle sju settene. Studenter som kommer fra et pensum der hashing er et randtema, undervurderer temaet systematisk.",
    },
  ],
  'in2010-3-2': [
    {
      question: "Hva er load-faktoren $\\alpha$?",
      options: ["Antall lagrede nøkler delt på antall plasser", "Antall plasser delt på antall lagrede nøkler", "Antall kollisjoner delt på antall innsettinger", "Antall prøver delt på antall plasser i tabellen"],
      explanation: "$\\alpha = n/N$ måler hvor stor andel av plassene som er i bruk, og den ligger derfor mellom 0 og 1 ved lukket hashing. Snur du brøken, får du et tall over 1 så snart tabellen er mindre enn halvfull.",
    },
    {
      question: "Kan rehashing gjenbruke de gamle indeksene etter en dobling?",
      options: ["Nei — $h(k) = k \\bmod N$ endres når $N$ endres", "Ja — indeksene er uavhengige av tabellstørrelsen", "Ja — så lenge den nye størrelsen er et multiplum av den gamle", "Nei — men bare hvis tabellen inneholder kollisjoner fra før"],
      explanation: "Hashfunksjonen har $N$ i seg, så nøkkelen 22 gir plass 1 når $N = 7$ og plass 8 når $N = 14$. Hver nøkkel må settes inn på nytt, og påstanden om gjenbruk er kapitlets faste distraktor.",
    },
    {
      question: "Hva koster én rehashing av en tabell med $N$ plasser og $n$ nøkler?",
      options: ["$O(n + N)$", "$O(1)$", "$O(n \\log n)$", "$O(n \\cdot N)$"],
      explanation: "Løkka går gjennom alle $N$ plassene, og hver av de $n$ nøklene settes inn på $O(1)$ forventet. Det ser dyrt ut, men rehashinger skjer sjelden nok til at snittet per innsetting likevel er konstant.",
    },
    {
      question: "Hva koster $n$ innsettinger i en hashtabell som dobler seg ved behov?",
      options: ["$O(n)$ totalt", "$O(n \\log n)$ totalt", "$O(n^2)$ totalt", "$O(n \\log n)$ forventet, $O(n^2)$ verste"],
      explanation: "Doblingene koster $N_0 + 2N_0 + 4N_0$ og videre, og i en doblingsrekke er summen under det dobbelte av siste ledd. Fordelt på $n$ innsettinger gir det konstant kostnad per innsetting.",
    },
    {
      question: "Hva er verste kjøretid for et oppslag i et hashmap?",
      options: ["$O(n)$", "$O(1)$", "$O(\\log n)$", "$O(n \\log n)$"],
      explanation: "Ligger alle nøklene i én klynge, må probing-sekvensen gjennom hele, og strukturen er ikke bedre enn et lineært søk. $O(1)$ er det **forventede** tilfellet, og å utelate det ordet er en fast trekkgrunn.",
    },
    {
      question: "Kan load-faktoren i en tabell med lukket hashing bli 1,5?",
      options: ["Nei — alle nøkler ligger i arrayet, så $n \\le N$", "Ja — så lenge probing-sekvensen finner ledige plasser", "Ja — men bare rett før en rehashing utløses", "Nei — fordi hashfunksjonen ikke tillater verdier over 1"],
      explanation: "Med lukket hashing ligger hver nøkkel i selve arrayet, så det kan ikke være flere nøkler enn plasser. Med kjeding, der hver plass peker til en liste, kan $\\alpha$ godt overstige 1 — men det er en annen struktur.",
    },
    {
      question: "Hvilket verktøy gir $O(n)$ forventet på «finnes det to like elementer?»",
      options: ["Et hash-set", "En sortering med flettesortering", "En dobbel løkke over alle par", "Et binærsøk i den usorterte lista"],
      explanation: "Ett gjennomløp med $O(1)$ forventet oppslag per element gir lineær forventet kjøretid. Sortering gir $O(n \\log n)$ og dobbel løkke $O(n^2)$ — begge korrekte, men ett og to trinn lavere i poengtrappen.",
    },
    {
      question: "Hvorfor må ordet «forventet» stå når du oppgir $O(1)$ for et hashoppslag?",
      options: ["Fordi verste tilfelle er $O(n)$ når alt kolliderer", "Fordi hashfunksjonen bruker tilfeldige tall internt", "Fordi kjøretiden avhenger av hvor stor tabellen er", "Fordi $O(1)$ bare gjelder for oppslag, ikke innsetting"],
      explanation: "Kjøretiden må matche algoritmen du faktisk ga, og en hashtabell har to ulike kjøretider avhengig av hvordan nøklene ligger. Sensor trekker eksplisitt for kjøretid oppgitt uten det nødvendige forbeholdet.",
    },
    {
      question: "En tabell med $N = 8$ inneholder 6 nøkler. Hva er load-faktoren?",
      options: ["0,75", "1,33", "0,60", "0,80"],
      explanation: "$\\alpha = n/N = 6/8 = 0{,}75$. Svaret 1,33 er den snudde brøken $N/n$ — og at det er over 1 burde alene avsløre at brøken står feil vei.",
    },
    {
      question: "I hvilken rekkefølge settes nøklene inn under en rehashing?",
      options: ["Venstre mot høyre i det gamle arrayet", "Sortert stigende etter nøkkelverdi", "I den rekkefølgen de opprinnelig ble satt inn", "Etter synkende antall prøver ved forrige innsetting"],
      explanation: "Løkka går over indeksene i det gamle arrayet, så rekkefølgen følger plasseringene der. Den opprinnelige innsettingsrekkefølgen er ikke lagret noe sted, og rekkefølgen bør oppgis som en antagelse i en håndkjøring.",
    },
    {
      question: "Hva er forskjellen på et hashmap og et hash-set?",
      options: ["Hashmap lagrer nøkkel og verdi, hash-set bare nøkler", "Hashmap er sortert, hash-set er usortert internt", "Hashmap bruker probing, hash-set bruker kjeding", "Hashmap er $O(1)$ forventet, hash-set er $O(\\log n)$"],
      explanation: "Begge bygger på samme hashtabell og har samme kjøretider; forskjellen er kun hva som lagres. Hash-set svarer på «finnes denne?», hashmap på «hvilken verdi hører til denne?».",
    },
    {
      question: "Når er sortér-og-skann det riktige svaret fremfor hash-set?",
      options: ["Når oppgaven krever en garantert kjøretid", "Når elementene er heltall i et kjent verdiområde", "Når antall elementer er svært stort", "Når det finnes mange duplikater blant elementene"],
      explanation: "Hash-set gir $O(n)$ forventet, men $O(n^2)$ i verste tilfelle, mens flettesortering gir $O(n \\log n)$ garantert i alle tilfeller. Ber oppgaven om en garanti, er den tregere løsningen den riktige.",
    },
    {
      question: "En hashtabell med $N = 7$ og nøklene 15, 22, 8, 29 rehashes til $N = 14$. Hva blir $h(22)$?",
      options: ["8", "1", "22", "2"],
      explanation: "$22 = 1 \\cdot 14 + 8$, så resten er 8. Svaret 1 er den gamle hashverdien med $N = 7$ — nettopp den fella rehashing handler om, siden alle hashverdiene endrer seg med $N$.",
    },
    {
      question: "Hva er amortisert analyse i IN2010-sammenheng?",
      options: ["Et begrep som nevnes for å avgrenses bort fra pensum", "Metoden du skal bruke for å analysere rehashing på eksamen", "Et krav i alle Del 2-oppgaver om hashtabeller", "En variant av løkketelling for rekursive algoritmer"],
      explanation: "Metoden forklarer hvorfor doblinger ikke ødelegger $O(1)$ per innsetting, men du blir aldri bedt om å gjennomføre en slik analyse. Konklusjonen — at $n$ innsettinger med dobling koster $O(n)$ totalt — er derimot verdt å kunne.",
    },
  ],
  'in2010-3-3': [
    {
      question: "$N = 7$. Sett inn 14, 21, 28. Hva blir tabellen?",
      options: ["`14, 21, 28, _, _, _, _`", "`_, 14, 21, 28, _, _, _`", "`14, _, 21, _, 28, _, _`", "`_, _, 14, 21, 28, _, _`"],
      explanation: "Alle tre er multipler av 7, så alle hasher til plass 0, og klyngen bygges fra plass 0 og utover. Distraktorene svarer til å starte klyngen på plass 1 eller 2, eller til å hoppe over plasser i probingen.",
    },
    {
      question: "$N = 10$, tabellen har 19 på plass 9. Hvor havner 29?",
      options: ["Plass 0", "Plass 10", "Plass 8", "Innsettingen mislykkes"],
      explanation: "$29 \\bmod 10 = 9$, plassen er opptatt, og $(9+1) \\bmod 10 = 0$. Svaret «plass 10» er felle #11 — en indeks utenfor det gyldige området $0$ til $N-1$.",
    },
    {
      question: "Hvilken kontroll avslører at du har glemt `mod N` i en håndkjøring?",
      options: ["Om noen indeks i sporingen er større enn $N-1$", "Om antall nøkler stemmer med antall utdelte nøkler", "Om load-faktoren har blitt større enn 1", "Om noen plass i tabellen står tom til slutt"],
      explanation: "Uten `mod N` løper indeksen ut av arrayet så snart en klynge når enden, og det ser du direkte i sporingen. Kontrollen med antall nøkler avslører den andre halvdelen av felle #11, nemlig manglende overskriving.",
    },
    {
      question: "Hvilken kontroll avslører at du har duplisert en nøkkel?",
      options: ["Om antall nøkler i tabellen er flere enn antall ulike nøkler", "Om noen indeks i sporingen er større enn $N-1$", "Om klyngen strekker seg over kanten av tabellen", "Om load-faktoren er høyere enn terskelen for rehashing"],
      explanation: "En hashtabell skal ha hver nøkkel nøyaktig én gang, så fikk du fire nøkler hvorav to like, skal det stå tre i tabellen. Kontrollen med indeks over $N-1$ fanger den andre halvdelen av felle #11.",
    },
    {
      question: "$N = 9$. Tabellen inneholder 21 på plass 3. Du setter inn 21 igjen. Hva skjer?",
      options: ["21 skrives over på plass 3, tabellen er uendret", "En ny 21-er legges på første ledige plass etter 3", "Innsettingen avvises og tabellen står urørt", "21 flyttes til plassen som svarer til $h(21)$"],
      explanation: "Løkkebetingelsen `T[i] er ikke tom and T[i] er ulik k` blir usann i andre ledd med én gang, så løkka stopper og verdien skrives over. Å legge inn en ny kopi er andre halvdel av felle #11 og gir en utilgjengelig duplikat.",
    },
    {
      question: "Hva er første steg i håndkjøringsoppskriften etter at du har tegnet tabellen?",
      options: ["Regne ut $h(k)$ for alle nøklene før du setter inn noe", "Sette inn den første nøkkelen på plassen dens", "Regne ut load-faktoren for den ferdige tabellen", "Bestemme om tabellen må rehashes underveis"],
      explanation: "Å regne ut alle hashverdiene i en egen linje først fjerner de fleste regnefeilene og gir et regnestykke å kontrollere mot etterpå. Det er det enkleste enkeltgrepet i hele kapitlet.",
    },
    {
      question: "$N = 13$, fem nøkler satt inn, alle med $h(k) = 1$. Hva er $\\alpha$?",
      options: ["Omtrent 0,385", "Omtrent 0,714", "1,0", "Omtrent 2,6"],
      explanation: "$\\alpha = n/N = 5/13 \\approx 0{,}385$ — tabellen er under halvfull. At kostnaden likevel blir 15 prøver viser at load-faktoren ikke sier noe om hvordan nøklene ligger.",
    },
    {
      question: "En tabell er under halvfull, men alle innsettinger kostet mange prøver. Hva er årsaken?",
      options: ["Hashfunksjonen gir samme verdi for mange av nøklene", "Tabellen burde vært rehashet til dobbel størrelse", "Probing-sekvensen mangler wraparound med `mod N`", "Load-faktoren har passert terskelen for utvidelse"],
      explanation: "Klyngedannelse skyldes at nøklene hasher til samme sted, ikke at det er for lite plass. En større tabell ville gitt samme problem, så løsningen er en bedre hashfunksjon.",
    },
    {
      question: "Hvordan skal sluttilstanden leveres på en sjanger E-oppgave?",
      options: ["Hele tabellen med tomme plasser markert", "Bare de plassene som fikk en nøkkel", "Nøklene i den rekkefølgen de ble satt inn", "Antall prøver per nøkkel og til slutt totalen"],
      explanation: "De tomme plassene er en del av svaret, fordi de viser at probing-sekvensen ble fulgt riktig. Å bare liste nøklene er felle #11 og gir sterkt redusert uttelling.",
    },
    {
      question: "Hvorfor står telleren `antall < N` i `Contains`?",
      options: ["For at søket skal terminere i en full tabell", "For at søket ikke skal gå utenfor arrayet", "For at kjøretiden skal bli $O(1)$ forventet", "For at slettede plasser skal hoppes over"],
      explanation: "Er ingen plass tom, blir løkkas første betingelse aldri usann, og probingen går rundt i ring for alltid. Sensor gir eksplisitt delpoeng for å ha håndtert dette kanttilfellet.",
    },
    {
      question: "Hva skjer hvis du kaller `Insert` på en helt full tabell med en ny nøkkel?",
      options: ["Løkka terminerer ikke — prebetingelsen er brutt", "Nøkkelen overskriver den første plassen i sekvensen", "Tabellen rehashes automatisk til dobbel størrelse", "Prosedyren returnerer uten å endre tabellen"],
      explanation: "Ingen plass er tom og ingen inneholder nøkkelen, så løkkebetingelsen forblir sann i det uendelige. Prosedyren er korrekt gitt sin prebetingelse «tabellen er ikke full» — en robust implementasjon rehasher før den fylles opp.",
    },
    {
      question: "Er `if i == N: i = 0` en akseptabel erstatning for `i = (i + 1) mod N`?",
      options: ["Ja — den gjør det samme og er like presis", "Nei — sensor krever den nøyaktige modulo-formen", "Nei — den håndterer ikke klynger over kanten", "Ja — men bare når tabellstørrelsen er et primtall"],
      explanation: "Kravet er at løsningen er lett forståelig, entydig og presis — ikke at den ser ut som en bestemt fasit. En besvarelse skal ikke trekkes for en korrekt, men mer omstendelig, formulering.",
    },
    {
      question: "$N = 9$, tabellen er `18, 27, _, _, 4, 13, 22, _, _`. Søk etter 31 — hvor mange plasser prøves?",
      options: ["Fire", "To", "Én", "Fem"],
      explanation: "$31 \\bmod 9 = 4$, og sekvensen 4, 5, 6, 7 stopper på plass 7, som er tom, med svaret «ikke funnet». Et mislykket søk koster like mye som veien fra $h(k)$ til første tomme plass.",
    },
    {
      question: "Samme tabell. Søk etter 8 — hvor mange plasser prøves?",
      options: ["Én", "To", "Fire", "Ni"],
      explanation: "$8 \\bmod 9 = 8$, og plass 8 er tom med én gang, så søket avsluttes umiddelbart. Kostnaden ved et mislykket søk avhenger helt av om du starter inne i en klynge eller utenfor.",
    },
    {
      question: "Hvilke to detaljer i `Insert`-løkka trekker sensor for hvis de mangler?",
      options: ["`mod N` i oppdateringen og sjekken for lik nøkkel", "Startverdien `k mod N` og returverdien fra prosedyren", "Antagelsene om representasjon og kjøretidsanslaget", "Løkketypen `while` og tilordningen `T[i] = k`"],
      explanation: "Begge sitter i `while`-linja og utgjør hver sin halvdel av felle #11 — probing utenfor $0$ til $N-1$, og duplisering av en nøkkel som allerede finnes. De to er de dyreste enkeltfeilene i hele Del 3.",
    },
    {
      question: "Hvilken kjøretid skal oppgis for `Insert` i en hashtabell?",
      options: ["$O(1)$ forventet og $O(n)$ verste", "$O(1)$ i alle tilfeller, uten forbehold", "$O(\\log n)$ forventet og $O(n)$ verste", "$O(n)$ forventet og $O(n^2)$ verste"],
      explanation: "Kostnaden er lengden på probing-sekvensen, og den er kort når nøklene sprer seg og lang når de klumper seg. Å skrive $O(1)$ uten «forventet» er en kjøretid som ikke matcher algoritmen, og det trekkes det for.",
    },
    {
      question: "Fire nøkler ligger på rad i tabellen, hver på sin egen hashverdi. Er det en klynge?",
      options: ["Nei — ingen av dem er forskjøvet fra plassen sin", "Ja — fire fylte plasser på rad er per definisjon en klynge", "Ja — men bare hvis tabellen er mer enn halvfull", "Nei — en klynge må strekke seg over kanten av tabellen"],
      explanation: "En klynge består av nøkler som har blitt forskjøvet fordi plassen deres var opptatt, og kostnaden her var én prøve per innsetting. Sluttilstanden ser lik ut som en ekte klynge, men kostnaden gjør det ikke.",
    },
    {
      question: "Hva kan du få uttelling for selv om håndkjøringen din blir feil?",
      options: ["Pseudokoden, kjøretiden og load-faktoren i de andre deloppgavene", "Ingenting — deloppgavene bygger på hverandre i denne sjangeren", "Bare hashverdiene, som teller som halve håndkjøringspoenget", "Bare probing-sekvensen, som erstatter sluttilstanden"],
      explanation: "Delmomentene i en hashing-oppgave er uavhengige: pseudokode og kjøretid kan være riktige selv om tabellen er feil. Derfor skal ingen deloppgave stå tom, og derfor er det verdt å notere probing-sekvensen underveis.",
    },
  ],
  'in2010-3-4': [
    {
      question: "Hva returnerer binærsøket som er pensum i IN2010?",
      options: ["Sant eller usant", "Indeksen til verdien", "Antall sammenligninger", "Verdien selv, eller null"],
      explanation: "Pensums variant er en medlemskapstest. Vil du ha indeksen, må `return sant` endres til `return midt` — og modifikasjonen må nevnes, ellers er det felle #4 som gir eksplisitt trekk.",
    },
    {
      question: "Hva er binærsøkets kjøretid på et sortert array med $n$ elementer?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(1)$"],
      explanation: "Hver runde halverer søkeintervallet, så antall runder er antall halveringer fra $n$ ned til 1. Kontrollen er at én dobling av $n$ gir nøyaktig én ekstra sammenligning.",
    },
    {
      question: "Hvorfor er binærsøk raskere på et array enn på en lenket liste?",
      options: ["Fordi arrayet gir direkte indeksering til midtelementet", "Fordi arrayet alltid er sortert, mens lista ikke er det", "Fordi lista bruker mer minne per element enn arrayet", "Fordi lista må sorteres på nytt før hvert enkelt søk"],
      explanation: "Å nå midten i et array er $O(1)$, mens en lenket liste krever at du følger pekere fra starten, altså $O(n)$. Da forsvinner hele fordelen ved halveringen, og søket blir like tregt som et lineært søk.",
    },
    {
      question: "Når konkluderer binærsøk at verdien ikke finnes?",
      options: ["Når `lav > hoy`, altså når intervallet er tomt", "Når det har sammenlignet med alle elementene i arrayet", "Når `midt` når enten første eller siste indeks", "Når `A[midt]` er større enn verdien det letes etter"],
      explanation: "Algoritmen har ikke sett på alle elementene — den har utelukket dem, og et tomt intervall betyr at verdien ikke kan ligge noe sted. Det er nettopp denne utelukkingen som gir $O(\\log n)$ i stedet for $O(n)$.",
    },
    {
      question: "Usortert array med $n$ heltall. Hva er lavest mulig kjøretid for å finne et duplikat?",
      options: ["$O(n)$ forventet, med et hash-set over elementene", "$O(n \\log n)$, ved å sortere og skanne", "$O(n^2)$, ved å sammenligne alle par", "$O(\\log n)$, ved binærsøk etter hvert element"],
      explanation: "Ett gjennomløp med $O(1)$ forventet oppslag gir lineær forventet kjøretid, og $O(n)$ er samtidig nedre grense siden hvert element må leses minst én gang. De to neste alternativene er korrekte løsninger, men lavere i poengtrappen.",
    },
    {
      question: "Hvorfor står ordet «forventet» i kjøretiden til en hash-basert løsning?",
      options: ["Fordi verste tilfelle er $O(n^2)$ når alt kolliderer", "Fordi hashfunksjonen velges tilfeldig ved hver kjøring", "Fordi kjøretiden avhenger av hvor stor tabellen er", "Fordi løsningen bare virker på heltall og ikke på tekst"],
      explanation: "Kolliderer alle nøklene, koster hvert oppslag $O(n)$, og med $n$ runder blir totalen kvadratisk — like dårlig som en dobbel løkke. Kjøretiden må matche algoritmen, og et manglende forbehold gir trekk.",
    },
    {
      question: "I parsøket med hash-set: hvorfor må oppslaget komme før innsettingen?",
      options: ["Ellers kan et element bli paret med seg selv i settet", "Ellers blir kjøretiden $O(n^2)$ i stedet for $O(n)$", "Ellers vil settet vokse ut over $n$ elementer", "Ellers finner algoritmen paret to ganger på rad"],
      explanation: "Med $x = 10$ og `A[i] = 5` ville et sett som allerede inneholder 5-eren gi et falskt treff på komplementet. Slår du opp først, inneholder settet bare elementer med lavere indeks.",
    },
    {
      question: "Sortert array. Hva er beste kjøretid for å finne to elementer som summerer til $x$?",
      options: ["$O(n)$ garantert, med to pekere fra hver sin ende", "$O(n)$ forventet, med et hash-set", "$O(n \\log n)$, ved binærsøk etter hvert komplement", "$O(n^2)$, ved å sjekke alle par systematisk"],
      explanation: "To pekere utnytter sorteringen og gir lineær kjøretid uten hashingens verstetilfelle. Hash-settet virker også, men dets $O(n)$ er bare forventet — på et sortert array er to pekere strengt bedre.",
    },
    {
      question: "Hva er argumentet for at to-peker-teknikken er korrekt?",
      options: ["Hver flytting utelukker alle par den pekeren kunne inngått i", "Pekerne møtes alltid nøyaktig i midten av arrayet", "Summen av de to pekerne er monotont voksende", "Hvert element blir sammenlignet med alle de andre"],
      explanation: "Er summen for liten, er `A[j]` allerede den største muligheten for `A[i]`, så `A[i]` kan ikke inngå i noe par i intervallet. Hver flytting fjerner dermed en hel rad av kandidater, og $n$ steg holder i stedet for $n^2$.",
    },
    {
      question: "Hvor mange steg bruker to-peker-teknikken i verste tilfelle?",
      options: ["Høyst $n$ — hvert steg flytter én peker", "Høyst $n^2$ — alle par må sjekkes", "Høyst $\\log n$ — intervallet halveres hvert steg", "Høyst $n \\log n$ — sorteringen dominerer"],
      explanation: "Pekerne starter i hver sin ende og beveger seg bare mot hverandre, så de kan til sammen flytte høyst $n$ ganger før de møtes. Sorteringen er ikke med i regnestykket når arrayet allerede er sortert.",
    },
    {
      question: "Hva er galt med å foreslå radix sort i «sortér og skann» på et generelt array?",
      options: ["Radix krever heltall med kjent, begrenset antall siffer", "Radix er ustabil og ødelegger rekkefølgen mellom like nøkler", "Radix er $O(n \\log n)$ og gir ingen forbedring her", "Radix kan ikke brukes sammen med en etterfølgende skanning"],
      explanation: "Uten et kjent verdiområde er ikke antall siffer en konstant, og kjøretiden $O(d(n+k))$ er ikke lineær. Dette er felle #5 — en lineær løsning som bryter forutsetningen sin, står utenfor poengtrappen og ikke øverst i den.",
    },
    {
      question: "Du skal gjøre ETT oppslag i et usortert array. Hva er beste strategi?",
      options: ["Lineært søk gjennom arrayet, $O(n)$", "Sortér først og binærsøk, $O(n \\log n)$", "Bygg et hash-set og slå opp, $O(n)$ forventet", "Binærsøk direkte, $O(\\log n)$"],
      explanation: "Du må lese hvert element i verste fall, så $O(n)$ er nedre grense og lineært søk treffer den. Sortering og hash-bygging lønner seg først når du skal gjøre mange oppslag i det samme arrayet.",
    },
    {
      question: "Oppgaven krever en GARANTERT kjøretid for duplikatsøk i et usortert array. Hva velger du?",
      options: ["Sortér med flettesortering og skann, $O(n \\log n)$", "Hash-set, $O(n)$ forventet og raskest i praksis", "Dobbel løkke, $O(n^2)$ men helt forutsigbar", "Binærsøk etter hvert element, $O(n \\log n)$"],
      explanation: "Hash-løsningen er $O(n^2)$ i verste tilfelle og gir derfor ingen garanti, mens flettesortering er $O(n \\log n)$ i alle tilfeller. Kravet om garanti gjør den asymptotisk tregere løsningen til den riktige.",
    },
    {
      question: "Hvilken setning løfter et Del 2-svar på en søkeoppgave?",
      options: ["At $O(n)$ er lavest mulig fordi hvert element må leses", "At algoritmen er testet på flere ulike inputarrayer", "At pseudokoden følger nøyaktig samme form som i pensum", "At løsningen bruker minst mulig ekstra minne underveis"],
      explanation: "Sensor ser etter at kandidaten vet at hun har truffet bunnen av poengtrappen, og begrunnelsen er kort: et element du aldri leste, kunne vært svaret. Minnebruk er relevant i en drøftingsoppgave, men det er ikke det poengtrappen måler.",
    },
  ],
  'in2010-4-1': [
    {
      question: "Hva krever BST-egenskapen av en node `v`?",
      options: ["At alle verdier i venstre subtre er mindre enn `v.x`, og alle i høyre er større", "At venstre barn er mindre enn `v.x`, og at høyre barn er større enn `v.x`", "At `v.x` er mindre enn begge barna, uten noen ordning mellom søsknene", "At nodene på hvert nivå står i stigende rekkefølge fra venstre mot høyre"],
      explanation: "Kravet gjelder **hele** subtreet, ikke bare de to barna — det er nettopp derfor `checkBST` i kapittel 4.2 må sende et intervall nedover. Alternativet med bare barna er nær-sant og fanger den som husker regelen halvveis; alternativet om forelder mindre enn begge barna er heap-egenskapen, altså felle #9.",
    },
    {
      question: "Hva gir in-order-traversering av et gyldig binært søketre?",
      options: ["Verdiene i stigende rekkefølge", "Verdiene i innsettingsrekkefølge", "Verdiene nivå for nivå ovenfra", "Verdiene i synkende rekkefølge"],
      explanation: "In-order behandler venstre subtre, så noden, så høyre subtre, og BST-egenskapen gjør nettopp den rekkefølgen sortert. Innsettingsrekkefølgen får du derimot ut av pre-order, som starter med rota — det er den vanligste forvekslingen på dette punktet.",
    },
    {
      question: "Hva er kjøretiden til et søk i et binært søketre med $n$ noder?",
      options: ["$O(h)$, der $h$ er høyden på treet", "$O(\\log n)$, uansett formen på treet", "$O(n)$, siden hele treet må sjekkes", "$O(1)$ forventet og $O(n)$ i verste tilfelle"],
      explanation: "Søket går ett nivå ned per sammenligning, så kostnaden er høyden. $O(\\log n)$ gjelder bare hvis treet er balansert, og et vanlig BST har ingen slik garanti — å skrive det uten forbehold er felle #10. Det siste alternativet er hashtabellens kjøretid, ikke søketreets.",
    },
    {
      question: "Du setter inn 1, 2, 3, 4 og 5 i denne rekkefølgen i et tomt BST. Hva blir høyden, målt i kanter?",
      options: ["4", "2", "3", "5"],
      explanation: "Hver ny verdi er større enn alle de foregående og havner lengst til høyre, så treet blir en kjede med $h = n - 1 = 4$. Svaret 2 er høyden et balansert tre med fem noder ville hatt, og 5 er antall noder — ikke antall kanter.",
    },
    {
      question: "Hvilken traversering skriver rotverdien **sist**?",
      options: ["Post-order", "Pre-order", "In-order", "Ingen av dem"],
      explanation: "Post-order behandler begge subtrærne før noden selv, så rota kommer helt til slutt. Pre-order gir rota først, og in-order gir den et sted på midten — hvor, avhenger av hvor mange verdier som er mindre enn rotverdien.",
    },
    {
      question: "Hvor ligger den minste verdien i et binært søketre?",
      options: ["Så langt til venstre som mulig fra rota", "I den nederste bladnoden lengst til venstre", "I rota, hvis treet er balansert", "Så langt til høyre som mulig fra rota"],
      explanation: "`Min` går til venstre til `v.left` er `nil`, og den noden kan godt ha et **høyre** barn — den trenger altså ikke å være en bladnode, og den trenger ikke å ligge nederst. Det er den nære distraktoren her, og den fanger den som husker retningen, men ikke stoppkriteriet.",
    },
    {
      question: "En node med to barn skal slettes. Hvilken verdi tar over plassen?",
      options: ["Den minste verdien i høyre subtre", "Den største verdien i høyre subtre", "Den minste verdien i venstre subtre", "Verdien i venstre barn av noden"],
      explanation: "Erstatteren er in-order-etterfølgeren, altså `Min(v.right)`: den er større enn alt i venstre subtre og mindre enn alt annet i høyre, så BST-egenskapen holder etter byttet. Den største i **venstre** subtre ville også fungert (in-order-forgjengeren), men de to andre alternativene bryter ordningen umiddelbart.",
    },
    {
      question: "Hva har in-order-etterfølgeren til en node med to barn aldri?",
      options: ["Et venstre barn", "Et høyre barn", "En forelder", "En verdi"],
      explanation: "Etterfølgeren er den minste verdien i høyre subtre, og den er funnet ved å gå til venstre til det ikke går lenger — så `v.left` er `nil`. Den kan derimot godt ha et høyre barn, og det er nettopp derfor slettingen av den selv alltid faller i tilfelle bladnode eller ett barn.",
    },
    {
      question: "Hva er kjøretiden til `InOrder` på et tre med $n$ noder?",
      options: ["$O(n)$", "$O(h)$", "$O(\\log n)$", "$O(n \\log n)$"],
      explanation: "Hver node besøkes nøyaktig én gang, og arbeidet per node er konstant utenom rekursjonen. Høyden er ikke med i uttrykket i det hele tatt: en full traversering må uansett innom alt, uansett hvor pent eller skjevt treet er.",
    },
    {
      question: "Hva er rotverdien i et binært søketre der ingenting er slettet?",
      options: ["Den første verdien som ble satt inn", "Den sist innsatte verdien i treet", "Medianen av alle verdiene i treet", "Den minste verdien i hele treet"],
      explanation: "Innsetting henger nye noder nederst og flytter aldri en eksisterende node, så rota står urørt. Etter en **sletting** av rota kan verdien endre seg, fordi in-order-etterfølgeren kopieres inn — derfor forbeholdet i spørsmålet.",
    },
    {
      question: "Hvilket av disse utsagnene er **sant**?",
      options: ["In-order-utskriften av et gyldig søketre er alltid sortert", "Et binært søketre er også alltid en gyldig min-heap", "Et søk i et binært søketre koster alltid $O(\\log n)$", "Rotverdien i et binært søketre er alltid den minste"],
      explanation: "Bare det første følger av BST-egenskapen. De tre andre er de faste fellene: å blande BST-ordningen med heap-ordningen er felle #9, $O(\\log n)$ forutsetter balanse, og «minst i rota» er igjen heap-tenkning — i et søketre ligger den minste verdien lengst til venstre.",
    },
    {
      question: "Et tre består av én eneste node. Hva er høyden, når høyde måles i kanter?",
      options: ["0", "1", "$-1$", "2"],
      explanation: "Høyden er antall kanter på den lengste stien fra rota ned til en bladnode, og her finnes ingen kanter. Svaret $-1$ er konvensjonen for et **tomt** tre, og 1 er svaret du får hvis du teller noder i stedet for kanter — oppgi hvilken konvensjon du bruker hvis oppgaven ikke sier det.",
    },
    {
      question: "Hvor mange sammenligninger kan et søk i et tre med høyde $h$ kreve?",
      options: ["Høyst $h + 1$", "Høyst $h$", "Høyst $2h$", "Nøyaktig $h$"],
      explanation: "Søket gjør høyst én sammenligning per nivå, og et tre med høyde $h$ har $h + 1$ nivåer. Verdien ligger ikke nødvendigvis nederst, så «nøyaktig» er galt: et treff i rota koster én sammenligning uansett hvor høyt treet er.",
    },
    {
      question: "Hvor havner en ny verdi ved innsetting i et binært søketre?",
      options: ["Som en ny bladnode der søkeveien ender", "På den første ledige plassen ovenfra og fra venstre", "I rota, slik at de siste verdiene finnes raskest", "På plassen som holder treet balansert etter innsettingen"],
      explanation: "`Insert` følger nøyaktig samme sti som et søk ville gjort, og henger noden på der stien tar slutt — ingen eksisterende node flyttes. Det andre alternativet er heapens strukturkrav, og det siste er hva et AVL-tre i kapittel 4.3 gjør i tillegg, ikke hva et vanlig BST gjør.",
    },
    {
      question: "Hva skjer når en bladnode slettes fra et binært søketre?",
      options: ["Noden fjernes, og ingen andre noder berøres", "Barnet til noden løftes opp og tar dens plass", "Etterfølgeren kopieres inn og slettes lenger nede", "Hele subtreet under forelderen bygges opp på nytt"],
      explanation: "Bladnoden har ingen barn, så hullet trenger ikke å fylles av noe. De to neste alternativene er de to andre slettetilfellene — ett barn og to barn — og de er riktige svar på et annet spørsmål enn dette.",
    },
    {
      question: "Hva leverer du som sluttilstand når en håndkjøringsoppgave gjelder et binært søketre?",
      options: ["In-order-utskriften, gjerne sammen med rotverdien", "Hele arrayet, kommaseparert, med indeks fra 0", "Hele tabellen, med `_` på hver tomme plass", "Antall rotasjoner sammen med rotverdien til slutt"],
      explanation: "Hver struktur har sitt eget svarformat, og søketreets er in-order-utskriften — den er sortert, og den avslører umiddelbart om håndkjøringen er riktig. De tre andre er formatene for henholdsvis heap, hashtabell med lineær probing og AVL-tre.",
    },
  ],
  'in2010-4-2': [
    {
      question: "Hva er kjøretiden til et beskåret `InRange` i et balansert søketre?",
      options: ["$O(\\log n + t)$, der $t$ er antall treff", "$O(n)$, siden hele treet må traverseres", "$O(\\log n)$, uansett hvor mange treff", "$O(t)$, siden bare treffene blir besøkt"],
      explanation: "Algoritmen følger to søkeveier ned gjennom treet, $O(\\log n)$, og besøker ellers bare noder som skrives ut eller ligger mellom veiene, $O(t)$. $O(t)$ alene glemmer veien ned, og $O(\\log n)$ alene glemmer at treffene må skrives ut — begge er nær-sanne og fanger den som husker halve begrunnelsen.",
    },
    {
      question: "Når går `InRange(v, a, b)` ned i **venstre** subtre?",
      options: ["Bare hvis `a < v.x`", "Bare hvis `v.x < b`", "Bare hvis `a <= v.x and v.x <= b`", "Alltid, som i vanlig in-order"],
      explanation: "Er `v.x` mindre enn eller lik `a`, er alt i venstre subtre enda mindre, og grenen kan beskjæres. `v.x < b` er vakten foran **høyre** kall, og den tredje betingelsen er testen for om noden selv skal skrives ut — de tre `if`-ene er uavhengige av hverandre.",
    },
    {
      question: "En besvarelse løser intervalloppgaven med full in-order og en `if`-test på hver verdi. Hvordan vurderes den?",
      options: ["Korrekt, men $O(n)$ og typisk halv uttelling", "Gal, fordi utskriften ikke blir sortert", "Korrekt og $O(\\log n + t)$, som den beskårne", "Korrekt og full uttelling, siden svaret stemmer"],
      explanation: "Løsningen gir riktig svar, men bruker ikke ordningen i treet, og poengtrappen straffer nettopp det: lavere kjøretid er mer poenggivende på samme oppgave. Dette er felle #1 i bokas feilregister, og den er farlig fordi besvarelsen ser helt riktig ut.",
    },
    {
      question: "Hvor lang er den lengste stien som har noden `v` som toppunkt?",
      options: ["$h_L + h_R + 2$", "$h_L + h_R + 1$", "$h_L + h_R$", "$\\max(h_L, h_R) + 1$"],
      explanation: "Stien går ned i venstre subtre, gjennom `v`, og ned i høyre, og de to ekstra kantene er kantene fra `v` til hvert av barna. Det siste alternativet er formelen for **høyden** til noden, ikke for stien gjennom den — de to blandes lett, fordi begge regnes ut i samme kall.",
    },
    {
      question: "Hvilken høyde har et tomt subtre, i konvensjonen diameter-algoritmen bruker?",
      options: ["$-1$", "$0$", "$1$", "Udefinert"],
      explanation: "Bladnoder har høyde $0$, og tomme subtrær $-1$. Konvensjonen er ikke pynt: den er det som gjør at $h_L + h_R + 2$ stemmer også når en node mangler et barn — med $0$ for tomt subtre blir hver kandidatverdi systematisk for stor.",
    },
    {
      question: "Hva blir kjøretiden hvis du regner ut diameteren ved å kalle en høydefunksjon på nytt i hver node?",
      options: ["$O(n^2)$", "$O(n \\log n)$", "$O(n)$", "$O(h)$"],
      explanation: "Hvert høydekall koster $O(\\text{størrelsen på subtreet})$, og gjentas i alle $n$ noder. Svaret blir riktig, men prisen er kvadratisk — felle #2 — mens den lineære varianten gjør nøyaktig ett høydekall per node totalt.",
    },
    {
      question: "Hvorfor holdes den største stien i en egen variabel i stedet for å returneres fra rota?",
      options: ["Fordi den lengste stien ikke må gå gjennom rota", "Fordi en rekursiv prosedyre bare kan returnere ett tall", "Fordi høyden må regnes ut på nytt i hver node", "Fordi post-order-rekkefølgen ellers ville blitt feil"],
      explanation: "Den lengste stien kan ligge helt inne i ett subtre, langt fra toppen, så alle noder må prøves som toppunkt. Returverdien er reservert til høyden, som forelderen trenger — men det er en praktisk fordeling, ikke en begrensning i pseudokoden.",
    },
    {
      question: "I hvilken rekkefølge behandler diameter-algoritmen nodene?",
      options: ["Post-order", "Pre-order", "In-order", "Nivåorden"],
      explanation: "Begge barna må være ferdige før noden kan regne ut $h_L + h_R + 2$, og det er nøyaktig post-order. Rekkefølgen er ikke en stilistisk detalj: den er den eneste der begge høydene finnes når du trenger dem.",
    },
    {
      question: "Hva er kjøretiden til `LCA` i et binært søketre?",
      options: ["$O(h)$", "$O(n)$", "$O(\\log n)$ uansett", "$O(h^2)$"],
      explanation: "Løkka går ett nivå ned per runde og aldri opp igjen, så kostnaden er høyden. $O(\\log n)$ gjelder bare hvis treet er balansert — på et degenerert tre er $h = n - 1$, og da er også `LCA` lineær.",
    },
    {
      question: "Når stopper `LCA`-løkka i et binært søketre?",
      options: ["Når den ene verdien er mindre og den andre større", "Når begge verdiene er mindre enn noden du står i", "Når noden du står i, er en bladnode i treet", "Når begge verdiene er funnet hver for seg i treet"],
      explanation: "Så lenge begge ligger på samme side, kan ikke noden være den nærmeste felles forfaren; første gang de skiller lag, er den det. Tilfellet der noden **er** en av verdiene, dekkes av den samme `else`-grenen, fordi en node regnes som sin egen forfar.",
    },
    {
      question: "Hva skjer med intervallet i `CheckBST` når rekursjonen går til venstre?",
      options: ["Noden blir det nye taket, `high`", "Noden blir det nye gulvet, `low`", "Intervallet sendes uendret nedover", "Begge grensene settes til nodens verdi"],
      explanation: "Alt i venstre subtre må være mindre enn noden, så nodens verdi blir den nye øvre grensen; går du til høyre, blir den den nye nedre grensen. Å sende intervallet uendret ville gjort testen like svak som en ren barn-mot-forelder-sjekk.",
    },
    {
      question: "Hvorfor er det utilstrekkelig å sjekke hver node bare mot sine to barn?",
      options: ["Fordi kravet gjelder alle verdier i subtreet", "Fordi metoden ikke oppdager duplikater i treet", "Fordi metoden ikke virker på et degenerert tre", "Fordi metoden forutsetter at treet er balansert"],
      explanation: "En node kan være riktig plassert i forhold til sin egen forelder og likevel bryte et krav som stammer fra en forfar høyere opp — det er nettopp det eksempelet med 55 i venstre subtre til 50 viser. Intervallmetoden fanger slike brudd fordi kravet fra rota fortsatt ligger i `high`.",
    },
    {
      question: "Hvor mye minne bruker en rekursiv tre-algoritme, utenom selve treet?",
      options: ["$O(h)$, som blir $O(n)$ på et skjevt tre", "$O(\\log n)$, uansett formen på treet", "$O(1)$, siden ingenting lagres underveis", "$O(n)$, uansett formen på treet"],
      explanation: "Kallstakken blir like dyp som treet, altså $O(h)$. På et balansert tre er det $O(\\log n)$ og ufarlig, men på et degenerert tre blir det $O(n)$ — å nevne dette er et sikkert delpoeng i en Del 2-besvarelse.",
    },
    {
      question: "Hva sier poengtrappen på en Del 2-oppgave?",
      options: ["Lavere kjøretid gir mer poeng på samme oppgave", "Lengre og mer detaljert svar gir mer poeng", "Bare feilfri pseudokode gir poeng på oppgaven", "Kjøretiden teller bare når oppgaven ber om den"],
      explanation: "Sensurgrunnlaget sier det ofte rett ut: $O(n)$ gir full pott, $O(n \\log n)$ mindre og $O(n^2)$ minst, på **samme** oppgave. Kjøretiden skal alltid oppgis og skal matche algoritmen du faktisk ga — det trekkes både for manglende og for feil kompleksitet.",
    },
  ],
  'in2010-4-3': [
    {
      question: "Hva er balansefaktoren til en node i et AVL-tre?",
      options: ["Høyden på venstre subtre minus høyden på høyre subtre", "Antall noder i venstre subtre minus antall noder i høyre", "Høyden på høyre subtre minus dybden til noden selv", "Dybden til noden minus høyden på hele treet"],
      explanation: "Balansefaktoren måler **høyder**, ikke antall noder. Nodetellings-alternativet er den vanligste forvekslingen: to subtrær kan ha svært ulikt antall noder og likevel samme høyde, og da er AVL-kravet oppfylt.",
    },
    {
      question: "Hvilken høyde har et tomt subtre og en bladnode når balansefaktoren regnes ut?",
      options: ["Tomt subtre har høyde $-1$, og et blad har høyde $0$", "Tomt subtre har høyde $0$, og et blad har høyde $1$", "Tomt subtre har høyde $0$, og et blad har høyde $0$", "Tomt subtre har høyde $1$, og et blad har høyde $-1$"],
      explanation: "Konvensjonen $-1$ for tomt og $0$ for blad gjør at en node med ett bladbarn får balansefaktor $\\pm 1$, altså akkurat innenfor kravet. Regner du tomt subtre som $0$, får samme node balansefaktor $0$, og du oppdager aldri en ubalanse.",
    },
    {
      question: "En innsetting i et AVL-tre utløser en dobbelrotasjon. Hvor mange enkle rotasjoner skal du telle?",
      options: ["To, fordi en dobbelrotasjon består av to enkle rotasjoner", "Én, fordi hele rebalanseringen utføres i ett steg", "Tre, fordi tre noder bytter plass i operasjonen", "Null, fordi treet ble balansert uten rotasjon"],
      explanation: "En dobbelrotasjon er én rotasjon om barnet og deretter én om den ubalanserte noden. Spør oppgaven om antall **enkle** rotasjoner, teller den som 2. Alternativet «én» er den enkeltfeilen som koster flest poeng på AVL-håndkjøringer.",
    },
    {
      question: "Sett inn 10, 20 og 30 i denne rekkefølgen i et tomt AVL-tre. Hva blir svaret?",
      options: ["1 enkel rotasjon, og rotverdien blir 20", "2 enkle rotasjoner, og rotverdien blir 20", "1 enkel rotasjon, og rotverdien blir 30", "0 rotasjoner, og rotverdien blir 10"],
      explanation: "Nøklene stiger, så ubalansen i 10 er RR-tilfellet, og én enkel venstrerotasjon om 10 løfter 20 til rot. Alternativet med 2 rotasjoner hører til LR og RL; alternativet med 0 rotasjoner overser at balansefaktoren i 10 ble $-2$.",
    },
    {
      question: "Sett inn 30, 10 og 20 i denne rekkefølgen i et tomt AVL-tre. Hva blir svaret?",
      options: ["2 enkle rotasjoner, og rotverdien blir 20", "1 enkel rotasjon, og rotverdien blir 20", "1 enkel rotasjon, og rotverdien blir 10", "2 enkle rotasjoner, og rotverdien blir 30"],
      explanation: "20 havner i det indre subtreet, så dette er LR: først venstrerotasjon om 10, deretter høyrerotasjon om 30. Rotverdien blir 20 uansett, så det eneste som skiller riktig fra galt her, er om du teller dobbelrotasjonen som to eller som én.",
    },
    {
      question: "Sett inn 1, 2, 3, 4 og 5 i denne rekkefølgen i et tomt AVL-tre. Hvor mange enkle rotasjoner utføres totalt?",
      options: ["To — én ved innsetting av 3 og én ved innsetting av 5", "Fire — hver innsetting etter den andre utløser en rotasjon", "Én — bare den siste innsettingen bryter AVL-kravet", "Tre — to enkle rotasjoner og deretter én dobbel"],
      explanation: "3 gir RR i node 1, og 5 gir RR i node 3. Innsettingen av 4 gir balansefaktor $-1$ i rota, som er lovlig, så der skjer ingenting. Alternativet «fire» kommer av å tro at hver innsetting i en stigende rekke må rotere.",
    },
    {
      question: "Hva er høyden til et AVL-tre med $n$ noder, i verste tilfelle?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(1)$"],
      explanation: "Det minste antallet noder i et AVL-tre av høyde $h$ minst dobles for hver annen høyde, så $n \\ge 2^{h/2}$ og dermed $h \\le 2\\log_2 n$. Svaret $O(n)$ er høyden til et **ubalansert** søketre, og det er nettopp det AVL-kravet finnes for å hindre.",
    },
    {
      question: "Hva er verste kjøretid for søk i et AVL-tre, og hva er den i et vanlig binært søketre?",
      options: ["$O(\\log n)$ i AVL-treet og $O(n)$ i det vanlige søketreet", "$O(\\log n)$ i begge, siden begge er binære søketrær", "$O(n)$ i AVL-treet og $O(\\log n)$ i det vanlige søketreet", "$O(1)$ i AVL-treet og $O(\\log n)$ i det vanlige søketreet"],
      explanation: "Forskjellen ligger utelukkende i verste tilfelle: et vanlig søketre kan degenerere til en kjede med høyde $n-1$, mens AVL-kravet garanterer logaritmisk høyde. Alternativet «$O(\\log n)$ i begge» gjelder bare når det vanlige treet tilfeldigvis er balansert.",
    },
    {
      question: "Den nye nøkkelen havnet i høyre subtre til venstre barn av den ubalanserte noden. Hvilket tilfelle er dette?",
      options: ["LR — og det krever en dobbelrotasjon", "LL — og det krever en enkelrotasjon", "RL — og det krever en dobbelrotasjon", "RR — og det krever en enkelrotasjon"],
      explanation: "De to stegene fra den ubalanserte noden ned mot den nye nøkkelen er venstre, så høyre — altså LR. To **ulike** steg gir alltid dobbelrotasjon; to like steg gir enkelrotasjon. RL er speilbildet, med høyre først.",
    },
    {
      question: "Hvor mange rebalanseringer kan én innsetting i et AVL-tre utløse?",
      options: ["Høyst én, enten en enkel eller en dobbel rotasjon", "Én for hvert nivå på vei opp mot rota fra den nye noden", "Høyst to, én på hver side av den ubalanserte noden", "Like mange som treets høyde tilsier i verste tilfelle"],
      explanation: "Rotasjonen setter subtreets høyde tilbake til det den var før innsettingen, så ingen node lenger oppe merker at noe har skjedd. Du kan altså stoppe å lete etter at du har rettet den første ubalansen. Ved **sletting** gjelder ikke dette.",
    },
    {
      question: "Hva er høyden til et rød-svart-tre med $n$ noder, sammenlignet med et AVL-tre?",
      options: ["Begge er $O(\\log n)$, men rød-svart-treet er litt høyere i praksis", "Rød-svart-treet er $O(\\log n)$, mens AVL-treet er $O(n)$", "AVL-treet er $O(\\log n)$, mens rød-svart-treet er $O(n)$", "Begge er $O(n \\log n)$, fordi begge må rebalanseres"],
      explanation: "Fargeinvariantene sikrer at den lengste stien er høyst dobbelt så lang som den korteste, og det holder høyden på $O(\\log n)$. Forskjellen mellom de to strukturene er konstantfaktorer og antall rotasjoner, aldri $O$-klasse — påstander om ulik asymptotisk høyde er faste distraktorer.",
    },
    {
      question: "Hvilken av disse påstandene om AVL- og rød-svart-trær er sann?",
      options: ["Hvert AVL-tre kan fargelegges som et gyldig rød-svart-tre", "Hvert rød-svart-tre oppfyller også AVL-kravet om høydebalanse", "Et rød-svart-tre har alltid færre noder enn et AVL-tre", "Et AVL-tre må fargelegges før det kan brukes som søketre"],
      explanation: "AVL-kravet er strengere enn fargeinvariantene, så et høydebalansert tre kan alltid farges lovlig. Motsatt vei gjelder ikke: et rød-svart-tre får ha en lengste sti som er dobbelt så lang som den korteste, og det er skjevere enn AVL tillater.",
    },
    {
      question: "Hva består svaret på en AVL-håndkjøring av?",
      options: ["Antall enkle rotasjoner, rotverdien til slutt, og om treet er gyldig", "Bare tegningen av treet slik det ser ut etter siste innsetting", "Balansefaktoren til hver node, og hvilken node som ble rotert", "Innsettingsrekkefølgen, høyden til treet, og antall blader"],
      explanation: "Sensor ber om de tre linjene, og delvis riktig gir delvis uttelling — så la aldri en av dem stå tom. Et pent tegnet tre uten de tre svarene gir ikke poengene, selv om treet er helt riktig.",
    },
    {
      question: "Hva skjer med in-order-utskriften av et subtre når du utfører en enkelrotasjon?",
      options: ["Den er nøyaktig den samme før og etter rotasjonen", "Den snus, slik at nøklene kommer i synkende rekkefølge", "De to øverste nøklene bytter plass i utskriften", "Den blir usortert til høydene er oppdatert på nytt"],
      explanation: "En rotasjon flytter på formen, aldri på sorteringen — det er derfor resultatet fortsatt er et gyldig binært søketre. Bruk det som kontroll: skriv ut in-order til slutt, og se at alle nøklene er med i sortert rekkefølge.",
    },
  ],
  'in2010-4-4': [
    {
      question: "En min-heap ligger som array med indeks fra 0. Hvilken indeks har forelderen til indeks 6?",
      options: ["2, fordi forelderen til $i$ er $\\lfloor (i-1)/2 \\rfloor$", "3, fordi forelderen til $i$ er $\\lfloor i/2 \\rfloor$", "12, fordi forelderen til $i$ er $2i$ i denne formen", "5, fordi forelderen alltid ligger på indeks $i-1$"],
      explanation: "$\\lfloor (6-1)/2 \\rfloor = 2$. Alternativet 3 kommer fra 1-indekseringen, som brukes i mange andre framstillinger — og for partall $i$ gir de to konvensjonene forskjellig svar. IN2010 indekserer fra 0.",
    },
    {
      question: "En heap med 12 elementer ligger som array med indeks fra 0. Hvilke indekser har barna til indeks 4?",
      options: ["9 og 10, altså $2i+1$ og $2i+2$", "8 og 9, altså $2i$ og $2i+1$", "5 og 6, altså $i+1$ og $i+2$", "2 og 3, altså $i/2$ og deretter $i/2 + 1$"],
      explanation: "$2 \\cdot 4 + 1 = 9$ og $2 \\cdot 4 + 2 = 10$, og begge finnes siden $n = 12$. Alternativet 8 og 9 er 1-indekseringens formler, som forskyver hele treet ett hakk og gjør resten av håndkjøringen feil.",
    },
    {
      question: "Sett inn 7, 3, 9, 1 og 4 i denne rekkefølgen i en tom min-heap. Hva blir arrayet?",
      options: ["`1, 3, 9, 7, 4`", "`1, 3, 4, 7, 9`", "`1, 4, 3, 9, 7`", "`3, 1, 9, 7, 4`"],
      explanation: "Etter innsettingen av 1 stiger den fra indeks 3 helt til rota med to bytter, og 4 blir liggende der den landet fordi $4 > 3$. Alternativet med sortert array er fella: en heap er ordnet **oppover**, ikke bortover, og skal ikke være sortert.",
    },
    {
      question: "Utfør `RemoveMin` én gang på min-heapen `2, 5, 3, 9, 8, 4`. Hva blir arrayet?",
      options: ["`3, 5, 4, 9, 8`", "`5, 4, 3, 9, 8`", "`3, 4, 5, 8, 9`", "`4, 5, 3, 9, 8`"],
      explanation: "Det siste elementet 4 flyttes til rota, og synker deretter mot det **minste** barnet, som er 3. Alternativet `5, 4, 3, 9, 8` er resultatet av å bytte med venstre barn i stedet for det minste; det siste alternativet dropper down-heap helt.",
    },
    {
      question: "Hva koster det å gjøre et vilkårlig array om til en min-heap med `BuildHeap`?",
      options: ["$O(n)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Halvparten av nodene er blader og synker ikke i det hele tatt, en firedel synker høyst ett nivå, en åttedel høyst to — summen holder seg under $2n$. Svaret $O(n \\log n)$ er den hyppigste distraktoren i faget, og den kommer av å blande byggingen med heapsortens uthentingsfase.",
    },
    {
      question: "Hva koster det å finne det **største** elementet i en min-heap med $n$ elementer?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(1)$", "$O(n \\log n)$"],
      explanation: "Det største elementet ligger i et blad, men heap-egenskapen sier ikke hvilket, og bladene er omtrent halvparten av nodene. Svaret $O(\\log n)$ er en fast distraktor: strukturen som gjør minimum billig, gir ingen hjelp i motsatt retning.",
    },
    {
      question: "Blir en min-heap til en gyldig max-heap hvis du reverserer arrayet?",
      options: ["Nei — forelder–barn-forholdene snus ikke av å snu arrayet", "Ja — det største elementet havner på indeks 0", "Ja, men bare når antall elementer er et partall", "Nei — men det blir en gyldig min-heap på nytt"],
      explanation: "Reverseringen flytter riktignok det største elementet til indeks 0, men forelderen til indeks $i$ blir ikke barnet til den reverserte indeksen. Konkret: `5, 8, 6, 9, 12, 7, 10` reversert er `10, 7, 12, 9, 6, 8, 5`, der rota 10 har barnet 12.",
    },
    {
      question: "Mot hvilket barn synker et element under down-heap?",
      options: ["Mot det minste av de to barna", "Mot venstre barn, siden det står først i arrayet", "Mot det største av de to barna", "Mot det barnet som selv har flest barn"],
      explanation: "Bytter du med det største barnet, blir det du løftet opp større enn søskenet sitt, og du lager et nytt brudd rett under deg. Alternativet «venstre barn» er den vanligste feilen, fordi arrayet leses fra venstre — men det er verdien som bestemmer, ikke siden.",
    },
    {
      question: "Hvilken påstand om en min-heap er sann?",
      options: ["Venstre barn kan godt være større enn høyre barn", "Venstre barn er alltid mindre enn høyre barn", "Arrayet til en min-heap er alltid sortert stigende", "Det største elementet ligger alltid på siste indeks"],
      explanation: "Heap-egenskapen ordner **opp–ned** og sier ingenting om søsken. De tre andre påstandene forutsetter alle en sideveis ordning, som hører til søketreet — felle #9 i bokas feilregister.",
    },
    {
      question: "Hva er kjøretiden for `Insert` i en min-heap i verste tilfelle?",
      options: ["$O(\\log n)$", "$O(1)$", "$O(n)$", "$O(n \\log n)$"],
      explanation: "Elementet legges bakerst og stiger høyst ett nivå per bytte, og treet har $\\lfloor \\log_2 n \\rfloor$ nivåer over bunnen. $O(1)$ er **beste** tilfelle, når elementet allerede er større enn forelderen sin der det landet.",
    },
    {
      question: "Hva er kjøretiden for å lese det minste elementet i en min-heap uten å fjerne det?",
      options: ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n \\log n)$"],
      explanation: "Det minste ligger alltid på indeks 0, så det er ett oppslag. $O(\\log n)$ er kostnaden for å **fjerne** det, fordi heapen må repareres med down-heap etterpå — de to operasjonene forveksles ofte.",
    },
    {
      question: "Hvor stor andel av nodene i et komplett binært tre ligger på de to nederste nivåene?",
      options: ["Over halvparten — for $n = 15$ er det 12 av 15 noder", "Under halvparten — for $n = 15$ er det 6 av 15 noder", "Nøyaktig halvparten, uansett hvor mange noder treet har", "Omtrent en firedel, siden treet er komplett"],
      explanation: "Antall noder dobles for hvert nivå nedover, så det nederste nivået alene rommer omtrent halvparten. For $n = 15$ er indeks 3 til 6 (4 noder) og 7 til 14 (8 noder) til sammen 80 %. Denne fordelingen er hele grunnen til at `BuildHeap` er lineær.",
    },
    {
      question: "Er arrayet `1, 5, 3, 8, 6, 4, 2` en gyldig min-heap med indeks fra 0?",
      options: ["Nei — H[2] = 3 har barnet H[6] = 2, og 2 er mindre enn 3", "Ja — rota er det minste elementet i hele arrayet", "Nei — H[1] = 5 er større enn søskenet H[2] = 3", "Ja — hvert nivå inneholder større tall enn nivået over"],
      explanation: "Ett brudd er nok: forelderen 3 på indeks 2 har barnet 2 på indeks 6. At rota er minst, er nødvendig men ikke tilstrekkelig. Alternativet om søsken er felle #9 — heap-egenskapen sier ingenting om forholdet mellom 5 og 3.",
    },
    {
      question: "Hvilken sjekk må stå i en down-heap før høyre barn brukes i en sammenligning?",
      options: ["At $2i+2$ er mindre enn antall elementer i heapen", "At $2i+2$ er mindre enn indeksen til forelderen selv", "At høyre barn er større enn venstre barn", "At noden selv ikke ligger på nederste nivå"],
      explanation: "Uten sjekken leses en indeks utenfor arrayet så snart noden bare har venstre barn. Dette er felle #3, den eneste fellen i Del 4 med eksplisitt takpoeng: mangler sjekken, er full uttelling utelukket uansett hvor riktig resten er.",
    },
    {
      question: "Hva skal leveres som sluttilstand etter en heap-håndkjøring?",
      options: ["Hele arrayet, kommaseparert, med indeks fra 0", "Bare de elementene som flyttet seg under operasjonen", "Treet tegnet med verdier, uten arrayet under", "Rotverdien og antall bytter som ble utført"],
      explanation: "Sensor ber om hele arrayet, og delvis riktig array gir delvis uttelling. Tegner du treet i tillegg, er det greit — men arrayet må stå der. Rotverdi og bytter er AVL-formatet, ikke heap-formatet.",
    },
    {
      question: "Hvorfor er heapsort $O(n \\log n)$ når `BuildHeap` er $O(n)$?",
      options: ["Fordi de $n$ uthentingene etterpå koster $O(\\log n)$ hver", "Fordi byggingen må gjentas etter hver eneste uthenting", "Fordi arrayet må sorteres på nytt når heapen er tom", "Fordi hvert element sammenlignes med alle de andre"],
      explanation: "Heapsort har to faser: en lineær byggefase og en uthentingsfase med $n$ kall til `RemoveMin`. Det er blandingen av de to som skaper den vanlige feilen «`BuildHeap` er $O(n \\log n)$» — se kap. 2.2.",
    },
  ],
  'in2010-4-5': [
    {
      question: "En min-heap er lagret som array med indeks fra 0. Hvilken indeks har forelderen til noden på indeks 9?",
      options: ["Indeks 4", "Indeks 5", "Indeks 3", "Indeks 8"],
      explanation: "Forelderen er $\\lfloor (9-1)/2 \\rfloor = 4$. Indeks 5 er svaret man får med den 1-indekserte formelen $\\lfloor 9/2 \\rfloor$, som hører til en annen konvensjon enn dette faget bruker. Indeks 8 er nabofeltet, ikke forelderen.",
    },
    {
      question: "Hvilke indekser har barna til noden på indeks 4, med indeks fra 0?",
      options: ["Indeks 9 og indeks 10", "Indeks 8 og indeks 10", "Indeks 5 og indeks 6", "Indeks 7 og indeks 8"],
      explanation: "Barna er $2i+1 = 9$ og $2i+2 = 10$. Indeks 8 og 10 blander de to konvensjonene: $2i$ for venstre barn hører til den 1-indekserte formen. Indeks 5 og 6 er nabofeltene i arrayet, som ikke har noe med foreldre og barn å gjøre.",
    },
    {
      question: "I down-heap skal elementet som synker, sammenlignes med:",
      options: ["det minste av de to barna", "det største av de to barna", "det venstre barnet, som alltid finnes", "forelderen, som ligger ett nivå over"],
      explanation: "Bytter du med det største barnet, dytter du et stort element ned over et mindre og bryter heap-egenskapen uten å oppdage det. Venstre barn er riktig svar bare når høyre mangler — regelen er «minst», ikke «venstre».",
    },
    {
      question: "En min-heap har seks elementer. Hvilke barn har noden på indeks 2?",
      options: ["Bare venstre barn, på indeks 5", "Begge barna, på indeks 5 og indeks 6", "Bare høyre barn, på indeks 6", "Ingen barn — noden er et blad"],
      explanation: "Venstre barn er $2 \\cdot 2 + 1 = 5$, som finnes fordi arrayet har indeks 0 til 5. Høyre barn ville vært indeks 6, som ikke finnes. Å lese indeks 6 likevel er felle #3 — down-heap uten å sjekke at barnet finnes.",
    },
    {
      question: "Hva er konsekvensen av å utelate sjekken av at barnet finnes i down-heap?",
      options: ["Prosedyren leser utenfor arrayet og gir en ugyldig heap", "Heapen blir en max-heap i stedet for en min-heap", "Sluttilstanden blir riktig, men kjøretiden stiger til $O(n)$", "Rotelementet blir stående uendret gjennom hele operasjonen"],
      explanation: "Uten sjekken leser løkka en indeks som ikke finnes, og resultatet er udefinert. Kjøretiden er ikke problemet — down-heap er $O(\\log n)$ uansett — og operasjonen bytter fortsatt ut rota i første steg.",
    },
    {
      question: "`BuildHeap` kjøres på `17, 3, 12, 8, 1, 20, 5, 14, 9, 6`. Hva blir arrayet etterpå?",
      options: ["`1, 3, 5, 8, 6, 20, 12, 14, 9, 17`", "`1, 3, 5, 6, 8, 9, 12, 14, 17, 20`", "`1, 3, 5, 8, 6, 12, 20, 9, 14, 17`", "`1, 6, 5, 8, 3, 20, 12, 14, 9, 17`"],
      explanation: "Down-heap kjøres fra indeks 4 og nedover til 0, og gir denne heapen. Det sorterte alternativet er fella: `BuildHeap` sorterer ikke, den gjenoppretter bare heap-egenskapen, som ordner opp–ned og ikke venstre–høyre.",
    },
    {
      question: "Hva er kjøretiden til `BuildHeap` på $n$ elementer?",
      options: ["$O(n)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Nodene nær bunnen er mange, men flytter seg få nivåer, og summen av arbeidet holder seg under $2n$. $O(n \\log n)$ er kostnaden ved å bygge heapen med $n$ gjentatte `Insert`, og er den vanligste forvekslingen.",
    },
    {
      question: "Hva koster det å finne det største elementet i en min-heap med $n$ elementer?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(1)$", "$O(n \\log n)$"],
      explanation: "Det største elementet ligger i et blad, og en min-heap sier ingenting om hvilket. Over halvparten av elementene er blader, så alle må undersøkes. $O(\\log n)$ og $O(1)$ gjelder minsteelementet, ikke det største.",
    },
    {
      question: "Får man en max-heap ved å reversere arrayet til en min-heap?",
      options: ["Nei — reverseringen ødelegger forelder–barn-forholdene", "Ja, så lenge treet er komplett og uten hull", "Ja, og det er nettopp derfor arrayformen brukes", "Nei, men bare hvis antall elementer ikke er en potens av to"],
      explanation: "Forelder–barn-forholdene bestemmes av indeksene, og reverseringen flytter elementene til helt andre indekser. Antall elementer og formen på treet har ingen betydning, og arrayformen brukes fordi indeksformlene er billige, ikke fordi reversering gir noe.",
    },
    {
      question: "Hvordan skal sluttilstanden på en heap-håndkjøring leveres?",
      options: ["Som hele arrayet, kommaseparert, med indeks fra 0", "Som treet tegnet med nivåene under hverandre", "Som elementene som ble flyttet under operasjonen", "Som arrayet sortert i stigende rekkefølge etter verdi"],
      explanation: "Sensor ber om arrayet, og tegningen er kandidatens arbeidsverktøy. Å sortere arrayet er dobbelt galt: heapen er ikke sortert, og sorteringen ødelegger informasjonen om hvor elementene faktisk ligger.",
    },
    {
      question: "Hvor mange enkle rotasjoner utgjør én dobbelrotasjon i et AVL-tre?",
      options: ["To enkle rotasjoner", "Én enkel rotasjon", "Tre enkle rotasjoner", "Fire enkle rotasjoner"],
      explanation: "En dobbelrotasjon er to enkle utført etter hverandre, én i hver retning. Å svare «én» er å telle rebalanseringer i stedet for rotasjoner, og er den vanligste feilen i AVL-håndkjøringer.",
    },
    {
      question: "Sett inn 10, 20, 30, 40, 50 og 25 i et tomt AVL-tre. Hvor mange **enkle** rotasjoner utføres totalt?",
      options: ["4 enkle rotasjoner", "3 enkle rotasjoner", "2 enkle rotasjoner", "5 enkle rotasjoner"],
      explanation: "To enkle rotasjoner av typen RR, pluss én dobbelrotasjon av typen RL som teller som to. Svaret «tre» teller antall rebalanseringer i stedet for antall enkle rotasjoner.",
    },
    {
      question: "Sett inn 100, 90, 80, 70, 60 og 50 i et tomt AVL-tre. Hva er rotverdien til slutt?",
      options: ["70", "90", "80", "60"],
      explanation: "Sekvensen er synkende, så alle tre rebalanseringene er av typen LL. Rota flyttes fra 100 til 90 ved den første og fra 90 til 70 ved den siste. 90 er rotverdien underveis, men ikke til slutt; 80 og 60 er noder i det ferdige treet, men ingen av dem er rota.",
    },
    {
      question: "Hva er balansefaktoren til en node i et AVL-tre?",
      options: ["Høyden til venstre subtre minus høyden til høyre subtre", "Antall noder i venstre subtre minus antall i høyre subtre", "Høyden til hele treet minus antall rotasjoner utført", "Differansen mellom rotverdien og verdien i noden selv"],
      explanation: "AVL-kravet gjelder høyder, ikke antall noder. Et subtre kan ha langt flere noder enn nabosubtreet og likevel ha samme høyde, og da er balansefaktoren $0$.",
    },
    {
      question: "Hvilken høyde har et tomt subtre, i konvensjonen boka bruker?",
      options: ["$-1$", "$0$", "$1$", "Udefinert"],
      explanation: "Et tomt subtre har høyde $-1$, slik at et blad med to tomme barn får høyde $0$ og balansefaktor $0$. Setter du høyden til $0$, får hvert blad balansefaktor $0$ likevel, men foreldre med bare ett barn regnes feil.",
    },
    {
      question: "Hvor mange rebalanseringer kan én innsetting i et AVL-tre utløse?",
      options: ["Høyst én, enten enkel eller dobbel", "Én i hver node på veien opp mot rota", "Høyst to, én i hver retning", "Så mange som trengs til treet er perfekt balansert"],
      explanation: "Rebalanseringen i den første ubalanserte noden gjenoppretter høyden subtreet hadde før innsettingen, så ingen node lenger oppe blir ubalansert. Det er derfor `AVLInsert` er $O(\\log n)$, og AVL-trær er ikke perfekt balanserte.",
    },
    {
      question: "Hva skal oppgis som svar på en AVL-håndkjøring?",
      options: ["Antall enkle rotasjoner, rotverdien, og om treet er gyldig", "Treet tegnet på nytt med balansefaktoren skrevet inn i hver node", "In-order-utskriften av treet etter siste innsetting", "Høyden til treet og antall noder på det nederste nivået"],
      explanation: "De tre delene er selvstendige delmomenter, og rotverdien er den som oftest står igjen ubesvart. In-order-utskriften er svaret på en søketre-håndkjøring, ikke på en rotasjonstelling.",
    },
    {
      question: "Hvilken struktur ordner elementene **venstre–høyre**?",
      options: ["Binært søketre — alt til venstre er mindre enn noden", "Min-heap — alt til venstre er mindre enn noden", "Begge to, men bare når treet er komplett og uten hull i nivåene", "Ingen av dem — begge ordner opp–ned, fra forelder til barn"],
      explanation: "Søketreet ordner venstre–høyre, min-heapen ordner opp–ned og sier ingenting om søsken. Å blande de to er felle #9, og gir feil svar på begge strukturene samtidig.",
    },
    {
      question: "Min-heapen er `2, 3, 7, 5, 4, 9, 8`. Hva blir arrayet etter at 1 er satt inn?",
      options: ["`1, 2, 7, 3, 4, 9, 8, 5`", "`1, 3, 7, 5, 4, 9, 8, 2`", "`2, 3, 7, 5, 4, 9, 8, 1`", "`1, 2, 7, 5, 4, 9, 8, 3`"],
      explanation: "1-eren legges på indeks 7 og sifter opp gjennom indeks 3 og 1 til rota, mens 5, 3 og 2 dyttes ett nivå ned hver. Alternativet uten bytter er svaret man får hvis sift-up glemmes helt.",
    },
    {
      question: "Min-heapen er `1, 3, 9, 7, 4`. Hva blir arrayet etter én `RemoveMin`?",
      options: ["`3, 4, 9, 7`", "`3, 9, 7, 4`", "`4, 3, 9, 7`", "`3, 4, 7, 9`"],
      explanation: "Siste element 4 flyttes til rota, bytter med det minste barnet 3, og stopper fordi det eneste barnet igjen er 7. Alternativet `3, 9, 7, 4` er svaret man får hvis man bare stryker rota og skyver resten til venstre.",
    },
  ],
  'in2010-5-1': [
    {
      question: "Hvor mye plass krever en nabomatrise for en graf med $|V|$ noder og $|E|$ kanter?",
      options: ["$O(|V|^2)$", "$O(|V| + |E|)$", "$O(|E|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Matrisen har én celle per nodepar, altså $|V|^2$ celler, uansett hvor få kanter grafen har. $O(|V| + |E|)$ er nabolistens plass, og de to blandes ofte. $O(|E|)$ glemmer at hver node må ha en plass selv om den ikke har naboer.",
    },
    {
      question: "Hva koster spørsmålet «finnes kanten mellom $u$ og $v$?» i en nabomatrise?",
      options: ["$O(1)$", "$O(\\text{grad}(u))$", "$O(|V|)$", "$O(|V| + |E|)$"],
      explanation: "Du slår opp celle $(u, v)$ direkte. $O(\\text{grad}(u))$ er kostnaden i en **naboliste**, der du må lete gjennom linja, og $O(|V|)$ er kostnaden ved å lese en hel matriserad. Kantoppslaget er den ene operasjonen matrisen vinner klart på.",
    },
    {
      question: "Hva koster det å ramse opp alle naboene til én node $v$ i en naboliste?",
      options: ["$O(\\text{grad}(v))$", "$O(|V|)$", "$O(1)$", "$O(|V| + |E|)$"],
      explanation: "Du leser nodens egen linje, som har nøyaktig $\\text{grad}(v)$ oppføringer. $O(|V|)$ er kostnaden i en nabomatrise, der du må lese hele raden inkludert alle nullene. Dette er operasjonen alle grafalgoritmer bruker mest, og grunnen til at naboliste er standardvalget.",
    },
    {
      question: "Hva koster det å gå gjennom hele grafen én gang når den er lagret som nabolister?",
      options: ["$O(|V| + |E|)$", "$O(|E|)$", "$O(|V|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Du må innom hver node, også de uten en eneste nabo, og deretter langs hver kant. Svaret $O(|E|)$ er den vanligste fellen: en graf med en million noder og null kanter ville da vært gratis å gå gjennom, men den koster en million steg.",
    },
    {
      question: "En urettet graf har 9 kanter. Hva er summen av gradene til alle nodene?",
      options: ["18", "9", "81", "10"],
      explanation: "Hver kant har to ender og bidrar med 1 til graden i hver av dem, så gradsummen er $2|E| = 18$. Svaret 9 glemmer dobbelttellingen. Bruk regelen som kontroll: en gradsum som er et oddetall betyr alltid at du har telt feil.",
    },
    {
      question: "Hvor mange kanter har et tre med 12 noder?",
      options: ["11", "12", "13", "24"],
      explanation: "Et tre har nøyaktig $|E| = |V| - 1$ kanter, altså 11. Svaret 12 svarer til en sammenhengende graf med nøyaktig én sykel, og 24 forveksler kantantallet med gradsummen $2|E|$.",
    },
    {
      question: "En sammenhengende urettet graf har $|V| = 10$ og $|E| = 10$. Hva vet du sikkert?",
      options: ["Den har nøyaktig én sykel", "Den har nøyaktig to sykler", "Den er et tre", "Den har minst tre komponenter"],
      explanation: "Et tre med 10 noder ville hatt 9 kanter. Den ene ekstra kanten lager nøyaktig én sykel. Treet er utelukket fordi kantantallet er for høyt, og flere komponenter er utelukket fordi grafen er oppgitt som sammenhengende.",
    },
    {
      question: "Hvilken av disse gjør at en graf **ikke** er enkel?",
      options: ["En kant fra en node til seg selv", "En node som ikke har noen kanter", "En sykel gjennom fire noder", "To noder med nøyaktig samme naboer"],
      explanation: "En enkel graf har verken løkker (kant fra en node til seg selv) eller parallelle kanter. En isolert node, en sykel og to noder med like nabolister er alle helt vanlige i enkle grafer — «enkel», «sammenhengende» og «uten sykel» er tre uavhengige egenskaper.",
    },
    {
      question: "I en rettet graf med $|E|$ kanter — hva er summen av alle inngradene?",
      options: ["$|E|$", "$2|E|$", "$|V|$", "$|E| / 2$"],
      explanation: "Hver rettet kant bidrar med nøyaktig én inngrad og én utgrad, så begge summene er $|E|$. Svaret $2|E|$ er regelen for **urettede** grafer, der hver kant teller i to noders grad — å bruke den på en rettet graf er en klassisk bom.",
    },
    {
      question: "Hva skiller en sti fra en sykel i en urettet graf?",
      options: ["En sykel starter og ender i samme node", "En sykel kan gjenta noder underveis", "En sti må gå gjennom alle nodene", "En sti kan bare ha én kant"],
      explanation: "En sykel er en sti som ender der den startet, uten å gjenta noen annen node. En sti kan være så kort eller lang den vil og trenger ikke å dekke alle noder, og verken sti eller sykel gjentar noder underveis.",
    },
    {
      question: "Grafen har nabolistene `A: B, C`; `B: A, C`; `C: A, B`; `D: E`; `E: D, F`; `F: E`; `G: (ingen)`. Hvor mange sammenhengende komponenter har den?",
      options: ["3", "2", "1", "7"],
      explanation: "Bitene er $\\{A, B, C\\}$, $\\{D, E, F\\}$ og $\\{G\\}$. Den ensomme noden G er en komponent for seg selv, og det er nettopp den som er lett å overse — men den er nok til at grafen ikke er sammenhengende.",
    },
    {
      question: "Når er nabomatrise et fornuftig valg framfor naboliste?",
      options: ["Når grafen er tett og algoritmen stiller mange kantspørsmål", "Når grafen er tynn og algoritmen ramser opp naboer ofte", "Når grafen har mange noder uten kanter i det hele tatt", "Når grafen er urettet og alle nodene har lav grad"],
      explanation: "Matrisen betaler $|V|^2$ i plass og får $O(1)$ på kantoppslag igjen, så den lønner seg bare når kantene er mange og kantspørsmålene dominerer. I alle de tre andre tilfellene er grafen tynn, og da sløser matrisen bort nesten hele plassen på nuller.",
    },
    {
      question: "Hva må stå i en besvarelse der du skriver en grafalgoritme i pseudokode?",
      options: ["Hvilken representasjon av grafen du antar", "Et bevis for at algoritmen terminerer", "En tegning av grafen algoritmen kjøres på", "Hvor mange linjer pseudokoden er på"],
      explanation: "Sensor binder seg ikke til én representasjon, men uten antagelsen kan kjøretiden din ikke kontrolleres: den samme algoritmen er $O(|V| + |E|)$ med naboliste og $O(|V|^2)$ med nabomatrise. De tre andre kreves ikke, og en tegning erstatter uansett ikke antagelsen.",
    },
    {
      question: "Hva er det største antallet kanter en enkel urettet graf med 6 noder kan ha?",
      options: ["15", "30", "36", "12"],
      explanation: "Hvert nodepar kan ha høyst én kant, og antall par er $\\frac{6 \\cdot 5}{2} = 15$. Svaret 30 glemmer å dele på 2 og teller hvert par to ganger, og 36 er $|V|^2$, altså antall celler i nabomatrisen inkludert diagonalen.",
    },
  ],
  'in2010-5-2': [
    {
      question: "Hva er kjøretiden til `BFS(G, s)` når grafen er gitt som nabolister?",
      options: ["$O(|V| + |E|)$", "$O(|E|)$", "$O(|V|^2)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Initialiseringsløkka er $O(|V|)$, hver node legges inn og tas ut av køen én gang, og naboene ramses opp én gang per node, som til sammen er $O(|E|)$. $O(|V|^2)$ ville vært svaret med nabomatrise, og $O(|E|)$ glemmer initialiseringsløkka helt.",
    },
    {
      question: "Hva er kjøretiden til ett `DFSVisit(G, u)`-kall fra én node, når merkene alt er satt?",
      options: ["$O(|E|)$", "$O(|V| + |E|)$", "$O(|V|)$", "$O(|V|^2)$"],
      explanation: "Prosedyren har ingen løkke over alle nodene; arbeidet er å følge kantene, og hver kant ses høyst to ganger. Svaret $O(|V| + |E|)$ er kjøretiden for `DFSFull`, som i tillegg har to løkker over $V$ — å blande de to er felle #6.",
    },
    {
      question: "Hva er kjøretiden til `DFSFull(G)`, som besøker hver node i grafen?",
      options: ["$O(|V| + |E|)$", "$O(|E|)$", "$O(|V|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "De to løkkene over alle nodene gir $|V|$-leddet, og alle `DFSVisit`-kallene til sammen gir $|E|$-leddet. Svaret $O(|E|)$ er felle #6 og et eksplisitt trekkpunkt: en graf med en million noder og null kanter ville da vært gratis, men koster en million steg.",
    },
    {
      question: "Hvorfor har `DFSFull(G)` et $|V|$-ledd i kjøretiden som ett `DFSVisit`-kall ikke har?",
      options: ["Fordi den har løkker som går over alle nodene", "Fordi rekursjonen legger hver node på kallstakken", "Fordi den må lete etter kanter som ikke finnes", "Fordi den besøker hver kant fra begge endene"],
      explanation: "`DFSFull` nullstiller merket på hver node og prøver å starte en traversering fra hver node — to løkker over $V$. Kallstakken og de tobesøkte kantene finnes også i et enkelt `DFSVisit`-kall og forklarer derfor ikke forskjellen.",
    },
    {
      question: "Hvilken traversering gir korteste vei målt i antall kanter i en uvektet graf?",
      options: ["Bredde-først, fordi køen tømmes lagvis", "Dybde-først, fordi den følger én vei helt ut", "Begge, siden de besøker de samme nodene", "Ingen av dem uten at kantene har vekter"],
      explanation: "Køen gir ut nodene i ikke-synkende avstand, så den første noden som når en annen, er også den nærmeste. Dybde-først besøker de samme nodene, men kan nå dem langs en lang omvei, og rekkefølgen dens er derfor ikke avstand.",
    },
    {
      question: "Hvilken datastruktur bruker bredde-først, og hvorfor akkurat den?",
      options: ["Kø, fordi først inn først ut gir lagvis rekkefølge", "Stakk, fordi sist inn først ut gir lagvis rekkefølge", "Kø, fordi den lar noder ligge inne flere ganger", "Stakk, fordi den holder styr på hvor du skal snu"],
      explanation: "Alle noder på avstand 1 legges inn før noen på avstand 2, og køen bevarer den rekkefølgen. En stakk gir tilbake den sist oppdagede noden og gir derfor dybde-først; det er nettopp den ene forskjellen mellom de to algoritmene.",
    },
    {
      question: "Hvorfor må `besokt` sjekkes én gang til når en node tas av stakken i iterativ dybde-først?",
      options: ["Fordi den kan ha blitt lagt på stakken av flere naboer", "Fordi stakken kan gi ut nodene i feil rekkefølge", "Fordi merket nullstilles hver gang stakken tømmes", "Fordi naboene ble lagt på i omvendt rekkefølge"],
      explanation: "To naboer kan begge oppdage den samme umerkede noden og legge den på før noen tar den av, så duplikater på stakken er helt normale. Uten sjekken ved uttak blir noden besøkt to ganger, og enhver telling per node blir feil.",
    },
    {
      question: "Grafen er et rutenett med `A: B, D`; `B: A, C, E`; `C: B, F`; `D: A, E, G`; `E: B, D, F, H`; `F: C, E, I`; `G: D, H`; `H: E, G, I`; `I: F, H`. Hvilket bredde-først-lag havner I i, med start i A?",
      options: ["Lag 4", "Lag 3", "Lag 5", "Lag 2"],
      explanation: "Lagene blir A; B og D; C, E og G; F og H; og til slutt I — altså fire kanter fra A. Uansett hvilken vei du velger gjennom rutenettet, må du ta fire steg fra det ene hjørnet til det motsatte.",
    },
    {
      question: "Grafen har `A: B, C`; `B: A, D, E`; `C: A, E`; `D: B, F`; `E: B, C, F`; `F: D, E`. Hva blir dybde-først-rekkefølgen fra A med naboene i alfabetisk rekkefølge?",
      options: ["A, B, D, F, E, C", "A, B, C, D, E, F", "A, B, D, E, F, C", "A, C, E, B, D, F"],
      explanation: "Fra A går den til B, videre til D, videre til F, derfra til E og til slutt til C. Alternativet A, B, C, D, E, F er bredde-først på den samme grafen — det er nettopp der de to skiller lag, og C er noden som flytter seg fra først til sist.",
    },
    {
      question: "For den samme grafen — hva blir bredde-først-rekkefølgen fra A?",
      options: ["A, B, C, D, E, F", "A, B, D, F, E, C", "A, B, C, E, D, F", "A, C, B, E, D, F"],
      explanation: "Lag 1 er B og C, lag 2 er D og E, og lag 3 er F. Alternativet A, B, D, F, E, C er dybde-først på den samme grafen; de to andre bryter med at naboene tas i alfabetisk rekkefølge.",
    },
    {
      question: "Hva skjer hvis du dropper `besokt`-merket i en traversering av en graf som har en sykel?",
      options: ["Traverseringen stopper aldri", "Traverseringen hopper over noen noder", "Traverseringen gir feil avstander, men stopper", "Traverseringen blir $O(|V|^2)$, men gir riktig svar"],
      explanation: "A sender til B, B sender tilbake til A, og de to holder på i det uendelige. Merket er derfor ikke en optimalisering, men betingelsen for at algoritmen terminerer — og samtidig det som gjør at hver kant behandles et konstant antall ganger.",
    },
    {
      question: "Hvor dyp kan kallstakken i rekursivt dybde-først bli i verste fall?",
      options: ["$O(|V|)$", "$O(\\log |V|)$", "$O(|E|)$", "$O(1)$"],
      explanation: "På en graf som er én lang kjede, ligger alle nodene på stakken samtidig. $O(\\log |V|)$ ville krevd at grafen var balansert som et tre, og det kan man ikke anta. Det er den ene praktiske grunnen til å velge den iterative varianten.",
    },
    {
      question: "Hva er ferdigrekkefølgen i et dybde-først-søk?",
      options: ["Rekkefølgen de rekursive kallene returnerer i", "Rekkefølgen nodene først blir merket besøkt i", "Besøksrekkefølgen lest baklengs", "Rekkefølgen nodene legges på stakken i"],
      explanation: "En node er ferdig når kallet på den returnerer, altså når alle naboene er utforsket. Den er ikke besøksrekkefølgen baklengs — sammenligner du de to på en konkret graf, stemmer bare endene. Ferdigrekkefølgen er grunnlaget for algoritmen i kap. 5.4.",
    },
    {
      question: "Kantene i grafen har vekter, og du skal finne veien med minst samlet vekt. Duger bredde-først?",
      options: ["Nei, den teller kanter og ikke vekter", "Ja, hvis du legger inn nodene i vektrekkefølge", "Ja, den gir alltid veien med minst samlet vekt", "Nei, men dybde-først gjør det i stedet"],
      explanation: "Bredde-først finner veien med **færrest kanter**, og en vei med to tunge kanter kan ha større samlet vekt enn en vei med fem lette. Dybde-først duger enda dårligere, og vektet korteste vei krever egne verktøy som kommer i Del 6.",
    },
    {
      question: "Hva blir kjøretiden til `BFS` hvis grafen er lagret som nabomatrise i stedet for nabolister?",
      options: ["$O(|V|^2)$", "$O(|V| + |E|)$", "$O(|E|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Hver naboiterasjon koster da $O(|V|)$ i stedet for $O(\\text{grad}(v))$, og det gjøres én gang per node. Det er nettopp derfor antagelsen om representasjon må stå i besvarelsen: den samme algoritmen har to ulike kjøretider.",
    },
    {
      question: "Hva er poenget med den ytre løkka i `DFSFull(G)` som `DFSVisit(G, u)` ikke har?",
      options: ["Den starter en ny traversering i hver bit av grafen", "Den sørger for at hver kant behandles nøyaktig én gang", "Den gjør at nodene besøkes i alfabetisk rekkefølge", "Den erstatter merket slik at rekursjonen kan droppes"],
      explanation: "Et enkelt `DFSVisit`-kall merker bare den biten startnoden ligger i, så noder i andre biter — og noder helt uten kanter — ville aldri blitt sett. Merket trengs uansett, og løkka sier ingenting om rekkefølgen nodene besøkes i innad i en bit.",
    },
  ],
  'in2010-5-3': [
    {
      question: "Hva er kjøretiden til komponenttelling med DFS-full i en urettet graf gitt som nabolister?",
      options: ["$O(|V| + |E|)$", "$O(|E|)$", "$O(|V| \\cdot |E|)$", "$O(|V|^2)$"],
      explanation: "Hver node initialiseres og besøkes én gang, og hver kant ses på to ganger — én fra hver ende. Svaret $O(|E|)$ er felle #6: det gjelder én DFS fra én enkelt node, uten den ytre løkka som må innom alle noder. $O(|V| \\cdot |E|)$ og $O(|V|^2)$ er det du får hvis du starter en ny traversering fra hver node.",
    },
    {
      question: "En graf har nabolistene `A: B, C` / `B: A, C` / `C: A, B` / `D: E` / `E: D, F` / `F: E` / `G: (ingen)`. Hvor mange sammenhengende komponenter har den?",
      options: ["3", "2", "4", "7"],
      explanation: "Trekanten A-B-C, strengen D-E-F og den isolerte noden G gir tre komponenter. Svaret 2 kommer av å hoppe over G, som er den vanligste tellefeilen — en node uten kanter er en fullverdig komponent. Svaret 7 teller noder i stedet for komponenter.",
    },
    {
      question: "Hva gjør den ytre løkka i `CountComponents`?",
      options: ["Den starter en ny traversering for hver node som ikke alt er besøkt", "Den starter en ny traversering for hver kant som ikke alt er fulgt", "Den nullstiller besøkt-flagget mellom hver komponent som blir funnet", "Den sorterer nodene etter grad før den første traverseringen starter"],
      explanation: "Antall nystarter er antall komponenter, fordi én DFS dekker nøyaktig én komponent. Å nullstille flagget mellom komponentene ville ødelagt alt: da ville hver traversering begynne på nytt og telle de samme nodene igjen. Kanter er ikke det løkka går over — det er noder.",
    },
    {
      question: "En urettet graf er bipartitt hvis og bare hvis den ikke inneholder noen sykel med",
      options: ["et oddetall kanter", "et partall kanter", "mer enn tre kanter", "to like nodegrader"],
      explanation: "Går du rundt en sykel og veksler farge, går det opp etter et partall steg og ikke opp etter et oddetall. Sykler med partall lengde er derfor helt uproblematiske — en firkant er bipartitt. Lengden på sykelen utover paritet spiller ingen rolle, og nodegrader har ingenting med saken å gjøre.",
    },
    {
      question: "Hva beviser en konflikt i 2-fargeleggingen?",
      options: ["At grafen ikke er bipartitt, uansett hvilken node du startet i", "At du startet i feil node, og bør prøve på nytt fra en annen", "At grafen har minst to sammenhengende komponenter i seg", "At grafen inneholder en sykel med et partall kanter i seg"],
      explanation: "Etter at startnoden har fått sin farge, er hvert eneste senere valg tvunget: en nabo av en rød node kan bare bli blå. Derfor er en konflikt et bevis, ikke et uhell — å prøve en annen startnode gir nøyaktig samme resultat. En konflikt sier heller ingenting om antall komponenter.",
    },
    {
      question: "Er en sykel med fem noder bipartitt?",
      options: ["Nei, fordi fem kanter er et oddetall og vekslingen ikke går opp", "Ja, fordi enhver sammenhengende graf uten løkker kan tofarges", "Ja, men bare hvis fargeleggingen starter i den riktige noden", "Nei, fordi ingen sykel i det hele tatt noen gang kan tofarges"],
      explanation: "Femsykelen har fem kanter, og etter fem vekslinger står du med din egen farge — den siste kanten kolliderer. En sykel med seks noder er derimot bipartitt, så påstanden om at ingen sykel kan tofarges, er gal. Startnoden er uten betydning: fargeleggingen er tvunget uansett.",
    },
    {
      question: "I sykeldeteksjon i en urettet graf: hvilken kant avslører at det finnes en sykel?",
      options: ["En kant til en besøkt node som ikke er forelderen din", "En kant til en besøkt node, uansett hvilken node det er", "En kant til en ubesøkt node med mer enn to naboer", "En kant tilbake til noden som traverseringen startet i"],
      explanation: "Den besøkte naboen ligger på stien du kom langs, så kanten dit gir en andre vei — altså en rundtur. Uten forbeholdet om forelderen melder algoritmen sykel på kanten du nettopp gikk, altså på ethvert tre. En kant til en ubesøkt node er derimot aldri en sykel.",
    },
    {
      question: "Hva skjer hvis `HasCycle` mangler unntaket for kanten tilbake til forelderen?",
      options: ["Den melder sykel på enhver graf med minst én kant", "Den melder aldri sykel, uansett hvordan grafen ser ut", "Den går i evig rekursjon på grafer helt uten sykel", "Den finner bare sykler i den første komponenten"],
      explanation: "Allerede i det andre kallet ser algoritmen at forelderen er besøkt, og melder sykel — også på grafen med to noder og én kant. Det er testen som avslører feilen på to sekunder. Evig rekursjon er et annet problem, som `besokt`-flagget uansett hindrer.",
    },
    {
      question: "En sammenhengende urettet graf har $|V| = 9$ og $|E| = 12$. Hva kan du si med sikkerhet?",
      options: ["Den inneholder minst én sykel", "Den er et tre, altså uten sykel", "Den er garantert bipartitt", "Den består av flere komponenter"],
      explanation: "Et tre med ni noder har $|E| = |V| - 1 = 8$ kanter; hver kant utover det lukker en rundtur. Grafen er oppgitt som sammenhengende, så den kan ikke ha flere komponenter. Om den er bipartitt, avhenger av om syklene har partall lengde, og det sier tallene ingenting om.",
    },
    {
      question: "Hvor mange ganger ser en dybde-først-traversering på hver kant i en urettet graf gitt som nabolister?",
      options: ["To ganger, én gang fra hver ende", "Én gang, fordi kanten lagres ett sted", "$|V|$ ganger, altså én gang per node", "Fire ganger, to fra hver av endene"],
      explanation: "Kanten mellom $u$ og $v$ står i nabolista til begge, så den inspiseres fra begge sider. Det er nettopp derfor kjøretiden er $O(|V| + 2|E|)$, som forenkles til $O(|V| + |E|)$. Denne tellingen er begrunnelsen sensor ber om når du oppgir kjøretiden.",
    },
    {
      question: "Hva er kjøretiden til én dybde-først-traversering startet i én enkelt node, uten initialisering av alle noder?",
      options: ["$O(|E|)$", "$O(|V| + |E|)$", "$O(|V|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Uten den ytre løkka og initialiseringen er det bare kantene som koster. Å svare $O(|V| + |E|)$ her, eller $O(|E|)$ på en DFS-full, er de to halvdelene av felle #6, og skillet er et eksplisitt trekkpunkt i faget.",
    },
    {
      question: "Et kjøretidsmiljø har en rot-mengde $R$. Hvilke objekter kan trygt frigjøres?",
      options: ["De som ikke nås fra noen node i $R$", "De som ikke ligger i mengden $R$ selv", "De som har mer enn én innkommende peker", "De som ligger i sin egen komponent"],
      explanation: "Kan du ikke nå objektet fra noe programmet ser, kan ingenting bruke det. Et objekt utenfor $R$ kan godt være nåbart fra $R$ og må da beholdes, så «ikke i $R$» er langt for grovt. Antall innkommende pekere sier ingenting om nåbarhet fra rot-mengden.",
    },
    {
      question: "Du løser «hva kan nås fra rot-mengden» med en ny traversering for hvert objekt. Hvilken kjøretid gir det?",
      options: ["$O(|V| \\cdot (|V| + |E|))$", "$O(|V| + |E|)$", "$O(|E| \\log |V|)$", "$O(|V| + |E|^2)$"],
      explanation: "Én traversering er $O(|V| + |E|)$, og du gjør den $|V|$ ganger. Med ett felles `besokt`-felt koster alle kallene til sammen like mye som én traversering, altså $O(|V| + |E|)$ — og det er hele forskjellen felle #1 handler om. Logaritmen hører hjemme i algoritmer med prioritetskø, ikke her.",
    },
    {
      question: "Du glemmer den ytre løkka over alle noder i `TwoColor`. Hva blir konsekvensen?",
      options: ["En ikke-bipartitt komponent et annet sted blir aldri oppdaget", "Algoritmen får kjøretiden $O(|V| \\cdot |E|)$ i stedet for lineær", "Startnoden får aldri noen farge, og resten blir farget rødt", "Konflikter inne i selve startkomponenten blir ikke oppdaget"],
      explanation: "Uten den ytre løkka farges bare komponenten du startet i, og resten av grafen blir aldri undersøkt. Konflikter innenfor startkomponenten finnes derimot helt fint. Kjøretiden blir ikke verre, den blir tvert imot lavere — algoritmen gjør jo mindre arbeid, bare feil arbeid.",
    },
  ],
  'in2010-5-4': [
    {
      question: "Hva er en sterkt sammenhengende komponent i en rettet graf?",
      options: ["En maksimal mengde noder der hver når hver av de andre", "En maksimal mengde noder som henger sammen uten retninger", "En maksimal mengde noder med minst én kant seg imellom", "En maksimal mengde noder som alle nås fra samme startnode"],
      explanation: "Kravet er rettet vei begge veier mellom hvert par. Å se bort fra retningene gir **svakt** sammenhengende, som er noe helt annet: et enveiskjørt gatenett kan være svakt sammenhengende og likevel ha mange SCC-er. At alle nås fra én startnode sier ingenting om veien tilbake.",
    },
    {
      question: "Komponentgrafen til en vilkårlig rettet graf er alltid",
      options: ["en rettet graf uten sykler, altså en DAG", "en rettet graf med minst én rundtur i seg", "en urettet graf med samme antall kanter", "en sammenhengende graf med nøyaktig én kilde"],
      explanation: "Gikk det en rundtur mellom to komponenter, ville alle nodene i begge nådd hverandre begge veier, og da hadde de vært én komponent. Resultatet er kjent og skal ikke bevises på eksamen. Antall kilder kan godt være mer enn én — det er nettopp det den minste startmengden teller.",
    },
    {
      question: "Hvor få noder må du minst starte i for å nå alle noder i en rettet graf?",
      options: ["Antall komponenter med inngrad 0 i komponentgrafen", "Antall komponenter med utgrad 0 i komponentgrafen", "Antall komponenter i komponentgrafen, uansett grad", "Antall noder uten innkommende kant i selve grafen"],
      explanation: "En komponent med inngrad 0 kan ikke nås utenfra og må ha en startnode, og alle andre komponenter nås fra en av dem. Utgrad 0 svarer på det motsatte spørsmålet — hvor alt ender opp — og forvekslingen er den vanligste enkeltfeilen i sjangeren. Å telle noder uten innkommende kant i den opprinnelige grafen bommer, fordi en hel gruppe kan peke innbyrdes på hverandre.",
    },
    {
      question: "Hvilke komponenter svarer på «finn alle grupper der alle når hverandre»?",
      options: ["SCC-ene med mer enn én node i seg", "SCC-ene med nøyaktig inngrad 0 i grafen", "SCC-ene med både inngrad og utgrad 0", "Alle SCC-ene, siden hver er en slik gruppe"],
      explanation: "En SCC med minst to noder inneholder en rettet rundtur, og det er nettopp det «alle når hverandre» betyr. Alle SCC-ene er teknisk sett grupper, men en gruppe på én node er ingen rundtur — den noden når bare seg selv. Inn- og utgrad handler om forholdet til andre komponenter, ikke om rundturer innad.",
    },
    {
      question: "Hva er kjøretiden til å finne alle sterkt sammenhengende komponenter?",
      options: ["$O(|V| + |E|)$", "$O(|V| \\cdot |E|)$", "$O((|V| + |E|) \\log |V|)$", "$O(|V|^2 + |E|)$"],
      explanation: "To dybde-først-gjennomløp pluss én snuing av grafen er tre lineære pass, og tre lineære pass er fremdeles lineært. Logaritmen hører til algoritmer med prioritetskø. $O(|V| \\cdot |E|)$ er det du får hvis du traverserer fra hver node i stedet.",
    },
    {
      question: "Hva koster det å svare på «hvem når hvem» ved å kjøre en DFS-full fra hver eneste node?",
      options: ["$O(|V| \\cdot (|V| + |E|))$", "$O(|V| + |E|)$", "$O(|V|^2)$", "$O(|E| \\log |V|)$"],
      explanation: "Én DFS-full er $O(|V| + |E|)$, og du gjentar den $|V|$ ganger. Svaret blir riktig, men dette er felle #1 — naiv full traversering der én SCC-kjøring holdt — og poengtrappen er eksplisitt: lavere kjøretid gir mer uttelling på samme oppgave. $O(|V|^2)$ glemmer kantleddet.",
    },
    {
      question: "Hva gjør det andre gjennomløpet i SCC-algoritmen?",
      options: ["En ny DFS i den snudde grafen, i synkende ferdigrekkefølge", "En ny DFS i den samme grafen, i synkende ferdigrekkefølge", "En ny DFS i den snudde grafen, i vanlig besøksrekkefølge", "En bredde-først-traversering i den snudde grafen fra hver node"],
      explanation: "Begge deler må stemme: grafen må være snudd, og rekkefølgen må være synkende ferdigrekkefølge. Endrer du bare én av dem, samler traverseringen inn noder fra flere komponenter og svaret blir galt. Besøksrekkefølge er ikke det samme som ferdigrekkefølge.",
    },
    {
      question: "Hva betyr det at en komponent har utgrad 0 i komponentgrafen?",
      options: ["At ingen kant forlater komponenten, så alt som kommer dit, blir", "At ingen kant peker inn i komponenten, så den må startes i selv", "At komponenten inneholder nøyaktig én node uten utgående kant", "At komponenten nås fra alle de andre komponentene i grafen"],
      explanation: "Utgrad 0 er et endepunkt: du kommer deg ikke ut igjen. Å beskrive det som «ingen kant peker inn» er inngrad 0, altså det motsatte, og forvekslingen koster fast poeng. Komponenten kan godt bestå av flere noder som peker på hverandre, og den nås ikke nødvendigvis fra alle andre — det gjelder bare når den er den eneste med utgrad 0.",
    },
    {
      question: "En rettet graf inneholder ingen rundturer i det hele tatt. Hvor mange SCC-er har den?",
      options: ["Like mange som den har noder", "Nøyaktig én, som rommer alle nodene", "Like mange som den har kanter", "Ingen, siden det ikke finnes rundturer"],
      explanation: "Uten en rundtur kan ingen to noder nå hverandre begge veier, så hver node blir sin egen komponent. Grafen er da allerede en DAG, og komponentgrafen er identisk med grafen selv. At det ikke finnes rundturer, betyr altså ikke at det ikke finnes komponenter — det betyr at alle har størrelse 1.",
    },
    {
      question: "Oppgaven ber deg finne den minste startmengden. Bør du bevise at komponentgrafen er en DAG?",
      options: ["Nei, resultatet er kjent og kan brukes uten videre begrunnelse", "Ja, ellers får du ingen uttelling for algoritmevalget ditt", "Ja, men bare hvis grafen inneholder mer enn én rundtur", "Nei, men du må vise at grafen ikke inneholder noen sykel"],
      explanation: "Egenskapen er standardstoff og kan brukes fritt; én setning med intuisjonen er mer enn nok. Minutter brukt på et unødvendig bevis er tatt fra oppgaver som gir poeng. Å vise at grafen selv er syklusfri er noe helt annet, og som regel er den ikke det.",
    },
    {
      question: "Hva menes med ferdigrekkefølgen i det første gjennomløpet?",
      options: ["Rekkefølgen kallene returnerer i, når alle utveier er utforsket", "Rekkefølgen nodene besøkes i, når traverseringen når dem først", "Rekkefølgen nodene står i, i nabolistene til den snudde grafen", "Rekkefølgen den ytre løkka går gjennom nodene i grafen i"],
      explanation: "En node er ferdig først når naboløkka er tømt, og i pseudokoden ligger derfor innlegningen etter løkka, ikke før. Bytter du det om, får du besøksrekkefølgen, og hele algoritmen slutter å virke. Den ytre løkkas rekkefølge er noe helt annet og kan være vilkårlig.",
    },
    {
      question: "Komponentgrafen har nøyaktig én komponent med inngrad 0. Hva følger av det?",
      options: ["Det finnes en enkelt node som når alle de andre nodene", "Det finnes en enkelt node som nås fra alle de andre nodene", "Alle komponentene inneholder minst to noder hver", "Grafen er sterkt sammenhengende og har bare én komponent"],
      explanation: "Følg kanter bakover fra en vilkårlig node: i en DAG kan du ikke gå i ring, så du må ende i en komponent med inngrad 0 — og finnes det bare én, når den alt. Det speilvendte utsagnet, at én node nås fra alle, følger av nøyaktig én komponent med **utgrad** 0. Antall noder per komponent er helt uavhengig av dette.",
    },
    {
      question: "Hvorfor kan du erstatte spørsmål om enkeltnoder med spørsmål om komponenter?",
      options: ["Fordi noder i samme SCC når nøyaktig de samme nodene", "Fordi noder i samme SCC har den samme utgraden", "Fordi hver SCC har nøyaktig én kant ut i komponentgrafen", "Fordi SCC-ene alltid er like store når grafen er rettet"],
      explanation: "Ligger $u$ og $v$ i samme komponent, når $u$ alt $v$ når, siden $u$ først kan gå til $v$ — og omvendt. Derfor har alle noder i samme komponent identiske rader i en «hvem når hvem»-tabell. Verken utgrad, antall utkanter eller størrelse er nødvendigvis like.",
    },
    {
      question: "Du skal finne hvor alt ender opp i en rettet graf. Hvor stiller du spørsmålet?",
      options: ["I komponentgrafen, ved å se etter utgrad 0", "I den opprinnelige grafen, ved å se etter utgrad 0", "I den snudde grafen, ved å se etter inngrad 0", "I komponentgrafen, ved å se etter størst mulig inngrad"],
      explanation: "En gruppe noder kan peke innbyrdes på hverandre og likevel være et endepunkt, så i den opprinnelige grafen finner du bare de endepunktene som er enkeltnoder. Spørsmålet må derfor alltid stilles i komponentgrafen. Størst inngrad sier ingenting om hvorvidt du kommer deg videre.",
    },
  ],
  'in2010-5-5': [
    {
      question: "En oppgave ber deg finne alle grupper i en rettet graf der medlemmene når hverandre begge veier. Hvilket verktøy er riktig?",
      options: ["Sterkt sammenhengende komponenter, i én kjøring", "Bredde-først-søk startet fra hver eneste node", "Dybde-først-søk fra én vilkårlig valgt node", "Tofarging med to farger, i én traversering"],
      explanation: "«Når hverandre begge veier» er definisjonen på en sterkt sammenhengende komponent, og pensumalgoritmen finner alle i $O(|V| + |E|)$. Et søk fra hver node gir riktig svar, men koster $O(|V| \\cdot (|V| + |E|))$ og er felle #1. Et søk fra én node ser bare det som nås derfra, og tofarging svarer på et helt annet spørsmål.",
    },
    {
      question: "En oppgave spør hvor mange noder som nås innen $k$ ledd fra en gitt node. Hvilket mønster er riktig?",
      options: ["Bredde-først-søk som stopper ved dybde $k$", "Dybde-først-søk som stopper ved dybde $k$", "Bredde-først-søk over hele grafen, uten grense", "Én kjøring av komponentalgoritmen for rettet graf"],
      explanation: "«Innen $k$ ledd» er et avstandsspørsmål, og bare bredde-først-søk garanterer at noden du tar ut av køen i runde $d$, ligger $d$ kanter unna. Dybde-først kan gi en nabo avstanden 4. Et fullt bredde-først-søk gir riktig tall, men leser hele grafen for å svare på et spørsmål om en liten del av den.",
    },
    {
      question: "Hvilke kjøretider er riktige for dybde-først-søk?",
      options: ["$O(|E|)$ fra én node, $O(|V| + |E|)$ for et fullt søk", "$O(|V| + |E|)$ fra én node, $O(|E|)$ for et fullt søk", "$O(|V|)$ fra én node, $O(|V| + |E|)$ for et fullt søk", "$O(|E|)$ fra én node, $O(|V| \\cdot |E|)$ for et fullt søk"],
      explanation: "Fra én node røres bare kantene som nås derfra, altså $O(|E|)$. Et fullt søk har en ytre løkke over alle nodene, og bare det å initialisere og sjekke hver node koster $O(|V|)$ uansett hvor få kanter grafen har. Å bytte om de to er felle #6 og et eksplisitt trekkpunkt.",
    },
    {
      question: "Hva er den minste mengden startnoder som til sammen når alle noder i en rettet graf?",
      options: ["Antall komponenter med inngrad 0 i komponentgrafen", "Antall komponenter med utgrad 0 i komponentgrafen", "Antall komponenter med mer enn én node i grafen", "Antall noder med inngrad 0 i den opprinnelige grafen"],
      explanation: "Ingen kant peker inn i en komponent med inngrad 0, så hver av dem må ha sin egen startnode — og siden komponentgrafen er en DAG, kan enhver annen komponent følges bakover til en av dem. Utgrad 0 er der du ender, ikke der du starter. Å telle noder i stedet for komponenter overser at hele rundturer kan mangle innkommende kanter.",
    },
    {
      question: "Hva betyr det at en komponent i komponentgrafen har utgrad 0?",
      options: ["Komponenten når ingen andre komponenter — der ender du", "Komponenten nås ikke fra noen annen komponent i grafen", "Komponenten består av nøyaktig én node uten noen kanter", "Komponenten inneholder en rundtur innom alle sine noder"],
      explanation: "Utgrad 0 betyr at ingen kant går ut av komponenten, så en vandring som kommer dit, stopper der. Alternativet om at ingen når den, beskriver inngrad 0 — og forvekslingen av de to er en av de vanligste feilene i denne sjangeren. Størrelsen på komponenten og om den har rundtur, er uavhengige spørsmål.",
    },
    {
      question: "I en rettet graf: hva forteller deg at det finnes en rundtur?",
      options: ["En komponent med mer enn én node", "En komponent med utgrad lik null", "En komponent med inngrad lik null", "En node med både inn- og utkanter"],
      explanation: "Ligger to noder i samme sterkt sammenhengende komponent, når hver av dem den andre, og veien fram og tilbake er en rundtur. Inn- og utgrad sier bare hvor komponenten ligger i kjeden. En node med både inn- og utkanter kan ligge midt i en ren kjede uten noen rundtur.",
    },
    {
      question: "Hvorfor kan komponentgrafen aldri inneholde en sykel?",
      options: ["En sykel mellom komponenter ville gjort dem til én komponent", "En sykel mellom komponenter ville brutt kjøretiden på $O(|V| + |E|)$", "En sykel mellom komponenter finnes bare i urettede grafer", "En sykel mellom komponenter fjernes når kantene snus i andre gjennomløp"],
      explanation: "Går det en sykel mellom to komponenter, når nodene i dem hverandre begge veier, og da er de per definisjon samme komponent. Derfor er komponentgrafen alltid en DAG — det er et kjent resultat du kan bruke uten å bevise det. Kjøretiden og kantsnuingen er deler av algoritmen, ikke grunnen til at resultatet holder.",
    },
    {
      question: "Hvilken traversering gir korteste vei målt i antall kanter i en uvektet graf?",
      options: ["Bredde-først-søk", "Dybde-først-søk", "Tofarging", "Komponenttelling"],
      explanation: "Bredde-først-søk tømmer ett helt lag før det begynner på neste, så noden som tas ut i runde $d$, ligger nøyaktig $d$ kanter fra start. Dybde-først følger én sti så langt den rekker og kan gi en nabo en mye større avstand. De to andre svarer på strukturspørsmål, ikke avstandsspørsmål.",
    },
    {
      question: "Hva er kjøretiden for å avgjøre om en urettet graf kan tofarges?",
      options: ["$O(|V| + |E|)$", "$O(|V| \\cdot |E|)$", "$O(2^{|V|})$", "$O(|V|^2)$"],
      explanation: "Så snart startnoden har fått en farge, er alle de andre fargene tvunget, så én traversering holder — hver node farges én gang og hver kant sjekkes én gang fra hver ende. Det eksponentielle uttrykket svarer til å prøve alle fordelinger av nodene på to grupper, som er unødvendig nettopp fordi ingenting kan velges fritt.",
    },
    {
      question: "Hva koster det å kjøre en full traversering fra hver node i grafen?",
      options: ["$O(|V| \\cdot (|V| + |E|))$", "$O(|V| + |E|)$", "$O(|V|^2)$", "$O(|E| \\log |V|)$"],
      explanation: "Den ytre løkka går $|V|$ ganger, og hver runde koster en full traversering på $O(|V| + |E|)$. Uttrykket $O(|V|^2)$ glemmer kantleddet og stemmer bare for grafer med svært få kanter. Dette er den naive løsningen på reachability-oppgavene, og felle #1 i bokas feilregister.",
    },
    {
      question: "Hva sier poengtrappen i denne eksamensformen?",
      options: ["Lavere kjøretid gir mer uttelling på samme oppgave", "Lengre og mer detaljert pseudokode gir mer uttelling", "Bare den optimale løsningen gir uttelling i det hele tatt", "Kjøretiden teller ikke så lenge algoritmen er korrekt"],
      explanation: "Sensorveiledningene sier eksplisitt at lavere kjøretidskompleksitet er mer poenggivende, så $O(|V| + |E|)$ slår $O(|V| \\cdot (|V| + |E|))$ på nøyaktig samme oppgave. Begge er korrekte — forskjellen er poeng, ikke riktig mot galt. Delvis uttelling er regelen, så en tregere korrekt løsning gir alltid noe.",
    },
    {
      question: "Hva er kjøretiden for et bredde-først-søk som er avgrenset til dybde $k$?",
      options: ["$O(|V| + |E|)$, men søket rører bare nodene innen $k$ ledd", "$O(k)$, siden søket alltid stopper etter nøyaktig $k$ runder", "$O(|V| \\cdot k)$, siden hvert av de $k$ lagene koster $O(|V|)$", "$O(|E|)$, siden bare kantene innen $k$ ledd blir inspisert"],
      explanation: "Det asymptotiske taket er det samme som for et fullt søk, for med stor nok $k$ dekkes hele grafen. Poenget med grensen er ikke ordenen, men at søket i praksis aldri ser på noder lenger unna enn $k$ ledd. Uttrykk som avhenger bare av $k$, overser at hvert lag kan inneholde mange noder.",
    },
    {
      question: "Hva skjer hvis du glemmer dybdegrensen i et søk som skulle telle noder innen $k$ ledd?",
      options: ["Algoritmen svarer på et annet spørsmål enn det som ble stilt", "Algoritmen får en kjøretid som blir eksponentiell i $k$", "Algoritmen stopper aldri, fordi køen aldri blir tom igjen", "Algoritmen gir riktig tall, men bruker en unødvendig stakk"],
      explanation: "Uten grensen teller algoritmen alle noder som kan nås i det hele tatt, og tallet blir for stort. Kjøretiden endres ikke asymptotisk, og køen blir tom som før, siden hver node legges i den høyst én gang. Feilen er altså ikke ytelse, men at svaret gjelder et annet spørsmål.",
    },
    {
      question: "Hvilke fire ledd skal et Del 2-svar på en grafoppgave inneholde?",
      options: ["Problemet navngitt, antagelser, algoritme og kjøretid", "Problemet navngitt, algoritme, et eksempel og en figur", "Antagelser, algoritme, kjøretid og et korrekthetsbevis", "Algoritme, kjøretid, minnebruk og en alternativ løsning"],
      explanation: "De fire leddene er uavhengige delmomenter, så en besvarelse med feil i selve algoritmen henter likevel inn flertallet av poengene hvis de tre andre står der. Korrekthetsbevis kreves ikke — én setning om grunnideen holder. Figur og minnebruk er fine tillegg, men de erstatter ingen av de fire.",
    },
    {
      question: "Når kan en urettet graf ikke tofarges?",
      options: ["Når grafen har en sykel med et odde antall kanter", "Når grafen har en sykel med et jevnt antall kanter", "Når grafen har flere sammenhengende komponenter", "Når grafen har en node med mer enn to naboer"],
      explanation: "Fargene veksler langs en sykel, så de stemmer bare når du kommer tilbake til start hvis sykelen har et jevnt antall kanter. En sykel av lengde fire går fint opp; en trekant gjør det ikke. Flere komponenter og høye grader er uproblematiske — hver komponent farges for seg.",
    },
    {
      question: "Hvem bestemmer hvilken grafrepresentasjon en Del 2-besvarelse bygger på?",
      options: ["Kandidaten oppgir den selv; sensor binder seg ikke til én form", "Nabomatrise er alltid forutsatt, og trenger ikke å nevnes", "Naboliste er alltid forutsatt, og trenger ikke å nevnes", "Den står i oppgaveteksten, og skal ikke gjentas i svaret"],
      explanation: "Sensor godtar nabolister, nabomatrise eller objektstil, men krever at kandidaten sier hva han antar — det er et eget delmoment som koster to linjer. Oppgaveteksten oppgir det sjelden. Å utelate antagelsene gir trekk selv når algoritmen er helt riktig.",
    },
    {
      question: "Hva gjelder for pseudokode som er vanskelig å lese?",
      options: ["En setning man ikke forstår etter to gjennomlesninger, ignoreres", "Uklar pseudokode gir full uttelling så lenge ideen er riktig", "Bare pseudokode teller; en forklaring i prosa gir aldri uttelling", "Lengden avgjør: jo mer detaljert koden er, desto mer uttelling"],
      explanation: "Kravet er at løsningen er lett forståelig, entydig og presis, ikke at den følger en bestemt syntaks — dette er felle #12. Motsatt vei gjelder det samme til kandidatens fordel: en klar forklaring i vanlig prosa kan gi like mye som, eller mer enn, rotete pseudokode.",
    },
    {
      question: "Hvilken representasjon passer best når algoritmen skal traversere grafen?",
      options: ["Naboliste, fordi du itererer over naboene og ikke over alle noder", "Nabomatrise, fordi kantoppslag mellom to noder koster $O(1)$", "Naboliste, fordi den bruker $O(|V|^2)$ plass uansett tetthet", "Nabomatrise, fordi den bruker $O(|V| + |E|)$ plass uansett tetthet"],
      explanation: "Med naboliste koster det $O(\\text{grad}(v))$ å gå gjennom naboene til $v$, og summen over alle noder blir $O(|V| + |E|)$. Med nabomatrise koster den samme gjennomgangen $O(|V|)$ per node, altså $O(|V|^2)$ totalt. Nabomatrisens $O(1)$-oppslag er en reell fordel, men bare når du spør om enkeltkanter — og plassangivelsene i de to siste alternativene står byttet om.",
    },
  ],
  'in2010-6-1': [
    {
      question: "Hva er kjøretiden til Kahns algoritme når noder med inngrad 0 holdes i en kø?",
      options: ["$O(|V| + |E|)$", "$O(|V| \\cdot |E|)$", "$O(|V|^2)$", "$O(|E| \\log |V|)$"],
      explanation: "Hver node tas ut av køen én gang, og hver kant behandles én gang når nabolista til dens startnode gås gjennom. Kostnadene legges sammen, ikke ganges. $O(|V| \\cdot |E|)$ er fella som oppstår når man tror den indre løkka går over *alle* kanter for hver node; $O(|V|^2)$ er det du faktisk får hvis du dropper køen og leter i inngradstabellen hver runde.",
    },
    {
      question: "Kahns algoritme har gått tom for noder i køen, men rekkefølgen inneholder færre enn $|V|$ noder. Hva betyr det?",
      options: ["Grafen har en sykel, så ingen lovlig rekkefølge finnes", "Grafen er ikke sammenhengende, men rekkefølgen er lovlig", "Algoritmen må kjøres på nytt fra en annen startnode", "Grafen har flere lovlige topologiske rekkefølger"],
      explanation: "En node blir liggende igjen bare hvis inngraden aldri når null, og følger du den kjeden bakover i en endelig graf, ender du i en sykel. At grafen er usammenhengende er ikke noe problem for Kahn — alle kildenoder legges i køen fra starten, uavhengig av komponent.",
    },
    {
      question: "Sant eller usant: enhver rettet graf har minst én topologisk rekkefølge.",
      options: ["Usant — bare grafer uten sykel har en", "Sant — Kahns algoritme finner alltid én slik", "Sant, men bare hvis grafen er sammenhengende", "Usant — bare grafer med én kildenode har en"],
      explanation: "En sykel $v_1 \\to v_2 \\to \\ldots \\to v_1$ krever at $v_1$ kommer både før og etter $v_2$, og det er umulig. Sammenheng spiller ingen rolle, og en DAG kan gjerne ha flere kildenoder — da blir det bare flere lovlige rekkefølger.",
    },
    {
      question: "Hva er summen av inngradene til alle nodene i en rettet graf?",
      options: ["$|E|$", "$|V|$", "$2|E|$", "$|V| + |E|$"],
      explanation: "Hver kant bidrar med nøyaktig 1 til inngraden til den noden den peker på. Svaret $2|E|$ gjelder summen av gradene i en **urettet** graf, der hver kant teller i begge ender — en fast forveksling.",
    },
    {
      question: "Hvorfor bruker Kahns algoritme en kø over noder med inngrad 0?",
      options: ["Fordi leting i tabellen hver runde ville gitt $O(|V|^2)$", "Fordi køen sikrer at rekkefølgen blir entydig bestemt", "Fordi bare en kø kan oppdage at grafen har en sykel", "Fordi en stack ville gitt en ulovlig topologisk rekkefølge"],
      explanation: "Køen husker hvilke noder som nettopp ble klare, så hver node legges inn og tas ut én gang. Rekkefølgen blir ikke entydig av køen — en stack gir en annen, men like lovlig rekkefølge, og sykeltesten er tellingen til slutt, ikke datastrukturen.",
    },
    {
      question: "Hvorfor holder det ikke med tilstandene «besøkt» og «ikke besøkt» når du oppdager sykler med dybde-først-søk?",
      options: ["Fordi en besøkt node kan nås via to stier uten at det finnes sykel", "Fordi dybde-først-søk ikke kan oppdage sykler i det hele tatt", "Fordi to tilstander gir kjøretiden $O(|V|^2)$ i stedet for lineær", "Fordi noder med inngrad 0 aldri blir markert som besøkt"],
      explanation: "Du trenger å skille «ferdig» fra «under prosessering»: bare en node som er under prosessering, ligger på stien du står på nå, og bare da har du gått i ring. En ferdig node du møter igjen, betyr bare at to stier fører til samme sted.",
    },
    {
      question: "Når har en DAG nøyaktig én lovlig topologisk rekkefølge?",
      options: ["Når køen aldri inneholder mer enn én node samtidig", "Når grafen har nøyaktig én node med inngrad 0", "Når hver node har utgrad høyst 1 gjennom hele grafen", "Når antall kanter er nøyaktig $|V| - 1$ i hele grafen"],
      explanation: "To noder i køen samtidig har ingen binding til hverandre og kan bytte plass, så da finnes minst to rekkefølger. Én kildenode er ikke nok: grafen kan forgrene seg senere, og da oppstår valget der.",
    },
    {
      question: "Hvilken algoritme gir korteste vei fra én kilde i en **vektet DAG** med lavest kjøretid?",
      options: ["Topologisk sortering, så én gjennomgang i den rekkefølgen", "Dijkstras algoritme med en binær prioritetskø", "Bredde-først-søk fra kilden, lag for lag", "Bellman-Ford med $|V| - 1$ relakseringsrunder"],
      explanation: "I en DAG kan nodene tas i topologisk rekkefølge, og da er hver node ferdig når den nås: $O(|V| + |E|)$, som slår Dijkstras $O((|V|+|E|) \\log |V|)$. Bredde-først-søk gjelder bare uvektede grafer, og Bellman-Ford er den tregeste av de fire.",
    },
    {
      question: "Du bytter køen i Kahns algoritme ut med en stack. Hva skjer?",
      options: ["Du får en annen, men fullt lovlig topologisk rekkefølge", "Du får en rekkefølge der noen kanter kan peke bakover", "Algoritmen slutter å oppdage at grafen har en sykel", "Kjøretiden stiger fra $O(|V| + |E|)$ til $O(|V|^2)$"],
      explanation: "Det eneste som betyr noe, er at en node først tas ut når inngraden er null — hvilken av de klare nodene du tar, er fritt. Sykeltesten er tellingen til slutt og er uavhengig av strukturen, og både kø og stack har $O(1)$ innsetting og uttak.",
    },
    {
      question: "Hva koster det å bygge den reverserte grafen $G^R$, der alle kanter er snudd?",
      options: ["$O(|V| + |E|)$ — én gjennomgang av alle nabolistene", "$O(|E| \\log |E|)$ — kantene må sorteres på ny startnode", "$O(|V|^2)$ — hver node må sammenlignes med alle andre", "$O(|E|^2)$ — hver kant må sjekkes mot alle andre kanter"],
      explanation: "Du går gjennom hver naboliste én gang og legger kanten `u -> v` inn som `v -> u` i den nye. Ingen sortering og ingen sammenligning er nødvendig, så kostnaden er den samme som å lese grafen.",
    },
    {
      question: "Hva kjennetegner en kildenode i en rettet graf?",
      options: ["Den har inngrad 0 — ingen kanter peker inn til den", "Den har utgrad 0 — ingen kanter peker ut fra den", "Den har høyest utgrad av alle nodene i grafen", "Den er den første noden i enhver topologisk rekkefølge"],
      explanation: "Kildenoder har inngrad 0 og er nøyaktig de nodene Kahn legger i køen fra starten. Utgrad 0 kjennetegner en **sluttnode**. En DAG kan ha flere kildenoder, og da er det flere mulige førstenoder.",
    },
    {
      question: "I en avhengighetsgraf betyr kanten `u -> v` at:",
      options: ["$u$ må være ferdig før $v$ kan starte", "$v$ må være ferdig før $u$ kan starte", "$u$ og $v$ kan utføres samtidig av to lag", "$u$ og $v$ må utføres av det samme arbeidslaget"],
      explanation: "Pilen peker den veien arbeidet flyter, og en topologisk rekkefølge er nettopp en rekkefølge der alle piler peker framover. Snur du regelen, får du den omvendte rekkefølgen — teknisk sett en lovlig rekkefølge for den reverserte grafen, men galt svar på oppgaven som ble stilt.",
    },
    {
      question: "Sant eller usant: en DAG kan inneholde en sykel hvis sykelen er kort nok.",
      options: ["Usant — «asyklisk» i DAG betyr «helt uten sykel»", "Sant — sykler med to noder regnes ikke som sykler", "Sant — bare sykler gjennom kildenoder er forbudt", "Usant — men bare når grafen også er sammenhengende"],
      explanation: "Forkortelsen står for «directed acyclic graph», og asyklisk betyr uten sykel i det hele tatt — også den korteste, `u -> v -> u`. Sammenheng er et helt uavhengig begrep og har ingenting med saken å gjøre.",
    },
    {
      question: "En DAG har kantene `A -> C`, `B -> C` og `C -> D`. Hvor mange lovlige topologiske rekkefølger finnes?",
      options: ["2 — $A$ og $B$ kan bytte plass innbyrdes", "1 — rekkefølgen er fullt bestemt av kantene her", "4 — hver av de to første kan stå to steder", "6 — de tre første nodene kan stå i hvilken som helst orden"],
      explanation: "Både $A$ og $B$ må komme før $C$, men det er ingen binding mellom dem, så `A, B, C, D` og `B, A, C, D` er begge lovlige. $C$ og $D$ har derimot fast plass, så det blir ikke flere enn to.",
    },
  ],
  'in2010-6-2': [
    {
      question: "Hva er Dijkstras forutsetning for at svaret skal bli riktig?",
      options: ["At ingen enkeltkant har negativ vekt", "At grafen ikke inneholder noen negativ sykel", "At grafen er sammenhengende og har minst én sykel", "At alle kantvektene er hele tall større enn null"],
      explanation: "Invarianten hviler på at ingen kant kan trekke fra: enhver alternativ vei må gå via en node med minst like høy avstand. «Ingen negativ sykel» er **Bellman-Fords** krav, og å blande de to er den vanligste fella i kapitlet — Dijkstra feiler på grafer helt uten sykler.",
    },
    {
      question: "Hvilken algoritme gir korteste vei raskest i en **uvektet** graf?",
      options: ["Bredde-først-søk, $O(|V| + |E|)$", "Dijkstra, $O((|V| + |E|)\\log |V|)$", "Bellman-Ford, $O(|V| \\cdot |E|)$", "Dybde-først-søk, $O(|V| + |E|)$"],
      explanation: "Uten vekter er korteste vei det samme som færrest kanter, og det er nettopp det bredde-først-søket teller lagvis. Dybde-først-søk har samme kjøretid, men besøker ikke nodene i avstandsrekkefølge og gir derfor gale avstander.",
    },
    {
      question: "Hva er kjøretiden til Dijkstra med binær prioritetskø?",
      options: ["$O((|V| + |E|)\\log |V|)$", "$O(|V| \\cdot |E| \\log |V|)$", "$O(|V| + |E|)$", "$O(|E| + |V| \\log |E|)$"],
      explanation: "$|V|$ uttak à $O(\\log |V|)$ pluss $|E|$ relakseringer som hver kan koste en `DecreaseKey` à $O(\\log |V|)$. Produktet $|V| \\cdot |E|$ oppstår hvis man tror den indre løkka går over alle kanter for hver node — den går over nabolista til den ene noden.",
    },
    {
      question: "Grafen er en **vektet DAG**. Hvilken metode gir lavest kjøretid?",
      options: ["Topologisk sortering, deretter én gjennomgang med relaksering", "Dijkstra med binær prioritetskø over alle nodene", "Bellman-Ford med $|V| - 1$ fulle relakseringsrunder", "Bredde-først-søk fra kildenoden, lag for lag"],
      explanation: "I topologisk rekkefølge er hver node ferdig i det du kommer til den, så én gjennomgang holder: $O(|V| + |E|)$. Metoden tåler i tillegg negative vekter. Dijkstra er korrekt her (hvis vektene er ikke-negative), men tregere, og taper poengtrappen.",
    },
    {
      question: "Hva er kjøretiden til Bellman-Ford?",
      options: ["$O(|V| \\cdot |E|)$", "$O(|V| + |E|)$", "$O((|V| + |E|)\\log |V|)$", "$O(|V|^2 \\log |E|)$"],
      explanation: "Alle $|E|$ kanter relakseres i hver av $|V| - 1$ runder. Det er klart tregere enn Dijkstra, og prisen for å tåle negative kantvekter.",
    },
    {
      question: "Hvorfor kjører Bellman-Ford nøyaktig $|V| - 1$ runder?",
      options: ["Fordi en korteste vei aldri har flere enn $|V| - 1$ kanter", "Fordi hver runde gjør nøyaktig én node ferdig for godt", "Fordi antall kanter i en sammenhengende graf er minst $|V| - 1$", "Fordi prioritetskøen tømmes med én node per runde"],
      explanation: "Etter runde $k$ er alle korteste veier med høyst $k$ kanter funnet, og en vei med flere enn $|V| - 1$ kanter måtte besøkt en node to ganger. Bellman-Ford har ingen prioritetskø i det hele tatt.",
    },
    {
      question: "Du har tre mulige utgangspunkt og én målnode. Hva gir lavest kjøretid?",
      options: ["Én Dijkstra fra målet i den reverserte grafen", "Én Dijkstra fra hvert av de tre utgangspunktene", "Én bredde-først-traversering fra hvert utgangspunkt", "Én Bellman-Ford-kjøring fra målnoden i grafen"],
      explanation: "Avstanden fra $p$ til $t$ i $G$ er den samme som fra $t$ til $p$ i $G^R$, så én kjøring gir avstanden til alle utgangspunkt samtidig. Tre kjøringer er korrekt, men koster tre ganger så mye — dette er det dokumenterte A/B-skillet på oppgavetypen.",
    },
    {
      question: "Hva koster det å bygge den reverserte grafen $G^R$?",
      options: ["$O(|V| + |E|)$ — én gjennomgang av alle nabolistene", "$O(|E| \\log |V|)$ — kantene legges inn i en prioritetskø", "$O(|V|^2)$ — hele nabomatrisen må transponeres", "$O(|V| \\cdot |E|)$ — hver node sjekkes mot hver kant"],
      explanation: "Du leser hver naboliste én gang og legger kanten `u -> v` inn som `v -> u`. Ingen sortering og ingen prioritetskø trengs, så det koster ikke mer enn å lese grafen — derfor er reverseringen praktisk talt gratis.",
    },
    {
      question: "Når er avstanden til en node **endelig** i Dijkstras algoritme?",
      options: ["Når noden er tatt ut av prioritetskøen", "Når noden først blir oppdaget fra en nabo", "Når alle naboene til noden er relaksert", "Når prioritetskøen er blitt helt tom"],
      explanation: "Uttaket er øyeblikket garantien slår inn: enhver annen vei dit måtte gå via en node som fortsatt ligger i køen med minst like høy avstand. Å stoppe når målnoden blir *oppdaget*, er en fast felle — verdien kan fortsatt bli lavere.",
    },
    {
      question: "Hva er relaksering av kanten fra $u$ til $v$?",
      options: ["Å sette `avstand[v]` til `avstand[u] + w(u,v)` hvis det er lavere", "Å fjerne kanten fra grafen når den ikke kan inngå i noen vei", "Å senke vekten på kanten til den minste vekten i grafen", "Å flytte noden $v$ ut av prioritetskøen og erklære den ferdig"],
      explanation: "Relaksering er grunnoperasjonen i alle fire algoritmene, og koster $O(1)$. Det som skiller BFS, Dijkstra, DAG-metoden og Bellman-Ford, er utelukkende **rekkefølgen** kantene relakseres i.",
    },
    {
      question: "Sant eller usant: BFS gir korteste vei i en graf der alle kanter har vekt 1.",
      options: ["Sant — kostnaden er da nøyaktig antall kanter", "Usant — vektede grafer krever alltid Dijkstra", "Sant, men bare hvis grafen også er asyklisk", "Usant — BFS gir bare korteste vei i urettede grafer"],
      explanation: "Med like vekter faller «færrest kanter» og «lavest kostnad» sammen, og det er nettopp det BFS teller. BFS virker like godt på rettede som urettede grafer, og sykler er ikke noe problem.",
    },
    {
      question: "Hva skjer med noder som ikke kan nås fra startnoden i Dijkstra?",
      options: ["De beholder $\\infty$ som avstand, og det er en del av svaret", "De fjernes fra prioritetskøen uten å bli tatt med i tabellen", "De får avstanden 0, siden ingen vei dit er funnet", "De gir en feilmelding fordi grafen ikke er sammenhengende"],
      explanation: "$\\infty$ er et gyldig og påkrevd svar: sensor ber om avstanden til **alle** noder. En besvarelse som utelater de uoppnåelige nodene, har ikke oppgitt hele sluttilstanden.",
    },
    {
      question: "Hva er en negativ sykel, og hva betyr den for korteste vei?",
      options: ["En sykel med negativ totalvekt — da finnes ingen korteste vei", "En sykel med minst én negativ kant — Dijkstra må da brukes", "En sykel som besøkes baklengs — den kan alltid ignoreres", "En sykel i den reverserte grafen — den påvirker ikke svaret"],
      explanation: "Hver ny runde rundt sykelen gjør veien billigere, i det uendelige, så noe minimum finnes ikke. Bellman-Ford oppdager det med én ekstra relakseringsrunde: gir runde $|V|$ fortsatt forbedringer, finnes en negativ sykel.",
    },
    {
      question: "En graf har positive vekter, sykler og 500 noder. Hvilken algoritme velger du?",
      options: ["Dijkstra, fordi ingen kant er negativ", "Topologisk sortering, fordi den alltid er raskest", "Bellman-Ford, fordi grafen har sykler", "Bredde-først-søk, fordi antall noder er kjent"],
      explanation: "Syklene utelukker DAG-metoden, og vektene utelukker BFS. Bellman-Ford ville gitt riktig svar, men koster $O(|V| \\cdot |E|)$ mot Dijkstras $O((|V| + |E|)\\log |V|)$ — velg alltid den raskeste raden som passer.",
    },
    {
      question: "Hva lagrer `forgjenger`-arrayet i en korteste-vei-algoritme?",
      options: ["Noden vi kom fra da avstanden sist ble forbedret", "Antall kanter på den korteste veien fram til noden", "Den samlede vekten på veien fram til noden så langt", "Hvilken plass noden har i prioritetskøens heap-array"],
      explanation: "Selve **veien** leses ut baklengs fra målet ved å følge forgjengerne, i $O(|V|)$. Uten arrayet har du bare avstandene, og oppgaver som spør «hvilken vei» krever begge deler.",
    },
    {
      question: "Dijkstra kjøres uten prioritetskø, med lineær leting etter minste avstand hver runde. Hva blir kjøretiden?",
      options: ["$O(|V|^2 + |E|)$", "$O((|V| + |E|)\\log |V|)$", "$O(|V| \\cdot |E|)$", "$O(|V| + |E| \\log |E|)$"],
      explanation: "$|V|$ runder à $O(|V|)$ leting gir $O(|V|^2)$, pluss $O(|E|)$ relakseringer som nå er $O(1)$ hver. Varianten er faktisk raskere på svært tette grafer, men $O((|V| + |E|)\\log |V|)$ med binær heap er standardsvaret på eksamen.",
    },
  ],
  'in2010-6-3': [
    {
      question: "Hvilken av disse algoritmene finner **ikke** et minimalt spenntre?",
      options: ["Dybde-først-søk fra en vilkårlig startnode", "Kruskal med union-find og sortert kantliste", "Prim med binær prioritetskø over nodene", "Borůvka, der hver komponent tar sin letteste utkant"],
      explanation: "Dybde-først-søk finner *et* spenntre, men leser aldri kantvektene, så det kan umulig minimere summen av dem. De tre andre er alle grådige MST-algoritmer, og gir samme totalvekt på samme graf.",
    },
    {
      question: "Hvor mange kanter har et spenntre over $|V|$ noder?",
      options: ["$|V| - 1$", "$|V|$", "$|V| + 1$", "$2|V| - 1$"],
      explanation: "Færre kanter gjør at noe henger løst; flere gir en sykel, og en sykel kan alltid gjøres billigere ved å fjerne den dyreste kanten i den. Bruk dette som kontrollregning etter enhver håndkjøring.",
    },
    {
      question: "Hva er kjøretiden til Prim med binær prioritetskø?",
      options: ["$O((|V| + |E|)\\log |V|)$", "$O(|E| \\log |E|)$", "$O(|V| + |E|)$", "$O(|V|^2 \\cdot |E|)$"],
      explanation: "$|V|$ kall på `RemoveMin` og opptil $|E|$ kall på `DecreaseKey`, hvert $O(\\log |V|)$. $O(|E| \\log |E|)$ er Kruskals kjøretid, der sorteringen av kantene dominerer.",
    },
    {
      question: "Hva dominerer kjøretiden til Kruskals algoritme?",
      options: ["Sorteringen av hele kantlista, $O(|E| \\log |E|)$", "Oppslagene i union-find-strukturen, $O(|E| \\log |V|)$", "Gjennomgangen av nabolistene, $O(|V| + |E|)$", "Uttakene fra prioritetskøen, $O(|V| \\log |V|)$"],
      explanation: "Union-find-operasjonene er så nær konstante at de forsvinner i sammenligning med sorteringen. Kruskal bruker ingen prioritetskø i det hele tatt — den sorterer kantlista én gang og går gjennom den.",
    },
    {
      question: "Hva er forskjellen mellom Prim og Dijkstra i selve pseudokoden?",
      options: ["Prim tester på `vekt`, Dijkstra på `avstand[u] + vekt`", "Prim bruker en kø, mens Dijkstra bruker en prioritetskø", "Prim går over kantlista, mens Dijkstra går over nabolistene", "Prim starter i alle noder, mens Dijkstra starter i én node"],
      explanation: "Alt annet er likt — samme prioritetskø, samme løkkestruktur, samme `DecreaseKey`. Nøkkelen i Prim er vekten på kanten inn til treet; i Dijkstra er den avstanden fra startnoden. Bytter du om, løser du et annet problem uten at det synes.",
    },
    {
      question: "Du har bygget et minimalt spenntre og skal finne veien mellom to noder **i treet**. Hva velger du?",
      options: ["Bredde-først-søk i det ferdige treet, $O(|V|)$", "Dijkstra i treet, $O((|V| + |E|)\\log |V|)$", "Prim på nytt fra den ene noden, $O(|E| \\log |V|)$", "Bellman-Ford i treet, $O(|V| \\cdot |E|)$"],
      explanation: "Et tre har ingen sykler, så mellom to noder finnes nøyaktig én sti — det er ingenting å minimere, og en traversering holder. Dijkstra er både tregere og bruker vekter som måler byggekostnad, ikke reiseavstand.",
    },
    {
      question: "Når er det minimale spenntreet i en graf entydig?",
      options: ["Når alle kantvektene i grafen er forskjellige", "Når grafen er komplett og sammenhengende", "Når antall kanter er nøyaktig $|V| - 1$ fra før", "Når alle kantvektene er positive heltall"],
      explanation: "Med forskjellige vekter er hvert grådige valg entydig bestemt, og alle korrekte algoritmer ender på samme tre. Er noen vekter like, kan det finnes flere minimale spenntrær — men de har alltid samme totalvekt.",
    },
    {
      question: "Sant eller usant: et minimalt spenntre kan aldri inneholde den tyngste kanten i grafen.",
      options: ["Usant — er kanten eneste forbindelse til en node, må den med", "Sant — den tyngste kanten kan alltid byttes ut med en lettere", "Sant — grådige algoritmer velger aldri den dyreste kanten", "Usant — men bare når grafen inneholder en negativ kantvekt"],
      explanation: "En node med bare én kant har ikke noe valg, uansett hvor dyr kanten er. Kantvekter i et spenntreproblem er byggekostnader og er alltid ikke-negative, så negative vekter er ikke poenget her.",
    },
    {
      question: "Hva gjør union-find-strukturen i Kruskals algoritme?",
      options: ["Avgjør om to noder allerede ligger i samme komponent", "Sorterer kantene etter vekt før gjennomgangen starter", "Holder styr på hvilken kant som er lettest i hver runde", "Regner ut totalvekten på spenntreet underveis"],
      explanation: "`Find(u)` og `Find(v)` gir samme svar nøyaktig når kanten ville laget en sykel, og da forkastes den. Sorteringen skjer én gang før løkka og er en helt separat operasjon.",
    },
    {
      question: "En oppgave sier at alle punkter kan kobles til alle. Hva blir Prims kjøretid?",
      options: ["$O(|V|^2 \\log |V|)$", "$O(|V| \\log |V|)$", "$O(|V|^3)$", "$O(|V|^2)$"],
      explanation: "I en komplett graf er $|E| = |V|(|V|-1)/2$, altså $O(|V|^2)$ kanter. Satt inn i $O((|V| + |E|)\\log |V|)$ gir det $O(|V|^2 \\log |V|)$ — en formulering som er dokumentert i arkivet.",
    },
    {
      question: "Hvordan modellerer du en forbindelse som allerede finnes og er gratis å bruke?",
      options: ["Som en kant med vekten 0 i den samme grafen", "Ved å fjerne begge endenodene fra grafen først", "Som en kant med negativ vekt, slik at den prioriteres", "Ved å slå de to nodene sammen til én node med dobbel vekt"],
      explanation: "En 0-kant er alltid den letteste tilgjengelige, så enhver MST-algoritme tar den med hvis den kan. Negative vekter er unødvendig og gir ingen ekstra effekt, siden 0 allerede er minimum.",
    },
    {
      question: "Sant eller usant: Prim og Kruskal kan gi trær med ulik totalvekt på samme graf.",
      options: ["Usant — begge finner et minimalt tre, med samme sum", "Sant — Prim er grådig fra én node, Kruskal fra alle", "Sant — men bare når grafen ikke er sammenhengende", "Usant — de velger alltid nøyaktig de samme kantene"],
      explanation: "Alle minimale spenntrær i en graf har per definisjon samme totalvekt. Er noen vekter like, kan de to algoritmene velge forskjellige kanter — så det siste alternativet er også galt, bare på en annen måte.",
    },
    {
      question: "Hvilket problem løser Dijkstras algoritme, sammenlignet med Prims?",
      options: ["Avstand fra én node til alle andre, ikke billigst nett", "Billigst mulig nett fra én node, ikke avstand til alle", "Antall komponenter i grafen, ikke summen av kantvektene", "Rekkefølgen nodene kan besøkes i, ikke kantene som velges"],
      explanation: "Dijkstra minimerer $|V| - 1$ avstander hver for seg, målt fra én bestemt node; Prim minimerer **summen** av de $|V| - 1$ kantene. De to trærne faller sjelden sammen, og ingen av dem løser det andre problemet.",
    },
    {
      question: "Hva er ideen i Borůvkas algoritme?",
      options: ["Hver komponent velger sin egen letteste utkant, i runder", "Hver node velger sin letteste kant, og det gjentas én gang", "Kantene sorteres, og hver annen kant tas med i treet", "Treet vokser fra to startnoder samtidig, til de møtes"],
      explanation: "Antall komponenter minst halveres hver runde, så det trengs $O(\\log |V|)$ runder à $O(|E|)$ arbeid. På eksamen skal du kunne krysse av at Borůvka finner et minimalt spenntre — du blir ikke bedt om å håndkjøre den.",
    },
  ],
  'in2010-6-4': [
    {
      question: "Hvilket symbol får kortest kodeord i et Huffman-tre?",
      options: ["Det med høyest frekvens", "Det med lavest frekvens", "Det som står først i alfabetet", "Det som ble satt inn sist"],
      explanation: "Hyppige symboler slås sammen sist og havner derfor nærmest rota. Å gi kortest kode til det sjeldneste er den klassiske ombyttingen, og den ødelegger hele svaret — kontrollen er å sjekke at kodelengdene går motsatt vei av frekvensene.",
    },
    {
      question: "Hvor mange sammenslåinger gjør Huffmans algoritme på $n$ symboler?",
      options: ["$n - 1$", "$n$", "$2n - 1$", "$n \\log n$"],
      explanation: "Hver runde tar ut to noder og setter inn én, så køen krymper med én per runde, fra $n$ til 1. Tallet er en gratis kontrollregning på enhver håndkjøring: har du flere eller færre, har du mistet eller duplisert en node.",
    },
    {
      question: "Hva er kjøretiden til Huffmans algoritme?",
      options: ["$O(n \\log n)$", "$O(n)$", "$O(n^2)$", "$O(\\log n)$"],
      explanation: "$n$ innsettinger i prioritetskøen pluss $n - 1$ sammenslåinger, hver med to `RemoveMin` og én `Insert` à $O(\\log n)$. Logaritmefaktoren kommer fra prioritetskøen — uten den kunne du ikke funnet de to minste billig.",
    },
    {
      question: "Hva står $n$ for i Huffmans kjøretid $O(n \\log n)$?",
      options: ["Antall forskjellige symboler i alfabetet", "Antall tegn i teksten som skal kodes", "Antall bits i den ferdige kodede teksten", "Antall interne noder i det ferdige treet"],
      explanation: "Å kode en tekst på en million tegn med seks symboler koster bare $O(6 \\log 6)$ for å bygge treet, pluss ett oppslag per tegn. Å blande alfabetets størrelse med tekstens lengde er felle #10 — kjøretid med udefinerte størrelser.",
    },
    {
      question: "Hva betyr det at Huffman-koden er en **prefikskode**?",
      options: ["Ingen kodeord er begynnelsen på et annet kodeord", "Alle kodeord starter med det samme første bitet", "Kodeordene er sortert alfabetisk etter symbolnavn", "Hvert kodeord er nøyaktig ett bit lengre enn det forrige"],
      explanation: "Egenskapen gjør bitstrengen entydig lesbar uten skilletegn: har du lest et gyldig kodeord, kan det ikke være starten på noe lengre. Den kommer gratis av at alle symbolene ligger i **bladene** i treet.",
    },
    {
      question: "Hvordan regner du ut totalt antall bits for en tekst?",
      options: ["Summen av frekvens ganger kodelengde over alle symboler", "Summen av kodelengdene til alle symbolene i alfabetet", "Antall symboler ganget med den lengste kodelengden", "Summen av frekvensene ganget med antall symboler"],
      explanation: "$\\sum_s f(s) \\cdot \\ell(s)$ — hvert symbol koster kodelengden sin, én gang per forekomst. Å summere kodelengdene alene gir treets samlede dybde, ikke tekstens størrelse.",
    },
    {
      question: "Sant eller usant: Huffman-treet er entydig bestemt av frekvenstabellen.",
      options: ["Usant — like frekvenser gir flere gyldige trær", "Sant — algoritmen er helt deterministisk hele veien", "Usant — treet avhenger også av tekstens lengde", "Sant — men bare når alle frekvensene er forskjellige"],
      explanation: "Er to frekvenser like, kan sammenslåingene gjøres i forskjellig rekkefølge, og kodeordene kan bli forskjellige. Den totale bitkostnaden er derimot alltid den samme, og det er den sensor regner på.",
    },
    {
      question: "Når gir Huffman-koding størst gevinst mot en fast kodelengde?",
      options: ["Når frekvensfordelingen er svært skjev", "Når alle symbolene forekommer omtrent like ofte", "Når antall forskjellige symboler er en toerpotens", "Når teksten er kortere enn antallet symboler"],
      explanation: "Huffman tjener på skjevhet: dominerer noen få symboler, får de svært korte koder, og gevinsten blir stor. Ved helt jevn fordeling nærmer kodelengdene seg den faste, og det er nesten ingenting å hente.",
    },
    {
      question: "Hvor mange bits per symbol trenger en **fast** koding av 6 forskjellige symboler?",
      options: ["3 bits", "2 bits", "4 bits", "6 bits"],
      explanation: "Med 2 bits kan du skille bare 4 symboler, så det trengs 3 ($2^3 = 8 \\ge 6$). Dette er referansetallet du sammenligner Huffman med når oppgaven spør hvor mye som spares.",
    },
    {
      question: "Hva er den lengste kodelengden Huffman kan gi med $n$ symboler?",
      options: ["$n - 1$ bits", "$\\log_2 n$ bits", "$n$ bits", "$n/2$ bits"],
      explanation: "Det skjer når frekvensene vokser som Fibonacci-tallene 1, 1, 2, 3, 5, 8 — da blir hver ny sammenslåing like stor som neste symbol, og treet blir en kjede. Huffman garanterer lavest totalkostnad, ikke lav høyde.",
    },
    {
      question: "Hvilke to noder slår Huffmans algoritme sammen i hvert steg?",
      options: ["De to nodene med lavest frekvens i køen", "De to nodene med høyest frekvens i køen", "De to nodene som ble satt inn sist i køen", "Den letteste og den tyngste noden i køen"],
      explanation: "Algoritmen er grådig uten unntak: alltid de to laveste frekvensene, også når den ene er en node du nettopp laget. Da havner de sjeldneste symbolene dypest, og det er nøyaktig hva en optimal kode krever.",
    },
    {
      question: "Hvordan dekoder du en bitstreng som er kodet med et Huffman-tre?",
      options: ["Følg treet ned fra rota, ett bit av gangen, til du når et blad", "Del strengen i like store blokker og slå opp hver blokk", "Les strengen baklengs og følg treet oppover fra bladene", "Slå opp de første tre bitene i kodetabellen om og om igjen"],
      explanation: "Når du når et blad, skriver du ut symbolet og starter på rota igjen. Faste blokker virker ikke, siden kodeordene har ulik lengde — det er nettopp prefiks-egenskapen som gjør at du klarer deg uten skilletegn.",
    },
  ],
  'in2010-6-5': [
    {
      question: "Grafen er uvektet. Hvilken rad i korteste-avstander-matrisen gjelder?",
      options: ["Bredde-først-søk, $O(|V| + |E|)$", "Dijkstra, $O((|V| + |E|)\\log |V|)$", "Bellman-Ford, $O(|V| \\cdot |E|)$", "Topologisk sortering, $O(|V| + |E|)$"],
      explanation: "Uten vekter er korteste vei det samme som færrest kanter, og det er nettopp det bredde-først-søket teller lagvis. Topologisk sortering har samme kjøretid, men forutsetter at grafen er asyklisk og at kantene har vekter.",
    },
    {
      question: "Hva er kjøretiden til en **full** dybde-først-traversering?",
      options: ["$O(|V| + |E|)$", "$O(|E|)$", "$O(|V| \\log |V|)$", "$O(|V|^2)$"],
      explanation: "DFS-full besøker hver node og hver kant én gang. DFS fra **én** node er $O(|E|)$ — å blande de to er felle #6, som det trekkes eksplisitt for i arkivet.",
    },
    {
      question: "Hvilken algoritme passer når grafen er en vektet DAG med noen negative kanter?",
      options: ["Topologisk sortering og én gjennomgang, $O(|V| + |E|)$", "Bellman-Ford i $|V| - 1$ runder, $O(|V| \\cdot |E|)$", "Dijkstra med binær prioritetskø, $O((|V|+|E|)\\log |V|)$", "Bredde-først-søk lag for lag, $O(|V| + |E|)$"],
      explanation: "DAG-metoden tåler negative vekter og er den raskeste raden i matrisen. Bellman-Ford ville også gitt riktig svar, men koster mye mer; Dijkstra er utelukket av den negative kanten.",
    },
    {
      question: "Hva er kjøretiden til Kruskals algoritme?",
      options: ["$O(|E| \\log |E|)$", "$O((|V| + |E|)\\log |V|)$", "$O(|V| + |E|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Sorteringen av kantene dominerer; union-find-operasjonene er så nær konstante at de forsvinner. $O((|V| + |E|)\\log |V|)$ er Prims kjøretid, som bruker prioritetskø i stedet for sortering.",
    },
    {
      question: "Oppgaven sier «koble alle punktene sammen til lavest mulig samlet kostnad». Hva er problemet?",
      options: ["Minimalt spenntre over punktene", "Korteste vei fra én kilde", "Topologisk sortering", "Optimal prefikskode"],
      explanation: "Signalordene er «koble alt sammen» og «samlet kostnad» — det minimeres en **sum** av kanter, ikke en avstand. Hadde spørsmålet vært «hvor raskt kommer jeg fra A til B», ville det vært korteste vei.",
    },
    {
      question: "Oppgaven spør hvilket av fem depoter som ligger nærmest ett bestemt mottak. Hva gjør du?",
      options: ["Snur grafen og kjører Dijkstra én gang fra mottaket", "Kjører Dijkstra fra hvert av de fem depotene", "Kjører Bellman-Ford fra mottaket i den vanlige grafen", "Bygger et minimalt spenntre og måler i det"],
      explanation: "Avstanden fra $p$ til $t$ i $G$ er den samme som fra $t$ til $p$ i $G^R$, så én kjøring gir svaret for alle fem. Fem kjøringer er korrekt, men fem ganger så dyrt — dette er felle #1 og det dokumenterte A/B-skillet.",
    },
    {
      question: "Hva kontrollerer du etter en MST-håndkjøring?",
      options: ["At treet ditt har nøyaktig $|V| - 1$ kanter i alt", "At alle kantvektene i treet er forskjellige", "At den letteste kanten i grafen ikke er med", "At treet inneholder alle kantene under gjennomsnittet"],
      explanation: "Flere kanter betyr at du har en sykel; færre at noe henger løst. Den letteste kanten i grafen er derimot alltid med, og gjennomsnittet har ingenting med saken å gjøre.",
    },
    {
      question: "Hva kontrollerer du underveis i en Dijkstra-håndkjøring?",
      options: ["At avstanden på nodene du tar ut aldri synker", "At alle nodene har fått en endelig avstand fra start", "At prioritetskøen har like mange elementer hver runde", "At hver kant relakseres nøyaktig to ganger"],
      explanation: "Uttaksrekkefølgen er ikke-synkende — synker den, har du enten regnet feil eller så har grafen en negativ kant. Noder som ikke kan nås, beholder $\\infty$, og det er et riktig svar.",
    },
    {
      question: "Et spenntre er bygget. Hva bruker du for å finne veien mellom to noder **i treet**?",
      options: ["Bredde-først-søk i treet, $O(|V|)$", "Dijkstra, $O((|V| + |E|)\\log |V|)$", "Prim på nytt fra den ene noden", "Bellman-Ford, siden vektene kan variere"],
      explanation: "Et tre har ingen sykler, så mellom to noder finnes nøyaktig én sti — det er ingenting å minimere. I tillegg måler vektene byggekostnad, ikke reiseavstand, så å summere dem langs ruten gir ikke et meningsfullt tall.",
    },
    {
      question: "Hvilke fire ledd skal en Del 2-besvarelse ha?",
      options: ["Problem, antagelser, algoritme og kjøretid", "Innledning, pseudokode, eksempel, konklusjon", "Definisjon, bevis, kjøretid, kanttilfeller", "Datastruktur, invariant, testkjøring, kjøretid"],
      explanation: "Dette er sensors faktiske krav, og mangler ett av leddene, trekkes det. Merk at algoritmen kan gis som pseudokode **eller** som en klar forklaring i naturlig språk — kravet er entydighet, ikke syntaks.",
    },
    {
      question: "Hva er Prims kjøretid når oppgaven sier at alle punkter kan kobles til alle?",
      options: ["$O(|V|^2 \\log |V|)$", "$O(|V| \\log |V|)$", "$O(|V|^2)$", "$O(|V|^3 \\log |V|)$"],
      explanation: "En komplett graf har $|E| = |V|(|V|-1)/2$, altså $O(|V|^2)$ kanter, og satt inn i $O((|V| + |E|)\\log |V|)$ gir det $O(|V|^2 \\log |V|)$. Formuleringen «alle kan kobles til alle» er invitasjonen til å oppgi den formen.",
    },
    {
      question: "Sant eller usant: Bellman-Ford gir riktig svar overalt hvor Dijkstra gjør det.",
      options: ["Sant — svakere forutsetninger, men tregere", "Usant — Bellman-Ford krever at ingen kant er negativ", "Usant — Bellman-Ford virker bare på asykliske grafer", "Sant — og den er raskere på grafer med få kanter"],
      explanation: "Bellman-Ford krever bare at det ikke finnes en negativ **sykel**, mens Dijkstra krever at ingen **kant** er negativ. Prisen er kjøretiden $O(|V| \\cdot |E|)$ mot $O((|V| + |E|)\\log |V|)$, og poengtrappen straffer det tregere valget.",
    },
    {
      question: "Hvilken kontroll fanger den vanligste feilen i en Huffman-håndkjøring?",
      options: ["At kodelengdene går motsatt vei av frekvensene", "At alle kodeordene har forskjellig lengde", "At summen av kodelengdene er lik antall symboler", "At det hyppigste symbolet har kodeordet `0`"],
      explanation: "Den klassiske feilen er å gi kortest kode til det sjeldneste symbolet, og kontrollen tar fem sekunder. Flere symboler kan godt ha samme kodelengde, og hvilket kodeord som blir `0`, avhenger av hvordan treet tegnes.",
    },
    {
      question: "Hva sier poengtrappen på en Del 2-oppgave?",
      options: ["Lavere kjøretid gir flere poeng på nøyaktig samme oppgave", "Lengre og mer detaljert pseudokode gir flere poeng", "Riktig svar gir full pott uansett hvilken metode du valgte", "Bare den optimale løsningen gir poeng i det hele tatt"],
      explanation: "«Lavere kjøretidskompleksitet er mer poenggivende» er den mest gjentatte poengregelen i arkivet. Delvis uttelling er samtidig regelen — en korrekt, men treg løsning gir noe, bare ikke full pott.",
    },
    {
      question: "Hvilket problem beskriver ordene «må gjøres før» og «sirkulær avhengighet»?",
      options: ["Topologisk sortering med sykeldeteksjon", "Minimalt spenntre med union-find", "Korteste vei i en graf med negative kanter", "Optimal prefikskode fra en frekvenstabell"],
      explanation: "Kahns algoritme gir rekkefølgen, og sykeltesten er innebygd: prosesserte algoritmen færre enn $|V| noder$, finnes en sykel. Å glemme å melde fra om sykelen er den vanligste mangelen på denne oppgavetypen.",
    },
    {
      question: "Hva er felles for Prim og Dijkstra i pseudokoden?",
      options: ["Alt bortsett fra selve testen i relakseringen", "De bruker begge en sortert kantliste og union-find", "De bygger begge et minimalt spenntre fra en startnode", "De krever begge at grafen er asyklisk for å virke"],
      explanation: "Prim sammenligner med `vekt`, Dijkstra med `avstand[u] + vekt` — én linje, to helt forskjellige problemer. Derfor har de også identisk kjøretid, og derfor er det så lett å skrive den ene når man mente den andre.",
    },
    {
      question: "Hva trekkes det eksplisitt for i kjøretidsangivelsen på Del 2?",
      options: ["Å bruke $n$ uten å si hva størrelsen står for", "Å oppgi både verste og forventet kjøretid", "Å skrive $O(|V| + |E|)$ i stedet for $O(V + E)$", "Å begrunne kjøretiden med løkketelling i stedet for et teorem"],
      explanation: "Det trekkes for manglende kjøretid, for kjøretid som ikke matcher algoritmen du ga, og for udefinert $n$ — felle #10. Å oppgi begge tilfeller og å skrive absoluttverditegn er tvert imot det som forventes.",
    },
    {
      question: "En oppgave gir én graf med anleggskostnader og én med reisetider over de samme punktene. Hva skiller problemene?",
      options: ["Om vekten er en kostnad ved å ha eller å bruke kanten", "Om grafen er rettet eller urettet i de to tilfellene", "Om antall kanter er større eller mindre enn antall noder", "Om vektene er heltall eller kan være desimaltall"],
      explanation: "Anleggskostnad er en kostnad ved å **ha** kanten og hører hjemme i et spenntreproblem; reisetid er en kostnad ved å **bruke** den og hører hjemme i et korteste-vei-problem. Retning og tallformat avgjør ingenting her.",
    },
  ],
  'in2010-7-1': [
    {
      question: "Hvilke to strukturer bygger en mediankø?",
      options: ["Max-heap for nedre halvdel, min-heap for øvre", "Min-heap for nedre halvdel, max-heap for øvre halvdel", "To min-heaper som holdes like store hele veien", "En heap og et balansert søketre av samme størrelse"],
      explanation: "Max-heapen holder de små tallene, så toppen er det største av dem — altså medianen. Byttes de om, ligger medianen ikke lenger på skillet. To min-heaper gir ingen tilgang til det største av de små.",
    },
    {
      question: "Hva er kjøretiden til `Median()` i en mediankø med to heaps?",
      options: ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n \\log n)$"],
      explanation: "Medianen ligger på toppen av max-heapen, altså på indeks 0, og leses uten å endre strukturen. Alternativet $O(\\log n)$ er kjøretiden for `Insert`, og $O(n)$ er det du får hvis du bruker bare én heap.",
    },
    {
      question: "Hva er invarianten som gjør en mediankø riktig?",
      options: ["Like store, eller max-heapen har ett element mer", "De to heapene har alltid nøyaktig like mange elementer", "Max-heapen er alltid minst dobbelt så stor som den andre", "De to heapene inneholder nøyaktig de samme verdiene"],
      explanation: "Holder invarianten, ligger medianen alltid på toppen av max-heapen. Krav om nøyaktig like størrelser er umulig ved et oddetall elementer, og det siste alternativet beskriver kombinasjonsgrepet heap pluss hash-set.",
    },
    {
      question: "Hvor mange elementer må flyttes mellom heapene per `Insert` i en mediankø?",
      options: ["Høyst ett", "Høyst to, ett hver vei", "Så mange som trengs, i en løkke", "Halvparten av den største heapen"],
      explanation: "Størrelsene endrer seg med 1 per innsetting, så avviket kan aldri bli mer enn 1 for stort. Det er nettopp derfor `Insert` er $O(\\log n)$ og ikke noe mer — balanseringen er aldri en løkke.",
    },
    {
      question: "Hva er kjøretiden til `Insert` og `RemoveMin` i en bøttekø med $N$ prioritetsnivåer?",
      options: ["$O(1)$ og $O(N)$", "$O(N)$ og $O(1)$", "$O(\\log N)$ og $O(\\log N)$", "$O(1)$ og $O(\\log n)$"],
      explanation: "`Insert` er ett arrayoppslag pluss innsetting bakerst i en liste; `RemoveMin` skanner fra bøtte 0 til første ikke-tomme. Er $N$ en fast konstant, er $O(N)$ det samme som $O(1)$ — men uttrykket må skrives i $N$, ikke i $n$.",
    },
    {
      question: "Når er en bøttekø et bedre valg enn en min-heap?",
      options: ["Når antall prioritetsnivåer er fast og lite", "Når antall elementer i køen er fast og lite", "Når prioritetene er reelle tall i et stort område", "Når elementene settes inn i sortert rekkefølge"],
      explanation: "Bøttekøens kjøretid avhenger av antall nivåer $N$, ikke av antall elementer $n$. Vokser antall prioritetsnivåer, eller er prioritetene vilkårlige, faller argumentet, og heapen er riktig igjen.",
    },
    {
      question: "Hvilken egenskap gir en bøttekø som en min-heap ikke garanterer?",
      options: ["Stabilitet — like prioriteter kommer ut i innsettingsrekkefølge", "Garantert $O(\\log n)$ på begge operasjonene", "Mulighet for å endre prioriteten til et element", "Lavere minnebruk enn en array-basert heap"],
      explanation: "Hver bøtte er en FIFO-liste, så to elementer med samme prioritet kommer ut i den rekkefølgen de kom inn. En heap gir ingen slik garanti for like nøkler, og den bruker gjerne mindre minne enn $N$ bøtter.",
    },
    {
      question: "Hva er kjøretiden for `SettInn(ord)` i et trie, når ordet har $L$ bokstaver?",
      options: ["$O(L)$, uansett hvor mange ord som er lagret", "$O(L \\log m)$, der $m$ er antall lagrede ord", "$O(m)$, siden hele treet må gjennomsøkes hver gang", "$O(L + m)$, én gjennomgang av hver"],
      explanation: "Ett steg per bokstav, enten noden finnes fra før eller lages. At kjøretiden er uavhengig av antall lagrede ord, er trie-ets definerende egenskap og selve grunnen til å velge det.",
    },
    {
      question: "Hvorfor kan ikke et hashmap svare raskt på et prefikssøk?",
      options: ["Hashverdien til prefikset er urelatert til ordets", "Hashmap-oppslag er $O(\\log m)$ og dermed for tregt", "Hashmap kan ikke lagre strenger, bare heltall som nøkler", "Hashmap mister rekkefølgen på alle ordene ved rehashing"],
      explanation: "Hashfunksjonen sprer nøkler med vilje, så `sa` og `sand` havner tilfeldige steder. Prefikssøk krever derfor at hvert av de $m$ ordene sjekkes: $O(m \\cdot L)$. Hashmap-oppslag er $O(1)$ forventet og håndterer strenger fint.",
    },
    {
      question: "Hvorfor trenger et trie et eget `erOrdslutt`-flagg på nodene?",
      options: ["For å skille et helt ord fra et passert prefiks", "For å vite hvilken node som er rota i treet", "For å telle hvor mange ord som ligger under noden", "For å hindre at det samme ordet settes inn to ganger"],
      explanation: "Uten flagget kan treet ikke skille «sal», som er et helt ord, fra noden man passerer på vei til «salt». Det er et kanttilfelle sensor gir delpoeng for å ha tenkt på.",
    },
    {
      question: "Hvorfor er `Finnes(x)` i en min-heap $O(n)$ og ikke $O(\\log n)$?",
      options: ["Heap-egenskapen ordner opp–ned, ikke venstre–høyre", "Heapen er lagret som array og ikke som tre", "Heapen er bare delvis sortert etter hver innsetting", "Heapen tillater duplikater og må derfor lete videre"],
      explanation: "Forelderen er mindre enn begge barna, men det sies ingenting om venstre mot høyre, så du kan ikke velge én vei nedover. Å forveksle dette med søketre-egenskapen er felle #9. Array-representasjonen er ikke problemet.",
    },
    {
      question: "Hva er svarformens fire ledd på en ADT-designoppgave?",
      options: ["Strukturene, invarianten, operasjonene, kjøretid per stk.", "Problemet, pseudokoden, kjøretiden, en figur av strukturen", "Antagelsene, kjøretiden, minnebruken og en konklusjon", "Strukturene, kjøretiden totalt, kanttilfellene, en drøfting"],
      explanation: "Ordene «per operasjon» står i oppgaveteksten, og én samlet kjøretid er ikke et svar. Pseudokode og figur er ikke krav i denne sjangeren, og total kjøretid gir lite når operasjonene har helt ulike profiler.",
    },
  ],
  'in2010-7-2': [
    {
      question: "Hva er det eksplisitt trukne feilgrepet i en drøftingsoppgave?",
      options: ["Å bruke $n$ uten å si hva $n$ står for", "Å bruke flere symboler enn $n$ i samme svar", "Å skrive svaret som prosa i stedet for pseudokode", "Å oppgi minnebruken før kjøretiden i svaret"],
      explanation: "Uten en definisjon av $n$ kan ingen kjøretid etterprøves, og det er felle #10 i bokas feilregister. Å bruke flere symboler er derimot ofte påkrevd — $n$, $u$ og $k$ er tre forskjellige tall. Prosa er den forventede formen i denne sjangeren, og rekkefølgen mellom tid og minne er fri.",
    },
    {
      question: "Du teller unike verdier ved å legge alle $n$ forekomstene i et hash-set. Hva er kjøretiden i verste tilfelle?",
      options: ["$O(n^2)$", "$O(n)$", "$O(n \\log n)$", "$O(1)$"],
      explanation: "Hasher alle nøklene til samme plass, blir hvert innlegg et lineært søk, og $n$ innlegg gir $O(n^2)$. $O(n)$ er den forventede kjøretiden, ikke den verste — å oppgi den som verste er nettopp den usikkerheten antigjettingen straffer.",
    },
    {
      question: "Du teller unike verdier med et tellearray over et verdiområde med $k$ mulige verdier. Hva er kjøretiden?",
      options: ["$O(n + k)$", "$O(n)$", "$O(k)$", "$O(n \\cdot k)$"],
      explanation: "Ett pass gjennom de $n$ forekomstene, og ett pass gjennom de $k$ plassene for å nullstille og telle opp. Begge leddene må med: det er $k$-leddet som gjør strategien sårbar når verdiområdet er stort.",
    },
    {
      question: "Når er tellearrayet et bedre valg enn hash-settet?",
      options: ["Når verdiområdet $k$ er lite i forhold til antall forekomster $n$", "Når antall unike verdier $u$ er lite i forhold til antall forekomster $n$", "Når verdiområdet $k$ ikke er kjent på forhånd", "Når forekomstene allerede ligger sortert etter verdi"],
      explanation: "Terskelen går på $k$ mot $n$: er $k$ lite, forsvinner $k$-leddet, og du får garanterte kjøretider i stedet for forventede. Et lite $u$ taler tvert imot for hash-settet, som bare lagrer de verdiene som forekommer. Er $k$ ukjent, kan arrayet ikke allokeres i det hele tatt.",
    },
    {
      question: "Hvordan skal kjøretiden for et oppslag i et hashmap oppgis presist?",
      options: ["$O(1)$ forventet, og $O(n)$ i verste tilfelle", "$O(1)$ garantert, uavhengig av hashfunksjonen", "$O(\\log n)$ forventet, og $O(n)$ i verste tilfelle", "$O(1)$ i verste tilfelle, og $O(\\log n)$ forventet"],
      explanation: "Ordet «forventet» er ikke en forkortelse man kan sløyfe — uten det er påstanden feil, siden alle nøkler kan kollidere. Alternativet «$O(1)$ garantert» er nettopp den upresise formen som gir trekk på en drøftingsoppgave.",
    },
    {
      question: "Hvor mange bokstavsammenligninger kan et prefikssøk i et hashmap med $m$ ord og ordlengde $L$ koste?",
      options: ["$O(m \\cdot L)$, siden hvert ord må sjekkes", "$O(L)$, siden bare prefikset hashes", "$O(\\log m)$, siden oppslaget er et binærsøk", "$O(m + L)$, siden ordlista skannes én gang"],
      explanation: "Hashverdien til `sa` har ingen sammenheng med hashverdien til `sand`, så et hashmap kan bare svare på eksakte oppslag. Prefikssøk krever at hvert av de $m$ ordene sjekkes. Alternativet $O(L)$ er trie-ets kjøretid, ikke hashmapets.",
    },
    {
      question: "Hvilken struktur bruker mest minne til en ordliste, og er den likevel riktig valg for autocomplete?",
      options: ["Trie bruker mest, og er riktig når prefikssøk er hovedoperasjonen", "Hashmap bruker mest, og er riktig når prefikssøk er hovedoperasjonen", "Trie bruker mest, og er derfor feil valg uansett bruksmønster", "Begge bruker like mye, så valget avgjøres bare av kjøretiden"],
      explanation: "Et trie lager én node per unik prefiksbokstav og bruker derfor mer plass enn ett hashmap-oppslag per ord. Det vinner likevel når prefikssøk utføres ofte, fordi $O(L + t)$ er uavhengig av ordlistas størrelse. Å velge den mest minnekrevende strategien bevisst er en sterkere besvarelse enn å påstå at den vinner på alt.",
    },
    {
      question: "En glissen graf med $\\lvert V \\rvert$ noder og $\\lvert E \\rvert$ kanter skal lagres. Hva er minnebruken til en naboliste mot en nabomatrise?",
      options: ["$O(\\lvert V \\rvert + \\lvert E \\rvert)$ mot $O(\\lvert V \\rvert^2)$", "$O(\\lvert V \\rvert \\cdot \\lvert E \\rvert)$ mot $O(\\lvert V \\rvert^2)$", "$O(\\lvert E \\rvert)$ mot $O(\\lvert V \\rvert \\cdot \\lvert E \\rvert)$", "$O(\\lvert V \\rvert^2)$ mot $O(\\lvert V \\rvert + \\lvert E \\rvert)$"],
      explanation: "Nabolista lagrer én oppføring per node og én per kant; matrisen lagrer én celle per nodepar, uansett hvor få kanter som finnes. Siste alternativ er de samme uttrykkene med strukturene byttet om — les hvilken kolonne som gjelder hvilken struktur.",
    },
    {
      question: "En drøfting ender med setningen «hvilken som er best, kommer an på situasjonen». Hva mangler?",
      options: ["Betingelsen som avgjør — hvilken størrelse valget henger på", "En pseudokode-skisse av begge strategiene", "En begrunnelse for hvorfor begge strategiene er korrekte", "En oversikt over hvilke kanttilfeller som ikke er relevante"],
      explanation: "Sensor vet at det kommer an på; spørsmålet er på hva. En konklusjon navngir terskelen, for eksempel «velg tellearrayet når $k$ er i samme størrelsesorden som $n$ eller mindre». Pseudokode er ikke påkrevd i denne sjangeren.",
    },
    {
      question: "Kan en sortering med $O(n^2)$ verste kjøretid være det beste valget framfor en med $O(n \\log n)$?",
      options: ["Ja, hvis oppgaveteksten sier at inndata er nesten sortert", "Nei, en lavere øvre grense er alltid det mest poenggivende valget", "Ja, men bare hvis den kvadratiske sorteringen også er stabil", "Nei, med mindre den kvadratiske sorteringen sorterer på stedet"],
      explanation: "Beste tilfelle er relevant når teksten gjør det relevant: gnome sort er $O(n)$ på nesten sortert inndata og gjorde 9 sammenligninger mot flettesorteringens 12 på åtte tall. Stabilitet og in-place er egne akser og avgjør ikke dette spørsmålet alene.",
    },
    {
      question: "En logg har 200 000 skanninger av 3 500 forskjellige varer, og varenummer kan være 0 til 999 999. Hva er $n$, $u$ og $k$?",
      options: ["$n = 200\\,000$, $u = 3\\,500$, $k = 1\\,000\\,000$", "$n = 3\\,500$, $u = 200\\,000$, $k = 1\\,000\\,000$", "$n = 200\\,000$, $u = 1\\,000\\,000$, $k = 3\\,500$", "$n = 1\\,000\\,000$, $u = 3\\,500$, $k = 200\\,000$"],
      explanation: "$n$ er antall forekomster du leser gjennom, $u$ antall unike verdier blant dem, og $k$ hvor mange verdier som er mulige i det hele tatt. De tre er sjelden i nærheten av hverandre, og å bytte om på dem gjør hele regnestykket uleselig.",
    },
    {
      question: "Hva er kravet til en drøfting skrevet i løpende prosa?",
      options: ["At den er entydig og refererer til $O$-notasjon", "At den følger en fast disposisjon med overskrifter", "At den suppleres med pseudokode for begge strategiene", "At den holder seg innenfor et bestemt antall setninger"],
      explanation: "Sensorkravet er «lett forståelig, entydig og presist» — en setning man ikke forstår etter to gjennomlesninger, ignoreres. En tekst uten $O$-notasjon svarer ikke på oppgaven, mens verken overskrifter, pseudokode eller lengdebegrensninger er krav.",
    },
  ],
  'in2010-7-3': [
    {
      question: "Hvilken påstand om forholdet mellom $P$ og $NP$ er sann?",
      options: ["$P \\subseteq NP$", "$NP \\subseteq P$", "$P$ og $NP$ er disjunkte mengder", "$P = NP$ er bevist"],
      explanation: "Kan du løse et problem i polynomisk tid, kan du også kontrollere et foreslått svar i polynomisk tid, så alt i $P$ ligger i $NP$. Den motsatte inklusjonen er nettopp det åpne spørsmålet, og ingen av likhetene er bevist.",
    },
    {
      question: "Hva betyr det at et problem ligger i klassen $NP$?",
      options: ["At et foreslått ja-svar kan kontrolleres i polynomisk tid", "At problemet umulig kan løses i polynomisk tid i det hele tatt", "At problemet krever eksponentiell tid å løse", "At problemet er minst like vanskelig som alle andre"],
      explanation: "$NP$ står for «ikke-deterministisk polynomisk» og handler om kontroll, ikke om løsning. Alternativene som knytter $NP$ til «ikke-polynomisk» fanger nettopp den vanligste misforståelsen, og siste alternativ beskriver NP-hardhet.",
    },
    {
      question: "Hvilken linje i en verifikator for Hamiltonsykel sikrer at rundturen lukker seg?",
      options: ["`v = C[(i + 1) mod N]`", "`v = C[i + 1]`", "`v = C[N - 1]`", "`v = C[i - 1]`"],
      explanation: "Ved `i = N-1` gir `(i + 1) mod N` indeks 0, altså den første noden, og siste kant blir sjekket. Uten `mod N` kontrollerer prosedyren en sti i stedet for en sykel — felle #7 i bokas feilregister.",
    },
    {
      question: "Hva er kjøretiden til en verifikator som sjekker $N$ kanter i en rundtur, med nabomatrise?",
      options: ["$O(N)$", "$O(N^2)$", "$O(N!)$", "$O(2^N)$"],
      explanation: "Én løkke over $N$ par, hvert med ett $O(1)$-oppslag i matrisen. Med nabolister blir hvert oppslag opptil $O(N)$, altså $O(N^2)$ totalt — fortsatt polynomisk, som er alt definisjonen krever. $O(N!)$ er kostnaden ved å lete etter rundturen, ikke ved å kontrollere den.",
    },
    {
      question: "Hvordan viser du at et nytt problem $X$ er vanskelig?",
      options: ["Reduser fra et kjent NP-komplett problem til $X$", "Reduser fra $X$ til et kjent NP-komplett problem", "Vis at $X$ har en verifikator med polynomisk kjøretid", "Vis at $X$ ikke kan løses raskt på store forekomster"],
      explanation: "Kjent-vanskelig $\\leq_p X$ betyr at en rask løser for $X$ ville gitt en rask løser for det kjente problemet, så $X$ er minst like vanskelig. Motsatt retning er felle #8. En polynomisk verifikator viser bare medlemskap i $NP$, ikke hardhet.",
    },
    {
      question: "Hva sier $A \\leq_p B$?",
      options: ["At $B$ er minst like vanskelig som $A$", "At $A$ er minst like vanskelig som $B$", "At $A$ og $B$ er like vanskelige problemer", "At $A$ og $B$ har samme verifikator"],
      explanation: "Har du en rask løser for $B$, får du en rask løser for $A$ ved å skrive om først — så vanskeligheten sitter i $B$. Å lese pilen motsatt vei er den vanligste feilen i sjangeren, og alternativet om lik vanskelighet krever reduksjon begge veier.",
    },
    {
      question: "Hva følger hvis noen løser ett NP-komplett problem i polynomisk tid?",
      options: ["At $P = NP$, og at hele $NP$ får polynomiske løsninger", "At bare akkurat det ene problemet får en polynomisk løsning, ikke de andre", "At $P \\neq NP$, siden problemet da ikke var NP-komplett", "At alle problemer i $NP$ blir NP-komplette samtidig"],
      explanation: "Alle problemer i $NP$ kan reduseres polynomisk til det ene, og to polynomiske steg etter hverandre er fortsatt polynomisk. Dette er et fast sant/usant-punkt på Del 1, og distraktoren om «bare det ene» er den som fanger den usikre kandidaten.",
    },
    {
      question: "Hva er et sertifikat i denne sammenhengen?",
      options: ["Det foreslåtte ja-svaret verifikatoren får utlevert", "Beviset for at problemet er NP-komplett", "Algoritmen som finner selve svaret i polynomisk tid", "Den polynomiske omskrivningen i en reduksjon"],
      explanation: "Sertifikatet er data, ikke en prosedyre: for Hamiltonsykel er det nodene i rundturens rekkefølge. Verifikatoren er prosedyren som kontrollerer det, og omskrivningen hører til reduksjonsbegrepet.",
    },
    {
      question: "Hvor mange par må en verifikator sjekke for å bekrefte en klikk med $k$ noder?",
      options: ["$k(k-1)/2$ — alle par", "$k$ — bare de som følger etter hverandre", "$k - 1$ — som i et spenntre", "$k^2$ — alle ordnede par, i begge retninger"],
      explanation: "En klikk krever at alle par er naboer, ikke bare de som følger etter hverandre i en rekkefølge. Å kopiere rundtur-løkka hit ville sjekket $k$ av parene og godkjent nesten hva som helst. Uttrykket $k(k-1)/2$ er $O(k^2)$, som er polynomisk.",
    },
    {
      question: "Hvilket krav stilles til selve omskrivningen i en polynomisk reduksjon?",
      options: ["At den kan utføres i polynomisk tid", "At den bevarer antall noder i grafen", "At den kan reverseres i polynomisk tid", "At den gir en forekomst av samme størrelse"],
      explanation: "Kravet står i definisjonen: en omskrivning som selv tar eksponentiell tid, viser ingenting, siden en rask løser for $B$ da likevel ikke gir en rask løser for $A$. Verken størrelse, nodetall eller reversibilitet er krav.",
    },
    {
      question: "Hva skiller NP-hard fra NP-komplett?",
      options: ["NP-komplett krever i tillegg at problemet selv ligger i $NP$", "NP-hard krever i tillegg at problemet selv ligger i $NP$", "NP-hard gjelder bare grafproblemer, NP-komplett alle problemer", "NP-komplett gjelder bare avgjørelsesproblemer, NP-hard alle"],
      explanation: "Begge krever at alle problemer i $NP$ kan reduseres til problemet. NP-komplett legger til medlemskapet i $NP$ og er derfor den strengeste av de to. Skillet handler ikke om problemtype.",
    },
    {
      question: "Hvilket av disse problemene har en kjent polynomisk algoritme?",
      options: ["Finnes det et spenntre med totalvekt under $B$?", "Finnes det en rundtur innom hver node nøyaktig én gang?", "Finnes det $k$ noder der alle par er naboer?", "Kan et delvis utfylt $n \\times n$-sudokubrett fullføres?"],
      explanation: "Kjør Prim eller Kruskal for å finne det minimale spenntreet og sammenlign vekten med $B$ — er ikke det minimale under $B$, er ingen det. De tre andre er Hamiltonsykel, CLIQUE og generalisert Sudoku, som alle er NP-komplette.",
    },
    {
      question: "Hvilket av disse temaene er IKKE pensum i IN2010?",
      options: ["Masterteoremet for rekursive kjøretider", "Lineær probing i en hashtabell", "Sterkt sammenhengende komponenter", "Topologisk sortering med Kahns algoritme"],
      explanation: "Kjøretidsanalyse i dette emnet gjøres ved løkketelling, aldri ved rekurrensligninger. De tre andre er alle sentrale: hashing er med i alle sju settene, og både komponenter og topologisk sortering er faste Del 2-temaer.",
    },
    {
      question: "Hvordan analyseres kjøretiden til en rekursiv algoritme i dette emnet?",
      options: ["Ved å telle arbeidet per nivå, eller antall noder besøkt", "Ved å sette opp en rekurrensligning og løse den med et teorem", "Ved å måle kjøretiden empirisk for stadig voksende inndata", "Ved å telle antall rekursive kall og gange med dybden"],
      explanation: "Løkketelling og «hver node besøkes én gang» er metoden gjennom hele boka — rekursjon er pensum, men rekurrensligninger er det ikke. Alternativet om antall kall ganger dybde gir dessuten feil svar for de fleste tre-algoritmer.",
    },
    {
      question: "En algoritme løser CLIQUE på grafer med under 30 noder på ett sekund. Hva følger?",
      options: ["Ingenting om $P$ mot $NP$ — veksten er ikke vist", "At $P = NP$, siden CLIQUE er NP-komplett", "At CLIQUE likevel ligger i klassen $P$ hele veien", "At CLIQUE ikke kan ha vært NP-komplett likevel"],
      explanation: "$2^{30}$ er rundt en milliard og fullt kjørbart, mens $2^{60}$ er over en trillion. Klassene handler om hvordan kjøretiden vokser med $n$, ikke om hvor rask en algoritme er på en fast størrelse.",
    },
    {
      question: "Hvilken av verifikatorens tre kontroller avviser sertifikatet $(P, Q, R, P, T)$ i en graf med fem noder?",
      options: ["Kontrollen av at ingen node forekommer to ganger", "Kontrollen av at sertifikatet har riktig lengde", "Kontrollen av at hvert par som følger etter hverandre er en kant", "Kontrollen av at den siste noden har en kant til den første"],
      explanation: "Lengden er 5 og dermed riktig, så lengdesjekken passerer; det er $P$ som forekommer to ganger, mens $S$ mangler helt. Rekkefølgen på kontrollene er ikke tilfeldig — den billigste står først.",
    },
  ],
  'in2010-8-1': [
    {
      question: "En Del 2-oppgave er verdt 10 poeng med trappen $O(n)$ gir 10, $O(n \\log n)$ gir 6 og $O(n^2)$ gir 3. Du leverer $O(n \\log n)$ på fem slike oppgaver. Hva blir summen?",
      options: ["30 av 50 poeng", "50 av 50 poeng", "15 av 50 poeng", "45 av 50 poeng"],
      explanation: "Fem oppgaver à 6 poeng gir 30. Alternativet 50 forutsetter $O(n)$ på alle fem, og 15 er det du ville fått med den naive $O(n^2)$-løsningen — begge er lette å forveksle hvis du leser trappen fort. Poenget med regnestykket er at samme riktige svar er verdt svært ulikt.",
    },
    {
      question: "En naiv løsning har en indre løkke som leter etter et element blant dem du alt har sett. Hvilket grep gjør den lineær?",
      options: ["et hash-set, som gir oppslag i konstant forventet tid", "en min-heap, som gir det minste elementet i logaritmisk tid", "en tellesortering, som er lineær i et kjent verdiområde", "en nabomatrise, som gir kantoppslag i konstant tid"],
      explanation: "Den indre løkken svarer på «har jeg sett dette før?», og det er nøyaktig medlemskapsspørsmålet et hash-set svarer på i $O(1)$ forventet. Min-heapen svarer på et annet spørsmål (hva er minst), og tellesorteringen krever et kjent verdiområde som oppgaven sjelden gir. Nabomatrisen hører til grafer og er ikke relevant her.",
    },
    {
      question: "En prosedyre skriver ut alle verdiene i et binært søketre som ligger mellom $a$ og $b$, med beskjæring. Hva er kjøretiden?",
      options: ["$O(h + \\text{antall treff})$", "$O(n)$, uansett antall treff", "$O(\\log n)$, uansett antall treff", "$O(n \\log n)$ i verste tilfelle"],
      explanation: "Beskjæringen hopper over subtrær som ikke kan inneholde svar, så arbeidet er nedstigningen pluss ett besøk per treff. $O(n)$ er den naive fulle traverseringen, og $O(\\log n)$ glemmer at treffene også må skrives ut — er halve treet i intervallet, må halve treet besøkes.",
    },
    {
      question: "Diameteren i et binært tre kan finnes i $O(n)$ i stedet for $O(n^2)$. Hva er grepet?",
      options: ["traverseringen returnerer subtre-høyden oppover underveis", "høyden regnes ut på nytt i hver eneste node i treet", "nodene sorteres etter dybde før traverseringen starter", "en prioritetskø holder rede på den største høyden hittil"],
      explanation: "Høyden trengs i hver node, men den kommer gratis oppover fra det rekursive kallet som allerede har vært nede i subtreet. Alternativet med å regne ut høyden per node er nettopp den kvadratiske løsningen. Sortering og prioritetskø løser ikke problemet og legger bare til en logaritmisk faktor.",
    },
    {
      question: "Flere mulige utgangspunkt skal måles mot ett mål i en vektet graf med positive vekter. Hva gir lavest kjøretid?",
      options: ["én Dijkstra fra målet i den reverserte grafen", "én Dijkstra fra hvert utgangspunkt, og så minimum", "ett bredde-først-søk fra målet i den vanlige grafen", "én Bellman-Ford fra målet i den vanlige grafen"],
      explanation: "En vei fra $u$ til $t$ i grafen er nøyaktig en vei fra $t$ til $u$ i den reverserte, så én kjøring holder. Én kjøring per utgangspunkt er korrekt, men et helt trinn ned på trappen. Bredde-først ignorerer vektene, og Bellman-Ford er tregere enn Dijkstra uten negative kanter — og løser dessuten ikke retningsproblemet.",
    },
    {
      question: "Du skal finne de $k$ største av $n$ tall, der $k$ er liten. Hva er raskest?",
      options: ["en min-heap med plass til $k$ elementer, $O(n \\log k)$", "en max-heap med plass til alle $n$ elementene, $O(n \\log n)$", "en full sortering av alle $n$ tallene, $O(n \\log n)$", "en tellesortering over verdiområdet, $O(n + k)$"],
      explanation: "Heapen trenger aldri mer enn $k$ elementer, og hver operasjon koster derfor $\\log k$ og ikke $\\log n$. Det skal være en **min**-heap: det er det minste av de $k$ beste som skal skyves ut. Tellesorteringen krever et kjent, begrenset verdiområde, som oppgaven ikke gir.",
    },
    {
      question: "Et fast datasett med $n$ elementer skal svare på $m$ spørsmål. Når lønner det seg å forbehandle med en sortering?",
      options: ["når $m$ er større enn omtrent $\\log n$", "når $m$ er mindre enn omtrent $\\log n$", "bare når datasettet allerede er sortert", "bare når $m$ er større enn $n$"],
      explanation: "Forbehandling koster $O(n\\log n)$ én gang og gjør hvert spørsmål $O(\\log n)$ i stedet for $O(n)$; det tjener seg inn så snart $m$ passerer omtrent $\\log n$. Er $m$ liten, er den naive skanningen billigst. Kravet om at $m$ må overstige $n$, er langt strengere enn nødvendig.",
    },
    {
      question: "En besvarelse lyder: «Dette er korteste vei, og jeg bruker Dijkstra; kjøretiden er $O((|V|+|E|)\\log|V|)$.» Hvilket ledd mangler?",
      options: ["antagelsene om hvordan grafen er representert", "navnet på problemet oppgaven handler om", "kjøretiden for algoritmen som er valgt", "definisjonen av logaritmen som brukes"],
      explanation: "Svarformen har fire ledd: navngi problemet, oppgi antagelser, gi algoritmen, oppgi kjøretiden. Her er problemet navngitt og kjøretiden oppgitt, men ikke om grafen er nabolister eller nabomatrise — og kjøretiden hviler på det valget. Logaritmens grunntall er derimot uten betydning i $O$-notasjon.",
    },
    {
      question: "Hva skjer hvis den oppgitte kjøretiden ikke stemmer med algoritmen du faktisk skrev?",
      options: ["det trekkes, selv om algoritmen i seg selv er riktig", "det gis full uttelling så lenge algoritmen er riktig", "oppgaven tas ut av vurderingen for alle kandidater", "kjøretiden regnes automatisk om til den riktige"],
      explanation: "Sensorveiledningene er konsekvente: kjøretiden må matche koden du ga, og det trekkes både for manglende og for feil kompleksitet. Den vanligste varianten er å skrive ned kjøretiden for den løsningen du hadde tenkt å levere. At oppgaver tas ut av vurderingen, skjer bare når selve oppgaveteksten er tvetydig.",
    },
    {
      question: "Hvordan skal kjøretiden for et oppslag i et hashmap oppgis?",
      options: ["$O(1)$ forventet, og $O(n)$ i verste tilfelle", "$O(1)$ i verste tilfelle, uansett innhold", "$O(\\log n)$ forventet, og $O(n)$ verste", "$O(n)$ forventet, og $O(1)$ i verste tilfelle"],
      explanation: "Hashing gir konstant tid i forventning, men klumper alle nøklene seg på samme sted, blir oppslaget lineært. Å skrive $O(1)$ uten forbeholdet «forventet» er et fast trekkpunkt. $O(\\log n)$ hører til et balansert søketre, som til gjengjeld har den grensen garantert.",
    },
    {
      question: "Du finner ikke den raskeste løsningen på en Del 2-oppgave. Bør du levere den naive?",
      options: ["ja — trappen bunner ikke i null, så den gir noen poeng", "nei — bare den raskeste løsningen gir uttelling i det hele tatt", "nei — en treg løsning regnes som et galt svar av sensor", "ja — men bare dersom du utelater kjøretiden i besvarelsen"],
      explanation: "En korrekt, treg løsning får typisk en tredjedel av poengene, og blankt gir null. Å utelate kjøretiden hjelper ikke — den mangelen trekkes for seg. Merk skillet mot en løsning som er **gal**, for eksempel en lineær sortering brukt uten kjent verdiområde: der gjelder ikke trappen.",
    },
    {
      question: "Hvordan telles antall sammenhengende komponenter i en urettet graf raskest?",
      options: ["én dybde-først over alle nodene, $O(|V| + |E|)$", "én traversering fra hver node, $O(|V| \\cdot (|V| + |E|))$", "én Dijkstra fra hver node, $O(|V|(|V|+|E|)\\log|V|)$", "én sortering av kantlisten, $O(|E| \\log |E|)$"],
      explanation: "En ytre løkke over nodene starter en traversering bare i noder som ikke alt er besøkt, så hver node og hver kant behandles én gang. Å traversere fra hver node gir riktig svar, men koster en hel faktor mer. Dijkstra og kantsortering svarer på helt andre spørsmål.",
    },
    {
      question: "Hvor mye uttelling gir en klar forklaring i naturlig språk på en Del 2-oppgave?",
      options: ["like mye som pseudokode, når den er entydig og presis", "høyst halv uttelling, siden pseudokode alltid kreves", "full uttelling bare på oppvarmingsdelen av settet", "ingenting, med mindre pseudokoden også er vedlagt"],
      explanation: "Kravet er at svaret er lett forståelig, entydig og presist — ikke at det har kodesyntaks. En setning man ikke forstår etter to gjennomlesninger, blir derimot ignorert, og det gjelder både prosa og pseudokode. Uklar pseudokode gir altså mindre enn klar prosa.",
    },
    {
      question: "Hva er konsekvensen av å bruke $n$ i en kjøretid uten å definere hva $n$ er?",
      options: ["det er et eksplisitt trekkpunkt, særlig i drøftingssjangeren", "det er uproblematisk så lenge selve kjøretiden er riktig", "det trekkes bare når oppgaven har mer enn én størrelse", "det er et stilråd uten konsekvenser for poengsummen"],
      explanation: "I ett av settene kostet nettopp dette tre poeng på én oppgave. Grunnen er at et kjøretidsuttrykk ikke er etterprøvbart uten at størrelsen er navngitt — og i oppgaver med både data og spørsmål finnes det alltid minst to. Regelen gjelder selv når det bare finnes én størrelse.",
    },
  ],
  'in2010-8-2': [
    {
      question: "Hvor lang tid tar det å gjøre et vilkårlig array med $n$ elementer om til en heap?",
      options: ["$O(n)$", "$O(n \\log n)$", "$O(\\log n)$", "$O(n^2)$"],
      explanation: "Bygging nedenfra og opp er lineær, fordi de fleste nodene ligger nær bunnen og synker svært kort. $O(n \\log n)$ er kostnaden ved å sette inn de $n$ elementene ett for ett, og det er den vanligste forvekslingen. $O(\\log n)$ er kostnaden for én enkelt innsetting.",
    },
    {
      question: "Hvor lang tid tar det å finne det største elementet i en min-heap med $n$ elementer?",
      options: ["$O(n)$, siden det kan ligge hvor som helst blant bladene", "$O(\\log n)$, ved å følge stien til høyre fra roten", "$O(1)$, siden det alltid ligger sist i arrayet", "$O(\\log n)$, ved ett down-heap-steg fra roten"],
      explanation: "Heap-egenskapen ordner bare oppover og nedover, aldri fra venstre mot høyre, så det største elementet kan være hvilket som helst blad. Stien til høyre og siste arrayplass er begge forvekslinger med søketre-egenskapen. Dette er et fast sant/usant-punkt i faget.",
    },
    {
      question: "Hva er kjøretiden for et dybde-først-søk startet i **én** node?",
      options: ["$O(|E|)$", "$O(|V| + |E|)$", "$O(|V|)$", "$O(|V| \\cdot |E|)$"],
      explanation: "Fra én node besøkes bare kantene i den komponenten, og ingen initialisering av alle nodene er nødvendig. $O(|V| + |E|)$ gjelder dybde-først over **hele** grafen, der alle nodene må merkes ubesøkt først. Forvekslingen mellom de to er et eksplisitt trekkpunkt i et av settene.",
    },
    {
      question: "En løkke over $n$ inneholder en løkke over $n$, som inneholder en løkke fra 0 til 49. Hva er kjøretiden?",
      options: ["$O(n^2)$", "$O(n^3)$", "$O(n^2 \\log n)$", "$O(n)$"],
      explanation: "Den innerste løkken går et **fast** antall ganger, og en konstant endrer ikke orden. $O(n^3)$ er svaret hvis du teller den innerste som enda en $n$ — den vanligste fellen i sjangeren. Det er løkkens øvre grense, ikke antall løkker, som avgjør.",
    },
    {
      question: "En prosedyre har først en løkke over $n$ med en halveringsløkke inni, og deretter to nøstede løkker over $n$. Hva er kjøretiden?",
      options: ["$O(n^2)$", "$O(n^2 \\log n)$", "$O(n \\log n)$", "$O(n^3)$"],
      explanation: "Delene står etter hverandre, så de skal **legges sammen**: $O(n\\log n) + O(n^2) = O(n^2)$. Å gange dem gir $O(n^2 \\log n)$, som er den vanligste feilen her. Ved sekvens vinner det dominerende leddet.",
    },
    {
      question: "En vektet graf har noen negative kanter, men ingen negativ sykel. Hvilken algoritme finner korteste vei fra én kilde?",
      options: ["Bellman-Ford, $O(|V| \\cdot |E|)$", "Dijkstra, $O((|V|+|E|)\\log|V|)$", "bredde-først-søk, $O(|V| + |E|)$", "topologisk sortering, $O(|V| + |E|)$"],
      explanation: "Dijkstra forutsetter ikke-negative vekter og kan ferdigbehandle en node for tidlig når en negativ kant venter lenger ute. Bredde-først ignorerer vekter, og topologisk sortering forutsetter at grafen er asyklisk. Bellman-Ford er tregest av de fire, men den eneste som er korrekt her.",
    },
    {
      question: "Hvilket kriterium avgjør at en urettet graf er et tre?",
      options: ["den er sammenhengende og har nøyaktig $|V| - 1$ kanter", "den har nøyaktig $|V| - 1$ kanter, uansett sammenheng", "den er sammenhengende og har minst $|V| - 1$ kanter", "den har ingen sykel, uansett om den henger sammen"],
      explanation: "Begge betingelsene må holde: en trekant pluss en løsrevet node har også $|V| - 1$ kanter, men er verken sammenhengende eller syklusfri. «Minst $|V|-1$» tillater sykler, og en syklusfri graf uten sammenheng er en skog, ikke et tre.",
    },
    {
      question: "Hvordan melder Kahns topologiske sortering fra om at grafen har en sykel?",
      options: ["færre enn $|V|$ noder blir prosessert før køen er tom", "en node får negativ inngrad under gjennomkjøringen", "køen inneholder to noder med inngrad 0 samtidig", "algoritmen besøker den samme noden to ganger"],
      explanation: "Noder i en sykel venter på hverandre og får aldri inngrad 0, så de blir liggende igjen. Negativ inngrad kan ikke oppstå, og flere noder med inngrad 0 samtidig er helt normalt — det betyr bare at flere oppgaver kan gjøres parallelt. Å utelate denne sjekken er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hvordan finner du den lengste kjeden av avhengigheter i en rettet asyklisk graf?",
      options: ["topologisk sortering, så én oppdatering per kant, $O(|V| + |E|)$", "ett dybde-først-søk fra hver node, $O(|V| \\cdot (|V| + |E|))$", "Dijkstra fra hver node med negative vekter, $O(|V|^2 \\cdot |E|)$", "en sortering av nodene etter antall naboer, $O(|V| \\log |V|)$"],
      explanation: "I topologisk rekkefølge er alle forgjengerne til en node ferdig behandlet når noden nås, så én gjennomgang av kantene holder. Dybde-først fra hver node gir riktig svar, men koster en hel faktor mer. Sortering etter antall naboer sier ingenting om kjedelengde.",
    },
    {
      question: "Når finnes det en node som kan nås fra alle de andre i en rettet graf?",
      options: ["når komponentgrafen har nøyaktig én komponent med utgrad 0", "når komponentgrafen har nøyaktig én komponent med inngrad 0", "når grafen har minst én komponent med mer enn én node", "når alle komponentene i komponentgrafen har utgrad 0"],
      explanation: "Komponentgrafen er asyklisk, så fra enhver node kommer du framover til en komponent uten utgående kanter; er det bare én slik, må alle ende der. Inngrad 0 er kriteriet for det motsatte spørsmålet — hvor få startpunkter som trengs. Komponenter med mer enn én node er kriteriet for rundturer.",
    },
    {
      question: "Et register skal både slå opp på nøkkel og skrive ut alt i sortert rekkefølge. Hva gir et balansert søketre som et hashmap ikke gir?",
      options: ["sortert utskrift i $O(n)$ ved in-order-traversering", "oppslag i $O(1)$ forventet på hver enkelt nøkkel", "innsetting i $O(1)$ forventet uansett rekkefølge", "minnebruk som vokser langsommere enn antall nøkler"],
      explanation: "Søketre-egenskapen gjør at in-order gir verdiene i stigende rekkefølge uten noen sortering; hashmapet må hente ut nøklene og sortere dem i $O(n \\log n)$. Til gjengjeld er hashmapets oppslag raskere i forventning. Minnebruken er lineær i begge.",
    },
    {
      question: "En hashtabell med $N$ plasser bruker lineær probing. Hvilken indeks prøves etter at plass $i$ viste seg opptatt?",
      options: ["$(i + 1) \\bmod N$", "$i + 1$, uten noen omregning", "$(i \\cdot 2) \\bmod N$", "$(i + N) \\bmod N$"],
      explanation: "Uten `mod N` løper indeksen utenfor tabellen når klyngen når siste plass, og det er et eksplisitt trekkpunkt. Dobling er dobbel hashing, som ikke er lineær probing. Det siste alternativet gir alltid $i$ tilbake og flytter ingenting.",
    },
  ],
  'in2010-8-3': [
    {
      question: "En hashtabell rehashes til dobbel størrelse. Hva må gjøres med nøklene?",
      options: ["alle må settes inn på nytt, siden $h(k) = k \\bmod N$ endres", "ingenting, siden de gamle indeksene fortsatt er gyldige", "bare nøklene som ligger i en kollisjonsklynge må flyttes", "bare nøklene i den andre halvdelen av tabellen må flyttes"],
      explanation: "Hashverdien avhenger av $N$, så nesten alle nøklene får ny plass når $N$ endres. Å tro at indeksene kan gjenbrukes, er et fast sant/usant-punkt. Delvis reinnsetting virker heller ikke: en nøkkel uten kollisjon i den gamle tabellen kan få kollisjon i den nye.",
    },
    {
      question: "Du setter inn en nøkkel som allerede ligger i en hashtabell med lineær probing. Hva skal skje?",
      options: ["nøkkelen skal overskrives på den plassen den alt har", "nøkkelen skal legges på den første ledige plassen etter", "innsettingen skal avvises og tabellen stå uendret", "hele tabellen skal rehashes for å unngå duplikatet"],
      explanation: "To plasser med samme nøkkel gjør søket tvetydig — det stopper på den første og finner aldri den andre. Å legge den inn en gang til er et eksplisitt trekkpunkt. Å avvise innsettingen ville dessuten hindret at verdien kan oppdateres.",
    },
    {
      question: "Hva er load-faktoren til en hashtabell?",
      options: ["$\\alpha = n/N$, elementer delt på plasser", "$\\alpha = N/n$, plasser delt på elementer", "$\\alpha = n/2$, halvparten av antall elementer", "$\\alpha = N - n$, antall ledige plasser"],
      explanation: "Load-faktoren måler hvor full tabellen er, og rehashing utløses når den passerer en terskel. Den omvendte brøken vokser når tabellen tømmes, som er motsatt av det man vil måle. Antall ledige plasser sier ingenting uten å sammenlignes med tabellstørrelsen.",
    },
    {
      question: "Hva krever tellesortering av elementene den skal sortere?",
      options: ["heltallsnøkler i et kjent, begrenset verdiområde", "at elementene kan sammenlignes med hverandre", "at elementene allerede er delvis sortert på forhånd", "at antall elementer er kjent før sorteringen starter"],
      explanation: "Lineær sortering omgår $O(n\\log n)$-grensen nettopp ved ikke å sammenligne, og prisen er kunnskap om verdiområdet. At elementene kan sammenlignes, er kravet til alle de **andre** sorteringene — å forveksle de to er en av de faste fellene. Antall elementer er kjent uansett.",
    },
    {
      question: "Hvorfor må delsorteringen i radix-sortering være stabil?",
      options: ["fordi rekkefølgen fra tidligere siffer ellers ødelegges", "fordi algoritmen ellers ikke ville vært lineær i tid", "fordi tallene ellers må ha like mange siffer hver", "fordi bøttene ellers kan bli ulikt store underveis"],
      explanation: "Radix sorterer siffer for siffer og stoler på at like siffer beholder rekkefølgen fra forrige runde; uten stabilitet blir resultatet feil, ikke bare tregere. Kjøretiden og bøttestørrelsene påvirkes ikke av stabiliteten. Kravet om like mange siffer løses ved å fylle på med nuller.",
    },
    {
      question: "Hvilken av disse sorteringene er **ikke** stabil?",
      options: ["haugsortering", "innsettingssortering", "flettesortering", "tellesortering"],
      explanation: "Haugsortering flytter elementer over lange avstander når roten byttes med det siste elementet, og like nøkler kan da bytte rekkefølge. Den er til gjengjeld på stedet, og det er den egenskapen som oftest forveksles med stabilitet. De tre andre bevarer rekkefølgen mellom like nøkler.",
    },
    {
      question: "Et AVL-tre trenger én dobbeltrotasjon etter en innsetting. Hvor mange **enkle** rotasjoner er det?",
      options: ["to", "én", "tre", "ingen — en dobbeltrotasjon er noe annet"],
      explanation: "En dobbeltrotasjon er nettopp to enkle rotasjoner utført etter hverandre, først i barnet og så i noden selv. Sensor spør om antall enkle rotasjoner nettopp fordi svaret avslører om du vet hva en dobbeltrotasjon består av. Å svare «én» er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hva gjelder om kodelengdene i et Huffman-tre?",
      options: ["et hyppigere symbol får aldri en lengre kode enn et sjeldnere", "alle symboler får kode av samme lengde som i en fastlengdekode", "et sjeldnere symbol får aldri en lengre kode enn et hyppigere", "kodelengden er alltid lik antall symboler delt på to"],
      explanation: "Algoritmen slår alltid sammen de to minste frekvensene først, så sjeldne symboler havner dypest i treet. Det tredje alternativet er regelen snudd på hodet, og er selve poenget med komprimeringen. Fastlengdekoden er nettopp det Huffman skal slå.",
    },
    {
      question: "En besvarelse skriver: «Jeg bruker binærsøk, som gir indeksen til $x$ i $O(\\log n)$.» Hva mangler?",
      options: ["at pensums binærsøk må modifiseres for å gi en indeks", "at binærsøket forutsetter at arrayet er sortert", "at kjøretiden er logaritmisk bare i beste tilfelle", "at binærsøket krever at alle verdiene er forskjellige"],
      explanation: "Varianten i pensum svarer `true` eller `false`, og å hevde indeks uten å nevne endringen er et eksplisitt trekkpunkt. At arrayet må være sortert, er riktig, men det står som regel i oppgaveteksten. Binærsøk er $O(\\log n)$ i verste tilfelle og takler duplikater fint.",
    },
    {
      question: "Du skal finne det **første** ordet som gjentas i en tekst. Hvorfor holder det ikke å sortere ordene?",
      options: ["fordi sorteringen ødelegger rekkefølgen spørsmålet gjelder", "fordi sortering av tekststrenger ikke er mulig i praksis", "fordi sorteringen er tregere enn en dobbel løkke over ordene", "fordi like ord ikke havner ved siden av hverandre etter sortering"],
      explanation: "Etter sortering finner du lett **et** ord som gjentas, men ikke hvilket som gjentok seg først i teksten — og det var spørsmålet. Sortering av strenger er fullt mulig, og like ord havner nettopp side om side. Løsningen er et hash-set i ett gjennomløp, $O(n)$ forventet.",
    },
    {
      question: "Hva må `RemoveMin` i en min-heap passe på under down-heap?",
      options: ["at barnet finnes, og at det synkes mot det minste barnet", "at barnet finnes, og at det synkes mot det venstre barnet", "at forelderen finnes, og at det synkes mot det største barnet", "at arrayet fylles opp bakfra før elementet flyttes nedover"],
      explanation: "Med indeks fra 0 ligger barna på $2i+1$ og $2i+2$, og den siste noden kan ha bare ett barn — en sammenligning uten sjekk leser da utenfor arrayet. Å velge venstre barn fast bryter heap-egenskapen når høyre er mindre. Manglende barnsjekk har hatt eget takpoeng i et av settene.",
    },
    {
      question: "Du sjekker om to ord er anagram ved å telle bokstaver i et array. Hvilken forutsetning hviler det på?",
      options: ["at alfabetet er kjent og lite, for eksempel 26 bokstaver", "at ordene er like lange før tellingen begynner", "at bokstavene forekommer høyst én gang i hvert ord", "at ordene er sortert alfabetisk før de telles"],
      explanation: "Tellearrayet må ha én plass per mulig tegn, så et stort alfabet gjør $K$ til det dominerende leddet — da må tellingen gjøres i et hashmap i stedet. At ordene er like lange, sjekkes først og er ikke en forutsetning for metoden. Gjentatte bokstaver er nettopp det tellingen håndterer.",
    },
  ],
  'in2010-8-4': [
    {
      question: "Når har en rettet graf en topologisk rekkefølge?",
      options: ["nøyaktig når den er asyklisk", "nøyaktig når den er sammenhengende", "nøyaktig når alle nodene har inngrad 0", "nøyaktig når den har færre kanter enn noder"],
      explanation: "En sykel gjør rekkefølgen umulig, siden hver node i sykelen måtte kommet før seg selv; og i en asyklisk graf finner Kahns algoritme alltid en. Sammenheng er uten betydning — en graf med flere komponenter har fortsatt en rekkefølge. Har alle noder inngrad 0, finnes det ingen kanter i det hele tatt.",
    },
    {
      question: "Hvilken av disse finner **ikke** et minimalt spenntre?",
      options: ["bredde-først-søk", "Prims algoritme", "Kruskals algoritme", "Borůvkas algoritme"],
      explanation: "Bredde-først-søk leser ikke kantvektene i det hele tatt, og finner derfor **et** spenntre, men sjelden det minimale. De tre andre er alle grådige algoritmer som velger den letteste lovlige kanten. Dijkstra hører heller ikke hjemme i denne familien, selv om den ligner Prim.",
    },
    {
      question: "Hvor mange kanter har et spenntre over $|V|$ noder?",
      options: ["nøyaktig $|V| - 1$", "nøyaktig $|V|$", "minst $|V| - 1$, gjerne flere", "det avhenger av kantvektene"],
      explanation: "Et spenntre er sammenhengende og syklusfritt over alle nodene, og det gir alltid nøyaktig $|V|-1$ kanter. Én kant mer lukker en sykel, én mindre splitter grafen. Dette er den beste kontrollregningen etter en spenntre-håndkjøring, og den er uavhengig av vektene.",
    },
    {
      question: "Hva er forholdet mellom Prims og Dijkstras kjøretid med binær prioritetskø?",
      options: ["de er like, siden algoritmene skiller på én linje", "Prim er raskere, siden den ikke leser kantvekter", "Dijkstra er raskere, siden den stopper ved målet", "de kan ikke sammenlignes, siden de løser ulike problemer"],
      explanation: "Begge er $O((|V|+|E|)\\log|V|)$: forskjellen er hva som legges i køen — Dijkstra bruker avstanden fra kilden, Prim bare vekten på kanten inn i treet. Prim leser vektene like mye som Dijkstra. At de løser ulike problemer, er riktig, men hindrer ikke at kjøretiden er den samme.",
    },
    {
      question: "Hva er kjøretiden for å finne alle sterkt sammenhengende komponenter i en rettet graf?",
      options: ["$O(|V| + |E|)$", "$O(|V| \\cdot |E|)$", "$O((|V| + |E|)\\log|V|)$", "$O(|V|^2)$"],
      explanation: "Pensumalgoritmen bruker to dybde-først-gjennomløp, og hvert av dem er lineært i grafens størrelse. $O(|V| \\cdot |E|)$ er Bellman-Ford, og den logaritmiske varianten er Dijkstra og Prim. At komponentene finnes så billig, er nettopp grunnen til at de slår traversering fra hver node.",
    },
    {
      question: "Hva er riktig om klassene $P$ og $NP$?",
      options: ["$P \\subseteq NP$, og det er ikke avgjort om de er like", "$P$ og $NP$ er beviselig forskjellige klasser", "$P$ og $NP$ er beviselig den samme klassen", "$NP$ består av problemene som ikke ligger i $P$"],
      explanation: "Et problem du kan løse i polynomisk tid, kan også verifiseres i polynomisk tid, så inklusjonen holder — men ingen har bevist noen av retningene om likhet. Det siste alternativet er den vanligste misforståelsen: $NP$ betyr «verifiserbar i polynomisk tid», ikke «ikke i $P$».",
    },
    {
      question: "Du vil vise at ditt problem $X$ er NP-hardt. Hvilken vei går reduksjonen?",
      options: ["fra et kjent NP-komplett problem til $X$", "fra $X$ til et kjent NP-komplett problem", "begge veier, slik at problemene blir ekvivalente", "fra $X$ til et problem som ligger i $P$"],
      explanation: "Vanskeligheten arves framover langs pilen: kan du løse $X$, og et hardt problem kan oversettes til $X$, må $X$ være minst like hardt. Reduseres $X$ **til** noe hardt, viser det bare at $X$ ikke er verre — det er den faste fellen. En reduksjon begge veier viser ekvivalens, men er mer arbeid enn oppgaven ber om.",
    },
    {
      question: "Hva viser det at et problem har en verifikator som sjekker et sertifikat i polynomisk tid?",
      options: ["at problemet ligger i $NP$", "at problemet ligger i $P$", "at problemet er NP-komplett", "at problemet ikke kan løses effektivt"],
      explanation: "Det er selve definisjonen av $NP$: ja-instansene kan bekreftes raskt når du får forslaget servert. Å ligge i $P$ krever at du kan **finne** løsningen raskt, ikke bare kontrollere den. NP-kompletthet krever i tillegg en reduksjon fra et kjent hardt problem.",
    },
    {
      question: "Hvordan finner du avstanden fra hver node til den **nærmeste** av flere kilder i en uvektet graf?",
      options: ["legg alle kildene i køen med avstand 0 fra start", "kjør ett bredde-først-søk fra hver kilde og ta minimum", "kjør ett dybde-først-søk fra hver kilde og ta minimum", "kjør Dijkstra fra hver kilde med kantvekt 1 overalt"],
      explanation: "Bredde-først vokser lagvis, så med alle kildene i køen fra start vokser lagene samtidig og den nærmeste kilden når noden først — én kjøring, $O(|V| + |E|)$. De andre alternativene gir riktig svar, men koster en faktor $|S|$. Dybde-først gir dessuten ikke korteste vei i det hele tatt.",
    },
    {
      question: "Hvordan avgjøres det i $O(n)$ om et binærtre er høydebalansert?",
      options: ["la traverseringen returnere høyden og melde brudd underveis", "regn ut høyden til begge subtrærne i hver eneste node", "sammenlign antall noder på venstre og høyre side av rota", "tell antall blader og sammenlign med treets totale høyde"],
      explanation: "Høyden kommer gratis oppover fra kallet som allerede har vært nede i subtreet, så hver node behandles én gang. Å regne ut høyden per node er den kvadratiske løsningen og en av de navngitte fellene. Antall noder og antall blader sier ingenting om høydebalansen i hver node.",
    },
    {
      question: "Hvorfor oppgis grafkjøretidene i faget som regel under antagelsen om nabolister?",
      options: ["fordi en full traversering med nabomatrise blir $O(|V|^2)$", "fordi nabomatrisen ikke kan svare på om en kant finnes", "fordi nabolister gir raskere oppslag på en enkelt kant", "fordi nabomatrisen ikke kan brukes på rettede grafer"],
      explanation: "Traverseringene går gjennom alle naboene til hver node, og med matrise må hele raden skannes, også de tomme plassene. Matrisen er derimot **raskere** på å svare om én bestemt kant finnes, i $O(1)$ mot $O(\\deg(u))$. Begge representasjonene håndterer rettede grafer like godt.",
    },
    {
      question: "Kahns algoritme melder om sykel, og noen noder blir liggende igjen. Hva er disse nodene?",
      options: ["både nodene i ringen og de som venter på ringen", "nøyaktig nodene som inngår i den sirkulære delen", "nøyaktig nodene som har inngrad større enn to", "nodene som ikke kan nås fra noen node med inngrad 0"],
      explanation: "Alt som venter på noe som aldri blir ferdig, blir liggende — også noder utenfor selve ringen. Skal du peke ut ringen nøyaktig, trenger du sterkt sammenhengende komponenter og ser etter komponenter med mer enn én node. Inngraden til en node sier ingenting om den er med i en sykel.",
    },
  ],
};

export default quizData_in2010;
