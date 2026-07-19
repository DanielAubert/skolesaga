import type { QuizQuestion } from './quiz-data';

const quizData_mat1110: Record<string, QuizQuestion[]> = {
  'mat1110-0-1': [
    {
      question: "Hvordan settes karakteren i MAT1110?",
      options: ["To skriftlige prøver: midtsemester og avsluttende del", "Én stor avsluttende skriftlig eksamen ved semesterslutt", "Løpende mappevurdering av alle innleveringene i emnet", "En skriftlig prøve fulgt av en muntlig utspørring til slutt"],
      explanation: "Vurderingen består av en midtsemesterprøve uten hjelpemidler (teller 1/3) og en avsluttende langsvarsprøve med kalkulator og formelsamling (teller 2/3). To obligatoriske innleveringer må dessuten være godkjent for å gå opp.",
    },
    {
      question: "Hva var kjernen i regimeskiftet 2025?",
      options: ["Egenverdier og potensrekker ut, 3D-vektoranalyse inn", "Lineær algebra ut, og ren flervariabel kalkulus inn", "Skriftlig eksamen ble erstattet av muntlig utspørring", "Formelsamlingen ble fjernet fra den avsluttende prøven"],
      explanation: "Alle tre V2025-settene droppet egenverdier og potensrekker fullstendig og innførte tung 3D-vektoranalyse (fluks, Gauss' divergensteorem, og Stokes på konte), med funksjonsteoremene som fast åpning.",
    },
    {
      question: "Hvilket tema er pensumets mest stabile, med rundt 95 % forekomst?",
      options: ["Dobbeltintegral over et kurveavgrenset område", "Stokes' teorem for en krum flate i rommet", "Egenverdier og egenvektorer i Markov-kontekst", "Potensrekke med konvergensområde og lukket sum"],
      explanation: "Dobbeltintegral forekommer i 19 av 20 sett (95 %) og er praktisk talt garantert i begge regimer. Stokes er derimot ny og sjelden, mens egenverdier og potensrekker forsvant i V2025.",
    },
    {
      question: "Hvordan behandler boka egenverdier etter regimeskiftet?",
      options: ["Som beredskap: 70 % historisk, men 0/3 i V2025", "Som fjernet stoff som ikke lenger er del av pensum", "Som høyeste prioritet på hver eneste avsluttende prøve", "Som nytt tyngdepunkt sammen med all vektoranalyse"],
      explanation: "Egenverdier var 70 % historisk, men 0/3 i V2025 — den tydeligste markøren på regimeskiftet. Fordi det nye mønsteret bare hviler på ett årskull, holdes de varme som beredskap, ikke fjernet.",
    },
    {
      question: "Hvilken instruks går ordrett igjen i alle eksamenssett?",
      options: ["Begrunn alle svar, og vis nok mellomregninger", "Oppgi alle svarene som avrundede desimaltall", "Løs kun de oppgavene du er aller mest sikker på", "Bruk formelsamlingen aktivt på hvert eneste delpunkt"],
      explanation: "Sensorregelen «du må begrunne alle svar, og vise nok mellomregninger til at man lett kan følge argumentene» går igjen i alle sett. Ren fasit uten synlig vei dit gir få poeng.",
    },
    {
      question: "Hvorfor prioriterer boka vektoranalyse høyt tross lav historisk frekvens?",
      options: ["3/3 i V2025 veier tyngre for prognosen enn gamle sett", "Vektoranalyse er det enkleste temaet å regne seg raskt gjennom", "Formelsamlingen dekker alle vektoranalyse-formlene fullstendig", "Temaet gir nesten alltid en billig deloppgave (a) på eksamen"],
      explanation: "Fluks var 20 % og Gauss bare 5 % historisk, men begge var 3/3 i V2025. Det nyeste regimet veier tyngre for prognosen mot neste eksamen enn de mange gamle settene.",
    },
    {
      question: "Hvordan er den avsluttende eksamen bygget opp?",
      options: ["10 deloppgaver som teller likt, over 4 timer", "5 store oppgaver med svært ulik poengvekting", "3 adskilte deler med hver sin separate tidsfrist", "20 flervalgsspørsmål helt uten krav om utregning"],
      explanation: "Malen er 10 likt vektede deloppgaver over 4 timer — rundt 24 minutter per deloppgave — med kjedede delpunkter der senere svar bygger på tidligere.",
    },
    {
      question: "Hva bør du gjøre hvis et delpunkt bygger på et tidligere du ikke rakk?",
      options: ["Sett opp metoden riktig og bruk delsvaret som symbol", "Hopp over hele den oppgaven for å spare verdifull tid", "Gjett deg fram til et sluttsvar uten noen mellomregning", "Vent helt til slutt og ta oppgaven bare hvis tiden rekker"],
      explanation: "Uttelling gis for riktig metode og oppsett, ikke bare for sluttallet. Før metoden ferdig og skriv det manglende delsvaret som et symbol (for eksempel via divergensteoremet).",
    },
    {
      question: "Hva mangler i V2022-utgaven av den utdelte formelsamlingen?",
      options: ["Divergensteoremet og Stokes' teorem", "Egenverdibetingelsen og Hesse-testen", "Lagranges metode og linjeintegralene", "Lineariseringen og Jacobideterminanten"],
      explanation: "Nettopp de to teoremene det nye regimet lener seg på — Gauss' divergensteorem og Stokes' teorem — mangler i V2022-utgaven og må derfor kunnes utenat. Sjekk om utgaven ditt kull får er utvidet.",
    },
    {
      question: "Hvilken karakter beskrives som god og helt vanlig?",
      options: ["C, som treffer de sikre delpunktene på hver oppgave", "A, som forutsetter en tilnærmet helt feilfri besvarelse", "E, som ligger like over stryk som laveste ståkarakter", "B, som krever nær full uttelling på alle sluttoppgavene"],
      explanation: "C er en god og vanlig karakter — den du får ved å treffe de sikre, mekaniske delpunktene. Realistisk mål er å sikre de forutsigbare poengene først og strekke seg oppover der tiden rekker, ikke å jage feilfrihet.",
    },
  ],
  'mat1110-1-1': [
    {
      question: "Hva betyr notasjonen $II-2I$ over et $\\sim$-tegn?",
      options: ["Rad 2 erstattes med rad 2 minus 2 ganger rad 1", "Rad 1 erstattes med rad 1 minus 2 ganger rad 2", "Rad 1 og rad 2 byttes om og begge skaleres med 2", "Rad 2 trekkes fra 2 ganger rad 1 og legges nederst"],
      explanation: "Den erstattede raden står først: $II-2I$ endrer rad 2 til (rad 2) $-2\\cdot$(rad 1). Rad 1 står urørt.",
    },
    {
      question: "Hvorfor skal hver radoperasjon merkes over $\\sim$-tegnet?",
      options: ["Sensor krever synlige mellomregninger for full uttelling her", "Det er ren pynt uten noen betydning for karakteren du får", "Fordi matrisens fortegn ellers snur ved hver operasjon", "For at radenes rekkefølge skal bevares helt til slutt"],
      explanation: "Alle sett har regelen «vis nok mellomregninger». Umerkede radoperasjoner er den vanligste føringsfeilen i sjanger A.",
    },
    {
      question: "Hvilken av de tre elementære radoperasjonene er IKKE tillatt?",
      options: ["Å gange en hel rad med tallet null underveis", "Å bytte om to hele rader i matrisen", "Å legge et multiplum av én rad til en annen rad", "Å gange en hel rad med tallet to underveis"],
      explanation: "Skalering krever et tall forskjellig fra null; ganger man med null, mister man informasjon og endrer løsningsmengden.",
    },
    {
      question: "Når er en matrise på trappeform?",
      options: ["Når hvert pivot står til høyre for pivotet i raden over", "Når alle elementer over hoveddiagonalen er lik null", "Når hver eneste søyle inneholder nøyaktig ett ettall", "Når summen av tallene i hver rad blir lik null"],
      explanation: "Trappeform: nullrader nederst, og pivotene forskyves strengt mot høyre nedover, med nuller under hvert pivot.",
    },
    {
      question: "Hva skiller redusert trappeform fra vanlig trappeform?",
      options: ["Pivotene er skalert til 1 og har nuller også over seg", "Radene er sortert etter størrelsen på pivotene sine", "Determinanten til matrisen er da alltid akkurat 1", "Den har alltid strengt færre rader enn antall søyler"],
      explanation: "Redusert trappeform (RREF) har pivot $=1$ og nuller både over og under hvert pivot; da leses løsningen direkte.",
    },
    {
      question: "Et pivot (ledende element) i en rad er:",
      options: ["det første tallet fra venstre som ikke er null", "det aller største tallet som finnes i raden", "alltid tallet som står på hoveddiagonalen", "gjennomsnittsverdien av alle tallene som står i raden"],
      explanation: "Pivotet er den første ikke-null-oppføringen fra venstre; søylen den står i, er en pivotsøyle.",
    },
    {
      question: "Hva kjennetegner en fri variabel?",
      options: ["Søylen dens mangler pivot, så den kan velges fritt", "Søylen dens har et pivot som er skalert til 1", "Den er alltid nødt til å bli lik null i løsningen", "Den står alltid aller først blant de ukjente"],
      explanation: "En variabel uten pivot i sin søyle er fri: den gis en parameter, og de bundne variablene uttrykkes ved den.",
    },
    {
      question: "En rad $[\\,0\\ 0\\ 0\\ |\\ 5\\,]$ i trappeformen betyr at systemet:",
      options: ["ikke har noen løsning (er inkonsistent)", "har uendelig mange forskjellige løsninger totalt", "har nøyaktig én entydig løsning", "må radreduseres helt på nytt igjen"],
      explanation: "Raden sier «$0=5$», en umulighet. Systemet er inkonsistent. Ingen løsning krever nettopp $[\\,0\\cdots0\\,|\\,k\\ne0\\,]$.",
    },
    {
      question: "En helnullrad $[\\,0\\ 0\\ 0\\ |\\ 0\\,]$ i et ellers konsistent system betyr:",
      options: ["at det finnes en fri variabel og uendelig mange løsninger", "at systemet ikke har noen som helst løsning i det hele tatt", "at løsningen alltid er helt entydig bestemt", "at det garantert har oppstått en regnefeil et sted"],
      explanation: "En nullrad er ingen motsigelse ($0=0$); den signaliserer en fri variabel og dermed uendelig mange løsninger.",
    },
    {
      question: "Hvordan skrives løsningsmengden når det finnes én fri variabel?",
      options: ["Som en partikulær løsning pluss parameter ganger retningsvektor", "Som ett enkelt tallpunkt uten noen parameter i det hele tatt", "Som en determinant regnet ut av koeffisientmatrisen alene", "Som produktet av alle pivotene i den reduserte trappeformen"],
      explanation: "Med én fri variabel er løsningen en linje: $p+t\\,v$. Å oppgi bare ett punkt er en klassisk feil.",
    },
    {
      question: "Hvor mange løsninger har alltid et homogent system $Ax=0$?",
      options: ["Minst én, siden $x=0$ alltid oppfyller systemet", "Ingen løsning i det hele tatt, uansett matrisen", "Nøyaktig to løsninger, aldri flere og aldri færre", "Alltid uendelig mange løsninger, uansett matrisen"],
      explanation: "Trivialløsningen $x=0$ passer alltid. Om det finnes flere, avgjøres av antall frie variabler.",
    },
    {
      question: "Et $3\\times3$-system radreduseres til tre pivoter. Hva slags løsning har det?",
      options: ["En entydig løsning, siden alle variabler blir bundne", "Ingen løsning, siden pivotene fyller hele matrisen", "Uendelig mange løsninger langs en rett linje", "Det kan slett ikke avgjøres uten å se høyresiden"],
      explanation: "Tre pivoter og tre ukjente betyr at alle variabler er bundne, og et konsistent system med bare bundne variabler har entydig løsning.",
    },
    {
      question: "Hva er tilbakesubstitusjon?",
      options: ["Å løse trappeformen nedenfra og sette verdiene oppover", "Å bytte tilbake to rader man tidligere har byttet om", "Å multiplisere matrisen med sin egen inverse matrise", "Å gjenta hele radreduksjonen én ekstra gang for kontroll"],
      explanation: "Fra trappeform løser man nederste rad først og substituerer verdiene oppover for å finne de øvrige ukjente.",
    },
    {
      question: "For et system med trappeform $\\left[\\begin{smallmatrix}1&2&|&3\\\\0&0&|&0\\end{smallmatrix}\\right]$ er løsningen:",
      options: ["$(x,y)=(3,0)+t(-2,1)$ med $t$ fri", "$(x,y)=(3,0)$, altså entydig bestemt", "ingen løsning på grunn av nullraden", "$(x,y)=(0,0)$ som eneste mulige løsning"],
      explanation: "Én pivot, én fri variabel $y=t$; da er $x=3-2t$, altså $(3,0)+t(-2,1)$.",
    },
    {
      question: "Ved en parameterdrøfting forsvinner nederste pivot når $a=4$, og raden blir $[\\,0\\ 0\\ 0\\ |\\ b-3\\,]$. Når er det uendelig mange løsninger?",
      options: ["Når $a=4$ og samtidig $b=3$", "Når $a=4$ og samtidig $b\\ne3$", "Når $a\\ne4$ for absolutt enhver verdi av $b$", "Aldri, uansett hvilke $a$ og $b$"],
      explanation: "$a=4$ fjerner pivotet; da må høyresiden $b-3$ være null for konsistens. $b=3$ gir nullrad og en fri variabel.",
    },
    {
      question: "Hva er en koeffisientmatrise?",
      options: ["Den utvidede matrisen uten selve høyresidesøylen", "Matrisen som bare består av høyresiden $b$ alene", "Den ferdig reduserte trappeformen av systemet", "Matrisen satt sammen av bare de pivotene man fant"],
      explanation: "Koeffisientmatrisen $A$ er tallene foran de ukjente; sammen med høyresiden $b$ danner den den utvidede matrisen $[A\\,|\\,b]$.",
    },
    {
      question: "Radekvivalens ($A\\sim B$) betyr at:",
      options: ["$A$ kan gjøres om til $B$ ved elementære radoperasjoner", "$A$ og $B$ er nødt til å ha nøyaktig samme determinantverdi som hverandre", "$A$ er lik den transponerte matrisen til $B$", "$A$ og $B$ har like mange søyler som hverandre"],
      explanation: "Radekvivalente matriser representerer systemer med nøyaktig samme løsningsmengde — grunnlaget for hele metoden.",
    },
    {
      question: "Hvorfor holder det å radredusere bare $A$ for et homogent system?",
      options: ["Fordi høyresiden er null og forblir null under alle radoperasjoner", "Fordi homogene systemer aldri kan ha noen frie variabler", "Fordi determinanten til slike systemer alltid blir lik null", "Fordi høyresiden da automatisk blir lik pivotene man finner i matrisen til slutt"],
      explanation: "Med $b=0$ endres ikke høyresiden av noen radoperasjon, så den kan utelates i regningen.",
    },
    {
      question: "Antall frie variabler i løsningen er lik:",
      options: ["antall søyler i matrisen som mangler et pivot", "antall pivoter man til slutt finner i hele trappeformen", "antall rader i den opprinnelige matrisen", "antall nullrader i trappeformen minus én"],
      explanation: "Hver søyle uten pivot gir én fri variabel, og tallet er dimensjonen til løsningsmengden (antall parametre).",
    },
    {
      question: "Du skal «angi den reduserte trappeformen», men leverer en matrise med nuller bare UNDER pivotene. Hva mangler?",
      options: ["Nuller også over pivotene, samt pivoter skalert til 1", "En ekstra nullrad helt nederst i matrisen", "At høyresidesøylen fjernes fra matrisen først", "At samtlige rader sorteres etter størrelsen på pivotene sine først"],
      explanation: "Redusert trappeform krever pivot $=1$ og nuller på begge sider av hvert pivot; bare nuller under er vanlig trappeform.",
    },
  ],
  'mat1110-1-2': [
    {
      question: "Hvordan tester du om vektorer er lineært uavhengige?",
      options: ["Skriv dem som søyler, radreduser, og se om hver søyle får pivot", "Skriv dem som rader og sjekk at radsummen alltid blir null", "Regn ut prikkproduktet av hvert par og se om det blir null", "Legg vektorene sammen og sjekk om summen blir nullvektoren"],
      explanation: "Vektorene som søyler; uavhengig ⇔ hver søyle får et pivot i trappeformen.",
    },
    {
      question: "Hva er en basis for et rom?",
      options: ["Et uavhengig sett som samtidig spenner ut hele rommet", "Et hvilket som helst sett med akkurat like mange vektorer", "Den største samlingen vektorer man kan finne i rommet", "Enhver samling vektorer som til sammen har prikkprodukt null"],
      explanation: "En basis er lineært uavhengig OG spenner ut rommet; da har hver vektor entydige koordinater.",
    },
    {
      question: "Basiskriteriet: $n$ vektorer i $\\mathbb{R}^n$ danner en basis nøyaktig når søylematrisen er:",
      options: ["radekvivalent med $I_n$ (og dermed $\\det\\ne0$)", "symmetrisk om sin egen hoveddiagonal i matrisen", "lik sin egen transponerte matrise ved radbytte", "på trappeform med minst én fri variabel igjen"],
      explanation: "Radekvivalent med $I_n$ ⇔ $n$ pivoter ⇔ $\\det\\ne0$ ⇔ basis. Dette er konklusjonssetningen sensor vil se.",
    },
    {
      question: "Hva er nullrommet $N(A)$?",
      options: ["Løsningsmengden til det homogene systemet $Ax=0$", "Mengden av alle søylene som inngår i matrisen $A$", "Settet av alle pivotsøyler i den reduserte formen", "Alle vektorer $b$ slik at $Ax=b$ har en løsning"],
      explanation: "$N(A)=\\{x:Ax=0\\}$ — løsningen av det homogene systemet, med basis fra de frie variablene.",
    },
    {
      question: "Hvor henter du basisvektorene for SØYLEROMMET?",
      options: ["Fra de originale søylene i $A$ ved pivotposisjonene", "Fra søylene i trappeformen ved pivotposisjonene", "Fra de frie variablene i den reduserte trappeformen", "Fra radene i trappeformen som ikke ble helt null"],
      explanation: "Radreduksjon forteller HVILKE søyler (pivotene), men basisvektorene er de tilsvarende ORIGINAL-søylene i $A$.",
    },
    {
      question: "Rangen til en matrise er:",
      options: ["antallet pivoter i trappeformen dens", "det største tallet som finnes i matrisen", "antall rader minus antall nullrader ganget", "summen av alle elementene på diagonalen"],
      explanation: "Rang = antall pivoter = dimensjonen til søylerommet (og radrommet).",
    },
    {
      question: "Rang–nullitet-setningen sier at rang $+$ nullitet er lik:",
      options: ["antall søyler i matrisen", "antall rader i matrisen", "determinanten til matrisen", "antall pivoter ganget med to"],
      explanation: "$\\operatorname{rang}(A)+\\dim N(A)=n$, antall søyler: hver søyle er enten pivotsøyle eller svarer til en fri variabel.",
    },
    {
      question: "Nulliteten til en matrise er lik:",
      options: ["antall frie variabler i systemet $Ax=0$", "antall pivoter i den reduserte trappeformen", "antall rader som ikke ble helt til null", "antall søyler som inneholder minst ett pivot"],
      explanation: "Nulliteten er $\\dim N(A)$ = antall frie variabler i det homogene systemet.",
    },
    {
      question: "En vanlig felle: du leser basis for søylerommet fra trappeformens søyler. Hvorfor er det feil?",
      options: ["Radreduksjon endrer søylerommet, så søylene må tas fra original-$A$", "Trappeformen har alltid færre søyler enn originalmatrisen $A$", "Søylerommet er alltid tomt for matriser med en nullrad", "Trappeformens søyler er alltid lineært avhengige av hverandre"],
      explanation: "Radoperasjoner bevarer radrommet, men ikke søylerommet; derfor må basisvektorene hentes fra $A$ selv.",
    },
    {
      question: "Fem vektorer i $\\mathbb{R}^3$ er:",
      options: ["alltid lineært avhengige", "alltid lineært uavhengige", "alltid en basis for $\\mathbb{R}^3$", "alltid innbyrdes ortogonale"],
      explanation: "Antall pivoter $\\le 3$ (antall rader), så med fem søyler mangler minst to pivot ⇒ avhengige.",
    },
    {
      question: "Dimensjonen til et rom er:",
      options: ["antall vektorer i en basis for rommet", "antall vektorer man har valgt å skrive opp", "det største tallet som opptrer i vektorene", "antall koordinater som tilfeldigvis er null"],
      explanation: "Dimensjonen er antall basisvektorer — samme tall uansett hvilken basis man velger.",
    },
    {
      question: "En lineær kombinasjon av $v_1,\\dots,v_k$ er et uttrykk på formen:",
      options: ["$c_1v_1+\\cdots+c_kv_k$ med skalarer $c_i$", "$v_1\\cdot v_2\\cdots v_k$ altså produktet av dem", "$v_1+v_2+\\cdots+v_k$ uten noen koeffisienter", "det største av tallene $v_1,\\dots,v_k$ i settet"],
      explanation: "En lineær kombinasjon skalerer og adderer: $c_1v_1+\\cdots+c_kv_k$. Å spørre om $w$ er en slik, er et likningssystem.",
    },
    {
      question: "Standardbasisen for $\\mathbb{R}^3$ består av:",
      options: ["$e_1=(1,0,0),\\,e_2=(0,1,0),\\,e_3=(0,0,1)$", "$(1,1,1),(2,2,2),(3,3,3)$ i den rekkefølgen", "alle vektorer med lengde nøyaktig lik 1", "de tre søylene i en vilkårlig $3\\times3$-matrise"],
      explanation: "Enhetsvektorene $e_1,e_2,e_3$; koordinatene til en vektor i denne basisen er tallene i vektoren selv.",
    },
    {
      question: "Et spenn $\\operatorname{sp}\\{v_1,\\dots,v_k\\}$ er:",
      options: ["mengden av alle lineære kombinasjoner av vektorene", "bare de $k$ vektorene $v_1,\\dots,v_k$ i seg selv", "den lengste av vektorene i den gitte samlingen", "settet av alle vektorer som står normalt på $v_1$"],
      explanation: "Spennet er ALLE lineære kombinasjoner — en linje, et plan eller et rom gjennom origo; det er alltid et underrom.",
    },
    {
      question: "Hva betyr det at et sett vektorer er lineært avhengig?",
      options: ["En ikke-triviell kombinasjon av dem gir nullvektoren", "Alle vektorene i settet peker i nøyaktig samme retning", "Ingen av vektorene i settet kan være nullvektoren", "Summen av alle vektorene blir større enn hver enkelt"],
      explanation: "Avhengighet: det finnes $c_i$ ikke alle null med $\\sum c_iv_i=0$; da er minst én vektor overflødig.",
    },
    {
      question: "Hvordan finner du en basis for nullrommet?",
      options: ["Radreduser, sett hver fri variabel til en parameter, les retningsvektorene", "Ta søylene i $A$ som svarer til pivotposisjonene i trappeformen", "Regn ut determinanten og bruk den som eneste basisvektor", "Transponer matrisen og bruk radene i den transponerte"],
      explanation: "Én basisvektor per fri variabel: sett den frie til 1, de øvrige frie til 0, og les de bundne.",
    },
    {
      question: "For å utvide et uavhengig sett til en basis for $\\mathbb{R}^n$:",
      options: ["føy på standardbasisvektorene og behold dem som gir nye pivoter", "gang alle vektorene med to til du har nok av dem", "legg til nullvektoren så mange ganger som nødvendig", "bytt ut vektorene med deres transponerte varianter"],
      explanation: "Sett de gitte vektorene først, føy på $e_1,\\dots,e_n$, radreduser og behold de $e_i$ som får nye pivoter — til $n$ pivoter.",
    },
    {
      question: "En kvadratisk matrise har full rang. Hva følger?",
      options: ["Den er inverterbar og nullrommet er trivielt", "Den har minst én fri variabel i systemet sitt", "Determinanten dens er nødvendigvis lik null", "Minst én av søylene dens er lik nullvektoren"],
      explanation: "Full rang ($n$) for en $n\\times n$-matrise: alle søyler er pivotsøyler, $N(A)=\\{0\\}$, matrisen er inverterbar.",
    },
    {
      question: "Radrommet og søylerommet til en matrise har alltid:",
      options: ["samme dimensjon, nemlig rangen", "nøyaktig de samme vektorene i seg", "helt uavhengige og ulike dimensjoner", "dimensjon lik antallet rader i matrisen"],
      explanation: "Begge har dimensjon lik rangen, selv om vektorene generelt er forskjellige.",
    },
    {
      question: "Koordinatene til en vektor mht. en basis er:",
      options: ["de entydige tallene i framstillingen som kombinasjon av basisvektorene", "lengdene til de enkelte basisvektorene lagt sammen etter tur", "alltid de samme tallene som selve vektorens komponenter", "prikkproduktene mellom vektoren og hver rad i matrisen"],
      explanation: "En basis gir en ENTYDIG framstilling $v=\\sum c_iu_i$; tallene $c_i$ er koordinatene — fungerer som et koordinatsystem.",
    },
  ],
  'mat1110-1-3': [
    {
      question: "Hvordan regner du inversen til en $3\\times3$-matrise?",
      options: ["Radreduser $[A\\,|\\,I_3]$ til $[I_3\\,|\\,A^{-1}]$ og les av høyre halvdel", "Transponer hele matrisen og bytt deretter fortegn på alle elementene på hoveddiagonalen", "Del hvert element i matrisen på determinanten dens", "Gang matrisen med seg selv til du får identiteten fram"],
      explanation: "Sett $I_3$ ved siden av $A$, radreduser til venstre blir $I_3$; da står $A^{-1}$ til høyre.",
    },
    {
      question: "Hva definerer inversen $A^{-1}$?",
      options: ["At $AA^{-1}=A^{-1}A=I_n$", "At $A^{-1}$ har samme determinant som $A$", "At $A^{-1}$ er den transponerte av $A$", "At $A^{-1}$ har motsatt fortegn av $A$ overalt"],
      explanation: "Inversen er matrisen som ganget med $A$ (begge veier) gir identitetsmatrisen $I_n$.",
    },
    {
      question: "Når er en kvadratisk matrise inverterbar?",
      options: ["Nøyaktig når $\\det A\\ne0$", "Nøyaktig når $\\det A=0$", "Alltid, uansett hvilke tall den har", "Bare når alle elementene er positive"],
      explanation: "$\\det A\\ne0$ er ett av de ekvivalente inverterbarhetskriteriene; $\\det=0$ betyr singulær.",
    },
    {
      question: "Du blir bare bedt om å AVGJØRE om $A$ er inverterbar. Hva bør du gjøre?",
      options: ["Sjekke $\\det\\ne0$ eller antall pivoter, ikke regne inversen", "Regne hele inversen via $[A\\,|\\,I]$ uansett", "Gange $A$ med en tilfeldig matrise og se hva som skjer", "Transponere $A$ og telle nullene på diagonalen"],
      explanation: "Det holder med ett kriterium ($\\det\\ne0$ / $n$ pivoter). Å regne hele inversen er en tidsfelle.",
    },
    {
      question: "Hva er $(AB)^{-1}$ når $A,B$ er inverterbare?",
      options: ["$B^{-1}A^{-1}$", "$A^{-1}B^{-1}$", "$(BA)^{-1}$", "$A^{-1}+B^{-1}$"],
      explanation: "Rekkefølgen snur: $(AB)^{-1}=B^{-1}A^{-1}$. $A^{-1}B^{-1}$ er en klassisk feil.",
    },
    {
      question: "Hvordan løser du $Ax=b$ når du kjenner $A^{-1}$?",
      options: ["Regner $x=A^{-1}b$", "Regner $x=bA^{-1}$ fra høyre", "Regner $x=A^{-1}+b$ ledd for ledd", "Radreduserer $A$ på nytt fra bunnen"],
      explanation: "Med inversen for hånden er løsningen ett produkt: $x=A^{-1}b$.",
    },
    {
      question: "Hva forteller inverterbarhetsteoremet oss?",
      options: ["At seks utsagn om $A$ enten alle er sanne eller alle usanne", "At enhver eneste kvadratisk matrise som finnes har nøyaktig én entydig bestemt invers", "At determinanten alltid er lik antall pivoter", "At inversen alltid har heltallige elementer"],
      explanation: "Teoremet binder sammen inverterbar, $\\det\\ne0$, $n$ pivoter, basis-søyler, trivielt nullrom og entydig løsning.",
    },
    {
      question: "Hvorfor snur rekkefølgen i $(AB)^{-1}=B^{-1}A^{-1}$?",
      options: ["Fordi matriseprodukt ikke er kommutativt", "Fordi determinanten til $AB$ er negativ", "Fordi $A$ og $B$ må ha samme størrelse", "Fordi inversen alltid er transponert"],
      explanation: "Regn ut $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=I$; siden produktet ikke er kommutativt, må $B^{-1}$ stå først.",
    },
    {
      question: "En $2\\times2$-matrise $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ har invers:",
      options: ["$\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$", "$\\frac{1}{ad-bc}\\begin{pmatrix}a&-b\\\\-c&d\\end{pmatrix}$", "$\\frac{1}{ab-cd}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$", "$\\begin{pmatrix}1/a&1/b\\\\1/c&1/d\\end{pmatrix}$"],
      explanation: "Bytt diagonalen, skift fortegn på $b$ og $c$, del på $\\det=ad-bc$.",
    },
    {
      question: "Hva er $\\det(A^{-1})$ uttrykt ved $\\det A$?",
      options: ["$1/\\det A$", "$\\det A$", "$-\\det A$", "$(\\det A)^2$"],
      explanation: "Fra $\\det(AA^{-1})=\\det I=1$ og produktregelen følger $\\det(A^{-1})=1/\\det A$.",
    },
    {
      question: "Hva kalles en matrise som IKKE har noen invers?",
      options: ["Singulær", "Ortogonal", "Symmetrisk", "Triangulær"],
      explanation: "En matrise uten invers er singulær; da er $\\det=0$ og søylene lineært avhengige.",
    },
    {
      question: "Under $[A\\,|\\,I]$-reduksjonen dukker det opp en nullrad i venstre halvdel. Hva betyr det?",
      options: ["At $A$ er singulær og ikke har noen invers", "At du må starte reduksjonen helt på nytt", "At inversen står ferdig i høyre halvdel", "At matrisen har uendelig mange inverser"],
      explanation: "En nullrad til venstre betyr at $A$ ikke kan bli $I_n$, altså færre enn $n$ pivoter — matrisen er singulær.",
    },
    {
      question: "Hva er $(A^{-1})^{-1}$?",
      options: ["$A$", "$I_n$", "$A^{T}$", "$-A$"],
      explanation: "Å invertere to ganger fører tilbake til utgangspunktet: $(A^{-1})^{-1}=A$.",
    },
    {
      question: "Identitetsmatrisen $I_n$ har:",
      options: ["ettall på hoveddiagonalen og nuller ellers", "ettall overalt i hele matrisen", "nuller på diagonalen og ettall ellers", "tilfeldige tall langs hoveddiagonalen"],
      explanation: "$I_n$ virker som tallet 1: $I_nA=AI_n=A$.",
    },
    {
      question: "For hvilke $a$ er $A=\\begin{pmatrix}1&2&1\\\\0&1&a\\\\1&3&3\\end{pmatrix}$ inverterbar? (Nederste pivot blir $2-a$.)",
      options: ["For alle $a\\ne2$", "For alle $a\\ne0$", "Kun for $a=2$ nøyaktig", "For absolutt alle verdier av $a$"],
      explanation: "Tre pivoter krever nederste pivot $2-a\\ne0$, altså $a\\ne2$; da er $\\det\\ne0$.",
    },
    {
      question: "Hvorfor gir $[A\\,|\\,I]$-metoden nettopp inversen i høyre halvdel?",
      options: ["Fordi å løse $Ax=e_j$ for hver $j$ gir søyle $j$ i $A^{-1}$", "Fordi identitetsmatrisen $I$ alltid forblir helt uforandret under enhver radoperasjon underveis", "Fordi determinanten flyttes over til høyre side", "Fordi transponering skjer automatisk ved reduksjon"],
      explanation: "Hver søyle $e_j$ i $I$ gir ved reduksjon løsningen av $Ax=e_j$, som er $j$-te søyle av inversen.",
    },
    {
      question: "Hvorfor bør du gjenbruke en invers du alt har regnet i et senere delpunkt?",
      options: ["Fordi eksamen er designet med kjedede delpunkter og belønner koblingen", "Fordi inversen endrer seg hvis du regner den to ganger", "Fordi radreduksjon er forbudt i senere delpunkter", "Fordi determinanten ellers blir feil i neste steg"],
      explanation: "Delpunktene er bevisst kjedet: $A^{-1}$ fra O1a er ment brukt i O1b. Å regne den på nytt koster tid.",
    },
    {
      question: "Hva er $\\det(A^n)$ for et positivt heltall $n$?",
      options: ["$(\\det A)^n$", "$n\\cdot\\det A$", "$\\det A$", "$n^{\\det A}$"],
      explanation: "Fra $\\det(AB)=\\det A\\det B$ gjentatt: $\\det(A^n)=(\\det A)^n$.",
    },
    {
      question: "En diagonalmatrise $\\operatorname{diag}(d_1,d_2,d_3)$ er inverterbar når:",
      options: ["alle diagonalelementene er forskjellige fra null", "minst ett diagonalelement er forskjellig fra null", "alle diagonalelementene er like store", "summen av diagonalelementene er ulik null"],
      explanation: "Determinanten er produktet $d_1d_2d_3$, som er $\\ne0$ nøyaktig når hver $d_i\\ne0$; inversen er $\\operatorname{diag}(1/d_i)$.",
    },
    {
      question: "Hva sier inverterbarhetsteoremet om $Ax=b$ når $A$ er inverterbar?",
      options: ["At det har entydig løsning for enhver $b$", "At det aldri har noen løsning uansett $b$", "At det alltid har uendelig mange løsninger", "At løsningen bare finnes når $b=0$"],
      explanation: "Inverterbar $\\iff$ $Ax=b$ har entydig løsning $x=A^{-1}b$ for alle $b$.",
    },
  ],
  'mat1110-1-4': [
    {
      question: "Hva kjennetegner en lineæravbildning $T$?",
      options: ["At $T(u+v)=T(u)+T(v)$ og $T(cu)=cT(u)$", "At $T$ alltid har et konstantledd forskjellig fra null", "At $T$ sender enhver vektor til en lengre vektor", "At $T$ bytter om koordinatene til hver vektor"],
      explanation: "Lineæritet: respekterer addisjon og skalering. En følge er $T(0)=0$.",
    },
    {
      question: "Hvordan bygger du standardmatrisen til $T$?",
      options: ["Sett bildene $T(e_1),T(e_2),\\dots$ inn som søyler", "Sett bildene $T(e_1),T(e_2),\\dots$ inn som rader", "Regn determinanten av inputvektorene først", "Transponer inputvektorene og gang dem sammen"],
      explanation: "$A=[\\,T(e_1)\\ \\cdots\\ T(e_n)\\,]$: bildene som SØYLER. Rader ville gitt den transponerte.",
    },
    {
      question: "Hva er kjernen til en lineæravbildning $T(x)=Ax$?",
      options: ["Nullrommet $N(A)$: alt som sendes til $0$", "Søylerommet: alt avbildningen treffer", "Settet av alle pivotsøyler i matrisen", "Mengden av alle inverterbare inputvektorer"],
      explanation: "$\\ker T=\\{x:T(x)=0\\}=N(A)$. Injektiv $\\iff\\ker T=\\{0\\}$.",
    },
    {
      question: "Hva er bildet (verdimengden) til $T(x)=Ax$?",
      options: ["Søylerommet $\\operatorname{Col}(A)$", "Nullrommet $N(A)$", "Radrommet til matrisen $A$", "Kjernen til avbildningen $T$"],
      explanation: "$T(x)=Ax$ er en kombinasjon av søylene, så bildet er søylerommet; dimensjonen er rangen.",
    },
    {
      question: "Er $S(x,y)=(x+1,\\,y)$ en lineæravbildning?",
      options: ["Nei, for $S(0,0)=(1,0)\\ne(0,0)$", "Ja, den er lineær med matrise $I_2$", "Ja, alle forskyvninger er lineære", "Nei, for den er ikke inverterbar"],
      explanation: "En lineæravbildning sender $0$ til $0$. $S$ har konstantledd, altså affin — ikke lineær.",
    },
    {
      question: "Standardmatrisen til rotasjon $90^\\circ$ mot klokka er:",
      options: ["$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$", "$\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$", "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$", "$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$"],
      explanation: "$R_{90^\\circ}$ har $\\cos=0,\\sin=1$: $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$; $e_1\\mapsto(0,1)$.",
    },
    {
      question: "Når er en lineæravbildning $T(x)=Ax$ injektiv (en-til-en)?",
      options: ["Når kjernen bare er $\\{0\\}$", "Når bildet er hele $\\mathbb{R}^m$", "Når matrisen har en nullrad", "Når determinanten er lik null"],
      explanation: "Injektiv $\\iff\\ker T=\\{0\\}\\iff N(A)=\\{0\\}$: ingen to input treffer samme output.",
    },
    {
      question: "Matrisen til sammensetningen «først $T$, så $S$» er:",
      options: ["$A_SA_T$ (S til venstre)", "$A_TA_S$ (T til venstre)", "$A_S+A_T$ (summen)", "$A_S^{-1}A_T$ (med invers)"],
      explanation: "$S\\circ T$ har matrise $A_SA_T$. Produktet er ikke kommutativt — rekkefølgen betyr noe.",
    },
    {
      question: "Speilingen om linjen $y=x$ har standardmatrise:",
      options: ["$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$", "$\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$", "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$", "$\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$"],
      explanation: "Speiling om $y=x$ bytter koordinatene: $e_1\\mapsto(0,1)$, $e_2\\mapsto(1,0)$.",
    },
    {
      question: "En projeksjon ned på $x$-aksen er:",
      options: ["ikke inverterbar, siden $y$-informasjonen går tapt", "alltid inverterbar med determinant lik 1", "en rotasjon om origo med vinkel null", "sin egen invers, akkurat som en speiling"],
      explanation: "Matrisen $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ har $\\det=0$; kjernen ($y$-aksen) er større enn $\\{0\\}$.",
    },
    {
      question: "En affinavbildning $x\\mapsto Ax+b$ med $b\\ne0$ er:",
      options: ["ikke lineær, fordi den flytter origo", "alltid lineær og inverterbar samtidig", "det samme som en ren rotasjon", "alltid en projeksjon på en linje"],
      explanation: "$T(0)=b\\ne0$, så den bryter linearitetskravet $T(0)=0$; den er affin, ikke lineær.",
    },
    {
      question: "Når har $T(x)=Ax$ en invers avbildning?",
      options: ["Nøyaktig når $A$ er inverterbar", "Nøyaktig når $A$ har en nullrad", "Alltid, uansett matrisen $A$", "Bare når $A$ er en projeksjon"],
      explanation: "$T^{-1}(y)=A^{-1}y$ finnes nøyaktig når $A$ er inverterbar; da kan avbildningen reverseres.",
    },
    {
      question: "For en kvadratisk lineæravbildning er injektiv, surjektiv og inverterbar:",
      options: ["tre ekvivalente egenskaper", "tre helt uavhengige egenskaper", "gjensidig utelukkende egenskaper", "bare like når $A$ er diagonal"],
      explanation: "For $n\\times n$ følger de av hverandre via inverterbarhetsteoremet: rang $n$ gir alle tre.",
    },
    {
      question: "Systemet $Ax=b$ med $A=\\begin{pmatrix}1&2\\\\2&a\\end{pmatrix}$ er entydig løsbart for enhver $b$ når:",
      options: ["$a\\ne4$", "$a=4$", "$a\\ne0$", "$a=2$"],
      explanation: "$\\det A=a-4$; entydig løsning for alle $b$ krever $\\det\\ne0$, altså $a\\ne4$.",
    },
    {
      question: "Hvorfor er $A=[\\,T(e_1)\\ \\cdots\\ T(e_n)\\,]$ nettopp standardmatrisen?",
      options: ["Fordi $T(x)=x_1T(e_1)+\\cdots+x_nT(e_n)=Ax$ ved linearitet", "Fordi determinanten av $A$ alltid blir lik 1", "Fordi radene i $A$ da blir standardbasisen", "Fordi $T$ da automatisk blir sin egen invers"],
      explanation: "Skriv $x=\\sum x_je_j$; linearitet gir $T(x)=\\sum x_jT(e_j)$, som er $A$ ganger $x$.",
    },
  ],
  'mat1110-1-5': [
    {
      question: "Oppgaven ber deg avgjøre om tre vektorer er en basis. Hva stiller du opp?",
      options: ["Vektorene som søyler i en matrise", "Vektorene som rader i en matrise", "Den utvidede matrisen $[A\\,|\\,I]$", "Determinanten av inputvektorene direkte"],
      explanation: "Basis/uavhengighet testes med vektorene som SØYLER; basis ⇔ pivot i hver søyle.",
    },
    {
      question: "Oppgaven ber deg finne inversen. Hva stiller du opp?",
      options: ["Den utvidede matrisen $[A\\,|\\,I_n]$", "Vektorene som søyler i en matrise", "Bare matrisen $A$ helt alene", "Den transponerte matrisen $A^{T}$"],
      explanation: "Invers finnes ved å radredusere $[A\\,|\\,I_n]$ til $[I_n\\,|\\,A^{-1}]$.",
    },
    {
      question: "Hvor henter du basis for søylerommet?",
      options: ["Fra originalsøylene i $A$ ved pivotposisjonene", "Fra søylene i den ferdige trappeformen ved de samme pivotposisjonene", "Fra de frie variablene i systemet", "Fra radene i den reduserte trappeformen"],
      explanation: "Søylerom-fellen: radreduksjon endrer søylerommet, så basisvektorene tas fra ORIGINAL-$A$.",
    },
    {
      question: "Du har regnet $A^{-1}$ i deloppgave (a). I (b) skal du løse $Ax=b$. Hva gjør du?",
      options: ["Regner $x=A^{-1}b$ ved å gjenbruke inversen", "Radreduserer $[A\\,|\\,b]$ helt fra bunnen igjen", "Regner en ny invers spesielt for denne $b$", "Transponerer $A$ og løser det nye systemet"],
      explanation: "Delpunktene er kjedet: gjenbruk $A^{-1}$ fra (a). Å regne på nytt koster tid.",
    },
    {
      question: "Konklusjonssetningen sensor vil se for en basis er:",
      options: ["«radekvivalent med $I_n$, altså danner søylene en basis»", "«ut fra tallene i matrisen ser dette helt klart ut som en basis»", "«matrisen har tre rader, altså er det en basis»", "«summen av søylene er ulik null, altså basis»"],
      explanation: "Kriteriet må skrives ut — «radekvivalent med $I_n$» gir føringspoeng, ikke bare tallene.",
    },
    {
      question: "En radreduksjon gir en nullrad uten motsigelse i et $[A\\,|\\,b]$-system. Konklusjonen er:",
      options: ["uendelig mange løsninger (fri variabel)", "ingen løsning i det hele tatt fordi systemet blir inkonsistent", "entydig løsning", "at matrisen er inverterbar"],
      explanation: "Nullrad $[0\\cdots0\\,|\\,0]$ er ingen motsigelse; den gir en fri variabel og uendelig mange løsninger.",
    },
    {
      question: "Basis for nullrommet finner du fra:",
      options: ["de frie variablene — én basisvektor per fri variabel", "pivotsøylene i den opprinnelige matrisen", "determinanten av hele koeffisientmatrisen regnet ut på forhånd", "radene i trappeformen som ble null"],
      explanation: "Sett hver fri variabel til parameter; retningsvektorene utgjør nullrombasisen.",
    },
    {
      question: "For hvilke $a$ er søylene i en matrise med nederste pivot $a-4$ en basis for $\\mathbb{R}^3$?",
      options: ["For alle $a\\ne4$", "Bare for $a=4$", "For alle $a\\ne0$", "For absolutt alle $a$"],
      explanation: "Basis ⇔ tre pivoter ⇔ nederste pivot $a-4\\ne0$ ⇔ $a\\ne4$.",
    },
    {
      question: "Du blir bare bedt om å avgjøre OM en matrise er inverterbar. Raskeste vei?",
      options: ["Sjekk $\\det\\ne0$ eller antall pivoter", "Regn hele inversen via $[A\\,|\\,I]$", "Regn nullrommet og søylerommet begge", "Gang matrisen med sin transponerte"],
      explanation: "Ett kriterium avgjør; å regne hele inversen er en tidsfelle.",
    },
    {
      question: "To av søylene i en matrise er proporsjonale. Da er søylene:",
      options: ["lineært avhengige — ingen basis", "lineært uavhengige — en basis", "alltid ortogonale på hverandre", "en basis for et 3-dimensjonalt rom"],
      explanation: "Proporsjonale søyler er avhengige; matrisen har for få pivoter til å være en basis.",
    },
    {
      question: "Rang $+$ nullitet er alltid lik:",
      options: ["antall søyler i matrisen", "antall rader i matrisen", "determinanten til matrisen", "antall pivoter i trappeformen ganget med akkurat to"],
      explanation: "Rang–nullitet: hver søyle er enten pivotsøyle eller svarer til en fri variabel.",
    },
    {
      question: "I et $[A\\,|\\,b]$-system får du raden $[\\,0\\ 0\\ 0\\ |\\ 5\\,]$. Konklusjonen er:",
      options: ["ingen løsning (motsigelse $0=5$)", "uendelig mange løsninger", "entydig løsning", "at $b$ ligger i søylerommet"],
      explanation: "En motsigelsesrad med ikke-null høyreside betyr at systemet er inkonsistent.",
    },
    {
      question: "Hva merker du over hvert $\\sim$-tegn under radreduksjon?",
      options: ["Radoperasjonen du utførte, f.eks. $II-2I$", "Determinanten til matrisen i det steget", "Antall pivoter du har funnet så langt", "Vektoren du multipliserte matrisen med"],
      explanation: "Merkede radoperasjoner ($II-2I$, $III+I$) er sensors uttrykte føringskrav.",
    },
    {
      question: "For å utvide et uavhengig sett til en basis for $\\mathbb{R}^3$:",
      options: ["føy på $e_1,e_2,e_3$ og behold dem som gir nye pivoter", "gang de gitte vektorene med to helt til du har tre", "legg til nullvektoren til du har tre vektorer", "bytt ut vektorene med sine transponerte"],
      explanation: "Sett de gitte vektorene først, føy på standardbasisen, behold de $e_i$ som gir nye pivoter — til tre pivoter.",
    },
    {
      question: "En inverterbar matrise $A$ har nullrom:",
      options: ["$\\{0\\}$ (bare trivialløsningen)", "et helt vanlig plan som går gjennom origo i rommet", "hele rommet $\\mathbb{R}^n$", "en linje gjennom origo"],
      explanation: "Inverterbar ⇔ $N(A)=\\{0\\}$: $Ax=0$ har bare $x=0$, ingen frie variabler.",
    },
  ],
  'mat1110-2-1': [
    {
      question: "Hvordan regner du $\\partial f/\\partial x$ i praksis?",
      options: ["Deriver mhp. $x$ mens de andre variablene holdes som konstanter", "Deriver mhp. alle variablene og legg de deriverte sammen til slutt", "Deriver mhp. $x$ og behandle selve $x$ som en fast konstant", "Sett alle de andre variablene lik null og deriver deretter mhp. $x$"],
      explanation: "Partiellderivasjon er vanlig derivasjon i én variabel om gangen; de øvrige holdes faste.",
    },
    {
      question: "Hva er gradienten $\\nabla f$?",
      options: ["Vektoren som samler alle de partiellderiverte, altså $(f_x,f_y,\\dots)$", "Summen av de partiellderiverte, altså tallet $f_x+f_y+\\cdots$", "Den andrederiverte $f_{xx}$ regnet langs $x$-aksen i punktet", "Lengden av tangentplanet til grafen målt i det aktuelle punktet"],
      explanation: "$\\nabla f$ samler de partiellderiverte i én vektor og peker mot bratteste stigning.",
    },
    {
      question: "Den retningsderiverte $D_uf(a)=\\nabla f(a)\\cdot u$ krever at $u$ er",
      options: ["en enhetsvektor, altså en vektor med lengde $|u|=1$", "en vilkårlig vektor uansett lengde, gjerne den oppgitte $v$ direkte", "en vektor som alltid peker langs den positive $x$-aksen", "lik gradienten $\\nabla f(a)$ selv i det samme punktet"],
      explanation: "Uten normalisering blandes retningen sammen med lengden på vektoren, og svaret blir skalert feil.",
    },
    {
      question: "I hvilken retning vokser $f$ raskest i et punkt?",
      options: ["I retning av gradienten $\\nabla f$ i punktet", "I retning vinkelrett på gradienten $\\nabla f$", "I retning av den motsatte gradienten $-\\nabla f$", "I retning langs nivåkurven som går gjennom punktet"],
      explanation: "$D_uf=|\\nabla f|\\cos\\theta$ er størst når $u$ peker samme vei som $\\nabla f$.",
    },
    {
      question: "Hva er den bratteste stigningen til $f$ i et punkt?",
      options: ["Lengden av gradienten, altså $|\\nabla f|$ i punktet", "Prikkproduktet av gradienten med seg selv, $\\nabla f\\cdot\\nabla f$", "Summen av de partiellderiverte, altså $f_x+f_y$", "Alltid tallet $1$, uansett hvilken funksjon $f$ er"],
      explanation: "Maksimal retningsderivert er $|\\nabla f|$, oppnådd i gradientens retning.",
    },
    {
      question: "Lineariseringen av $f$ i punktet $a$ er gitt ved",
      options: ["$T_af(x)=f(a)+\\nabla f(a)\\cdot(x-a)$", "$T_af(x)=\\nabla f(a)\\cdot x$ uten konstantledd", "$T_af(x)=f(a)\\cdot(x-a)$ med produkt", "$T_af(x)=f(a)+f(x)$ som en sum"],
      explanation: "Beste rette tilnærming: funksjonsverdi pluss gradient prikket med forskyvningen $(x-a)$.",
    },
    {
      question: "En normalvektor til grafflaten $z=g(x,y)$ er",
      options: ["$(g_x,\\ g_y,\\ -1)$ med et $-1$ i $z$-retningen", "$(g_x,\\ g_y)$ uten noe tredje ledd i det hele tatt", "$(g_x,\\ g_y,\\ 1)$ med et positivt $z$-ledd", "$(-g_x,\\ -g_y)$ med byttet fortegn på begge"],
      explanation: "Skriver du flaten som $g(x,y)-z=0$, blir gradienten $(g_x,g_y,-1)$ — merk $z$-leddet $-1$.",
    },
    {
      question: "Hva sier Clairauts teorem for en glatt funksjon $f$?",
      options: ["At $f_{xy}=f_{yx}$ — rekkefølgen på blandet derivasjon spiller ingen rolle", "At $f_{xx}=f_{yy}$ alltid holder for en glatt funksjon", "At $f_{xy}=0$ i ethvert punkt der $f$ er glatt", "At $f_x=f_y$ i alle punktene som er stasjonære"],
      explanation: "For to ganger kontinuerlig deriverbare funksjoner er de blandede andrederiverte like.",
    },
    {
      question: "Hesse-matrisen til $f(x,y)$ er",
      options: ["$\\begin{pmatrix}f_{xx}&f_{xy}\\\\ f_{xy}&f_{yy}\\end{pmatrix}$ av andrederiverte", "$\\begin{pmatrix}f_x&f_y\\\\ f_y&f_x\\end{pmatrix}$ av førstederiverte", "$\\begin{pmatrix}f_{xx}&f_{yy}\\\\ f_{yy}&f_{xx}\\end{pmatrix}$ med bytte", "vektoren $(f_{xx},f_{yy})$ av de to rene andrederiverte"],
      explanation: "Hesse samler andreordens partiellderiverte; symmetrien følger av Clairaut.",
    },
    {
      question: "Når eksisterer $\\lim_{(x,y)\\to(a,b)}f(x,y)$?",
      options: ["Når $f$ nærmer seg samme verdi langs enhver bane inn mot punktet", "Så snart grensen langs $x$-aksen alene finnes og er endelig", "Når funksjonen $f$ i det hele tatt er definert i punktet $(a,b)$", "Når begge partiellderiverte $f_x$ og $f_y$ finnes i punktet"],
      explanation: "I planet må alle baner gi samme verdi; to ulike baneverdier betyr at grensen ikke finnes.",
    },
    {
      question: "$\\frac{xy}{x^2+y^2}$ gir $0$ langs $y=0$ og $\\tfrac12$ langs $y=x$ inn mot origo. Konklusjon?",
      options: ["Grensen eksisterer ikke, fordi baneverdiene spriker", "Grensen er $0$, siden $x$-aksen gir den verdien", "Grensen er $\\tfrac12$, siden diagonalen gir den verdien", "Grensen er gjennomsnittet av de to, altså $\\tfrac14$"],
      explanation: "To baner gir ulik verdi, så grenseverdien i origo finnes ikke.",
    },
    {
      question: "Alle rette linjer $y=ax$ inn mot origo gir grensen $0$. Er grensen dermed $0$?",
      options: ["Nei — man må også teste krumme baner før man konkluderer", "Ja, det å teste alle rette linjer er tilstrekkelig", "Ja, forutsatt at $f$ er skrevet som en brøk", "Bare dersom man i tillegg har testet tilfellet $a=1$"],
      explanation: "En krum bane som $y=x^2$ kan gi en annen verdi; rette linjer alene beviser ingenting.",
    },
    {
      question: "Gradienten $\\nabla f$ i et punkt står",
      options: ["vinkelrett på nivåkurven som går gjennom punktet", "langs (parallelt med) nivåkurven gjennom punktet", "alltid parallelt med den positive $x$-aksen", "vinkelrett på tangentplanet til grafen $z=f$"],
      explanation: "$f$ endrer seg ikke langs nivåkurven, så $\\nabla f$ prikket med tangenten er null.",
    },
    {
      question: "For $f(x,y)=\\sin(xy)$ er $\\partial f/\\partial x$ lik",
      options: ["$y\\cos(xy)$ etter kjerneregelen", "$\\cos(xy)$ uten noen ekstra faktor", "$x\\cos(xy)$ med $x$ som faktor", "$\\cos(x)\\,y$ der bare $x$ deriveres"],
      explanation: "Kjerneregel: indre derivert mhp. $x$ av $xy$ er $y$, ganget med $\\cos(xy)$.",
    },
    {
      question: "At de partiellderiverte til $f$ finnes i et punkt garanterer at $f$ der er",
      options: ["ikke nødvendigvis deriverbar — kontinuerlige partiellderiverte kreves", "automatisk deriverbar, uten flere betingelser i det hele tatt", "automatisk en konstant funksjon i en omegn om punktet", "et stasjonært punkt der gradienten forsvinner"],
      explanation: "Deriverbarhet krever mer enn at partiellderivertene finnes; er de kontinuerlige, følger deriverbarhet.",
    },
  ],
  'mat1110-2-2': [
    {
      question: "Hvordan er Jacobi-matrisen $F'$ bygd opp?",
      options: ["Rad $i$ er gradienten $\\nabla F_i$ til komponentfunksjon nummer $i$", "Søyle $i$ er gradienten $\\nabla F_i$ til komponentfunksjon nummer $i$", "Rad $i$ er den $i$-te partiellderiverte av hele funksjonen $F$", "Diagonalen er de partiellderiverte og alle andre elementer er null"],
      explanation: "$F'$ har rad = komponentfunksjon og søyle = variabel; rad $i$ = $\\nabla F_i$.",
    },
    {
      question: "For $F:\\mathbb{R}^n\\to\\mathbb{R}^m$ har Jacobi-matrisen dimensjon",
      options: ["$m\\times n$ — rader teller komponentene, søyler teller variablene", "$n\\times m$ — rader teller variablene, søyler teller komponentene", "$n\\times n$ uansett hva tallet $m$ måtte være", "$m\\times m$ uansett hva tallet $n$ måtte være"],
      explanation: "Én rad per komponentfunksjon ($m$) og én søyle per variabel ($n$) gir $m\\times n$.",
    },
    {
      question: "Kjerneregelen på matriseform sier at $(G\\circ F)'(a)$ er",
      options: ["$G'(F(a))\\,F'(a)$ — den ytre $G'$ til venstre, tatt i $F(a)$", "$F'(a)\\,G'(F(a))$ — den indre $F'$ står til venstre i produktet", "$G'(a)\\,F'(a)$ — begge matrisene evaluert i det samme punktet $a$", "$G'(F(a))+F'(a)$ — de to deriverte lagt sammen ledd for ledd"],
      explanation: "Den ytre deriverte $G'$ tas i bildepunktet $F(a)$ og står først; produktet er ikke kommutativt.",
    },
    {
      question: "I kjerneregelen $(G\\circ F)'(a)=G'(F(a))F'(a)$ skal $G'$ evalueres i",
      options: ["bildepunktet $F(a)$, altså der $F$ sender $a$ hen", "startpunktet $a$, altså der man setter inn fra begynnelsen", "origo hver gang, uavhengig av hvilket punkt $a$ er", "punktet $G(a)$, altså $G$ brukt direkte på $a$"],
      explanation: "$G$ virker på utdata fra $F$, så den ytre deriverte tas der $F$ lander, altså $F(a)$.",
    },
    {
      question: "Hva garanterer at $F$ er deriverbar i et punkt?",
      options: ["At $F$ er $C^1$ der (kontinuerlige partiellderiverte)", "At de partiellderiverte bare finnes i punktet, uten flere krav", "At $F$ er definert og har en endelig verdi i selve punktet", "At Jacobideterminanten tilfeldigvis blir null i punktet"],
      explanation: "Bare at partiellderivertene finnes er ikke nok; kontinuitet av dem ($C^1$) gir deriverbarhet.",
    },
    {
      question: "Jacobideterminanten $\\det F'$ er definert",
      options: ["bare når $F'$ er kvadratisk, altså i tilfellet $n=m$", "for enhver vektorfunksjon uansett hvilke dimensjoner den har", "bare når funksjonen $F$ er lineær helt fra starten av", "bare når samtlige komponentfunksjoner er polynomer"],
      explanation: "Determinant krever kvadratisk matrise; for $n\\ne m$ snakker man i stedet om rang.",
    },
    {
      question: "$\\det F'(a)\\ne0$ forteller at $F$ er",
      options: ["lokalt inverterbar nær $a$ — punktet kalles et regulært punkt", "globalt inverterbar på hele sitt definisjonsområde samtidig", "en lineæravbildning med konstant Jacobi-matrise", "konstant i en hel omegn rundt punktet $a$"],
      explanation: "En ikke-null Jacobideterminant gir en lokal invers (omvendt funksjonsteorem), ikke nødvendigvis global.",
    },
    {
      question: "Hva er den vanligste tabben med Jacobi-matrisen?",
      options: ["Å transponere den, slik at rader og søyler bytter plass", "Å regne den kun i origo hver eneste gang man trenger den", "Å legge til et ekstra konstantledd nederst i matrisen", "Å dele hvert element i matrisen på determinanten dens"],
      explanation: "Rad = komponent, søyle = variabel; transponert Jacobi bryter kjerneregelen.",
    },
    {
      question: "Når $F$ har bare én komponent ($m=1$), er Jacobi-matrisen",
      options: ["gradienten $\\nabla F$ skrevet som én enkelt rad", "Hesse-matrisen med andrederiverte til $F$", "en søylevektor som består av de partiellderiverte", "determinanten til funksjonen $F$ i punktet"],
      explanation: "For et skalarfelt er $F'=\\nabla F$ — én rad; gradienten er Jacobi-matrisen i dette tilfellet.",
    },
    {
      question: "Lineariseringen av $F$ på vektorform er",
      options: ["$F(x)\\approx F(a)+F'(a)(x-a)$, verdi pluss lineær korreksjon", "$F(x)\\approx F'(a)\\,x$, uten noe konstantledd i det hele tatt", "$F(x)\\approx F(a)\\cdot(x-a)$, som et rent produkt", "$F(x)\\approx F(a)+\\det F'(a)$, med determinanten som tillegg"],
      explanation: "Beste affine tilnærming: funksjonsverdi pluss Jacobi ganget med forskyvningen.",
    },
    {
      question: "Hvis $\\det F'\\equiv0$ på et helt område, er komponentene",
      options: ["funksjonelt avhengige der — $F$ presses ned i lavere dimensjon", "lineært uavhengige, og dermed er $F$ globalt inverterbar der", "konstante funksjoner på hele det aktuelle området", "innbyrdes ortogonale i hvert eneste punkt på området"],
      explanation: "Forsvinnende Jacobideterminant overalt betyr funksjonell avhengighet; $F$ kan ikke være lokalt inverterbar.",
    },
    {
      question: "For $F(t)=(t^2,t^3)$ (en kurve $\\mathbb{R}\\to\\mathbb{R}^2$) er $F'(t)$",
      options: ["en søylevektor $(2t,\\ 3t^2)^T$ — tangenten (farten) til kurven", "en radvektor som samtidig fungerer som determinant", "en $2\\times2$-matrise satt sammen av andrederiverte", "tallet $2t+3t^2$, altså summen av de to deriverte"],
      explanation: "Med én inn-variabel er $F'$ en $2\\times1$-søyle: fartsvektoren (tangenten) til kurven.",
    },
    {
      question: "For en lineæravbildning $F(x)=Ax$ er Jacobi-matrisen $F'$",
      options: ["lik $A$ i ethvert punkt, altså konstant over hele rommet", "lik den inverse $A^{-1}$ i ethvert punkt i rommet", "lik $A$ bare i origo og noe annet ellers", "lik determinanten $\\det A$ som ett enkelt tall"],
      explanation: "En lineær $F$ har konstant derivert; $F'=A$ overalt, jf. standardmatrisen fra kap. 1.4.",
    },
    {
      question: "Kjerneregelens komponentform $\\frac{\\partial h}{\\partial x_j}=\\sum_i\\frac{\\partial g}{\\partial y_i}\\frac{\\partial F_i}{\\partial x_j}$ er",
      options: ["nettopp elementene i matriseproduktet $G'(F)\\,F'$", "en helt annen regel enn kjerneregelen på matriseform", "bare gyldig i det spesialtilfellet at $F$ er lineær", "summen av determinantene til de to matrisene $G'$ og $F'$"],
      explanation: "Komponentformen er matriseproduktet skrevet ut ledd for ledd; det er samme regel.",
    },
    {
      question: "$\\det F'(a)\\ne0$ gir lokal invers, men $F$ kan mangle global invers. Et eksempel er",
      options: ["$F(x,y)=(e^x\\cos y,\\ e^x\\sin y)$ — periodisk i $y$", "$F(x,y)=(x,\\ y)$, identitetsavbildningen på hele planet", "$F(x,y)=(2x,\\ 3y)$, en ren skalering langs aksene", "$F(x,y)=(x+1,\\ y+1)$, en ren forskyvning av planet"],
      explanation: "Polaravbildningen har $\\det F'=e^{2x}>0$ overalt, men er periodisk i $y$ — lokal, ikke global, invers.",
    },
  ],
  'mat1110-2-3': [
    {
      question: "Hva er forutsetningen i omvendt funksjonsteorem?",
      options: ["At $F$ er $C^1$ og $F'(a)$ er inverterbar ($\\det F'(a)\\ne0$)", "At $F$ er $C^1$ og Jacobi-matrisen $F'(a)$ er lik nullmatrisen i punktet", "At $F$ er kontinuerlig og bildet $F(a)$ ligger nær origo i planet", "At alle de partiellderiverte til $F$ er positive i selve punktet $a$"],
      explanation: "Er $F$ glatt og $\\det F'(a)\\ne0$, finnes en glatt lokal invers nær $a$.",
    },
    {
      question: "Jacobi-matrisen til den omvendte $G$ er, ifølge omvendt funksjonsteorem,",
      options: ["$G'(F(a))=F'(a)^{-1}$ — den inverse av Jacobi-matrisen", "$G'(F(a))=F'(a)^{T}$ — den transponerte av Jacobi-matrisen", "$G'(F(a))=-F'(a)$ — Jacobi-matrisen med byttet fortegn", "$G'(F(a))=\\det F'(a)$ — determinanten som ett enkelt tall"],
      explanation: "Den deriverte til inversen er den inverse matrisen av $F'(a)$.",
    },
    {
      question: "I hvilket punkt evalueres $G'$ i formelen $G'(F(a))=F'(a)^{-1}$?",
      options: ["I bildepunktet $F(a)$, altså der $F$ sender $a$ hen", "I startpunktet $a$, altså der man setter inn fra starten", "I origo, uansett hvor punktet $a$ ligger", "I punktet $F'(a)$, altså i selve Jacobi-matrisen"],
      explanation: "Inversen $G$ virker på utdata fra $F$, så $G'$ tas i $F(a)$.",
    },
    {
      question: "Hva må sjekkes FØRST i implisitt funksjonsteorem for $f(x,y)=0$?",
      options: ["At punktet ligger på kurven, altså at $f(a,b)=0$", "At den deriverte $g'$ blir et helt tall i punktet", "At $\\partial f/\\partial x(a,b)\\ne0$ i det aktuelle punktet", "At funksjonen $f$ er et polynom i begge variablene"],
      explanation: "Rekkefølgen er $f(a,b)=0$ først, deretter $\\partial f/\\partial y\\ne0$.",
    },
    {
      question: "Hvilken betingelse tillater at $y=g(x)$ nær $(a,b)$ i implisitt funksjonsteorem?",
      options: ["At $\\partial f/\\partial y(a,b)\\ne0$", "At $\\partial f/\\partial x(a,b)\\ne0$", "At $\\partial f/\\partial y(a,b)=0$ nøyaktig", "At $f_{xy}(a,b)\\ne0$ i punktet"],
      explanation: "$\\partial f/\\partial y\\ne0$ sikrer at tangenten ikke er loddrett, så $y$ er en funksjon av $x$.",
    },
    {
      question: "Den implisitte derivasjonsformelen er",
      options: ["$g'(a)=-\\dfrac{\\partial f/\\partial x}{\\partial f/\\partial y}$", "$g'(a)=+\\dfrac{\\partial f/\\partial x}{\\partial f/\\partial y}$", "$g'(a)=-\\dfrac{\\partial f/\\partial y}{\\partial f/\\partial x}$", "$g'(a)=\\dfrac{\\partial f}{\\partial x}\\cdot\\dfrac{\\partial f}{\\partial y}$"],
      explanation: "Deriver $f(x,g(x))=0$ med kjerneregelen og løs for $g'$; minustegnet følger.",
    },
    {
      question: "Hvorfor står det et minustegn i $g'=-\\dfrac{\\partial_x f}{\\partial_y f}$?",
      options: ["Det følger av kjerneregelen på $f(x,g(x))=0$", "Det er en ren konvensjon uten matematisk grunn", "Fordi $g$ alltid er en avtagende funksjon av $x$", "Fordi nevneren $\\partial_y f$ alltid er negativ"],
      explanation: "Å derivere $f(x,g(x))=0$ gir $\\partial_x f+\\partial_y f\\,g'=0$, altså $g'=-\\partial_x f/\\partial_y f$.",
    },
    {
      question: "For en flate $F(x,y,z)=0$ som gir $z=g(x,y)$, er $g_x$ lik",
      options: ["$-\\dfrac{\\partial F/\\partial x}{\\partial F/\\partial z}$", "$-\\dfrac{\\partial F/\\partial z}{\\partial F/\\partial x}$", "$+\\dfrac{\\partial F/\\partial x}{\\partial F/\\partial z}$", "$\\dfrac{\\partial F}{\\partial x}\\cdot\\dfrac{\\partial F}{\\partial z}$"],
      explanation: "Samme mønster som én variabel: deriver mhp. $x$, del på $\\partial F/\\partial z$, sett minus foran.",
    },
    {
      question: "Hvilken betingelse trengs for at $F(x,y,z)=0$ skal gi $z=g(x,y)$ nær et punkt?",
      options: ["At $\\partial F/\\partial z\\ne0$ i punktet", "At $\\partial F/\\partial x\\ne0$ i punktet", "At $\\partial F/\\partial z=0$ nøyaktig i punktet", "At alle andrederiverte er positive der"],
      explanation: "$z$ kan løses ut når den partiellderiverte mhp. $z$ er ulik null i punktet.",
    },
    {
      question: "I systemversjonen $F(x,y)=0$ (med $y$ ukjent) kreves at",
      options: ["Jacobi-blokken $\\partial F/\\partial y$ er inverterbar", "hele Jacobi-matrisen $F'$ er lik nullmatrisen", "antallet likninger er større enn antall ukjente", "alle komponentene i $F$ er lineære funksjoner"],
      explanation: "$\\det(\\partial F/\\partial y)\\ne0$ lar systemet løses for de ukjente $y=g(x)$.",
    },
    {
      question: "Et «regulært punkt» for $F$ er et punkt der",
      options: ["$\\det F'(a)\\ne0$ (Jacobi er inverterbar)", "$\\det F'(a)=0$ (Jacobi-matrisen er singulær)", "gradienten til hver komponent er null", "avbildningen $F$ er lik identiteten"],
      explanation: "Regulært = inverterbar Jacobi; det er nettopp forutsetningen i omvendt funksjonsteorem.",
    },
    {
      question: "Hva GIR funksjonsteoremene deg egentlig?",
      options: ["Eksistens av en glatt funksjon og dens deriverte, ikke lukket form", "Funksjonen skrevet ut i en ferdig lukket algebraisk formel", "En numerisk tilnærming til alle funksjonsverdiene samtidig", "En garanti for at funksjonen er global på hele planet"],
      explanation: "De er eksistensteoremer: de gir at $g$ finnes og er glatt, pluss $g'$ i punktet.",
    },
    {
      question: "$\\det F'(a)\\ne0$ garanterer en invers som er",
      options: ["lokal — bare i en omegn om $a$", "global — på hele definisjonsområdet til $F$", "lineær — en avbildning på formen $x\\mapsto Ax$", "konstant — den samme verdien overalt"],
      explanation: "Teoremet gir en lokal invers; $F$ kan treffe samme verdi andre steder globalt.",
    },
    {
      question: "Hva bør du gjøre når et omvendt-oppgave-delpunkt trenger en invers du alt har regnet?",
      options: ["Gjenbruke inversen fra forrige delpunkt", "Regne hele inversen på nytt for å være sikker på svaret", "Bytte til en helt annen metode enn den forrige delpunkt brukte", "Transponere den gamle inversen før du bruker den videre"],
      explanation: "Delpunktene er kjedet med vilje; å gjenbruke inversen viser at du så koblingen (konte O1a$\\to$O1b).",
    },
    {
      question: "Hvis $\\partial f/\\partial y(a,b)=0$ i implisitt funksjonsteorem, kan du i stedet",
      options: ["prøve $x=h(y)$ og sjekke om $\\partial f/\\partial x(a,b)\\ne0$", "konkludere at kurven ikke finnes i nærheten av punktet", "sette $g'(a)=0$ og regne videre uten flere sjekker", "dele på $\\partial f/\\partial y$ likevel og ta grensen"],
      explanation: "Er tangenten loddrett, kan $x$ i stedet være funksjon av $y$ — sjekk $\\partial f/\\partial x\\ne0$.",
    },
    {
      question: "Hva er den vanligste enkeltfeilen i sjanger D (funksjonsteoremer)?",
      options: ["Å glemme minustegnet i $g'=-\\partial_x f/\\partial_y f$", "Å bruke for stor skrift i selve utregningen", "Å regne gradienten i stedet for funksjonsverdien", "Å transponere en $2\\times2$-matrise ved en feil"],
      explanation: "Minustegnet fra kjerneregelen er lett å miste; det snur fortegnet på $g'$.",
    },
    {
      question: "For $F(x,y)=(x+y,\\ x^2+y^2)$ i $(1,2)$ er $\\det F'(1,2)$ lik",
      options: ["$2$, så $F$ er lokalt inverterbar der", "$0$, så $F$ er singulær i punktet", "$6$, så $F$ er lokalt inverterbar der", "$-2$, så $F$ er singulær i punktet"],
      explanation: "$F'(1,2)=\\begin{pmatrix}1&1\\\\ 2&4\\end{pmatrix}$ har $\\det=4-2=2\\ne0$.",
    },
    {
      question: "Når du bruker omvendt/implisitt funksjonsteorem, bør du i besvarelsen",
      options: ["navngi teoremet der eksistensen bæres", "utelate navnet og bare vise regningen på $g'$", "bevise teoremet fra grunnen hver gang du bruker det", "erstatte teoremet med en numerisk tilnærming"],
      explanation: "Sensor gir uttelling for «ifølge implisitt/omvendt funksjonsteorem …» der eksistensen begrunnes.",
    },
    {
      question: "En glatt avbildning med glatt invers kalles",
      options: ["en diffeomorfi (lokal når $\\det F'\\ne0$)", "en isometri (bevarer alle avstander)", "en projeksjon (kollapser en dimensjon)", "en translasjon (ren forskyvning)"],
      explanation: "$C^1$ og $\\det F'(a)\\ne0$ gir en lokal diffeomorfi; glattheten arves av inversen.",
    },
    {
      question: "Sammenhengen mellom versjonene av teoremet er at determinantbetingelsen alltid sier",
      options: ["at den relevante Jacobi-matrisen må være inverterbar", "at funksjonen må være et polynom av lav grad", "at antall variabler må være likt i inn og ut", "at gradienten må peke i positiv $x$-retning"],
      explanation: "Én likning, flate, system og omvendt er samme idé: den lineære tilnærmingen må være inverterbar.",
    },
  ],
  'mat1110-3-1': [
    {
      question: "Når er $(a,b)$ et stasjonært punkt for $f(x,y)$?",
      options: ["Når $\\nabla f(a,b) = (0,0)$, altså $f_x = f_y = 0$ der", "Når $f(a,b) = 0$ i selve punktet", "Når $f_{xx}(a,b) = f_{yy}(a,b) = 0$ der", "Når $\\nabla f(a,b)$ peker rett oppover langs $z$"],
      explanation: "Et stasjonært punkt er der begge partiellderiverte er null samtidig — gradienten er nullvektoren.",
    },
    {
      question: "Hva er den vanligste feilen når man løser $\\nabla f = 0$ ved substitusjon?",
      options: ["Å dele på en variabel og dermed miste løsningen der den er null", "Å bytte om rekkefølgen på de to likningene i systemet før man løser", "Å sette $f_{xy}$ lik null før man deriverer", "Å regne gradienten med feil fortegn hele veien"],
      explanation: "Deler du på $x$ i stedet for å faktorisere $x(x^3-27)=0$, mister du løsningen $x=0$.",
    },
    {
      question: "Hvordan ser Hesse-matrisen til $f(x,y)$ ut?",
      options: ["$\\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy}\\end{pmatrix}$", "$\\begin{pmatrix} f_x & f_y \\\\ f_y & f_x\\end{pmatrix}$", "$\\begin{pmatrix} f_{xx} & f_{yy} \\\\ f_{xy} & f_{yx}\\end{pmatrix}$", "$\\begin{pmatrix} f_x & f_{xx} \\\\ f_y & f_{yy}\\end{pmatrix}$"],
      explanation: "Hesse-matrisen består av de andreordens partiellderiverte, symmetrisk fordi $f_{xy}=f_{yx}$.",
    },
    {
      question: "Hva er diskriminanten $D$ i annenderiverttesten?",
      options: ["$D = f_{xx}f_{yy} - f_{xy}^2$", "$D = f_{xx}f_{yy} + f_{xy}^2$", "$D = f_{xx} + f_{yy} - f_{xy}$", "$D = f_{xx}^2 - f_{yy}^2$"],
      explanation: "$D$ er determinanten til Hesse-matrisen: $f_{xx}f_{yy}-f_{xy}^2$ (formelsamlingens $AC-B^2$).",
    },
    {
      question: "Hva konkluderer du når $D < 0$ i et stasjonært punkt?",
      options: ["Punktet er et sadelpunkt, uansett fortegnet til $f_{xx}$", "Punktet er et lokalt minimum hvis $f_{xx}>0$", "Punktet er et lokalt maksimum hvis $f_{xx}<0$", "Testen er inkonklusiv og kan verken bekrefte eller avkrefte noen type"],
      explanation: "$D<0$ gir alltid sadelpunkt; fortegnet til $f_{xx}$ spiller ingen rolle da.",
    },
    {
      question: "Hva kjennetegner et lokalt minimum i annenderiverttesten?",
      options: ["$D > 0$ og $f_{xx} > 0$", "$D > 0$ og $f_{xx} < 0$", "$D < 0$ og $f_{xx} > 0$", "$D = 0$ og $f_{yy} > 0$"],
      explanation: "Positiv $D$ betyr ekstremum; positiv $f_{xx}$ betyr at det bøyer oppover — et minimum.",
    },
    {
      question: "Hva kjennetegner et lokalt maksimum i annenderiverttesten?",
      options: ["$D > 0$ og $f_{xx} < 0$", "$D > 0$ og $f_{xx} > 0$", "$D < 0$ og $f_{xx} < 0$", "$D = 0$ og $f_{xx} < 0$"],
      explanation: "Positiv $D$ gir ekstremum; negativ $f_{xx}$ (bøyer nedover) gir et maksimum.",
    },
    {
      question: "Hva betyr det at $D = 0$ i et stasjonært punkt?",
      options: ["Annenderiverttesten svikter og avgjør ingenting", "Punktet er automatisk et sadelpunkt", "Punktet er et minimum siden $D$ ikke er negativ", "Gradienten er ikke null i punktet likevel"],
      explanation: "$D=0$ er inkonklusivt; du må undersøke funksjonsverdiene direkte.",
    },
    {
      question: "For $f(x,y) = x^3 + y^3 - 9xy$ er $(0,0)$ stasjonært. Hva slags punkt er det?",
      options: ["Sadelpunkt, siden $D = 36\\cdot 0 - 81 = -81 < 0$", "Lokalt minimum, siden $f_{xx} = 0$", "Lokalt maksimum, siden $f_{xy} = -9 < 0$", "Inkonklusivt, siden $f_{xx} = f_{yy} = 0$"],
      explanation: "$H=\\begin{pmatrix}0&-9\\\\-9&0\\end{pmatrix}$ gir $D=-81<0$, altså sadelpunkt.",
    },
    {
      question: "Hvorfor er Hesse-matrisen alltid symmetrisk?",
      options: ["Fordi $f_{xy} = f_{yx}$ (Clairauts setning)", "Fordi determinanten $D$ alltid er positiv", "Fordi $f_{xx}$ alltid er lik $f_{yy}$", "Fordi gradienten er null i stasjonære punkter"],
      explanation: "De blandede partiellderiverte er like når de er kontinuerlige, så matrisen speiler seg om diagonalen.",
    },
    {
      question: "Hva krever sensor før du konkluderer med hva slags punkt et stasjonært punkt er?",
      options: ["At Hesse-matrisen settes opp eksplisitt i punktet", "At du regner ut funksjonsverdien først", "At du tegner en graf av funksjonen", "At du sjekker om $\\nabla f$ er en enhetsvektor"],
      explanation: "«Begrunn alle svar»: klassifisering uten synlig Hesse/annenderivert-test gir ikke full uttelling.",
    },
    {
      question: "Et stasjonært punkt har $H = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2\\end{pmatrix}$. Hvilken type er det?",
      options: ["Lokalt minimum, siden $D = 3 > 0$ og $f_{xx} = 2 > 0$", "Lokalt maksimum, fordi begge diagonalelementene i matrisen er positive tall", "Sadelpunkt, siden $f_{xy} = 1 \\ne 0$", "Inkonklusivt, siden $D = 3$ ikke er null"],
      explanation: "$D = 4-1 = 3 > 0$ med $f_{xx}=2>0$ gir lokalt minimum.",
    },
    {
      question: "Hvorfor holder det ikke å bruke bare $D$ for å skille minimum fra maksimum?",
      options: ["Fordi $D > 0$ dekker begge; fortegnet til $f_{xx}$ avgjør hvilket", "Fordi $D$ ikke sier noe om stasjonære punkter", "Fordi $D$ bare gjelder for sadelpunkter", "Fordi $D$ endrer fortegn hver gang man bytter om variablene $x$ og $y$ i regningen"],
      explanation: "Både min og maks har $D>0$; det er $f_{xx}$ (eller $f_{yy}$) som skiller dem.",
    },
    {
      question: "Funksjonene $x^4+y^4$ og $x^4-y^4$ har begge $D=0$ i origo. Hva viser det?",
      options: ["At $D=0$ er ekte inkonklusivt — samme $D$, men min for den ene og sadel for den andre", "At begge har et lokalt minimum i origo", "At $D=0$ alltid betyr et sadelpunkt", "At origo verken er stasjonært eller kritisk punkt for noen av de to funksjonene"],
      explanation: "$x^4+y^4\\ge 0$ (min), mens $x^4-y^4$ skifter fortegn (sadel) — $D=0$ avgjør ingenting.",
    },
    {
      question: "Hva er forskjellen på et lokalt og et globalt ekstremum?",
      options: ["Lokalt gjelder bare en liten omegn; globalt gjelder hele definisjonsområdet", "Lokalt gjelder maksimum, globalt gjelder minimum", "Lokalt krever $D>0$, globalt krever $D<0$", "Det er ingen reell forskjell på lokalt og globalt for glatte, deriverbare funksjoner"],
      explanation: "Annenderiverttesten gir bare lokal informasjon; globale ekstremum krever et eget argument.",
    },
    {
      question: "For $f(x,y)=x^3-3x+y^3-3y$ er $(-1,-1)$ stasjonært med $H=\\begin{pmatrix}-6&0\\\\0&-6\\end{pmatrix}$. Type?",
      options: ["Lokalt maksimum, siden $D = 36 > 0$ og $f_{xx} = -6 < 0$", "Lokalt minimum, siden $D = 36 > 0$", "Sadelpunkt, siden begge diagonalelementene er negative", "Inkonklusivt, siden $f_{xy} = 0$"],
      explanation: "$D=(-6)(-6)-0=36>0$ og $f_{xx}=-6<0$ gir lokalt maksimum.",
    },
    {
      question: "Hva er en fornuftig måte å håndtere $D=0$ på?",
      options: ["Undersøke fortegnet til $f(x,y)-f(a,b)$ langs ulike retninger", "Konkludere med minimum hvis $f_{xx}>0$", "Regne $D$ på nytt med byttet rekkefølge på variablene", "Anta at det er et sadelpunkt fordi annenderiverttesten mislyktes med å avgjøre typen"],
      explanation: "Testen gjelder ikke, så du må se direkte på hvordan funksjonen oppfører seg rundt punktet.",
    },
    {
      question: "Hvordan finner du de stasjonære punktene til $f(x,y)=x^2+y^2-4x+6y+3$?",
      options: ["Løs $2x-4=0$ og $2y+6=0$ hver for seg, som gir $(2,-3)$", "Løs $2x+6=0$ og $2y-4=0$, som gir $(-3,2)$", "Sett $x^2+y^2=0$, som gir bare origo", "Regne ut hele Hesse-matrisen og sette determinanten $D$ lik null for å finne punktene"],
      explanation: "$f_x=2x-4$ og $f_y=2y+6$ er adskilte; nullpunktene gir $x=2,\\ y=-3$.",
    },
    {
      question: "Hva forteller $f_{xx}(a,b) > 0$ geometrisk i et stasjonært punkt med $D>0$?",
      options: ["At flaten bøyer oppover som en dal — punktet er en bunn", "At flaten bøyer nedover som en kuppel", "At tangentplanet heller mot høyre", "At gradienten peker rett oppover langs $z$-aksen i det aktuelle stasjonære punktet"],
      explanation: "Positiv $f_{xx}$ betyr oppoverkrumming; med $D>0$ er punktet et lokalt minimum.",
    },
    {
      question: "Når $f(x,y)=x^2+axy+4y^2$, for hvilke $a$ er origo et sadelpunkt?",
      options: ["Når $|a| > 4$, siden $D = 16 - a^2 < 0$ da", "Når $|a| < 4$, siden $D > 0$ da", "Når $a = 0$, siden leddet $axy$ forsvinner", "Aldri, siden $f_{xx} = 2 > 0$ uansett"],
      explanation: "$H=\\begin{pmatrix}2&a\\\\a&8\\end{pmatrix}$, $D=16-a^2$; sadel krever $D<0$, altså $|a|>4$.",
    },
  ],
  'mat1110-3-2': [
    {
      question: "Hva er Lagranges betingelse for et betinget ekstremum (der $\\nabla g \\ne 0$)?",
      options: ["$\\nabla f = \\lambda\\nabla g$ sammen med bibetingelsen $g = c$", "$\\nabla f = 0$ sammen med bibetingelsen $g = c$, akkurat som i fri optimering", "$\\nabla f = \\nabla g$ uten noen multiplikator", "$\\nabla f \\cdot \\nabla g = 0$ i ekstremalpunktet"],
      explanation: "I et betinget ekstremum er gradientene parallelle: $\\nabla f = \\lambda\\nabla g$, med $g=c$ i tillegg.",
    },
    {
      question: "Hva er det første steget når du optimerer $f$ under en bibetingelse $g = c$?",
      options: ["Sjekke om noen punkter på bibetingelsen har $\\nabla g = 0$", "Regne ut Hesse-matrisen til $f$ i alle punkter", "Sette $\\nabla f = 0$ og løse for de frie variablene", "Tegne nivåkurvene til $f$ og finne toppene"],
      explanation: "$\\nabla g = 0$-sjekken kommer først, fordi Lagrange forutsetter $\\nabla g \\ne 0$.",
    },
    {
      question: "Hva gjør du hvis et punkt med $\\nabla g = 0$ ligger på bibetingelsen?",
      options: ["Legger det til som en ekstra kandidat og evaluerer $f$ der direkte", "Forkaster det, siden Lagrange ikke gjelder der", "Konkluderer straks at det er et maksimum", "Setter $\\lambda = 0$ og løser Lagrange-likningssystemet på nytt fra begynnelsen"],
      explanation: "Der svikter Lagrange-argumentet, så punktet må testes direkte som ekstra kandidat.",
    },
    {
      question: "Hvorfor gjør man tilfelledeling i stedet for å dele på en variabel?",
      options: ["For ikke å miste grenen der variabelen er null", "For å slippe å regne ut bibetingelsen", "Fordi $\\lambda$ ellers blir negativ", "Fordi Hesse-matrisen krever det"],
      explanation: "Deler du på $x$ i $x(y-\\lambda)=0$, mister du løsningen $x=0$; del i tilfeller i stedet.",
    },
    {
      question: "Hva må du gjøre med $f$ i alle kandidatpunktene før du konkluderer?",
      options: ["Evaluere $f$ i hvert og sammenligne verdiene", "Regne Hesse-matrisen i hvert punkt", "Sjekke fortegnet til $\\lambda$ i hvert punkt", "Kontrollere at $\\nabla g = 0$ i hvert punkt"],
      explanation: "Min og maks leses av ved å sammenligne $f$-verdiene i alle kandidater.",
    },
    {
      question: "Hva sier ekstremalverdisetningen?",
      options: ["En kontinuerlig funksjon på en kompakt mengde antar både største og minste verdi", "En deriverbar funksjon har alltid et stasjonært punkt", "En begrenset funksjon er alltid kontinuerlig", "En funksjon som er begrenset på et åpent område har alltid et veldefinert maksimum"],
      explanation: "Kontinuitet + kompakthet garanterer at både maksimum og minimum finnes.",
    },
    {
      question: "Hva betyr det at en mengde er kompakt?",
      options: ["At den er både lukket og begrenset", "At den er lukket, men ikke nødvendigvis begrenset", "At den er begrenset, men ikke nødvendigvis lukket", "At den er sammenhengende og glatt"],
      explanation: "Kompakt = lukket og begrenset samtidig; det er nettopp det ekstremalverdisetningen krever.",
    },
    {
      question: "Hvilken av disse mengdene er IKKE kompakt?",
      options: ["Planet $x + y + z = 6$", "Sirkelen $x^2 + y^2 = 8$", "Den fylte skiven $x^2 + y^2 \\le 4$", "Kuleflaten $x^2 + y^2 + z^2 = 1$"],
      explanation: "Et plan er lukket, men ikke begrenset — derfor ikke kompakt.",
    },
    {
      question: "For $f = xy$ på $x^2 + y^2 = 8$: hva er største verdi?",
      options: ["$4$, antatt i $(2,2)$ og $(-2,-2)$", "$8$, antatt i $(2\\sqrt2, 0)$", "$-4$, antatt i $(2,-2)$", "$2$, antatt i $(2,1)$"],
      explanation: "Lagrange gir $y=\\pm x$; med $x=y=\\pm 2$ blir $f=4$, som er maksimum.",
    },
    {
      question: "Hvorfor kan et maksimum mangle når bibetingelsen ikke er kompakt?",
      options: ["Fordi $f$ kan vokse uten grense når området er ubegrenset", "Fordi Lagrange-likningene da ikke har løsninger", "Fordi gradienten $\\nabla g$ automatisk blir nullvektoren på alle ubegrensede mengder", "Fordi kontinuitet svikter på ubegrensede mengder"],
      explanation: "På et plan eller en hyperbel kan $f\\to\\infty$, så noen største verdi finnes ikke.",
    },
    {
      question: "Hva er den geometriske tolkningen av $\\nabla f = \\lambda\\nabla g$?",
      options: ["Nivåkurvene til $f$ og $g$ tangerer hverandre i ekstremalpunktet", "Nivåkurvene til $f$ og $g$ står vinkelrett på hverandre", "Gradienten $\\nabla f$ er nullvektoren i punktet", "Bibetingelsen $g = c$ er en helt rett linje, og $f$ er konstant langs hele denne"],
      explanation: "Parallelle gradienter betyr at nivåkurvene tangerer — ekstremal-signaturen på en bibetingelse.",
    },
    {
      question: "Hva står $\\nabla g$ alltid normalt på?",
      options: ["Nivåkurven $g = c$ gjennom punktet", "Gradienten $\\nabla f$ i samme punkt", "Tangentplanet til grafen av $f$", "$x$-aksen i koordinatsystemet"],
      explanation: "Gradienten peker vinkelrett på nivåkurven; det er hele grunnlaget for Lagranges metode.",
    },
    {
      question: "Når trenger du IKKE å begrunne eksistens av ekstremum eksplisitt?",
      options: ["Når oppgaven bare ber om å finne kandidatpunktene eller eksistensen er opplagt", "Når bibetingelsen er ubegrenset", "Når $\\nabla g = 0$ et sted på kurven", "Når det finnes flere enn to kandidatpunkter å sammenligne funksjonsverdiene mellom"],
      explanation: "Les oppgaven: er eksistens ikke etterspurt eller åpenbar, er kompakthetsargumentet bortkastet tid.",
    },
    {
      question: "Hvordan kan du garantere et minimum når bibetingelsen $g = c$ er ubegrenset?",
      options: ["Skjære med en sublevel-mengde: $K = \\{g = c,\\ f \\le M\\}$ er kompakt", "Sette $\\lambda = 0$ og løse på nytt", "Anta at minimum ligger i origo", "Bytte helt til fri optimering og bare sette $\\nabla f = 0$ uten noen bibetingelse"],
      explanation: "$K=\\{g=c,\\ f\\le M\\}$ er lukket og begrenset; utenfor er $f>M$, så minimum ligger i $K$.",
    },
    {
      question: "For å minimere avstanden $\\sqrt{x^2+y^2}$ fra origo, hva gjør man i praksis?",
      options: ["Minimerer den kvadrerte avstanden $x^2 + y^2$ i stedet", "Minimerer $x + y$ i stedet", "Deriverer kvadratrota direkte med kjerneregelen", "Setter $x = y$ fra starten av"],
      explanation: "Kvadratrot er voksende, så $\\sqrt{\\cdot}$ og dens kvadrat har ekstremum i samme punkt; kvadratet er enklere.",
    },
    {
      question: "Hva er et singulært punkt på bibetingelsen?",
      options: ["Et punkt på $g = c$ der $\\nabla g = 0$ — typisk en spiss eller selvskjæring", "Et punkt der $f$ ikke er definert", "Et punkt der $\\lambda = 0$ i Lagrange-likningene", "Et punkt som ligger helt utenfor bibetingelsen, men der gradienten $\\nabla f = 0$"],
      explanation: "Der $\\nabla g = 0$ har kurven ingen entydig tangent, så Lagrange-argumentet bryter sammen.",
    },
    {
      question: "Hva er en gyldig alternativ metode til Lagrange når bibetingelsen er enkel?",
      options: ["Sette bibetingelsen inn i $f$ og optimere en-variabel-funksjonen direkte", "Regne Hesse-matrisen til $g$ i stedet for til $f$", "Sette $\\nabla f = 0$ og ignorere bibetingelsen", "Bytte ut Lagrangemultiplikatoren $\\lambda$ med tallet 1 overalt i alle likningene"],
      explanation: "Kan du løse $g=c$ for én variabel, gir innsetting en ren en-variabel-oppgave — fasiten honorerer det.",
    },
    {
      question: "For $f = x^2 y$ på $x^2 + y^2 = 3$ gir tilfellet $x = 0$ hvilke kandidater?",
      options: ["$(0, \\sqrt3)$ og $(0, -\\sqrt3)$, begge med $f = 0$", "$(\\sqrt3, 0)$ og $(-\\sqrt3, 0)$, begge med $f = 3$", "Bare origo $(0,0)$ med $f = 0$", "Ingen kandidater, siden $x=0$ er forbudt"],
      explanation: "$x=0$ i bibetingelsen gir $y^2=3$, altså $(0,\\pm\\sqrt3)$ med $f=x^2y=0$.",
    },
    {
      question: "Hva er Lagrangemultiplikatoren $\\lambda$ først og fremst i praktisk regning?",
      options: ["En hjelpevariabel som elimineres for å finne kandidatpunktene", "Selve maksimalverdien til $f$ på bibetingelsen", "Determinanten til Hesse-matrisen", "Avstanden fra origo og rett bort til det nærmeste punktet på hele bibetingelsen"],
      explanation: "$\\lambda$ er en hjelpestørrelse; man eliminerer den (deler eller ganger likningene) for å få punktene.",
    },
    {
      question: "Hvorfor trenger et betinget ekstremum vanligvis IKKE $\\nabla f = 0$?",
      options: ["Fordi vi bare er låst til kurven, så det holder at $f$ ikke vokser langs den", "Fordi $\\nabla f$ alltid er null på en bibetingelse", "Fordi bibetingelsen fjerner alle stasjonære punkter", "Fordi Lagrangemultiplikatoren $\\lambda$ tvinger hele gradienten $\\nabla f$ til å bli null"],
      explanation: "På kurven kreves bare $\\nabla f \\parallel \\nabla g$ (ingen komponent langs kurven), ikke $\\nabla f = 0$.",
    },
  ],
  'mat1110-3-3': [
    {
      question: "Hva er andreordens Taylor-polynom til $f$ rundt $a$ i to variable?",
      options: ["$f(a) + \\nabla f(a)\\cdot h + \\tfrac12\\, h^T H(a)\\, h$", "$f(a) + \\nabla f(a)\\cdot h + h^T H(a)\\, h$", "$f(a) + H(a)\\cdot h + \\tfrac12\\,\\nabla f(a)\\cdot h$", "$\\nabla f(a)\\cdot h + \\tfrac12\\, h^T H(a)\\, h$"],
      explanation: "Konstant + gradientledd + Hesse-ledd med faktor $\\tfrac12$ — flervariabel-analogen til $f(a)+f'(a)h+\\tfrac12 f''(a)h^2$.",
    },
    {
      question: "Hva blir andreordensleddet utskrevet i to variable?",
      options: ["$\\tfrac12(f_{xx}h_1^2 + 2 f_{xy}h_1 h_2 + f_{yy}h_2^2)$", "$\\tfrac12(f_{xx}h_1^2 + f_{xy}h_1 h_2 + f_{yy}h_2^2)$", "$f_{xx}h_1^2 + f_{xy}h_1 h_2 + f_{yy}h_2^2$ uten noen faktor $\\tfrac12$ foran uttrykket", "$\\tfrac12(f_{xx}h_1 + f_{xy}h_2 + f_{yy})$"],
      explanation: "Den kvadratiske formen har faktor $\\tfrac12$ foran og faktor $2$ på det blandede leddet (fordi $H$ er symmetrisk).",
    },
    {
      question: "Hvor skal gradienten og Hesse-matrisen evalueres i Taylor-formelen?",
      options: ["I utviklingspunktet $a$", "I punktet $(x,y)$ vi tilnærmer i", "I origo, uansett utviklingspunkt", "I et stasjonært punkt til $f$"],
      explanation: "Alle deriverte regnes i utviklingspunktet $a$ — det er der tilnærmingen forankres.",
    },
    {
      question: "Hva skjer med Taylor-utviklingen i et stasjonært punkt?",
      options: ["Førsteordensleddet forsvinner, og bare $f(a) + \\tfrac12 h^T H h$ står igjen", "Andreordensleddet forsvinner, og bare tangentplanet står igjen", "Hele polynomet blir null", "Restleddet i utviklingen blir eksakt lik null i akkurat det stasjonære punktet"],
      explanation: "Siden $\\nabla f(a)=0$, faller gradientleddet bort, og Hesse-leddet bestemmer punkttypen.",
    },
    {
      question: "Hva er den vanligste regnefeilen i andreordens Taylor?",
      options: ["Å glemme faktoren $\\tfrac12$ på andreordensleddet", "Å bruke gradienten i stedet for Hesse-matrisen", "Å regne førsteordensleddet med feil fortegn", "Å utvikle funksjonen rundt feil variabel i stedet for rundt utviklingspunktet $a$"],
      explanation: "Faktoren $\\tfrac12$ arves fra $\\tfrac12 f''(a)(x-a)^2$ og glemmes ofte.",
    },
    {
      question: "For $f(x,y) = e^x\\cos y$ rundt $(0,0)$, hva er Taylor-polynomet?",
      options: ["$1 + x + \\tfrac12 x^2 - \\tfrac12 y^2$", "$1 + x + \\tfrac12 x^2 + \\tfrac12 y^2$", "$1 + x - \\tfrac12 x^2 - \\tfrac12 y^2$", "$x + \\tfrac12 x^2 - \\tfrac12 y^2$"],
      explanation: "$f(0,0)=1$, $\\nabla f=(1,0)$, $H=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ gir $1+x+\\tfrac12 x^2-\\tfrac12 y^2$.",
    },
    {
      question: "Hva forteller Hesse-leddet i et stasjonært punkt om punkttypen?",
      options: ["Er den kvadratiske formen alltid positiv, er punktet et minimum; skifter den fortegn, et sadelpunkt", "Er gradientleddet positivt, er punktet et maksimum", "Punktet er alltid et sadelpunkt uansett fortegn", "Hesse-leddet sier ingenting om typen; man må alltid gå tilbake og bruke gradienten i stedet"],
      explanation: "Fortegnsanalysen av $h^T H h$ er nettopp annenderiverttesten fra kap. 3.1.",
    },
    {
      question: "Hvorfor er Taylor-polynomet bare en god tilnærming nær utviklingspunktet?",
      options: ["Fordi restleddet vokser når $|h|$ øker", "Fordi gradienten endrer fortegn langt unna", "Fordi Hesse-matrisen ikke er definert langt unna", "Fordi polynomet er eksakt bare i origo"],
      explanation: "Restleddet går mot null raskere enn $|h|^2$ når $h\\to 0$, men vokser når du fjerner deg fra $a$.",
    },
    {
      question: "Hvis $f$ er et andregradspolynom, hva er andreordens Taylor-polynom rundt et punkt?",
      options: ["Eksakt lik $f$ selv, uten restledd", "En tilnærming med et lite restledd", "Bare den lineære delen av $f$", "Alltid null i utviklingspunktet"],
      explanation: "Et polynom av grad $\\le 2$ har ingen høyereordens ledd, så $P_2 = f$ eksakt.",
    },
    {
      question: "Hva er førsteordens (lineære) Taylor-tilnærming også kjent som?",
      options: ["Lineariseringen / tangentplanet fra kap. 2.1", "Hesse-leddet fra kap. 3.1", "Den kvadratiske formen $h^T H h$", "Restleddet i Taylor-formelen, altså feilen mellom polynomet og selve funksjonen"],
      explanation: "$f(a)+\\nabla f(a)\\cdot h$ er nettopp tangentplanet — den beste lineære tilnærmingen.",
    },
  ],
  'mat1110-3-4': [
    {
      question: "Hvordan avgjør du hvilken optimeringsalgoritme en oppgave krever?",
      options: ["Se om det er en bibetingelse: ingen ⇒ fri, én ⇒ Lagrange, lukket område ⇒ kombinert", "Se på graden til funksjonen $f$", "Se om Hesse-matrisen er positiv definit", "Se om oppgaven noe sted nevner ordet gradient eller ordet Hesse i teksten sin"],
      explanation: "Fri (ingen bånd), betinget (ett bånd $g=c$) og globalt på lukket område (indre + rand) krever hver sin algoritme.",
    },
    {
      question: "Hva er første steg i fri optimering?",
      options: ["Løse $\\nabla f = 0$ og redusere til én variabel", "Sette opp Lagranges betingelse $\\nabla f = \\lambda\\nabla g$", "Sjekke om $\\nabla g = 0$ på en bibetingelse", "Parametrisere randen av området"],
      explanation: "Fri optimering starter med de stasjonære punktene: $\\nabla f = 0$.",
    },
    {
      question: "Hva er første steg i betinget optimering med Lagrange?",
      options: ["$\\nabla g = 0$-sjekken", "Å regne Hesse-matrisen til $f$", "Å sette $\\nabla f = 0$", "Å sammenligne funksjonsverdiene"],
      explanation: "Lagrange forutsetter $\\nabla g \\ne 0$, så du sjekker først om det finnes $\\nabla g = 0$-punkter på bibetingelsen.",
    },
    {
      question: "Hvordan finner du globale ekstremum på en fylt skive $x^2+y^2 \\le 4$?",
      options: ["Indre stasjonære (Hesse) + rand (Lagrange) + hjørner, så sammenlign alle $f$-verdier", "Bare de indre stasjonære punktene, klassifisert med Hesse", "Bare randen, med Lagrange", "Bare punktene på hele planet der gradienten $\\nabla f$ er lik nullvektoren $(0,0)$"],
      explanation: "Globalt på lukket område krever både indre og rand; sammenlign alle kandidatenes $f$-verdier.",
    },
    {
      question: "For $f = x^2 + 2y^2 - 2x$ på skiven $x^2+y^2 \\le 4$: hvor er global minimum?",
      options: ["I det indre punktet $(1,0)$ med $f = -1$", "På randen i $(-1, \\pm\\sqrt3)$ med $f = 9$", "I randpunktet $(2,0)$ med $f = 0$", "I origo $(0,0)$ med $f = 0$"],
      explanation: "Indre $\\nabla f=0$ gir $(1,0)$, $f=-1$; det slår alle randverdiene $9, 0, 8$.",
    },
    {
      question: "Hva må du gjøre når $\\nabla g = 0$ i et punkt som ligger på bibetingelsen?",
      options: ["Ta med punktet som en ekstra kandidat og evaluere $f$ der", "Forkaste punktet fra kandidatlista", "Sett Lagrangemultiplikatoren $\\lambda = 0$ og løs hele Lagrange-systemet på nytt fra start", "Konkludere at det er et sadelpunkt"],
      explanation: "Der svikter Lagrange, så cusp-/singularpunktet må testes direkte.",
    },
    {
      question: "Hva sikrer at et minimum finnes når bibetingelsen er ubegrenset?",
      options: ["En kompakt hjelpemengde $K = \\{g = c,\\ f \\le M\\}$ + ekstremalverdisetningen", "At $\\nabla g = 0$ et sted på kurven", "At funksjonen har et stasjonært punkt i det indre", "At Hesse-matrisen til målfunksjonen $f$ er positiv definit i alle indre punkter"],
      explanation: "$K$ er lukket og begrenset; utenfor er $f>M$, så minimum antas i $K$.",
    },
    {
      question: "Hva er den vanligste feilen i globalt-på-område-oppgaver?",
      options: ["Å glemme randen — den er ofte halve svaret", "Å regne Hesse-matrisen for nøyaktig", "Å bruke eksakte svar i stedet for desimaltall", "Å sette opp for mange kandidatpunkter"],
      explanation: "Randanalysen glemmes lett, men randkandidatene bestemmer ofte det globale ekstremumet.",
    },
    {
      question: "For $f = 2x + y$ på $x^2+y^2 = 5$: hva er største verdi?",
      options: ["$5$, antatt i $(2,1)$", "$-5$, antatt i $(-2,-1)$", "$3$, antatt i $(1,1)$", "$\\sqrt5$, antatt i $(1,2)$"],
      explanation: "$2=2\\lambda x,\\ 1=2\\lambda y$ gir $x=2y$; med $5y^2=5$ blir $(2,1)$ og $f=5$.",
    },
    {
      question: "Hvorfor må du evaluere $f$ i ALLE kandidatpunkter?",
      options: ["Fordi min og maks bare kan leses av ved å sammenligne verdiene", "Fordi $\\lambda$ ellers blir feil", "Fordi Hesse-matrisen krever det", "Fordi bibetingelsen $g = c$ ellers ikke ville vært oppfylt i noen av kandidatpunktene"],
      explanation: "Kandidatene er bare mulige ekstremum; sammenligningen av $f$-verdiene avgjør hvilke som er min og maks.",
    },
    {
      question: "På randen $x^2+y^2 = 4$ kan du finne kandidatene ved å ...",
      options: ["sette $y^2 = 4 - x^2$ inn og optimere på $[-2,2]$ (med endepunktene)", "sette $\\nabla f = 0$ og løse fritt", "regne Hesse-matrisen langs randen", "anta uten videre regning at ekstremum må ligge i randpunktet $(2,0)$ på sirkelen"],
      explanation: "Innsetting gir en en-variabel-funksjon på et lukket intervall; husk å sjekke endepunktene.",
    },
    {
      question: "For $f = x^2 - y^2$ på $x^2+y^2 = 4$: hvilke er ekstremalverdiene?",
      options: ["Maks $4$ i $(\\pm 2, 0)$, min $-4$ i $(0, \\pm 2)$", "Maks $4$ i $(0, \\pm 2)$, min $-4$ i $(\\pm 2, 0)$", "Maks $2$ i $(\\sqrt2, \\sqrt2)$, min $-2$", "Ingen ekstremum, siden $f$ skifter fortegn"],
      explanation: "$\\lambda=1$ tvinger $y=0$ ($f=4$); $\\lambda=-1$ tvinger $x=0$ ($f=-4$).",
    },
    {
      question: "Hva slags punkt er $(0,0)$ for $f = x^3 + y^3 - 6xy$?",
      options: ["Sadelpunkt, siden $D = 36xy - 36 = -36 < 0$ der", "Lokalt minimum, siden $f_{xx} = 0$", "Lokalt maksimum, fordi den blandede partiellderiverte $f_{xy}$ i punktet er lik $-6$", "Inkonklusivt, siden $D = 0$"],
      explanation: "$D = 36\\cdot 0 - 36 = -36 < 0$ i origo gir sadelpunkt.",
    },
    {
      question: "Når trenger du ikke å begrunne eksistens av ekstremum?",
      options: ["Når mengden opplagt er kompakt eller oppgaven ikke ber om det", "Når bibetingelsen er en ubegrenset kurve", "Når det er flere enn to kandidater", "Når det finnes flere enn to kandidatpunkter som skal sammenlignes mot hverandre"],
      explanation: "Er eksistens åpenbar (kompakt mengde) eller ikke etterspurt, er kompakthetsargumentet bortkastet tid.",
    },
    {
      question: "Hva bør sluttsvaret på en optimeringsoppgave alltid være?",
      options: ["En eksakt verdi med verbal konklusjon, ikke en desimaltilnærming", "En desimaltilnærming med to gjeldende siffer", "Bare kandidatpunktene, uten funksjonsverdier", "Lagrangemultiplikatoren $\\lambda$ oppgitt med to gjeldende siffer som sluttsvar"],
      explanation: "Sensorregelen krever eksakte svar og en begrunnet konklusjonssetning.",
    },
  ],
  'mat1110-4-1': [
    {
      question: "Hva gir $\\iint_A f(x,y)\\,dA$ når $f \\ge 0$ over hele området $A$?",
      options: ["Volumet under flaten $z=f(x,y)$ og over $A$", "Arealet av selve området $A$ i $xy$-planet", "Buelengden av randkurven som avgrenser $A$", "Gjennomsnittsverdien av $f$ målt langs randen av $A$"],
      explanation: "For $f\\ge 0$ er dobbeltintegralet volumet under flaten $z=f$ over $A$.",
    },
    {
      question: "I et type I-område $\\{a\\le x\\le b,\\ u(x)\\le y\\le v(x)\\}$, hvilken variabel integreres innerst?",
      options: ["$y$, siden grensene $u(x),v(x)$ avhenger av $x$", "$x$, siden $a$ og $b$ er faste tallgrenser", "Begge på én gang, i et sammensatt integrasjonssteg", "Den variabelen som har minst tallverdi i grensene sine"],
      explanation: "Variabelen med funksjonsgrenser (her $y$) står innerst; den med tallgrenser ytterst.",
    },
    {
      question: "Hva er første steg når et område er avgrenset av $y=x^2$ og $y=x+2$?",
      options: ["Løse $x^2=x+2$ for å finne skjæringspunktene", "Sette opp integralet direkte med grensene $0$ og $1$", "Derivere begge kurvene og sette de deriverte lik null", "Regne det ytre integralet ferdig før det indre integralet"],
      explanation: "Grensene skal regnes fram ved å sette kurvene lik hverandre, ikke gjettes.",
    },
    {
      question: "Hvorfor skal områdebeskrivelsen skrives som ulikheter før oppsettet?",
      options: ["Det er et sensorkrav og fastlegger integrasjonsgrensene", "Fordi integranden ellers får feil fortegn i regningen", "Fordi dobbeltintegralet ikke finnes i det hele tatt uten det", "Det er strengt tatt valgfritt, en ren pyntedetalj i føringen"],
      explanation: "«Begrunn alle svar»: ulikhetene begrunner grensene og skiller regnet fra gjettet.",
    },
    {
      question: "Hva er $\\iint_A 1\\,dA$?",
      options: ["Arealet av hele området $A$", "Alltid lik tallet $1$, uansett $A$", "Volumet under $z=1$ ganget med randlengden", "Gjennomsnittshøyden til flaten regnet over $A$"],
      explanation: "Integranden $1$ gir arealet av $A$.",
    },
    {
      question: "Når lønner det seg å bytte integrasjonsrekkefølge (Fubini)?",
      options: ["Når den ene rekkefølgen mangler elementær antiderivert", "Alltid, uansett hva integranden og området er", "Bare når integrasjonsområdet er et rent rektangel", "Når integranden tar en negativ verdi et sted i området"],
      explanation: "Snu når f.eks. $e^{y^2}$ blokkerer den ene veien mens den andre går fint.",
    },
    {
      question: "Hva blir $\\int_0^1\\!\\int_x^1 e^{y^2}\\,dy\\,dx$ etter at rekkefølgen er snudd?",
      options: ["$\\tfrac12(e-1)$", "$e-1$", "$\\tfrac12(e^2-1)$", "Integralet finnes ikke i lukket form"],
      explanation: "Snudd blir det $\\int_0^1 y e^{y^2}dy = \\tfrac12(e-1)$.",
    },
    {
      question: "I et iterert integral, hva slags grenser har det ytre integralet alltid?",
      options: ["Tall", "Funksjoner av den indre variabelen", "Kurver som møtes i skjæringspunktene", "Både tall og funksjoner om hverandre"],
      explanation: "Det ytre integralet har alltid tallgrenser; det indre kan ha funksjonsgrenser.",
    },
    {
      question: "Volumet mellom bunnflaten $z=g$ og toppflaten $z=h$ over området $A$ er:",
      options: ["$\\iint_A (h-g)\\,dA$", "$\\iint_A (g-h)\\,dA$", "$\\iint_A h\\cdot g\\,dA$", "$\\iint_A (h+g)\\,dA$"],
      explanation: "Volum = integralet av høydeforskjellen topp minus bunn.",
    },
    {
      question: "For $A=\\{0\\le x\\le 2,\\ 0\\le y\\le x\\}$, hva er det indre integralet $\\int_0^x (2x+1)\\,dy$?",
      options: ["$(2x+1)x = 2x^2+x$", "$2x+1$, siden $y$ forsvinner ved integrasjon", "$x^2+x$, ved å halvere det ledende leddet", "$(2x+1)(x-0)$ pluss et restledd $\\tfrac{x^2}{2}$"],
      explanation: "Integranden er konstant i $y$, så indre integral er $(2x+1)\\cdot x$.",
    },
    {
      question: "Et område avgrenset av $x=y^2$ og $x=2-y^2$ beskrives enklest som:",
      options: ["Type II: $-1\\le y\\le 1,\\ y^2\\le x\\le 2-y^2$", "Type I: $0\\le x\\le 2$ med $y$ mellom to faste tall", "Et rektangel med hjørner i $[0,2]\\times[-1,1]$", "Et område som må deles opp i fire separate biter"],
      explanation: "Parablene åpner sideveis, så $x$ ligger mellom kurvene — type II.",
    },
    {
      question: "Hva er den vanligste feilen med integrasjonsgrenser i sjanger G?",
      options: ["Å gjette grensene i stedet for å løse skjæringen", "Å ta med altfor mange desimaler i grenseverdiene", "Å regne ut hele det ytre integralet to ganger", "Å skrive $dA$ i stedet for $dx\\,dy$ i oppsettet"],
      explanation: "Grensene er skjæringspunktene og skal regnes fram, aldri gjettes.",
    },
    {
      question: "Når $f(x,y)=c$ er en konstant, er $\\iint_A c\\,dA$ lik:",
      options: ["$c\\cdot\\text{Areal}(A)$", "$c$, uavhengig av området", "$c^2$ ganget med arealet av $A$", "$0$ så lenge $c$ er forskjellig fra $1$"],
      explanation: "En konstant faktoriseres ut: integralet er konstanten ganger arealet.",
    },
    {
      question: "Hva skal du gjøre etter å ha regnet det indre integralet?",
      options: ["Forenkle uttrykket før du regner det ytre", "Bytte fortegn på hele det doble integralet", "Legge til randlengden av området $A$", "Dele hele resultatet på arealet av $A$"],
      explanation: "Forenkle det indre resultatet først; rot forplanter seg ellers til det ytre.",
    },
    {
      question: "Hva menes med at et dobbeltintegral kan bli negativt?",
      options: ["At området der $f<0$ bidrar negativt", "At arealet av området $A$ er negativt", "At man har byttet integrasjonsrekkefølge feil", "At integranden må være $1$ for at det skjer"],
      explanation: "Integralet arver integrandens fortegn; bare $f\\ge 0$ gir et rent volum.",
    },
    {
      question: "For $A=\\{0\\le x\\le 1,\\ x^2\\le y\\le x\\}$ er $\\iint_A x\\,dA$ lik:",
      options: ["$\\tfrac{1}{12}$", "$\\tfrac16$", "$\\tfrac14$", "$\\tfrac13$"],
      explanation: "Indre gir $x(x-x^2)$; $\\int_0^1 (x^2-x^3)dx = \\tfrac13-\\tfrac14=\\tfrac1{12}$.",
    },
    {
      question: "Hva sier Fubinis setning?",
      options: ["Rekkefølgen på integrasjonen endrer ikke svaret", "At bare type I-områder i det hele tatt kan integreres", "At rekkefølgen alltid må være $dy\\,dx$, aldri omvendt", "At integranden må være positiv for at integralet finnes"],
      explanation: "For kontinuerlige integrander er begge rekkefølger like — det tillater bytte.",
    },
    {
      question: "Hvordan finner du skjæringen mellom $xy=2$ og $x+y=3$ i første kvadrant?",
      options: ["Sett $y=2/x$ inn i $x+y=3$, som gir $x=1,2$", "Deriver begge likningene og sett de deriverte like", "Sett $x=y$ inn i begge likningene samtidig", "Sett venstresidene like: $x+y=xy$ direkte"],
      explanation: "Substituer $y=2/x$; da får du $x^2-3x+2=0$ med røtter $x=1$ og $x=2$.",
    },
    {
      question: "I $\\int_0^2\\!\\int_{y/2}^1 \\cos(x^2)\\,dx\\,dy$, hvorfor må rekkefølgen snus?",
      options: ["$\\cos(x^2)$ mangler elementær antiderivert i $x$", "Fordi integrasjonsområdet egentlig er et rektangel", "Fordi den nedre grensen $y/2$ blir negativ", "Fordi $\\cos$ ikke lar seg integrere i det hele tatt"],
      explanation: "Snu til $\\{0\\le x\\le 1,0\\le y\\le 2x\\}$; da blir integranden $2x\\cos(x^2)$, og svaret $\\sin 1$.",
    },
    {
      question: "Hva er broen fra R2 til dobbeltintegralet for areal?",
      options: ["$\\int_a^b (v(x)-u(x))\\,dx$ er $\\iint_A 1\\,dA$ regnet ut", "Formelen for volum av omdreiningslegemer", "Den deriverte av arealfunksjonen etter $x$", "Kjerneregelen for deriverte av sammensatte funksjoner"],
      explanation: "Areal mellom kurver er det indre integralet av $\\iint_A 1\\,dA$.",
    },
  ],
  'mat1110-4-2': [
    {
      question: "Hva er arealelementet i polarkoordinater?",
      options: ["$dA = r\\,dr\\,d\\theta$", "$dA = dr\\,d\\theta$", "$dA = r^2\\,dr\\,d\\theta$", "$dA = \\tfrac1r\\,dr\\,d\\theta$"],
      explanation: "Faktoren $r$ er Jacobideterminanten for polarskiftet.",
    },
    {
      question: "Hvilken sammenheng gjelder mellom polar og kartesisk?",
      options: ["$x = r\\cos\\theta,\\ y = r\\sin\\theta$", "$x = r\\sin\\theta,\\ y = r\\cos\\theta$", "$x = \\theta\\cos r,\\ y = \\theta\\sin r$", "$x = r\\cos\\theta,\\ y = r\\cos\\theta$"],
      explanation: "Standardsammenhengen; da blir $x^2+y^2 = r^2$.",
    },
    {
      question: "Når lønner polarkoordinater seg?",
      options: ["Ved sirkelsymmetri i område eller integrand", "Alltid, uansett hvilken form området har", "Bare når integrasjonsområdet er et rektangel", "Når integranden er et rent polynom i $x$ alene"],
      explanation: "Skiver, ringer, sektorer og $x^2+y^2$ i integranden peker mot polar.",
    },
    {
      question: "Hva er den mest dokumenterte enkeltfeilen ved polarintegral?",
      options: ["Å glemme faktoren $r$ i arealelementet", "Å bruke grader i stedet for radianer", "Å integrere $\\theta$ innerst i stedet for $r$", "Å skrive $x^2+y^2$ som $r$ i stedet for $r^2$"],
      explanation: "Uten faktoren $r$ blir arealelementet feil og svaret galt.",
    },
    {
      question: "Hva er $\\theta$-grensene for en øvre halvskive ($y\\ge 0$)?",
      options: ["$0 \\le \\theta \\le \\pi$", "$0 \\le \\theta \\le 2\\pi$", "$0 \\le \\theta \\le \\tfrac{\\pi}{2}$", "$-\\pi \\le \\theta \\le \\pi$"],
      explanation: "Øvre halvplan svarer til vinkler fra $0$ til $\\pi$.",
    },
    {
      question: "Hva er Jacobideterminanten for skiftet $x=x(u,v),\\ y=y(u,v)$?",
      options: ["$x_u y_v - x_v y_u$", "$x_u y_u - x_v y_v$", "$x_u + y_v$", "$x_u x_v - y_u y_v$"],
      explanation: "Det er determinanten $\\det\\begin{pmatrix}x_u&x_v\\\\y_u&y_v\\end{pmatrix}$.",
    },
    {
      question: "Hvorfor står Jacobideterminanten i absoluttverdi i variabelskifteformelen?",
      options: ["Fordi areal alltid skal være positivt", "Fordi determinanten alltid ender opp negativ", "Fordi integranden ellers blir et komplekst tall", "Fordi radien $r$ i prinsippet kan bli negativ"],
      explanation: "Arealfaktoren må være positiv; derfor $\\left|\\tfrac{\\partial(x,y)}{\\partial(u,v)}\\right|$.",
    },
    {
      question: "Hva blir Jacobideterminanten for polarskiftet $x=r\\cos\\theta,\\ y=r\\sin\\theta$?",
      options: ["$r$", "$1$", "$r^2$", "$\\cos\\theta\\sin\\theta$"],
      explanation: "Det er nettopp $r$ — som forklarer $dA = r\\,dr\\,d\\theta$.",
    },
    {
      question: "Hvilket skifte gjør ellipsen $\\tfrac{x^2}{a^2}+\\tfrac{y^2}{b^2}\\le 1$ om til en enhetssirkel?",
      options: ["$x = ar\\cos\\theta,\\ y = br\\sin\\theta$", "$x = r\\cos\\theta,\\ y = r\\sin\\theta$", "$x = ar\\cos\\theta,\\ y = ar\\sin\\theta$", "$x = a\\cos\\theta,\\ y = b\\sin\\theta$"],
      explanation: "Da blir $\\tfrac{x^2}{a^2}+\\tfrac{y^2}{b^2}=r^2\\le 1$.",
    },
    {
      question: "Hva er Jacobideterminanten for ellipseskiftet $x=ar\\cos\\theta,\\ y=br\\sin\\theta$?",
      options: ["$ab\\,r$", "$r$", "$ab$", "$a^2 b^2 r$"],
      explanation: "$\\det\\begin{pmatrix}a\\cos\\theta&-ar\\sin\\theta\\\\b\\sin\\theta&br\\cos\\theta\\end{pmatrix}=abr$.",
    },
    {
      question: "Hva er arealet av ellipsen $\\tfrac{x^2}{a^2}+\\tfrac{y^2}{b^2}\\le 1$?",
      options: ["$\\pi a b$", "$\\pi(a+b)$", "$\\pi a^2 b^2$", "$2\\pi a b$"],
      explanation: "Integralet av $ab\\,r$ over enhetssirkelen gir $\\pi ab$.",
    },
    {
      question: "Hva blir $\\iint_A (x^2+y^2)\\,dA$ over skiven $x^2+y^2\\le 2$ i polar?",
      options: ["$\\int_0^{2\\pi}\\!\\int_0^{\\sqrt2} r^3\\,dr\\,d\\theta$", "$\\int_0^{2\\pi}\\!\\int_0^{\\sqrt2} r^2\\,dr\\,d\\theta$", "$\\int_0^{\\pi}\\!\\int_0^{2} r^3\\,dr\\,d\\theta$", "$\\int_0^{2\\pi}\\!\\int_0^{2} r\\,dr\\,d\\theta$"],
      explanation: "Integrand $r^2$ ganges med faktoren $r$ til $r^3$; radius er $\\sqrt2$.",
    },
    {
      question: "Hva bestemmer valget av variabelskifte?",
      options: ["Geometrien til området og integranden", "Om man foretrekker polar eller kartesisk", "Hvor mange ledd integranden består av", "Hvor stor tallverdi grensene har i oppgaven"],
      explanation: "Sirkel ⇒ polar, ellipse ⇒ ellipsekoordinater, rektangel ⇒ kartesisk.",
    },
    {
      question: "Hva er den geometriske tolkningen av $\\left|\\tfrac{\\partial(x,y)}{\\partial(u,v)}\\right|$?",
      options: ["Hvor mye et lite areal strekkes av skiftet", "Omkretsen rundt det nye integrasjonsområdet", "Antallet skjæringspunkter mellom grensekurvene", "Vinkelen mellom de to nye koordinataksene"],
      explanation: "Jacobideterminanten er den lokale arealstrekkfaktoren.",
    },
    {
      question: "Hva er $\\iint_A \\tfrac{1}{\\sqrt{x^2+y^2}}\\,dA$ over ringen $1\\le x^2+y^2\\le 9$?",
      options: ["$4\\pi$", "$2\\pi$", "$8\\pi$", "$\\pi\\ln 3$"],
      explanation: "$1/r$ ganget faktoren $r$ gir $1$; $2\\pi\\int_1^3 1\\,dr = 4\\pi$.",
    },
  ],
  'mat1110-4-3': [
    {
      question: "Hva er volumelementet i sylinderkoordinater?",
      options: ["$dV = r\\,dz\\,dr\\,d\\theta$", "$dV = dz\\,dr\\,d\\theta$", "$dV = r^2\\,dz\\,dr\\,d\\theta$", "$dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$"],
      explanation: "Sylinder arver polarfaktoren $r$.",
    },
    {
      question: "Hva er volumelementet i kulekoordinater?",
      options: ["$dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$dV = \\rho\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$dV = \\rho^2\\,d\\rho\\,d\\varphi\\,d\\theta$", "$dV = r\\,dz\\,dr\\,d\\theta$"],
      explanation: "Kulevolumelementet har faktoren $\\rho^2\\sin\\varphi$.",
    },
    {
      question: "Hvilket system passer for en kropp med rotasjonssymmetri om $z$-aksen?",
      options: ["Sylinderkoordinater", "Kulekoordinater", "Kartesiske koordinater alltid", "Ellipsekoordinater i tre dimensjoner"],
      explanation: "Sylindre, kjegler og paraboloider er sylindersymmetriske.",
    },
    {
      question: "Hvordan finner du $z$-grensene der paraboloiden $z=r^2$ møter planet $z=4$?",
      options: ["Løs $r^2 = 4$, som gir $r=2$", "Anta at $z$ løper fra $0$ til $4$", "Deriver begge flatene og sett dem lik", "Sett rett og slett $r$ lik $z$"],
      explanation: "Skjæringen løses ved å sette flatene lik hverandre: $r^2=4$.",
    },
    {
      question: "Hva blir kjeglen $z=\\sqrt{x^2+y^2}$ i kulekoordinater?",
      options: ["$\\varphi = \\tfrac{\\pi}{4}$ (konstant polvinkel)", "$\\rho = \\tfrac{\\pi}{4}$ (konstant radius)", "$\\theta = \\tfrac{\\pi}{4}$ (konstant asimut)", "$\\varphi = \\tfrac{\\pi}{2}$ (langs $xy$-planet)"],
      explanation: "Kjeglen er en konstant polvinkel $\\varphi=\\pi/4$.",
    },
    {
      question: "Hva er $\\int_0^\\pi \\sin\\varphi\\,d\\varphi$?",
      options: ["$2$", "$0$", "$1$", "$\\pi$"],
      explanation: "$[-\\cos\\varphi]_0^\\pi = 1-(-1) = 2$; en klassisk feil er å tro det er $0$.",
    },
    {
      question: "Hva er den dyreste enkeltfeilen i trippelintegral?",
      options: ["Å glemme volumelementets faktor", "Å regne i radianer i stedet for grader", "Å integrere $\\theta$ innerst av de tre", "Å skrive $dV$ i stedet for $dz\\,dr\\,d\\theta$"],
      explanation: "Uten faktoren ($r$ eller $\\rho^2\\sin\\varphi$) blir hele svaret galt.",
    },
    {
      question: "Hva er forskjellen på $r$ og $\\rho$?",
      options: ["$r$ er avstand fra $z$-aksen, $\\rho$ fra origo", "De to symbolene betyr alltid nøyaktig det samme", "$r$ er en vinkel, mens $\\rho$ er en avstand", "$\\rho$ er avstand fra $z$-aksen, $r$ fra origo"],
      explanation: "$r=\\sqrt{x^2+y^2}$ (sylinder), $\\rho=\\sqrt{x^2+y^2+z^2}$ (kule); $r=\\rho\\sin\\varphi$.",
    },
    {
      question: "For hele kula $\\rho\\le a$, hva er grensene for $\\varphi$?",
      options: ["$0 \\le \\varphi \\le \\pi$", "$0 \\le \\varphi \\le 2\\pi$", "$0 \\le \\varphi \\le \\tfrac{\\pi}{2}$", "$-\\pi \\le \\varphi \\le \\pi$"],
      explanation: "Polvinkelen $\\varphi$ løper fra $0$ (nordpol) til $\\pi$ (sydpol).",
    },
    {
      question: "Når kan et trippelintegral faktoriseres i et produkt av enkeltintegraler?",
      options: ["Når integrand og grenser separerer i uavhengige deler", "Alltid, uansett hvordan grensene ser ut", "Bare når man regner i kartesiske koordinater", "Bare når integranden er tallet $1$"],
      explanation: "Grensene i den variabelen som skilles ut må være konstante.",
    },
    {
      question: "Hva er volumet av kula $\\rho\\le 3$?",
      options: ["$36\\pi$", "$27\\pi$", "$12\\pi$", "$9\\pi$"],
      explanation: "$\\tfrac43\\pi\\cdot 27 = 36\\pi$.",
    },
    {
      question: "Volumet av kroppen mellom $z=r^2$ og $z=8-r^2$ (skjæring $r=2$) er:",
      options: ["$16\\pi$", "$8\\pi$", "$32\\pi$", "$4\\pi$"],
      explanation: "Indre $z$-integral gir $r(8-2r^2)$; $2\\pi\\int_0^2(8r-2r^3)dr = 16\\pi$.",
    },
    {
      question: "Hva er polvinkelen $\\varphi$ i kulekoordinater?",
      options: ["Vinkelen fra den positive $z$-aksen", "Vinkelen målt rundt i $xy$-planet", "Den rette avstanden fra origo", "Avstanden fra selve $z$-aksen"],
      explanation: "$\\varphi$ måles fra $z$-aksen; asimut $\\theta$ er vinkelen i $xy$-planet.",
    },
    {
      question: "Hvorfor faktoriseres $\\theta$-delen ofte til $2\\pi$?",
      options: ["Integranden er da uavhengig av $\\theta$", "Fordi $\\theta$ alltid står innerst", "Fordi $2\\pi$ er selve volumelementet", "Fordi $\\theta$ aldri påvirker volumet"],
      explanation: "Rotasjonssymmetrisk integrand ⇒ $\\int_0^{2\\pi}d\\theta = 2\\pi$ skilles ut.",
    },
    {
      question: "Hva er $\\iiint_V z\\,dV$ over sylinderen $r\\le 1,\\ 0\\le z\\le 3$?",
      options: ["$\\tfrac{9\\pi}{2}$", "$9\\pi$", "$3\\pi$", "$\\tfrac{3\\pi}{2}$"],
      explanation: "Faktoriser: $2\\pi\\cdot\\int_0^1 r\\,dr\\cdot\\int_0^3 z\\,dz = 2\\pi\\cdot\\tfrac12\\cdot\\tfrac92$.",
    },
    {
      question: "Hva menes med skjæringen mellom to grenseflater?",
      options: ["Kurven der flatene møtes, funnet ved å sette dem like", "Volumet som ligger innelukket mellom flatene", "Snittet mellom integranden og de to flatene", "Det ytre integralets grenser lest av en skisse"],
      explanation: "Skjæringen gir grensene og skal regnes fram, aldri gjettes.",
    },
    {
      question: "For den øvre halvkula $\\rho\\le a,\\ z\\ge 0$, hva er $\\varphi$-grensene?",
      options: ["$0 \\le \\varphi \\le \\tfrac{\\pi}{2}$", "$0 \\le \\varphi \\le \\pi$", "$\\tfrac{\\pi}{2} \\le \\varphi \\le \\pi$", "$0 \\le \\varphi \\le 2\\pi$"],
      explanation: "$z\\ge 0$ svarer til $\\varphi$ mellom $0$ og $\\pi/2$.",
    },
    {
      question: "Hva er $\\iiint_V (x^2+y^2+z^2)\\,dV$ over kula $\\rho\\le 2$?",
      options: ["$\\tfrac{128\\pi}{5}$", "$32\\pi$", "$\\tfrac{32\\pi}{5}$", "$16\\pi$"],
      explanation: "$\\rho^2\\cdot\\rho^2\\sin\\varphi = \\rho^4\\sin\\varphi$; $2\\pi\\cdot 2\\cdot\\tfrac{32}{5}$.",
    },
    {
      question: "Hvilken flate er $z=x^2+y^2$?",
      options: ["En paraboloide (skål) om $z$-aksen", "En kjegle med spissen i origo", "En kule med sentrum i origo", "Et vannrett plan i høyden $z$"],
      explanation: "$z=r^2$ er en paraboloide; skjærer $z=c$ i sirkelen $r=\\sqrt c$.",
    },
    {
      question: "Hva gir integranden $1$ i et trippelintegral?",
      options: ["Volumet av kroppen $V$", "Overflatearealet til randen av $V$", "Tyngdepunktets høyde over $xy$-planet", "Massesenteret til hele kroppen $V$"],
      explanation: "$\\iiint_V 1\\,dV$ er volumet; overflate, tyngdepunkt og massesenter krever andre integraler.",
    },
  ],
  'mat1110-4-4': [
    {
      question: "Hva kjennetegner et uegentlig multiple integral?",
      options: ["Ubegrenset område eller ubegrenset integrand", "At integranden er negativ i minst ett punkt", "At integrasjonsområdet er et rektangel", "At integranden inneholder en logaritme"],
      explanation: "Enten er området uendelig, eller integranden sprenger mot $\\infty$.",
    },
    {
      question: "Hvordan defineres et uegentlig multiple integral?",
      options: ["Som grensen av integralene over voksende kompakter", "Ved å sette inn $\\infty$ i den antideriverte", "Som gjennomsnittet av $f$ over hele planet", "Som summen av integralene over hver kvadrant"],
      explanation: "Det gis mening som en grense $\\lim_{n\\to\\infty}\\iint_{A\\cap K_n} f$.",
    },
    {
      question: "Hva er en voksende følge kompakter?",
      options: ["Avgrensede, lukkede mengder som dekker hele området", "En tallfølge som selv vokser mot $\\infty$", "Rekkefølgen de enkelte integralene regnes i", "En følge integrander som gradvis avtar"],
      explanation: "$K_n\\nearrow\\mathbb{R}^2$: hver er kompakt, og de fyller til slutt alt.",
    },
    {
      question: "Hva er den avgjørende feilen å unngå i sjanger H?",
      options: ["Å «sette inn $\\infty$» i stedet for å ta en grense", "Å velge polarkoordinater i oppsettet", "Å faktorisere integralet i et produkt", "Å regne over en avgrenset skive først"],
      explanation: "$\\infty$ er ikke et tall; skriv $\\lim_{R\\to\\infty}$ og regn grensen.",
    },
    {
      question: "Hvilke kompakter passer for en radiell integrand (avhenger av $x^2+y^2$)?",
      options: ["Skiver $K_R = \\{x^2+y^2\\le R^2\\}$", "Bokser $K_n = \\{|x|\\le n,|y|\\le n\\}$", "Trekanter med voksende sider", "Ellipser med voksende halvakser"],
      explanation: "Skiver passer polarkoordinatene og gjør integralet enkelt.",
    },
    {
      question: "Når konvergerer et uegentlig integral?",
      options: ["Når grensen over $K_n$ er et endelig tall", "Når integranden selv går mot $0$", "Når integrasjonsområdet er ubegrenset", "Så lenge integranden holder seg positiv"],
      explanation: "Konvergens = grensen finnes og er endelig; integrand $\\to 0$ er ikke nok.",
    },
    {
      question: "Hva er $\\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)}\\,dA$?",
      options: ["$\\pi$", "$2\\pi$", "$1$", "Divergerer"],
      explanation: "Gauss-integralet i planet: $\\lim_{R\\to\\infty}\\pi(1-e^{-R^2}) = \\pi$.",
    },
    {
      question: "Konvergerer $\\iint_A \\tfrac{1}{x^2+y^2}\\,dA$ over $x^2+y^2\\ge 1$?",
      options: ["Nei — integralet blir $2\\pi\\ln R\\to\\infty$", "Ja, integralet konvergerer til $2\\pi$", "Ja, integralet konvergerer til $\\pi$", "Ja, integralet konvergerer til $0$"],
      explanation: "Med faktoren $r$ blir integranden $1/r$, hvis integral $\\ln R$ divergerer.",
    },
    {
      question: "Hvorfor er «integranden går mot $0$» ikke nok for konvergens?",
      options: ["Integralet kan likevel vokse uten grense", "Fordi integranden i tillegg må være negativ", "Fordi $0$ ikke er en gyldig grenseverdi", "Fordi området da må være avgrenset"],
      explanation: "$\\tfrac{1}{x^2+y^2}\\to 0$, men integralet divergerer — man må regne grensen.",
    },
    {
      question: "Hvordan håndteres en singularitet i et indre punkt (f.eks. origo)?",
      options: ["Utelat en liten skive $r\\ge\\varepsilon$, la $\\varepsilon\\to 0^+$", "Sett integranden lik $0$ i det punktet", "Bytt over til kartesiske koordinater", "Del området i fire like store biter"],
      explanation: "Kompaktene utelater en krympende skive rundt singulariteten.",
    },
    {
      question: "Hva blir $\\iiint_{\\mathbb{R}^3} e^{-\\rho}\\,dV$ (kulekoordinater)?",
      options: ["$8\\pi$", "$4\\pi$", "$2\\pi$", "Divergerer"],
      explanation: "$2\\pi\\cdot 2\\cdot\\int_0^\\infty\\rho^2 e^{-\\rho}d\\rho = 2\\pi\\cdot 2\\cdot 2 = 8\\pi$.",
    },
    {
      question: "Hvorfor er valget av kompaktfølge fritt når $f\\ge 0$?",
      options: ["Integralene vokser monotont mot samme grense", "Fordi positive funksjoner alltid konvergerer", "Fordi $f\\ge 0$ gjør området avgrenset", "Fordi grensen da uansett blir $0$"],
      explanation: "For ikke-negativ integrand er grensen uavhengig av den voksende følgen.",
    },
    {
      question: "Hva er $\\lim_{R\\to\\infty}\\big(1 - \\tfrac{1}{1+R^2}\\big)$?",
      options: ["$1$", "$0$", "$\\infty$", "$\\tfrac12$"],
      explanation: "$\\tfrac{1}{1+R^2}\\to 0$, så grensen er $1$ — integralet konvergerer.",
    },
    {
      question: "For radielle integraler over uendelig område, hva avgjør konvergens?",
      options: ["Hvor raskt integranden avtar (eksponenten)", "Antall kvadranter området strekker seg over", "Om integranden er avhengig av vinkelen $\\theta$", "Fortegnet på Jacobideterminanten i skiftet"],
      explanation: "Eksponenten avgjør: rask nok avtaking gir konvergens, ellers divergens.",
    },
    {
      question: "Hva er den praktiske broen mellom uegentlige integraler og polar/kule?",
      options: ["Regn over en skive $K_R$ og la $R\\to\\infty$", "Bytt alltid til kartesiske koordinater først", "Deriver integranden før du tar grensen", "Sett $r=\\infty$ direkte inn i integralet"],
      explanation: "For radielle integrander regnes integralet over $K_R$ i polar/kule, så grensen.",
    },
  ],
  'mat1110-4-5': [
    {
      question: "Første spørsmål i beslutningstreet for et multiple integral er:",
      options: ["Dimensjon: dobbelt eller trippel?", "Er sluttsvaret et partall eller ikke?", "Hva blir integranden i origo?", "Hvor mange ledd har integranden?"],
      explanation: "Start med dimensjonen, deretter koordinatvalg etter symmetri.",
    },
    {
      question: "Hvilket system passer for en kropp med rotasjonssymmetri om $z$-aksen?",
      options: ["Sylinderkoordinater", "Kulekoordinater", "Ellipsekoordinater", "Kartesiske alltid"],
      explanation: "Sylinder passer sylindre, kjegler og paraboloider.",
    },
    {
      question: "Hva gjør du der to grenseflater møtes?",
      options: ["Setter dem lik hverandre og løser skjæringen", "Gjetter grensene ut fra en skisse", "Deriverer begge flatene først", "Setter volumelementet lik $1$"],
      explanation: "Skjæringen skal regnes fram, ikke gjettes.",
    },
    {
      question: "Hva er volumelementet i kulekoordinater?",
      options: ["$\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$r\\,dz\\,dr\\,d\\theta$", "$\\rho\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$d\\rho\\,d\\varphi\\,d\\theta$"],
      explanation: "Kulevolumelementet har faktoren $\\rho^2\\sin\\varphi$.",
    },
    {
      question: "Når kan et integral faktoriseres i et produkt?",
      options: ["Når integrand og grenser separerer", "Alltid, uansett hvordan grensene er", "Bare i kartesiske koordinater", "Bare når integranden er $1$"],
      explanation: "Grensene i den utskilte variabelen må være konstante.",
    },
    {
      question: "Hva er den dyreste enkeltfeilen i hele Del 4?",
      options: ["Å glemme volumelementets faktor", "Å regne i radianer i stedet for grader", "Å faktorisere altfor tidlig i oppsettet", "Å skrive ulikhetene før selve oppsettet"],
      explanation: "Uten faktoren $r$ eller $\\rho^2\\sin\\varphi$ blir svaret galt.",
    },
    {
      question: "Hva skal du gjøre ved et uegentlig integral?",
      options: ["Regne over en voksende kompakt og ta grensen", "Sette inn $\\infty$ i den antideriverte", "Dele området i fire separate biter", "Alltid regne i kartesiske koordinater"],
      explanation: "Voksende kompakter $K_n$ + eksplisitt $\\lim$; aldri «sett inn $\\infty$».",
    },
    {
      question: "Volumet mellom $z=r^2$ og $z=8-r^2$ (skjæring $r=2$) er:",
      options: ["$16\\pi$", "$8\\pi$", "$64\\pi$", "$32\\pi$"],
      explanation: "$2\\pi\\int_0^2(8r-2r^3)dr = 16\\pi$.",
    },
    {
      question: "Hva er $\\int_0^\\pi \\sin\\varphi\\,d\\varphi$?",
      options: ["$2$", "$0$", "$1$", "$\\pi$"],
      explanation: "$[-\\cos\\varphi]_0^\\pi = 2$; en klassisk feil er å tro det er $0$.",
    },
    {
      question: "Når skal du bytte integrasjonsrekkefølge i et dobbeltintegral?",
      options: ["Når den ene rekkefølgen mangler antiderivert", "Alltid, som en fast rutine", "Bare over rektangulære områder", "Når integranden blir negativ et sted"],
      explanation: "Snu når f.eks. $e^{x^2}$ eller $\\cos(x^2)$ blokkerer den ene veien.",
    },
    {
      question: "Hvordan gjenkjenner du at polar lønner seg?",
      options: ["Sirkelsymmetri eller $x^2+y^2$ i integranden", "At integrasjonsområdet er et rektangel", "At integranden er et polynom i $x$ alene", "At grensene i oppgaven er negative tall"],
      explanation: "Skiver, ringer, sektorer og $x^2+y^2$ peker mot polar.",
    },
    {
      question: "Hva er arealet av ellipsen $\\tfrac{x^2}{25}+\\tfrac{y^2}{9}\\le 1$?",
      options: ["$15\\pi$", "$34\\pi$", "$225\\pi$", "$8\\pi$"],
      explanation: "$\\pi a b = \\pi\\cdot 5\\cdot 3 = 15\\pi$.",
    },
    {
      question: "Konvergerer $\\iint_A \\tfrac{1}{\\sqrt{x^2+y^2}}\\,dA$ over $x^2+y^2\\ge 1$?",
      options: ["Nei — integralet blir $2\\pi(R-1)\\to\\infty$", "Ja, det konvergerer til $2\\pi$", "Ja, det konvergerer til $\\pi$", "Ja, det konvergerer til $4\\pi$"],
      explanation: "$1/r$ ganget faktoren $r$ gir $1$, hvis integral vokser lineært.",
    },
    {
      question: "Hvordan beskrives romområdet før oppsett?",
      options: ["Med eksplisitte ulikheter for hver koordinat", "Kun ved hjelp av en skisse", "Med volumet regnet ut på forhånd", "Med Jacobideterminanten helt alene"],
      explanation: "Ulikheter først: innerst mellom flater, ytterst mellom tall.",
    },
    {
      question: "Hva er siste steg i beslutningstreet?",
      options: ["Oppgi svaret eksakt (brøker, $\\pi$, røtter)", "Tegne en skisse av kroppen", "Regne ut en desimaltilnærming", "Bytte til kartesiske koordinater"],
      explanation: "Sensor krever eksakt verdi, aldri desimaltilnærming.",
    },
  ],
  'mat1110-5-1': [
    {
      question: "Hva gir det fundamentale vektorproduktet $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ en normalvektor til?",
      options: ["Flaten parametrisert av $\\boldsymbol{\\phi}$, i det aktuelle punktet", "Kurven vi integrerer langs i planet", "Tangentplanet til grafen til $u$ alene", "Nivåflaten til farten $|\\mathbf r'|$"],
      explanation: "$\\boldsymbol{\\phi}_u$ og $\\boldsymbol{\\phi}_v$ er tangenter til flaten, så kryssproduktet står vinkelrett på flaten.",
    },
    {
      question: "Hvordan finner du farten til en parametrisert kurve $\\mathbf r(t)$?",
      options: ["Som lengden $|\\mathbf r'(t)|$ av hastighetsvektoren", "Som lengden $|\\mathbf r(t)|$ av posisjonsvektoren", "Som den andrederiverte $|\\mathbf r''(t)|$", "Som kryssproduktet $\\mathbf r(t)\\times\\mathbf r'(t)$"],
      explanation: "Farten er størrelsen på hastigheten: $|\\mathbf r'(t)|=\\sqrt{x'^2+y'^2+z'^2}$.",
    },
    {
      question: "Hva er buelengden av en kurve $\\mathbf r(t)$ fra $t=a$ til $t=b$?",
      options: ["$\\displaystyle\\int_a^b |\\mathbf r'(t)|\\,dt$", "$\\displaystyle\\int_a^b |\\mathbf r(t)|\\,dt$", "$\\displaystyle\\int_a^b \\mathbf r'(t)\\,dt$", "$|\\mathbf r(b)-\\mathbf r(a)|$"],
      explanation: "Buelengde er integralet av farten; den siste (avstand mellom endepunktene) gir bare korden, ikke buen.",
    },
    {
      question: "Flateelementet for et skalart flateintegral er:",
      options: ["$dS=|\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v|\\,du\\,dv$", "$dS=(\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v)\\,du\\,dv$ (uten absoluttverdi)", "$dS=|\\boldsymbol{\\phi}_u|\\,|\\boldsymbol{\\phi}_v|\\,du\\,dv$", "$dS=|\\boldsymbol{\\phi}_u+\\boldsymbol{\\phi}_v|\\,du\\,dv$"],
      explanation: "I skalarintegral teller bare størrelsen — derfor absoluttverdien. Produktet av lengdene overser vinkelen mellom vektorene.",
    },
    {
      question: "For en graf-flate $z=g(x,y)$ er det fundamentale vektorproduktet $\\boldsymbol{\\phi}_x\\times\\boldsymbol{\\phi}_y$ lik:",
      options: ["$(-g_x,\\,-g_y,\\,1)$", "$(g_x,\\,g_y,\\,1)$", "$(-g_x,\\,-g_y,\\,-1)$", "$(g_x,\\,g_y,\\,-1)$"],
      explanation: "Med $\\boldsymbol{\\phi}=(x,y,g)$ blir $\\boldsymbol{\\phi}_x\\times\\boldsymbol{\\phi}_y=(-g_x,-g_y,1)$, som peker oppover.",
    },
    {
      question: "Hva skjer med normalretningen hvis du bytter rekkefølge til $\\boldsymbol{\\phi}_v\\times\\boldsymbol{\\phi}_u$?",
      options: ["Den snur: $\\boldsymbol{\\phi}_v\\times\\boldsymbol{\\phi}_u=-\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$", "Ingenting — kryssproduktet er kommutativt", "Lengden dobles, retningen beholdes", "Den blir null"],
      explanation: "Kryssproduktet er antikommutativt, så rekkefølgen snur normalen — en vanlig kilde til fortegnsfeil i fluks.",
    },
    {
      question: "Oppgaven ber om «utadrettet» normal, men $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ peker innover. Hva gjør du?",
      options: ["Bytter fortegn på normalvektoren", "Regner videre uten endring — retningen er likegyldig", "Bytter om $u$ og $v$ i domenet", "Setter normalen lik nullvektoren"],
      explanation: "Fortegnet velges etter oppgitt orientering; peker kryssproduktet feil vei, snur du fortegnet.",
    },
    {
      question: "Farten til $\\mathbf r(t)=(3\\cos t,\\,3\\sin t,\\,4t)$ er:",
      options: ["$5$ (konstant)", "$3$ (konstant)", "$7$ (konstant)", "$\\sqrt{9\\cos^2 t+16}$"],
      explanation: "$\\mathbf r'=(-3\\sin t,3\\cos t,4)$, fart $\\sqrt{9+16}=5$.",
    },
    {
      question: "Sideflaten av sylinderen $x^2+y^2=a^2$ har flateelement:",
      options: ["$dS=a\\,d\\theta\\,dz$", "$dS=a^2\\,d\\theta\\,dz$", "$dS=r\\,d\\theta\\,dz$ med variabel $r$", "$dS=d\\theta\\,dz$"],
      explanation: "Med $\\boldsymbol{\\phi}=(a\\cos\\theta,a\\sin\\theta,z)$ er $|\\boldsymbol{\\phi}_\\theta\\times\\boldsymbol{\\phi}_z|=a$, så $dS=a\\,d\\theta\\,dz$.",
    },
    {
      question: "Kuleflaten med radius $a$ har flateelement:",
      options: ["$dS=a^2\\sin\\varphi\\,d\\varphi\\,d\\theta$", "$dS=a\\sin\\varphi\\,d\\varphi\\,d\\theta$", "$dS=a^2\\,d\\varphi\\,d\\theta$", "$dS=a^2\\cos\\varphi\\,d\\varphi\\,d\\theta$"],
      explanation: "Standardparametriseringen gir $|\\boldsymbol{\\phi}_\\varphi\\times\\boldsymbol{\\phi}_\\theta|=a^2\\sin\\varphi$.",
    },
    {
      question: "Hvilket domene $(x,y)$ hører til graf-flaten $z=x^2+y^2$ begrenset av $z\\le4$?",
      options: ["Disken $x^2+y^2\\le4$", "Hele planet $\\mathbb{R}^2$", "Disken $x^2+y^2\\le2$", "Kvadratet $|x|\\le4,\\ |y|\\le4$"],
      explanation: "$z=x^2+y^2\\le4$ betyr nettopp $x^2+y^2\\le4$ — disken med radius $2$.",
    },
    {
      question: "Hvorfor peker $\\boldsymbol{\\phi}_\\theta\\times\\boldsymbol{\\phi}_z=(a\\cos\\theta,a\\sin\\theta,0)$ «utover» på en sylinder?",
      options: ["Fordi den er parallell med posisjonsvektoren $(a\\cos\\theta,a\\sin\\theta)$ i $xy$-planet", "Fordi $z$-komponenten er positiv", "Fordi lengden er $a>0$", "Fordi den står vinkelrett på $z$-aksen"],
      explanation: "Vektoren har samme retning som punktets projeksjon i $xy$-planet — altså radielt bort fra aksen.",
    },
    {
      question: "Hva kjennetegner en regulær (glatt) parametrisering i et punkt?",
      options: ["$\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v\\ne\\mathbf 0$ der", "$\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v=\\mathbf 0$ der", "$\\boldsymbol{\\phi}_u=\\boldsymbol{\\phi}_v$ der", "Farten $|\\mathbf r'|$ er null der"],
      explanation: "Regularitet krever at det fundamentale vektorproduktet er forskjellig fra null, så flaten har tangentplan og normal.",
    },
    {
      question: "Hvordan finner du den utadrettede enhetsnormalen til en kule sentrert i origo?",
      options: ["Som posisjonsvektoren delt på radien, $\\mathbf x/|\\mathbf x|$", "Som $(0,0,1)$ overalt", "Som gradienten til farten", "Som $\\boldsymbol{\\phi}_\\theta$ normalisert"],
      explanation: "På en origosentrert kule peker utadrettet normal radielt, altså langs posisjonsvektoren.",
    },
    {
      question: "Hvilken av disse er den vanligste feilen når man setter opp en fluks?",
      options: ["At $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ peker motsatt av den oppgitte $\\mathbf n$ uten at fortegnet korrigeres", "At man bruker for mange desimaler i svaret", "At man deriverer $\\boldsymbol{\\phi}$ for mange ganger", "At man skriver domenet som en ulikhet"],
      explanation: "Feil normalretning (uten fortegnskorreksjon) gir fluks med galt fortegn — sensor sjekker dette hver gang.",
    },
  ],
  'mat1110-5-2': [
    {
      question: "Linjeintegralet av et skalarfelt langs $\\mathbf r(t)$, $a\\le t\\le b$, er:",
      options: ["$\\displaystyle\\int_a^b f(\\mathbf r(t))\\,|\\mathbf r'(t)|\\,dt$", "$\\displaystyle\\int_a^b f(\\mathbf r(t))\\,\\mathbf r'(t)\\,dt$", "$\\displaystyle\\int_a^b f(\\mathbf r(t))\\,dt$", "$\\displaystyle\\int_a^b |f(\\mathbf r(t))|\\,dt$"],
      explanation: "Skalarintegralet vekter $f$ med buelengdeelementet $ds=|\\mathbf r'(t)|\\,dt$.",
    },
    {
      question: "Linjeintegralet av et vektorfelt $\\mathbf F$ langs $C$ er:",
      options: ["$\\displaystyle\\int_a^b \\mathbf F(\\mathbf r(t))\\cdot\\mathbf r'(t)\\,dt$", "$\\displaystyle\\int_a^b \\mathbf F(\\mathbf r(t))\\,|\\mathbf r'(t)|\\,dt$", "$\\displaystyle\\int_a^b |\\mathbf F(\\mathbf r(t))|\\,dt$", "$\\displaystyle\\int_a^b \\mathbf F(\\mathbf r(t))\\times\\mathbf r'(t)\\,dt$"],
      explanation: "Vektorlinjeintegralet bruker prikkproduktet med $d\\mathbf r=\\mathbf r'(t)\\,dt$; det måler komponenten langs kurven.",
    },
    {
      question: "Greens teorem sier at $\\oint_C P\\,dx+Q\\,dy$ er lik:",
      options: ["$\\displaystyle\\iint_A\\Big(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)\\,dA$", "$\\displaystyle\\iint_A\\Big(\\frac{\\partial P}{\\partial x}-\\frac{\\partial Q}{\\partial y}\\Big)\\,dA$", "$\\displaystyle\\iint_A\\Big(\\frac{\\partial P}{\\partial y}-\\frac{\\partial Q}{\\partial x}\\Big)\\,dA$", "$\\displaystyle\\iint_A\\Big(\\frac{\\partial Q}{\\partial x}+\\frac{\\partial P}{\\partial y}\\Big)\\,dA$"],
      explanation: "Rekkefølgen er $\\partial Q/\\partial x$ minus $\\partial P/\\partial y$; de andre bytter om eller har feil fortegn.",
    },
    {
      question: "Hvilken orientering av randkurven forutsetter Greens teorem?",
      options: ["Mot klokka (positivt orientert), med området på venstre hånd", "Med klokka, med området på høyre hånd", "Hvilken som helst — orienteringen spiller ingen rolle", "Alltid startende i origo"],
      explanation: "Positiv orientering er mot klokka; med klokka gir motsatt fortegn.",
    },
    {
      question: "Et felt $\\mathbf F=(P,Q)$ er konservativt på et enkeltsammenhengende område hvis og bare hvis:",
      options: ["$\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}$ der", "$\\dfrac{\\partial P}{\\partial x}=\\dfrac{\\partial Q}{\\partial y}$ der", "$P=Q$ overalt", "$\\dfrac{\\partial P}{\\partial y}+\\dfrac{\\partial Q}{\\partial x}=0$ der"],
      explanation: "Betingelsen er at de kryssede partiellderiverte er like; på område uten hull er den også tilstrekkelig.",
    },
    {
      question: "For et konservativt felt $\\mathbf F=\\nabla\\varphi$ er $\\int_C\\mathbf F\\cdot d\\mathbf r$ lik:",
      options: ["$\\varphi(\\text{sluttpunkt})-\\varphi(\\text{startpunkt})$", "$\\varphi(\\text{startpunkt})-\\varphi(\\text{sluttpunkt})$", "$\\varphi(\\text{sluttpunkt})+\\varphi(\\text{startpunkt})$", "alltid $0$, uansett kurve"],
      explanation: "Fundamentalteoremet gir differansen slutt minus start; kun for LUKKET kurve blir det null.",
    },
    {
      question: "Hva er $\\oint_C\\mathbf F\\cdot d\\mathbf r$ rundt en lukket kurve for et konservativt felt?",
      options: ["$0$", "Arealet innenfor $C$", "$2\\pi$", "Kan ikke avgjøres uten å regne"],
      explanation: "Start og slutt sammenfaller, så differansen $\\varphi(\\text{slutt})-\\varphi(\\text{start})=0$.",
    },
    {
      question: "Areal av et område via Green kan skrives som:",
      options: ["$A=\\oint_C x\\,dy=-\\oint_C y\\,dx$", "$A=\\oint_C x\\,dx=\\oint_C y\\,dy$", "$A=\\oint_C (x+y)\\,dt$", "$A=\\oint_C \\mathbf F\\cdot\\mathbf n\\,ds$ for ethvert $\\mathbf F$"],
      explanation: "Velg $Q=x,P=0$ (eller $P=-y,Q=0$) så integranden i Green blir $1$.",
    },
    {
      question: "Hva er buelengdeelementet $ds$ uttrykt ved parametriseringen?",
      options: ["$ds=|\\mathbf r'(t)|\\,dt$", "$ds=\\mathbf r'(t)\\,dt$", "$ds=|\\mathbf r(t)|\\,dt$", "$ds=dt$"],
      explanation: "$ds$ er farten ganger $dt$; det er en positiv lengde, i motsetning til det vektorielle $d\\mathbf r$.",
    },
    {
      question: "Feltet $\\mathbf F=(y,0)$ på parabelbuen $\\mathbf r(t)=(t,t^2)$, $0\\le t\\le1$: hva er $\\int_C\\mathbf F\\cdot d\\mathbf r$?",
      options: ["$\\tfrac13$", "$0$ (feltet er konservativt)", "$\\tfrac12$", "$1$"],
      explanation: "$\\mathbf F\\cdot\\mathbf r'=(t^2)(1)+0=t^2$, og $\\int_0^1 t^2\\,dt=\\tfrac13$. Feltet er IKKE konservativt her.",
    },
    {
      question: "Hvorfor kan du IKKE bruke Greens teorem direkte på en åpen (ikke-lukket) kurve?",
      options: ["Greens teorem gjelder bare lukkede randkurver som avgrenser et område", "Fordi åpne kurver ikke kan parametriseres", "Fordi integranden da blir uendelig", "Fordi orienteringen alltid blir feil"],
      explanation: "Teoremet kobler integralet rundt en LUKKET rand til området innenfor; uten lukket kurve finnes ikke noe slikt område.",
    },
    {
      question: "Notasjonen $\\int_C P\\,dx+Q\\,dy$ betyr:",
      options: ["Linjeintegralet av vektorfeltet $(P,Q)$ langs $C$", "Summen av to skalar-linjeintegral med samme $ds$", "Et dobbeltintegral over området $C$", "Arealet under kurven $C$"],
      explanation: "Med $d\\mathbf r=(dx,dy)$ er $\\mathbf F\\cdot d\\mathbf r=P\\,dx+Q\\,dy$.",
    },
    {
      question: "Et felt oppfyller $\\partial P/\\partial y=\\partial Q/\\partial x$ overalt bortsett fra origo. Kan du konkludere at det er konservativt på hele planet minus origo?",
      options: ["Nei — området har et hull, så betingelsen er ikke tilstrekkelig der", "Ja, betingelsen er alltid tilstrekkelig", "Ja, så lenge feltet er kontinuerlig", "Nei, betingelsen er aldri tilstrekkelig"],
      explanation: "Uten enkeltsammenheng (hull i origo) kan $\\oint$ rundt origo bli forskjellig fra null selv om betingelsen holder.",
    },
    {
      question: "Hva sikrer at et linjeintegral er veiuavhengig?",
      options: ["At feltet er konservativt (har et potensial)", "At kurven er lukket", "At $|\\mathbf r'(t)|$ er konstant", "At feltet er et skalarfelt"],
      explanation: "Veiuavhengighet er ekvivalent med at feltet er konservativt.",
    },
    {
      question: "I areal-formelen $A=\\tfrac12\\oint_C(x\\,dy-y\\,dx)$ for en ellipse $(a\\cos t,b\\sin t)$, hva blir $A$?",
      options: ["$\\pi a b$", "$2\\pi a b$", "$\\pi(a+b)$", "$\\tfrac12\\pi a b$"],
      explanation: "$x\\,dy-y\\,dx=ab\\,dt$, og $\\tfrac12\\int_0^{2\\pi}ab\\,dt=\\pi ab$.",
    },
    {
      question: "Greens teorem reduserer et linjeintegral til et dobbeltintegral. Hvorfor er dette nyttig på eksamen?",
      options: ["Dobbeltintegralet er ofte alt regnet ut i en tidligere deloppgave (delpunkt-kjeding)", "Fordi dobbeltintegral alltid er null", "Fordi man slipper å parametrisere noe som helst", "Fordi svaret alltid blir et helt tall"],
      explanation: "Fasiten gjenbruker gjerne dobbeltintegralet fra forrige delpunkt i stedet for å regne på nytt.",
    },
    {
      question: "Hva er farten $|\\mathbf r'(t)|$ til $\\mathbf r(t)=(3\\cos t,3\\sin t)$?",
      options: ["$3$ (konstant)", "$9$ (konstant)", "$3\\sqrt2$", "$\\sqrt{9\\cos^2 t}$"],
      explanation: "$\\mathbf r'=(-3\\sin t,3\\cos t)$, lengde $\\sqrt{9\\sin^2 t+9\\cos^2 t}=3$.",
    },
    {
      question: "Hvilken tolkning har $\\int_C\\mathbf F\\cdot d\\mathbf r$ når $\\mathbf F$ er et kraftfelt?",
      options: ["Arbeidet feltet gjør langs kurven", "Massen av en tråd langs kurven", "Lengden av kurven", "Fluksen gjennom kurven"],
      explanation: "Bare komponenten av kraften langs bevegelsen bidrar til arbeidet.",
    },
    {
      question: "For å finne et potensial $\\varphi$ til $\\mathbf F=(P,Q)$ gjør du følgende:",
      options: ["Integrerer $\\varphi_x=P$ i $x$ og bestemmer den ukjente $y$-funksjonen via $\\varphi_y=Q$", "Deriverer $P$ og $Q$ og legger sammen", "Setter $\\varphi=P\\cdot Q$", "Løser $\\varphi_{xx}=\\varphi_{yy}$"],
      explanation: "Standardmetoden: integrer $P$ i $x$, deriver i $y$, sammenlign med $Q$ for å finne den manglende funksjonen.",
    },
    {
      question: "Har et område et hull, hvordan orienteres den indre randkurven (rundt hullet) i Greens teorem?",
      options: ["Med klokka, slik at området fortsatt ligger på venstre hånd", "Mot klokka, som den ytre randen", "Den utelates helt fra integralet", "I samme retning som gradienten"],
      explanation: "Ytre rand går mot klokka, indre rand med klokka — begge med området til venstre.",
    },
  ],
  'mat1110-5-3': [
    {
      question: "Det skalare flateintegralet $\\int_S f\\,dS$ regnes som:",
      options: ["$\\iint_R f(\\boldsymbol{\\phi})\\,|\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v|\\,du\\,dv$", "$\\iint_R f(\\boldsymbol{\\phi})\\,(\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v)\\,du\\,dv$", "$\\iint_R f(\\boldsymbol{\\phi})\\,du\\,dv$", "$\\iint_R f(\\boldsymbol{\\phi})\\,|\\boldsymbol{\\phi}_u|\\,|\\boldsymbol{\\phi}_v|\\,du\\,dv$"],
      explanation: "Skalarintegralet bruker LENGDEN av det fundamentale vektorproduktet — med absoluttverdi.",
    },
    {
      question: "Fluksen $\\int_S\\mathbf F\\cdot\\mathbf n\\,dS$ regnes som:",
      options: ["$\\iint_R \\mathbf F(\\boldsymbol{\\phi})\\cdot(\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v)\\,du\\,dv$", "$\\iint_R \\mathbf F(\\boldsymbol{\\phi})\\cdot|\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v|\\,du\\,dv$", "$\\iint_R |\\mathbf F(\\boldsymbol{\\phi})|\\,|\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v|\\,du\\,dv$", "$\\iint_R \\mathbf F(\\boldsymbol{\\phi})\\,du\\,dv$"],
      explanation: "Fluks bruker VEKTOREN $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ (uten absoluttverdi), fordi fortegnet/retningen betyr noe.",
    },
    {
      question: "Hvorfor står det fundamentale vektorproduktet UTEN absoluttverdi i fluks?",
      options: ["Fordi $\\mathbf n\\,dS=\\pm(\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v)\\,du\\,dv$ — lengden forkortes, fortegnet bæres videre", "Fordi fluks alltid er positiv", "Fordi $\\mathbf F$ allerede har fortegn", "Fordi absoluttverdi er umulig for vektorer"],
      explanation: "$\\mathbf n=\\frac{\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v}{|\\cdots|}$ og $dS=|\\cdots|\\,du\\,dv$ ganges sammen; lengden forkortes.",
    },
    {
      question: "Hva er den geometriske snarveien for fluks gjennom en plan flate med konstant $\\mathbf F\\cdot\\mathbf n$?",
      options: ["Fluks $=(\\mathbf F\\cdot\\mathbf n)\\cdot\\text{Areal}(S)$", "Fluks $=\\mathbf F\\cdot\\text{Areal}(S)$", "Fluks $=|\\mathbf F|\\cdot\\text{Areal}(S)$", "Fluks $=\\text{Areal}(S)$"],
      explanation: "Er normalen konstant og $\\mathbf F\\cdot\\mathbf n$ konstant, er integralet bare konstanten ganget med arealet.",
    },
    {
      question: "Før du regner fluks: hva er fortegnskontrollen?",
      options: ["Sjekk om $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ peker som oppgitt $\\mathbf n$; bytt fortegn ellers", "Sjekk om $\\mathbf F$ er konservativt", "Sjekk om integranden er positiv", "Sjekk om flaten er lukket"],
      explanation: "Sensor krever at du kontrollerer normalretningen og korrigerer fortegnet.",
    },
    {
      question: "Flateelementet for et skalart integral over grafen $z=g(x,y)$ er:",
      options: ["$dS=\\sqrt{1+g_x^2+g_y^2}\\,dx\\,dy$", "$dS=(1+g_x^2+g_y^2)\\,dx\\,dy$", "$dS=\\sqrt{g_x^2+g_y^2}\\,dx\\,dy$", "$dS=(-g_x,-g_y,1)\\,dx\\,dy$"],
      explanation: "Lengden av $(-g_x,-g_y,1)$ er $\\sqrt{1+g_x^2+g_y^2}$ — det skalare flateelementet.",
    },
    {
      question: "Arealet av flaten $z=x^2+y^2$ over $x^2+y^2\\le1$ er:",
      options: ["$\\dfrac{\\pi}{6}(5\\sqrt5-1)$", "$\\pi$", "$\\dfrac{\\pi}{6}(5\\sqrt5+1)$", "$2\\pi$"],
      explanation: "$\\int_0^{2\\pi}\\int_0^1\\sqrt{1+4r^2}\\,r\\,dr\\,d\\theta=\\frac{\\pi}{6}(5\\sqrt5-1)$.",
    },
    {
      question: "Fluksen av $\\mathbf F=(x,y,z)$ ut gjennom disken $z=2$, $x^2+y^2\\le4$ (oppadrettet) er:",
      options: ["$8\\pi$", "$4\\pi$", "$2\\pi$", "$16\\pi$"],
      explanation: "$\\mathbf F\\cdot\\mathbf n=z=2$ konstant; areal $=4\\pi$; snarvei gir $2\\cdot4\\pi=8\\pi$.",
    },
    {
      question: "I hvilket av disse integralene spiller orienteringen (normalretningen) INGEN rolle?",
      options: ["Det skalare flateintegralet $\\int_S f\\,dS$", "Fluksen $\\int_S\\mathbf F\\cdot\\mathbf n\\,dS$", "Alle flateintegral avhenger av orientering", "Ingen flateintegral avhenger av orientering"],
      explanation: "Skalarintegralet bruker $|\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v|$ og er upåvirket av hvilken vei normalen peker.",
    },
    {
      question: "Snur du orienteringen på en flate, hva skjer med fluksen?",
      options: ["Den skifter fortegn", "Den er uendret", "Den blir null", "Den dobles"],
      explanation: "$\\int_{-S}\\mathbf F\\cdot\\mathbf n\\,dS=-\\int_S\\mathbf F\\cdot\\mathbf n\\,dS$ — motsatt normal gir motsatt fortegn.",
    },
    {
      question: "For fluks gjennom grafen $z=g(x,y)$ med oppadrettet normal skal $\\mathbf F$ evalueres:",
      options: ["På flaten, dvs. med $z$ erstattet av $g(x,y)$", "I origo", "Med $z=0$", "Bare i randpunktene"],
      explanation: "Vektorfeltet regnes PÅ flaten, så $z=g(x,y)$ settes inn før prikkproduktet.",
    },
    {
      question: "Fluksen av $\\mathbf F=(x,y,z)$ ut gjennom sylinderflaten $x^2+y^2=1$, $0\\le z\\le2$ er:",
      options: ["$4\\pi$", "$2\\pi$", "$8\\pi$", "$0$"],
      explanation: "$\\mathbf F\\cdot(\\boldsymbol{\\phi}_\\theta\\times\\boldsymbol{\\phi}_z)=\\cos^2\\theta+\\sin^2\\theta=1$; $\\int_0^2\\int_0^{2\\pi}1=4\\pi$.",
    },
    {
      question: "Hvilken av disse er en klassisk feil i fluksregning?",
      options: ["Å ta med absoluttverdi på $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ i fluks", "Å sette $z=g$ inn i $\\mathbf F$", "Å gå til polarkoordinater", "Å oppgi svaret eksakt"],
      explanation: "Absoluttverdi hører til skalarintegral; i fluks ødelegger den fortegnsinformasjonen.",
    },
    {
      question: "Flateelementet for en kuleflate med radius $a$ er:",
      options: ["$dS=a^2\\sin\\varphi\\,d\\varphi\\,d\\theta$", "$dS=a\\sin\\varphi\\,d\\varphi\\,d\\theta$", "$dS=a^2\\,d\\varphi\\,d\\theta$", "$dS=a^2\\cos\\varphi\\,d\\varphi\\,d\\theta$"],
      explanation: "Fra kap. 5.1: $|\\boldsymbol{\\phi}_\\varphi\\times\\boldsymbol{\\phi}_\\theta|=a^2\\sin\\varphi$.",
    },
    {
      question: "Hva gir det skalare flateintegralet $\\int_S 1\\,dS$?",
      options: ["Arealet av flaten $S$", "Fluksen gjennom $S$", "Volumet innenfor $S$", "Omkretsen av randen til $S$"],
      explanation: "Med integrand $1$ summeres flateelementene til flatens areal.",
    },
    {
      question: "På et vannrett BUNNlokk med utadrettet normal er $\\mathbf F\\cdot\\mathbf n$ lik:",
      options: ["$-F_3$ (normalen peker nedover, $\\mathbf n=-\\mathbf k$)", "$F_3$ (normalen peker oppover)", "$0$ alltid", "$|\\mathbf F|$"],
      explanation: "Utadrettet fra volumet på en bunnflate peker nedover, så $\\mathbf n=-\\mathbf k$ og $\\mathbf F\\cdot\\mathbf n=-F_3$.",
    },
    {
      question: "Hvordan velger du parametrisering for en kuleflate?",
      options: ["Kulekoordinater $(\\varphi,\\theta)$", "Grafparametrisering $(x,y)$", "Kartesiske koordinater direkte", "Linjeparametrisering $\\mathbf r(t)$"],
      explanation: "Kulesymmetri gir enklest grenser og fundamentalt vektorprodukt i kulekoordinater.",
    },
    {
      question: "Fysisk: hva måler fluksen $\\int_S\\mathbf F\\cdot\\mathbf n\\,dS$ når $\\mathbf F$ er en strømningshastighet?",
      options: ["Netto volum som passerer gjennom flaten per tidsenhet", "Massen av flaten", "Arealet av flaten", "Hastigheten i ett punkt"],
      explanation: "Fluks = netto gjennomstrømning i normalretningen.",
    },
    {
      question: "En lukket flate (randen av et solid) settes sammen av flere biter. Total fluks er:",
      options: ["Summen av fluksen gjennom hver bit, hver med utadrettet normal", "Fluksen gjennom den største biten", "Alltid null", "Produktet av bitenes fluks"],
      explanation: "Fluks er additiv over flatebiter; dette er inngangen til divergensteoremet i kap. 5.4.",
    },
    {
      question: "Fluksen av $\\mathbf F=(x,y,z)$ gjennom paraboloiden $z=x^2+y^2$, $0\\le z\\le1$, med oppadrettet normal, er:",
      options: ["$-\\dfrac{\\pi}{2}$", "$\\dfrac{\\pi}{2}$", "$0$", "$\\pi$"],
      explanation: "$\\mathbf F\\cdot(-2x,-2y,1)=-(x^2+y^2)$; polar gir $\\int_0^{2\\pi}\\int_0^1 -r^2\\cdot r\\,dr\\,d\\theta=-\\tfrac\\pi2$.",
    },
  ],
  'mat1110-5-4': [
    {
      question: "Divergensen til $\\mathbf F=(F_1,F_2,F_3)$ er:",
      options: ["$\\dfrac{\\partial F_1}{\\partial x}+\\dfrac{\\partial F_2}{\\partial y}+\\dfrac{\\partial F_3}{\\partial z}$", "$\\dfrac{\\partial F_1}{\\partial y}+\\dfrac{\\partial F_2}{\\partial z}+\\dfrac{\\partial F_3}{\\partial x}$", "$\\dfrac{\\partial F_3}{\\partial x}-\\dfrac{\\partial F_2}{\\partial y}$", "$F_1+F_2+F_3$"],
      explanation: "Hver komponent deriveres med hensyn på SIN EGEN variabel, og summeres.",
    },
    {
      question: "Gauss' divergensteorem sier:",
      options: ["$\\iiint_V\\operatorname{div}\\mathbf F\\,dV=\\oiint_{\\partial V}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\iiint_V\\operatorname{div}\\mathbf F\\,dV=\\oint_{\\partial V}\\mathbf F\\cdot d\\mathbf r$", "$\\oiint_{\\partial V}\\operatorname{div}\\mathbf F\\,dS=\\iiint_V\\mathbf F\\,dV$", "$\\iiint_V\\mathbf F\\,dV=\\oiint_{\\partial V}\\operatorname{div}\\mathbf F\\cdot\\mathbf n\\,dS$"],
      explanation: "Teoremet: trippelintegral av divergens = utadrettet fluks gjennom randen.",
    },
    {
      question: "Hvilken retning må normalen peke i divergensteoremet?",
      options: ["Ut av volumet $V$ (utadrettet) overalt på randen", "Inn i volumet $V$", "Alltid oppover ($+\\mathbf k$)", "Retningen spiller ingen rolle"],
      explanation: "Teoremet gjelder for utadrettet normal; motsatt retning snur fortegnet.",
    },
    {
      question: "Hovedgrepet for fluks gjennom en krum delflate $T_1$ er:",
      options: ["$\\int_{T_1}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_V\\operatorname{div}\\mathbf F\\,dV-\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\int_{T_1}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_V\\operatorname{div}\\mathbf F\\,dV+\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\int_{T_1}\\mathbf F\\cdot\\mathbf n\\,dS=\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS-\\iiint_V\\operatorname{div}\\mathbf F\\,dV$", "$\\int_{T_1}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_V\\operatorname{div}\\mathbf F\\,dV$"],
      explanation: "Total fluks $=T_1+T_2=\\iiint\\operatorname{div}\\mathbf F\\,dV$, så $T_1=\\iiint\\operatorname{div}\\mathbf F\\,dV-T_2$.",
    },
    {
      question: "Divergensen til $\\mathbf F=(x,y,z)$ er:",
      options: ["$3$", "$1$", "$0$", "$x+y+z$"],
      explanation: "$\\partial_x x+\\partial_y y+\\partial_z z=1+1+1=3$.",
    },
    {
      question: "På et vannrett BUNNlokk peker den utadrettede normalen:",
      options: ["Nedover, $\\mathbf n=-\\mathbf k$", "Oppover, $\\mathbf n=\\mathbf k$", "Radielt utover", "Langs feltet $\\mathbf F$"],
      explanation: "Utadrettet fra volumet på en bunn peker ned; da er $\\mathbf F\\cdot\\mathbf n=-F_3$.",
    },
    {
      question: "Hvorfor foretrekker fasiten å finne krum-delflate-fluks via trippelintegralet?",
      options: ["Å regne det krumme flateintegralet direkte er tungt; trippelintegral minus plan del er lettere", "Fordi den krumme flaten ikke kan parametriseres", "Fordi fluks alltid er null gjennom krumme flater", "Fordi divergensteoremet gir feil svar direkte"],
      explanation: "Divergensteoremet + snarvei for den plane delen er langt mindre arbeid enn direkte integrasjon over den krumme flaten.",
    },
    {
      question: "Er $\\operatorname{div}\\mathbf F$ konstant, forenkles $\\iiint_V\\operatorname{div}\\mathbf F\\,dV$ til:",
      options: ["$\\operatorname{div}\\mathbf F\\cdot\\text{Vol}(V)$", "$\\operatorname{div}\\mathbf F\\cdot\\text{Areal}(\\partial V)$", "$\\text{Vol}(V)$", "$0$"],
      explanation: "En konstant kan trekkes utenfor integralet, som da blir konstanten ganger volumet.",
    },
    {
      question: "Et felt med $\\operatorname{div}\\mathbf F=0$ overalt kalles divergensfritt. Total fluks ut av en lukket flate er da:",
      options: ["$0$ for ethvert volum", "Lik volumet", "$2\\pi$", "Avhengig av flatens form"],
      explanation: "$\\oiint\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint 0\\,dV=0$ uansett $V$.",
    },
    {
      question: "Hvorfor er normalretningskontrollen på $T_2$ så viktig?",
      options: ["En fortegnsfeil på $T_2$ forplanter seg via minustegnet til $T_1$-svaret", "Fordi $T_2$ alltid har størst fluks", "Fordi $T_2$ er den krumme flaten", "Fordi $T_2$ ikke er med i teoremet"],
      explanation: "Siden $T_1=\\iiint\\operatorname{div}\\mathbf F\\,dV-T_2$, gir feil fortegn på $T_2$ direkte feil $T_1$.",
    },
    {
      question: "Fluksen av $\\mathbf F=(x,y,z)$ ut gjennom hele randen av sylinderen $x^2+y^2\\le4$, $0\\le z\\le5$ er:",
      options: ["$60\\pi$", "$20\\pi$", "$40\\pi$", "$12\\pi$"],
      explanation: "$\\operatorname{div}\\mathbf F=3$, volum $=20\\pi$, fluks $=3\\cdot20\\pi=60\\pi$.",
    },
    {
      question: "Hva må du gjøre i besvarelsen når du bruker divergensteoremet?",
      options: ["Navngi det eksplisitt («ifølge divergensteoremet …»)", "Bare skrive svaret", "Alltid regne den krumme flaten direkte i tillegg", "Bruke desimaltilnærming"],
      explanation: "Sensorregelen «begrunn alle svar» krever at teoremet navngis; ellers ikke full uttelling.",
    },
    {
      question: "Divergensteoremet krever at flaten $\\partial V$ er:",
      options: ["Lukket (omslutter volumet fullstendig)", "Åpen", "Plan", "En graf $z=g(x,y)$"],
      explanation: "Teoremet gjelder bare for lukkede flater; en åpen flate må lukkes med et lokk først.",
    },
    {
      question: "Divergensen til det divergensfrie feltet $\\mathbf F=(y,z,x)$ er:",
      options: ["$0$", "$1$", "$3$", "$x+y+z$"],
      explanation: "$\\partial_x y+\\partial_y z+\\partial_z x=0+0+0=0$.",
    },
    {
      question: "På topplokket $z=c$ (utadrettet) regner du den plane fluksen enklest med:",
      options: ["Den geometriske snarveien: $\\mathbf F\\cdot\\mathbf n=F_3$ konstant, fluks $=F_3\\cdot$ areal", "Full kuleparametrisering", "Divergensteoremet igjen", "Et linjeintegral rundt kanten"],
      explanation: "Vannrett lokk har konstant normal $\\mathbf k$; snarveien fra kap. 5.3 gir fluks direkte.",
    },
    {
      question: "I den kjedede O6-oppgaven, hvordan får (c) svaret sitt?",
      options: ["Ved å gjenbruke (b) trippelintegralet og (a) den plane fluksen: $(c)=(b)-(a)$", "Ved å regne alt på nytt fra bunnen", "Ved å multiplisere (a) og (b)", "(c) er alltid lik (a)"],
      explanation: "Delpunktene er kjedet: krum fluks = trippelintegral minus plan fluks.",
    },
    {
      question: "Hvilken forutsetning må $\\mathbf F$ oppfylle i HELE $V$?",
      options: ["Være $C^1$ (kontinuerlige partiellderiverte), også i indre punkter", "Være konstant", "Være konservativt", "Ha divergens null"],
      explanation: "En singularitet inni $V$ (f.eks. i origo) bryter forutsetningen; teoremet gjelder ikke da direkte.",
    },
    {
      question: "Divergensteoremet i planet svarer til:",
      options: ["Greens teorem på normalform (fluksform)", "Fundamentalteoremet for linjeintegral", "Stokes' teorem", "Cauchys integralsetning"],
      explanation: "Gauss i 2D er nettopp Greens fluksform $\\oint\\mathbf F\\cdot\\mathbf n\\,ds=\\iint(\\partial_x P+\\partial_y Q)\\,dA$.",
    },
    {
      question: "Fluksen av $\\mathbf F=(x,y,z)$ ut gjennom bunnen $z=0$, $x^2+y^2\\le4$ av et halvkuleområde er:",
      options: ["$0$", "$4\\pi$", "$16\\pi$", "$-4\\pi$"],
      explanation: "Utadrettet normal er $-\\mathbf k$, $\\mathbf F\\cdot\\mathbf n=-z=0$ på $z=0$.",
    },
    {
      question: "Divergensen kan også skrives som:",
      options: ["$\\nabla\\cdot\\mathbf F$", "$\\nabla\\times\\mathbf F$", "$\\nabla\\mathbf F$", "$|\\nabla\\mathbf F|$"],
      explanation: "$\\nabla\\cdot\\mathbf F$ er prikkproduktet med nabla; $\\nabla\\times\\mathbf F$ er derimot curl.",
    },
  ],
  'mat1110-5-5': [
    {
      question: "Stokes' teorem sier:",
      options: ["$\\oint_C\\mathbf F\\cdot d\\mathbf r=\\iint_S\\operatorname{curl}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\oint_C\\mathbf F\\cdot d\\mathbf r=\\iint_S\\operatorname{div}\\mathbf F\\,dS$", "$\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_V\\operatorname{curl}\\mathbf F\\,dV$", "$\\oint_C\\mathbf F\\cdot d\\mathbf r=\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS$"],
      explanation: "Stokes: sirkulasjon rundt randen = fluks av CURL gjennom flaten.",
    },
    {
      question: "Curl til $\\mathbf F=(F_1,F_2,F_3)$ har $z$-komponent:",
      options: ["$\\dfrac{\\partial F_2}{\\partial x}-\\dfrac{\\partial F_1}{\\partial y}$", "$\\dfrac{\\partial F_1}{\\partial x}+\\dfrac{\\partial F_2}{\\partial y}$", "$\\dfrac{\\partial F_3}{\\partial y}-\\dfrac{\\partial F_2}{\\partial z}$", "$\\dfrac{\\partial F_1}{\\partial y}-\\dfrac{\\partial F_2}{\\partial x}$"],
      explanation: "$z$-komponenten av $\\nabla\\times\\mathbf F$ er $\\partial_x F_2-\\partial_y F_1$ (samme som Greens integrand).",
    },
    {
      question: "Hvordan kobler høyrehåndsregelen randkurven $C$ og normalen $\\mathbf n$?",
      options: ["Krøll fingrene langs $C$, så peker tommelen langs $\\mathbf n$", "Tommelen langs $C$, fingrene langs $\\mathbf n$, venstre hånd", "$C$ og $\\mathbf n$ skal være parallelle", "$C$ og $\\mathbf n$ er alltid vinkelrette på $\\mathbf F$"],
      explanation: "Fingre i kurvens retning, tommel langs normalen — den positive orienteringen.",
    },
    {
      question: "For en disk i $xy$-planet med oppadrettet normal $\\mathbf n=\\mathbf k$, hvordan gjennomløpes randen positivt?",
      options: ["Mot klokka sett ovenfra", "Med klokka sett ovenfra", "Fra sentrum og utover", "Retningen er likegyldig"],
      explanation: "Høyrehåndsregelen: $\\mathbf n=\\mathbf k$ svarer til mot-klokka-rand.",
    },
    {
      question: "Curl til $\\mathbf F=(x,y,z)$ er:",
      options: ["$\\mathbf 0$", "$3$", "$(1,1,1)$", "$(x,y,z)$"],
      explanation: "Feltet er konservativt (gradient av $\\tfrac12(x^2+y^2+z^2)$), så curl er nullvektoren.",
    },
    {
      question: "Regimets hovedgrep i Stokes-oppgaver er:",
      options: ["Regn curl og gjenkjenn at det er et felt du alt har fluksen til", "Alltid regne linjeintegralet direkte", "Bruke divergensteoremet i stedet", "Sette curl lik null uansett felt"],
      explanation: "Kjenner du igjen $\\operatorname{curl}\\mathbf F$ som et alt utregnet felt, er linjeintegralet gratis.",
    },
    {
      question: "Er $\\mathbf F=\\mathbf 0$ på deler av randkurven, hva skjer med bidraget derfra?",
      options: ["Det faller bort ($\\int\\mathbf F\\cdot d\\mathbf r=0$ der)", "Det dobles", "Det blir uendelig", "Det må regnes med full parametrisering"],
      explanation: "Der $\\mathbf F=\\mathbf 0$ er integranden null, så det randstykket bidrar ingenting.",
    },
    {
      question: "For et konservativt felt $\\mathbf F=\\nabla\\varphi$ er $\\operatorname{curl}\\mathbf F$:",
      options: ["$\\mathbf 0$ overalt", "Konstant lik $(1,1,1)$", "Lik $\\mathbf F$ selv", "Udefinert"],
      explanation: "Curl av en gradient er alltid nullvektoren; da er sirkulasjonen null (jf. kap. 5.2).",
    },
    {
      question: "Stokes gir samme svar for enhver flate $S$ med samme rand $C$. Hva bruker vi dette til?",
      options: ["Å bytte en krum flate mot den enkleste flate disken med samme rand", "Å unngå å regne curl", "Å gjøre linjeintegralet om til et volumintegral", "Å endre orienteringen fritt"],
      explanation: "Flateuavhengigheten lar oss velge den enkleste flaten, typisk en flat disk.",
    },
    {
      question: "Greens teorem er et spesialtilfelle av Stokes for:",
      options: ["Et plant felt $\\mathbf F=(P,Q,0)$ over en flate i $xy$-planet med $\\mathbf n=\\mathbf k$", "Et hvilket som helst romfelt over en kule", "Et konservativt felt", "Et divergensfritt felt"],
      explanation: "Da blir $\\operatorname{curl}\\mathbf F\\cdot\\mathbf k=\\partial_x Q-\\partial_y P$, og Stokes reduseres til Green.",
    },
    {
      question: "$\\oint_C\\mathbf F\\cdot d\\mathbf r$ for $\\mathbf F=(-y,x,z)$ rundt enhetssirkelen i $z=0$ (mot klokka) er:",
      options: ["$2\\pi$", "$\\pi$", "$0$", "$4\\pi$"],
      explanation: "$\\operatorname{curl}\\mathbf F=(0,0,2)$; fluks over disken $=2\\cdot\\pi=2\\pi$.",
    },
    {
      question: "Curl skrives også som:",
      options: ["$\\nabla\\times\\mathbf F$", "$\\nabla\\cdot\\mathbf F$", "$\\nabla\\mathbf F$", "$\\nabla^2\\mathbf F$"],
      explanation: "Curl er kryssproduktet av nabla med feltet; $\\nabla\\cdot\\mathbf F$ er derimot divergensen.",
    },
    {
      question: "Hva er en effektiv sjekk på at du har regnet curl riktig?",
      options: ["Et konservativt felt (som $(x,y,z)$) skal gi $\\operatorname{curl}=\\mathbf 0$", "Curl skal alltid være en konstant", "Curl skal peke langs $\\mathbf F$", "Curl skal ha lengde $1$"],
      explanation: "Kjente konservative felt gir null curl — en rask kontroll av regningen.",
    },
    {
      question: "Fysisk måler $\\operatorname{curl}\\mathbf F$ i et punkt:",
      options: ["Feltets lokale virvling (rotasjon), langs en akse", "Feltets utspredning (kilde/sluk)", "Feltets styrke", "Avstanden til nærmeste kilde"],
      explanation: "Curl er et rotasjonsmål; divergens er utspredningsmålet.",
    },
    {
      question: "Hvorfor må du kunne Stokes' teorem utenat på eksamen?",
      options: ["V2022-formelsamlingen inneholder det ikke", "Fordi det aldri er relevant", "Fordi kalkulator ikke er tillatt", "Fordi det bare gjelder i planet"],
      explanation: "Både Stokes og divergensteoremet mangler i den utdelte formelsamlingen.",
    },
  ],
  'mat1110-5-6': [
    {
      question: "I O6-kjeden regnes fluksen gjennom den krumme delflaten $T_1$ som:",
      options: ["$\\iiint_V\\operatorname{div}\\mathbf F\\,dV-\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\iiint_V\\operatorname{div}\\mathbf F\\,dV+\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS$", "$\\int_{T_2}\\mathbf F\\cdot\\mathbf n\\,dS-\\iiint_V\\operatorname{div}\\mathbf F\\,dV$", "et direkte flateintegral over $T_1$"],
      explanation: "Total fluks $=T_1+T_2=\\iiint\\operatorname{div}\\mathbf F\\,dV$, så $T_1=\\iiint\\operatorname{div}\\mathbf F\\,dV-T_2$.",
    },
    {
      question: "Hvorfor er delpunkt-kjeding sentralt i O6?",
      options: ["(c) gjenbruker eksplisitt (a) den plane fluksen og (b) trippelintegralet", "Fordi alle deloppgavene har samme svar", "Fordi kjeden alltid gir null", "Fordi man må regne (c) før (a)"],
      explanation: "Fasiten setter (a) og (b) rett inn i $T_1=(b)-(a)$.",
    },
    {
      question: "På en bunnflate $z=0$ av et solid over $xy$-planet peker utadrettet normal:",
      options: ["Nedover, $\\mathbf n=-\\mathbf k$", "Oppover, $\\mathbf n=\\mathbf k$", "Radielt ut", "Langs feltet"],
      explanation: "Ut av volumet på en bunn er nedover; da er $\\mathbf F\\cdot\\mathbf n=-F_3$.",
    },
    {
      question: "Bunnfluksen gjennom $z=0$ er null presis når:",
      options: ["$F_3=0$ på $z=0$", "$F_3$ har et konstantledd", "$\\operatorname{div}\\mathbf F=0$", "flaten er en disk"],
      explanation: "$\\mathbf F\\cdot\\mathbf n=-F_3|_{z=0}$; den er null kun når $F_3=0$ der (f.eks. $F_3=z$ eller $z^2$).",
    },
    {
      question: "For $\\mathbf F=(x,y,z)$ over sylinderen $x^2+y^2\\le4$, $0\\le z\\le3$: hva er $\\iiint_V\\operatorname{div}\\mathbf F\\,dV$?",
      options: ["$36\\pi$", "$12\\pi$", "$24\\pi$", "$60\\pi$"],
      explanation: "$\\operatorname{div}\\mathbf F=3$, volum $=\\pi\\cdot4\\cdot3=12\\pi$, så $3\\cdot12\\pi=36\\pi$.",
    },
    {
      question: "For samme sylinder, fluks ut gjennom topplokket $z=3$ ($\\mathbf F=(x,y,z)$) er:",
      options: ["$12\\pi$", "$36\\pi$", "$24\\pi$", "$4\\pi$"],
      explanation: "$\\mathbf F\\cdot\\mathbf k=z=3$, areal $=4\\pi$, snarvei $3\\cdot4\\pi=12\\pi$.",
    },
    {
      question: "Da blir fluksen ut gjennom sideflaten (via divergensteoremet):",
      options: ["$24\\pi$", "$36\\pi$", "$12\\pi$", "$48\\pi$"],
      explanation: "$T_1=\\iiint\\operatorname{div}\\mathbf F\\,dV-\\text{topp}-\\text{bunn}=36\\pi-12\\pi-0=24\\pi$.",
    },
    {
      question: "Hva er den vanligste feilen som forplanter seg gjennom hele O6-kjeden?",
      options: ["Feil normalretning (fortegn) i et tidlig delpunkt", "Å bruke eksakte svar", "Å faktorisere trippelintegralet", "Å navngi divergensteoremet"],
      explanation: "Én fortegnsfeil i $T_2$ forplanter seg til $T_1=\\iiint\\operatorname{div}\\mathbf F\\,dV-T_2$.",
    },
    {
      question: "Divergensen til $\\mathbf F=(xz,yz,z^2)$ er:",
      options: ["$4z$", "$2z$", "$z^2$", "$3z$"],
      explanation: "$\\partial_x(xz)+\\partial_y(yz)+\\partial_z(z^2)=z+z+2z=4z$.",
    },
    {
      question: "Hvorfor foretrekkes divergensteoremet framfor å regne den krumme flaten direkte?",
      options: ["Direkte parametrisering av den krumme flaten er nesten alltid tyngre", "Fordi direkte integral gir feil svar", "Fordi den krumme flaten ikke har normal", "Fordi teoremet unngår all regning"],
      explanation: "Trippelintegral (ofte konstant/separabelt) minus en enkel plan fluks er langt mindre arbeid.",
    },
    {
      question: "I Stokes-varianten med vannrett disk og $\\mathbf n=\\mathbf k$ trenger du:",
      options: ["Bare $z$-komponenten av $\\operatorname{curl}\\mathbf F$", "Hele curl-vektoren integrert punktvis", "Divergensen i stedet", "Ingen curl i det hele tatt"],
      explanation: "$\\operatorname{curl}\\mathbf F\\cdot\\mathbf k$ er nettopp $z$-komponenten; de andre bidrar ikke.",
    },
    {
      question: "Curl til $\\mathbf F=(-2y,2x,z^3)$ er:",
      options: ["$(0,0,4)$", "$(0,0,2)$", "$(4,0,0)$", "$(0,0,0)$"],
      explanation: "$z$-komponent $\\partial_x(2x)-\\partial_y(-2y)=2+2=4$; de andre komponentene er null.",
    },
    {
      question: "Faktorisering av et trippelintegral betyr:",
      options: ["Å skrive integralet som produkt av enkeltintegraler når integranden separerer", "Å dele volumet i to like halvdeler", "Å faktorisere divergensen i primtall", "Å bytte til kartesiske koordinater"],
      explanation: "Separabel integrand ($r$-del $\\times$ $z$-del $\\times$ $\\theta$-del) gir et produkt av enkeltintegraler.",
    },
    {
      question: "Hvor mye tid bør du sette av per deloppgave på den avsluttende eksamenen?",
      options: ["Ca. 24 minutter (10 deloppgaver på 4 timer)", "Ca. 5 minutter", "Ca. 60 minutter", "Ubegrenset"],
      explanation: "10 likt tellende deloppgaver over 4 timer gir ca. 24 min hver.",
    },
    {
      question: "Volumelementet i et trippelintegral i kulekoordinater er:",
      options: ["$dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$dV=r\\,dz\\,dr\\,d\\theta$", "$dV=\\rho\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$", "$dV=d\\rho\\,d\\varphi\\,d\\theta$"],
      explanation: "Kule: $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$; sylinder er $r\\,dz\\,dr\\,d\\theta$.",
    },
  ],
  'mat1110-6-1': [
    {
      question: "Hva er den karakteristiske likningen som gir egenverdiene til $A$?",
      options: ["Determinanten $\\det(\\lambda I - A)$ settes lik null", "Determinanten $\\det(\\lambda I - A)$ settes lik én", "Determinanten $\\det(A)$ minus $\\lambda$ settes lik null", "Sporet $\\operatorname{tr}(A)$ minus $\\lambda$ settes lik null"],
      explanation: "Egenverdiene gjør $\\lambda I - A$ singulær, altså $\\det(\\lambda I - A)=0$. Formen $\\det(A-\\lambda I)=0$ er ekvivalent.",
    },
    {
      question: "Hvorfor kreves det at en egenvektor $v$ er forskjellig fra nullvektoren?",
      options: ["Nullvektoren løser $Av=\\lambda v$ for alle mulige $\\lambda$", "Nullvektoren gir alltid en rent kompleks egenverdi ut", "Ellers ville matrisens determinant blitt uendelig stor", "Ellers stemmer ikke sporet med egenverdisummen helt"],
      explanation: "$A\\cdot 0 = \\lambda\\cdot 0$ holder for alle $\\lambda$, så nullvektoren ville gjort ethvert tall til egenverdi. Derfor kreves $v\\ne 0$.",
    },
    {
      question: "Hvordan finner du egenvektorene for en kjent egenverdi $\\lambda$?",
      options: ["Radreduser $(A-\\lambda I)$ og les av dens nullrom", "Radreduser $(A+\\lambda I)$ og les av dens søylerom", "Regn ut den inverse matrisen til $(A-\\lambda I)$", "Regn determinanten til $(A-\\lambda I)$ helt på nytt"],
      explanation: "Egenvektorene er løsningene av $(A-\\lambda I)v=0$ — nullrommet, funnet ved radreduksjon.",
    },
    {
      question: "Egenverdiene til $A=\\begin{pmatrix} 4 & 1 \\\\ 2 & 3\\end{pmatrix}$ er:",
      options: ["$\\lambda = 2$ og $\\lambda = 5$", "$\\lambda = 4$ og $\\lambda = 3$", "$\\lambda = 1$ og $\\lambda = 2$", "$\\lambda = 3$ og $\\lambda = 7$"],
      explanation: "$\\lambda^2 - 7\\lambda + 10 = (\\lambda-2)(\\lambda-5)$. Kontroll: $2+5=7=\\operatorname{tr}A$, $2\\cdot5=10=\\det A$.",
    },
    {
      question: "Hva er summen av egenverdiene til en matrise alltid lik?",
      options: ["Sporet, altså summen av alle diagonalinngangene", "Determinanten, altså produktet av hele diagonalen", "Rangen, altså antall lineært uavhengige rader", "Nulliteten, altså dimensjonen til hele nullrommet"],
      explanation: "$\\lambda_1+\\cdots+\\lambda_n = \\operatorname{tr}A$. Produktet er derimot lik $\\det A$.",
    },
    {
      question: "Hva er produktet av alle egenverdiene til $A$ lik?",
      options: ["Determinanten $\\det A$ til hele matrisen", "Sporet $\\operatorname{tr}A$ til hele matrisen", "Rangen til koeffisientmatrisen $A$ selv", "Summen av samtlige diagonalinnganger"],
      explanation: "$\\lambda_1\\cdots\\lambda_n = \\det A$. Sammen med sporet gir dette en rask kontroll.",
    },
    {
      question: "Egenverdiene til $A=\\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2\\end{pmatrix}$ er:",
      options: ["$\\lambda=4$ (enkel) og $\\lambda=1$ (dobbel)", "$\\lambda=1$ (enkel) og $\\lambda=4$ (dobbel)", "$\\lambda=2$ (med multiplisitet tre totalt)", "$\\lambda=6$ (enkel) og $\\lambda=0$ (dobbel)"],
      explanation: "$p(\\lambda)=(\\lambda-1)^2(\\lambda-4)$: $\\lambda=1$ med multiplisitet $2$, $\\lambda=4$ med $1$. Kontroll: $1+1+4=6=\\operatorname{tr}A$.",
    },
    {
      question: "Hva sier den algebraiske multiplisiteten til en egenverdi?",
      options: ["Hvor mange ganger den er rot i karakteristisk polynom", "Hvor mange lineært uavhengige egenvektorer den har", "Hvor stor determinanten til egenrommet dens er", "Hvor mange pivoter matrisen $A-\\lambda I$ beholder"],
      explanation: "Algebraisk multiplisitet er rotmultiplisiteten i $p(\\lambda)$. Antall uavhengige egenvektorer er den geometriske multiplisiteten.",
    },
    {
      question: "Hva er den geometriske multiplisiteten til en egenverdi $\\lambda$?",
      options: ["Dimensjonen til egenrommet, altså $\\dim E_\\lambda$", "Rotmultiplisiteten i det karakteristiske polynomet", "Absoluttverdien $|\\lambda|$ til selve egenverdien", "Antall gjenværende pivoter i matrisen $A-\\lambda I$"],
      explanation: "Geometrisk multiplisitet er $\\dim E_\\lambda$ = antall frie variabler i $A-\\lambda I$; den er $\\ge 1$ og $\\le$ algebraisk multiplisitet.",
    },
    {
      question: "Når er en $n\\times n$-matrise diagonaliserbar?",
      options: ["Når den har $n$ lineært uavhengige egenvektorer", "Når alle egenverdiene er positive reelle tall", "Når determinanten er forskjellig fra tallet null", "Når matrisen både er inverterbar og symmetrisk"],
      explanation: "Diagonaliserbarhet krever $n$ uavhengige egenvektorer. Inverterbarhet er verken nødvendig eller tilstrekkelig.",
    },
    {
      question: "Hva gjelder for egenverdiene til en reell symmetrisk matrise?",
      options: ["De er alle reelle, med innbyrdes ortogonale egenrom", "De er alltid komplekse og opptrer i konjugerte par", "De er alltid positive og innbyrdes forskjellige tall", "De er alltid nøyaktig lik matrisens diagonalinnganger"],
      explanation: "Spektralteoremet: en reell symmetrisk matrise har bare reelle egenverdier og innbyrdes ortogonale egenvektorer.",
    },
    {
      question: "Matrisen $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0\\end{pmatrix}$ (rotasjon) har egenverdier:",
      options: ["$\\lambda = i$ og $\\lambda = -i$, uten reell egenvektor", "$\\lambda = 1$ og $\\lambda = -1$, begge helt reelle", "$\\lambda = 0$ som egenverdi med multiplisitet to", "$\\lambda = 1$ og $\\lambda = 0$, begge helt reelle"],
      explanation: "$\\lambda^2+1=0$ gir $\\lambda=\\pm i$. En ren rotasjon har ingen reell egenretning.",
    },
    {
      question: "En $2\\times2$-matrise har $\\operatorname{tr}A=5$ og $\\det A=6$. Egenverdiene er:",
      options: ["$\\lambda = 2$ og $\\lambda = 3$", "$\\lambda = 1$ og $\\lambda = 5$", "$\\lambda = 5$ og $\\lambda = 6$", "$\\lambda = 6$ og $\\lambda = -1$"],
      explanation: "$\\lambda^2 - 5\\lambda + 6 = (\\lambda-2)(\\lambda-3)$. Spor og determinant bestemmer $2\\times2$-egenverdiene fullstendig.",
    },
    {
      question: "Hvorfor er $A=\\begin{pmatrix} 2 & 1 \\\\ 0 & 2\\end{pmatrix}$ ikke diagonaliserbar?",
      options: ["Egenverdien $2$ er dobbel, men har bare én egenvektor", "Egenverdiene er komplekse og opptrer i konjugerte par", "Determinanten til matrisen er nøyaktig lik null", "Sporet er ikke lik summen av egenverdiene dens"],
      explanation: "$\\lambda=2$ har algebraisk multiplisitet $2$ men bare én egenvektor, så det finnes ingen egenbasis. Matrisen er defekt.",
    },
    {
      question: "Hvordan sjekker du raskt at $\\lambda_0$ er en egenverdi til $A$?",
      options: ["Sjekk om determinanten $\\det(A-\\lambda_0 I)$ er null", "Sjekk om determinanten $\\det(A-\\lambda_0 I)$ er én", "Sjekk om sporet $\\operatorname{tr}(A)$ er lik $\\lambda_0$", "Sjekk om matrisen $A-\\lambda_0 I$ er inverterbar"],
      explanation: "$\\lambda_0$ er egenverdi nettopp når $A-\\lambda_0 I$ er singulær, det vil si $\\det(A-\\lambda_0 I)=0$.",
    },
  ],
  'mat1110-6-2': [
    {
      question: "Hva betyr det å diagonalisere en matrise $A$?",
      options: ["Å skrive $A = PDP^{-1}$ der matrisen $D$ er diagonal", "Å radredusere matrisen $A$ helt til ren trappeform", "Å finne den inverse matrisen $A^{-1}$ til matrisen", "Å skrive matrisen $A$ som en sum av to diagonaler"],
      explanation: "Diagonalisering er $A=PDP^{-1}$: $P$ har egenvektorene som søyler, $D$ har egenverdiene på diagonalen.",
    },
    {
      question: "Hva står i søylene til matrisen $P$ ved diagonalisering?",
      options: ["Egenvektorene, i takt med egenverdiene i $D$", "Egenverdiene, ordnet stigende nedover diagonalen", "De reduserte radene hentet fra selve trappeformen", "Standardbasisvektorene $e_1$ til og med $e_n$"],
      explanation: "$P$ har egenvektorene som søyler; egenverdien i søyle $j$ av $D$ hører til egenvektoren i søyle $j$ av $P$.",
    },
    {
      question: "Når er en $n\\times n$-matrise diagonaliserbar?",
      options: ["Når den har $n$ lineært uavhengige egenvektorer", "Når den har minst én reell egenverdi ulik null", "Når determinanten er forskjellig fra tallet null", "Når alle egenverdiene tilfeldigvis er hele tall"],
      explanation: "Diagonaliserbarhet krever $n$ uavhengige egenvektorer. $n$ forskjellige egenverdier er tilstrekkelig, men ikke nødvendig.",
    },
    {
      question: "Hva er $A^n$ når $A = PDP^{-1}$?",
      options: ["$A^n = PD^nP^{-1}$", "$A^n = P^nDP^{-n}$", "$A^n = P^{-1}D^nP$", "$A^n = PDP^{-n}$"],
      explanation: "De indre $P^{-1}P$ teleskoperer bort, så $A^n = PD^nP^{-1}$ med $D^n=\\operatorname{diag}(\\lambda_i^n)$.",
    },
    {
      question: "Hvordan regner du $D^n$ for en diagonalmatrise $D=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$?",
      options: ["Ved å opphøye hver diagonalinngang i $n$-te potens", "Ved å gange hele diagonalmatrisen $D$ med tallet $n$", "Ved å la hele diagonalen stå fullstendig uendret", "Ved å dele hver diagonalinngang på tallet $n$"],
      explanation: "En diagonalmatrise opphøyes inngang for inngang: hver diagonalinngang i $n$-te potens.",
    },
    {
      question: "Hvorfor er egenvektordekomponering nyttig for $\\lim_{n\\to\\infty} A^n v$?",
      options: ["Hvert ledd utvikler seg som \\lambda_i^n v_i$", "Den gjør matrisen symmetrisk før grensen tas ut", "Den fjerner behovet for å finne noen egenverdier", "Den gir alltid en grense uansett hvilke egenverdier"],
      explanation: "Med $v=\\sum c_iv_i$ blir $A^nv=\\sum c_i\\lambda_i^n v_i$; grensen leses ledd for ledd fra egenverdiene.",
    },
    {
      question: "I $A^nv=\\sum c_i\\lambda_i^n v_i$, hva skjer med et ledd der $|\\lambda_i|<1$?",
      options: ["Det dør ut, siden $\\lambda_i^n$ går mot null", "Det overlever helt uendret i selve grensen", "Det vokser ubegrenset når $n$ blir stor", "Det bytter fortegn i hvert eneste steg"],
      explanation: "$|\\lambda|<1 \\Rightarrow \\lambda^n\\to 0$. Bare ledd med $\\lambda=1$ overlever; $|\\lambda|>1$ divergerer.",
    },
    {
      question: "Hvilken egenverdi har en stokastisk (Markov-) matrise alltid?",
      options: ["Egenverdien $\\lambda = 1$", "Egenverdien $\\lambda = 0$", "Egenverdien $\\lambda = -1$", "Egenverdien $\\lambda = 2$"],
      explanation: "En matrise med søylesum $1$ har alltid $\\lambda=1$, og alle egenverdier oppfyller $|\\lambda|\\le 1$.",
    },
    {
      question: "Hva er den stasjonære fordelingen til en Markov-matrise?",
      options: ["Egenvektoren for $\\lambda=1$ skalert til komponentsum én", "Egenvektoren som hører til den aller minste egenverdien", "Startvektoren $x_0$ slik den ser ut etter kun ett steg", "Gjennomsnittet av samtlige egenvektorer til matrisen"],
      explanation: "Den stasjonære fordelingen $\\pi$ oppfyller $A\\pi=\\pi$ og har sum $1$ — den skalerte $\\lambda=1$-egenvektoren.",
    },
    {
      question: "For Markov-matrisen $A=\\begin{pmatrix} 0{,}8 & 0{,}3 \\\\ 0{,}2 & 0{,}7\\end{pmatrix}$, hva er $\\lim A^n x_0$?",
      options: ["Den stasjonære fordelingen $(0{,}6,\\ 0{,}4)$", "Startvektoren $x_0$ nøyaktig slik den var", "Nullvektoren $(0,\\ 0)$ uansett startpunkt", "Den jevne fordelingen $(0{,}5,\\ 0{,}5)$ alltid"],
      explanation: "Egenverdiene er $1$ og $0{,}5$; $\\lambda=1$-egenvektoren $(3,2)$ skalert gir $(0{,}6,0{,}4)$, uavhengig av $x_0$.",
    },
    {
      question: "En matrise har egenverdiene $2$ og $1$. Konvergerer $A^n v$ når $n\\to\\infty$?",
      options: ["Nei, siden $\\lambda=2$-leddet vokser ubegrenset", "Ja, mot egenvektoren som hører til $\\lambda=1$", "Ja, den konvergerer alltid mot ren nullvektor", "Ja, mot summen av de to egenvektorene til $A$"],
      explanation: "Egenverdien $2$ har $|\\lambda|>1$, så $2^n\\to\\infty$ og grensen finnes ikke (med mindre $v$ mangler komponent langs den).",
    },
    {
      question: "Hvordan kontrollerer du raskt et lukket uttrykk for $A^n$?",
      options: ["Sett $n=1$ og sjekk at du får matrisen $A$", "Sett $n=0$ og sjekk at du får matrisen $D$", "Regn determinanten og sjekk mot tallet én", "Sjekk at samtlige innganger er positive tall"],
      explanation: "For $n=1$ må $A^n$ reduseres til $A$ selv — en enkel og effektiv kontroll.",
    },
    {
      question: "Hva gjelder for en reell symmetrisk matrise ved diagonalisering?",
      options: ["Den kan skrives $A=QDQ^T$ med ortonormale søyler", "Den lar seg aldri diagonalisere på vanlig måte", "Den har alltid utelukkende komplekse egenverdier", "Den krever at basismatrisen $P$ ikke er inverterbar"],
      explanation: "Spektralteoremet gir ortogonal diagonalisering $A=QDQ^T$ der $Q^{-1}=Q^T$.",
    },
    {
      question: "Hvorfor kan $A=\\begin{pmatrix} 2 & 1 \\\\ 0 & 2\\end{pmatrix}$ ikke diagonaliseres?",
      options: ["Den mangler en egenvektor: geometrisk mult. er $1<2$", "Egenverdiene er komplekse og opptrer i konjugerte par", "Determinanten til matrisen er nøyaktig lik null", "Sporet til matrisen er slett ikke definert her"],
      explanation: "$\\lambda=2$ har algebraisk multiplisitet $2$ men bare én egenvektor, så det finnes ingen egenbasis. Matrisen er defekt.",
    },
    {
      question: "Hvordan defineres matrise-kvadratroten $A^{1/2}$ når $A=PDP^{-1}$?",
      options: ["Ta roten på diagonalen: $A^{1/2}=P\\,D^{1/2}\\,P^{-1}$", "Halver hele matrisen direkte til $A^{1/2}=\\tfrac12 A$", "Ta roten av basismatrisene: $P^{1/2}DP^{-1/2}$", "Gang identiteten: $A^{1/2}=\\sqrt{\\det A}\\cdot I$"],
      explanation: "Man tar kvadratroten på diagonalen: $A^{1/2}=PD^{1/2}P^{-1}$ med $D^{1/2}=\\operatorname{diag}(\\sqrt{\\lambda_i})$, og da er $(A^{1/2})^2=A$.",
    },
  ],
  'mat1110-6-3': [
    {
      question: "Hva menes med at en rekke $\\sum a_n$ konvergerer?",
      options: ["At delsummene $S_N$ har en endelig grenseverdi", "At de enkelte leddene $a_n$ nærmer seg tallet null", "At samtlige ledd $a_n$ i rekka er positive tall", "At rekka består av uendelig mange enkeltledd"],
      explanation: "En rekke konvergerer nettopp når følgen av delsummer $S_N$ har en endelig grense.",
    },
    {
      question: "Hva sier divergenstesten (leddtesten)?",
      options: ["Hvis $a_n$ ikke går mot null, divergerer $\\sum a_n$", "Hvis $a_n$ går mot null, konvergerer alltid $\\sum a_n$", "Hvis $a_n$ er positive tall, konvergerer $\\sum a_n$", "Hvis $a_n$ går mot tallet én, konvergerer $\\sum a_n$"],
      explanation: "Går ikke leddene mot null, divergerer rekka. Men $a_n\\to 0$ er ikke nok for konvergens.",
    },
    {
      question: "Er $a_n\\to 0$ nok til å garantere at $\\sum a_n$ konvergerer?",
      options: ["Nei — den harmoniske rekka er et moteksempel", "Ja — dette er den fulle og hele betingelsen", "Ja, men bare når alle leddene er positive tall", "Nei — leddene må i stedet gå mot tallet én"],
      explanation: "$a_n\\to 0$ er nødvendig, ikke tilstrekkelig. $\\sum\\tfrac1n$ har $a_n\\to 0$ men divergerer.",
    },
    {
      question: "Når konvergerer en geometrisk rekke $\\sum a k^n$, og hva blir summen?",
      options: ["Når $|k|<1$; summen fra $n=0$ er $\\tfrac{a}{1-k}$", "Når $|k|>1$; da er summen lik $\\tfrac{a}{k-1}$", "Alltid, uansett $k$; da er summen lik $a\\cdot k$", "Når $k>0$; da blir summen lik $a\\cdot k^\\infty$"],
      explanation: "Geometrisk rekke konvergerer for $|k|<1$ med sum $\\tfrac{a}{1-k}$ (start på $n=0$).",
    },
    {
      question: "For hvilke $p$ konvergerer $p$-rekka $\\sum \\tfrac{1}{n^p}$?",
      options: ["For $p>1$", "For $p<1$", "For $p=1$", "For $p\\ge 0$"],
      explanation: "$p$-rekka konvergerer hvis og bare hvis $p>1$. $p=1$ er den divergente harmoniske rekka.",
    },
    {
      question: "Hva sier forholdstesten når $L=\\lim|a_{n+1}/a_n|$?",
      options: ["$L<1$ konvergens, $L>1$ divergens, $L=1$ ubestemt", "$L<1$ divergens, mens $L>1$ gir sikker konvergens", "$L=1$ betyr alltid at rekka konvergerer helt sikkert", "$L>0$ betyr alltid at rekka divergerer fullstendig"],
      explanation: "$L<1$ gir konvergens, $L>1$ divergens. Ved $L=1$ sier testen ingenting.",
    },
    {
      question: "Hvilken test passer best for $\\sum \\tfrac{2^n}{n!}$?",
      options: ["Forholdstesten, siden det er fakultet i nevneren", "Integraltesten på en tilhørende avtakende funksjon", "Rottesten brukt helt uten noen forenkling først", "Divergenstesten brukt alene uten videre tester"],
      explanation: "Fakultet forenkles kraftig i $\\tfrac{a_{n+1}}{a_n}=\\tfrac{2}{n+1}\\to 0<1$, så forholdstesten gir konvergens.",
    },
    {
      question: "Hva krever grensesammenligningstesten for at $\\sum a_n,\\ \\sum b_n$ oppfører seg likt?",
      options: ["At $\\lim \\tfrac{a_n}{b_n}=c$ med $0<c<\\infty$ (positive)", "At leddene $a_n$ og $b_n$ er like for hver eneste $n$", "At grenseverdien av $a_n$ er lik grenseverdien av $b_n$", "At sammenligningsrekka $\\sum b_n$ må være geometrisk"],
      explanation: "Er grensen av forholdet et endelig positivt tall, konvergerer eller divergerer de samtidig.",
    },
    {
      question: "Hva sier Leibniz' kriterium for en alternerende rekke $\\sum(-1)^n b_n$?",
      options: ["Konvergens hvis $b_n$ er avtakende mot tallet null", "Konvergens alltid, helt uansett hvordan $b_n$ ser ut", "Divergens dersom $b_n$ i det hele tatt går mot null", "Konvergens hvis $b_n$ i stedet er voksende oppover"],
      explanation: "Alternerende rekke med $b_n>0$ avtakende mot $0$ konvergerer (Leibniz).",
    },
    {
      question: "Hva er forskjellen på absolutt og betinget konvergens?",
      options: ["Absolutt: $\\sum|a_n|$ konvergerer; betinget: bare $\\sum a_n$", "Betinget konvergens er alltid sterkere enn absolutt her", "Absolutt konvergens krever at alle ledd er positive tall", "De to begrepene betyr nøyaktig det samme i praksis"],
      explanation: "Konvergerer $\\sum|a_n|$ er konvergensen absolutt; konvergerer $\\sum a_n$ men ikke $\\sum|a_n|$, er den betinget.",
    },
    {
      question: "Hva er konvergensradiusen $R$ til en potensrekke?",
      options: ["Tallet der rekka skifter mellom konvergens og divergens", "Summen som rekka konvergerer mot der den konvergerer", "Antall ledd før rekka faktisk stabiliserer seg helt", "Den største egenverdien knyttet til selve rekka"],
      explanation: "$R$ deler $x$-aksen: konvergens for $|x|<R$, divergens for $|x|>R$. Endepunktene $|x|=R$ sjekkes separat.",
    },
    {
      question: "Hvorfor må endepunktene $x=\\pm R$ undersøkes separat for en potensrekke?",
      options: ["Der gir forholds- og rottesten $L=1$ og tier helt", "Der er potensrekka alltid garantert divergent uansett", "Der er konvergensradiusen $R$ ikke lenger definert", "Der blir summen av rekka alltid uendelig stor"],
      explanation: "I endepunktene blir $L=1$, som er inkonklusivt, så man må bruke tallrekketestene direkte.",
    },
    {
      question: "Konvergensområdet til $\\sum \\tfrac{x^n}{n}$ er:",
      options: ["$[-1,\\ 1)$", "$(-1,\\ 1)$", "$[-1,\\ 1]$", "$(-1,\\ 1]$"],
      explanation: "$R=1$; $x=1$ gir harmonisk (divergerer), $x=-1$ gir alternerende harmonisk (konvergerer). Altså $[-1,1)$.",
    },
    {
      question: "Konvergensområdet til $\\sum \\tfrac{x^n}{n^2}$ er:",
      options: ["$[-1,\\ 1]$", "$(-1,\\ 1)$", "$[-1,\\ 1)$", "$(-1,\\ 1]$"],
      explanation: "$R=1$; begge endepunkt gir en $p$-rekke med $p=2$ (den ene alternerende), som konvergerer. Altså $[-1,1]$.",
    },
    {
      question: "Hva er forskjellen mellom følgegrensen $\\lim a_n$ og rekkesummen $\\sum a_n$?",
      options: ["Grensen er hva leddene nærmer seg; summen er totalen", "De to størrelsene er alltid nøyaktig like i verdi", "Summen er alltid strengt mindre enn selve grensen", "Grensen finnes kun i tilfeller der summen divergerer"],
      explanation: "$\\lim a_n$ gjelder de enkelte leddene; $\\sum a_n$ er summen. Å blande dem er en vanlig feil.",
    },
  ],
  'mat1110-6-4': [
    {
      question: "Hva menes med en lukket sum av en potensrekke?",
      options: ["En funksjon av $x$ skrevet helt uten sum-tegn", "Summen av de ti aller første leddene i rekka", "Konvergensradiusen $R$ som hører til rekka", "Rekka omskrevet med fakultet i hver enkelt nevner"],
      explanation: "En lukket sum er funksjonen rekka konvergerer til, f.eks. $\\sum x^n = \\tfrac{1}{1-x}$ for $|x|<1$.",
    },
    {
      question: "Hva er summen av den geometriske rekka $\\sum_{n=0}^\\infty x^n$ for $|x|<1$?",
      options: ["$\\dfrac{1}{1-x}$", "$\\dfrac{1}{1+x}$", "$\\dfrac{x}{1-x}$", "$\\dfrac{1}{x-1}$"],
      explanation: "Grunnrekka $\\sum_{n=0}^\\infty x^n = \\tfrac{1}{1-x}$ for $|x|<1$ — startpunktet for nesten all summering.",
    },
    {
      question: "Hvor er leddvis derivasjon og integrasjon av en potensrekke gyldig?",
      options: ["Innenfor konvergensradiusen, for $|x|<R$", "For alle verdier av $x$, helt uten noe unntak", "Utelukkende i de to endepunktene $x=\\pm R$", "Utelukkende i det ene punktet der $x=0$"],
      explanation: "Leddvis regning er lovlig for $|x|<R$; endepunktene må sjekkes på nytt.",
    },
    {
      question: "Hva skjer med konvergensradiusen når du deriverer en potensrekke leddvis?",
      options: ["Den forblir den samme radiusen $R$", "Den blir automatisk halvert til $R/2$", "Den blir alltid uendelig stor etterpå", "Den kollapser alltid ned til tallet null"],
      explanation: "Både derivasjon og integrasjon bevarer $R$; bare endepunktenes status kan endres.",
    },
    {
      question: "Ved leddvis integrasjon av en potensrekke — hva må du huske?",
      options: ["Å bestemme konstanten $C$ fra et kjent punkt", "At integralet alltid gir tilbake en geometrisk rekke", "At konvergensradiusen $R$ da blir uendelig stor", "At du trygt kan hoppe over hele start-indeksen"],
      explanation: "Integrasjonskonstanten $C$ bestemmes fra et kjent punkt, ofte $x=0$. Å glemme den er en klassisk feil.",
    },
    {
      question: "Hva er en lukket sum for $\\sum_{n=1}^\\infty \\dfrac{x^n}{n}$?",
      options: ["$-\\ln(1-x)$", "$\\ln(1-x)$", "$\\dfrac{1}{1-x}$", "$e^x - 1$"],
      explanation: "Deriverer man $\\sum\\tfrac{x^n}{n}$ leddvis får man $\\tfrac{1}{1-x}$; integrasjon tilbake med $C=0$ gir $-\\ln(1-x)$.",
    },
    {
      question: "Hva blir $\\dfrac{d}{dx}\\sum_{n=0}^\\infty x^n$ regnet leddvis?",
      options: ["$\\sum n x^{n-1}$, altså $\\dfrac{1}{(1-x)^2}$", "$\\sum_{n=0}^\\infty x^{n+1}$, altså $\\dfrac{x}{1-x}$", "$\\sum_{n=0}^\\infty \\dfrac{x^n}{n+1}$ som en helt ny rekke", "$\\dfrac{1}{1-x}$, altså den står helt uendret igjen"],
      explanation: "Leddvis derivasjon av $\\tfrac{1}{1-x}$ gir $\\sum n x^{n-1} = \\tfrac{1}{(1-x)^2}$.",
    },
    {
      question: "Hva er hjelpefunksjonsmetoden ved summering?",
      options: ["Deriver/integrer $f=\\sum a_n x^n$ mot en kjent rekke", "Bytt ut variabelen $x$ med en av matrisens egenverdier", "Regn de ti første delsummene rent numerisk for hånd", "Sett $x=0$ og les rett av det ene konstante leddet"],
      explanation: "Man definerer $f(x)=\\sum a_n x^n$, manipulerer den til en gjenkjennbar (ofte geometrisk) rekke, og går tilbake.",
    },
    {
      question: "Hvordan får du en tallrekkesum fra en lukket potensrekkesum $f(x)$?",
      options: ["Sett inn en $x_0$ i konvergensområdet: $f(x_0)$", "Deriver funksjonen $f$ og sett deretter inn $x=0$", "Ta grenseverdien av $f$ når $x$ går mot uendelig", "Regn ut konvergensradiusen $R$ som hører til rekka"],
      explanation: "En tallrekkesum leses av som $\\sum a_n x_0^n = f(x_0)$ for $x_0$ i konvergensområdet.",
    },
    {
      question: "Hva er $\\sum_{n=1}^\\infty \\dfrac{1}{n\\,2^n}$?",
      options: ["$\\ln 2$", "$\\dfrac12$", "$1$", "$2\\ln 2$"],
      explanation: "Leddet er $\\tfrac{(1/2)^n}{n}$, så sett $x=\\tfrac12$ i $\\sum\\tfrac{x^n}{n}=-\\ln(1-x)$: $-\\ln\\tfrac12 = \\ln 2$.",
    },
    {
      question: "Hva er en lukket sum for $\\sum_{n=1}^\\infty n\\,x^n$ på $|x|<1$?",
      options: ["$\\dfrac{x}{(1-x)^2}$", "$\\dfrac{1}{(1-x)^2}$", "$\\dfrac{x}{1-x}$", "$\\dfrac{1}{1-x^2}$"],
      explanation: "Deriver $\\tfrac{1}{1-x}$ til $\\tfrac{1}{(1-x)^2}=\\sum n x^{n-1}$, gang med $x$: $\\sum n x^n = \\tfrac{x}{(1-x)^2}$.",
    },
    {
      question: "Hvorfor må $x_0$ ligge i konvergensområdet før du leser av $f(x_0)$?",
      options: ["Utenfor området er likheten $f(x_0)=\\sum a_n x_0^n$ ugyldig", "Ellers blir integrasjonskonstanten $C$ regnet fullstendig feil", "Ellers vil konvergensradiusen $R$ endre seg gradvis underveis", "Ellers blir tallrekkesummen alltid et negativt tall til slutt"],
      explanation: "Den lukkede formen representerer rekka bare der den konvergerer; innsetting utenfor gir feil svar.",
    },
    {
      question: "Hva er Maclaurin-rekka for $e^x$, og hva er konvergensradiusen?",
      options: ["$\\sum \\dfrac{x^n}{n!}$, med $R=\\infty$", "$\\sum_{n=0}^\\infty x^n$, med $R=1$", "$\\sum_{n=1}^\\infty \\dfrac{x^n}{n}$, med $R=1$", "$\\sum_{n=0}^\\infty n!\\,x^n$, med $R=0$"],
      explanation: "$e^x=\\sum\\tfrac{x^n}{n!}$ konvergerer for alle $x$ fordi $n!$ vokser fortere enn enhver potens.",
    },
    {
      question: "Hvordan får du rekka for $\\arctan x$ fra en geometrisk rekke?",
      options: ["Integrer $\\tfrac{1}{1+x^2}=\\sum(-x^2)^n$ leddvis", "Deriver den geometriske rekka $\\tfrac{1}{1-x}$ hele to ganger", "Sett inn $x=1$ i den Maclaurin-rekka som hører til $e^x$", "Multipliser $\\sin x$-rekka og $\\cos x$-rekka med hverandre"],
      explanation: "$\\tfrac{1}{1+x^2}=\\sum(-x^2)^n$; leddvis integrasjon fra $0$ til $x$ gir $\\arctan x = \\sum\\tfrac{(-1)^n x^{2n+1}}{2n+1}$.",
    },
    {
      question: "Hva er poenget med delbrøk, f.eks. $\\tfrac{1}{n(n+1)}=\\tfrac1n-\\tfrac1{n+1}$?",
      options: ["Rekka splittes i to kjente rekker", "Konvergensradiusen $R$ til hele rekka blir da automatisk doblet", "Endepunktene i konvergensområdet kan da trygt ignoreres helt", "Den opprinnelige rekka blir da automatisk en geometrisk rekke"],
      explanation: "Delbrøk gjør at hver del kan summeres mot $-\\ln(1-x)$ eller en beslektet standardrekke.",
    },
  ],
  'mat1110-6-5': [
    {
      question: "Hva kjennetegner en kontraksjon $F$?",
      options: ["At $|F(x)-F(y)|\\le K|x-y|$ med en fast $K<1$", "At avbildningen $F$ er lineær og også inverterbar", "At $F(x)=x$ holder for i det minste ett punkt", "At $F$ har en positiv determinant absolutt overalt"],
      explanation: "En kontraksjon trekker punktpar nærmere med en fast faktor $K<1$. $K=1$ er ikke nok.",
    },
    {
      question: "Hvordan viser man at $F(x)=Ax$ er en kontraksjon?",
      options: ["Vis at en matrisenorm eller $\\rho(A)$ er mindre enn $1$", "Vis at determinanten til matrisen $A$ er større enn $0$", "Vis at matrisen $A$ er symmetrisk om hoveddiagonalen", "Vis at avbildningen $F$ har minst ett fikspunkt et sted"],
      explanation: "$|A(x-y)|\\le\\|A\\|\\,|x-y|$: er $\\|A\\|<1$ eller $\\rho(A)=\\max|\\lambda_i|<1$, er $F$ en kontraksjon.",
    },
    {
      question: "Hva er spektralradiusen $\\rho(A)$?",
      options: ["Den største tallverdien blant alle egenverdiene", "Summen av samtlige egenverdier til matrisen $A$", "Determinanten, altså produktet av egenverdiene", "Den aller minste egenverdien i tallverdi til $A$"],
      explanation: "Spektralradiusen er den største $|\\lambda_i|$. Er den $<1$, krymper $A^n$ mot null.",
    },
    {
      question: "Hva er et fikspunkt for $F$?",
      options: ["Et punkt $x^*$ som oppfyller $F(x^*)=x^*$", "Et punkt der avbildningen $F$ blir lik null", "Et punkt der Jacobi-matrisen $F'$ er singulær", "Et punkt der avbildningen $F$ når sitt maksimum"],
      explanation: "Et fikspunkt avbildes på seg selv; å løse $x=F(x)$ er å finne et fikspunkt.",
    },
    {
      question: "Hva sier fikspunktprinsippet (kontraksjonsprinsippet)?",
      options: ["En kontraksjon har ett fikspunkt, og iterasjonen når det", "En kontraksjon har uendelig mange forskjellige fikspunkter", "Ethvert fikspunkt til en avbildning er alltid helt ustabilt", "Fikspunktet finnes bare dersom avbildningen $F$ er lineær"],
      explanation: "En kontraksjon på et fullstendig rom har ett entydig fikspunkt, og $z_{n+1}=F(z_n)$ konvergerer mot det.",
    },
    {
      question: "Hva er fikspunktiterasjonen?",
      options: ["Å gjenta $z_{n+1}=F(z_n)$ fra en startgjetning", "Å løse likningen $F'(x)=0$ for den ukjente $x$", "Å regne ut samtlige egenverdier til avbildningen $F$", "Å derivere avbildningen $F$ gjentatte ganger etter hverandre"],
      explanation: "Iterasjonen $z_{n+1}=F(z_n)$ konvergerer mot fikspunktet når $F$ er en kontraksjon.",
    },
    {
      question: "Hva er Newtons metode for et system $F(x)=0$?",
      options: ["$x_{n+1} = x_n - (F'(x_n))^{-1}F(x_n)$", "$x_{n+1} = x_n - F'(x_n)F(x_n)$", "$x_{n+1} = F(x_n)$", "$x_{n+1} = x_n - F(x_n)/F'(x_n)^2$"],
      explanation: "Newton lineariserer med Jacobi-matrisen: $x_{n+1}=x_n-(F'(x_n))^{-1}F(x_n)$.",
    },
    {
      question: "Hva trenger du for å utføre ett Newton-steg?",
      options: ["Jacobi-matrisen $F'(x_n)$ og dens invers i punktet", "Samtlige egenverdier til avbildningen $F$ på forhånd", "Konvergensradiusen $R$ som hører til avbildningen $F$", "Determinanten til vektoren $F(x_n)$ i startpunktet"],
      explanation: "Steget krever $F(x_n)$ og $(F'(x_n))^{-1}$ evaluert i det gjeldende punktet.",
    },
    {
      question: "Hvorfor holder det ikke å si «$F$ ser sammentrekkende ut»?",
      options: ["Man må vise at en norm eller $|\\lambda|$ er mindre enn $1$", "Man må først vise at avbildningen $F$ er kontinuerlig", "Man må regne ut determinanten til avbildningen $F$", "Man må finne to forskjellige fikspunkter for $F$"],
      explanation: "Kontraksjon krever et kvantitativt normargument ($\\|A\\|<1$ eller $\\rho(A)<1$), ikke bare en følelse.",
    },
    {
      question: "En norm gir $\\|A\\|=1{,}2\\ge 1$. Hva bør du gjøre?",
      options: ["Prøve en annen norm eller sjekke $\\rho(A)$ direkte", "Konkludere at $F$ helt sikkert ikke er en kontraksjon", "Gange matrisen $A$ med $0{,}5$ og prøve helt på nytt", "Bruke Newtons metode i stedet for kontraksjon her"],
      explanation: "Én norm kan overvurdere strekket; en annen norm eller egenverdikriteriet $\\rho(A)<1$ kan likevel gi kontraksjon.",
    },
  ],
  'mat1110-6-6': [
    {
      question: "Hva kjennetegner en separabel differensiallikning?",
      options: ["At høyresiden faktoriserer som $f(x)\\,g(y)$", "At likningen inneholder den andrederiverte $y''$", "At hele høyresiden alltid er en konstant", "At likningen mangler enhver initialbetingelse"],
      explanation: "Separabel betyr $y'=f(x)g(y)$; da kan variablene skilles og hver side integreres.",
    },
    {
      question: "Hva glemmer man ofte ved en separabel likning $y'=f(x)g(y)$?",
      options: ["Å sjekke konstantløsningene der $g(y)=0$", "Å derivere begge sider av likningen på nytt", "Å regne konvergensradiusen til høyresiden", "Å finne egenverdiene til koeffisientmatrisen"],
      explanation: "Konstantløsningene $y\\equiv y_0$ med $g(y_0)=0$ mistes lett i divisjonen med $g(y)$.",
    },
    {
      question: "Hva er formen til en lineær første ordens likning?",
      options: ["$y' + p(x)y = q(x)$", "$y' = f(x)g(y)$", "$y'' + y = 0$", "$y = p(x)y'$"],
      explanation: "Lineær: $y$ og $y'$ i første potens, $y'+p(x)y=q(x)$. Løses med integrerende faktor.",
    },
    {
      question: "Hva er den integrerende faktoren til $y' + p(x)y = q(x)$?",
      options: ["$\\mu = e^{\\int p(x)\\,dx}$", "$\\mu = e^{\\int q(x)\\,dx}$", "$\\mu = \\int p(x)\\,dx$", "$\\mu = p(x)\\,q(x)$"],
      explanation: "$\\mu = e^{\\int p\\,dx}$ gjør venstresiden til $(\\mu y)'$, som kan integreres direkte.",
    },
    {
      question: "Hva blir venstresiden etter multiplikasjon med $\\mu = e^{\\int p\\,dx}$?",
      options: ["$(\\mu y)'$, den deriverte av produktet", "$\\mu' y'$, altså to deriverte ganget sammen", "$\\mu y$, som står helt uendret igjen", "$\\mu q$, altså faktoren ganget høyresiden"],
      explanation: "Faktoren er konstruert slik at venstresiden blir produktderivert $(\\mu y)'$.",
    },
    {
      question: "Hvor mange frie konstanter har den generelle løsningen av første orden?",
      options: ["Én", "To", "Ingen", "Fire"],
      explanation: "Første orden ⇒ én konstant $C$, festet av én initialbetingelse.",
    },
    {
      question: "Hva er løsningen av modellen $y' = ky$ med $y(0)=y_0$?",
      options: ["$y = y_0 e^{kx}$", "$y = y_0 + kx$", "$y = y_0 x^k$", "$y = k e^{y_0 x}$"],
      explanation: "Eksponentiell modell: vekst for $k>0$, nedbrytning for $k<0$.",
    },
    {
      question: "Hva er en konstantløsning (likevektsløsning)?",
      options: ["En løsning $y\\equiv y_0$ der $y'=0$ overalt", "En løsning som i stedet vokser rent lineært", "Den partikulære løsningen fra en initialbetingelse", "Selve løsningen av den homogene delen alene"],
      explanation: "En konstantløsning endrer seg ikke; for $y'=f(x)g(y)$ er det nullpunktene til $g$.",
    },
    {
      question: "Hvordan verifiserer du at en funksjon $y(x)$ løser en differensiallikning?",
      options: ["Regn $y'$, sett inn, og sjekk at sidene stemmer", "Regn ut determinanten til hele funksjonen $y$", "Sjekk om funksjonen oppfyller at $y(0)=0$", "Regn konvergensradiusen som hører til $y$"],
      explanation: "Verifikasjon ved innsetting: sett $y$ og $y'$ inn i likningen og kontroller likheten.",
    },
    {
      question: "Hvordan henger et lineært system $x'=Ax$ sammen med egenverdier?",
      options: ["Løsningen er $x(t)=\\sum_i c_i e^{\\lambda_i t}v_i$", "Løsningen er ganske enkelt $x(t)=A^t x_0$", "Systemet har da aldri noen løsning i det hele tatt", "Egenverdiene til $A$ må da alle sammen være lik $1$"],
      explanation: "Hver egenvektor $v_i$ gir et ledd $c_i e^{\\lambda_i t}v_i$; egenverdiene styrer vekst/avtagning.",
    },
  ],
  'mat1110-7-1': [
    {
      question: "Hva sier sensorregelen som står ordrett i alle de arkiverte settene?",
      options: ["Alle svar må begrunnes, med nok mellomregning til å følge dem", "Bare sluttsvaret teller, så lenge det er eksakt og korrekt angitt i oppgaven", "Mellomregning kan sløyfes dersom metoden nevnes kort i innledningen din", "Full uttelling krever samme metode som den utdelte formelsamlingen bruker"],
      explanation: "Regelen «Du må begrunne alle svar, og vise nok mellomregninger …» er fasitgrunnlaget: riktig tall uten begrunnelse gir ikke full score.",
    },
    {
      question: "Når skal et teorem navngis i en løsning?",
      options: ["Når det er teoremet som bærer eksistens- eller gyldighetsargumentet", "Bare i de oppgavene som eksplisitt ber om navnet på en bestemt setning", "Aldri — sensor kjenner teoremene, så selve navnet er helt overflødig", "Kun i rene teorioppgaver, aldri i regneoppgaver som har et tallsvar"],
      explanation: "«Ifølge omvendt funksjonsteorem / ekstremalverdisetningen …» viser at eksistensen er begrunnet, ikke antatt. Uteglemt teoremnavn er et typisk toppsjikts-poengtap.",
    },
    {
      question: "Hva er føringspoenget i sjanger A (radreduksjon)?",
      options: ["Merkede radoperasjoner over $\\sim$ og en konklusjon med navngitt kriterium", "At man alltid regner ut redusert trappeform i stedet for en vanlig trappeform", "At man oppgir bare det endelige tallsvaret, uten synlige mellomtrinn", "At determinanten regnes ut først for å bekrefte at systemet er løsbart"],
      explanation: "Merkede radoperasjoner ($II-2I$) og en konklusjon med navngitt kriterium («radekvivalent med $I_n$ $\\Rightarrow$ basis») er der poengene sitter.",
    },
    {
      question: "I Lagrange: hva er $\\nabla g=0$-sjekken til for?",
      options: ["Å avdekke om $\\nabla g=0$ gir en ekstra kandidat, eller kan utelukkes", "Å bekrefte at bibetingelsen $g=c$ faktisk er oppfylt i alle sluttpunktene", "Å regne ut selve verdien av multiplikatoren $\\lambda$ i hvert kandidatpunkt", "Å sjekke at gradienten til $f$ ikke er lik null i noen av kandidatene"],
      explanation: "Der $\\nabla g=0$ er Lagrange-betingelsen ugyldig; punktet er enten en egen kandidat eller utelukkes fordi det ikke ligger på flaten. Å hoppe over sjekken kan miste et kandidatpunkt.",
    },
    {
      question: "Hva kreves for å hevde at en største og minste verdi finnes?",
      options: ["At $f$ er kontinuerlig på en kompakt (lukket og begrenset) mengde", "At $f$ har minst ett stasjonært punkt i det indre av selve området", "At $f$ er deriverbar og gradienten er lik null i et av randpunktene", "At det aktuelle området er sammenhengende og $f$ er positiv overalt"],
      explanation: "Ekstremalverdisetningen krever kontinuerlig funksjon på kompakt mengde (lukket + begrenset). Begge egenskapene må vises.",
    },
    {
      question: "Hva er den obligatoriske fortegnskontrollen i et fluksintegral?",
      options: ["At $\\phi_u\\times\\phi_v$ peker samme vei som den oppgitte normalen $n$", "At integranden $F\\cdot n$ er positiv over hele den aktuelle flaten $S$", "At Jacobideterminanten tas med absoluttverdi før man integrerer opp", "At flateelementet $dS$ regnes helt uten fortegn på selve kryssproduktet"],
      explanation: "Man sjekker at $\\boldsymbol{\\phi}_u\\times\\boldsymbol{\\phi}_v$ peker som $n$ og bytter fortegn på integralet ellers. Absoluttverdi hører til *skalar* flateintegral, ikke fluks.",
    },
    {
      question: "I divergensteoremet: hvilken retning må randnormalen ha?",
      options: ["Ut av volumet $V$ på hele randen $\\partial V$", "Inn mot volumets massesenter fra hver enkelt delflate", "Oppover ($+k$) uansett hvordan flaten faktisk ligger", "Samme vei som strømningen til vektorfeltet $F$ peker"],
      explanation: "$\\iiint_V\\operatorname{div}F\\,dV=\\oiint_{\\partial V}F\\cdot n\\,dS$ gjelder med utadrettet $n$ på *hele* randen; et fortegnsfeil på en delflate forplanter seg.",
    },
    {
      question: "Hvorfor holder det ikke å oppgi konvergensradien $R$ for en potensrekke?",
      options: ["Endepunktene $x=x_0\\pm R$ må undersøkes med tallrekketestene", "Fordi radien alltid må oppgis som en desimaltilnærming i tillegg", "Fordi man i tillegg må bevise at rekken divergerer utenfor radien", "Fordi konvergensradien bare gir summen, og ikke konvergensområdet"],
      explanation: "$R$ gir det åpne intervallet; ett eller begge endepunkter kan i tillegg være med. Glemt endepunktsjekk er en dokumentert klassiker.",
    },
    {
      question: "Hvordan skal et sluttsvar oppgis på dette emnet?",
      options: ["Som eksakt verdi — brøk, $\\pi$, $\\sqrt2$ — aldri som desimaltall", "Som desimaltall med minst fire gjeldende sifre i sluttsvaret", "Enten eksakt eller avrundet, alt etter hva som blir kortest å skrive", "Alltid som en prosentandel av det teoretiske maksimumet på oppgaven"],
      explanation: "Eksakt algebra er hele poenget; $\\tfrac{4\\pi}{5}$, ikke $2{,}51$. Avrundet sluttverdi teller som ufullstendig.",
    },
    {
      question: "Hva er den beste strategien når et senere delpunkt bygger på et tidligere?",
      options: ["Gjenbruk delsvaret eksplisitt («fra O1a har vi $A^{-1}$»)", "Regn det tidligere resultatet helt på nytt for å være sikker på det", "Hopp over det senere delpunktet dersom det tidligere delpunktet glapp", "Vent med hele oppgaven til alle delpunkter er ferdig gjennomtenkt"],
      explanation: "Eksplisitt gjenbruk sparer tid og viser koblingen som premieres. Rakk du ikke det tidligere, kan du ofte likevel *bruke* resultatet og få full score på det avhengige.",
    },
    {
      question: "Hva er føringspoenget i sjanger E (stasjonære punkter)?",
      options: ["Hesse-matrisen settes opp eksplisitt før man konkluderer", "At man alltid bruker annenderiverttesten uten å regne Hesse-matrisen", "At det holder å oppgi om punktet er min, maks eller et sadelpunkt", "At man deriverer bare én gang og leser av fortegnet på resultatet"],
      explanation: "Fasiten krever eksplisitt Hesse-matrise; $\\nabla f=0$ må dessuten reduseres til én variabel uten å miste løsninger.",
    },
    {
      question: "I sjanger G (dobbeltintegral): hva skal stå før selve oppsettet?",
      options: ["Området beskrevet med ulikheter, og skjæringen løst", "En figur av området i et koordinatsystem med merkede akser", "En sjekk av om selve integranden tilfeldigvis er konservativ", "Konvergensradien til den itererte rekken man ender opp med"],
      explanation: "«$a\\le x\\le b,\\ u(x)\\le y\\le v(x)$» skrevet før integraltegnet gjør grensene til en avlesning; skjæringen mellom kurvene løses først.",
    },
    {
      question: "Hva kobler orienteringen av randkurven $C$ og normalen $n$ i Stokes' teorem?",
      options: ["Høyrehåndsregelen", "At kurven $C$ er konveks", "At $n$ alltid peker oppover", "At $F$ er konservativt langs $C$"],
      explanation: "Krøller høyre hånds fingre i $C$s retning, peker tommelen langs $n$. Feil kobling snur fortegnet på hele sirkulasjonen.",
    },
    {
      question: "Hva er den geometriske snarveien for fluks gjennom en plan flate?",
      options: ["Er $n$ og $F\\cdot n$ konstant, er fluksen $(F\\cdot n)\\times\\text{areal}$", "At man alltid kan sette fluksen lik null for enhver plan flate", "At fluksen blir lik omkretsen ganget med lengden til feltet $F$", "At man deriverer feltet langs hele flaten og integrerer opp resultatet til slutt"],
      explanation: "På en plan flate med konstant normal og konstant $F\\cdot n$ slipper man parametrisering — men bare *etter* at fortegnskontrollen (retningen på $n$) er gjort.",
    },
    {
      question: "Hva er den dyreste tidsfellen på et 10-deloppgavers avsluttende sett?",
      options: ["Å hoppe over siste delpunkt fordi et tidligere delpunkt glapp", "Å skrive for utfyllende begrunnelser på hvert av de tidlige delpunktene", "Å bruke eksakte svar i stedet for raske og enkle desimaltilnærminger", "Å lese gjennom hele oppgaveteksten før man begynner på delpunkt 1"],
      explanation: "Instruksen tillater ofte at du *bruker* et resultat du ikke rakk å utlede; å droppe O6c fordi O6b glapp gir null der det er mest å hente.",
    },
  ],
  'mat1110-7-2': [
    {
      question: "Hvorfor er formen på denne midtveissimuleringen merket som et forbehold?",
      options: ["Arkivet har ingen midtsemestersett, så formen er kalibrert på pensum", "Fordi midtsemestereksamen ble avlyst ved UiO fra og med våren 2025", "Fordi simuleringen bruker hjelpemidler som ikke er tillatt på ekte prøver", "Fordi oppgavene er hentet direkte fra et hemmeligholdt offisielt fasitark"],
      explanation: "Ingen midtsemestersett finnes i arkivet; formen speiler pensumvinduet (LA + start flervariabel) og at prøven er uten hjelpemidler, ikke en dokumentert fordeling.",
    },
    {
      question: "I O1 finner du $A^{-1}$ i a). Hva er den beste framgangsmåten i b) for å løse $Ax=b$?",
      options: ["Gjenbruke $A^{-1}$ og regne $x=A^{-1}b$ direkte", "Radredusere hele $[A\\,|\\,b]$ fra bunnen av på nytt", "Regne $\\det A$ og bruke Cramers regel søyle for søyle", "Sette opp og løse den karakteristiske likningen til $A$"],
      explanation: "Delpunktene er kjedet: $x=A^{-1}b$ gjenbruker resultatet fra a), sparer tid og viser koblingen som premieres.",
    },
    {
      question: "Hva er føringspoenget som gir halve uttellingen i O4 (implisitt funksjonsteorem)?",
      options: ["Forutsetningssjekken $g(1,1)=0$ og $\\partial g/\\partial y\\ne0$", "Å regne ut annenderiverte av $\\varphi$ i tillegg til $\\varphi'$ i punktet", "Å tegne kurven $g(x,y)=0$ i et koordinatsystem med merkede akser", "Å løse likningen eksplisitt for $y$ som en funksjon av variabelen $x$"],
      explanation: "Uten forutsetningssjekken (punkt på kurven + $\\partial g/\\partial y\\ne0$) og navngivningen av implisitt funksjonsteorem er argumentet ufullstendig selv om $\\varphi'$ stemmer.",
    },
    {
      question: "I O5 setter du $y=x^2$ inn i $x=y^2$. Hva er fallgruven i dette steget?",
      options: ["Å miste en reell stasjonær løsning i reduksjonen til én variabel", "At Hesse-matrisen ikke lenger blir symmetrisk etter substitusjonen", "At gradienten da må evalueres i et helt annet og feil punkt", "At man må bruke Lagranges metode i stedet for ren substitusjon"],
      explanation: "$x^4=x$ gir $x(x^3-1)=0$ med reelle $x=0,1$; den vanligste feilen i sjanger E er å miste en løsning i substitusjonssteget.",
    },
    {
      question: "Hva kjennetegner egenvektorene du finner i O2?",
      options: ["De løser $(B-\\lambda I)v=0$ og er bestemt opp til en skalar", "De er alltid innbyrdes ortogonale fordi $B$ er en $2\\times2$-matrise", "De må normaliseres til lengde 1 for i det hele tatt å være gyldige", "De er de søylene i $B$ som svarer til pivotposisjonene i trappeformen"],
      explanation: "En egenvektor er en ikke-null-løsning av $(B-\\lambda I)v=0$ og er bestemt opp til skalering; $B=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$ er ikke symmetrisk, så egenvektorene er ikke ortogonale.",
    },
  ],
  'mat1110-7-3': [
    {
      question: "I O1b brukes at $F'(0,0,0)=A$. Hva gir omvendt funksjonsteorem for Jacobi-matrisen til $F^{-1}$?",
      options: ["Den er $A^{-1}$, altså inversen fra O1a gjenbrukt direkte", "Den er $A^T$, altså den transponerte av matrisen $A$", "Den er $A$ selv, siden $F$ er sin egen lokale invers her", "Den kan ikke bestemmes uten å regne ut $F^{-1}$ eksplisitt"],
      explanation: "$(F^{-1})'(F(a))=(F'(a))^{-1}$. Med $F'(0)=A$ er $(F^{-1})'(0)=A^{-1}$ — inversen fra O1a gjenbrukes direkte.",
    },
    {
      question: "Hvorfor gir divergensteoremet i O6c bare $\\tfrac{3\\pi}{2}$ som totalfluks, ikke fluksen gjennom paraboloiden alene?",
      options: ["Randen $\\partial V$ består av både paraboloiden $T_1$ og lokket $T_2$", "Fordi $\\operatorname{div}F$ ikke er konstant over hele området $V$", "Fordi normalen på delflaten $T_1$ peker inn i volumet $V$", "Fordi volumet av selve området $V$ tilfeldigvis er nøyaktig lik $\\tfrac{3\\pi}{2}$"],
      explanation: "$\\iiint_V\\operatorname{div}F\\,dV$ er totalfluksen ut gjennom hele randen $T_1\\cup T_2$; fluksen gjennom $T_1$ fås ved å trekke fra $T_2$-fluksen ($\\pi$).",
    },
    {
      question: "I O4 er integrasjonsområdet ubegrenset. Hva er den korrekte føringen?",
      options: ["Voksende kompakter $K_R$ og grenseovergang når $R\\to\\infty$", "Å sette den øvre grensen lik $\\infty$ og regne integralet som vanlig", "Å bytte til polarkoordinater og deretter droppe hele grensesjekken", "Å anta konvergens uten videre fordi integranden er positiv overalt"],
      explanation: "Uegentlige integraler føres med en voksende følge kompakter og lim; «sett inn $\\infty$» er ikke gyldig føring, og konvergens avgjøres av grenseverdien.",
    },
    {
      question: "Hva er den avgjørende fortegnskontrollen når du bruker divergensteoremet i O6?",
      options: ["At normalen peker ut av $V$ på både $T_1$ og $T_2$", "At $F\\cdot n$ er positiv over hele den samlede randen $\\partial V$", "At $\\operatorname{div}F$ er positiv i alle punkter inne i volumet $V$", "At randkurven til hele området er orientert mot klokka sett ovenfra"],
      explanation: "Divergensteoremet krever utadrettet normal på hele $\\partial V$; et fortegnsfeil på lokket $T_2$ forplanter seg til $T_1$-svaret.",
    },
    {
      question: "Hvorfor er $\\nabla g=0$-sjekken i O3a nødvendig selv om den ikke gir et nytt kandidatpunkt her?",
      options: ["Den viser at Lagrange-betingelsen er gyldig på hele flaten", "Fordi den samtidig bestemmer verdien av multiplikatoren $\\lambda$", "Fordi den bare er nødvendig når bibetingelsen er en rett linje", "Fordi den kan erstatte selve eksistensbegrunnelsen i deloppgave b"],
      explanation: "$\\nabla g=(2x,2y,2z)=0$ kun i origo, som ikke ligger på flaten; sjekken dokumenterer at intet kandidatpunkt går tapt, og er et føringspoeng uansett utfall.",
    },
  ],
  'mat1110-7-4': [
    {
      question: "Hvorfor trenes egenverdier og potensrekker i dette settet selv om de forsvant i V2025?",
      options: ["Regimeskiftet hviler på ett årskull, så de holdes som beredskap", "Fordi de er de eneste temaene som testes på midtsemestereksamen", "Fordi formelsamlingen krever at de brukes i hver eneste deloppgave", "Fordi de nå har erstattet vektoranalyse som pensumets tyngdepunkt"],
      explanation: "Egenverdier (70 %) og potensrekker (85 %) var historisk ryggrad, men 0/3 i V2025; siden det nye regimet bare bygger på ett kull, holdes de som beredskap — verifiser mot V2026.",
    },
    {
      question: "I O1b: hvorfor overlever komponenten langs egenvektoren $(4,3)$ når $n\\to\\infty$?",
      options: ["Fordi den hører til egenverdien $\\lambda=1$, mens $(0{,}3)^n\\to0$", "Fordi $(4,3)$ er den klart lengste av de to egenvektorene i settet", "Fordi startvektoren $(1,0)$ er nøyaktig parallell med vektoren $(4,3)$", "Fordi en Markov-matrise alltid konvergerer mot sin egen første søyle"],
      explanation: "$M^n x_0=\\tfrac17\\cdot1^n(4,3)+\\tfrac37(0{,}3)^n(1,-1)$; leddet med $|\\lambda|=0{,}3<1$ dør ut, mens $\\lambda=1$-komponenten består og gir den stasjonære fordelingen $(\\tfrac47,\\tfrac37)$.",
    },
    {
      question: "Hva er føringspoenget som lett glemmes i O3a (potensrekkens konvergensområde)?",
      options: ["Endepunktene $x=\\pm1$ må undersøkes med navngitte tester", "At selve konvergensradien alltid må oppgis som et desimaltall", "At rekken må deriveres leddvis før konvergensområdet bestemmes", "At man må vise at rekken divergerer for absolutt alle $|x|>1$"],
      explanation: "$R=1$ gir bare $(-1,1)$; $x=1$ gir harmonisk (divergerer), $x=-1$ gir alternerende (Leibniz, konvergerer), så området er $[-1,1)$. Glemt endepunktsjekk er en klassiker.",
    },
    {
      question: "Hva må stå i besvarelsen for at kontraksjonspåstanden i O7 er gyldig?",
      options: ["At en matrisenorm eller største egenverdi i tallverdi er $<1$", "At koeffisientmatrisen $A$ i avbildningen er en symmetrisk matrise", "At selve fikspunktet er funnet ved gjentatt iterasjon fra origo", "At determinanten til matrisen $A$ er strengt mindre enn tallet 1"],
      explanation: "Kontraksjon må knyttes til $\\lVert A\\rVert<1$; her er maksimumsnormen $0{,}7<1$. Å bare påstå kontraksjon uten normargument gir ikke uttelling.",
    },
    {
      question: "Hvorfor kan man i O6 (Stokes) velge den plane skiven som integrasjonsflate?",
      options: ["Stokes gir samme sirkulasjon for enhver flate med samme rand $C$", "Fordi $\\operatorname{curl}F$ tilfeldigvis er lik null utenfor selve skiven", "Fordi vektorfeltet $F$ i denne oppgaven viser seg å være konservativt", "Fordi randkurven $C$ er nødt til å ligge i akkurat planet $z=0$"],
      explanation: "$\\oint_C F\\cdot dr=\\iint_S\\operatorname{curl}F\\cdot n\\,dS$ avhenger bare av $C$, ikke av hvilken flate $S$ man spenner opp; den plane skiven er enklest, med $n=k$ ved høyrehåndsregelen.",
    },
  ],
};

export default quizData_mat1110;
