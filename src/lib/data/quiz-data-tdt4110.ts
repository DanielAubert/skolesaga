import type { QuizQuestion } from './quiz-data';

const quizData_tdt4110: Record<string, QuizQuestion[]> = {
  'tdt4110-0-1': [
    {
      question: "Hvor mange timer varer eksamen i TDT4110, og hvor mye teller den?",
      options: ["Fire timer, og den teller hele karakteren alene", "Fire timer, og den teller sammen med en deleksamen", "Fem timer, og den teller hele karakteren alene", "Tre timer, og resten kommer fra obligatoriske øvinger"],
      explanation: "Vurderingen er én skriftlig skoleeksamen på fire timer som teller 100 prosent. Det finnes ingen deleksamen og ingen mappe. Varigheten er fire timer, ikke fem eller tre. Og de obligatoriske øvingene gir ingen karakterpoeng — de må bare være godkjent.",
    },
    {
      question: "Hva betyr hjelpemiddelkode D?",
      options: ["Bare én bestemt, enkel kalkulator er tillatt, ingenting mer", "Alle trykte hjelpemidler er tillatt, men ikke elektronikk", "Egne håndskrevne notater på ett ark er tillatt", "Datamaskin uten nett er tillatt under hele eksamen"],
      explanation: "Koden betyr at én bestemt, enkel kalkulator er det eneste hjelpemiddelet. Trykte hjelpemidler er ikke tillatt. Notater er heller ikke tillatt, uansett omfang. Og en datamaskin er utelukket, som er grunnen til at all kode skrives for hånd.",
    },
    {
      question: "Hvor stor andel av eksamen er programmeringsdelen?",
      options: ["Rundt 50 til 60 prosent", "Rundt 25 prosent", "Rundt 15 til 20 prosent", "Rundt 80 prosent av hele settet"],
      explanation: "Programmeringsoppgavene utgjør over halve settet, mellom 50 og 60 prosent. Rundt 25 prosent er teoridelen. Mellom 15 og 20 prosent er kodeforståelsen. Og 80 prosent ville ikke latt det være plass til de to andre delene.",
    },
    {
      question: "Hva bør du gjøre med et flervalgsspørsmål du ikke kan svaret på?",
      options: ["Krysse av likevel, siden feil svar ikke trekker fra noe", "La det stå blankt, siden blankt er bedre enn et feil kryss", "Krysse av på to alternativer, så sjansen dobles", "Skrive en kort begrunnelse i margen i stedet for et kryss"],
      explanation: "Feil svar gir null poeng, akkurat som blankt, så et kryss er alltid minst like godt som ingenting. Blankt gir ingen fordel. To kryss regnes som ugyldig svar. Og en begrunnelse i margen teller ikke i en flervalgsdel.",
    },
    {
      question: "Hva kjennetegner et godt svar på «forklar med én setning hva funksjonen gjør»?",
      options: ["Én setning som starter med et verb og sier hva funksjonen gjør", "Ett avsnitt som går gjennom hva hver enkelt kodelinje gjør etter tur", "En kort gjengivelse av koden skrevet om til vanlig norsk", "En liste over hvilke variabler funksjonen bruker underveis"],
      explanation: "Sensor er ute etter hva funksjonen oppnår, uttrykt i én presis setning som begynner med et verb. En gjennomgang linje for linje er nettopp det som trekker ned. En omskrivning av koden sier fortsatt hvordan, ikke hva. Og variabellista svarer ikke på spørsmålet i det hele tatt.",
    },
    {
      question: "Hvilken påstand om poenggivingen stemmer?",
      options: ["Riktig struktur gir uttelling selv med en av-én-feil i en indeks", "Bare kode som ville kjørt feilfritt, gir uttelling på programmeringsdelen", "Alternative løsninger gir halv uttelling hvis de skiller seg fra fasiten", "Delvis riktige besvarelser vurderes bare hvis oppgaven sier det uttrykkelig"],
      explanation: "Løsningsforslagene sier at riktig idé og struktur belønnes selv med små indeks- og kantfeil. Kravet om feilfri kode finnes ikke. Alternative løsninger med rett idé gir full pott, ikke halv. Og delvis uttelling er hovedregelen, ikke et unntak.",
    },
    {
      question: "Hva er den faste kjeden som ligger under hver programmeringsoppgave?",
      options: ["Les fil, bygg struktur, analysér, og skriv ut eller lagre", "Les fil, sortér, skriv ut, og les fila på nytt til slutt", "Spør brukeren, regn ut, lagre, og vis resultatet i en meny", "Bygg struktur, les fil, valider input, og avslutt programmet"],
      explanation: "Kjeden går fra fil til struktur til analyse til utskrift eller lagring, med en hovedfunksjon som binder leddene sammen. Å lese fila på nytt til slutt er nettopp det som ikke skal gjøres. Brukerinput er et ledd i kjeden, ikke starten på den. Og strukturen kan ikke bygges før fila er lest.",
    },
    {
      question: "Hvorfor spiller det ingen rolle hvilket domene programmeringsoppgaven er pakket inn i?",
      options: ["Fordi selve programmeringsøvelsen er den samme uansett innpakning", "Fordi domenet alltid er oppgitt på forhånd i emnebeskrivelsen", "Fordi oppgaveteksten forklarer hele løsningen i det aktuelle domenet", "Fordi domenet bare påvirker teoridelen og ikke programmeringen"],
      explanation: "Innpakningen byttes hvert år, men kjeden under er identisk, så det er mønsteret du øver på. Domenet er aldri kjent på forhånd. Oppgaveteksten beskriver dataene, ikke løsningen. Og teoridelen har ikke noe domene i det hele tatt.",
    },
    {
      question: "Hvilke to teoriklynger har vært på nær 100 prosent i alle settene?",
      options: ["Maskinvare og tallrepresentasjon", "Nettverk og sikkerhet", "Systemutvikling og algoritmeteori", "Komprimering og sampling"],
      explanation: "Maskinvare og tallrepresentasjon har vært med i praktisk talt hvert sett. Nettverk og sikkerhet ligger like bak, på 90 og 80 prosent. Systemutvikling og algoritmeteori er de to laveste, på 50 og 40 prosent. Og komprimering og sampling ligger på 80 prosent.",
    },
    {
      question: "Hva er riktig om klasser og objektorientering i TDT4110?",
      options: ["De er utenfor pensum, og ingen fasit i faget bruker dem", "De er pensum, men bare i teoridelen med flervalg", "De er pensum i programmeringsdelen fra og med 2018", "De er valgfrie, og gir bonuspoeng når de brukes riktig"],
      explanation: "Emnet er rent prosedyreorientert, og klasser hører til andre emner. De testes verken i teoridelen eller i programmeringen. De har ikke kommet inn på noe tidspunkt i perioden. Og noen bonusordning finnes ikke.",
    },
    {
      question: "Du har fire timer og en deloppgave som teller 3 prosent. Hvor lang tid bør den få?",
      options: ["Rundt 7 minutter", "Rundt 15 minutter", "Rundt 3 minutter", "Rundt 25 minutter"],
      explanation: "Tre prosent av 240 minutter er omtrent sju minutter. Femten minutter ville tilsvart over seks prosent. Tre minutter forveksler prosenten med antall minutter. Og 25 minutter tilsvarer en deloppgave på rundt ti prosent.",
    },
    {
      question: "Hva bør du gjøre hvis du står fast på deloppgave b) og c) skal bruke funksjonen fra b)?",
      options: ["Gå videre til c) og skriv kort hva du antar om funksjonen fra b)", "Hoppe over c) også, siden den bygger direkte på den forrige", "Skrive funksjonen fra b) ferdig uansett hvor lang tid det tar", "Løse c) på nytt uten å bruke noen funksjon fra tidligere deloppgaver"],
      explanation: "Deloppgavene kan løses uavhengig, og en nedskrevet antakelse er uttrykkelig tillatt. Å hoppe over c) gir bort poeng du allerede kan ta. Å bruke ubegrenset tid på b) ødelegger tidsbudsjettet. Og å skrive alt på nytt i c) taper nettopp den gjenbruken sensor belønner.",
    },
    {
      question: "Hva sier sensor om lengden på svarene?",
      options: ["Uklare eller unødig lange svar trekker karakteren ned", "Lengre svar gir bedre uttelling når de er faglig korrekte", "Lengden er uten betydning så lenge svaret er riktig", "Svar under tre setninger regnes som ufullstendige"],
      explanation: "Setningen om at uklare eller unødig lange svar trekker ned, står i innledningen hvert år. Lengde gir altså ikke uttelling i seg selv. Lengden har betydning, og den teller mot deg når den er unødvendig. Og det finnes ingen nedre grense på antall setninger.",
    },
    {
      question: "Hvorfor bør minst én øvingseksamen skrives helt for hånd?",
      options: ["Fordi eksamen ikke tillater maskin, så koden skrives på papir", "Fordi håndskrift gir bedre hukommelse enn å skrive på et tastatur", "Fordi sensor foretrekker håndskrevne besvarelser framfor utskrifter", "Fordi øvingseksamenene i boka ikke lar seg kjøre på en maskin"],
      explanation: "Hjelpemiddelkode D utelukker datamaskin, så ferdigheten som testes, er å skrive kode uten å kunne kjøre den. Hukommelsesargumentet er ikke poenget her. Sensor har ingen preferanse — all eksamen er håndskrevet. Og oppgavene i boka lar seg godt kjøre; det er nettopp det du gjør etterpå, når du kontrollerer.",
    },
  ],
  'tdt4110-1-1': [
    {
      question: "Hva skriver `print(17 // 5, 17 % 5)` ut?",
      options: ["`3 2`", "`3 3`", "`3.4 2`", "`4 2`"],
      explanation: "17 inneholder tre hele femmere, og 2 blir til overs, så svaret er `3 2`. Svaret `3 3` bytter om resten og heltallsdelen. Svaret `3.4 2` bruker vanlig divisjon på den første, men `//` kaster desimalene. Svaret `4 2` runder heltallsdelen opp, og `//` runder aldri opp.",
    },
    {
      question: "Hva er verdien av `-17 // 5`?",
      options: ["`-4`, fordi heltallsdeling runder nedover på tallinja", "`-3`, fordi heltallsdeling kutter desimalene mot null", "`-3.4`, fordi svaret beholder desimalene sine", "`-2`, fordi resten trekkes fra før divisjonen"],
      explanation: "`//` runder nedover mot minus uendelig, og nedover fra −3,4 er −4. Å kutte mot null er regelen for `int(-17 / 5)`, ikke for `//`. Å beholde desimalene er det `/` gjør. Å trekke fra resten først er ingen regel i Python.",
    },
    {
      question: "Hva skriver `print('12' + '7')` ut?",
      options: ["`127`", "`19`", "`12 7`", "`19.0`"],
      explanation: "Begge verdiene er tekst, og `+` mellom to tekster limer dem sammen til `127`. Svaret `19` forutsetter at verdiene var tall, altså at `int()` var brukt. Svaret `12 7` ville krevd `print('12', '7')` med komma. Svaret `19.0` blander inn divisjon, som ikke finnes her.",
    },
    {
      question: "Hva gir `type(10 / 2)`?",
      options: ["`<class 'float'>`, fordi `/` alltid gir desimaltall", "`<class 'int'>`, fordi divisjonen går opp uten rest", "`<class 'str'>`, fordi resultatet skrives ut som tekst", "`<class 'bool'>`, fordi divisjonen enten går opp eller ikke"],
      explanation: "`/` gir alltid et flyttall, også når divisjonen går opp — `10 / 2` er `5.0`. At divisjonen går opp gjør ingen forskjell for typen. Utskrift gjør heller ikke verdien om til tekst, og en divisjon gir aldri en sannhetsverdi.",
    },
    {
      question: "Hva er resultatet av `int('3.9')`?",
      options: ["Programmet stopper med `ValueError`", "Tallet `3`, fordi desimalene kuttes bort", "Tallet `4`, fordi verdien rundes av oppover", "Teksten `'3'`, fordi bare hele delen beholdes"],
      explanation: "`int` på en tekst krever at teksten er et helt tall; punktumet gjør at den ikke er det, og programmet stopper med `ValueError`. Kutting av desimaler skjer bare når `int` får et flyttall, altså `int(3.9)`. Avrunding oppover er `round`, og `int` gir aldri tekst tilbake.",
    },
    {
      question: "Hva skriver `print(2 + 3 * 4)` ut?",
      options: ["`14`", "`20`", "`24`", "`11`"],
      explanation: "Multiplikasjon binder sterkere enn addisjon, så `3 * 4` regnes først og gir 12, pluss 2 er 14. Svaret `20` regner `2 + 3` først, altså som om det sto parenteser. Svaret `24` ganger hele uttrykket med 4. Svaret `11` trekker fra i stedet for å legge til.",
    },
    {
      question: "Hva er verdien av `-3 ** 2`?",
      options: ["`-9`, fordi potensen regnes før minustegnet", "`9`, fordi minustegnet hører til grunntallet", "`-6`, fordi eksponenten ganges med grunntallet", "`6`, fordi fortegnet forsvinner ved multiplikasjon"],
      explanation: "Potens binder sterkere enn unært minus, så uttrykket leses som minus (3 opphøyd i 2), altså −9. At minustegnet hører til grunntallet ville krevd parentes rundt −3. De to siste svarene forveksler potens med multiplikasjon.",
    },
    {
      question: "Hva er `29 % 4`?",
      options: ["`1`", "`7`", "`0`", "`4`"],
      explanation: "29 inneholder sju hele firere, og 1 blir til overs, så resten er 1. Svaret `7` er heltallsdelen, altså `29 // 4`. Svaret `0` ville krevd at 4 gikk opp i 29. Svaret `4` er tallet vi deler på, ikke resten.",
    },
    {
      question: "Hva skriver `print('sol' * 3)` ut?",
      options: ["`solsolsol`", "`sol sol sol`", "Programmet stopper med `TypeError`", "`sol3`"],
      explanation: "Tekst ganget med et heltall gjentar teksten, uten skilletegn mellom gjentakelsene. Mellomrom mellom ville krevd at teksten selv sluttet med et mellomrom. `TypeError` kommer først hvis du ganger tekst med et flyttall. Sammenliming av tallet krever `+` og `str(3)`.",
    },
    {
      question: "Hvorfor gir `'9' > '10'` verdien `True`?",
      options: ["Tekst sammenlignes tegn for tegn, og tegnet `9` kommer etter tegnet `1`", "Tekst sammenlignes etter lengde, og `'9'` er den korteste teksten", "Python konverterer begge til tall, og 9 er større enn 1", "Sammenligning av tekst gir alltid `True` når typene er like"],
      explanation: "Strenger sammenlignes tegn for tegn fra venstre, og tegnet `9` ligger etter tegnet `1` i tegnrekkefølgen, så `'9'` regnes som størst. Lengden er ikke det som avgjør; den brukes bare hvis alle felles tegn er like. Python konverterer aldri automatisk, og sammenligning gir selvsagt ikke alltid `True`.",
    },
    {
      question: "Hva skriver `print(int(-7.8))` ut?",
      options: ["`-7`", "`-8`", "`-8.0`", "`-7.0`"],
      explanation: "`int` på et flyttall kutter desimalene mot null, så −7,8 blir −7. Svaret `-8` er det `//` ville gitt, siden den runder nedover. De to svarene med desimaltegn overser at `int` alltid gir et heltall.",
    },
    {
      question: "Hva gjør `str(7)`?",
      options: ["Gir teksten `'7'`, som kan limes sammen med annen tekst", "Gir tallet `7`, men med tekst som visningsform", "Skriver `7` ut på skjermen uten linjeskift", "Gir `True` fordi verdien kan skrives som tekst"],
      explanation: "`str` lager en tekstversjon av verdien, og det er den du trenger for å bruke `+` mot annen tekst. Verdien er ikke lenger et tall, så du kan ikke regne med den. `str` skriver ingenting ut — det er `print` som gjør det — og den gir aldri en sannhetsverdi.",
    },
    {
      question: "Hva er `'-42'.isdigit()`?",
      options: ["`False`, fordi minustegnet ikke er et siffer", "`True`, fordi teksten beskriver et helt tall", "`True`, fordi fortegn ses bort fra i testen", "Programmet stopper, fordi teksten ikke er et positivt tall"],
      explanation: "`.isdigit()` er sann bare når hvert eneste tegn er et siffer, og minustegnet er ikke det. At teksten beskriver et helt tall hjelper ikke — metoden ser på tegnene, ikke på betydningen. Metoden ser aldri bort fra tegn, og den stopper heller aldri programmet; den gir bare `False`.",
    },
    {
      question: "Hva skriver `print(0.1 + 0.2)` ut?",
      options: ["`0.30000000000000004`", "`0.3`", "`0,3`", "`0.30`"],
      explanation: "Flyttall lagres som tilnærminger i et endelig antall bit, og summen får derfor en liten hale. `0.3` er det matematisk riktige svaret, men ikke det Python skriver. Komma som desimalskilletegn brukes ikke i Python-utskrift, og to desimaler krever formatert utskrift eller `round`.",
    },
    {
      question: "Hva skriver `print(20 - 6 // 4 * 2)` ut?",
      options: ["`18`", "`17`", "`20`", "`16`"],
      explanation: "`//` og `*` er like sterke og regnes fra venstre: `6 // 4` gir 1, `1 * 2` gir 2, og `20 - 2` gir 18. Svaret `17` forutsetter at `6 // 4` gir 1,5. Svaret `20` regner `4 * 2` først og deretter `6 // 8`. Svaret `16` regner som om heltallsdelingen ga 2.",
    },
    {
      question: "Hva blir verdien av `n` etter `n = 5` og deretter `n += n`?",
      options: ["`10`", "`5`", "`25`", "`55`"],
      explanation: "`n += n` betyr `n = n + n`, altså 5 pluss 5, som er 10. Svaret `5` forutsetter at tilordningen ikke gjør noe. Svaret `25` ville krevd `n *= n`. Svaret `55` ville krevd at `n` var teksten `'5'`.",
    },
    {
      question: "Hvorfor er `sum = 0` en dårlig idé i et Python-program?",
      options: ["Navnet `sum` blir opptatt, så den innebygde `sum(...)` kan ikke brukes etterpå", "Python tillater ikke innebygde navn som variabler og stopper med `SyntaxError`", "Variabelen blir global og kan endres av alle funksjoner i programmet", "Tallet 0 er ikke en lovlig startverdi for en variabel som skal summere"],
      explanation: "Tilordningen overskriver navnet, og den innebygde funksjonen `sum(...)` er borte for resten av programmet — dette er felle #14. Python tillater faktisk tilordningen, så det blir ingen `SyntaxError`. Tilordningen gjør ikke variabelen global, og 0 er nettopp den riktige startverdien for en sum.",
    },
    {
      question: "Hva skriver `print(type('True'))` ut?",
      options: ["`<class 'str'>`", "`<class 'bool'>`", "`<class 'int'>`", "`True`"],
      explanation: "Fnuttene gjør verdien til en tekst, uansett hva teksten inneholder. Sannhetsverdien `True` skrives uten fnutter. Typen er ikke et heltall, selv om `True` internt teller som 1. Og `type` skriver ut typen, ikke selve verdien.",
    },
    {
      question: "En fillinje gir prisen som teksten `'21.90'`. Hvilken konvertering er riktig?",
      options: ["`float('21.90')`, som gir flyttallet `21.9`", "`int('21.90')`, som gir heltallet `21` uten desimalene", "`str('21.90')`, som gjør teksten klar til regning", "`round('21.90')`, som runder teksten av til nærmeste krone"],
      explanation: "Prisen har desimaler, så `float` er den riktige konverteringen, og utskriften blir `21.9` fordi den avsluttende nullen ikke lagres. `int` på en tekst med punktum gir `ValueError`. `str` gjør ingenting med noe som allerede er tekst. `round` kan ikke ta imot tekst i det hele tatt.",
    },
    {
      question: "Hvor mange hele minutter og hvor mange sekunder er 3725 sekunder?",
      options: ["62 minutter og 5 sekunder, fra `3725 // 60` og `3725 % 60`", "61 minutter og 5 sekunder, fra `3725 // 61` og `3725 % 61`", "62 minutter og 1 sekund, fra `3725 // 60` og `3725 % 100`", "60 minutter og 125 sekunder, fra `3600 // 60` og `3725 - 3600`"],
      explanation: "Heltallsdelingen `3725 // 60` gir 62, og resten `3725 % 60` gir 5. Å dele på 61 har ingen begrunnelse. Å ta resten modulo 100 gir sifrene i tallet, ikke sekundene. Det siste svaret stopper etter én time og lar restsekundene være større enn et helt minutt.",
    },
  ],
  'tdt4110-1-2': [
    {
      question: "Hva er verdien av `True and False`?",
      options: ["`False`, fordi begge sider må være sanne", "`True`, fordi minst én side er sann", "`True`, fordi den venstre siden er sann", "`False`, fordi begge sidene må være usanne"],
      explanation: "`and` krever at begge sider er sanne, og den høyre er usann. Å kreve minst én sann side er `or`. At venstre side alene holder, er heller ikke `and`. Og `and` er ikke sann når begge er usanne.",
    },
    {
      question: "Hva leses uttrykket `a or b and c` som?",
      options: ["`a or (b and c)`, fordi `and` binder sterkere enn `or`", "`(a or b) and c`, fordi uttrykket regnes fra venstre mot høyre", "`(a or b) and (a or c)`, fordi `or` fordeles over `and`", "`a or b or c`, fordi `and` og `or` er like sterke her"],
      explanation: "`and` binder sterkere enn `or`, så `b and c` regnes først. Venstre-mot-høyre gjelder bare mellom like sterke operatorer. Python fordeler ingenting automatisk, og `and` og `or` er ikke like sterke.",
    },
    {
      question: "Hva er `not (x > 3)` det samme som?",
      options: ["`x <= 3`", "`x < 3`", "`x >= 3`", "`x != 3`"],
      explanation: "Det motsatte av «større enn 3» er «mindre enn eller lik 3», så likhetstegnet må bli med. `x < 3` glemmer tilfellet der `x` er nøyaktig 3. `x >= 3` snur ulikheten feil vei. `x != 3` er sann for alle andre tall enn 3, også store.",
    },
    {
      question: "Hvorfor krasjer ikke `'abc'.isdigit() and int('abc') > 0`?",
      options: ["`and` kortslutter, så høyre side regnes aldri ut når venstre er usann", "`int` gir `0` i stedet for feil når teksten ikke er et tall", "Sammenligningen `> 0` regnes ut før konverteringen på venstre side", "Feilen fanges automatisk fordi uttrykket står i en betingelse"],
      explanation: "Venstre side er usann, og da er svaret allerede avgjort, så `int('abc')` blir aldri kjørt. `int` gir ikke 0 på ugyldig tekst — den gir `ValueError`. Sammenligningen kan ikke regnes ut før verdien finnes. Og et uttrykk fanger ingen feil av seg selv.",
    },
    {
      question: "Hvilken av disse verdiene teller som **sann** i en betingelse?",
      options: ["Teksten `'0'`, fordi den inneholder ett tegn", "Tallet `0`, fordi tallet finnes og har en verdi", "Den tomme teksten `''`, fordi den er en gyldig verdi", "Den tomme lista `[]`, fordi lista finnes"],
      explanation: "For tekst avgjør antall tegn, og `'0'` har ett tegn, så den er sann. Tallet 0, den tomme teksten og den tomme lista er alle tre blant de faste usanne verdiene, uansett at de finnes som verdier.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\np = 75\nif p >= 90:\n    print('A')\nelif p >= 70:\n    print('C')\nelif p >= 60:\n    print('D')\n```",
      options: ["`C`", "`C` og `D` på hver sin linje", "`D`", "Ingenting"],
      explanation: "Den første sanne testen i kjeden er `p >= 70`, og resten hoppes over, så bare `C` skrives. To linjer ville krevd selvstendige `if`-setninger uten `elif`. `D` ville krevd at den andre testen var usann. Og noe skrives, siden minst én test slår til.",
    },
    {
      question: "Hva er forskjellen på `if` etterfulgt av `elif` og to selvstendige `if`-setninger?",
      options: ["I en kjede kjøres høyst én blokk; to selvstendige tester prøves begge", "I en kjede prøves begge testene; to selvstendige tester stopper ved den første sanne", "En kjede krever `else` til slutt, mens selvstendige tester ikke gjør det", "En kjede kan bare brukes når betingelsene tester samme variabel"],
      explanation: "`elif` prøves bare når det foregående var usant, så høyst én blokk kjøres — mens selvstendige `if`-er prøves hver for seg. Det andre svaret snur forholdet. `else` er valgfri i en kjede. Og en kjede kan gjerne teste ulike variabler.",
    },
    {
      question: "Hva returnerer `test(-2, -2)` når `def test(x, y): return (x > 0 and y > 0) or (x == y)`?",
      options: ["`True`, fordi de to tallene er like", "`False`, fordi begge tallene er negative", "`True`, fordi begge tallene har samme fortegn", "`False`, fordi venstre side av `or` avgjør resultatet"],
      explanation: "Venstre del er usann fordi tallene ikke er positive, men høyre del er sann fordi de er like, og `or` krever bare én sann side. Fortegnet i seg selv er ikke testet noe sted. Og `or` avgjøres ikke av venstre side alene når den er usann.",
    },
    {
      question: "Hva gir `3 == '3'`?",
      options: ["`False`, fordi et tall aldri er lik en tekst", "`True`, fordi begge representerer verdien tre", "Programmet stopper med `TypeError`", "`True`, fordi Python konverterer teksten før sammenligningen"],
      explanation: "`==` sammenligner både verdi og type, og et tall er aldri lik en tekst, så svaret er `False` uten feilmelding. Python konverterer ikke automatisk. `TypeError` kommer bare hvis du bruker `<` eller `>` mellom tall og tekst.",
    },
    {
      question: "Hvilken skrivemåte er den sensor forventer for en funksjon som skal svare sant eller usant?",
      options: ["`return a > b`", "`if a > b: return True` fulgt av `else: return False`", "`return bool(if a > b)`", "`return (a > b) == True`"],
      explanation: "Sammenligningen er allerede en sannhetsverdi, så den returneres direkte — og faget vurderer konsishet eksplisitt. `if`/`else`-varianten er riktig, men unødig lang. `bool(if ...)` er ikke gyldig Python i det hele tatt. Og å sammenligne med `True` legger bare til et ledd uten virkning.",
    },
    {
      question: "Hva skriver `print(0 <= 100 < 100)` ut?",
      options: ["`False`", "`True`", "`0`", "Programmet stopper med `SyntaxError`"],
      explanation: "Kjedet sammenligning krever at begge ulikhetene holder, og `100 < 100` er usann. `True` ville krevd at den øvre grensen var med. Utskriften er en sannhetsverdi, ikke et tall. Og kjedet sammenligning er fullt lovlig i Python.",
    },
    {
      question: "Hva er `not b` når `b` har verdien `False`?",
      options: ["`True`", "`False`", "`None`", "`0`"],
      explanation: "`not` snur sannhetsverdien, så det motsatte av usann er sann. `False` ville betydd at `not` ikke gjorde noe. `None` er en helt annen verdi som betyr «ingen verdi». Og `0` er tallet som teller som usant, ikke resultatet av `not`.",
    },
    {
      question: "En kjede tester `alder < 6`, så `alder <= 17`, så `alder <= 66`. Hva betyr den andre testen i praksis?",
      options: ["At alderen er minst 6 og høyst 17, siden de yngre allerede er fanget", "At alderen er høyst 17, uten noen nedre grense i det hele tatt", "At alderen er minst 6, siden den øvre grensen håndteres senere", "At alderen er nøyaktig 17, siden de andre verdiene dekkes av naboene"],
      explanation: "En `elif` prøves bare når alt foran var usant, så «under 6» er allerede utelukket, og testen dekker 6 til og med 17. Uten den underforståtte nedre grensen ville testen også fanget en toåring. Den øvre grensen står eksplisitt i testen selv, og den dekker mer enn ett årstall.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nt = 8\nv = 4\nif t < 5:\n    if v > 10:\n        print('a')\n    else:\n        print('b')\nelse:\n    print('c')\n```",
      options: ["`c`", "`b`", "`a`", "`b` og `c` på hver sin linje"],
      explanation: "Den ytre testen er usann fordi 8 ikke er mindre enn 5, så hele den indre blokken hoppes over og det ytre `else` kjøres. `b` ville krevd at den ytre testen var sann. `a` ville i tillegg krevd sterk vind. Og bare én av grenene kan kjøres.",
    },
    {
      question: "Hva er verdien av `'Å' < 'a'`?",
      options: ["`True`, fordi store bokstaver kommer før små i tegnrekkefølgen", "`False`, fordi bokstaver sammenlignes alfabetisk etter norsk alfabet", "`False`, fordi tegn med bokstavtegn alltid regnes som like store", "Programmet stopper, fordi tegnene tilhører ulike alfabeter"],
      explanation: "Sammenligning av tekst følger tegnenes plass i tegnrekkefølgen, og store bokstaver ligger foran små, så uttrykket er sant. Norsk alfabetisk rekkefølge følges ikke automatisk. Tegn er ikke like store, og sammenligning av tekst stopper aldri programmet.",
    },
    {
      question: "Hvorfor gir `if x = 3:` en feilmelding?",
      options: ["Ett likhetstegn er tilordning, og en tilordning kan ikke stå som betingelse", "Ett likhetstegn sammenligner, men bare mellom variabler av samme type", "Betingelsen mangler kolon, som er obligatorisk etter `if`", "Tallet 3 kan ikke brukes som betingelse fordi det ikke er en sannhetsverdi"],
      explanation: "`=` setter inn en verdi, og Python nekter å tolke det som en test — resultatet er `SyntaxError`. Sammenligning skrives med to likhetstegn. Kolonet står faktisk der. Og tallet 3 kunne godt vært en betingelse; det ville telt som sant.",
    },
    {
      question: "Hva gir `bool('')`?",
      options: ["`False`", "`True`", "`''`", "`None`"],
      explanation: "Den tomme teksten er blant de faste usanne verdiene, siden den ikke har noen tegn. `True` ville krevd minst ett tegn. `bool` gir alltid en sannhetsverdi, aldri teksten tilbake, og aldri `None`.",
    },
    {
      question: "Hva skriver `print(4 > 3 and 3 > 4 or 2 > 1)` ut?",
      options: ["`True`", "`False`", "`None`", "Programmet stopper med `SyntaxError`"],
      explanation: "`and` regnes først: `4 > 3 and 3 > 4` er usann. Deretter er `usann or 2 > 1` sann, så svaret er `True`. `False` ville krevd at `or` ble regnet først. Et boolsk uttrykk gir aldri `None`, og uttrykket er syntaktisk helt lovlig.",
    },
  ],
  'tdt4110-1-3': [
    {
      question: "Hvor mange runder går `for i in range(5):`, og hva er den siste verdien `i` får?",
      options: ["Fem runder, og den siste verdien er 4", "Fem runder, og den siste verdien er 5", "Fire runder, og den siste verdien er 4", "Seks runder, og den siste verdien er 5"],
      explanation: "`range(5)` gir verdiene 0 til 4, altså fem runder med 4 som siste verdi. Å tro at 5 er med, er selve av-én-feilen. Fire runder ville krevd `range(4)`, og seks runder ville krevd `range(6)`.",
    },
    {
      question: "Hvilke plassnummer treffer `range(1, len(x), 2)` når `x` har fem elementer?",
      options: ["1 og 3", "0, 2 og 4", "1, 2, 3 og 4", "2 og 4"],
      explanation: "Rekka starter på 1 og hopper to av gangen, og stopper før 5, så den treffer 1 og 3. Plassene 0, 2 og 4 ville krevd start på 0. Alle plassene fra 1 ville krevd at steget manglet. Plassene 2 og 4 ville krevd start på 2.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [4, 7, 2, 9]\nfor i in range(1, len(tall), 2):\n    tall[i] = 0\nprint(tall)\n```",
      options: ["`[4, 0, 2, 0]`", "`[0, 7, 0, 9]`", "`[0, 0, 0, 0]`", "`[4, 0, 0, 9]`"],
      explanation: "Rekka treffer plass 1 og 3, så det andre og det fjerde elementet nullstilles. Å nullstille plass 0 og 2 ville krevd start på 0. Alle fire ville krevd at steget manglet. De to midterste ville krevd rekka fra 1 til 3.",
    },
    {
      question: "Hva gir `range(10, 0, -2)`?",
      options: ["10, 8, 6, 4, 2", "10, 8, 6, 4, 2, 0", "0, 2, 4, 6, 8, 10", "En tom rekke"],
      explanation: "Rekka teller nedover fra 10 og stopper før 0, så nullen faller utenfor. Å ha 0 med ville krevd stoppverdien −1. Rekka teller nedover, ikke oppover. Og den er ikke tom, siden startverdien ligger over stoppverdien.",
    },
    {
      question: "Hvor mange innerste runder gir dette?\n\n```python\nfor i in range(3):\n    for j in range(4):\n        pass\n```",
      options: ["12, fordi grensene er uavhengige og ganges sammen", "7, fordi de to løkkene kjøres etter hverandre", "4, fordi den indre løkka avgjør antallet alene", "3, fordi den ytre løkka avgjør antallet alene"],
      explanation: "Den indre løkka kjøres helt ferdig for hver ytre runde, så det blir tre ganger fire. Å legge sammen ville forutsatt at løkkene sto etter hverandre, ikke nøstet. Ingen av løkkene avgjør antallet alene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ns = 0\nfor i in range(4):\n    for j in range(i):\n        s += 1\nprint(s)\n```",
      options: ["`6`", "`16`", "`10`", "`4`"],
      explanation: "Den indre løkka går 0, 1, 2 og 3 runder for de fire ytre rundene, og summen er 6. Svaret 16 forutsetter fire indre runder hver gang. Svaret 10 ville krevd at den indre gikk 1 til 4 runder. Svaret 4 teller bare de ytre rundene.",
    },
    {
      question: "Hvorfor stopper ikke `n = 0` fulgt av `while n != 10: n += 3`?",
      options: ["Fordi `n` hopper fra 9 til 12 og aldri treffer 10 eksakt", "Fordi `!=` alltid er sann når venstre side er et tall", "Fordi `n += 3` ikke endrer `n`, bare leser verdien", "Fordi betingelsen sjekkes etter runden i stedet for før"],
      explanation: "Betingelsen krever et eksakt treff, og verdiene blir 0, 3, 6, 9, 12 — 10 er aldri blant dem. `!=` er ikke alltid sann; den er usann ved treff. `+=` endrer faktisk variabelen. Og en `while` sjekker alltid før runden.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nn = 12\nwhile n % 2 == 0:\n    n = n // 2\nprint(n)\n```",
      options: ["`3`", "`1`", "`6`", "`3.0`"],
      explanation: "12 halveres til 6, som halveres til 3, og der stopper løkka fordi 3 er et oddetall. Svaret 1 ville krevd at også oddetall ble halvert. Svaret 6 stopper én runde for tidlig. Og desimalformen ville krevd `/` i stedet for `//`.",
    },
    {
      question: "Hvor står startverdien til en akkumulator?",
      options: ["Før løkka, slik at den ikke nullstilles for hver runde", "Inne i løkka, slik at den settes på nytt hver runde", "Etter løkka, slik at resultatet er klart når den brukes", "I selve `range`-uttrykket, som første argument"],
      explanation: "Settes startverdien før løkka, får den bygget seg opp gjennom alle rundene. Settes den inne i løkka, nullstilles den hver gang, og resultatet blir bare det siste leddet. Etter løkka ville den slettet resultatet, og `range` styrer bare tellevariabelen.",
    },
    {
      question: "Hva gir `enumerate(['a', 'b'])` i en `for`-løkke med to variabler?",
      options: ["Parene `(0, 'a')` og `(1, 'b')`", "Parene `(1, 'a')` og `(2, 'b')`", "Parene `('a', 0)` og `('b', 1)`", "Bare verdiene `'a'` og `'b'`"],
      explanation: "`enumerate` gir plassnummeret først og verdien etterpå, og nummereringen starter på 0. Å starte på 1 ville krevd et ekstra argument. Rekkefølgen er ikke omvendt. Og bare verdiene får du med en vanlig `for`-løkke.",
    },
    {
      question: "Hva gjør `break` i en nøstet løkke?",
      options: ["Avbryter bare den innerste løkka den står i", "Avbryter alle løkkene og går ut av begge", "Hopper til neste runde i den innerste løkka", "Avbryter den ytre løkka og fortsetter i den indre"],
      explanation: "`break` gjelder bare den løkka den står direkte i, så den ytre fortsetter. Å bryte ut av begge krever en ekstra mekanisme, for eksempel en `return`. Å hoppe til neste runde er `continue`. Og den ytre løkka kan ikke avbrytes fra innsiden alene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfor i in range(2):\n    for j in range(2):\n        print(i, j)\n```",
      options: ["Fire linjer: `0 0`, `0 1`, `1 0`, `1 1`", "Fire linjer: `0 0`, `1 0`, `0 1`, `1 1`", "To linjer: `0 0` og `1 1`", "Fire linjer: `00`, `01`, `10`, `11`"],
      explanation: "Den indre løkka går helt ferdig for hver ytre runde, så rekkefølgen er `0 0`, `0 1`, `1 0`, `1 1`. Den andre rekkefølgen ville krevd at løkkene byttet plass. To linjer ville krevd én felles løkke. Og `print` med komma setter et mellomrom mellom verdiene.",
    },
    {
      question: "Hvor mange ganger kjører kroppen i `for i in range(5, 5):`?",
      options: ["Null ganger, uten feilmelding", "Én gang, med `i` lik 5", "Fem ganger, som `range(5)`", "Programmet stopper med `ValueError`"],
      explanation: "Start og stopp er like, så rekka er tom og kroppen kjøres aldri — helt uten feilmelding. Én runde ville krevd `range(5, 6)`. Fem runder ville krevd bare ett argument. Og en tom rekke er fullt lovlig.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfor c in 'sol':\n    print(c, end='-')\nprint()\n```",
      options: ["`s-o-l-`", "`s-o-l`", "`sol-`", "`-s-o-l`"],
      explanation: "Løkka går over tegnene i teksten, og `end='-'` legger en bindestrek etter hvert tegn, også det siste. Å utelate den siste streken ville krevd egen håndtering av siste runde. `sol-` ville krevd at hele teksten ble skrevet i én runde. Og streken kommer etter, ikke før.",
    },
    {
      question: "Hva er verdien av `s` etter denne koden?\n\n```python\ns = 0\nfor i in range(1, 6):\n    s += i\n```",
      options: ["`15`", "`10`", "`21`", "`5`"],
      explanation: "Rekka gir 1 til 5, og summen er 15. Svaret 10 ville krevd rekka 1 til 4. Svaret 21 ville tatt med 6, som ligger utenfor. Svaret 5 teller bare antall runder.",
    },
    {
      question: "En `while`-løkke kjører for alltid. Hva er den vanligste årsaken?",
      options: ["Ingenting i kroppen endrer variabelen betingelsen bygger på", "Betingelsen sjekkes bare én gang, ved oppstart", "`while` mangler et innebygd tak på antall runder", "Kroppen inneholder for mange linjer til å kjøre ferdig"],
      explanation: "Løkka stopper bare når betingelsen blir usann, og da må noe i kroppen endre den mot grensen. Betingelsen sjekkes faktisk før hver runde. Noe innebygd tak finnes ikke i noen løkke, og antall linjer i kroppen har ingenting med saken å gjøre.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfor i in range(6):\n    if i % 3 == 0:\n        continue\n    print(i, end=' ')\nprint()\n```",
      options: ["`1 2 4 5 `", "`0 3 `", "`1 2 4 5`", "`0 1 2 4 5 `"],
      explanation: "`continue` hopper over resten av runden når tallet er delelig med 3, så 0 og 3 skrives ikke. De to tallene som er delelige, ville blitt skrevet hvis testen var snudd. Hver utskrift følges av et mellomrom, også den siste, så linja slutter med mellomrom. Og 0 er delelig med 3, siden resten er null.",
    },
    {
      question: "Hva er forskjellen på `for e in x:` og `for i in range(len(x)):`?",
      options: ["Den første gir verdien, den andre gir plassnummeret", "Den første gir plassnummeret, den andre gir verdien", "Den første går bare over lister, den andre bare over tekst", "Den første kjører én runde mindre enn den andre"],
      explanation: "Den korte formen setter variabelen til selve elementet, mens `range(len(x))` gir plassene 0 til én mindre enn lengden. Rollene er ikke omvendt. Begge virker på både lister og tekst. Og begge går like mange runder.",
    },
    {
      question: "Hva blir `antall` etter denne koden?\n\n```python\nmalinger = [12, 15, 9, 11, 4]\nantall = 0\nfor t in malinger:\n    if t >= 10:\n        antall += 1\n```",
      options: ["`3`", "`2`", "`5`", "`4`"],
      explanation: "Tre av verdiene er minst 10: 12, 15 og 11. Svaret 2 utelater en av dem. Svaret 5 teller alle elementene uten å bry seg om testen. Og svaret 4 ville krevd at også 9 kvalifiserte.",
    },
    {
      question: "Hva skjer med `n = n / 2` i stedet for `n = n // 2` i en halveringsløkke?",
      options: ["`n` blir et flyttall, og utskriften får en `.0` til slutt", "`n` blir et heltall, men avrundet oppover i stedet for nedover", "Løkka stopper med `TypeError` fordi resten ikke kan regnes ut", "Ingenting endrer seg, siden begge operatorene gir samme verdi"],
      explanation: "Vanlig divisjon gir alltid flyttall, så verdien blir for eksempel `3.0` i stedet for `3` — dette er felle nummer ni i bokas register. Avrunding oppover skjer ikke i noen av tilfellene. Modulo virker fint på flyttall også. Og de to operatorene gir ulik type.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nn = 1\nwhile n < 20:\n    n = n * 3\nprint(n)\n```",
      options: ["`27`", "`9`", "`20`", "`81`"],
      explanation: "Verdiene blir 3, 9 og 27, og løkka stopper først etter at 27 har passert 20. Svaret 9 stopper én runde for tidlig. Svaret 20 er grensen, ikke en verdi `n` kan få. Og 81 er én runde for mye.",
    },
    {
      question: "Hvilken kontroll avslører raskest en av-én-feil i en løkkegrense på eksamen?",
      options: ["Sett grensen til et lite tall som 2, og tell rundene på papir", "Se etter om løkkevariabelen brukes etter løkka er ferdig", "Kontroller at kroppen har fire mellomrom som innrykk", "Bytt `for` med `while` og se om resultatet blir det samme"],
      explanation: "Med en liten grense ser du med én gang om det blir to eller tre runder, og det avgjør hvilken variant oppgaven trenger. Bruk av løkkevariabelen etterpå sier ingenting om antall runder. Innrykket er en annen slags feil. Og å skrive om løkka koster tid uten å svare på spørsmålet.",
    },
  ],
  'tdt4110-1-4': [
    {
      question: "Hvilken datatype har verdien `input('Alder: ')` gir, når brukeren skriver `42`?",
      options: ["Tekst, altså `str`, uansett svar", "Heltall, altså `int`", "Flyttall, altså `float`", "Sannhetsverdi, altså `bool`"],
      explanation: "`input` gir alltid en streng, uansett hvordan svaret ser ut. Heltall får du først etter `int(...)`. Flyttall krever `float(...)`. Og en sannhetsverdi oppstår aldri av `input`.",
    },
    {
      question: "Hva skjer med `int(input('Tall: '))` når brukeren skriver `to`?",
      options: ["Programmet stopper med `ValueError`", "Variabelen får standardverdien `0`", "Variabelen får teksten `'to'` uendret", "Programmet spør på nytt av seg selv"],
      explanation: "`int` klarer ikke å tolke `to` som et tall og avbryter programmet med `ValueError`. Noen standardverdi settes ikke. Teksten kommer ikke gjennom, siden `int` ble kalt. Og Python spør aldri på nytt av seg selv.",
    },
    {
      question: "Hva er `'-5'.isdigit()`?",
      options: ["`False`, fordi minustegnet ikke er et siffer", "`True`, fordi resten av tegnene er sifre", "`True`, fordi teksten beskriver et helt tall", "Programmet stopper, fordi tallet er negativt"],
      explanation: "Metoden krever at hvert eneste tegn er et siffer, og minustegnet er ikke det. At resten er sifre hjelper ikke. Betydningen av teksten spiller ingen rolle. Og metoden stopper aldri programmet; den gir bare `False`.",
    },
    {
      question: "Gyldighetstesten er `0 <= t and t <= 23`. Hva blir den negerte formen?",
      options: ["`t < 0 or t > 23`", "`t < 0 and t > 23`", "`t <= 0 or t >= 23`", "`0 > t or t > 24`"],
      explanation: "Når et og-uttrykk negeres, blir det et eller-uttrykk, og hver sammenligning snus, så svaret er at verdien er under null eller over 23. Formen med `and` kan aldri bli sann, siden et tall ikke kan være både under 0 og over 23. Formen `t <= 0 or t >= 23` flytter likhetstegnene og avviser de lovlige grenseverdiene 0 og 23. Og `0 > t or t > 24` slipper gjennom verdien 24, som er utenfor intervallet.",
    },
    {
      question: "Hvorfor må `.isdigit()` stå før `int(...)` i en `and`-betingelse?",
      options: ["Fordi `and` kortslutter, så konverteringen kjøres bare på ren sifertekst", "Fordi `int` virker bare på tekst som allerede er testet én gang før", "Fordi Python krever at metodekall står før funksjonskall i et uttrykk", "Fordi `.isdigit()` gjør teksten om til et tall som `int` kan ta imot"],
      explanation: "Er venstre side usann, regnes høyre side aldri ut, og `int` slipper å møte ugyldig tekst. `int` har ingen hukommelse om tidligere tester. Python har ingen regel om rekkefølgen på metoder og funksjoner. Og `.isdigit()` gjør ingenting med teksten; den bare svarer sant eller usant.",
    },
    {
      question: "En valideringsløkke bruker `if` i stedet for `while`. Hva blir konsekvensen?",
      options: ["Brukeren får bare én ny sjanse, og programmet går videre", "Programmet spør i det uendelige og kommer aldri videre i koden", "Programmet stopper med `SyntaxError`, fordi `if` ikke kan spørre", "Ingen forskjell, siden begge to tester nøyaktig samme betingelse"],
      explanation: "En `if` kjører kroppen høyst én gang, så etter én ny sjanse fortsetter programmet med et svar som fortsatt kan være ugyldig. Uendelig spørring krever en `while` uten oppdatering. Koden er syntaktisk lovlig. Og forskjellen er nettopp at `while` gjentar.",
    },
    {
      question: "Hva mangler i denne løkka?\n\n```text\nsvar = input('Alder: ')\nwhile not svar.isdigit():\n    print('Skriv et helt tall.')\n```",
      options: ["Et nytt `input`-kall inne i løkka, ellers stopper den aldri", "En `else`-gren som håndterer de gyldige svarene til slutt", "En konvertering med `int` på linja rett før `while`-linja", "Et `break` rett etter feilmeldingen, som avslutter løkka"],
      explanation: "Ingenting endrer `svar` inne i løkka, så betingelsen forblir sann for alltid — spørsmålet må stilles på nytt der. En `else` ville ikke gjort betingelsen usann. Konvertering før testen ville tvert imot fått programmet til å krasje. Og et `break` ville sluppet gjennom det ugyldige svaret.",
    },
    {
      question: "Hva er en sentinel?",
      options: ["En avtalt verdi som betyr at brukeren er ferdig med å legge inn", "En variabel som teller hvor mange ganger løkka har kjørt rundt", "En feilmelding som vises når svaret er utenfor lovlig intervall", "En funksjon som sjekker om en tekst kan gjøres om til et heltall"],
      explanation: "Sentinelen er stoppsignalet, typisk en blank linje, som skiller ekte data fra «nå er det slutt». En rundeteller er noe helt annet. Feilmeldingen hører til valideringen. Og testfunksjonen er gyldighetstesten, ikke sentinelen.",
    },
    {
      question: "Brukeren trykker bare enter. Hva gir `input('Navn: ')` da?",
      options: ["Den tomme teksten `''`", "Verdien `None`", "Et mellomrom, altså `' '`", "Programmet venter til noe faktisk skrives"],
      explanation: "En blank linje gir en streng uten tegn, og den teller som usann i en betingelse. `None` returneres aldri av `input`. Et mellomrom ville krevd at brukeren trykket mellomromstasten. Og enter avslutter innlesingen selv om linja er tom.",
    },
    {
      question: "Hvorfor er `0` en dårlig sentinel for «antall enheter»?",
      options: ["Fordi null kan være et ekte svar, så løkka avsluttes for tidlig", "Fordi `input` ikke er i stand til å gi tallet null som svar", "Fordi en sentinel må være en tekst og kan aldri være et tall", "Fordi tallet null alltid teller som sant i en betingelse"],
      explanation: "En sentinel må være en verdi som aldri opptrer som ekte data, og null enheter er et fullt tenkelig svar. `input` kan selvsagt gi teksten `'0'`. Sentinelen kan godt være et tall, så lenge den er umulig som data. Og tallet null teller nettopp som usant, ikke sant.",
    },
    {
      question: "Hva returnerer `les_time()` når brukeren skriver `abc`, så `30`, så `14`?\n\n```text\ndef les_time():\n    svar = input('Time: ')\n    while not svar.isdigit() or int(svar) > 23:\n        svar = input('Time: ')\n    return int(svar)\n```",
      options: ["Tallet `14`, etter tre spørsmål", "Teksten `'14'`, etter tre spørsmål", "Tallet `30`, etter to spørsmål", "Programmet stopper på `abc` med `ValueError`"],
      explanation: "De to første svarene avvises, og det tredje godtas og returneres som et tall fordi `return` konverterer. Teksten kommer ikke ut, siden `int` står i `return`. Verdien 30 er over grensen og avvises. Og `abc` krasjer ikke, fordi `or` kortslutter på `.isdigit()`.",
    },
    {
      question: "Hva er forskjellen på `while navn != '':` og `while navn:`?",
      options: ["Ingen — tom tekst teller som usann, så betingelsene er like", "Den første stopper på tom tekst, mens den andre aldri stopper", "Den andre virker bare på tall og ikke på tekst av noe slag", "Den første krever at `navn` først er konvertert med `str`"],
      explanation: "Den tomme teksten er blant de faste usanne verdiene, så begge betingelsene blir usanne på nøyaktig samme svar. Den korte formen stopper altså like godt. Den virker på alle typer, ikke bare tall. Og noen konvertering trengs ikke, siden `input` allerede gir tekst.",
    },
    {
      question: "Hvilken ledetekst er best for en verdi som må ligge mellom 1 og 500?",
      options: ["`'Antall kilo (1-500): '`", "`'Antall kilo mellom en og fem hundre: '`", "`'Skriv inn en verdi og trykk enter: '`", "`'Kilo, husk grensene: '`"],
      explanation: "Den beste ledeteksten sier både hva som spørres om og hva som er lovlig, og slutter med et mellomrom så svaret ikke klistrer seg inntil. De øvrige mangler intervallet, og to av dem sier heller ikke hva verdien gjelder.",
    },
    {
      question: "Hvor skal konverteringen stå i en valideringsfunksjon?",
      options: ["Etter at svaret er godkjent, typisk inne i `return`-linja", "I selve `input`-kallet, så verdien er et tall med én gang", "I `while`-betingelsen, før `.isdigit()` sjekkes", "Etter løkka, men bare hvis brukeren svarte riktig første gang"],
      explanation: "Testen må gjøres mens verdien fortsatt er tekst, og konverteringen hører derfor til når svaret er godkjent. Konvertering i `input`-kallet krasjer på ugyldig tekst. Konvertering før `.isdigit()` fjerner nettopp beskyttelsen kortslutningen gir. Og et vilkår om første forsøk gir ingen mening — alle godkjente svar skal konverteres likt.",
    },
    {
      question: "En valideringsfunksjon skriver ut den godkjente verdien i stedet for å returnere den. Hva er problemet?",
      options: ["Verdien kan ikke brukes videre, så funksjonen kan ikke gjenbrukes", "Utskrift er tregere enn retur og gir merkbart dårligere kjøretid", "Python tillater ikke `print` inne i en funksjon som leser inn data", "Verdien blir liggende som tekst og kan ikke konverteres i ettertid"],
      explanation: "En funksjon som bare skriver ut, gir ingenting tilbake til kalleren, og faget krever nettopp at senere deloppgaver kan bygge på de tidligere. Kjøretid er ikke poenget her. `print` er fullt lovlig inne i en funksjon. Og typen på verdien har ingenting med utskriften å gjøre.",
    },
  ],
  'tdt4110-2-1': [
    {
      question: "Hva returnerer en funksjon som ikke har noen `return`-setning i kroppen?",
      options: ["`None` — verdien Python gir automatisk når kjøringen faller ut nederst", "`0`, som er den nøytrale startverdien for tallregning i Python", "Verdien til den siste variabelen som fikk en verdi i funksjonen", "Ingenting i det hele tatt, så kallet kan ikke stå i et uttrykk"],
      explanation: "Faller kjøringen ut nederst uten å møte `return`, gir funksjonen `None`. Alternativet med `0` er fellen fra funksjoner som teller eller summerer, men Python gjetter aldri en tallverdi. Alternativet om den siste variabelen er den vanligste misforståelsen — lokale variabler forsvinner ved retur. Og kallet kan godt stå i et uttrykk: det har en verdi, og verdien er `None`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef pris(antall, stykk=15):\n    return antall * stykk\n\nprint(pris(3))\nprint(pris(3, 20))\n```",
      options: ["`45` og deretter `60`", "`60` og deretter `45`", "`45` og deretter `45`", "`3` og deretter `20`"],
      explanation: "Første kall utelater andre argument, så standardverdien 15 brukes: 3 ganger 15 er 45. Andre kall overstyrer den med 20 og gir 60. Svaret med `60` først bytter om kallene, og svaret med `45` to ganger antar at standardverdien ikke kan overstyres.",
    },
    {
      question: "Hvor i parameterlista må en parameter med standardverdi stå?",
      options: ["Sist, etter alle parametere som ikke har standardverdi", "Først, foran alle parametere som ikke har standardverdi", "Hvor som helst, så lenge kallet bruker navngitte argumenter", "Alene — en funksjon kan ha høyst én slik parameter"],
      explanation: "`def f(pris, prosent=10)` er lovlig, mens `def f(prosent=10, pris)` er en syntaksfeil, fordi Python ellers ikke kunne koble posisjonsargumentene. Alternativet om at plasseringen er fri når kallet bruker navn, blander sammen definisjonen og kallet — regelen gjelder `def`-linja. En funksjon kan ha så mange standardverdier den vil, så lenge de står sist.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef differanse(a, b):\n    return a - b\n\nprint(differanse(b=3, a=10))\n```",
      options: ["`7`, fordi navngitte argumenter kobles på navn", "`-7`, fordi argumentene kobles i den rekkefølgen de står", "`13`, fordi navngitte argumenter legges sammen", "En feilmelding, fordi rekkefølgen i kallet er snudd"],
      explanation: "Navngitte argumenter kobles på parameternavn, ikke på plassering, så `a` er 10 og `b` er 3. Svaret `-7` er fellen: å lese kallet som `differanse(3, 10)`. Å snu rekkefølgen på navngitte argumenter er fullt lovlig, så det blir ingen feilmelding.",
    },
    {
      question: "En global variabel heter `antall`. Inne i en funksjon står linja `antall = 99`. Hva skjer med den globale variabelen?",
      options: ["Den er urørt — tilordningen lager en ny, lokal variabel i funksjonen", "Den får verdien 99 med én gang funksjonen blir kalt", "Den får verdien 99 idet funksjonen returnerer til den som kalte", "Programmet stopper, fordi to variabler ikke kan hete det samme"],
      explanation: "Tilordning inne i en funksjon lager alltid et lokalt navn, også når et globalt navn er stavet likt; den globale verdien står igjen uendret. De to alternativene om at den globale får verdien 99, er nettopp fellen sporingsoppgavene tester. Navnekollisjon er ikke en feil i Python — det er hele poenget med lokale navn.",
    },
    {
      question: "En funksjon slutter med `return minste, storste`. Hva skjer ved kallet `a = min_og_maks(tall)`?",
      options: ["`a` blir et tuppel med begge verdiene, i den rekkefølgen `return` har", "`a` blir bare den første verdien, og den andre kastes bort", "`a` blir bare den siste verdien, som overskriver den første", "Kallet feiler, fordi to verdier krever to navn på venstre side"],
      explanation: "Flere verdier etter `return` pakkes til ett tuppel, og ett navn tar imot hele tuppelet. Alternativene om at bare den første eller siste verdien beholdes, er den vanligste gjetningen. At kallet skulle feile er også galt — det er bare utpakking med feil *antall* navn (`a, b, c = ...`) som gir `ValueError`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef del_og_rest(t, n):\n    return t // n, t % n\n\nprint(del_og_rest(17, 5))\n```",
      options: ["`(3, 2)`", "`3 2`", "`[3, 2]`", "`3.4 2`"],
      explanation: "Uten utpakking skrives selve tuppelet, og Python skriver et tuppel med parenteser og komma. Formen `3 2` er det du får hvis verdiene først pakkes ut og skrives med `print(a, b)`. Hakeparentesene hører til lister, ikke tupler, og `17 // 5` er 3 og ikke 3.4 — det er `/` som gir flyttall.",
    },
    {
      question: "Hvor må `return` stå i en funksjon som skal summere alle tallene i en liste?",
      options: ["Etter løkka, med samme innrykk som `for`-linja selv", "Inne i løkka, rykket inn på samme nivå som oppdateringen", "Før løkka, slik at startverdien er satt når løkka begynner", "Både før og etter løkka, så begge utfallene er dekket"],
      explanation: "Summen er ikke ferdig før løkka er gjennomført, så `return` hører etter løkka, på samme innrykksnivå som `for`. Står den inne i løkka, avsluttes funksjonen etter første element — en av de dyreste innrykksfeilene. `return` før løkka ville returnert startverdien 0, og en funksjon kan uansett bare returnere én gang per kjøring.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef vis_sum(a, b):\n    print(a + b)\n\nsvar = vis_sum(3, 4)\nprint(svar)\n```",
      options: ["`7` og deretter `None`", "`7` og deretter `7`", "`None` og deretter `7`", "Bare `7`, siden `svar` er tom"],
      explanation: "Funksjonen skriver ut 7, men har ingen `return`, så `svar` blir `None` og skrives på neste linje. Svaret med `7` to ganger er fellen: å tro at det som skrives ut, også returneres. Rekkefølgen kan ikke snus, for utskriften inne i funksjonen skjer først, og `print(svar)` skriver `None` og ikke en tom linje.",
    },
    {
      question: "Hva er den ryddigste kroppen i en funksjon som skal svare på om en alder er 18 eller mer?",
      options: ["`return alder >= 18`, siden sammenligningen alt er en boolsk verdi", "`if alder >= 18: return 'ja'` og `else: return 'nei'` som svar", "`print(alder >= 18)`, slik at svaret vises for den som kaller", "`return int(alder >= 18)`, så svaret blir et tall som kan summeres"],
      explanation: "En sammenligning er allerede `True` eller `False` og kan returneres direkte; formen med `if`/`else` gir samme svar og full uttelling, men er lengre enn nødvendig, og konsishet vurderes. Å returnere strengene `'ja'`/`'nei'` gjør at svaret ikke kan brukes i en `if`-test videre. Og `print` returnerer ingenting, så den som kaller, får `None`.",
    },
    {
      question: "Hvilket variabelnavn skal du aldri bruke i en funksjon som legger sammen tall?",
      options: ["`sum`, fordi navnet da skygger den innebygde funksjonen `sum`", "`total`, fordi navnet allerede er reservert av Python selv", "`s`, fordi navn på ett tegn ikke er lovlige i en funksjonskropp", "`resultat`, fordi navnet er for langt til å brukes i en løkke"],
      explanation: "Å tilordne `sum = 0` gjør at den innebygde `sum(...)` ikke lenger virker i resten av programmet — det er felle #14 i bokas register. `total`, `s` og `resultat` er alle helt kurante navn; korte navn er lovlige, og lengden på et navn har ingen betydning for om det kan brukes.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef dobbel(x):\n    return x * 2\n\nprint(dobbel(dobbel(3)))\n```",
      options: ["`12`", "`6`", "`9`", "`36`"],
      explanation: "Det innerste kallet gjøres ferdig først og gir 6, som blir argumentet til det ytre kallet: 6 ganger 2 er 12. Svaret `6` er fellen der bare ett av kallene regnes med. Svarene `9` og `36` kommer av å lese `x * 2` som en potens eller å doble to ganger på feil verdi.",
    },
    {
      question: "En funksjon skal finne den laveste temperaturen i en liste. Hvorfor er `minste = 0` en dårlig startverdi?",
      options: ["Fordi svaret blir 0 så snart alle målingene er over null grader", "Fordi 0 ikke kan sammenlignes med flyttall som `-3.5` i en test", "Fordi startverdien alltid må settes inne i løkka, ikke før den", "Fordi `minste` må ha samme navn som parameteren for å virke"],
      explanation: "Med startverdien 0 finner løkka aldri noe mindre når alle målingene er positive, og funksjonen svarer 0 — en verdi som ikke engang finnes i dataene. Riktig startverdi er første element. Heltall og flyttall sammenlignes fritt i Python, startverdien skal nettopp settes før løkka, og navnet på variabelen har ingenting med parameternavnet å gjøre.",
    },
    {
      question: "Hva skjer med `verdier[0]` når funksjonen kalles med en tom liste?",
      options: ["Programmet stopper med `IndexError`, så tomtesten må stå først", "Uttrykket gir `None`, som funksjonen kan returnere videre", "Uttrykket gir 0, fordi en tom liste regnes som en liste med nuller", "Løkka hopper over linja, siden det ikke finnes noen elementer"],
      explanation: "En tom liste har ingen element 0, så oppslaget avbryter programmet med `IndexError` — derfor står `if len(verdier) == 0: return None` aller først i robuste fasiter. Python fyller ikke inn `None` eller 0 for manglende elementer. Og linja står før løkka, så løkka kan ikke redde den.",
    },
    {
      question: "Hvilken av formene er en syntaksfeil i et kall?",
      options: ["`f(a=10, 3)` — et posisjonsargument etter et navngitt argument", "`f(10, b=3)` — et navngitt argument etter et posisjonsargument", "`f(b=3, a=10)` — to navngitte argumenter i omvendt rekkefølge", "`f(10, 3)` — to posisjonsargumenter uten navn i det hele tatt"],
      explanation: "Navngitte argumenter må stå etter alle posisjonsargumenter i kallet, så `f(a=10, 3)` avvises allerede før programmet kjører. Blandingsformen `f(10, b=3)` er derimot helt vanlig i fasitene. De to andre formene er også lovlige — navngitte argumenter kan stå i hvilken som helst innbyrdes rekkefølge.",
    },
    {
      question: "Sjanger C ber om én setning om hva funksjonen gjør. Hvilket svar gir best uttelling for en funksjon som summerer de positive tallene i en liste?",
      options: ["«Returnerer summen av de positive tallene i lista.»", "«Den går gjennom lista med en løkke og legger sammen tall.»", "«Funksjonen bruker en variabel `total` og en `if`-test inni.»", "«Den regner ut noe med tallene og gir et resultat tilbake.»"],
      explanation: "Svaret skal si *hva* funksjonen oppnår, med begge de avgjørende detaljene: at det er en sum, og at bare de positive tallene teller med. Svaret om løkka og det om variabelen `total` beskriver *hvordan* koden virker — det er felle #13, ordrik og upresis forklaring. Det siste svaret er kort, men så vagt at det passer på nesten hvilken som helst funksjon.",
    },
    {
      question: "En søkefunksjon har `return i` inne i løkka og `return -1` etter løkka. Hva betyr den siste linja?",
      options: ["At løkka gikk helt gjennom uten treff — verdien finnes ikke", "At løkka ble avbrutt av en feil før den rakk å finne noe treff", "At funksjonen skal prøve søket en gang til fra siste indeks", "At det siste elementet i lista alltid regnes som et treff"],
      explanation: "Linja etter løkka nås bare hvis `return i` aldri ble kjørt, altså når ingen elementer passet — derfor er `-1` bokas standardsvar på «ikke funnet» for en indeks. Den nås ikke ved feil, for en feil ville avbrutt hele programmet. Og den gjør verken et nytt søk eller noen antagelse om det siste elementet.",
    },
    {
      question: "Hva er forskjellen på `pant` og `pant(6)` når `pant` er en funksjon?",
      options: ["`pant` er selve funksjonen, mens `pant(6)` er verdien den gir", "`pant` er verdien funksjonen ga sist, mens `pant(6)` kjører den på nytt", "`pant` kjører funksjonen uten argument, mens `pant(6)` sender inn 6", "De er helt likeverdige — parentesen er bare en lesehjelp for deg"],
      explanation: "Uten parentes refererer navnet til funksjonsobjektet selv, og `print(pant)` skriver da noe i retning av «function pant»; med parentes kjøres funksjonen, og uttrykket blir tallet den returnerer. Navnet husker ingen tidligere verdi. Og et navn uten parentes kjører aldri funksjonen — det er nettopp derfor et glemt parentespar gir så merkelige utskrifter.",
    },
  ],
  'tdt4110-2-2': [
    {
      question: "Menyen tester brukerens valg med `if valg == 1:`, men ingen gren treffer noen gang. Hvorfor?",
      options: ["`input()` gir en streng, så testen må være `valg == '1'` med fnutter", "`input()` gir et flyttall, så testen må være `valg == 1.0` med desimal", "`if` kan ikke sammenligne med tall — menyer må bruke `elif` hele veien", "Menyvalg må alltid konverteres med `str()` før de kan sammenlignes"],
      explanation: "`input()` returnerer alltid tekst, og strengen `'1'` er ikke lik tallet 1, så testen er alltid usann. Det er felle #1, glemt konvertering, i sin menyvariant. `input()` gir aldri flyttall, og `if` kan sammenligne med tall — det er bare typene som ikke stemmer her. Konvertering med `str()` er unødvendig, siden verdien allerede er en streng.",
    },
    {
      question: "Hva er den eneste veien ut av en `while True:`-løkke i en meny?",
      options: ["Et `break` i grenen som svarer til avslutningsvalget", "At betingelsen i `while`-linja etter hvert blir usann av seg selv", "At brukeren skriver noe som ingen av grenene tar imot", "Et `return` i hver av grenene, ellers går løkka videre"],
      explanation: "`True` blir aldri usann, så løkka stopper bare når `break` kjøres — mangler det, er det felle #8, en input-løkke som ikke terminerer. Et ugyldig valg havner i `else` og fortsetter løkka. `return` avslutter riktignok også, men det avslutter hele funksjonen og hører ikke i hver gren.",
    },
    {
      question: "En besvarelse lar `finn_beste`, `lag_rapport` og `tell_over` hver åpne og lese datafila selv. Hva er den viktigste innvendingen?",
      options: ["Innlesingskoden står tre steder, og funksjonene er låst til ett filnavn", "Programmet krasjer, fordi en fil bare kan åpnes én gang per kjøring", "Funksjonene får ulike data, siden fila leses på tre ulike tidspunkter", "Python tillater ikke at samme filnavn står i tre forskjellige funksjoner"],
      explanation: "Riktig struktur er at `main` leser dataene én gang og sender dem videre som parameter; ellers har du tre kopier av innlesingen og funksjoner som er låst til ett filnavn. En fil kan åpnes så mange ganger du vil, og filnavnet kan gjentas fritt. Dataene ville dessuten vært de samme alle tre gangene — problemet er strukturen, ikke innholdet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef dobbel(x):\n    return x * 2\n\ndef firedobbel(x):\n    return dobbel(dobbel(x))\n\nprint(firedobbel(5))\n```",
      options: ["`20`", "`10`", "`25`", "`40`"],
      explanation: "Det innerste kallet gir 10, som blir argumentet til det ytre: 10 ganger 2 er 20. Svaret `10` regner bare med ett av de to kallene. `25` er `5 * 5`, og `40` dobler én gang for mye.",
    },
    {
      question: "Hvilken oppgave har `main` i et program bygget på gjenbruk?",
      options: ["Å skaffe dataene, kalle de andre funksjonene og vise resultatet", "Å inneholde løkkene og regnestykkene, siden den ser hele programmet", "Å definere alle de andre funksjonene inne i seg, slik at de er samlet", "Å bli kalt av Python automatisk når fila kjøres, uten noe eget kall"],
      explanation: "`main` delegerer: den har data, kall og utskrift, men verken løkker eller regning — da kan hver deloppgave vurderes for seg. Funksjoner defineres ikke inne i `main` i dette faget. Og Python kaller ingenting av seg selv; du skriver `main()` helt til venstre nederst i fila.",
    },
    {
      question: "Hvor bør menyteksten skrives ut i en menyløkke?",
      options: ["Inne i løkka, så valgene vises på nytt hver eneste runde", "Rett før løkka, så brukeren ser valgene én gang ved oppstart", "I `main`, sammen med dataene, før menyfunksjonen kalles", "Etter løkka, slik at valgene står igjen på skjermen til slutt"],
      explanation: "Menyen står inne i løkka, ellers ser brukeren valgene bare første gang og må huske dem resten av økta. Utskrift etter løkka kommer først når programmet er ferdig, og en meny som vises fra `main`, får det samme problemet som en meny før løkka. Selve valglista kan gjerne ligge i en egen liten funksjon som kalles inne i løkka.",
    },
    {
      question: "Deloppgave b) skal telle forfalte bøker, og deloppgave a) er `er_forfalt(dager)`. Hva gir best uttelling i b)?",
      options: ["En løkke som bruker `if er_forfalt(d):` som test på hvert element", "En løkke som gjentar testen `if d > 28:` direkte i deloppgave b)", "En kopi av hele funksjonen fra a), med nytt navn og samme innhold", "En ny funksjon som teller alle bøkene og trekker fra de som ikke er forfalt"],
      explanation: "Sensor belønner uttrykkelig at senere deloppgaver bruker de tidligere, så kallet til `er_forfalt` er hele poenget med b). Å gjenta grensen `28` gir riktig svar, men mister gjenbruket og gir to steder å endre fristen. En kopi av funksjonen er samme feil i verre form, og omveien om totalen løser ikke problemet.",
    },
    {
      question: "Linja `verdier[0] = 99` skriver en ny verdi over det første elementet i lista. Hva skriver programmet ut?\n\n```python\ndef endre(verdier):\n    verdier[0] = 99\n    return verdier\n\ntall = [1, 2, 3]\nnye = endre(tall)\nprint(tall[0], nye[0])\n```",
      options: ["`99 99`", "`1 99`", "`99 1`", "`1 1`"],
      explanation: "Funksjonen endrer elementet i lista den fikk inn og returnerer den samme lista, så `tall` og `nye` er to navn på ett objekt — det er felle #15, aliasing. Svaret `1 99` er fellen: å tro at returverdien er en ny, uavhengig liste. De to siste svarene forutsetter at endringen ikke skjedde i det hele tatt.",
    },
    {
      question: "Hvorfor skrives konstanter som `GEBYR_PER_BOK = 30` med store bokstaver?",
      options: ["Som et signal til leseren om at verdien ikke endres underveis", "Fordi Python nekter å endre variabler som er skrevet med store bokstaver", "Fordi bare navn med store bokstaver kan leses inne i en funksjon", "Fordi navn med store bokstaver plasseres først når fila kjøres"],
      explanation: "Store bokstaver er en skrivemåte, ikke en regel i språket: Python lar deg gjerne endre verdien, men skrivemåten sier til leseren at du ikke gjør det. Alle globale navn kan leses inne i en funksjon, uansett skrivemåte, og rekkefølgen fila kjøres i, påvirkes ikke av hvordan navnene ser ut.",
    },
    {
      question: "Hva er forskjellen på `break` og `return` inne i en menyløkke?",
      options: ["`break` avslutter bare løkka, mens `return` avslutter hele funksjonen", "`break` avslutter hele funksjonen, mens `return` bare avslutter løkka", "De gjør nøyaktig det samme når de står inne i en `while True:`-løkke", "`break` kan bare stå i en `for`-løkke, mens `return` kan stå i en `while`"],
      explanation: "`break` hopper til første linje etter løkka, og resten av funksjonen kjøres; `return` forlater funksjonen med det samme. I en meny der løkka er det siste i funksjonen, ser de like ut i praksis — men står det kode etter løkka, er forskjellen synlig. `break` virker i begge løkketyper.",
    },
    {
      question: "En menyfunksjon regner ut snittet med en egen løkke i gren 2, i stedet for å kalle `snitt(priser)`. Hva er hovedinnvendingen?",
      options: ["Menyen har overtatt jobben til funksjonen, så koden står nå to steder", "En `for`-løkke er ikke lovlig inne i en `elif`-gren i en menyløkke", "Snittet blir feil, fordi løkka starter på nytt for hver runde i menyen", "Menyen kan da ikke lenger avsluttes med `break` i q-grenen"],
      explanation: "Dispatcheren skal fordele arbeid, ikke gjøre det: med regningen i grenen har du skrevet analysen to ganger, én gang i deloppgaven og én gang i menyen. En løkke er fullt lovlig inne i en gren, snittet blir riktig hver runde, og `break` virker som før — innvendingen er strukturen og gjenbruket.",
    },
    {
      question: "Hvilken rolle har `else`-grenen nederst i en menyløkke?",
      options: ["Den fanger ugyldige valg og sier fra, slik at løkka går en runde til", "Den fanger avslutningsvalget, slik at `break` bare trengs én gang", "Den kjøres etter hver runde, uansett hvilket valg brukeren gjorde", "Den er påkrevd av Python — en `if`-kjede må avsluttes med `else`"],
      explanation: "`else` fanger alt som ikke passet i noen gren, altså skrivefeil og ukjente valg, og gir brukeren en beskjed før løkka fortsetter. Avslutningsvalget har sin egen `elif` med `break`. Bare én gren kjøres per runde, og `else` er valgfri i Python — men uten den tier programmet ved en skrivefeil.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef gebyr(antall, sats=30):\n    return antall * sats\n\nprint(gebyr(3))\nprint(gebyr(3, 45))\n```",
      options: ["`90` og deretter `135`", "`135` og deretter `90`", "`90` og deretter `90`", "`33` og deretter `48`"],
      explanation: "Første kall bruker standardverdien 30 og gir 90; andre kall overstyrer satsen til 45 og gir 135. Svaret der `135` kommer først, bytter om kallene. Svaret `90` to ganger antar at standardverdien ikke kan overstyres, og det siste legger sammen i stedet for å gange.",
    },
    {
      question: "Hva må være oppfylt for at et ledd i en funksjonskjede skal kunne brukes av det neste leddet?",
      options: ["At leddet returnerer resultatet i stedet for å skrive det ut", "At leddet er definert lenger opp i fila enn det neste leddet", "At leddet og det neste leddet har nøyaktig samme parameterliste", "At leddet skriver ut resultatet, slik at det neste kan lese det"],
      explanation: "Et ledd som bare skriver ut, gir `None` tilbake, og da har det neste leddet ingenting å jobbe med — kjeden krever `return`. Rekkefølgen i fila er likegyldig, siden alle definisjoner kjøres før `main()` kalles. Parameterlistene kan gjerne være helt ulike, og utskrift kan ikke leses av et annet ledd.",
    },
    {
      question: "En besvarelse klarer ikke deloppgave a), som skulle lese inn dataene. Hva lønner seg i deloppgave c), som skal bruke resultatet fra a)?",
      options: ["Å skrive c) som om a) virket, og kalle funksjonen derfra", "Å hoppe over c), siden den ikke kan gi poeng uten a)", "Å skrive innlesingen på nytt inne i c), så den blir selvstendig", "Å skrive c) uten parametere og hardkode dataene inne i funksjonen"],
      explanation: "Sensor gir uttelling for riktig struktur i c) selv om a) mangler eller er feil, så kallet skal stå der. Å hoppe over c) gir sikkert null. Å gjenta innlesingen bryter kjeden og gir dobbelt arbeid, og hardkodede data inne i funksjonen fjerner nettopp det deloppgaven testes på.",
    },
    {
      question: "Hvorfor må tallet konverteres i `print('Trent ' + str(minutter) + ' minutter')`?",
      options: ["Fordi `+` mellom en streng og et tall gir `TypeError` i Python", "Fordi `print` bare kan ta imot ett argument når det er tekst inni", "Fordi tallet ellers ville blitt lagt sammen med lengden på teksten", "Fordi `str` runder av tallet, slik at utskriften ikke får desimaler"],
      explanation: "`+` er sammenliming for strenger og addisjon for tall, og blandingen er ikke definert — derfor `str(...)` rundt tallet. Alternativet `print('Trent', minutter, 'minutter')` med komma virker like godt og trenger ingen konvertering. `str` runder ikke av noe; den lager bare tekst av verdien.",
    },
  ],
  'tdt4110-3-1': [
    {
      question: "Hva er `tall[2]` når `tall = [8, 3, 5, 1, 9]`?",
      options: ["`5`", "`3`", "`1`", "`[5]`"],
      explanation: "Tellingen starter på 0, så indeks 2 er det tredje elementet, `5`. Svaret `3` er av-med-én-fella (feilkode #5) — det er indeks 1. Svaret `[5]` ville vært resultatet av utsnittet `tall[2:3]`, som gir ei liste og ikke et element.",
    },
    {
      question: "Hva skriver `print([8, 3, 5, 1, 9][1:4])` ut?",
      options: ["`[3, 5, 1]`", "`[3, 5, 1, 9]`", "`[8, 3, 5, 1]`", "`[3, 5]`"],
      explanation: "Sluttgrensa er eksklusiv, så indeks 1, 2 og 3 blir med: `[3, 5, 1]`. Svaret `[3, 5, 1, 9]` tar sluttgrensa med og er av-med-én. `[8, 3, 5, 1]` teller fra 1 i stedet for fra 0.",
    },
    {
      question: "Hva gir `x[::-1]` når `x = [1, 2, 3]`?",
      options: ["En ny liste `[3, 2, 1]`, mens `x` er uendret", "Lista `[3, 2, 1]`, og `x` er også snudd etterpå", "Verdien `3`, altså det siste elementet i lista", "En feilmelding, fordi steget ikke kan være negativt"],
      explanation: "Et utsnitt lager alltid en ny liste, så `x` står urørt — det er nettopp forskjellen fra `x.reverse()`, som snur originalen. Alternativet om at `x` også er snudd, beskriver `reverse()`. Negativt steg er fullt lovlig og betyr «gå bakover».",
    },
    {
      question: "Hva returnerer `tall.sort()`?",
      options: ["`None` — lista sorteres, men ingen verdi gis tilbake", "Den sorterte lista, som du kan tilordne videre", "En kopi av lista, mens originalen står uendret", "Antall bytter som ble gjort under sorteringen"],
      explanation: "`.sort()` sorterer på plass og returnerer `None`, så `tall = tall.sort()` gjør `tall` til `None` (feilkode #17). Alternativet om at den sorterte lista gis tilbake, beskriver `sorted(tall)`. En kopi lages heller ikke — originalen er endret.",
    },
    {
      question: "Hvilket uttrykk gir elementene på indeks 1, 3 og 5 i lista `m`?",
      options: ["`m[1::2]`", "`m[::2]`", "`m[1:5:2]`", "`m[1:2]`"],
      explanation: "`m[1::2]` starter på indeks 1 og hopper to plasser om gangen, altså 1, 3, 5 og videre. `m[::2]` starter på 0 og gir 0, 2, 4. `m[1:5:2]` stopper før indeks 5 og får derfor bare med 1 og 3.",
    },
    {
      question: "Hva skjer når du kjører `[1, 2] + [3]`?",
      options: ["Du får den nye lista `[1, 2, 3]`", "Du får den nye lista `[4, 2]`", "Du får en feilmelding om ulik lengde", "Du får den nye lista `[1, 2, [3]]`"],
      explanation: "`+` skjøter listene sammen til `[1, 2, 3]`; det er konkatenering, ikke elementvis addisjon. Svaret `[4, 2]` forutsetter at tallene legges sammen parvis, noe Python ikke gjør på lister. Ulik lengde er heller ikke noe problem for `+`.",
    },
    {
      question: "Hva er `len(x[2:6])` når `x` har ti elementer?",
      options: ["`4`", "`5`", "`3`", "`6`"],
      explanation: "Utsnittet tar med indeks 2, 3, 4 og 5, altså fire elementer — differansen mellom grensene. Svaret `5` teller sluttgrensa med og er av-med-én. Svaret `6` forveksler sluttgrensa med antallet.",
    },
    {
      question: "Hva gjør `x.remove(3)` når `x = [3, 7, 3, 5]`?",
      options: ["Fjerner den første treeren, så lista blir `[7, 3, 5]`", "Fjerner alle treere, så lista blir `[7, 5]`", "Fjerner elementet på indeks 3, så lista blir `[3, 7, 3]`", "Fjerner den siste treeren, så lista blir `[3, 7, 5]`"],
      explanation: "`remove` tar en VERDI og fjerner bare den første forekomsten, så lista blir `[7, 3, 5]`. Å fjerne elementet på indeks 3 er `pop(3)` — `remove` tar aldri en indeks. Alle forekomster fjernes ikke av ett kall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [4, 8]\ny = x\ny.append(1)\nprint(x)\n```",
      options: ["`[4, 8, 1]`", "`[4, 8]`", "`[1, 4, 8]`", "`None`"],
      explanation: "`y = x` gir et nytt navn på den samme lista, ikke en kopi, så endringen synes gjennom `x` (feilkode #15). Svaret `[4, 8]` forutsetter at `y` var en kopi — det krever `y = x[:]`. Verdien havner bakerst, ikke først.",
    },
    {
      question: "Hvilken av disse gir en uavhengig kopi av lista `a`?",
      options: ["`b = a[:]`", "`b = a`", "`b = a.copy`", "`b = a[0:-1]`"],
      explanation: "`a[:]` er et utsnitt av hele lista, og utsnitt gir alltid en ny liste. `b = a` gir bare et alias. `a.copy` uten parenteser kaller ikke metoden, og `a[0:-1]` utelater det siste elementet.",
    },
    {
      question: "Hva skriver `print(range(4))` ut?",
      options: ["`range(0, 4)`", "`[0, 1, 2, 3]`", "`[1, 2, 3, 4]`", "`0 1 2 3`"],
      explanation: "`range` er en oppskrift på en tallrekke, ikke ei liste, og skrives ut som `range(0, 4)`. Skal du se tallene som liste, må du skrive `print(list(range(4)))`. Rekka starter dessuten på 0, ikke på 1.",
    },
    {
      question: "Hva gir `sum([])`?",
      options: ["`0`", "`None`", "`[]`", "En `ValueError`"],
      explanation: "`sum` av en tom liste er 0 — den er den eneste snarveien som tåler tom liste. `max([])` og `min([])` gir derimot `ValueError`, som er nettopp den fella dette spørsmålet skiller mot. `None` returneres av metoder som endrer lista.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [5, 2, 9]\ny = sorted(x)\nprint(x)\n```",
      options: ["`[5, 2, 9]`", "`[2, 5, 9]`", "`[9, 5, 2]`", "`None`"],
      explanation: "`sorted` gir en NY sortert liste og lar originalen stå, så `x` er uendret. Svaret `[2, 5, 9]` ville vært riktig hvis linja hadde vært `x.sort()`. Synkende rekkefølge krever `reverse=True`.",
    },
    {
      question: "Hva er `x.index(7)` når `x = [3, 7, 5, 7]`?",
      options: ["`1`", "`3`", "`2`", "`7`"],
      explanation: "`index` gir plassen til den FØRSTE forekomsten, altså 1. Svaret `3` er plassen til den siste forekomsten, som `index` aldri returnerer. Svaret `7` forveksler verdien med indeksen.",
    },
    {
      question: "Hvorfor er `sum = 0` en dårlig idé øverst i et program?",
      options: ["Fordi navnet `sum` da ikke lenger kan brukes som funksjon senere", "Fordi Python ikke tillater at et innebygd navn brukes som variabel", "Fordi variabelen blir global og endres av alle funksjonene", "Fordi summen må starte på 1 for at akkumulering skal virke"],
      explanation: "Tilordningen er lovlig, men den overskriver den innebygde funksjonen `sum`, som dermed er ødelagt resten av programmet (feilkode #14). Python gir ingen feilmelding der — det er nettopp derfor fella er dyr. Akkumulering skal starte på 0.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt = [2, 4, 6, 8]\nt.insert(1, 3)\nprint(t)\n```",
      options: ["`[2, 3, 4, 6, 8]`", "`[2, 4, 3, 6, 8]`", "`[3, 2, 4, 6, 8]`", "`[2, 4, 6, 8, 3]`"],
      explanation: "`insert(1, 3)` setter verdien 3 inn PÅ plass 1 og skyver resten bakover. Alternativet `[2, 4, 3, 6, 8]` plasserer verdien etter indeks 1 i stedet for på den. Bakerst havner den bare med `append`.",
    },
    {
      question: "Hvilken funksjon gir deg VERDIEN til den dyreste varen, men ikke navnet på den?",
      options: ["`max(priser)`", "`priser.index(topp)`", "`sorted(priser)`", "`priser.count(topp)`"],
      explanation: "`max` gir den største verdien i lista, og ingenting om hvor den sto. `index` er nettopp det du kombinerer med for å finne plassen, og dermed navnet i en parallell liste. `sorted` gir alle verdiene ordnet, `count` gir et antall.",
    },
    {
      question: "Hva er `x[3:1]` når `x = [1, 2, 3, 4, 5]`?",
      options: ["`[]`", "`[4, 2]`", "`[2, 3, 4]`", "En `IndexError`"],
      explanation: "Når startpunktet ligger etter sluttpunktet og steget er positivt, blir utsnittet tomt — det gir ei tom liste, ikke en feil. Skal du gå bakover, må steget være negativt, som i `x[3:1:-1]`. Utsnitt gir aldri `IndexError`.",
    },
  ],
  'tdt4110-3-2': [
    {
      question: "Hva er `t[1][0]` når `t = [[1, 2], [3, 4], [5, 6]]`?",
      options: ["`3`", "`2`", "`4`", "`[3, 4]`"],
      explanation: "Rad først, kolonne etterpå: rad 1 er `[3, 4]`, og kolonne 0 der er `3`. Svaret `2` kommer av å lese indeksene i motsatt rekkefølge. Svaret `[3, 4]` er hele raden, altså `t[1]` uten den andre indeksen.",
    },
    {
      question: "Hva gir `len(t)` når `t` har 5 rader og 3 kolonner?",
      options: ["`5`", "`3`", "`15`", "`8`"],
      explanation: "Den ytre lista har én plass per rad, så `len(t)` er antall rader. Antall kolonner får du med `len(t[0])`, og 15 ville vært antall celler — noe `len` aldri gir deg direkte.",
    },
    {
      question: "Tabellen har en overskriftsrad. Hvordan går du gjennom bare dataradene?",
      options: ["`for rad in tabell[1:]:`", "`for rad in tabell[0]:`", "`for rad in tabell[:1]:`", "`for rad in tabell[-1]:`"],
      explanation: "`tabell[1:]` er alle radene fra og med indeks 1, altså alt unntatt overskriften. `tabell[:1]` er det motsatte — bare overskriftsraden. `tabell[0]` og `tabell[-1]` er enkeltrader, og å løkke over dem gir én celle om gangen.",
    },
    {
      question: "Hvorfor skriver løsningsforslagene `k = tabell[0].index('pris')` i stedet for `k = 1`?",
      options: ["Fordi koden da virker uansett hvilken rekkefølge kolonnene står i", "Fordi oppslag i overskriftsraden går raskere enn et fast tall", "Fordi `tabell[0]` alltid inneholder den første dataraden", "Fordi indeksen ellers ville pekt på en rad i stedet for en kolonne"],
      explanation: "Oppslaget gjør koden robust: den finner kolonnen ved navn og virker selv om fila leverer kolonnene i en annen rekkefølge — et eksplisitt krav for full score. Et fast tall er ikke tregere, bare skjørt, og `tabell[0]` er overskriftsraden, ikke data.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt = [[1, 2], [3, 4]]\nfor rad in t:\n    print(rad)\n```",
      options: ["`[1, 2]` og `[3, 4]` på hver sin linje", "`1 2` og `3 4` på hver sin linje", "`1`, `2`, `3` og `4` på hver sin linje", "`[[1, 2], [3, 4]]` på én linje"],
      explanation: "`for rad in t:` gir én hel rad om gangen, og en liste skrives ut med hakeparenteser og komma. Skulle cellene komme hver for seg, måtte du hatt en løkke til inni. Hele tabellen på én linje krever `print(t)`.",
    },
    {
      question: "Hva gir `tabell[0].index('vekt')` hvis kolonnenavnet ikke finnes?",
      options: ["Programmet stopper med `ValueError`", "Verdien `-1`, som betyr «ikke funnet`", "Verdien `None`, som du kan teste på", "Verdien `0`, altså den første kolonnen"],
      explanation: "`.index` stopper programmet med `ValueError` når verdien mangler, så robust kode sjekker `if 'vekt' in tabell[0]:` først. Verdien `-1` er svarformen fra sekvensielt søk du skriver selv, ikke fra `.index` på lister.",
    },
    {
      question: "Du skal sammenligne hver rad med den NESTE. Hvilken løkkegrense er riktig?",
      options: ["`for i in range(len(t) - 1):`", "`for i in range(len(t)):`", "`for i in range(1, len(t)):`", "`for i in range(len(t) + 1):`"],
      explanation: "Siste rad har ingen neste, så løkka må stoppe én tidligere — ellers peker `t[i + 1]` utenfor tabellen og gir `IndexError`. `range(1, len(t))` hopper i stedet over første rad, som er et annet behov (overskriftsraden).",
    },
    {
      question: "Hva blir `ny` etter transponeringen av `[[1, 2, 3], [4, 5, 6]]`?",
      options: ["`[[1, 4], [2, 5], [3, 6]]`", "`[[3, 2, 1], [6, 5, 4]]`", "`[[4, 5, 6], [1, 2, 3]]`", "`[[1, 2, 3], [4, 5, 6]]`"],
      explanation: "Transponering bytter rader og kolonner, så en tabell med 2 rader og 3 kolonner blir 3 rader med 2 kolonner. Å snu hver rad er noe annet, og å bytte om radene er bare en ombytting — ingen av dem endrer formen på tabellen.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt = [[0] * 2] * 2\nt[0][0] = 9\nprint(t)\n```",
      options: ["`[[9, 0], [9, 0]]`", "`[[9, 0], [0, 0]]`", "`[[9, 9], [0, 0]]`", "`[[9, 9], [9, 9]]`"],
      explanation: "Den ytre gjentakelsen lager to pekere til den SAMME raden, så endringen synes i begge (feilkode #15). Svaret `[[9, 0], [0, 0]]` forutsetter uavhengige rader, som du får ved å bygge tabellen med en løkke.",
    },
    {
      question: "Hvilket uttrykk henter ut hele kolonne 2, uten overskriftsraden?",
      options: ["`[rad[2] for rad in t[1:]]`", "`[rad[2] for rad in t]`", "`[t[2] for rad in t[1:]]`", "`[rad[1:] for rad in t[2]]`"],
      explanation: "Kortformen henter `rad[2]` fra hver datarad, og `t[1:]` holder overskriften utenfor. Uten utsnittet blir kolonnenavnet med i lista. `t[2]` er derimot en rad, ikke en kolonne.",
    },
    {
      question: "Verdiene i tabellen er lest fra en fil. Hvorfor er `if rad[1] > beste:` risikabelt?",
      options: ["Fordi verdiene er tekst, og tekst sammenlignes alfabetisk", "Fordi `rad[1]` alltid peker på en rad og ikke på en verdi", "Fordi sammenligning krever at begge sidene har samme lengde", "Fordi ulikhetstegnet ikke kan brukes på verdier hentet fra en liste"],
      explanation: "Fildata er strenger, og som tekst kommer `'96'` etter `'120'` fordi `'9'` er større enn `'1'` — programmet gir da et galt svar uten å stoppe (feilkode #1). Løsningen er `int(rad[1])`. Ulikhetstegn virker fint på både tall og tekst, det er nettopp problemet.",
    },
    {
      question: "Hva gjør `tabell.append(rad)`?",
      options: ["Legger lista `rad` til som en ny rad bakerst i tabellen", "Legger hver verdi i `rad` til som en ny rad bakerst", "Legger verdiene i `rad` til bakerst i den siste raden", "Lager en ny tabell med `rad` bakerst og lar originalen stå"],
      explanation: "`append` legger til ETT element, og når det elementet er ei liste, blir det en hel rad. Skulle hver verdi blitt sin egen rad, måtte du kalt `append` én gang per verdi. Tabellen endres på plass — ingen ny tabell lages.",
    },
    {
      question: "Hvor mange ganger kjører kroppen i en nøstet løkke over en tabell med 4 rader og 3 kolonner?",
      options: ["12 ganger", "7 ganger", "4 ganger", "3 ganger"],
      explanation: "Den indre løkka kjører helt ferdig for hver runde i den ytre, så antallet er rader ganger kolonner. Å legge sammen i stedet for å gange er den vanligste feilen her; 4 og 3 alene er antall runder i hver enkelt løkke.",
    },
    {
      question: "Hva er `len(tabell) - 1` når tabellen har en overskriftsrad?",
      options: ["Antall datarader", "Antall kolonner i tabellen", "Indeksen til første datarad", "Antall celler i den siste raden"],
      explanation: "Overskriftsraden teller med i `len(tabell)`, så dataradene er én færre. Indeksen til første datarad er 1, uansett hvor stor tabellen er, og kolonnetallet får du fra `len(tabell[0])`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt = [[1, 2], [3, 4]]\nfor i in range(len(t)):\n    print(t[i][i])\n```",
      options: ["`1` og `4` på hver sin linje", "`1` og `3` på hver sin linje", "`2` og `3` på hver sin linje", "`1`, `2`, `3` og `4` på hver sin linje"],
      explanation: "Når begge indeksene er `i`, plukkes cellene (0,0) og (1,1) — altså diagonalen. Cellene `1` og `3` utgjør første kolonne, som ville krevd `t[i][0]`. Alle fire cellene krever to løkker.",
    },
    {
      question: "Hvordan lager du en uavhengig kopi av en tabell?",
      options: ["Bygg en ny tabell og legg til `rad[:]` for hver rad", "Skriv `ny = tabell[:]`, som kopierer både rader og celler", "Skriv `ny = tabell`, siden tilordning alltid kopierer verdien", "Bruk `tabell.reverse()` og lagre resultatet i en ny variabel"],
      explanation: "`tabell[:]` gir en ny ytre liste, men radene inni er de samme listene — kopien må derfor gjøres rad for rad. `ny = tabell` gir bare et nytt navn på den samme tabellen, og `reverse()` snur rekkefølgen og returnerer `None`.",
    },
    {
      question: "Hvilken løkkeform trenger du når du skal ENDRE celler i tabellen?",
      options: ["`for i in range(len(t)):`, så `t[i][j] = ...`", "`for rad in t:`, siden `rad` er en kopi av raden", "`for rad in t[1:]:`, siden bare datarader kan endres", "`for j in range(len(t[0])):` alene, uten en løkke til"],
      explanation: "Indeksformen lar deg skrive tilbake med `t[i][j] = ...`. Merk at `for rad in t:` faktisk peker på den ekte raden og ikke på en kopi, så `rad[j] = ...` virker også — men `rad = ny_liste` gjør det ikke, og det er nettopp derfor indeksformen er tryggere.",
    },
    {
      question: "En rad i tabellen er tom fordi fila sluttet med en blank linje. Hva skjer med `rad[1]`?",
      options: ["Programmet stopper med `IndexError`", "Uttrykket gir den tomme strengen", "Uttrykket gir `None` uten å stoppe", "Raden hoppes automatisk over i løkka"],
      explanation: "En tom liste har ingen lovlige indekser, så oppslaget stopper programmet med `IndexError`. Python hopper aldri over rader av seg selv — robust kode sjekker `if len(rad) > 1:` eller `if rad:` først.",
    },
  ],
  'tdt4110-3-3': [
    {
      question: "Hva gir `'a;b;c'.split(';')`?",
      options: ["`['a', 'b', 'c']`", "`'a b c'`", "`['a', ';', 'b', ';', 'c']`", "`['a;b;c']`"],
      explanation: "`split` gir ei LISTE med bitene, og skilletegnet selv blir ikke med. Svaret `['a;b;c']` er det du får hvis du deler på et tegn som ikke finnes i strengen — nettopp fella ved feil skilletegn (feilkode #3).",
    },
    {
      question: "Hva er `len('12 7'.split())`?",
      options: ["`2`", "`4`", "`3`", "`1`"],
      explanation: "`split()` gir lista `['12', '7']`, som har to elementer. Svaret `4` teller tegnene i strengen i stedet — `len` teller tegn på en streng, men elementer på ei liste.",
    },
    {
      question: "Hvorfor må `.strip()` komme FØR `.split(';')` på en fillinje?",
      options: ["Fordi linjeskiftet ellers blir hengende i det siste feltet", "Fordi `split` ikke kan kalles på en streng med linjeskift i seg", "Fordi `strip` bare virker på lister og ikke på ferdige felt", "Fordi rekkefølgen avgjør hvor mange felt delingen gir"],
      explanation: "Linjeskiftet står ytterst i linja, så trimming først fjerner det; kommer det etter delingen, sitter det fast i siste felt (feilkode #2). `split` virker fint på linjeskift, og antall felt endres ikke av rekkefølgen.",
    },
    {
      question: "Hva er `'PROGRAM'[::2]`?",
      options: ["`PORM`", "`RGA`", "`MARGORP`", "`PROG`"],
      explanation: "Steget 2 fra indeks 0 gir tegnene P, O, R og M. Svaret `RGA` er `[1::2]`, altså annethvert fra det andre tegnet, og `MARGORP` er strengen snudd med steget −1.",
    },
    {
      question: "Hva gir `';'.join(['a', 'b'])`?",
      options: ["`'a;b'`", "`['a;b']`", "`'a;b;'`", "`'ab'`"],
      explanation: "`join` setter skilletegnet MELLOM elementene og gir én streng tilbake, ikke ei liste. Det kommer ikke noe skilletegn etter det siste elementet — det ville krevd `';'.join(['a', 'b', ''])`.",
    },
    {
      question: "Hva skjer med `s` etter linja `s.upper()`?",
      options: ["Ingenting — resultatet forsvinner hvis du ikke tar vare på det", "`s` inneholder etterpå den samme teksten med store bokstaver", "Programmet stopper, fordi strenger ikke kan endres på plass", "`s` blir `None`, slik listemetodene også returnerer"],
      explanation: "Strenger er uforanderlige, så metoden lager en ny streng og lar `s` stå — du må skrive `s = s.upper()`. Ingen feilmelding kommer, og `None` returneres av listemetoder som `sort`, ikke av strengmetoder.",
    },
    {
      question: "Hva gir `'  Voll  '.strip()`?",
      options: ["`'Voll'`", "`'Voll  '`", "`'  Voll'`", "`'Voll'` med ett mellomrom bak"],
      explanation: "`strip()` uten argument fjerner blanktegn i BEGGE ender. `rstrip()` og `lstrip()` tar bare én side hver, og ingen av dem lar ett mellomrom stå igjen.",
    },
    {
      question: "Hva gir `'ost'.find('t')`?",
      options: ["`2`", "`-1`", "`3`", "`True`"],
      explanation: "`find` gir indeksen der delstrengen begynner, og t står på plass 2 siden tellingen starter på 0. Verdien `-1` er svaret når delstrengen IKKE finnes, og `find` gir aldri en sannhetsverdi.",
    },
    {
      question: "Hva gir `'5.2'.isdigit()`?",
      options: ["`False`, fordi punktum ikke er et siffer", "`True`, fordi hele strengen kan leses som et tall", "`True`, fordi metoden ser bort fra skilletegn", "`False`, fordi strengen inneholder mer enn ett tegn"],
      explanation: "`isdigit()` krever at hvert eneste tegn er et siffer, og punktum er ikke det — det samme gjelder minustegn. Metoden er derfor en trygg vakt foran `int()`, men ikke foran `float()`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nlinje = 'NO1;78;\\n'\nprint(len(linje.strip().split(';')))\n```",
      options: ["`3`", "`2`", "`4`", "`1`"],
      explanation: "`strip()` fjerner linjeskiftet, men semikolonet står igjen sist, og et skilletegn til slutt gir et tomt felt etter seg: `['NO1', '78', '']`. Uten det etterhengende semikolonet ville svaret vært 2.",
    },
    {
      question: "Hva gir `'a-b-c'.replace('-', '')`?",
      options: ["`'abc'`", "`'a-b-c'`", "`'ab-c'`", "`['a', 'b', 'c']`"],
      explanation: "`replace` bytter ut ALLE forekomster, ikke bare den første, og med tom erstatning forsvinner tegnene helt. Ei liste får du bare av `split`, aldri av `replace`.",
    },
    {
      question: "Hva er forskjellen på `s.find(x)` og `s.index(x)` når `x` ikke finnes?",
      options: ["`find` gir `-1`, mens `index` stopper programmet med `ValueError`", "`find` stopper programmet, mens `index` gir `-1` som svar", "Begge gir `-1`, men `index` er raskere på lange strenger", "Begge stopper programmet, men med hver sin feilmelding"],
      explanation: "`find` er den milde varianten som svarer `-1`, mens `index` regner et manglende treff som en ekte feil. Velg etter om verdien MÅ være der eller ikke; hastighet spiller ingen rolle her.",
    },
    {
      question: "Hvorfor er `.split()` uten argument riktigere enn `.split(' ')` når feltene er atskilt med flere mellomrom?",
      options: ["Fordi den behandler flere blanktegn på rad som ett skille", "Fordi den også fjerner linjeskiftet i enden av linja", "Fordi den returnerer en streng i stedet for ei liste", "Fordi den bare deler på det første mellomrommet den finner"],
      explanation: "Uten argument slås flere blanktegn sammen til ett skille, mens `.split(' ')` lager en tom streng for hvert ekstra mellomrom. Begge former gir ei liste, og ingen av dem er begrenset til det første skillet.",
    },
    {
      question: "Hva gir `'abc'[1:99]`?",
      options: ["`'bc'`", "En `IndexError`", "`'abc'`", "Den tomme strengen"],
      explanation: "Utsnitt som går utenfor strengen stopper bare ved enden — de gir aldri `IndexError`, i motsetning til enkeltoppslag som `'abc'[99]`. Utsnittet starter dessuten på indeks 1, så a er ikke med.",
    },
    {
      question: "Hva gir `'sum: ' + 42`?",
      options: ["En `TypeError`, fordi tall må konverteres med `str()` først", "Strengen `'sum: 42'`, siden Python konverterer automatisk", "Tallet `42`, fordi teksten foran blir sett bort fra", "Ei liste med teksten og tallet som to elementer"],
      explanation: "`+` mellom en streng og et tall stopper programmet; du må skrive `'sum: ' + str(42)`. Python konverterer aldri automatisk her, og `+` lager heller aldri ei liste.",
    },
    {
      question: "Hva er `'Nord Odal'.isalpha()`?",
      options: ["`False`, fordi mellomrom ikke er en bokstav", "`True`, fordi alle tegnene utenom skillet er bokstaver", "`False`, fordi strengen inneholder en stor bokstav", "`True`, fordi metoden ser bort fra mellomrom"],
      explanation: "Hvert eneste tegn må være en bokstav, og mellomrom er det ikke. Store bokstaver er derimot helt greit — det er en vanlig, men gal, forklaring på hvorfor svaret er `False`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 'biblioteket'\nprint(s.count('e'), s.find('e'))\n```",
      options: ["`2 7`", "`2 8`", "`3 7`", "`1 7`"],
      explanation: "Bokstaven e står to steder i ordet, og den første av dem har indeks 7 når du teller fra 0. Svaret `2 8` er av-med-én i indekseringen, som er den vanligste feilen på slike spørsmål.",
    },
    {
      question: "En fil bruker tabulator som skilletegn. Hvordan skriver du delingen?",
      options: ["`linje.split('\\t')`", "`linje.split(tab)`", "`linje.split('tab')`", "`linje.split('\\\\t')`"],
      explanation: "Tabulatortegnet skrives som bakstrek og t inne i fnutter. Ordet `tab` er verken en innebygd variabel eller et skilletegn, og dobbel bakstrek ville betydd en ekte bakstrek etterfulgt av bokstaven t.",
    },
    {
      question: "Hva gir `'a;;b'.split(';')`?",
      options: ["`['a', '', 'b']`", "`['a', 'b']`", "`['a;;b']`", "`['a', ';', 'b']`"],
      explanation: "To skilletegn på rad gir et tomt felt imellom, fordi `split` med argument ikke slår sammen skiller. Det er bare `split()` uten argument som hopper over tomme biter.",
    },
    {
      question: "Hvilken linje snur strengen `s` uten å endre den?",
      options: ["`snudd = s[::-1]`", "`s.reverse()`", "`snudd = s.sort(reverse=True)`", "`s[0], s[-1] = s[-1], s[0]`"],
      explanation: "Utsnittet med steget −1 gir en ny, snudd streng og lar originalen stå. `reverse()` og `sort()` er listemetoder som ikke finnes på strenger, og enkelttegn kan uansett ikke tilordnes fordi strenger er uforanderlige.",
    },
  ],
  'tdt4110-3-4': [
    {
      question: "Hva skriver `print('Sum:', 250)` ut?",
      options: ["`Sum: 250`", "`Sum:250`", "`Sum: , 250`", "`Sum:  250`"],
      explanation: "`print` setter ETT mellomrom mellom argumentene sine. Svaret `Sum:250` er det du får med skjøting, `print('Sum:' + str(250))`; `Sum:  250` har to mellomrom, som ingen av delene gir; og kommaet i koden er argumentskillet, ikke noe som skrives ut.",
    },
    {
      question: "Hva gjør `end=''` i et `print`-kall?",
      options: ["Fjerner linjeskiftet, så neste utskrift fortsetter på samme linje", "Fjerner mellomrommet som ellers står mellom argumentene", "Avslutter programmet etter at linja er skrevet ferdig", "Setter et tomt tegn mellom hvert av argumentene i kallet"],
      explanation: "`end` styrer det som kommer ETTER siste argument, altså normalt linjeskiftet. Å fjerne mellomrommet mellom argumentene er `sep=''` sin jobb, og `end` avslutter ingenting annet enn linja.",
    },
    {
      question: "Hva skriver `print('a', 'b', 'c', sep='-')` ut?",
      options: ["`a-b-c`", "`a - b - c`", "`-a-b-c-`", "`abc-`"],
      explanation: "`sep` er tegnet MELLOM argumentene, så det står to steder og ikke i endene. Svaret `a - b - c` beholder mellomrommene i tillegg, `-a-b-c-` legger skilletegnet i endene også, og `abc-` blander `sep` med `end`.",
    },
    {
      question: "Hvor mange linjer skriver dette programmet ut?\n\n```python\nprint('en', end=' ')\nprint('to')\nprint()\nprint('tre')\n```",
      options: ["3, hvorav én er tom", "4, hvorav én er tom", "3, ingen av dem tom", "2, hvorav én er tom"],
      explanation: "`end=' '` gjør at «en» og «to» havner på samme linje, det bare `print()` gir en tom linje, og «tre» er den siste — altså tre linjer i alt. Svaret 4 teller `print`-kallene i stedet for linjeskiftene, og alternativene uten tom linje overser at `print()` faktisk skriver et linjeskift.",
    },
    {
      question: "Hva gir `'42'.rjust(5)`?",
      options: ["`'   42'`", "`'42   '`", "`'42'`", "`'00042'`"],
      explanation: "`rjust` legger mellomrom FORAN til lengden er 5, så tallet står til høyre i feltet. `'42   '` er `ljust`, `'42'` er det du får hvis bredden er mindre enn strengen, og `'00042'` er `zfill(5)`, som fyller med nuller i stedet.",
    },
    {
      question: "Hva gir `'vaffel'.ljust(4)`?",
      options: ["`'vaffel'`", "`'vaff'`", "`'vaffel    '`", "`'  vaffel'`"],
      explanation: "Er strengen allerede minst så lang som bredden, gjør `ljust` ingenting — den klipper aldri. Svaret `'vaff'` antar klipping, `'vaffel    '` fyller ut til en bredde som ikke er bedt om, og `'  vaffel'` er høyrejustering.",
    },
    {
      question: "Hvorfor stopper `print(antall.rjust(4))` med feil når `antall` er tallet 42?",
      options: ["Fordi `rjust` er en strengmetode og ikke finnes på et heltall", "Fordi `rjust` krever to argumenter når verdien er et heltall", "Fordi bredden 4 er for liten til å romme et tosifret tall", "Fordi `print` ikke kan ta et metodekall som argument direkte"],
      explanation: "Justeringsmetodene hører til strenger, så tallet må konverteres først: `str(antall).rjust(4)`. Bredden er ikke problemet — `rjust` klipper aldri — og `print` tar gjerne metodekall som argument.",
    },
    {
      question: "Hva gir `'{:8.2f}'.format(4.567)`?",
      options: ["`'    4.57'`", "`'    4.56'`", "`'4.57    '`", "`'    4.567'`"],
      explanation: "Oppskriften betyr bredde 8 og to desimaler, og verdien AVRUNDES, så `4.567` blir `4.57` med fire mellomrom foran. Svaret `'    4.56'` klipper i stedet for å runde av, `'4.57    '` venstrejusterer uten at noen har bedt om det, og `'    4.567'` beholder tre desimaler.",
    },
    {
      question: "Hva betyr tegnet `<` i oppskriften `'{:<10}'`?",
      options: ["At verdien skal stå venstrejustert i et felt på ti tegn", "At verdien skal være mindre enn ti tegn, ellers oppstår feil", "At verdien skal stå høyrejustert i et felt på ti tegn", "At verdien skal midtstilles i et felt på ti tegn med luft"],
      explanation: "`<` er venstrejustering, `>` er høyrejustering og `^` er midtstilling; tallet etter er bredden. Oppskriften er ingen begrensning på lengden — er verdien lengre enn bredden, skrives den ut i sin helhet.",
    },
    {
      question: "Hvilken av disse gir nøyaktig samme resultat som `'{:6.1f}'.format(pris)`?",
      options: ["`f'{pris:6.1f}'`", "`f'{pris}:6.1f'`", "`f'{6.1f:pris}'`", "`f'pris:6.1f'`"],
      explanation: "I en f-streng står uttrykket først og oppskriften etter kolonet, inne i krøllparentesene: `f'{pris:6.1f}'`. De andre plasserer enten oppskriften utenfor parentesen, bytter om rekkefølgen, eller mangler krøllparentesene helt, slik at teksten skrives bokstavelig.",
    },
    {
      question: "Hva gir `str(7).zfill(3)`?",
      options: ["`'007'`", "`'  7'`", "`'700'`", "`'7'`"],
      explanation: "`zfill` fyller med NULLER foran til lengden er 3. Svaret `'  7'` er `rjust(3)`, som fyller med mellomrom i stedet; `'700'` fyller bakfra, som `zfill` aldri gjør; og `'7'` overser at det fylles ut i det hele tatt.",
    },
    {
      question: "Hva gir `f'{9:02d}'`?",
      options: ["`'09'`", "`'9'`", "`'9.0'`", "`'  9'`"],
      explanation: "Nullen i oppskriften betyr fyll med nuller, 2 er bredden, og `d` betyr heltall — altså `'09'`. Svaret `'  9'` er det du får uten nullen (`{:2d}`), og `'9.0'` ville krevd `f` i stedet for `d`.",
    },
    {
      question: "En løpstid er 3 725 sekunder. Hvor mange hele minutter viser `hh:mm:ss`-formatet?",
      options: ["2", "62", "1", "5"],
      explanation: "Timene trekkes fra først: `3725 % 3600` er 125 sekunder, og `125 // 60` er 2 minutter. Svaret 62 kommer av `3725 // 60`, altså å glemme å trekke fra timen; 1 er antall timer, og 5 er sekundene som blir til overs.",
    },
    {
      question: "Hvorfor skal tidsformatering bruke `//` og ikke `/`?",
      options: ["Fordi `/` gir desimaltall, så timetallet blir `1.03` i stedet for `1`", "Fordi `/` ikke er definert for heltall og gir en feilmelding", "Fordi `//` runder oppover og gir riktig antall hele timer", "Fordi `/` bare kan brukes når begge tallene er desimaltall"],
      explanation: "`/` gir alltid et desimaltall, og et tidsfelt skal være et helt tall (feilkode #9 — å blande heltalls- og flyttallsdeling). `//` runder NEDOVER, ikke oppover, og `/` er fullt lovlig på heltall — den gir bare feil type svar her.",
    },
  ],
  'tdt4110-3-5': [
    {
      question: "Hva skjer når du skriver `d['ravn']` og `'ravn'` ikke er en nøkkel i `d`?",
      options: ["Programmet stopper med `KeyError`", "Uttrykket gir `None` og koden går videre", "Uttrykket gir `0` og koden går videre", "Nøkkelen legges inn med verdien `None`"],
      explanation: "Et oppslag på en nøkkel som mangler, stopper programmet med `KeyError` — ordboka gjetter ikke og lager ingen plass. Å få `None` er det `d.get('ravn')` gjør, og `0` krever `d.get('ravn', 0)`; ingen av dem legger nøkkelen inn.",
    },
    {
      question: "Hva er `len(d)` etter `d = {'a': 1}` og `d.get('b', 0)`?",
      options: ["1", "2", "0", "3"],
      explanation: "`.get` svarer på et oppslag, men setter ikke nøkkelen inn, så ordboka er like stor etterpå. Svaret 2 forutsetter at `.get` legger til `'b'`, og 0 forutsetter at ordboka tømmes.",
    },
    {
      question: "Hva inneholder `d` etter `d = {'te': 20}` og `d['te'] = 22`?",
      options: ["`{'te': 22}`", "`{'te': 20, 'te': 22}`", "`{'te': [20, 22]}`", "`{'te': 42}`"],
      explanation: "En tilordning til en nøkkel som finnes fra før, OVERSKRIVER verdien. Nøkler er unike, så to `'te'`-par kan ikke oppstå; verdien blir verken ei liste eller en sum uten at du ber om det.",
    },
    {
      question: "Hva er `len({'a': 1, 'b': 2, 'c': 3})`?",
      options: ["3", "6", "2", "1"],
      explanation: "`len` på en ordbok teller PAR, altså antall unike nøkler. Svaret 6 teller nøkler og verdier hver for seg, som er en vanlig feiltolkning av hva ordboka inneholder.",
    },
    {
      question: "Hva gir `12 in {'gråtrost': 12, 'linerle': 5}`?",
      options: ["`False`, fordi `in` leter blant nøklene", "`True`, fordi 12 står som verdi i ordboka", "`True`, fordi `in` leter begge steder samtidig", "`False`, fordi tall aldri kan stå i en ordbok"],
      explanation: "`in` på en ordbok tester om verdien er en NØKKEL, og nøklene her er de to artsnavnene. Vil du lete blant verdiene, må du skrive `12 in d.values()`. Tall er selvsagt tillatt både som nøkkel og som verdi.",
    },
    {
      question: "Hva gir `for x in d:` deg i hver runde, når `d` er en ordbok?",
      options: ["Nøkkelen", "Verdien", "Paret som et tuppel", "Plassnummeret i ordboka"],
      explanation: "En `for`-løkke over en ordbok gir nøklene, akkurat som `d.keys()`. Verdien henter du med `d[x]` inni løkka, og vil du ha paret i løkkehodet, må du bruke `d.items()`.",
    },
    {
      question: "Hvilken form gir deg både nøkkel og verdi direkte i løkkehodet?",
      options: ["`for k, v in d.items():`", "`for k, v in d.keys():`", "`for k, v in d.values():`", "`for k, v in sorted(d):`"],
      explanation: "`.items()` gir parene som `(nøkkel, verdi)`, og de kan pakkes ut i to variabler. `.keys()` og `sorted(d)` gir bare nøklene, og `.values()` bare verdiene — å pakke ut to variabler fra dem gir en feilmelding.",
    },
    {
      question: "Hva gir `sum(d.values())` når `d = {'a': 3, 'b': 2, 'c': 3}`?",
      options: ["8", "3", "2", "6"],
      explanation: "`.values()` gir alle verdiene, også de like, og `sum` legger dem sammen: 3 + 2 + 3 = 8. Svaret 6 forutsetter at like verdier slås sammen til én, men det er bare NØKLENE som er unike i en ordbok.",
    },
    {
      question: "Hva returnerer `sorted(d)` når `d` er en ordbok?",
      options: ["Ei sortert liste med nøklene", "Ei sortert liste med verdiene", "En ny ordbok sortert på nøkkel", "Ei sortert liste med parene"],
      explanation: "`sorted` på en ordbok går over nøklene, akkurat som en `for`-løkke gjør, og gir dem tilbake som ei sortert liste. Verdiene er ikke med, og resultatet er en liste — ingen ny ordbok.",
    },
    {
      question: "Hva inneholder `d` etter denne løkka?\n\n```python\nd = {}\nfor x in ['p', 'q', 'p']:\n    d[x] = d.get(x, 0) + 1\n```",
      options: ["`{'p': 2, 'q': 1}`", "`{'p': 1, 'q': 1}`", "`{'p': 3, 'q': 1}`", "`{'p': 2, 'q': 2}`"],
      explanation: "Telleren legger én til for hver forekomst: `'p'` kommer to ganger og `'q'` én gang. Svaret `{'p': 1, 'q': 1}` er det du får hvis du skriver `d[x] = 1` i stedet, og de andre teller feil antall forekomster.",
    },
    {
      question: "Hvorfor stopper `d[k] += 1` med feil når `k` er en ny nøkkel?",
      options: ["Fordi Python må lese den gamle verdien før den kan legge til", "Fordi `+=` bare er definert for lister og ikke for ordbøker", "Fordi nye nøkler alltid må settes inn med `setdefault` først", "Fordi `+=` krever at verdien er tekst og ikke et heltall"],
      explanation: "`d[k] += 1` er kortform for `d[k] = d[k] + 1`, og oppslaget på høyresiden gir `KeyError` når nøkkelen er ny. Det er nettopp derfor telleren bruker `d.get(k, 0)`; `setdefault` er ett av flere mulige grep, ikke et krav, og `+=` virker fint på tall.",
    },
    {
      question: "Hva mangler i denne grupperingen?\n\n```python\nd = {}\nfor k, v in par:\n    d[k].append(v)\n```",
      options: ["Å opprette den tomme lista når nøkkelen er ny", "Å konvertere verdien til tekst før den legges inn", "Å sortere nøklene før elementene legges inn", "Å sjekke at verdien ikke allerede står i lista"],
      explanation: "`d[k].append(v)` leser `d[k]` først, og det gir `KeyError` på en ny nøkkel — derfor må `if k not in d: d[k] = []` stå foran. Duplikatsjekk er noe oppgaven eventuelt ber om i tillegg, og sortering og konvertering har ingenting med krasjet å gjøre.",
    },
    {
      question: "Hva gjør `d.setdefault(k, [])` som `d.get(k, [])` IKKE gjør?",
      options: ["Den legger nøkkelen inn i ordboka når den mangler", "Den returnerer den tomme lista når nøkkelen mangler", "Den gir en feilmelding når nøkkelen allerede finnes", "Den sorterer lista som ligger på nøkkelen fra før"],
      explanation: "Begge returnerer lista, men bare `setdefault` skriver den inn i ordboka — og det er hele forskjellen når du grupperer. `.get` gir aldri feilmelding, og ingen av dem sorterer noe.",
    },
    {
      question: "Hvorfor er `d.get(k, []).append(v)` feil i en gruppering?",
      options: ["Elementet havner i ei liste som aldri kommer inn i ordboka", "Elementet legges inn to ganger fordi `.get` også setter inn", "Uttrykket stopper med `KeyError` når nøkkelen ikke finnes", "Elementet overskriver den lista som allerede lå på nøkkelen"],
      explanation: "Når nøkkelen mangler, gir `.get` en helt fersk tom liste som ingen har lagret, så elementet blir borte og gruppen står tom. Uttrykket krasjer ikke — det er nettopp det som gjør fella farlig — og det overskriver ingenting.",
    },
    {
      question: "I hvilken rekkefølge kommer nøklene når du går gjennom en ordbok med `for`?",
      options: ["I den rekkefølgen de ble satt inn", "I alfabetisk rekkefølge", "I rekkefølge etter størrelsen på verdien", "I tilfeldig rekkefølge hver kjøring"],
      explanation: "Ordboka husker innsettingsrekkefølgen, og det er den `for` følger. Skal utskriften være alfabetisk, må du be om det med `sorted(d)`; verdiene styrer ingenting, og rekkefølgen er ikke tilfeldig.",
    },
    {
      question: "Hvilken av disse kan IKKE brukes som nøkkel i en ordbok?",
      options: ["Ei liste", "Et tuppel", "En streng", "Et heltall"],
      explanation: "Nøkler må være uforanderlige, og ei liste kan endres etter at den er laget. Tupler er uforanderlige og er derfor lovlige nøkler; tekst og heltall er de to vanligste.",
    },
    {
      question: "Hvorfor skriver du `for rad in tabell[1:]:` når du bygger en ordbok fra en innlest tabell?",
      options: ["For å hoppe over overskriftsraden", "For å hoppe over den siste raden", "For å hoppe over den første kolonnen", "For å gå gjennom radene baklengs"],
      explanation: "Et utsnitt fra og med indeks 1 utelater rad 0, altså overskriftsraden — ellers får du et par som heter `'navn': 'verdi'` midt i ordboka. Utsnittet rører ingen kolonner og snur ingenting.",
    },
    {
      question: "Hvorfor trengs `int()` rundt verdien når ordboka bygges fra en fil-tabell?",
      options: ["Fordi verdier lest fra fil er tekst, og tekst kan ikke summeres som tall", "Fordi ordbøker bare kan ha heltall som verdier og ikke tekst", "Fordi `int()` fjerner linjeskiftet som henger igjen etter innlesing", "Fordi nøkkelen ellers blir lagt inn to ganger i ordboka"],
      explanation: "Alt som leses fra fil kommer inn som tekst, og `'120' + 80` gir en feilmelding (feilkode #1 — glemt konvertering). Ordbokverdier kan være hva som helst, linjeskiftet er `.strip()` sin jobb, og nøkkelen berøres ikke.",
    },
    {
      question: "Hva gir `max(d.values())` når `d = {'papir': 200, 'glass': 130}`?",
      options: ["`200`", "`'papir'`", "`('papir', 200)`", "`330`"],
      explanation: "`.values()` har mistet nøklene underveis, så `max` gir bare det største tallet. Skal du ha navnet, må du gå gjennom ordboka med en finn-beste-løkke; `330` er `sum` og ikke `max`.",
    },
    {
      question: "En analyse skal svare på «hvor mange kilo er levert per fraksjon». Hvilken struktur er riktig?",
      options: ["En ordbok fra fraksjon til totalt antall kilo", "Ei liste med alle kilotallene i innlesingsrekkefølge", "En ordbok fra antall kilo til navnet på fraksjonen", "Ei liste med alle fraksjonsnavnene, uten duplikater"],
      explanation: "«Per» og «for hver» peker mot en ordbok der det du grupperer på, er nøkkelen. Snur du det og bruker kilotallet som nøkkel, mister du fraksjoner som tilfeldigvis har likt antall kilo, og de to listealternativene svarer ikke på spørsmålet i det hele tatt.",
    },
  ],
  'tdt4110-3-6': [
    {
      question: "Hva skjer når du kjører `t = (4, 9); t[0] = 5`?",
      options: ["Programmet stopper med `TypeError`", "Tuppelet blir `(5, 9)` som normalt", "Det lages et nytt tuppel `(5, 9)`", "Programmet stopper med `IndexError`"],
      explanation: "Tupler er uforanderlige, så tilordning til en plass gir `TypeError: 'tuple' object does not support item assignment`. Vil du ha et nytt tuppel, må du bygge det med skjøting; `IndexError` handler om plassnumre utenfor rekkevidde.",
    },
    {
      question: "Hva gir `(4, 9, 2, 9)[1:3]`?",
      options: ["`(9, 2)`", "`[9, 2]`", "`(9, 2, 9)`", "`(4, 9)`"],
      explanation: "Et utsnitt av et tuppel er et TUPPEL, og sluttgrensa er eksklusiv, så plass 1 og 2 blir med. Svaret `[9, 2]` har riktig innhold, men feil type — det er nettopp forskjellen kodesporing tester.",
    },
    {
      question: "Hva er `len((7,))`?",
      options: ["1", "0", "2", "Det gir en feilmelding"],
      explanation: "Kommaet gjør dette til et tuppel med ett element, så lengden er 1. Uten kommaet er `(7)` bare tallet 7, og da hadde `len` gitt en feilmelding — men her står kommaet der.",
    },
    {
      question: "Hvilken av disse metodene finnes IKKE på et tuppel?",
      options: ["`append`", "`index`", "`count`", "`len`"],
      explanation: "`append` endrer samlingen, og det kan ikke gjøres på et tuppel. `index` og `count` leser bare, og `len` er en innebygd funksjon som virker på alt som har lengde.",
    },
    {
      question: "Hva gir `x` og `y` etter `x, y = (3, 7)`?",
      options: ["`x` er 3 og `y` er 7", "`x` er 7 og `y` er 3", "`x` er `(3, 7)` og `y` er tom", "Det gir en feilmelding"],
      explanation: "Utpakking fordeler elementene på variablene i samme rekkefølge. Feilmelding får du bare hvis antallet variabler ikke stemmer med antall elementer i tuppelet.",
    },
    {
      question: "Hva skjer ved `a, b, c = (1, 2)`?",
      options: ["Programmet stopper med `ValueError`", "`c` settes til `None` og koden går videre", "`c` settes til `0` og koden går videre", "Programmet stopper med `TypeError`"],
      explanation: "Antall variabler må stemme eksakt med antall elementer, ellers får du `ValueError: not enough values to unpack`. Python fyller aldri inn manglende verdier med `None` eller `0` av seg selv.",
    },
    {
      question: "Hva returnerer en funksjon som avslutter med `return lav, hoy`?",
      options: ["Ett tuppel med to verdier", "To separate verdier etter hverandre", "Ei liste med to verdier", "Bare den første av de to verdiene"],
      explanation: "Kommaet pakker de to verdiene i ett tuppel, og det er den ene verdien funksjonen gir tilbake. Mottakeren kan pakke det ut i to variabler, men det som returneres, er alltid én ting — og typen er tuppel, ikke liste.",
    },
    {
      question: "Hva er `x` og `y` etter `x = 1`, `y = 2` og `x, y = y, x + y`?",
      options: ["`x` er 2 og `y` er 3", "`x` er 2 og `y` er 4", "`x` er 3 og `y` er 2", "`x` er 1 og `y` er 3"],
      explanation: "Hele høyresiden regnes ut FØR noe tilordnes, med de gamle verdiene: tuppelet blir `(2, 3)`. Svaret der `y` er 4, forutsetter at `x` allerede var oppdatert til 2 — det er nettopp fella med å skrive tilordningen i to linjer.",
    },
    {
      question: "Hva menes med at to tupler er parallelle?",
      options: ["De har samme lengde, og samme plassnummer hører sammen", "De har samme innhold, men i motsatt rekkefølge", "De er begge uforanderlige og kan derfor ikke endres", "De kan slås sammen til ett tuppel med skjøting"],
      explanation: "Parallelle tupler holdes i takt: `grenser[2]` og `bokstaver[2]` er to opplysninger om det samme. At de er uforanderlige og kan skjøtes, gjelder alle tupler og sier ingenting om parallelliteten.",
    },
    {
      question: "Hva skjer i `zip(a, b)` når `a` har fire elementer og `b` har tre?",
      options: ["Det lages tre par, og det siste elementet i `a` blir ikke med", "Det lages fire par, der det siste mangler en verdi fra `b`", "Programmet stopper med `ValueError` fordi lengdene er ulike", "Det lages fire par, der `b` gjenbruker sitt første element"],
      explanation: "`zip` stopper ved den korteste samlingen, og gjør det stille — ingen feilmelding. Nettopp derfor er ulik lengde en farlig feil: koden kjører fint og gir bare færre rader enn ventet.",
    },
    {
      question: "Hvorfor skal grensene i en karaktersetting stå fra høyest til lavest?",
      options: ["Fordi den første grensen poengsummen når, da er den riktige", "Fordi `zip` krever at den første samlingen er sortert synkende", "Fordi `return` inne i en løkke bare virker på sorterte data", "Fordi sammenligningen `>=` bare er definert for synkende rekkefølge"],
      explanation: "Løkka returnerer ved første treff, så med synkende grenser treffer den den høyeste kategorien poengsummen kvalifiserer til. Står de stigende, får alle den laveste. Verken `zip`, `return` eller `>=` bryr seg om rekkefølgen.",
    },
    {
      question: "Hva returnerer denne funksjonen for `poeng = 45`?\n\n```python\ngrenser = (90, 80, 70, 60)\nbokstaver = ('A', 'B', 'C', 'D')\n\ndef karakter(poeng):\n    for i in range(len(grenser)):\n        if poeng >= grenser[i]:\n            return bokstaver[i]\n```",
      options: ["`None`", "`'F'`", "`'D'`", "Programmet stopper med feil"],
      explanation: "Ingen grense er nådd, løkka går ut, og en funksjon uten `return` på slutten gir `None`. Funksjonen mangler altså `return 'F'` etter løkka — det er den vanligste utelatelsen i mønsteret, og den krasjer ikke, den gir bare feil svar.",
    },
  ],
  'tdt4110-4-1': [
    {
      question: "Hva gir `linje.strip()` når `linje` er `'Kjevik;15.1;54\\n'`?",
      options: ["Strengen `'Kjevik;15.1;54'` — linjeskiftet på slutten er fjernet", "Strengen `'Kjevik;15.154'` — også semikolonene inni er fjernet", "Lista `['Kjevik', '15.1', '54']` — strengen er delt i felt", "Strengen `'Kjevik;15.1;54\\n'` — `.strip()` endrer ikke strengen"],
      explanation: "`.strip()` fjerner blanktegn i begge ENDER, og linjeskiftet er ett blanktegn. Alternativet som også fjerner semikolonene inni, blander `.strip()` med `.replace()`. Alternativet med lista blander `.strip()` med `.split()`. Alternativet som sier at strengen er uendret, glemmer at linjeskiftet er et tegn på lik linje med de andre.",
    },
    {
      question: "Fila har linjer på formen `by;antall`. Hva gir `'Bergen;120'.split(',')`?",
      options: ["Lista `['Bergen;120']` med ett element, fordi det ikke finnes komma", "Lista `['Bergen', '120']` med to elementer, som med semikolon", "En feilmelding, fordi separatoren ikke finnes i strengen", "Lista `[]`, fordi ingen deling var mulig å gjennomføre"],
      explanation: "Finner `.split()` ingen separator, gir den hele strengen som ETT element — det er feilkode #3 i praksis. Alternativet med to elementer forutsetter riktig separator. `.split()` gir aldri feilmelding eller tom liste; det stille ene elementet er nettopp det som gjør feilen så vanskelig å oppdage.",
    },
    {
      question: "Hvor mange elementer har `'a;b;c;d'.split(';')`?",
      options: ["Fire — antall separatorer pluss én", "Tre — én per separator i strengen", "Fem — ett ekstra for slutten av strengen", "Sju — både felt og separatorer telles med"],
      explanation: "Regelen er antall separatorer pluss én: tre semikolon gir fire felt. Alternativet som sier tre, teller separatorene i stedet for feltene. Alternativet med fem legger på et tomt felt som ikke finnes, og alternativet med sju teller separatorene med som egne elementer — de forsvinner i delingen.",
    },
    {
      question: "Hva er `felt[1]` etter `felt = 'Kjevik;15.1;54'.split(';')`?",
      options: ["Strengen `'15.1'` — alle felt fra en fil er tekst", "Flyttallet `15.1` — Python konverterer tall automatisk", "Strengen `'Kjevik'` — indeks 1 er det første feltet", "Heltallet `15` — desimaldelen faller bort ved delingen"],
      explanation: "`.split()` gir alltid strenger, uansett hvordan feltet ser ut — konverteringen må du gjøre selv med `float()`. Alternativet med flyttallet er feilkode #1: Python konverterer ingenting automatisk. Alternativet med `'Kjevik'` teller fra 1 i stedet for fra 0, og alternativet med heltallet blander inn en avrunding som ikke skjer noe sted.",
    },
    {
      question: "Hva skriver `print('54' + '54')` ut?",
      options: ["`5454`, fordi `+` skjøter to strenger sammen", "`108`, fordi Python ser at begge er tall", "`54 54`, fordi `+` setter et mellomrom imellom", "En feilmelding, fordi strenger ikke kan adderes"],
      explanation: "På to strenger betyr `+` sammenskjøting, og resultatet er `5454` — det stumme symptomet på feilkode #1. Alternativet som gir 108, forutsetter en automatisk konvertering som ikke finnes. `+` setter aldri inn mellomrom (det er `print` med to argumenter som gjør det), og sammenskjøting av strenger er fullt lovlig, så ingen feilmelding kommer.",
    },
    {
      question: "Hva gir `f.readline()` når hele fila allerede er lest?",
      options: ["Den tomme strengen `''`, som er signalet om filslutt", "Strengen `'\\n'`, altså en linje som bare er et linjeskift", "Verdien `None`, som betyr at det ikke er mer å hente", "En feilmelding om at posisjonen er forbi filas slutt"],
      explanation: "Ved filslutt gir `readline()` den tomme strengen. Alternativet med `'\\n'` beskriver en BLANK linje midt i fila — den er ikke det samme som filslutt, og det er nettopp derfor løkka ikke stopper for tidlig på en blank linje. `readline()` gir aldri `None` og kaster ingen feil ved filslutt.",
    },
    {
      question: "Hva er forskjellen på `f.read()` og `f.readlines()`?",
      options: ["`read()` gir én streng med linjeskiftene inni, `readlines()` gir en liste av linjer", "`read()` gir en liste av linjer, `readlines()` gir én streng med hele fila", "`read()` leser én linje av gangen, `readlines()` leser hele fila samlet", "`read()` fjerner linjeskiftene, `readlines()` beholder dem i hver linje"],
      explanation: "`read()` gir hele fila som ÉN streng, `readlines()` som en LISTE der hver linje har sitt linjeskift. Alternativet som bytter om på de to, snur definisjonene. Alternativet om én linje av gangen beskriver `readline()` uten s. Ingen av dem fjerner linjeskift — det må du gjøre selv med `.strip()`.",
    },
    {
      question: "Hvorfor skal `f.close()` stå etter løkka og ikke inne i den?",
      options: ["Fordi en lukket fil ikke kan leses videre, så neste runde ville krasjet", "Fordi `close()` inne i løkka ville lukket fila flere ganger og brukt minne", "Fordi `close()` inne i løkka gjør at siste linje leses to ganger", "Fordi `close()` bare virker når den står på samme innrykk som `return`"],
      explanation: "Lukker du fila på første runde, finnes det ingen fil å lese fra på andre runde, og programmet stopper. Alternativet om minnebruk gjetter på en kostnad som ikke er problemet. Ingen linje leses to ganger, og innrykket til `return` har ingenting med saken å gjøre — det er posisjonen i forhold til løkka som teller.",
    },
    {
      question: "Hva gir `'Blindern   12.4     61'.split()` uten argument?",
      options: ["`['Blindern', '12.4', '61']` — vilkårlig mange blanktegn deler", "`['Blindern', '', '', '12.4', '', '61']` — hvert mellomrom deler", "`['Blindern   12.4     61']` — uten argument deles ingenting", "`['Blindern', '12.4', '61', '']` — et tomt felt legges til slutt"],
      explanation: "Uten argument deler `.split()` på vilkårlig mange blanktegn og gir aldri tomme felt. Alternativet med tomme felt beskriver `.split(' ')` med ETT mellomrom som eksplisitt separator — det er nettopp den forskjellen som gjør varianten uten argument riktig for kolonnejusterte filer. De to siste beskriver oppførsel `.split()` ikke har.",
    },
    {
      question: "Hvilken linje er den korrekte parselenken for en linje fra fil?",
      options: ["`felt = linje.strip().split(';')`", "`felt = linje.split(';').strip()`", "`felt = strip(split(linje, ';'))`", "`felt = linje.split(';').strip(';')`"],
      explanation: "Rens først, del så: `.strip()` gir en streng, og `.split(';')` deler den. Alternativene som kaller `.strip()` etter `.split()`, prøver å rense en LISTE — en liste har ingen `.strip()`, så programmet stopper. Formen med `strip(split(...))` finnes ikke i Python; begge er metoder på strengen, ikke frittstående funksjoner.",
    },
    {
      question: "En ordbok bygges med `d[felt[0]] = int(felt[1])`. Fila har to linjer med samme verdi i første felt. Hva skjer?",
      options: ["Den siste linja overskriver den første, uten noen feilmelding", "Den første linja beholdes, og den siste blir stille ignorert", "Ordboka får to oppføringer med samme nøkkel og ulik verdi", "Programmet stopper med en feil om at nøkkelen finnes fra før"],
      explanation: "Nøkler er unike, og en ny tilordning erstatter den gamle verdien uten varsel — derfor mister du en rad hvis du velger feil nøkkelkolonne. Alternativet der den første beholdes, snur regelen. To like nøkler kan ikke finnes samtidig, og Python gir ingen feilmelding ved overskriving.",
    },
    {
      question: "Hvorfor skriver fasiten `felt[overskrift.index('dager')]` i stedet for `felt[2]`?",
      options: ["Fordi koden da virker selv om kolonnene bytter plass i fila", "Fordi `felt[2]` er utenfor lista når raden har tre felt", "Fordi `.index` er raskere enn å slå opp med et tall direkte", "Fordi `felt[2]` gir en streng mens `.index` gir et heltall"],
      explanation: "Dynamisk kolonneoppslag er et eksplisitt fullscore-krav og motgiften mot feilkode #4. `felt[2]` er fullt lovlig på en rad med tre felt, så alternativet om at det er utenfor lista, er galt. Oppslag med tall er raskere, ikke tregere, og begge former gir samme feltverdi — forskjellen er robusthet, ikke type.",
    },
    {
      question: "Hva returnerer `overskrift.index('sjanger')` når overskriften er `['tittel', 'låner', 'dager']`?",
      options: ["Ingenting — programmet stopper med `ValueError`", "Verdien `-1`, som betyr at navnet ikke ble funnet", "Verdien `None`, som du kan teste med `is None`", "Tallet `3`, altså plassen etter det siste feltet"],
      explanation: "`.index` kaster `ValueError` når verdien ikke finnes — en ærlig feil som er bedre enn et stille galt svar. Alternativet med `-1` beskriver mønsteret fra sekvensielt søk, som du selv skriver. Verken `None` eller en plass etter siste felt returneres; vil du håndtere tilfellet pent, pakker du oppslaget i `try/except`.",
    },
    {
      question: "Fila `stromspris.txt` skiller feltene med ett tabulatortegn. Hvilken separator er riktig?",
      options: ["`.split('\\t')`, som deler på ett tabulatortegn", "`.split('\\\\t')`, som deler på skråstrek fulgt av t", "`.split('tab')`, som deler på tabulatorens navn", "`.split(';')`, som er standard for alle datafiler"],
      explanation: "Tabulatortegnet skrives `'\\t'` — én omvendt skråstrek og en t inne i fnutter, til sammen ETT tegn. Alternativet med dobbel skråstrek leter etter to helt andre tegn. Det finnes ingen `'tab'`-form, og semikolon er ikke noen standard — separatoren er en del av dataformatet og må leses av fila.",
    },
    {
      question: "Hvor mange rader og kolonner har `tabell` etter at tre linjer med tre felt hver er lest inn?",
      options: ["`len(tabell)` er 3 og `len(tabell[0])` er 3", "`len(tabell)` er 9 og `len(tabell[0])` er 1", "`len(tabell)` er 3 og `len(tabell[0])` er 9", "`len(tabell)` er 1 og `len(tabell[0])` er 3"],
      explanation: "Ytterlista har én rad per linje, og hver rad har ett element per felt. Alternativet med 9 rader forutsetter at feltene ble lagt inn hver for seg med `append`. De to siste blander sammen hva ytterlista og innerlista teller — `len(tabell)` er alltid antall rader.",
    },
    {
      question: "Hva er resultatet av `tekst.strip().split('\\n')` når `tekst` er hele fila lest med `read()`?",
      options: ["En liste med én streng per linje, uten linjeskift", "En liste med én streng per linje, hver med sitt linjeskift", "En liste med ett ekstra tomt element til slutt", "Én streng der linjeskiftene er byttet ut med mellomrom"],
      explanation: "Delingen fjerner linjeskiftene, og `.strip()` FØR delingen fjerner det siste, slik at det ikke blir et tomt element til slutt. Alternativet der linjeskiftene er med, beskriver `readlines()`. Det tomme elementet oppstår bare hvis du dropper `.strip()`, og ingenting byttes ut med mellomrom noe sted.",
    },
    {
      question: "Hvilken struktur passer best når oppgaven er å slå opp én bestemt rad på navn?",
      options: ["En ordbok med navnet som nøkkel og raden som verdi", "En 2D-tabell som gås gjennom rad for rad hver gang", "Én lang streng som det søkes i med `in`-testen", "En liste av tall der plassen tilsvarer navnet i fila"],
      explanation: "Ordboken går rett på oppslaget uten å lete. Alternativet med 2D-tabellen virker også, men krever en gjennomgang per oppslag — riktig når du skal gå gjennom alt eller sortere, ikke når du skal slå opp. Søk i én streng finner tegn, ikke rader, og en liste av tall har ingen plass til navnet.",
    },
    {
      question: "Hva er `f.closed` rett etter at en `with open(...) as f:`-blokk er ferdig?",
      options: ["Sann — blokken lukker fila automatisk når den er ferdig", "Usann — `with` åpner fila, men lukking må gjøres med `close()`", "Sann bare hvis du skrev `f.close()` inne i blokken", "Usann helt til programmet avslutter og rydder opp selv"],
      explanation: "`with` lukker fila automatisk når blokken forlates, også hvis det skjer en feil underveis — det er hele poenget med formen. De tre andre forutsetter at du selv må lukke; da ville `with` ikke gitt noe mer enn `open` alene. Boka bruker likevel `open` og `close` som hovedform, fordi arkivets løsningsforslag gjør det.",
    },
  ],
  'tdt4110-4-2': [
    {
      question: "Hva skjer med en fil som allerede finnes, når du åpner den med `open(filnavn, 'w')`?",
      options: ["Den tømmes med én gang, før du har skrevet noe som helst", "Den beholdes, og det du skriver havner bakerst i fila", "Programmet stopper, fordi fila ikke kan opprettes på nytt", "Den beholdes til du kaller `close()`, og tømmes først da"],
      explanation: "`'w'` tømmer fila ved åpningen, uten advarsel — den vanligste stumme datatapfeilen i kapitlet. Alternativet der innholdet blir stående og skrivingen havner bakerst, beskriver `'a'`. Ingen feilmelding kommer, og tømmingen skjer ved åpning, ikke ved lukking.",
    },
    {
      question: "Hva skiller `f.write(tekst)` fra `print(tekst)`?",
      options: ["`write` legger ikke på linjeskift, og tar bare imot strenger", "`write` legger på linjeskift, mens `print` skriver alt på én linje", "`write` skriver til skjerm, mens `print` skriver til den åpne fila", "`write` konverterer tall automatisk, mens `print` krever `str()`"],
      explanation: "`write` skriver nøyaktig strengen den får: intet linjeskift, ingen automatisk konvertering. Alternativet som sier at `write` legger på linjeskift, snur regelen. `write` skriver til fil og `print` til skjerm, ikke omvendt — og det er `print` som tar imot tall uten `str()`.",
    },
    {
      question: "Hva gir `f.write(120)` når `f` er åpnet med `'w'`?",
      options: ["En `TypeError`, fordi `write` bare tar imot strenger", "Linja `120` i fila, fordi tallet konverteres automatisk", "Linja `120` med linjeskift, som om du hadde brukt `print`", "En tom fil, fordi tallet ikke kan skrives og hoppes over"],
      explanation: "`write` krever en streng; tallet må gjennom `str()` først, ellers stopper programmet. De to alternativene som gir linja `120` i fila, forutsetter en automatisk konvertering som ikke finnes. Feilen svelges ikke stille — programmet stopper, og det er en fordel: du oppdager den med én gang.",
    },
    {
      question: "Hvorfor er `f.close()` viktigere når du skriver enn når du leser?",
      options: ["Fordi `close()` tømmer skrivebufferet, så de siste linjene kommer med", "Fordi en åpen fil ikke kan leses av andre programmer før den lukkes", "Fordi `close()` er det som faktisk oppretter fila på disken", "Fordi fila ellers blir stående i skrivemodus til maskinen slås av"],
      explanation: "Det du skriver, samles i en buffer og flyttes til disk i porsjoner; `close()` tømmer den. Alternativet om fila som ikke kan leses av andre, beskriver noe helt annet enn poenget her. Fila opprettes ved `open`, ikke ved `close`, og modusen forsvinner uansett når programmet avslutter.",
    },
    {
      question: "Hvilken form skriver én rad av en 2D-tabell som en linje i fila?",
      options: ["`f.write(';'.join(felt) + '\\n')` der `felt` er strenger", "`f.write(';'.join(rad) + '\\n')` der `rad` inneholder tall", "`f.write(rad + '\\n')` fordi lista skjøtes sammen av `+`", "`f.write(';'.split(felt) + '\\n')` som setter feltene sammen"],
      explanation: "`join` krever at ALLE elementene er strenger, så tallene må konverteres med `str()` først. Alternativet med tall i raden stopper med `TypeError`. En liste kan ikke skjøtes til en streng med `+`, og `split` gjør det motsatte av `join` — den deler.",
    },
    {
      question: "Hva er forholdet mellom `';'.join(felt)` og `.split(';')`?",
      options: ["De er speilbilder: `join` setter sammen, `split` deler opp igjen", "De gjør det samme, men `join` beholder separatoren i resultatet", "`join` deler en streng i felt, mens `split` setter dem sammen", "De kan ikke brukes på samme data, fordi typene ikke passer"],
      explanation: "`join` går fra liste til streng og `split` fra streng til liste, så de opphever hverandre — derfor kan en fil du skriver, leses tilbake av den samme innlesingsfunksjonen. Alternativet som bytter om på dem, snur retningene. Separatoren forsvinner i `split` og settes inn av `join`.",
    },
    {
      question: "Hva skriver `print('{:.2f}'.format(2.345))` ut?",
      options: ["`2.35`, fordi tallet avrundes til to desimaler", "`2.34`, fordi desimalene etter den andre klippes bort", "`2.345`, fordi formatet bare setter et minimum", "`2.3`, fordi `.2f` betyr to tegn i alt etter punktumet"],
      explanation: "`.2f` avrunder til to desimaler. Alternativet med `2.34` beskriver klipping, som ikke er det som skjer. Formatet setter et eksakt antall desimaler, ikke et minimum, og `.2f` teller desimaler — ikke tegn i alt.",
    },
    {
      question: "Hva gjør `'Bergen'.ljust(12)`?",
      options: ["Fyller på med mellomrom til høyre til bredden er 12 tegn", "Fyller på med mellomrom til venstre til bredden er 12 tegn", "Klipper strengen til 12 tegn hvis den er lengre enn det", "Deler strengen i biter på 12 tegn og gir en liste tilbake"],
      explanation: "`ljust` venstrejusterer, altså legger fyllet til høyre; `rjust` gjør det motsatte og brukes til tall. Ingen av dem klipper: er strengen allerede bredere enn feltet, blir den stående uendret. Deling i biter er noe helt annet.",
    },
    {
      question: "Hvilken modus skal brukes for `pickle.dump`?",
      options: ["`'wb'`, fordi `pickle` skriver byte og ikke tekst", "`'w'`, fordi `pickle` skriver en helt vanlig tekstfil", "`'rb'`, fordi `pickle` alltid åpner fila for lesing først", "`'a'`, fordi `pickle` legger objektet til bakerst i fila"],
      explanation: "`pickle` krever binærmodus begge veier: `'wb'` for `dump` og `'rb'` for `load`. Med `'w'` stopper programmet med en `TypeError` om at argumentet må være `str`, ikke `bytes`. `'rb'` er lesemodusen, og `'a'` har ingenting med binærfiler å gjøre.",
    },
    {
      question: "Hva er riktig argumentrekkefølge i `pickle.dump`?",
      options: ["Objektet først, den åpne fila etterpå", "Den åpne fila først, objektet etterpå", "Filnavnet først, objektet etterpå", "Objektet først, filnavnet som tekst etterpå"],
      explanation: "Formen er `pickle.dump(objekt, fil)` — objektet først, og andre argument er et ÅPENT filobjekt, ikke et filnavn. Alternativet som setter fila først, er den vanligste feilen. De to som sender inn filnavnet som tekst, glemmer at fila må åpnes med `open(..., 'wb')` på forhånd.",
    },
    {
      question: "Hva er den praktiske fordelen med `pickle` framfor en tekstfil?",
      options: ["Strukturen kommer tilbake identisk, med tall som fortsatt er tall", "Fila blir lesbar for mennesker og lett å kontrollere i en editor", "Fila kan leses tilbake av innlesingsfunksjonen fra kapittel 4.1", "Lagringen går raskere fordi ingenting må skrives til disken"],
      explanation: "`pickle` serialiserer hele strukturen, så du slipper å parse og konvertere ved innlesing. Alternativet om lesbarhet beskriver det motsatte: en binærfil ser ut som søppel i en editor. Den kan ikke leses av en tekstinnleser, og den skrives til disk som alle andre filer.",
    },
    {
      question: "En fil skal fungere som en logg som vokser for hver kjøring. Hvilken modus er riktig?",
      options: ["`'a'`, som legger til bakerst uten å røre det som står der", "`'w'`, som skriver på slutten av fila hver gang den åpnes", "`'r'`, siden loggen må leses før den kan utvides med mer", "`'wb'`, som er den eneste modusen som beholder gammelt innhold"],
      explanation: "`'a'` er tilføyingsmodus og den eneste av de fire som beholder innholdet og skriver bakerst. `'w'` tømmer fila ved åpning, `'r'` kan ikke skrive i det hele tatt, og `'wb'` er `'w'` i binærmodus — den tømmer også.",
    },
    {
      question: "Hva returnerer en funksjon som bare skriver en tabell til fil, uten `return`?",
      options: ["`None`, fordi funksjonen har en virkning og ikke et resultat", "Filobjektet, som kalleren kan lese videre fra etterpå", "Antall linjer som ble skrevet, som en automatisk teller", "En tom streng, fordi ingenting ble sendt tilbake til kalleren"],
      explanation: "En funksjon uten `return` gir `None`, og det er riktig her: jobben er at fila blir til. Alternativet med filobjektet ville gitt kalleren en lukket fil som ikke kan brukes. Python teller ikke linjer automatisk, og `None` er ikke det samme som en tom streng.",
    },
    {
      question: "Tre `write`-kall skriver `'a'`, `'b\\n'` og `'c'` til en tom fil. Hvor mange linjer får fila?",
      options: ["To, fordi det bare finnes ett linjeskift i det som ble skrevet", "Tre, fordi hvert `write`-kall gir en linje for seg selv", "Én, fordi ingen av kallene avsluttet fila med linjeskift", "Tre, men den siste er tom fordi `c` mangler linjeskift"],
      explanation: "Det er linjeskiftene, ikke antall kall, som deler fila i linjer: teksten blir `ab`, linjeskift, `c` — altså to linjer, der den siste mangler linjeskift. Alternativet med én linje overser linjeskiftet i det andre kallet, og de to som gir tre, teller kall i stedet for skilletegn.",
    },
  ],
  'tdt4110-4-3': [
    {
      question: "Hvilken feiltype oppstår når `open('salg.txt', 'r')` kalles og fila ikke finnes?",
      options: ["`FileNotFoundError`, med selve filnavnet med i meldingen", "`ValueError`, fordi filnavnet ikke peker på noe gyldig", "`IndexError`, fordi det ikke finnes noen fil på den plassen", "`TypeError`, fordi filnavnet ikke kan brukes som en fil"],
      explanation: "Manglende fil gir `FileNotFoundError`, og bare i `open`. `ValueError` handler om en verdi med gal form, `IndexError` om en plass i en liste, og `TypeError` om feil type i en operasjon — ingen av dem har med filsystemet å gjøre.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntry:\n    print(int('7'))\n    print(int('sju'))\n    print('etter')\nexcept ValueError:\n    print('feil')\nprint('slutt')\n```",
      options: ["`7`, deretter `feil`, og til slutt `slutt`", "`7`, så `etter`, så `slutt`", "`7`, så `feil`, så `etter`, så `slutt`", "`feil` og `slutt`, uten at `7` skrives ut"],
      explanation: "Feilen oppstår på den andre `int`-linja, så `etter` kjøres aldri — resten av `try`-blokken hoppes over. Alternativet med `etter` overser det. Alternativet som har begge deler, tror løkka fortsetter der den slapp, og alternativet uten `7` glemmer at den første linja kjørte helt normalt før feilen.",
    },
    {
      question: "Hvorfor er `except FileNotFoundError:` bedre enn en naken `except:`?",
      options: ["Fordi en naken `except` også fanger dine egne skrivefeil i koden", "Fordi en naken `except` er ulovlig Python og ikke kan kompileres", "Fordi en naken `except` bare fanger den første feilen som oppstår", "Fordi en naken `except` krever at du oppgir feilobjektet med `as e`"],
      explanation: "Den nakne varianten fanger ALT, også en `NameError` fra en skrivefeil, og gir deg da en usann feilmelding. Den er fullt lovlig Python og gir bare et lite trekk i arkivets løsningsforslag. Den fanger like mange feil som en spesifikk gren, og `as e` er valgfritt i begge former.",
    },
    {
      question: "Hva bør en filleser returnere når fila ikke finnes?",
      options: ["En feilverdi som `None`, som kalleren selv kan teste på", "Filnavnet som streng, så kalleren vet hva som gikk galt", "Ingenting i det hele tatt, slik at kalleren stopper også", "Feilmeldingen som tekst, slik at den kan skrives ut senere"],
      explanation: "Kalleren må kunne skille «gikk galt» fra «gikk bra», og `None` (eller en tom liste) er formen boka bruker. Å returnere filnavnet eller feilteksten gir kalleren en streng den vil forveksle med data. Å ikke returnere noe flytter bare krasjet ett hakk unna, til første gang kalleren bruker resultatet.",
    },
    {
      question: "Hvor bør `try`-blokken slutte i en robust filleser?",
      options: ["Rett etter `open`, som er den ene linja som kan mangle fila", "Etter hele løkka, slik at også ødelagte linjer fanges opp", "Etter `return`, slik at hele funksjonen er beskyttet av den", "Rett før `open`, slik at åpningen skjer utenfor beskyttelsen"],
      explanation: "`except` fanger feilen uansett hvor i blokken den oppsto, så en kort blokk gir en presis melding. Blokken som dekker hele løkka, fanger også feil i din egen behandling. Å beskytte hele funksjonen er den brede varianten i verste form, og en `try` som slutter FØR `open`, beskytter ingenting.",
    },
    {
      question: "Hva gir `int('dager')` når overskriftsraden ved et uhell ble med i løkka?",
      options: ["`ValueError`, fordi teksten ikke kan tolkes som et heltall", "`TypeError`, fordi en streng ikke kan gjøres om til et tall", "`IndexError`, fordi overskriftsraden ikke skulle vært med", "Tallet 0, fordi Python ikke finner noen siffer i teksten"],
      explanation: "Riktig type (streng), gal form (ikke et tall) gir `ValueError`. `TypeError` ville kommet hvis argumentet hadde vært av en type `int()` ikke godtar i det hele tatt, for eksempel en liste. `IndexError` gjelder plasser i lister, og `int()` gir aldri 0 som stille reserve.",
    },
    {
      question: "En datalinje er `onsdag;svømming`, og koden gjør `felt[2]`. Hva skjer?",
      options: ["`IndexError`, fordi lista bare har plassene 0 og 1", "`ValueError`, fordi linja har feil antall felt", "`KeyError`, fordi plass 2 ikke finnes i strukturen", "Verdien `None`, som kan testes med `is None` etterpå"],
      explanation: "For få felt gir `IndexError` med meldingen `list index out of range`. `ValueError` handler om verdiens form, ikke om lengden på lista. `KeyError` gjelder ordbøker, ikke lister, og Python gir aldri `None` for en plass som ikke finnes.",
    },
    {
      question: "Hva er det tryggeste alternativet til `d['Stavanger']` når nøkkelen kanskje mangler?",
      options: ["`d.get('Stavanger', 0)`, som gir standardverdien i stedet", "`d.index('Stavanger')`, som gir plassen nøkkelen ligger på", "`d['Stavanger', 0]`, som oppgir en reserveverdi direkte", "`d.find('Stavanger')`, som gir en feilverdi når den mangler"],
      explanation: "`.get(nøkkel, standardverdi)` gir standardverdien i stedet for `KeyError`, og setter ikke nøkkelen inn. Ordbøker har verken `.index` eller `.find` — de hører til lister og strenger. Formen med komma inne i klammene lager en tuppelnøkkel, som er noe helt annet.",
    },
    {
      question: "Når kjører `else`-grenen i en `try`-setning?",
      options: ["Bare når det ikke oppsto noen feil i `try`-blokken", "Bare når en feil oppsto, men ingen `except` passet", "Alltid, uansett om det oppsto en feil eller ikke", "Bare når `except`-grenen ikke inneholder `return`"],
      explanation: "`else` er «gikk alt bra»-grenen. Alternativet som beskriver en feil ingen gren fanget, beskriver noe som får programmet til å stoppe, ikke `else`. Grenen som alltid kjører, er `finally`, og innholdet i `except` har ingen betydning for om `else` kjører.",
    },
    {
      question: "Når kjører `finally`-grenen?",
      options: ["Alltid — også når `try` eller `except` inneholder `return`", "Bare når ingen av `except`-grenene passet til feilen", "Bare når det ikke oppsto noen feil i `try`-blokken", "Aldri hvis funksjonen returnerer før den kommer dit"],
      explanation: "`finally` kjører alltid, også når du returnerer ut av `try`-setningen — derfor egner den seg til opprydding som `f.close()`. Grenen som bare kjører når alt gikk bra, er `else`. De to andre beskriver situasjoner der `finally` faktisk kjører likevel.",
    },
    {
      question: "Hvorfor legges den indre `try`-blokken rundt konverteringen inne i løkka?",
      options: ["Så en ødelagt linje bare koster seg selv, ikke hele innlesingen", "Så løkka avbrytes med én gang en ødelagt linje dukker opp", "Så konverteringen kan gjøres om igjen på den samme linja", "Så `except`-grenen kan returnere `None` for hele funksjonen"],
      explanation: "`try/except` inne i en løkke avbryter bare den runden; løkka fortsetter med neste linje. Alternativet som avbryter hele løkka, beskriver en `try` lagt UTENFOR den. Ingenting gjøres om igjen, og et `return` inni løkka ville avsluttet funksjonen etter første ødelagte linje.",
    },
    {
      question: "Hva betyr `except (ValueError, IndexError):`?",
      options: ["Grenen fanger begge feiltypene og behandler dem på samme måte", "Grenen fanger bare feil som er både av den ene og den andre typen", "Grenen fanger `ValueError` først og `IndexError` bare hvis den feiler", "Grenen er ugyldig — hver feiltype må ha sin egen `except`"],
      explanation: "Et tuppel av typer fanges av samme gren, og formen er kortere enn to grener når håndteringen er den samme. Ingen feil kan være av to typer samtidig, det er ingen rekkefølge mellom dem, og formen er fullt gyldig Python.",
    },
    {
      question: "Hvilken feil oppstår i `sum(tall) / len(tall)` når `tall` er tom?",
      options: ["`ZeroDivisionError`, fordi `len(tall)` her er lik 0", "`ValueError`, fordi en tom liste ikke kan summeres", "`IndexError`, fordi det ikke finnes noe element å hente", "`TypeError`, fordi `sum` av en tom liste ikke er et tall"],
      explanation: "`sum([])` er 0 og fullt lovlig; det er divisjonen på `len(tall)` lik 0 som stopper programmet. De tre andre typene forutsetter at `sum` eller indekseringen feiler, men ingen av delene skjer på en tom liste.",
    },
    {
      question: "Hva er den praktiske fordelen med `except FileNotFoundError as e:`?",
      options: ["Du får Pythons egen forklaring og kan skrive den ut ved siden av din", "Du får feilen fanget, noe som ikke skjer uten `as e` i grenen", "Du får programmet til å fortsette der feilen oppsto, i stedet for etter", "Du får en tilgang til fila som gjør at innlesingen kan prøves på nytt"],
      explanation: "`as e` gir deg feilobjektet, og `print(e)` viser Pythons melding. Feilen fanges like godt uten det — formen er valgfri. Programmet fortsetter alltid etter `try`-setningen, aldri der feilen oppsto, og du får ingen ny tilgang til fila.",
    },
    {
      question: "Når er en `if`-test bedre enn `try/except`?",
      options: ["Når feilen kan forutses billig, som med `if len(felt) == 3:`", "Når feilen kan oppstå flere steder i den samme funksjonen", "Når feilen skyldes noe utenfor programmet, som en manglende fil", "Når feilen skal føre til at funksjonen returnerer en feilverdi"],
      explanation: "Kan situasjonen sjekkes på forhånd med én linje, er testen tydeligere enn maskineriet. Manglende fil kan derimot ikke forutses uten å prøve å åpne den, så der er `try/except` riktig verktøy. Antall steder og valget av returverdi avgjør ikke hvilken form som passer.",
    },
    {
      question: "Hva må kalleren gjøre når `les_tabell` kan returnere `None`?",
      options: ["Teste med `if tabell is None:` før tabellen brukes videre", "Fange en `TypeError` rundt hvert eneste kall til funksjonen", "Gjøre om `None` til en tom liste med `list(None)` først", "Kalle funksjonen på nytt til den returnerer noe annet enn `None`"],
      explanation: "Feilverdien er bare nyttig hvis noen tester på den; uten testen krasjer kalleren litt senere i stedet, og all robustheten i leseren er bortkastet. Å fange `TypeError` rundt hvert kall er den brede `try`-feilen i ny form, `list(None)` er ikke lovlig, og et nytt kall gir samme svar.",
    },
  ],
  'tdt4110-5-1': [
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(list(range(1, 6, 2)))\n```",
      options: ["`[1, 3, 5]`", "`[1, 2, 3, 4, 5]`", "`[1, 3, 5, 7]`", "`[2, 4, 6, 8]`"],
      explanation: "Rekka starter på 1, øker med 2 og stopper FØR 6, altså 1, 3 og 5. `[1, 2, 3, 4, 5]` er svaret om du overser steget, `[1, 3, 5, 7]` om du tar med en verdi forbi stoppen, og `[2, 4, 6, 8]` om du starter på steget i stedet for på startverdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(list(range(10, 0, -3)))\n```",
      options: ["`[10, 7, 4, 1]`", "`[10, 7, 4, 1, 0]`", "`[10, 7, 4, 0]`", "`[9, 6, 3, 0]`"],
      explanation: "Med negativt steg teller rekka nedover og stopper FØR 0, så den slutter på 1. `[10, 7, 4, 1, 0]` tar med stoppverdien, `[10, 7, 4, 0]` hopper over 1 og tar med 0, og `[9, 6, 3, 0]` starter ett steg for langt inne.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(len(list(range(3, 3))))\n```",
      options: ["`0`", "`3`", "`1`", "`2`"],
      explanation: "`range(3, 3)` er tom fordi stoppverdien aldri er med, så lengden er 0 og en løkke over den kjører null ganger. `3` er lengden du får om du leser den som `range(3)`, `1` om du tror den gir akkurat tallet 3, og `2` svarer til `range(1, 3)`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntall = [2, 4, 6, 8, 10]\nfor i in range(1, len(tall), 2):\n    tall[i] = 0\nprint(tall)\n```",
      options: ["`[2, 0, 6, 0, 10]`", "`[0, 4, 0, 8, 0]`", "`[0, 0, 0, 0, 0]`", "`[2, 0, 6, 0, 0]`"],
      explanation: "`range(1, 5, 2)` gir indeks 1 og 3, altså det andre og fjerde tallet. `[0, 4, 0, 8, 0]` er svaret om du starter på indeks 0, `[0, 0, 0, 0, 0]` om du nuller alle, og `[2, 0, 6, 0, 0]` om du tar med indeks 4 i tillegg.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntotal = 0\nfor i in range(4):\n    total = total + i * i\nprint(total)\n```",
      options: ["`14`", "`30`", "`16`", "`10`"],
      explanation: "Løkka summerer kvadratene av 0, 1, 2 og 3, altså 0 + 1 + 4 + 9. `30` er svaret om du tar med 4 og legger til 16, `16` er bare det leddet alene, og `10` er summen av tallene uten kvadrering.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nn = 0\nfor i in range(2, 11, 3):\n    n = n + 1\nprint(n, i)\n```",
      options: ["`3 8`", "`3 11`", "`4 11`", "`4 8`"],
      explanation: "Rekka er 2, 5 og 8 — tre runder — og løkkevariabelen står igjen på sin siste verdi, 8, etter løkka. `3 11` og `4 11` antar at variabelen ender på stoppverdien, og `4 8` teller én runde for mye.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [10, 20, 30, 40, 50]\nprint(x[1:4])\n```",
      options: ["`[20, 30, 40]`", "`[10, 20, 30]`", "`[20, 30, 40, 50]`", "`[20, 30]`"],
      explanation: "Utsnittet går fra og med indeks 1 til men ikke med 4, altså tre elementer. `[10, 20, 30]` teller fra feil startindeks, `[20, 30, 40, 50]` tar med indeks 4, og `[20, 30]` stopper én for tidlig.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [10, 20, 30, 40, 50]\nprint(x[2], x[2:3])\n```",
      options: ["`30 [30]`", "`30 30`", "`[30] [30]`", "`30 [30, 40]`"],
      explanation: "`x[2]` er ett element og skrives som et bart tall, mens `x[2:3]` er ei liste med ett element og skrives med hakeparenteser. `30 30` og `[30] [30]` gir begge to like former, og `30 [30, 40]` tar med ett element for mye i utsnittet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 'kodesporing'\nprint(s[::-1])\n```",
      options: ["`gniropsedok`", "`gnirospedok`", "`kodesporing`", "`gniropsedo`"],
      explanation: "`s[::-1]` gir hele strengen baklengs, tegn for tegn. `gnirospedok` har to bokstaver byttet om inne i ordet, `kodesporing` er originalen, og `gniropsedo` mister det siste tegnet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 'kodesporing'\nprint(s[1::2])\n```",
      options: ["`oeprn`", "`kdsoig`", "`oepri`", "`odesporing`"],
      explanation: "Utsnittet starter på indeks 1 og hopper to og to, altså annenhver bokstav fra den andre. `kdsoig` er annenhver fra den FØRSTE, `oepri` mister siste bokstav, og `odesporing` er bare strengen uten første tegn.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = ['a', 'b', 'c', 'd']\nprint(x[-2:], x[-1])\n```",
      options: ["`['c', 'd'] d`", "`['b', 'c'] c`", "`['c', 'd'] ['d']`", "`['d', 'c'] d`"],
      explanation: "`x[-2:]` er de to siste som ei liste, og `x[-1]` er det siste elementet alene. `['b', 'c'] c` teller feil bakfra, `['c', 'd'] ['d']` gjør det siste elementet om til ei liste, og `['d', 'c'] d` snur rekkefølgen.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a, len(b))\n```",
      options: ["`[1, 2, 3, 4] 4`", "`[1, 2, 3] 4`", "`[1, 2, 3, 4] 3`", "`[1, 2, 3] 3`"],
      explanation: "`b = a` gir bare et nytt navn på den samme lista, så `append` endrer begge. `[1, 2, 3] 4` og `[1, 2, 3] 3` antar at `b` er en kopi, og `[1, 2, 3, 4] 3` teller lengden før tillegget.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'a': 2}\nprint(d.get('b', 0), len(d))\n```",
      options: ["`0 1`", "`0 2`", "`None 1`", "`0 0`"],
      explanation: "`get` gir standardverdien 0 når nøkkelen mangler, og setter den ikke inn, så ordboka har fortsatt bare én nøkkel. `0 2` tror nøkkelen legges til, `None 1` glemmer at standardverdien er oppgitt, og `0 0` teller feil antall nøkler.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nordene = ['sol', 'is', 'sol']\nd = {}\nfor o in ordene:\n    d[o] = d.get(o, 0) + 1\nprint(d)\n```",
      options: ["`{'sol': 2, 'is': 1}`", "`{'is': 1, 'sol': 2}`", "`{'sol': 1, 'is': 1}`", "`{'sol': 3, 'is': 1}`"],
      explanation: "Telleren gir `sol` verdien 2 og `is` verdien 1, og nøklene står i den rekkefølgen de dukket opp. `{'is': 1, 'sol': 2}` er alfabetisk sortert, `{'sol': 1, 'is': 1}` teller ikke gjentakelsen, og `{'sol': 3, 'is': 1}` teller én for mye.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'b': 5, 'a': 9}\nprint(sorted(d))\n```",
      options: ["`['a', 'b']`", "`[5, 9]`", "`['b', 'a']`", "`[9, 5]`"],
      explanation: "`sorted` over en ordbok går gjennom NØKLENE og gir dem sortert som ei liste. `[5, 9]` og `[9, 5]` sorterer verdiene i stedet, og `['b', 'a']` beholder innsettingsrekkefølgen uten å sortere.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'x': [1, 2], 'y': [3]}\nprint(len(d), sum(d['x']))\n```",
      options: ["`2 3`", "`3 3`", "`2 2`", "`2 6`"],
      explanation: "Ordboka har to nøkler, og verdien til `x` er ei liste med summen 3. `3 3` teller elementene i stedet for nøklene, `2 2` teller antall elementer i lista i stedet for summen, og `2 6` summerer alle verdiene i hele ordboka.",
    },
    {
      question: "Hva skjer med ordboka når du kaller `d.get('ny', 0)` og nøkkelen `'ny'` ikke finnes?",
      options: ["Ordboka er uendret, og uttrykket gir verdien 0 tilbake", "Nøkkelen settes inn med verdien 0, og uttrykket gir 0", "Ordboka er uendret, og uttrykket gir `None` tilbake", "Oppslaget avbryter programmet med en `KeyError`"],
      explanation: "`get` leser bare — den skriver aldri til ordboka, og den gir standardverdien når nøkkelen mangler. Svaret om at nøkkelen settes inn beskriver `d.setdefault`, svaret med `None` gjelder `get` uten standardverdi, og `KeyError` er det `d['ny']` med hakeparenteser gir.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = -3\ny = -3\nprint(x > 0 and y > 0 or x == y)\n```",
      options: ["`True`", "`False`", "`None`", "`-3`"],
      explanation: "`and` binder sterkere enn `or`, så uttrykket er `(x > 0 and y > 0) or (x == y)`: venstresiden er usann, men tallene er like. `False` er svaret om du leser uttrykket strengt fra venstre, `None` forveksler et boolsk uttrykk med en funksjon uten retur, og `-3` gir verdien i stedet for sannhetsverdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef f(a):\n    if a > 10:\n        return 'stor'\n    elif a > 5:\n        return 'middels'\n\nprint(f(3))\n```",
      options: ["`None`", "`liten`", "`middels`", "`False`"],
      explanation: "Ingen av grenene er sanne for 3, kjøringen faller ut nederst i funksjonen, og da returneres `None`. `liten` finnes ikke i koden, `middels` krever at `a` er over 5, og `False` er ikke det samme som «ingen returverdi».",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(not 0 and 1 < 2)\n```",
      options: ["`True`", "`False`", "`None`", "`1`"],
      explanation: "`not 0` er sann fordi 0 regnes som usann, og `1 < 2` er sann, så `and` gir sant. `False` forutsetter at `not 0` er usann, `None` hører til funksjoner uten retur, og `1` gir tallet i stedet for sannhetsverdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nverdier = []\nprint(len(verdier) == 0 or verdier[0] > 5)\n```",
      options: ["`True`", "`False`", "`IndexError`", "`None`"],
      explanation: "`or` kortslutter: venstresiden er sann, så høyresiden regnes aldri ut, og oppslaget i den tomme lista skjer ikke. `False` overser at lista er tom, `IndexError` forutsetter at begge sidene alltid regnes ut, og `None` hører til funksjoner uten retur.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(-125 // 60)\n```",
      options: ["`-3`", "`-2`", "`-2.08`", "`2`"],
      explanation: "`//` avrunder NEDOVER, altså mot minus uendelig, så −2,08 blir −3. `-2` avrunder mot null slik en kalkulator gjør, `-2.08` er vanlig divisjon med `/`, og `2` glemmer fortegnet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(-125 % 60)\n```",
      options: ["`55`", "`-5`", "`-55`", "`5`"],
      explanation: "Resten har alltid samme fortegn som divisoren, og `-3 * 60 + 55` er `-125`. `-5` og `-55` gir resten negativt fortegn, og `5` er resten av den positive utgaven av tallet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(7 / 2, 7 // 2)\n```",
      options: ["`3.5 3`", "`3.5 3.5`", "`3 3`", "`3.5 4`"],
      explanation: "`/` gir alltid et flyttall, `//` gir heltallet under. `3.5 3.5` bruker vanlig divisjon begge steder, `3 3` bruker heltallsdeling begge steder, og `3.5 4` avrunder oppover.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 9065\nprint(s // 3600, (s % 3600) // 60, s % 60)\n```",
      options: ["`2 31 5`", "`2 31 65`", "`2 30 5`", "`2 151 5`"],
      explanation: "Tidsformelen gir 2 timer, 31 minutter og 5 sekunder. `2 31 65` glemmer å ta resten etter minuttene, `2 30 5` regner ett minutt for lite, og `2 151 5` deler ikke bort timene før minuttene regnes.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint('rad', 1, sep=':', end='!')\nprint()\n```",
      options: ["`rad:1!`", "`rad 1!`", "`rad:1`", "`rad: 1!`"],
      explanation: "`sep=':'` bytter ut mellomrommet mellom argumentene, og `end='!'` bytter ut linjeskiftet. `rad 1!` beholder standardskilletegnet, `rad:1` overser `end`, og `rad: 1!` bruker begge deler samtidig.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfor v in [1, 2, 3]:\n    print(v, end='')\nprint()\n```",
      options: ["`123`", "`1 2 3`", "`1,2,3`", "`321`"],
      explanation: "`end=''` fjerner linjeskiftet, så tallene havner rett etter hverandre på én linje, og den tomme `print()` avslutter linja. `1 2 3` forutsetter et mellomrom som ikke finnes, `1,2,3` et komma som ikke finnes, og `321` snur rekkefølgen.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt = [[1, 2], [3, 4]]\nprint(t[1][0], len(t), len(t[0]))\n```",
      options: ["`3 2 2`", "`2 2 2`", "`3 4 2`", "`1 2 2`"],
      explanation: "`t[1][0]` er rad 1, kolonne 0, altså 3; tabellen har to rader og to kolonner. `2 2 2` bytter om rad og kolonne, `3 4 2` teller celler i stedet for rader, og `1 2 2` leser første rad i stedet for andre.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [3, 1, 2]\nresultat = x.sort()\nprint(resultat, x)\n```",
      options: ["`None [1, 2, 3]`", "`[1, 2, 3] [1, 2, 3]`", "`None [3, 1, 2]`", "`[1, 2, 3] [3, 1, 2]`"],
      explanation: "`.sort()` sorterer lista der den står og returnerer `None`, så variabelen blir `None` mens lista er sortert. `[1, 2, 3] [1, 2, 3]` forveksler den med `sorted`, `None [3, 1, 2]` tror lista er urørt, og `[1, 2, 3] [3, 1, 2]` bytter om på de to.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nantall = 0\nfor i in range(3):\n    for j in range(4):\n        antall = antall + 1\nprint(antall)\n```",
      options: ["`12`", "`7`", "`16`", "`9`"],
      explanation: "En nøstet løkke kjører den indre kroppen én gang per kombinasjon, altså tre ganger fire. `7` legger grensene sammen i stedet for å gange dem, `16` ganger den indre grensa med seg selv, og `9` gjør det samme med den ytre.",
    },
  ],
  'tdt4110-5-2': [
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef fakultet(n):\n    if n <= 1:\n        return 1\n    return n * fakultet(n - 1)\n\nprint(fakultet(5))\n```",
      options: ["`120`", "`720`", "`15`", "`25`"],
      explanation: "Fakultet av 5 er 5 ganger 4 ganger 3 ganger 2, altså 120. `720` er fakultet av 6, altså ett kall for mye, `15` er summen av tallene i stedet for produktet, og `25` er 5 ganget med seg selv.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef fakultet(n):\n    if n <= 1:\n        return 1\n    return n * fakultet(n - 1)\n\nprint(fakultet(0), fakultet(1))\n```",
      options: ["`1 1`", "`0 1`", "`1 0`", "`0 0`"],
      explanation: "Grunntilfellet `n <= 1` fanger begge argumentene og gir 1 for hver av dem. `0 1` og `0 0` forutsetter at fakultet av 0 er 0, og `1 0` snur det samme feilsvaret.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef sfd(a, b):\n    if b == 0:\n        return a\n    return sfd(b, a % b)\n\nprint(sfd(60, 24))\n```",
      options: ["`12`", "`6`", "`24`", "`4`"],
      explanation: "Kjeden er 60 og 24, så 24 og 12, så 12 og 0 — og da returneres 12, som er største felles divisor. `6` og `4` er felles divisorer, men ikke de største, og `24` er bare det minste av de to tallene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef sfd(a, b):\n    if b == 0:\n        return a\n    return sfd(b, a % b)\n\nprint(sfd(7, 13))\n```",
      options: ["`1`", "`7`", "`13`", "`91`"],
      explanation: "7 og 13 har ingen felles divisor større enn 1, så kjeden ender på 1. `7` og `13` er tallene selv, og `91` er produktet av dem.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef tverrsum(n):\n    if n == 0:\n        return 0\n    return n % 10 + tverrsum(n // 10)\n\nprint(tverrsum(3080))\n```",
      options: ["`11`", "`38`", "`12`", "`3080`"],
      explanation: "Sifrene 3, 0, 8 og 0 summeres til 11, og nullene er ikke spesialtilfeller. `38` limer sifrene sammen i stedet for å summere dem, `12` teller ett siffer feil, og `3080` er tallet selv.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef tverrsum(n):\n    if n == 0:\n        return 0\n    return n % 10 + tverrsum(n // 10)\n\nprint(tverrsum(0))\n```",
      options: ["`0`", "`1`", "`10`", "`None`"],
      explanation: "Argumentet treffer grunntilfellet med én gang, så funksjonen returnerer 0 uten noe rekursivt kall. `1` og `10` forutsetter minst ett steg, og `None` ville krevd at grunntilfellet manglet en `return`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef potens(g, e):\n    if e == 0:\n        return 1\n    return g * potens(g, e - 1)\n\nprint(potens(3, 4))\n```",
      options: ["`81`", "`12`", "`64`", "`27`"],
      explanation: "3 ganges med seg selv fire ganger, altså 81. `12` legger sammen i stedet for å gange, `64` bytter om grunntall og eksponent, og `27` gjør ett steg for lite.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef potens(g, e):\n    if e == 0:\n        return 1\n    return g * potens(g, e - 1)\n\nprint(potens(5, 0), potens(1, 9))\n```",
      options: ["`1 1`", "`0 1`", "`5 9`", "`0 9`"],
      explanation: "Ethvert tall opphøyd i 0 er 1, og 1 opphøyd i hva som helst er 1. `0 1` og `0 9` forutsetter at grunntilfellet gir 0, og `5 9` returnerer argumentene i stedet for å regne.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(7))\n```",
      options: ["`13`", "`21`", "`8`", "`14`"],
      explanation: "Rekka er 0, 1, 1, 2, 3, 5, 8, 13, så det åttende tallet — indeks 7 — er 13. `21` er ett steg for langt, `8` ett steg for kort, og `14` er summen av to naboer lenger nede i rekka.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(0), fib(1), fib(2))\n```",
      options: ["`0 1 1`", "`1 1 2`", "`0 1 2`", "`1 1 1`"],
      explanation: "Grunntilfellet returnerer `n` selv, så `fib(0)` er 0 og `fib(1)` er 1, og `fib(2)` er summen av dem. `1 1 2` og `1 1 1` forutsetter at grunntilfellet gir 1, og `0 1 2` regner `fib(2)` feil.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef total(x):\n    if len(x) == 0:\n        return 0\n    return x[0] + total(x[1:])\n\nprint(total([4, 9, 2]), total([]))\n```",
      options: ["`15 0`", "`15 None`", "`4 0`", "`15 1`"],
      explanation: "Funksjonen summerer lista, og den tomme lista treffer grunntilfellet og gir 0. `15 None` forutsetter at grunntilfellet mangler retur, `4 0` returnerer bare første element, og `15 1` gir feil verdi for tomtilfellet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef snu(s):\n    if s == '':\n        return ''\n    return snu(s[1:]) + s[0]\n\nprint(snu('trikk'))\n```",
      options: ["`kkirt`", "`trikk`", "`rikkt`", "`kkitr`"],
      explanation: "Første tegn flyttes bakerst i hvert steg, så hele strengen snus. `trikk` er originalen, `rikkt` flytter bare det første tegnet én plass bakover, og `kkitr` har de to siste tegnene byttet om.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef f(n):\n    if n == 0:\n        return 0\n    f(n - 1)\n    return n\n\nprint(f(4))\n```",
      options: ["`4`", "`10`", "`0`", "`None`"],
      explanation: "Det rekursive kallet står uten `return`, så svaret kastes — men den siste linja returnerer `n`, altså 4. `10` summerer alle kallene, `0` antar at grunntilfellets verdi bobler opp, og `None` ville krevd at funksjonen manglet `return` helt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef ned(n):\n    if n == 0:\n        return ''\n    return str(n) + ned(n - 1)\n\nprint(ned(4))\n```",
      options: ["`4321`", "`1234`", "`432`", "`10`"],
      explanation: "Sifferet legges FORAN svaret fra det neste kallet, så tallene kommer i synkende rekkefølge. `1234` er svaret om leddene byttes om, `432` stopper ett kall for tidlig, og `10` summerer i stedet for å bygge en streng.",
    },
    {
      question: "Hvorfor skrives grunntilfellet i fakultet som `if n <= 1` og ikke som `if n == 1`?",
      options: ["Fordi `n <= 1` også fanger argumentet 0, som ellers ville løpt forbi utgangen", "Fordi `n == 1` er en syntaksfeil når argumentet er et heltall", "Fordi `n <= 1` gjør funksjonen raskere ved at den hopper over et steg", "Fordi `n == 1` ville fått funksjonen til å returnere `None` for alle argumenter"],
      explanation: "Med `n == 1` treffer `fakultet(0)` aldri utgangen, og kallene fortsetter nedover i negative tall til stakken er full. Svaret om syntaksfeil er galt fordi `==` er lovlig, hastighetssvaret blander sammen to ulike ting, og `None` oppstår først når `return` mangler.",
    },
    {
      question: "En rekursiv funksjon avbrytes med meldingen `RecursionError: maximum recursion depth exceeded`. Hva forteller det deg?",
      options: ["At funksjonen aldri når grunntilfellet — det mangler, eller argumentet krymper ikke", "At argumentet var for stort, og at funksjonen ville regnet riktig for et mindre tall", "At funksjonen mangler `return` foran det rekursive kallet sitt", "At rekursjon ikke kan brukes på den datatypen argumentet har"],
      explanation: "Meldingen er et symptom på at kjeden aldri stopper, og årsaken ligger alltid i grunntilfellet eller i steget. Et for stort argument gir samme melding bare i sjeldne tilfeller, en glemt `return` gir `None` uten krasj, og datatypen har ingenting med dybden å gjøre.",
    },
    {
      question: "Hva er forskjellen på det rekursive steget i fakultet og i potens?",
      options: ["Fakultet ganger med tallet som telles ned; potens med et fast grunntall", "Fakultet har to grunntilfeller, mens potens klarer seg med ett enkelt", "Fakultet teller argumentet oppover, mens potens teller det nedover mot null", "Fakultet bruker `//` i steget sitt, mens potens bruker vanlig multiplikasjon"],
      explanation: "I fakultet er faktoren `n`, som synker for hvert kall; i potens er faktoren grunntallet, som er det samme hele veien. Fakultet har ett grunntilfelle, begge teller nedover, og ingen av dem bruker heltallsdeling.",
    },
    {
      question: "Hvorfor må kall-stakken bygges utover FØR returverdiene foldes innover når du sporer et rekursivt kall?",
      options: ["Fordi ingen av de ventende kallene kan regnes ferdig før grunntilfellet har svart", "Fordi Python regner ut alle argumentene på forhånd og deretter kaller funksjonen én gang", "Fordi grunntilfellet alltid er det første kallet som starter i en rekursiv kjede", "Fordi returverdiene ellers kommer i samme rekkefølge som kallene ble startet"],
      explanation: "Hvert kall står og venter på svaret fra kallet under seg, så du må helt ned før du kan regne noe. Python kaller funksjonen én gang per nivå, grunntilfellet er det SISTE kallet som startes, og returverdiene kommer nettopp i motsatt rekkefølge av kallene.",
    },
    {
      question: "Hvor mange ganger kalles `tverrsum` når du regner ut `tverrsum(4072)`?",
      options: ["Fem ganger — ett per siffer, pluss kallet som treffer grunntilfellet", "Fire ganger — ett kall for hvert av de fire sifrene som finnes i tallet", "Tre ganger — nullen i tallet gir ikke noe eget rekursivt kall", "Én gang — den rekursive linja regnes ut i det samme kallet"],
      explanation: "Kjeden er 4072, 407, 40, 4 og til slutt 0, altså fem kall, og grunntilfellet må telles med. Fire kall glemmer grunntilfellet, tre kall antar at nullsifferet hoppes over, og ett kall beskriver ikke rekursjon i det hele tatt.",
    },
    {
      question: "Oppgaveteksten ber uttrykkelig om en **rekursiv** funksjon, og du leverer en korrekt løkkeløsning. Hva skjer med uttellingen?",
      options: ["Den gir lite eller ingen uttelling — oppgaven tester nettopp rekursjonen", "Den gir full uttelling, fordi flere korrekte løsninger alltid sidestilles i dette emnet", "Den gir full uttelling så lenge du skriver en kommentar om at løkka er raskere", "Den gir null uttelling, og hele programmeringsoppgaven regnes som ubesvart"],
      explanation: "Sidestillingen av flere korrekte løsninger gjelder når oppgaven ikke har bestemt formen; ber den om rekursjon, er formen en del av kravet. En kommentar endrer ikke det, og resten av oppgaven vurderes fortsatt for seg.",
    },
    {
      question: "Hva er grunntilfellet i en rekursiv funksjon som går gjennom ei liste med utsnittet `x[1:]`?",
      options: ["Den tomme lista, testet med `len(x) == 0`", "Lista med akkurat ett element, testet med `len(x) == 1`", "Det første elementet i lista, testet med `x[0] == 0`", "Hele lista uendret, testet med `x == x[1:]`"],
      explanation: "Utsnittet krymper lista med ett element om gangen, og til slutt står du igjen med den tomme lista. Testen på ett element virker for ikke-tomme lister, men krasjer på den tomme; de to siste testene ser på innholdet i stedet for på lengden.",
    },
    {
      question: "Hvorfor er rekursiv Fibonacci treg sammenlignet med de andre klassikerne?",
      options: ["Fordi steget har to rekursive kall, og de samme delverdiene regnes ut om igjen mange ganger", "Fordi grunntilfellet returnerer `n` i stedet for et fast tall, og det koster et ekstra oppslag", "Fordi hvert kall lager en ny kopi av hele tallrekka før det regner videre", "Fordi addisjon er en tyngre operasjon for datamaskinen enn multiplikasjon"],
      explanation: "To kall per steg gir et tre av kall der `fib(2)` regnes ut flere ganger, og arbeidet vokser raskt med `n`. Hva grunntilfellet returnerer har ingen betydning for antallet, ingen tallrekke kopieres, og addisjon er ikke tyngre enn multiplikasjon.",
    },
  ],
  'tdt4110-5-3': [
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(x):\n    total = 0\n    for v in x:\n        if v > 0:\n            total = total + v\n    return total\n```",
      options: ["Returnerer summen av de positive tallene i lista", "Returnerer antall positive tall som finnes i lista", "Returnerer summen av alle tallene i lista, uansett fortegn", "Returnerer det største positive tallet i lista"],
      explanation: "Variabelen legger til selve verdien, ikke 1, og bare når tallet er positivt. Svaret om antall beskriver telleren, svaret om alle tallene overser betingelsen, og svaret om det største beskriver et helt annet mønster.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(ord_liste):\n    n = 0\n    for o in ord_liste:\n        if len(o) > 4:\n            n = n + 1\n    return n\n```",
      options: ["Teller hvor mange av ordene som har mer enn fire bokstaver", "Teller hvor mange av ordene som har minst fire bokstaver i seg", "Returnerer det lengste ordet blant ordene i lista", "Returnerer samlet lengde på alle ordene i lista"],
      explanation: "Telleren økes med 1 for hvert ord der lengden er strengt større enn 4. Svaret med «minst fire» ville krevd `>=`, svaret om det lengste ordet returnerer en streng, og samlet lengde ville krevd at lengden ble lagt til.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(x):\n    ny = []\n    for i in range(0, len(x), 2):\n        ny.append(x[i])\n    return ny\n```",
      options: ["Returnerer ei ny liste med annethvert element fra og med det første", "Returnerer ei ny liste med annethvert element, fra og med det andre", "Returnerer ei ny liste med alle elementene i motsatt rekkefølge", "Returnerer ei ny liste med elementene på plassene 0 og 2"],
      explanation: "Rekka starter på 0 og hopper to og to, så indeks 0, 2, 4 og videre kommer med. Å starte på det andre ville krevd `range(1, len(x), 2)`, ingenting snus, og løkka stopper ikke etter indeks 2.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(x):\n    for v in x:\n        if v <= 0:\n            return False\n    return True\n```",
      options: ["Sjekker om alle tallene i lista er positive", "Sjekker om minst ett av tallene i lista er positivt", "Sjekker om alle tallene i lista er negative eller null", "Returnerer det første tallet i lista som ikke er positivt"],
      explanation: "Funksjonen gir `False` så snart den finner et tall som ikke er positivt, og `True` bare hvis den kommer gjennom hele lista. Svaret om minst ett beskriver motsatt logikk, svaret om negative snur betingelsen, og ingen verdi fra lista returneres.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(x):\n    beste = 0\n    for i in range(len(x)):\n        if x[i] < x[beste]:\n            beste = i\n    return beste\n```",
      options: ["Returnerer indeksen til det minste tallet i lista", "Returnerer selve verdien til det minste tallet i lista", "Returnerer indeksen til det største tallet i lista", "Returnerer antall tall i lista som er mindre enn det første"],
      explanation: "Variabelen holder på en INDEKS, ikke en verdi, og sammenligningen `<` gjør at den peker på det minste. Å returnere verdien ville krevd `x[beste]`, `>` ville gitt det største, og ingenting telles.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(tabell):\n    d = {}\n    for rad in tabell:\n        d[rad[0]] = rad[1]\n    return d\n```",
      options: ["Bygger en ordbok der første kolonne blir nøkkel og andre kolonne verdi", "Bygger en ordbok der andre kolonne blir nøkkel og første kolonne verdi", "Bygger en ordbok som teller hvor mange ganger hver rad forekommer", "Bygger en ordbok der hver nøkkel peker på hele raden den kom fra"],
      explanation: "Tilordningen setter `rad[0]` som nøkkel og `rad[1]` som verdi, én rad om gangen. De to første svarene snur rollene, telleren ville krevd `get`, og hele raden ville krevd `d[rad[0]] = rad`.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(n):\n    if n == 0:\n        return 0\n    return n % 10 + f(n // 10)\n```",
      options: ["Returnerer tverrsummen, altså summen av sifrene i tallet", "Returnerer antall sifre i et positivt heltall", "Returnerer sifrene i et positivt heltall i motsatt rekkefølge", "Returnerer det siste sifferet i et positivt heltall"],
      explanation: "Hvert steg legger til siste siffer og sender resten videre, så alle sifrene summeres. Antall sifre ville krevd at 1 ble lagt til, ingenting bygges som streng, og bare det siste sifferet ville krevd ett `return` uten kall.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(s):\n    ny = ''\n    for tegn in s:\n        ny = tegn + ny\n    return ny\n```",
      options: ["Returnerer strengen med tegnene i motsatt rekkefølge", "Returnerer strengen uendret, med tegnene i samme rekkefølge", "Returnerer strengen med det første tegnet flyttet bakerst", "Returnerer strengen med alle gjentatte tegn fjernet"],
      explanation: "Hvert nytt tegn settes FORAN det som er bygd så langt, så strengen snus. Å legge tegnet bakerst ville gitt originalen, bare ett tegn flyttes ikke, og ingen sammenligning fjerner noe.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(tabell, navn):\n    k = tabell[0].index(navn)\n    verdier = []\n    for rad in tabell[1:]:\n        verdier.append(float(rad[k]))\n    return sum(verdier) / len(verdier)\n```",
      options: ["Returnerer gjennomsnittet av verdiene i den navngitte kolonnen", "Returnerer summen av verdiene i den navngitte kolonnen", "Returnerer antall rader som har en verdi i den navngitte kolonnen", "Returnerer den høyeste verdien i den navngitte kolonnen"],
      explanation: "Summen deles på antall verdier, og overskriftsraden hoppes over med `tabell[1:]`. Summen alene ville manglet divisjonen, antallet ville vært `len(verdier)`, og den høyeste ville krevd en sammenligning.",
    },
    {
      question: "Hvilken setning beskriver best hva funksjonen gjør?\n\n```python\ndef f(x, y):\n    felles = []\n    for v in x:\n        if v in y and v not in felles:\n            felles.append(v)\n    return felles\n```",
      options: ["Returnerer verdiene som finnes i begge listene, uten duplikater", "Returnerer verdiene som finnes i minst én av de to listene", "Returnerer verdiene i den første lista som ikke finnes i den andre", "Returnerer antall verdier som finnes i begge listene"],
      explanation: "Betingelsen krever både at verdien finnes i den andre lista og at den ikke alt er lagt til. Svaret om minst én beskriver en union, svaret om de som ikke finnes snur den første testen, og et antall ville krevd en teller.",
    },
    {
      question: "Funksjonen skal returnere gjennomsnittet av tallene i lista. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef snitt(x):\n    total = 0\n    for v in x:\n        total = total + v\n    #KODE1\n```",
      options: ["`return total / len(x)`", "`return total // len(x)`", "`return total / len(total)`", "`return len(x) / total`"],
      explanation: "Summen skal deles på antall elementer, og `/` gir et flyttall slik et gjennomsnitt skal være. `total // len(x)` kutter desimalene, `len(total)` er meningsløst for et tall, og den siste linja snur brøken.",
    },
    {
      question: "Funksjonen skal returnere `True` hvis to naboer i lista er like. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef har_like_naboer(x):\n    #KODE1\n        if x[i] == x[i + 1]:\n            return True\n    return False\n```",
      options: ["`for i in range(len(x) - 1):`", "`for i in range(len(x)):`", "`for i in range(1, len(x)):`", "`for i in range(len(x) + 1):`"],
      explanation: "Kroppen bruker `x[i + 1]`, så den største lovlige indeksen er `len(x) - 2`, og rekka må stoppe der. De tre andre grensene lar `i + 1` gå ut over lista og avbryter programmet med `IndexError`.",
    },
    {
      question: "Funksjonen skal returnere ei liste med de unike verdiene, i den rekkefølgen de kom. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef unike(x):\n    ut = []\n    for v in x:\n        #KODE1\n            ut.append(v)\n    return ut\n```",
      options: ["`if v not in ut:`", "`if v in ut:`", "`if v not in x:`", "`if ut.count(v) > 0:`"],
      explanation: "Verdien skal legges til bare når den ikke alt er i resultatlista. `if v in ut` slipper gjennom nettopp duplikatene, `v not in x` er aldri sann siden `v` kommer derfra, og `ut.count(v) > 0` betyr det samme som `v in ut`.",
    },
    {
      question: "Funksjonen skal telle hvor mange ganger hver verdi forekommer. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef tell(x):\n    d = {}\n    for v in x:\n        #KODE1\n    return d\n```",
      options: ["`d[v] = d.get(v, 0) + 1`", "`d[v] = d[v] + 1`", "`d.get(v, 0) + 1`", "`d[v] = x.count(v) + 1`"],
      explanation: "`get` gir 0 for en nøkkel som ikke finnes, og tilordningen lagrer det økte tallet. `d[v] + 1` avbrytes med `KeyError` første gang, linja uten likhetstegn regner riktig men lagrer ingenting, og `len(x)` er det samme for alle nøkler.",
    },
    {
      question: "Funksjonen skal returnere indeksen til det største tallet i lista. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef storst_indeks(x):\n    beste = 0\n    for i in range(len(x)):\n        if x[i] > x[beste]:\n            #KODE1\n    return beste\n```",
      options: ["`beste = i`", "`beste = x[i]`", "`i = beste`", "`return i`"],
      explanation: "Variabelen skal holde på en indeks, så den settes til `i`. `x[i]` lagrer verdien og ødelegger sammenligningen i neste runde, `i = beste` tilordner motsatt vei, og `return i` avslutter ved første forbedring i stedet for ved den beste.",
    },
    {
      question: "Funksjonen skal lage ei liste av feltene i linja, uten linjeskiftet til slutt. Fila bruker semikolon som skilletegn. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef parse(linje):\n    #KODE1\n```",
      options: ["`return linje.strip().split(';')`", "`return linje.split(';').strip()`", "`return linje.split(';')`", "`return linje.strip().split()`"],
      explanation: "Linja må renses FØR den deles, ellers henger linjeskiftet igjen i det siste feltet. `split(';').strip()` prøver å rense ei liste og avbryter programmet, `split(';')` alene lar linjeskiftet stå, og `split()` uten argument deler på mellomrom i stedet for semikolon.",
    },
    {
      question: "Funksjonen skal legge 100 til annethvert tall i lista, med start på det andre tallet. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef juster(x):\n    #KODE1\n        x[i] = x[i] + 100\n    return x\n```",
      options: ["`for i in range(1, len(x), 2):`", "`for i in range(0, len(x), 2):`", "`for i in range(1, len(x)):`", "`for i in range(2, len(x), 2):`"],
      explanation: "Det andre tallet har indeks 1, og steget 2 gir annethvert derfra. Å starte på 0 treffer det første tallet, å droppe steget treffer alle fra og med det andre, og å starte på 2 hopper over det andre tallet helt.",
    },
    {
      question: "Funksjonen skal returnere ei liste med kvadratet av hvert tall. Hvilken linje hører hjemme i `#KODE1`?\n\n```text\ndef kvadrer(x):\n    ut = []\n    for v in x:\n        #KODE1\n    return ut\n```",
      options: ["`ut.append(v ** 2)`", "`ut.append(v * 2)`", "`ut = ut + [v * v * v]`", "`return v ** 2`"],
      explanation: "`append` legger kvadratet bakerst i resultatlista for hver runde. `v * 2` dobler i stedet for å kvadrere, `ut = [v ** 2]` kaster alt som er samlet så langt, og `return` avslutter etter det første tallet.",
    },
    {
      question: "Du har skrevet et helt korrekt, men fem setninger langt svar på «forklar med én setning hva funksjonen gjør». Hva skjer med uttellingen?",
      options: ["Den trekkes ned — et svar som er lengre enn nødvendig, teller som uklart", "Den blir uendret, siden innholdet i svaret er riktig", "Den økes litt, fordi et fyldig svar viser at koden er forstått", "Den settes til null, fordi svaret ikke har den formen oppgaven ba om"],
      explanation: "Sensor sier hvert år at et svar som er uklart eller lengre enn nødvendig, trekker ned — det gjelder også når innholdet er riktig. Svaret gir altså ikke full pott, men det blir heller ikke null, og lengde belønnes aldri.",
    },
    {
      question: "Du klarer å eliminere to av fire alternativer i et flervalgsspørsmål, men er usikker på de to siste. Hva bør du gjøre?",
      options: ["Krysse av for det du tror er mest riktig — det er ingen minuspoeng", "La spørsmålet stå blankt, siden et blankt svar teller bedre enn et galt", "Krysse av for begge de to gjenstående, så ett av kryssene er riktig", "Krysse av for det alternativet som er formulert med flest detaljer"],
      explanation: "Fra og med 2015 gis det ingen minuspoeng, så blankt og galt teller likt — og et kvalifisert gjett gir 50 % sjanse. To kryss regnes som feil svar, og lengden på et alternativ sier ingenting om det er riktig.",
    },
  ],
  'tdt4110-6-1': [
    {
      question: "Hva returnerer `x.sort()`?",
      options: ["`None` — lista sorteres på plass", "Ei ny liste som er ferdig sortert", "Antall bytter sorteringen gjorde", "Den minste verdien som ble funnet"],
      explanation: "Metoden endrer lista og gir ingenting tilbake, så `x = x.sort()` setter `x` til `None` (felle #17). Svaret om ei ny sortert liste beskriver `sorted(x)`, som er den andre formen. De to øvrige er verdier ingen sorteringsmetode i Python returnerer.",
    },
    {
      question: "`tall = [4, 1, 7]`. Hva er `tall` etter linja `ny = sorted(tall)`?",
      options: ["`[4, 1, 7]` — uendret", "`[1, 4, 7]` — sortert", "`None` — lista er brukt opp", "`[7, 4, 1]` — snudd"],
      explanation: "`sorted` bygger ei ny liste og lar originalen stå, så `tall` har samme rekkefølge som før — det er hele forskjellen fra `tall.sort()`, som gir `[1, 4, 7]`. Svaret `None` er det `tall.sort()` returnerer, ikke det lista blir. Synkende rekkefølge krever `reverse=True`.",
    },
    {
      question: "Hvorfor står det `- 1` i den indre løkka `for j in range(len(x) - 1 - i)` i boblesortering?",
      options: ["Fordi koden bruker `x[j + 1]` og ellers ville pekt utenfor lista", "Fordi den siste verdien alltid er ferdig sortert fra start", "Fordi `range` teller fra 1 og må trekkes ned med én", "Fordi den ytre løkka allerede har gjort ett bytte"],
      explanation: "Sammenligningen ser på naboen `x[j + 1]`, så `j` må stoppe én før slutten; uten `- 1` får du `IndexError`. Det er `- i` som handler om at halen er ferdig sortert, ikke `- 1`. `range` teller fra 0, og den ytre løkka gjør ingen bytter selv.",
    },
    {
      question: "Hva gir `sorted(['9', '10', '7'])`?",
      options: ["`['10', '7', '9']`", "`['7', '9', '10']`", "`['10', '9', '7']`", "`['9', '10', '7']`"],
      explanation: "Verdiene er strenger, og strenger sammenlignes tegn for tegn: `'1'` er mindre enn `'7'`, som er mindre enn `'9'`. Rekkefølgen `['7', '9', '10']` er den du får når verdiene er tall — altså etter `int()`. De to siste er henholdsvis synkende og uendret rekkefølge.",
    },
    {
      question: "Hva gjør linja `a, b = b, a`?",
      options: ["Bytter innholdet i de to variablene", "Gir begge variablene verdien til `b`", "Lager en kopi av `b` i begge navnene", "Sammenligner de to og sorterer dem"],
      explanation: "Hele høyresida regnes ut før tildelingen, så begge de gamle verdiene er tatt vare på når de legges tilbake. At begge ender på verdien til `b`, er nettopp det som skjer i den naive formen `a = b` etterfulgt av `b = a`. Linja kopierer ingenting og sammenligner ingenting.",
    },
    {
      question: "Hvor mange passeringer gjør den ytre løkka i boblesortering på ei liste med 5 elementer?",
      options: ["4 — altså `n - 1`", "5 — altså `n`", "10 — altså `n * 2`", "3 — altså `n - 2`"],
      explanation: "`range(len(x) - 1)` gir verdiene 0 til 3, altså fire passeringer: når fire elementer er på plass, er det femte det også. Fem passeringer er formen `range(len(x))`, som gir én runde uten virkning. De to andre tallene svarer ikke til noen av løkkegrensene.",
    },
    {
      question: "Hva sorterer `sorted(rader, key=lambda rad: rad[2])` etter?",
      options: ["Element nummer 2 i hver rad", "De to første elementene i hver rad", "Antall elementer i hver rad", "Element nummer 3 talt fra slutten"],
      explanation: "Lambdaen får én rad inn og gir tilbake `rad[2]`, og det er den verdien sorteringen sammenligner — radene flyttes samlet. Å sortere etter lengden ville krevd `key=len`. Å telle fra slutten krever negativ indeks, altså `rad[-3]`.",
    },
    {
      question: "To rader har samme verdi i kolonnen det sorteres på. Hva skjer med dem?",
      options: ["De beholder rekkefølgen de hadde før sorteringen", "Rekkefølgen mellom dem blir tilfeldig hver gang", "Den korteste raden legges alltid først", "Sorteringen stopper med en feilmelding"],
      explanation: "Pythons sortering er stabil, så like nøkler beholder den innbyrdes rekkefølgen fra før — det er derfor kilderekkefølgen i fila kan bety noe for resultatet. Tilfeldig rekkefølge er nettopp det stabilitet utelukker. Radlengden brukes ikke, og like verdier er helt uproblematisk.",
    },
    {
      question: "Overskriftsraden er `['butikk', 'vare', 'pris']`. Hva gir `tabell[0].index('pris')`?",
      options: ["`2`", "`3`", "`'pris'`", "`1`"],
      explanation: "`.index` gir plassnummeret i lista, og tellingen starter på 0, så `'pris'` ligger på plass 2. Svaret `3` er av-med-én-fella (#5) — det er antallet kolonner. Metoden gir et tall, ikke navnet, og plass 1 er `'vare'`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = [3, 1, 2]\ny = x\nx.sort()\nprint(y)\n```",
      options: ["`[1, 2, 3]`", "`[3, 1, 2]`", "`None`", "`[3, 2, 1]`"],
      explanation: "`y = x` gir to navn på den samme lista (aliasing, felle #15), og `.sort()` endrer den lista på plass — så `y` viser den sorterte rekkefølgen. Uendret rekkefølge ville du fått av `y = x[:]`, som lager en kopi. `None` er det `x.sort()` returnerer, ikke det `y` peker på.",
    },
    {
      question: "`sortert` har to rader. Hva gir `sortert[:3]`?",
      options: ["Begge radene, uten feilmelding", "En `IndexError`, fordi rad 3 mangler", "Ei tom liste, siden tre ikke finnes", "De to radene pluss en tom rad"],
      explanation: "Utsnitt klipper mot det som finnes, så du får bare de to radene — derfor er topp-N-formen trygg også på korte tabeller. `IndexError` får du av `sortert[2]`, altså direkte indeksering. Utsnittet finner verken opp tomme rader eller kaster dem du har.",
    },
    {
      question: "Hvilken linje sorterer lista `x` synkende, på plass?",
      options: ["`x.sort(reverse=True)`", "`x = sorted(x, reverse=True)`", "`x.sort(synkende=True)`", "`x.reverse(sort=True)`"],
      explanation: "`.sort()` er metoden som endrer lista på plass, og `reverse=True` snur retningen. Formen med `sorted` gir riktig resultat, men lager ei ny liste og tildeler den — den sorterer altså ikke på plass. De to siste er navn som ikke finnes i Python.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = [8, 3, 5, 1]\nfor j in range(len(x) - 1):\n    if x[j] > x[j + 1]:\n        x[j], x[j + 1] = x[j + 1], x[j]\nprint(x)\n```",
      options: ["`[3, 5, 1, 8]`", "`[1, 3, 5, 8]`", "`[3, 8, 5, 1]`", "`[8, 5, 3, 1]`"],
      explanation: "Bare den indre løkka kjøres, altså én passering: 8-tallet byttes videre i alle tre stegene og ender bakerst, mens resten står i samme rekkefølge. Ferdig sortert `[1, 3, 5, 8]` krever alle passeringene. `[3, 8, 5, 1]` er lista etter bare det første byttet.",
    },
    {
      question: "Hvorfor skriver fasiten `sorted(tabell[1:], key=...)` i stedet for `sorted(tabell, key=...)`?",
      options: ["For å holde overskriftsraden utenfor sorteringen", "For å slippe å finne kolonnenummeret først", "Fordi `sorted` ikke kan ta imot hele tabellen", "For å lage en kopi som `key` kan endre fritt"],
      explanation: "Overskriftsraden er kolonnenavn, ikke data: blir den med, havner den et vilkårlig sted, og sammenligning av tekst mot tall gir dessuten `TypeError`. Kolonnenummeret må du finne uansett. `sorted` tar gjerne imot hele tabellen, og `key` endrer aldri noe.",
    },
  ],
  'tdt4110-6-2': [
    {
      question: "Hva forutsetter binærsøk om lista det søker i?",
      options: ["At den er sortert", "At den bare har tall", "At den ikke har duplikater", "At lengden er et partall"],
      explanation: "Hele metoden bygger på at et for lite midtelement betyr at alt til venstre også er for lite, og den slutningen holder bare i ei sortert liste. Datatypen spiller ingen rolle så lenge verdiene kan sammenlignes, og både duplikater og odde lengde håndteres helt fint.",
    },
    {
      question: "En søkefunksjon skal gi tilbake en indeks. Hva returnerer den når verdien ikke finnes?",
      options: ["`-1`, som aldri er en gyldig treffindeks", "`0`, som er den laveste gyldige indeksen", "`False`, fordi søket ikke lyktes", "`len(x)`, fordi det er én forbi slutten"],
      explanation: "Gyldige indekser er 0 og oppover, så `-1` kan ikke forveksles med et treff — det er den avtalte «ikke funnet»-verdien i emnet. `0` er en helt vanlig treffindeks og ville vært tvetydig. `False` er en sannhetsverdi og passer til `in`, ikke til en indeks.",
    },
    {
      question: "`imin` er 4 og `imax` er 6. Hva blir `imid = (imin + imax) // 2`?",
      options: ["`5`", "`4`", "`5.0`", "`6`"],
      explanation: "`(4 + 6) // 2` er `10 // 2`, altså 5 — og `//` gir et heltall, som er nødvendig for å kunne indeksere. `5.0` er det du får med enkel skråstrek, og et flyttall gir `TypeError` når du bruker det som indeks. De to andre er grensene selv, ikke midten.",
    },
    {
      question: "Hvorfor står det `while imin <= imax` og ikke `while imin < imax`?",
      options: ["Fordi ett gjenstående element gir `imin` lik `imax`", "Fordi `imin` alltid er mindre enn `imax` i starten", "Fordi løkka ellers ville kjørt én runde for mye", "Fordi `imid` ellers kan bli et negativt tall"],
      explanation: "Når vinduet er krympet til ett element, er de to grensene like — og det elementet må sjekkes, ellers får du `-1` for verdier som finnes. Med `<` ville løkka kjørt én runde for lite, ikke for mye. `imid` ligger alltid mellom grensene og kan ikke bli negativ.",
    },
    {
      question: "Det midterste elementet er mindre enn det du leter etter. Hvilken linje er riktig?",
      options: ["`imin = imid + 1`", "`imax = imid - 1`", "`imin = imid`", "`imax = imid`"],
      explanation: "Er midten for liten, må målet ligge til høyre, så den nedre grensen flyttes opp forbi midten — som allerede er sjekket. Å flytte den øvre grensen ned leter i feil halvdel og gir `-1`. Formene uten `+ 1` og `- 1` lar vinduet stå stille, og løkka går for alltid.",
    },
    {
      question: "Hva skjer hvis du skriver `imin = imid` i stedet for `imin = imid + 1`?",
      options: ["Løkka går for alltid — programmet henger", "Løkka returnerer `-1` for alle verdier", "Løkka hopper over det siste elementet i vinduet", "Løkka gir `IndexError` på neste runde"],
      explanation: "Er `imid` allerede lik `imin`, blir vinduet like stort neste runde, og betingelsen `imin <= imax` slutter aldri å være sann. Å hoppe over det siste elementet er derimot symptomet på `<` i stedet for `<=`. Ingen indeks går utenfor lista, så `IndexError` kommer ikke.",
    },
    {
      question: "`x.index(v)` kalles med en verdi som ikke finnes i lista. Hva skjer?",
      options: ["Programmet stopper med `ValueError`", "Metoden returnerer `-1` for «ikke funnet»", "Metoden returnerer `None` uten feil", "Metoden legger verdien til bakerst"],
      explanation: "`.index` har ingen «ikke funnet»-verdi og kaster `ValueError`, så den må sjekkes med `in` først eller pakkes i `try/except`. `-1` er konvensjonen i din egen søkefunksjon, ikke i `.index`. Metoden endrer aldri lista.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef finn(x, mal):\n    for i in range(len(x)):\n        if x[i] == mal:\n            return i\n    return -1\n\nprint(finn([7, 7, 3], 7))\n```",
      options: ["`0`", "`1`", "`2`", "`-1`"],
      explanation: "Løkka starter på indeks 0, finner et treff der med én gang, og `return` avslutter funksjonen før resten av lista ses på. Indeks 1 er den andre sjuveren, som aldri blir nådd. `-1` ville krevd at ingen av elementene traff.",
    },
    {
      question: "Hva skjer når du kjører et korrekt skrevet binærsøk på ei **usortert** liste?",
      options: ["Det kan gi feil svar, uten feilmelding", "Det gir alltid `IndexError` med en gang", "Det sorterer lista selv og søker etterpå", "Det finner verdien, men bruker flere steg"],
      explanation: "Koden kjører helt fint — den bare kaster feil halvdel, og kan derfor returnere `-1` for en verdi som finnes. Ingen indeks går utenfor lista, så det blir ingen `IndexError`, og funksjonen sorterer ingenting den ikke er bedt om.",
    },
    {
      question: "Omtrent hvor mange steg bruker binærsøk på ei sortert liste med 1 000 elementer?",
      options: ["Rundt 10", "Rundt 500", "Rundt 100", "Rundt 1 000"],
      explanation: "Hvert steg halverer det som er igjen, og $2^{10} = 1024$, så ti halveringer dekker tusen elementer. Rundt 1 000 er hva sekvensielt søk bruker i verste fall, og 500 er gjennomsnittet for det samme sekvensielle søket.",
    },
    {
      question: "Hva gir uttrykket `'B2' in hyller`?",
      options: ["`True` eller `False`", "Indeksen til `'B2'`", "Antall ganger `'B2'` finnes", "Selve verdien `'B2'`"],
      explanation: "`in` svarer bare på om verdien finnes, og gir en sannhetsverdi. Indeksen får du av `.index`, og antallet av `.count` — trenger du å vite hvor elementet er, holder det altså ikke med `in`.",
    },
    {
      question: "En funksjon skal returnere **raden** i en tabell der en kolonne har en gitt verdi. Hva returnerer den når ingen rad passer?",
      options: ["`None`", "`-1`", "`0`", "`False`"],
      explanation: "`-1` er konvensjonen når funksjonen gir en indeks; når den gir et element eller ei rad, er `None` den riktige «ikke funnet»-verdien. `0` kunne forveksles med data, og `False` hører til ja/nei-spørsmål.",
    },
    {
      question: "Hvor skal `return -1` stå i et sekvensielt søk?",
      options: ["Etter løkka, på samme innrykk som `for`-linja", "Inne i løkka, rett etter hele `if`-blokka", "Inne i `if`-blokka, etter `return i`", "Før løkka, som en startverdi"],
      explanation: "Linja skal bare kjøres når hele lista er gjennomsøkt uten treff, altså etter at løkka er ferdig. Står den inne i løkka, avslutter funksjonen allerede etter første element som ikke traff. En `return` etter en annen `return` kjøres aldri.",
    },
    {
      question: "Verdien du søker etter finnes flere ganger i lista. Hvilken indeks gir et sekvensielt søk?",
      options: ["Den første forekomsten", "Den siste forekomsten", "En vilkårlig av forekomstene", "Alle indeksene, som ei liste"],
      explanation: "Søket går fra venstre og returnerer ved første treff, så den første forekomsten er den du får. En vilkårlig forekomst er derimot nettopp det binærsøk gir, siden det hopper til midten. Skal du ha alle treffene, må du samle dem i ei liste i stedet for å returnere.",
    },
    {
      question: "Hva blir resultatet av `imid = (imin + imax) / 2` med enkel skråstrek?",
      options: ["`TypeError` når `imid` brukes som indeks", "Nøyaktig samme heltall som med dobbel skråstrek", "`ZeroDivisionError` når vinduet er tomt", "Et heltall som er rundet oppover"],
      explanation: "Enkel skråstrek gir alltid et flyttall, og ei liste kan ikke indekseres med `3.0`. Dobbel skråstrek gir heltall og runder nedover — oppover rundes det aldri. Nevneren er 2, så det kan ikke bli deling på null.",
    },
    {
      question: "Lista `[3, 8, 12, 19, 25, 31]` er sortert. Hvilken indeks gir binærsøket etter 25, og hvor mange runder i `while`-løkka bruker det?",
      options: ["Indeks 4, etter 2 runder", "Indeks 4, etter 5 runder", "Indeks 5, etter 2 runder", "Indeks 3, etter 3 runder"],
      explanation: "Første `imid` er `(0 + 5) // 2` som er 2, altså tallet 12; det er for lite, så nedre grense flyttes til 3 og neste `imid` blir 4, der 25 ligger — to runder. Fem runder er hva et sekvensielt søk ville brukt på den samme lista. Indeks 5 er tallet 31, og indeks 3 er 19.",
    },
  ],
  'tdt4110-6-3': [
    {
      question: "Hvilken kjøretidskompleksitet har binærsøk i ei sortert liste med $n$ elementer?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(n^2)$", "$O(1)$"],
      explanation: "Hvert steg halverer søkeområdet, og antall halveringer fra $n$ ned til ett element er $\\log_2 n$. $O(n)$ er sekvensielt søk, som er den vanligste feilkryssingen fordi begge er «søk». $O(n^2)$ er boblesortering, og $O(1)$ ville betydd at antall steg var uavhengig av listestørrelsen.",
    },
    {
      question: "Hvilken kjøretidskompleksitet har sekvensielt søk i ei liste med $n$ elementer?",
      options: ["$O(n)$", "$O(\\log n)$", "$O(n^2)$", "$O(1)$"],
      explanation: "I verste tilfelle — verdien ligger sist eller finnes ikke — må alle $n$ elementene sjekkes, altså én gjennomgang. $O(\\log n)$ krever halvering i hvert steg, som forutsetter en sortert liste. $O(n^2)$ ville krevd en løkke inne i løkka, og $O(1)$ at listestørrelsen ikke betydde noe.",
    },
    {
      question: "Hvilken kjøretidskompleksitet har boblesortering?",
      options: ["$O(n^2)$", "$O(n)$", "$O(\\log n)$", "$O(n!)$"],
      explanation: "Algoritmen har en løkke inne i en løkke, og begge går over dataene: til sammen $\\frac{n(n-1)}{2}$ sammenligninger. $O(n)$ er én gjennomgang, altså bare den indre løkka. $O(n!)$ hører til problemer som må prøve alle rekkefølger, som handelsreisendes problem.",
    },
    {
      question: "Hva må være oppfylt for at en oppskrift skal kalles en algoritme?",
      options: ["Den må være entydig og endelig", "Den må være skrevet i et programmeringsspråk", "Den må ta imot minst én inndata", "Den må gi det beste mulige svaret"],
      explanation: "Hvert steg må ha nøyaktig én tolkning, og oppskriften må stoppe etter et endelig antall steg. En algoritme er språkuavhengig og kan skrives på norsk. Den kan ha null inndata, og den kan gjerne løse problemet uten å finne den optimale løsningen.",
    },
    {
      question: "Hva er riktig om pseudokode?",
      options: ["Den skal ikke kunne kjøres, men må være entydig", "Den skal kunne kjøres etter noen små justeringer", "Den må følge Pythons regler for innrykk", "Den brukes bare til å beskrive rekursjon"],
      explanation: "Pseudokode er skrevet for mennesker og følger ingen syntaks, men hvert steg må kunne oversettes til kode på nøyaktig én måte. Kunne den kjøres, ville den vært kode. Innrykk er en Python-vane, og pseudokode brukes til alle slags algoritmer.",
    },
    {
      question: "Boblesortering gjør $\\frac{n(n-1)}{2}$ sammenligninger. Hvor mange blir det for 200 elementer?",
      options: ["19 900", "20 000", "39 800", "40 000"],
      explanation: "$\\frac{200 \\times 199}{2} = \\frac{39\\,800}{2} = 19\\,900$. Svaret 39 800 er telleren uten å dele på to, som er den vanligste regnefeilen her. De to runde tallene kommer av å bruke $n^2$ i stedet for $n(n-1)$.",
    },
    {
      question: "Ei liste dobles i lengde. Hvor mye mer arbeid gjør en $O(n^2)$-algoritme, omtrent?",
      options: ["Fire ganger så mye", "Dobbelt så mye", "Åtte ganger så mye", "Like mye som før"],
      explanation: "Kvadrering av en dobling gir $2^2 = 4$, så arbeidet firedobles — for boblesortering går det fra 19 900 til 79 800 sammenligninger når $n$ går fra 200 til 400. Dobbelt så mye er veksten til en $O(n)$-algoritme, og uendret arbeid er $O(1)$.",
    },
    {
      question: "Hvilken av disse operasjonene er $O(1)$?",
      options: ["Å hente `x[5]` ut av ei liste", "Å finne `max(x)` i ei liste", "Å sjekke `v in x` for ei liste", "Å regne ut `sum(x)` for ei liste"],
      explanation: "Indeksoppslag går rett til plassen og koster det samme uansett hvor lang lista er. De tre andre må gå gjennom hele lista i verste fall, og er dermed $O(n)$ — det gjelder også `in`, som er et sekvensielt søk i forkledning.",
    },
    {
      question: "Hva kjennetegner en brute force-løsning?",
      options: ["Den prøver alle muligheter og finner garantert den beste", "Den finner en god løsning raskt, men gir ingen garanti", "Den halverer søkeområdet og krever sorterte data", "Den bruker lite minne, men er treg på store data"],
      explanation: "Garantien for riktig svar er den ene siden av brute force, og den eksplosive veksten er prisen. En metode som gir en god nok løsning uten garanti, er det motsatte — en heuristikk. Halvering og sorteringskrav beskriver binærsøk, og minnebruk er ikke en del av definisjonen.",
    },
    {
      question: "Hvorfor er handelsreisendes problem vanskelig å løse med brute force?",
      options: ["Antall mulige ruter vokser faktorielt med antall byer", "Avstandene mellom byene må måles på nytt for hver rute", "Rutene må sorteres før den korteste kan finnes", "Antall byer er ukjent når algoritmen starter"],
      explanation: "Med fast startpunkt finnes det $(n-1)!$ ruter, altså 362 880 for 10 byer og over 121 billiarder for 20 — å prøve alle blir umulig fort. Avstandene er gitt på forhånd, en sortering er ikke nødvendig for å finne et minimum, og antall byer er kjent.",
    },
    {
      question: "Hva skjer hvis du kjører binærsøk på ei liste som ikke er sortert?",
      options: ["Det kan gi feil svar, men uten feilmelding", "Det gir `IndexError` med det samme", "Det bruker flere steg, men finner riktig svar", "Det sorterer lista automatisk først"],
      explanation: "Algoritmen kaster halve lista basert på en slutning som bare holder i sorterte data, så den kan returnere `-1` for en verdi som finnes. Alle indeksene holder seg innenfor lista, så det blir ingen `IndexError`, og funksjonen sorterer ingenting av seg selv.",
    },
    {
      question: "En funksjon går gjennom $n$ rader, og for hver rad gjennom de 12 månedene. Hvilken kompleksitet har den?",
      options: ["$O(n)$, siden den indre løkka har fast lengde", "$O(n^2)$, siden det er en løkke inne i en løkke", "$O(12n^2)$, siden begge løkkene teller med", "$O(1)$, siden antall måneder er konstant"],
      explanation: "Den indre løkka går 12 runder uansett hvor stor tabellen er, så arbeidet er $12n$ — og Big-O ser bort fra konstanter. Regelen «løkke i løkke gir $O(n^2)$» holder bare når begge løkkene går over dataene. Den ytre løkka vokser med $n$, så $O(1)$ er utelukket.",
    },
    {
      question: "Hva er verste tilfelle for et sekvensielt søk i ei liste med $n$ elementer?",
      options: ["At verdien ligger sist eller ikke finnes", "At verdien ligger først i lista", "At verdien finnes flere steder i lista samtidig", "At lista inneholder både tall og tekst"],
      explanation: "Da må alle $n$ elementene sammenlignes før løkka er ferdig, og det er tallet kompleksiteten oppgis for. Ligger verdien først, er det beste tilfelle med ett steg. Flere forekomster gjør søket kortere, ikke lengre, siden det stopper ved den første.",
    },
    {
      question: "En algoritme gjør $3n + 12$ sammenligninger. Hva er kompleksiteten?",
      options: ["$O(n)$", "$O(3n)$", "$O(n + 12)$", "$O(n^2)$"],
      explanation: "Big-O navngir vekstformen og ser bort fra både konstante faktorer og mindre ledd, så $3n + 12$ er $O(n)$. Skrivemåtene med tretallet og tolvtallet er ikke gale om veksten, men de er ikke Big-O-form. $O(n^2)$ ville krevd et $n \\times n$-ledd.",
    },
    {
      question: "Omtrent hvor mange steg bruker binærsøk på ei sortert liste med én million elementer?",
      options: ["20", "1 000", "500 000", "1 000 000"],
      explanation: "$2^{20} = 1\\,048\\,576$, så tjue halveringer dekker en million elementer. En million er hva sekvensielt søk bruker i verste fall, og 500 000 er gjennomsnittet for det samme sekvensielle søket.",
    },
    {
      question: "Hva er forskjellen på en algoritme og et program?",
      options: ["Algoritmen er ideen, programmet er én nedskriving av den", "Algoritmen er kortere, programmet har flere detaljer", "Algoritmen er skrevet i pseudokode, programmet i Python", "Algoritmen kan ikke kjøres, programmet kan alltid kjøres"],
      explanation: "Den samme algoritmen kan skrives i Python, i et annet språk eller på norsk, og er den samme algoritmen hele veien — programmet er én bestemt nedskriving. Lengde er ingen forskjell i seg selv, og en algoritme trenger verken være skrevet i pseudokode eller være ukjørbar.",
    },
  ],
  'tdt4110-7-1': [
    {
      question: "En eksamensoppgave ber deg lese en fil med terningkast og finne spilleren med flest seksere. Hva er den beste måten å lese oppgaven på?",
      options: ["Som den faste kjeden: les fil, tolk, analysér, skriv ut — terningene er innpakning", "Som en ny oppgavetype som krever et eget mønster for spill og tilfeldige tall", "Som en oppgave i sannsynlighetsregning der koden er mindre viktig enn utregningen", "Som en oppgave som må løses med en egen datastruktur laget for terningkast"],
      explanation: "Domeneinnpakningen roterer fra sett til sett, men øvelsen er den samme: les fil, parse, analysér, skriv ut. Alternativet om et eget mønster for spill tester nettopp fellen — at nye substantiver leses som en ny oppgavetype. De to siste blander inn matematikk og datastrukturer som oppgaven ikke ber om.",
    },
    {
      question: "Hvor mye av eksamen er programmeringsdelen verdt, ifølge arkivet 2014–2019?",
      options: ["50–60 % av settet, i alle 10 sittingene", "25–30 % av settet, i alle 10 sittingene", "15–20 % av settet, i 7 av 10 sittingene", "70–80 % av settet, i 8 av 10 sittingene"],
      explanation: "Programmeringsdelen er 50–60 % og står i samtlige ti sittinger. 25 % er teoridelens vekt, og 15–20 % er kodeforståelsens — begge er reelle tall fra det samme settet, men for andre deler.",
    },
    {
      question: "Hva er den vanligste strukturfeilen i en besvarelse på programmeringsoppgaven?",
      options: ["Å skrive ett langt program i stedet for en kjede av små funksjoner", "Å bruke norske funksjonsnavn i stedet for engelske funksjonsnavn", "Å bruke de innebygde snarveiene i stedet for å skrive løkkene selv", "Å legge alle funksjonene i fila før den funksjonen som kaller dem"],
      explanation: "Ett langt program mister både gjenbrukspoengene og delpoengene, fordi sensor ikke ser hvilken deloppgave som er besvart hvor. Navnespråket er fritt, snarveiene brukes i de offisielle løsningsforslagene, og rekkefølgen på definisjonene i fila er likegyldig for Python.",
    },
    {
      question: "En analysefunksjon trenger data fra fila. Hvordan skal den få tak i dem?",
      options: ["Den tar tabellen som parameter fra den som kaller den", "Den åpner fila selv med et filnavn den får som parameter", "Den åpner fila selv med filnavnet skrevet rett inn i koden", "Den henter tabellen fra en variabel som er laget utenfor alle funksjonene"],
      explanation: "Fila leses ett sted, av `main`, og tabellen sendes videre som parameter. De to alternativene der funksjonen åpner fila selv gjør den umulig å gjenbruke på andre data. Å hente en global variabel virker, men binder funksjonen til akkurat det ene programmet.",
    },
    {
      question: "Du står fast på deloppgave b) etter 25 minutter, og c), d) og e) er urørt. Hva er riktig trekk?",
      options: ["Skriv én setning om hva b) skulle gjort, anta at den finnes, og gå til c)", "Bli sittende til b) er ferdig, siden c) og d) sannsynligvis vil trenge den", "Lever b) blank og hopp helt over c), som bygger direkte videre på b)", "Begynn på nytt med hele oppgaven og skriv alle funksjonene i én blokk"],
      explanation: "Deloppgavene rettes hver for seg, så en tom b) tar ikke med seg c) i fallet — du kan anta at funksjonen finnes og kalle den. Å bli sittende er den dyreste enkeltfeilen i faget. Å hoppe over c) kaster bort poeng, og å samle alt i én blokk fjerner delpoengene.",
    },
    {
      question: "Hva er den presise forskjellen på ledd 1 og ledd 2 i løsningsoppskriften?",
      options: ["Ledd 1 henter linjene fra fila, ledd 2 gjør feltene om til tall og strukturer", "Ledd 1 åpner og lukker fila, ledd 2 går gjennom alle linjene i den med en løkke", "Ledd 1 leser hele fila som én streng, ledd 2 deler den strengen i linjer", "Ledd 1 leser overskriftsraden, ledd 2 leser resten av radene under den"],
      explanation: "Ledd 1 er filinnlesingen, ledd 2 er parsingen — å tolke feltene og konvertere dem. De to andre beskrivelsene deler ledd 1 i to halvdeler i stedet, og overskriftsraden hører til ledd 1 uansett hvordan den håndteres.",
    },
    {
      question: "Hva betyr det at prosentvektingen står oppgitt på settet?",
      options: ["Den er tidsplanen din: 10 % av settet er omtrent 24 av de 240 minuttene", "Den viser hvilke deloppgaver sensor retter først, og som derfor må være penest", "Den viser hvor mange kodelinjer hver deloppgave forventes å bestå av", "Den viser hvilke deloppgaver som må være riktige for at settet skal bli bestått"],
      explanation: "Vektingen er et tidsbudsjett: 10 % av en firetimers eksamen er omtrent 24 minutter. Den sier ingenting om retterekkefølge, kodemengde eller ståkrav — deloppgavene rettes hver for seg og summeres.",
    },
    {
      question: "Oppgaveteksten oppgir signaturen `finn_beste(tabell, kolonne)`. Hva bør du gjøre med den?",
      options: ["Bruke navnet og parameterne ordrett, så senere deloppgaver kan kalle den", "Velge et mer beskrivende navn, siden sensor uansett leser hele koden", "Bytte om parameterne så kolonnen kommer først, som er vanlig i biblioteker", "Legge til et ekstra parameter for filnavnet, så funksjonen kan lese fila selv"],
      explanation: "Den oppgitte signaturen brukes ordrett — senere deloppgaver kaller funksjonen, og et endret navn eller en endret parameterrekkefølge bryter kjeden. Å legge til et filnavn-parameter bryter i tillegg regelen om at fila leses ett sted.",
    },
    {
      question: "Hvorfor startes `beste_verdi` på `None` i stedet for på 0 når du leter etter den største verdien?",
      options: ["Fordi 0 aldri blir slått hvis alle verdiene i tabellen er negative", "Fordi `None` er raskere å sammenligne med enn tallet 0 er", "Fordi 0 gir en `TypeError` når det sammenlignes med et flyttall", "Fordi `None` gjør at løkka stopper av seg selv når tabellen er tom"],
      explanation: "Med 0 som startverdi vinner ingen rad når alle verdiene er negative, og funksjonen returnerer ingenting. `None` gjør at første rad alltid tas. Sammenligning mellom `int` og `float` er helt lovlig, og `None` påvirker ikke hvor løkka stopper.",
    },
    {
      question: "Hva er den riktigste beskrivelsen av gjenbruk slik sensor belønner det?",
      options: ["Senere funksjoner kaller de tidligere i stedet for å gjenta koden deres", "Den samme funksjonen kalles flere ganger fra forskjellige steder i programmet", "Koden fra deloppgave b) kopieres inn i c) og tilpasses det nye formålet", "De samme variabelnavnene brukes gjennom hele besvarelsen for lesbarhet"],
      explanation: "Gjenbruk betyr at kjeden bygges av funksjoner som kaller hverandre. Å kalle den samme funksjonen flere ganger er en følge av det, ikke definisjonen. Kopiert kode er nettopp det gjenbruk skal erstatte, og konsekvente variabelnavn er stil, ikke gjenbruk.",
    },
    {
      question: "To studenter leverer den samme analysefunksjonen. Den ene finner kolonnen med `tabell[0].index(\"pris\")`, den andre med `rad[2]`. Hva skiller dem?",
      options: ["Bare den første svarer riktig hvis kolonnene kommer i en annen rekkefølge", "Bare den første virker hvis tabellen har en overskriftsrad å slå opp i", "Bare den andre virker hvis prisene er lagret som tekst i stedet for som tall", "Bare den andre gir riktig svar når tabellen har flere enn tre kolonner"],
      explanation: "Det dynamiske oppslaget er et uttalt fullscore-krav nettopp fordi kolonnerekkefølgen kan variere. At `.index` trenger en overskriftsrad er sant, men det er en forutsetning, ikke forskjellen i uttelling — og datatypen og antall kolonner spiller ingen rolle for noen av formene.",
    },
    {
      question: "Oppgaven sier ikke hva som skal skje ved uavgjort. Hva gjør du?",
      options: ["Velger én oppførsel og skriver én setning i besvarelsen om antakelsen", "Lar programmet krasje, siden oppgaven ikke har definert tilfellet", "Returnerer alle radene som er like, siden det dekker begge tolkningene", "Hopper over deloppgaven og forklarer at oppgaveteksten er ufullstendig"],
      explanation: "Ved underspesifikasjon velger du selv og dokumenterer valget kort — det er en uttalt sensorregel. Å la programmet krasje koster poeng, å returnere alle like rader endrer returtypen oppgaven ba om, og å hoppe over deloppgaven gir null.",
    },
  ],
  'tdt4110-7-2': [
    {
      question: "Hva returnerer `'Nordparken;Fauske;8'.split(',')`?",
      options: ["Ei liste med ett element: hele strengen slik den står", "Ei liste med tre elementer, ett per felt i strengen", "En tom liste, siden tegnet ikke finnes i strengen", "En feilmelding, siden skilletegnet ikke finnes i strengen"],
      explanation: "Finnes ikke skilletegnet, er det ingenting å dele på, og du får ei liste med hele strengen som eneste element. Tre elementer ville du fått med `;`. `split` gir aldri tom liste for en ikke-tom streng, og den krasjer ikke.",
    },
    {
      question: "Hvorfor skal `.strip()` kalles før `.split(sep)` og ikke etter?",
      options: ["Ellers henger linjeskiftet igjen i det siste feltet i lista", "Ellers deler `split` på linjeskiftet i tillegg til på skilletegnet", "Ellers får første felt med seg et ekstra mellomrom", "Ellers gir `split` bare ett felt, siden linja ikke er renset først"],
      explanation: "Linjeskiftet står helt bakerst, så det havner i det siste feltet når du deler først. `split(sep)` deler bare på `sep` og bryr seg ikke om linjeskiftet, det første feltet er urørt, og antall felt blir det samme uansett rekkefølge.",
    },
    {
      question: "Fila har en overskriftsrad. Hva gjør `f.readline()` kalt rett før `for linje in f:`?",
      options: ["Leser og forbruker overskriftsraden, så løkka starter på linje 2", "Leser overskriftsraden uten å forbruke den, så løkka starter på linje 1", "Leser hele fila til ei liste som løkka deretter går gjennom", "Leser den siste linja i fila, slik at løkka slipper å ta med den"],
      explanation: "`readline()` flytter filpekeren én linje fram, så løkka fortsetter der den slapp. Det er nettopp forbruket som gjør trikset mulig — en lesing uten forbruk ville ikke hjulpet. `readlines()` er den som gir ei liste.",
    },
    {
      question: "Hvilken form deler riktig på en linje der kolonnene er justert med et varierende antall mellomrom?",
      options: ["`linje.split()` uten noen argumenter", "`linje.split(' ')` med ett mellomrom", "`linje.split('  ')` med to mellomrom", "`linje.strip(' ')` med ett mellomrom"],
      explanation: "`split()` uten argument slår sammen flere blanktegn på rad til ett skille. Med ett eller to mellomrom som argument blir hvert ekstra mellomrom et eget, tomt felt. `strip` fjerner bare i endene og deler ingenting.",
    },
    {
      question: "Hva er resultatet av `int('148') * 2` sammenlignet med `'148' * 2`?",
      options: ["296 mot `'148148'` — teksten gjentas i stedet for å ganges opp", "296 mot 296 — Python konverterer teksten til tall av seg selv", "296 mot en feilmelding, siden tekst ikke kan ganges med et tall", "`'296'` mot `'148148'` — begge uttrykkene gir en tekststreng"],
      explanation: "Tekst ganget med et heltall gjentar teksten, og det er en helt lovlig operasjon — derfor er glemt konvertering en stum feil. Python konverterer aldri av seg selv, og `int(...)` gir et tall, ikke tekst.",
    },
    {
      question: "En ordbok bygges med `d[felt[0]] = felt[1:]`. Hvilken indeks har den kolonnen som var nummer 3 i fila?",
      options: ["Indeks 2 i verdilista, fordi utsnittet forskyver alt én plass", "Indeks 3 i verdilista, fordi utsnittet beholder de gamle indeksene", "Indeks 4 i verdilista, fordi nøkkelen legges til foran igjen", "Indeks 0 i verdilista, fordi utsnittet snur rekkefølgen på feltene"],
      explanation: "`felt[1:]` fjerner det første elementet, så alle de andre flytter seg én plass ned: kolonne 3 blir indeks 2. Utsnittet beholder rekkefølgen og legger ingenting til.",
    },
    {
      question: "Hva skjer når den samme nøkkelen settes inn i en ordbok to ganger med `d[k] = v`?",
      options: ["Den nye verdien overskriver den gamle, uten feilmelding", "Den gamle beholdes, og den nye kastes uten feilmelding", "Begge verdiene lagres, og ordboka får to oppføringer med samme nøkkel", "Python gir en `KeyError`, siden nøkkelen allerede finnes i ordboka"],
      explanation: "En ordbok har én verdi per nøkkel, og innsetting overskriver i stillhet. Skal alle verdiene tas vare på, må du gruppere med lister. `KeyError` kommer ved oppslag på en nøkkel som ikke finnes, ikke ved innsetting.",
    },
    {
      question: "Hva er den avgjørende forskjellen på telleren `d[k] = d.get(k, 0) + 1` og grupperingen `d[k].append(v)`?",
      options: ["Telleren gir ett tall per nøkkel, grupperingen gir ei liste per nøkkel", "Telleren virker på tabeller, mens grupperingen bare virker på filer", "Telleren krever at nøkkelen er unik, mens grupperingen tillater duplikater", "Telleren oppretter nøkkelen selv, mens grupperingen krever en overskriftsrad"],
      explanation: "Forskjellen er hva verdien er: ett tall mot ei liste. Begge mønstrene forutsetter at nøkkelen gjentar seg — det er hele poenget med dem — og ingen av dem har noe med tabeller, filer eller overskriftsrader å gjøre.",
    },
    {
      question: "Hvorfor krasjer `d[k].append(v)` med `KeyError` første gang nøkkelen dukker opp?",
      options: ["Fordi `d[k]` slår opp en nøkkel som ennå ikke finnes i ordboka", "Fordi `.append` bare kan kalles på ei liste som allerede har elementer", "Fordi `.append` returnerer `None` og dermed ikke kan tilordnes videre", "Fordi ordbøker må ha nøklene sine opprettet før løkka"],
      explanation: "Oppslaget `d[k]` skjer før `.append` kalles, og et oppslag på en ukjent nøkkel gir `KeyError`. `.append` virker fint på en tom liste, returverdien er irrelevant her, og nøkler kan opprettes underveis.",
    },
    {
      question: "Fila har tomme linjer. Hva gir `''.split(';')`?",
      options: ["Ei liste med ett tomt felt", "En tom liste", "En `IndexError` fra den tomme linja", "En `ValueError` fra det tomme feltet"],
      explanation: "Deling av en tom streng gir ei liste med én tom streng i, ikke en tom liste. Feilen kommer først når du prøver å hente `felt[2]` fra den — da får du `IndexError`.",
    },
    {
      question: "Hvorfor er `linje.startswith('#')` tryggere enn `linje[0] == '#'`?",
      options: ["Fordi indekseringen krasjer på en tom linje, mens metoden gir `False`", "Fordi metoden også fanger opp tegnet midt inne i linja", "Fordi indekseringen ikke virker på strenger som er renset med `strip`", "Fordi metoden regner store og små bokstaver som det samme tegnet"],
      explanation: "En tom streng har ingen posisjon 0, så indekseringen gir `IndexError`, mens `startswith` bare svarer `False`. Metoden ser bare på starten, `strip` endrer ingenting på indekseringen, og store og små bokstaver er irrelevant for `#`.",
    },
    {
      question: "Hva er fordelen med `with open(filnavn) as f:` framfor `open` og `close`?",
      options: ["Fila lukkes automatisk, også hvis programmet krasjer underveis", "Fila leses raskere, fordi hele innholdet hentes i én operasjon", "Fila kan leses flere ganger, fordi filpekeren stilles tilbake", "Fila renses automatisk, så `strip` på hver linje er unødvendig"],
      explanation: "Formen garanterer lukkingen, også ved feil. Den endrer verken lesehastighet, filpeker eller innhold — linjene har fortsatt linjeskiftet sitt og må renses. Begge formene gir full pott på eksamen.",
    },
    {
      question: "Hvorfor skal innlesingsfunksjonen ta filnavnet som parameter i stedet for å skrive det inn i koden?",
      options: ["Så funksjonen kan brukes på en annen fil av de senere deloppgavene", "Så funksjonen slipper å åpne fila, og kan få den ferdig åpnet utenfra", "Så funksjonen kan lese flere filer samtidig i den samme løkka", "Så funksjonen automatisk lukker fila når den er ferdig med den"],
      explanation: "Parameteren gjør funksjonen gjenbrukbar og lar sensor teste den på andre data. Den har ingenting med åpning, samtidighet eller lukking å gjøre — det er `with` som lukker automatisk.",
    },
    {
      question: "Fila `ladestasjoner.txt` har fem linjer, hvorav den første er en overskriftsrad. Hvor mange ganger kjører kroppen i `for linje in f:` hvis du ikke har kalt `readline()` først?",
      options: ["Fem ganger, fordi løkka ikke kjenner igjen en overskriftsrad", "Fire ganger, fordi løkka hopper over den første linja av seg selv", "Fire ganger, fordi siste linje mangler linjeskift", "Seks ganger, fordi den tomme linja etter siste rad også telles med"],
      explanation: "For filobjektet er alle linjer like, så alle fem leses. Løkka har ingen kjennskap til overskrifter, den siste linja telles selv uten linjeskift, og en fil som slutter med linjeskift gir ingen ekstra tom linje.",
    },
    {
      question: "Oppgaven ber om «hvor mange billetter hver film solgte til sammen». Hvilken struktur bygger du?",
      options: ["En ordbok med filmnavnet som nøkkel og en sum som verdi", "En ordbok med filmnavnet som nøkkel og ei liste som verdi", "En 2D-liste der hver rad er én film med alle salgene i seg", "En 2D-liste med én rad per forestilling, sortert på film"],
      explanation: "Ordene «hver» og «til sammen» peker på en teller med ett tall per nøkkel. Ei liste per nøkkel svarer på «alle salgene», ikke på summen, og begge tabellformene krever en ekstra runde med arbeid for å svare på spørsmålet.",
    },
    {
      question: "Hvorfor bør kolonneoppslaget `overskrift.index('pris')` stå utenfor innlesingsløkka?",
      options: ["Fordi oppslaget ellers gjentas én gang per linje i fila", "Fordi oppslaget ellers gir `ValueError` på andre linje", "Fordi overskriftsraden ellers blir forbrukt av det første oppslaget", "Fordi indeksen ellers blir en lokal variabel som løkka ikke ser"],
      explanation: "`.index` går gjennom overskriftsraden på nytt hver gang, så inne i løkka gjør programmet den samme jobben én gang per linje. Det er sløseri, ikke en feil — oppslaget gir samme svar hver gang, forbruker ingenting, og variabler i en løkkekropp er synlige etterpå.",
    },
  ],
  'tdt4110-7-3': [
    {
      question: "Hva gir `float('24,90')`?",
      options: ["En `ValueError`, fordi komma ikke er gyldig desimaltegn", "Flyttallet 24.9, siden Python godtar begge desimaltegnene", "Flyttallet 2490.0, siden kommaet leses som et tusenskille", "Strengen `'24.90'`, som må konverteres en gang til"],
      explanation: "Python krever punktum som desimaltegn, så kommaet gir `ValueError`. Grepet er `.replace(',', '.')` før konverteringen. Ingen av de tre andre tolkningene finnes i Python.",
    },
    {
      question: "Hva er `197 // 60` og `197 % 60`?",
      options: ["3 og 17", "3.28 og 17", "3 og 0.28", "4 og 17"],
      explanation: "`//` gir heltallsdelen 3, `%` gir resten 17 — altså 3 minutter og 17 sekunder. `3.28` er det `/` ville gitt, og `//` runder nedover, ikke oppover.",
    },
    {
      question: "Hvorfor er `'10:05' < '9:30'` sant i Python?",
      options: ["Fordi strenger sammenlignes tegn for tegn, og `1` kommer før `9`", "Fordi kolonet regnes som et desimaltegn i en tekstsammenligning", "Fordi strenger sammenlignes på lengde, og den korteste er minst", "Fordi Python gjør begge om til tall og sammenligner minuttallene først"],
      explanation: "Sammenligningen går tegn for tegn fra venstre, og sifferet 1 kommer før sifferet 9 i tegnrekkefølgen. Verken lengde, kolon eller automatisk konvertering spiller inn — derfor må tider gjøres om til tall før de sammenlignes.",
    },
    {
      question: "Hva gir `'2026-02-01     418   kjeller'.split()`?",
      options: ["Ei liste med tre elementer, uten tomme felt", "Ei liste med tre elementer, der to av dem har mellomrom i seg", "Ei liste med tolv elementer, der ni er tomme strenger", "Ei liste med ett element, siden mellomrom ikke er skilletegn"],
      explanation: "`split()` uten argument slår sammen alle blanktegnklynger til ett skille, så du får nøyaktig de tre ekte feltene. De tolv elementene er det `split(' ')` ville gitt, med et tomt felt per ekstra mellomrom.",
    },
    {
      question: "Hva returnerer `'89,50'.split()[0]`?",
      options: ["`'89,50'` — hele strengen, siden det ikke er mellomrom å dele på", "`'89'` — den første biten, siden kommaet regnes som et skille", "En `IndexError`, siden lista fra `split` er tom uten mellomrom", "`'8'` — det første tegnet, siden `[0]` indekserer i strengen"],
      explanation: "Uten blanktegn gir `split()` ei liste med hele strengen som eneste element, og `[0]` henter den. Kommaet er ikke et blanktegn, lista er ikke tom, og `[0]` gjelder lista, ikke strengen.",
    },
    {
      question: "Hva er `str(5).zfill(2)`?",
      options: ["`'05'`", "`'5 '`", "`'50'`", "`'  5'`"],
      explanation: "`zfill` fyller på nuller **foran** til den oppgitte lengden. `'5 '` og `'  5'` er det `ljust(2)` og `rjust(3)` ville gitt, og `'50'` ville krevd nuller bakpå.",
    },
    {
      question: "En oppgave ber om en funksjon som konverterer ei liste av strenger til tall uten å endre lista som kommer inn. Hvilken form oppfyller kravet?",
      options: ["`ut = []` og `ut.append(int(x))` i løkka, deretter `return ut`", "`felt[i] = int(felt[i])` i en løkke over indeksene, deretter `return felt`", "`felt = int(felt)` på hele lista, deretter `return felt`", "`return int(felt)` direkte, siden `int` også virker på lister"],
      explanation: "Bare en ny liste bygget med `append` lar originalen stå urørt. Å skrive tilbake i `felt[i]` endrer lista til den som kalte funksjonen, og `int` kan ikke ta imot ei liste i det hele tatt.",
    },
    {
      question: "Hva skjer når du bygger `{rad[0]: rad}` og to rader har samme verdi i kolonne 0?",
      options: ["Den siste raden overskriver den første, uten feilmelding", "Den første raden beholdes, og den siste kastes uten feilmelding", "Begge radene lagres, siden verdiene er forskjellige", "Python gir en `KeyError` for den nøkkelen som gjentas"],
      explanation: "En ordbok har én verdi per nøkkel, og innsetting overskriver i stillhet. Skal begge radene tas vare på, må verdien være ei liste. `KeyError` gjelder oppslag på en manglende nøkkel, ikke innsetting.",
    },
    {
      question: "Hvorfor bør `tid_til_sekunder` være en egen funksjon i stedet for tre linjer inne i innlesingsløkka?",
      options: ["Fordi den da kan kalles både fra innlesingen og fra deloppgavene", "Fordi innlesingsløkka ellers blir for treg til å lese store filer", "Fordi Python ikke tillater regneuttrykk inne i en filløkke", "Fordi tidsberegning krever en egen funksjon for å gi riktig resultat"],
      explanation: "Gjenbruk er hele poenget — og oppgaven ber som regel om funksjonen som en egen deloppgave med egen vekting. Hastighet, syntaks og korrekthet er ikke argumenter her; koden ville gitt samme resultat inne i løkka.",
    },
    {
      question: "Hva gir `'{:05.2f}'.format(4.32)`?",
      options: ["`'04.32'` — fem tegn i alt, medregnet punktumet", "`'4.32000'` — fem desimaler etter punktumet", "`'00004.32'` — fem nuller foran tallet", "`'  4.32'` — fem tegn bredde, fylt med mellomrom foran"],
      explanation: "Tallet foran punktumet i formatoppskriften er den totale bredden, og `0` sier at det skal fylles med nuller. `.2f` styrer desimalene, og mellomrom ville du fått uten `0` i oppskriften.",
    },
    {
      question: "En 2D-liste har rader `[navn, klubb, tid]`. Hvilken struktur svarer på «hvilke tider har hver klubb»?",
      options: ["En ordbok med klubben som nøkkel og ei liste med tider", "En ordbok med klubben som nøkkel og den beste tiden som verdi", "En ordbok med tiden som nøkkel og klubben som verdi", "En 2D-liste sortert på klubb, med tidene i den siste kolonnen"],
      explanation: "Ordet «hvilke» i flertall peker på ei liste per nøkkel. Én beste tid svarer på et annet spørsmål, tiden som nøkkel snur oppslaget feil vei, og en sortert tabell krever fortsatt en runde til for å samle tidene.",
    },
    {
      question: "En rad fra en semikolondelt fil er `['R4', '', '12.0']`. Hva gir `int(rad[1])`?",
      options: ["En `ValueError` — en tom streng er ikke et tall", "Tallet 0, som er standardverdien for en tom streng", "Verdien `None`, siden feltet mangler innhold", "En `IndexError`, siden feltet ikke finnes i lista"],
      explanation: "`int('')` gir `ValueError` — Python gjetter aldri på 0 eller `None`. Feltet finnes i lista, det er bare tomt, så `IndexError` er utelukket. Testen `if rad[1] == '':` må stå før konverteringen.",
    },
    {
      question: "En fil har feltene skilt av et varierende antall mellomrom, og én linje mangler midtfeltet. Hvordan oppdager du det?",
      options: ["Ved å telle elementene, siden det tomme feltet forsvinner", "Ved å teste om midtfeltet er en tom streng etter delingen", "Ved å teste om midtfeltet er `None` etter delingen", "Ved å telle mellomrommene i linja før du deler den"],
      explanation: "`split()` uten argument slår sammen blanktegn, så et manglende felt etterlater ingen tom streng — lista blir bare kortere. Testen på tom streng virker bare når fila har et ekte skilletegn som semikolon, og `None` oppstår aldri av seg selv.",
    },
    {
      question: "Hvorfor gir `sum([64.32, 58.91, 72.07]) / 3` svaret `65.10000000000001`?",
      options: ["Fordi flyttall lagres binært, og noen desimaltall ikke går helt opp", "Fordi divisjonen med et heltall gir en avrundingsfeil i Python", "Fordi `sum` legger sammen i tilfeldig rekkefølge hver gang", "Fordi tallene ble lest fra tekst og har mistet presisjon i konverteringen"],
      explanation: "Binær lagring av desimaltall gir små avvik som viser seg i den siste desimalen. Rekkefølgen i `sum` er fast, divisjonen er ikke skyldig, og `float()` mister ingen presisjon utover den binære representasjonen selv. Formatér i utskriften hvis du vil ha et pent tall.",
    },
  ],
  'tdt4110-7-4': [
    {
      question: "Hvorfor startes `beste_verdi` på `None` og ikke på 0 i mønsteret «finn beste»?",
      options: ["Fordi ingen rad slår 0 når alle verdiene i tabellen er negative", "Fordi `None` gjør at løkka avslutter av seg selv på tom tabell", "Fordi 0 gir `TypeError` når det sammenlignes med et flyttall", "Fordi `None` gjør at den siste raden alltid vinner sammenligningen"],
      explanation: "Med 0 som startverdi vinner ingen negativ verdi, og funksjonen svarer 0 — et tall som ikke finnes i dataene. `None` lar første rad vinne. Løkkas lengde påvirkes ikke, `int` mot `float` er lovlig, og det er den **beste** raden som vinner, ikke den siste.",
    },
    {
      question: "Hva gir `max(tabell)` når `tabell` er en 2D-liste med rader `[navn, pris]`?",
      options: ["Raden med det alfabetisk siste navnet, siden lister veies elementvis", "Raden med den høyeste prisen, siden tall veier tyngre enn tekst", "Ei liste med det største elementet fra hver kolonne satt sammen", "En `TypeError`, siden tekst og tall ikke kan sammenlignes med hverandre"],
      explanation: "To lister sammenlignes element for element fra venstre, så første kolonne avgjør. Prisen ser Python aldri på med mindre du gir en `key`. Ingen kolonner blandes, og feilen oppstår ikke fordi det er navn mot navn som sammenlignes.",
    },
    {
      question: "Hva gjør `key`-parameteren i `max(tabell, key=lambda rad: rad[2])`?",
      options: ["Bestemmer hva som sammenlignes, men gir hele raden som vant", "Bestemmer hva som returneres, altså verdien i kolonne 2 selv", "Filtrerer bort radene der kolonne 2 mangler en verdi", "Sorterer tabellen på kolonne 2 før den største velges"],
      explanation: "`key` styrer rangeringen; elementet returneres helt. Vil du ha selve verdien, henter du `rad[2]` etterpå. Ingen rader filtreres bort, og tabellen sorteres ikke — `max` går gjennom den én gang.",
    },
    {
      question: "Hva er forskjellen på `d[k] = d.get(k, 0) + 1` og `d[k] = d.get(k, 0) + rad[j]`?",
      options: ["Den første teller forekomster, den andre summerer en verdi per nøkkel", "Den første virker på lister, den andre virker på 2D-tabeller", "Den første krever at nøkkelen finnes fra før, den andre gjør ikke", "Den første gir alltid heltall, den andre gir alltid flyttall som svar"],
      explanation: "Forskjellen er hva som legges til: 1 gir et antall, radens verdi gir en sum. Begge bruker `get` og krever ingen eksisterende nøkkel, begge virker på det samme, og resultattypen følger av dataene.",
    },
    {
      question: "Hvorfor krasjer `d[k] += 1` uten `get` første gang nøkkelen dukker opp?",
      options: ["Fordi uttrykket først slår opp `d[k]`, og oppslaget gir `KeyError`", "Fordi `+=` ikke er tillatt på verdier som ligger i en ordbok", "Fordi ordbøker krever at alle nøkler opprettes før løkka starter", "Fordi `+=` bare virker på tall, og verdien er ennå ikke et tall"],
      explanation: "`d[k] += 1` betyr `d[k] = d[k] + 1`, og høyre side leses først — et oppslag på en ukjent nøkkel gir `KeyError`. `+=` er fullt lovlig på ordbokverdier, og nøkler kan opprettes underveis.",
    },
    {
      question: "Hva er den avgjørende linja i grupperingsmønsteret `{nøkkel: [rader]}`?",
      options: ["`if rad[k] not in d: d[rad[k]] = []` — den indre lista må finnes først", "`d[rad[k]] = rad` — verdien må settes inn før den kan utvides", "`return d` — ordboka må returneres, ellers går grupperingen tapt", "`for rad in tabell[1:]` — overskriftsraden må holdes helt utenfor gruppene"],
      explanation: "Uten opprettelsen krasjer `.append` med `KeyError`, fordi oppslaget skjer før metoden kalles. Tilordningen `d[rad[k]] = rad` ville tvert imot ødelagt grupperingen, og de to andre linjene er riktige, men ikke det som skiller mønsteret fra en teller.",
    },
    {
      question: "Hva er forskjellen på `d.get(k, [])` og `d.setdefault(k, [])`?",
      options: ["`setdefault` setter nøkkelen inn i ordboka, `get` gjør det ikke", "`get` setter nøkkelen inn i ordboka, `setdefault` gjør det ikke", "`setdefault` virker bare på lister, `get` virker på alle verdityper", "`get` gir en kopi av verdien, `setdefault` gir den originale verdien"],
      explanation: "Nettopp innsettingen er forskjellen, og den er grunnen til at `setdefault` kan brukes til gruppering: lista som returneres, ligger allerede i ordboka, så `.append` på den virker. Begge takler alle verdityper og gir den samme verdien, ikke en kopi.",
    },
    {
      question: "Hva returnerer `max(d, key=d.get)` for en ordbok `d`?",
      options: ["Nøkkelen som har den største verdien i ordboka", "Den største verdien i ordboka, uten nøkkelen", "Et par med både nøkkelen og verdien som vant", "Den alfabetisk siste nøkkelen, siden `max` går over nøkler"],
      explanation: "`max` går over nøklene og bruker `d.get` til å rangere dem, så det er nøkkelen som returneres. Verdien henter du med `d[svar]` etterpå. Uten `key` ville du fått den alfabetisk siste nøkkelen.",
    },
    {
      question: "En analysefunksjon skal svare på «hvor mye har hver mekaniker omsatt for». Hvilken struktur bygger den?",
      options: ["En ordbok med mekanikeren som nøkkel og en sum som verdi", "En ordbok med mekanikeren som nøkkel og ei liste priser som verdi", "En 2D-liste med én rad per mekaniker og prisene i kolonnene", "En flat liste med alle prisene, sortert etter mekanikernavn"],
      explanation: "Ordene «hver» og «hvor mye» peker på summeringen med ett tall per nøkkel. Ei liste per nøkkel svarer på «hvilke priser», og de to listeformene krever en runde til før spørsmålet er besvart.",
    },
    {
      question: "Hva skjer hvis du glemmer `tabell[1:]` og går over hele tabellen i en analysefunksjon?",
      options: ["Overskriftsraden behandles som data, og svaret blir feil eller krasjer", "Python hopper automatisk over overskriftsraden i en `for`-løkke", "Funksjonen gir riktig svar, men bruker litt lengre tid på store tabeller", "Overskriftsraden gir `KeyError`, siden den ikke har tallverdier i seg"],
      explanation: "For løkka er overskriftsraden en rad som alle andre, så teksten `'pris'` blir sammenlignet eller talt. Python hopper ikke over noe av seg selv, og feilen er `TypeError` eller et feil antall, ikke `KeyError`.",
    },
    {
      question: "Hva gir `sum(d)` når `d` er ordboka `{'Rune': 1080, 'Selma': 2390}`?",
      options: ["En `TypeError`, siden `sum` summerer nøklene, som er tekst", "3470, siden `sum` legger sammen verdiene i ordboka", "2, siden `sum` teller antall nøkkelpar i ordboka", "En tom sum lik 0, siden en ordbok ikke kan summeres direkte"],
      explanation: "Å gå gjennom en ordbok gir nøklene, så `sum` prøver å legge sammen tekst og gir `TypeError`. Vil du ha 3470, skriver du `sum(d.values())`; antall par får du med `len(d)`.",
    },
    {
      question: "Hvorfor bør `tabell[0].index('pris')` stå utenfor analyseløkka?",
      options: ["Fordi oppslaget ellers gjentas én gang per rad i tabellen", "Fordi oppslaget ellers gir et nytt kolonnenummer for hver rad", "Fordi variabelen ellers blir lokal og ikke synlig etter løkka", "Fordi overskriftsraden ellers blir forbrukt av det første oppslaget"],
      explanation: "`.index` går gjennom overskriftsraden på nytt hver gang, så inne i løkka gjøres den samme jobben én gang per rad. Svaret er det samme hver gang, ingenting forbrukes, og variabler i en løkkekropp er synlige etterpå.",
    },
    {
      question: "Hva returnerer mønsteret «finn beste» med `None` som startverdi når tabellen bare har en overskriftsrad?",
      options: ["`None`, siden løkka aldri kjører og startverdien blir stående", "En `IndexError`, siden `tabell[1]` ikke finnes i tabellen", "Overskriftsraden, siden den er den eneste raden som finnes", "En `ValueError`, på samme måte som `max` på en tom liste"],
      explanation: "`tabell[1:]` er ei tom liste, så løkkekroppen kjører null ganger og `beste` er fortsatt `None`. Det er en av grunnene til at mønsteret skrives slik — snarveien `max` ville derimot gitt `ValueError`.",
    },
    {
      question: "En oppgave sier «alle bydelene som har meldt inn denne avvikstypen, uten gjentakelser». Hva må du legge til i grupperingen?",
      options: ["En test på `if verdi not in d[nøkkel]:` rett før `append`", "En test på `if nøkkel not in d:` rett før `append`", "En sortering av den indre lista etter at løkka er ferdig", "En teller som holder styr på hvor mange ganger hver verdi kom"],
      explanation: "Duplikatsjekken gjelder innholdet i den indre lista, så testen må se på verdien. Testen på nøkkelen oppretter bare lista og er allerede med. Sortering og telling endrer ikke om verdien står der flere ganger.",
    },
    {
      question: "Hvilken av disse formene gir riktig svar på «gjennomsnittlig pris» også når tabellen ikke har datarader?",
      options: ["En løkke som teller selv, med `if antall == 0: return None` først", "`sum(priser) / len(priser)` der `priser` er kolonnen trukket ut", "`sum(priser) / len(tabell)` der `tabell` inkluderer overskriftsraden", "`max(priser) / min(priser)` som forholdstall mellom ytterpunktene"],
      explanation: "Bare den eksplisitte tomtesten hindrer divisjonen på null. Uttrykket med `len(priser)` krasjer med `ZeroDivisionError`, `len(tabell)` gir feil nevner også på ikke-tomme tabeller, og forholdstallet svarer på et helt annet spørsmål.",
    },
    {
      question: "Hva er sensors syn på å bruke `max` og `sum` i stedet for å skrive løkkene selv i dette faget?",
      options: ["Begge former er sidestilt og gir full pott, og fasitene bruker snarveiene", "Løkkene gir full pott, mens snarveiene trekker litt fordi de skjuler arbeidet", "Snarveiene gir full pott, mens løkkene trekker litt fordi de er lengre", "Snarveiene godtas bare når oppgaveteksten nevner dem uttrykkelig"],
      explanation: "Emnet er pragmatisk: de offisielle løsningsforslagene bruker `max`, `min`, `sum` og `sorted` fritt, og flere korrekte løsninger sidestilles. Verken form trekker, og ingen av dem må være nevnt i oppgaveteksten for å være lov.",
    },
  ],
  'tdt4110-7-5': [
    {
      question: "Hva returnerer `x.sort()`?",
      options: ["`None` — metoden sorterer lista på plass og gir ingenting tilbake", "Den sorterte lista, mens den opprinnelige lista står urørt", "Den sorterte lista, og den opprinnelige lista blir også sortert", "Antall bytter som ble gjort under sorteringen av lista"],
      explanation: "Metoden endrer lista og returnerer `None`, så `x = x.sort()` ødelegger lista di. Vil du ha ei ny sortert liste, bruker du `sorted(x)` — det er den som lar originalen stå urørt.",
    },
    {
      question: "Hvorfor er `sorted(kolonne)` feil svar på «rangér butikkene etter pris»?",
      options: ["Fordi koblingen mellom butikknavnet og prisen går tapt i kolonnen", "Fordi `sorted` ikke kan sortere ei liste som bare inneholder tall", "Fordi kolonnen må konverteres til en ordbok før den kan sorteres", "Fordi `sorted` sorterer stigende, og en rangering skal være synkende"],
      explanation: "En løsrevet kolonne er bare tall — hvilken butikk de hørte til, er borte. Derfor sorteres hele rader med en `key`. `sorted` takler tall fint, ordbok er unødvendig, og retningen styres av `reverse`.",
    },
    {
      question: "Hva gir `sorted(rader, key=lambda rad: rad[2])[:3]` når `rader` har fem rader?",
      options: ["De tre radene med lavest verdi i kolonne 2", "De tre radene med høyest verdi i kolonne 2", "De tre første radene i tabellen, sortert på kolonne 2", "De tre radene med lavest verdi i den første kolonnen"],
      explanation: "`sorted` gir stigende rekkefølge, så utsnittet tar de tre laveste. De høyeste ville krevd `reverse=True`, og «de tre første i tabellen» ville vært `sorted(rader[:3], …)` — der utsnittet kommer før sorteringen.",
    },
    {
      question: "Hva skjer med `sortert[:5]` når `sortert` bare har tre rader?",
      options: ["Du får de tre radene som finnes, uten feilmelding", "Du får en `IndexError`, siden indeks 4 ikke finnes i lista", "Du får ei liste med tre rader og to `None`-verdier bakerst", "Du får ei tom liste, siden utsnittet går utenfor lista"],
      explanation: "Utsnitt er tolerante: de gir det som finnes. Det er indekser som `sortert[4]` som gir `IndexError`. Python fyller aldri på med `None`, og et utsnitt blir ikke tomt fordi sluttgrensen er for høy.",
    },
    {
      question: "Hva er feil i `rader[j][k], rader[j+1][k] = rader[j+1][k], rader[j][k]` inne i en boblesortering?",
      options: ["Bare verdiene i kolonne `k` bytter plass, og radene blir feilkoblet", "Byttet virker ikke, siden to tilordninger ikke kan stå på samme linje", "Indeksen `j+1` går utenfor lista i den siste sammenligningen", "Byttet skjer på en kopi, så den opprinnelige tabellen blir uendret"],
      explanation: "Bare tallene flyttes, mens navnene blir liggende — resultatet er en tabell der feltene ikke hører sammen lenger. Dobbeltilordning på én linje er lovlig, grensene er de vanlige, og lister endres på plass.",
    },
    {
      question: "Hva gir `sorted(['1290', '990', '760'])`?",
      options: ["`['1290', '760', '990']` — tekst sorteres tegn for tegn fra venstre", "`['760', '990', '1290']` — Python tolker sifrene som tall", "`['990', '760', '1290']` — lengden avgjør før innholdet", "En `TypeError`, siden tall skrevet som tekst ikke kan sorteres"],
      explanation: "Strenger sammenlignes tegn for tegn, så `'1'` kommer før `'7'` og `'9'`. Python konverterer aldri av seg selv, lengde er ikke et kriterium, og tekst er fullt sorterbar — bare ikke som tall.",
    },
    {
      question: "Hva returnerer `sorted(d, key=d.get)` for en ordbok `d`?",
      options: ["Nøklene som ei liste, sortert etter verdien de har i ordboka", "Verdiene som ei liste, sortert stigende uten nøklene", "En ny ordbok med de samme parene i sortert rekkefølge", "Par av nøkkel og verdi som lister, sortert på verdien"],
      explanation: "Å gå gjennom en ordbok gir nøklene, og `d.get` brukes bare til å rangere dem — så du får nøklene tilbake. Verdiene henter du med `d[nøkkel]`, og par får du med `d.items()`.",
    },
    {
      question: "Hvorfor skal overskriftsraden holdes utenfor sorteringen?",
      options: ["Fordi tekst mot tall gir `TypeError` eller havner et vilkårlig sted", "Fordi `sorted` alltid legger den første raden sist i resultatet", "Fordi `key`-funksjonen ikke kan lese fra den første raden i tabellen", "Fordi overskriftsraden mister kolonnenavnene når tabellen sorteres"],
      explanation: "Overskriften er tekst, og sammenligning med tall gir `TypeError` — er kolonnen tekst, havner overskriften bare et vilkårlig sted. `sorted` behandler alle rader likt, `key` leser fint fra rad 0, og innholdet i raden endres ikke.",
    },
    {
      question: "Oppgaveteksten oppgir en ferdig `sort_list(rader, k)`. Hva er riktig å gjøre?",
      options: ["Kalle den med riktig kolonnenummer og bruke tiden på analysen", "Skrive boblesortering likevel, siden egen kode gir bedre uttelling", "Kalle den, men bare hvis tabellen har flere enn ti rader", "Skrive om den til å bruke `sorted`, slik at koden blir kortere"],
      explanation: "Er funksjonen utlevert, tester deloppgaven at du finner riktig `k` og bruker resultatet — ikke at du kan skrive en algoritme. Egen kode gir ikke mer uttelling, tabellstørrelsen er irrelevant, og å skrive om en gitt funksjon er bortkastet tid.",
    },
    {
      question: "Hva gjør `key=lambda rad: (rad[2], rad[0])`?",
      options: ["Sorterer på kolonne 2, og bruker kolonne 0 til å skille like verdier", "Sorterer på kolonne 0, og bruker kolonne 2 til å skille like verdier", "Sorterer på summen av kolonne 2 og kolonne 0 i hver rad", "Sorterer først hele tabellen på kolonne 2, og deretter på kolonne 0"],
      explanation: "Tuppelet sammenlignes elementvis fra venstre: kolonne 2 avgjør, og kolonne 0 brukes bare ved likhet. Rekkefølgen i tuppelet er ikke tilfeldig, ingenting summeres, og det er én sortering, ikke to.",
    },
    {
      question: "Hva er forskjellen på `stigende[::-1][:3]` og `stigende[:3][::-1]`?",
      options: ["Den første gir de tre største, den andre de tre minste i motsatt rekkefølge", "Den første gir de tre minste, den andre de tre største i motsatt rekkefølge", "De gir det samme resultatet, siden begge operasjonene er utsnitt", "Den første gir en `IndexError` når lista har færre enn tre rader"],
      explanation: "Operasjonene utføres fra venstre: den første snur hele lista og tar toppen, den andre tar de tre minste og snur dem. Rekkefølgen er derfor avgjørende, og begge former er trygge på korte lister siden begge er utsnitt.",
    },
    {
      question: "Hva betyr det at sortering i Python er **stabil**?",
      options: ["Rader med lik nøkkelverdi beholder rekkefølgen de hadde fra før", "Sorteringen gir samme resultat uansett hvilken algoritme som brukes", "Sorteringen krasjer aldri, uansett hvilke datatyper lista inneholder", "Rader med lik nøkkelverdi legges alfabetisk etter det første feltet"],
      explanation: "Stabilitet gjelder like nøkler: de kommer ut i samme innbyrdes rekkefølge som de gikk inn. Boblesortering trenger ikke være stabil, blandede datatyper gir fortsatt `TypeError`, og alfabetisk skille krever et andre kriterium i nøkkelen.",
    },
  ],
  'tdt4110-7-6': [
    {
      question: "Hva er den presise begrunnelsen for å skrive `tabell[0].index('pris')` i stedet for `rad[2]`?",
      options: ["Oppgavetekstene sier at kolonnerekkefølgen ikke kan antas kjent", "Oppslaget er raskere enn en indeksering med et fast tall", "Indeksering med tall gir `IndexError` på rader med få kolonner", "Oppslaget konverterer kolonnen til riktig datatype samtidig"],
      explanation: "Kravet er uttalt i oppgavetekstene, og feilen er stum: hardkodet indeks leser feil kolonne uten å si fra. Oppslaget er tvert imot litt tregere, det konverterer ingenting, og `IndexError` er ikke poenget.",
    },
    {
      question: "Hva skjer med `tabell[1]` og `tabell[1:]` når tabellen bare har en overskriftsrad?",
      options: ["`tabell[1]` gir `IndexError`, `tabell[1:]` gir ei tom liste", "Begge gir ei tom liste, uten noen feilmelding i det hele tatt", "Begge gir `IndexError`, siden indeks 1 ikke finnes i tabellen", "`tabell[1]` gir `None`, og `tabell[1:]` gir ei liste med `None` i"],
      explanation: "Utsnitt er tolerante og gir det som finnes; indekser krasjer når posisjonen ikke er der. Python gir aldri `None` for en manglende indeks — det er en feilmelding.",
    },
    {
      question: "En funksjon returnerer ei liste i normaltilfellet. Hva bør den returnere når ingenting passer?",
      options: ["Ei tom liste, slik at returtypen er den samme i begge tilfeller", "`None`, slik at den som kaller kan se at ingenting ble funnet", "Tallet 0, som er den vanlige verdien for ingenting i Python", "`-1`, som er konvensjonen for ikke-funnet i denne boka"],
      explanation: "Regelen er å beholde returtypen — da kan den som kaller skrive `for x in svar:` uten å teste først. `None` er for funksjoner som returnerer én verdi, `-1` for posisjoner, og 0 bare når null er et gyldig svar.",
    },
    {
      question: "Hvilket av disse mønstrene takler en tom tabell **uten** noen ekstra `if`-test?",
      options: ["«Finn beste» med `None` som startverdi for både rad og verdi", "`max(tabell[1:], key=lambda rad: rad[k])` med en nøkkelfunksjon", "`sum(priser) / len(priser)` der kolonnen er trukket ut på forhånd", "`sorted(tabell[1:], key=lambda rad: rad[k])[0]` for den minste raden"],
      explanation: "Med `None` som startverdi kjører løkka null ganger og `None` blir stående. `max` gir `ValueError`, divisjonen gir `ZeroDivisionError`, og `[0]` på ei tom liste gir `IndexError` — alle tre trenger en test.",
    },
    {
      question: "Oppgaveteksten sier «listen skal ikke inneholde duplikater». Hvilken linje løser kravet?",
      options: ["`if x not in resultat:` rett før `resultat.append(x)`", "`if x not in tabell:` rett før `resultat.append(x)`", "`resultat.sort()` etter at løkka er ferdig med alle radene", "`if len(resultat) > 0:` rett før `resultat.append(x)`"],
      explanation: "Testen må se på om verdien allerede er i **resultatet**. Å teste mot tabellen svarer på noe annet, sortering endrer ikke innholdet, og lengdetesten hindrer bare den første innsettingen.",
    },
    {
      question: "Hvorfor skriver boka `sorted(set(x))` og ikke `list(set(x))`?",
      options: ["Fordi rekkefølgen i en mengde ikke er til å stole på i et svar", "Fordi `list` på en mengde gir `TypeError` for tekstverdier", "Fordi `sorted` også fjerner duplikater, slik at `set` blir overflødig", "Fordi `list` beholder duplikatene som mengden hadde fjernet"],
      explanation: "Mengder har ingen pålitelig rekkefølge, så `list(set(x))` kan gi ulikt resultat fra gang til gang. `list` virker fint på mengder, `sorted` fjerner ingen duplikater alene, og duplikatene er allerede borte etter `set`.",
    },
    {
      question: "Hva er forskjellen på de to testene i en gruppering med duplikatsjekk?",
      options: ["Den ene oppretter den indre lista, den andre hindrer duplikater i den", "Den ene oppretter den indre lista, den andre sorterer den til slutt", "Den ene hindrer duplikater, den andre hindrer at nøkkelen gjentas", "De gjør det samme, og den ene kan fjernes uten at noe endres"],
      explanation: "Testen på nøkkelen oppretter lista, testen på verdien hindrer duplikatet — dropper du den første får du `KeyError`, dropper du den andre får du duplikater. De erstatter ikke hverandre, og ingen av dem sorterer.",
    },
    {
      question: "Hvilken telling gir feil svar når radene kommer i tilfeldig rekkefølge?",
      options: ["En som nullstiller en teller når nøkkelen skifter fra forrige rad", "En ordbok med `d[k] = d.get(k, 0) + 1` for hver rad i tabellen", "En som går gjennom alle radene og teller treff på ett bestemt navn", "En som bygger en ordbok av lister og teller lengden av hver liste"],
      explanation: "Å holde styr på «forrige rad» forutsetter at like rader står samlet — kommer de blandet, lagres bare den siste klyngen. De tre andre går gjennom alle radene uavhengig av rekkefølgen.",
    },
    {
      question: "Når hører `try/except` hjemme, og når hører en `if`-test hjemme?",
      options: ["`try` mot feil utenfra som fil-I/O, `if` mot det du kan forutse", "`try` mot alt som kan gå galt, `if` bare når koden må være rask", "`if` mot feil utenfra, `try` mot tomme tabeller og manglende kolonner", "`try` i analysefunksjoner, `if` i innlesings- og utskriftsfunksjoner"],
      explanation: "Unntakshåndtering er for det uforutsigbare — manglende fil, ødelagt linje. De fire robusthetskravene kan du se komme, og de løses med `if`. En bred `try` skjuler i tillegg dine egne skrivefeil.",
    },
    {
      question: "Hvorfor er 0 galt som svar på «gjennomsnittlig pris» for en tom tabell?",
      options: ["Fordi 0 er en pris, og svaret er at det ikke finnes noen pris", "Fordi 0 gir `ZeroDivisionError` når den brukes videre i regning", "Fordi 0 ikke kan sammenlignes med flyttall i en senere test", "Fordi Python returnerer `None` av seg selv ved divisjon på null"],
      explanation: "Null er en meningsfull pris, og å svare 0 er derfor en påstand om dataene som ikke stemmer. `None` sier «ingen svar». Ingen av de tre andre begrunnelsene er riktige — `ZeroDivisionError` oppstår i divisjonen, ikke av verdien 0.",
    },
    {
      question: "Når er `if navn in tabell[0]:` nødvendig før `tabell[0].index(navn)`?",
      options: ["Når kolonnenavnet kommer utenfra, for eksempel fra brukeren", "Alltid, siden `.index` ellers gir `ValueError` på enhver tabell", "Bare når tabellen mangler overskriftsrad helt eller delvis", "Aldri, siden `.index` returnerer `-1` for navn som ikke finnes"],
      explanation: "Kommer navnet utenfra, er en manglende kolonne en normal situasjon funksjonen må svare på. Står navnet i din egen kode, vil du gjerne se `ValueError` — den er da din skrivefeil. `.index` gir aldri `-1`; den krasjer.",
    },
    {
      question: "Hva er den beste måten å oppfylle duplikatkravet på i en funksjon som teller per person?",
      options: ["La ordbokstrukturen gjøre duplikater umulige, med én nøkkel per person", "Legge til en `if navn not in d:`-test rett før hver eneste innsetting", "Sortere resultatet til slutt, slik at like verdier havner ved siden av hverandre", "Gjøre resultatet om til en mengde helt til slutt, før det returneres"],
      explanation: "En ordbok har per definisjon én nøkkel per verdi, så duplikater kan ikke oppstå — kravet er oppfylt av strukturen, uten en eneste test. De tre andre er enten unødvendige, virkningsløse eller ekstra arbeid.",
    },
    {
      question: "Hva er den raskeste kontrollen for om koden din har en skjult rekkefølgeantakelse?",
      options: ["Stokk om radene i testdataene og se om svaret endrer seg", "Sorter tabellen først, og kjør analysen på den sorterte tabellen", "Legg til flere rader i testdataene og se om svaret blir større", "Kjør analysen to ganger på de samme dataene og sammenlign svarene"],
      explanation: "Endrer svaret seg når rekkefølgen endres, har du en antakelse du ikke visste om. Å sortere først skjuler nettopp den feilen, flere rader tester noe annet, og to kjøringer på samme data gir alltid samme svar.",
    },
    {
      question: "Hva sier sensorregelen om antakelser du har måttet gjøre?",
      options: ["Skriv én kort setning om hvert valg — uklare og lange svar trekker ned", "Skriv et avsnitt som forklarer alle alternativene du vurderte", "Ikke nevn antakelser; koden skal tale for seg selv i besvarelsen", "Legg dem som kommentarer i koden i stedet for i besvarelsen"],
      explanation: "Regelen er uttalt hvert år: svar kort og klart, og et svar som er lengre enn nødvendig trekker ned. En kort setning er nok, og den er forskjellen mellom «feil» og «riktig gitt en dokumentert antakelse». Om den står som kommentar eller i teksten, er mindre viktig enn at den finnes.",
    },
  ],
  'tdt4110-7-7': [
    {
      question: "Hva gjør `'B333333333'.ljust(6)`?",
      options: ["Gir strengen uendret, siden den allerede er lengre enn seks tegn", "Kutter strengen til de seks første tegnene og gir `'B33333'`", "Gir en `ValueError`, siden bredden er mindre enn lengden", "Legger på seks mellomrom bak den opprinnelige strengen"],
      explanation: "`ljust` og `rjust` fyller ut til en minstebredde, men kutter aldri — er teksten lengre, skjer ingenting. Derfor sprenges en tabell av det lengste feltet, og bredden bør velges etter det.",
    },
    {
      question: "Hva skjer med `f.write('B1;610')` uten linjeskift til slutt?",
      options: ["Neste `write` fortsetter på samme linje i fila", "Python legger på et linjeskift automatisk, som `print` gjør", "Fila blir tom, siden linja aldri ble avsluttet riktig", "Neste `write` overskriver linja som allerede er skrevet"],
      explanation: "`write` legger aldri på linjeskift — det er hele forskjellen fra `print`. Resultatet er en fil der alle radene renner sammen. Ingenting overskrives, og fila er slett ikke tom.",
    },
    {
      question: "Hvorfor gir `';'.join(['B1', 610])` en `TypeError`?",
      options: ["Fordi `join` krever at alle elementene i lista er strenger", "Fordi lista må ha et partall antall elementer for å limes sammen", "Fordi skilletegnet må være det samme som i inndatafila", "Fordi `join` bare kan brukes på tupler, ikke på lister"],
      explanation: "`join` limer sammen strenger, så tall må gjennom `str(...)` først. Antall elementer, valg av skilletegn og typen sekvens spiller ingen rolle — `join` virker fint på både lister og tupler.",
    },
    {
      question: "Hvilken modus skal `open` ha når `pickle.dump` skal skrive til fila?",
      options: ["`'wb'` — binær skriving", "`'w'` — vanlig tekstskriving", "`'rb'` — binær lesing", "`'a'` — legg til på slutten"],
      explanation: "`pickle` skriver byte, ikke tekst, så modusen må ha `b` i seg. Med `'w'` får du `TypeError`. `'rb'` er lesemodusen som hører til `pickle.load`, og `'a'` finnes ikke som binær tilleggsmodus i pensum her.",
    },
    {
      question: "Hva er den viktigste forskjellen på å lagre en ordbok som tekstfil og som binærfil?",
      options: ["Binærfila kommer tilbake med typene i behold, tekstfila må parses", "Binærfila kan leses av et menneske, tekstfila kan bare leses av programmet", "Binærfila tar mindre plass, men kan bare lagre tall og ikke tekst", "Binærfila kan bare lagre flate lister, ikke ordbøker med nøkler"],
      explanation: "`pickle` henter strukturen tilbake som den var — 610 er fortsatt et heltall. Tekstfila må deles og konverteres. Det er tekstfila som er lesbar for mennesker, og `pickle` takler både nøstede strukturer og alle typer.",
    },
    {
      question: "Hvorfor er `valg == 1` uten fnutter feil i en menyløkke?",
      options: ["Fordi `input()` gir tekst, så sammenligningen er alltid usann", "Fordi Python krever fnutter rundt alle verdier i en `if`-test", "Fordi sammenligning mellom tekst og tall gir en `TypeError`", "Fordi `input()` gir et heltall bare når brukeren skriver et siffer"],
      explanation: "`input()` gir alltid en streng, og en streng er aldri lik et tall. Sammenligningen er lovlig — den gir bare `False` hver gang, uten feilmelding, så programmet havner i `else` uansett hva brukeren taster.",
    },
    {
      question: "Hva skjer hvis `break` mangler i `q`-grenen i en `while True:`-meny?",
      options: ["Løkka går for alltid, siden betingelsen aldri kan bli usann", "Løkka avslutter etter én runde, siden ingen gren traff", "Programmet gir en `SyntaxError`, siden løkka mangler en utvei", "Løkka avslutter når brukeren skriver noe som ikke er et valg"],
      explanation: "Betingelsen er `True` og kan aldri bli usann, så `break` (eller `return`) er eneste vei ut. Python krever ingen utvei syntaktisk, og ingen input avslutter løkka av seg selv.",
    },
    {
      question: "Hva er forskjellen på `break` og `continue` i en menyløkke?",
      options: ["`break` går ut av løkka, `continue` hopper til neste runde", "`break` går ut av funksjonen, `continue` går ut av løkka", "`break` avslutter programmet, `continue` avslutter bare løkka", "`break` hopper til neste runde, `continue` går ut av løkka"],
      explanation: "`break` avslutter løkka, `continue` hopper over resten av kroppen og starter neste runde. `continue` i avslutningsgrenen gir derfor en meny som aldri kan avsluttes. Det er `return` som avslutter funksjonen.",
    },
    {
      question: "Hvorfor skal `main` lese fila bare én gang?",
      options: ["Så alle funksjonene kan få den samme tabellen som parameter", "Så fila ikke blir låst av at flere funksjoner har den åpen", "Så filpekeren ikke havner på feil sted i neste innlesing", "Så programmet slipper å lukke fila mellom hver menyvalg"],
      explanation: "Ett sted å lese betyr at tabellen kan sendes videre, og at funksjonene blir gjenbrukbare på andre data. Låsing, filpeker og lukking er ikke problemer her — hver `open` gir sitt eget filobjekt.",
    },
    {
      question: "Hvorfor bør `try`-blokken rundt innlesingen være så snever som mulig?",
      options: ["Ellers meldes feil andre steder i programmet som en filfeil", "Ellers blir programmet merkbart tregere for hver linje i fila", "Ellers fanger `except` bare den første feilen som oppstår", "Ellers kan `return` i `except`-grenen ikke brukes i det hele tatt"],
      explanation: "En bred `try` fanger feil den ikke var ment for, og brukeren får en feilmelding som lyver. Hastigheten påvirkes ikke merkbart, `except` fanger uansett den første feilen som oppstår, og `return` virker like fint.",
    },
    {
      question: "Hva må stå etter feilmeldingen i `except FileNotFoundError:` i `main`?",
      options: ["`return`, slik at funksjonen ikke fortsetter uten data", "`break`, slik at programmet hopper ut av unntaksblokken", "`continue`, slik at programmet prøver innlesingen på nytt", "Ingenting — `except` avslutter funksjonen av seg selv"],
      explanation: "Uten `return` fortsetter `main` med en tabell som aldri ble tilordnet, og krasjer likevel — bare litt senere. `break` og `continue` hører til løkker, og en `except`-blokk avslutter ingenting av seg selv.",
    },
    {
      question: "Hva er kjennetegnet på en god menyfunksjon slik sensor vurderer den?",
      options: ["Hver gren er ett kall til en funksjon som allerede finnes", "Hver gren inneholder hele beregningen som valget skal utføre", "Menyteksten står før løkka, slik at den bare vises én gang", "Valgene konverteres med `int()` før de sammenlignes i grenene"],
      explanation: "Delegering gir gjenbrukspoengene og gjør menyen lesbar som en innholdsfortegnelse. Beregning i grenene gir kopiert kode, menyteksten hører inne i løkka, og `int()` på valget krasjer så snart brukeren skriver `q`.",
    },
  ],
  'tdt4110-8-1': [
    {
      question: "Hva er en transistor?",
      options: ["En elektronisk bryter uten bevegelige deler, styrt elektrisk", "En liten lagerplass inne i prosessoren, styrt av kontrollenheten", "En samling ledninger som flere enheter deler for å sende data", "En glasskolbe der strømmen styres gjennom lufttomt rom"],
      explanation: "Transistoren er den minste byggesteinen: én bryter, altså ett bit. Beskrivelsen av en liten lagerplass er et register. Ledningene som deles er en buss. Glasskolben er et vakuumrør — bryteren transistoren erstattet, og derfor den nære distraktoren.",
    },
    {
      question: "Hvilken bryter ble brukt i datamaskiner FØR transistoren?",
      options: ["Vakuumrøret, som var stort, varmt og brant ofte ut", "Den integrerte kretsen, som samlet mange brytere på én plate", "Mikroprosessoren, som samlet hele prosessoren på én brikke", "Kondensatoren, som holdt på ladningen mellom hvert klokkeslag"],
      explanation: "Vakuumrøret kom først, og transistoren erstattet det fordi den er mindre, kaldere og mer holdbar. Den integrerte kretsen og mikroprosessoren kom ETTER transistoren — de er senere steg, ikke tidligere. Kondensatoren lagrer ladning og er ingen bryter.",
    },
    {
      question: "Hva er en integrert krets?",
      options: ["Mange transistorer laget samtidig på én plate, med ledningene innebygd", "Mange ferdige transistorer loddet enkeltvis fast på en kretsplate", "Mange minnebrikker koblet sammen til ett stort og sammenhengende minne", "Mange prosessorkjerner som deler den samme cachen på hovedkortet"],
      explanation: "Poenget med en integrert krets er at transistorene og ledningene lages i samme arbeidsoperasjon på én silisiumplate. Alternativet med lodding enkeltvis beskriver nettopp det man slapp unna. De to andre beskriver måter å koble ferdige brikker sammen på, ikke hvordan én brikke lages.",
    },
    {
      question: "Hvorfor gjør fotolitografi det billig å lage brikker med svært mange transistorer?",
      options: ["Mønsteret trykkes med lys i ett steg, uansett antall transistorer", "Hver transistor testes og godkjennes enkeltvis før den plasseres på platen", "Silisium er billig, og råstoffet er den største kostnaden ved produksjonen", "Metoden fjerner behovet for kjøling, som ellers ville dominert kostnaden"],
      explanation: "Kostnaden ligger i å lage mønsteret, ikke i antall transistorer i det — derfor koster en brikke med milliarder omtrent det samme som en med tusen. Testing enkeltvis er det motsatte av metoden. Råstoffkostnaden er liten, og kjøling handler om drift, ikke produksjon.",
    },
    {
      question: "Hva sier Moores lov?",
      options: ["Antall transistorer på en brikke dobles omtrent hvert annet år", "Antall transistorer på en brikke dobles omtrent hvert eneste år", "Klokkehastigheten til en prosessor dobles omtrent hvert annet år", "Prisen på lagringsplass halveres omtrent hvert annet år"],
      explanation: "Loven handler om ANTALL TRANSISTORER, og tidsrommet er omtrent to år — begge deler må stemme. Varianten med hvert år bytter ut tallet, varianten med klokkehastighet bytter ut hva som dobles, og varianten om lagringspris er en sann observasjon om verden, men ikke Moores lov.",
    },
    {
      question: "Hvilken påstand om Moores lov er riktig?",
      options: ["Den er en observasjon om bransjen og kan slutte å holde", "Den er en naturlov, og den kan derfor ikke slutte å holde", "Den ble formulert av Gordon Moore og gjelder minnepriser", "Den ble formulert etter år 2000 og gjelder antall kjerner"],
      explanation: "Moores lov er en observasjon og bransjeprognose fra 1965, ikke en fysisk lov — og veksten har faktisk flatet ut. Påstanden om naturlov er den vanligste misforståelsen. Moore formulerte den riktignok, men om transistortetthet og ikke minnepriser, og årstallet 1965 gjør den siste påstanden gal på to punkter.",
    },
    {
      question: "Hvilken vei går forholdet mellom hovedkort og datterkort?",
      options: ["Datterkortet plugges inn i hovedkortet for å utvide maskinen", "Hovedkortet plugges inn i datterkortet for å utvide maskinen", "De to plugges inn i hverandre og er likestilte i maskinen", "De to sitter atskilt og kommuniserer trådløst i maskinen"],
      explanation: "Hovedkortet er den store kretsplaten alt annet kobles til; et datterkort, for eksempel et skjermkort, plugges inn i det. Den motsatte retningen er den nære distraktoren. De to siste påstandene beskriver koblinger som ikke finnes mellom disse to kortene.",
    },
    {
      question: "Hva er en buss i en datamaskin?",
      options: ["Et sett ledninger flere enheter deler for å sende data mellom seg", "Et sett registre prosessoren deler for å lagre mellomresultater", "Et sett instruksjoner prosessoren utfører i én bestemt rekkefølge", "Et sett brikker som til sammen utgjør maskinens arbeidsminne"],
      explanation: "Bussen er delte ledninger med en bredde i bit og en hastighet, og den er ofte flaskehalsen mellom prosessor og minne. Registrene ligger inne i prosessoren og deles ikke med andre enheter. De to siste beskriver henholdsvis et program og RAM.",
    },
    {
      question: "Hvilken oppgave hører til operativsystemet?",
      options: ["Å dele prosessortid og minne mellom programmene som kjører", "Å utføre de aritmetiske og logiske operasjonene i programmene", "Å holde adressen til den neste instruksjonen som skal utføres", "Å lagre kopier av data som nylig er brukt, nær prosessoren"],
      explanation: "Operativsystemet fordeler prosessor og minne, styrer filsystemet og snakker med enhetene gjennom drivere. De tre andre er maskinvarens oppgaver: ALU-en regner, programtelleren holder adressen, og cachen holder kopier av nylig brukte data.",
    },
    {
      question: "Hva består en CPU av?",
      options: ["ALU, kontrollenhet og registre", "ALU, kontrollenhet og harddisk", "ALU, arbeidsminne og hovedkort", "ROM, arbeidsminne og operativsystem"],
      explanation: "En CPU er ALU-en som regner, kontrollenheten som styrer, og registrene som holder verdiene mens de brukes. Harddisk, arbeidsminne, hovedkort, ROM og operativsystem ligger alle UTENFOR prosessoren — de to første er minne og lagring, de to siste er kort og programvare.",
    },
    {
      question: "Hva gjør ALU-en i en prosessor?",
      options: ["Utfører de aritmetiske og logiske operasjonene den får beskjed om", "Bestemmer hvilke aritmetiske og logiske operasjoner som skal gjøres", "Henter den neste instruksjonen fra minnet ved starten av syklusen", "Lagrer instruksjonen som er under utføring akkurat i dette øyeblikket"],
      explanation: "ALU-en er den aritmetisk-logiske enheten: den utfører, men bestemmer ingenting. Alternativet om å bestemme beskriver kontrollenheten, og det er den faste fella. Å hente instruksjonen er kontrollenhetens steg 1, og å lagre instruksjonen som gjelder nå er instruksjonsregisterets jobb.",
    },
    {
      question: "Hva gjør kontrollenheten i en prosessor?",
      options: ["Tolker instruksjonen og sender styresignaler til de andre delene", "Tolker instruksjonen og utfører regnestykket i det samme steget", "Holder adressen til den instruksjonen som skal utføres etterpå", "Holder kopier av data fra RAM som nylig har vært i bruk"],
      explanation: "Kontrollenheten dekoder instruksjonen og dirigerer resten — den regner aldri selv. Alternativet som legger til at den også utfører, er sant i første ledd og galt i andre; det er slik nære distraktorer bygges. Adressen holdes av programtelleren, og kopiene ligger i cachen.",
    },
    {
      question: "Hva er et register?",
      options: ["En bitte liten lagerplass inne i prosessoren, på 32 eller 64 bit", "En bitte liten lagerplass på hovedkortet, ved siden av prosessoren", "Et hurtigminne på noen megabyte som fylles automatisk av maskinvaren", "Et arbeidsminne på flere gigabyte som programmene får tildelt av OS-et"],
      explanation: "Registre ligger inne i selve prosessoren og er den raskeste lagringen som finnes; derfor er de også få og små. Plasseringen på hovedkortet er nettopp det som gjør den andre påstanden gal. Hurtigminnet på megabyte er cachen, og arbeidsminnet på gigabyte er RAM.",
    },
    {
      question: "Hva holder programtelleren?",
      options: ["Adressen til den neste instruksjonen som skal utføres", "Selve instruksjonen som blir utført akkurat nå i prosessoren", "Antall instruksjoner som er utført siden programmet startet", "Antall klokkeslag prosessoren har brukt på gjeldende program"],
      explanation: "Programtelleren holder en ADRESSE — hvor den neste instruksjonen ligger — og økes automatisk etter hver henting. Selve instruksjonen ligger i instruksjonsregisteret, og det er den nære distraktoren. Ordet «teller» frister til de to alternativene om antall, men den teller seg fram i minnet, ikke opp.",
    },
    {
      question: "Hva er forskjellen på programtelleren og instruksjonsregisteret?",
      options: ["Programtelleren holder en adresse, instruksjonsregisteret holder en instruksjon", "Programtelleren holder en instruksjon, instruksjonsregisteret holder en adresse", "Programtelleren ligger i RAM, instruksjonsregisteret ligger i prosessoren", "Programtelleren teller klokkeslag, instruksjonsregisteret teller instruksjoner"],
      explanation: "Det ene peker på HVOR neste instruksjon ligger, det andre inneholder HVA som gjøres nå. Alternativet som snur de to er den nære distraktoren og kan ikke elimineres uten å kunne skillet. Begge er registre og ligger derfor inne i prosessoren, og ingen av dem er en teller i vanlig forstand.",
    },
    {
      question: "Hvor mange steg har fetch-execute-syklusen i bokas form?",
      options: ["Fem: hent instruksjon, dekod, hent operander, utfør, lagre", "Fire: hent instruksjon, dekod, utfør, lagre resultatet", "Tre: hent instruksjon, utfør den, lagre resultatet", "Seks: hent, dekod, hent operander, utfør, lagre, tell opp"],
      explanation: "Syklusen har fem steg, og «hent operander» er et eget steg mellom dekoding og utføring. Firetrinnsvarianten slår sammen operandhentingen med utføringen, tretrinnsvarianten dropper dekodingen også, og sekstrinnsvarianten gjør opptellingen av programtelleren til et eget steg. Tallet fem er det som spørres om.",
    },
    {
      question: "I hvilket steg av fetch-execute-syklusen tolkes instruksjonen?",
      options: ["I steg 2, dekodingen, som kontrollenheten står for", "I steg 1, hentingen, som kontrollenheten står for", "I steg 3, operandhentingen, som registrene står for", "I steg 4, utføringen, som ALU-en står for"],
      explanation: "Å tolke instruksjonen er dekodingen, og den er steg 2. Steg 1 henter bare instruksjonen fra minnet uten å forstå den. Steg 3 henter verdiene den skal arbeide på, og steg 4 er der ALU-en endelig gjør operasjonen.",
    },
    {
      question: "En prosessor kjører på 3 GHz. Hvor mange klokkeslag er det per sekund?",
      options: ["3 milliarder klokkeslag per sekund", "3 millioner klokkeslag per sekund", "3 billioner klokkeslag per sekund", "3 tusen klokkeslag per sekund"],
      explanation: "Giga betyr $10^{9}$, altså milliard: $3 \\times 10^{9} = 3\\,000\\,000\\,000$. Million er mega ($10^{6}$), billion er tera ($10^{12}$) og tusen er kilo ($10^{3}$) — de tre gale alternativene er nabo-prefiksene, og å bomme mellom dem er feilkode #12, regnefeil i teoridelen.",
    },
    {
      question: "Betyr 3 GHz at prosessoren utfører 3 milliarder instruksjoner per sekund?",
      options: ["Nei, én instruksjon kan trenge flere klokkeslag å bli ferdig", "Ja, ett klokkeslag svarer alltid til nøyaktig én ferdig instruksjon", "Nei, klokkehastigheten gjelder bussen og ikke prosessorkjernen selv", "Ja, men bare på prosessorer med én kjerne og uten pipelining"],
      explanation: "Klokkehastigheten er takten arbeidet drives fram i, ikke antall ferdige instruksjoner: én instruksjon kan trenge flere slag, og med pipelining er flere underveis samtidig. Påstanden om ett slag per instruksjon er den vanlige misforståelsen. Klokka gjelder prosessorkjernen, og antall kjerner endrer ikke poenget.",
    },
    {
      question: "Hva oppnår pipelining?",
      options: ["Flere instruksjoner er under arbeid samtidig, så flere blir ferdige", "Hver enkelt instruksjon går gjennom de fem stegene på kortere tid enn før", "Instruksjoner som viser seg unødvendige, hoppes over før de blir hentet", "Prosessoren klarer seg med lavere klokkehastighet uten at ytelsen faller"],
      explanation: "Pipelining lar stegene overlappe, slik at gjennomstrømningen øker — som på et samlebånd. At den enkelte instruksjonen blir raskere er den nære distraktoren: veien gjennom stegene er like lang, det er bare flere som går den samtidig. Å hoppe over instruksjoner er grenprediksjon, og klokkehastighet er en uavhengig størrelse.",
    },
    {
      question: "Hva betyr latency?",
      options: ["Ventetiden fra noe bestilles til svaret er der", "Mengden data som kan overføres per sekund", "Antall klokkeslag prosessoren gjør per sekund", "Antall instruksjoner som er underveis samtidig"],
      explanation: "Latency er ventetid, altså svartid. Mengden data per sekund er båndbredde, og de to blandes ofte: en bred forbindelse kan flytte mye og likevel bruke lang tid på det første svaret. Klokkeslag per sekund er klokkehastighet, og instruksjoner underveis samtidig er pipelining.",
    },
    {
      question: "Hva betyr «random access» i «random access memory»?",
      options: ["At tilgangstiden er den samme uansett hvilken adresse som leses", "At innholdet i minnet er tilfeldig helt til noe blir skrevet dit", "At minnet må leses sekvensielt, fra begynnelsen og utover", "At innholdet blir liggende igjen selv når strømmen forsvinner"],
      explanation: "«Random access» sier at enhver adresse er like nær — å hente byte nummer 3 tar like lang tid som byte nummer 3 milliarder. Alternativet om tilfeldig innhold tar ordet i dagligtalens betydning, det om sekvensiell lesing beskriver det motsatte (magnetbånd), og det om strømbrudd er påstanden om ikke-flyktighet, som er gal for RAM.",
    },
    {
      question: "Hvilken av disse lagringstypene er flyktig?",
      options: ["RAM, som mister innholdet når strømmen forsvinner", "SSD, som lagrer i flash-brikker uten bevegelige deler", "Harddisk, som lagrer magnetisk på roterende plater", "ROM, som inneholder maskinens oppstartskode"],
      explanation: "RAM holdes oppe elektrisk og tømmes ved strømbrudd — det er derfor «lagre» finnes som handling. SSD og harddisk er begge sekundærminne og ikke-flyktige, og ROM må nettopp overleve at maskinen er avslått, ellers kunne den ikke startet igjen.",
    },
    {
      question: "Hva er cache?",
      options: ["Et lite, svært raskt minne med kopier av data som nylig er brukt", "Et lite, svært raskt minne som programmet selv legger data i", "Et stort, ikke-flyktig lager for filer som ikke er i bruk nå", "Et stort arbeidsminne som operativsystemet deler ut til programmene"],
      explanation: "Cachen ligger mellom registrene og RAM og fylles AUTOMATISK av maskinvaren med kopier av nylig brukte data. Alternativet der programmet selv legger data i den er den nære distraktoren — programmet vet ikke engang at cachen finnes. De to store alternativene beskriver sekundærminne og RAM.",
    },
    {
      question: "Hva er rekkefølgen i minnehierarkiet fra raskest til tregest?",
      options: ["Register, cache, RAM, SSD", "Cache, register, RAM, SSD", "Register, RAM, cache, SSD", "RAM, register, cache, SSD"],
      explanation: "Hierarkiet går innenfra og ut: registrene ligger der regningen skjer, cachen på prosessorbrikken, RAM på hovedkortet og SSD som sekundærminne. Rekkefølgen som setter cache først overser at ingenting er nærmere enn registrene, og de to som flytter RAM foran cachen overser at cachen finnes nettopp for å slippe turen til RAM.",
    },
    {
      question: "Hva skiller en SSD fra en harddisk?",
      options: ["SSD-en lagrer i flash-brikker, harddisken magnetisk på roterende plater", "SSD-en er flyktig, mens harddisken beholder innholdet uten strøm", "SSD-en hører til primærminnet, mens harddisken hører til sekundærminnet", "SSD-en leses direkte av prosessoren, mens harddisken går via minnet"],
      explanation: "Forskjellen er teknologien; farten, prisen og støtsikkerheten følger av den. Begge er ikke-flyktige, så påstanden om at SSD-en er flyktig er gal — den bygger på at «brikke» får en til å tenke RAM. Begge er også sekundærminne, og ingen av dem leses direkte av prosessoren.",
    },
    {
      question: "Hvorfor må et program ligge i RAM for å kjøre?",
      options: ["Fordi prosessoren bare når primærminnet direkte gjennom bussen", "Fordi RAM er det eneste minnet som er stort nok til et program", "Fordi RAM er ikke-flyktig og derfor beholder programmet trygt", "Fordi operativsystemet ikke kan lese filer fra sekundærminnet"],
      explanation: "Prosessoren når primærminnet direkte, mens sekundærminnet må hentes via operativsystemet — derfor er «å starte et program» i praksis å kopiere det fra disk til RAM. Disken er større enn RAM, ikke mindre; RAM er flyktig, ikke ikke-flyktig; og operativsystemet leser selvsagt filer fra disk.",
    },
  ],
  'tdt4110-8-2': [
    {
      question: "Hvor mange ulike symboler kan representeres med 6 bit?",
      options: ["64 symboler", "36 symboler", "12 symboler", "128 symboler"],
      explanation: "$2^{6} = 64$. Svaret 12 kommer av å regne $6 \\times 2$, svaret 36 av å regne $6^{2}$ med grunntall og eksponent byttet om, og 128 er $2^{7}$ — én potens for langt. Skriv rekka 2, 4, 8, 16, 32, 64 og tell posisjonene.",
    },
    {
      question: "Hvor mange bit trengs som et minimum for å kode 300 ulike symboler?",
      options: ["9 bit, siden $2^{9} = 512$", "8 bit, siden $2^{8} = 256$", "10 bit, siden $2^{10} = 1024$", "300 bit, ett per symbol"],
      explanation: "Svaret er den minste potensen som er STOR NOK, ikke den nærmeste: 256 rekker ikke til 300, så 9 bit er riktig. Alternativet med 8 bit velger nærmeste og bommer. Ti bit holder også, men er ikke minimum, og ett bit per symbol misforstår hele $2^{n}$-regelen.",
    },
    {
      question: "Hvor mange bit er én byte?",
      options: ["8 bit", "4 bit", "16 bit", "1 024 bit"],
      explanation: "Én byte er 8 bit og gir $2^{8} = 256$ verdier. Fire bit er en halv byte, en nibble, altså nøyaktig ett hex-siffer. Seksten bit er to byte. Tallet 1 024 er $2^{10}$ og hører til prefikset kilo i binær betydning, ikke til byten selv.",
    },
    {
      question: "Hva er $110101_{2}$ i desimaltall?",
      options: ["53", "43", "61", "106"],
      explanation: "Plassverdiene fra høyre er 1, 2, 4, 8, 16, 32, og summen av dem der bitet er 1 blir $32 + 16 + 4 + 1 = 53$. Svaret 43 forskyver bitene én plass, 61 tar med åtteren som står på en nullplass, og 106 er det dobbelte fordi plassverdiene begynner på 2 i stedet for 1 helt til høyre.",
    },
    {
      question: "Hva er $10110110_{2}$ i desimaltall?",
      options: ["182", "178", "190", "166"],
      explanation: "$128 + 32 + 16 + 4 + 2 = 182$. Svaret 178 har mistet firertallet i addisjonen, 190 har tatt med åtteren som står på en nullplass, og 166 har droppet sekstentallet. Kontrollen er at 8 bit aldri kan gi mer enn 255.",
    },
    {
      question: "Hva er $200_{10}$ i binært?",
      options: ["$11001000$", "$10011000$", "$11000100$", "$11001010$"],
      explanation: "$200 = 128 + 64 + 8$, altså $11001000$. De tre andre gir henholdsvis 152, 196 og 202 — alle nære, og ingen av dem kan skilles fra fasiten ved å telle enere. Kontroller alltid ved å legge sammen plassverdiene du satte.",
    },
    {
      question: "Ved metoden «del gjentatte ganger på 2», hvilken vei skal restene leses?",
      options: ["Nedenfra og opp, altså siste rest først", "Ovenfra og ned, altså første rest først", "Fra midten og utover mot begge ender", "Restene skal legges sammen, ikke leses"],
      explanation: "Den siste resten er det mest signifikante bitet, så rekka leses nedenfra og opp. Å lese ovenfra og ned gir tallet speilvendt og er den vanligste feilen ved metoden. Å lese fra midten og å legge restene sammen er operasjoner som ikke inngår i metoden i det hele tatt.",
    },
    {
      question: "Hvilken bokstav i heksadesimalt svarer til desimaltallet 11?",
      options: ["B", "A", "C", "E"],
      explanation: "Etter 9 fortsetter hex med A $=10$, B $=11$, C $=12$, D $=13$, E $=14$ og F $=15$. A er altså ett for lite og C ett for mye — de to nære distraktorene. E er 14.",
    },
    {
      question: "Hvor mange bit svarer ett heksadesimalt siffer til?",
      options: ["4 bit, fordi $2^{4} = 16$", "8 bit, fordi én byte er 16 verdier", "2 bit, fordi hex er dobbelt av binært", "16 bit, ett per mulig verdi"],
      explanation: "Hex har 16 sifre, og $2^{4} = 16$, så ett hex-siffer er nøyaktig fire bit — en nibble. Det er grunnen til at en byte alltid blir to hex-sifre. De tre andre blander sammen antall verdier med antall bit.",
    },
    {
      question: "Når du konverterer et binærtall til heksadesimalt, hvilken vei skal du gruppere bitene?",
      options: ["I grupper på fire fra høyre", "I grupper på fire fra venstre", "I grupper på åtte fra høyre", "I grupper på tre fra venstre"],
      explanation: "Grupperingen skjer fra høyre, og eventuelle nuller fylles på foran. Grupperer du fra venstre, blir svaret galt så snart antall bit ikke er delelig med fire: $110101$ gir da D1 i stedet for det riktige 35. Åtte bit er en byte og altså to hex-sifre, og tre bit hører til oktalt.",
    },
    {
      question: "Hva er $10101101_{2}$ i heksadesimalt?",
      options: ["$AD$", "$DA$", "$AB$", "$BD$"],
      explanation: "Gruppene fra høyre er 1010 og 1101, altså 10 og 13, som er A og D. Svaret DA har snudd nibblene — den vanligste fella. AB og BD leser den ene gruppen feil; kontroller ved å regne tilbake: $A \\times 16 + D = 160 + 13 = 173$.",
    },
    {
      question: "Hva er $2F_{16}$ i desimaltall?",
      options: ["47", "39", "17", "62"],
      explanation: "$2 \\times 16 + 15 = 47$. Svaret 39 leser F som 7 i stedet for 15, svaret 17 legger bare sammen $2 + 15$ uten å gange toeren med 16, og 62 ganger hele tallet med 2. Kontroller via binært: $00101111$ gir $32+8+4+2+1 = 47$.",
    },
    {
      question: "Hva blir $1011_{2} + 0110_{2}$?",
      options: ["$10001$", "$1101$", "$10011$", "$1111$"],
      explanation: "I desimaltall er dette $11 + 6 = 17$, og $10001_{2} = 16 + 1 = 17$. Svaret 1101 er 13 og kommer av å glemme menten, 10011 er 19 og har én mente for mye, og 1111 er 15. Sjekk alltid summen i desimaltall etterpå.",
    },
    {
      question: "Hvordan lager du toer-komplementet av et negativt tall?",
      options: ["Skriv tallverdien, inverter alle bit, legg til 1", "Skriv tallverdien, legg til 1, inverter alle bit", "Skriv tallverdien og sett det venstre bitet til 1", "Skriv tallverdien og speilvend hele bitrekka"],
      explanation: "Rekkefølgen er inverter først, legg til 1 etterpå. Å bytte om de to stegene gir feil svar for alle tall unntatt noen få. Bare å sette fortegnsbitet til 1 er den eldre formen fortegn-og-tallverdi, ikke toer-komplement, og speilvending er ikke en operasjon som inngår.",
    },
    {
      question: "Hvilket 8-bits bitmønster er $-5$ i toer-komplement?",
      options: ["$11111011$", "$11111010$", "$10000101$", "$00000101$"],
      explanation: "5 er $00000101$, invertert blir det $11111010$, og pluss 1 gir $11111011$. Mønsteret $11111010$ har glemt det siste steget — den hyppigste feilen. Mønsteret $10000101$ er fortegn-og-tallverdi, og $00000101$ er $+5$.",
    },
    {
      question: "Hvilket tall er $11110001$ tolket som 8-bits fortegnet heltall i toer-komplement?",
      options: ["$-15$", "$-14$", "$-113$", "$241$"],
      explanation: "Fortegnsbitet er 1, så inverter til $00001110$ og legg til 1, som gir 15 — altså $-15$. Svaret $-14$ har glemt «pluss 1». Svaret $-113$ leser de sju siste bitene som tallverdi, altså fortegn-og-tallverdi. Svaret 241 er den fortegnsløse tolkningen av samme mønster.",
    },
    {
      question: "Hvilket tallområde dekker 8 bit tolket som fortegnet heltall?",
      options: ["$-128$ til $127$", "$-127$ til $127$", "$-128$ til $128$", "$0$ til $255$"],
      explanation: "Området er asymmetrisk fordi null tar en av plassene på den positive siden: $-2^{7}$ til $2^{7}-1$. Både $-127$ til 127 og $-128$ til 128 er symmetriske og derfor gale — det er de to nære distraktorene. Området 0 til 255 er den fortegnsløse tolkningen.",
    },
    {
      question: "Hvilke tre felt består et flyttall av?",
      options: ["Fortegn, eksponent og mantisse", "Fortegn, heltallsdel og desimaldel", "Grunntall, eksponent og mantisse", "Fortegn, eksponent og grunntall"],
      explanation: "Feltene er fortegn, eksponent og mantisse — samme idé som standardform i matematikken. Heltallsdel og desimaldel er ikke felt i representasjonen. Grunntallet er ikke lagret i tallet; det er fast for formatet, så begge alternativene med grunntall er gale.",
    },
    {
      question: "Hvorfor gir $0{,}1 + 0{,}2$ ikke nøyaktig $0{,}3$ i en datamaskin?",
      options: ["De fleste desimaltall kan ikke skrives eksakt binært", "Datamaskiner runder alltid av til nærmeste hele tall", "Addisjon av flyttall gjøres alltid i heltallsaritmetikk", "Mantissen kan bare holde positive verdier i formatet"],
      explanation: "Flyttall er tilnærminger: $0{,}1$ kan ikke skrives med endelig mange binære sifre, like lite som en tredel kan skrives med endelig mange desimaler. De tre andre påstandene beskriver mekanismer som ikke finnes — flyttall rundes ikke til hele tall, addisjonen er ikke heltallsaritmetikk, og mantissen har intet fortegnsproblem.",
    },
    {
      question: "Hvor mange tegn dekker utvidet ASCII (ISO-8859-1)?",
      options: ["256 tegn", "128 tegn", "255 tegn", "65 536 tegn"],
      explanation: "Utvidet ASCII bruker 8 bit, og $2^{8} = 256$. Svaret 128 er den opprinnelige 7-bits ASCII-tabellen uten norske bokstaver. Svaret 255 er høyeste VERDI og ikke antall tegn — en av-med-én-felle. Svaret 65 536 er $2^{16}$.",
    },
    {
      question: "Hvilken påstand om Unicode er riktig?",
      options: ["Antall byte per tegn varierer, fra 1 til 4 i UTF-8", "Alle tegn lagres med nøyaktig 16 bit i Unicode", "Alle tegn lagres med nøyaktig 8 bit, som i ASCII", "Unicode dekker bare de vesteuropeiske skriftsystemene"],
      explanation: "Unicode har ingen fast bredde: i UTF-8 tar ASCII-tegn 1 byte, norske bokstaver 2 og emoji opptil 4. Påstanden om 16 bit gjelder lagringsformen UTF-16 for en DEL av tegnene og er den nære distraktoren. Åtte bit ville gitt 256 plasser, og Unicode dekker alle verdens skriftsystemer, ikke bare de vesteuropeiske.",
    },
    {
      question: "En tekst på 1 000 tegn lagres i ISO-8859-1. Hvor stor blir fila?",
      options: ["1 000 byte, siden hvert tegn tar én byte", "500 byte, siden to tegn deler én byte", "2 000 byte, siden hvert tegn tar to byte", "8 000 byte, siden hvert tegn tar åtte byte"],
      explanation: "ISO-8859-1 bruker nøyaktig én byte per tegn uansett hvilket tegn det er — det er hele poenget med kodingen. To tegn per byte finnes ikke. To byte per tegn er UTF-16, og 8 000 forveksler bit med byte: 1 000 tegn er 8 000 BIT.",
    },
    {
      question: "Hvor mange byte trengs til et ukomprimert bilde på $100 \\times 50$ piksler med 24 bit per piksel?",
      options: ["15 000 byte", "120 000 byte", "5 000 byte", "1 875 byte"],
      explanation: "$100 \\times 50 = 5\\,000$ piksler, ganget med 3 byte per piksel gir $15\\,000$ byte. Svaret 120 000 er resultatet i BIT — den glemte divisjonen på 8, altså feilkode #12. Svaret 5 000 er bare antall piksler, og 1 875 har delt på 8 to ganger.",
    },
    {
      question: "Hva er den vanligste regnefeilen i oppgaver om bildestørrelse?",
      options: ["Å glemme å dele på 8 og svare i bit", "Å glemme å gange bredde med høyde", "Å bruke 8 bit per piksel i stedet for 24", "Å gange med 8 i stedet for å dele på 8"],
      explanation: "Divisjonen på 8 er steget som faller ut oftest, og svaret blir da åtte ganger for stort. De tre andre feilene forekommer, men er sjeldnere, og de gir svar som er lettere å oppdage — en glemt høyde gir et påfallende lite tall.",
    },
    {
      question: "Hva beskriver webfargekoden `#FF8000`?",
      options: ["Full rød, halv grønn og ingen blå", "Full grønn, halv rød og ingen blå", "Full blå, halv grønn og ingen rød", "Full rød, full grønn og halv blå"],
      explanation: "Parene leses som RR, GG, BB: `FF` er 255 rød, `80` er 128 grønn og `00` er 0 blå — altså oransje. De tre andre bytter om på hvilket par som hører til hvilken kanal, eller leser `00` som en verdi.",
    },
    {
      question: "Hva er forskjellen på RGB og CMYK?",
      options: ["RGB er additiv for skjerm, CMYK er subtraktiv for trykk", "RGB er subtraktiv for trykk, CMYK er additiv for skjerm", "RGB brukes til fotografi, CMYK brukes til video", "RGB har fire kanaler, CMYK har tre kanaler"],
      explanation: "RGB legger sammen lys på en skjerm, mens CMYK trekker fra det lyset papiret reflekterer. Det omvendte alternativet er den nære distraktoren. Skillet går ikke mellom foto og video, og kanaltallene er motsatt: RGB har tre, CMYK har fire.",
    },
    {
      question: "Hva er forskjellen på kilobyte i desimal og i binær betydning?",
      options: ["1 000 byte mot 1 024 byte", "1 000 byte mot 1 000 000 byte", "1 024 byte mot 2 048 byte", "1 000 bit mot 1 000 byte"],
      explanation: "Desimalt er kilo $10^{3} = 1\\,000$; binært er kibi $2^{10} = 1\\,024$. Diskprodusenter bruker den første, mange operativsystemer den andre, og det er derfor en «500 GB»-disk vises som mindre. De tre andre alternativene sammenligner andre prefikser eller blander bit med byte.",
    },
    {
      question: "Hva er metadata?",
      options: ["Opplysninger om fila, ikke selve innholdet i den", "Den komprimerte delen av fila, lagret helt til slutt", "Sikkerhetskopien av fila, lagret sammen med originalen", "Den delen av fila som operativsystemet ikke får lese"],
      explanation: "Metadata er data om dataene: oppløsning, tegnkoding, dato, filnavn. Det er grunnen til at en bildefil er litt større enn pikselregnestykket tilsier. De tre andre beskriver komprimering, sikkerhetskopiering og tilgangsstyring — tre andre ting.",
    },
  ],
  'tdt4110-8-3': [
    {
      question: "Hva er en protokoll i nettverkssammenheng?",
      options: ["Et sett regler for hvordan to parter skal kommunisere", "Et program som styrer nettverkskortet i en maskin", "En fysisk kabel mellom to maskiner i et nettverk", "En adresse som peker ut én bestemt maskin på nettet"],
      explanation: "En protokoll er et avtaleverk, ikke en fysisk ting: begge parter må følge samme regler, men kan bruke helt ulike maskiner og programmer. Programmet som styrer kortet er en driver, kabelen er maskinvare på nederste lag, og adressen som peker ut en maskin er IP-adressen.",
    },
    {
      question: "Hvor mange lag har TCP/IP-modellen?",
      options: ["Fire lag", "Fem lag", "Sju lag", "Tre lag"],
      explanation: "TCP/IP har fire lag: applikasjon, transport, internett og nettverksgrensesnitt. Sju lag er OSI-modellen, som er en annen og eldre inndeling av det samme. Fem og tre er tall som ikke svarer til noen av de to modellene.",
    },
    {
      question: "Hvilket lag i TCP/IP-stakken bruker IP-adresser til å finne veien mellom nett?",
      options: ["Internettlaget", "Transportlaget", "Applikasjonslaget", "Lenkelaget"],
      explanation: "Ruting mellom nett skjer på IP-adresser, og det er internettlagets definisjon. Transportlaget deler opp og setter sammen igjen, men ruter ikke. Applikasjonslaget kjenner ikke til nett i det hele tatt, og lenkelaget flytter data bare innenfor ett lokalt nett.",
    },
    {
      question: "Hvilket lag hører TCP hjemme på?",
      options: ["Transportlaget", "Internettlaget", "Applikasjonslaget", "Lenkelaget"],
      explanation: "TCP sørger for at hele meldingen kommer fram i riktig rekkefølge, med sekvensnumre og kvitteringer — det er transportlagets jobb. IP ligger på internettlaget, HTTP på applikasjonslaget og Ethernet på lenkelaget.",
    },
    {
      question: "Hva er forskjellen på TCP og UDP?",
      options: ["TCP bekrefter og sender på nytt, UDP sender uten å bekrefte", "TCP sender uten å bekrefte, UDP bekrefter og sender på nytt", "TCP brukes til lokale nett, UDP brukes mellom ulike nett", "TCP er en protokoll, mens UDP bare er en adresseringsform"],
      explanation: "TCP er pålitelig og bruker kvitteringer og retransmisjon; UDP er rask og bekrefter ingenting, noe som passer til direktesendt lyd og video. Alternativet som snur de to er den nære distraktoren. Begge er transportprotokoller og gjelder på tvers av nett.",
    },
    {
      question: "Hva består en nettverkspakke av?",
      options: ["Et hode med adresser og styreinformasjon, og en nyttelast med data", "En nyttelast med data, og en sjekksum som erstatter adressene", "En rekke sekvensnumre som til sammen utgjør hele meldingen", "En fast del på 1 024 byte som alltid er like stor uansett innhold"],
      explanation: "Pakken har et hode med avsender, mottaker og sekvensnummer, og en nyttelast med selve databiten. Sjekksummen ligger i hodet og erstatter ikke adressene. Sekvensnumre er ett felt i hodet, ikke hele pakken, og pakkestørrelsen varierer.",
    },
    {
      question: "Hva kjennetegner pakkesvitsjing?",
      options: ["Meldingen deles i pakker som rutes hver for seg i et delt nett", "Forbindelsen reserveres for de to partene til samtalen er over", "Alle pakker tar samme vei, så forsinkelsen blir helt jevn", "Oppkoblingen må fullføres før den første pakken kan sendes"],
      explanation: "Pakkesvitsjing sender pakkene uavhengig gjennom et nett som deles med annen trafikk — det er slik internett virker. De tre andre beskriver alle linjesvitsjing: reservert forbindelse, jevn forsinkelse og oppkobling først.",
    },
    {
      question: "Hva er den viktigste ULEMPEN med linjesvitsjing?",
      options: ["Linja er reservert også når ingen sender noe", "Forsinkelsen varierer kraftig fra pakke til pakke", "Pakkene kan komme fram i en annen rekkefølge", "Det kreves sekvensnumre for å sette meldingen sammen"],
      explanation: "En reservert linje sløser kapasitet i pausene, og det er byttet man gjør for forutsigbarheten. De tre andre er ulemper ved PAKKEsvitsjing: varierende forsinkelse, feil rekkefølge og behovet for sekvensnumre.",
    },
    {
      question: "Hvor mange bit er en IPv4-adresse?",
      options: ["32 bit", "64 bit", "128 bit", "48 bit"],
      explanation: "IPv4 er fire tall fra 0 til 255, altså fire byte og 32 bit, som gir rundt 4,3 milliarder adresser. Svaret 128 er IPv6, og det er den faste forvekslingen. Svaret 48 er MAC-adressen, og 64 er ingen av delene.",
    },
    {
      question: "Hvor mange bit er en IPv6-adresse?",
      options: ["128 bit", "32 bit", "64 bit", "256 bit"],
      explanation: "IPv6 skrives som åtte grupper à fire hex-sifre, og $8 \\times 4 \\times 4 = 128$ bit. Svaret 32 er IPv4 og er den nære distraktoren. Svarene 64 og 256 er toerpotenser rundt riktig svar, lagt inn for å hindre gjetting på størrelse.",
    },
    {
      question: "Hvor mange adresser rommer et nett oppgitt som `/26`?",
      options: ["64 adresser", "26 adresser", "32 adresser", "256 adresser"],
      explanation: "Maskindelen er $32 - 26 = 6$ bit, og $2^{6} = 64$. Svaret 26 tolker skråstrektallet som en mengde i stedet for en tellemåte. Svaret 32 er $2^{5}$, altså en av-med-én-feil, og 256 er svaret for et `/24`-nett, som er det man husker best.",
    },
    {
      question: "Hvor mange bit er en MAC-adresse?",
      options: ["48 bit", "32 bit", "64 bit", "128 bit"],
      explanation: "En MAC-adresse skrives som seks par hex-sifre, altså 12 hex-sifre à 4 bit, som gir 48 bit. Svaret 32 er IPv4-adressen og 128 er IPv6-adressen — begge er IP-adresser, ikke MAC. Svaret 64 er ingen av de tre.",
    },
    {
      question: "Hva skiller en MAC-adresse fra en IP-adresse?",
      options: ["MAC-adressen er fast i maskinvaren, IP-adressen følger nettet", "MAC-adressen tildeles av internettleverandøren ved oppkobling", "MAC-adressen brukes til ruting mellom nett, IP-adressen lokalt", "MAC-adressen er logisk, mens IP-adressen ligger i nettverkskortet"],
      explanation: "MAC-adressen ligger i nettverkskortet og endres ikke; IP-adressen får du av nettet du kobler deg til. De tre andre bygger på samme forveksling: det er IP-adressen som tildeles av leverandøren, som rutes mellom nett, og som er den logiske av de to.",
    },
    {
      question: "Hva betyr multicast?",
      options: ["Sending til en bestemt gruppe som har meldt seg på", "Sending til alle maskinene som finnes på nettet", "Sending til én bestemt mottaker som er navngitt", "Sending som gjentas til den blir bekreftet av mottakeren"],
      explanation: "Multicast går til en påmeldt gruppe, og det er nettopp det som skiller den fra broadcast, som går til alle. Sending til én mottaker er unicast, og gjentatt sending til bekreftelse er retransmisjon — et helt annet begrep.",
    },
    {
      question: "Hva er kanalkoding?",
      options: ["Å legge til ekstra bit så feil kan oppdages eller rettes", "Å kryptere innholdet så uvedkommende ikke kan lese det", "Å komprimere dataene så de tar mindre plass på linja", "Å dele meldingen i pakker med hvert sitt sekvensnummer"],
      explanation: "Kanalkoding er redundans lagt til for å håndtere støy; de ekstra bitene bærer ingen ny informasjon. Kryptering handler om hemmelighold, komprimering om plass, og oppdeling i pakker om transport — tre andre formål.",
    },
    {
      question: "Hva kan en enkel paritetsbit (SPC) gjøre?",
      options: ["Oppdage et oddetall av feil bit i blokken", "Rette ett feil bit i blokken automatisk", "Oppdage og rette opptil to feil bit samtidig", "Hindre at feil bit i det hele tatt oppstår"],
      explanation: "Paritetsbitet gjør antall enere til et bestemt partall eller oddetall, så mottakeren kan telle og se at noe er galt — men bare ved et oddetall av feil, og den kan ikke rette. Å rette krever en feilrettende kode som Hamming, og kanalkoding hindrer ikke at støy oppstår.",
    },
    {
      question: "Hvilken kode kan RETTE et feil bit og ikke bare oppdage det?",
      options: ["Hamming-kode", "Paritetsbit (SPC)", "CRC (syklisk sjekksum)", "Enkel sjekksum"],
      explanation: "Hamming bruker flere paritetsbit over overlappende delmengder, slik at mønsteret av feilslag peker ut hvilket bit som er galt — og da kan det snus. De tre andre oppdager at noe er galt, men ikke hvor, så mottakeren må be om ny sending.",
    },
    {
      question: "Hva er CRC særlig god til å oppdage?",
      options: ["Feilserier der flere bit på rad blir forvrengt", "Enkeltfeil, men bare når de er helt alene i blokken", "Feil som oppstår etter at pakken er levert til programmet", "Feil i sekvensnumrene som gjør rekkefølgen gal"],
      explanation: "CRC regnes ut med polynomdivisjon og fanger opp feilserier, som er det støy faktisk gir i praksis — en enkel paritetsbit ville sluppet halvparten av dem gjennom. CRC er ikke begrenset til enkeltfeil, den gjelder under overføringen, og den kontrollerer dataene og ikke rekkefølgen.",
    },
    {
      question: "Hva løser sekvensnumrene i en pakkesvitsjet overføring?",
      options: ["Rekkefølge, tap og duplikater i én og samme mekanisme", "Kryptering av innholdet mellom avsender og mottaker", "Valg av korteste vei gjennom nettet for hver pakke", "Fordelingen av båndbredde mellom flere samtidige brukere"],
      explanation: "Nummereringen lar mottakeren sortere, se hva som mangler og kaste kopier. Kryptering hører til sikkerhet, valg av vei er ruting på internettlaget, og fordeling av båndbredde er en helt annen mekanisme.",
    },
    {
      question: "Hva skjer når avsenderen ikke får ACK innen tiden?",
      options: ["Pakken sendes på nytt, siden avsenderen ikke vet hva som gikk galt", "Forbindelsen brytes helt, siden mottakeren regnes som utilgjengelig", "Neste pakke sendes i stedet, og den tapte hoppes over", "Mottakeren varsles om at kvitteringen er forsinket underveis"],
      explanation: "Avsenderen kan ikke skille «pakken forsvant på vei ut» fra «ACK-en forsvant på vei tilbake», så den retransmitterer. Forbindelsen brytes ikke ved én manglende kvittering, tapte pakker hoppes ikke over i TCP, og avsenderen kan ikke varsle en mottaker den ikke hører fra.",
    },
    {
      question: "Hva er flytkontroll?",
      options: ["Å hindre at avsenderen sender fortere enn mottakeren orker", "Å hindre at pakker blir forvrengt av støy på forbindelsen", "Å sørge for at pakkene tar den korteste veien gjennom nettet", "Å sørge for at pakkene settes sammen i riktig rekkefølge"],
      explanation: "Flytkontroll handler om fart og bufferplass, ikke om feil. Å hindre forvrengning er kanalkoding, korteste vei er ruting, og riktig rekkefølge er sekvensering. De fire blandes lett fordi alle fire er transportmekanismer.",
    },
    {
      question: "Hva er forskjellen på stop-and-go og sliding window?",
      options: ["Stop-and-go venter på ACK etter hver pakke, sliding window sender flere først", "Stop-and-go sender flere pakker av gårde først, sliding window venter etter hver", "Stop-and-go retter feil, mens sliding window bare oppdager dem", "Stop-and-go krever sekvensnumre, mens sliding window klarer seg uten"],
      explanation: "Navnene sier det: stop-and-go stopper og går, én pakke om gangen, mens et vindu rommer flere ubekreftede pakker samtidig. Alternativet som snur de to er den nære distraktoren. Begge er flytkontroll og ikke feilretting, og det er sliding window som trenger sekvensnumre mest.",
    },
    {
      question: "Hvorfor utnytter sliding window en satellittforbindelse bedre enn stop-and-go?",
      options: ["Flere pakker er underveis mens avsenderen venter på kvittering", "Hver pakke gjøres mindre, så den kommer raskere fram til mottakeren", "Kvitteringene droppes helt, så det blir ingen ventetid i det hele tatt", "Pakkene sendes i motsatt rekkefølge og settes sammen ved mottak"],
      explanation: "Med lang rundetid står forbindelsen tom mens stop-and-go venter; sliding window fyller ventetiden med flere pakker. Vinduet endrer ikke pakkestørrelsen, kvitteringene droppes ikke, og rekkefølgen snus ikke.",
    },
    {
      question: "Hvorfor kan mottakeren få den samme pakken to ganger?",
      options: ["Fordi pakken kom fram, men kvitteringen forsvant på vei tilbake", "Fordi avsenderen tildelte sekvensnumrene i gal rekkefølge", "Fordi mottakerens buffer ble fullt og pakken måtte gjentas", "Fordi paritetsbitet slo feil og pakken ble regnet som ødelagt"],
      explanation: "Dette er en replay error: fra avsenderens side ser en tapt pakke og en tapt kvittering helt likt ut, så pakken retransmitteres, og mottakeren får den for andre gang. Sekvensnumrene lar mottakeren kaste kopien. De tre andre gir tap eller forkasting, ikke duplikat.",
    },
    {
      question: "Hva er jitter?",
      options: ["Variasjonen i forsinkelse fra pakke til pakke", "Den gjennomsnittlige forsinkelsen fram til mottakeren", "Andelen pakker som forsvinner helt underveis i nettet", "Antall pakker som kan være ubekreftet på samme tid"],
      explanation: "Jitter er hvor mye forsinkelsen svinger, og det er derfor direktesendt lyd og video hakker selv når gjennomsnittet er lavt. Gjennomsnittlig forsinkelse er latency, andelen tapte pakker er pakketap, og antall ubekreftede pakker er vindusstørrelsen.",
    },
    {
      question: "Hva er buffer overflow i nettverkssammenheng?",
      options: ["Mottakerens mellomlager fylles opp, og resten kastes", "Avsenderen går tom for pakker å sende i vinduet sitt", "Sekvensnumrene når høyeste verdi og begynner på null", "En pakke blir større enn det forbindelsen tillater i ett stykke"],
      explanation: "Bufferet renner over når data kommer inn fortere enn de behandles, og det er nettopp dette flytkontroll skal hindre. De tre andre beskriver reelle fenomener — tomt vindu, nummeromslag og fragmentering — men ikke buffer overflow.",
    },
    {
      question: "Hva gjør en ISP?",
      options: ["Gir deg forbindelse, tildeler IP-adresse og ruter trafikken din", "Eier hele internett og styrer all trafikken som går gjennom det", "Tildeler MAC-adressen til nettverkskortet ditt ved oppkobling", "Krypterer all trafikken din før den sendes ut på internett"],
      explanation: "En internettleverandør kobler deg til, gir deg en IP-adresse og sender trafikken din videre gjennom sitt nett. Ingen eier hele internett; det er et nett av nett. MAC-adressen kommer fra fabrikken, og kryptering er ikke en ISP-tjeneste.",
    },
  ],
  'tdt4110-8-4': [
    {
      question: "Hvilke tre mål utgjør informasjonssikkerhet?",
      options: ["Konfidensialitet, integritet og tilgjengelighet", "Konfidensialitet, autentisering og tilgjengelighet", "Kryptering, autorisasjon og tilgjengelighet", "Integritet, autentisering og anonymisering"],
      explanation: "De tre målene er konfidensialitet, integritet og tilgjengelighet. Autentisering, autorisasjon og kryptering er MEKANISMER man bruker for å nå målene, ikke mål i seg selv — og det er nettopp den forvekslingen de tre andre alternativene tester.",
    },
    {
      question: "Hvilket sikkerhetsmål brytes av et tjenestenektangrep?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Autentisering"],
      explanation: "Angrepet gjør tjenesten utilgjengelig; ingen data leses eller endres. Konfidensialitet brytes av avlytting, integritet av endring, og autentisering er ikke ett av de tre målene i det hele tatt.",
    },
    {
      question: "Hva er forskjellen på autentisering og autorisasjon?",
      options: ["Autentisering er hvem du er, autorisasjon er hva du har lov til", "Autentisering er hva du har lov til, autorisasjon er hvem du er", "Autentisering gjelder personer, autorisasjon gjelder bare maskiner", "Autentisering krypterer passordet, autorisasjon hasher det etterpå"],
      explanation: "Du autentiserer deg for å bevise identitet, og systemet sjekker autorisasjonen din for hver handling. Alternativet som snur de to er den nære distraktoren. Begge gjelder både personer og maskiner, og ingen av dem er en krypteringsoperasjon.",
    },
    {
      question: "Hva kjennetegner tofaktorautentisering?",
      options: ["Bevis fra to ulike grupper, for eksempel passord og mobil", "To passord som må skrives inn rett etter hverandre", "To brukere som må godkjenne den samme innloggingen", "To krypteringsnøkler som begge må passe til hverandre"],
      explanation: "Faktorene skal komme fra ULIKE grupper: noe du vet, noe du har, noe du er. To passord er to ganger «noe du vet» og gir derfor lite ekstra. To brukere er firehåndsprinsippet, og to nøkler beskriver asymmetrisk kryptering.",
    },
    {
      question: "Hva er hemmelig i et krypteringssystem?",
      options: ["Nøkkelen, mens algoritmen som regel er offentlig kjent", "Algoritmen, mens nøkkelen som regel er offentlig kjent", "Både nøkkelen og algoritmen, som aldri offentliggjøres", "Verken nøkkelen eller algoritmen, bare selve chifferteksten"],
      explanation: "Det er nøkkelen som er hemmeligheten; algoritmen er gransket av mange, og en algoritme som er avhengig av å være ukjent regnes som svak. Alternativet som snur de to er den nære distraktoren, og de to siste beskriver systemer som ikke ville fungert i praksis.",
    },
    {
      question: "Hva kjennetegner symmetrisk kryptering?",
      options: ["Samme nøkkel krypterer og dekrypterer, og den er rask", "Et nøkkelpar krypterer og dekrypterer, og den er rask", "Samme nøkkel krypterer og dekrypterer, og den er treg", "Et nøkkelpar krypterer og dekrypterer, og den er treg"],
      explanation: "Symmetrisk betyr lik på begge sider — én nøkkel — og den er den raske av de to. Alternativene med nøkkelpar beskriver asymmetrisk kryptering, som dessuten er den trege. Alle fire kombinasjonene av de to valgene er med, så begge deler må sitte.",
    },
    {
      question: "Hvilken nøkkel bruker du til å kryptere en melding til en mottaker?",
      options: ["Mottakerens offentlige nøkkel", "Mottakerens private nøkkel", "Avsenderens private nøkkel", "Avsenderens offentlige nøkkel"],
      explanation: "Du krypterer med mottakerens offentlige nøkkel, og bare mottakeren kan dekryptere med sin private. Avsenderens private nøkkel er riktig svar på spørsmålet om SIGNERING, og det er den farligste distraktoren. Mottakerens private nøkkel har du ikke, og avsenderens offentlige kan ingen dekryptere med.",
    },
    {
      question: "Hvilken nøkkel bruker avsenderen til å signere en melding digitalt?",
      options: ["Avsenderens private nøkkel", "Avsenderens offentlige nøkkel", "Mottakerens offentlige nøkkel", "Mottakerens private nøkkel"],
      explanation: "Signaturen lages med avsenderens private nøkkel, og alle kan kontrollere den med avsenderens offentlige. Avsenderens offentlige nøkkel brukes til å KONTROLLERE, ikke til å lage. Mottakerens offentlige nøkkel hører til kryptering, og mottakerens private har ingen andre.",
    },
    {
      question: "Hvorfor brukes symmetrisk og asymmetrisk kryptering ofte sammen?",
      options: ["Asymmetrisk er treg, men løser nøkkelutvekslingen", "Symmetrisk er treg, men løser nøkkelutvekslingen", "Asymmetrisk virker bare på meldinger under 100 tegn", "Symmetrisk krever nettilgang for å kunne dekryptere"],
      explanation: "Asymmetrisk kryptering brukes til å avtale en symmetrisk nøkkel, og den symmetriske til selve datastrømmen — fordi den er rask. Alternativet som snur farten er den nære distraktoren, og de to siste finner på grenser som ikke finnes.",
    },
    {
      question: "Hva er sant om en hashfunksjon?",
      options: ["Den er enveis og kan ikke regnes tilbake til dataene", "Den kan dekrypteres tilbake til dataene med riktig nøkkel", "Den gir en verdi som er like lang som dataene som gikk inn", "Den gir nesten samme verdi når ett tegn i dataene endres"],
      explanation: "Hashing er enveis, gir fast lengde uansett inndata, og endrer seg helt ved den minste endring. Alternativet om dekryptering blander hashing med kryptering — hashing har ingen nøkkel. De to siste bryter hver sin av kjerneegenskapene.",
    },
    {
      question: "Hvorfor lagrer et fornuftig system hashen av passordet i stedet for passordet?",
      options: ["Fordi en stjålet database da ikke røper passordene", "Fordi hashen tar mindre plass enn selve passordet gjør", "Fordi hashen kan sendes til brukeren hvis passordet glemmes", "Fordi hashen er kryptert og kan dekrypteres ved innlogging"],
      explanation: "Hashing er enveis, så en stjålet database gir angriperen hasher og ingen passord. Plassbesparelsen er tilfeldig og ikke poenget. At hashen kan sendes tilbake er nettopp det som IKKE går, og hashen dekrypteres aldri — ved innlogging hashes det du skrev, og de to hashene sammenlignes.",
    },
    {
      question: "Hva beviser en digital signatur?",
      options: ["Både hvem meldingen er fra og at den er uendret", "Bare hvem meldingen er fra, ikke om den er endret", "Bare at meldingen er uendret, ikke hvem den er fra", "At meldingen er kryptert og ikke kan leses av andre"],
      explanation: "Signaturen er hashen av meldingen kryptert med avsenderens private nøkkel, så den beviser avsender og integritet på én gang. De to alternativene som bare beviser halvparten er de nære distraktorene. Signering er ikke det samme som kryptering — en signert melding kan godt være lesbar for alle.",
    },
    {
      question: "Hva er forskjellen på DoS og DDoS?",
      options: ["DDoS kommer fra mange maskiner samtidig, DoS fra én kilde", "DoS kommer fra mange maskiner samtidig, DDoS fra én kilde", "DoS stjeler data, mens DDoS gjør tjenesten utilgjengelig", "DoS rammer nettverket, mens DDoS bare rammer databaser"],
      explanation: "Den ekstra D-en står for distribuert: mange kaprede maskiner i et botnett angriper samtidig, og det er derfor trafikken ikke kan sperres ved å blokkere én adresse. Alternativet som snur de to er den nære distraktoren. Ingen av dem stjeler data — begge angriper tilgjengelighet.",
    },
    {
      question: "Hva er et botnett?",
      options: ["Mange kaprede maskiner som en angriper styrer samlet", "Mange servere som deler lasten fra vanlige besøkende", "Mange brannmurer som samarbeider om å filtrere trafikk", "Mange nøkkelpar som brukes til å signere den samme filen"],
      explanation: "Botnettet er verktøyet som gjør et DoS-angrep til et DDoS-angrep, og eierne av maskinene vet som regel ingenting. Servere som deler last er lastbalansering — en helt lovlig teknikk som ligner overfladisk. De to siste beskriver andre mekanismer.",
    },
    {
      question: "Hva kjennetegner phishing?",
      options: ["At et menneske lures til å oppgi opplysningene selv", "At navneoppslaget manipuleres så adressen fører feil", "At trafikken avlyttes uten at noen av partene merker det", "At tjeneren oversvømmes til den ikke svarer lenger"],
      explanation: "Phishing angriper mennesket med en falsk melding eller lenke, og ingen kryptering hjelper mot at du selv skriver passordet på feil side. De tre andre beskriver pharming, wiretapping og tjenestenekt — tre andre angrep.",
    },
    {
      question: "Hva skiller pharming fra phishing?",
      options: ["Ved pharming fører riktig adresse til en falsk tjener", "Ved pharming klikker du på en falsk lenke i en melding", "Ved pharming krypteres filene dine til du betaler løsepenger", "Ved pharming oversvømmes tjeneren av trafikk fra et botnett"],
      explanation: "Pharming manipulerer navneoppslaget, så du havner feil selv om du skrev riktig adresse — og det er derfor det er vanskeligere å oppdage. Å klikke på en falsk lenke er phishing, kryptering mot løsepenger er løsepengevirus, og oversvømming er DDoS.",
    },
    {
      question: "Hva er wiretapping?",
      options: ["Passiv avlytting av trafikken uten at den endres", "Aktiv endring av trafikken mellom to parter i sanntid", "Innbrudd i en tjener for å hente ut lagrede filer derfra", "Sperring av trafikk mellom to parter så samtalen brytes"],
      explanation: "Wiretapping er å lese med uten å endre noe, og derfor merker ingen av partene det. Motmiddelet er kryptering. De tre andre beskriver aktive angrep — endring, innbrudd og blokkering — som alle har andre navn.",
    },
    {
      question: "Hva gjør en brannmur?",
      options: ["Filtrerer trafikk etter regler og blokkerer resten", "Krypterer all trafikk mellom maskinen og internett", "Fjerner skadevare som allerede ligger på maskinen", "Skjuler IP-adressen din for alle tjenestene du bruker"],
      explanation: "Brannmuren er et filter med regler for hva som slipper gjennom. Kryptering av trafikk er et VPN, og det er den faste forvekslingen. Å fjerne skadevare er antivirus, og å skjule adressen er noe et VPN eller en proxy delvis gjør.",
    },
    {
      question: "Hva er et VPN?",
      options: ["En kryptert tunnel gjennom et usikkert nett", "Et filter som blokkerer uønsket innkommende trafikk", "Et program som skanner filer for kjent skadevare", "En tjeneste som lagrer passordene dine kryptert"],
      explanation: "VPN krypterer trafikken mellom maskinen din og VPN-tjeneren, og brukes både til å nå lukkede nett utenfra og til å beskytte seg på åpne nett. Et filter er en brannmur, en filskanner er antivirus, og passordlagring er en passordbehandler.",
    },
    {
      question: "Hvilket tiltak beskytter best mot avlytting på et åpent trådløst nett?",
      options: ["Et VPN, som krypterer trafikken i en tunnel", "En brannmur, som filtrerer innkommende trafikk", "Et antivirusprogram, som stopper skadevare i filer", "Tofaktorautentisering, som sikrer selve innloggingen"],
      explanation: "Avlytting bryter konfidensialitet, og konfidensialitet vernes av kryptering — bare ett av tiltakene krypterer noe. De tre andre er reelt nyttige mot noe ANNET: innkommende trafikk, skadevare og stjålne passord. Det er slik gode distraktorer lages.",
    },
    {
      question: "Hvilket sikkerhetsmål vernes av hashing og digitale signaturer?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Anonymitet"],
      explanation: "Begge to viser at dataene er uendret og ekte, altså integritet. Konfidensialitet vernes av kryptering, tilgjengelighet av sikkerhetskopier og robuste tjenere, og anonymitet er ikke ett av de tre målene.",
    },
    {
      question: "Hvorfor holder en brannmur ikke phishing ute?",
      options: ["Fordi trafikken du selv starter, går ut gjennom en åpen port", "Fordi brannmuren bare virker på trafikk innenfor lokalnettet", "Fordi phishing sendes over en protokoll brannmurer ikke ser", "Fordi brannmuren slår seg av mens nettleseren er i bruk"],
      explanation: "Klikker du selv på lenken, er trafikken helt vanlig utgående trafikk gjennom en tillatt port, og brannmuren har ingen innvending. De tre andre påstår begrensninger og mekanismer som ikke finnes — brannmurer virker også mot internett, ser vanlig webtrafikk og slår seg ikke av.",
    },
    {
      question: "Hva betyr det at en privat nøkkel «aldri forlater eieren»?",
      options: ["Ingen andre skal ha den, verken mottaker eller tjeneste", "Den skal bare deles med den man kommuniserer fast med", "Den skal lagres på en tjener så den ikke kan mistes", "Den skal byttes ut hver gang en melding er sendt"],
      explanation: "Hele systemet hviler på at bare eieren har den private nøkkelen; deles den, faller både hemmelighold og signatur sammen. Å dele den med faste kontakter eller lagre den hos en tjeneste bryter dette. Nøkler byttes av og til, men ikke per melding.",
    },
    {
      question: "Hva er et buffer overflow-angrep?",
      options: ["At mer data skrives inn i et minneområde enn det er plass til", "At mottakerens mellomlager for pakker fylles opp og renner over", "At en tjener oversvømmes av forespørsler fra mange maskiner", "At en fil blir større enn filsystemet klarer å håndtere"],
      explanation: "Angrepet utnytter at et program skriver forbi enden av et minneområde, slik at angriperen kan få kjørt egen kode. Alternativet om mellomlageret for pakker er den samme ordbruken i NETTVERK — samme bilde, annet tema — og de to siste beskriver DDoS og et filsystemproblem.",
    },
  ],
  'tdt4110-8-5': [
    {
      question: "Hva betyr det at en komprimering er tapsløs?",
      options: ["At originalen kan gjenskapes nøyaktig, bit for bit", "At fila blir mindre uten at kvaliteten merkbart faller", "At komprimeringen går raskt og bruker lite arbeidsminne", "At fila aldri kan bli større enn originalen uansett data"],
      explanation: "Tapsløs betyr at ingenting er kastet, så originalen kan hentes fullstendig tilbake. Alternativet om at kvaliteten ikke faller merkbart beskriver komprimering MED tap — det er nettopp poenget med JPEG og MP3. Fart er en annen egenskap, og RLE på data uten gjentakelser gir faktisk større fil.",
    },
    {
      question: "Hvilket av disse formatene bruker komprimering MED TAP?",
      options: ["MP3", "ZIP", "PNG", "GIF"],
      explanation: "MP3 kaster lyd øret sjelden merker, og den kommer aldri tilbake. ZIP er tapsløs, ellers ville et regneark kommet «omtrent» tilbake fra arkivet. PNG og GIF er også tapsløse, og PNG brukes nettopp der skarpe kanter skal forbli skarpe.",
    },
    {
      question: "Hvilket av disse formatene er TAPSLØST?",
      options: ["PNG", "JPEG", "MP3", "MPEG"],
      explanation: "PNG er tapsløs og brukes til logoer, skjermbilder og strektegninger. De tre andre er de tre formatene med tap som pensum krever at du kan: JPEG for stillbilde, MP3 for lyd og MPEG for video.",
    },
    {
      question: "Hvorfor passer JPEG dårlig til skjermbilder og strektegninger?",
      options: ["Fordi tapet gir synlige artefakter langs skarpe kanter", "Fordi JPEG bare kan lagre bilder i gråtoner og ikke farger", "Fordi JPEG-filer alltid blir større enn tilsvarende PNG-filer", "Fordi JPEG ikke klarer oppløsninger over en viss størrelse"],
      explanation: "JPEG kaster det øyet minst savner i et fotografi, men skarpe kanter er nettopp det den håndterer dårligst, og resultatet er stygge firkantmønstre. JPEG lagrer farger, filene er som regel mindre enn PNG, og det finnes ingen slik oppløsningsgrense.",
    },
    {
      question: "Hva blir `AAAABBBCCD` kodet med run-length encoding?",
      options: ["`4A3B2C1D`", "`A4B3C2D1`", "`10ABCD`", "`4A3B2CD`"],
      explanation: "Bokas form er antall først, så tegnet: fire A-er, tre B-er, to C-er og én D. Formen med tegn før tall snur rekkefølgen. Å telle alle tegnene under ett mister informasjonen om rekkefølgen, og å droppe tallet på den siste rekka gjør kodingen tvetydig.",
    },
    {
      question: "Er run-length encoding tapsløs eller med tap?",
      options: ["Tapsløs, siden kodingen kan brettes ut til originalen", "Med tap, siden gjentakelsene ikke lagres enkeltvis", "Med tap, men bare når rekkene er lengre enn ni tegn", "Tapsløs, men bare når dataene er ren tekst uten tall"],
      explanation: "`4A3B2C1D` gir nøyaktig `AAAABBBCCD` tilbake, uten at noe mangler — altså tapsløs. At gjentakelsene skrives kortere er ikke tap; informasjonen om hvor mange de var, er bevart. De to forbeholdene om rekkelengde og datatype finnes ikke.",
    },
    {
      question: "Når blir en fil STØRRE av run-length encoding?",
      options: ["Når dataene nesten ikke har rekker av like tegn", "Når dataene har svært lange rekker av like tegn", "Når fila er større enn noen få hundre kilobyte", "Når fila allerede er komprimert med tap tidligere"],
      explanation: "`ABCD` blir til `1A1B1C1D`, altså dobbelt så langt, fordi hvert enkelttegn får et tall foran seg. Lange rekker er tvert imot der RLE vinner mest. Filstørrelsen i seg selv spiller ingen rolle, og tidligere komprimering er et annet spørsmål.",
    },
    {
      question: "Hva er kompresjonsforholdet når en fil går fra 10 byte til 8 byte?",
      options: ["1,25", "0,8", "2,0", "1,8"],
      explanation: "Forholdet er størrelse før delt på størrelse etter: $10 : 8 = 1{,}25$. Svaret 0,8 er den omvendte brøken, altså etter delt på før. Svaret 2,0 og 1,8 svarer ikke til noen av de to regnemåtene.",
    },
    {
      question: "Hva kjennetegner et analogt signal?",
      options: ["Det varierer kontinuerlig og har en verdi i hvert øyeblikk", "Det har bare to gyldige verdier, som avleses som 0 og 1", "Det består av målinger tatt med jevne mellomrom i tid", "Det er alltid svakere enn et digitalt signal over avstand"],
      explanation: "Analogt betyr kontinuerlig: verdien kan være hva som helst, når som helst. To gyldige verdier beskriver et digitalt signal, og målinger med jevne mellomrom er resultatet av sampling. Signalstyrke er en annen egenskap enn analog eller digital.",
    },
    {
      question: "Hvorfor tåler et digitalt signal støy bedre enn et analogt?",
      options: ["Et forvrengt signal kan leses tilbake til nøyaktig 0 eller 1", "Digitale signaler sendes alltid med høyere styrke enn analoge", "Digitale signaler komprimeres alltid før de sendes av gårde", "Digitale signaler er alltid kortere og rekker derfor lenger"],
      explanation: "Fordi det bare finnes to gyldige verdier, kan mottakeren avgjøre hvilken av dem signalet var ment å være, og resultatet blir nøyaktig riktig — derfor er en kopi av en kopi identisk med originalen. De tre andre påstår egenskaper som ikke følger av at et signal er digitalt.",
    },
    {
      question: "Hva er sampling?",
      options: ["Å måle et analogt signal med jevne mellomrom og lagre tallene", "Å legge et signal oppå en bærebølge så det kan sendes over avstand", "Å fjerne informasjon fra et signal så det tar mindre plass", "Å runde av hver måling til nærmeste mulige lagringstrinn"],
      explanation: "Sampling er selve digitaliseringen: fra en sammenhengende kurve til en rekke tall. Å legge signalet på en bærebølge er modulasjon, å fjerne informasjon er komprimering, og avrunding til nærmeste trinn er kvantisering — det som skjer ETTER at tidspunktet er valgt.",
    },
    {
      question: "Hva sier Nyquist-regelen?",
      options: ["Minst dobbelt så høy som den høyeste frekvensen i signalet", "Minst like høy som den høyeste frekvensen som er i signalet", "Minst fire ganger så høy som høyeste frekvens i signalet", "Minst halvparten av den høyeste frekvensen i signalet"],
      explanation: "En svingning må måles minst to ganger per periode for at den skal kunne gjenskapes, altså $f_{\\text{sampling}} \\ge 2 \\times f_{\\text{maks}}$. Varianten «minst like høy» er den vanligste feilen på hele oppgavetypen, «fire ganger» er mer enn nødvendig, og «halvparten» snur regelen.",
    },
    {
      question: "Et signal har frekvenser opp til 6 kHz. Hva er den laveste samplingsfrekvensen som kan brukes?",
      options: ["12 kHz", "6 kHz", "3 kHz", "24 kHz"],
      explanation: "$2 \\times 6 = 12$ kHz. Svaret 6 kHz er «minst like høy»-varianten av regelen, og 3 kHz kommer av å dele i stedet for å gange. Svaret 24 kHz ville fungert, men oppgaven spør om den LAVESTE frekvensen som holder.",
    },
    {
      question: "En lydfil er samplet med 44,1 kHz. Hvilken høyeste frekvens kan gjengis?",
      options: ["Rundt 22 kHz", "Rundt 44 kHz", "Rundt 88 kHz", "Rundt 11 kHz"],
      explanation: "Nyquist brukt den andre veien: høyeste gjengivbare frekvens er halvparten av samplingsfrekvensen, altså $44{,}1 : 2 \\approx 22$ kHz. Svaret 44 kHz glemmer divisjonen, 88 kHz ganger i stedet for å dele, og 11 kHz deler to ganger.",
    },
    {
      question: "Hva er aliasing?",
      options: ["At høye frekvenser gjengis som lavere frekvenser som ikke fantes", "At signalet bare blir litt mer utydelig, men ellers helt riktig gjengitt", "At fila blir større fordi feilene må lagres i tillegg", "At samplingen stopper av seg selv når grensen er nådd"],
      explanation: "For treg sampling gir ikke gradvis dårligere kvalitet — det dukker opp falske frekvenser som aldri fantes, som vognhjul i film som ser ut til å gå bakover. At det blir «litt utydelig» stemmer med intuisjonen, men er feil. Færre samples gir mindre fil, og maskinen kan ikke oppdage problemet selv.",
    },
    {
      question: "Hva er forskjellen på samplingsfrekvens og bitdybde i en lydfil?",
      options: ["Frekvensen gjelder hvor ofte, bitdybden hvor nøyaktig hver måling er", "Frekvensen gjelder hvor nøyaktig, bitdybden hvor ofte det måles", "Frekvensen gjelder tonehøyden, bitdybden gjelder lydstyrken i filen", "Frekvensen gjelder lyd, mens bitdybden bare gjelder for bilder"],
      explanation: "Samplingsfrekvensen handler om TID og bitdybden om VERDI — to uavhengige valg som begge må være store nok. Alternativet som snur de to er den nære distraktoren. De to siste blander begrepene med tonehøyde, lydstyrke og bildebehandling.",
    },
    {
      question: "Hva er modulasjon?",
      options: ["Å legge et signal oppå en bærebølge så det kan sendes langt", "Å måle et analogt signal med jevne mellomrom og lagre målingene", "Å fjerne informasjon fra et signal så filen blir mindre", "Å legge til ekstra bit så feil kan oppdages ved mottak"],
      explanation: "Modulasjon er transport: bærebølgen endres av signalet, og mottakeren reverserer endringen. Måling med jevne mellomrom er sampling, og de to blandes ofte fordi begge handler om signaler. De to siste beskriver komprimering og kanalkoding.",
    },
    {
      question: "Hva er forskjellen på AM og FM?",
      options: ["AM endrer bærebølgens amplitude, FM endrer dens frekvens", "AM endrer bærebølgens frekvens, FM endrer dens amplitude", "AM sender analoge signaler, mens FM sender digitale signaler", "AM brukes bare til lyd, mens FM bare brukes til bildesending"],
      explanation: "Forkortelsene forklarer seg selv når de skrives ut: amplitudemodulasjon og frekvensmodulasjon. Alternativet som snur de to er den nære distraktoren. Begge kan bære både analoge og digitale signaler, og ingen av dem er begrenset til lyd eller bilde.",
    },
    {
      question: "Hvorfor er FM mindre følsom for støy enn AM?",
      options: ["Fordi støy mest påvirker signalstyrken, som FM ikke bruker", "Fordi FM sender med kortere bølgelengde og når derfor lenger fram", "Fordi FM alltid har med et paritetsbit som fanger opp feilene", "Fordi FM komprimerer signalet før det legges på bærebølgen"],
      explanation: "Informasjonen i FM ligger i svingetakten, ikke i høyden, og støy slår først og fremst ut høyden. Bølgelengde og rekkevidde er en annen sak, paritetsbit hører til kanalkoding, og modulasjon innebærer ingen komprimering.",
    },
    {
      question: "Hva kan en paritetsbit gjøre?",
      options: ["Oppdage et oddetall av feil bit, men ikke rette dem", "Rette ett feil bit automatisk der det oppstod", "Oppdage og rette opptil to feil bit i den samme blokken", "Hindre at det i det hele tatt oppstår feil bit"],
      explanation: "Mottakeren teller enerne og ser at noe er galt — men bare ved et oddetall av feil, siden to feil opphever hverandre i regnestykket. Å rette krever en feilrettende kode som Hamming, og kanalkoding gjør ingenting med støyen som forårsaker feilene.",
    },
    {
      question: "Hvorfor blir en videofil mindre enn summen av alle enkeltbildene?",
      options: ["Fordi bare endringene fra forrige bilde lagres mesteparten av tiden", "Fordi hvert enkelt bilde lagres i en lavere oppløsning enn originalen", "Fordi lyden fjernes helt og lagres i en egen fil ved siden av", "Fordi bare hvert tiende bilde i videoen faktisk blir lagret"],
      explanation: "Videokomprimering utnytter at påfølgende bilder ligner: et helt bilde lagres av og til, resten er endringer. Derfor blir en video med lite bevegelse liten. Oppløsningen kan reduseres, men det er ikke mekanismen, og verken lyd eller bilder droppes på de måtene de to siste påstår.",
    },
    {
      question: "Hva er frekvensen til et lydsignal et mål på?",
      options: ["Hvor mange svingninger lyden gjør per sekund", "Hvor mange målinger maskinen tar per sekund", "Hvor kraftig lyden oppleves for den som hører den", "Hvor mange bit hver måling av lyden lagres med"],
      explanation: "Frekvens er svingninger per sekund, målt i hertz, og svarer til tonehøyde. Målinger per sekund er samplingsfrekvensen — et annet begrep med samme enhet, og derfor lett å blande. Styrke er amplitude, og bit per måling er bitdybde.",
    },
    {
      question: "Hvilken type komprimering passer best til et skannet kontraktsdokument?",
      options: ["Tapsløs, siden et endret tegn kan endre innholdet", "Med tap, siden dokumenter tar mye lagringsplass", "Med tap, siden tekst tåler mer tap enn bilder gjør", "Ingen komprimering, siden dokumenter ikke kan komprimeres"],
      explanation: "Tekst og tall tåler minst tap av alt: et utydelig siffer kan endre hva kontrakten sier. Påstanden om at tekst tåler mer er den motsatte av sannheten og er den farligste distraktoren. Dokumenter kan selvsagt komprimeres — bare tapsløst, med ZIP eller PNG.",
    },
  ],
  'tdt4110-8-6': [
    {
      question: "Hvilke fire grunnaktiviteter inngår i all systemutvikling?",
      options: ["Spesifikasjon, utvikling, validering og evolusjon", "Spesifikasjon, utvikling, validering og markedsføring", "Planlegging, programmering, testing og dokumentasjon", "Analyse, design, implementasjon og salg av systemet"],
      explanation: "De fire er spesifikasjon (hva), utvikling (hvordan), validering (ble det riktig) og evolusjon (hva nå). Markedsføring og salg er ikke utviklingsaktiviteter. Alternativet med planlegging og dokumentasjon nevner ekte arbeid, men ikke de fire grunnaktivitetene modellene bygger på.",
    },
    {
      question: "Hvilken grunnaktivitet svarer på spørsmålet HVA systemet skal gjøre?",
      options: ["Spesifikasjon", "Utvikling", "Validering", "Evolusjon"],
      explanation: "Spesifikasjonen svarer på hva, og alle de tre andre forutsetter at svaret finnes. Utvikling svarer på hvordan, validering på om det ble riktig, og evolusjon på hva som skjer etter at systemet er i drift.",
    },
    {
      question: "Hvilken aktivitet koster mest for et system som er i drift i mange år?",
      options: ["Evolusjonen, altså vedlikeholdet etter at systemet er tatt i bruk", "Spesifikasjonen, siden kravene må avklares før noe kan bygges", "Utviklingen, siden all kode skrives i denne ene fasen av arbeidet", "Valideringen, siden alle nivåene av testing tar svært lang tid"],
      explanation: "Vedlikeholdet varer så lenge systemet brukes, og for et langlivet system koster det mer enn den opprinnelige utviklingen. De tre andre er avgrenset i tid og slutter når systemet settes i drift — det er nettopp derfor lesbar kode er økonomi og ikke høflighet.",
    },
    {
      question: "Hva er forskjellen på verifisering og validering?",
      options: ["Verifisering: bygde vi riktig. Validering: bygde vi riktig system", "Verifisering: bygde vi riktig system. Validering: bygde vi riktig", "Verifisering gjøres av kunden, validering gjøres av utviklerne", "Verifisering gjelder maskinvaren, validering gjelder programvaren"],
      explanation: "Verifisering spør om koden virker som spesifisert; validering spør om spesifikasjonen traff behovet. Et system kan bestå alle tester og likevel være ubrukelig. Alternativet som snur de to er den nære distraktoren, og de to siste finner på skiller som ikke finnes.",
    },
    {
      question: "Hvilken prosessmodell har sekvensielle, ikke-overlappende faser?",
      options: ["Vannfallsmodellen", "Spiralmodellen", "Inkrementell utvikling", "Smidig utvikling"],
      explanation: "Vannfallet renner én vei: hver fase gjøres ferdig før den neste begynner, og modellen har ingen vei tilbake. De tre andre er alle iterative på hver sin måte — spiralen med risikorunder, inkrementell med deleveranser, smidig med korte runder.",
    },
    {
      question: "Hva er det særegne ved Boehms spiralmodell?",
      options: ["At hver runde starter med en risikovurdering", "At hver runde leverer et fungerende delsystem", "At hver runde varer nøyaktig fire uker om gangen", "At hver runde avsluttes med kundens godkjenning"],
      explanation: "Risikovurderingen er det som skiller spiralen fra andre iterative modeller: er noe usikkert, tas det tidlig, mens det er billig å snu. Fungerende delsystemer gjelder inkrementell utvikling generelt, faste rundelengder hører til smidig, og kundegodkjenning er akseptansetesting.",
    },
    {
      question: "Hva kjennetegner inkrementell utvikling?",
      options: ["Systemet bygges i flere små deler som hver for seg virker", "Systemet bygges ferdig i én fase før noe blir vist fram", "Systemet bygges i runder som styres av risikovurderinger", "Systemet bygges uten at kravene skrives ned på forhånd"],
      explanation: "Hver deleveranse er noe brukbart, og tilbakemeldingen på den styrer neste del. Å bygge alt ferdig først er vannfall, risikostyrte runder er spiralmodellen, og ingen av modellene dropper kravarbeidet — inkrementell fordeler det utover i stedet.",
    },
    {
      question: "Hva er hovedsvakheten ved vannfallsmodellen?",
      options: ["Endrede krav er dyre, siden alt bygger på første fase", "Den mangler en testfase, så feil oppdages først i drift", "Den kan ikke brukes på prosjekter med mange utviklere", "Den krever mer dokumentasjon enn nyere modeller gjør"],
      explanation: "Viser det seg i testfasen at kravene var misforstått, er design, kode og tester allerede bygd på dem. Påstanden om at testfasen mangler er direkte gal — testing er fase 4; problemet er at den kommer sent. Vannfall brukes nettopp på store prosjekter, og dokumentasjonsmengden er en følge og ikke hovedproblemet.",
    },
    {
      question: "Hva er en kravspesifikasjon?",
      options: ["Dokumentet som sier hva systemet skal gjøre, skrevet først", "Dokumentet som sier hvordan systemet er bygd opp innvendig", "Rapporten fra kundens siste test før systemet tas i bruk", "Listen over feil som er funnet under systemtestingen"],
      explanation: "Kravspesifikasjonen kommer først og er kontrakten alt annet måles mot. Hvordan systemet er bygd opp, er systemarkitekturen. Rapporten fra kundens test er akseptansetesting, og en feilliste er noe helt annet — de to siste kommer til slutt, ikke først.",
    },
    {
      question: "Hvilket av disse er et IKKE-funksjonelt krav?",
      options: ["Systemet skal svare på et søk i løpet av to sekunder", "Systemet skal la brukeren avbestille en avtalt time", "Systemet skal sende en kvittering til brukerens e-post", "Systemet skal vise brukerens timer for neste måned"],
      explanation: "Svartid er en EGENSKAP ved løsningen, ikke noe systemet gjør for brukeren. De tre andre har alle et verb med et objekt — avbestille, sende, vise — og er derfor funksjonelle krav. Huskeregelen: måltall og egenskaper er ikke-funksjonelle.",
    },
    {
      question: "Hva kjennetegner et GODT krav?",
      options: ["At det er etterprøvbart, så det kan avgjøres om det er oppfylt", "At det er kortfattet, så det får plass på én linje i dokumentet", "At det er teknisk, så utviklerne slipper å tolke det selv", "At det er ambisiøst, så systemet blir bedre enn konkurrentenes"],
      explanation: "«Systemet skal være raskt» kan ingen kontrollere; «systemet skal svare innen to sekunder» kan alle kontrollere. Lengde er ikke et kvalitetsmål, kravene skal beskrive behovet og ikke løsningen, og ambisjonsnivå er en annen diskusjon enn kravformulering.",
    },
    {
      question: "Hva er systemarkitektur?",
      options: ["Den overordnede oppdelingen i deler, ansvar og samspill", "Den fysiske maskinvaren systemet skal kjøre på i drift", "Den detaljerte koden inne i hver enkelt funksjon i systemet", "Den skriftlige avtalen mellom kunden og leverandøren"],
      explanation: "Arkitekturen bestemmes tidlig og er den beslutningen som er dyrest å endre senere. Maskinvaren er driftsmiljøet, koden inne i funksjonene er implementasjonen, og avtalen mellom partene er en kontrakt — tre andre ting.",
    },
    {
      question: "Hvem utfører akseptansetesting?",
      options: ["Kunden som skal bruke systemet", "Utviklerne som skrev koden selv", "Leverandørens egne testere internt", "En uavhengig ekstern sikkerhetsrevisor"],
      explanation: "Ordet «akseptanse» sier hvem som skal akseptere: kunden prøver systemet med egne data og avgjør om det tas i bruk. Utviklerne står for enhetstestingen og leverandørens testere for systemtestingen — den siste er den nære distraktoren, siden begge prøver hele systemet.",
    },
    {
      question: "På hvilket testnivå er en feil billigst å finne?",
      options: ["Enhetstesting, der én del prøves for seg selv", "Integrasjonstesting, der delene prøves sammen", "Systemtesting, der hele systemet prøves samlet", "Akseptansetesting, der kunden prøver systemet"],
      explanation: "Jo lavere nivå, jo raskere er feilen sporet og rettet: en feil i én funksjon koster minutter i enhetstesten og dager under akseptansetesting, fordi den da må spores gjennom hele systemet først. De fire alternativene er nivåene i stigende rekkefølge.",
    },
    {
      question: "Et system består alle tester, men brukerne sier det ikke løser jobben deres. Hva har mest sannsynlig sviktet?",
      options: ["Spesifikasjonen, siden kravene ikke traff behovet", "Implementasjonen, siden koden må inneholde feil et sted", "Enhetstestingen, siden hver del burde vært prøvd bedre", "Systemarkitekturen, siden delene ikke snakker sammen"],
      explanation: "At alle tester går grønt, betyr at systemet er bygd RIKTIG — verifiseringen er i orden. Det som mangler, er at riktig system ble bygd, altså validering. De tre andre alternativene motsies direkte av opplysningen om at testene består.",
    },
    {
      question: "Hvilken tilnærming passer best når kundene er usikre på hva de trenger?",
      options: ["En iterativ modell, siden usikkerheten kan tas trinnvis", "Vannfall, siden en fast plan gir forutsigbar framdrift", "Vannfall, siden kravene da må avklares helt før byggingen", "En iterativ modell, siden dokumentasjon da kan sløyfes helt"],
      explanation: "Usikre krav er risiko, og risiko håndteres ved å prøve det usikre tidlig. Begge vannfallsalternativene velger den modellen som er svakest mot endring nettopp der endring er sannsynlig. Svaret om at dokumentasjon kan sløyfes helt, har riktig modell, men gal begrunnelse — iterativ utvikling fordeler dokumentasjonen, den fjerner den ikke.",
    },
    {
      question: "Hva skiller smidig utvikling fra spiralmodellen?",
      options: ["Smidig drives av korte runder, spiralen av risikovurdering", "Smidig drives av risikovurdering, spiralen av korte faste runder", "Smidig er sekvensiell, mens spiralmodellen er iterativ i runder", "Smidig gjelder små prosjekter, spiralen gjelder bare store"],
      explanation: "Begge er iterative, men det som styrer hva som gjøres i neste runde, er ulikt: tilbakemelding fra kunden mot risikovurdering. Alternativet som snur de to er den nære distraktoren. Smidig er ikke sekvensiell, og størrelsen på prosjektet avgjør ikke valget.",
    },
    {
      question: "Hvorfor er akseptansetesting og kravspesifikasjon knyttet sammen?",
      options: ["Akseptansetestingen kontrollerer om det avtalte faktisk ble laget", "Akseptansetestingen erstatter kravspesifikasjonen i smidige prosjekter", "Begge to skrives av utviklerne i den samme fasen av prosjektet", "Begge to gjelder bare de ikke-funksjonelle kravene til systemet"],
      explanation: "De to danner en bue over prosjektet: spesifikasjonen sier hva som skal lages, akseptansetestingen kontrollerer at det er det som ble laget. Den ene erstatter ikke den andre, ingen av dem skrives av utviklerne alene, og begge gjelder alle typer krav.",
    },
  ],
  'tdt4110-8-7': [
    {
      question: "Hva bør du gjøre med et flervalgsspørsmål du ikke kan svaret på?",
      options: ["Krysse av likevel, siden minuspoeng ikke gis fra 2015", "La det stå blankt, siden et galt svar trekker fra poeng", "La det stå blankt og heller bruke tiden på de du kan", "Krysse av på to alternativer for å øke sjansen din litt"],
      explanation: "Et galt kryss og et blankt felt gir begge null, så blankt er strengt dårligere enn å gjette. Å trekke fra for feil gjaldt bare høsten 2014 og er historikk. Å krysse av på to alternativer er ikke et gyldig svar i sjanger A, der ett og bare ett skal krysses.",
    },
    {
      question: "Hva er en nær distraktor?",
      options: ["Et galt alternativ der bare ett ord skiller det fra fasiten", "Et alternativ som er åpenbart tull og lett kan strykes med én gang", "Et alternativ som er like riktig som fasiten, men mindre presist", "Et alternativ som gjentar spørsmålet med litt andre ord"],
      explanation: "Nære distraktorer er formulert så likt fasiten som mulig, slik at presis kunnskap kreves og gjenkjenning ikke holder. Tullesvar brukes ikke i denne sjangeren. To like riktige alternativer ville gjort spørsmålet ugyldig — ett skal alltid være «mest riktig».",
    },
    {
      question: "Hva bør du gjøre FØR du bestemmer deg for et alternativ?",
      options: ["Lese alle fire alternativene, siden flere kan se riktige ut", "Lese de to første og velge det beste av dem for å spare tid", "Regne ut svaret på forhånd og lete etter det blant alternativene", "Stryke det lengste alternativet, som sjelden er det riktige"],
      explanation: "Et svar som ser riktig ut ved første blikk, er ofte «riktig, men ikke mest riktig» — derfor må alle fire leses. Å regne først er nyttig på regnespørsmål, men er ikke en generell metode. Lengden på alternativene sier ingenting: på et godt sett har alle fire omtrent samme lengde.",
    },
    {
      question: "Hvilke ord i et spørsmål avgjør hvilket av flere holdbare alternativer som er riktig?",
      options: ["Avgrensende ord som «minst», «laveste» og «særegne»", "Fagord som «protokoll», «register» og «samplingsfrekvens»", "Tallord som «to», «fire» og «åtte» i selve spørsmålet", "Negasjoner som «ikke» og «aldri» i alternativene"],
      explanation: "Ord som «minst», «laveste», «hovedsakelig» og «særegne» skiller mellom alternativer som alle er sanne. Fagordene sier hva spørsmålet handler om, ikke hvilket alternativ som er mest riktig, og tallord og negasjoner er innhold og ikke avgrensning.",
    },
    {
      question: "Hvilke alternativer kan strykes UTEN faktakunnskap om temaet?",
      options: ["De som strider mot en opplysning som står i selve spørsmålet", "De som inneholder et tall, siden tall sjelden er riktig svar", "De som er formulert som en hel setning med begrunnelse", "De som står først og sist, siden fasiten oftest står i midten"],
      explanation: "Strider et alternativ mot en opplysning i oppgaveteksten, er det ute uansett hva du kan om temaet — og det samme gjelder vagt formulerte alternativer. Verken tall, setningsform eller plassering sier noe om hvilket alternativ som er riktig.",
    },
    {
      question: "Hvor lang tid bør teoridelen ta på et 4-timers sett?",
      options: ["Rundt 35 minutter, altså det de ~25 prosentene svarer til", "Rundt 90 minutter, siden det er 20 spørsmål å komme gjennom", "Rundt 10 minutter, siden hvert spørsmål bare er et kryss", "Så lang tid som trengs, siden teori er den sikreste delen"],
      explanation: "Teoridelen er ~25 % av settet, altså rundt 35 minutter av fire timer, og de fleste spørsmålene tar under et minutt. Halvannen time ville stjålet fra programmeringsoppgaven, som er 50–60 %. Ti minutter er urealistisk når regnespørsmålene tar to–tre minutter hver.",
    },
    {
      question: "Hva er den vanligste feilen på regnespørsmål om bildestørrelse?",
      options: ["Å glemme å dele på 8, så svaret blir oppgitt i bit", "Å glemme å gange bredde med høyde i første steg", "Å bruke 8 bit per piksel når oppgaven sier 24 bit", "Å regne med kvadratiske piksler når de er rektangulære"],
      explanation: "Divisjonen på 8 er steget som faller ut oftest, og svaret blir da åtte ganger for stort — det er feilkode #12. De to andre feilene forekommer, men gir svar som er lettere å oppdage. Pikselform inngår ikke i regnestykket i det hele tatt.",
    },
    {
      question: "Hvorfor er distraktorene på et regnespørsmål særlig farlige?",
      options: ["De er ofte mellomresultatene fra din egen utregning", "De er ofte tall som ligger svært langt fra riktig svar", "De er ofte oppgitt med feil enhet, som kilobyte og megabyte", "De er ofte negative tall som ikke gir mening i sammenhengen"],
      explanation: "I bildestørrelsesoppgaver står svaret i bit, antall piksler og et tall der høyden er glemt — alle sammen tall du ser på kladden underveis, så «jeg kjenner igjen tallet» er ingen kontroll. Tall langt unna, feil enhet og negative tall ville vært lette å stryke.",
    },
    {
      question: "Hvilket hjelpemiddel har du på eksamen i TDT4110?",
      options: ["Én bestemt, enkel kalkulator, og ingenting utover den", "Kalkulator og én selvskrevet A4-side med notater", "Kalkulator og læreboka, men ingen elektroniske hjelpemidler", "Ingen hjelpemidler i det hele tatt, heller ikke kalkulator"],
      explanation: "Hjelpemiddelkode D betyr én bestemt, enkel kalkulator: ingen bøker, ingen håndskrevne notater og ingen annen elektronikk. Kalkulatoren tar potenser og divisjon, men konverterer ikke mellom tallsystemer — de metodene må sitte i hodet.",
    },
    {
      question: "Hva er en algoritme?",
      options: ["En entydig, endelig oppskrift som virker for alle inndata", "Et program skrevet i Python som løser en bestemt oppgave", "En liste over de datastrukturene et program skal bruke", "En beskrivelse av hvordan maskinvaren utfører instruksjoner"],
      explanation: "De tre kravene er at hvert steg er entydig, at oppskriften terminerer, og at den virker generelt og ikke bare for ett eksempel. En algoritme er uavhengig av programmeringsspråk og kan skrives i pseudokode. De to siste beskriver datastrukturer og maskinvare.",
    },
    {
      question: "Hva måler Big-O?",
      options: ["Hvordan arbeidsmengden vokser når datamengden vokser", "Hvor mange sekunder algoritmen bruker på en gitt maskin", "Hvor mye minne algoritmen trenger mens den kjører", "Hvor mange kodelinjer algoritmen består av til sammen"],
      explanation: "Big-O er en veksttakt, ikke en tid: den sier hva som skjer med arbeidet når $n$ dobles. Sekunder avhenger av maskinen og sier ingenting generelt. Minnebruk er et eget mål, og antall kodelinjer har ingen sammenheng med kjøretid.",
    },
    {
      question: "Hva er kjøretidskompleksiteten til binærsøk?",
      options: ["$O(\\log n)$, men bare hvis lista er sortert", "$O(\\log n)$, uansett rekkefølge på elementene", "$O(n)$, men raskere enn sekvensielt søk i praksis", "$O(1)$, siden søkeområdet halveres hver runde"],
      explanation: "Halveringen forutsetter at alt til venstre er mindre og alt til høyre er større — på en usortert liste gir binærsøk feil svar, ikke bare tregt svar. Alternativet uten forutsetningen er den faste fella. $O(n)$ er sekvensielt søk, og halvering gir logaritmisk og ikke konstant vekst.",
    },
    {
      question: "Hva er kjøretidskompleksiteten til boblesortering?",
      options: ["$O(n^{2})$, siden to nøstede løkker går gjennom lista", "$O(n)$, siden hvert element flyttes høyst én gang", "$O(\\log n)$, siden lista halveres for hver runde", "$O(1)$, siden sorteringen skjer direkte i lista selv"],
      explanation: "To nøstede løkker gir kvadratisk vekst: dobles antall elementer, firedobles arbeidet. Elementene byttes langt flere enn én gang, ingen halvering skjer i boblesortering, og at sorteringen gjøres i lista selv handler om minnebruk og ikke om kjøretid.",
    },
    {
      question: "Hva er kjøretidskompleksiteten til sekvensielt søk?",
      options: ["$O(n)$, siden lista i verste fall gås gjennom helt", "$O(\\log n)$, siden søkeområdet blir mindre underveis", "$O(n^{2})$, siden hvert element sammenlignes med alle", "$O(1)$, siden elementet like gjerne kan ligge først"],
      explanation: "I verste fall må hele lista gjennomgås, altså lineær vekst. Søkeområdet krymper ikke systematisk slik det gjør i binærsøk, hvert element sammenlignes bare med søkeverdien, og at treffet KAN komme først sier ingenting om verste tilfelle.",
    },
    {
      question: "Hvorfor er $O(\\log n)$ så mye bedre enn $O(n)$ for store lister?",
      options: ["En million elementer krever rundt 20 steg i stedet for en million", "En million elementer krever rundt tusen steg i stedet for en million", "De to er like raske til lista passerer omtrent tusen elementer", "Forskjellen gjelder bare minnebruk og ikke antall steg"],
      explanation: "Halveringen betyr at hver dobling av lista koster ett steg mer, så en million elementer tar rundt 20 steg. Tusen steg ville svart til kvadratrotvekst, som ikke er noen av de to. Forskjellen gjelder antall steg og gjør seg gjeldende lenge før tusen elementer.",
    },
    {
      question: "Hva er pseudokode?",
      options: ["Et strukturert språk skrevet for å leses av mennesker", "Python-kode som er skrevet ned uten å ha blitt kjørt ennå", "Kode som er kommentert bort så den ikke blir utført", "Et eldre programmeringsspråk som ikke lenger brukes"],
      explanation: "Pseudokode beskriver algoritmen presist nok til å følges, men er ikke laget for å kjøres av en maskin — den er språkuavhengig. Ukjørt Python er fortsatt Python, bortkommentert kode er kommentarer, og pseudokode er ikke og har aldri vært et programmeringsspråk.",
    },
    {
      question: "Hvilke to feilkoder dominerer teoridelen?",
      options: ["#11 forveksling av nære alternativer og #12 regnefeil", "#1 glemt konvertering og #2 glemt bruk av `.strip()`", "#5 av-med-én i løkkegrenser og #6 glemte tomtilfeller", "#10 feil grunntilfelle i rekursjon og #13 ordrik forklaring"],
      explanation: "Feilkode #11 er å forveksle tett formulerte alternativer, og #12 er regnefeil i teoridelen — de to dekker nesten alt som mistes på Oppgave 1. De tre andre parene hører til kodesiden av faget: filinnlesing, løkker og robusthet, rekursjon og forklaringssjangeren.",
    },
    {
      question: "Et alternativ sier «tjenesten blir noe raskere og litt mer stabil». Hva bør du gjøre?",
      options: ["Mistenke det, siden fasiten som regel påstår noe presist", "Velge det, siden forsiktige formuleringer sjelden er helt gale", "Ignorere formuleringen, siden ordvalg ikke betyr noe i sjanger A", "Velge det bare hvis de tre andre alternativene inneholder tall"],
      explanation: "Vage sammenligningsord uten noe presist innhold er et av kjennetegnene på et alternativ som kan strykes, sammen med de som strider mot spørsmålet. At noe er forsiktig formulert gjør det ikke riktigere, og ordvalget er nettopp det som skiller alternativene fra hverandre.",
    },
    {
      question: "Hvorfor bør du ta teoridelen tidlig på eksamen?",
      options: ["Den gir sikre poeng raskt og sparer hodet til kodingen", "Den er den vanskeligste delen og bør tas mens du er uthvilt", "Den må leveres før programmeringsdelen kan påbegynnes", "Den teller mest av de tre delene og bør derfor prioriteres"],
      explanation: "Teoridelen tar rundt 35 minutter, varmer opp og gir tidlige poeng, slik at resten av tiden kan gå til programmeringen. Den er ikke den vanskeligste, det finnes ingen slik leveringsrekkefølge, og det er programmeringen som teller mest, med 50–60 %.",
    },
    {
      question: "På et sett er ett alternativ «hver runde leverer noe som virker» og et annet «hver runde starter med risikovurdering». Spørsmålet er hva som er SÆREGENT for spiralmodellen. Hva er riktig?",
      options: ["Risikovurderingen, siden det første gjelder alle iterative modeller", "Det som leveres, siden det er det kunden faktisk ser av arbeidet", "Begge to, siden begge er sanne påstander om spiralmodellen", "Ingen av dem, siden spiralmodellen ikke går i runder i det hele tatt"],
      explanation: "Begge påstandene er sanne om spiralen, men bare risikovurderingen skiller den fra andre iterative modeller — og ordet «særegent» i spørsmålet er nettopp det som avgjør. I sjanger A skal ett og bare ett alternativ krysses, og spiralmodellen går selvsagt i runder.",
    },
    {
      question: "Hvorfor holder det ikke å kjenne igjen begrepene i teoridelen?",
      options: ["Fordi tre av fire alternativer som regel er nesten sanne", "Fordi begrepene sjelden nevnes ved navn i alternativene", "Fordi alternativene er formulert på engelsk og ikke norsk", "Fordi spørsmålene krever regning i de aller fleste tilfeller"],
      explanation: "Distraktorene er nære: sanne eller nesten sanne påstander om datateknologi, der ett ord eller tall er byttet ut. Begrepene nevnes tvert imot ofte ved navn, alternativene er på oppgavespråket, og bare et fåtall spørsmål krever regning.",
    },
    {
      question: "Hva er den mest effektive måten å øke antall riktige på teoridelen?",
      options: ["Lære begrepene parvis, siden distraktorene er motstykkene", "Lese hele pensumboka en gang til fra første til siste side", "Pugge så mange fagord som mulig uten å se på definisjonene", "Øve på å svare raskere, siden tid er den viktigste knappheten"],
      explanation: "Nesten alle spørsmålene handler om et par som ligner: 32 mot 128, offentlig mot privat, dobbelt mot like høy, sekvensiell mot iterativ. Kan du bare det ene ordet i paret, står du like svakt som om du ikke kunne noen av dem. Bred lesing og løsrevet pugging treffer ikke presisjonen, og tid er sjelden knappheten på teoridelen.",
    },
    {
      question: "Hva er riktig om NumPy og Matplotlib i TDT4110?",
      options: ["De nevnes i gjeldende emnebeskrivelse, men ikke i arkivet 2014–2019", "De er kjernepensum og brukes i løsningsforslagene fra hele perioden", "De er uttrykkelig forbudt å nevne i besvarelser på eksamen", "De er en del av standardbiblioteket og trenger ingen installasjon"],
      explanation: "Bibliotekene står i gjeldende emnebeskrivelse, men ingen oppgave i arkivet 2014–2019 bruker dem, og all kode i denne boka er ren Python med standardbiblioteket — derfor merkingen «verifiser mot gjeldende pensum». De er ikke forbudt, og de er tredjepartsbiblioteker som må installeres.",
    },
    {
      question: "Hvorfor må du øve på å skrive kode for hånd, på papir?",
      options: ["Fordi eksamen er skriftlig med kode D, uten maskin å prøve på", "Fordi håndskrevet kode gir bedre uttelling enn kode på maskin", "Fordi sensor vurderer håndskriften som en del av besvarelsen", "Fordi papir er raskere enn tastatur når man har øvd nok på det"],
      explanation: "Eksamen er en skriftlig skoleeksamen der du ikke har datamaskin, så koden skrives for hånd og kan ikke kjøres eller rettes av en editor — det er en ferdighet som må øves. Håndskrift vurderes ikke, papir er ikke raskere, og det finnes ingen bonus for skrivemåten.",
    },
    {
      question: "Hva er den dyreste disponeringsfeilen på et TDT4110-sett?",
      options: ["Å bruke lang tid på ett teorispørsmål mens kodeoppgaver står åpne", "Å begynne på programmeringen før teoridelen er helt ferdig", "Å skrive for kort svar på teorispørsmålene i oppgave 1", "Å lese hele oppgavesettet gjennom før man begynner å svare"],
      explanation: "Hvert teorispørsmål er verdt drøyt én prosent; en programmeringsdeloppgave er verdt fem til ti. Rekkefølgen mellom delene er valgfri, teorisvar er kryss og ikke tekst, og å lese hele settet først er tvert imot anbefalt.",
    },
  ],
  'tdt4110-9-1': [
    {
      question: "Hva skriver programmet ut?\n\n```python\ntall = [6, 2, 9, 4]\nresultat = []\nfor i in range(len(tall) - 1):\n    resultat.append(tall[i] + tall[i + 1])\nprint(resultat)\n```",
      options: ["`[8, 11, 13]`", "`[8, 11, 13, 4]`", "`[6, 8, 11, 13]`", "`[8, 11, 13, 6]`"],
      explanation: "Løkka går over indeks 0, 1 og 2, og legger sammen hvert par naboer: 6+2, 2+9 og 9+4. Svaret `[8, 11, 13, 4]` kommer av å ta med siste element ubehandlet, `[6, 8, 11, 13]` av å ta med det første, og `[8, 11, 13, 6]` av å runde av lista med startverdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntekst = 'informatikk'\nprint(tekst[::2])\n```",
      options: ["`ifraik`", "`nomtk`", "`ifrmai`", "`iformti`"],
      explanation: "Steget 2 plukker indeks 0, 2, 4, 6, 8 og 10, altså i, f, r, a, i og k. Svaret `nomtk` er de oddetallige indeksene, `ifrmai` bytter om to av tegnene, og `iformti` teller feil steg underveis.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntekst = 'informatikk'\nprint(tekst[::-1][:5])\n```",
      options: ["`kkita`", "`rofni`", "`kkitam`", "`infor`"],
      explanation: "Strengen snus først til `kkitamrofni`, og deretter tas de fem første tegnene av den snudde. Svaret `rofni` kommer av å ta de fem første og så snu, `kkitam` av å ta seks tegn, og `infor` av å glemme snuingen helt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nsorter = ['aroma', 'discovery', 'aroma', 'rubinstep']\nantall = {}\nfor s in sorter:\n    antall[s] = antall.get(s, 0) + 1\nprint(len(antall), max(antall.values()))\n```",
      options: ["`3 2`", "`4 2`", "`3 3`", "`4 4`"],
      explanation: "Det er tre ulike sorter, og den høyeste telleren er 2 for `aroma`. Svaret `4 2` teller elementene i lista i stedet for nøklene i ordboka, `3 3` gjetter at høyeste teller er lik antall nøkler, og `4 4` gjør begge feilene.",
    },
    {
      question: "Hva returnerer `myst(13)`?\n\n```python\ndef myst(n):\n    if n == 0:\n        return 0\n    return n % 2 + myst(n // 2)\n```",
      options: ["3", "4", "1", "13"],
      explanation: "Funksjonen legger sammen restene ved deling på 2, altså ettallene i den binære skrivemåten: 13 er `1101`, som har tre ettall. Svaret 4 teller alle sifrene i stedet for bare ettallene, 1 er bare den første resten og oppstår om det rekursive kallet glemmes, og 13 er tallet selv.",
    },
    {
      question: "Hvilken del av prosessoren utfører selve regne- og sammenligningsoperasjonene?",
      options: ["Den aritmetisk-logiske enheten, ALU-en", "Kontrollenheten, som styrer de andre delene", "Programtelleren, som peker på neste instruksjon", "Instruksjonsregisteret, som holder instruksjonen"],
      explanation: "ALU-en er den som regner og sammenligner. Kontrollenheten bestemmer hva som skal skje, men utfører ingen aritmetikk selv, og de to registrene oppbevarer henholdsvis en adresse og en instruksjon.",
    },
    {
      question: "Hvor mange ulike symboler kan kodes med 7 bit?",
      options: ["128", "64", "256", "49"],
      explanation: "Med $n$ bit får du $2^{n}$ kombinasjoner, og $2^{7} = 128$. Verdien 64 er $2^{6}$ og 256 er $2^{8}$, altså én potens til hver side, mens 49 er $7^{2}$ — grunntall og eksponent byttet om.",
    },
    {
      question: "Et ukomprimert bilde er $80 \\times 60$ piksler med 8 bit per piksel. Hvor mange byte trengs?",
      options: ["4 800 byte", "38 400 byte", "9 600 byte", "600 byte"],
      explanation: "$80 \\times 60 = 4\\,800$ piksler, og 8 bit er nøyaktig 1 byte per piksel. Verdien 38 400 er svaret i bit, altså den glemte divisjonen på 8, 9 600 er regnet med 16 bit per piksel, og 600 har delt på 8 én gang for mye.",
    },
    {
      question: "Hvor mange bit er en IPv4-adresse?",
      options: ["32 bit", "128 bit", "64 bit", "16 bit"],
      explanation: "IPv4 har 32 bit, altså litt over fire milliarder adresser, og det er nettopp knappheten som er grunnen til IPv6 med sine 128 bit. Forvekslingen mellom de to tallene er den faste fellen i nettverksspørsmål.",
    },
    {
      question: "Du skal sende en kryptert melding til en mottaker. Hvilken nøkkel krypterer du med?",
      options: ["Mottakerens offentlige nøkkel", "Mottakerens private nøkkel", "Din egen private nøkkel", "Din egen offentlige nøkkel"],
      explanation: "Meldingen krypteres med mottakerens offentlige nøkkel, og bare mottakerens private nøkkel kan åpne den. Din egen private nøkkel brukes motsatt vei, til signatur, som alle kan kontrollere med din offentlige.",
    },
    {
      question: "Hvilket av disse bruker komprimering med tap?",
      options: ["MP3-koding av en lydfil", "Run-length-koding av like piksler", "Pakking av filer i et ZIP-arkiv", "Lagring av tekst i utvidet ASCII"],
      explanation: "MP3 kaster informasjon øret sjelden savner, og den kommer aldri tilbake. Run-length-koding og ZIP er tapsløse og gjenskaper originalen bit for bit, mens lagring i utvidet ASCII ikke er komprimering i det hele tatt.",
    },
    {
      question: "Nyquist-regelen sier at samplingsfrekvensen må være minst …",
      options: ["dobbelt så høy som høyeste frekvens i signalet", "like høy som den høyeste frekvensen i signalet", "fire ganger den høyeste frekvensen i signalet", "halvparten av den høyeste frekvensen i signalet"],
      explanation: "Faktoren er nøyaktig 2. Å kreve like høy frekvens er den vanligste fellen, fire ganger er strengere enn regelen sier, og halvparten er regelen snudd på hodet.",
    },
  ],
  'tdt4110-9-2': [
    {
      question: "Hva returnerer `myst(84, 36)`?\n\n```python\ndef myst(a, b):\n    if b == 0:\n        return a\n    return myst(b, a % b)\n```",
      options: ["12", "36", "6", "24"],
      explanation: "Dette er Euklids algoritme for største felles divisor: kallene går 84 og 36, så 36 og 12, så 12 og 0, som treffer grunntilfellet. Svaret 36 er det andre argumentet, 6 er en divisor som ikke er den største, og 24 er ingen felles divisor i det hele tatt.",
    },
    {
      question: "Hva returnerer `f(0, 1, 7)`?\n\n```python\ndef f(a, b, n):\n    if n == 0:\n        return a\n    return f(b, a + b, n - 1)\n```",
      options: ["13", "21", "8", "7"],
      explanation: "De to tallene flyttes framover som i Fibonacci-rekka, og etter sju kall står `a` på 13. Svaret 21 er verdien `b` har på samme tidspunkt, 8 er ett kall for lite, og 7 er antallet kall og ikke resultatet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nt1 = 6\nt2 = 8\nn = 1\nwhile n % t1 != 0 or n % t2 != 0:\n    n = n + 1\nprint(n)\n```",
      options: ["24", "48", "6", "14"],
      explanation: "Løkka fortsetter så lenge minst én av restene er ulik null, og stopper på det minste tallet som er delelig med både 6 og 8. Svaret 48 er produktet av tallene, 6 er det første tallet som bare deler den ene, og 14 er summen av dem.",
    },
    {
      question: "Hvilken linje hører hjemme der `#KODE1` står, når funksjonen skal utføre binærsøk?\n\n```python\nwhile imin <= imax:\n    imid = #KODE1\n```",
      options: ["`(imin + imax) // 2`", "`(imin + imax) / 2`", "`len(sortert) // 2`", "`(imax - imin) // 2`"],
      explanation: "Midtpunktet må være et heltall, siden det brukes som indeks — derfor heltallsdeling. Formen med `/` gir et flyttall som ikke kan brukes som indeks, `len(sortert) // 2` flytter seg aldri og gir uendelig løkke, og `(imax - imin) // 2` regner halve avstanden i stedet for midtpunktet.",
    },
    {
      question: "Hvordan skrives $-5$ som 8 bits toer-komplement?",
      options: ["`11111011`", "`11111010`", "`10000101`", "`01111011`"],
      explanation: "Skriv 5 som `00000101`, inverter alle bit til `11111010`, og legg til 1. Svaret `11111010` har hoppet over det siste steget, `10000101` er den eldre formen med eget fortegnsbit, og `01111011` har fortegnsbitet på null og er dermed positivt.",
    },
    {
      question: "Hvor mange bit trengs som et minimum for å gi 1 000 ulike verdier hver sin kode?",
      options: ["10 bit", "9 bit", "11 bit", "8 bit"],
      explanation: "$2^{9} = 512$ er for lite og $2^{10} = 1\\,024$ holder. Svaret 9 bit rekker ikke, 11 bit er én mer enn nødvendig når spørsmålet ber om minimum, og 8 bit gir bare 256 verdier.",
    },
    {
      question: "Hva er $C7_{16}$ skrevet binært?",
      options: ["`11000111`", "`10100111`", "`11001110`", "`10110111`"],
      explanation: "Hvert heksadesimalt siffer er nøyaktig fire bit: C er 12 og gir `1100`, og 7 gir `0111`. De tre andre bommer på det ene eller det andre nibblet, og kan avsløres ved å regne tilbake til desimal.",
    },
    {
      question: "Hva kjennetegner vannfallsmodellen?",
      options: ["Fasene følger etter hverandre, og man går ikke tilbake", "Utviklingen går i sykluser med risikovurdering hver runde", "Systemet leveres i deler som settes i drift hver for seg", "Kravene skrives om for hver iterasjon sammen med kunden"],
      explanation: "Vannfallet renner én vei, med avsluttede faser. Sykluser med risikovurdering beskriver spiralmodellen, levering i deler beskriver inkrementell utvikling, og stadig omskriving av krav hører til de smidige metodene.",
    },
    {
      question: "Hvilken kjøretidskompleksitet har binærsøk i en sortert liste med $n$ elementer?",
      options: ["$O(\\log n)$", "$O(n)$", "$O(1)$", "$O(n^{2})$"],
      explanation: "Binærsøk halverer søkeområdet hver runde, så antall runder vokser logaritmisk. $O(n)$ er sekvensielt søk, $O(1)$ ville betydd like raskt uansett størrelse, og $O(n^{2})$ er klassen til boblesortering.",
    },
    {
      question: "Hva er forutsetningen for at binærsøk skal virke?",
      options: ["At lista er sortert", "At lista inneholder tall og ikke tekst", "At elementet man leter etter, finnes i lista", "At lista er kortere enn noen tusen elementer"],
      explanation: "Uten sortering vet ikke søket hvilken halvdel det skal fortsette i. Datatypen spiller ingen rolle så lenge elementene kan sammenlignes, lengden spiller ingen rolle, og at elementet mangler er tvert imot et tilfelle søket skal håndtere ved å svare $-1$.",
    },
  ],
  'tdt4110-9-3': [
    {
      question: "Hva returnerer `myst(4907)`?\n\n```python\ndef myst(n):\n    if n < 10:\n        return n\n    return n % 10 + myst(n // 10)\n```",
      options: ["20", "16", "13", "4907"],
      explanation: "Funksjonen plukker av siste siffer med `% 10` og sender resten videre, altså tverrsummen: $4 + 9 + 0 + 7 = 20$. Svaret 16 har glemt ett av sifrene, 13 er summen av de to første, og 4907 er tallet selv.",
    },
    {
      question: "Hva returnerer `p(3, 4)`?\n\n```python\ndef p(x, n):\n    if n == 0:\n        return 1\n    return x * p(x, n - 1)\n```",
      options: ["81", "64", "12", "27"],
      explanation: "Funksjonen regner $x^{n}$, altså $3^{4} = 81$. Svaret 64 er $4^{3}$ med grunntall og eksponent byttet om, 12 er produktet av argumentene, og 27 er $3^{3}$, altså ett kall for lite.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntekst = 'PADLEKLUBBEN'\nprint(tekst[3:8])\n```",
      options: ["`LEKLU`", "`LEKLUB`", "`DLEKL`", "`LEKL`"],
      explanation: "Utsnittet starter på indeks 3 og stopper FØR indeks 8, altså fem tegn. Svaret `LEKLUB` tar med stoppindeksen, `DLEKL` starter ett tegn for tidlig, og `LEKL` mister det siste.",
    },
    {
      question: "Hva returnerer binærsøket for målet 30 i lista `[3, 8, 12, 17, 21, 30, 44]`, og hvor mange runder bruker det?",
      options: ["Indeks 5 etter 2 runder", "Indeks 5 etter 3 runder", "Indeks 6 etter 2 runder", "Indeks 4 etter 3 runder"],
      explanation: "Første runde ser på indeks 3 med verdien 17, som er for liten, så nedre grense flyttes til 4. Andre runde ser på indeks 5 og finner 30. Alternativene med tre runder legger til en runde som aldri kjøres, og de med annen indeks peker på 44 eller 21.",
    },
    {
      question: "Hva er en algoritme?",
      options: ["En entydig, endelig oppskrift som løser et problem", "Et program skrevet i et bestemt programmeringsspråk", "En matematisk formel som gir svaret i ett regnesteg", "En beskrivelse av hvordan programmet ser ut på skjermen"],
      explanation: "Både entydigheten og endeligheten er en del av definisjonen. Programmet er én mulig realisering av algoritmen og ikke det samme som den, og de to siste beskriver en formel og et grensesnitt.",
    },
    {
      question: "Omtrent hvor mange runder bruker binærsøk i verste fall på en sortert liste med 1 000 elementer?",
      options: ["Rundt 10", "Rundt 500", "Rundt 32", "Rundt 3"],
      explanation: "Hver runde halverer, og $\\log_{2} 1\\,000 \\approx 10$. Verdien 500 er halve lista, som er gjennomsnittet for sekvensielt søk, 32 er kvadratroten, og 3 er altfor lavt til å halvere seg ned fra tusen.",
    },
    {
      question: "Hva er resultatet av binæraddisjonen $1011_{2} + 0110_{2}$?",
      options: ["$10001_{2}$", "$1101_{2}$", "$10101_{2}$", "$1111_{2}$"],
      explanation: "Regn om for kontroll: $11 + 6 = 17$, som er `10001` binært. De tre andre svarer til 13, 21 og 15, og oppstår når mente over to plasser blir borte eller kommer på feil sted.",
    },
    {
      question: "Et ukomprimert bilde er $1024 \\times 768$ piksler med 24 bit per piksel. Hvor mange byte trengs?",
      options: ["2 359 296 byte", "786 432 byte", "3 145 728 byte", "18 874 368 byte"],
      explanation: "$1\\,024 \\times 768 = 786\\,432$ piksler, og 24 bit er 3 byte per piksel. Verdien 786 432 er bare antall piksler, 3 145 728 er regnet med 4 byte per piksel, og 18 874 368 er svaret i bit.",
    },
    {
      question: "Et lydsignal inneholder frekvenser opp til 15 kHz. Hva er laveste samplingsfrekvens som holder?",
      options: ["30 kHz", "15 kHz", "22,5 kHz", "7,5 kHz"],
      explanation: "Nyquist-regelen krever minst dobbelt så høy samplingsfrekvens som høyeste frekvens i signalet. De tre andre svarene er samme frekvens, halvannen gang og halvparten — de tre nære fellene i denne sjangeren.",
    },
    {
      question: "Hva skiller en MAC-adresse fra en IP-adresse?",
      options: ["MAC-adressen hører til nettverkskortet, IP-adressen til plasseringen i nettet", "MAC-adressen tildeles av leverandøren, IP-adressen av produsenten av kortet", "MAC-adressen brukes bare trådløst, mens IP-adressen bare brukes i kabel", "MAC-adressen er 32 bit lang, mens IP-adressen alltid er 128 bit lang"],
      explanation: "MAC-adressen følger maskinvaren og endrer seg ikke når maskinen flyttes, mens IP-adressen sier hvor i nettet maskinen er nå. Tildelingen går motsatt vei av det ene alternativet, begge brukes i trådløse og kablede nett, og bitbreddene stemmer ikke.",
    },
  ],
};

export default quizData_tdt4110;
