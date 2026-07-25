import type { QuizQuestion } from './quiz-data';

const quizData_fys1001: Record<string, QuizQuestion[]> = {
  'fys1001-0-1': [
    {
      question: "Hvor lang er den avsluttende eksamenen i FYS1001, og hvor mye teller midtsemestereksamen?",
      options: ["Fire timer skriftlig; midtsemestereksamen teller 20 % av karakteren", "Tre timer skriftlig; midtsemestereksamen teller 20 % av karakteren", "Fire timer skriftlig; midtsemestereksamen teller 50 % av karakteren", "Fire timer skriftlig; midtsemestereksamen teller ikke med"],
      explanation: "Gjeldende ordning er fire timers skriftlig skoleeksamen som teller 80 %, pluss en midtsemestereksamen som teller 20 %. Tre timer var formen frem til 2012.",
    },
    {
      question: "Hvilket tema forekommer i alle 36 avsluttende eksamenssettene i arkivet?",
      options: ["Mekanikk: bevegelse, Newtons lover og friksjon", "Termofysikk med varme og gasslov", "Kjernefysikk og radioaktivitet", "Geometrisk optikk med linser og brytning"],
      explanation: "Mekanikk-blokken står i 36/36 sett (100 %). Termofysikk har 31/36, kjernefysikk 28/36 og geometrisk optikk 23/36 — høyt, men ikke fullt hus.",
    },
    {
      question: "Hvor mange av de 36 settene inneholder numeriske metoder eller programmering?",
      options: ["Ingen — temaet er aldri testet på 21 år", "Om lag halvparten, siden det står i emnebeskrivelsen", "Rundt en tredel, konsentrert til de nyeste settene", "Alle settene etter 2017"],
      explanation: "Numerikk står i læringsutbyttet, men er registrert i 0 av 36 sett. Emnebeskrivelsen sier hva emnet dekker, ikke hva som prøves.",
    },
    {
      question: "Hva koster et manglende eller galt enhetssvar?",
      options: ["1 poeng per tilfelle", "2 poeng per tilfelle", "Hele deloppgaven, altså 4 poeng", "Ingenting hvis tallet er riktig"],
      explanation: "Enhetsregelen er fast: −1 poeng per tilfelle. Med rundt 22 deloppgaver kan enhetsslurv alene flytte karakteren.",
    },
    {
      question: "Du regner feil fart i deloppgave a), men bruker tallet ditt riktig videre i b). Hva skjer?",
      options: ["Du får full uttelling i b) hvis mellomregningen er vist", "Du mister poeng i b) også, siden sluttsvaret der blir galt", "Hele oppgaven annulleres og gir null", "Du får uttelling i b) bare hvis du merker svaret som usikkert"],
      explanation: "Følgefeil straffes ikke på nytt så lenge feilen er sporbar i vist mellomregning. Derfor skal du aldri hoppe over en deloppgave fordi du er usikker på den forrige.",
    },
    {
      question: "En besvarelse gir riktig tallsvar, men ingen begrunnelse eller mellomregning. Hva blir uttellingen?",
      options: ["Liten eller ingen — begrunnelsen er selve kravet", "Full uttelling, siden tallsvaret som står der er riktig", "Halv uttelling automatisk, uansett oppgave", "Full uttelling hvis enheten er med"],
      explanation: "«Tallsvar uten resonnement» er den hyppigst påpekte enkeltfeilen i arkivet og koster mesteparten av poengene selv når tallet er rett.",
    },
    {
      question: "Hvor stor andel av deloppgavene i et moderne sett er kvalitative «forklar/begrunn»-oppgaver?",
      options: ["25–40 %", "Under 10 %", "Rundt 50–60 %", "Det varierer helt tilfeldig fra 0 til 80 %"],
      explanation: "Andelen kvalitative deloppgaver ligger på 25–40 % og har økt de siste årene. Resten, 60–75 %, er kvantitative.",
    },
    {
      question: "Hvilket av disse temaene kan du IKKE møte på midtsemestereksamen?",
      options: ["Kjernefysikk og radioaktivitet", "Energibevaring med friksjon", "Bernoulli og trykk i væsker i ro og i bevegelse", "Newtons lover med friksjon"],
      explanation: "Midtveis dekker bare mekanikk, fluidmekanikk og innledende termofysikk. Elektromagnetisme, optikk og kjernefysikk kommer aldri der.",
    },
    {
      question: "Hva sier løsningsforslagene om en gal metode som tilfeldigvis gir riktig tall?",
      options: ["Den gir ikke uttelling — metoden må være riktig", "Den gir full uttelling siden tallet stemmer", "Den gir uttelling hvis enheten er riktig", "Den gir alltid nøyaktig halv uttelling"],
      explanation: "Metodevalget er poengbærende. Det mest kjente eksemplet er bevegelsesligninger for konstant akselerasjon brukt på krum bane — feil metode, ingen uttelling.",
    },
    {
      question: "Hva er hovedgrunnen til at du ikke skal pugge naturkonstanter som $\\sigma$, $h$ og $c$?",
      options: ["De står på formelarket og i tabellverket", "Konstantene er ikke en del av pensum i FYS1001", "De endres fra sett til sett", "Kalkulatoren har dem lagret fra før"],
      explanation: "Eksamen deler ut formelark og tillater Gyldendals tabellverk. Puggetid er derfor tatt fra metodetrening, som er det som gir poengene.",
    },
    {
      question: "Hva er den viktigste konsekvensen av at alle deloppgaver teller likt?",
      options: ["Bredde lønner seg — flere lette slår én tung du sitter fast i", "Du bør begynne bakfra, siden de siste deloppgavene er verdt mest", "De kvalitative oppgavene kan hoppes over uten tap", "Den første oppgaven bestemmer karakteren"],
      explanation: "Ingen deloppgave kan redde en annen. Med rundt 11 minutter per deloppgave gir det én regel: kom deg videre når du står fast.",
    },
    {
      question: "Hvordan bygges et godt svar på en kvalitativ deloppgave?",
      options: ["Navngi mekanismen, koble den til situasjonen, konkluder", "Skriv alt du kan om temaet, så noe treffer", "Gi to alternative forklaringer, slik at du er dekket uansett", "Svar med én formel og et tall uten tekst"],
      explanation: "Sensor honorerer presisjon og trekker for svada og helgardering. To motstridende svar gir trekk, ikke sikkerhetsmargin.",
    },
  ],
  'fys1001-1-1': [
    {
      question: "Hva er 90 km/t regnet om til m/s?",
      options: ["25 m/s", "32 m/s", "15 m/s", "324 m/s"],
      explanation: "Del på 3,6: $90/3{,}6 = 25$ m/s. Å gange med 3,6 (som gir 324) er den vanligste feilen i retningen.",
    },
    {
      question: "Hvilken betingelse må være oppfylt for at $2as = v^2 - v_0^2$ skal gjelde?",
      options: ["Akselerasjonen må være konstant hele veien", "Farten må være konstant hele veien", "Bevegelsen må starte fra ro, altså $v_0 = 0$", "Strekningen må være kortere enn hundre meter"],
      explanation: "Alle tre bevegelsesligningene forutsetter konstant akselerasjon. På krum bane eller ved varierende kraft er de ugyldige.",
    },
    {
      question: "Hva forteller stigningstallet i en fart–tid-graf?",
      options: ["Akselerasjonen", "Strekningen", "Gjennomsnittsfarten", "Den samlede tiden"],
      explanation: "Stigningstallet er $\\Delta v/\\Delta t$, altså akselerasjonen. Strekningen er derimot arealet under kurven.",
    },
    {
      question: "Hva forteller arealet mellom kurven og tidsaksen i en fart–tid-graf?",
      options: ["Strekningen", "Akselerasjonen", "Sluttfarten", "Tyngdeakselerasjonen"],
      explanation: "Areal = fart · tid = strekning. Arealmetoden virker også når akselerasjonen ikke er konstant, i motsetning til bevegelsesligningene.",
    },
    {
      question: "En bil bremser jevnt fra 20 m/s til stopp på 40 m. Hva er retardasjonen?",
      options: ["5,0 m/s²", "10 m/s²", "0,50 m/s²", "2,5 m/s²"],
      explanation: "$a = (v^2-v_0^2)/(2s) = -400/80 = -5{,}0$ m/s², altså en retardasjon på 5,0 m/s². Å glemme faktoren 2 i nevneren gir 10.",
    },
    {
      question: "Farten dobles, og retardasjonen ved full brems er den samme. Hva skjer med bremselengden?",
      options: ["Den blir fire ganger så lang", "Den blir dobbelt så lang", "Den blir åtte ganger så lang", "Den endrer seg ikke merkbart"],
      explanation: "$s = v_0^2/(2|a|)$, så strekningen går som kvadratet av farten: $2^2 = 4$. Lineær-tenkning her er en dokumentert felle.",
    },
    {
      question: "En stein slippes fra ro. Hvilken av ligningene gir falltiden direkte når fallhøyden er kjent?",
      options: ["$s = \\tfrac12 gt^2$", "$v = v_0 + gt$", "$\\bar{v} = s/t$", "$2as = v^2 - v_0^2$"],
      explanation: "Med $v_0 = 0$ kobler strekningsligningen nettopp høyde og tid. Den tidløse ligningen gir farten, ikke tiden.",
    },
    {
      question: "Hva er farten i det høyeste punktet for en ball som er kastet rett opp?",
      options: ["Null", "Lik startfarten", "Halvparten av startfarten", "Lik $g$ ganget med falltiden"],
      explanation: "Farten er null et øyeblikk i toppunktet, mens akselerasjonen fortsatt er $g$ nedover. De to forveksles ofte.",
    },
    {
      question: "Hva kjennetegner terminalfart i en fart–tid-graf?",
      options: ["Kurven flater ut mot en vannrett verdi", "Kurven blir stadig brattere oppover", "Kurven krysser tidsaksen", "Kurven er en rett, skrå linje"],
      explanation: "Ved terminalfart er summen av kreftene null, akselerasjonen er null, og kurven nærmer seg en vannrett asymptote.",
    },
    {
      question: "En moped starter fra ro med $2{,}0$ m/s² i 5,0 s. Hvor langt har den kjørt?",
      options: ["25 m", "50 m", "10 m", "12,5 m"],
      explanation: "$s = \\tfrac12 at^2 = \\tfrac12 \\cdot 2{,}0 \\cdot 25 = 25$ m. Å glemme faktoren $\\tfrac12$ gir 50 m.",
    },
    {
      question: "Hva er akselerasjonen til en bil som holder konstant fart 80 km/t på rett vei?",
      options: ["Null", "22 m/s²", "80 m/s²", "9,81 m/s²"],
      explanation: "Akselerasjon er fartsendring per tid. Konstant fart betyr ingen fartsendring, altså $a = 0$ — stor fart er ikke det samme som stor akselerasjon.",
    },
    {
      question: "Hvorfor gjelder ikke bevegelsesligningene på en buet, friksjonsfri sklie?",
      options: ["Akselerasjonen langs banen varierer underveis", "Farten blir for stor til at ligningene er nøyaktige", "Tyngdeakselerasjonen endrer seg med høyden", "Strekningen kan ikke måles langs en krum bane"],
      explanation: "Komponenten av tyngden langs banen endrer seg med hellingen, så akselerasjonen er ikke konstant. Da er energimetoden riktig verktøy.",
    },
    {
      question: "Hva er stigningstallet i en posisjon–tid-graf?",
      options: ["Farten", "Akselerasjonen", "Strekningen", "Tiden"],
      explanation: "Med posisjon langs andreaksen er stigningstallet $\\Delta s/\\Delta t$, altså farten. Forveksling med fart–tid-grafen er en klassiker.",
    },
    {
      question: "Et fly skal opp i 70 m/s og akselererer med 2,8 m/s². Hvor lang rullebane trengs?",
      options: ["875 m", "437 m", "196 m", "1 750 m"],
      explanation: "$s = v^2/(2a) = 4\\,900/5{,}6 = 875$ m. Å glemme faktoren 2 gir 1 750 m, og å gange $v$ med $a$ i stedet gir 196 m.",
    },
    {
      question: "Hva betyr det at en oppgave sier «retardasjonen er 4,0 m/s²»?",
      options: ["Akselerasjonen er $-4{,}0$ m/s² når bevegelsesretningen er positiv", "Farten er $4{,}0$ m/s mindre enn startfarten", "Legemet stopper etter nøyaktig 4,0 sekunder", "Akselerasjonen er $+4{,}0$ m/s² i bevegelsesretningen"],
      explanation: "Retardasjon betyr oppbremsing: akselerasjonen peker motsatt av bevegelsen og får negativt fortegn i regningen.",
    },
    {
      question: "I hvilken fase av en nødstopp er strekningen proporsjonal med farten (ikke med kvadratet)?",
      options: ["I reaksjonstiden, før bremsen virker", "I bremsefasen, etter at bremsen har grepet", "I begge faser — hele stopplengden er proporsjonal med farten", "I ingen av fasene"],
      explanation: "I reaksjonstiden er farten konstant, så $s = v_0t$. Bremselengden går derimot som $v_0^2$ — derfor firedobles ikke hele stopplengden.",
    },
    {
      question: "Hvilket tall er riktig oppgitt med gjeldende siffer når regningen gir 0,8333333 m/s² fra data med to sifre?",
      options: ["0,83 m/s²", "0,8333333 m/s²", "1 m/s²", "0,83"],
      explanation: "To–tre gjeldende siffer er regelen, og enheten må stå der. Et svar uten enhet koster 1 poeng uansett hvor riktig tallet er.",
    },
    {
      question: "Hvor stor er farten til en stein 2,0 s etter at den er sluppet fra ro? (Se bort fra luftmotstand.)",
      options: ["Om lag 20 m/s", "Om lag 10 m/s", "Om lag 40 m/s", "Om lag 5 m/s"],
      explanation: "$v = gt = 9{,}81 \\cdot 2{,}0 \\approx 19{,}6$ m/s. Å bruke $\\tfrac12 gt$ eller $g$ alene er vanlige feilgrep.",
    },
    {
      question: "Hva er gjennomsnittsfarten når en bil kjører 156 m på 18 s?",
      options: ["8,7 m/s", "31 m/s", "2 808 m/s", "0,12 m/s"],
      explanation: "$\\bar v = s/t = 156/18 = 8{,}7$ m/s. Å gange i stedet for å dele gir det absurde tallet 2 808.",
    },
    {
      question: "Hva bør du alltid skrive ned før du setter fortegn på $v$ og $a$ i en fallsituasjon?",
      options: ["Hvilken retning du regner som positiv", "Hvor mange gjeldende siffer svaret skal ha", "Verdien av tyngdeakselerasjonen på tre desimaler", "Massen til legemet som faller"],
      explanation: "Fortegnene henger av retningsvalget, og valget er fritt — men det må stå skrevet og holdes fast gjennom hele oppgaven.",
    },
    {
      question: "En trikk bremser fra 15 m/s til stopp på 4,0 s. Hvor langt går den under bremsingen?",
      options: ["30 m", "60 m", "15 m", "3,75 m"],
      explanation: "Gjennomsnittsfarten er $\\tfrac12(15+0) = 7{,}5$ m/s, og $7{,}5 \\cdot 4{,}0 = 30$ m. Å bruke startfarten hele veien gir 60 m.",
    },
  ],
  'fys1001-1-2': [
    {
      question: "Hva sier Newtons 2. lov?",
      options: ["Resultantkraften er lik masse ganger akselerasjon", "Kraften er lik masse ganger fart", "Resultantkraften er null når farten er konstant", "Krefter opptrer alltid parvis, like store og motsatt rettet"],
      explanation: "$\\Sigma F = ma$. Svaret «Resultantkraften er null når farten er konstant» er 1. lov og svaret «Krefter opptrer alltid parvis» er 3. lov — begge sanne, men de svarer ikke på spørsmålet.",
    },
    {
      question: "En kloss beveger seg med konstant fart bortover et gulv. Hva vet du om kreftene?",
      options: ["Resultantkraften er null", "Det virker ingen krefter på klossen", "Resultantkraften peker forover", "Friksjonskraften er null"],
      explanation: "Konstant fart betyr $a = 0$, altså $\\Sigma F = 0$. Det betyr ikke at kreftene er borte — de balanserer.",
    },
    {
      question: "Hvilket par er et ekte kraftpar etter Newtons 3. lov?",
      options: ["Bordet dytter på boka, og boka dytter på bordet", "Tyngden på boka og normalkraften fra bordet", "Snordraget i snoren og tyngden til loddet", "Motorkraften på bilen og luftmotstanden på bilen"],
      explanation: "Et 3. lovs par virker på hvert sitt legeme. De tre andre alternativene er krefter på samme legeme, og de balanserer i kraft av 1. lov.",
    },
    {
      question: "En person på 60 kg står i en heis som akselererer $2{,}0$ m/s² oppover. Hva viser badevekta?",
      options: ["709 N", "589 N", "469 N", "120 N"],
      explanation: "$N = m(g+a) = 60 \\cdot 11{,}81 = 709$ N. 589 N er tyngden i ro, og 469 N ville svart til akselerasjon nedover.",
    },
    {
      question: "Hva måler egentlig en badevekt?",
      options: ["Normalkraften mellom person og vekt", "Massen til personen", "Tyngdeakselerasjonen der vekta står", "Resultantkraften som virker på personen"],
      explanation: "Vekta kjenner kontaktkraften $N$ og deler den på $g$ for å vise «kilo». Derfor endrer visningen seg i en heis selv om massen er den samme.",
    },
    {
      question: "Hva viser badevekta hvis heisen er i fritt fall?",
      options: ["Null", "Det samme som i ro", "Dobbelt så mye som i ro", "Halvparten av tyngden"],
      explanation: "Med $a = -g$ blir $N = m(g-g) = 0$. Tyngden er uendret — det er kontaktkraften som forsvinner.",
    },
    {
      question: "Hvilken kraft skal ALDRI tegnes inn i et frilegemediagram?",
      options: ["$ma$", "Normalkraften $N$", "Snordraget $S$", "Tyngden $G$"],
      explanation: "$ma$ er resultatet av kreftene, ikke en kraft. De tre andre er ekte krefter på legemet.",
    },
    {
      question: "En kasse dras av en snor som peker skrått oppover. Hva blir normalkraften?",
      options: ["Mindre enn $mg$", "Nøyaktig $mg$", "Større enn $mg$", "Null"],
      explanation: "Snordragets loddrette komposant bærer en del av kassen, så gulvet trenger mindre kraft: $N = mg - S\\sin\\theta$.",
    },
    {
      question: "Hva er snordraget i en ideell snor over en friksjonsfri trinse?",
      options: ["Like stort i begge ender", "Størst i den enden der den tyngste massen henger", "Null når systemet akselererer", "Lik summen av de to tyngdene"],
      explanation: "Masseløs snor og friksjonsfri trinse gir samme drag i begge ender — trinsa endrer bare retningen på kraften.",
    },
    {
      question: "En bil på 1 200 kg har resultantkraften 3 000 N forover. Hva er akselerasjonen?",
      options: ["2,5 m/s²", "0,40 m/s²", "3,6 m/s²", "25 m/s²"],
      explanation: "$a = \\Sigma F/m = 3\\,000/1\\,200 = 2{,}5$ m/s². Å dele feil vei gir 0,40.",
    },
    {
      question: "Hvilken masse har en gjenstand med tyngde 245 N?",
      options: ["25 kg", "245 kg", "2 400 kg", "24 N"],
      explanation: "$m = G/g = 245/9{,}81 = 25$ kg. Tyngde måles i newton, masse i kilogram — de er ikke samme størrelse.",
    },
    {
      question: "Hva skjer med tyngden din hvis du reiser til månen?",
      options: ["Den blir mindre, mens massen er uendret", "Både tyngden og massen blir mindre", "Tyngden er uendret, mens massen blir mindre", "Begge deler er uendret"],
      explanation: "$G = mg$, og $g$ er mindre på månen. Massen er en egenskap ved legemet og endrer seg ikke.",
    },
    {
      question: "Hvorfor får en fallskjermhopper til slutt konstant fart?",
      options: ["Luftmotstanden blir like stor som tyngden", "Tyngdeakselerasjonen avtar med høyden", "Massen avtar under fallet", "Luftmotstanden blir større enn tyngden"],
      explanation: "Ved terminalfart er $\\Sigma F = 0$. Ble luftmotstanden større enn tyngden, ville hopperen bremset opp igjen — det skjer ikke i stasjonær tilstand.",
    },
    {
      question: "Hvorfor gjelder ikke $v = \\sqrt{2gh}$ for et fall med merkbar luftmotstand?",
      options: ["Akselerasjonen er ikke konstant underveis", "Tyngden virker ikke lenger nedover", "Formelen krever at massen er kjent", "Luftmotstand endrer verdien av $g$"],
      explanation: "Formelen forutsetter konstant akselerasjon $g$. Med luftmotstand avtar akselerasjonen mot null, så forutsetningen brister.",
    },
    {
      question: "En kloss på 4,0 kg på friksjonsfritt bord er koblet over en trinse til et lodd på 2,0 kg. Hva er akselerasjonen?",
      options: ["3,3 m/s²", "4,9 m/s²", "9,8 m/s²", "2,0 m/s²"],
      explanation: "$a = m_2g/(m_1+m_2) = 19{,}6/6{,}0 = 3{,}3$ m/s². Å glemme klossens masse i nevneren gir 4,9 m/s².",
    },
    {
      question: "Hvorfor faller snordraget bort når du ser på to sammenkoblede legemer som ett system?",
      options: ["Det er en indre kraft og faller ut parvis", "Det er alltid mye mindre enn de ytre kreftene", "Snoren er masseløs og kan derfor ikke overføre kraft", "Systemligningen gjelder bare når snordraget er null"],
      explanation: "Indre krefter opptrer parvis etter 3. lov. Derfor kan et system aldri akselerere seg selv med indre krefter.",
    },
    {
      question: "Hva er den beste sjekklista når du skal finne alle kreftene på et legeme?",
      options: ["Først alle berøringer, så tyngden", "Først alle bevegelser, så farten", "Først alle akselerasjoner, så massen", "Først alle vinkler, så komposantene"],
      explanation: "Kontaktkrefter oppstår der noe berører legemet; tyngden er den eneste fjernkraften i mekanikken. Da glemmer du ikke normalkraft eller snordrag.",
    },
    {
      question: "En bok ligger i ro på et bord. Hvorfor er normalkraften like stor som tyngden?",
      options: ["Fordi boka er i ro, så $\\Sigma F = 0$", "Fordi de er et kraftpar etter Newtons 3. lov", "Fordi normalkraften alltid er $mg$", "Fordi bordet har samme masse som boka"],
      explanation: "Likheten følger av kraftbalansen, ikke av 3. lov. Legg en hånd oppå boka, og $N$ blir straks større enn $mg$.",
    },
    {
      question: "Hvor bør du legge $x$-aksen i en oppgave med bevegelse langs et underlag?",
      options: ["Langs bevegelsesretningen", "Alltid vannrett, uansett underlag", "Langs den største kraften", "Loddrett, i tyngdens retning"],
      explanation: "Med $x$ langs bevegelsen blir $a_y = 0$, og den loddrette ligningen gir deg normalkraften gratis.",
    },
    {
      question: "To lodd på 5,0 kg og 3,0 kg henger over en friksjonsfri trinse. Hva er snordraget?",
      options: ["37 N", "49 N", "29 N", "78 N"],
      explanation: "$S = m_2(g+a) = 3{,}0 \\cdot 12{,}26 = 37$ N. 49 N og 29 N er de to tyngdene — snordraget må ligge mellom dem.",
    },
    {
      question: "Hva er enheten newton uttrykt i grunnenheter?",
      options: ["kg·m/s²", "kg·m/s", "kg/m²", "kg·m²/s²"],
      explanation: "Fra $F = ma$: kilogram ganger meter per sekund i andre. Den siste er enheten for energi (joule).",
    },
    {
      question: "Når må du isolere ett enkelt legeme i stedet for å se hele systemet under ett?",
      options: ["Når du skal finne snordraget eller en annen indre kraft", "Når du skal finne akselerasjonen til hele systemet", "Når legemene har ulik masse", "Når det er friksjon i systemet"],
      explanation: "Indre krefter faller ut av systemligningen. Skal du ha snordraget frem, må du sette opp $\\Sigma F = ma$ for ett av legemene.",
    },
    {
      question: "En medstudent tegner en pil merket «sentrifugalkraft» eller «$ma$» i frilegemediagrammet. Hva er innvendingen?",
      options: ["Bare krefter fra noe konkret skal tegnes", "Pilen peker feil vei og bør snus", "Pilen bør tegnes med en annen farge enn de andre", "Pilen skal tegnes fra et annet angrepspunkt"],
      explanation: "Hver pil må kunne knyttes til en konkret påvirkning: et underlag, en snor, jorda. $ma$ er resultatet av kreftene, ikke en av dem.",
    },
    {
      question: "Hvorfor må du skrive hvilken retning du regner som positiv?",
      options: ["Fortegnene henger av retningsvalget", "Fordi svaret ellers får feil enhet", "Fordi positiv retning alltid må være oppover", "Fordi Newtons 2. lov bare gjelder i positiv retning"],
      explanation: "Valget er fritt, men det må stå og holdes fast. Sensorkravet om å innføre egne symboler og konvensjoner gjelder også retningsvalget.",
    },
    {
      question: "Hva er normalkraften på en kasse på 50 kg som står på gulvet mens du drar 180 N rett oppover i den?",
      options: ["311 N", "491 N", "671 N", "180 N"],
      explanation: "$N = mg - F = 491 - 180 = 311$ N. Å sette $N = mg$ på autopilot gir 491 N og er den vanligste feilen her.",
    },
  ],
  'fys1001-1-3': [
    {
      question: "Hva er normalkraften på en kloss med masse $m$ på et skråplan med vinkel $\\theta$?",
      options: ["$mg\\cos\\theta$", "$mg$", "$mg\\sin\\theta$", "$mg\\tan\\theta$"],
      explanation: "Komposanten av tyngden inn i planet er $mg\\cos\\theta$. Å bruke $mg$ er den hyppigst påpekte feilen i sjangeren.",
    },
    {
      question: "Hva er tyngdens komposant langs et skråplan med vinkel $\\theta$?",
      options: ["$mg\\sin\\theta$", "$mg\\cos\\theta$", "$mg$", "$\\mu mg\\cos\\theta$"],
      explanation: "Drivkraften nedover langs planet er $mg\\sin\\theta$. Sjekk med $\\theta = 0$: da skal den bli null.",
    },
    {
      question: "Hvilken enhet har friksjonstallet $\\mu$?",
      options: ["Det er dimensjonsløst", "newton (N)", "newton per kilogram", "meter per sekund i andre"],
      explanation: "$\\mu = R/N$ er forholdet mellom to krefter, så enhetene forkortes bort.",
    },
    {
      question: "En kloss står i ro på et vannrett gulv, og du dytter med 40 N uten at den flytter seg. Hvor stor er friksjonskraften?",
      options: ["40 N", "$\\mu N$, uansett hvor hardt du dytter", "Null", "Litt mer enn 40 N"],
      explanation: "Hvilefriksjonen tilpasser seg: den er nøyaktig så stor som kraftbalansen krever, opp til grensen $\\mu_s N$.",
    },
    {
      question: "Hva er retardasjonen når en bil bremser på vannrett vei med friksjonstall $\\mu$?",
      options: ["$\\mu g$", "$\\mu mg$", "$g/\\mu$", "$\\mu g\\cos\\theta$"],
      explanation: "$-\\mu mg = ma$ gir $a = -\\mu g$. Massen forkortes bort, så bremselengden er uavhengig av hvor tung bilen er.",
    },
    {
      question: "En bil får halvert friksjonstall fordi veien blir våt. Hva skjer med bremselengden ved samme fart?",
      options: ["Den dobles", "Den halveres", "Den firedobles", "Den er uendret"],
      explanation: "$s = v_0^2/(2\\mu g)$: friksjonstallet står i nevneren, så halvert $\\mu$ gir dobbel strekning.",
    },
    {
      question: "Når blir en kloss liggende i ro på et skråplan?",
      options: ["Når $\\tan\\theta \\le \\mu_s$", "Når $\\sin\\theta \\le \\mu_s$", "Når massen er stor nok", "Når $\\cos\\theta \\le \\mu_s$"],
      explanation: "Vilkåret $mg\\sin\\theta \\le \\mu_s mg\\cos\\theta$ gir $\\tan\\theta \\le \\mu_s$ — helt uavhengig av massen.",
    },
    {
      question: "Friksjonstallet er 0,50. Ved hvilken hellingsvinkel begynner klossen å skli?",
      options: ["27°", "30°", "45°", "60°"],
      explanation: "$\\theta = \\arctan 0{,}50 = 26{,}6° \\approx 27°$. Å tro at $\\mu = 0{,}50$ svarer til 30° er en vanlig forveksling med $\\sin$.",
    },
    {
      question: "Hvorfor sklir en tung og en lett kloss av samme materiale ved samme vinkel?",
      options: ["Massen forkortes bort i sklivilkåret", "Fordi friksjonstallet vokser med massen", "Fordi normalkraften er uavhengig av massen", "Det gjør de ikke — den tunge sklir ved lavere vinkel"],
      explanation: "Både drivkraften ($mg\\sin\\theta$) og friksjonsgrensen ($\\mu mg\\cos\\theta$) er proporsjonale med massen, så den faller ut.",
    },
    {
      question: "En kasse skyves oppover et skråplan. Hvilken vei peker friksjonskraften?",
      options: ["Nedover langs planet", "Oppover langs planet", "Vinkelrett ut fra planet", "Rett nedover"],
      explanation: "Friksjonen virker alltid mot bevegelsen. Går kassen oppover, peker friksjonen nedover langs planet — og legger seg til tyngdekomposanten.",
    },
    {
      question: "En kloss sklir ned et plan med vinkel $\\theta$ og friksjonstall $\\mu$. Hva er akselerasjonen?",
      options: ["$g(\\sin\\theta - \\mu\\cos\\theta)$", "$g(\\sin\\theta + \\mu\\cos\\theta)$", "$g(\\cos\\theta - \\mu\\sin\\theta)$", "$\\mu g\\sin\\theta$"],
      explanation: "Nedover: drivkraft minus friksjon. Pluss-varianten gjelder når legemet beveger seg oppover og bremser.",
    },
    {
      question: "Hvorfor gir blokkeringsfrie bremser kortere bremselengde enn låste hjul?",
      options: ["Maksimal hvilefriksjon er større enn glidefriksjon", "Glidefriksjon er større enn hvilefriksjon", "Fordi bremsene blir kaldere når hjulet ruller", "Fordi normalkraften øker når hjulet ruller"],
      explanation: "$\\mu_s > \\mu$. I tillegg beholder du styringen med rullende hjul — et fullgodt svar nevner begge delene.",
    },
    {
      question: "Hva er drivkraften som skyver deg fremover når du går?",
      options: ["Friksjonskraften fra bakken på sålen", "Muskelkraften i beina, direkte", "Normalkraften fra bakken", "Tyngden, gjennom en skrå komposant"],
      explanation: "Du dytter bakover på bakken; etter Newtons 3. lov dytter bakken forover på deg, og det er en friksjonskraft.",
    },
    {
      question: "Hva forutsetter formelen $R = \\mu N$?",
      options: ["At legemet glir", "At legemet står i ro", "At underlaget er vannrett", "At massen er kjent"],
      explanation: "Ved glidning er $R = \\mu N$. Står legemet i ro, er $\\mu_s N$ bare en øvre grense, og den faktiske friksjonen finnes fra kraftbalansen.",
    },
    {
      question: "Hvordan sjekker du raskest at du ikke har byttet om $\\sin$ og $\\cos$ på et skråplan?",
      options: ["Sett $\\theta = 0$ og se om uttrykkene blir riktige", "Sett $\\mu = 0$ og se om friksjonen blir null", "Kontroller at svaret har riktig enhet", "Regn ut med både $\\sin$ og $\\cos$ og velg det største"],
      explanation: "Ved $\\theta = 0$ skal $N = mg$ og komposanten langs planet bli null. Bytter du om, feiler testen umiddelbart.",
    },
    {
      question: "En kloss på 8,0 kg ligger på et bord ($\\mu = 0{,}40$) og er koblet over en trinse til et lodd på 2,0 kg. Hva skjer?",
      options: ["Systemet står stille", "Systemet akselererer 2,0 m/s²", "Systemet akselererer 9,8 m/s²", "Snordraget blir null"],
      explanation: "Loddets tyngde er 19,6 N, mens maksimal friksjon er 31,4 N. Bevegelsen kommer aldri i gang, og akselerasjonen er null.",
    },
    {
      question: "Hvor mye må friksjonskraften minst være for at en kasse ikke skal skli ned et plan der $mg\\sin\\theta = 92$ N?",
      options: ["92 N", "Null", "Like mye som normalkraften", "Like mye som tyngden"],
      explanation: "I ro krever kraftbalansen langs planet at friksjonen er nøyaktig like stor som tyngdekomposanten, altså 92 N — hvis underlaget kan gi så mye.",
    },
    {
      question: "Hva svarer 8 % stigning til i grader?",
      options: ["4,6°", "8,0°", "0,8°", "46°"],
      explanation: "$\\theta = \\arctan 0{,}08 = 4{,}6°$. For små vinkler er $\\sin\\theta \\approx \\tan\\theta$, så du kan bruke 0,08 direkte — men si at du gjør tilnærmingen.",
    },
    {
      question: "Hva skjer med friksjonskraften hvis du legger klossen på siden, slik at kontaktflaten blir dobbelt så stor?",
      options: ["Ingenting — flatens størrelse inngår ikke i $R = \\mu N$", "Den dobles, siden kontaktflaten dobles", "Den halveres, siden trykket halveres", "Den blir null så lenge klossen ikke glir"],
      explanation: "Friksjonskraften avhenger av normalkraften og friksjonstallet, ikke av arealet. Trykket halveres, men arealet dobles — det går opp i opp.",
    },
    {
      question: "En kasse er skjøvet oppover et plan og stopper. Hva må du sjekke før du regner ut akselerasjonen nedover?",
      options: ["Om $\\tan\\theta > \\mu_s$, slik at den faktisk sklir", "Om massen er stor nok til å overvinne friksjonen", "Om farten oppover var stor nok", "Om normalkraften er større enn tyngden"],
      explanation: "Blir $\\tan\\theta \\le \\mu_s$, blir kassen liggende og akselerasjonen er null — ikke et negativt tall.",
    },
  ],
  'fys1001-1-4': [
    {
      question: "Hva er sentripetalakselerasjonen til et legeme i sirkelbevegelse?",
      options: ["$v^2/r$, rettet mot sentrum", "$v/r$, rettet mot sentrum", "$v^2/r$, rettet langs banen", "$v^2 r$, rettet bort fra sentrum"],
      explanation: "$a = v^2/r$ og retningen er radiell, inn mot sentrum. Farten er tangentiell, akselerasjonen radiell.",
    },
    {
      question: "Hva er «sentripetalkraften»?",
      options: ["Navnet på resultanten målt mot sentrum", "En egen naturkraft som virker i all sirkelbevegelse og peker innover", "Kraften som presser legemet utover i svingen", "Kraften snoren utøver, uansett retning"],
      explanation: "Det er en betingelse resultanten må oppfylle, ikke en ny kraft. Å tegne den i tillegg til de virkelige kreftene teller samme kraft to ganger.",
    },
    {
      question: "Hva er den radielle ligningen i toppunktet av en loop, med retning mot sentrum som positiv?",
      options: ["$G + N = mv^2/r$", "$N - G = mv^2/r$", "$G - N = mv^2/r$", "$N = mv^2/r$"],
      explanation: "I toppen peker både tyngden og normalkraften nedover, altså mot sentrum, så begge går inn med pluss.",
    },
    {
      question: "Hva er den radielle ligningen i bunnpunktet av en loop, med retning mot sentrum som positiv?",
      options: ["$N - G = mv^2/r$", "$G + N = mv^2/r$", "$G - N = mv^2/r$", "$N + G = 0$"],
      explanation: "I bunnen peker $N$ oppover mot sentrum (pluss) og tyngden nedover bort fra sentrum (minus).",
    },
    {
      question: "Hva er minstefarten i toppunktet av en loop med radius $r$?",
      options: ["$\\sqrt{gr}$", "$\\sqrt{2gr}$", "$gr$", "$\\sqrt{g/r}$"],
      explanation: "Sett $N = 0$: $mg = mv^2/r$ gir $v = \\sqrt{gr}$. Massen forkortes bort, så grensen er den samme for tom og full vogn.",
    },
    {
      question: "Hvor er normalkraften størst i en vertikal loop ved samme fart?",
      options: ["I bunnpunktet", "I toppunktet", "På sidene", "Den er like stor overalt"],
      explanation: "$N = m(g + v^2/r)$ i bunnen mot $N = m(v^2/r - g)$ i toppen. Leddet $mv^2/r$ er likt; tyngden legges til i bunnen og trekkes fra i toppen.",
    },
    {
      question: "En loop har radius 6,5 m. Hva er minstefarten i toppunktet?",
      options: ["8,0 m/s", "11 m/s", "64 m/s", "4,0 m/s"],
      explanation: "$v = \\sqrt{9{,}81 \\cdot 6{,}5} = 8{,}0$ m/s. 11 m/s ville svart til $\\sqrt{2gr}$, som er farten fra fritt fall gjennom radien.",
    },
    {
      question: "Hva er grensefarten i en flat sving med radius $r$ og friksjonstall $\\mu$?",
      options: ["$\\sqrt{\\mu g r}$", "$\\mu g r$", "$\\sqrt{g r/\\mu}$", "$\\mu\\sqrt{gr}$"],
      explanation: "Sett maksimal friksjon $\\mu mg$ lik $mv^2/r$. Massen forkortes bort, så grensefarten er uavhengig av bilens masse.",
    },
    {
      question: "Hvilket symbol bruker denne boka for gravitasjonskonstanten?",
      options: ["$\\gamma$", "$G$", "$g$", "$k$"],
      explanation: "$G$ er reservert for tyngden $G = mg$, og $g$ er tyngdeakselerasjonen. Konstanten skrives $\\gamma$.",
    },
    {
      question: "Hva er banefarten til en satellitt i sirkelbane med radius $r$?",
      options: ["$\\sqrt{\\gamma M/r}$", "$\\sqrt{\\gamma m/r}$", "$\\gamma M/r^2$", "$\\sqrt{\\gamma M r}$"],
      explanation: "Fra $\\gamma mM/r^2 = mv^2/r$. Satellittens masse $m$ forkortes bort — bare sentrallegemets masse $M$ og radien står igjen.",
    },
    {
      question: "Hvorfor går en tung romstasjon og en løs skrue i samme bane med samme fart?",
      options: ["Banefarten avhenger ikke av massen til legemet i bane", "Fordi skruen er festet til stasjonen med gravitasjon", "Fordi begge har samme tyngde i bane, nemlig null", "Fordi luftmotstanden er lik for begge"],
      explanation: "Massen $m$ forkortes bort i $\\gamma mM/r^2 = mv^2/r$. Det er dette resultatet oppgavene ber deg vise, ikke bare påstå.",
    },
    {
      question: "Hva er baneradien i en satellittoppgave når banen ligger 400 km over bakken?",
      options: ["Jordradien pluss 400 km", "400 km", "Jordradien minus 400 km", "Jordas diameter pluss 400 km"],
      explanation: "$r$ i gravitasjonsloven måles fra jordas sentrum. Å bruke 400 km alene er en dokumentert tallfeil i sjangeren.",
    },
    {
      question: "Hvordan er omløpstiden knyttet til banefart og radius?",
      options: ["$T = 2\\pi r/v$", "$T = v/(2\\pi r)$", "$T = 2\\pi r v$", "$T = \\pi r^2/v$"],
      explanation: "Én runde er omkretsen $2\\pi r$, og farten er konstant, så tiden er omkrets delt på fart.",
    },
    {
      question: "Hvorfor svever astronauter i romstasjonen?",
      options: ["Både stasjonen og astronauten er i fritt fall", "Fordi gravitasjonen er null i 400 km høyde", "Fordi stasjonens rotasjon opphever tyngden fullstendig", "Fordi de er utenfor jordas gravitasjonsfelt"],
      explanation: "Tyngdeakselerasjonen er fortsatt $8{,}7$ m/s² der oppe. Det som mangler, er kontaktkraften — akkurat som i en heis i fritt fall.",
    },
    {
      question: "Hva skjer med normalkraften når en bil kjører over en rund bakketopp for fort?",
      options: ["Den blir null ved $v = \\sqrt{gr}$", "Den vokser, og bilen presses stadig hardere ned i veien", "Den blir negativ, og veien trekker bilen ned", "Den er uendret, siden veien er vannrett på toppen"],
      explanation: "På bakketoppen er sentrum under veien: $mg - N = mv^2/r$. Ved $v = \\sqrt{gr}$ blir $N = 0$ — samme grensefart som i loopens toppunkt.",
    },
    {
      question: "Hva blir sentripetalakselerasjonen om farten dobles i samme sving?",
      options: ["Den firedobles", "Doblet", "Den er uendret", "Halvert"],
      explanation: "$a = v^2/r$ går som kvadratet av farten. Det er derfor farten, ikke svingens skarphet, oftest er det kritiske.",
    },
  ],
  'fys1001-1-5': [
    {
      question: "Hva er kraftmomentet av en kraft $F$ med normalarm $d$?",
      options: ["$M = F \\cdot d$", "$M = F/d$", "$M = F \\cdot d^2$", "$M = F + d$"],
      explanation: "Moment er kraft ganger normalarm, med enhet newtonmeter (Nm).",
    },
    {
      question: "Hva er normalarmen til en kraft?",
      options: ["Den vinkelrette avstanden fra momentpunktet til kraftens virkelinje", "Avstanden fra momentpunktet til kraftens angrepspunkt", "Lengden av hele bjelken", "Avstanden mellom de to støttepunktene"],
      explanation: "Bare når kraften står vinkelrett på bjelken, er normalarmen lik avstanden til angrepspunktet. Ellers er $d = L\\sin\\theta$.",
    },
    {
      question: "En kraft på 200 N virker 0,50 m fra dreiepunktet, i en retning som danner $30^\\circ$ med bjelken. Hva er momentet?",
      options: ["50 Nm", "100 Nm", "87 Nm", "400 Nm"],
      explanation: "$M = FL\\sin\\theta = 200 \\cdot 0{,}50 \\cdot 0{,}50 = 50$ Nm. Å glemme $\\sin\\theta$ gir 100 Nm.",
    },
    {
      question: "Hvilke to krav må være oppfylt for at et utstrakt legeme skal være i likevekt?",
      options: ["$\\Sigma F = 0$ og $\\Sigma M = 0$", "Bare $\\Sigma F = 0$", "Bare $\\Sigma M = 0$", "$\\Sigma F = ma$ og $\\Sigma M = 0$"],
      explanation: "Kraftbalanse alene hindrer ikke rotasjon: to like store, motsatt rettede krefter med ulikt angrepspunkt gir dreining.",
    },
    {
      question: "Hvor bør du velge momentpunkt?",
      options: ["Der en ukjent kraft angriper", "Alltid midt på bjelken", "Alltid i massesenteret", "Der den største kraften angriper"],
      explanation: "Da faller den ukjente ut av momentligningen, siden normalarmen er null. Begrunn valget i besvarelsen.",
    },
    {
      question: "Hvor virker tyngden av en jevn planke?",
      options: ["I massesenteret, midt på planken", "I den enden som er lavest", "Fordelt slik at den ikke gir moment", "I det punktet planken hviler på"],
      explanation: "Tyngden regnes som om den virker i massesenteret. Å glemme plankens egen tyngde er en dokumentert feil.",
    },
    {
      question: "To barn balanserer på en vippe. Ett barn på 32 kg sitter 1,8 m fra midten. Hvor må et barn på 24 kg sitte?",
      options: ["2,4 m fra midten", "1,4 m fra midten", "1,8 m fra midten", "3,2 m fra midten"],
      explanation: "$d_2 = m_1d_1/m_2 = 32 \\cdot 1{,}8/24 = 2{,}4$ m. Det lettere barnet må sitte lengst ute.",
    },
    {
      question: "Hva kjennetegner situasjonen akkurat ved veltegrensen?",
      options: ["Normalkraften i den ene støtten er null", "Normalkraften i begge støttene er like stor", "Summen av alle momenter er større enn null", "Tyngden virker utenfor legemet"],
      explanation: "Ved grensen løfter legemet seg fra den ene støtten, så $N = 0$ der. Momentbalansen settes om den andre støtten.",
    },
    {
      question: "Hvorfor må muskelkraften i bicepsen være mange ganger lastens tyngde?",
      options: ["Muskelens momentarm er mye kortere enn lastens", "Muskelen er svakere enn lasten er tung", "Fordi armen også har egen tyngde", "Fordi leddkraften trekker motsatt vei"],
      explanation: "Momentbalansen $F d_{\\text{muskel}} = G d_{\\text{last}}$ med $d_{\\text{muskel}} \\ll d_{\\text{last}}$ krever stor $F$. Armens egen tyngde bidrar, men er ikke hovedgrunnen.",
    },
    {
      question: "Hva er kraften i hver av to symmetriske snorer som holder en last, når snorene danner vinkelen $\\alpha$ med vannrett?",
      options: ["$mg/(2\\sin\\alpha)$", "$mg/2$", "$mg\\sin\\alpha/2$", "$2mg\\sin\\alpha$"],
      explanation: "Loddrett likevekt: $2S\\sin\\alpha = mg$. Liten vinkel gir dermed stort drag.",
    },
    {
      question: "Hva skjer med draget i to skrå snorer når vinkelen til vannrett blir mindre?",
      options: ["Det øker", "Det avtar", "Det er uendret", "Det blir null"],
      explanation: "$S = mg/(2\\sin\\alpha)$: når $\\sin\\alpha$ går mot null, vokser $S$ uten grense. Derfor må en klesnor henge litt ned.",
    },
    {
      question: "Hvorfor velges stigens fot som momentpunkt i stigeoppgaven?",
      options: ["Både normalkraften og friksjonen fra gulvet angriper der", "Fordi tyngden angriper der", "Fordi veggkraften angriper der", "Fordi stigen roterer om foten under bruk"],
      explanation: "To av fire krefter faller ut av momentligningen, som da bare inneholder tyngden og veggkraften.",
    },
    {
      question: "En jevn stige står mot en glatt vegg. Hvor stor er normalkraften fra gulvet?",
      options: ["Lik stigens tyngde", "Lik veggkraften", "Lik halvparten av tyngden", "Null, siden veggen bærer stigen"],
      explanation: "Veggen er glatt og gir bare en vannrett kraft, så loddrett kraftbalanse gir $N_{\\text{gulv}} = G$.",
    },
    {
      question: "Hva skjer med friksjonskravet til gulvet når noen klatrer opp en stige?",
      options: ["Det øker", "Det avtar", "Det er uendret", "Det blir null når personen er på toppen"],
      explanation: "Personens tyngde gir et ekstra moment om foten som må balanseres av større veggkraft — og friksjonen må være lik veggkraften.",
    },
    {
      question: "Om hvilket punkt gjelder $\\Sigma M = 0$ for et legeme i likevekt?",
      options: ["Om hvilket som helst punkt", "Bare om massesenteret", "Bare om et støttepunkt", "Bare om et punkt på legemet"],
      explanation: "Friheten er full — og gir deg en gratis kontroll: regn om et annet punkt og se om svaret består.",
    },
    {
      question: "Hvorfor sitter dørhåndtaket langt fra hengslene?",
      options: ["Lang normalarm gir stort moment med liten kraft", "Fordi hengslene ellers ville brutt sammen", "Fordi kraften blir større langt fra dreiepunktet", "Fordi døra da veier mindre"],
      explanation: "$M = F \\cdot d$: samme kraft med større arm gir større moment. Kraften du bruker blir ikke større — momentet blir det.",
    },
  ],
  'fys1001-1-6': [
    {
      question: "Hva er trinn 1 i løsningsoppskriften for en mekanikkoppgave?",
      options: ["Tegne frilegemediagram", "Sette inn tall i formelen", "Regne om alle enheter til SI", "Velge hvilken formel som gir svaret"],
      explanation: "Figuren først, tall sist. Løsningsforslagene tegner alltid frilegemediagram, og manglende figur koster inntil 1 poeng.",
    },
    {
      question: "Hvilken lov gjelder for et legeme som beveger seg med konstant fart?",
      options: ["$\\Sigma F = 0$", "$\\Sigma F = ma$ med $a$ lik farten", "$\\Sigma F_{\\text{radiell}} = mv^2/r$", "$\\Sigma M = 0$ alene"],
      explanation: "Konstant fart betyr $a = 0$, altså kraftbalanse. Det er signalordet som gir deg ligningen gratis.",
    },
    {
      question: "Når skal du IKKE bruke bevegelsesligningene for konstant akselerasjon?",
      options: ["Når banen er krum eller kraften varierer", "Når legemet starter fra ro", "Når massen ikke er oppgitt", "Når bevegelsen går nedover"],
      explanation: "Krum bane, fjærkraft og luftmotstand gir varierende akselerasjon. Da er energimetoden riktig verktøy.",
    },
    {
      question: "En heis er på vei oppover og bremser. Hvilken vei peker akselerasjonen?",
      options: ["Nedover", "Oppover", "Den er null", "Vannrett"],
      explanation: "Farten oppover avtar, så fartsendringen — og dermed akselerasjonen — peker nedover. Vekta viser da mindre enn tyngden.",
    },
    {
      question: "En person på 82 kg står i en heis som bremser med 1,8 m/s² på vei opp. Hva viser vekta?",
      options: ["657 N", "804 N", "952 N", "148 N"],
      explanation: "$N = m(g+a) = 82 \\cdot (9{,}81-1{,}8) = 657$ N. 952 N ville svart til akselerasjon oppover.",
    },
    {
      question: "Hva må du gjøre når bevegelsesretningen snur midt i en oppgave?",
      options: ["Tegne nytt diagram — friksjonen snur", "Bytte fortegn på tyngden", "Endre friksjonstallet", "Bytte fra $\\Sigma F = ma$ til $\\Sigma M = 0$"],
      explanation: "Friksjonen virker alltid mot bevegelsen. Størrelsen er den samme, men retningen skifter, og resultanten blir helt annerledes.",
    },
    {
      question: "Hva er akselerasjonen for en kloss som sklir nedover et plan med vinkel $\\theta$ og friksjonstall $\\mu$?",
      options: ["$g(\\sin\\theta - \\mu\\cos\\theta)$", "$g(\\sin\\theta + \\mu\\cos\\theta)$", "$\\mu g\\cos\\theta$", "$g\\sin\\theta$"],
      explanation: "Drivkraft minus friksjon, delt på massen — massen forkortes bort. Pluss-varianten gjelder ved bevegelse oppover.",
    },
    {
      question: "I et trinsesystem har du funnet $a$ og $S$ ved å legge sammen de to ligningene. Hva er den beste kontrollen?",
      options: ["Sett tallene inn i ligningen du ikke brukte", "Regne om alle enheter en gang til", "Sjekke at $S$ er større enn hver av de to tyngdene", "Regne oppgaven med dobbelt så stor masse"],
      explanation: "Den ubrukte ligningen er en uavhengig kontroll. Og snordraget skal ligge mellom tyngdene, ikke over begge.",
    },
    {
      question: "Hva er minstefarten i toppunktet av en loop med radius 9,0 m?",
      options: ["9,4 m/s", "13 m/s", "88 m/s", "4,7 m/s"],
      explanation: "$v = \\sqrt{gr} = \\sqrt{9{,}81 \\cdot 9{,}0} = 9{,}4$ m/s. 13 m/s svarer til $\\sqrt{2gr}$.",
    },
    {
      question: "Hvor bør momentpunktet velges i en statikkoppgave?",
      options: ["Der en ukjent kraft angriper", "Midt på bjelken", "I massesenteret", "Der den kjente lasten henger"],
      explanation: "Da faller den ukjente ut av momentligningen. Skriv begrunnelsen — det er en poengbærende setning.",
    },
    {
      question: "Hvorfor blir bicepskraften mange ganger større enn tyngden av det du holder?",
      options: ["Muskelens momentarm er mye kortere enn lastens", "Muskelen må også bære overarmens tyngde", "Leddet gir en kraft i samme retning som lasten", "Fordi muskler alltid arbeider med lav virkningsgrad"],
      explanation: "Momentbalansen om leddet: kort arm krever stor kraft. Gevinsten er at hånden flytter seg langt når muskelen trekker seg litt sammen.",
    },
    {
      question: "Hva betyr signalordet «uten ny utregning» i en deloppgave?",
      options: ["Bruk en proporsjonalitet, som $s \\propto v_0^2$", "Du skal gjette svaret", "Du skal svare med det samme tallet som i forrige deloppgave", "Du skal bruke kalkulatoren i stedet for å regne i hodet"],
      explanation: "Slike deloppgaver tester om du ser sammenhengen: dobbel fart gir firedobbel bremselengde, uten at noe må regnes om.",
    },
    {
      question: "Hva er den hyppigst påpekte enkeltfeilen i hele eksamensarkivet?",
      options: ["Tallsvar uten begrunnelse", "Feil antall gjeldende siffer", "Å tegne figuren for stygt", "Å bruke for mye tid på siste oppgave"],
      explanation: "Rene tallsvar gir «liten eller ingen uttelling». Begrunnelsen i hvert ledd er det som bærer poengene.",
    },
    {
      question: "En akebrett-kjører glir 51 m på flatmark. Hvor langt glir hun hvis farten inn på flatmarken dobles?",
      options: ["Om lag 200 m", "Om lag 100 m", "Om lag 51 m", "Om lag 400 m"],
      explanation: "$s = v^2/(2\\mu g)$ er proporsjonal med kvadratet av farten: $4 \\cdot 51 \\approx 200$ m.",
    },
    {
      question: "Hva bør stå i den avsluttende setningen i en mekanikkbesvarelse?",
      options: ["En rimelighetsvurdering av svaret", "En liste over formlene du brukte", "En kommentar om hvor lang tid oppgaven tok", "En alternativ løsningsmetode"],
      explanation: "Toppsjiktet vurderer om tallet er fysisk fornuftig. Å tilby to alternative svar er derimot helgardering og gir trekk.",
    },
    {
      question: "Hvorfor er svaret i en skråplanoppgave ofte uavhengig av massen?",
      options: ["Massen står i både kraft og treghet, og forkortes", "Fordi tyngdeakselerasjonen er den samme for alle legemer", "Fordi friksjonstallet er uavhengig av massen", "Fordi normalkraften alltid er $mg$"],
      explanation: "Både $mg\\sin\\theta$ og $\\mu mg\\cos\\theta$ er proporsjonale med $m$, og $\\Sigma F = ma$ gir $m$ på begge sider.",
    },
  ],
  'fys1001-2-1': [
    {
      question: "En konstant kraft på 40 N virker i bevegelsesretningen mens en kasse flyttes 5,0 m. Hvor stort arbeid gjør kraften?",
      options: ["200 J", "8,0 J", "45 J", "200 W"],
      explanation: "Kraften peker langs bevegelsen, så $\\cos\\theta = 1$ og $W = Fs = 40\\ \\text{N}\\cdot 5{,}0\\ \\text{m} = 200$ J. «8,0 J» kommer av å dele i stedet for å gange, «45 J» av å legge sammen, og «200 W» har riktig tall, men watt er effekt — ikke arbeid.",
    },
    {
      question: "En kraft står vinkelrett på forflytningen. Hvor stort arbeid gjør den?",
      options: ["Null", "Like stort som $Fs$", "Halvparten av $Fs$, fordi bare én komponent teller med", "Negativt, siden vinkelen er større enn null"],
      explanation: "$W = Fs\\cos\\theta$ med $\\theta = 90^\\circ$ gir $\\cos 90^\\circ = 0$, altså $W = 0$. Kraften påvirker retningen, men overfører ingen energi til legemet.",
    },
    {
      question: "En kloss glir 3,0 m bortover et gulv mens friksjonskraften er 25 N. Hvor stort arbeid gjør friksjonen på klossen?",
      options: ["$-75$ J", "$+75$ J", "$-8{,}3$ J", "0 J, fordi friksjonen ikke flytter klossen"],
      explanation: "Friksjonen peker mot bevegelsen, altså $\\theta = 180^\\circ$ og $\\cos 180^\\circ = -1$: $W_R = -Rs = -25\\ \\text{N}\\cdot 3{,}0\\ \\text{m} = -75$ J. Positivt fortegn er den klassiske feilen; $-8{,}3$ J kommer av å dele i stedet for å gange.",
    },
    {
      question: "En koffert trilles 20 m bortover et vannrett gulv. Hvor stort arbeid gjør tyngden på kofferten?",
      options: ["0 J", "$mg\\cdot 20$ J", "$-mg\\cdot 20$ J", "Det avhenger av hvor tung kofferten er, og av friksjonstallet mot gulvet"],
      explanation: "Tyngden peker rett ned og forflytningen er vannrett, så $\\theta = 90^\\circ$ og $W_G = 0$. Massen spiller ingen rolle for dette svaret — det er nettopp poenget.",
    },
    {
      question: "En bil dobler farten sin. Hvordan endres den kinetiske energien?",
      options: ["Den blir fire ganger så stor", "Den blir dobbelt så stor", "Den blir åtte ganger så stor", "Den endres ikke, siden massen er den samme"],
      explanation: "$E_k = \\tfrac12 mv^2$ er proporsjonal med kvadratet av farten: $2^2 = 4$. Å tro at den bare dobles er lineær-tenkning i en kvadratlov — den samme feilen som gir feil svar på bremselengde.",
    },
    {
      question: "Hva sier arbeid–energi-setningen?",
      options: ["At nettoarbeidet på et legeme er lik endringen i kinetisk energi", "At arbeidet fra tyngden er lik den kinetiske energien", "At summen av kinetisk og potensiell energi alltid er konstant", "At effekten er arbeid delt på tid"],
      explanation: "Setningen er $W_{\\text{netto}} = \\Delta E_k$, og den gjelder også ved variabel kraft og krum bane. Svaret «At summen av kinetisk og potensiell energi alltid …» er energibevaring uten friksjon (et annet, snevrere utsagn), og svaret «At effekten er arbeid delt på tid» er definisjonen av effekt.",
    },
    {
      question: "En sekk bæres opp en slak trapp som er 3,0 m høy og 6,0 m lang langs trinnene. Hvilken lengde skal inn i $E_p = mgh$?",
      options: ["3,0 m", "6,0 m", "9,0 m", "4,5 m, som er gjennomsnittet av de to lengdene"],
      explanation: "$h$ er den loddrette høyden over nullnivået, altså 3,0 m. Lengden langs trinnene spiller ingen rolle, fordi tyngden er en konservativ kraft: bare høydeforskjellen teller.",
    },
    {
      question: "Hvor må nullnivået for potensiell energi ligge?",
      options: ["Der du selv velger, så lenge du sier fra og holder det fast", "Alltid ved bakken", "Alltid i legemets startpunkt", "Alltid i tyngdepunktet til legemet"],
      explanation: "Bare endringer i $E_p$ har fysisk betydning, så nullnivået er et fritt valg. Kravet fra løsningsforslagene er at du oppgir valget og bruker det konsekvent gjennom hele regnestykket.",
    },
    {
      question: "En fjær med $k = 200$ N/m trykkes sammen 10 cm. Hvor mye energi er lagret?",
      options: ["1,0 J", "10 J", "20 J", "100 J"],
      explanation: "$E_f = \\tfrac12 kx^2 = \\tfrac12\\cdot 200\\ \\text{N/m}\\cdot (0{,}10\\ \\text{m})^2 = 1{,}0$ J. Svarene 10 J og 100 J oppstår hvis du glemmer å regne om centimeter til meter.",
    },
    {
      question: "Hva er SI-enheten for effekt?",
      options: ["Watt (W)", "Joule (J)", "Newton (N)", "Newtonmeter (N·m)"],
      explanation: "Effekt er energi per tid: $1\\ \\text{W} = 1\\ \\text{J/s}$. Joule og newtonmeter er energienheter, og newton er en kraftenhet.",
    },
    {
      question: "En kraft $F$ virker langs bevegelsen mens farten er konstant lik $v$. Hvilken formel gir effekten?",
      options: ["$P = Fv$", "$P = Fv^2$", "$P = F/v$", "$P = \\tfrac12 Fv^2$"],
      explanation: "$P = W/t = Fs/t = Fv$. Formen $\\tfrac12 Fv^2$ er en sammenblanding med uttrykket for kinetisk energi, og $F/v$ har feil enhet (N·s/m).",
    },
    {
      question: "En bil kjører opp en bakke med konstant fart. Hvor stor er drivkraften sammenlignet med summen av motkreftene (friksjon, luftmotstand og tyngdekomponenten langs veien)?",
      options: ["Nøyaktig like stor", "Større, ellers ville bilen ikke kommet oppover", "Mindre, fordi motoren får hjelp av svinghjulet", "Dobbelt så stor"],
      explanation: "Konstant fart betyr $a = 0$, og Newtons 2. lov gir $\\Sigma F = ma = 0$. Da må drivkraften være nøyaktig like stor som summen av motkreftene. At bilen «kommer oppover» skyldes ikke overskuddskraft, men at farten allerede er der.",
    },
    {
      question: "En motor får tilført 2,0 kW og leverer 1,4 kW nyttig effekt. Hva er virkningsgraden?",
      options: ["70 %", "140 %", "0,6 %", "60 %"],
      explanation: "$\\eta = P_{\\text{nyttig}}/P_{\\text{tilført}} = 1{,}4/2{,}0 = 0{,}70 = 70\\ \\%$. Svaret 140 % kommer av å snu brøken, og 60 % av å regne tapet i stedet for nytten.",
    },
    {
      question: "Hvor mange joule er 1 kWh?",
      options: ["$3{,}6\\cdot 10^{6}$ J", "$1000$ J", "$3600$ J", "$6{,}0\\cdot 10^{4}$ J"],
      explanation: "$1\\ \\text{kWh} = 1000\\ \\text{W}\\cdot 3600\\ \\text{s} = 3{,}6\\cdot 10^{6}$ J. Svaret 3600 J glemmer kilo-faktoren, og $6{,}0\\cdot 10^4$ J kommer av å regne med 60 sekunder i stedet for 3600.",
    },
    {
      question: "En ball på 0,50 kg har farten 6,0 m/s. Hvor stor er den kinetiske energien?",
      options: ["9,0 J", "3,0 J", "18 J", "1,5 J"],
      explanation: "$E_k = \\tfrac12 mv^2 = \\tfrac12\\cdot 0{,}50\\ \\text{kg}\\cdot(6{,}0\\ \\text{m/s})^2 = 9{,}0$ J. Svaret 3,0 J oppstår hvis du glemmer kvadratet, og 18 J hvis du glemmer faktoren $\\tfrac12$.",
    },
    {
      question: "En kjelke med kinetisk energi 400 J bremses av en friksjonskraft på 50 N. Hvor langt glir den før den stopper?",
      options: ["8,0 m", "20 000 m", "0,125 m", "4,0 m"],
      explanation: "Friksjonen må ta opp hele den kinetiske energien: $Rs = E_k$, altså $s = 400\\ \\text{J}/50\\ \\text{N} = 8{,}0$ m. Svaret «20 000 m» kommer av å gange i stedet for å dele, og svaret «0,125 m» av å snu brøken.",
    },
    {
      question: "Hvor stort arbeid gjør normalkraften fra underlaget på en kloss som glir bortover et vannrett gulv?",
      options: ["Null", "Positivt, siden normalkraften er stor", "Negativt, siden den peker oppover", "Like stort som friksjonens arbeid, bare med motsatt fortegn"],
      explanation: "Normalkraften står vinkelrett på forflytningen, så $\\cos 90^\\circ = 0$ og arbeidet er null. Det gjelder uansett hvor stor normalkraften er.",
    },
    {
      question: "Hvilket av utsagnene om enheter er riktig?",
      options: ["$1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}$", "$1\\ \\text{J} = 1\\ \\text{N/m}$", "$1\\ \\text{W} = 1\\ \\text{J}\\cdot\\text{s}$", "$1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m}$"],
      explanation: "Arbeid er kraft ganger vei, altså $1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}$. Watt er joule **per** sekund, ikke joule ganger sekund, og newton er $\\text{kg}\\cdot\\text{m}/\\text{s}^2$.",
    },
    {
      question: "En heis løftes 20 m opp med konstant fart på 25 s, og det nyttige arbeidet er $9{,}0\\cdot 10^{4}$ J. Hva er den nyttige effekten?",
      options: ["3,6 kW", "2,25 MW", "3,6 kJ", "0,28 kW"],
      explanation: "$P = W/t = 9{,}0\\cdot 10^{4}\\ \\text{J}/25\\ \\text{s} = 3{,}6\\cdot 10^{3}$ W $= 3{,}6$ kW. «3,6 kJ» har riktig tall, men energienhet i stedet for effektenhet, og 0,28 kW kommer av å snu brøken.",
    },
    {
      question: "Hvorfor kan virkningsgraden aldri bli større enn 1?",
      options: ["Fordi en maskin ikke kan levere mer energi enn den får tilført", "Fordi friksjonen alltid er større enn drivkraften", "Fordi effekt alltid er mindre enn arbeid", "Fordi virkningsgraden er definert som et prosenttall og prosent stopper på 100"],
      explanation: "Energibevaring setter grensen: nyttig energi er en *del* av den tilførte energien, så $\\eta = E_{\\text{nyttig}}/E_{\\text{tilført}} \\le 1$. Resten går som regel til varme. At $\\eta$ ofte skrives i prosent, er bare en skrivemåte og ingen forklaring.",
    },
  ],
  'fys1001-2-2': [
    {
      question: "Hva er hovedbetingelsen for at den mekaniske energien er bevart?",
      options: ["At friksjon og luftmotstand kan neglisjeres", "At banen er rett", "At akselerasjonen er konstant", "At legemet starter fra ro i det høyeste punktet"],
      explanation: "Energibevaring $E_1 = E_2$ krever bare at ingen krefter tapper systemet for mekanisk energi. Banens form, akselerasjonen og startfarten spiller ingen rolle — det er nettopp derfor metoden er så kraftig.",
    },
    {
      question: "En kloss glir friksjonsfritt fra ro ned fra høyden $h$. Hvilket uttrykk gir farten nederst?",
      options: ["$v = \\sqrt{2gh}$", "$v = 2gh$", "$v = \\sqrt{gh}$", "$v = \\sqrt{2gh/m}$"],
      explanation: "Regnskapet $mgh = \\tfrac12 mv^2$ gir $v^2 = 2gh$, altså $v = \\sqrt{2gh}$. Massen forkortes bort, så den kan ikke stå i svaret.",
    },
    {
      question: "To kuler med ulik masse slippes fra samme høyde på samme friksjonsfrie bane. Hva gjelder for farten nederst?",
      options: ["Den er lik for begge", "Den tunge kula får størst fart", "Den lette kula får størst fart", "Det avhenger av hvor bratt banen er i starten"],
      explanation: "Massen står som faktor i begge ledd i $mgh = \\tfrac12 mv^2$ og forkortes bort, så $v = \\sqrt{2gh}$ er uavhengig av massen. Helningen påvirker tiden ned, ikke sluttfarten.",
    },
    {
      question: "Hvorfor kan du ikke bruke $2as = v^2 - v_0^2$ på en buet sklie?",
      options: ["Fordi akselerasjonen ikke er konstant langs en krum bane", "Fordi friksjonen alltid er for stor", "Fordi formelen bare gjelder for fritt fall uten noen form for underlag", "Fordi massen ikke er kjent"],
      explanation: "Bevegelsesligningene forutsetter konstant akselerasjon i størrelse og retning. På en krum bane endrer akselerasjonen seg hele veien, og løsningsforslagene godtar ikke metoden — heller ikke når tallet tilfeldigvis blir riktig.",
    },
    {
      question: "Hvilken form på energiregnskapet med friksjon anbefaler boka?",
      options: ["$E_1 = E_2 + R\\cdot s$", "$E_1 + R\\cdot s = E_2$", "$E_1 = E_2 - R\\cdot s$", "$E_1 = E_2$, siden friksjonen ikke er en mekanisk kraft"],
      explanation: "Skriv «det du startet med = det du har igjen + det friksjonen tok», altså $E_1 = E_2 + R\\cdot s$, med tre positive ledd. De to neste alternativene gir feil fortegn og dermed for stor sluttfart.",
    },
    {
      question: "Et legeme glir 4,0 m langs et skråplan med helning $30^\\circ$. Hvor stor er høydeforskjellen?",
      options: ["2,0 m", "4,0 m", "3,5 m", "8,0 m"],
      explanation: "$h = L\\sin\\theta = 4{,}0\\ \\text{m}\\cdot\\sin 30^\\circ = 2{,}0$ m. Å bruke $h = L$ er en vanlig feil som gir for stor potensiell energi; 3,5 m kommer av å bruke cosinus.",
    },
    {
      question: "En pendelkule svinger. Hvor stort arbeid gjør snordraget på kula?",
      options: ["Null", "Positivt på vei ned og negativt på vei opp", "Like stort som tyngdens arbeid", "Det avhenger av snorlengden"],
      explanation: "Snordraget peker langs snoren, altså vinkelrett på bevegelsen langs sirkelbuen. Med $\\theta = 90^\\circ$ i $W = Fs\\cos\\theta$ blir arbeidet null, uansett hvor stort snordraget er.",
    },
    {
      question: "En pendel med snorlengde $L$ trekkes ut vinkelen $\\theta$ fra loddlinja. Hvor høyt er kula løftet?",
      options: ["$h = L(1 - \\cos\\theta)$", "$h = L\\cos\\theta$", "$h = L\\sin\\theta$", "$h = L\\theta$"],
      explanation: "Den loddrette avstanden fra opphenget ned til kula er $L\\cos\\theta$ i utgangsstillingen og $L$ i bunnpunktet, så høydeforskjellen er $L - L\\cos\\theta = L(1-\\cos\\theta)$.",
    },
    {
      question: "En kloss sklir ut på et vannrett gulv med fart $v$ og friksjonstall $\\mu$. Hvilket uttrykk gir stopplengden?",
      options: ["$s = \\dfrac{v^2}{2\\mu g}$", "$s = \\dfrac{v}{2\\mu g}$", "$s = \\dfrac{mv^2}{2\\mu g}$", "$s = 2\\mu g v^2$"],
      explanation: "$\\tfrac12 mv^2 = \\mu mgs$ gir $s = v^2/(2\\mu g)$ etter at massen er forkortet bort. Svaret «$s = \\dfrac{mv^2}{2\\mu g}$» beholder massen feilaktig, og svaret «$s = \\dfrac{v}{2\\mu g}$» glemmer kvadratet.",
    },
    {
      question: "Hva skjer med stopplengden på et vannrett underlag når farten dobles?",
      options: ["Den blir fire ganger så lang", "Den blir dobbelt så lang", "Den blir den samme", "Den blir åtte ganger så lang"],
      explanation: "$s = v^2/(2\\mu g)$ er proporsjonal med kvadratet av farten, så $2^2 = 4$. Å svare «dobbelt» er lineær-tenkning i en kvadratlov.",
    },
    {
      question: "En kjelke starter fra ro i høyden 2,0 m og har farten 5,0 m/s nederst. Hva sier det om friksjonen?",
      options: ["Noe energi er tapt, siden $\\sqrt{2gh} = 6{,}3$ m/s uten friksjon", "Ingenting, siden farten ikke avhenger av friksjonen", "Friksjonen må ha vært null", "Friksjonen må ha gitt kjelken ekstra fart på vei nedover den bratte bakken"],
      explanation: "Friksjonsfritt ville farten vært $\\sqrt{2\\cdot 9{,}81\\cdot 2{,}0} = 6{,}3$ m/s. At den målte farten er lavere, viser at en del av energien er gått til varme.",
    },
    {
      question: "Hvilken størrelse skal inn i friksjonsleddet $R\\cdot s$?",
      options: ["Strekningen legemet glir langs underlaget", "Høydeforskjellen mellom start og slutt", "Den vannrette avstanden mellom start og slutt", "Halve strekningen, siden farten avtar underveis"],
      explanation: "Friksjonen virker over hele glidestrekningen langs underlaget. Høydeforskjellen hører hjemme i $mgh$, ikke i friksjonsleddet.",
    },
    {
      question: "En kule kommer ned en friksjonsfri bane fra høyden $h$ og glir så ut på et gulv med friksjonstall $\\mu$. Hvor langt glir den?",
      options: ["$s = h/\\mu$", "$s = \\mu h$", "$s = h/(2\\mu)$", "$s = 2\\mu g h$"],
      explanation: "Hele den potensielle energien tas til slutt opp av friksjonen: $mgh = \\mu mgs$, altså $s = h/\\mu$. Både $m$ og $g$ forkortes bort.",
    },
    {
      question: "Hvorfor er metodevalget så viktig på denne typen oppgaver?",
      options: ["Fordi feil metode gir null poeng selv om tallsvaret er riktig", "Fordi bare én metode gir riktig tall", "Fordi kinematikk alltid er raskere enn energimetoden", "Fordi sensor krever at du bruker begge metodene"],
      explanation: "Løsningsforslagene godtar flere gyldige metoder, men ikke et ugyldig resonnement — heller ikke når tallet blir riktig. Riktig metode *med begrunnelse* er et av de tydeligste kjennetegnene på toppbesvarelser.",
    },
    {
      question: "Hvilken av situasjonene kan du trygt regne på med bevegelsesligningene for konstant akselerasjon?",
      options: ["En kloss som sklir ned et rett skråplan med konstant friksjon", "En pendelkule på vei ned mot bunnpunktet", "En kule i en buet sklie", "En fallskjermhopper med luftmotstand"],
      explanation: "På et rett plan med konstante krefter er akselerasjonen konstant, og begge metodene er gyldige. De tre andre har enten krum bane eller varierende kraft, og krever energimetoden.",
    },
    {
      question: "Hva betyr det at valget av nullnivå er fritt?",
      options: ["At bare endringer i potensiell energi har fysisk betydning", "At du kan bytte nullnivå underveis i regnestykket", "At potensiell energi alltid kan settes til null", "At høyden ikke trenger å måles loddrett"],
      explanation: "Bare differansen $\\Delta E_p$ inngår i regnskapet, så startverdien er et valg. Men valget må stå i besvarelsen og gjelde hele regnestykket — å bytte underveis gir feil svar.",
    },
    {
      question: "En skiløper passerer et punkt med farten 8,0 m/s og glir friksjonsfritt 5,0 m nedover i høyde. Hva blir farten?",
      options: ["12,7 m/s", "9,9 m/s", "17,0 m/s", "8,0 m/s"],
      explanation: "$v_2^2 = v_1^2 + 2gh = 64 + 2\\cdot 9{,}81\\cdot 5{,}0 = 162$, altså $v_2 = 12{,}7$ m/s. Svaret 9,9 m/s kommer av å bruke $\\sqrt{2gh}$ og glemme startfarten.",
    },
    {
      question: "Hvor blir den mekaniske energien av når friksjonen virker?",
      options: ["Den blir til indre energi (varme) i underlag og legeme", "Den forsvinner helt fra universet", "Den blir til potensiell energi", "Den blir lagret som en ekstra normalkraft mot underlaget"],
      explanation: "Total energi er alltid bevart. Det som forsvinner fra det mekaniske regnskapet, finner du igjen som høyere temperatur i flatene som gnisser mot hverandre.",
    },
    {
      question: "En kloss dyttes oppover et skråplan og stopper. Hvilket regnskap er riktig?",
      options: ["$\\tfrac12 mv^2 = mgh + R\\cdot s$", "$\\tfrac12 mv^2 + R\\cdot s = mgh$", "$\\tfrac12 mv^2 = mgh - R\\cdot s$", "$\\tfrac12 mv^2 = mgh$"],
      explanation: "Startenergien må dekke både løftet i høyden og det friksjonen tar, så begge tapspostene står på høyre side. De to neste alternativene gir for stor høyde, og det siste ser bort fra friksjonen.",
    },
    {
      question: "Hvilken kraft holdes utenfor energiregnskapet fordi den står vinkelrett på bevegelsen?",
      options: ["Normalkraften fra et glatt underlag", "Friksjonskraften, som virker langs underlaget", "Tyngden når legemet faller", "Drivkraften fra en motor"],
      explanation: "Normalkraften står alltid vinkelrett på underlaget og dermed på bevegelsen langs det, så $W = Fs\\cos 90^\\circ = 0$. Snordraget i en pendel utelates av nøyaktig samme grunn.",
    },
    {
      question: "En huske trekkes opp 0,50 m og slippes fra ro. Hva blir farten i det laveste punktet (uten luftmotstand)?",
      options: ["3,1 m/s", "4,9 m/s", "9,8 m/s", "1,6 m/s"],
      explanation: "$v = \\sqrt{2gh} = \\sqrt{2\\cdot 9{,}81\\cdot 0{,}50} = 3{,}13$ m/s. Svaret 4,9 m/s kommer av å glemme kvadratroten på deler av uttrykket, og 9,8 m/s av å forveksle fart med tyngdeakselerasjonen.",
    },
    {
      question: "Hva er den viktigste grunnen til at energimetoden ofte er raskere enn kraftmetoden?",
      options: ["Du slipper å finne akselerasjonen og trenger bare start- og sluttilstanden", "Den krever færre konstanter fra formelarket", "Den gir alltid to mulige svar, så du kan velge det rimeligste", "Den gjelder også når energien ikke er bevart"],
      explanation: "Energiregnskapet kobler to tilstander direkte og bryr seg ikke om hva som skjer mellom dem. Kraftmetoden krever at du først finner akselerasjonen og deretter bruker kinematikken.",
    },
    {
      question: "En kloss med masse 4,0 kg glir fra ro ned en friksjonsfri bane fra 1,2 m høyde. Hvor stor er den kinetiske energien nederst?",
      options: ["47 J", "12 J", "94 J", "4,7 J"],
      explanation: "All potensiell energi blir kinetisk: $E_k = mgh = 4{,}0\\ \\text{kg}\\cdot 9{,}81\\ \\text{m/s}^2\\cdot 1{,}2\\ \\text{m} = 47$ J. Her forkortes massen **ikke** bort, fordi spørsmålet gjelder energi og ikke fart.",
    },
    {
      question: "Hvilket av rådene hører til metodevalget på eksamen?",
      options: ["Skriv én setning om hvorfor du valgte energimetoden når banen er krum", "Bruk alltid kinematikk først og energimetoden som kontroll", "Unngå energimetoden når friksjon er med", "Regn med begge metodene og oppgi begge svarene"],
      explanation: "Begrunnelsen for metodevalget er selvstendig poenggivende. Energimetoden håndterer friksjon utmerket via leddet $R\\cdot s$, og å oppgi to svar leses som helgardering, noe det trekkes for.",
    },
    {
      question: "En kloss sklir nedover et rett skråplan med konstant friksjonskraft. Hva gjelder for akselerasjonen?",
      options: ["Den er konstant, så begge metodene kan brukes", "Den varierer, så bare energimetoden kan brukes", "Den er null, siden friksjonen balanserer tyngden", "Den er alltid lik $g$"],
      explanation: "På et rett plan er både tyngdekomponenten langs planet og friksjonskraften konstante, så akselerasjonen er konstant og kinematikken er gyldig. Akselerasjonen er $a = g(\\sin\\theta - \\mu\\cos\\theta)$, altså mindre enn $g$.",
    },
  ],
  'fys1001-2-3': [
    {
      question: "Hva er bevegelsesmengden til et legeme med masse $m$ og fart $v$?",
      options: ["$p = mv$", "$p = \\tfrac12 mv^2$", "$p = mv^2$", "$p = m/v$"],
      explanation: "Bevegelsesmengde er masse ganger fart, $p = mv$, med enhet kg·m/s. Uttrykket $\\tfrac12 mv^2$ er kinetisk energi — en annen størrelse med en annen enhet.",
    },
    {
      question: "Hva er SI-enheten for bevegelsesmengde?",
      options: ["kg·m/s", "J", "N", "kg·$\\text{m/s}^2$"],
      explanation: "Enheten følger direkte av $p = mv$: kilogram ganger meter per sekund. Den har ikke noe eget navn. Joule er energi og newton er kraft.",
    },
    {
      question: "Når er den samlede bevegelsesmengden bevart i et sammenstøt?",
      options: ["Gjennom selve støtet, der ytre krefter kan neglisjeres", "Gjennom hele forløpet, også der friksjonen mot underlaget virker", "Bare når støtet er elastisk", "Bare når det ene legemet står i ro før støtet"],
      explanation: "Bevaringen hviler på at ytre krefter er neglisjerbare i det korte tidsrommet støtet varer. Over en glidestrekning med friksjon endres bevegelsesmengden hele veien — det er nettopp derfor legemene stopper.",
    },
    {
      question: "En vogn på 2,0 kg med fart 3,0 m/s kobler seg til en vogn på 4,0 kg i ro. Hva blir felles fart?",
      options: ["1,0 m/s", "1,5 m/s", "3,0 m/s", "0,5 m/s"],
      explanation: "$v' = \\dfrac{2{,}0\\cdot 3{,}0}{2{,}0+4{,}0} = 1{,}0$ m/s. Svaret 1,5 m/s kommer av å dele på 4,0 kg i stedet for på summen av massene — en klassisk feil.",
    },
    {
      question: "Hva kjennetegner et fullstendig uelastisk støt?",
      options: ["Legemene følges at etter støtet og har samme fart", "Kinetisk energi er bevart", "All bevegelsesmengde forsvinner", "Legemene spretter fra hverandre med samme fart som før"],
      explanation: "Kjennetegnet er felles fart etterpå («kobler seg sammen», «blir sittende fast»). Bevegelsesmengden er bevart som alltid, mens den kinetiske energien er redusert mest mulig.",
    },
    {
      question: "Hva kjennetegner et elastisk støt?",
      options: ["Samlet kinetisk energi er den samme før og etter", "Legemene henger sammen etterpå", "Bevegelsesmengden er bevart, i motsetning til i andre støt", "Kraften mellom legemene er null"],
      explanation: "Det som skiller elastiske støt fra andre, er at den kinetiske energien er bevart. Bevegelsesmengden er bevart i alle støt, så det kan ikke være kjennetegnet.",
    },
    {
      question: "Hvilken størrelse står i nevneren når du regner ut relativt energitap?",
      options: ["Den kinetiske energien før støtet", "Den kinetiske energien etter støtet", "Summen av energiene før og etter", "Den tapte energien"],
      explanation: "Det relative tapet er $(E_2-E_1)/E_1$, altså tapet målt mot det du startet med. Å dele på $E_2$ gir et for stort tall og er en gjenganger blant feilsvarene.",
    },
    {
      question: "To like tunge legemer med like store, motsatt rettede farter støter sammen og henger sammen etterpå. Hva blir farten etter støtet?",
      options: ["Null", "Halvparten av startfarten", "Den samme som startfarten", "Dobbelt så stor som startfarten"],
      explanation: "Den samlede bevegelsesmengden er $mv + m(-v) = 0$ før støtet, og må være null etterpå også. Med felles masse $2m$ betyr det $v' = 0$. All kinetisk energi går til varme og deformasjon — det er det ene tilfellet med 100 % tap.",
    },
    {
      question: "Hvorfor reduserer en kollisjonspute kraften på føreren?",
      options: ["Fordi den forlenger tiden stansen tar, og $F = \\Delta p/\\Delta t$", "Fordi den reduserer endringen i bevegelsesmengde", "Fordi den fjerner den kinetiske energien før sammenstøtet", "Fordi den gjør støtet elastisk i stedet for uelastisk"],
      explanation: "Endringen i bevegelsesmengde er gitt av masse og fart og kan ikke endres av puta. Det puta gjør, er å strekke ut $\\Delta t$, og da faller den gjennomsnittlige kraften tilsvarende.",
    },
    {
      question: "En bil med $\\Delta p = 2{,}0\\cdot 10^{4}$ kg·m/s stopper på 0,20 s. Hvor stor er den gjennomsnittlige kraften?",
      options: ["$1{,}0\\cdot 10^{5}$ N", "$4{,}0\\cdot 10^{3}$ N", "$1{,}0\\cdot 10^{3}$ N", "$2{,}0\\cdot 10^{5}$ N"],
      explanation: "$F = \\Delta p/\\Delta t = 2{,}0\\cdot 10^{4}/0{,}20 = 1{,}0\\cdot 10^{5}$ N. Svaret $4{,}0\\cdot 10^{3}$ N kommer av å gange i stedet for å dele.",
    },
    {
      question: "Hvorfor er bevegelsesmengden bevart i et støt?",
      options: ["Fordi kreftene legemene utøver på hverandre er like store og motsatt rettede", "Fordi kinetisk energi alltid er bevart", "Fordi friksjonen er null under støtet", "Fordi massene er konstante"],
      explanation: "Newtons 3. lov gir kraftpar som er like store og motsatt rettede og virker like lenge, så det ene legemet mister nøyaktig like mye bevegelsesmengde som det andre får.",
    },
    {
      question: "Et legeme beveger seg mot venstre når du har valgt høyre som positiv retning. Hvordan settes farten inn?",
      options: ["Med negativt fortegn", "Med positivt fortegn", "Som absoluttverdi, siden fart aldri er negativ", "Fortegnet spiller ingen rolle så lenge du er konsekvent"],
      explanation: "Bevegelsesmengde er en vektor, så retningen bæres av fortegnet. Å sette inn absoluttverdier er den vanligste enkeltfeilen i støtoppgaver med motsatt rettede farter.",
    },
    {
      question: "Kule A (0,50 kg, 2,0 m/s) og kule B (0,50 kg, i ro) støter elastisk. Etter støtet står A stille. Hva er farten til B?",
      options: ["2,0 m/s", "1,0 m/s", "4,0 m/s", "0,5 m/s"],
      explanation: "Bevaring gir $0{,}50\\cdot 2{,}0 = 0{,}50\\cdot v_B'$, altså $v_B' = 2{,}0$ m/s. En rask kontroll: den kinetiske energien er da også lik før og etter, slik et elastisk støt krever.",
    },
    {
      question: "Hva skjer med den kinetiske energien som «forsvinner» i et uelastisk støt?",
      options: ["Den blir til indre energi (varme), deformasjon og lyd", "Den forsvinner fra universet", "Den blir til ekstra bevegelsesmengde", "Den blir til potensiell energi lagret i legemene som er deformert"],
      explanation: "Total energi er alltid bevart. I støtet omdannes mekanisk energi til varme i materialene, til varig deformasjon og til en liten del lyd.",
    },
    {
      question: "En pil på 0,10 kg skytes inn i en kloss på 1,90 kg i ro, og de glir videre med 0,50 m/s. Hvor stor var pilens fart?",
      options: ["10 m/s", "1,0 m/s", "9,5 m/s", "20 m/s"],
      explanation: "$0{,}10\\,v_1 = 2{,}00\\cdot 0{,}50 = 1{,}00$, altså $v_1 = 10$ m/s. Svaret 9,5 m/s kommer av å bruke bare klossens masse i høyresida.",
    },
    {
      question: "Hvilken kontroll bør du alltid gjøre etter å ha regnet ut felles fart i et uelastisk støt?",
      options: ["Sjekke at sluttfarten ligger mellom de to startfartene", "Sjekke at kinetisk energi er bevart", "Sjekke at sluttfarten er større enn begge startfartene før støtet", "Sjekke at bevegelsesmengden er null etterpå"],
      explanation: "Felles fart er et vektet gjennomsnitt av de to startfartene, så den må ligge mellom dem. Kinetisk energi er ikke bevart i uelastiske støt, så den kontrollen ville vært feil.",
    },
    {
      question: "Hvordan behandles kinetiske energier fra to legemer som beveger seg mot hverandre?",
      options: ["De legges sammen, siden energi ikke har retning", "De trekkes fra hverandre, som bevegelsesmengder", "Bare den største teller", "De multipliseres"],
      explanation: "Kinetisk energi er en skalar og alltid positiv, så bidragene summeres uansett retning. Bevegelsesmengder derimot har fortegn og kan oppheve hverandre.",
    },
    {
      question: "En person hopper fra en båt som lå i ro. Hva skjer med båten?",
      options: ["Den beveger seg motsatt vei, slik at samlet bevegelsesmengde forblir null", "Den blir liggende i ro, siden ingen ytre kraft virker", "Den beveger seg samme vei som personen", "Den får samme fart som personen, men motsatt vei"],
      explanation: "Samlet bevegelsesmengde var null og må forbli null, så $m_bv_b' = -m_pv_p'$. Båten er tyngre enn personen, så farten dens blir tilsvarende mindre — ikke like stor.",
    },
    {
      question: "Hva er riktig rekkefølge i støt-kjeden (sjanger B)?",
      options: ["Energibevaring før støtet, p-bevaring gjennom støtet, energiregnskap etter støtet", "p-bevaring hele veien fra start til stopp", "Energibevaring hele veien fra start til stopp", "p-bevaring før støtet, energibevaring gjennom støtet"],
      explanation: "Fasene har hvert sitt verktøy: energi ned rampen, bevegelsesmengde gjennom kollisjonen, og energiregnskap med friksjon på glidestrekningen etterpå. Å bytte om verktøyene er den mest kostbare feilen i sjangeren.",
    },
    {
      question: "To legemer med samme bevegelsesmengde har ulik masse. Hvilket har størst kinetisk energi?",
      options: ["Det letteste", "Det tyngste", "De har like stor kinetisk energi", "Det avhenger av retningen"],
      explanation: "Med $E_k = p^2/(2m)$ ser du at ved samme $p$ gir liten masse stor energi. Det er derfor en lett kule i høy fart er langt farligere enn en tung kloss i gangfart, selv når bevegelsesmengden er den samme.",
    },
  ],
  'fys1001-2-4': [
    {
      question: "Hvilken lov hører til fase 2, altså selve støtet?",
      options: ["Bevaring av bevegelsesmengde", "Energibevaring", "Arbeid–energi-setningen", "Newtons 2. lov med konstant akselerasjon"],
      explanation: "Gjennom støtet er det bevegelsesmengden som er bevart. Kinetisk energi er som regel ikke bevart, og kreftene er ukjente, så Newtons 2. lov er ubrukelig her.",
    },
    {
      question: "Hvilken lov hører til fase 1 og fase 3, altså før og etter støtet?",
      options: ["Energiregnskapet, med friksjon som eget ledd", "Bevaring av bevegelsesmengde", "Kraftstøtet $F\\Delta t = \\Delta p$", "Bevaring av bevegelsesmengde i fase 1 og energi i fase 3"],
      explanation: "Utenfor støtet er det energiregnskapet som gjelder: $v = \\sqrt{2gh}$ ned en bane, og $\\tfrac12 mv'^2 = \\mu mgs$ på glidestrekningen. Bevegelsesmengden er ikke bevart der, siden friksjonen er en ytre kraft.",
    },
    {
      question: "En kloss slippes fra 0,65 m på en friksjonsfri bue. Hvilken fart har den nederst?",
      options: ["3,6 m/s", "6,4 m/s", "12,8 m/s", "2,5 m/s"],
      explanation: "$v = \\sqrt{2gh} = \\sqrt{2\\cdot 9{,}81\\cdot 0{,}65} = 3{,}57$ m/s, altså $3{,}6$ m/s. Svaret 6,4 m/s er $gh$ uten kvadratrot, 12,8 m/s er $2gh$ uten kvadratrot, og 2,5 m/s er $\\sqrt{gh}$ — faktoren 2 er glemt.",
    },
    {
      question: "I fase 3 skal du regne stopplengden. Hvilken fart bruker du?",
      options: ["Farten rett etter støtet", "Farten rett før støtet", "Gjennomsnittet av fartene før og etter", "Farten øverst på rampen"],
      explanation: "Det er den kinetiske energien klossene har *etter* støtet som friksjonen må ta opp. Bruker du farten før støtet, blir stopplengden mange ganger for stor — en typisk fasefeil.",
    },
    {
      question: "En masse $m_A$ treffer en masse $m_B$ i ro og de henger sammen. Hvor stor andel av den kinetiske energien går tapt?",
      options: ["$\\dfrac{m_B}{m_A+m_B}$", "$\\dfrac{m_A}{m_A+m_B}$", "$\\dfrac{m_A}{m_B}$", "100 %, siden støtet er fullstendig uelastisk"],
      explanation: "Setter du $v' = m_Av/(m_A+m_B)$ inn i energiuttrykkene, faller farten ut og du står igjen med $m_B/(m_A+m_B)$. Tapet er altså størst når den stillestående massen er den største.",
    },
    {
      question: "Hvorfor er massen borte fra uttrykket $v' = \\sqrt{2\\mu g s}$?",
      options: ["Fordi både kinetisk energi og friksjonskraft er proporsjonale med massen", "Fordi friksjonskraften er uavhengig av massen", "Fordi stopplengden er uavhengig av friksjonstallet", "Fordi massen bare betyr noe når banen er krum"],
      explanation: "$\\tfrac12 Mv'^2 = \\mu Mgs$ har $M$ som faktor på begge sider, så den forkortes bort. Friksjonskraften er derimot proporsjonal med massen — det er nettopp derfor det går opp.",
    },
    {
      question: "Havarigruppa måler 25 m bremsespor og anslår $\\mu = 0{,}70$. Hvilken fart hadde vrakene rett etter kollisjonen?",
      options: ["18,5 m/s", "343 m/s", "9,3 m/s", "12,4 m/s"],
      explanation: "$v' = \\sqrt{2\\mu g s} = \\sqrt{2\\cdot 0{,}70\\cdot 9{,}81\\cdot 25} = \\sqrt{343} = 18{,}5$ m/s. Svaret «343 m/s» er tallet under rottegnet — kvadratroten er glemt.",
    },
    {
      question: "En vogn på 0,80 kg med fart 2,0 m/s kobler seg til en vogn på 1,2 kg i ro. Hva blir felles fart?",
      options: ["0,80 m/s", "1,3 m/s", "2,00 m/s", "1,7 m/s"],
      explanation: "$v' = \\dfrac{0{,}80\\cdot 2{,}0}{2{,}0} = 0{,}80$ m/s. Svaret 1,3 m/s kommer av å dele på 1,2 kg i stedet for på summen av massene.",
    },
    {
      question: "Hva er den dyreste enkeltfeilen i støt-kjeden?",
      options: ["Å bruke energibevaring gjennom selve støtet", "Å oppgi svaret med bare tre gjeldende siffer i stedet for fire", "Å tegne skisse før man regner", "Å velge mot venstre som positiv retning"],
      explanation: "Energibevaring gjennom et uelastisk støt gir altfor stor fart etterpå og ødelegger alle senere deloppgaver. Skisse og fritt valg av positiv retning er derimot gode vaner.",
    },
    {
      question: "En pendelkule i snor med lengde 1,0 m trekkes ut $60^\\circ$. Hvor høyt er den løftet?",
      options: ["0,50 m", "0,87 m", "1,0 m", "0,60 m"],
      explanation: "$h = L(1-\\cos\\theta) = 1{,}0\\,(1-\\cos 60^\\circ) = 1{,}0\\,(1-0{,}50) = 0{,}50$ m. Svaret 0,87 m er $L\\sin\\theta$, som er den vannrette utsvingningen — ikke høyden.",
    },
    {
      question: "To biler kolliderer front mot front og henger sammen. Hvilken retning har vrakene etterpå?",
      options: ["Samme retning som den største bevegelsesmengden før smellet", "Samme retning som den tyngste bilen, uansett fart", "Samme retning som den raskeste bilen, uansett masse", "De står alltid stille etterpå"],
      explanation: "Fortegnet til summen $m_1v_1 + m_2v_2$ bestemmer retningen, og der teller masse og fart likt. Vrakene står bare stille i det spesialtilfellet der de to bevegelsesmengdene er like store.",
    },
    {
      question: "Hvorfor kan bevaring av bevegelsesmengde brukes selv når kreftene i sammenstøtet er ukjente?",
      options: ["Fordi kreftene mellom legemene er like store og motsatt rettede etter Newtons 3. lov", "Fordi kreftene i et støt alltid er små", "Fordi støtet varer så kort at ingen krefter virker", "Fordi kinetisk energi er bevart"],
      explanation: "Kraftparet fra Newtons 3. lov virker like lenge på de to legemene, så det ene mister nøyaktig like mye bevegelsesmengde som det andre får — uansett hvor store og kompliserte kreftene er.",
    },
    {
      question: "En kloss glir mot en fast vegg og spretter tilbake. Hvorfor er klossens bevegelsesmengde ikke bevart?",
      options: ["Fordi veggen er festet til jorda og utøver en ytre kraft på klossen", "Fordi støtet er elastisk", "Fordi en del av den kinetiske energien går tapt i sammenstøtet", "Fordi klossen skifter retning"],
      explanation: "Bevaringssetningen gjelder for et system uten ytre krefter. Veggen (og jorda bak den) er ikke med i systemet, så klossen alene får endret bevegelsesmengde. Tar du jorda med, er den fremdeles bevart.",
    },
    {
      question: "Hvilken rekkefølge følger baklengs-kjeden i havarikommisjon-varianten?",
      options: ["Stopplengde → fart etter støtet → fart før støtet", "Fart før støtet → stopplengde → fart etter støtet", "Fart etter støtet → stopplengde → fallhøyde", "Fallhøyde → fart før støtet → stopplengde"],
      explanation: "Du starter med det som er målt — bremsesporet — og regner deg tilbake: $v' = \\sqrt{2\\mu g s}$, deretter bevaringsligningen for farten før støtet, og om nødvendig videre til fallhøyden.",
    },
    {
      question: "I hvilken fase av kjeden betyr massene noe for resultatet?",
      options: ["Bare i fase 2, altså selve støtet", "I alle tre fasene", "Bare i fase 1 og fase 3", "Aldri — massene forkortes alltid bort"],
      explanation: "Massene forkortes bort både i $v = \\sqrt{2gh}$ og i $s = v'^2/(2\\mu g)$, men i bevaringsligningen er det nettopp masseforholdet som avgjør farten etter støtet. Massekontrollen er derfor en rask feilsjekk.",
    },
  ],
  'fys1001-3-1': [
    {
      question: "Hva er SI-enheten for trykk?",
      options: ["Pascal (Pa)", "Newton (N)", "Bar", "Newtonmeter (N·m)"],
      explanation: "$1\\ \\text{Pa} = 1\\ \\text{N/m}^2$. Bar er en praktisk enhet ($1\\ \\text{bar} = 10^{5}$ Pa), men ikke SI-enheten. Newton er kraft og joule er energi.",
    },
    {
      question: "En kraft på 60 N virker vinkelrett på en flate med areal $0{,}20$ $\\text{m}^2$. Hvor stort er trykket?",
      options: ["300 Pa", "12 Pa", "60 Pa", "3,0 Pa"],
      explanation: "$p = F/A = 60\\ \\text{N}/0{,}20\\ \\text{m}^2 = 300$ Pa. Svaret 12 Pa kommer av å gange i stedet for å dele.",
    },
    {
      question: "Hvilket uttrykk gir det **absolutte** trykket på dybden $h$ i en væske med tetthet $\\rho$?",
      options: ["$p = p_0 + \\rho gh$", "$p = \\rho gh$", "$p = p_0 - \\rho gh$", "$p = p_0\\rho gh$"],
      explanation: "Absolutt trykk inkluderer trykket på overflaten, altså $p_0$. Uttrykket $\\rho gh$ alene er overtrykket — differansen mellom absolutt trykk og atmosfæretrykk.",
    },
    {
      question: "Hva er overtrykket 10 m ned i ferskvann ($\\rho = 1{,}00\\cdot 10^{3}$ $\\text{kg/m}^3$)?",
      options: ["$9{,}8\\cdot 10^{4}$ Pa", "$1{,}0\\cdot 10^{5}$ Pa målt som absolutt trykk", "$9{,}8\\cdot 10^{3}$ Pa", "$2{,}0\\cdot 10^{5}$ Pa"],
      explanation: "$\\rho gh = 1{,}00\\cdot 10^{3}\\cdot 9{,}81\\cdot 10 = 9{,}8\\cdot 10^{4}$ Pa, altså nesten 1 bar. Det er opphavet til tommelfingerregelen «1 bar per 10 m vann».",
    },
    {
      question: "To beholdere med ulik form er fylt med vann til samme høyde. Hva gjelder for trykket ved bunnen?",
      options: ["Det er like stort i begge", "Det er størst i den bredeste", "Det er størst i den smaleste", "Det avhenger av hvor mye vann det er i alt"],
      explanation: "Væsketrykket avhenger bare av dybden og tettheten, ikke av formen eller vannmengden. Dette kalles det hydrostatiske paradokset, og det er grunnen til at et vanntårn må være høyt, ikke stort.",
    },
    {
      question: "Hvilken tetthet skal settes inn i oppdriften $B = \\rho V g$?",
      options: ["Væskens tetthet", "Legemets tetthet", "Gjennomsnittet av de to tetthetene", "Differansen mellom tetthetene"],
      explanation: "Oppdriften er tyngden av den fortrengte væsken, så det er væskens tetthet som gjelder. Å bruke legemets tetthet er den vanligste feilen i hele temaet — legemets tetthet hører til i flytevilkåret.",
    },
    {
      question: "Et legeme med volum $2{,}0\\cdot 10^{-3}$ $\\text{m}^3$ er helt nedsenket i vann. Hvor stor er oppdriften?",
      options: ["19,6 N", "2,0 N", "196 N", "9,81 N"],
      explanation: "$B = \\rho V g = 1{,}00\\cdot 10^{3}\\cdot 2{,}0\\cdot 10^{-3}\\cdot 9{,}81 = 19{,}6$ N. Svaret 196 N kommer av å bruke $10^{-2}$ i stedet for $10^{-3}$ for volumet.",
    },
    {
      question: "Hvorfor finnes oppdriften?",
      options: ["Fordi trykket er større på undersiden av legemet enn på oversiden", "Fordi væsken skyver legemet ut av veien", "Fordi tyngden er mindre under vann", "Fordi vannet har mindre tetthet enn legemet"],
      explanation: "Trykket vokser med dybden, så trykkraften opp på bunnflata er større enn trykkraften ned på toppflata. Differansen er nettopp $\\rho gV$. Tyngden er den samme under vann — det er bare den *tilsynelatende* vekten som er mindre.",
    },
    {
      question: "En stein med tyngde 50 N henger i en fjærvekt helt nedsenket i vann, og oppdriften er 18 N. Hva viser fjærvekta?",
      options: ["32 N", "68 N", "50 N", "18 N"],
      explanation: "Kraftbalansen $S + B = G$ gir $S = G - B = 50 - 18 = 32$ N. Dette kalles den tilsynelatende vekten, og den er alltid mindre enn tyngden.",
    },
    {
      question: "Når flyter et legeme i en væske?",
      options: ["Når legemets gjennomsnittstetthet er mindre enn væskens", "Når legemet er lettere enn 1 kg", "Når legemet har stort volum", "Når legemets tetthet er større enn væskens"],
      explanation: "Det avgjørende er tetthetsforholdet, ikke massen eller volumet hver for seg. En stålbåt flyter fordi skroget rommer luft, slik at gjennomsnittstettheten blir mindre enn vannets.",
    },
    {
      question: "En kloss med tetthet $0{,}80\\cdot 10^{3}$ $\\text{kg/m}^3$ flyter i ferskvann. Hvor stor andel av volumet er under vann?",
      options: ["80 %", "20 %", "125 %", "50 %"],
      explanation: "$V_{\\text{neds}}/V = \\rho_{\\text{legeme}}/\\rho_{\\text{væske}} = 0{,}80/1{,}00 = 0{,}80$. Andelen over vann er de resterende 20 %; å svare 20 % er å snu spørsmålet.",
    },
    {
      question: "Hva skjer med et legeme som har nøyaktig samme tetthet som væsken det ligger i?",
      options: ["Det blir stående der det slippes, i nøytral likevekt", "Det synker langsomt hele veien til bunnen av beholderen", "Det stiger langsomt til overflaten", "Det flyter med halve volumet over vann"],
      explanation: "Da er oppdriften nøyaktig like stor som tyngden, så nettokraften er null. Det er nettopp denne tilstanden en fisk oppnår ved å justere svømmeblæra.",
    },
    {
      question: "Hvor mange kvadratmeter er $5{,}0$ $\\text{cm}^2$?",
      options: ["$5{,}0\\cdot 10^{-4}$ $\\text{m}^2$", "$5{,}0\\cdot 10^{-2}$ $\\text{m}^2$", "$5{,}0\\cdot 10^{-3}$ $\\text{m}^2$", "$5{,}0\\cdot 10^{-6}$ $\\text{m}^2$"],
      explanation: "$1\\ \\text{cm} = 10^{-2}$ m, så $1\\ \\text{cm}^2 = (10^{-2})^2 = 10^{-4}$ $\\text{m}^2$. Å bruke $10^{-2}$ er en klassisk arealfeil som gjør trykket hundre ganger for lite.",
    },
    {
      question: "Et flytende legeme har volum $V$, og andelen $0{,}60$ ligger under vann. Hvilket volum skal inn i oppdriften?",
      options: ["$0{,}60V$", "$V$", "$0{,}40V$", "$1{,}60V$"],
      explanation: "Bare den nedsenkede delen fortrenger væske, så $B = \\rho\\cdot 0{,}60V\\cdot g$. Bruker du hele $V$, får du $B > G$ for noe som ligger stille — en umulighet du kan bruke som feilsjekk.",
    },
    {
      question: "Hva forteller et U-rørsmanometer med væskeforskjell $\\Delta h$?",
      options: ["Trykkforskjellen mellom endene, $\\Delta p = \\rho g\\Delta h$", "Det absolutte trykket i den ene enden", "Væskens tetthet", "Volumstrømmen gjennom røret"],
      explanation: "Væskesøylen forskyves til høydeforskjellen balanserer trykkforskjellen. Det er samme $\\rho gh$-sammenheng som ellers, og prinsippet bak blodtrykk målt i millimeter kvikksølv.",
    },
  ],
  'fys1001-3-2': [
    {
      question: "Hva er volumstrømmen gjennom et rør med tverrsnittsareal $A$ og fart $v$?",
      options: ["$q_V = Av$", "$q_V = A/v$", "$q_V = Av^2$", "$q_V = \\tfrac12 Av$"],
      explanation: "Volumet som passerer per sekund er arealet ganger farten: $\\text{m}^2\\cdot\\text{m/s} = \\text{m}^3/\\text{s}$. Enhetskontrollen utelukker de tre andre.",
    },
    {
      question: "Et rør snevres inn slik at arealet halveres. Hva skjer med farten?",
      options: ["Den dobles", "Den halveres", "Den firedobles", "Den er uendret"],
      explanation: "$A_1v_1 = A_2v_2$ gir $v_2 = v_1A_1/A_2 = 2v_1$. Merk at det er arealet som halveres her — halveres diameteren i stedet, firedobles farten.",
    },
    {
      question: "Diameteren i et sirkulært rør halveres. Hva skjer med farten?",
      options: ["Den firedobles", "Den dobles", "Den halveres", "Den blir en firedel"],
      explanation: "For et sirkulært rør er $A = \\pi r^2$, så halvert diameter gir en firedel av arealet, og kontinuitet gir fire ganger farten. Å svare «dobles» er å forveksle diameter med areal.",
    },
    {
      question: "Hva er Bernoullis likning et uttrykk for?",
      options: ["Energibevaring per volumenhet i en strømmende væske", "Bevaring av bevegelsesmengde i væsken", "At trykket er like stort i alle punkter i en væske som strømmer", "At volumstrømmen er konstant"],
      explanation: "Deler du $\\tfrac12 mv^2 + mgh$ på volumet, får du $\\tfrac12\\rho v^2 + \\rho gh$ — de to siste leddene i Bernoulli. Alle tre ledd har enheten $\\text{J/m}^3$. Konstant volumstrøm er kontinuitetslikningen, en annen lov.",
    },
    {
      question: "Hva er enheten til hvert ledd i Bernoullis likning?",
      options: ["Pa, som også er $\\text{J/m}^3$", "J, altså den samme enheten som arbeid og energi", "N, altså kraft", "m/s, altså fart"],
      explanation: "Alle tre ledd må ha samme enhet, og $p$ måles i pascal. Siden $1\\ \\text{Pa} = 1\\ \\text{J/m}^3$, er tolkningen energi per volum. Enhetskontrollen er en rask måte å oppdage feil i oppsettet.",
    },
    {
      question: "I et vannrett rør øker farten gjennom en innsnevring. Hva skjer med det statiske trykket?",
      options: ["Det synker", "Det stiger", "Det er uendret", "Det avhenger av væskens tetthet alene"],
      explanation: "Summen $p + \\tfrac12\\rho v^2$ er konstant i samme høyde, så når det dynamiske leddet vokser, må det statiske trykket synke. Dette er Venturi-effekten.",
    },
    {
      question: "Hvorfor kan farten settes til null på overflaten av et stort reservoar?",
      options: ["Fordi overflatens areal er mye større enn åpningens, så kontinuitet gir svært liten fart", "Fordi trykket der er atmosfæretrykket", "Fordi overflatevannet holdes i ro av overflatespenningen mot lufta over", "Fordi høyden der er null"],
      explanation: "Kontinuitet gir $v_1 = v_2A_2/A_1$, og med $A_1 \\gg A_2$ blir $v_1$ forsvinnende liten. Antakelsen gjelder derfor bare når arealforholdet virkelig er stort — ikke i et rør som snevres fra 6 til 2 $\\text{cm}^2$.",
    },
    {
      question: "Hva er utstrømningsfarten fra et lite hull 5,0 m under den frie overflaten i en stor, åpen tank?",
      options: ["9,9 m/s", "49 m/s", "4,9 m/s", "98 m/s"],
      explanation: "$v = \\sqrt{2gH} = \\sqrt{2\\cdot 9{,}81\\cdot 5{,}0} = \\sqrt{98{,}1} = 9{,}9$ m/s. Svaret 98 m/s er tallet under rottegnet — kvadratroten er glemt.",
    },
    {
      question: "To store, åpne tanker inneholder henholdsvis vann og kvikksølv, med samme høyde over hullet. Hvordan er utstrømningsfartene?",
      options: ["Like store, siden tettheten forkortes bort i utledningen", "Størst for kvikksølv, som er tettest", "Størst for vann, som er tynnest", "Det kan ikke avgjøres uten å kjenne trykket over væsken i de to tankene"],
      explanation: "I utledningen av $v = \\sqrt{2gH}$ står $\\rho$ som faktor i begge ledd og forkortes bort. Farten avhenger bare av høyden — akkurat som ved fritt fall.",
    },
    {
      question: "Hva blir utstrømningsfarten hvis høyden over hullet firedobles?",
      options: ["Den dobles", "Den firedobles", "Den blir 16 ganger så stor", "Den er uendret"],
      explanation: "$v = \\sqrt{2gH}$ gir $v \\propto \\sqrt{H}$, og $\\sqrt{4} = 2$. Å svare «firedobles» er lineær-tenkning i en kvadratrotlov.",
    },
    {
      question: "Hvilke tre betingelser må være oppfylt for at Bernoullis likning skal gjelde?",
      options: ["Inkompressibelt, ikke-viskøst og stasjonær strøm", "Vannrett rør, konstant areal og konstant trykk", "Konstant fart, konstant høyde og lukket rør", "Lav fart, høy tetthet og kort rørlengde"],
      explanation: "Dette er idealfluid-betingelsene, og de skal nevnes når en oppgave ber om en vurdering. Vannrett rør og konstant areal er egenskaper ved en *situasjon*, ikke betingelser for loven.",
    },
    {
      question: "Hvorfor er Bernoulli et dårlig verktøy for lava?",
      options: ["Fordi lava er både viskøs og en flerfasestrøm med gassbobler og krystaller", "Fordi lava er varmere enn vann", "Fordi lava er tettere enn vann", "Fordi lava beveger seg oppover gjennom kanalen og ikke nedover som vann i en tank"],
      explanation: "Høy viskositet gir energitap til indre friksjon, og gassbobler og krystaller gjør tettheten udefinert som konstant. Utregningen gir derfor bare en øvre grense for farten. Temperatur og tetthet i seg selv er ikke problemet.",
    },
    {
      question: "Hva er galt med å bruke Bernoulli mellom et punkt før og et punkt etter en pumpe?",
      options: ["Pumpen tilfører energi, så den mekaniske energien per volum er ikke bevart", "Pumpen endrer væskens tetthet", "Pumpen gjør strømmen kompressibel", "Ingenting — Bernoullis likning gjelder alltid så lenge røret er lukket og fylt"],
      explanation: "Bernoulli forutsetter at ingen energi tilføres eller tas ut mellom punktene. En pumpe tilfører arbeid, en turbin tar ut arbeid. Enkleste utvei er å velge to punkter på samme side av pumpa.",
    },
    {
      question: "En student regner Torricelli på tykk sirup. Hvordan står svaret til virkeligheten?",
      options: ["Det er for høyt, siden viskøse tap ikke er med i regnskapet", "Det er for lavt, siden sirup er tettere enn vann", "Det er riktig, siden tettheten forkortes bort", "Det er for lavt, siden sirup strømmer langsommere og dermed lenger"],
      explanation: "Viskøse tap fjerner mekanisk energi som modellen har regnet som fart, så resultatet er en øvre grense. At tettheten forkortes bort betyr bare at tettheten ikke er problemet — viskositeten er det.",
    },
    {
      question: "Hvor mange kubikkmeter per sekund er 30 L/min?",
      options: ["$5{,}0\\cdot 10^{-4}$ $\\text{m}^3/\\text{s}$", "$3{,}0\\cdot 10^{-2}$ $\\text{m}^3/\\text{s}$", "$0{,}50$ $\\text{m}^3/\\text{s}$", "$1{,}8$ $\\text{m}^3/\\text{s}$"],
      explanation: "$30\\ \\text{L/min} = 30\\cdot 10^{-3}\\ \\text{m}^3/60\\ \\text{s} = 5{,}0\\cdot 10^{-4}$ $\\text{m}^3/\\text{s}$. Feilene oppstår når man glemmer å dele på 60, eller å gjøre om liter til kubikkmeter.",
    },
    {
      question: "Hvilken størrelse måler et manometer montert i veggen på et rør?",
      options: ["Det statiske trykket", "Det dynamiske trykket", "Totaltrykket", "Volumstrømmen"],
      explanation: "Veggen er parallell med strømmen, så måleren merker ikke fartsbidraget. Totaltrykket måles med et rør som peker rett mot strømmen og bremser væsken til null — prinsippet bak pitotrøret.",
    },
    {
      question: "Hva sier Poiseuille-innsikten om en blodåre som får halvert radius?",
      options: ["Trykkfallet må bli 16 ganger større for samme volumstrøm", "Trykkfallet må dobles for samme volumstrøm", "Trykkfallet må firedobles for samme volumstrøm", "Trykkfallet er uendret, siden lengden er den samme"],
      explanation: "$\\Delta p \\propto 1/r^4$, og $2^4 = 16$. Fjerdepotensen er hele poenget: selv små innsnevringer gir dramatisk større motstand.",
    },
    {
      question: "Hva er den viktigste regelen for punktvalg i en Bernoulli-oppgave?",
      options: ["Velg de to punktene der du kjenner flest størrelser", "Velg de to punktene som ligger så langt fra hverandre som mulig langs røret", "Velg alltid to punkter i samme høyde", "Velg punktene der farten er størst"],
      explanation: "Punktvalget er halve oppgaven, og kriteriet er kjent informasjon: en fri overflate, en åpning, eller to punkter i samme høyde. Samme høyde er ofte praktisk, men ikke et krav.",
    },
    {
      question: "En stor tank tømmes gjennom et hull i bunnen. Hvorfor er utregningen $t = V/q_V$ med starthøyden bare en nedre grense for tømmetiden?",
      options: ["Fordi farten avtar når nivået synker, så volumstrømmen blir mindre underveis", "Fordi vannet blir tettere mot slutten", "Fordi hullet blir mindre etter hvert", "Fordi strømmen blir kompressibel og dermed tregere når tanken er nesten tom"],
      explanation: "Med $v = \\sqrt{2gH}$ synker farten når $H$ synker, så volumstrømmen avtar gjennom tømmingen. Regner du med den største strømmen hele veien, får du en for kort tid.",
    },
    {
      question: "Hvorfor kan taket blåse av et hus i sterk vind?",
      options: ["Fordi vinden får større fart over taket, som gir lavere trykk enn inne i huset", "Fordi vinden presser taket oppover med sin bevegelsesmengde", "Fordi lufta inne i huset varmes opp og utvider seg", "Fordi vinden gjør lufta over taket tettere"],
      explanation: "Vinden må øke farten over takryggen, og Bernoulli gjør fartsøkningen om til trykkfall. Trykkforskjellen virker på hele takflaten, så kraften blir stor — samme mekanisme som løft på en flyvinge.",
    },
  ],
  'fys1001-3-3': [
    {
      question: "Hva er første trinn i løsningsoppskriften for en fluid-oppgave?",
      options: ["Skissere strømmen og velge punkt 1 og 2 der du kjenner flest størrelser", "Regne ut volumstrømmen", "Sjekke om væsken er viskøs", "Slå opp tettheten og viskositeten til væsken i tabellverket først"],
      explanation: "Punktvalget styrer hele resten av oppgaven, og det er der de fleste poengene sitter. Volumstrøm, viskositetsvurdering og tabelloppslag kommer senere i kjeden.",
    },
    {
      question: "Et rør fra et reservoar har diameter 5,0 cm og ender i et munnstykke med diameter 2,0 cm. Hvor mange ganger større er farten i munnstykket?",
      options: ["6,25", "2,5", "12,5", "1,6"],
      explanation: "Farten går som $1/A = 1/(\\pi r^2)$, så forholdet er $(5{,}0/2{,}0)^2 = 6{,}25$. Å svare 2,5 er å bruke diameterforholdet direkte og glemme kvadratet.",
    },
    {
      question: "Når er det forsvarlig å sette farten til null i det ene punktet?",
      options: ["Når punktet ligger på en fri overflate eller i et stort kammer, altså når arealforholdet er svært stort", "Alltid i det bredeste partiet av røret, uansett hvor stort arealforholdet mellom partiene er", "Når trykket der er atmosfæretrykket", "Når væsken er ikke-viskøs"],
      explanation: "Begrunnelsen er kontinuitet: $v_1 = v_2A_2/A_1$ blir forsvinnende liten bare når $A_1 \\gg A_2$. I et rør som snevres fra 5,0 til 1,5 $\\text{cm}^2$ er farten i det brede partiet en tredjedel av den i det trange — ikke null.",
    },
    {
      question: "Hva måler en venturimåler direkte?",
      options: ["Trykkforskjellen mellom hovedrøret og halsen", "Volumstrømmen", "Farten i halsen der tverrsnittet er minst", "Væskens tetthet, som instrumentet leser av direkte"],
      explanation: "Instrumentet måler en trykkforskjell. Volumstrøm og farter regnes ut fra den, ved hjelp av kontinuitet og Bernoulli.",
    },
    {
      question: "I magma-oppgaven går det aller meste av kammertrykket til én ting. Hvilken?",
      options: ["Å bære den hydrostatiske magmasøylen, $\\rho gh$", "Å gi magmaen fart gjennom kanalen, $\\tfrac12\\rho v^2$", "Å overvinne atmosfæretrykket, $p_0$", "Å varme opp kanalveggene"],
      explanation: "Med 1,8 km magma over er $\\rho gh = 4{,}8\\cdot 10^{7}$ Pa, mens fartsleddet bare er $4{,}2\\cdot 10^{6}$ Pa og $p_0$ er $1\\cdot 10^{5}$ Pa. Det er trykk*overskuddet* over søylen som driver utbruddet.",
    },
    {
      question: "Du regner en tømmetid med Torricelli-farten ved starthøyden. Hva slags anslag får du?",
      options: ["En nedre grense for tiden", "En øvre grense for tiden", "Et eksakt svar", "Et svar som er for stort med en faktor 2"],
      explanation: "Farten avtar når nivået synker, så du har regnet med den største strømmen hele veien. Den virkelige tømmetiden blir dermed lengre enn det du får.",
    },
    {
      question: "Hvorfor kan Bernoulli ikke brukes mellom et punkt før og et punkt etter en turbin?",
      options: ["Fordi turbinen tar energi ut av strømmen, så mekanisk energi per volum ikke er bevart", "Fordi farten endres over turbinen", "Fordi turbinen gjør væsken kompressibel og dermed endrer tettheten underveis gjennom rotorbladene", "Fordi trykket er høyest etter turbinen"],
      explanation: "Bernoulli er energibevaring per volum, og en turbin bryter nettopp bevaringen. Er rørdiameteren lik på begge sider, er farten dessuten uendret — hele energiuttaket ligger i trykkfallet.",
    },
    {
      question: "En turbin har trykkfall $2{,}0\\cdot 10^{5}$ Pa og volumstrøm $0{,}050$ $\\text{m}^3/\\text{s}$. Hvilken effekt hentes ut?",
      options: ["10 kW", "4,0 MW", "10 W", "0,10 kW"],
      explanation: "$P = \\Delta p\\cdot q_V = 2{,}0\\cdot 10^{5}\\ \\text{Pa}\\cdot 0{,}050\\ \\text{m}^3/\\text{s} = 1{,}0\\cdot 10^{4}$ W. Enhetskontrollen bekrefter: $(\\text{J/m}^3)(\\text{m}^3/\\text{s}) = \\text{W}$.",
    },
    {
      question: "En trekloss legges i en tank og flyter. Hvilket vannvolum fortrenges?",
      options: ["Et volum med samme masse som klossen", "Hele klossens volum", "Halve klossens volum", "Et volum med samme tetthet som klossen"],
      explanation: "Flytelikevekten $B = G$ gir $\\rho_{\\text{vann}}V_{\\text{fortrengt}}g = mg$, altså $V_{\\text{fortrengt}} = m/\\rho_{\\text{vann}}$. Hele klossens volum ville bare vært riktig om den var helt nedsenket.",
    },
    {
      question: "Hvilken konklusjonsform hører til en gyldighetsvurdering der væsken er viskøs?",
      options: ["Svaret er en øvre grense, siden energitapene ikke er med i regnskapet", "Svaret kan være både for høyt og for lavt", "Svaret er en nedre grense for farten, siden viskositet gir ekstra drivkraft", "Svaret er eksakt, siden viskositeten forkortes bort"],
      explanation: "Viskøse tap fjerner mekanisk energi som modellen har regnet som fart, så den virkelige farten er alltid lavere. Retningen er sikker, og det å svare «både og» leses som helgardering — noe det trekkes for.",
    },
  ],
  'fys1001-4-1': [
    {
      question: "Hva forteller den spesifikke varmekapasiteten $c$ til et stoff?",
      options: ["Hvor mye energi som trengs for å varme 1 kg av stoffet 1 grad", "Hvor mye energi hele legemet inneholder ved 0 °C", "Hvor mye energi som trengs for å smelte 1 kg av stoffet", "Hvor fort stoffet leder varme videre til nabolegemer"],
      explanation: "$c$ er energi per kilo per grad, med enhet J/(kg·K). Å smelte 1 kg er den spesifikke smeltevarmen $l_s$, og varmeledning er en annen egenskap (kap. 4.4).",
    },
    {
      question: "Hvor mye energi trengs for å varme 0,20 kg vann fra 20 °C til 60 °C? ($c_{\\text{vann}} = 4180$ J/(kg·K))",
      options: ["$3{,}3\\cdot10^{4}$ J", "$5{,}0\\cdot10^{4}$ J", "$8{,}4\\cdot10^{2}$ J", "$1{,}7\\cdot10^{5}$ J"],
      explanation: "$Q = cm\\Delta T = 4180\\cdot0{,}20\\cdot40 = 3{,}3\\cdot10^{4}$ J. Alternativet $5{,}0\\cdot10^{4}$ J kommer av å bruke sluttemperaturen 60 °C som $\\Delta T$ i stedet for differansen.",
    },
    {
      question: "Hvilken formel gjelder mens en isbit smelter ved 0 °C?",
      options: ["$Q = l_s m$", "$Q = c m \\Delta T$", "$Q = c m \\Delta T + l_s m$", "$Q = l_s m \\Delta T$"],
      explanation: "Under selve faseovergangen endres ikke temperaturen, så det finnes ingen $\\Delta T$ å gange med. Bare $Q = l_s m$.",
    },
    {
      question: "Hva skjer med den tilførte energien mens temperatur–tid-kurven ligger på et platå?",
      options: ["Den brukes til å bryte bindinger mellom molekylene, ikke til å øke temperaturen", "Den forsvinner ut til omgivelsene, så ingenting skjer med stoffet", "Den lagres som trykk i stoffet og frigis når platået slutter", "Ingen energi tilføres i dette tidsrommet"],
      explanation: "Effekten er den samme hele tiden. Energien går til faseovergangen — å rive molekylene løs fra hverandre — og derfor står termometeret stille.",
    },
    {
      question: "Hvor mye energi går med til å smelte 2,0 kg is som allerede holder 0 °C? ($l_s = 3{,}34\\cdot10^{5}$ J/kg)",
      options: ["$6{,}7\\cdot10^{5}$ J", "$1{,}7\\cdot10^{5}$ J", "$3{,}3\\cdot10^{5}$ J", "$8{,}4\\cdot10^{3}$ J"],
      explanation: "$Q = l_s m = 3{,}34\\cdot10^{5}\\cdot2{,}0 = 6{,}7\\cdot10^{5}$ J. Isen er alt på smeltepunktet, så det er ingen oppvarmingsledd.",
    },
    {
      question: "Du skal varme is fra $-10$ °C til vann på 30 °C. Hvor mange ledd har varmeregnskapet?",
      options: ["Tre", "To", "Fire", "Ett"],
      explanation: "Oppvarming av isen til 0 °C, smelting ved 0 °C, og oppvarming av vannet til 30 °C. Fire ledd får du først når du også skal fordampe vannet.",
    },
    {
      question: "Hvilken $c$-verdi skal brukes når is på $-5$ °C varmes til 0 °C?",
      options: ["$c_{\\text{is}} = 2100$ J/(kg·K)", "$c_{\\text{vann}} = 4180$ J/(kg·K)", "Gjennomsnittet av is- og vannverdien", "Smeltevarmen $3{,}34\\cdot10^{5}$ J/kg"],
      explanation: "Så lenge stoffet er fast, gjelder isens varmekapasitet. Først etter at all isen har smeltet, tar $c_{\\text{vann}}$ over.",
    },
    {
      question: "Hvilken likning løser du for å finne sluttemperaturen når et varmt metall slippes i kaldt vann i et isolert kar?",
      options: ["$Q_{\\text{avgitt}} = Q_{\\text{mottatt}}$", "$Q_{\\text{avgitt}} = 0$", "$c_{\\text{metall}} = c_{\\text{vann}}$", "$m_{\\text{metall}}\\Delta T = m_{\\text{vann}}\\Delta T$"],
      explanation: "I et isolert kar går all varmen metallet avgir, over til vannet. Massene og varmekapasitetene inngår hver for seg i de to sidene.",
    },
    {
      question: "To stoffer med samme masse varmes med samme effekt. Stoff A gir en brattere temperatur–tid-kurve enn stoff B. Hva følger av det?",
      options: ["$c_A < c_B$", "$c_A > c_B$", "$l_A > l_B$", "Stoffene har samme $c$, men A har lavere smeltepunkt"],
      explanation: "Stigningstallet er $P/(cm)$. Med lik $P$ og lik $m$ betyr bratt kurve liten $c$: det skal lite energi til per grad.",
    },
    {
      question: "Et platå i temperatur–tid-kurven varer $\\Delta t$ ved konstant effekt $P$ for massen $m$. Hva blir den latente varmen?",
      options: ["$l = P\\Delta t/m$", "$l = Pm/\\Delta t$", "$l = m\\Delta t/P$", "$l = P\\Delta t \\cdot m$"],
      explanation: "All energien i platået, $Q = P\\Delta t$, går til faseovergangen for massen $m$: $l = Q/m = P\\Delta t/m$. Sjekk enheten — J/kg.",
    },
    {
      question: "Kan du bruke celsiusgrader direkte i $Q = cm\\Delta T$?",
      options: ["Ja, fordi bare temperatur*differansen* inngår, og gradene er like store i K og °C", "Nei, temperaturen må alltid regnes om til kelvin i termofysikk", "Ja, men bare når temperaturen er over 0 °C", "Nei, med mindre massen er oppgitt i gram"],
      explanation: "En differanse på 25 °C er en differanse på 25 K. Kelvin er derimot påkrevd der $T$ står alene, som i gassloven og strålingsloven.",
    },
    {
      question: "Hvor mange joule er 0,25 kWh?",
      options: ["$9{,}0\\cdot10^{5}$ J", "$2{,}5\\cdot10^{2}$ J", "$1{,}5\\cdot10^{4}$ J", "$3{,}6\\cdot10^{6}$ J"],
      explanation: "$1\\ \\text{kWh} = 1000\\ \\text{W}\\cdot3600\\ \\text{s} = 3{,}6\\cdot10^{6}$ J, så $0{,}25\\ \\text{kWh} = 9{,}0\\cdot10^{5}$ J.",
    },
    {
      question: "Hva skjer energimessig når vanndamp kondenserer på en kald flate?",
      options: ["Fordampingsvarmen frigis til flaten", "Fordampingsvarmen tas opp fra flaten", "Energien forsvinner, siden temperaturen ikke endres", "Smeltevarmen frigis til flaten"],
      explanation: "Kondensasjon er fordamping baklengs: de $2{,}26\\cdot10^{6}$ J per kilo som gikk med til å fordampe vannet, leveres tilbake.",
    },
    {
      question: "Hvorfor gir damp på 100 °C verre brannskade enn kokende vann på 100 °C?",
      options: ["Dampen frigir i tillegg fordampingsvarmen når den kondenserer på huden", "Dampen har høyere temperatur enn vannet, selv om begge måles til 100 °C", "Dampen har høyere spesifikk varmekapasitet enn vann", "Dampen leder varme raskere fordi den er i gassfase"],
      explanation: "Begge holder 100 °C, men dampen leverer $2{,}26\\cdot10^{6}$ J per kilo ekstra idet den kondenserer — før den i det hele tatt begynner å avkjøles.",
    },
    {
      question: "Hva er varme ($Q$) presist?",
      options: ["Energi som overføres fordi to legemer har ulik temperatur", "Den totale energien et legeme inneholder", "Temperaturen til et legeme målt i kelvin", "Effekten en varmekilde leverer per sekund"],
      explanation: "Varme er en overføring, ikke en beholdning. Et legeme «har» indre energi; varme er energien på vei mellom legemer med ulik temperatur.",
    },
    {
      question: "En kokeplate på 1 500 W skal levere 90 kJ. Hvor lang tid tar det?",
      options: ["60 s", "135 s", "17 s", "90 s"],
      explanation: "$t = Q/P = 90\\,000/1500 = 60$ s. Pass på at energien er i joule og effekten i watt før du deler.",
    },
    {
      question: "Hva kalles overgangen direkte fra fast form til gass?",
      options: ["Sublimasjon", "Kondensasjon", "Størkning", "Fordamping"],
      explanation: "Tørris sublimerer ved $-78$ °C. Energiregnskapet er som ellers: $Q = lm$ med sublimasjonsvarmen fra tabellen.",
    },
    {
      question: "Når er to legemer i termisk likevekt?",
      options: ["Når de har samme temperatur, slik at det ikke går netto varme mellom dem", "Når de inneholder like mye energi", "Når de har samme varmekapasitet", "Når begge har nådd 0 °C"],
      explanation: "Likevekt handler om temperatur, ikke om energimengde. Det er denne felles sluttemperaturen du løser for i blandingsoppgaver.",
    },
    {
      question: "Hvor mye energi trengs for å gjøre 0,10 kg is på 0 °C om til vann på 20 °C? ($l_s = 3{,}34\\cdot10^{5}$ J/kg, $c_{\\text{vann}} = 4180$ J/(kg·K))",
      options: ["$4{,}2\\cdot10^{4}$ J", "$8{,}4\\cdot10^{3}$ J", "$3{,}3\\cdot10^{4}$ J", "$3{,}3\\cdot10^{5}$ J"],
      explanation: "$Q = l_s m + c m \\Delta T = 33\\,400 + 8360 = 4{,}2\\cdot10^{4}$ J. Svaret $8{,}4\\cdot10^{3}$ J er oppvarmingen alene — altså et glemt smelteledd.",
    },
    {
      question: "Hva krever mest energi for 1 kg vann: å varme det fra 0 °C til 100 °C, eller å fordampe det ved 100 °C?",
      options: ["Fordampingen, som krever over fem ganger så mye", "Oppvarmingen, som krever omtrent dobbelt så mye", "De krever omtrent like mye", "Oppvarmingen, som krever over fem ganger så mye"],
      explanation: "Oppvarmingen koster $4180\\cdot1\\cdot100 = 4{,}2\\cdot10^{5}$ J, fordampingen $2{,}26\\cdot10^{6}$ J. Forholdet er 5,4.",
    },
  ],
  'fys1001-4-2': [
    {
      question: "Hvorfor må temperaturen regnes i kelvin i $pV = NkT$?",
      options: ["Fordi loven sier at trykket er proporsjonalt med temperaturen målt fra det absolutte nullpunktet", "Fordi kelvin er SI-enheten, og alle SI-enheter må brukes i alle formler", "Fordi celsiusgrader er mindre enn kelvingrader", "Fordi $k$ er oppgitt med enheten J/K"],
      explanation: "Proporsjonalitet krever et felles, virkelig nullpunkt. Celsiusskalaens null er vannets frysepunkt, et vilkårlig valgt punkt — derfor blir forholdstall gale. Merk at en grad er like stor på begge skalaer.",
    },
    {
      question: "Hvilken konstant hører sammen med *antall molekyler* $N$ i tilstandslikningen?",
      options: ["Boltzmanns konstant $k$", "Gasskonstanten $R$", "Avogadros tall $N_A$", "Stefan–Boltzmanns konstant $\\sigma$"],
      explanation: "$pV = NkT$ bruker $k = 1{,}381\\cdot10^{-23}$ J/K. Gasskonstanten $R$ hører til stoffmengden i mol: $pV = nRT$.",
    },
    {
      question: "En gass komprimeres isotermt slik at volumet halveres. Hva skjer med trykket?",
      options: ["Det dobles", "Det halveres", "Det firedobles", "Det er uendret"],
      explanation: "Isoterm betyr konstant temperatur, altså $p_1V_1 = p_2V_2$. Halvert volum gir dobbelt trykk.",
    },
    {
      question: "En stiv beholder med gass ved 2,0 bar varmes fra 27 °C til 327 °C. Hva blir trykket?",
      options: ["4,0 bar", "24 bar", "2,4 bar", "1,0 bar"],
      explanation: "Isokor prosess: $p_2 = p_1 T_2/T_1 = 2{,}0\\cdot600/300 = 4{,}0$ bar. Svaret 24 bar kommer av å bruke celsius ($327/27$) — en typisk kelvin-felle.",
    },
    {
      question: "En gass varmes fra 300 K til 330 K ved konstant trykk. Hvor mye øker volumet?",
      options: ["10 %", "30 %", "3 %", "110 %"],
      explanation: "Isobar prosess: $\\Delta V/V = \\Delta T/T = 30/300 = 0{,}10$, altså 10 %.",
    },
    {
      question: "Hvilket uttrykk gir molekylkonsentrasjonen i en ideell gass?",
      options: ["$N/V = p/(kT)$", "$N/V = pkT$", "$N/V = kT/p$", "$N/V = pV/(kT)$"],
      explanation: "Del $pV = NkT$ med $V$ og med $kT$. Konsentrasjonen øker med trykket og synker med temperaturen.",
    },
    {
      question: "Hvor mange mol er det i $0{,}10\\ \\text{m}^3$ gass ved $1{,}0\\cdot10^{5}$ Pa og 300 K? ($R = 8{,}314$ J/(mol·K))",
      options: ["4,0 mol", "40 mol", "0,40 mol", "2,5 mol"],
      explanation: "$n = pV/(RT) = 1{,}0\\cdot10^{4}/(8{,}314\\cdot300) = 4{,}0$ mol.",
    },
    {
      question: "En dekkmåler viser 2,2 bar. Hvilket trykk skal inn i gassloven?",
      options: ["3,2 bar", "2,2 bar", "1,2 bar", "4,4 bar"],
      explanation: "Målere viser overtrykk. Gassloven krever absolutt trykk, altså måleravlesningen pluss atmosfæretrykket på om lag 1,0 bar.",
    },
    {
      question: "Under hvilke forhold svikter modellen om ideell gass?",
      options: ["Ved høyt trykk eller nær kondensasjonspunktet", "Ved lavt trykk og høy temperatur", "Når gassen består av flere ulike molekylslag", "Når beholderen er stiv i stedet for elastisk"],
      explanation: "Modellen forutsetter punktformede molekyler uten tiltrekning. Ved høyt trykk blir molekylenes eget volum merkbart, og nær kondensasjon får tiltrekningskreftene tak.",
    },
    {
      question: "Hva er sammenhengen mellom gasskonstanten og Boltzmanns konstant?",
      options: ["$R = kN_A$", "$R = k/N_A$", "$R = kN$", "$R = N_Ak^2$"],
      explanation: "Gasskonstanten er Boltzmanns konstant per mol i stedet for per molekyl: $8{,}314 = 1{,}381\\cdot10^{-23}\\cdot6{,}022\\cdot10^{23}$.",
    },
    {
      question: "Hvor mange kubikkmeter er 25 L?",
      options: ["$0{,}025\\ \\text{m}^3$", "$25\\,000\\ \\text{m}^3$", "$2{,}5\\ \\text{m}^3$", "$0{,}25\\ \\text{m}^3$"],
      explanation: "$1\\ \\text{m}^3 = 1000$ L, så $25\\ \\text{L} = 0{,}025\\ \\text{m}^3$. Omregningen må gjøres når trykket er i pascal.",
    },
    {
      question: "Et rom varmes opp, mens døra står åpen slik at trykket holder seg likt med utetrykket. Hva skjer med lufttettheten inne?",
      options: ["Den synker, fordi molekylkonsentrasjonen $p/(kT)$ går ned når $T$ stiger", "Den stiger, fordi molekylene beveger seg raskere", "Den er uendret, siden volumet av rommet er fast", "Den synker, fordi molekylene blir lettere når de varmes"],
      explanation: "Med $p$ fast gir $N/V = p/(kT)$ færre molekyler per kubikkmeter når $T$ stiger — noen av dem har rett og slett forlatt rommet. Det er derfor varm luft stiger.",
    },
    {
      question: "Hva er enheten til Boltzmanns konstant?",
      options: ["J/K", "J/(mol·K)", "J", "K/J"],
      explanation: "$k = 1{,}381\\cdot10^{-23}$ J/K — energi per kelvin per molekyl. J/(mol·K) er enheten til gasskonstanten $R$.",
    },
    {
      question: "En gass komprimeres isotermt fra 6,0 L til 2,0 L. Hvor mange ganger større blir trykket?",
      options: ["3 ganger", "2 ganger", "6 ganger", "9 ganger"],
      explanation: "$p_2/p_1 = V_1/V_2 = 6{,}0/2{,}0 = 3$. Ved isoterm kompresjon er trykk og volum omvendt proporsjonale.",
    },
    {
      question: "Hva er $-73$ °C i kelvin?",
      options: ["200 K", "-346 K", "346 K", "173 K"],
      explanation: "$-73 + 273 = 200$ K. Kelvinskalaen har ingen negative verdier — får du et negativt svar, har du trukket fra i stedet for å legge til.",
    },
  ],
  'fys1001-4-3': [
    {
      question: "Hvordan lyder termofysikkens 1. lov i bokas fortegnskonvensjon?",
      options: ["$\\Delta U = Q - W$", "$\\Delta U = Q + W$", "$\\Delta U = W - Q$", "$Q = \\Delta U \\cdot W$"],
      explanation: "Varme inn regnes positiv, og arbeid utført *av* gassen regnes positivt — derfor minustegnet. Formen $\\Delta U = Q + W$ er like riktig fysikk, men da er $W$ definert som arbeid utført *på* gassen. Bland aldri de to.",
    },
    {
      question: "En gass utvider seg og skyver et stempel utover. Hvilket fortegn har arbeidet $W$ i bokas konvensjon?",
      options: ["Positivt", "Negativt", "Null", "Det avhenger av om gassen samtidig varmes"],
      explanation: "$W$ er arbeidet utført *av* gassen. Utvidelse betyr at gassen arbeider på omgivelsene, altså $W > 0$.",
    },
    {
      question: "En gass tilføres 500 J varme og utfører 200 J arbeid. Hva er $\\Delta U$?",
      options: ["$+300$ J", "$+700$ J", "$-300$ J", "$+100$ J"],
      explanation: "$\\Delta U = Q - W = 500 - 200 = +300$ J. Svaret $+700$ J kommer av å legge sammen i stedet for å trekke fra.",
    },
    {
      question: "Hva er arbeidet i en isokor prosess (konstant volum)?",
      options: ["Null, siden gassen ikke skyver på noe", "Lik den tilførte varmen", "Lik $p\\Delta V$ med $\\Delta V$ lik startvolumet", "Negativt, siden gassen komprimeres"],
      explanation: "$W = p\\Delta V$ og $\\Delta V = 0$, så $W = 0$. Da blir $\\Delta U = Q$: all varmen blir til indre energi.",
    },
    {
      question: "Hva kjennetegner en adiabatisk prosess?",
      options: ["Det utveksles ingen varme med omgivelsene", "Temperaturen holdes konstant", "Volumet holdes konstant", "Trykket holdes konstant"],
      explanation: "Adiabatisk betyr $Q = 0$, slik at $\\Delta U = -W$. Rask kompresjon i en sykkelpumpe er en god tilnærming.",
    },
    {
      question: "For en ideell gass som gjennomgår en isoterm prosess, gjelder:",
      options: ["$Q = W$", "$Q = -W$", "$Q = 0$", "$W = 0$"],
      explanation: "Indre energi i en ideell gass avhenger bare av temperaturen, så $\\Delta U = 0$ ved konstant $T$. Da gir 1. lov $Q = W$: all tilført varme går rett ut som arbeid.",
    },
    {
      question: "En gass utvider seg $2{,}0\\cdot10^{-3}\\ \\text{m}^3$ ved konstant trykk $1{,}0\\cdot10^{5}$ Pa. Hvor stort arbeid utfører den?",
      options: ["200 J", "2,0 J", "$2{,}0\\cdot10^{8}$ J", "0,20 J"],
      explanation: "$W = p\\Delta V = 1{,}0\\cdot10^{5}\\cdot2{,}0\\cdot10^{-3} = 200$ J. Enhetssjekk: Pa·$\\text{m}^3$ = J.",
    },
    {
      question: "Hva betyr arealet under prosesskurven i et $p$–$V$-diagram?",
      options: ["Arbeidet gassen utfører", "Varmen gassen tar opp", "Endringen i indre energi", "Entropiendringen"],
      explanation: "I $p$–$V$-diagrammet er arealet under kurven arbeid. I TS-diagrammet er arealet under kurven derimot varme — det er nettopp denne forskjellen som testes.",
    },
    {
      question: "Hva betyr arealet under prosesskurven i et TS-diagram?",
      options: ["Varmen som overføres", "Arbeidet som utføres", "Endringen i indre energi", "Virkningsgraden"],
      explanation: "$Q = T\\Delta S$: høyden er temperaturen, bredden entropiendringen. Arbeidet finner du derimot som arealet *innenfor* en lukket syklus.",
    },
    {
      question: "Hva er arealet innenfor en lukket syklus i et TS-diagram?",
      options: ["Arbeidet per omløp", "Varmen som tas opp per omløp", "Varmen som avgis per omløp", "Endringen i indre energi per omløp"],
      explanation: "Over en syklus er $\\Delta U = 0$, så $W = Q_{\\text{netto}}$ — differansen mellom arealet under den øvre og den nedre delen av kurven, altså det innesluttede arealet.",
    },
    {
      question: "Hvorfor er $\\Delta U = 0$ over en hel syklus?",
      options: ["Fordi indre energi er en tilstandsstørrelse, og tilstanden er den samme etter omløpet", "Fordi like mye varme tas opp som avgis i alle sykluser", "Fordi arbeidet alltid er null i en lukket prosess", "Fordi temperaturen alltid er konstant i en syklus"],
      explanation: "$U$ avhenger bare av tilstanden. Når trykk, volum og temperatur er tilbake til utgangspunktet, må $U$ også være det — uansett hva som skjedde underveis.",
    },
    {
      question: "En varmemaskin tar opp 500 J og utfører 150 J arbeid per syklus. Hva er virkningsgraden?",
      options: ["30 %", "43 %", "70 %", "23 %"],
      explanation: "$\\eta = W/Q_v = 150/500 = 0{,}30$. Nevneren er den *tilførte* varmen, ikke den avgitte.",
    },
    {
      question: "En varmemaskin tar opp 900 J og avgir 600 J per syklus. Hvor stort arbeid utfører den?",
      options: ["300 J", "1 500 J", "600 J", "150 J"],
      explanation: "$\\Delta U = 0$ over syklusen, så $W = Q_v - |Q_k| = 900 - 600 = 300$ J.",
    },
    {
      question: "En prosess går ved konstant temperatur 400 K, og entropien øker med 2,0 kJ/K. Hvor mye varme tas opp?",
      options: ["800 kJ", "200 kJ", "0,80 kJ", "2,0 kJ"],
      explanation: "$Q = T\\Delta S = 400\\ \\text{K}\\cdot2{,}0\\ \\text{kJ/K} = 800$ kJ — arealet av rektangelet under den vannrette linjen.",
    },
    {
      question: "Hva er den høyest mulige virkningsgraden for en varmemaskin mellom 600 K og 300 K?",
      options: ["50 %", "100 %", "33 %", "200 %"],
      explanation: "$\\eta_{\\text{maks}} = 1 - T_k/T_v = 1 - 300/600 = 0{,}50$. Virkelige maskiner ligger godt under denne grensen.",
    },
    {
      question: "Hvilken temperaturskala skal brukes i $Q = T\\Delta S$?",
      options: ["Kelvin", "Celsius", "Begge gir samme svar", "Celsius, siden det bare er en differanse"],
      explanation: "$T$ står alene i formelen, ikke som differanse. Da gjelder kelvin-regelen: celsius gir direkte feil svar, og kan til og med gi negative varmemengder.",
    },
    {
      question: "Hvorfor blir en sykkelpumpe varm når du pumper raskt?",
      options: ["Du utfører arbeid på lufta, som øker dens indre energi og dermed temperaturen", "Friksjonen mellom stempelet og veggen står for hele oppvarmingen", "Lufta tar opp varme fra hånda di gjennom pumpehuset", "Trykkøkningen frigjør bindingsenergi i luftmolekylene"],
      explanation: "Kompresjonen går for raskt til varmeutveksling, altså $Q \\approx 0$ og $\\Delta U = -W > 0$ når arbeid utføres på gassen. (Friksjon bidrar litt, men hovedeffekten er kompresjonsarbeidet.)",
    },
    {
      question: "Hvorfor kan ikke et kjøleskap kjøle rommet det står i, når døra står åpen?",
      options: ["Det avgir mer varme på baksiden enn det henter ut på innsiden, siden det også bruker elektrisk arbeid", "Det flytter nøyaktig like mye varme ut som inn, så netto blir null", "Kompressoren slutter å virke når døra står åpen", "Varme kan aldri flyttes fra kaldt til varmt"],
      explanation: "Kjøleskapet flytter varmen $|Q_k|$ ut av skapet og avgir $|Q_k| + W$ på baksiden. Nettoresultatet i rommet er pluss $W$ — altså oppvarming. Varme *kan* flyttes fra kaldt til varmt, men bare når det utføres arbeid.",
    },
    {
      question: "En prosess er tegnet som en loddrett linje i et TS-diagram. Hva vet du da?",
      options: ["Det overføres ingen varme, siden $\\Delta S = 0$", "Temperaturen er konstant", "Arbeidet er null", "Trykket er konstant"],
      explanation: "Loddrett linje betyr uendret entropi, altså $Q = T\\Delta S = 0$. Temperaturen endrer seg derimot langs linjen.",
    },
    {
      question: "Hva er SI-enheten for entropi?",
      options: ["J/K", "J", "J·K", "W/K"],
      explanation: "Entropi måles i joule per kelvin, slik at $Q = T\\Delta S$ får enheten K·J/K = J. I TS-diagrammer oppgis den ofte i kJ/K.",
    },
  ],
  'fys1001-4-4': [
    {
      question: "Hvilken av de tre varmetransportmekanismene virker gjennom vakuum?",
      options: ["Stråling", "Ledning", "Konveksjon", "Alle tre"],
      explanation: "Stråling er elektromagnetiske bølger og trenger ikke noe medium — derfor varmer sola oss gjennom det tomme rommet. Ledning og konveksjon krever stoff.",
    },
    {
      question: "Du dobler isolasjonstykkelsen i en vegg. Hva skjer med varmestrømmen $H = \\lambda A\\Delta T/L$?",
      options: ["Den halveres", "Den dobles", "Den firedobles", "Den er uendret"],
      explanation: "$H$ er omvendt proporsjonal med tykkelsen $L$. Dobbel tykkelse gir halvert varmestrøm — og dobbelt så stor termisk motstand $R = L/\\lambda$.",
    },
    {
      question: "En vegg på 10 $\\text{m}^2$ med 20 cm isolasjon ($\\lambda = 0{,}040$ W/(m$\\cdot$K)) har 20 K temperaturforskjell. Hva er varmestrømmen?",
      options: ["40 W", "800 W", "4,0 W", "0,40 W"],
      explanation: "$H = \\lambda A\\Delta T/L = 0{,}040\\cdot10\\cdot20/0{,}20 = 40$ W. Svaret 0,40 W kommer av å sette inn tykkelsen som 20 (cm) i stedet for 0,20 (m) — en faktor 100 for lite.",
    },
    {
      question: "En konstruksjon har samlet termisk motstand $4{,}0\\ \\text{m}^2$K/W. Hva er U-verdien?",
      options: ["0,25 W/($\\text{m}^2\\cdot$K)", "$4{,}0$ W/($\\text{m}^2\\cdot$K)", "$2{,}0$ W/($\\text{m}^2\\cdot$K)", "16 W/($\\text{m}^2\\cdot$K)"],
      explanation: "$U = 1/R_{\\text{tot}} = 1/4{,}0 = 0{,}25$ W/($\\text{m}^2\\cdot$K). Lav U-verdi betyr god isolasjon.",
    },
    {
      question: "Den absolutte temperaturen til en flate dobles. Hvor mange ganger større blir den utstrålte effekten?",
      options: ["16 ganger", "2 ganger, altså det dobbelte", "4 ganger", "8 ganger"],
      explanation: "$P = \\varepsilon\\sigma AT^4$, så en dobling gir $2^4 = 16$. Lineær tenkning i fjerdegradsloven er en klassisk feil.",
    },
    {
      question: "Hvordan regner du netto utstrålt effekt fra en flate på $T$ mot omgivelser på $T_{\\text{omg}}$?",
      options: ["$\\varepsilon\\sigma A(T^4 - T_{\\text{omg}}^4)$", "$\\varepsilon\\sigma A(T - T_{\\text{omg}})^4$", "$\\varepsilon\\sigma A T^4$", "$\\varepsilon\\sigma A(T^4 + T_{\\text{omg}}^4)$"],
      explanation: "Regn de to fjerdepotensene hver for seg og trekk fra etterpå. Å opphøye differansen i fjerde gir et helt annet og mye for lite svar.",
    },
    {
      question: "Hva betyr det at en flate har emissivitet 0,90?",
      options: ["Den stråler ut 90 % av det et absolutt svart legeme ved samme temperatur ville strålt", "Den holder 90 % av temperaturen til omgivelsene", "Den reflekterer 90 % av all strålingen som treffer den, uansett bølgelengde", "Den leder varme 90 % så godt som kobber"],
      explanation: "$\\varepsilon$ måler utstrålingen i forhold til det svarte idealet, og den samme verdien gjelder for absorpsjon. En flate som stråler dårlig, absorberer også dårlig.",
    },
    {
      question: "Hvilken temperaturskala må brukes i $P = \\varepsilon\\sigma AT^4$?",
      options: ["Kelvin", "Celsius", "Begge gir samme svar", "Celsius, siden det er en differanse i formelen"],
      explanation: "$T$ står alene og i fjerde potens. Celsius gir en feil på flere tierpotenser: $20^4 = 1{,}6\\cdot10^{5}$ mot $293^4 = 7{,}4\\cdot10^{9}$.",
    },
    {
      question: "Hva skjer med bølgelengden der strålingen er sterkest, når temperaturen øker?",
      options: ["Den blir kortere", "Den blir lengre", "Den er uavhengig av temperaturen", "Den blir kortere bare over 1 000 K"],
      explanation: "Wiens lov $\\lambda_{\\text{maks}} = a/T$ gir omvendt proporsjonalitet. Derfor går en glødende gjenstand fra rødt mot hvitt når den varmes videre.",
    },
    {
      question: "En flate holder 2 900 K. Hvor ligger strålingsmaksimum? ($a = 2{,}90\\cdot10^{-3}$ m·K)",
      options: ["1,0 μm", "1,0 nm", "10 μm", "0,10 μm"],
      explanation: "$\\lambda_{\\text{maks}} = 2{,}90\\cdot10^{-3}/2900 = 1{,}0\\cdot10^{-6}$ m $= 1{,}0$ μm, altså i det nære infrarøde — akkurat over det synlige området.",
    },
    {
      question: "Hvordan finner du likevektstemperaturen til en flate i sola?",
      options: ["Setter effekt inn lik effekt ut og løser for $T$", "Setter $T$ lik omgivelsenes temperatur", "Regner ut $\\sigma T^4$ og deler på arealet", "Bruker $Q = cm\\Delta T$ med solinnstrålingen som $Q$"],
      explanation: "Stabil temperatur betyr at like mye effekt kommer inn som går ut. Balanselikningen løses for $T$, som regel med en fjerderot til slutt.",
    },
    {
      question: "Hvorfor isolerer en ullgenser?",
      options: ["Den holder luft i ro, slik at både ledning og konveksjon hindres", "Ulla har svært lav emissivitet og reflekterer det aller meste av kroppsvarmen tilbake mot huden", "Ulla produserer varme når den kommer i kontakt med huden", "Ulla leder varmen jevnt ut over hele kroppen"],
      explanation: "Stillestående luft leder dårlig, og når lufta ikke strømmer, stanses konveksjonen. Det er derfor vind gjør deg kald: den bytter ut den stillestående lufta.",
    },
    {
      question: "Hvorfor kjennes et metallhåndtak kaldere enn et trehåndtak i samme rom?",
      options: ["Metallet leder varme raskere bort fra huden", "Metallet har lavere temperatur enn treet", "Metallet stråler mer varme mot huden", "Treet inneholder mer varme enn metallet"],
      explanation: "Begge har romtemperatur; det huden merker, er varmestrømmen ut av fingeren. Metallets høye $\\lambda$ gir stor varmestrøm, treets lave gir liten.",
    },
    {
      question: "Hva er enheten til Stefan–Boltzmanns konstant $\\sigma$?",
      options: ["W/($\\text{m}^2\\text{K}^4$)", "W/(m$\\cdot$K)", "W/($\\text{m}^2\\cdot$K)", "J/K"],
      explanation: "$\\sigma = 5{,}67\\cdot10^{-8}$ W/($\\text{m}^2\\text{K}^4$). Enheten viser selv at $T$ skal opphøyes i fjerde og at svaret blir watt per kvadratmeter. W/(m$\\cdot$K) er enheten til varmeledningsevnen $\\lambda$.",
    },
    {
      question: "En vegg har 15 cm mineralull ($\\lambda = 0{,}037$) og 10 cm betong ($\\lambda = 1{,}7$ W/(m$\\cdot$K)). Hvilket sjikt bestemmer isolasjonen?",
      options: ["Mineralullen, som har over 60 ganger så stor termisk motstand", "Betongen, fordi den er tettest", "Begge sjiktene bidrar omtrent like mye til den samlede termiske motstanden", "Betongen, fordi den har høyest varmeledningsevne"],
      explanation: "$R_1 = 0{,}15/0{,}037 = 4{,}05$ mot $R_2 = 0{,}10/1{,}7 = 0{,}059$ $\\text{m}^2$K/W. Nesten hele temperaturfallet skjer i ulla; det dårligst ledende sjiktet dominerer alltid.",
    },
  ],
  'fys1001-4-5': [
    {
      question: "Hvor mange ledd har varmeregnskapet når is på $-10$ °C skal bli damp på 100 °C?",
      options: ["Fire", "Tre", "To", "Fem"],
      explanation: "Is varmes, is smelter, vann varmes, vann fordamper. Tell alltid leddene mot antall faseoverganger du krysser — et glemt ledd er sjangerens vanligste feil.",
    },
    {
      question: "Du slipper is i lunkent vann. Hva må du sjekke før du setter avgitt varme lik mottatt varme?",
      options: ["Om vannets tilgjengelige energi er nok til å smelte all isen", "Om isen og vannet har samme masse", "Om karet er av metall eller plast", "Om vannet har passert 4 °C, der tettheten er størst"],
      explanation: "Rekker energien ikke til, stopper temperaturen på 0 °C med is igjen i karet, og den vanlige oppstillingen gir et selvmotsigende svar. Sammenlign $cm\\Delta T$ for vannet med $l_sm$ for isen først.",
    },
    {
      question: "Hvor finner du arbeidet per omløp i et TS-diagram?",
      options: ["Som arealet innenfor den lukkede syklusen", "Som arealet under den øvre prosesskurven", "Som høyden på diagrammet ganger entropiendringen", "Som arealet under den nedre prosesskurven"],
      explanation: "Arealet under den øvre kurven er varmen inn, under den nedre varmen ut. Differansen — det innesluttede arealet — er arbeidet, fordi $\\Delta U = 0$ over en syklus.",
    },
    {
      question: "I hvilken av disse formlene er celsiusgrader trygt å bruke?",
      options: ["$H = \\lambda A\\Delta T/L$", "$p_1/T_1 = p_2/T_2$", "$P = \\varepsilon\\sigma AT^4$", "$\\lambda_{\\text{maks}} = a/T$"],
      explanation: "Ledningsloven inneholder en temperatur*differanse*, og differanser er like store i K og °C. De tre andre har $T$ alene og krever kelvin.",
    },
    {
      question: "Et hus har $UA$-bidrag på 26,4, 12,0 og 24,0 W/K fra vegg, tak og vinduer. Hva er varmetapet ved 20 K temperaturforskjell?",
      options: ["1,25 kW", "62,4 kW", "3,1 kW", "0,63 kW"],
      explanation: "$H = \\left(\\sum UA\\right)\\Delta T = 62{,}4\\cdot20 = 1248$ W. Summer $UA$ først, gang med $\\Delta T$ etterpå.",
    },
    {
      question: "Du har funnet $T^4 = 4{,}2\\cdot10^{9}$ i en strålingsbalanse. Hva er $T$?",
      options: ["$2{,}5\\cdot10^{2}$ K", "$1{,}1\\cdot10^{9}$ K", "$6{,}5\\cdot10^{4}$ K", "$1{,}8\\cdot10^{19}$ K"],
      explanation: "$T = (4{,}2\\cdot10^{9})^{0{,}25} = 255$ K. Svaret $6{,}5\\cdot10^{4}$ K er kvadratroten — du må ta roten to ganger, eller bruke potensen 0,25.",
    },
    {
      question: "En flate stråler mot kaldere omgivelser. Hvilket uttrykk gir varmetapet?",
      options: ["$\\varepsilon\\sigma A(T^4 - T_{\\text{omg}}^4)$", "$\\varepsilon\\sigma AT^4$", "$\\sigma A(T - T_{\\text{omg}})^4$", "$\\varepsilon\\sigma A(T^4 + T_{\\text{omg}}^4)$"],
      explanation: "Spørsmålet gjelder *netto* tap, så omgivelsesleddet må med. Og fjerdepotensene regnes hver for seg — $(T - T_{\\text{omg}})^4$ er noe helt annet.",
    },
    {
      question: "En varmemaskin arbeider mellom 850 K og 310 K, og du har regnet ut $\\eta = 56$ %. Hva bør du gjøre til slutt?",
      options: ["Kontrollere mot Carnot-grensen $1 - T_k/T_v = 64$ %", "Regne om temperaturene til celsius og sjekke på nytt", "Sjekke at virkningsgraden er over 100 %", "Gange virkningsgraden med antall sykluser per sekund"],
      explanation: "56 % ligger under grensen på 64 %, altså er svaret fysisk mulig. Kontrollen er billig og gir uttelling for rimelighetsvurdering.",
    },
    {
      question: "På et skrått parti i en temperatur–tid-kurve er stigningstallet 2,0 K/s. Effekten er 800 W og massen 0,50 kg. Hva er $c$?",
      options: ["800 J/(kg·K)", "3 200 J/(kg·K)", "200 J/(kg·K)", "1 600 J/(kg·K)"],
      explanation: "Stigningstallet er $P/(cm)$, så $c = P/(m\\cdot\\text{stigningstall}) = 800/(0{,}50\\cdot2{,}0) = 800$ J/(kg·K).",
    },
    {
      question: "Hvorfor tar det omtrent like lang tid å koke bort 0,2 kg vann som å varme 1,2 kg vann fra 8 °C til 100 °C?",
      options: ["Fordampingsvarmen per kilo er over fem ganger så stor som varmen til å heve samme kilo 100 grader", "Kokeplaten leverer mindre effekt når vannet først har begynt å koke", "Vannets spesifikke varmekapasitet øker kraftig nær kokepunktet", "Fordampingen skjer bare i overflaten og går derfor langsomt"],
      explanation: "$l_f = 2{,}26\\cdot10^{6}$ J/kg mot $c\\cdot100 = 4{,}18\\cdot10^{5}$ J/kg. Effekten er den samme hele tiden — det er energibehovet som er stort.",
    },
  ],
  'fys1001-5-1': [
    {
      question: "Avstanden mellom to punktladninger dobles, mens ladningene er uendret. Hva skjer med kraften mellom dem?",
      options: ["Den blir fire ganger mindre", "Den blir halvparten så stor som før", "Den blir dobbelt så stor", "Den er uendret"],
      explanation: "Coulombs lov har $r^2$ i nevneren: $F \\propto 1/r^2$. Dobbel avstand gir $1/2^2 = 1/4$ av kraften. Å tro at kraften halveres er den samme lineær-tenkningen som ødelegger intensitets- og strålingsoppgaver senere.",
    },
    {
      question: "Hva er SI-enheten for elektrisk feltstyrke?",
      options: ["V/m, som er det samme som N/C", "V, volt", "N, newton", "C/m, altså coulomb per meter avstand"],
      explanation: "Feltstyrken er kraft per ladning, altså N/C. Siden $1\\ \\text{V} = 1\\ \\text{J/C}$ og $1\\ \\text{J} = 1\\ \\text{N}\\,\\text{m}$, er N/C nøyaktig det samme som V/m.",
    },
    {
      question: "To like store negative ladninger ligger nær hverandre. Hvilken vei virker kreftene?",
      options: ["Frastøtende, langs linja mellom dem", "Tiltrekkende, langs linja mellom dem", "Vinkelrett på linja mellom dem", "Ingen kraft, siden begge er negative"],
      explanation: "Like fortegn frastøter. Kraften virker alltid langs linja mellom to punktladninger, uansett fortegn.",
    },
    {
      question: "Spenningen over en platekondensator er 200 V, og plateavstanden er 4,0 mm. Hvor stor er feltstyrken mellom platene?",
      options: ["$5{,}0\\cdot10^{4}$ V/m", "$5{,}0\\cdot10^{1}$ V/m", "$0{,}80$ V/m", "$8{,}0\\cdot10^{2}$ V/m"],
      explanation: "$E = U/d = 200\\ \\text{V}/(4{,}0\\cdot10^{-3}\\ \\text{m}) = 5{,}0\\cdot10^{4}$ V/m. Feilen som gir 50 V/m er å glemme å gjøre om millimeter til meter.",
    },
    {
      question: "En ladning $q$ flyttes gjennom en spenning $U$. Hvor stort arbeid gjør det elektriske feltet?",
      options: ["$W = qU$", "$W = U/q$", "$W = qU^2$", "$W = q/U$"],
      explanation: "Spenning er definert som arbeid per ladningsenhet, $U = W/q$, altså $W = qU$. Starter ladningen i ro, går arbeidet over til kinetisk energi: $qU = \\tfrac12 mv^2$.",
    },
    {
      question: "To like ladde kuler henger i snorer fra samme punkt, med vinkelen $\\theta$ til loddlinja. Hvilken sammenheng gjelder i likevekt?",
      options: ["$\\tan\\theta = F_e/G$", "$\\sin\\theta = F_e/G$", "$\\cos\\theta = F_e/G$", "$\\tan\\theta = G/F_e$"],
      explanation: "Loddrett: $S\\cos\\theta = G$. Vannrett: $S\\sin\\theta = F_e$. Deler du den vannrette på den loddrette, faller snordraget ut og du får $\\tan\\theta = F_e/G$.",
    },
    {
      question: "Hva må et fullgodt symmetriargument inneholde for å gi full uttelling?",
      options: ["At bidragene er like store, og at de danner like vinkler med symmetriaksen", "Bare at oppsettet ser symmetrisk ut på figuren", "At svaret stemmer med fasiten", "At man har brukt vektorer i regningen"],
      explanation: "Løsningsforslagene krever begge premissene skrevet ut: like store bidrag (lik ladning, lik avstand) og like vinkler mot aksen. Uten dem er «ved symmetri» en påstand, ikke et argument — selv når tallet blir riktig.",
    },
    {
      question: "Hvor mange elementærladninger svarer en ladning på $1{,}0\\ \\mu\\text{C}$ omtrent til?",
      options: ["$6{,}2\\cdot10^{12}$", "$1{,}6\\cdot10^{-13}$", "$6{,}2\\cdot10^{18}$", "$1{,}0\\cdot10^{6}$"],
      explanation: "$n = q/e = 1{,}0\\cdot10^{-6}/1{,}602\\cdot10^{-19} = 6{,}2\\cdot10^{12}$. Svaret $6{,}2\\cdot10^{18}$ er antallet i 1 C, ikke i 1 µC.",
    },
    {
      question: "Hvor mye sterkere er den elektriske frastøtningen enn gravitasjonstiltrekningen mellom to protoner?",
      options: ["Rundt $10^{36}$ ganger", "Rundt $10^{6}$ ganger", "Rundt $10^{-36}$ ganger", "Omtrent like sterke"],
      explanation: "$F_e/F_g = ke^2/(\\gamma m_p^2) \\approx 1{,}2\\cdot10^{36}$. Forholdet er uavhengig av avstanden, siden begge kreftene går som $1/r^2$.",
    },
    {
      question: "Hvilken vei peker feltlinjene i en platekondensator?",
      options: ["Fra plussplaten mot minusplaten", "Fra minusplaten mot plussplaten", "Parallelt med platene", "I ring rundt platene"],
      explanation: "Feltlinjer starter på positiv ladning og ender på negativ. Inne mellom platene er de parallelle og like tette — feltet er homogent.",
    },
    {
      question: "Tre ladninger virker på en fjerde. Hvordan finner du den samlede kraften?",
      options: ["Som vektorsum: dekomponer hver kraft og summer komponentvis", "Som tallsum av de tre kraftstørrelsene", "Ved å bruke bare den nærmeste ladningen", "Ved å gange de tre kraftstørrelsene sammen"],
      explanation: "Superposisjonsprinsippet er en **vektor**sum. Å legge sammen kraftstørrelser uten retning er en av de vanligste feilene i sjangeren.",
    },
    {
      question: "Et elektron slippes i et elektrisk felt som peker nedover. Hvilken vei akselererer elektronet?",
      options: ["Oppover, motsatt feltretningen", "Nedover, altså samme vei som feltet peker", "Vannrett", "Det står i ro"],
      explanation: "Kraften er $F = qE$, og elektronet har negativ $q$. Kraften peker derfor motsatt vei av feltet.",
    },
    {
      question: "Et proton og et elektron akselereres fra ro gjennom samme spenning. Hvem får høyest fart?",
      options: ["Elektronet, fordi farten går som $1/\\sqrt{m}$", "Protonet, fordi det har større ladning", "De får nøyaktig samme fart", "Protonet, fordi det er tyngre"],
      explanation: "Begge har samme tallverdi på ladningen, så $v = \\sqrt{2qU/m}$ avhenger bare av massen. Elektronet er nesten 2000 ganger lettere og får rundt 43 ganger høyere fart.",
    },
    {
      question: "Spenningen over en kondensator holdes fast mens plateavstanden dobles. Hva skjer med feltstyrken?",
      options: ["Den halveres", "Den dobles", "Den firedobles", "Den er uendret"],
      explanation: "$E = U/d$ er omvendt proporsjonal med $d$ ved fast $U$. Dobbel avstand gir halv feltstyrke. Merk at dette er en $1/d$-lov, ikke en $1/d^2$-lov som Coulombs lov.",
    },
    {
      question: "Hva skal du gjøre med Coulomb-konstanten $k$ på eksamen?",
      options: ["Hente verdien fra formelarket", "Pugge den utenat før eksamen", "Regne den ut fra elementærladningen", "Sette den lik 1 og se bort fra den"],
      explanation: "Eksamen deler ut formelark og tillater Gyldendals tabellsamling. Alle naturkonstanter hentes derfra. Det du må kunne aktivt, er å velge og kombinere formlene — ikke å huske tall.",
    },
  ],
  'fys1001-5-2': [
    {
      question: "Hvilken formel bør du bruke når du skal finne effekten i én motstand i en sammensatt krets?",
      options: ["$P = RI^2$ med strømmen gjennom den motstanden", "$P = U^2/R$ med kildespenningen", "$P = UI$ med kildespenningen og hovedstrømmen", "$P = U/R$ med spenningen over kretsen"],
      explanation: "Strømmen gjennom komponenten finner du underveis i reduksjonen, mens kildespenningen ligger over hele kretsen. $P = U^2/R$ er ikke feil, men krever spenningen over akkurat den motstanden — skriv den i så fall eksplisitt.",
    },
    {
      question: "To motstander på $30\\ \\Omega$ og $60\\ \\Omega$ kobles i parallell. Hva er samlet resistans?",
      options: ["$20\\ \\Omega$", "$90\\ \\Omega$", "$45\\ \\Omega$", "$0{,}05\\ \\Omega$"],
      explanation: "$1/R = 1/30 + 1/60 = 1/20$, altså $R = 20\\ \\Omega$. Svaret $90\\ \\Omega$ er serieformelen, og $0{,}05\\ \\Omega$ er å glemme å snu brøken til slutt.",
    },
    {
      question: "Hva er felles for komponenter koblet i serie?",
      options: ["Strømmen gjennom dem", "Spenningen over hver enkelt av dem", "Effekten i dem", "Resistansen deres"],
      explanation: "I serie finnes bare én vei for strømmen, så all strøm må gjennom alle komponentene. Spenningen deler seg derimot, proporsjonalt med resistansene.",
    },
    {
      question: "Hva er felles for komponenter koblet i parallell?",
      options: ["Spenningen over dem", "Strømmen gjennom dem", "Effekten i dem", "Både strøm og spenning"],
      explanation: "Parallelle grener sitter mellom de samme to punktene og har derfor samme spenning. Strømmen deler seg omvendt proporsjonalt med resistansene.",
    },
    {
      question: "En parallellkobling av flere motstander har alltid samlet resistans som er",
      options: ["mindre enn den minste grenen", "større enn den største grenen", "lik gjennomsnittet av grenene", "lik summen av grenene"],
      explanation: "Fra $1/R = \\sum 1/R_i$ følger $1/R > 1/R_{\\min}$ når det er minst to grener med endelig resistans, altså $R < R_{\\min}$. Fysisk: hver ny gren gir strømmen en ekstra vei.",
    },
    {
      question: "Hva betyr det at en strøm kommer ut negativ i en Kirchhoff-regning?",
      options: ["At strømmen går motsatt vei av pila du valgte", "At du har regnet feil et sted og må starte på nytt", "At strømmen er null", "At kilden er koblet feil vei"],
      explanation: "Retningene velges fritt før regningen. Et negativt svar er informasjon, ikke en feil: tallverdien er riktig, og retningen er motsatt av den du tegnet. Skriv tolkningen ut i besvarelsen.",
    },
    {
      question: "Hvilken bevaringslov ligger bak Kirchhoffs strømlov?",
      options: ["Bevaring av elektrisk ladning", "Bevaring av energi", "Bevaring av bevegelsesmengde", "Bevaring av masse"],
      explanation: "Ladning kan ikke hope seg opp i et knutepunkt, så det som går inn må gå ut. Maskeloven er derimot energibevaring.",
    },
    {
      question: "Et batteri har EMK $12\\ \\text{V}$ og indre motstand $0{,}50\\ \\Omega$, og leverer $2{,}0\\ \\text{A}$. Hva er polspenningen?",
      options: ["$11\\ \\text{V}$", "$13\\ \\text{V}$", "$12\\ \\text{V}$", "$1{,}0\\ \\text{V}$"],
      explanation: "$U = \\varepsilon - rI = 12\\ \\text{V} - 0{,}50\\ \\Omega\\cdot2{,}0\\ \\text{A} = 11\\ \\text{V}$. Spenningsfallet skjer inne i batteriet, så polspenningen er lavere enn EMK.",
    },
    {
      question: "En lysdiode trenger $2{,}0\\ \\text{V}$ ved $20\\ \\text{mA}$ og kobles til en kilde på $6{,}0\\ \\text{V}$. Hvor stor må formotstanden være?",
      options: ["$200\\ \\Omega$", "$300\\ \\Omega$", "$100\\ \\Omega$", "$400\\ \\Omega$"],
      explanation: "Formotstanden tar overskuddsspenningen: $R_f = (6{,}0 - 2{,}0)\\ \\text{V}/0{,}020\\ \\text{A} = 200\\ \\Omega$. Svaret $300\\ \\Omega$ kommer av å bruke hele kildespenningen i stedet for differansen.",
    },
    {
      question: "Et solcellepanel har areal $2{,}0\\ \\text{m}^2$ og virkningsgrad $15\\ \\%$ i en innstråling på $600\\ \\text{W/m}^2$. Hvor stor elektrisk effekt leverer det?",
      options: ["$180\\ \\text{W}$", "$1200\\ \\text{W}$", "$90\\ \\text{W}$", "$18\\ \\text{W}$"],
      explanation: "$P = \\eta MA = 0{,}15\\cdot600\\ \\text{W/m}^2\\cdot2{,}0\\ \\text{m}^2 = 180\\ \\text{W}$. Svaret $1200\\ \\text{W}$ er den innstrålte effekten før virkningsgraden er trukket inn.",
    },
    {
      question: "Tre like motstander på $9{,}0\\ \\Omega$ kobles i parallell. Hva blir samlet resistans?",
      options: ["$3{,}0\\ \\Omega$", "$27\\ \\Omega$", "$9{,}0\\ \\Omega$", "$0{,}33\\ \\Omega$"],
      explanation: "$n$ like motstander $R_0$ i parallell gir $R_0/n = 9{,}0/3 = 3{,}0\\ \\Omega$. I serie ville de gitt $27\\ \\Omega$.",
    },
    {
      question: "Hva skjer med de andre lampene når du skrur ut én lampe i en parallellkobling?",
      options: ["De lyser uendret", "De slukner alle sammen", "De lyser svakere", "De lyser sterkere"],
      explanation: "Hver parallellgren har fortsatt hele kildespenningen over seg, så effekten i de andre lampene er uendret. Samlet strøm fra kilden synker derimot.",
    },
    {
      question: "Hva skjer med lampene når du skrur ut én lampe i en seriekobling?",
      options: ["Alle slukner, fordi kretsen brytes", "De andre lyser uendret", "De andre lyser sterkere", "De andre lyser svakere, men lyser"],
      explanation: "I serie er det bare én vei for strømmen. Brytes den ett sted, går det ingen strøm noe sted i kretsen.",
    },
    {
      question: "Hvordan kobles et amperemeter inn i en krets?",
      options: ["I serie med komponenten", "I parallell med komponenten", "Mellom batteripolene", "Det spiller ingen rolle"],
      explanation: "Amperemeteret skal måle strømmen som går gjennom komponenten, og må derfor ligge i strømbanen. Et voltmeter kobles derimot parallelt.",
    },
    {
      question: "En seriekobling av $15\\ \\Omega$ og $25\\ \\Omega$ ligger over $9{,}0\\ \\text{V}$. Hvor stor er strømmen?",
      options: ["$0{,}23\\ \\text{A}$", "$0{,}60\\ \\text{A}$", "$0{,}36\\ \\text{A}$", "$4{,}4\\ \\text{A}$"],
      explanation: "Serie: $R = 40\\ \\Omega$ og $I = 9{,}0/40 = 0{,}23\\ \\text{A}$. Svaret $0{,}60\\ \\text{A}$ er å bruke $15\\ \\Omega$ alene.",
    },
    {
      question: "Hvordan fordeler strømmen seg mellom to parallellgrener?",
      options: ["Omvendt proporsjonalt med resistansene", "Proporsjonalt med resistansene", "Likt i begge grener", "Alt går gjennom grenen med størst resistans"],
      explanation: "Samme spenning over begge gir $I = U/R$, så minst resistans får mest strøm: $I_1/I_2 = R_2/R_1$.",
    },
    {
      question: "Hvordan fordeler spenningen seg mellom to motstander i serie?",
      options: ["Proporsjonalt med resistansene", "Omvendt proporsjonalt med resistansene", "Likt på begge", "All spenningen ligger over den minste"],
      explanation: "Samme strøm gjennom begge gir $U = RI$, så størst resistans får størst spenning: $U_1/U_2 = R_1/R_2$. Dette er prinsippet i en spenningsdeler.",
    },
    {
      question: "Hvilken kontroll bør du alltid gjøre til slutt i en kretsoppgave?",
      options: ["Sjekke at levert effekt er lik samlet avsatt effekt", "Sjekke at alle motstandene er like store", "Sjekke at strømmen er den samme overalt", "Sjekke at spenningen er den samme overalt"],
      explanation: "Energibevaring gir en uavhengig kontroll: $\\varepsilon I = \\sum R_iI_i^2$. Stemmer ikke regnskapet, ligger det en regnefeil et sted.",
    },
    {
      question: "Hva er $1\\ \\text{kWh}$ uttrykt i joule?",
      options: ["$3{,}6\\cdot10^{6}\\ \\text{J}$", "$1000\\ \\text{J}$", "$3600\\ \\text{J}$", "$3{,}6\\cdot10^{3}\\ \\text{J}$"],
      explanation: "$1\\ \\text{kWh} = 1000\\ \\text{W}\\cdot3600\\ \\text{s} = 3{,}6\\cdot10^{6}\\ \\text{J} = 3{,}6\\ \\text{MJ}$.",
    },
    {
      question: "Et batteri med EMK $\\varepsilon$ og indre motstand $r$ kortsluttes. Hvor stor blir strømmen?",
      options: ["$\\varepsilon/r$", "$\\varepsilon\\cdot r$", "Uendelig stor", "Null"],
      explanation: "Ved kortslutning er den ytre resistansen tilnærmet null, så bare den indre motstanden begrenser strømmen. Den blir stor, men endelig — og batteriet blir varmt.",
    },
    {
      question: "I kretsen med $15\\ \\Omega$ i serie med parallellkoblingen av $40\\ \\Omega$ og $60\\ \\Omega$ over $9{,}0\\ \\text{V}$ — hvilken spenning ligger over $60\\ \\Omega$-motstanden?",
      options: ["$5{,}5\\ \\text{V}$", "$9{,}0\\ \\text{V}$", "$3{,}5\\ \\text{V}$", "$4{,}5\\ \\text{V}$"],
      explanation: "Parallellkoblingen er $24\\ \\Omega$, hovedstrømmen $9{,}0/39 = 0{,}231\\ \\text{A}$, og spenningen over parallelldelen $24\\cdot0{,}231 = 5{,}5\\ \\text{V}$. Begge grenene har denne spenningen.",
    },
    {
      question: "Hvorfor blir samlet resistans større når du kobler flere motstander i serie?",
      options: ["Fordi spenningene summeres mens strømmen er felles", "Fordi strømmene summeres mens spenningen er felles", "Fordi effekten summeres", "Fordi ladningen summeres"],
      explanation: "I serie er $U = R_1I + R_2I = (R_1+R_2)I$, så den samlede resistansen er summen. Det motsatte resonnementet — felles spenning og summerte strømmer — gjelder parallellkobling.",
    },
    {
      question: "En komponent har $R = 47\\ \\Omega$ og fører $0{,}15\\ \\text{A}$. Hvor stor effekt avsettes i den?",
      options: ["$1{,}1\\ \\text{W}$", "$7{,}1\\ \\text{W}$", "$0{,}15\\ \\text{W}$", "$310\\ \\text{W}$"],
      explanation: "$P = RI^2 = 47\\cdot0{,}15^2 = 1{,}1\\ \\text{W}$. Svaret $7{,}1\\ \\text{W}$ er spenningen $U = RI$ forvekslet med effekt.",
    },
    {
      question: "Hva sier Kirchhoffs spenningslov?",
      options: ["Summen av spenningene rundt en lukket maske er null", "Summen av strømmene i et knutepunkt er null", "Spenningen er den samme overalt i kretsen", "Spenningen synker jevnt langs kretsen"],
      explanation: "En ladning som går én runde og kommer tilbake til utgangspunktet, har netto verken vunnet eller tapt energi. Knutepunktsloven handler derimot om strømmene.",
    },
    {
      question: "Hva må du gjøre før du kan bruke $P = U^2/R$ på én motstand i en sammensatt krets?",
      options: ["Vise hvilken delspenning som ligger over akkurat den motstanden", "Gange kildespenningen med antall motstander", "Sette $R$ lik samlet resistans i kretsen", "Regne om spenningen til strøm og tilbake"],
      explanation: "Formelen er riktig, men bare med spenningen over komponenten. Uten den ene setningen som identifiserer $U$, er metoden feil — og feil metode med riktig utseende gir null uttelling.",
    },
  ],
  'fys1001-5-3': [
    {
      question: "Hva er første steg i løsningsoppskriften for en kretsoppgave?",
      options: ["Tegne og rydde skjemaet, og markere knutepunktene", "Regne ut effekten i hver motstand", "Sette opp maskeligningene med en gang, før noe annet", "Finne polspenningen til kilden"],
      explanation: "Uten et ryddig skjema ser du ikke hvilke komponenter som faktisk sitter i serie og hvilke som sitter parallelt. Effekt og kontroll kommer helt til slutt.",
    },
    {
      question: "Et batteri har $\\varepsilon = 6{,}0\\ \\text{V}$ og $r = 0{,}30\\ \\Omega$ og driver $2{,}7\\ \\Omega$. Hvor stor er strømmen?",
      options: ["$2{,}0\\ \\text{A}$", "$2{,}2\\ \\text{A}$", "$20\\ \\text{A}$", "$0{,}50\\ \\text{A}$"],
      explanation: "$I = \\varepsilon/(R+r) = 6{,}0/3{,}0 = 2{,}0\\ \\text{A}$. Svaret $2{,}2\\ \\text{A}$ kommer av å glemme den indre motstanden.",
    },
    {
      question: "Parallellkoblingen av $18\\ \\Omega$ og $9{,}0\\ \\Omega$ er",
      options: ["$6{,}0\\ \\Omega$", "$27\\ \\Omega$", "$13{,}5\\ \\Omega$", "$0{,}17\\ \\Omega$"],
      explanation: "$R_p = 18\\cdot9{,}0/27 = 6{,}0\\ \\Omega$, altså mindre enn den minste grenen ✓ $27\\ \\Omega$ er serieformelen, $0{,}17\\ \\Omega$ er å glemme å snu brøken.",
    },
    {
      question: "Hvilken kontroll avslører raskest at en grenstrøm er regnet feil?",
      options: ["At ingen grenstrøm kan være større enn hovedstrømmen", "At alle motstander skal ha samme strøm", "At spenningen skal være lik overalt", "At effekten skal være nøyaktig den samme i alle komponentene"],
      explanation: "Knutepunktsloven sier at hovedstrømmen deler seg mellom grenene. En grenstrøm som overgår hovedstrømmen, er umulig.",
    },
    {
      question: "En lampe skal ha $4{,}5\\ \\text{V}$ ved $0{,}30\\ \\text{A}$ fra en kilde på $12\\ \\text{V}$. Hvor stor må formotstanden være?",
      options: ["$25\\ \\Omega$", "$40\\ \\Omega$", "$15\\ \\Omega$", "$55\\ \\Omega$"],
      explanation: "$R_f = (12 - 4{,}5)\\ \\text{V}/0{,}30\\ \\text{A} = 25\\ \\Omega$. Svaret $40\\ \\Omega$ kommer av å bruke hele kildespenningen i stedet for overskuddet.",
    },
    {
      question: "Hvorfor blir et batteri varmt når det driver en kraftig motor?",
      options: ["Fordi effekten inne i kilden er $rI^2$, og strømmen er stor", "Fordi den indre motstanden øker med belastningen", "Fordi polspenningen øker", "Fordi motoren sender varme tilbake i ledningene"],
      explanation: "Den indre motstanden er den samme uansett, men effekten går som kvadratet av strømmen. Ti ganger så stor strøm gir hundre ganger så stor varmeutvikling inne i batteriet.",
    },
    {
      question: "Du skrur ut den ene av to like lamper koblet i parallell til en ideell kilde. Hva skjer med den andre?",
      options: ["Den lyser uendret", "Den slukner", "Den lyser svakere enn før", "Den lyser dobbelt så sterkt"],
      explanation: "Hele kildespenningen ligger fortsatt over den gjenværende lampen, så strøm og effekt er uendret. Med en virkelig kilde med indre motstand vil den lyse marginalt sterkere, fordi det samlede spenningsfallet inne i kilden blir mindre.",
    },
    {
      question: "En Kirchhoff-regning gir $I_2 = -1{,}0\\ \\text{A}$. Hva skriver du i besvarelsen?",
      options: ["At strømmen er $1{,}0\\ \\text{A}$ motsatt vei av den valgte pila", "At strømmen er null", "At oppgaven er feilstilt", "At strømmen er $-1{,}0\\ \\text{A}$ og lar det stå"],
      explanation: "Retningen ble valgt før regningen. Tallverdien er riktig, og fortegnet forteller at strømmen går motsatt vei. Tolkningen er et eget poeng i løsningsforslagene.",
    },
    {
      question: "Et solcellepanel på $0{,}60\\ \\text{m}^2$ med virkningsgrad $22\\ \\%$ står i $900\\ \\text{W/m}^2$. Hvor stor effekt leverer det?",
      options: ["$119\\ \\text{W}$", "$540\\ \\text{W}$", "$198\\ \\text{W}$", "$12\\ \\text{W}$"],
      explanation: "$P = \\eta MA = 0{,}22\\cdot900\\cdot0{,}60 = 119\\ \\text{W}$. Svaret $540\\ \\text{W}$ er innstrålt effekt før virkningsgraden er trukket inn.",
    },
    {
      question: "Hva er den beste sluttkontrollen på en ferdig kretsoppgave?",
      options: ["At levert effekt er lik samlet avsatt effekt", "At alle strømmene er positive", "At den samlede resistansen er den største verdien i kretsen", "At polspenningen er lik EMK"],
      explanation: "Energibevaring gir en uavhengig kontroll av alle delstrømmene på én gang. Negative strømmer er helt lovlige, og polspenningen er lavere enn EMK når kilden har indre motstand.",
    },
    {
      question: "Hvordan er tiden per deloppgave à 4 poeng omtrent dimensjonert på eksamen?",
      options: ["Rundt 11 minutter", "Rundt 2 minutter", "Rundt 25 minutter", "Rundt 40 minutter"],
      explanation: "Fire timer fordelt på rundt 20–24 deloppgaver gir omtrent 11 minutter hver. Tidsanslagene i boka er lesetid; gang med rundt 1,5 når du regner for hånd.",
    },
    {
      question: "I hvilken rekkefølge finner du størrelsene i en sammensatt krets?",
      options: ["Samlet resistans, hovedstrøm, delspenninger, grenstrømmer, effekt", "Effekt, grenstrømmer, delspenninger, hovedstrøm", "Grenstrømmer, hovedstrøm, samlet resistans, effekt", "Delspenninger, effekt, samlet resistans, hovedstrøm"],
      explanation: "Reduksjonen går innenfra og ut; utregningen går motsatt vei, fra hovedstrømmen og utover til delstørrelsene. Effekten kommer sist, når alle strømmene er kjent.",
    },
  ],
  'fys1001-5-4': [
    {
      question: "Hvorfor endrer et magnetfelt aldri farten til en ladd partikkel?",
      options: ["Kraften står vinkelrett på farten og gjør derfor ikke arbeid", "Kraften er alltid for liten til å merkes i praksis", "Fordi ladningen er bevart", "Fordi feltet ikke inneholder energi"],
      explanation: "Arbeid krever en kraftkomponent langs bevegelsen. Den magnetiske kraften står alltid vinkelrett på farten, så $W = 0$, den kinetiske energien er konstant, og bare retningen endres.",
    },
    {
      question: "Hva er uttrykket for baneradien til en ladning som går vinkelrett inn i et magnetfelt?",
      options: ["$r = mv/(qB)$", "$r = qB/(mv)$", "$r = qvB/m$", "$r = mvB/q$"],
      explanation: "Setter du den magnetiske kraften $qvB$ lik sentripetalkraften $mv^2/r$ og løser for $r$, får du $r = mv/(qB)$. Radien vokser med masse og fart, og synker med ladning og felt.",
    },
    {
      question: "Et elektron og et proton akselereres gjennom samme spenning. Hvem får høyest fart?",
      options: ["Elektronet, fordi $v$ går som $1/\\sqrt{m}$", "Protonet, fordi det har en større ladning enn elektronet", "De får samme fart", "Protonet, fordi det er tyngre"],
      explanation: "Tallverdien av ladningen er den samme, så $v = \\sqrt{2qU/m}$ avhenger bare av massen. Elektronet er nesten 2000 ganger lettere og får rundt 43 ganger høyere fart.",
    },
    {
      question: "Hva er SI-enheten for magnetisk flukstetthet?",
      options: ["Tesla, T", "Weber, Wb", "Volt per meter, V/m", "Newton, N"],
      explanation: "$B$ måles i tesla, der $1\\ \\text{T} = 1\\ \\text{N}/(\\text{A}\\,\\text{m})$. V/m er enheten for elektrisk feltstyrke.",
    },
    {
      question: "Hvilken vei peker den magnetiske kraften på et elektron sammenlignet med det høyrehåndsregelen gir?",
      options: ["Motsatt vei, fordi ladningen er negativ", "Samme vei som den ville pekt for en positiv ladning", "Vinkelrett på det regelen gir", "Regelen gjelder ikke for elektroner"],
      explanation: "Høyrehåndsregelen gir retningen for en positiv ladning. For negative ladninger snur du svaret til slutt — og skriver at du gjør det.",
    },
    {
      question: "Hva skjer med den magnetiske kraften hvis farten er parallell med feltlinjene?",
      options: ["Den blir null", "Den blir maksimal", "Den halveres", "Den snur retning"],
      explanation: "$F = qvB\\sin\\theta$, og $\\sin 0^\\circ = 0$. Bare fartskomponenten vinkelrett på feltet gir kraft.",
    },
    {
      question: "Hvorfor bøyes alfapartikler mye mindre av i et magnetfelt enn betapartikler ved samme fart?",
      options: ["Fordi $m/q$ er mye større for alfa, så radien blir større", "Fordi alfapartikler er uladde", "Fordi alfapartikler går saktere", "Fordi alfapartikler har negativ ladning"],
      explanation: "$r = (v/B)\\cdot(m/q)$. En alfapartikkel er over 7000 ganger tyngre enn et elektron men har bare dobbelt ladning, så $m/q$ — og radien — er rundt 3600 ganger større.",
    },
    {
      question: "Hvilken stråletype bøyes ikke i det hele tatt av et magnetfelt?",
      options: ["Gammastråling", "Alfastråling", "Betastråling", "All stråling bøyes noe"],
      explanation: "Gammastråling er fotoner uten ladning, og $F = qvB$ er null når $q = 0$ — uansett hvor sterkt feltet er.",
    },
    {
      question: "Hva er magnetfeltet 5,0 cm fra en rett leder som fører 15 A? ($k_m = 2{,}0\\cdot10^{-7}$ T m/A.)",
      options: ["$6{,}0\\cdot10^{-5}$ T", "$6{,}0\\cdot10^{-7}$ T", "$1{,}5\\cdot10^{-3}$ T", "$3{,}0\\cdot10^{-8}$ T"],
      explanation: "$B = k_mI/r = 2{,}0\\cdot10^{-7}\\cdot15/0{,}050 = 6{,}0\\cdot10^{-5}$ T. Feilen som gir $6{,}0\\cdot10^{-7}$ T er å sette inn avstanden i centimeter.",
    },
    {
      question: "To parallelle ledere fører strøm i samme retning. Hva skjer?",
      options: ["De trekkes mot hverandre", "De frastøter hverandre", "Det virker ingen kraft", "De vrir seg 90 grader"],
      explanation: "Strøm samme vei gir tiltrekning, motsatt vei gir frastøtning. Merk at det er omvendt av hva du kanskje forventer ut fra like og ulike ladninger.",
    },
    {
      question: "Hvordan avtar magnetfeltet med avstanden fra en rett leder?",
      options: ["Som $1/r$", "Som $1/r^2$", "Som $1/r^3$", "Det avtar ikke"],
      explanation: "$B = k_mI/r$ er en førstepotenslov, i motsetning til Coulombs lov som går som $1/r^2$. Å blande de to er en klassisk feil.",
    },
    {
      question: "Omløpstiden til en ladning i en magnetisk sirkelbane er",
      options: ["uavhengig av farten", "proporsjonal med farten", "omvendt proporsjonal med farten", "proporsjonal med kvadratet av farten"],
      explanation: "$T = 2\\pi r/v$, og siden $r = mv/(qB)$ er proporsjonal med $v$, forkortes farten bort: $T = 2\\pi m/(qB)$. Raskere partikler går i tilsvarende videre baner.",
    },
    {
      question: "Hvilket felt kan endre farten til en ladd partikkel?",
      options: ["Et elektrisk felt", "Et magnetfelt", "Ingen av dem", "Bare de to i kombinasjon"],
      explanation: "Kraften $F = qE$ virker uavhengig av bevegelsen og kan ha en komponent langs farten, så et elektrisk felt gjør arbeid. En magnetisk kraft står alltid vinkelrett på farten.",
    },
    {
      question: "Hva betyr kryss-symbolene ($\\times$) i en figur av et magnetfelt?",
      options: ["At feltet peker inn i papirplanet", "At feltet peker ut av papirplanet", "At feltet er null der", "At feltet skifter retning"],
      explanation: "Kryss er halen på en pil som forsvinner fra deg, altså felt inn i planet. Prikker er pilspissen som kommer mot deg, altså felt ut av planet.",
    },
    {
      question: "Et enkeltladd ion akselereres over $U$ og går i bane med radius $r$ i feltet $B$. Hva er massen?",
      options: ["$m = qB^2r^2/(2U)$", "$m = 2Uq/(B^2r^2)$", "$m = qBr/(2U)$", "$m = B^2r^2/(2Uq)$"],
      explanation: "Kombiner $qU = \\tfrac12mv^2$ med $r = mv/(qB)$ og eliminer $v$: $r^2 = 2mU/(qB^2)$, altså $m = qB^2r^2/(2U)$. Dette er hele prinsippet bak massespektrometeret.",
    },
    {
      question: "Hvorfor er nordlyset sterkest nær polene?",
      options: ["Ladde partikler følger jordas feltlinjer, som samles mot polene", "Atmosfæren er tynnest ved ekvator og slipper gjennom mest", "Sola sender flest partikler mot polene", "Magnetfeltet er svakest ved polene"],
      explanation: "Partiklene går i skruebaner rundt feltlinjene og føres langs dem. Jordas feltlinjer konvergerer mot polområdene, så det er der partiklene treffer atmosfæren.",
    },
    {
      question: "Hvor stor blir baneradien hvis du dobler magnetfeltet og lar farten være uendret?",
      options: ["Den halveres", "Den dobles", "Den firedobles", "Den er uendret"],
      explanation: "$r = mv/(qB)$ er omvendt proporsjonal med $B$. Sterkere felt gir trangere bane — det er slik man styrer partikkelstråler.",
    },
    {
      question: "Hva må du gjøre med den magnetiske konstanten $k_m$ på eksamen?",
      options: ["Hente verdien fra formelarket", "Regne den ut fra Coulomb-konstanten", "Pugge den utenat", "Sette den lik 1"],
      explanation: "Alle naturkonstanter hentes fra formelarket eller tabellsamlingen. Merk samtidig at $k_m$ og Coulomb-konstanten $k$ er helt forskjellige størrelser.",
    },
    {
      question: "En partikkel kommer inn på skrå mot feltlinjene. Hvordan blir banen?",
      options: ["En skruebane rundt feltlinja", "En rett linje", "En ellipse i planet", "En parabel"],
      explanation: "Fartskomponenten vinkelrett på feltet gir sirkelbevegelse, mens komponenten langs feltet er upåvirket. Til sammen blir det en spiral langs feltlinja.",
    },
    {
      question: "Hva er første steg i standardkjeden for en sjanger L-oppgave?",
      options: ["Finne farten fra akselerasjonsspenningen", "Finne baneradien i det feltet som er oppgitt", "Bestemme kraftretningen", "Regne ut omløpstiden"],
      explanation: "Farten er inngangsstørrelsen til alt annet: $qU = \\tfrac12mv^2$ først, deretter $r = mv/(qB)$, så retning, og til slutt den kvalitative halen.",
    },
  ],
  'fys1001-6-1': [
    {
      question: "En tone går fra luft til vann. Hva er uendret?",
      options: ["Frekvensen, fordi den bestemmes av kilden", "Bølgelengden", "Bølgefarten", "Både frekvensen og bølgelengden er de samme"],
      explanation: "Kilden svinger like mange ganger per sekund uansett medium. Farten bestemmes av mediet, og siden $v = f\\lambda$ må bølgelengden endres når farten gjør det.",
    },
    {
      question: "Avstanden til en punktkilde dobles. Hva skjer med intensiteten?",
      options: ["Den blir fire ganger mindre", "Den halveres", "Den blir åtte ganger mindre enn før", "Den er uendret"],
      explanation: "Energien fordeles over en kuleflate $4\\pi r^2$, så $I \\propto 1/r^2$. Dobbel avstand gir en firedel. Å tro at intensiteten halveres, er lineær tenkning i en kvadratlov.",
    },
    {
      question: "To høyttalere i fase. Hva gir utslettelse i et punkt?",
      options: ["$\\Delta l = (n + \\tfrac12)\\lambda$", "$\\Delta l = n\\lambda$", "$\\Delta l = \\lambda/4$ i alle tilfeller", "$\\Delta l = 0$"],
      explanation: "Et halvt antall bølgelengder ekstra vei gir motfase: topp møter bunn. Et helt antall bølgelengder gir derimot forsterkning.",
    },
    {
      question: "Er lyd i luft en longitudinal eller en transversal bølge?",
      options: ["Longitudinal", "Transversal", "Begge samtidig", "Verken den ene eller den andre"],
      explanation: "Luftpartiklene svinger fram og tilbake langs utbredelsesretningen, i fortetninger og fortynninger. Det er derfor lyd også går gjennom væsker og gasser.",
    },
    {
      question: "Hvorfor registrerer seismografer på motsatt side av jorda P-bølger men ingen S-bølger?",
      options: ["S-bølger er transversale og går ikke gjennom den flytende ytre kjernen", "S-bølger går for sakte og dør ut lenge før de kommer helt fram til stasjonen", "P-bølger har større amplitude", "S-bølger reflekteres av jordoverflaten"],
      explanation: "Transversale bølger krever et medium som motstår skjærkrefter, og en væske gjør ikke det. S-bølgeskyggen er hovedbeviset for at den ytre kjernen er flytende.",
    },
    {
      question: "Lydnivået er $L = 10\\log(I/I_0)$. Hvor stor er $I_0$?",
      options: ["$1{,}0\\cdot10^{-12}\\ \\text{W/m}^2$", "$1{,}0\\cdot10^{-3}\\ \\text{W/m}^2$", "$1{,}0\\ \\text{W/m}^2$", "$1{,}0\\cdot10^{-6}\\ \\text{W/m}^2$"],
      explanation: "$I_0$ er høreterskelen, altså den svakeste lyden et normalt øre oppfatter ved 1000 Hz. Verdien hentes fra formelarket, og gir $L = 0$ dB ved $I = I_0$.",
    },
    {
      question: "Intensiteten dobles. Hvor mye øker lydnivået?",
      options: ["$3{,}0$ dB", "$10$ dB", "$6{,}0$ dB", "Det dobles"],
      explanation: "$\\Delta L = 10\\log 2 = 3{,}0$ dB. To like høyttalere gir altså bare 3 dB mer — desibelskalaen er logaritmisk, ikke lineær.",
    },
    {
      question: "En streng festet i begge ender har lengden $L$. Hvor lang er bølgelengden til grunntonen?",
      options: ["$2L$", "$L$", "$L/2$", "$4L$, altså fire ganger strenglengden"],
      explanation: "Endene må være knutepunkter, og grunntonen har én buk midt på. Strengen er da en halv bølgelengde, altså $\\lambda_1 = 2L$.",
    },
    {
      question: "Hvilke frekvenser kan en streng festet i begge ender svinge med?",
      options: ["Hele multipler av grunntonen: $f_1, 2f_1, 3f_1, \\ldots$", "Bare grunntonen", "Alle frekvenser", "Halve multipler av grunntonen: $f_1, 1{,}5f_1, 2f_1, \\ldots$"],
      explanation: "Kravet om knutepunkt i begge ender gir $\\lambda_n = 2L/n$, og dermed $f_n = nf_1$. Det er blandingen av harmoniske som gir instrumentet klang.",
    },
    {
      question: "Hvordan skrives Snells lov når du har farter i stedet for brytningsindekser?",
      options: ["$\\sin\\alpha_2/\\sin\\alpha_1 = v_2/v_1$", "$\\alpha_2/\\alpha_1 = v_2/v_1$", "$\\sin\\alpha_2/\\sin\\alpha_1 = v_1/v_2$", "$\\sin\\alpha_1\\cdot\\sin\\alpha_2 = v_1\\cdot v_2$"],
      explanation: "Sinusene forholder seg som fartene i de to mediene. Å bruke fartsforholdet direkte på vinklene er en klassisk feil.",
    },
    {
      question: "En bølge går inn i et lag med høyere fart. Hva skjer med vinkelen mot normalen?",
      options: ["Den blir større, altså bort fra normalen", "Den blir mindre, altså inn mot normalen til flaten", "Den er uendret", "Bølgen reflekteres alltid"],
      explanation: "Fra $\\sin\\alpha_2 = \\sin\\alpha_1\\cdot v_2/v_1$ ser du at $v_2 > v_1$ gir større sinus og dermed større vinkel. Strålen knekker bort fra normalen.",
    },
    {
      question: "Hvor måles vinklene i Snells lov fra?",
      options: ["Fra normalen til grenseflaten", "Fra selve grenseflaten", "Fra loddlinja uansett flatens retning", "Fra strålens startpunkt"],
      explanation: "Alle vinkler i brytningslovene måles mot normalen — den linja som står vinkelrett på grenseflaten i treffpunktet.",
    },
    {
      question: "En P-bølge kommer $10$ s før S-bølgen. Hva finner du av dette?",
      options: ["Avstanden til skjelvet", "Skjelvets styrke", "Skjelvets dybde alene", "Retningen til skjelvet"],
      explanation: "Begge bølgene har gått samme strekning med ulik fart, så $d(1/v_S - 1/v_P) = \\Delta t$ gir avstanden. Retningen krever målinger fra flere stasjoner.",
    },
    {
      question: "Hva skiller et gitters fargespredning fra en regnbues?",
      options: ["Gitteret bruker interferens, regnbuen dispersjon (brytning)", "Gitteret bruker brytning, regnbuen interferens", "Begge bruker interferens", "Begge bruker refleksjon"],
      explanation: "I gitteret gir betingelsen $d\\sin\\theta = n\\lambda$ hver bølgelengde sin retning gjennom interferens. I regnbuen brytes fargene ulikt fordi brytningsindeksen avhenger av bølgelengden.",
    },
    {
      question: "Ganglengdeforskjellen er $1{,}20$ m og bølgelengden $0{,}80$ m. Hva hører lytteren?",
      options: ["Utslettelse, fordi forholdet er $1{,}5$", "Forsterkning, fordi forholdet er over 1", "Ingenting kan avgjøres uten frekvensen", "Forsterkning, fordi forskjellen er positiv"],
      explanation: "$\\Delta l/\\lambda = 1{,}5 = 1 + \\tfrac12$, altså et halvt antall bølgelengder. Det gir motfase og utslettelse. Frekvensen er allerede brukt til å finne bølgelengden.",
    },
    {
      question: "Hva er amplitudens rolle for en bølge?",
      options: ["Den bestemmer energien, men ikke farten", "Den bestemmer farten bølgen brer seg med", "Den bestemmer frekvensen", "Den bestemmer bølgelengden"],
      explanation: "Farten kommer fra mediet, frekvensen fra kilden, og bølgelengden følger av $v = f\\lambda$. Amplituden avgjør hvor kraftig bølgen er, altså energien og intensiteten.",
    },
    {
      question: "Hva er sammenhengen mellom periode og frekvens?",
      options: ["$T = 1/f$", "$T = f$", "$T = 2\\pi f$", "$T = f/\\lambda$"],
      explanation: "Perioden er tida for én svingning, frekvensen antall svingninger per sekund — de er omvendte av hverandre.",
    },
    {
      question: "En kilde gir $86$ dB i $2{,}0$ m avstand. Hva er nivået i $4{,}0$ m?",
      options: ["$80$ dB", "$83$ dB", "$43$ dB", "$74$ dB"],
      explanation: "Dobbel avstand gir en firedel av intensiteten, altså $\\Delta L = -10\\log 4 = -6{,}0$ dB. Nivået blir $86 - 6 = 80$ dB — desibeltallet halveres ikke.",
    },
    {
      question: "Når finnes det en grensevinkel for en bølge på en laggrense?",
      options: ["Bare når farten er større i det laget bølgen går inn i", "Bare når farten er mindre i det laget bølgen går inn i", "Alltid, uansett fartsforhold", "Bare for transversale bølger"],
      explanation: "$\\sin\\alpha_c = v_1/v_2$ har løsning bare når $v_1 < v_2$. Ellers blir brøken større enn 1, og ligningen har ingen løsning.",
    },
    {
      question: "Hva er første steg når du skal avgjøre om to kilder gir forsterkning i et punkt?",
      options: ["Finne bølgelengden fra $\\lambda = v/f$", "Finne intensiteten i lyttepunktet", "Regne ut lydnivået i desibel", "Finne amplituden til hver bølge"],
      explanation: "Klassifiseringen krever forholdet $\\Delta l/\\lambda$, så bølgelengden må på plass først. Intensitet og desibel er en annen sjanger.",
    },
  ],
  'fys1001-6-2': [
    {
      question: "Hvor måles vinklene i Snells lov fra?",
      options: ["Fra normalen til grenseflaten", "Fra selve grenseflaten", "Fra loddlinja uansett flatens retning", "Fra den innkommende strålen"],
      explanation: "Normalen står vinkelrett på flaten i treffpunktet. Måler du mot flaten i stedet, får du komplementvinkelen, og alle svar blir feil.",
    },
    {
      question: "Lys går fra luft inn i glass. Hva skjer med vinkelen mot normalen?",
      options: ["Den blir mindre", "Den blir større", "Den er uendret", "Strålen blir alltid reflektert fullstendig"],
      explanation: "Fra $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ med $n_2 > n_1$ følger at $\\sin\\theta_2 < \\sin\\theta_1$. Strålen knekker mot normalen.",
    },
    {
      question: "Hva er lysfarten i et medium med brytningsindeks $n$?",
      options: ["$c = c_0/n$", "$c = c_0 n$", "$c = n/c_0$", "$c = c_0 - n$"],
      explanation: "Brytningsindeksen er definert som $n = c_0/c$, altså hvor mange ganger saktere lyset går i mediet. Snudd gir det $c = c_0/n$.",
    },
    {
      question: "Hva er uendret når lys går fra ett medium til et annet?",
      options: ["Frekvensen", "Bølgelengden", "Farten", "Både bølgelengden og farten"],
      explanation: "Frekvensen bestemmes av kilden, og like mange svingninger må komme ut av grenseflaten per sekund som det kommer inn. Farten endres til $c_0/n$, og da må bølgelengden endres tilsvarende.",
    },
    {
      question: "Når kan totalrefleksjon skje?",
      options: ["Bare når lyset går fra tett mot tynt medium", "Bare når lyset går fra tynt mot tett medium", "Ved alle grenseflater", "Bare når vinkelen er null"],
      explanation: "$\\sin\\theta_c = n_2/n_1$ har løsning bare når $n_1 > n_2$. Går lyset mot tettere medium, blir brøken over 1 og ingen vinkel oppfyller ligningen.",
    },
    {
      question: "Hva er grensevinkelen fra glass ($n = 1{,}52$) mot luft?",
      options: ["$41^\\circ$", "$49^\\circ$", "$33^\\circ$", "$56^\\circ$"],
      explanation: "$\\sin\\theta_c = 1{,}00/1{,}52 = 0{,}658$, altså $\\theta_c = 41^\\circ$. Svaret $49^\\circ$ er grensevinkelen for vann mot luft.",
    },
    {
      question: "Du regner ut en grensevinkel og får $\\sin\\theta_c = 1{,}33$. Hva betyr det?",
      options: ["At du har brukt formelen feil vei — det finnes ingen grensevinkel", "At grensevinkelen er $1{,}33$ radianer i stedet for grader", "At vinkelen er over $90^\\circ$", "At mediet er umulig tett"],
      explanation: "Ingen vinkel har sinus over 1. Verdien er signalet om at lyset går fra tynt mot tett medium, og da er totalrefleksjon fysisk umulig.",
    },
    {
      question: "Hva kreves for at symmetriargumentet i en glasskule skal gi full uttelling?",
      options: ["At du viser at trekanten $OAC$ er likebeint", "At du skriver «ved symmetri» før du oppgir svaret", "At du regner ut utvinkelen numerisk", "At du tegner en pen figur"],
      explanation: "Argumentet må inneholde at normalene går gjennom sentrum, at de to sidene er radier og trekanten derfor likebeint, og at grunnvinklene dermed er like. Uten disse leddene er symmetrien en påstand.",
    },
    {
      question: "Hva skyldes fargene i en regnbue?",
      options: ["Dispersjon: brytningsindeksen avhenger av bølgelengden", "Interferens mellom stråler fra mange ulike regndråper", "Refleksjon i skyene", "At sollys allerede er delt i farger"],
      explanation: "Blått brytes litt mer enn rødt fordi $n$ er større for kort bølgelengde. Gitterets fargespredning skyldes derimot interferens, der $\\lambda$ står i betingelsen $d\\sin\\theta = n\\lambda$.",
    },
    {
      question: "Hvorfor kan en optisk fiber lede lys rundt svinger?",
      options: ["Lyset totalreflekteres i kjerne–kappe-grensen", "Lyset brytes gradvis rundt svingen av selve kjernen", "Kappen reflekterer som et metallspeil", "Lyset går rett gjennom kappen og tilbake"],
      explanation: "Kjernen har høyere brytningsindeks enn kappen, og lys nær fiberens akse treffer grensen med vinkler over grensevinkelen. Bøyes fiberen for skarpt, faller vinkelen under grensevinkelen og lys lekker ut.",
    },
    {
      question: "Hvorfor ser et basseng grunnere ut enn det er?",
      options: ["Lyset fra bunnen brytes ved vannflaten", "Vannet virker som en lupe og forstørrer bunnen", "Lyset reflekteres i overflaten", "Vannet absorberer noe av lyset"],
      explanation: "Øyet forlenger de brutte strålene rett bakover og plasserer bildet høyere enn bunnen faktisk er. Effekten er sterkest når du ser skrått ned, fordi brytningen øker med innfallsvinkelen.",
    },
    {
      question: "Lys går gjennom en glassplate med parallelle flater. Hvordan er retningen ut?",
      options: ["Den samme som inn, bare sideforskjøvet", "Dreid mot normalen", "Dreid bort fra normalen", "Avhengig av platens tykkelse"],
      explanation: "Snells lov brukt ved begge flater gir $n_1\\sin\\theta_1 = n_{\\text{plate}}\\sin\\theta_2 = n_1\\sin\\theta_3$, så $\\theta_3 = \\theta_1$. Tykkelsen påvirker bare sideforskyvningen, ikke retningen.",
    },
    {
      question: "I et prisme med prismevinkel $A$ er de to indre vinklene $\\theta_2$ og $\\theta_3$. Hva gjelder?",
      options: ["$\\theta_2 + \\theta_3 = A$", "$\\theta_2 = \\theta_3$", "$\\theta_2 + \\theta_3 = 90^\\circ$", "$\\theta_2 - \\theta_3 = A$"],
      explanation: "Vinkelen mellom de to normalene er $180^\\circ - A$, og vinkelsummen i trekanten strålen danner med dem gir $\\theta_2 + \\theta_3 = A$.",
    },
    {
      question: "Blått og rødt lys treffer en glassflate med samme vinkel. Hvilken brytes mest?",
      options: ["Blått, fordi $n$ er større for kort bølgelengde", "Rødt, fordi rødt lys har den lengste bølgelengden", "De brytes like mye", "Det avhenger av innfallsvinkelen"],
      explanation: "I glass er $n_{\\text{blå}} \\approx 1{,}528$ mot $n_{\\text{rød}} \\approx 1{,}514$. Blått får dermed mindre vinkel mot normalen, altså sterkere brytning — det er dette som sprer hvitt lys i farger.",
    },
    {
      question: "Hva er første steg i arbeidsmetoden for en brytningsoppgave?",
      options: ["Tegne flaten, normalen og strålen, og merke vinklene", "Regne ut grensevinkelen", "Finne bølgelengden i mediet", "Slå opp brytningsindeksen i tabellen"],
      explanation: "Figuren avgjør hvilken vinkel som er hvilken og om strålen skal knekke mot eller bort fra normalen. Uten den er det lett å sette inn feil vinkel i Snells lov.",
    },
  ],
  'fys1001-6-3': [
    {
      question: "Hva betyr det at bildeavstanden $b$ blir negativ?",
      options: ["Bildet er virtuelt og ligger på samme side", "Du har regnet feil et sted i utregningen", "Bildet er reelt men omvendt", "Linsa er en spredelinse"],
      explanation: "Negativ $b$ er et gyldig svar: strålene møtes bare når de forlenges bakover. Bildet er da virtuelt og rettvendt, og kan ikke fanges på en skjerm.",
    },
    {
      question: "En samlelinse har $f = 12$ cm og objektet står 20 cm fra linsa. Hvor er bildet?",
      options: ["30 cm på motsatt side", "7{,}5 cm på motsatt side", "30 cm på samme side", "8 cm på motsatt side"],
      explanation: "$1/b = 1/12 - 1/20 = 2/60$, altså $b = 30$ cm. Positiv $b$ betyr motsatt side, altså et reelt bilde. Svaret $7{,}5$ cm kommer av å legge sammen i stedet for å trekke fra.",
    },
    {
      question: "Hva kjennetegner et virtuelt bilde?",
      options: ["Det kan ikke fanges på en skjerm", "Det er alltid omvendt", "Det er alltid forminsket", "Det kan bare dannes av et speil"],
      explanation: "Ingen lys går faktisk gjennom bildepunktet — strålene ser bare ut til å komme derfra. Virtuelle bilder fra en enkel linse er alltid rettvendte.",
    },
    {
      question: "Når virker en samlelinse som en lupe?",
      options: ["Når objektet står innenfor brennvidden", "Når objektet står i brennpunktet", "Når objektet står utenfor $2f$", "Når linsa holdes helt inntil selve objektet"],
      explanation: "Med $a < f$ blir $1/f - 1/a$ negativ, altså $b < 0$, og bildet blir virtuelt, rettvendt og forstørret. Det er dette lupen utnytter.",
    },
    {
      question: "Hvilket bilde gir en spredelinse?",
      options: ["Alltid virtuelt, rettvendt og forminsket", "Alltid reelt og omvendt", "Reelt hvis objektet står utenfor $2f$", "Virtuelt bare når objektet står nær linsa"],
      explanation: "Med $f < 0$ og $a > 0$ er $1/b = 1/f - 1/a$ alltid negativ, så bildet er alltid virtuelt. Og $|b| < a$ gir alltid $|m| < 1$.",
    },
    {
      question: "En linse har brennvidde 25 cm. Hva er styrken i dioptrier?",
      options: ["$+4{,}0$ dpt", "$+0{,}04$ dpt", "$+25$ dpt", "$+2{,}5$ dpt"],
      explanation: "$D = 1/f$ med $f$ i **meter**: $1/0{,}25 = 4{,}0$ dpt. Svaret $0{,}04$ kommer av å sette inn 25 cm uten å gjøre om til meter.",
    },
    {
      question: "Hvilken linse trenger en nærsynt person?",
      options: ["En spredelinse med negativ styrke", "En samlelinse med positiv styrke", "En linse med styrke null", "To samlelinser koblet etter hverandre"],
      explanation: "Et nærsynt øye bryter for kraftig, så korreksjonen må svekke brytningen. Langsynthet krever motsatt: samlelinse med positiv styrke.",
    },
    {
      question: "Hva er samlet styrke av to tynne linser på $+3{,}0$ dpt og $-1{,}0$ dpt i kontakt?",
      options: ["$+2{,}0$ dpt", "$-3{,}0$ dpt", "$+4{,}0$ dpt", "$+1{,}5$ dpt"],
      explanation: "Styrker legges sammen: $D = D_1 + D_2 = +2{,}0$ dpt, altså $f = 0{,}50$ m. Brennvidder kan ikke legges sammen på denne måten.",
    },
    {
      question: "Hva er senterstrålen i en strålekonstruksjon?",
      options: ["Strålen gjennom linsemidten, som går rett fram", "Strålen som går gjennom brennpunktet på framsiden", "Strålen parallelt med aksen", "Strålen som reflekteres i linsa"],
      explanation: "Senterstrålen skifter ikke retning, og er derfor den raskeste av de tre standardstrålene å tegne. Parallellstrålen går gjennom brennpunktet på baksiden, og brennpunktstrålen går ut parallelt.",
    },
    {
      question: "Hva er akkomodasjon?",
      options: ["At øyet endrer brennvidden for å fokusere", "At øyet endrer avstanden fra linsen til netthinnen", "At pupillen endrer størrelse", "At hjernen snur bildet"],
      explanation: "Bildeavstanden i øyet er fast, så øyet må endre $f$ ved å endre linsens krumning. Med alderen blir linsen stivere, og nærpunktet flytter seg utover.",
    },
    {
      question: "Hvor står objektet når en samlelinse gir et reelt, omvendt og forstørret bilde?",
      options: ["Mellom $f$ og $2f$", "Utenfor $2f$", "Innenfor $f$", "Nøyaktig i brennpunktet"],
      explanation: "Utenfor $2f$ blir bildet forminsket, innenfor $f$ blir det virtuelt, og i brennpunktet dannes ikke noe bilde — strålene går ut parallelt.",
    },
    {
      question: "Et objekt står i $a = 2f$ foran en samlelinse. Hva blir forstørrelsen?",
      options: ["$1{,}0$ — bildet er like stort, men omvendt", "$2{,}0$", "$0{,}50$", "$-1{,}0$"],
      explanation: "$1/b = 1/f - 1/(2f) = 1/(2f)$, altså $b = 2f = a$ og $m = 1{,}0$. Positiv $m$ betyr reelt og omvendt bilde.",
    },
    {
      question: "Hva gir speilformelen for et flatt speil?",
      options: ["$b = -a$: bildet ligger like langt bak speilet", "$b = a$: bildet ligger like langt foran speilflaten", "$b = 0$: bildet ligger i speilflaten", "$b = 2a$"],
      explanation: "Et flatt speil har $f \\to \\infty$, så $1/a + 1/b = 0$. Negativ $b$ bekrefter at bildet er virtuelt, og $|b| = a$ at det ligger symmetrisk om speilet.",
    },
    {
      question: "Hva sammenligner løsningsforslagene i en linseoppgave?",
      options: ["Om strålekonstruksjonen og regningen gir samme bildetype", "Om du har brukt kalkulator", "Om figuren er pent tegnet", "Om du har oppgitt svaret i millimeter"],
      explanation: "Konstruksjonen viser om bildet skal være reelt eller virtuelt, rettvendt eller omvendt. Motsier den regningen, ligger det en fortegnsfeil et sted — og det trekker selv om ett av svarene er riktig.",
    },
    {
      question: "En person har nærpunkt 50 cm og vil lese på 25 cm. Hvilken styrke trengs?",
      options: ["$+2{,}0$ dpt", "$-2{,}0$ dpt", "$+4{,}0$ dpt", "$+6{,}0$ dpt"],
      explanation: "Brillen skal lage et virtuelt bilde i 50 cm: $1/f = 1/0{,}25 + 1/(-0{,}50) = 4{,}0 - 2{,}0 = 2{,}0$ m$^{-1}$. Fortegnet på $b$ er det som gjør at svaret ikke blir $+6$ dpt.",
    },
  ],
  'fys1001-7-1': [
    {
      question: "Hvordan henger energien til ett foton sammen med bølgelengden til strålingen?",
      options: ["$E_f = hc/\\lambda$ — kort bølgelengde gir energirikt foton", "$E_f = h\\lambda/c$ — lang bølgelengde gir energirikt foton", "$E_f = hc\\lambda$ — energien vokser proporsjonalt med bølgelengden", "$E_f = \\lambda/(hc)$ — energien er uavhengig av Plancks konstant"],
      explanation: "Fra $E_f = hf$ og $c = f\\lambda$ følger $E_f = hc/\\lambda$. Energien er omvendt proporsjonal med bølgelengden: blått lys (kort $\\lambda$) har mer energirike fotoner enn rødt.",
    },
    {
      question: "Gult lys har bølgelengden 590 nm. Hva er energien til ett foton, uttrykt i elektronvolt?",
      options: ["2,1 eV", "0,48 eV — man deler bølgelengden på 1240", "3,4 eV, som er energinivået $E_2$ i hydrogen", "$3{,}4\\cdot10^{-19}$ eV, altså samme tall som i joule"],
      explanation: "$E_f = 1240/590$ eV $= 2{,}1$ eV. Snarveien $E_f[\\text{eV}] = 1240/\\lambda[\\text{nm}]$ krever bølgelengden i nanometer. Å dele bølgelengden på 1240 snur brøken, og eV og joule er to forskjellige enheter.",
    },
    {
      question: "Et foton har energien $4{,}8\\cdot10^{-19}$ J. Hvor mye er dette i elektronvolt?",
      options: ["3,0 eV", "$7{,}7\\cdot10^{-38}$ eV, siden man ganger med elementærladningen", "0,33 eV, siden man deler elektronvolt på joule-verdien", "$4{,}8\\cdot10^{-19}$ eV — joule og elektronvolt har samme tallverdi"],
      explanation: "$E = 4{,}8\\cdot10^{-19}/1{,}602\\cdot10^{-19}\\ \\text{eV} = 3{,}0$ eV. Fra joule til elektronvolt deler du på $1{,}602\\cdot10^{-19}$; motsatt vei ganger du.",
    },
    {
      question: "Et atom har nivåene $E_1=-6{,}0$ eV, $E_2=-2{,}5$ eV og $E_3=-1{,}0$ eV. Hvilken fotonenergi sendes ut ved overgangen fra nivå 3 til nivå 2?",
      options: ["1,5 eV", "3,5 eV, som er differansen mellom nivå 2 og nivå 1", "$-1{,}5$ eV, fordi begge nivåene er negative størrelser", "5,0 eV, altså summen av tallverdiene til de to nivåene"],
      explanation: "$E_f = E_3 - E_2 = -1{,}0 - (-2{,}5) = 1{,}5$ eV. Differansen blir positiv fordi nivå 3 ligger høyest; å legge sammen nivåene eller bytte om rekkefølgen er de to vanligste fortegnsfeilene.",
    },
    {
      question: "Hvorfor sender en tynn, glødende gass ut bare noen få bestemte bølgelengder?",
      options: ["Fordi elektronene bare kan ha bestemte energinivåer, slik at bare bestemte energidifferanser — og dermed bare bestemte fotonenergier — er mulige", "Fordi gassen er så tynn at bare de sterkeste fotonene slipper ut gjennom gassen", "Fordi atomene i en gass beveger seg raskt og dermed rekker å sende ut bare noen få av de mulige fargene", "Fordi lyset fra gassen brytes i atomene på samme måte som sollys brytes i en regndråpe"],
      explanation: "Diskrete nivåer gir diskrete differanser gir diskrete bølgelengder — det er hele argumentet, og alle tre leddene bør stå i et eksamenssvar. Farten til atomene og brytning har ingenting med linjene å gjøre.",
    },
    {
      question: "Hva kjennetegner spekteret fra en glødende metalltråd, sammenlignet med spekteret fra en tynn gass?",
      options: ["Det er kontinuerlig: atomene ligger så tett at nivåene smøres ut til brede bånd", "Det er et linjespekter med flere linjer, fordi metallet inneholder flere grunnstoffer", "Det er et absorpsjonsspekter med mørke linjer på lys bakgrunn", "Det inneholder bare én bølgelengde, bestemt av temperaturen i tråden"],
      explanation: "I faste stoffer overlapper nivåene til brede bånd, så nesten alle energidifferanser forekommer og spekteret blir kontinuerlig. Linjespekter krever frie atomer med veldefinerte nivåer.",
    },
    {
      question: "Hvorfor ligger de mørke linjene i solas spekter på nøyaktig samme bølgelengder som de lyse linjene fra den samme gassen i et laboratorium?",
      options: ["Fordi absorpsjon og emisjon bruker de samme energidifferansene mellom nivåene, bare i hver sin retning", "Fordi mørke og lyse linjer alltid opptrer parvis i ethvert spekter, uansett hvilken gass det gjelder", "Fordi solas gasslag er kaldere, og kalde gasser sender ut lys med litt lengre bølgelengde enn varme", "Fordi de mørke linjene skyldes at lyset brytes i gassen og bøyes bort fra synsretningen vår"],
      explanation: "Det er de samme nivåparene som virker begge veier: i emisjon faller elektronet ned og sender ut fotonet, i absorpsjon plukkes akkurat det fotonet ut av det kontinuerlige spekteret.",
    },
    {
      question: "Hydrogen har ioniseringsenergi 13,6 eV fra grunntilstanden. Hvilken betingelse må bølgelengden oppfylle for at et foton skal kunne ionisere atomet?",
      options: ["$\\lambda \\le 91$ nm", "$\\lambda \\ge 91$ nm, siden lang bølgelengde betyr mye energi", "$\\lambda \\le 13{,}6$ nm, altså tallverdien av ioniseringsenergien", "Ingen bølgelengde virker; ionisering krever at atomet treffes av en partikkel"],
      explanation: "$\\lambda_{\\text{maks}} = hc/W = 1240/13{,}6\\ \\text{nm} = 91$ nm er en ØVRE grense: kortere bølgelengde har mer energi per foton og virker, lengre virker ikke.",
    },
    {
      question: "En metallflate med løsrivingsarbeid 4,2 eV bestråles med lys på 4,0 eV per foton. Hva skjer hvis du dobler lysstyrken?",
      options: ["Fortsatt ingenting — hvert foton har for lav energi, og løsrivningen skjer ett foton mot ett elektron", "Elektroner løsrives, fordi to fotoner på 4,0 eV til sammen har nok energi til å rive løs ett elektron", "Elektroner løsrives, men bare halvparten så mange som ved kortere bølgelengde ville gitt", "Elektroner løsrives etter en liten forsinkelse, mens metallet samler opp nok energi"],
      explanation: "Under grensefrekvensen hjelper ikke intensitet. Fotonene virker enkeltvis, energien lagres ikke opp, og to fotoner treffer praktisk talt aldri samme elektron samtidig.",
    },
    {
      question: "En metallflate har løsrivingsarbeid 2,0 eV og bestråles med fotoner på 3,1 eV. Hva er den største kinetiske energien til de løsrevne elektronene?",
      options: ["1,1 eV", "5,1 eV, altså summen av fotonenergien og løsrivingsarbeidet", "3,1 eV — hele fotonenergien går til bevegelsesenergi", "0,65 eV, siden elektronet bare får en brøkdel av overskuddet"],
      explanation: "$E_k = hf - W = 3{,}1 - 2{,}0 = 1{,}1$ eV. Løsrivingsarbeidet trekkes fra; det legges aldri til, og det er ikke slik at bare deler av overskuddet blir bevegelsesenergi.",
    },
    {
      question: "Hva er grensefrekvensen $f_0$ i den fotoelektriske effekten?",
      options: ["Den laveste frekvensen som gir løsrivning, gitt ved $f_0 = W/h$", "Den høyeste frekvensen metallet tåler før overflaten smelter og elektronene fordamper", "Frekvensen der elektronene får akkurat like stor energi som fotonene som treffer", "Den frekvensen der antallet løsrevne elektroner per sekund er størst"],
      explanation: "$f_0$ følger av $E_k = 0$ i $E_k = hf - W$. Under $f_0$ løsrives ingen elektroner uansett intensitet; over $f_0$ vokser $E_k$ lineært med frekvensen.",
    },
    {
      question: "Hva bestemmer den minste bølgelengden $\\lambda_{\\text{min}}$ i strålingen fra et røntgenrør?",
      options: ["Bare akselerasjonsspenningen, gjennom $\\lambda_{\\text{min}} = hc/(eU)$", "Anodematerialet, siden energinivåene i anoden setter grensen for fotonenergien", "Strømmen gjennom røret, fordi flere elektroner gir mer energirike fotoner", "Både spenningen og strømmen, siden effekten er produktet av dem"],
      explanation: "Grensen svarer til at hele elektronets energi $eU$ går til ett foton, og avhenger derfor bare av spenningen. Strømmen styrer hvor mange fotoner du får, ikke hvor energirike de kan bli.",
    },
    {
      question: "Et røntgenrør drives med 50 kV. Hva er den største fotonenergien røret kan gi?",
      options: ["50 keV", "50 J, siden spenningen ganges med elementærladningen", "$50/1240$ keV, fra sammenhengen mellom energi og bølgelengde", "Den kan ikke bestemmes uten å vite hvilket materiale anoden er laget av"],
      explanation: "Et elektron akselerert gjennom $U$ får energien $eU$, som i elektronvolt har samme tallverdi som spenningen i volt: 50 kV gir maksimalt 50 keV per foton.",
    },
    {
      question: "Hva er forskjellen på bremsestråling og karakteristisk stråling fra et røntgenrør?",
      options: ["Bremsestråling er kontinuerlig og skyldes oppbremsing av elektronene, mens karakteristisk stråling er skarpe linjer fra overganger mellom energinivåer i anodeatomene", "Bremsestråling er skarpe linjer fra anoden, mens karakteristisk stråling er den kontinuerlige bakgrunnen fra glødetråden", "Bremsestråling oppstår i glødetråden, mens karakteristisk stråling oppstår i luften rundt røret", "De to er navn på det samme fenomenet, sett fra henholdsvis elektronets og fotonets side"],
      explanation: "De to delene av spekteret har hver sin mekanisme: oppbremsing gir alle energier opp til $eU$, mens nivåovergangene i anodematerialet gir noen få skarpe linjer.",
    },
    {
      question: "Hva skjer med avstanden mellom energinivåene $E_n = -B/n^2$ når $n$ øker?",
      options: ["Nivåene ligger tettere og tettere og nærmer seg 0", "Nivåene ligger lenger og lenger fra hverandre, og energien vokser uten grense", "Avstanden mellom nabonivåene er den samme hele veien, som trinn i en trapp", "Nivåene blir mer og mer negative jo høyere $n$ er"],
      explanation: "$-B/n^2$ nærmer seg 0 nedenfra, så avstanden mellom nabonivåene krymper. Det er derfor spektrallinjene klumper seg sammen mot en grense ved korte bølgelengder.",
    },
  ],
  'fys1001-7-2': [
    {
      question: "Hva forteller de to tallene i nuklidesymbolet $^{A}_{Z}\\text{X}$?",
      options: ["$A$ er antall nukleoner, $Z$ er antall protoner", "$A$ er antall nøytroner, $Z$ er antall nukleoner i kjernen", "$A$ er kjernens masse i kilogram, $Z$ er kjernens ladning i coulomb", "$A$ er antall protoner, $Z$ er antall nøytroner — motsatt av hverandre"],
      explanation: "Nukleontallet $A$ står øverst og teller protoner pluss nøytroner; ladningstallet $Z$ står nederst og teller protoner. Antall nøytroner er $N = A - Z$.",
    },
    {
      question: "Hvor mange nøytroner har $^{238}_{92}\\text{U}$?",
      options: ["146", "92, siden antall nøytroner alltid er lik antall protoner", "238, siden nukleontallet teller nøytronene i kjernen", "330, altså summen av de to tallene i symbolet"],
      explanation: "$N = A - Z = 238 - 92 = 146$. Nukleontallet teller protoner OG nøytroner, og de to tallene skal aldri legges sammen.",
    },
    {
      question: "Hva skjer med nukleontall og ladningstall ved alfahenfall?",
      options: ["$A$ synker med 4 og $Z$ synker med 2", "$A$ synker med 2 og $Z$ synker med 4, som svarer til to protoner ut", "$A$ synker med 4 mens $Z$ er uendret, siden alfapartikkelen er nøytral", "$A$ er uendret og $Z$ synker med 2, som ved utsending av to positroner"],
      explanation: "Alfapartikkelen er en heliumkjerne $^{4}_{2}\\text{He}$ med to protoner og to nøytroner, så kjernen mister 4 nukleoner og 2 protoner.",
    },
    {
      question: "Hva skjer med nukleontall og ladningstall ved betaminus-henfall?",
      options: ["$A$ er uendret og $Z$ øker med 1", "$A$ er uendret og $Z$ synker med 1, siden et elektron sendes ut av kjernen", "$A$ synker med 1 og $Z$ øker med 1, fordi et nøytron forsvinner fra kjernen", "Både $A$ og $Z$ synker med 1, som ved utsending av et nøytron"],
      explanation: "Et nøytron blir til et proton: antall nukleoner er det samme, men ett nøytron er byttet ut med ett proton. Elektronet har ladningstall $-1$, og derfor må datterkjernen ha ett proton mer for at regnskapet skal gå opp.",
    },
    {
      question: "En reaksjon er $^{214}_{83}\\text{Bi} \\rightarrow\\ ^{214}_{84}\\text{Po} + \\text{X}$. Hva er X?",
      options: ["Et elektron, $^{\\ 0}_{-1}\\text{e}$ (betaminus-henfall)", "En alfapartikkel, $^{4}_{2}\\text{He}$, siden ladningstallet endrer seg", "Et nøytron, $^{1}_{0}\\text{n}$, siden nukleontallet er uendret", "Et gammafoton, siden nukleontallet er det samme på begge sider"],
      explanation: "$A$: $214 - 214 = 0$. $Z$: $83 - 84 = -1$. En partikkel med $A = 0$ og $Z = -1$ er et elektron, altså betaminus (med et antinøytrino i tillegg).",
    },
    {
      question: "Hvilket nukleontall og ladningstall har betapartikkelen som skrives inn i reaksjonsligningen?",
      options: ["$A = 0$ og $Z = -1$", "$A = 1$ og $Z = -1$, siden elektronet er en partikkel og teller som ett nukleon", "$A = 0$ og $Z = +1$, som gir ladningstallet til et positron", "$A = 4$ og $Z = 2$, som for alle utsendte kjernepartikler"],
      explanation: "Elektronet er ikke et nukleon, så $A = 0$; ladningen er $-e$, så $Z = -1$. Å gi elektronet $A = 1$ er en klassisk feil som sprekker nukleontallregnskapet.",
    },
    {
      question: "Hva er riktig om antinøytrinoet i et betaminus-henfall?",
      options: ["Det har $A = 0$ og $Z = 0$ og påvirker derfor ikke balansen, men hører med i ligningen", "Det har $A = 0$ og $Z = -1$ og må derfor telles med i ladningsregnskapet", "Det kan sløyfes helt fra ligningen, siden det verken har masse eller energi", "Det erstatter elektronet i ligninger der datterkjernen er tyngre enn morkjernen"],
      explanation: "Antinøytrinoet er uladd og nesten masseløst, så balansen går opp uten det — men det bærer bort energi, og det skal skrives med eller kommenteres.",
    },
    {
      question: "Hvordan kjenner du igjen et gammahenfall i en reaksjonsligning?",
      options: ["Verken $A$ eller $Z$ endres; kjernen går fra en eksitert tilstand til grunntilstanden", "$A$ er uendret mens $Z$ endres med 1, som ved de andre henfallstypene", "$A$ synker med 4, men $Z$ står stille fordi fotonet er uladd", "Ladningstallet dobles, siden gammastråling er den mest energirike strålingen"],
      explanation: "Gammafotonet har $A = 0$ og $Z = 0$, så kjernen er det samme grunnstoffet med det samme nukleontallet — bare med lavere energi.",
    },
    {
      question: "En henfallskjede går fra $^{232}_{90}\\text{Th}$ til $^{208}_{82}\\text{Pb}$. Hvor mange alfahenfall inneholder kjeden?",
      options: ["6", "24, altså hele forskjellen i nukleontall mellom start og slutt", "8, siden ladningstallet har falt med 8 gjennom kjeden", "4, som er antallet betahenfall i den samme kjeden"],
      explanation: "Bare alfahenfall endrer nukleontallet, og hvert av dem tar 4: $232 - 4n_\\alpha = 208$ gir $n_\\alpha = 6$. Ladningstallet krever i tillegg 4 betaminus-henfall.",
    },
    {
      question: "Hvorfor kan antall alfahenfall i en kjede bestemmes fra nukleontallet alene?",
      options: ["Fordi betahenfall ikke endrer nukleontallet i det hele tatt", "Fordi alfa- og betahenfall alltid forekommer like mange ganger i en kjede", "Fordi alfahenfall endrer nukleontallet med 2 og betahenfall med 2 i motsatt retning", "Fordi nukleontallet bare er tilnærmet bevart, mens ladningstallet er eksakt bevart"],
      explanation: "Betaminus flytter bare et nøytron over i et proton, så $A$ står stille. Dermed skyldes hele fallet i $A$ alfahenfallene, og du kan løse for $n_\\alpha$ først.",
    },
    {
      question: "I fisjonen $^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\rightarrow\\ ^{144}_{56}\\text{Ba} + ^{89}_{36}\\text{Kr} + k\\,^{1}_{0}\\text{n}$ — hva er $k$?",
      options: ["3", "2, siden fisjon av uran alltid frigjør to nøytroner", "1, siden det ene nøytronet som gikk inn, kommer ut igjen", "0, siden begge fragmentene beholder alle nukleonene"],
      explanation: "Venstre side har $A = 235 + 1 = 236$, fragmentene har $144 + 89 = 233$, så $k = 3$. Husk å telle med nøytronet som går inn fra venstre.",
    },
    {
      question: "Hvorfor er de frie nøytronene fra en fisjon avgjørende i en reaktor?",
      options: ["De kan spalte nye urankjerner, slik at reaksjonen holder seg selv i gang som en kjedereaksjon", "De bærer bort mesteparten av energien, som er det reaktoren skal utnytte", "De gjør fragmentene stabile, slik at reaktoren ikke produserer radioaktivt avfall", "De bremser de andre fisjonene, slik at reaktoren ikke går varm"],
      explanation: "Hver spalting bruker ett nøytron og frigjør typisk 2–3, og det er dette overskuddet som gjør kjedereaksjonen mulig. Reaktoren styres ved å fange opp akkurat nok nøytroner.",
    },
    {
      question: "Hva er riktig om fusjonsreaksjonen $^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\rightarrow\\ ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n}$?",
      options: ["Både nukleontall og ladningstall balanserer: $5 = 5$ og $2 = 2$", "Nukleontallet balanserer, men ladningstallet gjør det ikke, siden nøytronet mangler ladning", "Reaksjonen bryter bevaringsreglene, og derfor må den skje ved ekstremt høye temperaturer", "Ladningstallet balanserer bare hvis man regner med elektronene i hydrogenatomene"],
      explanation: "$A$: $2 + 3 = 4 + 1$ ✓. $Z$: $1 + 1 = 2 + 0$ ✓. De høye temperaturene trengs fordi de to positive kjernene frastøter hverandre, ikke fordi noen bevaringsregel utfordres.",
    },
    {
      question: "Hva er to isotoper av hverandre?",
      options: ["To nuklider med samme antall protoner, men ulikt antall nøytroner", "To nuklider med samme nukleontall, men ulikt antall protoner", "To kjerner av samme nuklide, der den ene er eksitert og den andre er i grunntilstanden", "To grunnstoffer som ligger ved siden av hverandre i periodesystemet"],
      explanation: "Samme $Z$ betyr samme grunnstoff; ulikt $N$ gir ulikt $A$. Karbon-12 og karbon-14 er kjemisk like, men kjernefysisk svært forskjellige.",
    },
    {
      question: "En lett kjerne har klart flere nøytroner enn protoner. Hvilken henfallstype er mest sannsynlig?",
      options: ["Betaminus, som gjør et nøytron om til et proton", "Betapluss, som gjør et proton om til et nøytron og retter opp overskuddet", "Alfa, som fjerner to nøytroner og to protoner og dermed senker nukleontallet", "Gamma, siden nøytronoverskudd bare er et energioverskudd i kjernen"],
      explanation: "Nøytronoverskudd rettes opp ved betaminus: $N$ synker med 1 og $Z$ øker med 1, slik at forholdet $N/Z$ nærmer seg stabilitetsbåndet. Betapluss ville forsterket ubalansen.",
    },
  ],
  'fys1001-7-3': [
    {
      question: "Hva betyr halveringstiden til en nuklide?",
      options: ["Tiden det tar før halvparten av kjernene i prøven har henfalt", "Tiden det tar før hele prøven har henfalt, altså før aktiviteten er null", "Halvparten av den tiden det tar før prøven er ferdig utbrent og ufarlig", "Tiden mellom to henfall i en prøve, i gjennomsnitt over hele prøven"],
      explanation: "Halveringstiden er tiden til halv verdi, og den er den samme uansett hvor på kurven du starter. En prøve blir aldri «tom» — det finnes ingen tid til null.",
    },
    {
      question: "En prøve har 4,0 mg av en nuklide med halveringstid 5,0 timer. Hvor mye er igjen etter 15 timer?",
      options: ["0,50 mg", "1,3 mg, siden 15 timer er tre ganger så lang tid og mengden derfor deles på tre", "0 mg, siden prøven har rukket å henfalle helt i løpet av tre halveringstider", "2,0 mg, siden halveringen bare skjer én gang uansett hvor lang tid som går"],
      explanation: "$15/5{,}0 = 3$ halveringstider, så $4{,}0\\ \\text{mg}\\cdot(1/2)^3 = 4{,}0/8 = 0{,}50$ mg. Henfallet er eksponentielt, ikke lineært, og prøven når aldri null.",
    },
    {
      question: "Hvilken størrelse følger IKKE den samme halveringstiden som antall kjerner i prøven?",
      options: ["Prøvens totale masse, siden datterkjernene blir liggende igjen i prøven", "Massen av den radioaktive nukliden i prøven", "Aktiviteten til prøven", "Antall gjenværende kjerner av nukliden"],
      explanation: "Masse av nukliden og aktivitet er begge proporsjonale med antall gjenværende kjerner og avtar med samme halveringstid. Prøvens totale masse er nesten uendret, fordi datterkjernene fortsatt ligger der.",
    },
    {
      question: "Hvordan leser du halveringstiden av en graf som viser aktivitet mot tid?",
      options: ["Finn tiden det tar fra en verdi til halvparten av den verdien, og marker avlesningen på grafen", "Finn tiden der kurven ser ut til å nå null, og halver den tiden", "Les av stigningstallet til kurven ved $t = 0$, og ta den omvendte verdien", "Finn tiden der kurven er brattest, siden det er der halvparten av kjernene henfaller"],
      explanation: "Avlesningen gjøres fra en verdi til halvparten av den verdien, og hjelpelinjene skal tegnes inn. «Tiden til null» er den dyreste avlesningsfeilen i emnet — en eksponentiell kurve når aldri null.",
    },
    {
      question: "Hva er sammenhengen mellom henfallskonstanten $\\lambda$ og halveringstiden?",
      options: ["$\\lambda = \\ln 2/t_{1/2}$", "$\\lambda = 1/t_{1/2}$, siden konstanten er den omvendte av halveringstiden", "$\\lambda = t_{1/2}/\\ln 2$, altså middellevetiden til nukliden", "$\\lambda = 2/t_{1/2}$, siden halvparten forsvinner per halveringstid"],
      explanation: "Faktoren $\\ln 2 \\approx 0{,}693$ må med. Størrelsen $1/\\lambda$ er middellevetiden $\\tau$, som er omtrent 1,44 ganger halveringstiden — en klassisk forveksling.",
    },
    {
      question: "Hva er aktiviteten til en prøve?",
      options: ["Antall henfall per sekund, $A = \\lambda N$, målt i becquerel", "Energien prøven avgir per sekund, målt i watt per kilogram prøve", "Andelen av kjernene som er henfalt, målt som et prosenttall", "Antall kjerner som er igjen i prøven på et gitt tidspunkt"],
      explanation: "Aktivitet er henfall per sekund og måles i becquerel: 1 Bq $= 1\\ \\text{s}^{-1}$. Energi per sekund er effekt, og antall gjenværende kjerner er $N$, ikke $A$.",
    },
    {
      question: "To prøver inneholder samme nuklide, men prøve 2 har dobbelt så mange kjerner som prøve 1. Hva gjelder?",
      options: ["Prøve 2 har dobbelt så høy aktivitet, men samme halveringstid", "Prøve 2 har dobbelt så høy aktivitet og dobbelt så lang halveringstid", "Prøve 2 har samme aktivitet, men halv halveringstid", "Begge har samme aktivitet og samme halveringstid, siden nukliden er den samme"],
      explanation: "$A = \\lambda N$ er proporsjonal med antall kjerner, så aktiviteten dobles. Halveringstiden er en egenskap ved nukliden og påvirkes ikke av prøvestørrelse, temperatur eller kjemisk binding.",
    },
    {
      question: "En prøve har aktiviteten 800 kBq og halveringstiden 4,0 døgn. Hva er aktiviteten etter 8,0 døgn?",
      options: ["200 kBq", "400 kBq, siden aktiviteten halveres én gang i løpet av perioden", "100 kBq, som svarer til tre halveringstider på 8,0 døgn", "0 kBq, siden to hele halveringstider har gått"],
      explanation: "$8{,}0/4{,}0 = 2$ halveringstider gir $800\\ \\text{kBq}/4 = 200$ kBq. Én halvering ville gitt 400 kBq, tre ville gitt 100 kBq.",
    },
    {
      question: "Du skal regne ut aktiviteten i becquerel fra halveringstiden. Hvilken enhet må halveringstiden ha?",
      options: ["Sekunder, siden becquerel er henfall per sekund", "Døgn, som er den vanligste enheten i tabellverket", "Samme enhet som tiden $t$ i oppgaven, uansett hvilken det er", "Enheten er likegyldig, siden den forkortes bort i $\\lambda = \\ln 2/t_{1/2}$"],
      explanation: "$\\lambda$ må komme ut i $\\text{s}^{-1}$ for at $A = \\lambda N$ skal gi becquerel. I eksponenten $t/t_{1/2}$ er det derimot nok at de to tidene har samme enhet.",
    },
    {
      question: "En prøve er sunket til 25 % av opprinnelig aktivitet. Hvor mange halveringstider har gått?",
      options: ["2", "4, siden 25 % svarer til en fjerdedel og hver halvering fjerner en fjerdedel", "1, siden aktiviteten er redusert i forhold til utgangspunktet", "3, siden $1/8$ er nærmeste brøk under 25 %"],
      explanation: "$25\\ \\% = 1/4 = (1/2)^2$, altså to halveringstider. Fire halveringstider gir $1/16 = 6{,}25\\ \\%$.",
    },
    {
      question: "Hvordan finner du tiden $t$ når du kjenner forholdet $N/N_0$ og halveringstiden?",
      options: ["$t = t_{1/2}\\cdot\\ln(N_0/N)/\\ln 2$", "$t = t_{1/2}\\cdot N_0/N$, siden tiden er proporsjonal med forholdet mellom de to", "$t = t_{1/2}\\cdot\\ln(N/N_0)$, uten å dele på noe", "$t = t_{1/2}/\\ln(N_0/N)$, siden logaritmen står i nevneren"],
      explanation: "Tiden står i eksponenten, så logaritmen må fram. Formen med $\\ln(N_0/N)$ i telleren gir alltid et positivt svar og er den enkleste å huske.",
    },
    {
      question: "Hva er massesvinnet $\\Delta m$ i en kjernereaksjon?",
      options: ["Samlet masse før reaksjonen minus samlet masse etter", "Massen til den utsendte partikkelen, for eksempel alfapartikkelen", "Differansen mellom nukleontallene på de to sidene av reaksjonsligningen", "Massen som er blitt til stråling og derfor forsvunnet ut av regnskapet"],
      explanation: "$\\Delta m$ er venstre side minus høyre side. Nukleontallene balanserer alltid eksakt — det er *massene* som ikke gjør det, og differansen kommer ut som energi.",
    },
    {
      question: "Et alfahenfall har massesvinn 0,0055 u. Hvor mye energi frigjøres?",
      options: ["5,1 MeV", "0,0055 MeV, siden atommasseenheten og megaelektronvolt er samme størrelse", "$5{,}1\\cdot10^{-3}$ J, altså tallet ganget med lysfarten i andre potens", "0,0055 J, som er massesvinnet ganget med $c^2$ i SI-enheter"],
      explanation: "$E = 0{,}0055\\ \\text{u}\\cdot931{,}5\\ \\text{MeV/u} = 5{,}1$ MeV. Skal du ha svaret i joule, ganger du med $1{,}602\\cdot10^{-13}$ og får $8{,}2\\cdot10^{-13}$ J.",
    },
    {
      question: "Hvilken størrelsesorden skal energien per henfall ha, som rimelighetssjekk?",
      options: ["Noen få MeV, typisk mellom 0,1 og 10 MeV", "Noen få joule, siden kjerneenergi er den kraftigste energiformen vi kjenner", "Noen få elektronvolt, som for lysfotoner fra et atom", "Noen få kilowattimer, som er enheten energiselskapene bruker"],
      explanation: "Kjerneprosesser ligger på MeV-skalaen, mens elektronovergangene i atomet ligger på eV-skalaen. En fisjon skiller seg ut med rundt 200 MeV.",
    },
    {
      question: "Du kjenner aktiviteten $A$ til en kilde og energien $E$ som frigjøres per henfall. Hvordan finner du varmeeffekten?",
      options: ["$P = A\\cdot E$, med $A$ i $\\text{s}^{-1}$ og $E$ i joule", "$P = A/E$, siden effekt er aktivitet fordelt på energien per henfall", "$P = A\\cdot E\\cdot t$, der $t$ er tiden kilden har vært i bruk", "$P = E/A$, som gir energi per henfall per sekund"],
      explanation: "Enhetskontrollen avgjør: $\\text{s}^{-1}\\cdot\\text{J} = \\text{J/s} = \\text{W}$. Dette er regnestykket bak radioaktiv oppvarming av jordas indre.",
    },
    {
      question: "Hva måler den absorberte dosen $D$, og hvilken enhet har den?",
      options: ["Energi avsatt per kilogram vev, målt i gray (Gy)", "Antall henfall per sekund i vevet, målt i becquerel (Bq)", "Den helsemessige belastningen av strålingen, målt i sievert (Sv)", "Strålingens energi per foton, målt i megaelektronvolt (MeV)"],
      explanation: "$D = E/m$ med $1\\ \\text{Gy} = 1$ J/kg. Absorbert dose skiller ikke mellom strålingstyper — det gjør den ekvivalente dosen $H = w_R D$, som måles i sievert.",
    },
    {
      question: "En vevsprøve absorberer samme energi per kilogram fra alfastråling som fra gammastråling. Hva gjelder for den ekvivalente dosen?",
      options: ["Alfa gir 20 ganger så høy ekvivalent dose, siden $w_R = 20$ for alfa og 1 for gamma", "De to gir samme ekvivalente dose, siden den absorberte energien per kilogram er den samme", "Gamma gir høyest ekvivalent dose, siden gammastråling trenger dypest inn i vevet", "Forholdet kan ikke bestemmes uten å kjenne halveringstiden til kilden"],
      explanation: "Strålingsvektfaktoren $w_R$ er 20 for alfa og 1 for beta og gamma. Alfa avsetter energien over noen få mikrometer, så skaden konsentreres i få celler.",
    },
    {
      question: "Hvorfor kan atommassene fra vedlegget brukes direkte når du regner massesvinn i et alfahenfall?",
      options: ["Fordi elektronene i morkjernens atom fordeler seg på datteratomet og heliumatomet, slik at elektronmassene kansellerer", "Fordi elektronmassen er så liten at den aldri påvirker noe regnestykke i fysikken", "Fordi alfapartikkelen tar med seg alle elektronene ut av atomet", "Fordi vedlegget alltid oppgir kjernemasser, ikke atommasser"],
      explanation: "Morkjernens atom har $Z$ elektroner; datteratomet har $Z-2$ og heliumatomet 2, altså $Z$ til sammen. Regnskapet går derfor opp av seg selv — også for betaminus-henfall.",
    },
    {
      question: "Middellevetiden $\\tau$ til en nuklide er 1,44 ganger halveringstiden. Hva er $\\tau$ uttrykt ved henfallskonstanten?",
      options: ["$\\tau = 1/\\lambda$", "$\\tau = \\lambda\\cdot\\ln 2$, altså henfallskonstanten vektet med logaritmen", "$\\tau = \\ln 2/\\lambda$, som er det samme som halveringstiden", "$\\tau = 2/\\lambda$, siden middelverdien ligger midt mellom to halveringer"],
      explanation: "$\\tau = 1/\\lambda$, og siden $\\lambda = \\ln 2/t_{1/2}$ blir $\\tau = t_{1/2}/\\ln 2 \\approx 1{,}44\\,t_{1/2}$. Middellevetiden er altså lengre enn halveringstiden.",
    },
    {
      question: "En trebit har 50 % av det karbon-14-innholdet levende trevirke har. Karbon-14 har halveringstid 5730 år. Hvor gammel er biten?",
      options: ["5730 år", "2865 år, altså halvparten av halveringstiden siden halvparten er igjen", "11 460 år, siden det kreves to halveringstider å komme til 50 %", "Alderen kan ikke bestemmes uten å kjenne massen av prøven"],
      explanation: "50 % igjen svarer per definisjon til nøyaktig én halveringstid. Prøvens masse spiller ingen rolle, siden det er *andelen* som måles.",
    },
  ],
  'fys1001-7-4': [
    {
      question: "Hvilken rekkefølge har den faste kjernefysikk-malen på eksamen?",
      options: ["Reaksjonsligning med balanse, så halveringstid eller aktivitet, så energi fra massesvinn", "Energi fra massesvinn først, så halveringstiden, og reaksjonsligningen helt til slutt", "Aktiviteten først, siden den er den eneste størrelsen som faktisk kan måles i et laboratorium", "Rekkefølgen varierer helt fra sett til sett, så framgangsmåten kan ikke forberedes på forhånd"],
      explanation: "Malen er stabil: ligning og balanse, deretter halveringstid eller aktivitet, deretter massesvinn og energi — ofte med en kvalitativ hale om dose eller graf. Innpakningen varierer, rekkefølgen ikke.",
    },
    {
      question: "Hva må ALLTID stå under en reaksjonsligning i besvarelsen?",
      options: ["To regnestykker: ett som viser at nukleontallene balanserer og ett for ladningstallene", "Halveringstiden og den molare massen til morkjernen, slik de er oppgitt i vedlegget til oppgaven", "Massesvinnet i atommasseenheter, selv om oppgaven ikke spør om energi", "En figur som viser hvordan kjernen ser ut før og etter henfallet"],
      explanation: "Balansen skal vises eksplisitt som to egne linjer. Løsningsforslagene i arkivet gjør det hver gang, og det er blant de billigste poengene i settet.",
    },
    {
      question: "En oppgave gir en graf over aktivitet mot tid og ber deg finne halveringstiden. Hva gjør du?",
      options: ["Halverer startverdien, trekker hjelpelinjer bort til kurven og ned til tidsaksen, og markerer skjæringspunktet", "Leser av tiden der kurven ser ut til å treffe tidsaksen, og halverer den tiden for å få halveringstiden", "Måler stigningstallet til kurven i startpunktet og tar den omvendte verdien", "Leser av aktiviteten etter én time og ganger med to"],
      explanation: "Avlesningen går fra en verdi til halvparten av den verdien, og hjelpelinjene skal tegnes inn — markeringen er en del av svaret. «Tiden til null» er meningsløs, siden kurven aldri når null.",
    },
    {
      question: "Du skal regne aktivitet i becquerel fra en halveringstid oppgitt i døgn. Hva er første grep?",
      options: ["Gjøre halveringstiden om til sekunder før du regner ut $\\lambda = \\ln 2/t_{1/2}$", "Gjøre antall kjerner om til mol, siden becquerel er definert per mol", "Gjøre om aktiviteten til curie først, og deretter tilbake til becquerel", "Ingenting i det hele tatt — enheten på halveringstiden forkortes bort i regnestykket uansett hva den er"],
      explanation: "Becquerel er henfall per sekund, så $\\lambda$ må komme ut i $\\text{s}^{-1}$. I eksponenten $t/t_{1/2}$ er det derimot nok at de to tidene har samme enhet.",
    },
    {
      question: "Hvordan regnes massesvinnet i en kjernereaksjon?",
      options: ["Sum av massene før reaksjonen minus sum av massene etter", "Sum av massene etter reaksjonen minus sum av massene før", "Massen til den tyngste kjernen minus massen til den letteste", "Differansen mellom nukleontallene på de to sidene av ligningen"],
      explanation: "Venstre side minus høyre side. Snur du rekkefølgen, får du negativt massesvinn og dermed «negativ energi», som avslører feilen umiddelbart.",
    },
    {
      question: "Et alfahenfall har massesvinn 0,0060 u. Omtrent hvor mye energi frigjøres?",
      options: ["5,6 MeV", "0,0060 MeV, siden atommasseenheten tilsvarer én megaelektronvolt", "$5{,}4\\cdot10^{14}$ J, som er massesvinnet ganget med lysfarten i andre potens", "0,0060 J, som er massesvinnet ganget med lysfartens kvadrat i SI-enheter"],
      explanation: "$E = 0{,}0060\\ \\text{u}\\cdot931{,}5\\ \\text{MeV/u} = 5{,}6$ MeV. Setter du massesvinnet i u rett inn i $\\Delta mc^2$ uten å gjøre om til kilogram, bommer du med 27 tierpotenser.",
    },
    {
      question: "Hvilken rimelighetssjekk skal du gjøre på energien per henfall?",
      options: ["Den skal ligge på MeV-skalaen, typisk mellom 0,1 og 10 MeV", "Den skal ligge på noen få joule per henfall for tunge kjerner", "Den skal være omtrent lik halveringstiden målt i sekunder", "Den skal ligge på eV-skalaen, som for lys fra et atom"],
      explanation: "Kjerneprosesser ligger på MeV-skalaen; en fisjon skiller seg ut med rundt 200 MeV. Havner du langt utenfor, er det nesten alltid en enhetsfeil.",
    },
    {
      question: "Du kjenner aktiviteten til en kilde og energien per henfall. Hvordan finner du effekten kilden avgir?",
      options: ["$P = A\\cdot E$, med aktiviteten i $\\text{s}^{-1}$ og energien i joule", "$P = A/E$, siden effekt er henfall per sekund fordelt på energien", "$P = A\\cdot E\\cdot t_{1/2}$, siden halveringstiden bestemmer varigheten", "$P = E/t_{1/2}$, altså energien fordelt over halveringstiden"],
      explanation: "Enhetskontrollen avgjør: $\\text{s}^{-1}\\cdot\\text{J} = \\text{J/s} = \\text{W}$. Dette er regnestykket bak radioaktiv oppvarming og bak varmekilder i romsonder.",
    },
    {
      question: "En kjernefysikkoppgave avsluttes med «forklar hvorfor pasientdosen oppgis i sievert». Hva må svaret inneholde?",
      options: ["At sievert vekter den absorberte dosen med strålingsvektfaktoren, så alfa teller 20 ganger så mye som beta og gamma", "At sievert er en større enhet enn gray og derfor gir penere tall for pasientdoser", "At gray bare gjelder for gammastråling, mens sievert er enheten som dekker alfa, beta og gamma samlet", "At sievert måler antall henfall i kroppen, mens gray måler energien i kilden"],
      explanation: "$H = w_R D$: gray måler avsatt energi per kilogram, sievert vekter den etter hvor skadelig strålingstypen er. Begge enhetene gjelder alle strålingstyper — det er vektingen som skiller dem.",
    },
    {
      question: "Hvorfor er kjernefysikkoppgaven regnet som den billigste oppgaven på FYS1001-eksamen?",
      options: ["Fordi formen er så stabil at hele framgangsmåten kan drilles på forhånd, mens alle data kommer i vedlegget", "Fordi hver deloppgave i kjernefysikkoppgaven gir flere poeng enn deloppgavene i de andre oppgavene i settet", "Fordi den er den eneste oppgaven der du får velge mellom flere alternative oppgaver", "Fordi den ikke krever begrunnelser, bare riktige tallsvar med enhet"],
      explanation: "Kjernefysikk er testet i 28 av 36 slutteksamener i nesten samme tretrinnsform, og halveringstider og atommasser kommer i vedlegg. Alle deloppgaver teller likt, og begrunnelse kreves like strengt her som ellers.",
    },
  ],
  'fys1001-8-1': [
    {
      question: "Omtrent hvor stor andel av deloppgavene i et moderne FYS1001-sett er kvalitative «forklar hvorfor»-oppgaver?",
      options: ["25–40 %", "under 5 %, siden eksamen er et rent regnefag med tallsvar", "omtrent 60 %, altså flertallet av deloppgavene i settet", "nesten alle, bortsett fra kjernefysikkoppgaven til slutt"],
      explanation: "Analysen av settene gir 25–40 % kvalitative deloppgaver, og andelen har økt de siste årene.",
    },
    {
      question: "Hva er første trinn i svarmalen for en kvalitativ forklaringsoppgave?",
      options: ["Navngi mekanismen med fagbegrepet", "Regne ut et tall som støtter forklaringen du vil gi", "Beskrive nøyaktig hva som skjer, uten å bruke fagbegreper", "Liste opp alle forklaringene som kan tenkes å passe"],
      explanation: "Malen er: navngi mekanismen med fagbegrep, koble den til situasjonen, konkluder. Uten fagbegrepet faller uttellingen.",
    },
    {
      question: "Hvor langt bør et svar på en kvalitativ deloppgave normalt være?",
      options: ["2–4 setninger", "En halv side, slik at alle relevante forhold blir dekket", "Ett enkelt ord, siden bare fagbegrepet gir uttelling", "Minst ti setninger, med drøfting av alternativene"],
      explanation: "Kravet er 2–4 presise setninger. Lengre svar gir ikke mer uttelling, og irrelevant stoff kan koste poeng.",
    },
    {
      question: "Hvorfor gir det trekk å skrive to alternative forklaringer på samme spørsmål?",
      options: ["Det er helgardering — du viser ikke hvilken mekanisme som gjelder", "Fordi svaret da alltid blir for kort til å gi full uttelling", "Fordi bare den første setningen i svaret blir lest og vurdert", "Fordi to forklaringer på samme fenomen alltid er faglig umulig"],
      explanation: "Gardering blir straffet: poenget er å identifisere den styrende mekanismen, ikke å dekke flest mulig muligheter.",
    },
    {
      question: "Hvorfor er retardasjonen ved bremsing på vannrett vei uavhengig av massen?",
      options: ["Fordi $R = \\mu m g$ gir $a = R/m = \\mu g$", "Fordi friksjonskraften er den samme uansett hvor stor normalkraften er", "Fordi tunge kjøretøy alltid har et lavere friksjonstall mot asfalten", "Fordi luftmotstanden dominerer helt over friksjonen under bremsing"],
      explanation: "Normalkraften vokser proporsjonalt med massen, og massen forsvinner når du deler kraften på massen.",
    },
    {
      question: "Hvorfor blir bremselengden fire ganger så lang når farten dobles?",
      options: ["Fordi $s = v_0^{2}/(2\\mu g)$ vokser med kvadratet av farten", "Fordi friksjonstallet halveres når farten mot underlaget blir stor", "Fordi bremsetiden dobles, og strekningen følger tiden proporsjonalt", "Fordi massen får større betydning når farten øker over et visst nivå"],
      explanation: "Friksjonsarbeidet må ta unna hele den kinetiske energien $\\tfrac12 mv_0^2$, og kvadratleddet gir kvadratloven.",
    },
    {
      question: "Hvorfor kan du ikke bruke $2as = v^{2} - v_0^{2}$ på en buet sklie?",
      options: ["Fordi akselerasjonen ikke er konstant langs en krum bane", "Fordi ligningen bare gjelder for legemer med stor masse og liten fart", "Fordi friksjonen alltid må være med i regnestykket på en sklie", "Fordi farten nederst i bakken ikke kan måles med tilstrekkelig nøyaktighet"],
      explanation: "Bevegelsesligningene forutsetter konstant akselerasjon. På krum bane er energibevaring riktig metode.",
    },
    {
      question: "Hva er den fysiske grunnen til at en kollisjonspute reduserer kraften på passasjeren?",
      options: ["Stopptiden forlenges, og $F\\Delta t = \\Delta p$ gir mindre kraft", "Bevegelsesmengden til passasjeren blir mindre under sammenstøtet", "Den kinetiske energien blir bevart i stedet for å gå tapt til varme", "Farten passasjeren har rett før sammenstøtet, blir kraftig redusert"],
      explanation: "Fartsendringen er den samme uansett; det er tiden stoppet tar, som avgjør kraften.",
    },
    {
      question: "Hvorfor gjør snordraget ikke arbeid på en pendel?",
      options: ["Fordi kraften står vinkelrett på bevegelsen, så $\\cos\\theta = 0$", "Fordi snoren regnes som masseløs i alle pendelberegninger", "Fordi arbeidet er negativt og positivt like ofte gjennom svingningen", "Fordi farten er konstant hele veien gjennom pendelens bane"],
      explanation: "$W = Fs\\cos\\theta$, og med 90° mellom kraft og bevegelse blir arbeidet null.",
    },
    {
      question: "Hva er den fysiske betingelsen for minstefarten i toppen av en loop?",
      options: ["At normalkraften blir null, så tyngden alene holder vogna i banen", "At normalkraften er nøyaktig like stor som tyngden på vogna", "At farten er null i det høyeste punktet av loopen", "At sentripetalkraften er null i toppunktet av banen"],
      explanation: "Underlaget kan bare skyve. Ved $N = 0$ gir $G = mv^2/r$ minstefarten $v = \\sqrt{gr}$.",
    },
    {
      question: "Hvorfor kjennes et metallrekkverk kaldere enn et trerekkverk med samme temperatur?",
      options: ["Metallet leder varme raskere bort fra huden enn treet gjør", "Metallet holder en lavere temperatur enn treet når begge står ute", "Treet sender ut mer varmestråling mot hånden din enn metallet gjør", "Metallet har mye høyere spesifikk varmekapasitet enn treverket har"],
      explanation: "Følelsen «kaldt» måler varmestrømmen ut av huden, ikke temperaturen i gjenstanden — de to har samme temperatur.",
    },
    {
      question: "Hvorfor står temperaturen stille mens vann koker, selv om platen leverer full effekt?",
      options: ["Energien går til fordampingsvarmen $Q = lm$", "Fordi kjelen slutter å lede varme når den når hundre grader", "Fordi termometeret ikke kan vise verdier over hundre grader celsius", "Fordi effekten fra platen forsvinner som synlig lys og lyd i stedet"],
      explanation: "Under en faseovergang brukes energien til å bryte bindinger; temperaturen står stille til all væsken er fordampet.",
    },
    {
      question: "Hvorfor må temperaturen regnes i kelvin i $pV = NkT$?",
      options: ["Fordi loven gjelder absolutt temperatur med et fysisk nullpunkt", "Fordi celsiusverdier gir negative volum i alle utregninger", "Fordi Boltzmanns konstant $k$ er oppgitt med enheten grader celsius", "Fordi trykket i slike oppgaver alltid måles i bar og ikke i pascal"],
      explanation: "Celsiusskalaen har et vilkårlig nullpunkt, så forholdstall mellom temperaturer blir feil. I $Q=cm\\Delta T$ inngår bare differanser, og der går celsius fint.",
    },
    {
      question: "Hva er arealet under kurven i et TS-diagram?",
      options: ["Tilført varme, siden $Q = T\\Delta S$", "Arbeidet gassen utfører i løpet av hele den lukkede syklusen", "Endringen i indre energi fra starten til slutten av prosessen", "Virkningsgraden til varmemaskinen som gjennomløper syklusen"],
      explanation: "Arbeidet per syklus er derimot arealet innenfor den lukkede kurven, fordi $\\Delta U = 0$ over en hel omgang.",
    },
    {
      question: "Hvorfor er $P = RI^{2}$ tryggere enn $P = U^{2}/R$ i en sammensatt krets?",
      options: ["Fordi $U$ må være spenningen over akkurat den motstanden", "Fordi uttrykket $U^{2}/R$ er en gal formel som aldri kan brukes", "Fordi strømmen alltid er lettere å måle enn spenningen i en krets", "Fordi resistansen endrer seg når spenningen over motstanden øker"],
      explanation: "Kildespenningen deles mellom komponentene. Setter du inn hele kildespenningen, får du et altfor stort svar.",
    },
    {
      question: "Hvorfor endrer et magnetfelt bare retningen — ikke farten — til en ladd partikkel?",
      options: ["Fordi $F = qvB$ står vinkelrett på farten og ikke gjør arbeid", "Fordi den magnetiske kraften er for liten til å endre farten merkbart", "Fordi ladningen til partikkelen holder seg konstant hele veien rundt", "Fordi feltet er homogent og derfor virker likt i alle punkter i banen"],
      explanation: "Uten arbeid endres ikke kinetisk energi. Resultatet er en sirkelbane med konstant fart og radius $r = mv/(qB)$.",
    },
    {
      question: "Hva skjer med frekvensen når lys går fra luft inn i glass?",
      options: ["Den er uendret, mens farten og bølgelengden avtar", "Den øker, mens bølgelengden holder seg akkurat som i luft", "Både frekvensen og bølgelengden er uendret over grenseflaten", "Den avtar i nøyaktig samme forhold som farten i mediet gjør"],
      explanation: "Like mange bølgetopper må passere grenseflaten per sekund. Farten blir $c = c_0/n$, og $v=f\\lambda$ gir kortere bølgelengde.",
    },
    {
      question: "Hvilken mekanisme gir fargene i en regnbue?",
      options: ["Dispersjon — $n$ avhenger av bølgelengden", "Interferens mellom lys fra mange spalter ved siden av hverandre", "Totalrefleksjon i lufta rett utenfor overflaten på vanndråpen", "Absorpsjon av bestemte bølgelengder inne i selve vanndråpen"],
      explanation: "Gitteret gir derimot farger ved interferens, der ganglengdeforskjellen må være et helt antall bølgelengder.",
    },
    {
      question: "Hvorfor sender en gass ut et linjespekter og ikke et kontinuerlig spekter?",
      options: ["Fordi bare bestemte energidifferanser mellom nivåene finnes", "Fordi gassen er så tynn at bare litt av lyset slipper igjennom", "Fordi bare rødt lys har nok energi til å komme seg ut av gassen", "Fordi fotonene mister en del av energien sin på vei ut av gassen"],
      explanation: "Fotonet får energien $E_f = E_m - E_n$, og bare bestemte differanser er mulige — derfor bestemte bølgelengder.",
    },
    {
      question: "Hvorfor er det meningsløst å lese av «tiden til null» på en henfallskurve?",
      options: ["Fordi $N = N_0(\\tfrac12)^{t/t_{1/2}}$ aldri når null", "Fordi kurven i praksis er en rett linje gjennom hele forløpet", "Fordi aktiviteten i prøven øker med tiden i stedet for å avta", "Fordi halveringstiden aldri kan bestemmes ved grafisk avlesning"],
      explanation: "Halveringstiden leses av som tiden fra en verdi til halvparten av den, og avlesningen skal markeres på grafen.",
    },
  ],
  'fys1001-8-2': [
    {
      question: "Hvordan leser du av halveringstiden fra en henfallskurve?",
      options: ["Som tiden fra en verdi til halvparten av den", "Som tiden til kurven treffer tidsaksen og aktiviteten blir null", "Som tiden fra start til kurven har falt til en tiendedel av verdien", "Som stigningstallet til kurven i det første punktet på grafen"],
      explanation: "Kurven nærmer seg null uten å nå det, så «tiden til null» finnes ikke. Avlesningen skal i tillegg markeres på grafen.",
    },
    {
      question: "Hva må du gjøre i tillegg til å oppgi tallet når du leser av en verdi fra en graf?",
      options: ["Markere avlesningspunktet på grafen med hjelpelinjer", "Regne om verdien til grunnenheter i SI-systemet før du svarer", "Oppgi verdien med minst fire gjeldende siffer for nøyaktighet", "Tegne grafen på nytt i større målestokk på egne aksepapir"],
      explanation: "Avlesningen skal vises på grafen: vannrett hjelpelinje inn til kurven, loddrett ned til aksen, og verdien skrevet av med enhet.",
    },
    {
      question: "Hva forteller stigningen på en $v$–$t$-graf?",
      options: ["Akselerasjonen", "Strekningen legemet har tilbakelagt i løpet av tiden", "Den samlede kraften som virker på legemet i newton", "Massen til legemet som er i bevegelse langs banen"],
      explanation: "Arealet under kurven er derimot strekningen. Der kurven flater ut, er akselerasjonen null og legemet har nådd terminalfart.",
    },
    {
      question: "Hva kjennetegner et punkt på en $v$–$t$-graf der kurven flater ut mot en vannrett linje?",
      options: ["Summen av kreftene er null — legemet har terminalfart", "Legemet har stanset helt og farten er blitt null", "Luftmotstanden har forsvunnet fordi farten er stor", "Akselerasjonen er maksimal i dette punktet på grafen"],
      explanation: "Vannrett graf betyr null akselerasjon, og med $\\Sigma F = ma$ betyr det at kreftene balanserer: luftmotstanden er lik tyngden.",
    },
    {
      question: "Hva gir stigningstallet på den skrå delen av en $T$–$t$-kurve ved konstant tilført effekt?",
      options: ["Den spesifikke varmekapasiteten, gjennom $P = cm\\,\\Delta T/\\Delta t$", "Den latente smeltevarmen til stoffet som varmes opp", "Massen av stoffet som ligger i beholderen under forsøket", "Temperaturen ved smeltepunktet til det aktuelle stoffet"],
      explanation: "Platålengden gir derimot den latente varmen, gjennom $P\\,t_{\\text{platå}} = lm$.",
    },
    {
      question: "Hva er arealet innenfor en lukket syklus i et TS-diagram?",
      options: ["Arbeidet per omløp", "Den samlede varmen som tilføres gassen i syklusen", "Endringen i indre energi gjennom hele den lukkede syklusen", "Entropiendringen fra starten til slutten av ett omløp"],
      explanation: "Arealet under kurven er varme ($Q = T\\Delta S$); arealet innenfor er arbeid, fordi $\\Delta U = 0$ over en syklus.",
    },
    {
      question: "Hvorfor skal frilegemediagrammet tegnes før regningen?",
      options: ["Fordi figuren bestemmer hvilke ledd som havner i $\\Sigma F = ma$", "Fordi figuren teller mer enn regningen i den samlede vurderingen", "Fordi kreftene bare kan navngis riktig etter at tallene er kjent", "Fordi regningen ellers må gjøres om igjen med andre enheter"],
      explanation: "Figuren er verktøyet som gir riktig oppsett. Manglende figur som var viktig for klarheten, koster i tillegg inntil ett poeng.",
    },
    {
      question: "Hvilken pil skal ALDRI være med i et frilegemediagram?",
      options: ["Produktet $ma$, som er resultatet av kreftene og ikke en kraft", "Normalkraften $N$, som virker vinkelrett ut fra underlaget", "Friksjonskraften $R$, som virker langs underlaget mot bevegelsen", "Tyngden $G = mg$, som alltid peker loddrett nedover mot bakken"],
      explanation: "$ma$ er summen av kreftene, ikke en av dem. Tegner du den som pil, dobbelttelles virkningen.",
    },
    {
      question: "Hvilken vei går feltlinjene i en platekondensator?",
      options: ["Fra den positive til den negative platen", "Fra den negative til den positive platen i en bue utenfor", "Parallelt med platene, langs overflaten på hver av dem", "I sirkler rundt hver av de to platene i kondensatoren"],
      explanation: "Linjene står vinkelrett på platene og er jevnt fordelte i det homogene området. Feltstyrken er $E = U/d$.",
    },
    {
      question: "Hvilke tre standardstråler bruker du i en strålekonstruksjon gjennom en samlelinse?",
      options: ["Parallellstrålen, brennpunktstrålen og senterstrålen", "Tre vilkårlige stråler fra toppen av gjenstanden mot linsa", "En stråle fra hvert av de to brennpunktene og én fra aksen", "To stråler langs den optiske aksen og én gjennom gjenstanden"],
      explanation: "Parallellstrålen brytes gjennom $F'$, brennpunktstrålen kommer ut parallelt, og senterstrålen går rett gjennom. Konstruksjonen skal stemme med linseformelen.",
    },
  ],
  'fys1001-8-3': [
    {
      question: "Hvordan er poengene fordelt på slutteksamen i FYS1001?",
      options: ["Inntil 4 poeng per deloppgave, og alle deloppgaver teller likt", "De største oppgavene teller mest, opptil tolv poeng hver", "Poengene fordeles etter hvor lang tid oppgaven er ment å ta", "Første deloppgave i hver oppgave teller dobbelt av de andre"],
      explanation: "Alle deloppgaver teller likt, med bare hele poeng. Derfor lønner bredde seg framfor å perfeksjonere én oppgave.",
    },
    {
      question: "Hvor mye tid har du per deloppgave i et sett med 21 deloppgaver på fire timer?",
      options: ["Om lag 11 minutter", "Om lag 25 minutter, siden hver oppgave krever mye regning", "Om lag 4 minutter, slik at du får tid til å kontrollere alt", "Om lag 20 minutter for regneoppgaver og 2 for de andre"],
      explanation: "$240/21 \\approx 11$ minutter. Ligger du langt over på én deloppgave, gå videre og kom tilbake.",
    },
    {
      question: "Hvorfor kan du ikke bruke bevegelsesligningene for konstant akselerasjon på en buet akebakke?",
      options: ["Akselerasjonen endrer størrelse og retning hele veien ned", "Fordi friksjonen alltid er for stor i en snødekt akebakke", "Fordi massen til kjelken ikke er kjent når to kjelker møtes", "Fordi ligningene bare gjelder for bevegelse rett oppover"],
      explanation: "Riktig metode er energibevaring, som bare sammenligner start- og sluttilstand. Feil metode gir ikke uttelling selv med riktig tall.",
    },
    {
      question: "I en krets med $R_1$ i serie foran en parallellkobling: hvorfor gir $P = U^{2}/R_2$ med kildespenningen galt svar?",
      options: ["Fordi bare en del av kildespenningen ligger over $R_2$", "Fordi formelen $P = U^{2}/R$ ikke gjelder for parallellkobling", "Fordi strømmen gjennom $R_2$ er større enn strømmen fra kilden", "Fordi resistansen endrer seg når spenningen over den øker"],
      explanation: "$R_1$ tar en del av spenningen. Bruk $P = RI^{2}$ med strømmen gjennom motstanden — den kan ikke forveksles.",
    },
    {
      question: "Hva må du gjøre rede for i en Bernoulli-oppgave for å nå toppnivået?",
      options: ["Gyldighetsbetingelsene og hvilke to punkter du velger", "Antall molekyler i væsken og temperaturen dens i kelvin", "Hvor stor viskositeten er, målt i pascalsekunder for væsken", "Hvilken retning tyngdekraften har i forhold til strømmen"],
      explanation: "Bernoulli krever inkompressibelt, ikke-viskøst fluid i stasjonær strøm, og punktvalget er en del av begrunnelsen.",
    },
  ],
  'fys1001-8-4': [
    {
      question: "Hva er den viktigste strategien når et eksamenssett er bundet sammen av én rammefortelling?",
      options: ["Å identifisere den kjente oppgavetypen bak hver innpakning", "Å lese hele fortellingen nøye før du begynner på noen oppgave", "Å løse oppgavene i den rekkefølgen fortellingen presenterer dem", "Å svare med utgangspunkt i historien framfor i fysikkens lover"],
      explanation: "Rammefortellingen er kosmetikk — fysikken er standardpensum. En snøscooter som bremser, er en vanlig friksjonsoppgave.",
    },
    {
      question: "Hvorfor er retardasjonen ved bremsing uavhengig av hvor mye last en snøscooter har?",
      options: ["Fordi $R = \\mu m g$ gir $a = R/m = \\mu g$, der massen faller ut", "Fordi friksjonstallet synker når normalkraften mot underlaget øker", "Fordi lasten ikke ligger i kontakt med underlaget under bremsingen", "Fordi luftmotstanden dominerer over friksjonen ved høye farter"],
      explanation: "Normalkraften vokser proporsjonalt med massen, så friksjonskraften gjør det også — og massen forkortes bort.",
    },
    {
      question: "Hvorfor legger du momentpunktet i hengselet når du regner ut wirestrekket i en bom?",
      options: ["Fordi hengselkraften får normalarm null og faller ut", "Fordi hengselet er det punktet der kreftene er størst i bommen", "Fordi momentet fra lasten alltid regnes fra veggen og utover", "Fordi bommens egen tyngde da ikke trenger å tas med i regningen"],
      explanation: "Regelen er: velg momentpunkt der de ukjente kreftene angriper. Da blir wirestrekket eneste ukjente i momentligningen.",
    },
    {
      question: "Hva må du huske når du regner netto utstrålt effekt fra en flate?",
      options: ["Både flatens og omgivelsenes temperatur, i kelvin", "Bare flatens egen temperatur, men den må være i kelvin", "At emissiviteten alltid kan settes til 1 for metallflater", "At temperaturene kan brukes i celsius når begge er negative"],
      explanation: "$P = \\varepsilon\\sigma A(T^4 - T_{\\text{omg}}^4)$. Glemmer du $T_{\\text{omg}}^4$, blir svaret typisk mer enn dobbelt så stort.",
    },
    {
      question: "Hvorfor er karbon-14 uegnet til å datere snølag fra de siste hundre årene?",
      options: ["Bare 1,2 % har henfalt — mindre enn måleusikkerheten", "Fordi karbon-14 ikke finnes i snø og is i målbare mengder", "Fordi halveringstiden på 5 730 år er for kort for slike lag", "Fordi karbon-14 henfaller ved $\\alpha$-henfall og ikke kan måles"],
      explanation: "$(1/2)^{100/5730} = 0{,}988$. En dateringsmetode må ha halveringstid av samme størrelsesorden som tidsrommet den skal måle — derfor bly-210 med 22,3 år.",
    },
  ],
  'fys1001-8-5': [
    {
      question: "Hvor langt bør et svar på et kortsvarsspørsmål være?",
      options: ["Én formel med innsetting, eller 2–4 setninger", "Minst en halv side, slik at alle forhold blir dekket", "Bare sluttsvaret med enhet, uten noen mellomregning", "Like langt som en deloppgave i en vanlig temaoppgave"],
      explanation: "Hvert kortsvar teller like mye som en annen deloppgave, men skal løses raskt. Lange svar spiser tid og kan gi trekk for utenomsnakk.",
    },
    {
      question: "Tre motstander på $12\\ \\Omega$, $24\\ \\Omega$ og $8{,}0\\ \\Omega$ står i parallell. Hva er samlet resistans?",
      options: ["$4{,}0\\ \\Omega$", "$44\\ \\Omega$, altså summen av de tre verdiene i kretsen", "$14{,}7\\ \\Omega$, altså gjennomsnittet av de tre verdiene", "$8{,}0\\ \\Omega$, som er den minste av de tre motstandene"],
      explanation: "$1/R_p = 1/12 + 1/24 + 1/8 = 6/24$ gir $4{,}0\\ \\Omega$. Svaret må alltid være mindre enn den minste grenen.",
    },
    {
      question: "En prøve har aktiviteten 640 Bq, og 18 timer senere 40 Bq. Hva er halveringstiden?",
      options: ["4,5 timer", "18 timer, siden aktiviteten er blitt vesentlig lavere", "9,0 timer, altså halvparten av den målte tiden", "1,1 timer, siden aktiviteten er sunket til en sekstendedel"],
      explanation: "$640/40 = 16 = 2^4$, altså fire halveringer på 18 timer: $t_{1/2} = 18/4 = 4{,}5$ timer.",
    },
    {
      question: "Hva er ganglengdeforskjellen ved destruktiv interferens fra to kilder i fase?",
      options: ["Et halvt antall bølgelengder, $(n + \\tfrac12)\\lambda$", "Et helt antall bølgelengder, altså $n\\lambda$ for heltall $n$", "Nøyaktig én bølgelengde, uansett hvor du står i rommet", "Null, siden bølgene må komme samtidig for å slokke hverandre"],
      explanation: "Da kommer bølgene i motfase. Konstruktiv interferens krever derimot $\\Delta l = n\\lambda$.",
    },
    {
      question: "Hvorfor kommer ikke S-bølger gjennom jordas flytende ytre kjerne?",
      options: ["Fordi en væske ikke kan motstå skjærdeformasjon", "Fordi kjernen er for varm til å slippe gjennom bølger", "Fordi S-bølger har for kort bølgelengde for slike dybder", "Fordi S-bølgene brytes helt bort ved grensen til kjernen"],
      explanation: "S-bølger er transversale og krever skjærstivhet. P-bølgene er longitudinale og overføres av trykkendringer — derfor slipper de gjennom.",
    },
  ],
};

export default quizData_fys1001;
