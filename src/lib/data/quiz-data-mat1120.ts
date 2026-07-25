import type { QuizQuestion } from './quiz-data';

const quizData_mat1120: Record<string, QuizQuestion[]> = {
  'mat1120-0-1': [
    {
      question: "Hvor mange deloppgaver har en ordinær MAT1120-eksamen, og hvordan vektes de?",
      options: ["Ti deloppgaver som teller helt likt, med ti poeng på hver.", "Fem hovedoppgaver som teller ulikt etter hvor vanskelige de er.", "Åtte deloppgaver der de siste og tyngste teller aller mest.", "Tolv deloppgaver der noen er flervalg og resten er langsvar."],
      explanation: "Formatet er stabilt: ti deloppgaver à 10 poeng, samlet i fire til fem hovedoppgaver, alt langsvar uten flervalg. Fordi de teller likt, lønner det seg å sikre poeng bredt.",
    },
    {
      question: "Hva er «vedlegget» som følger hvert MAT1120-sett?",
      options: ["Et ark med ferdige trappeformer eller en Matlab-utskrift du leser resultater av.", "Et formelark med samtlige teoremer og formler du kan slå opp i underveis på eksamen.", "En liste over godkjente hjelpemidler som du selv velger å ta med deg til eksamen.", "Et komplett løsningsforslag til hver deloppgave, lagt ved bakerst i settet."],
      explanation: "Vedlegget (Matlab-utskrift til og med H2022, RREF-ark fra H2024) gjør den rå regningen. Det finnes ikke noe formelark — alt teoriapparatet må sitte utenat.",
    },
    {
      question: "Du skal finne en basis for Col A til en 4×5-matrise. Hva bør du gjøre?",
      options: ["Lese pivotkolonnene av vedleggets trappeform og oppgi de opprinnelige kolonnene i A.", "Radredusere hele matrisen for hånd og deretter oppgi de reduserte pivotkolonnene som basis.", "Regne ut determinanten for å avgjøre hvilke av de fem kolonnene som er lineært uavhengige.", "Bruke Cramers regel på hver kolonne for å teste om den er en pivotkolonne."],
      explanation: "Basis for Col A er de opprinnelige pivotkolonnene i A, lest av vedleggets trappeform. Å radredusere for hånd er tidssluk, og de reduserte kolonnene er feil basis.",
    },
    {
      question: "Hvilke fem temaer treffer så godt som hvert eneste eksamenssett?",
      options: ["Basis/rang fra trappeform, egenverdier, abstrakt vektorrom, Gram–Schmidt og projeksjon.", "Determinantregler, matriseinvers, Cramers regel, likningssett og manuell radreduksjon for hånd.", "SVD, diskret dynamikk, Householder-refleksjon, radrommet og polynom i matrisen A.", "Komplekse egenverdier, Jordan-form, dualrom, tensorprodukt og operatornormer."],
      explanation: "De fem faste søylene dukker opp i ~100 % av settene. Determinant/invers/Cramer testes derimot ikke som egne temaer, og resten er randtemaer med lavere frekvens.",
    },
    {
      question: "Hva kjennetegner MAT1120s såkalte «signaturoppgave»?",
      options: ["En hovedoppgave i et abstrakt vektorrom av polynomer eller funksjoner.", "En stor determinantutregning for en matrise som inneholder bokstavparametre.", "En parameteranalyse av når et gitt likningssystem har entydig løsning.", "En ren regneoppgave der du inverterer en firedimensjonal matrise med [A|I]."],
      explanation: "Hvert sett har én hovedoppgave i et rom som ikke er Rⁿ (polynomrom eller funksjonsrom). Dette er den skarpeste forskjellen fra enklere kurs og verdt en hel hovedoppgave.",
    },
    {
      question: "En oppgave oppgir et integralbasert indreprodukt. Hva må du passe på?",
      options: ["Å regne alle skalarprodukt og normer i oppgaven med den oppgitte definisjonen.", "Å bruke standardprikkproduktet hele veien, men skalere sluttsvaret til slutt.", "Å gå tilbake til standardprikkproduktet så snart du normaliserer i Gram–Schmidt.", "Å bruke det oppgitte produktet på lengder, men prikkproduktet på vinkler."],
      explanation: "Alle skalarprodukt, normer og ortogonalitetssjekker skal regnes med det oppgitte indreproduktet — også normen ved normalisering. Å skli tilbake til standardproduktet er den dyreste MAT1120-fellen.",
    },
    {
      question: "Hva kreves for å begrunne at en matrise er diagonaliserbar?",
      options: ["Å vise at hvert egenroms dimensjon er lik egenverdiens algebraiske multiplisitet.", "Å vise at determinanten til den aktuelle matrisen er forskjellig fra null.", "Å vise at matrisen har minst én reell egenverdi å bygge diagonaliseringen videre på.", "Å vise at det karakteristiske polynomet har grad lik antall rader i matrisen."],
      explanation: "Diagonaliserbarhet begrunnes med multiplisitet (geometrisk = algebraisk) eller en navngitt snarvei (symmetrisk, n distinkte, triangulær). En påstand uten slik begrunnelse gir ikke uttelling.",
    },
    {
      question: "Hva testes IKKE som eget tema på MAT1120?",
      options: ["Determinantregler, matriseinvers-mekanikk, Cramers regel og parameteranalyse.", "Egenverdier, diagonalisering og ortogonal diagonalisering av symmetriske matriser.", "Gram–Schmidt, ortogonal projeksjon ned i et underrom og minste kvadraters løsning.", "Abstrakte vektorrom, koordinatvektorer og matriserepresentasjon av avbildninger."],
      explanation: "Determinant/invers/Cramer/parameteranalyse forutsettes fra MAT1100/MAT1110 og testes ikke som egne temaer. De tre andre er derimot kjernetemaer på MAT1120.",
    },
    {
      question: "Hva er sensorens gjennomgående hovedkrav på hvert sett?",
      options: ["At alle svar begrunnes og at nok mellomregning vises til å følge argumentet.", "At sluttsvaret er riktig, uansett hvor mye eller lite føring som er vist.", "At du alltid velger den aller korteste mulige løsningsveien for hver deloppgave.", "At svarene oppgis som desimaltall med minst fire desimalers nøyaktighet."],
      explanation: "Standardinstruksen krever begrunnelse og mellomregning; et riktig svar uten føring gir lite uttelling. Svar skal dessuten være eksakte, ikke desimaltilnærminger.",
    },
    {
      question: "Hvorfor er deloppgavene ofte «kjedet» rundt samme matrise?",
      options: ["Fordi ett resultat, som en trappeform, kan gjenbrukes i flere av delene.", "Fordi hver enkelt deloppgave krever sin egen helt nye og urelaterte matrise.", "Fordi sensor trekker fra poeng om du bruker svar fra en tidligere del.", "Fordi vedlegget bare rommer plass til én matrise for hele oppgavesettet."],
      explanation: "Delpunktene er designet kjedet: samme matrise eller underrom går igjen, så én avlesning fra vedlegget bærer flere deler. Å se koblingen sparer tid og er belønnet.",
    },
  ],
  'mat1120-1-1': [
    {
      question: "Hva er hovedpoenget med vedlegget på MAT1120-eksamen?",
      options: ["Det gir ferdige, allerede radreduserte trappeformer som du skal lese resultater av og deretter sitere i føringen", "Det er en teoremliste du kan gjengi uten å begrunne noe selv", "Det lar deg oppgi rene tallsvar uten mellomregning eller argument", "Det inneholder et komplett løsningsforslag til hver eneste deloppgave i settet"],
      explanation: "Vedlegget (Matlab-utskrift eller RREF-ark) gjør den rå regningen; du leser pivoter, rang og relasjoner ut av det og siterer det — du radreduserer ikke selv.",
    },
    {
      question: "En pivotkolonne er en kolonne som ...",
      options: ["inneholder en pivotposisjon (en ledende ener i RREF)", "utelukkende består av tallverdier som er forskjellige fra null i hver eneste rad", "svarer til en fri variabel og derfor kan velges helt fritt i løsningen av systemet", "er en lineærkombinasjon av alle de øvrige kolonnene som står lenger til venstre"],
      explanation: "Pivotkolonnen er kolonnen der en ledende ener står. Ikke-pivotkolonner svarer til frie variabler og er lineærkombinasjoner av pivotkolonnene.",
    },
    {
      question: "Hvorfor gjelder en avhengighetsrelasjon fra RREF også i A?",
      options: ["Radoperasjoner bevarer alle de innbyrdes lineære sammenhengene mellom kolonnene i matrisen", "Fordi matrisen A og RREF-en dens alltid har nøyaktig de samme kolonnene på hver plass", "Fordi elementære radoperasjoner aldri endrer en eneste av tallverdiene inne i matrisen", "Fordi kolonnerommet til A er helt identisk med kolonnerommet til den reduserte trappeformen"],
      explanation: "Radreduksjon endrer kolonnene, men bevarer sammenhengene mellom dem. Kolonnerommet endres derimot generelt — derfor tas Col A-basis fra A.",
    },
    {
      question: "A har 6 kolonner, og RREF har 4 pivoter. Hvor mange frie variabler?",
      options: ["2", "4, altså like mange som antallet pivoter i den reduserte trappeformen", "6, altså like mange som det totale antallet kolonner i matrisen A", "0, siden et system med fire pivoter ikke kan ha noen frie variabler i det hele tatt"],
      explanation: "Antall frie variabler = antall kolonner minus antall pivoter = 6 − 4 = 2.",
    },
    {
      question: "Hva kjennetegner en redusert trappeform utover å være trappeform?",
      options: ["Hver ledende ener er 1 og er eneste tall ulik null i kolonnen", "Hver eneste rad i matrisen har nøyaktig én oppføring som er forskjellig fra null", "Matrisen må være kvadratisk og ha tallet 1 langs hele den øvre hoveddiagonalen", "Alle nullrader er strøket vekk slik at matrisen ikke inneholder noen tomme rader"],
      explanation: "RREF krever ledende enere som er alene i kolonnen sin. Nullrader beholdes nederst; matrisen trenger ikke være kvadratisk.",
    },
    {
      question: "Vedleggets RREF har ledende enere i kolonne 1, 2 og 4. Hva er rangen til A?",
      options: ["3", "4, fordi den siste ledende ener'en tilfeldigvis står nettopp i kolonne nummer fire", "2, siden man ikke skal telle med den ledende ener'en som ligger lengst til høyre", "7, altså summen av kolonnenumrene der de ledende enerne befinner seg i matrisen"],
      explanation: "Rangen er antall pivotposisjoner = antall ledende enere = 3, uansett hvilke kolonner de står i.",
    },
    {
      question: "Kolonne 3 i RREF er [2, −1, 0]ᵀ, pivotkolonner 1 og 2. Avhengighetsrelasjon i A?",
      options: ["a₃ = 2a₁ − a₂", "a₃ = 2a₁ + a₂", "a₃ = a₁ − 2a₂", "a₃ = −a₁ + 2a₂"],
      explanation: "Koeffisientene leses av RREF-kolonne 3 mot pivotradene: 2 mot a₁, −1 mot a₂, altså a₃ = 2a₁ − a₂. Nullen hører til en nullrad og gir ingen pivot.",
    },
    {
      question: "Hva er forskjellen på en pivotposisjon og en pivotkolonne?",
      options: ["Pivotposisjon er plassen (i, j); pivotkolonne er hele kolonne j", "Det finnes ingen reell forskjell; de to begrepene brukes fullstendig om hverandre i faget", "Pivotkolonne er plassen (i, j), mens pivotposisjon derimot betegner hele kolonne j i matrisen", "Pivotposisjon finnes utelukkende i A, mens pivotkolonne bare finnes i den reduserte trappeformen"],
      explanation: "En pivotposisjon er stedet der en ledende ener står; kolonnen den ligger i, kalles pivotkolonne.",
    },
    {
      question: "Når er kolonnene i A lineært uavhengige, lest av RREF?",
      options: ["Når hver eneste kolonne er en pivotkolonne, slik at systemet ikke har noen frie variabler", "Når den reduserte trappeformen til matrisen har minst én nullrad helt nederst", "Når matrisen A har strengt flere rader enn den har antall kolonner totalt sett", "Når minst én — men ikke nødvendigvis alle — av kolonnene er en pivotkolonne"],
      explanation: "Uavhengighet krever pivot i hver kolonne. Én fri variabel gir straks en ikke-triviell avhengighet.",
    },
    {
      question: "Hva gir Matlab-kommandoen poly(A) i et vedlegg?",
      options: ["Koeffisientene i det karakteristiske polynomet det(A − λI)", "Den reduserte trappeformen til A, slik rref-kommandoen ellers ville ha produsert den", "Egenvektorene til matrisen A stilt opp ved siden av hverandre som kolonner i en matrise", "En basis for nullrommet til A, altså samtlige løsninger av det homogene systemet Ax = 0"],
      explanation: "poly(A) gir det karakteristiske polynomet (Del 3). rref(A) gir trappeformen; [V,D]=eig(A) gir egenvektorer og egenverdier.",
    },
    {
      question: "Systemet Ax = 0 er homogent. Hva vet vi alltid?",
      options: ["Det har alltid minst løsningen x = 0, som kalles den trivielle løsningen av det homogene systemet", "Det har alltid uendelig mange innbyrdes forskjellige løsningsvektorer x som oppfyller det", "Det er alltid inkonsistent og har dermed overhodet ingen løsning som passer", "Det har alltid nøyaktig én løsning, helt uavhengig av hvor mange kolonner A har"],
      explanation: "Et homogent system har alltid den trivielle løsningen. Ikke-trivielle løsninger finnes nøyaktig når det er minst én fri variabel.",
    },
    {
      question: "En ikke-pivotkolonne i RREF svarer til ...",
      options: ["en fri variabel og en avhengighetsrelasjon", "en bunden variabel som har fått en fast og bestemt tallverdi tildelt seg", "en pivotposisjon som i stedet befinner seg nede i en helt annen rad i matrisen", "en nullrad som ligger et stykke lenger ned i den reduserte trappeformen til A"],
      explanation: "Kolonner uten pivot gir frie variabler, og hver av dem gir en relasjon som uttrykker kolonnen ved pivotkolonnene.",
    },
    {
      question: "Hvorfor er RREF nyttig som vedlegg, i motsetning til en ikke-redusert trappeform?",
      options: ["RREF er entydig, så vedlegget blir utvetydig", "En redusert trappeform vil alltid inneholde strengt færre rader enn en vanlig trappeform", "Bare en redusert trappeform viser i det hele tatt hvilke kolonner matrisen faktisk består av", "En ikke-redusert trappeform kan verken tolkes eller leses av et menneske på noen måte"],
      explanation: "RREF er entydig, mens ikke-reduserte trappeformer varierer. Pivotposisjonene er likevel de samme uansett metode.",
    },
    {
      question: "Matrise-vektor-produktet Ax kan alltid skrives som ...",
      options: ["en lineærkombinasjon av kolonnene i A med vektene fra x", "en lineærkombinasjon av radene i A med vektene hentet direkte fra vektoren x", "produktet av determinanten til matrisen A og hele koordinatvektoren x samlet", "summen av samtlige oppføringer i matrisen A multiplisert med vektoren x"],
      explanation: "Ax = x₁a₁ + … + xₙaₙ. Derfor er Ax = b løsbar nøyaktig når b ligger i kolonnerommet Col A.",
    },
    {
      question: "Totalmatrisen [A | b] brukes særlig til å avgjøre ...",
      options: ["om Ax = b er konsistent (om b ligger i Col A)", "hvilke av de enkelte kolonnene i koeffisientmatrisen A som faktisk er pivotkolonner", "hva rangen til selve koeffisientmatrisen A er lik, uten å ta hensyn til høyresiden b", "en basis for nullrommet Nul A, altså alle løsningene av det homogene systemet Ax = 0"],
      explanation: "Løsbarhet leses av RREF til totalmatrisen: pivot i høyresidekolonnen betyr inkonsistent. Col/Nul/rang leses av RREF til A alene.",
    },
    {
      question: "Du trenger RREF av en 4×5-matrise på eksamen. Hva gjør du?",
      options: ["Slår opp den ferdige RREF-en i vedlegget og siterer den", "Radreduserer hele den store matrisen svært nøye for hånd før du tør å svare", "Regner først ut determinanten til matrisen for å finne ut hvor pivotene havner", "Gjetter deg fram til pivotkolonnene ut fra hvor tallene i matrisen tilfeldigvis er størst"],
      explanation: "For matriser 3×4 og større brukes vedlegget. Manuell radreduksjon er tidssluk og feilkilde som sensor ikke belønner.",
    },
    {
      question: "Kolonne 2 i RREF er [3, 0, 0]ᵀ, pivotrader svarer til a₁, a₃, a₄. Relasjon?",
      options: ["a₂ = 3a₁", "a₂ = 3a₃", "a₂ = 3a₁ + 3a₃", "a₂ = a₁ + a₃"],
      explanation: "Bare den øverste oppføringen er ulik null, og den hører til pivotrad 1 (kolonne a₁). Altså a₂ = 3a₁.",
    },
    {
      question: "Hva bevarer elementære radoperasjoner?",
      options: ["Løsningsmengden, radrommet og kolonnesammenhengene", "Både kolonnerommet og hver enkelt tallverdi på alle plassene inne i matrisen A", "Antall rader som er ulik null, men derimot ikke selve rangen til matrisen A", "Determinanten fullstendig uforandret, uansett hvilken av de tre operasjonene man bruker"],
      explanation: "Radoperasjoner bevarer løsningsmengde, radrom og kolonnesammenhenger, men endrer generelt kolonnerommet (og skalerer/bytter fortegn på determinanten).",
    },
  ],
  'mat1120-1-2': [
    {
      question: "Basis for Col A består av ...",
      options: ["de opprinnelige pivotkolonnene i A", "de reduserte pivotkolonnene slik de framstår i den reduserte trappeformen til A", "de spesielle løsningene man leser av de frie variablene i vedleggets RREF", "samtlige kolonner i A, uansett om de er pivotkolonner eller ikke i systemet"],
      explanation: "RREF sier HVILKE kolonner (pivotkolonnene); vektorene tas fra A selv, fordi radreduksjon endrer kolonnerommet. Å bruke RREF-kolonnene er den klassiske MAT1120-fellen.",
    },
    {
      question: "Hvorfor kan man ikke bruke RREF-kolonnene som basis for Col A?",
      options: ["Radreduksjon endrer kolonnerommet, så RREF-kolonnene lever i et annet rom", "Fordi RREF-kolonnene alltid er avhengige og derfor aldri kan danne noen basis i det hele tatt", "Fordi RREF alltid inneholder færre kolonner enn den opprinnelige matrisen A gjorde", "Fordi kolonnene i RREF ikke lenger er ordnet i samme rekkefølge som i matrisen A"],
      explanation: "Radoperasjoner bevarer radrommet og kolonnesammenhengene, men ikke kolonnerommet. Derfor tas Col A-basis fra de opprinnelige kolonnene i A.",
    },
    {
      question: "Basis for Nul A finner man ved å ...",
      options: ["sette én fri variabel = 1 og resten = 0, og lese de bundne av RREF", "plukke ut de opprinnelige pivotkolonnene i matrisen A slik man gjør for kolonnerommet", "ta radene i den reduserte trappeformen som ikke er nullrader og bruke dem direkte", "transponere matrisen A først og deretter lese kolonnene i den nye matrisen"],
      explanation: "Hver fri variabel gir én spesiell løsning; til sammen danner de en basis for Nul A. Pivotkolonner hører til Col A, ikke Nul A.",
    },
    {
      question: "Dimensjonsteoremet (rang–nullitet) sier at ...",
      options: ["rang A + dim Nul A = antall søyler", "rang A + dim Nul A er alltid lik antallet rader i matrisen A, ikke søylene", "rang A ganger dim Nul A blir lik det totale antallet kolonner i matrisen", "rang A minus dim Nul A gir alltid antallet frie variabler i systemet Ax = 0"],
      explanation: "rang A (pivoter) + dim Nul A (frie variabler) = antall kolonner. Brukes som obligatorisk kontroll av basisantallet.",
    },
    {
      question: "En 4×6-matrise A har rang 4. Hva er dim Nul A?",
      options: ["2", "4, fordi nulliteten alltid faller sammen med rangen når matrisen er bred", "6, altså like mange som det totale antallet kolonner i matrisen A", "0, siden en matrise med full radrang ikke kan ha noe ikke-trivielt nullrom"],
      explanation: "dim Nul A = antall kolonner − rang = 6 − 4 = 2.",
    },
    {
      question: "dim Col A er alltid lik ...",
      options: ["rang A", "antallet rader i matrisen A, uansett hvor mange pivoter RREF måtte ha", "antallet frie variabler i det tilhørende homogene systemet Ax = 0", "antallet kolonner i A minus antallet pivotposisjoner i vedleggets RREF"],
      explanation: "Kolonnerommets dimensjon er antall pivotkolonner, altså rangen.",
    },
    {
      question: "Ax = b er løsbar (b ligger i Col A) nøyaktig når ...",
      options: ["rang [A | b] = rang A", "rang [A | b] er strengt større enn rang A, med en ekstra pivot i høyresiden", "matrisen A har full kolonnerang og dermed ikke har noen frie variabler igjen", "nullrommet Nul A bare inneholder nullvektoren og ingen andre løsningsvektorer"],
      explanation: "Konsistens ⇔ rang[A|b] = rang A. En pivot i høyresidekolonnen betyr inkonsistent, altså b utenfor Col A.",
    },
    {
      question: "Nul A er et underrom av hvilket rom?",
      options: ["Rⁿ, der n er antall kolonner i A", "Rᵐ, der m er antallet rader i matrisen A, siden løsningene har m komponenter", "det samme rommet som Col A alltid ligger i, uansett formen på matrisen A", "R² fast, fordi et nullrom per definisjon aldri har mer enn to dimensjoner"],
      explanation: "Løsningene x har n komponenter (én per kolonne), så Nul A ⊆ Rⁿ. Col A ⊆ Rᵐ (rader).",
    },
    {
      question: "Kolonnene i A er lineært uavhengige nøyaktig når ...",
      options: ["Nul A = {0} (ingen frie variabler)", "kolonnerommet Col A fyller opp hele Rᵐ som kolonnene lever i", "matrisen A er kvadratisk og har minst én pivot et sted på diagonalen", "rangen til A er strengt mindre enn det totale antallet kolonner i matrisen"],
      explanation: "Uavhengige kolonner ⇔ ingen fri variabel ⇔ Nul A trivielt. Én fri variabel gir en ikke-triviell avhengighet.",
    },
    {
      question: "Vedleggets RREF av en 3×4-matrise har pivoter i kolonne 1 og 2. Hva er dim Col A?",
      options: ["2", "4, altså like mange som det totale antallet kolonner i matrisen A", "3, altså like mange som antallet rader matrisen A har totalt", "1, siden bare den aller første pivotkolonnen teller med i dimensjonen"],
      explanation: "dim Col A = rang = antall pivoter = 2.",
    },
    {
      question: "Hva er en spesiell løsning?",
      options: ["En basisvektor for Nul A med én fri variabel satt til 1 og resten til 0", "En hvilken som helst løsning av det inhomogene systemet Ax = b for en gitt b", "En kolonne i A som svarer til en pivotposisjon i vedleggets reduserte trappeform", "Den entydige løsningen et system har når matrisen A tilfeldigvis er invertibel"],
      explanation: "Spesielle løsninger fås ved å sette én fri variabel = 1, resten = 0; de danner en basis for Nul A.",
    },
    {
      question: "En kvadratisk matrise A er invertibel hvis og bare hvis ...",
      options: ["rang A = n (full rang)", "nullrommet Nul A inneholder minst én ikke-triviell løsningsvektor forskjellig fra null", "kolonnerommet Col A er et ekte underrom som ligger strengt inne i hele Rⁿ", "determinanten til A er lik null, slik at systemet Ax = 0 får frie variabler"],
      explanation: "A invertibel ⇔ rang A = n ⇔ Nul A = {0} ⇔ Col A = Rⁿ ⇔ kolonnene er en basis for Rⁿ.",
    },
    {
      question: "Forskjellen på dimensjon og basis er at ...",
      options: ["dimensjon er et tall, mens en basis er en mengde vektorer", "dimensjon er en mengde vektorer, mens basis derimot alltid er et enkelt tall", "de betyr nøyaktig det samme og kan brukes fullstendig om hverandre i føringen", "dimensjon gjelder bare for Col A, mens basis bare gjelder for nullrommet Nul A"],
      explanation: "Dimensjon er antallet vektorer i en basis; basisen er selve vektorene. To sider av samme sak, men skriv begge riktig.",
    },
    {
      question: "En 5×5-matrise har RREF med én nullrad. Hva vet vi?",
      options: ["rang A = 4 og dim Nul A = 1, så kolonnene er avhengige", "matrisen A er invertibel siden fire av de fem radene fortsatt inneholder pivoter", "systemet Ax = b er løsbart for absolutt enhver høyreside b man måtte velge", "nullrommet Nul A inneholder bare nullvektoren, så det finnes ingen frie variabler"],
      explanation: "Én nullrad ⇒ 4 pivoter ⇒ rang 4, dim Nul A = 5 − 4 = 1. Ikke full rang, så kolonnene er avhengige og A er ikke invertibel.",
    },
    {
      question: "Col A kan tolkes som ...",
      options: ["bildet (verdimengden) til avbildningen x ↦ Ax", "kjernen til avbildningen x ↦ Ax, altså alt som sendes til nullvektoren", "løsningsmengden til det homogene systemet Ax = 0 for matrisen A", "mengden av alle vektorer x som gjør at produktet Ax blir lik nullvektoren"],
      explanation: "Col A er bildet: alle vektorer A kan treffe. Kjernen (alt som sendes til 0) er derimot Nul A.",
    },
    {
      question: "Full radrang (rang A = m) betyr at ...",
      options: ["Ax = b er løsbar for enhver b i Rᵐ", "kolonnene i matrisen A alltid er lineært uavhengige uansett antall kolonner", "nullrommet Nul A består utelukkende av nullvektoren og ingenting mer", "matrisen A nødvendigvis må være kvadratisk med like mange rader som kolonner"],
      explanation: "Full radrang ⇒ ingen nullrad i RREF ⇒ Col A = Rᵐ ⇒ løsbar for enhver b. Sier ingenting alene om kolonneuavhengighet.",
    },
    {
      question: "Løsningsmengden til et konsistent inhomogent system Ax = b har formen ...",
      options: ["en partikulærløsning pluss en vilkårlig vektor i Nul A", "utelukkende vektorer som ligger inne i kolonnerommet Col A til matrisen", "nøyaktig én entydig vektor, uansett hvor mange frie variabler systemet har", "alle vektorer i hele rommet Rⁿ som ikke tilfeldigvis ligger i nullrommet"],
      explanation: "x = x_p + x_h med x_h ∈ Nul A. Entydig løsning nøyaktig når Nul A = {0}.",
    },
    {
      question: "Hvorfor er dimensjonsteoremet nyttig i praksis på eksamen?",
      options: ["Det gir en rask kontroll: Col-basis + Nul-basis skal telle opp til antall søyler", "Det lar deg regne ut selve basisen for kolonnerommet uten å se på vedlegget", "Det viser om matrisen A er invertibel selv når den ikke er kvadratisk formet", "Det erstatter behovet for å lese den reduserte trappeformen fra vedlegget helt"],
      explanation: "Har du 3 Col-basisvektorer og 2 Nul-basisvektorer for en 5-kolonners matrise, stemmer 3 + 2 = 5. En tellefeil avsløres straks.",
    },
    {
      question: "rang A og rang Aᵀ er ...",
      options: ["alltid like", "generelt forskjellige, avhengig av om matrisen A har flest rader eller kolonner", "like bare når matrisen A tilfeldigvis er kvadratisk med like mange rader og kolonner", "motsatte, slik at summen deres alltid blir lik det totale antallet kolonner i A"],
      explanation: "Antall uavhengige kolonner = antall uavhengige rader, så rang A = rang Aᵀ. Derfor er dim Col A = dim Row A.",
    },
    {
      question: "En 3×4-matrise A har pivoter i kolonne 1, 2 og 4. Hva kan vi lese av dette?",
      options: ["rang A = 3, dim Nul A = 1, og Col A = R³ siden det er tre pivoter i tre rader", "rang A = 4, fordi vi teller kolonnenummeret til den siste pivoten i matrisen", "dim Nul A = 3, altså like mange som antallet rader matrisen A har totalt", "kolonnene i A er lineært uavhengige fordi tre av dem er pivotkolonner"],
      explanation: "3 pivoter ⇒ rang 3 og full radrang (Col A = R³); dim Nul A = 4 − 3 = 1, så det er én fri variabel og kolonnene er avhengige.",
    },
  ],
  'mat1120-1-3': [
    {
      question: "Basis for Row A består av ...",
      options: ["de ikke-null-radene i RREF, som brukes direkte fordi radrommet bevares", "de opprinnelige radene i A som svarer til pivotposisjonene i trappeformen", "de opprinnelige pivotkolonnene i A, akkurat som basisen for kolonnerommet Col A", "de spesielle løsningene man leser av de frie variablene i vedleggets RREF"],
      explanation: "Radreduksjon bevarer radrommet, så RREF-radene (de ikke-null) er en basis for Row A. Her brukes RREF direkte — motsatt av Col A.",
    },
    {
      question: "Hvorfor kan man bruke RREF-radene direkte som basis for Row A?",
      options: ["Radreduksjon bevarer radrommet, siden hver ny rad er en kombinasjon av gamle", "Fordi radrommet og kolonnerommet til en matrise alltid faller sammen uansett", "Fordi RREF alltid har nøyaktig de samme radene som den opprinnelige matrisen A", "Fordi radene i RREF står i en helt annen rekkefølge enn radene i matrisen A"],
      explanation: "Elementære radoperasjoner er kombinasjoner av rader og endrer ikke spennet av radene. Kolonnerommet endres derimot, derfor tas Col A-basis fra A.",
    },
    {
      question: "dim Row A er alltid lik ...",
      options: ["rang A", "antallet rader i A, uansett hvor mange pivoter RREF har totalt sett", "antallet frie variabler i det tilhørende homogene systemet Ax = 0", "dim Nul A, siden radrommet og nullrommet deler det samme rommet Rⁿ"],
      explanation: "dim Row A = dim Col A = rang A. Radrom og kolonnerom har alltid samme dimensjon (rangens symmetri).",
    },
    {
      question: "For at AB = O må hver kolonne i B ...",
      options: ["ligge i Nul A, siden kolonne j i AB er A anvendt på kolonne j i B", "ligge i kolonnerommet Col A til den venstre faktoren A i produktet", "være en av de opprinnelige pivotkolonnene i matrisen A fra vedlegget", "være lik nullvektoren, slik at hele matrisen B nødvendigvis blir null"],
      explanation: "Kolonne j i AB er A·b_j. AB = O betyr A·b_j = 0 for hver kolonne, altså at kolonnene i B ligger i Nul A. B trenger ikke være O.",
    },
    {
      question: "Kolonne j i produktet AB er lik ...",
      options: ["A ganget med kolonne j i B", "kolonne j i A ganget med hele matrisen B fra høyre side", "summen av alle kolonnene i A vektet med oppføringene i rad j av B", "rad j i A ganget med kolonne j i B, oppføring for oppføring"],
      explanation: "Kolonne j i AB er A·b_j (A anvendt på kolonne j i B). Dette er grunnlaget for AB = O-konstruksjonen.",
    },
    {
      question: "En 3×5-matrise A har rang 2. Største mulige rang for B med AB = O er ...",
      options: ["3", "2, altså det samme som rangen til matrisen A selv i produktet", "5, altså like mange som det totale antallet kolonner i matrisen A", "0, siden AB = O tvinger produktet og dermed også B til å ha rang null"],
      explanation: "Kolonnene i B ligger i Nul A, og dim Nul A = 5 − 2 = 3. Så rang B kan bli opptil 3 (velg de tre nullromsbasisvektorene).",
    },
    {
      question: "Row A og Col A lever i ...",
      options: ["ulike rom: Row A ligger i Rⁿ (kolonner), mens Col A ligger i Rᵐ (rader)", "det samme rommet, siden begge har nøyaktig den samme dimensjonen rang A", "Rⁿ begge to, fordi både rader og kolonner regnes med n komponenter hver", "Rᵐ begge to, siden alle underrom av en matrise alltid ligger i radrommet"],
      explanation: "Row A ⊆ Rⁿ (radene har n oppføringer) og Col A ⊆ Rᵐ (kolonnene har m oppføringer). Samme dimensjon, ulike rom.",
    },
    {
      question: "Koeffisientene når du skriver a₄ som lineærkombinasjon av Col A-basisen leses av ...",
      options: ["kolonne 4 i RREF, mot pivotradene", "rad 4 i RREF, lest fra venstre mot høyre langs hele raden", "kolonne 4 i den opprinnelige matrisen A, uten å bruke vedleggets RREF", "de spesielle løsningene i Nul A som svarer til den fjerde frie variabelen"],
      explanation: "Vektene er tallene i ikke-pivotkolonne 4 i RREF, lest mot pivotradene. Relasjonen gjelder i A fordi kolonnesammenhengene bevares.",
    },
    {
      question: "Row A = Col Aᵀ fordi ...",
      options: ["radene i A er nøyaktig kolonnene i den transponerte matrisen Aᵀ", "transponering aldri endrer noen av tallverdiene på plassene i matrisen A", "radrommet og kolonnerommet til enhver matrise per definisjon er identiske", "Aᵀ alltid har nøyaktig samme reduserte trappeform som matrisen A selv"],
      explanation: "Transponering gjør rader til kolonner, så Row A = Col Aᵀ. Derav rang A = rang Aᵀ.",
    },
    {
      question: "Koordinatvektoren [v]_B er bare veldefinert når basisen B er ...",
      options: ["ordnet (rekkefølgen på basisvektorene er fastlagt)", "en ortogonal basis der vektorene står vinkelrett på hverandre parvis", "en basis bestående utelukkende av standardbasisvektorene e₁ til eₙ", "en basis for hele Rⁿ og aldri bare for et ekte underrom W av rommet"],
      explanation: "Komponent i i [v]_B er vekten foran b_i, så rekkefølgen må være fast. B må være ordnet; ortogonalitet kreves ikke her.",
    },
    {
      question: "Kan en invertibel 4×4-matrise A ha et B ≠ O med AB = O?",
      options: ["Nei, for Nul A = {0}, så alle kolonnene i B må være null", "Ja, så lenge man velger kolonnene i B fra kolonnerommet Col A til matrisen", "Ja, enhver kvadratisk matrise A har alltid et slikt B forskjellig fra null", "Nei, fordi produktet av to invertible matriser aldri kan bli nullmatrisen O"],
      explanation: "AB = O krever kolonnene i B i Nul A. For invertibel A er Nul A = {0}, så B = O er eneste mulighet.",
    },
    {
      question: "Hvorfor er de ikke-null-radene i RREF automatisk lineært uavhengige?",
      options: ["Hver har en ledende ener der de andre radene har 0", "Fordi enhver matrise på trappeform bare kan ha lineært uavhengige rader", "Fordi de er skalarmultipler av hverandre og derfor peker i ulike retninger", "Fordi radrommet alltid har nøyaktig like mange dimensjoner som antall rader"],
      explanation: "Pivotstrukturen gjør at ingen ikke-null-rad kan skrives ved de andre — de er derfor en ekte basis for Row A, ikke bare en utspennende mengde.",
    },
    {
      question: "rang(AB) er alltid ...",
      options: ["høyst lik det minste av rang A og rang B", "nøyaktig lik summen av rang A og rang B for de to faktorene", "lik produktet av rang A og rang B, altså rang A ganger rang B", "større enn eller lik rangen til hver av de to faktorene A og B"],
      explanation: "rang(AB) ≤ min(rang A, rang B). Derfor kan AB = O (rang 0) godt ha B ≠ O.",
    },
    {
      question: "Nul A og Row A er ...",
      options: ["ortogonalkomplementer i Rⁿ, siden Ax = 0 betyr at x står vinkelrett på hver rad", "det samme underrommet, siden begge alltid har dimensjonen rang A", "underrom av Rᵐ som til sammen fyller opp hele radrommet til matrisen", "uavhengige av hverandre uten noen geometrisk sammenheng i det hele tatt"],
      explanation: "Ax = 0 betyr at x står vinkelrett på hver rad, så Nul A ⊥ Row A. De er ortogonalkomplementer i Rⁿ (utdypes i Del 4–5).",
    },
    {
      question: "[v]_B relativt standardbasisen {e₁, …, eₙ} er ...",
      options: ["lik vektoren v selv", "alltid lik nullvektoren uansett hvilken vektor v man starter med", "summen av alle komponentene i v samlet til ett enkelt tall", "den transponerte av v, altså v skrevet som en radvektor i stedet"],
      explanation: "Relativt standardbasisen er koordinatene identiske med vektoren: [v]_E = v. Andre baser gir andre koordinater.",
    },
    {
      question: "Du skal konstruere B (5×2) med AB = O for en 3×5-matrise A. Hvor henter du kolonnene i B?",
      options: ["Fra Nul A — to lineært uavhengige nullromsvektorer", "Fra Col A — de to opprinnelige pivotkolonnene i matrisen A fra vedlegget", "Fra Row A — to av de ikke-null-radene i den reduserte trappeformen til A", "Fra standardbasisen for R⁵, altså vektorene e₁ og e₂ satt som kolonner"],
      explanation: "Hver kolonne i B må ligge i Nul A. For rang B = 2 velger du to uavhengige nullromsbasisvektorer (krever dim Nul A ≥ 2).",
    },
    {
      question: "dim Row A + dim Nul A er alltid lik ...",
      options: ["antall kolonner n i matrisen A", "antall rader m i matrisen A, siden radrommet teller radene direkte", "rangen til A ganget med to, altså 2·rang A for enhver matrise", "det totale antallet oppføringer i matrisen A, altså m ganger n"],
      explanation: "Siden dim Row A = rang A, gir dimensjonsteoremet dim Row A + dim Nul A = n. Radrom og nullrom deler Rⁿ.",
    },
    {
      question: "En student setter Nul A-vektorene som RADER i B for å få AB = O. Hva er galt?",
      options: ["Kolonnene i B, ikke radene, må ligge i Nul A", "Ingenting — det gir alltid AB = O uansett hvordan vektorene plasseres", "Nul A-vektorene kan aldri brukes til å bygge et B med AB = O i det hele tatt", "Man må i stedet bruke Col A-vektorene som rader for at produktet skal bli O"],
      explanation: "Kolonne j i AB er A·b_j, så det er KOLONNENE i B som må ligge i Nul A. Å legge dem som rader gir generelt AB ≠ O.",
    },
  ],
  'mat1120-1-4': [
    {
      question: "Første steg i løsningsoppskriften for en sjanger A-oppgave er å ...",
      options: ["lese vedleggets RREF og sitere den i føringen med «Fra vedlegget ser vi at …»", "radredusere hele matrisen A nøye for hånd før du gjør noe annet", "regne ut determinanten til matrisen for å finne ut hvor pivotene ligger", "sette opp det homogene systemet Ax = 0 og løse det fra bunnen av"],
      explanation: "Steg 1 er å lese RREF fra vedlegget («Fra vedlegget ser vi at RREF er …»). Manuell radreduksjon av store matriser gir ikke poeng.",
    },
    {
      question: "Hvor taper studenter oftest føringspoeng på oppgave 1?",
      options: ["Ved å ta Col A-basis fra RREF i stedet for fra den opprinnelige A", "Ved å telle antall pivoter litt feil når matrisen har svært mange kolonner", "Ved å skrive nullrommet før kolonnerommet i rekkefølgen på besvarelsen", "Ved å bruke for mange desimaler i mellomregningen underveis i oppgaven"],
      explanation: "Den klassiske fellen er feil Col A-basis (RREF-kolonner). Det andre stedet er å radredusere selv i stedet for å sitere vedlegget.",
    },
    {
      question: "Basis for Nul A finner du ved å ...",
      options: ["sette én fri variabel = 1, resten = 0, og lese de bundne av RREF", "ta de opprinnelige pivotkolonnene i A slik du gjør for kolonnerommet Col A", "bruke de ikke-null-radene i den reduserte trappeformen direkte som vektorer", "transponere matrisen og lese kolonnene i den transponerte matrisen Aᵀ"],
      explanation: "Spesielle løsninger: én fri variabel = 1, resten 0. Én basisvektor per fri variabel.",
    },
    {
      question: "Dimensjonsteoremet brukes i oppskriften som ...",
      options: ["en sluttkontroll: rang A + dim Nul A skal bli antall søyler", "første steg for å finne hvilke kolonner som er pivotkolonner i A", "en metode for å regne ut selve determinanten til den kvadratiske matrisen", "et krav om at matrisen A alltid må ha full rang for å kunne løses"],
      explanation: "Etter Col- og Nul-basis sjekker du rang A + dim Nul A = n. Stemmer ikke summen, er det en tellefeil.",
    },
    {
      question: "Col A-basis for en matrise med pivoter i kolonne 1 og 3 er ...",
      options: ["de opprinnelige kolonnene 1 og 3 i A", "de reduserte kolonnene 1 og 3 slik de framstår i vedleggets RREF", "kolonnene 2, 4 og 5 i A, altså alle ikke-pivotkolonnene i matrisen", "radene 1 og 3 i den reduserte trappeformen til matrisen A fra vedlegget"],
      explanation: "Pivotkolonner 1 og 3 ⇒ basis = de opprinnelige kolonnene 1 og 3 i A (ikke RREF-kolonnene).",
    },
    {
      question: "For å avgjøre om b ligger i Col A leser du RREF av ...",
      options: ["totalmatrisen [A | b] og ser om høyresiden får en pivot", "koeffisientmatrisen A alene og teller antall pivotkolonner den har", "den transponerte Aᵀ og sjekker om b står blant kolonnene der", "matrisen [A | 0] og løser det tilhørende homogene systemet Ax = 0"],
      explanation: "b ∈ Col A ⇔ rang[A|b] = rang A. Pivot i høyresidekolonnen ⇒ inkonsistent ⇒ b utenfor Col A.",
    },
    {
      question: "En 3×5-matrise A har full radrang (rang 3). Da er Ax = b ...",
      options: ["løsbar for enhver b i R³", "løsbar bare når b tilfeldigvis er en av de tre pivotkolonnene i A", "aldri løsbar, siden matrisen har flere kolonner enn den har rader", "løsbar med nøyaktig én entydig løsning uansett hvilken b man velger"],
      explanation: "Full radrang ⇒ Col A = R³, så enhver b ligger i Col A. Løsningen er ikke entydig (2 frie variabler).",
    },
    {
      question: "For å konstruere B med AB = O plasserer du ... som kolonner i B.",
      options: ["vektorer fra Nul A, altså de spesielle løsningene av det homogene systemet", "de opprinnelige pivotkolonnene i A, altså basisen for kolonnerommet Col A", "de ikke-null-radene i vedleggets RREF, transponert til kolonnevektorer", "standardbasisvektorene for det rommet kolonnene i B lever i"],
      explanation: "AB = O ⇔ hver kolonne i B ligger i Nul A. Bruk de spesielle løsningene som kolonner.",
    },
    {
      question: "dim Nul A for en 4×6-matrise med rang 3 er ...",
      options: ["3", "4, altså like mange som antallet rader i matrisen A", "6, altså like mange som antallet kolonner i matrisen A totalt", "1, siden bare den siste ikke-pivotkolonnen gir en fri variabel"],
      explanation: "dim Nul A = n − rang = 6 − 3 = 3.",
    },
    {
      question: "Row A-basis hentes fra ...",
      options: ["de ikke-null-radene i RREF (brukt direkte)", "de opprinnelige radene i A som svarer til pivotposisjonene i trappeformen", "de opprinnelige pivotkolonnene i A, akkurat som for kolonnerommet Col A", "de spesielle løsningene som utgjør en basis for nullrommet Nul A til matrisen"],
      explanation: "Radrommet bevares av radreduksjon, så RREF-radene (de ikke-null) er en basis for Row A.",
    },
    {
      question: "En kvadratisk 4×4-matrise med Nul A = {0} er ...",
      options: ["invertibel, med rang 4, siden et trivielt nullrom gir full rang via dimensjonsteoremet", "ikke invertibel, siden et trivielt nullrom betyr at rangen er null", "invertibel bare hvis den i tillegg er symmetrisk om hoveddiagonalen", "umulig, fordi enhver kvadratisk matrise har et ikke-trivielt nullrom"],
      explanation: "Nul A = {0} ⇒ rang 4 (dimensjonsteoremet) ⇒ full rang ⇒ invertibel.",
    },
    {
      question: "Kan en invertibel matrise A ha B ≠ O med AB = O?",
      options: ["Nei, for Nul A = {0} tvinger B = O", "Ja, dersom kolonnene i B velges fra kolonnerommet Col A til matrisen", "Ja, enhver kvadratisk matrise har alltid et slikt B forskjellig fra null", "Nei, fordi et matriseprodukt av samme størrelse aldri kan bli nullmatrisen"],
      explanation: "Kolonnene i B må ligge i Nul A. For invertibel A er Nul A = {0}, så B = O.",
    },
    {
      question: "Koeffisientene til a₅ som lineærkombinasjon av Col A-basisen leses av ...",
      options: ["kolonne 5 i RREF, mot pivotradene", "rad 5 i den opprinnelige matrisen A fra venstre mot høyre", "kolonne 5 i A direkte, uten å se på vedleggets reduserte trappeform", "de spesielle løsningene i Nul A som svarer til den femte variabelen"],
      explanation: "Vektene er tallene i ikke-pivotkolonne 5 i RREF, lest mot pivotradene; relasjonen gjelder i A.",
    },
    {
      question: "Hvorfor er dimensjonsteoremet en god sluttkontroll?",
      options: ["Antall Col-basisvektorer pluss Nul-basisvektorer skal bli antall søyler", "Det gir deg selve kolonneromsbasisen uten at du trenger å lese vedlegget", "Det viser om matrisen er invertibel selv når den ikke er kvadratisk", "Det erstatter behovet for å sjekke om b ligger i kolonnerommet Col A"],
      explanation: "Har du 2 Col- og 3 Nul-basisvektorer for en 5-kolonners matrise, stemmer 2 + 3 = 5. En tellefeil avsløres straks.",
    },
    {
      question: "En A-besvarelse på oppgave 1 avsluttes med ...",
      options: ["en verbal konklusjonssetning sammen med eksakte svar i heltall eller brøk", "en desimaltilnærming av svaret for å vise nøyaktig regning", "en ny radreduksjon som dobbeltsjekker vedleggets RREF for hånd", "en liste over alle radoperasjonene som ble brukt underveis i løsningen"],
      explanation: "Sensor vil se en verbal konklusjon og eksakte svar (heltall/brøk). Desimaltilnærming av pene svar signaliserer feil.",
    },
    {
      question: "Hva er største mulige rang for B med AB = O når A er 3×6 med rang 2?",
      options: ["4", "2, altså det samme som rangen til matrisen A i produktet", "6, altså like mange som antallet kolonner i matrisen A totalt", "0, siden produktet AB = O tvinger også B til å ha rang null"],
      explanation: "Kolonnene i B ligger i Nul A, og dim Nul A = 6 − 2 = 4. Så rang B kan bli opptil 4.",
    },
  ],
  'mat1120-2-1': [
    {
      question: "Hvor mange betingelser må du sjekke for å vise at en delmengde W er et underrom?",
      options: ["Tre: 0 i W, lukket under addisjon, og lukket under skalarmultiplikasjon", "Ti: alle vektorromsaksiomene må verifiseres på nytt for W", "To: at W er lukket under addisjon og under skalarmultiplikasjon", "Én: at nullvektoren 0 ligger i delmengden W"],
      explanation: "De ti aksiomene arves fra V, så det holder å sjekke de tre betingelsene. Å nøye seg med to (typisk glemme 0 i W) eller bare én er utilstrekkelig.",
    },
    {
      question: "Hva er dimensjonen til polynomrommet P₂?",
      options: ["3, med basis {1, t, t²}", "2, med basis {t, t²} for graden er 2", "4, med basis {1, t, t², t³}", "Uendelig, fordi t kan ta alle verdier"],
      explanation: "dim Pₙ = n+1, så dim P₂ = 3 (konstantleddet 1 teller med). Å tro dim = n er en klassisk felle.",
    },
    {
      question: "Hvilken av disse delmengdene av P₃ er IKKE et underrom?",
      options: ["{p : p(0) = 1}", "{p : p(0) = 0}", "{p : p(-1) = 0}", "{p : p'(0) = 0}"],
      explanation: "Betingelsen p(0)=1 er inhomogen: nullpolynomet har 0(0)=0≠1, så 0 ligger ikke i mengden. De tre andre er homogene (=0) og gir underrom.",
    },
    {
      question: "Hvorfor er W = {p ∈ P₃ : p(2) = 0} et underrom?",
      options: ["Fordi p(2)=0 er en lineær homogen betingelse som bevares under addisjon og skalering", "Fordi ethvert polynom i P₃ automatisk har en rot i punktet t=2 uansett koeffisienter", "Fordi mengden inneholder samtlige konstantpolynomer i P₃ og disse er lukket", "Fordi betingelsen p(2)=0 gir W nøyaktig samme dimensjon som hele rommet P₃"],
      explanation: "Homogene lineære betingelser (=0) bevares under + og skalering, og nullpolynomet oppfyller dem — derfor et underrom.",
    },
    {
      question: "Hva er nullvektoren i polynomrommet Pₙ?",
      options: ["Nullpolynomet — polynomet med verdien 0 for alle t", "Konstantpolynomet p(t)=1, siden 1 er den multiplikative enheten", "Polynomet tⁿ av høyest mulig grad i rommet", "Tallet 0 i ℝ, som er felles for alle vektorrom"],
      explanation: "Nullvektoren i Pₙ er nullpolynomet (alle koeffisienter 0). Det er alltid første sjekk i et underroms-bevis.",
    },
    {
      question: "Et span Span{v₁,...,vₖ} i et abstrakt rom er alltid:",
      options: ["Et underrom, siden det inneholder 0 og er lukket under addisjon og skalering", "Lik hele rommet V, helt uavhengig av hvilke vektorer vₖ man velger å ta med", "En lineært uavhengig mengde bestående av nøyaktig de valgte vektorene vₖ", "En endelig mengde med nøyaktig k elementer og ingen andre vektorer i seg"],
      explanation: "Et span oppfyller de tre betingelsene automatisk, så det er alltid et underrom — derfor slipper man underroms-beviset når rommet er gitt som et span.",
    },
    {
      question: "Ligger funksjonen h(t) = 3 sin t − 2 cos t i V = Span{sin t, cos t}?",
      options: ["Ja, den er lineærkombinasjonen 3·sin t + (−2)·cos t av de spennende funksjonene", "Nei, fordi minustegnet gjør at h ikke er en lineærkombinasjon", "Nei, siden sin t og cos t ikke selv ligger i sitt eget span", "Bare for t der både sin t og cos t er positive samtidig"],
      explanation: "h er en lineærkombinasjon av sin t og cos t, altså ligger den i spennet. Koordinatvektoren blir (3, −2).",
    },
    {
      question: "Standardbasisen for P₃ er:",
      options: ["{1, t, t², t³}", "{t, t², t³} fordi konstantene ikke er polynomer", "{1, t, t², t³, t⁴}", "{1, t, t²} som for P₂, siden graden er lav"],
      explanation: "Standardbasisen for Pₙ er monomene fra 1=t⁰ til tⁿ. For P₃ gir det fire elementer, i tråd med dim P₃ = 4.",
    },
    {
      question: "Hvilken betingelse definerer garantert et underrom av P₃?",
      options: ["{p : p(1) = 0}, en lineær homogen betingelse", "{p : p(1) ≥ 0}, en ulikhet på verdien i t=1", "{p : p(1) = 5}, en fast verdi ulik null", "{p : p har nøyaktig grad 3}, altså ledende koeffisient ≠ 0"],
      explanation: "Bare den homogene likheten p(1)=0 gir underrom. Ulikheten bryter skalering med negativt tall, =5 mangler 0, og «nøyaktig grad 3» er ikke lukket under addisjon.",
    },
    {
      question: "Rommet C(ℝ) av kontinuerlige funksjoner er:",
      options: ["Uendelig-dimensjonalt, men eksamen jobber i endelig-dimensjonale underrom av det", "Endelig-dimensjonalt med den faste basisen {sin t, cos t, eˣ} for hele rommet", "Ikke et vektorrom i det hele tatt, fordi funksjoner ikke kan legges sammen", "Identisk med polynomrommet ⋃ₙ Pₙ som består av samtlige polynomer av alle grader"],
      explanation: "C(ℝ) er et uendelig-dimensjonalt vektorrom; eksamen bruker små underrom som Span{sin t, cos t}.",
    },
    {
      question: "Hva menes med at W er lukket under skalarmultiplikasjon?",
      options: ["At u ∈ W og c ∈ ℝ medfører at cu ∈ W", "At produktet av to vektorer i W igjen ligger i W", "At W bare inneholder vektorer med lengde 1", "At summen u + v av to vektorer i W ligger i W"],
      explanation: "Lukkethet under skalarmultiplikasjon: enhver skalering cu av en vektor i W blir liggende i W. Svaret om at summen u + v av to vektorer i W ligger i W, beskriver lukkethet under addisjon.",
    },
    {
      question: "Hvilke to underrom har ETHVERT vektorrom V alltid?",
      options: ["Hele rommet V og nullunderrommet {0}", "Standardbasisen og spennet av den", "P₂ og P₃ som naturlige delrom", "Kolonnerommet og nullrommet til V"],
      explanation: "De trivielle (uekte) underrommene er V selv og {0}. Det viser at 0 ∈ W alene ikke er nok for et interessant underrom.",
    },
    {
      question: "Er U = {p ∈ P₂ : p(1) ≥ 0} et underrom av P₂?",
      options: ["Nei — ta p(t)=t (p(1)=1≥0), men (−1)p har (−1)p(1)=−1<0, så U er ikke lukket under skalering", "Ja — nullpolynomet ligger i U og summer av ikke-negative verdier er ikke-negative", "Ja — enhver ulikhet av formen p(a)≥0 definerer et underrom", "Nei — fordi p(1) kan være et irrasjonalt tall for noen polynomer"],
      explanation: "En ulikhet bryter lukkethet under multiplikasjon med negative skalarer, så U er ikke et underrom.",
    },
    {
      question: "Snittet W₁ ∩ W₂ av to underrom W₁, W₂ av V er:",
      options: ["Alltid et underrom av V", "Aldri et underrom, med mindre W₁ = W₂", "Bare et underrom hvis W₁ ⊆ W₂", "Lik unionen W₁ ∪ W₂ av de to"],
      explanation: "Snittet av underrom er alltid et underrom. Derfor gir flere homogene betingelser samtidig (som p(−1)=0 og p(1)=0) fortsatt et underrom.",
    },
    {
      question: "Hvorfor er 'vektor' i et abstrakt vektorrom ikke det samme som en tallkolonne?",
      options: ["Fordi en vektor kan være et polynom, en funksjon eller en matrise — ordet viser til rollen i rommet", "Fordi vektorer i abstrakte rom alltid må ha uendelig mange komponenter i seg for å telle", "Fordi abstrakte vektorer verken kan legges sammen med hverandre eller skaleres med tall", "Fordi det bare er tallkolonnene i ℝⁿ som virkelig regnes som ekte og gyldige vektorer"],
      explanation: "En vektor er et element i et vektorrom, uansett form — polynom, funksjon eller matrise. Det er abstraksjonen som gjør Pₙ og funksjonsrom mulige.",
    },
    {
      question: "For hvilke koeffisienter beskriver W = {p ∈ P₃ : p'(0) = 0} sine polynomer? (p = a₀+a₁t+a₂t²+a₃t³)",
      options: ["a₁ = 0, mens a₀, a₂, a₃ er frie", "a₀ = 0, mens a₁, a₂, a₃ er frie", "a₃ = 0, mens a₀, a₁, a₂ er frie", "alle koeffisientene må være null"],
      explanation: "p'(t)=a₁+2a₂t+3a₃t², så p'(0)=a₁. Betingelsen p'(0)=0 tvinger a₁=0; de øvrige er frie, så dim W = 3.",
    },
    {
      question: "Hva er en additiv invers −v i et vektorrom?",
      options: ["Den entydige vektoren med v + (−v) = 0", "Den inverse matrisen til v når v er kvadratisk", "Vektoren du får ved å bytte om to komponenter i v", "Enhver vektor som er ortogonal på v"],
      explanation: "Hvert vektorrom garanterer en additiv invers −v med v+(−v)=0. I Pₙ er −p polynomet med motsatt fortegn på alle koeffisienter.",
    },
    {
      question: "Er mengden M₂ₓ₂ av alle 2×2-matriser et vektorrom, og i så fall med hvilken dimensjon?",
      options: ["Ja, et vektorrom av dimensjon 4", "Ja, men bare et vektorrom av dimensjon 2", "Nei, matriser kan ikke være vektorer", "Ja, et vektorrom av dimensjon 2×2 = uendelig"],
      explanation: "Matriser legges sammen og skaleres elementvis; M_{m×n} har dimensjon mn, så M₂ₓ₂ har dimensjon 4. Enda et abstrakt vektorrom.",
    },
    {
      question: "Hva er forskjellen på en delmengde og et underrom av V?",
      options: ["Et underrom er en delmengde som i tillegg oppfyller de tre betingelsene", "En delmengde er alltid strengt mindre enn et hvilket som helst underrom av samme rom", "De er nøyaktig det samme; de to ordene brukes helt om hverandre i praksis", "En delmengde må inneholde 0, mens et underrom ikke behøver å inneholde 0"],
      explanation: "Alle underrom er delmengder, men en delmengde er bare et underrom dersom den oppfyller 0∈W og de to lukkethetskravene.",
    },
    {
      question: "Hvilken funksjon ligger IKKE i V = Span{1, eˣcos x, eˣsin x}?",
      options: ["h(x) = e²ˣ", "g(x) = 5 − eˣcos x", "f(x) = 3 eˣsin x", "k(x) = 7 (konstantfunksjonen)"],
      explanation: "e²ˣ er ikke en lineærkombinasjon av 1, eˣcos x og eˣsin x. De tre andre er det (velg passende koeffisienter, k=7·1).",
    },
  ],
  'mat1120-2-2': [
    {
      question: "Hva må du vise for at en mengde skal være en basis for et vektorrom V?",
      options: ["At mengden både er lineært uavhengig og utspenner hele rommet V", "At mengden bare er lineært uavhengig, uavhengig av hvor mange vektorer den har", "At mengden bare utspenner V, selv om den kan inneholde overflødige vektorer", "At mengden inneholder nullvektoren og er lukket under alle operasjoner"],
      explanation: "En basis er per definisjon uavhengig OG utspennende. Å vise bare den ene halvparten er utilstrekkelig — med mindre antallet stemmer med dimensjonen (dimensjonsargumentet).",
    },
    {
      question: "Hvordan tester du lineær uavhengighet av polynomer?",
      options: ["Ved koeffisientsammenligning: sett kombinasjonen lik 0 og krev hver koeffisient lik 0", "Ved å sette inn én eneste tilfeldig valgt t-verdi og sjekke om resultatet tilfeldigvis blir null", "Ved å regne ut det bestemte integralet av hvert enkelt polynom over et fast valgt intervall", "Ved å sjekke ganske enkelt om alle polynomene tilfeldigvis har nøyaktig samme grad"],
      explanation: "Et polynom er 0 for alle t bare hvis hver koeffisient er 0, så kombinasjonen splittes i ett likningssystem per potens av t.",
    },
    {
      question: "Hva sier dimensjonsargumentet?",
      options: ["At n uavhengige vektorer i et n-dimensjonalt rom automatisk er en basis", "At ethvert rom av dimensjon n har uendelig mange forskjellige baser", "At antall vektorer i en basis alltid er mindre enn dimensjonen n", "At n vektorer i et rom alltid utspenner rommet uansett uavhengighet"],
      explanation: "Med riktig antall vektorer (= dim V) er uavhengighet og utspenning ekvivalente, så én av dem gir basis. Det er snarveien som sparer halve beviset.",
    },
    {
      question: "Er fire polynomer i P₂ noen gang lineært uavhengige?",
      options: ["Nei — flere enn dim P₂ = 3 vektorer er alltid avhengige", "Ja, hvis de fire polynomene alle har forskjellig grad", "Ja, så lenge ingen av dem er nullpolynomet", "Bare hvis de fire til sammen utspenner hele P₂"],
      explanation: "En mengde med flere enn dim V vektorer er nødvendigvis lineært avhengig. dim P₂ = 3, så fire polynomer er alltid avhengige.",
    },
    {
      question: "Hva er dimensjonen til Span{sin t, cos t}?",
      options: ["2, siden sin t og cos t er lineært uavhengige", "1, fordi cos t = sin(t + π/2) er en forskyvning av sin t", "Uendelig, fordi funksjonene har uendelig mange verdier", "0, fordi rommet ikke inneholder nullfunksjonen"],
      explanation: "sin t og cos t er uavhengige (Wronski = −1), og de utspenner rommet per definisjon av spennet, så dimensjonen er 2.",
    },
    {
      question: "Wronski-determinanten W(t₀) ≠ 0 i ett punkt betyr at funksjonene er:",
      options: ["Lineært uavhengige", "Lineært avhengige", "Ortogonale i hvert punkt", "Like i alle andre punkter"],
      explanation: "Finnes det ett punkt der Wronski-determinanten er ulik null, er funksjonene lineært uavhengige. Motsatt retning (W ≡ 0 ⇒ avhengige) gjelder ikke uten videre.",
    },
    {
      question: "Når er to vektorer u, v lineært avhengige?",
      options: ["Når den ene er et skalarmultiplum av den andre", "Når de har forskjellig grad eller forskjellig lengde", "Når summen u + v er lik nullvektoren nøyaktig", "Når de begge er forskjellige fra nullvektoren"],
      explanation: "To vektorer er avhengige nøyaktig når den ene er et skalarmultiplum av den andre, f.eks. 2+2t = 2(1+t).",
    },
    {
      question: "Standardbasisen {1, t, t²} for P₂ er lineært uavhengig fordi:",
      options: ["c₁·1 + c₂·t + c₃·t² = 0 for alle t tvinger c₁ = c₂ = c₃ = 0", "monomene har stigende grad og derfor ikke kan kollidere", "de tre monomene alle er forskjellige fra hverandre", "produktet av de tre monomene aldri blir null"],
      explanation: "Koeffisientsammenligning gir direkte at alle koeffisientene må være null — standardbasisen er uavhengig.",
    },
    {
      question: "En mengde med færre enn dim V vektorer kan:",
      options: ["Aldri utspenne V", "Alltid utspenne V hvis vektorene er uavhengige", "Utgjøre en basis for V", "Bare utspenne V hvis den inneholder nullvektoren"],
      explanation: "En utspennende mengde trenger minst dim V vektorer, så en mindre mengde kan aldri utspenne hele rommet.",
    },
    {
      question: "Hva er den effektive strategien for å vise at 3 polynomer er en basis for P₂?",
      options: ["Vis at de er uavhengige, tell at antallet er 3 = dim P₂, og bruk dimensjonsargumentet", "Vis at de utspenner P₂, og stopp der uten å sjekke antallet vektorer i mengden i det hele tatt", "Vis at hvert enkelt polynom har grad høyst lik 2 og derfor må ligge et sted inne i P₂", "Regn ut absolutt alle mulige lineærkombinasjoner og sjekk at de til sammen dekker hele P₂"],
      explanation: "Uavhengighet + riktig antall (= dim P₂) gir basis via dimensjonsargumentet, uten å bevise utspenning separat.",
    },
    {
      question: "Hvorfor kan en mengde som inneholder nullvektoren aldri være en basis?",
      options: ["Fordi 1·0 = 0 er en ikke-triviell relasjon, så mengden er lineært avhengig", "Fordi nullvektoren gjør at mengden automatisk får en altfor høy dimensjon å regne med", "Fordi nullvektoren er den eneste vektoren som ikke kan skrives i noen koordinater", "Fordi en ekte basis alltid må bestå av utelukkende positive vektorer og ingen andre"],
      explanation: "Nullvektoren gir en ikke-triviell relasjon (koeffisient 1 foran 0), så enhver mengde med 0 i seg er avhengig og kan ikke være en basis.",
    },
    {
      question: "En mengde vektorer i V er lineært uavhengig hvis og bare hvis:",
      options: ["deres koordinatvektorer relativt en fast basis er uavhengige i ℝⁿ", "de alle sammen har nøyaktig den samme koordinatvektoren relativt en fast valgt basis", "de til sammen utspenner hele rommet V og altså ikke bare et lite underrom av det", "hver eneste én av dem har minst én koordinat som er nøyaktig lik null i basisen"],
      explanation: "Koordinatavbildningen bevarer uavhengighet, så abstrakt uavhengighet kan testes med radreduksjon/determinant på koordinatvektorene.",
    },
    {
      question: "Hva menes med at en basisrepresentasjon er entydig?",
      options: ["Hver vektor kan skrives på nøyaktig én måte som lineærkombinasjon av basisvektorene", "Alle vektorene i rommet har nøyaktig de samme koeffisientene når de skrives i basisen", "Det finnes bare én eneste mulig basis for hvert vektorrom, og ingen andre baser kan finnes", "Koeffisientene i lineærkombinasjonen må alltid være hele tall og aldri brøker eller desimaler"],
      explanation: "Entydigheten av basisrepresentasjonen er nettopp det som gjør koordinatvektoren [x]_B veldefinert (kap. 2.3).",
    },
    {
      question: "En basis er samtidig:",
      options: ["en maksimal uavhengig mengde og en minimal utspennende mengde", "en minimal uavhengig mengde og en maksimal utspennende mengde", "den største mulige mengden vektorer i rommet totalt", "en mengde som må inneholde standardbasisvektorene"],
      explanation: "En basis kan ikke utvides og forbli uavhengig (maksimal uavhengig), og kan ikke reduseres og forbli utspennende (minimal utspennende).",
    },
    {
      question: "Rommet C(ℝ) inneholder Span{sin t, cos t}. Sistnevnte er:",
      options: ["et endelig-dimensjonalt underrom (dimensjon 2) av det uendelig-dimensjonale C(ℝ)", "et uendelig-dimensjonalt underrom av C(ℝ) helt på linje med hele funksjonsrommet selv", "ikke et underrom i det hele tatt, ganske enkelt fordi verken sin t eller cos t er polynomer", "hele rommet C(ℝ), for enhver kontinuerlig funksjon kan visstnok skrives med sin og cos"],
      explanation: "Selv om C(ℝ) er uendelig-dimensjonalt, er Span{sin t, cos t} et endelig-dimensjonalt underrom med dimensjon 2.",
    },
    {
      question: "For {1, eˣcos x, eˣsin x} er Wronski-determinanten W(x) = 2e²ˣ. Dette viser at funksjonene er:",
      options: ["lineært uavhengige, siden 2e²ˣ ≠ 0 for alle x", "lineært avhengige, siden Wronski vokser eksponentielt", "ortogonale, siden Wronski er positiv overalt", "identiske opp til en konstant faktor 2"],
      explanation: "W(x) = 2e²ˣ er ulik null overalt, så funksjonene er lineært uavhengige (og danner en basis for sitt span).",
    },
    {
      question: "Hva er koeffisientvektoren til p(t) = 3 − 2t + t² relativt standardbasisen {1, t, t²}?",
      options: ["(3, −2, 1)", "(1, −2, 3)", "(3, 2, 1)", "(−2, 1, 3)"],
      explanation: "Koeffisientvektoren leser av koeffisientene i rekkefølgen konstant, t, t²: (3, −2, 1). Rekkefølgen følger den ordnede basisen.",
    },
    {
      question: "Kan tre vektorer utspenne P₃?",
      options: ["Nei — utspenning av P₃ krever minst dim P₃ = 4 vektorer", "Ja, hvis de tre vektorene er lineært uavhengige", "Ja, hvis en av dem er nullpolynomet", "Ja, så lenge de alle har grad 3"],
      explanation: "dim P₃ = 4, og en utspennende mengde må ha minst dim V vektorer, så tre polynomer kan ikke utspenne P₃.",
    },
  ],
  'mat1120-2-3': [
    {
      question: "Hva er [3 − 2t + t²] relativt standardbasisen {1, t, t²} for P₂?",
      options: ["(3, −2, 1)", "(1, −2, 3)", "(3, 2, 1)", "(−2, 3, 1)"],
      explanation: "I standardbasisen leser koordinatvektoren av koeffisientene i rekkefølgen 1, t, t²: altså (3, −2, 1).",
    },
    {
      question: "Hvorfor er koordinatvektoren [x]_B entydig bestemt?",
      options: ["Fordi en basis gir hver vektor nøyaktig én lineærkombinasjon av basisvektorene", "Fordi absolutt alle vektorer viser seg å ha nøyaktig samme koordinatvektor i en gitt basis", "Fordi koordinatene til enhver vektor alltid må være hele tall og aldri brøker eller desimaler", "Fordi selve basisen kan velges helt fritt uten at det påvirker koordinatene i det hele tatt"],
      explanation: "Basisrepresentasjonen er entydig (kap. 2.2), så koeffisientene — og dermed koordinatvektoren — er entydige.",
    },
    {
      question: "Koordinatavbildningen Φ: V → ℝⁿ er en isomorfi. Hva betyr det?",
      options: ["Den er en lineær og bijektiv avbildning som bevarer all lineær struktur", "Den er en avbildning som kan endre dimensjonen mellom V og ℝⁿ", "Den sender alle vektorer i V til nullvektoren i ℝⁿ", "Den er bare definert for standardbasisen og ingen andre baser"],
      explanation: "En isomorfi er en lineær bijeksjon; den bevarer uavhengighet, span og dimensjon nøyaktig mellom V og ℝⁿ.",
    },
    {
      question: "Hvorfor kan uavhengighet av polynomer avgjøres ved determinant på koordinatvektorer?",
      options: ["Fordi koordinatavbildningen bevarer lineær uavhengighet mellom V og ℝⁿ", "Fordi determinanten av polynomer alltid er lik null", "Fordi polynomer og tallvektorer aldri kan være uavhengige samtidig", "Fordi koordinatvektorene alltid er ortogonale i ℝⁿ"],
      explanation: "Isomorfien gjør at polynomene er uavhengige hvis og bare hvis koordinatvektorene er det — testes med determinant/radreduksjon.",
    },
    {
      question: "Hvorfor er rekkefølgen på basisvektorene viktig for koordinatvektoren?",
      options: ["Fordi hver plass i koordinatvektoren hører til en bestemt basisvektor", "Fordi koordinatvektoren blir lengre hvis rekkefølgen endres", "Fordi bare den første basisvektoren bidrar til koordinatene", "Fordi rekkefølgen bestemmer om vektoren i det hele tatt har koordinater"],
      explanation: "Basisen er ordnet: bytter du om to basisvektorer, bytter de tilsvarende koordinatene plass, og svaret blir feil.",
    },
    {
      question: "Hva er [4 sin t + 7 cos t] relativt ordnet basis {sin t, cos t}?",
      options: ["(4, 7)", "(7, 4)", "(4, 7, 0)", "(11, 0)"],
      explanation: "Koeffisienten for sin t er 4 og for cos t er 7, i den ordnede rekkefølgen: (4, 7).",
    },
    {
      question: "Hvilket ℝⁿ er P₂ isomorft med?",
      options: ["ℝ³, siden dim P₂ = 3", "ℝ², siden graden er 2", "ℝ⁴, siden P₂ har fire monomer", "ℝ¹, siden alle polynomer er tall"],
      explanation: "Et n-dimensjonalt rom er isomorft med ℝⁿ. dim P₂ = 3, så P₂ ≅ ℝ³.",
    },
    {
      question: "Samme polynom 3 − 2t + t² har koordinatvektor (3,−2,1) i {1,t,t²}, men (5,−3,1) i {1,1+t,1+t+t²}. Dette viser at:",
      options: ["koordinatvektoren avhenger av hvilken basis man velger", "det ene av de to svarene nødvendigvis er en regnefeil", "polynomet ikke ligger i P₂ i den andre basisen", "koordinatvektoren er uavhengig av basisvalget"],
      explanation: "Koordinater er basisavhengige; å oversette mellom to baser er overgangsmatrisens jobb (kap. 2.4).",
    },
    {
      question: "Hva er det siste steget når du har regnet ut et svar i koordinater i signaturoppgaven?",
      options: ["Å oversette koordinatvektoren tilbake til et polynom eller en funksjon i V", "Å normalisere hele koordinatvektoren slik at den til slutt får lengde nøyaktig 1", "Å bytte over til en helt annen basis utelukkende for å kunne dobbeltsjekke svaret", "Å regne ut determinanten av den enkeltstående koordinatvektoren du nettopp fant"],
      explanation: "Koordinatvektoren representerer vektoren; sluttsvaret på et abstrakt rom må oversettes tilbake til et polynom/en funksjon (Φ⁻¹).",
    },
    {
      question: "Koordinatavbildningen er injektiv. Det betyr at:",
      options: ["ulike vektorer i V får ulike koordinatvektorer", "alle vektorer i V får samme koordinatvektor", "bare nullvektoren har en koordinatvektor", "koordinatvektorene alltid er kortere enn vektorene"],
      explanation: "Injektiv = én-til-én: forskjellige vektorer sendes til forskjellige koordinatvektorer. Følger av entydigheten.",
    },
    {
      question: "Hvilken funksjon g i Span{1, eˣcos x, eˣsin x} har koordinatvektor (0, 2, −4) relativt {1, eˣcos x, eˣsin x}?",
      options: ["g(x) = 2eˣcos x − 4eˣsin x", "g(x) = 2 − 4eˣcos x", "g(x) = eˣcos x + eˣsin x", "g(x) = −4eˣcos x + 2eˣsin x"],
      explanation: "Koordinatvektoren (0,2,−4) betyr 0·1 + 2·eˣcos x + (−4)·eˣsin x = 2eˣcos x − 4eˣsin x.",
    },
    {
      question: "For å avgjøre om x ligger i Span{v₁,...,vₖ} i et abstrakt rom, kan du:",
      options: ["oversette til koordinater og løse et vanlig likningssystem i ℝⁿ", "sjekke ganske enkelt om x tilfeldigvis har høyere grad enn samtlige av vₖ-ene", "regne ut det bestemte integralet av funksjonen x over et fast valgt intervall", "sjekke systematisk om vektoren x står ortogonalt på hver eneste av vₖ-ene"],
      explanation: "Isomorfien bevarer span, så spørsmålet blir et lineært likningssystem i koordinater — løses med radreduksjon.",
    },
    {
      question: "Hva er [cos t] relativt ordnet basis {sin t, cos t}?",
      options: ["(0, 1)", "(1, 0)", "(1, 1)", "(0, 0)"],
      explanation: "cos t = 0·sin t + 1·cos t, så koordinatvektoren er (0, 1) i rekkefølgen (sin t, cos t).",
    },
    {
      question: "En koordinatvektor [x]_B er:",
      options: ["en tallkolonne i ℝⁿ som representerer x, ikke x selv", "fullstendig identisk med selve vektoren x i alle mulige henseender", "alltid en enhetsvektor som per definisjon har lengde nøyaktig 1", "definert helt uten at man trenger noen ordnet basis i det hele tatt"],
      explanation: "Koordinatvektoren er en representasjon av x i ℝⁿ. Å blande den sammen med x selv er en klassisk felle.",
    },
    {
      question: "Hva er [7 − 3t] relativt {1, t, t²} i P₂?",
      options: ["(7, −3, 0)", "(7, −3)", "(0, −3, 7)", "(7, 0, −3)"],
      explanation: "7 − 3t = 7·1 + (−3)·t + 0·t², så koordinatvektoren er (7, −3, 0). Husk 0 for det manglende t²-leddet.",
    },
    {
      question: "Dimensjonen til et abstrakt underrom Span{v₁,...,vₖ} regnes som:",
      options: ["rangen til matrisen med koordinatvektorene [vᵢ]_B som søyler", "rett og slett antall vektorer k, helt uavhengig av om noen av dem er avhengige", "graden til nettopp det polynomet i mengden som tilfeldigvis har den høyeste graden", "determinanten av matrisen bygd av de aktuelle koordinatvektorene som søyler"],
      explanation: "Isomorfien bevarer dimensjon, så dimensjonen er rangen til koordinatvektorene — de vanlige RREF-verktøyene fra Del 1.",
    },
    {
      question: "Koordinatavbildningen er lineær. Hvilken likhet uttrykker dette?",
      options: ["[u + v]_B = [u]_B + [v]_B og [cu]_B = c[u]_B", "[u + v]_B = [u]_B · [v]_B for alle u, v", "[cu]_B = [u]_B uansett skalar c", "[u]_B = [v]_B for alle vektorer u, v"],
      explanation: "Linearitet betyr at koordinatavbildningen respekterer addisjon og skalarmultiplikasjon — halvparten av isomorfi-kravet.",
    },
    {
      question: "Hvorfor er koordinatavbildningen Φ: V → ℝⁿ surjektiv (på)?",
      options: ["Fordi enhver tallkolonne (c₁,...,cₙ) er koordinatvektoren til c₁b₁+...+cₙbₙ", "Fordi rommet V alltid inneholder langt flere vektorer enn det ℝⁿ noensinne kan gjøre", "Fordi det utelukkende er nullvektoren i ℝⁿ som i det hele tatt blir truffet av Φ", "Fordi Φ av natur sender absolutt alle vektorene i V til ett og samme punkt i ℝⁿ"],
      explanation: "Hver tallkolonne i ℝⁿ er bilde av lineærkombinasjonen c₁b₁+...+cₙbₙ i V, så Φ er surjektiv (og dermed, med injektivitet, bijektiv).",
    },
  ],
  'mat1120-2-4': [
    {
      question: "Hva oppfyller overgangsmatrisen P_{C←B} per definisjon?",
      options: ["[x]_C = P_{C←B} [x]_B for alle x", "[x]_B = P_{C←B} [x]_C for alle x", "P_{C←B} = [x]_B · [x]_C for alle x", "[x]_C = [x]_B + P_{C←B} for alle x"],
      explanation: "Overgangsmatrisen tar B-koordinater inn og gir C-koordinater ut: [x]_C = P_{C←B}[x]_B. Det fastsetter retningen.",
    },
    {
      question: "Hvordan bygger du kolonne j i P_{C←B}?",
      options: ["Som koordinatvektoren [b_j]_C — B-vektor nr. j uttrykt i C-koordinater", "Som koordinatvektoren [c_j]_B — C-vektor nr. j uttrykt i B-koordinater", "Som selve basisvektoren b_j, satt inn direkte som kolonne", "Som produktet av b_j og c_j komponentvis"],
      explanation: "For «C fra B» uttrykkes hver B-vektor i den nye basisen C; koordinatvektorene [b_j]_C blir kolonnene.",
    },
    {
      question: "Hvordan leses notasjonen P_{C←B}?",
      options: ["«C fra B» — den tar B-koordinater inn og gir C-koordinater ut", "«B fra C» — den tar C-koordinater inn og gir B-koordinater ut", "«C ganger B» — et produkt av de to basismatrisene", "«C og B» — en matrise som kombinerer begge symmetrisk"],
      explanation: "Pilen peker mot resultatet: «ut ← inn». B står til høyre (inn), C til venstre (ut).",
    },
    {
      question: "Hva er forholdet mellom P_{B←C} og P_{C←B}?",
      options: ["P_{B←C} = (P_{C←B})⁻¹", "P_{B←C} = P_{C←B} (de er like)", "P_{B←C} = (P_{C←B})ᵀ (transponert)", "P_{B←C} = −P_{C←B}"],
      explanation: "De to veiene er hverandres inverser; produktet er identitetsmatrisen I.",
    },
    {
      question: "Kolonnene i P_{C←B} er:",
      options: ["koordinatvektorer (tallkolonner), ikke basisvektorene selv", "selve polynomene eller funksjonene i basisen B", "alltid enhetsvektorer med lengde 1", "radene i C skrevet loddrett"],
      explanation: "Kolonnene er koordinatvektorer [b_j]_C. En vanlig felle er å sette selve basisvektorene inn i stedet.",
    },
    {
      question: "La E = {1, t} og B = {2+t, 1+t}. Hva er P_{E←B}?",
      options: ["[[2,1],[1,1]]", "[[1,-1],[-1,2]]", "[[1,1],[2,1]]", "[[2,1],[1,2]]"],
      explanation: "Fra standardbasis er P_{E←B} bare B-vektorene som kolonner i standardkoordinater: 2+t=(2,1), 1+t=(1,1).",
    },
    {
      question: "Hvorfor er det lurt å kontrollere retningen på P_{C←B} med et talleksempel?",
      options: ["Fordi å forveksle den med inversen P_{B←C} er den vanligste feilen i sjanger I", "Fordi determinanten alltid må sjekkes å være null", "Fordi overgangsmatriser ofte ikke er invertible", "Fordi koordinatvektorer kan endre lengde ved basisskifte"],
      explanation: "Retningsfellen er dokumentert og dyr. En rask sjekk — [x]_C = P_{C←B}[x]_B på en kjent vektor — avslører feil retning.",
    },
    {
      question: "Er en overgangsmatrise noen gang singulær (ikke-invertibel)?",
      options: ["Nei — den er alltid invertibel, siden basisskiftet må kunne reverseres", "Ja, hvis de to basene har ulik dimensjon", "Ja, hvis en av basene inneholder nullvektoren", "Ja, hvis matrisen ikke er kvadratisk"],
      explanation: "Begge baser utspenner samme rom, så P_{C←B} er alltid invertibel (det ≠ 0); ellers kunne oversettelsen ikke snus.",
    },
    {
      question: "Hva er P_{B←B}, overgangen fra en basis til seg selv?",
      options: ["Identitetsmatrisen I", "Nullmatrisen O", "Den inverse av B", "En diagonalmatrise med basisvektorenes lengder"],
      explanation: "Å bytte fra en basis til seg selv endrer ingen koordinater, så P_{B←B} = I.",
    },
    {
      question: "La P_{C←B} = [[1,1],[1,-1]]. Hva er [x]_C når [x]_B = (2,3)?",
      options: ["(5, −1)", "(2, 3)", "(−1, 5)", "(5, 5)"],
      explanation: "[x]_C = P_{C←B}[x]_B = (1·2+1·3, 1·2−1·3) = (5, −1). Matrisen tar B inn og gir C ut.",
    },
    {
      question: "Når begge baser er gitt i standardkoordinater (matrisene P_B, P_C med vektorene som kolonner), er:",
      options: ["P_{C←B} = P_C⁻¹ P_B", "P_{C←B} = P_B⁻¹ P_C", "P_{C←B} = P_B P_C", "P_{C←B} = P_C P_B⁻¹"],
      explanation: "Fra [x]_E = P_B[x]_B = P_C[x]_C følger [x]_C = P_C⁻¹P_B[x]_B, altså P_{C←B} = P_C⁻¹P_B.",
    },
    {
      question: "Hvordan kan du finne inversen P_{B←C} ved radreduksjon?",
      options: ["Radreduser [P_{C←B} | I] til [I | M⁻¹]; inversen står til høyre", "Radreduser P_{C←B} alene til trappeform og les av inversen", "Transponer P_{C←B} og bytt fortegn på diagonalen", "Radreduser [I | P_{C←B}] til [P_{C←B} | I]"],
      explanation: "Standardmetoden [M | I] → [I | M⁻¹] gir inversen til høyre. På eksamen kan inversen også leses av vedlegget.",
    },
    {
      question: "Ved et basisskifte er det som endres:",
      options: ["koordinatene (beskrivelsen), mens selve vektoren er den samme", "selve vektoren, mens koordinatene forblir uendret", "både vektoren og dens plassering i rommet", "dimensjonen til rommet vektoren lever i"],
      explanation: "Basisskifte endrer bare hvilke tall vi beskriver vektoren med; vektoren i V er uforandret.",
    },
    {
      question: "Hvis P_{C←B} = [[2,1],[1,1]], hva er P_{B←C}?",
      options: ["[[1,−1],[−1,2]]", "[[2,1],[1,1]]", "[[1,1],[2,1]]", "[[2,−1],[−1,1]]"],
      explanation: "P_{B←C} = (P_{C←B})⁻¹. Med det = 2·1−1·1 = 1: inversen er [[1,−1],[−1,2]].",
    },
    {
      question: "Sammensetningen P_{D←C} P_{C←B} er lik:",
      options: ["P_{D←B}", "P_{B←D}", "P_{C←C} = I", "P_{D←C} + P_{C←B}"],
      explanation: "Overgangsmatriser kjedes som funksjoner: de indre basisene C kanselleres, så resultatet er P_{D←B}.",
    },
    {
      question: "For B = {1,t,t²}, C = {t², t²+t, t²+t+1} er P_{C←B} = [[0,−1,1],[−1,1,0],[1,0,0]]. Hva blir [x]_C når [x]_B = (0,1,1) (dvs. x = t²+t)?",
      options: ["(0, 1, 0)", "(1, 1, 0)", "(0, 1, 1)", "(1, 0, 1)"],
      explanation: "P_{C←B}·(0,1,1) = (0−1+1, 0+1+0, 0) = (0,1,0). Stemmer: x = t²+t = 1·(t²+t), altså andre C-vektor alene.",
    },
    {
      question: "For å bygge P_{C←B} når C er en ikke-standard basis, må du:",
      options: ["løse et lite likningssystem for å uttrykke hver B-vektor i C-koordinater", "bare sette B-vektorene rett inn som kolonner uten omregning", "transponere matrisen av C-vektorene", "regne determinanten av B-vektorene"],
      explanation: "Kolonnene er [b_j]_C, så hver B-vektor må skrives som lineærkombinasjon av C-vektorene — et lite likningssystem per kolonne.",
    },
    {
      question: "Hvilken oppskrift gir feil retning?",
      options: ["Å bruke P_{B←C} når oppgaven ber om å oversette fra B til C", "Å bruke P_{C←B} når oppgaven ber om å oversette fra B til C", "Å kontrollere svaret med [x]_C = P_{C←B}[x]_B på en kjent vektor", "Å bygge kolonne j som [b_j]_C for P_{C←B}"],
      explanation: "Å oversette fra B til C krever P_{C←B}. Bruker du P_{B←C} der, går du feil vei — den klassiske retningsfellen.",
    },
  ],
  'mat1120-2-5': [
    {
      question: "Hva står i kolonne j av matriserepresentasjonen [T]_B?",
      options: ["Koordinatvektoren [T(b_j)]_B", "Selve vektoren T(b_j) skrevet ut i sin opprinnelige form", "Koordinatvektoren [b_j]_B til basisvektor nummer j", "Verdien T(b_j) evaluert i punktet j langs tallinjen"],
      explanation: "Kolonne j er T anvendt på basisvektor j, deretter uttrykt i B-koordinater: [T(b_j)]_B. En tallkolonne, ikke vektoren selv.",
    },
    {
      question: "Hvilken relasjon gjør [T]_B nyttig i praksis?",
      options: ["[T(x)]_B = [T]_B [x]_B", "[T(x)]_B = [x]_B [T]_B", "[T(x)]_B = [T]_B + [x]_B", "[T(x)]_B = [T]_B / [x]_B"],
      explanation: "For å regne T(x) ganger du koordinatvektoren [x]_B med matrisen [T]_B. Abstrakt operasjon blir matrisemultiplikasjon i ℝⁿ.",
    },
    {
      question: "Hva er den vanligste feilen når man bygger [T]_B?",
      options: ["Å sette T(b_j) inn som kolonne uten å oversette til B-koordinater", "Å regne T på for mange basisvektorer samtidig i samme steg", "Å bruke standardbasisen når oppgaven ikke nevner noen basis", "Å multiplisere matrisen med feil koordinatvektor til slutt"],
      explanation: "Den dokumenterte fellen: kolonnene skal være koordinatvektorer [T(b_j)]_B, ikke polynomene/funksjonene T(b_j) selv.",
    },
    {
      question: "For T(p) = p′ på P₂ med B = {1, t, t²}, hva er [T]_B?",
      options: ["[[0,1,0],[0,0,2],[0,0,0]]", "[[0,0,0],[1,0,0],[0,2,0]]", "[[1,0,0],[0,1,0],[0,0,1]]", "[[0,1,0],[0,0,1],[0,0,0]]"],
      explanation: "T(1)=0→(0,0,0), T(t)=1→(1,0,0), T(t²)=2t→(0,2,0). Kolonnene gir [[0,1,0],[0,0,2],[0,0,0]].",
    },
    {
      question: "Hvorfor må T være lineær for at [T]_B skal finnes?",
      options: ["Fordi matriserepresentasjonen bare kan gjengi avbildninger som respekterer addisjon og skalarmultiplikasjon", "Fordi bare lineære avbildninger kan brukes på polynomer av lav grad i det hele tatt", "Fordi ikke-lineære avbildninger alltid mangler et definisjonsområde man kan velge basis for", "Fordi en matrise per definisjon bare kan multipliseres med kvadratiske koordinatvektorer"],
      explanation: "Matrisemultiplikasjon er en lineær operasjon; den kan bare etterligne en avbildning som selv er lineær.",
    },
    {
      question: "Hva blir T(0) for enhver lineær avbildning T?",
      options: ["0 (nullvektoren)", "1 (identitetselementet for multiplikasjon)", "En vektor som avhenger av hvilken basis man har valgt", "Udefinert, siden T ikke trenger å være definert i 0"],
      explanation: "Sett c=0 i homogeniteten: T(0)=T(0·u)=0·T(u)=0. Bryter en regel dette, er den ikke lineær.",
    },
    {
      question: "For en differensialoperator S = T² − 2T + 2I, hva er [S]_B?",
      options: ["[T]_B² − 2[T]_B + 2I", "[T]_B² − 2[T]_B + 2 (skalaren 2 lagt til hvert element)", "([T]_B − 2)([T]_B + 2) regnet elementvis", "2[T]_B² − [T]_B, siden koeffisientene bytter plass"],
      explanation: "Et polynom i T representeres av samme polynom i [T]_B: [S]_B = [T]_B² − 2[T]_B + 2I, der I er identitetsmatrisen.",
    },
    {
      question: "Hva betyr [T]_B² i uttrykket for en differensialoperator?",
      options: ["Matriseproduktet [T]_B · [T]_B", "Hvert element i [T]_B opphøyd i annen potens", "Determinanten til [T]_B ganget med seg selv", "[T]_B multiplisert med tallet 2"],
      explanation: "[T]_B² er matrisemultiplikasjon, ikke elementvis kvadrering. Det svarer til T²(f)=f″ for derivasjonsoperatoren.",
    },
    {
      question: "På Span{sin t, cos t} med B = {sin t, cos t} og T(f)=f′, hva er [T]_B?",
      options: ["[[0,−1],[1,0]]", "[[0,1],[−1,0]]", "[[1,0],[0,−1]]", "[[0,1],[1,0]]"],
      explanation: "(sin t)′=cos t→(0,1), (cos t)′=−sin t→(−1,0). Kolonnene gir [[0,−1],[1,0]]. Fortegnet på (cos t)′ er fellen.",
    },
    {
      question: "Hvorfor kan derivasjon representeres som en matrise, mens T(p)=p² ikke kan?",
      options: ["Derivasjon er lineær, mens kvadrering bryter homogenitet (T(cp) = c²T(p))", "Derivasjon gir alltid lavere grad, mens kvadrering gir høyere grad enn rommet tåler", "Derivasjon er definert for alle polynomer, mens kvadrering ikke er det", "Kvadrering krever et indreprodukt, som ikke er oppgitt"],
      explanation: "T(cp)=(cp)²=c²p², ikke cT(p). Kvadrering er ikke lineær, så den har ingen matriserepresentasjon.",
    },
    {
      question: "Hva er størrelsen på [T]_B for en operator T: P₃ → P₃?",
      options: ["4×4, siden dim P₃ = 4", "3×3, siden indeksen i P₃ er 3", "4×3, siden den senker graden med 1", "3×4, siden det er fire basisvektorer og tre komponenter"],
      explanation: "dim P₃ = 4 (polynomer av grad ≤ 3), så [T]_B er kvadratisk 4×4 for en operator fra P₃ til P₃.",
    },
    {
      question: "På Span{eˣcos x, eˣsin x} med T(f)=f′ og S = T²−2T+2I ble [S]_B = 0. Hva betyr det?",
      options: ["S er nulloperatoren på rommet: hver funksjon der løser y″−2y′+2y=0", "S er identitetsoperatoren, siden en nullmatrise virker som identitet", "Rommet er ikke lukket under S, så S er ikke veldefinert", "[T]_B må ha vært regnet feil, siden ingen ekte operator gir nullmatrise"],
      explanation: "[S]_B = 0 betyr S(f)=0 for alle f i rommet. Det stemmer: eˣcos x og eˣsin x løser nettopp y″−2y′+2y=0.",
    },
    {
      question: "Hvordan sjekker man raskt at én av betingelsene for linearitet: T(cu + dv) = ?",
      options: ["cT(u) + dT(v)", "T(u) + T(v) uansett verdiene til c og d", "cdT(u + v) med koeffisientene ganget sammen", "T(cu) · T(dv) som et produkt"],
      explanation: "Den samlede testen T(cu+dv)=cT(u)+dT(v) dekker både additivitet (c=d=1) og homogenitet (d=0).",
    },
    {
      question: "Hva svarer [T(x)]_B = [T]_B [x]_B til når man er ferdig med regningen?",
      options: ["Koordinatvektoren til T(x), som må oversettes tilbake til en funksjon/polynom", "Selve funksjonen T(x) ferdig uttrykt, uten flere steg", "En ny basis for rommet som T avbilder inn i", "Determinanten til T, som avgjør om T er lineær"],
      explanation: "Produktet gir koordinatvektoren til T(x). Svaret må oversettes tilbake til et polynom/en funksjon for å være fullstendig.",
    },
    {
      question: "Hva er [I]_B for identitetsavbildningen I(x)=x i en hvilken som helst basis?",
      options: ["Identitetsmatrisen I", "Nullmatrisen, siden I ikke endrer noe", "En matrise som avhenger sterkt av valget av basis", "En diagonalmatrise med basisvektorenes lengder"],
      explanation: "I(b_j)=b_j gir koordinatvektoren e_j i hver kolonne, altså identitetsmatrisen — uansett basis.",
    },
    {
      question: "For T(p)=p′+p på P₂ med B={1,t,t²}, hva er kolonne 2 (svarende til t) i [T]_B?",
      options: ["(1, 1, 0)", "(0, 1, 0)", "(1, 0, 0)", "(0, 1, 1)"],
      explanation: "T(t)=t′+t=1+t, som i koordinater (1,t,t²) er (1,1,0).",
    },
    {
      question: "Hva menes med at basisen B er «ordnet» i sammenheng med [T]_B?",
      options: ["Rekkefølgen på basisvektorene bestemmer rekkefølgen på kolonnene og radene", "Basisvektorene må stå i stigende gradsrekkefølge for at matrisen skal finnes", "Basisen må være ortogonal for at [T]_B skal kunne regnes ut", "Rekkefølgen er likegyldig, men basisen må inneholde nullvektoren"],
      explanation: "En ordnet basis fastsetter hvilken b_j som gir hvilken kolonne, og hvilken koordinatplass som gir hvilken rad. Bytt rekkefølge, og matrisen endres.",
    },
    {
      question: "Sammensetning av avbildninger S∘T svarer til hvilken matriseoperasjon?",
      options: ["Produktet [S]_B [T]_B, i den rekkefølgen", "Summen [S]_B + [T]_B", "Produktet [T]_B [S]_B, altså motsatt rekkefølge", "Den elementvise produktmatrisen"],
      explanation: "[S∘T]_B = [S]_B [T]_B, i samme rekkefølge som avbildningene virker. Spesielt er [T²]_B = [T]_B².",
    },
    {
      question: "I standardbasisen {1, t, …, tⁿ} for Pₙ, hva er kolonnene i [T]_B lette å lese av som?",
      options: ["Koeffisientene til polynomet T(b_j)", "Røttene til polynomet T(b_j)", "Gradene til hvert ledd i T(b_j)", "Verdiene av T(b_j) i punktet t=1"],
      explanation: "I standardbasisen er koordinatvektoren bare koeffisientene, så kolonne j er koeffisientene til T(b_j).",
    },
    {
      question: "Hvorfor er det nok å finne [T]_B én gang for å regne en hel differensialoperator q(T)?",
      options: ["Fordi [q(T)]_B = q([T]_B): samme polynom i matrisen som i operatoren", "Fordi q(T) alltid har samme matrise som T uansett polynom", "Fordi differensialoperatorer alltid gir nullmatrisen til slutt", "Fordi q(T) bare endrer basisen, ikke selve matrisen"],
      explanation: "Matriserepresentasjon bevarer sum, skalar og produkt, så [q(T)]_B = q([T]_B). Finn [T]_B, og regn resten som matriseregning.",
    },
  ],
  'mat1120-2-6': [
    {
      question: "Hva er basisskifteformelen for operatormatrisen?",
      options: ["[T]_C = P_{C←B} [T]_B P_{B←C}, lest fra høyre mot venstre langs pilene", "[T]_C = P_{B←C} [T]_B P_{C←B}, med den motsatte overgangsmatrisen ytterst", "[T]_C = P_{C←B} P_{B←C} [T]_B, med begge overgangsmatrisene til venstre", "[T]_C = [T]_B P_{C←B} P_{B←C}, med operatormatrisen plassert helt til venstre"],
      explanation: "Les fra høyre: C-vektor inn → P_{B←C} til B-koordinater → [T]_B virker → P_{C←B} tilbake til C. Rekkefølge og retning er avgjørende.",
    },
    {
      question: "Hvorfor har [T]_B og [T]_C samme egenverdier?",
      options: ["De er likedannede (similære) og deler derfor karakteristisk polynom", "Enhver operatormatrise har egenverdiene lik null uansett valgt basis", "P_{C←B} legger de samme egenverdiene til i begge de to matrisene", "Egenverdiene avhenger utelukkende av dimensjonen til vektorrommet"],
      explanation: "[T]_C = P[T]_B P⁻¹, så det([T]_C − λI) = det([T]_B − λI). Egenverdiene tilhører operatoren, ikke basisen.",
    },
    {
      question: "Isomorfi-kriteriet: T er en isomorfi hvis og bare hvis …",
      options: ["[T]_B er en invertibel matrise (determinanten er forskjellig fra null)", "[T]_B er en symmetrisk matrise (lik sin egen transponerte matrise)", "[T]_B har minst én egenverdi som er nøyaktig lik tallet null", "[T]_B er en diagonalmatrise (bare nuller utenfor hoveddiagonalen)"],
      explanation: "T isomorfi ⇔ [T]_B invertibel ⇔ ker T = {0}. Sjekk f.eks. at det[T]_B ≠ 0.",
    },
    {
      question: "Hva svarer ker T til når man har matrisen [T]_B?",
      options: ["Nul[T]_B, med koordinatvektorene oversatt tilbake til funksjoner", "Col[T]_B, med koordinatvektorene oversatt tilbake til funksjoner", "Radrommet til [T]_B, oversatt tilbake til polynomer og funksjoner", "Egenrommet til den største egenverdien, tolket som funksjoner"],
      explanation: "ker T ≅ Nul[T]_B. Finn matrisens nullrom, og oversett koordinatvektorene tilbake til funksjoner.",
    },
    {
      question: "Hva er den dokumenterte toppsjikt-fellen når man finner ker T?",
      options: ["Å la svaret bli stående som tallkolonner i ℝⁿ, ikke som funksjoner", "Å regne Nul[T]_B med feil antall frie variabler i hver eneste omgang", "Å bruke kolonnerommet Col[T]_B i stedet for radrommet til matrisen", "Å glemme å normalisere alle kjernevektorene til lengde lik én til slutt"],
      explanation: "Oppgaven spør etter polynomer/funksjoner. Å la ker T bli stående i ℝⁿ er et tapt poeng — tilbakeoversettelsen er obligatorisk.",
    },
    {
      question: "For T(p)=p′ på P₂ er ker T lik hvilken mengde polynomer?",
      options: ["Konstantpolynomene, altså underrommet Span{1} i polynomrommet P₂", "De lineære polynomene, altså hele underrommet Span{1, t} i P₂", "Bare nullpolynomet, som er det trivielle underrommet {0} i P₂", "Hele polynomrommet P₂, siden derivasjon treffer alle polynomer"],
      explanation: "Nul[T]_B = Span{(1,0,0)}, som oversatt tilbake er polynomet 1. Kjernen er konstantpolynomene — de med derivert null.",
    },
    {
      question: "En likning T(f)=g har nøyaktig én løsning for hver g hvis og bare hvis …",
      options: ["[T]_B er invertibel, altså at avbildningen T er en isomorfi", "g ligger i kjernen til T, altså at T sender g til nullvektoren", "[T]_B er en nullmatrise, altså at T sender alt til nullvektoren", "g er en egenvektor for T, altså at T(g) er et multiplum av g"],
      explanation: "Entydig løsbar for alle g ⇔ T isomorfi ⇔ [T]_B invertibel. Da er [f]_B = [T]_B⁻¹[g]_B.",
    },
    {
      question: "Hva vil det si at [T]_B og [T]_C er likedannede (similære)?",
      options: ["De er knyttet ved [T]_C = P[T]_B P⁻¹ og gjengir samme avbildning", "De har nøyaktig de samme tallene, men plassert i en annen rekkefølge", "De har lik størrelse, men ingen andre egenskaper er nødvendigvis felles", "Den ene er transponert av den andre (radene og kolonnene er byttet om)"],
      explanation: "Likedannede matriser A og PAP⁻¹ representerer samme operator sett fra to baser, og deler determinant, spor, rang og egenverdier.",
    },
    {
      question: "Hvilken matrise står lengst til høyre i [T]_C = P_{C←B}[T]_B P_{B←C}, og hvorfor?",
      options: ["P_{B←C}, fordi en C-koordinatvektor må oversettes til B-koordinater først", "P_{C←B}, fordi den utfører selve avbildningen T på koordinatvektoren", "[T]_B, fordi operatoren alltid virker helt til slutt i regnestykket", "Identitetsmatrisen, som settes inn for å bevare dimensjonen på rommet"],
      explanation: "Formelen leses fra høyre: input er en C-koordinatvektor, som P_{B←C} oversetter til B før [T]_B kan virke.",
    },
    {
      question: "For T(f)=f″ på P₃, hva er ker T?",
      options: ["Polynomene av grad høyst 1, altså underrommet Span{1, t} i P₃", "Konstantpolynomene, altså det éndimensjonale underrommet Span{1}", "Bare nullpolynomet, altså det trivielle underrommet {0} i P₃", "Hele polynomrommet P₃, siden dobbelderivasjon treffer alt der"],
      explanation: "p″ = 0 nettopp for de lineære polynomene. Nul[T]_B har to frie variabler, oversatt til 1 og t.",
    },
    {
      question: "Hva betyr det at bildet im T svarer til Col[T]_B?",
      options: ["Alt T treffer, uttrykt i koordinater, er kolonnerommet til matrisen", "Alt T sender til null, uttrykt i koordinater, er kolonnerommet", "Bildet er alltid hele V, uansett hvilken operator T det er snakk om", "Bildet er radrommet til matrisen, uttrykt i koordinater relativt B"],
      explanation: "im T = {T(x)} svarer via koordinater til Col[T]_B — kolonnerommet er det matrisen kan produsere.",
    },
    {
      question: "Hvis det[T]_B = 0, hva kan du konkludere?",
      options: ["T er ikke en isomorfi, og kjernen ker T er større enn {0}", "T er en isomorfi med en entydig bestemt og lineær inversavbildning", "[T]_B har utelukkende positive egenverdier på hoveddiagonalen sin", "T må være identitetsoperatoren, som sender hver vektor til seg selv"],
      explanation: "Singulær matrise ⇔ ikke-triviell kjerne ⇔ T ikke isomorfi. Antall frie variabler i Nul[T]_B gir dim ker T.",
    },
    {
      question: "Hvordan oversetter man koordinatvektoren (0,1,0) i basis {1,t,t²} tilbake til et polynom?",
      options: ["0·1 + 1·t + 0·t² = t (koordinatene ganges med hver basisvektor)", "0·1 + 1·t + 0·t² = 1 (bare det midterste leddet regnes som konstant)", "(0,1,0) er en tallkolonne som ikke lar seg oversette til et polynom", "0 + 1 + 0 = 1 (man summerer ganske enkelt de tre komponentene)"],
      explanation: "Gang komponentene med basisvektorene: 0·1 + 1·t + 0·t² = t.",
    },
    {
      question: "For en triangulær operatormatrise [T]_B, hvordan sjekker du raskt om T er en isomorfi?",
      options: ["Sjekk at ingen diagonalelement er null (det er produktet av diagonalen)", "Sjekk at matrisen er symmetrisk om diagonalen (lik sin transponerte)", "Sjekk at radsummen i hver eneste rad av matrisen blir nøyaktig null", "Sjekk at alle elementene som står over diagonalen er strengt positive"],
      explanation: "Determinanten til en triangulær matrise er produktet av diagonalelementene; er noen null, er den singulær og T ikke isomorfi.",
    },
    {
      question: "Hva sier dimensjonsteoremet (rang–nullitet) anvendt på en operator T: V → V?",
      options: ["dim ker T + dim im T = dim V, som en kontroll på de to dimensjonene", "dim ker T · dim im T = dim V, altså produktet av de to dimensjonene", "dim ker T = dim im T alltid, uansett hvilken operator T det gjelder", "dim ker T + dim im T = 2·dim V, altså det dobbelte av romdimensjonen"],
      explanation: "Rang–nullitet på [T]_B gir dim ker T + dim im T = dim V — en nyttig kontroll på kjerne- og bildedimensjonene.",
    },
    {
      question: "Hvorfor kan du velge hvilken som helst basis når du skal finne egenverdiene til en operator T?",
      options: ["Egenverdiene er basisuavhengige, så alle [T]_B har de samme egenverdiene", "Egenverdiene til enhver operator på et polynomrom er alltid lik null", "Bare standardbasisen gir de riktige egenverdiene til operatoren T", "Basisvalget endrer egenverdiene på en måte man siden kan korrigere for"],
      explanation: "Ulike baser gir likedannede matriser med samme karakteristiske polynom, altså samme egenverdier. Velg den enkleste basisen.",
    },
    {
      question: "Basisskifteformelen [T]_C = P[T]_B P⁻¹ er samme relasjon som hvilket senere begrep?",
      options: ["Diagonalisering A = PDP⁻¹, der C velges som en egenvektorbasis for T", "Gram–Schmidt-prosessen, som lager en ortogonal basis fra en gitt basis", "Minste kvadraters normallikninger CᵀC x̂ = Cᵀb for et lineært system", "Singulærverdidekomposisjonen A = UΣVᵀ med ortogonale faktormatriser"],
      explanation: "Diagonalisering er basisskifte til en egenvektorbasis: da blir [T]_C = D diagonal. Samme struktur PAP⁻¹.",
    },
    {
      question: "Koordinatavbildningen x ↦ [x]_B er selv en isomorfi V → ℝⁿ. Hvorfor er det viktig her?",
      options: ["Det er grunnen til at ker T og im T svarer til Nul og Col av matrisen", "Det gjør at alle operatorer T automatisk blir isomorfier på rommet V", "Det betyr at koordinatvektorer aldri trenger å oversettes tilbake igjen", "Det gjør at [T]_B alltid blir en invertibel matrise uansett operator T"],
      explanation: "Fordi koordinatavbildningen bevarer all lineær struktur, speiles kjerne og bilde av T nøyaktig i nullrom og kolonnerom av [T]_B.",
    },
  ],
  'mat1120-2-7': [
    {
      question: "Hva er den fullstendige kjeden i en typisk signaturoppgave?",
      options: ["Underrom → basis → koordinater → matrise → isomorfi eller ker T", "Egenverdier → diagonalisering → Aᵏ → ortogonal projeksjon → norm", "Gram–Schmidt → ortogonal projeksjon → minste kvadrater → SVD", "RREF → Col A → Nul A → rang → dimensjonsteoremet som kontroll"],
      explanation: "Signaturoppgaven kjeder underrom, basis, koordinater, overgangs-/operatormatrise og isomorfi/kjerne — ofte på samme rom.",
    },
    {
      question: "Hvor mange betingelser må sjekkes for å vise at W er et underrom?",
      options: ["Tre: at 0 ∈ W, og at W er lukket under addisjon og skalarmultiplikasjon", "To: at W er lukket under addisjon og lukket under skalarmultiplikasjon", "Én: det holder å sjekke at mengden W ikke er tom i utgangspunktet", "Fire: de tre vanlige betingelsene pluss at W er endeligdimensjonalt"],
      explanation: "Underroms-testen har tre betingelser, og alle tre må vises — å hoppe over 0 ∈ W er en dokumentert felle.",
    },
    {
      question: "Hva mangler i et basisbevis som bare viser lineær uavhengighet?",
      options: ["Dimensjonsargumentet: k uavhengige vektorer i et k-dim rom er en basis", "En sjekk av at basisvektorene er parvis ortogonale i indreproduktet", "En normalisering av hver basisvektor til å ha lengde nøyaktig lik én", "En verifisering av at nullvektoren 0 er tatt med i selve mengden"],
      explanation: "Basisbeviset er todelt: uavhengighet + dimensjonsargument (eller uavhengighet + utspenning). Uten dimensjonsargumentet er beviset ufullstendig.",
    },
    {
      question: "For T(f)=f′ på Span{eˣcos x, eˣsin x} med B={u,v}, hva er [T]_B?",
      options: ["[[1,1],[−1,1]]", "[[1,−1],[1,1]]", "[[1,0],[0,1]]", "[[0,1],[−1,0]]"],
      explanation: "u′=u−v→(1,−1), v′=u+v→(1,1). Kolonnene gir [[1,1],[−1,1]], med det = 2 (isomorfi).",
    },
    {
      question: "Hvorfor er Span{sin t, cos t} automatisk et underrom?",
      options: ["Fordi ethvert span av vektorer alltid utgjør et underrom av rommet", "Fordi funksjonene sin t og cos t er ortogonale i standardindreproduktet", "Fordi rommet det utspenner er nøyaktig todimensjonalt og endelig", "Fordi både sin t og cos t er deriverbare funksjoner på hele ℝ"],
      explanation: "Et span inneholder alltid 0 og er lukket under addisjon og skalarmultiplikasjon — det er derfor per definisjon et underrom.",
    },
    {
      question: "Hva er dim P₃ (polynomer av grad ≤ 3)?",
      options: ["4", "3", "5", "2"],
      explanation: "Standardbasisen er {1, t, t², t³}, altså fire vektorer. dim Pₙ = n+1.",
    },
    {
      question: "For S = T² − 2T + 2I på Span{eˣcos x, eˣsin x} ble [S]_B = 0. Hva forteller det?",
      options: ["Hele rommet ligger i ker S, så hver funksjon der løser y″−2y′+2y=0", "S er identitetsoperatoren, som lar hver funksjon i rommet stå uendret", "Rommet er ikke lukket under S, så operatoren S er ikke veldefinert", "Matrisen [T]_B må ha vært regnet feil, siden 0 er et umulig resultat"],
      explanation: "[S]_B = 0 betyr S(f)=0 for alle f. eˣcos x og eˣsin x løser nettopp y″−2y′+2y=0 (r=1±i).",
    },
    {
      question: "Ved koordinatvektoren [T(b_j)]_B: hva er den vanligste fellen?",
      options: ["Å sette T(b_j) selv inn som kolonne uten å oversette til B-koordinater", "Å derivere basisvektoren b_j to ganger for mye i hvert enkelt steg", "Å bytte om på rekkefølgen på radene i matrisen underveis i regningen", "Å glemme å dele hver kolonne på lengden av basisvektoren b_j til slutt"],
      explanation: "Kolonnen skal være koordinatvektoren [T(b_j)]_B, ikke funksjonen/polynomet T(b_j). Å hoppe over oversettelsen er hovedfellen.",
    },
    {
      question: "Hvordan avgjør du raskt om en triangulær operatormatrise gir en isomorfi?",
      options: ["Ingen diagonalelement er null (determinanten er produktet av diagonalen)", "Alle elementene som står over hoveddiagonalen er strengt positive tall", "Matrisen er symmetrisk om diagonalen (lik sin egen transponerte matrise)", "Radsummen i hver eneste rad av matrisen er nøyaktig lik tallet én"],
      explanation: "For en triangulær matrise er det = produktet av diagonalen. Er ingen null, er den invertibel og T en isomorfi.",
    },
    {
      question: "For T(f)=f″ på P₃ er ker T lik hva?",
      options: ["Polynomene av grad høyst 1, altså underrommet Span{1, t} i rommet P₃", "Konstantpolynomene, altså det éndimensjonale underrommet Span{1}", "Bare nullpolynomet, altså det trivielle underrommet {0} i rommet P₃", "Hele polynomrommet P₃, siden dobbelderivasjon treffer alle polynomer"],
      explanation: "p″=0 nettopp for de lineære polynomene. Nul[T]_B har to frie variabler, oversatt til 1 og t.",
    },
    {
      question: "I hvilken form skal svaret på ker T stå til slutt?",
      options: ["Som en mengde polynomer eller funksjoner, oversatt tilbake fra ℝⁿ", "Som en samling koordinatvektorer i tallrommet ℝⁿ, uten oversettelse", "Som en enkelt determinant som avgjør om kjernen er triviell eller ei", "Som en diagonalmatrise med kjernevektorene plassert på diagonalen"],
      explanation: "Kjernen finnes som Nul[T]_B (koordinatvektorer), men sluttsvaret må oversettes tilbake til polynomer/funksjoner.",
    },
    {
      question: "Hvordan viser du lineær uavhengighet av polynomene {1, 1+t, 1+2t+t²} i P₂?",
      options: ["Skriv koordinatvektorene som kolonner og sjekk at determinanten er ≠ 0", "Sjekk at de tre polynomene er parvis ortogonale i standardprikkproduktet", "Sjekk at de tre polynomene har innbyrdes forskjellig grad i variabelen t", "Regn ut integralet av produktet av alle polynomene over intervallet [0,1]"],
      explanation: "Koordinatvektorene (1,0,0),(1,1,0),(1,2,1) gir en matrise med det = 1 ≠ 0, altså uavhengige.",
    },
    {
      question: "For T(p)=p′+p på P₂ er [T]_B triangulær med diagonal 1,1,1. Er T en isomorfi?",
      options: ["Ja, siden det[T]_B = 1 ≠ 0, altså at matrisen er invertibel", "Nei, siden derivasjon alltid senker graden på et polynom med én", "Nei, siden diagonalen er konstant lik én hele veien nedover", "Det er umulig å avgjøre uten først å finne alle egenvektorene til T"],
      explanation: "det = 1·1·1 = 1 ≠ 0, så [T]_B er invertibel og T er en isomorfi (ker T = {0}).",
    },
    {
      question: "Hva er koordinatvektoren [3 + t − t²] relativt C = {1, 1+t, 1+t+t²}?",
      options: ["(2, 2, −1)", "(3, 1, −1)", "(−1, 1, 3)", "(3, 2, 1)"],
      explanation: "Koeffisientsammenligning: t²-ledd c=−1, t-ledd b=2, konstant a=2. Kontroll: 2·1+2(1+t)−(1+t+t²)=3+t−t².",
    },
    {
      question: "Hvorfor er egenverdiene til [T]_B og [T]_C alltid like?",
      options: ["Matrisene er likedannede via basisskifte og deler karakteristisk polynom", "Begge matrisene har alltid egenverdien null, uansett operator og basis", "Basisen C er alltid en egenvektorbasis som gjør [T]_C diagonal", "Determinanten til begge matrisene er null, så egenverdiene faller sammen"],
      explanation: "[T]_C = P[T]_B P⁻¹, så det([T]_C − λI) = det([T]_B − λI). Egenverdiene tilhører operatoren, ikke basisen.",
    },
    {
      question: "Delpunktene i en signaturoppgave er ofte kjedet på samme rom. Hva er fordelen?",
      options: ["Å se koblingen sparer tid og premieres — samme basis eller matrise brukes om igjen", "Det gjør at man trygt kan hoppe helt over underroms-beviset i første delpunkt", "Det betyr at bare det aller første delpunktet teller ved sensureringen", "Det tvinger fram bruk av standardprikkproduktet i alle delpunktene"],
      explanation: "Delpunktgjenbruk er designet inn: samme rom/matrise går igjen, så det å se koblingen sparer arbeid og gir uttelling.",
    },
    {
      question: "Hva løser du for å finne p når T(p)=g og [T]_B er invertibel?",
      options: ["[p]_B = [T]_B⁻¹[g]_B, og deretter oversetter du p tilbake til et polynom", "[p]_B = [T]_B[g]_B, og deretter leser du av determinanten til matrisen", "[p]_B = [g]_B − [T]_B, altså differansen mellom vektoren og matrisen", "[p]_B = Nul[T]_B, altså nullrommet til operatormatrisen [T]_B"],
      explanation: "Med invertibel matrise har T(p)=g entydig løsning [p]_B = [T]_B⁻¹[g]_B; oversett koordinatsvaret tilbake til et polynom.",
    },
    {
      question: "For T(f)=f′ på Span{1, cos t, sin t}, hvorfor er T ikke en isomorfi?",
      options: ["Fordi (1)′=0 gir en nullkolonne, så det[T]_B = 0 og ker T = Span{1}", "Fordi funksjonene sin t og cos t ikke er ortogonale i indreproduktet", "Fordi rommet er tredimensjonalt, og derivasjon krever et partall", "Fordi derivasjon på et hvilket som helst funksjonsrom aldri er injektiv"],
      explanation: "Konstantfunksjonen 1 deriveres til 0, så første kolonne i [T]_B er null → det = 0 → ker T = Span{1}.",
    },
  ],
  'mat1120-3-1': [
    {
      question: "En egenvektor for A er en vektor v som oppfyller ...",
      options: ["A v = λ v for et tall λ, der v ikke er nullvektoren", "A v = λ v der v gjerne kan være selve nullvektoren null", "A v står vinkelrett på v for en passende skalar λ", "A v = v uansett hvilken skalarfaktor λ man velger seg"],
      explanation: "Egenvektor: A v er en skalar (egenverdien λ) gange v, og v ≠ 0 kreves alltid. λ = 0 er derimot tillatt.",
    },
    {
      question: "Når en egenvektor er OPPGITT, er den beste metoden å ...",
      options: ["sette den inn og sjekke om A v blir et multiplum av v", "regne ut hele det karakteristiske polynomet det(A − λI)", "radredusere hele matrisen A ned til redusert trappeform", "regne determinanten til A og se om den er ulik null her"],
      explanation: "Innsetting Av=λv er raskest og gir full uttelling når v er gitt — man slipper polynomet helt.",
    },
    {
      question: "Den karakteristiske likningen for egenverdier er ...",
      options: ["det(A − λI) = 0", "det(A − λI) er større enn tallet null alltid", "A − λI = 0 som en full matriselikning her", "spor(A − λI) = 0 for den aktuelle verdien λ"],
      explanation: "(A−λI)v=0 har ikke-null-løsning nøyaktig når A−λI er singulær, altså det(A−λI)=0.",
    },
    {
      question: "For en triangulær matrise finner du egenverdiene ved å ...",
      options: ["lese dem rett av hoveddiagonalen til matrisen", "regne det fulle karakteristiske polynomet for hånd", "radredusere matrisen og telle antallet pivotkolonner", "gange sammen alle elementene som står i første rad"],
      explanation: "A−λI er da triangulær; determinanten er produktet av diagonalleddene, så egenverdiene er diagonalelementene.",
    },
    {
      question: "Egenrommet E_λ til en egenverdi λ er lik ...",
      options: ["Nul(A − λI), altså løsningsmengden til (A − λI)v = 0", "Nul A, altså løsningsmengden til det homogene A v = 0", "Col(A − λI), altså kolonnerommet til matrisen A − λI", "Span av alle pivotkolonnene i den opprinnelige matrisen A"],
      explanation: "Egenrommet er nullrommet til A−λI (ikke til A, med mindre λ=0). Basis: spesielle løsninger fra RREF.",
    },
    {
      question: "Geometrisk multiplisitet til λ er ...",
      options: ["dim E_λ, altså antall frie variabler i A − λI", "antallet ganger λ er rot i det karakteristiske polynomet", "antallet pivotkolonner som matrisen A − λI har totalt", "summen av alle diagonalelementene i matrisen A − λI"],
      explanation: "Geometrisk = dim E_λ = antall frie variabler i A−λI. Algebraisk = rotens multiplisitet i polynomet.",
    },
    {
      question: "Algebraisk multiplisitet til λ er ...",
      options: ["eksponenten på faktoren (λ − λ₀) i det karakteristiske polynomet", "dimensjonen til egenrommet E_λ, altså tallet dim E_λ selv", "antall lineært uavhengige egenvektorer man klarer å finne", "antall frie variabler i det homogene systemet (A − λ₀I)v = 0"],
      explanation: "Algebraisk multiplisitet = rotens multiplisitet i polynomet. De uavhengige egenvektorene teller den GEOMETRISKE.",
    },
    {
      question: "Sammenhengen mellom geometrisk og algebraisk multiplisitet er ...",
      options: ["1 ≤ geometrisk ≤ algebraisk for hver egenverdi", "geometrisk er alltid strengt større enn algebraisk her", "geometrisk og algebraisk er alltid nøyaktig like store", "algebraisk ≤ geometrisk med likhet bare når λ er null"],
      explanation: "Alltid 1 ≤ geo ≤ alg. Er geo < alg, er egenverdien defekt og matrisen ikke diagonaliserbar.",
    },
    {
      question: "En egenverdi kalles «defekt» når ...",
      options: ["geometrisk multiplisitet er mindre enn algebraisk multiplisitet", "algebraisk multiplisitet er mindre enn geometrisk multiplisitet", "egenverdien tilfeldigvis er lik tallet null for matrisen A", "egenvektoren dens tilfeldigvis er selve nullvektoren i rommet"],
      explanation: "Defekt = geo < alg. Da mangler egenvektorer, og matrisen kan ikke diagonaliseres (kap. 3.2).",
    },
    {
      question: "Sporet av A er lik ...",
      options: ["summen av egenverdiene, talt med multiplisitet", "produktet av alle egenverdiene, talt med multiplisitet", "summen av de geometriske multiplisitetene til A totalt", "antallet distinkte egenverdier som matrisen A har i alt"],
      explanation: "spor A = Σλᵢ (sum). Det er determinanten som er PRODUKTET av egenverdiene.",
    },
    {
      question: "Determinanten av A er lik ...",
      options: ["produktet av egenverdiene, talt med multiplisitet", "summen av egenverdiene, talt med deres multiplisitet", "antallet egenverdier som er forskjellige fra tallet null", "sporet av A delt på antallet egenverdier i matrisen A"],
      explanation: "det A = Πλᵢ. Følge: λ=0 er egenverdi nøyaktig når det A = 0, altså når A er singulær.",
    },
    {
      question: "λ = 0 er en egenverdi for A nøyaktig når ...",
      options: ["A er singulær, altså når det A = 0", "A er invertibel med en determinant ulik tallet null", "sporet av matrisen A tilfeldigvis er lik tallet null", "alle diagonalelementene i matrisen A er lik tallet null"],
      explanation: "λ=0 egenverdi ⇔ Av=0 har ikke-null-løsning ⇔ Nul A ≠ {0} ⇔ det A = 0 ⇔ A singulær.",
    },
    {
      question: "Kravet v ≠ 0 i definisjonen av egenvektor er der fordi ...",
      options: ["ellers ville A v = λ v holdt for enhver λ og vært innholdsløst", "nullvektoren aldri kan ganges med noen skalar i det hele tatt", "en egenverdi λ ellers alltid måtte være lik selve tallet null", "matrisen A ellers ikke ville hatt noen egenverdier å finne her"],
      explanation: "A·0 = λ·0 for alle λ, så uten kravet ville alt vært 'egenvektor'. λ=0 er derimot en tillatt egenverdi.",
    },
    {
      question: "Egenvektorer som hører til FORSKJELLIGE egenverdier er ...",
      options: ["alltid lineært uavhengige av hverandre", "alltid innbyrdes ortogonale for enhver matrise", "alltid avhengige og utspenner det samme rommet", "alltid parallelle og peker i samme retning i rommet"],
      explanation: "Ulike egenverdier ⇒ uavhengige egenvektorer. n distinkte egenverdier gir derfor en egenbasis (grunnlaget for kap. 3.2).",
    },
    {
      question: "Er A v = λ v, så gjelder for potensen A^k at ...",
      options: ["A^k v = λ^k v, med samme egenvektor v", "A^k v = k λ v, altså faktoren k gange λ gange v", "A^k v = λ v uendret, uansett hvor stor eksponenten k er", "A^k v = λ^k v men bare når egenverdien λ er positiv her"],
      explanation: "Gjenta A v = λ v: A²v=λ²v osv., så A^k v = λ^k v (samme v). Utnyttes i kap. 3.3.",
    },
    {
      question: "For å finne egenrommet E_λ radreduserer du ...",
      options: ["A − λI, ikke matrisen A selv", "matrisen A alene, uten å trekke fra noe ledd", "totalmatrisen [A | λ] med λ som en ny høyre kolonne", "den transponerte matrisen A^T minus leddet λI samlet"],
      explanation: "E_λ = Nul(A−λI), så det er A−λI (ikke A) du setter opp og radreduserer.",
    },
    {
      question: "At summen av de geometriske multiplisitetene er lik n betyr at ...",
      options: ["det finnes en basis av egenvektorer, så A er diagonaliserbar", "matrisen A nødvendigvis har n forskjellige (distinkte) egenverdier", "alle egenverdiene til A nødvendigvis er forskjellige fra null", "matrisen A er triangulær med egenverdiene stående på diagonalen"],
      explanation: "Sum av geo = n ⇔ egenbasis finnes ⇔ diagonaliserbar (kap. 3.2). Distinkte egenverdier er tilstrekkelig, men ikke nødvendig.",
    },
    {
      question: "En enkel egenverdi (algebraisk multiplisitet 1) har alltid ...",
      options: ["geometrisk multiplisitet lik 1", "geometrisk multiplisitet lik selve tallet 0", "et egenrom med dimensjon lik matrisestørrelsen n", "to lineært uavhengige egenvektorer knyttet til seg"],
      explanation: "1 ≤ geo ≤ alg = 1 tvinger geo = 1. En enkel egenverdi kan derfor aldri være defekt.",
    },
    {
      question: "Matrisene A og A^T har ...",
      options: ["samme egenverdier, men vanligvis ikke samme egenvektorer", "både samme egenverdier og nøyaktig de samme egenvektorene", "verken samme egenverdier eller de samme egenvektorene her", "samme egenvektorer, men vanligvis helt ulike egenverdier"],
      explanation: "det(A−λI)=det(Aᵀ−λI), så samme karakteristiske polynom og egenverdier — men egenvektorene skiller seg som regel.",
    },
    {
      question: "Kontrollen 'spor = sum av egenverdier' brukes til å ...",
      options: ["sjekke raskt at egenverdiene lest av vedlegget er riktige", "erstatte det karakteristiske polynomet fullstendig i regningen", "avgjøre alene om matrisen A er diagonaliserbar eller ikke", "finne egenvektorene uten å måtte radredusere A − λI i det hele"],
      explanation: "Σλ = spor og Πλ = det er gratis konsistenssjekker på vedleggsavlesningen — de bestemmer ikke diagonaliserbarhet.",
    },
  ],
  'mat1120-3-2': [
    {
      question: "Å diagonalisere A betyr å skrive A på formen ...",
      options: ["A = PDP⁻¹ med D diagonal og P invertibel", "A = PDPᵀ der P er en vilkårlig invertibel matrise", "A = P⁻¹DP der D er en øvre triangulær matrise her", "A = PD der P inneholder egenverdiene som sine søyler"],
      explanation: "A=PDP⁻¹: søylene i P er uavhengige egenvektorer, D har egenverdiene. PDPᵀ krever P ortogonal (symmetrisk A, Del 6).",
    },
    {
      question: "Søylene i P og diagonalen i D skal ...",
      options: ["matches søyle for søyle: egenvektor j hører til egenverdi j", "stå i vilkårlig rekkefølge helt uavhengig av hverandre", "ordnes slik at egenverdiene alltid kommer i stigende rekke", "settes opp med egenverdiene i P og egenvektorene inni D"],
      explanation: "Egenvektoren i søyle j av P må matche egenverdien i posisjon (j,j) av D. Rekkefølgen er ellers fri, men må være lik i begge.",
    },
    {
      question: "A (n×n) er diagonaliserbar hvis og bare hvis ...",
      options: ["summen av de geometriske multiplisitetene er lik n", "matrisen A nødvendigvis har n forskjellige egenverdier", "det karakteristiske polynomet har bare reelle røtter her", "sporet av A er lik summen av alle diagonalelementene i D"],
      explanation: "Kriteriet: sum av geo = n ⇔ geo = alg for hver egenverdi ⇔ egenbasis finnes. Distinkte egenverdier er tilstrekkelig, ikke nødvendig.",
    },
    {
      question: "Har en 3×3-matrise tre distinkte egenverdier, er den ...",
      options: ["diagonaliserbar, fordi egenvektorene danner en egenbasis", "ikke diagonaliserbar med mindre den også er symmetrisk her", "diagonaliserbar bare dersom ingen egenverdi er lik tallet null", "alltid triangulær med egenverdiene stående på diagonalen sin"],
      explanation: "n distinkte egenverdier ⇒ uavhengige egenvektorer ⇒ egenbasis ⇒ diagonaliserbar. Distinkt er en tilstrekkelig snarvei.",
    },
    {
      question: "En symmetrisk matrise (A = Aᵀ) er ...",
      options: ["alltid ortogonalt diagonaliserbar ved spektralteoremet", "diagonaliserbar bare hvis egenverdiene også er distinkte", "aldri diagonaliserbar fordi egenrommene overlapper hverandre", "diagonaliserbar bare når den i tillegg er triangulær i formen"],
      explanation: "Spektralteoremet (Del 6): symmetrisk ⇒ reelle egenverdier og ortogonal diagonalisering A=PDPᵀ. Aldri defekt.",
    },
    {
      question: "En matrise er IKKE diagonaliserbar når ...",
      options: ["en egenverdi har geometrisk mindre enn algebraisk multiplisitet", "en egenverdi tilfeldigvis er lik tallet null for matrisen A", "det karakteristiske polynomet har en negativ rot blant røttene", "sporet av matrisen er forskjellig fra determinanten til matrisen"],
      explanation: "Ikke-diagonaliserbar ⇔ minst én defekt egenverdi (geo < alg). λ=0 eller negative egenverdier er helt uproblematisk.",
    },
    {
      question: "For å VISE at en matrise ikke er diagonaliserbar må du ...",
      options: ["peke ut en egenverdi der dim E_λ er mindre enn algebraisk multiplisitet", "regne ut determinanten og vise at den er lik selve tallet null", "påpeke at matrisen har minst én gjentatt egenverdi i polynomet", "vise at matrisen ikke er triangulær og heller ikke symmetrisk her"],
      explanation: "Bevis = et konkret for lite egenrom (geo < alg). En gjentatt egenverdi ALENE beviser ingenting — den kan ha fullt egenrom.",
    },
    {
      question: "For en triangulær matrise med gjentatte egenverdier må du ...",
      options: ["fortsatt sjekke om geometrisk multiplisitet er lik algebraisk", "konkludere direkte at matrisen alltid er diagonaliserbar her", "konkludere direkte at matrisen aldri kan være diagonaliserbar", "regne det fulle karakteristiske polynomet på nytt for hånd her"],
      explanation: "Triangulær gir egenverdiene gratis, men ved gjentak må geo=alg sjekkes. F.eks. [[4,1],[0,4]] er defekt, [[4,0],[0,4]] ikke.",
    },
    {
      question: "Hvilke egenverdier trenger du å sjekke multiplisitet for?",
      options: ["bare de med algebraisk multiplisitet minst 2 (gjentatte)", "alle egenverdiene, inkludert de enkle enkeltrøttene også", "bare den største egenverdien i tallverdi blant dem alle", "bare de egenverdiene som tilfeldigvis er lik tallet null her"],
      explanation: "Enkle egenverdier har alltid geo=alg=1. Bare gjentatte (alg ≥ 2) må undersøkes — det sparer tid.",
    },
    {
      question: "Hvis A = PDP⁻¹, så er potensen A^k lik ...",
      options: ["PD^k P⁻¹, der D^k er diagonalelementene opphøyd i k", "P^k D P⁻ᵏ, med hver av de tre faktorene opphøyd i k", "PDP⁻¹ uendret, fordi diagonaliseringen ikke avhenger av k", "kPDP⁻¹, altså faktoren k gange den opprinnelige matrisen"],
      explanation: "A^k = PD^k P⁻¹ fordi de indre PP⁻¹ kanselleres. D^k er trivielt (diagonalelementer^k). Dette er kjernen i kap. 3.3.",
    },
    {
      question: "At P er invertibel i A = PDP⁻¹ skyldes at ...",
      options: ["søylene (egenvektorene) er lineært uavhengige", "egenverdiene i D alle er forskjellige fra tallet null", "matrisen A i utgangspunktet selv er en invertibel matrise", "diagonalmatrisen D alltid er en invertibel matrise her"],
      explanation: "P er invertibel fordi en egenbasis består av uavhengige egenvektorer. A trenger ikke være invertibel for å diagonaliseres.",
    },
    {
      question: "Skalarmatrisen cI (c gange identiteten) er ...",
      options: ["diagonaliserbar med geometrisk multiplisitet n for egenverdien c", "ikke diagonaliserbar fordi egenverdien c er gjentatt n ganger", "diagonaliserbar bare når konstanten c er forskjellig fra null", "defekt, siden hele rommet kollapser til ett enkelt egenrom her"],
      explanation: "cI har egenverdi c med geo = alg = n (hele rommet er egenrom). Grensetilfellet som viser at 'distinkt' ikke er nødvendig.",
    },
    {
      question: "Kravet for å bruke A = PDPᵀ (i stedet for PDP⁻¹) er at ...",
      options: ["P er ortogonal, noe som krever at A er symmetrisk", "D er triangulær og P er en vilkårlig invertibel matrise", "alle egenverdiene til matrisen A er forskjellige fra null", "matrisen A i tillegg til å være symmetrisk også er triangulær"],
      explanation: "PDPᵀ krever P ortogonal (P⁻¹=Pᵀ), som spektralteoremet gir for symmetriske A (Del 6). Ellers brukes PDP⁻¹.",
    },
    {
      question: "En defekt egenverdi et sted i en matrise betyr at ...",
      options: ["hele matrisen ikke er diagonaliserbar", "bare den ene egenverdien mangler en egenvektor, men A er fin", "matrisen fortsatt er diagonaliserbar via de andre egenverdiene", "matrisen må være triangulær med denne egenverdien på diagonalen"],
      explanation: "Én defekt egenverdi (geo<alg) er nok: egenbasisen mangler minst én dimensjon, så HELE A er ikke diagonaliserbar.",
    },
    {
      question: "I en parameteroppgave A(α) finner du diagonaliserbarhet ved å ...",
      options: ["studere hvordan dim E_λ avhenger av α for den gjentatte egenverdien", "regne determinanten til A(α) og sette den lik tallet null der", "sjekke for hvilke α matrisen A(α) tilfeldigvis blir symmetrisk", "finne de α som gjør alle egenverdiene forskjellige fra hverandre"],
      explanation: "Egenverdiene er ofte faste; det er dim E_λ (via rangen til A(α)−λI) som varierer. Diagonaliserbar der geo=alg for alle λ.",
    },
    {
      question: "Antall søyler i P som hører til en egenverdi λ er ...",
      options: ["dim E_λ, altså den geometriske multiplisiteten", "alltid nøyaktig 1 uansett multiplisiteten til λ", "den algebraiske multiplisiteten, uansett egenrommets størrelse", "lik antallet egenverdier som matrisen A har totalt sett"],
      explanation: "Søylene for λ utgjør en basis for E_λ, så de er dim E_λ = geo mult i tallet. For diagonaliserbar A summerer de til n.",
    },
    {
      question: "Rekkefølgen på egenparene i en diagonalisering ...",
      options: ["er fri, så lenge P og D permuteres på samme måte", "må alltid være stigende etter egenverdienes tallverdi", "må alltid følge rekkefølgen egenverdiene ble funnet i", "bestemmer om matrisen A er diagonaliserbar eller ikke i det hele"],
      explanation: "Du velger rekkefølge fritt; P og D permuteres i takt. Diagonaliseringen er derfor ikke entydig, men alle valg gir samme A.",
    },
    {
      question: "Er A = PDP⁻¹ invertibel, er inversen A⁻¹ lik ...",
      options: ["PD⁻¹P⁻¹, med de inverterte egenverdiene på diagonalen", "P⁻¹DP, altså med P og P⁻¹ byttet om i uttrykket", "PDP⁻¹ igjen, fordi inversen har nøyaktig samme egenverdier", "P(−D)P⁻¹, altså med fortegnsbytte på alle egenverdiene i D"],
      explanation: "A⁻¹ = PD⁻¹P⁻¹ der D⁻¹=diag(1/λᵢ) — samme egenvektorer, inverterte egenverdier (krever ingen λᵢ=0).",
    },
    {
      question: "For raskt å kontrollere en diagonalisering uten å regne P⁻¹ kan du ...",
      options: ["sjekke AP = PD søyle for søyle", "sjekke at determinanten til P er forskjellig fra tallet null", "sjekke at sporet til D er lik antallet egenverdier i matrisen", "sjekke at alle egenverdiene i D er forskjellige fra hverandre"],
      explanation: "AP=PD søyle for søyle gir nettopp Avⱼ=λⱼvⱼ. Stemmer alle søyler, er A=PDP⁻¹ — uten å beregne inversen.",
    },
    {
      question: "En matrise med to like og én ulik egenverdi (f.eks. 2,2,5) er diagonaliserbar hvis ...",
      options: ["egenrommet til den doble egenverdien har dimensjon 2", "de tre egenverdiene tilfeldigvis alle er positive tall her", "determinanten, som er produktet 2·2·5, ikke er lik null", "matrisen tilfeldigvis er øvre triangulær i sin form her"],
      explanation: "For 2,2,5 kreves dim E₂ = 2 (geo=alg for den doble). λ=5 er enkel og alltid grei. Fortegn/det avgjør ikke diagonaliserbarhet.",
    },
  ],
  'mat1120-3-3': [
    {
      question: "Hvis A = PDP⁻¹, så er A^k lik ...",
      options: ["PD^k P⁻¹, med D^k = diag(λ₁^k, …, λₙ^k)", "P^k D^k P⁻ᵏ, med alle tre faktorene opphøyd i k", "PDP⁻¹ uendret, fordi potensen ikke påvirker matrisen", "kPDP⁻¹, altså faktoren k gange den opprinnelige matrisen"],
      explanation: "A^k = PD^k P⁻¹: de indre P⁻¹P kanselleres. D^k er bare diagonalelementene opphøyd i k.",
    },
    {
      question: "For en diagonalmatrise D = diag(λ₁,…,λₙ) er D^k lik ...",
      options: ["diag(λ₁^k, …, λₙ^k), hvert diagonalelement opphøyd i k", "diag(kλ₁, …, kλₙ), hvert diagonalelement ganget med k", "hele matrisen D ganget k ganger med seg selv på vanlig vis", "diag(λ₁, …, λₙ) uendret, siden D allerede er en diagonal her"],
      explanation: "D^k = diag(λᵢ^k). Alt utenfor diagonalen forblir 0, så bare diagonalelementene opphøyes i k.",
    },
    {
      question: "Er Av = λv, så er A^k v lik ...",
      options: ["λ^k v, altså samme egenvektor med egenverdi λ^k", "kλ v, altså faktoren k gange λ gange egenvektoren v", "λ v uendret, uansett hvor stor eksponenten k blir her", "λ^k v men bare dersom egenverdien λ er et positivt tall"],
      explanation: "Gjenta Av=λv: A^k v = λ^k v. Samme egenvektor, egenverdi opphøyd i k.",
    },
    {
      question: "Et polynom i A, q(A) = A² − 3A + 2I, har konstantledd ...",
      options: ["2I, altså tallet 2 gange identitetsmatrisen", "2, altså tallet 2 lagt til som en ren skalar", "2A, altså tallet 2 gange den opprinnelige matrisen", "0, fordi konstantledd forsvinner i matrisepolynom her"],
      explanation: "Konstantleddet blir c₀I (2I), ikke tallet 2 — man kan ikke addere et tall til en matrise.",
    },
    {
      question: "Sentralregelen for polynom i A er: hvis Av = λv, så er ...",
      options: ["q(A)v = q(λ)v, samme egenvektor med egenverdi q(λ)", "q(A)v = A·q(λ), altså matrisen ganget med tallet q(λ)", "q(A)v = q(λ) alene, altså resultatet blir en ren skalar", "q(A)v = λ·q(v), altså λ ganget med q anvendt på v"],
      explanation: "q(A)v = q(λ)v: q(A) deler egenvektorer med A, og egenverdien transformeres ved λ ↦ q(λ).",
    },
    {
      question: "q(A) diagonaliseres med ...",
      options: ["samme P som A, og diagonalen q(D) = diag(q(λᵢ))", "en ny P som må regnes ut helt fra bunnen for q(A)", "Pᵀ i stedet for P, siden q(A) alltid blir symmetrisk her", "samme D som A, men med en helt ny egenvektormatrise P"],
      explanation: "q(A)=Pq(D)P⁻¹ med SAMME P — bare egenverdiene kjøres gjennom q. Dette er tidsbesparelsen i sjanger E.",
    },
    {
      question: "q(A) er invertibel hvis og bare hvis ...",
      options: ["q(λ) ≠ 0 for alle egenverdier λ til A", "q(λ) ≠ 0 for minst én av egenverdiene til A", "matrisen A i utgangspunktet selv er en invertibel matrise", "polynomet q har alle sine røtter forskjellige fra hverandre"],
      explanation: "q(A) invertibel ⇔ ingen q(λ)=0 (siden det q(A)=∏q(λᵢ)). ÉN egenverdi med q(λ)=0 gjør q(A) singulær.",
    },
    {
      question: "Hvis q(λ₀) = 0 for en egenverdi λ₀, så ...",
      options: ["ligger egenrommet E_λ₀ i Nul q(A), så q(A) er singulær", "er q(A) fortsatt invertibel via de andre egenverdiene", "må matrisen A selv nødvendigvis være singulær i tillegg", "blir q(A) automatisk lik nullmatrisen O helt uansett"],
      explanation: "For v ∈ E_λ₀: q(A)v = q(λ₀)v = 0, så E_λ₀ ⊆ Nul q(A). Én slik egenverdi gjør q(A) singulær.",
    },
    {
      question: "Cayley–Hamilton-teoremet sier at ...",
      options: ["enhver matrise A annullerer sitt karakteristiske polynom: p(A) = O", "enhver matrise A er lik sitt eget karakteristiske polynom p her", "det karakteristiske polynomet alltid har bare reelle røtter i seg", "enhver matrise A er diagonaliserbar med reelle egenverdier her"],
      explanation: "Cayley–Hamilton: p(A)=O der p er det karakteristiske polynomet. Lar høye potenser reduseres til lavere.",
    },
    {
      question: "Å regne A^k ved gjentatt matrisemultiplikasjon i stedet for PD^k P⁻¹ er ...",
      options: ["unødvendig arbeid og en typisk feil når A er diagonaliserbar", "den eneste korrekte metoden når eksponenten k er stor her", "raskere enn diagonalisering for alle matriser uansett størrelse", "nødvendig fordi PD^k P⁻¹ bare gjelder for symmetriske matriser"],
      explanation: "Med A=PDP⁻¹ er A^k=PD^k P⁻¹ langt raskere. Gjentatt multiplikasjon er tidstyv og feilkilde.",
    },
    {
      question: "Egenvektorene til A, A^k og q(A) er ...",
      options: ["de samme; bare egenverdiene transformeres", "helt forskjellige og må regnes ut hver for seg", "de samme for A og A^k, men ulike for q(A) her", "ortogonale for A^k, men ikke nødvendigvis for A selv"],
      explanation: "A, A^k og q(A) deler egenvektorer. Egenverdiene blir henholdsvis λ, λ^k og q(λ).",
    },
    {
      question: "Egenverdiene til q(A) er ...",
      options: ["bildet {q(λ) : λ egenverdi til A}", "de samme egenverdiene λ som A selv har her", "røttene til polynomet q, altså der q er lik null", "produktet av alle egenverdiene til A ganget sammen"],
      explanation: "Spekteret til q(A) er {q(λ)}: kjør A sine egenverdier gjennom q. Røttene til q er noe annet.",
    },
    {
      question: "Er A invertibel med Av = λv, så er A⁻¹v lik ...",
      options: ["(1/λ)v, samme egenvektor med egenverdi 1/λ", "−λv, altså egenverdien med motsatt fortegn", "λv uendret, siden inversen har samme egenverdier", "(1/λ)v men bare hvis egenverdien λ er positiv her"],
      explanation: "A⁻¹v = (1/λ)v (krever λ≠0). Spesialtilfellet q(x)=x⁻¹ av samme spektralidé; egenvektoren bevares.",
    },
    {
      question: "Diagonalisering av q(A) sparer tid fordi ...",
      options: ["du gjenbruker P og D fra A og bytter D mot q(D)", "q(A) alltid har færre egenverdier og dermed mindre regning", "q(A) alltid er en diagonalmatrise så snart A er diagonalisert", "P⁻¹ ikke lenger trengs når man først har regnet ut q(A)"],
      explanation: "Har du P,D for A, koster q(A) nesten ingenting: bytt D mot q(D)=diag(q(λᵢ)), behold P.",
    },
    {
      question: "For A^k med egenverdier der alle |λ| < 1 gjelder at ...",
      options: ["A^k går mot nullmatrisen O når k vokser", "A^k vokser ubegrenset i alle retninger når k vokser", "A^k blir konstant og uavhengig av k etter en stund", "A^k går mot identitetsmatrisen I når k vokser stort"],
      explanation: "D^k = diag(λᵢ^k) → O når alle |λᵢ| < 1, så A^k → O. Langtidsoppførsel styres av største |λ|.",
    },
    {
      question: "Hvis to ulike egenverdier λ₁ ≠ λ₂ oppfyller q(λ₁) = q(λ₂), så ...",
      options: ["får q(A) en egenverdi med større geometrisk multiplisitet", "blir q(A) automatisk ikke-diagonaliserbar på grunn av dette", "må polynomet q nødvendigvis ha grad minst lik tre her", "kan ikke q(A) diagonaliseres med samme P som A lenger"],
      explanation: "q slår sammen de to egenrommene til én egenverdi med større geo mult. Diagonaliserbarheten bevares (samme P).",
    },
    {
      question: "For å kontrollere et A^k- eller q(A)-resultat kjapt kan du ...",
      options: ["sette inn en egenvektor: A^k v skal bli λ^k v, q(A)v skal bli q(λ)v", "regne determinanten til hele matrisen og se om den blir null", "sjekke at sporet av resultatet er lik sporet av A selv her", "gange resultatet med P og se om du får identitetsmatrisen I"],
      explanation: "Innsetting av en egenvektor er en rask sjekk: A^k v = λ^k v og q(A)v = q(λ)v uten å gange ut hele produktet.",
    },
    {
      question: "Oppskriften for en sjanger E-oppgave (A^k / q(A)) er å ...",
      options: ["diagonalisere A først, så bytte D mot D^k eller q(D) med samme P", "regne A^k direkte og deretter faktorisere resultatet i P og D", "finne egenverdiene til q(A) uavhengig av egenverdiene til A", "regne det karakteristiske polynomet til q(A) fra bunnen av"],
      explanation: "(1) A=PDP⁻¹, (2) A^k: D→D^k, (3) q(A): D→q(D), samme P hele veien, (4) invertibel ⇔ ingen q(λ)=0.",
    },
  ],
  'mat1120-3-4': [
    {
      question: "Første steg når en egenvektor er oppgitt, er å ...",
      options: ["verifisere ved innsetting: sjekk om A v blir en skalar gange v", "regne det karakteristiske polynomet det(A − λI) fra bunnen av", "radredusere matrisen A − λI for å finne alle de frie variablene", "regne determinanten til A og sammenligne den med sporet dens"],
      explanation: "Er v oppgitt, verifiser med Av=λv (ett produkt) — ikke via polynomet. Raskere og full uttelling.",
    },
    {
      question: "Egenverdiene til en 3×3-matrise skal på eksamen ...",
      options: ["leses av vedlegget (poly/eig) og faktoriseres", "regnes ut for hånd via det(A − λI) hver gang", "gjettes fra diagonalelementene selv om A ikke er triangulær", "avledes fra sporet alene uten å bruke vedlegget i det hele"],
      explanation: "MAT1120-metoden: les poly/eig av vedlegget. Manuell det(A−λI) for n≥3 er tidssluk og byggefeil.",
    },
    {
      question: "Diagonaliserbarhet skal i en besvarelse ...",
      options: ["alltid begrunnes med en navngitt snarvei eller med multiplisitet", "bare påstås, siden sensor selv sjekker om konklusjonen stemmer", "avgjøres ut fra om determinanten til matrisen er ulik null her", "vises ved at alle egenverdiene tilfeldigvis er positive tall her"],
      explanation: "Aldri ubegrunnet. Navngi snarvei (distinkt/symmetrisk/triangulær) eller vis geo=alg. Dette er der flest taper poeng.",
    },
    {
      question: "For å vise at en matrise IKKE er diagonaliserbar ...",
      options: ["peker du ut en egenverdi med geo mindre enn alg (defekt)", "påpeker du at matrisen har minst én gjentatt egenverdi her", "regner du determinanten og viser at den er lik tallet null", "viser du at matrisen verken er symmetrisk eller triangulær"],
      explanation: "Bevis = ett konkret for lite egenrom (dim E_λ < alg). En gjentatt egenverdi alene beviser ingenting.",
    },
    {
      question: "Ved bygging av P og D skal du ...",
      options: ["matche egenvektor i søyle j med egenverdi i posisjon (j,j)", "sortere egenverdiene stigende og fylle P i samme rekkefølge", "sette egenverdiene som søyler i P og egenvektorene inn i D", "alltid normalisere egenvektorene slik at P blir ortogonal her"],
      explanation: "Egenvektor i søyle j ↔ egenverdi i D_jj. Rekkefølge fri, men lik i P og D. Normalisering kreves bare for symmetrisk (Del 6).",
    },
    {
      question: "Kontrollrelasjonene for egenverdier er ...",
      options: ["spor A = sum av egenverdiene og det A = produkt av dem", "spor A = produkt av egenverdiene og det A = sum av dem", "spor A = antall egenverdier og det A = største egenverdi", "spor A = det A for enhver diagonaliserbar matrise A her"],
      explanation: "Σλ = spor A, ∏λ = det A (begge med multiplisitet). Raske avlesningssjekker på vedlegget.",
    },
    {
      question: "A^k regnes på eksamen som ...",
      options: ["PD^k P⁻¹, med samme P og D som diagonaliseringen av A", "produktet A·A·…·A regnet ut k ganger for hånd hver gang", "P^k D P⁻ᵏ, med alle de tre faktorene opphøyd i k her", "en ny diagonalisering av A^k regnet helt fra bunnen av"],
      explanation: "A^k = PD^k P⁻¹: gjenbruk P og D fra A, bytt bare D mot D^k. Gjentatt multiplikasjon er tidstyv.",
    },
    {
      question: "q(A) diagonaliseres med ...",
      options: ["samme P som A, og egenverdiene q(λ) på diagonalen", "en ny egenvektormatrise som må regnes ut for q(A) selv", "Pᵀ siden q(A) alltid er en symmetrisk matrise uansett q", "samme egenverdier som A, men en helt ny egenvektormatrise"],
      explanation: "q(A)=Pq(D)P⁻¹ med SAMME P — bare egenverdiene kjøres gjennom q. Det er poenget i sjanger E.",
    },
    {
      question: "q(A) er invertibel hvis og bare hvis ...",
      options: ["q(λ) er forskjellig fra null for alle egenverdiene til A", "q(λ) er forskjellig fra null for minst én egenverdi til A", "matrisen A selv er invertibel med determinant ulik null", "polynomet q har alle sine egne røtter forskjellige fra null"],
      explanation: "q(A) invertibel ⇔ ingen q(λ)=0. Én egenverdi med q(λ)=0 gjør q(A) singulær.",
    },
    {
      question: "En egenverdi med alg = 2 og geo = 1 gjør at matrisen ...",
      options: ["ikke er diagonaliserbar, fordi egenrommet er for lite", "fortsatt er diagonaliserbar dersom de andre egenverdiene er greie", "må være symmetrisk med et to-dimensjonalt egenrom her", "har en determinant lik null og dermed ikke er invertibel"],
      explanation: "geo=1 < 2=alg ⇒ defekt ⇒ ikke diagonaliserbar. Det har ikke noe med invertibilitet å gjøre.",
    },
    {
      question: "En symmetrisk matrise gir en rask begrunnelse fordi den ...",
      options: ["alltid er ortogonalt diagonaliserbar ved spektralteoremet", "alltid har tre distinkte egenverdier uansett størrelsen sin", "alltid er triangulær med egenverdiene stående på diagonalen", "aldri har gjentatte egenverdier og derfor alltid er grei her"],
      explanation: "Symmetrisk ⇒ ortogonalt diagonaliserbar (spektralteoremet), også ved gjentatte egenverdier. En sikker snarvei.",
    },
    {
      question: "I en parameteroppgave A(α) avgjøres diagonaliserbarhet av ...",
      options: ["hvordan dim E_λ (via rangen til A(α)−λI) avhenger av α", "for hvilke α determinanten til A(α) tilfeldigvis blir null", "for hvilke α matrisen A(α) blir symmetrisk i formen sin", "for hvilke α alle egenverdiene blir forskjellige fra null"],
      explanation: "Egenverdiene er ofte faste; det er dim E_λ som varierer. Diagonaliserbar der geo=alg for alle λ.",
    },
    {
      question: "Egenrommet E_λ finnes som ...",
      options: ["spesielle løsninger fra RREF av A − λI (nullrommet)", "pivotkolonnene i den opprinnelige matrisen A selv", "de ikke-null-radene i RREF av matrisen A − λI direkte", "kolonnerommet Col(A − λI) lest av vedleggets RREF"],
      explanation: "E_λ = Nul(A−λI): spesielle løsninger fra RREF, akkurat som en Nul A-basis i kap. 1.2.",
    },
    {
      question: "At A^k og q(A) bruker samme P som A skyldes at ...",
      options: ["de deler egenvektorer med A; bare egenverdiene endres", "de alltid er diagonalmatriser så snart A er diagonalisert", "P er ortogonal og derfor uforanderlig under potensering", "de har nøyaktig de samme egenverdiene som A selv har her"],
      explanation: "En egenvektor for A er egenvektor for A^k (λ^k) og q(A) (q(λ)). Samme egenvektorer ⇒ samme P.",
    },
    {
      question: "Det siste steget i en A-besvarelse på oppgave 2 er å ...",
      options: ["skrive en verbal konklusjonssetning med eksakte svar", "oppgi svaret som en desimaltilnærming med fire siffer", "kontrollere at determinanten til P er lik tallet null", "regne A^k for en konkret verdi av k for sikkerhets skyld"],
      explanation: "Avslutt med verbal konklusjon og EKSAKTE svar (heltall/brøk). Desimaltilnærming signaliserer regnefeil.",
    },
    {
      question: "En vanlig tidstyv på oppgave 2 er å ...",
      options: ["radredusere store matriser for hånd i stedet for å bruke vedlegget", "lese egenverdiene av vedlegget i stedet for å regne dem selv", "begrunne diagonaliserbarhet med en navngitt snarvei først", "kontrollere svaret med spor- og determinantrelasjonene til slutt"],
      explanation: "Manuell radreduksjon/determinant av store matriser er byggefeil og tidstyv. Vedlegget gjør den rå regningen.",
    },
  ],
  'mat1120-4-1': [
    {
      question: "Hvordan defineres normen $\\|\\mathbf{v}\\|$ i et indreproduktrom?",
      options: ["$\\|\\mathbf{v}\\|=\\sqrt{\\langle\\mathbf{v},\\mathbf{v}\\rangle}$ i det oppgitte indreproduktet", "$\\|\\mathbf{v}\\|=\\sqrt{v_1^2+\\cdots+v_n^2}$ uansett hvilket indreprodukt", "$\\|\\mathbf{v}\\|=\\langle\\mathbf{v},\\mathbf{v}\\rangle$ uten kvadratrot på indreproduktet", "$\\|\\mathbf{v}\\|=|\\langle\\mathbf{v},\\mathbf{u}\\rangle|$ for en fast referansevektor $\\mathbf{u}$"],
      explanation: "Normen er alltid rota av indreproduktet med seg selv, regnet i det oppgitte indreproduktet. Standardformelen $\\sqrt{\\sum v_i^2}$ gjelder bare standardprikkproduktet; å droppe rota gir kvadrert norm; referansevektor-varianten er oppspinn.",
    },
    {
      question: "Hva betyr det at to vektorer $\\mathbf{u}$ og $\\mathbf{v}$ er ortogonale i et indreproduktrom?",
      options: ["At $\\langle\\mathbf{u},\\mathbf{v}\\rangle=0$ i det oppgitte indreproduktet", "At $\\mathbf{u}\\cdot\\mathbf{v}=0$ i standardprikkproduktet, uansett indreprodukt", "At de har samme norm i det oppgitte indreproduktet", "At den ene er et skalarmultiplum av den andre vektoren"],
      explanation: "Ortogonalitet er per definisjon $\\langle\\mathbf{u},\\mathbf{v}\\rangle=0$ i det aktuelle indreproduktet. Å bruke standardprikkproduktet er feil når indreproduktet er ikke-standard; lik norm er urelatert; skalarmultiplum er parallellitet, det motsatte.",
    },
    {
      question: "Et vektet indreprodukt på $\\mathbb{R}^n$ har formen $\\langle\\mathbf{x},\\mathbf{y}\\rangle=\\sum w_ix_iy_i$. Hvilket krav må vektene oppfylle?",
      options: ["Alle $w_i>0$, ellers svikter positiv definitthet", "Alle $w_i$ må summere til $1$ (normeringskrav)", "Alle $w_i$ må være hele tall større enn null", "Vektene må være avtakende: $w_1\\ge w_2\\ge\\cdots$"],
      explanation: "Positiv definitthet krever $w_i>0$ for alle $i$; da er $\\langle\\mathbf{x},\\mathbf{x}\\rangle=\\sum w_ix_i^2>0$ for $\\mathbf{x}\\ne\\mathbf{0}$. Det finnes ingen sum- eller heltallskrav, og vektene trenger ingen bestemt rekkefølge.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$: hva er $\\langle 1,t\\rangle$?",
      options: ["$0$, siden $t$ er en oddefunksjon over et symmetrisk intervall", "$2$, siden $\\int_{-1}^1 1\\,dt=2$ og faktoren $t$ ikke endrer verdien av dette integralet", "$\\tfrac23$, siden $\\int_{-1}^1 t^2\\,dt=\\tfrac23$", "$1$, siden $t$ evalueres i endepunktet $t=1$"],
      explanation: "$\\int_{-1}^1 t\\,dt=0$ fordi $t$ er odde over $[-1,1]$. $2$ er $\\langle 1,1\\rangle$; $\\tfrac23$ er $\\langle 1,t^2\\rangle$; endepunkt-evaluering hører til evalueringsindreproduktet, ikke integralet.",
    },
    {
      question: "På $\\mathbb{R}^3$ med $\\langle\\mathbf{x},\\mathbf{y}\\rangle=2x_1y_1+2x_2y_2+x_3y_3$: er $\\mathbf{a}=(1,0,-1)$ og $\\mathbf{b}=(1,1,2)$ ortogonale?",
      options: ["Ja, for $\\langle\\mathbf{a},\\mathbf{b}\\rangle=2-2=0$ i det vektede indreproduktet", "Nei, for $\\mathbf{a}\\cdot\\mathbf{b}=1-2=-1$ i det vanlige standardprikkproduktet uten vekter", "Ja, for de har samme vektede norm $\\sqrt{4}=2$ hver", "Nei, for begge har en negativ koordinat i seg"],
      explanation: "Med vekter $2,2,1$: $\\langle\\mathbf{a},\\mathbf{b}\\rangle=2(1)(1)+2(0)(1)+(-1)(2)=0$, så de er ortogonale. Standardprikkproduktet er irrelevant her; lik norm og fortegn på koordinater avgjør ikke ortogonalitet.",
    },
    {
      question: "Hvorfor må et evalueringsindreprodukt på $\\operatorname{P}_2$ bruke minst tre punkter?",
      options: ["Ellers kan et polynom $\\ne 0$ få $\\langle p,p\\rangle=0$, så positiv definitthet svikter", "Fordi $\\operatorname{P}_2$ inneholder nøyaktig tre standardbasisvektorer $1$, $t$ og $t^2$ som må dekkes", "Fordi symmetriaksiomet krever like mange punkter som argumenter", "Fordi integralet ellers ikke konvergerer over punktene"],
      explanation: "Et polynom av grad $\\le 2$ som er null i tre punkter må være nullpolynomet; med færre punkter finnes et $p\\ne 0$ med $\\langle p,p\\rangle=0$, som bryter aksiom 4. Basisstørrelsen er en konsekvens, ikke grunnen; symmetri og konvergens er urelatert.",
    },
    {
      question: "Hva sier Cauchy–Schwarz-ulikheten?",
      options: ["$|\\langle\\mathbf{u},\\mathbf{v}\\rangle|\\le\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|$ i ethvert indreprodukt", "$\\|\\mathbf{u}+\\mathbf{v}\\|\\le\\|\\mathbf{u}\\|+\\|\\mathbf{v}\\|$ for alle vektorer", "$\\langle\\mathbf{u},\\mathbf{v}\\rangle=\\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta$, altså vinkelrelasjonen tatt som en definisjon", "$\\langle\\mathbf{u},\\mathbf{u}\\rangle\\ge 0$ med likhet bare når $\\mathbf{u}=\\mathbf{0}$"],
      explanation: "Cauchy–Schwarz er $|\\langle\\mathbf{u},\\mathbf{v}\\rangle|\\le\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$. Det andre er trekantulikheten; det tredje er vinkeldefinisjonen (en følge); det fjerde er positiv definitthet.",
    },
    {
      question: "Samme polynom $p=t$ har $\\|t\\|=\\tfrac{\\sqrt6}{3}$ i integralindreproduktet på $[-1,1]$, men $\\|t\\|=\\sqrt2$ i et evalueringsindreprodukt. Hva viser dette?",
      options: ["At normen avhenger av indreproduktet, ikke bare av vektoren", "At en av de to utregningene nødvendigvis inneholder en regnefeil", "At integralindreproduktet ikke er et gyldig indreprodukt", "At $t$ ikke har en veldefinert norm i $\\operatorname{P}_2$"],
      explanation: "Normen er $\\sqrt{\\langle t,t\\rangle}$, og indreproduktet er ulikt i de to tilfellene, så normen blir ulik — helt korrekt. Begge er gyldige indreprodukt og begge utregninger er riktige.",
    },
    {
      question: "Hvordan defineres avstanden mellom to vektorer $\\mathbf{u}$ og $\\mathbf{v}$?",
      options: ["$\\operatorname{dist}(\\mathbf{u},\\mathbf{v})=\\|\\mathbf{u}-\\mathbf{v}\\|$ i det oppgitte indreproduktet", "$\\operatorname{dist}(\\mathbf{u},\\mathbf{v})=\\langle\\mathbf{u},\\mathbf{v}\\rangle$ regnet direkte", "$\\operatorname{dist}(\\mathbf{u},\\mathbf{v})=\\|\\mathbf{u}\\|-\\|\\mathbf{v}\\|$ som differanse av lengder", "$\\operatorname{dist}(\\mathbf{u},\\mathbf{v})=\\|\\mathbf{u}\\|+\\|\\mathbf{v}\\|$ som sum av lengder"],
      explanation: "Avstanden er normen av differansen, $\\|\\mathbf{u}-\\mathbf{v}\\|$, i det oppgitte indreproduktet. De andre forveksler avstand med indreprodukt eller med kombinasjoner av de to normene.",
    },
    {
      question: "Hvilket av følgende bryter aksiomene for et indreprodukt?",
      options: ["$\\langle\\mathbf{x},\\mathbf{y}\\rangle=x_1y_1-x_2y_2$ på $\\mathbb{R}^2$", "$\\langle\\mathbf{x},\\mathbf{y}\\rangle=3x_1y_1+x_2y_2$ på $\\mathbb{R}^2$", "$\\langle p,q\\rangle=\\int_0^1 pq\\,dt$ på $\\operatorname{P}_2$", "$\\langle p,q\\rangle=p(0)q(0)+p(1)q(1)+p(2)q(2)$ på $\\operatorname{P}_2$"],
      explanation: "$x_1y_1-x_2y_2$ har en negativ «vekt» ($-1$), så $\\langle(0,1),(0,1)\\rangle=-1<0$ — positiv definitthet svikter. De tre andre er gyldige (positive vekter, integral, nok evalueringspunkter).",
    },
    {
      question: "Hva er den vanligste og mest kostbare feilen på MAT1120 knyttet til indreprodukt?",
      options: ["Å bruke standardprikkproduktet der oppgaven har oppgitt et annet indreprodukt", "Å skrive kvadratroten i sluttsvaret som en avrundet desimaltilnærming istedenfor eksakt", "Å glemme å oppgi dimensjonen til polynomrommet man jobber i", "Å bruke for mange punkter i et evalueringsindreprodukt"],
      explanation: "Å falle tilbake på $\\mathbf{u}\\cdot\\mathbf{v}$ når indreproduktet er vektet/integral/evaluering gir systematisk feil på alt som følger. Desimaltilnærming er en mindre føringsfeil; de to andre er ikke reelle feil her.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$: hvilket tall $a$ gjør $1$ og $t^2+a$ ortogonale?",
      options: ["$a=-\\tfrac13$, siden $\\int_{-1}^1(t^2+a)\\,dt=\\tfrac23+2a=0$", "$a=-\\tfrac23$, siden $\\int_{-1}^1 t^2\\,dt=\\tfrac23$ skal kanselleres direkte", "$a=0$, siden $t^2$ allerede er ortogonal på konstanten $1$", "$a=-1$, siden $t^2-1$ har røttene $\\pm 1$ i intervallet"],
      explanation: "$\\langle 1,t^2+a\\rangle=\\int_{-1}^1(t^2+a)\\,dt=\\tfrac23+2a$; sett $=0$ gir $a=-\\tfrac13$. Å sette $a=-\\tfrac23$ glemmer at konstanten integreres til $2a$, ikke $a$; $t^2$ er ikke ortogonal på $1$; røttene er irrelevante.",
    },
    {
      question: "Hvis $\\mathbf{u}\\perp\\mathbf{v}$ i et indreproduktrom, hva blir $\\|\\mathbf{u}+\\mathbf{v}\\|^2$?",
      options: ["$\\|\\mathbf{u}\\|^2+\\|\\mathbf{v}\\|^2$ (Pythagoras)", "$\\|\\mathbf{u}\\|^2+\\|\\mathbf{v}\\|^2+2\\langle\\mathbf{u},\\mathbf{v}\\rangle$ med kryssledd", "$(\\|\\mathbf{u}\\|+\\|\\mathbf{v}\\|)^2$ som et fullstendig kvadrat", "$\\|\\mathbf{u}\\|^2-\\|\\mathbf{v}\\|^2$ som en differanse"],
      explanation: "$\\|\\mathbf{u}+\\mathbf{v}\\|^2=\\|\\mathbf{u}\\|^2+2\\langle\\mathbf{u},\\mathbf{v}\\rangle+\\|\\mathbf{v}\\|^2$, og kryssleddet forsvinner når $\\langle\\mathbf{u},\\mathbf{v}\\rangle=0$ — det er Pythagoras. Det andre gjelder generelt (ikke-ortogonalt); de to siste er gale.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=p(-1)q(-1)+p(0)q(0)+p(1)q(1)$: hva er $\\|t\\|$?",
      options: ["$\\sqrt2$, siden $(-1)^2+0^2+1^2=2$", "$\\tfrac{\\sqrt6}{3}$, siden $\\int_{-1}^1 t^2\\,dt=\\tfrac23$", "$\\sqrt3$, siden det er tre evalueringspunkter", "$1$, siden $t$ evaluerer til $1$ i punktet $t=1$"],
      explanation: "$\\langle t,t\\rangle=(-1)^2+0^2+1^2=2$, så $\\|t\\|=\\sqrt2$. $\\tfrac{\\sqrt6}{3}$ hører til integralindreproduktet; antall punkter er ikke normen; ett enkelt punkt gir ikke normen.",
    },
    {
      question: "Hvorfor er et indreprodukt lineært også i sitt andre argument, når aksiomene bare nevner det første?",
      options: ["Fordi symmetrien lar deg bytte argumentene og bruke linearitet i første", "Fordi positiv definitthet medfører linearitet i begge argumenter", "Fordi normen er lineær, og indreproduktet er rota av den", "Det er faktisk ikke lineært i andre argument i det hele tatt — kun i det første argumentet"],
      explanation: "Symmetri ($\\langle\\mathbf{u},\\mathbf{v}\\rangle=\\langle\\mathbf{v},\\mathbf{u}\\rangle$) overfører linearitet fra første til andre argument, så indreproduktet er bilineært. Positiv definitthet og normen gir ikke dette, og påstanden om at det ikke er lineært i andre argument er feil.",
    },
    {
      question: "Et indreproduktrom er...",
      options: ["et vektorrom utstyrt med et bestemt indreprodukt", "ethvert vektorrom, siden alle har standardprikkproduktet", "et rom der alle vektorer har norm $1$", "et underrom av $\\mathbb{R}^n$ med ortogonal basis"],
      explanation: "Et indreproduktrom er et vektorrom sammen med et valgt indreprodukt. Ikke alle rom har et «naturlig» prikkprodukt ($\\operatorname{P}_n$ har det ikke); norm $1$ og ortogonal basis er egenskaper, ikke definisjonen.",
    },
    {
      question: "På $\\mathbb{R}^3$ med $\\langle\\mathbf{x},\\mathbf{y}\\rangle=2x_1y_1+2x_2y_2+x_3y_3$: hva er $\\|(1,1,2)\\|$?",
      options: ["$2\\sqrt2$, siden $2+2+4=8$", "$\\sqrt6$, siden $1+1+4=6$ i standardnormen", "$\\sqrt{10}$, siden $2+2+3\\cdot2=10$ med vekt $3$ på siste ledd", "$4$, siden vektene summerer til $5$ ganger noe"],
      explanation: "$\\langle(1,1,2),(1,1,2)\\rangle=2(1)+2(1)+1(4)=8$, så normen er $\\sqrt8=2\\sqrt2$. $\\sqrt6$ er standardnormen (feil her); de to andre er regnefeil på vektene.",
    },
    {
      question: "Hvilken egenskap ved integralindreproduktet $\\langle p,q\\rangle=\\int_a^b pq\\,dt$ sikrer positiv definitthet?",
      options: ["At $\\int_a^b p(t)^2\\,dt>0$ når $p$ ikke er nullpolynomet", "At integralet alltid gir et positivt tall for alle $p,q$", "At intervallet $[a,b]$ er symmetrisk om null", "At $p$ og $q$ har grad høyst $n$"],
      explanation: "$\\langle p,p\\rangle=\\int_a^b p^2\\,dt>0$ for $p\\ne 0$ fordi $p^2\\ge0$ og ikke er identisk null — det gir aksiom 4. Integralet av et produkt kan godt bli negativt; symmetrisk intervall og grad er ikke det avgjørende.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=p(0)q(0)+p(1)q(1)+p(2)q(2)$: hva er $\\|1\\|$?",
      options: ["$\\sqrt3$, siden $1^2+1^2+1^2=3$", "$1$, siden konstanten $1$ alltid har norm én", "$3$, siden $1$ evalueres til $1$ i tre punkter", "$\\sqrt2$, siden intervallbredden er $2$"],
      explanation: "$\\langle 1,1\\rangle=1+1+1=3$, så $\\|1\\|=\\sqrt3$. Konstanten har ikke automatisk norm $1$; summen (ikke antallet) står under rota; intervallbredde er irrelevant i et evalueringsindreprodukt.",
    },
    {
      question: "Du skal normalisere en vektor $\\mathbf{v}$ til en enhetsvektor i et vektet indreprodukt. Hvilken norm bruker du?",
      options: ["Den vektede normen $\\|\\mathbf{v}\\|=\\sqrt{\\langle\\mathbf{v},\\mathbf{v}\\rangle}$ fra det oppgitte indreproduktet", "Standardnormen $\\sqrt{v_1^2+\\cdots+v_n^2}$, siden den er enklest å regne og gir samme retning uansett vekter", "Gjennomsnittet av den vektede og standardnormen", "Ingen norm — normalisering er unødvendig i vektede rom"],
      explanation: "Normaliseringen bruker den samme (vektede) normen som resten av oppgaven; å bytte til standardnormen her er nettopp normaliseringsfellen. Gjennomsnitt og «unødvendig» er feil.",
    },
  ],
  'mat1120-4-2': [
    {
      question: "Hva er den korrekte Gram–Schmidt-formelen for $\\mathbf{v}_k$?",
      options: ["$\\mathbf{v}_k=\\mathbf{a}_k-\\sum_{i<k}\\frac{\\langle\\mathbf{a}_k,\\mathbf{v}_i\\rangle}{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}\\mathbf{v}_i$, med de allerede ortogonaliserte $\\mathbf{v}_i$", "$\\mathbf{v}_k=\\mathbf{a}_k-\\sum_{i<k}\\frac{\\langle\\mathbf{a}_k,\\mathbf{a}_i\\rangle}{\\langle\\mathbf{a}_i,\\mathbf{a}_i\\rangle}\\mathbf{a}_i$, altså med de opprinnelige $\\mathbf{a}_i$-ene i stedet for de ortogonaliserte", "$\\mathbf{v}_k=\\mathbf{a}_k-\\sum_{i<k}\\langle\\mathbf{a}_k,\\mathbf{v}_i\\rangle\\mathbf{v}_i$, uten nevner", "$\\mathbf{v}_k=\\mathbf{a}_k+\\sum_{i<k}\\frac{\\langle\\mathbf{a}_k,\\mathbf{v}_i\\rangle}{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}\\mathbf{v}_i$, med pluss"],
      explanation: "Man trekker fra projeksjonene på de allerede ortogonaliserte $\\mathbf{v}_i$-ene, med nevner $\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle$. Å bruke $\\mathbf{a}_i$, droppe nevneren eller bytte fortegn til pluss er alle vanlige feil.",
    },
    {
      question: "Hvorfor er en ortogonal mengde av vektorer forskjellige fra null alltid lineært uavhengig?",
      options: ["Fordi $\\langle\\mathbf{v}_i,\\cdot\\rangle$ på en nullkombinasjon tvinger hver koeffisient til null", "Fordi ortogonale vektorer alltid har lengde $1$ og dermed automatisk er uavhengige i ethvert rom", "Fordi de utspenner hele rommet og dermed må være uavhengige", "Fordi determinanten av vektorene alltid er positiv"],
      explanation: "Tar man indreproduktet av $\\sum c_i\\mathbf{v}_i=\\mathbf{0}$ med $\\mathbf{v}_i$, faller alle kryssledd bort og $c_i\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle=0$ gir $c_i=0$. Ortogonale vektorer har ikke nødvendigvis lengde $1$, utspenner ikke nødvendigvis alt, og determinantargumentet gjelder ikke generelt.",
    },
    {
      question: "Du kjører Gram–Schmidt i et integralindreprodukt $\\langle p,q\\rangle=\\int_a^b pq\\,dt$. Hvordan regnes projeksjonsleddenes tellere og nevnere?",
      options: ["Som integraler i det oppgitte indreproduktet, ikke som standardprikkprodukt", "Som standardprikkprodukt av polynomenes koeffisientvektorer, siden det er klart enklest å regne", "Som integraler i tellerne, men standardprikkprodukt i nevnerne", "Nevnerne settes til $1$ siden polynomene skal bli ortonormale"],
      explanation: "Alle indreprodukt i prosessen — både tellere og nevnere — regnes med det oppgitte integralet. Å blande inn standardprikkproduktet noe sted, eller å sette nevneren til $1$, ødelegger ortogonaliteten.",
    },
    {
      question: "Hva er koordinatene (Fourier-koeffisientene) til $\\mathbf{y}$ i en ortogonal basis $\\{\\mathbf{v}_i\\}$?",
      options: ["$c_i=\\frac{\\langle\\mathbf{y},\\mathbf{v}_i\\rangle}{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}$, regnet enkeltvis", "$c_i=\\langle\\mathbf{y},\\mathbf{v}_i\\rangle$, uten å dele på noe", "$c_i=\\frac{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}{\\langle\\mathbf{y},\\mathbf{v}_i\\rangle}$, altså med teller og nevner byttet fullstendig om", "Koordinatene finnes bare ved å løse et lineært likningssystem"],
      explanation: "I en ortogonal basis er $c_i=\\langle\\mathbf{y},\\mathbf{v}_i\\rangle/\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle$. Formelen uten nevner gjelder bare ortonormale baser; den omvendte brøken er feil; hele poenget er at man slipper likningssystemet.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$ gir Gram–Schmidt på $\\{1,t,t^2\\}$ hvilken ortogonal basis (etter oppskalering)?",
      options: ["$\\{1,\\,t,\\,3t^2-1\\}$", "$\\{1,\\,t,\\,t^2\\}$, som allerede er ortogonal", "$\\{1,\\,t-1,\\,t^2-t\\}$", "$\\{1,\\,2t-1,\\,6t^2-6t+1\\}$"],
      explanation: "Man får $1$, $t$ (allerede ortogonal på $1$), og $t^2-\\tfrac13\\to 3t^2-1$. Standardbasisen er ikke ortogonal ($\\langle 1,t^2\\rangle=\\tfrac23\\ne0$); basisen $\\{1,\\,2t-1,\\,6t^2-6t+1\\}$ er svaret for intervallet $[0,1]$, ikke $[-1,1]$.",
    },
    {
      question: "Hva menes med heltalls-oppskalering i Gram–Schmidt?",
      options: ["Å gange en $\\mathbf{v}_k$ med et tall $\\ne0$ for å slippe brøker, uten å endre ortogonaliteten", "Å runde av hver koordinat i $\\mathbf{v}_k$ til nærmeste hele tall for penere regning underveis", "Å bytte ut brøkene med heltall som gir omtrent samme retning", "Å skalere slik at hver $\\mathbf{v}_k$ får norm lik et helt tall"],
      explanation: "En ortogonal mengde forblir ortogonal om du skalerer en vektor, så man ganger opp til heltall for penere regning. Avrunding endrer retningen (og ødelegger ortogonalitet); «omtrent» er aldri godt nok; norm-skalering er noe annet.",
    },
    {
      question: "I steg 3 av Gram–Schmidt: hvilke vektorer skal projeksjonene trekkes fra?",
      options: ["De allerede ortogonaliserte $\\mathbf{v}_1$ og $\\mathbf{v}_2$", "De opprinnelige $\\mathbf{a}_1$ og $\\mathbf{a}_2$", "Bare fra $\\mathbf{v}_1$, siden bidraget fra $\\mathbf{v}_2$ dekkes automatisk i steget", "Gjennomsnittet av $\\mathbf{a}_i$ og $\\mathbf{v}_i$"],
      explanation: "Projeksjonene i steg 3 tas på $\\mathbf{v}_1$ og $\\mathbf{v}_2$ (de ferdig ortogonaliserte). Å bruke $\\mathbf{a}_i$ er felle nr. 2 i kapitlet; å hoppe over $\\mathbf{v}_2$ eller ta et gjennomsnitt gir ikke en ortogonal vektor.",
    },
    {
      question: "Hvordan får du en ortonormal basis fra en ortogonal basis $\\{\\mathbf{v}_i\\}$?",
      options: ["Del hver $\\mathbf{v}_i$ på sin egen norm $\\|\\mathbf{v}_i\\|$ i det oppgitte indreproduktet", "Del hver vektor $\\mathbf{v}_i$ på antallet basisvektorer $k$ i den ferdige mengden", "Trekk fra gjennomsnittsvektoren fra hver $\\mathbf{v}_i$", "Kjør Gram–Schmidt en gang til på $\\{\\mathbf{v}_i\\}$"],
      explanation: "Normalisering er $\\mathbf{u}_i=\\mathbf{v}_i/\\|\\mathbf{v}_i\\|$ med den oppgitte normen. De andre operasjonene gir verken enhetslengde eller ortogonalitet; en allerede ortogonal basis endres ikke av ny Gram–Schmidt.",
    },
    {
      question: "På $\\mathbb{R}^3$ (standardprikkprodukt): er $\\{(1,1,1),(-2,1,1),(0,-1,1)\\}$ en ortogonal mengde?",
      options: ["Ja, alle tre par gir indreprodukt $0$", "Nei, $\\langle(1,1,1),(-2,1,1)\\rangle=4\\ne0$", "Ja, men bare fordi vektorene har samme lengde", "Nei, en ortogonal mengde kan ikke ha negative koordinater"],
      explanation: "$\\langle(1,1,1),(-2,1,1)\\rangle=-2+1+1=0$, og likeså de to andre parene, så mengden er ortogonal. Regnestykket $4$ er feil; lik lengde er ikke kravet; negative koordinater er helt tillatt.",
    },
    {
      question: "En oppgave ber om en ortogonal (ikke ortonormal) basis. Bør du normalisere til slutt?",
      options: ["Nei, normalisér bare når oppgaven ber om ortonormal eller enhetsvektorer", "Ja, en ortogonal basis er per konvensjon alltid ment å være en ortonormal basis", "Ja, ellers er ikke vektorene virkelig ortogonale", "Det spiller ingen rolle, svarene teller likt uansett"],
      explanation: "Normalisering kreves bare når «ortonormal»/«enhetsvektorer» står eksplisitt; ortogonalitet er uavhengig av lengde. En ortogonal basis er ikke automatisk ortonormal, og normalisering påvirker ikke ortogonaliteten.",
    },
    {
      question: "Hva bevarer Gram–Schmidt-prosessen underveis?",
      options: ["Spennet: $\\operatorname{Span}\\{\\mathbf{v}_1,\\dots,\\mathbf{v}_k\\}=\\operatorname{Span}\\{\\mathbf{a}_1,\\dots,\\mathbf{a}_k\\}$", "Lengdene: hver nye $\\mathbf{v}_i$ har nøyaktig samme norm som den opprinnelige $\\mathbf{a}_i$ den kom fra", "Koordinatene: $\\mathbf{v}_i$ og $\\mathbf{a}_i$ har samme koordinatvektor", "Vinklene mellom de opprinnelige $\\mathbf{a}_i$-vektorene"],
      explanation: "Prosessen bytter basis uten å endre rommet, så spennet er bevart. Lengder, koordinater og de opprinnelige vinklene endres derimot — det er nettopp poenget (vektorene gjøres vinkelrette).",
    },
    {
      question: "På $\\operatorname{P}_1$ med $\\langle p,q\\rangle=\\int_0^1 pq\\,dt$: hva blir $\\|1\\|$?",
      options: ["$1$, siden $\\int_0^1 1\\,dt=1$", "$\\sqrt2$, siden $\\int_{-1}^1 1\\,dt=2$", "$0$, siden konstanten ikke har retning", "$\\tfrac12$, siden intervallet har lengde én"],
      explanation: "$\\|1\\|=\\sqrt{\\int_0^1 1\\,dt}=\\sqrt1=1$. $\\sqrt2$ gjelder intervallet $[-1,1]$; normen av $1\\ne0$ er ikke $0$; $\\tfrac12$ er en feilaktig sammenblanding med intervallengden.",
    },
    {
      question: "Hvorfor er en ortonormal basis et spesielt bekvemt koordinatsystem?",
      options: ["Koordinatene blir $c_i=\\langle\\mathbf{y},\\mathbf{u}_i\\rangle$ — én indreproduktregning per koordinat", "Enhver vektor i rommet får da automatisk en koordinatvektor lik nullvektoren $\\mathbf{0}$", "Man slipper å bruke indreproduktet i det hele tatt", "Alle vektorer i rommet får automatisk samme koordinater"],
      explanation: "I en ortonormal basis er nevneren $\\langle\\mathbf{u}_i,\\mathbf{u}_i\\rangle=1$, så $c_i=\\langle\\mathbf{y},\\mathbf{u}_i\\rangle$ direkte. De andre påstandene er meningsløse — koordinatene varierer med vektoren og bruker fortsatt indreproduktet.",
    },
    {
      question: "En ortogonal mengde med $\\dim V$ vektorer forskjellige fra null er...",
      options: ["automatisk en basis for $V$, uavhengighet er allerede sikret", "aldri en basis for rommet, siden ortogonalitetskravet er et altfor sterkt krav", "en basis bare hvis vektorene også er normaliserte", "en basis bare etter en ekstra sjekk av uavhengighet"],
      explanation: "Ortogonale vektorer $\\ne\\mathbf{0}$ er lineært uavhengige, og $\\dim V$ uavhengige vektorer er en basis — ingen ekstra sjekk trengs. Normalisering er unødvendig for basis-egenskapen.",
    },
    {
      question: "Hva er den vanligste feilen ved Gram–Schmidt i et ikke-standard indreprodukt?",
      options: ["Å regne ett eller flere ledd med standardprikkproduktet i stedet", "Å bruke for få desimaler i mellomregningen slik at avrundingsfeil hoper seg opp", "Å skalere vektorene opp til heltall underveis", "Å starte med $\\mathbf{v}_1=\\mathbf{a}_1$"],
      explanation: "Å blande inn standardprikkproduktet — ofte i normen ved normalisering — er felle nr. 1. Heltalls-oppskalering og $\\mathbf{v}_1=\\mathbf{a}_1$ er derimot riktig framgangsmåte, og eksakte svar gjør desimaler irrelevant.",
    },
    {
      question: "Skalerer du $\\mathbf{v}_2$ opp med $3$ etter steg 2, hva skjer med nevneren i steg 3?",
      options: ["Nevneren $\\langle\\mathbf{v}_2,\\mathbf{v}_2\\rangle$ blir $9$ ganger så stor — bruk den oppskalerte $\\mathbf{v}_2$", "Nevneren er upåvirket, skalering endrer ikke $\\langle\\mathbf{v}_2,\\mathbf{v}_2\\rangle$", "Nevneren blir $3$ ganger så stor", "Man må normalisere $\\mathbf{v}_2$ før den kan brukes videre"],
      explanation: "$\\langle 3\\mathbf{v}_2,3\\mathbf{v}_2\\rangle=9\\langle\\mathbf{v}_2,\\mathbf{v}_2\\rangle$, så nevneren blir $9$ ganger så stor; telleren skaleres tilsvarende, så projeksjonsleddet er uendret. Man må bare være konsekvent og bruke den oppskalerte $\\mathbf{v}_2$.",
    },
    {
      question: "Gram–Schmidt kjøres på $\\operatorname{Col}A$-basisen (kolonnene i $A$). Hva utspenner resultatet?",
      options: ["Kolonnerommet $\\operatorname{Col}A$ — samme underrom, nå med ortogonal basis", "Hele $\\mathbb{R}^m$, siden ortogonale vektorer alltid fyller opp hele rommet de ligger i", "Nullrommet $\\operatorname{Nul}A$", "Radrommet $\\operatorname{Row}A$"],
      explanation: "Prosessen bevarer spennet, som her er $\\operatorname{Col}A$; man får en ortogonal basis for det samme kolonnerommet. Nullrom og radrom er andre underrom, og en basis for et underrom fyller ikke hele $\\mathbb{R}^m$.",
    },
    {
      question: "Hva er den ortonormale basisen etter normalisering av $\\{(1,0,1),(1,2,-1)\\}$ (standardprikkprodukt)?",
      options: ["$\\{\\tfrac{1}{\\sqrt2}(1,0,1),\\ \\tfrac{1}{\\sqrt6}(1,2,-1)\\}$", "$\\{\\tfrac12(1,0,1),\\ \\tfrac16(1,2,-1)\\}$, altså delt på de kvadrerte normene $2$ og $6$", "$\\{(1,0,1),\\ (1,2,-1)\\}$, de er allerede enhetsvektorer", "$\\{\\tfrac{1}{\\sqrt3}(1,0,1),\\ \\tfrac{1}{\\sqrt3}(1,2,-1)\\}$"],
      explanation: "Normene er $\\sqrt2$ og $\\sqrt6$, så man deler på dem. Å dele på $2$ og $6$ (kvadrerte normer) er feil; vektorene er ikke enhetsvektorer; og de har ulike normer, ikke begge $\\sqrt3$.",
    },
  ],
  'mat1120-4-3': [
    {
      question: "Hva er aller første steg når du skal Gram–Schmidt-e en basis?",
      options: ["Å avgjøre hvilket indreprodukt oppgaven har oppgitt, og holde deg til det", "Å normalisere alle inn-vektorene til lengde $1$ ved hjelp av standardnormen aller først", "Å regne determinanten av matrisen med vektorene som kolonner", "Å ordne vektorene etter synkende standardnorm før du begynner"],
      explanation: "Steg 0 er å identifisere indreproduktet — det styrer alle senere ledd. Normalisering skjer eventuelt til slutt; determinant og sortering er ikke en del av prosessen.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=\\int_0^1 pq\\,dt$ gir Gram–Schmidt på $\\{1,t,t^2\\}$ hvilken ortogonal basis?",
      options: ["$\\{1,\\,2t-1,\\,6t^2-6t+1\\}$", "$\\{1,\\,t,\\,3t^2-1\\}$, som på intervallet $[-1,1]$", "$\\{1,\\,t-1,\\,t^2-2t\\}$", "$\\{1,\\,t,\\,t^2\\}$, standardbasisen er allerede ortogonal"],
      explanation: "På $[0,1]$ får man $1$, $2t-1$, $6t^2-6t+1$ (skiftede Legendre). $3t^2-1$ hører til $[-1,1]$; de to siste er gale — standardbasisen er ikke ortogonal ($\\langle 1,t\\rangle=\\tfrac12\\ne0$).",
    },
    {
      question: "I et vektet indreprodukt $\\langle\\mathbf{x},\\mathbf{y}\\rangle=2x_1y_1+2x_2y_2+x_3y_3$: hva er nevneren $\\langle\\mathbf{v}_1,\\mathbf{v}_1\\rangle$ for $\\mathbf{v}_1=(1,1,0)$?",
      options: ["$4$, siden $2(1)+2(1)+1(0)=4$", "$2$, siden $1^2+1^2+0^2=2$ i standardnormen", "$\\sqrt2$, som er standardnormen av vektoren", "$8$, siden vektene dobles i kvadratet"],
      explanation: "Med vekter $2,2,1$: $\\langle(1,1,0),(1,1,0)\\rangle=2+2+0=4$. $2$ er standardkvadratnormen (feil her); $\\sqrt2$ er selve standardnormen; $8$ er en regnefeil.",
    },
    {
      question: "Hvorfor lønner det seg å skalere $\\mathbf{v}_k$ opp til heltall underveis?",
      options: ["Fordi ortogonaliteten er bevart under skalering, og regningen blir renere", "Fordi bare heltallsvektorer kan inngå i en ortogonal basis", "Fordi selve normaliseringen krever at koordinatene er hele tall for i det hele tatt å fungere", "Fordi indreproduktet ellers kan bli negativt"],
      explanation: "Skalering med et tall $\\ne0$ endrer ikke retning eller ortogonalitet, bare lengde — så man ganger opp for penere regning. Ortogonale baser trenger ikke heltall, normalisering krever det ikke, og indreproduktet blir ikke negativt av brøker.",
    },
    {
      question: "I steg 3 har du skalert $\\mathbf{v}_2$ opp med $3$. Hvilken nevner bruker du i projeksjonen på $\\mathbf{v}_2$?",
      options: ["$\\langle\\mathbf{v}_2,\\mathbf{v}_2\\rangle$ for den oppskalerte $\\mathbf{v}_2$", "Den gamle nevneren fra før oppskaleringen", "Alltid $1$, siden $\\mathbf{v}_2$ nå er en heltallig vektor etter oppskaleringen i forrige steg", "Gjennomsnittet av gammel og ny nevner"],
      explanation: "Etter oppskalering er $\\langle\\mathbf{v}_2,\\mathbf{v}_2\\rangle$ endret ($9$ ganger så stor), og du må bruke den nye verdien konsekvent. Å beholde den gamle, sette $1$ eller ta et gjennomsnitt gir feil projeksjon.",
    },
    {
      question: "Du normaliserer en ortogonal basis funnet i et integralindreprodukt på $[-1,1]$. Hvilken norm gjelder?",
      options: ["Integralnormen $\\sqrt{\\int_{-1}^1 v^2\\,dt}$ i det oppgitte indreproduktet", "Standardnormen av polynomets koeffisientvektor, siden den alltid er raskest å regne ut", "Normen $1$, siden ortogonale vektorer alt har enhetslengde", "Gjennomsnittet av integral- og standardnormen"],
      explanation: "Normaliseringen bruker samme indreprodukt som resten — her integralet. Standardnormen av koeffisientene er nettopp fellen; ortogonale vektorer har ikke automatisk lengde $1$; gjennomsnittsnormen finnes ikke.",
    },
    {
      question: "Gram–Schmidt på $\\{1,t,t^2\\}$ i to ulike indreprodukt gir $3t^2-1$ (integral på $[-1,1]$) og $3t^2-2$ (evaluering i $-1,0,1$). Hva forteller det?",
      options: ["At ortogonaliteten avhenger av indreproduktet, ikke bare av polynomene", "At en av de to utregningene må inneholde en regnefeil", "At evalueringsindreproduktet i dette tilfellet ikke er et gyldig indreprodukt i det hele tatt", "At de to svarene egentlig er like etter forenkling"],
      explanation: "Ulikt indreprodukt gir ulike ortogonale polynomer — begge er korrekte. Ingen regnefeil, begge er gyldige indreprodukt, og $3t^2-1\\ne 3t^2-2$.",
    },
    {
      question: "På $\\mathbb{R}^2$ (standard): Gram–Schmidt på $\\mathbf{a}_1=(3,1)$, $\\mathbf{a}_2=(2,2)$ gir hvilken $\\mathbf{v}_2$ (oppskalert)?",
      options: ["$(-1,3)$", "$(2,2)$, siden $\\mathbf{a}_2$ allerede står vinkelrett på $\\mathbf{a}_1$", "$(1,3)$, projeksjonen trukket fra feil vei", "$(-2,6)$ uforkortet, som ikke kan reduseres"],
      explanation: "$\\mathbf{v}_2=(2,2)-\\tfrac{8}{10}(3,1)=(-\\tfrac25,\\tfrac65)$, oppskalert og forkortet $(-1,3)$. $\\mathbf{a}_2$ er ikke ortogonal på $\\mathbf{a}_1$; $(1,3)$ har feil fortegn; $(-2,6)$ forkortes til $(-1,3)$.",
    },
    {
      question: "I evalueringsindreproduktet med punktene $-1,0,1$: hvorfor blir $v_2=t$ direkte fra $\\{1,t,\\dots\\}$?",
      options: ["Fordi $\\langle t,1\\rangle=(-1)+0+1=0$, så $t$ er alt ortogonal på $1$", "Fordi $t$ alltid er ortogonal på alle konstanter i absolutt ethvert indreprodukt", "Fordi $\\langle t,t\\rangle=2$ gjør projeksjonen null", "Fordi punktet $0$ nuller ut hele projeksjonen"],
      explanation: "$\\langle t,1\\rangle=(-1)(1)+(0)(1)+(1)(1)=0$ på grunn av de symmetriske punktene, så projeksjonsleddet forsvinner. $t$ er ikke ortogonal på $1$ i alle indreprodukt (jf. punktene $0,1,2$); $\\langle t,t\\rangle$ er nevneren, ikke grunnen.",
    },
    {
      question: "Hva er den vanligste feilen ved Gram–Schmidt under tidspress på eksamen?",
      options: ["Å regne ett eller flere ledd med standardprikkproduktet i et ikke-standard indreprodukt", "Å skalere vektorene opp til heltall altfor tidlig i prosessen, før projeksjonene er trukket fra", "Å starte med $\\mathbf{v}_1=\\mathbf{a}_1$ uten å normalisere først", "Å skrive svaret som en eksakt brøk i stedet for desimaltall"],
      explanation: "Standard-prikkprodukt-fellen er den dyreste. Heltalls-oppskalering og $\\mathbf{v}_1=\\mathbf{a}_1$ er riktig, og eksakte brøker er nettopp det som kreves, ikke desimaler.",
    },
    {
      question: "På $\\mathbb{R}^3$ med vekter $1,2,1$: Gram–Schmidt på $(1,0,1),(0,1,1)$ gir $\\mathbf{v}_2$ (oppskalert) lik...",
      options: ["$(-1,2,1)$", "$(0,1,1)$, som allerede er vektet ortogonal på $\\mathbf{v}_1$", "$(-1,1,1)$, som i standardprikkproduktet", "$(1,2,-1)$ med byttet fortegn"],
      explanation: "$\\langle(0,1,1),(1,0,1)\\rangle=1$ og $\\langle(1,0,1),(1,0,1)\\rangle=2$ (vektet), så $\\mathbf{v}_2=(0,1,1)-\\tfrac12(1,0,1)=(-\\tfrac12,1,\\tfrac12)\\to(-1,2,1)$. De andre ignorerer vekten $2$ eller har feil fortegn.",
    },
    {
      question: "Hvorfor bør du regne $\\langle\\mathbf{v}_i,\\mathbf{v}_j\\rangle$ for $i\\ne j$ helt til slutt?",
      options: ["Det er en billig sjekk som fanger regnefeil før de forplanter seg videre", "Det er strengt nødvendig for at basisen i det hele tatt skal kunne kalles ortogonal", "Det gjør vektorene ortonormale uten videre normalisering", "Det kreves for å oppgi dimensjonen til rommet"],
      explanation: "Sluttsjekken er ren forsikring — den bekrefter at ingen regnefeil har sneket seg inn. Basisen er ortogonal uansett om du sjekker; sjekken gir verken enhetslengde eller dimensjon.",
    },
    {
      question: "På $\\operatorname{P}_2$ med evaluering i $0,1,2$: hvorfor må du regne alle projeksjonsledd (ingen forsvinner)?",
      options: ["Fordi punktene ikke er symmetriske om null, så ingen skalarprodukt blir automatisk null", "Fordi et evalueringsindreprodukt aldri kan ha ortogonale polynomer blant standardmonomene", "Fordi $\\operatorname{P}_2$ har for høy dimensjon til snarveier", "Fordi integralet over punktene ikke konvergerer"],
      explanation: "Med usymmetriske punkter ($0,1,2$) er $\\langle t,1\\rangle=3\\ne0$, så oddefunksjon-snarveien fra $[-1,1]$ finnes ikke. De andre påstandene er gale — dimensjon og «integral over punkter» er urelatert.",
    },
    {
      question: "Du skal normalisere $(1,-1,4)$ i det vektede indreproduktet $2x_1y_1+2x_2y_2+x_3y_3$. Hva er normen?",
      options: ["$2\\sqrt5$, siden $2(1)+2(1)+1(16)=20$", "$\\sqrt{18}$, siden $1+1+16=18$ i standardnormen", "$\\sqrt{20}$ som ikke kan forenkles videre", "$20$, siden man ikke tar kvadratrot i vektede rom"],
      explanation: "$\\|(1,-1,4)\\|^2=2(1)^2+2(-1)^2+1(4)^2=2+2+16=20$, så normen er $\\sqrt{20}=2\\sqrt5$. $\\sqrt{18}$ er standardnormen (fellen); $\\sqrt{20}$ forenkles til $2\\sqrt5$; man tar alltid kvadratrot.",
    },
    {
      question: "Etter Gram–Schmidt får du $v_3=t^2-\\tfrac13$. Hvorfor skalerer fasiten det til $3t^2-1$?",
      options: ["For å få heltallskoeffisienter — retningen og ortogonaliteten er uendret", "Fordi $t^2-\\tfrac13$ egentlig ikke er ortogonal, mens den oppskalerte $3t^2-1$ derimot er det", "Fordi normalisering krever at ledende koeffisient er $3$", "Fordi $3t^2-1$ har norm $1$ i indreproduktet"],
      explanation: "Å gange med $3$ fjerner brøken uten å endre retning eller ortogonalitet. Begge er ortogonale (samme retning); normalisering krever ikke ledende koeffisient $3$; $3t^2-1$ er ikke en enhetsvektor.",
    },
    {
      question: "Gram–Schmidt tar imot $\\operatorname{Col}A$-basisen fra oppgave 1. Hva er den ortogonale basisen nyttig til videre?",
      options: ["Ortogonal projeksjon og minste kvadrater på $\\operatorname{Col}A$ i Del 5", "Å finne egenverdiene til matrisen $A$ direkte uten karakteristisk likning", "Å regne determinanten til $A$ raskere", "Å avgjøre om $A$ er diagonaliserbar"],
      explanation: "En ortogonal basis for $\\operatorname{Col}A$ er forsteget til ortogonal projeksjon og minste kvadrater (Del 5). Egenverdier, determinant og diagonaliserbarhet hører til andre deler av faget.",
    },
  ],
  'mat1120-5-1': [
    {
      question: "Hva forutsetter projeksjonsformelen $\\operatorname{proj}_W\\mathbf{y}=\\sum\\frac{\\langle\\mathbf{y},\\mathbf{v}_i\\rangle}{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}\\mathbf{v}_i$?",
      options: ["At $\\{\\mathbf{v}_i\\}$ er en ortogonal basis for $W$", "At $\\{\\mathbf{v}_i\\}$ bare utspenner $W$, uansett vinkler", "At $\\mathbf{y}$ allerede ligger i underrommet $W$", "At indreproduktet alltid er standardprikkproduktet"],
      explanation: "Formelen gjelder kun for parvis ortogonale $\\mathbf{v}_i$; er basisen ikke ortogonal, kjør Gram–Schmidt først (felle nr. 4). Den gjelder i ethvert indreprodukt, og $\\mathbf{y}$ trenger ikke ligge i $W$.",
    },
    {
      question: "Hva er avstanden fra $\\mathbf{y}$ til underrommet $W$?",
      options: ["$\\|\\mathbf{y}-\\hat{\\mathbf{y}}\\|$, altså normen av resten $\\mathbf{z}$", "$\\|\\hat{\\mathbf{y}}\\|$, normen av selve projeksjonen", "$\\|\\mathbf{y}\\|-\\|\\hat{\\mathbf{y}}\\|$, differansen av normene", "$\\langle\\mathbf{y},\\hat{\\mathbf{y}}\\rangle$, altså indreproduktet mellom vektoren og dens egen projeksjon"],
      explanation: "Avstanden er lengden av $\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}$. Å bruke $\\|\\hat{\\mathbf{y}}\\|$ eller en normdifferanse er en klassisk felle.",
    },
    {
      question: "I dekomposisjonen $\\mathbf{y}=\\hat{\\mathbf{y}}+\\mathbf{z}$, hvor ligger de to komponentene?",
      options: ["$\\hat{\\mathbf{y}}\\in W$ og $\\mathbf{z}\\in W^{\\perp}$", "$\\hat{\\mathbf{y}}\\in W^{\\perp}$ og $\\mathbf{z}\\in W$", "Begge ligger i $W$, siden $\\mathbf{y}$ splittes", "Begge ligger i $W^{\\perp}$, siden de er ortogonale"],
      explanation: "Projeksjonen $\\hat{\\mathbf{y}}$ er komponenten i $W$; resten $\\mathbf{z}$ står vinkelrett på $W$, altså i $W^{\\perp}$. Splittingen er entydig.",
    },
    {
      question: "Hva er en basis for $(\\operatorname{Col}A)^{\\perp}$?",
      options: ["$\\operatorname{Nul}(A^{T})$, nullrommet til den transponerte", "$\\operatorname{Nul}(A)$, nullrommet til $A$ selv", "$\\operatorname{Col}(A^{T})$, kolonnerommet til den transponerte", "$\\operatorname{Col}(A)$, kolonnerommet til $A$ selv"],
      explanation: "$(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}(A^{T})$: å være ortogonal på alle kolonnene betyr $A^{T}\\mathbf{z}=\\mathbf{0}$. $\\operatorname{Nul}(A)$ er komplementet til $\\operatorname{Row}A$, ikke til $\\operatorname{Col}A$.",
    },
    {
      question: "En basis for $W$ er gitt, men er ikke ortogonal. Hva gjør du før du projiserer?",
      options: ["Kjører Gram–Schmidt for å få en ortogonal basis for $W$", "Bruker basisen som den er i projeksjonsformelen", "Normaliserer hver vektor, det gjør basisen ortogonal", "Bytter til standardprikkproduktet uansett hva som er oppgitt"],
      explanation: "Projeksjonsformelen krever ortogonalitet; Gram–Schmidt lager en ortogonal basis for samme $W$. Normalisering endrer bare lengder, ikke vinkler, så det gjør ikke basisen ortogonal.",
    },
    {
      question: "Hva sier setningen om beste tilnærming?",
      options: ["$\\hat{\\mathbf{y}}$ er punktet i $W$ som ligger nærmest $\\mathbf{y}$", "$\\hat{\\mathbf{y}}$ er punktet i $W^{\\perp}$ nærmest $\\mathbf{y}$", "$\\hat{\\mathbf{y}}$ er punktet i $W$ som ligger aller lengst borte fra $\\mathbf{y}$", "$\\hat{\\mathbf{y}}$ er midtpunktet mellom $\\mathbf{y}$ og $W$"],
      explanation: "Projeksjonen minimerer avstanden $\\|\\mathbf{y}-\\mathbf{w}\\|$ over $\\mathbf{w}\\in W$ — den er den beste tilnærmingen til $\\mathbf{y}$ innenfor $W$. Dette bærer minste kvadrater.",
    },
    {
      question: "På $\\operatorname{P}_2$ med $\\langle p,q\\rangle=\\int_{-1}^1 pq\\,dt$ projiseres $t^2$ ned på $\\operatorname{Span}\\{1,t\\}$. Hva blir projeksjonen?",
      options: ["$\\tfrac13$", "$t^2$", "$0$", "$\\tfrac23$"],
      explanation: "$c_1=\\frac{\\langle t^2,1\\rangle}{\\langle 1,1\\rangle}=\\frac{2/3}{2}=\\frac13$ og $c_2=\\frac{\\langle t^2,t\\rangle}{\\langle t,t\\rangle}=0$, så projeksjonen er $\\tfrac13$. Verdien $\\tfrac23$ er $\\langle t^2,1\\rangle$ (telleren), ikke koeffisienten.",
    },
    {
      question: "Hvor mange vektorer har en basis for $W^{\\perp}$ når $\\dim W=2$ i $\\mathbb{R}^4$?",
      options: ["$2$, siden $\\dim W+\\dim W^{\\perp}=4$", "$4$, like mange som dimensjonen til rommet", "$1$, uansett hva $\\dim W$ er", "$3$, én mer enn $\\dim W$"],
      explanation: "Dimensjonsrelasjonen gir $\\dim W^{\\perp}=4-2=2$. Å oppgi bare restvektoren $\\mathbf{z}$ (1 vektor) er en felle når $\\dim W^{\\perp}>1$.",
    },
    {
      question: "Projeksjonen i et vektet indreprodukt regnes hvordan?",
      options: ["Med det vektede indreproduktet i alle tellere og nevnere", "Med standardprikkproduktet i tellerne, vektet i nevnerne", "Med standardprikkproduktet overalt, det er enklest", "Med vektet indreprodukt bare i den siste $\\mathbf{v}_i$"],
      explanation: "Alle $\\langle\\cdot,\\cdot\\rangle$ — både Fourier-tellere, nevnere og normer — bruker det oppgitte indreproduktet. Å blande inn standardprikkproduktet ett sted ødelegger projeksjonen (felle nr. 1).",
    },
    {
      question: "Hvordan kontrollerer du at $\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}$ er riktig regnet?",
      options: ["Sjekker at $\\langle\\mathbf{z},\\mathbf{v}_i\\rangle=0$ for hver basisvektor", "Sjekker at $\\langle\\mathbf{z},\\hat{\\mathbf{y}}\\rangle\\ne0$, altså at de ikke er ortogonale", "Sjekker at $\\|\\mathbf{z}\\|=\\|\\hat{\\mathbf{y}}\\|$", "Sjekker at $\\mathbf{z}$ ligger i $W$"],
      explanation: "$\\mathbf{z}$ skal ligge i $W^{\\perp}$, altså være ortogonal på hver basisvektor $\\mathbf{v}_i$ for $W$. $\\mathbf{z}$ ligger nettopp ikke i $W$, og normene er sjelden like.",
    },
    {
      question: "Hva blir projeksjonen av $\\mathbf{y}$ på $W$ dersom $\\mathbf{y}$ allerede ligger i $W$?",
      options: ["$\\hat{\\mathbf{y}}=\\mathbf{y}$ og $\\mathbf{z}=\\mathbf{0}$", "$\\hat{\\mathbf{y}}=\\mathbf{0}$ og $\\mathbf{z}=\\mathbf{y}$", "$\\hat{\\mathbf{y}}=\\tfrac12\\mathbf{y}$, halvparten", "Projeksjonen er ikke definert i det tilfellet"],
      explanation: "Ligger $\\mathbf{y}$ i $W$, projiseres den på seg selv: $\\hat{\\mathbf{y}}=\\mathbf{y}$, resten er null og avstanden $0$.",
    },
    {
      question: "Hva er projeksjonen av $\\mathbf{y}$ på linjen $\\operatorname{Span}\\{\\mathbf{v}\\}$?",
      options: ["$\\frac{\\langle\\mathbf{y},\\mathbf{v}\\rangle}{\\langle\\mathbf{v},\\mathbf{v}\\rangle}\\mathbf{v}$", "$\\langle\\mathbf{y},\\mathbf{v}\\rangle\\,\\mathbf{v}$, uten nevner", "$\\frac{\\langle\\mathbf{v},\\mathbf{v}\\rangle}{\\langle\\mathbf{y},\\mathbf{v}\\rangle}\\mathbf{v}$, omvendt brøk", "$\\frac{\\langle\\mathbf{y},\\mathbf{v}\\rangle}{\\langle\\mathbf{y},\\mathbf{y}\\rangle}\\mathbf{v}$, med $\\mathbf{y}$ i nevner"],
      explanation: "Projeksjon på én vektor er ett Fourier-ledd med nevner $\\langle\\mathbf{v},\\mathbf{v}\\rangle$. Formelen uten nevner gjelder bare enhetsvektorer; nevneren skal ha $\\mathbf{v}$, ikke $\\mathbf{y}$.",
    },
    {
      question: "Er projeksjonen $\\operatorname{proj}_W\\mathbf{y}$ avhengig av hvilken ortogonal basis for $W$ du velger?",
      options: ["Nei, den avhenger bare av $W$, $\\mathbf{y}$ og indreproduktet", "Ja, ulike ortogonale baser for $W$ gir hver sin forskjellige projeksjon", "Ja, men bare hvis basisen ikke er normalisert", "Bare i ikke-standard indreprodukt endrer den seg"],
      explanation: "Projeksjonen er entydig bestemt av underrommet og indreproduktet — enhver ortogonal basis for $W$ gir samme $\\hat{\\mathbf{y}}$.",
    },
    {
      question: "Hva gjelder $(\\operatorname{Row}A)^{\\perp}$?",
      options: ["$(\\operatorname{Row}A)^{\\perp}=\\operatorname{Nul}(A)$", "$(\\operatorname{Row}A)^{\\perp}=\\operatorname{Nul}(A^{T})$", "$(\\operatorname{Row}A)^{\\perp}=\\operatorname{Col}(A)$", "$(\\operatorname{Row}A)^{\\perp}=\\operatorname{Row}(A^{T})$"],
      explanation: "$A\\mathbf{x}=\\mathbf{0}$ betyr at $\\mathbf{x}$ er ortogonal på hver rad, så radrommets komplement er $\\operatorname{Nul}(A)$. Kolonnerommets komplement er derimot $\\operatorname{Nul}(A^{T})$.",
    },
    {
      question: "En ortonormal basis $\\{\\mathbf{u}_i\\}$ for $W$ er gitt. Hvordan forenkles projeksjonsformelen?",
      options: ["$\\hat{\\mathbf{y}}=\\sum\\langle\\mathbf{y},\\mathbf{u}_i\\rangle\\mathbf{u}_i$, nevnerne faller bort", "$\\hat{\\mathbf{y}}=\\sum\\frac{\\mathbf{u}_i}{\\langle\\mathbf{y},\\mathbf{u}_i\\rangle}$, brøk snus", "Formelen forenkles ikke i det hele tatt; alle nevnerne blir stående som før", "$\\hat{\\mathbf{y}}=\\langle\\mathbf{y},\\mathbf{u}_1\\rangle\\mathbf{u}_1$ bare, ett ledd"],
      explanation: "For ortonormale $\\mathbf{u}_i$ er $\\langle\\mathbf{u}_i,\\mathbf{u}_i\\rangle=1$, så nevnerne forsvinner og alle ledd tas med.",
    },
    {
      question: "Hvorfor er $\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}$ automatisk ortogonal på hele $W$?",
      options: ["Fourier-leddene er konstruert slik at resten er vinkelrett på hver $\\mathbf{v}_i$", "Fordi $\\mathbf{z}$ per definisjon alltid er lik nullvektoren uansett $\\mathbf{y}$", "Fordi $\\mathbf{y}$ og $\\hat{\\mathbf{y}}$ har samme lengde", "Fordi $W$ og $W^{\\perp}$ er like store underrom"],
      explanation: "Hvert Fourier-ledd trekker fra nettopp komponenten langs $\\mathbf{v}_i$, så det som blir igjen er ortogonalt på hver $\\mathbf{v}_i$ — altså på hele $W$.",
    },
    {
      question: "Hvilken sammenheng gjelder mellom lengdene i dekomposisjonen $\\mathbf{y}=\\hat{\\mathbf{y}}+\\mathbf{z}$?",
      options: ["$\\|\\mathbf{y}\\|^2=\\|\\hat{\\mathbf{y}}\\|^2+\\|\\mathbf{z}\\|^2$ (Pytagoras)", "$\\|\\mathbf{y}\\|=\\|\\hat{\\mathbf{y}}\\|+\\|\\mathbf{z}\\|$ (normene summeres)", "$\\|\\mathbf{y}\\|^2=\\|\\hat{\\mathbf{y}}\\|^2-\\|\\mathbf{z}\\|^2$", "Det finnes ingen fast sammenheng mellom lengdene"],
      explanation: "Siden $\\hat{\\mathbf{y}}\\perp\\mathbf{z}$ gir Pytagoras $\\|\\mathbf{y}\\|^2=\\|\\hat{\\mathbf{y}}\\|^2+\\|\\mathbf{z}\\|^2$. Normene selv summeres ikke lineært.",
    },
    {
      question: "I $\\mathbb{R}^4$: $\\mathbf{y}=(1,1,4,4)$ projiseres på $W=\\operatorname{Span}\\{(1,1,0,0),(1,-1,1,1)\\}$ og gir $\\hat{\\mathbf{y}}=(3,-1,2,2)$. Hva er avstanden $d(\\mathbf{y},W)$?",
      options: ["$4$", "$\\sqrt{18}$", "$\\sqrt{34}$", "$2$"],
      explanation: "$\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}=(-2,2,2,2)$, så $d=\\|\\mathbf{z}\\|=\\sqrt{4+4+4+4}=4$. $\\sqrt{18}=\\|\\hat{\\mathbf{y}}\\|$ er fellen (feil formel).",
    },
  ],
  'mat1120-5-2': [
    {
      question: "Hva er normallikningene for minste kvadraters problem $C\\mathbf{x}=\\mathbf{b}$?",
      options: ["$C^{T}C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$", "$CC^{T}\\hat{\\mathbf{x}}=C\\mathbf{b}$, med $CC^{T}$", "$C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$, uten transponering av $C$", "$C^{T}\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$, uten det ekstra $C$-et"],
      explanation: "Man multipliserer $C\\mathbf{x}=\\mathbf{b}$ med $C^{T}$ fra venstre og får $C^{T}C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$. Matrisen $C^{T}C$ er kvadratisk $n\\times n$; de andre formene har feil dimensjoner.",
    },
    {
      question: "Når er minste kvadraters løsning entydig?",
      options: ["Når $C$ har full kolonnerang, så $C^{T}C$ er invertibel", "Alltid, uansett hvordan $C$ ser ut", "Når $C$ har full radrang i stedet", "Når $\\mathbf{b}$ tilfeldigvis ligger i kolonnerommet $\\operatorname{Col}C$ fra før"],
      explanation: "Entydighet ⇔ lineært uavhengige kolonner ⇔ $C^{T}C$ invertibel. Ved avhengige kolonner (rangdefekt) er løsningen affin, uansett om $\\mathbf{b}$ ligger i kolonnerommet.",
    },
    {
      question: "$C$ har avhengige kolonner (rangdefekt). Hvordan ser minste kvadraters løsningsmengde ut?",
      options: ["Affin: $\\hat{\\mathbf{x}}_p+\\operatorname{Nul}C$, en partikulær pluss nullrommet", "Fortsatt ett entydig punkt, som ved full rang", "Tom, fordi $C^{T}C$ ikke er invertibel", "Hele $\\mathbb{R}^n$ er løsningsmengden, fordi alle vektorer minimerer likt"],
      explanation: "Ved rangdefekt har normallikningene uendelig mange løsninger: en partikulær pluss $\\operatorname{Nul}C$. Systemet er fortsatt konsistent (ikke tomt), men løsningen er ikke ett punkt eller hele rommet.",
    },
    {
      question: "Hva er sammenhengen mellom $C\\hat{\\mathbf{x}}$ og projeksjonen når $W=\\operatorname{Col}C$?",
      options: ["$C\\hat{\\mathbf{x}}=\\operatorname{proj}_W\\mathbf{b}$", "$C\\hat{\\mathbf{x}}=\\mathbf{b}$ alltid, eksakt", "$C\\hat{\\mathbf{x}}=\\mathbf{b}-\\operatorname{proj}_W\\mathbf{b}$, altså residualet", "$C\\hat{\\mathbf{x}}$ har ingen fast sammenheng med projeksjonen"],
      explanation: "$C\\hat{\\mathbf{x}}$ er nettopp projeksjonen av $\\mathbf{b}$ på kolonnerommet. Residualet er $\\mathbf{b}-C\\hat{\\mathbf{x}}$, og $C\\hat{\\mathbf{x}}=\\mathbf{b}$ bare hvis $\\mathbf{b}\\in\\operatorname{Col}C$.",
    },
    {
      question: "Hva er avstanden fra $\\mathbf{b}$ til $\\operatorname{Col}C$ ved en minste kvadraters løsning $\\hat{\\mathbf{x}}$?",
      options: ["$\\|\\mathbf{b}-C\\hat{\\mathbf{x}}\\|$, residualets norm", "$\\|C\\hat{\\mathbf{x}}\\|$, normen av projeksjonen", "$\\|\\hat{\\mathbf{x}}\\|$, normen av løsningsvektoren", "$\\|\\mathbf{b}\\|$, normen av $\\mathbf{b}$ selv"],
      explanation: "Avstanden er lengden av residualet $\\mathbf{b}-C\\hat{\\mathbf{x}}$. Å bruke normen av projeksjonen eller av $\\hat{\\mathbf{x}}$ er en klassisk felle.",
    },
    {
      question: "Hvorfor er normallikningene $C^{T}C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$ alltid konsistente?",
      options: ["Fordi residualet skal være ortogonalt på $\\operatorname{Col}C$, som gir $C^{T}(\\mathbf{b}-C\\hat{\\mathbf{x}})=\\mathbf{0}$", "Fordi matrisen $C^{T}C$ alltid er invertibel uansett hvordan $C$ ser ut", "Fordi $\\mathbf{b}$ alltid ligger i $\\operatorname{Col}C$", "Fordi systemet har like mange likninger som ukjente"],
      explanation: "Betingelsen for beste tilnærming er at residualet står vinkelrett på hver kolonne, altså $C^{T}(\\mathbf{b}-C\\hat{\\mathbf{x}})=\\mathbf{0}$ — som er normallikningene. $C^{T}C$ er ikke alltid invertibel (rangdefekt).",
    },
    {
      question: "$C$ er $4\\times2$ med ortogonale kolonner. Hva blir $C^{T}C$?",
      options: ["En diagonalmatrise", "Nødvendigvis identitetsmatrisen $I$", "En matrise med bare 1-ere", "En singulær (ikke-invertibel) matrise"],
      explanation: "Ortogonale kolonner gir $\\langle\\mathbf{c}_i,\\mathbf{c}_j\\rangle=0$ for $i\\ne j$, så off-diagonalene er null — $C^{T}C$ er diagonal. Den er $I$ bare hvis kolonnene i tillegg er enhetsvektorer.",
    },
    {
      question: "Ved rangdefekt: er $C\\hat{\\mathbf{x}}=\\operatorname{proj}_W\\mathbf{b}$ den samme for alle de affine løsningene?",
      options: ["Ja, fordi to løsninger skiller seg med en $\\mathbf{n}\\in\\operatorname{Nul}C$ og $C\\mathbf{n}=\\mathbf{0}$", "Nei, hver affin løsning gir sin egen projeksjon", "Ja, men bare hvis $C$ har full kolonnerang", "Bare i det spesialtilfellet der $\\mathbf{b}$ allerede ligger i $\\operatorname{Col}C$ fra før"],
      explanation: "To affine løsninger avviker med en vektor i $\\operatorname{Nul}C$, og $C(\\hat{\\mathbf{x}}+\\mathbf{n})=C\\hat{\\mathbf{x}}$. Projeksjonen er derfor entydig selv om $\\hat{\\mathbf{x}}$ ikke er det.",
    },
    {
      question: "Hva er de to belønnede veiene til en minste kvadraters løsning?",
      options: ["Normallikningene, eller projeksjonssnarveien via $\\operatorname{proj}_W\\mathbf{b}$", "Cramers regel på $C\\mathbf{x}=\\mathbf{b}$, eller invertering $C^{-1}\\mathbf{b}$", "Gauss-eliminasjon av $C\\mathbf{x}=\\mathbf{b}$, eller determinanten", "Egenverdier av $C$, eller diagonalisering"],
      explanation: "Enten løs $C^{T}C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$, eller regn $\\mathbf{p}=\\operatorname{proj}_W\\mathbf{b}$ og løs det konsistente $C\\mathbf{x}=\\mathbf{p}$. $C$ er sjelden kvadratisk/invertibel, så Cramer og invers gjelder ikke.",
    },
    {
      question: "For en linjetilpasning $y=\\beta_0+\\beta_1t$ til punkter $(t_i,y_i)$, hva blir koeffisientmatrisen $C$?",
      options: ["En kolonne med 1-ere og en kolonne med $t_i$-verdiene", "En kolonne med $y_i$-verdiene og en med $t_i$-verdiene", "En enkelt kolonne med $t_i$-verdiene", "En kvadratisk matrise med $t_i$ på diagonalen"],
      explanation: "Modellen $\\beta_0\\cdot1+\\beta_1\\cdot t_i$ gir $C$ med en 1-kolonne og en $t$-kolonne; $\\mathbf{b}$ er $y$-verdiene. $y_i$-ene hører til $\\mathbf{b}$, ikke $C$.",
    },
    {
      question: "Hvordan bør du behandle den lille RREF-en av normallikningene på eksamen?",
      options: ["Lese den av vedlegget, ikke radredusere for hånd", "Radredusere $[C^{T}C\\mid C^{T}\\mathbf{b}]$ nøye for hånd", "Regne $\\det(C^{T}C)$ og bruke Cramers regel", "Diagonalisere $C^{T}C$ først"],
      explanation: "Vedlegget gir RREF-en; du leser $\\hat{\\mathbf{x}}$ av den. Håndradredusering er tidssluk, og Cramer/diagonalisering er unødvendig for et lite system.",
    },
    {
      question: "Hva forteller residualets ortogonalitet $C^{T}(\\mathbf{b}-C\\hat{\\mathbf{x}})=\\mathbf{0}$ deg?",
      options: ["At residualet står vinkelrett på hver kolonne i $C$", "At residualet er lik nullvektoren", "At $\\mathbf{b}$ ligger i $\\operatorname{Col}C$", "At $C$ er invertibel"],
      explanation: "Hver komponent i $C^{T}(\\mathbf{b}-C\\hat{\\mathbf{x}})$ er prikkproduktet av en kolonne med residualet; at alle er null betyr ortogonalitet på $\\operatorname{Col}C$. Residualet er sjelden selv null.",
    },
    {
      question: "$C$ er $5\\times3$ med $\\operatorname{rang}C=3$. Hva kan du si om løsningen?",
      options: ["Entydig, siden $C$ har full kolonnerang", "Affin, med to frie parametere", "Ingen løsning finnes", "Entydig bare hvis $\\mathbf{b}=\\mathbf{0}$"],
      explanation: "$\\operatorname{rang}C=3=$ antall kolonner betyr full kolonnerang, $C^{T}C$ invertibel og entydig $\\hat{\\mathbf{x}}$. Normallikningene har alltid (minst) en løsning.",
    },
    {
      question: "Hva minimerer «minste kvadraters» løsning egentlig?",
      options: ["Summen av kvadrerte residualer $\\|\\mathbf{b}-C\\mathbf{x}\\|^2$", "Summen av residualene $\\sum(b_i-(C\\mathbf{x})_i)$ uten kvadrat", "Det største enkeltavviket $\\max_i|b_i-(C\\mathbf{x})_i|$", "Antall nullkomponenter i residualet"],
      explanation: "Navnet kommer av at $\\|\\mathbf{b}-C\\mathbf{x}\\|^2$ er en sum av kvadrater. Det er ikke summen uten kvadrat eller det største avviket som minimeres.",
    },
    {
      question: "Du har allerede regnet $\\operatorname{proj}_W\\mathbf{b}$ i en tidligere deloppgave. Hvordan finner du raskest en minste kvadraters løsning?",
      options: ["Løs det konsistente systemet $C\\mathbf{x}=\\operatorname{proj}_W\\mathbf{b}$", "Start på nytt med normallikningene fra bunnen", "Regn $(C^{T}C)^{-1}$ selv om $C$ er rangdefekt", "Diagonaliser $C$ og les av egenverdiene"],
      explanation: "Siden $C\\hat{\\mathbf{x}}=\\operatorname{proj}_W\\mathbf{b}$, løser du bare $C\\mathbf{x}=\\operatorname{proj}_W\\mathbf{b}$ (nå konsistent). Å starte forfra er unødvendig, og invers finnes ikke ved rangdefekt.",
    },
    {
      question: "Er $C^{T}C$ symmetrisk?",
      options: ["Ja, $C^{T}C$ er alltid symmetrisk", "Nei, den er generelt usymmetrisk", "Bare når $C$ er kvadratisk", "Bare når $C$ har ortogonale kolonner"],
      explanation: "$(C^{T}C)^{T}=C^{T}(C^{T})^{T}=C^{T}C$, så den er alltid symmetrisk (og positiv semidefinit). Dette gjelder uansett formen på $C$.",
    },
    {
      question: "Hva er en partikulær løsning i den affine løsningsmengden?",
      options: ["Én konkret løsning $\\hat{\\mathbf{x}}_p$ som løser normallikningene", "En vektor i $\\operatorname{Nul}C$", "Den entydige løsningen, som alltid finnes", "Selve nullvektoren, uansett $\\mathbf{b}$"],
      explanation: "$\\hat{\\mathbf{x}}_p$ er én konkret løsning; hele mengden er $\\hat{\\mathbf{x}}_p+\\operatorname{Nul}C$. En vektor i $\\operatorname{Nul}C$ er retningsdelen, ikke en løsning av selve normallikningene (med mindre $C^{T}\\mathbf{b}=\\mathbf{0}$).",
    },
    {
      question: "For $C=\\begin{bmatrix}1&1\\\\1&2\\\\1&3\\\\1&4\\end{bmatrix}$, hva er $C^{T}C$?",
      options: ["$\\begin{bmatrix}4&10\\\\10&30\\end{bmatrix}$", "$\\begin{bmatrix}4&8\\\\8&16\\end{bmatrix}$", "$\\begin{bmatrix}10&30\\\\30&100\\end{bmatrix}$", "$\\begin{bmatrix}4&10\\\\10&20\\end{bmatrix}$"],
      explanation: "Diagonalen er $\\langle\\mathbf{c}_1,\\mathbf{c}_1\\rangle=4$ og $\\langle\\mathbf{c}_2,\\mathbf{c}_2\\rangle=1+4+9+16=30$; off-diagonalen $\\langle\\mathbf{c}_1,\\mathbf{c}_2\\rangle=1+2+3+4=10$. Derav $\\begin{bmatrix}4&10\\\\10&30\\end{bmatrix}$.",
    },
    {
      question: "Hva må sensor se i en minste kvadraters besvarelse ved rangdefekt?",
      options: ["En eksplisitt setning om at løsningen er affin, med $\\operatorname{Nul}C$ oppgitt", "Bare ett tallsvar, uten videre kommentar", "En determinantberegning av $C$", "En håndradredusering av hele $[C\\mid\\mathbf{b}]$ uten kommentar om rang"],
      explanation: "Ved avhengige kolonner må du si eksplisitt at løsningen er affin (partikulær $+\\operatorname{Nul}C$) — å oppgi ett svar som entydig er felle nr. 5. Determinant og håndradredusering er unødvendig.",
    },
    {
      question: "Hva er en kurvetilpasning $y=\\beta_0+\\beta_1t+\\beta_2t^2$ i minste kvadraters språk?",
      options: ["Et minste kvadraters problem med en ekstra $t^2$-kolonne i $C$", "Et ikke-lineært problem som ikke kan løses med normallikningene", "Et egenverdiproblem for $C$", "Et problem som krever at $C$ er kvadratisk"],
      explanation: "Modellen er lineær i $\\beta$-ene, så $C$ får kolonner $1,t,t^2$ og normallikningene gjelder uendret. Det er ikke ikke-lineært eller et egenverdiproblem.",
    },
  ],
  'mat1120-5-3': [
    {
      question: "Projeksjonsformelen $\\hat{\\mathbf{y}}=\\sum_i\\frac{\\langle\\mathbf{y},\\mathbf{v}_i\\rangle}{\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle}\\mathbf{v}_i$ forutsetter at basisen $\\{\\mathbf{v}_i\\}$ for $W$ er:",
      options: ["ortogonal ($\\langle\\mathbf{v}_i,\\mathbf{v}_j\\rangle=0$ når $i\\ne j$)", "ortonormal, altså med lengde nøyaktig $1$ på hver vektor", "satt sammen utelukkende av egenvektorer for en matrise $A$", "en basis som utspenner hele det omsluttende vektorrommet"],
      explanation: "Formelen er utledet under parvis ortogonalitet. Ortonormalitet er strengere enn nødvendig (da faller bare nevnerne bort), og egenvektorer/utspenning av hele rommet er irrelevant. Er den utleverte basisen ikke ortogonal, må Gram-Schmidt kjøres først (felle nr. 4).",
    },
    {
      question: "Med $\\hat{\\mathbf{y}}=\\operatorname{proj}_W\\mathbf{y}$ er avstanden fra $\\mathbf{y}$ til underrommet $W$ lik:",
      options: ["$\\|\\mathbf{y}-\\hat{\\mathbf{y}}\\|$", "$\\|\\hat{\\mathbf{y}}\\|$", "$\\|\\mathbf{y}\\|-\\|\\hat{\\mathbf{y}}\\|$", "$\\|\\mathbf{y}+\\hat{\\mathbf{y}}\\|$"],
      explanation: "Avstanden er normen av residualet $\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}$, ikke normen av projeksjonen. Å regne $\\|\\hat{\\mathbf{y}}\\|$ er en klassisk felle; differansen av normer og $\\|\\mathbf{y}+\\hat{\\mathbf{y}}\\|$ er heller ikke avstander.",
    },
    {
      question: "Du skal projisere, men den utleverte basisen for $W$ er ikke ortogonal. Hva gjør du først?",
      options: ["kjører Gram-Schmidt til en ortogonal basis for $W$", "normaliserer hver basisvektor til lengde $1$", "bytter til standardprikkproduktet uansett hva som er oppgitt", "setter basisen rett inn i projeksjonsformelen likevel"],
      explanation: "Projeksjonsformelen krever en ortogonal basis, så Gram-Schmidt er forsteget (felle nr. 4). Normalisering alene gir ikke ortogonalitet, og indreproduktet skal alltid være det oppgitte.",
    },
    {
      question: "For en matrise $A$ (standardprikkprodukt) er $(\\operatorname{Col}A)^{\\perp}$ lik:",
      options: ["$\\operatorname{Nul}(A^{T})$", "$\\operatorname{Nul}(A)$", "$\\operatorname{Col}(A^{T})$", "$\\operatorname{Col}(A)$"],
      explanation: "En vektor er ortogonal på alle kolonnene i $A$ nettopp når $A^{T}\\mathbf{z}=\\mathbf{0}$, altså $(\\operatorname{Col}A)^{\\perp}=\\operatorname{Nul}(A^{T})$. $\\operatorname{Nul}(A)=(\\operatorname{Row}A)^{\\perp}$, mens $\\operatorname{Col}(A^{T})=\\operatorname{Row}A$ og $\\operatorname{Col}(A)$ er rommene selv, ikke komplementene til $\\operatorname{Col}A$.",
    },
    {
      question: "Dimensjonsrelasjonen for et underrom $W$ og komplementet $W^{\\perp}$ sier at $\\dim W+\\dim W^{\\perp}$ er lik:",
      options: ["dimensjonen til hele det omsluttende rommet", "rangen til den tilhørende matrisen $A$", "antallet vektorer i den oppgitte $W$-basisen", "alltid nøyaktig det dobbelte av $\\dim W$"],
      explanation: "$\\dim W+\\dim W^{\\perp}=\\dim(\\text{hele rommet})$ - de to fyller ut rommet uten overlapp. Rangen er bare $\\dim W$, og $2\\dim W$ stemmer bare i det spesielle tilfellet $\\dim W=\\dim W^{\\perp}$.",
    },
    {
      question: "Normallikningene for en minste kvadraters løsning $\\hat{\\mathbf{x}}$ av $C\\mathbf{x}=\\mathbf{b}$ er:",
      options: ["$C^{T}C\\,\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$", "$CC^{T}\\,\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$", "$C^{T}C\\,\\hat{\\mathbf{x}}=C\\mathbf{b}$", "$C\\,\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$"],
      explanation: "Multipliser $C\\mathbf{x}=\\mathbf{b}$ med $C^{T}$: $C^{T}C\\hat{\\mathbf{x}}=C^{T}\\mathbf{b}$, et lite kvadratisk system. $CC^{T}$ har feil form, og $C\\mathbf{b}$/høyresidene i de andre passer ikke dimensjonene.",
    },
    {
      question: "For $W=\\operatorname{Col}C$ er projeksjonen $\\operatorname{proj}_W\\mathbf{b}$ lik (der $\\hat{\\mathbf{x}}$ løser normallikningene):",
      options: ["$C\\hat{\\mathbf{x}}$", "$\\hat{\\mathbf{x}}$", "$C^{T}\\mathbf{b}$", "$\\mathbf{b}-C\\hat{\\mathbf{x}}$"],
      explanation: "Koblingen er $\\operatorname{proj}_W\\mathbf{b}=C\\hat{\\mathbf{x}}$ - minste kvadrater og projeksjon er samme sak. $\\hat{\\mathbf{x}}$ er koordinatvektoren (ikke projeksjonen), og $\\mathbf{b}-C\\hat{\\mathbf{x}}$ er residualet $\\mathbf{z}$.",
    },
    {
      question: "$C$ har ikke full kolonnerang (rangdefekt). Minste kvadraters løsning er da:",
      options: ["affin: en partikulær løsning pluss $\\operatorname{Nul}C$", "entydig, fordi matrisen $C^{T}C$ da alltid er invertibel", "ikke-eksisterende, siden systemet blir inkonsistent", "alltid nøyaktig lik nullvektoren $\\mathbf{0}$ i rommet"],
      explanation: "Ved rangdefekt er $C^{T}C$ ikke invertibel, og løsningsmengden er $\\hat{\\mathbf{x}}_p+\\operatorname{Nul}C$ (felle nr. 5). Normallikningene er alltid konsistente, så en løsning finnes - den er bare ikke entydig.",
    },
    {
      question: "Selv når $\\hat{\\mathbf{x}}$ er affin (rangdefekt), er $C\\hat{\\mathbf{x}}=\\operatorname{proj}_W\\mathbf{b}$:",
      options: ["den samme for alle løsningene i mengden", "forskjellig for hvert valg av løsning", "bare definert for den korteste løsningen", "lik $\\mathbf{b}$ når $C$ er rangdefekt"],
      explanation: "To affine løsninger skiller seg med en $\\mathbf{n}\\in\\operatorname{Nul}C$, og $C(\\hat{\\mathbf{x}}_p+\\mathbf{n})=C\\hat{\\mathbf{x}}_p$ siden $C\\mathbf{n}=\\mathbf{0}$. Projeksjonen er derfor entydig, selv om $\\hat{\\mathbf{x}}$ ikke er det.",
    },
    {
      question: "I et vektet indreprodukt $\\langle\\mathbf{x},\\mathbf{y}\\rangle=\\sum_i w_ix_iy_i$: hvilket indreprodukt bruker du i nevneren $\\langle\\mathbf{v}_i,\\mathbf{v}_i\\rangle$ i projeksjonen?",
      options: ["det oppgitte vektede indreproduktet", "standardprikkproduktet $\\sum_i x_iy_i$", "den vanlige euklidske lengden i kvadrat", "et integral $\\int p(t)q(t)\\,dt$ over rommet"],
      explanation: "Alle skalarprodukt, normer og Gram-Schmidt-ledd regnes med det oppgitte indreproduktet - også nevnerne (felle nr. 1). Å falle tilbake på standardprikkproduktet ett sted ødelegger hele projeksjonen.",
    },
    {
      question: "Ved en minste kvadraters løsning står residualet $\\mathbf{z}=\\mathbf{b}-C\\hat{\\mathbf{x}}$:",
      options: ["vinkelrett på $\\operatorname{Col}C$", "parallelt med $\\operatorname{Col}C$", "vinkelrett på $\\operatorname{Nul}C$", "inne i $\\operatorname{Col}C$"],
      explanation: "Selve betingelsen $C^{T}(\\mathbf{b}-C\\hat{\\mathbf{x}})=\\mathbf{0}$ betyr at residualet er ortogonalt på hver kolonne i $C$, altså på hele $\\operatorname{Col}C$. Det ligger i $(\\operatorname{Col}C)^{\\perp}$, ikke i eller parallelt med $\\operatorname{Col}C$.",
    },
    {
      question: "For en linje $W=\\operatorname{Span}\\{\\mathbf{v}\\}$ er projeksjonen av $\\mathbf{y}$ ned på $W$:",
      options: ["$\\frac{\\langle\\mathbf{y},\\mathbf{v}\\rangle}{\\langle\\mathbf{v},\\mathbf{v}\\rangle}\\mathbf{v}$", "$\\langle\\mathbf{y},\\mathbf{v}\\rangle\\,\\mathbf{v}$", "$\\frac{\\langle\\mathbf{y},\\mathbf{v}\\rangle}{\\|\\mathbf{y}\\|}\\mathbf{v}$", "$\\frac{\\langle\\mathbf{v},\\mathbf{v}\\rangle}{\\langle\\mathbf{y},\\mathbf{v}\\rangle}\\mathbf{v}$"],
      explanation: "Projeksjon på en linje er ett Fourier-ledd med nevner $\\langle\\mathbf{v},\\mathbf{v}\\rangle$. Å droppe nevneren, dele på $\\|\\mathbf{y}\\|$ eller snu brøken gir feil skalering.",
    },
    {
      question: "Minste kvadraters løsning av $C\\mathbf{x}=\\mathbf{b}$ er entydig hvis og bare hvis:",
      options: ["$C$ har full kolonnerang (uavhengige kolonner)", "matrisen $C$ er kvadratisk", "$\\mathbf{b}$ ligger i kolonnerommet $\\operatorname{Col}C$", "$C$ har full radrang (uavhengige rader)"],
      explanation: "Entydighet er ekvivalent med at $C^{T}C$ er invertibel, som skjer nettopp ved full kolonnerang. At $\\mathbf{b}\\in\\operatorname{Col}C$ gjør systemet konsistent (ikke om entydig), og radrang/kvadratform er ikke kriteriet.",
    },
    {
      question: "I dekomposisjonen $\\mathbf{y}=\\hat{\\mathbf{y}}+\\mathbf{z}$ (der $\\hat{\\mathbf{y}}=\\operatorname{proj}_W\\mathbf{y}$) ligger komponentene hvor?",
      options: ["$\\hat{\\mathbf{y}}$ i $W$ og $\\mathbf{z}$ i $W^{\\perp}$", "$\\hat{\\mathbf{y}}$ i $W^{\\perp}$ og $\\mathbf{z}$ i $W$", "både $\\hat{\\mathbf{y}}$ og $\\mathbf{z}$ i $W$", "både $\\hat{\\mathbf{y}}$ og $\\mathbf{z}$ i $W^{\\perp}$"],
      explanation: "Projeksjonen $\\hat{\\mathbf{y}}$ er komponenten i $W$, og resten $\\mathbf{z}=\\mathbf{y}-\\hat{\\mathbf{y}}$ står vinkelrett på $W$, altså i $W^{\\perp}$. Oppdelingen er entydig.",
    },
    {
      question: "Gitt $\\operatorname{proj}_W\\mathbf{b}=C\\hat{\\mathbf{x}}=(1,3,5,7)$ og $\\mathbf{b}=(2,1,6,7)$. Avstanden $d(\\mathbf{b},W)$ er:",
      options: ["$\\sqrt6$", "$\\sqrt{84}$", "$\\sqrt{90}$", "$6$"],
      explanation: "Residualet er $\\mathbf{z}=\\mathbf{b}-C\\hat{\\mathbf{x}}=(1,-2,1,0)$, så $d=\\|\\mathbf{z}\\|=\\sqrt{1+4+1}=\\sqrt6$. $\\sqrt{84}=\\|C\\hat{\\mathbf{x}}\\|$ og $\\sqrt{90}=\\|\\mathbf{b}\\|$ er felle-svarene som forveksler avstanden med en av normene.",
    },
    {
      question: "Med indreproduktet $\\langle p,q\\rangle=\\int_{-1}^1 p(t)q(t)\\,dt$ er $\\{1,t\\}$ en ortogonal basis for $\\operatorname{Span}\\{1,t\\}$ fordi:",
      options: ["$\\int_{-1}^1 t\\,dt=0$", "$1$ og $t$ har forskjellig grad", "$\\int_{-1}^1 t^2\\,dt=\\tfrac23$", "de er lineært uavhengige polynomer"],
      explanation: "Ortogonalitet betyr $\\langle 1,t\\rangle=\\int_{-1}^1 t\\,dt=0$, som holder fordi $t$ er odde over det symmetriske intervallet. Ulik grad og lineær uavhengighet garanterer ikke ortogonalitet, og $\\int t^2\\,dt$ er nevneren $\\langle t,t\\rangle$, ikke ortogonalitetssjekken.",
    },
  ],
  'mat1120-6-1': [
    {
      question: "En matrise A er symmetrisk dersom",
      options: ["A er lik sin transponerte, altså A = Aᵀ og aᵢⱼ = aⱼᵢ", "A er invertibel og har utelukkende reelle egenverdier her", "A er kvadratisk og har bare positive tall på diagonalen", "A kan skrives som et produkt PDP⁻¹ med diagonal D her"],
      explanation: "Symmetrisk betyr per definisjon A = Aᵀ. De andre kan gjelde symmetriske matriser, men er ikke definisjonen.",
    },
    {
      question: "Spektralteoremet sier at en reell symmetrisk matrise",
      options: ["er ortogonalt diagonaliserbar: A = PDPᵀ med P ortogonal", "er diagonaliserbar bare når egenverdiene alle er distinkte", "har minst én kompleks egenverdi når dimensjonen er odde", "kan diagonaliseres, men P blir da sjelden en ortogonal matrise"],
      explanation: "Symmetrisk ⇒ reelle egenverdier, ortogonale egenrom og en ortonormal egenbasis, altså A = PDPᵀ med P ortogonal — uansett multiplisitet.",
    },
    {
      question: "For en symmetrisk matrise er egenvektorer til ulike egenverdier",
      options: ["automatisk ortogonale på hverandre uten videre regning", "avhengige, slik at de ikke kan brukes i en egenbasis her", "ortogonale kun etter at man har kjørt Gram–Schmidt på dem", "parallelle når de to egenverdiene har samme fortegn her"],
      explanation: "Spektralteoremet gir at egenrom til ulike egenverdier står vinkelrett gratis; Gram–Schmidt trengs bare innen ett egenrom med multiplisitet.",
    },
    {
      question: "En matrise P kalles ortogonal når",
      options: ["søylene er ortonormale, ekvivalent PᵀP = I og P⁻¹ = Pᵀ", "søylene bare er innbyrdes ortogonale uten krav om lengde", "determinanten er lik null slik at P avbilder ned et rom", "P er symmetrisk og samtidig har determinant lik verdien 1"],
      explanation: "Ortogonal matrise: ortonormale søyler ⇔ PᵀP = I ⇔ P⁻¹ = Pᵀ. Bare ortogonale (ikke normaliserte) søyler er ikke nok.",
    },
    {
      question: "Skrittet som gjør egenvektormatrisen ortogonal, er å",
      options: ["normalisere hver egenvektor ved å dele den på sin lengde", "sortere egenverdiene i D i strengt synkende rekkefølge her", "gange hver egenvektor med den tilhørende egenverdien sin", "bytte fortegn på annenhver søyle slik at det blir balanse"],
      explanation: "P skal ha søyler av lengde 1; derfor normaliseres hver egenvektor u = v/‖v‖. Sortering/skalering med egenverdi endrer ikke ortonormalitet.",
    },
    {
      question: "Har en egenverdi algebraisk multiplisitet 2, må du i tillegg",
      options: ["kjøre Gram–Schmidt på de to egenvektorene i det egenrommet", "forkaste den ene egenvektoren siden bare én kan brukes her", "sjekke om matrisen i det hele tatt er diagonaliserbar først", "gjøre egenrommet ortogonalt mot egenrommet til andre λ selv"],
      explanation: "Vedleggets basis for et egenrom med multiplisitet er ofte ikke-ortogonal; Gram–Schmidt fikser det. Egenrom til andre λ er allerede ortogonale.",
    },
    {
      question: "For en ortogonal matrise P gjelder for alle x at",
      options: ["‖Px‖ = ‖x‖, altså P bevarer lengder (og vinkler)", "‖Px‖ = det(P)·‖x‖ slik at lengden skaleres med det P", "‖Px‖ ≤ ‖x‖ med likhet bare når x er en egenvektor her", "‖Px‖ = ‖x‖² fordi PᵀP virker som en kvadrering her"],
      explanation: "‖Px‖² = xᵀPᵀPx = xᵀx = ‖x‖². Ortogonale matriser er normbevarende (stive bevegelser).",
    },
    {
      question: "Riktig form for ortogonal diagonalisering av en symmetrisk A er",
      options: ["A = PDPᵀ, der P er ortogonal så P⁻¹ = Pᵀ", "A = PDP⁻¹, der P⁻¹ må regnes ut på vanlig måte", "A = P⁻¹DP, der D holder egenvektorene på diagonalen", "A = PᵀDP, med egenverdiene plassert utenfor diagonalen"],
      explanation: "For symmetrisk A med ortonormal P er P⁻¹ = Pᵀ, så A = PDPᵀ. Man slipper å regne invers; PDP⁻¹ er den generelle formen.",
    },
    {
      question: "Determinanten til en ortogonal matrise P er alltid",
      options: ["±1, siden (det P)² = det(PᵀP) = det I = 1", "1, fordi ortogonale matriser alltid er rotasjoner her", "0, ettersom søylene er lineært avhengige av hverandre", "lik produktet av egenverdiene til den symmetriske A her"],
      explanation: "PᵀP = I gir (det P)² = 1, så det P = ±1 (+1 rotasjon, −1 refleksjon).",
    },
    {
      question: "Den spektrale dekomposisjonen av en symmetrisk A er",
      options: ["A = λ₁u₁u₁ᵀ + … + λₙuₙuₙᵀ med ortonormale uᵢ", "A = λ₁ + λ₂ + … + λₙ ganget med identitetsmatrisen I", "A = u₁u₁ᵀ + … + uₙuₙᵀ uten vekting med egenverdiene", "A = P + D + Pᵀ som en sum av de tre byggematrisene her"],
      explanation: "Utskrevet søyle for søyle blir A = Σλᵢuᵢuᵢᵀ — en vektet sum av rang-1-projeksjoner uᵢuᵢᵀ langs egenvektorene.",
    },
    {
      question: "En rask kontroll på at du har bygget P riktig, er å sjekke at",
      options: ["PᵀP = I, altså at søylene er ortonormale", "PᵀP = D, altså at produktet gir diagonalmatrisen", "P + Pᵀ = 2A, som følger av at A er symmetrisk her", "det P = det A, siden begge har samme egenverdier her"],
      explanation: "Ortogonalitetstesten PᵀP = I fanger både glemt normalisering og glemt Gram–Schmidt. De andre likhetene er generelt ikke sanne.",
    },
    {
      question: "Egenvektorene (1,1,0)ᵀ og (1,0,1)ᵀ i samme egenrom skal",
      options: ["ortogonaliseres med Gram–Schmidt før de normaliseres", "brukes direkte som søyler, for de er allerede ortogonale", "erstattes med (1,0,0)ᵀ og (0,1,0)ᵀ som standardvektorer", "adderes til én vektor (2,1,1)ᵀ som representerer rommet"],
      explanation: "Skalarproduktet (1,1,0)·(1,0,1) = 1 ≠ 0, så de er ikke ortogonale; Gram–Schmidt gir (1,1,0) og (1,−1,2), deretter normaliseres.",
    },
    {
      question: "En reell symmetrisk matrise har egenverdier som",
      options: ["alltid er reelle, aldri komplekse par", "kan være komplekse når matrisen er 3×3 eller større", "må være positive fordi matrisen er symmetrisk her", "alltid er heltall når matriseelementene er heltall"],
      explanation: "Spektralteoremet garanterer reelle egenverdier for reell symmetrisk A. Fortegn og heltallighet er ikke garantert.",
    },
    {
      question: "En symmetrisk matrise er diagonaliserbar",
      options: ["alltid, fordi hver egenverdi har fullt egenrom (geo = alg)", "bare hvis den også er triangulær med kjente egenverdier", "bare når alle egenverdiene tilfeldigvis er forskjellige", "sjelden, siden multiplisitet ofte gir for lite egenrom her"],
      explanation: "Ved spektralteoremet er geo = alg for hver egenverdi, så en symmetrisk matrise er alltid (ortogonalt) diagonaliserbar.",
    },
    {
      question: "At A er ortogonalt diagonaliserbar (A = PDPᵀ, P ortogonal) medfører at",
      options: ["A er symmetrisk, siden Aᵀ = (PDPᵀ)ᵀ = PDPᵀ = A", "A er invertibel, ettersom P og D begge er invertible her", "A har utelukkende positive egenverdier på diagonalen i D", "A er en projeksjonsmatrise med egenverdier bare 0 og 1"],
      explanation: "Transponering gir Aᵀ = A, så ortogonalt diagonaliserbar ⇔ symmetrisk. Invertibilitet og fortegn på egenverdier følger ikke.",
    },
    {
      question: "Matrisen uuᵀ for en enhetsvektor u er",
      options: ["projeksjonen ned på linjen langs u, med rang 1", "identitetsmatrisen skalert med lengden av u her", "en skjev (antisymmetrisk) matrise med spor lik null", "invertibel med invers uᵀu lik tallet 1 på diagonalen"],
      explanation: "uuᵀ er projeksjonsmatrisen på span{u}: (uuᵀ)x = (u·x)u. Den er symmetrisk, rang 1, med egenverdier 1,0,…,0 — altså ikke invertibel.",
    },
    {
      question: "Egenvektoren (2,1)ᵀ normaliseres til",
      options: ["(1/√5)(2,1)ᵀ, siden lengden er √5", "(1/5)(2,1)ᵀ, siden lengden er 5 her", "(1/3)(2,1)ᵀ, siden 2 + 1 = 3 her", "(2,1)ᵀ selv, fordi den allerede har lengde 1"],
      explanation: "‖(2,1)‖ = √(4+1) = √5, så enhetsvektoren er (1/√5)(2,1)ᵀ. Del på lengden, ikke på summen av komponentene.",
    },
    {
      question: "Gram–Schmidt-vektorene inne i et egenrom er fortsatt egenvektorer fordi",
      options: ["en lineærkombinasjon av egenvektorer med samme λ er egenvektor for λ", "Gram–Schmidt bare bytter rekkefølge på de opprinnelige vektorene", "prosessen legger til egenvektoren for en annen egenverdi her", "normalisering alene ikke endrer hvilken egenverdi som gjelder"],
      explanation: "Egenrommet Eλ er lukket under lineærkombinasjon, så Gram–Schmidt-vektorene ligger fortsatt i Eλ og er egenvektorer for samme λ; D endres ikke.",
    },
  ],
  'mat1120-6-2': [
    {
      question: "En kvadratisk form Q(x) skrives på matriseform som",
      options: ["xᵀAx med en symmetrisk matrise A", "Ax der A er en vilkårlig kvadratisk matrise", "xᵀx skalert med sporet til matrisen A", "Pᵀx der P er en ortogonal basismatrise her"],
      explanation: "Q(x)=xᵀAx med symmetrisk A; symmetrisk A er entydig bestemt av formen.",
    },
    {
      question: "For Q = 2x₁² + 5x₂² + 6x₁x₂ er den symmetriske matrisen A lik",
      options: ["[[2,3],[3,5]] — kryssleddet 6 deles på 2", "[[2,6],[0,5]] — hele 6 legges over diagonalen", "[[2,6],[6,5]] — kryssleddet 6 settes i begge", "[[2,3],[0,5]] — bare øvre trekant fylles ut her"],
      explanation: "Kryssleddskoeffisienten 6 deles: a₁₂=a₂₁=6/2=3. Å legge hele 6 (usymmetrisk) eller 6 i begge (dobler kryssleddet) er begge feil.",
    },
    {
      question: "En symmetrisk matrise A er positiv definit hvis og bare hvis",
      options: ["alle egenverdiene til A er strengt positive", "alle diagonalelementene i A er strengt positive", "determinanten til A er strengt positiv, uansett", "sporet til A er større enn determinanten til A her"],
      explanation: "Posdef ⇔ alle λᵢ>0. Positiv diagonal eller positiv determinant er nødvendige, men ikke tilstrekkelige (en 2×2 med det>0 kan være negdef).",
    },
    {
      question: "En kvadratisk form med egenverdier 3 og −2 er",
      options: ["indefinit, siden egenverdiene har motsatt fortegn", "positiv definit, fordi den største egenverdien er 3", "positiv semidefinit, ettersom summen 3 − 2 = 1 > 0", "negativ definit, fordi en av egenverdiene er negativ"],
      explanation: "Blandet fortegn (3>0 og −2<0) ⇒ indefinit; formen skifter fortegn og origo er et sadelpunkt.",
    },
    {
      question: "En matrise med egenverdier 0, 3 og 5 gir en form som er",
      options: ["positiv semidefinit (alle ≥ 0, én er 0)", "positiv definit, siden ingen egenverdi er negativ", "indefinit, fordi egenverdien 0 teller som negativ", "negativ semidefinit, ettersom en egenverdi er 0 her"],
      explanation: "Alle egenverdier ≥0 og minst én er 0 ⇒ positiv semidefinit (ikke ekte definit — 0-egenverdien gir en flat retning).",
    },
    {
      question: "Etter variabelskiftet x = Py (P ortogonal fra spektralteoremet) blir Q lik",
      options: ["λ₁y₁² + λ₂y₂² + … + λₙyₙ² uten kryssledd", "y₁² + y₂² + … + yₙ² multiplisert med sporet av A", "λ₁y₁ + λ₂y₂ + … + λₙyₙ, altså et lineært uttrykk", "et uttrykk som fortsatt inneholder alle kryssleddene"],
      explanation: "Q = yᵀ(PᵀAP)y = yᵀDy = Σλᵢyᵢ². Det ortogonale variabelskiftet fjerner kryssleddene — hovedaksetransformasjonen.",
    },
    {
      question: "Matrisen [[4,−2],[−2,1]] har egenverdier 0 og 5 og er derfor",
      options: ["positiv semidefinit, tross positiv diagonal", "positiv definit, siden begge diagonalelementene er positive", "indefinit, fordi elementet utenfor diagonalen er negativt", "negativ definit, ettersom en egenverdi er lik null her"],
      explanation: "Egenverdiene 0,5 ⇒ positiv semidefinit; faktisk Q=(2x₁−x₂)². Diagonalen (4,1>0) lurer — bare egenverdiene avgjør.",
    },
    {
      question: "At en positiv definit matrise B er invertibel, følger av at",
      options: ["det B = produktet av egenverdiene er positivt, altså ≠ 0", "B er symmetrisk, og symmetriske matriser er alltid invertible", "B har bare positive tall på plassene utenfor diagonalen sin", "B er lik sin egen transponerte, så inversen er transponerten"],
      explanation: "Alle λᵢ>0 ⇒ det B=Πλᵢ>0≠0 ⇒ invertibel. Symmetri alene garanterer ikke invertibilitet (en egenverdi kan være 0).",
    },
    {
      question: "Er B posdef, er B⁻¹",
      options: ["også posdef, med egenverdier 1/λᵢ > 0 og samme egenvektorer", "generelt indefinit, siden invertering kan snu fortegn", "posdef bare når B i tillegg er en diagonal matrise her", "ikke nødvendigvis symmetrisk, så den kan ikke klassifiseres"],
      explanation: "B=PDPᵀ ⇒ B⁻¹=PD⁻¹Pᵀ med egenverdier 1/λᵢ>0; B⁻¹ er symmetrisk med positive egenverdier, altså posdef.",
    },
    {
      question: "For en symmetrisk A gjelder ulikheten",
      options: ["xᵀAx ≤ λmax‖x‖² for alle x", "xᵀAx ≤ (spor A)‖x‖² for alle x her", "xᵀAx ≥ λmax‖x‖² for alle x som ikke er null", "xᵀAx = λmax‖x‖² for absolutt alle vektorer x"],
      explanation: "Med x=Py er Q=Σλᵢyᵢ² ≤ λmax·Σyᵢ² = λmax‖x‖². Likhet krever at x er egenvektor for λmax.",
    },
    {
      question: "For en vilkårlig matrise C er A = CᵀC alltid",
      options: ["symmetrisk og positiv semidefinit", "symmetrisk og alltid positiv definit uansett C", "indefinit når C har flere rader enn kolonner", "invertibel så lenge C ikke er nullmatrisen her"],
      explanation: "(CᵀC)ᵀ=CᵀC, og xᵀCᵀCx=‖Cx‖²≥0. Den er posdef ⇔ Nul C={0} (uavhengige søyler), ellers bare semidefinit.",
    },
    {
      question: "Klassifiseringen av en kvadratisk form leses av",
      options: ["fortegnene på egenverdiene til A", "fortegnene på diagonalelementene i A", "fortegnet på determinanten til A alene", "fortegnet på det største kryssleddet i Q"],
      explanation: "Etter x=Py er Q=Σλᵢyᵢ², så egenverditegnene avgjør alt. Diagonal/kryssledd kan gi feil svar.",
    },
    {
      question: "Origo er et sadelpunkt for Q nøyaktig når A er",
      options: ["indefinit (både positive og negative egenverdier)", "positiv definit (alle egenverdier positive) her", "positiv semidefinit med minst én egenverdi lik 0", "negativ definit (alle egenverdier negative) her"],
      explanation: "Indefinit ⇒ Q vokser i noen retninger og synker i andre ⇒ sadelpunkt. Definit gir ekstremum, semidefinit gir svakt ekstremum.",
    },
    {
      question: "Diagonalmatrisen [[2,0],[0,−3]] gir en form som er",
      options: ["indefinit, siden diagonalen (= egenverdiene) er 2 og −3", "positiv definit, fordi det første diagonalelementet er 2", "negativ definit, ettersom −3 dominerer uttrykket her", "positiv semidefinit, siden 2 − 3 er tilnærmet lik 0 her"],
      explanation: "For en diagonalmatrise ER diagonalen egenverdiene: 2>0 og −3<0 ⇒ indefinit.",
    },
    {
      question: "I et posdef-bevis er første steg sensor vil se, å",
      options: ["nevne at B er symmetrisk (B = Bᵀ) før spektralteoremet brukes", "regne ut determinanten til B numerisk fra vedlegget først", "vise at alle diagonalelementene i B er strengt positive", "sette opp den karakteristiske likningen og løse den for hånd"],
      explanation: "Forutsetningssjekken B=Bᵀ må nevnes før spektralteoremet B=PDPᵀ tas i bruk; deretter argumenteres via egenverditegnene.",
    },
    {
      question: "Matrisen −A har egenverdier",
      options: ["−λᵢ, så A negdef ⇔ −A posdef", "1/λᵢ, så −A er inversen av A her", "λᵢ², så −A alltid er positiv semidefinit", "|λᵢ|, så −A alltid blir positiv definit her"],
      explanation: "Egenverdiene til −A er −λᵢ. Derfor snur klassifiseringen: A negdef ⇔ −A posdef — et nyttig reduksjonstriks.",
    },
    {
      question: "For en symmetrisk 2×2-matrise med det A < 0 er formen",
      options: ["indefinit, siden λ₁λ₂ = det A < 0 gir motsatt fortegn", "positiv definit, fordi determinanten måler «størrelsen»", "positiv semidefinit, ettersom det < 0 betyr én λ = 0", "negativ definit når i tillegg sporet er negativt her"],
      explanation: "det A = λ₁λ₂ < 0 tvinger motsatt fortegn på egenverdiene ⇒ indefinit, uansett spor.",
    },
    {
      question: "En egenverdi lik 0 i en ellers positiv form betyr at",
      options: ["formen er positiv semidefinit — flat langs egenrommet til 0", "formen er positiv definit med et ekstra strengt minimum", "matrisen ikke lenger er symmetrisk, så teorien svikter", "formen automatisk blir indefinit på grunn av nullen her"],
      explanation: "λ=0 gir en retning der Q=0 for x≠0, altså positiv semidefinit (ikke definit). Symmetrien er uendret.",
    },
  ],
  'mat1120-6-3': [
    {
      question: "Rayleigh-teoremet sier at maksimum av xᵀAx over enhetssfæren ‖x‖=1 er",
      options: ["λmax, oppnådd i egenvektoren til den største egenverdien", "sporet til A, oppnådd i vektoren med bare like koordinater", "λmin, siden den minste egenverdien styrer størrelsen her", "produktet av egenverdiene, oppnådd i en vilkårlig vektor"],
      explanation: "Teorem 6 §7.3: max på enhetssfæren er λmax, nådd i uₘₐₓ. Minimum er λmin i uₘᵢₙ.",
    },
    {
      question: "Rayleigh-kvotienten R(x) for en symmetrisk A er definert som",
      options: ["(xᵀAx)/(xᵀx) for x ulik nullvektoren", "(xᵀx)/(xᵀAx) for alle vektorer x her", "xᵀAx uten noen normering i nevneren", "(Ax)/(x) tolket komponentvis for hver x"],
      explanation: "R(x)=(xᵀAx)/(xᵀx). På enhetssfæren blir nevneren 1, så R=xᵀAx; alltid mellom λmin og λmax.",
    },
    {
      question: "Uten betingelsen ‖x‖=1 er xᵀAx (for indefinit A)",
      options: ["ubegrenset — man kan skalere x og få så store verdier man vil", "fortsatt begrenset oppad av den største egenverdien λmax", "alltid lik null fordi de positive og negative leddene kanselleres", "lik sporet av A uansett hvilken vektor x man setter inn her"],
      explanation: "xᵀAx skalerer som ‖x‖², så uten enhetsbetingelsen er den ubegrenset. Rayleigh gjelder på enhetssfæren (eller for kvotienten).",
    },
    {
      question: "Det ortogonale variabelskiftet x = Py brukes til å",
      options: ["fjerne kryssleddet, så xᵀAx = λ₁y₁² + λ₂y₂²", "gjøre alle egenverdiene like slik at kurven blir en sirkel", "flytte kurven bort fra origo til et nytt sentrum her", "bytte om på de to variablene x₁ og x₂ i uttrykket her"],
      explanation: "Med ortogonal P (egenvektorene) blir yᵀ(PᵀAP)y = yᵀDy = Σλᵢyᵢ² — kryssleddet forsvinner. Sentrum blir værende i origo.",
    },
    {
      question: "Kurven xᵀAx = c (c > 0) er en ellipse hvis og bare hvis",
      options: ["begge egenverdiene til A er positive (A er posdef)", "begge egenverdiene til A har motsatt fortegn her", "den ene egenverdien til A er lik null nøyaktig", "determinanten til A er negativ, uansett fortegn her"],
      explanation: "Begge λ>0 (posdef) ⇒ ellipse. Motsatt fortegn ⇒ hyperbel; én λ=0 ⇒ parabel/degenerert.",
    },
    {
      question: "En kurve xᵀAx = c der A har egenverdier 4 og −2 er en",
      options: ["hyperbel, siden egenverdiene har motsatt fortegn", "ellipse, fordi den største egenverdien 4 dominerer", "parabel, ettersom differansen 4 − 2 er positiv her", "sirkel, siden tallverdiene 4 og 2 ligger nær hverandre"],
      explanation: "Motsatt fortegn (4>0, −2<0) ⇒ indefinit ⇒ hyperbel.",
    },
    {
      question: "For hyperbelen y₁²/a² − y₂²/b² = 1 er asymptotene",
      options: ["y₂ = ±(b/a)·y₁ gjennom origo", "y₂ = ±(a/b)·y₁ gjennom origo her", "de to koordinataksene y₁ og y₂ selv", "y₂ = ±1 uansett verdien av y₁ her"],
      explanation: "Standardhyperbelen har asymptoter y₂ = ±(b/a)y₁; grenene åpner langs y₁-aksen (toppunkter (±a,0)).",
    },
    {
      question: "En skisse av kjeglesnittet skal tegnes i",
      options: ["hovedaksene y₁, y₂ (langs egenvektorene til A)", "de opprinnelige x₁, x₂-aksene uten dreining her", "et system der begge aksene er skalert til lengde 1", "polarkoordinater med vinkel målt fra x₁-aksen her"],
      explanation: "Etter x=Py ligger de naturlige aksene langs egenvektorene — hovedaksene y₁,y₂. Skisser der, ikke i de vridde x-aksene.",
    },
    {
      question: "For ellipsen λ₁y₁² + λ₂y₂² = c er halvaksen langs yᵢ lik",
      options: ["√(c/λᵢ), så minste egenverdi gir lengste akse", "√(c·λᵢ), så største egenverdi gir lengste akse", "c/λᵢ uten kvadratrot i uttrykket her", "λᵢ/c, som er stor når egenverdien er stor her"],
      explanation: "Del på c: yᵢ²/(c/λᵢ)=1, så halvaksen er √(c/λᵢ). Minste λ gir lengste akse (formen er flatest der).",
    },
    {
      question: "Hvis A har en egenverdi lik 0, er kurven xᵀAx = c typisk en",
      options: ["parabel eller degenerert kurve (par av linjer / tom)", "ellipse med to like lange halvakser, altså en sirkel", "hyperbel med asymptoter som faller sammen med aksene", "ellipse som er trukket uendelig langt ut i én retning"],
      explanation: "Én λ=0 (semidefinit) ⇒ annengradsdelen degenererer: parabel (med lineærledd) eller par av linjer / tom mengde. Kurven lukker seg ikke.",
    },
    {
      question: "Krever vi i tillegg til ‖x‖=1 at x ⊥ u₁ (egenvektor for λmax), blir maksimum av xᵀAx",
      options: ["λ₂, den nest største egenverdien (oppnådd i u₂)", "λmax fortsatt, siden bibetingelsen ikke endrer noe", "λmin, fordi vi nå er tvunget helt bort fra toppen", "gjennomsnittet av λ₁ og λ₂ på grunn av betingelsen"],
      explanation: "Teorem 7 §7.3: ortogonalitet mot u₁ skreller vekk λ₁, så maks blir nest største egenverdi λ₂, nådd i u₂.",
    },
    {
      question: "At det ortogonale variabelskiftet bevarer lengder (‖x‖=‖y‖) skyldes at",
      options: ["P er ortogonal, så ‖Py‖ = ‖y‖", "P er diagonal med enere på diagonalen her", "egenverdiene alle har absoluttverdi lik 1 her", "kryssleddet er fjernet fra den kvadratiske formen"],
      explanation: "Ortogonal P er normbevarende: ‖Py‖²=yᵀPᵀPy=yᵀy=‖y‖². Derfor gir y-bildet kurvens sanne størrelse.",
    },
    {
      question: "Egenvektoren der Rayleigh-maksimum oppnås, må",
      options: ["normaliseres til lengde 1 for å ligge på enhetssfæren", "ganges med λmax før den settes inn i uttrykket", "være ortogonal på alle de andre egenvektorene bare", "velges tilfeldig blant vektorene i det største egenrommet"],
      explanation: "Maksimum nås på enhetssfæren, så vektoren normaliseres. (Er egenrommet flerdimensjonalt, gjelder enhver enhetsvektor der.)",
    },
    {
      question: "Klassifiseringen ellipse/hyperbel/parabel svarer til at A er",
      options: ["posdef/indefinit/semidefinit", "invertibel/singulær/triangulær her", "diagonal/symmetrisk/ortogonal her", "2×2/3×3/større enn 3×3 her"],
      explanation: "Posdef ⇒ ellipse, indefinit ⇒ hyperbel, semidefinit (én λ=0) ⇒ parabel/degenerert — definittheten forutsier kurveformen.",
    },
    {
      question: "Ulikheten xᵀAx ≤ λmax‖x‖² for symmetrisk A er",
      options: ["Rayleigh skrevet uten enhetsbetingelsen, med likhet i uₘₐₓ", "sann bare for positivt definite matriser A her", "en likhet for alle x, ikke en ulikhet i det hele tatt", "det motsatte av det som gjelder, siden ≤ skal være ≥"],
      explanation: "Med x=Py er Σλᵢyᵢ² ≤ λmax·Σyᵢ² = λmax‖x‖²; likhet når x er egenvektor for λmax. Gjelder alle symmetriske A.",
    },
    {
      question: "Standardformen til 4y₁² + y₂² = 4 er",
      options: ["y₁²/1 + y₂²/4 = 1, en ellipse med halvakser 1 og 2", "y₁²/4 + y₂²/1 = 1, en ellipse med halvakser 2 og 1", "y₁² − y₂²/4 = 1, en hyperbel som åpner langs y₁", "y₁²/4 − y₂² = 1, en hyperbel med toppunkt i y₁ = 2"],
      explanation: "Del på 4: y₁²/1 + y₂²/4 = 1. Halvakse √1=1 langs y₁ og √4=2 langs y₂ — begge ledd positive, altså ellipse.",
    },
  ],
  'mat1120-6-4': [
    {
      question: "Første steg i symmetrisk-kjeden er å",
      options: ["sjekke A = Aᵀ og navngi spektralteoremet", "regne ut determinanten til A fra vedlegget først", "sette opp den kvadratiske formen i koordinater", "finne den største egenverdien for Rayleigh-delen"],
      explanation: "Symmetrien A=Aᵀ gir den navngitte begrunnelsen (spektralteoremet ⇒ A=PDPᵀ) som resten av kjeden hviler på.",
    },
    {
      question: "Den ene kontrollen som fanger både glemt normalisering og glemt Gram–Schmidt, er",
      options: ["å sjekke at PᵀP = I", "å sjekke at det P = det A", "å sjekke at spor P = spor D", "å sjekke at P er triangulær"],
      explanation: "PᵀP=I krever ortonormale søyler; både unormaliserte og ikke-ortogonale søyler bryter dette.",
    },
    {
      question: "I et egenrom med multiplisitet ≥ 2 er vedleggets basisvektorer",
      options: ["ofte ikke ortogonale, så du må kjøre Gram–Schmidt der", "alltid allerede ortonormale, så ingenting mer trengs her", "egenvektorer for ulike egenverdier og dermed ortogonale", "lineært avhengige, så du forkaster den ene av dem her"],
      explanation: "Innen ett egenrom er vedleggets basis ofte ikke-ortogonal; Gram–Schmidt gir ortogonalitet uten å forlate egenrommet.",
    },
    {
      question: "Kryssleddet 4x₁x₂ i en kvadratisk form gir matriseelementene",
      options: ["a₁₂ = a₂₁ = 2", "a₁₂ = a₂₁ = 4 her", "a₁₂ = 4 og a₂₁ = 0", "a₁₂ = a₂₁ = 8 her"],
      explanation: "Kryssleddskoeffisienten deles på 2: a₁₂ = a₂₁ = 4/2 = 2.",
    },
    {
      question: "Definittheten til en kvadratisk form leses av",
      options: ["fortegnene på egenverdiene til A", "fortegnene på diagonalen til A her", "fortegnet på det største kryssleddet", "determinanten alene, uansett fortegn"],
      explanation: "Etter x=Py er Q=Σλᵢyᵢ², så egenverditegnene avgjør. Diagonalen kan lure (posdef diagonal, semidef form).",
    },
    {
      question: "Rayleigh-maksimum av xᵀAx over ‖x‖=1 er",
      options: ["λmax, oppnådd i egenvektoren til den største egenverdien", "λmin, siden den minste egenverdien begrenser formen", "sporet av A, som er summen av alle egenverdiene her", "gjennomsnittet av den største og minste egenverdien her"],
      explanation: "Teorem 6 §7.3: maks = λmax i uₘₐₓ. Bruk av λmin er nettopp den vanlige fellen.",
    },
    {
      question: "For case-matrisen med egenverdier 3, 3 og 9 er den kvadratiske formen",
      options: ["positiv definit, siden alle egenverdiene er positive", "indefinit, fordi den doble egenverdien 3 gjentas her", "positiv semidefinit, ettersom to egenverdier er like", "negativ definit, siden 9 er stor sammenlignet med 3"],
      explanation: "Alle egenverdier (3,3,9) er >0 ⇒ posdef. Multiplisitet påvirker ikke fortegnsklassifiseringen.",
    },
    {
      question: "At egenverdiene fra første deloppgave også gir definitthet og Rayleigh-verdier, er et eksempel på",
      options: ["delpunktgjenbruk — samme matrise bærer hele oppgaven", "at oppgaven har en skjult regnefeil man må lete etter", "at egenverdiene må regnes på nytt for hver deloppgave", "at Rayleigh og definitthet er helt uavhengige tema her"],
      explanation: "Oppgave 4 er kjedet: samme A og egenverdier gjenbrukes gjennom deloppgavene — å se det sparer tid.",
    },
    {
      question: "En kurve xᵀAx = c med A posdef er en",
      options: ["ellipse i hovedaksene y₁, y₂", "hyperbel med to grener langs y₁", "parabel som åpner langs y₂ her", "rett linje gjennom origo her"],
      explanation: "Posdef (begge λ>0) ⇒ ellipse. Hyperbel krever indefinit, parabel/degenerert krever en λ=0.",
    },
    {
      question: "Svarene i symmetrisk-kjeden skal oppgis",
      options: ["eksakt, med √2, brøker og heltall — ikke desimaltilnærming", "som desimaltall med minst fire siffer for presisjonens skyld", "kun som egenverdier, uten de tilhørende egenvektorene her", "avrundet til nærmeste heltall for å forenkle føringen her"],
      explanation: "Eksakte svar; et urent desimalsvar signaliserer regnefeil eller feil vedleggsavlesning.",
    },
    {
      question: "En P bygd av uortogonaliserte egenvektorer i samme egenrom er",
      options: ["ikke ortogonal, så A = PDPᵀ blir feil", "fortsatt ortogonal, siden egenvektorene er uavhengige", "gyldig så lenge egenverdiene er positive tall her", "riktig hvis man i stedet bruker A = PDP⁻¹ overalt"],
      explanation: "Uortogonaliserte (og/eller uormaliserte) søyler gir PᵀP≠I. Merk: med generell A=PDP⁻¹ ville uavhengige søyler holdt, men da må P⁻¹ regnes.",
    },
    {
      question: "Skissen av et kjeglesnitt skal tegnes i",
      options: ["hovedaksene y₁, y₂ langs egenvektorene", "de opprinnelige x₁, x₂-aksene uendret", "et logaritmisk koordinatsystem her", "polarkoordinater med origo som pol her"],
      explanation: "Etter x=Py ligger de naturlige aksene langs egenvektorene; skissér i y₁,y₂.",
    },
    {
      question: "Egenverdiene til B⁻¹ når B er posdef med egenverdier 2, 5, 10, er",
      options: ["1/2, 1/5 og 1/10, alle positive", "−2, −5 og −10 med snudd fortegn her", "4, 25 og 100 som kvadrater av egenverdiene", "2, 5 og 10, altså uendret ved invertering"],
      explanation: "B=PDPᵀ ⇒ B⁻¹=PD⁻¹Pᵀ med egenverdier 1/λᵢ, samme egenvektorer; alle >0, så B⁻¹ er også posdef.",
    },
    {
      question: "Symmetriseringen deler kryssleddet på 2 fordi",
      options: ["bare summen a_ij + a_ji bidrar til xᵀAx", "determinanten ellers blir dobbelt så stor her", "egenverdiene ellers blir komplekse tall her", "diagonalen ellers ikke blir positiv nok her"],
      explanation: "xᵀAx = Σa_ii x_i² + Σ(a_ij+a_ji)x_i x_j; bare summen teller, så a_ij=a_ji=k/2 gir symmetrisk A med samme form.",
    },
    {
      question: "Å navngi «ved Rayleigh (Teorem 6 §7.3)» i besvarelsen",
      options: ["premieres, siden teoremnavning er del av føringsstandarden", "trekker ned, fordi sensor vil se selve utregningen i stedet", "er unødvendig så lenge tallsvaret er riktig avrundet her", "gjelder bare for kjeglesnitt, ikke for Rayleigh-oppgaver her"],
      explanation: "Teoremnavning bærer argumentet og premieres i sensuren; riktig svar uten begrunnelse gir lite uttelling.",
    },
    {
      question: "Minimum av xᵀAx over ‖x‖=1 for case-matrisen (egenverdier 3, 3, 9) er",
      options: ["3, oppnådd for enhver enhetsvektor i egenrommet til λ = 3", "9, siden den største egenverdien styrer også minimum her", "0, fordi den doble egenverdien nuller ut bidraget her", "6, som er gjennomsnittet av de tre egenverdiene her"],
      explanation: "Rayleigh-min = λmin = 3, nådd i hele det (to-dimensjonale) egenrommet E₃.",
    },
  ],
  'mat1120-7-1': [
    {
      question: "En singulærverdi til A er definert som",
      options: ["kvadratroten √λ av en egenverdi λ til matrisen AᵀA", "en vilkårlig egenverdi λ til selve matrisen A her", "determinanten til A opphøyd i en halv, altså √det A", "summen av egenverdiene til AᵀA delt på antall rader"],
      explanation: "Per definisjon er σᵢ=√λᵢ der λᵢ er egenverdiene til AᵀA. De er ikke egenverdiene til A selv, og heller ikke knyttet til det A på denne måten.",
    },
    {
      question: "Egenverdiene til AᵀA er alltid",
      options: ["ikke-negative, siden λ=‖Av‖² for en enhetsegenvektor v", "strengt positive uansett hvilken matrise A man starter med", "hele tall når elementene i matrisen A selv er hele tall", "like egenverdiene til A opphøyd i andre potens her nå"],
      explanation: "For enhetsegenvektor v er λ=vᵀAᵀAv=‖Av‖²≥0. De kan være 0 (rangdefekt), så ikke strengt positive; heltall/kobling til A² gjelder ikke generelt.",
    },
    {
      question: "Singulærverdiene i Σ skal alltid ordnes",
      options: ["synkende, altså σ₁≥σ₂≥…≥0 langs diagonalen i Σ", "stigende, med den minste singulærverdien øverst her", "i den rekkefølgen vedlegget tilfeldigvis oppgir dem", "etter fortegn, med de positive samlet nederst i Σ"],
      explanation: "Konvensjonen er synkende: σ₁≥σ₂≥…≥0. Da må V, Σ og U matches til samme rekkefølge for at A=UΣVᵀ skal stemme.",
    },
    {
      question: "Høyresingulærvektorene (søylene i V) er",
      options: ["en ortonormal egenbasis for den symmetriske matrisen AᵀA", "egenvektorene til A selv, uansett om A er kvadratisk", "de samme som venstresingulærvektorene i matrisen U her", "søylene i A etter at de er blitt normalisert til lengde 1"],
      explanation: "V består av ortonormale egenvektorer til AᵀA (spektralteoremet på AᵀA). De er verken egenvektorer til A eller lik U i sin alminnelighet.",
    },
    {
      question: "Venstresingulærvektorene beregnes ved formelen",
      options: ["uᵢ=(1/σᵢ)Avᵢ for hver positiv singulærverdi σᵢ>0", "uᵢ=σᵢ·Avᵢ ved å gange vektoren Avᵢ med σᵢ her", "uᵢ=Aᵀvᵢ uten noen normaliserende faktor foran her", "uᵢ=vᵢ, altså de er de samme som høyrevektorene her"],
      explanation: "uᵢ=(1/σᵢ)Avᵢ for σᵢ>0. Faktoren 1/σᵢ normaliserer siden ‖Avᵢ‖=σᵢ. Å gange med σᵢ eller droppe faktoren gir ikke enhetsvektorer.",
    },
    {
      question: "Faktoren 1/σᵢ i uᵢ=(1/σᵢ)Avᵢ er med for å",
      options: ["gjøre uᵢ til en enhetsvektor, siden ‖Avᵢ‖=σᵢ nettopp", "sortere singulærverdiene i riktig synkende rekkefølge", "sørge for at matrisen A blir symmetrisk i etterkant nå", "bytte fortegn på vektoren slik at uᵢ peker riktig vei"],
      explanation: "‖Avᵢ‖=σᵢ, så deling på σᵢ gir ‖uᵢ‖=1. Uten faktoren blir U ikke ortogonal. Den har ingenting med sortering eller symmetri å gjøre.",
    },
    {
      question: "En singulærverdidekomposisjon A=UΣVᵀ finnes",
      options: ["for enhver matrise A, kvadratisk eller ikke, uansett rang", "bare når matrisen A er kvadratisk og diagonaliserbar her", "bare når A er symmetrisk med reelle egenverdier overalt", "bare når alle singulærverdiene til A er strengt positive"],
      explanation: "SVD finnes for alle m×n-matriser, i motsetning til diagonalisering (krever egenvektorbasis) og ortogonal diagonalisering (krever symmetri).",
    },
    {
      question: "Matrisene U og V i A=UΣVᵀ er begge",
      options: ["ortogonale, altså UᵀU=I og VᵀV=I med ortonormale søyler", "diagonale med singulærverdiene plassert langs diagonalen", "øvre triangulære slik at produktet blir enkelt å regne", "like hverandre, siden A alltid er en symmetrisk matrise"],
      explanation: "U og V har ortonormale søyler (UᵀU=I, VᵀV=I). Σ er den «diagonale»; U=V bare i spesialtilfeller (symmetrisk posdef A).",
    },
    {
      question: "Rangen til A leses av SVD-en som",
      options: ["antallet singulærverdier σᵢ som er strengt større enn 0", "summen av alle singulærverdiene til matrisen A samlet", "den største singulærverdien σ₁ i dekomposisjonen dens", "differansen m−n mellom antall rader og antall søyler i A"],
      explanation: "rang A = #{σᵢ>0}. Nullsingulærverdier svarer til retninger A kollapser og teller ikke; sum eller σ₁ gir ikke rangen.",
    },
    {
      question: "Uttrykket max{‖Ax‖ : ‖x‖=1} er lik",
      options: ["σ₁, den største singulærverdien, oppnådd i retningen v₁", "σ₁², altså kvadratet av den største singulærverdien her", "λ₁, den største egenverdien til A opphøyd i andre her", "summen σ₁+σ₂ av de to største singulærverdiene til A"],
      explanation: "Ved Rayleigh på AᵀA er max‖Ax‖=σ₁, i x=v₁. Svaret er σ₁ selv, ikke σ₁²=λ₁, og ikke en sum.",
    },
    {
      question: "At max‖Ax‖=σ₁ følger fordi",
      options: ["‖Ax‖²=xᵀAᵀAx er en Rayleigh-kvotient for matrisen AᵀA", "‖Ax‖ er lineær i x og derfor maksimal i en hjørnevektor", "A alltid strekker enhver vektor med nøyaktig samme faktor", "σ₁ per definisjon er gjennomsnittet av alle strekkfaktorene"],
      explanation: "‖Ax‖²=xᵀAᵀAx, som maksimeres av største egenverdi λ₁=σ₁² til AᵀA i egenvektoren v₁ (Rayleigh). Altså max‖Ax‖=σ₁.",
    },
    {
      question: "Når A har færre positive σᵢ enn antall rader m, må U",
      options: ["utvides med ekstra ortonormale søyler til en basis for ℝᵐ", "kuttes ned slik at bare de positive retningene står igjen", "erstattes helt av identitetsmatrisen I av passende størrelse", "transponeres for at produktet UΣVᵀ skal få riktig form"],
      explanation: "De manglende søylene fylles med en ortonormal basis for komplementet (de ganges med 0 i Σ), slik at U blir ortogonal.",
    },
    {
      question: "For en symmetrisk matrise A med egenverdi −1 blir σ",
      options: ["|−1|=1, og fortegnet flytter seg over i matrisen U her", "−1, altså singulærverdien arver fortegnet til egenverdien", "0, siden negative egenverdier ikke gir singulærverdier", "kompleks, fordi kvadratroten av et negativt tall er det"],
      explanation: "σ=√(λ av AᵀA)=|λ av A|=1. Singulærverdier er ≥0; fortegnet til −1 dukker opp som uᵢ=−vᵢ i U.",
    },
    {
      question: "Σ har samme størrelse som A, nemlig",
      options: ["m×n, med σᵢ på diagonalen og nullrader/-søyler ellers", "n×n, altså alltid kvadratisk uansett formen på A her", "m×m, med singulærverdiene gjentatt langs hele diagonalen", "1×1, siden bare den største singulærverdien betyr noe"],
      explanation: "Σ er m×n som A. Er A ikke kvadratisk, får Σ en ekstra nullrad eller -søyle for å passe formen.",
    },
    {
      question: "AᵀA og AAᵀ deler",
      options: ["de samme positive egenverdiene σᵢ², bare med ulike egenvektorer", "ingenting, siden de to produktene aldri har felles struktur", "alle egenvektorer, som er nøyaktig de samme i begge to her", "determinanten, som alltid er lik for de to matriseproduktene"],
      explanation: "AᵀA (gir V) og AAᵀ (gir U) har de samme positive egenverdiene σᵢ², men egenvektorene (V mot U) er forskjellige.",
    },
    {
      question: "Egenvektoren (3,4)ᵀ, som høyresingulærvektor, normaliseres til",
      options: ["(1/5)(3,4)ᵀ, ettersom lengden er √(9+16)=5 nettopp her", "(1/7)(3,4)ᵀ, siden 3+4=7 er summen av komponentene", "(1/25)(3,4)ᵀ, fordi 3²+4²=25 er lengden i kvadrat her", "(3,4)ᵀ selv, ettersom den allerede har lengde lik 1 her"],
      explanation: "‖(3,4)‖=√25=5, så enhetsvektoren er (1/5)(3,4)ᵀ. Del på lengden, ikke summen eller kvadratet av lengden.",
    },
    {
      question: "Den minste verdien min{‖Ax‖ : ‖x‖=1} er",
      options: ["σₙ, den minste singulærverdien, oppnådd i retningen vₙ", "0, uansett hvilken matrise A man tar utgangspunkt i her", "1, siden x er en enhetsvektor med lengde nøyaktig lik 1", "σ₁, den samme største singulærverdien som for maksimum"],
      explanation: "min‖Ax‖=σₙ (minste singulærverdi), i x=vₙ. Den er 0 bare hvis A har rangdefekt; ellers positiv.",
    },
    {
      question: "Operatornormen ‖A‖ (2-normen) til en matrise er lik",
      options: ["σ₁, den største singulærverdien, altså maksimal strekkfaktor", "sporet av A, altså summen av elementene på diagonalen", "det A, altså determinanten til den kvadratiske matrisen", "√n der n er antall søyler i matrisen A som er gitt her"],
      explanation: "Operatornormen er σ₁ = max‖Ax‖/‖x‖ — den største forsterkningen A kan gi. Spor og determinant er andre størrelser.",
    },
  ],
  'mat1120-7-2': [
    {
      question: "Systemet x′=Ax beskriver",
      options: ["en tilstand x(t) hvis endringsrate til enhver tid er Ax(t)", "en fast likevekt x som aldri forandrer seg over tid her", "en matrise A som deriveres komponent for komponent her", "et lineært likningssystem Ax=0 med bare én løsning her"],
      explanation: "x′=Ax betyr at endringsraten x′ er A ganget med tilstanden selv — en generalisering av den skalare x′=ax.",
    },
    {
      question: "For hvert egenpar (λ,v) til A er en løsning av x′=Ax gitt ved",
      options: ["x(t)=v·e^{λt}, som man verifiserer ved å derivere leddet", "x(t)=v·λt, altså vektoren ganget med produktet λ og t", "x(t)=v·λ^t, med egenverdien opphøyd i tiden t direkte", "x(t)=λ·v, altså en konstant vektor uavhengig av tiden t"],
      explanation: "x(t)=v·e^{λt} løser x′=Ax: x′=λv·e^{λt}=A(v·e^{λt}). Faktoren er e^{λt}, ikke λt eller λ^t.",
    },
    {
      question: "Den generelle løsningen av x′=Ax (diagonaliserbar A) er",
      options: ["x(t)=c₁v₁e^{λ₁t}+…+cₙvₙe^{λₙt}, ett ledd per egenpar", "x(t)=c·e^{At}, en enkelt konstant c ganget en eksponent", "x(t)=Av·t, altså matrisen ganget en egenvektor og tiden", "x(t)=v₁+v₂+…+vₙ, summen av alle egenvektorene til A her"],
      explanation: "x(t)=Σcᵢvᵢe^{λᵢt} — en lineærkombinasjon av enkeltløsningene (superposisjon). Krever egenvektorbasis.",
    },
    {
      question: "Koeffisientene cᵢ i løsningen bestemmes ved å",
      options: ["løse Pc=x(0), altså skrive x(0) i egenvektorbasisen til A", "sette dem alle lik 1 uansett hvilken begynnelsesverdi som er", "derivere begynnelsesverdien x(0) med hensyn på tiden t her", "gange begynnelsesverdien med de tilhørende egenverdiene λᵢ"],
      explanation: "Ved t=0 er e^{λᵢ·0}=1, så Σcᵢvᵢ=x(0), altså Pc=x(0). Det er koordinatene til x(0) i egenvektorbasisen.",
    },
    {
      question: "Metoden x(t)=Σcᵢvᵢe^{λᵢt} forutsetter at A",
      options: ["har en egenvektorbasis, altså at A er diagonaliserbar her", "er symmetrisk med utelukkende positive egenverdier overalt", "er ortogonal slik at inversen er lik den transponerte her", "har determinant lik null slik at et egenrom blir stort nok"],
      explanation: "Løsningen dekker alle tilfeller bare når egenvektorene danner en basis (A diagonaliserbar). Symmetri/ortogonalitet kreves ikke.",
    },
    {
      question: "Når t→∞ styres et kontinuerlig system av",
      options: ["fortegnet (realdelen) til egenverdiene: negativ λ gir demping", "størrelsen |λ| til egenverdiene, akkurat som diskrete systemer", "antallet egenverdier som tilfeldigvis er like store i tallverdi", "determinanten til A, som avgjør om alt vokser eller krymper"],
      explanation: "For x′=Ax gir e^{λt}→0 når λ<0. Kriteriet er fortegnet (realdelen). |λ|-kriteriet gjelder diskrete systemer.",
    },
    {
      question: "Er alle egenverdiene til A negative, så",
      options: ["går x(t)→0 når t→∞, og origo er et stabilt punkt her", "vokser x(t) uten grense langs den største egenvektoren", "roterer x(t) rundt origo med konstant avstand for alltid", "står x(t) helt stille fordi ingen ledd forandrer seg her"],
      explanation: "Alle λ<0 gir e^{λt}→0, så x(t)→0 uansett start — origo er stabilt (asymptotisk).",
    },
    {
      question: "Et diskret system xₖ₊₁=Axₖ har løsningen",
      options: ["xₖ=c₁λ₁ᵏv₁+…+cₙλₙᵏvₙ, med potensen λᵢᵏ i hvert ledd", "xₖ=c₁v₁e^{λ₁k}+…, altså med eksponentialen e^{λk} her", "xₖ=kAx₀, altså steget A ganget antall skritt k og x₀", "xₖ=x₀ for alle k, siden A ikke endrer tilstanden her nå"],
      explanation: "xₖ=Aᵏx₀=Σcᵢλᵢᵏvᵢ (siden Aᵏvᵢ=λᵢᵏvᵢ). Her er det λᵢᵏ, ikke e^{λᵢk}, som skiller diskret fra kontinuerlig.",
    },
    {
      question: "Langtidsatferden til et diskret system styres av",
      options: ["|λᵢ|: ledd med |λ|<1 dør ut, |λ|>1 vokser, |λ|=1 er stabilt", "fortegnet til λᵢ, akkurat slik det kontinuerlige systemet gjør", "summen av alle egenverdiene, som bestemmer den totale veksten", "antallet steg k, uavhengig av hvilke egenverdier A måtte ha"],
      explanation: "For xₖ er kriteriet |λᵢ|: λᵏ→0 hvis |λ|<1. Fortegn-kriteriet hører til det kontinuerlige tilfellet.",
    },
    {
      question: "Er A ortogonal (AᵀA=I), så er ‖xₖ‖ i et diskret system",
      options: ["konstant lik ‖x₀‖ for alle k, siden A bevarer lengder her", "voksende mot uendelig fordi ortogonale matriser forsterker", "avtakende mot null etter hvert som antall skritt k øker her", "avhengig av startvektoren på en måte som varierer med k her"],
      explanation: "Ortogonal A er normbevarende: ‖Ax‖=‖x‖, så ‖xₖ‖=‖x₀‖ konstant. Egenverdiene har alle |λ|=1.",
    },
    {
      question: "Er λ=1 en egenverdi i et diskret system, så",
      options: ["står den komponenten stille (1ᵏ=1) — en likevekt langs v", "vokser den komponenten raskest av alle leddene i løsningen", "dør den komponenten ut først når antall skritt k øker her", "bytter den komponenten fortegn for hvert steg som tas her"],
      explanation: "1ᵏ=1 for alle k, så λ=1-komponenten er uendret — en steady state. Dør andre (|λ|<1) ut, stabiliseres xₖ langs v.",
    },
    {
      question: "For store t dominerer i x′=Ax",
      options: ["leddet med den største egenverdien λ, så x retter seg mot v", "leddet med den minste egenverdien, som vokser saktest her", "alle ledd like mye, siden e^{λt} vokser i samme takt her", "det leddet som tilfeldigvis hadde størst koeffisient cᵢ her"],
      explanation: "e^{λt} vokser raskest for størst λ, så x(t) retter seg mot vₘₐₓ (når cₘₐₓ≠0). Koeffisienten alene avgjør ikke.",
    },
    {
      question: "Å verifisere at x(t)=v·e^{λt} løser x′=Ax gjør man ved å",
      options: ["derivere og sjekke at x′=λv·e^{λt} er lik Ax=λv·e^{λt}", "sette t=1 og kontrollere at de to sidene blir like tall", "regne determinanten til A og se om den blir lik null her", "gange x(t) med egenverdien og se om resultatet blir null"],
      explanation: "x′=λv·e^{λt} og Ax=A(v e^{λt})=λv·e^{λt} (siden Av=λv). Begge sider er like — altså en løsning.",
    },
    {
      question: "Koeffisientene cᵢ er de samme",
      options: ["både i den kontinuerlige og den diskrete løsningen fra x(0)", "bare i det kontinuerlige tilfellet, aldri i det diskrete her", "bare når alle egenverdiene tilfeldigvis er like store her", "bare når startvektoren er en av egenvektorene til A selv"],
      explanation: "cᵢ er koordinatene til x₀ i egenvektorbasisen (Pc=x₀) — de samme uansett om tidsfaktoren er e^{λt} eller λᵏ.",
    },
    {
      question: "Komplekse egenverdier λ=a±bi i x′=Ax gir",
      options: ["svingende løsninger e^{at}(cos bt, sin bt), styrt av realdelen a", "løsninger som alltid vokser uten grense uansett verdien av a", "ingen reelle løsninger, så systemet kan ikke løses i det hele", "konstante løsninger fordi imaginærdelen opphever eksponenten"],
      explanation: "λ=a±bi gir e^{at}(cos bt, sin bt): realdelen a styrer vekst/demping, b gir svingninger. Løsningene er reelle.",
    },
    {
      question: "Sammenhengen med Aᵏ er at",
      options: ["xₖ=Aᵏx₀ og Aᵏ=PDᵏP⁻¹ med Dᵏ=diag(λᵢᵏ) på diagonalen", "Aᵏ alltid er lik identitetsmatrisen I når k blir stor nok", "xₖ ikke har noen sammenheng med potenser av matrisen A", "Aᵏ regnes raskest ved å gange A med seg selv k ganger her"],
      explanation: "xₖ=Aᵏx₀, og diagonalisering gir Aᵏ=PDᵏP⁻¹. Egenvektormetoden er nettopp denne diagonaliseringen brukt på x₀.",
    },
  ],
  'mat1120-7-3': [
    {
      question: "Et godt bevis begynner med å",
      options: ["identifisere hva som er gitt og hva som skal vises tydelig", "regne et konkret tallesempel som viser at påstanden stemmer", "gjette svaret og deretter kontrollere at det ser rimelig ut", "skrive konklusjonen først og fylle inn mellomregning etterpå"],
      explanation: "Skritt 1 er å skille gitt (forutsetninger) fra skal-vises (konklusjon). Et tallesempel beviser ikke en generell påstand.",
    },
    {
      question: "Uttrykket vvᵀ (for en søylevektor v) er",
      options: ["en n×n-matrise av rang 1, altså et ytterprodukt av v med seg", "et tall, nemlig kvadratet av lengden ‖v‖² til vektoren v her", "en søylevektor med samme retning som den opprinnelige v her", "determinanten til v, som bare er definert for kvadrater her"],
      explanation: "vvᵀ er (n×1)(1×n) = en n×n-matrise (rang 1). Skalaren ‖v‖² er derimot vᵀv (1×n)(n×1).",
    },
    {
      question: "Uttrykket vᵀv (for en søylevektor v) er",
      options: ["et tall, nemlig ‖v‖², og lik 1 når v er en enhetsvektor her", "en n×n-matrise som er symmetrisk og har rang lik 1 her nå", "en søylevektor av samme lengde som den opprinnelige v her", "identitetsmatrisen I når vektoren v er normalisert til én"],
      explanation: "vᵀv=(1×n)(n×1)=et tall = ‖v‖². For enhetsvektor er det 1. Matrisen (rang 1) er derimot vvᵀ.",
    },
    {
      question: "Householder-matrisen R=I−2vvᵀ (enhets-v) er",
      options: ["symmetrisk, siden (vvᵀ)ᵀ=vvᵀ gir at Rᵀ er lik R selv her", "usymmetrisk fordi leddet 2vvᵀ ødelegger symmetrien i I her", "diagonal med tallene 1 og −1 langs hoveddiagonalen sin her", "triangulær slik at egenverdiene kan leses rett av diagonalen"],
      explanation: "Rᵀ=(I−2vvᵀ)ᵀ=I−2vvᵀ=R fordi ytterproduktet vvᵀ er symmetrisk. R er verken diagonal eller triangulær generelt.",
    },
    {
      question: "For Householder-matrisen R=I−2vvᵀ (enhets-v) gjelder",
      options: ["R²=I, siden mellomleddet kollapser via vᵀv=1 i utregningen", "R²=2R, fordi kvadrering dobler ytterproduktleddet 2vvᵀ her", "R²=0, ettersom de to leddene alltid opphever hverandre her", "R²=−I, siden refleksjonen snur alle retningene i rommet her"],
      explanation: "R²=I−4vvᵀ+4v(vᵀv)vᵀ=I, der vᵀv=1 gir at leddene kanselleres. En speiling gjentatt to ganger er identiteten.",
    },
    {
      question: "At R=I−2vvᵀ er ortogonal følger av at",
      options: ["R er symmetrisk og R²=I, så RᵀR=R²=I nettopp her da", "R har determinant lik 1, slik alle rotasjoner alltid har", "søylene i R summerer seg til null i hver eneste rad her", "R er lik sin egen invers uten at det trengs noe mer her"],
      explanation: "Rᵀ=R og R²=I gir RᵀR=R²=I, altså ortogonal. (Determinanten er faktisk −1, en refleksjon, ikke +1.)",
    },
    {
      question: "Householder-matrisen R virker geometrisk som",
      options: ["en speiling om hyperplanet v⊥, med egenverdier −1 og +1 her", "en rotasjon om origo med en fast vinkel bestemt av v her", "en projeksjon ned på linjen langs v, som fjerner resten her", "en skalering som strekker alle vektorer med samme faktor her"],
      explanation: "Rv=−v (langs v) og Rw=w for w⊥v gir en speiling om v⊥. Egenverdier −1 (i v) og +1 (i v⊥), det R=−1.",
    },
    {
      question: "En ortogonal matrise P bevarer lengder fordi",
      options: ["‖Px‖²=xᵀPᵀPx=xᵀx=‖x‖², der PᵀP=I brukes underveis her", "P alltid er en diagonalmatrise med tallet 1 på diagonalen", "determinanten til P er lik 1, som betyr at volum bevares", "søylene i P er ortogonale, uten at lengden deres spiller inn"],
      explanation: "‖Px‖²=(Px)ᵀ(Px)=xᵀPᵀPx=xᵀx (siden PᵀP=I), så ‖Px‖=‖x‖. Det kreves ortonormale (ikke bare ortogonale) søyler.",
    },
    {
      question: "En symmetrisk positiv definit matrise B er invertibel fordi",
      options: ["det B=∏λᵢ>0 er forskjellig fra 0, siden hver λᵢ er positiv", "B alltid er lik identitetsmatrisen I av en passende størrelse", "sporet til B er positivt, som garanterer at inversen finnes", "B er triangulær med bare positive tall langs diagonalen sin"],
      explanation: "Alle egenverdier λᵢ>0 gir det B=∏λᵢ>0≠0, altså invertibel. Sporet alene garanterer ikke invertibilitet.",
    },
    {
      question: "For en symmetrisk positiv definit B har inversen B⁻¹",
      options: ["egenverdiene 1/λᵢ (samme egenvektorer), og er også posdef", "de samme egenverdiene λᵢ som B, bare i motsatt rekkefølge", "utelukkende negative egenverdier fordi man inverterer her", "ingen reelle egenverdier siden inversen ødelegger symmetrien"],
      explanation: "B⁻¹=PD⁻¹Pᵀ har egenverdier 1/λᵢ>0 med samme egenvektorer, så B⁻¹ er også symmetrisk positiv definit.",
    },
    {
      question: "Beviset for at B⁻¹ er posdef bruker at",
      options: ["B=PDPᵀ gir B⁻¹=PD⁻¹Pᵀ, en ny ortogonal diagonalisering", "inversen av en hvilken som helst matrise alltid er posdef", "determinanten til B⁻¹ er den samme som determinanten til B", "B⁻¹ er lik Bᵀ når B tilfeldigvis er en ortogonal matrise"],
      explanation: "Spektralteoremet gir B=PDPᵀ, så B⁻¹=PD⁻¹Pᵀ med egenverdier 1/λᵢ>0 — altså igjen positiv definit.",
    },
    {
      question: "Isomorfi-kriteriet sier at T er en isomorfi hvis og bare hvis",
      options: ["matrisen [T]_B er invertibel, ekvivalent med at ker T={0}", "matrisen [T]_B er symmetrisk med reelle egenverdier overalt", "avbildningen T sender minst én basisvektor til nullvektoren", "determinanten til [T]_B tilfeldigvis er lik tallet 1 nøyaktig"],
      explanation: "T isomorfi ⇔ [T]_B invertibel ⇔ ker T={0}. Praktisk sjekk: det[T]_B≠0 eller full rang. Symmetri kreves ikke.",
    },
    {
      question: "For å vise at en matrise A ikke er diagonaliserbar viser man at",
      options: ["et egenrom er for lite: geometrisk multiplisitet < algebraisk", "matrisen A ikke har noen reelle egenverdier i det hele tatt", "determinanten til A tilfeldigvis er lik null for matrisen her", "matrisen A ikke er symmetrisk og heller ikke er triangulær her"],
      explanation: "Ikke-diagonaliserbar ⇔ en egenverdi har geo < alg multiplisitet. Manglende reelle egenverdier eller det=0 er ikke kriteriet.",
    },
    {
      question: "Transponert-trikset utnytter at",
      options: ["en skalar er lik sin transponerte, så xᵀMx=xᵀMᵀx nettopp", "enhver matrise M er lik sin egen transponerte matrise Mᵀ her", "produktet av to matriser alltid kommuterer under transponering", "determinanten er uendret når man transponerer en matrise M"],
      explanation: "xᵀMx er 1×1 (en skalar), lik sin transponerte (xᵀMx)ᵀ=xᵀMᵀx. Brukes i symmetri- og definitthetsargumenter.",
    },
  ],
  'mat1120-8-1': [
    {
      question: "Hva er riktig kilde for en basis for Col A?",
      options: ["De opprinnelige pivotkolonnene i selve matrisen A", "De reduserte pivotkolonnene slik de framstår i selve RREF", "De ikke-null radene man leser rett ut av RREF", "Kolonnene som svarer til de frie variablene i A"],
      explanation: "Kolonnerommet endres av radreduksjon, så basisen hentes fra pivotkolonnene i A, ikke fra RREF. RREF sier bare hvilke kolonner som er pivot.",
    },
    {
      question: "Hvordan begrunnes diagonaliserbarhet for full uttelling?",
      options: ["Med multiplisitet: geometrisk lik algebraisk, eller en snarvei", "Med at matrisen er invertibel og har determinant ulik null", "Med at det finnes minst én reell egenvektor for hver egenverdi", "Med at matrisen er kvadratisk og har reelle tallverdier"],
      explanation: "Sensor vil se geo = alg multiplisitet per egenverdi, eller en navngitt snarvei (n distinkte / symmetrisk / triangulær). En ren påstand teller lite.",
    },
    {
      question: "Ved ortogonal diagonalisering A=PDPᵀ må matrisen P være",
      options: ["ortonormal, altså ha PᵀP lik identitetsmatrisen I", "kun invertibel, uten noe krav til søylenes lengde", "triangulær, med egenverdiene stående på diagonalen", "symmetrisk, altså lik sin egen transponerte matrise"],
      explanation: "A=PDPᵀ krever ortogonal P (ortonormale søyler, PᵀP=I), slik at Pᵀ er inversen. Glemt normalisering gir PᵀP ulik I og feil resultat.",
    },
    {
      question: "Hvorfor siterer løsningen vedlegget i stedet for å regne selv?",
      options: ["Store matriser skal ikke radreduseres for hånd på eksamen", "Vedlegget er den eneste kilden til matrisens egenverdier", "Fasit krever at all mellomregning utelates fra besvarelsen", "Radreduksjon for hånd gir alltid et galt sluttsvar her"],
      explanation: "MAT1120s arbeidsmåte er å lese RREF/poly/eig av vedlegget; manuell radreduksjon av en stor matrise er tidssluk og feilkilde. Små 2×2-kontroller gjør du selv.",
    },
    {
      question: "Et kryssledd c·xᵢxⱼ i en kvadratisk form gir matriseinngangen",
      options: ["aᵢⱼ = aⱼᵢ = c/2, altså koeffisienten delt likt på to", "aᵢⱼ = c, mens speilinngangen aⱼᵢ settes til null", "aᵢⱼ = 2c, siden leddet telles med i to retninger", "aᵢⱼ = c², for å gjøre den symmetriske matrisen posdef"],
      explanation: "For symmetrisk A fordeles kryssleddet likt: c·xᵢxⱼ svarer til aᵢⱼ=aⱼᵢ=c/2. Glemt halvering gir usymmetrisk A og feil egenverdier.",
    },
    {
      question: "Minste kvadraters løsning av Cx=b tilfredsstiller",
      options: ["normallikningene CᵀC x̂ = Cᵀb", "den opprinnelige likningen Cx = b eksakt", "egenlikningen Cx̂ = λx̂ for en skalar λ", "projeksjonen x̂ = b delt på kolonnenormen"],
      explanation: "Minste kvadrater løses via normallikningene CᵀC x̂ = Cᵀb. Ved rangdefekt er løsningen en affin mengde, men projeksjonen C x̂ er entydig.",
    },
    {
      question: "Når ker T er funnet i koordinater i et polynomrom, skal svaret",
      options: ["oversettes tilbake til polynomer via basisvektorene", "leveres som en koordinatvektor i R^n uten mer arbeid", "skrives om til en egenverdi for operatoren T", "reduseres til et enkelt reelt tall ved innsetting"],
      explanation: "ker T lever i det abstrakte rommet, ikke i R^n. Koordinatvektoren må oversettes tilbake til det tilhørende polynomet for full uttelling.",
    },
    {
      question: "For en symmetrisk A er maks av xᵀAx over enhetssfæren lik",
      options: ["den største egenverdien, nådd i en tilhørende egenvektor", "summen av alle egenverdiene delt på antall dimensjoner", "determinanten til A, altså produktet av egenverdiene", "den minste egenverdien, nådd i den korteste egenvektoren"],
      explanation: "Rayleigh (Teorem 6 §7.3): maks er største egenverdi (nådd i dens egenvektor), min er minste. Bibetingelsen x ⊥ u₁ gir nest største.",
    },
    {
      question: "Søylene i overgangsmatrisen P_{C←B} er",
      options: ["B-vektorenes koordinater uttrykt i basisen C", "C-vektorenes koordinater uttrykt i basisen B", "egenvektorene til avbildningen T i basisen C", "de frie variablene lest direkte fra en RREF"],
      explanation: "P_{C←B} har B-vektorenes C-koordinater som søyler, og [x]_C = P_{C←B}[x]_B. Motsatt retning er den inverse matrisen.",
    },
    {
      question: "I en singulærverdidekomposisjon ordnes singulærverdiene",
      options: ["synkende i Σ, med søylene i U og V i samme rekkefølge", "stigende i Σ, slik at den minste verdien kommer først", "alfabetisk etter egenvektorene til matrisen A transponert", "tilfeldig, siden rekkefølgen ikke påvirker produktet UΣVᵀ"],
      explanation: "σ₁ ≥ σ₂ ≥ … ≥ 0 synkende, og søylene i U og V følger samme orden. Da er σ₁ den maksimale strekkfaktoren og max‖Ax‖=σ₁.",
    },
    {
      question: "Et sluttsvar gitt som en desimaltilnærming i stedet for eksakt 1/√2 tyder på",
      options: ["en unødvendig avrunding som skal unngås gjennomgående i faget", "at studenten trolig har brukt feil indreprodukt i utregningen", "at matrisen ikke var symmetrisk og dermed ikke posdef", "at egenverdien ble lest fra feil kolonne i vedlegget"],
      explanation: "Svar skrives eksakt (brøk, √2, 1/√5). Tallene er pene fordi vedlegget garanterer det, så en avrundet desimal signaliserer at noe bør skrives om til eksakt form.",
    },
    {
      question: "I et oppgitt integral-indreprodukt regnes normen i Gram–Schmidt med",
      options: ["nettopp det oppgitte indreproduktet, ikke standardprikkproduktet", "standardprikkproduktet av de tilhørende polynomkoeffisientene i hver", "kun de positive leddene i integralet over intervallet", "kvadratsummen av funksjonsverdiene i to punkter"],
      explanation: "Er et indreprodukt oppgitt, brukes det på ALT – også normen ved normalisering i Gram–Schmidt. Å bytte til standardprikkproduktet er den dyreste fellen.",
    },
    {
      question: "Dimensjonsteoremet (rang–nullitet) sier at rang A + dim Nul A er lik",
      options: ["antall søyler i A, brukt som kontroll i sjanger A", "antall rader i A, altså høyden på matrisen", "antall egenverdier til A talt med algebraisk multiplisitet", "rangen til RREF minus antall frie variabler"],
      explanation: "rang A + dim Nul A = antall søyler. Etter å ha talt pivoter og frie variabler bruker man dette som kontroll på at summen stemmer.",
    },
    {
      question: "Sensorinstruksen på hvert MAT1120-sett krever at du",
      options: ["begrunner alle svar og viser nok mellomregning", "leverer bare det endelige tallsvaret per deloppgave", "bruker minst to ulike metoder på hver oppgave", "utelater teoremnavn og heller gjengir bevisene fullt ut"],
      explanation: "«Du må begrunne alle svar, og vise nok mellomregning til at argumentene lett kan følges.» Riktig svar uten føring gir lite uttelling.",
    },
  ],
  'mat1120-8-2': [
    {
      question: "Vedlegget viser at A har pivoter i søyle 1 og 2. Basis for Col A er da",
      options: ["søyle 1 og søyle 2 hentet fra den opprinnelige matrisen A", "søyle 1 og søyle 2 slik de er redusert i selve RREF", "de tre spesielle løsningene lest av de frie variablene", "de to øverste ikke-null radene man ser i RREF-formen"],
      explanation: "Col A-basis er de opprinnelige pivotkolonnene i A. RREF forteller hvilke kolonner som er pivot; vektorene tas fra A, ikke fra RREF.",
    },
    {
      question: "Gram–Schmidt på (1,2,2) og (3,0,3) gir andre ortogonalvektor",
      options: ["(2,−2,1), som står vinkelrett på (1,2,2)", "(3,0,3), altså den uendrede andre vektoren", "(1,2,2), som gjentar den første vektoren", "(4,2,5), summen av de to opprinnelige vektorene"],
      explanation: "Med a₂·v₁/v₁·v₁ = 9/9 = 1 blir v₂ = (3,0,3) − (1,2,2) = (2,−2,1), og (1,2,2)·(2,−2,1)=0 bekrefter ortogonalitet.",
    },
    {
      question: "For den triangulære A med diagonal 2,2,5 er kjernen i Aᵏ-formelen at",
      options: ["Aᵏ = P Dᵏ P⁻¹ med samme P og Dᵏ regnet elementvis", "Aᵏ regnes ved å multiplisere A med seg selv k ganger", "Aᵏ = k·A siden egenverdiene ligger på diagonalen", "Aᵏ er alltid diagonal fordi A er triangulær matrise"],
      explanation: "Diagonalisering gir Aᵏ = P Dᵏ P⁻¹ med samme P; Dᵏ = diag(2ᵏ,2ᵏ,5ᵏ). Her ble Aᵏ = [[2ᵏ,0,5ᵏ−2ᵏ],[0,2ᵏ,5ᵏ−2ᵏ],[0,0,5ᵏ]].",
    },
    {
      question: "For derivasjonsoperatoren T(p)=p' på P₃ er ker T lik",
      options: ["de konstante polynomene, altså Span{1}", "hele P₃, siden derivasjon er en lineær avbildning", "polynomene av grad nøyaktig tre i rommet", "nullpolynomet alene, så kjernen er triviell"],
      explanation: "T(p)=p' er null nettopp for konstantene. Nul[T]_B = Span{(1,0,0,0)} oversatt til polynom er Span{1}, med dim ker T = 1.",
    },
    {
      question: "En symmetrisk matrise med egenverdiene 2, 2 og 5 gir en kvadratisk form som er",
      options: ["positiv definit, med origo som et globalt minimum", "indefinit, med origo som et sadelpunkt for formen", "negativ definit, med origo som et globalt maksimum", "positiv semidefinit, med en hel linje av minima"],
      explanation: "Alle egenverdiene er positive (2,2,5), så Q er positiv definit og origo er et minimum. Klassifiseringen leses av egenverditegnene.",
    },
  ],
  'mat1120-8-3': [
    {
      question: "Når C mangler full kolonnerang, er den minste kvadraters løsningen",
      options: ["en affin mengde: en partikulær løsning pluss Nul C", "et entydig punkt bestemt av normallikningene alene", "tom, fordi systemet Cx=b da ikke har noen løsning", "lik selve b, siden projeksjonen faller sammen med b"],
      explanation: "Rangdefekt gir CᵀC singulær, så løsningen er ikke entydig: den er partikulær + Nul C, en affin linje. Projeksjonen C x̂ er derimot entydig.",
    },
    {
      question: "Selv om minste kvadraters x̂ ikke er entydig, er projeksjonen proj_W b",
      options: ["den samme for alle x̂, altså entydig bestemt", "forskjellig for hver mulig løsning x̂ man velger", "udefinert så lenge C ikke har full kolonnerang", "lik null når systemet Cx=b er inkonsistent"],
      explanation: "Endringen langs Nul C forsvinner: C·(retning i Nul C)=0, så C x̂ = proj_W b er den samme for alle løsninger. Projeksjonen er alltid entydig.",
    },
    {
      question: "For T(f)=f' på V=Span{eˣ, eˣcos x, eˣsin x} er ker(T−I) lik",
      options: ["Span{eˣ}, de eneste funksjonene i V med f'=f", "Span{eˣcos x}, fordi cosinus deriverer til seg selv", "hele V, siden alle tre funksjonene inneholder eˣ", "nullfunksjonen alene, så kjernen er triviell"],
      explanation: "Nul([T]_B − I) = Span{(1,0,0)}, som oversatt er eˣ. De andre to deriverer til blandinger av hverandre, så bare multipler av eˣ oppfyller f'=f.",
    },
    {
      question: "For A med egenverdiene 2, 2 og −1 blir q(A)=A²−A lik",
      options: ["2I, siden begge egenverdiene oppfyller λ²−λ=2", "0, fordi A tilfredsstiller sitt karakteristiske polynom", "A selv, ettersom kvadrering ikke endrer egenverdiene", "−I, siden den negative egenverdien dominerer summen"],
      explanation: "q(A)=P q(D) P⁻¹ med q(2)=2 og q(−1)=2, så q(D)=2I og q(A)=2I. Dette uttrykker minimalpolynomet (x−2)(x+1)=x²−x−2.",
    },
    {
      question: "Når AᵀA har egenverdiene 16 og 4, er singulærverdiene til A",
      options: ["4 og 2, altså kvadratrøttene ordnet synkende", "16 og 4, altså egenverdiene brukt direkte", "8 og 2, altså egenverdiene delt på en faktor to", "$\\sqrt{12}$ og $\\sqrt{2}$, altså røttene av egenverdiene minus 4"],
      explanation: "σᵢ = √(egenverdi til AᵀA), synkende: √16=4 og √4=2. Da er max‖Ax‖ = σ₁ = 4, nådd i første høyre-singulærvektor.",
    },
  ],
  'mat1120-8-4': [
    {
      question: "I indreproduktet ∫ over [−1,1] er kvadratet av normen til t lik",
      options: ["2/3, altså integralet av t² fra −1 til 1", "1, som om t var en enhetsvektor i koordinater", "2, altså integralet av tallet 1 fra −1 til 1", "0, fordi t er en odde funksjon på intervallet"],
      explanation: "‖t‖² = ⟨t,t⟩ = ∫₋₁¹ t² dt = 2/3, ikke 1. Alt regnes i det oppgitte integralet, aldri som standardprikkprodukt av koeffisientene.",
    },
    {
      question: "Gram–Schmidt på {1, t, t²} i integral-indreproduktet gir tredje basisvektor",
      options: ["t² − 1/3, som er ortogonal på både 1 og t", "t² selv, siden den allerede er ortogonal på 1", "t² − 1, med heltallskonstant trukket fra", "t² − t, ved å trekke fra det lineære leddet"],
      explanation: "p₃ = t² − (⟨t²,1⟩/⟨1,1⟩)·1 = t² − (2/3)/2 = t² − 1/3, det tredje Legendre-polynomet. Sjekk: ⟨1, t²−1/3⟩ = 2/3 − 2/3 = 0.",
    },
    {
      question: "En kvadratisk form med symmetrisk A og egenverdiene 4 og 2 gir en kurve som er",
      options: ["en ellipse, siden egenverdiene har samme fortegn", "en hyperbel, siden egenverdiene er ulike i størrelse", "en parabel, fordi den ene aksen er dobbelt så lang", "to rette linjer, ettersom formen er degenerert her"],
      explanation: "Begge egenverdier positive (samme fortegn) ⇒ ellipse. Variabelskiftet x=Py gir 4y₁²+2y₂²=c, altså standardform for en ellipse.",
    },
    {
      question: "For x'=Ax med reelle distinkte egenverdier λ₁, λ₂ er den generelle løsningen",
      options: ["c₁e^{λ₁t}v₁ + c₂e^{λ₂t}v₂ med egenvektorene v₁, v₂", "c₁v₁ + c₂v₂, altså en konstant lineærkombinasjon", "e^{At} multiplisert med den deriverte av x i null", "c₁cos(λ₁t)v₁ + c₂sin(λ₂t)v₂ med trigonometri"],
      explanation: "Hver e^{λᵢt}vᵢ løser x'=Ax, og den generelle løsningen er summen. Konstantene c₁, c₂ bestemmes av en eventuell begynnelsesverdi.",
    },
    {
      question: "Er B symmetrisk positiv definit med egenverdier λᵢ, har B⁻¹ egenverdiene",
      options: ["1/λᵢ, som alle er positive, så B⁻¹ er også posdef", "−λᵢ, med motsatt fortegn av egenverdiene til B", "λᵢ², siden invertering kvadrerer hver egenverdi", "de samme λᵢ, fordi invers bevarer egenverdiene"],
      explanation: "B⁻¹ = P D⁻¹ Pᵀ har egenverdier 1/λᵢ. Alle λᵢ>0 gir 1/λᵢ>0, så B⁻¹ er symmetrisk positiv definit. B er invertibel siden det B = ∏λᵢ ≠ 0.",
    },
  ],
};

export default quizData_mat1120;
