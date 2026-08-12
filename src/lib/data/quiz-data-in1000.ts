import type { QuizQuestion } from './quiz-data';

const quizData_in1000: Record<string, QuizQuestion[]> = {
  'in1000-0-1': [
    {
      question: "Hvor mange vurderinger teller på karakteren i IN1000?",
      options: ["Én: den avsluttende fire timers eksamenen på 100 poeng", "To: en midtveiseksamen og en avsluttende eksamen", "To: de obligatoriske innleveringene og den avsluttende eksamenen", "Tre: midtveis, obligatoriske innleveringer og avsluttende eksamen"],
      explanation: "IN1000 har kun én vektet vurdering. De obligatoriske innleveringene må være godkjent for at du skal få gå opp, men de gir ingen poeng. Distraktoren med midtveiseksamen er hentet fra nabofagene IN1900 og IN1010, som faktisk har en slik ordning — IN1000 har den ikke.",
    },
    {
      question: "Hvilken av de fem oppgavene er verdt flest poeng?",
      options: ["Oppgave 4, den store klassemodelleringen (47–50 poeng)", "Oppgave 3, de små funksjonene (27–31 poeng)", "Oppgave 5, funksjonene over nøstede strukturer (9–10 poeng)", "Oppgave 2, flervalget om objekter (8–9 poeng)"],
      explanation: "Oppgave 4 alene er nesten halve settet. Oppgave 3 er nest størst med 27–31 poeng og er en reell distraktor, men ligger under halvparten av Oppgave 4.",
    },
    {
      question: "Hvor stor andel av poengene ligger i oppgaver der du selv skriver kode?",
      options: ["Cirka 83 prosent (Oppgave 3, 4 og 5)", "Cirka 48 prosent (bare Oppgave 4)", "Cirka 60 prosent (Oppgave 4 og 5 til sammen)", "Cirka 17 prosent (Oppgave 1 og 2)"],
      explanation: "Oppgave 3, 4 og 5 er alle fritekst-koding og utgjør til sammen cirka 83 prosent. De 17 prosentene er skallet, altså kodeforståelse og flervalg. Distraktoren på 48 prosent er Oppgave 4 alene.",
    },
    {
      question: "Du er usikker på et flervalgsspørsmål i Oppgave 2. Hva lønner seg?",
      options: ["Krysse av på det mest sannsynlige alternativet uansett", "La feltet stå blankt, siden galt svar trekker", "La feltet stå blankt og heller bruke tida på Oppgave 4", "Krysse av på flere alternativer for å øke sjansen"],
      explanation: "Blankt og galt gir samme uttelling, nemlig null, så et kvalifisert gjett er gratis. Distraktoren om at galt svar trekker, beskriver en ordning som ikke gjelder her.",
    },
    {
      question: "Fasitsvaret på en deloppgave i Oppgave 1 er heltallet 18. Hva skal du skrive i det auto-rettede feltet?",
      options: ["18", "18.0", "'18'", "18,0"],
      explanation: "Auto-rettingen sammenligner tegn for tegn, så typen må stemme og svaret skal ikke pyntes. `18.0` er et flyttall og ikke det samme som heltallet, og anførselstegn gjør svaret til en tekst.",
    },
    {
      question: "Hva betyr det at det gis delkarakter per deloppgave?",
      options: ["At hver deloppgave vurderes for seg, uavhengig av de andre", "At du får delvis uttelling for hver deloppgave du begynner på, uansett innhold", "At poengene på en oppgave fordeles likt mellom alle deloppgavene", "At sensor setter én samlet karakter per oppgave, ikke per deloppgave"],
      explanation: "Regelen er at deloppgavene vurderes uavhengig, og du har i tillegg lov til å bruke en metode oppgaveteksten beskriver selv om du ikke skrev den. Det er ikke det samme som at alt du skriver gir poeng, og heller ikke en regel om lik fordeling.",
    },
    {
      question: "Hvor mange av de seks moderne eksamenssettene inneholder klassemodellering?",
      options: ["6 av 6", "5 av 6", "4 av 6", "3 av 6"],
      explanation: "Klassemodellering er ett av åtte temaer som står i hvert eneste moderne sett. 5 av 6 er frekvensen for filbehandling og strenger, 4 av 6 for nøstede strukturer og 3 av 6 for terminal-interaksjon.",
    },
    {
      question: "Hvilket av disse temaene er IKKE pensum til eksamen i IN1000?",
      options: ["Arv og polymorfisme mellom klasser", "Ordbøker brukt som teller og oppslagstabell", "Å lese en tekstfil linje for linje", "Referanser og hva to navn peker på"],
      explanation: "Arv og polymorfisme nevnes i pensum, men testes i praksis ikke — de hører hjemme i oppfølgeremnet IN1010. De tre andre står alle på 5 av 6 eller 6 av 6 moderne sett.",
    },
    {
      question: "Hva er kjennetegnet på grunnkonstruksjon-stilen løsningsforslagene bruker?",
      options: ["Eksplisitte løkker framfor ferdige snarveier", "Kortest mulig kode, gjerne bare én linje per funksjon", "Grundig kommenterte funksjoner med forklaring på hver linje", "Utstrakt bruk av ferdige funksjoner fra Python-biblioteket"],
      explanation: "Fasiten teller heller manuelt med en løkke enn å bruke en ferdig snarvei, fordi kurset tester mekanikken under. Kommentarer belønnes bare når de dokumenterer en antakelse.",
    },
    {
      question: "Hva kreves når en oppgave ber deg om et moteksempel til et program med logisk feil?",
      options: ["Ett konkret kall med verdier som gir galt svar", "En forklaring i ord av hva som er galt med programmet", "En rettet versjon av programmet uten feilen", "En liste over alle inndata programmet håndterer galt"],
      explanation: "Sensor ber om ett bestemt kall som demonstrerer feilen. En forklaring i ord er en halv besvarelse, og oppgaven ber ikke om at du retter koden.",
    },
    {
      question: "Hvilke hjelpemidler kan du ta med på eksamen i IN1000?",
      options: ["Alle trykte og skrevne, men ingen elektroniske", "Ingen hjelpemidler i det hele tatt", "Bare et utdelt formelark fra emneansvarlig", "Alle hjelpemidler, også PC med Python installert"],
      explanation: "Eksamen kalles hjelpemiddelfri, men i IN1000 betyr det at alt på papir er tillatt mens alt elektronisk er forbudt. Du kan derfor ta med et eget notatark, men ikke kjøre koden din.",
    },
    {
      question: "Hvilken beskrivelse passer på sjanger H?",
      options: ["Les fra brukeren i en løkke til svaret er gyldig", "Skriv en funksjon som går gjennom en nøstet liste", "Angi nøyaktig hva et lite program skriver ut", "Pek ut feilen i et program som gir galt svar"],
      explanation: "Sjanger H er terminal-interaksjon og ligger nesten alltid inne i Oppgave 4. De tre andre beskriver sjanger G, sjanger A og sjanger I.",
    },
  ],
  'in1000-1-1': [
    {
      question: "Hva er verdien av `17 // 5`?",
      options: ["3", "3.4", "2", "4"],
      explanation: "Heltallsdivisjon kaster desimalene og runder nedover, så fem går tre hele ganger opp i sytten. `3.4` er svaret på `17 / 5`, og `2` er resten `17 % 5`.",
    },
    {
      question: "Hva er verdien av `17 % 5`?",
      options: ["2", "3", "3.4", "0"],
      explanation: "Prosenttegnet gir resten etter heltallsdivisjonen: 5 ganger 3 er 15, og 17 minus 15 er 2. `3` er antall hele ganger, altså `17 // 5`.",
    },
    {
      question: "Hva skriver `print(9 / 3)` ut?",
      options: ["3.0", "3", "3.33", "9/3"],
      explanation: "Vanlig divisjon gir alltid et desimaltall, også når regnestykket går opp. I et auto-rettet svarfelt er `3` derfor galt selv om verdien er riktig regnet.",
    },
    {
      question: "La `a = \"1\"` og `b = \"2\"`. Hva skriver `print(a + b)` ut?",
      options: ["12", "3", "1 2", "'12'"],
      explanation: "Begge verdiene er strenger, så plusstegnet skjøter dem sammen i stedet for å legge dem sammen. `3` ville vært svaret hvis anførselstegnene ikke sto der, og utskriften viser aldri anførselstegn.",
    },
    {
      question: "La `a = \"1\"` og `b = \"2\"`. Hva skriver `print(int(a) + int(b))` ut?",
      options: ["3", "12", "3.0", "'3'"],
      explanation: "Her gjøres begge strengene om til heltall først, så plusstegnet legger sammen to tall. `12` er svaret uten konverteringen, og addisjon av to heltall gir heltall, ikke desimaltall.",
    },
    {
      question: "Hva skriver `print(\"ab\" * 3)` ut?",
      options: ["ababab", "ab ab ab", "abababab", "ab3"],
      explanation: "En streng ganget med et heltall gjentar strengen så mange ganger, uten mellomrom mellom. `abababab` er fire gjentakelser, ikke tre.",
    },
    {
      question: "Hva er verdien av `2 + 3 * 4`?",
      options: ["14", "20", "24", "9"],
      explanation: "Gangetegnet regnes før plusstegnet, så `3 * 4` blir 12 og deretter 2 pluss 12. `20` ville vært svaret med parentes rundt `2 + 3`.",
    },
    {
      question: "Hva er verdien av `2 ** 3 ** 2`?",
      options: ["512", "64", "12", "36"],
      explanation: "Potens regnes fra høyre mot venstre, så uttrykket er `2 ** (3 ** 2)`, altså `2 ** 9`. `64` er den vanlige fella: det er `(2 ** 3) ** 2`.",
    },
    {
      question: "Hva er verdien av `10 - 2 - 3`?",
      options: ["5", "11", "9", "15"],
      explanation: "Operatorer på samme nivå regnes fra venstre mot høyre: først `10 - 2` som er 8, så minus 3. `11` er svaret hvis man regner `2 - 3` først.",
    },
    {
      question: "Hva er verdien av `int(3.9)`?",
      options: ["3", "4", "3.9", "0.9"],
      explanation: "Konverteringen til heltall kutter desimalene bort og runder ikke av. Skal du runde av til nærmeste, trengs en annen framgangsmåte.",
    },
    {
      question: "Hva skriver `print(float(\"12\") + 3)` ut?",
      options: ["15.0", "15", "123", "12.3"],
      explanation: "Strengen blir et desimaltall, og så snart ett ledd er desimaltall, blir summen det også. `15` er derfor galt i et auto-rettet felt, og `123` ville vært skjøting av to strenger.",
    },
    {
      question: "Hva skriver `print(23 // 4, 23 % 4)` ut?",
      options: ["5 3", "5,3", "53", "5.75 3"],
      explanation: "Fire går fem hele ganger opp i 23, og resten er 3. `print` skiller de to verdiene med nøyaktig ett mellomrom, ikke med komma.",
    },
    {
      question: "La `a = 7` og `b = 2`. Hva er verdien av `a // b + a % b`?",
      options: ["4", "3", "5", "3.5"],
      explanation: "Heltallsdivisjonen gir 3 og resten gir 1, og summen er 4. `3` er bare den første delen, og `3.5` er svaret på vanlig divisjon.",
    },
    {
      question: "La `a = \"5\"` og `b = 2`. Hva skriver `print(a * b)` ut?",
      options: ["55", "10", "25", "5 5"],
      explanation: "Venstre side er en streng, så gangetegnet gjentar den to ganger. `10` ville vært svaret hvis `a` var tallet 5 — fella er at strengen aldri ble konvertert.",
    },
    {
      question: "Hva skriver `print(249.50)` ut?",
      options: ["249.5", "249.50", "249,5", "249"],
      explanation: "Python skriver et desimaltall uten avsluttende nuller som ikke bærer informasjon. Desimalskilletegnet er alltid punktum, aldri komma.",
    },
    {
      question: "Hvilken av disse verdiene er en `str`?",
      options: ["`\"42\"`", "`42`", "`42.0`", "`True`"],
      explanation: "Anførselstegnene gjør verdien til tekst, uansett hvor mye innholdet ligner et tall. De tre andre er henholdsvis heltall, desimaltall og boolsk verdi.",
    },
    {
      question: "Hva skjer hvis du skriver `print(\"Sum: \" + 12)`?",
      options: ["Programmet stopper med en feilmelding", "Det skrives ut `Sum: 12` som forventet", "Det skrives ut `Sum: ` og tallet forsvinner", "Tallet gjøres automatisk om til tekst"],
      explanation: "Plusstegnet kan ikke skjøte en streng og et heltall, og Python gjetter ikke hva du mente. Løsningen er å skrive `str(12)` rundt tallet.",
    },
    {
      question: "Hvorfor skal du aldri skrive `sum = 0` som variabel?",
      options: ["Fordi navnet da overtar for den innebygde funksjonen `sum`", "Fordi variabelnavn ikke kan være bare tre bokstaver", "Fordi Python stopper med en feilmelding på den linja", "Fordi navnet er reservert og ikke kan tilordnes"],
      explanation: "Tilordningen er lovlig og krasjer ikke der og da — den skygger bare den innebygde funksjonen, slik at et senere kall på `sum(...)` feiler et helt annet sted. Det er nettopp derfor fella er farlig.",
    },
    {
      question: "Et program leser linja `Kari 24` fra en tekstfil. Hvilken type har `24` i programmet?",
      options: ["`str`, fordi alt som leses inn utenfra er tekst", "`int`, fordi verdien bare inneholder sifre", "`float`, fordi filinnhold leses som desimaltall", "Typen avhenger av hva som står ellers på linja"],
      explanation: "Data som kommer utenfra programmet, er alltid tekst inntil du selv konverterer. Skal du regne med verdien, må du skrive `int(...)` rundt den.",
    },
    {
      question: "Hva er riktig svar i et auto-rettet felt hvis fasitverdien er heltallet 7?",
      options: ["7", "7.0", "'7'", "7,0"],
      explanation: "Auto-rettingen sammenligner tegn for tegn, så typen må stemme og svaret skal ikke pyntes. `7.0` er et desimaltall, og anførselstegn gjør svaret til tekst.",
    },
    {
      question: "Hva skriver `print(\"a\", \"b\")` ut?",
      options: ["a b", "ab", "a, b", "\"a\" \"b\""],
      explanation: "`print` setter nøyaktig ett mellomrom mellom argumenter skilt med komma, og viser strenger uten anførselstegn. `ab` ville vært resultatet av skjøting med plusstegn.",
    },
    {
      question: "Hva betyr linja `poeng = poeng + 5`?",
      options: ["Regn ut summen med dagens verdi, og la navnet peke på resultatet", "Sett opp en likning som må stemme for at programmet skal kjøre", "Lag en ny variabel som alltid er fem større enn den gamle", "Legg til 5 i alle variabler som har vært brukt tidligere"],
      explanation: "Tilordningen leses fra høyre: høyre side regnes ferdig med den verdien variabelen har nå, og navnet peker deretter på resultatet. Likhetstegnet betyr «sett navnet til», ikke «er lik».",
    },
  ],
  'in1000-1-2': [
    {
      question: "Hva er verdien av `5 <= 5`?",
      options: ["True", "False", "None", "5"],
      explanation: "«Mindre enn eller lik» slipper gjennom når verdiene er like. `5 < 5` er derimot usann — det er nettopp den forskjellen som gjør kantfeil så vanlige.",
    },
    {
      question: "Hva er verdien av `3 == \"3\"`?",
      options: ["False", "True", "None", "Programmet stopper med en feilmelding"],
      explanation: "Et heltall er aldri lik en tekst, uansett hvor likt innholdet ser ut. Sammenligningen krasjer ikke — den svarer bare usant, og det er en stille felle.",
    },
    {
      question: "La `poeng = 60`. Hva er verdien av `poeng > 60`?",
      options: ["False", "True", "Programmet stopper med en feilmelding", "Verdien 60, siden sammenligningen returnerer tallet"],
      explanation: "`>` krever strengt større, og 60 er ikke større enn 60. Med `>=` ville svaret vært sant — grenseverdien er den eneste som avslører forskjellen.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = 100\nif x > 10:\n    print(\"A\")\nelif x > 50:\n    print(\"B\")\n```",
      options: ["A", "A\nB", "B", "ingenting"],
      explanation: "I en `if`-`elif`-kjede kjøres bare den første sanne grenen. `x > 50` er også sant, men den grenen blir aldri prøvd. Hadde linje fire vært en ny `if`, ville begge blitt skrevet ut.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = 100\nif x > 10:\n    print(\"A\")\nif x > 50:\n    print(\"B\")\n```",
      options: ["A\nB", "A", "B", "ingenting"],
      explanation: "Her er det to selvstendige spørsmål, og begge er sanne, så begge blokkene kjøres. Forskjellen fra `elif`-varianten er ett ord.",
    },
    {
      question: "Hva er verdien av `True and False`?",
      options: ["False", "True", "None", "Programmet stopper med en feilmelding"],
      explanation: "`and` krever at begge sidene er sanne. `or` ville gitt sant her, siden minst én side er sann.",
    },
    {
      question: "Hva er verdien av `False or True`?",
      options: ["True", "False", "None", "1"],
      explanation: "`or` er sann når minst én side er sann. `and` ville krevd begge, og gitt usant.",
    },
    {
      question: "La `er_ledig = False`. Hva skriver `print(not er_ledig)` ut?",
      options: ["True", "False", "not False", "None"],
      explanation: "`not` snur den boolske verdien, så usant blir sant. Uttrykket skrives ut som verdien `True`, ikke som teksten.",
    },
    {
      question: "Hvordan leses uttrykket `a or b and c`?",
      options: ["`a or (b and c)` — `and` binder sterkere enn `or`", "`(a or b) and c` — det regnes fra venstre mot høyre", "`(a or b) and (a or c)` — `or` fordeles over `and`", "Rekkefølgen er udefinert og krever alltid parentes"],
      explanation: "Rekkefølgen er `not`, så `and`, så `or`, akkurat som gange før pluss i regning. Å tro at det regnes rent fra venstre er den vanligste fella her.",
    },
    {
      question: "La `x = 4`. Hva er verdien av `x > 10 or x > 2 and x < 3`?",
      options: ["False", "True", "None", "Programmet stopper med en feilmelding"],
      explanation: "`and` binder sterkest, så uttrykket er `x > 10 or (x > 2 and x < 3)`. Den indre delen er `True and False`, altså usann, og venstre side er også usann.",
    },
    {
      question: "Hva skjer hvis du skriver `if x = 3:` i stedet for `if x == 3:`?",
      options: ["Python stopper med en feilmelding på den linja", "Betingelsen blir alltid sann, og blokken kjøres", "Variabelen settes til 3, og blokken hoppes over", "Python tolker det som en sammenligning likevel"],
      explanation: "En tilordning er ikke lov som betingelse, så feilen oppdages umiddelbart. Den motsatte forvekslingen — `==` der du mente `=` — er farligere, for da skjer det ingenting i det hele tatt.",
    },
    {
      question: "Hvilken linje tester riktig om `alder` er 18 år eller eldre?",
      options: ["`if alder >= 18:`", "`if alder > 18:`", "`if alder = 18:`", "`if alder > 17.5:`"],
      explanation: "«Eller eldre» betyr at grenseverdien selv er med, og det er `>=` som slipper den gjennom. `> 18` utelukker akkurat 18-åringene, og ett likhetstegn er en tilordning.",
    },
    {
      question: "Hva er standardtesten for om `tall` er et partall?",
      options: ["`tall % 2 == 0`", "`tall // 2 == 0`", "`tall / 2 == 0`", "`tall % 2 == 1`"],
      explanation: "Resten etter divisjon med 2 er null for alle partall. `//` gir antall hele ganger, og en rest lik 1 kjennetegner oddetall.",
    },
    {
      question: "Hvordan skrives intervallet «minst 16 og under 20» i denne bokas stil?",
      options: ["`alder >= 16 and alder < 20`", "`alder >= 16 or alder < 20`", "`alder >= 16 and < 20`", "`alder >= 16 and alder <= 20`"],
      explanation: "To hele sammenligninger bundet med `and`. Med `or` ville nesten alle aldre sluppet gjennom, og en halv sammenligning etter `and` er ikke gyldig Python. Den nære distraktoren med `<= 20` er syntaktisk riktig, men slipper også inn 20-åringene — «under 20» utelukker dem.",
    },
    {
      question: "Hva er galt med `if dag == \"lordag\" or \"sondag\":`?",
      options: ["Høyre side er ingen sammenligning, så testen svikter", "Man kan ikke bruke `or` mellom to tekstverdier i Python", "Anførselstegnene mangler rundt variabelnavnet `dag`", "`or` må erstattes med `and` når man tester to alternativer"],
      explanation: "Sammenligningen må gjentas på begge sider: `dag == \"lordag\" or dag == \"sondag\"`. Slik det står, blir høyre side vurdert for seg, og testen blir alltid sann.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\ntall = 8\nif tall > 5:\n    print(\"stor\")\nelif tall > 3:\n    print(\"middels\")\nprint(\"ferdig\")\n```",
      options: ["stor\nferdig", "stor\nmiddels\nferdig", "stor", "middels\nferdig"],
      explanation: "Første gren er sann, så `elif`-grenen prøves aldri. Siste linje står uten innrykk og hører ikke til kjeden, så den kjøres uansett.",
    },
    {
      question: "Hva bestemmer hvilke linjer som hører til en `if`-blokk i Python?",
      options: ["Innrykket på linjene under betingelsen", "Klammeparenteser rundt linjene", "Et `end`-nøkkelord etter siste linje", "Kolonet, som gjelder ut resten av programmet"],
      explanation: "Python bruker innrykk der andre språk bruker klammer, og innrykket er derfor betydning og ikke pynt. Flytter du en linje inn eller ut, endrer du hva programmet gjør.",
    },
    {
      question: "En karakterkjede har `poeng >= 60` som første gren og `poeng >= 90` som andre. Hva blir konsekvensen?",
      options: ["Alle med 90 poeng får også utfallet fra den første grenen", "Programmet stopper med en feilmelding om ugyldig rekkefølge", "Den andre grenen kjøres i tillegg til den første", "Bare kandidater med under 60 poeng får riktig utfall"],
      explanation: "Den mildeste betingelsen øverst fanger alle de strengere tilfellene, og grenen under blir aldri nådd. Derfor sorteres grener fra strengest til mildest.",
    },
    {
      question: "La `navn = \"Aleksander\"`. Hva er verdien av `\"eks\" in navn`?",
      options: ["True", "False", "eks", "None"],
      explanation: "På en tekst spør `in` om delstrengen finnes et sted i strengen. Testen skiller mellom store og små bokstaver, så `\"EKS\"` ville gitt usant.",
    },
    {
      question: "Hvilken verdi bør du teste med for å avsløre en kantfeil i `if alder > 67:` når kravet er «67 eller eldre»?",
      options: ["67", "70", "18", "0"],
      explanation: "Bare grenseverdien selv avslører forskjellen mellom `>` og `>=`. Både 70 og 18 gir riktig utfall med begge variantene, og avslører dermed ingenting.",
    },
  ],
  'in1000-1-3': [
    {
      question: "Hvilke verdier gir `range(4)`?",
      options: ["0, 1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4", "1, 2, 3"],
      explanation: "Rekka begynner på 0 og tar ikke med stoppverdien, så `range(N)` gir nøyaktig N verdier. De tre distraktorene er de tre vanligste av-med-én-variantene.",
    },
    {
      question: "Hvor mange runder kjører `for i in range(2, 6):`?",
      options: ["4", "5", "3", "6"],
      explanation: "Antall runder er stoppverdien minus startverdien. `5` er svaret hvis man tror stoppverdien er med, og `6` er selve stoppverdien.",
    },
    {
      question: "Hvor mange runder kjører `for i in range(3, 3):`?",
      options: ["0", "1", "3", "2"],
      explanation: "Når start og stopp er like, er rekka tom og blokken kjøres aldri. Det er ikke en feil — en løkke som ikke kjører, skriver bare ingenting.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntotal = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)\n```",
      options: ["10", "15", "6", "4"],
      explanation: "Summen av 1, 2, 3 og 4. `15` er svaret hvis man tar med 5, altså tror stoppverdien er med, og `6` er summen av 1, 2 og 3.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntotal = 0\nfor i in range(4):\n    total = total + i * 2\nprint(total)\n```",
      options: ["12", "20", "24", "6"],
      explanation: "Verdiene er 0, 2, 4 og 6, som gir 12. `20` er svaret hvis man tror rekka er 1 til 4, og `24` hvis man tror den er 0 til 4.",
    },
    {
      question: "Hvor står startverdien i akkumulatormønsteret?",
      options: ["Før løkka, slik at den ikke nullstilles hver runde", "Inne i løkka, slik at den settes på nytt hver runde", "Etter løkka, rett før resultatet skrives ut", "Startverdien er valgfri og kan sløyfes helt"],
      explanation: "Mønsteret har tre faste steg: startverdi før, oppdatering inne i, bruk etter. Settes startverdien inne i løkka, nullstilles den hver runde og svaret blir bare siste bidrag.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = 0\nfor i in range(1, 11):\n    if i % 3 == 0:\n        antall = antall + 1\nprint(antall)\n```",
      options: ["3", "4", "10", "9"],
      explanation: "Tallene 3, 6 og 9 er delelige med 3. `4` er svaret hvis man feilaktig tar med 12 eller teller 0 som delelig, og `10` er antall runder i løkka.",
    },
    {
      question: "Når sjekkes betingelsen i en `while`-løkke?",
      options: ["Før hver runde, også aller første gang", "Etter hver runde, så blokken kjører minst én gang", "Bare første gang, og deretter ikke mer", "Både før og etter hver eneste runde"],
      explanation: "Betingelsen sjekkes før, så en `while` kan kjøre null ganger hvis den er usann fra start. Det er også derfor sluttverdien godt kan ligge forbi grensen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nn = 20\ns = 0\nwhile n > 1:\n    s = s + n\n    n = n // 2\nprint(s, n)\n```",
      options: ["37 1", "38 0", "18 1", "37 0"],
      explanation: "Rundene legger til 20, 10, 5 og 2, og `n` ender på 1 fordi betingelsen svikter der. `18 1` er svaret hvis man legger til den halverte verdien i stedet for den gamle.",
    },
    {
      question: "Hva kjennetegner en uendelig løkke?",
      options: ["Ingen linje i kroppen gjør betingelsen usann", "Betingelsen inneholder en sammenligning med `>=`", "Løkka mangler kolon på slutten av første linje", "Løkkevariabelen brukes ikke inne i kroppen"],
      explanation: "En `while` stopper bare hvis noe inne i den endrer det betingelsen spør om. Manglende kolon gir en syntaksfeil med en gang, ikke en uendelig løkke.",
    },
    {
      question: "Hvor mange linjer skriver dette ut?\n\n```python\nfor i in range(2):\n    for j in range(3):\n        print(i, j)\n```",
      options: ["6 linjer", "5 linjer", "3 linjer", "9 linjer"],
      explanation: "Med faste grenser ganges antallet: to ytre runder ganger tre indre. `5` er svaret hvis man legger sammen i stedet for å gange.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntotal = 0\nfor i in range(4):\n    for j in range(i):\n        total = total + 1\nprint(total)\n```",
      options: ["6", "16", "10", "12"],
      explanation: "Den indre løkka kjører 0, 1, 2 og 3 ganger, altså 6 til sammen. `16` er svaret hvis man tror begge løkkene kjører fire runder hver.",
    },
    {
      question: "Hvor mange indre runder gir `for j in range(i):` når `i` er 0?",
      options: ["0", "1", "Løkka hopper til neste verdi av `i` etter én runde", "Programmet stopper med en feilmelding"],
      explanation: "`range(0)` er tom, så den indre blokken kjøres aldri i den ytre runden. Å tro at den kjører én gang er den vanligste feilen i nøstede sporingsoppgaver.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = 1\nb = 2\nfor i in range(3):\n    a = 2 * a + b\n    b = b + 1\nprint(a)\n```",
      options: ["26", "33", "20", "14"],
      explanation: "`a` bruker den gamle verdien av `b`, fordi `b` oppdateres på neste linje. `33` er svaret hvis de to linjene bytter plass — samme regnestykke, motsatt rekkefølge.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = 1\nb = 2\nfor i in range(3):\n    b = b + 1\n    a = 2 * a + b\nprint(a)\n```",
      options: ["33", "26", "23", "17"],
      explanation: "Her økes `b` først, så `a` bruker den nye verdien hver runde. `26` er svaret når linjene står i motsatt rekkefølge.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = 3\ny = 1\nfor i in range(3):\n    x = x + y\n    y = x - y\nprint(x, y)\n```",
      options: ["11 7", "11 4", "7 4", "10 7"],
      explanation: "Andre linje bruker den nye `x`, siden den allerede er oppdatert i samme runde. `11 4` er svaret hvis man regner `y` med den gamle `x`.",
    },
    {
      question: "Hvilke verdier gir `range(0, 10, 3)`?",
      options: ["0, 3, 6, 9", "0, 3, 6, 9, 12", "3, 6, 9", "0, 1, 2, 3"],
      explanation: "Rekka begynner på start og hopper tre om gangen, men stopper før den når stoppverdien. `12` ville vært forbi 10, og startverdien er alltid med.",
    },
    {
      question: "Hvilke verdier gir `range(5, 0, -1)`?",
      options: ["5, 4, 3, 2, 1", "5, 4, 3, 2, 1, 0", "4, 3, 2, 1, 0", "0, 1, 2, 3, 4"],
      explanation: "Med negativt steg telles det nedover, startverdien er med og stoppverdien er ikke. Derfor kommer aldri 0 med.",
    },
    {
      question: "Hva avgjør om en linje kjøres hver runde i en løkke?",
      options: ["Innrykket foran linja", "Rekkefølgen linjene står i", "Om linja inneholder løkkevariabelen", "Om linja står før eller etter `print`"],
      explanation: "Innrykk er betydning i Python, ikke pynt: de innrykkede linjene under `for` utgjør kroppen. Rekkefølgen avgjør noe annet, nemlig hvilken verdi en oppdatering ser.",
    },
    {
      question: "Hva gir `for tegn in \"sol\":` av runder?",
      options: ["3, én per tegn", "1, siden strengen er ett element", "4, siden det telles fra 0", "0, siden en tekst ikke kan gjennomløpes"],
      explanation: "En `for`-løkke over en tekst går tegn for tegn, så antall runder er antall tegn. Løkkevariabelen holder ett enkelt tegn om gangen.",
    },
    {
      question: "Hva skjer hvis `print(total)` står inne i løkka i stedet for etter den?",
      options: ["Det skrives én linje per runde, med verdien underveis", "Det skrives fortsatt bare én linje, med sluttverdien", "Programmet stopper med en feilmelding om innrykk", "Verdien nullstilles etter hver utskrift"],
      explanation: "Alt som står innrykket under `for`, kjøres hver runde — også en utskrift. Det er ikke en feil i seg selv, men det er sjelden det oppgaven ber om.",
    },
    {
      question: "Hva er antall runder i `range(1, 26)`?",
      options: ["25", "26", "24", "27"],
      explanation: "Stoppverdien minus startverdien: 26 minus 1. Det er nettopp derfor man skriver `range(1, 26)` når man vil ha verdiene 1 til og med 25.",
    },
    {
      question: "Hvilken verdi har `n` etter løkka `while n > 1:` som halverer `n` fra 8?",
      options: ["1", "0", "2", "Variabelen finnes ikke lenger"],
      explanation: "Løkka avsluttes idet betingelsen svikter, og variabelen beholder den verdien den hadde da. Den går ikke videre til 0, og den forsvinner ikke.",
    },
    {
      question: "Du skal telle hvor mange av tallene fra 1 til 20 som er delelige med 4. Hvilken betingelse hører hjemme inne i løkka?",
      options: ["`if i % 4 == 0:`", "`if i // 4 == 0:`", "`if i / 4 == 0:`", "`if i % 4 == 4:`"],
      explanation: "Resten etter divisjon med 4 er null nettopp for de tallene som er delelige med 4. `//` gir antall hele ganger, og en rest kan aldri bli lik deleren.",
    },
  ],
  'in1000-2-1': [
    {
      question: "Hva skjer når `def hils(navn):` leses av Python?",
      options: ["Navnet blir kjent, men kroppen kjøres ikke ennå", "Kroppen kjøres én gang med parameteren satt til None", "Funksjonen kjøres og resultatet lagres i navnet", "Python venter på at brukeren skriver inn et navn"],
      explanation: "Definisjonen noterer bare oppskriften; det er kallet som kjører kroppen. Skillet er første steg i å spore et program med funksjoner.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef dobbel(tall):\n    return tall * 2\nprint(dobbel(5) + 1)\n```",
      options: ["11", "10", "12", "None"],
      explanation: "Kallet regnes ut først og gir 10, deretter legges 1 til. `10` er svaret hvis man glemmer plusstegnet utenfor kallet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(x):\n    y = x * 2\nprint(f(5))\n```",
      options: ["None", "10", "5", "Programmet stopper med en feilmelding"],
      explanation: "Funksjonen mangler `return`, så den gir `None` tilbake selv om den regnet riktig. Feilen krasjer ikke der den ble skrevet, men et helt annet sted der noen prøver å regne med svaret.",
    },
    {
      question: "Hva er forskjellen på `return` og `print` i en funksjon?",
      options: ["`return` gir en verdi tilbake, `print` viser den bare på skjermen", "`return` viser verdien på skjermen, mens `print` lagrer den i en variabel", "De gjør det samme, men `return` virker bare på tallverdier", "`return` kan brukes flere ganger, `print` bare én gang"],
      explanation: "Ber oppgaven om at funksjonen «returnerer» noe, skal det stå `return` — ellers gir kallet `None`, og de deloppgavene som bygger videre, faller sammen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef vis(fornavn, etternavn):\n    print(fornavn, etternavn)\nvis(\"Berg\", \"Ada\")\n```",
      options: ["Berg Ada", "Ada Berg", "fornavn etternavn", "Programmet stopper med en feilmelding"],
      explanation: "Argumentene fylles inn i rekkefølge, og Python vet ingenting om hva navnene betyr. Bytter du om argumentene, får du ingen feilmelding — bare feil svar.",
    },
    {
      question: "Hva skjer med resten av funksjonskroppen når en `return` kjøres?",
      options: ["Funksjonen avsluttes umiddelbart, resten hoppes over", "Resten kjøres, men returverdien er allerede låst", "Bare linjene i samme innrykkede blokk hoppes over", "Løkka fullføres først, deretter avsluttes funksjonen"],
      explanation: "Det er nettopp denne egenskapen som gjør tidlig retur mulig: du slutter å lete idet du vet svaret. Distraktoren om at løkka fullføres, er den vanligste misforståelsen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef karakter(poeng):\n    if poeng >= 90:\n        return \"A\"\n    elif poeng >= 60:\n        return \"C\"\n    return \"F\"\nprint(karakter(72))\n```",
      options: ["C", "A", "F", "AC"],
      explanation: "Den andre grenen er den første som er sann, og `return` avslutter funksjonen der. Siste linje nås bare hvis ingen av grenene traff.",
    },
    {
      question: "I mønsteret «er alle …?» — hvor skal `return True` stå?",
      options: ["Etter løkka, når ingen moteksempler ble funnet", "Inne i løkka, i `else`-grenen til testen på elementet", "Inne i løkka, rett før `return False`", "Både inne i og etter løkka, for sikkerhets skyld"],
      explanation: "Svaret «alle oppfyller kravet» kan først avgjøres når hele samlingen er sett. Står `return True` inne i løkka, avgjør det aller første elementet hele svaret — feilkode #7.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(t):\n    for c in t:\n        if c == \"x\":\n            return False\n    return True\nprint(f(\"abc\"), f(\"axc\"))\n```",
      options: ["True False", "False True", "True True", "False False"],
      explanation: "Første tekst har ingen `x` og går helt gjennom løkka; andre tekst treffer på andre tegn og returnerer straks. Distraktorene svarer til at de to `return`-ene byttes om.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(t):\n    for c in t:\n        if c == \"x\":\n            return False\n        else:\n            return True\nprint(f(\"ax\"))\n```",
      options: ["True", "False", "None", "True False"],
      explanation: "Begge `return`-ene står inne i løkka, så det aller første tegnet avgjør. Teksten inneholder en `x`, men den blir aldri undersøkt — dette er feilkode #7 i sin reneste form.",
    },
    {
      question: "Hva returnerer et flagg-med-tidlig-retur-mønster for tom inndata?\n\n```python\ndef f(t):\n    for c in t:\n        if c == \" \":\n            return False\n    return True\nprint(f(\"\"))\n```",
      options: ["True", "False", "None", "Programmet stopper med en feilmelding"],
      explanation: "Løkka kjører null ganger over tom inndata, så programmet går rett til linja etter den. At mønsteret håndterer det tomme tilfellet av seg selv, er verdt å kontrollere — det er feilkode #6.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef del_og_rest(a, b):\n    return a // b, a % b\nhele, rest = del_og_rest(17, 5)\nprint(hele, rest)\n```",
      options: ["3 2", "17 5", "3.4 2", "(3, 2)"],
      explanation: "Funksjonen gir to verdier, som pakkes ut i to navn. Parentesformen er det du får hvis du tar imot begge med ett navn i stedet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef mm(a, b):\n    return a, b\nprint(mm(4, 4))\n```",
      options: ["(4, 4)", "Verdiene `4` og `4`, skrevet med ett mellomrom mellom", "4", "8"],
      explanation: "Uten utpakking vises de to returverdiene som et par i parentes. Med `x, y = mm(4, 4)` og `print(x, y)` ville du fått `4 4`.",
    },
    {
      question: "Hva må stemme når du pakker ut flere returverdier?",
      options: ["Antall navn må være likt antall returverdier", "Navnene må hete det samme som parameterne i definisjonen", "Verdiene må ha samme type", "Utpakkingen må skje inne i en funksjon"],
      explanation: "To verdier og tre navn gir en feilmelding, og det motsatte likeså. Typene kan derimot være helt ulike.",
    },
    {
      question: "Hvorfor må definisjonen stå før kallet i programmet?",
      options: ["Python leser filen ovenfra og kjenner ikke navn den ikke har sett", "Fordi funksjoner må kompileres før de kan kjøres", "Fordi kallet ellers ville brukt en tom og ubestemt parameterliste", "Det må den ikke — rekkefølgen er likegyldig"],
      explanation: "Kaller du for tidlig, får du `NameError`. Merk at én funksjon godt kan kalle en annen inne i kroppen sin uansett rekkefølge — kroppen kjøres jo ikke før begge er lest.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef sum_til(n):\n    total = 0\n    for i in range(1, n + 1):\n        total = total + i\n    return total\nprint(sum_til(4))\n```",
      options: ["10", "Verdien `6`, altså summen av tallene fra 1 til 3", "4", "0"],
      explanation: "Uten `n + 1` i `range` ville den siste verdien falt utenfor, og svaret blitt 6. Det er feilkode #5 — av-med-én.",
    },
    {
      question: "Hva kalles verdien i `def hils(navn):`, altså `navn`?",
      options: ["En parameter", "Et argument", "En returverdi", "En lokal konstant"],
      explanation: "Parameteren er navnet i definisjonen; argumentet er verdien som sendes inn ved kallet. De to ordene beskriver hver sin side av samme overføring.",
    },
    {
      question: "Hva er et godt argument for å skrive en hjelpefunksjon på eksamen?",
      options: ["Deloppgaver vurderes for seg, så en hjelpefunksjon som virker gir uttelling", "Hjelpefunksjoner gir automatisk full uttelling på hele oppgaven", "Sensor krever minst én hjelpefunksjon per klasse", "Koden kjører raskere når den deles i flere funksjoner"],
      explanation: "Du får delkarakter per deloppgave, og du har uttrykkelig lov til å legge til egne hjelpefunksjoner så lenge du kommenterer kort hva de gjør.",
    },
    {
      question: "Du skal svare om det finnes minst ett tegn av en bestemt sort. Hvor står `return True`?",
      options: ["Inne i løkka, ved første treff", "Etter løkka, når alle er sjekket", "I en `else`-gren etter `if`-en", "Rett før løkka, som startverdi"],
      explanation: "Mønsteret er speilvendt av «er alle …?»: det svaret som kan avgjøres av ett enkelt element, hører inne i løkka, og det som krever hele samlingen, hører etter.",
    },
    {
      question: "Hva betyr det at en funksjon er boolsk?",
      options: ["Den returnerer `True` eller `False`, og kan brukes direkte som betingelse", "Den tar bare imot `True` eller `False` som argumenter ved kallet", "Den kan bare inneholde `if`-setninger, ikke løkker", "Den skriver ut `True` eller `False` på skjermen"],
      explanation: "Nettopp fordi returverdien er boolsk, kan du skrive `if er_vokal(tegn):` uten å lagre svaret først. Det er den formen fagets løsningsforslag bruker.",
    },
  ],
  'in1000-2-2': [
    {
      question: "Hva skriver dette ut?\n\n```python\nx = 5\n\ndef f():\n    x = 10\n    return x\n\nprint(f(), x)\n```",
      options: ["10 5", "10 10", "5 5", "5 10"],
      explanation: "Tilordningen inne i funksjonen lager en ny, lokal `x`, så den globale er uendret. `10 10` er svaret hvis man tror funksjonen skriver over utsiden — det er feilkode #12.",
    },
    {
      question: "Hva lager en tilordning som `x = 10` inne i en funksjon?",
      options: ["En ny lokal variabel, uansett hva som finnes utenfor", "En endring i den globale variabelen som har samme navn", "En kopi som skrives tilbake når funksjonen returnerer", "En feilmelding hvis navnet finnes utenfor fra før"],
      explanation: "Regelen er absolutt: likhetstegn inne i en funksjon gir alltid et lokalt navn. Det er derfor du trygt kan bruke `i` og `total` i hver eneste funksjon.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef dobbel(tall):\n    tall = tall * 2\n    return tall\n\nx = 5\nprint(dobbel(x), x)\n```",
      options: ["10 5", "10 10", "5 10", "5 5"],
      explanation: "Parameteren er en lokal variabel som fikk verdien 5; den globale `x` kan ikke endres av funksjonen. For tall og tekst gjelder dette alltid.",
    },
    {
      question: "Kan en funksjon lese en global variabel den ikke selv tilordner?",
      options: ["Ja, hvis den ikke har en lokal med samme navn", "Nei, en funksjon ser aldri ut av sitt eget lokale scope", "Bare hvis variabelen er laget før funksjonen defineres", "Bare hvis variabelen sendes inn som argument"],
      explanation: "Lesing er tillatt; det er tilordning som lager et lokalt navn. Men i dette faget skal funksjonen likevel ta imot det den trenger som parameter.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfarge = \"rod\"\n\ndef vis():\n    farge = \"bla\"\n    print(\"inne:\", farge)\n\nvis()\nprint(\"ute:\", farge)\n```",
      options: ["inne: bla\nute: rod", "inne: bla\nute: bla", "inne: rod\nute: rod", "inne: rod\nute: bla"],
      explanation: "Den lokale skygger den globale mens funksjonen kjører, men skyggingen forsvinner etterpå. Distraktoren «bla/bla» er nøyaktig feilkode #12.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef nullstill(verdi):\n    verdi = 0\n    return verdi\n\npoeng = 42\nnullstill(poeng)\nprint(poeng)\n```",
      options: ["42", "0", "None", "Programmet stopper med en feilmelding"],
      explanation: "Returverdien ble regnet ut og kastet, fordi kallet ikke står på høyre side av et likhetstegn. Riktig form er `poeng = nullstill(poeng)` — og feilen er stum.",
    },
    {
      question: "Hvilken form kommuniserer riktig mellom hovedprogram og funksjon?",
      options: ["`teller = opp(teller)`", "`opp(teller)`", "`opp()` som endrer den globale direkte", "`teller == opp(teller)`"],
      explanation: "Parameter inn, returverdi ut — og hovedprogrammet må ta imot svaret. Uten likhetstegnet skjer ingenting synlig, og med to likhetstegn er det en sammenligning.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = 2\ny = 3\n\ndef f(x):\n    y = x * 2\n    return y\n\ndef g():\n    return x + y\n\nprint(f(10), g())\n```",
      options: ["20 5", "20 22", "20 25", "5 5"],
      explanation: "`f` lager både en lokal `x` og en lokal `y`, så de globale er uendret når `g` leser dem. `20 22` er svaret hvis man tror `f` skrev over den globale `y`.",
    },
    {
      question: "Hva er en lokal variabel?",
      options: ["En variabel laget inne i en funksjon, som ikke lever videre", "En variabel som bare kan holde på tall, tekst og boolske verdier", "En variabel som må sendes inn som argument for å virke", "En variabel som er synlig i alle funksjoner i samme fil"],
      explanation: "Nettopp fordi den forsvinner, kan hver funksjon ha sine egne tellere uten å kollidere. Prøver du å bruke den utenfor, får du `NameError`.",
    },
    {
      question: "Hvilken feilmelding får du når du bruker en lokal variabel utenfor funksjonen den ble laget i?",
      options: ["`NameError`", "`UnboundLocalError`", "`ValueError`", "`IndentationError`"],
      explanation: "`NameError` betyr at navnet ikke finnes i det hele tatt. `UnboundLocalError` er den nære slektningen: navnet er lokalt, men ennå ikke tilordnet.",
    },
    {
      question: "Hvorfor stopper dette programmet med `UnboundLocalError`?\n\n```python\npoeng = 0\n\ndef legg_til(antall):\n    poeng = poeng + antall\n\nlegg_til(5)\n```",
      options: ["Ett likhetstegn gjør `poeng` lokalt i hele kroppen, også på høyre side", "Fordi funksjonen mangler en `return`-setning på den siste linja si", "Fordi den globale variabelen er satt til null før kallet", "Fordi argumentet og parameteren har forskjellige navn"],
      explanation: "Tilordningen gjelder for hele funksjonen, ikke bare fra den linja og nedover, så funksjonen ser aldri etter den globale. Løsningen er parameter inn og returverdi ut.",
    },
    {
      question: "Hva er hovedgrunnen til at funksjoner ikke bør hente data fra globale variabler?",
      options: ["Funksjonen kan da ikke gjenbrukes med andre data", "Globale variabler bruker mer minne enn de lokale gjør", "Python stopper med en advarsel når det skjer", "Returverdien blir da alltid `None`"],
      explanation: "En funksjon som henter fra utsiden, kan bare brukes i akkurat den ene situasjonen, og den kan ikke leses alene. Det gir sjelden full uttelling selv om svaret er riktig.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nmva = 0.25\n\ndef med_mva(pris):\n    return pris + pris * mva\n\nprint(med_mva(100))\n```",
      options: ["125.0", "100.0", "125", "None"],
      explanation: "Funksjonen leser den globale satsen, og resultatet blir et desimaltall fordi satsen er det. `125` uten desimal er derfor galt i et auto-rettet felt.",
    },
    {
      question: "Hva betyr det at en lokal variabel «skygger» en global?",
      options: ["Bare den lokale er synlig inne i funksjonen", "Den globale settes til samme verdi som den lokale ved retur", "Den globale blir slettet når funksjonen kalles", "Begge kan brukes, men den globale får forrang"],
      explanation: "Skyggingen varer bare mens funksjonen kjører, og gjelder hele kroppen — også linjer før tilordningen. Den globale er uberørt etterpå.",
    },
    {
      question: "Hva er første spørsmål i scope-sjekklista når du sporer en funksjon?",
      options: ["Finnes det et likhetstegn med dette navnet inne i funksjonen?", "Er variabelen laget i hovedprogrammet før funksjonen ble definert?", "Har funksjonen en `return`-setning?", "Hvor mange argumenter tar funksjonen?"],
      explanation: "Ett likhetstegn er nok til at navnet er lokalt i hele kroppen. Er svaret nei, og navnet ikke er en parameter, leser funksjonen den globale.",
    },
    {
      question: "Hva sendes inn når du skriver `dobbel(x)`?",
      options: ["Verdien til `x`, ikke navnet", "Selve variabelen `x`, slik at funksjonen kan endre den", "En referanse til hovedprogrammets scope", "Både navnet og verdien, slik at begge kan brukes"],
      explanation: "Funksjonen får aldri vite hva variabelen din het, og oppfører seg helt likt om du skriver `dobbel(5)`. Det er derfor den ikke kan endre den.",
    },
    {
      question: "Hva er en sidevirkning?",
      options: ["Noe funksjonen gjør utover å returnere en verdi", "En verdi funksjonen returnerer ved siden av selve hovedsvaret", "En lokal variabel som ikke blir brukt", "En feil som oppstår først ved andre gangs kall"],
      explanation: "Utskrift til skjermen er en typisk sidevirkning. I dette faget skal funksjonene helst bare ta imot, regne ut og returnere — det er den formen som er lettest å få uttelling for.",
    },
    {
      question: "Hvilken senere felle i faget bygger på nøyaktig samme mekanisme som scope-regelen?",
      options: ["`self`-fella: `x = 5` i en konstruktør lagrer ingenting i objektet", "Av-med-én-feilen i `range`, fordi stoppverdien ikke er med i rekka", "Å glemme `.rstrip()` når man leser en fil linje for linje", "Å forveksle heltall og tekst når man leser inn data"],
      explanation: "En konstruktør som skriver `x = 5`, lager en lokal variabel som forsvinner ved retur — akkurat som her. Riktig form er `self._x = 5`, og dette er feilkode #1.",
    },
  ],
  'in1000-3-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\nruter = [\"31\", \"20\", \"37\"]\nprint(ruter[1])\n```",
      options: ["20", "31", "37", "en feilmelding"],
      explanation: "Indeks 1 er det **andre** elementet, fordi tellingen starter på null. `31` er svaret hvis man leser indeks som telling; `37` er indeks 2.",
    },
    {
      question: "En liste har 6 elementer. Hva er den største lovlige indeksen?",
      options: ["5", "6", "7", "0"],
      explanation: "Lengden er 6, men indeksene går fra 0 til `len(liste) - 1`, altså til 5. Å bruke 6 gir `IndexError`, og det er feilkode #5 i sin reneste form.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nmaalinger = [4, 7, 12]\nprint(maalinger)\n```",
      options: ["[4, 7, 12]", "4 7 12", "[4,7,12]", "(4, 7, 12)"],
      explanation: "`print` av hele lista viser hakeparenteser, komma **og** ett mellomrom etter hvert komma. `4 7 12` er svaret hvis man skriver ut elementene enkeltvis i stedet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [2, 4, 6]\nprint(tall[-1] + tall[0])\n```",
      options: ["8", "6", "10", "2"],
      explanation: "`tall[-1]` er siste element, altså 6, og `tall[0]` er 2. Svaret `10` kommer av å lese `-1` som nest siste; `6` av å lese `tall[0]` som elementet på plass én.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = [1, 2]\na.append([3, 4])\nprint(a)\n```",
      options: ["[1, 2, [3, 4]]", "[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[1, 2, 3]"],
      explanation: "`append` legger til **ett** element. Er elementet en liste, havner hele lista inn som ett element, med egne hakeparenteser. `[1, 2, 3, 4]` er det du får med `a + [3, 4]`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = [1, 2]\nb = [3, 4]\nprint(a + b)\n```",
      options: ["[1, 2, 3, 4]", "[4, 6]", "[1, 2, [3, 4]]", "[[1, 2], 3, 4]"],
      explanation: "`+` skjøter to lister til en ny med alle elementene etter hverandre. `[4, 6]` er svaret hvis man tror plusstegnet legger sammen parvis, noe det ikke gjør.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\npriser = [30, 45, 20]\ntotal = 0\nfor pris in priser:\n    total = total + pris\nprint(total)\n```",
      options: ["95", "75", "50", "3"],
      explanation: "Akkumulatormønsteret legger sammen alle tre prisene. `75` er svaret hvis man hopper over det første elementet, og `3` er antall elementer, ikke summen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndyr = [\"rev\", \"elg\"]\nfor i in range(len(dyr)):\n    print(i, dyr[i])\n```",
      options: ["0 rev\n1 elg", "1 rev\n2 elg", "rev 0\nelg 1", "0 elg\n1 rev"],
      explanation: "`range(len(dyr))` gir 0 og 1 — nøyaktig de lovlige indeksene. `print(i, dyr[i])` skriver indeksen først og elementet etter, skilt av ett mellomrom.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nruter = [\"20\", \"31\"]\nprint(20 in ruter)\n```",
      options: ["False", "True", "20", "en feilmelding"],
      explanation: "Tallet `20` og teksten `\"20\"` er ikke samme verdi, så `in`-testen finner ingenting. `True` er svaret hvis man ser bort fra anførselstegnene — samme type-forveksling som feilkode #3.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntomme = []\nantall = 0\nfor e in tomme:\n    antall = antall + 1\nprint(antall)\n```",
      options: ["0", "1", "en feilmelding", "None"],
      explanation: "En løkke over en tom liste kjører **null** runder, så telleren beholder startverdien. Det er derfor tellermønsteret tåler tomme lister uten en eneste ekstra sjekk.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [4, 11, 7, 20]\nstore = []\nfor t in tall:\n    if t > 9:\n        store.append(t)\nprint(store)\n```",
      options: ["[11, 20]", "[4, 7]", "[11, 20, 7]", "[1, 3]"],
      explanation: "Bygg-en-ny-liste-mønsteret tar med bare de som er større enn 9. `[4, 7]` er svaret hvis man snur betingelsen, og `[1, 3]` er indeksene til de riktige elementene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nplasser = [12, 8, 5]\nplasser[1] = 99\nprint(plasser)\n```",
      options: ["[12, 99, 5]", "[99, 8, 5]", "[12, 8, 99]", "[12, 8, 5, 99]"],
      explanation: "Tilordning til `plasser[1]` bytter ut det **andre** elementet. `[12, 8, 5, 99]` er det du får av `append`, som legger til bakerst i stedet for å bytte ut.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nliste = [10, 20, 30, 40, 50]\nny = []\nfor i in range(0, len(liste), 2):\n    ny.append(liste[i])\nprint(ny)\n```",
      options: ["[10, 30, 50]", "[20, 40]", "[10, 20, 30]", "[0, 2, 4]"],
      explanation: "Steget 2 treffer indeksene 0, 2 og 4. `[20, 40]` er elementene på oddetallsindeks, og `[0, 2, 4]` er indeksene selv, ikke verdiene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nverdier = [4, 8, 15]\nresultat = []\nfor i in range(len(verdier) - 1):\n    resultat.append(verdier[i + 1] - verdier[i])\nprint(resultat)\n```",
      options: ["[4, 7]", "[4, 7, 15]", "[-4, -7]", "[4, 8, 15]"],
      explanation: "Løkka regner avstanden til neste element, og tre tall gir to avstander. Minus én i grensen er nødvendig fordi `verdier[i + 1]` ellers ville pekt utenfor lista.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nblandet = [1, \"to\", 3.0]\nprint(blandet)\n```",
      options: ["[1, 'to', 3.0]", "[1, \"to\", 3.0]", "[1, to, 3.0]", "[1, 'to', 3]"],
      explanation: "Python viser tekster inne i en liste med **enkle** anførselstegn, og beholder `3.0` som desimaltall. I et auto-rettet felt er alle tre detaljene forskjellen på rett og galt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nliste = [5]\nprint(len(liste), liste[0], liste[-1])\n```",
      options: ["1 5 5", "1 5 1", "5 5 5", "1 0 5"],
      explanation: "Lista har ett element, så lengden er 1, og både første og siste element er det samme tallet. `1 5 1` er svaret hvis man leser `liste[-1]` som en indeks i stedet for et element.",
    },
    {
      question: "Hva gjør `ledige.append(4)`?",
      options: ["Legger tallet 4 bakerst i lista `ledige`", "Lager en ny liste med 4 lagt til bakerst", "Bytter ut det første elementet i `ledige` med 4", "Setter inn tallet 4 fremst i lista `ledige`"],
      explanation: "`append` endrer lista på stedet og legger alltid til bakerst. Alternativet om en ny liste beskriver `ledige + [4]`, som lar den opprinnelige lista være urørt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nledige = [1]\nsvar = ledige.append(4)\nprint(svar)\n```",
      options: ["None", "[1, 4]", "4", "1"],
      explanation: "`append` endrer lista, men **returnerer ingenting**. Derfor er `svar` lik `None`. Å skrive `ledige = ledige.append(4)` er den vanlige varianten av samme feil, og den ødelegger hele lista.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n```",
      options: ["[1, 2, 3]", "[1, 2]", "[3]", "[1, 2, [3]]"],
      explanation: "`b = a` lager ikke en kopi, men et navn til på **samme** liste, så endringen sees begge veier. `[1, 2]` er svaret hvis man tror likhetstegnet kopierer — det er feilkode #15.",
    },
    {
      question: "En funksjon starter med `beste = tallene[0]`. Hva skjer hvis den kalles med en tom liste?",
      options: ["Programmet stopper med `IndexError`", "Funksjonen returnerer `None` av seg selv", "Funksjonen returnerer tallet 0 som startverdi", "Løkka hopper over, og `beste` blir stående tom"],
      explanation: "Indeks 0 finnes ikke i en tom liste, så programmet stopper allerede på den linja. Det er feilkode #6, og løsningen er en tomsjekk øverst i funksjonen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [5, 3, 8, 1]\nresultat = []\ni = 0\nwhile i < len(tall):\n    resultat.append(tall[i])\n    i = i + 2\nprint(resultat)\n```",
      options: ["[5, 8]", "[5, 3, 8, 1]", "[3, 1]", "[5, 8, 1]"],
      explanation: "`i` øker med 2, så bare indeks 0 og 2 besøkes; ved `i = 4` er betingelsen usann. `[3, 1]` er elementene på oddetallsindeks, som løkka aldri kommer til.",
    },
    {
      question: "Hvorfor er `beste = 0` en dårlig startverdi når du skal finne den største verdien i en liste?",
      options: ["Fordi funksjonen svarer 0 når alle tallene er negative", "Fordi 0 alltid er mindre enn det første elementet i lista", "Fordi Python ikke tillater at en teller starter på null", "Fordi startverdien må være et desimaltall for å kunne økes"],
      explanation: "Er alle målingene minusgrader, returnerer funksjonen en verdi som ikke finnes i dataene. Startverdien skal hentes fra dataene selv, typisk `tallene[0]` etter en tomsjekk.",
    },
  ],
  'in1000-3-2': [
    {
      question: "Hva skriver dette ut?\n\n```python\nlevert = {\"kartong\": 12, \"glass\": 7}\nprint(levert[\"glass\"])\n```",
      options: ["7", "12", "glass", "en feilmelding"],
      explanation: "Oppslaget bruker nøkkelen `\"glass\"` og gir verdien som står etter kolon. `12` er verdien til den andre nøkkelen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlevert = {\"kartong\": 12}\nlevert[\"glass\"] = 7\nlevert[\"kartong\"] = 20\nprint(levert)\n```",
      options: ["{'kartong': 20, 'glass': 7}", "{'kartong': 12, 'glass': 7}", "{'glass': 7, 'kartong': 20}", "{'kartong': 12, 'kartong': 20, 'glass': 7}"],
      explanation: "Tilordning **oppretter** nøkkelen `glass` og **overskriver** verdien til `kartong`. Nøklene er unike, så det kan aldri stå to `kartong`-oppføringer.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlevert = {\"kartong\": 12, \"glass\": 7}\nprint(12 in levert)\n```",
      options: ["False", "True", "12", "en feilmelding"],
      explanation: "`in` ser bare på **nøklene**, aldri på verdiene. Tallet 12 er en verdi her, så testen finner ingenting.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlevert = {\"kartong\": 12, \"glass\": 7}\nfor vare in levert:\n    print(vare)\n```",
      options: ["kartong\nglass", "12\n7", "kartong 12\nglass 7", "['kartong', 'glass']"],
      explanation: "En løkke over en ordbok gir **nøklene**. Verdiene må hentes med `levert[vare]` inne i løkka, og det gjør denne koden ikke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlevert = {\"kartong\": 12, \"glass\": 7, \"metall\": 3}\nprint(len(levert))\n```",
      options: ["3", "22", "6", "1"],
      explanation: "`len` teller **par**, ikke summen av verdiene. `22` er summen 12 + 7 + 3, som du må regne ut med en egen løkke.",
    },
    {
      question: "Hva skjer når du skriver `levert[\"plast\"]` og nøkkelen `\"plast\"` ikke finnes?",
      options: ["Programmet stopper med `KeyError: 'plast'`", "Oppslaget gir verdien `None` uten å stoppe", "Nøkkelen opprettes automatisk med verdien 0", "Oppslaget gir en tom tekst, og programmet fortsetter"],
      explanation: "Et oppslag krever at nøkkelen finnes. Feilmeldingen viser nøkkelen som manglet. Nøkkelen opprettes bare ved **tilordning**, `levert[\"plast\"] = 0`, ikke ved lesing.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nleveranser = [\"glass\", \"kartong\", \"glass\"]\nantall = {}\nfor vare in leveranser:\n    if vare not in antall:\n        antall[vare] = 0\n    antall[vare] = antall[vare] + 1\nprint(antall)\n```",
      options: ["{'glass': 2, 'kartong': 1}", "{'glass': 1, 'kartong': 1}", "{'glass': 3, 'kartong': 3}", "{'kartong': 1, 'glass': 2}"],
      explanation: "Teller-idiomet oppretter nøkkelen med 0 første gang og øker med én hver runde. Rekkefølgen i utskriften er den nøklene ble **opprettet** i, så `glass` kommer først.",
    },
    {
      question: "Hvorfor står linja `if vare not in antall: antall[vare] = 0` i teller-idiomet?",
      options: ["Fordi `antall[vare] + 1` ellers ville slått opp en nøkkel som ikke finnes", "Fordi ordboka ellers ville talt hver vare to ganger", "Fordi Python krever at alle nøkler opprettes før løkka starter", "Fordi telleren ellers ville startet på 1 i stedet for på 0"],
      explanation: "Høyresiden `antall[vare] + 1` leses først, så nøkkelen må finnes fra før. Uten linja stopper programmet med `KeyError` allerede på første runde — det er feilkode #14.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nturer = [12, 45, 8]\ngrupper = {}\nfor m in turer:\n    if m < 15:\n        merke = \"kort\"\n    else:\n        merke = \"lang\"\n    if merke not in grupper:\n        grupper[merke] = []\n    grupper[merke].append(m)\nprint(grupper)\n```",
      options: ["{'kort': [12, 8], 'lang': [45]}", "{'kort': 2, 'lang': 1}", "{'kort': [12], 'lang': [45], 'kort': [8]}", "{'lang': [45], 'kort': [12, 8]}"],
      explanation: "Grupperings-idiomet gir en ordbok der hver verdi er en **liste**. `{'kort': 2}` er hva teller-idiomet ville gitt; nøkkelrekkefølgen følger opprettelsen, og `kort` kom først.",
    },
    {
      question: "Hva er forskjellen på teller-idiomet og grupperings-idiomet?",
      options: ["Startverdien er `0` mot `[]`, og oppdateringen er `+ 1` mot `append`", "Teller-idiomet bruker en ordbok, mens gruppering bruker to lister", "Grupperings-idiomet krever at alle nøkler er kjent på forhånd", "Teller-idiomet virker på tekster, mens gruppering bare virker på tall"],
      explanation: "Skjelettet er identisk: tom ordbok før løkka, opprett nøkkelen hvis den mangler, oppdater. Bare startverdien og oppdateringen skiller dem, og det er verdt å se dem som ett mønster med to varianter.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = {\"glass\": 3, \"kartong\": 7, \"plast\": 5}\nbeste = None\nbeste_antall = 0\nfor vare in antall:\n    if antall[vare] > beste_antall:\n        beste = vare\n        beste_antall = antall[vare]\nprint(beste, beste_antall)\n```",
      options: ["kartong 7", "plast 5", "glass 3", "kartong 3"],
      explanation: "Finn-beste-løkka oppdaterer begge variablene sammen, så den største verdien vinner uansett rekkefølge. `plast 5` er svaret hvis man bare ser på den siste runden.",
    },
    {
      question: "Hva går galt hvis finn-beste-løkka oppdaterer `beste`, men glemmer `beste_antall`?",
      options: ["Alt sammenlignes mot 0, så den siste nøkkelen med positiv verdi vinner", "Løkka stopper med en feilmelding på andre runde", "Funksjonen returnerer alltid `None` uansett innhold", "Bare den første nøkkelen i ordboka kan noen gang vinne"],
      explanation: "Uten oppdateringen står `beste_antall` på 0 hele veien, og enhver positiv verdi er større. Da blir svaret den siste nøkkelen løkka besøkte, ikke den største.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = {}\nbeste = None\nfor vare in antall:\n    beste = vare\nprint(beste)\n```",
      options: ["None", "{}", "0", "en feilmelding"],
      explanation: "En løkke over en tom ordbok kjører null runder, så `beste` beholder startverdien. Nettopp derfor er `beste = None` det ærlige svaret på «fant ingenting».",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {\"a\": 1, \"b\": 2}\nfor k in d:\n    d[k] = d[k] * 3\nprint(d)\n```",
      options: ["{'a': 3, 'b': 6}", "{'a': 1, 'b': 2}", "{'a': 3, 'b': 3}", "{'a': 4, 'b': 5}"],
      explanation: "Løkkevariabelen er nøkkelen, og `d[k] = d[k] * 3` skriver den nye verdien tilbake på samme nøkkel. Å endre verdier under en løkke er trygt; å legge til nøkler er det ikke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ngrupper = {\"kort\": [12, 8], \"lang\": [45]}\nprint(len(grupper), len(grupper[\"kort\"]))\n```",
      options: ["2 2", "2 3", "3 2", "2 1"],
      explanation: "Det første tallet teller **grupper**, det andre teller **elementer i én gruppe**. Her er begge tilfeldigvis 2, og det er nettopp derfor du må regne dem hver for seg.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ngrupper = {\"kort\": [12, 8, 3]}\nprint(grupper[\"kort\"][1])\n```",
      options: ["8", "12", "[12, 8, 3]", "3"],
      explanation: "Uttrykket leses fra venstre: `grupper[\"kort\"]` gir lista, og `[1]` henter det **andre** elementet i den, siden indeksering starter på null.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlengder = {}\nfor tekst in [\"tog\", \"buss\", \"fly\"]:\n    n = len(tekst)\n    if n not in lengder:\n        lengder[n] = []\n    lengder[n].append(tekst)\nprint(lengder)\n```",
      options: ["{3: ['tog', 'fly'], 4: ['buss']}", "{'3': ['tog', 'fly'], '4': ['buss']}", "{3: 2, 4: 1}", "{4: ['buss'], 3: ['tog', 'fly']}"],
      explanation: "Nøklene er heltall og skrives derfor **uten** anførselstegn, mens tekstene inne i listene får enkle anførselstegn. Rekkefølgen følger opprettelsen, og lengde 3 kom først.",
    },
    {
      question: "Når velger du en ordbok framfor en liste?",
      options: ["Når du skal finne noe igjen på et navn eller en kode", "Når samlingen skal kunne inneholde flere like verdier", "Når rekkefølgen på elementene er en del av selve dataene", "Når samlingen skal kunne vokse mens programmet kjører"],
      explanation: "Spørsmålet er om du slår opp på plass eller på navn. Både lister og ordbøker kan vokse og inneholde like verdier, så det skiller dem ikke — men bare lista har en rekkefølge du kan regne på.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {}\nfor tall in [3, 1, 3]:\n    if tall not in d:\n        d[tall] = 0\n    d[tall] = d[tall] + 1\nprint(d)\n```",
      options: ["{3: 2, 1: 1}", "{1: 1, 3: 2}", "{3: 1, 1: 1}", "{3: 3, 1: 1}"],
      explanation: "Tallet 3 forekommer to ganger og 1 én gang. Nøkkelen 3 ble opprettet først, så den står først — ordboka sorterer ikke.",
    },
    {
      question: "Hva er `{}` i Python?",
      options: ["En tom ordbok", "En tom liste med plass til null elementer", "En ordbok med én nøkkel som mangler verdi", "En kodeblokk uten innhold, som i andre språk"],
      explanation: "Krøllparentesene gir en tom ordbok med lengde 0; hakeparentesene `[]` gir en tom liste. Begge er startpunktet i hvert sitt byggemønster, og forveksles lett.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ngamle = {\"a\": 3, \"b\": 9}\nny = {}\nfor k in gamle:\n    if gamle[k] > 5:\n        ny[k] = gamle[k]\nprint(ny, gamle)\n```",
      options: ["{'b': 9} {'a': 3, 'b': 9}", "{'b': 9} {'b': 9}", "{'a': 3} {'a': 3, 'b': 9}", "{'a': 3, 'b': 9} {'b': 9}"],
      explanation: "Funksjonen bygger en **ny** ordbok og lar den gamle være urørt — det er hele poenget med mønsteret. Andre alternativ er hva du får hvis du endrer ordboka du fikk inn.",
    },
    {
      question: "Hvorfor bruker denne boka `if k not in d: d[k] = 0` i stedet for den ferdige snarveien `d.get(k, 0)`?",
      options: ["Fordi fagets løsningsforslag skriver den eksplisitte løkka", "Fordi snarveien gir feil svar når nøkkelen mangler helt", "Fordi snarveien ikke finnes i den Python-versjonen kurset bruker", "Fordi snarveien er tregere når ordboka har mange nøkler"],
      explanation: "Snarveien virker helt fint, men det er løkka og oppdateringsrekkefølgen kurset måler — og i den store klassemodelleringen finnes det ingen ferdig funksjon å ty til.",
    },
  ],
  'in1000-3-3': [
    {
      question: "Hva skriver dette ut?\n\n```python\ntekst = \"sykkel\"\nprint(len(tekst), tekst[0], tekst[-1])\n```",
      options: ["6 s l", "6 s k", "5 s l", "6 y l"],
      explanation: "Seks tegn, første tegn har indeks 0 og siste hentes med negativ indeks. `6 s k` er svaret hvis man leser `-1` som nest siste tegn.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nkode = \"A4213\"\nprint(kode[1] + kode[2])\n```",
      options: ["42", "6", "4 2", "A4"],
      explanation: "Begge tegnene er tekster, så plusstegnet **skjøter** dem. `6` er svaret hvis man leser dem som tall — det krever `int(kode[1]) + int(kode[2])`, og er feilkode #3.",
    },
    {
      question: "Hva skjer hvis du skriver `tekst[0] = \"s\"`?",
      options: ["Programmet stopper — en tekst kan ikke endres på plass", "Det første tegnet byttes ut, som i en liste", "Teksten forlenges med en ny `s` helt fremst", "Ingenting synlig skjer, men teksten er uendret"],
      explanation: "Strenger er uforanderlige, og forsøket gir `TypeError`. Løsningen er å bygge en ny tekst, for eksempel `\"s\" + tekst[1] + tekst[2]`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntekst = \"buss\"\nny = \"\"\nfor tegn in tekst:\n    ny = ny + tegn\nprint(ny)\n```",
      options: ["buss", "ssub", "b", "bu s s"],
      explanation: "`ny = ny + tegn` bygger **forfra**, så teksten kommer ut uendret. `ssub` er hva du får med `ny = tegn + ny`, som bygger bakfra.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntekst = \"buss\"\nny = \"\"\nfor tegn in tekst:\n    ny = tegn + ny\nprint(ny)\n```",
      options: ["ssub", "buss", "s", "bssu"],
      explanation: "Her settes det nye tegnet **foran** det som allerede er bygget, og teksten snus. Én ombytting av to navn snur hele svaret.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = 12\nprint(\"Vi har \" + str(antall) + \" sykler\")\n```",
      options: ["Vi har 12 sykler", "Vi har12sykler", "Vi har 12sykler", "Vi har  12  sykler"],
      explanation: "Mellomrommene må skrives inn selv, som del av tekstene. `str(...)` er nødvendig — uten den stopper programmet, fordi tekst og tall ikke kan skjøtes.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nsetning = \"buss tog trikk\"\nprint(setning.split())\n```",
      options: ["['buss', 'tog', 'trikk']", "[\"buss\", \"tog\", \"trikk\"]", "buss tog trikk", "['buss tog trikk']"],
      explanation: "`.split()` gir en **liste**, og Python viser tekster inne i lister med enkle anførselstegn. Svaret `['buss tog trikk']` — hele teksten som ett element — er hva du får hvis skilletegnet ikke finnes i teksten.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"Ada;19;Oslo\"\nfelt = linje.split(\";\")\nprint(felt[1], int(felt[1]) + 1)\n```",
      options: ["19 20", "19 191", "20 20", "1 2"],
      explanation: "Felt fra `.split()` er alltid tekster. Uten `int(...)` ville `+ 1` ikke gått i det hele tatt — og `+ \"1\"` ville gitt `191`. Det er feilkode #4.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"Ada;19\\n\"\nprint(len(linje), len(linje.rstrip()))\n```",
      options: ["7 6", "8 6", "6 6", "7 7"],
      explanation: "Linjeskiftet er **ett** tegn, ikke to, og `.rstrip()` fjerner det. `8 6` er svaret hvis man teller `\\n` som to tegn.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"Ada;19\\n\"\nfelt = linje.split(\";\")\nprint(felt[1] == \"19\")\n```",
      options: ["False", "True", "19", "en feilmelding"],
      explanation: "Uten `.rstrip()` først henger linjeskiftet igjen i det siste feltet, så sammenligningen svarer usant selv om det «ser riktig ut». Det er feilkode #8, og den er stum.",
    },
    {
      question: "I hvilken rekkefølge skal `.rstrip()` og `.split()` stå når du leser en linje?",
      options: ["`.rstrip()` først, `.split()` etterpå", "`.split()` først, `.rstrip()` på hvert felt etterpå", "Rekkefølgen spiller ingen rolle for resultatet", "De kan ikke kombineres — velg én av dem"],
      explanation: "Renser du først, er linjeskiftet borte før delingen. Deler du først, havner linjeskiftet i det siste feltet og må fjernes der. Malen er `linje.rstrip().split(\";\")`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntekst = \"kollektivtrafikk\"\nprint(\"trafikk\" in tekst, \"Trafikk\" in tekst)\n```",
      options: ["True False", "True True", "False False", "False True"],
      explanation: "`in` finner delstrenger, men skiller stor og liten bokstav. Skal du sammenligne uten å bry deg om det, gjør begge sider små med `.lower()` først.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nnavn = \"Ada Berg\"\nprint(navn.lower())\nprint(navn)\n```",
      options: ["ada berg\nAda Berg", "ada berg\nada berg", "Ada Berg\nada berg", "ADA BERG\nAda Berg"],
      explanation: "`.lower()` returnerer en **ny** tekst og lar originalen være urørt — som alle strengmetoder. Skal du beholde resultatet, må du ta imot det i en variabel.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(len(\"\"), len(\"to ord\"))\n```",
      options: ["0 6", "0 5", "1 6", "0 2"],
      explanation: "Den tomme teksten har lengde 0, og mellomrommet i `\"to ord\"` teller som et tegn. `0 2` er antall ord, ikke antall tegn.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef fjern(tekst, tegn):\n    ny = \"\"\n    for t in tekst:\n        if t != tegn:\n            ny = ny + t\n    return ny\nprint(fjern(\"bibliotek\", \"i\"))\n```",
      options: ["bblotek", "bibliotek", "iii", "blotek"],
      explanation: "Tegn-for-tegn-mønsteret tar med alt som **ikke** er det angitte tegnet. `iii` er hva du får hvis betingelsen snus til `==`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(\"Blindern\".split(\"-\"))\n```",
      options: ["['Blindern']", "[]", "['B', 'lindern']", "Blindern"],
      explanation: "Finnes ikke skilletegnet, gir `.split()` en liste med **ett** element: hele teksten. Den tomme lista får du aldri fra `.split(sep)`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(str(100) + \"!\", len(str(100)))\n```",
      options: ["100! 3", "100! 100", "1003", "100 3"],
      explanation: "`str(100)` er teksten `\"100\"` med tre tegn, og plusstegnet skjøter utropstegnet på. `print` skiller de to argumentene med ett mellomrom.",
    },
    {
      question: "Hvorfor må resultatet av `linje.rstrip()` tas imot i en variabel?",
      options: ["Fordi metoden returnerer en ny tekst og lar originalen være urørt", "Fordi metoden endrer linja, men bare hvis svaret lagres", "Fordi Python krever en tilordning på hver linje med punktum", "Fordi metoden ellers fjerner tegn fra begge ender i stedet for én"],
      explanation: "Strenger er uforanderlige, så alle strengmetoder gir en ny verdi. `liste.append(e)` er motsatt: den endrer lista og skal **ikke** tas imot.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef antall_ord(setning):\n    return len(setning.split())\nprint(antall_ord(\"buss tog\"), antall_ord(\"\"))\n```",
      options: ["2 0", "2 1", "8 0", "2 None"],
      explanation: "`\"\".split()` gir den tomme lista, og `len` av den er 0. Det er derfor `.split()` uten argument håndterer tom inndata av seg selv.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntekst = \"abc\"\nny = \"\"\nfor i in range(len(tekst) - 1, -1, -1):\n    ny = ny + tekst[i]\nprint(ny)\n```",
      options: ["cba", "abc", "cb", "ba"],
      explanation: "Løkka går fra siste indeks ned til og med 0, fordi stoppverdien `-1` aldri er med. `cb` er svaret hvis man stopper på 0 i stedet for på `-1`.",
    },
  ],
  'in1000-3-4': [
    {
      question: "Oppgaven sier: «returner en ordbok fra hvert dyr til hvor mange ganger det forekommer». Hvilket mønster ber den om?",
      options: ["Ordbok som teller", "Grupperings-idiomet med en liste per nøkkel", "Finn beste med to variabler før løkka", "Flagg med tidlig retur inne i løkka"],
      explanation: "«Hvor mange ganger hver» er signalordet for teller-idiomet: `if k not in d: d[k] = 0` og deretter `d[k] = d[k] + 1`. Gruppering ville gitt navnene, ikke antallet.",
    },
    {
      question: "Oppgaven sier: «samle alle navnene som hører til hver forbokstav». Hvilket mønster ber den om?",
      options: ["Grupperings-idiomet", "Ordbok som teller med startverdi 0", "Bygg en ny liste med `append`", "Akkumulator med `total = total + x`"],
      explanation: "«Samle alle per» ber om **innholdet**, ikke antallet, så startverdien er `[]` og oppdateringen er `append`. Teller-idiomet ville gitt `{'A': 2}` i stedet for `{'A': ['Ada', 'Ask']}`.",
    },
    {
      question: "Oppgaven sier: «returner True hvis alle målingene er positive». Hvor skal `return True` stå?",
      options: ["Etter løkka, med samme innrykk som `for`", "Inne i løkka, i `if`-grenen", "Inne i løkka, i `else`-grenen", "På linja rett før løkka starter"],
      explanation: "Svaret «alle» krever at hele samlingen er sett, så det hører etter løkka. Står det inne, avgjør det første elementet hele svaret — det er feilkode #7.",
    },
    {
      question: "Hva er startverdien når funksjonen skal returnere en ny tekst?",
      options: ["Den tomme teksten `\"\"`", "Den tomme lista `[]`", "Den tomme ordboka `{}`", "Verdien `None`"],
      explanation: "Første steg i oppskriften er å lese hva som skal returneres. En tekst gir `\"\"`, en liste gir `[]`, en ordbok gir `{}`. Deretter er skjelettet identisk.",
    },
    {
      question: "Oppgaven sier: «returner måneden med flest regndager». Hva må du holde styr på inne i løkka?",
      options: ["Både den beste nøkkelen og den beste verdien", "Bare den beste nøkkelen, siden det er den som returneres", "Bare den beste verdien, som slås opp igjen til slutt", "En teller for hvor mange ganger betingelsen slo til"],
      explanation: "Oppdaterer du bare `beste`, står `beste_antall` på 0 hele veien, og alt er større enn 0. Da blir svaret den siste nøkkelen i stedet for den største.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(tallene):\n    total = 0\n    for t in tallene:\n        total = total + t\n    return total\nprint(f([45, 30]), f([]))\n```",
      options: ["75 0", "75 None", "75", "0 0"],
      explanation: "Akkumulatoren returnerer startverdien når lista er tom, fordi løkka kjører null runder. `None` ville krevd at funksjonen manglet `return`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef alle_tomme(stativene):\n    for a in stativene:\n        if a != 0:\n            return False\n    return True\nprint(alle_tomme([0, 2]), alle_tomme([]))\n```",
      options: ["False True", "False False", "True True", "True False"],
      explanation: "Flagg med tidlig retur svarer `False` ved første moteksempel. Over en tom liste kjører løkka aldri, så `return True` etter løkka er det eneste som skjer.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef ny(tallene, grense):\n    ut = []\n    for t in tallene:\n        if t > grense:\n            ut.append(t)\n    return ut\nprint(ny([12, 3, 20], 10))\n```",
      options: ["[12, 20]", "[3]", "[12, 3, 20]", "[20]"],
      explanation: "Bygg-mønsteret tar med bare de elementene som oppfyller betingelsen, i original rekkefølge. `[3]` er svaret hvis betingelsen snus.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef snitt(tallene):\n    total = 0\n    for t in tallene:\n        total = total + t\n    return total / len(tallene)\nprint(snitt([4, 5, 6]))\n```",
      options: ["5.0", "5", "15", "5.00"],
      explanation: "Vanlig divisjon med `/` gir alltid desimaltall, også når regnestykket går opp. I et auto-rettet svarfelt er `5` galt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef tell(varene):\n    d = {}\n    for v in varene:\n        if v not in d:\n            d[v] = 0\n        d[v] = d[v] + 1\n    return d\nprint(tell([\"glass\", \"plast\", \"glass\"]))\n```",
      options: ["{'glass': 2, 'plast': 1}", "{'plast': 1, 'glass': 2}", "{'glass': 1, 'plast': 1}", "{'glass': 3, 'plast': 3}"],
      explanation: "Nøkkelrekkefølgen er den nøklene ble **opprettet** i, og `glass` kom først. At `glass` også har høyest antall, endrer ikke plasseringen — ordboka sorterer ikke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef grupper(navnene):\n    d = {}\n    for n in navnene:\n        b = n[0]\n        if b not in d:\n            d[b] = []\n        d[b].append(n)\n    return d\nprint(grupper([\"Ada\", \"Bo\", \"Ask\"]))\n```",
      options: ["{'A': ['Ada', 'Ask'], 'B': ['Bo']}", "{'A': 2, 'B': 1}", "{'A': ['Ada'], 'B': ['Bo'], 'A': ['Ask']}", "{'Ada': ['A'], 'Bo': ['B']}"],
      explanation: "Grupperings-idiomet gir en liste per nøkkel. `{'A': 2}` er hva teller-idiomet ville gitt, og nøkler kan aldri gjenta seg i en ordbok.",
    },
    {
      question: "Denne funksjonen har en feil. Hva skriver den ut?\n\n```python\ndef best(d):\n    beste = None\n    beste_antall = 0\n    for k in d:\n        if d[k] > beste_antall:\n            beste = k\n    return beste\nprint(best({\"mai\": 8, \"juni\": 14, \"juli\": 3}))\n```",
      options: ["juli", "juni", "mai", "None"],
      explanation: "`beste_antall` oppdateres aldri, så den står på 0 og alt er større. Betingelsen slår til hver runde, og svaret blir den **siste** nøkkelen. Riktig svar skulle vært `juni`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef fjern(tekst, tegn):\n    ny = \"\"\n    for t in tekst:\n        if t != tegn:\n            ny = ny + t\n    return ny\nprint(fjern(\"bibliotek\", \"b\"))\n```",
      options: ["iliotek", "ibliotek", "bibliotek", "bb"],
      explanation: "**Alle** forekomster av `b` fjernes, også den inne i ordet. `ibliotek` er svaret hvis man stopper etter den første, og `bb` er hva du får hvis betingelsen snus til `==`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef antall(setning, n):\n    a = 0\n    for ord_tekst in setning.split():\n        if len(ord_tekst) > n:\n            a = a + 1\n    return a\nprint(antall(\"buss tog trikk\", 3), antall(\"\", 3))\n```",
      options: ["2 0", "3 0", "2 1", "3 None"],
      explanation: "`buss` og `trikk` er lengre enn tre tegn; `tog` er nøyaktig tre og telles ikke, fordi testen er streng. `\"\".split()` gir tom liste, så telleren blir 0.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef lag(a, b):\n    d = {}\n    for i in range(len(a)):\n        d[a[i]] = b[i]\n    return d\nprint(lag([\"mai\", \"juni\"], [8, 14]))\n```",
      options: ["{'mai': 8, 'juni': 14}", "{'mai': 'juni', 8: 14}", "{0: 'mai', 1: 'juni'}", "{8: 'mai', 14: 'juni'}"],
      explanation: "Indeksløkka leser de to listene i takt: element `i` i den ene blir nøkkel, element `i` i den andre blir verdi. Det er derfor du trenger plassen her.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"ada;bo\\n\"\nprint(linje.split(\";\")[1] == \"bo\")\n```",
      options: ["False", "True", "bo", "en feilmelding"],
      explanation: "Uten `.rstrip()` først henger linjeskiftet igjen i det siste feltet, så sammenligningen svarer usant. Det er feilkode #8, og den gir ingen feilmelding.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef tell_lengder(ordene):\n    d = {}\n    for o in ordene:\n        n = len(o)\n        if n not in d:\n            d[n] = 0\n        d[n] = d[n] + 1\n    return d\nprint(tell_lengder([\"tog\", \"buss\", \"fly\"]))\n```",
      options: ["{3: 2, 4: 1}", "{'3': 2, '4': 1}", "{3: 1, 4: 1}", "{'tog': 3, 'buss': 4, 'fly': 3}"],
      explanation: "Nøklene er heltall og vises **uten** anførselstegn. To ord har tre tegn og ett har fire.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef store(setning):\n    ny = \"\"\n    for o in setning.split():\n        if len(ny) > 0:\n            ny = ny + \" \"\n        ny = ny + o[0].upper()\n    return ny\nprint(store(\"ada marie berg\"))\n```",
      options: ["A M B", "A M B ", "AMB", "Ada Marie Berg"],
      explanation: "Mellomrommet legges til **foran** alle ord unntatt det første, så teksten får ingen etterhengende blank. Bare forbokstaven tas med, ikke resten av ordet.",
    },
    {
      question: "Hva gjør en funksjon som skal returnere den største verdien, hvis den kalles med en tom liste og starter med `beste = tallene[0]`?",
      options: ["Programmet stopper med `IndexError`", "Funksjonen returnerer `None` av seg selv", "Funksjonen returnerer 0 som startverdi", "Løkka hopper over, og funksjonen gir en tom liste"],
      explanation: "Indeks 0 finnes ikke i en tom liste. Løsningen er en tomsjekk øverst — det er feilkode #6, og den rammer også `total / len(tallene)`.",
    },
    {
      question: "Hvorfor skal «tell opp» og «finn beste» skrives som to funksjoner i stedet for én?",
      options: ["Fordi de rettes hver for seg og gir uttelling uavhengig", "Fordi Python ikke tillater to løkker i samme funksjon", "Fordi en ordbok ikke kan både bygges og leses i samme funksjon", "Fordi finn beste krever at tellingen er sortert først"],
      explanation: "Delkarakter gis per deloppgave, så en telling som virker, gir poeng selv om finn-beste blir feil. På eksamen har du dessuten lov til å kalle en funksjon oppgaveteksten beskriver.",
    },
    {
      question: "Oppgaveteksten sier ingenting om hva som skal skje ved uavgjort. Hva gjør du?",
      options: ["Velger en regel og skriver én linje kommentar om valget", "Lar funksjonen returnere `None` når det er uavgjort", "Prøver begge og leverer to versjoner av funksjonen", "Hopper over deloppgaven, siden den er underspesifisert"],
      explanation: "Å dokumentere en rimelig forutsetning i en kommentar er den ene legitime bruken av kommentarer i en besvarelse, og det trekker aldri. Med streng `>` vinner den første; med `>=` vinner den siste.",
    },
    {
      question: "Hva er et moteksempel i denne sammenhengen?",
      options: ["Ett konkret kall som gir et konkret galt svar", "En forklaring i ord av hvorfor koden er feil", "En rettet versjon av funksjonen som virker", "Et kall som viser at funksjonen virker for vanlige data"],
      explanation: "Sensor ber om ett kall med konkrete verdier og det gale utfallet. Velg data der feilen faktisk slår ut — med den største verdien sist ville en ødelagt finn-beste tilfeldigvis svart riktig.",
    },
    {
      question: "Hvorfor bygger fasiten en **ny** liste i stedet for å endre den som kom inn som parameter?",
      options: ["Fordi parameteren er den samme lista som utenfor funksjonen", "Fordi en liste ikke kan endres etter at den er laget", "Fordi `append` bare virker på lister som er laget inne i funksjonen", "Fordi Python lager en kopi av lista ved hvert funksjonskall"],
      explanation: "Lister sendes som referanse, så en endring inne i funksjonen sees også utenfor. Tekster kan derimot ikke endres i det hele tatt — de må alltid bygges på nytt.",
    },
    {
      question: "Hvilken kontroll fanger den vanligste feilen i finn-beste-mønsteret?",
      options: ["Tell at `if`-blokken oppdaterer like mange variabler som du satte før løkka", "Sjekk at løkka går over nøklene og ikke over verdiene", "Sjekk at `return` står etter løkka og ikke inne i den", "Sjekk at startverdien er `None` og ikke den tomme teksten"],
      explanation: "To variabler settes før løkka, og begge må oppdateres inne i `if`-en. Kontrollen tar fem sekunder og redder en hel deloppgave på en hjelpemiddelfri eksamen.",
    },
  ],
  'in1000-4-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\na = \"5\"\nb = \"2\"\nprint(a + b)\n```",
      options: ["52", "7", "5 2", "52.0"],
      explanation: "Begge verdiene er tekster, så plusstegnet skjøter dem. `7` krever `int(a) + int(b)`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(8 / 4)\n```",
      options: ["2.0", "2", "4.0", "2.00"],
      explanation: "`/` gir alltid desimaltall, også når regnestykket går opp. I et auto-rettet felt er `2` galt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(17 // 5, 17 % 5)\n```",
      options: ["3 2", "3.4 2", "2 3", "3, 2"],
      explanation: "Heltallsdivisjon gir 3 hele femmere, og resten er 2. `print` skiller de to verdiene med ett mellomrom, ikke med komma.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(\"ab\" * 3)\n```",
      options: ["ababab", "ab ab ab", "abababab", "ab3"],
      explanation: "En tekst ganget med et heltall gjentar teksten, uten mellomrom mellom. Hadde `\"ab\"` vært et tall, ville det vært en vanlig multiplikasjon.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(\"a\", \"b\")\nprint(\"a\" + \"b\")\n```",
      options: ["a b\nab", "a b\na b", "ab\nab", "a,b\nab"],
      explanation: "Komma mellom argumentene gir ett mellomrom; pluss skjøter uten. Skillet er verdt et poeng i nesten hver eneste Oppgave 1.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = 40\nif x > 40:\n    print(\"A\")\nelif x > 20:\n    print(\"B\")\nelse:\n    print(\"C\")\n```",
      options: ["B", "A", "C", "A\nB"],
      explanation: "Kantverdien: `40 > 40` er usann, så første gren hoppes over. Bare den **første sanne** grenen i en kjede kjøres.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nx = 30\nif x > 20:\n    print(\"A\")\nif x > 10:\n    print(\"B\")\n```",
      options: ["A\nB", "A", "B", "A B"],
      explanation: "To selvstendige `if`-er er to uavhengige spørsmål, og begge er sanne. Med `elif` på linje tre ville bare `A` blitt skrevet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = 2\nb = 1\nfor i in range(2):\n    a = a + b\n    b = a + b\nprint(a, b)\n```",
      options: ["7 11", "6 6", "3 4", "7 8"],
      explanation: "Andre linje bruker den **nye** verdien av `a`, fordi den allerede er oppdatert i samme runde. `6 6` er svaret hvis man bruker den gamle `a`, og `3 4` hvis man stopper etter én runde.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntotal = 0\nfor i in range(4):\n    for j in range(i):\n        total = total + 1\nprint(total)\n```",
      options: ["6", "10", "12", "4"],
      explanation: "Den indre løkka kjører 0, 1, 2 og 3 ganger. `range(0)` gir ingen runder i det hele tatt, så den første ytre runden gjør ingenting.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nn = 12\ns = 0\nwhile n > 1:\n    s = s + n\n    n = n // 2\nprint(s, n)\n```",
      options: ["21 1", "21 0", "18 1", "12 1"],
      explanation: "Rundene legger til 12, 6 og 3, og `n` ender på 1 fordi betingelsen svikter der. Summen bruker den **gamle** verdien av `n` hver runde.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfor i in range(8, 0, -3):\n    pass\nprint(i)\n```",
      options: ["2", "0", "5", "8"],
      explanation: "`range(8, 0, -3)` gir 8, 5 og 2 — stoppverdien er aldri med. Løkkevariabelen lever videre etter løkka med sin siste verdi.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ni = 0\nwhile i < 5:\n    i = i + 2\nprint(i)\n```",
      options: ["6", "5", "4", "7"],
      explanation: "Løkka stopper først når betingelsen er usann, og da har `i` allerede blitt 6. En `while`-variabel har den verdien som gjorde betingelsen usann.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [4, 8, 15, 16]\nprint(tall[1], tall[-2])\n```",
      options: ["8 15", "4 16", "8 16", "4 15"],
      explanation: "Indeks 1 er det **andre** elementet, og `-2` er det nest siste. Å lese `[1]` som «det første» er feilkode #5.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [4, 8, 15]\nprint(len(tall), tall)\n```",
      options: ["3 [4, 8, 15]", "3 4, 8, 15", "3 [4,8,15]", "[4, 8, 15] 3"],
      explanation: "Hele lista skrives med hakeparenteser, komma og ett mellomrom etter hvert komma. Lengden er en enkeltverdi og får ingen parenteser.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nliste = [1, 2, 3]\nny = []\nfor e in liste:\n    ny.append(e * 2)\nliste[0] = 9\nprint(liste, ny)\n```",
      options: ["[9, 2, 3] [2, 4, 6]", "[9, 2, 3] [18, 4, 6]", "[1, 2, 3] [2, 4, 6]", "[9, 2, 3] [9, 2, 3]"],
      explanation: "`ny` ble bygget ferdig før lista ble endret, og inneholder ferdig utregnede tall. Tredje alternativ er hva du får hvis `ny = liste` — det er aliasing, feilkode #15.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nv = [6, 2, 9]\nr = []\nfor i in range(1, len(v)):\n    r.append(v[i] - v[i - 1])\nprint(r)\n```",
      options: ["[-4, 7]", "[-4, 7, 3]", "[4, -7]", "[6, 2, 9]"],
      explanation: "Løkka går over indeks 1 og 2 — tre tall gir to avstander. Minus én i grensen er unødvendig her fordi løkka **starter** på 1 i stedet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ntall = [5, 3, 8, 1]\nvalgt = []\ni = 0\nwhile i < len(tall):\n    valgt.append(tall[i])\n    i = i + 2\nprint(valgt, i)\n```",
      options: ["[5, 8] 4", "[5, 8] 2", "[3, 1] 4", "[5, 3, 8, 1] 4"],
      explanation: "Steget 2 treffer indeks 0 og 2; ved `i = 4` er betingelsen usann. Etter løkka står `i` på 4, verdien som gjorde betingelsen usann.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {\"a\": 2}\nd[\"b\"] = 5\nd[\"a\"] = d[\"a\"] + 3\nprint(d)\n```",
      options: ["{'a': 5, 'b': 5}", "{'a': 2, 'b': 5}", "{'b': 5, 'a': 5}", "{'a': 5, 'b': 5, 'a': 2}"],
      explanation: "Den ene tilordningen oppretter en ny nøkkel, den andre overskriver en verdi. Rekkefølgen følger **opprettelsen**, så `a` beholder plassen først.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {}\nfor b in \"kake\":\n    if b not in d:\n        d[b] = 0\n    d[b] = d[b] + 1\nprint(d)\n```",
      options: ["{'k': 2, 'a': 1, 'e': 1}", "{'a': 1, 'e': 1, 'k': 2}", "{'k': 1, 'a': 1, 'e': 1}", "{'k': 2, 'a': 2, 'e': 1}"],
      explanation: "Teller-idiomet over en tekst. Nøklene står i den rekkefølgen de ble opprettet i, ikke alfabetisk — og tekstnøkler får enkle anførselstegn.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {4: 3, 1: 2}\nprint(d, len(d), d[4])\n```",
      options: ["{4: 3, 1: 2} 2 3", "{'4': 3, '1': 2} 2 3", "{4: 3, 1: 2} 5 3", "{4: 3, 1: 2} 2 4"],
      explanation: "Heltallsnøkler skrives **uten** anførselstegn. `len(d)` teller par, ikke summen av verdiene, og `d[4]` er verdien til nøkkelen 4.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {\"a\": 1, \"b\": 2}\nfor k in d:\n    d[k] = d[k] * 10\nprint(d)\n```",
      options: ["{'a': 10, 'b': 20}", "{'a': 1, 'b': 2}", "{'a': 10, 'b': 10}", "{'a': 11, 'b': 12}"],
      explanation: "Løkkevariabelen er nøkkelen, og verdien skrives tilbake på samme nøkkel. Å endre verdier under en løkke er trygt; å legge til nøkler er det ikke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"31;Grorud;Fornebu\"\nfelt = linje.split(\";\")\nprint(felt)\nprint(felt[-1], len(felt))\n```",
      options: ["['31', 'Grorud', 'Fornebu']\nFornebu 3", "['31', 'Grorud', 'Fornebu']\n'Fornebu' 3", "[31, Grorud, Fornebu]\nFornebu 3", "['31', 'Grorud', 'Fornebu']\nFornebu 2"],
      explanation: "Hele lista vises med enkle anførselstegn rundt hver tekst; ett element skrevet ut alene får ingen. Delingen gir tre felt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nny = \"\"\nfor tegn in \"sti\":\n    ny = tegn + ny\nprint(ny)\n```",
      options: ["its", "sti", "i", "s"],
      explanation: "`ny = tegn + ny` setter det nye tegnet **foran**, så teksten snus. `ny = ny + tegn` ville gitt teksten uendret.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(x):\n    if x > 5:\n        return x - 5\n    return 0\nprint(f(5), f(9), f(2))\n```",
      options: ["0 4 0", "0 4 3", "5 4 0", "0 9 0"],
      explanation: "Kantverdien: `5 > 5` er usann, så første kall faller til `return 0`. Kall nummer tre gjør det samme, men fordi 2 er mindre enn 5.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef g(t):\n    n = 0\n    for tegn in t:\n        n = n + 1\n    return n\nprint(g(\"buss\"), g(\"\"))\n```",
      options: ["4 0", "4 None", "4", "5 0"],
      explanation: "Telleren returnerer 0 for den tomme teksten, fordi løkka kjører null runder. `None` ville krevd at funksjonen manglet `return`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(1, 2.0, True)\n```",
      options: ["1 2.0 True", "1 2 True", "1 2.0 true", "1, 2.0, True"],
      explanation: "Hver verdi skrives i sin egen form: heltallet uten desimal, desimaltallet med, og den boolske verdien med stor forbokstav.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(\"3\" == 3, 3 == 3.0)\n```",
      options: ["False True", "True True", "False False", "True False"],
      explanation: "En tekst og et tall er aldri like, men et heltall og et desimaltall med samme verdi er det. Første del er feilkode #3.",
    },
    {
      question: "Hva er det første du gjør når du får en sporingsoppgave med en løkke?",
      options: ["Skriver opp hvilke verdier `range` faktisk gir", "Regner ut sluttverdien og kontrollerer den bakover", "Skriver om løkka til en form du kjenner bedre", "Ser etter hvilken feilkode oppgaven sannsynligvis tester"],
      explanation: "Å telle rundene før du regner tar femten sekunder og fjerner den vanligste kilden til feil svar. Deretter fører du tavle, én rad per runde, ovenfra og ned.",
    },
  ],
  'in1000-4-2': [
    {
      question: "Hva ber sensor om når oppgaven sier «gi et moteksempel»?",
      options: ["Ett konkret kall, det gale svaret og det riktige svaret", "En forklaring i ord av hvorfor funksjonen er feil", "En rettet versjon av funksjonen med kommentarer", "En liste over alle inndataene funksjonen svarer feil på"],
      explanation: "Formen er «`storst(4, 4, 4)` gir `None`, men skulle gitt `4`». En forklaring i ord kan stå i tillegg, men er alene en halv besvarelse.",
    },
    {
      question: "Hvilken feiltype er farligst på eksamen?",
      options: ["Logisk feil — programmet kjører og svarer galt", "Syntaksfeil — programmet kjøres ikke i det hele tatt", "Kjøretidsfeil — programmet stopper med en melding", "Innrykksfeil — Python klager på blandet tabulator"],
      explanation: "De to andre forteller deg selv hva som er galt. Den logiske feilen gir ingen melding, ser rimelig ut og er derfor den eneste sjanger I faktisk spør om.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef storst(a, b, c):\n    if a > b and a > c:\n        return a\n    if b > a and b > c:\n        return b\n    if c > a and c > b:\n        return c\nprint(storst(4, 4, 4))\n```",
      options: ["None", "4", "0", "en feilmelding"],
      explanation: "Alle tre testene bruker `>`, som er usann ved likhet. Ingen `return` kjøres, og en funksjon som faller ut nederst gir `None`. Det er likhetsfella.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef alle_tomme(s):\n    for a in s:\n        if a == 0:\n            return True\n        else:\n            return False\nprint(alle_tomme([0, 4, 0]))\n```",
      options: ["True", "False", "None", "en feilmelding"],
      explanation: "Begge `return`-ene står inne i løkka, så det første elementet avgjør hele svaret. Det er feilkode #7 — for tidlig retur.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef tell(sp):\n    antall = {}\n    for s in sp:\n        antall[s] = antall[s] + 1\n    return antall\nprint(tell([]))\n```",
      options: ["{}", "{'sjakk': 1}", "None", "en feilmelding"],
      explanation: "Funksjonen mangler opprettelsen av nøkkelen og krasjer på alle ikke-tomme lister — men den tomme går fint, siden løkka aldri kjører. Derfor må et moteksempel også prøve et vanlig kall.",
    },
    {
      question: "En funksjon skal gi rabatt til alle som er «25 år eller yngre», men bruker `if alder < 25:`. Hvilket kall er det beste moteksempelet?",
      options: ["`har_rabatt(25)`", "`har_rabatt(24)`", "`har_rabatt(30)`", "`har_rabatt(0)`"],
      explanation: "Bare grenseverdien avslører feilen — de tre andre kallene gir riktig svar selv med den gale testen. Et moteksempel som ikke avslører feilen, er verdiløst.",
    },
    {
      question: "En finn-beste-funksjon oppdaterer `beste`, men glemmer `beste_antall`. Hvilke data avslører feilen?",
      options: ["Data der den største verdien ikke står sist", "Data der alle verdiene er like store", "En tom ordbok uten noen nøkler i det hele tatt", "Data der alle verdiene er negative tall"],
      explanation: "Siden `beste_antall` står på 0, slår betingelsen til hver runde, og svaret blir den siste nøkkelen. Står den største sist, blir svaret riktig ved et uhell.",
    },
    {
      question: "Når er `-1` en trygg verdi for «ikke funnet»?",
      options: ["Når svaret er en plass i en liste", "Når verdiene i samlingen alltid er positive tall", "Når funksjonen også kan returnere `None` i andre tilfeller", "Når samlingen aldri kan være tom"],
      explanation: "En plass kan aldri være negativ, så de to betydningene kolliderer ikke. For temperaturer, saldoer og differanser er `-1` gyldige data — det er feilkode #10.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef endringer(m):\n    ny = []\n    for i in range(len(m)):\n        ny.append(m[i + 1] - m[i])\n    return ny\nprint(endringer([]))\n```",
      options: ["[]", "[0]", "None", "en feilmelding"],
      explanation: "Løkka går én runde for langt og krasjer med `IndexError` på alle ikke-tomme lister — men den tomme gir en tom liste, fordi løkka aldri kjører.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef snitt(t):\n    total = 0\n    for x in t:\n        total = total + x\n    return total / len(t)\nprint(snitt([2, 4]))\n```",
      options: ["3.0", "3", "6.0", "2.0"],
      explanation: "Funksjonen gir riktig gjennomsnitt her, men `/` gir alltid desimaltall. Feilen ligger et annet sted: den tomme lista gir `ZeroDivisionError`.",
    },
    {
      question: "Hvilke fem inndata prøver du alltid først når du leter etter en feil?",
      options: ["Tom samling, ett element, like verdier, ingen treff, verdi på grensen", "Store tall, negative tall, desimaltall, tekst og `None`", "Første element, siste element, midterste element og to naboer", "Sortert liste, usortert liste, tom liste og liste med duplikater"],
      explanation: "De fem kritiske inndataene dekker praktisk talt alle sjanger I-oppgavene, og de er like nyttige på din egen kode i Oppgave 3 og 4.",
    },
    {
      question: "I flervalgsvarianten av «finn feilen»: hva gjør du med en påstand du er usikker på?",
      options: ["Krysser av hvis du tror den stemmer — blankt gir garantert null", "Lar den stå blank, siden gale kryss trekker mer enn de gir", "Krysser av på alle fire for å sikre poengene som finnes", "Velger den påstanden som ligner mest på en kjent feilkode"],
      explanation: "Blankt er alltid feil på flervalg. Merk også at noen av påstandene i slike oppgaver **er** riktige — det er ikke gitt at koden er feil i det hele tatt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef har_rabatt(alder):\n    if alder <= 25:\n        return True\n    return False\nprint(har_rabatt(24), har_rabatt(25), har_rabatt(26))\n```",
      options: ["True True False", "True False False", "True True True", "False True False"],
      explanation: "Kontrollen for en grense er alltid tre kall: én under, én **på** og én over. Med `<` i stedet for `<=` ville det midterste vært `False`.",
    },
    {
      question: "Hva bør rettelsen din i en «finn feilen»-oppgave være?",
      options: ["Den minste endringen som fjerner feilen", "En full omskriving med bedre variabelnavn og struktur", "En kommentar som forklarer hva som er galt, uten kodeendring", "En ekstra `if` som fanger opp det tilfellet moteksempelet viste"],
      explanation: "Uttellingen følger det sensor kan se. Retter du og bytter navn og struktur samtidig, blir det uklart hva du mente. Unntaket er når feilen skyldes feil mønster — da bytter du hele mønsteret og skriver én setning om hvorfor.",
    },
  ],
  'in1000-5-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Konto:\n    def __init__(self, eier, saldo):\n        self._eier = eier\n        self._saldo = saldo\n\n    def sett_inn(self, belop):\n        self._saldo = self._saldo + belop\n\n    def hent_saldo(self):\n        return self._saldo\n\nk = Konto(\"Ada\", 100)\nk.sett_inn(50)\nprint(k.hent_saldo())\n```",
      options: ["150", "100", "50", "0"],
      explanation: "`sett_inn` legger 50 til saldoen som allerede var 100. `100` er svaret hvis man tror metoden ikke endrer objektet, og `50` hvis man tror den overskriver saldoen i stedet for å øke den.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Konto:\n    def __init__(self, eier, saldo):\n        self._eier = eier\n        self._saldo = saldo\n\n    def sett_inn(self, belop):\n        self._saldo = self._saldo + belop\n\n    def hent_saldo(self):\n        return self._saldo\n\na = Konto(\"Ada\", 100)\nb = Konto(\"Nora\", 100)\na.sett_inn(50)\nprint(a.hent_saldo(), b.hent_saldo())\n```",
      options: ["150 100", "150 150", "100 150", "100 100"],
      explanation: "To objekter av samme klasse har hver sine instansvariabler, så `b` er urørt. `150 150` er svaret hvis man tror objekter av samme klasse deler verdier — den vanligste fellen i flervalget om objekter.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Medlem:\n    def __init__(self, navn, alder):\n        self._navn = navn\n        self._alder = 0\n        alder = alder\n\n    def hent_alder(self):\n        return self._alder\n\nm = Medlem(\"Ada\", 24)\nprint(m.hent_alder())\n```",
      options: ["0", "24", "None", "-1"],
      explanation: "Linjen `alder = alder` setter en lokal variabel, ikke instansvariabelen — feilkode #1, `self`-fella. Startverdien 0 blir stående, så `24` er svaret bare hvis man overser at `self.` mangler.",
    },
    {
      question: "Hva er forskjellen på en klasse og et objekt?",
      options: ["Klassen er beskrivelsen av hvordan tingen ser ut og hva den kan; objektet er én konkret ting laget fra den.", "Objektet er beskrivelsen av hvordan tingen ser ut og hva den kan; klassen er én konkret ting laget fra det.", "Klassen holder verdiene som alle objektene deler; objektet holder bare metodene som hører til klassen.", "Klassen er et objekt som er laget fra en annen klasse, mens objektet alltid lages direkte fra Python."],
      explanation: "Klassen skrives én gang og brukes til å lage så mange objekter du vil. Ordet **instans** betyr det samme som objekt. Svaret som sier at klassen selv er laget fra en annen klasse, beskriver arv, som er utenfor pensum i dette emnet.",
    },
    {
      question: "Hvor mange verdier sender du inn når du lager et objekt av en klasse med `def __init__(self, a, b, c):`?",
      options: ["Tre — `self` fylles ut av Python og skal ikke oppgis av deg.", "Fire — `self` er en helt vanlig parameter som må fylles ut av den som kaller.", "Tre — men bare hvis alle tre er tekster, ellers må `self` oppgis i tillegg.", "To — `self` og den siste parameteren fylles begge ut av Python automatisk."],
      explanation: "Regelen er at definisjonen alltid har én parameter mer enn kallet har argumenter, og den ekstra er `self`. Sender du inn fire verdier, stopper programmet med en `TypeError`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sykkel:\n    def __init__(self, kode):\n        self._kode = kode\n        self._turer = 0\n\n    def tur(self):\n        self._turer = self._turer + 1\n\n    def hent(self):\n        return self._turer\n\ns = Sykkel(\"R31\")\ns.tur()\ns.tur()\ns.tur()\nprint(s.hent())\n```",
      options: ["3", "1", "0", "R31"],
      explanation: "Instansvariabelen overlever mellom metodekallene, så de tre kallene legger seg oppå hverandre. `1` er svaret hvis man tror verdien nullstilles mellom kallene, og `0` hvis man tror metoden ikke endrer objektet.",
    },
    {
      question: "Hva gjør linjen `sykkel1 = Sykkel(\"R31\", \"Blindern\")`?",
      options: ["Lager et nytt objekt, kaller `__init__` på det med de to verdiene, og lar `sykkel1` peke på resultatet.", "Kaller `__init__` på klassen `Sykkel`, endrer klassens egne verdier, og lar `sykkel1` peke på klassen.", "Lager et nytt objekt, men kaller ikke `__init__` før du selv skriver `sykkel1.__init__()` etterpå.", "Lager to nye objekter, ett for hver verdi i parentesen, og lar `sykkel1` peke på det siste av dem."],
      explanation: "Konstruktøren kalles automatisk i det øyeblikket objektet lages — du kaller den aldri selv. Klassen selv får ingen verdier; det er objektet som får dem.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rute:\n    def __init__(self, nummer):\n        self._nummer = nummer\n        self._paa = 0\n\n    def stigepaa(self, antall):\n        self._paa = antall\n\n    def hent(self):\n        return self._paa\n\nr = Rute(20)\nr.stigepaa(5)\nr.stigepaa(3)\nprint(r.hent())\n```",
      options: ["3", "8", "5", "0"],
      explanation: "Metoden bruker `=` og ikke `= self._paa + antall`, så det andre kallet **overskriver** det første. `8` er svaret hvis man leser metoden som en teller — en klassisk lesefelle når man forventer det vanlige mønsteret.",
    },
    {
      question: "Hva skjer om du skriver `def skriv():` uten `self` i en klasse, og så kaller `obj.skriv()`?",
      options: ["Programmet stopper, fordi metoden får objektet inn som argument uten å ha en parameter til det.", "Programmet kjører fint, fordi Python legger til `self` automatisk når parameteren mangler helt.", "Programmet kjører, men metoden får ikke tilgang til instansvariablene og skriver ut `None`.", "Programmet stopper, fordi Python krever at alle metoder returnerer en verdi med `return`."],
      explanation: "Siste linje i feilmeldingen er `TypeError: skriv() takes 0 positional arguments but 1 was given`. Det ene argumentet er objektet selv, som Python sender inn ut fra hva som står foran punktumet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Boks:\n    def __init__(self, materiale, vekt):\n        self._materiale = materiale\n        self._vekt = vekt\n\n    def skriv(self):\n        print(self._materiale, self._vekt)\n\nb = Boks(340, \"glass\")\nb.skriv()\n```",
      options: ["340 glass", "glass 340", "Feilmelding", "340glass"],
      explanation: "Verdiene ble sendt inn i feil rekkefølge, og Python sier ikke fra — objektet får materialet 340 og vekten «glass». `Feilmelding` er svaret hvis man tror Python kontrollerer typene, og det gjør den ikke.",
    },
    {
      question: "Hva betyr `self` inne i en metode?",
      options: ["Det objektet metoden ble kalt på, altså det som står foran punktumet i kallet.", "Klassen som metoden er definert i, slik at alle objektene endres samtidig.", "Den siste verdien som ble sendt inn til konstruktøren da objektet ble laget.", "Et nøkkelord i Python som alltid peker på det programmet som kjører nå."],
      explanation: "`self` er ikke et nøkkelord, bare navnet på den første parameteren — men navnet er en så fast konvensjon at fasiten alltid bruker det. Kaller du `a.skriv()`, er `self` det samme objektet som `a` peker på.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Spill:\n    def __init__(self, tittel, maks):\n        self._tittel = tittel\n        self._maks = maks\n\n    def hent_maks(self):\n        return self._maks\n\nspillene = []\nspillene.append(Spill(\"Kolonier\", 4))\nspillene.append(Spill(\"Sjakk\", 2))\nantall = 0\nfor s in spillene:\n    if s.hent_maks() >= 4:\n        antall = antall + 1\nprint(antall, len(spillene))\n```",
      options: ["1 2", "2 2", "1 1", "2 1"],
      explanation: "Bare det første spillet har maks på minst fire, men lista har to elementer. `2 2` er svaret hvis man teller elementene i stedet for treffene, og `1 1` hvis man tror telleren og lengden må bli like.",
    },
    {
      question: "Hvor skal instansvariabler som ikke kommer utenfra, som `self._turer = 0`, settes?",
      options: ["I konstruktøren, sammen med de andre — alt objektet skal huske, settes der.", "I den første metoden som trenger dem, slik at de ikke tar plass før de brukes.", "Rett under `class`-linjen, utenfor alle metodene, siden ingen sender dem inn.", "Utenfor klassen, rett etter at objektet er laget, med en tilordning på objektet."],
      explanation: "Settes de ikke i `__init__`, finnes de ikke, og første metode som leter etter dem, stopper programmet med `AttributeError`. Svaret om å sette variabelen utenfor klassen etter at objektet er laget, beskriver dessuten direkte tilgang utenfra, som er feilkode #11.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Teller:\n    def __init__(self):\n        self._n = 0\n\n    def opp(self):\n        n = self._n + 1\n\n    def hent(self):\n        return self._n\n\nt = Teller()\nt.opp()\nt.opp()\nprint(t.hent())\n```",
      options: ["0", "2", "1", "None"],
      explanation: "Metoden `opp` regner ut riktig verdi, men legger den i en **lokal** variabel `n` som forsvinner — feilkode #1 i en metode. `2` er svaret hvis man overser at `self.` mangler på venstre side.",
    },
    {
      question: "Hvorfor skrives klassenavn med stor forbokstav i denne boka?",
      options: ["Det er en konvensjon som gjør koden lettere å lese, og som fagets egne løsningsforslag følger.", "Python krever det, og en klasse med liten forbokstav gir en feilmelding ved definisjonen.", "Fordi navnet ellers ville blitt forvekslet med `self`, som alltid skrives med liten.", "Det er nødvendig for at konstruktøren `__init__` skal bli kalt automatisk ved instansiering."],
      explanation: "Python bryr seg ikke, men leseren gjør det: stor forbokstav foran en parentes betyr at et objekt lages. Variabler og metoder skrives med liten forbokstav.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, kapasitet):\n        self._navn = navn\n        self._kapasitet = kapasitet\n        self._paameldte = 0\n\n    def ledige(self):\n        return self._kapasitet - self._paameldte\n\n    def meld_paa(self, antall):\n        if antall > self.ledige():\n            print(\"Ikke plass\")\n        else:\n            self._paameldte = self._paameldte + antall\n\ns = Sal(\"Speilsal\", 10)\ns.meld_paa(7)\ns.meld_paa(5)\nprint(s.ledige())\n```",
      options: ["Ikke plass\n3", "Ikke plass\n-2", "Ikke plass\n5", "3\nIkke plass"],
      explanation: "Det andre kallet avvises, så antall påmeldte blir stående på 7 og tre plasser er igjen. `-2` er svaret hvis man tror påmeldingen skjer likevel, og svaret som starter med `3`, bytter om rekkefølgen på utskriftene.",
    },
    {
      question: "Hva er en spesialmetode?",
      options: ["En metode med to understreker på hver side av navnet, som Python kaller automatisk på bestemte tidspunkter.", "En metode som er skrevet av deg selv i stedet for å komme ferdig med Python-installasjonen.", "En metode som bare kan kalles fra andre metoder i samme klasse, aldri utenfra klassen.", "En metode som endrer instansvariablene til alle objektene av klassen samtidig når den kalles."],
      explanation: "I denne boka finnes bare to: `__init__`, som kjører når objektet lages, og `__str__`, som kjører når objektet skal skrives ut. Du kaller dem aldri selv.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel):\n        self._tittel = tittel\n        self._utlaant = False\n\n    def laan_ut(self):\n        self._utlaant = True\n\n    def status(self):\n        return self._utlaant\n\nboker = []\nboker.append(Bok(\"Sult\"))\nboker.append(Bok(\"Vaar\"))\nboker[0].laan_ut()\nprint(boker[0].status(), boker[1].status())\n```",
      options: ["True False", "True True", "False False", "False True"],
      explanation: "Metoden virker bare på objektet den ble kalt på, altså elementet med indeks 0. Legg merke til at Python skriver sannhetsverdier med stor forbokstav — det er verdt å huske til kortsvarsoppgavene.",
    },
    {
      question: "En metode skal gi et tall tilbake som kan brukes videre i et regnestykke. Hva må den gjøre?",
      options: ["Bruke `return` med verdien, slik at den som kaller, kan ta imot resultatet.", "Bruke `print` med verdien, slik at verdien vises og dermed blir tilgjengelig.", "Lagre verdien i en lokal variabel, som den som kaller, kan lese etterpå.", "Sette verdien på `self` uten understrek, slik at den blir synlig utenfra."],
      explanation: "Skillet mellom `return` og `print` er det samme som for vanlige funksjoner. En metode som skriver ut i stedet for å returnere, gir `None` tilbake, og alt som bygger videre på den, faller sammen.",
    },
    {
      question: "Hva menes med at et objekt har en tilstand?",
      options: ["At det husker verdiene sine mellom metodekallene, i motsetning til en ren verdi som et tall.", "At det kan være enten aktivt eller inaktivt, avhengig av om en metode kjører akkurat nå.", "At klassen har et eget felt som forteller hvilken av metodene som ble kalt sist.", "At alle objektene av samme klasse til enhver tid har de samme verdiene i seg."],
      explanation: "Tilstanden er alle instansvariablene til sammen. En sykkel som blir levert på et nytt stativ, endrer tilstand, men er fortsatt det samme objektet.",
    },
  ],
  'in1000-5-2': [
    {
      question: "Hva er en aksessor?",
      options: ["En metode som returnerer verdien til en instansvariabel, uten andre parametere enn `self`.", "En metode som setter verdien til en instansvariabel, med den nye verdien som parameter.", "En instansvariabel som er merket med understrek for at den skal kunne leses utenfra.", "En spesialmetode som Python kaller automatisk hver gang en verdi leses fra objektet."],
      explanation: "Kroppen er én linje: `return self._x`. Svaret om metoden som **setter** verdien, beskriver en mutator — den har alltid én parameter i tillegg til `self`.",
    },
    {
      question: "Hva må en mutator alltid ha, som en aksessor ikke har?",
      options: ["En parameter i tillegg til `self` — den nye verdien som skal settes.", "En `return`-setning på slutten som gir den gamle verdien tilbake.", "Et navn som begynner med `hent_`, slik at leseren ser hva den gjør.", "En understrek foran metodenavnet, siden den rører objektets innside."],
      explanation: "Uten parameter har mutatoren ingenting å sette verdien til, og det er en klassisk feil. Metodenavn skrives aldri med understrek — det er bare instansvariablene som har det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rett:\n    def __init__(self, navn, pris):\n        self._navn = navn\n        self._pris = pris\n\n    def hent_pris(self):\n        return self._pris\n\n    def sett_pris(self, ny):\n        self._pris = ny\n\nr = Rett(\"Suppe\", 89)\nr.sett_pris(95)\nprint(r.hent_pris())\n```",
      options: ["95", "89", "184", "None"],
      explanation: "Mutatoren overskriver den gamle prisen. `184` er svaret hvis man leser `sett_pris` som en metode som legger til, og `89` hvis man tror mutatoren ikke virker på objektet.",
    },
    {
      question: "Er instansvariabelen `_kapasitet` del av grensesnittet til klassen?",
      options: ["Nei — grensesnittet består bare av de offentlige metodene, med navn og parametere.", "Ja — den er del av grensesnittet så snart det finnes en aksessor som returnerer den.", "Ja — alle instansvariabler som settes i konstruktøren, er del av grensesnittet.", "Nei — men den blir del av grensesnittet hvis den skrives uten understrek foran."],
      explanation: "Metoden `hent_kapasitet()` er del av grensesnittet; variabelen er ikke det. At det finnes en aksessor, er nettopp beviset på at variabelen selv ikke er offentlig.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Konto:\n    def __init__(self, saldo):\n        self._saldo = saldo\n\n    def hent_saldo(self):\n        return self._saldo\n\nk = Konto(500)\nk._saldo = 900\nprint(k.hent_saldo())\n```",
      options: ["900", "500", "Feilmelding", "0"],
      explanation: "Python håndhever ingen stenging, så linjen `k._saldo = 900` virker. Det er likevel feilkode #11, direkte tilgang utenfra — en trekkfeil selv om programmet kjører helt fint.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, antall):\n        self._antall = antall\n\n    def hent(self):\n        return self._antall\n\n    def ta_ut(self, n):\n        if n > self._antall:\n            print(\"For faa\")\n        else:\n            self._antall = self._antall - n\n\nv = Vare(10)\nv.ta_ut(4)\nv.ta_ut(9)\nprint(v.hent())\n```",
      options: ["For faa\n6", "For faa\n-3", "6\nFor faa", "For faa\n1"],
      explanation: "Det andre uttaket avvises fordi 9 er mer enn de 6 som er igjen, så antallet står urørt. `-3` er svaret hvis man tror uttaket skjer likevel, altså at `else`-grenen ikke virker.",
    },
    {
      question: "Hvorfor bør en mutator som kontrollerer verdien, ha en `else`-gren?",
      options: ["Fordi verdien ellers settes uansett, og kontrollen bare skriver ut en advarsel uten å hindre noe.", "Fordi Python krever en `else`-gren hver gang en `if` står inne i en metode i en klasse.", "Fordi `else`-grenen er den eneste som får lov til å bruke `self` inne i en mutator.", "Fordi advarselen ellers skrives ut to ganger, én gang for hver gren i betingelsen."],
      explanation: "Uten `else` står tilordningen utenfor betingelsen og kjører alltid. Da har klassen ikke beskyttet noe, selv om koden ser ut som den gjør det.",
    },
    {
      question: "Hva står igjen når du skal skrive grensesnittet til en klasse?",
      options: ["Metodenavnene med parameterlistene sine, uten `self` og uten instansvariablene.", "Metodenavnene med kroppene sine, slik at leseren ser hvordan de gjør jobben.", "Instansvariablene med understrek, siden det er dem klassen faktisk holder på.", "Konstruktøren alene, siden det er den som bestemmer hva objektet inneholder."],
      explanation: "Fremgangsmåten er mekanisk: stryk alt med understrek, stryk metodekroppene. `self` skrives ikke, fordi den som kaller, aldri oppgir den.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Medlem:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def hent_navn(self):\n        print(self._navn)\n\nm = Medlem(\"Ada\")\nsvar = m.hent_navn()\nprint(svar)\n```",
      options: ["Ada\nNone", "Ada\nAda", "Ada", "None\nAda"],
      explanation: "Aksessoren skriver ut i stedet for å returnere, så den gir `None` tilbake. Det er nettopp derfor en aksessor alltid skal bruke `return` — verdien må kunne brukes videre.",
    },
    {
      question: "Hvorfor har klassen `Eksemplar` en `hent_antall_utlaan()`, men ingen `sett_antall_utlaan()`?",
      options: ["Fordi tellingen bare skal kunne gå opp gjennom utlånsmetoden, ikke settes fritt utenfra.", "Fordi Python ikke tillater mutatorer på instansvariabler som holder et heltall.", "Fordi en instansvariabel som er satt i konstruktøren, aldri kan endres senere.", "Fordi navnet er for langt til at metoden kan brukes fra andre deler av programmet."],
      explanation: "Fraværet av en mutator er et bevisst valg som låser verdien. En åpen sett-metode ville latt hvem som helst forfalske statistikken.",
    },
    {
      question: "Hva betyr det at understreken i `self._navn` er en konvensjon?",
      options: ["At Python ikke stopper deg fra å bruke variabelen utenfra — men at faget og fasiten forventer at du lar være.", "At Python gir en feilmelding hvis variabelen brukes utenfor klassen den er definert i.", "At understreken er valgfri, og at den bare brukes når klassen har mer enn tre variabler.", "At variabelen automatisk blir en del av grensesnittet så snart den får understrek."],
      explanation: "Det er derfor feilkode #11 er stum: koden kjører og gir riktig svar, men bryter en avtale sensor ser etter. Konvensjonen er ikke valgfri på eksamen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, kapasitet):\n        self._kapasitet = kapasitet\n        self._paameldte = 0\n\n    def ledige(self):\n        return self._kapasitet - self._paameldte\n\n    def meld_paa(self, n):\n        if n > self.ledige():\n            print(\"Fullt\")\n        else:\n            self._paameldte = self._paameldte + n\n\ns = Sal(8)\ns.meld_paa(5)\ns.meld_paa(3)\nprint(s.ledige())\n```",
      options: ["0", "Fullt\n0", "Fullt\n3", "3"],
      explanation: "Kantverdien avgjør: `3 > 3` er usann, så det andre kallet går gjennom og salen fylles helt opp. Med `>=` i stedet ville det blitt avvist, og svaret hadde vært `Fullt` og `3`.",
    },
    {
      question: "Hva er implementasjonen til en klasse?",
      options: ["Metodekroppene og valget av instansvariabler — altså hvordan klassen gjør jobben sin.", "Metodenavnene med parameterlistene — altså hva andre kan be klassen om å gjøre.", "Alle objektene som er laget fra klassen mens programmet kjører akkurat nå.", "Konstruktøren, som setter opp objektet før noen av de andre metodene kan brukes."],
      explanation: "Implementasjonen kan skrives helt om uten at noen merker det, så lenge grensesnittet er det samme. Svaret om metodenavnene med parameterlistene beskriver grensesnittet, som er det motsatte begrepet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Stativ:\n    def __init__(self, plasser):\n        self._plasser = plasser\n        self._sykler = 0\n\n    def hent_ledige(self):\n        return self._plasser - self._sykler\n\n    def sett_inn(self, n):\n        self._sykler = self._sykler + n\n\ns = Stativ(12)\ns.sett_inn(5)\ns.sett_inn(4)\nprint(s.hent_ledige())\n```",
      options: ["3", "12", "9", "8"],
      explanation: "Aksessoren regner ut svaret av to instansvariabler i stedet for å lagre det: 12 minus 9. `9` er svaret hvis man leser metoden som «antall sykler» i stedet for «antall ledige».",
    },
    {
      question: "En klasse vil bytte fra å lagre poeng som ett tall til å lagre dem som en liste av delpoeng. Hva må til for at resten av programmet kan stå urørt?",
      options: ["At `hent_poeng()` fortsatt returnerer et tall — grensesnittet må være uendret.", "At den nye lista får samme navn som det gamle tallet, slik at alle linjer fortsatt virker.", "At alle som bruker klassen, får beskjed om å lese den nye lista i stedet for tallet.", "At klassen beholder både tallet og lista, slik at begge måtene å lese på fortsatt går."],
      explanation: "Det er hele gevinsten ved innkapsling: innsiden kan skrives om så lenge grensesnittet holdes. Har noen skrevet `b._poeng` utenfra, faller den delen sammen — den konkrete kostnaden ved feilkode #11.",
    },
    {
      question: "Hva heter aksessoren i fasitens stil når verdien er sann eller usann?",
      options: ["`er_utlaant()` — formen `er_...` leses bedre når kallet er en påstand.", "`sett_utlaant()` — formen `sett_...` brukes for alle sannhetsverdier.", "`_utlaant()` — understreken beholdes fordi verdien hører til innsiden.", "`utlaant_hent()` — verdien settes først i navnet når svaret er sant eller usant."],
      explanation: "Både `er_utlaant()` og `hent_utlaant()` er riktige, og fasiten bruker begge. Metodenavn har aldri understrek foran — det er bare instansvariablene som har det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bruker:\n    def __init__(self, navn):\n        self._navn = navn\n        self._poeng = 0\n\n    def gi_poeng(self, n):\n        poeng = self._poeng + n\n\n    def hent_poeng(self):\n        return self._poeng\n\nb = Bruker(\"Ada\")\nb.gi_poeng(10)\nb.gi_poeng(5)\nprint(b.hent_poeng())\n```",
      options: ["0", "15", "5", "10"],
      explanation: "Metoden regner ut riktig verdi, men legger den i en lokal variabel `poeng` som forsvinner — feilkode #1 i en metode. `15` er svaret hvis man overser at `self.` mangler på venstre side.",
    },
    {
      question: "Hvorfor er `obj._x = verdi` utenfor klassen verre enn `print(obj._x)`?",
      options: ["Fordi en endring hopper over reglene klassen skulle passe på, og kan sette objektet i en umulig tilstand.", "Fordi Python bare gir en feilmelding når man skriver til variabelen, ikke når man leser den.", "Fordi lesing utenfra er tillatt i konvensjonen, mens skriving er den eneste formen som trekker.", "Fordi en tilordning utenfra sletter alle de andre instansvariablene til objektet samtidig."],
      explanation: "Begge er feilkode #11, men skrivingen er dyrest: den kan sette 80 passasjerer på en rute med kapasitet 60. Ingen av dem gir feilmelding — det er nettopp derfor de er lette å gjøre.",
    },
  ],
  'in1000-5-3': [
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, aar):\n        self._tittel = tittel\n        self._aar = aar\n\n    def __str__(self):\n        return self._tittel + \" (\" + str(self._aar) + \")\"\n\nb = Bok(\"Sult\", 1890)\nprint(b)\n```",
      options: ["Sult (1890)", "Sult 1890", "Sult(1890)", "Sult, 1890"],
      explanation: "Mellomrommet og parentesene er skrevet inn for hånd i `__str__`, og `+` legger ikke til noe av seg selv. `Sult 1890` er svaret hvis man leser skjøtingen som et `print` med komma.",
    },
    {
      question: "Hva må `__str__` alltid gjøre?",
      options: ["Returnere en tekst — verken skrive ut noe eller returnere et tall.", "Skrive ut objektets verdier, slik at `print(obj)` viser dem på skjermen.", "Returnere et tall som beskriver objektet, siden tall alltid kan skrives ut.", "Kalle konstruktøren på nytt, slik at objektet får friske verdier før utskrift."],
      explanation: "Bruker du `print` inni, returnerer metoden `None`, og programmet stopper med `TypeError: __str__ returned non-string (type NoneType)`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, aar):\n        self._tittel = tittel\n        self._aar = aar\n\n    def __str__(self):\n        return self._tittel + \" (\" + str(self._aar) + \")\"\n\nb = Bok(\"Sult\", 1890)\nprint(str(b) + \"!\")\nprint(b, \"!\")\n```",
      options: ["Sult (1890)!\nSult (1890) !", "Sult (1890) !\nSult (1890)!", "Sult (1890)!\nSult (1890)!", "Sult (1890) !\nSult (1890) !"],
      explanation: "`+` skjøter uten mellomrom, mens komma i `print` setter inn ett. Blander man de to, blir formatet feil selv om alt annet er riktig.",
    },
    {
      question: "Hvorfor må et tall gjennom `str(...)` når det skjøtes med tekst i `__str__`?",
      options: ["Fordi `+` mellom en tekst og et tall ikke er tillatt, og Python nekter å gjette hva du mente.", "Fordi `__str__` bare kan lese instansvariabler som allerede er lagret som tekst.", "Fordi tall alltid skrives med desimaler når de settes inn i en tekst uten `str`.", "Fordi `+` mellom tekst og tall legger tallet til lengden av teksten i stedet."],
      explanation: "Plusstegnet betyr «legg sammen» for to tall og «skjøt sammen» for to tekster. Siste linje i feilmeldingen er `TypeError: can only concatenate str (not \"int\") to str`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel):\n        self._tittel = tittel\n\n    def __str__(self):\n        return \"Bok: \" + self._tittel\n\nclass Hylle:\n    def __init__(self):\n        self._boker = []\n\n    def legg_til(self, b):\n        self._boker.append(b)\n\n    def skriv_alle(self):\n        for b in self._boker:\n            print(b)\n        print(\"Sum:\", len(self._boker))\n\nh = Hylle()\nh.legg_til(Bok(\"Sult\"))\nh.legg_til(Bok(\"Vaar\"))\nh.skriv_alle()\n```",
      options: ["Bok: Sult\nBok: Vaar\nSum: 2", "Bok: Sult\nSum: 1\nBok: Vaar\nSum: 2", "Bok: Sult\nBok: Vaar", "Sum: 2\nBok: Sult\nBok: Vaar"],
      explanation: "Den siste `print`-linjen står uten innrykk under løkka og kjører derfor én gang, etter at begge bøkene er skrevet. Første distraktor er svaret hvis man leser linjen som om den lå inne i løkka.",
    },
    {
      question: "Hva kalles det at `Bibliotek` lar hver `Bok` skrive seg selv ut, i stedet for å hente feltene selv?",
      options: ["Delegering — ytterklassen ber underobjektet gjøre jobben.", "Innkapsling — ytterklassen skjuler feltene sine bak metoder.", "Instansiering — ytterklassen lager nye objekter av underklassen.", "Konvertering — ytterklassen gjør underobjektene om til tekst selv."],
      explanation: "Delegering er fast delkrav i den store oppgaven. Alternativet, `print(b.hent_tittel(), b.hent_aar())`, dupliserer visningen og gir dårligere uttelling.",
    },
    {
      question: "Hvorfor skal containerens utskriftsmetode hete `skriv_alle` og ikke `skriv`?",
      options: ["Fordi den gjør noe annet enn elementets metode, og en metode som ser ut til å kalle seg selv, er vanskelig å lese.", "Fordi Python ikke tillater at to metoder i samme program har det samme navnet.", "Fordi `skriv` er et reservert ord i Python og ikke kan brukes som metodenavn.", "Fordi containeren må ha et lengre navn enn elementet for at delegering skal virke."],
      explanation: "`bok.skriv()` viser én bok, `bibliotek.skriv_alle()` viser alle — to ulike jobber. En metode som kaller seg selv, er rekursjon, som er utenfor pensum i dette emnet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def __str__(self):\n        return self._navn + \" x\" + str(self._antall)\n\n    def selg(self, n):\n        self._antall = self._antall - n\n\nv = Vare(\"skrue\", 10)\nprint(v)\nv.selg(4)\nprint(v)\n```",
      options: ["skrue x10\nskrue x6", "skrue x10\nskrue x10", "skrue x6\nskrue x6", "skrue x10\nskrue x4"],
      explanation: "`__str__` leser instansvariablene på nytt hver gang den kalles, så utskriften følger endringen av seg selv. Første distraktor er svaret hvis man tror teksten lages én gang og huskes.",
    },
    {
      question: "Hva skjer når du skriver `print(obj)` på et objekt av en klasse uten `__str__`?",
      options: ["Python viser klassenavnet og en adresse i minnet, som endrer seg fra kjøring til kjøring.", "Python stopper programmet med en feilmelding om at metoden `__str__` mangler.", "Python viser alle instansvariablene til objektet, i den rekkefølgen de ble satt.", "Python viser den tomme teksten, siden objektet ikke har noen tekstform ennå."],
      explanation: "Utskriften ser ut som `<__main__.Bok object at 0x104a2f130>`. Fordi tallet er en minneadresse, kan en slik utskrift aldri være fasit i en sporingsoppgave.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, plasser):\n        self._navn = navn\n        self._plasser = plasser\n\n    def hent_navn(self):\n        return self._navn\n\n    def __str__(self):\n        return self._navn + \"/\" + str(self._plasser)\n\nsaler = {}\ns1 = Sal(\"Speilsal\", 20)\ns2 = Sal(\"Speilsal\", 8)\nsaler[s1.hent_navn()] = s1\nsaler[s2.hent_navn()] = s2\nfor n in saler:\n    print(n, saler[n])\nprint(len(saler))\n```",
      options: ["Speilsal Speilsal/8\n1", "Speilsal Speilsal/20\n1", "Speilsal Speilsal/20\nSpeilsal Speilsal/8\n2", "Speilsal Speilsal/8\n2"],
      explanation: "En ordbok kan aldri ha to like nøkler, så den andre innsettingen overskriver den første uten en advarsel. Svaret som skriver ut én linje, men oppgir lengden 2, er svaret hvis man tror begge objektene ligger der.",
    },
    {
      question: "Hva er forskjellen på `__str__` og en vanlig skriv-metode?",
      options: ["`__str__` returnerer en tekst som kan brukes videre; skriv-metoden viser noe og gir ingenting tilbake.", "`__str__` viser noe og gir ingenting tilbake; skriv-metoden returnerer en tekst som kan brukes videre.", "`__str__` kalles bare av `print`, mens skriv-metoden kalles bare av `str` og aldri av `print`.", "`__str__` kan bare brukes på objekter i en liste, mens skriv-metoden virker på alle objekter."],
      explanation: "Fordi `__str__` returnerer, kan teksten legges i en liste, skjøtes eller sammenlignes. Ber oppgaven om «en metode som skriver ut opplysningene», er skriv-metoden riktig svar.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Medlem:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def __str__(self):\n        return self._navn\n\nm = Medlem(\"Ada\")\nlinjer = []\nlinjer.append(str(m))\nlinjer.append(str(m) + \" (ny)\")\nprint(linjer)\n```",
      options: ["['Ada', 'Ada (ny)']", "[Ada, Ada (ny)]", "['Ada', 'Ada(ny)']", "['Ada']"],
      explanation: "Lista skrives med hakeparenteser og enkle anførselstegn rundt hver tekst, med komma og mellomrom mellom. Det er verdt å huske til sporingsoppgavene at anførselstegnene bare vises når hele lista skrives ut.",
    },
    {
      question: "Hva bør en søkemetode i en container returnere når nøkkelen ikke finnes?",
      options: ["`None`, etter en `if navn in ...`-sjekk som hindrer at programmet stopper.", "Den tomme teksten, slik at den som kaller, kan skrive ut svaret uansett.", "Tallet `-1`, som er den vanlige måten å signalisere «ikke funnet» på i Python.", "Selve ordboka, slik at den som kaller, kan lete videre i den på egen hånd."],
      explanation: "Uten sjekken stopper programmet med `KeyError` — feilkode #14. `None` er Pythons ord for «ingen verdi», og den som kaller, kan sjekke med `if svar != None:`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rute:\n    def __init__(self, nummer, sted):\n        self._nummer = nummer\n        self._sted = sted\n\n    def __str__(self):\n        return \"Rute \" + str(self._nummer) + \" - \" + self._sted\n\nruter = []\nruter.append(Rute(20, \"Blindern\"))\nruter.append(Rute(31, \"Toyen\"))\nfor r in ruter:\n    print(r)\nprint(ruter[1])\n```",
      options: ["Rute 20 - Blindern\nRute 31 - Toyen\nRute 31 - Toyen", "Rute 20 - Blindern\nRute 31 - Toyen\nRute 20 - Blindern", "Rute 20 - Blindern\nRute 31 - Toyen", "Rute 20 Blindern\nRute 31 Toyen\nRute 31 Toyen"],
      explanation: "Løkka skriver begge, og siste linje skriver elementet med indeks 1, altså det andre. Første distraktor er svaret hvis man leser indeks 1 som det første elementet.",
    },
  ],
  'in1000-5-4': [
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Kurv:\n    def __init__(self):\n        self._n = 0\n\n    def legg_i(self):\n        self._n = self._n + 1\n\n    def hent(self):\n        return self._n\n\na = Kurv()\nb = a\na.legg_i()\nprint(a.hent(), b.hent())\n```",
      options: ["1 1", "1 0", "0 1", "2 2"],
      explanation: "`b = a` kopierer referansen, ikke objektet, så begge navnene peker på den samme kurven. `1 0` er svaret hvis man leser tilordningen som en kopi — feilkode #2.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Kurv:\n    def __init__(self):\n        self._n = 0\n\n    def legg_i(self):\n        self._n = self._n + 1\n\n    def hent(self):\n        return self._n\n\na = Kurv()\nb = Kurv()\na.legg_i()\nprint(a.hent(), b.hent())\n```",
      options: ["1 0", "1 1", "0 1", "0 0"],
      explanation: "Her står klassenavnet med parentes to ganger, så det finnes to objekter. Sammenlign med varianten der andre linje er `b = a` — da blir svaret `1 1`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Merke:\n    def __init__(self, tekst):\n        self._tekst = tekst\n\n    def sett(self, ny):\n        self._tekst = ny\n\n    def __str__(self):\n        return self._tekst\n\na = Merke(\"rod\")\nb = a\na = Merke(\"blaa\")\nprint(a, b)\n```",
      options: ["blaa rod", "blaa blaa", "rod blaa", "rod rod"],
      explanation: "Den tredje linjen er en rebinding: den flytter bare pilen fra `a`. Det gamle objektet er uendret, og `b` peker fortsatt på det. `blaa blaa` er svaret hvis man tror tilordningen endrer objektet.",
    },
    {
      question: "Hva gjør tilordningen `b = a` når `a` peker på et objekt?",
      options: ["Den lar `b` peke på det samme objektet — ingen kopi lages.", "Den lager en kopi av objektet, slik at `a` og `b` kan endres uavhengig.", "Den flytter objektet fra `a` til `b`, slik at `a` etterpå ikke peker på noe.", "Den lager et nytt objekt med de samme verdiene, men med en egen identitet."],
      explanation: "Python kopierer aldri et objekt av seg selv. Skal du ha et nytt objekt, må klassenavnet med parentes stå der.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Merke:\n    def __init__(self, tekst):\n        self._tekst = tekst\n\n    def sett(self, ny):\n        self._tekst = ny\n\n    def __str__(self):\n        return self._tekst\n\na = Merke(\"rod\")\nb = a\na.sett(\"gul\")\nprint(a, b)\n```",
      options: ["gul gul", "gul rod", "rod gul", "rod rod"],
      explanation: "Metodekallet skriver i boksen begge pilene peker på, så endringen sees gjennom begge navnene. Sammenlign med `a = Merke(\"gul\")`, som bare ville flyttet den ene pilen.",
    },
    {
      question: "Hvordan teller du hvor mange objekter et program har laget?",
      options: ["Ved å telle hvor mange ganger et klassenavn står med parentes bak seg.", "Ved å telle hvor mange variabler som er tilordnet et objekt i programmet.", "Ved å telle hvor mange elementer listene og ordbøkene til sammen inneholder.", "Ved å telle hvor mange metoder som er kalt på objektene underveis i koden."],
      explanation: "Fire referanser i en liste kan være fire objekter, tre, eller ett. `len(liste)` teller referanser, ikke objekter — det er nettopp den forskjellen spørsmålet måler.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Post:\n    def __init__(self, tekst):\n        self._tekst = tekst\n\n    def __str__(self):\n        return self._tekst\n\na = Post(\"en\")\nliste = []\nliste.append(a)\nliste.append(a)\na = Post(\"to\")\nliste.append(a)\nfor p in liste:\n    print(p)\nprint(len(liste))\n```",
      options: ["en\nen\nto\n3", "en\nen\nen\n3", "to\nto\nto\n3", "en\nto\n2"],
      explanation: "De to første `append`-ene la inn referanser til det første objektet, og rebindingen rørte dem ikke. Lista har tre referanser til to objekter.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Kort:\n    def __init__(self, p):\n        self._p = p\n\n    def sett(self, n):\n        self._p = n\n\n    def hent(self):\n        return self._p\n\ndef erstatt(k):\n    k = Kort(0)\n\nkort = Kort(10)\nerstatt(kort)\nprint(kort.hent())\n```",
      options: ["10", "0", "None", "Feilmelding"],
      explanation: "Parameteren `k` er et lokalt navn, og tilordningen flytter bare den lokale pilen. Variabelen `kort` utenfor er aldri rørt — feilkode #12 i objektform.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Kort:\n    def __init__(self, p):\n        self._p = p\n\n    def sett(self, n):\n        self._p = n\n\n    def hent(self):\n        return self._p\n\ndef nullstill(k):\n    k.sett(0)\n\nkort = Kort(10)\nnullstill(kort)\nprint(kort.hent())\n```",
      options: ["0", "10", "None", "Feilmelding"],
      explanation: "Her endres selve objektet gjennom en mutator, og endringen sees av alle som peker på det. Sammenlign med varianten som skriver `k = Kort(0)` — den gjør ingenting synlig.",
    },
    {
      question: "Hva kan en funksjon gjøre med et objekt den får inn som parameter?",
      options: ["Endre objektet gjennom metodene, men ikke flytte kallerens variabel til et annet objekt.", "Flytte kallerens variabel til et annet objekt, men ikke endre objektet selv.", "Både endre objektet og flytte kallerens variabel, siden parameteren peker dit.", "Verken endre objektet eller flytte kallerens variabel — parameteren er en kopi."],
      explanation: "Parameteren er et lokalt navn som peker på det samme objektet. Skal funksjonen gi kalleren noe nytt å peke på, må den `return`-ere det, og kalleren tilordne det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = 5\nb = a\na = a + 1\nprint(a, b)\n```",
      options: ["6 5", "6 6", "5 6", "5 5"],
      explanation: "Tall er uforanderlige, så `a = a + 1` er en rebinding og ikke en endring. Derfor merker du aldri delingen for tall — men du merker den for lister, ordbøker og egne klasser.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\na = [1]\nb = a\na.append(2)\nprint(a, b)\n```",
      options: ["[1, 2] [1, 2]", "[1, 2] [1]", "[1] [1, 2]", "[1, 2] [2]"],
      explanation: "Lister kan endres, så `append` gjør delingen synlig — feilkode #15, aliasing. Sammenlign med tall, der `a = a + 1` bare ville flyttet den ene pilen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Eier:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def hent_navn(self):\n        return self._navn\n\n    def sett_navn(self, n):\n        self._navn = n\n\nclass Konto:\n    def __init__(self, eier):\n        self._eier = eier\n\n    def hent_eier(self):\n        return self._eier\n\nada = Eier(\"Ada\")\nk = Konto(ada)\nada.sett_navn(\"Nora\")\nprint(k.hent_eier().hent_navn())\n```",
      options: ["Nora", "Ada", "None", "Nora Ada"],
      explanation: "Kontoen peker på selve eier-objektet og leser navnet på nytt hver gang. Hadde konstruktøren lagret navnet som tekst i stedet, ville svaret blitt `Ada` — en klassisk modelleringsfeil.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Eier:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def hent_navn(self):\n        return self._navn\n\nclass Konto:\n    def __init__(self, eier):\n        self._eier = eier\n\n    def hent_eier(self):\n        return self._eier\n\nada = Eier(\"Ada\")\nk = Konto(ada)\nada = Eier(\"Nora\")\nprint(k.hent_eier().hent_navn())\n```",
      options: ["Ada", "Nora", "None", "Ada Nora"],
      explanation: "Her ble bare pilen fra `ada` flyttet til et nytt objekt. Kontoens instansvariabel peker fortsatt på det opprinnelige, som fremdeles heter Ada.",
    },
    {
      question: "Hvorfor bør en klasse lagre `self._eier = person` og ikke `self._eier_navn = person.hent_navn()`?",
      options: ["Fordi referansen leses på nytt hver gang, så modellen holder seg i takt når personen endres.", "Fordi et navn som tekst tar mer plass i minnet enn en referanse til et objekt.", "Fordi Python ikke tillater at en instansvariabel holder en tekst fra et annet objekt.", "Fordi en aksessor bare kan kalles på et objekt som er lagret i en annen klasse."],
      explanation: "Lagrer du rådataen, blir den foreldet i det øyeblikket personen skifter navn. Å lagre objektreferanser i stedet for rådata er en av de faste vurderingene i den store oppgaven.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn):\n        self._navn = navn\n        self._paa = 0\n\n    def meld_paa(self, n):\n        self._paa = self._paa + n\n\n    def __str__(self):\n        return self._navn + \"(\" + str(self._paa) + \")\"\n\nspeil = Sal(\"Speilsal\")\nsaler = {}\nsaler[\"a\"] = speil\nsaler[\"b\"] = speil\nspeil.meld_paa(4)\nprint(saler[\"a\"], saler[\"b\"], len(saler))\n```",
      options: ["Speilsal(4) Speilsal(4) 2", "Speilsal(4) Speilsal(0) 2", "Speilsal(4) Speilsal(4) 1", "Speilsal(0) Speilsal(0) 2"],
      explanation: "To nøkler peker på det samme objektet, så påmeldingen sees begge steder. `len` teller nøkler, ikke objekter — det finnes bare én sal.",
    },
    {
      question: "En funksjon bytter to parametere med `hjelp = p; p = q; q = hjelp`. Hva ser den som kalte?",
      options: ["Ingen endring — bare de lokale navnene ble byttet om.", "At de to objektene har byttet innhold, siden parameterne peker på dem.", "At den første variabelen nå peker på det andre objektet, men ikke omvendt.", "En feilmelding, fordi en funksjon ikke kan tilordne til sine egne parametere."],
      explanation: "Pilene inne i funksjonen er lokale. Skal et bytte virke, må funksjonen endre objektenes innhold med mutatorer — eller returnere, slik at kalleren gjør tilordningen.",
    },
    {
      question: "Hva skjer med det gamle objektet etter en rebinding `a = Boks(5)`?",
      options: ["Det er helt uendret, og lever videre så lenge noe annet peker på det.", "Det slettes umiddelbart, og alle andre navn på det slutter å virke.", "Det får verdiene til det nye objektet, slik at de to blir like.", "Det flyttes inn i det nye objektet og kan hentes ut derfra senere."],
      explanation: "Rebinding rører aldri objektet. Peker ingenting lenger på det, rydder Python det bort av seg selv — men i en typisk eksamenssnutt gjør en liste eller en instansvariabel fortsatt det.",
    },
    {
      question: "Hvor mange `Bok`-objekter er laget, og hva skriver koden ut?\n\n```python\nclass Bok:\n    def __init__(self, t):\n        self._t = t\n\n    def __str__(self):\n        return self._t\n\na = Bok(\"en\")\nb = Bok(\"en\")\nliste = [a, b, a]\nprint(len(liste))\n```",
      options: ["To objekter, og utskriften er `3`", "Tre objekter, og utskriften er `3`", "To objekter, og utskriften er `2`", "Ett objekt, og utskriften er `3`"],
      explanation: "Klassenavnet står med parentes to ganger, så det finnes to objekter — like verdier gjør dem ikke til ett. Lista holder tre referanser, og `len` teller dem.",
    },
    {
      question: "Hva er den raskeste måten å løse et flervalg om referanser på?",
      options: ["Tegne én boks per objekt og én pil per variabel, og oppdatere tegningen linje for linje.", "Lese koden tre ganger og velge det alternativet som virker mest sannsynlig.", "Regne ut sluttverdiene først, og deretter finne ut hvilke variabler som har dem.", "Se på hvor mange variabler som er brukt, siden hver variabel svarer til ett objekt."],
      explanation: "En tilordning mellom to variabler flytter en pil; et metodekall skriver i en boks. Tegningen brukes til alle fire spørsmålene om samme snutt, så to minutter på den er godt brukt.",
    },
  ],
  'in1000-5-5': [
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Hund:\n    def __init__(self, navn, alder):\n        self._navn = navn\n        self._alder = 0\n        alder = alder\n\n    def hent_alder(self):\n        return self._alder\n\nh = Hund(\"Rex\", 4)\nprint(h.hent_alder())\n```",
      options: ["0", "4", "None", "-1"],
      explanation: "Linjen `alder = alder` er lokal og forsvinner — `self`-fella, feilkode #1. Startverdien 0 gjør at programmet kjører rolig og svarer feil, i stedet for å stoppe.",
    },
    {
      question: "En konstruktør har `alder = alder` og INGEN `self._alder`-linje. Hva skjer når en aksessor leser `self._alder`?",
      options: ["Programmet stopper med `AttributeError`, fordi instansvariabelen aldri ble laget.", "Programmet svarer `0`, fordi tall alltid får null som startverdi i Python.", "Programmet svarer `None`, fordi variabelen finnes, men uten noen verdi ennå.", "Programmet svarer verdien som ble sendt inn, fordi parameteren heter det samme."],
      explanation: "`self`-fella har to utfall: uten startverdi stopper programmet, med startverdi svarer det rolig feil. Se etter om startverdien finnes, før du velger.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Teller:\n    def __init__(self):\n        self._n = 0\n\n    def opp(self):\n        n = self._n + 1\n\n    def ned(self):\n        self._n = self._n - 1\n\n    def hent(self):\n        return self._n\n\nt = Teller()\nt.opp()\nt.opp()\nt.ned()\nprint(t.hent())\n```",
      options: ["-1", "1", "2", "0"],
      explanation: "`opp` legger resultatet i en lokal variabel som kastes, mens `ned` skriver til `self._n`. `1` er svaret hvis man tror begge metodene virker.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Merke:\n    def __init__(self, tekst):\n        self._tekst = tekst\n\n    def sett(self, ny):\n        self._tekst = ny\n\n    def __str__(self):\n        return self._tekst\n\na = Merke(\"rod\")\nb = a\nc = Merke(\"rod\")\na.sett(\"gul\")\nprint(a, b, c)\n```",
      options: ["gul gul rod", "gul rod rod", "gul gul gul", "rod rod rod"],
      explanation: "`c` ble laget med samme verdi som `a`, men er et annet objekt — like verdier gjør ikke to objekter til ett. `gul rod rod` er svaret hvis man leser `b = a` som en kopi.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Merke:\n    def __init__(self, tekst):\n        self._tekst = tekst\n\n    def sett(self, ny):\n        self._tekst = ny\n\n    def __str__(self):\n        return self._tekst\n\na = Merke(\"en\")\nb = a\na = Merke(\"to\")\nb.sett(\"tre\")\nprint(a, b)\n```",
      options: ["to tre", "tre tre", "to to", "en tre"],
      explanation: "Rebindingen flyttet bare pilen fra `a`; det gamle objektet lever videre fordi `b` peker på det. `tre tre` er svaret hvis man tror de to navnene fortsatt er koblet.",
    },
    {
      question: "Hva er steg 1 i oppskriften for Oppgave 2?",
      options: ["Å lese konstruktørene og skrive opp bare de linjene som starter med `self._`.", "Å lese siste linje i snutten, siden det er den som avgjør hva som skrives ut.", "Å telle hvor mange metoder klassene har, siden det gir antall spørsmål.", "Å lese alternativene først, siden de forteller hva spørsmålet er ute etter."],
      explanation: "En plantet `self`-felle gjør alle startverdiene i sporingen gale. Steg 1 er det viktigste og det som oftest hoppes over.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn):\n        self._navn = navn\n        self._paa = 0\n\n    def meld_paa(self, n):\n        self._paa = self._paa + n\n\n    def hent(self):\n        return self._paa\n\ndef bytt_ut(sal):\n    sal = Sal(\"Ny\")\n    sal.meld_paa(99)\n\ns = Sal(\"Speilsal\")\ns.meld_paa(7)\nbytt_ut(s)\nprint(s.hent())\n```",
      options: ["7", "99", "106", "0"],
      explanation: "Tilordningen inne i funksjonen flytter bare det lokale navnet, og de 99 havner i et objekt som forsvinner — feilkode #12. Grensen går ved punktumet: `sal.meld_paa(...)` ville truffet objektet utenfor.",
    },
    {
      question: "Hvor mange objekter finnes etter `a = Boks(1)`, `b = a`, `a = Boks(5)`?",
      options: ["To — rebindingen slettet ingenting, og `b` peker fortsatt på det første.", "Ett — det første objektet forsvant da `a` ble tilordnet på nytt.", "Tre — hver av de tre linjene lager sitt eget objekt i minnet.", "To — men bare det nye kan brukes, siden `b` mistet forbindelsen sin."],
      explanation: "Tell hvor mange ganger klassenavnet står med parentes: to. Det gamle objektet lever så lenge noe peker på det, og `b.sett(...)` ville derfor fortsatt virke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, t):\n        self._t = t\n\n    def sett(self, n):\n        self._t = n\n\n    def __str__(self):\n        return self._t\n\nsult = Bok(\"Sult\")\nh1 = []\nh2 = []\nh1.append(sult)\nh2.append(sult)\nsult.sett(\"Sult 1890\")\nsult = Bok(\"Vaar\")\nh1.append(sult)\nprint(h1[0], h1[1], h2[0], len(h2))\n```",
      options: ["Sult 1890 Vaar Sult 1890 1", "Sult Vaar Sult 1", "Sult 1890 Vaar Vaar 1", "Sult 1890 Vaar Sult 1890 2"],
      explanation: "Tittelendringen skjedde før rebindingen og traff boka som ligger i begge listene. Den andre lista fikk aldri den nye boka, så lengden er 1.",
    },
    {
      question: "Hvilket av disse beskriver grensesnittet til en klasse riktig?",
      options: ["Metodenavnene med parameterlistene sine, uten `self` og uten understrek-variablene.", "Metodenavnene med `self` med i parameterlista, slik de er skrevet i klassen.", "Instansvariablene med understrek, siden det er dem klassen faktisk holder på.", "Konstruktøren alene, siden det er den som bestemmer hva objektet inneholder."],
      explanation: "`self` fylles ut av Python og er ikke noe den som kaller, forholder seg til. Understrek-variablene er innside, også de som har en aksessor.",
    },
    {
      question: "Er `_passasjerer` en instansvariabel, når den settes med `self._passasjerer = 0` i konstruktøren?",
      options: ["Ja — den settes med `self._` og hører til objektet, selv om den ikke er del av grensesnittet.", "Nei — understreken betyr at den ikke hører til objektet, bare til metoden som satte den.", "Ja — og den er dermed også del av grensesnittet, siden den er satt i konstruktøren.", "Nei — den blir først en instansvariabel når det finnes en aksessor som returnerer den."],
      explanation: "Understreken bærer to budskap: «dette er en instansvariabel» og «dette er ikke del av grensesnittet». Les hvilket av de to ordene spørsmålet bruker.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent(self):\n        return self._antall\n\nskrue = Vare(\"skrue\", 6)\nlager = {}\nlager[\"skrue\"] = skrue\nlager[\"A\"] = skrue\nsum_antall = 0\nfor kk in lager:\n    sum_antall = sum_antall + lager[kk].hent()\nprint(sum_antall, len(lager))\n```",
      options: ["12 2", "6 2", "6 1", "12 1"],
      explanation: "To nøkler peker på det samme objektet, så summen over nøklene teller det to ganger. `6 2` er svaret hvis man tror summen teller objekter og ikke nøkler.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Stativ:\n    def __init__(self, plasser):\n        self._plasser = plasser\n        self._sykler = []\n\n    def sett_inn(self, s):\n        if len(self._sykler) < self._plasser:\n            self._sykler.append(s)\n        else:\n            print(\"Fullt\")\n\n    def antall(self):\n        return len(self._sykler)\n\nst = Stativ(2)\nst._sykler.append(\"R31\")\nst._sykler.append(\"R48\")\nst._sykler.append(\"R99\")\nprint(st.antall())\n```",
      options: ["3", "2", "Fullt\n2", "0"],
      explanation: "Linjene går rett på instansvariabelen og hopper over kapasitetssjekken — feilkode #11. Python håndhever ingen stenging, så stativet får flere sykler enn det har plasser.",
    },
    {
      question: "Ved et «finn feilen»-spørsmål: hva gir full uttelling?",
      options: ["Et konkret moteksempel — hvilket kall som gir galt svar, og hva det riktige ville vært.", "En generell forklaring av hvorfor koden bryter med god programmeringsskikk.", "En omskriving av hele klassen, slik at feilen ikke lenger er mulig å gjøre.", "En henvisning til hvilken feilkode i feilregisteret det dreier seg om."],
      explanation: "En ren verbal forklaring gir delvis uttelling. Skriv hvilket kall som feiler og hva svaret skulle vært — det er det konkrete som teller.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Spiller:\n    def __init__(self, navn, poeng):\n        self._navn = navn\n        self._poeng = 0\n        poeng = poeng\n\n    def gi(self, n):\n        self._poeng = self._poeng + n\n\n    def hent(self):\n        return self._poeng\n\na = Spiller(\"Ada\", 10)\nlag = [a]\na.gi(5)\na = Spiller(\"Ada2\", 100)\na.gi(50)\nsum_p = 0\nfor s in lag:\n    sum_p = sum_p + s.hent()\nprint(sum_p)\n```",
      options: ["5", "15", "55", "165"],
      explanation: "To feller på én gang: `self`-fella tar startpoengene, og rebindingen tar de 50 poengene ut av laget. `15` er svaret hvis man overser bare den første av dem.",
    },
    {
      question: "Hva betyr det at deloppgavene i Oppgave 2 rettes hver for seg?",
      options: ["At en bom på 2a ikke koster deg poengene for 2b, 2c og 2d.", "At du må svare på dem i rekkefølge, siden hvert svar bygger på det forrige.", "At bare det svaret du bruker lengst tid på, blir talt med i karakteren.", "At de fire spørsmålene til sammen gir ett poeng, uansett hvor mange du treffer."],
      explanation: "Det betyr også at det aldri lønner seg å stå fast. Sitter du fast på 2a, tegn ferdig og gå videre — 2d er ofte et begrepsspørsmål som ikke krever sporing i det hele tatt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Eier:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def hent_navn(self):\n        return self._navn\n\n    def sett_navn(self, n):\n        self._navn = n\n\nclass Konto:\n    def __init__(self, eier):\n        self._eier = eier\n        self._navn_kopi = eier.hent_navn()\n\n    def via_ref(self):\n        return self._eier.hent_navn()\n\n    def via_kopi(self):\n        return self._navn_kopi\n\nada = Eier(\"Ada\")\nk = Konto(ada)\nada.sett_navn(\"Nora\")\nprint(k.via_ref(), k.via_kopi())\n```",
      options: ["Nora Ada", "Ada Nora", "Nora Nora", "Ada Ada"],
      explanation: "Referansen leses på nytt hver gang, mens teksten som ble lagret i konstruktøren, aldri ble oppdatert. Tekster er uforanderlige, så de to har aldri vært koblet.",
    },
    {
      question: "Hvorfor er det bedre å lagre `self._eier = person` enn `self._eier_navn = person.hent_navn()`?",
      options: ["Fordi navnet leses på nytt hver gang, så modellen holder seg i takt når personen endres.", "Fordi en referanse tar mindre plass i minnet enn en tekst med samme innhold.", "Fordi Python ikke tillater at en klasse lagrer en tekst hentet fra et annet objekt.", "Fordi aksessoren i den andre klassen bare kan kalles fra en konstruktør."],
      explanation: "Å lagre rådata i stedet for en objektreferanse er en av de vanligste modelleringsfeilene i den store oppgaven. Symptomet er en verdi som var riktig da den ble lagret, og som stille blir foreldet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Boks:\n    def __init__(self, n):\n        self._n = n\n\n    def sett(self, v):\n        self._n = v\n\n    def hent(self):\n        return self._n\n\ndef endre(b):\n    b.sett(9)\n\ndef erstatt(b):\n    b = Boks(9)\n\nx = Boks(1)\nendre(x)\nprint(x.hent())\ny = Boks(1)\nerstatt(y)\nprint(y.hent())\n```",
      options: ["9\n1", "9\n9", "1\n9", "1\n1"],
      explanation: "Den første funksjonen endrer objektet, den andre flytter bare det lokale navnet. En funksjon kan endre objektene den får inn, men aldri kallerens piler.",
    },
    {
      question: "Hva må en funksjon gjøre for at den som kalte, skal ende opp med å peke på et nytt objekt?",
      options: ["Returnere det nye objektet, slik at kalleren selv gjør tilordningen.", "Tilordne parameteren sin på nytt, siden parameteren peker på kallerens variabel.", "Endre alle instansvariablene i det gamle objektet, slik at det ligner det nye.", "Kalle konstruktøren en gang til på det objektet den fikk inn som parameter."],
      explanation: "Parameteren er et lokalt navn. Kalleren kan bare flytte sine egne piler, så oppskriften er `return`, og deretter `x = f(x)` hos den som kaller.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rute:\n    def __init__(self, nr):\n        self._nr = nr\n        self._paa = 0\n\n    def paa(self, n):\n        self._paa = self._paa + n\n\n    def __str__(self):\n        return str(self._nr) + \":\" + str(self._paa)\n\nr = Rute(20)\nliste = [r, r, Rute(31)]\nliste[0].paa(5)\nfor e in liste:\n    print(e)\n```",
      options: ["20:5\n20:5\n31:0", "20:5\n20:0\n31:0", "20:5\n20:5\n31:5", "20:0\n20:0\n31:0"],
      explanation: "De to første plassene i lista holder referanser til det samme objektet, så endringen sees begge steder. Lista har tre plasser, men bare to objekter.",
    },
    {
      question: "Du er usikker mellom to av fire alternativer i Oppgave 2. Hva bør du gjøre?",
      options: ["Krysse av på det du tror er mest sannsynlig — blankt gir null, og det er ingen straff for å gjette.", "La feltet stå blankt, siden et galt svar trekker mer enn et ubesvart spørsmål.", "Krysse av på begge to, slik at minst ett av kryssene treffer det riktige svaret.", "Hoppe over spørsmålet og bruke tiden på den store oppgaven i stedet."],
      explanation: "Et blankt felt og et galt svar gir begge null. Har du utelukket to alternativer, er gjetningen mellom de to siste verdt halvparten av poengene i snitt.",
    },
  ],
  'in1000-6-1': [
    {
      question: "«Et bibliotek har et navn og en samling bøker. Hver bok har en tittel og en forfatter.» Hvilke klasser gir dette?",
      options: ["`Bibliotek` og `Bok` — de to substantivene som er ting med egne egenskaper.", "`Bibliotek`, `Bok`, `Tittel` og `Forfatter` — hvert substantiv blir en klasse.", "Bare `Bibliotek` — bøkene kan lagres som to parallelle lister med tekster.", "`Navn`, `Tittel` og `Forfatter` — egenskapene er det programmet skal holde styr på."],
      explanation: "Tommelfingerregelen: kan du tenke deg flere av den, og har hver av dem sine egne opplysninger, er det en klasse. `Tittel` har ingen egenskaper — den **er** en egenskap.",
    },
    {
      question: "Hvilke instansvariabler kommer IKKE utenfra, og settes med en startverdi i konstruktøren?",
      options: ["De teksten beskriver med «starter på null», «er ikke utlånt ennå» eller «har ingen … til å begynne med».", "De som har lengst navn, siden lange navn er vanskeligere å sende inn som parametere.", "De som er tall, siden tall alltid får verdien null når objektet lages.", "Ingen — alle instansvariabler må sendes inn som parametere til konstruktøren."],
      explanation: "`self._solgte = 0`, `self._utlaant = False` og `self._boker = []` er de vanligste. De er det som oftest glemmes, og de er et selvstendig poeng.",
    },
    {
      question: "«Hver konto har en eier.» Hvordan skrives instansvariabelen?",
      options: ["`self._eier = eier` — én-til-én, instansvariabelen peker på ett objekt.", "`self._eiere = []` — en samling, slik at kontoen kan få flere eiere senere.", "`self._eier = eier.hent_navn()` — navnet lagres som tekst, siden det er nok.", "`self._eier = {}` — en ordbok, slik at eieren kan slås opp på navn."],
      explanation: "Ordet «en» avgjør. Å lagre navnet som tekst i stedet ville gjort verdien foreldet så snart eieren skiftet navn, og du ville mistet tilgangen til eierens metoder.",
    },
    {
      question: "Når skal en én-til-mange-samling være en ordbok og ikke en liste?",
      options: ["Når noe skal slås opp på et navn eller en kode — «finne en bok på tittel».", "Når det er flere enn ti objekter, siden lister blir trege over den grensen.", "Når objektene skal skrives ut i den rekkefølgen de ble lagt inn.", "Når objektene har mer enn to instansvariabler hver."],
      explanation: "I tvil: velg liste. Å lete gjennom en liste med en løkke er alltid mulig og gir uttelling — ordboka er bare ryddigere når oppslaget er hovedjobben.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rett:\n    def __init__(self, navn, pris):\n        self._navn = navn\n        self._pris = pris\n        self._solgte = 0\n\n    def selg(self, antall):\n        self._solgte = self._solgte + antall\n\n    def omsetning(self):\n        return self._pris * self._solgte\n\nr = Rett(\"Suppe\", 89)\nr.selg(3)\nr.selg(2)\nprint(r.omsetning())\n```",
      options: ["445", "178", "89", "5"],
      explanation: "Fem porsjoner til 89 kroner. `178` er svaret hvis `selg` hadde overskrevet i stedet for å legge til — da ville bare de to siste telt.",
    },
    {
      question: "Hvilken klasse hører metoden «lån ut en bok» hjemme i?",
      options: ["`Bok` — utlånsstatusen er bokas egen opplysning, og metoden endrer den.", "`Bibliotek` — det er biblioteket som utfører utlånet, så metoden hører til der.", "Begge — metoden bør finnes i begge klassene, slik at den kan kalles fra begge.", "`Bibliotek`, men bare hvis bøkene ligger i en ordbok og ikke i en liste."],
      explanation: "En metode hører hjemme der opplysningene den endrer, bor. Legger du den i `Bibliotek`, må den røre `bok._utlaant` direkte — feilkode #11.",
    },
    {
      question: "Hva er problemet med å lagre `self._titler = []` og `self._forfattere = []` i stedet for en `Bok`-klasse?",
      options: ["De to listene må holdes i takt manuelt, og kommer i utakt ved første fjerning eller sortering.", "Python tillater ikke to lister som instansvariabler i den samme klassen.", "To lister tar dobbelt så mye plass i minnet som én liste av objekter.", "Ingenting — parallelle lister er en helt vanlig og godkjent modelleringsform."],
      explanation: "Fjerner du ett element fra den ene lista og glemmer den andre, påstår programmet at feil forfatter skrev boka — uten en eneste feilmelding. Løsningen er én klasse som holder begge opplysningene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, forfatter):\n        self._tittel = tittel\n        self._forfatter = forfatter\n\n    def hent_tittel(self):\n        return self._tittel\n\n    def __str__(self):\n        return self._tittel + \" av \" + self._forfatter\n\nclass Bibliotek:\n    def __init__(self):\n        self._boker = {}\n\n    def legg_til(self, bok):\n        self._boker[bok.hent_tittel()] = bok\n\n    def finn(self, tittel):\n        if tittel in self._boker:\n            return self._boker[tittel]\n        return None\n\nb = Bibliotek()\nb.legg_til(Bok(\"Sult\", \"Hamsun\"))\nprint(b.finn(\"Sult\"))\nprint(b.finn(\"Vaar\"))\n```",
      options: ["Sult av Hamsun\nNone", "Sult av Hamsun\nSult av Hamsun", "None\nNone", "Sult av Hamsun"],
      explanation: "Oppslaget sjekker med `if tittel in ...` før det slår opp, og gir `None` når nøkkelen mangler. Uten sjekken ville programmet stoppet med `KeyError` — feilkode #14.",
    },
    {
      question: "Hvorfor skal en samling holde objektreferanser og ikke opplysninger om objektene?",
      options: ["Fordi du ellers mister metodene, og alle senere deloppgaver om å skrive ut, telle eller endre faller sammen.", "Fordi en liste bare kan inneholde objekter, aldri tekster eller tall.", "Fordi objektreferanser tar mindre plass i minnet enn opplysningene selv.", "Fordi Python krever at samlinger i en klasse holder objekter av en annen klasse."],
      explanation: "Det er den dyreste enkeltbeslutningen i hele Oppgave 4. Lagrer du bare titlene, kan biblioteket ikke lenger be en bok om å låne seg ut eller skrive seg selv.",
    },
    {
      question: "Hva er poenget med å skrive skjelettet før metodekroppene?",
      options: ["Du ser hele modellen før du bruker tid på detaljer, og du har allerede sikret poengene for strukturen.", "Python krever at alle metodesignaturer defineres før noen av dem kan få en kropp.", "Skjelettet gjør at koden kjører raskere, siden Python slipper å lete etter metodene.", "Sensor retter bare skjelettet, og metodekroppene teller ikke i Oppgave 4."],
      explanation: "Den vanligste tidsfellen er å skrive ferdig kode på den første klassen og oppdage tjue minutter senere at modellen ikke henger sammen.",
    },
    {
      question: "Oppgaveteksten er underspesifisert på ett punkt. Hva gjør du?",
      options: ["Velger det som gir mening i domenet, og skriver én kommentarlinje om forutsetningen.", "Lar deloppgaven stå ubesvart, siden en gal antakelse trekker mer enn et blankt svar.", "Skriver alle mulige tolkninger som hver sin metode, slik at én av dem er riktig.", "Velger den tolkningen som gir minst kode, og lar være å nevne valget."],
      explanation: "Egne rimelige forutsetninger er uttrykkelig tillatt. Den dokumenterte antakelsen er den ene legitime bruken av kommentarer i en besvarelse.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sjafor:\n    def __init__(self, navn):\n        self._navn = navn\n\n    def hent_navn(self):\n        return self._navn\n\n    def sett_navn(self, n):\n        self._navn = n\n\nclass Rute:\n    def __init__(self, nummer, sjafor):\n        self._nummer = nummer\n        self._sjafor = sjafor\n\n    def __str__(self):\n        return \"Rute \" + str(self._nummer) + \" med \" + self._sjafor.hent_navn()\n\nada = Sjafor(\"Ada\")\nr = Rute(20, ada)\nprint(r)\nada.sett_navn(\"Nora\")\nprint(r)\n```",
      options: ["Rute 20 med Ada\nRute 20 med Nora", "Rute 20 med Ada\nRute 20 med Ada", "Rute 20 med Nora\nRute 20 med Nora", "Rute 20 med Ada"],
      explanation: "Ruten peker på sjåfør-objektet og spør om navnet hver gang. Hadde konstruktøren lagret navnet som tekst, ville begge linjene vist `Ada` — en klassisk modelleringsfeil.",
    },
    {
      question: "Hvor mange klasser har en typisk Oppgave 4?",
      options: ["Tre til fem — færre betyr at noe er slått sammen, flere at egenskaper er gjort til klasser.", "Én til to — den store oppgaven handler om å skrive mange metoder, ikke mange klasser.", "Åtte til ti — hver egenskap i spesifikasjonen skal ha sin egen klasse.", "Nøyaktig fire — settene følger en fast mal med fire samarbeidende klasser."],
      explanation: "En `Tittel`-klasse med bare en tekst i seg er ren støy. Og har du funnet to, se etter en «boks» som er blitt til to instansvariabler i stedet for en klasse.",
    },
    {
      question: "Hva betyr det at Oppgave 4 gir delkarakter per deloppgave?",
      options: ["Hver deloppgave rettes for seg, så du skal aldri stå fast — hopp videre og få uttelling for resten.", "At du må levere alle deloppgavene for at noen av dem skal telle med.", "At bare den best besvarte deloppgaven teller, og resten regnes som øvelse.", "At poengene fordeles jevnt, slik at hver deloppgave er verdt like mye."],
      explanation: "Du kan dessuten bruke en metode oppgaveteksten beskriver, selv om du ikke har rukket å skrive den — sensor vet at den finnes, fordi oppgaven sa det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, kapasitet):\n        self._navn = navn\n        self._kapasitet = kapasitet\n        self._paameldte = []\n\n    def hent_ledige(self):\n        return self._kapasitet - len(self._paameldte)\n\n    def meld_paa(self, m):\n        if self.hent_ledige() < 1:\n            print(\"Fullt\")\n        else:\n            self._paameldte.append(m)\n\ns = Sal(\"Speilsal\", 2)\ns.meld_paa(\"Ada\")\ns.meld_paa(\"Nora\")\ns.meld_paa(\"Per\")\nprint(s.hent_ledige())\n```",
      options: ["Fullt\n0", "Fullt\n-1", "0", "Fullt\n1"],
      explanation: "Det tredje forsøket avvises fordi det ikke er ledige plasser igjen, så antallet står på 2 av 2. `-1` er svaret hvis man tror påmeldingen skjer likevel.",
    },
    {
      question: "Hva er riktig rekkefølge når du løser Oppgave 4?",
      options: ["Modell, skjelett, kropper — bruk de første minuttene på blyant og papir.", "Kropper, skjelett, modell — begynn med den metoden du er sikrest på.", "Skjelett, modell, kropper — sett opp klassenavnene før du leser teksten nøye.", "Modell, kropper, skjelett — skjelettet skrives til slutt som en oppsummering."],
      explanation: "Modellen er tre–fire minutter med blyant, skjelettet ett minutt til. Å skrive ferdig kode på den første klassen med én gang er den vanligste tidsfellen i hele eksamen.",
    },
  ],
  'in1000-6-2': [
    {
      question: "Hvor skal samlingen i en container-klasse opprettes?",
      options: ["I konstruktøren, tom — alt objektet skal huske, settes der.", "I `legg_til`, slik at den bare opprettes når det faktisk kommer et element.", "Inne i løkka som går gjennom samlingen, slik at den alltid er oppdatert.", "Utenfor klassen, som en variabel begge klassene kan bruke sammen."],
      explanation: "Opprettes den i `legg_til`, nullstilles den for hver innlegging, og containeren har alltid nøyaktig ett element. Ingen feilmelding — bare et rolig galt svar.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, forfatter):\n        self._tittel = tittel\n        self._forfatter = forfatter\n\n    def hent_tittel(self):\n        return self._tittel\n\n    def __str__(self):\n        return self._tittel + \" av \" + self._forfatter\n\nclass Bibliotek:\n    def __init__(self):\n        self._boker = {}\n\n    def legg_til(self, bok):\n        self._boker[bok.hent_tittel()] = bok\n\n    def finn(self, tittel):\n        if tittel in self._boker:\n            return self._boker[tittel]\n        return None\n\n    def skriv_alle(self):\n        for tittel in self._boker:\n            print(self._boker[tittel])\n\n    def antall(self):\n        return len(self._boker)\n\nb = Bibliotek()\nb.legg_til(Bok(\"Sult\", \"Hamsun\"))\nb.legg_til(Bok(\"Vaar\", \"Undset\"))\nb.skriv_alle()\nprint(b.antall())\n```",
      options: ["Sult av Hamsun\nVaar av Undset\n2", "Sult\nVaar\n2", "Sult av Hamsun\nVaar av Undset\n1", "sult\nvaar\n2"],
      explanation: "Løkka gir nøklene, oppslaget gir objektet, og `print` kaller bokas egen `__str__`. Skriver du `for b in self._boker: print(b)`, får du titlene som tekst i stedet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, forfatter):\n        self._tittel = tittel\n        self._forfatter = forfatter\n\n    def hent_tittel(self):\n        return self._tittel\n\n    def __str__(self):\n        return self._tittel + \" av \" + self._forfatter\n\nclass Bibliotek:\n    def __init__(self):\n        self._boker = {}\n\n    def legg_til(self, bok):\n        self._boker[bok.hent_tittel()] = bok\n\n    def finn(self, tittel):\n        if tittel in self._boker:\n            return self._boker[tittel]\n        return None\n\n    def skriv_alle(self):\n        for tittel in self._boker:\n            print(self._boker[tittel])\n\n    def antall(self):\n        return len(self._boker)\n\nb = Bibliotek()\nb.legg_til(Bok(\"Sult\", \"Hamsun\"))\nprint(b.finn(\"Sult\"))\nprint(b.finn(\"Vaar\"))\n```",
      options: ["Sult av Hamsun\nNone", "Sult av Hamsun", "None\nNone", "Sult av Hamsun\nSult av Hamsun"],
      explanation: "Oppslaget sjekker med `if tittel in ...` og gir `None` når nøkkelen mangler. Uten sjekken ville programmet stoppet med `KeyError: 'Vaar'` — feilkode #14.",
    },
    {
      question: "Hva er den riktige nøkkelen når en container legger et objekt i en ordbok?",
      options: ["`self._d[obj.hent_navn()] = obj` — nøkkelen hentes med objektets egen aksessor.", "`self._d[obj._navn] = obj` — det er raskere å lese variabelen direkte.", "`self._d[obj] = obj.hent_navn()` — objektet er nøkkel og navnet er verdi.", "`self._d[len(self._d)] = obj` — nøkkelen bør være et løpenummer."],
      explanation: "`obj._navn` er feilkode #11, og det er den vanligste formen den tar når to klasser samarbeider. Formen med aksessor er også tryggere: endrer klassen lagringen, merker containeren ingenting.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent_navn(self):\n        return self._navn\n\n    def hent_antall(self):\n        return self._antall\n\nclass Lager:\n    def __init__(self):\n        self._varer = {}\n\n    def legg_til(self, v):\n        self._varer[v.hent_navn()] = v\n\n    def antall(self):\n        return len(self._varer)\n\n    def totalt(self):\n        s = 0\n        for n in self._varer:\n            s = s + self._varer[n].hent_antall()\n        return s\n\nl = Lager()\nl.legg_til(Vare(\"skrue\", 120))\nl.legg_til(Vare(\"bolt\", 45))\nl.legg_til(Vare(\"skrue\", 200))\nprint(l.antall(), l.totalt())\n```",
      options: ["2 245", "3 365", "2 320", "3 245"],
      explanation: "Den tredje innsettingen bruker nøkkelen `skrue` på nytt og **overskriver** den første. Ordboka har to nøkler, og summen er 200 pluss 45.",
    },
    {
      question: "Hva kjennetegner en metode som delegerer?",
      options: ["Kroppen er ett kall på underobjektet, og ingen felt hentes ut med understrek.", "Kroppen regner ut svaret av underobjektets felter, slik at ytterklassen har kontroll.", "Metoden kaller seg selv én gang for hvert element i samlingen.", "Metoden returnerer hele samlingen, slik at den som kaller, kan gå gjennom den."],
      explanation: "Gevinsten er den samme som ved innkapsling: endrer underklassen hvordan den regner eller vises, merker ytterklassen ingenting.",
    },
    {
      question: "Hvorfor heter containerens utskriftsmetode `skriv_alle` og ikke `skriv`?",
      options: ["Fordi den viser alle og ikke én, og fordi en metode som ser ut til å kalle seg selv, er vanskelig å lese.", "Fordi Python ikke tillater at to klasser i samme program har en metode med samme navn.", "Fordi lengre metodenavn gir bedre uttelling når sensor leser besvarelsen.", "Fordi `skriv` er reservert av `print` og ikke kan brukes som metodenavn."],
      explanation: "En metode som kaller seg selv, er rekursjon, som er utenfor pensum i dette emnet. Navnene beskriver dessuten to ulike jobber.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rett:\n    def __init__(self, navn, pris, solgte):\n        self._navn = navn\n        self._pris = pris\n        self._solgte = solgte\n\n    def hent_navn(self):\n        return self._navn\n\n    def omsetning(self):\n        return self._pris * self._solgte\n\nclass Kantine:\n    def __init__(self):\n        self._retter = []\n\n    def legg_til(self, r):\n        self._retter.append(r)\n\n    def samlet_omsetning(self):\n        total = 0\n        for r in self._retter:\n            total = total + r.omsetning()\n        return total\n\nk = Kantine()\nk.legg_til(Rett(\"Suppe\", 80, 10))\nk.legg_til(Rett(\"Vafler\", 30, 20))\nprint(k.samlet_omsetning())\n```",
      options: ["1400", "800", "600", "140"],
      explanation: "Kantina spør hver rett hva den har omsatt for: 800 pluss 600. Akkumulatoren står før løkka og returneres etter den.",
    },
    {
      question: "Hva returnerer en `finn`-metode når nøkkelen ikke finnes?",
      options: ["`None` — det ærlige svaret, som den som kaller, tester med `if svar != None:`.", "Den tomme teksten, som er lettere å skrive ut enn `None`.", "Tallet `-1`, som er den vanlige måten å signalisere «ikke funnet» på.", "Hele ordboka, slik at den som kaller, kan lete videre selv."],
      explanation: "En tom tekst eller `-1` kan forveksles med ekte data — det er feilkode #10, sentinel-kollisjon. `None` kan ikke forveksles med noe.",
    },
    {
      question: "Du kaller `sal.hent_kapasitet()` på svaret fra et søk, og får `AttributeError: 'NoneType' object has no attribute 'hent_kapasitet'`. Hva er årsaken?",
      options: ["Søket fant ingenting og returnerte `None`, og du glemte å sjekke svaret før du brukte det.", "Metoden `hent_kapasitet` er stavet feil i klassen, så Python finner den ikke.", "Klassen mangler en `__str__`, så objektet kan ikke brukes i et metodekall.", "Ordboka er tom, og en tom ordbok kan ikke slås opp i det hele tatt."],
      explanation: "«NoneType has no attribute» betyr nesten alltid at et `finn`-kall ga `None`. Motgiften er `if svar != None:` hos den som kaller.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Medlem:\n    def __init__(self, navn):\n        self._navn = navn\n        self._kvelder = 0\n\n    def hent_kvelder(self):\n        return self._kvelder\n\n    def registrer(self):\n        self._kvelder = self._kvelder + 1\n\nclass Spill:\n    def __init__(self, tittel, eier):\n        self._tittel = tittel\n        self._eier = eier\n\n    def hent_eier(self):\n        return self._eier\n\nada = Medlem(\"Ada\")\na = Spill(\"Kolonier\", ada)\nb = Spill(\"Ordjakt\", ada)\nada.registrer()\nprint(a.hent_eier().hent_kvelder(), b.hent_eier().hent_kvelder())\n```",
      options: ["1 1", "1 0", "0 0", "2 2"],
      explanation: "Begge spillene holder en referanse til det **samme** medlemmet, så begge ser kvelden. Det finnes bare ett `Medlem`-objekt, selv om det er eier av to spill.",
    },
    {
      question: "En klasse `Spill` lagrer `self._eiernavn = eier.hent_navn()` i stedet for hele objektet. Hva går tapt?",
      options: ["Navnet blir foreldet hvis eieren endrer det, og spillet kan ikke lenger spørre eieren om noe annet.", "Ingenting — navnet er den eneste opplysningen et spill trenger om eieren sin.", "Bare litt minne, siden en tekst tar mer plass enn en referanse til et objekt.", "Muligheten til å ha to spill med samme eier, siden navnet må være unikt."],
      explanation: "Å lagre rådata i stedet for en objektreferanse er en av de faste vurderingene i Oppgave 4. Trenger du navnet, spør om det når du trenger det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {\"a\": 1}\nif \"b\" in d:\n    print(d[\"b\"])\nelse:\n    print(\"mangler\")\nif \"b\" not in d:\n    d[\"b\"] = []\nd[\"b\"].append(5)\nprint(d)\n```",
      options: ["mangler\n{'a': 1, 'b': [5]}", "mangler\n{'a': 1, 'b': 5}", "1\n{'a': 1, 'b': [5]}", "mangler\n{'b': [5], 'a': 1}"],
      explanation: "Den indre lista må opprettes med `if ... not in` før du kan legge til i den — uten det stopper programmet med `KeyError`. Ordboka husker opprettelsesrekkefølgen.",
    },
    {
      question: "En utleie har mange stativer, og hvert stativ har mange sykler. Hvordan modelleres det?",
      options: ["Utleien har en samling stativer, og hvert stativ har sin egen samling sykler — to nivåer, samme mønster.", "Utleien har én samling som holder både stativene og alle syklene om hverandre.", "Hvert stativ har en referanse til utleien, og utleien holder bare syklene.", "Syklene legges i en liste utenfor begge klassene, slik at begge kan nå dem."],
      explanation: "To nivåer av en-til-mange er helt vanlig i Oppgave 4. Blander du nivåene, mister du muligheten til å spørre «hvor mange står på Blindern?».",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, kap):\n        self._navn = navn\n        self._kap = kap\n        self._paa = []\n\n    def hent_navn(self):\n        return self._navn\n\n    def ledige(self):\n        return self._kap - len(self._paa)\n\n    def meld_paa(self, m):\n        if self.ledige() < 1:\n            print(\"Fullt\")\n        else:\n            self._paa.append(m)\n\n    def antall(self):\n        return len(self._paa)\n\nclass Senter:\n    def __init__(self):\n        self._saler = {}\n\n    def legg_til(self, s):\n        self._saler[s.hent_navn()] = s\n\n    def finn(self, n):\n        if n in self._saler:\n            return self._saler[n]\n        return None\n\n    def totalt_antall(self):\n        t = 0\n        for n in self._saler:\n            t = t + self._saler[n].antall()\n        return t\n\ns = Senter()\ns.legg_til(Sal(\"A\", 2))\ns.legg_til(Sal(\"B\", 5))\ns.finn(\"A\").meld_paa(\"x\")\ns.finn(\"A\").meld_paa(\"y\")\ns.finn(\"A\").meld_paa(\"z\")\ns.finn(\"B\").meld_paa(\"q\")\nprint(s.totalt_antall())\n```",
      options: ["Fullt\n3", "Fullt\n4", "4", "Fullt\n2"],
      explanation: "Det tredje forsøket i sal A avvises, så A har 2 og B har 1. Delegeringsløkka summerer det salene svarer.",
    },
    {
      question: "Hvorfor er `for e in self._elementer: print(e._navn)` en dårlig delegeringsløkke?",
      options: ["Den rører et annet objekts innside — feilkode #11 — og dupliserer visningen to steder.", "Den er tregere enn `print(e)`, fordi Python må slå opp variabelen i objektet.", "Den virker ikke: Python nekter å lese en variabel med understrek utenfra.", "Den gir feil rekkefølge, siden understrek-variabler leses i motsatt orden."],
      explanation: "Alternativet `print(e)` er én linje kortere og lar elementets `__str__` gjøre jobben. Endres formatet, endres det ett sted.",
    },
    {
      question: "Hva betyr det at `legg_til` tar objektet som parameter og ikke verdiene?",
      options: ["Den som kaller, lager objektet — da kan det samme objektet legges i to samlinger.", "Containeren slipper å kjenne klassenavnet til underobjektet i det hele tatt.", "Objektet blir kopiert inn i samlingen, slik at originalen kan endres fritt.", "Metoden kan bare kalles én gang per objekt, siden objektet allerede finnes."],
      explanation: "Objektvarianten er den fasiten bruker, og den er mer fleksibel. Ingen kopiering skjer: samlingen holder en referanse til det samme objektet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, t):\n        self._t = t\n\n    def __str__(self):\n        return self._t\n\nd = {}\nd[\"sult\"] = Bok(\"Sult\")\nd[\"vaar\"] = Bok(\"Vaar\")\nfor b in d:\n    print(b)\n```",
      options: ["sult\nvaar", "Sult\nVaar", "sult Sult\nvaar Vaar", "Sult av sult\nVaar av vaar"],
      explanation: "Løkka over en ordbok gir **nøklene**, ikke objektene. For å få bøkene må du skrive `print(d[b])` — en klassisk sporingsfelle.",
    },
  ],
  'in1000-6-3': [
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent_navn(self):\n        return self._navn\n\n    def hent_antall(self):\n        return self._antall\n\nvarer = [Vare(\"skrue\", 120), Vare(\"bolt\", 45), Vare(\"skive\", 200), Vare(\"mutter\", 80)]\nbeste = None\nbeste_antall = 0\nfor v in varer:\n    if v.hent_antall() > beste_antall:\n        beste = v\n        beste_antall = v.hent_antall()\nprint(beste.hent_navn(), beste_antall)\n```",
      options: ["skive 200", "mutter 80", "skrue 120", "skive 120"],
      explanation: "Begge variablene oppdateres sammen, så grensen følger med oppover. `mutter 80` er svaret hvis `beste_antall` aldri oppdateres — den vanligste stumme feilen i mønsteret.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent_navn(self):\n        return self._navn\n\n    def hent_antall(self):\n        return self._antall\n\nvarer = [Vare(\"skrue\", 120), Vare(\"bolt\", 45), Vare(\"skive\", 200), Vare(\"mutter\", 80)]\nbeste = None\nbeste_antall = 0\nfor v in varer:\n    if v.hent_antall() > beste_antall:\n        beste = v\nprint(beste.hent_navn())\n```",
      options: ["mutter", "skive", "skrue", "bolt"],
      explanation: "Her mangler `beste_antall = v.hent_antall()`, så grensen blir stående på 0 og hver vare overskriver den forrige. Løkka ender med den **siste**, ikke den største.",
    },
    {
      question: "Hvorfor bruker finn-beste-mønsteret to variabler og ikke én?",
      options: ["Fordi `beste` kan være `None` i første runde, og da finnes det ingen verdi å sammenligne med.", "Fordi Python ikke tillater at en variabel både holder et objekt og et tall.", "Fordi løkka ellers ville gått gjennom samlingen to ganger i stedet for én.", "Fordi det gir raskere kode når samlingen inneholder mange objekter."],
      explanation: "Med bare `beste` måtte du skrevet `beste.hent_verdi()` i sammenligningen, og på en tom eller ny samling stopper det programmet. To variabler er også formen fasiten bruker.",
    },
    {
      question: "Hvor skal `return beste` stå i en finn-beste-metode?",
      options: ["Etter løkka — inne i den ville metoden svart på det første elementet over grensen.", "Inne i løkka, rett etter oppdateringen, slik at svaret gis så snart det finnes.", "Før løkka, slik at den som kaller, får en verdi selv om samlingen er tom.", "Inne i `if`-en, men bare i den siste runden av løkka."],
      explanation: "Løkka må se hele samlingen før den kan svare hvem som er best. Et `return` inne i løkka er feilkode #7, for tidlig retur.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {}\nfor navn, antall in [(\"mandag\", 14), (\"tirsdag\", 20), (\"mandag\", 9)]:\n    if navn not in d:\n        d[navn] = 0\n    d[navn] = d[navn] + antall\nprint(d)\n```",
      options: ["{'mandag': 23, 'tirsdag': 20}", "{'mandag': 9, 'tirsdag': 20}", "{'mandag': 14, 'tirsdag': 20}", "{'tirsdag': 20, 'mandag': 23}"],
      explanation: "Teller-idiomet akkumulerer på samme nøkkel, og ordboka husker opprettelsesrekkefølgen. `{'mandag': 9, ...}` er svaret hvis man bruker `=` i stedet for `+`.",
    },
    {
      question: "Hva skjer i en teller-ordbok uten `if k not in d:`-sjekken?",
      options: ["Programmet stopper med `KeyError` på den første nøkkelen, siden det ikke finnes noe å legge til.", "Nøkkelen opprettes automatisk med verdien 0, så koden virker som den skal.", "Programmet kjører, men alle verdiene blir stående på 0 uansett hva du legger til.", "Den siste verdien overskriver de tidligere, slik at bare siste linje teller."],
      explanation: "Det er feilkode #14. Samme feil oppstår i grupperings-idiomet uten `d[k] = []` først — da finnes det ingen liste å legge i.",
    },
    {
      question: "Hva skiller grupperings-idiomet fra teller-idiomet?",
      options: ["Startverdien er `[]` i stedet for `0`, og du bruker `.append(...)` i stedet for `+`.", "Grupperingen bruker en liste som nøkkel, mens telleren bruker en tekst.", "Grupperingen krever to løkker etter hverandre, mens telleren klarer seg med én.", "Grupperingen kan bare brukes på objekter, mens telleren virker på tall og tekster."],
      explanation: "To tegn skiller dem. Resultatet er en ordbok fra nøkkel til liste: `{'Hamsun': ['Sult', 'Pan']}`. Kjenn den igjen på «grupper etter …» i oppgaveteksten.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, ledige):\n        self._navn = navn\n        self._ledige = ledige\n\n    def hent_ledige(self):\n        return self._ledige\n\ndef finnes_ledig(saler):\n    for s in saler:\n        if s.hent_ledige() > 0:\n            return True\n    return False\n\ndef alle_fulle(saler):\n    for s in saler:\n        if s.hent_ledige() > 0:\n            return False\n    return True\n\nsaler = [Sal(\"A\", 0), Sal(\"B\", 3)]\nprint(finnes_ledig(saler), alle_fulle(saler))\n```",
      options: ["True False", "False True", "True True", "False False"],
      explanation: "Sal B har ledige plasser, så det finnes minst én ledig, og dermed er ikke alle fulle. De to funksjonene er hverandres speilbilder.",
    },
    {
      question: "En «er alle …?»-metode returnerer `True` inne i løkka. Hva er galt?",
      options: ["Den svarer ja så snart ett element passer, i stedet for å kreve at alle gjør det.", "Ingenting — `True` inne i løkka er den riktige formen for begge flagg-mønstrene.", "Den vil alltid returnere `None`, siden `return` ikke kan stå inne i en løkke.", "Den går gjennom samlingen to ganger, og gir derfor dobbelt så langt svar."],
      explanation: "Det er feilkode #7. «Er alle …?» returnerer `False` inne i løkka og `True` etter; «finnes det …?» er motsatt vei.",
    },
    {
      question: "Hva skjer hvis linjen `return False` etter løkka mangler i en «finnes det …?»-metode?",
      options: ["Metoden gir `None` når ingen elementer passer, og feilen er stum fordi `None` oppfører seg som usant.", "Programmet stopper med en feilmelding om at metoden mangler en returverdi.", "Metoden returnerer den siste verdien som ble sammenlignet i løkka.", "Løkka går om igjen fra begynnelsen til den finner noe å returnere."],
      explanation: "Linjen etter løkka er obligatorisk. At feilen er stum, gjør den ekstra dyr: den oppdages først når noen tester med en samling der ingenting passer.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Hylle:\n    def __init__(self, navn, plasser):\n        self._navn = navn\n        self._plasser = plasser\n        self._n = 0\n\n    def er_ledig(self):\n        return self._n < self._plasser\n\n    def sett_inn(self):\n        self._n = self._n + 1\n\n    def __str__(self):\n        return self._navn + \":\" + str(self._n)\n\nhyller = [Hylle(\"H1\", 1), Hylle(\"H2\", 2)]\nferdig = False\nfor h in hyller:\n    if h.er_ledig() and ferdig == False:\n        h.sett_inn()\n        ferdig = True\nfor h in hyller:\n    print(h)\n```",
      options: ["H1:1\nH2:0", "H1:1\nH2:1", "H1:0\nH2:1", "H1:2\nH2:0"],
      explanation: "`ferdig`-flagget gjør at boka settes inn bare i den **første** ledige hylla. Uten flagget ville den havnet i begge — `H1:1 H2:1`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nmine = [\"sjakk\", \"kolonier\", \"ordjakt\"]\ndine = [\"kolonier\", \"yatzy\", \"sjakk\"]\npoeng = 0\nfor spill in mine:\n    if spill in dine:\n        poeng = poeng + 1\n    else:\n        poeng = poeng - 1\nprint(poeng)\n```",
      options: ["1", "2", "3", "-1"],
      explanation: "To treff gir pluss to, ett bom gir minus én. `2` er svaret hvis man bare teller treffene og glemmer `else`-grenen.",
    },
    {
      question: "Hvorfor må du hoppe over elementet selv når du finner «beste match» for ett medlem?",
      options: ["Fordi et medlem alltid matcher seg selv perfekt, og da blir svaret alltid medlemmet selv.", "Fordi Python ikke tillater at et objekt sammenlignes med seg selv i en løkke.", "Fordi matchen ellers ville blitt regnet to ganger og gitt dobbelt så høy verdi.", "Fordi løkka ellers ville gått i ring og aldri kommet til de andre medlemmene."],
      explanation: "`if m != medlem:` er ett selvstendig poeng i denne typen oppgave, og det er lett å glemme under tidspress.",
    },
    {
      question: "Hva svarer en finn-beste-metode på en tom samling?",
      options: ["`None` — og den som kaller, må sjekke svaret før den kaller en metode på det.", "Det første elementet, siden startverdien er satt før løkka begynner.", "Tallet `0`, siden `beste_verdi` er satt til `0` og aldri blir endret.", "En feilmelding, siden løkka ikke har noe å gå gjennom."],
      explanation: "Kaller du `travleste().hent_navn()` på et tomt senter, stopper programmet med `AttributeError: 'NoneType' object has no attribute 'hent_navn'`.",
    },
    {
      question: "To elementer har nøyaktig samme verdi. Hvilket velger finn-beste-malen med `>`?",
      options: ["Det første — `>` er usann når verdiene er like, så `beste` beholdes.", "Det siste — `>` er sann ved like verdier, så det nyeste overskriver.", "Begge — `beste` blir en liste med de to elementene.", "Ingen av dem — metoden returnerer `None` når det er uavgjort."],
      explanation: "Med `>=` ville den beholdt det siste. Begge er forsvarlige valg, men oppgaven kan si hvilket som gjelder — les kantverdien sakte.",
    },
    {
      question: "Hvorfor bygger boka teller-ordboka i én løkke og finner den største i en annen?",
      options: ["Fordi summen for en nøkkel ikke finnes i noe enkelt element — regnskapet må være ferdig før det kan leses.", "Fordi Python ikke tillater at en ordbok både bygges og leses i samme løkke.", "Fordi to løkker alltid gir raskere kode enn én løkke med to oppgaver.", "Fordi sensor gir ekstra poeng for hver ekstra løkke i en algoritme-metode."],
      explanation: "Hamsun kan stå på to bøker, og summen finnes ikke i noen av dem alene. Legg gjerne den første løkka i sin egen metode og kall den med `self.` foran.",
    },
  ],
  'in1000-6-4': [
    {
      question: "Hvilken type har verdien `input(\"Alder: \")` gir tilbake, når brukeren skriver `24`?",
      options: ["Tekst — `input` gir alltid tekst, uansett hva brukeren skriver.", "Heltall — Python kjenner igjen sifre og konverterer dem automatisk.", "Desimaltall — alle tall fra brukeren leses som flyttall for sikkerhets skyld.", "Det avhenger av meldingen: står ordet «alder» i den, blir det et heltall."],
      explanation: "Skal verdien regnes med, må den gjennom `int(...)`. Uten det stopper `alder + 10` programmet — feilkode #4, den samme som ved filinnlesing.",
    },
    {
      question: "Hva er galt med å bruke `if` i stedet for `while` i en input-løkke?",
      options: ["Den spør bare én gang til, og går videre med et ugyldig svar hvis brukeren bommer to ganger.", "Ingenting — `if` og `while` oppfører seg likt når betingelsen er en `not in`-test.", "`if` kan ikke inneholde et `input`-kall, så programmet stopper med en feilmelding.", "`if` gjentar spørsmålet i det uendelige, siden betingelsen aldri blir usann."],
      explanation: "Det er feilkode #9, og det er den vanligste feilen i hele sjangeren. Neste oppslag på det ugyldige svaret stopper programmet med `KeyError`.",
    },
    {
      question: "Hvor mange `input`-kall skal en input-løkke ha?",
      options: ["To — ett før løkka og ett inne i den.", "Ett — inne i løkka, siden det er der spørsmålet gjentas.", "Ett — før løkka, siden `while` selv sørger for å spørre på nytt.", "Tre — ett før, ett inne i og ett etter, for å bekrefte svaret."],
      explanation: "Uten det første har `while` ingenting å teste på første runde. Uten det andre endrer betingelsen seg aldri, og programmet henger.",
    },
    {
      question: "Hva skriver dette ut? Her henter `les` «brukerens» svar fra en liste.\n\n```python\ndef les(svarene, i):\n    print(\">\", svarene[i])\n    return svarene[i]\n\nsvarene = [\"kanskje\", \"tja\", \"ja\"]\ngyldige = [\"ja\", \"nei\"]\ni = 0\nsvar = les(svarene, i)\nwhile svar not in gyldige:\n    i = i + 1\n    svar = les(svarene, i)\nprint(\"Svar:\", svar)\n```",
      options: ["> kanskje\n> tja\n> ja\nSvar: ja", "> kanskje\nSvar: kanskje", "> kanskje\n> tja\nSvar: tja", "> ja\nSvar: ja"],
      explanation: "Løkka gjentar til svaret finnes blant de gyldige. `les` står to steder, akkurat der `input` ville stått i eksamensformen.",
    },
    {
      question: "Hva skjer hvis `input`-kallet inne i løkka mangler?",
      options: ["Betingelsen endrer seg aldri, og programmet skriver den samme oppfordringen i det uendelige.", "Løkka går én runde og avslutter, siden `while` bare tester én gang.", "Programmet stopper med en feilmelding om at variabelen ikke er oppdatert.", "Python henter det forrige svaret på nytt, så løkka avslutter av seg selv."],
      explanation: "Det er nøyaktig samme feil som en glemt `readline` nederst i filinnlesing-løkka: den mest synlige feilen, og den letteste å rette.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef les(svarene, i):\n    print(\">\", svarene[i])\n    return svarene[i]\n\nsaler = [\"Speilsal\", \"Spinning\", \"Yoga\"]\nsvarene = [\"3\", \"1\"]\ni = 0\nindeks = int(les(svarene, i))\nwhile indeks < 0 or indeks >= len(saler):\n    i = i + 1\n    indeks = int(les(svarene, i))\nprint(saler[indeks])\n```",
      options: ["> 3\n> 1\nSpinning", "> 3\nYoga", "> 3\n> 1\nSpeilsal", "> 3\n> 1\nYoga"],
      explanation: "Lista har lengde 3, så lovlige indekser er 0, 1 og 2 — indeks 3 avvises. Indeks 1 er det **andre** elementet, siden tellingen starter på null.",
    },
    {
      question: "Hva er riktig gyldighetstest når svaret skal være en lovlig indeks i en liste?",
      options: ["`while indeks < 0 or indeks >= len(liste):` — begge grensene, og øvre med `>=`.", "`while indeks < 0 or indeks > len(liste):` — øvre grense er lengden selv.", "`while indeks < 1 or indeks > len(liste):` — indeksering starter på 1.", "`while indeks != len(liste):` — det holder å sjekke mot lengden."],
      explanation: "En liste med tre elementer har lovlige indekser 0, 1 og 2. Med `>` slipper indeks 3 gjennom, og `liste[3]` stopper programmet med `IndexError` — feilkode #5.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef les(svarene, i):\n    print(\">\", svarene[i])\n    return svarene[i]\n\nsvarene = [\"0\", \"9\", \"3\"]\ni = 0\ntall = int(les(svarene, i))\nwhile tall < 1 or tall > 5:\n    i = i + 1\n    tall = int(les(svarene, i))\nprint(\"Valgt:\", tall)\n```",
      options: ["> 0\n> 9\n> 3\nValgt: 3", "> 0\nValgt: 0", "> 0\n> 9\nValgt: 9", "> 0\n> 9\n> 3\nValgt: 0"],
      explanation: "Både 0 og 9 er utenfor området 1 til 5, så løkka spør videre. Med `and` i stedet for `or` ville betingelsen aldri vært sann, og 0 ville blitt godtatt.",
    },
    {
      question: "En gyldighetstest skal fange tall under 1 og tall over 5. Hvorfor `or` og ikke `and`?",
      options: ["Fordi ingen verdi kan være både under 1 og over 5 — med `and` ville løkka aldri kjørt.", "Fordi `and` bare virker på sannhetsverdier, ikke på sammenligninger av tall.", "Fordi `or` er raskere enn `and` når betingelsen inneholder to sammenligninger.", "Fordi `and` ville gjort at løkka kjørte i det uendelige uansett hva brukeren skrev."],
      explanation: "«Ugyldig» er under grensen ELLER over grensen. Den gyldige varianten er speilbildet: `tall >= 1 and tall <= 5`.",
    },
    {
      question: "Hvorfor trenger ikke `return self._saler[valgt]` en `if`-sjekk foran seg, rett etter en input-løkke?",
      options: ["Fordi løkka allerede har garantert at nøkkelen finnes — betingelsen `not in` er usann når løkka slutter.", "Fordi et oppslag i en ordbok aldri kan stoppe programmet når nøkkelen er en tekst.", "Fordi `return` fanger opp feilen selv og gir `None` hvis nøkkelen mangler.", "Fordi `input` bare kan gi verdier som allerede finnes i ordboka."],
      explanation: "Skriv gjerne en kommentarlinje om det, så ser sensor at utelatelsen er bevisst. En `if`-sjekk der ville ikke vært galt, bare aldri slått til.",
    },
    {
      question: "Hva bør en velg-metode i en klasse returnere?",
      options: ["Objektet brukeren valgte — det kan alltid gi fra seg navnet sitt etterpå.", "Navnet brukeren skrev, siden det er den verdien `input` faktisk ga.", "Indeksen til objektet i samlingen, slik at kalleren kan slå opp selv.", "`True` eller `False`, avhengig av om brukeren klarte å velge noe gyldig."],
      explanation: "Objektet kan gi fra seg navnet sitt med `hent_navn()`; navnet kan ikke gi fra seg objektet. Å returnere objektet er et selvstendig poeng.",
    },
    {
      question: "Hvorfor skal alternativene skrives ut før spørsmålet i en velg-metode?",
      options: ["Fordi brukeren ellers ikke vet hva som er lovlig, og løkka kan gå i det uendelige.", "Fordi `input` krever at det står minst én utskrift foran seg i metoden.", "Fordi utskriften nullstiller terminalen, slik at svaret kan leses riktig.", "Fordi rekkefølgen på alternativene bestemmer hvilket svar som blir gyldig."],
      explanation: "Oppgaven ber som regel uttrykkelig om utskriften, og den er et eget poeng. Uten den kan brukeren bare gjette.",
    },
    {
      question: "Hva skriver dette ut? Verdiene er som om de kom fra `input`.\n\n```python\na = \"5\"\nb = int(\"5\")\nprint(a + a)\nprint(b + b)\nprint(a * 2, b * 2)\n```",
      options: ["55\n10\n55 10", "10\n10\n10 10", "55\n10\n10 10", "55\n55\n55 55"],
      explanation: "Plusstegnet skjøter to tekster og legger sammen to tall. Stjerne på en tekst gjentar den, mens stjerne på et tall ganger — to helt ulike operasjoner med samme tegn.",
    },
    {
      question: "En metode skal spørre om to ting, begge med gyldighetskrav. Hvordan skrives det?",
      options: ["To input-løkker etter hverandre, hver med sitt eget par av kall og sin egen test.", "Én løkke med to `input`-kall inne i seg, og en betingelse som tester begge.", "Én løkke med en nøstet løkke inni, slik at det andre spørsmålet gjentas først.", "To `if`-setninger etter hverandre, siden to løkker ville gjort koden uleselig."],
      explanation: "Til sammen blir det fire `input`-kall. Det er lengre å skrive, men det er formen fasiten bruker, og hver løkke gir uttelling for seg.",
    },
  ],
  'in1000-6-5': [
    {
      question: "Hva er de fire første stegene i oppskriften for Oppgave 4?",
      options: ["Finn klassene, sett opp konstruktørene, avgjør multiplisiteten, list opp metodene.", "Skriv konstruktøren, skriv filinnlesingen, skriv algoritmemetoden, test koden.", "Les oppgaveteksten, velg variabelnavn, skriv `__str__`, og lag testdata.", "Tell deloppgavene, fordel tiden, skriv den letteste først, og les gjennom."],
      explanation: "De fire første er blyant og papir og tar ti minutter. De avgjør de seks–sju deloppgavene under — å skrive kode med én gang er den vanligste tidsfellen.",
    },
    {
      question: "Hvor mye av eksamen er Oppgave 4 verdt?",
      options: ["47–50 poeng av 100 — nesten halve eksamen, i alle de seks moderne settene.", "Rundt 25 poeng av 100, altså en fjerdedel av den samlede poengsummen.", "8–9 poeng av 100, siden den bare er én av fem oppgaver i settet.", "Det varierer fra 10 til 80 poeng, avhengig av hvilket år settet er fra."],
      explanation: "Den er delt i seks–sju deloppgaver à 3–12 poeng, og hver av dem rettes for seg. Derfor lønner det seg alltid å levere noe på hver.",
    },
    {
      question: "Du står fast på deloppgave c). Hva bør du gjøre?",
      options: ["Gå videre til d) — deloppgavene rettes hver for seg, og du kan bruke metoder oppgaveteksten beskriver.", "Bli sittende til du løser den, siden d) bygger på at c) er skrevet ferdig.", "Levere blankt på resten, siden en ufullstendig modell ikke gir uttelling.", "Skrive om hele modellen fra bunnen, slik at c) blir enklere å få til."],
      explanation: "Sier teksten at `Bok` har `hent_tittel()`, kan du kalle den i d) selv om du sto fast i a). Sensor vet at metoden finnes, fordi oppgaven sa det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, tittel, utlaan):\n        self._tittel = tittel\n        self._utlaan = utlaan\n\n    def hent_tittel(self):\n        return self._tittel\n\n    def hent_utlaan(self):\n        return self._utlaan\n\n    def laan_ut(self):\n        self._utlaan = self._utlaan + 1\n\nclass Bibliotek:\n    def __init__(self):\n        self._boker = {}\n\n    def legg_til(self, b):\n        self._boker[b.hent_tittel()] = b\n\n    def finn(self, t):\n        if t in self._boker:\n            return self._boker[t]\n        return None\n\nbib = Bibliotek()\nbib.legg_til(Bok(\"Sult\", 3))\nbib.finn(\"Sult\").laan_ut()\nbib.finn(\"Sult\").laan_ut()\nprint(bib.finn(\"Sult\").hent_utlaan())\n```",
      options: ["5", "3", "4", "None"],
      explanation: "`finn` gir en **referanse** til det samme objektet begge gangene, ikke en kopi — så begge utlånene registreres på boka i ordboka.",
    },
    {
      question: "Hva er den dyreste enkeltbeslutningen i Oppgave 4?",
      options: ["Å lagre rådata i samlingen i stedet for objektreferanser — det slår ut i fire deloppgaver samtidig.", "Å velge liste der oppgaven ba om ordbok, siden oppslag da blir umulig.", "Å glemme `fil.close()` etter innlesingsløkka, siden fila da blir liggende åpen.", "Å skrive klassene i én fil i stedet for i hver sin fil, som fasiten gjør."],
      explanation: "`self._boker[tittel] = felt[1]` gjør at biblioteket ikke lenger kan be en bok om noe. Da faller filinnlesingen, delegeringen, algoritmemetoden og utskriften.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Rett:\n    def __init__(self, navn, pris):\n        self._navn = navn\n        pris = pris\n        self._solgte = 0\n\n    def hent_navn(self):\n        return self._navn\n\n    def selg(self, n):\n        self._solgte = self._solgte + n\n\n    def hent_solgte(self):\n        return self._solgte\n\nr = Rett(\"Suppe\", 89)\nr.selg(3)\nprint(r.hent_solgte())\n```",
      options: ["3", "267", "0", "89"],
      explanation: "Salget registreres riktig, men `pris = pris` er `self`-fella: `self._pris` finnes ikke. Et senere kall på en `omsetning`-metode ville stoppet med `AttributeError`.",
    },
    {
      question: "En klasse skal både kunne slås opp på navn og gås gjennom i sin helhet. Hva gjør du?",
      options: ["Bruker en ordbok — du kan alltid løpe gjennom nøklene og slå opp objektet.", "Bruker to samlinger med de samme objektene, én ordbok og én liste.", "Bruker en liste, og skriver en `finn`-metode som sammenligner navnene.", "Bruker en liste, siden en ordbok ikke kan gås gjennom med en løkke."],
      explanation: "`for n in self._d:` gir nøklene, og `self._d[n]` gir objektet. En klasse kan godt ha både en ordbok og en liste — men da for **ulike** ting.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Sal:\n    def __init__(self, navn, kap):\n        self._navn = navn\n        self._kap = kap\n        self._paa = []\n\n    def hent_navn(self):\n        return self._navn\n\n    def ledige(self):\n        return self._kap - len(self._paa)\n\n    def meld_paa(self, m):\n        if self.ledige() < 1:\n            print(\"Fullt i\", self._navn)\n        else:\n            self._paa.append(m)\n\n    def antall(self):\n        return len(self._paa)\n\ns = Sal(\"A\", 2)\ns.meld_paa(\"x\")\ns.meld_paa(\"y\")\ns.meld_paa(\"z\")\nprint(s.antall(), s.ledige())\n```",
      options: ["Fullt i A\n2 0", "Fullt i A\n3 -1", "3 0", "Fullt i A\n2 1"],
      explanation: "Det tredje forsøket avvises, så antallet står på 2 av 2 og ingen plasser er ledige. `3 -1` er svaret hvis man tror påmeldingen skjer likevel.",
    },
    {
      question: "Hva må stå i konstruktøren selv om det ikke sendes inn som parameter?",
      options: ["Startverdiene: `self._solgte = 0`, `self._utlaant = False`, `self._boker = []`.", "Ingenting — konstruktøren skal bare lagre de verdiene som kommer utenfra.", "Alle aksessorene, slik at de finnes før noen kaller dem utenfra.", "En kommentar som beskriver hva hver instansvariabel skal brukes til."],
      explanation: "Kjenn dem igjen på «starter på null», «er ikke utlånt når den registreres» og «har ingen … til å begynne med». De er det oftest glemte, og et selvstendig poeng.",
    },
    {
      question: "Hvorfor kan ikke en metode i containeren hete det samme som metoden den kaller på underobjektet?",
      options: ["Fordi linjen da ser ut som om metoden kaller seg selv, og en metode som kaller seg selv, er utenfor pensum her.", "Fordi Python ikke tillater at to klasser i samme program har en metode med samme navn.", "Fordi containeren da ville kalt sin egen metode og gått i en uendelig løkke.", "Fordi sensor trekker for alle metodenavn som er kortere enn ti tegn."],
      explanation: "`selg_rett` på kantina som kaller `selg` på retten, er formen boka bruker. Navnene beskriver dessuten to ulike jobber: én rett mot hele menyen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Bok:\n    def __init__(self, t, f, u):\n        self._t = t\n        self._f = f\n        self._u = u\n\n    def hent_f(self):\n        return self._f\n\n    def hent_u(self):\n        return self._u\n\nboker = [Bok(\"Sult\", \"Hamsun\", 3), Bok(\"Vaar\", \"Undset\", 7), Bok(\"Pan\", \"Hamsun\", 5)]\nteller = {}\nfor b in boker:\n    f = b.hent_f()\n    if f not in teller:\n        teller[f] = 0\n    teller[f] = teller[f] + b.hent_u()\nbeste = None\nbeste_antall = 0\nfor f in teller:\n    if teller[f] > beste_antall:\n        beste = f\n        beste_antall = teller[f]\nprint(teller)\nprint(beste, beste_antall)\n```",
      options: ["{'Hamsun': 8, 'Undset': 7}\nHamsun 8", "{'Hamsun': 5, 'Undset': 7}\nUndset 7", "{'Hamsun': 8, 'Undset': 7}\nUndset 7", "{'Undset': 7, 'Hamsun': 8}\nHamsun 8"],
      explanation: "Hamsun står på to bøker, så summen 3 pluss 5 finnes ikke i noen enkelt bok — derfor må regnskapet bygges i én løkke og leses i neste.",
    },
    {
      question: "Hva bør du bruke de siste fem minuttene på Oppgave 4 til?",
      options: ["Å lese gjennom med konvensjonene i hodet: `self._` overalt, ingen `obj._x` utenfra, sjekk før hvert oppslag.", "Å kjøre koden en gang til for å se at den fortsatt gir riktig svar.", "Å skrive kommentarer over hver metode som forklarer hva den gjør.", "Å legge til flere aksessorer og mutatorer, siden de alltid gir poeng."],
      explanation: "De stumme feilene — feilkode #1 og #11 — finnes ikke ved å teste, bare ved å lese. Og eksamen er hjelpemiddelfri, så koden kan ikke kjøres i det hele tatt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Stativ:\n    def __init__(self, navn):\n        self._navn = navn\n        self._sykler = []\n\n    def hent_navn(self):\n        return self._navn\n\n    def sett_inn(self, s):\n        self._sykler.append(s)\n\n    def antall_sykler(self):\n        return len(self._sykler)\n\nclass Utleie:\n    def __init__(self):\n        self._stativer = {}\n\n    def legg_til(self, s):\n        self._stativer[s.hent_navn()] = s\n\n    def totalt_antall_sykler(self):\n        t = 0\n        for n in self._stativer:\n            t = t + self._stativer[n].antall_sykler()\n        return t\n\nu = Utleie()\na = Stativ(\"A\")\nb = Stativ(\"B\")\nu.legg_til(a)\nu.legg_til(b)\na.sett_inn(\"R31\")\na.sett_inn(\"R48\")\nb.sett_inn(\"R07\")\nprint(u.totalt_antall_sykler())\n```",
      options: ["3", "2", "1", "0"],
      explanation: "To nivåer av en-til-mange: utleien har en ordbok av stativer, hvert stativ en liste av sykler. Delegeringsløkka summerer det stativene svarer.",
    },
    {
      question: "Hva er riktig plassering av `return` i en algoritmemetode som skal finne det største elementet?",
      options: ["Etter løkka — inne i den ville metoden svart på det første elementet over grensen.", "Inne i løkka, rett etter oppdateringen av begge variablene.", "Både før og etter løkka, slik at metoden alltid gir en verdi.", "Inne i `if`-en, men bare når det er siste runde av løkka."],
      explanation: "Det er feilkode #7, for tidlig retur. Malen har to linjer over løkka og én linje under den — sitter den plasseringen, kan du ikke gjøre feilen.",
    },
    {
      question: "Oppgaveteksten sier ikke hva som skal skje når en nøkkel mangler. Hva gjør du?",
      options: ["Velger noe fornuftig — som `return None` — og skriver én kommentarlinje om forutsetningen.", "Lar metoden krasje, siden oppgaven ikke ba om noen håndtering.", "Skriver alle mulige varianter, slik at én av dem treffer det sensor ville hatt.", "Hopper over deloppgaven, siden en gal antakelse trekker mer enn et blankt svar."],
      explanation: "Egne rimelige forutsetninger er uttrykkelig tillatt. Den dokumenterte antakelsen er den ene legitime bruken av kommentarer i en besvarelse.",
    },
    {
      question: "Hvor mye av de fire timene bør Oppgave 4 få?",
      options: ["Rundt 100 minutter — ti på modellen med blyant, fem på gjennomlesingen, resten på koden.", "Rundt 40 minutter, slik at det blir god tid til de fire andre oppgavene.", "All tiden som blir til overs når de fire andre oppgavene er ferdige.", "Nøyaktig 48 minutter, altså like mange minutter som oppgaven har poeng."],
      explanation: "Nesten halve tiden til nesten halve poengsummen. Blir du sittende fast på én deloppgave i mer enn ti minutter, gå videre — den rettes ikke bedre av at du bruker tjue.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Container:\n    def __init__(self, m, kap):\n        self._m = m\n        self._kap = kap\n        self._fyll = 0\n\n    def grad(self):\n        return self._fyll * 100 // self._kap\n\n    def ta_imot(self, kilo):\n        if self._fyll + kilo > self._kap:\n            print(\"Ikke plass i\", self._m)\n        else:\n            self._fyll = self._fyll + kilo\n\nc = Container(\"glass\", 200)\nc.ta_imot(60)\nc.ta_imot(160)\nprint(c.grad())\n```",
      options: ["Ikke plass i glass\n30", "30", "Ikke plass i glass\n110", "Ikke plass i glass\n80"],
      explanation: "Det andre forsøket ville gitt 220 av 200, så det avvises og fyllingen står på 60. Heltallsdivisjonen `//` gir 30 uten desimaler.",
    },
    {
      question: "Hva er poenget med å skrive skjelettet — klasser og signaturer uten kropper — først?",
      options: ["Du ser hele modellen før du bruker tid på detaljer, og strukturen gir poeng i seg selv.", "Python krever at alle metoder deklareres før noen av dem kan brukes.", "Skjelettet er den eneste delen sensor retter; kroppene leses ikke.", "Det gjør at koden kjører raskere, siden Python slipper å lete etter metodene."],
      explanation: "Rekker du bare halve modellen, teller den halvparten fullt ut. Å skrive ferdig kode på den første klassen med én gang er den vanligste tidsfellen.",
    },
  ],
  'in1000-7-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"skrue;120;4\\n\"\nfelt = linje.rstrip().split(\";\")\nprint(felt)\n```",
      options: ["['skrue', '120', '4']", "['skrue', '120', '4\\n']", "['skrue;120;4']", "['skrue', '120', 4]"],
      explanation: "Rensingen skjer først, så delingen. Svaret der siste felt er `'4\\n'`, er resultatet hvis `.rstrip()` glemmes — feilkode #8, og den rammer bare det siste feltet.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"skrue;120;4\\n\"\nfelt = linje.split(\";\")\nprint(felt[2] == \"4\", len(felt[2]))\n```",
      options: ["False 2", "True 1", "False 1", "True 2"],
      explanation: "Linjeskiftet henger igjen i det siste feltet, så teksten er to tegn lang og ulik `\"4\"`. Feilen er stum: programmet krasjer ikke, det svarer bare feil.",
    },
    {
      question: "Hvor mange ganger skal `linje = fil.readline()` stå i filinnlesing-løkka?",
      options: ["To ganger — én gang før løkka, og én gang nederst inne i den.", "Én gang, øverst inne i løkka, slik at hver runde starter med en ny linje.", "Én gang, før løkka, siden filobjektet selv husker hvor langt du har lest.", "Tre ganger — én før, én øverst i løkka og én nederst, for å unngå å hoppe over linjer."],
      explanation: "`while` tester før hver runde, så den trenger en verdi allerede første gang. Glemmer du den nederste, henger programmet og skriver den samme linja for alltid.",
    },
    {
      question: "Hva gir `fil.readline()` når det ikke er flere linjer igjen i fila?",
      options: ["Den tomme teksten `\"\"` — signalet løkka bruker som stoppbetingelse.", "Verdien `None`, som betyr at det ikke finnes noen verdi å gi tilbake.", "Teksten `\"\\n\"`, altså bare et linjeskift uten noe innhold foran.", "En feilmelding, fordi det ikke er mer å lese i filobjektet."],
      explanation: "En blank linje midt i fila gir derimot `\"\\n\"`, som ikke er den tomme teksten. Derfor stopper ikke løkka på en blank linje — og det er riktig, siden en blank linje er data.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nraa = \"Ada 24\\n\"\nprint(len(raa), len(raa.rstrip()))\n```",
      options: ["7 6", "8 6", "7 7", "6 6"],
      explanation: "Teksten har seks synlige tegn pluss linjeskiftet, som er **ett** tegn. `.rstrip()` fjerner bare det, ikke mellomrommet inni teksten.",
    },
    {
      question: "Hvorfor må `.rstrip()` stå før `.split()` og ikke etter?",
      options: ["Fordi `.split()` gir en liste, og en liste har ingen `.rstrip()` — rensingen må skje på teksten.", "Fordi `.split()` fjerner linjeskiftet selv når den kalles først, og da blir `.rstrip()` overflødig.", "Fordi Python krever at metoder kalles i alfabetisk rekkefølge når de lenkes sammen.", "Fordi `.rstrip()` ellers ville fjernet skilletegnet i tillegg til linjeskiftet."],
      explanation: "Malen er `linje.rstrip().split(sep)`, som én fast lenke. Skriver du det motsatt, stopper programmet — og glemmer du rensingen helt, henger linjeskiftet igjen i siste felt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfelt = [\"mandag\", \"3\"]\nprint(felt[1] + felt[1])\nprint(int(felt[1]) + int(felt[1]))\n```",
      options: ["33\n6", "6\n6", "33\n33", "6\n33"],
      explanation: "Felt fra en fil er alltid tekster, så plusstegnet skjøter dem. Først etter `int(...)` regnes det — feilkode #4 er å glemme akkurat den konverteringen.",
    },
    {
      question: "Hva skjer hvis `fil.close()` står inne i løkka i stedet for etter den?",
      options: ["Programmet stopper på neste `readline` med `ValueError: I/O operation on closed file`.", "Ingenting — fila lukkes bare én gang, og de senere kallene ignoreres stille.", "Fila åpnes automatisk på nytt ved neste `readline`, så løkka starter forfra.", "Programmet henger, fordi løkkebetingelsen aldri kan bli usann uten en åpen fil."],
      explanation: "`close` hører etter løkka. Glemmer du den helt, virker programmet som regel likevel — det er en liten trekkfeil, ikke en kjørefeil.",
    },
    {
      question: "En fil har en overskriftslinje øverst. Hvordan hopper du over den?",
      options: ["Med ett ekstra `fil.readline()`-kall før løkka, uten å ta vare på verdien.", "Med en `if`-test inne i løkka som sjekker om linja er den første i fila.", "Med `fil.readline(1)`, som hopper over det oppgitte antallet linjer.", "Ved å lese hele fila og fjerne det første elementet i listen etterpå."],
      explanation: "Glemmer du det, prøver programmet å konvertere et ord fra overskriften til tall, og stopper med `ValueError` — med selve ordet i feilmeldingen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef les(linjer):\n    ut = []\n    for linje in linjer:\n        felt = linje.rstrip().split(\";\")\n        ut.append(felt[0])\n    return ut\n\nprint(les([\"skrue;120\\n\", \"bolt;45\\n\"]))\n```",
      options: ["['skrue', 'bolt']", "['skrue']", "['skrue;120', 'bolt;45']", "['120', '45']"],
      explanation: "Lista opprettes før løkka og returneres etter, så begge feltene kommer med. `['skrue']` er svaret hvis `return` hadde stått inne i løkka — feilkode #7.",
    },
    {
      question: "Hvor skal `return samling` stå i en funksjon som leser en fil til en liste?",
      options: ["Etter løkka — inne i den ville funksjonen avsluttet allerede på første linje.", "Inne i løkka, rett etter `append`, slik at lista blir returnert med én gang.", "Før løkka, slik at den som kaller, får tilgang til lista mens den fylles.", "Etter `fil.close()`, men bare hvis fila faktisk inneholdt minst én linje."],
      explanation: "Et `return` inne i løkka er feilkode #7, for tidlig retur. Det samme gjelder plasseringen av `samling = []`: den skal over løkka, ellers nullstilles den hver runde.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = \"mandag,3\"\nfelt = linje.split(\";\")\nprint(felt)\nprint(len(felt))\n```",
      options: ["['mandag,3']\n1", "['mandag', '3']\n2", "['mandag,3']\n2", "['mandag', '3']\n1"],
      explanation: "Skilletegnet finnes ikke i teksten, så delingen gir **én** stor bit. Et senere `felt[1]` ville stoppet programmet med `IndexError` — den andre halvdelen av feilkode #8.",
    },
    {
      question: "Hva er riktig måte å bygge filnavnet av et spillnavn på?",
      options: ["`filnavn = navn + \".txt\"` — filnavnet er en helt vanlig tekst.", "`filnavn = navn + \"txt\"` — punktumet legges til av `open` automatisk.", "`filnavn = navn.txt` — punktumet knytter filendelsen til variabelen.", "`filnavn = open(navn, \".txt\")` — `open` tar navnet og endelsen hver for seg."],
      explanation: "Formen `navn + \".txt\"` er en gjenganger i settene: hvert objekt har sin egen fil. Punktumet må skrives inn selv, ellers stopper programmet med `FileNotFoundError`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"glass;40\\n\", \"papir;85\\n\", \"metall;80\\n\"]\nantall = 0\nfor linje in linjer:\n    felt = linje.rstrip().split(\";\")\n    if int(felt[1]) >= 80:\n        antall = antall + 1\nprint(antall)\n```",
      options: ["2", "1", "3", "0"],
      explanation: "Kantverdien avgjør: `80 >= 80` er sann, så både 85 og 80 telles med. Med `>` i stedet ville svaret blitt 1 — les «minst 80» sakte.",
    },
    {
      question: "Hva er forskjellen på `.rstrip()` og `.strip()`?",
      options: ["`.rstrip()` fjerner blanktegn bare til høyre; `.strip()` fjerner i begge ender.", "`.rstrip()` fjerner bare linjeskift; `.strip()` fjerner alle slags tegn i endene.", "`.rstrip()` endrer teksten på plass; `.strip()` gir en ny tekst du må ta imot.", "`.rstrip()` virker på lister av felt; `.strip()` virker bare på hele linjer."],
      explanation: "For en linje fra en fil er `.rstrip()` det riktige — det er linjeskiftet på slutten du vil bort med. Begge gir en **ny** tekst; originalen er urørt.",
    },
    {
      question: "Hvorfor bruker boka `while linje != \"\":` og ikke `for linje in fil:` som standard?",
      options: ["Fordi fagets egne løsningsforslag bruker den formen, og fordi den lar deg hoppe over en header underveis.", "Fordi `for linje in fil:` ikke virker på filer med mer enn noen få linjer.", "Fordi den korte formen glemmer linjeskiftet og derfor gir feil felt.", "Fordi `while`-formen er raskere når fila inneholder mange linjer med tall."],
      explanation: "Den korte formen er både kortere og umulig å henge med. Kan du begge, er du trygg uansett hvilken form oppgaveteksten viser.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {}\nfor linje in [\"mandag;spinning;14\\n\", \"tirsdag;spinning;20\\n\", \"onsdag;yoga;6\\n\"]:\n    felt = linje.rstrip().split(\";\")\n    a = felt[1]\n    if a not in d:\n        d[a] = 0\n    d[a] = d[a] + int(felt[2])\nprint(d)\n```",
      options: ["{'spinning': 34, 'yoga': 6}", "{'spinning': 20, 'yoga': 6}", "{'yoga': 6, 'spinning': 34}", "{'spinning': '1420', 'yoga': '6'}"],
      explanation: "Teller-idiomet akkumulerer på samme nøkkel, og ordboka husker rekkefølgen nøklene ble opprettet i. Svaret med tekstverdiene `'1420'` og `'6'` er det du får hvis `int(...)` glemmes.",
    },
    {
      question: "Hva er den vanligste årsaken til at et filinnlesingsprogram henger og skriver samme linje for alltid?",
      options: ["Den nederste `linje = fil.readline()` mangler, så løkkebetingelsen aldri blir usann.", "Fila mangler et linjeskift på siste linje, så `readline` finner aldri slutten.", "`fil.close()` er glemt, så filobjektet fortsetter å levere den samme linja.", "Betingelsen er skrevet `while linje != None:` i stedet for med den tomme teksten."],
      explanation: "Det er den mest synlige feilen i kapitlet, og den letteste å rette. `readline` skal stå to steder: før løkka og nederst inne i den.",
    },
  ],
  'in1000-7-2': [
    {
      question: "Hva er steg 0 i oppskriften for fil-deloppgaven?",
      options: ["Å skrive av eksempellinjen fra oppgaveteksten og markere skilletegnet og hvilket felt som er hva.", "Å åpne fila og skrive ut den første linja, slik at du ser hva den inneholder.", "Å bestemme hvilke klasser oppgaven trenger, før du ser på dataformatet.", "Å skrive løkka først, og fylle inn skilletegnet når du kommer til delingen."],
      explanation: "Eksamen er hjelpemiddelfri, så du kan ikke kjøre koden for å se hva fila inneholder. To minutter på kladden sparer deg for begge halvdelene av feilkode #8.",
    },
    {
      question: "Hvilke fire ting varierer mellom fil-deloppgavene i settene?",
      options: ["Skilletegnet, om fila har en overskriftslinje, hvilke felt som er tall, og liste mot ordbok.", "Antall linjer i fila, filnavnet, klassenavnet, og hvor mange metoder klassen har.", "Programmeringsspråket, filendelsen, tegnsettet, og hvor fila ligger på maskinen.", "Om løkka er en `while` eller en `for`, og om `close` står før eller etter løkka."],
      explanation: "Alt annet i de åtte stegene er identisk hver gang. Domenet varierer også — medlemsregister, varelager, timeplan — men det er bare kulisser.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"skrue,120,4\\n\", \"mutter,80,2\\n\"]\nut = []\nfor linje in linjer:\n    felt = linje.rstrip().split(\",\")\n    ut.append(felt[0])\nprint(ut, len(ut))\n```",
      options: ["['skrue', 'mutter'] 2", "['skrue'] 1", "['skrue,120,4', 'mutter,80,2'] 2", "['120', '80'] 2"],
      explanation: "Lista opprettes før løkka og fylles inne i den, så begge navnene kommer med. `['skrue'] 1` er svaret hvis `return` eller lista hadde ligget feil i forhold til løkka.",
    },
    {
      question: "Hvor skal `self._varer = {}` stå i en klasse som leser en fil?",
      options: ["I konstruktøren — innlesingsmetoden fyller den, men oppretter den ikke.", "Øverst i innlesingsmetoden, slik at den nullstilles for hver ny fil som leses.", "Inne i innlesingsløkka, slik at hver linje får en frisk ordbok å legge seg i.", "Utenfor klassen, som en global variabel begge metodene kan bruke."],
      explanation: "Oppretter du den inne i løkka, nullstilles den hver runde. Skriver du `varer = {}` uten `self.` i metoden, blir den lokal og forsvinner — feilkode #1.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent_navn(self):\n        return self._navn\n\n    def hent_antall(self):\n        return self._antall\n\n    def __str__(self):\n        return self._navn + \" x\" + str(self._antall)\n\nlinjer = [\"skrue,120\\n\", \"mutter,80\\n\"]\nd = {}\nfor linje in linjer:\n    felt = linje.rstrip().split(\",\")\n    v = Vare(felt[0], int(felt[1]))\n    d[v.hent_navn()] = v\nprint(d[\"skrue\"], len(d))\n```",
      options: ["skrue x120 2", "skrue x120 1", "skrue 120 2", "Vare x120 2"],
      explanation: "Nøkkelen hentes med objektets egen aksessor, og `print` kaller varens `__str__`. Å skrive `v._navn` i stedet ville vært feilkode #11.",
    },
    {
      question: "Hvorfor skal en ordbok fra fil holde objektreferanser og ikke rådata?",
      options: ["Fordi du ellers mister tilgangen til objektets metoder, og alle senere deloppgaver blir vanskeligere.", "Fordi en ordbok bare kan ha objekter som verdier, aldri tekster eller tall.", "Fordi rådata tar mer plass i minnet enn en referanse til det samme objektet.", "Fordi nøkkelen ellers ikke kan hentes med objektets egen aksessormetode."],
      explanation: "Fil-deloppgaven kommer først i Oppgave 4 nettopp fordi resten bygger på den. Lagrer du `d[navn] = felt[1]`, faller «finn den dyreste» og «skriv ut alle» sammen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"R31;12\\n\", \"R48;5\\n\", \"R31;8\\n\"]\nd = {}\nfor linje in linjer:\n    felt = linje.rstrip().split(\";\")\n    d[felt[0]] = int(felt[1])\nprint(d)\n```",
      options: ["{'R31': 8, 'R48': 5}", "{'R31': 20, 'R48': 5}", "{'R31': 12, 'R48': 5}", "{'R31': 8, 'R48': 5, 'R31': 8}"],
      explanation: "Den tredje linja bruker en nøkkel som allerede finnes, og `=` **overskriver** i stedet for å legge til. Skal verdiene summeres, må teller-idiomet brukes.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"R31;12\\n\", \"R48;5\\n\", \"R31;8\\n\"]\nd = {}\nfor linje in linjer:\n    felt = linje.rstrip().split(\";\")\n    k = felt[0]\n    if k not in d:\n        d[k] = 0\n    d[k] = d[k] + int(felt[1])\nprint(d)\n```",
      options: ["{'R31': 20, 'R48': 5}", "{'R31': 8, 'R48': 5}", "{'R31': 12, 'R48': 5}", "{'R48': 5, 'R31': 20}"],
      explanation: "Teller-idiomet akkumulerer på samme nøkkel. Uten `if k not in d:`-sjekken ville programmet stoppet med `KeyError` på første linje — feilkode #14.",
    },
    {
      question: "Når skal samlingen fra fila være en ordbok og ikke en liste?",
      options: ["Når noe skal slås opp på et navn eller en kode senere i oppgaven.", "Når fila har mer enn to felt per linje, slik at feltene kan navngis.", "Når fila har en overskriftslinje, siden headeren gir nøklene til ordboka.", "Når objektene skal skrives ut i en bestemt rekkefølge til slutt."],
      explanation: "Oppgaveteksten sier det som regel rett ut: «returner en ordbok fra navn til objekt» eller «returner en liste av objekter». Skal du bare gå gjennom alle, er lista enklere.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"mandag A12 24\\n\", \"tirsdag B03 18\\n\"]\nd = {}\nfor linje in linjer:\n    felt = linje.rstrip().split()\n    d[felt[0]] = int(felt[2])\nprint(d, len(d))\n```",
      options: ["{'mandag': 24, 'tirsdag': 18} 2", "{'mandag': 'A12', 'tirsdag': 'B03'} 2", "{'mandag': 24, 'tirsdag': 18} 3", "{'A12': 24, 'B03': 18} 2"],
      explanation: "Mellomrom som skilletegn betyr `.split()` uten argument, og indeksene teller fra 0. Rommet i `felt[1]` brukes ikke her — oppgaven ba om dag til antall.",
    },
    {
      question: "En metode `les_fra_fil(self, filnavn)` skriver `varer = {}` øverst og fyller den. Hva blir resultatet?",
      options: ["Objektets egen ordbok forblir tom, og alt som ble lest, forsvinner når metoden er ferdig.", "Objektets ordbok blir fylt, siden `varer` og `self._varer` viser til det samme.", "Programmet stopper med en feilmelding om at `varer` ikke er definert i klassen.", "Ordboka blir fylt, men bare med den siste linja i fila, siden den nullstilles."],
      explanation: "Det er feilkode #1, `self`-fella, i en metode. Feilen er stum: programmet kjører rolig, og først en senere `len(self._varer)` avslører at svaret er 0.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinjer = [\"Ada:12:3\\n\", \"Nora:9:5\\n\", \"Per:15:1\\n\"]\nbeste = None\nbeste_poeng = 0\nfor linje in linjer:\n    felt = linje.rstrip().split(\":\")\n    poeng = int(felt[1]) - int(felt[2])\n    if poeng > beste_poeng:\n        beste = felt[0]\n        beste_poeng = poeng\nprint(beste, beste_poeng)\n```",
      options: ["Per 14", "Ada 9", "Nora 4", "Per 15"],
      explanation: "Poengene er 9, 4 og 14, og både `beste` og `beste_poeng` oppdateres sammen inne i samme `if`. `Ada 9` er svaret hvis man tror den første som slår grensen, blir stående.",
    },
    {
      question: "Hva er galt med å oppdatere bare `beste` og ikke `beste_verdi` i en finn-beste-løkke?",
      options: ["Da finner løkka det siste elementet over grensen, i stedet for det største.", "Da stopper programmet, fordi `beste_verdi` aldri får noen verdi å sammenligne med.", "Da finner løkka alltid det første elementet, siden grensen aldri flyttes oppover.", "Da blir resultatet riktig uansett, men koden er unødvendig vanskelig å lese."],
      explanation: "De to variablene hører sammen og oppdateres inne i samme `if`. `beste = None` før løkka er dessuten det ærlige svaret på en tom samling.",
    },
    {
      question: "Fila har en overskriftslinje, men du glemmer å hoppe over den. Hva skjer typisk?",
      options: ["Programmet stopper med `ValueError`, med selve ordet fra overskriften i feilmeldingen.", "Programmet kjører, men det første objektet får overskriftsordene som verdier.", "Programmet stopper med `IndexError`, fordi overskriften har færre felt enn datalinjene.", "Ingenting — Python kjenner igjen overskriftslinjer og hopper over dem selv."],
      explanation: "`int(\"alder\")` gir `invalid literal for int() with base 10: 'alder'`. Ser du et overskriftsord i en slik melding, vet du med én gang hva som mangler.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nclass Vare:\n    def __init__(self, navn, antall):\n        self._navn = navn\n        self._antall = antall\n\n    def hent_navn(self):\n        return self._navn\n\n    def hent_antall(self):\n        return self._antall\n\n    def __str__(self):\n        return self._navn + \" x\" + str(self._antall)\n\nclass Lager:\n    def __init__(self):\n        self._varer = []\n\n    def legg_til(self, v):\n        self._varer.append(v)\n\n    def totalt_antall(self):\n        sum_a = 0\n        for v in self._varer:\n            sum_a = sum_a + v.hent_antall()\n        return sum_a\n\nlager = Lager()\nlager.legg_til(Vare(\"skrue\", 120))\nlager.legg_til(Vare(\"bolt\", 45))\nprint(lager.totalt_antall())\n```",
      options: ["165", "120", "45", "2"],
      explanation: "Akkumulatoren settes til 0 før løkka, legger til én metodeverdi per runde, og returneres etter. `2` er svaret hvis man forveksler summen med antall elementer.",
    },
    {
      question: "Hvorfor heter containerens metode `totalt_antall` og ikke `antall`, når elementet har `antall()`?",
      options: ["Fordi en metode som heter det samme som den kaller, ser ut som om den kaller seg selv.", "Fordi Python ikke tillater to metoder med samme navn i det samme programmet.", "Fordi containeren alltid må ha et lengre metodenavn enn elementene den holder.", "Fordi `antall` er et reservert ord som ikke kan brukes som metodenavn i en klasse."],
      explanation: "En metode som kaller seg selv, er rekursjon, som er utenfor pensum i dette emnet. Navnene beskriver dessuten ulike jobber: ett element mot hele samlingen.",
    },
  ],
  'in1000-8-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\ny = [[3, 8], [1, 4, 9], [7]]\nprint(len(y), len(y[1]), y[1][2])\n```",
      options: ["3 3 9", "6 3 9", "3 3 4", "3 6 9"],
      explanation: "`len` teller alltid ett nivå: ytterlista har tre elementer, og den andre indre lista har tre tall. Totalen på seks tall finnes i ingen av dem.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ny = [[14, 9, 20], [11, 0, 7]]\nprint(y[0][2], y[1][0], y[-1][-1])\n```",
      options: ["20 11 7", "20 14 7", "9 11 0", "20 11 11"],
      explanation: "Les indeksene fra venstre: første hakeparentes velger den indre lista. Negativ indeks virker på begge nivåer, så `y[-1][-1]` er siste tall i siste liste.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ny = [[1, 2], [3, 4]]\ntotal = 0\nfor rad in y:\n    for x in rad:\n        total = total + x\nprint(total)\n```",
      options: ["10", "7", "4", "2"],
      explanation: "Akkumulatoren står utenfor begge løkkene og summerer alt. `7` er svaret hvis den står mellom løkkene, og `4` hvis den står innerst.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ny = [[1, 2], [3, 4]]\nfor rad in y:\n    mellom = 0\n    for x in rad:\n        mellom = mellom + x\nprint(mellom)\n```",
      options: ["7", "10", "4", "3"],
      explanation: "`mellom = 0` står inne i den ytre løkka og nullstilles per indre liste, så den ender på summen av den **siste**: 3 pluss 4.",
    },
    {
      question: "Hva er løkkevariabelen i den ytre løkka når du løper gjennom en nøstet liste?",
      options: ["En liste — den indre lista, ikke et enkelt tall.", "Et tall — Python flater ut strukturen og gir deg elementene direkte.", "En indeks — den ytre løkka teller alltid fra 0 og oppover.", "En tekst — den ytre løkka gir navnet på den indre lista."],
      explanation: "`for uke in uker:` gir `[14, 9, 20]` første runde. Å tro at den gir et tall, er den vanligste lesefeilen i en to nivåers løkke.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nuke = {\"mandag\": {\"a\": 14, \"b\": 9}, \"tirsdag\": {\"a\": 20}}\nprint(len(uke), len(uke[\"mandag\"]))\nprint(uke[\"mandag\"][\"b\"])\n```",
      options: ["2 2\n9", "3 2\n9", "2 2\n14", "2 3\n9"],
      explanation: "`len(uke)` teller ytternøklene, `len(uke[\"mandag\"])` teller indrenøklene under mandag. Det doble oppslaget leses fra venstre.",
    },
    {
      question: "Hvilke sjekker trengs når du bygger opp en nøstet ordbok?",
      options: ["To — først at ytternøkkelen finnes, så at indrenøkkelen finnes.", "Én — det holder å sjekke indrenøkkelen, siden ytternøkkelen opprettes automatisk.", "Ingen — Python oppretter begge nivåene selv ved en tilordning.", "Tre — ytternøkkelen, indrenøkkelen, og at verdien ikke er `None`."],
      explanation: "`d[ytre][indre] = 0` uten `d[ytre] = {}` først stopper med `KeyError` på ytternøkkelen. Det er feilkode #14 i nøstet form.",
    },
    {
      question: "Hvorfor må ytternøkkelen sjekkes før indrenøkkelen?",
      options: ["Fordi `if indre not in d[ytre]:` slår opp `d[ytre]` før sjekken rekker å virke.", "Fordi Python leser betingelser fra høyre mot venstre i en `if`-setning.", "Fordi indrenøkler alltid opprettes automatisk når ytternøkkelen finnes.", "Fordi rekkefølgen ikke spiller noen rolle — begge varianter virker like godt."],
      explanation: "På en ytternøkkel som ikke finnes, stopper programmet allerede i oppslaget. Samme regel gjelder i en trygg oppslagsfunksjon: ytre sjekk først.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {}\nfor rad in [[\"a\", \"x\", 1], [\"a\", \"y\", 2], [\"a\", \"x\", 4]]:\n    ytre = rad[0]\n    indre = rad[1]\n    if ytre not in d:\n        d[ytre] = {}\n    if indre not in d[ytre]:\n        d[ytre][indre] = 0\n    d[ytre][indre] = d[ytre][indre] + rad[2]\nprint(d)\n```",
      options: ["{'a': {'x': 5, 'y': 2}}", "{'a': {'x': 4, 'y': 2}}", "{'a': {'x': 1, 'y': 2}}", "{'a': {'x': 5}}"],
      explanation: "Den siste raden treffer en nøkkel som allerede finnes på begge nivåer, så verdien akkumuleres: 1 pluss 4. Med `=` i stedet for `+` ville svaret blitt 4.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nuke = {\"mandag\": {\"a\": 3, \"b\": 5}, \"tirsdag\": {\"a\": 7}, \"onsdag\": {\"b\": 2, \"c\": 4}}\nrunder = 0\nfor dag in uke:\n    for akt in uke[dag]:\n        runder = runder + 1\nprint(runder)\n```",
      options: ["5", "6", "3", "9"],
      explanation: "Antall runder er **summen** av størrelsene på de indre ordbøkene: 2 pluss 1 pluss 2. Det er ikke et produkt, siden de indre strukturene har ulik størrelse.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = 0\nfor i in range(4):\n    for j in range(i):\n        antall = antall + 1\nprint(antall)\n```",
      options: ["6", "10", "16", "4"],
      explanation: "Den indre løkka går 0, 1, 2 og 3 ganger — til sammen 6. `range(0)` gir null runder, og det er den delen folk glemmer.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nantall = 0\nfor i in range(3):\n    for j in range(4):\n        antall = antall + 1\nprint(antall)\n```",
      options: ["12", "7", "6", "9"],
      explanation: "Med **faste** grenser ganges antallet: tre ytre runder ganger fire indre. Med varierende grenser må rundene legges sammen i stedet.",
    },
    {
      question: "Hva skjer med `uke[\"tirsdag\"][\"yoga\"]` når tirsdag finnes, men yoga ikke gjør det?",
      options: ["Programmet stopper med `KeyError: 'yoga'` — indrenøkkelen mangler.", "Programmet gir `None`, siden Python vet at det indre nivået er tomt.", "Programmet gir `0`, siden tall er standardverdien i en nøstet ordbok.", "Programmet oppretter nøkkelen med en tom verdi og fortsetter."],
      explanation: "Begge nivåer kan mangle, og hver av dem stopper programmet for seg. En trygg oppslagsfunksjon sjekker begge, med ytternøkkelen først.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef hent(d, ytre, indre):\n    if ytre not in d:\n        return 0\n    if indre not in d[ytre]:\n        return 0\n    return d[ytre][indre]\n\nuke = {\"mandag\": {\"a\": 14}}\nprint(hent(uke, \"mandag\", \"a\"), hent(uke, \"mandag\", \"b\"), hent(uke, \"fredag\", \"a\"))\n```",
      options: ["14 0 0", "14 0 14", "0 0 0", "14 14 0"],
      explanation: "Begge de manglende oppslagene fanges av hver sin sjekk og gir `0`. Uten sjekkene ville programmet stoppet med `KeyError` på hvert av dem.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nuke = {\"mandag\": {\"a\": 3, \"b\": 5}, \"tirsdag\": {\"a\": 7}}\nut = {}\nfor dag in uke:\n    for akt in uke[dag]:\n        if akt not in ut:\n            ut[akt] = 0\n        ut[akt] = ut[akt] + uke[dag][akt]\nprint(ut)\n```",
      options: ["{'a': 10, 'b': 5}", "{'a': 7, 'b': 5}", "{'a': 3, 'b': 5}", "{'mandag': 8, 'tirsdag': 7}"],
      explanation: "Strukturen flates ut: dagene summeres bort, og resultatet er en **vanlig** ordbok fra aktivitet til totalt antall. Nøkkelen `a` finnes på begge dager.",
    },
    {
      question: "Hvor skal akkumulatoren stå hvis du skal ha én sum per indre liste?",
      options: ["Inne i den ytre løkka, slik at den nullstilles for hver indre liste.", "Utenfor begge løkkene, slik at den samler opp alle listene til én sum.", "Innerst i den indre løkka, slik at den oppdateres for hvert element.", "Etter begge løkkene, slik at den regnes ut når alt er gjennomgått."],
      explanation: "Tre plasseringer gir tre helt ulike svar. Å velge riktig er et selvstendig poeng i sjanger G — og å se hvilken koden har, er ofte hele sporingsoppgaven.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef alle_over(data, grense):\n    for rad in data:\n        s = 0\n        for x in rad:\n            s = s + x\n        if s <= grense:\n            return False\n    return True\n\ndata = [[3, 5, 2], [7, 1], [4, 4]]\nprint(alle_over(data, 5), alle_over(data, 8))\n```",
      options: ["True False", "False True", "True True", "False False"],
      explanation: "Summene er 10, 8 og 8. Alle er over 5, men ikke alle er over 8 — `8 <= 8` er sann. En «alle»-sjekk returnerer `False` inne i løkka og `True` etter.",
    },
    {
      question: "Når passer en nøstet liste bedre enn en nøstet ordbok?",
      options: ["Når posisjonen betyr noe — «rad 0 er spiller 1» — og inndelingene ikke har navn.", "Når det er flere enn ti elementer, siden ordbøker blir trege over den grensen.", "Når verdiene er tall, siden ordbøker bare kan holde tekster som verdier.", "Alltid — en nøstet ordbok kan ikke gås gjennom med en to nivåers løkke."],
      explanation: "Ordboka slås opp med navn og passer når inndelingene heter noe: «mandag», «spinning». Oppgaveteksten sier som regel hvilken av dem den vil ha.",
    },
  ],
  'in1000-8-2': [
    {
      question: "Hva er steg 1 i oppskriften for sjanger G?",
      options: ["Å skrive ned hva det ytre og det indre nivået er, og hva verdien er.", "Å velge om svaret skal bli en liste eller en ordbok, før du leser strukturen.", "Å telle hvor mange elementer strukturen har på hvert av de to nivåene.", "Å skrive løkkene først, og finne ut underveis hva variablene inneholder."],
      explanation: "«Ytre = dag, indre = aktivitet, verdi = antall.» Ti sekunder på kladden, og halvparten av fellene forsvinner — du blander ikke nivåene.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(y):\n    ut = []\n    for indre in y:\n        s = 0\n        for x in indre:\n            s = s + x\n        ut.append(s)\n    return ut\n\nprint(f([[1, 2], [3], [4, 5]]))\n```",
      options: ["[3, 3, 9]", "[3, 6, 15]", "[15]", "[1, 3, 4]"],
      explanation: "`s = 0` står inne i den ytre løkka og nullstilles per indre liste. Står den utenfor begge, blir svaret løpende summer: `[3, 6, 15]`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef f(y):\n    ut = []\n    s = 0\n    for indre in y:\n        for x in indre:\n            s = s + x\n        ut.append(s)\n    return ut\n\nprint(f([[1, 2], [3], [4, 5]]))\n```",
      options: ["[3, 6, 15]", "[3, 3, 9]", "[15, 15, 15]", "[1, 3, 4]"],
      explanation: "Her står `s = 0` utenfor begge løkkene og nullstilles aldri, så lista får løpende summer. Én linjes forskjell i innrykk gir et helt annet svar.",
    },
    {
      question: "En funksjon skal svare om aktiviteten finnes på ALLE dager. Hvordan står returene?",
      options: ["`return False` inne i løkka, `return True` etter den.", "`return True` inne i løkka, `return False` etter den.", "`return True` både inne i og etter løkka, med en `if` rundt begge.", "Bare `return True` etter løkka — det indre tilfellet trenger ingen retur."],
      explanation: "Å snu dem gjør at funksjonen svarer ja så snart aktiviteten finnes på **én** dag. Det er feilkode #7, for tidlig retur — og «finnes det …» er motsatt vei.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef alle(uke, akt):\n    for dag in uke:\n        if akt not in uke[dag]:\n            return False\n    return True\n\nuke = {\"mandag\": {\"yoga\": 9, \"spinning\": 14}, \"tirsdag\": {\"yoga\": 4}}\nprint(alle(uke, \"yoga\"), alle(uke, \"spinning\"), alle({}, \"yoga\"))\n```",
      options: ["True False True", "True False False", "False True True", "True True False"],
      explanation: "Yoga finnes begge dager, spinning bare mandag. En tom uke gir `True`: løkka går ingen runder, og koden faller til `return True`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef per_akt(uke):\n    ut = {}\n    for dag in uke:\n        for akt in uke[dag]:\n            ut[akt] = uke[dag][akt]\n    return ut\n\nuke = {\"mandag\": {\"yoga\": 9}, \"tirsdag\": {\"yoga\": 4}}\nprint(per_akt(uke))\n```",
      options: ["{'yoga': 4}", "{'yoga': 13}", "{'yoga': 9}", "{'mandag': 9, 'tirsdag': 4}"],
      explanation: "Linjen bruker `=` og overskriver, så verdien fra den **siste** dagen blir stående. Skal dagene summeres, trengs `if akt not in ut:` og `+`.",
    },
    {
      question: "Hva skiller grupperings-idiomet fra teller-idiomet i en nøstet struktur?",
      options: ["Startverdien er `[]` i stedet for `0`, og du bruker `.append(...)` i stedet for `+`.", "Grupperingen trenger bare én `if`-sjekk, mens telleren trenger to.", "Grupperingen virker bare på lister, mens telleren virker bare på ordbøker.", "Grupperingen bygger den ytre strukturen, mens telleren bygger den indre."],
      explanation: "De to `if`-sjekkene er nøyaktig de samme. To tegn skiller mønstrene, og resultatet er en ordbok fra nøkkel til liste i stedet for til tall.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef felles(d, a, b):\n    ut = []\n    for x in d[a]:\n        if x in d[b]:\n            ut.append(x)\n    return ut\n\nd = {\"Ada\": [\"Sjakk\", \"Kolonier\", \"Ordjakt\"], \"Nora\": [\"Kolonier\", \"Sjakk\"]}\nprint(felles(d, \"Ada\", \"Nora\"))\nprint(felles(d, \"Nora\", \"Ada\"))\n```",
      options: ["['Sjakk', 'Kolonier']\n['Kolonier', 'Sjakk']", "['Sjakk', 'Kolonier']\n['Sjakk', 'Kolonier']", "['Kolonier', 'Sjakk']\n['Sjakk', 'Kolonier']", "['Ordjakt']\n[]"],
      explanation: "Innholdet er det samme, men rekkefølgen følger den **første** lista. Det er verdt å vite når du skal spore en utskrift av resultatet.",
    },
    {
      question: "Hvorfor trenger «hvilke spill liker bare én av dem» to løkker?",
      options: ["Fordi én løkke bare finner det den første har alene — det den andre har alene, oversees.", "Fordi Python ikke kan sammenligne to lister i den samme løkka.", "Fordi den ene løkka må telle mens den andre bygger resultatlista.", "Fordi listene kan ha ulik lengde, og da må hver av dem gås gjennom for seg."],
      explanation: "Den første løkka går over `d[a]` og tar med det `d[b]` mangler; den andre går motsatt vei. Å glemme den andre er den vanligste feilen i mønsteret.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {\"a\": {\"x\": 1, \"y\": 2}, \"b\": {\"y\": 5}, \"c\": {}}\nytre = 0\nindre = 0\nfor k1 in d:\n    ytre = ytre + 1\n    for k2 in d[k1]:\n        indre = indre + 1\nprint(ytre, indre, len(d[\"c\"]))\n```",
      options: ["3 3 0", "3 4 0", "2 3 0", "3 3 1"],
      explanation: "Den tomme indre ordboka teller med i den ytre løkka, men gir null runder i den indre. En tom ordbok er en gyldig verdi, ikke en manglende nøkkel.",
    },
    {
      question: "Når holder det med én løkke i en funksjon over en nøstet struktur?",
      options: ["Når det indre nivået bare skal testes med `in` eller måles med `len`, ikke gås gjennom.", "Når den nøstede strukturen har færre enn tre elementer på det ytre nivået.", "Når svaret skal være et tall og ikke en liste eller en ordbok.", "Aldri — en nøstet struktur krever alltid to løkker."],
      explanation: "`if vare in d[butikk]:` og `if len(spiller) < minst:` er begge én-løkke-varianter. Å skrive to der én holder, er ikke galt — bare lengre og lettere å bomme på.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef lager(d, butikk, vare):\n    if butikk not in d:\n        return 0\n    if vare not in d[butikk]:\n        return 0\n    return d[butikk][vare]\n\ndef totalt(d, vare):\n    t = 0\n    for butikk in d:\n        t = t + lager(d, butikk, vare)\n    return t\n\nlagre = {\"A\": {\"skrue\": 120, \"bolt\": 45}, \"B\": {\"skrue\": 80}, \"C\": {\"bolt\": 10}}\nprint(totalt(lagre, \"skrue\"), totalt(lagre, \"bolt\"), totalt(lagre, \"mutter\"))\n```",
      options: ["200 55 0", "200 55 3", "120 45 0", "200 45 0"],
      explanation: "`totalt` gjenbruker `lager`, som gir 0 for butikker uten varen. Gjenbruken er et selvstendig poeng — oppgaveteksten legger ofte opp til den.",
    },
    {
      question: "Hva returnerer en «er alle …»-funksjon på en helt tom struktur?",
      options: ["`True` — løkka går ingen runder, og koden faller rett til `return True`.", "`False` — det finnes ingen elementer som oppfyller kravet.", "`None` — funksjonen rekker aldri fram til noen `return`-setning.", "En feilmelding, siden løkka ikke har noe å gå gjennom."],
      explanation: "Det er logisk riktig: «alle elementene oppfyller kravet» er sant når det ikke finnes noen. Men det kan overraske — skriv en kommentarlinje om valget.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef bygg(data):\n    d = {}\n    for rad in data:\n        if rad[0] not in d:\n            d[rad[0]] = {}\n        if rad[1] not in d[rad[0]]:\n            d[rad[0]][rad[1]] = []\n        d[rad[0]][rad[1]].append(rad[2])\n    return d\n\nprint(bygg([[\"m\", \"s\", \"Ada\"], [\"m\", \"s\", \"Nora\"], [\"m\", \"y\", \"Ada\"]]))\n```",
      options: ["{'m': {'s': ['Ada', 'Nora'], 'y': ['Ada']}}", "{'m': {'s': ['Nora'], 'y': ['Ada']}}", "{'m': {'s': 2, 'y': 1}}", "{'s': ['Ada', 'Nora'], 'y': ['Ada']}"],
      explanation: "Grupperingen bruker `[]` og `.append(...)`, så begge navnene under samme nøkkel kommer med. Første distraktor er svaret hvis lista opprettes på nytt hver runde.",
    },
    {
      question: "Hva må til for å snu nivåene i en nøstet ordbok — fra dag→sal til sal→dag?",
      options: ["En to nivåers løkke inn, og de samme to `if`-sjekkene ut, siden målstrukturen bygges fra bunnen.", "Bare å bytte om variabelnavnene i den eksisterende løkka, siden dataene alt finnes.", "Én løkke som setter `ut[sal] = nostet[dag]`, siden de indre ordbøkene kan gjenbrukes.", "Ingenting spesielt — Python har en innebygd måte å snu en ordbok på."],
      explanation: "At kildestrukturen finnes, hjelper ikke: målstrukturen starter tom, og begge nivåene i den må opprettes før du kan skrive i dem.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nsett = []\nnostet = {\"m\": {\"s\": [\"Ada\", \"Nora\"], \"y\": [\"Ada\"]}, \"t\": {\"s\": [\"Per\", \"Ada\"]}}\nfor dag in nostet:\n    for akt in nostet[dag]:\n        for navn in nostet[dag][akt]:\n            if navn not in sett:\n                sett.append(navn)\nprint(sett, len(sett))\n```",
      options: ["['Ada', 'Nora', 'Per'] 3", "['Ada', 'Nora', 'Ada', 'Per', 'Ada'] 5", "['Ada', 'Nora', 'Per'] 5", "['Per', 'Nora', 'Ada'] 3"],
      explanation: "Duplikat-mønsteret tar hvert navn med én gang, i den rekkefølgen de først dukket opp. Ada står fire steder, men telles én gang.",
    },
    {
      question: "En verdi i strukturen er allerede `True` eller `False`. Hva er den ryddigste måten å returnere den på?",
      options: ["`return d[a][b]` — verdien er allerede en sannhetsverdi, så en ekstra `if` er overflødig.", "`if d[a][b]: return True else: return False` — det er tydeligere hva som skjer.", "`return str(d[a][b])` — verdien må gjøres om til tekst før den returneres.", "`return d[a][b] == True` — sammenligningen sikrer at svaret får riktig type."],
      explanation: "Formen er kort og lesbar når verdien faktisk **er** en sannhetsverdi. Er den et tall, betyr `if tall:` «tallet er ikke null», og det er sjelden det du mente.",
    },
    {
      question: "Oppgave 5 ber deg om å bruke funksjonen fra a) i b). Hva bør du gjøre hvis a) ikke ble helt riktig?",
      options: ["Kalle den likevel — sensor vet hva den skulle gjøre, og b) rettes for seg.", "Skrive hele logikken fra a) på nytt inne i b), slik at b) ikke arver feilen.", "Hoppe over b), siden den bygger på noe som ikke virker.", "Rette a) først, uansett hvor lang tid det tar, før du begynner på b)."],
      explanation: "Gjenbruken er et selvstendig poeng, og deloppgavene rettes hver for seg. Det er den samme regelen som i den store oppgaven: stå aldri fast.",
    },
  ],
  'in1000-9-1': [
    {
      question: "Hvor mange poeng er hele settet verdt, og hvor lang tid har du?",
      options: ["100 poeng på fire timer, fordelt på fem oppgaver som alle skal besvares.", "60 poeng på tre timer, der den største oppgaven kan velges bort.", "100 poeng på fire timer, men bare de fire beste oppgavene teller.", "50 poeng på to timer, siden midtveiseksamen dekker resten av pensum."],
      explanation: "Emnet har ingen midtveiseksamen — dette ene settet avgjør hele karakteren. Poengfordelingen signaliserer vektingen mellom oppgavene.",
    },
    {
      question: "Hvor stor andel av poengene ligger i den store klassemodelleringen?",
      options: ["Rundt 46 av 100 — nesten halve settet, og den bør få rundt 100 minutter.", "Rundt 20 av 100, altså omtrent like mye som hver av de andre oppgavene.", "Rundt 70 av 100, slik at de fire andre til sammen er under en tredjedel.", "Det varierer helt fra sett til sett, så det er ingen grunn til å planlegge."],
      explanation: "Oppgave 1 og 2 er til sammen rundt 17 poeng; kodeskrivingen i Oppgave 3, 4 og 5 er rundt 83. Planlegg tiden etter poengene.",
    },
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\na = \"3\"\nb = \"4\"\nprint(a + b, int(a) + int(b))\n```",
      options: ["34 7", "7 7", "34 34", "3 4 7"],
      explanation: "Plusstegnet skjøter to tekster og legger sammen to tall. Fellen er #3, og den kommer i nesten hvert eneste sett.",
    },
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\ntall = [7, 2, 9, 4]\nny = []\nfor i in range(1, len(tall)):\n    ny.append(tall[i] - tall[i - 1])\nprint(ny, len(ny))\n```",
      options: ["[-5, 7, -5] 3", "[-5, 7, -5] 4", "[5, -7, 5] 3", "[-5, 7, -5, 0] 4"],
      explanation: "Løkka går over indeks 1, 2 og 3, så resultatlista blir én kortere enn den opprinnelige. Det er feilkode #5, av-med-én.",
    },
    {
      question: "Du står fast på deloppgave 4c. Hva er riktig å gjøre?",
      options: ["Hoppe til 4d — deloppgavene rettes hver for seg, og du kan bruke metoder oppgaveteksten beskriver.", "Bruke resten av tiden på 4c, siden de senere deloppgavene bygger på den.", "Levere blankt på hele Oppgave 4, siden en ufullstendig modell ikke gir uttelling.", "Begynne på Oppgave 5 og komme tilbake til hele Oppgave 4 helt til slutt."],
      explanation: "Delkarakter gis per deloppgave. Sier teksten at klassen har en bestemt metode, kan du kalle den i 4d selv om du ikke rakk å skrive den i 4c.",
    },
    {
      question: "Hva er den dyreste enkeltbeslutningen i Oppgave 4?",
      options: ["Å lagre rådata i samlingen i stedet for objektreferanser — det slår ut i fire deloppgaver samtidig.", "Å velge liste der oppgaven ba om ordbok, siden oppslag da blir umulig.", "Å glemme `fil.close()`, siden fila da holdes åpen resten av programmet.", "Å skrive alle klassene i samme fil i stedet for i hver sin fil."],
      explanation: "Lagrer du `d[tittel] = felt[1]`, kan biblioteket ikke lenger be en bok om noe. Da faller filinnlesingen, delegeringen, algoritmemetoden og utskriften.",
    },
    {
      question: "Eksamen er hjelpemiddelfri. Hva betyr det for hvordan du kontrollerer koden?",
      options: ["Den må leses, ikke kjøres — se etter `self._` overalt, sjekk før hvert oppslag, og `return` etter løkkene.", "Ingenting spesielt — sensor kjører koden og ser selv om den virker.", "Du bør skrive testkode i besvarelsen, slik at sensor kan kjøre den etterpå.", "Du bør skrive kortere kode, siden lang kode ikke rekkes å leses gjennom."],
      explanation: "De stumme feilene — feilkode #1 og #11 — finnes ikke ved å teste. Sett av de siste minuttene til å lese gjennom med konvensjonene i hodet.",
    },
    {
      question: "Hva er poenget med den «kalde banken» sist i dette kapitlet?",
      options: ["Å møte uvante domener uten hint, slik at du trener på å velge mønster selv.", "Å repetere de samme oppgavene en gang til, slik at svarene sitter utenat.", "Å gi ekstra poeng til den som rekker flere oppgaver enn selve settet.", "Å vise hvilke oppgavetyper som er for vanskelige til å komme på eksamen."],
      explanation: "Fasiten er en momentliste, ikke ferdig kode: du sjekker om løsningen din har med de riktige delene. Bruk banken etter at du har tatt hele settet minst én gang.",
    },
  ],
  'in1000-9-2': [
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\ntotal = 0\nfor i in range(5):\n    for j in range(i):\n        total = total + j\nprint(total)\n```",
      options: ["10", "6", "20", "4"],
      explanation: "Den indre løkka gir verdiene 0; 0,1; 0,1,2; 0,1,2,3 — summen er 0 pluss 1 pluss 3 pluss 6. Det er verdiene som legges sammen, ikke antall runder.",
    },
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\nd = {\"a\": [1, 2], \"b\": [3]}\nd[\"a\"].append(9)\nprint(d, len(d), len(d[\"a\"]))\n```",
      options: ["{'a': [1, 2, 9], 'b': [3]} 2 3", "{'a': [1, 2, 9], 'b': [3]} 3 3", "{'a': [1, 2], 'b': [3]} 2 2", "{'a': [1, 2, 9], 'b': [3]} 2 2"],
      explanation: "Verdien er en liste, og `append` endrer den på plass. `len(d)` teller nøklene, `len(d[\"a\"])` teller elementene i den ene lista.",
    },
    {
      question: "Hva er nytt i øvingseksamen 2 sammenlignet med sett 1?",
      options: ["En spørremetode til brukeren inne i den store oppgaven — sjanger H.", "En midtveisdel som teller halvparten av den samlede karakteren.", "En oppgave som ikke skal besvares, slik at du kan velge bort den vanskeligste.", "Et sett uten filinnlesing, slik at hele oppgave 4 kan skrives fra hukommelsen."],
      explanation: "Sjanger H står i halvparten av de moderne settene og ligger nesten alltid som en deloppgave i Oppgave 4. Emnet har ingen midtveiseksamen.",
    },
    {
      question: "Oppgave 2-nivå: hva skriver dette ut?\n\n```python\nclass M:\n    def __init__(self, n):\n        self._n = n\n        self._b = 0\n\n    def reg(self):\n        self._b = self._b + 1\n\n    def __str__(self):\n        return self._n + \":\" + str(self._b)\n\nada = M(\"Ada\")\na = ada\nada.reg()\na.reg()\nada = M(\"Ada2\")\nada.reg()\nprint(a, ada)\n```",
      options: ["Ada:2 Ada2:1", "Ada:3 Ada2:1", "Ada:2 Ada2:3", "Ada:1 Ada2:1"],
      explanation: "De to første kallene går på det samme objektet, siden `a = ada` ikke er en kopi. Rebindingen gir `ada` et nytt objekt, og det tredje kallet treffer bare det.",
    },
    {
      question: "Hvorfor må input-løkka være en `while` og ikke en `if`?",
      options: ["Fordi en `if` bare spør én gang til, og går videre med et ugyldig svar hvis brukeren bommer to ganger.", "Fordi `if` ikke kan inneholde et `input`-kall i Python.", "Fordi `while` skriver ut alternativene automatisk før hvert spørsmål.", "Fordi `if` alltid gjentar spørsmålet i det uendelige."],
      explanation: "Det er feilkode #9, den vanligste i sjanger H. Etter løkka vet du at svaret er gyldig, og oppslaget trenger derfor ingen ekstra `if`-sjekk.",
    },
    {
      question: "En klasse `Senter` skal både finne medlemmer på navn og finne saler på navn. Hva gjør du?",
      options: ["To ordbøker i konstruktøren, én for hver ting som skal slås opp.", "Én ordbok som holder både medlemmer og saler, med navnet som felles nøkkel.", "To lister, og en `finn`-metode som løper gjennom begge med en løkke.", "Én ordbok for medlemmene og en liste for salene, siden saler er færre."],
      explanation: "Å velge riktig samlingstype for **hver** ting er et selvstendig modelleringspoeng. En klasse kan godt ha to samlinger med hver sin type.",
    },
    {
      question: "Oppgave 3-nivå: hva skriver dette ut?\n\n```python\ndef snitt(tall):\n    if len(tall) == 0:\n        return 0\n    total = 0\n    for x in tall:\n        total = total + x\n    return total // len(tall)\n\nprint(snitt([4, 9, 2]), snitt([]), snitt([5]))\n```",
      options: ["5 0 5", "5.0 0 5.0", "5 0 0", "15 0 5"],
      explanation: "Heltallsdivisjonen `//` gir et helt tall. Sjekken på tom liste må stå **før** divisjonen — uten den stopper programmet med `ZeroDivisionError`.",
    },
    {
      question: "Hva bør du gjøre de siste 25 minuttene av et sett?",
      options: ["Lese gjennom med konvensjonene i hodet: `self._` overalt, sjekk før hvert oppslag, `return` etter løkkene.", "Skrive ferdig den deloppgaven du hoppet over, uansett hvor lang tid det tar.", "Legge til flere aksessorer og mutatorer, siden de alltid gir poeng.", "Skrive kommentarer over hver metode som forklarer hva den gjør."],
      explanation: "De stumme feilene — feilkode #1 og #11 — finnes ikke ved å teste, og eksamen er hjelpemiddelfri. Gjennomlesingen er den billigste kontrollen som finnes.",
    },
  ],
  'in1000-9-3': [
    {
      question: "Hva kreves for full uttelling på et «finn feilen»-spørsmål?",
      options: ["Et konkret moteksempel: ett kall som gir galt svar, og hva det riktige ville vært.", "En generell forklaring av hvorfor koden bryter med god programmeringsskikk.", "En omskriving av hele funksjonen, uten at feilen trenger å pekes på.", "En henvisning til hvilken feilkode i feilregisteret det dreier seg om."],
      explanation: "En ren verbal forklaring gir delvis uttelling. Sjanger I står i halvparten av de moderne settene, og bestillingen er alltid den samme.",
    },
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\nlinje = \"Dommen;44;5600\\n\"\nfelt = linje.split(\";\")\nprint(len(felt), felt[2] == \"5600\")\n```",
      options: ["3 False", "3 True", "2 False", "1 False"],
      explanation: "Uten `.rstrip()` henger linjeskiftet igjen i det **siste** feltet, så sammenligningen svarer usant. Det er feilkode #8 i sin stumme form.",
    },
    {
      question: "Oppgave 1-nivå: hva skriver dette ut?\n\n```python\nprint(7 // 2, 7 / 2, 7 % 2)\n```",
      options: ["3 3.5 1", "3.5 3.5 1", "3 3.5 3", "4 3.5 1"],
      explanation: "`//` gir heltallsdivisjon, `/` gir alltid desimaltall, og `%` gir resten. De tre forveksles lett under tidspress.",
    },
    {
      question: "Er `_episoder` del av grensesnittet til klassen `Podkast`?",
      options: ["Nei — grensesnittet er de offentlige metodene, med navn og parametere.", "Ja, fordi flere av metodene bygger på den.", "Ja, fordi den settes i konstruktøren og hører til objektet.", "Nei — men den blir det hvis den skrives uten understrek foran."],
      explanation: "Understrek-variabler er innside, også de en metode bygger på. Grensesnitt-spørsmålet er ett av de få rene teorispørsmålene på eksamen, og svaret er alltid det samme.",
    },
    {
      question: "Oppgave 5-nivå: hva skriver dette ut?\n\n```python\nd = {}\nfor rad in [[\"p1\", \"e1\", 100], [\"p2\", \"e1\", 200], [\"p1\", \"e2\", 50]]:\n    if rad[1] not in d:\n        d[rad[1]] = 0\n    d[rad[1]] = d[rad[1]] + rad[2]\nprint(d)\n```",
      options: ["{'e1': 300, 'e2': 50}", "{'e1': 200, 'e2': 50}", "{'p1': 150, 'p2': 200}", "{'e1': 100, 'e2': 50}"],
      explanation: "Samme episodetittel finnes under to podkaster, og verdiene akkumuleres. Med `=` i stedet for `+` ville e1 fått 200 — den siste verdien.",
    },
    {
      question: "En funksjon skal svare om ALLE podkaster har minst én episode over grensen. Hva trengs?",
      options: ["Et flagg som nullstilles **inne i den ytre løkka**, og en sjekk av flagget etter den indre.", "Ett `return True` inne i den indre løkka, og `return False` etter den ytre.", "En teller som summerer alle episodene og sammenlignes med grensen til slutt.", "Bare én løkke, siden det indre nivået kan sjekkes med `in`."],
      explanation: "Et `return True` inne i den indre løkka svarer ja så snart **én** podkast har én episode over grensen. Det er feilkode #7, for tidlig retur.",
    },
    {
      question: "En podkast skal lese sin egen fil, navngitt etter podkasten. Hvordan bygges filnavnet?",
      options: ["`open(self._navn + \".txt\")` inne i metoden — filnavnet bygges av instansvariabelen.", "`open(navn)` der `navn` sendes inn som parameter til metoden hver gang.", "`open(self._navn.txt)` — punktumet knytter filendelsen til variabelen.", "`open(self, \".txt\")` — `open` tar objektet og endelsen hver for seg."],
      explanation: "Formen `navn + \".txt\"` er en gjenganger i settene: hvert objekt har sin egen fil. Punktumet må skrives inn selv, ellers stopper programmet med `FileNotFoundError`.",
    },
    {
      question: "En abonnentmetode skal gjenta spørsmålet til navnet IKKE allerede er tatt. Hvordan står betingelsen?",
      options: ["`while navn in self._abonnenter:` — det er navn som allerede finnes, som er ugyldige.", "`while navn not in self._abonnenter:` — løkka skal gå til navnet finnes.", "`if navn in self._abonnenter:` — det holder å spørre én gang til.", "`while len(self._abonnenter) > 0:` — løkka skal gå så lenge det finnes abonnenter."],
      explanation: "Retningen på betingelsen snus i forhold til den vanlige «velg fra lista»-varianten, og det er den vanligste feilen her. Og `if` i stedet for `while` er feilkode #9.",
    },
  ],
};

export default quizData_in1000;
