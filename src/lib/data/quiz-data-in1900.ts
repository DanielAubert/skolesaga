import type { QuizQuestion } from './quiz-data';

const quizData_in1900: Record<string, QuizQuestion[]> = {
  'in1900-0-1': [
    {
      question: "Hvordan er vektingen mellom de to eksamenene i IN1900?",
      options: ["Midtveis teller 25 % og den avsluttende 75 %", "Midtveis teller 40 % og den avsluttende 60 %", "Midtveis teller 50 % og den avsluttende 50 %", "Midtveis teller 20 % og den avsluttende 80 %"],
      explanation: "Midtveiseksamen i oktober gir maks 25 poeng og teller 25 %; den avsluttende i desember gir maks 75 poeng og teller 75 %. De to summerer til 100. Alternativ b) er forvekslet med fordelingen mellom flervalg og kodeskriving samlet sett, som er omtrent 40 mot 60.",
    },
    {
      question: "Hvilken form har midtveiseksamen?",
      options: ["20 flervalgsspørsmål, ingen kodeskriving", "20 kodeskrivingsoppgaver, ingen flervalg", "Halvparten flervalg og halvparten kodeskriving", "En muntlig prøve med noen kodespørsmål"],
      explanation: "Midtveiseksamen er 100 % flervalg: 20 spørsmål til maks 25 poeng, hvorav 4–5 er matche-tabeller. Innholdet er nesten utelukkende kodesporing, indeksering, boolske uttrykk og feilhåndtering. Det er derfor Del 1 i boka er den lengste delen.",
    },
    {
      question: "Hva skal du gjøre med den siste nummererte «oppgaven» på den avsluttende eksamenen?",
      options: ["Ingenting — der legger sensor inn midtveispoengene dine", "Besvare den først, siden den ofte er verdt flest poeng av alle", "Besvare den bare hvis du har god tid til overs helt til slutt", "Krysse av for at du har lest den, ellers trekkes det poeng"],
      explanation: "Den siste posten — gjerne nummer 15, 16 eller 17 — er ikke en oppgave, men feltet der midtveispoengene dine legges inn slik at de to eksamenene summerer til 100. Alle de tre andre alternativene ville kostet deg tid uten å gi et eneste poeng.",
    },
    {
      question: "Du er usikker på et flervalgsspørsmål og har ett minutt igjen. Hva lønner seg?",
      options: ["Å gjette — blankt og feil gir begge null poeng", "Å la det stå blankt — feil svar gir minuspoeng", "Å la det stå blankt — blankt gir et halvt poeng", "Å gjette bare hvis du kan utelukke tre alternativer"],
      explanation: "Fra 2024/2025 er ordningen med minuspoeng fjernet, og blankt og feil gir likt: null. Å gjette er derfor gratis. Alternativ b) beskriver den gamle ordningen fra tiden før 2019, og d) gjør et gratis valg unødvendig strengt.",
    },
    {
      question: "Hvilke fem temaer har forekommet i **hvert eneste** av de åtte avsluttende settene 2018–2025?",
      options: ["Kodesporing, klasser, ODE-løsere, rekke-implementering og fillesing", "Kodesporing, plotting, testfunksjoner, numerisk derivasjon og fillesing", "Klasser, plotting, todimensjonale tabeller, rekker og feilhåndtering", "ODE-løsere, differenslikninger, feilhåndtering, plotting og integrasjon"],
      explanation: "De fem med 8 av 8 er kodesporing, klasser med spesialmetoder, ODE-løsere, rekke-implementering og fillesing til ordbok. Plotting og testfunksjon ligger på 7 av 8, feilhåndtering og differenslikninger på 6 av 8, og numerisk integrasjon på 1 av 8 — de hører derfor ikke hjemme i toppsjiktet.",
    },
    {
      question: "Hvor stor andel av poengene på den **avsluttende** eksamenen er fritekst-kodeskriving?",
      options: ["Om lag 75–85 %", "Om lag 40–50 %", "Om lag 25–35 %", "Om lag 95–100 %"],
      explanation: "Flervalgsskallet på de 4–7 første oppgavene utgjør 15–25 % av de 75 poengene; resten er kodeskriving. Alternativ b) forveksler dette med den samlede fordelingen når begge eksamenene regnes med, og d) glemmer at flervalgsskallet finnes også på den avsluttende.",
    },
    {
      question: "Hva sier de offisielle løsningsforslagene om kode som er delvis riktig?",
      options: ["Riktig overordnet struktur gir god uttelling, selv med indeksfeil", "Bare kode som kjører helt uten feilmelding, gir noen som helst poeng", "Delvis riktig kode gir poeng bare når feilen er kommentert i koden", "Poengene gis etter hvor mange linjer som er identiske med fasit"],
      explanation: "Løsningsforslagene sier eksplisitt at god uttelling gis til løsninger som får den overordnede strukturen riktig, og at å få alle indekser hundre prosent riktig er nesten umulig under tidspress. De sier også at fasitens kode bare er ett eksempel på en løsning som ville fått full score — flere løsninger er like gode.",
    },
    {
      question: "Hvilken av disse vanene gir **ingen** uttelling på eksamen?",
      options: ["Å pakke løsningen inn i et eget hovedprogram nederst i besvarelsen", "Å ta med `import numpy as np` når oppgaven ber om kjørbar kode", "Å dokumentere en rimelig antakelse i én kommentarlinje", "Å skrive en kort funksjon som returnerer i stedet for å skrive ut"],
      explanation: "Sensor forventer korte løsninger uten hovedprogram, ekstra utskrift eller overflødige kommentarer. De tre andre alternativene er derimot uttrykkelig ønsket: nødvendige `import`-linjer skal med, antakelser skal dokumenteres i kommentar, og kort kode som returnerer, er nettopp stilen fasit bruker.",
    },
    {
      question: "Hva gjelder for rekursjon — at en funksjon kaller seg selv — i dette emnet?",
      options: ["Det er utenfor pensum og markeres som uønsket i fasit", "Det er pensum, men gir bare halv uttelling", "Det er pensum, og forventes brukt på rekurrente rekker", "Det er utenfor pensum, men gir full uttelling hvis koden virker"],
      explanation: "Rekursjon er utenfor pensum, og løsningsforslagene markerer det eksplisitt som uønsket. Rekurrente rekker — der neste ledd regnes ut fra det forrige — løses alltid med løkke som tar vare på de siste verdiene. Alternativ c) er nettopp fellen: den typen oppgave frister til rekursjon.",
    },
    {
      question: "Hva er en «matche-tabell» («match the values») på eksamen?",
      options: ["En tabell der hver rad pares med ett alternativ, 0,5 poeng per rad", "En tabell du selv skal fylle ut med utregnede tall i et fritekstfelt", "En tabell der du velger ett samlet svar som gjelder for alle radene", "En tabell foran settet som viser hvilke poeng hver oppgave gir"],
      explanation: "Matche-tabellen har flere rader — typisk uttrykk, kall eller løkker — som hver skal pares med ett alternativ fra en felles liste. Radene rettes hver for seg til 0,5 poeng, opptil 3,5 poeng. Derfor skal du aldri la en hel tabell stå tom fordi én rad er vanskelig.",
    },
    {
      question: "Hvorfor holder midtveiseksamen seg til kjernen av grunnleggende Python?",
      options: ["Fordi samme sett brukes i emnene IN-KJM1900 og IN-GEO1900", "Fordi den holdes så tidlig at bare de første forelesningene er pensum", "Fordi den rettes automatisk og derfor ikke kan teste kode i det hele tatt", "Fordi den bare teller 25 % og derfor gjøres enklere med vilje"],
      explanation: "Midtveissettet deles med parallellemnene, og må derfor holde seg til det som er felles pensum i alle tre emnene. Alternativ c) er feil på et vesentlig punkt: en flervalgseksamen tester kode hele veien — den tester bare **lesing** av kode i stedet for skriving.",
    },
    {
      question: "Hva er tidsanslagene i kapitteloverskriftene i denne boka?",
      options: ["Lesetid — regn halvannen gang så lang tid hvis du koder underveis", "Total arbeidstid, medregnet all oppgaveløsing og all egen koding", "Tiden en tilsvarende oppgave erfaringsmessig tar på selve eksamen", "Anbefalt arbeidstid per uke for hver enkelt del av boka"],
      explanation: "Anslagene gjelder lesing av kjernestoffet, og begrepsbankene er ikke regnet med. Skriver du koden selv underveis — og det bør du — tar det rundt halvannen gang så lang tid. Hele boka er 1 985 minutter lesetid, altså omtrent 33 timer, som blir rundt 50 timer med egen koding.",
    },
  ],
  'in1900-1-1': [
    {
      question: "Hva skriver `print(7 // 2, 7 % 2)` ut?",
      options: ["`3 1`", "`3.5 1`", "`4 1`", "`3 0`"],
      explanation: "`7 // 2` er heltallsdivisjon og gir `3`; `7 % 2` er resten og gir `1`. `print` setter ett mellomrom mellom argumentene. Alternativet `3.5 1` er fellen der `//` forveksles med `/`, og `4 1` er fellen der man runder av i stedet for å kutte nedover.",
    },
    {
      question: "Hva skriver `print(-7 // 2)` ut?",
      options: ["`-4`", "`-3`", "`-3.5`", "`4`"],
      explanation: "Heltallsdivisjon runder **nedover** (mot minus uendelig), og nedover fra $-3{,}5$ er $-4$. Alternativet `-3` er den vanligste feilen — det ville vært svaret hvis `//` kuttet mot null slik `int()` gjør. `-3.5` er svaret på `-7 / 2`.",
    },
    {
      question: "Hva skriver `print(2 ** 3 ** 2)` ut?",
      options: ["`512`", "`64`", "`128`", "`36`"],
      explanation: "`**` er høyre-assosiativ, så uttrykket er $2^{(3^2)} = 2^9 = 512$. Alternativet `64` er $(2^3)^2$ og er svaret hvis man regner fra venstre. `36` er $6^2$, altså det man får hvis man ganger eksponentene sammen.",
    },
    {
      question: "Hva skriver `print(-2 ** 2)` ut?",
      options: ["`-4`", "`4`", "`-2`", "`2`"],
      explanation: "`**` binder sterkere enn det unære minuset, så `2 ** 2` regnes først og fortegnet snus etterpå. Alternativet `4` er svaret på `(-2) ** 2` og er fellen: parentesen mangler i det opprinnelige uttrykket.",
    },
    {
      question: "Hva skriver `print(6 / 3)` ut?",
      options: ["`2.0`", "`2`", "`2.00`", "`3.0`"],
      explanation: "`/` gir **alltid** flyttall, også når divisjonen går opp, og et flyttall med verdien 2 skrives `2.0`. Alternativet `2` er fellen: tallverdien er riktig, men utskriften er feil, og i kodesporing teller tegnene. Python skriver aldri to desimaler av seg selv.",
    },
    {
      question: "Hva skriver `print(12 / 3 * 2)` ut?",
      options: ["`8.0`", "`2.0`", "`8`", "`2`"],
      explanation: "`/` og `*` er på samme presedensnivå og tas fra venstre: `12 / 3` er `4.0`, og `4.0 * 2` er `8.0`. Alternativet `2.0` er svaret hvis man regner `12 / (3 * 2)`, og `8` mangler desimalpunktet som `/` alltid gir.",
    },
    {
      question: "Hva skriver `print(6 + 4 * 2)` ut?",
      options: ["`14`", "`20`", "`16`", "`12`"],
      explanation: "Multiplikasjon før addisjon: `4 * 2` er `8`, og `6 + 8` er `14`. Alternativet `20` er svaret på `(6 + 4) * 2` og er fellen for den som regner fra venstre uten å se på presedensen.",
    },
    {
      question: "Hva skriver `print(10 // 3 ** 2)` ut?",
      options: ["`1`", "`9`", "`1.0`", "`0`"],
      explanation: "`**` binder sterkest: `3 ** 2` er `9`, og `10 // 9` er `1`. Alternativet `9` er svaret hvis man regner `(10 // 3) ** 2`, altså `3 ** 2`. Begge operandene er heltall, så svaret er et heltall og skrives uten desimalpunkt.",
    },
    {
      question: "Hva skriver `print(10 / 3 // 2)` ut?",
      options: ["`1.0`", "`1`", "`1.6666666666666667`", "`2.0`"],
      explanation: "`/` og `//` er på samme nivå og tas fra venstre: `10 / 3` er `3.3333333333333335`, og `3.3333333333333335 // 2` er `1.0`. Svaret er et flyttall fordi `/` allerede har gjort det til det — derfor er `1` feil selv om tallverdien stemmer.",
    },
    {
      question: "Med `t = 5`: hva skriver `print(0 < t < 10)` ut?",
      options: ["`True`", "`False`", "`5`", "Programmet stopper med en feilmelding"],
      explanation: "Python tillater kjedet sammenligning, og `0 < 5 < 10` betyr `0 < 5 and 5 < 10` — begge er sanne. Kjeding er lovlig i Python (til forskjell fra mange andre språk), så alternativet om feilmelding er fellen for den som tror uttrykket må deles i to.",
    },
    {
      question: "Med `t = 5`: hva skriver `print(t > 3 and t % 2 == 0)` ut?",
      options: ["`False`", "`True`", "`1`", "`None`"],
      explanation: "`5 > 3` er sann, men `5 % 2` er `1`, så `t % 2 == 0` er falsk, og `and` krever at begge er sanne. Alternativet `True` er fellen for den som stopper etter den første sammenligningen.",
    },
    {
      question: "Med `t = 5`: hva skriver `print(not t > 3 or t == 5)` ut?",
      options: ["`True`", "`False`", "`5`", "`None`"],
      explanation: "`not` binder svakere enn `>`, så uttrykket er `(not (5 > 3)) or (5 == 5)`, altså `False or True`, som er sann. Alternativet `False` er fellen for den som lar `not` gjelde hele uttrykket i stedet for bare den første sammenligningen.",
    },
    {
      question: "Hva skriver `print(bool(-1))` ut?",
      options: ["`True`", "`False`", "`-1`", "`0`"],
      explanation: "Bare **tallet 0** er falskt blant tallene; negative tall er sanne. Alternativet `False` er fellen for den som tenker at negativt betyr «nei». De falske verdiene er `0`, den tomme strengen, den tomme lista og den tomme ordboka.",
    },
    {
      question: "Hva skriver `print(int(-2.7), round(-2.7))` ut?",
      options: ["`-2 -3`", "`-3 -3`", "`-2 -2`", "`-3 -2`"],
      explanation: "`int` **kutter** desimalene mot null og gir `-2`; `round` går til nærmeste heltall og gir `-3`. Alternativene der de to er like, er fellen: `int` og `round` gir samme svar på positive tall som ligger under halve, men aldri automatisk samme svar på negative.",
    },
    {
      question: "Hva skriver `print(round(0.5), round(1.5), round(2.5))` ut?",
      options: ["`0 2 2`", "`1 2 3`", "`0 1 2`", "`1 2 2`"],
      explanation: "Står tallet midt imellom, runder Python til nærmeste **partall** (bankers avrunding): `0.5` til `0`, `1.5` til `2` og `2.5` til `2`. Alternativet `1 2 3` er skoleavrunding «halve oppover», og `0 1 2` er `int`-oppførsel, altså kutting.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\ns = 7\ns *= 3\ns %= 4\nprint(s)\n```",
      options: ["`1`", "`5`", "`3`", "`21`"],
      explanation: "`s *= 3` gjør `s` til `21`, og `s %= 4` gjør `s` til resten av `21 / 4`, altså `1`. Alternativet `5` er `21 // 4` og er fellen der `%` forveksles med `//`; `21` er svaret hvis man glemmer den siste linja.",
    },
    {
      question: "Hva skriver `print(0.1 + 0.2 == 0.3)` ut?",
      options: ["`False`", "`True`", "`0.3`", "`0.30000000000000004`"],
      explanation: "Flyttall er tilnærminger, og `0.1 + 0.2` blir `0.30000000000000004`, som ikke er eksakt lik `0.3`. Alternativet `True` er det matematisk «riktige» svaret, men ikke Pythons — og det er nettopp derfor testfunksjoner sammenligner med en toleranse i stedet for med `==`.",
    },
    {
      question: "Hva skriver `print(4 == 4.0)` ut?",
      options: ["`True`", "`False`", "`4`", "`4.0`"],
      explanation: "`==` sammenligner **verdi**, ikke datatype, og heltallet 4 har samme verdi som flyttallet 4.0. Alternativet `False` er fellen for den som blander sammen `==` (verdi) og `is` (samme objekt); typene er faktisk ulike, men det spør ikke `==` om.",
    },
    {
      question: "Hva skriver `print(82.0 // 4)` ut?",
      options: ["`20.0`", "`20`", "`20.5`", "`21.0`"],
      explanation: "Heltallsdivisjon runder nedover, men **beholder flyttallstypen** når en av operandene er et flyttall — derfor `20.0` og ikke `20`. Alternativet `20.5` er svaret på `82.0 / 4`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nprint(3, 4)\nprint('3' + '4')\n```\n\n(Linjeskift er skrevet som `/` i alternativene.)",
      options: ["`3 4` / `34`", "`34` / `7`", "`3 4` / `7`", "`3, 4` / `34`"],
      explanation: "`print(3, 4)` skiller argumentene med ett mellomrom og gir `3 4`; `'3' + '4'` skjøter to strenger og gir `34`. Alternativet med `7` er fellen der tegnene `'3'` og `'4'` forveksles med tallene, og alternativet med komma er fellen der man tror `print` skriver kommaet sitt.",
    },
    {
      question: "Med `n = -13`: hva skriver `print(n // 4, n % 4)` ut?",
      options: ["`-4 3`", "`-3 -1`", "`-4 -1`", "`-3 3`"],
      explanation: "`-13 // 4` runder nedover fra $-3{,}25$ og gir `-4`; resten må da oppfylle `-4 * 4 + r = -13`, altså `r = 3`. Alternativet `-3 -1` er svaret man får hvis man kutter mot null og lar resten arve fortegnet fra `-13` — det er den vanligste feilen på negative tall.",
    },
    {
      question: "Hvilken av disse setningene er den riktige beskrivelsen av `x = x + 1` i Python?",
      options: ["Regn ut den gamle verdien av `x` pluss 1, og la `x` peke på resultatet", "En likning som ikke har noen løsning, så Python gir en feilmelding", "En sammenligning som gir `False` fordi `x` ikke er lik `x + 1`", "En setning som virker bare hvis `x` ikke har fått en verdi tidligere"],
      explanation: "Likhetstegnet i Python er en **tilordning**, ikke en likning: høyresiden regnes ut først, og deretter peker navnet på resultatet. Alternativene om feilmelding og sammenligning er fellen der `=` blandes med `==`; og setningen krever tvert imot at `x` har en verdi fra før, ellers finnes det ingen gammel verdi å legge 1 til.",
    },
    {
      question: "Hvorfor bør du unngå å kalle en variabel `sum`?",
      options: ["Fordi navnet da skygger for Pythons innebygde `sum`, som ikke lenger kan brukes", "Fordi Python nekter å kjøre programmet og gir en feilmelding med en gang", "Fordi navnet bare kan inneholde bokstavene i det engelske alfabetet", "Fordi variabelnavn i Python må være minst fire tegn lange"],
      explanation: "`sum = 0` er lovlig, men navnet peker nå på et tall, og et senere `sum(verdier)` gir en feilmelding om at et heltall ikke kan kalles. Python nekter altså ikke å kjøre koden — det er nettopp det som gjør fellen farlig, for feilen dukker opp langt fra der den ble laget. Regelen om at navnet bare kan inneholde bokstavene i det engelske alfabetet, og kravet om minst fire tegn, er begge oppdiktede.",
    },
    {
      question: "Hva er forskjellen mellom `int(x)` og `x // 1` når `x` er et negativt flyttall?",
      options: ["`int` kutter mot null, mens `//` runder nedover, så de gir ulikt svar", "De gir alltid samme svar, men `int` gir heltall og `//` gir flyttall", "`int` runder til nærmeste partall, mens `//` runder til nærmeste heltall", "`int` virker ikke på negative tall og stopper programmet"],
      explanation: "For `x = -2.7` gir `int(x)` verdien `-2` (kutter mot null), mens `x // 1` gir `-3.0` (runder nedover). Alternativet om samme svar gjelder bare positive tall. Bankers avrunding hører til `round`, ikke `int`, og `int` virker helt fint på negative tall.",
    },
  ],
  'in1900-1-2': [
    {
      question: "Med `x = [5, 8, 2, 9, 4]`: hva skriver `print(x[2])` ut?",
      options: ["`2`", "`8`", "`[2]`", "`9`"],
      explanation: "Indeksene starter på 0, så `x[2]` er det **tredje** elementet, altså `2`. Alternativet `8` er fellen der man teller fra 1. Alternativet `[2]` er svaret på `x[2:3]` — indeksering gir element, ikke liste.",
    },
    {
      question: "Med `x = [5, 8, 2, 9, 4]`: hva skriver `print(x[-2])` ut?",
      options: ["`9`", "`4`", "`8`", "`2`"],
      explanation: "`x[-1]` er siste element (`4`), så `x[-2]` er nest siste, altså `9`. Alternativet `4` er fellen der `-2` leses som «det siste», og `8` er fellen der man begynner å telle bakover fra `-0`.",
    },
    {
      question: "Med `x = [5, 8, 2, 9, 4]`: hva skriver `print(x[1:3])` ut?",
      options: ["`[8, 2]`", "`[8, 2, 9]`", "`[5, 8, 2]`", "`[8]`"],
      explanation: "Utsnittet starter på plass 1 og stopper **før** plass 3, så det har `3 - 1 = 2` elementer. Alternativet `[8, 2, 9]` er fellen der slutten leses som inklusiv, og `[5, 8, 2]` er fellen der man teller plassene fra 1.",
    },
    {
      question: "Med `x = [5, 8, 2, 9, 4]`: hva skriver `print(x[2], x[2:3])` ut?",
      options: ["`2 [2]`", "`2 2`", "`[2] [2]`", "`2 [2, 9]`"],
      explanation: "Indeksering gir elementet `2`, slicing gir lista `[2]` — samme verdi, ulik type og ulik utskrift. Alternativet `2 2` er hovedfellen (#18): utsnittet beholder hakeparentesene. `[2, 9]` ville krevd `x[2:4]`.",
    },
    {
      question: "Med `x = [5, 8, 2, 9, 4]`: hva skriver `print(x[3:99])` ut?",
      options: ["`[9, 4]`", "Programmet stopper med `IndexError`", "`[]`", "`[9, 4, 99]`"],
      explanation: "Et utsnitt utenfor lista gir bare det som finnes — slicing feiler aldri. Alternativet med `IndexError` er fellen: det er bare **indeksering** som kan gi den feilen. Den tomme lista ville vært svaret hvis startplassen også lå utenfor, som i `x[9:12]`.",
    },
    {
      question: "Hva skriver `print([1, 2] + [3, 4])` ut?",
      options: ["`[1, 2, 3, 4]`", "`[4, 6]`", "`[1, 2][3, 4]`", "`10`"],
      explanation: "`+` på lister **skjøter dem sammen** til én liste med fire elementer. Alternativet `[4, 6]` er den elementvise summen, som du først får med NumPy-arrays — det er feilkode #5 og en av de vanligste kodesporingsfellene i faget. `10` ville vært summen av alle tallene.",
    },
    {
      question: "Hva skriver `print([0] * 3)` ut?",
      options: ["`[0, 0, 0]`", "`[0, 3]`", "`0`", "`[[0], [0], [0]]`"],
      explanation: "`*` gjentar innholdet i lista, så `[0] * 3` gir tre nuller i én liste. Alternativet `[[0], [0], [0]]` er fellen der man tror hele lista gjentas som elementer, og `0` er svaret hvis man tror `*` ganger tallene.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = [1, 2]\ny = x\ny.append(3)\nprint(x)\n```",
      options: ["`[1, 2, 3]`", "`[1, 2]`", "`[3]`", "`None`"],
      explanation: "`y = x` gir et nytt **navn** på den samme lista, ikke en kopi, så endringen gjennom `y` er synlig gjennom `x`. Alternativet `[1, 2]` er fellen (#23) — det ville vært riktig bare hvis linja hadde vært `y = x[:]`. `None` er svaret man ville fått ved å skrive ut resultatet av `append`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = [1, 2]\nx = x.append(3)\nprint(x)\n```",
      options: ["`None`", "`[1, 2, 3]`", "`[1, 2]`", "`3`"],
      explanation: "`append` endrer lista på plass og **returnerer ingenting**, så tilordningen gjør `x` lik `None`. Alternativet `[1, 2, 3]` er fellen: lista *ble* utvidet, men `x` peker ikke lenger på den. Riktig skrivemåte er `x.append(3)` uten tilordning.",
    },
    {
      question: "Med `y = [[9, 8], [7, 6, 5], [2]]`: hva skriver `print(y[1][2])` ut?",
      options: ["`5`", "`6`", "`7`", "`[5]`"],
      explanation: "Les fra venstre: `y[1]` er `[7, 6, 5]`, og element `2` i den er `5`. Alternativet `6` er fellen der man teller de indre plassene fra 1, og `7` er svaret hvis man leser indeksene i motsatt rekkefølge.",
    },
    {
      question: "Med `y = [[9, 8], [7, 6, 5], [2]]`: hva skriver `print(len(y))` ut?",
      options: ["`3`", "`6`", "`2`", "`9`"],
      explanation: "`len` på den ytre lista teller de indre **listene**, ikke tallene i dem, og det er tre av dem. Alternativet `6` er antall tall til sammen og er fellen; `2` er lengden av den første indre lista.",
    },
    {
      question: "Med `x = [4, 1, 3]` og `y = [[9, 8], [7, 6, 5], [2]]`: hva skriver `print(y[x[1]])` ut?",
      options: ["`[7, 6, 5]`", "`[9, 8]`", "`7`", "`[2]`"],
      explanation: "Innerst først: `x[1]` er `1`, og `y[1]` er hele den indre lista `[7, 6, 5]`. Alternativet `7` er fellen der man tror uttrykket også plukker ut et element, og `[9, 8]` er svaret hvis man bruker `x[0]` i stedet.",
    },
    {
      question: "Hva skriver `print(list(range(4)))` ut?",
      options: ["`[0, 1, 2, 3]`", "`[0, 1, 2, 3, 4]`", "`[1, 2, 3, 4]`", "`[4]`"],
      explanation: "`range(4)` er kortformen for `range(0, 4)` og gir fire verdier, fra og med 0 til men ikke med 4. Alternativet `[0, 1, 2, 3, 4]` er av-én-feilen (#1) — den hyppigste feilen i faget — og `[1, 2, 3, 4]` er fellen der man tror tellingen starter på 1.",
    },
    {
      question: "Hva skriver `print(range(4))` ut?",
      options: ["`range(0, 4)`", "`[0, 1, 2, 3]`", "`0 1 2 3`", "`4`"],
      explanation: "`range` er en oppskrift, ikke en liste, og skriver seg ut som `range(0, 4)`. Vil du se tallene, må du skrive `print(list(range(4)))` — det er alternativet `[0, 1, 2, 3]`, som er den vanligste feilen her.",
    },
    {
      question: "Hva skriver `print(list(range(2, 7)))` ut?",
      options: ["`[2, 3, 4, 5, 6]`", "`[2, 3, 4, 5, 6, 7]`", "`[3, 4, 5, 6, 7]`", "`[2, 7]`"],
      explanation: "`range(2, 7)` gir `7 - 2 = 5` verdier, fra og med 2 til men ikke med 7. Alternativet med 7 inkludert er av-én-feilen (#1), og `[3, 4, 5, 6, 7]` er fellen der man tror starten også er eksklusiv.",
    },
    {
      question: "Hva skriver `print([3*e for e in range(4)])` ut?",
      options: ["`[0, 3, 6, 9]`", "`[3, 6, 9, 12]`", "`[0, 3, 6, 9, 12]`", "`[3, 3, 3, 3]`"],
      explanation: "Tallrekka er `0, 1, 2, 3`, og hvert tall ganges med 3. Alternativet `[3, 6, 9, 12]` er fellen der man starter rekka på 1, og `[0, 3, 6, 9, 12]` er av-én-feilen der `4` blir med i rekka.",
    },
    {
      question: "Med `x = [5, 8, 2]`: hva skriver `print(sum(x), max(x))` ut?",
      options: ["`15 8`", "`15, 8`", "`8 15`", "`15 2`"],
      explanation: "`sum` gir `5 + 8 + 2 = 15` og `max` gir det største elementet, `8`; `print` skiller de to med **ett mellomrom**. Alternativet med komma er fellen der man tror `print` skriver ut kommaet fra koden — det gjør den aldri.",
    },
    {
      question: "Med `x = [5, 8, 2]`: hva skriver `print(x[::-1])` ut?",
      options: ["`[2, 8, 5]`", "`[5, 8, 2]`", "`[2]`", "`2`"],
      explanation: "Negativt steg snur retningen, så utsnittet gir hele lista baklengs. Alternativet `[5, 8, 2]` er fellen der man tror `-1` bare betyr «siste element», og `[2]` er svaret på `x[-1:]`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nrader = [[1, 2], [3, 4]]\nrader[0].append(9)\nprint(rader)\n```",
      options: ["`[[1, 2, 9], [3, 4]]`", "`[[1, 2], [3, 4], 9]`", "`[[1, 2], [3, 4], [9]]`", "`[[9, 1, 2], [3, 4]]`"],
      explanation: "`rader[0]` er den indre lista `[1, 2]`, og `append` legger `9` til på slutten av **den**. De to andre listene der `9` havner ytterst, er svaret på `rader.append(9)` og `rader.append([9])` — det er nettopp den forskjellen oppgaven tester.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = [1, 2, 3]\ny = x[:]\ny[0] = 99\nprint(x, y)\n```",
      options: ["`[1, 2, 3] [99, 2, 3]`", "`[99, 2, 3] [99, 2, 3]`", "`[1, 2, 3] [1, 2, 3]`", "`[99, 2, 3] [1, 2, 3]`"],
      explanation: "`x[:]` lager en **ny** liste, så endringen i `y` rører ikke `x`. Alternativet der begge er endret, er svaret hvis linja hadde vært `y = x` (aliasing, #23) — det er hele forskjellen mellom kopi og nytt navn.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = [1, 2, 3]\ny = x\nprint(x is y, x == [1, 2, 3])\n```",
      options: ["`True True`", "`False True`", "`True False`", "`False False`"],
      explanation: "`x is y` er sant fordi de to navnene peker på samme liste, og `x == [1, 2, 3]` er sant fordi innholdet er likt. Alternativet `False True` er fellen der man tror `is` sammenligner innhold — det gjør `==`; `is` spør om det er samme objekt (#22).",
    },
    {
      question: "Hva er den presise forskjellen mellom `x[2]` og `x[2:3]`?",
      options: ["`x[2]` gir elementet på plass 2, mens `x[2:3]` gir en liste med det samme elementet", "De gir alltid akkurat det samme, men `x[2:3]` er tregere å regne ut", "`x[2]` gir elementet på plass 3, mens `x[2:3]` gir elementene på plass 2 og 3", "`x[2]` virker bare på tall-lister, mens `x[2:3]` virker på alle lister"],
      explanation: "Indeksering gir **element**, slicing gir **liste** — samme verdi inni, men ulik type og ulik utskrift, og bare den første kan brukes i et regnestykke. Alternativet om at de er like, er hovedfellen #18. Indeksene er dessuten 0-baserte, så `x[2]` er tredje element, og `x[2:3]` har bare **ett** element fordi slutten er eksklusiv.",
    },
    {
      question: "Hvorfor gir `x[9:12]` ingen feilmelding på en liste med fem elementer?",
      options: ["Fordi slicing aldri feiler — den gir bare det som finnes, her den tomme lista", "Fordi Python automatisk utvider lista til tolv elementer med nuller", "Fordi feilmeldingen først kommer når du prøver å skrive ut resultatet", "Fordi negative grenser er tillatt, og 9 tolkes som `-9`"],
      explanation: "Slicing klipper mot listas faktiske grenser og gir den tomme lista når hele utsnittet ligger utenfor; bare **indeksering** kan gi `IndexError`. Python utvider aldri en liste av seg selv, og resultatet skrives helt fint ut som `[]`.",
    },
    {
      question: "Du skal lage en uavhengig kopi av lista `verdier`. Hvilken linje gjør det?",
      options: ["`kopi = verdier[:]`", "`kopi = verdier`", "`kopi = verdier[0:]`, men bare hvis lista er tom", "`kopi = verdier.append()`"],
      explanation: "`verdier[:]` er et utsnitt av hele lista, og et utsnitt er alltid en ny liste. `kopi = verdier` gir bare et nytt navn på den samme lista (#23). `verdier[0:]` er faktisk også en full kopi, men forbeholdet om tom liste gjør alternativet galt. Og `append` legger til et element — den kopierer ingenting.",
    },
  ],
  'in1900-1-3': [
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(1, 4):\n    for j in range(i):\n        print(i*j, end=' ')\n```",
      options: ["`0 0 2 0 3 6 `", "`1 2 4 3 6 9 `", "`0 2 0 3 6 `", "`0 1 2 3 4 6 `"],
      explanation: "For `i = 1` gir `range(1)` én runde med `j = 0`; for `i = 2` to runder (`0`, `2`); for `i = 3` tre runder (`0`, `3`, `6`) — til sammen seks tall, hver etterfulgt av et mellomrom. Alternativet som starter på `1`, er fellen der man tror `range(i)` starter på 1; alternativet med fem tall glemmer at også `i = 1` gir én runde.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\ns = 0\nfor i in range(4):\n    s += i\nprint(i, s)\n```",
      options: ["`3 6`", "`4 10`", "`4 6`", "`3 10`"],
      explanation: "`range(4)` gir verdiene 0, 1, 2, 3, så summen er 6 og siste verdi av `i` er 3. Alternativene med `4` er av-én-feilen (#1) — `4` er stoppverdien og blir aldri tildelt — og `10` er summen hvis 4 hadde vært med.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(5, 0, -2):\n    print(i, end=' ')\n```",
      options: ["`5 3 1 `", "`5 3 1 -1 `", "`4 2 0 `", "`5 4 3 2 1 `"],
      explanation: "Rekka starter på 5 og går nedover med 2: 5, 3, 1. Neste verdi ville vært `-1`, men `stop` er 0 og eksklusiv i den retningen løkka går, så rekka stopper. Alternativet med `-1` er fellen der man tror bare `0` hoppes over, og `5 4 3 2 1` er svaret hvis steget hadde vært `-1`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(0, 5, -1):\n    print('a')\nprint('b')\n```",
      options: ["`b`", "`a` / `b`", "Programmet stopper med en feilmelding", "`a` fem ganger, deretter `b`"],
      explanation: "Negativt steg med `start` mindre enn `stop` gir en **tom** tallrekke, så løkkekroppen kjøres null ganger — men det er ingen feil, og linja etter løkka kjøres normalt. Alternativet om feilmelding er fellen: Python protesterer aldri mot en tom `range`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\na = [1, 2, 3, 4]\nb = [10, 20]\nfor x, y in zip(a, b):\n    print(x + y, end=' ')\n```",
      options: ["`11 22 `", "`11 22 3 4 `", "`11 22 30 40 `", "Programmet stopper med en feilmelding"],
      explanation: "`zip` stopper ved den **korteste** sekvensen, så det blir bare to runder, og `3` og `4` blir aldri sett. Alternativet `11 22 3 4` er fellen der man tror `zip` fyller ut med noe; alternativet om feilmelding er fellen der man tror Python krever like lange lister (#17).",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i, v in enumerate([7, 8]):\n    print(i, v, end=' ')\n```",
      options: ["`0 7 1 8 `", "`7 0 8 1 `", "`1 7 2 8 `", "`0 1 7 8 `"],
      explanation: "`enumerate` gir paret `(indeks, verdi)` i den rekkefølgen, og indeksen starter på 0. Alternativet `7 0 8 1` er fellen der rekkefølgen byttes om, og `1 7 2 8` er fellen der man tror indekseringen starter på 1 (#17).",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nn = 10\nwhile n > 1:\n    n = n // 2\n    print(n, end=' ')\n```",
      options: ["`5 2 1 `", "`10 5 2 1 `", "`5 2 `", "`5 2 1 0 `"],
      explanation: "`print` står **etter** oppdateringen, så det er de nye verdiene som skrives: 5, 2, 1. Alternativet `10 5 2 1` er fellen der man skriver ut startverdien også, og `5 2 1 0` er fellen der man tror løkka kjører én runde til — men `1 > 1` er falsk.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nn = 100\nantall = 0\nwhile n > 1:\n    n = n // 3\n    antall += 1\nprint(antall, n)\n```",
      options: ["`4 1`", "`5 0`", "`4 0`", "`3 3`"],
      explanation: "Verdiene blir 100, 33, 11, 3, 1 — altså fire oppdateringer, og løkka stopper når `n` er 1. Alternativene med `0` er fellen der man tror løkka fortsetter til `n` er null; det ville krevd betingelsen `n > 0`, som her ville gitt en uendelig løkke fordi `0 // 3` er `0`.",
    },
    {
      question: "Terminerer denne løkken?\n\n```python\nn = 9\nwhile n != 1:\n    n = n - 3\n```",
      options: ["Nei — verdiene blir 9, 6, 3, 0, -3, … og treffer aldri 1 nøyaktig", "Ja — den stopper når `n` blir 1 etter tre runder", "Ja — den stopper når `n` blir negativ", "Nei — fordi `n` vokser og aldri kan bli 1"],
      explanation: "Med `!=` i betingelsen må verdien treffe grensen **eksakt**, og fra 9 gir steg på 3 verdiene 9, 6, 3, 0, -3 — 1 hoppes over. Startverdien 10 ville gitt 10, 7, 4, 1 og altså terminering, så det er ikke løkka i seg selv som er gal. `n` vokser dessuten ikke; den faller, men i feil «fase», og negative verdier stopper ingenting.",
    },
    {
      question: "Terminerer denne løkken?\n\n```python\nn = 5\nwhile n > 0:\n    n = n + 1\n```",
      options: ["Nei — `n` vokser, så betingelsen blir aldri falsk", "Ja — den stopper når `n` når heltallets øvre grense", "Ja — etter fem runder, når `n` har passert 10", "Nei — men bare fordi startverdien er et oddetall"],
      explanation: "Betingelsen krever at `n` blir mindre enn eller lik 0, men kroppen øker `n`, så løkka går for alltid. Heltall i Python har ingen øvre grense, så den stopper ikke av seg selv, og startverdien har ingenting å si — enhver positiv start gir samme resultat.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(6):\n    if i == 2:\n        continue\n    if i == 4:\n        break\n    print(i, end=' ')\n```",
      options: ["`0 1 3 `", "`0 1 2 3 `", "`0 1 3 5 `", "`0 1 3 4 `"],
      explanation: "`continue` hopper over utskriften for `i = 2`, og `break` avslutter hele løkka når `i` er 4, så `4` og `5` blir aldri skrevet. Alternativet med `5` er fellen der `break` forveksles med `continue`, og alternativet med `2` er fellen der `continue` overses.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(3):\n    for j in range(2):\n        print(i, j, end='; ')\n```",
      options: ["`0 0; 0 1; 1 0; 1 1; 2 0; 2 1; `", "`0 0; 1 1; 2 0; `", "`0 0; 1 0; 2 0; 0 1; 1 1; 2 1; `", "`0 0; 0 1; 1 0; 1 1; `"],
      explanation: "Den indre løkka kjøres helt ferdig for hver runde i den ytre, så `j` går 0, 1 for hver `i` — til sammen $3 \\cdot 2 = 6$ par. Alternativet der `j` varierer langsomst, er fellen der man bytter om hvilken løkke som er innerst, og alternativet med fire par mister den siste ytre runden.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(3):\n    for j in range(i):\n        print(j, end='')\n    print('.', end='')\n```",
      options: ["`.0.01.`", "`0.01.012.`", "`.0.1.`", "`0.1.2.`"],
      explanation: "For `i = 0` gir `range(0)` **null** runder, så første tegn er punktumet. Deretter `0.` og `01.`. Alternativet `0.01.012.` er fellen der man tror `range(i)` gir `i+1` runder, altså at også den første ytre runden skriver et tall (#12).",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor i in range(3):\n    s = 0\n    s += i\n    print(s, end=' ')\n```",
      options: ["`0 1 2 `", "`0 1 3 `", "`0 0 0 `", "`3 3 3 `"],
      explanation: "`s = 0` står **inne** i løkka, så akkumulatoren nullstilles hver runde og hver utskrift blir bare det aktuelle leddet. Alternativet `0 1 3 ` er svaret hvis `s = 0` hadde stått før løkka — det er nettopp forskjellen oppgaven tester.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor grad in [12, 15, 9]:\n    total = grad * 2\nprint(total)\n```",
      options: ["`18`", "`24` / `30` / `18`", "`24`", "`72`"],
      explanation: "`print` er ikke rykket inn og kjøres derfor **én** gang, etter løkka, med den siste verdien `total` fikk — altså `9 * 2`. Alternativet med tre linjer er svaret hvis `print` hadde stått inne i løkka, og `72` er summen av alle tre.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nx = [4, 7, 1]\nfor i in range(len(x)):\n    print(i, x[i], end=' | ')\n```",
      options: ["`0 4 | 1 7 | 2 1 | `", "`1 4 | 2 7 | 3 1 | `", "`4 0 | 7 1 | 1 2 | `", "`0 4 | 1 7 | 2 1 | 3 `"],
      explanation: "`range(len(x))` gir plassnumrene 0, 1, 2, og `x[i]` henter elementet på hver plass. Alternativet som starter på `1`, er fellen der man tror indekseringen starter på 1; alternativet med `3` til slutt er av-én-feilen der `len(x)` selv blir en gyldig indeks (#1).",
    },
    {
      question: "Hvor mange ganger kjøres den innerste linja?\n\n```python\nfor i in range(1, 5):\n    for j in range(i):\n        print(i*j)\n```",
      options: ["10 ganger — `range(i)` gir 1, 2, 3 og 4 runder for de fire verdiene av `i`", "16 ganger — fire ytre runder ganger fire indre runder hver", "6 ganger — summen av 1, 2 og 3, altså uten den siste ytre runden", "4 ganger — én indre runde per ytre runde"],
      explanation: "`i` går 1, 2, 3, 4, og antall indre runder er `i` for hver av dem: 1 + 2 + 3 + 4 = 10. Alternativet «16» er fellen der man ganger antallet ytre runder med den største indre grensen. Alternativet «6» er av-én-feilen (#1) der `range(1, 5)` leses som om det stopper på 3, og «4» er fellen der man glemmer at den indre løkka gjentas.",
    },
    {
      question: "Hva er antall **punkter** når du deler intervallet fra 0 til 1 i `N` like steg?",
      options: ["`N + 1` — begge endepunktene er med", "`N` — ett punkt per steg", "`N - 1` — endepunktene teller ikke med", "`2N` — ett punkt på hver side av hvert steg"],
      explanation: "`N` steg gir `N + 1` punkter, akkurat som tre skritt gir fire fotavtrykk når du teller det du startet på. Alternativet `N` er feilkode #1 — den hyppigste feilen i faget — og den gir `range(N)` der `range(N+1)` var riktig, slik at siste punkt mangler.",
    },
    {
      question: "Hvorfor skal startverdien til en akkumulator (`s = 0`) stå før løkka og ikke inne i den?",
      options: ["Fordi den ellers nullstilles hver runde, slik at `s` bare inneholder det siste leddet", "Fordi Python gir en feilmelding hvis en tilordning står inne i en løkke", "Fordi løkkevariabelen ellers ikke kan brukes i kroppen", "Fordi `+=` bare virker på variabler som er laget utenfor løkker"],
      explanation: "Akkumulatoren skal huske det som er lagt til så langt, og en tilordning inne i løkka sletter hukommelsen ved hver runde. Programmet gir ingen feilmelding — det er derfor feilen er så vanlig, og derfor den brukes som plantet feil i «finn feilen»-oppgaver. `+=` virker like godt på variabler laget hvor som helst.",
    },
    {
      question: "Hva gjør `break` i en nøstet løkke?",
      options: ["Avbryter bare den innerste løkka den står i; den ytre fortsetter", "Avbryter alle løkkene og går rett til linja etter den ytterste", "Hopper til neste runde i den innerste løkka", "Avbryter programmet helt"],
      explanation: "`break` gjelder den løkka den står direkte inne i, så en ytre løkke fortsetter med neste runde. Alternativet om at alle løkkene avbrytes, er en vanlig og kostbar antakelse i kodesporing; å hoppe til neste runde er `continue`; og programmet avsluttes ikke.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom `for e in x` og `for i in range(len(x))`?",
      options: ["Den første gir deg elementene, den andre gir deg plassnumrene", "Den første virker bare på tall-lister, den andre på alle lister", "Den andre kjører én runde mer enn den første", "Den første kan ikke brukes på nøstede lister"],
      explanation: "`for e in x` binder `e` til elementet, mens `for i in range(len(x))` binder `i` til indeksen, og da må du skrive `x[i]` for å få verdien. Begge kjører like mange runder, begge virker på alle lister, og elementformen fungerer også fint på nøstede lister — da er `e` selv en liste.",
    },
    {
      question: "Hva skjer hvis `continue` står før oppdateringen av tellevariabelen i en `while`-løkke?",
      options: ["Oppdateringen hoppes over, og løkka kan bli uendelig", "Python flytter automatisk oppdateringen opp før `continue`", "Løkka avsluttes, akkurat som med `break`", "Ingenting — `continue` påvirker bare `for`-løkker"],
      explanation: "`continue` hopper over resten av kroppen, altså også oppdateringen, og da er betingelsen uendret ved neste sjekk — en klassisk uendelig løkke. Python omorganiserer aldri koden din, `continue` avslutter ikke løkka slik `break` gjør, og den virker i begge løkketyper.",
    },
  ],
  'in1900-1-4': [
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfor k in range(3):\n    print(k, end=' ')\n```\n\n(Linjeskift er skrevet som `/` i alternativene.)",
      options: ["`0 1 2`", "`0 / 1 / 2`", "`012`", "`0 1 2 3`"],
      explanation: "`end=' '` erstatter linjeskiftet med et mellomrom, så alle tre tallene havner på **samme** linje. Alternativet med linjeskift er standardoppførselen uten `end`, og `012` ville krevd `end=''` (#16).",
    },
    {
      question: "Hva skriver `print(f'{3.14159:.2f}')` ut?",
      options: ["`3.14`", "`3.142`", "`3.1416`", "`3`"],
      explanation: "`.2f` gir nøyaktig to desimaler, avrundet. Alternativet `3.142` er `.3f`, og `3.1416` er `.4f` — antallet etter punktet i formatangivelsen er antall desimaler, ikke antall siffer i alt.",
    },
    {
      question: "Hva skriver `print(f'{3.14159:8.3f}|')` ut?",
      options: ["`   3.142|`", "`3.142|`", "`3.14159|`", "`    3.142|`"],
      explanation: "`3.142` er fem tegn, og bredde 8 fyller ut med tre mellomrom **foran** tallet. Alternativet uten mellomrom er fellen der bredden overses (#16); alternativet med fire mellomrom ville gitt bredde 9. Loddstreken er der for å gjøre mellomrommene synlige.",
    },
    {
      question: "Hva skriver `print(f'{7:3d}|')` ut?",
      options: ["`  7|`", "`7  |`", "`007|`", "`7|`"],
      explanation: "`d` er heltallsformatet, og bredde 3 høyrejusterer tallet med to mellomrom foran. Alternativet `7  |` er venstrejustering, som er standard for **strenger** men ikke for tall, og `007|` ville krevd formatet `03d`.",
    },
    {
      question: "Hva skriver `print('a', 'b')` ut?",
      options: ["`a b`", "`ab`", "`a, b`", "`'a' 'b'`"],
      explanation: "`print` skiller argumentene sine med **ett mellomrom** som standard. Alternativet `ab` krever `sep=''`, `a, b` er fellen der man tror kommaet i koden blir skrevet ut, og fnuttene finnes bare i koden — aldri i utskriften av en streng.",
    },
    {
      question: "Hva skriver `print(1, 2, 3, sep=';')` ut?",
      options: ["`1;2;3`", "`1;2;3;`", "`1 2 3`", "`;1;2;3`"],
      explanation: "`sep` er det som skrives **mellom** argumentene, så det blir to semikolon for tre tall. Alternativene med semikolon i endene er fellen der `sep` forveksles med `end`; `1 2 3` er standardoppførselen.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nprint('sol')\nprint(['sol', 'regn'])\n```\n\n(Linjeskift er skrevet som `/` i alternativene.)",
      options: ["`sol` / `['sol', 'regn']`", "`sol` / `[sol, regn]`", "`'sol'` / `['sol', 'regn']`", "`sol` / `sol regn`"],
      explanation: "En streng skrives **uten** fnutter, men strenger **inne i en liste** vises med fnutter, fordi Python bruker kodeformen på elementer i en samling. Alternativet `[sol, regn]` er den vanligste feilen her, og `'sol'` med fnutter på første linje er den motsatte feilen.",
    },
    {
      question: "Hva skriver `print('a;b;c'.split(';'))` ut?",
      options: ["`['a', 'b', 'c']`", "`['a;b;c']`", "`a b c`", "`['a', ';', 'b', ';', 'c']`"],
      explanation: "`split(';')` deler på semikolonet og gir en liste med tre delstrenger; separatoren selv blir ikke med. Alternativet `['a;b;c']` er hva du får med bar `split()` på denne strengen, altså feilkode #8.",
    },
    {
      question: "Hva skriver `print('a b  c'.split())` ut?",
      options: ["`['a', 'b', 'c']`", "`['a', 'b', '', 'c']`", "`['a b  c']`", "`['a', ' ', 'b', '  ', 'c']`"],
      explanation: "Uten argument deler `split` på **vilkårlig** blanktegn, så to mellomrom regnes som én skillelinje og gir ingen tom delstreng. Alternativet med den tomme strengen er hva du ville fått med `split(' ')`, som deler på nøyaktig ett mellomrom av gangen.",
    },
    {
      question: "Hva skriver `print('  4.0 \\n'.strip() + '|')` ut?",
      options: ["`4.0|`", "`  4.0 |`", "`4.0 |`", "`  4.0|`"],
      explanation: "`.strip()` fjerner alle blanktegn i **begge** ender, altså både mellomrommene og linjeskiftet. Alternativene som beholder mellomrom, er fellen der man tror `.strip()` bare fjerner linjeskiftet eller bare virker på én side (#7).",
    },
    {
      question: "Hva skriver `print('-'.join(['sol', 'regn']))` ut?",
      options: ["`sol-regn`", "`-sol-regn`", "`sol-regn-`", "`solregn`"],
      explanation: "Separatoren settes **mellom** elementene, så det blir én bindestrek for to elementer. Alternativene med bindestrek i endene er fellen der man tror separatoren settes foran eller bak hvert element.",
    },
    {
      question: "Med `navn = 'Blindern'`: hva skriver `print('ind' in navn, 'blind' in navn)` ut?",
      options: ["`True False`", "`True True`", "`False False`", "`False True`"],
      explanation: "På strenger er `in` en delstreng-test, og `ind` finnes i `Blindern`. Men testen skiller mellom store og små bokstaver, så `blind` med liten b finnes ikke. Alternativet `True True` er fellen der man glemmer at store bokstaver teller.",
    },
    {
      question: "Med `navn = 'Blindern'`: hva skriver `print(navn[1:4], navn[-1])` ut?",
      options: ["`lin n`", "`lind n`", "`Bli n`", "`lin B`"],
      explanation: "Utsnittet `[1:4]` gir tegnene på plass 1, 2 og 3 — tre tegn, siden slutten er eksklusiv — og `[-1]` gir siste tegn. Alternativet `lind` er av-én-feilen der plass 4 blir med, og `Bli` er fellen der man teller plassene fra 1.",
    },
    {
      question: "Hva skriver `print('12,5'.replace(',', '.'))` ut?",
      options: ["`12.5`", "`12,5`", "`1.2.5`", "`125`"],
      explanation: "`.replace` bytter ut alle forekomster av det første argumentet med det andre og gir en ny streng. Alternativet `12,5` er fellen der man tror `.replace` endrer strengen på plass — den er immutabel, men her tas resultatet imot av `print`, så byttet vises.",
    },
    {
      question: "Med `linje = 'a;b'`: hva skriver `print(len(linje.split(';')), len(linje))` ut?",
      options: ["`2 3`", "`3 2`", "`2 2`", "`3 3`"],
      explanation: "`split(';')` gir to delstrenger, mens strengen selv har tre **tegn** (`a`, `;`, `b`). Alternativet `3 2` er fellen der de to `len`-kallene byttes om — de teller to helt ulike ting: elementer i en liste, og tegn i en streng.",
    },
    {
      question: "Hva skriver `print(f'{\"sum\":8s}|')` ut?",
      options: ["`sum     |`", "`     sum|`", "`sum|`", "`  sum   |`"],
      explanation: "Strenger **venstrejusteres** i et bredt felt, så de fem utfyllingstegnene kommer etter teksten. Alternativet med mellomrommene foran er høyrejustering, som er standard for **tall** — den motsatte regelen, og en fast felle i tabellutskrifter.",
    },
    {
      question: "Hva skriver `print(f'{17.25:.1f}')` ut?",
      options: ["`17.2`", "`17.3`", "`17.25`", "`17`"],
      explanation: "Står tallet midt imellom, runder Python til nærmeste **partall**, så `17.25` med én desimal blir `17.2`. Alternativet `17.3` er skoleavrundingen «halve oppover», og den er den vanligste feilen her — den samme regelen gjelder for `round`.",
    },
    {
      question: "Hva skriver `print(len('a\\tb'))` ut?",
      options: ["`3`", "`4`", "`2`", "`5`"],
      explanation: "`\\t` er **ett** tegn i verdien (en tabulator), selv om det skrives med to tegn i koden, så strengen har tre tegn. Alternativet `4` er fellen der man teller backslash og `t` hver for seg.",
    },
    {
      question: "Med `x = 3`: hva skriver `print(f'{x} + 1 er {x + 1}')` ut?",
      options: ["`3 + 1 er 4`", "`x + 1 er x + 1`", "`3 + 1 er 3 + 1`", "`4 + 1 er 4`"],
      explanation: "Alt som står i krøllparentes i en f-streng blir regnet ut og satt inn; alt utenfor er vanlig tekst. Alternativene der uttrykkene ikke regnes ut, er fellen der f-en foran fnutten overses — uten den ville teksten blitt skrevet ordrett.",
    },
    {
      question: "Hvorfor gjør ikke linja `linje.strip()` alene noen forskjell?",
      options: ["Fordi strenger er immutable, så metoden returnerer en ny streng som må tas imot", "Fordi `.strip()` bare virker på strenger som er lest fra fil", "Fordi `.strip()` må ha et argument som sier hva som skal fjernes", "Fordi `.strip()` bare fjerner linjeskift, og linja har ingen"],
      explanation: "Strenger kan ikke endres, så metoden lager en ny streng — og kaster du den, har ingenting skjedd. Riktig form er `linje = linje.strip()`. `.strip()` virker på alle strenger, trenger ikke argument, og fjerner alle blanktegn i begge ender, ikke bare linjeskift.",
    },
  ],
  'in1900-1-5': [
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'x': 1, 'y': 2}\nd['x'] = d['x'] + d['y']\nprint(d)\n```",
      options: ["`{'x': 3, 'y': 2}`", "`{'x': 1, 'y': 2}`", "`{'x': 3, 'y': 3}`", "`{'x': 1, 'y': 3}`"],
      explanation: "Høyresiden regnes ut først: `1 + 2` er 3, og `'x'` får den nye verdien. `'y'` røres ikke. Alternativ b) er svaret om du tror linja bare leser verdiene, og c)/d) er svarene om du tror tilordningen treffer feil nøkkel. Python skriver ordboka med krøllparenteser, kolon og mellomrom.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'b': 2, 'a': 1, 'c': 3}\nfor k in d:\n    print(k, end=' ')\n```",
      options: ["`b a c ` (med mellomrom til slutt, alt på én linje)", "`a b c ` (med mellomrom til slutt, alt på én linje)", "`2 1 3 ` (med mellomrom til slutt, alt på én linje)", "`b a c` (med linjeskift mellom hver bokstav)"],
      explanation: "En `for`-løkke rett på en ordbok går over **nøklene**, i innsettingsrekkefølge — altså `b`, `a`, `c`, ikke alfabetisk. Alternativ c) er fellen der løkkevariabelen forveksles med verdien, og d) glemmer at `end=' '` erstatter linjeskiftet med et mellomrom.",
    },
    {
      question: "Hva skriver `print(list(d.values()))` ut når `d = {'b': 2, 'a': 1, 'c': 3}`?",
      options: ["`[2, 1, 3]`", "`[1, 2, 3]`", "`[3, 2, 1]`", "`['b', 'a', 'c']`"],
      explanation: "`.values()` gir verdiene i innsettingsrekkefølge, og `list` gjør dem om til en vanlig liste. Alternativ b) sorterer, som en ordbok aldri gjør av seg selv, c) snur rekkefølgen, og d) er det `list(d.keys())` ville gitt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'sol': 3, 'vind': 16}\nfor k, v in d.items():\n    print(k, v)\n```",
      options: ["`sol 3` på første linje og `vind 16` på andre", "`3 sol` på første linje og `16 vind` på andre", "`sol vind` på første linje og `3 16` på andre", "`('sol', 3)` på første linje og `('vind', 16)` på andre"],
      explanation: "`.items()` gir paret nøkkel først, verdi etterpå, og `print` med to argumenter setter ett mellomrom mellom dem. Alternativ b) snur paret, c) er det to separate løkker ville gitt, og d) er formen du får om du skriver `print(par)` uten å pakke ut.",
    },
    {
      question: "Hva skriver `print(3 in d, 'sol' in d)` ut når `d = {'sol': 3, 'vind': 16}`?",
      options: ["`False True`", "`True True`", "`True False`", "`False False`"],
      explanation: "`in` på en ordbok ser **bare** på nøklene. Tallet 3 er en verdi og gir derfor `False`, mens `'sol'` er en nøkkel og gir `True`. Alternativ b) er svaret om du tror `in` også leter i verdiene — vil du det, må du skrive `3 in d.values()`.",
    },
    {
      question: "Hva skjer når siste linje kjøres?\n\n```python\nd = {'x': 1}\nprint(d['z'])\n```",
      options: ["Programmet stopper med feilen `KeyError: 'z'`", "Programmet skriver `None` og fortsetter videre", "Programmet skriver `0` og fortsetter videre", "Programmet lager nøkkelen `'z'` med verdien `None`"],
      explanation: "Oppslag på en nøkkel som ikke finnes, gir alltid `KeyError` med nøkkelen i meldingen, og programmet stopper. Alternativ b) beskriver `d.get('z')`, som gir `None` uten å stoppe. Alternativ c) og d) er ren ønsketenkning: et oppslag legger aldri til noe.",
    },
    {
      question: "Hva skriver `print(d.get('mai', 0.0), d.get('juni', 0.0))` ut når `d = {'mai': 12.4}`?",
      options: ["`12.4 0.0`", "`12.4 None`", "`12.4 0`", "`None 0.0`"],
      explanation: "`.get` gir verdien når nøkkelen finnes, og standardverdien når den mangler — her `0.0`, som skrives med desimalpunkt fordi den er et flyttall. Alternativ b) er svaret om du glemmer at standardverdien er oppgitt, og c) skriver den som heltall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'mai': 12.4}\nprint(d.get('juni'))\nprint(d)\n```",
      options: ["`None` på første linje og `{'mai': 12.4}` på andre", "`None` på første linje og `{'mai': 12.4, 'juni': None}` på andre", "`0` på første linje og `{'mai': 12.4}` på andre", "Programmet stopper med `KeyError` før noe skrives ut"],
      explanation: "Uten andre argument gir `.get` verdien `None` når nøkkelen mangler, og den **endrer ikke** ordboka. Alternativ b) er fellen der man tror `.get` setter inn nøkkelen, og d) forveksler `.get` med vanlig oppslag i hakeparentes.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nnavn = ['a', 'b', 'c', 'd']\ntall = [10, 20]\nprint(dict(zip(navn, tall)))\n```",
      options: ["`{'a': 10, 'b': 20}`", "`{'a': 10, 'b': 20, 'c': None, 'd': None}`", "`{'a': 10, 'b': 20, 'c': 0, 'd': 0}`", "`{10: 'a', 20: 'b'}`"],
      explanation: "`zip` stopper ved den korteste sekvensen, så bare to par lages og `'c'`/`'d'` forsvinner uten advarsel (felle #17). Alternativ b) og c) er fellen der man tror `zip` fyller ut, og d) bytter om hva som blir nøkkel — rekkefølgen på argumentene avgjør det.",
    },
    {
      question: "Hva skriver `print(d, len(d))` ut når `d = {'p': 1, 'q': 2, 'p': 9}`?",
      options: ["`{'p': 9, 'q': 2} 2`", "`{'p': 1, 'q': 2} 2`", "`{'p': 1, 'q': 2, 'p': 9} 3`", "`{'q': 2, 'p': 9} 2`"],
      explanation: "Nøkler er unike: den siste `'p'` overskriver den første, så verdien blir 9 — men **plassen** beholdes fra første gang nøkkelen ble satt inn. Alternativ b) lar den første vinne, c) tror en nøkkel kan stå to ganger, og d) flytter `'p'` bakerst.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndata = {'nord': {'u1': 2, 'u2': 4, 'u3': 6}, 'sor': {'u1': 8}}\nprint(len(data), len(data['nord']))\n```",
      options: ["`2 3`", "`3 2`", "`2 4`", "`4 2`"],
      explanation: "`len` teller alltid parene på det nivået du peker på: to stasjoner ytterst, tre uker inne i `'nord'`. Alternativ b) bytter om nivåene, og c)/d) teller alle tallene i hele strukturen. Å blande nivåene er felle #20.",
    },
    {
      question: "Hva skjer når siste linje kjøres?\n\n```python\ndata = {'a': {'x': 1}}\ndata['b']['x'] = 2\n```",
      options: ["Programmet stopper med feilen `KeyError: 'b'`", "Programmet lager `{'a': {'x': 1}, 'b': {'x': 2}}` uten feil", "Programmet stopper med feilen `KeyError: 'x'`", "Programmet lager `{'a': {'x': 1}, 'b': 2}` uten feil"],
      explanation: "Uttrykket regnes fra venstre: Python må finne `data['b']` for å vite hva `['x']` skal settes inn i, og den nøkkelen finnes ikke. Alternativ b) er felle #20 — innsetting oppretter aldri et nivå den må gå gjennom; kuren er `if 'b' not in data: data['b'] = {}`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nrader = [['a', 'u1', 2], ['a', 'u2', 4], ['b', 'u1', 8]]\ndata = {}\nfor x, y, v in rader:\n    if x not in data:\n        data[x] = {}\n    data[x][y] = v\nprint(data)\n```",
      options: ["`{'a': {'u1': 2, 'u2': 4}, 'b': {'u1': 8}}`", "`{'a': {'u1': 2}, 'a': {'u2': 4}, 'b': {'u1': 8}}`", "`{'a': {'u2': 4}, 'b': {'u1': 8}}`", "`{'u1': {'a': 2, 'b': 8}, 'u2': {'a': 4}}`"],
      explanation: "Dette er standardmønsteret for å bygge en nøstet ordbok: den indre ordboka opprettes bare første gang en ytre nøkkel dukker opp, så begge `'a'`-radene havner i samme indre ordbok. Alternativ b) tror en nøkkel kan gjentas, c) er svaret om `data[x] = {}` sto uten testen, og d) bytter om nivåene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nantall = {}\nfor tegn in 'kokkelimonke':\n    antall[tegn] = antall.get(tegn, 0) + 1\nprint(antall['k'], len(antall))\n```",
      options: ["`4 7`", "`3 7`", "`4 12`", "`7 4`"],
      explanation: "Ordet har fire `k`-er, og sju ulike bokstaver (`k`, `o`, `e`, `l`, `i`, `m`, `n`). Alternativ b) mister en `k`, c) forveksler antall ulike nøkler med lengden på ordet, og d) bytter om de to tallene. `len` på en telle-ordbok gir alltid antall **ulike** nøkler.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {}\nd['z'] = 1\nd['a'] = 2\nd['m'] = 3\nprint(list(d))\n```",
      options: ["`['z', 'a', 'm']`", "`['a', 'm', 'z']`", "`[1, 2, 3]`", "`['z', 1, 'a', 2, 'm', 3]`"],
      explanation: "Fra Python 3.7 bevarer en ordbok innsettingsrekkefølgen, og `list(d)` gir **nøklene** — samme regel som `for k in d`. Alternativ b) sorterer alfabetisk, c) gir verdiene, og d) blander nøkler og verdier om hverandre.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndata = {'nord': {'u1': 2, 'u2': 4}, 'sor': {'u1': 8, 'u2': 1}}\ntotal = 0\nfor omr in data:\n    for uke in data[omr]:\n        total += data[omr][uke]\nprint(total)\n```",
      options: ["`15`", "`6`", "`9`", "`4`"],
      explanation: "Den ytre løkka gir områdenavnene, den indre går over `data[omr]` og gir ukenavnene, og `data[omr][uke]` er tallet: $2 + 4 + 8 + 1 = 15$. Alternativ b) og c) summerer bare ett område, og d) teller antall tall i stedet for å legge dem sammen.",
    },
    {
      question: "Hva skriver `print(list(d.items())[1])` ut når `d = {'sol': 3, 'vind': 16}`?",
      options: ["`('vind', 16)`", "`('sol', 3)`", "`'vind'`", "`16`"],
      explanation: "`.items()` gir parene i innsettingsrekkefølge, og `[1]` plukker det **andre** paret — indeksering starter på 0. Et par skrives ut som en tuppel, med parenteser og fnutter rundt strengen. Alternativ b) er par nummer 0, mens c) og d) er hver sin halvdel av riktig par.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'x': [1, 2], 'y': [3]}\nd['x'].append(7)\nprint(len(d), len(d['x']))\n```",
      options: ["`2 3`", "`2 2`", "`3 3`", "`3 2`"],
      explanation: "`d['x']` gir selve lista, ikke en kopi, så `append` endrer det som ligger i ordboka: lista får tre elementer. Ordboka har fortsatt to nøkler. Alternativ b) glemmer at `append` virket, og c)/d) teller nivåene feil — felle #20.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'a': 1}\nd['b'] = d.get('b', 0) + 5\nd['a'] = d.get('a', 0) + 5\nprint(d)\n```",
      options: ["`{'a': 6, 'b': 5}`", "`{'a': 5, 'b': 5}`", "`{'b': 5, 'a': 6}`", "`{'a': 1, 'b': 5}`"],
      explanation: "`'b'` mangler, så `.get` gir 0 og verdien blir 5; `'a'` finnes med verdien 1, så den blir 6. Utskriftsrekkefølgen er innsettingsrekkefølgen, og `'a'` ble satt inn først. Alternativ c) er fellen der man tror en oppdatert nøkkel flytter seg bakerst.",
    },
    {
      question: "Hva skriver `print(maal[2022], len(maal))` ut når `maal = {2021: 5.1, 2022: 6.3}`?",
      options: ["`6.3 2`", "`5.1 2`", "Programmet stopper med feilen `IndexError`", "Programmet stopper med feilen `KeyError: 2022`"],
      explanation: "Heltall er lovlige nøkler, og `maal[2022]` er derfor et oppslag på **nøkkelen** 2022, ikke på posisjon 2022. Alternativ b) leser det som posisjon 1 i en liste, mens c) og d) er fellene der man tror heltallsnøkler er ulovlige eller ikke finnes.",
    },
  ],
  'in1900-1-6': [
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef f(x):\n    return x + 1\n    return x + 100\n\nprint(f(2), f(2.0))\n```",
      options: ["`3 3.0`", "`3 3`", "`103 103.0`", "`3.0 3.0`"],
      explanation: "`return` avslutter funksjonen straks, så den andre `return`-linja kjøres aldri. Heltall inn gir heltall ut, flyttall inn gir flyttall ut. Alternativ b) glemmer datatypen, c) tror begge `return`-linjene virker, og d) gjør begge svarene til flyttall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef skriv(x):\n    print(x * 2)\n\nsvar = skriv(3)\nprint(svar)\n```",
      options: ["`6` på første linje og `None` på andre", "`6` på første linje og `6` på andre", "`6` på første linje og `0` på andre", "Bare `6`, siden `svar` ikke har noen verdi"],
      explanation: "Funksjonen skriver ut, men har ingen `return`, så den leverer `None` tilbake. Alternativ b) forveksler «å skrive ut» med «å returnere» — den vanligste misforståelsen om funksjoner. Alternativ d) overser at `None` er en verdi som `print` gjerne skriver ut.",
    },
    {
      question: "Hva skriver `print(g(10), g(10, 1), g(b=10, a=1))` ut for `def g(a, b=3): return a - b`?",
      options: ["`7 9 -9`", "`7 9 9`", "`7 11 -9`", "`13 9 -9`"],
      explanation: "Første kall bruker standardverdien 3, andre kall overstyrer den med 1, og tredje kall setter `a` til 1 og `b` til 10 — navngitte argumenter går til parameteren med det navnet uansett rekkefølge. Alternativ b) snur fortegnet i siste kall, c) forveksler minus med pluss, og d) bruker feil standardverdi.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef logg(v, hist=[]):\n    hist.append(v)\n    return hist\n\nprint(logg(1))\nprint(logg(2))\n```",
      options: ["`[1]` på første linje og `[1, 2]` på andre", "`[1]` på første linje og `[2]` på andre", "`[1]` på første linje og `[1]` på andre", "Programmet stopper med `TypeError` på andre kall"],
      explanation: "En liste som standardverdi lages **én gang**, ved `def`-linja, og deles derfor mellom kallene — felle #21. Alternativ b) er det de fleste forventer, og det du får med den trygge formen `hist=None` pluss `if hist is None: hist = []` inne i funksjonen.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef par(n):\n    return n * 2, n * 3\n\nx = par(4)\nprint(x)\na, b = par(4)\nprint(a, b)\n```",
      options: ["`(8, 12)` på første linje og `8 12` på andre", "`8 12` på første linje og `8 12` på andre", "`[8, 12]` på første linje og `8 12` på andre", "`(8, 12)` på første linje og `(8, 12)` på andre"],
      explanation: "Komma etter `return` gir en tuppel, som skrives ut med parenteser og komma-mellomrom. Pakkes den ut i to navn, skriver `print` de to tallene med ett mellomrom mellom. Alternativ c) forveksler tuppel med liste — en tuppel har parenteser, ikke hakeparenteser.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nn = 7\n\ndef endre():\n    n = 2\n    return n\n\nprint(endre(), n)\n```",
      options: ["`2 7`", "`2 2`", "`7 7`", "`7 2`"],
      explanation: "Tilordningen inne i funksjonen lager en **lokal** variabel; den globale `n` er urørt — felle #13. Alternativ b) er svaret om du tror funksjonen endrer den globale, og d) bytter om rekkefølgen `print` skriver argumentene i.",
    },
    {
      question: "Hva skjer når programmet kjøres?\n\n```python\nantall = 1\n\ndef opp():\n    antall = antall + 1\n    return antall\n\nprint(opp())\n```",
      options: ["Programmet stopper med `UnboundLocalError`", "Programmet skriver `2`, og den globale `antall` blir 2", "Programmet skriver `2`, men den globale `antall` er 1", "Programmet stopper med `NameError` på `def`-linja"],
      explanation: "Likhetstegnet gjør `antall` lokal i hele funksjonen — også på høyresiden, der den ennå ikke har fått verdi. Alternativ b) og c) forutsetter at høyresiden leser den globale, som den ikke gjør. Kuren i denne boka er å sende telleren inn som argument og returnere den nye verdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef utvid(liste):\n    liste.append(5)\n    return len(liste)\n\nverdier = [1, 2]\nprint(utvid(verdier), verdier)\n```",
      options: ["`3 [1, 2, 5]`", "`3 [1, 2]`", "`2 [1, 2, 5]`", "`3 [5]`"],
      explanation: "`append` endrer selve lista som ble sendt inn, så endringen er synlig utenfor funksjonen også. Alternativ b) er svaret om du tror en funksjon aldri kan endre argumentet sitt, og c) teller lengden før tillegget. Merk at dette ikke motsier felle #13: der gjaldt det **tilordning**, her endres innholdet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef bytt(liste):\n    liste = [9, 9]\n    return liste\n\nverdier = [1, 2]\nbytt(verdier)\nprint(verdier)\n```",
      options: ["`[1, 2]`", "`[9, 9]`", "`[1, 2, 9, 9]`", "`None`"],
      explanation: "`liste = [9, 9]` er en **tilordning**: den kobler bare det lokale navnet til en ny liste, og originalen er urørt. Alternativ b) er fellen — sammenlign med `liste.append(9)`, som ville endret originalen. Returverdien blir dessuten aldri tatt vare på.",
    },
    {
      question: "Hva skriver `print(h(3), h(0))` ut når `h = lambda x: 2 * x + 1`?",
      options: ["`7 1`", "`7 0`", "`6 1`", "`8 2`"],
      explanation: "En `lambda` returnerer verdien av uttrykket etter kolon, så `h(3)` er $2 \\cdot 3 + 1 = 7$ og `h(0)` er 1. Alternativ b) glemmer leddet `+ 1` i det andre kallet, og c) glemmer det i det første. En `lambda` er akkurat like mye en funksjon som en `def`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef kvadrat(x):\n    return x * x\n\nk = kvadrat\nprint(k(5))\n```",
      options: ["`25`", "Programmet stopper med `TypeError`", "`<class 'function'>`", "Programmet stopper med `NameError`"],
      explanation: "Et funksjonsnavn uten parenteser er en verdi som kan lagres i en variabel, og `k` peker deretter på samme funksjon. Alternativ c) er hva `print(type(kvadrat))` ville gitt. At funksjoner kan sendes rundt slik, er hele grunnlaget for numeriske metoder senere i boka.",
    },
    {
      question: "Hva skriver `print(bruk(abs, -3), bruk(lambda t: t + 1, 3))` ut for `def bruk(f, x): return f(x) * 2`?",
      options: ["`6 8`", "`6 7`", "`-6 8`", "`3 4`"],
      explanation: "Første kall gir `abs(-3) * 2` som er 6, andre gir `(3 + 1) * 2` som er 8. Alternativ b) glemmer å gange med 2 i det andre kallet, og c) glemmer at `abs` fjerner fortegnet. Merk at `abs` sendes inn uten parenteser — det er funksjonen selv som skal videre.",
    },
    {
      question: "Hva skriver `print(eval('2*y + 4'))` ut når `y = 3`?",
      options: ["`10`", "`2*y + 4`", "Programmet stopper med `NameError`", "`'2*y + 4'`"],
      explanation: "`eval` regner ut uttrykket som står i teksten, med de variablene som finnes akkurat da — her $2 \\cdot 3 + 4 = 10$. Alternativ b) og d) er svarene om du tror teksten bare skrives ut, og c) forutsetter at `y` ikke finnes, som den gjør.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef forste_over(verdier, grense):\n    for v in verdier:\n        if v > grense:\n            return v\n    return -1\n\nprint(forste_over([1, 5, 9], 4), forste_over([1, 2], 4))\n```",
      options: ["`5 -1`", "`9 -1`", "`5 0`", "`14 -1`"],
      explanation: "`return` inne i løkka avslutter funksjonen straks den finner den **første** verdien over grensen — derfor 5 og ikke 9. Finner løkka ingenting, kjøres `return -1` etterpå. Alternativ b) er svaret om du tror løkka går ferdig, og d) om du tror verdiene summeres.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef sum_til(n):\n    total = 0\n    for i in range(n + 1):\n        total += i\n        return total\n\nprint(sum_til(4))\n```",
      options: ["`0`", "`10`", "`4`", "`1`"],
      explanation: "`return` står **inne i** løkka, med samme innrykk som `total += i`, så funksjonen avsluttes etter første runde — der `i` er 0 og `total` fortsatt 0. Alternativ b) er svaret den riktige koden ville gitt, med `return` utenfor løkka. Dette er en innrykksfeil, felle #24.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef vis(a, b, c=0):\n    print(a, b, c)\n\nvis(1, c=2, b=3)\n```",
      options: ["`1 3 2`", "`1 2 3`", "`1 3 0`", "Programmet stopper med `TypeError`"],
      explanation: "Posisjonsargumentet 1 går til `a`, og de navngitte går til parametrene med de navnene: `c` blir 2 og `b` blir 3. `print` skriver dem i **parametrenes** rekkefølge, ikke i kallets. Alternativ b) leser kallet fra venstre uten å se på navnene, og c) overser at `c` er overstyrt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef teller(d, k):\n    d[k] = d.get(k, 0) + 1\n    return d\n\nordbok = {}\nteller(ordbok, 'x')\nteller(ordbok, 'x')\nprint(ordbok)\n```",
      options: ["`{'x': 2}`", "`{'x': 1}`", "`{}`", "`{'x': 2, 'x': 2}`"],
      explanation: "Innsetting i en ordbok endrer objektet som ble sendt inn, så begge kallene virker på samme ordbok. Returverdien tas aldri vare på, men det trengs heller ikke. Alternativ b) er svaret om bare ett kall talte, og c) om du tror funksjonen jobber på en kopi.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef deler(t):\n    return t // 4, t % 4\n\nprint(deler(13))\nprint(deler(13)[0])\n```",
      options: ["`(3, 1)` på første linje og `3` på andre", "`3 1` på første linje og `3` på andre", "`(3, 1)` på første linje og `1` på andre", "`(3.25, 1)` på første linje og `3.25` på andre"],
      explanation: "`13 // 4` er 3 og `13 % 4` er 1, og tuppelen skrives med parenteser. Indeks 0 plukker det første elementet. Alternativ c) teller fra 1, og d) forveksler `//` med `/`, som ville gitt flyttall.",
    },
  ],
  'in1900-1-7': [
    {
      question: "Hva skriver `for i in range(2, 6): print(i, end='')` ut?",
      options: ["`2345`", "`23456`", "`2 3 4 5`", "`012345`"],
      explanation: "`range(2, 6)` gir 2, 3, 4, 5 — stoppverdien 6 er aldri med (felle #1). `end=''` fjerner både linjeskiftet og gir ingen skilletegn, så sifrene henger sammen. Alternativ b) tar med stoppverdien, c) antar mellomrom, og d) starter på 0.",
    },
    {
      question: "Hva skriver `print(x[2], x[-3])` ut når `x = [5, 6, 7, 8]`?",
      options: ["`7 6`", "`7 7`", "`6 6`", "`8 6`"],
      explanation: "Indeks 2 er tredje element, altså 7. Negativ indeks teller fra `-1` bakerst: `-1` er 8, `-2` er 7, `-3` er 6. Alternativ b) er svaret om du tror `-3` teller fra `0`, og d) om du leser `x[2]` som «det andre fra slutten».",
    },
    {
      question: "Hva skriver `print(x[1:3])` ut når `x = [5, 6, 7, 8]`?",
      options: ["`[6, 7]`", "`[6, 7, 8]`", "`6 7`", "`[5, 6, 7]`"],
      explanation: "Et utsnitt tar med fra og med 1 til, men ikke med, 3 — altså to elementer. Utsnitt gir en **liste**, og lister skrives med hakeparenteser og mellomrom etter kommaet (felle #18). Alternativ b) tar med stoppindeksen, og c) glemmer at resultatet er en liste.",
    },
    {
      question: "Hva skriver `print([1, 2] + [3])` ut?",
      options: ["`[1, 2, 3]`", "`[4, 5]`", "`6`", "`[1, 2, [3]]`"],
      explanation: "`+` på lister betyr **skjøting**, ikke elementvis addisjon (felle #5). Alternativ b) er hva elementvis addisjon ville gitt om det fantes — det kommer først med NumPy-tabeller i [kap. 4.1](/bok/in1900/in1900-4-1). Alternativ c) er summen av alle tallene.",
    },
    {
      question: "Hva skriver `print(sum([1, 2, 3]) * 2)` ut?",
      options: ["`12`", "`[1, 2, 3, 1, 2, 3]`", "`[2, 4, 6]`", "`6`"],
      explanation: "`sum` gir ett tall, 6, og deretter ganges tallet med 2. Alternativ b) er hva `[1, 2, 3] * 2` ville gitt — gjentakelse av lista. Alternativ c) er elementvis multiplikasjon, som lister ikke har, og d) glemmer siste ledd.",
    },
    {
      question: "Hva skriver `print(9 // 4, 9 % 4, -9 // 4)` ut?",
      options: ["`2 1 -3`", "`2 1 -2`", "`2.25 1 -2.25`", "`2 1 -2.25`"],
      explanation: "`//` runder **nedover**, også for negative tall: −2,25 blir −3 (felle #15). `%` gir resten 1. Alternativ b) er svaret om du tror `//` kutter mot null slik `int()` gjør, og c)/d) forveksler `//` med `/`, som alltid gir flyttall.",
    },
    {
      question: "Hva skriver `print(3 ** 2 ** 2)` ut?",
      options: ["`81`", "`9`", "`12`", "`729`"],
      explanation: "`**` regnes **fra høyre**, så uttrykket er $3^{(2^2)} = 3^4 = 81$ (felle #15). Alternativ d) er $(3^2)^2 \\cdot 9$, b) er $3^2$, og c) er svaret om du ganger eksponentene. Potensen binder også sterkere enn unært minus.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfor i in range(1, 4):\n    for j in range(i):\n        print(j, end='')\n```",
      options: ["`001012`", "`012012`", "`000111`", "`0110122`"],
      explanation: "Den indre grensen avhenger av `i` (felle #12): for `i = 1` skrives `0`, for `i = 2` skrives `01`, for `i = 3` skrives `012`. Til sammen `001012`. Alternativ b) antar tre indre runder hver gang, og c) antar at det er `i` som skrives.",
    },
    {
      question: "Hva skriver `for i in range(4, 0, -1): print(i, end=' ')` ut?",
      options: ["`4 3 2 1 ` (med mellomrom til slutt)", "`4 3 2 1 0 ` (med mellomrom til slutt)", "`3 2 1 0 ` (med mellomrom til slutt)", "`1 2 3 4 ` (med mellomrom til slutt)"],
      explanation: "Med negativt steg teller `range` nedover, og stoppverdien 0 er fortsatt **eksklusiv**. Alternativ b) tar med stoppverdien, c) starter feil sted, og d) snur rekkefølgen. Merk at `end=' '` også skriver et mellomrom etter siste tall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\na = [1, 2, 3]\nb = [9, 8]\nfor p, q in zip(a, b):\n    print(p + q, end=' ')\n```",
      options: ["`10 10 ` (med mellomrom til slutt)", "`10 10 3 ` (med mellomrom til slutt)", "`10 10 11 ` (med mellomrom til slutt)", "`1 9 2 8 ` (med mellomrom til slutt)"],
      explanation: "`zip` stopper ved den korteste sekvensen (felle #17), så løkka går to runder: $1 + 9 = 10$ og $2 + 8 = 10$. Tallet 3 blir aldri brukt. Alternativ b) og c) er fellene der `zip` antas å fylle ut den korteste lista.",
    },
    {
      question: "Hva skriver `for i, v in enumerate(['a', 'b']): print(i, v, end=';')` ut?",
      options: ["`0 a;1 b;`", "`1 a;2 b;`", "`a 0;b 1;`", "`0 a; 1 b;`"],
      explanation: "`enumerate` gir indeksen **først** og starter på 0 (felle #17). `print` med to argumenter setter ett mellomrom mellom dem, mens `end=';'` gir semikolon uten mellomrom etter. Alternativ c) snur paret, og d) legger inn et mellomrom som ikke skrives.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nn = 7\nk = 0\nwhile n > 0:\n    n = n - 2\n    k += 1\nprint(n, k)\n```",
      options: ["`-1 4`", "`1 3`", "`0 4`", "`-1 3`"],
      explanation: "`n` går 7, 5, 3, 1, −1. Etter fjerde runde er `n` lik −1, og betingelsen `n > 0` er usann. Alternativ b) stopper en runde for tidlig — men ved `n = 1` er `1 > 0` fortsatt sant. Alternativ c) antar at løkka treffer 0 nøyaktig, som den ikke gjør med steg 2 fra et oddetall.",
    },
    {
      question: "Hva skriver `print(len(d), 2 in d)` ut når `d = {'a': 1, 'b': 2}`?",
      options: ["`2 False`", "`2 True`", "`4 False`", "`2 None`"],
      explanation: "`len` teller parene, altså 2. `in` på en ordbok ser **bare** på nøklene, og 2 er en verdi — derfor `False`. Alternativ b) er fellen der man tror `in` også leter i verdiene; det krever `2 in d.values()`. Alternativ c) teller nøkler og verdier hver for seg.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'a': 1}\nd['b'] = d.get('b', 0) + 3\nprint(d)\n```",
      options: ["`{'a': 1, 'b': 3}`", "`{'a': 1, 'b': 0}`", "`{'a': 1}`", "`{'a': 4, 'b': 3}`"],
      explanation: "`.get('b', 0)` gir 0 fordi nøkkelen mangler, og verdien blir 3. Nye nøkler legges bakerst, i innsettingsrekkefølge. Alternativ b) glemmer leddet `+ 3`, og c) forutsetter at `.get` alene ville lagt til nøkkelen — det gjør den ikke, men tilordningen gjør det.",
    },
    {
      question: "Hva skriver `print(s[1:4], s[-1])` ut når `s = 'python'`?",
      options: ["`yth n`", "`ytho n`", "`yth h`", "`'yth' 'n'`"],
      explanation: "Utsnittet tar tegn 1, 2 og 3 — stoppindeksen 4 er ikke med. `s[-1]` er siste tegn. Strenger skrives **uten** fnutter når de er argument til `print`; fnutter kommer bare med inne i en liste eller ordbok (alternativ d). Alternativ b) tar med stoppindeksen.",
    },
    {
      question: "Hva skriver `print(f'{7:4d}|{2.5:6.1f}|')` ut?",
      options: ["`   7|   2.5|`", "`7   |2.5   |`", "`   7|  2.50|`", "`0007|   2.5|`"],
      explanation: "Bredden fyller ut med mellomrom **foran** tall (høyrejustering): `7` er ett tegn i et felt på 4, og `2.5` er tre tegn i et felt på 6. Alternativ b) venstrejusterer, som bare gjelder strenger, og c) bruker to desimaler der `.1f` ba om én (felle #16).",
    },
    {
      question: "Hva skriver `print('a', 'b', sep='-', end='!')` ut?",
      options: ["`a-b!`", "`a b!`", "`a-b-!`", "`a-b` med linjeskift etter"],
      explanation: "`sep` bytter ut mellomrommet **mellom** argumentene, `end` bytter ut linjeskiftet **etter** hele utskriften. Alternativ c) bruker separatoren også til slutt, som den ikke gjør, og d) overser at `end` fjerner linjeskiftet (felle #16).",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ny = 2\ndef f():\n    y = 9\n    return y + 1\nprint(f(), y)\n```",
      options: ["`10 2`", "`10 9`", "`3 2`", "`10 10`"],
      explanation: "Tilordningen inne i funksjonen lager en **lokal** `y` (felle #13), så funksjonen returnerer 10 mens den globale `y` fortsatt er 2. Alternativ b) og d) er svarene om du tror funksjonen endrer den globale, og c) om du tror funksjonen leser den globale verdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef g(liste):\n    liste.append(4)\n    return sum(liste)\nx = [1, 2]\nprint(g(x), x)\n```",
      options: ["`7 [1, 2, 4]`", "`7 [1, 2]`", "`3 [1, 2, 4]`", "`7 [4]`"],
      explanation: "`append` endrer selve lista som ble sendt inn, så endringen er synlig utenfor — dette er unntaket fra scope-regelen, som bare gjelder tilordning. Summen blir $1 + 2 + 4 = 7$. Alternativ b) antar at funksjonen jobber på en kopi, og c) summerer før tillegget.",
    },
    {
      question: "Hva skriver `print(y[1][0], len(y[1]))` ut når `y = [[1, 2], [3, 4, 5]]`?",
      options: ["`3 3`", "`1 2`", "`3 2`", "`2 3`"],
      explanation: "`y[1]` er den andre indre lista, `[3, 4, 5]`; første element der er 3, og lengden er 3. At begge tallene ble 3 er tilfeldig — `len` teller på det nivået du peker på. Alternativ b) leser rad 0, og c) teller lengden på feil rad.",
    },
    {
      question: "Hva skriver `print(y[0] + y[1][:1])` ut når `y = [[1, 2], [3, 4, 5]]`?",
      options: ["`[1, 2, 3]`", "`[1, 2, 3, 4, 5]`", "`[1, 2, [3]]`", "`6`"],
      explanation: "`y[1][:1]` er et **utsnitt** og gir lista `[3]`, ikke tallet 3. To lister skjøtes med `+`. Alternativ c) er fellen der man tror en liste legges inn som ett element, og d) forutsetter at `+` summerer tall (felle #5 og #18 i samme uttrykk).",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntotal = 0\nfor i in range(3):\n    total = total + i * 2\nprint(total)\n```",
      options: ["`6`", "`12`", "`4`", "`0`"],
      explanation: "`range(3)` gir 0, 1, 2, og summen av det dobbelte er $0 + 2 + 4 = 6$. Alternativ b) er svaret om løkka gikk til og med 3, og c) om startverdien var glemt. Merk at `print` står utenfor løkka, så den skriver bare én gang.",
    },
    {
      question: "Hva skriver `print(list(range(0, 7, 3)))` ut?",
      options: ["`[0, 3, 6]`", "`[0, 3, 6, 9]`", "`[0, 3, 6, 7]`", "`[3, 6]`"],
      explanation: "Steget er 3, og stoppverdien 7 er eksklusiv — 9 ville uansett vært for stort. Alternativ b) og c) tar med en verdi for mye, og d) glemmer at `range` starter på startverdien. Merk at `list` må til for at et `range`-objekt skal vises som en liste.",
    },
    {
      question: "Hva skriver `print(10 / 5, 10 // 5)` ut?",
      options: ["`2.0 2`", "`2 2`", "`2.0 2.0`", "`2 2.0`"],
      explanation: "`/` gir **alltid** flyttall, også når divisjonen går opp; `//` gir heltall når begge operandene er heltall (felle #15). Et svar med `2` der det skal stå `2.0` er feil i sjanger A, selv om tallverdien stemmer.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nd = {'x': 3, 'y': 1}\nfor k in d:\n    print(k, end='')\nprint(sum(d.values()))\n```",
      options: ["`xy4`", "`x y 4`", "`31 4`", "`xy 4`"],
      explanation: "Løkka går over **nøklene** og skriver dem uten skilletegn, siden `end=''`. Deretter skriver `print` summen av verdiene, 4, på samme linje — fordi forrige `print` aldri avsluttet linja. Alternativ c) er fellen der løkkevariabelen forveksles med verdien.",
    },
    {
      question: "Hva skriver `print(tekst.split(','), len(tekst.split(',')))` ut når `tekst = 'a,b,,c'`?",
      options: ["`['a', 'b', '', 'c'] 4`", "`['a', 'b', 'c'] 3`", "`['a', 'b', ' ', 'c'] 4`", "`'a b  c' 4`"],
      explanation: "`.split(',')` deler på hvert komma, også der det ikke står noe mellom to av dem — resultatet blir en tom streng `''` som eget felt. Alternativ b) er fellen der man tror tomme felt hoppes over, og c) forveksler tom streng med mellomrom.",
    },
    {
      question: "Hva skriver `print(h(7), h(7, 4))` ut for `def h(n, m=3): return n % m`?",
      options: ["`1 3`", "`1 1`", "`2 3`", "`3 1`"],
      explanation: "Første kall bruker standardverdien 3, så $7 \\bmod 3 = 1$; andre kall setter `m` til 4, og $7 \\bmod 4 = 3$. Alternativ d) bytter om de to kallene, og c) regner $7 // 3$ i stedet for resten.",
    },
    {
      question: "Hva skriver `print(x[::-1], x[3:])` ut når `x = [1, 2, 3]`?",
      options: ["`[3, 2, 1] []`", "`[3, 2, 1] [3]`", "`[1, 2, 3] []`", "`[3, 2, 1]` og deretter `IndexError`"],
      explanation: "`[::-1]` snur lista, og `x[3:]` starter etter siste element og gir en **tom liste** — et utsnitt utenfor kanten er lovlig og gir ikke feilmelding (felle #18). Alternativ d) forveksler utsnitt med indeksering: `x[3]` ville derimot gitt `IndexError`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nk = 0\nfor i in range(3):\n    for j in range(2):\n        k += 1\nprint(k)\n```",
      options: ["`6`", "`5`", "`3`", "`9`"],
      explanation: "Den ytre løkka går tre runder og den indre to per ytre runde, altså $3 \\cdot 2 = 6$ oppdateringer. Når den indre grensen er fast, blir totalen et rektangel; er den `range(i)`, blir den en trekant (felle #12). Alternativ b) og c) teller bare den ene løkka.",
    },
  ],
  'in1900-2-1': [
    {
      question: "Programmet kjøres som `python3 maaling.py 4 0`. Hva skriver `print(len(sys.argv))` ut?",
      options: ["3", "2", "4", "1"],
      explanation: "Kommandolinjen gir `sys.argv` lik `['maaling.py', '4', '0']` — tre elementer, fordi programnavnet ligger på indeks 0. Svaret 2 er den klassiske feilen: å telle bare argumentene du selv skrev. 4 ville stemt hvis du hadde gitt tre argumenter, og 1 er antallet når du kjører programmet helt uten argumenter.",
    },
    {
      question: "Hva er `sys.argv` når programmet kjøres som `python3 p.py 6 0`?",
      options: ["`['p.py', '6', '0']`", "`['6', '0', 'p.py']`", "`['p.py', 6, 0]`", "`['6', '0']`"],
      explanation: "Programnavnet kommer først, og alle elementene er strenger — derfor `['p.py', '6', '0']`. Varianten med filnavnet sist finnes ikke; rekkefølgen er alltid som på kommandolinjen. Varianten med tallene uten anførselstegn er feil fordi Python ikke konverterer noe for deg, og varianten uten filnavn er feil #6.",
    },
    {
      question: "Hvilken type returnerer `input('Antall: ')`?",
      options: ["Alltid en streng (`str`)", "Alltid et heltall (`int`)", "Alltid et flyttall (`float`)", "Typen avhenger av hva brukeren skriver"],
      explanation: "`input` gir alltid en `str`, uansett om brukeren skriver `5`, `5.0` eller `fem`. Derfor må du selv kalle `int` eller `float` når du skal regne. Alternativet om at typen avhenger av inndataen er den vanligste misforståelsen, og gir strengsammenliming der du forventet addisjon.",
    },
    {
      question: "Brukeren skriver `4` og deretter `5`. Hva skriver `print(a + b)` ut når `a = input()` og `b = input()`?",
      options: ["`45`", "`9`", "`4 5`", "`20`"],
      explanation: "Begge verdiene er strenger, og `+` mellom strenger limer dem sammen til `45`. Svaret `9` forutsetter at `input` ga tall, som den aldri gjør. `4 5` ville krevd `print(a, b)`, og `20` er produktet `int(a) * int(b)`.",
    },
    {
      question: "Hva skriver `print(eval('2 + 3 * 4'))` ut?",
      options: ["`14`", "`20`", "`24`", "`234`"],
      explanation: "`eval` tolker teksten som et Python-uttrykk, og `*` binder sterkere enn `+`, så $3\\cdot 4 = 12$ og $2 + 12 = 14$. Svaret 20 kommer av å regne fra venstre mot høyre. 24 er $2\\cdot 3\\cdot 4$, og `234` er hva du ville fått hvis `eval` bare hadde fjernet mellomrommene og tegnene.",
    },
    {
      question: "Hva skjer når `print(int('4.0'))` kjøres?",
      options: ["Det stopper med `ValueError`", "Det stopper med `TypeError`", "Det skriver ut tallet `4`", "Det skriver ut `4.0`"],
      explanation: "`int` godtar ikke desimalpunkt i teksten, så konverteringen feiler med `ValueError` — siste linje er `ValueError: invalid literal for int() with base 10: '4.0'`. `TypeError` ville kommet av gal *type*, som i `'4' + 1`, ikke av gyldig type med ubrukelig innhold. Vil du ha tallet 4, må du skrive `int(float('4.0'))`.",
    },
    {
      question: "Programmet kjøres uten argumenter. Hva gjør `sys.exit('Bruk: p.py tall')` på linje 3?",
      options: ["Stopper programmet der og skriver meldingen", "Skriver meldingen og fortsetter til neste linje", "Returnerer meldingen til den som kalte", "Ignoreres fordi meldingen ikke er en feil"],
      explanation: "`sys.exit` avslutter programmet umiddelbart, og teksten går til feilkanalen — resten av programmet kjøres aldri. Den fortsetter altså ikke, og den «returnerer» ingenting til noen, siden det ikke er en funksjon du er inne i. At en tekstmelding skulle gjøre kallet ufarlig, er en misforståelse: det er kallet, ikke meldingen, som stopper kjøringen.",
    },
    {
      question: "Hva er typen til `sys.argv[1]` når programmet kjøres som `python3 p.py 3.5`?",
      options: ["`str` — en streng", "`float` — et flyttall", "`int` — et heltall", "`list` — en liste"],
      explanation: "Alle elementene i `sys.argv` er strenger, også de som ser ut som tall, så `sys.argv[1]` er `'3.5'`. Skal du regne med verdien, må du skrive `float(sys.argv[1])`. `list` er typen til `sys.argv` selv, ikke til ett element av den.",
    },
    {
      question: "Programmet trenger nøyaktig to argumenter. Hvilken sjekk er riktig?",
      options: ["`if len(sys.argv) != 3:`", "`if len(sys.argv) != 2:`", "`if len(sys.argv) < 1:`", "`if len(sys.argv[1:]) != 3:`"],
      explanation: "To argumenter pluss programnavnet gir tre elementer, så sjekken er `!= 3`. Varianten `!= 2` avbryter nettopp når kallet er riktig — det er feil #6 satt i kode. Sjekken `< 1` er alltid falsk siden lista minst inneholder filnavnet, og den siste teller argumentene uten filnavn, men sammenligner med galt tall.",
    },
    {
      question: "Programmet kjøres som `python3 s.py 12 30` og gjør `print(sys.argv[1] + sys.argv[2])`. Hva skrives ut?",
      options: ["`1230`", "`42`", "`12 30`", "`360`"],
      explanation: "Begge elementene er strenger, og `+` limer dem sammen til `1230`. `42` krever `int(...) + int(...)`. `12 30` ville krevd `print(sys.argv[1], sys.argv[2])` med komma, og `360` er produktet av tallene.",
    },
    {
      question: "Programmet gjør `x = float(sys.argv[1])` og kjøres som `python3 p.py to`. Hva skjer?",
      options: ["`ValueError` fordi `'to'` ikke er et tall", "`TypeError` fordi `'to'` er en streng", "`IndexError` fordi argumentet mangler", "`NameError` fordi `to` ikke er definert"],
      explanation: "Typen er riktig (`float` forventer en streng), men innholdet kan ikke tolkes som tall, og da er feilen `ValueError`. `TypeError` ville kommet hvis du ga `float` noe den ikke kan ta imot i det hele tatt, for eksempel en liste. `IndexError` krever at elementet mangler, og `NameError` gjelder navn i koden, ikke innhold i en streng.",
    },
    {
      question: "Brukeren skal kunne oppgi funksjonsuttrykket selv, som teksten `x**2 - 2`. Hvilken linje gjør teksten om til en verdi når `x` er satt?",
      options: ["`verdi = eval(uttrykk)`", "`verdi = float(uttrykk)`", "`verdi = int(uttrykk)`", "`verdi = str(uttrykk)`"],
      explanation: "`eval` tolker hele teksten som et Python-uttrykk og bruker de variablene som finnes der den kalles, så `eval('x**2 - 2')` gir en verdi. `float` og `int` krever at teksten er *ett* tall og gir `ValueError` her. `str` gjør ingenting nytt — teksten er allerede en streng.",
    },
    {
      question: "Programmet kjøres som `python3 p.py a b c`. Hva er `sys.argv[1:]`?",
      options: ["`['a', 'b', 'c']`", "`['p.py', 'a', 'b']`", "`'a'`", "`['b', 'c']`"],
      explanation: "Utsnittet fra indeks 1 og ut gir en ny liste med alle dine argumenter: `['a', 'b', 'c']`. Varianten som starter med `p.py` svarer til `sys.argv[:3]`. `'a'` er `sys.argv[1]` — indeksering gir element, utsnitt gir liste — og `['b', 'c']` svarer til `sys.argv[2:]`.",
    },
    {
      question: "Hvilken rekkefølge gjør et kommandolinjeprogram robust?",
      options: ["Sjekk antallet, avbryt ved feil, konvertér, regn", "Konvertér, regn, sjekk antallet, avbryt ved feil", "Konvertér, sjekk antallet, avbryt ved feil, regn", "Regn, sjekk antallet, konvertér, avbryt ved feil"],
      explanation: "Antallssjekken må komme først, ellers gir `sys.argv[2]` en `IndexError` før brukeren får din egen beskjed. Alle variantene som konverterer før sjekken, har nettopp denne svakheten. Å regne før verdiene er konvertert er dessuten umulig: `sys.argv[1]` er en streng.",
    },
  ],
  'in1900-2-2': [
    {
      question: "Programmet gjør `x = float(sys.argv[1])` og kjøres som `python3 p.py`. Hvilken exception utløses?",
      options: ["`IndexError`", "`ValueError`", "`TypeError`", "`NameError`"],
      explanation: "Uten argumenter er `sys.argv` lik `['p.py']`, så `sys.argv[1]` finnes ikke, og oppslaget gir `IndexError`. `ValueError` ville krevd at et argument fantes men var utolkbart som tall. `TypeError` gjelder uforenlige typer, og `NameError` gjelder navn som ikke er tilordnet.",
    },
    {
      question: "Hvilken exception gir `int('4.0')`?",
      options: ["`ValueError`", "`TypeError`", "`SyntaxError`", "ingen — resultatet er 4"],
      explanation: "`int` får en streng, som er riktig type, men godtar ikke desimalpunkt i innholdet, og da er feilen `ValueError`. `TypeError` ville kommet hvis typen var umulig, som i `int([4])`. Vil du ha heltallet 4, må du skrive `int(float('4.0'))`.",
    },
    {
      question: "Hvilken exception gir `'sum: ' + 42`?",
      options: ["`TypeError`", "`ValueError`", "`NameError`", "`SyntaxError`"],
      explanation: "Å legge et heltall til en streng er umulig uansett verdier, så typene er problemet og feilen er `TypeError`. `ValueError` er forbeholdt riktig type med ubrukelig innhold, som `int('to')`. Uttrykket er syntaktisk helt gyldig, så det er ingen `SyntaxError`.",
    },
    {
      question: "`d = {'a': 1}`. Hvilken exception gir `print(d['b'])`?",
      options: ["`KeyError`", "`IndexError`", "`ValueError`", "`AttributeError`"],
      explanation: "Oppslag på en nøkkel som ikke finnes i en ordbok gir `KeyError`, og meldingen er nøkkelen i anførselstegn: `KeyError: 'b'`. `IndexError` hører til lister og strenger, ikke ordbøker. Vil du unngå feilen, bruker du `d.get('b', 0)`.",
    },
    {
      question: "Programmet gjør `print(x / y)` etter at `x = 6.0` og `y = 0.0`. Hva blir siste linje i feilmeldingen?",
      options: ["`ZeroDivisionError: float division by zero`", "`ZeroDivisionError: integer division or modulo by zero`", "`ValueError: cannot divide by zero`", "`ArithmeticError: division by zero`"],
      explanation: "Med flyttall er meldingen `float division by zero`; formuleringen om heltall hører til `//` og `%` mellom heltall. Feiltypen er `ZeroDivisionError` i begge tilfeller, så på en matche-tabell er de likeverdige. `ValueError` og `ArithmeticError` brukes ikke her — den siste er en overordnet type Python ikke navngir i meldingen.",
    },
    {
      question: "Programmet kjøres som `python3 p.py 0 to` og gjør `a = float(sys.argv[1])`, deretter `b = float(sys.argv[2])`, deretter `print(1 / a * b)`. Hvilken exception utløses?",
      options: ["`ValueError`", "`ZeroDivisionError`", "`IndexError`", "`TypeError`"],
      explanation: "`float('0')` er helt lovlig og gir 0.0, så programmet fortsetter til `float('to')`, som feiler med `ValueError`. Divisjonen på 0 ville gitt `ZeroDivisionError`, men den linja kjøres aldri — den første feilen vinner. Begge argumentene finnes, så `IndexError` er utelukket.",
    },
    {
      question: "Hva skriver `x = [1, 2, 3]` etterfulgt av `print(x[3:])` ut?",
      options: ["`[]`", "`IndexError`", "`3`", "`[3]`"],
      explanation: "Et utsnitt utenfor lista gir den tomme lista og aldri `IndexError` — det er bare indeksering med `x[3]` som feiler. `3` ville vært `x[2]`, og `[3]` ville vært `x[2:]`. Dette er en gjenganger i matche-tabeller: `sys.argv[1:]` gir en tom liste når ingen argumenter er gitt.",
    },
    {
      question: "I hvilken rekkefølge må `except`-blokkene stå når én av dem er `except Exception`?",
      options: ["De spesifikke først, `except Exception` sist", "`except Exception` først, de spesifikke etter", "Rekkefølgen er alltid uten betydning", "Alfabetisk etter navnet på feiltypen"],
      explanation: "Python bruker den første `except` som passer, og `Exception` passer til alt — derfor må den stå sist, ellers blir de spesifikke blokkene død kode. Rekkefølgen mellom uavhengige feiltyper som `IndexError` og `ValueError` er derimot fritt valgt. Alfabetisk rekkefølge har ingen betydning i Python.",
    },
    {
      question: "Hva skjer med resten av `try`-blokken etter at en exception er utløst i den?",
      options: ["Den kjøres ikke; Python går rett til `except`", "Den kjøres ferdig, og `except` kjøres etterpå", "Bare `print`-linjene i den kjøres", "Den kjøres om igjen fra starten"],
      explanation: "`try`-blokken avbrytes umiddelbart på linja som feilet, og Python leter etter en passende `except`. Ingen senere linjer i blokken kjøres, uansett hva de gjør. Det er nettopp derfor «hvilken feil kommer først» er hele øvelsen i denne sjangeren.",
    },
    {
      question: "`antall = 0`, deretter `assert antall > 0, 'må være positivt'`, deretter `print(10 / antall)`. Hvilken exception utløses?",
      options: ["`AssertionError`", "`ZeroDivisionError`", "`ValueError`", "ingen — `assert` gir bare en advarsel"],
      explanation: "`assert`-linja står først og betingelsen er falsk, så programmet stopper der med `AssertionError: må være positivt`. Divisjonen ville gitt `ZeroDivisionError`, men den nås aldri. En `assert` er ingen advarsel — den avbryter programmet.",
    },
    {
      question: "Hva gir `except ValueError as e` deg tilgang til?",
      options: ["Feilobjektet, slik at `print(e)` viser meldingen", "En kopi av `try`-blokken som feilet", "Linjenummeret der feilen oppsto, som et heltall", "En liste over alle feilene som kan oppstå"],
      explanation: "`as e` binder feilobjektet til navnet `e`, og `print(e)` skriver ut meldingen Python ellers ville vist. Den gir ikke linjenummeret som en verdi du kan regne med, og den gjenskaper ikke koden. Formen er nyttig i løkker der du vil rapportere hvilken verdi som feilet og fortsette.",
    },
    {
      question: "Programmet gjør `maalinger[dag][nr]` der `maalinger` er en ordbok av lister. `dag` finnes, men `nr` er for stor. Hvilken exception utløses?",
      options: ["`IndexError`", "`KeyError`", "`TypeError`", "`ValueError`"],
      explanation: "Ordboksoppslaget lykkes fordi nøkkelen finnes; det er listeindekseringen etterpå som svikter, og lister gir `IndexError`. `KeyError` hadde kommet hvis `dag` manglet. Uttrykket evalueres fra venstre, så du må avgjøre hvilket av de to oppslagene som feiler først.",
    },
    {
      question: "Programmet gjør `print(sys.argv)` uten `import sys` øverst. Hvilken exception utløses?",
      options: ["`NameError`", "`ImportError`", "`AttributeError`", "`IndexError`"],
      explanation: "Navnet `sys` er aldri blitt tilordnet, så Python gir `NameError: name 'sys' is not defined`. `ImportError` krever at du faktisk forsøkte en import som mislyktes. Dette er en fast plantet feil i «finn feilen»-oppgaver, sammen med `sqrt(2)` uten `from math import sqrt`.",
    },
    {
      question: "Når kjøres `finally`-blokken i en `try`-setning?",
      options: ["Alltid, både med og uten feil", "Bare når ingen feil oppsto", "Bare når en feil oppsto", "Bare når feilen ikke ble fanget"],
      explanation: "`finally` kjøres i alle tilfeller og brukes til opprydding. Blokken som kjøres bare når alt gikk bra, heter `else`. Det finnes ingen blokk som kjøres bare når feilen var ufanget.",
    },
    {
      question: "Programmet kjøres som `python3 p.py 6 2`. Hva er `len(sys.argv)`?",
      options: ["3", "2", "4", "6"],
      explanation: "Lista er `['p.py', '6', '2']`, altså tre elementer, fordi programnavnet ligger på indeks 0. Svaret 2 er den klassiske tellefeilen som gjør at kandidater bommer på `IndexError`-radene. 4 ville krevd tre argumenter, og 6 er en verdi, ikke et antall.",
    },
    {
      question: "`verdier = ['4', 'x']`, og for hver `v` gjør programmet `print(10 / int(v))` inne i en `try` med `except ValueError: print('V')` og `except ZeroDivisionError: print('Z')`. Hva skrives ut?",
      options: ["`2.5` og deretter `V`", "`2.5` og deretter `Z`", "`2` og deretter `V`", "`V` og deretter `2.5`"],
      explanation: "For `'4'` gir `10 / 4` flyttallet `2.5` — `/` gir alltid float i Python 3. For `'x'` feiler `int('x')` før divisjonen, så `ValueError`-blokken kjører og skriver `V`. `Z` ville krevd at konverteringen lyktes og verdien var 0.",
    },
    {
      question: "Hva gjør `raise ValueError('for kald')` inne i en funksjon?",
      options: ["Utløser en `ValueError` med den meldingen", "Skriver meldingen og fortsetter kjøringen", "Returnerer meldingen til den som kalte", "Fanger en `ValueError` som allerede har oppstått"],
      explanation: "`raise` utløser exceptionen der og da, med teksten som melding; funksjonen returnerer ingenting. Den skriver ikke bare ut noe, og den fanger ingenting — å fange er `except` sin jobb. Fanges den utenfor, oppfører den seg som alle andre `ValueError`-er.",
    },
    {
      question: "Hvilket alternativ er den vanligste årsaken til tapte poeng på exception-matching?",
      options: ["Å svare med en feil som ligger lenger ned i programmet", "Å velge en feiltype som ikke finnes i Python", "Å bruke for lang tid på hver rad", "Å svare «ingen feil» på for mange rader"],
      explanation: "Kandidaten finner en mulig feil lenger ned og svarer med den, uten å sjekke at programmet i det hele tatt kommer dit — derfor er steg 3 i oppskriften «stopp ved den første umulige operasjonen». Alternativlista i oppgaven inneholder bare gyldige feiltyper, så det er ikke der problemet ligger. Tidsbruk er sjelden en begrensning på en fire-radstabell.",
    },
    {
      question: "`snitt.py` gjør `tall = sys.argv[1:]` og til slutt `print(sum_tall / len(tall))`. Hva skjer ved `python3 snitt.py`?",
      options: ["`ZeroDivisionError`", "`IndexError`", "`ValueError`", "Programmet skriver `0.0`"],
      explanation: "Utsnittet gir den tomme lista, løkka kjører null ganger, og `len(tall)` er 0 — så divisjonen feiler med `ZeroDivisionError`. `IndexError` er utelukket nettopp fordi utsnitt aldri feiler. Ingenting konverteres feil, så `ValueError` er også ute.",
    },
    {
      question: "Hva er `sys.argv[1]` når programmet kjøres som `python3 p.py 007`?",
      options: ["Strengen `'007'`", "Heltallet 7", "Heltallet 007", "Flyttallet 7.0"],
      explanation: "Alle elementene i `sys.argv` er strenger, så du får `'007'` med begge nullene bevart. Skal du regne, må du selv kalle `int` — og `int('007')` gir 7, siden ledende nuller er lovlige for `int`. Python konverterer aldri kommandolinjeargumenter for deg.",
    },
    {
      question: "I en `try` med `except Exception` først og `except ValueError` etter utløses en `ValueError`. Hvilken blokk kjører?",
      options: ["`except Exception`, fordi den står først", "`except ValueError`, fordi den er mest spesifikk", "Begge, i den rekkefølgen de står", "Ingen — Python gir en feil om at blokkene er i gal rekkefølge"],
      explanation: "Python bruker den første `except` som passer, og `Exception` passer til alt, så den generelle blokken kjører. Python velger ikke den mest spesifikke, og bare én blokk kjøres per feil. Rekkefølgen gir ingen feilmelding — koden kjører, den gjør bare noe annet enn du trodde.",
    },
    {
      question: "Hvor mange rader i en typisk exception-matche-tabell er «ingen feil»?",
      options: ["Vanligvis minst én", "Aldri noen", "Alltid nøyaktig to", "Alle unntatt én"],
      explanation: "Settene tar nesten alltid med ett kall som går helt gjennom, for å sjekke at du faktisk sporer koden i stedet for å lete etter feil overalt. Å anta at hver rad må ha en feil, koster typisk et halvt poeng. Noen sett har to slike rader, men det er ikke fast.",
    },
  ],
  'in1900-3-1': [
    {
      question: "Variabelen `x` er 5, og programmet kjører linja `assert x > 0`. Hva skjer?",
      options: ["Ingenting skjer, og programmet fortsetter på neste linje", "Programmet skriver `True` og fortsetter på neste linje", "Programmet stopper og skriver `AssertionError` i terminalen", "Programmet skriver `x > 0` og fortsetter på neste linje"],
      explanation: "En `assert` med en sann påstand er helt taus: den skriver ingenting og returnerer ingenting, og programmet går videre som om linja ikke sto der. Alternativ b) og d) forutsetter at `assert` skriver ut noe — det gjør den aldri. Alternativ c) er det som skjer når påstanden er **usann**.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef test_f():\n    expected = 6\n    computed = 2*3\n    tol = 1e-10\n    assert abs(expected - computed) < tol, 'feil'\n\ntest_f()\nprint('A')\n```",
      options: ["Bare `A` — testen er stille når den går gjennom", "Bare `feil` — meldingen skrives ut av `assert`", "Både `True` og `A`, på hver sin linje i terminalen", "Ingenting — `assert` stopper programmet på den linja"],
      explanation: "Avviket er `abs(6 - 6)`, altså 0, som er mindre enn toleransen, så `assert` gjør ingenting og `print('A')` kjøres. Meldingen `'feil'` vises bare hvis påstanden er usann (b), og `assert` skriver aldri `True` (c). Alternativ d) er svaret hvis du tror `assert` alltid avbryter.",
    },
    {
      question: "Hva skriver `print(0.1 + 0.2 == 0.3)` ut, og hvorfor?",
      options: ["`False`, fordi summen blir 0.30000000000000004", "`True`, fordi 0.1 og 0.2 til sammen blir 0.3", "`False`, fordi `==` aldri virker mellom to tall", "`0.30000000000000004`, altså selve summen av de to"],
      explanation: "Flyttall er tilnærminger, og summen av tilnærmingene til 0,1 og 0,2 blir litt større enn tilnærmingen til 0,3. `==` krever at hvert siffer stemmer og gir derfor `False`. Alternativ c) er en overdrivelse: `==` virker helt fint mellom heltall, og er bit-for-bit-eksakt også for flyttall — det er nettopp derfor det svarer `False` her. Alternativ d) forveksler sammenligningen med selve summen.",
    },
    {
      question: "Hvilken linje er den riktige sjekken i en testfunksjon?",
      options: ["`assert abs(expected - computed) < tol, msg`", "`assert abs(expected - computed) > tol, msg`", "`assert expected - computed < tol, msg`", "`assert expected == computed, msg`"],
      explanation: "Fasiten er standardformen: absoluttverdien av avviket skal være **mindre** enn toleransen. Alternativ b) har snudd ulikheten og tester at svaret er galt. Alternativ c) mangler `abs`, så et hvilket som helst negativt avvik slipper gjennom. Alternativ d) er feil #11 — likhetstegn på flyttall.",
    },
    {
      question: "En rekke som kuttes etter få ledd avviker med om lag $3 \\cdot 10^{-5}$ fra den eksakte verdien. Hvilken toleranse er fornuftig i testfunksjonen?",
      options: ["`tol = 1e-4`, litt over det avviket metoden faktisk har", "`tol = 1e-12`, så nær maskinens nøyaktighet som mulig", "`tol = 0`, slik at bare helt eksakt like tall godtas", "`tol = 1e-1`, med god margin ned til alle slags avvik"],
      explanation: "Toleransen skal ligge like over avviket metoden faktisk har, og $10^{-4}$ er nærmeste trygge valg over $3 \\cdot 10^{-5}$. Alternativ b) og c) melder feil på helt riktig kode, siden metoden aldri kan bli så nøyaktig. Alternativ d) er så løs at den også ville sluppet gjennom en kode med reell feil, og en test som aldri feiler er ikke en test.",
    },
    {
      question: "Hva skjer når programmet kjøres?\n\n```python\ns = 0\nfor k in range(3):\n    s += k\n    print(s, end='-')\nassert s == 5, 'feil sum'\nprint('slutt')\n```",
      options: ["`0-1-3-` skrives, og deretter en `AssertionError`", "`0-1-3-slutt` skrives, og ingen feilmelding i det hele tatt", "`0-1-2-` skrives, og deretter en `AssertionError`", "`1-3-6-` skrives, og deretter en `AssertionError`"],
      explanation: "Løkka legger til 0, 1 og 2, så `s` er 0, 1 og 3 etter de tre rundene, og `end='-'` samler dem på én linje. Summen blir 3, ikke 5, så `assert` avbryter og `print('slutt')` nås aldri. Alternativ c) skriver løkkevariabelen i stedet for summen, og d) starter summeringen på 1.",
    },
    {
      question: "Hvilken linje starter en testfunksjon slik oppgaveteksten ber om?",
      options: ["`def test_sum_rekke():` — helt uten argumenter", "`def test_sum_rekke(x, N):` — med to argumenter", "`def sum_rekke_test(x):` — med navnet bakerst", "`def test_sum_rekke:` — helt uten parenteser"],
      explanation: "En testfunksjon heter `test_` pluss navnet på det som testes og har tomme parenteser: testverdiene velges inne i funksjonen. Alternativ b) er en helt vanlig funksjon, ikke en testfunksjon. Alternativ c) bryter navnekonvensjonen sensor ser etter. Alternativ d) er en syntaksfeil — `def` krever parenteser.",
    },
    {
      question: "Hva skriver en testfunksjon ut når alle sjekkene går gjennom?",
      options: ["Ingenting — den er helt taus når alt stemmer", "Teksten `True`, én gang per `assert`-linje i den", "Meldingen `msg` som står i `assert`-linja bakerst", "Verdien `None`, som er det funksjonen returnerer"],
      explanation: "En testfunksjon kommuniserer ved å stoppe programmet, ikke ved å skrive ut. Går alt bra, skjer ingenting. Alternativ b) og c) forutsetter at `assert` skriver noe. Alternativ d) blander sammen retur og utskrift: funksjonen returnerer riktignok `None`, men den verdien skrives ikke ut med mindre du selv ber om det.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nexpected = 10.0\ncomputed = 4.0\ntol = 1e-10\nprint(expected - computed < tol)\nprint(computed - expected < tol)\n```",
      options: ["`False` på første linje og `True` på den andre", "`True` på første linje og `False` på den andre", "`False` på begge linjene, siden avviket er hele 6", "`True` på begge linjene, siden `abs` mangler helt"],
      explanation: "Første uttrykk er $10 - 4 = 6$, som ikke er mindre enn $10^{-10}$, altså `False`. Andre uttrykk er $4 - 10 = -6$, som er mindre enn toleransen, altså `True` — enda avviket er like stort. Det er nettopp derfor `abs` må stå der: uten den godtar testen ethvert negativt avvik.",
    },
    {
      question: "Hva skriver `print(sqrt(2)**2 == 2)` ut, når `sqrt` er importert fra `math`?",
      options: ["`False`, fordi resultatet blir 2.0000000000000004", "`True`, fordi kvadratroten opphøyd i andre er 2", "`False`, fordi `**` alltid gir et helt tall tilbake", "`True`, fordi Python runder av før den sammenligner"],
      explanation: "Kvadratroten av 2 lagres som en tilnærming, og kvadratet av tilnærmingen ligger ett siste siffer over 2. `==` fanger den forskjellen. Alternativ c) gir riktig svar av gal grunn — `**` gir flyttall når grunntallet er et flyttall. Alternativ d) beskriver noe Python ikke gjør: det finnes ingen automatisk avrunding før en sammenligning.",
    },
    {
      question: "Hvilken importsetning henter kvadratrot og eksponentialfunksjon fra `math`?",
      options: ["`from math import sqrt, exp`", "`import sqrt, exp from math`", "`from sqrt, exp import math`", "`import math.sqrt, math.exp`"],
      explanation: "Formen er `from modul import navn`: modulen står først, deretter navnene. Alternativ b) er feil #10 — importsetningen skrevet i motsatt rekkefølge, en klassisk felle i «finn feilen»-oppgaver. Alternativ c) bytter om modul og navn, og d) er ikke gyldig syntaks for å importere enkeltfunksjoner.",
    },
    {
      question: "En testfunksjon setter `expected` til nøyaktig det samme uttrykket som står inne i funksjonen den tester. Hva er problemet?",
      options: ["Testen går gjennom selv om formelen er helt feil", "Testen kan ikke bruke `exp` og `log` på begge sider", "To like uttrykk gir alltid avvik i det siste sifferet", "Verdien i `expected` må være et helt tall i en test"],
      explanation: "Fasiten må komme fra en uavhengig kilde — håndregning, en kjent eksakt verdi eller `math` — ellers sammenligner du koden med seg selv, og feil i formelen oppdages aldri. Alternativ b) og d) er oppdiktede regler. Alternativ c) er galt: nøyaktig samme uttrykk regnet på samme måte gir nøyaktig samme flyttall.",
    },
    {
      question: "Hva skjer når programmet kjøres?\n\n```python\nfasit = [1.0, 2.0, 9.0]\nregnet = [1.0, 2.0, 3.0]\ntol = 1e-10\nfor e, c in zip(fasit, regnet):\n    print(e, end=' ')\n    assert abs(e - c) < tol, 'avvik'\nprint('ferdig')\n```",
      options: ["`1.0 2.0 9.0 ` skrives, og deretter en `AssertionError`", "`1.0 2.0 ` skrives, og deretter en `AssertionError`", "`1.0 2.0 9.0 ferdig` skrives, uten noen feilmelding", "Ingen utskrift, siden `assert` feiler i tredje runde"],
      explanation: "`print` står **før** `assert` i løkkekroppen, så tallet 9.0 rekker å bli skrevet før sjekken feiler i tredje runde. Alternativ b) er svaret hvis du tror `assert` kjøres først. Alternativ c) overser at 9 og 3 er ulike, og d) overser at de to første rundene fullførte.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntider = [0.0, 1.0, 2.0]\nfasit = [5.0, 7.0]\nfor t, e in zip(tider, fasit):\n    print(t, e)\n```",
      options: ["To linjer: `0.0 5.0` og så `1.0 7.0`", "Tre linjer, der den siste blir `2.0 None`", "To linjer: `0.0 5.0` og så `2.0 7.0`", "Tre linjer, der den siste blir hoppet over"],
      explanation: "`zip` stopper ved den korteste sekvensen, så tallet 2.0 blir aldri brukt, og løkka går to runder. Dette er feil #17 — `zip` fyller ikke ut den korte lista med `None` (b) og hopper ikke over noe underveis (d). Alternativ c) parer feil elementer: `zip` tar dem i rekkefølge, ikke fra hver sin ende.",
    },
  ],
  'in1900-3-2': [
    {
      question: "Summen $\\sum_{k=0}^{N} x^k/k!$ skal implementeres. Hvilken løkkelinje er riktig?",
      options: ["`for k in range(N+1):`", "`for k in range(N):`", "`for k in range(1, N):`", "`for k in range(0, N, 2):`"],
      explanation: "Summen går til **og med** $N$, og stoppverdien i `range` er eksklusiv, så øvre grense må være `N+1`. Alternativ b) er felle #1, av-én-feilen: den mister det siste leddet. Alternativ c) hopper i tillegg over ledd null, og d) tar bare annethvert ledd.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 0\nfor k in range(4):\n    s += 2*k\nprint(s)\n```",
      options: ["`12`", "`20`", "`6`", "`8`"],
      explanation: "`range(4)` gir 0, 1, 2 og 3, så summen er $0+2+4+6 = 12$. Alternativ b) er svaret hvis du tror løkka går til og med 4. Alternativ c) summerer bare `k` uten faktoren 2, og d) tar bare det siste leddet.",
    },
    {
      question: "Hva er `factorial(0)`?",
      options: ["1", "0", "En feilmelding", "Ikke definert"],
      explanation: "Fakultet av null er definert som 1, og det er derfor ledd nummer null i eksponentialrekka blir $x^0/0! = 1$. Alternativ b) er den vanligste gjetningen. `factorial` gir bare feil for negative tall og for flyttall, ikke for null.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(-1**2, (-1)**2)\n```",
      options: ["`-1 1`", "`1 1`", "`-1 -1`", "`1 -1`"],
      explanation: "Potensoperatoren binder sterkere enn det unære minustegnet, så `-1**2` leses som `-(1**2)`, altså $-1$. Med parentes rundt minus én blir svaret $(-1)^2 = 1$. Det er grunnen til at alternerende fortegn alltid skrives `(-1)**k`.",
    },
    {
      question: "Hvor skal `s = 0` stå i en funksjon som summerer en rekke?",
      options: ["Før løkka", "Inne i løkka, som første linje", "Etter løkka, før `return`", "Som argument til funksjonen"],
      explanation: "Akkumulatoren nullstilles én gang, før løkka begynner. Alternativ b) nullstiller summen hver runde, så funksjonen returnerer bare siste ledd. Alternativ c) sletter alt du har summert. Alternativ d) ville krevd at den som kaller funksjonen sender inn en startverdi, og det ber ingen oppgave om.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef sum_til(N):\n    s = 0\n    for k in range(N+1):\n        s += k\n        return s\n\nprint(sum_til(4))\n```",
      options: ["`0`", "`10`", "`4`", "`1`"],
      explanation: "`return` står **inne** i løkka, så funksjonen avbrytes allerede i første runde, der `k` er 0 og `s` er 0. Alternativ b) er svaret når `return` står riktig, altså etter løkka. Alternativ c) og d) forutsetter at løkka rekker flere runder.",
    },
    {
      question: "Rekka $\\sinh x = \\sum_{n=0}^{N} x^{2n+1}/(2n+1)!$ skal implementeres. Hvilken linje er leddet?",
      options: ["`s += x**(2*n+1) / factorial(2*n+1)`", "`s += x**(2*n+1) / factorial(n)`", "`s += x**n / factorial(2*n+1)`", "`s += x**(2*n) / factorial(2*n)`"],
      explanation: "Uttrykket $2n+1$ skal stå **både** i eksponenten og i fakultetet — det er den vanligste kontrollen i oddetallsrekker. Alternativ b) og c) har ulik indeksering i teller og nevner. Alternativ d) er partallsvarianten, som hører til cosinusrekka.",
    },
    {
      question: "Hvilken importsetning er gyldig i Python?",
      options: ["`from math import factorial`", "`import factorial from math`", "`from factorial import math`", "`import math factorial`"],
      explanation: "Formen er `from modul import navn`, altså modulen først. Alternativ b) er felle #10 — importsetningen skrevet i motsatt rekkefølge, en klassisk plantet feil i «finn feilen»-oppgaver. Alternativ c) bytter om de to navnene, og d) er ikke gyldig syntaks.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfrom math import factorial\nprint(factorial(4) / factorial(3))\n```",
      options: ["`4.0`", "`4`", "`24`", "`1.0`"],
      explanation: "$4! = 24$ og $3! = 6$, og $24/6 = 4$. Fordi `/` alltid gir flyttall, skrives svaret som `4.0` med punktum. Alternativ b) er svaret hvis du tror divisjonen gir heltall — det ville krevd `//`. Alternativ c) er bare telleren.",
    },
    {
      question: "Hvor mange ledd har summen $\\sum_{k=1}^{N}$ når $N = 6$?",
      options: ["6", "7", "5", "12"],
      explanation: "Summen starter på 1 og går til og med 6, altså seks ledd, og løkka skrives `for k in range(1, N+1):`. Alternativ b) er antall ledd når summen starter på 0 — det er nettopp forskjellen på de to startverdiene. Alternativ c) glemmer at både 1 og 6 er med.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfor k in range(3):\n    print((-1)**k, end=' ')\n```",
      options: ["`1 -1 1 `", "`-1 1 -1 `", "`1 1 1 `", "`0 1 2 `"],
      explanation: "Partall gir 1, oddetall gir $-1$, og `k` går 0, 1, 2. Legg merke til det avsluttende mellomrommet: `end=' '` erstatter linjeskiftet. Alternativ b) starter feil vei og svarer til `(-1)**(k+1)`. Alternativ d) skriver løkkevariabelen i stedet for potensen.",
    },
    {
      question: "En rekurrens $T_{n+1} = 2xT_n - T_{n-1}$ skal løses. Hva er riktig rekkefølge inne i løkka?",
      options: ["Regn ny verdi, flytt så lagrene", "Flytt lagrene, regn så ny verdi", "Flytt lagrene to ganger etter hverandre", "La funksjonen kalle seg selv per ledd"],
      explanation: "Den nye verdien må regnes ut mens **begge** de gamle fortsatt finnes; derfor en hjelpevariabel først. Alternativ b) overskriver `T_forrige` før den er brukt, så formelen får feil tall. Alternativ d) er en teknikk som ligger utenfor pensum i IN1900 og markeres uønsket i fasit.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\na = 1.0\nb = 2.0\nfor k in range(2):\n    c = a + b\n    a = b\n    b = c\nprint(a, b)\n```",
      options: ["`3.0 5.0`", "`5.0 8.0`", "`2.0 3.0`", "`5.0 3.0`"],
      explanation: "Første runde gir `c = 3.0`, `a = 2.0`, `b = 3.0`. Andre runde gir `c = 5.0`, `a = 3.0`, `b = 5.0`. Alternativ b) er verdiene etter tre runder, og c) etter bare én. Alternativ d) har byttet om de to variablene — hjelpevariabelen `c` finnes nettopp for at flyttingen skal skje i riktig rekkefølge.",
    },
    {
      question: "Hvilken rekke trenger flest ledd for å treffe ti riktige desimaler?",
      options: ["$\\sum x^{2n+1}/(2n+1)$", "$\\sum x^k/k!$", "$\\sum x^{2n+1}/(2n+1)!$", "$\\sum (-1)^k x^{2k}/(2k)!$"],
      explanation: "Nevneren i alternativ a) vokser bare lineært, mens de tre andre har fakultet i nevneren og konvergerer svært raskt. Det er derfor invers tangens hyperbolicus trenger titalls ledd der eksponentialrekka klarer seg med under ti.",
    },
    {
      question: "En testfunksjon skal sjekke en rekke som er kuttet etter få ledd, med avvik rundt $10^{-5}$. Hvilken toleranse passer?",
      options: ["`tol = 1e-4`", "`tol = 1e-12`", "`tol = 0`", "`tol = 1e-1`"],
      explanation: "Toleransen skal ligge like over det avviket metoden faktisk har. Alternativ b) og c) melder feil på helt riktig kode, siden rekka aldri kan bli så nøyaktig med få ledd. Alternativ d) er så løs at den også ville sluppet gjennom kode med en reell feil.",
    },
    {
      question: "Hva gir `chebyshev(2, 0.5)` når $T_0 = 1$, $T_1 = x$ og $T_{n+1} = 2xT_n - T_{n-1}$?",
      options: ["-0.5", "0.5", "1.0", "-1.0"],
      explanation: "$T_2 = 2\\cdot 0{,}5\\cdot 0{,}5 - 1 = 0{,}5 - 1 = -0{,}5$. Alternativ b) glemmer å trekke fra $T_0$. Alternativ c) er $T_0$ selv, og d) er $T_3$ — svaret du får hvis løkka går én runde for mye.",
    },
    {
      question: "Hva er første ledd i rekka $\\sum_{n=0}^{N} x^{2n+1}/(2n+1)!$?",
      options: ["$x$", "1", "$x^2/2$", "$x^3/6$"],
      explanation: "Med $n = 0$ er eksponenten 1 og nevneren $1! = 1$, så leddet er $x$ selv. Dette er en gratis kontroll på eksamen: gir funksjonen din noe annet for $N = 0$, er indekseringen gal. Alternativ d) er ledd nummer **én**, ikke null.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfrom math import factorial\ns = 0\nfor k in range(3):\n    s += 1 / factorial(k)\nprint(s)\n```",
      options: ["`2.5`", "`3.0`", "`1.5`", "`2.0`"],
      explanation: "Leddene er $1/0! = 1$, $1/1! = 1$ og $1/2! = 0{,}5$, altså 2,5 til sammen. Alternativ c) glemmer ett av de to leddene med nevner 1. Alternativ b) og d) forutsetter feil verdi av `factorial(0)`, som er 1 og ikke 0.",
    },
  ],
  'in1900-3-3': [
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 0\nfor k in range(1, 4):\n    s += (-1)**k * k\nprint(s)\n```",
      options: ["`-2`", "`2`", "`6`", "`0`"],
      explanation: "Leddene er $-1$, $+2$ og $-3$, altså $-2$ til sammen. Alternativ b) har snudd fortegnet og svarer til `(-1)**(k+1)`. Alternativ c) glemmer fortegnsfaktoren helt, og d) forutsetter at leddene kansellerer.",
    },
    {
      question: "En oppgave sier «summer leddene fra $n = 0$ til og med $n = N$». Hvilken løkkelinje er riktig?",
      options: ["`for n in range(N+1):`", "`for n in range(N):`", "`for n in range(1, N):`", "`for n in range(N-1):`"],
      explanation: "«Til og med $N$» krever `range(N+1)`, siden stoppverdien er eksklusiv. Alternativ b) er felle #1 og mister siste ledd. Alternativ c) hopper i tillegg over ledd null, og d) mister to ledd.",
    },
    {
      question: "Rekka $\\sum_{n=0}^{N} x^{2n}/(2n)!$ skal implementeres. Hvilket ledd er riktig?",
      options: ["`s += x**(2*n) / factorial(2*n)`", "`s += x**(2*n) / factorial(n)`", "`s += x**n / factorial(2*n)`", "`s += x**(2*n+1) / factorial(2*n+1)`"],
      explanation: "Uttrykket `2*n` skal stå både i eksponenten og i fakultetet. Alternativ b) og c) har ulik indeksering i teller og nevner. Alternativ d) er oddetallsvarianten, som hører til sinus hyperbolicus.",
    },
    {
      question: "Hva skjer når denne funksjonen kalles med `N = 4`?\n\n```python\ndef rekke(N):\n    s = 0\n    for k in range(N+1):\n        s += k\n        return s\n```",
      options: ["Den returnerer 0", "Den returnerer 10", "Den returnerer 4", "Den gir en feilmelding"],
      explanation: "`return` står inne i løkka, så funksjonen avbrytes i første runde der `k` og `s` begge er 0. Alternativ b) er svaret når `return` står riktig, altså etter løkka. Alternativ d) forutsetter en feil som ikke oppstår — koden er syntaktisk gyldig.",
    },
    {
      question: "Hvor skal `s = 0` stå?",
      options: ["Før løkka", "Som første linje inne i løkka", "Rett før `return`", "I funksjonssignaturen"],
      explanation: "Akkumulatoren nullstilles én gang, før løkka. Alternativ b) nullstiller hver runde og gir bare siste ledd. Alternativ c) sletter hele summen. Alternativ d) ville gjort startverdien til noe den som kaller funksjonen må sende inn.",
    },
    {
      question: "En rekke kuttet etter få ledd avviker med om lag $5\\cdot 10^{-7}$. Hvilken toleranse passer i testfunksjonen?",
      options: ["`1e-6`", "`1e-12`", "`1e-16`", "`1e-1`"],
      explanation: "Toleransen skal ligge like over avviket metoden faktisk har. Alternativ b) og c) melder feil på helt riktig kode. Alternativ d) er så løs at kode med reelle feil også ville sluppet gjennom, og en test som aldri feiler er ikke en test.",
    },
    {
      question: "Hva gir `arcsin_rekke(x, 0)` når rekka er $\\sum_{n=0}^{N} \\frac{(2n)!}{4^n (n!)^2(2n+1)}x^{2n+1}$?",
      options: ["$x$", "1", "0", "$x^3/6$"],
      explanation: "Med $n = 0$ er $0! = 1$, $4^0 = 1$ og $2n+1 = 1$, så leddet er $x$ selv. Dette er gratiskontrollen for oddetallsrekker. Alternativ b) er svaret for partallsrekker, og d) er ledd nummer én.",
    },
    {
      question: "Hvilken importsetning er riktig?",
      options: ["`from math import asin`", "`import asin from math`", "`from asin import math`", "`import math as asin`"],
      explanation: "Modulen står først: `from modul import navn`. Alternativ b) er felle #10, importsetningen i motsatt rekkefølge. Alternativ c) bytter om navnene. Alternativ d) er gyldig syntaks, men gir modulen et nytt navn og importerer ingen funksjon.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfrom math import factorial\nfor n in range(3):\n    print(factorial(2*n+1), end=' ')\n```",
      options: ["`1 6 120 `", "`1 2 24 `", "`1 3 5 `", "`0 6 120 `"],
      explanation: "Med $n = 0, 1, 2$ er $2n+1$ lik 1, 3 og 5, og fakultetene er 1, 6 og 120. Alternativ b) regner `factorial(2*n)`. Alternativ c) skriver oddetallet i stedet for fakultetet. Merk mellomrommet til slutt, som `end=' '` gir.",
    },
    {
      question: "En rekurrens $T_{n+1} = 2xT_n - T_{n-1}$ skal løses med løkke. Hvilken oppdatering er riktig?",
      options: ["`T_neste = 2*x*T_denne - T_forrige`, så flytt lagrene", "Flytt lagrene, så `T_denne = 2*x*T_denne - T_forrige`", "`T_forrige = 2*x*T_denne - T_forrige`, uten flytting", "La funksjonen kalle seg selv for hvert ledd"],
      explanation: "Den nye verdien må regnes ut mens begge de gamle finnes, derfor hjelpevariabelen først. Alternativ b) overskriver `T_forrige` før den brukes. Alternativ c) mister `T_denne`. Alternativ d) er en teknikk utenfor pensum i IN1900 som markeres uønsket i fasit.",
    },
    {
      question: "Hva er riktig løkkegrense i en rekurrens som skal gi $T_n$, når $T_0$ og $T_1$ allerede er satt?",
      options: ["`for k in range(1, n):`", "`for k in range(1, n+1):`", "`for k in range(n+1):`", "`for k in range(2, n):`"],
      explanation: "Med $T_1$ på plass trengs $n-1$ steg for å nå $T_n$, altså `range(1, n)`. Alternativ b) gir ett steg for mye og returnerer $T_{n+1}$. Alternativ c) starter på 0 og gir to for mye. Alternativ d) gir ett for lite.",
    },
    {
      question: "Oppgaven sier: «summer leddene til det siste leddet er mindre enn `eps`». Hvilken løkketype passer?",
      options: ["`while`, siden antall runder er ukjent", "`for`, med `range(eps)` som grense", "`for`, med `range(1/eps)` som grense", "En løkke er unødvendig her"],
      explanation: "Når stoppkriteriet er en størrelse og ikke et antall, er `while` riktig, og leddnummeret telles opp for hånd. Alternativ b) og c) prøver å gjøre om en toleranse til et antall runder, som `range` uansett ikke godtar for flyttall.",
    },
    {
      question: "Hvorfor må `ledd` settes til en verdi større enn `eps` før en `while abs(ledd) > eps:`-løkke?",
      options: ["Ellers kjører løkka aldri", "Ellers blir summen for stor", "Ellers får `eps` feil datatype", "Ellers stopper løkka aldri"],
      explanation: "`while` sjekker betingelsen før første runde, så en for liten startverdi gjør at kroppen aldri kjøres. Startverdien er ikke selv et ledd i summen — den overskrives på første linje inne i løkka. Alternativ d) beskriver det motsatte problemet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ns = 0\nledd = 1.0\nk = 0\nwhile abs(ledd) > 0.3:\n    ledd = 0.5**k\n    s += ledd\n    k += 1\nprint(k, s)\n```",
      options: ["`3 1.75`", "`2 1.5`", "`4 1.875`", "`3 0.25`"],
      explanation: "Leddene er 1, 0.5 og 0.25. Etter det tredje er `abs(ledd)` lik 0.25, som ikke er større enn 0.3, så løkka stopper med `k` lik 3 og summen 1.75. Alternativ b) glemmer at leddet som utløser stoppen også ble lagt til, og d) skriver siste ledd i stedet for summen.",
    },
    {
      question: "En testfunksjon setter `expected` til nøyaktig samme uttrykk som funksjonen den tester. Hva er galt?",
      options: ["Testen går gjennom selv om formelen er feil", "Testen kan ikke bruke `math` på begge sider", "Like uttrykk gir alltid avvik i siste siffer", "Fasiten må alltid være et helt tall"],
      explanation: "Fasiten må komme fra en uavhengig kilde — `math`, en kjent eksplisitt formel eller håndregning. Ellers sammenligner du koden med seg selv. Alternativ c) er galt: samme uttrykk regnet på samme måte gir nøyaktig samme flyttall.",
    },
    {
      question: "Hvilken av rekkene trenger flest ledd for ti riktige desimaler?",
      options: ["$\\sum x^{2n+1}/(2n+1)$", "$\\sum x^{2n+1}/(2n+1)!$", "$\\sum x^{2n}/(2n)!$", "$\\sum x^k/k!$"],
      explanation: "Bare alternativ a) mangler fakultet i nevneren, så leddene minker lineært i stedet for eksplosivt. Invers tangens hyperbolicus trenger derfor titalls ledd der de tre andre klarer seg med under tjue.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef f(n, x):\n    if n == 0:\n        return 1.0\n    a = 1.0\n    b = x\n    for k in range(1, n):\n        c = 2*x*b - a\n        a = b\n        b = c\n    return b\n\nprint(f(2, 2.0), f(3, 2.0))\n```",
      options: ["`7.0 26.0`", "`2.0 7.0`", "`26.0 97.0`", "`7.0 7.0`"],
      explanation: "Med $x = 2$ er $T_2 = 2\\cdot 2\\cdot 2 - 1 = 7$ og $T_3 = 2\\cdot 2\\cdot 7 - 2 = 26$. Alternativ b) ligger ett steg bak, og c) ett steg foran — begge er typiske av-én-feil på løkkegrensen.",
    },
    {
      question: "I formelen $P_{n+1} = ((2n+1)xP_n - nP_{n-1})/(n+1)$ løkker du med variabelen `k`. Hvilken variabel skal stå i koeffisientene?",
      options: ["`k`, løkkevariabelen", "`n`, funksjonsargumentet", "`n+1`, altså neste leddnummer", "Det spiller ingen rolle"],
      explanation: "Koeffisientene hører til det leddnummeret løkka står på akkurat nå, altså `k`. Bruker du funksjonsargumentet `n`, får du samme koeffisienter i alle rundene og et helt annet polynom. Dette er navnekollisjonen mellom argumentet og leddnummeret.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nfrom math import factorial\ns = 0\nfor k in range(4):\n    s += 2**k / factorial(k)\nprint(f'{s:.4f}')\n```",
      options: ["`6.3333`", "`6.0000`", "`7.0000`", "`5.0000`"],
      explanation: "Leddene er 1, 2, 2 og 4/3, altså 6,3333. Alternativ b) glemmer det siste leddet, som er felle #1 i praksis. Alternativ c) er verdien med ett ledd for mye, og d) forutsetter feil verdi av `factorial(0)`.",
    },
    {
      question: "Hva er den vanligste konsekvensen av `range(N)` i stedet for `range(N+1)` i en rekkesum?",
      options: ["Ett ledd mangler, og testen feiler", "Programmet stopper med `IndexError`", "Summen blir dobbelt så stor", "Løkka går uendelig lenge"],
      explanation: "`range` er eksklusiv i den øvre enden, så du mister systematisk siste ledd. Alternativ b) hører til lister og arrayer, ikke til en ren sum. Alternativ d) kan bare skje med `while`. Feilen er stille — den gir feil svar, ikke feilmelding.",
    },
  ],
  'in1900-4-1': [
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(a + b)\n```",
      options: ["[4 6]", "[1 2 3 4]", "[4, 6]", "[3 8]"],
      explanation: "To arrays av samme lengde legges sammen element for element, og et array skrives ut uten komma. `[1 2 3 4]` er svaret hvis du tror `+` skjøter slik det gjør for lister (feil #5), `[4, 6]` er array-summen skrevet med listeformat, og `[3 8]` er det elementvise produktet.",
    },
    {
      question: "Hvor mange tall inneholder `np.linspace(0, 10, 21)`?",
      options: ["21 tall, med 0 og 10 blant dem", "20 tall, med 0 og 10 blant dem", "22 tall, med 0 og 10 blant dem", "11 tall, med 0 og 10 blant dem"],
      explanation: "Tredje argument til `np.linspace` er antall punkter, ikke antall intervaller: du får 21 punkter og dermed 20 intervaller av lengde 0,5. Svaret 20 er av-én-feilen #1, 22 kommer av å legge til ett i tillegg, og 11 er antallet du hadde fått med steglengde 1.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nt = np.linspace(0, 5, 11)\nprint(t[1] - t[0])\n```",
      options: ["0.5", "0.45454545454545453", "1.0", "0.55"],
      explanation: "Elleve punkter gir ti intervaller, så steglengden er $5/10 = 0.5$. Verdien 0.45 kommer av å dele på antall punkter minus null, altså $5/11$, 1.0 av å tro at `linspace` bruker steg 1, og 0.55 av å dele $5/11$ og runde av.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = [1, 2, 3]\nprint(x * 2)\n```",
      options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1 2 3 1 2 3]", "[2 4 6]"],
      explanation: "For en liste betyr `*` gjentakelse, så lista står to ganger etter hverandre med komma mellom tallene. `[2, 4, 6]` ville vært svaret hvis `x` var et array (da er `*` elementvis), og de to variantene uten komma er array-utskrifter — men `x` er en vanlig liste her.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nprint(np.zeros(3))\n```",
      options: ["[0. 0. 0.]", "[0 0 0]", "[0. 0. 0. 0.]", "[0.0, 0.0, 0.0]"],
      explanation: "`np.zeros(3)` gir tre nuller som flyttall, og flyttall skrives med punktum uten desimaler etter. `[0 0 0]` er heltallsformatet, fire nuller er av-én-feilen, og den siste varianten er listeformat med komma.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nprint(np.arange(1, 4, 1))\n```",
      options: ["[1 2 3]", "[1 2 3 4]", "[1. 2. 3.]", "[0 1 2 3]"],
      explanation: "`np.arange` stopper før stoppverdien, akkurat som `range`, så 4 er ikke med. Med heltallsargumenter blir også resultatet heltall, derfor ingen punktum. `[1 2 3 4]` er fellen med inklusiv stopp, og `[0 1 2 3]` overser at startverdien er 1.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = np.array([2.0, 4.0, 6.0])\nprint(a / 2)\n```",
      options: ["[1. 2. 3.]", "[1.0, 2.0, 3.0]", "[2. 4. 6.]", "[1 2 3]"],
      explanation: "Divisjon med ett tall utføres på hvert element, og resultatet er flyttall skrevet uten komma. Listeformatet med komma hører til lister, `[2. 4. 6.]` er tabellen uendret, og heltallsformatet stemmer ikke fordi elementene er flyttall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = np.array([10, 20, 30, 40])\nprint(a[1:3])\n```",
      options: ["[20 30]", "[20 30 40]", "[10 20 30]", "[20]"],
      explanation: "Slutindeksen i et utsnitt er eksklusiv, så `a[1:3]` gir element 1 og 2, altså 20 og 30. `[20 30 40]` er svaret hvis du tror sluttindeksen er inklusiv, `[10 20 30]` teller fra 1 i stedet for 0, og `[20]` forveksler utsnitt med indeksering.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = np.array([3, 7, 12, 20])\nprint(a[1:] - a[:-1])\n```",
      options: ["[4 5 8]", "[4 5 8 0]", "[3 7 12]", "[-4 -5 -8]"],
      explanation: "De to utsnittene har tre elementer hver, så differansen har tre: $7-3$, $12-7$ og $20-12$. Fire elementer er av-én-feilen (fire tall gir bare tre endringer), `[3 7 12]` er utsnittet `a[:-1]` alene, og fortegnene blir negative bare hvis du bytter om på de to utsnittene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.array([1, 4, 4, 7])\ny = np.array([1, 5, 4, 8])\nprint(sum(x == y))\n```",
      options: ["2", "False", "[ True False  True False]", "4"],
      explanation: "`x == y` gir et array med sann/falsk for hvert element, og den innebygde `sum` teller `True` som 1 — to elementer er like. `False` ville vært svaret om sammenligningen ga én verdi for hele tabellen, det boolske arrayet er mellomresultatet før summeringen, og 4 er antall elementer i alt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nA = np.zeros((2, 3))\nprint(A.shape, A.size)\n```",
      options: ["(2, 3) 6", "(3, 2) 6", "(2, 3) 5", "(2, 3) (6,)"],
      explanation: "`.shape` gir formen som tuppel med rader først og kolonner sist, og `.size` gir antall tall i alt, altså $2 \\cdot 3 = 6$. `(3, 2)` bytter om aksene, 5 er en ren telle-feil, og `.size` er alltid ett tall og aldri en tuppel.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nA = np.zeros((2, 3))\nA[1, 0] = 4.0\nA[1, 2] = 9.0\nprint(A[1, :])\n```",
      options: ["[4. 0. 9.]", "[0. 4. 9.]", "[4. 9.]", "[0. 0.]"],
      explanation: "`A[1, :]` er hele rad 1, altså tre tall: kolonne 0 er satt til 4, kolonne 1 er fortsatt 0, og kolonne 2 er 9. `[0. 4. 9.]` plasserer nullen først, `[4. 9.]` glemmer det urørte elementet, og `[0. 0.]` er kolonneutsnittet `A[:, 1]`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.array([4.0, 9.0])\nprint(np.sqrt(x))\n```",
      options: ["[2. 3.]", "[2.0, 3.0]", "[4. 9.]", "[2. 3. ]"],
      explanation: "En ufunksjon som `np.sqrt` virker på hvert element og gir et array av samme lengde, skrevet uten komma. Listeformatet med komma er feil format, `[4. 9.]` er tabellen uendret, og et ekstra mellomrom før klammen setter NumPy bare når tallene har ulikt antall desimaler.",
    },
    {
      question: "Hva skjer hvis du kaller `math.sqrt(x)` der `x` er et NumPy-array med fem elementer?",
      options: ["Programmet stopper med en `TypeError`, fordi `math.sqrt` bare tar ett tall", "Du får et array med fem kvadratrøtter, akkurat som med `np.sqrt`", "Du får kvadratroten av det første elementet, og resten forkastes", "Du får et array med fem nuller, fordi `math` ikke kjenner arrays"],
      explanation: "Funksjonene i `math` tar ett tall om gangen, og et array med flere elementer kan ikke gjøres om til ett tall — derfor en `TypeError`. Skal koden virke på en hel tabell, må den bruke `np.sqrt`. Ingen av de andre alternativene skjer: Python velger ikke stilltiende ett element eller nuller.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nprint(np.array([1, 2, 3]) ** 2)\n```",
      options: ["[1 4 9]", "[1 2 3 1 2 3]", "[2 4 6]", "[1. 4. 9.]"],
      explanation: "Potens er elementvis for arrays, så hvert element kvadreres, og heltall inn gir heltall ut. Den gjentatte tabellen er hva `* 2` ville gitt for en liste, `[2 4 6]` er dobling i stedet for kvadrering, og flyttallformatet krever at minst ett element var flyttall.",
    },
    {
      question: "Du skal lage et array med 101 punkter i intervallet fra 1 til 10, med begge endepunktene inkludert. Hvilken linje er riktig?",
      options: ["`x = np.linspace(1, 10, 101)`", "`x = np.linspace(1, 10, 100)`", "`x = np.arange(1, 10, 101)`", "`x = np.linspace(1, 11, 101)`"],
      explanation: "Tredje argument til `np.linspace` er antall punkter, så 101 gir 101 punkter og 100 intervaller. Med 100 som tredje argument får du 100 punkter (feil #1), `np.arange` tolker tredje argument som steglengde, og 11 som sluttverdi flytter høyre endepunkt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nt = np.linspace(0, 1, 4)\nu = np.zeros_like(t)\nprint(u.size, t.size)\n```",
      options: ["4 4", "3 4", "4 3", "5 4"],
      explanation: "`np.zeros_like(t)` gir et nullarray med nøyaktig samme lengde som `t`, og `t` har fire punkter fordi tredje argument er antall punkter. Alternativene med 3 kommer av å telle intervaller i stedet for punkter, og 5 av å legge til ett i tillegg.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nA = np.zeros((2, 2))\nfor i in range(2):\n    for j in range(2):\n        A[i, j] = i + j\nprint(A[:, 1])\n```",
      options: ["[1. 2.]", "[1. 1.]", "[0. 1.]", "[1. 2. ]"],
      explanation: "Kolonne 1 består av elementene med `j` lik 1, altså $0+1$ og $1+1$. `[1. 1.]` er svaret hvis du glemmer at `i` også endrer seg, `[0. 1.]` er kolonne 0, og et ekstra mellomrom foran klammen bruker NumPy ikke her.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(a * b)\n```",
      options: ["[3 8]", "[4 6]", "11", "[3 4 6 8]"],
      explanation: "Multiplikasjon mellom to arrays er elementvis: $1 \\cdot 3$ og $2 \\cdot 4$. `[4 6]` er summen, 11 er indreproduktet (som `*` ikke regner ut i NumPy), og fire elementer ville krevd at operasjonen skjøtet tabellene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.array([0, 2, 5])\nprint(x > 1)\n```",
      options: ["[False  True  True]", "True", "[0 2 5]", "[ True  True False]"],
      explanation: "En sammenligning med et tall gjøres elementvis og gir et array av sann/falsk, ett per element. NumPy setter et ekstra mellomrom foran `True` slik at kolonnene står rett under `False`. `True` ville vært svaret om sammenligningen ga én verdi, og den siste varianten snur rekkefølgen.",
    },
  ],
  'in1900-4-2': [
    {
      question: "En oppgave ber om en tabell med 41 punkter i intervallet $[0, 8]$. Hva er steglengden mellom nabopunkter?",
      options: ["0.2, fordi 41 punkter gir 40 intervaller", "0.195, fordi $8/41$ er avstanden mellom punktene", "0.4, fordi $8/20$ er avstanden mellom punktene", "8.0, fordi hele intervallet er ett steg"],
      explanation: "Steglengden er intervallets lengde delt på antall **intervaller**, og 41 punkter gir 40 intervaller: $8/40 = 0.2$. Svaret 0.195 kommer av å dele på antall punkter — den vanligste varianten av av-én-feilen #1 — mens 0.4 og 8.0 svarer til 21 og 2 punkter, altså andre punktantall enn det oppgaven ba om.",
    },
    {
      question: "Hvilken linje lager tabellen i den vektoriserte malen når oppgaven ber om N intervaller?",
      options: ["`x = np.linspace(start, stop, N+1)`", "`x = np.linspace(start, stop, N)`", "`x = np.arange(start, stop, N+1)`", "`x = np.zeros(N+1)`"],
      explanation: "Tredje argument til `np.linspace` er antall punkter, og N intervaller gir N+1 punkter. Med `N` som tredje argument mangler du ett punkt (feil #1), `np.arange` tolker tredje argument som steglengde, og `np.zeros` lager bare nuller uten noe punktgitter.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nN = 4\nstart, stop = 0.0, 1.0\nx = []\ndx = (stop - start)/N\nfor i in range(N+1):\n    x.append(start + i*dx)\nprint(len(x), x[-1])\n```",
      options: ["5 1.0", "4 1.0", "5 0.8", "4 0.75"],
      explanation: "Løkka går over `range(5)`, altså fem runder, og siste punkt er `start + 4*dx` med `dx = 0.25`, som blir 1.0. Fire elementer ville vært svaret med `range(N)`, og 0.8 kommer av å dele steglengden på `N+1` i stedet for `N`.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nN = 4\nstart, stop = 0.0, 1.0\nx = []\ndx = (stop - start)/(N+1)\nfor i in range(N+1):\n    x.append(start + i*dx)\nprint(len(x), x[-1])\n```",
      options: ["5 0.8", "5 1.0", "4 0.8", "6 1.0"],
      explanation: "Antallet er riktig — fem punkter — men steglengden ble $1/5 = 0.2$ i stedet for $1/4 = 0.25$, så tabellen slutter på 0.8 og dekker ikke hele intervallet. Dette er den varianten av feil #1 som er vanskeligst å oppdage, fordi punktantallet stemmer.",
    },
    {
      question: "Oppgaveteksten sier «lag tabellen uten bruk av løkke». Hva innebærer det?",
      options: ["Ingen `for`, ingen `while` og ingen `.append` — bare `np.linspace` og funksjonen brukt på arrayet", "At du skal lage plassen med `np.zeros` og deretter fylle tabellen punkt for punkt med en `for`-løkke", "At du skal bruke `while` i stedet for `for`, siden det bare er `for` som regnes som en løkke i Python", "At tabellen skal skrives ut uten løkke, men gjerne regnes ut med løkke først, slik at utskriften blir én linje"],
      explanation: "«Uten bruk av løkke» betyr vektorisert: hele tabellen lages og regnes på i én operasjon per kolonne. Å fylle et `np.zeros`-array i en løkke er en løkke, `while` er også en løkke, og kravet gjelder utregningen — ikke bare utskriften.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.linspace(1, 4, 4)\ny = x**2\nprint(y)\n```",
      options: ["[ 1.  4.  9. 16.]", "[1. 4. 9. 16.]", "[ 1  4  9 16]", "[2. 4. 6. 8.]"],
      explanation: "Punktene er 1, 2, 3 og 4, og kvadrering er elementvis. NumPy setter av like bred plass til hvert tall, så det kommer et ekstra mellomrom foran de ensifrede — derfor `[ 1.  4.  9. 16.]`. Heltallsformatet `[ 1  4  9 16]` krever heltall inn, og `[2. 4. 6. 8.]` er dobling i stedet for kvadrering.",
    },
    {
      question: "Hvorfor kan `y = np.sqrt(x)` erstatte en hel løkke, mens `y = sqrt(x)` fra `math` ikke kan?",
      options: ["Fordi `np.sqrt` regner elementvis på hele arrayet, mens `math.sqrt` bare tar ett tall om gangen", "Fordi `np.sqrt` er langt raskere enn `math.sqrt`, men de gir nøyaktig samme resultat når argumentet er et array", "Fordi `math.sqrt` bare virker på heltall, mens `np.sqrt` også takler flyttall og derfor kan brukes på et punktgitter", "Fordi `np.sqrt` returnerer en vanlig liste, og en liste kan skrives ut i én linje mens et array må skrives ut i løkke"],
      explanation: "`np.sqrt` er en ufunksjon og virker på hele tabellen; `math.sqrt` tar ett tall og stopper programmet hvis argumentet er et array med flere elementer. Det er altså ikke en fartsforskjell, `math.sqrt` takler flyttall helt fint, og `np.sqrt` returnerer et array og ikke en liste.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.linspace(0, 1, 3)\ny = np.zeros(x.size)\nfor i in range(x.size):\n    y[i] = 10*x[i]\nprint(y)\n```",
      options: ["[ 0.  5. 10.]", "[0. 5. 10.]", "[ 0.  5. 10. ]", "[0 5 10]"],
      explanation: "Løkka fyller et ferdig array punkt for punkt, og punktene er 0, 0.5 og 1. NumPy retter kolonnene inn etter det bredeste tallet, så det står et ekstra mellomrom foran `0.` og `5.`. Denne mellomformen — `np.zeros` pluss løkke — er ikke vektorisering, men den er den vanligste formen i resten av boka.",
    },
    {
      question: "Hva skjer hvis du skriver `if x < 3:` der `x` er et array med fem elementer?",
      options: ["Programmet stopper med `ValueError`, fordi sammenligningen gir fem svar og ikke ett", "Testen blir sann hvis alle fem elementene er mindre enn 3", "Testen blir sann hvis minst ett av elementene er mindre enn 3", "Testen bruker bare det første elementet, og resten ignoreres"],
      explanation: "`x < 3` gir et boolsk array med fem verdier, og en `if` krever én sann/falsk-verdi — derfor `ValueError: The truth value of an array with more than one element is ambiguous`. Python velger ikke stilltiende «alle», «minst én» eller «den første»; trenger regelen en test per element, må du løkke over elementene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nx = []\nfor i in range(3):\n    x.append(2*i)\nx.append(100)\nprint(x, len(x))\n```",
      options: ["[0, 2, 4, 100] 4", "[0, 2, 4] 3", "[0, 2, 4, 100] 3", "[2, 4, 6, 100] 4"],
      explanation: "Løkka legger til tre elementer, og `.append` etter løkka legger til ett mer, så lista har fire. Tre elementer ville vært svaret om den siste linja manglet, og `[2, 4, 6, 100]` starter tellingen på `i = 1` i stedet for 0.",
    },
    {
      question: "En oppgave ber om «en tabell med 26 punkter i $[0, 5]$». Hva er N i malene, og hva er steglengden?",
      options: ["N er 25, og steglengden er 0.2", "N er 26, og steglengden er 0.2", "N er 25, og steglengden er 0.192", "N er 26, og steglengden er 0.192"],
      explanation: "N står for antall intervaller, og 26 punkter gir 25 intervaller, altså $5/25 = 0.2$. Å sette N lik antall punkter gir både feil løkkegrense og feil steglengde, og 0.192 er $5/26$ — divisjon på antall punkter i stedet for intervaller.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nt = np.linspace(0, 2, 5)\nprint(t[1] - t[0], t.size, t[-1])\n```",
      options: ["0.5 5 2.0", "0.4 5 2.0", "0.5 4 2.0", "0.5 5 1.5"],
      explanation: "Fem punkter fra 0 til 2 gir fire intervaller, så steglengden er $2/4 = 0.5$, antallet er 5, og siste punkt er sluttverdien 2.0. Verdien 0.4 kommer av å dele på antall punkter, 4 av å telle intervaller i stedet for punkter, og 1.5 av å tro at sluttverdien ikke er med.",
    },
    {
      question: "I hvilket av disse tilfellene er en løkke *nødvendig*, slik at ingen vektorisert linje kan erstatte den?",
      options: ["Når verdien i punkt `i` regnes ut fra verdien i punkt `i-1`", "Når funksjonen inneholder både kvadratrot og eksponentialfunksjon", "Når tabellen har flere enn 1000 punkter", "Når intervallet starter i et negativt tall"],
      explanation: "Er neste verdi avhengig av forrige, må punktene regnes ut i rekkefølge, og det er nettopp en løkke — dette er differenslikningene i [kap. 6.2](/bok/in1900/in1900-6-2). Sammensatte funksjoner, store tabeller og negative intervaller er alle uproblematiske for den vektoriserte malen.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nT = np.array([12.0, 8.0, 3.0])\nut = np.zeros(T.size)\nfor i in range(T.size):\n    if T[i] < 10.0:\n        ut[i] = 1.0\nprint(ut, sum(ut))\n```",
      options: ["[0. 1. 1.] 2.0", "[0. 1. 1.] 2", "[1. 0. 0.] 1.0", "[0. 1. 1.] 3.0"],
      explanation: "Bare de to siste temperaturene er under 10, så arrayet blir 0, 1, 1 og summen 2.0 — flyttall, fordi elementene er flyttall. Summen skrevet som `2` ville krevd heltallselementer, `[1. 0. 0.]` snur testen, og 3.0 er antall elementer i alt.",
    },
    {
      question: "Hvorfor skriver boka `dx = (stop - start)/N` i stedet for å skrive tallet direkte?",
      options: ["Fordi uttrykket er riktig også når `start`, `stop` eller `N` endres senere i oppgaven", "Fordi Python ikke godtar et desimaltall som steglengde i en løkke", "Fordi sensor trekker for tall som ikke er regnet ut i koden", "Fordi `dx` må være et array for at `.append` skal virke"],
      explanation: "Uttrykket dokumenterer hvor steglengden kommer fra og blir automatisk riktig om oppgaven senere ber deg endre N — det er derfor det er den trygge formen. Et desimaltall er helt lovlig som steglengde, sensor godtar `dx = 0.2` når det stemmer, og `dx` er ett tall og ikke et array.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.linspace(0, 3, 4)\ny = np.zeros(4)\nfor i in range(4):\n    y[i] = x[i]**2\nprint(y[1:] - y[:-1])\n```",
      options: ["[1. 3. 5.]", "[1. 3. 5. 7.]", "[0. 1. 4. 9.]", "[1. 4. 9.]"],
      explanation: "Tabellen `y` blir 0, 1, 4, 9, og differansen mellom nabopunkter har ett element mindre: 1, 3 og 5. Fire elementer er av-én-feilen, `[0. 1. 4. 9.]` er `y` selv, og `[1. 4. 9.]` er `y` uten det første elementet.",
    },
  ],
  'in1900-4-3': [
    {
      question: "Hvilken importlinje trengs for å plotte?",
      options: ["`import matplotlib.pyplot as plt`", "`import matplotlib as plt`", "`from matplotlib import plot as plt`", "`import pyplot.matplotlib as plt`"],
      explanation: "Plottefunksjonene bor i undermodulen `pyplot`, så hele stien må med: `matplotlib.pyplot`. Importerer du bare `matplotlib`, finnes ikke `plt.plot`; `plot` er ingen egen modul i `matplotlib`, og modulnavnene kan ikke byttes om.",
    },
    {
      question: "En figur har to kurver, begge kalt opp med `label=`, men navnene vises ikke i figuren. Hva mangler?",
      options: ["`plt.legend()`, kalt én gang etter begge plottekallene", "`plt.title()`, som viser navnene øverst i figuren", "`plt.show()`, som må stå før plottekallene for at navnene skal vises", "`plt.xlabel()` og `plt.ylabel()`, siden navnene hentes fra aksene"],
      explanation: "`label=` lagrer navnet på kurven, men boksen som viser navnene tegnes bare av `plt.legend()`. Tittelen er figurens overskrift og har ingenting med kurvenavn å gjøre, `plt.show()` står alltid sist, og aksenavnene beskriver aksene og ikke kurvene.",
    },
    {
      question: "Hva skjer hvis `plt.show()` mangler helt i et ellers riktig program?",
      options: ["Programmet kjører uten feilmelding, men ingen figur vises", "Programmet stopper med en feilmelding om at figuren ikke er lukket", "Figuren vises likevel, men uten akser og legende", "Figuren lagres automatisk som en bildefil i stedet for å vises"],
      explanation: "`plt.show()` er kallet som åpner figurvinduet; uten det gjøres all regning og all figuroppbygging, men ingenting kommer på skjermen. Python melder ingen feil, ingen figur vises delvis, og ingen fil lagres av seg selv.",
    },
    {
      question: "Du har tidsarrayet `t` med 41 elementer og løsningstabellen `u` med 41 rader og 2 kolonner. Hvilket kall plotter den **andre** komponenten mot tiden?",
      options: ["`plt.plot(t, u[:, 1])`", "`plt.plot(t, u[:, 2])`", "`plt.plot(t, u[1, :])`", "`plt.plot(u[:, 1], t)`"],
      explanation: "Kolonnene nummereres fra 0, så den andre komponenten er kolonne 1, og kolon på første plass tar alle radene. Kolonne 2 finnes ikke i en tabell med to kolonner, `u[1, :]` er én rad med to tall, og `plt.plot(u[:, 1], t)` bytter om aksene.",
    },
    {
      question: "Hva er forskjellen mellom et tidsplott og en fasekurve for de samme to bestandene?",
      options: ["Tidsplottet har tid langs førsteaksen, mens fasekurven plotter de to bestandene mot hverandre uten tidsakse", "Fasekurven har tid langs andreaksen, mens tidsplottet har tid langs førsteaksen", "Fasekurven viser bare den ene bestanden, mens tidsplottet viser begge i samme figur", "Tidsplottet trenger legende, mens fasekurven må ha tittel for at den skal kunne leses"],
      explanation: "En fasekurve plotter de to størrelsene mot hverandre, `plt.plot(B, R)`, og tiden er da bare rekkefølgen punktene tegnes i. Tiden er altså ingen akse i en fasekurve, den viser begge bestandene samtidig, og tittelkravet finnes ikke.",
    },
    {
      question: "En fasekurve for to bestander blir en lukket løkke. Hva forteller det om løsningen?",
      options: ["At løsningen er periodisk: bestandene gjentar samme forløp om og om igjen", "At bestandene nærmer seg en likevekt der begge holder seg konstante", "At den ene bestanden dør ut mens den andre vokser uten grense", "At simuleringen er kjørt for kort, slik at kurven ikke har rukket å åpne seg"],
      explanation: "En lukket kurve betyr at systemet kommer tilbake til samme tilstand og gjentar forløpet — altså periodisk oppførsel. En likevekt gir i stedet en spiral inn mot ett punkt, utdøing gir en kurve mot en akse, og en lukket løkke er et resultat og ikke et tegn på for kort kjøring.",
    },
    {
      question: "Hvilken rekkefølge har argumentene i `plt.plot`?",
      options: ["Førsteaksen først, andreaksen sist: `plt.plot(t, h)` gir høyde som funksjon av tid", "Andreaksen først, førsteaksen sist: `plt.plot(h, t)` gir høyde som funksjon av tid", "Rekkefølgen er valgfri, fordi matplotlib finner ut hvilken tabell som er tiden", "Rekkefølgen bestemmes av hvilken tabell som ble laget først i programmet"],
      explanation: "Første argument går langs den vannrette aksen og andre argument langs den loddrette. Bytter du om, tegnes figuren speilvendt uten noen feilmelding — matplotlib kan ikke vite hvilken tabell som er tid, og rekkefølgen i programmet betyr ingenting.",
    },
    {
      question: "Hvor mange ganger skal `plt.legend()` kalles i en figur med tre kurver?",
      options: ["Én gang, etter alle tre plottekallene", "Tre ganger, én gang per kurve rett etter hvert plottekall", "Én gang, men før plottekallene, slik at navnene er klare", "Ingen ganger, siden `label=` allerede viser navnene i figuren"],
      explanation: "Legenden er én boks for hele figuren, så ett kall etter at alle kurvene er lagt inn er riktig. Kalles den før plottekallene, finner den ingen kurver å navngi, og `label=` alene viser aldri navnene noe sted.",
    },
    {
      question: "Hva må `x` og `y` ha til felles for at `plt.plot(x, y)` skal virke?",
      options: ["Like mange elementer, siden hvert punkt er ett par av verdier", "Samme talltype, altså at begge må være flyttall og ikke heltall", "Samme tallområde, slik at begge aksene dekker de samme verdiene", "At begge er laget med `np.linspace` og ikke med en løkke"],
      explanation: "Plottet består av punktpar $(x_i, y_i)$, så tabellene må være like lange; ellers stopper programmet. Talltype og tallområde er fritt, og det er helt greit at den ene tabellen er bygget i en løkke.",
    },
    {
      question: "En figur skal vise tre kurver fra en løsningstabell. Hvor mange plottekall trengs?",
      options: ["Tre, ett per kurve, alle før `plt.show()`", "Ett, siden `plt.plot(t, u)` tegner alle kolonnene med hver sin farge", "Fire, fordi tidsaksen også må plottes for seg", "Tre, men de må stå etter `plt.show()` for at alle skal komme i samme figur"],
      explanation: "Hver kurve legges inn med sitt eget kall, og alle må stå før figuren vises. Tidsaksen er ikke en kurve, og kall etter `plt.show()` havner i en ny figur — ikke i den du nettopp viste.",
    },
    {
      question: "Oppgaven ber deg «forklare hva plottet viser». Hva bør svaret inneholde?",
      options: ["Hvilke akser med enhet, hvor kurvene starter, hvordan de utvikler seg, og hva de nærmer seg", "Den nøyaktige verdien til hver kurve i minst fem punkter, satt opp i en tabell", "En begrunnelse for hvorfor matplotlib ble valgt framfor andre plottebiblioteker", "Koden som lager figuren, gjengitt linje for linje med en kommentar til hver linje"],
      explanation: "Fire deler gir full uttelling: aksene, startpunktene, forløpet og sluttoppførselen — det er slik en figur beskrives presist i ord. Presise tallverdier kreves ikke, valget av bibliotek er ikke tema, og koden er alt skrevet i deloppgaven foran.",
    },
    {
      question: "Hvorfor må plottekode bruke `np.sin` og ikke `sin` fra `math`?",
      options: ["Fordi tabellen er et array, og `math.sin` tar bare ett tall om gangen", "Fordi `math.sin` regner i grader, mens `np.sin` regner i radianer", "Fordi matplotlib bare godtar tabeller som er laget av NumPy-funksjoner", "Fordi `math.sin` gir en liste, og en liste kan ikke plottes mot et array"],
      explanation: "Verditabellen lages av hele punktarrayet, og `math.sin` med et array inn gir en `TypeError`. Begge funksjonene regner i radianer, matplotlib godtar både lister og arrays, og `math.sin` returnerer ett tall — ikke en liste.",
    },
  ],
  'in1900-5-1': [
    {
      question: "Hvilken metode kjører Python når du skriver `g = Gauss(0, 1)`?",
      options: ["`__init__`, med `m = 0` og `s = 1`", "`__call__`, med `x = 0` og `s = 1`", "`__str__`, som lager en tekst av objektet", "ingen metode — bare et navn bindes"],
      explanation: "Parentes rett etter et klassenavn instansierer: Python lager objektet og kjører konstruktøren `__init__` med argumentene 0 og 1. `__call__` kjøres først når du skriver parentes etter INSTANSEN, altså `g(1)`, og `__str__` først når objektet skrives ut. At «bare et navn bindes» er galt fordi høyresiden må regnes ut først, og det er nettopp konstruktørkallet.",
    },
    {
      question: "Klassen `Rampe` har `__init__` og `__call__`. Hva kjører uttrykket `r.a`, der `r` er en instans?",
      options: ["Ingen metode — det er ren attributt-tilgang", "`__call__`, fordi `a` er et argument til den", "`__init__`, som setter attributtet på nytt", "`__str__`, fordi verdien skal vises"],
      explanation: "Punktum uten parentes etterpå er et oppslag i instansen, og det utløser ingen spesialmetode. `__call__` krever parentes etter instansen (`r(2)`), `__init__` kjøres bare ved instansiering, og `__str__` bare når objektet gjøres om til tekst.",
    },
    {
      question: "Klassen `Rampe` har bare `__init__`, ingen `__call__`. Hva blir siste linje i feilmeldingen fra `r(2)`?",
      options: ["`TypeError: 'Rampe' object is not callable`", "`AttributeError: 'Rampe' object has no attribute '__call__'`", "`NameError: name '__call__' is not defined`", "`TypeError: __call__() missing 1 required argument`"],
      explanation: "Python sier at objektet ikke er kallbart: `TypeError: 'Rampe' object is not callable`. Dette er standardmeldingen når du setter parentes etter en instans av en klasse uten `__call__`. `AttributeError` og `NameError` gjelder navn som ikke finnes, ikke manglende kallbarhet, og den siste meldingen ville betydd at `__call__` faktisk fantes, men fikk for få argumenter.",
    },
    {
      question: "Hva skriver `print(p(3))` ut, gitt `class Potens` med `def __init__(self, n=2)` og `def __call__(self, x): return x**self.n`, og `p = Potens()`?",
      options: ["9", "6", "8", "3"],
      explanation: "Uten argument brukes default-verdien, så `self.n` er 2, og `__call__` gir $3^2 = 9$. Svaret 6 kommer av å gange i stedet for å opphøye, 8 av å bytte om grunntall og eksponent ($2^3$), og 3 av å tro at `Potens()` uten argument gir `n = 1`.",
    },
    {
      question: "Hvor skal en default-verdi som `h=1e-5` stå i en funksjonsklasse?",
      options: ["I parameterlisten til `__init__`, sist blant parametrene", "I parameterlisten til `__call__`, sammen med `x`", "Som første parameter i `__init__`, rett etter `self`", "Som en vanlig tilordning `h = 1e-5` øverst i klassekroppen"],
      explanation: "Steget er fast for objektet, så det hører i konstruktøren — og parametre med default-verdi må stå etter dem uten. Å legge det i `__call__` gjør det til noe som varierer per kall, å legge det først i `__init__` gir syntaksfeil når de andre parametrene ikke har default, og en bar tilordning i klassekroppen er et helt annet (og upensum) fenomen.",
    },
    {
      question: "Hva er galt med `def __call__(x): return x*self.a`?",
      options: ["`self` mangler som første parameter, så `x` blir instansen", "`self.a` kan ikke leses inne i `__call__` uten et ekstra argument", "`__call__` kan ikke ha andre parametre enn `self`", "Metoden må hete `call` uten understreker"],
      explanation: "Python sender alltid instansen som første argument, så uten `self` i signaturen havner instansen i `x`, og det egentlige argumentet får ingen plass: `TypeError: __call__() takes 1 positional argument but 2 were given`. `self.a` er helt lovlig i `__call__` — men bare når `self` faktisk er et parameter — og `__call__` kan ha så mange parametre den vil.",
    },
    {
      question: "Hva gjør linjen `m = m` i en konstruktør som skulle lagret parameteret `m`?",
      options: ["Ingenting varig — den lager en lokal variabel som forsvinner", "Den setter attributtet `m`, akkurat som `self.m = m`", "Den gir `SyntaxError`, siden navnet står på begge sider", "Den setter attributtet, men bare for den instansen som lages først"],
      explanation: "Uten `self.` er venstresiden en lokal variabel i metoden, og den forsvinner når `__init__` er ferdig — instansen får ingen attributter. Linjen er lovlig Python, så det blir ingen `SyntaxError`; feilen viser seg senere som `AttributeError` når noen leser `self.m`.",
    },
    {
      question: "`g = Gauss(0, 1)` og `h = Gauss(2, 0.5)`. Hva er `g.s` etter at du har skrevet `h.s = 3`?",
      options: ["1 — instansene har hver sine attributter", "3 — attributtet er felles for klassen", "0.5 — `g` peker nå på samme objekt som `h`", "0 — attributtet nullstilles ved endring"],
      explanation: "Attributter er per instans, så `h.s = 3` rører ikke `g`, som beholder verdien den fikk i konstruktøren. Alternativet «felles for klassen» er den vanligste misforståelsen her, og den gir feil svar i alle sporingsoppgaver med to instanser.",
    },
    {
      question: "Hvilken av disse gjør en instans klar til bruk i `maksverdi(f, a, b, n)`, som bare kaller `f(x)`?",
      options: ["Klassen må ha en `__call__`-metode med parameteret `x`", "Klassen må ha en metode som heter `f` og tar `x`", "Instansen må sendes videre som `maksverdi(g(x), a, b, n)`", "Klassen må ha `__init__` med `x` som siste parameter"],
      explanation: "`maksverdi` kaller `f(x)`, og parentes etter en instans utløser `__call__` — det er alt som kreves. Metodenavnet `f` hjelper ikke, siden `maksverdi` bruker parentesformen. Å skrive `g(x)` i kallet sender inn ett TALL, ikke funksjonen, og `x` i `__init__` ville låst instansen til ett punkt.",
    },
    {
      question: "I `class Diff` med `self.f = f` — hva er `self.f` etter `d = Diff(sin)`?",
      options: ["Funksjonen `sin` selv, som kan kalles med `self.f(x)`", "Tallet `sin(0)`, altså funksjonens verdi i null", "En streng med navnet `'sin'`", "En kopi av `sin` som må importeres på nytt"],
      explanation: "Funksjonsnavnet uten parentes er funksjonen selv, så attributtet holder `sin`, og `self.f(x)` kaller den. Hadde du skrevet `Diff(sin(0))`, ville attributtet vært tallet 0.0 — det er nettopp forvekslingen mellom `f` og `f(x)` som er fellen her.",
    },
    {
      question: "Et program har `print('a')` før `g = Gauss(0, 1)`, og `__init__` starter med `print('b')`. Hva skrives ut først?",
      options: ["`a`, deretter `b` når konstruktøren kjører", "`b`, deretter `a`, siden klassen leses først", "bare `a` — utskrift i `__init__` vises ikke", "`b` to ganger, én per argument"],
      explanation: "Klassedefinisjonen kjører ikke metodekroppene; `__init__` kjøres først i det instansen lages, altså etter den første utskriften. Konstruktøren kjøres én gang per instans, uansett hvor mange argumenter den tar.",
    },
    {
      question: "Hvor mange ganger kjøres `__init__` i `for i in range(3): g = Gauss(i, 1)`?",
      options: ["3 — én gang per gjennomløp av løkka", "1 — klassen instansieres bare første gang", "4 — én gang mer enn `range(3)` gir", "0 — instansen brukes aldri til noe"],
      explanation: "`range(3)` gir tre gjennomløp, og hvert gjennomløp utfører `Gauss(i, 1)`, altså tre konstruktørkall og tre instanser (de to første kastes når navnet `g` gjenbrukes). `range(3)` gir tre verdier, ikke fire — det er av-én-fellen #1.",
    },
    {
      question: "Hva er verdien av uttrykket `Gauss(0, 1)` når det ikke lagres i noen variabel?",
      options: ["En ny instans av `Gauss`, som forsvinner rett etter", "Tallet `__init__` regner ut av 0 og 1", "`None`, siden `__init__` ikke returnerer noe", "En feil, siden instansen må ha et navn"],
      explanation: "Verdien av et konstruktørkall er alltid instansen, selv om `__init__` ikke returnerer noe: det er Python som leverer objektet. Uten en variabel er det ingen som peker på det, så det ryddes bort — men det er ingen feil.",
    },
    {
      question: "`d = Diff(sin)` og så `d(0)`. Hvilke kall skjer, i hvilken rekkefølge?",
      options: ["`__init__` ved `Diff(sin)`, så `__call__` ved `d(0)`, som kaller `sin` to ganger", "`__call__` ved `Diff(sin)`, så `__init__` ved `d(0)`, som kaller `sin` én gang", "`__init__` ved begge, siden `sin` er et attributt", "bare `__call__`, som selv setter attributtene"],
      explanation: "Instansiering kjører konstruktøren; kallet på instansen kjører `__call__`, og den sentrerte deriverte trenger `f(x+h)` og `f(x-h)`, altså to `sin`-kall. `__init__` kjøres aldri av et instanskall, og `__call__` setter ingen attributter.",
    },
    {
      question: "Hva må endres for at `Gauss` skal kunne lages med `Gauss()` uten argumenter?",
      options: ["Begge parametrene i `__init__` må få default-verdier", "`__call__` må få default-verdi på `x`", "Klassen må ha en metode som heter `standard`", "`self` må fjernes fra `__init__`-signaturen"],
      explanation: "`Gauss()` sender ingen argumenter, så alle parametre i konstruktøren må ha standardverdier, typisk `m=0, s=1`. Default på `x` i `__call__` handler om kallet, ikke om instansieringen, og å fjerne `self` ville bare gitt en ny feil.",
    },
    {
      question: "Hva skriver `print(q(2), q.n)` ut, gitt `class Potens` med `def __call__(self, x): return x**self.n` og `q = Potens(3)`?",
      options: ["`8 3`", "`8, 3`", "`6 3`", "`9 3`"],
      explanation: "`q(2)` gir $2^3 = 8$, `q.n` gir 3, og `print` med to argumenter skiller dem med ett mellomrom og ingen komma. Formen `8, 3` er hva du får hvis du skriver ut en tuppel, 6 kommer av å gange, og 9 av å bytte om grunntall og eksponent.",
    },
    {
      question: "En oppgave sier: «lag en klasse for $f(x) = ax^2 + b$ der `a` og `b` gis når objektet lages». Hvor hører `x`?",
      options: ["Som parameter i `__call__`, siden det er det som varierer", "Som tredje parameter i `__init__`, etter `a` og `b`", "Som attributt satt utenfra med `p.x = 2` før hvert kall", "Som global variabel, slik at begge metodene ser den"],
      explanation: "Det faste for objektet (`a` og `b`) hører i konstruktøren, det som varierer fra kall til kall (`x`) hører i `__call__`. Legger du `x` i `__init__`, må du lage en ny instans per punkt, og da kan objektet ikke lenger brukes som en funksjon av $x$.",
    },
    {
      question: "Hvorfor skriver `f, h = self.f, self.h` i starten av `__call__` ofte bedre kode?",
      options: ["Formelen etterpå blir kortere og lettere å lese", "Det er nødvendig for at `self.f` skal kunne kalles", "Det gjør attributtene raskere å endre utenfra", "Det hindrer at de to instansene deler attributter"],
      explanation: "Linjen er ren lesbarhet: den lar deg skrive `(f(x+h) - f(x-h))/(2*h)` i stedet for den samme formelen med `self.` fem steder. Den er ikke nødvendig for at kallet skal virke, endrer ingen attributter, og instanser deler aldri attributter uansett.",
    },
  ],
  'in1900-5-2': [
    {
      question: "Klassen `Vec2D` har `__init__` og `__str__`. Hvilken metode kjører `print(u)`?",
      options: ["`__str__`, og `print` skriver ut strengen den returnerer", "`__init__`, som lager objektet på nytt før utskrift", "`__repr__`, som alltid har forrang for `__str__` ved utskrift", "ingen metode — `print` leser attributtene direkte"],
      explanation: "`print(obj)` gjør først `str(obj)`, som kaller `__str__`, og skriver ut strengen som kommer tilbake. `__repr__` brukes bare når `__str__` ikke finnes, eller når objektet står inne i en liste; `__init__` kjøres kun ved instansiering.",
    },
    {
      question: "Hva skriver `print(u + v)` ut, når `__add__` returnerer `(self.x + other.x, self.y + other.y)`, `u = Vec2D(1, 2)` og `v = Vec2D(3, 4)`?",
      options: ["`(4, 6)` — og feilen viser seg ikke her", "`TypeError`, siden tuppelet ikke kan skrives ut", "`(1, 2)(3, 4)` — de to tuplene etter hverandre", "`Vec2D(4, 6)` med klassenavnet foran"],
      explanation: "Et tuppel skrives ut som `(4, 6)`, som tilfeldigvis ser ut som en riktig vektorutskrift — derfor er feil #4 så lumsk. Feilen dukker først opp når du bruker resultatet videre, for eksempel i `u + v + w`, der du får «can only concatenate tuple».",
    },
    {
      question: "Hvorfor virker `u + v + w` bare når `__add__` returnerer en instans?",
      options: ["Det andre plusstegnet kaller `__add__` på resultat nummer én", "Python krever at alle ledd i et uttrykk har nøyaktig samme type", "Fordi `__add__` bare kan kalles én gang per objekt", "Fordi tre operander må ha en egen spesialmetode"],
      explanation: "Uttrykket regnes fra venstre, så `u + v` må selv være et objekt med `__add__` for at det neste plusstegnet skal ha noe å kalle. Python krever ikke samme type generelt, og det finnes ingen spesialmetode for tre operander.",
    },
    {
      question: "Hva returnerer `__mul__` når den regner indreproduktet av to vektorer?",
      options: ["Et tall — indreproduktet er en skalar", "En ny instans av vektorklassen", "Et tuppel med de komponentvise produktene", "En liste med ett element per komponent"],
      explanation: "Indreproduktet av to vektorer er ett tall, så her er returtypen et tall — det ene unntaket fra «ny instans»-regelen. En ny instans ville vært riktig for skalarmultiplikasjon, mens tuppel og liste er den klassiske typefeilen #4.",
    },
    {
      question: "Hva gjør `isinstance(other, Vec2D)` inne i `__mul__`?",
      options: ["Svarer `True` hvis høyre operand er en `Vec2D`-instans", "Gjør høyre operand om til en `Vec2D`-instans", "Sjekker at de to vektorene har like mange komponenter hver", "Svarer `True` hvis klassen har definert `__mul__`"],
      explanation: "`isinstance` er en ren test på om objektet tilhører klassen, og i `__mul__` brukes svaret til å velge mellom indreprodukt og skalarmultiplikasjon. Den konverterer ingenting, og sier ingenting om antall komponenter eller om hvilke metoder klassen har.",
    },
    {
      question: "`u = Vec2D(1, 2)` og klassen har `__mul__` for skalarmultiplikasjon. Hva skjer med `3 * u`?",
      options: ["`TypeError`, fordi venstre operand er et heltall", "Samme resultat som `u * 3`, siden ganging er kommutativ", "`None`, fordi `__mul__` ikke får noe å returnere", "Vektoren `(3, 6)`, som forventet"],
      explanation: "Python spør venstre operand først, og heltallet 3 vet ikke hvordan det ganges med en `Vec2D`: `unsupported operand type(s) for *: 'int' and 'Vec2D'`. At ganging er kommutativ i matematikken hjelper ikke — det er formen på uttrykket som avgjør hvilken metode som kalles.",
    },
    {
      question: "Hva blir siste linje i feilmeldingen når `__str__` returnerer `(self.x, self.y)`?",
      options: ["`TypeError: __str__ returned non-string (type tuple)`", "`ValueError: __str__ must return a formatted string`", "`AttributeError: 'tuple' object has no attribute 'x'`", "`TypeError: unsupported operand type(s) for str: 'tuple'`"],
      explanation: "Python sier eksplisitt at `__str__` returnerte noe som ikke er en streng, og oppgir typen: `TypeError: __str__ returned non-string (type tuple)`. De tre andre er feilmeldinger som hører til andre situasjoner — attributtoppslag på et tuppel, og operatorfeil.",
    },
    {
      question: "Hva gjør `return '({self.x}, {self.y})'` i `__str__`?",
      options: ["Skriver de krøllete parentesene og navnene bokstavelig ut", "Regner ut verdiene, siden `self` alltid settes inn", "Gir `SyntaxError`, siden krøllparentesene her ikke kan tolkes", "Gir `TypeError` fordi det ikke er en f-streng"],
      explanation: "Uten `f` foran anførselstegnet er dette en helt vanlig streng, så teksten `({self.x}, {self.y})` kommer ut som den står. Det er lovlig Python, så det blir verken `SyntaxError` eller `TypeError` — bare en utskrift som ser rar ut.",
    },
    {
      question: "Klassen `Kraft` har `__call__(self, k)` som returnerer `Kraft(k*self.x, k*self.y)`. Hvilke metoder kjøres av `a(2) + b`?",
      options: ["`__call__`, `__init__`, `__add__`, `__init__`", "`__add__`, `__call__`, `__init__`", "`__call__` og `__add__`, uten noe `__init__`", "`__init__`, `__call__`, `__str__`"],
      explanation: "Innenfra og ut: `a(2)` kjører `__call__`, som lager en instans og dermed kjører `__init__`; deretter kjører `__add__` på resultatet, og den lager også en ny instans med `__init__`. `__str__` kommer bare inn hvis resultatet skrives ut.",
    },
    {
      question: "Koeffisientlisten `[2, 0, -1]` representerer hvilket polynom, når konstantleddet står først?",
      options: ["$2 - x^2$", "$2x^2 - 1$", "$2 - x$", "$2x - x^3$"],
      explanation: "Element $i$ er koeffisienten til $x^i$, så listen er $2 + 0\\\\cdot x + (-1)x^2 = 2 - x^2$. Alternativet $2x^2 - 1$ er den samme lista lest baklengs, som er den vanligste forvekslingen her.",
    },
    {
      question: "Hvorfor bruker `__add__` for polynomer `ny = lang[:]` og ikke `ny = lang`?",
      options: ["`ny = lang` gir to navn på samme liste, så operanden endres", "`lang[:]` er nødvendig for at listen skal bli like lang", "`ny = lang` gir `TypeError` så snart man endrer et element i den", "`lang[:]` sorterer koeffisientene i riktig rekkefølge"],
      explanation: "Slicing lager en kopi; en bar tilordning lager bare et nytt navn på den samme lista, så `ny[i] = ...` ville endret koeffisientene i det polynomet du la sammen (feil #23, aliasing). Slicing sorterer ingenting og gir ingen feilmelding.",
    },
    {
      question: "Hva må `__add__` gjøre når de to polynomene har ulik grad?",
      options: ["Bygge et resultat som er like langt som den lengste listen", "Kutte den lengste listen ned til den korteste av de to lengdene", "Gi en feilmelding, siden gradene må være like", "Fylle den korteste listen med enere før addisjonen"],
      explanation: "Summen har den høyeste av de to gradene, så resultatet må ha plass til alle ledd — derfor kopieres den lengste og den korteste legges oppå. Å kutte ville kastet ledd, og å fylle med enere ville lagt til ledd som ikke finnes.",
    },
    {
      question: "Hva skriver `print([u, v])` ut, når `Vec2D` har en pen `__str__`?",
      options: ["Den tekniske formen med klassenavn og adresse per element", "De to pene tekstene, atskilt med komma inne i hakeparentesene", "En feilmelding, siden en liste ikke kan skrives ut", "Bare antall elementer i listen, altså `2`"],
      explanation: "Listen gjøres om til tekst ved å be om `__repr__` for hvert element, og den er ikke definert her — derfor kommer klassenavn og adresse. Vil du ha den pene formen, må du løkke over listen og skrive ut ett objekt av gangen.",
    },
    {
      question: "Hvilken av disse `__add__`-kroppene er riktig for `class Vec2D`?",
      options: ["`return Vec2D(self.x + other.x, self.y + other.y)`", "`return [self.x + other.x, self.y + other.y]`", "`self.x = self.x + other.x; self.y = self.y + other.y`", "`return self.x + other.x, self.y + other.y`"],
      explanation: "Bare den første returnerer en ny instans av klassen. Listen er feil returtype (#4), varianten som setter attributtene endrer venstre operand i stedet for å lage noe nytt, og den siste returnerer et tuppel — kommaet gjør den til to verdier.",
    },
    {
      question: "Hvor hører formateringen «to desimaler» hjemme når objektet skal skrives ut med to desimaler overalt?",
      options: ["I f-strengen inne i `__str__`, som `{self.x:.2f}`", "I `print`-kallet, som `print(f'{u:.2f}')`", "I `__init__`, ved å runde av attributtene med to desimaler", "I `__add__`, slik at resultatet blir avrundet"],
      explanation: "Legger du formateringen i `__str__`, får alle utskrifter av objektet samme form — det er hele poenget med metoden. Å runde av i `__init__` ville ødelagt regnenøyaktigheten, og å runde i `__add__` ville gjort det samme for alle videre regnestykker.",
    },
    {
      question: "Hva er `u.x` etter `w = u + v`, når `__add__` er skrevet riktig og `u = Vec2D(1, 2)`?",
      options: ["1 — addisjonen endrer ikke operandene", "4 — `u` oppdateres med summen", "0 — `u` tømmes når resultatet er laget", "`None` — attributtet flyttes til `w`"],
      explanation: "En riktig `__add__` lager et tredje objekt og lar operandene være uendret, akkurat som `1 + 2` ikke endrer tallet 1. En metode som skriver `self.x = self.x + other.x` bryter med dette, og det er en feil sensor ser etter.",
    },
    {
      question: "En oppgave sier: «`__mul__` skal returnere produktet av vektoren og et tall». Hva skal metoden returnere?",
      options: ["En ny instans av klassen, med alle komponenter ganget", "Et tall, siden en av operandene er et tall", "Et tuppel med de gangede komponentene", "Den samme instansen, men med attributtene endret på plass"],
      explanation: "Skalarmultiplikasjon gir en vektor, så her gjelder «ny instans»-regelen fullt ut. Et tall ville vært riktig for indreprodukt, tuppel er typefeilen #4, og å endre instansen bryter regelen om at aritmetikk ikke rører operandene.",
    },
    {
      question: "`print(f'kraften er {u}')` — hvilken metode brukes for å sette inn `u`?",
      options: ["`__str__`, fordi f-strengen gjør verdien om til tekst", "`__repr__`, fordi f-strenger alltid bruker den tekniske formen", "`__call__`, fordi krøllparentesene er et kall", "ingen — objektet settes inn uendret"],
      explanation: "En f-streng gjør hver innsatt verdi om til tekst, og for et objekt betyr det et kall til `__str__`. `__repr__` brukes for elementer i lister, og krøllparentesene i en f-streng har ingenting å gjøre med `__call__`.",
    },
  ],
  'in1900-5-3': [
    {
      question: "Hva betyr parentesen i `class Linje(Parabel):`?",
      options: ["At `Linje` arver alle metoder og attributter fra `Parabel`", "At `Linje` må få en `Parabel` som argument i konstruktøren", "At `Parabel` arver alle metodene som skrives i `Linje`", "At de to klassene deler ett felles sett attributter"],
      explanation: "Parentesen angir basisklassen, og subklassen får alt den har. Retningen er enveis — `Parabel` påvirkes ikke av `Linje` — og parentesen har ingenting å gjøre med argumenter til konstruktøren. Instansene deler heller ingenting; hver har sine egne attributter.",
    },
    {
      question: "Hvorfor skrives ikke `self` i kallet `super().__init__(0, b, c)`?",
      options: ["`super()` er bundet til instansen, som sendes automatisk", "`self` er ikke tilgjengelig inne i en konstruktør i det hele tatt", "Basisklassens konstruktør har ikke `self` i signaturen", "Fordi `super()` lager en ny instans som `self` ikke gjelder for"],
      explanation: "`super()` gir deg basisklassen bundet til den instansen du er inne i, så instansen sendes automatisk som første argument — akkurat som ved et vanlig metodekall. Skriver du `self` selv, får basisklassens konstruktør ett argument for mye. `self` er selvsagt tilgjengelig, og basisklassens konstruktør har `self` i signaturen sin.",
    },
    {
      question: "En subklasse setter `self.b` og `self.c` selv, uten `super()`-kall. Basisklassens `__call__` bruker også `self.a`. Hva skjer ved `l(3)`?",
      options: ["`AttributeError`, fordi attributtet `a` aldri ble satt", "`TypeError`, fordi den arvede metoden mangler et argument", "Verdien regnes med `a` som 0 automatisk", "`NameError`, fordi `a` ikke er en global variabel"],
      explanation: "Attributtet `a` finnes ikke på instansen, og Python sier `AttributeError: 'Linje' object has no attribute 'a'`. Python setter aldri attributter automatisk, og feilen er et attributtoppslag, ikke et navneoppslag eller et argumentproblem.",
    },
    {
      question: "Hvor skal `super().__init__(...)` stå i subklassens konstruktør?",
      options: ["Først, altså før subklassens egne tilordninger", "Sist, etter at subklassens attributter er satt", "Hvor som helst — rekkefølgen har ingen betydning", "I `__call__` i stedet, slik at det kjøres ved hvert kall"],
      explanation: "Basisklassen skal være ferdig satt opp før du bygger videre, ellers kan dens konstruktør overskrive det du nettopp satte — en stille feil uten feilmelding. Kallet hører i konstruktøren, ikke i `__call__`, som kjøres på nytt for hvert kall.",
    },
    {
      question: "`Linje` arver `__call__` fra `Parabel` og setter `a = 0` gjennom `super()`. Hva gir `l(3)` for `Linje(2, 1)`?",
      options: ["7", "13", "6", "0"],
      explanation: "Den arvede metoden regner $0\\\\cdot 3^2 + 2\\\\cdot 3 + 1 = 7$. Svaret 13 kommer av å tro at `a` er 1, 6 av å glemme konstantleddet, og 0 av å tro at hele uttrykket nulles ut når `a` er 0.",
    },
    {
      question: "Subklassen skriver en metode med samme navn som en i basisklassen. Hva kalles det, og hva skjer med basisklassen?",
      options: ["Overstyring — basisklassen er uendret, subklassens versjon brukes", "Overstyring — metoden slettes fra basisklassen for alle instanser", "Arv — de to metodene kjøres etter hverandre ved hvert kall", "Utvidelse — basisklassens metode kalles helt automatisk etterpå"],
      explanation: "Det heter overstyring, og basisklassen er helt urørt: dens egne instanser bruker fortsatt sin versjon. Python kjører aldri to metoder med samme navn automatisk — vil du ha basisklassens versjon i tillegg, må du kalle den selv.",
    },
    {
      question: "`v` er en `Vec3D`, som arver fra `Vec2D`. Hva er `isinstance(v, Vec2D)`?",
      options: ["`True` — en subklasseinstans er også en basisklasseinstans", "`False` — `v` er av klassen `Vec3D` og ingen annen", "`True`, men bare hvis `Vec3D` ikke overstyrer noen metoder", "`False`, siden `Vec3D` har et attributt `Vec2D` mangler"],
      explanation: "`isinstance` godtar subklasser, og det er selve poenget med «er en»-forholdet i arv. Overstyring og ekstra attributter endrer ikke dette; motsatt vei er svaret `False` — en `Vec2D` er ingen `Vec3D`.",
    },
    {
      question: "En subklasse skal ha ett attributt mer enn basisklassen. Hvordan ser konstruktøren ut?",
      options: ["`super().__init__(x, y)`, og deretter `self.z = z`", "`self.z = z` og deretter `super().__init__(x, y, z)`", "`super().__init__(x, y, z)` alene, som fordeler alle tre", "`self.x = x`, `self.y = y` og `self.z = z` i subklassen"],
      explanation: "Basisklassens konstruktør setter de arvede attributtene, og det nye settes etterpå. Å sende `z` videre til basisklassen ville gitt ett argument for mye, og å sette alle tre selv er nettopp den kopieringen arven skal spare deg for.",
    },
    {
      question: "Hva er problemet med å skrive `class Linje:` i stedet for `class Linje(Parabel):` når oppgaven ber om en subklasse?",
      options: ["Koden virker, men arven mangler — og det var det som ble testet", "Koden krasjer, siden `Parabel` da blir ukjent inne i `Linje`-kroppen", "Koden virker, men `Linje` kan ikke ha egne metoder", "Koden gir `AttributeError` ved første kall på instansen"],
      explanation: "Uten parentesen er det ingen arv, og du må skrive alle metodene selv — koden kan gjerne regne riktig, men oppgaven ba om arv, og uttellingen faller. Det er ingen feilmelding å oppdage feilen på; kjennetegnet er bare den manglende parentesen.",
    },
    {
      question: "Basisklassen har `__call__`. Subklassen skriver ingen `__call__`. Er subklasseinstanser kallbare?",
      options: ["Ja — spesialmetoder arves som alle andre metoder", "Nei — spesialmetoder må gjentas i hver subklasse", "Ja, men bare hvis subklassen kaller `super()` i `__call__`", "Nei, ikke før `__call__` er nevnt i klassekroppen"],
      explanation: "Spesialmetoder arves akkurat som vanlige metoder, så instansen er kallbar uten at du skriver noe. Det er nettopp derfor `Linje` ble en fullverdig funksjonsklasse på tre linjer.",
    },
    {
      question: "I hvilken av disse situasjonene er arv det riktige valget?",
      options: ["To klasser deler mest av koden, og den ene er et spesialtilfelle", "To klasser har tilfeldigvis noen metoder med like navn", "To klasser skal begge kunne skrives ut med `print`", "En klasse trenger et attributt som selv er en instans av en annen klasse"],
      explanation: "Testen er «er en»: en linje er en parabel med $a = 0$. Like metodenavn eller felles evne til å skrives ut er ikke nok grunn, og et attributt som er et annet objekt er noe helt annet enn arv.",
    },
    {
      question: "Hva gir `Vec3D.__add__` som returnerer `Vec2D(...)` i stedet for `Vec3D(...)`?",
      options: ["Et resultat som mister `z`-komponenten, uten noen feilmelding", "En feilmelding, siden `Vec2D` mangler tre argumenter", "Et helt riktig resultat, siden `Vec3D` arver fra `Vec2D`", "Et resultat der `z` settes til null automatisk"],
      explanation: "Instansen som lages er en `Vec2D`, og den har ingen `z` i det hele tatt — summen er dermed feil, og feilen forplanter seg videre uten at noe krasjer. Arven i motsatt retning hjelper ikke: en `Vec2D` er ingen `Vec3D`.",
    },
    {
      question: "Hvorfor er arv «hele forutsetningen» for ODESolver-oppgavene i Del 7?",
      options: ["Du skriver bare metoden som skiller løseren din fra basisklassen", "Du må arve for å få lov til å bruke en utlevert modul", "Fordi ODE-løsere umulig kan skrives som frittstående funksjoner", "Fordi `solve` må overstyres i hver ny løser du skriver"],
      explanation: "Hele tidsløkka ligger i basisklassen; subklassen implementerer bare steget som er spesielt for metoden. Det er derfor oppgavetypen er kort å svare på når du kjenner malen — og `solve` skal nettopp ikke overstyres.",
    },
    {
      question: "Hva blir siste linje i feilmeldingen fra `super().__init__(self, 0, b, c)` når basisklassen tar tre argumenter utenom `self`?",
      options: ["`TypeError: __init__() takes 4 positional arguments but 5 were given`", "`AttributeError: 'super' object has no attribute '__init__'`", "`NameError: name 'self' is not defined` i konstruktørkallet", "`TypeError: super() takes no keyword arguments` på samme linje"],
      explanation: "Instansen sendes automatisk, så det ekstra `self`-argumentet gjør at konstruktøren får fem argumenter der den venter fire. De tre andre meldingene hører til helt andre feil — manglende navn, eller feil bruk av `super()` selv.",
    },
  ],
  'in1900-5-4': [
    {
      question: "Hva gir `sats(10)` for `def sats(x): if x < 0: return -1; elif x < 10: return 0; else: return 1`?",
      options: ["1 — begge grensene er eksklusive, så `else` brukes", "0 — verdien 10 hører til den midterste grenen", "$-1$ — første gren treffer alltid ved grenseverdier", "`None` — ingen av grenene passer for x lik 10"],
      explanation: "$10 < 10$ er falsk, så begge `if`-grenene hoppes over og `else` gir 1. Alternativet 0 er den vanligste feilen: grensen selv hører til intervallet OVER når sammenligningen er `<`. `else` fanger alltid opp resten, så det blir aldri `None` her.",
    },
    {
      question: "Trappa skal være 5 på $1 \\le x < 3$. Hva blir galt med `if x <= 1: return 0` som første gren?",
      options: ["$x = 1$ får verdien 0 i stedet for 5", "$x = 3$ får verdien 5 i stedet for 2", "Alle $x$ under 3 får verdien 0", "Koden gir `SyntaxError` på grensen"],
      explanation: "Med `<=` havner grensepunktet 1 i den nedre grenen, så $f(1)$ blir 0 mens definisjonen sier 5. Den øvre grensen er upåvirket, og koden er helt lovlig Python — feilen viser seg bare i det ene punktet, som er nettopp derfor du må grensetester.",
    },
    {
      question: "Hvor mange funksjonsverdier hører til `b = [1, 3, 7]` i en `Piecewise`?",
      options: ["4 — én mer enn antall grenser", "3 — én per grense", "2 — én per mellomrom mellom grensene", "7 — så mange som den største grensen"],
      explanation: "Tre grenser deler tallinja i fire intervaller, så `a` skal ha fire elementer — samme av-én-sammenheng som mellom intervaller og punkter (feil #1). Har du like mange verdier som grenser, mangler du et intervall, og siste `return` vil hente feil verdi.",
    },
    {
      question: "Hva gjør `return self.a[i]` inne i løkka i `__call__`?",
      options: ["Avbryter løkka og gir verdien for første intervall som passer", "Lagrer verdien og fortsetter til neste grense i løkka etterpå", "Returnerer en liste med alle verdiene som passer", "Gir verdien for det siste intervallet i lista"],
      explanation: "`return` avslutter både løkka og metoden med én gang, og det er dette som gir «første treff gjelder» — samme oppførsel som `if/elif/else`. En løkke som bare lagret verdien og fortsatte, ville endt med den siste treffen i stedet for den første.",
    },
    {
      question: "Hva skjer hvis `return self.a[-1]` utenfor løkka mangler, og du kaller `f(100)` med grenser `[1, 3]`?",
      options: ["Metoden returnerer `None`, og feilen viser seg senere", "Metoden gir `IndexError` fordi verdilista er for kort", "Metoden returnerer den siste verdien likevel", "Metoden gir `ValueError` for x utenfor grensene"],
      explanation: "En funksjon som når slutten uten `return`, returnerer `None` — det er ingen feil der og da, men `None` i et senere regnestykke gir en `TypeError` som nevner `'NoneType'`. Python henter ingen verdi automatisk, og løkka gjør ingen indeksering utenfor lista her.",
    },
    {
      question: "Hva gir `f(0)` for `f = Piecewise([10, 20, 30], [0, 5])` med idiomet `if x < b_`?",
      options: ["20 — $0 < 0$ er falsk, så første grense hoppes", "10 — det første intervallet gjelder også for $x = 0$", "30 — ingen grense er større enn 0", "`None` — grensen 0 er ikke dekket"],
      explanation: "$0 < 0$ er falsk, så løkka går videre til grensen 5, der $0 < 5$ er sann, og verdien blir `a[1] = 20`. Å svare 10 er å tro at grensen hører til intervallet under — den vanligste feilen i denne sjangeren.",
    },
    {
      question: "Hva er verdien av Heaviside-funksjonen i $x = 0$, slik boka definerer den?",
      options: ["1, siden definisjonen bruker $x \\ge 0$ øverst", "0, siden funksjonen er null til og med null", "$1/2$, som er gjennomsnittet av de to sidene av hoppet", "Udefinert, fordi funksjonen hopper der"],
      explanation: "Boka bruker $H(x) = 1$ for $x \\ge 0$, altså også i null. Verdien $1/2$ brukes i noen andre fag, og «udefinert» er galt: funksjonen har en helt bestemt verdi i hoppunktet, den er bare ikke kontinuerlig der.",
    },
    {
      question: "Hvorfor gir `enumerate` riktig kobling mellom de to listene i `Piecewise`?",
      options: ["Den gir indeksen til grensen, og verdien har samme indeks", "Den gir verdien først og indeksen etterpå, som listene krever", "Den sorterer grensene stigende før løkka starter", "Den stopper automatisk ved den korteste av de to listene"],
      explanation: "`enumerate` gir `(indeks, verdi)` i den rekkefølgen, og indeksen til grensen er nettopp indeksen til funksjonsverdien for det intervallet. Sortering må du sørge for selv, og det er `zip` — ikke `enumerate` — som stopper ved den korteste.",
    },
    {
      question: "Hva er problemet med `return self.a[i+1]` i stedet for `return self.a[i]`?",
      options: ["Hele trappa forskyves ett trinn, og `a[0]` brukes aldri", "Koden gir alltid `IndexError` allerede på første kall", "Bare den siste verdien i lista blir feil", "Grensene må da oppgis i motsatt rekkefølge"],
      explanation: "Grense nummer `i` hører til verdi nummer `i`, så `i+1` gir verdien for intervallet over — trappa forskyves, og `a[0]` blir aldri returnert. Det gir `IndexError` bare hvis siste grense treffes, så feilen er stille i de fleste testene.",
    },
    {
      question: "Hva skjer når du sender et NumPy-array inn i en stykkvis funksjon skrevet med `if`?",
      options: ["`ValueError` om at sannhetsverdien til arrayet er tvetydig", "Funksjonen returnerer et array med riktige verdier", "Funksjonen bruker første element og returnerer ett tall", "`TypeError` om at arrayet ikke kan sammenlignes med et tall"],
      explanation: "Sammenligningen gir et array av sant/falskt, og `if` krever én verdi: «The truth value of an array with more than one element is ambiguous». Sammenligningen selv er helt lovlig, så det er ikke en `TypeError` — og funksjonen plukker ikke ut noe element på egen hånd.",
    },
    {
      question: "Hvilken oppgave har `np.where(t < 0, 0, 1)`?",
      options: ["Velger elementvis mellom 0 og 1, og gir et array", "Finner indeksene der `t` er negativ, og gir dem som en liste", "Setter alle negative elementer i `t` til null", "Sjekker om noen av elementene i `t` er negative"],
      explanation: "`np.where(betingelse, x, y)` gir et array der hvert element er `x` der betingelsen er sann og `y` ellers — den vektoriserte Heaviside. Den endrer ikke `t`, og den returnerer verdier, ikke indekser, når den kalles med tre argumenter.",
    },
    {
      question: "Hvorfor virker ikke numerisk derivasjon i selve hoppunktet til en trappefunksjon?",
      options: ["Teller er konstant mens nevner går mot null", "Fordi `__call__` returnerer `None` nøyaktig i grensen", "Fordi den sentrerte formelen krever et helt kontinuerlig array", "Fordi hoppet gjør at begge funksjonsverdiene blir like"],
      explanation: "I hoppunktet er $f(x+h) - f(x-h)$ lik hoppets størrelse uansett hvor liten $h$ er, mens $2h$ går mot null — kvotienten vokser uten grense. Funksjonen har en helt bestemt verdi i punktet, så det er ikke `None`, og de to funksjonsverdiene er nettopp ikke like.",
    },
  ],
  'in1900-5-5': [
    {
      question: "Hvilken metode kjøres av linjen `g = Gauss(0, 1)`?",
      options: ["`__init__`, som lagrer de to tallene som attributter på den nye instansen", "`__call__`, som regner ut funksjonsverdien for de to argumentene", "`__str__`, som lager teksten Python viser når objektet skrives ut", "`__add__`, som kombinerer de to argumentene til én verdi i instansen"],
      explanation: "Klassenavn med parentes lager en instans, og da kalles konstruktøren `__init__` automatisk. `__call__` kjøres først når du skriver parentes etter et ferdig **objekt** (`g(1)`), `__str__` kjøres av `print(g)`, og `__add__` av plusstegnet.",
    },
    {
      question: "Klassen `Vekt` har `__init__(self, m)` og `__call__(self, g)` som returnerer `self.m*g`. Hva skriver `v = Vekt(3)` og deretter `print(v(10), v(2))` ut?",
      options: ["`30 6`", "`3 3`", "`13 5`", "`30 30`"],
      explanation: "Konstruktøren lagrer `m = 3`, og hvert kall ganger med argumentet: $3 \\cdot 10 = 30$ og $3 \\cdot 2 = 6$. Alternativet `3 3` er fellen «kallmetoden returnerer attributtet», `13 5` er addisjon i stedet for multiplikasjon, og `30 30` forutsetter at objektet husker det første argumentet.",
    },
    {
      question: "En klasse har bare `__init__`. Hva skjer når du skriver `obj(3)`?",
      options: ["`TypeError: 'Q' object is not callable` — klassen mangler `__call__`", "`AttributeError` — instansen mangler attributtet som skulle brukes", "Ingenting skjer; uttrykket gir `None` og programmet fortsetter", "`NameError` — navnet `obj` finnes ikke i denne sammenhengen"],
      explanation: "Parentes etter et objekt krever `__call__`. Uten den svarer Python at objektet ikke er kallbart, med klassenavnet i meldingen. `AttributeError` kommer av et attributt som ikke er satt (typisk glemt `super()`-kall), og `NameError` av et navn som aldri er tilordnet.",
    },
    {
      question: "En `__add__` avsluttes med `return self.x + other.x, self.y + other.y`. Hva blir returverdien?",
      options: ["Et tuppel med to tall, ikke en ny instans av klassen", "En ny instans av klassen, med de to summene som attributter", "En liste med to tall, som kan indekseres og endres etterpå", "Et tall, fordi Python summerer de to uttrykkene til slutt"],
      explanation: "Kommaet lager et tuppel. Dette er feil #4 — aritmetisk spesialmetode med feil returtype — og den er lumsk fordi programmet ser ut til å virke helt til noen skriver `(u + v)*2` eller `print(u + v)`. Riktig form er `return Klassenavn(...)`.",
    },
    {
      question: "Klassen `Punkt` har `__str__` som gir `[x, y]` og `__add__` som gir en ny `Punkt`. Hva skriver `p = Punkt(1, 2)`, `q = Punkt(3, 5)`, `print(p + q)` og `print(p)` ut?",
      options: ["`[4, 7]` og deretter `[1, 2]`", "`[4, 7]` og deretter `[4, 7]`", "`[1, 2]` og deretter `[3, 5]`", "`[3, 10]` og deretter `[1, 2]`"],
      explanation: "Addisjonen lager et **tredje** objekt, så `p` er uendret etterpå — akkurat som `3 + 4` ikke endrer tretallet. Alternativ b er fellen «addisjonen skriver i venstre operand», og `[3, 10]` er komponentvis multiplikasjon.",
    },
    {
      question: "Hvor skal standardverdien stå i en klasse der steget `h` skal være $10^{-5}$ hvis ingenting oppgis?",
      options: ["I konstruktørens signatur: `def __init__(self, f, h=1e-5):`", "I kallmetodens signatur: `def __call__(self, x, h=1e-5):`", "Som en linje øverst i klassekroppen, før alle metodene", "I instansieringen, altså `d = Diff(f, h=1e-5)` ved hvert bruk"],
      explanation: "Standardverdier hører der størrelsen settes, og steget settes én gang når objektet lages. Legger du den i `__call__`, må den oppgis ved hvert kall og er dermed ikke lenger en egenskap ved objektet. Parametre med standardverdi må stå sist i signaturen.",
    },
    {
      question: "`class Sub(Base):` har `def __init__(self):` som eneste innhold i konstruktøren `super().__init__(10)`. Hva er `isinstance(Sub(), Base)`?",
      options: ["`True` — en subklasseinstans regnes også som en instans av basisklassen", "`False` — de to klassene er forskjellige, og navnene er ikke like", "`True` bare hvis subklassen ikke overstyrer noen av metodene", "`False` fordi subklassen har en annen parameterliste enn basisklassen"],
      explanation: "Arv betyr «er en»: en `Sub` **er** en `Base` og kan sendes overalt der koden venter en. Overstyring av metoder endrer ikke dette, og parameterlisten i konstruktøren har ingenting med saken å gjøre.",
    },
    {
      question: "Hvor i subklassens konstruktør skal `super().__init__(...)` stå?",
      options: ["Som første linje, før subklassens egne tilordninger", "Som siste linje, etter at subklassens egne attributter er satt", "Utenfor konstruktøren, som en egen linje i klassekroppen", "Ingen bestemt plass; rekkefølgen har ingen betydning i praksis"],
      explanation: "Basisklassen skal fylle sine attributter først, slik at subklassens egne tilordninger kan bygge på dem. Står kallet sist, kan basisklassen overskrive det subklassen nettopp satte. Merk også at du ikke sender med `self` i kallet.",
    },
    {
      question: "Hva skjer hvis en subklasse setter attributtene selv og hopper over `super().__init__(...)`?",
      options: ["Koden kan virke nå, men er duplisert og ryker når basisklassen endres", "Programmet stopper straks med en feilmelding om manglende konstruktør", "Basisklassens metoder blir utilgjengelige for subklasseinstansene", "Attributtene får verdien `None` fordi ingen konstruktør har kjørt"],
      explanation: "Duplisering virker helt til basisklassen får et attributt til — da mangler subklasseinstansene det, uten at noen merker det før `AttributeError` dukker opp. Metodene arves uansett, og Python krever ikke `super()`-kallet, så det kommer ingen feilmelding.",
    },
    {
      question: "`__str__` er skrevet slik at f-strengen står på siste linje, men uten `return`. Hva skjer ved `print(obj)`?",
      options: ["`TypeError: __str__ returned non-string (type NoneType)`", "Objektet skrives ut med klassenavn og minneadresse i stedet", "Den tomme strengen skrives ut, og programmet fortsetter som før", "`AttributeError`, fordi metoden ikke leverer noe Python kan bruke"],
      explanation: "En metode uten `return` leverer `None`, og Python krever at `__str__` gir en streng. Klassenavn og minneadresse er standardutskriften når klassen ikke har `__str__` i det hele tatt — en annen situasjon, og en nyttig ledetråd når du feilsøker.",
    },
    {
      question: "Hva er forskjellen på `a.fart` og `a.fart()` når `fart` er definert med `def fart(self):`?",
      options: ["Uten parentes får du selve metoden; med parentes kjøres den og gir en verdi", "Uten parentes får du en feilmelding; med parentes får du returverdien", "Ingen forskjell — Python kaller metoden automatisk i begge tilfellene", "Uten parentes får du attributtet `fart`; med parentes lager du et nytt objekt"],
      explanation: "Et navn uten parentes er en referanse til metoden selv, og skrives ut som «bound method …». Det gir ingen feilmelding, og det er nettopp derfor fellen er vanlig: utskriften ser bare rar ut. Med parentes kjøres metoden.",
    },
    {
      question: "`u * 3` virker, men `3 * u` gir en feilmelding. Hvorfor?",
      options: ["Python spør venstre operand først, og heltall vet ikke hva en `Vind` er", "Fordi `__mul__` bare er definert for tall, ikke for objekter av klassen", "Fordi et tall alltid må stå til høyre for gangetegnet i Python", "Fordi `__mul__` mangler en `isinstance`-test for høyre operand"],
      explanation: "`u * 3` oversettes til `u.__mul__(3)` — venstre operand bestemmer. I `3 * u` er venstre operand et heltall, som ikke kjenner klassen din, og resultatet er `TypeError: unsupported operand type(s)`. Løsningen er `__rmul__`, som er utenfor pensum her; skriv objektet først.",
    },
    {
      question: "I en vektorklasse skal `__mul__` gi indreproduktet når høyre operand er en vektor. Hva returnerer den da?",
      options: ["Et tall, altså summen av de komponentvise produktene", "En ny instans av klassen, med de komponentvise produktene", "Et tuppel med de komponentvise produktene, ett per komponent", "En liste med de komponentvise produktene, i samme rekkefølge"],
      explanation: "Indreproduktet er per definisjon ett tall. Det er det ene tillatte unntaket fra regelen om at aritmetiske spesialmetoder gir en ny instans, og de to tilfellene skilles med `isinstance(other, Klasse)`: vektor gir tall, tall gir ny vektor.",
    },
    {
      question: "Klassen skriver «legger sammen» inne i `__add__`. Hvor mange ganger skrives det når `c = a + b + a` kjøres?",
      options: ["To ganger, fordi kjeding regnes fra venstre i to trinn", "Én gang, fordi hele uttrykket regnes ut i ett metodekall", "Tre ganger, én gang per objekt som inngår i uttrykket", "Ingen ganger, fordi tilordningen utsetter selve regningen"],
      explanation: "`a + b + a` er `(a + b) + a`, altså to kall på `__add__`. Mellomresultatet skrives aldri ut; det brukes bare som venstre operand i det andre kallet. Utskriftene kommer før alt annet programmet skriver etterpå.",
    },
    {
      question: "En stykkvis klasse har `if x < b_: return self.a[i]` i løkka. `b = [100, 400]` og `a = [0.5, 1.2, 2.0]`. Hva gir kallet med `x = 100`?",
      options: ["1.2, fordi sammenligningen er streng og grensen hører til intervallet over", "0.5, fordi verdien 100 er den første grensen i lista `b`", "2.0, fordi ingen av de to grensene slår til for denne verdien", "`None`, fordi løkka ikke finner noen grense som passer for verdien"],
      explanation: "$100 < 100$ er falskt, så første gren hoppes over; $100 < 400$ er sant, og verdien blir `a[1]`. Dette er den ene sammenligningen sensor ser etter. `None` ville vært svaret bare hvis den siste `return` utenfor løkka manglet.",
    },
    {
      question: "Hvor mange funksjonsverdier hører til grenselista `b = [10, 20, 30]` i en stykkvis klasse?",
      options: ["Fire — tre grenser deler tallinja i fire intervaller", "Tre — én funksjonsverdi per grense i lista", "To — én verdi per mellomrom mellom to grenser", "Fem — ett ekstra intervall i hver ende av tallinja"],
      explanation: "Sammenhengen er `len(a) == len(b) + 1`, den samme av-én-regelen som mellom intervaller og punkter (feil #1). Har du like mange verdier som grenser, mangler du et intervall, og siste `return` henter feil verdi.",
    },
    {
      question: "Hva er galt med `assert abs(expected - computed) == tol` i en testfunksjon?",
      options: ["Testen skal kreve at avviket er MINDRE enn toleransen, ikke likt den", "Toleransen må settes før `expected` for at sammenligningen skal gjelde", "`abs` gjør sammenligningen unødvendig og skal utelates helt her", "En testfunksjon skal returnere svaret i stedet for å bruke `assert`"],
      explanation: "Poenget med en toleranse er å godta et lite avvik, altså `< tol`. Med `==` krever du at avviket er nøyaktig `1e-10`, noe det så godt som aldri er. Feil #11 i registeret er den beslektede: å bruke `==` direkte på flyttall.",
    },
    {
      question: "Hvorfor gir `print([u, v])` en annen utskrift enn `print(u)` når klassen har `__str__`?",
      options: ["Lister skriver elementene med den tekniske utskriften, ikke med `__str__`", "Lister kan ikke inneholde objekter, så Python viser bare typenavnene", "`print` med hakeparenteser kaller `__add__` på elementene i lista", "`__str__` virker bare på ett objekt av gangen og hoppes over i lister"],
      explanation: "En liste bruker `__repr__` på elementene sine, ikke `__str__`, så du får klassenavn og minneadresse. Vil du ha den pene teksten for hvert element, må du løkke gjennom lista og skrive ut ett objekt av gangen.",
    },
    {
      question: "`g = Gauss(0, 1)` og `h = Gauss(2, 0.5)`. Hva skjer med `g` hvis du endrer `h.m`?",
      options: ["Ingenting — hver instans har sitt eget sett attributter", "`g.m` endres også, fordi begge er laget fra samme klasse", "Begge instansene mister attributtet til det settes på nytt", "`g` blir uendret bare hvis klassen har en `__init__`-metode"],
      explanation: "Attributter settes med `self.` og hører til den enkelte instansen. To objekter av samme klasse deler ingenting utenom oppskriften. Det er hele poenget med en funksjonsklasse: én klasse, mange kurver med hver sine parametre.",
    },
    {
      question: "Den forlengs deriverte skrives `(f(x + h) - f(x))/h`. Hva blir galt om du deler på `2*h`?",
      options: ["Svaret blir omtrent halvparten av den riktige deriverte", "Svaret blir omtrent dobbelt så stort som den riktige deriverte", "Koden stopper med en feilmelding om deling på null for små steg", "Svaret blir riktig; nevneren har ingen betydning for forlengs formel"],
      explanation: "Telleren er uendret, så en dobbelt så stor nevner halverer resultatet. `2*h` hører til den **sentrerte** formelen, der telleren også er en annen: `f(x + h) - f(x - h)`. Å blande de to nevnerne er en klassisk halvpoengsfeil.",
    },
    {
      question: "En klasse regner ut $T_n$ med en løkke `for k in range(1, self.n):`. Hvor mange oppdateringer kjøres for `n = 4`?",
      options: ["Tre — like mange som det er steg fra grad 1 til grad 4", "Fire — like mange som graden objektet er laget med", "Fem — én mer enn graden, som ved antall punkter", "To — halvparten av graden, siden to verdier oppdateres"],
      explanation: "`range(1, 4)` gir verdiene 1, 2 og 3, altså tre runder. Startverdiene dekker grad 0 og grad 1, og hver runde flytter deg ett hakk opp. Alternativ b er av-én-feilen #1 i den formen den tar i rekurrente formler.",
    },
    {
      question: "En rekurrent formel bruker de to foregående verdiene. Hva er den kritiske detaljen i løkka?",
      options: ["Å regne ut den nye verdien før variablene skyves ett hakk", "Å skyve variablene ett hakk før den nye verdien regnes ut", "Å lagre alle tidligere verdier i en liste under veis", "Å la metoden kalle seg selv med en lavere grad hver runde"],
      explanation: "Skriver du `forrige = naa` først, har du mistet den gamle verdien du trenger i utregningen — og feilen gir ingen feilmelding, bare feil tall. Å lagre alt i en liste virker, men er unødvendig. Selvkall er rekursjon, som er utenfor pensum i dette faget.",
    },
  ],
  'in1900-6-1': [
    {
      question: "Hvilket uttrykk er den **sentrerte** differansen for $f'(x)$?",
      options: ["`(f(x+h) - f(x-h))/(2*h)`", "`(f(x+h) - f(x-h))/(h*h)`", "`(f(x+h) - f(x))/(2*h)`", "`(f(x+h) - f(x-h))/(2*x)`"],
      explanation: "Sentrert differanse bruker punkter på hver side av `x` og deler på `2*h`. Nevneren `h*h` er en forveksling med at feilen går som $h^2$, ikke nevneren. Det tredje uttrykket blander forlengs teller med sentrert nevner og gir halvparten av riktig svar. Det fjerde deler på `2*x`, som ikke har noe med steglengden å gjøre.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef diff(f, x, h=1e-5):\n    return (f(x+h) - f(x-h))/(2*h)\n\nprint(diff(lambda x: x**2, 3.0))\n```",
      options: ["6.000000000039306", "6.000009999951316", "5.999999999960694", "12.00000000021184"],
      explanation: "Den deriverte av $x^2$ i $x = 3$ er 6, og sentrert differanse treffer på rundt $10^{-11}$. Verdien 6.000009999951316 er det forlengs differanse gir med samme `h`. Den tredje er samme feil med motsatt fortegn i telleren. Den fjerde er den deriverte av `x**3` i 2.0, altså riktig metode på feil funksjon.",
    },
    {
      question: "Feilen i forlengs differanse er omtrent $4{,}3 \\cdot 10^{-4}$ når $h = 10^{-3}$. Hva blir den omtrent når $h = 10^{-4}$?",
      options: ["Omtrent $4{,}3 \\cdot 10^{-5}$, siden feilen skrumper i takt med $h$", "Omtrent $4{,}3 \\cdot 10^{-6}$, siden feilen skrumper som $h^2$", "Omtrent $4{,}3 \\cdot 10^{-3}$, siden mindre $h$ gir mer avrunding", "Omtrent $4{,}3 \\cdot 10^{-4}$, siden metoden alt har stabilisert seg"],
      explanation: "Forlengs differanse er en førsteordens metode: tideler du steget, tideles feilen. Hundredelen hører til en andreordens metode som den sentrerte differansen. Avrundingen tar først over rundt $h = 10^{-8}$ for forlengs differanse, og feilen står ikke stille i dette området.",
    },
    {
      question: "Hva er signaturen til en **andreordens** metode i en konvergenstabell?",
      options: ["Feilen blir hundre ganger mindre når steget tideles", "Feilen blir hundre ganger mindre når steget halveres", "Feilen blir ti ganger mindre når steget tideles", "Feilen blir dobbelt så liten når antall steg dobles"],
      explanation: "Andreordens betyr at feilen er proporsjonal med steget i annen, så en tideling av steget gir faktor 100. Halvering av steget gir faktor 4, ikke 100. Faktor 10 per tideling er førsteordens, og faktor 2 per dobling av antall steg er også førsteordens.",
    },
    {
      question: "Hvorfor blir den sentrerte differansen **dårligere** når du setter $h = 10^{-12}$?",
      options: ["Fordi `f(x+h)` og `f(x-h)` blir nesten like, så differansen mister siffer", "Fordi formelen bare er gyldig for $h$ større enn $10^{-6}$ rent matematisk", "Fordi Python runder alle tall under $10^{-10}$ av til null før divisjonen", "Fordi nevneren `2*h` blir så liten at resultatet alltid blir uendelig"],
      explanation: "Med svært liten `h` er de to funksjonsverdiene like på de fleste sifrene, og subtraksjonen sletter nettopp de sifrene som bar informasjonen. Formelen er matematisk bedre jo mindre `h` er — det er flyttallene som setter grensen. Python runder ikke små tall til null, og en liten nevner gir store, ikke uendelige, verdier.",
    },
    {
      question: "Hvilke summegrenser hører til trapesmetoden med $N$ intervaller?",
      options: ["`range(1, N)`, altså bare de indre punktene mellom $a$ og $b$", "`range(0, N)`, altså med det venstre endepunktet $a$ regnet med", "`range(1, N+1)`, altså med det høyre endepunktet", "`range(0, N+1)`, altså med begge endepunktene"],
      explanation: "Endepunktene er allerede telt med halv vekt i `0.5*f(a) + 0.5*f(b)`, så summen skal bare gå over de indre punktene fra 1 til $N-1$. De tre andre grensene teller et endepunkt en gang for mye, som er den vanligste feilen i formelen og en variant av feil #1.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef trapes(f, a, b, N):\n    dx = (b - a)/N\n    s = 0.5*f(a) + 0.5*f(b)\n    for k in range(1, N):\n        s += f(a + k*dx)\n    return s*dx\n\nprint(trapes(lambda x: x, 0.0, 2.0, 4))\n```",
      options: ["2.0", "1.5", "2.5", "4.0"],
      explanation: "Integralet av $x$ fra 0 til 2 er 2, og trapesmetoden er eksakt for rette linjer uansett $N$. Verdien 1.5 får du om du utelater det høyre endepunktet, 2.5 om du teller det dobbelt, og 4.0 om du glemmer å gange med `dx` til slutt.",
    },
    {
      question: "Trapesmetoden gir feilen $1{,}6 \\cdot 10^{-2}$ med $N = 10$. Hva blir feilen omtrent med $N = 20$?",
      options: ["Omtrent $4 \\cdot 10^{-3}$, altså en firedel av feilen over", "Omtrent $8 \\cdot 10^{-3}$, altså en halvpart av feilen over", "Omtrent $1{,}6 \\cdot 10^{-4}$, altså en hundredel", "Omtrent $3{,}2 \\cdot 10^{-2}$, altså det dobbelte"],
      explanation: "Trapesmetoden er andreordens i steglengden $\\Delta x = (b-a)/N$, så en dobling av $N$ firedeler feilen. Halvparten hører til en førsteordens metode, hundredelen til en tideling av steget, og en dobling av feilen ville betydd at flere intervaller gjorde svaret verre.",
    },
    {
      question: "Hvilken linje er Newton-oppdateringen?",
      options: ["`x = x - f(x)/df(x)`", "`x = x + f(x)/df(x)`", "`x = x - df(x)/f(x)`", "`x = x - f(x)*df(x)`"],
      explanation: "Newton følger tangenten ned til nullnivået, og det gir minus foran brøken med funksjonsverdien over den deriverte. Med pluss beveger du deg bort fra nullpunktet. De to siste snur brøken eller ganger i stedet for å dele, og ingen av dem har riktig enhet.",
    },
    {
      question: "Hvorfor er `while abs(f(x)) > 1e-16:` et risikabelt stoppkriterium?",
      options: ["Fordi avrunding kan gjøre at `abs(f(x))` aldri kommer under grensen i det hele tatt", "Fordi Python ikke kan sammenligne to flyttall som er mindre enn $10^{-15}$ i verdi", "Fordi `abs` gir feil svar når argumentet er mindre enn maskinpresisjonen", "Fordi løkka da stopper etter første runde uansett hvor langt unna du er"],
      explanation: "Med en så stram toleranse kan funksjonsverdien svinge rundt null på siste siffer uten noen gang å komme under grensen, og løkka går evig. Python sammenligner små flyttall helt fint, `abs` virker som normalt, og en stram toleranse gjør at løkka kjører lenger, ikke kortere. Bruk $10^{-10}$ til $10^{-12}$ og en grense på antall runder.",
    },
    {
      question: "Hva skiller sekantmetoden fra Newtons metode?",
      options: ["Sekanten trenger to startverdier, men ingen derivert som egen funksjon", "Sekanten trenger én startverdi og den deriverte som funksjon", "Sekanten trenger to startverdier og den deriverte i begge", "Sekanten trenger én startverdi og et intervall der funksjonen skifter fortegn"],
      explanation: "Sekantmetoden erstatter tangenten med linjen gjennom de to siste punktene, så den klarer seg uten den deriverte, men må ha to punkter å starte med. Alternativ b) beskriver Newton. Å kreve både to punkter og den deriverte er ingen av metodene, og fortegnsskifte i et intervall er halveringsmetoden.",
    },
    {
      question: "Hva gjør linja `x0, x1 = x1, x_ny` i sekantmetoden?",
      options: ["Skyver de to siste verdiene videre i én samtidig tilordning", "Bytter om verdiene i `x0` og `x1` uten å bruke `x_ny`", "Setter begge variablene til `x_ny`, som er den nyeste verdien", "Lager en tuppel av de tre verdiene som løkka kan lese neste runde"],
      explanation: "Høyresiden regnes ferdig før noen tilordning skjer, så den gamle `x1` havner trygt i `x0` samtidig som `x_ny` havner i `x1`. Uten den samtidige formen ville `x0 = x1` ødelagt verdien før den ble brukt. Linja bytter ikke om verdiene, setter dem ikke like, og lager ingen tuppel som blir liggende.",
    },
    {
      question: "Hva må funksjonen `fun` ta og returnere når den sendes til `root`?",
      options: ["Ett array inn og ett array ut, med én komponent per likning", "Ett tall inn og ett tall ut, siden `root` løser én likning", "Ett array inn og ett tall ut, nemlig summen av alle likningene", "To argumenter inn, gjetningen og toleransen, og ett array ut"],
      explanation: "`root` arbeider med systemer, så både argumentet og returverdien er array — også når det bare er én ukjent. Med ett tall ut kan ikke løseren behandle flere likninger, en sum ville blandet likningene sammen, og toleransen sendes ikke inn i `fun`, men styres av løseren selv.",
    },
    {
      question: "Etter `sol = root(fun, np.array([1.0]))` — hva er `sol.x`?",
      options: ["Et array med løsningen, så et enkelt tall hentes med `sol.x[0]`", "Et tall med løsningen, klart til bruk i den videre regningen din", "Startgjetningen som ble sendt inn, uendret av løseren", "En tuppel med løsningen og antall runder løseren brukte"],
      explanation: "`sol.x` er alltid et array, én komponent per ukjent, så et enkelt tall må hentes med indeks. Det er ikke startgjetningen — den ligger igjen i variabelen du sendte inn — og det er ingen tuppel. Statusen om løseren lyktes ligger i `sol.success`.",
    },
    {
      question: "Et program skal sende funksjonen $g(x) = x^2 - 2$ til en nullpunktsløser, men skriver `g = x**2 - 2` på øverste linje. Hva skjer?",
      options: ["Programmet stopper straks med `NameError: name 'x' is not defined`", "Programmet stopper med `TypeError: 'float' object is not callable`", "Programmet kjører, men `g` blir null uansett hvilken `x` løseren prøver", "Programmet kjører, og `g` regnes på nytt hver gang løseren kaller den"],
      explanation: "Linja er et uttrykk som skal regnes ut med en gang, og siden `x` ikke finnes ennå, stopper det der. Hadde `x` vært definert fra før, ville `g` blitt ett tall, og da hadde løseren gitt `TypeError` når den prøvde å kalle det. Å sende et uttrykk der en funksjon kreves, er feil #19; riktig er `g = lambda x: x**2 - 2` eller en `def`.",
    },
    {
      question: "Hva er galt med linja `import sqrt from math`?",
      options: ["Rekkefølgen: modulen skal stå først, `from math import sqrt`", "Navnet: funksjonen heter `squareroot` i `math`-modulen", "Ingenting, men den henter hele modulen i stedet for én funksjon", "Punktumet mangler, det skal stå `import math.sqrt from math`"],
      explanation: "Python vil ha `from <modul> import <navn>`, så modulen kommer først. Linja slik den står gir `SyntaxError` allerede før noe kjøres. Funksjonen heter `sqrt`, linja er ikke gyldig i noen form, og `import math.sqrt` er heller ikke lovlig. Dette er feil #10 og en fast felle i «finn feilen»-oppgaver.",
    },
    {
      question: "En testfunksjon kontrollerer `diff` mot et kjent svar. Hvilken toleranse passer?",
      options: ["`1e-6` for sentrert differanse, som treffer på rundt $10^{-11}$", "`1e-14` for sentrert differanse, siden metoden er andreordens", "`1e-6` for forlengs differanse, som treffer på omtrent $10^{-5}$", "Ingen toleranse, siden `expected == computed` er presist nok"],
      explanation: "Toleransen må være romsligere enn feilen metoden faktisk gjør. Sentrert differanse med `h = 1e-5` bommer med rundt $10^{-11}$, så `1e-6` er trygt. `1e-14` er strammere enn metoden klarer. Forlengs differanse bommer med rundt $10^{-5}$ og ville feilet mot `1e-6`. Å bruke `==` på flyttall er feil #11.",
    },
  ],
  'in1900-6-2': [
    {
      question: "En differenslikning skal simuleres over $N = 8$ skritt. Hvor mange verdier har tabellen, og hvor mange runder går løkka?",
      options: ["9 verdier og 8 runder, altså `np.zeros(9)` og `range(8)`", "8 verdier og 8 runder, altså `np.zeros(8)` og `range(8)`", "9 verdier og 9 runder, altså `np.zeros(9)` og `range(9)`", "8 verdier og 7 runder, altså `np.zeros(8)` og `range(7)`"],
      explanation: "Startverdien er også en verdi, så $N$ skritt gir $N+1$ verdier. Løkka går over skrittene og har derfor $N$ runder. De tre andre svarene er varianter av av-én-feilen #1: to av dem lar løkka skrive utenfor tabellen, og den siste lar siste plass stå urørt.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\nx = np.zeros(4)\nx[0] = 1.0\nfor n in range(3):\n    x[n+1] = 2*x[n] + 1\nprint(x)\n```",
      options: ["`[ 1.  3.  7. 15.]`", "`[1, 3, 7, 15]`", "`[ 0.  1.  3.  7.]`", "`[ 1.  3.  7. 15.  0.]`"],
      explanation: "Tre runder fyller `x[1]`, `x[2]` og `x[3]` fra startverdien 1. Tabellen skrives med punktum fordi `np.zeros` gir flyttall, og uten komma fordi det er et array og ikke en liste. Alternativ c) er hva du får om startverdien mangler, og d) har en plass for mye.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\na = np.zeros(4)\nb = np.zeros(4)\na[0] = 2.0\nb[0] = 1.0\nfor n in range(3):\n    b[n+1] = b[n] + a[n]\n    a[n+1] = a[n] + b[n+1]\nprint(a)\n```",
      options: ["`[ 2.  5. 13. 34.]`", "`[ 2.  3.  5.  8.]`", "`[ 1.  3.  8. 21.]`", "`[ 2.  5. 12. 30.]`"],
      explanation: "Linja for `a[n+1]` bruker den **ferske** `b[n+1]` fra linja over, så første runde gir $2 + 3 = 5$ og ikke $2 + 1 = 3$. Alternativ b) er hva du får med den gamle `b[n]`, c) er innholdet i `b` og ikke i `a`, og d) er samme mønster med en regnefeil i tredje runde.",
    },
    {
      question: "Hva skjer hvis du glemmer linja `x[0] = x0` før løkka?",
      options: ["Forløpet starter på 0 uten noen feilmelding, siden `np.zeros` har lagt nuller der", "Programmet stopper med `ValueError` fordi startverdien ikke er satt", "Løkka hopper over første runde og fyller resten av tabellen normalt", "NumPy fyller inn startverdien selv, hentet fra det første argumentet"],
      explanation: "`np.zeros` har allerede fylt tabellen, så det ligger en 0 på plass null og programmet regner videre derfra. Ingen feilmelding kommer, og tallene ser tilforlatelige ut — det er derfor dette er en av de dyreste feilene i sjangeren. NumPy gjetter aldri startverdier, og løkka går sine runder som normalt.",
    },
    {
      question: "Systemet er $y_{n+1} = y_n + \\Delta t\\,(a - x_n)$ og $x_{n+1} = x_n + \\Delta t\\,y_{n+1}$. Hvilken linje skal stå først inne i løkka?",
      options: ["`y[n+1]`-linja, fordi `x`-likningen bruker den nye `y`-verdien", "`x[n+1]`-linja, fordi `x` er nevnt først i oppgaveteksten", "`x[n+1]`-linja, fordi `x` bare avhenger av gamle verdier", "Det er likegyldig, siden begge tabellene fylles i samme runde"],
      explanation: "Høyresiden i `x`-likningen inneholder $y_{n+1}$, altså den nye verdien, så den må være beregnet først. Rekkefølgen i oppgaveteksten betyr ingenting. `x`-likningen avhenger nettopp ikke bare av gamle verdier, og rekkefølgen er bare likegyldig når ingen høyreside bruker en $n+1$-verdi.",
    },
    {
      question: "Hva er symptomet på at to koblede likninger er oppdatert i **feil** rekkefølge?",
      options: ["Den ene størrelsen står stille eller vokser umulig, uten noen feilmelding", "Programmet stopper straks med `IndexError` på den andre oppdateringslinja", "Begge tabellene blir stående helt fulle av nuller etter hele løkka", "Tallene blir riktige, men tabellene kommer ut i motsatt rekkefølge"],
      explanation: "Den nye verdien som leses for tidlig, er fortsatt 0 fra `np.zeros`, så leddet den inngår i faller bort. Typisk står den ene størrelsen bom stille mens den andre lever sitt eget liv. Det gir ingen `IndexError`, tabellene blir ikke tomme, og returrekkefølgen har ingenting med saken å gjøre.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\na = np.zeros(5)\na[0] = 100.0\nfor n in range(5):\n    a[n+1] = a[n] + 1\n```",
      options: ["`IndexError: index 5 is out of bounds for axis 0 with size 5`", "`ValueError: could not broadcast input array into shape (5,)`", "`[100. 101. 102. 103. 104.]`, siden løkka stopper ved siste plass", "`[100. 101. 102. 103. 104. 105.]`, siden NumPy utvider tabellen"],
      explanation: "Tabellen har fem plasser, med lovlige indekser 0 til 4, mens siste runde prøver å skrive til indeks 5. Feilen er en `IndexError`, ikke en `ValueError` om form. NumPy-tabeller vokser aldri av seg selv, og løkka stopper ikke tidlig av hensyn til tabellen. Fiksen er `np.zeros(6)` eller `range(4)`.",
    },
    {
      question: "Simuleringen har `dt = 0.25` og `N = 400`. Hva gir `np.linspace(0, N*dt, N+1)`?",
      options: ["401 punkter fra 0 til 100, med avstand 0,25 mellom naboene", "400 punkter fra 0 til 100, med avstand 0,25 mellom naboene", "401 punkter fra 0 til 400, med avstand 1,00 mellom naboene", "101 punkter fra 0 til 100, med avstand 1,00 mellom naboene"],
      explanation: "Tredje argument til `linspace` er antall punkter, og sluttiden er `N*dt` $= 100$. Tabellen får dermed like mange punkter som verditabellene. Med 400 punkter ville ikke lengdene stemt i plottet, og alternativene med sluttid 400 eller avstand 1,00 forveksler skritt med tidsenheter.",
    },
    {
      question: "Funksjonen slutter med `return x, y`. Hva står i `a` etter linja `a = simuler(3)`?",
      options: ["En tuppel med begge tabellene, så `a[0]` er den første av dem", "Bare den første tabellen, siden Python returnerer én verdi om gangen", "Bare den siste tabellen, siden den overskriver den forrige returverdien", "En feilmelding, siden to returverdier krever to navn på venstre side"],
      explanation: "Komma i `return` lager en tuppel, og hele tuppelen havner i `a`. Vil du ha dem hver for seg, skriver du `a, b = simuler(3)`. Python kaster ikke bort noen av verdiene, og det er ingen feil å ta imot dem samlet — det er en helt vanlig måte å gjøre det på.",
    },
    {
      question: "Hva viser `plt.plot(B, R)` når `B` og `R` er de to bestandstabellene?",
      options: ["Fasekurven: rovdyr mot byttedyr, uten tid som akse i figuren", "Begge bestandene mot tid, i samme figur med to kurver", "Byttedyrbestanden mot tid, med rovdyrene som fargeskala", "Differansen mellom de to bestandene, tegnet mot skrittnummer"],
      explanation: "Første argument blir førsteaksen og andre argument andreaksen, så begge aksene er bestander og tiden er borte fra figuren. Skal du ha kurver mot tid, må tidsaksen inn som første argument i to separate kall. Kallet lager verken fargeskala eller differanse.",
    },
    {
      question: "Figuren har to kurver med `label=` på hvert `plt.plot`-kall, men ingen `plt.legend()`. Hva blir resultatet?",
      options: ["Kurvene tegnes, men navnene vises ikke — det trengs begge linjene", "Navnene vises likevel, fordi `label=` er nok til å lage legenden", "Figuren blir helt tom, siden `label=` krever en legende for å tegne", "Den ene kurven vises med navn, den andre uten navn i figuren"],
      explanation: "`label=` registrerer navnet, mens `plt.legend()` er den som faktisk tegner boksen med navnene. Uten den siste linja blir figuren riktig, men uten forklaring — og det trekker i uttellingen når oppgaven ber om legende. Kurvene tegnes som normalt, og figuren blir verken tom eller halvveis navngitt.",
    },
    {
      question: "Hva er likevektsverdien for $c_{n+1} = 0{,}8\\,c_n + 5$?",
      options: ["25, siden $c = 0{,}8c + 5$ gir $0{,}2c = 5$", "5, siden det er leddet som legges til hver runde", "6,25, siden $5$ delt på $0{,}8$ gir den verdien", "0, siden faktoren 0,8 er mindre enn 1"],
      explanation: "Likevekten er den verdien som gjentar seg selv, altså løsningen av $c = F(c)$. Her gir det $0{,}2c = 5$ og $c = 25$. Tilskuddet 5 er ikke likevekten i seg selv, $5/0{,}8$ blander sammen leddene, og 0 ville vært likevekten bare uten tilskuddet.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\nx = np.zeros(3)\nv = np.zeros(3)\nx[0] = 1.0\nfor n in range(2):\n    v[n+1] = v[n] - 0.1*x[n]\n    x[n+1] = x[n] + 0.1*v[n+1]\nprint(np.round(x, 4))\n```",
      options: ["`[1.     0.99   0.9701]`", "`[1.     1.     1.    ]`", "`[1.     0.99   0.98  ]`", "`[1.     0.9    0.8   ]`"],
      explanation: "Farten oppdateres først og brukes med én gang: `v[1]` blir $-0{,}1$, så `x[1]` blir $1 - 0{,}01 = 0{,}99$. Alternativ b) er hva du får med linjene i motsatt rekkefølge, siden `v[n+1]` da leses som 0. De to siste svarer til å bruke farten uendret eller å trekke fra hele `0.1` hver runde.",
    },
    {
      question: "Du halverer $\\Delta t$ og dobler $N$ slik at sluttiden er den samme. Feilen i sluttverdien halveres. Hva sier det om metoden?",
      options: ["At den er førsteordens, altså at feilen er proporsjonal med steget", "At den er andreordens, altså at feilen går som steget i annen", "At den har nådd avrundingsgrensen og ikke kan bli bedre", "At koden har en av-én-feil, siden feilen burde blitt firedelt"],
      explanation: "Feil som halveres når steget halveres, er definisjonen på en førsteordens metode — og skrittmønsteret $x_{n+1} = x_n + \\Delta t\\,f(\\ldots)$ er nettopp det. Andreordens ville gitt en firedel. Avrundingsgrensen kjennetegnes av at feilen slutter å synke eller begynner å vokse, og en av-én-feil gir ikke en pen faktor 2.",
    },
    {
      question: "Hva er likevektsverdien i den logistiske modellen $x_{n+1} = x_n + r\\,x_n(1 - x_n/K)$ når $x_0 > 0$?",
      options: ["$K$, siden parentesen blir null når $x_n$ er lik $K$", "$r$, siden vekstraten bestemmer hvor forløpet stanser", "$K/r$, siden bæreevnen deles på vekstraten i likevekt", "$rK$, siden de to parameterne ganges sammen i likevekt"],
      explanation: "Setter du $x_n = K$, blir $1 - x_n/K$ lik null, hele tilveksten forsvinner og verdien gjentar seg. Vekstraten $r$ styrer bare hvor fort forløpet nærmer seg grensen, ikke hvor det havner, og verken $K/r$ eller $rK$ gjør parentesen null.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\nx = np.zeros(5)\nx[0] = 1.0\nfor n in range(3):\n    x[n+1] = x[n] + 2\nprint(x)\n```",
      options: ["`[1. 3. 5. 7. 0.]`", "`[1. 3. 5. 7. 9.]`", "`[1. 3. 5. 7.]`", "`[0. 1. 3. 5. 7.]`"],
      explanation: "Tabellen har fem plasser, men løkka går bare tre runder, så siste plass blir stående med nullen fra `np.zeros`. Dette er av-én-feilen i den varianten som **ikke** crasher, og den viser seg som et brått fall til null helt til høyre i et plott. Tabellen krymper ikke, og startverdien blir ikke forskjøvet.",
    },
    {
      question: "Hvorfor bruker boka tabeller framfor to enkle variabler i koblede differenslikninger?",
      options: ["Fordi den gamle verdien blir stående på sin egen plass og ikke overskrives", "Fordi enkle variabler ikke kan brukes i en `for`-løkke i Python", "Fordi tabeller regner raskere enn variabler når `N` er stort", "Fordi en tabell automatisk holder styr på hvilken linje som skal først"],
      explanation: "Med `x = x + dt*y` etterfulgt av `y = y - dt*x` er `x` allerede endret når `y` regnes, og den gamle verdien er tapt. Med `x[n]` og `x[n+1]` ligger begge trygt. Enkle variabler fungerer fint i løkker, farten er ikke poenget her, og rekkefølgen må du fortsatt bestemme selv.",
    },
    {
      question: "Etter `x = simuler(2.0, 20)` med malen fra kapitlet — hva gir `len(x)`?",
      options: ["21, siden 20 skritt gir 20 nye verdier pluss startverdien", "20, siden `N` er antall verdier som skal regnes ut", "19, siden løkka går fra 0 til `N-1` og fyller så mange plasser", "22, siden både startverdien og sluttverdien kommer i tillegg"],
      explanation: "Malen allokerer `np.zeros(N+1)`, og løkka fyller `x[1]` til `x[N]`. Det gir 21 verdier for $N = 20$. Svarene 20 og 19 er av-én-feilen #1 i to varianter, og 22 teller sluttverdien to ganger.",
    },
  ],
  'in1900-6-3': [
    {
      question: "En differenslikning skal simuleres med `N` skritt. Hvor mange plasser trenger tabellen?",
      options: ["`N+1`", "`N`", "`N-1`", "`2*N`"],
      explanation: "Startverdien er også en verdi, så `N` skritt gir `N+1` verdier og tabellen lages med `np.zeros(N+1)`. Alternativ b) gir `IndexError` på siste runde, som er felle #1. Alternativ c) og d) treffer verken antall skritt eller antall verdier.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.zeros(4)\nx[0] = 1.0\nfor n in range(2):\n    x[n+1] = 2*x[n] + 1\nprint(x)\n```",
      options: ["`[1. 3. 7. 0.]`", "`[1. 3. 7. 15.]`", "`[1. 2. 5. 0.]`", "`[0. 1. 3. 7.]`"],
      explanation: "Løkka gjør to oppdateringer, så bare `x[1]` og `x[2]` fylles ut, og `x[3]` blir stående som 0.0. Alternativ b) forutsetter tre oppdateringer. Alternativ c) glemmer å legge til 1, og d) forskyver hele tabellen ett hakk.",
    },
    {
      question: "I systemet $y_{n+1} = y_n + a y_n$, $x_{n+1} = x_n + y_{n+1}$ — hvilken linje må stå først i løkka?",
      options: ["`y[n+1] = ...`", "`x[n+1] = ...`", "Rekkefølgen spiller ingen rolle", "Begge må stå i hver sin løkke"],
      explanation: "Uttrykket for $x_{n+1}$ bruker $y_{n+1}$, altså en indeks $n+1$ på høyre side, så `y[n+1]` må være beregnet først. Alternativ b) leser en plass som ennå er 0.0. Alternativ d) er feil: begge oppdateres i samme runde.",
    },
    {
      question: "Hvor skal startverdien `x[0] = x0` stå?",
      options: ["Før løkka", "Som første linje inne i løkka", "Etter løkka, før `return`", "Som argument til `np.zeros`"],
      explanation: "Startverdien settes én gang, før løkka begynner. Alternativ b) tilbakestiller plass 0 i hver runde. Alternativ c) kommer for sent — hele forløpet er da regnet ut fra 0. Alternativ d) blander sammen antall plasser og innholdet i dem.",
    },
    {
      question: "Hva skjer med `x = np.zeros(N)` og `for n in range(N):`?",
      options: ["`IndexError` på siste runde", "Tabellen får en null på slutten", "Programmet gir riktig svar", "Løkka går uendelig lenge"],
      explanation: "Siste runde har `n = N-1` og skriver til `x[N]`, som ikke finnes i en tabell med `N` plasser. Alternativ b) er det som skjer i den motsatte feilen — riktig tabellstørrelse med for kort løkke — og den er verre, fordi den ikke gir noen feilmelding.",
    },
    {
      question: "Hva er `x.argmax()`?",
      options: ["Indeksen til den største verdien", "Den største verdien i tabellen", "Antall verdier over gjennomsnittet", "Den siste verdien i tabellen"],
      explanation: "`argmax` gir posisjonen, ikke verdien; verdien får du med `x.max()`. Skillet er praktisk viktig når oppgaven spør «på hvilken dag var smittetoppen» — da er det indeksen du vil ha.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nA = np.zeros(3)\nB = np.zeros(3)\nA[0] = 10.0\nB[0] = 4.0\nfor n in range(2):\n    d = 0.5*(A[n] - B[n])\n    A[n+1] = A[n] - d\n    B[n+1] = B[n] + d\nprint(A[2], B[2], A[2] + B[2])\n```",
      options: ["`7.0 7.0 14.0`", "`7.75 6.25 14.0`", "`8.5 5.5 14.0`", "`7.0 7.0 13.5`"],
      explanation: "Første skritt gir `d = 3.0`, så A faller til 7.0 og B stiger til 7.0. Andre skritt gir `d = 0.0`, og begge står stille. Alternativ b) og c) forutsetter at overføringen bare er en brøkdel av differansen. Summen er 14.0 hele veien, fordi det som forlater A kommer til B — det er bevaringssjekken.",
    },
    {
      question: "Hva må gjelde for tidsaksen i plott-deloppgaven?",
      options: ["Den må ha like mange punkter som tabellene", "Den må alltid gå fra 0 til 1", "Den må lages med `range(N)`", "Den må være et NumPy-array"],
      explanation: "`plt.plot(t, x)` krever at `t` og `x` er like lange; ellers stopper kallet med en feil om ulik dimensjon. Alternativ c) gir `N` punkter mot tabellens `N+1`. En vanlig liste fungerer fint som førsteakse, så alternativ d) er unødvendig strengt.",
    },
    {
      question: "Hvilken linje mangler når figuren viser to kurver uten at man kan se hvilken som er hvilken?",
      options: ["`plt.legend()`", "`plt.title('Figur')`", "`plt.grid()`", "`plt.axis('equal')`"],
      explanation: "`label=` i hvert `plot`-kall lagrer navnene, men de vises først når `plt.legend()` kalles. Alternativ b) gir figuren en overskrift, ikke kurvene navn. Alternativ c) og d) endrer bare hvordan rutenettet og aksene ser ut.",
    },
    {
      question: "I en smittemodell der ingen forsvinner, hva er den beste kontrollen uten fasit?",
      options: ["At $S + I + R$ er konstant", "At $I$ alltid vokser", "At $S$ ender på null", "At alle tabellene er like lange"],
      explanation: "Når ingen forsvinner ut av modellen, må summen være den samme på hvert tidspunkt — driver den, har du mistet et ledd eller brukt feil verdi. Alternativ b) og c) er ikke sanne i modellen. Alternativ d) er riktig, men sier ingenting om regnestykket.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nx = np.zeros(6)\nx[0] = 100.0\nfor n in range(5):\n    x[n+1] = 0.5*x[n]\nprint(x[3], x.size, x[-1])\n```",
      options: ["`12.5 6 3.125`", "`12.5 5 6.25`", "`25.0 6 3.125`", "`12.5 6 0.0`"],
      explanation: "Halveringene gir 100, 50, 25, 12.5, 6.25 og 3.125, så `x[3]` er 12.5 og `x[-1]` er den sjette verdien, 3.125. Alternativ b) forveksler `x.size` med antall oppdateringer. Alternativ d) forutsetter at siste plass aldri ble fylt — men fem oppdateringer fyller nettopp opp en tabell med seks plasser.",
    },
    {
      question: "Rovdyr–byttedyr-modellen har likevekt der begge endringene er null. Hva er likevektsverdien for byttedyr når $B' = aB - bBR$ og $R' = cBR - dR$?",
      options: ["$B = d/c$", "$B = a/b$", "$B = c/d$", "$B = b/a$"],
      explanation: "Rovdyrlikningen står stille når $cBR = dR$, altså $B = d/c$. Alternativ b) er likevektsverdien for **rovdyr**, som følger av byttedyrlikningen — de to forveksles lett fordi hver bestand bestemmes av den andres likning.",
    },
    {
      question: "Hva viser en fasekurve som ikke et tidsplott viser?",
      options: ["Om systemet nærmer seg en likevekt", "Hvor lang en svingning er i tid", "Startverdien til hver størrelse", "Hvor mange skritt simuleringen tok"],
      explanation: "En spiral innover betyr dempede svingninger mot likevekt, en lukket løkke betyr vedvarende svingninger. Alternativ b) er nettopp det fasekurven **mister**, siden ingen av aksene er tid. Startverdien ser du i begge plottetypene.",
    },
    {
      question: "En simulering av den diskrete logistiske likningen gir uregelmessige verdier for en stor `r`. Hva er mest sannsynlig?",
      options: ["Det er en egenskap ved modellen", "Tabellen er for kort", "Startverdien mangler", "Løkkegrensen er feil"],
      explanation: "Den diskrete logistiske likningen gir rolig vekst, periodiske svingninger eller uregelmessig forløp avhengig av `r` alene. Alternativ b), c) og d) er reelle feil, men de ville gitt feil svar for **alle** parametere — ikke bare for store `r`.",
    },
    {
      question: "Hva er den mest robuste måten å unngå feil oppdateringsrekkefølge på?",
      options: ["Regn begge endringene i egne variabler først", "Skriv alltid `x` før `y`", "Bruk to løkker etter hverandre", "Sett alle startverdier til null"],
      explanation: "Regner du `dx` og `dy` fra de gamle verdiene før noen tabell skrives, kan rekkefølgen aldri bli feil. Alternativ b) er tilfeldig og virker bare noen ganger. Alternativ c) er en reell feil: den andre løkka ville brukt ferdige verdier fra den første.",
    },
    {
      question: "Hva returnerer `simuler(x0, y0, N)` når den slutter med `return x, y`?",
      options: ["En tuppel med to tabeller", "To separate funksjonskall", "En tabell med to kolonner", "Bare den første tabellen"],
      explanation: "`return x, y` gir en tuppel, som pakkes ut med `x, y = simuler(...)`. Alternativ c) beskriver et 2D-array, som er noe annet — det får du fra ODE-løseren i Del 7, ikke fra denne malen.",
    },
  ],
  'in1900-7-1': [
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\n\nt = np.linspace(0, 5, 26)\nprint(len(t), t[1] - t[0])\n```",
      options: ["26 0.2", "25 0.2", "26 0.192", "27 0.2"],
      explanation: "`np.linspace` teller PUNKTER, ikke steg: 26 punkter fra 0 til 5 gir 25 steg, hvert på $5/25 = 0{,}2$. Distraktoren «25 0.2» forveksler antall punkter med antall steg, og «26 0.192» deler intervallet på antall punkter ($5/26$) i stedet for på antall steg. «27 0.2» legger til ett punkt for mye.",
    },
    {
      question: "Du skal løse et initialverdiproblem på $[0, T]$ med `N` steg. Hvilken kombinasjon av allokering og løkke er riktig?",
      options: ["`t = np.linspace(0, T, N+1)` og `for n in range(N):`", "`t = np.linspace(0, T, N)` og `for n in range(N):`", "`t = np.linspace(0, T, N+1)` og `for n in range(N+1):`", "`t = np.linspace(0, T, N)` og `for n in range(N-1):`"],
      explanation: "`N` steg krever `N+1` punkter, og løkka skal gjøre `N` oppdateringer der den siste skriver til `u[N]`. Varianten med `range(N+1)` gir `IndexError` på siste runde fordi den prøver å skrive til `u[N+1]`. De to variantene med `linspace(0, T, N)` mangler ett punkt — det er feilkode #1, den hyppigste i faget.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\n\nu = np.zeros(3)\nu[0] = 1.0\ndt = 0.25\nfor n in range(2):\n    u[n+1] = u[n] + dt*(-2*u[n])\n    print(f\"{u[n+1]:.2f}\", end=' ')\n```",
      options: ["0.50 0.25 ", "1.00 0.50 ", "0.50 0.25 0.13 ", "0.50\n0.25\n"],
      explanation: "Hvert steg ganger verdien med $1 - 2 \\cdot 0{,}25 = 0{,}5$, så `u[1] = 0.50` og `u[2] = 0.25`, og `end=' '` legger alt på én linje. «1.00 0.50» skriver `u[n]` i stedet for `u[n+1]`, altså startverdien først. Tre tall ville krevd `range(3)`, og linjeskift ville krevd at `end=' '` var utelatt.",
    },
    {
      question: "Hva gjør `np.zeros_like(t)`?",
      options: ["lager et nytt nullarray med samme form og type som `t`", "setter alle elementene i `t` til null", "lager en kopi av `t` med de samme verdiene", "lager et nullarray med ett element mer enn `t`"],
      explanation: "`zeros_like` returnerer et NYTT array, like langt som `t` og fylt med nuller; `t` er urørt. Distraktoren «setter alle elementene i `t` til null» beskriver `t[:] = 0`, og «kopi med de samme verdiene» er `t.copy()`. Formen blir eksakt den samme, ikke ett element lenger — det er nettopp poenget med å bruke den.",
    },
    {
      question: "Hvilken linje er forlengs Euler-oppdateringen slik boka og alle sett fra 2023 skriver den?",
      options: ["`u[n+1] = u[n] + dt*f(t[n], u[n])`", "`u[n+1] = u[n] + dt*f(u[n], t[n])`", "`u[n+1] = u[n] + dt*f(t[n+1], u[n])`", "`u[n+1] = u[n] + dt*f(t[n], u[n+1])`"],
      explanation: "Høyresiden kalles `f(t, u)` — tid først, tilstand etterpå — og begge evalueres i punktet du står i, altså indeks `n`. Varianten `f(u[n], t[n])` er den gamle argumentrekkefølgen fra sett 2020–2022 (feilkode #14). `f(t[n+1], u[n])` og `f(t[n], u[n+1])` er andre metoder: den siste er baklengs Euler, som ikke kan regnes ut direkte.",
    },
    {
      question: "Forlengs Euler brukes på $u' = -\\lambda u$ med $\\lambda = 10$. Hva er den største steglengden som holder løsningen begrenset?",
      options: ["0,2", "0,1", "0,5", "10"],
      explanation: "Stabilitetskravet er $\\Delta t < 2/\\lambda = 2/10 = 0{,}2$. Med 0,1 er du trygt innenfor, men det er ikke den STØRSTE. 0,5 gir faktoren $1 - 5 = -4$, altså vekslende fortegn og eksplosjon. 10 er $\\lambda$ selv, ikke en steglengde.",
    },
    {
      question: "Du halverer steglengden og ser at maksfeilen går fra 4,0e-02 til 1,9e-02. Hvilken konvergensorden har metoden?",
      options: ["1 — feilen halveres når steget halveres", "2 — feilen firedeles når steget halveres", "4 — feilen deles på 16 når steget halveres", "0 — feilen er uavhengig av steget"],
      explanation: "Forholdet $4{,}0/1{,}9 \\approx 2$ betyr feil $\\propto \\Delta t^1$, altså orden 1 — det forlengs Euler har. Orden 2 (Heun, midtpunkt) ville gitt forholdet 4, og orden 4 (Runge–Kutta 4) forholdet 16. Orden 0 finnes ikke som en brukbar metode: da hjelper det ikke å forfine.",
    },
    {
      question: "Hvor mange kall til høyresiden `f` gjør Heuns metode per tidssteg?",
      options: ["to — ett i punktet du står i, og ett i prøvepunktet", "ett — samme antall som forlengs Euler", "fire — ett for hver av k-ene i formelen", "ingen — Heun bruker en lukket formel"],
      explanation: "Heun regner `k1 = f(t[n], u[n])` og `k2 = f(t[n] + dt, u[n] + dt*k1)`, altså to kall. Forlengs Euler bruker ett. Fire kall er Runge–Kutta 4. En lukket formel finnes bare for spesielle høyresider, som baklengs Euler på $-\\lambda u$.",
    },
    {
      question: "Hvilken linje er baklengs Euler for $u' = -\\lambda u$, skrevet i lukket form?",
      options: ["`u[n+1] = u[n]/(1 + dt*lam)`", "`u[n+1] = u[n]*(1 - dt*lam)`", "`u[n+1] = u[n]/(1 - dt*lam)`", "`u[n+1] = u[n] + dt*lam*u[n]`"],
      explanation: "Setter du inn $f = -\\lambda u_{n+1}$ og løser for $u_{n+1}$, får du $u_{n+1}(1 + \\Delta t\\lambda) = u_n$, altså divisjon med $1 + \\Delta t \\lambda$. `u[n]*(1 - dt*lam)` er forlengs Euler for samme problem. Med minus i nevneren blir uttrykket ustabilt (og udefinert når $\\Delta t\\lambda = 1$), og den siste linja har mistet minustegnet i høyresiden.",
    },
    {
      question: "Hva skjer hvis du setter `u[0] = u0` ETTER løkka i stedet for før?",
      options: ["hele løsningen blir null bortsett fra startverdien", "programmet krasjer med `IndexError`", "løsningen blir riktig, men forskjøvet ett steg", "løsningen blir riktig — rekkefølgen har ingen betydning"],
      explanation: "Løkka leser `u[n]` for å regne `u[n+1]`. Starter alt på null, blir alle oppdateringene null, og til slutt overskrives bare `u[0]`. Ingen indeks er utenfor arrayet, så det krasjer ikke — koden virker og gir tull, som er verre. Feilen er ikke en forskyvning: informasjonen er tapt, ikke flyttet.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\n\nt = np.linspace(0, 1, 3)\nu = np.zeros_like(t)\nu[0] = 4\nfor n in range(2):\n    u[n+1] = u[n]/2\nprint(u)\n```",
      options: ["[4. 2. 1.]", "[0. 2. 1.]", "[4. 2. 1. 0.5]", "[4. 2.]"],
      explanation: "`linspace(0, 1, 3)` gir tre punkter, så `u` har tre plasser: 4, 2 og 1. «[0. 2. 1.]» ville vært svaret hvis `u[0]` var satt etter løkka. Fire tall ville krevd fire punkter, og to tall ville krevd `range(1)`.",
    },
    {
      question: "Hva er `u[-1]` etter et kall `t, u = forward_euler(f, 3, 30, 1)`?",
      options: ["løsningen i sluttiden $t = 3$", "løsningen ett steg før slutten", "startverdien, fordi $-1$ teller bakover til begynnelsen", "det siste tidspunktet, altså 3"],
      explanation: "Negativ indeks teller fra slutten, så `u[-1]` er siste element i LØSNINGSarrayet — verdien ved $t = 3$. Nest siste verdi er `u[-2]`. Indeksen ruller ikke rundt til starten, og tidspunktet 3 ligger i `t[-1]`, ikke i `u[-1]`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\n\nt = np.linspace(0, 2, 5)\nprint(t[1] - t[0], 2/5)\n```",
      options: ["0.5 0.4", "0.4 0.4", "0.5 0.5", "0.4 0.5"],
      explanation: "Fem punkter gir fire steg, så avstanden er $2/4 = 0{,}5$, mens `2/5` er 0,4 — nettopp av-én-feilen (#1) i tallform. «0.4 0.4» og «0.5 0.5» forutsetter at de to uttrykkene er like, og det er de bare når antall punkter er antall steg pluss én, som her ikke gjelder for `2/5`.",
    },
    {
      question: "Hvilken testfunksjon følger bokas idiom?",
      options: ["`def test_f(): forventet = 4.0; beregnet = los(); tol = 1e-10; assert abs(forventet - beregnet) < tol, 'feil'`", "`def test_f(): assert los() == 4.0, 'feil'`", "`def test_f(tol): assert abs(4.0 - los()) < tol, 'feil'`", "`def test_f(): print('resultat:', los())`"],
      explanation: "Idiomet er: ingen argumenter, sammenlign med `abs(forventet - beregnet) < tol`, og gi en melding i `assert`. Direkte `==` på flyttall er feilkode #11 og feiler på avrundinger. En testfunksjon som tar `tol` som argument bryter kravet om at den skal kunne kalles uten argumenter, og en som bare skriver ut, tester ingenting.",
    },
    {
      question: "Hvorfor sender vi funksjonsnavnet `f` uten parenteser inn til løseren?",
      options: ["fordi løseren selv skal kalle `f` i mange forskjellige punkter", "fordi parenteser bare brukes når funksjonen har flere argumenter", "fordi `f` uten parenteser er en tekststreng med navnet", "fordi `f(t, u)` ville sendt hele arrayet i stedet for ett tall"],
      explanation: "`f` uten parenteser er selve funksjonsobjektet, og løseren kaller det med nye `t` og `u` i hvert steg. Skriver du `f(t, u)` i kallet, sender du ETT tall — resultatet — og løseren krasjer med `TypeError` når den prøver å kalle et tall. Det handler ikke om antall argumenter, og navnet er ikke en streng.",
    },
    {
      question: "En oppgave ber om «en løser etter samme skjema, men med midtpunktsformelen». Hva må endres i `forward_euler`?",
      options: ["bare oppdateringslinja inne i løkka", "hele funksjonen, siden metoden er en annen", "allokeringen, fordi midtpunkt trenger dobbelt så mange punkter", "returverdien, fordi midtpunkt gir to løsninger"],
      explanation: "Rammen — `linspace` med `N+1`, `zeros_like`, `u[0]` før løkka, `range(N)`, `return t, u` — er identisk for alle ett-stegs metoder. Bare linjene som regner ut neste verdi, byttes. Antall punkter er det samme (metoden bruker mellompunkter, men lagrer dem ikke), og det returneres fortsatt ett tidsarray og ett løsningsarray.",
    },
  ],
  'in1900-7-2': [
    {
      question: "Hvilken rekkefølge er riktig når du bruker det utleverte hierarkiet?",
      options: ["instansiér med `f`, sett startverdien, kall `solve`", "sett startverdien, instansiér med `f`, kall `solve`", "instansiér med `f`, kall `solve`, sett startverdien", "instansiér uten argumenter, sett `f`, kall `solve`"],
      explanation: "Løseren må kjenne både høyresiden og startverdien før den kan regne, og høyresiden gis i konstruktøren. Startverdien kan ikke settes før objektet finnes, og settes den etter `solve`, krasjer `solve` med `AttributeError`. Konstruktøren tar alltid `f` — det er ingen variant der `f` settes etterpå.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfrom ODESolver import RungeKutta4\n\ndef f(t, u):\n    return -u\n\nsolver = RungeKutta4(f)\nsolver.set_initial_condition(1)\nt, u = solver.solve((0, 2), 4)\nprint(len(t), u.shape)\n```",
      options: ["5 (5,)", "4 (4,)", "5 (5, 1)", "4 (5,)"],
      explanation: "4 steg gir 5 punkter (#1 — av-én), og en skalar likning gir et 1-dimensjonalt array, altså formen `(5,)` med komma og ingenting etter. «4 (4,)» teller steg som punkter; «5 (5, 1)» antar at skalartilfellet lagres som en kolonne, og det gjør det ikke i dette hierarkiet.",
    },
    {
      question: "Hva er `t_span` i `solver.solve(t_span, N)`?",
      options: ["en tuppel `(t0, T)` med start- og sluttid", "et array med alle tidspunktene", "sluttiden alene", "en liste med steglengder"],
      explanation: "`t_span` er intervallet som ett argument, derfor dobbeltparentesen i `solve((0, 10), 100)`. Et ferdig array av tidspunkter er det den GAMLE varianten tok imot (`solve(time_points)`) — feilkode #14. Sluttiden alene ville ikke sagt hvor løsningen begynner.",
    },
    {
      question: "Hva skjer hvis du glemmer `solver.set_initial_condition(u0)`?",
      options: ["`solve` stopper med en `AttributeError`", "løsningen starter på 0 uten feilmelding", "`solve` bruker det siste kallet fra en annen løser", "programmet gir riktig svar, men uten startpunktet i arrayet"],
      explanation: "Startverdien lagres på instansen når du kaller metoden; er den ikke kalt, mangler attributtet, og `solve` feiler med `AttributeError`. Den starter ikke stille på 0 — og hver instans har sine egne attributter, så ingenting lekker fra en annen løser. Feilen er altså synlig, ikke skjult.",
    },
    {
      question: "Hva må endres for å bytte fra `ForwardEuler` til `RungeKutta4`?",
      options: ["bare klassenavnet i instansieringen", "klassenavnet og antall steg, siden RK4 krever fire ganger så mange punkter", "høyresiden, som må returnere fire stigningstall", "`solve`-kallet, som trenger en ekstra parameter for metoden"],
      explanation: "Hele poenget med arven er at grensesnittet er identisk: `RungeKutta4(f)` brukes akkurat som `ForwardEuler(f)`. RK4 bruker fire funksjonskall internt per steg, men lagrer like mange punkter, og høyresiden er den samme funksjonen. `solve` har ingen metode-parameter.",
    },
    {
      question: "Hvor mange kall til høyresiden gjør `RungeKutta4` når du løser med `N = 100` steg?",
      options: ["400", "100", "104", "500"],
      explanation: "Fire kall per steg gir $4 \\cdot 100 = 400$. 100 ville vært `ForwardEuler`. 104 blander sammen antall steg og antall punkter, og 500 antar fem kall per steg — det er fire k-er i formelen, ikke fem.",
    },
    {
      question: "Hvilken metode i hierarkiet implementerer subklassene, og hva returnerer den?",
      options: ["`advance`, som returnerer neste verdi av `u`", "`solve`, som returnerer hele løsningen", "`set_initial_condition`, som returnerer startverdien", "`advance`, som returnerer hele løsningsarrayet så langt"],
      explanation: "Basisklassen eier løkka i `solve` og kaller `advance` én gang per steg; subklassen implementerer bare `advance`, som gir **den neste verdien**. Å skrive om `solve` i subklassen er bortkastet arbeid og en feilkilde. Og `advance` returnerer ikke hele arrayet — det ligger allerede i `self.u`.",
    },
    {
      question: "Hvilke attributter har `advance` tilgang til inne i en subklasse?",
      options: ["`self.f`, `self.u`, `self.t`, `self.n` og `self.dt`", "bare `self.f` og `self.dt`, siden resten er lokale variabler i `solve`", "`self.f`, `self.u0` og `self.N`", "ingen — `advance` må få alt som argumenter"],
      explanation: "Basisklassen setter høyresiden, løsningsarrayet, tidsarrayet, stegindeksen og steglengden som attributter, nettopp for at `advance` skal kunne bruke dem. `advance` kalles uten argumenter, så alt må hentes fra `self`. Verken `self.N` eller `self.u0` er det du regner med — du bruker indeksen `self.n`.",
    },
    {
      question: "Hva er den robuste måten å finne steglengden på inne i `advance`?",
      options: ["`dt = self.t[self.n+1] - self.t[self.n]`", "`dt = self.t[self.n] - self.t[self.n-1]`", "`dt = self.t[-1]/len(self.t)`", "`dt = self.T/self.N`"],
      explanation: "Avstanden fram til neste tidspunkt er alltid tilgjengelig, uansett om modulen har lagret et `self.dt`. Å se bakover feiler i det første steget, der `self.n` er 0. `self.t[-1]/len(self.t)` er av-én-feilen (#1) i ny forkledning, og `self.T`/`self.N` er navn som ikke behøver å finnes i modulen.",
    },
    {
      question: "I den GAMLE varianten av modulen (2020–2022): hvordan ble høyresiden og `solve` skrevet?",
      options: ["`f(u, t)` og `solve(time_points)`", "`f(t, u)` og `solve(time_points)`", "`f(u, t)` og `solve(t_span, N)`", "`f(t, u, dt)` og `solve(t_span)`"],
      explanation: "Den gamle varianten hadde tilstanden først i høyresiden og fikk et ferdig array av tidspunkter. De to blandingsvariantene er nettopp det feilkode #14 handler om: å plukke halvparten fra hver konvensjon. Steglengden har aldri vært et argument til høyresiden.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfrom ODESolver import ForwardEuler\n\ndef f(t, u):\n    return -0.5*u\n\nsolver = ForwardEuler(f)\nsolver.set_initial_condition(10)\nt, u = solver.solve((0, 4), 8)\nprint(u[0], u[1], u[2])\n```",
      options: ["10.0 7.5 5.625", "10.0 5.0 2.5", "7.5 5.625 4.21875", "10.0 7.5 5.0"],
      explanation: "Steglengden er $4/8 = 0{,}5$, så hvert steg ganger med $1 - 0{,}5 \\cdot 0{,}5 = 0{,}75$: 10, 7,5 og 5,625. «10.0 5.0 2.5» ganger med 0,5 og glemmer steglengden. «7.5 5.625 4.21875» hopper over startverdien, altså starter på `u[1]`.",
    },
    {
      question: "Du skal instansiere en løser. Hvilket kall er riktig?",
      options: ["`solver = RungeKutta4(f)`", "`solver = RungeKutta4(f(t, u))`", "`solver = RungeKutta4(f, u0)`", "`solver = ODESolver(f)`"],
      explanation: "Funksjonen sendes uten parenteser, slik at løseren kan kalle den selv i hvert steg. Med parenteser sender du ett tall. Startverdien hører i `set_initial_condition`, ikke i konstruktøren. Og basisklassen `ODESolver` kan instansieres, men første steg kaster `NotImplementedError` fordi den ikke har noen metode.",
    },
    {
      question: "Feilen for en metode går fra 5,8e-06 til 3,3e-07 når antall steg dobles. Hvilken orden har metoden?",
      options: ["4", "2", "1", "6"],
      explanation: "Forholdet er omtrent 17,5, altså nær 16 — det er $2^4$, og metoden har orden 4 (typisk `RungeKutta4`). Orden 2 ville gitt forholdet 4 og orden 1 forholdet 2. Orden 6 ville krevd forholdet 64.",
    },
    {
      question: "Hvorfor kan høyresiden være enten en funksjon eller en instans av en klasse med `__call__`?",
      options: ["fordi løseren bare skriver `self.f(t, u)`, og begge er kallbare", "fordi løseren sjekker typen og har to kodeveier", "fordi `__call__` gjør objektet om til en funksjon i minnet", "fordi klasser automatisk arver fra funksjonstypen"],
      explanation: "Løseren bryr seg bare om at `self.f(t, u)` er lovlig, og det er det for alt som er kallbart. Det er ingen typesjekk i modulen. `__call__` gjør ikke objektet om til noe annet — det gir bare objektet lov til å stå foran en parentes — og klasser arver ikke fra funksjoner.",
    },
    {
      question: "Du har ingen eksakt løsning å måle mot. Hva er riktig framgangsmåte for å anslå feilen?",
      options: ["kjør den mest nøyaktige metoden med svært mange steg og bruk den som referanse", "kjør samme metode to ganger med samme steglengde og sammenlign", "sammenlign sluttverdien med startverdien", "anta at feilen er lik steglengden"],
      explanation: "En finmasket løsning med en høyordensmetode er den vanlige referansen; de grove løsningene måles mot den. To identiske kjøringer gir naturligvis samme svar og måler ingenting. Startverdien er ikke et mål på riktighet, og steglengden er ikke feilen — den er bare proporsjonal med den for en orden-1-metode.",
    },
    {
      question: "Hva er `u[-1]` for en skalar likning løst med hierarkiet?",
      options: ["løsningen i sluttiden", "siste tidspunkt", "startverdien", "hele siste rad i løsningsmatrisen"],
      explanation: "Negativ indeks teller fra slutten av løsningsarrayet, så `u[-1]` er verdien ved $t = T$. Sluttiden ligger i `t[-1]`. Startverdien er `u[0]`. Snakk om «siste rad» hører til systemtilfellet, der `u` er 2-dimensjonal — for en skalar likning er `u[-1]` ett tall.",
    },
  ],
  'in1900-7-3': [
    {
      question: "Du løser et system med 4 likninger på $[0, 100]$ med 500 steg. Hva er `u.shape`?",
      options: ["(501, 4)", "(500, 4)", "(4, 501)", "(501,)"],
      explanation: "Rader er tidspunkter (`N+1` = 501) og kolonner er komponenter (4). «(500, 4)» teller steg som punkter, altså av-én-feilen #1. «(4, 501)» bytter om rader og kolonner — det er transponert. «(501,)» er formen for en skalar likning.",
    },
    {
      question: "Hvordan henter du hele kurven for den tredje komponenten i et system?",
      options: ["`u[:, 2]`", "`u[2]`", "`u[2, :]`", "`u[:, 3]`"],
      explanation: "Kolon foran kommaet betyr «alle tidspunkter», og kolonnene nummereres fra 0, så den tredje er indeks 2. `u[2]` og `u[2, :]` er det samme: **raden** ved tredje tidspunkt, altså alle komponentene i ett øyeblikk. `u[:, 3]` er den fjerde komponenten.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\nfrom ODESolver import ForwardEuler\n\ndef f(t, u):\n    a, b = u\n    return [b, -a]\n\nsolver = ForwardEuler(f)\nsolver.set_initial_condition([1, 0])\nt, u = solver.solve((0, 1), 2)\nprint(u[1])\n```",
      options: ["[ 1.  -0.5]", "[1. 0.]", "[ 0.75 -1.  ]", "[-0.5  1. ]"],
      explanation: "Steget er 0,5. Fra $[1, 0]$ gir høyresiden $[0, -1]$, så neste rad er $[1 + 0{,}5\\cdot 0,\\; 0 + 0{,}5\\cdot(-1)] = [1, -0{,}5]$. «[1. 0.]» er `u[0]`, startverdien. «[ 0.75 -1. ]» er `u[2]`, ett steg for langt. Den siste har komponentene byttet om.",
    },
    {
      question: "Hva skal høyresiden for et system returnere?",
      options: ["én liste med de deriverte, i samme rekkefølge", "summen av de deriverte, altså ett tall per tidssteg", "et 2D-array med én rad per komponent og én kolonne per steg", "en dictionary med komponentnavnene som nøkler"],
      explanation: "Én verdi per likning, i den rekkefølgen komponentene ble pakket ut. Modulen gjør lista om til et array selv. Å summere de deriverte gir tull uten feilmelding — en av de farligste feilene i sjangeren. Verken 2D-array eller dictionary passer inn i oppdateringen løseren gjør.",
    },
    {
      question: "Hvor mange steder må komponentrekkefølgen i et system stemme?",
      options: ["tre: utpakkingen i `f`, returlista og `u0`", "to: utpakkingen i `f` og returlista", "ett: bare i `u0`", "fire: også i `solve`-kallet"],
      explanation: "Rekkefølgen bindes i `f` (utpakkingen), i returlista og i startverdiene. Glemmer du at også `u0` må følge samme rekkefølge, løser du et annet problem uten å få noen feilmelding. `solve` kjenner ingen komponentnavn — den bare kaller `f`.",
    },
    {
      question: "Hvordan skrives $x'' = -4x$ om til et system?",
      options: ["`u = [x, v]` med `return [v, -4*x]`", "`u = [x, v]` med `return [-4*x, v]`", "`u = [x]` med `return [-4*x]`", "`u = [x, v]` med `return [v, -4*v]`"],
      explanation: "Farten innføres som egen ukjent: $x' = v$ og $v' = -4x$, så første element i returlista er alltid `v`. Å bytte om de to elementene er en klassisk slurvefeil. Én komponent holder ikke for en andreordens likning, og akselerasjonen avhenger av posisjonen, ikke av farten her.",
    },
    {
      question: "Hvorfor kan en klasse med `__call__(self, t, u)` brukes som høyreside?",
      options: ["fordi instansen er kallbar, og løseren skriver bare `self.f(t, u)`", "fordi `__call__` gjør klassen om til en funksjon i minnet ved kall", "fordi løseren sjekker om argumentet er en klasse eller en funksjon", "fordi `__call__` arves fra basisklassen `ODESolver`"],
      explanation: "Løseren krever bare at det går an å sette parenteser bak `self.f`, og det gjør `__call__` mulig. Objektet blir ikke en funksjon — det får bare lov til å kalles. Modulen gjør ingen typesjekk, og `__call__` har ingenting å gjøre med arv fra løserklassen.",
    },
    {
      question: "Hva er den beste raske kontrollen på at en SEIR-modell er riktig kodet?",
      options: ["at summen av alle gruppene holder seg konstant", "at `u.shape` har fire kolonner, én per gruppe", "at smittetoppen kommer et stykke før halve tidsintervallet", "at alle verdiene i løsningen er positive"],
      explanation: "Hvert ledd i modellen flytter personer fra én gruppe til en annen, så summen av de deriverte er null og totalen skal være bevart. Går totalen, mangler eller dupliserer du et ledd. Antall kolonner sier bare at du har fire komponenter, ikke at leddene er riktige, og både toppens plassering og positive verdier kan stemme i en gal modell.",
    },
    {
      question: "Hva gir `I.argmax()` når `I` er kurven for smittsomme?",
      options: ["indeksen der `I` er størst", "den største verdien av `I`", "tidspunktet der `I` er størst", "antall punkter der `I` er over gjennomsnittet"],
      explanation: "`argmax` gir **indeksen**; den største verdien er `I.max()`, og tidspunktet får du ved å slå indeksen opp i tidsarrayet: `t[I.argmax()]`. Å skrive ut indeksen som om den var tiden er en vanlig slurvefeil i epidemioppgaver.",
    },
    {
      question: "Hvilken linje mangler oftest i en plotteoppgave, slik at kurvenavnene ikke vises?",
      options: ["`plt.legend()`", "`plt.xlabel('tid')`", "`plt.show()`", "`plt.grid()`"],
      explanation: "`label=` lagrer bare navnet; det vises først når `plt.legend()` kalles. Uten `xlabel` mangler du aksenavn, men navnene på kurvene vises likevel. Uten `show()` ser du ingen figur i det hele tatt, og `grid()` er valgfri pynt.",
    },
    {
      question: "Du skriver `plt.plot(t, u[0])` for et system løst på 500 steg. Hva skjer?",
      options: ["feil: `t` har 501 tall, mens `u[0]` har én verdi per likning", "figuren viser den første komponenten helt riktig", "figuren viser alle komponentene tegnet oppå hverandre i én kurve", "feil, fordi `u[0]` er et enkelt tall og ikke et array"],
      explanation: "`u[0]` er **raden** ved første tidspunkt, altså én verdi per komponent, mens `t` har 501 verdier — lengdene passer ikke. Første komponent er `u[:, 0]`. `u[0]` er ikke et enkelt tall, men en rad, og ingen kurve inneholder flere komponenter samtidig.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nimport numpy as np\nfrom ODESolver import RungeKutta4\n\ndef f(t, u):\n    x, y, z = u\n    return [-x, x - y, y - z]\n\nsolver = RungeKutta4(f)\nsolver.set_initial_condition([1, 0, 0])\nt, u = solver.solve((0, 20), 100)\nprint(u.shape, u.size, u[:, 1].shape)\n```",
      options: ["(101, 3) 303 (101,)", "(100, 3) 300 (100,)", "(101, 3) 303 (3,)", "(3, 101) 303 (101,)"],
      explanation: "100 steg gir 101 rader, tre likninger gir tre kolonner, og `size` er produktet $101 \\cdot 3 = 303$. En kolonne er 1-dimensjonal med 101 tall. «(100, 3)» er av-én-feilen #1, «(3,)» ville vært formen på en rad, og «(3, 101)» er transponert.",
    },
    {
      question: "Hvordan settes startverdiene for et system med tre komponenter?",
      options: ["`solver.set_initial_condition([0.99, 0.01, 0])`", "`solver.set_initial_condition(0.99, 0.01, 0)`", "`solver.solve((0, T), N, [0.99, 0.01, 0])`", "`solver = RungeKutta4(f, [0.99, 0.01, 0])`"],
      explanation: "Startverdiene sendes som **én** liste til `set_initial_condition`. Tre separate argumenter gir `TypeError`, siden metoden tar én verdi. Startverdien hører verken i `solve` eller i konstruktøren — konstruktøren tar bare høyresiden.",
    },
    {
      question: "Hva er en fasekurve for et system med to komponenter?",
      options: ["et plott av den ene komponenten mot den andre", "et plott av begge komponentene mot tiden", "et plott av differansen mellom komponentene mot tiden", "et plott av den deriverte mot tiden"],
      explanation: "En fasekurve er `plt.plot(u[:, 0], u[:, 1])` — tiden blir en usynlig parameter langs kurven, og for rovdyr og byttedyr blir det en lukket løkke. Begge komponentene mot tiden er det vanlige tidsplottet, og de to andre alternativene er andre figurer man kan lage, men ikke fasekurven.",
    },
  ],
  'in1900-7-4': [
    {
      question: "Du skal utvide det utleverte løser-hierarkiet med en ny ODE-metode. Hva skriver du selv i subklassen?",
      options: ["Bare `advance`, som regner ut ett tidssteg", "Både `advance` og `solve`, som styrer løkka", "Både `solve` og `set_initial_condition` på nytt", "Bare `__init__`, som tar imot høyresiden `f`"],
      explanation: "Basisklassen eier tidsløkka, subklassen eier formelen for ett steg. `solve`, `set_initial_condition` og `__init__` arves uendret, og å skrive dem om gir ingen ekstra poeng — bare flere feilkilder. `__init__` skrives bare når subklassen skal lagre en egen parameter, og da med `super().__init__(f)` først.",
    },
    {
      question: "Hva skal metoden `advance` gi tilbake?",
      options: ["Den nye verdien av `u`, altså verdien ved steg `n+1`", "Hele løsningsarrayet `u` slik det ser ut akkurat nå", "Bare endringen `dt*f(t, u)` som skal legges til", "Ingenting — den legger selv verdien inn i `self.u`"],
      explanation: "Basisklassen gjør `self.u[n+1] = self.advance()`, så returverdien er det eneste som blir lagret. Returnerer du bare endringen, mister du `u[n]` og løsningen blir feil. Skriver du selv inn i `self.u` og glemmer `return`, gir metoden `None`, og alle radene fra og med den andre blir `nan` — uten feilmelding.",
    },
    {
      question: "Hva skriver dette programmet ut? Modulen `ODESolver` er den fra kapitlet.\n\n```python\nfrom ODESolver import ODESolver\n\nclass Dobbel(ODESolver):\n    def advance(self):\n        u, f, t, n, dt = self.u, self.f, self.t, self.n, self.dt\n        return u[n] + 2*dt*f(t[n], u[n])\n\ndef f(t, u):\n    return 1\n\nsolver = Dobbel(f)\nsolver.set_initial_condition(0)\nt, u = solver.solve((0, 3), 3)\nprint(u)\n```",
      options: ["`[0. 2. 4. 6.]`", "`[0. 1. 2. 3.]`", "`[0. 2. 4.]`", "`[2. 4. 6. 8.]`"],
      explanation: "Tre steg over $[0, 3]$ gir `dt = 1`, og høyresiden er konstant 1, så hvert steg legger til `2*1*1 = 2`. Startverdien 0 står i rad 0, og tre steg gir tre nye rader — fire i alt. «[0. 1. 2. 3.]» glemmer faktoren 2, «[0. 2. 4.]» er av-én-feilen #1 på antall punkter, og «[2. 4. 6. 8.]» starter ett steg for sent.",
    },
    {
      question: "En subklasse skriver `u[n+1] = u[n] + dt*f(t[n], u[n])` inne i `advance`, men har ingen `return`. Hva skjer?",
      options: ["Alle radene fra og med rad 1 blir `nan`, uten feilmelding", "Programmet stopper med `TypeError` i det første steget", "Løsningen blir liggende konstant lik startverdien hele veien", "Basisklassen kaster `NotImplementedError` i det første steget"],
      explanation: "En funksjon uten `return` gir `None`, og basisklassen legger den verdien i `self.u[n+1]` — den overskriver altså den riktige verdien metoden nettopp skrev inn. `None` i et flyttallsarray blir `nan`, og verdien forplanter seg videre. Ingen exception kastes, og det er nettopp derfor feilen er farlig. `NotImplementedError` kommer bare når `advance` mangler helt.",
    },
    {
      question: "Du skriver `solver = ODESolver(f)` og kaller `solve`. Hva skjer?",
      options: ["Programmet stopper med `NotImplementedError` i første steg", "Programmet kjører og gir samme svar som forlengs Euler", "Programmet stopper allerede på linja `ODESolver(f)`", "Programmet kjører, men løsningen blir konstant lik `u0`"],
      explanation: "Basisklassens egen `advance` gjør ingenting annet enn å kaste `NotImplementedError` — meldingen «`ODESolver` er ikke en løser i seg selv». Instansieringen og `set_initial_condition` går fint; det er først når `solve` skal ta det første steget at feilen kommer. Basisklassen har ingen egen formel, så den kan verken oppføre seg som Euler eller la løsningen stå stille.",
    },
    {
      question: "Årets vedlegg har ingen `self.dt`. Hvordan finner du steglengden inne i `advance`?",
      options: ["`dt = self.t[self.n+1] - self.t[self.n]`", "`dt = self.t[self.n] - self.t[self.n-1]`", "`dt = self.t[-1] / len(self.t)`", "`dt = self.u[self.n+1] - self.u[self.n]`"],
      explanation: "Tidsarrayet heter alltid `self.t`, for det er halvparten av det `solve` returnerer, og differansen mellom to nabotidspunkter er steget. Indeksen `n+1` er trygg fordi `advance` bare kalles for `n` opp til `N-1`. Varianten med `n-1` feiler i det første steget, `self.t[-1]/len(self.t)` gir sluttiden delt på antall punkter i stedet for antall intervaller, og den siste regner på løsningen, ikke på tiden.",
    },
    {
      question: "En subklasse trenger en egen parameter og får derfor sin egen `__init__`. Hvor skal `super().__init__(f)` stå?",
      options: ["Som første linje, før subklassens egne attributter settes", "Som siste linje, etter at egne attributter er satt", "Inne i `advance`, slik at den kjøres ved hvert steg", "Ingen steder — arv gjør kallet overflødig i Python"],
      explanation: "Basisklassens oppstart setter `self.f` og pakker høyresiden slik at den alltid gir et array tilbake. Overskriver du `__init__` uten å kalle den, finnes ikke `self.f` i det hele tatt, og første steg stopper med `AttributeError`. Rekkefølgen er den samme som i arvekapitlet: basisklassens oppstart først, egne attributter etterpå. Kallet hører hjemme i `__init__`, aldri i `advance`.",
    },
    {
      question: "Hva skriver dette programmet ut?\n\n```python\nfrom ODESolver import ODESolver\n\nclass Trapp(ODESolver):\n    def advance(self):\n        return self.u[self.n] + self.n\n\ndef f(t, u):\n    return 0\n\nsolver = Trapp(f)\nsolver.set_initial_condition(10)\nt, u = solver.solve((0, 4), 4)\nprint(u)\n```",
      options: ["`[10. 10. 11. 13. 16.]`", "`[10. 11. 13. 16. 20.]`", "`[10. 10. 11. 12. 13.]`", "`[10. 11. 12. 13. 14.]`"],
      explanation: "Metoden legger til stegnummeret `self.n`, som går fra 0 til 3. Første steg legger til 0, så rad 1 er fortsatt 10; deretter 11, 13 og 16. Høyresiden brukes ikke i det hele tatt. «[10. 11. 13. 16. 20.]» starter tellingen på 1, «[10. 10. 11. 12. 13.]» legger til 1 hver gang etter det første, og den siste legger til 1 fra start.",
    },
    {
      question: "Hvilken av disse metodene er implisitt?",
      options: ["$u_{n+1} = u_n + \\Delta t f(t_{n+1}, u_{n+1})$", "$u_{n+1} = u_n + \\Delta t f(t_n, u_n)$", "$u_{n+1} = u_n + \\Delta t f(t_n + \\tfrac{\\Delta t}{2}, u_n)$", "$u_{n+1} = u_n + \\Delta t\\,\\tfrac{3}{2}f(t_n, u_n)$"],
      explanation: "En metode er implisitt når den ukjente $u_{n+1}$ står på begge sider av likhetstegnet — da må hvert steg løse en likning, i denne boka med `root`. De tre andre regner den nye verdien direkte av kjente størrelser og er derfor eksplisitte, uansett hvor formelen evaluerer høyresiden.",
    },
    {
      question: "I baklengs Euler som subklasse, hvilken likning løser du hvert steg?",
      options: ["`v - u[n] - dt*f(t[n+1], v) = 0` med `v` som ukjent", "`v - u[n] - dt*f(t[n], v) = 0` med `v` som ukjent", "`v - u[n] - dt*f(t[n+1], u[n]) = 0` med `v` som ukjent", "`v - u[n+1] - dt*f(t[n], v) = 0` med `v` som ukjent"],
      explanation: "Baklengs Euler evaluerer høyresiden i det **nye** punktet, både i tid og tilstand: $u_{n+1} = u_n + \\Delta t f(t_{n+1}, u_{n+1})$. Skriver du `t[n]`, har du laget en tungvint forlengs Euler. Har du `u[n]` inne i høyresiden, er likningen ikke lenger implisitt i det hele tatt. Varianten som trekker fra `u[n+1]` i stedet for `u[n]`, bruker en verdi som ennå ikke finnes.",
    },
    {
      question: "Hva returnerer `root` fra `scipy.optimize`, og hva sender du videre fra `advance`?",
      options: ["Et resultatobjekt; verdien du trenger, ligger i `sol.x`", "Et resultatobjekt; verdien du trenger, ligger i `sol.fun`", "Selve løsningen som et vanlig flyttall, klar til bruk", "En liste med alle nullpunktene metoden fant underveis"],
      explanation: "`root` gir et resultatobjekt med flere felt. Løsningen ligger i `sol.x` og er alltid et array — også når likningen har én ukjent, og det er nettopp den formen basisklassen vil ha tilbake. `sol.fun` er funksjonsverdien i løsningen, altså tallet som skal være nær null, og `sol.success` sier om metoden konvergerte.",
    },
    {
      question: "En metode gir maksimalfeil $4{,}6 \\cdot 10^{-3}$, $5{,}0 \\cdot 10^{-4}$, $5{,}8 \\cdot 10^{-5}$ og $7{,}0 \\cdot 10^{-6}$ når $N$ dobles fra 10 til 80. Hvilken orden har den?",
      options: ["Orden 3, fordi feilen faller med omtrent faktor 8", "Orden 2, fordi feilen faller med omtrent faktor 4", "Orden 4, fordi feilen faller med omtrent faktor 16", "Orden 1, fordi feilen faller med omtrent faktor 2"],
      explanation: "Forholdstallene mellom nabotall er 9,2 så 8,7 så 8,3 — de nærmer seg 8, altså $2^3$. En metode der halvert steg gir åtte ganger mindre feil, har orden 3. At de første tallene ligger litt over 8, er normalt for grove steg; du ser på tendensen, ikke på ett enkelt forholdstall.",
    },
    {
      question: "En tostegsmetode bruker både `u[n]` og `u[n-1]`. Hvorfor må steget der `n` er 0 behandles for seg?",
      options: ["Fordi `u[-1]` peker på siste rad i arrayet, ikke på noe før start", "Fordi `u[-1]` gir `IndexError` og stopper programmet i steg 0", "Fordi `self.n` ennå ikke er satt av basisklassen ved første kall", "Fordi steglengden `dt` er udefinert før det første steget er tatt"],
      explanation: "Negativ indeks teller fra slutten i Python, så `u[-1]` er siste rad — som på det tidspunktet bare er nuller. Du får ingen feilmelding, bare feil svar, og det er derfor `if n == 0:` med et vanlig Euler-steg må stå der. `self.n` og `dt` er begge satt før første kall til `advance`.",
    },
    {
      question: "Du sitter med et eldre oppgavesett der vedlegget bruker den gamle konvensjonen. Hva må du endre i en subklasse skrevet mot bokstandarden?",
      options: ["Argumentrekkefølgen i `f`, navnet på stegtelleren og hvordan `dt` finnes", "Bare argumentrekkefølgen i `f`, siden resten av modulen er uendret", "Bare navnet på stegtelleren, siden `f` og `dt` er like i begge", "Ingenting i `advance`; bare kallet til `solve` utenfor klassen"],
      explanation: "I den eldre varianten er høyresiden `f(u, t)` med tilstanden først, stegtelleren heter `self.k`, og det finnes ikke noe `self.dt` — steget må regnes fra tidsarrayet. Alle tre treffer innsiden av `advance`. At `solve` også tar et ferdig array av tidspunkter i stedet for et intervall og et antall, endrer koden utenfor klassen, men fritar deg ikke fra de tre inne i den. Dette er feilkode #14.",
    },
  ],
  'in1900-7-5': [
    {
      question: "Hva er bokas standardsignatur for høyresiden i en ODE?",
      options: ["`def f(t, u):`", "`def f(u, t):`", "`def f(u):`", "`def f(t, u, p):`"],
      explanation: "Fra 2023 er tiden første argument, og det er bokstandarden. Alternativ b) er den gamle formen fra 2020–2022 og er felle #14. Alternativ c) mangler tiden, som løseren alltid sender med. Alternativ d) går ikke: løseren kaller `f` med nøyaktig to argumenter.",
    },
    {
      question: "For et system med tre likninger — hva er `u.shape` etter `solve((0, 10), 200)`?",
      options: ["`(201, 3)`", "`(200, 3)`", "`(3, 201)`", "`(201,)`"],
      explanation: "Radene er tidspunkter og kolonnene komponenter, og 200 skritt gir 201 punkter. Alternativ b) er av-én-feilen. Alternativ c) har byttet om aksene. Alternativ d) er formen for en skalar likning.",
    },
    {
      question: "Hvordan pakker du ut komponent nummer 1 gjennom hele tidsforløpet?",
      options: ["`u[:, 1]`", "`u[1]`", "`u[1, :]`", "`u[:][1]`"],
      explanation: "Kolon på første plass betyr alle rader, altså hele tidsforløpet for kolonne 1. Alternativ b) og c) gir begge rad 1 — hele tilstanden ved tidspunkt 1. Alternativ d) ender opp med det samme som b).",
    },
    {
      question: "Hva returnerer høyresiden i et system med fire likninger?",
      options: ["En liste med fire deriverte", "Et enkelt tall, som for en skalar", "Fire separate returverdier", "Hele løsningstabellen `u`"],
      explanation: "`return [dS, dE, dI, dD]` — én liste, i samme rekkefølge som utpakkingen. Alternativ b) er formen for en skalar likning. Alternativ c) finnes ikke i Python; flere verdier blir automatisk en tuppel, som er mindre entydig enn lista sensor ser etter.",
    },
    {
      question: "Hvor mange argumenter tar `set_initial_condition` for et system med to likninger?",
      options: ["Ett, en liste med to tall", "To, ett per komponent", "Tre, med antall likninger i tillegg", "Ingen, den leser fra høyresiden"],
      explanation: "Startverdien er én liste: `set_initial_condition([1.0, 0.0])`. Alternativ b) gir `TypeError`. Metoden teller selv hvor mange likninger systemet har ut fra lengden på lista, så alternativ c) og d) er unødvendige.",
    },
    {
      question: "Hva er den kritiske forskjellen mellom forlengs og baklengs Euler?",
      options: ["Hvilket tidspunkt stigningstallet tas fra", "Hvor mange punkter løsningen får til slutt", "Om metoden skrives som en subklasse", "Hvilket bibliotek som må importeres først"],
      explanation: "Forlengs Euler bruker $f(t_n, u_n)$, baklengs bruker $f(t_{n+1}, u_{n+1})$ — og siden den nye verdien er ukjent, må en likning løses. Alternativ b) er likt for begge. Begge kan skrives som subklasser, så alternativ c) skiller ikke.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\nt = np.linspace(0, 2, 5)\nprint(len(t), t[1] - t[0], t[-1])\n```",
      options: ["`5 0.5 2.0`", "`4 0.5 2.0`", "`5 0.4 2.0`", "`5 0.5 1.5`"],
      explanation: "Fem punkter over et intervall av lengde 2 gir fire mellomrom, altså steglengde 0,5, og siste punkt er endepunktet 2,0. Alternativ b) forveksler punkter med intervaller, og c) deler intervallet på antall punkter i stedet for antall intervaller.",
    },
    {
      question: "En subklasse av `ODESolver` skal implementere en ny metode. Hva skriver du?",
      options: ["Bare `advance`", "Hele klassen på nytt", "`solve` og `advance`", "`__init__` og `solve`"],
      explanation: "Basisklassen har allerede konstruktør, startbetingelse og `solve`; det eneste som skiller to metoder er hvordan ett skritt regnes. Alternativ b), c) og d) gjør om igjen kode som virker, koster tid, og innfører nye steder å gjøre feil.",
    },
    {
      question: "Hva skal `advance` gjøre med den nye verdien?",
      options: ["Returnere den", "Skrive den til `self.u[self.n+1]`", "Skrive den ut", "Lagre den i `self.ny`"],
      explanation: "Basisklassen gjør tilordningen selv: `self.u[n+1] = self.advance()`. Skriver du også selv til tabellen, gjøres jobben to ganger. Glemmer du `return`, blir løsningen fylt med `nan` uten noen feilmelding — det er den vanligste feilen i sjanger K.",
    },
    {
      question: "Hva ligger svaret i etter `sol = root(likning, u[n])`?",
      options: ["`sol.x`", "`sol`", "`sol.y`", "`sol.value`"],
      explanation: "`root` returnerer et resultatobjekt, og løsningen ligger i attributtet `x` — alltid som et array, også når likningen har én ukjent. `sol.success` sier om metoden konvergerte. De to andre attributtnavnene finnes ikke.",
    },
    {
      question: "Hvorfor kan ikke en modellparameter sendes som et tredje argument til `f`?",
      options: ["Løseren kaller `f` med to argumenter", "Parametere må alltid være globale", "Python tillater ikke tre argumenter", "Løseren leser navnene fra høyresiden"],
      explanation: "Kallet skjer inne i `solve`, med tid og tilstand, så et tredje argument gir `TypeError`. De to lovlige måtene er variabler over funksjonen eller en klasse med `__call__(self, t, u)`. Alternativ b) og c) er oppdiktede regler.",
    },
    {
      question: "Hva er en god fornuftssjekk i en epidemimodell der ingen forsvinner?",
      options: ["At summen av gruppene er konstant", "At alle gruppene vokser hele veien", "At `u.shape` er kvadratisk i formen", "At tidsaksen starter på null"],
      explanation: "Er hver person alltid i nøyaktig én gruppe, må summen være befolkningsstørrelsen på hvert tidspunkt. Driver den, har du mistet et ledd. Alternativ b) er ikke sant i modellen, og de to siste sier ingenting om regnestykket.",
    },
    {
      question: "Hva er feil i `plt.plot(t, u[0], label='S')` for et system?",
      options: ["`u[0]` er tilstanden ved tid 0", "Argumentet `label` skal hete `name`", "Tidsaksen `t` må stå sist", "`plot` tar bare to argumenter"],
      explanation: "`u[0]` er én rad — like mange tall som systemet har likninger — mens kurven er kolonnen `u[:, 0]`. Alternativ b) er feil argumentnavn, c) snur rekkefølgen, og d) er galt siden `label` er et lovlig nøkkelargument.",
    },
    {
      question: "Hvor mange skritt og punkter gir `solver.solve((0, 5), 100)`?",
      options: ["100 skritt og 101 punkter", "101 skritt og 101 punkter", "100 skritt og 100 punkter", "5 skritt og 100 punkter"],
      explanation: "Andre argument er antall skritt, og startpunktet er også et punkt, så det blir ett punkt mer enn antall skritt. Dette er felle #1 i sin ODE-form, og den gjelder både i hierarkiet og i din egen løser.",
    },
    {
      question: "Hvilken linje henter attributtene ut i korte lokale navn inne i `advance`?",
      options: ["`u, f, t, n, dt = self.u, self.f, self.t, self.n, self.dt`", "`self.u, self.f, self.t, self.n, self.dt = u, f, t, n, dt`", "`u, f, t, n, dt = ODESolver.u, ODESolver.f, ODESolver.t`", "`from self import u, f, t, n, dt as lokale_navn`"],
      explanation: "Hentelinja er valgfri, men gjør formelen lesbar; du kan like gjerne skrive `self.u[self.n]` hele veien. De tre andre alternativene er ikke gyldig Python — `self` er et vanlig navn på instansen, ikke noe du kan tilordne slik.",
    },
    {
      question: "Hva skjer hvis høyresiden skrives `f(u, t)` mens vedlegget forventer `f(t, u)`, og modellen ikke bruker tiden?",
      options: ["Programmet kjører, men navnene betyr noe annet", "Programmet stopper med `TypeError` i `solve`", "Programmet gir `IndexError` på første skritt", "Ingenting — de to formene er helt likeverdige"],
      explanation: "Begge argumentene sendes uansett, så programmet kjører. Bruker ikke modellen tiden, merkes ombyttingen ikke — men navnene inne i funksjonen betyr da noe annet enn du tror. Det er nettopp derfor #14 er en dyr felle: den er stille.",
    },
    {
      question: "En løsning som skal falle mot en likevekt eksploderer i stedet, med en stor steglengde. Hva er mest sannsynlig?",
      options: ["Metoden er ustabil for dette skrittet", "Startverdien er glemt i oppsettet", "Høyresiden returnerer feil datatype", "Tidsaksen har for få punkter"],
      explanation: "Eksplisitte metoder har en stabilitetsgrense: er problemet stivt og skrittet for stort, vokser løsningen i stedet for å falle. Løsningen er flere skritt eller en implisitt metode. Alternativ b) og c) ville gitt feil svar for alle steglengder, ikke bare store.",
    },
    {
      question: "Hva er `t[u[:, 2].argmax()]`?",
      options: ["Tidspunktet der komponent 2 er størst", "Den største verdien komponent 2 har", "Antall punkter i hele tidsaksen", "Verdien av komponent 2 helt til slutt"],
      explanation: "`argmax` gir indeksen til den største verdien, og den indeksen slås opp i tidsaksen. Alternativ b) får du med `u[:, 2].max()`. Skillet er praktisk viktig når oppgaven spør «på hvilken dag var smittetoppen».",
    },
  ],
  'in1900-8-1': [
    {
      question: "Hva skriver dette ut?\n\n```python\nline = 'Kvitheia;7.9;1180\\n'\nfelt = line.split(';')\nprint(len(felt), len(felt[2]))\n```",
      options: ["`3 5`", "`3 4`", "`2 5`", "`4 5`"],
      explanation: "To semikolon gir tre felt, så `len(felt)` er 3. Siste felt er `'1180\\n'` — fire sifre pluss linjeskiftet, altså 5 tegn. `3 4` er fellen for den som glemmer at linjeskiftet henger med (det er nettopp derfor man skriver `.strip()` før `.split()`), `4 5` for den som teller separatorene feil, og `2 5` for den som tror `split` gir én bit mindre enn antall felt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nline = 'Kvitheia;7.9;1180\\n'\nprint(line.strip().split(';')[2] == '1180')\nprint(line.split(';')[2] == '1180')\n```",
      options: ["`True` og deretter `False`", "`False` og deretter `True`", "`True` og deretter `True`", "`False` og deretter `False`"],
      explanation: "Med `.strip()` er siste felt `'1180'` og sammenligningen sann. Uten `.strip()` er feltet `'1180\\n'`, som ikke er lik `'1180'` — derfor `False`. `True` to ganger er fellen for den som tror Python ser bort fra linjeskift i strengsammenligning; det gjør den ikke. Merk at `int('1180\\n')` derimot ville gitt 1180, fordi tallkonvertering tåler blanktegn.",
    },
    {
      question: "Hva skjer når dette kjøres?\n\n```python\nprint(int('1180\\n'), float(' 8.6 '))\n```",
      options: ["`1180 8.6` — begge konverteringene tåler blanktegn rundt tallet", "`ValueError` — linjeskiftet er ikke et gyldig siffer i et heltall", "`TypeError` — `int` og `float` godtar ikke tekststrenger som argument", "`118 8.6` — linjeskiftet spiser det siste sifferet i tallet"],
      explanation: "`int` og `float` fjerner blanktegn (mellomrom, TAB, linjeskift) i begge ender før de tolker tallet, så begge konverteringene går fint. Det er en viktig detalj: en glemt `.strip()` gir **ikke** feilmelding på tallfelt, bare på tekstfelt. `ValueError` kommer først når strengen ikke er et tall i det hele tatt, for eksempel `float('ph')` på en header-linje. `TypeError` gjelder helt andre operandtyper.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = 'Ingrid Hauge;5003;1998\\n'\nprint(linje.split())\n```",
      options: ["`['Ingrid', 'Hauge;5003;1998']`", "`['Ingrid Hauge', '5003', '1998']`", "`['Ingrid', 'Hauge', '5003', '1998']`", "`['Ingrid Hauge;5003;1998']`"],
      explanation: "Bar `.split()` deler på blanktegn, og det eneste blanktegnet inne i linja er mellomrommet i navnet — derfor to biter, der den andre inneholder alle semikolonene. Linjeskiftet blir kastet av `split()` selv. `['Ingrid Hauge', '5003', '1998']` er svaret man ville fått med `.split(';')`, og forvekslingen mellom de to er feil #8. Alternativet med fire biter forutsetter deling på både mellomrom og semikolon, som ingen av variantene gjør.",
    },
    {
      question: "Hva skjer når disse to linjene kjøres?\n\n```python\ndata = {}\ndata['Vest']['2025-05-02'] = 7.4\n```",
      options: ["`KeyError` — den indre ordboken under `'Vest'` er ikke opprettet ennå", "`IndexError` — `'Vest'` er ikke en gyldig indeks i en tom ordbok", "`TypeError` — en tom ordbok kan ikke ha ordbøker som verdier", "Ingen feil — Python oppretter den indre ordboken automatisk"],
      explanation: "For å sette inn i `data['Vest']` må Python først finne `data['Vest']`, og den nøkkelen finnes ikke — altså `KeyError`. Løsningen er `if 'Vest' not in data: data['Vest'] = {}` først. Alternativet «ingen feil» er feil #20, den vanligste feilen når nøstede ordbøker bygges. `IndexError` gjelder lister, ikke ordbøker, og en ordbok kan gjerne ha ordbøker som verdier — men de må opprettes.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nprint(dict(zip(['temp', 'nedbor', 'vind'], [7.9, 1180])))\n```",
      options: ["`{'temp': 7.9, 'nedbor': 1180}` — `zip` stopper ved den korteste", "`{'temp': 7.9, 'nedbor': 1180, 'vind': None}` — siste nøkkel får `None`", "`{'temp': 7.9, 'nedbor': 1180, 'vind': 0}` — siste nøkkel får verdien 0", "`ValueError` fordi de to listene ikke er like lange"],
      explanation: "`zip` parer element for element og stopper når den korteste listen er tom, uten advarsel: `'vind'` forsvinner lydløst. Det er samme regel som for `zip` i løkker (feil #17). Verken `None`, 0 eller en feilmelding kommer — og det er nettopp derfor du må sjekke at antall feltnavn stemmer med antall felt i fila.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {}\nfor navn in ['Vest', 'Aust', 'Vest']:\n    if navn not in data:\n        data[navn] = 0\n    data[navn] += 1\nprint(data)\n```",
      options: ["`{'Vest': 2, 'Aust': 1}`", "`{'Vest': 1, 'Aust': 1}`", "`{'Vest': 3, 'Aust': 1}`", "`{'Vest': 1, 'Aust': 2}`"],
      explanation: "`'Vest'` settes til 0 bare første gang, fordi `not in`-testen er falsk andre gang; deretter økes telleren, så `'Vest'` ender på 2 og `'Aust'` på 1. `{'Vest': 1, 'Aust': 1}` er fellen for den som tror tilordningen `data[navn] = 0` kjører hver runde og nullstiller telleren. Rekkefølgen i utskriften er innsettingsrekkefølgen for nøklene, ikke alfabetisk.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'Kvitheia': {'x': 1}, 'Nordvika': {'x': 4}}\nfor navn, verdier in d.items():\n    print(navn, verdier['x'], end=' ')\n```",
      options: ["`Kvitheia 1 Nordvika 4` — alt på én linje, med et mellomrom til slutt", "`Kvitheia 1` og `Nordvika 4` på hver sin linje, som vanlig `print`", "`Kvitheia {'x': 1} Nordvika {'x': 4}` på én linje med mellomrom", "`Kvitheia Nordvika` på én linje — `verdier['x']` skrives ikke ut"],
      explanation: "`.items()` gir nøkkel og verdi samtidig, og `verdier['x']` plukker tallet ut av den indre ordboken. `end=' '` erstatter linjeskiftet med et mellomrom, så begge rundene havner på samme linje. Alternativet med to linjer er fellen for den som overser `end` (feil #16), og alternativet med `{'x': 1}` er fellen for den som tror `verdier` skrives ut i stedet for `verdier['x']`.",
    },
    {
      question: "Fila `land.txt` inneholder fire linjer:\n\n```\nAlveria,4820000,52100\nBrenland,1290000,38400\nCorvia,17650000,9800\nDunmark,610000,71200\n```\n\nHva skriver dette ut?\n\n```python\nwith open('land.txt') as infile:\n    n = 0\n    for line in infile:\n        n += len(line.strip().split(','))\nprint(n)\n```",
      options: ["`12` — fire linjer med tre felt hver", "`4` — én telling per linje i fila", "`3` — antall felt på den siste linja", "`8` — fire linjer med to kommaer hver"],
      explanation: "Hver linje gir tre felt (to kommaer), og løkka legger til 3 fire ganger: 12. `4` er fellen for den som tror `n` økes med 1 per linje, `3` for den som tror `n` overskrives, og `8` for den som teller separatorer i stedet for felt — `n` separatorer gir `n+1` felt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'Kvitheia': 1180}\nprint('Fornebu' in d)\nprint(d['Fornebu'])\n```",
      options: ["`False`, og deretter stopper programmet med `KeyError: 'Fornebu'`", "`False`, og deretter skrives `None` fordi nøkkelen mangler", "`KeyError: 'Fornebu'` med én gang — `in`-testen krasjer også", "`False`, og deretter skrives `0` fordi ordboken er tom for den nøkkelen"],
      explanation: "`in`-testen er trygg og gir `False` for en nøkkel som ikke finnes, men oppslaget `d['Fornebu']` krasjer med `KeyError`. Det er nettopp derfor `in`-testen brukes som vakt før oppslag. Python fyller aldri inn `None` eller 0 for manglende nøkler — vil du ha en standardverdi, må du be om den eksplisitt.",
    },
    {
      question: "En fil har header-linja `stasjon;ph;temp`, og programmet glemte å hoppe over den. Hva blir siste linje i feilmeldingen fra `float('ph')`?",
      options: ["`ValueError: could not convert string to float: 'ph'`", "`TypeError: float() argument must be a number, not str`", "`KeyError: 'ph'` — kolonnenavnet finnes ikke som nøkkel", "`NameError: name 'ph' is not defined` — variabelen mangler"],
      explanation: "`float` godtar strenger, men bare strenger som faktisk er tall — derfor `ValueError`, med den ugyldige teksten sitert i meldingen. Ser du `ValueError` med et **kolonnenavn** i teksten, er diagnosen alltid den samme: header-linja ble ikke hoppet over med `readline()` (feil #7). `TypeError` gjelder feil operandtype, og `NameError` gjelder udefinerte variabelnavn, ikke strenginnhold.",
    },
    {
      question: "Fila `stasjoner_dobbel.txt` inneholder:\n\n```\nKvitheia;7.9;1180\nOspedalen;8.6;1420\nKvitheia;8.4;1205\n```\n\nHva skriver dette ut?\n\n```python\ndata = {}\nwith open('stasjoner_dobbel.txt') as infile:\n    for line in infile:\n        navn, temp, nedbor = line.strip().split(';')\n        data[navn] = float(temp)\nprint(len(data), data['Kvitheia'])\n```",
      options: ["`2 8.4`", "`3 7.9`", "`2 7.9`", "`3 8.4`"],
      explanation: "Nøkler i en ordbok er unike, så den tredje linja **overskriver** den første: to nøkler igjen, og `'Kvitheia'` har verdien fra siste linje, 8.4. `3 8.4` er fellen for den som tror ordboka vokser med antall linjer, og `2 7.9` for den som tror den første verdien beholdes. Skal begge målingene bevares, må neste nøkkelnivå skille dem.",
    },
    {
      question: "Fila `personer.txt` har fem linjer, der den første er en header:\n\n```\nid;navn;postnr;fodselsaar\n1042;Ingrid Hauge;5003;1998\n1043;Mathias Lind;7014;1985\n1044;Sofie Berge;5003;2001\n1045;Jonas Rud;9012;1972\n```\n\nHva skriver dette ut?\n\n```python\nwith open('personer.txt') as infile:\n    infile.readline()\n    n = 0\n    for line in infile:\n        n += 1\nprint(n)\n```",
      options: ["`4` — `readline()` har alt lest header-linja", "`5` — `readline()` flytter ikke leseposisjonen", "`3` — `readline()` hopper over de to første linjene", "`1` — løkka rekker bare én linje etter `readline()`"],
      explanation: "`readline()` leser én linje og flytter leseposisjonen fram, så løkka starter på linje 2 og teller de fire dataradene. `5` er fellen for den som tror kallet er uten virkning når returverdien ikke brukes til noe — den er ikke det. Motsatt: kaller du `readline()` på en fil uten header, mister du den første dataraden i stillhet.",
    },
    {
      question: "Hva fjerner `.strip()` fra en streng?",
      options: ["Blanktegn — mellomrom, TAB og linjeskift — i begge ender av strengen", "Bare linjeskiftet på slutten av strengen, ikke mellomrom", "Alle mellomrom i strengen, også de som står midt inne i den", "Linjeskift og separatortegnet i begge ender av strengen"],
      explanation: "`.strip()` klipper bort alle blanktegn i begge ender og lar innmaten være urørt — `'  a b \\n'.strip()` gir `'a b'` med mellomrommet i midten intakt. Den rører aldri separatorer. Og den endrer ikke originalen: du må bruke returverdien, typisk som `line.strip().split(';')`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'Vest': {'ph': 7.4}}\nprint(d['Vest'])\nprint(d['Vest']['ph'])\n```",
      options: ["`{'ph': 7.4}` og deretter `7.4`", "`7.4` og deretter `{'ph': 7.4}`", "`7.4` og deretter `KeyError: 'ph'`", "`{'ph': 7.4}` og deretter `{'ph': 7.4}`"],
      explanation: "Ett oppslag i en nøstet ordbok gir **strukturen** (den indre ordboken), to oppslag gir **elementet** (tallet). Å forveksle de to er den vanligste sporingsfeilen i sjangeren — det er samme skille som mellom indeksering og slicing i lister (feil #18). Ordboken skrives ut med klammer og `'nøkkel': verdi`, tallet uten noe rundt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = dict(zip(['a', 'b'], [1, 2]))\nd['c'] = 3\nprint(d, len(d))\n```",
      options: ["`{'a': 1, 'b': 2, 'c': 3} 3`", "`{'a': 1, 'b': 2} 2`", "`{'a': 1, 'b': 2, 'c': 3} 4`", "`{'c': 3, 'a': 1, 'b': 2} 3`"],
      explanation: "`dict(zip(...))` gir `{'a': 1, 'b': 2}`, og tilordningen legger til et tredje par — `len` er 3. Nye nøkler havner **bakerst**, i innsettingsrekkefølge, så alternativet med `'c'` først er feil. `{'a': 1, 'b': 2} 2` er fellen for den som tror `dict(zip(...))` gir en ordbok som ikke kan utvides.",
    },
    {
      question: "Fila `stasjoner.txt` inneholder:\n\n```\nKvitheia;7.9;1180\nSandvollen;5.4;760\nOspedalen;8.6;1420\nNordvika;3.1;980\n```\n\nHva skriver dette ut?\n\n```python\nwith open('stasjoner.txt') as infile:\n    linjer = 0\n    tegn = 0\n    for line in infile:\n        linjer += 1\n        tegn += len(line.strip())\nprint(linjer, tegn)\n```",
      options: ["`4 69`", "`4 73`", "`5 69`", "`4 65`"],
      explanation: "Fire linjer, og `.strip()` fjerner linjeskiftet før tellingen: 17 + 18 + 18 + 16 = 69 tegn. `4 73` er svaret uten `.strip()`, altså med de fire linjeskiftene med — en fin påminnelse om at hvert linjeskift er ett tegn. `5 69` er fellen for den som teller en tom sluttlinje som ikke finnes.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nfelt = 'Vest;2025-05-02;7.4;11.2'.split(';')\nprint(felt[1:3])\nprint(felt[-1])\n```",
      options: ["`['2025-05-02', '7.4']` og deretter `11.2`", "`['2025-05-02', '7.4', '11.2']` og deretter `11.2`", "`'2025-05-02'` og deretter `11.2`", "`['2025-05-02', '7.4']` og deretter `7.4`"],
      explanation: "Slicing `[1:3]` tar med indeks 1 og 2, men **ikke** 3 — slutten er eksklusiv, så `'11.2'` faller utenfor. Og slicing gir en **liste**, mens `felt[-1]` er indeksering og gir **elementet**, siste felt, som skrives ut uten anførselstegn. Å tro at `[1:3]` gir tre elementer er feil #18.",
    },
  ],
  'in1900-8-2': [
    {
      question: "Hva skjer når dette kjøres?\n\n```python\nwith open('rapport.txt', 'w') as outfile:\n    outfile.write(1180)\n```",
      options: ["`TypeError` — `write` godtar bare strenger, ikke tall", "Fila får linja `1180`, fordi `write` konverterer selv", "`ValueError` — tallet mangler et linjeskift på slutten", "Ingenting skjer — `write` ignorerer argumenter som ikke er tekst"],
      explanation: "`write` tar en streng og bare en streng: siste linje i feilmeldingen er `TypeError: write() argument must be str, not int`. Løsningen er `str(1180)` eller en f-streng. Alternativet om automatisk konvertering er fellen for den som tenker på `print`, som **gjør** dette for deg — det er en av de to store forskjellene mellom `print` og `write`. Den andre er linjeskiftet.",
    },
    {
      question: "Fila `data.txt` inneholder tre linjer med tekst. Hva står i fila etter dette?\n\n```python\nwith open('data.txt', 'w') as outfile:\n    outfile.write('ny linje\\n')\n```",
      options: ["Bare `ny linje` — de tre gamle linjene er slettet", "Fire linjer: de tre gamle, og `ny linje` til slutt", "Fire linjer: `ny linje` først, og de tre gamle etter", "Bare `ny linje`, men de gamle linjene kan hentes tilbake"],
      explanation: "Modusen `'w'` tømmer fila i det øyeblikket den åpnes, uansett hva du skriver etterpå. Alternativet med fire linjer er fellen for den som tror `write` legger til på slutten — det gjør den innenfor **samme** åpning, men ikke mellom to `with`-blokker. Og innholdet er borte for godt; det finnes ingen angreknapp.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {'Kvitheia': 1180, 'Sandvollen': 760}\nwith open('u.txt', 'w') as outfile:\n    for navn in data:\n        outfile.write(navn + ';' + str(data[navn]))\n\nwith open('u.txt') as infile:\n    linjer = 0\n    for line in infile:\n        linjer += 1\nprint(linjer)\n```",
      options: ["`1` — uten `'\\n'` blir alt skrevet på én linje", "`2` — `write` legger til linjeskift etter hver skriving", "`0` — fila er tom fordi ingen linjeskift ble skrevet", "`4` — hver `write` gir sin egen linje i fila"],
      explanation: "`write` legger ikke til linjeskift, så de to strengene skjøtes sammen til `Kvitheia;1180Sandvollen;760` — én eneste linje, og tilbakelesingen finner én. Svaret `2` er fellen for den som blander `write` med `print`. Legg merke til hva som skjer med dataene: feltet i midten blir `'1180Sandvollen'`, og `int()` på det gir `ValueError` neste gang noen leser fila.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef filtrer(d, grense):\n    ny = {}\n    for k, v in d.items():\n        if v > grense:\n            ny[k] = v\n    return ny\n\n\nd = {'a': 3, 'b': 8}\nprint(filtrer(d, 5), len(d))\n```",
      options: ["`{'b': 8} 2`", "`{'b': 8} 1`", "`{'a': 3} 2`", "`{'a': 3, 'b': 8} 2`"],
      explanation: "Bare `'b'` har verdi over 5, så resultatet har én oppføring — men `d` er urørt og har fortsatt to, derfor `2`. `{'b': 8} 1` er fellen for den som tror filtreringen fjerner oppføringer fra originalen; det gjør den ikke, fordi `ny` er en egen ordbok. `{'a': 3} 2` er fellen for den som leser betingelsen baklengs.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndef filtrer_feil(d, grense):\n    ny = d\n    for k in ny:\n        if ny[k] <= grense:\n            ny[k] = 0\n    return ny\n\n\nd = {'a': 3, 'b': 8}\nr = filtrer_feil(d, 5)\nprint(r)\nprint(d)\n```",
      options: ["`{'a': 0, 'b': 8}` to ganger — `r` og `d` er samme ordbok", "`{'a': 0, 'b': 8}` og deretter `{'a': 3, 'b': 8}` — `d` er urørt", "`{'b': 8}` og deretter `{'a': 3, 'b': 8}` — `r` er filtrert", "`{'b': 8}` to ganger — begge ordbøkene er filtrert likt"],
      explanation: "`ny = d` lager ingen kopi; det gir bare et nytt navn på samme ordbok, så endringene slår gjennom i `d`. Dette er aliasing, feil #23. Alternativet der `d` er urørt, er fellen for den som tror en tilordning kopierer. Legg dessuten merke til at funksjonen ikke gjør det den later som: den **fjerner** ingenting, den setter verdier til 0.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {'Vest': {'ph': 7.4}}\nny = {}\nny['Vest'] = data['Vest']\nny['Vest']['ph'] = 0.0\nprint(data)\n```",
      options: ["`{'Vest': {'ph': 0.0}}` — den indre ordboken er den samme", "`{'Vest': {'ph': 7.4}}` — `ny` er en egen ordbok", "`{'Vest': {}}` — den indre ordboken ble flyttet til `ny`", "`{}` — hele oppføringen ble flyttet over til `ny`"],
      explanation: "Den **ytre** ordboka `ny` er ny, men `ny['Vest']` peker på den samme indre ordboka som `data['Vest']`. Endringen slår derfor gjennom i originalen. Vil du ha et helt uavhengig resultat, må du bygge den indre på nytt: `ny['Vest'] = {'ph': data['Vest']['ph']}`. Ingenting «flyttes» noen gang i Python — verdier kopieres bare hvis du ber om det.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nline = 'Kvitheia   20240301   4.2  118\\n'\nprint('[' + line[19:25] + ']')\n```",
      options: ["`[   4.2]` — tre mellomrom og tallet, seks tegn i alt", "`[  4.2]` — to mellomrom og tallet, fem tegn i alt", "`[4.2]` — slicing fjerner mellomrommene automatisk", "`[   4.2 ]` — mellomrom på begge sider av tallet"],
      explanation: "Slicing tar tegnene i posisjon 19 til og med 24 — seks tegn, her tre mellomrom pluss `4.2`. Slicing fjerner ingenting; det er `.strip()` som gjør det. Heldigvis tåler `float('   4.2')` mellomrommene, så tallfelt kan konverteres direkte; det er **tekstfeltene** som må strippes før de brukes som ordboknøkler.",
    },
    {
      question: "Hvorfor ber oppgaveteksten om at filterfunksjonen skal returnere en **ny** ordbok?",
      options: ["Fordi den som kaller funksjonen fortsatt skal ha hele datasettet etterpå", "Fordi en ordbok i Python ikke kan endres etter at den er opprettet", "Fordi `.items()` ikke kan brukes på en ordbok som skal endres", "Fordi en ny ordbok gir raskere oppslag enn den opprinnelige"],
      explanation: "En filterfunksjon som spiser originalen, kan bare brukes én gang — og et program som skal filtrere samme datasett på flere grenser, er da ødelagt. Ordbøker **kan** endres (det er nettopp problemet), og oppslagstiden er den samme i begge. `.items()` fungerer fint på en ordbok du senere endrer, men å legge til eller fjerne nøkler **mens** du itererer over den, gir feil.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'Vest': {'ph': 7.4}, 'Aust': {'ph': 8.1}}\nfor stasjon, verdier in d.items():\n    print(f'{stasjon};{verdier[\"ph\"]:.2f}')\n```",
      options: ["`Vest;7.40` og `Aust;8.10` på hver sin linje", "`Vest;7.4` og `Aust;8.1` på hver sin linje", "`Vest;7.40;Aust;8.10` på én og samme linje", "`Vest;{'ph': 7.4}` og `Aust;{'ph': 8.1}` på hver sin linje"],
      explanation: "`:.2f` gir alltid nøyaktig to desimaler, så 7.4 skrives `7.40`. Alternativet uten etterfølgende null er fellen for den som overser formatspesifikatoren. Uten `end=`-argument gir `print` linjeskift hver runde, så det blir to linjer. Nøyaktig samme f-strenger brukes når linjene skal til fil — da med `'\\n'` lagt til.",
    },
    {
      question: "Programmet skal skrive én linje per stasjon til fil. Hvilken linje er riktig?",
      options: ["`outfile.write(f'{navn};{verdier[\"temp\"]:.1f}\\n')`", "`outfile.write(f'{navn};{verdier[\"temp\"]:.1f}')`", "`outfile.print(f'{navn};{verdier[\"temp\"]:.1f}\\n')`", "`outfile.write(navn, verdier['temp'], '\\n')`"],
      explanation: "Linja må bygges som **én** streng som slutter på `'\\n'`, og metoden heter `write`. Varianten uten `'\\n'` er den vanligste feilen i deloppgaven — alt havner på én linje. `outfile.print(...)` finnes ikke; `print` er en innebygd funksjon, ikke en metode på filobjektet. Og `write` tar bare **ett** argument, i motsetning til `print`, som tar så mange du vil.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {'Kvitheia': {'temp': 7.9}, 'Nordvika': {'temp': 3.1}}\nny = {}\nfor navn, verdier in data.items():\n    if verdier['temp'] > 5.0:\n        ny[navn] = {'temp': verdier['temp']}\nprint(ny, len(data))\n```",
      options: ["`{'Kvitheia': {'temp': 7.9}} 2`", "`{'Kvitheia': {'temp': 7.9}} 1`", "`{'Nordvika': {'temp': 3.1}} 2`", "`{'Kvitheia': 7.9} 2`"],
      explanation: "Bare Kvitheia er over 5,0 grader, og `len(data)` er 2 fordi originalen er urørt. Alternativet `... 1` er fellen for den som tror `len(data)` viser resultatet. Og legg merke til at den indre ordboka bygges på nytt — derfor `{'temp': 7.9}` og ikke bare tallet, slik svaret `{'Kvitheia': 7.9} 2` har det.",
    },
    {
      question: "Fila `dybder.txt` har feltene i faste kolonner uten separator. Hvorfor kan ikke `.split()` brukes?",
      options: ["Fordi feltbredden bæres av mellomrom som varierer i antall fra linje til linje", "Fordi `.split()` bare virker på filer som er semikolonseparerte", "Fordi `.split()` ikke kan brukes på linjer som er lengre enn 30 tegn", "Fordi `.split()` alltid fjerner tall og bare beholder tekstfeltene"],
      explanation: "I en kolonnefil er mellomrommene utfylling, ikke skilletegn: bar `.split()` ville delt på dem og gitt ulikt antall biter avhengig av om et navn består av ett eller to ord. Da faller indekseringen sammen. `.split()` virker forøvrig på alle strenger uansett lengde og separator — det er bare **her** den gir gale felt, fordi kolonneposisjonen er informasjonen.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nline = 'Sandvollen 20240301  -1.8   43\\n'\nprint(int(line[25:30]), float(line[19:25]))\n```",
      options: ["`43 -1.8`", "`-1.8 43`", "`43 -1.8 `", "`118 4.2`"],
      explanation: "Utsnittet `line[25:30]` er `'  43'` med utfyllingsmellomrom, og `int` tåler dem; `line[19:25]` er `'  -1.8'`, som `float` leser som −1,8. `print` skriver argumentene i den rekkefølgen de står, med ett mellomrom mellom — svaret `118 4.2` er tallene fra en annen linje i fila.",
    },
    {
      question: "Hvor skal `return ny` stå i en filterfunksjon?",
      options: ["Etter løkka, på samme innrykksnivå som `ny = {}`", "Inne i løkka, rett etter innsettingen i `ny`", "Inne i `if`-blokken, slik at bare treff returneres", "Før løkka, slik at ordboken finnes når den fylles"],
      explanation: "`return` inne i løkka avslutter funksjonen ved første oppføring, så du får en ordbok med maks ett element — en klassisk delpoengfelle som koster halve oppgaven. `return` før løkka gir en tom ordbok. Regelen er at oppbyggingen skal være ferdig før du returnerer, altså samme innrykk som `ny = {}`.",
    },
    {
      question: "Programmet skriver en fil med header-linja `stasjon;temp`. Hva må leseren gjøre?",
      options: ["Kalle `infile.readline()` én gang før løkka over linjene", "Kalle `infile.readline()` inne i løkka, for hver linje", "Ingenting — `for line in infile` hopper over header-linja selv", "Kalle `.strip()` på header-linja for å gjøre den om til data"],
      explanation: "Skriving og lesing må være symmetriske: skriver du en header, må leseren hoppe over den med **ett** `readline()`-kall før løkka. Løkka behandler ellers kolonnenavnene som data, og `float('temp')` gir `ValueError` (feil #7). Kalt inne i løkka ville `readline()` hoppet over annenhver linje.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'a': 1, 'b': 2}\nwith open('e.txt', 'w') as outfile:\n    for k in d:\n        outfile.write(k + ';' + str(d[k]) + '\\n')\nwith open('e.txt') as infile:\n    n = 0\n    for line in infile:\n        n += 1\nprint(n)\n```",
      options: ["`2` — én linje per oppføring i ordboken", "`1` — begge oppføringene havner på samme linje", "`3` — den siste `'\\n'` gir en tom linje i tillegg", "`0` — fila lukkes før innholdet er skrevet"],
      explanation: "To oppføringer, to `write`-kall som hver slutter på `'\\n'`, altså to linjer. Alternativet `3` er en vanlig bekymring: et avsluttende linjeskift lager **ikke** en ekstra tom linje ved lesing — `for line in infile` gir bare linjer som har innhold foran linjeskiftet. Og `with` sørger for at alt er skrevet og fila lukket når blokken slutter.",
    },
  ],
  'in1900-8-3': [
    {
      question: "Fila `vind.txt` har header og feltene `stasjon;dato;vind;retning`:\n\n```\nstasjon;dato;vind;retning\nKvitheia;2025-01-04;12.4;SV\nKvitheia;2025-01-05;7.1;NV\nOspedalen;2025-01-04;18.9;S\nOspedalen;2025-01-05;21.3;SV\nNordvika;2025-01-04;5.2;N\n```\n\nHva skriver dette ut?\n\n```python\ndata = {}\nwith open('vind.txt') as infile:\n    infile.readline()\n    for line in infile:\n        felt = line.strip().split(';')\n        if felt[0] not in data:\n            data[felt[0]] = {}\n        data[felt[0]][felt[1]] = float(felt[2])\nprint(len(data), len(data['Kvitheia']))\n```",
      options: ["`3 2`", "`5 2`", "`3 5`", "`2 3`"],
      explanation: "Fila har fem datalinjer, men bare tre ulike stasjoner — `len(data)` er antall **nøkler**, ikke antall linjer, altså 3. Kvitheia har to datoer, så den indre ordboka har to nøkler. `5 2` er fellen for den som teller linjer i stedet for nøkler, og `3 5` for den som tror `len` på den indre gir hele filas radantall.",
    },
    {
      question: "Fila `vind.txt` har header og feltene `stasjon;dato;vind;retning`:\n\n```\nstasjon;dato;vind;retning\nKvitheia;2025-01-04;12.4;SV\nKvitheia;2025-01-05;7.1;NV\nOspedalen;2025-01-04;18.9;S\nOspedalen;2025-01-05;21.3;SV\nNordvika;2025-01-04;5.2;N\n```\n\nHva skriver dette ut?\n\n```python\nwith open('vind.txt') as infile:\n    for line in infile:\n        felt = line.split()\n        print(len(felt))\n```",
      options: ["Tallet `1` seks ganger, på seks linjer", "Tallet `4` fem ganger, på fem linjer", "Tallet `1` fem ganger, på fem linjer", "Tallet `4` seks ganger, på seks linjer"],
      explanation: "Bar `.split()` deler på blanktegn, og linjene har ingen — så hver linje gir **én** bit. Og løkka går over **alle** seks linjene, header-linja inkludert, siden ingen `readline()` er kalt. Alternativene med 4 er fellen for den som leser `.split()` som om det stod `.split(';')`; de med fem linjer glemmer headeren.",
    },
    {
      question: "En fillesingsoppgave sier: «samme stasjon har flere målinger». Hva må koden ha, som den ikke trenger når hver nøkkel har én linje?",
      options: ["Et nøkkelnivå til, og `if stasjon not in data: data[stasjon] = {}`", "En ekstra `readline()` for hver gang stasjonen gjentar seg i fila", "En liste i stedet for en ordbok, siden nøkler ikke kan gjentas", "En `try/except KeyError` rundt innsettingen i den indre ordboken"],
      explanation: "Med flere linjer per stasjon må noe skille målingene — typisk datoen som neste nøkkel — og den indre ordboka må opprettes første gang stasjonen dukker opp. Uten sjekken får du `KeyError`. En liste er ikke nødvendig (og ville gjort oppslag på navn umulig), og `readline()` har ingenting å gjøre med gjentatte nøkler.",
    },
    {
      question: "Hvor skal `total = 0` stå i en funksjon som regner ut gjennomsnitt **per stasjon** i en nøstet ordbok?",
      options: ["Øverst inne i den ytre løkka, slik at den nullstilles for hver stasjon", "Før den ytre løkka, slik at summen bare opprettes én gang i funksjonen", "Inne i den indre løkka, rett før verdien legges til", "Etter begge løkkene, sammen med divisjonen på antall målinger"],
      explanation: "Nullstilles `total` før den ytre løkka, lekker forrige stasjons sum inn i neste, og alle unntatt den første stasjonen får feil gjennomsnitt. Nullstilling inne i den **indre** løkka gjør at bare den siste målingen teller. Og etter løkkene er det for sent — da har du ingenting å summere i.",
    },
    {
      question: "Et filter over en nøstet ordbok skal returnere en ny struktur. Hvor skal `if ytre not in ny: ny[ytre] = {}` stå?",
      options: ["Inne i den indre løkka, **etter** at betingelsen på målingen er oppfylt", "Øverst i den ytre løkka, før den indre løkka over målingene starter", "Før den ytre løkka, sammen med `ny = {}`", "Etter den indre løkka, når alle målingene er sjekket"],
      explanation: "Står opprettelsen øverst i den ytre løkka, får resultatet med **alle** ytre nøkler — også de som ikke har en eneste kvalifisert måling, med tom indre ordbok. Oppgaveteksten sier normalt at slike ikke skal være med. Derfor står vakten etter betingelsen: nøkkelen opprettes bare når det faktisk finnes noe å putte i den.",
    },
    {
      question: "Fila `vind.txt` har header og feltene `stasjon;dato;vind;retning`:\n\n```\nstasjon;dato;vind;retning\nKvitheia;2025-01-04;12.4;SV\nKvitheia;2025-01-05;7.1;NV\nOspedalen;2025-01-04;18.9;S\nOspedalen;2025-01-05;21.3;SV\nNordvika;2025-01-04;5.2;N\n```\n\nHva skriver dette ut?\n\n```python\ndata = {}\nwith open('vind.txt') as infile:\n    infile.readline()\n    for line in infile:\n        felt = line.strip().split(';')\n        data[felt[0]] = float(felt[2])\nprint(len(data), data['Ospedalen'])\n```",
      options: ["`3 21.3`", "`5 18.9`", "`3 18.9`", "`5 21.3`"],
      explanation: "Uten et andre nøkkelnivå overskriver hver ny måling den forrige for samme stasjon: `data['Ospedalen']` ender med verdien fra den **siste** linja, 21.3. Og antall nøkler er 3, ikke 5. `3 18.9` er fellen for den som tror den første verdien beholdes. Dette er nettopp grunnen til at oppgaven ber om datoen som nøkkel.",
    },
    {
      question: "Fila `land.txt` er kommaseparert. Hva skjer med `data` når koden bruker `line.strip().split(';')`?",
      options: ["Hele linja blir én nøkkel, og koden kjører uten feilmelding", "Koden krasjer umiddelbart med `ValueError` på første linje", "Kommaene blir automatisk tolket som separator likevel", "Koden krasjer med `IndexError` fordi listen får null elementer"],
      explanation: "`.split(';')` på en linje uten semikolon gir en liste med **ett** element: hele linja. Bruker du bare `felt[0]` som nøkkel, kjører programmet fint — og gir en helt ubrukelig struktur, uten et eneste varsel. `IndexError` kommer først når du rører `felt[1]`. Det er derfor «hva er separatoren» er et eget steg i oppskriften, ikke noe du sjekker etterpå.",
    },
    {
      question: "Hva er forskjellen mellom `data[nøkkel] = verdi` og `data[nøkkel].append(verdi)`?",
      options: ["Tilordning overskriver den gamle verdien; `.append` utvider en liste som alt finnes", "Tilordning virker bare på ordbøker, `.append` virker bare på nøstede ordbøker", "Tilordning oppretter nøkkelen, `.append` krever at nøkkelen ikke finnes fra før", "De gjør det samme, men `.append` er raskere på store datamengder"],
      explanation: "Skal flere rader samles under samme nøkkel, må verdien være en liste som opprettes tom første gang (`data[nøkkel] = []`) og deretter utvides med `.append`. Bruker du tilordning i stedet, overlever bare den siste raden. `.append` forutsetter at nøkkelen alt peker på en liste — ellers får du `KeyError`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {}\nwith open('personer.txt') as infile:\n    infile.readline()\n    for line in infile:\n        felt = line.strip().split(';')\n        if felt[2] not in data:\n            data[felt[2]] = []\n        data[felt[2]].append(felt[1])\nprint(len(data), len(data['5003']))\n```\n\nFila `personer.txt` har header og fire datalinjer, der to personer har postnummer 5003 og de to andre har hvert sitt.",
      options: ["`3 2`", "`4 2`", "`3 1`", "`4 4`"],
      explanation: "Tre ulike postnumre gir tre nøkler, og postnummer 5003 har to navn i lista si. `4 2` er fellen for den som teller datalinjer i stedet for ulike nøkler, og `3 1` for den som tror `.append` overskriver. Legg merke til at postnummeret beholdes som **tekst** — `int('0150')` ville gitt 150 og ødelagt nøkkelen.",
    },
    {
      question: "En fil skrives med `outfile.write(f'{navn};{x:.2f}')` inne i en løkke over tre oppføringer. Hvor mange linjer har fila etterpå?",
      options: ["Én — `write` legger ikke til linjeskift, så alt skjøtes sammen", "Tre — én linje per `write`-kall, akkurat som med et vanlig `print`", "Fire — tre oppføringer pluss en tom linje til slutt", "Null — fila er tom fordi ingen linjeskift ble skrevet"],
      explanation: "`write` skriver strengen nøyaktig som den står, uten linjeskift, så de tre strengene blir én linje der siste tall og neste navn gror sammen. Svaret «tre» er fellen for den som blander `write` med `print`. Fila er ikke tom — den har innhold, bare uten linjedeling, og neste program som leser den, får `ValueError` på det sammensmeltede feltet.",
    },
    {
      question: "En innlesingsfunksjon har `return data` **inne** i løkka over linjene. Hva blir resultatet?",
      options: ["En ordbok med bare den første linjas oppføring, siden funksjonen avsluttes straks", "En tom ordbok, siden `return` rekker å kjøre før noe blir satt inn i den", "En ordbok med alle oppføringene, men i omvendt rekkefølge", "En feilmelding, siden `return` ikke er lovlig inne i en løkke"],
      explanation: "`return` avslutter funksjonen umiddelbart, så bare den første linja er behandlet. Dette er en klassisk delpoengfelle: strukturen i koden er ellers helt riktig, og feilen synes ikke uten å kjøre. `return` skal stå utenfor både løkka og `with`-blokken, på samme innrykk som `data = {}`. `return` **er** lovlig inne i en løkke — det er nettopp derfor feilen er lett å gjøre.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nd = {'K1201': {'IN1900': 71, 'MAT1100': 60}, 'K1203': {'IN1900': 88}}\nn = 0\nfor kandidat in d:\n    n += len(d[kandidat])\nprint(len(d), n)\n```",
      options: ["`2 3`", "`3 2`", "`2 2`", "`3 3`"],
      explanation: "`len(d)` er antall kandidater, 2. Løkka legger sammen antall emner per kandidat: 2 + 1 = 3. Mønsteret er hvordan man teller **rader i den opprinnelige fila** når strukturen er nøstet — nyttig når oppgaven ber om «antall målinger totalt». `2 2` er fellen for den som tror `len(d[kandidat])` alltid er 1.",
    },
    {
      question: "Fila `land.txt` er kommaseparert med fire linjer og feltene `land,befolkning,bnp`. Hva skriver dette ut?\n\n```python\ntotal = 0\nn = 0\nwith open('land.txt') as infile:\n    for line in infile:\n        felt = line.strip().split(',')\n        total += int(felt[2])\n        n += 1\nprint(f'{total / n:.1f}')\n```\n\nBNP-verdiene er 52100, 38400, 9800 og 71200.",
      options: ["`42875.0`", "`42875`", "`171500.0`", "`42875.00`"],
      explanation: "Summen er 171 500 og `n` er 4, så gjennomsnittet er 42 875,0 — og `:.1f` tvinger nøyaktig én desimal, derfor `.0` til slutt. `42875` uten desimal er svaret man ville fått uten formatspesifikatoren, og `171500.0` er summen, ikke gjennomsnittet. Formatspesifikatoren avgjør hvordan tallet **vises**, ikke hva det er.",
    },
    {
      question: "Hvilken feilmelding får du når header-linja `stasjon;ph;temp` ikke hoppes over, og koden gjør `float(felt[1])`?",
      options: ["`ValueError: could not convert string to float: 'ph'`", "`KeyError: 'ph'` — kolonnenavnet finnes ikke som nøkkel", "`IndexError: list index out of range` på header-linja", "`TypeError: float() argument must be a number, not str`"],
      explanation: "`float` godtar strenger, men bare tallstrenger — `'ph'` er ikke et tall, altså `ValueError` med teksten sitert. Ser du `ValueError` med et **kolonnenavn** i meldingen, er diagnosen alltid glemt `readline()` (feil #7). `IndexError` ville krevd at header-linja hadde færre felt enn datalinjene, og `TypeError` gjelder helt andre operandtyper.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nline = 'Kvitheia      1180    7.9\\n'\nprint(line[0:12].strip(), int(line[12:18]), float(line[18:25]))\n```",
      options: ["`Kvitheia 1180 7.9`", "`Kvitheia      1180 7.9`", "`Kvitheia 1180.0 7.9`", "`Kvitheia 1180 7.90`"],
      explanation: "`.strip()` fjerner utfyllingsmellomrommene i navnefeltet, og `print` setter selv ett mellomrom mellom argumentene. `int` gir `1180` uten desimal, `float` gir `7.9` uten ekstra null — det er `f'{x:.2f}'` som ville gitt `7.90`. Alternativet med de mange mellomrommene er svaret **uten** `.strip()`.",
    },
    {
      question: "Hva er problemet med `ny = data` som første linje i en filterfunksjon?",
      options: ["Det gir bare et nytt navn på samme ordbok, så endringer treffer originalen", "Det er ikke lovlig Python — en ordbok kan ikke tilordnes et nytt navn", "Det lager en kopi, men bare av nøklene i ordboken, ikke av verdiene", "Det gjør funksjonen langsommere fordi hele ordboken kopieres"],
      explanation: "En tilordning kopierer ikke — den lar to navn peke på samme objekt (aliasing, feil #23). Alt du gjør med `ny`, skjer med `data`, og oppgavens krav om at argumentet skal være urørt, er brutt. Tilordningen er både lovlig og lynrask; det er nettopp derfor feilen er lett å gjøre. Riktig start er `ny = {}`.",
    },
    {
      question: "Oppgaveteksten sier «alle stasjoner med **minst** 60 poeng». Hvilken betingelse er riktig?",
      options: ["`if verdier['poeng'] >= 60:`", "`if verdier['poeng'] > 60:`", "`if verdier['poeng'] == 60:`", "`if verdier['poeng'] <= 60:`"],
      explanation: "«Minst 60» betyr 60 eller mer, altså `>=`. Med `>` faller den som har nøyaktig 60, utenfor — og eksamensdataene er som regel laget slik at det finnes en oppføring på grensen, nettopp for å skille de to. «Over 60» ville vært `>`, «under» `<`, og «høyst» `<=`. Er teksten tvetydig, velg og skriv en kommentar om valget.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\ndata = {}\nwith open('land.txt') as infile:\n    for line in infile:\n        felt = line.strip().split(',')\n        data[felt[0]] = int(felt[1])\n\nn = 0\nfor navn in data:\n    if data[navn] > 1000000:\n        n += 1\n        print(navn, end=' ')\nprint()\nprint(n, len(data))\n```\n\nBefolkningstallene er Alveria 4820000, Brenland 1290000, Corvia 17650000 og Dunmark 610000.",
      options: ["`Alveria Brenland Corvia` på én linje, deretter `3 4`", "`Alveria Brenland Corvia` på tre linjer, deretter `3 4`", "`Alveria Brenland Corvia Dunmark` på én linje, deretter `4 4`", "`Alveria Brenland Corvia` på én linje, deretter `3 3`"],
      explanation: "`end=' '` erstatter linjeskiftet med et mellomrom, så de tre kvalifiserte navnene havner på samme linje; det tomme `print()` avslutter linja. Dunmark har 610 000 og faller utenfor, så `n` er 3 — men `len(data)` er 4, siden ordboka inneholder alle landene. `3 3` er fellen for den som blander telleren med ordbokstørrelsen.",
    },
  ],
  'in1900-9-1': [
    {
      question: "Hva skriver programmet ut?\n\n```python\ntotal = 0\nfor k in range(2, 11, 3):\n    total += k\nprint(total)\n```",
      options: ["15", "26", "18", "8"],
      explanation: "`range(2, 11, 3)` gir 2, 5 og 8 — `stop` er eksklusiv, så 11 er ikke med, og summen blir 15. Svaret 26 er summen hvis du tar 11 med (av-én-feilen i `range`), 18 er $0+3+6+9$ hvis du glemmer at `start` er 2, og 8 er den siste `k`-verdien i stedet for summen.",
    },
    {
      question: "Programmet skriver ut én linje. Hvilken?\n\n```python\nfor i in range(1, 4):\n    for j in range(i):\n        print(i + j, end=' ')\nprint()\n```",
      options: ["1 2 3 3 4 5", "1 2 3 4 5 6", "2 3 4 4 5 6", "1 3 5"],
      explanation: "Den indre løkka går `i` runder, så det skrives 1 + 2 + 3 = 6 tall: 1; 2, 3; 3, 4, 5. `end=' '` samler alt på én linje. Alternativet `2 3 4 4 5 6` er svaret hvis den indre løkka leses som `range(1, i + 1)`, `1 3 5` er bare siste `j` i hver runde, og `1 2 3 4 5 6` er en løpende telling uten at `i + j` regnes ut.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntall = [4, 9, 16, 25, 36]\nprint(tall[-2], tall[1:4])\n```",
      options: ["25 [9, 16, 25]", "36 [9, 16, 25]", "25 [9, 16, 25, 36]", "16 [4, 9, 16]"],
      explanation: "`tall[-2]` er nest siste element (25), og `tall[1:4]` er utsnittet fra indeks 1 til og med 3, altså `[9, 16, 25]` — slutten er eksklusiv. Svaret `36 …` leser `-2` som siste element, `… [9, 16, 25, 36]` tar med indeks 4, og `16 [4, 9, 16]` teller indeksene fra 1 i stedet for fra 0.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nrute = ['R1', 'R2', 'R3', 'R4']\nfunn = [4, 9, 2]\ns = 0\nfor navn, antall in zip(rute, funn):\n    s += antall\nprint(len(rute), s)\n```",
      options: ["4 15", "3 15", "4 20", "3 20"],
      explanation: "`zip` stopper ved den korteste sekvensen, så løkka går tre runder og summen blir 4 + 9 + 2 = 15 — men `len(rute)` spør om lista og er fortsatt 4. Svaret `3 15` forveksler listelengden med antall iterasjoner, og de to med 20 later som `zip` fyller ut en fjerde rute.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nmasse = 80.0\nhalveringer = 0\nwhile masse > 5:\n    masse = masse / 2\n    halveringer += 1\nprint(masse, halveringer)\n```",
      options: ["5.0 4", "2.5 5", "5 4", "10.0 3"],
      explanation: "Massen går 80, 40, 20, 10, 5 — ved femte sjekk er `masse` nøyaktig 5.0, og `5.0 > 5` er usann, så det blir fire halveringer. `2.5 5` er svaret med `>=` i stedet for `>`, `5 4` skriver flyttallet som heltall, og `10.0 3` stopper én runde for tidlig.",
    },
    {
      question: "Hva er verdien av `y[x[0]][x[-1]:]` når `x = [2, 0, 3]` og `y = [[5, 8, 13], [21, 34, 55], [89, 144, 233]]`?",
      options: ["`[]` — utsnittet blir tomt", "`[233]` — bare siste element", "`89` — første element i raden", "`IndexError` — indeksen finnes ikke"],
      explanation: "`x[0]` er 2, så vi er i raden `[89, 144, 233]`, og `x[-1]` er 3, så utsnittet `[3:]` starter etter siste element og blir tomt. Et utsnitt utenfor kanten gir tom liste, ikke feil — derfor er `IndexError` galt, mens `y[2][3]` (indeksering) faktisk ville gitt `IndexError`. `[233]` og `89` er svarene hvis du leser uttrykket som indeksering av ett element.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nprint(-11 // 4, 2 ** 2 ** 3, 8 / 4)\n```",
      options: ["-3 256 2.0", "-2 256 2.0", "-3 64 2", "-2 64 2.0"],
      explanation: "`//` runder nedover, så $-2.75$ blir −3; `**` er høyre-assosiativ, så uttrykket er $2^{8} = 256$; og `/` gir alltid flyttall, altså `2.0`. Svarene med −2 runder mot null slik `int` gjør, 64 regner $(2^2)^3$ fra venstre, og `2` glemmer at `/` aldri gir heltall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\n\nmaling = [2, 3]\nvektor = np.array([2, 3])\nprint(maling + maling, vektor + vektor)\n```",
      options: ["[2, 3, 2, 3] [4 6]", "[4, 6] [4 6]", "[2, 3, 2, 3] [2, 3, 2, 3]", "[4, 6] [2 3 2 3]"],
      explanation: "`+` på to lister skjøter dem sammen, mens `+` på to NumPy-arrayer legger sammen element for element — og arrayet skrives uten komma. Alternativene bytter om de to betydningene eller bruker samme regel for begge, som er den vanligste forvekslingen mellom liste og array.",
    },
    {
      question: "Hva skriver programmet ut? Utskriften er vist mellom fnutter så mellomrommene blir synlige.\n\n```python\ntid = 3.14159\nnummer = 7\nprint(f'{tid:6.2f}|{nummer:03d}')\n```",
      options: ["'  3.14|007'", "'3.14|007'", "'  3.14|7'", "'  3.142|007'"],
      explanation: "`{tid:6.2f}` betyr to desimaler og minst seks tegn bredde, så `3.14` fylles ut med to mellomrom foran; `{nummer:03d}` fyller med nuller til tre tegn. Alternativene glemmer bredden, glemmer nullfyllet, eller leser 6 som antall desimaler i stedet for total bredde.",
    },
    {
      question: "Filen `analyse.py` inneholder:\n\n```python\nimport sys\n\nmaling = [8.0, 0.0, 2.5]\ni = int(sys.argv[1])\nfaktor = float(sys.argv[2])\nprint(maling[i] / (faktor * maling[i - 1]))\n```\n\nHvilken feil utløses av `python analyse.py 2 1.5`?",
      options: ["`ZeroDivisionError` — float division by zero", "`IndexError` — list index out of range", "`ValueError` — invalid literal for int()", "`TypeError` — unsupported operand type(s)"],
      explanation: "`sys.argv[0]` er filnavnet, så `i` blir 2 og `faktor` 1.5. Siste linje regner `maling[2] / (1.5 * maling[1])`, og `maling[1]` er 0.0 — nevneren blir null. `IndexError` ville kommet av et manglende argument eller en indeks utenfor lista, og `ValueError` av `int('to')`; ingen av dem inntreffer her.",
    },
    {
      question: "Programmet skriver to linjer. Hvilket alternativ har begge riktig?\n\n```python\ncelle = {'A1': {'spenning': 4, 'strom': 7}, 'B2': {'spenning': 9}}\ncelle['B2']['strom'] = 3\nprint(len(celle), celle['A1']['strom'] + celle['B2']['strom'])\nprint('strom' in celle, 'A1' in celle)\n```",
      options: ["2 10 og False True", "2 10 og True True", "2 12 og False True", "3 10 og False True"],
      explanation: "Innsettingen legger `strom` til i den indre dictionaryen, så den ytre har fortsatt to nøkler og summen er 7 + 3 = 10. `in` på en dictionary spør bare om de ytre nøklene, derfor er `'strom' in celle` usann. `3 10` teller den indre nøkkelen som en ytre, `2 12` summerer feil nøkler, og `True True` tror `in` søker gjennom hele strukturen.",
    },
    {
      question: "Filen `rystelser.txt` inneholder linjene `dato;styrke`, `2026-03-02;2.4`, `2026-03-05;3.1` og `2026-03-11;1.7`. Hva skriver programmet ut?\n\n```python\nsum_styrke = 0\nwith open('rystelser.txt') as infile:\n    infile.readline()\n    for linje in infile:\n        felt = linje.split(';')\n        sum_styrke += float(felt[1])\nprint(sum_styrke)\n```",
      options: ["7.2", "4.8", "7", "programmet stopper med ValueError"],
      explanation: "`infile.readline()` kaster overskriftslinja, og løkka summerer 2.4 + 3.1 + 1.7 = 7.2 — flyttall, fordi `float` brukes. `ValueError` er det som ville skjedd UTEN `readline()`-linja, `4.8` er svaret hvis du tror to linjer hoppes over, og `7` skriver summen som heltall.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nlinje = 'prove-7; 12.5 ;3\\n'\nfelt = linje.split(';')\nprint(len(felt), repr(felt[-1]))\n```",
      options: ["`3` og `'3\\n'`", "`3` og `'3'`", "`2` og `'3'`", "`2` og `' 12.5 '`"],
      explanation: "To semikolon gir tre felt, og `split` fjerner ingenting annet enn skilletegnet — linjeskiftet henger igjen i siste felt, noe `repr` viser. Med `linje.strip().split(';')` ville siste felt vært `'3'`; alternativene med 2 teller feltene feil.",
    },
    {
      question: "Hva skjer med denne løkka?\n\n```python\ns = 0.0\nwhile s != 1.0:\n    s = s + 0.1\n```",
      options: ["Den går uendelig, fordi `s` aldri blir eksakt 1.0", "Den terminerer etter 10 tillegg, når `s` er 1.0", "Den terminerer etter 11 tillegg, ett skritt forbi 1.0", "Den går uendelig, fordi `s` vokser uten øvre grense"],
      explanation: "Etter ti tillegg er `s` lik 0.9999999999999999 og etter elleve 1.0999999999999999, så likhetstesten blir aldri sann og løkka går evig. At `s` vokser er riktig, men det er ikke grunnen — med `while s < 1.0` ville løkka terminert. Dette er samme grunn til at testfunksjoner bruker `abs(forventet - beregnet) < tol` og aldri `==` på flyttall.",
    },
    {
      question: "Lista `verdier` er ikke-tom og kan inneholde negative tall. Hvilken kodebit ender med den største verdien i `storst`?",
      options: ["`storst = verdier[0]` og så `for v in verdier: if v > storst: storst = v`", "`storst = 0` og så `for v in verdier: if v > storst: storst = v`", "`storst = 0` og så `for v in verdier: if v < storst: storst = v`", "`storst = verdier[-1]` og så `for v in verdier: if v < storst: storst = v`"],
      explanation: "Startverdien må hentes fra lista selv, ellers svarer koden med et tall som ikke finnes der: med `storst = 0` og bare negative verdier blir svaret 0. De to variantene som tester `if v < storst`, snur dessuten sammenligningen og finner den minste verdien.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ndef juster(verdi):\n    verdi = verdi + 10\n    return verdi\n\nverdi = 5\nny = juster(verdi)\nprint(verdi, ny)\n```",
      options: ["5 15", "15 15", "5 5", "15 5"],
      explanation: "Tilordningen inne i funksjonen lager en lokal variabel; den globale `verdi` er urørt, mens returverdien blir 15. `15 15` er svaret hvis du tror funksjonen endrer den globale variabelen. Merk at en endring på plass i en liste (`verdier[0] = ...`) derimot ville vært synlig utenfor.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\ntekst = 'nord-sor-ost'\ndeler = tekst.split('-')\nprint(deler[1], '+'.join(deler[:2]), tekst.index('sor'))\n```",
      options: ["sor nord+sor 5", "sor nord+sor 4", "sor nord+sor+ost 5", "nord nord+sor 5"],
      explanation: "`deler` er `['nord', 'sor', 'ost']`, `deler[:2]` er de to første, og `index` gir posisjonen til `s` i `'nord-sor-ost'` — tegnene er n(0) o(1) r(2) d(3) -(4) s(5). Svaret 4 glemmer at bindestreken er et tegn, `nord+sor+ost` glemmer at utsnittets slutt er eksklusiv, og `nord …` leser `deler[1]` som første element.",
    },
    {
      question: "Funksjonen `derivert` regner ut en numerisk derivert:\n\n```python\ndef derivert(g, x, h=1e-5):\n    return (g(x + h) - g(x - h)) / (2 * h)\n```\n\nHvilket kall gir en tilnærming til den deriverte av $f(x) = x^3$ i $x = 2$?",
      options: ["`derivert(lambda x: x**3, 2)`", "`derivert(x**3, 2)`", "`derivert('x**3', 2)`", "`derivert(x**3, 2, 1e-5)`"],
      explanation: "`derivert` kaller `g` som funksjon, så det første argumentet må være kallbart — en `lambda` er nettopp det. `x**3` er et uttrykk som regnes ut på stedet (og gir `NameError` fordi `x` ikke finnes der kallet står), og en streng kan ikke kalles. Riktig `h`-verdi hjelper ikke når første argument er feil.",
    },
    {
      question: "Hva gir `t[1:4:2]` når `t = [0.0, 0.5, 1.0, 1.5, 2.0]`?",
      options: ["[0.5, 1.5]", "[0.5, 1.0]", "[0.5, 1.0, 1.5]", "0.5"],
      explanation: "Utsnittet leses `[start:stopp:skritt]`, akkurat som `range(start, stop, step)`: indeks 1, deretter 3, og stopp før indeks 4. `[0.5, 1.0]` leser 2 som «to elementer» i stedet for skrittlengde, `[0.5, 1.0, 1.5]` glemmer skrittet, og `0.5` gjør et utsnitt til et element.",
    },
    {
      question: "Gitt funksjonen\n\n```python\ndef middel(verdier):\n    assert len(verdier) > 0, 'tom liste'\n    return sum(verdier) / len(verdier)\n```\n\nHvilken feil utløses av `middel([2, 'tre'])`?",
      options: ["`TypeError` — `sum` kan ikke legge sammen tall og streng", "`AssertionError` — testen i `assert`-linja slår til", "`ValueError` — strengen kan ikke tolkes som tall", "Ingen feil — funksjonen returnerer et tall"],
      explanation: "`assert`-testen går fint fordi lengden er 2, men `sum` prøver `2 + 'tre'` og gir `TypeError: unsupported operand type(s) for +: 'int' and 'str'`. `AssertionError` kommer bare for en tom liste, og `ValueError` ville krevd et forsøk på `float('tre')`, som denne koden ikke gjør.",
    },
  ],
  'in1900-9-2': [
    {
      question: "Hva skriver dette ut?\n\n```python\nsmitte = {}\nfor bydel, tall in [('Vest', 41), ('Aust', 22), ('Vest', 58)]:\n    if bydel not in smitte:\n        smitte[bydel] = []\n    smitte[bydel].append(tall)\nprint(smitte, len(smitte))\n```",
      options: ["`{'Vest': [41, 58], 'Aust': [22]} 2`", "`{'Vest': [41, 58], 'Aust': [22]} 3`", "`{'Vest': [58], 'Aust': [22]} 2`", "`{'Vest': 58, 'Aust': 22} 2`"],
      explanation: "`if bydel not in smitte` oppretter den tomme lista bare første gang bydelen dukker opp, og `.append` legger til uten å overskrive. `len(smitte)` teller de ytre nøklene — to bydeler, ikke tre linjer, som er den nære distraktoren. Alternativet med bare `[58]` er hva du får hvis du setter `smitte[bydel] = [tall]` i stedet for å legge til, og det siste er formen uten liste i det hele tatt.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nimport numpy as np\n\nt = np.linspace(0, 180, 181)\nprint(t.size, t[1] - t[0], t[-1])\n```",
      options: ["`181 1.0 180.0`", "`180 1.0 180.0`", "`181 1.0 179.0`", "`182 1.0 180.0`"],
      explanation: "Tredje argument til `np.linspace` er antall **punkter**, ikke antall intervaller: 181 punkter gir 180 intervaller og steget 1,0, og begge endepunktene er med. Distraktoren `180` er av-én-feilen (#1) som leser tallet som antall intervaller, og `179.0` er den samme feilen lest i den andre enden av tabellen.",
    },
    {
      question: "En løser settes opp med `set_initial_condition([9990, 10, 0])`, og deretter kjøres `t, u = solver.solve((0, 100), 1000)`. Hva blir `u.shape`, og hvordan henter du ut den andre komponenten?",
      options: ["`(1001, 3)`, og `I = u[:, 1]`", "`(1000, 3)`, og `I = u[:, 1]`", "`(1001, 3)`, og `I = u[1]`", "`(3, 1001)`, og `I = u[1, :]`"],
      explanation: "`N = 1000` steg gir `N + 1 = 1001` tidspunkter, og startverdien har tre komponenter, så `u` er en tabell med én rad per tidspunkt og én kolonne per likning. Utpakkingen går derfor på kolonne: `u[:, 1]`. Distraktoren `u[1]` gir én **rad** — tilstanden ved ett tidspunkt — og den transponerte formen er den vanlige forvekslingen når man husker at det er tre likninger.",
    },
    {
      question: "Klassen `Smitterate` lagrer `self.beta0`, `self.a` og `self.P` i konstruktøren og har en `__call__`. Hvilken `__mul__` gjør at `beta * 0.5` gir en **halvert rate** som fortsatt kan kalles som en funksjon?",
      options: ["`return Smitterate(self.beta0*k, self.a, self.P)`", "`return Smitterate(self.beta0, self.a, self.P*k)`", "`return [self.beta0*k, self.a, self.P]`", "`return self.beta0*k, self.a, self.P`"],
      explanation: "En aritmetisk spesialmetode skal returnere en **ny instans** av klassen, med den skalerte parameteren på riktig plass. Den nære distraktoren returnerer også en ny instans, men skalerer perioden i stedet for grunnraten — resultatet er kallbart, men raten er uendret. De to siste returnerer en liste og et tuppel; begge er felle #4, og `tiltak(90)` stopper da med `TypeError`.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nimport numpy as np\n\nS = np.zeros(3)\nI = np.zeros(3)\nS[0], I[0] = 100.0, 10.0\nfor n in range(2):\n    S[n+1] = S[n] - 0.001*S[n]*I[n]\n    I[n+1] = I[n] + 0.001*S[n]*I[n] - 0.2*I[n]\nprint(f'{S[1]:.3f} {I[1]:.3f}')\nprint(f'{S[2]:.3f} {I[2]:.3f}')\n```",
      options: ["`99.000 9.000` og deretter `98.109 8.091`", "`99.000 8.990` og deretter `98.110 8.074`", "`99.000 11.000` og deretter `97.911 12.089`", "`101.000 9.000` og deretter `101.909 8.109`"],
      explanation: "Begge linjene i løkka leser `S[n]` og `I[n]`, altså verdiene fra forrige steg, så første steg gir $100 - 1 = 99$ og $10 + 1 - 2 = 9$. Den første distraktoren er felle #2: den bruker den allerede oppdaterte `S[n+1]` i smitteleddet. Den andre glemmer friskmeldingsleddet `- 0.2*I[n]`, så de smittede bare vokser, og den siste har byttet fortegn i `S`-linja slik at de mottakelige øker.",
    },
    {
      question: "Hva skriver dette ut?\n\n```python\nlinje = 'Storhaug;12;73;9\\n'\nfelt = linje.strip().split(';')\nprint(len(felt), felt[1], int(felt[1]) + int(felt[-1]))\n```",
      options: ["`4 12 21`", "`4 12 82`", "`5 12 21`", "`3 12 21`"],
      explanation: "`.strip()` fjerner linjeskiftet før delingen, så det siste feltet er `'9'` og ikke `'9\\n'`, og fire felt gir `len(felt)` lik 4. `felt[1]` er `'12'` og skrives uten fnutter fordi `print` bruker `str`. Distraktoren `82` legger sammen de to midterste tallene i stedet for det andre og det siste, og `5` er hva du får hvis du tror at et avsluttende skilletegn ville laget et ekstra felt.",
    },
  ],
  'in1900-9-3': [
    {
      question: "Hvor mange poeng gir den avsluttende eksamenen, og hvor mange gir midtveis?",
      options: ["75 og 25", "50 og 50", "100 og 25", "75 og 50"],
      explanation: "Den avsluttende gir maks 75 poeng og teller 75 prosent; midtveis gir maks 25 og teller 25 prosent. Til sammen blir det 100, og det er derfor siste «oppgave» på det avsluttende settet er feltet der sensor legger inn midtveispoengene.",
    },
    {
      question: "Hva skriver programmet ut?\n\n```python\nimport numpy as np\na = [3, 1]\nb = np.array([3, 1])\nprint(a * 2, b * 2)\n```",
      options: ["`[3, 1, 3, 1] [6 2]`", "`[6, 2] [6 2]`", "`[3, 1, 3, 1] [3 1 3 1]`", "`[6, 2] [3 1 3 1]`"],
      explanation: "På en liste gjentar `* 2` innholdet; på et array dobler den hvert element. Legg merke til at lister skrives med komma og arrayer uten. Alternativ b) behandler lista som et array, c) behandler arrayet som en liste, og d) blander de to.",
    },
    {
      question: "En stykkvis funksjon er skrevet som en klasse med `__call__`. Hva må stå **etter** løkka over grensene?",
      options: ["`return self.a[-1]`", "`return None`", "`return self.b[-1]`", "`raise ValueError`"],
      explanation: "Verdier over siste grense treffer ingen `if`, og da må den siste funksjonsverdien returneres. Uten linja gir funksjonen `None` for alle store argumenter — en stille feil. Alternativ c) returnerer en grense i stedet for en verdi.",
    },
    {
      question: "Hvorfor kan en klasse med `if`-tester i `__call__` ikke evalueres på et helt NumPy-array?",
      options: ["`if` tåler ikke et array av sannhetsverdier", "Klasser kan ikke ta arrayer som argument", "`__call__` tar bare ett tall per definisjon", "NumPy krever at funksjonen er importert"],
      explanation: "Sammenligningen `t < grense` gir et array av sanne og usanne verdier når `t` er et array, og `if` vet ikke hva den skal gjøre med flere svar samtidig. Løsningen er å kalle funksjonen én verdi om gangen, typisk i en listeforståelse.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom `t[n]` og `t[n+1]` i en implisitt ODE-metode?",
      options: ["`t[n+1]` er det som gjør metoden implisitt", "`t[n+1]` gir raskere konvergens i `root`", "`t[n]` gir `IndexError` på siste skritt", "Det er ingen praktisk forskjell"],
      explanation: "Baklengs Euler bruker stigningstallet ved punktet du skal **til**. Skriver du `t[n]`, har du laget en tungvint variant av forlengs Euler, og hele stabiliteten forsvinner. Alternativ c) er galt: tidsaksen har `N+1` punkter, så `t[n+1]` finnes alltid.",
    },
    {
      question: "En eksplisitt løser sprenger på et stivt system mens en implisitt gir riktig svar, med samme antall skritt. Hva er forklaringen?",
      options: ["Den eksplisitte metodens stabilitetsgrense", "En indeksfeil i den eksplisitte koden", "At `root` er mer nøyaktig enn aritmetikk", "At systemet mangler startbetingelse"],
      explanation: "Eksplisitte metoder tåler bare skritt under en viss grense på stive problemer; over den vokser løsningen i stedet for å falle. Det er ikke en programmeringsfeil. Kontrollen er å kjøre den eksplisitte med langt flere skritt — blir svaret fornuftig, var det steglengden.",
    },
  ],
};

export default quizData_in1900;
