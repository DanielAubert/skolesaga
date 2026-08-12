import type { QuizQuestion } from './quiz-data';

const quizData_tdt4120: Record<string, QuizQuestion[]> = {
  'tdt4120-0-1': [
    {
      question: "Hvor mye teller den skriftlige eksamenen i TDT4120 av den endelige karakteren?",
      options: ["100 % — det er den eneste vurderingen som teller", "80 % — resten kommer fra obligatoriske øvinger som må være godkjent", "60 % — resten kommer fra en midtsemesterprøve", "50 % — resten kommer fra et prosjektarbeid"],
      explanation: "Vurderingen er én skriftlig skoleeksamen på fire timer som teller hele karakteren, og det finnes ingen midtsemesterprøve som teller inn. Alternativet som gir en midtsemesterprøve 40 % er nettopp den forvekslingen mange gjør — flere NTNU-emner har en slik ordning, men TDT4120 har den ikke.",
    },
    {
      question: "Hva innebærer hjelpemiddelkode E på eksamen i TDT4120?",
      options: ["Ingen hjelpemidler i det hele tatt — verken bok, notater eller kalkulator", "Kun en enkel kalkulator er tillatt, ellers ingenting", "Ett håndskrevet A4-ark med egne notater er tillatt", "Alle trykte og håndskrevne hjelpemidler er tillatt, inkludert kalkulator og egne notater"],
      explanation: "Kode E betyr ingen hjelpemidler, og den har stått på alle sju settene fra desember 2022 til desember 2025. Konsekvensen er at kjøretider, definisjoner og pseudokode må kunnes utenat. Alternativet som tillater alle hjelpemidler beskriver kode A, som gjaldt korona-hjemmeeksamenene fra 2020 til 2022 — de er ikke representative for dagens ordning.",
    },
    {
      question: "Rundt hvor mange oppgaver består et ordinært TDT4120-sett av, og hvordan vektes de?",
      options: ["Rundt 20 korte frisvarsoppgaver som teller likt", "Rundt 20 korte frisvarsoppgaver med stigende vekt utover i settet", "Fire til fem store oppgaver med hver sine deloppgaver", "Rundt 40 flervalgsoppgaver med automatisk retting"],
      explanation: "Settet har rundt 20 korte frisvarsoppgaver som teller likt, altså omtrent 5 % hver. At de teller LIKT er selve begrunnelsen for kortsvarsdisiplinen. Alternativet med stigende vekt er nærmest sannheten og derfor lettest å gå på: oppgavene stiger løst i vanskelighet, men vekten er den samme hele veien.",
    },
    {
      question: "Hvilken nevner ligger bak frekvenstallene («100 %», «94 %») som brukes i denne boka?",
      options: ["17 sett som er gjennomgått tema for tema, fra august 2015 til august 2023", "45 eksamensterminer med løsningsforslag, fra desember 2003 til desember 2025", "7 sett med hjelpemiddelkode E, fra desember 2022 til desember 2025", "5 korona-terminer med hjelpemiddelkode A, fra 2020 til august 2022"],
      explanation: "Prosentene er telt i de 17 settene som er gjennomgått tema for tema. Alternativet med 45 terminer er riktig som beskrivelse av arkivets samlede dybde, men de settene er ikke temaregistrert, så de kan ikke være nevner for en temafrekvens.",
    },
    {
      question: "Hvilke tre temaer har vært med i alle de 17 settene i grunnlaget?",
      options: ["Asymptotisk notasjon, sortering og NP-kompletthet med reduksjoner", "Asymptotisk notasjon, maksimal flyt og dynamisk programmering", "Sortering, minimale spenntrær og korteste vei fra én kilde", "Binære søketrær og hauger, hashing og amortisert analyse med disjunkte mengder"],
      explanation: "De tre 100 %-temaene er asymptotisk notasjon, sortering og NP-teori. Alternativet med maksimal flyt og dynamisk programmering ligger tett på: begge står på 94 % (16 av de 17 settene), altså med på nesten alle — men ikke alle.",
    },
    {
      question: "Hva sier oppgavetype C — håndkjøring — at svaret ditt skal inneholde?",
      options: ["Kun sluttilstanden, i nøyaktig det formatet oppgaven ber om", "Sluttilstanden pluss en forklaring av hvordan algoritmen virker", "Alle mellomtilstandene, slik at fremgangsmåten kan følges", "Pseudokoden for algoritmen, med sluttilstanden til slutt"],
      explanation: "Ved håndkjøring leverer du sluttilstanden og ikke mer — hele arrayet, hele tabellen eller ett tall, alt etter hva som etterspørres. Alternativet som legger til en forklaring er den vanligste overleveringen: det koster tid uten å gi uttelling, siden oppgaven spurte etter utdata og ikke etter en gjennomgang.",
    },
    {
      question: "Hva betyr $A \\le_p B$?",
      options: ["At $A$ reduseres til $B$, og at $B$ dermed er minst like vanskelig som $A$", "At $A$ reduseres til $B$, og at $A$ dermed er minst like vanskelig som $B$", "At $A$ og $B$ er like vanskelige, siden reduksjonen går begge veier", "At $A$ kan løses i polynomisk tid dersom $B$ er NP-komplett"],
      explanation: "Pilen peker fra problemet du reduserer, til problemet du reduserer til, og det siste er minst like vanskelig. Alternativet som snur konklusjonen er felle #1 og det enkeltpunktet løsningsforslagene fremhever oftest: skal du vise at ditt eget problem er vanskelig, må reduksjonen gå FRA et kjent vanskelig problem TIL ditt eget.",
    },
    {
      question: "Hvor lenge sto setningen «lange svar teller ikke positivt» trykt på oppgavearkene?",
      options: ["I seks terminer, fra desember 2015 til desember 2018", "I hver eneste termin arkivet dekker, fra 2003 og framover", "Bare i den ene terminen desember 2018", "Fra august 2019 og fram til i dag"],
      explanation: "Formuleringen tilhører papirtidens instruksblokk og står i seks terminer, fra desember 2015 til desember 2018. Alternativet som sier «hver eneste termin» er den vanlige overdrivelsen: setningen er borte fra alle sett fra august 2019 og framover. Disiplinen står likevel ved lag, nå uttrykt i selve oppgavetekstene.",
    },
    {
      question: "Hva kjennetegner de siste tre til fem oppgavene på et ordinært sett?",
      options: ["De er åpne designoppgaver der du skal konstruere en algoritme", "De er definisjonsoppgaver som oppsummerer hele pensum", "De er håndkjøringer av de største datastrukturene", "De er ekstraoppgaver som bare teller for karakteren A"],
      explanation: "De siste oppgavene er åpne designoppgaver av type H, oftest med maksimal flyt eller dynamisk programmering som verktøy. Alternativet om ekstraoppgaver er feil på et viktig punkt: de teller nøyaktig like mye som alle andre oppgaver, selv om det er der toppkarakteren i praksis avgjøres.",
    },
    {
      question: "Hva er den riktige beskrivelsen av delvis uttelling i dette faget?",
      options: ["Det er dokumentert i løsningsforslagene, så et halvferdig svar er verdt mer enn en blank rute", "Det gis bare på designoppgavene, siden de er de eneste med flere ledd", "Det gis ikke — hver oppgave vurderes som enten riktig eller gal", "Det gis bare dersom kandidaten markerer selv hvor svaret er ufullstendig"],
      explanation: "Løsningsforslagene bruker formuleringer som «her gis det 1 poeng» og «det gis uansett bare 4 av 5 poeng», så delvis uttelling er dokumentert og gjelder bredt. Alternativet som begrenser det til designoppgavene er nærmest sannheten, men galt: også en håndkjøringstabell med noen riktige rader gir uttelling.",
    },
    {
      question: "Hvorfor er korona-settene fra 2020 til august 2022 ikke egnet som eksamenstrening?",
      options: ["De var hjemmeeksamener med alle hjelpemidler og en annen, essaypreget oppgaveform", "De mangler offisielle løsningsforslag, så svarene dine kan ikke kontrolleres i etterkant", "De dekker et annet pensum enn det som gjelder nå", "De ble gitt på engelsk, mens dagens sett gis på norsk"],
      explanation: "De fem terminene med hjelpemiddelkode A var hjemmeeksamener med alle hjelpemidler, delvis bestått/ikke bestått og færre, bredere essayoppgaver. Alternativet om manglende løsningsforslag stemmer ikke: alle 45 TDT4120-terminene i arkivet har fasit, også korona-settene.",
    },
    {
      question: "Hva oppgir løsningsforslagene fra 2016 og framover for hver enkelt oppgave?",
      options: ["Hvilket læringsmål oppgaven er laget for å teste", "Hvor stor andel av kandidatene som svarte riktig", "Hvilket kapittel i pensumboka svaret står i, med sidetall", "Hvor lang tid oppgaven er beregnet å ta"],
      explanation: "Fra 2016 oppgir fasitene læringsmålet per oppgave, i formen «kunne løse rekurrenser med masterteoremet». Det er nyttig fordi et godt svar treffer nøyaktig den ferdigheten. Alternativet om andelen riktige svar finnes ikke i arkivet i det hele tatt — det er ingen karakter- eller svarstatistikk der.",
    },
    {
      question: "Hva betyr $\\lg n$ i denne boka?",
      options: ["$\\log_2 n$, altså toerlogaritmen", "$\\log_{10} n$, altså tierlogaritmen", "$\\ln n$, altså den naturlige logaritmen", "$\\log_b n$ for en vilkårlig base $b$"],
      explanation: "$\\lg$ er CLRS-konvensjonen for toerlogaritmen, og den brukes gjennomgående i oppgavene og løsningsforslagene. Alternativet med vilkårlig base er nærmest riktig i asymptotisk sammenheng — basen betyr ingenting inne i et $\\Theta$-uttrykk — men når en eksakt verdi skal oppgis, er $\\lg$ alltid base 2.",
    },
    {
      question: "Hva er hovedbegrunnelsen for at korte svar lønner seg, uansett hvordan oppgaveteksten er formulert?",
      options: ["20 oppgaver teller likt på fire timer, så tid brukt på én er tid tatt fra nitten andre", "Sensor trekker aktivt for hver setning som ikke er nødvendig for svaret", "Svarrutene på oppgavearket er så små at lengre svar ikke får plass", "Lange svar øker sjansen for at du skriver noe direkte galt ved siden av det som er riktig"],
      explanation: "Argumentet er strukturelt og krever ingen kilde: likt vektede oppgaver på fast tid gjør overflødig utledning direkte kostbar. Alternativet om trekk for unødvendige setninger er ikke dokumentert noe sted, og skal ikke antas — det som er dokumentert, er at fasitene selv svarer kort og at delvis uttelling gis.",
    },
  ],
  'tdt4120-1-1': [
    {
      question: "Hvilken betingelse definerer $f(n) = O(g(n))$?",
      options: ["Det finnes positive konstanter $c$ og $n_0$ slik at $0 \\le f(n) \\le c\\,g(n)$ for alle $n \\ge n_0$", "For hver positive konstant $c$ finnes et $n_0$ slik at $0 \\le f(n) < c\\,g(n)$ for alle $n \\ge n_0$", "Det finnes positive konstanter $c$ og $n_0$ slik at $0 \\le c\\,g(n) \\le f(n)$ for alle $n \\ge n_0$", "Det finnes positive konstanter $c_1$, $c_2$, $n_0$ slik at $0 \\le c_1 g(n) \\le f(n) \\le c_2 g(n)$ for $n \\ge n_0$"],
      explanation: "$O$ er et tak, og kravet er **eksistens**: det holder at én eneste konstant $c$ virker fra et sted og utover. Svaret som krever ulikheten for hver positive $c$, definerer $o$, ikke $O$ — det er en strengere påstand, og den er usann for $3n^2 = O(n^2)$. Svaret med $c\\,g(n) \\le f(n)$ er $\\Omega$, og det med to konstanter er $\\Theta$.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom definisjonen av $O$ og definisjonen av $o$?",
      options: ["$O$ krever at det finnes **én** konstant $c$ som virker, mens $o$ krever at ulikheten holder for **hver** positive $c$", "$O$ krever at ulikheten holder for **hver** positive $c$, mens $o$ bare krever at det finnes **én** slik $c$", "$O$ gjelder bare fra en grense $n_0$ og utover, mens $o$ må gjelde for alle $n$ helt fra $n = 1$ av", "$O$ sammenligner de to funksjonene verdi for verdi, mens $o$ sammenligner forholdet mellom dem med tallet 1 for hver $n$"],
      explanation: "Hele forskjellen sitter i kvantoren foran $c$: $O$ er eksistens («det finnes en $c$»), $o$ er allkvantor («for hver $c$»). Svaret som snur kvantorene, er nettopp den byttefeilen som oftest gjør et definisjonssvar galt. Begge symbolene bruker et $n_0$, så påstanden om at $o$ må gjelde fra $n = 1$, er også feil.",
    },
    {
      question: "Hva krever definisjonen av $f(n) = \\Theta(g(n))$?",
      options: ["To konstanter $c_1$ og $c_2$ pluss en $n_0$, slik at $g$ klemmer $f$ både nedenfra og ovenfra fra $n_0$ og utover", "Én konstant $c$ pluss en $n_0$, slik at $f$ holder seg under $c\\,g(n)$ for alle $n$ fra $n_0$ og utover", "At forholdet $f(n)/g(n)$ nærmer seg tallet 1 når $n$ vokser, slik at de to funksjonene blir like store", "At $f$ og $g$ er nøyaktig den samme funksjonen bortsett fra ledd av lavere orden, uten noen konstantfaktor mellom seg"],
      explanation: "$\\Theta$ er den doble grensen: $0 \\le c_1 g(n) \\le f(n) \\le c_2 g(n)$, altså $O$ og $\\Omega$ samtidig, og det krever to konstanter, ikke én. Svaret med bare én konstant og ett tak er definisjonen av $O$. Kravet om at forholdet skal gå mot 1, er langt strengere enn $\\Theta$ — $3n^2 = \\Theta(n^2)$ har forhold 3, ikke 1.",
    },
    {
      question: "Hva er rollen til $n_0$ i de asymptotiske definisjonene?",
      options: ["Grensen der påstanden begynner å gjelde — alt som skjer for mindre $n$, er uten betydning for om den er sann", "Den minste inputstørrelsen algoritmen i det hele tatt kan kjøre på, gitt av datastrukturen den arbeider i", "Punktet der de to funksjonene krysser hverandre for aller første gang, og som derfor må regnes ut eksakt i et definisjonssvar", "Antall elementer i inputen, altså nøyaktig den samme størrelsen som $n$ står for i kjøretidsuttrykket"],
      explanation: "Asymptotisk notasjon uttaler seg bare om oppførselen for store $n$, og $n_0$ er stedet der «stor nok» begynner. Svaret som gjør $n_0$ til et krysningspunkt, er galt fordi funksjonene godt kan krysse flere ganger før $n_0$ — definisjonen krever bare at ulikheten holder **etter** $n_0$, ikke at det er første gang den gjør det.",
    },
    {
      question: "Er $2^{n+1} = O(2^n)$?",
      options: ["Ja — $2^{n+1} = 2 \\cdot 2^n$, og konstantfaktoren 2 svelges av $c$ i definisjonen", "Nei — eksponenten er én større, og eksponentiell vekst tåler ingen konstantfaktor", "Nei — forholdet $2^{n+1}/2^n$ vokser uten grense, så det finnes ingen gyldig $c$", "Ja — men bare fordi begge funksjonene i tillegg er $O(n!)$, ikke på grunn av forholdet"],
      explanation: "Forholdet $2^{n+1}/2^n$ er konstant lik 2, og $c = 2$ med $n_0 = 1$ er vitner som oppfyller definisjonen. Svaret som hevder at forholdet vokser uten grense, regner feil: det er $2^{2n}/2^n = 2^n$ som vokser, ikke $2^{n+1}/2^n$. At begge er $O(n!)$ er sant, men irrelevant for påstanden.",
    },
    {
      question: "Er $2^{2n} = O(2^n)$?",
      options: ["Nei — $2^{2n}/2^n = 2^n$ vokser uten grense, så ingen konstant $c$ kan holde taket", "Ja — eksponenten er bare doblet, og en faktor 2 i eksponenten er en konstantfaktor", "Ja — begge funksjonene er eksponentielle, og eksponentielle funksjoner er $O$ av hverandre", "Nei — men $2^{2n} = \\Theta(2^n)$ holder likevel, siden $\\Theta$ er mildere enn $O$"],
      explanation: "$2^{2n} = (2^n)^2$, så forholdet mellom de to er $2^n$, som passerer enhver konstant. En faktor i **eksponenten** er ikke en konstantfaktor foran uttrykket — det er den forvekslingen som gjør $2^{2n} = O(2^n)$ til en fristende, men gal påstand. Og $\\Theta$ er strengere enn $O$, ikke mildere: $\\Theta$ krever $O$ i tillegg til $\\Omega$.",
    },
    {
      question: "Symmetriregelen mellom de løse symbolene sier at $f(n) = O(g(n))$ gjelder nøyaktig når:",
      options: ["$g(n) = \\Omega(f(n))$ — det er det samme taket sett fra den andre funksjonens side", "$g(n) = O(f(n))$ — relasjonen virker begge veier, slik $\\Theta$ gjør det", "$g(n) = \\Theta(f(n))$ — de to funksjonene vokser da nødvendigvis like fort, både nedenfra og ovenfra", "$f(n) = \\omega(g(n))$ — det er den strenge varianten av den samme påstanden"],
      explanation: "«$f$ ligger under $g$» og «$g$ ligger over $f$» er samme utsagn lest fra hver sin kant, altså $f = O(g) \\iff g = \\Omega(f)$. Svaret $g = O(f)$ ville gjøre relasjonen symmetrisk, og det er den ikke: $n = O(n^2)$ er sant, mens $n^2 = O(n)$ er usant. $\\omega$ er dessuten en nedre grense, ikke en øvre.",
    },
    {
      question: "Hvilke egenskaper har relasjonen $f(n) = \\Theta(g(n))$?",
      options: ["Den er refleksiv, symmetrisk og transitiv — altså en ekvivalensrelasjon på funksjonene", "Den er refleksiv og transitiv, men ikke symmetrisk, slik $\\le$ er på tallene", "Den er symmetrisk og transitiv, men ikke refleksiv, siden $f = \\Theta(f)$ er innholdsløst", "Den er bare transitiv; de to andre egenskapene gjelder for $O$ og $\\Omega$ i stedet"],
      explanation: "$f = \\Theta(f)$ (refleksiv), $f = \\Theta(g) \\Rightarrow g = \\Theta(f)$ (symmetrisk) og transitivitet holder alle tre, så $\\Theta$ deler funksjonene inn i vekstklasser. Svaret som sammenligner med $\\le$, beskriver $O$: den er refleksiv og transitiv, men ikke symmetrisk. Og $f = \\Theta(f)$ er triviell, men fullt gyldig — refleksivitet krever ikke at påstanden er interessant.",
    },
    {
      question: "Hvilken av disse fire funksjonene vokser raskest asymptotisk?",
      options: ["$n!$ — fakultetsfunksjonen", "$2^n$ — ren eksponentiell vekst", "$n^{100}$ — polynom av grad hundre", "$n^2\\lg n$ — kvadratisk med logaritmefaktor"],
      explanation: "Vekstordningen er $n^2\\lg n < n^{100} < 2^n < n!$: ethvert polynom taper mot enhver eksponentiell, og $n!$ vokser raskere enn $2^n$ fordi $n!$ ganger med stadig større faktorer mens $2^n$ ganger med 2 hver gang. At eksponenten 100 er et stort tall endrer ingenting — det er formen $n^k$ mot $k^n$ som avgjør.",
    },
    {
      question: "Hva betyr likhetstegnet i skrivemåten $f(n) = O(g(n))$?",
      options: ["«tilhører» — $O(g(n))$ er en mengde funksjoner, og $f$ er ett av medlemmene i den", "«er lik» i vanlig forstand — de to sidene betegner nøyaktig den samme funksjonen", "«nærmer seg» — forskjellen mellom venstre og høyre side går mot null når $n$ vokser", "«defineres som» — venstre side er et navn som innføres for uttrykket på høyre side"],
      explanation: "Skrivemåten er en innarbeidet forkortelse for $f(n) \\in O(g(n))$, og det forklarer hvorfor den ikke virker begge veier: $n = O(n^2)$ er meningsfullt, mens $O(n^2) = n$ ikke er det. Leser du tegnet som vanlig likhet, ender du med å «snu» påstander som ikke tåler å snus.",
    },
    {
      question: "Hvorfor spiller ikke grunntallet i en logaritme noen rolle i asymptotisk notasjon?",
      options: ["Fordi $\\log_a n$ og $\\log_b n$ skiller seg bare med den konstante faktoren $\\log_a b$, som forsvinner i $\\Theta$", "Fordi alle logaritmer vokser så langsomt at forskjellen mellom dem forsvinner helt når $n$ blir stor", "Fordi asymptotisk notasjon per definisjon regner om alle logaritmer til grunntall 2 før sammenligningen", "Fordi $\\log_a n$ og $\\log_b n$ krysser hverandre i ett punkt, og fra og med krysningen er de to like store for all senere $n$"],
      explanation: "Basebyttet gir $\\log_b n = \\log_a n / \\log_a b$, altså en fast multiplikativ konstant, og konstanter svelges av $c$-en i definisjonene. Forklaringen om at forskjellen «forsvinner» fordi logaritmer vokser sakte, er feil: forskjellen er en fast faktor som aldri forsvinner, den er bare irrelevant for vekstklassen.",
    },
    {
      question: "En algoritme oppgis å ha kjøretid $O(n^2)$ i verste tilfelle. Hva sier det om kjøretiden på en vilkårlig input av størrelse $n$?",
      options: ["At den aldri overstiger en konstant ganger $n^2$ for store $n$ — men den kan godt være mye lavere", "At den er en konstant ganger $n^2$ for store $n$, både som øvre og som nedre grense for tiden", "At den er minst en konstant ganger $n^2$ for store $n$, siden verste tilfelle er en garanti nedenfra", "At den er $n^2$ på nøyaktig én input og lavere på alle de andre inputene av samme størrelse"],
      explanation: "$O$ i verste tilfelle er et tak over alle inputer av størrelsen: ingen input koster mer, men mange kan koste langt mindre. Svaret som gjør uttrykket til en nedre grense, bytter $O$ mot $\\Omega$ — det er den samme feilen som å påstå at `Insertion-Sort` bruker $\\Omega(n\\lg n)$ i beste tilfelle, når den faktisk bruker $\\Theta(n)$ på et sortert array.",
    },
    {
      question: "Hva skiller polynomisk fra eksponentiell vekst, og hvorfor er skillet viktig?",
      options: ["Polynomisk er $n^k$ med $k$ konstant og eksponentiell er $k^n$; enhver $k^n$ med $k>1$ passerer ethvert polynom", "Polynomisk er $n^k$ og eksponentiell er $k^n$; hvilken som vinner avhenger av hvor stor konstanten $k$ er", "Polynomisk vokser med en konstant faktor per steg og eksponentiell med et konstant tillegg per steg", "Polynomisk er alt som er $O(n^2)$, og alt som vokser raskere enn $n^2$ regnes fra da av som eksponentiell vekst"],
      explanation: "Uansett hvor stor $k$ er i $n^k$, og hvor nær 1 grunntallet i $k^n$ ligger, passerer den eksponentielle funksjonen polynomet fra et punkt av — derfor er $n^{100}$ asymptotisk mindre enn $1{,}1^n$. Svaret som gjør utfallet avhengig av konstantens størrelse, går glipp av nettopp dette. Og $n^3$ er polynomisk, ikke eksponentiell.",
    },
    {
      question: "Hvilken betingelse definerer $f(n) = \\omega(g(n))$?",
      options: ["For hver positive konstant $c$ finnes et $n_0$ slik at $0 \\le c\\,g(n) < f(n)$ for alle $n \\ge n_0$", "Det finnes positive konstanter $c$ og $n_0$ slik at $0 \\le c\\,g(n) \\le f(n)$ for alle $n \\ge n_0$", "For hver positive konstant $c$ finnes et $n_0$ slik at $0 \\le f(n) < c\\,g(n)$ for alle $n \\ge n_0$", "Det finnes positive konstanter $c$ og $n_0$ slik at $f(n) > g(n)$ holder for alle $n$ over $n_0$"],
      explanation: "$\\omega$ er den strenge nedre grensen: forholdet $f(n)/g(n)$ skal vokse uten grense, og det uttrykkes ved at ulikheten holder for **hver** $c$. Formen med «det finnes en $c$» definerer $\\Omega$, og formen med $f$ på den lille siden definerer $o$. Kravet $f(n) > g(n)$ uten noen konstant er hverken av delene og utelukker for eksempel $2n = \\omega(n)$ — som forresten er usant.",
    },
    {
      question: "Er $n\\lg n = \\omega(n)$?",
      options: ["Ja — forholdet $(n\\lg n)/n = \\lg n$ vokser uten grense, så ingen konstant $c$ kan holde $c \\cdot n$ over uttrykket", "Nei — begge uttrykkene er tilnærmet lineære, og en logaritme er for liten til å skille to vekstklasser", "Nei — $\\omega$ krever et gap på minst en hel potens av $n$, og en logaritmefaktor er ikke nok til det", "Det finnes positive konstanter $c$ og $n_0$ slik at ulikheten $f(n) > g(n)$ holder for alle verdier av $n$ over $n_0$"],
      explanation: "$\\omega$-testen er om forholdet vokser mot uendelig, og $\\lg n$ gjør det — sakte, men uten tak. Kravet om et gap på en hel potens av $n$ hører hjemme i masterteoremets $\\varepsilon$, ikke i definisjonen av $\\omega$. Og $n\\lg n$ er ikke $\\Theta(n^2)$: forholdet $(n\\lg n)/n^2 = (\\lg n)/n$ går mot null.",
    },
    {
      question: "Hva sier transitivitetsregelen for asymptotisk notasjon?",
      options: ["Er $f = O(g)$ og $g = O(h)$, så er $f = O(h)$ — og det samme mønsteret gjelder for $\\Omega$, $\\Theta$, $o$ og $\\omega$", "Er $f = O(g)$ og $g = O(h)$, så er $f = \\Theta(h)$ — de to trinnene til sammen gir en tett grense", "Er $f = O(g)$ og $g = \\Omega(h)$, så er $f = O(h)$ — grensene kan settes sammen på tvers av symbolene", "Ja — men bare fordi $n\\lg n$ i tillegg er $\\Theta(n^2)$, og $n^2$ er strengt større enn $n$ i vekstordningen"],
      explanation: "Transitivitet betyr at samme symbol kan kjedes: to tak på rad gir ett tak. Å konkludere med $\\Theta$ etter to $O$-steg er galt — $n = O(n^2)$ og $n^2 = O(n^3)$ gir $n = O(n^3)$, og $n = \\Theta(n^3)$ er usant. Å blande $O$ og $\\Omega$ i en kjede gir heller ingen konklusjon, og kjeden kan ikke leses baklengs.",
    },
    {
      question: "Hva er det strammeste asymptotiske uttrykket for $T(n) = 100n + 0{,}001n^2$?",
      options: ["$\\Theta(n^2)$", "$\\Theta(n)$", "$O(n^3)$", "$\\Theta(n^2 \\lg n)$"],
      explanation: "Konstantfaktorene er uten betydning uansett hvor små de er: $0{,}001n^2$ passerer $100n$ ved $n = 100{,}000$, og fra da av dominerer kvadratleddet. $O(n^3)$ er en sann påstand, men ikke den strammeste — å nøye seg med den er felle #4, og den gir sjelden full uttelling. $\\Theta(n)$ ser bare på leddet med størst konstant, ikke på leddet med størst vekst.",
    },
    {
      question: "Hva står $n$ for i kjøretidsfunksjonen $T(n)$?",
      options: ["Størrelsen på inputen, målt i den enheten problemet oppgir — antall elementer, noder eller bits", "Antall steg algoritmen utfører, slik at $T(n)$ egentlig teller det samme to ganger", "Antall sekunder algoritmen bruker på en gitt maskin, omregnet til en maskinuavhengig skala", "Den største tallverdien som forekommer i inputen, siden store tall koster mer å behandle enn små tall gjør"],
      explanation: "$T(n)$ er antall elementære steg som funksjon av **inputstørrelsen**, og hva størrelsen måles i, må oppgaven si: antall elementer i et array, $V$ og $E$ i en graf, eller antall bits i et tall. Å la $n$ være den største tallverdien er nettopp forvekslingen som gjør at 0-1-ryggsekk ser polynomisk ut når den er pseudopolynomisk.",
    },
  ],
  'tdt4120-1-2': [
    {
      question: "Hva blir $\\Theta(f(n)) + \\Theta(g(n))$ når $f$ vokser raskere enn $g$?",
      options: ["$\\Theta(f(n))$ — det raskest voksende leddet overlever, det andre svelges av konstanten", "$\\Theta(f(n) + g(n))$ — summen må stå urørt fordi begge leddene bidrar til totalen", "$\\Theta(f(n) \\cdot g(n))$ — når to $\\Theta$-ledd står sammen, ganges vekstklassene deres", "$O(f(n))$ — summen av to tette grenser gir bare en øvre grense, aldri en ny tett grense"],
      explanation: "Er begge leddene høyst $c\\cdot\\max(f,g)$, er summen høyst $2c\\cdot\\max(f,g)$, og faktoren 2 forsvinner inn i konstanten — derfor er sumregelen $\\Theta(f)+\\Theta(g) = \\Theta(\\max(f,g))$. Å beholde begge leddene er ikke galt som påstand, men det er ikke forenklet, og sjanger A ber om ett strammeste uttrykk. Å gange leddene sammen svarer på et helt annet regnestykke.",
    },
    {
      question: "Hva er det strammeste sanne svaret for $n + \\Theta(n^2) + O(n^3)$?",
      options: ["$\\Omega(n^2)$ og $O(n^3)$ — de to grensene oppgis hver for seg, side om side", "$\\Theta(n^3)$ — det raskest voksende leddet i summen avgjør alene", "$\\Theta(n^2)$ — $O(n^3)$-leddet kan skrumpe til en konstant og teller derfor ikke med", "$O(n^3)$ alene — en øvre grense er alt som kan sies om en slik sum"],
      explanation: "$O(n^3)$-leddet kan være så stort som $n^3$ og så lite som en konstant, så taket er $n^3$ mens gulvet bestemmes av $\\Theta(n^2)$-leddet. Ingen enkelt $\\Theta$-påstand er sann her, og å presse fram ett uttrykk er direkte galt. Å oppgi bare $O(n^3)$ kaster bort den nedre grensen, som er en del av svaret.",
    },
    {
      question: "Hva blir $\\Omega\\!\\left(n + \\Theta(n^2) + O(n^3)\\right)$?",
      options: ["$\\Omega(n^2)$ — du spør etter det minste innmaten kan bli, og $O(n^3)$-leddet kan skrumpe til en konstant", "$\\Omega(n^3)$ — det raskest voksende leddet inne i parentesen bestemmer også når $\\Omega$ står utenpå hele uttrykket", "$\\Omega(n)$ — det langsomst voksende leddet er den eneste garantien du har, siden $\\Omega$ spør nedover", "$\\Omega(n^6)$ — leddene inne i parentesen ganges sammen når et symbol står utenpå hele uttrykket"],
      explanation: "$\\Omega$ utenpå spør hva innmaten minst kan være. $\\Theta(n^2)$-leddet er låst til $n^2$ begge veier og kan ikke skrumpe, mens $O(n^3)$-leddet kan bli en konstant — derfor er $n^2$ gulvet. Svaret $\\Omega(n^3)$ leser $O$-leddet som om det var låst til $n^3$, og svaret $\\Omega(n)$ overser at $\\Theta(n^2)$ allerede garanterer mer enn $n$.",
    },
    {
      question: "Hva blir $O\\!\\left(n + \\Theta(n^2) + O(n^3)\\right)$?",
      options: ["$O(n^3)$ — du spør etter det største innmaten kan bli, og $O(n^3)$-leddet kan være så stort som $n^3$", "$O(n^2)$ — $\\Theta(n^2)$-leddet er det eneste som er låst, og bare låste ledd kan bestemme en øvre grense for en sum", "$O(n)$ — når $O$ står utenpå, leser du av det langsomst voksende leddet inne i parentesen", "Ingen øvre grense finnes — et $O$-ledd inne i en sum fjerner taket for hele uttrykket"],
      explanation: "$O$ utenpå spør hva innmaten største kan bli, og det største $O(n^3)$-leddet kan være, er $n^3$. Det er $\\Omega$- og $\\omega$-ledd som fjerner taket for en sum, ikke $O$-ledd — et $O$-ledd har jo nettopp et tak. Samme innmat gir altså $O(n^3)$ den ene veien og $\\Omega(n^2)$ den andre.",
    },
    {
      question: "En sum inneholder et $\\Omega$-ledd. Hva sier det om den øvre grensen for summen?",
      options: ["Det finnes ingen øvre grense i det hele tatt — leddet kan vokse fritt, og enhver $O$-påstand faller bort", "Den øvre grensen blir det $\\Omega$-leddet oppgir, siden $\\Omega$ og $O$ møtes når de står i samme sum", "Den øvre grensen bestemmes av det raskest voksende av de øvrige leddene, som om $\\Omega$-leddet ikke fantes", "Den øvre grensen finnes, men kan bare skrives med $\\omega$, som er den strenge varianten av $\\Omega$"],
      explanation: "$\\Omega(g)$ setter bare et gulv: leddet kan være $g$, men det kan like gjerne være $2^n$. Derfor er $\\Omega(n^2) + O(n^3)$ verken $O(n^3)$ eller $\\Theta$ av noe — det strammeste sanne svaret er $\\Omega(n^2)$. Å lese $\\Omega$-leddet som om det var låst til $g$, er en av de vanligste feilene i sjangeren.",
    },
    {
      question: "Hva blir $\\dfrac{\\Theta(n^4)}{\\Omega(n^2)}$?",
      options: ["$O(n^2)$ — nevneren er minst $n^2$, men kan vokse fritt oppover, så bare taket overlever", "$\\Theta(n^2)$ — eksponentene trekkes fra hverandre, og resultatet er låst begge veier", "$\\Omega(n^2)$ — nevneren er en nedre grense, og den nedre grensen arves av brøken", "$\\Theta(n^6)$ — eksponentene legges sammen fordi et $\\Omega$-ledd i nevneren snur fortegnet"],
      explanation: "Teller er låst til $n^4$, nevner er minst $n^2$ og har ingen øvre grense. Størst teller og minst nevner gir taket $n^4/n^2 = n^2$; minst teller og størst nevner gir en kvotient som kan skrumpe til en konstant, så ingen $\\Omega$-påstand overlever. Å trekke eksponentene fra hverandre og skrive $\\Theta$ behandler brøken som ett samlet ledd — den vanligste feilen i denne varianten.",
    },
    {
      question: "Hvordan finner du den **øvre** grensen for en brøk av asymptotiske ledd?",
      options: ["Sett teller til sin største mulige verdi og nevner til sin minste, og forkort deretter", "Sett både teller og nevner til sin største mulige verdi, og forkort deretter uttrykket", "Sett teller til sin minste mulige verdi og nevner til sin største, og forkort deretter", "Forkort først brøken som om alle ledd var låste, og velg deretter ekstremverdier i resultatet"],
      explanation: "En brøk blir størst når det som står oppe er størst og det som står nede er minst — derfor gir «største teller, minste nevner» taket, og «minste teller, største nevner» gulvet. Å forkorte først og velge ekstremverdier etterpå er nettopp rekkefølgen regelen forbyr: da forsvinner informasjonen om hvilke ledd som var låste og hvilke som kunne bevege seg.",
    },
    {
      question: "Hva blir $\\dfrac{\\Theta(n^3)}{\\Theta(n)}$?",
      options: ["$\\Theta(n^2)$ — begge ledd er låste begge veier, så eksponentene kan trekkes fra hverandre direkte", "$O(n^2)$ — en brøk kan aldri gi mer enn en øvre grense, uansett hvilke symboler som står i teller og nevner", "$\\Theta(n^3)$ — telleren bestemmer, og en nevner med lavere grad påvirker ikke vekstklassen", "$\\Omega(n^2)$ — nevneren er den eneste som er avgrenset ovenfra, og derfor overlever bare gulvet"],
      explanation: "Når **både** teller og nevner er $\\Theta$-ledd, har begge sine ekstremverdier låst til samme uttrykk, og de to regnestykkene gir samme svar — derfor er $\\Theta$ tillatt her. Påstanden om at en brøk aldri gir mer enn $O$, gjelder bare når minst ett av leddene er løst, slik $\\Theta(n^4)/\\Omega(n^2)$ er.",
    },
    {
      question: "Hva er ekstremverdiene til et $O(g)$-ledd?",
      options: ["Største mulige vekst er $g$, og det finnes ingen minste — leddet kan skrumpe til en konstant", "Minste mulige vekst er $g$, og det finnes ingen største — leddet kan vokse så fort det vil", "Både største og minste mulige vekst er $g$, akkurat som for et $\\Theta$-ledd i samme posisjon", "Største mulige vekst er $g$, og minste er $g$ delt på en konstant, siden $O$ tillater konstantfaktorer"],
      explanation: "$O$ er bare et tak: leddet ligger et sted mellom en konstant og $g$. Beskrivelsen med gulv og fritt tak hører til $\\Omega$, og den med begge deler låst hører til $\\Theta$. At det ikke finnes noe gulv, er hele grunnen til at et $O$-ledd forsvinner fra en $\\Omega$-beregning.",
    },
    {
      question: "Hva er det strammeste svaret for $n^2 + o(n^2)$?",
      options: ["$\\Theta(n^2)$ — et $o(n^2)$-ledd er forsvinnende lite mot $n^2$ og endrer ikke vekstklassen", "$\\Omega(n^2)$ og ingen øvre grense — et $o$-ledd er løst og kan derfor vokse fritt oppover", "$o(n^2)$ — det strengeste symbolet i uttrykket vinner alltid over de øvrige leddene i summen", "$\\Theta(n^2\\lg n)$ — det ekstra leddet løfter summen ett hakk opp i den vanlige vekstordningen"],
      explanation: "$o(n^2)$ betyr at leddet er **mindre** enn enhver konstant ganger $n^2$ for store $n$, så summen ligger mellom $n^2$ og $2n^2$, og det er $\\Theta(n^2)$. Forvekslingen med $\\omega$ er den farlige: det er $\\omega$-ledd som er ubegrenset oppover og fjerner taket, mens $o$-ledd er begrenset både opp og ned og forsvinner i forenklingen.",
    },
    {
      question: "Hva blir produktet $\\Theta(n\\lg n) \\cdot \\Theta(n)$?",
      options: ["$\\Theta(n^2\\lg n)$ — uttrykkene inne i de to symbolene ganges sammen ledd for ledd", "$\\Theta(n^2)$ — logaritmefaktoren forsvinner når to $\\Theta$-uttrykk ganges sammen", "$\\Theta(n\\lg n)$ — det raskest voksende av de to faktorene overlever, slik det gjør i en sum", "$\\Theta(n^2\\lg^2 n)$ — logaritmen kvadreres fordi den er med i begge de to faktorene"],
      explanation: "Et produkt behandles ved å gange innmaten: $n\\lg n \\cdot n = n^2\\lg n$. Regelen om at det raskeste leddet overlever, gjelder **summer**, ikke produkter — der bidrar begge faktorene. Og $\\lg n$ står bare i den ene faktoren, så den kan ikke kvadreres.",
    },
    {
      question: "Hva blir $5 \\cdot \\Theta(n^2) + 300$?",
      options: ["$\\Theta(n^2)$ — både konstantfaktoren og konstantleddet forsvinner i forenklingen", "$\\Theta(5n^2)$ — konstantfaktoren hører med i svaret så lenge den står oppgitt", "$\\Theta(n^2 + 300)$ — konstantleddet kan ikke strykes uten at $n$ er oppgitt", "$O(n^2)$ — så snart et konstantledd er med i summen, kan svaret bare bindes ovenfra"],
      explanation: "Konstantfaktorer og ledd av lavere orden svelges av $c$-ene i definisjonen, så $5n^2 + 300 = \\Theta(n^2)$. Å skrive $\\Theta(5n^2)$ er ikke usant, men det er ikke forenklet, og asymptotisk notasjon har ingen plass til konstantfaktorer i svaret. Konstantleddet 300 er dessuten $O(1)$ og kan aldri påvirke vekstklassen.",
    },
    {
      question: "Hva er det strammeste svaret for $\\Theta(n^2) + O(n)$?",
      options: ["$\\Theta(n^2)$ — $O(n)$-leddet er begrenset av $n$ og kan derfor aldri løfte summen opp", "$\\Omega(n^2)$ og $O(n^2 + n)$ — grensene må oppgis hver for seg når symbolene er blandet", "$\\Theta(n)$ — det leddet som er skrevet med det svakeste symbolet, avgjør hele summen", "$\\Omega(n^2)$ alene — så snart et $O$-ledd er med i en sum, forsvinner den øvre grensen"],
      explanation: "$O(n)$-leddet ligger et sted mellom en konstant og $n$, og begge ytterpunktene er mindre enn $n^2$ — derfor er summen låst til $n^2$ begge veier. Sammenlign med $\\Theta(n^2) + O(n^3)$, der $O$-leddet **kan** overstige $n^2$: der sprekker $\\Theta$-svaret. Det er størrelsen på $O$-leddet i forhold til det låste leddet som avgjør, ikke at det står et $O$ der.",
    },
    {
      question: "Hva er det strammeste svaret for $n^2 + \\omega(n)$?",
      options: ["$\\Omega(n^2)$, og ingen øvre grense finnes for summen", "$\\Theta(n^2)$, siden $\\omega(n)$ alltid er mindre enn $n^2$", "$\\omega(n)$, siden det strengeste symbolet vinner", "$O(n^2)$, siden $n^2$ er det største låste leddet her"],
      explanation: "Et $\\omega(n)$-ledd er bare bundet nedenfra og kan være $n^{10}$ like gjerne som $n\\lg n$ — derfor faller enhver $O$-påstand bort. Gulvet er likevel minst $n^2$, siden $n^2$ står der som et låst ledd. Å lese $\\omega(n)$ som «litt større enn $n$, men mindre enn $n^2$» er nettopp den lesningen definisjonen ikke tillater.",
    },
    {
      question: "Når må svaret på en forenklingsoppgave skrives med $O$ og ikke med $\\Theta$?",
      options: ["Når det finnes et tak, men ikke noe gulv — typisk med et $\\Omega$-ledd i nevneren eller et $O$-ledd som kan skrumpe fritt", "Når uttrykket inneholder en brøk, siden en brøk av to vekstklasser aldri kan bindes tett begge veier", "Når du er usikker på om svaret er riktig, siden $O$ er den mildeste påstanden og derfor sjelden gal", "Når uttrykket inneholder mer enn tre ledd, siden en tett grense krever at hvert ledd kan låses hver for seg og sammenlignes med de andre"],
      explanation: "$\\Theta$ krever at både gulvet og taket havner på samme uttrykk. Kan et ledd skrumpe fritt — et $O$-ledd i telleren eller et $\\Omega$-ledd i nevneren — forsvinner gulvet, og $O$ er hele svaret. Å velge $O$ av usikkerhet er felle #4: svaret blir sant, men løsere enn nødvendig, og gir sjelden full uttelling.",
    },
    {
      question: "Hva blir $\\dfrac{\\Theta(n^2)}{\\Theta(\\lg n)}$?",
      options: ["$\\Theta\\!\\left(\\dfrac{n^2}{\\lg n}\\right)$", "$\\Theta(n^2\\lg n)$", "$\\Theta(n^2)$", "$O\\!\\left(\\dfrac{n^2}{\\lg n}\\right)$ uten nedre grense"],
      explanation: "Begge ledd er låste, så brøken er låst, og svaret er brøken selv — en logaritme i nevneren lar seg ikke stryke, men den kan heller ikke flyttes opp i telleren. Å svare $\\Theta(n^2)$ behandler $\\lg n$ som en konstant, og det er den ikke: $n^2/\\lg n$ vokser strengt saktere enn $n^2$.",
    },
    {
      question: "Hva er svarformen i sjanger A — asymptotisk forenkling?",
      options: ["Ett strammeste uttrykk på én linje, uten utledning — eller to uttrykk når nedre og øvre grense ikke møtes", "Ett uttrykk pluss en kort utledning som viser hvilke ledd som ble strøket underveis, ellers gis delpoeng", "Alle sanne asymptotiske påstander om uttrykket, slik at sensor kan velge den strammeste av dem selv", "Ett uttrykk skrevet med $O$, siden $O$ er standardsymbolet og de øvrige symbolene brukes bare i teoridelen"],
      explanation: "Sjangeren ber om resultatet, ikke veien dit, og løsningsforslagene gir uttelling for det strammeste uttrykket. Å ramse opp flere sanne påstander hjelper ikke — oppgaven spør etter én. Og valget mellom $\\Theta$, $O$ og $\\Omega$ er en del av svaret: symbolet skal si nøyaktig hvilke grenser du kan forsvare.",
    },
    {
      question: "Både $\\Theta(n^2)$ og $O(n^3)$ er sanne om samme funksjon. Hvorfor er $O(n^3)$ likevel et dårligere svar?",
      options: ["Fordi det kaster bort informasjon: $\\Theta(n^2)$ binder funksjonen fra begge sider på riktig nivå", "Fordi $O(n^3)$ er usant så snart funksjonen også er $\\Theta(n^2)$, og bare ett symbol kan gjelde om gangen", "Fordi $O$ aldri kan brukes om kjøretider, men bare om plassbruk og andre ressurser enn tid", "Fordi $O(n^3)$ er en påstand om verste tilfelle, mens $\\Theta(n^2)$ er en påstand om forventet tilfelle"],
      explanation: "Begge påstandene er sanne, men $O(n^3)$ sier mindre: den utelukker ikke at funksjonen egentlig er lineær. Å nøye seg med den løsere grensen er felle #4. Symbolvalget sier heller ingenting om hvilket tilfelle du analyserer — beste, verste og forventet tilfelle er en helt annen akse enn valget mellom $O$, $\\Omega$ og $\\Theta$.",
    },
  ],
  'tdt4120-1-3': [
    {
      question: "Hva er det strammeste uttrykket for $3n^3 + 100n^2\\lg n + 2^{10}$?",
      options: ["$\\Theta(n^3)$", "$\\Theta(n^2\\lg n)$", "$O(n^3\\lg n)$", "$\\Theta(2^{10}n^3)$"],
      explanation: "$n^3$ vokser raskere enn $n^2\\lg n$, og $2^{10}$ er en konstant uansett hvor stor den ser ut — det er formen, ikke tallverdien, som avgjør. $O(n^3\\lg n)$ er sant, men løsere enn nødvendig, og konstantfaktorer hører ikke hjemme i et forenklet svar.",
    },
    {
      question: "Hvordan forholder $n^{\\lg 3}$ og $3^{\\lg n}$ seg til hverandre?",
      options: ["De vokser nøyaktig like fort — de to uttrykkene er faktisk identiske, siden $a^{\\lg b} = b^{\\lg a}$", "$3^{\\lg n}$ vokser raskest, fordi den er eksponentiell mens $n^{\\lg 3}$ bare er et polynom i $n$", "$n^{\\lg 3}$ vokser raskest, fordi $\\lg 3$ er større enn 1 og eksponenten derfor løfter grunntallet ekstra", "De kan ikke sammenlignes uten at grunntallet i logaritmen er oppgitt, siden $\\lg$ er tvetydig her"],
      explanation: "Tar du toerlogaritmen av begge, får du $\\lg 3 \\cdot \\lg n$ i begge tilfeller, så uttrykkene er samme funksjon skrevet på to måter — begge er $n^{1{,}585\\ldots}$. At $3^{\\lg n}$ *ser* eksponentiell ut, er formfellen: eksponenten er $\\lg n$, ikke $n$. Og $\\lg$ betyr $\\log_2$ i hele boka, så noe er ikke tvetydig.",
    },
    {
      question: "Hva er det strammeste svaret for $\\Theta(n^2) + \\Omega(n)$?",
      options: ["$\\Omega(n^2)$ — $\\Omega$-leddet fjerner taket, men $\\Theta$-leddet holder gulvet oppe på $n^2$", "$\\Theta(n^2)$ — $\\Omega(n)$-leddet vokser langsommere og forsvinner derfor i forenklingen", "$\\Omega(n)$ — når to symboler møtes, er det det svakeste av de to som avgjør hele summen", "$O(n^2)$ og $\\Omega(n)$ — grensene må oppgis hver for seg fordi symbolene peker hver sin vei i uttrykket"],
      explanation: "Et $\\Omega(n)$-ledd kan være $n$, men også $2^n$, så ingen $O$-påstand overlever. Gulvet er likevel minst $n^2$, siden $\\Theta(n^2)$-leddet står der låst. Å behandle $\\Omega(n)$ som «omtrent $n$» er nettopp lesningen definisjonen ikke tillater.",
    },
    {
      question: "Hva er det strammeste svaret for $O(n^2) + O(n^3)$?",
      options: ["$O(n^3)$ — begge ledd har hvert sitt tak, og det høyeste taket blir taket for summen", "$\\Theta(n^3)$ — det raskest voksende leddet avgjør, og svaret kan derfor låses", "$O(n^2)$ — det laveste taket er det eneste begge leddene kan garantere samtidig for summen", "$O(n^5)$ — taket for en sum av to $O$-ledd er produktet av de to vekstklassene"],
      explanation: "Begge ledd ligger under sitt eget tak, så summen ligger under summen av takene, og den er $O(n^3)$. $\\Theta(n^3)$ er galt fordi begge ledd kan skrumpe til konstanter — det finnes ikke noe gulv. Og takene legges sammen, de ganges ikke.",
    },
    {
      question: "Hva er det strammeste svaret for $\\Omega(n^2) + \\Omega(n^3)$?",
      options: ["$\\Omega(n^3)$ — begge ledd har gulv, og det høyeste gulvet blir gulvet for summen", "$\\Omega(n^2)$ — det laveste gulvet er det eneste begge ledd garanterer samtidig", "$\\Theta(n^3)$ — summen låses fordi det ene leddet dominerer det andre fullstendig", "Ingen grense kan oppgis — to $\\Omega$-ledd i samme sum opphever hverandres garantier"],
      explanation: "Summen er minst like stor som hvert enkelt ledd, og det strengeste gulvet er $n^3$. Å velge det laveste gulvet er sant, men løsere enn nødvendig. $\\Theta$ er utelukket fordi begge ledd kan vokse fritt oppover, og to $\\Omega$-ledd forsterker hverandre — de opphever ingenting.",
    },
    {
      question: "Hvilken av disse fire påstandene er **sann**?",
      options: ["$n^2 = o(n^3)$", "$n^2 = \\omega(n^2)$", "$n^3 = O(n^2)$", "$n\\lg n = \\Theta(n)$"],
      explanation: "$n^2/n^3 = 1/n$ går mot null, og det er nøyaktig $o$-kravet. $n^2 = \\omega(n^2)$ er usant fordi forholdet er konstant 1 og ikke vokser; $n^3 = O(n^2)$ er usant fordi forholdet $n$ vokser uten grense; og $n\\lg n$ vokser strengt raskere enn $n$, så $\\Theta$ holder ikke.",
    },
    {
      question: "Hva blir $\\dfrac{n^3 + \\Theta(n^2)}{\\Theta(n)}$?",
      options: ["$\\Theta(n^2)$ — teller er låst til $n^3$, nevner til $n$, og eksponentene trekkes fra hverandre", "$\\Theta(n^3)$ — telleren bestemmer helt alene, siden nevneren vokser langsommere enn telleren gjør", "$O(n^2)$ — en brøk med et sammensatt uttrykk i telleren gir aldri mer enn en øvre grense", "$\\Theta(n^4)$ — eksponentene i teller og nevner legges sammen når brøken skal forenkles"],
      explanation: "Telleren er $n^3 + \\Theta(n^2) = \\Theta(n^3)$, og både den og nevneren er dermed låst begge veier, så brøken er låst: $n^3/n = n^2$. At telleren er en sum, endrer ingenting så lenge summen selv er et $\\Theta$-uttrykk. Eksponenter trekkes fra i en divisjon, de legges ikke sammen.",
    },
    {
      question: "Hva blir $\\dfrac{O(n^4)}{\\Theta(n^2)}$?",
      options: ["$O(n^2)$ — telleren har tak men intet gulv, så bare den øvre grensen overlever divisjonen", "$\\Theta(n^2)$ — nevneren er låst, og det er nok til å låse hele brøken begge veier", "$\\Omega(n^2)$ — telleren setter et gulv på $n^4$, som deles ned til $n^2$ av nevneren", "$O(n^6)$ — når teller og nevner er skrevet med ulike symboler, legges eksponentene sammen i stedet"],
      explanation: "Største teller delt på minste nevner gir $n^4/n^2 = n^2$, altså taket. Minste teller er derimot en konstant, så kvotienten kan skrumpe helt ned — ingen $\\Omega$-påstand overlever. $O$-leddet setter et tak, ikke et gulv, og det er nettopp derfor svaret ikke kan bli $\\Theta$.",
    },
    {
      question: "Hva blir $\\dfrac{\\Theta(n^3)}{O(n)}$?",
      options: ["$\\Omega(n^2)$ — nevneren kan skrumpe til en konstant, så brøken har ingen øvre grense", "$\\Theta(n^2)$ — eksponentene trekkes fra hverandre og gir et låst uttrykk som svar", "$O(n^2)$ — nevneren er høyst $n$, og det gir taket $n^3/n$ for hele brøken samlet", "$\\Theta(n^3)$ — et $O(n)$-ledd i nevneren kan strykes fordi det ikke er låst nedenfra"],
      explanation: "Minste nevner er en konstant, og da blir brøken like stor som telleren, altså $n^3$ — og siden nevneren kan være hva som helst opp til $n$, finnes ingen øvre grense i det hele tatt. Største nevner $n$ gir gulvet $n^3/n = n^2$. Å lese $O(n)$ som «omtrent $n$» og trekke fra eksponentene gir feil symbol her.",
    },
    {
      question: "Hva er det strammeste svaret for $\\Theta(n^2) \\cdot O(n)$?",
      options: ["$O(n^3)$ — den ene faktoren er låst, og den andre har bare tak, så produktet har bare tak", "$\\Theta(n^3)$ — de to uttrykkene ganges sammen, og et produkt av vekstklasser er alltid låst", "$\\Theta(n^2)$ — $O(n)$-faktoren kan skrumpe til en konstant og strykes derfor helt fra produktet", "$\\Omega(n^2)$ og $O(n^3)$ — produktet må oppgis med nedre og øvre grense hver for seg alltid"],
      explanation: "$O(n)$-faktoren ligger mellom en konstant og $n$, så produktet ligger mellom $n^2$ og $n^3$ — taket er $n^3$, og et gulv på $n^2$ finnes også. Oppgaven ber om det strammeste **enkeltuttrykket**, og $O(n^3)$ er det svaret sjangeren forventer når bare taket etterspørres. Å låse produktet til $\\Theta(n^3)$ overser at faktoren kan skrumpe.",
    },
    {
      question: "Hvilken formulering er den riktige definisjonen av $f(n) = o(g(n))$?",
      options: ["For hver positive konstant $c$ finnes et $n_0$ slik at $0 \\le f(n) < c\\,g(n)$ for alle $n \\ge n_0$", "Det finnes positive konstanter $c$ og $n_0$ slik at $0 \\le f(n) \\le c\\,g(n)$ for alle $n \\ge n_0$", "For hver positive konstant $c$ finnes et $n_0$ slik at $0 \\le c\\,g(n) < f(n)$ for alle $n \\ge n_0$", "Det finnes en positiv konstant $c$ slik at $f(n) < c\\,g(n)$ for absolutt alle verdier av $n$"],
      explanation: "Kvantoren «for hver $c$» er hele forskjellen fra $O$, og den er den detaljen som oftest mangler i et definisjonssvar. Formen med «det finnes en $c$» er $O$; formen med $f$ på den store siden er $\\omega$. Og et krav som skal gjelde for absolutt alle $n$, dropper $n_0$ og gjør definisjonen usann allerede for små $n$.",
    },
    {
      question: "Hvilken funksjon ligger mellom $n$ og $n^2$ i standard vekstordning?",
      options: ["$n\\lg n$", "$\\lg n$", "$n^2\\lg n$", "$2^n$"],
      explanation: "Ordningen er $1 < \\lg n < n < n\\lg n < n^2 < n^3 < 2^n < n!$. $\\lg n$ ligger under $n$, $n^2\\lg n$ over $n^2$, og $2^n$ passerer ethvert polynom. Bare $n\\lg n$ havner i gapet.",
    },
    {
      question: "Hva er $2^{\\lg n}$?",
      options: ["$n$ — logaritmen og toerpotensen opphever hverandre", "$\\lg n$ — logaritmen blir stående igjen", "$n^2$ — eksponenten dobles av potensen", "$2n$ — grunntallet 2 blir stående som en faktor foran $n$"],
      explanation: "$\\lg$ er toerlogaritmen, og å opphøye 2 i toerlogaritmen til $n$ gir $n$ tilbake — de to operasjonene opphever hverandre. Svaret $\\lg n$ er den samme forvekslingen lest baklengs, og $n^2$ ville krevd $2^{2\\lg n}$.",
    },
    {
      question: "Hva er det strammeste uttrykket for $\\sqrt{n} \\cdot n^{1{,}5}$?",
      options: ["$\\Theta(n^2)$", "$\\Theta(n^{1{,}5})$", "$\\Theta(n\\sqrt{n})$", "$\\Theta(n^3)$"],
      explanation: "$\\sqrt{n} = n^{0{,}5}$, og eksponentene legges sammen i et produkt: $0{,}5 + 1{,}5 = 2$. $\\Theta(n\\sqrt{n})$ er $n^{1{,}5}$ skrevet på en annen måte og er dermed samme feil som $\\Theta(n^{1{,}5})$ — begge glemmer den ene faktoren.",
    },
    {
      question: "Hva er $n^{\\lg 4}$ lik?",
      options: ["$\\Theta(n^2)$", "$\\Theta(n^4)$", "$\\Theta(4n)$", "$\\Theta(n\\lg 4)$"],
      explanation: "$\\lg 4 = 2$ fordi $2^2 = 4$, så eksponenten er tallet 2 og uttrykket er $n^2$. Svaret $\\Theta(n^4)$ leser $\\lg 4$ som 4 og hopper over utregningen — det er samme type slurv som å regne feil $\\log_b a$ i masterteoremet.",
    },
    {
      question: "Er $\\lg^2 n = \\Theta(\\lg(n^2))$?",
      options: ["Nei — $\\lg^2 n$ betyr $(\\lg n)^2$, mens $\\lg(n^2) = 2\\lg n = \\Theta(\\lg n)$", "Ja — begge uttrykkene betyr logaritmen anvendt to ganger på det samme $n$", "Ja — eksponenten 2 kan flyttes fritt inn og ut av logaritmen uten at noe endres", "Nei — $\\lg(n^2)$ vokser raskest, siden kvadratet står på argumentet og ikke på svaret"],
      explanation: "Skrivemåten $\\lg^k n$ betyr $(\\lg n)^k$, ikke $\\lg(\\lg n)$ og ikke $\\lg(n^k)$. Kvadratet i $\\lg(n^2)$ kommer ut som konstantfaktoren 2 og forsvinner, mens kvadratet i $\\lg^2 n$ blir stående — forholdet $(\\lg n)^2/\\lg n = \\lg n$ vokser uten grense, så det er $\\lg^2 n$ som er størst.",
    },
    {
      question: "Oppgaven ber om både nedre og øvre grense for et uttrykk. Hva skal svaret inneholde?",
      options: ["Den strammeste $\\Omega$-påstanden og den strammeste $O$-påstanden, skrevet ved siden av hverandre", "Ett $\\Theta$-uttrykk, siden $\\Theta$ per definisjon inneholder både den nedre og den øvre grensen", "Den strammeste $O$-påstanden alene, siden den nedre grensen alltid følger av den øvre grensen", "To $\\Theta$-uttrykk, ett for beste tilfelle og ett for verste tilfelle av det samme uttrykket"],
      explanation: "Ber oppgaven om to grenser, er det fordi de ikke møtes — og da er to uttrykk ved siden av hverandre et fullstendig svar som gir full uttelling. Å presse fram ett $\\Theta$-uttrykk der det ikke finnes ett, er direkte galt. Beste og verste tilfelle er dessuten en helt annen akse enn nedre og øvre asymptotisk grense.",
    },
    {
      question: "Hva må stå i et definisjonssvar i sjanger D for å gi full uttelling?",
      options: ["Den strammeste $\\Omega$-påstanden og den strammeste $O$-påstanden, skrevet ved siden av hverandre i svaret", "Et konkret eksempel som viser symbolet i bruk, siden en definisjon best forklares ved eksempel", "En sammenligning med de fire andre symbolene, slik at forskjellene mellom dem kommer klart fram", "To $\\Theta$-uttrykk, ett for beste tilfelle og ett for verste tilfelle av nøyaktig det samme sammensatte uttrykket"],
      explanation: "Sjangeren spør etter den presise definisjonen, og de tre delene som avgjør uttellingen, er kvantoren foran $c$, konstantene $c$ og $n_0$, og ulikheten selv. Et eksempel er ikke en definisjon, og en sammenligning med de øvrige symbolene svarer på et annet spørsmål enn det som ble stilt.",
    },
    {
      question: "Hva er felle #4 i asymptotiske forenklingsoppgaver?",
      options: ["Å oppgi en løsere grense enn nødvendig når en strammere finnes — for eksempel $O(n^3)$ der $\\Theta(n^2)$ er sant", "Å oppgi en strammere grense enn det som er sant — for eksempel $\\Theta(n^2)$ der bare $O(n^3)$ holder", "Å bytte om kvantorene i definisjonen av $o$ og $\\omega$, slik at «for hver $c$» blir «det finnes en $c$» i svaret ditt", "Å glemme konstantleddet i en sum, slik at svaret mangler den delen som dominerer for små verdier av $n$"],
      explanation: "Felle #4 handler om å stoppe for tidlig: svaret er sant, men sier mindre enn det kunne. Rutinen som fjerner den, er å spørre om den samme funksjonen også er $\\Omega$ av det uttrykket du nettopp fant en $O$-grense for. Å oppgi en for stram grense er en annen og alvorligere feil — den er rett og slett usann.",
    },
    {
      question: "Forholdet $f(n)/g(n)$ går mot null når $n$ vokser. Hva følger av det?",
      options: ["$f = o(g)$, og dermed også $f = O(g)$ — den strenge grensen medfører den løse", "$f = O(g)$, men ikke $f = o(g)$ — et forhold som går mot null gir bare et tak", "$f = \\Theta(g)$, siden et forhold som stabiliserer seg gir en tett grense begge veier", "$f = \\omega(g)$, siden det er $g$ som vokser raskest når forholdet krymper mot null"],
      explanation: "Forholdstesten: går forholdet mot null, er $f$ forsvinnende liten mot $g$, altså $o(g)$ — og alt som er $o(g)$ er også $O(g)$. Den gratis følgeslutningen gir delpoeng når en oppgave spør om flere symboler for samme funksjonspar. $\\Theta$ krever at forholdet stabiliserer seg på et **positivt** tall, ikke på null.",
    },
    {
      question: "Hva er det strammeste svaret for $\\Omega(n\\lg n) + O(n^2) + \\Theta(n)$?",
      options: ["$\\Omega(n\\lg n)$ — $\\Omega$-leddet fjerner taket, og det er også det høyeste gulvet i summen", "$\\Theta(n^2)$ — $O(n^2)$-leddet er det raskest voksende og bestemmer derfor hele summen", "$\\Omega(n\\lg n)$ og $O(n^2)$ — de to løse leddene gir hver sin grense, oppgitt ved siden av hverandre", "$\\Theta(n\\lg n)$ — det midterste leddet i vekstordningen er alltid det som overlever forenklingen"],
      explanation: "Kontrollspørsmålet stilles først: finnes det et $\\Omega$- eller $\\omega$-ledd? Ja — og da faller enhver $O$-påstand bort, uansett hva de andre leddene er. Gulvene er $n\\lg n$, en konstant og $n$, og det høyeste av dem er $n\\lg n$. Å oppgi et tak i tillegg er derfor usant her, ikke bare unødvendig.",
    },
    {
      question: "Hva blir $\\dfrac{\\Theta(n^2)}{\\Theta(n^2)}$?",
      options: ["$\\Theta(1)$", "$\\Theta(n^2)$", "$0$", "$\\Theta(n)$"],
      explanation: "Begge ledd er låste til samme vekstklasse, så kvotienten er låst mellom to positive konstanter — det er nøyaktig $\\Theta(1)$. Svaret 0 forveksler «konstant» med «forsvinner»: to funksjoner i samme vekstklasse har et forhold som stabiliserer seg på et positivt tall, ikke på null.",
    },
  ],
  'tdt4120-1-4': [
    {
      question: "Hvilken form må en rekurrens ha for at masterteoremet skal kunne brukes?",
      options: ["$T(n) = aT(n/b) + f(n)$ med $a \\ge 1$ og $b > 1$, altså $a$ like store delproblemer av størrelse $n/b$", "$T(n) = aT(n-b) + f(n)$ med $a \\ge 1$ og $b \\ge 1$, altså at problemet krymper med et fast antall hver gang", "$T(n) = aT(n/b) + f(n)$ med vilkårlige $a$ og $b$, så lenge $f(n)$ er et polynom uten logaritmefaktorer", "$T(n) = T(n/b_1) + T(n/b_2) + f(n)$, altså to delproblemer som gjerne kan ha hver sin størrelse"],
      explanation: "Teoremet krever én felles $b$ — alle delproblemene må være like store — og kravene $a \\ge 1$, $b > 1$ er ufravikelige: er $b = 1$, krymper problemet aldri. Formen med subtraksjon, $T(n) = T(n-1)+n$, faller helt utenfor og må løses ved iterasjon eller substitusjon. Ulikt store deler, som i $T(n) = T(n/3)+T(2n/3)+n$, dekkes heller ikke.",
    },
    {
      question: "Hvilket tilfelle og hvilket svar gir masterteoremet for $T(n) = 2T(n/2) + n$?",
      options: ["Tilfelle 2 med $k = 0$, og svaret $\\Theta(n\\lg n)$", "Tilfelle 1, og svaret $\\Theta(n)$", "Tilfelle 3, og svaret $\\Theta(n)$", "Tilfelle 2 med $k = 1$, og svaret $\\Theta(n\\lg^2 n)$"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = n = \\Theta(n\\lg^0 n)$, altså tilfelle 2 med $k = 0$ — regelen $k \\to k+1$ gir én logaritme i svaret. Dette er `Merge-Sort`s rekurrens, og den viser hvorfor $k = 0$ må være tillatt: med et krav om $k > 0$ ville teoremet ikke dekket den i det hele tatt. Å svare $\\Theta(n)$ er å glemme logaritmefaktoren, som er den vanligste enkeltfeilen i sjangeren.",
    },
    {
      question: "Hvilket tilfelle og hvilket svar gir masterteoremet for $T(n) = 4T(n/2) + n$?",
      options: ["Tilfelle 1, og svaret $\\Theta(n^2)$", "Tilfelle 2 med $k = 0$, og svaret $\\Theta(n^2\\lg n)$", "Tilfelle 3, og svaret $\\Theta(n)$", "Tilfelle 1, og svaret $\\Theta(n^4)$"],
      explanation: "$\\log_2 4 = 2$, så sammenligningsfunksjonen er $n^2$, og $f(n) = n$ ligger en hel potens under: $n = O(n^{2-\\varepsilon})$ med $\\varepsilon = 1$. Rekursjonen dominerer, og løvnodene bestemmer. Å svare $\\Theta(n^4)$ er å forveksle $a$ med eksponenten — det er $\\log_b a$ som skal stå der, ikke $a$ selv.",
    },
    {
      question: "Hvilket svar gir masterteoremet for $T(n) = T(n/2) + 1$?",
      options: ["$\\Theta(\\lg n)$ — tilfelle 2 med $k = 0$, siden $n^{\\log_2 1} = n^0 = 1$ er bunnarbeidet", "$\\Theta(1)$ — tilfelle 2 med $k = 0$, siden både $f(n)$ og $n^{\\log_b a}$ er konstante", "$\\Theta(n)$ — tilfelle 3, siden arbeidet utenom rekursjonen dominerer helt", "$\\Theta(n\\lg n)$ — tilfelle 2 med $k = 1$, siden det er ett kall per nivå i treet"],
      explanation: "$a = 1$ gir $\\log_2 1 = 0$ og $n^0 = 1$, og $f(n) = 1$ er $\\Theta(1 \\cdot \\lg^0 n)$ — altså tilfelle 2 med $k = 0$, og svaret får én logaritme. Dette er binærsøkets rekurrens. Å svare $\\Theta(1)$ er å hoppe over regelen $k \\to k+1$: arbeidet er riktignok konstant per nivå, men det er $\\lg n$ nivåer.",
    },
    {
      question: "Hvilket tilfelle og hvilket svar gir masterteoremet for $T(n) = 2T(n/2) + n^2$?",
      options: ["Tilfelle 3, og svaret $\\Theta(n^2)$ — regularitetsbetingelsen holder med $c = 1/2$", "Tilfelle 2 med $k = 1$, og svaret $\\Theta(n^2\\lg n)$ — arbeidet er like stort på hvert nivå", "Tilfelle 1, og svaret $\\Theta(n)$ — rekursjonen dominerer siden $a = 2$ og $b = 2$", "Tilfelle 3, og svaret $\\Theta(n^2\\lg n)$ — én logaritme legges til også i dette tilfellet"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = n^2 = \\Omega(n^{1+\\varepsilon})$ med $\\varepsilon = 1$, så arbeidet på toppen dominerer. Regularitetskravet sjekkes: $2(n/2)^2 = n^2/2$, altså $c = 1/2 < 1$. I tilfelle 3 er svaret $\\Theta(f(n))$ uten noen ekstra logaritme — logaritmen legges bare til i tilfelle 2.",
    },
    {
      question: "Hvilket svar gir masterteoremet for $T(n) = 2T(n/2) + n\\lg n$?",
      options: ["$\\Theta(n\\lg^2 n)$ — tilfelle 2 med $k = 1$", "$\\Theta(n\\lg n)$ — tilfelle 3, siden $f(n)$ dominerer", "$\\Theta(n\\lg n)$ — tilfelle 2 med $k = 0$", "$\\Theta(n^2\\lg n)$ — tilfelle 1, siden $a = b = 2$"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = n\\lg n = \\Theta(n \\lg^1 n)$, altså $k = 1$ — og regelen $k \\to k+1$ gir $\\lg^2 n$ i svaret. Tilfelle 3 er utelukket fordi gapet mellom $n\\lg n$ og $n$ bare er en logaritme, ikke en hel potens av $n$, så det finnes ingen $\\varepsilon > 0$. Å svare $\\Theta(n\\lg n)$ er å beholde logaritmen du hadde i stedet for å legge til én.",
    },
    {
      question: "Hvilket krav stiller masterteoremet til potensen $k$ i tilfelle 2?",
      options: ["$k$ må være ikke-negativ, altså $k \\ge 0$ — og $k = 0$ er i praksis det aller vanligste tilfellet", "$k$ må være strengt positiv, altså $k > 0$ — en logaritmefaktor må faktisk være til stede", "$k$ må være et positivt heltall, siden $\\lg^k n$ ellers ikke er definert for reelle eksponenter", "$k$ kan være et hvilket som helst reelt tall, også negativt, så lenge $f(n)$ selv er positiv"],
      explanation: "$\\lg^0 n = 1$, så $k = 0$ betyr at $f(n)$ er $\\Theta(n^{\\log_b a})$ glatt — og det er nettopp tilfellet for `Merge-Sort` og for binærsøk. Et krav om $k > 0$ ville stengt begge ute av teoremet. Negativ $k$, altså $f(n)$ mindre enn $n^{\\log_b a}$ med en logaritmefaktor, faller derimot utenfor den varianten faget bruker.",
    },
    {
      question: "Hvilket krav stiller masterteoremet til konstanten $\\varepsilon$ i tilfelle 1 og 3?",
      options: ["$\\varepsilon$ må være strengt positiv — gapet må være en hel potens av $n$, ikke bare en logaritmefaktor", "$\\varepsilon$ må være ikke-negativ, slik at $\\varepsilon = 0$ er tillatt og gir grensetilfellet mellom 1 og 3", "$\\varepsilon$ må være mindre enn 1, ellers blir gapet så stort at rekursjonen mister betydning helt", "$\\varepsilon$ må være et heltall, siden eksponenten $\\log_b a \\pm \\varepsilon$ ellers ikke lar seg regne ut"],
      explanation: "Med $\\varepsilon = 0$ ville betingelsene i tilfelle 1 og 3 blitt trivielt oppfylt av alt, og teoremet ville sagt selvmotsigende ting. Kravet om et gap på en hel potens av $n$ er nettopp grunnen til at tilfelle 2 må finnes: det fanger opp mellomrommet der avstanden bare er logaritmisk. Noen øvre grense for $\\varepsilon$ finnes ikke.",
    },
    {
      question: "Hva er regularitetsbetingelsen, og hvor gjelder den?",
      options: ["$af(n/b) \\le c\\,f(n)$ for en konstant $c < 1$ og alle store nok $n$ — et tilleggskrav i tilfelle 3", "$af(n/b) \\le c\\,f(n)$ for en konstant $c < 1$ og alle store nok $n$ — et tilleggskrav i tilfelle 1", "$f(n) \\le c\\,n^{\\log_b a}$ for en konstant $c < 1$ — et krav som må sjekkes i alle de tre tilfellene", "$f(n/b) \\ge c\\,f(n)$ for en konstant $c > 1$ — et krav som sikrer at arbeidet vokser nedover i treet"],
      explanation: "Betingelsen sier at arbeidet på ett nivå er en fast brøkdel mindre enn arbeidet på nivået over, slik at summen nedover faktisk krymper — og det er nøyaktig det tilfelle 3 hviler på. Tilfelle 1 og 2 har ingen slik ekstra betingelse. For $T(n) = 2T(n/2)+n^2$ er $2(n/2)^2 = n^2/2$, altså $c = 1/2$, og kravet holder.",
    },
    {
      question: "Hvilken av disse rekurrensene kan masterteoremet **ikke** brukes på?",
      options: ["$T(n) = T(n-1) + n$ — størrelsen krymper ved subtraksjon", "$T(n) = 3T(n/4) + n$", "$T(n) = 8T(n/2) + n^2$ — åtte delproblemer av halv størrelse", "$T(n) = T(n/3) + \\lg n$ — ett delproblem av tredjedels størrelse"],
      explanation: "Størrelsen krymper ved subtraksjon i stedet for divisjon, og teoremet krever formen $n/b$ med $b > 1$. Rekurrensen løses i stedet ved iterasjon og gir $\\Theta(n^2)$. De tre andre har alle formen $aT(n/b)+f(n)$ og er innenfor bruksområdet.",
    },
    {
      question: "Hvorfor gjelder ikke masterteoremet for $T(n) = 2T(n/2) + n/\\lg n$?",
      options: ["Fordi $f(n)$ havner i gapet mellom tilfellene: den er mindre enn $n$ med en logaritmefaktor, altså $k = -1$", "Fordi $f(n)$ ikke er en polynomfunksjon, og teoremet krever at $f(n)$ er et polynom i $n$ av positiv grad", "Fordi $f(n)$ vokser langsommere enn $\\lg n$, og teoremet forutsetter minst lineært arbeid utenom rekursjonen", "Fordi $a = b = 2$ gjør at $n^{\\log_b a} = n$, og en rekurrens der $\\log_b a$ er nøyaktig 1 alltid faller utenfor"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = n/\\lg n$ ligger under $n$ — men bare med en logaritmefaktor, ikke med en hel potens. Da finnes ingen $\\varepsilon > 0$ for tilfelle 1, og tilfelle 2 krever $k \\ge 0$, mens dette svarer til $k = -1$. Teoremet dekker mange ikke-polynomiske $f(n)$, for eksempel $n\\lg n$, så formen alene er ikke problemet.",
    },
    {
      question: "Hvor mange nivåer har rekursjonstreet til $T(n) = aT(n/b) + f(n)$?",
      options: ["Om lag $\\log_b n$ — problemet deles på $b$ for hvert nivå til det når grunntilfellet", "Om lag $\\log_a n$ — antall delproblemer per kall avgjør hvor dypt treet blir", "Om lag $n/b$ — hvert nivå fjerner $b$ elementer fra den opprinnelige inputen", "Om lag $a^{\\log_b n}$ — det er nettopp antall løvnoder i treet, og de ligger nederst"],
      explanation: "Størrelsen går $n, n/b, n/b^2, \\ldots$, og den når 1 etter $\\log_b n$ delinger — det er $b$, ikke $a$, som styrer dybden. $a$ styrer bredden: antall løvnoder er $a^{\\log_b n} = n^{\\log_b a}$, som er noe helt annet enn antall nivåer.",
    },
    {
      question: "Hva representerer uttrykket $n^{\\log_b a}$ i masterteoremet?",
      options: ["Antall løvnoder i rekursjonstreet — altså arbeidet helt i bunnen, der rekursjonen stopper", "Arbeidet utenom rekursjonen, altså nøyaktig det samme som $f(n)$ skrevet på en annen måte", "Antall nivåer i rekursjonstreet, som er den faktoren logaritmen i svaret kommer fra", "Kjøretiden til hele algoritmen, uansett hvilket av de tre tilfellene som gjelder"],
      explanation: "Treet har $\\log_b n$ nivåer og $a$ barn per node, så bunnen har $a^{\\log_b n} = n^{\\log_b a}$ løvnoder. Hele teoremet består i å sammenligne dette bunnarbeidet med toppearbeidet $f(n)$. At $n^{\\log_b a}$ **er** svaret, gjelder bare i tilfelle 1 — i tilfelle 3 er svaret $\\Theta(f(n))$.",
    },
    {
      question: "Hvilket svar gir masterteoremet for $T(n) = 3T(n/9) + \\sqrt{n}$?",
      options: ["$\\Theta(\\sqrt{n}\\lg n)$ — tilfelle 2 med $k = 0$, siden $\\log_9 3 = 1/2$", "$\\Theta(\\sqrt{n})$ — tilfelle 3, siden $f(n) = \\sqrt{n}$ dominerer bunnarbeidet", "$\\Theta(n)$ — tilfelle 1, siden tre delproblemer av størrelse $n/9$ til sammen gir $n/3$", "$\\Theta(n^{1/3})$ — tilfelle 1, siden $\\log_9 3$ må regnes ut som $3/9$"],
      explanation: "$\\log_9 3 = 1/2$ fordi $9^{1/2} = 3$, så $n^{\\log_b a} = \\sqrt{n}$ — nøyaktig det samme som $f(n)$. Da er $k = 0$, og svaret får én logaritme. Å regne $\\log_9 3$ som brøken $3/9$ er en av de tre formene av felle #5: logaritmen er ikke en divisjon.",
    },
    {
      question: "Hvilket svar gir masterteoremet for $T(n) = 9T(n/3) + n$?",
      options: ["$\\Theta(n^2)$ — tilfelle 1, siden $\\log_3 9 = 2$ og $f(n) = n$ ligger en hel potens under", "$\\Theta(n^2\\lg n)$ — tilfelle 2 med $k = 0$, siden $f(n)$ og bunnarbeidet er like store", "$\\Theta(n\\lg n)$ — tilfelle 2 med $k = 0$, siden $\\log_3 9$ og $f(n)$ begge svarer til $n$", "$\\Theta(n^9)$ — tilfelle 1, siden antallet delproblemer havner rett i eksponenten"],
      explanation: "$\\log_3 9 = 2$, så bunnarbeidet er $n^2$, mens $f(n) = n = O(n^{2-\\varepsilon})$ med $\\varepsilon = 1$. Rekursjonen dominerer, og svaret er bunnarbeidet uten noen logaritme — logaritmen dukker bare opp når de to sidene er like store. Å sette $a$ selv i eksponenten gir $n^9$ og er ren regnefeil.",
    },
    {
      question: "Hva er svaret i tilfelle 2 når $f(n) = \\Theta(n^{\\log_b a}\\lg^k n)$?",
      options: ["$\\Theta(n^{\\log_b a}\\lg^{k+1} n)$ — du legger til én logaritme til", "$\\Theta(n^{\\log_b a}\\lg^{k} n)$ — du beholder logaritmene du hadde", "$\\Theta(n^{\\log_b a})$ — logaritmefaktorene forsvinner i svaret", "$\\Theta(f(n))$ — arbeidet utenom rekursjonen dominerer her også"],
      explanation: "Den ekstra logaritmen kommer fra antall nivåer: like mye arbeid på hvert av $\\log_b n$ nivåer gir én logaritme mer enn $f(n)$ selv. Regelen er alltid $k \\to k+1$. Å svare $\\Theta(f(n))$ er tilfelle 3-svaret, og det gjelder bare når $f(n)$ ligger en hel potens over bunnarbeidet.",
    },
  ],
  'tdt4120-1-5': [
    {
      question: "Hvilken metode bruker du når oppgaven ber om et **eksakt** uttrykk for $T(n)$?",
      options: ["Iterasjonsmetoden — sett inn i seg selv, finn mønsteret og summer leddene", "Masterteoremet — les av $a$ og $b$, og velg riktig av de tre tilfellene", "Substitusjonsmetoden — gjett svaret, og bevis det ved induksjon over $n$", "Rekursjonstremetoden — tegn treet, og tell antall nivåer det har på dybden"],
      explanation: "Iterasjon er den eneste av metodene som produserer et lukket uttrykk med grunntilfellet innregnet. Masterteoremet kan i prinsippet ikke gi et eksakt svar — det er bygd for å gi vekstklassen og ingenting mer.",
    },
    {
      question: "Hva er den eksakte løsningen på $T(n) = T(n-1) + n$ med $T(0) = 0$?",
      options: ["$T(n) = \\dfrac{n(n+1)}{2}$", "$T(n) = \\dfrac{n(n-1)}{2}$", "$T(n) = \\Theta(n^2)$", "$T(n) = 2^n - 1$"],
      explanation: "Iterasjonen teleskoperer til $1 + 2 + \\dots + n$, som er den aritmetiske summen; kontroll: $T(3) = 6$ både i rekurrensen og i formelen. Svaret $\\Theta(n^2)$ er sant, men det er en asymptotisk grense og ikke det eksakte uttrykket oppgaven ber om.",
    },
    {
      question: "Hva er den eksakte løsningen på $T(n) = 2T(n-1) + 1$ med $T(0) = 0$?",
      options: ["$T(n) = 2^n - 1$", "$T(n) = 2^{n-1}$", "$T(n) = 2n - 1$", "$T(n) = n\\lg n$"],
      explanation: "Koeffisienten foran $T$ dobles for hvert hakk, og restleddene blir $2^{n-1} + \\dots + 2 + 1 = 2^n - 1$; kontroll: $T(3) = 7$. Alternativet $2n - 1$ ville vært svaret hvis faktoren foran $T$ var 1 og det ble lagt til 2 i hvert steg.",
    },
    {
      question: "Hvorfor er $T(n) = T(n-1) + n$ ikke en oppgave for masterteoremet?",
      options: ["Fordi formen ikke er $aT(n/b) + f(n)$ — argumentet krymper ved subtraksjon, ikke ved divisjon", "Fordi $f(n) = n$ vokser for raskt til at noen av de tre tilfellene kan gjelde her", "Fordi grunntilfellet $T(0) = 0$ gjør at teoremets antagelser ikke er oppfylt", "Fordi teoremet krever at antallet delkall $a$ er minst 2 i den gitte rekurrensen"],
      explanation: "Teoremet forutsetter $T(n) = aT(n/b) + f(n)$ med $b > 1$, og her finnes ingen $b$. Kravet på $a$ er $a \\ge 1$, ikke $a \\ge 2$ — binærsøkets $T(n) = T(n/2) + \\Theta(1)$ har $a = 1$ og faller innenfor.",
    },
    {
      question: "Hva består substitusjonsmetoden av?",
      options: ["Å gjette formen på svaret og bevise den ved induksjon over $n$", "Å sette rekurrensen inn i seg selv til mønsteret er tydelig, og så summere", "Å bytte ut $n$ med $2^m$ slik at rekurrensen blir lineær og lettere å løse", "Å slå opp rekurrensen i masterteoremets tabell og lese av riktig tilfelle"],
      explanation: "Gjetningen alene er ikke beviset — uttellingen ligger i induksjonssteget der hypotesen settes inn og restleddet håndteres. Alternativet med gjentatt innsetting beskriver iterasjonsmetoden, som finner svaret i stedet for å verifisere det.",
    },
    {
      question: "En kandidat antar $T(n/2) \\le c(n/2)$ og ender opp med $T(n) \\le cn + n$. Hva er galt?",
      options: ["Induksjonssteget må ende på nøyaktig $cn$ — restleddet viser at konstanten vokser per nivå", "Ingenting — $cn + n$ er $O(n)$, og dermed er påstanden bevist for alle $n$", "Hypotesen skulle vært satt opp for $n-1$ og ikke for $n/2$ i denne rekurrensen", "Grunntilfellet mangler, men selve steget er korrekt ført og gir riktig konklusjon"],
      explanation: "Kommer du ut med $cn + n$ når du antok $cn$, har konstanten vokst med 1 per nivå, og etter $\\lg n$ nivåer er den ikke lenger konstant. At påstanden dessuten er gal, ser du av masterteoremet: $T(n) = 2T(n/2)+n$ er $\\Theta(n\\lg n)$, ikke $O(n)$.",
    },
    {
      question: "Hvor mange nivåer har rekursjonstreet til $T(n) = 5T(n/3) + n$?",
      options: ["$\\Theta(\\log_3 n)$ — dybden avhenger bare av hvor mye argumentet krymper", "$\\Theta(\\log_5 n)$ — dybden avhenger av hvor mange rekursive kall som gjøres", "$\\Theta(n^{\\log_3 5})$ — det er antall noder i treet, altså også dybden", "$\\Theta(n)$ — hvert nivå fjerner ett element fra inputen i denne rekurrensen"],
      explanation: "Dybden er antall ganger $n$ kan deles på $b = 3$ før du er nede på en konstant. Antall delkall $a = 5$ styrer hvor **bredt** treet blir — $n^{\\log_3 5}$ løvnoder — men ikke hvor dypt.",
    },
    {
      question: "Hva er kjøretiden til binærsøk, og hvilken forutsetning krever det?",
      options: ["$\\Theta(\\lg n)$ i verste tilfelle, og arrayet må være sortert", "$\\Theta(\\lg n)$ i verste tilfelle, og alle elementene må være forskjellige", "$\\Theta(n)$ i verste tilfelle, siden hele arrayet kan måtte gjennomsøkes", "$\\Theta(1)$ forventet, siden midten ofte treffes"],
      explanation: "Hver runde halverer intervallet, så $T(n) = T(n/2) + \\Theta(1) = \\Theta(\\lg n)$, og verste antall runder er $\\lfloor\\lg n\\rfloor + 1$. Duplikater er helt uproblematisk for et vanlig binærsøk — det er sorteringen som er forutsetningen.",
    },
    {
      question: "Hva skiller splitt og hersk fra dynamisk programmering?",
      options: ["I splitt og hersk overlapper ikke delproblemene — hvert løses nøyaktig én gang", "I splitt og hersk er delproblemene alltid nøyaktig like store, i motsetning til i DP", "I splitt og hersk brukes rekursjon, mens dynamisk programmering alltid er iterativ", "I splitt og hersk er kjøretiden alltid $\\Theta(n\\lg n)$, mens den varierer i DP"],
      explanation: "Fordi delproblemene er nye hver gang, er det ingenting å spare på å lagre svar — det er nettopp overlappet som gjør memoisering lønnsomt. Delproblemer av ulik størrelse forekommer i begge teknikkene, og DP kan skrives både rekursivt og iterativt.",
    },
    {
      question: "Hvorfor gir $T(n) = T(n/2) + \\Theta(n)$ kjøretiden $\\Theta(n)$ og ikke $\\Theta(n\\lg n)$?",
      options: ["Fordi arbeidet halveres nedover, og summen $n + n/2 + n/4 + \\dots$ er under $2n$", "Fordi det bare gjøres ett rekursivt kall, og ett kall koster alltid konstant tid", "Fordi rekursjonstreet bare har ett nivå når antall delkall $a$ er lik 1", "Fordi $\\Theta(n)$ dominerer $\\Theta(\\lg n)$, og bare det største leddet teller"],
      explanation: "Den geometriske rekken med kvotient under 1 konvergerer, så totalen bindes av en konstant ganger toppnivået. Treet har fortsatt $\\Theta(\\lg n)$ nivåer — det er arbeidsmengden per nivå som krymper, ikke antall nivåer.",
    },
    {
      question: "Hva er $1 + 2 + 4 + \\dots + 2^{n-1}$?",
      options: ["$2^n - 1$", "$2^{n+1} - 1$", "$2^{n-1}$", "$\\dfrac{n(n+1)}{2}$"],
      explanation: "Den geometriske summen med kvotient 2 er alltid én mindre enn den neste potensen; kontroll for $n = 3$: $1+2+4 = 7 = 2^3 - 1$. Alternativet $n(n+1)/2$ er den **aritmetiske** summen, som hører til rekurrenser der det legges til $n$ og ikke $2^n$.",
    },
    {
      question: "En rutine deler inputen i to, går inn i begge halvdelene og bruker $\\Theta(n^2)$ på å kombinere. Hva er kjøretiden?",
      options: ["$\\Theta(n^2)$, ved masterteoremets tilfelle 3 — kombinasjonen dominerer", "$\\Theta(n^2\\lg n)$, ved masterteoremets tilfelle 2 med $k$ lik 1 i uttrykket", "$\\Theta(n\\lg n)$, ved masterteoremets tilfelle 2 med $k$ lik 0 i uttrykket", "$\\Theta(n^3)$, siden kombinasjonsarbeidet gjentas på hvert av nivåene i treet"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = \\Theta(n^2)$ vokser en hel potens raskere — tilfelle 3, med regularitetsbetingelsen $2(n/2)^2 = n^2/2 \\le c\\,n^2$ oppfylt for $c = 1/2$. I tilfelle 3 er svaret $\\Theta(f(n))$, uten noen logaritmefaktor.",
    },
    {
      question: "Hva er induksjonshypotesen i substitusjonsmetoden?",
      options: ["Antagelsen om at påstanden holder for alle argumenter mindre enn $n$", "Antagelsen om at rekurrensen har et grunntilfelle med konstant verdi", "Gjetningen på hvilken vekstklasse svaret ligger i, før beviset føres", "Antagelsen om at konstanten $c$ kan velges vilkårlig stor i sluttsteget"],
      explanation: "Hypotesen brukes til å erstatte det ukjente $T$-uttrykket på høyresiden med noe kjent — det er hele mekanikken i steget. Gjetningen på vekstklassen kommer først og er en annen ting: den sier hva du skal bevise, ikke hva du får anta.",
    },
    {
      question: "Hva er den eksakte løsningen på $T(n) = T(n-1) + 3$ med $T(0) = 5$?",
      options: ["$T(n) = 3n + 5$", "$T(n) = 3n$", "$T(n) = 5n + 3$", "$T(n) = 3^n + 5$"],
      explanation: "Det legges til 3 nøyaktig $n$ ganger før grunntilfellet nås, og grunntilfellets verdi blir stående som konstantledd. Alternativet $3n$ er svaret man får hvis man glemmer at $T(0)$ ikke er null — og ved eksakte svar er grunntilfellet en del av regnestykket.",
    },
    {
      question: "Hvilken av rekurrensene under har rekursjonstre med dybde $\\Theta(n)$?",
      options: ["$T(n) = T(n-1) + \\lg n$", "$T(n) = 2T(n/2) + n$", "$T(n) = 9T(n/3) + n^2$", "$T(n) = T(n/2) + \\Theta(1)$"],
      explanation: "Krymper argumentet med en konstant i hvert steg, trengs $\\Theta(n)$ nivåer for å komme ned til grunntilfellet. De tre andre halverer eller tredeler argumentet, og får dybde $\\Theta(\\log_b n)$ uansett hvor mange delkall de gjør.",
    },
    {
      question: "Hva må stå i svaret på en sjanger B-oppgave, i tillegg til selve løsningen?",
      options: ["Navnet på metoden du brukte — og for masterteoremet også hvilket tilfelle", "En full utledning av metoden du valgte, slik at framgangsmåten kan følges", "En begrunnelse for hvorfor de to andre metodene ikke kunne brukes her", "Grunntilfellets verdi, uansett om oppgaven ber om et eksakt svar eller ikke"],
      explanation: "Sjangeren heter «rekurrensløsning med navngitt metode» nettopp fordi metodenavnet er en del av det som gir uttelling, og det er ett ord. En full utledning er sjelden etterspurt — lange svar teller ikke positivt, og tiden er knapp.",
    },
  ],
  'tdt4120-1-6': [
    {
      question: "Løs $T(n) = 8T(n/2) + n^3$ med masterteoremet.",
      options: ["$\\Theta(n^3\\lg n)$, tilfelle 2 med $k = 0$", "$\\Theta(n^3)$, tilfelle 2 med $k = 0$", "$\\Theta(n^3)$, tilfelle 3 med regularitet oppfylt", "$\\Theta(n^4)$, tilfelle 1 med rekursjonen dominerende"],
      explanation: "$n^{\\log_2 8} = n^3$ er nøyaktig like stor som $f(n)$, så vi er i tilfelle 2 med $k = 0$, og svaret får $\\lg^{k+1} n = \\lg n$. Alternativet uten logaritme er felle #5: du legger til én logaritme i tilfelle 2, du beholder ikke bare den $f$ hadde.",
    },
    {
      question: "Løs $T(n) = 2T(n/2) + n\\lg n$ med masterteoremet.",
      options: ["$\\Theta(n\\lg^2 n)$, tilfelle 2 med $k = 1$", "$\\Theta(n\\lg n)$, tilfelle 2 med $k = 1$", "$\\Theta(n\\lg n)$, tilfelle 3 med regularitet oppfylt", "$\\Theta(n^2\\lg n)$, tilfelle 1 med rekursjonen dominerende"],
      explanation: "$n^{\\log_2 2} = n$, og $f(n) = \\Theta(n\\lg^1 n)$, altså tilfelle 2 med $k = 1$ og svar $\\lg^{k+1} n = \\lg^2 n$. Alternativet $\\Theta(n\\lg n)$ er `Merge-Sort`s svar, og det gjelder en rekurrens som er billigere enn denne.",
    },
    {
      question: "Hvorfor faller $T(n) = 2T(n/2) + n/\\lg n$ utenfor pensumvarianten av masterteoremet?",
      options: ["Fordi $f(n) = n\\lg^{-1} n$ gir $k = -1$, og tilfelle 2 krever $k \\ge 0$", "Fordi $f(n)$ vokser raskere enn $n^{\\log_b a}$ uten at regularitet holder", "Fordi $a = 2$ og $b = 2$ er like store, og teoremet krever at de er ulike", "Fordi $n/\\lg n$ ikke er en polynomisk funksjon og derfor ikke kan brukes"],
      explanation: "Skrevet som $n^{\\log_b a}\\lg^k n$ har $f$ eksponenten $k = -1$, og pensumvarianten tillater bare ikke-negativ $k$. Rekurrensen faller heller ikke i tilfelle 1 eller 3, siden gapet bare er en logaritmefaktor og ikke en hel potens av $n$.",
    },
    {
      question: "Løs $T(n) = 9T(n/3) + n$ med masterteoremet.",
      options: ["$\\Theta(n^2)$, tilfelle 1", "$\\Theta(n^2\\lg n)$, tilfelle 2", "$\\Theta(n\\lg n)$, tilfelle 2", "$\\Theta(n)$, tilfelle 3"],
      explanation: "$n^{\\log_3 9} = n^2$, og $f(n) = n$ vokser en hel potens langsommere, så rekursjonen dominerer og svaret er $n^{\\log_b a}$ alene. Tilfelle 1 gir aldri en logaritmefaktor — den hører til tilfelle 2, der $f$ og $n^{\\log_b a}$ er like store.",
    },
    {
      question: "Hvilken metode bruker du når oppgaven sier «vis at $T(n) = O(n\\lg n)$»?",
      options: ["Substitusjonsmetoden — gjett formen, og før induksjonssteget", "Iterasjonsmetoden — sett inn i seg selv, og summer leddene", "Masterteoremet — les av $a$ og $b$, og velg riktig tilfelle", "Rekursjonstremetoden — tegn treet, og summer arbeidet per nivå"],
      explanation: "«Vis at» ber om et bevis for en gitt grense, og det er nettopp det substitusjon leverer. Masterteoremet ville gitt riktig svar, men det er ikke et bevis for påstanden slik den er formulert — og oppgaven har allerede oppgitt svaret.",
    },
    {
      question: "Hva er det eksakte svaret på $T(n) = 3T(n-1)$ med $T(0) = 2$?",
      options: ["$T(n) = 2\\cdot 3^n$", "$T(n) = 3^n$", "$T(n) = 3^n + 2$", "$T(n) = 2n\\cdot 3$"],
      explanation: "Faktoren 3 påføres $n$ ganger på grunntilfellet, som er 2; kontroll: $T(2) = 18$. Alternativet $3^n$ er svaret man får hvis man glemmer at $T(0) \\ne 1$ — ved eksakte svar er grunntilfellet en faktor i uttrykket.",
    },
    {
      question: "Løs $T(n) = 2T(n/4) + 1$ med masterteoremet.",
      options: ["$\\Theta(\\sqrt{n})$, tilfelle 1", "$\\Theta(\\lg n)$, tilfelle 2", "$\\Theta(n)$, tilfelle 3 med regularitetsbetingelsen oppfylt", "$\\Theta(\\sqrt{n}\\lg n)$, tilfelle 2 med $k = 0$"],
      explanation: "$n^{\\log_4 2} = n^{1/2} = \\sqrt{n}$, og $f(n) = \\Theta(1)$ vokser en hel potens langsommere — tilfelle 1, uten logaritmefaktor. Legg merke til at $\\log_b a$ ikke må være et helt tall.",
    },
    {
      question: "I tilfelle 3 av masterteoremet — hva er svaret?",
      options: ["$\\Theta(f(n))$, uten noen ekstra logaritmefaktor", "$\\Theta(f(n)\\lg n)$, siden hvert nivå bidrar med en logaritme", "$\\Theta(n^{\\log_b a})$, som i tilfelle 1", "$\\Theta(n^{\\log_b a}\\lg n)$, som i tilfelle 2 med $k$ lik null"],
      explanation: "I tilfelle 3 dominerer arbeidet på toppen så kraftig at rekursjonen er asymptotisk uvesentlig, og $f$ alene er svaret. Å legge til en logaritme er en refleks fra tilfelle 2 og gjør svaret galt.",
    },
    {
      question: "Hva må sjekkes i tillegg før du kan bruke tilfelle 3?",
      options: ["Regularitetsbetingelsen $af(n/b) \\le c\\,f(n)$ for en konstant $c < 1$", "At $f(n)$ er en polynomisk funksjon av $n$ uten logaritmefaktorer i seg", "At grunntilfellet er oppgitt eksplisitt i rekurrensen som skal løses", "At $a$ og $b$ begge er hele tall, slik at $\\log_b a$ blir et helt tall"],
      explanation: "Betingelsen sikrer at arbeidet på toppen ikke blir tatt igjen av nivåene under, og den skrives ut på én linje i besvarelsen. $f$ kan gjerne inneholde logaritmer — $T(n) = 3T(n/4) + n\\lg n$ er nettopp et tilfelle 3-eksempel.",
    },
    {
      question: "Hvilken metode passer for $T(n) = T(n-1) + \\lg n$?",
      options: ["Iterasjon — formen er ikke $aT(n/b) + f(n)$, så masterteoremet gjelder ikke", "Masterteoremet med $a = 1$ og $b = 1$, altså tilfelle 2 med $k$ lik null", "Substitusjon, siden en subtraksjonsrekurrens ikke lar seg iterere", "Rekursjonstremetoden, siden treet får konstant dybde i denne rekurrensen"],
      explanation: "Argumentet krymper ved subtraksjon, ikke ved divisjon, så det finnes ingen $b > 1$ og teoremet er ikke anvendelig. Substitusjon ville også fungert hvis oppgaven oppga en grense å verifisere, men iterasjon er metoden når du selv skal finne svaret.",
    },
    {
      question: "Hva er det eksakte svaret på $T(n) = T(n-1) + 2^{n-1}$ med $T(0) = 0$?",
      options: ["$T(n) = 2^n - 1$", "$T(n) = 2^{n-1}$", "$T(n) = \\Theta(2^n)$", "$T(n) = n\\cdot 2^{n-1}$"],
      explanation: "Leddene teleskoperer til $2^0 + 2^1 + \\dots + 2^{n-1}$, som er den geometriske summen $2^n - 1$; kontroll: $T(4) = 15$. Svaret $\\Theta(2^n)$ er sant, men det er en asymptotisk grense og ikke det eksakte uttrykket.",
    },
    {
      question: "Løs $T(n) = 7T(n/2) + n^2$ med masterteoremet.",
      options: ["$\\Theta(n^{\\lg 7})$, tilfelle 1", "$\\Theta(n^2\\lg n)$, tilfelle 2 med $k = 0$", "$\\Theta(n^2)$, tilfelle 3 med regularitet oppfylt", "$\\Theta(n^3)$, tilfelle 1"],
      explanation: "$\\log_2 7 \\approx 2{,}807$, og $f(n) = n^2$ vokser en hel potens langsommere — tilfelle 1, med svar $n^{\\log_b a}$. Alternativet med logaritme forutsetter at $f$ og $n^{\\log_b a}$ er like store, men her skiller de seg med nesten en hel potens.",
    },
    {
      question: "Hvor mange nivåer har rekursjonstreet til $T(n) = 4T(n/2) + n$?",
      options: ["$\\Theta(\\lg n)$ — dybden bestemmes av $b$, ikke av $a$", "$\\Theta(n^2)$ — dybden er lik antall løvnoder i rekursjonstreet", "$\\Theta(\\log_4 n)$ — dybden bestemmes av antall rekursive kall $a$", "$\\Theta(n)$ — ett element fjernes per nivå"],
      explanation: "$n$ halveres for hvert nivå, så dybden er antall halveringer, uansett hvor mange kall hvert nivå gjør. Antall delkall $a = 4$ styrer bredden — treet får $n^{\\log_2 4} = n^2$ løvnoder — men ikke dybden.",
    },
    {
      question: "En kandidat antar $T(n/2) \\le c(n/2)^2$ og ender på $T(n) \\le cn^2 + n$. Hva bør gjøres?",
      options: ["Styrke hypotesen til $c\\,n^2 - d\\,n$, slik at restleddet kan absorberes", "Ingenting — $cn^2 + n$ er $O(n^2)$, og påstanden er dermed vist", "Bytte metode til masterteoremet, siden substitusjon ikke virker her", "Velge en større konstant $c$, slik at ulikheten holder for alle $n$"],
      explanation: "Induksjonen krever at steget ender på nøyaktig den antatte formen; et lavere ledd som trekkes fra, gir deg reserven til å svelge restleddet. En større $c$ hjelper ikke — problemet er at konstanten vokser med ett $n$ per nivå, uansett hvor stor den startet.",
    },
    {
      question: "Hva styrer om du skal svare eksakt eller asymptotisk?",
      options: ["Ordet «eksakt» eller «lukket uttrykk» i oppgaveteksten", "Hvilken form rekurrensen har, siden subtraksjonsrekurrenser alltid løses eksakt", "Hvilken metode du valgte, siden iterasjon bare kan gi eksakte svar", "Hvor mange poeng oppgaven gir, siden eksakte svar teller mer enn grenser"],
      explanation: "Svarformen bestemmes av spørsmålet, ikke av rekurrensen — og et sant svar på feil form er ikke et svar. Iterasjon kan fint gi en asymptotisk grense: du forenkler bare det eksakte uttrykket til slutt.",
    },
    {
      question: "Løs $T(n) = 4T(n/2) + n^2$ med masterteoremet.",
      options: ["$\\Theta(n^2\\lg n)$, tilfelle 2 med $k = 0$", "$\\Theta(n^2)$, tilfelle 3 med regularitet oppfylt", "$\\Theta(n^2)$, tilfelle 1 med rekursjonen dominerende", "$\\Theta(n^3)$, tilfelle 3 med regularitet oppfylt"],
      explanation: "$n^{\\log_2 4} = n^2$ er nøyaktig like stor som $f(n)$, altså tilfelle 2 med $k = 0$ og svar $n^2\\lg n$. Sammenlign med $T(n) = 4T(n/2) + n$, der $f$ er mindre og svaret blir $\\Theta(n^2)$ uten logaritme — hele forskjellen ligger i om de to uttrykkene er like store.",
    },
    {
      question: "Hva skal alltid stå i et svar på en masterteorem-oppgave, i tillegg til uttrykket?",
      options: ["Metodens navn og hvilket av de tre tilfellene som gjelder", "Utregningen av $n^{\\log_b a}$ i full detalj, med mellomregning", "En begrunnelse for hvorfor iterasjon ikke ville fungert like godt her", "Rekursjonstreets dybde og antall løvnoder på det nederste nivået"],
      explanation: "Sjangeren heter «rekurrensløsning med navngitt metode», og tilfellet er to ord som gir uttelling. Full mellomregning er sjelden etterspurt — lange svar teller ikke positivt, og tjue oppgaver deler på fire timer.",
    },
    {
      question: "Hvilken av rekurrensene under gir $\\Theta(n\\lg n)$?",
      options: ["$T(n) = 2T(n/2) + \\Theta(n)$", "$T(n) = 2T(n/2) + \\Theta(n^2)$", "$T(n) = 4T(n/2) + \\Theta(n)$", "$T(n) = T(n-1) + \\Theta(n)$"],
      explanation: "$n^{\\log_2 2} = n$ er like stor som $f(n)$, altså tilfelle 2 med $k = 0$ og svar $n\\lg n$ — dette er `Merge-Sort`-rekurrensen. $T(n) = 2T(n/2) + \\Theta(n^2)$ gir $\\Theta(n^2)$ ved tilfelle 3, $T(n) = 4T(n/2) + \\Theta(n)$ gir $\\Theta(n^2)$ ved tilfelle 1, og $T(n) = T(n-1) + \\Theta(n)$ gir $\\Theta(n^2)$ ved iterasjon.",
    },
  ],
  'tdt4120-2-1': [
    {
      question: "Hva er kjøretiden til `Merge-Sort` på et array med $n$ elementer?",
      options: ["$\\Theta(n\\lg n)$ i alle tilfeller — ingen input gjør den raskere eller tregere", "$\\Theta(n\\lg n)$ forventet, men $\\Theta(n^2)$ når arrayet er sortert fra før", "$\\Theta(n)$ når arrayet er sortert fra før, ellers $\\Theta(n\\lg n)$", "$\\Theta(n^2)$ i verste tilfelle, fordi flettingen kan måtte gjentas"],
      explanation: "Delingen og flettingen gjør nøyaktig like mye arbeid uansett input, så grensen er tett begge veier. Alternativet som lover $\\Theta(n)$ på sortert input beskriver `Insertion-Sort`, ikke `Merge-Sort` — det finnes ingen test i `Merge-Sort` som kan avbryte arbeidet tidlig.",
    },
    {
      question: "Hva er beste tilfelle for `Insertion-Sort`, og på hvilken input oppstår det?",
      options: ["$\\Theta(n)$, på et array som allerede er sortert stigende", "$\\Omega(n\\lg n)$, fordi ingen sortering kan gjøre det bedre enn dette", "$\\Theta(n\\lg n)$, på et array der elementene ligger i tilfeldig rekkefølge", "$\\Theta(n^2)$, fordi den indre løkka alltid går helt til indeks 1"],
      explanation: "På sortert input er `A[i] > key` usann med én gang, så den indre while-løkka gjør null runder og hver av de $n-1$ rundene koster konstant tid. Svaret $\\Omega(n\\lg n)$ er felle #9: den nedre grensen gjelder verste tilfelle for sammenligningssortering, ikke beste tilfelle for én algoritme.",
    },
    {
      question: "Hva er verste-tilfelle-kjøretiden til `Quicksort` med siste element som pivot?",
      options: ["$\\Theta(n^2)$, blant annet på et array som allerede er sortert stigende", "$\\Theta(n\\lg n)$, fordi partisjoneringen alltid deler arrayet omtrent i to", "$\\Theta(n\\lg n)$ forventet, og det er også garantien i verste tilfelle", "$\\Theta(n)$, siden hvert element bare berøres én gang per partisjonering"],
      explanation: "På sortert input er siste element størst i hver del, hver partisjonering skiller av nøyaktig ett element, og $T(n) = T(n-1) + \\Theta(n)$ gir $\\Theta(n^2)$. Alternativet som oppgir $\\Theta(n\\lg n)$ som garanti forveksler forventet kjøretid med verste tilfelle — det er nettopp den fellen sjanger E tester.",
    },
    {
      question: "Hvilken av sorteringene under går **ikke** på stedet?",
      options: ["`Merge-Sort`, fordi flettingen trenger $\\Theta(n)$ hjelpeplass i hjelpearrayer", "`Quicksort`, fordi hver partisjonering oppretter to nye deler i minnet", "`Insertion-Sort`, fordi hvert element må lagres mens resten skyves bakover", "`Heapsort`, fordi haugen bygges i et eget array ved siden av inputen"],
      explanation: "`Merge` kopierer de to delene ut i hjelpearrayer før den fletter dem tilbake, og hjelpeplassen vokser med $n$. `Quicksort` partisjonerer derimot ved å bytte om elementer inne i det samme arrayet, og `Heapsort` bygger haugen i inputarrayet — begge går på stedet.",
    },
    {
      question: "Hvilke to av de fire sorteringene i dette kapitlet er stabile?",
      options: ["`Insertion-Sort` og `Merge-Sort` — begge beholder rekkefølgen på like nøkler", "`Quicksort` og `Merge-Sort` — begge deler arrayet i to før de setter sammen", "`Insertion-Sort` og `Quicksort` — begge går på stedet og flytter få elementer", "`Quicksort` og `Randomized-Quicksort` — pivoten står fast etter delingen"],
      explanation: "`Insertion-Sort` skyver bare forbi elementer som er strengt større, og `Merge` plukker fra venstre bunke ved likhet — begge bevarer den innbyrdes rekkefølgen. `Partition` bytter derimot elementer over lange avstander, så begge `Quicksort`-variantene kan snu om på to like nøkler.",
    },
    {
      question: "Hva sier den nedre grensen $\\Omega(n\\lg n)$ for sortering?",
      options: ["At enhver **sammenligningsbasert** sortering bruker $\\Omega(n\\lg n)$ sammenligninger i verste tilfelle", "At enhver sortering, uansett hvordan den avgjør rekkefølgen, bruker $\\Omega(n\\lg n)$ tid i verste tilfelle", "At enhver sammenligningsbasert sortering bruker $\\Omega(n\\lg n)$ tid også i beste tilfelle på sortert input", "At en sammenligningsbasert sortering aldri kan bruke mer enn $O(n\\lg n)$ sammenligninger"],
      explanation: "Argumentet er beslutningstreet: $n!$ mulige svar krever et binært tre med høyde minst $\\lg(n!) = \\Theta(n\\lg n)$, og høyden er antall sammenligninger i verste fall. Alternativet som utvider grensen til *enhver* sortering er galt — `Counting-Sort` bruker nøkkelen som indeks og faller utenfor argumentet.",
    },
    {
      question: "Hva er kjøretiden til ett `Merge`-kall som fletter to sorterte deler med til sammen $m$ elementer?",
      options: ["$\\Theta(m)$ — hver runde i for-løkka plasserer nøyaktig ett element", "$\\Theta(m\\lg m)$ — hvert element må finne sin plass med et binærsøk", "$\\Theta(m^2)$ — hvert element sammenlignes med hvert element i den andre delen", "$\\Theta(\\lg m)$ — bare de fremste elementene i de to delene sammenlignes"],
      explanation: "For-løkka går fra `p` til `r` og skriver ett element per runde, altså $m$ runder med konstant arbeid. Alternativet som foreslår binærsøk beskriver en annen algoritme: `Merge` trenger ingen søking, fordi det minste gjenværende elementet alltid ligger fremst i én av de to bunkene.",
    },
    {
      question: "Hva er forskjellen på `Quicksort` og `Randomized-Quicksort`?",
      options: ["Pivoten trekkes tilfeldig, så forventet $\\Theta(n\\lg n)$ gjelder for **enhver** input", "Pivoten trekkes tilfeldig, så verste tilfelle forbedres fra $\\Theta(n^2)$ til $\\Theta(n\\lg n)$", "Elementene stokkes tilfeldig først, slik at algoritmen blir stabil på like nøkler", "Partisjoneringen deles i to tilfeldige halvdeler, slik at rekursjonsdybden blir $\\Theta(\\lg n)$"],
      explanation: "Tilfeldigheten flyttes fra inputen til algoritmen: ingen bestemt input kan lenger framtvinge de skjeve delingene. Alternativet som hevder at verste tilfelle blir $\\Theta(n\\lg n)$ er galt — trekker du uheldig hver gang, er kjøretiden fortsatt $\\Theta(n^2)$; det er sannsynligheten som er endret, ikke muligheten.",
    },
    {
      question: "Hvilken rekurrens beskriver `Merge-Sort`?",
      options: ["$T(n) = 2T(n/2) + \\Theta(n)$, som gir $\\Theta(n\\lg n)$", "$T(n) = T(n-1) + \\Theta(n)$, som gir $\\Theta(n^2)$", "$T(n) = 2T(n/2) + \\Theta(1)$, som gir $\\Theta(n)$", "$T(n) = T(n/2) + \\Theta(n)$, som gir $\\Theta(n)$"],
      explanation: "To rekursive kall på halve arrayet hver, pluss flettingen som koster lineær tid. Rekurrensen $T(n) = T(n-1) + \\Theta(n)$ hører til `Quicksort`s verste tilfelle, der partisjoneringen skiller av bare ett element om gangen.",
    },
    {
      question: "Hvilket masterteorem-tilfelle løser `Merge-Sort`-rekurrensen $T(n) = 2T(n/2) + \\Theta(n)$?",
      options: ["Tilfelle 2 med $k = 0$, siden $f(n) = \\Theta(n^{\\log_b a})$ og $\\log_b a = 1$", "Tilfelle 1, siden $f(n)$ vokser strengt langsommere enn $n^{\\log_b a}$", "Tilfelle 3, siden $f(n)$ vokser strengt raskere enn $n^{\\log_b a}$", "Ingen av dem, siden $f(n)$ mangler en logaritmefaktor fra før"],
      explanation: "Med $a = b = 2$ er $n^{\\log_b a} = n$, og $f(n) = \\Theta(n) = \\Theta(n^{\\log_b a}\\lg^0 n)$ — altså tilfelle 2 med $k = 0$, og svaret får $\\lg^{k+1} n = \\lg n$. Pensumvarianten krever $k \\ge 0$, ikke $k > 0$: alternativet som sier at rekurrensen faller utenfor, bruker feil betingelse.",
    },
    {
      question: "Hva er en løkkeinvariant?",
      options: ["En påstand om tilstanden som gjelder rett før hver runde i løkka", "En variabel i løkka som beviselig aldri endrer verdi under kjøringen", "En grense for antall runder løkka kan gjøre før den må stoppe", "En betingelse som må være oppfylt for at løkka skal kunne starte"],
      explanation: "Invarianten har tre ledd — initialisering, vedlikehold og terminering — og brukes til å vise at algoritmen gir riktig svar. Det er *påstanden* som holder seg, ikke en variabel: verdiene i `A[1..j-1]` endrer seg hele tiden i `Insertion-Sort`, men påstanden om at de er sortert, gjør det ikke.",
    },
    {
      question: "Hva er løkkeinvarianten i `Insertion-Sort`?",
      options: ["Rett før runde `j` er `A[1..j-1]` sortert og inneholder de samme elementene som fra start", "Rett før runde `j` er `A[1..j-1]` sortert og inneholder de $j-1$ minste elementene", "Rett før runde `j` står `A[j]` på sin endelige plass i det ferdig sorterte arrayet, og røres ikke igjen", "Rett før runde `j` er hele arrayet `A[1..n]` sortert bortsett fra elementet på plass `j`"],
      explanation: "Delen til venstre er sortert, men den inneholder ikke nødvendigvis de minste elementene — de kan ligge til høyre og komme inn senere. Alternativet som sier «de $j-1$ minste» beskriver invarianten i en utvalgssortering, der hver runde plukker et globalt minimum.",
    },
    {
      question: "Hvorfor plukker `Merge` fra venstre bunke når de to fremste elementene er like?",
      options: ["For at like elementer skal beholde rekkefølgen sin, altså for at sorteringen skal være stabil", "For at flettingen skal kunne stoppe tidligere i de tilfellene der den ene bunken tar slutt først", "For at antall sammenligninger skal bli $n-1$ i stedet for $n$ i hvert eneste flettesteg", "For at hjelpearrayet `L` skal kunne gjenbrukes uendret i det neste rekursive kallet"],
      explanation: "Venstre bunke inneholder elementene som lå først i arrayet, så `<=` i testen bevarer den innbyrdes rekkefølgen. Byttet du til `<`, ville algoritmen fortsatt sortere riktig — den ville bare ikke lenger vært stabil, og da ville `Radix-Sort` ikke kunne bruke den.",
    },
    {
      question: "Hva returnerer `Partition(A, p, r)`?",
      options: ["Pivotens sluttindeks `q`, der alt til venstre er $\\le$ pivoten og alt til høyre er $>$", "Verdien til pivoten, slik at `Quicksort` vet hvilket element som ble brukt som skille", "Antall elementer som er mindre enn eller lik pivoten i delen `A[p..r]`", "Indeksen til det minste elementet i delen, slik at rekursjonen vet hvor den skal starte"],
      explanation: "`Quicksort` bruker `q` til å dele opp de to rekursive kallene, `A[p..q-1]` og `A[q+1..r]`, og hopper over `q` selv fordi pivoten allerede står ferdig plassert. Alternativet som oppgir pivotverdien ville ikke gitt `Quicksort` nok informasjon: den trenger *hvor* skillet går, ikke *hva* det er.",
    },
    {
      question: "En sorteringsrutine deler arrayet i fire like deler, sorterer hver rekursivt og fletter i lineær tid. Hva er kjøretiden?",
      options: ["$\\Theta(n\\lg n)$, ved masterteoremets tilfelle 2 med $a = b = 4$", "$\\Theta(n\\lg^2 n)$, siden fire delkall gir én ekstra logaritmefaktor", "$\\Theta(n^2)$, siden fire delkall firedobler arbeidet på hvert nivå", "$\\Theta(n)$, siden hvert nivå er lineært og treet har konstant dybde"],
      explanation: "Rekurrensen er $T(n) = 4T(n/4) + \\Theta(n)$, og $n^{\\log_4 4} = n$, så tilfelle 2 med $k = 0$ gir $\\Theta(n\\lg n)$. Antall deler endrer bare konstanten foran, ikke veksten — det er en av grunnene til at «del i flere biter» ikke er en snarvei forbi den nedre grensen.",
    },
    {
      question: "Hva betyr det at en algoritme går **på stedet**?",
      options: ["At den bruker $O(1)$ ekstra plass utenom selve inputen", "At den aldri flytter et element mer enn én gang under kjøringen", "At den leser inputen i den rekkefølgen elementene ligger i minnet", "At den gir samme resultat uansett hvilken rekkefølge inputen kommer i"],
      explanation: "Bare et konstant antall hjelpevariabler er tillatt, uavhengig av $n$. `Insertion-Sort` flytter mange elementer mange ganger og går likevel på stedet — det er plassforbruket som teller, ikke antall flyttinger.",
    },
    {
      question: "Hvorfor kan ikke beslutningstre-argumentet brukes på `Counting-Sort`?",
      options: ["Fordi `Counting-Sort` bruker nøkkelverdien som indeks og ikke bare sammenligner elementpar", "Fordi `Counting-Sort` er stabil, og stabile sorteringer har et annet beslutningstre", "Fordi `Counting-Sort` bruker hjelpeplass, og argumentet gjelder bare sorteringer på stedet", "Fordi `Counting-Sort` bare virker på små arrayer, der $n!$ er for lite til å binde"],
      explanation: "Argumentet forutsetter at hvert steg er en binær sammenligning mellom to elementer; en algoritme som slår opp direkte på nøkkelverdien, har ikke et slikt tre. Stabilitet og hjelpeplass er irrelevant for grensen — `Merge-Sort` er både stabil og plasskrevende, og er likevel bundet av den.",
    },
    {
      question: "Hvilket utsagn om `Heapsort` stemmer, sammenlignet med sorteringene i dette kapitlet?",
      options: ["Den er $\\Theta(n\\lg n)$ garantert, går på stedet og er ustabil", "Den er $\\Theta(n\\lg n)$ garantert, går på stedet og er stabil", "Den er $\\Theta(n\\lg n)$ forventet, trenger hjelpeplass og er ustabil", "Den er $\\Theta(n)$ i beste tilfelle, går på stedet og er ustabil"],
      explanation: "`Heapsort` kombinerer `Merge-Sort`s garanti med `Quicksort`s plassforbruk, men mister stabiliteten fordi haugoperasjonene flytter elementer over lange avstander. Ingen input gjør den raskere, så alternativet med $\\Theta(n)$ i beste tilfelle beskriver `Insertion-Sort`.",
    },
  ],
  'tdt4120-2-2': [
    {
      question: "Hva er kjøretiden til `Counting-Sort` på $n$ heltallsnøkler i området $[0..k]$?",
      options: ["$\\Theta(n+k)$ — lineær bare når $k = O(n)$, ellers dominerer nøkkelområdet", "$\\Theta(n)$ uansett hvor stort nøkkelområdet $k$ måtte være i den gitte inputen", "$\\Theta(n\\lg n)$, som for alle andre sorteringer som gir et korrekt resultat", "$\\Theta(nk)$ — hver av de $n$ nøklene må sammenlignes med hver av de $k$ verdiene"],
      explanation: "Tellingen og plasseringen koster $\\Theta(n)$, mens nullstillingen og oppsummeringen av `C` koster $\\Theta(k)$. Alternativet som oppgir $\\Theta(n)$ uten forbehold er felle #9: med $n = 1000$ og $k = 10^9$ må algoritmen gå gjennom en milliard celler.",
    },
    {
      question: "Hva vil det si at en sortering er **stabil**?",
      options: ["At elementer med lik nøkkel beholder sin innbyrdes rekkefølge fra input til output", "At algoritmen gir samme kjøretid uansett hvilken rekkefølge inputen kommer i", "At algoritmen alltid sorterer riktig, også når inputen inneholder like nøkler", "At algoritmen ikke trenger ekstra plass som vokser med antall elementer $n$"],
      explanation: "Egenskapen handler utelukkende om to elementer med samme nøkkel, og er bare synlig når elementene bærer med seg satellittdata. Alternativet «sorterer alltid riktig» blander stabilitet med korrekthet: `Quicksort` er ustabil og sorterer likevel helt riktig.",
    },
    {
      question: "Hvorfor må delsorteringen i `Radix-Sort` være stabil?",
      options: ["Fordi rekkefølgen fra de foregående sifferrundene ellers går tapt for like siffer", "Fordi kjøretiden ellers blir $\\Theta(n\\lg n)$ per siffer i stedet for $\\Theta(n+k)$", "Fordi telletabellen ellers ikke kan gjenbrukes mellom to påfølgende sifferrunder", "Fordi sifrene ellers må behandles fra det mest signifikante og nedover i stedet"],
      explanation: "To elementer med samme siffer i den aktuelle runden må avgjøres av de foregående sifrene, altså av rekkefølgen de allerede har; en ustabil delsortering står fritt til å snu den. Kjøretiden er et eget spørsmål — `Quicksort` som delsortering ville ødelagt korrektheten, ikke bare farten.",
    },
    {
      question: "I hvilken rekkefølge behandler `Radix-Sort` sifrene?",
      options: ["Fra det minst signifikante sifferet og oppover mot det mest signifikante", "Fra det mest signifikante sifferet og nedover mot det minst signifikante", "I vilkårlig rekkefølge, siden hver sifferrunde er uavhengig av de andre", "Fra midten og utover, slik at de mest avgjørende sifrene behandles sist"],
      explanation: "Etter runde $i$ er arrayet sortert etter de $i$ minst signifikante sifrene under ett, og den siste runden avgjør hovedrekkefølgen. Varianten som starter med det mest signifikante sifferet finnes, men den krever rekursiv oppdeling og er en annen algoritme enn den `Radix-Sort` betegner her.",
    },
    {
      question: "Hva inneholder `C[i]` i `Counting-Sort` etter den kumulative oppsummeringen?",
      options: ["Antall elementer med nøkkel høyst $i$ — altså siste ledige plass for nøkkelen $i$", "Antall elementer med nøkkel nøyaktig $i$, slik det var rett etter tellingen", "Indeksen til det første elementet med nøkkel $i$ i det ferdige outputarrayet", "Antall elementer med nøkkel strengt større enn $i$ i hele inputarrayet `A`"],
      explanation: "Oppsummeringen `C[i] = C[i] + C[i-1]` gjør antallet om til en plassering, og plasseringsløkka trekker fra én for hvert element den setter ut. Alternativet «antall med nøkkel nøyaktig $i$» beskriver tabellen *før* oppsummeringen — en kontroll er at siste celle skal være $n$ etterpå.",
    },
    {
      question: "Hvorfor er ikke $\\Omega(n\\lg n)$-grensen brutt av `Counting-Sort`?",
      options: ["Fordi grensen bare gjelder sorteringer som avgjør rekkefølgen ved å sammenligne elementpar", "Fordi grensen bare gjelder sorteringer som går på stedet og ikke bruker hjelpearrayer i det hele tatt", "Fordi grensen bare gjelder i verste tilfelle, og `Counting-Sort` måles i beste tilfelle", "Fordi grensen bare gjelder når antall elementer $n$ er større enn nøkkelområdet $k$"],
      explanation: "Beslutningstre-argumentet forutsetter binære sammenligninger; `Counting-Sort` velger blant $k+1$ muligheter i ett oppslag og har ikke et slikt tre. Hjelpeplass er irrelevant for grensen — `Merge-Sort` bruker også hjelpearrayer og er likevel bundet av den.",
    },
    {
      question: "Hva er kjøretiden til `Bucket-Sort`?",
      options: ["$\\Theta(n)$ forventet ved jevnt fordelt input, men $\\Theta(n^2)$ i verste tilfelle", "$\\Theta(n)$ garantert, uavhengig av hvordan elementene fordeler seg i bøttene", "$\\Theta(n\\lg n)$ forventet, siden hver av de $n$ bøttene sorteres med en effektiv sortering", "$\\Theta(n+k)$, der $k$ er antall bøtter algoritmen fordeler elementene i"],
      explanation: "Ved jevn fordeling havner det i gjennomsnitt ett element per bøtte, og `Insertion-Sort` gjør konstant arbeid per bøtte. Havner alle elementene i samme bøtte, er algoritmen bare én stor `Insertion-Sort` — derfor er $\\Theta(n^2)$ fortsatt verste tilfelle.",
    },
    {
      question: "Hvilken egenskap kreves av nøklene for at `Counting-Sort` skal kunne brukes?",
      options: ["At de er heltall i et kjent område $[0..k]$, siden nøkkelen brukes som indeks", "At de er jevnt fordelt over verdiområdet, slik at tellingen blir omtrent lik", "At de er forskjellige fra hverandre, slik at ingen to elementer har samme nøkkel", "At de allerede er delvis sortert, slik at plasseringen kan starte fra riktig ende"],
      explanation: "`C[A[j]]` slår opp direkte på nøkkelen, og en indeks må være et heltall i et kjent område. Jevn fordeling er kravet til `Bucket-Sort`, ikke til `Counting-Sort` — sistnevnte takler at alle elementene har samme nøkkel helt fint.",
    },
    {
      question: "Hvorfor teller den siste løkka i `Counting-Sort` fra `n` og nedover til 1?",
      options: ["For at like nøkler skal beholde rekkefølgen sin, altså for at sorteringen skal bli stabil", "For at telletabellen `C` skal kunne nullstilles underveis og gjenbrukes i den neste sifferrunden", "For at outputarrayet `B` skal kunne fylles uten at det trengs ekstra hjelpeplass", "For at algoritmen skal kunne stoppe tidlig når alle nøkkelverdiene er brukt opp"],
      explanation: "Bakfra blir det siste elementet med en gitt nøkkel plassert på den siste av plassene som hører til nøkkelen, og rekkefølgen bevares. Snur du løkka, sorterer algoritmen fortsatt riktig — den blir bare ustabil, og kan da ikke brukes som delsortering i `Radix-Sort`.",
    },
    {
      question: "Hvilken av disse sorteringene kan **ikke** brukes som delsortering i `Radix-Sort`?",
      options: ["`Quicksort`, fordi den er ustabil og kan snu om på like siffer", "`Counting-Sort`, fordi den bruker et eget outputarray", "`Insertion-Sort`, fordi den er $\\Theta(n^2)$ i verste tilfelle på lange arrayer", "`Merge-Sort`, fordi den er sammenligningsbasert og dermed bundet av grensen"],
      explanation: "Kravet til delsorteringen er stabilitet, og `Quicksort` er den eneste ustabile i listen. `Insertion-Sort` og `Merge-Sort` er begge stabile og ville gitt riktig resultat — de ville bare gjort `Radix-Sort` tregere enn nødvendig.",
    },
    {
      question: "Under hvilken betingelse er `Radix-Sort` asymptotisk raskere enn `Merge-Sort`?",
      options: ["Når $d(n+k) = o(n\\lg n)$ — typisk når $d$ er konstant og $k = O(n)$", "Alltid, siden $\\Theta(d(n+k))$ er lineært mens $\\Theta(n\\lg n)$ ikke er det", "Når nøklene er tilnærmet jevnt fordelt over hele det mulige verdiområdet", "Når antall elementer $n$ er mindre enn antall siffer $d$ i hver enkelt nøkkel"],
      explanation: "Sammenligningen er mellom uttrykkene $d(n+k)$ og $n\\lg n$; med $k = O(n)$ reduseres kravet til $d = o(\\lg n)$. Påstanden «alltid» er gal: leser du 64-bits heltall som 64 binære siffer, er $d = 64$ mens $\\lg n$ typisk er mye mindre.",
    },
    {
      question: "Du skal sortere 8 millioner eksamenspoeng, hvert et heltall fra 0 til 100. Hva velger du?",
      options: ["`Counting-Sort` med $k = 100$, som gir $\\Theta(n)$ siden $k$ er konstant", "`Merge-Sort`, som gir $\\Theta(n\\lg n)$ og er den eneste med garantert kjøretid", "`Bucket-Sort`, siden poengene er jevnt fordelt over hele det mulige området", "`Quicksort`, siden den går på stedet og har lave konstanter i praksis"],
      explanation: "Nøkkelområdet er kjent, lite og heltallig — nøyaktig forutsetningen for `Counting-Sort`, og $\\Theta(n+101) = \\Theta(n)$. `Merge-Sort` ville også vært korrekt, men bruker en faktor $\\lg n \\approx 23$ mer arbeid uten grunn.",
    },
    {
      question: "Hvilke av sorteringene i dette kapitlet går på stedet?",
      options: ["Ingen av dem — alle tre trenger hjelpeplass til bøtter eller outputarray", "`Counting-Sort` og `Radix-Sort`, som begge stokker om inne i inputarrayet", "`Bucket-Sort` alene, siden bøttene bare er et logisk skille i det samme arrayet", "Alle tre, siden ingen av dem sammenligner elementer og dermed slipper hjelpeplass"],
      explanation: "Alle tre plasserer elementene på beregnede plasser i et eget array eller i bøtter, og slik plassering krever plass som vokser med $n$. Det henger sammen med stabiliteten: nettopp fordi de ikke bytter om inne i arrayet, er de lette å gjøre stabile.",
    },
    {
      question: "Et array `A = 3, 0, 2, 3, 1` skal sorteres med `Counting-Sort` og $k = 3$. Hva er `C` etter tellingen?",
      options: ["`C = 1, 1, 1, 2`", "`C = 1, 2, 3, 5`", "`C = 0, 1, 2, 3`", "`C = 2, 1, 1, 1`"],
      explanation: "Én nuller, én etter, én toer og to treere gir `C[0..3] = 1, 1, 1, 2`. Alternativet `1, 2, 3, 5` er den samme tabellen etter den kumulative oppsummeringen — les alltid nøye om oppgaven spør før eller etter det steget.",
    },
    {
      question: "Du skal sortere utlån etter filial, og innenfor hver filial etter dato. Hvilken rekkefølge sorterer du i?",
      options: ["Først på dato, deretter på filial — den minst viktige nøkkelen sorteres først", "Først på filial, deretter på dato — den viktigste nøkkelen sorteres først", "Begge nøklene samtidig, ved å slå dem sammen til ett tall før sorteringen", "Rekkefølgen er likegyldig så lenge begge sorteringene er stabile og lineære"],
      explanation: "Den siste sorteringen bestemmer hovedgrupperingen, og stabiliteten bevarer rekkefølgen fra den forrige innenfor hver gruppe — samme prinsipp som sifferrekkefølgen i `Radix-Sort`. Sorterte du på filial først, ville datosorteringen etterpå rive filialene fra hverandre.",
    },
    {
      question: "Hva skjer med `Radix-Sort` hvis du bruker en ustabil delsortering på et array der to nøkler har samme siste siffer?",
      options: ["Resultatet kan bli feil sortert, fordi arbeidet fra de tidligere rundene kan bli snudd", "Resultatet blir riktig, men kjøretiden øker fra $\\Theta(d(n+k))$ til $\\Theta(dn\\lg n)$", "Resultatet blir riktig så lenge alle nøklene har nøyaktig like mange siffer $d$", "Algoritmen stopper, fordi delsorteringen ikke får plass i telletabellen `C`"],
      explanation: "I den avgjørende runden gjør delsorteringen ingenting med to elementer som har samme siffer — de skal beholde rekkefølgen fra forrige runde, og en ustabil sortering står fritt til å snu den. Feilen er altså i korrektheten, ikke i kjøretiden.",
    },
  ],
  'tdt4120-2-3': [
    {
      question: "Hva er verste-tilfelle-kjøretiden til `Randomized-Select`?",
      options: ["$\\Theta(n^2)$, når hvert pivotvalg skiller av bare ett element om gangen", "$\\Theta(n)$, siden algoritmen kaster den ene siden i hvert eneste kall", "$\\Theta(n\\lg n)$, som for `Quicksort` med tilfeldig valgt pivotelement", "$\\Theta(\\lg n)$, siden delen halveres for hver runde i rekursjonen"],
      explanation: "Med maksimalt skjeve delinger blir rekurrensen $T(n) = T(n-1) + \\Theta(n)$, som gir $\\Theta(n^2)$. Alternativet som oppgir $\\Theta(n)$ er felle #9: det er den **forventede** kjøretiden, og det er `Select` — median av medianer — som har $\\Theta(n)$ også i verste tilfelle.",
    },
    {
      question: "Hva returnerer `Partition(A, p, r)`, og hva garanterer den om arrayet etterpå?",
      options: ["Pivotens sluttindeks `q`; alt i `A[p..q-1]` er $\\le$ pivoten og alt i `A[q+1..r]` er $>$", "Pivotens sluttindeks `q`; både `A[p..q-1]` og `A[q+1..r]` er ferdig sortert stigende etterpå", "Antall elementer som er mindre enn pivoten; delen `A[p..r]` er uendret ellers", "Verdien til pivoten; alt i `A[p..r]` er nå gruppert etter hvor stort det er"],
      explanation: "Postbetingelsen sier bare noe om *hvilken side* av `q` elementene havner på, ikke om rekkefølgen innenfor sidene. Alternativet som lover sorterte sider er den vanligste misforståelsen — hadde det vært sant, ville `Quicksort` vært ferdig etter én partisjonering.",
    },
    {
      question: "Hvorfor er `Randomized-Select` $\\Theta(n)$ forventet mens `Quicksort` er $\\Theta(n\\lg n)$ forventet?",
      options: ["Fordi utvelgelsen kaster den ene siden, så rekurrensen får ett kall i stedet for to", "Fordi utvelgelsen bruker en billigere partisjonering enn den `Quicksort` er nødt til å bruke", "Fordi utvelgelsen alltid velger medianen som pivot og dermed deler helt jevnt", "Fordi utvelgelsen slipper å sammenligne elementer og bruker nøkkelen som indeks"],
      explanation: "Rekurrensene er $T(n) = T(n/2) + \\Theta(n)$ mot $T(n) = 2T(n/2) + \\Theta(n)$, og summen $n + n/2 + n/4 + \\dots$ er under $2n$. Partisjoneringen er nøyaktig den samme i begge — det er antall rekursive kall som skiller dem.",
    },
    {
      question: "Du kjører `Randomized-Select` for $i = 7$, og partisjoneringen gir `k = 3`. Hva skjer videre?",
      options: ["Søket fortsetter i høyre del, med ordenstallet endret til $i = 4$", "Søket fortsetter i høyre del, med ordenstallet uendret på $i = 7$", "Søket fortsetter i venstre del, med ordenstallet endret til $i = 4$", "Søket stopper, siden pivoten er det sjuende minste elementet i delen"],
      explanation: "Siden $i > k$ ligger svaret til høyre, og de tre elementene til og med pivoten er strøket fra regnskapet, så det nye ordenstallet er $7 - 3 = 4$. Å beholde $i = 7$ er den vanligste håndkjøringsfeilen i denne sjangeren.",
    },
    {
      question: "Hva er kjøretiden til `Select` — median av medianer — i verste tilfelle?",
      options: ["$\\Theta(n)$ — det er nettopp garantien som skiller den fra den tilfeldige varianten", "$\\Theta(n^2)$ — akkurat som for `Randomized-Select` når pivotene blir skjeve", "$\\Theta(n\\lg n)$ — den må sortere gruppene på fem før medianene kan finnes", "$\\Theta(\\lg n)$ — den halverer arbeidet systematisk i hvert rekursive kall"],
      explanation: "Pivotvalget sikrer at hvert rekursivt kall arbeider på høyst omtrent syv tideler av delen, og en slik geometrisk rekke summerer seg til $\\Theta(n)$. Sorteringen av gruppene koster ikke $\\lg n$ per element: hver gruppe har konstant størrelse fem, så det er konstant arbeid per element.",
    },
    {
      question: "Hvilket element velger `Partition` som pivot i denne boka?",
      options: ["Det siste elementet i delen, altså `A[r]`", "Det første elementet, `A[p]`", "Det midterste elementet i delen, altså `A[floor((p+r)/2)]`", "Medianen av delen, funnet med et eget rekursivt kall"],
      explanation: "Boka følger CLRS, og både `Quicksort` og utvelgelsesalgoritmene bygger på den varianten. `Randomized-Partition` bytter et tilfeldig element til plass `r` **først**, og kaller så den samme rutinen — pivotregelen selv er uendret.",
    },
    {
      question: "Hva er verdien av `i` når `Partition` starter, og hvorfor?",
      options: ["`i = p - 1`, fordi den venstre regionen er tom før første runde", "`i = p`, fordi det første elementet alltid tilhører den venstre regionen", "`i = r`, fordi pivoten står der og regionene bygges innover mot midten", "`i = 0`, fordi indekseringen alltid starter fra begynnelsen av arrayet"],
      explanation: "`i` peker på det **siste** elementet i regionen med verdier $\\le$ pivoten, og den regionen har ingen elementer ennå. Er alle elementene større enn pivoten, blir `i` liggende på `p - 1`, og pivoten havner riktig på plass `p`.",
    },
    {
      question: "Hva er utvelgelsesproblemet?",
      options: ["Å finne det $i$-te minste elementet blant $n$ tall, for et gitt ordenstall $i$", "Å velge ut den beste sorteringsalgoritmen for en gitt type input og nøkkeltype", "Å plukke ut de $i$ minste elementene og returnere dem i sortert rekkefølge", "Å avgjøre om et bestemt element finnes blant $n$ tall som ikke er sortert"],
      explanation: "Svaret er ett element, ikke en delmengde og ikke et ja/nei. Alternativet som ber om «de $i$ minste i sortert rekkefølge» er et strengt større problem, og det kan ikke løses i lineær tid for generell $i$.",
    },
    {
      question: "En kandidat skriver: «Etter `Partition` er høyresiden sortert.» Stemmer det?",
      options: ["Nei — bare pivotens plassering er endelig, sidene kan stå i vilkårlig rekkefølge", "Ja — alle elementene til høyre er større enn pivoten og står derfor riktig", "Ja, men bare når pivoten er det minste elementet i hele den aktuelle delen", "Nei — men venstresiden er alltid sortert, siden elementene byttes inn i rekkefølge"],
      explanation: "Postbetingelsen sier bare hvilken side hvert element havner på. Alternativet om at venstresiden er sortert er like galt: elementene byttes inn i den rekkefølgen de påtreffes, ikke etter størrelse.",
    },
    {
      question: "Hvorfor kan utvelgelse gjøres i lineær tid når sortering ikke kan det?",
      options: ["Fordi utvelgelse bare krever plasseringen av ett element, ikke rekkefølgen mellom alle", "Fordi utvelgelse ikke bruker sammenligninger, men slår opp direkte på nøkkelverdien", "Fordi utvelgelse alltid arbeider på et array som allerede er delvis sortert på forhånd", "Fordi $\\Omega(n\\lg n)$-grensen bare gjelder når inputen er større enn et visst antall"],
      explanation: "$\\Omega(n\\lg n)$-grensen gjelder problemet «sorter alt», og utvelgelse er et strengt mindre problem. Utvelgelsesalgoritmene er fullt ut sammenligningsbaserte — de sammenligner mot pivoten hele veien — så det er ikke der forskjellen ligger.",
    },
    {
      question: "Hvilken rekurrens beskriver `Randomized-Select` ved jevn deling?",
      options: ["$T(n) = T(n/2) + \\Theta(n)$, som gir $\\Theta(n)$", "$T(n) = 2T(n/2) + \\Theta(n)$, som gir $\\Theta(n\\lg n)$", "$T(n) = T(n-1) + \\Theta(n)$, som gir $\\Theta(n^2)$", "$T(n) = T(n/2) + \\Theta(1)$, som gir $\\Theta(\\lg n)$"],
      explanation: "Ett rekursivt kall på halve delen pluss lineært arbeid til partisjoneringen; summen $n + n/2 + n/4 + \\dots$ er under $2n$. Rekurrensen med to kall hører til `Quicksort`, og den med $T(n-1)$ hører til verste tilfelle.",
    },
    {
      question: "Hva er `k` i `Randomized-Select`, og hva brukes det til?",
      options: ["Pivotens ordenstall innenfor delen, `q - p + 1`; det avgjør hvilken side søket fortsetter i", "Antall rekursive kall som gjenstår før algoritmen når grunntilfellet der `p == r` og delen er tom", "Største nøkkelverdi i delen, brukt til å avgjøre om lineær sortering er mulig", "Antall elementer som er strengt større enn pivoten i den gjeldende delen `A[p..r]`"],
      explanation: "Sammenligningen mellom `i` og `k` er hele styringen: lik gir svar, mindre gir venstre side, større gir høyre side med `i` redusert til `i - k`. Alternativet om største nøkkelverdi forveksler denne `k` med parameteren i `Counting-Sort`.",
    },
  ],
  'tdt4120-2-4': [
    {
      question: "Oppgaven ber om telletabellen `C` **etter oppsummeringen**. Hva leverer du?",
      options: ["Den ene raden `C[0..k]`, der `C[i]` er antall elementer med nøkkel høyst $i$", "Både raden etter tellingen og raden etter oppsummeringen, for sikkerhets skyld", "Outputarrayet `B[1..n]`, siden det er sluttresultatet av hele algoritmen", "Raden `C[0..k]` slik den så ut rett etter tellingen, før den ble summert opp"],
      explanation: "Kortsvarsdisiplinen gjelder: ett spørsmål, ett svar, og kontrollen er at siste celle skal være $n$. Å levere begge radene gir ingen ekstra uttelling og koster tid som nitten andre oppgaver trenger.",
    },
    {
      question: "Etter `Partition(A, 1, 6)` på et allerede sortert array — hvor havner pivoten?",
      options: ["Helt til høyre, på plass 6, siden alle de andre elementene er $\\le$ pivoten", "Helt til venstre, på plass 1, siden pivoten er det minste elementet i delen", "Omtrent på midten, siden partisjoneringen deler arrayet i to like store deler", "På plass 5, siden det siste elementet alltid byttes med det nest siste"],
      explanation: "På sortert input er `A[r]` størst, testen `A[j] <= x` er sann hver gang, og `i` ender på `r - 1` slik at pivoten byttes med seg selv. Det er nettopp denne delingen — null elementer på høyre side — som gir `Quicksort` verste tilfelle $\\Theta(n^2)$.",
    },
    {
      question: "Du kjører `Merge-Sort` og deretter `Insertion-Sort` på resultatet. Hva er total kjøretid?",
      options: ["$\\Theta(n\\lg n)$, siden `Insertion-Sort` treffer sitt beste tilfelle på sortert input", "$\\Theta(n^2)$, siden `Insertion-Sort` alltid er kvadratisk uansett hvordan inputen ser ut", "$\\Theta(n)$, siden det siste steget er lineært og bestemmer den totale kjøretiden", "$\\Theta(n\\lg n)$ forventet, men $\\Theta(n^2)$ i verste tilfelle avhengig av inputen"],
      explanation: "$\\Theta(n\\lg n) + \\Theta(n) = \\Theta(n\\lg n)$, og garantien er tett fordi `Merge-Sort` ikke er inputfølsom. Alternativet som oppgir $\\Theta(n)$ gjør den vanligste feilen i kombinasjonsspørsmål: arbeidet fra det første steget forsvinner ikke.",
    },
    {
      question: "Du kjører `Insertion-Sort` først og deretter `Merge-Sort`. Hva er total kjøretid i verste tilfelle?",
      options: ["$\\Theta(n^2)$, fordi det første steget alene kan koste så mye", "$\\Theta(n\\lg n)$, fordi det siste steget dominerer og er tett begge veier", "$\\Theta(n)$, fordi arrayet allerede er sortert når `Merge-Sort` starter", "$\\Theta(n^2\\lg n)$, fordi de to kjøretidene må ganges sammen"],
      explanation: "Summen $\\Theta(n^2) + \\Theta(n\\lg n)$ domineres av det kvadratiske leddet. To steg etter hverandre legges sammen, ikke ganges — ganging hører til nøstede løkker, ikke til sekvens.",
    },
    {
      question: "Hvilken av de sju sorteringene har et beste tilfelle som er asymptotisk bedre enn verste?",
      options: ["`Insertion-Sort`, med $\\Theta(n)$ beste mot $\\Theta(n^2)$ verste", "`Merge-Sort`, med $\\Theta(n)$ beste mot $\\Theta(n\\lg n)$ verste", "`Heapsort`, med $\\Theta(n)$ beste mot $\\Theta(n\\lg n)$ verste", "`Counting-Sort`, med $\\Theta(n)$ beste mot $\\Theta(n+k)$ verste"],
      explanation: "Bare `Insertion-Sort` blir asymptotisk raskere når inputen er pen — den indre while-løkka stopper umiddelbart på sortert input. `Merge-Sort` og `Heapsort` gjør nøyaktig like mye arbeid uansett, og `Counting-Sort` er $\\Theta(n+k)$ i alle tilfeller.",
    },
    {
      question: "En kandidat skriver at `Build-Max-Heap` er $\\Theta(n\\lg n)$. Hva er riktig?",
      options: ["$\\Theta(n)$ — tellingen nivå for nivå summerer seg til under $2n$", "$\\Theta(n\\lg n)$ — det er $n/2$ kall til `Max-Heapify` som hver koster $O(\\lg n)$", "$\\Theta(n^2)$ — hver node må sammenlignes med alle nodene under seg", "$\\Theta(\\lg n)$ — bare stien fra rota og ned berøres"],
      explanation: "Halvparten av nodene er blader og gjør ingenting, og summen av arbeidet konvergerer. Alternativet med $n/2$ kall à $O(\\lg n)$ er en gyldig **øvre** grense, men ikke stram — og en løs grense der en strammere finnes, er felle #4.",
    },
    {
      question: "Hva er `q` etter `Partition(A, 1, 5)` på `A = 56, 41, 68, 23, 12`?",
      options: ["`q = 1`, siden ingen elementer er $\\le$ pivoten 12", "`q = 5`, siden pivoten allerede står på siste plass i delen", "`q = 3`, siden pivoten havner omtrent midt i arrayet", "`q = 2`, siden nøyaktig ett element er mindre enn pivoten"],
      explanation: "Pivoten 12 er minst, testen `A[j] <= x` er usann hver runde, `i` blir liggende på `p - 1 = 0`, og siste bytte setter pivoten på plass 1. Alternativet `q = 5` ville betydd at pivoten var størst — den motsatte ytterligheten.",
    },
    {
      question: "Hvilken egenskap ved `Insertion-Sort` gjør den brukbar som **siste** steg i en kombinasjon?",
      options: ["At den er $\\Theta(n)$ på input som allerede er sortert", "At den er stabil og derfor ikke ødelegger rekkefølgen fra det første steget", "At den går på stedet og slipper hjelpeplass", "At den er $\\Theta(n\\lg n)$ forventet uansett hvordan inputen ser ut"],
      explanation: "Er arrayet sortert fra før, gjør den indre while-løkka null runder, og totalen blir lineær. Stabilitet og plassforbruk er reelle egenskaper ved algoritmen, men det er inputfølsomheten kombinasjonsspørsmålet handler om.",
    },
    {
      question: "Hva er kjøretiden til `Counting-Sort` når nøklene er heltall opp til $k = n^2$?",
      options: ["$\\Theta(n^2)$, siden leddet $k$ dominerer summen $n + k$", "$\\Theta(n)$, siden algoritmen uansett bare går gjennom arrayet et fast antall ganger", "$\\Theta(n\\lg n)$, som for enhver korrekt sortering", "$\\Theta(n^3)$, siden telletabellen må gjennomløpes én gang per element i arrayet"],
      explanation: "$\\Theta(n + n^2) = \\Theta(n^2)$ — nullstillingen og oppsummeringen av `C` alene koster $\\Theta(k)$. Her ville `Merge-Sort` med $\\Theta(n\\lg n)$ vært langt bedre, og det er nettopp derfor betingelsen $k = O(n)$ må stå i svaret.",
    },
    {
      question: "Hva skal du gjøre hvis en håndkjøringsoppgave gir deg en input som ikke oppfyller algoritmens vanlige forutsetning?",
      options: ["Utføre trinnene mekanisk slik pseudokoden sier, og levere det du får", "Reparere inputen først, slik at algoritmen kjører under riktige betingelser", "Svare at oppgaven ikke lar seg løse fordi forutsetningen er brutt i inputen", "Velge en annen algoritme som ikke stiller den forutsetningen til inputen"],
      explanation: "Oppgaven spør etter hva algoritmen faktisk gjør, ikke hva den ville gjort under ideelle betingelser. Å reparere først er felle #10 — du får da et annet svar enn det oppgaven etterspør, og hele deloppgaven ryker.",
    },
    {
      question: "Hvilke to sorteringer gir en betingelsesfri garanti på $\\Theta(n\\lg n)$?",
      options: ["`Merge-Sort` og `Heapsort`", "`Quicksort` og `Randomized-Quicksort`", "`Counting-Sort` og `Radix-Sort`", "`Quicksort` og `Heapsort`"],
      explanation: "Begge er tette i begge retninger og stiller ingen krav til nøklene. Paret som inneholder `Quicksort` faller fordi den bare gir en forventning, med $\\Theta(n^2)$ i verste tilfelle, og de lineære sorteringene har garantier som avhenger av $k$ og $d$.",
    },
    {
      question: "Etter `Partition` er høyresiden `71, 67, 53`. Hva forteller det deg?",
      options: ["Ingenting galt — `Partition` lover ikke at sidene er sortert, bare at de er $>$ pivoten", "At du har gjort en feil, siden høyresiden alltid skal være sortert stigende etterpå", "At pivoten må ha vært det største elementet i hele delen som ble partisjonert", "At algoritmen har brutt sammen, siden invarianten krever stigende rekkefølge"],
      explanation: "Postbetingelsen sier bare hvilken side hvert element havner på; rekkefølgen innenfor sidene er vilkårlig. Å «rette opp» ved å sortere sidene gjør et riktig svar galt.",
    },
    {
      question: "Hva er sluttilstanden når `Radix-Sort` har kjørt to av tre runder på tresifrede tall?",
      options: ["Arrayet er sortert etter de to minst signifikante sifrene under ett", "Arrayet er sortert etter de to mest signifikante sifrene under ett", "Arrayet er sortert etter hele nøkkelen, men bare for tallene med to siffer", "Arrayet er uendret, siden ingenting er avgjort før den siste runden er kjørt"],
      explanation: "Invarianten er at etter runde $i$ er arrayet sortert etter de $i$ minst signifikante sifrene. Alternativet om de mest signifikante beskriver den motsatte varianten av algoritmen, som krever rekursiv oppdeling og er en annen algoritme.",
    },
    {
      question: "Hvilken sortering ville du valgt for 5 millioner poster med nøkler i $[0..1000]$?",
      options: ["`Counting-Sort`, siden $k$ er langt mindre enn $n$ og kjøretiden blir $\\Theta(n)$", "`Quicksort`, siden den går på stedet og har små konstanter i praksis", "`Merge-Sort`, siden den er den eneste med en tett garanti på $\\Theta(n\\lg n)$", "`Insertion-Sort`, siden nøkkelområdet er så lite at inputen nesten er sortert"],
      explanation: "Nøklene er heltall i et kjent, lite område — nøyaktig forutsetningen, og $\\Theta(n + 1001) = \\Theta(n)$. Et lite nøkkelområde gjør ikke inputen sortert; det gir bare mange like nøkler, og `Insertion-Sort` ville fortsatt vært kvadratisk.",
    },
    {
      question: "En oppgave ber om arrayet etter **runde 3** i `Insertion-Sort`. Hva leverer du?",
      options: ["Arrayet slik det ser ut når `A[1..3]` er ordnet og resten er urørt", "Det ferdig sorterte arrayet, siden det er algoritmens endelige resultat", "Arrayet etter tre bytter i den indre while-løkka, uansett hvilken runde det er", "De tre første elementene alene, siden det er dem runden har behandlet"],
      explanation: "Runde `j` plasserer `A[j]` i den sorterte venstredelen, så etter runde 3 er `A[1..3]` ordnet mens `A[4..n]` står som i input. Å levere hele det sorterte arrayet er å svare på et annet spørsmål — og det er den hyppigste kilden til tapte poeng i sjanger C.",
    },
    {
      question: "Hva er kontrollen på at telletabellen i `Counting-Sort` er riktig oppsummert?",
      options: ["Siste celle skal være lik $n$, altså antall elementer i arrayet", "Alle cellene skal ha samme verdi når oppsummeringen er ferdig utført", "Første celle skal være 0, siden ingen elementer har nøkkel under 0", "Summen av alle cellene skal være lik $n$, akkurat som etter tellingen"],
      explanation: "Etter oppsummeringen betyr `C[k]` «antall elementer med nøkkel høyst $k$», og alle elementene oppfyller det. Alternativet om summen av cellene er kontrollen for tabellen **før** oppsummeringen — etterpå er summen mye større.",
    },
    {
      question: "Hvorfor er `Merge-Sort` uegnet som **siste** steg i en kombinasjon der du vil ha $\\Theta(n\\lg n)$ totalt?",
      options: ["Den er ikke uegnet — men den er heller ikke til hjelp, siden den ikke utnytter at inputen er sortert", "Den er uegnet fordi den er ustabil og kan ødelegge rekkefølgen fra det forrige steget", "Den er uegnet fordi den krever hjelpeplass, og hjelpeplass er ikke tillatt i to steg", "Den er uegnet fordi kjøretiden hennes ganges med kjøretiden til det forrige steget"],
      explanation: "Poenget med rekkefølgen er å gi den inputfølsomme algoritmen den beste inputen, og `Merge-Sort` er ikke inputfølsom — den koster $\\Theta(n\\lg n)$ uansett. `Merge-Sort` er dessuten stabil, så alternativet om ødelagt rekkefølge er feil på to måter.",
    },
    {
      question: "Hvor mange enkeltskyv gjør `Insertion-Sort` i den indre løkka på et synkende sortert array med $n$ elementer?",
      options: ["$n(n-1)/2$ — hvert element må forbi alle de foregående", "$n-1$ — ett skyv per runde i den ytre løkka", "$0$ — den indre løkka stopper umiddelbart hver gang", "$n\\lg n$ — hvert element flyttes gjennom logaritmisk mange posisjoner"],
      explanation: "Element nummer $j$ må forbi alle $j-1$ foregående, og summen $1 + 2 + \\dots + (n-1)$ er $n(n-1)/2$ — derav $\\Theta(n^2)$. Null skyv er det motsatte tilfellet, allerede sortert input, som gir $\\Theta(n)$.",
    },
    {
      question: "Du får spørsmålet «hva er kjøretiden til `Quicksort`?» uten videre presisering. Hva svarer du?",
      options: ["$\\Theta(n^2)$ i verste tilfelle, og $\\Theta(n\\lg n)$ forventet — begge deler", "$\\Theta(n\\lg n)$, siden det er kjøretiden i det store flertallet av tilfellene", "$\\Theta(n\\lg n)$ forventet, og ikke noe mer — verste tilfelle er ikke etterspurt", "$\\Theta(n)$, siden hver partisjonering bare går gjennom arrayet én gang"],
      explanation: "«Kjøretid» uten presisering betyr verste tilfelle, men for `Quicksort` er forventningen det som gjør algoritmen interessant, så begge tallene hører med i ett kort svar. Å oppgi bare $\\Theta(n\\lg n)$ lover en garanti algoritmen ikke gir.",
    },
    {
      question: "Hvilken rekkefølge gir billigst total når du skal kjøre både `Counting-Sort` og `Insertion-Sort` på samme nøkkel?",
      options: ["`Counting-Sort` først — da er arrayet sortert, og `Insertion-Sort` blir $\\Theta(n)$", "`Insertion-Sort` først — da blir arrayet nesten sortert før den lineære sorteringen", "Rekkefølgen spiller ingen rolle, siden `Counting-Sort` er lineær uansett input", "Ingen av rekkefølgene fungerer, siden de to sorteringene krever ulike nøkkeltyper"],
      explanation: "Samme regel som for `Merge-Sort`: den inputfølsomme sorteringen skal ha en input som passer den, og da blir totalen $\\Theta(n+k) + \\Theta(n)$. Motsatt rekkefølge risikerer $\\Theta(n^2)$ i det første steget, og det leddet dominerer.",
    },
  ],
  'tdt4120-3-1': [
    {
      question: "Hva er kjøretiden til `Build-Max-Heap` på et array med $n$ elementer?",
      options: ["$\\Theta(n)$ — arbeidet summerer seg til under $2n$ fordi de fleste nodene er blader", "$\\Theta(n\\lg n)$ — det er $n/2$ kall til `Max-Heapify` som hver koster $O(\\lg n)$", "$\\Theta(n^2)$ — hver node må sammenlignes med hver av de øvrige nodene i haugen", "$\\Theta(\\lg n)$ — bare stien fra rota og ned til det dypeste bladet berøres"],
      explanation: "Halvparten av nodene er blader og gjør null arbeid, en firedel gjør høyst ett bytte, og summen $\\sum h/2^h$ konvergerer mot 2 — totalen holder seg under $2n$. Alternativet som oppgir $\\Theta(n\\lg n)$ er en gyldig øvre grense, men ikke stram, og det er fagets mest brukte kjøretidsfelle. Det er `Heapsort` som er $\\Theta(n\\lg n)$, ikke byggingen.",
    },
    {
      question: "Hva er kjøretiden til `Max-Heapify` på en haug med $n$ elementer?",
      options: ["$O(\\lg n)$, fordi elementet følger én sti fra sin egen indeks og nedover", "$O(n)$, fordi rutinen i verste fall må besøke hver eneste node i haugen", "$\\Theta(1)$, fordi den bare sammenligner et element med de to barna sine", "$O(n\\lg n)$, fordi hvert av de $n$ elementene kan måtte flyttes ett nivå"],
      explanation: "Elementet flytter seg høyst ett nivå per bytte, og haugen har $\\lfloor \\lg n\\rfloor$ nivåer, så én sti nedover koster $O(\\lg n)$. Alternativet som oppgir $\\Theta(1)$ overser at sivingen fortsetter rekursivt nedover etter hvert bytte — én sammenligningsrunde er konstant, men ikke hele kallet.",
    },
    {
      question: "Hvilken kombinasjon av egenskaper har `Heapsort`?",
      options: ["$\\Theta(n\\lg n)$, går på stedet, og er **ustabil**", "$\\Theta(n\\lg n)$, går på stedet, og er **stabil**", "$\\Theta(n\\lg n)$, trenger hjelpearray, og er **stabil**", "$\\Theta(n)$ i beste tilfelle, går på stedet, og er **ustabil**"],
      explanation: "`Heapsort` bruker bare et konstant antall hjelpevariabler, og ingen input gjør den raskere — derfor er grensen tett i begge retninger. Alternativet som kaller den stabil, er galt: på `3a, 3b, 1c` gir den `1c, 3b, 3a`, altså med de to like nøklene byttet om. Stabilitet er `Merge-Sort`s fortrinn, og det koster et hjelpearray.",
    },
    {
      question: "Hva sier haugegenskapen i en maks-haug?",
      options: ["Hver forelder er større enn eller lik begge barna sine, og søsken er uordnet", "Hver forelder er større enn eller lik venstre barn, som igjen er størst av barna", "Venstre deltre er mindre enn eller lik rota, som er mindre enn eller lik høyre", "Hele arrayet er sortert synkende, slik at det største elementet står forrest"],
      explanation: "Ordningen går bare opp og ned: $A[\\lfloor i/2\\rfloor] \\ge A[i]$ for hver $i \\ge 2$, og det står ingenting om forholdet mellom to søsken. Alternativet som krever venstre deltre mindre enn rota, beskriver søketreegenskapen — den forvekslingen er den mest fremhevede datastrukturfeilen i faget.",
    },
    {
      question: "I et array `A[1..n]` med indeks fra 1: hvor ligger forelderen til `A[i]`?",
      options: ["På indeks $\\lfloor i/2 \\rfloor$, og rota på indeks 1 har ingen forelder", "På indeks $\\lceil i/2 \\rceil$, og rota på indeks 1 er sin egen forelder", "På indeks $i - 1$, siden hvert nivå ligger rett foran det neste i arrayet", "På indeks $2i$, siden barna alltid ligger foran forelderen i arrayet"],
      explanation: "Fordi treet fylles nivå for nivå fra indeks 1, halverer man indeksen og runder ned for å komme ett nivå opp. Alternativet som oppgir $2i$, snur formelen: $2i$ er venstre **barn**, ikke forelderen. Kontrollen er alltid den samme — rota skal ikke ha noen forelder.",
    },
    {
      question: "I et array `A[1..n]` med indeks fra 1: hvor ligger barna til `A[i]`?",
      options: ["Venstre barn på $2i$ og høyre barn på $2i+1$, når indeksene er $\\le n$", "Venstre barn på $\\lfloor i/2\\rfloor$ og høyre barn på $\\lfloor i/2\\rfloor + 1$, når indeksene er $\\ge 1$", "Venstre barn på $i+1$ og høyre barn på $i+2$, når indeksene er $\\le n$", "Venstre barn på $2i$ og høyre barn på $2i+1$, uansett hvor stor $n$ er"],
      explanation: "Med rot på indeks 1 dobles indeksen for å komme ett nivå ned, og høyre barn ligger rett etter venstre. Alternativet som dropper kravet om at indeksen skal være $\\le n$, er den farlige: en node med $2i > n$ er et blad, og en sammenligning der leser utenfor haugen. Alternativet med $\\lfloor i/2\\rfloor$ snur relasjonen: det er forelderens formel brukt som barnas. Halvering fører oppover i treet, dobling nedover.",
    },
    {
      question: "Hvor i en gyldig maks-haug ligger det største elementet, og hva koster det å lese det?",
      options: ["På `A[1]`, og det koster $\\Theta(1)$ fordi ingen leting er nødvendig der", "På `A[n]`, og det koster $\\Theta(1)$ fordi haugen fylles nivå for nivå", "I et av bladene, og det koster $\\Theta(n)$ fordi alle bladene må sjekkes", "På `A[1]`, men det koster $O(\\lg n)$ fordi rota må verifiseres nedover"],
      explanation: "Haugegenskapen gir at rota er større enn eller lik alt under seg, så maksimum har en garantert plass og oppslaget er konstant. Alternativet som plasserer maksimum i et blad, beskriver derimot hvor **minimum** kan ligge — å finne det minste i en maks-haug koster $\\Theta(n)$.",
    },
    {
      question: "Hvilket av disse arrayene er en gyldig maks-haug med indeks fra 1?",
      options: ["`48, 35, 40, 12, 30, 21, 9`", "`48, 35, 40, 12, 30, 44, 9`", "`9, 12, 21, 30, 35, 40, 48`", "`48, 40, 35, 44, 30, 21, 9`"],
      explanation: "I det riktige arrayet gjelder $48 \\ge 35, 40$, deretter $35 \\ge 12, 30$ og $40 \\ge 21, 9$ — ingen brudd. Alternativet `48, 35, 40, 12, 30, 44, 9` bryter i `A[3]=40` mot venstre barn `A[6]=44`, og det stigende sorterte arrayet har det minste elementet i rota, som aldri kan være en maks-haug for $n \\ge 2$.",
    },
    {
      question: "Hvilket barn bytter `Max-Heapify` med når begge barna er større enn forelderen?",
      options: ["Det **største** av de to barna, uansett om det står til venstre eller høyre", "Det **venstre** barnet, siden haugen alltid fylles fra venstre mot høyre", "Det **minste** av de to barna, slik at det største blir liggende lengst ned", "Begge barna etter tur, slik at hele deltreet blir gjennomgått i ett kall"],
      explanation: "Løftes det største opp, er det garantert større enn eller lik begge de andre to, og bruddet er borte i denne noden. Alternativet som velger venstre barn, gir feil svar hver gang høyre barn er størst — og det er nettopp den forvekslingen som skjer når man tar med seg søketreets venstre-før-høyre-tenkning inn i en haug.",
    },
    {
      question: "Hvilken indeks starter for-løkka i `Build-Max-Heap` på, og hvilken vei teller den?",
      options: ["På $\\lfloor n/2 \\rfloor$, og den teller **nedover** mot indeks 1", "På $\\lfloor n/2 \\rfloor$, og den teller **oppover** mot indeks $n$", "På indeks 1, og den teller **oppover** mot indeks $\\lfloor n/2 \\rfloor$", "På indeks $n$, og den teller **nedover** mot indeks $\\lfloor n/2 \\rfloor$"],
      explanation: "Alle indekser over $\\lfloor n/2 \\rfloor$ er blader og allerede gyldige hauger, og nedover er eneste retning som oppfyller `Max-Heapify`s krav om at deltrærne under er i orden. Alternativet som teller oppover, bryter nettopp den prebetingelsen, og resultatet blir en haug som er riktig på toppen og ødelagt lenger nede.",
    },
    {
      question: "Hvorfor er den løse analysen «$n/2$ kall à $O(\\lg n)$» ikke stram for `Build-Max-Heap`?",
      options: ["Fordi de fleste nodene ligger nederst og siver kort, ikke gjennom hele høyden", "Fordi de fleste nodene ligger øverst og derfor bare kan sive svært kort ned", "Fordi `Max-Heapify` er $\\Theta(1)$ og ikke $O(\\lg n)$ når haugen er ferdig bygd", "Fordi løkka bare kalles $\\lg n$ ganger, ikke $n/2$ ganger, i en ferdig haug"],
      explanation: "Analysen later som om hvert kall koster maksimalt, mens halvparten av nodene er blader med null arbeid og bare de få nodene nær rota har full høyde å sive gjennom. Alternativet som sier at de fleste nodene ligger øverst, snur fordelingen på hodet — antallet noder halveres for hvert nivå du går oppover.",
    },
    {
      question: "Du kaller `Heap-Extract-Max` på et array som **ikke** er en gyldig maks-haug. Hva returneres?",
      options: ["`A[1]`, uansett om det er det største elementet i haugen eller ikke", "Det største elementet, siden rutinen leter gjennom haugen først", "En feilmelding, siden rutinens prebetingelse er brutt av inputen", "`A[1]`, men først etter at `Build-Max-Heap` har reparert arrayet"],
      explanation: "Pseudokoden leser `A[1]` og kontrollerer aldri at rota faktisk er maksimum — den eneste testen er om haugen er tom. Alternativet som først reparerer med `Build-Max-Heap`, beskriver et annet spørsmål enn det oppgaven stiller, og gir en annen slutthaug enn den mekaniske kjøringen.",
    },
    {
      question: "Hva koster det å finne det **minste** elementet i en maks-haug med $n$ elementer?",
      options: ["$\\Theta(n)$, fordi det kan ligge hvor som helst blant bladene", "$\\Theta(1)$, fordi det minste elementet alltid ligger på `A[n]`", "$O(\\lg n)$, fordi man følger stien nedover mot venstre fra rota", "$O(\\lg n)$, fordi det minste ligger i det dypeste bladet"],
      explanation: "Haugegenskapen lover bare at maksimum ligger i rota; om det minste ligger i det ene eller andre bladet sier den ingenting om, så alle bladene må sjekkes. Alternativet som oppgir `A[n]`, forveksler «siste plass i arrayet» med «minste verdi» — det er tilfeldig hva som står der.",
    },
    {
      question: "Hva er høyden til en maks-haug med $n$ elementer, målt i antall kanter fra rota?",
      options: ["$\\lfloor \\lg n \\rfloor$, fordi treet fylles nivå for nivå uten hull", "$\\lceil n/2 \\rceil$, fordi omtrent halvparten av nodene er blader", "$n - 1$, fordi haugen i verste fall kan degenerere til en kjede", "$\\lfloor \\lg n \\rfloor + 1$, fordi rota også teller som et eget nivå"],
      explanation: "Fordi hvert nivå fylles helt før det neste begynner, er høyden den lavest mulige for $n$ noder, og det er grunnen til at alle stiene opp og ned er $O(\\lg n)$. Alternativet $n-1$ beskriver et degenerert tre — det kan skje i et binært søketre, men aldri i en haug, som per konstruksjon er fylt nivå for nivå.",
    },
    {
      question: "`Heapsort` kalles på arrayet `3a, 3b, 1c`, der tallet er nøkkelen. Hva blir resultatet?",
      options: ["`1c, 3b, 3a` — de to like nøklene har byttet innbyrdes rekkefølge", "`1c, 3a, 3b` — de to like nøklene beholder sin innbyrdes rekkefølge", "`1c, 3a, 3b` — fordi byggefasen aldri bytter to elementer med lik nøkkel", "`3a, 3b, 1c` — fordi arrayet allerede er en gyldig maks-haug fra start"],
      explanation: "Byggefasen gjør ingenting, siden testen i `Max-Heapify` er strengt større enn; deretter bytter sorteringsfasen `A[1]` med `A[3]` og flytter `3a` forbi `3b`. Alternativet `1c, 3a, 3b` er nettopp det en **stabil** sortering ville gitt, og forskjellen er hele grunnen til at `Heapsort` regnes som ustabil.",
    },
    {
      question: "Hvilken egenskap ved `A.heap-size` er avgjørende under håndkjøring av `Heapsort`?",
      options: ["Den krymper med én per runde, så halen bakerst er ute av sammenligningene", "Den er alltid lik arrayets lengde, så hele arrayet er med i sammenligningene", "Den vokser med én per runde, så halen bakerst kommer inn i sammenligningene", "Den halveres for hver runde, så haugen tømmes etter $\\lg n$ runder totalt"],
      explanation: "Hver runde legger det største elementet bakerst og tar det ut av haugen, slik at `Max-Heapify` etterpå bare ser den delen som fortsatt er en haug. Alternativet som sier at `A.heap-size` alltid er lik arrayets lengde, ville latt reparasjonen sammenligne med ferdigsorterte elementer, og da blir sluttarrayet feil.",
    },
  ],
  'tdt4120-3-2': [
    {
      question: "Et tre har rot 46, venstre barn 25, og 25 har høyre barn 50. Hvilken regel er brutt?",
      options: ["Søketreegenskapen — 50 ligger i rotas venstre deltre, men er større enn 46", "Ingen — 25 er mindre enn 46, og 50 er større enn 25, så alt stemmer", "Haugegenskapen — forelderen 25 er mindre enn barnet 50 i dette treet", "Balansekravet — venstre deltre er dypere enn høyre deltre etter innsettingen"],
      explanation: "Søketreegenskapen gjelder **hele** deltreet, ikke bare det nærmeste barnet, og alt til venstre for 46 må derfor være $\\le 46$. Kontrollen er inorder: den ville gitt `25, 50, 46`, som ikke er sortert — og et søketre uten balansekrav er helt lovlig, så det er ikke der feilen ligger.",
    },
    {
      question: "Hva gir `Inorder-Tree-Walk` på et binært søketre?",
      options: ["Nøklene i **sortert** rekkefølge, i $\\Theta(n)$ tid", "Nøklene i den rekkefølgen de ble satt inn, i $\\Theta(n)$ tid", "Nøklene nivå for nivå ovenfra og ned, i $\\Theta(n)$ tid", "Nøklene i sortert rekkefølge, men bare i $O(h)$ tid"],
      explanation: "Venstre deltre skrives ut før noden og høyre deltre etter, og søketreegenskapen gjør at det gir stigende rekkefølge. Innsettingsrekkefølgen er ikke lagret noe sted i treet — bare formen bærer spor av den, og den kan ikke leses av som en liste.",
    },
    {
      question: "Hva er kjøretiden til `Tree-Insert`?",
      options: ["$O(h)$, der $h$ er treets høyde — innsettingen følger én sti nedover", "$\\Theta(\\lg n)$, siden treet halverer søkeområdet i hvert eneste steg", "$\\Theta(n)$, siden alle nodene må sammenlignes med den nye nøkkelen", "$O(1)$, siden den nye noden bare henges på som et blad til slutt"],
      explanation: "Løkka går ett nivå ned per runde og gjør konstant arbeid, så kostnaden er begrenset av høyden. Svaret $\\Theta(\\lg n)$ forutsetter et balansert tre, og ingenting i søketreegenskapen garanterer det — høyden kan bli $n-1$.",
    },
    {
      question: "Hva blir høyden hvis du setter inn `8, 15, 23, 34, 42, 56` i et tomt søketre i denne rekkefølgen?",
      options: ["$h = 5$ — hver innsetting går til høyre, og treet blir en lenket liste", "$h = 2$ — treet blir balansert siden nøklene er jevnt fordelt i verdi", "$h = 3$ — treet blir nesten balansert, med ett ekstra nivå til høyre", "$h = 6$ — én node per nivå, og seks noder gir seks nivåer i alt"],
      explanation: "Hver ny nøkkel er større enn alle de foregående, så innsettingen går til høyre hele veien, og høyden blir $n-1 = 5$. Høyde måles i **kanter**, ikke i noder — en kjede med seks noder har fem kanter fra rota til det dypeste bladet.",
    },
    {
      question: "Hva er kjøretiden til `Inorder-Tree-Walk`?",
      options: ["$\\Theta(n)$ — hver node besøkes nøyaktig én gang, uansett treets form", "$O(h)$ — traverseringen følger den lengste stien fra rota og nedover", "$\\Theta(n\\lg n)$ — utskriften er sortert, og sortering koster minst så mye", "$\\Theta(\\lg n)$ — bare stien ned til det dypeste bladet må gjennomløpes"],
      explanation: "Alle nøklene skal skrives ut, så arbeidet er proporsjonalt med antall noder, og grensen er tett i begge retninger. At utskriften er sortert, koster ingenting ekstra — ordenen ligger allerede i treets struktur.",
    },
    {
      question: "Hvor ligger den minste nøkkelen i et binært søketre?",
      options: ["Helt til venstre — følg `left`-pekerne til de tar slutt", "I rota, siden søketreegenskapen ordner nøklene ovenfra og ned", "Helt til høyre — følg `right`-pekerne til de tar slutt", "I et vilkårlig blad — treet sier ingenting om hvor minimum ligger"],
      explanation: "Søketreegenskapen sier at alt til venstre for en node er mindre, så den minste nøkkelen har ingen venstre barn. Alternativet «vilkårlig blad» beskriver en **maks-haug**, der minimum kan ligge hvor som helst blant bladene og krever $\\Theta(n)$ leting.",
    },
    {
      question: "To studenter setter inn de samme nøklene i ulik rekkefølge. Hva blir likt?",
      options: ["`Inorder-Tree-Walk`-utskriften — den avhenger bare av hvilke nøkler treet inneholder", "Treets form — søketreegenskapen bestemmer entydig hvor hver nøkkel skal ligge", "Treets høyde — antall noder bestemmer hvor dypt treet må bli, uansett rekkefølge", "Rotas nøkkel — det er alltid medianen av nøklene som havner øverst i treet"],
      explanation: "Inorder gir den sorterte rekkefølgen, og den er den samme uansett hvordan nøklene ble ordnet underveis. Formen, høyden og rota avhenger derimot fullstendig av innsettingsrekkefølgen — rota er alltid den **først** innsatte nøkkelen.",
    },
    {
      question: "Hva er forventet høyde for et søketre bygget med $n$ nøkler i tilfeldig rekkefølge?",
      options: ["$\\Theta(\\lg n)$ forventet, men $\\Theta(n)$ i verste tilfelle", "$\\Theta(\\lg n)$ garantert, uansett hvilken rekkefølge nøklene kommer i", "$\\Theta(n)$ forventet, siden de fleste rekkefølger gir skjeve trær", "$\\Theta(\\sqrt{n})$ forventet, som et kompromiss mellom de to ytterpunktene"],
      explanation: "Forventningen er over alle innsettingsrekkefølger, og den sier ingenting om det enkelte treet ditt. Å svare $\\Theta(\\lg n)$ på et spørsmål om **verste** tilfelle er derfor galt — sortert input gir en kjede med høyde $n-1$.",
    },
    {
      question: "Hvilken traversering starter alltid med rotas nøkkel?",
      options: ["Preorder — den skriver ut noden før begge deltrærne", "Inorder — noden kommer mellom deltrærne", "Postorder — den skriver ut noden etter begge deltrærne", "Alle tre — rota er utgangspunktet for enhver traversering"],
      explanation: "Preorder besøker noden selv først, så rota kommer alltid ut som første element. Inorder starter med den minste nøkkelen og postorder med et blad — begge besøker rota, men skriver den ikke ut først.",
    },
    {
      question: "Du bygger et søketre av $n$ tall og skriver dem ut med inorder. Hva er verste kjøretid?",
      options: ["$\\Theta(n^2)$, når tallene kommer sortert og treet blir en kjede", "$\\Theta(n\\lg n)$, siden det er den nedre grensen for all sortering", "$\\Theta(n)$, siden traverseringen alene bestemmer den totale kjøretiden", "$\\Theta(n\\lg n)$ forventet, og det er også garantien i verste tilfelle"],
      explanation: "På sortert input går innsetting nummer $j$ helt ned til bunnen av en kjede med $j-1$ noder, og summen $1 + 2 + \\dots + (n-1)$ er kvadratisk. Traverseringen er riktignok $\\Theta(n)$, men den kommer i tillegg til byggingen — og det er byggingen som dominerer.",
    },
    {
      question: "Hva er kjøretiden til `Tree-Search` i et degenerert søketre med $n$ noder?",
      options: ["$\\Theta(n)$, siden høyden er $n-1$ og søket må helt ned", "$\\Theta(\\lg n)$, siden hver sammenligning utelukker halve treet", "$\\Theta(1)$, siden kjeden gjennomløpes direkte", "$\\Theta(n\\lg n)$, siden hver node må sammenlignes med alle de andre"],
      explanation: "Søk er $O(h)$, og i et degenerert tre er $h = n-1$, så et søk etter det dypeste elementet berører hver eneste node. Alternativet som lover $\\Theta(\\lg n)$ forutsetter balanse, og det er nettopp det en kjede ikke har.",
    },
    {
      question: "Hvor havner en ny nøkkel som settes inn med `Tree-Insert`?",
      options: ["Som et blad, på den plassen et søk etter nøkkelen ville stoppet", "I rota, slik at den nyeste nøkkelen alltid er raskest å finne igjen", "På det nivået som gjør treet mest balansert etter innsettingen", "Som forelder til den noden som har den nærmeste nøkkelverdien"],
      explanation: "Løkka følger nøyaktig samme sti som et søk ville fulgt, og henger noden på der stien tar slutt. Ingen eksisterende node flyttes — det er derfor treet ikke rebalanserer seg selv, og derfor formen avhenger helt av innsettingsrekkefølgen.",
    },
    {
      question: "Hvilket utsagn om maks-haug mot binært søketre stemmer?",
      options: ["Maksimum koster $\\Theta(1)$ i en maks-haug og $O(h)$ i et søketre", "Minimum koster $\\Theta(1)$ i en maks-haug og $O(h)$ i et søketre", "Begge strukturene gir sortert utskrift i $\\Theta(n)$ tid uten videre arbeid", "Begge strukturene garanterer at høyden holder seg på $\\Theta(\\lg n)$ nivåer"],
      explanation: "En maks-haug har alltid maksimum på `A[1]`, mens søketreet må helt ut til høyre. Minimum er derimot det motsatte: $O(h)$ i søketreet, men $\\Theta(n)$ i haugen, siden det kan ligge i hvilket som helst blad.",
    },
    {
      question: "Et tre har rot 50, venstre barn 30, og 30 har høyre barn 60. Er det et binært søketre?",
      options: ["Nei — 60 ligger i rotas venstre deltre, men er større enn 50", "Ja — 30 er mindre enn 50, og 60 er større enn 30, så begge reglene holder", "Ja — søketreegenskapen gjelder bare mellom en node og dens direkte barn", "Nei — treet er ubalansert"],
      explanation: "Egenskapen gjelder hele deltreet: alt til venstre for 50 må være $\\le 50$, og 60 bryter det selv om forholdet mellom 30 og 60 er riktig. Kontrollen er inorder — den ville gitt `30, 60, 50`, som ikke er sortert.",
    },
    {
      question: "Hvilket svarformat forventes på «sett inn disse nøklene og oppgi resultatet»?",
      options: ["`Inorder-Tree-Walk`-utskriften, og rotverdien hvis den er spurt om", "En tegning av hele treet med alle nodene og pekerne inntegnet", "Innsettingsrekkefølgen på nytt, som bekreftelse på at alt kom med", "Antall sammenligninger hver innsetting krevde, oppsummert til slutt"],
      explanation: "Sluttilstanden for et søketre leveres som inorder-linja — det er den entydige formen, og den er lett å rette. En tegning gir ikke ekstra uttelling med mindre oppgaven ber om den, og den tar tid nitten andre oppgaver trenger.",
    },
    {
      question: "Hvorfor er søketreoperasjonene oppgitt som $O(h)$ og ikke $\\Theta(h)$?",
      options: ["Fordi et søk kan stoppe tidlig, for eksempel med én gang i rota", "Fordi høyden $h$ ikke er kjent på forhånd, og $\\Theta$ krever en kjent grense", "Fordi $O$ alltid brukes om datastrukturer, mens $\\Theta$ brukes om algoritmer", "Fordi operasjonene i praksis er raskere enn høyden skulle tilsi i store trær"],
      explanation: "$\\Theta$ krever at grensen er tett i begge retninger, og her finnes input som er langt billigere enn $h$ — et søk etter rotas nøkkel koster konstant tid. `Inorder-Tree-Walk` er derimot $\\Theta(n)$, nettopp fordi den aldri kan slippe billigere unna.",
    },
  ],
  'tdt4120-3-3': [
    {
      question: "Du kjører `Build-Max-Heap` på $A[1..5] = \\langle 3,\\ 9,\\ 2,\\ 8,\\ 5 \\rangle$ (indeks fra 1). Hva blir arrayet etterpå?",
      options: ["$\\langle 9,\\ 8,\\ 2,\\ 3,\\ 5 \\rangle$", "$\\langle 9,\\ 8,\\ 5,\\ 3,\\ 2 \\rangle$", "$\\langle 9,\\ 5,\\ 2,\\ 8,\\ 3 \\rangle$", "$\\langle 8,\\ 9,\\ 2,\\ 3,\\ 5 \\rangle$"],
      explanation: "Løkka går fra $i = \\lfloor 5/2 \\rfloor = 2$ ned til 1. Ved $i = 2$ er 9 allerede større enn barna 8 og 5, så ingenting skjer. Ved $i = 1$ bytter 3 med det største barnet 9, og den siver videre ned og bytter med 8. Det sorterte svaret er en vanlig felle: en maks-haug er ikke et sortert array, bare et array der hver forelder er størst i sitt eget par.",
    },
    {
      question: "Maks-haugen $A[1..5] = \\langle 9,\\ 8,\\ 2,\\ 3,\\ 5 \\rangle$ har `A.heap-size` $=5$. Hva blir tilstanden etter **én** iterasjon av sorteringsløkka i `Heapsort`?",
      options: ["$\\langle 8,\\ 5,\\ 2,\\ 3,\\ 9 \\rangle$ med `A.heap-size` $=4$", "$\\langle 8,\\ 5,\\ 2,\\ 3,\\ 9 \\rangle$ med `A.heap-size` $=5$", "$\\langle 2,\\ 3,\\ 5,\\ 8,\\ 9 \\rangle$ med `A.heap-size` $=0$", "$\\langle 5,\\ 8,\\ 2,\\ 3,\\ 9 \\rangle$ med `A.heap-size` $=4$"],
      explanation: "Iterasjonen bytter $A[1]$ og $A[5]$, krymper haugen til 4 og kaller `Max-Heapify(A, 1)`: 5 siver ned og bytter med 8. Haugstørrelsen er en del av svaret, ikke en detalj — uten den kan ikke sensor se at 9 er lagt utenfor haugen. Det ferdigsorterte arrayet er svaret på hele `Heapsort`, ikke på én iterasjon.",
    },
    {
      question: "Arrayet $A[1..5] = \\langle 4,\\ 9,\\ 7,\\ 1,\\ 3 \\rangle$ er **ikke** en maks-haug, men `A.heap-size` $=5$. Du kjører `Heap-Extract-Max(A)`. Hva blir arrayet og haugstørrelsen?",
      options: ["$\\langle 9,\\ 3,\\ 7,\\ 1,\\ 3 \\rangle$ med `A.heap-size` $=4$", "$\\langle 9,\\ 4,\\ 7,\\ 1,\\ 3 \\rangle$ med `A.heap-size` $=4$", "$\\langle 7,\\ 3,\\ 4,\\ 1,\\ 9 \\rangle$ med `A.heap-size` $=4$", "$\\langle 9,\\ 4,\\ 7,\\ 1,\\ 3 \\rangle$ med `A.heap-size` $=5$"],
      explanation: "Algoritmen kjøres mekanisk: $A[1]$ leses av, det siste haugelementet 3 flyttes til rota, haugen krymper til 4, og `Max-Heapify(A, 1)` bytter 3 med det største barnet 9. Å kjøre `Build-Max-Heap` først for å «reparere» inputen er felle #10 — da svarer du på en annen oppgave, og både returverdien og sluttarrayet blir andre.",
    },
    {
      question: "Nøklene $50,\\ 30,\\ 70,\\ 20,\\ 40,\\ 60,\\ 80$ settes inn i den rekkefølgen med `Tree-Insert` i et tomt binært søketre. Hva skriver `Inorder-Tree-Walk` ut?",
      options: ["$20,\\ 30,\\ 40,\\ 50,\\ 60,\\ 70,\\ 80$", "$50,\\ 30,\\ 70,\\ 20,\\ 40,\\ 60,\\ 80$", "$50,\\ 30,\\ 20,\\ 40,\\ 70,\\ 60,\\ 80$", "$20,\\ 40,\\ 30,\\ 60,\\ 80,\\ 70,\\ 50$"],
      explanation: "`Inorder-Tree-Walk` besøker venstre deltre, noden selv og så høyre deltre, og resultatet er derfor alltid sortert stigende — uansett hvilken rekkefølge nøklene ble satt inn i. Det er samtidig kontrollen din: kommer tallene ikke stigende, har du satt inn feil vei et sted. Utskriften som gjengir innsettingsrekkefølgen, er preorder, og den bakerste er postorder.",
    },
    {
      question: "Nøklene $8,\\ 3,\\ 10,\\ 1,\\ 6,\\ 14,\\ 4,\\ 7,\\ 13$ settes inn i den rekkefølgen i et tomt søketre. Hvilken nøkkel er forelder til 7?",
      options: ["6", "3", "8", "4"],
      explanation: "7 sammenlignes med 8 (går til venstre), så med 3 (går til høyre), så med 6 (går til høyre) — og der er høyre barn ledig, så 7 blir hengt på 6. Nøkkelen 4 ligger som venstre barn av 6 og er dermed søsken til 7, ikke forelder.",
    },
    {
      question: "Hva sier søketreegenskapen?",
      options: ["Alt i venstre deltre er mindre enn eller lik noden, og alt i høyre deltre er større enn eller lik den — for hver node", "Venstre barn er mindre enn eller lik noden, og høyre barn er større enn eller lik den — kravet gjelder bare de to barna", "Hver forelder er større enn eller lik begge barna sine, og det finnes ingen orden mellom to søsken i treet", "Nøklene ligger i innsettingsrekkefølge langs stien fra rota, slik at rota alltid er den først innsatte nøkkelen"],
      explanation: "Kravet gjelder hele deltrær, ikke bare de to barna: et tre der hver node bare er ordnet mot sine egne barn, kan bryte egenskapen lenger nede. Beskrivelsen med forelder over begge barn og ingen orden mellom søsken, er haugegenskapen — å blande de to er felle #2 og den dyreste enkeltfeilen i denne drillen.",
    },
    {
      question: "Hva skal svaret inneholde når en oppgave ber om **én** iterasjon av `Heapsort`?",
      options: ["Hele arrayet etter iterasjonen, med haugstørrelsen oppgitt i tillegg", "Hele det ferdigsorterte arrayet, siden `Heapsort` alltid kjøres til ende", "Bare det elementet som ble lagt på plass bakerst i arrayet i denne runden", "En tegning av haugen som tre, siden treet er den offisielle representasjonen"],
      explanation: "Det ferdigsorterte elementet ligger igjen bakerst og er en del av svaret, og haugstørrelsen viser hvor grensen mellom haug og sortert hale går. Den vanligste tabben er å kjøre hele sorteringen når bare én iterasjon ble etterspurt — da har du brukt tid på noe som ikke gir uttelling. Treet er et hjelpemiddel underveis, ikke svaret; arrayet er den offisielle representasjonen.",
    },
    {
      question: "Hva skal svaret inneholde når en oppgave ber om tilstanden til en maks-haug etter en operasjon?",
      options: ["Hele arrayet, kommaseparert og med indeks fra 1 — pluss haugstørrelsen hvis den er endret", "Bare de indeksene som faktisk ble endret av operasjonen, siden resten er uendret fra før", "En tegning av treet med nøklene i nodene, siden det er slik haugen er ment å leses", "Rotelementet alene, siden det er det eneste haugegenskapen sier noe entydig om"],
      explanation: "Arrayet er den offisielle representasjonen, og et delvis riktig array gir delvis uttelling — et tomt svarfelt gir ingenting. Å bare oppgi de endrede indeksene tvinger sensor til å rekonstruere resten, og et tegnet tre er et arbeidsverktøy underveis, ikke svarformatet.",
    },
    {
      question: "Hva gjør `Tree-Maximum`, og hva koster det?",
      options: ["Følger høyre barn så langt det går og returnerer nøkkelen der; $O(h)$ med $h$ som treets høyde", "Følger venstre barn så langt det går og returnerer nøkkelen der; $O(h)$ med $h$ som treets høyde", "Går gjennom alle nodene og holder styr på den største nøkkelen underveis; $\\Theta(n)$", "Leser av rotnoden, siden den største nøkkelen alltid ligger i rota; $\\Theta(1)$"],
      explanation: "Søketreegenskapen garanterer at alt større ligger til høyre, så du trenger aldri se på venstre side. Å lese av rota er haugens regel, ikke søketreets — i et søketre er rota bare den først innsatte nøkkelen. Svaret er også alltid det siste tallet i `Inorder-Tree-Walk`-utskriften.",
    },
    {
      question: "Kan du lese innsettingsrekkefølgen ut av `Inorder-Tree-Walk`-utskriften?",
      options: ["Nei — utskriften er alltid sortert, og informasjonen om rekkefølgen er borte når treet først er bygget", "Ja — utskriften gjengir nøklene i den rekkefølgen de ble satt inn, siden hver node henges på som blad", "Ja, men bare når treet er balansert; i et skjevt tre er sammenhengen mellom de to rekkefølgene brutt", "Nei — men rotnoden alene røper hele rekkefølgen, siden hver innsetting flytter rota ett hakk videre"],
      explanation: "Mange ulike innsettingsrekkefølger gir samme sorterte utskrift, så avbildningen kan ikke snus. Rotnoden røper riktignok hvilken nøkkel som kom først — `Tree-Insert` flytter aldri en eksisterende node — men resten av rekkefølgen er tapt. En preorder-utskrift ville derimot bevart nok til å rekonstruere treet.",
    },
    {
      question: "Hva er kjøretiden til `Inorder-Tree-Walk` på et søketre med $n$ noder?",
      options: ["$\\Theta(n)$ — hver node besøkes nøyaktig én gang", "$O(h)$ — bare én sti gjennom treet følges", "$\\Theta(n\\lg n)$ — sorteringen av utskriften koster", "$\\Theta(\\lg n)$ — utskriften følger treets høyde"],
      explanation: "Gjennomløpet berører hver node én gang og gjør konstant arbeid per node, uansett hvordan treet er formet. At utskriften kommer sortert, koster ingenting ekstra: sorteringen ligger allerede i treets struktur, den utføres ikke underveis. $O(h)$ er kostnaden for `Tree-Search`, `Tree-Minimum` og `Tree-Maximum`, som følger én sti.",
    },
    {
      question: "Hvor mange kall til `Max-Heapify` gjør selve for-løkka i `Build-Max-Heap` på et array med 9 elementer?",
      options: ["4", "9", "5", "8"],
      explanation: "Løkka går fra $i = \\lfloor 9/2 \\rfloor = 4$ og nedover til 1, altså for $i = 4, 3, 2, 1$. Indeksene 5 til 9 er blader og trenger ingen behandling — de er hauger på ett element hver. Rekursive kall inne i `Max-Heapify` kommer i tillegg, men de er ikke løkkas kall.",
    },
    {
      question: "Hvor mange blader har en maks-haug med $n = 9$ elementer, og hvilke indekser har de?",
      options: ["5 blader, på indeksene 5 til 9", "4 blader, på indeksene 6 til 9", "5 blader, på indeksene 1 til 5", "3 blader, på indeksene 7 til 9"],
      explanation: "En node har barn nøyaktig når $2i \\le n$, altså for $i \\le \\lfloor 9/2 \\rfloor = 4$ — resten er blader. Det er også grunnen til at `Build-Max-Heap` starter på indeks $\\lfloor n/2 \\rfloor$: alt fra og med $\\lfloor n/2 \\rfloor + 1$ er allerede gyldige hauger på ett element.",
    },
    {
      question: "Er et array som er sortert **synkende**, alltid en gyldig maks-haug?",
      options: ["Ja — hver forelder står foran begge barna sine i arrayet og er derfor minst like stor", "Nei — haugegenskapen krever i tillegg at treet er komplett, og et sortert array er ikke det", "Nei — et synkende array bryter kravet om at det ikke skal være orden mellom to søsken", "Ja, men bare når $n$ er en potens av 2, slik at det siste nivået i treet blir helt fullt"],
      explanation: "Forelderen til $i$ ligger på $\\lfloor i/2 \\rfloor < i$, og i et synkende sortert array er alt som står tidligere, større eller likt — så $A[\\lfloor i/2\\rfloor] \\ge A[i]$ holder for hver $i$. Haugegenskapen **forbyr** ikke orden mellom søsken, den bare krever den ikke. Og et array-basert tre er komplett per konstruksjon, uansett hva $n$ er.",
    },
    {
      question: "I en gyldig maks-haug med 7 elementer: hvor kan det nest største elementet ligge?",
      options: ["I $A[2]$ eller $A[3]$ — det må være et av rotas to barn", "I $A[2]$ — venstre barn er alltid det nest største i haugen", "Hvor som helst utenom $A[1]$ — haugegenskapen sier ingenting mer", "I $A[6]$ eller $A[7]$ — de største elementene siver ned mot bunnen"],
      explanation: "Alt som ligger under en node, er mindre eller likt den, så det nest største kan ikke ha noen forelder utenom rota — og da må det stå i et av rotas barn. Hvilket av de to som er størst, sier haugegenskapen ingenting om: det finnes ingen orden mellom søsken, og derfor kan svaret ikke snevres inn til $A[2]$.",
    },
    {
      question: "Hva koster det å avgjøre om et gitt array $A[1..n]$ er en gyldig maks-haug?",
      options: ["$\\Theta(n)$ — hver indeks sammenlignes med forelderen sin én gang", "$\\Theta(n\\lg n)$ — hver indeks må følges opp hele stien til rota", "$O(\\lg n)$ — det holder å sjekke stien fra rota ned til det dypeste bladet", "$\\Theta(n^2)$ — hvert par av elementer må sammenlignes med hverandre"],
      explanation: "Kontrollen er én sammenligning per indeks fra 2 til $n$: er $A[\\lfloor i/2 \\rfloor] \\ge A[i]$? Å følge hele stien til rota for hver node er unødvendig, fordi transitiviteten allerede er sikret når hvert forelder–barn-par holder. Å sjekke bare én sti finner ikke brudd som ligger i en annen gren.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom haugegenskapen og søketreegenskapen?",
      options: ["Haugen ordner oppover uten orden mellom søsken; søketreet ordner sidelengs gjennom hele deltrær", "Haugen ordner sidelengs gjennom hele deltrær; søketreet ordner oppover uten orden mellom søsken", "Haugen krever et komplett tre, mens søketreet krever at treet er balansert etter hver innsetting", "Haugen lagres alltid i et array, mens søketreet per definisjon aldri kan lagres i et array"],
      explanation: "Haugen sier bare noe om forhold mellom en node og barna dens, og ingenting om venstre mot høyre — derfor er en maks-haug ikke sortert. Søketreet sier tvert imot alt om venstre mot høyre, gjennom hele deltrær, og derfor kommer `Inorder-Tree-Walk` sortert. Å bytte om de to er felle #2.",
    },
    {
      question: "Hvor plasserer `Tree-Insert` en ny nøkkel?",
      options: ["Som et nytt blad, funnet ved å følge én sti fra rota; ingen eksisterende node flyttes", "I rota, slik at den sist innsatte nøkkelen alltid ligger øverst i treet", "På den plassen som holder treet balansert, ved å rotere noder underveis ved behov", "I det deltreet som har færrest noder, slik at høyden holdes så lav som mulig"],
      explanation: "Algoritmen sammenligner seg nedover til den treffer en `NIL`-peker og henger noden på der. Ingen rebalansering skjer — det er derfor rekkefølgen nøklene kommer i, avgjør treets form, og derfor rota alltid er den først innsatte nøkkelen.",
    },
    {
      question: "Du setter inn $1, 2, 3, \\ldots, n$ i stigende rekkefølge i et tomt binært søketre. Hva blir høyden, og hva koster den siste innsettingen?",
      options: ["Høyde $n-1$, og den siste innsettingen koster $\\Theta(n)$", "Høyde $\\lfloor \\lg n \\rfloor$, og den siste innsettingen koster $\\Theta(\\lg n)$", "Høyde $n-1$, men den siste innsettingen koster likevel bare $\\Theta(\\lg n)$", "Høyde $\\lfloor \\lg n \\rfloor$, fordi `Tree-Insert` balanserer treet underveis"],
      explanation: "Hver ny nøkkel er større enn alt som er satt inn før, så den havner lengst til høyre — treet degenererer til en lenket liste av høyde $n-1$, og siste innsetting følger hele kjeden. $O(h)$-grensene for søketreoperasjoner er derfor bare $O(\\lg n)$ når treet tilfeldigvis er balansert; `Tree-Insert` gjør ingenting for å sikre det.",
    },
    {
      question: "Hva er den vanligste disiplinfeilen i en håndkjøringsoppgave (sjanger C)?",
      options: ["Å levere mer enn det oppgaven ba om — for eksempel hele sorteringen når bare ett steg var etterspurt", "Å levere for lite forklaring, siden sensor trenger å se resonnementet bak hvert enkelt bytte", "Å bruke en sporingstavle underveis, siden bare den endelige tilstanden skal stå på arket", "Å tegne haugen som tre før du begynner, siden arrayet er den offisielle representasjonen"],
      explanation: "Sjangeren krever et korrekt resultat i riktig format og ingen forklaring — ekstra arbeid gir ikke uttelling, men koster tid du trenger andre steder. Sporingstavlen og tretegningen er derimot anbefalte arbeidsverktøy: de skal bare ikke være det du leverer.",
    },
  ],
  'tdt4120-3-4': [
    {
      question: "Hva er lastfaktoren $\\alpha$ i en hashtabell?",
      options: ["$\\alpha = n/m$ — antall lagrede nøkler delt på antall bøtter, altså snittlengden på en kjede", "$\\alpha = m/n$ — antall bøtter delt på antall lagrede nøkler, altså hvor romslig tabellen er", "$\\alpha$ = lengden på den lengste kjeden i tabellen, altså det verste tilfellet for et søk", "$\\alpha$ = andelen bøtter som er i bruk, et tall mellom 0 og 1 som måler fyllingsgraden"],
      explanation: "$\\alpha$ er gjennomsnittlig antall nøkler per bøtte, og den kan godt være større enn 1 — legger du 30 nøkler i 10 bøtter, er $\\alpha = 3$. Derfor er beskrivelsen «andel bøtter i bruk» feil: den ville låst $\\alpha$ til intervallet fra 0 til 1. Den lengste kjeden er et verste-tilfelle-mål, ikke et gjennomsnitt.",
    },
    {
      question: "Hva er forventet søketid i en hashtabell med kjeding?",
      options: ["$\\Theta(1+\\alpha)$ — én hashutregning pluss gjennomgang av kjeden i bøtta", "$\\Theta(\\alpha)$ — bare gjennomgangen av kjeden teller, siden hashingen er gratis", "$\\Theta(1)$ — hashfunksjonen peker rett på nøkkelen uansett hvor mange nøkler som er lagret", "$\\Theta(\\lg n)$ — kjedene holdes sorterte, slik at hver bøtte kan gjennomsøkes binært"],
      explanation: "Ettallet er hashutregningen og oppslaget i tabellen, og $\\alpha$ er den forventede kjedelengden — begge må med, for er $\\alpha$ nær null, koster søket likevel den ene hashutregningen. Uttrykket forutsetter enkel uniform hashing. Kjedene holdes ikke sortert; de er lenkede lister som gjennomsøkes lineært.",
    },
    {
      question: "Hva er søketiden i en hashtabell med kjeding i **verste** tilfelle?",
      options: ["$\\Theta(n)$ — alle nøklene kan ha havnet i den samme bøtta", "$\\Theta(1+\\alpha)$ — den forventede tiden er samtidig et tak på den verste", "$\\Theta(\\lg n)$ — kjedene kan aldri bli lengre enn tabellens høyde tillater", "$\\Theta(m)$ — i verste fall må hver eneste bøtte i tabellen undersøkes"],
      explanation: "Ingenting hindrer en hashfunksjon i å sende alle $n$ nøklene til samme bøtte, og da er tabellen degenerert til én lenket liste. $\\Theta(1+\\alpha)$ gjelder **forventet** tid under enkel uniform hashing, ikke verste tilfelle — å blande de to er den vanligste feilen i et hashing-svar. Et søk ser dessuten bare på én bøtte, aldri på alle.",
    },
    {
      question: "Hva er kjøretiden til `Chained-Hash-Insert`, og hva gjør operasjonen?",
      options: ["$O(1)$ — den legger elementet fremst i kjeden og sjekker ikke om nøkkelen finnes fra før", "$O(1)$ — den legger elementet bakerst i kjeden etter å ha gått gjennom hele lista først", "$\\Theta(1+\\alpha)$ — den må gå gjennom kjeden for å sjekke at nøkkelen ikke er der allerede", "$O(\\lg n)$ — den setter elementet inn på riktig plass i den sorterte kjeden i bøtta"],
      explanation: "Innsetting fremst i en lenket liste er konstant arbeid, og det er nettopp fordi rutinen ikke leter etter duplikater at den er $O(1)$ i verste tilfelle. Skulle den garantere unike nøkler, måtte den søke først, og da ville den arvet søketiden $\\Theta(1+\\alpha)$.",
    },
    {
      question: "Hva er antagelsen om enkel uniform hashing?",
      options: ["At hver nøkkel er like sannsynlig å havne i hver av de $m$ bøttene, uavhengig av de andre nøklene", "At hashfunksjonen aldri sender to ulike nøkler til den samme bøtta, slik at kollisjoner ikke oppstår", "At nøklene som skal lagres, er trukket uniformt fra hele universet av mulige nøkkelverdier", "At alle bøttene inneholder nøyaktig like mange nøkler når alle innsettingene er gjennomført"],
      explanation: "Antagelsen handler om **fordelingen** hashfunksjonen gir, og den er forutsetningen bak $\\Theta(1+\\alpha)$. Den lover ikke at kollisjoner uteblir — kollisjoner er uunngåelige når universet er større enn $m$ — og den garanterer heller ikke et jevnt resultat i den enkelte kjøringen, bare i forventning.",
    },
    {
      question: "Hvilken verdi av $m$ bør unngås i divisjonsmetoden $h(k) = k \\bmod m$?",
      options: ["En potens av 2 — da ser $h$ bare på de nederste bitene i nøkkelen og ignorerer resten", "Et primtall — primtall gir uheldige rester når nøklene er jevnt fordelt over universet", "Et oddetall — oddetall gir systematisk skjeve rester for nøkler som selv er partall", "En verdi som er større enn antall nøkler $n$ — da blir tabellen unødig glissen og treg"],
      explanation: "Er $m = 2^p$, blir $k \\bmod m$ nøyaktig de $p$ nederste bitene i $k$, og all struktur lenger opp i nøkkelen kastes bort. Anbefalingen er tvert imot et primtall som ligger langt fra en toerpotens. Og $m > n$ er helt greit — det holder bare $\\alpha$ lav.",
    },
    {
      question: "Hvorfor er kollisjoner uunngåelige i en hashtabell?",
      options: ["Fordi universet av mulige nøkler er større enn antall bøtter, så to nøkler må dele bøtte", "Fordi hashfunksjoner er tilfeldige, og tilfeldigheten gjør at treff av og til faller sammen", "Fordi lastfaktoren alltid overstiger 1 i praksis, og da har hver bøtte mer enn én nøkkel", "Fordi lenkede lister ikke kan holdes sortert, og usorterte lister får overlappende nøkler"],
      explanation: "Argumentet er rent teoretisk: en funksjon fra en stor mengde til en liten kan ikke være injektiv. Derfor må enhver hashtabell ha en strategi for kollisjoner — kjeding eller åpen adressering. Lastfaktoren kan godt være under 1 og likevel gi kollisjoner, og selve hashfunksjonen er deterministisk, ikke tilfeldig.",
    },
    {
      question: "Hvor mye plass bruker en hashtabell med kjeding?",
      options: ["$\\Theta(m+n)$ — selve tabellen med $m$ bøtter, pluss de $n$ lagrede nøklene", "$\\Theta(m)$ — bare selve tabellen teller, siden nøklene ligger utenfor den", "$\\Theta(n)$ — bare de lagrede nøklene teller, siden tomme bøtter ikke bruker plass", "$\\Theta(mn)$ — hver bøtte må ha plass til alle nøklene i verste tilfelle"],
      explanation: "Både arrayet av bøtter og listeelementene må betales for, og de to leddene legges sammen. Tomme bøtter bruker plass akkurat som fulle — det er nettopp derfor $m$ ikke bør velges vilkårlig stort. En bøtte er dessuten en peker til en liste, ikke et forhåndsreservert område for alle nøkler.",
    },
    {
      question: "Under hvilke forutsetninger er `Chained-Hash-Delete` en $O(1)$-operasjon?",
      options: ["Når kjedene er dobbeltlenkede og elementet allerede er funnet, slik at bare pekerne må kobles om", "Når kjedene er enkeltlenkede, siden en enkeltlenket liste har færre pekere å oppdatere", "Når tabellen er stor nok til at lastfaktoren er under 1, slik at hver kjede har høyst ett element", "Alltid — sletting er den eneste hashoperasjonen som er konstant i alle tilfeller"],
      explanation: "Med en dobbeltlenket liste kjenner elementet både forgjengeren og etterfølgeren sin, og fjerningen er ren pekermanipulasjon. I en enkeltlenket liste må du først finne forgjengeren, og da arver du søketiden. Har du bare nøkkelen og ikke elementet, må du dessuten søke først — og det koster $\\Theta(1+\\alpha)$.",
    },
    {
      question: "Nøklene $10,\\ 22,\\ 31,\\ 4,\\ 15,\\ 28$ settes inn i en tabell $T[0..6]$ med $h(k) = k \\bmod 7$. Hvor mange bøtter blir stående tomme?",
      options: ["3", "2", "4", "0"],
      explanation: "Restene er $10 \\to 3$, $22 \\to 1$, $31 \\to 3$, $4 \\to 4$, $15 \\to 1$ og $28 \\to 0$, så bøttene 0, 1, 3 og 4 er i bruk — fire av sju. De tomme er 2, 5 og 6. At seks nøkler bare treffer fire bøtter, er kollisjonene i praksis: bøtte 1 og bøtte 3 har to nøkler hver.",
    },
    {
      question: "Hva må gjelde for at forventet søketid i en hashtabell skal være $\\Theta(1)$?",
      options: ["At $\\alpha$ holdes konstant, altså at $m$ vokser proporsjonalt med $n$ etter hvert som nøkler kommer inn", "At $m$ holdes fast mens $n$ vokser, slik at tabellen fylles og bøttene brukes effektivt", "At hashfunksjonen er injektiv på de nøklene som faktisk lagres, slik at ingen kjede blir lengre enn én", "At nøklene settes inn i sortert rekkefølge, slik at kjedene bygges opp jevnt fra bunnen av"],
      explanation: "$\\Theta(1+\\alpha)$ er konstant nøyaktig når $\\alpha = n/m$ er begrenset av en konstant, og det krever at antall bøtter følger antall nøkler — i praksis ved å doble tabellen når den blir for full. Holdes $m$ fast, vokser $\\alpha$ lineært med $n$, og søket blir lineært. Innsettingsrekkefølgen påvirker ingenting, siden hver nøkkel plasseres av $h$ alene.",
    },
    {
      question: "Hva mister du ved å velge en hashtabell framfor et binært søketre?",
      options: ["Den sorterte rekkefølgen — spørsmål som «minste nøkkel» eller «alle nøkler mellom 10 og 20» blir dyre", "Konstant forventet søketid — et søketre gir raskere oppslag enn en hashtabell for store datamengder", "Muligheten til å sette inn nye nøkler etter at strukturen er bygget, siden tabellstørrelsen er låst", "Garantien mot duplikater — et søketre nekter å lagre den samme nøkkelen to ganger, en hashtabell ikke"],
      explanation: "Hashfunksjonen sprer nøklene med vilje, så all informasjon om orden er borte: å finne minimum krever gjennomgang av hele tabellen, mens et søketre gjør det på $O(h)$. Til gjengjeld er hashtabellens forventede oppslag $\\Theta(1)$ mot søketreets $O(h)$ — det er hashtabellen som er raskest, og det er nettopp derfor byttet er verdt det når du bare skal slå opp.",
    },
    {
      question: "Hva er fordelen med multiplikasjonsmetoden framfor divisjonsmetoden?",
      options: ["Verdien av $m$ er ikke kritisk — den kan gjerne være en toerpotens, som gjør utregningen rask", "Den unngår kollisjoner helt, siden multiplikasjon sprer nøklene jevnere enn divisjon gjør", "Den gir sortert rekkefølge i bøttene, slik at hver kjede kan gjennomsøkes binært etterpå", "Den krever ingen hashutregning i det hele tatt, siden nøkkelen brukes direkte som indeks"],
      explanation: "Metoden ganger nøkkelen med en konstant, tar brøkdelen og skalerer opp til $m$ — og fordi spredningen kommer fra multiplikasjonen, står du fritt til å velge et $m$ som er lett å regne med. Ingen hashfunksjon kan unngå kollisjoner så lenge universet er større enn $m$. Å bruke nøkkelen direkte som indeks er `Counting-Sort`s idé, ikke hashing.",
    },
    {
      question: "«En hashtabell med kjeding gir $O(1)$ søk i verste tilfelle.» Stemmer dette?",
      options: ["Nei — verste tilfelle er $\\Theta(n)$; det er det **forventede** søket som er $\\Theta(1+\\alpha)$", "Ja — hashfunksjonen regnes ut på konstant tid, og oppslaget i tabellen er ett arrayoppslag", "Ja — men bare når lastfaktoren holdes under 1, som er standardantagelsen i faget", "Nei — verste tilfelle er $\\Theta(\\lg n)$, siden kjedene aldri blir lengre enn treets høyde"],
      explanation: "Havner alle nøklene i samme bøtte, må søket gå gjennom hele kjeden, og det er lineært. Hashutregningen er riktignok konstant, men den er bare det første av to steg. Formuleringen «$O(1)$ i verste tilfelle» er nettopp den påstanden en sjanger F-oppgave er ute etter at du avviser — og retterlinjen krever at du sier hvilket tilfelle uttrykket faktisk gjelder for.",
    },
  ],
  'tdt4120-3-5': [
    {
      question: "Hva er svarformatet når en oppgave ber om sluttilstanden til en sirkulær FIFO-kø?",
      options: ["Hele tabellen `Q[1..n]` inkludert døde celler, pluss `head` og `tail`", "Bare de elementene som faktisk står i køen, lest fra `head` og framover", "Bare `head` og `tail`, siden tabellinnholdet kan utledes av de to", "Hele tabellen, men med de døde cellene erstattet av tomme plasser"],
      explanation: "`Dequeue` sletter aldri noe — den flytter bare `head` — så de gamle verdiene står igjen i minnet og er en del av tilstanden. Å levere bare den logiske køen er felle #3, køfeil ved håndkjøring, og det er den hyppigste kilden til tapte poeng i denne sjangeren.",
    },
    {
      question: "Hva skjer med tabellen når `Dequeue` kjøres på en sirkulær kø?",
      options: ["Ingenting — bare `head` flytter seg ett hakk fram", "Cellen `head` peker på, nullstilles, og `head` flytter seg ett hakk fram", "Alle elementene flyttes ett hakk fram, slik at køen alltid starter i `Q[1]`", "Cellen `head` peker på, byttes med cellen `tail` peker på, og begge flyttes"],
      explanation: "Pseudokoden leser verdien, flytter indeksen og returnerer — ingen skriving skjer. Alternativet om at alle elementene flyttes, beskriver en naiv kø uten sirkulær indeksering, og den ville kostet $\\Theta(n)$ per uttak i stedet for $\\Theta(1)$.",
    },
    {
      question: "Hva betyr det at `Table-Insert` er **amortisert** $O(1)$?",
      options: ["At $n$ innsettinger til sammen koster $O(n)$, selv om enkelte koster $\\Theta(n)$", "At hver enkelt innsetting koster $O(1)$, uansett hvor full tabellen er", "At forventet kostnad er $O(1)$ når innsettingene kommer i tilfeldig rekkefølge", "At kostnaden er $O(1)$ i beste tilfelle, mens verste tilfelle er $\\Theta(n)$"],
      explanation: "Garantien gjelder totalen for serien, ikke den enkelte operasjonen — doblingene koster under $2n$ til sammen. Amortisert er heller ikke det samme som forventet: ingen sannsynlighet er involvert, og garantien gjelder verste tilfelle for hele serien.",
    },
    {
      question: "En dynamisk tabell vokser med **ett** element om gangen i stedet for å doble. Hva blir amortisert kostnad?",
      options: ["$\\Theta(n)$ per innsetting, siden totalen blir $\\Theta(n^2)$", "$O(1)$ per innsetting, siden hver enkelt utvidelse er billigere enn en dobling", "$O(\\lg n)$ per innsetting, siden antall utvidelser vokser logaritmisk", "$\\Theta(1)$ per innsetting, siden bare ett element kopieres hver gang"],
      explanation: "Nå må hver eneste innsetting kopiere alt som ligger der fra før, og $1 + 2 + \\dots + n = \\Theta(n^2)$ delt på $n$ gir $\\Theta(n)$. Poenget er generelt: en multiplikativ vekstfaktor gir amortisert $O(1)$, mens enhver fast additiv økning gir amortisert $\\Theta(n)$.",
    },
    {
      question: "Hva returnerer `Find-Set(x)`?",
      options: ["Rota i treet `x` ligger i — altså mengdens representant", "Antall elementer i den mengden `x` ligger i for øyeblikket", "Forelderen til `x`, altså den noden `x.p` peker direkte på", "Den minste nøkkelen i den mengden `x` tilhører i skogen"],
      explanation: "Løkka følger `p`-pekerne til den treffer en node som peker på seg selv, og den noden står for hele mengden. To elementer ligger i samme mengde nøyaktig når `Find-Set` gir samme svar for begge — det er hele testen `MST-Kruskal` bruker.",
    },
    {
      question: "Når økes `rank` i `Link`?",
      options: ["Bare når de to røttene har **lik** rang før sammenslåingen", "Ved hver `Union`, siden treet blir ett nivå dypere hver gang", "Bare når den ene rota har strengt høyere rang enn den andre", "Aldri — `rank` settes i `Make-Set` og endres ikke etterpå"],
      explanation: "Er rangene ulike, henges den laveste under den høyeste, og treets høyde endrer seg ikke — derfor er det ingen grunn til å øke noe. Bare når to like høye trær settes sammen, kan høyden faktisk vokse med ett.",
    },
    {
      question: "Hva er kjøretiden til `Enqueue` på en sirkulær FIFO-kø med $n$ plasser?",
      options: ["$\\Theta(1)$ — noen få indeksregninger, uansett antall elementer", "$\\Theta(n)$ — alle elementene må flyttes ett hakk", "$O(\\lg n)$ — køen holdes ordnet, og innsettingen søker seg til riktig plass", "$\\Theta(1)$ amortisert, men $\\Theta(n)$ i verste tilfelle ved wraparound"],
      explanation: "Operasjonen skriver i én celle og oppdaterer én indeks; wraparound er bare en test og en tilordning. At kostnaden er konstant også i verste tilfelle, er nettopp grunnen til at den sirkulære varianten brukes framfor å skyve elementene fram.",
    },
    {
      question: "Hva er `Link` sitt krav til argumentene sine?",
      options: ["At begge er **røtter** — derfor kaller `Union` `Find-Set` på begge først", "At begge har samme rang, slik at det er entydig hvem som skal bli ny rot", "At begge ligger i samme mengde, slik at sammenslåingen er meningsfull", "At begge er blader, slik at ingen eksisterende pekere blir ødelagt"],
      explanation: "Rutinen setter `p`-pekeren til den ene noden, og det gir bare mening hvis noden står for hele sitt tre. Å henge et element midt i treet under en annen rot er en vanlig håndkjøringsfeil — resten av elementet sitt tre blir da hengende feil.",
    },
    {
      question: "Hvorfor må en sirkulær kø ha wraparound?",
      options: ["Fordi køen ellers går tom for plass bakerst selv om det er ledige celler foran", "Fordi `head` og `tail` ellers ville kunne peke på nøyaktig samme celle samtidig", "Fordi `Dequeue` ellers måtte flytte alle elementene ett hakk fram i arrayet", "Fordi tabellen ellers måtte dobles hver gang den siste cellen ble brukt"],
      explanation: "Uten wraparound vandrer køen bakover i arrayet og treffer enden, mens cellene foran `head` står ubrukte. At `head` og `tail` kan møtes er ikke et problem — det er nettopp slik en tom kø kjennes igjen.",
    },
    {
      question: "Hva er forskjellen mellom **amortisert** og **forventet** kjøretid?",
      options: ["Amortisert er et snitt over en serie uten sannsynlighet; forventet er et snitt over tilfeldige valg", "Amortisert gjelder verste tilfelle for én enkelt operasjon; forventet gjelder gjennomsnittet av dem alle", "Amortisert brukes om datastrukturer, mens forventet brukes om sorteringsalgoritmer", "Amortisert er en øvre grense, mens forventet alltid er en tett grense i begge retninger"],
      explanation: "`Table-Insert` er amortisert $O(1)$ fordi totalen for serien er $O(n)$ — det er ingen terning inne i bildet. `Randomized-Quicksort` er derimot forventet $\\Theta(n\\lg n)$, og der er gjennomsnittet tatt over algoritmens egne tilfeldige trekk.",
    },
    {
      question: "Hvilken struktur brukes til å avgjøre om en kant ville lagd en syklus i `MST-Kruskal`?",
      options: ["En disjunkt-mengde-struktur — kanten forkastes hvis `Find-Set` gir samme rot for begge endene", "En maks-haug — kanten forkastes hvis begge endepunktene ligger i det samme deltreet under rota", "Et binært søketre — kanten forkastes hvis begge endepunktene har samme nøkkel", "En FIFO-kø — kanten forkastes hvis begge endepunktene allerede står i køen"],
      explanation: "Komponentene i spenntreet under bygging er nettopp disjunkte mengder, og to endepunkter i samme mengde betyr at kanten lukker en ring. Dette er hovedgrunnen til at `Union-Find` hører hjemme i pensum — se [kap. 4.2](/tdt4120/tdt4120-4-2).",
    },
    {
      question: "En stakk `S[1..5]` er tom. Etter `Push(4)`, `Push(9)`, `Pop`, `Push(7)` — hva er `S.top`?",
      options: ["`S.top = 2`, og `S[1..2] = 4, 7`", "`S.top = 3`, og `S[1..3] = 4, 9, 7`", "`S.top = 1`, og `S[1..1] = 4`", "`S.top = 2`, og `S[1..2] = 9, 7`"],
      explanation: "To `Push` løfter `top` til 2, `Pop` senker den til 1, og den siste `Push` løfter den til 2 igjen og skriver 7 over den gamle verdien i `S[2]`. Alt over `top` er ugyldig, så den overskrevne 9-eren er borte.",
    },
    {
      question: "Hvorfor er `Find-Set` $O(\\lg n)$ og ikke $O(1)$?",
      options: ["Fordi den følger én sti opp til rota, og rangheuristikken gir høyde $O(\\lg n)$", "Fordi den må sammenligne `x` med alle elementene i mengden for å finne rota", "Fordi den sorterer elementene i mengden før den kan peke ut representanten", "Fordi den må slå opp i en tabell over alle mengdene, og tabellen er sortert"],
      explanation: "Kostnaden er høyden på treet `x` ligger i, og rangheuristikken sørger for at høyden holder seg logaritmisk. Uten heuristikken kunne treet blitt en kjede med høyde $n-1$, og da ville oppslaget vært $\\Theta(n)$.",
    },
    {
      question: "Når er en sirkulær FIFO-kø tom?",
      options: ["Når `head == tail`", "Når `head == 1` og `tail == 1`", "Når `tail` $<$ `head`", "Når alle cellene i `Q[1..n]` er uten verdi"],
      explanation: "Køen inneholder elementene fra `head` og rundt til, men ikke med, `tail`, og det intervallet er tomt når de to indeksene faller sammen. Cellenes innhold sier ingenting: en tom kø kan godt ha døde verdier i alle cellene.",
    },
    {
      question: "Hva er kjøretiden til `Table-Insert` for **én** innsetting i verste tilfelle?",
      options: ["$\\Theta(n)$ — den innsettingen som utløser en dobling, må kopiere alt", "$O(1)$ — kostnaden er amortisert konstant, og det gjelder hver operasjon", "$O(\\lg n)$ — antall doblinger opp til $n$ er logaritmisk i antall elementer", "$\\Theta(n^2)$ — hele tabellen må både allokeres og kopieres på nytt"],
      explanation: "Når `T.num == T.size`, allokeres en ny tabell og alle elementene flyttes over, og det er lineært arbeid. At den amortiserte kostnaden er $O(1)$, motsier ikke dette — de to tallene svarer på hvert sitt spørsmål, og fellen er å oppgi det ene der det andre er etterspurt.",
    },
    {
      question: "Hva er en «død celle» i en sirkulær kø?",
      options: ["En celle med en gammel verdi som ligger utenfor intervallet fra `head` til `tail`", "En celle som aldri har vært skrevet i siden køen ble opprettet og tatt i bruk", "En celle som `tail` har passert uten å skrive noe i den underveis", "En celle som inneholder samme verdi som en annen celle i samme kø"],
      explanation: "`Dequeue` flytter bare `head`, så verdien blir liggende igjen selv om elementet er tatt ut av køen. Slike celler er en del av tilstanden og skal med i svaret på en håndkjøring — det er nettopp det felle #3 handler om.",
    },
  ],
  'tdt4120-4-1': [
    {
      question: "Hvor mye plass bruker en nabomatrise og en naboliste for en graf med $V$ noder og $E$ kanter?",
      options: ["Nabomatrisen $\\Theta(V^2)$ uansett antall kanter, nabolista $\\Theta(V+E)$", "Nabomatrisen $\\Theta(V+E)$, nabolista $\\Theta(V^2)$ på grunn av pekerne", "Begge $\\Theta(V^2)$, siden begge må kunne representere alle mulige kanter", "Begge $\\Theta(V+E)$, siden begge lagrer nøyaktig de kantene som finnes"],
      explanation: "Matrisen reserverer én celle for hvert nodepar enten kanten finnes eller ikke, mens nabolista bare lagrer de kantene som faktisk er der, pluss ett listehode per node. Det er nettopp derfor nabolista er standardvalget i glisne grafer: med $E$ langt under $V^2$ er forskjellen enorm.",
    },
    {
      question: "Hva koster spørsmålet «finnes det en kant fra $u$ til $v$?» i de to representasjonene?",
      options: ["$O(1)$ i nabomatrise; tid proporsjonal med graden til $u$ i naboliste", "$O(1)$ i begge, siden begge representasjonene indekseres direkte på nodenummer", "Tid proporsjonal med graden til $u$ i nabomatrise; $O(1)$ i naboliste", "$\\Theta(V)$ i nabomatrise; $\\Theta(E)$ i naboliste, siden begge må gjennomsøkes"],
      explanation: "Matrisen er et todimensjonalt array, så oppslaget er ett indeksoppslag. Nabolista må derimot gå gjennom lista til $u$ til den finner $v$ eller er slutt. Dette er hele argumentet for matrisen: den er rask på **kantoppslag**, mens lista er rask på «gå gjennom naboene til $u$».",
    },
    {
      question: "Når er nabomatrisen det riktige valget?",
      options: ["Når grafen er tett, altså når $E$ nærmer seg $V^2$, og algoritmen gjør mange kantoppslag", "Når grafen er glissen, altså når $E$ er langt mindre enn $V^2$, og plass er en knapp ressurs", "Når grafen er rettet, siden nabolister bare kan representere urettede grafer på en entydig måte", "Når grafen er vektet, siden en naboliste ikke har noe sted å lagre vekten på en kant"],
      explanation: "Er nesten alle kanter til stede, går det ikke mye plass til spille, og til gjengjeld får du konstante kantoppslag. Nabolista håndterer både rettede og vektede grafer helt fint — vekten lagres sammen med naboen i lista. Det er tettheten, ikke retningen eller vektene, som avgjør valget.",
    },
    {
      question: "Hva er kjøretiden til `BFS`, og hva står `v.d` for etterpå?",
      options: ["$\\Theta(V+E)$, og `v.d` er antall **kanter** i den korteste stien fra kilden til $v$", "$\\Theta(V+E)$, og `v.d` er den samlede **vekten** av den korteste stien fra kilden til $v$", "$\\Theta(V^2)$, og `v.d` er antall kanter i den korteste stien fra kilden til $v$", "$\\Theta(E\\lg V)$, og `v.d` er tidspunktet noden ble oppdaget under gjennomløpet"],
      explanation: "Hver node settes i køen én gang, og hver nabolisteoppføring leses én gang, så totalen er lineær i grafens størrelse. `BFS` teller kanter og ser ikke på vekter i det hele tatt — det er derfor den bare gir korteste vei når alle kantene er like tunge. Discover-tid er `DFS`-begrepet, og der brukes `u.d` om noe helt annet.",
    },
    {
      question: "En vektet graf har kanter med ulik vekt. Gir `BFS` fra $s$ den billigste veien til hver node?",
      options: ["Nei — `BFS` minimerer antall kanter, ikke samlet vekt, og de to kan gi helt ulike stier", "Ja — `BFS` finner alltid den korteste veien, og korteste vei er den samme som billigste vei", "Ja, forutsatt at alle vektene er positive; det er bare negative vekter `BFS` ikke tåler", "Nei — men `BFS` gir riktig svar hvis du kjører den én gang for hver mulige startnode"],
      explanation: "En sti med to dyre kanter kan koste mer enn en sti med fem billige, og `BFS` vil velge den med to. Algoritmen leser aldri vektene, så fortegnet på dem er uten betydning — og å kjøre den flere ganger endrer ingenting. Skal vektene med, må du bruke `Dijkstra`, `Bellman-Ford` eller `DAG-Shortest-Path`.",
    },
    {
      question: "Hvilken hjelpestruktur bruker `BFS`, og hvilken bruker `DFS`?",
      options: ["`BFS` bruker en FIFO-kø; `DFS` bruker en stakk, i praksis rekursjonsstakken", "`BFS` bruker en stakk; `DFS` bruker en FIFO-kø som holder nodene i oppdagelsesrekkefølge", "Begge bruker en prioritetskø, men `BFS` sorterer på avstand og `DFS` sorterer på finish-tid", "`BFS` bruker en FIFO-kø; `DFS` bruker en prioritetskø sortert på nodenes discover-tid"],
      explanation: "Køen er grunnen til at `BFS` går lagvis: den noden som ble oppdaget først, behandles først. Stakken gjør det motsatte for `DFS` — den siste oppdagede utforskes videre, og det er nettopp derfor søket går i dybden. Ingen av de to bruker prioritetskø; det gjør `Dijkstra` og `MST-Prim`.",
    },
    {
      question: "Hva er finish-tiden `u.f` i `DFS`?",
      options: ["Tidspunktet `DFS` ble ferdig med $u$ og alt som ligger under $u$ i dybdesøket", "Tidspunktet noden $u$ ble oppdaget for aller første gang og farget grå av dybdesøket", "Antall kanter i den korteste stien fra startnoden fram til noden $u$", "Antall noder som fortsatt er hvite når `DFS` forlater noden $u$ for godt"],
      explanation: "Klokka tikker to ganger per node: én gang når den oppdages (`u.d`) og én gang når hele deltreet under den er utforsket (`u.f`). Rekkefølgen på finish-tidene er nøkkelen til topologisk sortering, og det er derfor forvekslingen med discover-tid er en så dyr feil.",
    },
    {
      question: "Hvordan avgjør du med `DFS` om en rettet graf inneholder en sykel?",
      options: ["Grafen har en sykel nøyaktig når `DFS` finner minst én tilbakekant; testen koster $\\Theta(V+E)$", "Grafen har en sykel nøyaktig når `DFS` finner minst én krysskant; testen koster $\\Theta(V+E)$", "Grafen har en sykel nøyaktig når to noder får samme finish-tid; testen koster $\\Theta(V\\lg V)$", "Grafen har en sykel nøyaktig når `DFS` må startes på nytt fra mer enn én node; testen koster $\\Theta(V^2)$"],
      explanation: "En tilbakekant går til en node som fortsatt er grå, altså en node søket ennå ikke er ferdig med — og da finnes en sti tilbake, som er nøyaktig en sykel. Krysskanter og forlengs kanter går til ferdige noder og betyr ingenting for syklusspørsmålet. At `DFS` må startes flere steder, betyr bare at grafen ikke er nåbar fra én node.",
    },
    {
      question: "Hva er en krysskant i en `DFS`-skog?",
      options: ["En kant til en node som allerede er ferdig, og som ikke er en etterkommer av noden du står i", "En kant til en node som fortsatt er grå, altså en node søket ennå ikke har gjort seg ferdig med", "En kant til en etterkommer i det samme dybdetreet, men ikke til et direkte barn av noden", "En kant mellom to noder som begge fortsatt er hvite når `DFS` oppdager forbindelsen mellom dem"],
      explanation: "Krysskanter går på tvers — enten mellom to ulike dybdetrær eller mellom to grener i samme tre — og målnoden er alltid svart. Kanten til en grå node er en tilbakekant, den til en etterkommer er en forlengs kant. En kant kan aldri gå til en hvit node uten at den noden blir oppdaget og kanten blir en trekant.",
    },
    {
      question: "Hva er en topologisk sortering av en rettet graf?",
      options: ["En lineær rekkefølge av nodene der hver kant $(u,v)$ har $u$ før $v$ i rekkefølgen", "En lineær rekkefølge av nodene sortert etter inn-grad, med de laveste inn-gradene først", "En lineær rekkefølge av nodene der hver kant $(u,v)$ har $v$ før $u$, altså motsatt av kantretningen", "En oppdeling av nodene i lag, der hvert lag inneholder de nodene som har samme avstand fra kilden"],
      explanation: "Kravet er at ingen kant peker bakover i lista — det er dette som gjør rekkefølgen brukbar som arbeidsplan. Å sortere etter inn-grad alene gir ingen slik garanti, og en oppdeling i lag etter avstand er `BFS`-resultatet, som er noe helt annet.",
    },
    {
      question: "Hvordan produserer `Topological-Sort` rekkefølgen sin, og hva koster det?",
      options: ["Ved å kjøre `DFS` og sette hver node fremst i en liste når den ferdigstilles; $\\Theta(V+E)$", "Ved å kjøre `DFS` og legge hver node bakerst i en liste når den oppdages; $\\Theta(V+E)$", "Ved å kjøre `BFS` fra en vilkårlig node og lese av lagene i stigende rekkefølge; $\\Theta(V+E)$", "Ved å sortere nodene på finish-tid med en sammenligningssortering; $\\Theta(V\\lg V + E)$"],
      explanation: "Å sette noden fremst når den ferdigstilles, gir nodene i **synkende** finish-tid — og det er nettopp den rekkefølgen som respekterer alle kantene. Ingen egen sortering trengs, siden `DFS` produserer finish-tidene i stigende rekkefølge av seg selv, og derfor holder totalen seg lineær. Oppdagelsesrekkefølgen gir ikke en gyldig topologisk sortering.",
    },
    {
      question: "«En topologisk sortering får du ved å liste nodene etter stigende finish-tid.» Stemmer dette?",
      options: ["Nei — rekkefølgen skal være **synkende** finish-tid; stigende gir den motsatte rekkefølgen", "Ja — nodene ferdigstilles i den rekkefølgen kantene peker, så stigende finish-tid er riktig", "Nei — rekkefølgen skal være stigende **discover**-tid, altså oppdagelsesrekkefølgen fra `DFS`", "Ja, men bare når `DFS` startes i en node med inn-grad null; ellers må rekkefølgen snus"],
      explanation: "En node ferdigstilles først når alt den peker på er ferdig, så den som ferdigstilles sist, må stå først. Stigende finish-tid gir altså nøyaktig den reverserte — og ubrukelige — rekkefølgen. Discover-tid duger heller ikke: `DFS` kan oppdage en node lenge før en annen node som må komme foran den.",
    },
    {
      question: "Hvilket krav stiller `Topological-Sort` til grafen?",
      options: ["Grafen må være en DAG — rettet og uten sykler; med en sykel finnes ingen gyldig rekkefølge", "Grafen må være sammenhengende, slik at hele rekkefølgen kan bygges ut fra én startnode", "Grafen må være urettet, siden en topologisk sortering ordner noder og ikke kantretninger", "Grafen må ha minst én node med inn-grad null og minst én node med ut-grad null"],
      explanation: "Ligger $u$ og $v$ på samme sykel, må $u$ komme før $v$ og $v$ før $u$ samtidig, og det er umulig. Sammenheng er derimot ikke nødvendig — en DAG i flere biter sorteres fint, `DFS` startes bare på nytt i hver bit. En DAG har for øvrig alltid minst én node av hver slag, så det kravet følger av DAG-egenskapen framfor å være et selvstendig krav.",
    },
    {
      question: "Er den topologiske sorteringen av en DAG entydig?",
      options: ["Nei — er to noder ikke bundet av noen sti, kan de stå i hvilken som helst innbyrdes rekkefølge", "Ja — en DAG har nøyaktig én gyldig topologisk sortering, gitt av finish-tidene fra `DFS`", "Ja, forutsatt at `DFS` alltid starter i en node med inn-grad null; ellers finnes det flere", "Nei — men de ulike sorteringene skiller seg bare i hvilken node som står aller først i lista"],
      explanation: "Rekkefølgen er bare bundet der det finnes en sti, og en DAG med flere uavhengige grener har derfor mange gyldige svar. Hvilken `DFS` gir deg, avhenger av rekkefølgen nabolistene gjennomløpes i. Ulikhetene kan opptre hvor som helst i lista, ikke bare i begynnelsen.",
    },
    {
      question: "Hva står forgjengerfeltet `v.pi` for etter en kjøring av `BFS`?",
      options: ["Noden $v$ ble oppdaget fra — følger du feltene bakover fra $v$, får du en korteste sti tilbake til kilden", "Noden med lavest nodenummer blant naboene til $v$, valgt for å gjøre resultatet entydig", "Antall kanter fra kilden fram til $v$, altså nøyaktig den samme verdien som `v.d` inneholder etter kjøringen", "Den siste noden `BFS` besøkte før algoritmen avsluttet, uavhengig av hvor $v$ ligger i grafen"],
      explanation: "Feltene til sammen utgjør `BFS`-treet, og de gjør at algoritmen kan gi selve stien og ikke bare avstanden. Nodenummer spiller ingen rolle for hvem som blir forgjenger — det er hvem som oppdaget noden først, altså køens rekkefølge, som bestemmer. Avstanden ligger i `v.d`, som er et eget felt.",
    },
    {
      question: "Hva er kjøretiden til `DFS` på en graf gitt som naboliste?",
      options: ["$\\Theta(V+E)$ — hver node farges én gang, og hver nabolisteoppføring leses én gang", "$\\Theta(V^2)$ — for hver node må hele nodemengden gjennomsøkes etter naboer", "$\\Theta(E\\lg V)$ — nodene må hentes ut i riktig rekkefølge fra en prioritetskø", "$\\Theta(V \\cdot E)$ — hele kantmengden gjennomløpes én gang for hver node i grafen"],
      explanation: "Ytre løkke berører hver node én gang, og summen av nabolistenes lengder er $E$ i en rettet graf, så arbeidet er lineært i grafens størrelse. $\\Theta(V^2)$ ville vært svaret med nabomatrise, der hver rad må skannes i sin helhet uansett hvor få naboer noden har.",
    },
  ],
  'tdt4120-4-2': [
    {
      question: "Hva er et spenntre i en sammenhengende, urettet graf $G=(V,E)$?",
      options: ["En delmengde av kantene som binder alle nodene sammen uten å danne noen sykel", "En delmengde av kantene som binder alle nodene sammen, gjerne med sykler underveis", "En delmengde av nodene som er parvis naboer, altså en komplett delgraf i $G$", "En delmengde av kantene der hver node er endepunkt for nøyaktig én av kantene"],
      explanation: "Et spenntre må nå alle nodene og være et tre, altså syklusfritt — og de to kravene til sammen tvinger fram nøyaktig $V-1$ kanter. Tillater du sykler, har du en sammenhengende delgraf, ikke et tre. Beskrivelsen med parvis naboer er en klikk, og den med én kant per node er en perfekt matching.",
    },
    {
      question: "Hvor mange kanter har et spenntre i en graf med $V$ noder?",
      options: ["Nøyaktig $V-1$", "Nøyaktig $V$", "Nøyaktig $E-1$", "Minst $V$ og høyst $E$"],
      explanation: "Et tre med $V$ noder har alltid $V-1$ kanter: den første noden står alene, og hver av de øvrige $V-1$ nodene kobles på med nøyaktig én kant. Én kant til ville lukket en sykel, én kant færre ville delt treet i to biter. Antallet er derfor uavhengig av hvor mange kanter $G$ selv har.",
    },
    {
      question: "Hva er et snitt $(S,V\\setminus S)$ i en urettet graf, og hva er en kryssende kant?",
      options: ["Snittet er en oppdeling av nodene i to deler, og en kryssende kant har ett endepunkt i hver del", "Snittet er en oppdeling av kantene i to deler, og en kryssende kant er en kant i den minste delen", "Snittet er den letteste kanten i grafen, og en kryssende kant er enhver kant med samme vekt", "Snittet er en oppdeling av nodene i to like store deler, og en kryssende kant går mellom dem"],
      explanation: "Snittet deler **nodene**, og delene trenger verken være like store eller henge sammen. En kant krysser når endepunktene havner på hver sin side. Merk kontrasten til flytnett, der snittet i tillegg må ha kilden på den ene siden og sluket på den andre.",
    },
    {
      question: "Hva sier snittegenskapen?",
      options: ["Er $A$ en del av et minimalt spenntre og snittet respekterer $A$, er en letteste kryssende kant trygg å legge til", "Er $A$ en del av et minimalt spenntre, er den letteste kanten i hele grafen alltid trygg å legge til i $A$ uansett", "Er $A$ en del av et minimalt spenntre, kan enhver kryssende kant over et vilkårlig snitt legges til i $A$", "Er $A$ en del av et minimalt spenntre og snittet respekterer $A$, er den tyngste kryssende kanten trygg"],
      explanation: "Alle tre leddene må stå: snittet må respektere $A$ — altså ikke krysses av noen kant i $A$ — og kanten må være en av de letteste som krysser. Uten respektbetingelsen kan du legge til en kant som lukker en sykel med noe du allerede har valgt. Og det er lettest, ikke tyngst: hele poenget er å holde totalvekten nede.",
    },
    {
      question: "Hvordan arbeider `MST-Kruskal`?",
      options: ["Går gjennom kantene i stigende vektrekkefølge og tar med hver kant som ikke lager en sykel", "Går gjennom kantene i synkende vektrekkefølge og fjerner hver kant som ikke deler grafen i to", "Vokser ett sammenhengende tre fra en rot ved alltid å ta den letteste kanten ut av treet", "Går gjennom nodene i vilkårlig rekkefølge og kobler hver node til sin nærmeste ubesøkte nabo"],
      explanation: "Kruskal er grådig på kantene og bygger flere biter samtidig, som gradvis smelter sammen — sykeltesten gjøres med `Union-Find`. Å vokse ett tre fra en rot er `MST-Prim`. Å koble hver node til nærmeste nabo uten noen global test kan gi både sykler og et resultat som ikke er minimalt.",
    },
    {
      question: "Hvordan arbeider `MST-Prim`?",
      options: ["Vokser ett sammenhengende tre fra rota ved alltid å ta den letteste kanten ut av treet", "Vokser flere trær samtidig og lar dem smelte sammen når en kant binder to av dem", "Går gjennom kantene i stigende vektrekkefølge og tar med hver kant som ikke lager en sykel", "Fjerner den tyngste kanten i hver sykel til det ikke finnes flere sykler igjen i grafen"],
      explanation: "Prim holder alltid nøyaktig ett tre og utvider det med den letteste kanten som går ut av det — derfor trenger den en prioritetskø over nodene utenfor. Å bygge flere biter samtidig er `MST-Kruskal`s måte. Å fjerne den tyngste kanten i hver sykel er en tredje, korrekt, men langsommere framgangsmåte som ikke er noen av de to i pensum.",
    },
    {
      question: "Hva er kjøretiden til `MST-Kruskal`, og hva dominerer den?",
      options: ["$O(E\\lg V)$, dominert av sorteringen av kantene etter vekt", "$O(E\\lg V)$, dominert av kallene til `Find-Set` og `Union`", "$\\Theta(V+E)$, siden hver kant og hver node behandles nøyaktig én gang", "$O(V^2)$, dominert av at hver node må sammenlignes med hver av de andre"],
      explanation: "Sorteringen av $E$ kanter koster $O(E\\lg E)$, og siden $E < V^2$ er $\\lg E = O(\\lg V)$ — derfor skrives grensen $O(E\\lg V)$. `Union-Find`-operasjonene er nesten konstante hver og dominerer ikke. Lineær tid er utelukket nettopp fordi kantene må ordnes etter vekt.",
    },
    {
      question: "Hva er kjøretiden til `MST-Prim` med binærhaug som prioritetskø, og hva dominerer den?",
      options: ["$O(E\\lg V)$, dominert av inntil $E$ kall til `Decrease-Key`", "$O(E\\lg V)$, dominert av de $V$ kallene til `Extract-Min`", "$O(V\\lg V)$, siden hver node tas ut av køen nøyaktig én gang", "$\\Theta(V+E)$, siden algoritmen bare gjør ett gjennomløp av nabolistene"],
      explanation: "Hver kant kan utløse én `Decrease-Key`, og hver av dem koster $O(\\lg V)$ med binærhaug — det gir $O(E\\lg V)$, mens de $V$ `Extract-Min`-kallene bare bidrar med $O(V\\lg V)$. Siden $E \\ge V-1$ i en sammenhengende graf, er kantleddet det som avgjør.",
    },
    {
      question: "Hvilken rolle spiller `Union-Find` i `MST-Kruskal`?",
      options: ["Den svarer på om de to endepunktene allerede henger sammen, altså om kanten vil lukke en sykel", "Den holder kantene sortert etter vekt, slik at den letteste ubehandlede kanten kan hentes raskt", "Den finner den letteste kanten ut av treet som er bygget så langt, i nesten konstant tid", "Den teller hvor mange kanter som er valgt, slik at algoritmen kan stoppe ved $V-1$ kanter"],
      explanation: "`Find-Set(u)` og `Find-Set(v)` gir samme representant nøyaktig når $u$ og $v$ allerede er i samme komponent — og da ville kanten lukket en sykel. Etter at en kant er valgt, slås komponentene sammen med `Union`. Å finne den letteste kanten ut av et voksende tre er prioritetskøens jobb i `MST-Prim`, ikke `Union-Find`s.",
    },
    {
      question: "Når er det minimale spenntreet entydig?",
      options: ["Når alle kantvektene er innbyrdes forskjellige — da finnes det nøyaktig ett minimalt spenntre", "Når grafen er sammenhengende — enhver sammenhengende graf har nøyaktig ett minimalt spenntre å velge mellom", "Når alle kantvektene er positive — negative vekter er det eneste som kan gi flere løsninger", "Når `MST-Prim` og `MST-Kruskal` gir samme svar — er svarene ulike, finnes det minst to"],
      explanation: "Med ulike vekter er hvert grådig valg tvunget, og resultatet blir det samme uansett hvilken algoritme du bruker. Er to vekter like, kan begge kantene inngå i hvert sitt minimale spenntre, og begge har samme totalvekt. Fortegnet på vektene har ingenting med saken å gjøre.",
    },
    {
      question: "Kan `MST-Prim` og `MST-Kruskal` gi ulike kantmengder på samme graf?",
      options: ["Ja — er noen vekter like, kan de velge hver sin kant, men totalvekten blir den samme", "Nei — begge er grådige og korrekte, så de gir alltid nøyaktig de samme kantene", "Ja — og da har den ene av dem regnet feil, siden et minimalt spenntre er entydig", "Ja — `MST-Prim` gir alltid lavere totalvekt, siden den bygger ett sammenhengende tre"],
      explanation: "Begge algoritmene er korrekte, så begge svarene er minimale spenntrær — de har derfor nøyaktig samme totalvekt selv når kantmengdene skiller seg. Ulike svar er altså ikke et tegn på feil, men på at grafen har flere minimale spenntrær. Ingen av de to gir systematisk lavere vekt enn den andre.",
    },
    {
      question: "Hvordan takler `MST-Prim` og `MST-Kruskal` negative kantvekter?",
      options: ["Helt uten problemer — begge er korrekte for negative vekter, i motsetning til `Dijkstra`", "Begge feiler — negative vekter gjør at et grådig valg kan bli angret senere i kjøringen", "`MST-Kruskal` takler dem, mens `MST-Prim` krever ikke-negative vekter på grunn av køen", "Begge feiler med mindre du først legger en fast konstant til hver eneste kantvekt i grafen"],
      explanation: "Snittegenskapen sammenligner kanter med hverandre og bryr seg bare om rekkefølgen på vektene, ikke om fortegnet. Det er `Dijkstra` som stiller kravet om ikke-negative vekter, fordi den låser en node for godt når den tas ut av køen. Å legge til en konstant er dessuten farlig i seg selv: det endrer hvilken sti som er billigst når stier har ulikt antall kanter.",
    },
    {
      question: "Hva står `u.key` og `u.pi` for i `MST-Prim`?",
      options: ["`u.key` er vekten på den letteste kjente kanten fra treet til $u$; `u.pi` er den enden som ligger i treet", "`u.key` er den samlede vekten av alle kantene fra rota fram til $u$; `u.pi` er noden rett før $u$ på den veien", "`u.key` er nodenummeret til $u$ i prioritetskøen; `u.pi` er posisjonen $u$ har i haugen akkurat nå", "`u.key` er antall kanter fra rota til $u$; `u.pi` er noden $u$ ble oppdaget fra under gjennomløpet"],
      explanation: "Prim spør bare om én ting: hvor billig er det å knytte $u$ til treet **nå**? Derfor er `key` vekten på én enkelt kant, ikke en akkumulert sum. Den akkumulerte tolkningen hører til `Dijkstra`, der `d[v]` er hele veiens vekt — det er den eneste virkelige forskjellen mellom de to algoritmenes indre løkker.",
    },
    {
      question: "Hvorfor hopper `MST-Kruskal` over en kant den kommer til?",
      options: ["Fordi begge endepunktene allerede ligger i samme komponent, så kanten ville lukket en sykel", "Fordi kanten er tyngre enn en annen kant mellom de samme to komponentene i grafen", "Fordi noden i den ene enden allerede har fått så mange kanter som et spenntre tillater", "Fordi kanten har nøyaktig lik vekt med en kant som allerede er valgt, og duplikate vekter ikke tillates"],
      explanation: "Sykeltesten er den eneste grunnen. Kantene kommer i stigende vektrekkefølge, så når en kant først vurderes, finnes det ingen lettere kant igjen — og noen grad-grense per node finnes ikke i et spenntre. Like vekter er heller ikke noe hinder: flere kanter med samme vekt kan godt inngå i det samme treet.",
    },
    {
      question: "Hva koster det å sjekke om en gitt kantmengde $A$ er et spenntre i $G$?",
      options: ["$\\Theta(V+E)$ — tell at $A$ har $V-1$ kanter, og traverser én gang for å se at alt henger sammen", "$O(E\\lg V)$ — kantene i $A$ må sorteres først for å kunne sammenlignes med et minimalt spenntre", "$\\Theta(V^2)$ — hvert nodepar må undersøkes for å avgjøre om det finnes en sti mellom dem", "$\\Theta(V \\cdot E)$ — for hver node må hele kantmengden gjennomsøkes etter en forbindelse"],
      explanation: "To betingelser holder: riktig antall kanter og sammenheng. Én `BFS` eller `DFS` over $A$ avgjør sammenhengen i lineær tid, og teller du samtidig kantene, er du ferdig. Merk at spørsmålet «er dette et spenntre?» ikke krever at du sjekker vektene i det hele tatt — det er et annet spørsmål enn «er det minimalt?».",
    },
    {
      question: "Hva koster `Extract-Min` og `Decrease-Key` når prioritetskøen er en binærhaug med $V$ noder?",
      options: ["$O(\\lg V)$ hver — begge følger én sti opp eller ned gjennom haugen", "$O(1)$ hver — haugen holder minimumet i rota, og nøkler senkes på stedet", "$O(V)$ hver — hele haugen må gjennomsøkes for å finne riktig plassering", "$O(\\lg V)$ for `Extract-Min` og $O(V)$ for `Decrease-Key`, som må lete opp noden"],
      explanation: "`Extract-Min` flytter siste element til rota og lar det synke, og `Decrease-Key` lar elementet stige — begge berører høyst ett nivå per steg i et tre med $\\lg V$ nivåer. `Decrease-Key` forutsetter at du vet hvor noden ligger; det er derfor implementasjonen holder en indeks fra node til haugposisjon.",
    },
  ],
  'tdt4120-4-3': [
    {
      question: "Hva gjør operasjonen `Relax(u, v, w)`?",
      options: ["Senker `d[v]` til `d[u] + w(u,v)` dersom det er bedre enn dagens verdi, og setter `pi[v] = u`", "Setter `d[v]` til `d[u] + w(u,v)` uansett hva `d[v]` var fra før, og setter `pi[v] = u`", "Senker `d[u]` til `d[v] + w(u,v)` dersom det er bedre, altså slakker kanten den motsatte veien", "Fjerner kanten $(u,v)$ fra grafen dersom den ikke inngår i noen korteste vei fra kilden"],
      explanation: "Slakking er en betinget forbedring: finner du en billigere vei til $v$ via $u$, oppdaterer du estimatet og forgjengeren, ellers gjør du ingenting. Å sette verdien ubetinget ville ødelagt et allerede bedre estimat. Retningen følger kanten: du forbedrer enden kanten peker mot.",
    },
    {
      question: "Hva står `d[v]` og `pi[v]` for i algoritmene for korteste vei fra én kilde?",
      options: ["`d[v]` er det beste kjente estimatet på veien fra kilden til $v$; `pi[v]` er forgjengeren på den veien", "`d[v]` er den sanne korteste avstanden $\\delta(s,v)$ helt fra første stund; `pi[v]` er den noden som ligger nærmest $v$", "`d[v]` er antall kanter fra kilden til $v$; `pi[v]` er den noden $v$ ble oppdaget fra under søket", "`d[v]` er vekten på den letteste kanten inn til $v$; `pi[v]` er den enden kanten kommer fra"],
      explanation: "`d[v]` starter på $\\infty$ og synker gradvis mot $\\delta(s,v)$ etter hvert som kanter slakkes — den er et estimat underveis, ikke fasiten fra start. `pi`-feltene til sammen danner forgjengertreet, som gir selve stiene. Å telle kanter er `BFS`, og vekten på én enkelt kant er `MST-Prim`s `key`.",
    },
    {
      question: "Hvilket krav stiller `Dijkstra` til grafen, og hva er kjøretiden med binærhaug?",
      options: ["Ikke-negative kantvekter; $O(E\\lg V)$", "Ingen negative sykler; $\\Theta(VE)$", "At grafen er syklusfri; $\\Theta(V+E)$", "At grafen er urettet; $O(V^2)$"],
      explanation: "`Dijkstra` låser avstanden til en node i det øyeblikket noden trekkes ut av prioritetskøen, og det argumentet holder bare når ingen senere kant kan trekke summen ned — altså når alle vekter er $\\ge 0$. Kravet «ingen negative sykler» er det mildere kravet til `Bellman-Ford`, og syklusfrihet er kravet til `DAG-Shortest-Path`.",
    },
    {
      question: "Hva er kjøretiden til `Bellman-Ford`, og hva kan den i tillegg til `Dijkstra`?",
      options: ["$\\Theta(VE)$; den tåler negative kantvekter og oppdager negative sykler nåbare fra kilden", "$\\Theta(VE)$; den tåler negative kantvekter, men kan ikke oppdage om det finnes en negativ sykel", "$O(E\\lg V)$; den tåler negative kantvekter fordi den bruker prioritetskø i stedet for slakking", "$\\Theta(V+E)$; den tåler negative kantvekter så lenge grafen i tillegg er syklusfri"],
      explanation: "Algoritmen slakker alle $E$ kanter $V-1$ ganger, og et ekstra gjennomløp avslører om noe fortsatt kan forbedres — skjer det, finnes en negativ sykel nåbar fra kilden, og algoritmen returnerer USANN. Deteksjonen er nettopp derfor det $V$-te gjennomløpet er der. $\\Theta(V+E)$ er `DAG-Shortest-Path`s kjøretid.",
    },
    {
      question: "Hvorfor slakker `Bellman-Ford` alle kantene nøyaktig $V-1$ ganger?",
      options: ["Fordi en korteste vei uten sykler har høyst $V-1$ kanter, og hvert gjennomløp låser minst én kant til", "Fordi grafen har høyst $V-1$ kanter når den er syklusfri, og hver kant må slakkes én gang hver", "Fordi $V-1$ er antall kanter i et spenntre, og korteste-vei-treet er alltid det minimale spenntreet til grafen", "Fordi tallet er valgt for å gi kjøretiden $\\Theta(VE)$; færre gjennomløp gir også riktig svar"],
      explanation: "En enkel sti kan berøre høyst $V$ noder og har dermed høyst $V-1$ kanter, og etter $i$ gjennomløp er alle korteste veier med høyst $i$ kanter funnet. Korteste-vei-treet er for øvrig ikke det samme som et minimalt spenntre — de to optimerer helt ulike ting. Og antallet gjennomløp er nødvendig, ikke et valg: kutter du det, kan svaret bli galt.",
    },
    {
      question: "Hva er tidlig stopp i `Bellman-Ford`?",
      options: ["Algoritmen avslutter etter et gjennomløp der ingen kant lot seg slakke, siden ingenting kan endre seg mer", "Algoritmen avslutter så snart alle nodene har fått en endelig `d`-verdi, altså når ingen av dem lenger står på $\\infty$", "Algoritmen avslutter så snart en negativ kant er funnet, siden resultatet da uansett er upålitelig", "Algoritmen avslutter etter $\\lg V$ gjennomløp, som er nok når kantvektene alle er ikke-negative"],
      explanation: "Gikk et helt gjennomløp uten en eneste forbedring, vil neste gjennomløp gjøre nøyaktig det samme — ingenting. Da er alle estimatene endelige, og resten av rundene er bortkastet arbeid. At en node har fått en endelig verdi, betyr derimot ikke at verdien er ferdig: den kan bli senket flere ganger.",
    },
    {
      question: "Hva er kjøretiden til `DAG-Shortest-Path`, og hvilke vekter tåler den?",
      options: ["$\\Theta(V+E)$; den tåler negative kantvekter, siden grafen ikke kan ha noen sykel i det hele tatt", "$\\Theta(V+E)$; den krever ikke-negative kantvekter, akkurat slik `Dijkstra` også gjør det", "$O(E\\lg V)$; den tåler negative kantvekter fordi nodene tas ut av en prioritetskø", "$\\Theta(VE)$; den tåler negative kantvekter og oppdager i tillegg negative sykler"],
      explanation: "Én topologisk sortering pluss én runde slakking i den rekkefølgen holder, og begge deler er lineære — det gjør denne til den raskeste av de tre. Negative vekter er trygge fordi en node aldri kan bli forbedret av noe som kommer senere i topologisk orden. Negative sykler kan pr. definisjon ikke finnes i en DAG.",
    },
    {
      question: "Grafen har en negativ sykel som er nåbar fra kilden. Hva er da korteste vei til en node på sykelen?",
      options: ["Den finnes ikke — du kan gå rundt sykelen så mange ganger du vil og få vilkårlig lav vekt", "Den er summen av kantene på sykelen, siden det er den billigste runden som finnes i grafen", "Den er $-\\infty$ for alle noder i grafen, også for dem som ikke er nåbare fra kilden i det hele tatt", "Den er lik den korteste veien uten å bruke sykelen, siden en korteste vei aldri gjentar en node"],
      explanation: "Hver runde rundt sykelen trekker vekten ytterligere ned, så det finnes ingen minste verdi — og derfor er «korteste vei» ikke definert for de nodene. `Bellman-Ford` melder fra ved å returnere USANN. Noder som ikke kan nås fra sykelen, beholder derimot helt vanlige korteste veier.",
    },
    {
      question: "En rettet graf har én negativ kant, men ingen negativ sykel. Gir `Dijkstra` riktig svar?",
      options: ["Ikke nødvendigvis — `Dijkstra` låser en node når den tas ut av køen, og en negativ kant kan senke svaret etterpå", "Ja — uten negative sykler er `Dijkstra` korrekt; kravet om ikke-negative vekter gjelder bare sykler, ikke enkeltkanter", "Ja — `Dijkstra` slakker hver kant flere ganger og fanger derfor opp den negative kanten til slutt", "Ikke nødvendigvis — men svaret blir riktig hvis du kjører `Dijkstra` én gang fra hver node i grafen"],
      explanation: "Grådigheten hviler på at ingen uoppdaget vei kan bli billigere, og én eneste negativ kant velter det argumentet: noden kan være låst på et for høyt tall når den billigere veien dukker opp. Kravet er derfor ikke-negative **kanter**, ikke bare fravær av negative sykler — det mildere kravet tilhører `Bellman-Ford`, som er den du skal bruke her.",
    },
    {
      question: "Når gir `BFS` korteste vei i en vektet graf?",
      options: ["Bare når alle kantvektene er like, siden `BFS` teller kanter i stedet for å summere vekter", "Når alle kantvektene er ikke-negative, siden `BFS` da behandler nodene i stigende avstand", "Når grafen er syklusfri, siden `BFS` da besøker nodene i topologisk orden av seg selv", "Aldri — `BFS` er en ren traverseringsalgoritme og sier ingenting om avstander i det hele tatt"],
      explanation: "Er alle kantene like tunge, er færrest kanter det samme som lavest samlet vekt, og da faller de to spørsmålene sammen. Er vektene ulike, kan `BFS` velge en sti med få, dyre kanter. `BFS` sier likevel noe presist om avstand — den gir korteste vei målt i **antall kanter**, som er det uvektede tilfellet.",
    },
    {
      question: "Hva koster `Extract-Min` og `Decrease-Key` i `Dijkstra` med binærhaug, og hvor mange kall gjøres?",
      options: ["$O(\\lg V)$ hver; $V$ kall til `Extract-Min` og inntil $E$ kall til `Decrease-Key`", "$O(1)$ hver; $V$ kall til `Extract-Min` og inntil $E$ kall til `Decrease-Key`", "$O(\\lg V)$ hver; $E$ kall til `Extract-Min` og inntil $V$ kall til `Decrease-Key`", "$O(\\lg V)$ for `Extract-Min` og $O(V)$ for `Decrease-Key`; $V$ kall til hver av dem"],
      explanation: "Hver node tas ut av køen nøyaktig én gang, og hver kant kan utløse høyst én vellykket slakking med tilhørende `Decrease-Key`. Til sammen gir det $O((V+E)\\lg V)$, som skrives $O(E\\lg V)$ i en sammenhengende graf. Det er antall kanter, ikke antall noder, som dominerer.",
    },
    {
      question: "Du skal finne korteste vei i en rettet asyklisk graf med noen negative kantvekter. Hvilken algoritme velger du?",
      options: ["`DAG-Shortest-Path` — den er den raskeste av de tre og tåler negative vekter", "`Bellman-Ford` — den er den eneste som tåler negative vekter i det hele tatt", "`Dijkstra` — den er raskest, og syklusfriheten gjør at negative vekter ikke skader", "`BFS` — grafen er syklusfri, og da er antall kanter det samme som samlet vekt"],
      explanation: "Er grafen en DAG, er $\\Theta(V+E)$ tilgjengelig, og det slår både $O(E\\lg V)$ og $\\Theta(VE)$. `Bellman-Ford` ville gitt riktig svar, men er unødvendig treg — å velge den er ikke galt, men det er ikke det beste svaret. `Dijkstra` ville derimot kunne svare feil: syklusfrihet fjerner ikke problemet med negative kanter.",
    },
    {
      question: "Hva er forgjengertreet etter en vellykket kjøring av `Dijkstra` eller `Bellman-Ford`?",
      options: ["Treet som `pi`-feltene danner — det inneholder en korteste vei fra kilden til hver nåbar node", "Setter `d[v]` til vekten på kanten fra $s$ til $v$ der en slik kant finnes, og til $\\infty$ for alle de øvrige nodene", "Det minimale spenntreet til grafen, siden korteste veier og letteste kanter faller sammen", "Rekkefølgen nodene ble tatt ut av prioritetskøen i, lest som en sti fra kilden og utover"],
      explanation: "Følger du `pi`-feltene bakover fra en node, får du en korteste vei tilbake til kilden — det er slik du oppgir selve veien og ikke bare vekten. Forgjengertreet er ikke det samme som et minimalt spenntre: å minimere avstanden fra én kilde og å minimere totalvekten av et spenntre er to ulike optimeringsproblemer med ulike løsninger.",
    },
    {
      question: "Hva gjør `Initialize-Single-Source(G, s)`?",
      options: ["Setter `d[v]` til $\\infty$ og `pi[v]` til NIL for alle noder, og setter deretter `d[s] = 0`", "Setter `d[v]` til vekten på kanten fra $s$ til $v$ der en slik kant finnes, og til $\\infty$ ellers", "Setter `d[v]` til 0 for alle noder, slik at hver slakking bare kan øke estimatene oppover", "Setter `d[s] = 0` og lar de øvrige `d`-verdiene stå udefinerte til den første slakkingen treffer dem"],
      explanation: "$\\infty$ betyr «ingen vei funnet ennå», og kilden får 0 fordi veien til seg selv er tom. Å forhåndsfylle med kantvektene ville hoppet over den første slakkerunden og gjort algoritmen vanskeligere å begrunne. Å starte alt på 0 ville gjort at ingen slakking noen gang slår til, siden slakking bare senker.",
    },
    {
      question: "Hva betyr det at `d[v]` fortsatt er $\\infty$ når `Dijkstra` er ferdig?",
      options: ["At det ikke finnes noen sti fra kilden til $v$ i det hele tatt — $v$ er ikke nåbar", "At veien til $v$ er så lang at estimatet ikke rakk å bli oppdatert innenfor kjøretiden", "At $v$ ligger på en negativ sykel, slik at avstanden ikke lar seg fastsette entydig", "At $v$ er kilden selv, siden avstanden fra en node til seg selv ikke er definert"],
      explanation: "$\\infty$ er startverdien, og den blir bare senket dersom en kant inn til noden slakkes — så en node som fortsatt står på $\\infty$, er aldri nådd. Algoritmen kjører alltid til køen er tom, så noe «rakk ikke» finnes ikke. Kilden får 0 i initialiseringen, ikke $\\infty$.",
    },
    {
      question: "Inneholder en korteste vei noen gang en sykel, når alle kantvektene er ikke-negative?",
      options: ["Nei — å fjerne en sykel kan aldri gjøre veien dyrere, så det finnes alltid en korteste vei uten sykler", "Ja — en sykel kan være nødvendig for å nå fram til noder som utelukkende har innkommende kanter fra sykelen", "Ja — men bare når to noder har nøyaktig lik avstand fra kilden, slik at rekkefølgen blir vilkårlig", "Nei — en graf med ikke-negative vekter kan per definisjon ikke inneholde noen sykel i det hele tatt"],
      explanation: "En sykel med ikke-negativ vekt kan klippes bort uten at veien blir lengre, så det finnes alltid en enkel korteste vei — og det er grunnen til at $V-1$ kanter holder som øvre grense. Ikke-negative vekter utelukker ikke sykler i grafen; de utelukker bare at det lønner seg å gå rundt dem.",
    },
  ],
  'tdt4120-4-4': [
    {
      question: "Hva er kjøretiden til `Floyd-Warshall`?",
      options: ["$\\Theta(V^3)$ — tre nøstede løkker over nodene, uavhengig av antall kanter", "$\\Theta(V^2E)$ — algoritmen kjører `Bellman-Ford` én gang per node i grafen", "$O(VE\\lg V)$ — algoritmen kjører `Dijkstra` én gang per node i grafen", "$\\Theta(V^4)$ — det trengs $V$ matriseprodukter, hvert på $\\Theta(V^3)$"],
      explanation: "Løkkene over `k`, `i` og `j` går alle fra 1 til $V$ med konstant arbeid innerst, og de kjører alltid ferdig — derfor er grensen tett. $\\Theta(V^4)$ hører til den naive `Slow-APSP`-løsningen, som løser samme problem ved gjentatte min-pluss-produkter.",
    },
    {
      question: "Hva er `d`-regelen i `Floyd-Warshall`?",
      options: ["$d^{(k)}_{ij} = \\min(d^{(k-1)}_{ij},\\; d^{(k-1)}_{ik} + d^{(k-1)}_{kj})$", "$d^{(k)}_{ij} = \\min(d^{(k-1)}_{ij},\\; d^{(k-1)}_{ij} + w_{kj})$", "$d^{(k)}_{ij} = d^{(k-1)}_{ik} + d^{(k-1)}_{kj}$", "$d^{(k)}_{ij} = \\sum_k d^{(k-1)}_{ik} \\cdot d^{(k-1)}_{kj}$"],
      explanation: "Valget står mellom å beholde den beste stien uten node $k$ og å gå via $k$, altså fra $i$ til $k$ og videre fra $k$ til $j$. Alternativet med sum av produkter er vanlig matriseprodukt, og det gir ingen mening som avstand — det er kapitlets hyppigste felle.",
    },
    {
      question: "Hvor arves forgjengeren fra når veien om node $k$ er kortest?",
      options: ["Fra rad $k$: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{kj}$", "Fra rad $i$: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{ik}$", "Fra node $k$ selv: $\\pi^{(k)}_{ij} = k$ i alle slike tilfeller", "Fra den gamle verdien: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{ij}$ alltid"],
      explanation: "Den siste kanten inn til $j$ er den samme som på den korteste stien fra $k$ til $j$, og den står i rad $k$. Å sette $\\pi = k$ er bare riktig i det spesialtilfellet der kanten $k \\to j$ er den siste — ellers ligger det flere noder mellom.",
    },
    {
      question: "Hva er min-pluss-produktet?",
      options: ["$\\min_k (l_{ik} + w_{kj})$ — minimum av summer", "$\\sum_k (l_{ik} \\cdot w_{kj})$ — sum av produkter", "$\\min_k (l_{ik} \\cdot w_{kj})$", "$\\sum_k (l_{ik} + w_{kj})$ — sum av summer over alle mulige mellomledd"],
      explanation: "Operasjonen svarer på «hvilket mellomledd gir kortest total vei?», og da må leddene summeres og minimum tas. Sum av produkter er den vanlige matrisemultiplikasjonen, og å bruke den her er kapitlets mest fremhevede feil.",
    },
    {
      question: "Hva betyr $l^{(m)}_{ij}$ i `Slow-APSP`?",
      options: ["Korteste avstand fra $i$ til $j$ blant stier med **høyst** $m$ kanter", "Korteste avstand fra $i$ til $j$ blant stier med **nøyaktig** $m$ kanter", "Korteste avstand fra $i$ til $j$ når bare nodene 1 til $m$ er mellomnoder", "Antall forskjellige stier fra $i$ til $j$ som har høyst $m$ kanter i seg"],
      explanation: "Diagonalleddene $w_{ii} = 0$ gjør at en kortere sti alltid kan «fylles ut», derfor «høyst» og ikke «nøyaktig». Formuleringen med mellomnoder hører til `Floyd-Warshall`s $d^{(k)}$ — de to algoritmene bygger opp svaret langs helt ulike akser.",
    },
    {
      question: "Krever `Floyd-Warshall` ikke-negative kantvekter?",
      options: ["Nei — den tåler negative kanter, så lenge grafen ikke har en negativ sykel", "Ja — som `Dijkstra` bryter den sammen med én eneste negativ kant i grafen", "Ja — men bare når grafen er tett, altså når $E$ nærmer seg $V^2$ i størrelse", "Nei — den tåler både negative kanter og negative sykler uten videre"],
      explanation: "Algoritmen sammenligner hele stier og gjør ingen grådige valg, så negative kanter er uproblematiske. Negative **sykler** er derimot umulige for ethvert korteste-vei-problem: du kan runde sykelen igjen og igjen og få stadig lavere kostnad.",
    },
    {
      question: "Hvilken løkke må være den ytterste i `Floyd-Warshall`?",
      options: ["$k$ — invarianten krever at hele matrisen oppdateres for én $k$ om gangen", "$i$ — radene må ferdigbehandles én etter én for at forgjengerne skal stemme", "$j$ — kolonnene må ferdigbehandles én etter én for at avstandene skal stemme", "Rekkefølgen er likegyldig, siden alle tre løkkene går over alle nodene"],
      explanation: "Invarianten sier at etter runde $k$ er nøyaktig nodene 1 til $k$ tillatt som mellomnoder, og det krever at hele matrisen er oppdatert før neste $k$ begynner. Bytter du om, kan en celle bli oppdatert med verdier som ennå ikke er gyldige, og svaret blir galt.",
    },
    {
      question: "Hva står i `Transitive-Closure`-matrisen etter siste runde?",
      options: ["Sant der det finnes en vei fra $i$ til $j$, usant ellers", "Lengden på den korteste veien fra $i$ til $j$, eller $\\infty$ hvis ingen finnes", "Antall forskjellige veier fra $i$ til $j$ i grafen, talt uten gjentakelser", "Sant bare der det finnes en kant"],
      explanation: "Regelen bruker «eller» og «og» der `d`-regelen bruker minimum og pluss, så resultatet er ren nåbarhet uten avstander. Matrisen med sant kun der det finnes en kant, er startmatrisen $t^{(0)}$ — pluss diagonalen, siden enhver node når seg selv.",
    },
    {
      question: "Grafen er glissen ($E \\approx V$) med bare positive vekter. Hva er raskest for alle-til-alle?",
      options: ["$V$ kjøringer av `Dijkstra`, altså $O(VE\\lg V) = O(V^2\\lg V)$", "`Floyd-Warshall`, altså $\\Theta(V^3)$ uansett hvor få kanter grafen har", "$V$ kjøringer av `Bellman-Ford`", "Naiv `Slow-APSP` med gjentatte min-pluss-produkter, altså $\\Theta(V^4)$"],
      explanation: "Med $E \\approx V$ blir $O(VE\\lg V)$ til $O(V^2\\lg V)$, som vokser langsommere enn $V^3$. `Dijkstra` er lovlig her nettopp fordi alle vektene er positive — med én negativ kant måtte valget vært et annet.",
    },
    {
      question: "Hva skjer med cellene der veien om node $k$ ikke er kortere?",
      options: ["De står uendret fra forrige runde, i både `d` og `π`", "De settes til $\\infty$", "De beholder verdien i `d`, men `π` settes til NIL for sikkerhets skyld", "De regnes om med den nye verdien uansett, siden $k$ nå er tillatt"],
      explanation: "Testen `if d[i][k] + d[k][j] < d[i][j]` er den eneste som skriver noe, så alt annet blir liggende. Å regne om hele matrisen i hver runde er en vanlig håndkjøringsfeil som både tar tid og innfører regnefeil.",
    },
    {
      question: "Hva er kjøretiden til hele det naive `Slow-APSP`-opplegget?",
      options: ["$\\Theta(V^4)$ — $V-2$ produkter à $\\Theta(V^3)$ etter det første", "$\\Theta(V^3)$ — ett min-pluss-produkt holder for hele problemet", "$\\Theta(V^3\\lg V)$ — med gjentatt kvadrering av matrisen underveis", "$\\Theta(V^2E)$ — hvert produkt går over alle kantene i grafen"],
      explanation: "En korteste sti har høyst $V-1$ kanter, så stiene må forlenges $V-2$ ganger etter $l^{(1)} = W$. Varianten med gjentatt kvadrering kommer riktignok ned i $\\Theta(V^3\\lg V)$, men det er en annen algoritme — og `Floyd-Warshall` slår begge.",
    },
    {
      question: "Hvordan finner du selve stien fra $i$ til $j$?",
      options: ["Les `π`-matrisen baklengs fra $j$ til du treffer $i$", "Les `d`-matrisen baklengs fra $j$ til du treffer $i$ i raden", "Kjør `Floyd-Warshall` på nytt med $i$ som eneste startnode", "Se hvilken $k$ som ga minimumet"],
      explanation: "`π[i][j]` er forgjengeren til $j$, og gjentatt oppslag bygger stien bakfra i $O(V)$. `d` inneholder bare lengden — to helt ulike stier kan ha samme lengde, så tallet alene kan ikke identifisere veien.",
    },
    {
      question: "Hva er $d^{(0)}$ i `Floyd-Warshall`?",
      options: ["Vektmatrisen $W$ selv — ingen noder er tillatt som mellomnoder ennå", "En matrise full av $\\infty$, siden ingen avstander er beregnet ennå", "En matrise full av nuller, som fylles ut etter hvert som rundene går", "Den ferdige avstandsmatrisen, som rundene deretter verifiserer"],
      explanation: "Uten mellomnoder er den eneste mulige stien fra $i$ til $j$ den direkte kanten, så matrisen er nøyaktig $W$ med 0 på diagonalen. En matrise full av $\\infty$ ville betydd at heller ikke de direkte kantene finnes.",
    },
    {
      question: "Grafen er tett og har noen negative kantvekter, men ingen negativ sykel. Hva velger du?",
      options: ["`Floyd-Warshall`, $\\Theta(V^3)$ — den tåler negative kanter", "$V$ kjøringer av `Dijkstra`, $O(VE\\lg V)$ — raskest på tette grafer", "$V$ kjøringer av `Bellman-Ford`, $\\Theta(V^2E)$ — den eneste lovlige her", "`Transitive-Closure`, $\\Theta(V^3)$ — den håndterer alle fortegn likt"],
      explanation: "`Dijkstra` er utelukket av de negative kantene — det er felle #8 — og `Bellman-Ford` fra hver node koster $\\Theta(V^2E) = \\Theta(V^4)$ på en tett graf. `Transitive-Closure` svarer på et annet spørsmål: den gir nåbarhet, ikke avstander.",
    },
  ],
  'tdt4120-4-5': [
    {
      question: "Hva leverer du når en oppgave ber om resultatet av `MST-Kruskal`?",
      options: ["Kantene i den rekkefølgen de legges til, med de forkastede merket", "Alle kantene i grafen sortert stigende etter vekt, uten videre merking", "Nodene i den rekkefølgen de knyttes til treet under kjøringen", "Bare den samlede vekten av spenntreet, siden treet ellers kan variere"],
      explanation: "Kantrekkefølgen er selve sporet av algoritmen, og oppgaven spør ofte spesifikt etter hvilke kanter som ble forkastet underveis. Å levere bare totalvekten er å svare på et smalere spørsmål enn det som ble stilt — og kontrollen $V-1$ kanter går tapt.",
    },
    {
      question: "Hvor mange kanter har et minimalt spenntre i en sammenhengende graf med $V$ noder?",
      options: ["Nøyaktig $V-1$", "Nøyaktig $V$", "Nøyaktig $E - V + 1$", "Det avhenger av kantvektene i grafen"],
      explanation: "Et tre med $V$ noder har alltid $V-1$ kanter — færre gir en usammenhengende graf, flere gir en syklus. Dette er den gratis kontrollen på enhver `Kruskal`- eller `Prim`-håndkjøring.",
    },
    {
      question: "Hvilken regel gir en topologisk sortering fra `DFS`?",
      options: ["Nodene i **synkende finish-tid**", "Nodene i **stigende discover-tid**", "Nodene i **stigende finish-tid**", "Nodene i den rekkefølgen ytterløkka besøker dem"],
      explanation: "Noden som avsluttes sist, har ingen uferdige etterfølgere igjen og hører derfor først i rekkefølgen. Stigende discover-tid er felle #11, og den gir et galt svar så snart en node oppdages fra to ulike steder.",
    },
    {
      question: "Hva er syklustesten i `MST-Kruskal`?",
      options: ["`Find-Set(u) != Find-Set(v)` — endepunktene må ligge i ulike komponenter", "At kanten ikke allerede er lagt til spenntreet tidligere i kjøringen", "At kantens vekt er større enn vekten på alle kantene som alt er lagt til", "At begge endepunktene har grad minst 1 i det treet som er bygget så langt"],
      explanation: "Ligger begge endepunktene allerede i samme komponent, finnes det alt en vei mellom dem, og kanten ville lukket en ring. Testen gjøres **før** kanten legges til, og `Union` kalles først når testen slår positivt ut.",
    },
    {
      question: "Hva er kjøretiden til `DAG-Shortest-Path`, og hva krever den?",
      options: ["$\\Theta(V+E)$, og den krever at grafen er syklusfri", "$\\Theta(V+E)$, og den krever ikke-negative kantvekter i grafen", "$O(E\\lg V)$, og den krever at grafen er syklusfri og sammenhengende", "$\\Theta(VE)$, og den krever at grafen ikke har negative sykler i seg"],
      explanation: "Den topologiske rekkefølgen er kjent på forhånd, så hver node behandles én gang og hver kant slakkes én gang — ingen prioritetskø, ingen logaritmefaktor. Negative vekter er helt uproblematiske her; det er `Dijkstra` som stiller krav til fortegnet.",
    },
    {
      question: "Hvilken kanttype i `DFS` avslører at en rettet graf har en sykel?",
      options: ["Tilbakekant — en kant til en node som fortsatt er grå", "Krysskant — en kant til en node i et annet deltre som er ferdig", "Forlengs kant — en kant til en etterkommer som allerede er ferdig", "Trekant — en kant til en node som ennå ikke er oppdaget"],
      explanation: "En grå node ligger på stien vi står i akkurat nå, så kanten lukker en ring tilbake til en forfar. En rettet graf har en sykel hvis og bare hvis `DFS` finner en tilbakekant — de tre andre kanttypene sier ingenting om sykler.",
    },
    {
      question: "Hvorfor må `DAG-Shortest-Path` behandle nodene i topologisk rekkefølge?",
      options: ["For at en node skal ha fått sin endelige `d`-verdi før kantene ut fra den slakkes", "For at kantene skal kunne slakkes flere ganger, slik `Bellman-Ford` gjør", "For at prioritetskøen skal kunne holde nodene sortert etter avstand", "For at algoritmen skal kunne oppdage negative sykler underveis i kjøringen"],
      explanation: "Topologisk rekkefølge garanterer at alle innkommende kanter til en node er slakket før noden selv behandles. Algoritmen bruker ingen prioritetskø — det er nettopp det som gjør den $\\Theta(V+E)$ i stedet for $O(E\\lg V)$.",
    },
    {
      question: "Hva er kontrollen på at en `DFS`-håndkjøring har riktige tider?",
      options: ["Siste finish-tid skal være $2V$, og hver node skal ha nøyaktig ett par tider", "Siste finish-tid skal være $V$, siden hver node avsluttes nøyaktig én gang", "Alle discover-tider skal være mindre enn alle finish-tider i hele grafen", "Summen av alle discover-tider skal være lik summen av alle finish-tider"],
      explanation: "Klokka telles opp både ved oppdagelse og ved ferdigstilling, så $V$ noder gir $2V$ tidsstempler. At alle discover-tider skulle være mindre enn alle finish-tider, er galt: en node oppdaget sent kan ha lavere finish-tid enn en node som ble ferdig tidlig.",
    },
    {
      question: "En kant med vekt 4 forkastes av `Kruskal`, mens en kant med vekt 5 legges til. Hva betyr det?",
      options: ["At endepunktene til firer-kanten allerede lå i samme komponent da den ble vurdert", "At algoritmen har gjort en feil, siden billigere kanter alltid skal foretrekkes", "At firer-kanten er en dobbeltkant mellom to noder som allerede er direkte forbundet", "At femmer-kanten ble vurdert først, siden sorteringen brøt likhet alfabetisk"],
      explanation: "Prisen alene avgjør ikke: kanten må også forbinde to komponenter som ennå ikke henger sammen. `Kruskal` går strengt i stigende vektrekkefølge, så femmer-kanten ble vurdert **etter** firer-kanten, ikke før.",
    },
    {
      question: "Hva gir `BFS` fra en node `s`?",
      options: ["Færrest **kanter** fra `s` til hver node — ikke minst samlet vekt", "Korteste vei målt i samlet kantvekt fra `s` til hver node i grafen", "En topologisk sortering av grafen, lest fra `s` og utover i lagene", "Et minimalt spenntre med `s` som rot, bygget lag for lag utover"],
      explanation: "Køen behandler nodene i den rekkefølgen de oppdages, og `v.d` teller antall kanter — vektene brukes ikke i det hele tatt. Skal vekter med, trengs `Dijkstra`, `Bellman-Ford` eller `DAG-Shortest-Path`.",
    },
    {
      question: "Hva er kjøretiden til `MST-Kruskal`, og hvilket steg dominerer?",
      options: ["$O(E\\lg V)$ — sorteringen og `Union-Find`-operasjonene er like dyre", "$\\Theta(V^3)$ — alle par av noder må sjekkes mot hverandre", "$\\Theta(V+E)$ — hver node og hver kant besøkes nøyaktig én gang", "$O(V\\lg V)$ — bare nodene må sorteres, ikke kantene i grafen"],
      explanation: "Sorteringen koster $O(E\\lg E)$, og siden $E < V^2$ er $\\lg E = O(\\lg V)$; de $O(E)$ `Union-Find`-operasjonene koster like mye. Det er kantene som sorteres, ikke nodene — algoritmen vurderer hver kant én gang, i stigende vektrekkefølge.",
    },
    {
      question: "Hva skjer med cellene i `Floyd-Warshall` der veien om node $k$ ikke er kortere?",
      options: ["De står uendret, i både `d` og `π`", "De regnes om uansett", "De settes til $\\infty$ inntil en senere runde forbedrer dem", "De arver forgjengeren fra rad $k$ selv om avstanden er uendret"],
      explanation: "Testen `if d[i][k] + d[k][j] < d[i][j]` er det eneste som skriver, så alt annet blir liggende. `π` oppdateres bare sammen med `d` — at forgjengeren skulle arves uten at avstanden ble bedre, ville brutt sammenhengen mellom de to matrisene.",
    },
    {
      question: "Hvilken algoritme velger du for korteste vei i en DAG med noen negative kantvekter?",
      options: ["`DAG-Shortest-Path`, $\\Theta(V+E)$ — den bryr seg ikke om fortegnet", "`Dijkstra`, $O(E\\lg V)$ — den er raskest når grafen er syklusfri", "`Floyd-Warshall`, $\\Theta(V^3)$ — den eneste som tåler negative vekter", "`Bellman-Ford`, $\\Theta(VE)$ — den eneste som tåler negative vekter fra én kilde"],
      explanation: "Er grafen syklusfri, er den topologiske varianten både raskest og helt upåvirket av fortegn. `Bellman-Ford` ville gitt riktig svar, men til $\\Theta(VE)$ i stedet for $\\Theta(V+E)$ — og `Dijkstra` ville rett og slett gitt feil svar (felle #8).",
    },
    {
      question: "Hvorfor er rekkefølgen i nabolistene en del av en `DFS`-oppgave?",
      options: ["Fordi den avgjør hvilke discover- og finish-tider nodene får", "Fordi den avgjør om algoritmen i det hele tatt finner alle nodene", "Fordi den avgjør kjøretiden, som ellers kunne blitt kvadratisk", "Fordi den avgjør om grafen har en sykel eller ikke i denne kjøringen"],
      explanation: "`DFS` følger nabolistene i den rekkefølgen de står, og en annen rekkefølge gir en annen gyldig kjøring med andre tider. Alle noder blir funnet uansett, og om grafen har en sykel er en egenskap ved grafen — ikke ved kjøringen.",
    },
    {
      question: "Hva er min-pluss-produktet i `Slow-APSP`?",
      options: ["$\\min_k (l_{ik} + w_{kj})$", "$\\sum_k l_{ik} w_{kj}$", "$\\min_k (l_{ik} \\cdot w_{kj})$", "$\\sum_k \\min(l_{ik},\\, w_{kj})$"],
      explanation: "Ytterst står minimum, innerst står pluss — vi leter etter det mellomleddet som gir kortest total vei. Ordet «produkt» i navnet er en analogi til matrisemultiplikasjon, ikke en instruks om å gange.",
    },
    {
      question: "Hvilken kontroll bruker du på en topologisk sortering?",
      options: ["At hver kant peker framover i den ferdige listen", "At listen er sortert på discover-tid", "At den første noden i listen har inn-grad lik antall kanter", "At listen inneholder nøyaktig $V-1$ noder etter kjøringen"],
      explanation: "Definisjonen av en topologisk sortering er nettopp at hver kant går fra en tidligere til en senere node i rekkefølgen, og det tar sekunder å sjekke. Listen inneholder alle $V$ nodene — det er spenntrær som har $V-1$ elementer, og de er kanter.",
    },
    {
      question: "I `Floyd-Warshall`: hvor arves `π` fra når veien om $k$ vinner?",
      options: ["Fra rad $k$: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{kj}$", "Fra rad $i$: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{ik}$", "Fra node $k$ direkte: $\\pi^{(k)}_{ij} = k$", "Fra kolonne $i$: $\\pi^{(k)}_{ij} = \\pi^{(k-1)}_{ji}$"],
      explanation: "Den siste kanten inn til $j$ er den samme som på korteste sti fra $k$ til $j$, og den informasjonen står i rad $k$. Å sette $\\pi = k$ stemmer bare når kanten $k \\to j$ er den aller siste — ellers ligger det flere noder imellom.",
    },
    {
      question: "Fire av grafalgoritmene er $\\Theta(V+E)$. Hva har de til felles?",
      options: ["De besøker hver node og hver kant nøyaktig én gang, uten prioritetskø", "De arbeider på nabomatrisen i stedet for på nabolistene", "De krever alle sammen at grafen er syklusfri for å gi riktig svar", "De gir alle sammen korteste vei målt i samlet kantvekt fra én kilde"],
      explanation: "`BFS`, `DFS`, `Topological-Sort` og `DAG-Shortest-Path` gjør ett gjennomløp med konstant arbeid per node og per kant. Logaritmefaktoren i `Dijkstra`, `Kruskal` og `Prim` kommer fra sortering eller prioritetskø, ikke fra selve grafgjennomgangen.",
    },
  ],
  'tdt4120-5-1': [
    {
      question: "Hvilke to betingelser må en lovlig flyt $f$ i et flytnett oppfylle?",
      options: ["Kapasitetsbetingelsen $0 \\le f(u,v) \\le c(u,v)$ og bevaring i alle noder utenom kilden og sluket", "Kapasitetsbetingelsen $0 \\le f(u,v) \\le c(u,v)$ og bevaring i absolutt alle noder, kilden og sluket inkludert", "At flyten er heltallig på hver kant, og at ingen kant bærer flyt i begge retninger samtidig", "At hver kant enten er mettet eller tom, og at summen ut av kilden er lik summen inn i sluket"],
      explanation: "Kapasiteten begrenser hver enkelt kant, og bevaringen sier at inn er lik ut i hver indre node. Kilden og sluket er unntatt nettopp fordi det er der flyten oppstår og forsvinner — krevde du bevaring også der, ville bare nullflyten være lovlig. Heltallighet er ikke et krav, men en egenskap `Ford-Fulkerson` gir deg gratis når kapasitetene er heltall.",
    },
    {
      question: "Hva er restkapasiteten $c_f(u,v)$ når kanten $(u,v)$ finnes i nettet?",
      options: ["$c(u,v) - f(u,v)$ — kapasiteten minus det som allerede går der", "$c(u,v) + f(u,v)$ — kapasiteten pluss det som allerede går der", "$f(u,v)$ — det som allerede går der, siden bare det kan flyttes på", "$c(u,v)$ — kapasiteten, uavhengig av hvor mye flyt kanten bærer"],
      explanation: "Restkapasiteten er hvor mye **mer** som får plass, og det er den ledige delen av kapasiteten. $f(u,v)$ er derimot restkapasiteten den **motsatte** veien, altså på ryggkanten $c_f(v,u)$ — de to reglene er begge nødvendige, og å bruke feil av dem er den vanligste feilen i hele Del 5.",
    },
    {
      question: "En kant $(u,v)$ har $c(u,v) = 10$ og $f(u,v) = 6$. Hvilke kanter finnes i restnettet mellom $u$ og $v$?",
      options: ["$c_f(u,v) = 4$ framover og $c_f(v,u) = 6$ bakover", "$c_f(u,v) = 4$ framover, og ingen kant bakover", "$c_f(u,v) = 6$ framover og $c_f(v,u) = 4$ bakover", "$c_f(u,v) = 10$ framover og $c_f(v,u) = 10$ bakover"],
      explanation: "Framover er det 4 ledig av kapasiteten 10, og bakover kan du «angre» opptil de 6 enhetene som allerede går der. Å utelate ryggkanten er den feilen som gjør at algoritmen kan male seg inn i et hjørne — uten den kan ingen tidligere beslutning omgjøres.",
    },
    {
      question: "Hva betyr det å sende flyt langs en ryggkant?",
      options: ["At flyten på den opprinnelige kanten reduseres tilsvarende, slik at kapasiteten frigjøres til bruk et annet sted", "At det faktisk renner væske baklengs gjennom kanten, i strid med kapasitetsbetingelsen for den kanten", "At kanten fjernes fra nettet, siden en kant som brukes begge veier ikke kan ha en entydig retning", "At kapasiteten på den opprinnelige kanten økes, slik at nettet får plass til mer flyt enn før"],
      explanation: "Ryggkanten er retten til å angre: går det 8 fra $u$ til $v$ og du sender 3 tilbake, betyr det at $f(u,v)$ settes til 5 og de tre enhetene brukes et bedre sted. Ingen kapasitet endres, og ingenting renner motsatt vei — det er bokføringen som justeres.",
    },
    {
      question: "Hvordan forholder restnettet $G_f$ seg til det opprinnelige nettet $G$?",
      options: ["$G_f$ har samme noder, men er ikke et delnett av $G$ — ryggkantene finnes ikke i $G$", "$G_f$ er et delnett av $G$: det inneholder nøyaktig de kantene i $G$ som ikke er mettet", "$G_f$ har samme kanter som $G$, men med kapasitetene erstattet av flytverdiene på dem", "$G_f$ har samme kanter som $G$ i motsatt retning, siden restnettet viser hva som kan angres"],
      explanation: "$G_f$ har kantmengden $\\{(u,v) : c_f(u,v) > 0\\}$, og den kan inneholde inntil to kanter per opprinnelig kant — framoverkanten og ryggkanten. Ryggkantene finnes ikke i $G$, og derfor er $G_f$ ikke et delnett. Antall kanter er likevel høyst $2E$, altså $O(E)$.",
    },
    {
      question: "Hva er en forøkende sti?",
      options: ["En enkel sti fra $s$ til $t$ i restnettet, der hver kant har positiv restkapasitet", "En enkel sti fra $s$ til $t$ i det opprinnelige nettet, der ingen kant er mettet", "En sti fra $s$ til $t$ som bare bruker framoverkanter, siden ryggkanter ikke øker flyten", "Enhver sti i restnettet, uansett endepunkter, som gjør det mulig å flytte flyt rundt i nettet"],
      explanation: "Stien må gå fra kilden til sluket, og den lever i restnettet — derfor kan den godt bruke ryggkanter, som bare betyr at en tidligere beslutning delvis reverseres. Å lete i det opprinnelige nettet i stedet for i restnettet er nettopp det som gjør at man går glipp av forbedringer. Å finne en slik sti koster $\\Theta(V+E)$ med `BFS`.",
    },
    {
      question: "Hva er flaskehalsen på en forøkende sti, og hva skjer når du forøker med den?",
      options: ["Den minste restkapasiteten langs stien; minst én kant på stien blir mettet eller tømt etterpå", "Den største restkapasiteten langs stien; alle kantene på stien blir mettet på én gang etterpå", "Summen av restkapasitetene langs stien; hele stien forsvinner fra restnettet etterpå", "Kapasiteten på den siste kanten inn i sluket; bare den kanten endrer restkapasitet etterpå"],
      explanation: "Du kan sende akkurat så mye som det trangeste leddet tåler, og etter forøkningen har det leddet null restkapasitet — stien forsvinner dermed fra restnettet. Flaskehalsen er alltid et positivt tall, siden alle kanter i $G_f$ per definisjon har $c_f > 0$.",
    },
    {
      question: "Hva er et snitt $(S,T)$ i et flytnett?",
      options: ["En oppdeling av $V$ i to deler med $s \\in S$ og $t \\in T$; delene trenger verken være like store eller henge sammen", "En oppdeling av $V$ i to like store deler med $s \\in S$ og $t \\in T$, der begge delene må være sammenhengende", "Mengden av kanter som må fjernes for at nettet skal falle fra hverandre i minst to biter", "Mengden av mettede kanter i nettet, altså de kantene som ikke tåler mer flyt enn de allerede bærer"],
      explanation: "Kravet er bare at hver node havner i nøyaktig én del, og at kilden og sluket havner hver sin vei — $S = \\{s\\}$ er et fullgodt snitt. Et nett med $n$ noder har derfor $2^{n-2}$ ulike snitt. Kantene som krysser, er en konsekvens av oppdelingen, ikke definisjonen av den.",
    },
    {
      question: "Hvordan regnes snittkapasiteten $c(S,T)$ ut?",
      options: ["Summen av kapasitetene på kantene fra $S$ til $T$ — og bare de", "Summen av kapasitetene på kantene fra $S$ til $T$, minus kapasitetene på kantene fra $T$ til $S$", "Summen av kapasitetene på alle kanter som har minst ett endepunkt i $S$", "Summen av flyten på kantene fra $S$ til $T$, siden kapasitet og flyt faller sammen i et snitt"],
      explanation: "Bare kantene som går fra $S$-siden til $T$-siden teller. Kanter den andre veien teller ikke, og kanter internt i $S$ eller internt i $T$ teller heller ikke — det er denne ene detaljen som oftest gir feil svar på en snittoppgave. Å trekke fra motsatt retning er derimot regelen for snitt**flyten**, ikke for kapasiteten.",
    },
    {
      question: "Hvordan regnes snittflyten $f(S,T)$ ut?",
      options: ["Flyten fra $S$ til $T$ minus flyten fra $T$ til $S$ — begge retninger teller, med motsatt fortegn", "Flyten fra $S$ til $T$ alene — kanter den andre veien holdes utenfor, slik som for kapasiteten", "Summen av flyten på alle kanter som krysser snittet, uansett hvilken vei de peker", "Flyten på den mettede kanten som krysser snittet, siden det er den som utgjør flaskehalsen"],
      explanation: "Til forskjell fra kapasiteten teller snittflyten begge retninger, men med motsatt fortegn. Blander du de to reglene — teller retningene i kapasiteten eller ignorerer dem i flyten — får du feil på begge regnestykkene. Det er nettopp fordi de to reglene er ulike at $f(S,T) = \\lvert f \\rvert$ kan holde for **ethvert** snitt.",
    },
    {
      question: "Hva sier snittlemmaet?",
      options: ["For enhver lovlig flyt og ethvert snitt er $f(S,T) = \\lvert f\\rvert$, og dermed $\\lvert f\\rvert \\le c(S,T)$", "For enhver lovlig flyt finnes det ett snitt med $f(S,T) = \\lvert f\\rvert$; for de øvrige snittene er summen lavere", "For enhver lovlig flyt er $\\lvert f\\rvert = c(S,T)$ for ethvert snitt, siden all flyt må gå gjennom hvert snitt", "For maksimal flyt er $\\lvert f\\rvert \\le c(S,T)$; for andre flyter kan ulikheten gå begge veier"],
      explanation: "All flyt som forlater kilden, må krysse ethvert snitt på veien til sluket, og netto kryssing er derfor alltid lik flytverdien — for **hvert** snitt, ikke bare for ett. Ulikheten mot kapasiteten følger fordi hver kant er begrenset av $f(u,v) \\le c(u,v)$. Likhet mellom flytverdien og kapasiteten inntreffer bare for et minimalt snitt.",
    },
    {
      question: "Du finner et snitt med kapasitet 17 i et flytnett. Hva vet du da?",
      options: ["At ingen lovlig flyt kan ha verdi over 17 — ethvert snitt er en øvre grense for maksimal flyt", "At maksimal flyt er nøyaktig 17, siden hvert snitt måler nøyaktig hvor mye som kan passere", "At maksimal flyt er minst 17, siden snittet garanterer at så mye får plass gjennom nettet", "Ingenting — bare det minimale snittet sier noe om maksimal flyt, og du vet ikke om dette er det"],
      explanation: "Snittlemmaet gir $\\lvert f\\rvert \\le c(S,T)$ for hvert eneste snitt, så ethvert snitt du finner, er et tak. At det er nøyaktig 17, vet du bare hvis snittet er minimalt — og det viser du ved å oppgi en flyt med verdi 17. Et snitt er derfor et bevis oppover, aldri nedover.",
    },
    {
      question: "Hva sier heltallsteoremet?",
      options: ["Er alle kapasitetene heltall, finnes det en maksimal flyt der flyten på hver kant er et heltall", "Er alle kapasitetene heltall, er **enhver** maksimal flyt heltallig på hver eneste kant i nettet", "Er alle kapasitetene heltall, er maksimal flyt lik summen av kapasitetene ut av kilden", "Er alle kapasitetene heltall, kan `Ford-Fulkerson` kjøre i polynomisk tid i antall noder"],
      explanation: "Nullflyten er heltallig, hver flaskehals er et heltall, og forøkningen legger til eller trekker fra heltall — så flyten forblir heltallig gjennom hele kjøringen. Teoremet lover **eksistens** av en slik løsning, ikke at alle maksimale flyter er heltallige. Det er nettopp denne eksistensen som gjør maks-flyt brukbart som tilordningsverktøy.",
    },
    {
      question: "Hvorfor gjør heltallsteoremet maks-flyt til et tilordningsverktøy?",
      options: ["Fordi kapasitet 1 på hver person–oppgave-kant garanterer en løsning der hver kant bærer 0 eller 1", "Fordi teoremet garanterer at alle personer får tildelt en oppgave så lenge kapasitetene er heltall", "Fordi heltallige kapasiteter gjør at `Ford-Fulkerson` alltid finner den maksimale flyten på $O(VE)$ tid", "Fordi teoremet lar deg dele en oppgave mellom flere personer med en fast brøkdel til hver av dem"],
      explanation: "Uten teoremet kunne den optimale løsningen tildelt en halv oppgave til hver av to personer, og det gir ingen mening i virkeligheten. Med heltallighet er hver kant enten brukt eller ikke, og modellen leses direkte som en tilordning. Teoremet lover ikke at alle får noe — bare at flest mulig par kan velges heltallig.",
    },
    {
      question: "Hva koster det å bygge restnettet $G_f$ fra en gitt flyt $f$?",
      options: ["$\\Theta(V+E)$ — hver kant behandles én gang og gir inntil to restkanter", "$\\Theta(V^2)$ — hvert nodepar må undersøkes for å avgjøre om det finnes restkapasitet", "$\\Theta(E\\lg V)$ — restkantene må sorteres etter restkapasitet før stien kan velges", "$\\Theta(VE)$ — hver kant må sjekkes én gang for hver node på en mulig forøkende sti"],
      explanation: "Du går gjennom kantmengden én gang og legger inn framoverkanten der det er ledig kapasitet og ryggkanten der det går flyt. Antall restkanter er høyst $2E$, altså fortsatt $O(E)$, og ingen sortering trengs — `BFS` i restnettet velger stien uten å se på restkapasitetene.",
    },
    {
      question: "En kant har $f(u,v) = c(u,v)$. Hva kalles den, og hva betyr det for restnettet?",
      options: ["Den er **mettet**, og framoverkanten $(u,v)$ finnes ikke i restnettet", "Den er **mettet**, og både framoverkanten og ryggkanten finnes i restnettet", "Den er **tom**, og bare framoverkanten $(u,v)$ finnes i restnettet", "Den er **kritisk**, og den må inngå i ethvert minimalt snitt i nettet"],
      explanation: "En mettet kant har $c_f(u,v) = c(u,v) - f(u,v) = 0$, så framoverkanten faller bort — men ryggkanten står der med full kapasitet $c(u,v)$, siden hele flyten kan angres. At en kant er mettet, betyr ikke at den ligger i et minimalt snitt: det avhenger av hvilke noder som er nåbare fra $s$ i restnettet.",
    },
  ],
  'tdt4120-5-2': [
    {
      question: "Hva er kjøretiden til `Edmonds-Karp`?",
      options: ["$O(VE^2)$ — uttrykket inneholder bare grafens størrelse, ingen kapasiteter", "$O(E\\cdot\\lvert f^*\\rvert)$ — antall runder avhenger av maksimal flytverdi", "$\\Theta(V^3)$ — som `Floyd-Warshall`, siden begge arbeider på hele grafen", "$O(E\\lg V)$ — prioritetskøen dominerer, som i `Dijkstra` og `Prim`"],
      explanation: "Hver kant kan være flaskehals $O(V)$ ganger, det gir $O(VE)$ forøkninger, og hver `BFS` koster $O(E)$. Alternativet $O(E\\cdot\\lvert f^*\\rvert)$ er grensen for den generelle Ford-Fulkerson-metoden, og det er nettopp forskjellen mellom pseudopolynomisk og polynomisk.",
    },
    {
      question: "Hva er forskjellen mellom `Ford-Fulkerson` og `Edmonds-Karp`?",
      options: ["`Edmonds-Karp` velger alltid den **korteste** forøkende stien, funnet med `BFS`", "`Edmonds-Karp` bygger ikke restnett, men arbeider direkte på det opprinnelige nettet", "`Edmonds-Karp` bruker ryggkanter, mens `Ford-Fulkerson` bare bruker framoverkanter", "`Edmonds-Karp` finner min-snittet, mens `Ford-Fulkerson` bare finner flytverdien"],
      explanation: "Det er hele forskjellen, og den er nok til å gjøre kjøretiden uavhengig av kapasitetene. Begge bygger restnett og begge bruker ryggkanter — uten ryggkantene ville ingen av dem funnet maksimal flyt.",
    },
    {
      question: "Hva sier maks-flyt/min-snitt-teoremet?",
      options: ["Maksimal flytverdi er lik den minimale snittkapasiteten i nettet", "Maksimal flytverdi er lik summen av kapasitetene ut av kilden $s$", "Maksimal flytverdi er lik antall kanter som krysser et vilkårlig snitt", "Maksimal flytverdi er lik den maksimale snittkapasiteten i nettet"],
      explanation: "De tre utsagnene «flyten er maksimal», «ingen forøkende sti finnes» og «det finnes et snitt med $\\lvert f\\rvert = c(S,T)$» er ekvivalente. Summen ut av kilden er bare en øvre grense — snittet $S = \\{s\\}$ er ett av mange snitt, og sjelden det billigste.",
    },
    {
      question: "Hvordan leser du av et min-snitt når `Ford-Fulkerson` har stoppet?",
      options: ["Kjør én `BFS` fra $s$ i restnettet; nodene som nås, utgjør $S$", "Kjør én `BFS` fra $t$ i det opprinnelige nettet; nodene som nås, utgjør $T$", "Velg de kantene som bærer mest flyt, og la endepunktene deres utgjøre $S$", "Prøv alle mulige snitt og velg det med lavest kapasitet blant dem"],
      explanation: "Når ingen forøkende sti finnes, er $t$ utilgjengelig fra $s$, så delingen er automatisk et snitt — og hver kryssende kant er mettet. Å prøve alle snitt ville tatt eksponentiell tid; hele poenget er at snittet kommer gratis.",
    },
    {
      question: "Hva vil det si at `Ford-Fulkerson` er **pseudopolynomisk**?",
      options: ["Kjøretiden er polynomisk i tallverdiene i inputen, men ikke i inputens lengde", "Kjøretiden er polynomisk i verste tilfelle, men eksponentiell i beste tilfelle", "Kjøretiden er polynomisk bare når kapasitetene er ikke-negative heltall", "Kjøretiden er polynomisk i antall noder, men eksponentiell i antall kanter"],
      explanation: "En kapasitet på $10^9$ krever bare 30 binære siffer å skrive ned, men kan gi en milliard runder — altså eksponentielt i inputens lengde. Dette sier noe om algoritmen, ikke om problemet, og å blande de to er felle #7.",
    },
    {
      question: "En kandidat skriver: «Ford-Fulkerson er ikke polynomisk, så maks-flyt er NP-hardt.» Stemmer det?",
      options: ["Nei — `Edmonds-Karp` løser maks-flyt i $O(VE^2)$, så problemet ligger i P", "Ja — en algoritme som ikke er polynomisk, viser at problemet er vanskelig", "Ja — men bare når kapasitetene er så store at antall runder blir stort", "Nei — maks-flyt er verken i P eller NP-hardt, det er et åpent spørsmål"],
      explanation: "Et problem er lett så snart det finnes **minst én** polynomisk algoritme for det — ikke først når alle algoritmer er polynomiske. Dette er felle #7, og den er blant fagets mest fremhevede skiller mellom riktig og galt.",
    },
    {
      question: "Hva er flaskehalsen på en forøkende sti?",
      options: ["Den minste restkapasiteten blant kantene på stien", "Den største restkapasiteten", "Summen av restkapasitetene på alle kantene på stien", "Kapasiteten på den siste kanten inn til sluket $t$"],
      explanation: "Flyten kan økes med nøyaktig så mye som den trangeste kanten slipper gjennom, og etter forøkningen er den kanten mettet. Med heltallige kapasiteter er flaskehalsen minst 1, og det er nettopp derfor metoden terminerer.",
    },
    {
      question: "Hvorfor trenger `Ford-Fulkerson` ryggkanter i restnettet?",
      options: ["For å kunne trekke tilbake flyt som ble sendt feil vei i en tidligere runde", "For at restnettet skal ha like mange kanter som det opprinnelige nettet", "For at `BFS` skal kunne finne den korteste stien i stedet for en vilkårlig", "For at flytverdien skal kunne leses av ved sluket i stedet for ved kilden"],
      explanation: "En forøkende sti som går bakover langs en kant med flyt, senker flyten der og omdirigerer den — uten den muligheten stopper metoden på en flyt som ikke er maksimal. Ryggkantene er altså ikke bokføring, men selve angremuligheten.",
    },
    {
      question: "Hvilke kanter teller med i snittkapasiteten $c(S,T)$?",
      options: ["Bare kantene som går fra $S$ til $T$", "Alle kanter med endepunkt i $S$", "Kantene som går fra $S$ til $T$ og fra $T$ til $S$", "Bare kantene fra $S$ til $T$ som faktisk bærer flyt"],
      explanation: "Kanter fra $T$ til $S$ påvirker nettoflyten $f(S,T)$, men ikke kapasiteten — de kan bare trekke flyt tilbake, ikke slippe mer gjennom. At en kryssende kant bærer flyt eller ikke, er også irrelevant: kapasiteten er en øvre grense uansett.",
    },
    {
      question: "Hvordan beviser du at en gitt flyt er maksimal?",
      options: ["Finn et snitt med $c(S,T)$ lik flytverdien", "Vis at alle kantene ut av kilden $s$ er mettet i den gitte flyten", "Vis at ingen kant i nettet har restkapasitet igjen etter kjøringen", "Finn et dyrere snitt"],
      explanation: "Snittlemmaet gir $\\lvert f\\rvert \\le c(S,T)$ for ethvert snitt, så en flyt som treffer et snitt, kan ikke slås. Et **dyrere** snitt gir bare en øvre grense som allerede er oppfylt, og beviser dermed ingenting.",
    },
    {
      question: "Hvorfor krever `Ford-Fulkerson` heltallige kapasiteter for å terminere?",
      options: ["Fordi flaskehalsen da er minst 1, så flytverdien øker med minst 1 per runde", "Fordi restnettet ellers ikke kan bygges, siden restkapasiteten blir en brøk", "Fordi `BFS` ikke kan søke i en graf med kanter som har desimale vekter", "Fordi maks-flyt/min-snitt-teoremet bare gjelder for heltallige kapasiteter"],
      explanation: "Med reelle kapasiteter kan flaskehalsene bli stadig mindre uten at flyten når det maksimale, og løkka kan i teorien kjøre i det uendelige. Teoremet selv gjelder uansett, og `Edmonds-Karp` terminerer også uten heltall — det er termineringen til den generelle metoden som avhenger av dem.",
    },
    {
      question: "Hva er egenskapen til en kant som krysser et min-snitt fra $S$ til $T$?",
      options: ["Den er mettet — hele kapasiteten er i bruk", "Den er tom", "Den bærer nøyaktig halvparten av kapasiteten sin", "Den har alltid den laveste kapasiteten i hele nettet"],
      explanation: "Var den ikke mettet, ville den gitt en restkant, og da ville noden på $T$-siden vært nåbar fra $s$ — altså hadde den ligget i $S$. Kanter den motsatte veien er derimot **tomme**, av nøyaktig samme grunn.",
    },
    {
      question: "Du modellerer en tilordning som maks-flyt. Hvor koder du «hver person kan ta høyst tre oppdrag»?",
      options: ["Som kapasitet 3 på kanten fra kilden $s$ til personens node", "Som kapasitet 3 på kantene fra personens node til hvert oppdrag", "Som kapasitet 3 på kanten fra hvert oppdrag til sluket $t$", "Som tre parallelle kanter fra kilden $s$ til personens node"],
      explanation: "All flyt til en person passerer den ene kildekanten, så kapasiteten der er den naturlige øvre grensen på antall oppdrag. Kapasitet 3 på midtkantene ville tillatt tre enheter til **samme** oppdrag, og kapasitet på slukkantene koder hvor mange personer hvert oppdrag trenger.",
    },
    {
      question: "Hva garanterer heltallsteoremet i en flytmodellering?",
      options: ["At det finnes en maksimal flyt der hver kant bærer et heltall", "At alle maksimale flyter i nettet er heltallige på hver eneste kant", "At maksimal flytverdi alltid er et heltall, uansett kapasitetene", "At antall forøkende stier er et heltall"],
      explanation: "Med heltallige kapasiteter legger metoden bare til heltallige flaskehalser, så den flyten den finner, er heltallig — og det er den som leses av som tildelingen. At **alle** maksimale flyter skulle være heltallige, er galt: en annen fordeling kan godt dele en enhet på to veier.",
    },
    {
      question: "Hva er stoppkriteriet i `Ford-Fulkerson`-metoden?",
      options: ["At det ikke lenger finnes noen sti fra $s$ til $t$ i restnettet", "At alle kantene ut av kilden $s$ har blitt mettet i løpet av kjøringen", "At flytverdien har nådd summen av alle kapasitetene i hele nettet", "At hver kant er besøkt minst én gang"],
      explanation: "Fravær av forøkende sti er nøyaktig det som gjør flyten maksimal — det er ett av de tre ekvivalente utsagnene i teoremet. At kildekantene er mettet, er verken nødvendig eller tilstrekkelig: flaskehalsen kan like gjerne ligge lenger inne i nettet.",
    },
    {
      question: "Et flytnett har fire noder og kapasiteter på en million. Hva slags kjøring får `Edmonds-Karp`?",
      options: ["Få runder — antall forøkninger avhenger av grafens form, ikke av tallene", "Rundt en million runder — antall forøkninger følger den maksimale flytverdien", "Én runde per kant i nettet, altså like mange runder som det er kanter", "Rundt fire runder — én per node, siden `BFS` besøker hver node én gang"],
      explanation: "Grensen $O(VE)$ på antall forøkninger inneholder bare $V$ og $E$, så store kapasiteter gir bare større flaskehalser, ikke flere runder. Det er den generelle Ford-Fulkerson-metoden med uheldige stivalg som kan bruke en runde per flytenhet.",
    },
  ],
  'tdt4120-5-3': [
    {
      question: "Hva er svarformatet når en flytoppgave ber om «maksimal flyt og et min-snitt»?",
      options: ["Flytverdien **og** snittet med de kryssende kantene — begge deler", "Bare flytverdien, siden snittet kan utledes av den uten videre arbeid", "Bare snittet, siden kapasiteten er lik flytverdien uansett hvordan man regner", "Hele flyttabellen med $f/c$ for hver eneste kant i nettet"],
      explanation: "Er begge etterspurt, er begge en del av svaret — og snittet koster ingenting ekstra, siden det leses av med én `BFS` i det siste restnettet. Hele flyttabellen er sjelden etterspurt, og lange svar teller ikke positivt.",
    },
    {
      question: "Hva gjør du med flyten på en kant der den forøkende stien går **bakover**?",
      options: ["Trekker flaskehalsen **fra** flyten på kanten", "Legger flaskehalsen **til** flyten på kanten, som på framoverkantene", "Setter flyten på kanten til null, siden stien angrer bruken av den", "Lar flyten stå uendret — ryggkanter er bare bokføring i restnettet"],
      explanation: "En ryggkant representerer muligheten til å trekke tilbake flyt som ble sendt framover før, og forøkningen realiserer nettopp det. Å la den stå uendret er den vanligste håndkjøringsfeilen — og da finner algoritmen ikke maksimal flyt.",
    },
    {
      question: "I en modellering: hvor koder du «hver ansatt kan ta høyst fire vakter»?",
      options: ["Som kapasitet 4 på kanten fra kilden $s$ til den ansattes node", "Som kapasitet 4 på hver kant fra den ansatte til de aktuelle vaktene", "Som kapasitet 4 på kanten fra hver vakt til sluket $t$ i nettet", "Som fire parallelle kanter fra den ansattes node til hver vakt"],
      explanation: "All flyt til den ansatte passerer den ene kildekanten, så kapasiteten der er den naturlige grensen på antall vakter. Kapasitet 4 på midtkantene ville tillatt fire enheter til **samme** vakt, og slukkantene koder hvor mange ansatte hver vakt trenger.",
    },
    {
      question: "Hvordan koder du at en bestemt tildeling **ikke** er tillatt?",
      options: ["Ved at midtkanten mellom de to nodene rett og slett ikke finnes", "Ved å gi midtkanten kapasitet 0, slik at ingen flyt kan gå der", "Ved å gi midtkanten uendelig kapasitet, slik at den ignoreres", "Ved å fjerne begge nodene fra nettet før algoritmen kjøres"],
      explanation: "Kantenes **eksistens** koder hva som er tillatt, mens kapasitetene koder hvor mange. En kant med kapasitet 0 gir riktignok samme resultat, men den er unødvendig — og å blande de to kodingene er den vanligste modelleringsfeilen.",
    },
    {
      question: "Hva sikrer at flyten kan leses som en konkret tildeling?",
      options: ["Heltallsteoremet — med heltallige kapasiteter finnes en heltallig maksimal flyt", "Maks-flyt/min-snitt-teoremet, som gir at flytverdien er lik snittkapasiteten", "Bevaringsbetingelsen, som sikrer at like mye går inn som ut av hver node", "At `Edmonds-Karp` alltid velger den korteste forøkende stien i restnettet"],
      explanation: "Uten heltallighet kunne en midtkant båret 0,5, og «halvparten av en vakt» gir ingen mening som tildeling. Maks-flyt/min-snitt sier at flyten er optimal, men ikke noe om at den er heltallig.",
    },
    {
      question: "Hvilket mønster i oppgaveteksten peker mot **min-snitt** i stedet for maks-flyt?",
      options: ["«Finn den billigste barrieren som gjør det umulig å komme fra X til Y»", "«Fordel oppgavene på personene, med en øvre grense for hver person»", "«Finn den korteste veien fra startpunktet til hvert av de andre stedene»", "«Knytt sammen alle punktene så billig som mulig, uten å lage ringer»"],
      explanation: "«Billigste barriere» er den direkte oversettelsen av snittkapasitet, og snittet leses av gratis etter en maks-flyt-kjøring. Fordelingsmønsteret peker mot maks-flyt, korteste vei mot `Dijkstra`, og det siste mot et minimalt spenntre.",
    },
    {
      question: "Hva gjør du når kostnaden i et barriereproblem ligger på **noder** i stedet for kanter?",
      options: ["Splitter hver node i to, med en indre kant som bærer nodens kostnad", "Setter kostnaden på alle kantene ut av noden, siden all flyt passerer dem", "Multipliserer kostnadene på nabokantene med nodens egen kostnad", "Fjerner noden helt og lar nabokantene gå direkte mellom naboene"],
      explanation: "Etter splittingen må all flyt gjennom noden passere den indre kanten, så en kapasitet der er nøyaktig en kapasitet på noden. Å legge kostnaden på utgående kanter ville telt den flere ganger — én gang per kant.",
    },
    {
      question: "Hva er kontrollen på at en flyt-håndkjøring er ferdig og riktig?",
      options: ["At snittkapasiteten til det avleste snittet er lik flytverdien", "At alle kantene ut av kilden $s$ er mettet i den endelige flyten", "At hver kant i nettet bærer minst én enhet flyt når du er ferdig", "At antall forøkende stier er lik antall kanter i det opprinnelige nettet"],
      explanation: "Maks-flyt/min-snitt-teoremet gjør likheten til et fullgodt bevis, og den tar fem sekunder å sjekke. At kildekantene er mettet er verken nødvendig eller tilstrekkelig — flaskehalsen kan ligge hvor som helst i nettet.",
    },
    {
      question: "Hvorfor bruker `Edmonds-Karp` `BFS` og ikke et vilkårlig søk?",
      options: ["Fordi korteste sti gir grensen $O(VE)$ på antall forøkninger", "Fordi `BFS` alltid finner stien med størst flaskehals i restnettet", "Fordi `DFS` ikke kan brukes på grafer som inneholder ryggkanter", "Fordi `BFS` er raskere enn `DFS` på grafer med mange kanter i seg"],
      explanation: "Avstanden fra $s$ til hver node er ikke-synkende gjennom kjøringen, og det binder hvor mange ganger en kant kan bli flaskehals. `BFS` finner stien med færrest **kanter**, ikke den med størst flaskehals — det er en annen strategi.",
    },
    {
      question: "Et flytnett har min-snitt $S = \\{s, a, b\\}$ med kantene $a \\to c$ (8) og $b \\to d$ (10). Hva skjer hvis du øker $c(s,a)$ fra 12 til 100?",
      options: ["Ingenting — maks-flyt er uendret, siden kanten ikke krysser min-snittet", "Maks-flyt øker med 88, siden kilden nå kan sende ut atskillig mer flyt enn før", "Maks-flyt øker til 100, siden den nye kapasiteten blir flaskehalsen", "Min-snittet flytter seg til $S = \\{s\\}$, og maks-flyt blir 109"],
      explanation: "Flaskehalsen ligger i kantene som krysser snittet, og de er uendret på 8 og 10. Min-snittet peker altså direkte på hvilke kapasiteter det er verdt å investere i — og hvilke som ikke betyr noe.",
    },
    {
      question: "Hvilke fem ledd skal et sjanger H-svar inneholde?",
      options: ["Problemet, paradigmet, konstruksjonen, rekonstruksjonen og kjøretiden", "Problemet, pseudokoden, invarianten, korrekthetsbeviset og kjøretiden", "Konstruksjonen, en figur, en håndkjøring, kjøretiden og en konklusjon", "Paradigmet, kjøretiden, en alternativ løsning og en sammenligning av de to"],
      explanation: "Rekonstruksjonen er det leddet som oftest glipper, og den er også den som skiller et fullt svar fra et halvt — oppgaven ber om en plan, ikke om et tall. Et fullt korrekthetsbevis er ikke etterspurt i denne sjangeren, og det ville dessuten tatt for lang tid.",
    },
    {
      question: "Hva betyr det at flyten på en midtkant er 1 i et matchingnett?",
      options: ["At nettopp den tildelingen inngår i løsningen", "At tildelingen er tillatt", "At kanten er mettet, og at ingen andre tildelinger er mulige for de to", "At tildelingen har kostnad 1, som er den laveste mulige kostnaden"],
      explanation: "Midtkantene med flyt utgjør nettopp den løsningen algoritmen fant, og det er avlesningen som er svaret på oppgaven. At kanten **finnes**, koder at tildelingen er tillatt; at den **bærer flyt**, koder at den er valgt.",
    },
    {
      question: "Hvor mange runder bruker `Edmonds-Karp` på et nett med fire noder og kapasiteter på 20?",
      options: ["Få — antall runder avhenger av grafens form, ikke av tallenes størrelse", "Rundt 40 — én runde per enhet flyt som til slutt skal presses gjennom nettet", "Rundt 20 — én runde per enhet kapasitet på den trangeste kanten", "Nøyaktig fire — én runde per node i det aktuelle flytnettet"],
      explanation: "Grensen $O(VE)$ på antall forøkninger inneholder bare $V$ og $E$, så store kapasiteter gir bare større flaskehalser per runde. Det er den generelle Ford-Fulkerson-metoden med uheldige stivalg som kan bruke én runde per flytenhet.",
    },
    {
      question: "Hva er kjøretiden for å lese tildelingen ut av en ferdig maksimal flyt?",
      options: ["$O(E)$ — ett gjennomløp av kantene, som ikke øker den asymptotiske kjøretiden", "$O(VE^2)$ — algoritmen må kjøres en gang til for å hente ut selve løsningen", "$O(V\\lg V)$ — kantene må sorteres før tildelingen kan leses av entydig", "$O(V^2)$ — hvert par av noder må sjekkes mot hverandre i avlesningen"],
      explanation: "Du går gjennom midtkantene én gang og noterer dem som bærer flyt — ingen ny kjøring trengs. At avlesningen ikke øker kjøretiden, er nettopp den setningen som skal stå eksplisitt i et designsvar.",
    },
    {
      question: "En oppgave ber om en vaktliste. Kandidaten svarer «maksimal flyt er 14, så det går opp». Hva mangler?",
      options: ["Selve vaktlisten — oppgaven ba om tildelingen, ikke om et ja eller nei", "Ingenting — flytverdien viser at vaktene kan dekkes", "En begrunnelse for at `Edmonds-Karp` gir riktig maksimal flytverdi i dette nettet", "En sammenligning med hva `Ford-Fulkerson` ville gitt på det samme nettet"],
      explanation: "Å oppgi bare optimalverdien uten rekonstruksjonen er felle #6, og det koster typisk et helt ledd av uttellingen. Korrektheten til `Edmonds-Karp` er pensum og trenger ingen ny begrunnelse i et designsvar.",
    },
    {
      question: "Hva er $S$ i det avleste min-snittet etter at algoritmen har stoppet?",
      options: ["Nodene som kan nås fra $s$ i det siste restnettet", "Nodene som kan nås fra $s$ i nettet", "Nodene som ligger på minst én av de forøkende stiene underveis", "Nodene som har minst én mettet kant ut av seg i den endelige flyten"],
      explanation: "Siden ingen forøkende sti finnes, ligger $t$ utenfor denne mengden, og delingen er automatisk et snitt der hver kryssende kant er mettet. I det **opprinnelige** nettet vil $t$ som regel være nåbar, så den mengden er ubrukelig som snitt.",
    },
    {
      question: "En jobb krever 5 kjerner og kan splittes på flere servere. Hva er kapasiteten på kildekanten?",
      options: ["5 — kapasiteten koder hvor mange enheter jobben trenger", "1 — hver jobb er én enhet", "Antall servere jobben kan kjøres på, siden den kan splittes fritt", "Uendelig — splittingen gjør at det ikke trengs noen øvre grense her"],
      explanation: "Flyten gjennom jobbnoden måler antall kjerner, og hele behovet skal dekkes, så kildekanten må slippe gjennom nøyaktig 5. Kapasitet 1 hører til en ren matching, der hver venstre node skal pares én-til-én.",
    },
    {
      question: "Hva er forskjellen på en ren matching og et generelt tilordningsproblem i flytmodellering?",
      options: ["I en matching er alle kapasitetene 1, så flyten leses som ja eller nei", "I en matching er nettet urettet, mens et tilordningsproblem krever retninger", "I en matching brukes `Ford-Fulkerson`, mens tilordning krever `Edmonds-Karp`", "I en matching trengs ingen kilde og sluk, siden nodene pares direkte"],
      explanation: "Med kapasitet 1 overalt kan hver node inngå i høyst én kobling, og en midtkant med flyt betyr «dette paret er valgt». Er kapasitetene større, leses flyten som «hvor mye» i stedet for «om» — men nettet, retningene og algoritmen er de samme.",
    },
  ],
  'tdt4120-6-1': [
    {
      question: "Hva betyr det at et problem har **overlappende delproblemer**?",
      options: ["At den rekursive løsningen møter de samme delproblemene om og om igjen, slik at svarene kan gjenbrukes", "At delproblemene deler input med hverandre, men at hvert enkelt av dem likevel må løses helt på nytt hver gang", "At delproblemene kan løses uavhengig av hverandre og derfor gjerne kan kjøres i parallell", "At løsningen på hele problemet er summen av løsningene på delproblemene, uten dobbelttelling"],
      explanation: "Overlappet er nettopp det som gjør lagring lønnsomt: er hvert delproblem nytt, sparer du ingenting på å huske svarene. `Merge-Sort` deler også opp, men de to halvdelene er alltid forskjellige — der er delproblemene uavhengige, og dynamisk programmering gir null gevinst.",
    },
    {
      question: "Du står nederst i en trapp med $n$ trinn og kan ta enten ett eller to trinn av gangen. Hvilken rekurrens teller antall måter å komme opp på?",
      options: ["$T(n) = T(n-1) + T(n-2)$ — siste steg var enten ett trinn eller to, og de to tilfellene er disjunkte", "$T(n) = T(n-1) \\cdot T(n-2)$ — de to mulige siste stegene kombineres med hverandre på alle måter", "$T(n) = 2T(n/2)$ — trappa deles i to like halvdeler som hver kan gås på $T(n/2)$ måter hver for seg", "$T(n) = T(n-1) + 1$ — hvert nytt trinn gir nøyaktig én ny mulighet i tillegg til dem du hadde"],
      explanation: "Enhver vei opp ender med enten ett eller to trinn, og de to gruppene overlapper ikke — derfor legges de sammen. Dette er fibonaccirekurrensen, og den er nettopp grunnen til at den naive rekursjonen er eksponentiell: $T(n-2)$ regnes ut på nytt inne i $T(n-1)$.",
    },
    {
      question: "Hva betyr **optimal substruktur**?",
      options: ["At en optimal løsning på hele problemet inneholder optimale løsninger på delproblemene sine", "At problemet kan deles i like store deler, slik at rekursjonstreet blir balansert", "At antall delproblemer er polynomisk i inputstørrelsen, slik at tabellen får håndterbar størrelse", "At det finnes en grådig regel som velger riktig delproblem uten å se på de øvrige valgene"],
      explanation: "Egenskapen er det som gjør at du kan bygge svaret nedenfra: er den beste løsningen på et delproblem ikke en del av den beste helhetsløsningen, kan du ikke sette sammen svarene. Balanserte deler er `Merge-Sort`s sak, og en grådig valgregel er en strengere egenskap som dynamisk programmering ikke krever.",
    },
    {
      question: "Hva er forskjellen på memoisering og bottom-up-utfylling?",
      options: ["Memoisering er rekursiv og regner bare ut de delproblemene som etterspørres; bottom-up fyller hele tabellen i en fast rekkefølge", "Memoisering er iterativ og fyller hele tabellen i én omgang; bottom-up er rekursiv og regner ut de delproblemene som etterspørres", "Memoisering gir alltid lavere asymptotisk kjøretid, siden den slipper å regne ut ubrukte delproblemer", "Memoisering lagrer bare valgtabellen, mens bottom-up i tillegg lagrer verditabellen for hvert delproblem"],
      explanation: "De to er to veier til samme sted, og de gir samme asymptotiske kjøretid — begge løser hvert delproblem én gang og gjør konstant arbeid per delproblem. Memoisering kan spare **konstantfaktorer** når mange delproblemer aldri etterspørres, men den asymptotiske grensen er den samme. Begge lagrer verdier, og begge kan i tillegg lagre valg.",
    },
    {
      question: "Hva er kjøretiden til `Naiv-Fib(n)` og `Memoized-Fib(n)`?",
      options: ["`Naiv-Fib` er eksponentiell i $n$; `Memoized-Fib` er $\\Theta(n)$", "`Naiv-Fib` er $\\Theta(n^2)$; `Memoized-Fib` er $\\Theta(n)$", "`Naiv-Fib` er $\\Theta(n\\lg n)$; `Memoized-Fib` er $\\Theta(\\lg n)$", "Begge er $\\Theta(n)$; forskjellen ligger bare i hvor mye plass de bruker"],
      explanation: "Uten lagring følger antall kall selv fibonaccirekurrensen, og antallet vokser eksponentielt. Med lagring løses hvert av delproblemene $0$ til $n$ nøyaktig én gang, og resten av kallene er oppslag. Forskjellen er altså i tid, ikke bare i plass — det er hele poenget med å memoisere.",
    },
    {
      question: "Hva er kjøretidsregelen for en dynamisk programmering?",
      options: ["Antall delproblemer ganger arbeidet per delproblem, medregnet hvor mange valg hvert delproblem har", "Antall delproblemer pluss arbeidet per delproblem, siden hele tabellen fylles i én eneste gjennomgang", "Antall delproblemer opphøyd i antall valg, siden hvert valg gir en ny gren i rekursjonen", "Antall celler i tabellen ganget med logaritmen av antall celler, på grunn av oppslagene"],
      explanation: "Regelen er et produkt: er det $n$ delproblemer og hvert av dem krever et minimum over $j$ alternativer, blir det $\\Theta(nj)$. Derfor er stavkapping $\\Theta(n^2)$ selv om tabellen bare har $n$ celler — hver celle koster $O(n)$ arbeid. Å legge sammen i stedet for å gange overser nettopp dette.",
    },
    {
      question: "Hvorfor gir memoisering ingen gevinst for `Merge-Sort`?",
      options: ["Fordi delproblemene aldri gjentar seg — de to halvdelene er alltid ulike, så ingenting kan gjenbrukes", "Fordi `Merge-Sort` allerede er $\\Theta(n\\lg n)$, som er den nedre grensen for enhver sammenligningsbasert sortering", "Fordi `Merge-Sort` mangler optimal substruktur — en sortert halvdel gir ikke et sortert hele", "Fordi tabellen ville måtte lagre hele delarrayer, og oppslagene ville blitt for dyre til å lønne seg"],
      explanation: "Dynamisk programmering krever begge egenskapene, og `Merge-Sort` har bare den ene: substrukturen er optimal, men delproblemene overlapper ikke. Splitt-og-hersk deler inputen i disjunkte biter, og en bit du har sortert, dukker aldri opp igjen. Den nedre grensen for sortering er sann, men den forklarer ikke hvorfor lagring ikke hjelper.",
    },
    {
      question: "Hva trengs for å hente ut selve løsningen og ikke bare optimalverdien?",
      options: ["En valgtabell som lagrer hvilket valg som ga verdien i hver celle, lest baklengs etterpå", "En ekstra gjennomgang av verditabellen der cellene sammenlignes med hverandre på nytt", "En rekursiv gjenkjøring av hele algoritmen, siden valgene ikke kan lagres underveis", "Ingenting ekstra — verditabellen inneholder allerede selve løsningen, bare skrevet som tall"],
      explanation: "Verditabellen sier hvor godt det gikk, ikke hva du gjorde. Valgtabellen lagres samtidig med verdiene og koster ingenting ekstra asymptotisk, og `Print-Solution` leser den baklengs på $O(n)$. Å regne ut valgene på nytt i etterkant er mulig, men unødvendig arbeid som eksamensfasitene ikke belønner.",
    },
    {
      question: "En oppgave ber om «den høyeste samlede betalingen og hvilke netter som velges». Hva er den vanligste tabben?",
      options: ["Å levere bare tallet — optimalverdien alene svarer ikke på hvilke netter som inngår", "Å levere bare nettene — listen alene svarer ikke på hva den samlede betalingen blir", "Å levere hele den utfylte tabellen i stedet for å oppsummere svaret i én linje", "Å levere rekurrensen i stedet for å regne den ut på de konkrete tallene i oppgaven"],
      explanation: "Utfyllingen gir optimalverdien, og det er lett å stoppe der — men oppgaven ba om to ting, og rekonstruksjonen fra valgtabellen er den andre. Å levere hele tabellen er ikke feil i seg selv, bare unødvendig; det er det manglende leddet som koster poeng.",
    },
    {
      question: "Hva er kravet til fylleorden i en bottom-up dynamisk programmering?",
      options: ["Hver celle må fylles etter alle cellene den er avhengig av, slik rekurrensen definerer avhengighetene", "Cellene må fylles i stigende indeksrekkefølge, siden avhengighetene i en rekurrens alltid peker mot lavere indekser", "Cellene må fylles radvis fra venstre mot høyre, siden det er den rekkefølgen løkkene skriver dem i", "Rekkefølgen er likegyldig, siden hver celle uansett regnes ut på nytt hvis avhengigheten mangler"],
      explanation: "Avhengighetene i rekurrensen bestemmer rekkefølgen, og lovlige fylleordener er nettopp de topologiske sorteringene av delproblemgrafen. Stigende indeks er ofte en slik orden, men ikke alltid — i LCS må både $i-1$ og $j-1$ være ferdige, og i noen problemer teller løkkene nedover. Bottom-up regner ingenting ut på nytt; den forutsetter at avhengigheten allerede står der.",
    },
    {
      question: "Hva er delproblemgrafen til en dynamisk programmering?",
      options: ["En rettet graf med ett hjørne per delproblem og en kant til hvert delproblem det avhenger av", "En rettet graf med ett hjørne per inputelement og en kant mellom elementer som sammenlignes", "Rekursjonstreet til den naive løsningen, med alle gjentakelsene tegnet ut hver for seg", "En urettet graf der hjørnene er tabellceller og kantene viser hvilke celler som har samme verdi"],
      explanation: "Grafen er rekursjonstreet med de gjentatte delproblemene slått sammen til ett hjørne hver, og den er per definisjon syklusfri — ellers ville et delproblem avhengt av seg selv. Antall hjørner er antall delproblemer, og antall kanter er summen av valgene, som til sammen gir kjøretiden.",
    },
    {
      question: "Hva er forskjellen på avgjørelsesvarianten og optimeringsvarianten av et problem?",
      options: ["Avgjørelsesvarianten legger til en terskel $k$ og svarer ja eller nei; optimeringsvarianten leverer den beste verdien", "En rettet graf med ett hjørne per inputelement og en kant mellom nettopp de elementene som sammenlignes med hverandre underveis", "Avgjørelsesvarianten er alltid strengt vanskeligere enn optimeringsvarianten av det samme problemet", "Avgjørelsesvarianten gjelder bare grafproblemer, mens optimeringsvarianten gjelder tallproblemer"],
      explanation: "«Finn den største verdien» blir «finnes det en løsning med verdi minst $k$?», og terskelen er en del av inputen. Avgjørelsesvarianten er aldri vanskeligere: kan du finne den beste løsningen, kan du sammenligne den med $k$. Skillet er det som gjør at NP-teorien kan formuleres på ja/nei-problemer alene.",
    },
    {
      question: "Hva er rollen til grunntilfellet i en DP-rekurrens?",
      options: ["Det gir de cellene som fylles uten å slå opp i andre celler, og uten dem stopper ikke rekurrensen", "Avgjørelsesvarianten leverer den beste verdien; optimeringsvarianten leverer i tillegg selve løsningen som ga den", "Det avgjør hvor stor tabellen må være, siden antall grunntilfeller er lik antall dimensjoner", "Det er valgfritt i en bottom-up-løsning, siden utfyllingen uansett starter fra den første cellen"],
      explanation: "Grunntilfellene er ankeret: $r_0 = 0$ i stavkapping og $c[i,0] = c[0,j] = 0$ i LCS. Uten dem har den første cellen ingenting å slå opp i, og bottom-up-varianten er like avhengig av dem som den rekursive. Hvor svaret leses av til slutt, er et annet spørsmål — det er ofte den siste cellen, ikke den første.",
    },
    {
      question: "Når kan en DP-tabell plassoptimaliseres?",
      options: ["Når hver celle bare avhenger av et fast antall foregående rader, slik at eldre rader kan kastes", "Det angir hvilken celle svaret til slutt skal leses av fra, altså hvor utfyllingen ender opp til sist", "Aldri — hele tabellen må ligge der til slutt for at kjøretiden skal holde seg polynomisk", "Bare når problemet er endimensjonalt, siden todimensjonale tabeller ikke kan komprimeres"],
      explanation: "Trenger `LCS-Length` bare rad $i-1$ for å fylle rad $i$, holder det å ha to rader om gangen, og plassen faller fra $\\Theta(nm)$ til $\\Theta(\\min(n,m))$. Prisen er at du mister rekonstruksjonen: uten hele tabellen eller valgtabellen kan du ikke lese ut selve løsningen etterpå.",
    },
    {
      question: "Hva er kjøretiden og plassbruken til `Bottom-Up-Fib(n)` slik den er satt opp med tabellen `b[0..n]`?",
      options: ["$\\Theta(n)$ tid og $\\Theta(n)$ plass — men plassen kan senkes til $\\Theta(1)$ med to rullerende variabler", "Alltid — en DP-tabell kan alltid komprimeres helt ned til konstant plass uten at noe som helst går tapt", "$\\Theta(n^2)$ tid og $\\Theta(n)$ plass — hver celle må slå opp i alle de foregående cellene", "$\\Theta(\\lg n)$ tid og $\\Theta(\\lg n)$ plass — hvert steg dobler indeksen i tabellen"],
      explanation: "Løkka går én gang gjennom $n$ celler og gjør konstant arbeid i hver, og tabellen har $n+1$ plasser. Siden hver celle bare avhenger av de to foregående, kan tabellen erstattes av to variabler — et rent plasstriks som ikke endrer kjøretiden. Rekursjonen har bare to ledd, ikke alle foregående.",
    },
    {
      question: "Hvilke delproblemer regner en memoisert løsning faktisk ut?",
      options: ["Bare de som etterspørres av rekursjonen fra det opprinnelige kallet, og hvert av dem nøyaktig én gang", "$\\Theta(n)$ tid og $\\Theta(1)$ plass — tabellen er unødvendig og finnes ikke i implementasjonen av rutinen", "Bare grunntilfellene; resten leses av tabellen uten at noen utregning finner sted i det hele tatt", "Alle delproblemer, og de som etterspørres flere ganger, regnes ut på nytt for hver forespørsel"],
      explanation: "Rekursjonen styrer hvilke celler som berøres, og et delproblem ingen spør etter, blir aldri regnet ut — det er den ene praktiske forskjellen fra bottom-up. Første gang et delproblem møtes, regnes det ut og lagres; alle senere møter er rene oppslag.",
    },
  ],
  'tdt4120-6-2': [
    {
      question: "Hva er stavkapping-rekurrensen for den største inntekten $r_j$ av en stav av lengde $j$?",
      options: ["$r_j = \\max_{1 \\le i \\le j} (p_i + r_{j-i})$ — første stykke har lengde $i$, resten løses som eget delproblem", "$r_j = \\max_{1 \\le i \\le j} (p_i + p_{j-i})$ — staven kappes i nøyaktig to stykker, og de to prisene legges sammen", "$r_j = \\max_{1 \\le i \\le j} (r_i \\cdot r_{j-i})$ — de to delenes inntekter ganges sammen for hvert mulig kappepunkt", "$r_j = p_j$ — den beste inntekten er alltid prisen for hele staven, siden oppdeling koster ekstra"],
      explanation: "Du prøver hver mulig lengde på det **første** stykket og løser resten optimalt som et mindre delproblem av samme type — det er den optimale substrukturen. Å bruke $p_{j-i}$ i stedet for $r_{j-i}$ låser resten til ett enkelt stykke og går glipp av videre oppdeling. Og at hele staven er best, er nettopp det oppgaven skal avgjøre, ikke forutsette.",
    },
    {
      question: "Hva er kjøretiden til `Bottom-Up-Cut-Rod(p, n)`?",
      options: ["$\\Theta(n^2)$ — $n$ celler, og hver celle krever et maksimum over inntil $n$ alternativer", "$\\Theta(n)$ — én celle per stavlengde, og hver celle fylles med konstant arbeid", "$\\Theta(n\\lg n)$ — prisene må sorteres stigende før den beste oppdelingen kan leses av tabellen", "Eksponentiell i $n$ — antall mulige oppdelinger av en stav dobles for hver ekstra meter"],
      explanation: "Ytre løkke går over de $n$ stavlengdene, og indre løkke prøver hvert mulig første stykke — det er kjøretidsregelen «antall delproblemer ganger antall valg» i praksis. Antall oppdelinger er riktignok $2^{n-1}$, men det er den naive gjennomsøkingen; tabellen slipper unna med et kvadrat.",
    },
    {
      question: "Hva inneholder valgtabellen `s` i stavkapping, og hva brukes den til?",
      options: ["Lengden på det første stykket i en optimal oppdeling av $j$; den leses baklengs for å gi selve oppdelingen", "Inntekten for en stav av lengde $j$; den leses av helt til slutt for å gi svaret på hele problemet", "Antall stykker i en optimal oppdeling av $j$; den brukes til å reservere plass til utskriften", "Prisen per meter for hver mulige stykkelengde; den fylles inn før utfyllingen begynner"],
      explanation: "`s[j]` husker hvilket valg som ga verdien i `r[j]`, og `Print-Cut-Rod-Solution` bruker det til å trekke fra ett stykke om gangen: skriv `s[j]`, sett $j = j - s[j]$, gjenta. Inntektene ligger i verditabellen `r`, og prisene $p_i$ er input, ikke noe som fylles ut.",
    },
    {
      question: "Hva er kjøretiden til `Print-Cut-Rod-Solution(p, n)`, og hva forutsetter den?",
      options: ["$O(n)$, og den forutsetter at valgtabellen `s` allerede er fylt ut av utfyllingsrutinen", "$\\Theta(n^2)$, og den regner ut den optimale oppdelingen på nytt mens den skriver den ut", "$O(\\lg n)$, og den forutsetter at valgtabellen `s` er sortert etter stykkelengde på forhånd", "$O(n)$, og den forutsetter bare verditabellen `r`, som den sammenligner cellene i underveis"],
      explanation: "Hvert steg skriver ut `s[j]` og setter $j = j - s[j]$, og siden `s[j]` alltid er minst 1, kan det skje høyst $n$ ganger. Rekonstruksjonen legger derfor ikke noe til den asymptotiske kjøretiden til $\\Theta(n^2)$-utfyllingen. Uten valgtabellen finnes ikke informasjonen om hvilket første stykke som ga verdien.",
    },
    {
      question: "Hva er LCS-rekurrensen for $c[i,j]$?",
      options: ["Er $x_i = y_j$: $c[i-1,j-1] + 1$; ellers $\\max(c[i-1,j],\\ c[i,j-1])$", "Er $x_i = y_j$: $c[i-1,j-1] + 1$; ellers $\\min(c[i-1,j],\\ c[i,j-1])$", "Er $x_i = y_j$: $\\max(c[i-1,j],\\ c[i,j-1]) + 1$; ellers $c[i-1,j-1]$", "Alltid $\\max(c[i-1,j],\\ c[i,j-1],\\ c[i-1,j-1] + 1)$, uansett om tegnene er like eller ikke"],
      explanation: "Er de to siste tegnene like, hører de med i en lengste felles delsekvens, og du går diagonalt og legger til én. Er de ulike, må minst ett av dem forkastes, og du tar det beste av de to mulighetene — altså et maksimum, aldri et minimum. Den siste varianten ville tillatt et diagonalt hopp selv når tegnene er ulike, og det gir for høye tall.",
    },
    {
      question: "Hva er kjøretiden og plassbruken til `LCS-Length(X, Y)` med $\\lvert X\\rvert = m$ og $\\lvert Y\\rvert = n$?",
      options: ["$\\Theta(nm)$ tid og $\\Theta(nm)$ plass med retningstabellen `b` inkludert", "$\\Theta(n+m)$ tid og $\\Theta(nm)$ plass, siden hver celle fylles med ett oppslag", "$\\Theta(nm\\lg(nm))$ tid, siden cellene må sorteres innbyrdes før den lengste delsekvensen kan leses av", "Eksponentiell tid, siden antall delsekvenser av $X$ er $2^m$ og alle må sammenlignes med $Y$"],
      explanation: "Alle $(m+1)(n+1)$ cellene fylles uansett innhold, og hver celle koster konstant arbeid — beste og verste tilfelle er derfor det samme. Plassen følger tabellene: verditabellen `c` og retningstabellen `b` er begge todimensjonale. Den eksponentielle gjennomsøkingen er nettopp det tabellen erstatter.",
    },
    {
      question: "Hva er kjøretiden til `Print-LCS(b, X, m, n)`?",
      options: ["$O(m+n)$ — hvert steg reduserer $i$, $j$ eller begge med én, fra hjørnet og tilbake til start", "$\\Theta(nm)$ — hele retningstabellen må gjennomløpes rad for rad for å finne de tegnene som inngår", "$O(\\lg(nm))$ — utskriften følger én diagonal gjennom tabellen fra hjørne til hjørne", "$O(k)$ der $k$ er lengden på den felles delsekvensen — bare de valgte tegnene berøres"],
      explanation: "Rutinen starter i $c[m,n]$ og følger pilene: en diagonal pil senker begge indeksene, de to andre senker én av dem. Etter høyst $m+n$ steg er du ute av tabellen. At bare de $k$ valgte tegnene skrives ut, betyr ikke at bare $k$ celler besøkes — de ikke-diagonale stegene koster også.",
    },
    {
      question: "Hva er forskjellen på en delsekvens og en delstreng?",
      options: ["En delsekvens beholder rekkefølgen, men tegnene trenger ikke stå etter hverandre; en delstreng er sammenhengende", "En delsekvens er sammenhengende; en delstreng beholder rekkefølgen, men tegnene i den kan stå spredt utover strengen", "En delsekvens kan bytte om på rekkefølgen; en delstreng må bevare den opprinnelige rekkefølgen", "De to betyr det samme; forskjellen er bare hvilket ord som brukes om tegn og om tall"],
      explanation: "«BCB» er en delsekvens av «ABCDB», men ikke en delstreng, siden D står imellom. Rekkefølgen må alltid bevares i begge tilfeller — en omstokking er verken det ene eller det andre. LCS-problemet gjelder delsekvenser, og det er derfor tabellen kan hoppe over tegn uten å starte på nytt.",
    },
    {
      question: "Hva står i retningstabellen `b` i `LCS-Length`, og hvorfor trengs den?",
      options: ["Hvilken nabocelle verdien kom fra ($\\nwarrow$, $\\uparrow$ eller $\\leftarrow$); uten den kan ikke selve delsekvensen leses ut", "Lengden på den lengste felles delsekvensen så langt; den er en kopi av `c` brukt til kontroll", "Hvilke tegn i $X$ som er brukt så langt; den trengs for å hindre at et tegn brukes to ganger", "Hvor mange ganger hver enkelt celle er lest; den brukes til å måle hvor effektiv utfyllingen faktisk var"],
      explanation: "`b` er valgtabellen for LCS, og den gjør rekonstruksjonen til et enkelt tilbakespor. Uten den må du sammenligne nabocellene i `c` på nytt underveis — det virker, men er nettopp arbeidet `b` er ment å spare. Lengden ligger i `c[m,n]`, og den sier ingenting om hvilke tegn som inngår.",
    },
    {
      question: "Hva er 0-1-ryggsekk-rekurrensen for $K[i,j]$?",
      options: ["$\\max(K[i-1,j],\\ v_i + K[i-1,\\ j-w_i])$ når $w_i \\le j$; ellers $K[i-1,j]$", "$\\max(K[i-1,j],\\ v_i + K[i,\\ j-w_i])$ når $w_i \\le j$; ellers $K[i-1,j]$", "$\\max(K[i-1,j],\\ w_i + K[i-1,\\ j-v_i])$ når $v_i \\le j$; ellers $K[i-1,j]$", "$K[i-1,j] + v_i$ når $w_i \\le j$; ellers 0, siden gjenstanden da ikke får plass i sekken"],
      explanation: "Du velger mellom å la gjenstand $i$ ligge og å ta den med, og tar du den med, må du hoppe tilbake til rad $i-1$ — gjenstanden finnes bare i ett eksemplar. Varianten som slår opp i rad $i$ igjen, tillater flere kopier og løser et annet problem. Og vekt og verdi må holdes fra hverandre: vekten trekkes fra kapasiteten, verdien legges til svaret.",
    },
    {
      question: "Hva er kjøretiden til `Knapsack-01(w, v, n, m)`, og hva heter denne typen kjøretid?",
      options: ["$\\Theta(nm)$, og den kalles **pseudopolynomisk** fordi $m$ er en tallverdi og ikke en inputlengde", "$\\Theta(nm)$, og den er **polynomisk**, siden både $n$ og $m$ står oppgitt i inputen", "$\\Theta(n\\lg m)$, og den er polynomisk i antall bit som trengs for å skrive ned kapasiteten", "$\\Theta(2^n)$, og den er eksponentiell fordi hver enkelt gjenstand enten kan velges eller ikke velges"],
      explanation: "Tabellen har $n$ rader og $m+1$ kolonner, og hver celle koster konstant arbeid. Uttrykket **ser** polynomisk ut, men kapasiteten $m$ skrives med om lag $\\lg m$ bit, så antall celler er eksponentielt i inputlengden. Å lese $\\Theta(nm)$ som polynomisk er felle #7.",
    },
    {
      question: "En ryggsekk-instans har $n = 30$ gjenstander og kapasitet $m = 10^9$. Hva er problemet med tabellalgoritmen her?",
      options: ["Kapasiteten skrives med om lag 30 bit, men tabellen får en milliard kolonner — arbeidet er eksponentielt i inputlengden", "Antall gjenstander er for lite til at tabellen blir fylt, så algoritmen returnerer et for lavt svar", "Kapasiteten er så stor at alle gjenstandene får plass, og da er problemet trivielt og tabellen unødvendig", "Tabellen må sorteres etter verdi per vektenhet før utfyllingen begynner, og den sorteringen dominerer kjøretiden"],
      explanation: "Inputen er kort — 30 vekter, 30 verdier og ett tall på 30 bit — mens tabellen har $30 \\cdot 10^9$ celler. Det er nettopp dette misforholdet ordet pseudopolynomisk beskriver. At alle gjenstandene får plass, kan man ikke vite uten å se vektene, og noen sortering inngår ikke i 0-1-varianten.",
    },
    {
      question: "Hva er kjøretiden til den grådige algoritmen for **fraksjonell** ryggsekk, og hva dominerer den?",
      options: ["$O(n\\lg n)$, dominert av sorteringen etter verdi per vektenhet", "$O(n\\lg n)$, dominert av utfyllingen av tabellen etter at sorteringen er gjort", "$\\Theta(nm)$, dominert av tabellens størrelse, akkurat som i 0-1-varianten", "$\\Theta(n)$, siden gjenstandene kan velges i vilkårlig rekkefølge når de kan deles opp"],
      explanation: "Etter sorteringen er selve utvelgelsen ett lineært gjennomløp: ta gjenstander i rekkefølge til sekken er full, og del den siste. Sorteringen er derfor det dyreste leddet. Ingen tabell trengs i det hele tatt — det er nettopp forskjellen fra 0-1-varianten, der en gjenstand ikke kan deles.",
    },
    {
      question: "Hvor mye plass bruker `LCS-Length` hvis du bare skal ha **lengden** og ikke selve delsekvensen?",
      options: ["$\\Theta(\\min(m,n))$ — det holder å ha to rader om gangen, siden rad $i$ bare avhenger av rad $i-1$", "$\\Theta(nm)$ — hele tabellen må ligge der uansett, siden hver celle kan bli slått opp igjen senere", "$\\Theta(1)$ — lengden kan regnes ut med noen få variabler uten noen tabell i det hele tatt", "$\\Theta(m+n)$ — én celle per tegn i hver av de to sekvensene er alt som trengs"],
      explanation: "Rekurrensen slår bare opp i cellene $[i-1,j]$, $[i,j-1]$ og $[i-1,j-1]$, så alt eldre enn forrige rad kan kastes — og du velger den korteste sekvensen som radretning. Prisen er at rekonstruksjonen forsvinner: uten hele tabellen eller `b` kan du ikke lese ut hvilke tegn som inngår.",
    },
    {
      question: "Hva er lengden på den lengste felles delsekvensen av $X = \\text{ABCB}$ og $Y = \\text{BDCAB}$?",
      options: ["3", "2", "4", "5"],
      explanation: "«BCB» finnes i begge: i $X$ som posisjonene 2, 3 og 4, og i $Y$ som posisjonene 1, 3 og 5. Lengde 4 er utelukket, siden det ville krevd hele $X$ som delsekvens av $Y$, og der kommer A etter C. Tegnene trenger ikke stå etter hverandre — bare i samme rekkefølge.",
    },
    {
      question: "Hvorfor feiler en grådig algoritme på 0-1-ryggsekk?",
      options: ["Fordi den beste gjenstanden per vektenhet kan legge beslag på plass som to andre gjenstander utnytter bedre", "Fordi gjenstandene ikke lar seg sortere i noen entydig rekkefølge når både vekt og verdi varierer mellom dem", "Fordi grådighet krever at kapasiteten er et heltall, og det er den sjelden i praksis", "Fordi 0-1-ryggsekk er NP-hardt, og NP-harde problemer kan ikke løses av noen algoritme i det hele tatt"],
      explanation: "Uten muligheten til å dele en gjenstand blir det restplass, og den restplassen kan gjøre et grådig valg dårligere enn et annet valg — problemet mangler grådig valg-egenskap. Sortering er fullt mulig; det er konklusjonen fra den som svikter. Og NP-hardhet betyr at ingen kjent **polynomisk** algoritme finnes, ikke at problemet er uløselig.",
    },
  ],
  'tdt4120-6-3': [
    {
      question: "Hva er det fjerde av de fem obligatoriske leddene i et sjanger H-svar?",
      options: ["Rekonstruksjonen av selve løsningen, ikke bare optimalverdien", "Et bevis for at rekurrensen gir riktig svar for alle delproblemer", "En sammenligning med en grådig løsning på det samme problemet", "En håndkjøring av algoritmen på et lite konkret eksempel"],
      explanation: "Oppgaven ber som regel om en oppdeling, en plan eller en delsekvens, og da må valgene lagres og leses baklengs. Et fullt korrekthetsbevis er ikke etterspurt i denne sjangeren — det ville dessuten sprengt tidsbudsjettet på tolv minutter per oppgave.",
    },
    {
      question: "Hva koster rekonstruksjonen i en LCS-oppgave?",
      options: ["$O(n+m)$ — den følger én sti gjennom tabellen, ikke alle cellene", "$\\Theta(nm)$ — den må gjennom hele tabellen for å finne stien", "$\\Theta(1)$ — svaret ligger ferdig i hjørnecellen $c[n,m]$", "$\\Theta(n^2)$ — hvert tegn må sammenlignes med alle de andre på nytt"],
      explanation: "Hvert steg baklengs reduserer $i$, $j$ eller begge med 1, så stien har høyst $n+m$ steg. Siden $n+m$ er et lavere ledd enn $nm$, øker ikke rekonstruksjonen den asymptotiske kjøretiden — og det er den setningen som skal stå i svaret.",
    },
    {
      question: "Hvorfor er 0-1-ryggsekk med kjøretid $\\Theta(nW)$ **pseudopolynomisk**?",
      options: ["Fordi $W$ er en tallverdi som kan skrives med få siffer, men gi svært mange kolonner", "Fordi $n$ og $W$ multipliseres med hverandre i stedet for å legges sammen i uttrykket", "Fordi algoritmen bruker en tabell og dermed mer plass enn en rekursiv løsning", "Fordi rekonstruksjonen krever et ekstra gjennomløp av hele tabellen til slutt"],
      explanation: "En kapasitet på $10^9$ tar 30 binære siffer å skrive ned, men gir en milliard kolonner — altså eksponentielt i inputens lengde. Det samme skillet møtte du i `Ford-Fulkerson` i [kap. 5.2](/tdt4120/tdt4120-5-2).",
    },
    {
      question: "Hva er stavkapping-rekurrensen?",
      options: ["$r[j] = \\max_{1 \\le i \\le j}(p_i + r[j-i])$, med $r[0] = 0$", "$r[j] = \\max_{1 \\le i \\le j}(p_i \\cdot r[j-i])$, med $r[0] = 1$", "$r[j] = p_j + r[j-1]$, med $r[0] = 0$ som grunntilfelle", "$r[j] = \\min_{1 \\le i \\le j}(p_i + r[j-i])$, med $r[0] = 0$"],
      explanation: "Du prøver hver mulig lengde på den første biten og slår opp den ferdig beregnede beste verdien for resten. Alternativet $r[j] = p_j + r[j-1]$ ville tvunget fram en fast oppdeling og aldri sammenlignet alternativer.",
    },
    {
      question: "Hvordan definerer du delproblemet i en ordsplittingsoppgave?",
      options: ["`ok[j]` er sann hvis prefikset `tekst[1..j]` kan deles i ord fra ordboka", "`ok[j]` er sann hvis tegnet på plass $j$ er det siste tegnet i et ord", "`ok[j]` er antall måter hele teksten kan deles på når man starter på plass $j$", "`ok[j]` er lengden på det lengste ordet som starter på plass $j$ i teksten"],
      explanation: "Prefiksformuleringen gjør at rekurrensen kan slå opp alle kortere prefikser som allerede er avgjort. Definisjonen skal skrives med ord før rekurrensen kommer — uten den er rekurrensen uleselig for den som retter.",
    },
    {
      question: "Hva er grunntilfellet i ordsplittingsrekurrensen, og hvorfor?",
      options: ["$\\text{ok}[0] = \\text{sann}$ — den tomme strengen er en gyldig oppdeling", "$\\text{ok}[0] = \\text{usann}$ — den tomme strengen inneholder ingen ord", "$\\text{ok}[1] = \\text{sann}$ — det første tegnet må alltid starte et ord", "Det trengs ingen grunntilfeller, siden løkka starter på $j = 1$"],
      explanation: "Uten dette kan aldri det første ordet godkjennes, og hele tabellen kollapser til usann. Grunntilfellet er ikke pynt — det er den ene cellen som setter i gang hele oppfyllingen.",
    },
    {
      question: "En kandidat oppgir bare optimalverdien i en designoppgave. Hva er konsekvensen?",
      options: ["Rekonstruksjonsleddet mangler — dette er felle #6, og det koster typisk et helt ledd", "Ingenting — optimalverdien er akkurat det oppgaven egentlig spør etter i denne sjangeren", "Kjøretiden blir feil, siden rekonstruksjonen inngår i den asymptotiske grensen", "Rekurrensen blir ugyldig, siden den forutsetter at valgene lagres underveis"],
      explanation: "Oppgaven ber om en oppdeling, en plan eller en delsekvens, og tallet alene svarer ikke på det. Rekurrensen er like gyldig uten lagrede valg — det er bare svaret som blir ufullstendig.",
    },
    {
      question: "Hva er kjøretidsregelen for dynamisk programmering?",
      options: ["Antall delproblemer ganger arbeidet per delproblem", "Antall delproblemer pluss arbeidet per delproblem, lagt sammen", "Antall delproblemer ganger dybden i rekursjonstreet under rota", "Antall delproblemer ganger antall grunntilfeller som står i rekurrensen"],
      explanation: "Hvert delproblem løses nøyaktig én gang, så totalen er antallet ganger kostnaden for ett. For LCS gir det $\\Theta(nm)$ celler à konstant arbeid; for stavkapping $n$ celler à $O(n)$ arbeid.",
    },
    {
      question: "Hvorfor virker ikke en grådig regel på stavkapping?",
      options: ["Fordi det lokalt beste kuttet kan gjøre resten av stangen dårlig", "Fordi prisene ikke er sortert etter lengde i oppgaveteksten", "Fordi stavkapping har overlappende delproblemer, og grådighet krever at de er uavhengige", "Fordi grådighet bare virker på problemer der svaret er et heltall"],
      explanation: "Problemet mangler den grådige valg-egenskapen: det beste enkeltkuttet er ikke garantert å inngå i en optimal oppdeling. DP prøver derfor alle mulige første valg i stedet for å gjette ett — det er hele forskjellen.",
    },
    {
      question: "Hva lagrer valgtabellen $s[j]$ i stavkapping?",
      options: ["Lengden på den første biten i den optimale oppdelingen av en stang på $j$", "Hele den optimale oppdelingen av en stang på lengde $j$, bit for bit", "Den samlede verdien av den optimale oppdelingen av en stang på $j$", "Antall biter den optimale oppdelingen av en stang på $j$ består av"],
      explanation: "Bare det første valget lagres; resten hentes ved gjentatte oppslag baklengs, og det koster $O(n)$ til sammen. Å lagre hele oppdelingen i hver celle ville kostet $\\Theta(n)$ plass per celle uten å gi noe ekstra.",
    },
    {
      question: "Hva er LCS-rekurrensen når $x_i \\ne y_j$?",
      options: ["$c[i,j] = \\max(c[i-1,j], c[i,j-1])$", "$c[i,j] = c[i-1,j-1]$, altså diagonalen uendret", "$c[i,j] = c[i-1,j-1] + 1$, altså diagonalen pluss én", "$c[i,j] = \\min(c[i-1,j], c[i,j-1])$, altså den minste naboen"],
      explanation: "Er tegnene ulike, må minst ett av dem hoppes over, og vi tar det beste av de to mulighetene. Diagonalen pluss 1 hører til match-tilfellet, og et minimum ville gitt korteste i stedet for lengste delsekvens.",
    },
    {
      question: "Hva må gjelde for at bottom-up-fylleorden skal være riktig?",
      options: ["At alt et delproblem trenger, allerede er beregnet når det skal fylles", "At delproblemene fylles i den rekkefølgen de opptrer i rekurrensen", "At tabellen fylles kolonnevis i stedet for radvis for å spare plass", "At antall delproblemer er kjent på forhånd, slik at tabellen kan allokeres"],
      explanation: "Dette er hele kravet, og for LCS betyr det stigende $i$ og for hver $i$ stigende $j$. Memoisering slipper å velge rekkefølge i det hele tatt — der styrer rekursjonen den selv, med samme asymptotiske kjøretid.",
    },
    {
      question: "Hvordan leser du ut hvilke gjenstander som ble valgt i 0-1-ryggsekk?",
      options: ["Gå baklengs fra $c[n,W]$: er $c[i,w] \\ne c[i-1,w]$, ble gjenstand $i$ tatt med", "Se hvilke rader i tabellen som inneholder den aller høyeste verdien totalt sett", "Velg gjenstandene i synkende rekkefølge etter verdi delt på vekt", "Gå framover fra $c[0,0]$ og ta med gjenstanden hver gang verdien øker"],
      explanation: "Er cellen ulik cellen rett over, må gjenstanden ha bidratt, og du trekker vekten fra før du går videre opp. Å velge etter verdi delt på vekt er den grådige regelen, og den er gal for 0-1-varianten — der kan man ikke ta halve gjenstander.",
    },
    {
      question: "To turlogger skal sammenlignes for felles hytter i samme rekkefølge. Hvilket mønster er dette?",
      options: ["Sekvensmønsteret — dette er lengste felles delsekvens i ny innpakning", "Oppdelingsmønsteret — loggene skal deles i biter som sammenlignes", "Velg-eller-ikke-mønsteret, som i 0-1-ryggsekk med en øvre grense", "Stimønsteret gjennom et rutenett, løst med korteste vei i en DAG"],
      explanation: "Kravet «i samme rekkefølge, men ikke nødvendigvis etter hverandre» er den nøyaktige definisjonen av en felles delsekvens. Uten rekkefølgekravet ville det vært et vanlig mengdesnitt, som klares i $\\Theta(n+m)$ med en hashtabell.",
    },
    {
      question: "Hva er kjøretiden til stavkapping på en stang av lengde $n$?",
      options: ["$\\Theta(n^2)$ — $n$ delproblemer, og delproblem $j$ maksimerer over inntil $j$ ledd", "$\\Theta(n)$ — hvert delproblem løses med konstant arbeid i tabellen", "$\\Theta(n\\lg n)$ — prislisten må sorteres før maksimeringen kan gjennomføres", "$\\Theta(2^n)$ — alle mulige oppdelinger av stangen må prøves ut"],
      explanation: "Summen $1 + 2 + \\dots + n$ er $\\Theta(n^2)$, og det er nettopp arbeidet over alle delproblemene. Den eksponentielle grensen gjelder den **naive** rekursjonen uten lagring — å unngå den er hele poenget med DP.",
    },
    {
      question: "Hva skiller et DP-problem fra et splitt-og-hersk-problem?",
      options: ["At delproblemene overlapper, slik at det lønner seg å lagre svarene", "At delproblemene er av ulik størrelse i stedet for like store", "At DP alltid løses iterativt, mens splitt og hersk alltid er rekursiv", "At DP alltid gir en optimal løsning, mens splitt og hersk bare gir en tilnærming"],
      explanation: "Uten overlapp er det ingenting å spare på å lagre, og ren splitt og hersk er både like raskt og enklere. DP kan skrives både rekursivt (memoisering) og iterativt, og splitt og hersk gir eksakte svar — `Merge-Sort` sorterer helt korrekt.",
    },
    {
      question: "Hva er delproblemet i en linjebrytingsoppgave?",
      options: ["$c[j]$ er minste samlede kostnad ved å bryte de $j$ første ordene i linjer", "$c[j]$ er kostnaden ved å legge ord $j$ på en linje for seg selv", "$c[j]$ er antall linjer de $j$ første ordene som et minimum må fordeles på", "$c[j]$ er lengden på den lengste linja blant de $j$ første ordene"],
      explanation: "Prefiksformuleringen gjør at rekurrensen kan la den siste linja variere og slå opp resten. Antall linjer er ikke det som minimeres — det er summen av styggehetskostnadene, og de to gir ulike svar.",
    },
    {
      question: "Hvilken setning om rekonstruksjon hører hjemme i hvert DP-designsvar?",
      options: ["At den krever lagrede valg, men ikke øker den asymptotiske kjøretiden", "At den er gratis, siden all informasjonen allerede ligger i verditabellen", "At den dobler kjøretiden, siden tabellen må gjennomløpes en gang til", "At den kan hoppes over når oppgaven bare ber om en algoritmeskisse"],
      explanation: "Begge de vanlige feilformuleringene — «gratis» og «dobler kjøretiden» — er varianter av felle #6. Rekonstruksjonen følger én sti og er derfor et lavere ledd, men den forutsetter at valgene faktisk ble lagret underveis.",
    },
  ],
  'tdt4120-6-4': [
    {
      question: "Hva er kjøretiden til `Huffman` med en binærhaug som prioritetskø?",
      options: ["$O(n\\lg n)$", "$\\Theta(n)$", "$\\Theta(n^2)$", "$O(\\lg n)$"],
      explanation: "Løkka kjøres $n-1$ ganger, og hver runde gjør to `Extract-Min` og én `Insert` i $O(\\lg n)$ hver. Alternativet som oppgir $\\Theta(n)$ teller bare antall runder og glemmer at hver runde koster logaritmisk tid i prioritetskøen.",
    },
    {
      question: "Hva er kjøretiden til `Greedy-Activity-Selector` når aktivitetene allerede er sortert på sluttid?",
      options: ["$\\Theta(n)$", "$\\Theta(n\\lg n)$", "$\\Theta(n^2)$", "$O(\\lg n)$"],
      explanation: "Algoritmen gjør ett gjennomløp med konstant arbeid per aktivitet, og løkka går alltid hele veien, så grensen er tett. Alternativet som oppgir $\\Theta(n\\lg n)$ tar med sorteringen, men den er ifølge spørsmålet allerede gjort.",
    },
    {
      question: "Hvilken størrelse styrer det grådige valget i aktivitetsutvelgelse?",
      options: ["sluttiden — velg aktiviteten som slutter først", "varigheten — velg aktiviteten som varer kortest", "starttiden — velg aktiviteten som starter først", "antall kollisjoner — velg aktiviteten som overlapper minst"],
      explanation: "Det eneste som betyr noe for resten av problemet, er når ressursen blir ledig igjen, og det er sluttiden. Alternativet som velger den korteste aktiviteten avvises av instansen C1 fra 0 til 5, C2 fra 4 til 6 og C3 fra 5 til 10: den korteste er C2, og den blokkerer både C1 og C3.",
    },
    {
      question: "Hva er en prefikskode?",
      options: ["en koding der ingen tegns kode er begynnelsen på et annet tegns kode", "en koding der alle tegn har like mange bits i koden sin", "en koding der de sjeldneste tegnene får de korteste kodene", "en koding der hvert tegn får en kode som starter med samme bit"],
      explanation: "Prefiksegenskapen er det som gjør avkodingen entydig: leser du bitstrømmen fra venstre, passer til enhver tid høyst én kode. Alternativet om like mange bits beskriver fast koding, som riktig nok er prefiksfri, men som er en spesialtilfelle og ikke definisjonen.",
    },
    {
      question: "Hvilke to noder slår `Huffman` sammen i hver runde?",
      options: ["de to nodene med lavest frekvens i køen, uansett om de er tegn eller sammenslåtte noder", "de to nodene med lavest frekvens blant de opprinnelige tegnene i alfabetet", "de to nodene med høyest frekvens i køen, uansett om de er tegn eller sammenslåtte noder", "den letteste og den tyngste noden i køen, slik at treet holder seg balansert"],
      explanation: "En sammenslått node legges tilbake i prioritetskøen og konkurrerer på like fot med de opprinnelige tegnene. Alternativet som begrenser utvalget til opprinnelige tegn er nettopp den vanligste håndkjøringsfeilen — i eksempelet med E, R, N, S, K og Y er den nye noden med frekvens 6 lettere enn S med frekvens 7.",
    },
    {
      question: "Hva er kodelengden til et tegn i et Huffman-tre lik?",
      options: ["dybden til bladet der tegnet ligger, målt i antall kanter fra rota", "frekvensen til tegnet, delt på summen av alle frekvensene", "antall indre noder i treet, minus dybden til bladet der tegnet ligger", "høyden til treet, minus antall søsken bladet har i sitt eget deltre"],
      explanation: "Hver kant nedover bidrar med én bit, så veien fra rota til bladet har nøyaktig like mange bits som den har kanter. Alternativet som knytter kodelengden til frekvensen blander sammen det som bestemmer plasseringen med det som måles: frekvensen styrer hvor dypt bladet havner, men er ikke selve lengden.",
    },
    {
      question: "Hvilken egenskap kreves av grådighet, men ikke av dynamisk programmering?",
      options: ["grådig valg-egenskap", "optimal substruktur", "overlappende delproblemer", "pseudopolynomisk kjøretid"],
      explanation: "Begge paradigmene krever optimal substruktur; det er grådig valg-egenskap som er det ekstra kravet, altså at det finnes en optimal løsning som inneholder det lokale valget. Alternativet optimal substruktur er felles for begge og skiller dem derfor ikke.",
    },
    {
      question: "Hvilken variant av ryggsekkproblemet lar seg løse grådig?",
      options: ["fraksjonell ryggsekk, fordi den siste varen kan deles", "0-1-ryggsekk, fordi varene kan rangeres på verdi per vekt", "begge, så lenge varene rangeres på verdi per vekt før fyllingen", "ingen av dem, fordi begge krever at hele tabellen fylles ut"],
      explanation: "Delbarheten er nøyaktig det som gir grådig valg-egenskap: du kan alltid fylle sekken helt opp med den best rangerte varen som er igjen. Alternativet som sier 0-1 avvises av instansen med kapasitet 6 kg og varene 2 kg til 30 kroner, 5 kg til 60 kroner og 5 kg til 55 kroner, der grådighet gir 30 og optimum er 60.",
    },
    {
      question: "Hvor mange sammenslåinger gjør `Huffman` for et alfabet med $n$ tegn?",
      options: ["$n-1$", "$n$", "$2n-1$", "$\\lceil \\lg n \\rceil$"],
      explanation: "Hver sammenslåing reduserer antall noder i køen med én, og køen skal gå fra $n$ til 1. Alternativet $2n-1$ teller alle noder i det ferdige treet, altså $n$ blader pluss $n-1$ indre noder, og svarer på et annet spørsmål.",
    },
    {
      question: "En tekst med seks ulike tegn kodes med fast kodelengde. Hvor mange bits per tegn trengs?",
      options: ["3 bits, fordi det er det minste antallet som kan skille seks ulike tegn", "2 bits, fordi to bits gir fire mønstre og det er nærmest seks", "6 bits, fordi hvert tegn trenger sin egen bit i mønsteret", "4 bits, fordi antallet tegn må rundes opp til nærmeste potens av to"],
      explanation: "Med fast lengde trengs $\\lceil \\lg 6 \\rceil = 3$ bits, siden 2 bits bare gir fire mønstre og 3 bits gir åtte. Alternativet som svarer 2 bits runder logaritmen ned i stedet for opp og får en koding som ikke kan skille alle seks tegnene.",
    },
    {
      question: "Kan et tegn med høyere frekvens få lengre kode enn et tegn med lavere frekvens i et optimalt Huffman-tre?",
      options: ["Nei — bytter du de to bladene, blir totalkostnaden lavere, så treet var ikke optimalt", "Ja — rekkefølgen elementene har i prioritetskøen kan gjøre at et hyppig tegn havner dypere enn et sjeldent", "Ja — det avhenger av hvilken side av rota tegnet havner på under byggingen", "Nei — alle tegn i et Huffman-tre får uansett nøyaktig samme kodelengde"],
      explanation: "Var det hyppige tegnet dypere, ville en bytting av de to bladene senket $B(T)$, i strid med at treet er optimalt. Alternativet som begrunner et ja med hvilken side av rota tegnet havner på, forveksler kodens bitmønster, som godt kan variere, med kodens lengde, som er bestemt.",
    },
    {
      question: "Hva er sluttilstanden du leverer etter en håndkjøring av `Huffman` på eksamen?",
      options: ["kodelengden for hvert tegn, eventuelt totalt antall bits", "en tegning av hele treet med alle frekvensene skrevet inn", "listen over alle sammenslåingene i den rekkefølgen de ble gjort", "prioritetskøens innhold etter hver eneste runde av løkka"],
      explanation: "Sjanger C krever sluttilstanden i det formatet oppgaven ber om, og for `Huffman` er det kodelengden per tegn. Alternativet med hele sammenslåingslisten er arbeidet ditt underveis, ikke svaret, og koster tid som de andre oppgavene trenger.",
    },
    {
      question: "Hvorfor gir aktivitetsutvelgelse feil svar hvis du sorterer på starttid i stedet for sluttid?",
      options: ["fordi en aktivitet som starter tidlig kan vare svært lenge og blokkere alt etter seg", "fordi sortering på starttid er en ustabil sortering som bytter om rekkefølgen på aktiviteter med samme nøkkel", "fordi starttidene ikke nødvendigvis er heltall, slik sluttidene alltid er", "fordi algoritmen da må sammenligne $s[m]$ med $s[k]$ og bruker et ekstra gjennomløp"],
      explanation: "Instansen D1 fra 0 til 12, D2 fra 1 til 4, D3 fra 5 til 8 og D4 fra 9 til 11 viser det: D1 starter først og spiser hele dagen, så du får én aktivitet i stedet for tre. Alternativet om stabil sortering blander sammen en egenskap ved sorteringsalgoritmen med hvilken nøkkel det sorteres på.",
    },
    {
      question: "Hva sier bytteargumentet for aktivitetsutvelgelse?",
      options: ["at aktiviteten som slutter først i en optimal løsning, kan erstattes med den som slutter først i hele problemet, uten at antallet synker", "at to vilkårlige aktiviteter i en optimal løsning alltid kan bytte plass med hverandre uten at løsningen slutter å være lovlig, og uten at antallet synker", "at enhver optimal løsning kan gjøres om til en annen optimal løsning ved å bytte ut to aktiviteter samtidig", "at aktiviteten med kortest varighet alltid kan byttes inn i en optimal løsning uten at antallet synker"],
      explanation: "Byttet er trygt fordi den globalt første sluttiden er minst like tidlig som den lokale, og derfor ikke kan kollidere med noe som lå etter. Alternativet om korteste varighet er nettopp den regelen motbeviset avviser: den korteste aktiviteten kan blokkere to andre.",
    },
  ],
  'tdt4120-6-5': [
    {
      question: "Hva er et **blokkerende par** i en matching?",
      options: ["To som ikke er sammen, men der **begge** foretrekker hverandre framfor sine egne", "To som ikke er sammen, og der minst én av dem foretrekker den andre", "To som er sammen, men der begge helst ville hatt noen andre i stedet", "To som ikke kan pares fordi de ikke står på hverandres preferanselister"],
      explanation: "Kravet om at **begge** foretrekker hverandre er det som gjør at stabile matchinger i det hele tatt finnes. Ville det holdt at én part var misfornøyd, ville nesten enhver matching vært ustabil — noen får jo alltid ikke sitt førstevalg.",
    },
    {
      question: "Hva er kjøretiden til `Gale-Shapley`?",
      options: ["$O(n^2)$ — hver frier frir til hver mottaker høyst én gang", "$O(n\\lg n)$ — preferanselistene må sorteres før kjøringen starter", "$O(n)$ — hver deltaker behandles nøyaktig én gang i løpet av kjøringen", "$O(n^3)$ — for hvert par må hele preferanselisten gjennomsøkes på nytt"],
      explanation: "En avvisning er endelig, så det finnes høyst $n^2$ frierier, hvert med konstant arbeid når rangtabellen er bygget. Listene kommer allerede rangert — det er en del av inputen, ikke noe algoritmen må gjøre.",
    },
    {
      question: "Er matchingen `Gale-Shapley` finner, entydig bestemt av preferanselistene?",
      options: ["Nei — orienteringen avgjør, og de to kjøringene kan gi ulike stabile matchinger", "Ja — det finnes nøyaktig én stabil matching for et gitt sett preferanselister", "Ja — algoritmen er deterministisk, så resultatet er alltid det samme", "Nei — resultatet avhenger av hvilken rekkefølge de ledige frierne behandles i"],
      explanation: "Frier-optimaliteten gir at den siden som frir, kommer best mulig ut, og den andre dårligst mulig — så orienteringen kan endre utfallet. Rekkefølgen blant de ledige frierne påvirker derimot ikke resultatet: den endelige matchingen blir den samme.",
    },
    {
      question: "Hvem kommer best ut av `Gale-Shapley`?",
      options: ["Frierne — hver av dem får sitt beste mulige stabile utfall", "Mottakerne — de bytter bare oppover og ender derfor med sitt beste utfall", "Begge sider likt — algoritmen er symmetrisk i de to rollene", "Den siden som har flest deltakere på preferanselistene sine"],
      explanation: "Frierne beveger seg nedover på listene sine og stopper så snart de blir akseptert, mens mottakerne aldri kan gjøre noe annet enn å ta imot tilbudene som kommer. At mottakerne bytter oppover underveis, betyr bare at de gjør det beste ut av et dårlig utgangspunkt — de ender med sitt **dårligste** stabile utfall.",
    },
    {
      question: "Kan `Gale-Shapley` ende opp uten å pare alle?",
      options: ["Nei — en ledig frier ville betydd at alle mottakere var opptatt, og da er alle friere paret", "Ja — hvis en frier blir avvist av samtlige mottakere, forblir hun ledig ut kjøringen", "Ja — hvis to friere har nøyaktig samme preferanseliste, blokkerer de hverandre", "Nei — men bare når preferanselistene på begge sider er identiske"],
      explanation: "En mottaker som først har fått et tilbud, forblir paret resten av kjøringen, så $n$ avvisninger av én frier ville betydd $n$ opptatte mottakere. Identiske preferanselister er helt uproblematisk — algoritmen bryr seg bare om rangeringen, ikke om den er lik.",
    },
    {
      question: "Hva skjer når en mottaker får et tilbud fra noen hun rangerer høyere enn den hun har?",
      options: ["Hun bytter, og den forrige blir ledig igjen", "Hun avviser tilbudet", "Hun beholder begge til alle frierier er gjennomført", "Hun bytter bare hvis den forrige har andre tilbud å gå til"],
      explanation: "Mottakere bytter alltid oppover på sin egen liste, og den forrige går tilbake i markedet for å fri videre nedover sin. Det er nettopp denne mekanismen som gjør algoritmen mer enn førstemann-til-mølla.",
    },
    {
      question: "Hva skiller stabil matching fra maksimal matching?",
      options: ["Stabil matching spør **hvem** som pares, gitt preferanser; maksimal spør **hvor mange**", "Stabil matching krever en rettet graf, mens maksimal matching bygger på en urettet graf", "Stabil matching løses med maks-flyt, mens maksimal matching løses grådig", "Stabil matching krever like mange på hver side, mens maksimal matching ikke gjør det"],
      explanation: "I stabil matching er antallet aldri problemet — med $n$ på hver side kan alle alltid pares — mens preferansene er hele saken. Maksimal matching løses med maks-flyt, og et flytnett har ingen plass til å lagre rangeringer.",
    },
    {
      question: "En frier har blitt avvist av en mottaker. Kan hun fri til henne igjen senere?",
      options: ["Nei — en avvisning er endelig, og det er dette som gir grensen på $n^2$ frierier", "Ja — hvis mottakeren senere blir ledig igjen fordi noen andre har byttet henne bort", "Ja — men bare én gang til, og bare hvis ingen andre er igjen på listen", "Nei — men hun kan fri igjen hvis mottakeren rykker opp på hennes egen liste"],
      explanation: "Frieren går strengt nedover sin egen liste og går aldri tilbake, og en mottaker kan uansett aldri bli ledig igjen etter sitt første tilbud. Uten denne endeligheten ville kjøretidsgrensen falt bort.",
    },
    {
      question: "Hva må stå i svaret på en `Gale-Shapley`-håndkjøring?",
      options: ["Den ferdige matchingen **og** hvilken orientering du kjørte", "Bare matchingen", "Hele tabellen over frierier, siden delvis uttelling gis for hvert steg", "Matchingen og en kontroll av at ingen blokkerende par finnes i den"],
      explanation: "Uten orienteringen er svaret flertydig: den andre kjøringen kan gi en annen, like stabil matching. Å liste alle frieriene er ikke etterspurt — sluttilstanden er svaret i sjanger C.",
    },
    {
      question: "Hvordan avgjør du om to bestemte parter kan være paret i en stabil matching?",
      options: ["Kjør `Gale-Shapley` begge veier og se om paret ligger innenfor rommet de rammer inn", "Kjør `Gale-Shapley` én eneste gang og se om nettopp det paret dukker opp i resultatet", "Sjekk om de står øverst på hverandres preferanselister", "Bygg et flytnett med de to som kilde og sluk, og kjør maks-flyt"],
      explanation: "Den frier-optimale kjøringen gir frieren sitt beste stabile utfall og den mottaker-optimale hennes dårligste, så alt mulig ligger mellom dem på listen. Én kjøring holder ikke: den finner bare **én** av de mulige stabile matchingene.",
    },
    {
      question: "Er en matching der alle får sitt førstevalg, alltid mulig?",
      options: ["Nei — to friere kan ha samme førstevalg, og bare én av dem kan få det", "Ja — `Gale-Shapley` finner alltid en slik matching hvis den kjøres riktig", "Ja — så lenge preferanselistene på begge sider er fullstendige", "Nei — men den er alltid mulig når antallet på hver side er et partall"],
      explanation: "Ønskene kan kollidere, og da må noen ned på listen sin; algoritmen lover bare stabilitet, ikke at alle blir fornøyde. Fullstendige lister sikrer at alle blir paret, ikke at noen får det de helst ville ha.",
    },
    {
      question: "Hva sier stabilitetsargumentet for `Gale-Shapley`?",
      options: ["Foretrakk frieren en annen, må hun ha fridd dit — og blitt avvist eller byttet bort", "Alle friere ender med sitt førstevalg, så ingen har grunn til å bytte i det hele tatt", "Mottakerne bytter bare nedover, så ingen kan forbedre seg ved å bryte ut", "Algoritmen sjekker eksplisitt etter blokkerende par før den avslutter"],
      explanation: "Var frieren avvist, står mottakeren nå med noen hun rangerer **over** frieren, og da er ikke paret blokkerende — selvmotsigelse. Algoritmen leter aldri etter blokkerende par: stabiliteten følger av mekanikken, ikke av en sjekk.",
    },
    {
      question: "Hvor mange frierier kan `Gale-Shapley` gjøre i verste tilfelle med $n$ på hver side?",
      options: ["$n^2$", "$n$", "$2n$", "$n\\lg n$"],
      explanation: "Hver av de $n$ frierne kan fri til hver av de $n$ mottakerne høyst én gang, og verste tilfelle nås faktisk for visse preferanselister. Det er nøyaktig denne tellingen som gir kjøretiden $O(n^2)$.",
    },
    {
      question: "To ulike orienteringer gir nøyaktig samme matching. Hva betyr det?",
      options: ["At det finnes bare én stabil matching for disse preferanselistene", "At algoritmen er kjørt feil, siden orienteringen alltid gir ulike resultater", "At alle deltakerne har fått sitt førstevalg i den aktuelle matchingen", "At preferanselistene på de to sidene er identiske med hverandre"],
      explanation: "Er «best mulig» og «dårligst mulig» det samme for hver frier, finnes det ingen andre stabile alternativer. Alle kan godt ha fått noe annet enn førstevalget sitt — entydigheten sier ingenting om hvor fornøyde de er.",
    },
  ],
  'tdt4120-7-1': [
    {
      question: "Hva sier definisjonen av klassen $NP$?",
      options: ["At et ja-svar kan verifiseres i polynomisk tid gitt et sertifikat av polynomisk lengde", "At problemet ikke kan løses i polynomisk tid av noen kjent eller ukjent algoritme", "At problemet kan løses i polynomisk tid, men bare av en ikke-deterministisk maskin med tilfeldige valg", "At både ja-svaret og nei-svaret kan verifiseres i polynomisk tid gitt hvert sitt sertifikat"],
      explanation: "$NP$ handler om **verifikasjon** av et ja-svar, ikke om løsning: du får et sertifikat og kontrollerer det i polynomisk tid. Svaret som sier at problemet ikke kan løses i polynomisk tid, er den vanligste feillesningen av bokstaven N — den står for *nondeterministisk*, ikke for *not*, og hele $P$ ligger inne i $NP$. Alternativet som krever kort bevis for begge svar, beskriver snittet mellom $NP$ og $\\text{co-}NP$, ikke $NP$ alene.",
    },
    {
      question: "Hva er et sertifikat?",
      options: ["En foreslått løsning som følger med instansen og kan kontrolleres raskt", "En algoritme som løser problemet i polynomisk tid uten ekstra data", "Et bevis for at ingen polynomisk algoritme for problemet finnes", "En oversikt over alle kandidatløsninger som instansen tillater"],
      explanation: "Sertifikatet er den foreslåtte løsningen — nodesekvensen, delmengden, vaktlista — som verifikasjonsalgoritmen kontrollerer. Alternativet som beskriver en fullstendig oversikt over kandidatløsninger, er nettopp det lengdekravet utelukker: uten kravet om polynomisk sertifikatlengde ville hvert eneste avgjørelsesproblem havnet i $NP$.",
    },
    {
      question: "Hvilken påstand om forholdet mellom $P$ og $NP$ er riktig?",
      options: ["$P \\subseteq NP$, og om inklusjonen er streng, er et åpent spørsmål", "$NP \\subseteq P$, og om inklusjonen er streng, er et åpent spørsmål", "$P$ og $NP$ er disjunkte klasser uten noen problemer felles", "$P \\ne NP$ er bevist, men beviset er for langt til å gjengis på eksamen"],
      explanation: "At $P$ ligger i $NP$, følger av at en verifikator kan kaste sertifikatet og kjøre løsningsalgoritmen; om likhet gjelder, er ubesvart. Alternativet som påstår at $P \\ne NP$ er bevist, er en påstand du aldri skal skrive: spørsmålet er åpent. Alternativet som snur inklusjonen, ville betydd at alt som kan verifiseres raskt, også kan løses raskt — nettopp det åpne spørsmålet.",
    },
    {
      question: "Hva er kjøretiden til en verifikasjonsalgoritme som kontrollerer at en gitt nodesekvens er en hamiltonsykel i en graf gitt som nabomatrise?",
      options: ["$\\Theta(V)$", "$\\Theta(V!)$", "$\\Theta(V \\lg V)$", "$\\Theta(V^2)$"],
      explanation: "Kontrollen gjør $|V|$ distinkthetssjekker i en boolsk tabell og $|V|$ kantoppslag i nabomatrisen, alle i konstant tid. Alternativet $\\Theta(V!)$ er kostnaden ved å *finne* en hamiltonsykel ved uttømmende søk — og forskjellen mellom de to tallene er nøyaktig det klassen $NP$ setter ord på.",
    },
    {
      question: "Et optimeringsproblem skal gjøres om til et avgjørelsesproblem. Hva gjør du?",
      options: ["Legger en terskelverdi $k$ til inputen og spør om målet kan nås innenfor $k$", "Bytter ut målfunksjonen med en som bare kan gi verdiene 0 og 1", "Kjører optimeringsalgoritmen og runder svaret av til nærmeste heltall", "Fjerner alle bibetingelsene slik at problemet får nøyaktig én optimal løsning"],
      explanation: "Terskelen $k$ blir en del av inputen, og spørsmålet «finnes det en løsning med verdi høyst (eller minst) $k$?» har et rent ja/nei-svar. Alternativet som binariserer målfunksjonen, endrer selve problemet i stedet for spørsmålsformen, og gir ikke lenger et svar som kan sammenlignes med optimeringsvarianten.",
    },
    {
      question: "Hvorfor krever definisjonen av $NP$ at sertifikatet har polynomisk lengde?",
      options: ["Fordi verifikatoren må lese sertifikatet, og et eksponentielt langt sertifikat ville gjort kontrollen dyr", "Fordi et lengre sertifikat ville gjort selve søket etter løsningen raskere enn nødvendig", "Fordi lengdekravet er nettopp det som skiller klassen $NP$ fra klassen $\\text{co-}NP$ i den formelle definisjonen", "Fordi sertifikatet må ha nøyaktig samme lengde som instansen for å kunne sammenlignes"],
      explanation: "Uten lengdekravet kunne «sertifikatet» vært en oppramsing av alle kandidatløsninger, og enhver kontroll ville vært et oppslag — da ville alle avgjørelsesproblemer ligget i $NP$. Alternativet som knytter lengdekravet til skillet mot $\\text{co-}NP$, blander to ting: $\\text{co-}NP$ skilles ut ved at det er **nei**-svaret som skal verifiseres, ikke ved sertifikatlengden.",
    },
    {
      question: "Hvilket av disse avgjørelsesproblemene ligger i $P$?",
      options: ["Finnes det en flyt fra `s` til `t` med verdi minst $k$ i flytnettet?", "Finnes det en rundtur som besøker hver node nøyaktig én gang?", "Finnes det en delmengde av tallene med sum nøyaktig $k$?", "Finnes det en tilordning som gjør det logiske uttrykket sant?"],
      explanation: "`Edmonds-Karp` avgjør flytspørsmålet i $O(VE^2)$ ved å regne ut maksimal flyt og sammenligne med $k$. De tre andre er problemer der vi kan verifisere et sertifikat raskt, men ikke kjenner noen polynomisk algoritme som finner løsningen — for rundturen ville det uttømmende søket måtte prøve $(|V|-1)!$ sekvenser.",
    },
    {
      question: "Hva er komplementet til avgjørelsesproblemet «har grafen en hamiltonsykel?»",
      options: ["«Har grafen ingen hamiltonsykel?»", "«Har grafen ingen sykel?»", "«Har komplementgrafen en hamiltonsykel?»", "«Har grafen en hamiltonsykel av minimal lengde?»"],
      explanation: "Komplementet beholder instansen og snur svaret: ja blir nei og nei blir ja. Alternativet om komplementgrafen forveksler komplementet av et **problem** med komplementet av en **graf** — det siste bytter om hvilke nodepar som er kanter, og er en helt annen operasjon (den brukes i [kap. 7.2](/tdt4120/tdt4120-7-2)). Alternativet «har grafen ingen sykel?» spør om noe helt annet: en graf kan være full av sykler uten å ha en eneste hamiltonsykel.",
    },
    {
      question: "Hva karakteriserer klassen $\\text{co-}NP$?",
      options: ["At nei-svaret kan verifiseres i polynomisk tid gitt et passende sertifikat", "At problemet ligger utenfor $NP$ og dermed er strengt vanskeligere", "At problemet kan løses i polynomisk tid av en algoritme som snur svaret til slutt", "At både problemet og komplementet ligger i $P$ og dermed er raske å avgjøre"],
      explanation: "$\\text{co-}NP$ består av problemene der **komplementet** ligger i $NP$, altså der det er nei-svaret som har et kort, kontrollerbart bevis. Alternativet som plasserer $\\text{co-}NP$ utenfor $NP$, er galt fordi klassene overlapper: alt i $P$ ligger i begge.",
    },
    {
      question: "Størrelsen $n$ i uttrykket $O(n^k)$ er:",
      options: ["antall symboler den kodede inputen fyller", "antall objekter i inputen", "den største tallverdien som forekommer i inputen", "antall operasjoner algoritmen utfører på den gitte inputen"],
      explanation: "Kompleksitetsklassene måler kjøretid mot inputens lengde i symboler, ikke mot antall objekter. Alternativet som setter $n$ lik den største tallverdien i inputen, er nettopp forvekslingen som gjør at 0-1-ryggsekk feilaktig blir kalt polynomisk — et tall $m$ fyller bare $\\lfloor \\lg m \\rfloor + 1$ bits.",
    },
    {
      question: "Hvorfor gjelder $P \\subseteq NP$?",
      options: ["Fordi en verifikator kan ignorere sertifikatet og kjøre den polynomiske løsningsalgoritmen", "Fordi ethvert problem i $P$ har et sertifikat som er kortere enn instansen selv", "Fordi enhver polynomisk algoritme kan skrives om til et uttømmende søk over alle mulige sertifikater", "Fordi $NP$ per definisjon inneholder alle avgjørelsesproblemer som overhodet finnes"],
      explanation: "Verifikatoren som kaster sertifikatet og kjører løsningsalgoritmen, svarer 1 nøyaktig på ja-instansene og bruker samme polynomiske tid. Alternativet som sier at $NP$ inneholder alle avgjørelsesproblemer, ville gjort klassen innholdsløs — det er nettopp derfor kravet om polynomisk sertifikatlengde står i definisjonen.",
    },
    {
      question: "Hvilket sertifikat viser at 45 er en ja-instans for spørsmålet «finnes en delmengde av $\\{7, 11, 15, 23, 31\\}$ med sum 45?»",
      options: ["Delmengden $\\{7, 15, 23\\}$", "Delmengden $\\{11, 15, 23\\}$", "Tallet 45 selv", "Listen over alle 32 delmengder med summen notert ved hver"],
      explanation: "$7 + 15 + 23 = 45$, og verifikatoren summerer de tre tallene og sammenligner. Alternativet $\\{11, 15, 23\\}$ summerer til 49 og forkastes; alternativet som bare oppgir måltallet, er ikke noe sertifikat i det hele tatt, siden det ikke peker ut noen delmengde. Alternativet som lister alle $2^5 = 32$ delmengder, bryter kravet om polynomisk sertifikatlengde og er dessuten et søk, ikke et sertifikat.",
    },
    {
      question: "Hva er riktig svarform på en «stemmer dette?»-oppgave om NP-teori?",
      options: ["Ja eller nei først, deretter én presis setning som begrunner", "En gjennomgang av definisjonene som er i spill, og så konklusjonen til slutt", "Bare ja eller nei, uten begrunnelse", "Et moteksempel som viser at påstanden ikke kan gjelde generelt"],
      explanation: "Svaret skal lede med konklusjonen og følges av én setning. Alternativet som legger konklusjonen til slutt etter en gjennomgang, koster tid på fire timer med tjue likt vektede oppgaver — og svaret som nøyer seg med et bart ja eller nei, gir ikke full uttelling når oppgaven ber om en forklaring.",
    },
    {
      question: "En algoritme kjører i $\\Theta(2^n)$. Er den polynomisk?",
      options: ["Nei — $2^n$ vokser raskere enn ethvert polynom $n^k$", "Ja — $2^n$ kan skrives som $n^{\\lg 2 \\cdot n}$ og er dermed på polynomisk form", "Ja, når $n$ er begrenset av en konstant", "Nei, men bare når $n$ er større enn 50, siden $n^3$ er størst under den grensen"],
      explanation: "For enhver fast $k$ passerer $2^n$ til slutt $n^k$ og lar det ligge; det er definisjonen av superpolynomisk. Alternativet som setter grensen ved $n = 50$, forveksler *hvor* kurvene krysser med *om* de krysser — asymptotisk vekst handler om oppførselen for store $n$, ikke om et bestemt intervall.",
    },
    {
      question: "Hvilken påstand om $\\text{co-}NP$ er riktig?",
      options: ["Alt i $P$ ligger både i $NP$ og i $\\text{co-}NP$", "Ingen problemer kan ligge i begge klassene samtidig", "Det er bevist at $NP$ og $\\text{co-}NP$ er forskjellige klasser", "Et problem i $\\text{co-}NP$ kan aldri avgjøres i polynomisk tid"],
      explanation: "Kan svaret regnes ut raskt, kan både ja-et og nei-et verifiseres raskt, så $P \\subseteq NP \\cap \\text{co-}NP$. Alternativet som påstår at $NP$ og $\\text{co-}NP$ er bevist forskjellige, er galt på samme måte som «$P \\ne NP$ er bevist» — også dette er et åpent spørsmål.",
    },
    {
      question: "Hvilket av disse er et avgjørelsesproblem?",
      options: ["«Finnes det en rundtur med samlet lengde høyst 350 km?»", "«Hva er den korteste rundturen gjennom alle utleveringspunktene?»", "«List opp alle rundturer sortert etter samlet lengde.»", "«Hvor mange rundturer har samlet lengde under 350 km?»"],
      explanation: "Et avgjørelsesproblem har ja/nei som eneste mulige svar, og terskelen 350 km gjør nettopp det. Alternativet som spør om **hvor mange** rundturer som er korte nok, ser ut som et terskelspørsmål, men svaret er et tall — det er et telleproblem, ikke et avgjørelsesproblem.",
    },
  ],
  'tdt4120-7-2': [
    {
      question: "Hva betyr $A \\le_p B$?",
      options: ["At $A$ kan oversettes til $B$ i polynomisk tid, med svaret bevart begge veier", "At $B$ kan oversettes til $A$ i polynomisk tid, med svaret bevart begge veier", "At $A$ og $B$ kan løses med den samme algoritmen i polynomisk tid", "At $A$ kan løses raskere enn $B$ på enhver instans av de to problemene"],
      explanation: "Notasjonen leses «$A$ reduseres til $B$», og oversettelsen går fra $A$-instanser til $B$-instanser. Konsekvensen er at $B$ er minst like vanskelig som $A$ — ikke at $A$ er raskest, som er det motsatte av hva relasjonen sier.",
    },
    {
      question: "Du vil vise at problemet X er NP-hardt. Hvilken vei må reduksjonen gå?",
      options: ["FRA et kjent NP-komplett problem TIL X", "FRA X TIL et kjent NP-komplett problem", "Begge veier — reduksjonen må vises i begge retninger", "FRA X TIL et problem som er kjent å ligge i klassen P"],
      explanation: "Hardheten arves langs pilen: er det kjente problemet vanskelig, må X være minst like vanskelig. Den motsatte retningen viser bare at X ligger i NP, og det er sant for hvert eneste NP-problem — derfor skiller den ingenting.",
    },
    {
      question: "Du har vist X $\\le_p$ 3-CNF-SAT. Hva følger?",
      options: ["At X ikke er vanskeligere enn 3-CNF-SAT, altså at X ligger i NP", "At X er NP-hardt, siden 3-CNF-SAT er NP-komplett", "At X er NP-komplett, siden reduksjonen går til et NPC-problem", "At 3-CNF-SAT er minst like lett som X, siden pilen peker dit"],
      explanation: "Pilen peker mot det som er minst like vanskelig, og her er det 3-CNF-SAT — så X arver ingen hardhet. Å tro noe annet er felle #1, fagets mest fremhevede feil, og resultatet er null uttelling på oppgaven.",
    },
    {
      question: "Hva er forskjellen på NP-hardt og NP-komplett?",
      options: ["NP-komplett er NP-hardt **og** i NP; NP-hardt alene stiller ingen krav om medlemskap", "NP-hardt er NP-komplett **og** i P; NP-komplett alene stiller ingen slike krav om medlemskap", "De er to navn på det samme, og brukes om hverandre i litteraturen", "NP-hardt gjelder avgjørelsesproblemer, NP-komplett gjelder optimeringsproblemer"],
      explanation: "Et NPC-bevis har derfor to uavhengige deler: sertifikatet som viser medlemskap, og reduksjonen som viser hardhet. Det er tvert imot NP-hardt som **ikke** krever at problemet er et avgjørelsesproblem — optimeringsvarianter er typisk NP-harde uten å være i NP.",
    },
    {
      question: "Hvilke tre krav må en polynomisk reduksjon oppfylle?",
      options: ["Polynomisk oversettelse, svarbevaring begge veier, og definert for alle instanser", "Polynomisk oversettelse, svarbevaring én vei, og definert for ja-instanser", "Lineær oversettelse, svarbevaring begge veier, og definert for alle instanser", "Polynomisk oversettelse, samme inputstørrelse, og samme kjøretid for begge problemer"],
      explanation: "«Hvis og bare hvis» er avgjørende: en oversettelse som bare bevarer ja-svar, kan gjøre en nei-instans om til en ja-instans og ødelegge argumentet. Oversettelsen behøver ikke være lineær — polynomisk holder, siden sammensetningen da fortsatt er polynomisk.",
    },
    {
      question: "Hva følger hvis noen finner en polynomisk algoritme for ett NP-komplett problem?",
      options: ["At $P = NP$, siden alle problemer i NP kan reduseres til det", "At $P \\ne NP$, siden det ene problemet da skiller seg fra de andre", "At nettopp det problemet ikke var NP-komplett likevel", "Ingenting — problemene i NP er uavhengige av hverandre"],
      explanation: "Ethvert $A \\in NP$ kan reduseres til NPC-problemet i polynomisk tid, og sammensetningen av to polynomiske algoritmer er polynomisk. Det er nettopp derfor de NP-komplette problemene sies å stå og falle sammen.",
    },
    {
      question: "Hvorfor er SUBSET-SUM NP-komplett selv om den har en $\\Theta(n\\,t)$-algoritme?",
      options: ["Fordi $t$ er en tallverdi, ikke inputstørrelsen — algoritmen er pseudopolynomisk", "Fordi $\\Theta(n\\,t)$ er eksponentielt i $n$, altså i antall tall som står i mengden", "Fordi algoritmen bare virker når alle tallene i mengden er positive", "Fordi $\\Theta(n\\,t)$ ikke er en gyldig kjøretid for et avgjørelsesproblem"],
      explanation: "Måltallet $t$ skrives binært med $\\lceil\\lg t\\rceil$ siffer, så $t$ er eksponentielt i den delen av inputen. Kjøretiden er derfor ikke polynomisk i inputens lengde, og det er den lengden all kompleksitetsteori måles mot.",
    },
    {
      question: "Hva sier en pseudopolynomisk algoritme om problemets vanskelighet?",
      options: ["Ingenting — vanskeligheten avgjøres av reduksjoner, ikke av algoritmens form", "At problemet er NP-hardt, siden kjøretiden ikke er polynomisk i inputlengden", "At problemet ligger i P, siden kjøretiden er polynomisk i tallverdiene", "At problemet ligger i NP, men ikke er NP-komplett"],
      explanation: "`Ford-Fulkerson` er pseudopolynomisk og maks-flyt ligger i P; SUBSET-SUM har en pseudopolynomisk algoritme og er NP-komplett. Fellen går altså i begge retninger, og den er nummer sju i registeret.",
    },
    {
      question: "Hva er inputstørrelsen til et tall $t$ i et NP-teoretisk argument?",
      options: ["Antall siffer som trengs for å skrive $t$, altså $\\lceil\\lg t\\rceil$ binært", "Tallverdien $t$ selv, siden det er nettopp den algoritmen faktisk arbeider med", "Antall primfaktorer i $t$, siden det er dem operasjonene bryter ned", "Kvadratroten av $t$, som er den vanlige normeringen i kompleksitetsteori"],
      explanation: "Inputstørrelse er alltid antall symboler i beskrivelsen av instansen, ikke verdiene som står i den. Å bruke tallverdien i stedet er nettopp forvekslingen som gjør pseudopolynomiske algoritmer til å se polynomiske ut.",
    },
    {
      question: "Hva mangler for at «$A \\le_p X$ med $A$ NP-komplett» skal gi at X er NP-komplett?",
      options: ["Medlemskapsdelen — at X ligger i NP, vist med et sertifikat", "Hardhetsdelen — at alle problemer i NP kan reduseres til X", "En reduksjon den motsatte veien, altså X $\\le_p$ A i tillegg", "En polynomisk algoritme for X, som viser at det i det hele tatt er løsbart"],
      explanation: "Reduksjonen har allerede gitt hardheten; det som gjenstår, er å gi et sertifikat som kan kontrolleres i polynomisk tid. En reduksjon den motsatte veien ville også vist medlemskap i NP, men det er en omvei — sertifikatet er som regel enklere.",
    },
    {
      question: "En kandidat viser at problemet hans reduseres **til** SAT. Hva har han oppnådd?",
      options: ["Vist at problemet ligger i NP — men ingenting om at det er hardt", "Vist at problemet er NP-hardt, siden SAT er NP-komplett", "Vist at problemet er NP-komplett, siden begge deler følger av reduksjonen", "Vist at SAT er minst like lett som problemet hans"],
      explanation: "Retningen gir en øvre grense på vanskeligheten: problemet er ikke verre enn SAT. Siden **hvert eneste** problem i NP kan reduseres til et NPC-problem, skiller påstanden ingenting — og det er derfor den gir null uttelling som hardhetsbevis.",
    },
    {
      question: "Hvorfor må en reduksjon bevare svaret **begge** veier?",
      options: ["Fordi en nei-instans ellers kan bli oversatt til en ja-instans, og svaret blir galt", "Fordi oversettelsen ellers ikke kan regnes ut i polynomisk tid", "Fordi de to problemene ellers ikke kan ligge i den samme kompleksitetsklassen i det hele tatt", "Fordi sertifikatet ellers ikke kan oversettes sammen med instansen"],
      explanation: "Løseren for $B$ svarer på den oversatte instansen, og skal svaret kunne leses tilbake, må sammenhengen holde i begge retninger. Kjøretiden til oversettelsen er et eget krav og har ingenting med svarbevaringen å gjøre.",
    },
    {
      question: "Kan et NP-hardt problem ligge utenfor NP?",
      options: ["Ja — NP-hardhet stiller ingen krav om at problemet selv ligger i NP", "Nei — NP-hardhet er definert som medlemskap i NP pluss en reduksjon", "Nei — alle problemer som er NP-harde, er også NP-komplette", "Ja, men bare hvis problemet er et optimeringsproblem og ikke et avgjørelsesproblem"],
      explanation: "Definisjonen handler bare om reduksjoner **inn** til problemet, og sier ingenting om problemet selv. Det finnes NP-harde problemer som ikke engang er avgjørbare — de er da langt utenfor NP, og optimeringsformen er bare ett av flere tilfeller.",
    },
    {
      question: "Hva viser en reduksjon $X \\le_p Y$ når $Y$ kan løses i $O(n^3)$?",
      options: ["At X kan løses i polynomisk tid, siden lettheten flyter bakover langs pilen", "At Y er NP-hardt, siden noe kan reduseres til det i polynomisk tid", "At X er NP-hardt, siden reduksjonen viser at X er minst like vanskelig som $Y$", "Ingenting — reduksjoner kan bare brukes til å vise hardhet, ikke letthet"],
      explanation: "Oversett i polynomisk tid og kjør $Y$-løseren; sammensetningen er polynomisk. Reduksjoner brukes nettopp begge veier: framover flytter de vanskelighet, bakover flytter de letthet.",
    },
    {
      question: "Hvorfor holder det å redusere fra **ett** NP-komplett problem for å vise NP-hardhet?",
      options: ["Fordi alle problemer i NP allerede reduseres til det, og reduksjoner kan settes sammen", "Fordi NP-komplette problemer per definisjon dekker alle instanser av alle NP-problemer", "Fordi det er en konvensjon i faget, ikke et matematisk krav i seg selv", "Fordi ett NP-komplett problem alltid kan oversettes til hvilket som helst annet i P"],
      explanation: "Er $A \\le_p C$ for alle $A \\in NP$, og $C \\le_p X$, gir sammensetningen $A \\le_p X$ for alle $A$. Kjeden i [kap. 7.3](/tdt4120/tdt4120-7-3) er nettopp bygget på denne sammensetningen, ledd for ledd.",
    },
    {
      question: "Hva er den skjulte fellen i kravet «reduksjonen må dekke alle instanser»?",
      options: ["Å redusere fra et spesialtilfelle av det kjente problemet i stedet for hele problemet", "Å bruke en oversettelse som gjør den nye instansen større enn den opprinnelige instansen var", "Å oversette instanser som allerede har kjent svar, i stedet for ukjente", "Å la oversettelsen avhenge av hvilken algoritme man senere vil bruke på $B$"],
      explanation: "Et spesialtilfelle kan godt være lett selv om det generelle problemet er hardt, så en slik reduksjon beviser ingenting. At instansen vokser er helt uproblematisk, så lenge veksten er polynomisk.",
    },
    {
      question: "Hva bør stå i tillegg til konklusjonen i et sjanger G-svar?",
      options: ["Hva reduksjonen **ikke** viser om problemet", "En full utskriving av oversettelsesfunksjonen $f$", "Kjøretiden til den beste kjente algoritmen for begge problemene", "En vurdering av om $P = NP$ er sant eller ikke"],
      explanation: "Forbeholdet er halve svaret i denne sjangeren, og det er der løsningsforslagene oftest skiller mellom riktig og galt. En full utskriving av $f$ er sjelden etterspurt — skissen holder, og tiden er knapp.",
    },
    {
      question: "Hvorfor ligger maks-flyt i P selv om `Ford-Fulkerson` er pseudopolynomisk?",
      options: ["Fordi `Edmonds-Karp` løser problemet i $O(VE^2)$, uten tallverdier i kjøretiden", "Fordi pseudopolynomiske algoritmer alltid er polynomiske for heltallige kapasiteter", "Fordi maks-flyt ikke er et avgjørelsesproblem og derfor faller utenfor klassen", "Fordi flytverdien alltid er begrenset av antall kanter i nettet"],
      explanation: "Et problem ligger i P så snart **minst én** polynomisk algoritme finnes — det kreves ikke at alle er det. Flytverdien er ikke begrenset av antall kanter: én eneste kant med kapasitet $10^9$ gir en flytverdi på en milliard.",
    },
  ],
  'tdt4120-7-3': [
    {
      question: "Hva vil det si at et problem $X$ er NP-hardt?",
      options: ["At hvert problem i $NP$ kan reduseres polynomisk til $X$ — $X$ er minst like vanskelig som alt i $NP$", "At $X$ ligger i $NP$ og i tillegg er det vanskeligste problemet blant dem som ligger der", "At $X$ kan reduseres polynomisk til et kjent NP-komplett problem, og at $X$ dermed arver vanskeligheten derfra", "At det ikke finnes noen algoritme for $X$ i det hele tatt, uansett hvor mye tid du gir den"],
      explanation: "NP-hardhet sier bare noe om vanskelighet, ikke om medlemskap: et NP-hardt problem trenger ikke selv ligge i $NP$ og kan til og med være uavgjørbart. Reduksjonen den andre veien — fra $X$ til noe kjent — viser bare at $X$ ikke er verre, og beviser ingenting. Og NP-harde problemer har fullt brukbare algoritmer, de er bare ikke kjent polynomiske.",
    },
    {
      question: "Hva kreves for at et problem $X$ skal være NP-komplett?",
      options: ["Både at $X \\in NP$ og at $X$ er NP-hardt — to påstander som må vises hver for seg", "Bare at $X$ er NP-hardt; medlemskapet i $NP$ følger automatisk av reduksjonen", "Bare at $X \\in NP$ og at ingen polynomisk algoritme for $X$ er kjent i dag", "At $X$ kan reduseres polynomisk til hvert eneste av de øvrige problemene i katalogen"],
      explanation: "De NP-komplette problemene er de vanskeligste **inne i** $NP$, og begge leddene er nødvendige. Har du bare hardheten, har du vist NP-hardhet; har du bare medlemskapet, har du ikke sagt noe om vanskelighet — alt i $P$ ligger jo også i $NP$. At ingen polynomisk algoritme er funnet, er en observasjon, ikke et bevis.",
    },
    {
      question: "Hvordan ser et fullstendig NP-komplett-bevis for et problem $X$ ut?",
      options: ["Del 1: oppgi sertifikat og polynomisk verifikasjon. Del 2: gi en reduksjon $Y \\le_p X$ fra et kjent NPC-problem $Y$", "Del 1: oppgi sertifikat og polynomisk verifikasjon. Del 2: gi en reduksjon $X \\le_p Y$ til et kjent NPC-problem $Y$", "Del 1: vis at ingen polynomisk algoritme finnes. Del 2: gi en eksponentiell algoritme som løser $X$", "Én del: gi en reduksjon fra et kjent NP-komplett problem, siden medlemskapet følger av reduksjonen"],
      explanation: "Retningen i del 2 er avgjørende — reduksjonen går **fra** det kjente vanskelige **til** ditt problem, og det er den setningen du leser høyt for å kontrollere deg selv. Snur du den, har du vist at $X$ ikke er verre enn $Y$, som er et svar på et helt annet spørsmål. Medlemskapet må vises for seg med sitt eget sertifikat.",
    },
    {
      question: "Hva er spesielt med beviset for at CIRCUIT-SAT er NP-komplett?",
      options: ["Hardheten vises direkte mot definisjonen av $NP$, ikke ved reduksjon fra et annet NP-komplett problem", "Hardheten vises ved reduksjon fra 3-CNF-SAT, som er det egentlig første NP-komplette problemet", "Medlemskapet er det vanskelige leddet, siden en krets med $n$ innganger har $2^n$ mulige inputkombinasjoner", "Beviset viser bare NP-hardhet; medlemskapet i $NP$ er fortsatt et åpent spørsmål for CIRCUIT-SAT"],
      explanation: "Det fantes ingenting å redusere fra, så beviset tar et vilkårlig $A \\in NP$, henter fram verifikasjonsalgoritmen og skriver den om til en krets av polynomisk størrelse. Medlemskapet er derimot det lette leddet: evaluér kretsen på den foreslåtte inputen, lineært i antall porter. Reduksjonskjeden går **fra** CIRCUIT-SAT til SAT til 3-CNF-SAT, ikke motsatt.",
    },
    {
      question: "Hva spør CIRCUIT-SAT om?",
      options: ["Om det finnes en tilordning av 0 og 1 til inngangene som får kretsen til å gi 1 på utgangen", "Om kretsen gir 1 på utgangen for hver eneste mulige tilordning av 0 og 1 til inngangene", "Om kretsen kan bygges om til en mindre krets med færre logiske porter og nøyaktig samme oppførsel", "Om det finnes en sløyfe i kretsen, altså en vei fra en utgang tilbake til en inngang"],
      explanation: "Spørsmålet er om kretsen er **oppfyllbar**, altså om minst én input gir 1 ut — sertifikatet er nettopp den inputen. Spørsmålet om **alle** tilordninger gir 1, er tautologiproblemet, som ligger i $\\text{co-}NP$. En kombinatorisk krets har per definisjon ingen sløyfer.",
    },
    {
      question: "Hva kjennetegner en formel i 3-CNF-SAT?",
      options: ["Den er på konjunktiv normalform, og hver eneste klausul har nøyaktig tre literaler", "Den er på konjunktiv normalform, og hele formelen har nøyaktig tre klausuler", "Den har nøyaktig tre variabler, som hver kan opptre i vilkårlig mange klausuler", "Den er på disjunktiv normalform, og hver konjunksjon har nøyaktig tre literaler"],
      explanation: "Konjunktiv normalform betyr klausuler koblet med AND, der hver klausul er literaler koblet med OR — og i 3-CNF er hver klausul nøyaktig tre lang. Antall klausuler og antall variabler er derimot fri. Standardformen er nettopp det som gjør problemet til arbeidshesten videre i kjeden: den er ryddig nok til å bygge grafkonstruksjoner ut av.",
    },
    {
      question: "Hva spør CLIQUE om?",
      options: ["Om grafen har en delmengde på **minst** $k$ noder der alle er parvis naboer", "Om grafen har en delmengde på **høyst** $k$ noder der alle er parvis naboer", "Om grafen har en delmengde på **minst** $k$ noder der ingen er naboer med hverandre", "Om grafen har en delmengde på **minst** $k$ kanter som til sammen danner en komplett delgraf"],
      explanation: "CLIQUE er maksimeringssiden: du leter etter noe stort, og terskelen er en nedre grense. Med «høyst $k$» blir spørsmålet trivielt, siden én enkelt node alltid er en klikk. Mengden uten kanter mellom seg er en uavhengig mengde, som er det motsatte begrepet, og kravet stilles til noder, ikke til kanter.",
    },
    {
      question: "Hva spør VERTEX-COVER om?",
      options: ["Om grafen har en delmengde på **høyst** $k$ noder slik at hver kant har minst ett endepunkt i mengden", "Om grafen har en delmengde på **minst** $k$ noder slik at hver kant har minst ett endepunkt i mengden", "Om grafen har en delmengde på **høyst** $k$ kanter slik at hver node er endepunkt for minst én av dem", "Om grafen har en delmengde på **høyst** $k$ noder som er parvis naboer med hverandre"],
      explanation: "VERTEX-COVER er minimeringssiden — motsatt av CLIQUE — og kravet stilles til **kantene**: hver kant skal treffes. Å be om **minst** $k$ noder gjør spørsmålet trivielt, siden hele $V$ alltid er et nodedekke. Et krav om parvis naboskap er definisjonen av en klikk, ikke av et dekke.",
    },
    {
      question: "Et definisjonssvar lyder: «Et nodedekke er en mengde noder som er parvis naboer.» Hva er galt?",
      options: ["Det er definisjonen av en klikk — et nodedekke stiller krav til **kantene**, ikke til naboskapet mellom nodene", "Det er riktig, men ufullstendig — svaret mangler bare kravet om at mengden skal ha høyst $k$ noder", "Det er definisjonen av en uavhengig mengde — et nodedekke krever tvert imot at ingen noder er naboer", "Det er riktig for urettede grafer, men et nodedekke i en rettet graf krever i tillegg at kantretningen respekteres"],
      explanation: "De to begrepene stiller krav til helt ulike ting: klikken krever at alle par av valgte noder har en kant mellom seg, mens nodedekket krever at hver kant i grafen treffes av minst én valgt node. Et definisjonssvar med feil objekt er galt, ikke omtrentlig riktig — og dette paret står for flere tapte poeng enn noe annet i katalogen.",
    },
    {
      question: "Hvilken sammenheng knytter CLIQUE og VERTEX-COVER sammen?",
      options: ["$C$ er en klikk i komplementgrafen $\\bar{G}$ nøyaktig når $V \\setminus C$ er et nodedekke i $G$", "$C$ er en klikk i $G$ nøyaktig når $V \\setminus C$ er et nodedekke i den samme grafen $G$", "Den største klikken og det minste nodedekket i en graf har alltid nøyaktig like mange noder", "En klikk på $k$ noder i $G$ svarer alltid til et nodedekke på nøyaktig $k$ noder i den samme grafen $G$"],
      explanation: "Klikk i $\\bar{G}$ er det samme som uavhengig mengde i $G$, og komplementet av en uavhengig mengde er nettopp et nodedekke — derfor svarer en klikk på $k$ noder i $\\bar{G}$ til et nodedekke på $n-k$ noder i $G$. Å tro at de to størrelsene henger sammen på **samme** graf, er en av de tre faste feilene i dette paret.",
    },
    {
      question: "Hva er en uavhengig mengde i en graf?",
      options: ["En delmengde av nodene uten en eneste kant mellom to av dem", "En delmengde av nodene der alle er parvis naboer", "En delmengde av kantene der ingen to kanter deler et endepunkt", "En delmengde av nodene som ikke er nådd av noen sti fra resten av grafen"],
      explanation: "$I$ er uavhengig nøyaktig når $I$ er en klikk i komplementgrafen, og nøyaktig når $V \\setminus I$ er et nodedekke i $G$ — de tre begrepene er tre synsvinkler på det samme. Delmengden av kanter uten felles endepunkt er en matching, som er et annet begrep.",
    },
    {
      question: "Hva skiller en hamiltonsk sykel fra en eulersk tur?",
      options: ["Den hamiltonske besøker hver **node** én gang; den eulerske bruker hver **kant** én gang", "Den hamiltonske bruker hver **kant** én gang; den eulerske besøker hver **node** én gang", "Den hamiltonske er lukket og ender der den startet; den eulerske må ende i en annen node", "Den hamiltonske finnes bare i rettede grafer; den eulerske finnes bare i urettede grafer"],
      explanation: "Forskjellen er hva som skal brukes opp — noder eller kanter — og den er avgjørende: eulersk tur avgjøres i lineær tid ved å se på nodegradene, mens HAM-CYCLE er NP-komplett. En node med grad 1 utelukker umiddelbart en hamiltonsk sykel, siden en sykel må både inn og ut av hver node.",
    },
    {
      question: "Hvordan arves hardheten til TSP fra HAM-CYCLE?",
      options: ["Gi kostnad 0 til kantene som finnes i originalgrafen og 1 til de øvrige, og spør om en rundtur med kostnad høyst 0", "Gi kostnad 1 til alle kantene i originalgrafen, og spør om en rundtur med samlet kostnad høyst antall noder", "Fjern alle kanter som ikke inngår i noen hamiltonsk sykel, og spør om den gjenværende grafen er komplett", "Løs TSP med en polynomisk algoritme, og bruk deretter svaret til å avgjøre om en hamiltonsk sykel finnes i grafen"],
      explanation: "Konstruksjonen lager en komplett graf der de opprinnelige kantene er gratis, og en rundtur koster 0 nøyaktig når den bare bruker opprinnelige kanter — altså nøyaktig når en hamiltonsk sykel finnes. Reduksjonen går fra det kjente vanskelige til TSP, og den bruker ingen algoritme for TSP underveis; en reduksjon er en omskriving av instansen, ikke en løsning.",
    },
    {
      question: "SUBSET-SUM løses av en tabellalgoritme på $\\Theta(nt)$ tid. Hva følger av det?",
      options: ["Ingenting om at problemet er lett — $t$ er en tallverdi, og algoritmen er pseudopolynomisk, ikke polynomisk", "At SUBSET-SUM ligger i $P$, og dermed at $P = NP$, siden problemet også er NP-komplett", "At SUBSET-SUM ikke er NP-komplett, siden et NP-komplett problem ikke kan ha en tabellalgoritme", "At $t$ må være liten i alle praktiske instanser, siden algoritmen ellers ikke ville blitt publisert i det hele tatt"],
      explanation: "Kjøretid måles i **inputlengden i bit**, og måltallet $t$ skrives med om lag $\\lceil \\lg t \\rceil$ bit — er $t = 10^9$, tar tallet 30 bit, mens tabellen har en milliard kolonner. Uttrykket $\\Theta(nt)$ er derfor eksponentielt i inputlengden. Å lese det som polynomisk og konkludere med $P = NP$ er felle #7.",
    },
  ],
  'tdt4120-7-4': [
    {
      question: "Du skal vise at problemet $X$ er NP-hardt. Hvilken vei går reduksjonen?",
      options: ["Fra et kjent NP-komplett problem $Y$ til $X$, altså $Y \\le_p X$", "Fra $X$ til et kjent NP-komplett problem $Y$, altså $X \\le_p Y$", "Begge veier — en gyldig reduksjon må vise ekvivalens mellom de to problemene", "Fra $X$ til et problem i $P$, siden det viser at $X$ ikke lar seg løse raskt"],
      explanation: "$Y \\le_p X$ leses «$X$ er minst like vanskelig som $Y$», og det er nøyaktig den påstanden du er ute etter. Setningen du sier høyt hver gang: jeg reduserer FRA det kjente vanskelige TIL mitt problem. Motsatt retning er ikke et delvis riktig svar — det er et svar på et annet spørsmål.",
    },
    {
      question: "Du har vist $X \\le_p$ TSP. Hva har du bevist om $X$?",
      options: ["At $X$ ikke er vanskeligere enn TSP — det sier ingenting om at $X$ selv er vanskelig", "At $X$ er NP-hardt, siden TSP er NP-komplett og hardheten dermed overføres langs pilen til $X$", "At $X$ er NP-komplett, siden reduksjonen både gir hardhet og medlemskap i $NP$", "At $X$ ikke ligger i $P$, med mindre det viser seg at $P = NP$ likevel er sant"],
      explanation: "Pilen peker oppover i vanskelighet: reduksjonen sier at TSP er minst like vanskelig som $X$, og om $X$ selv sier den bare at det er løsbart innenfor TSP. Sortering kan reduseres til TSP også, og sortering er ikke vanskelig. Til gjengjeld gir denne retningen deg medlemskapet gratis, siden $NP$ er lukket under polynomiske reduksjoner.",
    },
    {
      question: "Hvilke tre krav må en polynomisk reduksjon oppfylle samtidig?",
      options: ["Polynomisk konstruksjonstid, en lovlig instans ut, og svarbevaring i begge retninger", "Polynomisk konstruksjonstid, lovlig instans ut, og at målproblemet ligger i $NP$", "Polynomisk konstruksjonstid, at instansen blir mindre, og svarbevaring begge veier", "Lovlig instans ut, svarbevaring begge veier, og at begge problemene er avgjørelsesproblemer"],
      explanation: "Alle tre må holde, og et argument som glipper på ett av dem, er ugyldig. Instansen behøver ikke bli mindre — den kan gjerne vokse, bare den vokser polynomisk. Om målproblemet ligger i $NP$, er et separat spørsmål som ikke inngår i selve reduksjonen.",
    },
    {
      question: "Hva må stå i medlemskapsdelen av et NP-komplett-bevis?",
      options: ["Hva sertifikatet består av, og at det kan verifiseres i polynomisk tid i instansens lengde", "En polynomisk algoritme som løser problemet, siden medlemskap betyr at problemet er løsbart", "En reduksjon fra et kjent problem i $NP$, siden medlemskap arves langs reduksjonspilen", "En begrunnelse for at ingen eksponentiell algoritme er nødvendig for å avgjøre problemet"],
      explanation: "To linjer holder på eksamen, men begge må stå: navngi sertifikatet — en nodemengde, en delmengde, en tilordning, en rekkefølge — og oppgi verifikasjonstiden. Medlemskap i $NP$ krever at ja-svar er lette å **sjekke**, ikke at problemet er lett å **løse**. En reduksjon erstatter ikke denne delen.",
    },
    {
      question: "En besvarelse gir en korrekt reduksjon fra 3-CNF-SAT til $X$ og stopper der. Hva er vist?",
      options: ["At $X$ er NP-hardt — men ikke at $X$ er NP-komplett, siden hele medlemskapsdelen mangler", "At $X$ er NP-komplett — reduksjonen fra et NP-komplett problem gir begge deler på én gang", "At $X$ ligger i $NP$ — men ikke at $X$ er NP-hardt, siden bare ett katalogproblem er brukt", "Ingenting — en enkelt reduksjon er aldri nok, det kreves reduksjoner fra minst to katalogproblemer"],
      explanation: "Reduksjonen gir hardheten, og transitiviteten sørger for at alt i $NP$ dermed reduseres til $X$. Men NP-kompletthet er to påstander, og den andre — sertifikat pluss polynomisk verifikasjon — står igjen. Én reduksjon fra ett kjent NP-komplett problem er tilstrekkelig for hardheten; flere trengs ikke.",
    },
    {
      question: "En reduksjon tar tallet $t$ fra inputen og lager $t$ noder ut av det. Hva er galt?",
      options: ["Outputen blir eksponentielt stor i inputlengden, siden $t$ skrives med om lag $\\lg t$ bit", "At $X$ er NP-komplett — reduksjonen fra et NP-komplett problem gir begge deler på én eneste gang", "Svarbevaringen brytes, siden antall noder ikke kan bestemmes av en enkelt tallverdi", "Ingenting — konstruksjonen er lineær i $t$ og dermed polynomisk i inputen"],
      explanation: "Kravet om polynomisk tid måles mot inputens lengde i bit, ikke mot tallenes verdi — og et tall på 30 bit kan gi en milliard noder. Feilen er lumsk fordi retningen og svarbevaringen godt kan være helt korrekte. Kontrollen er å sammenligne outputens størrelse med inputens lengde i bit.",
    },
    {
      question: "«$X$ er et spesialtilfelle av et NP-komplett problem, altså er $X$ NP-komplett.» Hva er galt?",
      options: ["Å levere en begrenset instans inn i det generelle problemet viser bare at spesialtilfellet ikke er vanskeligere", "Ingenting — et spesialtilfelle av et NP-komplett problem er alltid selv NP-komplett", "Argumentet mangler bare medlemskapsdelen; med sertifikat og verifikasjon blir det gyldig", "Spesialtilfeller kan ikke reduseres i det hele tatt, siden instansene i dem allerede er begrenset på forhånd"],
      explanation: "Reduksjonen SPESIALTILFELLE $\\le_p$ GENERELT går feil vei for formålet, og et spesialtilfelle kan være strengt lettere: 2-CNF-SAT avgjøres i polynomisk tid, mens 3-CNF-SAT er NP-komplett. Skal du vise at et begrenset problem er NP-hardt, må reduksjonen gå **inn i** begrensningen, slik SAT $\\le_p$ 3-CNF-SAT gjør.",
    },
    {
      question: "Du vet at $X \\le_p Y$ og at $Y \\in P$. Hva følger?",
      options: ["$X \\in P$ — kjør reduksjonen og deretter den polynomiske algoritmen for $Y$", "$Y$ er NP-hardt — siden $X$ reduseres til det, arver $Y$ vanskeligheten fra $X$", "$X$ er NP-hardt — reduksjonen viser at $X$ er minst like vanskelig som $Y$", "Ingenting — en reduksjon kan bare brukes til å vise hardhet, aldri til å vise at noe er lett"],
      explanation: "Dette er den kontrapositive lesningen, og den er den nyttigste når du vil vise at noe er **lett**: et polynom satt inn i et polynom er fortsatt et polynom. Snudd om sier den samme reduksjonen at hvis $X$ er vanskelig, må $Y$ være minst like vanskelig — men det krever at $X$ faktisk er vanskelig, og her er $Y \\in P$.",
    },
    {
      question: "Du vet at $X \\le_p Y$ og at $Y \\in NP$. Hva følger?",
      options: ["$X \\in NP$ — klassen er lukket under polynomiske reduksjoner", "$X \\in P$ — medlemskap i $NP$ smitter nedover til $P$", "$X$ er NP-hardt — alt som reduseres til noe i $NP$, er selv minst like vanskelig", "Ingenting om $X$ — en reduksjon overfører bare hardhet, aldri medlemskap"],
      explanation: "Kjør reduksjonen og bruk deretter verifikasjonsalgoritmen for $Y$; til sammen er det fortsatt polynomisk, og sertifikatet for $Y$-instansen fungerer som sertifikat for $X$. Det er nettopp derfor en reduksjon **til** et katalogproblem likevel gir deg medlemskapsdelen gratis — den er bare ubrukelig som hardhetsargument.",
    },
    {
      question: "Hva følger hvis noen finner en polynomisk algoritme for ett eneste NP-komplett problem?",
      options: ["$P = NP$ — alt i $NP$ reduseres polynomisk til det problemet og blir dermed polynomisk løsbart", "Bare at det ene problemet ligger i $P$ — de øvrige NP-komplette problemene er upåvirket av funnet", "$P \\ne NP$ — funnet ville vist at klassene kan skilles fra hverandre med en konkret algoritme", "At $NP$ og $\\text{co-}NP$ faller sammen, men spørsmålet om $P$ mot $NP$ ville fortsatt vært åpent"],
      explanation: "Per definisjon reduseres hvert problem i $NP$ polynomisk til et NP-komplett problem, så en polynomisk løsning på ett av dem gir polynomiske løsninger på alle — et polynom satt inn i et polynom er fortsatt et polynom. Alle NP-komplette problemer står og faller sammen. Spørsmålet om $P = NP$ er fortsatt åpent.",
    },
    {
      question: "Hva sier en korrekt reduksjon **ikke** noe om?",
      options: ["Om kildeproblemet er lett — pilen peker oppover i vanskelighet og sier ingenting om det du reduserte fra", "Om målproblemet er minst like vanskelig som kildeproblemet — det må vises med et eget argument", "Om konstruksjonen kan gjennomføres i polynomisk tid — det følger av at reduksjonen er korrekt", "Om ja-instanser blir til ja-instanser — svarbevaringen er en ren konsekvens av at reduksjonen i det hele tatt finnes"],
      explanation: "Reduksjonen sier heller ikke at problemet er uløselig i praksis, og den sier ikke at problemet er NP-komplett med mindre medlemskapet også er vist. At målproblemet er minst like vanskelig, er derimot nøyaktig det reduksjonen sier, og både polynomisk tid og svarbevaring er krav du må vise, ikke gratis konsekvenser.",
    },
    {
      question: "Hva forteller det at en algoritme for et problem er pseudopolynomisk?",
      options: ["Noe om den ene algoritmen, ikke om problemet — det er verken et tegn på lett eller på NP-hardt", "At problemet er NP-hardt, siden en ekte polynomisk algoritme ellers ville vært funnet", "At problemet ligger i $P$, siden kjøretiden er polynomisk i de tallverdiene som faktisk står i inputen", "At problemet ikke ligger i $NP$, siden verifikasjonen arver den samme kjøretiden"],
      explanation: "`Ford-Fulkerson` er pseudopolynomisk, og maks-flyt ligger likevel i $P$ — `Edmonds-Karp` løser det på $O(VE^2)$. SUBSET-SUM har også en pseudopolynomisk algoritme og er NP-komplett. Ordet beskriver altså én algoritmes kjøretid, ikke problemets kompleksitetsklasse.",
    },
    {
      question: "En oppgave spør: «Er $X$ i $NP$?» Hva skal svaret inneholde?",
      options: ["Sertifikat og verifikasjonstid — en reduksjon er overflødig når det er medlemskapet som etterspørres", "En reduksjon fra et kjent NP-komplett problem, siden det er nettopp slik man viser tilhørighet til klassen $NP$", "Både sertifikat og reduksjon, siden de to spørsmålene i praksis alltid stilles sammen", "En polynomisk algoritme som løser $X$, siden medlemskap i $NP$ betyr polynomisk løsbarhet"],
      explanation: "De tre spørsmålene «er $X$ i $NP$», «er $X$ NP-hardt» og «er $X$ NP-komplett» har helt forskjellige svar, og den vanligste tapte poengen er å svare på et annet enn det som ble stilt. Blir du bedt om medlemskap alene, koster reduksjonen bare tid. Og medlemskap i $NP$ handler om å **sjekke** ja-svar, ikke om å finne dem.",
    },
    {
      question: "«Problemet ligger i $NP$, altså er det vanskelig.» Hva er galt med resonnementet?",
      options: ["Alt i $P$ ligger også i $NP$ — sortering er i $NP$, og sortering er ikke vanskelig", "Ingenting — $NP$ er per definisjon klassen av de vanskelige avgjørelsesproblemene", "$NP$ inneholder bare problemer uten kjent algoritme, så påstanden er sirkulær men sann", "Feilen er bare formuleringen — det skulle stått «altså er det ikke i $P$», som er riktig"],
      explanation: "$P \\subseteq NP$, så medlemskap i $NP$ er en svært mild påstand: den sier bare at ja-svar kan verifiseres raskt gitt et sertifikat. Det er NP-**hardheten** som er vanskelighetspåstanden. Å hevde at et problem i $NP$ ikke ligger i $P$, ville dessuten forutsatt at $P \\ne NP$, som er åpent.",
    },
    {
      question: "Problemet ditt handler om å dele en mengde tall i to like tunge halvdeler. Hvilket katalogproblem er det mest naturlig å redusere fra?",
      options: ["SUBSET-SUM — det er tallproblemet i katalogen, og formen på instansen ligner mest på ditt", "CLIQUE — det er det mest brukte katalogproblemet, og alle reduksjoner kan gå ut fra det", "HAM-CYCLE — enhver oppdeling kan skrives som en rundtur gjennom de valgte elementene", "CIRCUIT-SAT — det er det opprinnelige NP-komplette problemet, og derfor det sikreste valget"],
      explanation: "Velg det katalogproblemet som ligner mest i form: tallmengder mot SUBSET-SUM, nodeutvalg mot CLIQUE eller VERTEX-COVER, rundturer mot HAM-CYCLE. Alle katalogproblemene er formelt like gode utgangspunkt, siden hardheten er den samme — men en reduksjon fra et problem med helt annen form blir unødvendig tung å skrive ned.",
    },
    {
      question: "Hva betyr kravet om at en reduksjon skal bevare svaret «begge veier»?",
      options: ["Ja-instanser skal bli til ja-instanser, **og** nei-instanser skal bli til nei-instanser også", "Reduksjonen skal kunne kjøres i begge retninger, altså både fra $Y$ til $X$ og fra $X$ til $Y$", "Både ja- og nei-instanser skal kunne verifiseres med hvert sitt sertifikat i polynomisk tid", "Konstruksjonen skal kunne reverseres, slik at den opprinnelige instansen kan gjenskapes fra outputen"],
      explanation: "Kravet er en ekvivalens: $x$ er en ja-instans av $Y$ hvis og bare hvis $f(x)$ er en ja-instans av $X$. Bare den ene retningen holder ikke — en konstruksjon som gjør alle instanser til ja-instanser, ville vært ubrukelig. Selve avbildningen trenger derimot verken være reversibel eller injektiv.",
    },
    {
      question: "Hva skal kjøretiden til en reduksjon måles mot?",
      options: ["Lengden av inputinstansen målt i bit — ikke tallverdiene som står i den", "Antall elementer i inputinstansen, uansett hvor store tallene i den er", "Kjøretiden til den beste kjente algoritmen for målproblemet $X$", "Størrelsen på instansen reduksjonen produserer, siden det er den som skal løses"],
      explanation: "Dette er kravet som oftest brytes usynlig: skrives et tall $t$ ut ledd for ledd, blir instansen eksponentielt stor selv om konstruksjonen «bare» er lineær i $t$. Målproblemets egen kjøretid er irrelevant for om reduksjonen er polynomisk — det er to atskilte spørsmål.",
    },
    {
      question: "Hvorfor holder det å redusere fra **ett** kjent NP-komplett problem for å vise NP-hardhet?",
      options: ["Fordi reduksjoner er transitive: er $A \\le_p Y$ for alle $A \\in NP$ og $Y \\le_p X$, så er $A \\le_p X$", "Antall elementer i inputinstansen, uansett hvor store tallverdiene som står i den er", "Kjøretiden til den beste kjente algoritmen for målproblemet $X$, siden det er den som til slutt skal kjøres", "Fordi definisjonen av NP-hardhet bare krever én reduksjon fra ett vilkårlig problem i $NP$"],
      explanation: "$Y$ er NP-hardt, altså reduseres alt i $NP$ til $Y$, og din reduksjon tar det videre til $X$ — sammensetningen av to polynomiske reduksjoner er selv polynomisk. Det er transitiviteten som gjør at du slipper å behandle alle $A \\in NP$ direkte, slik CIRCUIT-SAT-beviset måtte gjøre.",
    },
    {
      question: "Må et NP-hardt problem ligge i $NP$?",
      options: ["Nei — NP-hardt sier bare at problemet er minst like vanskelig som alt i $NP$, og det kan være strengt verre", "Fordi de NP-komplette problemene er innbyrdes ekvivalente, og ett bevis derfor dekker alle mulige tilfeller", "Ja — reduksjonen fra et problem i $NP$ overfører medlemskapet sammen med hardheten", "Nei — men bare fordi noen problemer i $NP$ ennå ikke er klassifisert som harde eller lette"],
      explanation: "Et NP-hardt problem kan være uavgjørbart, altså langt utenfor $NP$. Det er nettopp derfor NP-kompletthet er to påstander og ikke én. Reduksjonen går dessuten inn til problemet ditt, og den retningen overfører hardhet — ikke medlemskap.",
    },
    {
      question: "Hvilken setning avslutter et fullstendig svar i sjanger G, ifølge løsningsforslagene?",
      options: ["En setning om hva reduksjonen ikke viser — for eksempel at den ikke sier noe om kildeproblemets vanskelighet", "Ja — NP-hardhet er definert som medlemskap i klassen $NP$ pluss maksimal vanskelighet innenfor den samme klassen", "En setning om at $P \\ne NP$, siden konklusjonen ellers henger i lufta uten en avklaring", "En setning som gjentar reduksjonsretningen, slik at sensor ser at du har kontroll på pilen"],
      explanation: "Det er ofte den setningen som skiller et fullt svar fra et halvt: reduksjonen sier ikke at kildeproblemet er lett, ikke at problemet er uløselig i praksis, og ikke at problemet er NP-komplett med mindre medlemskapet også er vist. Å postulere $P \\ne NP$ ville derimot vært en påstand boka ikke gjør — spørsmålet er åpent.",
    },
  ],
  'tdt4120-8-1': [
    {
      question: "Et ordinært TDT4120-sett har om lag 20 likt vektede kortsvarsoppgaver på fire timer. Hvor mye tid gir det per oppgave i snitt?",
      options: ["Om lag 12 minutter per oppgave, og hver oppgave er verdt om lag 5 prosent av karakteren.", "Om lag 20 minutter per oppgave, og hver oppgave er verdt om lag 12 prosent av karakteren.", "Om lag 8 minutter per oppgave, siden det siste kvarteret er satt av til gjennomlesing.", "Om lag 24 minutter per oppgave, fordi bare halvparten av oppgavene teller mot karakteren."],
      explanation: "240 minutter delt på 20 oppgaver er 12 minutter, og 100 prosent delt på 20 oppgaver er 5 prosent hver. Svaret som oppgir 20 minutter og 12 prosent, har byttet om de to tallene — det er lett å gjøre, og det gir et budsjett som ikke rekker gjennom settet. Svaret som halverer antallet tellende oppgaver, bygger på en vekting som ikke finnes: alle oppgavene teller likt.",
    },
    {
      question: "En oppgave ber deg kjøre `Heapsort` på et gitt array og oppgi resultatet. Hva skal stå på besvarelsen?",
      options: ["Bare sluttilstanden, i det formatet oppgaven navngir — for en maks-haug hele arrayet med indeks fra 1.", "Hele sporingstavlen med én rad per bytte og per `Max-Heapify`-kall, slik at hele kjøringen kan følges steg for steg.", "En forklaring av hvordan `Max-Heapify` siver et element nedover, fulgt av det ferdige arrayet.", "Sluttilstanden sammen med et argument for at haugegenskapen holder etter hvert eneste steg."],
      explanation: "Håndkjøringsoppgaver ber om sluttilstanden i et bestemt format, og tavlen hører til på kladdearket. Svaret som leverer hele sporingstavlen, er den vanligste overleveringen: den er ikke gal, men den bruker minutter uten å legge til noe oppgaven ba om. Svaret som forklarer hvordan `Max-Heapify` virker, besvarer et helt annet spørsmål enn det som ble stilt.",
    },
    {
      question: "En oppgave spør: «Stemmer det at en grådig algoritme alltid finner en optimal løsning når problemet har optimal substruktur?» Hvilken svarform ber oppgaven om?",
      options: ["Ja eller nei aller først, deretter én presis setning som begrunner konklusjonen.", "En avveining av argumenter for og imot, der leseren selv trekker konklusjonen til slutt.", "En definisjon av optimal substruktur og av grådighet, med et eksempel på hver av dem.", "Et moteksempel som avslutter svaret, uten at det sies rett ut om påstanden holder."],
      explanation: "«Stemmer dette?»-oppgaver skal ha avgjørelsen i første ord og begrunnelsen i den neste setningen. Svaret som veier argumenter uten å konkludere, har ikke besvart oppgaven i det hele tatt. Svaret som bare gir et moteksempel, er nærmere sannheten — moteksempelet er ofte nettopp den riktige begrunnelsen — men uten et uttalt «nei» må leseren gjette hva du mener.",
    },
    {
      question: "Du vil vise at et problem $X$ er NP-hardt. Hvilken reduksjon gjør den jobben?",
      options: ["En polynomisk reduksjon fra et kjent NP-hardt problem til $X$, altså $\\text{3-CNF-SAT} \\le_p X$.", "En polynomisk reduksjon fra $X$ til et kjent NP-komplett problem, altså $X \\le_p \\text{3-CNF-SAT}$.", "En polynomisk reduksjon fra $X$ til et problem som er kjent å ligge i klassen P.", "En polynomisk reduksjon fra et problem i klassen P til $X$, som viser at $X$ er minst like lett."],
      explanation: "$A \\le_p B$ betyr at $B$ er minst like vanskelig som $A$, så vanskelighet vises ved å redusere fra noe kjent vanskelig til ditt eget problem. Svaret som reduserer fra $X$ til et NP-komplett problem, er fagets mest fremhevede feil: den retningen viser bare at $X$ ikke er verre enn 3-CNF-SAT, og beviser ingenting om at $X$ er vanskelig. Å redusere fra et problem i P gir heller ingen nedre grense.",
    },
    {
      question: "Dynamisk programmering løser 0-1-ryggsekk på $\\Theta(nm)$, der $n$ er antall gjenstander og $m$ er kapasiteten. Hva er riktig om denne kjøretiden?",
      options: ["Den er pseudopolynomisk: $m$ er en tallverdi i inndata, ikke et antall elementer, så tiden er eksponentiell i inndatas lengde.", "Den er polynomisk: kjøretiden er et produkt av to størrelser som begge står oppgitt direkte i inndata, og slike produkter er alltid polynomiske.", "Den er eksponentiell i $n$, siden hver av de $n$ gjenstandene kan tas med eller utelates.", "Den er polynomisk fordi hver celle i tabellen regnes ut i konstant tid fra to celler i raden over."],
      explanation: "Et tall med $b$ binærsiffer kan være så stort som $2^b$, så $\\Theta(nm)$ er eksponentiell i lengden på inndata og dermed pseudopolynomisk. Svaret som kaller kjøretiden polynomisk fordi den er et produkt av to inndatastørrelser, blander sammen et antall elementer og verdien av ett tall — det er nettopp fellen. At hver celle koster konstant tid er sant, men det sier ingenting om hvor mange celler tabellen har.",
    },
    {
      question: "Hva er kjøretiden til `Build-Max-Heap` på et array med $n$ elementer, og hvorfor?",
      options: ["$\\Theta(n)$, fordi nesten alle nodene ligger nederst i haugen og derfor har svært liten høyde å sive gjennom.", "$\\Theta(n\\lg n)$, fordi den kaller `Max-Heapify` om lag $n/2$ ganger nedenfra og opp, og hvert enkelt kall koster $O(\\lg n)$.", "$\\Theta(\\lg n)$, fordi arbeidet er proporsjonalt med haugens høyde og haugen er et komplett binærtre.", "$\\Theta(n^2)$, fordi hvert av de $n$ elementene i verste fall må sive gjennom hele haugen."],
      explanation: "Summen av sivedybdene konvergerer til $O(n)$ fordi antallet noder på høyde $h$ faller like raskt som kostnaden per node stiger. Svaret som oppgir $\\Theta(n\\lg n)$, er den klassiske feilen: regnestykket «$n/2$ kall ganger $\\lg n$» gir en korrekt øvre grense, men den er for løs, og oppgaven ber om den strammeste. $\\Theta(\\lg n)$ er kostnaden for ett enkelt `Max-Heapify`-kall, ikke for hele byggingen.",
    },
    {
      question: "Formuleringen «lange svar teller ikke positivt» er kjent fra faget. Hva er den faktiske statusen til den?",
      options: ["Den sto trykt i settene fra 2015 til 2018, altså seks terminer, og er borte fra oppgavearkene fra og med august 2019.", "Den står trykt på hvert eneste oppgaveark helt fram til i dag, og er derfor den mest siterte formelle føringen i faget.", "Den har aldri stått på et oppgaveark, men er en muntlig tradisjon som studenter har videreført seg imellom.", "Den ble innført først i 2019 og gjelder bare de åpne designoppgavene, ikke de øvrige oppgavetypene."],
      explanation: "Setningen var trykt i seks terminer i perioden 2015 til 2018 og forsvant fra oppgavearkene i august 2019. Svaret som hevder at den fortsatt står på hvert ark, overdriver belegget — men disiplinen består likevel, for den ligger nå i formuleringene «kun output», «oppgi svaret i $\\Theta$-notasjon» og «forklar kort», og i at 20 oppgaver teller likt på fire timer.",
    },
    {
      question: "Hvorfor lønner det seg å plassere hovedpoenget i den aller første setningen i en definisjonsoppgave?",
      options: ["Fordi delvis uttelling gir poeng for de riktige delene av et ufullstendig svar, og et avbrutt svar da beholder det som teller mest.", "Fordi et svar som begynner med hovedpoenget, blir kortere, og et kort svar gir i seg selv høyere uttelling enn et langt svar med nøyaktig samme innhold.", "Fordi en definisjon uten oppbygging er den eneste formen som godtas, og et svar med kontekst først regnes som feil.", "Fordi rekkefølgen på setningene avgjør hvilket læringsmål oppgaven blir regnet inn under ved retting av settet."],
      explanation: "Et halvferdig svar gir uttelling for den halvparten som står der, så rekkefølgen bestemmer hva du sitter igjen med hvis klokka tar deg. Svaret om at korte svar i seg selv gir høyere uttelling, er en overtolkning: kortheten er en konsekvens av presisjon, ikke en kilde til poeng. Og et svar med litt kontekst først er ikke feil — det er bare mer sårbart for å bli avbrutt.",
    },
    {
      question: "Et designsvar (åpen algoritmedesign) har fem ledd. Hvilket ledd er det som oftest mangler i et ellers godt svar?",
      options: ["Rekonstruksjonen av selve løsningen, med den eksplisitte setningen om at den ikke øker den asymptotiske kjøretiden.", "Navnet på paradigmet, siden det uansett kan leses ut av konstruksjonen som beskrives i leddet rett etterpå, og derfor er overflødig.", "Kjøretiden til slutt, som i praksis bare gjentar det antall delproblemer konstruksjonen alt har vist.", "Navnet på det klassiske problemet, som sjelden gir uttelling så lenge konstruksjonen står der."],
      explanation: "Oppgaven ber om en fordeling, en oppdeling eller en plan — ikke om et tall — og mange besvarelser stopper ved optimalverdien i siste celle. Svaret om at paradigmenavnet kan leses ut av konstruksjonen, snur saken på hodet: navnet er nettopp det som sikrer uttelling når konstruksjonen ikke blir ferdig. Kjøretiden og problemnavnet er billige ledd og faller sjelden bort.",
    },
    {
      question: "En oppgave spør om `Dijkstra` finner korteste vei i en rettet graf som inneholder én negativ kantvekt, men ingen negativ sykel. Hva er svaret?",
      options: ["Nei — `Dijkstra` krever ikke-negative kantvekter, og én negativ kant er nok til at en node kan erklæres ferdig for tidlig.", "Ja — kravet gjelder bare negative sykler, og uten en slik sykel er korteste vei veldefinert og algoritmen finner den riktig.", "Ja — algoritmen slakker hver kant minst én gang, og en enkelt negativ kant blir dermed fanget opp underveis.", "Nei — algoritmen stopper med feilmelding så snart den møter en kant med negativ vekt i nabolisten."],
      explanation: "`Dijkstra` erklærer en node ferdig når den plukkes ut med minst $d$-verdi, og en negativ kant lenger ute kan gjøre den avgjørelsen gal i ettertid. Svaret som sier ja fordi det bare finnes et krav om ingen negative sykler, forveksler `Dijkstra` med `Bellman-Ford` — det er `Bellman-Ford` som tåler negative kanter og som oppdager negative sykler. Algoritmen gir heller ingen feilmelding; den gir bare et galt svar.",
    },
    {
      question: "Når skal svaret på en kjøretidsoppgave skrives med $\\Theta$, og når med $O$?",
      options: ["$\\Theta$ når øvre og nedre grense er kjent og like, $O$ når bare den øvre grensen er vist eller kjent.", "$\\Theta$ i verste tilfelle og $O$ i beste tilfelle, siden beste tilfelle bare gir en øvre grense på arbeidet.", "$\\Theta$ for iterative algoritmer og $O$ for rekursive, der rekurrensen bare gir en øvre grense.", "$\\Theta$ når kjøretiden er et polynom og $O$ når den inneholder en logaritmefaktor i tillegg."],
      explanation: "Valget handler om hvor mye du faktisk kan garantere: er begge grensene tette, kaster $O$ bort informasjon oppgaven ba om. Svaret som knytter $\\Theta$ til verste tilfelle og $O$ til beste, blander sammen to uavhengige akser — man kan oppgi $\\Theta$ for beste tilfelle også, slik `Insertion-Sort` er $\\Theta(n)$ i beste tilfelle. Formen på algoritmen avgjør heller ingenting.",
    },
    {
      question: "NTNU publiserer offisielle løsningsforslag for TDT4120. Hva sier løsningsforslagene selv om svarene sine?",
      options: ["At de bare er eksempler på svar som gir uttelling, og at mange beslektede svar godtas på lik linje.", "At formuleringene må gjengis så nøyaktig som mulig, siden avvik fra ordlyden regnes som mangler.", "At de er skrevet for undervisningsbruk og derfor er vesentlig fyldigere enn et fullgodt eksamenssvar.", "At de bare dekker de vanskeligste oppgavene, og at kortsvarsoppgavene er utelatt med hensikt."],
      explanation: "Løsningsforslagene presenterer seg selv som eksempler, ikke som en fasitordlyd, og det betyr at du skal treffe innholdet framfor formuleringen. Svaret om at ordlyden må gjengis nøyaktig, er den antakelsen som får folk til å skrive langt for å «dekke seg inn» — nettopp det motsatte av det disiplinen ber om. Forslagene finnes dessuten for alle 45 terminene fra desember 2003 til desember 2025, kortsvarsoppgavene inkludert.",
    },
  ],
  'tdt4120-8-2': [
    {
      question: "Hvilket paradigme passer «fordel $n$ oppdrag på $m$ personer, med grenser for hvor mange hver kan ta»?",
      options: ["Maksimal flyt i et firelagsnett", "Dynamisk programmering med ryggsekkrekurrensen", "Bredde-først-søk fra hver av de $n$ oppdragsnodene", "Minimalt spenntre med `Kruskal` og `Union-Find`"],
      explanation: "Fordeling med øvre grenser per part er kjennetegnet på et tilordningsproblem med kapasiteter, og kapasitetene i nettet koder nettopp grensene. Ryggsekkrekurrensen ville vært riktig hvis enhetene var udelbare og bare **én** samlet grense fantes.",
    },
    {
      question: "Hvilket ledd i et designsvar glipper oftest?",
      options: ["Rekonstruksjonen av selve løsningen", "Navngivingen av paradigmet", "Kjøretiden til den valgte algoritmen", "Beskrivelsen av nodene i konstruksjonen"],
      explanation: "Oppgaven ber om en plan, en fordeling eller en oppdeling, og et svar som stopper ved optimalverdien, er felle #6. De tre andre leddene sitter som regel — det er avlesningen som blir glemt i tidsnød.",
    },
    {
      question: "Hva koder kapasiteten på kanten fra kilden $s$ til en venstre node?",
      options: ["Hvor mange enheter den noden kan ta imot", "Hvilke tildelinger som er tillatt for den noden", "Hvor mange enheter hele nettet skal fordele til sammen", "Hvor mange naboer noden har på høyre side av nettet"],
      explanation: "All flyt til noden passerer den ene kildekanten, så kapasiteten der er den naturlige øvre grensen. Hva som er **tillatt**, kodes derimot ved at midtkanten finnes eller ikke — kapasiteter koder mengder, ikke lovlighet.",
    },
    {
      question: "Hvilken algoritme velger du når oppgaven ber om «færrest ledd i en kjede»?",
      options: ["`BFS`, $\\Theta(V+E)$ — den teller kanter, ikke vekt", "`Dijkstra`, $O(E\\lg V)$ — korteste vei fra én kilde", "`Floyd-Warshall`, $\\Theta(V^3)$ — den dekker alle par av noder", "`MST-Kruskal`, $O(E\\lg V)$ — den finner billigste sammenhengende nett"],
      explanation: "«Færrest ledd» betyr at alle kanter teller likt, og da er bredde-først-søk både riktig og raskest. `Dijkstra` ville gitt samme svar hvis du satte alle vekter til 1, men koster en unødvendig logaritmefaktor.",
    },
    {
      question: "Hva sikrer at en maksimal flyt kan leses som en konkret tildeling?",
      options: ["Heltallsteoremet — med heltallige kapasiteter finnes en heltallig maksimal flyt", "Maks-flyt/min-snitt-teoremet, som gir at flytverdien er lik snittkapasiteten", "At `Edmonds-Karp` alltid velger den korteste forøkende stien i restnettet", "Bevaringsbetingelsen, som sikrer balanse i hver node som ikke er kilde eller sluk"],
      explanation: "Uten heltallighet kunne en midtkant båret 0,5, og «halvparten av en vakt» gir ingen mening som tildeling. Maks-flyt/min-snitt sier at flyten er optimal, men ikke noe om at den er heltallig.",
    },
    {
      question: "En oppgave ber om «billigste samling ruter som gjør det umulig å komme fra X til Y». Hva er dette?",
      options: ["Et min-snitt-problem, løst ved å kjøre maks-flyt og lese av snittet", "Et maksimal-matching-problem mellom rutene i X og rutene i Y", "Et minimalt-spenntre-problem der de dyreste kantene fjernes til slutt", "Et korteste-vei-problem der kostnaden minimeres langs en enkelt sti"],
      explanation: "«Billigste barriere» er den direkte oversettelsen av snittkapasitet, og snittet leses av gratis med én `BFS` etter kjøringen. Et korteste-vei-svar ville gitt den billigste **veien gjennom**, ikke den billigste måten å stenge den.",
    },
    {
      question: "Hvordan koder du en kostnad som ligger på en **node** i stedet for på en kant?",
      options: ["Del noden i to, med en indre kant som bærer kostnaden", "Legg kostnaden på alle kantene ut av noden i stedet", "Legg kostnaden på alle kantene inn til noden i stedet", "Fjern noden og la nabokantene gå direkte mellom naboene"],
      explanation: "Etter splittingen må all flyt gjennom noden passere den indre kanten, så en kapasitet der er nøyaktig en kapasitet på noden. Å legge kostnaden på nabokantene ville telt den én gang per kant.",
    },
    {
      question: "Hva er kjøretiden du oppgir for et flytnett med $n$ personer, $m$ oppdrag og $k$ tillatte par?",
      options: ["$O(VE^2)$ med $V = n+m+2$ og $E = O(n+m+k)$", "$O(VE^2)$, uten videre presisering av hva $V$ og $E$ er", "$O(nmk)$, siden det er de tre størrelsene problemet oppgir", "$O(n^2)$, siden `Edmonds-Karp` er kvadratisk i antall personer"],
      explanation: "Kjøretiden skal oppgis i problemets egne størrelser, ellers kan ikke den som retter, se om konstruksjonen din gir grensen. $O(VE^2)$ alene er et halvt svar, og én linje til henter hele leddet.",
    },
    {
      question: "En jobb kan **ikke** splittes mellom maskiner. Hva betyr det for flytmodellen?",
      options: ["Modellen virker ikke — flyten fra én node kan splittes på flere kanter", "Modellen virker som før, siden heltallsteoremet hindrer splitting", "Modellen virker, men kjøretiden øker fra $O(VE^2)$ til $\\Theta(V^3)$", "Modellen virker bare hvis alle jobbene har nøyaktig samme størrelse"],
      explanation: "Heltallighet betyr at hver kant bærer et helt tall, ikke at hele jobben går én vei — flyten kan fint fordeles på flere midtkanter. Den udelte varianten er en ryggsekkvariant og NP-hard, mens den delbare ligger i P.",
    },
    {
      question: "Hvilken vei må en reduksjon gå når oppgaven ber deg vise at et problem er vanskelig?",
      options: ["FRA et kjent vanskelig problem TIL ditt problem", "FRA ditt problem TIL et kjent vanskelig problem", "FRA ditt problem TIL et problem som ligger i klassen P", "Begge veier, slik at problemene vises å være likeverdige"],
      explanation: "Hardheten arves langs pilen: er kilden vanskelig, må målet være minst like vanskelig. Den motsatte retningen viser bare at problemet ditt ligger i NP, og det er sant for hvert eneste NP-problem — felle #1.",
    },
    {
      question: "Hvilket paradigme passer «finn den lengste rekken av elementer begge listene har, i samme rekkefølge»?",
      options: ["DP med LCS-rekurrensen, $\\Theta(nm)$", "Et mengdesnitt, $\\Theta(n+m)$", "Sortering av begge listene og deretter ett gjennomløp, $\\Theta(n\\lg n)$", "`BFS` i en graf der elementene er noder og likhet er kanter"],
      explanation: "Kravet «i samme rekkefølge» er nettopp det som gjør dette til lengste felles delsekvens. Uten det kravet ville et mengdesnitt vært riktig og mye raskere — det er den ene setningen i oppgaveteksten som avgjør valget.",
    },
    {
      question: "Hva må stå i svaret på en `Gale-Shapley`-designoppgave, i tillegg til matchingen?",
      options: ["Hvilken orientering som ble kjørt", "Hvor mange frierier som ble gjort", "At matchingen er entydig bestemt av preferanselistene", "At problemet også kunne vært løst med maks-flyt"],
      explanation: "Den andre orienteringen kan gi en annen, like stabil matching, så uten opplysningen er svaret flertydig. Matchingen er nettopp **ikke** entydig, og stabil matching kan ikke løses med flyt — et flytnett har ingen plass til preferanser.",
    },
    {
      question: "Grafen har negative kantvekter, ingen negative sykler, og er syklusfri. Hvilken algoritme er raskest?",
      options: ["`DAG-Shortest-Path`, $\\Theta(V+E)$", "`Bellman-Ford`, $\\Theta(VE)$", "`Dijkstra`, $O(E\\lg V)$", "`Floyd-Warshall`, $\\Theta(V^3)$"],
      explanation: "Er grafen syklusfri, finnes en topologisk rekkefølge, og da holder én slakking per kant uten prioritetskø. `Bellman-Ford` ville gitt riktig svar, men til $\\Theta(VE)$ — og `Dijkstra` er rett og slett ulovlig med negative vekter.",
    },
    {
      question: "Hva koster rekonstruksjonen av tildelingen i en flytmodellering?",
      options: ["$O(E)$ — ett gjennomløp av midtkantene, uten ny kjøring", "$O(VE^2)$ — algoritmen må kjøres på nytt", "$O(V+E)$ — en ny `BFS` må kjøres for å finne hvilke kanter som bærer flyt", "$\\Theta(1)$ — tildelingen leses direkte av den maksimale flytverdien"],
      explanation: "Flyten ligger allerede lagret på kantene når algoritmen er ferdig, så du går bare gjennom midtkantene én gang. Flytverdien alene sier hvor mange tildelinger som skjer, ikke hvilke — det er nettopp derfor rekonstruksjonen trengs.",
    },
    {
      question: "Hva er en rimelig lengde på et sjanger H-svar?",
      options: ["Fem til ti linjer — de fem leddene, og ikke mer", "En halv side, slik at alle detaljer i konstruksjonen kommer med", "To til tre linjer", "Så langt som nødvendig — designoppgaver har ingen øvre grense"],
      explanation: "De fem leddene får plass på fem til ti linjer, og lengre svar stjeler tid fra nitten andre oppgaver som teller like mye. To til tre linjer er for kort: da mangler minst ett av leddene, som regel rekonstruksjonen.",
    },
    {
      question: "Oppgaven krever at hver ansatt tar **minst** én vakt. Hva gjør du med flytmodellen?",
      options: ["Sier at nedre grenser faller utenfor standardmodellen, og forklarer hvorfor", "Setter kapasiteten på kildekanten til 1, som da koder minstekravet", "Setter kapasiteten på slukkanten til 1, som da koder minstekravet", "Legger til en ekstra kilde med kapasitet 1 til hver ansatt"],
      explanation: "Kapasiteter setter bare **øvre** grenser, så et minstekrav kan ikke uttrykkes i modellen fra [kap. 5.1](/tdt4120/tdt4120-5-1). Å si det ærlig og peke på hva som skulle til, gir uttelling; å late som om en kapasitet plutselig koder et minimum, gir det ikke.",
    },
  ],
  'tdt4120-8-3': [
    {
      question: "Hva er kjøretiden til `Build-Max-Heap` på et array med $n$ elementer?",
      options: ["$\\Theta(n)$, fordi de aller fleste nodene ligger nær bunnen og siver svært kort", "$\\Theta(n\\lg n)$, fordi det gjøres omtrent $n$ kall til `Max-Heapify` med $O(\\lg n)$ hver", "$\\Theta(\\lg n)$, fordi høyden på en binærhaug med $n$ elementer er logaritmisk", "$\\Theta(n^2)$, fordi hvert element i verste fall må sammenlignes med alle de andre"],
      explanation: "Summen av sivedybdene over alle nodene teleskoperer til en konvergent rekke, så byggingen er lineær. Alternativet som oppgir $\\Theta(n\\lg n)$, ganger antall kall med den maksimale høyden — det er en gyldig øvre grense, men ikke en tett en, for bare rotnoden kan sive hele høyden.",
    },
    {
      question: "Hvilken kombinasjon av egenskaper har `Heapsort`?",
      options: ["$\\Theta(n\\lg n)$ i verste tilfelle, sorterer på stedet, og er ikke stabil", "$\\Theta(n\\lg n)$ i verste tilfelle, sorterer på stedet, og er dessuten stabil", "$\\Theta(n\\lg n)$ i verste tilfelle, trenger ekstra array, og er stabil", "$\\Theta(n^2)$ i verste tilfelle, sorterer på stedet, og er ikke stabil"],
      explanation: "`Heapsort` bygger haugen i $\\Theta(n)$ og gjør deretter $n-1$ uttrekk med $O(\\lg n)$ hver, alt i selve arrayet. Alternativet som kaller den stabil, overser at byttet mellom rota og siste haugelement flytter like nøkler forbi hverandre uten å holde orden på hvem som kom først.",
    },
    {
      question: "Du skal sortere $n$ heltall som alle ligger mellom $0$ og $n^3$. Hva blir kjøretiden til `Counting-Sort` her?",
      options: ["$\\Theta(n^3)$, fordi kjøretiden er $\\Theta(n+k)$ og $k$ her er $n^3$", "$\\Theta(n)$, fordi `Counting-Sort` alltid sorterer i lineær tid", "$\\Theta(n\\lg n)$, fordi ingen sortering kan være raskere enn dette", "$\\Theta(n^2)$, fordi telletabellen må gjennomløpes én gang per element"],
      explanation: "`Counting-Sort` er $\\Theta(n+k)$ der $k$ er nøkkelområdets størrelse, og med $k = n^3$ dominerer telletabellen fullstendig. Alternativet som sier at algoritmen alltid er lineær, glemmer betingelsen $k = O(n)$ — uten den er `Merge-Sort` med $\\Theta(n\\lg n)$ det bedre valget.",
    },
    {
      question: "Hva er kjøretiden til `Randomized-Select` i verste tilfelle?",
      options: ["$\\Theta(n^2)$, fordi pivotvalget kan dele arrayet svært skjevt hver gang", "$\\Theta(n)$, fordi algoritmen forkaster halve arrayet i hvert steg", "$\\Theta(n\\lg n)$, fordi den i praksis oppfører seg som `Quicksort`", "$\\Theta(\\lg n)$, fordi den halverer søkeområdet slik binærsøk gjør"],
      explanation: "Forventningen $\\Theta(n)$ er tatt over algoritmens egne tilfeldige pivotvalg, ikke over inputen, og en uheldig rekke valg gir kvadratisk tid. Alternativet som oppgir $\\Theta(n)$, forveksler forventet kjøretid med garantert kjøretid — den garantien får du bare fra `Select` med median av medianer.",
    },
    {
      question: "Hva skriver `Inorder-Tree-Walk` ut, og hva koster gjennomløpet?",
      options: ["Nøklene i sortert rekkefølge, i $\\Theta(n)$ tid", "Nøklene i den rekkefølgen de ble satt inn, i $\\Theta(n)$ tid", "Nøklene nivå for nivå, i $\\Theta(n)$ tid", "Nøklene i sortert rekkefølge, i $\\Theta(n\\lg n)$ tid"],
      explanation: "Søketreegenskapen gir at venstre deltre kommer først, så noden, så høyre deltre, og hver node besøkes én gang. Alternativet om innsettingsrekkefølgen er den vanligste feilen: den rekkefølgen finnes ikke lagret noe sted i treet etter at det er bygget.",
    },
    {
      question: "Rekurrensen $T(n) = 3T(n/4) + n\\lg n$ løses med masterteoremet. Hvilket tilfelle og hvilket svar?",
      options: ["Tilfelle 3, og $T(n) = \\Theta(n\\lg n)$, siden $\\log_4 3$ er mindre enn $1$", "Tilfelle 1, og $T(n) = \\Theta(n^{\\log_4 3})$, siden det er tre delkall", "Tilfelle 2, og $T(n) = \\Theta(n\\lg^2 n)$, siden $f(n)$ har en $\\lg$-faktor", "Masterteoremet gjelder ikke her, siden $f(n)$ ikke er et rent polynom"],
      explanation: "$n^{\\log_4 3}$ vokser saktere enn $n$, så $f(n) = n\\lg n$ dominerer polynomisk, og regularitetsbetingelsen holder med $c = 3/4$. Alternativet som velger tilfelle 2, ser bare $\\lg$-faktoren i $f(n)$ og glemmer å sammenligne $f(n)$ med $n^{\\log_b a}$ først.",
    },
    {
      question: "Hvilket krav stiller `Dijkstra` til grafen, og hva er kjøretiden med binærhaug?",
      options: ["Ikke-negative kantvekter, og $O(E\\lg V)$ med binærhaug som prioritetskø", "Ingen krav til kantvektene, og $O(E\\lg V)$ med binærhaug som prioritetskø", "Ikke-negative kantvekter, og $\\Theta(VE)$ med binærhaug som prioritetskø", "At grafen er asyklisk, og $\\Theta(V+E)$ med binærhaug som prioritetskø"],
      explanation: "En node som er tatt ut av køen, regnes som ferdig, og med en negativ kant kan avstanden dens fortsatt bli mindre etterpå. Alternativet som sier at det ikke er noe krav til vektene, beskriver `Bellman-Ford`, som tåler negative kanter og koster $\\Theta(VE)$.",
    },
    {
      question: "Hvordan er kapasiteten til et snitt $(S,T)$ i et flytnett definert?",
      options: ["Summen av $c(u,v)$ over alle kanter med $u \\in S$ og $v \\in T$", "Summen av $c(u,v)$ over alle kanter mellom $S$ og $T$, i begge retninger", "Summen av $c(u,v)$ over kanter fra $S$ til $T$, minus kantene fra $T$ til $S$", "Summen av $c(u,v)$ over alle kanter som starter i en node som ligger i $S$"],
      explanation: "Bare de framoverrettede kantene teller, og de teller med full kapasitet uansett hvor mye flyt som går i dem. Alternativet som trekker fra tilbakekantene, beskriver nettoflyten over snittet — den er lik flytverdien, ikke lik kapasiteten.",
    },
    {
      question: "Hva sier heltallsteoremet for maksimal flyt?",
      options: ["Er alle kapasitetene heltall, finnes det en maksimal flyt med heltallig flyt på hver kant", "Er alle kapasitetene heltall, har hver maksimal flyt heltallig flyt på hver kant", "Er alle kapasitetene heltall, kjører `Ford-Fulkerson` i polynomisk tid i antall bits", "Er alle kapasitetene heltall, er den maksimale flyten entydig bestemt av nettet"],
      explanation: "Teoremet garanterer at én slik heltallig maksimal flyt finnes, og at `Ford-Fulkerson` finner en av dem — det er dette som gjør at flytmodeller kan brukes på tilordninger av hele personer. Alternativet som sier at hver maksimal flyt er heltallig, går for langt: med flere maksimale flyter kan andre av dem godt ha brøkverdier.",
    },
    {
      question: "Hvorfor kalles `Ford-Fulkerson` pseudopolynomisk?",
      options: ["Kjøretiden avhenger av kapasitetenes tallverdi, ikke bare av antall bits i inputen", "Kjøretiden avhenger av hvor mange noder og kanter nettet har, ikke av kapasitetene", "Kjøretiden er polynomisk bare når nettet er bipartitt og kapasitetene er $1$", "Kjøretiden er polynomisk i teorien, men algoritmen er umulig å implementere raskt"],
      explanation: "Hver forøkende sti øker flyten med minst $1$, så antallet iterasjoner kan bli så stort som selve flytverdien, og den kan skrives med få bits. At dette er dyrt, sier ingenting om at problemet er vanskelig — `Edmonds-Karp` løser samme problem i $O(VE^2)$, så maksimal flyt ligger i P.",
    },
    {
      question: "Hva betyr $A \\le_p B$?",
      options: ["At $A$ reduseres til $B$, og at $B$ dermed er minst like vanskelig som $A$", "At $A$ reduseres til $B$, og at $A$ dermed er minst like vanskelig som $B$", "At $B$ reduseres til $A$, og at $B$ dermed er minst like vanskelig som $A$", "At $A$ og $B$ reduseres til hverandre, og altså er nøyaktig like vanskelige"],
      explanation: "Har du en polynomisk algoritme for $B$, får du en for $A$ ved å oversette først, så $B$ kan ikke være lettere enn $A$. Alternativet som snur konklusjonen, er nettopp den reverserte reduksjonsretningen: å redusere sitt eget problem TIL et NP-komplett problem beviser ingenting om at ens eget problem er vanskelig.",
    },
    {
      question: "Du har en korrekt polynomisk reduksjon fra 3-CNF-SAT til problemet $X$. Hva har du vist?",
      options: ["At $X$ er NP-hardt, men ikke at $X$ ligger i NP", "At $X$ er NP-komplett, siden 3-CNF-SAT selv er NP-komplett", "At $X$ ligger i NP, men ikke at $X$ er NP-hardt", "At $X$ kan løses i polynomisk tid dersom 3-CNF-SAT kan det"],
      explanation: "Retningen fra et kjent NP-hardt problem til $X$ gir en nedre grense på vanskeligheten, og NP-hardhet er nettopp det. Alternativet som konkluderer med NP-komplett, hopper over det andre kravet: at $X$ selv ligger i NP, altså har et sertifikat som kan verifiseres i polynomisk tid.",
    },
    {
      question: "Hva vil det si at et avgjørelsesproblem ligger i NP?",
      options: ["At et sertifikat av polynomisk størrelse kan verifiseres i polynomisk tid", "At problemet ikke kan løses i polynomisk tid, men bare i eksponentiell tid", "At problemet kan løses i polynomisk tid av en algoritme som trekker tilfeldig", "At ethvert annet problem i klassen kan reduseres til det i polynomisk tid"],
      explanation: "NP handler om å kontrollere et framlagt ja-svar raskt, ikke om å finne det. Alternativet som sier at problemet ikke kan løses i polynomisk tid, gjør en vanlig forveksling: alt i P ligger også i NP, for da kan du bare regne ut svaret og ignorere sertifikatet.",
    },
    {
      question: "Hvilken påstand om `Gale-Shapley` stemmer?",
      options: ["Den terminerer alltid og gir alltid en stabil matching, men matchingen er ikke nødvendigvis entydig", "Den terminerer alltid og gir alltid den entydige stabile matchingen for de gitte preferansene", "Den terminerer alltid, men gir bare en stabil matching når begge sider har like preferanselister", "Den kan i uheldige tilfeller løpe evig, og gir da ingen matching i det hele tatt"],
      explanation: "Algoritmen er frier-optimal: siden som frir, får sitt beste mulige stabile utfall, og den andre siden sitt dårligste — så orienteringen kan gi to forskjellige, begge stabile, matchinger. Alternativet som kaller matchingen entydig, overser nettopp dette, og det er derfor svaret må oppgi hvilken side som fridde.",
    },
    {
      question: "Hva koster det å rekonstruere selve løsningen fra en fylt DP-tabell, i forhold til å regne ut bare optimalverdien?",
      options: ["Ingenting asymptotisk, når hvert delproblem lagrer valget som ga optimum", "En faktor $n$ ekstra, siden tabellen må gjennomløpes på nytt for hvert steg", "Ingenting i det hele tatt, siden løsningen alltid kan leses rett av tabellen", "En faktor $\\lg n$ ekstra, siden valgene må sorteres før de kan settes sammen"],
      explanation: "Lagres valget underveis, går tilbakesporingen ett steg per beslutning og koster lineær tid i antall delproblemer, som forsvinner i kjøretiden for å fylle tabellen. Alternativet som sier at det ikke koster noe i det hele tatt, hopper over at valgene faktisk må lagres — uten dem må hvert steg regnes ut på nytt.",
    },
    {
      question: "En algoritme har kjøretidsfunksjonen $f(n) = 6n\\lg n + 3n^2 + 250$. Hva er det strammeste asymptotiske uttrykket?",
      options: ["$\\Theta(n^2)$, siden det kvadratiske leddet dominerer de to andre", "$O(n^2)$, siden det kvadratiske leddet gir en øvre grense for veksten", "$\\Theta(n\\lg n)$, siden $n\\lg n$ er det leddet som står først i uttrykket", "$\\Theta(3n^2)$, siden konstanten foran det dominerende leddet skal med"],
      explanation: "Både $6n\\lg n$ og konstantleddet vokser saktere enn $n^2$, og forholdet $f(n)/n^2$ nærmer seg $3$, så grensen er tett i begge retninger. Alternativet som oppgir $O(n^2)$, er sant, men ikke strammest — når en tett grense finnes, er $\\Theta$ svaret oppgaven ber om.",
    },
  ],
  'tdt4120-8-4': [
    {
      question: "Hva er det strammeste $\\Theta$-uttrykket for $f(n) = 5n^2\\lg n + \\dfrac{n^3}{\\lg n} + 9n^2\\sqrt{n}$?",
      options: ["$\\Theta\\!\\left(\\dfrac{n^3}{\\lg n}\\right)$", "$\\Theta(n^3)$ — logaritmen i nevneren strykes", "$\\Theta(n^2\\lg n)$ — det første leddet dominerer", "$\\Theta\\!\\left(n^{2{,}5}\\right)$ — det siste leddet dominerer"],
      explanation: "De tre leddene har vekstklassene $n^2\\lg n$, $n^3/\\lg n$ og $n^{2{,}5}$, og midterste vinner: $n^3/\\lg n$ vokser raskere enn $n^{2{,}5}$ fordi $n^{0{,}5}$ passerer $\\lg n$. Å svare $\\Theta(n^3)$ stryker logaritmen i nevneren, og den lar seg ikke stryke — $n^3/\\lg n$ vokser strengt saktere enn $n^3$.",
    },
    {
      question: "Ranger $(\\lg n)^5$, $n^{\\lg 5}$, $5^{\\lg n}$, $n^5$ og $2^{5n}$ etter voksende vekst. Hvilken kjede er riktig?",
      options: ["$(\\lg n)^5 < n^{\\lg 5} = 5^{\\lg n} < n^5 < 2^{5n}$", "$(\\lg n)^5 < n^{\\lg 5} < 5^{\\lg n} < n^5 < 2^{5n}$", "$(\\lg n)^5 < 5^{\\lg n} < n^{\\lg 5} < 2^{5n} < n^5$", "$n^{\\lg 5} < (\\lg n)^5 < 5^{\\lg n} < n^5 < 2^{5n}$"],
      explanation: "$n^{\\lg 5}$ og $5^{\\lg n}$ er samme funksjon skrevet på to måter — tar du toerlogaritmen av begge, får du $\\lg 5 \\cdot \\lg n$ — og $\\lg 5 \\approx 2{,}32$, så begge ligger mellom $(\\lg n)^5$ og $n^5$. $2^{5n}$ er den eneste ekte eksponentielle og vokser raskest. Oppgaven ber uttrykkelig om at likheten markeres.",
    },
    {
      question: "Løs $T(1) = 1$, $T(n) = T(n-1) + 4n - 3$ ved iterasjon. Hva er det **eksakte** uttrykket for $T(n)$?",
      options: ["$2n^2 - n$", "$2n^2 + n$", "$4n^2 - 3n$", "$\\Theta(n^2)$"],
      explanation: "Utfoldet blir $T(n) = 1 + \\sum_{k=2}^{n}(4k-3) = 1 + 4\\left(\\tfrac{n(n+1)}{2} - 1\\right) - 3(n-1) = 2n^2 - n$, og kontrollen $T(1) = 1$ og $T(2) = 6$ stemmer. $\\Theta(n^2)$ er sant, men oppgaven ba om et eksakt uttrykk — et asymptotisk svar er å svare på et annet spørsmål enn det som ble stilt.",
    },
    {
      question: "Arrayet $A[1..n]$ er allerede sortert stigende. Hva er kjøretiden til `Insertion-Sort`, `Merge-Sort` og `Heapsort` på nettopp dette arrayet?",
      options: ["$\\Theta(n)$, $\\Theta(n\\lg n)$ og $\\Theta(n\\lg n)$", "$\\Theta(n)$, $\\Theta(n)$ og $\\Theta(n)$", "$\\Theta(n^2)$, $\\Theta(n\\lg n)$ og $\\Theta(n\\lg n)$", "$\\Theta(n)$, $\\Theta(n\\lg n)$ og $\\Theta(n)$"],
      explanation: "`Insertion-Sort` er den eneste av de tre som utnytter at inputen er sortert: hvert element sammenlignes én gang og flyttes ikke. `Merge-Sort` deler og fletter uansett innhold, og `Heapsort` bygger haug og trekker ut $n$ ganger uansett — ingen input gjør dem raskere, og derfor er begge grensene tette.",
    },
    {
      question: "Hvorfor er `Counting-Sort` ikke i strid med den nedre grensen $\\Omega(n\\lg n)$ for sortering?",
      options: ["Fordi den bruker nøkkelverdien direkte som indeks og aldri sammenligner to nøkler med hverandre", "Fordi grensen $\\Omega(n\\lg n)$ bare gjelder når nøklene er reelle tall og ikke heltall", "Fordi den er $\\Theta(n+k)$, og $\\Theta(n+k)$ er større enn $\\Theta(n\\lg n)$ når $k$ er stor nok", "Fordi grensen gjelder verste tilfelle, mens `Counting-Sort` bare er rask i beste tilfelle"],
      explanation: "Den nedre grensen gjelder **sammenligningsbaserte** sorteringer, og mekanismen — indeksering i en telletabell framfor sammenligning — er nettopp det svaret må peke på. At $\\Theta(n+k)$ kan være stort, er sant, men det er ikke begrunnelsen: `Counting-Sort` er lineær i $n$ bare når $k = O(n)$, og det er en annen observasjon. Og grensen gjelder også for heltallsnøkler når de bare sammenlignes.",
    },
    {
      question: "Du kjører `Build-Max-Heap` på $A[1..8] = \\langle 4,\\ 13,\\ 7,\\ 2,\\ 19,\\ 6,\\ 11,\\ 5 \\rangle$. Hva blir arrayet?",
      options: ["$\\langle 19,\\ 13,\\ 11,\\ 5,\\ 4,\\ 6,\\ 7,\\ 2 \\rangle$", "$\\langle 19,\\ 13,\\ 11,\\ 7,\\ 6,\\ 5,\\ 4,\\ 2 \\rangle$", "$\\langle 19,\\ 13,\\ 11,\\ 5,\\ 4,\\ 7,\\ 6,\\ 2 \\rangle$", "$\\langle 19,\\ 4,\\ 11,\\ 5,\\ 13,\\ 6,\\ 7,\\ 2 \\rangle$"],
      explanation: "Løkka går fra $i = 4$ ned til 1: 2 bytter med 5, 7 bytter med 11, 13 bytter med 19, og til slutt siver 4 fra rota ned via posisjon 2 til posisjon 5. Det synkende sorterte arrayet er en felle — en maks-haug er ikke sortert. Svaret der 4 blir stående i $A[2]$, stopper `Max-Heapify` etter ett bytte i stedet for å la elementet sive videre.",
    },
    {
      question: "Nøklene $52,\\ 31,\\ 74,\\ 18,\\ 44,\\ 63,\\ 88,\\ 27,\\ 39,\\ 70$ settes inn i den rekkefølgen med `Tree-Insert`. Hvilken nøkkel er forelder til 39?",
      options: ["44", "31", "27", "18"],
      explanation: "39 sammenlignes med 52 (til venstre), med 31 (til høyre) og med 44 (til venstre) — der er venstre barn ledig, og 39 henges på 44. Nøkkelen 27 ligger i en helt annen gren: den gikk til venstre for 31 og deretter til høyre for 18.",
    },
    {
      question: "En FIFO-kø ligger i $Q[1..7]$ med wraparound. Hva skjer med `Q.tail` etter en `Enqueue` når `Q.tail` var 7?",
      options: ["Verdien skrives til $Q[7]$, og `Q.tail` settes til 1", "Verdien skrives til $Q[1]$, og `Q.tail` settes til 2", "Køen er full, og `Enqueue` avvises uten å skrive noe", "Verdien skrives til $Q[7]$, og `Q.tail` settes til 8"],
      explanation: "`Enqueue` skriver først til cellen `Q.tail` peker på, og flytter deretter pekeren — og når pekeren er på siste plass, hopper den tilbake til 1. Å skrive til $Q[1]$ med én gang hopper over cellen som faktisk sto for tur. Merk også at `Dequeue` ikke sletter noe: den døde verdien blir stående i cellen og skal være med i svaret.",
    },
    {
      question: "Hva leverer du som svar på en `MST-Kruskal`-håndkjøring?",
      options: ["Kantene i den rekkefølgen de ble lagt til, med vekt, og totalvekten — og gjerne hvilke kanter som ble forkastet", "Bare totalvekten av det minimale spenntreet, siden det er den eneste entydige størrelsen i svaret", "Hele den sorterte kantlista, siden det er den som viser at algoritmen ble kjørt riktig fra start", "Komponentstrukturen etter hvert eneste steg, altså hvilke noder som ligger i hvilken mengde til enhver tid"],
      explanation: "Sluttilstanden er kantmengden med rekkefølge og totalvekt; forkastede kanter dokumenterer sykeltestene og gir delpoeng. Den sorterte kantlista og komponenttavlen er arbeidsverktøy underveis — de hører hjemme på kladden, ikke i svaret. Totalvekten alene svarer bare på halve spørsmålet.",
    },
    {
      question: "I `Floyd-Warshall`: hvordan oppdateres forgjengeren $\\pi^{(k)}_{ij}$ når veien via $k$ er kortere?",
      options: ["Den arves fra $\\pi^{(k-1)}_{kj}$, altså fra **raden til $k$** — ikke fra $k$ selv", "Den settes til $k$ selv, siden det er nettopp den noden veien nå går gjennom på vei fra $i$ til $j$", "Den arves fra $\\pi^{(k-1)}_{ik}$, altså fra kolonnen som fører inn til $k$", "Den settes til NIL og fylles inn på nytt i den avsluttende gjennomgangen"],
      explanation: "Forgjengeren til $j$ på veien fra $i$ er den siste noden **før** $j$, og den finner du i den delen av veien som går fra $k$ til $j$ — altså i rad $k$. Å sette $\\pi_{ij} = k$ ville pekt på en node midt på veien, ikke på den siste før $j$, og gir feil sti når den leses ut.",
    },
    {
      question: "Hvordan definerer du et minimalt spenntre i et kortsvar?",
      options: ["Et spenntre for $G$ med minst mulig samlet kantvekt — altså en syklusfri kantmengde som når alle nodene", "Et spenntre for $G$ der hver enkelt kant er den letteste kanten ut av noden sin", "Den letteste stien mellom hvert par av noder i $G$, samlet i én felles kantmengde", "Et spenntre for $G$ med færrest mulig kanter, siden færre kanter i treet også gir lavere samlet vekt"],
      explanation: "Definisjonen er «spenntre» pluss «minst mulig totalvekt», og hovedpoenget skal stå i første setning. Å kreve at hver kant er lettest ut av sin node, er en lokal betingelse som verken er nødvendig eller tilstrekkelig. Og antall kanter er alltid $V-1$ i et spenntre, så det kan ikke minimeres.",
    },
    {
      question: "VAKTPOST er et nytt problem, og du skal vise at det er NP-hardt ved hjelp av `VERTEX-COVER`. Hvilken vei går reduksjonen?",
      options: ["Fra `VERTEX-COVER` til VAKTPOST — en vilkårlig `VERTEX-COVER`-instans skrives om til en VAKTPOST-instans", "Fra VAKTPOST til `VERTEX-COVER` — VAKTPOST-instansen skrives om til en tilsvarende `VERTEX-COVER`-instans", "Begge veier — du må vise at de to problemene er polynomisk ekvivalente med hverandre", "Fra `VERTEX-COVER` til VAKTPOST, men bare for de instansene der grafen er sammenhengende"],
      explanation: "Du reduserer FRA det kjente vanskelige TIL ditt eget problem, altså `VERTEX-COVER` $\\le_p$ VAKTPOST — da arver VAKTPOST hardheten. Motsatt vei viser bare at VAKTPOST ikke er verre enn `VERTEX-COVER`. Reduksjonen må dessuten dekke **alle** instanser av kildeproblemet; en begrensning til sammenhengende grafer ville gjort argumentet ugyldig.",
    },
    {
      question: "En vaktplan der hver vakt skal dekkes av nøyaktig én kvalifisert person, modelleres som maksimal flyt. Hvilke kapasiteter setter du?",
      options: ["1 fra $s$ til hver person, 1 på hver person–vakt-kant, og 1 fra hver vakt videre til $t$", "$\\infty$ fra $s$ til hver person, 1 på hver person–vakt-kant, og $\\infty$ fra hver vakt til $t$", "1 fra $s$ til hver person, $\\infty$ på hver person–vakt-kant, og 1 fra hver vakt til $t$", "Antall vakter fra $s$ til hver person, 1 på hver person–vakt-kant, og antall personer fra hver vakt til $t$"],
      explanation: "Kapasitet 1 ut av kilden begrenser hver person til én vakt, og kapasitet 1 inn i sluket begrenser hver vakt til én person — det er nettopp de to begrensningene oppgaven stiller. Heltallsteoremet garanterer så at en maksimal flyt kan velges heltallig, slik at hver kant er brukt eller ikke, og modellen leses direkte som en tilordning.",
    },
    {
      question: "Et lag kan ta ett oppdrag per dag, men må hvile dagen etter et oppdrag. Verdien for dag $i$ er $v_i$. Hvilken rekurrens gir den største samlede verdien?",
      options: ["$OPT(i) = \\max(OPT(i-1),\\ OPT(i-2) + v_i)$, med $OPT(0) = 0$ og $OPT(1) = v_1$", "$OPT(i) = \\max(OPT(i-1) + v_i,\\ OPT(i-2))$, med $OPT(0) = 0$ og $OPT(1) = v_1$", "$OPT(i) = OPT(i-1) + OPT(i-2) + v_i$, med $OPT(0) = 0$ og $OPT(1) = v_1$", "$OPT(i) = \\max(OPT(i-1),\\ OPT(i-2)) + v_i$, med $OPT(0) = 0$ og $OPT(1) = v_1$"],
      explanation: "Enten hviler laget på dag $i$, og da er verdien $OPT(i-1)$; eller så tas oppdraget, og da må dag $i-1$ stå ubrukt, slik at resten er $OPT(i-2) + v_i$. Varianten som legger $v_i$ til begge grenene, får med verdien selv når dagen ikke brukes. Begge grunntilfellene må stå — uten dem er rekurrensen ikke definert.",
    },
    {
      question: "Hvorfor duger ikke en grådig regel «ta alltid den høyeste gjenværende verdien» på oppdragsplanen?",
      options: ["Fordi et høyt valg sperrer naboene: på $v = \\langle 4, 9, 8, 1 \\rangle$ gir regelen 10, mens dag 1 og dag 3 gir 12", "Fordi grådighet aldri kan brukes når verdiene er heltall som kan være like store som hverandre", "Fordi den grådige regelen krever at verdiene sorteres først, og sorteringen alene koster $\\Theta(n\\lg n)$", "Fordi problemet er NP-hardt, og ingen polynomisk regel kan derfor gi riktig svar på det i det hele tatt"],
      explanation: "Regelen tar dag 2 med verdi 9, og det sperrer både dag 1 og dag 3 — den ender på dag 2 og dag 4, altså 10, mens det optimale er dag 1 og dag 3 med 12. Ett moteksempel er nok til å forkaste en grådig regel. Problemet er slett ikke NP-hardt: dynamisk programmering løser det på $\\Theta(n)$ tid.",
    },
    {
      question: "En oppgave ber om korteste vei i en **uvektet** graf. Hvilken algoritme er det riktige svaret, og hva er kjøretiden?",
      options: ["`BFS` fra startnoden; $\\Theta(V+E)$", "`Dijkstra` med binærhaug; $O(E\\lg V)$", "`Bellman-Ford` fra startnoden; $\\Theta(VE)$", "`DFS` fra startnoden; $\\Theta(V+E)$"],
      explanation: "Er alle kantene like tunge, er færrest kanter det samme som lavest samlet vekt, og `BFS` gir nettopp færrest kanter i lineær tid. `Dijkstra` og `Bellman-Ford` gir riktig svar, men er unødvendig trege — å velge dem er ikke galt, men det er ikke det svaret oppgaven er ute etter. `DFS` finner ingen korteste vei i det hele tatt.",
    },
  ],
  'tdt4120-8-5': [
    {
      question: "Hva er det strammeste $\\Theta$-uttrykket for $7n^2\\lg^3 n + 4n^{5/2} + n^3/\\lg^2 n$?",
      options: ["$\\Theta(n^3/\\lg^2 n)$", "$\\Theta(n^3)$", "$\\Theta(n^{5/2})$", "$\\Theta(n^2\\lg^3 n)$"],
      explanation: "Både $n^2\\lg^3 n$ og $n^{5/2}$ er dominert av $n^3/\\lg^2 n$, siden enhver potens av $\\lg n$ taper mot enhver positiv potens av $n$. $\\Theta(n^3)$ er direkte galt: $n^3/\\lg^2 n$ er strengt mindre enn $n^3$, og å oppgi en løsere grense enn du kan gi, er felle #4.",
    },
    {
      question: "Hvilke to av disse vokser like fort: $n^{\\lg 3}$, $3^{\\lg n}$, $n\\lg^2 n$, $2^{\\sqrt n}$?",
      options: ["$n^{\\lg 3}$ og $3^{\\lg n}$ — de er samme funksjon skrevet på to måter", "$n\\lg^2 n$ og $n^{\\lg 3}$ — begge er polynomiske av grad under 2 i variabelen $n$", "$3^{\\lg n}$ og $2^{\\sqrt n}$ — begge er eksponentialfunksjoner", "$n\\lg^2 n$ og $2^{\\sqrt n}$ — begge vokser langsommere enn $n^2$"],
      explanation: "Omskrivingen $3^{\\lg n} = 2^{\\lg 3 \\cdot \\lg n} = n^{\\lg 3}$ viser at de er identiske. Regelen $a^{\\lg n} = n^{\\lg a}$ er verdt å kunne kaldt — den kommer igjen i rangeringsoppgaver.",
    },
    {
      question: "Du kjører `Insertion-Sort` og deretter `Merge-Sort`. Hva er total kjøretid i verste tilfelle?",
      options: ["$\\Theta(n^2)$ — det første steget alene kan koste så mye", "$\\Theta(n\\lg n)$ — det siste steget dominerer og er tett begge veier", "$\\Theta(n)$ — arrayet er nesten sortert når `Merge-Sort` starter", "$\\Theta(n^2\\lg n)$ — de to kjøretidene ganges sammen"],
      explanation: "To steg etter hverandre legges sammen, og $\\Theta(n^2) + \\Theta(n\\lg n)$ domineres av det kvadratiske leddet. `Merge-Sort` blir ikke raskere av at inputen er pen — det er `Insertion-Sort` som er den inputfølsomme, og derfor skal den kjøres sist.",
    },
    {
      question: "Hva er verste-tilfelle-kjøretiden til `Randomized-Select`, og er grensen tett?",
      options: ["$\\Theta(n^2)$, og grensen er tett", "$\\Theta(n)$, og grensen er tett", "$O(n\\lg n)$, og grensen er bare øvre", "$\\Theta(n\\lg n)$, og grensen er tett"],
      explanation: "Med maksimalt skjeve pivotvalg blir rekurrensen $T(n) = T(n-1) + \\Theta(n)$, altså kvadratisk. $\\Theta(n)$ er **forventet** kjøretid — å oppgi den som verste tilfelle er felle #9 i sin vanligste form.",
    },
    {
      question: "Hva er svarformatet når en oppgave ber om «maksimal flytverdi og et min-snitt»?",
      options: ["Begge deler — flytverdien og snittet med de kryssende kantene", "Bare flytverdien, siden snittkapasiteten alltid er lik den", "Bare snittet, siden flytverdien kan leses ut av det", "Hele flyttabellen med $f/c$ for hver eneste kant i nettet"],
      explanation: "Er begge etterspurt, teller begge — og snittet koster ingenting ekstra, siden det leses av med én `BFS` i det siste restnettet. At tallene er like, er dessuten kontrollen på at kjøringen er ferdig.",
    },
    {
      question: "Du har vist 3-CNF-SAT $\\le_p$ RUTEPLAN. Hva mangler for at RUTEPLAN skal være NP-komplett?",
      options: ["Medlemskapsdelen — at RUTEPLAN ligger i NP, vist med et sertifikat", "Hardhetsdelen — at alle problemene i NP kan reduseres polynomisk til RUTEPLAN", "En reduksjon den motsatte veien, altså RUTEPLAN $\\le_p$ 3-CNF-SAT", "En polynomisk algoritme for RUTEPLAN, som viser at det er løsbart"],
      explanation: "Reduksjonen har allerede gitt hardheten; det som gjenstår, er et sertifikat som kan kontrolleres i polynomisk tid. En reduksjon den motsatte veien ville også vist medlemskap, men sertifikatet er som regel den enkleste veien.",
    },
    {
      question: "«LAGERFLYT $\\le_p$ SUBSET-SUM, og SUBSET-SUM er NP-komplett, altså er LAGERFLYT NP-hardt.» Hva er galt?",
      options: ["Retningen — den viser bare at LAGERFLYT ligger i NP, ikke at det er hardt", "Ingenting — argumentet er korrekt slik det står", "At oversettelsen må være lineær og ikke bare polynomisk for i det hele tatt å telle", "At SUBSET-SUM ikke er NP-komplett, men bare NP-hardt"],
      explanation: "Pilen peker mot det som er minst like vanskelig, og her er det SUBSET-SUM — så LAGERFLYT arver ingen hardhet. Hvert eneste problem i NP kan reduseres til et NPC-problem, så retningen skiller ingenting; dette er felle #1.",
    },
    {
      question: "Noen finner en $O(n^7)$-algoritme for VERTEX-COVER. Hva følger?",
      options: ["$P = NP$, siden VERTEX-COVER er NP-komplett", "$P \\ne NP$, siden ett problem da skiller seg fra de andre", "At VERTEX-COVER ikke var NP-komplett likevel", "Ingenting — $O(n^7)$ er for tregt til å regnes som polynomisk"],
      explanation: "Ethvert $A \\in NP$ kan reduseres til VERTEX-COVER i polynomisk tid, og sammensetningen av to polynomiske algoritmer er polynomisk. $O(n^7)$ er polynomisk — konstanten i eksponenten spiller ingen rolle for klassifiseringen.",
    },
    {
      question: "I et flytnett skal hvert vaktdøgn dekkes av **to** leger. Hva er måltallet for maksimal flyt?",
      options: ["$2m$, der $m$ er antall vaktdøgn", "$m$, der $m$ er antall vaktdøgn", "$4n$, der $n$ er antall leger som kan ta høyst fire vakter", "$n + m$, altså summen av leger og vaktdøgn i nettet"],
      explanation: "Hver slukkant har kapasitet 2, og alle døgnene er dekket nøyaktig når alle slukkantene er mettet. $4n$ er den øvre grensen kildesiden setter — er $2m > 4n$, er svaret nei uten at algoritmen behøver å kjøre.",
    },
    {
      question: "Hvorfor må midtkanten lege–døgn ha kapasitet 1 og ikke 2 i vaktlisteoppgaven?",
      options: ["Ellers kunne samme lege dekket begge vaktene på ett døgn", "Ellers ville kjøretiden til `Edmonds-Karp` doble seg", "Ellers ville heltallsteoremet ikke lenger gjelde for nettet", "Ellers ville min-snittet bli umulig å lese av til slutt"],
      explanation: "Kapasiteten på midtkanten begrenser hvor mye én bestemt lege kan bidra på ett bestemt døgn, og to vakter fra samme person er ikke en gyldig vaktliste. Heltallsteoremet gjelder for enhver heltallig kapasitet — det er ikke der problemet ligger.",
    },
    {
      question: "Hvorfor trengs nodesplitting i brannbelte-oppgaven?",
      options: ["Fordi kostnaden ligger på **ruter**, mens snittkapasitet bare kan ligge på kanter", "Fordi rutenettet ellers ville inneholde sykler som ødelegger for maks-flyt", "Fordi superkilden og supersluket ellers ikke kan kobles til flere ruter", "Fordi `Edmonds-Karp` ellers ikke kan kjøres på en urettet graf"],
      explanation: "Etter splittingen må all flyt gjennom en rute passere den indre kanten, så kapasiteten der **er** rutens ryddekostnad. Uten splittingen ville snittet plukket ut overganger mellom ruter i stedet for rutene selv.",
    },
    {
      question: "Hva må du argumentere for i oppgaven om korteste vei med flest mellomstasjoner?",
      options: ["At korteste-vei-grafen er syklusfri, siden $d$ vokser strengt langs hver kant", "At `Dijkstra` gir riktig svar også i de tilfellene der noen kjøretider er negative", "At lengste vei kan løses i polynomisk tid i enhver rettet graf", "At antall korteste veier fra $s$ til $t$ er polynomisk i antall noder"],
      explanation: "Lengste vei er NP-hardt i en generell graf, så hele løsningen hviler på at $G'$ er en DAG — og det følger av at alle kjøretidene er positive. Var noen kjøretider null, kunne $G'$ inneholdt sykler, og argumentet ville falt.",
    },
    {
      question: "Hvorfor kjører du `Gale-Shapley` i **begge** orienteringer for å svare på «kan disse to bli paret?»",
      options: ["Fordi de to kjøringene rammer inn hva hver part kan få i en stabil matching", "Fordi én enkelt kjøring kan gi en ustabil matching hvis rekkefølgen tilfeldigvis er uheldig", "Fordi algoritmen ellers ikke terminerer når preferansene er motstridende", "Fordi kjøretiden halveres når begge sidene frir samtidig i nettet"],
      explanation: "Den frier-optimale kjøringen gir hver frier sitt beste stabile utfall og den mottaker-optimale hennes dårligste, så alt mulig ligger mellom dem på listen. Én kjøring gir bare **én** av flere mulige stabile matchinger og kan derfor ikke besvare spørsmålet.",
    },
    {
      question: "Hva er den vanligste grunnen til at en ellers riktig designbesvarelse havner i midtsjiktet?",
      options: ["At rekonstruksjonen av selve løsningen mangler", "At kjøretiden er oppgitt med $O$ i stedet for $\\Theta$", "At pseudokoden ikke er skrevet ut i sin helhet", "At korrektheten ikke er bevist formelt for algoritmen"],
      explanation: "Oppgaven ber om en plan, en fordeling eller en inndeling, og et svar som stopper ved optimalverdien, er felle #6 — det er ett helt ledd av fem. Full pseudokode og formelt korrekthetsbevis er ikke etterspurt i sjanger H, og ville dessuten sprengt tidsbudsjettet.",
    },
    {
      question: "Hva betyr «kjøretid i problemets egne størrelser» i et designsvar?",
      options: ["At du sier hva $V$ og $E$ er i **din** konstruksjon, ikke bare skriver $O(VE^2)$", "At du oppgir kjøretiden i sekunder for en typisk instans av det aktuelle problemet", "At du bruker $n$ og $m$ i stedet for $V$ og $E$ i alle uttrykk", "At du oppgir både beste, verste og forventet kjøretid for algoritmen"],
      explanation: "«$O(VE^2)$ med $V = n+m+2$ og $E = O(n+m+k)$» lar den som retter, se at konstruksjonen din faktisk gir grensen. Uten den linjen er kjøretidsleddet bare halvveis besvart, og den koster under ti sekunder å skrive.",
    },
    {
      question: "Hvor mange oppgaver i dette settet er åpne designoppgaver eller NP-argumenter?",
      options: ["Åtte — fem designoppgaver og tre reduksjons- og NP-argumenter", "Fem — bare de åpne designoppgavene helt til slutt i settet", "Tre — bare reduksjons- og NP-argumentene midt i settet", "Tolv — alle oppgavene fra og med håndkjøringene og utover i hele resten av settet"],
      explanation: "Settet er bevisst designtungt: åtte av tjue oppgaver krever at du selv velger verktøyet, mot rundt fem i et typisk sett. Det er nettopp der A- og B-karakteren avgjøres, og det er derfor tempoet på grunnoppgavene betyr så mye.",
    },
  ],
};

export default quizData_tdt4120;
