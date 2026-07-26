import type { QuizQuestion } from './quiz-data';

const quizData_in1020: Record<string, QuizQuestion[]> = {
  'in1020-0-1': [
    {
      question: "Hvordan er IN1020-eksamen bygd opp poengmessig?",
      options: ["Fire seksjoner à 25 poeng, der hver seksjon må bestås for seg", "Fire seksjoner à 25 poeng, der bare totalsummen avgjør om du består", "To seksjoner à 50 poeng, der begge må bestås for seg", "Fem seksjoner à 20 poeng, der de tre beste teller"],
      explanation: "Siden 2022 består settet av fire faste bolker à 25 poeng, og kravet er å komme over grensen i hver av dem. Alternativ 2 beskriver poengfordelingen riktig, men mister seksjonskravet — det er nettopp det som gjør at du ikke kan droppe et tema. Alternativ 3 og 4 har feil antall seksjoner; ingen sett har hatt to eller fem bolker.",
    },
    {
      question: "Hva betyr «negativ poenggiving» slik den brukes i IN1020?",
      options: ["Riktig kryss gir pluss og galt kryss gir minus, men én oppgave kan aldri gi mindre enn 0 poeng", "Riktig kryss gir pluss og galt kryss gir minus, og summen kan bli negativ på en enkelt oppgave", "Blankt svar gir minus, mens et galt kryss bare gir null poeng for den raden", "Minuspoengene trekkes fra totalsummen først når hele seksjonen er rettet ferdig"],
      explanation: "Gulvet ligger på 0 per oppgave: de gale kryssene kan spise opp de riktige, men ikke mer enn det. Alternativ 2 glemmer gulvet. Alternativ 3 snur det på hodet — blankt koster ingenting. Alternativ 4 beskriver en rekkefølge som ikke finnes; trekket skjer innenfor hver enkelt oppgave.",
    },
    {
      question: "Hva gir en oppgave med fem alternativer, to riktige og trekk lik plussverdien, dersom du krysser av alle fem?",
      options: ["0 poeng, fordi de tre gale kryssene nuller ut de to riktige", "2 poeng, fordi begge de riktige alternativene er krysset av", "5 poeng, fordi alle alternativene er dekket av avkrysningene dine", "Minus 1 poeng, fordi de tre gale kryssene veier tyngre enn de to riktige"],
      explanation: "Regnestykket er 2 minus 3 lik minus 1, og gulvet løfter det til 0. Alternativ 2 glemmer at gale kryss trekker. Alternativ 3 forveksler antall avkrysninger med antall poeng. Alternativ 4 regner riktig, men glemmer at gulvet på 0 gjelder per oppgave.",
    },
    {
      question: "Hvilken svarform beskriver «velg ett eller flere alternativer»?",
      options: ["Svarform F1, der antallet riktige alternativer ikke er oppgitt på forhånd", "Svarform F2, der du vurderer hver rad som sann eller usann for seg", "Svarform F3, der du kobler hvert element til riktig kategori", "Svarform F4, der hvert delspørsmål har sin egen nedtrekksliste"],
      explanation: "F1 er formen der du selv må avgjøre hvor mange kryss som hører hjemme. F2 er sant/usant-matrisen, F3 er dra-og-slipp og F4 er nedtrekksmenyen — alle tre er reelle former på eksamen, men ingen av dem lar deg velge fritt antall kryss.",
    },
    {
      question: "Hvilken svarform gir typisk delvis uttelling per rad?",
      options: ["Svarform F4, nedtrekksmenyen med ett valg per delspørsmål", "Svarform F1, der du krysser av ett eller flere alternativer", "Svarform F3, der koblingen vurderes som en helhet", "Ingen av formene — alle oppgavene er alt-eller-ingenting"],
      explanation: "I en nedtrekksmeny vurderes hver rad for seg, så du får uttelling for de radene du treffer. F1 vurderer hvert kryss for seg, men uten radstruktur med delpoeng. F3 straffer feil kobling direkte. Alternativ 4 er feil: delvis uttelling er tvert imot vanlig i faget.",
    },
    {
      question: "Hvor mange temaer i IN1020 har egen oppgave i alle seks årgangene i arkivet?",
      options: ["Elleve temaer, fordelt på alle fire seksjonene", "Tre temaer, alle i seksjonen om digital representasjon", "Sju temaer, alle i seksjonene om sikkerhet og nettverk", "Ett tema — tallsystem-konvertering — mens resten varierer"],
      explanation: "Elleve temaer står på 6/6, og de er spredt over alle fire seksjonene. Det er nettopp derfor faget ikke har én kjerneoppgave, men fire kjerneseksjoner. Alternativ 2 og 3 undervurderer bredden, og alternativ 4 er feil: også porter, mål mot tiltak, kryptering og subnetting står på 100 %.",
    },
    {
      question: "Hvilke emner er eksplisitt merket som ikke del av pensum i settet fra 2022?",
      options: ["Karnaugh-diagram, multiplekser og dekoder", "To-er komplement, byte-addisjon og overflyt", "Cache-beregning, pipeline og abstraksjonsnivåer", "Subnetting, kringkastingsadresser og nettmasker"],
      explanation: "De tre står i ruten «ikke del av pensum» i en dra-og-slipp-oppgave i 2022-settet, etter å ha hatt egne oppgaver i 2017 og 2018. De øvrige alternativene er tvert imot kjernestoff: to-er komplement og subnetting står begge på 6/6 årganger, og cache er et voksende tema.",
    },
    {
      question: "Hvorfor er eksamenssettet fra 2020 ikke representativt for dagens form?",
      options: ["Det var korona-hjemmeeksamen på to timer, brukt som prøveeksamen i Inspera", "Det var det første settet som brukte flervalg i stedet for fritekst", "Det manglet seksjonen om datasikkerhet, som kom inn igjen senere", "Det ble vurdert med bokstavkarakter i stedet for bestått og ikke bestått"],
      explanation: "Formen var kortere og løsere fordi eksamen ble avviklet hjemme under pandemien. Alternativ 2 er feil: flervalg har vært formen i hele arkivperioden. Alternativ 3 er feil: alle fire seksjonene er dekket også i 2020. Alternativ 4 snur det: 2020-settet var nettopp bestått og ikke bestått, slik dagens form også er.",
    },
    {
      question: "Hva sier kildene om hjelpemidler på IN1020-eksamen?",
      options: ["Arkivsettene oppgir alle trykte hjelpemidler og enkel kalkulator, mens emnebeskrivelsen oppgir ingen", "Både arkivsettene og den gjeldende emnebeskrivelsen oppgir at ingen hjelpemidler er tillatt på eksamen", "Både arkivsettene og gjeldende emnebeskrivelse tillater alle trykte og skrevne hjelpemidler", "Arkivsettene oppgir ingen hjelpemidler, mens gjeldende emnebeskrivelse tillater kalkulator"],
      explanation: "Kildene spriker, og det er trolig en formendring. Derfor bygger boka for det strengeste alternativet og ber deg sjekke emnesiden for ditt semester. Alternativ 2 og 3 fjerner avviket som faktisk finnes, og alternativ 4 snur retningen på det.",
    },
    {
      question: "Hva er den viktigste konsekvensen av negativ poenggiving for hvordan du bør lese denne boka?",
      options: ["Du må kunne begrunne hvorfor de gale alternativene er gale, ikke bare gjenkjenne det riktige", "Du må lære deg å svare raskere, siden tidsbruken straffes hardere enn feil", "Du bør lese bare de temaene som står på 100 prosent belegg, og hoppe over resten av boka", "Du bør la alle usikre oppgaver stå åpne, siden ethvert galt kryss senker totalsummen"],
      explanation: "Fordi feil kryss koster, er det å vite hva som er galt halve ferdigheten — derfor begrunner hvert løsningsforslag i boka alle alternativene. Alternativ 2 er feil: tid straffes ikke direkte. Alternativ 3 kolliderer med seksjonskravet. Alternativ 4 overdriver: gulvet på 0 gjør at et enkelt feilkryss ikke kan trekke ned andre oppgaver.",
    },
    {
      question: "En kandidat får full pott i tre seksjoner og null poeng i den fjerde. Hva blir utfallet?",
      options: ["Ikke bestått, fordi hver av de fire seksjonene må bestås for seg", "Bestått, fordi 75 av 100 poeng er godt over grensen på 44 poeng", "Bestått, fordi de tre beste seksjonene teller og den svakeste strykes", "Utfallet avgjøres av sensor i hvert enkelt tilfelle, uten en fast regel"],
      explanation: "Seksjonskravet gjør at en tom seksjon velter hele eksamen, uansett totalsum. Alternativ 2 blander inn den historiske poenggrensen fra 2019, som gjaldt før seksjonskravet ble innført. Alternativ 3 beskriver en strykeregel faget ikke har. Alternativ 4 er feil: regelen er uttrykt eksplisitt i settet.",
    },
    {
      question: "Hva måler frekvenstallet «4 av 6 årganger» i denne boka?",
      options: ["At temaet har minst én egen oppgave i fire av de seks årgangene i arkivet", "At temaet utgjør fire sjettedeler av poengene i den seksjonen det hører til", "At fire av seks kandidater svarer riktig på oppgaver innen temaet", "At temaet har vært pensum i fire av de seks siste studieårene"],
      explanation: "Tallet teller årganger med minst én egen oppgave, og måler dermed hvor sikkert temaet er, ikke hvor tungt det veier. Alternativ 2 forveksler frekvens med poengvekt. Alternativ 3 beskriver en løsningsprosent boka ikke har tall for. Alternativ 4 forveksler frekvens med pensumstatus.",
    },
    {
      question: "Hvilken av disse er en sikkerhetsrelatert felle som registeret merker som #1?",
      options: ["Å blande sikkerhetsmål med sikkerhetstiltak", "Å glemme omregningen fra byte til bit i overføringstid", "Å overse selvmodifiserende assemblerkode under sporing", "Å glemme de to reserverte adressene i vertstellingen"],
      explanation: "Felle #1 er skillet mellom mål og tiltak — brannmur og kryptering er tiltak, mens konfidensialitet er et mål. De tre andre er også ekte feller i registeret, men de har numrene #2, #7 og #3, og hører hjemme i henholdsvis nettverks- og assemblerdelen.",
    },
    {
      question: "Hvor lang tid tar hele denne boka å lese, og hva er anslaget basert på?",
      options: ["Omtrent 46 timer, summert fra tidsanslaget på hvert kapittel og prøvekapittel", "Omtrent 46 timer, målt som gjennomsnittlig tidsbruk blant tidligere studenter", "Omtrent 20 timer, tilsvarende de fire timene eksamen varer ganget med fem", "Omtrent 80 timer, som er den normerte arbeidsmengden for et emne på 10 studiepoeng"],
      explanation: "Summen er 2 755 minutter, altså 2 290 minutter på kapitlene og 465 på prøvekapitlene. Alternativ 2 oppgir riktig tall, men feil grunnlag — boka har ingen målinger av studenters tidsbruk. Alternativ 3 og 4 bygger på regnestykker som ikke har noe med kapitlenes anslag å gjøre.",
    },
    {
      question: "Hva gjelder for de obligatoriske øvingene i IN1020?",
      options: ["De må være godkjent samme semester som du tar eksamen, og teller ikke på karakteren", "De må være godkjent samme semester, og utgjør 25 prosent av den endelige karakteren", "De kan godkjennes ett semester og brukes ved eksamen et senere semester", "De er frivillige øvingsoppgaver som bare gir tilgang til gruppeundervisningen"],
      explanation: "Godkjenningen er et adgangskrav som ikke følger med til neste semester, og hele karakteren avgjøres på den avsluttende eksamen. Alternativ 2 gir øvingene en vekt de ikke har. Alternativ 3 er nettopp det som ikke gjelder. Alternativ 4 gjør et obligatorisk krav frivillig.",
    },
    {
      question: "Du er i tvil mellom to alternativer på en F1-oppgave og har allerede krysset av det du kan begrunne. Hva er den robuste regelen?",
      options: ["La det usikre stå åpent, siden trekkets størrelse varierer fra oppgave til oppgave", "Kryss av begge, siden gulvet på 0 gjør at det aldri kan koste deg noe", "Kryss av det lengste alternativet, siden fasiten som regel er mest utfyllende", "Hopp over hele oppgaven, siden delvis besvarte oppgaver ikke gir uttelling"],
      explanation: "Fordi minustrekket noen ganger er halvparten av plussverdien og noen ganger like stort, kan du ikke regne ut om gjettingen lønner seg mens du sitter der — derfor er «begrunn eller la stå» den robuste regelen. Alternativ 2 overser at gulvet gjelder per oppgave, ikke per kryss. Alternativ 3 er en gjettestrategi uten dekning. Alternativ 4 kaster bort krysset du faktisk kunne begrunne.",
    },
  ],
  'in1020-1-1': [
    {
      question: "Hvor mange bit tilsvarer ett oktalt siffer?",
      options: ["Tre bit, fordi åtte er to opphøyd i tre", "Fire bit, fordi åtte er halvparten av seksten", "Åtte bit, fordi oktalsystemet har base åtte", "To bit, fordi hvert siffer bare trenger to tilstander"],
      explanation: "Ett oktalsiffer har åtte mulige verdier, og tre bit gir nøyaktig åtte kombinasjoner. Fire bit hører til heksadesimal, der 16 er to opphøyd i fire. Alternativ 3 forveksler basen med antall bit. Alternativ 4 gir bare fire verdier, som er for lite.",
    },
    {
      question: "Hva er `111011₂` skrevet oktalt?",
      options: ["`73₈`, ved gruppering i treere fra høyre", "`37₈`, ved gruppering i treere fra venstre", "`3B₈`, ved gruppering i firere fra høyre", "`113₈`, ved omregning via titallssystemet"],
      explanation: "Grupper `111 011` gir sifrene 7 og 3, altså `73₈` — kontroll: 7·8 + 3 = 59, og tallet er 32+16+8+2+1 = 59. Alternativ 2 grupperer fra feil ende. Alternativ 3 bruker firegrupper, som gir heksadesimal, og B er dessuten ikke et lovlig oktalsiffer. Alternativ 4 er 75 i titallssystemet.",
    },
    {
      question: "Hva er verdien til det heksadesimale sifferet A?",
      options: ["10, fordi verdiene 0 til 9 allerede er dekket av tallsymbolene", "11, fordi A er den første bokstaven etter tallene 0 til 10", "1, fordi A står først i den alfabetiske delen av rekka", "16, fordi A markerer at basen er seksten"],
      explanation: "Bokstavene overtar der tallsymbolene slutter, så A er 10 og F er 15. Alternativ 2 er den vanligste feilen: rekka forskyves ett hakk. Alternativ 3 forveksler rekkefølge med verdi. Alternativ 4 gir en verdi som ikke kan skrives med ett siffer i base 16.",
    },
    {
      question: "Hva er `0x3F` i titallssystemet?",
      options: ["63, fordi 3·16 pluss 15 er 63", "45, fordi 3·10 pluss 15 er 45", "51, fordi 3·16 pluss 3 er 51", "319, fordi sifrene 3 og 15 skrives etter hverandre"],
      explanation: "F har verdien 15, og vekten på førsteplassen er 16, så 48 + 15 = 63. Alternativ 2 bruker vekten 10 og blander base 16 med base 10. Alternativ 3 gir F verdien 3. Alternativ 4 setter sifferverdiene sammen som tekst i stedet for å vekte dem.",
    },
    {
      question: "Hvorfor virker gruppering som konverteringsmetode mellom binær og heksadesimal?",
      options: ["Fordi seksten er to opphøyd i fire, så fire bit dekker nøyaktig ett siffer", "Fordi seksten er fire ganger fire, så fire bit dekker ett siffer", "Fordi begge systemene bruker de samme sifrene 0 til 9 i bunnen", "Fordi heksadesimale tall alltid har et antall sifre som er delelig med fire"],
      explanation: "Sammenhengen er at basen er en potens av to, slik at en fast gruppe bit svarer til ett siffer uten rest. Alternativ 2 gir riktig tall, men feil begrunnelse — det er eksponenten, ikke produktet, som avgjør. Alternativ 3 er sant, men irrelevant. Alternativ 4 er ikke sant: `0xFC` har to sifre.",
    },
    {
      question: "Fra hvilken ende skal du gruppere bit når du konverterer?",
      options: ["Fra høyre, slik at en ufullstendig gruppe havner til venstre", "Fra venstre, slik at det mest signifikante bitet kommer først", "Fra midten, slik at eventuelle ledende nuller fordeles jevnt", "Det spiller ingen rolle, siden gruppene inneholder de samme bitene uansett"],
      explanation: "Vektene bygges opp fra det minst signifikante bitet, så grupperingen må følge samme retning. Alternativ 2 gir riktig svar bare når antall bit går opp i gruppestørrelsen. Alternativ 3 beskriver ingen reell metode. Alternativ 4 er feil: `1011011₂` blir `133₈` fra høyre, men `551₈` fra venstre.",
    },
    {
      question: "Hva er `216₈` skrevet binært?",
      options: ["`10001110₂`, ved å skrive hvert siffer som tre bit", "`11010110₂`, ved å skrive hvert siffer som fire bit", "`1101100₂`, ved omregning via titallssystemet", "`100010110₂`, ved å skrive hvert siffer som fire bit med ledende null"],
      explanation: "2 blir `010`, 1 blir `001` og 6 blir `110`, som gir `010001110₂` = `10001110₂` = 142. Alternativ 2 og 4 bruker firegrupper, som hører til heksadesimal. Alternativ 3 er 108, som ikke stemmer med 142.",
    },
    {
      question: "Hvilken av disse er lik `101101₂`?",
      options: ["`0x2D`", "`0x2B`", "`0x1D`", "`0x3D`"],
      explanation: "Firegrupperingen gir `0010 1101`, altså 2 og D, som er 45. `0x2B` er 43, `0x1D` er 29 og `0x3D` er 61 — alle tre er nabotall som oppstår hvis du bytter om eller mister ett bit i nibbelen.",
    },
    {
      question: "Du skal konvertere `345₈` til heksadesimal. Hva er den raskeste veien?",
      options: ["Skriv tallet binært med tre bit per siffer, og grupper på nytt i firere", "Regn ut titallsverdien først, og del deretter gjentatte ganger på 16", "Del hvert oktalsiffer på to, siden 16 er dobbelt så stort som 8", "Slå sammen sifrene to og to, siden 16 er 8 ganget med 2"],
      explanation: "Binærtallet er broa mellom to baser som begge er potenser av to: `011 100 101` blir `1110 0101`, altså `0xE5` = 229. Alternativ 2 gir riktig svar, men er omveien via titallssystemet, som er felle #6. Alternativ 3 og 4 beskriver operasjoner som ikke er gyldige konverteringer.",
    },
    {
      question: "Hvor mange ulike verdier kan skrives med åtte bit?",
      options: ["256, fra 0 til 255", "255, fra 1 til 255", "128, fra 0 til 127", "512, fra 0 til 511"],
      explanation: "Antallet er to opphøyd i åtte, altså 256, og den største verdien er én mindre enn antallet. Alternativ 2 glemmer at null også er en verdi. Alternativ 3 svarer for sju bit, alternativ 4 for ni.",
    },
    {
      question: "Hva blir `77₁₀` skrevet oktalt?",
      options: ["`115₈`", "`107₈`", "`117₈`", "`77₈`"],
      explanation: "Binært er 77 lik `1001101`, som gruppert i treere fra høyre blir `001 001 101` = 1, 1, 5. Kontroll: 64 + 8 + 5 = 77. `107₈` er 71, `117₈` er 79, og `77₈` er 63 — det siste er fella med å tro at sifrene er de samme i alle baser.",
    },
    {
      question: "Hva er den siste resten du får når du deler et desimaltall gjentatte ganger på 2?",
      options: ["Det mest signifikante bitet, altså sifferet lengst til venstre", "Det minst signifikante bitet, altså sifferet lengst til høyre", "Fortegnsbitet, som avgjør om tallet er positivt eller negativt", "Antall bit tallet trenger for å kunne skrives binært"],
      explanation: "Restene leses nedenfra og opp, så den siste resten står lengst til venstre. Alternativ 2 beskriver den FØRSTE resten. Alternativ 3 hører til to-er komplement og har ingenting med divisjonsmetoden å gjøre. Alternativ 4 forveksler antall divisjoner med sifferverdi.",
    },
    {
      question: "I et tallsystem med base 6 og symbolene 0, 1, 2, A, B, C der A er 3, hvilken verdi har `AB₆`?",
      options: ["22, fordi 3·6 pluss 4 er 22", "34, fordi symbolene A og B leses som tallene 3 og 4 etter hverandre", "18, fordi 3·6 pluss 0 er 18", "11, fordi A og B er de tredje og fjerde symbolene i rekka"],
      explanation: "Vektene i base 6 er 1 og 6, og B har verdien 4, så 18 + 4 = 22. Alternativ 2 setter symbolene sammen som tekst uten å vekte dem. Alternativ 3 gir B verdien 0. Alternativ 4 legger sammen posisjonsnumrene i stedet for verdiene.",
    },
    {
      question: "Hvilket av disse tallene er skrevet feil?",
      options: ["`189₈`, fordi 8 og 9 ikke er lovlige oktale sifre", "`0xFE`, fordi F og E ikke kan stå ved siden av hverandre", "`1021₂`, fordi binære tall må ha et partall antall sifre", "`45₁₀`, fordi 45 også kan skrives i andre baser"],
      explanation: "I base 8 er 7 det største lovlige sifferet, så både 8-tallet og 9-tallet er ugyldige. `0xFE` er et helt vanlig byte-tall, 254. `1021₂` er riktignok ugyldig, men fordi 2-tallet ikke finnes i base 2 — ikke fordi antallet sifre er odde. `45₁₀` er gyldig.",
    },
    {
      question: "Hva er `11001₂` skrevet heksadesimalt?",
      options: ["`0x19`", "`0x31`", "`0xC1`", "`0x25`"],
      explanation: "Firegrupperingen gir `0001 1001` = 1 og 9, altså `0x19` = 25. `0x31` er 49 og har de to sifrene byttet om. `0xC1` er 193 og oppstår hvis du grupperer fra venstre, altså deler bitene i `1100` og `1`. `0x25` er 37.",
    },
    {
      question: "Hvorfor skrives byte-verdier vanligvis heksadesimalt og ikke oktalt?",
      options: ["Fordi åtte bit går nøyaktig opp i to heksadesimale sifre, men ikke i et helt antall oktale", "Fordi oktale tall ikke kan representere verdier over 255", "Fordi heksadesimale tall alltid er kortere enn oktale for samme verdi", "Fordi oktalsystemet ikke brukes i datateknologi i det hele tatt"],
      explanation: "Åtte delt på fire er to, mens åtte delt på tre gir to grupper og to bit til overs. Alternativ 2 er feil: `377₈` er 255. Alternativ 3 er som regel sant, men det er ikke grunnen — grunnen er at det går opp uten rest. Alternativ 4 er feil: oktal brukes fortsatt, blant annet i rettighetskoder på Unix-systemer.",
    },
    {
      question: "Hva er `10011101₂` i titallssystemet?",
      options: ["157", "141", "189", "173"],
      explanation: "Ettallene står på vektene 128, 16, 8, 4 og 1, som gir 157. 141 mangler bidraget fra 16-vekten (`157 − 16`). 173 kommer av å telle 32 der det skulle vært 16 (`157 − 16 + 32`). 189 kommer av å ta med 32-vekten i tillegg til de riktige (`157 + 32`).",
    },
    {
      question: "En kandidat konverterer `1011011₂` til oktal ved å gruppere fra venstre og får `551₈`. Hva er galt?",
      options: ["Gruppene må telles fra høyre; riktig svar er `133₈`", "Gruppene må ha fire bit, ikke tre; riktig svar er `5B₈`", "Tallet må først regnes om til titallssystemet; riktig svar er `91₈`", "Ingenting er galt; `551₈` er riktig svar"],
      explanation: "Fra høyre blir grupperingen `001 011 011` = 1, 3, 3, altså 91 i titallssystemet — mens `551₈` er 361. Alternativ 2 blander inn heksadesimal, og B er ikke et oktalt siffer. Alternativ 3 forveksler titallsverdien 91 med et oktalt tall. Alternativ 4 overser at antall bit ikke er delelig med tre.",
    },
    {
      question: "Hva menes med ledende nuller?",
      options: ["Nuller helt til venstre som ikke endrer verdien, men gjør grupperingen entydig", "Nuller helt til høyre som gjør tallet dobbelt så stort per null", "Nuller mellom to ettall, som markerer skillet mellom to grupper", "Nuller som må fjernes før et tall kan konverteres til en annen base"],
      explanation: "`0011₂` og `11₂` har samme verdi, men den første formen fyller opp gruppa. Alternativ 2 beskriver etterfølgende nuller, som faktisk dobler verdien. Alternativ 3 gir nullene en rolle de ikke har. Alternativ 4 er motsatt av regelen — du legger gjerne til ledende nuller før du grupperer.",
    },
    {
      question: "Hvilken påstand om plassverdiregelen er riktig?",
      options: ["Den gjelder likt i alle baser: siffer ganget med basen opphøyd i posisjonen", "Den gjelder bare i titallssystemet, mens andre baser bruker gruppering", "Den gjelder bare når basen er en potens av to", "Den gjelder bare for tall uten fortegn, og må endres for negative tall"],
      explanation: "Regelen er den samme i alle plassverdisystemer — det er bare basen som byttes ut. Alternativ 2 forveksler en snarvei med selve regelen. Alternativ 3 stemmer for gruppering, ikke for plassverdi. Alternativ 4 er feil: også to-er komplement bygger på plassverdi, bare med negativ vekt på det øverste bitet.",
    },
    {
      question: "Hva er `0xB4` skrevet binært?",
      options: ["`10110100₂`", "`10110010₂`", "`11010100₂`", "`10111000₂`"],
      explanation: "B er 11, altså `1011`, og 4 er `0100`. Kontroll: 128 + 32 + 16 + 4 = 180, og 11·16 + 4 = 180. De tre andre alternativene er 178, 212 og 184 — hver av dem oppstår ved å bytte om ett bit i en av nibblene.",
    },
    {
      question: "Du får fire tall i ulike baser og skal rangere dem etter størrelse. Hva gjør du først?",
      options: ["Regner alle om til samme base, vanligvis titallssystemet", "Sammenligner antall sifre, siden flere sifre betyr høyere verdi", "Sammenligner det første sifferet i hvert tall", "Sorterer dem etter basen, siden en høyere base gir en høyere verdi"],
      explanation: "Verdier kan bare sammenlignes innenfor samme base. Alternativ 2 er feil: `100₂` har flest sifre, men er bare 4. Alternativ 3 har samme problem — `9₁₀` slår `1000₂`. Alternativ 4 forveksler basen med verdien; `10₁₆` er 16, men `1000₂` er 8.",
    },
  ],
  'in1020-1-2': [
    {
      question: "Hva er `1010111₂` skrevet oktalt?",
      options: ["`127₈`", "`217₈`", "`57₈`", "`153₈`"],
      explanation: "Treergruppering fra høyre gir `001 010 111` = 1, 2, 7. Kontroll: 1·64 + 2·8 + 7 = 87, og binærtallet er 64+16+4+2+1 = 87. `217₈` er 143 og kommer av å snu sifferrekkefølgen. `57₈` er 47 og er den heksadesimale formen feilmerket. `153₈` er 107.",
    },
    {
      question: "Hva er `11100101₂` skrevet heksadesimalt?",
      options: ["`0xE5`", "`0x5E`", "`0xE9`", "`0x1C5`"],
      explanation: "Nibblene er `1110` og `0101`, altså E og 5. Kontroll: 14·16 + 5 = 229, og binærtallet er 128+64+32+4+1 = 229. `0x5E` er 94 og har nibblene byttet om. `0xE9` er 233 og bytter ett bit i siste nibbel. `0x1C5` er 453 og kommer av å gruppere fra venstre.",
    },
    {
      question: "Hva er `0x5A` skrevet oktalt?",
      options: ["`132₈`", "`232₈`", "`55₈`", "`122₈`"],
      explanation: "`0x5A` er binært `0101 1010` = `1011010₂`. Regruppert i treere: `001 011 010` = 1, 3, 2. Kontroll: 1·64 + 3·8 + 2 = 90, og 5·16 + 10 = 90. `232₈` er 154, `55₈` er 45 (halvparten, en forskyvningsdistraktor) og `122₈` er 82.",
    },
    {
      question: "Hvorfor går veien fra oktal til heksadesimal gjennom binærtallet?",
      options: ["Fordi begge basene er potenser av to, så bitrekka kan omgrupperes direkte", "Fordi binærtallet alltid er kortere enn både det oktale og det heksadesimale", "Fordi 8 og 16 ikke har noen felles faktor som kan brukes til gruppering", "Fordi oktale tall må skrives om til desimal før de kan bli heksadesimale"],
      explanation: "8 er to opphøyd i tre og 16 er to opphøyd i fire, så begge kan uttrykkes som faste bitgrupper — og da er omgruppering nok. Alternativ 2 er feil: binærformen er alltid lengst. Alternativ 3 er feil: de har nettopp faktoren 2 felles. Alternativ 4 beskriver omveien via titallssystemet, som virker, men er felle #6.",
    },
    {
      question: "Hvilke av disse er lik `60₁₀`?",
      options: ["`111100₂`", "`0x60`", "`60₈`", "`110000₂`"],
      explanation: "`111100₂` er 32+16+8+4 = 60. `0x60` er 6·16 = 96 og er en basedistraktor: sifferrekka ser identisk ut. `60₈` er 6·8 = 48. `110000₂` er 48 — samme verdi som det oktale alternativet, men skrevet binært.",
    },
    {
      question: "Du skal rangere fire tall gitt i ulike baser. Hva er første steg?",
      options: ["Regne alle om til en felles base, vanligvis titallssystemet", "Sortere dem etter hvor mange sifre de har, fra færrest til flest", "Sortere dem etter basen, siden en høyere base gir en høyere verdi", "Sammenligne det mest signifikante sifferet i hvert av tallene"],
      explanation: "Verdier kan bare sammenlignes innenfor samme base. Alternativ 2 er feil: `1111011₂` har sju sifre og er 123, mens `0x7B` har to og er det samme tallet. Alternativ 3 forveksler basen med verdien. Alternativ 4 har samme svakhet som alternativ 2 — sifferet betyr ulikt i ulike baser.",
    },
    {
      question: "Hva er `145₈` i titallssystemet?",
      options: ["101", "145", "165", "85"],
      explanation: "1·64 + 4·8 + 5 = 64 + 32 + 5 = 101. 145 er å lese tallet som om det var desimalt. 165 kommer av å bruke vekten 100 i stedet for 64. 85 kommer av å bruke vekten 10 på midtsifferet.",
    },
    {
      question: "Hvor mange bit trengs for å skrive verdien `500₁₀` binært?",
      options: ["9 bit, siden 256 er for lite og 512 holder", "8 bit, siden en byte rommer verdier opp til 500", "10 bit, siden 500 ligger nærmere 1024 enn 512", "3 bit, siden tallet har tre sifre i titallssystemet"],
      explanation: "Ni bit rommer verdiene 0 til 511, og 500 får plass. Alternativ 2 er feil: åtte bit stopper på 255. Alternativ 3 velger neste potens uten å sjekke om den forrige holder. Alternativ 4 forveksler antall desimale sifre med antall bit.",
    },
    {
      question: "En kandidat konverterer `10110011₂` og svarer `0x263`. Hva har gått galt?",
      options: ["Han grupperte i treere og fikk et oktalt tall, som han merket med `0x`", "Han grupperte i firere, men leste nibblene fra venstre mot høyre", "Han glemte en ledende null, så tallet ble forskjøvet ett hakk", "Ingenting — `0x263` er riktig svar for dette bitmønsteret"],
      explanation: "Treergrupperingen `010 110 011` gir 2, 6, 3, altså `263₈` = 179. Merket med `0x` blir samme sifferrekke 611. Riktig heksadesimal form er `0xB3`. Alternativ 2 og 3 beskriver andre feil som ville gitt andre svar, og alternativ 4 er feil siden 611 ikke er 179.",
    },
    {
      question: "Hvilken påstand om distraktorer i konverteringsoppgaver stemmer?",
      options: ["Et alternativ med akkurat de samme sifrene er ofte riktig svar forskjøvet, altså halvparten eller det dobbelte", "Et alternativ med akkurat de samme sifrene er alltid riktig svar skrevet i en annen base", "Distraktorer er som regel tilfeldige tall uten sammenheng med det riktige svaret", "Distraktorer ligger alltid langt fra riktig svar, slik at de er lette å utelukke"],
      explanation: "`0x9C` er 156 og `0x4E` er 78 — de samme bitene forskjøvet ett hakk til høyre gir nøyaktig halvparten. Alternativ 2 er for sterkt: et forskjøvet mønster er ikke det samme tallet skrevet i en annen base. Alternativ 3 og 4 stemmer ikke med hvordan settene faktisk er bygd; distraktorene ligger nettopp tett.",
    },
    {
      question: "Hva er `0x9F` skrevet binært?",
      options: ["`10011111₂`", "`10011110₂`", "`11011111₂`", "`1001111₂`"],
      explanation: "9 er `1001` og F er `1111`. Kontroll: 9·16 + 15 = 159, og binærtallet er 128+16+8+4+2+1 = 159. Alternativ 2 er 158 (siste bit endret), alternativ 3 er 223 (F lest som nibbel i feil posisjon) og alternativ 4 er 79 (ett bit mistet).",
    },
    {
      question: "Hvorfor kan du ikke bruke gruppering mellom base 5 og base 2?",
      options: ["Fordi 5 ikke er en potens av to, så ingen fast bitgruppe dekker ett siffer", "Fordi 5 er et primtall, og primtallsbaser har ingen plassverdiregel", "Fordi base 5 bruker symboler som ikke finnes i binærsystemet", "Fordi grupperingen ville krevd 2,32 bit per siffer, som må rundes opp til 3"],
      explanation: "Gruppering krever at basen er 2 opphøyd i et helt tall: to bit gir fire verdier og tre bit gir åtte, mens base 5 trenger nøyaktig fem. Alternativ 2 er feil — plassverdiregelen gjelder i alle baser. Alternativ 3 forveksler symbolvalg med basestruktur. Alternativ 4 nevner riktig tall, men avrunding er nettopp det som gjør metoden ugyldig, ikke en løsning.",
    },
    {
      question: "Hvilke av disse tallene er skrevet ugyldig?",
      options: ["`348₈`, fordi 8 ikke er et lovlig siffer i base 8", "`0xFF`, fordi to like sifre ikke kan stå etter hverandre", "`1011₂`, fordi binære tall må ha et partall antall sifre", "`99₁₀`, fordi 9 er det største sifferet og ikke kan gjentas"],
      explanation: "Det største lovlige sifferet i base $b$ er $b - 1$, så base 8 stopper på 7. `0xFF` er 255 og helt vanlig. `1011₂` er 11 og fullt gyldig. `99₁₀` er nittini. Bare det første alternativet bryter en regel.",
    },
    {
      question: "Hva er `307₈` skrevet heksadesimalt?",
      options: ["`0xC7`", "`0x137`", "`0x307`", "`0x1C7`"],
      explanation: "Binært blir det `011 000 111` = `11000111₂`, som gruppert i firere er `1100 0111` = C og 7. Kontroll: 3·64 + 0 + 7 = 199, og 12·16 + 7 = 199. `0x137` er 311, `0x307` er 775 (samme sifre, feil base) og `0x1C7` er 455.",
    },
    {
      question: "To kandidater i en sorteringsoppgave viser seg å ha nøyaktig samme verdi. Hva betyr det?",
      options: ["De er likeverdige og kan stå i hvilken som helst rekkefølge seg imellom", "Den med færrest sifre skal alltid plasseres først", "Den som er skrevet i den laveste basen skal plasseres først", "Oppgaven er feil, siden kandidatene skal ha ulike verdier"],
      explanation: "Like verdier gir likeverdige plasseringer, og det er en helt vanlig konstruksjon — ofte samme tall skrevet i to baser. Alternativ 2 og 3 innfører regler som ikke finnes. Alternativ 4 er feil: nettopp slike par brukes for å teste om kandidaten faktisk regnet om.",
    },
    {
      question: "Hva er `0x2C` i titallssystemet?",
      options: ["44", "212", "32", "56"],
      explanation: "2·16 + 12 = 32 + 12 = 44. 212 kommer av å lese C som 12 og sette sifrene sammen som tekst. 32 er bare bidraget fra det første sifferet. 56 kommer av å gi C verdien 24.",
    },
    {
      question: "Hva er den sikreste kontrollen etter en konvertering?",
      options: ["Regne svaret tilbake til utgangsbasen med plassverdiregelen", "Telle at antall sifre i svaret stemmer med antall sifre i oppgaven", "Sjekke at svaret har samme første siffer som utgangstallet", "Gjenta den samme grupperingen en gang til for å se om du får det samme"],
      explanation: "Tilbakekonvertering med en uavhengig metode fanger både grupperingsfeil og lesefeil. Alternativ 2 og 3 er ikke gyldige kontroller — antall sifre og første siffer endres normalt ved basebytte. Alternativ 4 gjentar bare den samme mulige feilen.",
    },
    {
      question: "Hvilken sifferrekke har samme verdi i base 8 og base 16?",
      options: ["`7`", "`10`", "`17`", "`21`"],
      explanation: "Ettsifrede tall har bare vekten 1, som er lik i alle baser. `10` er 8 mot 16, `17` er 15 mot 23 og `21` er 17 mot 33. Regelen er at alle sifre over vekt 1 må være null for at verdien skal være den samme.",
    },
    {
      question: "Hva er `144₁₀` skrevet oktalt?",
      options: ["`220₈`", "`144₈`", "`230₈`", "`204₈`"],
      explanation: "144 binært er `10010000`, som gruppert i treere blir `010 010 000` = 2, 2, 0. Kontroll: 2·64 + 2·8 = 144. `144₈` er 100 og er basedistraktoren. `230₈` er 152 og `204₈` er 132.",
    },
    {
      question: "I en F1-oppgave har du funnet ett alternativ som stemmer. Hva gjør du?",
      options: ["Vurderer de øvrige alternativene også, siden flere kan være riktige samtidig", "Krysser av og går videre, siden en oppgave bare har ett riktig svar", "Krysser av alle alternativene som ligner på det du fant", "Hopper over resten for å spare tid til de tyngre oppgavene"],
      explanation: "Svarform F1 betyr «velg ett eller flere», og i drillens oppgave 6 var tre av fire alternativer riktige. Alternativ 2 er nettopp misforståelsen formen tester. Alternativ 3 er gjetting, som straffes. Alternativ 4 gir deg delvis uttelling der du kunne fått full.",
    },
    {
      question: "Hva er `1110001₂` skrevet heksadesimalt?",
      options: ["`0x71`", "`0x17`", "`0xE1`", "`0x38`"],
      explanation: "Nibblene er `0111` og `0001`, altså 7 og 1. Kontroll: 7·16 + 1 = 113, og binærtallet er 64+32+16+1 = 113. `0x17` er 23 og har sifrene snudd. `0xE1` er 225 og kommer av å gruppere fra venstre. `0x38` er 56, altså halvparten.",
    },
    {
      question: "Hva dekker tre heksadesimale sifre?",
      options: ["Verdiene 0 til 4095, altså tolv bit", "Verdiene 0 til 999, altså ti bit", "Verdiene 0 til 255, altså åtte bit", "Verdiene 0 til 65535, altså seksten bit"],
      explanation: "Tre sifre gir 16 opphøyd i tre lik 4096 verdier, og hvert siffer er fire bit. Alternativ 2 blander inn titallssystemet. Alternativ 3 svarer for to sifre, alternativ 4 for fire.",
    },
    {
      question: "Hva er `31₁₀` skrevet binært?",
      options: ["`11111₂`", "`11110₂`", "`100001₂`", "`1111₂`"],
      explanation: "31 er 16+8+4+2+1, altså fem ettall — den største verdien fem bit rommer. `11110₂` er 30, `100001₂` er 33 og `1111₂` er 15. Holdepunktet er at alle bit satt gir 2 opphøyd i n, minus 1.",
    },
    {
      question: "Hvilken feil gir et svar som er nøyaktig dobbelt eller halvparten av det riktige?",
      options: ["Å forskyve grupperingen ett bit, slik at nibblene brytes på feil sted", "Å bytte om to sifre i det heksadesimale svaret", "Å lese restene i divisjonsmetoden ovenfra og ned", "Å bruke feil vekt på det mest signifikante bitet"],
      explanation: "En forskyvning på ett bit ganger eller deler verdien med to. Alternativ 2 gir et tall som ligger tett på, men ikke i et fast forhold. Alternativ 3 gir et speilvendt tall uten fast forhold. Alternativ 4 endrer verdien med differansen mellom to vekter, ikke med en faktor to.",
    },
    {
      question: "Et tallsystem har base 5 med symbolene 0, 1, 2, X, Y der X er 3 og Y er 4. Hva er `X2₅` i titallssystemet?",
      options: ["17, fordi 3·5 pluss 2 er 17", "32, fordi symbolene leses som tallene 3 og 2 etter hverandre", "15, fordi 3·5 pluss 0 er 15", "13, fordi X er det tredje symbolet og 2 legges til"],
      explanation: "Vektene i base 5 er 5 og 1, så 15 + 2 = 17. Alternativ 2 setter symbolene sammen som tekst uten vekting. Alternativ 3 gir 2-tallet verdien 0. Alternativ 4 bruker posisjonsnummer i stedet for symbolverdi.",
    },
    {
      question: "Hvorfor er det lurt å skrive ned mellomverdiene når du sorterer tall i ulike baser?",
      options: ["Fordi kandidatene ofte ligger innenfor noen få enheter av hverandre", "Fordi sensor krever at mellomregningen leveres inn sammen med svaret", "Fordi tallene endrer verdi hvis du konverterer dem flere ganger", "Fordi rekkefølgen i oppgaveteksten som regel allerede er nesten riktig"],
      explanation: "Settene er bygd slik at verdiene ligger tett — i drillens oppgave 11 skilte hele oppgaven på én enhet. Alternativ 2 er feil: eksamen er ren avkrysning, og mellomregning leveres ikke. Alternativ 3 er feil. Alternativ 4 er en antakelse uten dekning, og en dyr en.",
    },
  ],
  'in1020-1-3': [
    {
      question: "Hvilken vekt har det mest signifikante bitet i en byte tolket som to-er komplement?",
      options: ["−128, altså minus to opphøyd i sju", "+128, som ved vanlig plassverdi, men med et minustegn foran hele tallet", "−1, siden bitet bare markerer at tallet er negativt", "−255, siden det er den største verdien en byte kan ha"],
      explanation: "Bitet bærer den negative vekten −128, mens de sju øvrige beholder sine positive vekter. Alternativ 2 beskriver en annen representasjon der fortegnet er et eget merke — den gir `10101100₂` verdien −44 i stedet for −84. Alternativ 3 gjør bitet til et rent merke. Alternativ 4 blander sammen vekt og verdiområde.",
    },
    {
      question: "Hva er `10101100₂` tolket med fortegn?",
      options: ["−84", "−44", "172", "−172"],
      explanation: "Usignert er verdien 128+32+8+4 = 172, og signert er `172 − 256 = −84`. −44 kommer av å lese fortegnsbitet som et rent minustegn og de sju resterende bitene som 44. 172 er den usignerte verdien. −172 finnes ikke i området, som stopper på −128.",
    },
    {
      question: "Hvilket verdiområde har en byte tolket med fortegn?",
      options: ["−128 til 127", "−127 til 128", "−128 til 128", "−255 til 255"],
      explanation: "Området er usymmetrisk fordi null tar plassen til én positiv verdi: 128 negative, null, og 127 positive. Alternativ 2 snur asymmetrien. Alternativ 3 gir 257 verdier, som er én for mange for åtte bit. Alternativ 4 er området for ni bit med fortegnsmerke, ikke for to-er komplement.",
    },
    {
      question: "Når gir usignert og signert tolkning samme verdi?",
      options: ["Når det mest signifikante bitet er 0", "Når det minst signifikante bitet er 0", "Når byten har et partall antall ettall", "Aldri — de to tolkningene gir alltid ulike verdier"],
      explanation: "Er fortegnsbitet 0, bidrar det ikke i noen av tolkningene, og de sju øvrige vektene er like. Alternativ 2 gjelder om tallet er partall, ikke fortegnet. Alternativ 3 er uten sammenheng med fortegn. Alternativ 4 er feil: alle verdier fra 0 til 127 er like i begge tolkninger.",
    },
    {
      question: "Hvordan finner du bitmønsteret for et negativt tall i to-er komplement?",
      options: ["Inverter alle bit i den positive verdien, og legg til 1", "Inverter alle bit i den positive verdien, og la det stå", "Sett det mest signifikante bitet til 1 og la resten stå uendret", "Trekk den positive verdien fra 128"],
      explanation: "Inverteringen gir `255 − N`, og pluss én gir `256 − N`, som er nettopp mønsteret for `−N`. Alternativ 2 stopper ett for tidlig og gir ener-komplementet. Alternativ 3 er fortegnsmerke-metoden, som gir feil verdi. Alternativ 4 gir ikke et lovlig bitmønster for tall over 128.",
    },
    {
      question: "Hva er `−45` skrevet som byte?",
      options: ["`11010011₂`", "`10101101₂`", "`11010010₂`", "`10110011₂`"],
      explanation: "45 er `00101101`, invertert `11010010`, pluss 1 gir `11010011`. Kontroll: usignert 211, og `211 − 256 = −45`. `10101101₂` er fortegnsmerke-metoden. `11010010₂` er inverteringen uten pluss én, altså −46. `10110011₂` er −77.",
    },
    {
      question: "Hva er `11111111₂` tolket med fortegn?",
      options: ["−1", "−127", "−128", "255"],
      explanation: "Alle bit satt er 255 usignert, og `255 − 256 = −1`. Dette er verdt å kunne utenat. −127 er `10000001₂`, −128 er `10000000₂`, og 255 er den usignerte verdien.",
    },
    {
      question: "Hvorfor er negasjonen av −128 lik −128?",
      options: ["Fordi +128 ikke finnes i en signert byte, så verdien har ingen positiv motpart", "Fordi 128 er en toerpotens, og toerpotenser er sine egne negasjoner", "Fordi inverteringen av `10000000₂` gir samme mønster tilbake", "Fordi menten faller ut når du legger til 1, så resultatet blir uendret"],
      explanation: "Området går fra −128 til 127, så det finnes ingen plass til +128. Alternativ 2 er feil: 64 er også en toerpotens, og −64 negeres helt normalt til 64. Alternativ 3 er feil — inverteringen gir `01111111`, det er pluss-én-steget som fører tilbake. Alternativ 4 beskriver ikke det som skjer; det er ingen mente ut her.",
    },
    {
      question: "Når oppstår signert overflyt i en byte-addisjon?",
      options: ["Når menten inn i bit 7 er forskjellig fra menten ut av bit 7", "Når det er mente ut av bit 7, uansett hva menten inn er", "Når svaret har det mest signifikante bitet satt", "Når begge operandene har det mest signifikante bitet satt"],
      explanation: "Kriteriet er at de to mentene er ulike. Alternativ 2 er det USIGNERTE kriteriet, og å bruke det på et signert regnestykke er en klassisk feil — to negative tall gir normalt mente ut uten overflyt. Alternativ 3 sier bare at svaret er negativt. Alternativ 4 sier bare at begge operandene er negative.",
    },
    {
      question: "Hva er `01011010₂ + 00110111₂` i åtte bit, og hva viser resultatet?",
      options: ["`10010001₂`, som er 145 usignert og viser signert overflyt", "`10010001₂`, som er −111 signert og er et gyldig signert resultat", "`110010001₂`, som er 401 og krever ni bit", "`10010000₂`, som er 144 usignert uten overflyt"],
      explanation: "90 + 55 = 145, som får plass usignert, men ikke signert (området stopper på 127) — derfor viser bitmønsteret −111. Alternativ 2 godtar et umulig resultat: to positive operander kan ikke gi negativ sum. Alternativ 3 beholder ni bit, som ikke er lov. Alternativ 4 har en regnefeil i siste bit.",
    },
    {
      question: "To negative tall legges sammen, og det er mente ut av bit 7. Hva vet du?",
      options: ["Ingenting sikkert — er menten inn i bit 7 også 1, er resultatet gyldig", "At det er signert overflyt, siden mente ut alltid betyr overflyt", "At resultatet er positivt, siden menten fjerner fortegnsbitet", "At summen er større enn 255 og derfor ugyldig i alle tolkninger"],
      explanation: "Ved addisjon av to negative tall er mente ut helt normalt, og resultatet er riktig så lenge menten inn også er 1. Alternativ 2 bruker det usignerte kriteriet. Alternativ 3 er feil: `10010110₂ + 11101011₂` gir `10000001₂`, som fortsatt er negativt. Alternativ 4 gjelder usignert tolkning, ikke signert.",
    },
    {
      question: "Hva skjer med det niende bitet i en byte-addisjon?",
      options: ["Det faller ut og lagres ikke i resultatet", "Det lagres i det mest signifikante bitet og erstatter fortegnsbitet", "Det legges til i det minst signifikante bitet, som en rundgang", "Det gjør at resultatet automatisk utvides til seksten bit"],
      explanation: "En byte har åtte bit, og alt utover forsvinner. Alternativ 2 og 3 beskriver mekanismer som ikke finnes i vanlig byte-addisjon. Alternativ 4 er feil: ordbredden endres ikke av seg selv, det må programmet be om.",
    },
    {
      question: "Hva er `01111111₂` tolket med fortegn?",
      options: ["127, den største positive verdien en signert byte kan ha", "−1, siden alle de sju nederste bitene er satt", "128, som er den neste verdien etter 127 i rekka", "−127, siden mønsteret ligner på det for minus én"],
      explanation: "Fortegnsbitet er 0, så tolkningene faller sammen: 64+32+16+8+4+2+1 = 127. Alternativ 2 forveksler med `11111111₂`. Alternativ 3 gir en verdi utenfor det signerte området. Alternativ 4 setter feil fortegn på et mønster med fortegnsbit 0.",
    },
    {
      question: "Hva er den raskeste måten å finne den signerte verdien når fortegnsbitet er satt?",
      options: ["Regn den usignerte verdien og trekk fra 256", "Regn den usignerte verdien og trekk fra 128", "Regn den usignerte verdien og gang med minus én", "Inverter bitene og les av verdien direkte"],
      explanation: "Snarveien følger av at det øverste bitet bytter vekt fra +128 til −128, en endring på 256. Alternativ 2 trekker fra halvparten av det den skal. Alternativ 3 gir fortegnsmerke-tolkningen. Alternativ 4 gir ener-komplementet, som mangler pluss-én-steget.",
    },
    {
      question: "Hvorfor ble to-er komplement standarden for negative tall?",
      options: ["Fordi samme addisjonskrets kan brukes for positive og negative tall", "Fordi den gir plass til flere verdier enn andre representasjoner", "Fordi den er den eneste representasjonen der fortegnsbitet står først", "Fordi den gjør det mulig å representere både positiv og negativ null"],
      explanation: "Maskinen slipper å vite noe om fortegn: `11110000₂ + 00010000₂` gir riktig svar 0 uten spesialbehandling. Alternativ 2 er feil — antallet er alltid to opphøyd i bitantallet. Alternativ 3 er ikke særegent for to-er komplement. Alternativ 4 er motsatt: to-er komplement har nettopp bare ÉN null, og det regnes som en fordel.",
    },
    {
      question: "Hva er `10000000₂` tolket uten og med fortegn?",
      options: ["128 uten fortegn og −128 med fortegn", "128 uten fortegn og −0 med fortegn", "−128 uten fortegn og 128 med fortegn", "128 i begge tolkninger, siden bare ett bit er satt"],
      explanation: "Usignert er det bare vekten 128, og signert er det `128 − 256 = −128`. Alternativ 2 innfører en negativ null, som ikke finnes i to-er komplement. Alternativ 3 bytter om tolkningene. Alternativ 4 overser at fortegnsbitet er satt.",
    },
    {
      question: "Hva betyr det at et bitmønster «ikke bærer sin egen tolkning»?",
      options: ["At avtalen mellom skriver og leser avgjør om `10101100₂` er 172 eller −84", "At mønsteret må tolkes på nytt hver gang det flyttes i minnet", "At bare programmereren kan lese bitene, mens maskinen ser tall", "At alle bitmønstre har nøyaktig to mulige verdier"],
      explanation: "Tolkningen ligger i datatypen eller i oppgaveteksten, ikke i bitene. Alternativ 2 beskriver ingen reell mekanisme. Alternativ 3 snur forholdet. Alternativ 4 er for snevert: det samme mønsteret kan også være et tegn, en fargekomponent eller en instruksjon.",
    },
    {
      question: "Hva er `11001001₂` uten fortegn?",
      options: ["201", "−55", "137", "217"],
      explanation: "Vektene 128, 64, 8 og 1 er satt: 128+64+8+1 = 201. −55 er den signerte tolkningen (`201 − 256`). 137 mangler bidraget fra 64-vekten. 217 kommer av å ta med 16-vekten i tillegg.",
    },
    {
      question: "Ved fortegnsutvidelse fra åtte til seksten bit — hva fyller du de nye posisjonene med?",
      options: ["Fortegnsbitet gjentatt, slik at verdien bevares", "Nuller, slik at tallet ikke endrer bitmønster i de gamle posisjonene", "Ettall, slik at det nye tallet fortsatt fyller hele ordbredden", "Vekselvis nuller og ettall, etter samme mønster som de gamle bitene"],
      explanation: "`11010011₂` er −45 i åtte bit, og `1111111111010011₂` er fortsatt −45 i seksten. Alternativ 2 er riktig for USIGNERTE tall, men gjør −45 om til 211. Alternativ 3 ville gjort et positivt tall negativt. Alternativ 4 beskriver ingen reell regel.",
    },
    {
      question: "Hvilken påstand om overflyt er riktig?",
      options: ["Samme regnestykke kan ha overflyt i den ene tolkningen og ikke i den andre", "Overflyt oppstår alltid samtidig i begge tolkninger", "Overflyt oppstår bare når begge operandene er positive", "Overflyt kan ikke oppstå når operandene har ulikt fortegn eller når resultatet er null"],
      explanation: "`10010110₂ + 11101011₂` er gyldig signert (−106 + −21 = −127), men usignert overflyt (150 + 235 = 385). Alternativ 2 er dermed feil. Alternativ 3 utelater tilfellet med to negative. Alternativ 4 har en riktig halvdel — ulike fortegn gir aldri signert overflyt — men resultatet null er ingen garanti, og påstanden gjelder ikke usignert.",
    },
    {
      question: "Hvor mange ulike verdier kan en byte representere?",
      options: ["256, uansett om tolkningen er med eller uten fortegn", "255 uten fortegn og 256 med fortegn", "256 uten fortegn og 255 med fortegn", "128 med fortegn, siden halvparten av området er negativt"],
      explanation: "Åtte bit gir alltid to opphøyd i åtte mønstre; tolkningen flytter bare hvilke verdier de peker på. Alternativ 2 og 3 glemmer at null er en verdi i begge tolkninger. Alternativ 4 teller bare den negative halvdelen.",
    },
    {
      question: "En oppgave viser byten `11110000₂` og lister fire verdier. Hva bør du gjøre?",
      options: ["Vurdere hvert alternativ, siden både 240 og −16 kan være riktige samtidig", "Krysse av den første verdien som stemmer, og gå videre", "Krysse av bare den positive verdien, siden den alltid er hovedtolkningen", "La oppgaven stå åpen, siden mønsteret har flere lovlige tolkninger"],
      explanation: "Dette er felle #8: oppgavene lister ofte begge tolkningene, og begge skal krysses av. Alternativ 2 gir deg halve poenget. Alternativ 3 gjør det samme og bygger på en misforståelse. Alternativ 4 kaster bort poeng du kunne begrunnet.",
    },
  ],
  'in1020-1-4': [
    {
      question: "Hvilken LMC-instruksjon er den eneste som skriver til en minnecelle?",
      options: ["`STA xx`, som kopierer akkumulatoren inn i celle xx", "`LDA xx`, som kopierer celle xx inn i akkumulatoren", "`ADD xx`, som oppdaterer celle xx med summen", "`INP`, som legger det innleste tallet i den neste ledige cellen"],
      explanation: "Bare `STA` endrer minnet. `LDA` går motsatt vei og lar cellen stå urørt. `ADD` leser cellen, men skriver bare til akkumulatoren. `INP` legger tallet i akkumulatoren, ikke i en celle — det er derfor `STA` nesten alltid følger rett etter.",
    },
    {
      question: "Hva er forskjellen på `BRZ` og `BRP`?",
      options: ["`BRZ` hopper bare når akkumulatoren er nøyaktig 0, mens `BRP` også hopper på alt over", "`BRZ` hopper når akkumulatoren er 0 eller mindre, mens `BRP` hopper når den er større enn 0", "`BRZ` hopper alltid, mens `BRP` bare hopper når akkumulatoren er strengt større enn 0", "`BRZ` nullstiller akkumulatoren før hoppet, mens `BRP` lar verdien stå urørt i registeret"],
      explanation: "Skillet er eksakt likhet mot «ikke negativ», og null regnes som positiv for `BRP`. Alternativ 2 snur begge betingelsene. Alternativ 3 beskriver `BRA`. Alternativ 4 er feil: ingen av hoppene endrer akkumulatoren.",
    },
    {
      question: "Hva skriver `OTC` ut når akkumulatoren er 72?",
      options: ["Tegnet `H`", "Tallet 72", "Tegnet `7` etterfulgt av tegnet `2`", "Tallet 72 i binær form"],
      explanation: "`OTC` tolker akkumulatorverdien som ASCII-kode, og 72 er `H`. Alternativ 2 er hva `OUT` ville gjort. Alternativ 3 ville krevd to utskrifter av siffertegn med kodene 55 og 50. Alternativ 4 beskriver ingen LMC-instruksjon.",
    },
    {
      question: "Hva skjer med akkumulatoren når `OUT` utføres?",
      options: ["Ingenting — verdien blir liggende i akkumulatoren", "Den nullstilles, slik at neste instruksjon starter på null", "Den flyttes til ut-kurven, så registeret står tomt", "Den kopieres til den neste minnecellen og nullstilles"],
      explanation: "`OUT` leser bare akkumulatoren. Alternativ 2 og 3 er den vanligste misforståelsen, og den gjør at sporingen går galt straks etterpå — i eksempel 2 regner programmet videre på verdien som nettopp ble skrevet ut. Alternativ 4 blander inn `STA`.",
    },
    {
      question: "Hva legger `ADD 07` til akkumulatoren?",
      options: ["Innholdet i celle 07", "Tallet 7", "Tallet 07 tolket som en instruksjon", "Innholdet i akkumulatoren, altså en dobling"],
      explanation: "Adressen og verdien er to forskjellige ting: `ADD 07` henter det som ligger i celle 07. Alternativ 2 er den klassiske forvekslingen. Alternativ 3 gir ingen mening for en addisjon. Alternativ 4 ville krevd at cellen inneholdt samme verdi som akkumulatoren — som riktignok er dobling-trikset når du gjør `LDA 30` fulgt av `ADD 30`.",
    },
    {
      question: "Hva holder programtelleren?",
      options: ["Adressen til den neste instruksjonen", "Antallet instruksjoner utført så langt", "Verdien som sist ble lest inn med `INP`", "Adressen til cellen som sist ble endret"],
      explanation: "Programtelleren peker framover, ikke bakover. Alternativ 2 ville vært en instruksjonsteller, som LMC ikke har — og de to er ulike så snart det finnes en løkke. Alternativ 3 beskriver akkumulatoren. Alternativ 4 beskriver ingen del av maskinen.",
    },
    {
      question: "Et program kjører `INP`, `STA 90`, `INP`, `ADD 90`, `OUT` med inndataene 3 og 4. Hva skrives ut?",
      options: ["7", "3", "4", "34"],
      explanation: "Det første tallet parkeres i celle 90, det andre leses inn i akkumulatoren, og `ADD 90` gir 3 + 4 = 7. Alternativ 2 og 3 er de to inndataene hver for seg. Alternativ 4 setter sifrene sammen som tekst, noe LMC aldri gjør.",
    },
    {
      question: "Hvorfor må et program bruke `STA` mellom to `INP`-instruksjoner?",
      options: ["Fordi akkumulatoren rommer bare ett tall om gangen", "Fordi `INP` ikke kan utføres to ganger på rad i et LMC-program", "Fordi hele inn-kurven tømmes hver gang en instruksjon utføres", "Fordi `STA` er det som flytter telleren til neste tall"],
      explanation: "Akkumulatoren er maskinens eneste hånd, og `INP` skriver rett inn i den. Alternativ 2 er feil — to `INP` på rad er lovlig, du mister bare det første tallet. Alternativ 3 er feil: kurven er en kø som tømmes ett tall om gangen. Alternativ 4 blander sammen `STA` og programtelleren.",
    },
    {
      question: "Hva er maskinkoden for `LDA 08`?",
      options: ["508", "308", "108", "805"],
      explanation: "`LDA` har opkoden 5, og adressen er 08. `308` er `STA 08`, `108` er `ADD 08` og `805` er `BRP 05`. Forvekslingen mellom 5xx og 3xx er den vanligste, fordi `LDA` og `STA` gjør motsatt ting av hverandre.",
    },
    {
      question: "Et program teller ned med 2 fra inndata 5 og bruker `BRZ` for å stoppe på null. Hva skjer?",
      options: ["Programmet stopper aldri, fordi 5, 3, 1, −1 hopper over null", "Programmet stopper etter tre runder, når verdien passerer null", "Programmet stopper med en gang, siden 5 ikke er null", "Programmet stopper etter fem runder, altså én runde for hver enhet i inndataen"],
      explanation: "`BRZ` tester på eksakt likhet, og en nedtelling med to fra et oddetall hopper over null. Alternativ 2 forutsetter en «har passert»-test, som er `BRP`-oppførsel, ikke `BRZ`. Alternativ 3 forveksler betingelsen med det motsatte. Alternativ 4 antar at steget er 1.",
    },
    {
      question: "Hva gjør `DAT 20` i et LMC-program?",
      options: ["Reserverer cellen og gir den startverdien 20", "Hopper til celle 20 når programmet starter", "Legger tallet 20 i akkumulatoren", "Setter av 20 celler til data nederst i programmet"],
      explanation: "`DAT` er en beskjed til assembleren, ikke en instruksjon maskinen utfører. Alternativ 2 beskriver `BRA 20`. Alternativ 3 ville krevd `LDA` fra en celle som inneholder 20. Alternativ 4 gjør tallet om til et antall i stedet for en verdi.",
    },
    {
      question: "Hva skiller `LDA 20` fra `STA 20`?",
      options: ["`LDA` henter fra cellen til akkumulatoren, `STA` går motsatt vei", "`LDA` henter fra akkumulatoren inn i cellen, `STA` motsatt", "`LDA` kopierer verdien, mens `STA` flytter den og tømmer akkumulatoren", "`LDA` virker bare på datalceller, mens `STA` virker på alle celler"],
      explanation: "Huskeregelen er «L som i last inn, S som i store, altså lagre ut». Alternativ 2 snur retningen. Alternativ 3 er feil: `STA` lar akkumulatoren stå urørt. Alternativ 4 er feil — begge virker på enhver celle, og det er nettopp derfor selvmodifiserende kode er mulig.",
    },
    {
      question: "Hvilken instruksjon endrer verken akkumulator eller minne, men alltid programtelleren?",
      options: ["`BRA xx`", "`STA xx`", "`ADD xx`", "`OUT`"],
      explanation: "`BRA` setter programtelleren til hoppadressen og rører ingenting annet. `STA` endrer minnet. `ADD` endrer akkumulatoren. `OUT` endrer ingen av delene, men den endrer heller ikke programtelleren utover den vanlige økningen med 1.",
    },
    {
      question: "Hvordan sammenligner et LMC-program to tall?",
      options: ["Ved å trekke det ene fra det andre og teste differansen med et hopp", "Ved å bruke en egen sammenligningsinstruksjon som setter et flagg", "Ved å legge dem sammen og se om summen er større enn hver av dem", "Ved å lagre begge i samme celle og se hvilken som overlever"],
      explanation: "Mønsteret `LDA`, `SUB`, `BRP` er standardformen for et valg i assembler. Alternativ 2 beskriver ekte prosessorer, men LMC har ingen slik instruksjon. Alternativ 3 gir ingen informasjon om hvilket tall som er størst. Alternativ 4 beskriver ingen mekanisme.",
    },
    {
      question: "Et program kjører `LDA 20`, `OTC`, `ADD 21`, `OTC` der celle 20 er 65 og celle 21 er 1. Hva skrives ut?",
      options: ["`AB`", "`65 66`", "`AA`", "`BA`"],
      explanation: "65 er `A`, og etter `ADD 21` er akkumulatoren 66, som er `B`. Alternativ 2 er hva `OUT` ville gitt. Alternativ 3 overser at `ADD` endret akkumulatoren mellom de to utskriftene. Alternativ 4 snur rekkefølgen.",
    },
    {
      question: "Hvor mange rader skal en sporetabell ha?",
      options: ["Én rad per utført instruksjon", "Én rad per linje i programmet", "Én rad per gjennomløp av løkka", "Én rad per gang akkumulatoren endres"],
      explanation: "Går programmet åtte runder i en løkke på fire linjer, blir det 32 rader. Alternativ 2 er den vanligste feilen: da ser en løkke ut som om den kjører én gang. Alternativ 3 skjuler hva som skjer inni runden. Alternativ 4 utelater hopp og utskrifter, som er nettopp det du må følge.",
    },
    {
      question: "Hva skjer hvis programtelleren når en celle som inneholder `DAT 20`?",
      options: ["Tallet 20 blir utført som en instruksjon", "Programmet stopper, fordi datalceller ikke kan utføres", "Programtelleren hopper over cellen og går til neste", "Verdien 20 legges automatisk i akkumulatoren"],
      explanation: "LMC har ingen markering av hva som er data: `020` ville blitt utført som en ADD-instruksjon mot celle 20. Alternativ 2 og 3 forutsetter et skille maskinen ikke har. Alternativ 4 beskriver `LDA`. Det er nettopp denne mangelen på skille som gjør selvmodifiserende kode mulig.",
    },
    {
      question: "Et program med en løkke skriver ut 3, 2, 1 og 0 for inndata 3. Hvilken hoppinstruksjon avslutter løkka?",
      options: ["`BRP`, som hopper også på nøyaktig 0", "`BRZ`, som stopper i det verdien treffer 0", "`BRA`, som hopper tilbake til løkka gikk tom", "`HLT`, som testes på nytt hver runde"],
      explanation: "At null blir skrevet ut, viser at løkka gikk en runde til på verdien 0 — og det gjør bare `BRP`. Med `BRZ` ville løkka stoppet før utskriften av 0. `BRA` hopper uten betingelse og kan aldri avslutte noe. `HLT` er ingen test.",
    },
    {
      question: "Hva er den viktigste grunnen til å skrive ned betingelsen ved hvert betinget hopp i sporetabellen?",
      options: ["Fordi et hopp som ikke utføres, ellers ikke kan skilles fra ett som utføres", "Fordi betingelsen endrer akkumulatoren og må dokumenteres", "Fordi sensor krever at hele mellomregningen leveres inn sammen med svaret", "Fordi programtelleren ellers ikke kan økes med 1 etter instruksjonen"],
      explanation: "Notatet «akk = 2, ikke 0, hopper ikke» hindrer at du mister eller legger til en runde. Alternativ 2 er feil: betingelsen leser bare akkumulatoren. Alternativ 3 er feil — eksamen er ren avkrysning, sporetabellen er ditt eget verktøy. Alternativ 4 beskriver ingen sammenheng.",
    },
    {
      question: "Et program dobler en verdi før hver utskrift, med start på inndata 1. Hva blir den første utskriften?",
      options: ["2, siden doblingen skjer før utskriften", "1, siden inndataverdien alltid skrives ut først", "0, siden akkumulatoren starter på null", "4, siden doblingen skjer to ganger først"],
      explanation: "Rekkefølgen i programmet avgjør: står `ADD` før `OUT`, ser du aldri utgangsverdien. Alternativ 2 er den vanligste antakelsen og er feil. Alternativ 3 overser at `INP` og doblingen har skjedd. Alternativ 4 legger inn en ekstra runde.",
    },
    {
      question: "Hvilken påstand om akkumulatoren stemmer?",
      options: ["Den holder ett tall, og `LDA` eller `INP` overskriver verdien", "Den holder de tre siste tallene, så gamle verdier kan hentes", "Den nullstilles automatisk etter hver instruksjon som skriver til ut-kurven", "Den kan bare holde positive tall, siden LMC ikke har fortegn"],
      explanation: "Akkumulatoren er maskinens eneste hånd. Alternativ 2 beskriver en stakk, som LMC ikke har. Alternativ 3 er misforståelsen om `OUT`. Alternativ 4 er feil i denne boka: etter en `SUB` kan verdien være negativ, og det er nettopp det `BRP` tester på.",
    },
    {
      question: "Hva er den mest robuste framgangsmåten når du møter et LMC-program med en løkke på eksamen?",
      options: ["Føre sporetabell til runden har gjentatt seg identisk to ganger", "Lese programmet nøye og resonnere deg fram til hva det sikkert gjør", "Kjøre programmet i hodet én runde og gange opp antall runder", "Se på datacellene og anta at utskriften blir lik startverdien du finner der"],
      explanation: "Sporing er mekanisk og gir riktig svar; gjetting treffer omtrent halvparten av gangene, som under negativ poenggiving er verre enn å la stå. Alternativ 3 bommer så snart verdiene endrer seg mellom rundene. Alternativ 4 er ren gjetting.",
    },
  ],
  'in1020-1-5': [
    {
      question: "Hvilken instruksjon tilsvarer maskinkoden `508`?",
      options: ["`LDA 08`", "`STA 08`", "`ADD 08`", "`BRP 08`"],
      explanation: "Opkode 5 er `LDA`, og 08 er adressen. `STA 08` ville vært `308`, `ADD 08` ville vært `108`, og `BRP 08` ville vært `808`. Forvekslingen mellom 5 og 3 er den vanligste, siden de to gjør motsatt ting av hverandre.",
    },
    {
      question: "Hva er maskinkoden for `SUB 12`?",
      options: ["`212`", "`122`", "`312`", "`612`"],
      explanation: "Opkoden for `SUB` er 2, ganget med 100 og pluss adressen 12. `122` er `ADD 22`, `312` er `STA 12` og `612` er `BRA 12`. Kontroller alltid begge veier: 2 ganger 100 pluss 12 er 212.",
    },
    {
      question: "Hvordan deles en tresifret LMC-instruksjon?",
      options: ["Første siffer er opkoden, de to siste er celleadressen", "De to første sifrene er opkoden, det siste er celleadressen", "Første siffer er celleadressen, de to siste er opkoden", "Alle tre sifrene utgjør opkoden, og adressen ligger i neste celle"],
      explanation: "`508` er opkode 5 og adresse 08. Alternativ 2 ville gitt bare ti mulige adresser, altfor få for 100 celler. Alternativ 3 snur oppdelingen. Alternativ 4 beskriver en toords-instruksjon, som LMC ikke har.",
    },
    {
      question: "Hva er kjennetegnet på selvmodifiserende kode?",
      options: ["En `STA` med adresse i kodeområdet i programmet", "En `LDA` som henter fra en celle med lavt nummer", "En `DAT`-celle som ligger mellom to instruksjoner i minnet", "Et `BRA` som hopper bakover til en tidligere celle"],
      explanation: "Bare `STA` skriver til minnet, så en `STA` mot kodeområdet er den eneste måten kode kan endres på. Alternativ 2 leser bare. Alternativ 3 er vanlig i selvmodifiserende programmer, men er ikke i seg selv en modifikasjon. Alternativ 4 beskriver en helt vanlig løkke.",
    },
    {
      question: "Hva blir `130` når 2 legges til, tolket som instruksjon?",
      options: ["`ADD 32`", "`ADD 30`", "`SUB 30`", "`ADD 132`"],
      explanation: "`132` har fortsatt opkode 1, men adressen er flyttet fra 30 til 32. Alternativ 2 overser at adressen endret seg. Alternativ 3 ville krevd at 100 ble lagt til, ikke 2. Alternativ 4 behandler hele tallet som adresse, som ikke er mulig med to adressesifre.",
    },
    {
      question: "Hvorfor kan et LMC-program endre sine egne instruksjoner?",
      options: ["Fordi kode og data ligger i samme minne, i samme format", "Fordi `STA` har en egen modus for å skrive til kodeceller", "Fordi programtelleren kan settes til å peke på dataområdet", "Fordi instruksjonen lagres i akkumulatoren mens den utføres"],
      explanation: "Dette er von Neumann-prinsippet: `508` er både et tall og en instruksjon. Alternativ 2 er feil — `STA` har bare én modus og bryr seg ikke om hva cellen brukes til. Alternativ 3 er sant, men er en annen konsekvens av det samme. Alternativ 4 beskriver ingen mekanisme i LMC.",
    },
    {
      question: "Hva må du gjøre i sporetabellen når et program skriver til en kodecelle?",
      options: ["Gi cellen egen kolonne og dekode den nye verdien før du sporer videre", "Starte sporingen på nytt fra celle 00 med den nye verdien på plass", "Notere verdien i en fotnote under sporetabellen", "Ignorere endringen fram til programmet er ferdig med løkka"],
      explanation: "Cellen er nå en variabel i sporingen, og den nye verdien avgjør hva som utføres. Alternativ 2 er unødvendig og feil — tidligere steg påvirkes ikke. Alternativ 3 og 4 er nettopp felle #7: å overse modifikasjonen, som gjør alt etterpå feil.",
    },
    {
      question: "Et program har en `DAT`-celle med verdien `600`. Hva er den ment som?",
      options: ["En hoppmal — `BRA 00` — som skal modifiseres", "En markering av at programmet slutter, tilsvarende `HLT`", "En teller som starter på 600 og telles ned mot null", "En adresse som peker på celle 600 i et utvidet minne"],
      explanation: "`600` dekodes som `BRA 00`, og ved å legge til en verdi flyttes hoppmålet. Alternativ 2 er feil: `HLT` er `000`. Alternativ 3 er mulig i prinsippet, men en `DAT`-verdi som ser ut som en gyldig instruksjon, er sjelden tilfeldig. Alternativ 4 er feil — LMC har bare cellene 00 til 99.",
    },
    {
      question: "Hvilke inndata gir utskriften 7 fra et program som regner ut absoluttverdien?",
      options: ["Både 7 og −7", "Bare 7", "Bare −7", "7, −7 og 0"],
      explanation: "Absoluttverdien mister fortegnet, så to inndata gir samme utskrift. Alternativ 2 og 3 oppgir bare den ene grenen, som er den klassiske halve besvarelsen. Alternativ 4 tar med 0, som gir utskriften 0, ikke 7.",
    },
    {
      question: "Hvorfor har baklengs sporing ofte mer enn ett riktig svar?",
      options: ["Fordi programmet mister informasjon underveis, så flere inndata gir samme svar", "Fordi utskriften alltid kan nås fra begge grenene i et program med `BRP`", "Fordi LMC ikke kan skille mellom positive og negative tall i akkumulatoren", "Fordi en `OUT` skriver ut både akkumulatoren og den sist brukte cellen"],
      explanation: "Et program som glemmer fortegnet eller bare tester «minst 10», kan ikke skjelne mellom flere inndata. Alternativ 2 er for sterkt: grenene ender ofte i ulike utskrifter. Alternativ 3 er feil. Alternativ 4 beskriver ingen reell instruksjon.",
    },
    {
      question: "Hva er `604` som instruksjon?",
      options: ["`BRA 04`", "`BRP 04`", "`BRZ 04`", "`STA 04`"],
      explanation: "Opkode 6 er det ubetingede hoppet `BRA`. `BRP 04` ville vært `804`, `BRZ 04` ville vært `704` og `STA 04` ville vært `304`. De tre hoppene ligger på opkodene 6, 7 og 8, i den rekkefølgen.",
    },
    {
      question: "Hvilken opkode er ubrukt i LMC?",
      options: ["`4xx`", "`2xx`", "`7xx`", "`8xx`"],
      explanation: "Instruksjonssettet bruker 1, 2, 3, 5, 6, 7 og 8, pluss de faste 9-kodene. `2xx` er `SUB`, `7xx` er `BRZ` og `8xx` er `BRP`. At 4 er ledig, er en av grunnene til at en tilfeldig verdi skrevet inn i kodeområdet kan gi noe som ikke er en gyldig instruksjon.",
    },
    {
      question: "Hva skiller `901` fra de andre instruksjonene?",
      options: ["Hele tallet er koden — det er ingen adresse", "Den utføres bare når akkumulatoren er null", "Den kan bare stå som første instruksjon i et program", "Den skriver til celle 01 i tillegg til akkumulatoren"],
      explanation: "`901`, `902` og `922` er faste koder uten operand. Alternativ 2 beskriver en betingelse `INP` ikke har. Alternativ 3 er feil: `INP` kan stå hvor som helst, også flere ganger. Alternativ 4 er den vanlige misforståelsen om at `INP` lagrer i minnet — det gjør den ikke.",
    },
    {
      question: "Et program har `STA 04` i celle 02, og celle 04 er en instruksjon. Rekker modifikasjonen fram?",
      options: ["Ja, fordi celle 04 utføres etter at celle 02 har skrevet til den", "Nei, fordi en kodecelle bare kan skrives før start", "Nei, fordi `STA` ikke kan skrive til celler under 10", "Bare hvis celle 03 inneholder et hopp til celle 04"],
      explanation: "Programtelleren går 02, 03, 04 — så den nye verdien står der når celle 04 skal utføres. Alternativ 2 og 3 innfører begrensninger LMC ikke har. Alternativ 4 er unødvendig: programtelleren kommer dit av seg selv.",
    },
    {
      question: "Hva skjer hvis et beregnet hopp lander midt inne i en annen rutine?",
      options: ["Ingenting spesielt — programmet fortsetter derfra som om det var meningen", "Programmet stopper med en feilmelding om ugyldig hoppadresse", "Programtelleren settes tilbake til 00 og programmet starter på nytt", "Hoppet ignoreres, og programmet fortsetter på neste celle"],
      explanation: "LMC kontrollerer ikke hoppadresser. Alternativ 2 forutsetter en feilhåndtering maskinen ikke har. Alternativ 3 og 4 beskriver mekanismer som ikke finnes. Det er nettopp derfor beregnede hopp er skjøre: en bom på én celle gir ingen advarsel.",
    },
    {
      question: "Hva gjør `LDA 21` rett før en modifisert `ADD`-instruksjon i et tabelloppslag?",
      options: ["Nullstiller akkumulatoren før tabelloppslaget", "Laster inn indeksen som skal brukes i oppslaget", "Lagrer den beregnede instruksjonen for senere bruk", "Setter akkumulatoren til startadressen for hele tabellen"],
      explanation: "Uten nullstillingen ville `ADD` lagt tabellverdien til den beregnede instruksjonsverdien, og utskriften blitt et helt annet tall. Alternativ 2 og 4 gir cellen en rolle den ikke har — celle 21 inneholder 0. Alternativ 3 beskriver `STA`.",
    },
    {
      question: "Hva blir `130` pluss 100, tolket som instruksjon?",
      options: ["`SUB 30` — tillegget rullet over i opkoden", "`ADD 130` — adressen ble tresifret", "`ADD 30` — bare adressen kan endres av en addisjon", "`STA 30` — opkoden økte med to hakk"],
      explanation: "`230` har opkode 2, som er `SUB`. Alternativ 2 er umulig: adressefeltet har bare to sifre. Alternativ 3 overser at tillegget var stort nok til å nå opkodesifferet. Alternativ 4 ville krevd at 200 ble lagt til.",
    },
    {
      question: "En oppgave viser minneinnholdet som rene tall og spør hva programmet gjør. Hva heter den jobben du gjør?",
      options: ["Disassemblering — fra maskinkode til assemblerkode", "Assemblering — fra lesbar assemblerkode til maskinkode", "Kompilering — fra høynivåspråk til maskinkode", "Sporing — fra program til utskrift for gitte inndata"],
      explanation: "Retningen er fra tall til mnemonics. Alternativ 2 er den motsatte veien. Alternativ 3 gjelder høynivåspråk, som LMC ikke har. Alternativ 4 er noe annet — det kommer etter at du har disassemblert.",
    },
    {
      question: "Hva er hensikten med `BRA 08` i et grenmønster der celle 09 er den andre grenen?",
      options: ["Å hoppe over den andre grenen, så bare én utføres", "Å hoppe tilbake til testen, slik at grenen kan gjentas", "Å avslutte programmet uten `HLT`", "Å sikre at akkumulatoren er nullstilt før neste gren"],
      explanation: "Uten dette hoppet ville den første grenen falt rett ned i den andre, og begge blitt utført. Alternativ 2 beskriver en løkke, ikke en gren. Alternativ 3 er feil: `BRA` stopper ingenting. Alternativ 4 er feil — hopp endrer aldri akkumulatoren.",
    },
    {
      question: "Et program tester med `SUB 61` der celle 61 er 10, og bruker `BRP`. Hvilken inndata ligger nøyaktig på grensen?",
      options: ["10, som gir differansen 0 og derfor hopper", "10, som gir differansen 0 og derfor ikke hopper", "11, som er den minste verdien der differansen er positiv", "9, som er den største verdien før differansen blir positiv"],
      explanation: "`BRP` hopper på null og alt over, så inndata 10 havner i den «store» grenen. Alternativ 2 forveksler `BRP` med et strengt større enn. Alternativ 3 og 4 peker på nabotallene, som ikke er grensen — de er de første verdiene på hver side av den.",
    },
  ],
  'in1020-1-6': [
    {
      question: "Hvor mange rader får sporetabellen for en løkke på fire instruksjoner som kjøres seks ganger?",
      options: ["24 rader, én per utført instruksjon", "4 rader, én per instruksjon i løkka", "6 rader, én per gjennomløp av løkka", "10 rader, altså instruksjonene pluss gjennomløpene"],
      explanation: "Sporetabellen følger utførelsen, ikke listingen. Alternativ 2 er den vanligste feilen: da ser en løkke ut som om den kjører én gang. Alternativ 3 skjuler hva som skjer inni runden. Alternativ 4 blander to ulike tellinger.",
    },
    {
      question: "Et program har `LDA 62`, `ADD 60`, `STA 62` inne i en løkke. Hva kalles mønsteret?",
      options: ["Akkumuleringsmønsteret — celle 62 bygger opp en sum", "Nedtellingsmønsteret — celle 62 telles ned mot null", "Grenmønsteret — celle 62 velger mellom to veier", "Modifiseringsmønsteret — celle 62 endrer en instruksjon"],
      explanation: "Cellen hentes, får noe lagt til, og lagres tilbake — det er en sum som vokser. Alternativ 2 ville hatt `SUB` i stedet for `ADD`. Alternativ 3 krever et betinget hopp. Alternativ 4 krever en `STA` mot kodeområdet.",
    },
    {
      question: "Hva må startverdien være i cellen som bygger opp en sum?",
      options: ["0, ellers forskyves hele svaret med startverdien", "1, slik at den første addisjonen får noe å bygge på", "Samme verdi som det første leddet i summen", "Det spiller ingen rolle, siden `STA` overskriver den"],
      explanation: "En sum må starte på null; det er et produkt som må starte på 1. Alternativ 3 ville telt det første leddet dobbelt. Alternativ 4 er feil: den første `LDA` leser startverdien før noen `STA` har skjedd.",
    },
    {
      question: "Hvilken instruksjon avslutter en gangeløkke der telleren er redusert med 1 i akkumulatoren?",
      options: ["`BRZ` til utgangen, som hopper når telleren er brukt opp", "`BRP` til utgangen, som hopper når telleren er brukt opp", "`BRA` til utgangen, som hopper når løkka er ferdig", "`HLT`, som stopper programmet når telleren er null"],
      explanation: "Løkka skal kjøre til telleren er nøyaktig 0, og det er `BRZ` som treffer der. `BRP` ville hoppet ut allerede første runde, siden telleren da er positiv. `BRA` hopper hver gang. `HLT` er ingen test og ville stoppet før summen ble skrevet ut.",
    },
    {
      question: "Hva er kjennetegnet på selvmodifiserende kode i en listing?",
      options: ["En `STA` med adresse i kodeområdet", "En `LDA` som henter fra en celle i kodeområdet", "En `DAT`-celle som inneholder verdien 0", "Et `BRA` som hopper framover i programmet"],
      explanation: "Bare `STA` skriver til minnet, så en `STA` mot en kodecelle er den eneste måten kode kan endres på. Alternativ 2 leser bare. Alternativ 3 er helt vanlig. Alternativ 4 er et vanlig grenhopp.",
    },
    {
      question: "Et program har malen `DAT 330` og gjør `ADD` med inndata 2 før `STA 05`. Hva står i celle 05 etterpå?",
      options: ["`332`, altså `STA 32`", "`330`, altså `STA 30`", "`532`, altså `LDA 32`", "`230`, altså `SUB 30`"],
      explanation: "Tillegget på 2 flytter adressen fra 30 til 32, mens opkoden 3 er uendret. Alternativ 2 overser tillegget. Alternativ 3 endrer opkoden, som ville krevd at 200 ble lagt til. Alternativ 4 trekker fra i stedet for å legge til.",
    },
    {
      question: "Hvorfor kan en baklengs sporing ha to riktige inndata?",
      options: ["Fordi to grener i programmet kan ende i samme utskrift", "Fordi `INP` leser to tall når utskriften er tvetydig", "Fordi akkumulatoren husker begge verdiene samtidig", "Fordi `OUT` alltid skriver ut både verdien og dens motsatte"],
      explanation: "Et program som regner ut en absoluttverdi eller dobler under en terskel, kan nå samme utskrift fra begge sider. Alternativ 2, 3 og 4 beskriver mekanismer LMC ikke har.",
    },
    {
      question: "Et program tester med `SUB 41` der celle 41 er 5, og bruker `BRP`. Hvor ligger grensen?",
      options: ["Ved inndata 5, som gir differansen 0 og derfor hopper", "Ved inndata 5, som gir differansen 0 og derfor ikke hopper", "Ved inndata 6, som er den første som gir positiv differanse", "Ved inndata 4, som er den siste som gir negativ differanse"],
      explanation: "`BRP` hopper på null og alt over, så inndata 5 havner i den positive grenen. Alternativ 2 forveksler `BRP` med et strengt større enn. Alternativ 3 og 4 peker på nabotallene, ikke på selve grensen.",
    },
    {
      question: "Hva gjør `OTC` når akkumulatoren er 75?",
      options: ["Skriver ut tegnet `K`", "Skriver ut tallet 75", "Skriver ut tegnet `7` og deretter `5`", "Skriver ut 75 som binærtall"],
      explanation: "`OTC` tolker verdien som ASCII-kode, og 75 er `K`. Alternativ 2 er hva `OUT` ville gjort. Alternativ 3 ville krevd to utskrifter av siffertegn. Alternativ 4 beskriver ingen LMC-instruksjon.",
    },
    {
      question: "Hvor mange ganger kjøres løkka når telleren starter på 6, telles ned med 2, og hoppet er `BRP`?",
      options: ["Fire ganger, med telleren på 6, 4, 2 og 0", "Tre ganger, med telleren på 6, 4 og 2", "Fem ganger, siden også −2 hopper tilbake", "Seks ganger, én for hver enhet i startverdien"],
      explanation: "`BRP` hopper også når telleren er nøyaktig 0, så runden med 0 kjøres. Alternativ 2 glemmer nullrunden — den vanligste bommen. Alternativ 3 lar en negativ verdi hoppe, som `BRP` ikke gjør. Alternativ 4 antar steget 1.",
    },
    {
      question: "Hva bør du gjøre etter å ha valgt en instruksjon i en fyll-inn-oppgave?",
      options: ["Spore ferdig med den på plass, og teste med flere inndata", "Sjekke at instruksjonen er av samme type som de rundt den", "Kontrollere at maskinkoden har tre siffer", "Se om noen av de andre alternativene også kunne passet"],
      explanation: "En instruksjon som gir riktig svar for ett tall, kan bomme for et annet — særlig på grenseverdien. Alternativ 2 er ingen gyldig test. Alternativ 3 er trivielt oppfylt. Alternativ 4 er nyttig, men erstatter ikke sporingen.",
    },
    {
      question: "Programmet `INP`, `STA 90`, `INP`, `ADD 90`, `STA 90`, `INP`, `ADD 90`, `OUT` får inndataene 2, 3 og 4. Hva skrives ut?",
      options: ["9", "6", "4", "24"],
      explanation: "Programmet summerer alle tre: 2 + 3 + 4 = 9. 6 er summen av de to første. 4 er bare det siste tallet, altså hva som ville skjedd uten akkumuleringen. 24 er produktet, som programmet ikke regner ut.",
    },
    {
      question: "Hva skjer med instruksjonene som står etter et grenmønster, i den felles fortsettelsen?",
      options: ["De utføres uansett hvilken gren programmet tok", "De utføres bare hvis det betingede hoppet ble tatt", "De utføres bare hvis det betingede hoppet ikke ble tatt", "De hoppes over med mindre et eget `BRA` sender programmet dit"],
      explanation: "Begge grener ender i den felles fortsettelsen — det er nettopp derfor `BRA` trengs i den ene grenen. Alternativ 2 og 3 forveksler grenen med fortsettelsen. Alternativ 4 snur logikken: det er `BRA` som hopper OVER den andre grenen, ikke inn i fortsettelsen.",
    },
    {
      question: "Dekod `281`. Hvilken instruksjon er det?",
      options: ["`SUB 81`", "`ADD 81`", "`STA 81`", "`BRZ 81`"],
      explanation: "Opkode 2 er `SUB`, adressen er 81. `ADD 81` ville vært `181`, `STA 81` vært `381` og `BRZ 81` vært `781`. Kontroller ved å kode tilbake: 2 ganger 100 pluss 81 er 281.",
    },
    {
      question: "Et selvmodifiserende program skriver til celle 32, som ikke er nevnt i listingen. Hva skjer?",
      options: ["Verdien lagres — alle 100 celler finnes, med startverdi 0", "Programmet stopper med feilmelding om ukjent celle", "Skrivingen ignoreres, siden cellen ikke er erklært", "Verdien havner i den nærmeste erklærte cellen i stedet"],
      explanation: "LMC har ingen erklæring av celler; `DAT` setter bare en startverdi. Alternativ 2 forutsetter feilhåndtering maskinen ikke har. Alternativ 3 og 4 beskriver mekanismer som ikke finnes. Det er derfor selvmodifiserende kode er vanskelig å feilsøke.",
    },
    {
      question: "Hva er første steg i en baklengs sporing?",
      options: ["Beskrive i ord hva programmet gjør som helhet", "Reversere hver instruksjon fra `HLT` og oppover", "Prøve alle inndata fra 0 og oppover til svaret treffer", "Regne ut hva akkumulatoren må være rett før `OUT`"],
      explanation: "«Programmet regner ut absoluttverdien pluss 3» er ofte hele nøkkelen. Alternativ 2 virker sjelden, fordi hopp og betingelser ikke lar seg reversere entydig. Alternativ 3 tar for lang tid på eksamen. Alternativ 4 er nyttig i enkle tilfeller, men gir ikke svaret når programmet har to grener.",
    },
    {
      question: "Hvilke tre inndata bør du teste et LMC-svar med?",
      options: ["Én under grensen, én på grensen og én over", "Tre tilfeldige tall mellom 1 og 100", "Bare det tallet oppgaven oppgir, siden svaret gjelder det", "Null, ett og to, siden små tall er lettest å spore"],
      explanation: "Grenseverdien er der de fleste feilene sitter, og de tre dekker begge grener pluss vippepunktet. Alternativ 2 kan lett bomme på grensen. Alternativ 3 er nettopp det som gjør at en fyll-inn-feil ikke oppdages. Alternativ 4 tester ikke den store grenen.",
    },
    {
      question: "Programmet `LDA 30`, `OTC`, `LDA 31`, `OTC`, `LDA 32`, `OTC` har cellene 79, 75 og 33. Hva skrives ut?",
      options: ["`OK!`", "`79 75 33`", "`OK`", "`KO!`"],
      explanation: "ASCII-kodene 79, 75 og 33 er `O`, `K` og utropstegn. Alternativ 2 er hva `OUT` ville gitt. Alternativ 3 mangler den tredje utskriften. Alternativ 4 snur rekkefølgen på de to første.",
    },
    {
      question: "En `STA 05` står i celle 02, og celle 05 er en instruksjon. Rekker endringen fram?",
      options: ["Ja, siden programtelleren når celle 05 etter celle 02", "Nei, siden programtelleren allerede har passert celle 05", "Bare hvis celle 03 og 04 er hopp", "Bare hvis celle 05 opprinnelig inneholder `DAT 0`"],
      explanation: "Programtelleren går 02, 03, 04, 05 — modifikasjonen skjer tre instruksjoner før cellen utføres. Alternativ 2 snur rekkefølgen. Alternativ 3 er unødvendig. Alternativ 4 er irrelevant: `STA` overskriver uansett hva som lå der.",
    },
    {
      question: "Hva er den vanligste bommen når man teller runder i en LMC-løkke?",
      options: ["Å glemme runden der telleren er nøyaktig 0 og `BRP` fortsatt hopper", "Å telle med runden der programmet allerede har nådd `HLT`", "Å telle instruksjonene i stedet for gjennomløpene", "Å regne med at `INP` teller som en runde i seg selv"],
      explanation: "Nullrunden er den som skiller `BRP` fra `BRZ`, og den gir én runde ekstra. Alternativ 2 er en teoretisk mulighet, men sjelden i praksis. Alternativ 3 er en annen feil, i selve tabellføringen. Alternativ 4 beskriver ingen vanlig misforståelse.",
    },
    {
      question: "Hva gjør `LDA 62` rett før en `ADD` i et tabelloppslag med selvmodifisering?",
      options: ["Nullstiller akkumulatoren, så `ADD` gir tabellverdien alene", "Henter indeksen som skal brukes i oppslaget", "Lagrer den beregnede instruksjonen for senere", "Setter akkumulatoren til startadressen for tabellen"],
      explanation: "Uten nullstillingen legges tabellverdien til den beregnede instruksjonsverdien, og svaret blir hundrevis for stort. Alternativ 2 og 4 gir cellen en rolle den ikke har. Alternativ 3 beskriver `STA`.",
    },
    {
      question: "Programmet dobler inndata under 5 og lar større tall stå. Hvilke inndata gir utskriften 8?",
      options: ["Både 4 og 8", "Bare 4", "Bare 8", "4, 8 og 5"],
      explanation: "4 er under terskelen og dobles til 8; 8 er over og skrives ut som den er. Alternativ 2 og 3 tar bare den ene grenen. Alternativ 4 tar med 5, som er på grensen og skrives ut som 5.",
    },
    {
      question: "Hva forteller en `DAT`-verdi som ser ut som en gyldig instruksjon, for eksempel `DAT 605`?",
      options: ["At den sannsynligvis er en instruksjonsmal for selvmodifisering", "At programmereren har glemt å skrive `BRA` i stedet for `DAT`", "At cellen er en teller som starter på 605", "At assembleren vil oversette den til en hoppinstruksjon automatisk"],
      explanation: "En `DAT`-verdi i instruksjonsområdets tallformat er sjelden tilfeldig. Alternativ 2 ville gjort cellen til kode, som ikke er hensikten. Alternativ 3 er mulig i prinsippet, men usannsynlig for nettopp denne verdien. Alternativ 4 er feil: `DAT` oversettes aldri til en instruksjon.",
    },
    {
      question: "Hvorfor skal du skrive av verdier i sporetabellen også når de er uendret?",
      options: ["Fordi en tom celle blir til tvil når du sjekker tabellen senere", "Fordi sensor krever at hele tabellen leveres inn", "Fordi akkumulatoren nullstilles hvis den ikke skrives av", "Fordi antall rader ellers ikke stemmer med antall instruksjoner"],
      explanation: "Tabellen er ditt eget kontrollverktøy, og hull i den koster tid og sikkerhet. Alternativ 2 er feil — eksamen er ren avkrysning, ingenting leveres inn. Alternativ 3 og 4 beskriver mekanismer som ikke finnes.",
    },
    {
      question: "Et program bruker `BRZ` og teller ned med 2 fra et oddetall. Hva skjer?",
      options: ["Løkka stopper aldri, fordi verdien aldri treffer nøyaktig 0", "Løkka stopper når verdien passerer 0 og blir negativ", "Løkka stopper etter halvparten så mange runder som ved partall", "Løkka stopper med en gang, siden oddetall ikke er delelig med 2"],
      explanation: "`BRZ` tester på eksakt likhet, og 7, 5, 3, 1, −1 hopper over null. Alternativ 2 beskriver `BRP`-oppførsel. Alternativ 3 og 4 beskriver ingen reell mekanisme.",
    },
    {
      question: "Hva er den mest robuste framgangsmåten på en LMC-oppgave under tidspress?",
      options: ["Føre sporetabell, selv når programmet ser enkelt ut", "Lese programmet raskt og gjenkjenne mønsteret fra tidligere oppgaver", "Spore bare den første runden og gange opp", "Krysse av det alternativet som ligner mest på inndataen"],
      explanation: "Sporing er mekanisk og gir riktig svar; alt annet er gjetting, som straffes under negativ poenggiving. Alternativ 2 bommer så snart programmet har en liten vri. Alternativ 3 feiler når verdiene endrer seg mellom rundene. Alternativ 4 er ren gjetting.",
    },
  ],
  'in1020-1-7': [
    {
      question: "Hvor mange bit bruker ASCII per tegn?",
      options: ["7 bit, som gir 128 tegn", "8 bit, som gir 256 tegn", "16 bit, som gir 65 536 tegn", "Variabelt, mellom 1 og 4 byte"],
      explanation: "ASCII har 128 koder, og 128 er to opphøyd i sju. Alternativ 2 er den vanligste misforståelsen — den åttende biten i en byte var ubrukt eller en kontrollbit. Alternativ 3 beskriver en annen unicode-koding. Alternativ 4 beskriver UTF-8.",
    },
    {
      question: "Hva er R, G og B i fargekoden `0x2E8B57`?",
      options: ["46, 139, 87", "2, 8, 5", "28, 85, 57", "46, 87, 139"],
      explanation: "Parene `2E`, `8B` og `57` gir 46, 139 og 87. Alternativ 2 tar bare det første sifferet i hvert par. Alternativ 3 leser parene som desimaltall. Alternativ 4 har grønn og blå byttet om — rekkefølgen er alltid rød, grønn, blå fra venstre.",
    },
    {
      question: "Hvilket av disse formatene er tapsfritt?",
      options: ["PNG", "JPEG", "MP3", "MP4"],
      explanation: "PNG gjenskaper hver piksel eksakt og brukes til grafikk, tekst og skjermbilder. JPEG forkaster fargedetaljer, MP3 forkaster maskert lyd og MP4 forkaster både bilde- og lyddetaljer. Merk at PNG og JPEG begge er bildeformater, men i hver sin kategori.",
    },
    {
      question: "Hvorfor er UTF-8 bakoverkompatibel med ASCII?",
      options: ["Fordi de 128 ASCII-tegnene har samme koder i UTF-8", "Fordi UTF-8 alltid bruker like mange byte per tegn som ASCII gjorde", "Fordi ASCII-filer må konverteres før de kan leses som UTF-8", "Fordi UTF-8 legger til en ekstra byte foran hver ASCII-fil"],
      explanation: "En ren ASCII-fil er allerede en gyldig UTF-8-fil. Alternativ 2 er feil for tegn utenfor ASCII, som tar to til fire byte. Alternativ 3 sier det motsatte av bakoverkompatibilitet. Alternativ 4 beskriver en mekanisme UTF-8 ikke har.",
    },
    {
      question: "Hvor mange byte tar teksten `Hæ?` i UTF-8?",
      options: ["4 byte", "3 byte", "6 byte", "2 byte"],
      explanation: "`H` og `?` tar én byte hver, mens `æ` ikke er et ASCII-tegn og tar to. Alternativ 2 teller tegn i stedet for byte. Alternativ 3 antar to byte per tegn gjennomgående. Alternativ 4 utelater ett av tegnene.",
    },
    {
      question: "Hva menes med at tapskomprimering er kumulativ?",
      options: ["At hver ny lagring forkaster mer, uten vei tilbake", "At fila blir større for hver gang den lagres på nytt", "At tapet fordeles jevnt utover hele fila ved første lagring", "At komprimeringen stopper når fila har nådd en minstestørrelse"],
      explanation: "En JPEG som redigeres og lagres ti ganger, er merkbart dårligere enn originalen. Alternativ 2 er motsatt av hva som skjer. Alternativ 3 beskriver hvordan tapet fordeles, ikke at det stabler seg opp. Alternativ 4 beskriver ingen reell mekanisme.",
    },
    {
      question: "Hva er hovedegenskapen ved vektorgrafikk?",
      options: ["Bildet kan forstørres fritt uten å bli uskarpt", "Bildet komprimeres tapsfritt uansett innhold", "Bildet får flere farger enn et rasterbilde av samme størrelse", "Bildet lagres alltid som en mindre fil enn tilsvarende raster"],
      explanation: "Formene regnes ut på nytt for hver visningsstørrelse. Alternativ 2 blander sammen to uavhengige egenskaper. Alternativ 3 er feil — fargedybde har ingenting med lagringsmåten å gjøre. Alternativ 4 stemmer for enkel grafikk, men ikke for komplekse motiver.",
    },
    {
      question: "Hvorfor egner ikke vektorgrafikk seg til fotografier?",
      options: ["Fordi et fotografi ikke består av rene former", "Fordi vektorformater ikke støtter mer enn 256 farger", "Fordi vektorfiler alltid blir større enn rasterfiler", "Fordi kameraer ikke kan lagre bilder i vektorformat"],
      explanation: "En formbeskrivelse av et fotografi ville blitt både enorm og unøyaktig. Alternativ 2 er feil: vektorformater støtter full fargedybde. Alternativ 3 gjelder bare for komplekse motiver, og er en følge av det første alternativet, ikke en selvstendig grunn. Alternativ 4 er sant, men er en konsekvens, ikke årsaken.",
    },
    {
      question: "Hvor mange farger gir 24-bits farge?",
      options: ["Omtrent 16,8 millioner", "16 384", "256", "Omtrent 4,3 milliarder"],
      explanation: "Tre kanaler à 256 verdier gir $256^3 = 2^{24}$, altså 16 777 216. 16 384 er to opphøyd i 14. 256 er én kanal alene. 4,3 milliarder er to opphøyd i 32, altså 32-bits farge med gjennomsiktighetskanal.",
    },
    {
      question: "Hvilken ASCII-kode har siffertegnet `0`?",
      options: ["48", "0", "30", "65"],
      explanation: "Siffertegnene ligger sammenhengende fra 48, så `9` er 57. Alternativ 2 forveksler tegnet med tallverdien. Alternativ 3 er den heksadesimale formen av 48, altså riktig verdi i feil base. Alternativ 4 er koden for `A`.",
    },
    {
      question: "Hva er R-komponenten i `0xC0392B`?",
      options: ["192", "12", "57", "43"],
      explanation: "Første par er `C0`, altså 12 ganger 16 pluss 0 lik 192. Alternativ 2 tar bare verdien av C. Alternativ 3 er grønnkomponenten (`0x39`), og alternativ 4 er blåkomponenten (`0x2B`).",
    },
    {
      question: "Hvilket format ville du valgt til et skjermbilde med lesbar tekst?",
      options: ["PNG, som er tapsfritt og bevarer skarpe kanter", "JPEG, som gir minst mulig filstørrelse uansett bildetype", "MP3, som er standard for komprimert innhold", "SVG, siden tekst alltid bør lagres som vektor"],
      explanation: "JPEG lager synlige artefakter rundt skarpe kanter, og tekst blir grumsete. Alternativ 2 overser at kvaliteten går ut over lesbarheten. Alternativ 3 er et lydformat. Alternativ 4 ville krevd at skjermbildet var laget som former, noe det ikke er — det er et rutenett av piksler.",
    },
    {
      question: "Hva er forskjellen på fargedybde og oppløsning?",
      options: ["Fargedybde er bit per piksel, oppløsning er antall", "Fargedybde er antall piksler, oppløsning er bit per piksel", "De to er to navn på det samme forholdet", "Fargedybde gjelder skjermer, mens oppløsning gjelder filer"],
      explanation: "De to er uavhengige: et lite bilde kan ha 24-bits farge, og et stort bilde kan ha få farger. Alternativ 2 bytter om definisjonene. Alternativ 3 er feil. Alternativ 4 innfører et skille som ikke finnes.",
    },
    {
      question: "Hvorfor kan generell filkomprimering som ZIP aldri være tapskomprimert?",
      options: ["Fordi et program må komme ut bit for bit identisk", "Fordi ZIP-formatet er for gammelt til å støtte tap", "Fordi tapskomprimering bare virker på bilder og lyd", "Fordi ZIP-filer alltid er mindre enn originalen"],
      explanation: "En eneste endret bit kan gjøre et program ubrukelig. Alternativ 2 blander alder med egenskap. Alternativ 3 er nesten sant i praksis, men er en følge av det første alternativet, ikke årsaken. Alternativ 4 er ikke engang alltid sant — en allerede komprimert fil kan bli marginalt større.",
    },
    {
      question: "Hva er en artefakt i sammenheng med komprimering?",
      options: ["Synlig eller hørbar feil etter forkastet informasjon", "En del av fila som beskriver hvordan den pakkes ut", "Metadata om når og hvor bildet ble tatt", "Et ekstra lag med gjennomsiktighet i bildet"],
      explanation: "Firkantmønstre rundt tekst i et bilde er den forkastede informasjonen som mangler. Alternativ 2 beskriver et filhode. Alternativ 3 er metadata. Alternativ 4 er en alfakanal.",
    },
    {
      question: "Hva er den vanligste fella når du leser et heksadesimalt fargepar som `39`?",
      options: ["Å lese det som desimaltallet 39 i stedet for 57", "Å lese det som binærtallet 39, som ikke finnes", "Å bytte om de to sifrene og få 93", "Å tro at paret beskriver to ulike fargekanaler"],
      explanation: "Par som bare inneholder sifre 0–9 ser ut som desimaltall og blir lest som det. Alternativ 2 er ikke en reell forveksling. Alternativ 3 og 4 beskriver feil som forekommer sjeldnere og gir mer åpenbart gale svar.",
    },
    {
      question: "Hva betyr det at RGB-modellen er additiv?",
      options: ["Fargene lages ved å legge til lys; alle tre gir hvitt", "Fargene lages ved å trekke lys fra hvitt, som blekk på papir", "Fargeverdiene legges sammen til én samlet lysstyrke", "Modellen kan utvides med flere fargekanaler ved behov"],
      explanation: "Skjermer sender ut lys i rødt, grønt og blått. Alternativ 2 beskriver den subtraktive modellen som brukes i trykk. Alternativ 3 beskriver ingen reell operasjon i modellen. Alternativ 4 blander sammen additivitet med utvidbarhet.",
    },
    {
      question: "En tekst har hundre tegn, hvorav ti er norske spesialtegn. Hvor mange byte i UTF-8?",
      options: ["110 byte", "100 byte", "200 byte", "120 byte"],
      explanation: "Nitti tegn tar én byte og ti tar to: 90 pluss 20 er 110. Alternativ 2 teller tegn i stedet for byte. Alternativ 3 antar to byte gjennomgående. Alternativ 4 ville krevd at spesialtegnene tok tre byte hver.",
    },
    {
      question: "Hva er `0x00FF00`?",
      options: ["Rent grønt — bare grønnkanalen er på", "Rent rødt — første par er høyest", "Svart — to av tre kanaler er null", "Hvitt — mønsteret er symmetrisk"],
      explanation: "Parene er `00`, `FF`, `00`, altså R = 0, G = 255, B = 0. Alternativ 2 leser feil par som høyest. Alternativ 3 overser at midtparet er på full styrke. Alternativ 4 ville krevd `0xFFFFFF`.",
    },
    {
      question: "Hvilken påstand om filstørrelse på rasterbilder stemmer?",
      options: ["Den avhenger av antall piksler, men komprimeringen teller sterkt", "Den avhenger bare av hvor komplisert motivet er", "Den er den samme for alle bilder med samme fargedybde", "Den halveres hver gang oppløsningen halveres i én retning"],
      explanation: "Et rutenett med mange ruter krever mye lagring, men to bilder med like mange piksler kan ende svært ulikt etter komprimering. Alternativ 2 utelater pikselantallet. Alternativ 3 overser oppløsningen. Alternativ 4 stemmer for ubehandlede data, men ikke etter komprimering.",
    },
  ],
  'in1020-2-1': [
    {
      question: "Når gir en AND-port utgangen 1?",
      options: ["Bare når alle inngangene er 1", "Når minst én av inngangene er 1", "Bare når alle inngangene er 0", "Når inngangene har ulik verdi"],
      explanation: "AND-tabellen er `0 0 0 1`: ett ettall, i raden der begge er 1. Alternativ 2 beskriver OR, som gir 1 i tre av fire rader. Alternativ 3 beskriver NOR, som har ettallet øverst i stedet for nederst. Alternativ 4 beskriver XOR, som gir 1 i de to midterste radene.",
    },
    {
      question: "Hvilken utgangskolonne har OR-porten for radene 00, 01, 10, 11?",
      options: ["0 1 1 1 — én null, og den står øverst", "0 0 0 1 — ett ettall, og det står nederst", "1 1 1 0 — én null, og den står nederst", "1 0 0 0 — ett ettall, og det står øverst"],
      explanation: "OR gir 1 så snart minst én inngang er 1, og bare raden `00` gir 0. Alternativ 2 er AND. Alternativ 3 er NAND, som har tre ettall som OR, men med nullen i motsatt ende. Alternativ 4 er NOR.",
    },
    {
      question: "Hvor mange innganger har en NOT-port?",
      options: ["Én — den tar inn ett bit og gir ut det inverterte", "To, som alle de andre portene i pensum", "To, men begge må alltid ha samme verdi", "Vilkårlig mange, avhengig av hvordan den kobles"],
      explanation: "NOT er den eneste porten med bare én inngang; den snur verdien. Alternativ 2 og 3 blander NOT med de tobruk-portene. Alternativ 4 gjelder AND, OR, NAND og NOR, som finnes med flere innganger — NOT gjør ikke det.",
    },
    {
      question: "Hvilken utgangskolonne har NAND-porten for radene 00, 01, 10, 11?",
      options: ["1 1 1 0", "1 0 0 0", "0 0 0 1", "1 0 0 1"],
      explanation: "NAND er AND invertert, så AND-kolonnen `0 0 0 1` snus til `1 1 1 0`. Alternativ 2 er NOR — den vanligste forvekslingen, siden begge symbolene har boble. Alternativ 3 er AND selv, altså NAND uten boblen. Alternativ 4 er XNOR.",
    },
    {
      question: "Når gir en NOR-port utgangen 1?",
      options: ["Bare når alle inngangene er 0", "Bare når alle inngangene er 1", "I tre av fire rader, med nullen nederst", "Når nøyaktig én av inngangene er 1"],
      explanation: "NOR er OR invertert: OR gir 0 bare i raden `00`, så NOR gir 1 bare der. Alternativ 2 beskriver AND. Alternativ 3 beskriver NAND, som er den vanligste forvekslingen med NOR. Alternativ 4 beskriver XOR.",
    },
    {
      question: "Når gir en XOR-port utgangen 1?",
      options: ["Når inngangene er ulike, altså i nøyaktig én av dem", "Når inngangene er like, både ved 00 og ved 11", "Når minst én inngang er 1, også når begge er det", "Bare i raden der begge inngangene er 1"],
      explanation: "XOR er det utelukkende «eller»: `0 1 1 0`. Alternativ 2 beskriver XNOR, som er XOR invertert i hver eneste rad. Alternativ 3 beskriver vanlig OR, som i tillegg gir 1 i den nederste raden. Alternativ 4 beskriver AND.",
    },
    {
      question: "Når gir en XNOR-port utgangen 1?",
      options: ["Når inngangene er like", "Når inngangene er ulike", "Når begge inngangene er 0", "Når begge inngangene er 1"],
      explanation: "XNOR er likhetstesten og gir `1 0 0 1`, altså 1 både ved `00` og ved `11`. Alternativ 2 er XOR, det motsatte i alle rader. Alternativ 3 er NOR, som bare dekker den øverste av de to. Alternativ 4 er AND, som bare dekker den nederste.",
    },
    {
      question: "Hva betyr boblen på utgangen av et portsymbol?",
      options: ["At utgangen inverteres etter at porten har regnet", "At porten har flere utganger enn de vanlige", "At inngangene må inverteres før porten regner", "At porten kobles til strømforsyningen der"],
      explanation: "Boblen betyr «inverter svaret», og det er den som skiller NAND fra AND, NOR fra OR og XNOR fra XOR. Alternativ 2 er feil fordi en port alltid har nøyaktig én utgang. Alternativ 3 snur rekkefølgen: inverterte innganger på en AND gir NOR, ikke NAND. Alternativ 4 handler ikke om logikk i det hele tatt.",
    },
    {
      question: "Hvordan skiller AND-symbolet seg fra OR-symbolet?",
      options: ["AND har flat bakside og rund framside; OR har buet bakside og spiss framside", "AND har buet bakside og spiss framside; OR har flat bakside og rund framside", "AND har boble på utgangen; OR har boble på inngangene", "AND har to innganger; OR har alltid tre eller flere"],
      explanation: "Formen på baksiden er det som skiller dem: AND er flat bak som en stor D, OR er buet bak og spiss foran. Alternativ 2 bytter om de to beskrivelsene. Alternativ 3 er feil fordi verken AND eller OR har boble — det er NAND og NOR som har det. Alternativ 4 er feil fordi begge finnes med to eller flere innganger.",
    },
    {
      question: "Hva er `(A·B)′` lik?",
      options: ["`A′ + B′`", "`A′ · B′`", "`(A + B)′`", "`A · B`"],
      explanation: "De Morgans lov drar inverteringen inn og bytter AND til OR. Alternativ 2 inverterer hver variabel, men lar operatoren stå — det gir NOR, som er ulik NAND i tre av fire rader. Alternativ 3 er samme feil skrevet på en annen måte. Alternativ 4 mangler inverteringen helt.",
    },
    {
      question: "Hva er `(A + B)′` lik?",
      options: ["`A′ · B′`", "`A′ + B′`", "`(A · B)′`", "`A + B`"],
      explanation: "Den andre av De Morgans lover: «ingen av dem» er «ikke den ene og ikke den andre». Alternativ 2 beholder OR i midten og gir dermed NAND i stedet for NOR. Alternativ 3 er det samme uttrykket som alternativ 2, bare skrevet med parentes. Alternativ 4 mangler inverteringen.",
    },
    {
      question: "Hvilket av disse settene porttyper er IKKE funksjonelt komplett?",
      options: ["{AND, OR}", "{NAND}", "{NOR}", "{NOT, OR}"],
      explanation: "Uten en form for invertering kan {AND, OR} aldri lage en utgang som er 0 når alle inngangene er 1, så settet er ikke komplett. Alternativ 2 og 3 er de to klassiske universelle portene, som hver for seg kan bygge NOT, AND og OR. Alternativ 4 er komplett fordi De Morgan gir AND av NOT og OR.",
    },
    {
      question: "Hva får du av en NAND-port der begge inngangene er koblet til samme signal A?",
      options: ["En inverter, altså `A′`", "Signalet `A` uendret gjennom porten", "Alltid 1, uansett hva `A` er", "Alltid 0, uansett hva `A` er"],
      explanation: "`A·A = A` (idempotens), så `(A·A)′ = A′`. Alternativ 2 ville stemt for en OR eller AND med sammenkoblede innganger, men NAND-boblen snur svaret. Alternativ 3 og 4 ville krevd at utgangen var konstant, men tabellen gir 1 for `A = 0` og 0 for `A = 1`.",
    },
    {
      question: "Hva får du av en NOR-port der begge inngangene er koblet til samme signal A?",
      options: ["En inverter, altså `A′`", "Signalet `A` uendret", "En AND-port med bare én inngang", "Konstant 1, uansett hva `A` er"],
      explanation: "`A + A = A`, så `(A+A)′ = A′` — akkurat som for NAND. Alternativ 2 glemmer boblen, som er hele forskjellen mellom OR og NOR. Alternativ 3 gir ikke mening, siden en AND med én inngang bare ville sendt signalet videre. Alternativ 4 er feil: utgangen er 1 for `A = 0`, men 0 for `A = 1`.",
    },
    {
      question: "Hvor mange rader har en sannhetstabell med fire innganger?",
      options: ["16", "8", "4", "32"],
      explanation: "Antall rader er $2^n$, og $2^4 = 16$. Alternativ 2 er antallet for tre innganger. Alternativ 3 forveksler antall rader med antall innganger ganget med seg selv. Alternativ 4 er $2^5$, altså tabellen for fem innganger.",
    },
    {
      question: "Hvilken påstand om utganger fra en logisk port er sann?",
      options: ["Porten har én utgang, men den kan kobles til flere porter", "Porten kan ha to utganger hvis den mater to andre porter", "Porten har like mange utganger som den har innganger", "Porten kan ha to utganger, men de må ha samme verdi"],
      explanation: "En port har alltid nøyaktig én utgang; ledningen fra den kan derimot grene seg til flere mottakere, som alle ser samme verdi. Alternativ 2 og 4 er den faste eksamensfella som forveksler forgrening med flere utganger. Alternativ 3 er feil allerede for NOT, som har én inngang og én utgang.",
    },
    {
      question: "Hva er `A + A′` lik?",
      options: ["1, uansett verdien på `A`", "0, uansett verdien på `A`", "`A`, siden inverteringen faller bort", "`A′`, siden inverteringen vinner"],
      explanation: "Nøyaktig én av `A` og `A′` er 1, så OR-en er alltid 1. Alternativ 2 er svaret på `A · A′`, altså den andre komplementloven. Alternativ 3 og 4 ville krevd at det ene leddet kunne strykes, men ingen av dem er null-elementet for OR.",
    },
    {
      question: "Hva er `A · 1` lik?",
      options: ["`A`", "1", "0", "`A′`"],
      explanation: "En AND med en fast 1 på den ene inngangen slipper det andre signalet uendret gjennom. Alternativ 2 er svaret på `A + 1`, der konstanten overtar hele uttrykket. Alternativ 3 er svaret på `A · 0`. Alternativ 4 ville krevd en invertering som ikke finnes i uttrykket.",
    },
    {
      question: "Hva er `A ⊕ 1` lik?",
      options: ["`A′` — XOR med ett inverterer bitet", "`A` — XOR med ett lar bitet stå", "1 — XOR med ett gir alltid ett", "0 — XOR med ett nullstiller bitet"],
      explanation: "XOR gir 1 når inngangene er ulike: er `A = 0` blir svaret 1, er `A = 1` blir svaret 0. Det er nettopp invertering. Alternativ 2 beskriver `A ⊕ 0`, som lar bitet stå. Alternativ 3 og 4 ville krevd konstant utgang, men utgangen varierer med `A`.",
    },
    {
      question: "Hvilket uttrykk er lik `A ⊕ B`?",
      options: ["`A′·B + A·B′`", "`A·B + A′·B′`", "`A′·B′`", "`A·B`"],
      explanation: "XOR gir 1 i de to radene der nøyaktig én inngang er 1, og de to leddene beskriver hver sin av dem. Alternativ 2 er XNOR, altså det motsatte i hver rad. Alternativ 3 er NOR, som bare dekker raden der begge er 0. Alternativ 4 er AND, som bare dekker raden der begge er 1.",
    },
    {
      question: "Hva betyr uttrykket `A·B + C` med emnets prioritetsregel?",
      options: ["`(A·B) + C` — AND binder sterkere enn OR", "`A·(B + C)` — OR binder sterkere enn AND", "Uttrykket er tvetydig og må ha parentes for å bety noe", "Uttrykket leses alltid fra venstre mot høyre, ledd for ledd"],
      explanation: "AND binder sterkere enn OR, akkurat som gange binder sterkere enn pluss. Alternativ 2 snur prioriteten og gir et annet uttrykk, som er ulikt i flere rader. Alternativ 3 er feil fordi regelen nettopp fjerner tvetydigheten. Alternativ 4 ville gitt samme resultat som alternativ 2 og er derfor også feil.",
    },
    {
      question: "En krets er gitt som portliste: Port 1 er NOT med inngangen A og gir P; port 2 er AND med inngangene P og B og gir F. Hva er `F`?",
      options: ["`A′ · B`", "`A · B′`", "`(A · B)′`", "`A′ + B`"],
      explanation: "Port 1 gir `P = A′`, og port 2 AND-er den med `B`, altså `F = A′·B`. Alternativ 2 inverterer feil inngang. Alternativ 3 ville krevd at inverteringen sto etter AND-porten, ikke før. Alternativ 4 bytter ut AND-porten med en OR-port.",
    },
  ],
  'in1020-2-2': [
    {
      question: "Hvilken vei skal du regne når du analyserer en krets?",
      options: ["Fra inngangene og framover, port for port", "Fra utgangen og bakover mot kretsens innganger", "Fra midten og utover mot begge ender", "Fra den porten som har flest innganger"],
      explanation: "En port kan regnes så snart alle inngangene er kjent, og det er bare oppfylt hvis du starter ved inngangene. Alternativ 2 er den vanligste mekaniske feilen: bakover mister du oversikten over hvilket signal som mater hva. Alternativ 3 og 4 gir ingen rekkefølge som garanterer at inngangene til en port er kjent når du kommer til den.",
    },
    {
      question: "Mellomsignalet `P = A + B` settes inn i porten `F = P·C`. Hva blir F?",
      options: ["`(A + B)·C`", "`A + B·C`", "`A·C + B`", "`A + B + C`"],
      explanation: "Fordi P inneholder en OR og settes inn i en AND, må den inn med parentes. Alternativ 2 er nettopp feilen som oppstår uten parentes, og det gir en annen funksjon i to av åtte rader. Alternativ 3 setter parentesen feil sted. Alternativ 4 bytter ut AND-porten med en OR.",
    },
    {
      question: "En krets har portlisten: port 1 er AND med A og B og gir P; port 2 er NOT med C og gir Q; port 3 er OR med P og Q og gir F. Hva er `F`?",
      options: ["`A·B + C′`", "`A·B·C′`", "`(A + B)·C′`", "`(A·B + C)′`"],
      explanation: "Port 3 er en OR av `A·B` og `C′`, og AND binder allerede sterkest, så ingen parentes trengs. Alternativ 2 bytter den siste OR-porten med en AND. Alternativ 3 bytter den første AND-porten med en OR. Alternativ 4 flytter inverteringen ut til hele uttrykket i stedet for å la den stå på C.",
    },
    {
      question: "Hva blir `(A + B)′` etter De Morgan?",
      options: ["`A′ · B′`", "`A′ + B′`", "`A · B`", "`(A · B)′`"],
      explanation: "Inverteringen dras inn i parentesen, og operatoren byttes fra OR til AND. Alternativ 2 lar operatoren stå og gir NAND der svaret skal være NOR — de er ulike i tre av fire rader. Alternativ 3 mangler inverteringene helt. Alternativ 4 er samme uttrykk som alternativ 2, bare skrevet med parentes.",
    },
    {
      question: "Hva blir `A + A·B` forenklet?",
      options: ["`A`", "`A·B`", "`A + B`", "`B`"],
      explanation: "Absorpsjon: er A lik 1, er summen 1 uansett B; er A lik 0, er også `A·B` lik 0. Utgangen følger A nøyaktig. Alternativ 2 er den vanlige feilbruken der man fjerner feil ledd. Alternativ 3 er svaret på `A + A′·B`, altså utvidet absorpsjon. Alternativ 4 ville krevd at A falt bort, men det er A som blir stående.",
    },
    {
      question: "Hva blir `A + A′·B` forenklet?",
      options: ["`A + B`", "`A`", "`A·B`, altså med OR byttet til AND", "`B`"],
      explanation: "Utvidet absorpsjon: er A lik 1 er begge sider 1, og er A lik 0 blir begge sider B. Alternativ 2 er svaret på vanlig absorpsjon `A + A·B`, der leddet forsvinner helt. Alternativ 3 bytter OR til AND. Alternativ 4 glemmer at A alene også gir utgangen 1.",
    },
    {
      question: "Er `A + B·C` lik `(A + B)·(A + C)`?",
      options: ["Ja — det er den distributive loven for OR over AND", "Nei — den loven finnes bare i vanlig tallregning", "Ja, men bare når A er lik 0", "Nei — høyresiden er lik `A·B + C`"],
      explanation: "Loven gjelder i boolsk algebra og kan kontrolleres i alle åtte radene: er A lik 1 er begge sider 1, er A lik 0 blir begge sider `B·C`. Alternativ 2 snur saken: den finnes nettopp ikke i tallregning, men gjelder her. Alternativ 3 er feil fordi likheten gjelder i alle rader. Alternativ 4 oppgir feil forenkling av høyresiden.",
    },
    {
      question: "Hva blir `A·(B + C)` skrevet som sum av produkter?",
      options: ["`A·B + A·C`", "`A·B + C`", "`(A + B)·(A + C)`", "`A + B·C`"],
      explanation: "Distributiv lov, AND over OR — den vanlige «gang inn i parentesen», og A ganges inn i begge leddene. Alternativ 2 ganger A inn i bare det ene leddet. Alternativ 3 og 4 hører til den andre distributive loven og beskriver en annen funksjon.",
    },
    {
      question: "Når er to boolske uttrykk ekvivalente?",
      options: ["Når de gir samme utgang i hver eneste rad i sannhetstabellen", "Når de inneholder de samme variablene i samme rekkefølge", "Når de kan bygges med like mange porter av samme type", "Når de gir samme utgang for minst én inngangskombinasjon"],
      explanation: "Ekvivalens er en påstand om hele tabellen. Alternativ 2 er verken nødvendig eller tilstrekkelig: `A + C` og `C + A` er ekvivalente med ulik rekkefølge. Alternativ 3 blander ekvivalens med kretsstørrelse — den forenklede formen bruker færre porter, men er samme funksjon. Alternativ 4 holder ikke: to ulike uttrykk er som regel like i noen rader.",
    },
    {
      question: "Hvor mange rader trenger du for å bevise at et alternativ IKKE er ekvivalent med kretsen?",
      options: ["Én — en enkelt rad der de gir ulikt svar er nok", "Alle radene, siden ekvivalens gjelder hele tabellen", "Minst halvparten av radene i tabellen", "To rader, én for hver verdi av den første variabelen"],
      explanation: "Én motrad avviser alternativet endelig. Alternativ 2 beskriver kravet for å **godta** et alternativ, ikke for å avvise det — asymmetrien er verdt å utnytte under tidspress. Alternativ 3 og 4 er vilkårlige tall uten logisk grunnlag.",
    },
    {
      question: "En NAND-port etterfølges av en NOT-port. Hva gir de to til sammen?",
      options: ["En AND-port", "En NOR-port", "En OR-port", "En NAND-port, siden NOT ikke endrer noe"],
      explanation: "Dobbel invertering opphever seg selv: `((A·B)′)′ = A·B`. Alternativ 2 ville krevd at den første porten var en OR. Alternativ 3 ville krevd De Morgan på inverterte innganger, ikke en NOT på utgangen. Alternativ 4 er feil fordi NOT nettopp snur svaret.",
    },
    {
      question: "Hvor mange rader har sannhetstabellen til en krets med tre innganger?",
      options: ["8", "6", "4", "9"],
      explanation: "Antall rader er $2^n$, og $2^3 = 8$. Alternativ 2 forveksler $2^n$ med $2 \\cdot n$. Alternativ 3 er antallet for to innganger. Alternativ 4 forveksler $2^n$ med $n^2$.",
    },
    {
      question: "Hvilke kretstemaer skal du IKKE drille til denne eksamenen?",
      options: ["Karnaugh-diagram, multiplekser og dekoder", "Portidentifikasjon og oppsett av sannhetstabeller", "Propagering av en portliste fram til F", "De Morgans lover og absorpsjon"],
      explanation: "De tre i alternativ 1 er uttrykkelig plassert utenfor pensum i emnet og er derfor ikke pensum i denne boka; å øve på dem fra gamle sett er felle #10. Alternativ 2, 3 og 4 er derimot kjernen i sjanger D og kommer hvert år.",
    },
    {
      question: "Hva blir `A·(A + B)` forenklet?",
      options: ["`A`", "`A·B`", "`A + B`", "`B`"],
      explanation: "Absorpsjon i den speilvendte formen: er A lik 0 er hele produktet 0, og er A lik 1 er parentesen også 1. Utgangen følger A. Alternativ 2 er den vanligste feilen — man husker at «noe forsvinner», men fjerner feil ledd. Alternativ 3 og 4 lar B bli stående, men B har ingen innflytelse her.",
    },
    {
      question: "Hva er `A + A′` lik i en krets?",
      options: ["Konstant 1, uansett inngangen", "Konstant 0, uansett inngangen", "`A`, siden inverteringen faller bort", "`A′`, siden inverteringen står sist"],
      explanation: "Nøyaktig én av A og A′ er 1 til enhver tid, så OR-en er alltid 1. Alternativ 2 er svaret på `A·A′`. Alternativ 3 og 4 ville krevd at det ene leddet kunne strykes, men her er det operatoren som avgjør, ikke leddene.",
    },
    {
      question: "Hva er `A · 0` lik?",
      options: ["0", "`A`", "1", "`A′`"],
      explanation: "En AND med en fast 0 på den ene inngangen gir alltid 0 — nullelementet overtar hele uttrykket. Alternativ 2 er svaret på `A · 1`, der konstanten forsvinner. Alternativ 3 er svaret på `A + 1`. Alternativ 4 ville krevd en invertering som ikke finnes i uttrykket.",
    },
    {
      question: "Utgangen er 1 bare i raden der `A = 1`, `B = 0` og `C = 1`. Hvilket uttrykk beskriver funksjonen?",
      options: ["`A·B′·C`", "`A·B·C`", "`A + B′ + C`", "`A′·B·C′`"],
      explanation: "Metoden er å skrive ett AND-ledd for raden: variabelen selv der den er 1, invertert der den er 0. Alternativ 2 glemmer inverteringen på B og treffer raden `111` i stedet. Alternativ 3 er en OR og gir 1 i sju av åtte rader. Alternativ 4 inverterer nøyaktig de motsatte variablene.",
    },
    {
      question: "Hva er riktig arbeidsmåte i en F1-oppgave om ekvivalente uttrykk?",
      options: ["Regn ut kretsens F én gang, og vurder så hvert alternativ mot den", "Kryss av det første alternativet som stemmer, og gå videre", "Prøv å bygge om hvert alternativ til kretsen, ett om gangen", "Kryss av alle alternativene som inneholder de samme variablene"],
      explanation: "Ett utregnet svar og deretter fire selvstendige vurderinger er både raskest og sikrest. Alternativ 2 gir halv uttelling når flere er riktige — den billigste måten å tape poeng på. Alternativ 3 er unødvendig arbeid fire ganger. Alternativ 4 ser på form i stedet for funksjon, og alle fire alternativene har som regel de samme variablene.",
    },
    {
      question: "Hva menes med kretsdybden?",
      options: ["Antall porter et signal passerer langs den lengste veien", "Det totale antallet porter kretsen består av", "Antall innganger den bredeste porten har", "Antall mellomsignaler som er navngitt i portlisten"],
      explanation: "Dybden måler den lengste kjeden fra inngang til utgang, og den bestemmer hvor lang tid kretsen bruker på å gi svar. Alternativ 2 er kretsens størrelse, som er noe annet: en bred krets kan være grunn. Alternativ 3 og 4 måler heller ikke veilengden gjennom kretsen.",
    },
    {
      question: "I en portliste står mellomsignalet `P` som inngang på både port 2 og port 3. Hva betyr det?",
      options: ["Ledningen fra P er delt, og begge portene ser samme verdi", "Porten som lager P må ha to utganger", "P kan bare brukes av den første porten som tar den inn", "Portlisten er feil satt opp og må skrives om"],
      explanation: "Et signal kan leses av så mange porter du vil; det er forgrening, og alle mottakerne ser samme verdi. Alternativ 2 er den faste fella som forveksler forgrening med flere utganger — en port har alltid nøyaktig én. Alternativ 3 er feil fordi et signal ikke «brukes opp». Alternativ 4 er feil fordi forgrening er helt vanlig.",
    },
    {
      question: "En krets har portlisten: port 1 er NOR med A og B og gir P; port 2 er NOT med inngangen P og gir F. Hva er `F`?",
      options: ["`A + B`", "`A · B`", "`A′ · B′`", "`A′ + B′`"],
      explanation: "NOR gir `(A+B)′`, og NOT-en snur den tilbake: `((A+B)′)′ = A + B`. Alternativ 2 ville krevd at den første porten var en NAND. Alternativ 3 er NOR-utgangen selv, altså svaret uten den siste inverteringen. Alternativ 4 er NAND, som hverken port 1 eller port 2 lager.",
    },
    {
      question: "Hva blir `(A·B + C)′` etter De Morgan?",
      options: ["`(A′ + B′)·C′`", "`A′·B′·C′`", "`A′ + B′ + C′`", "`(A′·B′) + C′`"],
      explanation: "Bruk loven utenfra og inn: ytterst er det en OR, så den blir `(A·B)′ · C′`, og deretter blir `(A·B)′` til `A′ + B′`. Alternativ 2 bytter OR-en i midten til AND. Alternativ 3 lar begge operatorene stå som OR og ville passet til `(A·B·C)′`. Alternativ 4 beholder OR-en mellom leddene i stedet for å bytte den.",
    },
  ],
  'in1020-2-3': [
    {
      question: "Utgangskolonnen er `1 0 0 1` for radene 00, 01, 10, 11. Hvilken port er det?",
      options: ["XNOR", "XOR", "NOR", "NAND"],
      explanation: "To ettall, og de står i endene — altså 1 når inngangene er like, som er XNOR. XOR har de to ettallene i midten. NOR har bare ett ettall, øverst. NAND har tre ettall, med nullen nederst.",
    },
    {
      question: "Utgangskolonnen er `1 1 1 0` for radene 00, 01, 10, 11. Hvilken port er det?",
      options: ["NAND", "OR", "NOR", "XNOR"],
      explanation: "Tre ettall, og den ene nullen står nederst i raden der begge inngangene er 1 — det er AND invertert, altså NAND. OR har også tre ettall, men nullen står øverst. NOR har ett ettall. XNOR har to.",
    },
    {
      question: "Utgangskolonnen er `1 0 0 0`. Hvilken port er det?",
      options: ["NOR", "AND", "NAND", "XOR"],
      explanation: "Ett ettall, og det står øverst i raden der begge er 0 — det er NOR. AND har også ett ettall, men nederst. NAND har tre ettall. XOR har to ettall, i midten.",
    },
    {
      question: "Hva er første steg når du skal løse en F1-oppgave om ekvivalente uttrykk?",
      options: ["Regn ut kretsens F én gang, før du ser på alternativene", "Les alle alternativene og velg det som ser mest ut som kretsen", "Sett opp sannhetstabellen for hvert av de fire alternativene", "Forenkl alternativene så mye som mulig, ett etter ett"],
      explanation: "Ett utregnet svar og deretter fire vurderinger er både raskest og sikrest. Alternativ 2 er gjetting, som er nettopp det formatet straffer. Alternativ 3 er fire ganger arbeidet du trenger. Alternativ 4 gjør deg avhengig av alternativenes form i stedet for av kretsens funksjon.",
    },
    {
      question: "Hvor mange rader trenger du for å avvise et alternativ som ikke er ekvivalent med kretsen?",
      options: ["Én rad der de to gir ulikt svar", "Alle radene i sannhetstabellen", "Minst tre rader, for å utelukke tilfeldigheter", "Halvparten av radene, altså fire av åtte"],
      explanation: "Én motrad er et fullgodt avvisningsbevis. Alternativ 2 beskriver kravet for å godta et alternativ, ikke for å avvise det. Alternativ 3 og 4 er tall uten logisk grunnlag — logikk har ingen tilfeldigheter.",
    },
    {
      question: "En krets: port 1 er NAND med A og B og gir P; port 2 er OR med P og C og gir Q; port 3 er NOT med Q og gir F. Hva er `F` forenklet?",
      options: ["`A·B·C′`", "`A·B + C′`", "`(A + B)·C′`", "`A′·B′·C′`"],
      explanation: "`F = ((A·B)′ + C)′`, og De Morgan gir `((A·B)′)′ · C′ = A·B·C′`. Alternativ 2 bytter den siste AND-en til en OR. Alternativ 3 bytter den første AND-en til en OR. Alternativ 4 inverterer også A og B, som den doble inverteringen nettopp opphever.",
    },
    {
      question: "Hva blir `X·(X + C)` forenklet?",
      options: ["`X`", "`X·C`", "`X + C`", "`C`"],
      explanation: "Absorpsjon: er X lik 0 er produktet 0, og er X lik 1 er parentesen også 1. Utgangen følger X. Alternativ 2 er den vanlige feilen der man fjerner feil ledd. Alternativ 3 og 4 lar C stå igjen, men C har ingen innflytelse her.",
    },
    {
      question: "Hva blir `A·(A′ + B)` forenklet?",
      options: ["`A·B`", "`A`", "`A + B`", "`B`"],
      explanation: "Gang inn: `A·A′ + A·B`, og `A·A′ = 0`, så bare `A·B` står igjen. Alternativ 2 er svaret på `A·(A + B)`, altså vanlig absorpsjon uten inverteringen. Alternativ 3 hører til en OR-form. Alternativ 4 glemmer at A også må være 1.",
    },
    {
      question: "Hva blir `(A + B)·(A + B′)` forenklet?",
      options: ["`A`", "`A + B`", "`A·B`", "`B`"],
      explanation: "Den distributive loven OR over AND baklengs gir `A + B·B′ = A + 0 = A`. Alternativ 2 er fella «B står i begge parentesene, så B blir med» — men B og B′ slår hverandre ut. Alternativ 3 og 4 lar B bli stående på andre måter, med samme feil.",
    },
    {
      question: "Hva gir en NOR-port der begge inngangene er koblet til signalet B?",
      options: ["`B′` — porten virker som en inverter", "`B` — signalet går uendret gjennom", "Konstant 0, uansett verdien på B", "Konstant 1, uansett verdien på B"],
      explanation: "`(B + B)′ = B′`, siden `B + B = B`. Alternativ 2 glemmer boblen, som er hele forskjellen mellom OR og NOR. Alternativ 3 og 4 ville krevd konstant utgang, men porten gir 1 for `B = 0` og 0 for `B = 1`.",
    },
    {
      question: "En krets: port 1 er OR med A og B og gir P; port 2 er NOT med C og gir Q; port 3 er AND med P og Q og gir F. Hvilket uttrykk er lik `F`?",
      options: ["`A·C′ + B·C′`", "`A + B + C′`", "`A′·B′ + C`", "`A·B·C′`"],
      explanation: "`F = (A + B)·C′`, og den distributive loven gir `A·C′ + B·C′`. Alternativ 2 bytter AND-en til OR. Alternativ 3 er kretsens invertering, `F′`, som er gal i hver eneste rad. Alternativ 4 bytter den første OR-en til AND.",
    },
    {
      question: "Hva blir `(A + B·C)′` etter De Morgan?",
      options: ["`A′·(B′ + C′)`", "`A′ + B′·C′`", "`A′·B′·C′`", "`A′ + B′ + C′`"],
      explanation: "Ytterst er det en OR, så den blir `A′ · (B·C)′`, og `(B·C)′` blir `B′ + C′`. Alternativ 2 lar den ytterste operatoren stå som OR. Alternativ 3 gjør begge lagene til AND. Alternativ 4 ville passet til `(A·B·C)′`.",
    },
    {
      question: "Et alternativ inneholder et ledd mer enn kretsens uttrykk, for eksempel `B + A′·C + B·C` mot `B + A′·C`. Hva betyr det?",
      options: ["Alternativet kan godt være riktig — leddet `B·C` absorberes av `B`", "Alternativet er alltid galt, siden det har flere ledd enn kretsen", "Alternativet beskriver en krets med flere porter og dermed en annen funksjon", "Alternativet er riktig bare i de radene der `C` er lik 0"],
      explanation: "`B + B·C = B` ved absorpsjon, så det ekstra leddet endrer ingenting. Alternativ 2 gjør lengde til et argument, som det ikke er. Alternativ 3 forveksler antall porter med funksjon. Alternativ 4 er feil fordi ekvivalensen gjelder i alle rader.",
    },
    {
      question: "En krets forenkler til `F = A·B′`, mens portlisten også har `C` som inngang. Hva betyr det?",
      options: ["`C` har ingen innflytelse på utgangen i noen rad", "`C` må være 1 for at kretsen skal virke", "Forenklingen er feil — alle innganger må stå igjen", "`C` påvirker utgangen bare når `A` og `B` er like"],
      explanation: "Faller en variabel bort i forenklingen, gir kretsen samme utgang uansett hva den variabelen er. Alternativ 2 og 4 gir C en rolle den ikke har. Alternativ 3 er feil: det er helt vanlig at en krets har innganger uten innflytelse, og det er ofte poenget med oppgaven.",
    },
    {
      question: "Hva er `(A ⊕ B) ⊕ B` lik?",
      options: ["`A`", "`B`", "`A ⊕ B`", "Konstant 0"],
      explanation: "XOR to ganger med samme signal opphever seg selv, akkurat som dobbel invertering. Kontroll: `A = 1, B = 1` gir `(0) ⊕ 1 = 1 = A`. Alternativ 2 og 3 stemmer ikke i den raden. Alternativ 4 ville krevd at uttrykket var `A ⊕ A`.",
    },
    {
      question: "Hva er `A ⊕ A′` lik?",
      options: ["Konstant 1", "Konstant 0", "`A`", "`A′`"],
      explanation: "XOR gir 1 når inngangene er ulike, og A og A′ er alltid ulike. Alternativ 2 er svaret på `A ⊕ A`, der inngangene alltid er like. Alternativ 3 og 4 ville krevd at utgangen varierte med A, men den er konstant.",
    },
    {
      question: "En krets: port 1 er NAND med A og B og gir P; port 2 er AND med P og C og gir F. Hva er `F`?",
      options: ["`(A′ + B′)·C`", "`A′·B′·C`", "`(A·B)·C`", "`A′ + B′ + C`"],
      explanation: "`F = (A·B)′·C`, og De Morgan gir `(A′ + B′)·C`. Alternativ 2 bytter OR-en i midten til AND, altså `(A+B)′·C`. Alternativ 3 glemmer inverteringen fra NAND-porten. Alternativ 4 bytter den siste AND-en til en OR.",
    },
    {
      question: "Hvor mange av de åtte radene gir 1 for uttrykket `A·B·C′`?",
      options: ["Én", "To", "Tre", "Fire"],
      explanation: "Et rent AND-ledd med alle tre variablene krever én bestemt kombinasjon, her `A = 1, B = 1, C = 0`. Alternativ 2 ville stemt for et ledd med bare to variabler, som `A·B`. Alternativ 3 og 4 ville krevd flere ledd eller en OR.",
    },
    {
      question: "Hvilken påstand om sant/usant-matriser stemmer?",
      options: ["Alle radene kan godt være sanne — fordelingen er ingen ledetråd", "Minst én rad er alltid usann, ellers ville oppgaven vært meningsløs", "Antall sanne og usanne rader er alltid likt fordelt", "Rekkefølgen er alltid sortert med de sanne radene først"],
      explanation: "Det finnes ingen skjult regel om fordelingen; hver rad vurderes for seg. Alternativ 2, 3 og 4 beskriver mønstre man tror man ser, og å bruke dem som ledetråd koster poeng i begge retninger under negativ poenggiving.",
    },
    {
      question: "Mellomsignalet `P` står som inngang på to ulike linjer i portlisten. Hvordan behandler du det?",
      options: ["Skriv uttrykket for P én gang, og bruk samme uttrykk begge steder", "Regn ut P på nytt for hver port som bruker den", "Del verdien av P i to, én halvpart til hver port", "Bruk P på den første linjen, og inverter den på den andre"],
      explanation: "Forgrening betyr bare at ledningen er delt, og alle mottakerne ser samme verdi. Alternativ 2 er unødvendig og fører ofte til at en invertering mistes underveis. Alternativ 3 gir ingen mening for logiske verdier. Alternativ 4 finner opp en invertering som ikke står i listen.",
    },
    {
      question: "Hvilket uttrykk er lik `A + B′·C`?",
      options: ["`(A + B′)·(A + C)`", "`A·(B′ + C)`", "`A + B·C`", "`A ⊕ B′·C`"],
      explanation: "Distributiv lov, OR over AND — den som ikke finnes i tallregning. Alternativ 2 bytter den ytterste OR-en til AND; motrad `A = 1, B = 1, C = 0`. Alternativ 3 glemmer inverteringen på B. Alternativ 4 bytter OR til XOR, som skiller lag når begge leddene er 1.",
    },
    {
      question: "Hva blir `A·B + A′·B` forenklet?",
      options: ["`B`", "`A`", "`A·B`", "`A + B`"],
      explanation: "Sett B utenfor: `B·(A + A′) = B·1 = B`. Alternativ 2 fjerner feil variabel — det er A som slår seg selv ut. Alternativ 3 beholder A i svaret. Alternativ 4 bytter operatoren til OR i sluttsvaret.",
    },
    {
      question: "En portliste gir `F = A·(B′ + C)`. Hvilket uttrykk er dette IKKE lik?",
      options: ["`A + B′·C`", "`A·B′ + A·C`", "`(B′ + C)·A`", "`A·B′ + A·C + A·B′·C`"],
      explanation: "Alternativ 1 har byttet den ytterste AND-en til OR; motrad er `A = 0, B = 0, C = 1`, der uttrykket gir 0 og alternativet 1. Alternativ 2 er distributiv lov. Alternativ 3 er bare kommutativitet. Alternativ 4 har et ekstra ledd som absorberes av `A·B′`.",
    },
    {
      question: "Hva er kjennetegnet på en distraktor som er kretsens inverterte uttrykk?",
      options: ["Den gir motsatt svar i hver eneste rad", "Den gir riktig svar i omtrent halvparten av radene", "Den mangler alltid én av inngangsvariablene", "Den er alltid kortere enn kretsens eget uttrykk"],
      explanation: "`F′` er per definisjon motsatt av `F` overalt, og derfor holder det å sjekke én rad du kjenner. Alternativ 2 beskriver en tilfeldig gal distraktor, ikke den inverterte. Alternativ 3 og 4 er kjennetegn den inverterte formen ikke har — den har som regel de samme variablene og omtrent samme lengde.",
    },
    {
      question: "En krets: port 1 er NOT med A og gir P; port 2 er AND med P og C og gir Q; port 3 er OR med Q og B og gir F. Hva er `F`?",
      options: ["`A′·C + B`", "`A′·(C + B)`", "`A·C + B`", "`(A′ + C)·B`"],
      explanation: "`P = A′`, `Q = A′·C`, og den siste OR-en gir `A′·C + B`. Alternativ 2 ganger A′ inn i B også, noe kretsen ikke gjør. Alternativ 3 glemmer inverteringen. Alternativ 4 bytter den siste OR-en til en AND.",
    },
    {
      question: "Hva er et fornuftig tidsbudsjett for en F1-oppgave med kretsanalyse og fire alternativer?",
      options: ["Rundt fire minutter: ett utregnet svar pluss fire vurderinger", "Under ett minutt, siden svaret som regel kjennes igjen", "Rundt femten minutter, siden hvert alternativ må ha egen tabell", "Så lang tid som trengs — tid er ikke en knapp ressurs på eksamen"],
      explanation: "Propagering av fire porter tar under tre minutter, og hver vurdering rundt tretti sekunder. Alternativ 2 forutsetter gjenkjenning i stedet for utregning. Alternativ 3 gjør fire ganger nødvendig arbeid. Alternativ 4 overser at eksamen har fire seksjoner som hver må rekkes.",
    },
  ],
  'in1020-2-4': [
    {
      question: "Hva kjennetegner von Neumann-arkitekturen?",
      options: ["Kode og data ligger i det samme minnet", "Kode og data ligger i hvert sitt adskilte minne", "Programmet er koblet fast i maskinvaren med ledninger", "Prosessoren har innebygd lagring for hele programmet"],
      explanation: "Instruksjonene lagres som tall i det vanlige minnet, og det er derfor selvmodifiserende kode er mulig. Alternativ 2 beskriver en annen byggemåte med adskilte minner. Alternativ 3 beskriver de aller første regnemaskinene, som måtte kobles om fysisk. Alternativ 4 er feil fordi CPU-en bare har plass til et titall registre.",
    },
    {
      question: "Hvilke tre deler finnes alltid inne i en CPU?",
      options: ["ALU, kontrollenhet og registre", "ALU, hovedminne og registre", "Kontrollenhet, hovedminne og databuss", "ALU, kontrollenhet og harddisk"],
      explanation: "De tre er regneverket, styringen og det raske korttidsminnet. Alternativ 2 og 3 plasserer hovedminnet inne i CPU-en, men RAM ligger på egne brikker utenfor. Alternativ 4 gjør en lagringsenhet til en del av prosessoren.",
    },
    {
      question: "Hvilken påstand om ALU-en er sann?",
      options: ["Den ligger inne i CPU-en og gjør både aritmetikk og logikk", "Den ligger utenfor CPU-en og kobles til over databussen", "Den ligger inne i CPU-en, men gjør bare aritmetikk", "Den ligger utenfor CPU-en og henter instruksjoner fra minnet"],
      explanation: "Navnet er «aritmetisk-logisk enhet», og den er en av CPU-ens tre faste deler. Alternativ 2 og 4 er varianter av den faste usanne påstanden «ALU-en ligger utenfor CPU-en». Alternativ 3 halverer oppgaven hennes: AND, OR og XOR bit for bit hører også hjemme der.",
    },
    {
      question: "Hvorfor er et register raskere enn en celle i hovedminnet?",
      options: ["Det ligger på prosessorbrikken og nås uten å gå over bussene", "Det er bygd av RAM-celler med høyere klokkefrekvens", "Det lagrer færre bit og trenger derfor mindre strøm", "Det ligger nærmere harddisken og slipper å vente på den"],
      explanation: "Nærheten til ALU-en og fraværet av bussturen er hele forklaringen. Alternativ 2 gjentar den faste usanne påstanden om at registre er bygd av RAM. Alternativ 3 forveksler strømforbruk med tilgangstid. Alternativ 4 har ingen sammenheng med hvor et register ligger.",
    },
    {
      question: "Hvilken buss forteller minnet hvilken celle det gjelder?",
      options: ["Adressebussen", "Databussen", "Kontrollbussen", "Systembussen samlet"],
      explanation: "Adressebussen bærer *hvor*; den er enveis fra prosessoren til minnet. Alternativ 2 bærer *hva*, altså selve verdien. Alternativ 3 bærer styresignaler som «les» og «skriv». Alternativ 4 er fellesnavnet på alle tre og er ikke et presist svar på spørsmålet.",
    },
    {
      question: "Hvorfor er databussen toveis?",
      options: ["Fordi de samme ledningene brukes både ved lesing og skriving", "Fordi adressen sendes tilbake til prosessoren etter hver overføring", "Fordi klokkesignalet må gå begge veier mellom delene", "Fordi to enheter alltid overfører data samtidig"],
      explanation: "Ved lesing kommer verdien fra minnet, ved skriving går den til minnet — samme ledninger, styrt av kontrollbussen. Alternativ 2 er feil: adressen går bare én vei. Alternativ 3 blander inn klokka, som er et eget signal. Alternativ 4 er feil fordi bussen bare kan brukes til én overføring om gangen.",
    },
    {
      question: "Hvor mange celler kan en maskin adressere med 16 adresseledninger?",
      options: ["65 536", "32 768", "16 384", "131 072"],
      explanation: "$2^{16} = 65\\,536$, siden hver ledning kan være 0 eller 1. Alternativ 2 er $2^{15}$, altså én ledning for lite. Alternativ 3 er $2^{14}$. Alternativ 4 er $2^{17}$, altså én for mye.",
    },
    {
      question: "Hvilken påstand om klokkesignalet er sann?",
      options: ["Det genereres fortløpende av en krets og lagres ikke noe sted", "Det lagres i RAM mellom hver sykel og hentes derfra", "Det lagres i et eget register inne i kontrollenheten", "Det bestemmer hvilken operasjon prosessoren skal utføre"],
      explanation: "Klokka er en oscillator som gir pulser i fast takt. Alternativ 2 er en av de fem faste usanne påstandene. Alternativ 3 er samme feil i annen innpakning — et signal som veksler kontinuerlig, kan ikke lagres. Alternativ 4 forveksler *når* med *hva*: hva som skjer, avgjør kontrollenheten.",
    },
    {
      question: "Hvor mange en-bits ALU-er trengs for å bygge en 64-bits ALU?",
      options: ["64", "65", "63", "128"],
      explanation: "Én enhet per bit, og menten er allerede en del av hver fulladder. Alternativ 2 er den faste usanne påstanden, konstruert for å friste deg til å telle en ekstra for menten. Alternativ 3 mangler en enhet. Alternativ 4 dobler uten grunn.",
    },
    {
      question: "Hva gir en halvadder ut?",
      options: ["Sumbitet og menten ut, men den har ingen mente inn", "Sumbitet og menten inn, men den har ingen mente ut", "Bare sumbitet, siden menten håndteres av kontrollenheten", "Sumbitet, menten inn og menten ut, altså tre signaler"],
      explanation: "Halvadderen har to innganger og to utganger: sum via XOR og mente ut via AND. Alternativ 2 bytter om inngang og utgang. Alternativ 3 lar kontrollenheten gjøre noe den ikke gjør. Alternativ 4 beskriver en fulladder, som nettopp har en mente inn i tillegg.",
    },
    {
      question: "Hva er sumbitet i en fulladder?",
      options: ["`A ⊕ B ⊕ C_inn`", "`A · B · C_inn`", "`A + B + C_inn`", "`(A ⊕ B) · C_inn`"],
      explanation: "Sumbitet er 1 når et odde antall av de tre inngangene er 1, og det er nettopp XOR av alle tre. Alternativ 2 gir 1 bare når alle tre er 1. Alternativ 3 er en OR og gir 1 så snart én er 1. Alternativ 4 mangler tilfellet der bare `C_inn` er 1.",
    },
    {
      question: "Hva er menten ut av en fulladder?",
      options: ["1 når minst to av de tre inngangene er 1", "1 når nøyaktig én av de tre inngangene er 1", "1 bare når alle tre inngangene er 1", "1 når et odde antall av inngangene er 1"],
      explanation: "`A·B + A·C_inn + B·C_inn` er nettopp «minst to». Alternativ 2 beskriver et tilfelle der summen er 1 og det ikke er noen mente. Alternativ 3 utelater radene med to ettall, som også gir mente. Alternativ 4 beskriver sumbitet, ikke menten.",
    },
    {
      question: "Hvordan regner en prosessor ut `A − B`?",
      options: ["Den legger sammen A og det inverterte B, med mente inn lik 1", "Den bruker en egen subtraksjonskrets ved siden av adderen", "Den legger sammen A og det inverterte B, med mente inn lik 0", "Den inverterer både A og B og legger dem sammen"],
      explanation: "`A − B = A + ¬B + 1`, og ett-tallet kommer inn som mente inn på nederste posisjon. Alternativ 2 er feil: maskinen har én adder, brukt på to måter. Alternativ 3 gir ener-komplementet og svarer én for lite. Alternativ 4 inverterer feil operand i tillegg.",
    },
    {
      question: "Hva er `100 − 36` regnet som addisjon i åtte bit?",
      options: ["`01000000₂`, altså 64", "`00111111₂`, altså 63", "`01000001₂`, altså 65", "`10111111₂`, altså 191"],
      explanation: "`01100100` pluss invertert `36` (`11011011`) pluss mente inn 1 gir `01000000`, og `100 − 36 = 64`. Alternativ 2 er svaret hvis du glemmer mente inn og bare bruker ener-komplementet. Alternativ 3 er én for mye. Alternativ 4 er invertert `36` alene, uten addisjonen.",
    },
    {
      question: "Hva består instruksjonssyklusen av?",
      options: ["Hent, tolk og utfør", "Les, skriv og lagre", "Hent, lagre og avslutt", "Tolk, utfør og lagre"],
      explanation: "Kontrollenheten henter instruksjonen fra cellen programtelleren peker på, finner ut hva den betyr, og setter delene opp til å utføre den. Alternativ 2, 3 og 4 blander inn minneoperasjoner som er *deler* av utførelsen, ikke selve trinnene i syklusen.",
    },
    {
      question: "Hva holder programtelleren?",
      options: ["Adressen til neste instruksjon", "Selve instruksjonen som utføres akkurat nå", "Antall instruksjoner som er utført så langt", "Resultatet av forrige regneoperasjon"],
      explanation: "Programtelleren peker på hvor neste instruksjon ligger, og den økes etter hver instruksjon med mindre et hopp setter den. Alternativ 2 er instruksjonsregisteret. Alternativ 3 er en teller ingen prosessor fører. Alternativ 4 er akkumulatoren eller et resultatregister.",
    },
    {
      question: "Hva øker en pipeline?",
      options: ["Antall instruksjoner som blir ferdige per tidsenhet", "Farten på den enkelte instruksjonen gjennom prosessoren", "Antall trinn hver enkelt instruksjon må gjennom", "Klokkefrekvensen prosessoren kan kjøre på"],
      explanation: "Pipeline overlapper trinnene i flere instruksjoner, slik at flere blir ferdige per sekund. Alternativ 2 er den faste feilslutningen: hver instruksjon går gjennom like mange trinn som før. Alternativ 3 er feil fordi antall trinn er uendret. Alternativ 4 blander sammen to helt ulike ytelsesgrep.",
    },
    {
      question: "En prosessor har tre trinn per instruksjon, ett trinn per sykel. Hvor mange sykler tar seks instruksjoner med pipeline, fra tomt bånd?",
      options: ["8", "18", "6", "9"],
      explanation: "Formelen er `k + (n − 1)` med `k = 3` og `n = 6`, altså `3 + 5 = 8`. Alternativ 2 er svaret uten pipeline, `6 × 3`. Alternativ 3 glemmer de to syklene det tar å fylle båndet. Alternativ 4 teller fyllingen som tre ekstra i stedet for to.",
    },
    {
      question: "Hvilken av disse påstandene er USANN?",
      options: ["Teknologiutviklingen har gitt færre transistorer per brikke", "Registre er raskere enn hovedminnet", "Kode og data ligger i samme minne i von Neumann-arkitekturen", "ALU-en gjør både aritmetiske og logiske operasjoner"],
      explanation: "Transistorene har blitt mindre, og derfor får det plass flere av dem — påstanden snur utviklingen. Alternativ 2, 3 og 4 er alle sanne og hører til de påstandene som ligner på fellene uten å være det.",
    },
    {
      question: "Hva gjør kontrollenheten?",
      options: ["Henter og tolker instruksjoner og styrer de andre delene", "Utfører addisjonene og de logiske operasjonene", "Lagrer verdiene prosessoren arbeider med akkurat nå", "Genererer klokkesignalet som gir maskinen takt"],
      explanation: "Kontrollenheten dirigerer rekkefølgen og avgjør om en celle behandles som instruksjon eller data. Alternativ 2 er ALU-ens oppgave. Alternativ 3 er registrenes. Alternativ 4 er oscillatorkretsens, og klokka bestemmer bare *når*, ikke *hva*.",
    },
    {
      question: "Hva avgjør om innholdet i en minnecelle behandles som en instruksjon?",
      options: ["Kontrollenheten, ut fra hvilken adresse programtelleren peker på", "En egen markørbit som er lagret sammen med hver celle", "Minnebrikken selv, som skiller kodeceller fra dataceller", "Databussen, som sender kode og data på ulike ledninger"],
      explanation: "Cellen bærer ingen informasjon om hva den «er»; det er hentefasen som gjør et tall til en instruksjon. Alternativ 2 og 3 finner opp et skille arkitekturen ikke har. Alternativ 4 er feil fordi databussen er den samme uansett hva som fraktes.",
    },
    {
      question: "Hvilken sammenheng gjelder mellom klokkefrekvens og ytelse?",
      options: ["Ytelsen avhenger både av frekvensen og av antall sykler per oppgave", "Høyere frekvens gir alltid en raskere maskin, uansett annet", "Frekvensen har ingen betydning for hvor lang tid en oppgave tar", "Ytelsen er alltid lik frekvensen delt på antall kjerner"],
      explanation: "En maskin som bruker færre sykler per instruksjon, kan vinne selv med lavere frekvens. Alternativ 2 overser sykeltellingen helt. Alternativ 3 går for langt i motsatt retning: frekvensen setter sykellengden. Alternativ 4 er en oppdiktet formel.",
    },
    {
      question: "Hva er forskjellen på gjennomstrømning og forsinkelse?",
      options: ["Gjennomstrømning er ferdige oppgaver per tid; forsinkelse er tid per oppgave", "Gjennomstrømning er tid per oppgave; forsinkelse er ferdige oppgaver per tid", "De to måler det samme, bare i ulike enheter for samme maskin", "Gjennomstrømning gjelder minnet, mens forsinkelse gjelder prosessoren"],
      explanation: "Pipeline øker det første og lar det andre stå. Alternativ 2 bytter om de to definisjonene. Alternativ 3 overser at pipeline endrer den ene uten den andre. Alternativ 4 knytter begrepene til komponenter, men begge gjelder enhver behandling.",
    },
    {
      question: "Hva skjer med menten mellom to fulladdere i en flerbits adder?",
      options: ["Menten ut fra én posisjon blir mente inn på den neste", "Menten ut fra én posisjon lagres i et register til slutt", "Hver posisjon regner uavhengig, og mentene legges sammen til slutt", "Menten går motsatt vei, fra øverste mot nederste posisjon"],
      explanation: "Kjeden er nøyaktig den samme som når du fører mente for hånd, fra høyre mot venstre. Alternativ 2 finner opp et register. Alternativ 3 er feil: uten kjeden ville svaret bli galt i alle rader med mente. Alternativ 4 snur retningen, men menten går alltid mot høyere posisjoner.",
    },
  ],
  'in1020-2-5': [
    {
      question: "Hvilken rekkefølge har minnehierarkiet fra raskest til tregest?",
      options: ["Register, mellomlager, hovedminne, disk", "Mellomlager, register, hovedminne, disk", "Register, hovedminne, mellomlager, disk", "Hovedminne, register, mellomlager, disk"],
      explanation: "Registeret ligger inne i CPU-en og er raskest; disken er tregest med god margin. Alternativ 2 setter mellomlageret foran registeret. Alternativ 3 og 4 plasserer hovedminnet for høyt — «hoved» sier noe om rollen, ikke om farten.",
    },
    {
      question: "Hva koster et treff i mellomlageret, i denne bokas konvensjon?",
      options: ["1 klokkesykel", "0 klokkesykler — et treff er gratis", "Like mye som bom-kostnaden oppgir", "Halvparten av bom-kostnaden"],
      explanation: "Et treff er billig, men ikke gratis, og å glemme treffenes bidrag er den nest vanligste feilen i sjangeren. Alternativ 2 gir et svar som er for lavt. Alternativ 3 fjerner hele poenget med mellomlageret. Alternativ 4 er en oppdiktet regel.",
    },
    {
      question: "Et program utfører 3000 instruksjoner, 50 % bom, bom-kostnad 4 sykler. Hvor mange klokkesykler?",
      options: ["7500", "6000", "12 000", "9000"],
      explanation: "1500 treff à 1 sykel gir 1500, og 1500 bom à 4 sykler gir 6000, til sammen 7500. Alternativ 2 er bommenes bidrag alene, uten treffene. Alternativ 3 regner som om alle 3000 var bom. Alternativ 4 legger 3000 treffsykler til bommene i stedet for 1500.",
    },
    {
      question: "Et program utfører 4000 instruksjoner, 10 % bom, bom-kostnad 12 sykler. Hvor mange klokkesykler?",
      options: ["8400", "4800", "48 000", "43 600"],
      explanation: "3600 treff à 1 sykel gir 3600, og 400 bom à 12 sykler gir 4800, til sammen 8400. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alle var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Bom-raten er 40 %. Hvor stor andel av oppslagene er treff?",
      options: ["60 %", "40 %", "80 %", "20 %"],
      explanation: "Treffrate og bom-rate summerer alltid til 100 %. Alternativ 2 gjentar bom-raten som om den var treffraten — nettopp ombyttingsfella. Alternativ 3 og 4 svarer til helt andre rater og har ingen sammenheng med oppgitte 40 %.",
    },
    {
      question: "Et program utfører 5000 instruksjoner med treffrate 80 % og bom-kostnad 20 sykler. Hvor mange klokkesykler?",
      options: ["24 000", "20 000", "100 000", "81 000"],
      explanation: "80 % treff betyr 4000 treff à 1 sykel og 1000 bom à 20 sykler: 4000 + 20 000 = 24 000. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alle var bom. Alternativ 4 har byttet om treff og bom, altså 1000 treff og 4000 bom.",
    },
    {
      question: "Hva er gjennomsnittlig antall sykler per instruksjon ved 10 % bom og bom-kostnad 20?",
      options: ["2,9", "2,0", "3,0", "20,0"],
      explanation: "`0,90·1 + 0,10·20 = 0,9 + 2 = 2,9` sykler, uavhengig av programlengden. Alternativ 2 glemmer treffenes bidrag. Alternativ 3 runder feil vei og bommer på 0,9-leddet. Alternativ 4 er bom-kostnaden selv, altså snittet hvis alt var bom.",
    },
    {
      question: "Hvilken kontroll kan du gjøre på gjennomsnittet per instruksjon?",
      options: ["Det skal ligge mellom 1 sykel og bom-kostnaden", "Det skal alltid være større enn bom-kostnaden", "Det skal alltid ligge under 1 sykel per instruksjon", "Det skal være lik bom-raten ganget med antall instruksjoner"],
      explanation: "Er alt treff, er snittet 1; er alt bom, er det bom-kostnaden — og virkeligheten ligger mellom. Alternativ 2 og 3 gir grenser som er logisk umulige. Alternativ 4 blander sammen et snitt med et antall og gir feil enhet.",
    },
    {
      question: "Hva er tidsmessig lokalitet?",
      options: ["At en adresse som nettopp er brukt, trolig brukes igjen snart", "At naboadressene til en brukt adresse trolig brukes snart", "At adresser brukes i tilfeldig rekkefølge over tid", "At tiden et oppslag tar, avhenger av tidspunktet på dagen"],
      explanation: "Løkkevariabelen er standardeksempelet: samme adresse brukes i hver runde. Alternativ 2 beskriver romlig lokalitet, den andre formen. Alternativ 3 beskriver fravær av lokalitet. Alternativ 4 er ikke et faglig begrep i det hele tatt.",
    },
    {
      question: "Hvorfor henter maskinen en hel blokk ved et bom, og ikke bare den ene verdien?",
      options: ["Fordi romlig lokalitet gjør det sannsynlig at nabobytene trengs snart", "Fordi hovedminnet ikke kan levere mindre enn en blokk om gangen", "Fordi mellomlageret må fylles helt opp før det kan brukes", "Fordi programmet ber om en blokk i selve instruksjonen"],
      explanation: "Turen ut er allerede betalt for, og nabobytene brukes som regel like etter. Alternativ 2 gjør en designavgjørelse til en fysisk begrensning. Alternativ 3 er feil: mellomlageret brukes fra første innlegg. Alternativ 4 er feil fordi mellomlageret er usynlig for programmet.",
    },
    {
      question: "Et program utfører 1200 instruksjoner, 25 % bom, bom-kostnad 16 sykler. Hvor mange klokkesykler?",
      options: ["5700", "4800", "19 200", "14 700"],
      explanation: "900 treff à 1 sykel gir 900, og 300 bom à 16 sykler gir 4800, til sammen 5700. Alternativ 2 er bommenes bidrag alene — tallet som står midt i din egen utregning. Alternativ 3 regner som om alle var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Hvilket feiltall får du hvis du bytter om treff og bom i regningen?",
      options: ["Et tall av samme størrelsesorden som det riktige", "Et tall som alltid er nøyaktig dobbelt så stort", "Et tall som alltid er mindre enn antall instruksjoner", "Et tall som er identisk med det riktige svaret"],
      explanation: "Det er nettopp fordi ombyttingen gir et rimelig tall at den er den vanligste feilen. Alternativ 2 gjelder ikke generelt. Alternativ 3 er feil siden bommene ganges med en kostnad større enn 1. Alternativ 4 stemmer bare i det ene tilfellet der bom-raten er nøyaktig 50 %.",
    },
    {
      question: "En maskin kjører 8000 instruksjoner med bom-kostnad 20 sykler. Bom-raten går fra 10 % til 5 %. Hvor mange sykler spares?",
      options: ["7600", "8000", "11 600", "15 600"],
      explanation: "`23 200 − 15 600 = 7600` sykler. Alternativ 2 er reduksjonen i bom-sykler alene (`16 000 − 8 000`) — den glemmer at antall treff samtidig øker med 400, og at de 400 treffene koster 400 sykler. Alternativ 3 ville tilsvart en halvering av kjøretida, som ikke skjer fordi treffene fortsatt koster. Alternativ 4 er den nye kjøretida, ikke besparelsen.",
    },
    {
      question: "Halveres kjøretida når bom-raten halveres?",
      options: ["Nei — treffenes sykler forsvinner ikke, så nedgangen blir mindre", "Ja — kjøretida er direkte proporsjonal med bom-raten", "Nei — kjøretida blir mer enn halvert, siden bommene dominerer", "Ja, men bare når bom-kostnaden er større enn 10 sykler"],
      explanation: "Med 8000 instruksjoner og kostnad 20 falt tida fra 23 200 til 15 600, altså omtrent 32,8 %. Alternativ 2 overser leddet fra treffene. Alternativ 3 går for langt motsatt vei. Alternativ 4 finner opp en terskel som ikke finnes.",
    },
    {
      question: "Ved 20 % bom og bom-kostnad 20 sykler: hvor stor andel av syklene skyldes bom?",
      options: ["Over 80 %", "Nøyaktig 20 %", "Omtrent 50 %", "Under 10 %"],
      explanation: "Med 5000 instruksjoner blir det 20 000 av 24 000 sykler, altså over 83 %. Alternativ 2 forveksler andelen oppslag med andelen tid. Alternativ 3 og 4 undervurderer hvor mye dyrere et bom er enn et treff.",
    },
    {
      question: "Hvem styrer hva som ligger i mellomlageret?",
      options: ["Maskinvaren — mellomlageret er usynlig for programmereren", "Programmereren, med egne instruksjoner for å legge inn data", "Operativsystemet, som fordeler plassen mellom programmene", "Kompilatoren, som velger hvilke variabler som skal ligge der"],
      explanation: "Det finnes ingen instruksjon som sier «legg dette i cachen»; maskinvaren avgjør. Alternativ 2 er den faste feilslutningen. Alternativ 3 og 4 gir styringen til programvare som riktignok kan påvirke minnebruken, men ikke selve mellomlageret.",
    },
    {
      question: "Hvilket av disse minnene er flyktig, altså mister innholdet når strømmen går?",
      options: ["Hovedminnet (RAM)", "Harddisken", "En minnepinne", "En optisk plate"],
      explanation: "RAM er flyktig, sammen med registre og mellomlager, og det er derfor ulagret arbeid forsvinner ved strømbrudd. Alternativ 2, 3 og 4 er varige lagringsmedier som beholder innholdet uten strøm.",
    },
    {
      question: "Et program utfører 900 instruksjoner, en tredjedel bom, bom-kostnad 7 sykler. Hvor mange klokkesykler?",
      options: ["2700", "2100", "6300", "4500"],
      explanation: "600 treff à 1 sykel gir 600, og 300 bom à 7 sykler gir 2100, til sammen 2700. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alle 900 var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Hva forteller feiltallet `n · k` deg om utregningen din?",
      options: ["At bom-raten ikke er brukt i det hele tatt", "At treffenes bidrag er telt to ganger i summen", "At du har delt totalen på antall instruksjoner for tidlig", "At bom-kostnaden er lagt oppå treffsykelen"],
      explanation: "`n · k` betyr at hver eneste instruksjon er regnet som bom, altså at raten er hoppet over. Alternativ 2, 3 og 4 beskriver andre feil som gir helt andre tall — og ingen av dem gir uttrykket `n · k`.",
    },
    {
      question: "Hvordan bør et resultat som ikke går opp i hele tall, oppgis?",
      options: ["Med «omtrent» og et eksplisitt antall desimaler", "Avrundet til nærmeste hele tall, uten kommentar", "Med så mange desimaler kalkulatoren viser", "Som en brøk, siden desimaltall aldri er presise"],
      explanation: "Sensorkravet i regnesjangre er å vise mellomregningen og være presis om avrundingen, for eksempel «≈ 32,8 %». Alternativ 2 skjuler at tallet er avrundet. Alternativ 3 gir falsk presisjon. Alternativ 4 er upraktisk og svarer sjelden til alternativene i oppgaven.",
    },
  ],
  'in1020-2-6': [
    {
      question: "Hvilket nivå ligger høyest i abstraksjonsstigen?",
      options: ["Instruksjon", "Volt", "Transistor", "Logiske verdier"],
      explanation: "Instruksjonen sier hva som skal skje uten å nevne porter, transistorer eller spenninger, og er dermed lengst fra fysikken. Alternativ 2 er det aller laveste nivået. Alternativ 3 og 4 ligger begge nær fysikken, på nivå 5 og 6 av 7.",
    },
    {
      question: "Hvilket nivå ligger lavest i abstraksjonsstigen?",
      options: ["Volt", "Logiske verdier", "Transistor", "Logisk port"],
      explanation: "Volt er den rene fysikken, uten noen tolkning lagt oppå. Alternativ 2 ligger ett hakk over, siden en logisk verdi er en tolkning av spenningen. Alternativ 3 og 4 ligger enda høyere, på nivå 5 og 4.",
    },
    {
      question: "Hva ligger høyest: pipeline eller register?",
      options: ["Pipeline, som organiserer instruksjonene og bruker registrene", "Register, siden det er en mer håndfast komponent enn pipeline", "De ligger på nøyaktig samme nivå i stigen", "Register, siden pipeline bare er en implementasjonsdetalj"],
      explanation: "Det som bruker, ligger over det som brukes: pipeline er nivå 2 og register nivå 3. Alternativ 2 forveksler håndfasthet med abstraksjonsnivå. Alternativ 3 er feil fordi listen har sju adskilte nivåer. Alternativ 4 er riktig om at pipeline er en implementasjonsdetalj, men trekker feil slutning av det.",
    },
    {
      question: "Hva ligger høyest: volt eller logiske verdier?",
      options: ["Logiske verdier, som er en tolkning av spenningen", "Volt, siden fysikken er grunnlaget for alt annet", "De ligger på samme nivå, siden begge beskriver et signal", "Volt, siden det er et måletall med større presisjon"],
      explanation: "Tolkningen ligger alltid over det den tolker, og «over terskelen kaller vi det 1» er nettopp en tolkning. Alternativ 2 forveksler grunnlag med toppnivå — grunnlaget ligger nederst. Alternativ 3 overser at de er to ulike nivåer. Alternativ 4 blander presisjon inn i en rangering som ikke handler om det.",
    },
    {
      question: "Hvilken regel avgjør plasseringen av register i forhold til logisk port?",
      options: ["Byggeregelen: registeret er bygd av porter, altså ligger det over", "Tolkningsregelen: registeret er en tolkning av portens utgang", "Vanskelighetsregelen: porter er lettere å forstå enn registre", "Størrelsesregelen: registeret er større og ligger derfor lavere"],
      explanation: "Er A bygd av B, ligger A over B — det avgjør nivå 1 til 5 i stigen. Alternativ 2 bruker feil regel: tolkningsregelen gjelder forholdet mellom logiske verdier og volt. Alternativ 3 og 4 er regler som ikke finnes.",
    },
    {
      question: "Sorter fra høyest til lavest: transistor, instruksjon, register, volt.",
      options: ["Instruksjon, register, transistor, volt", "Volt, transistor, register, instruksjon", "Instruksjon, transistor, register, volt", "Register, instruksjon, transistor, volt"],
      explanation: "Nivåene er 1, 3, 5 og 7, og de sorteres i den rekkefølgen. Alternativ 2 er hele listen snudd — den vanligste måten å tape en ellers sikker oppgave på. Alternativ 3 bytter om register og transistor. Alternativ 4 setter register over instruksjon.",
    },
    {
      question: "Hvor hører en fulladder hjemme i abstraksjonsstigen?",
      options: ["Over portnivået, siden den er bygd av porter", "Under transistornivået, siden den regner med spenninger", "På samme nivå som volt, siden den håndterer fysiske signaler", "Over instruksjonsnivået, siden den utfører aritmetikk"],
      explanation: "Fulladderen er bygd av XOR-, AND- og OR-porter, og byggeregelen plasserer den ett hakk over dem. Alternativ 2 og 3 plasserer den nær fysikken, men den er en sammensatt krets. Alternativ 4 er feil fordi ingenting ligger over instruksjonsnivået i denne stigen.",
    },
    {
      question: "Hvor hører programtelleren hjemme?",
      options: ["På registernivået — den er et register", "På instruksjonsnivået, siden den handler om instruksjoner", "På portnivået, siden den er bygd av porter", "På pipelinenivået, siden den styrer rekkefølgen"],
      explanation: "Programtelleren er registeret som holder adressen til neste instruksjon, altså nivå 3. Alternativ 2 forveksler hva den peker på med hva den er. Alternativ 3 er sant om hva den er bygd av, men da ville den ligget over portene, ikke på deres nivå. Alternativ 4 gir den kontrollenhetens rolle.",
    },
    {
      question: "En rangeringsoppgave gir fem elementer. Hvor mange skal svaret ditt inneholde?",
      options: ["Fem — du skal ikke fylle inn nivåer som ikke er gitt", "Sju, siden stigen alltid har sju nivåer", "Fem, men med de manglende nivåene nevnt i en fotnote", "Så mange du rekker, siden delvis uttelling gis uansett"],
      explanation: "Du plasserer de gitte elementene i den faste listen og hopper over de nivåene som ikke er representert. Alternativ 2 og 3 legger til noe oppgaven ikke ber om, og under negativ poenggiving koster hver ekstra plassering. Alternativ 4 gjør delvis uttelling til en unnskyldning for å ikke fullføre.",
    },
    {
      question: "Hva er abstraksjon?",
      options: ["Å beskrive noe uten å ta med detaljene i laget under", "Å fjerne de underliggende detaljene helt fra maskinen", "Å gjøre en beskrivelse vanskeligere ved å bruke fagord", "Å måle hvor komplisert et system er å forstå"],
      explanation: "Gasspedalen lar deg styre motoren uten å kjenne forbrenningen — detaljene er skjult, ikke borte. Alternativ 2 er den faste feilslutningen: laget under påvirker fortsatt ytelsen. Alternativ 3 og 4 beskriver noe helt annet enn abstraksjon.",
    },
    {
      question: "Hvilken påstand om abstraksjon og ytelse er sann?",
      options: ["Et skjult lag kan fortsatt påvirke hvor fort programmet går", "Et skjult lag har per definisjon ingen innvirkning på ytelsen", "Ytelsen avgjøres bare av det høyeste abstraksjonsnivået", "Abstraksjon gjør alle programmer like raske uansett minnebruk"],
      explanation: "Et program som bommer i mellomlageret, går tregere selv om programmereren aldri ser mellomlageret. Alternativ 2 og 4 gjør abstraksjonen til en garanti den ikke er. Alternativ 3 overser at ytelse alltid avgjøres av de fysiske lagene.",
    },
    {
      question: "Sorter fra lavest til høyest: logisk port, volt, instruksjon, logiske verdier.",
      options: ["Volt, logiske verdier, logisk port, instruksjon", "Instruksjon, logisk port, logiske verdier, volt", "Volt, logisk port, logiske verdier, instruksjon", "Logiske verdier, volt, logisk port, instruksjon"],
      explanation: "Nivåene er 7, 6, 4 og 1, og lavest abstraksjon kommer først. Alternativ 2 er listen snudd — oppgaven ba om lavest først. Alternativ 3 bytter om porten og de logiske verdiene. Alternativ 4 setter logiske verdier under volt.",
    },
    {
      question: "Hvorfor ligger transistoren på et lavt abstraksjonsnivå, selv om transistorfysikk er krevende?",
      options: ["Fordi nivået avgjøres av hva noe er bygd av, ikke av vanskelighetsgrad", "Fordi transistorer er billige å produsere i store mengder", "Fordi transistoren ble oppfunnet før de andre nivåene fantes", "Fordi den er større enn en logisk port og ligger derfor lavere"],
      explanation: "Byggeregelen og tolkningsregelen bestemmer rekkefølgen; hvor vanskelig noe er å forstå, spiller ingen rolle. Alternativ 2, 3 og 4 innfører kriterier — pris, historie og størrelse — som ikke har noe med abstraksjonsstigen å gjøre.",
    },
    {
      question: "Hvilke to nabo-par forveksles oftest i rangeringsoppgaven?",
      options: ["Pipeline og register, samt logiske verdier og volt", "Instruksjon og pipeline, samt transistor og port", "Register og port, samt instruksjon og volt", "Port og transistor, samt pipeline og instruksjon"],
      explanation: "Registeret føles mer håndfast enn pipeline, og volt føles som «grunnlaget», altså toppen. Alternativ 2, 3 og 4 nevner par som følger byggeregelen direkte og derfor er intuitive.",
    },
    {
      question: "Hva bør du gjøre først når du møter en rangeringsoppgave?",
      options: ["Skrive opp sjuerlisten og notere hvilken retning oppgaven ber om", "Sortere elementene etter hvor kompliserte de virker", "Begynne med det elementet du er sikrest på, og bygge utover", "Plassere alle sju nivåene, og deretter stryke de som ikke er med"],
      explanation: "Listen og retningen tar femten sekunder å notere og avgjør hele oppgaven. Alternativ 2 bruker et kriterium som ikke finnes. Alternativ 3 gjør deg sårbar for å snu retningen underveis. Alternativ 4 er unødvendig arbeid som lett gir med for mange elementer i svaret.",
    },
    {
      question: "Hvilken av disse påstandene er USANN?",
      options: ["Instruksjonen ligger på det laveste nivået i stigen", "En logisk verdi er en tolkning av en fysisk spenning", "Registeret ligger på et høyere nivå enn den logiske porten", "Pipeline ligger på et høyere nivå enn registeret"],
      explanation: "Instruksjonen ligger øverst, ikke nederst — påstanden snur hele stigen. Alternativ 2 er tolkningsregelen. Alternativ 3 er byggeregelen. Alternativ 4 følger av at pipelinen bruker registrene.",
    },
  ],
  'in1020-2-7': [
    {
      question: "Et program utfører 3200 instruksjoner, 25 % bom, bom-kostnad 12 sykler. Hvor mange klokkesykler?",
      options: ["12 000", "9600", "38 400", "29 600"],
      explanation: "2400 treff à 1 sykel gir 2400, og 800 bom à 12 sykler gir 9600, til sammen 12 000. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alle 3200 var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Hva er snittet per instruksjon ved 3200 instruksjoner, 25 % bom og bom-kostnad 12?",
      options: ["3,75", "3,00", "4,00", "12,00"],
      explanation: "`12 000 ÷ 3200 = 3,75` sykler per instruksjon, og tallet ligger mellom 1 og 12. Alternativ 2 og 3 er avrundinger som ikke følger av utregningen. Alternativ 4 er bom-kostnaden selv, altså snittet hvis alt var bom.",
    },
    {
      question: "Et program utfører 7000 instruksjoner med treffrate 80 % og bom-kostnad 15 sykler. Hvor mange klokkesykler?",
      options: ["26 600", "21 000", "105 000", "85 400"],
      explanation: "80 % treff gir 5600 treff à 1 sykel og 1400 bom à 15 sykler: 5600 + 21 000 = 26 600. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alt var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Et program utfører 4500 instruksjoner, 40 % bom, bom-kostnad 6 sykler. Hvor mange klokkesykler?",
      options: ["13 500", "10 800", "27 000", "18 000"],
      explanation: "2700 treff à 1 sykel gir 2700, og 1800 bom à 6 sykler gir 10 800, til sammen 13 500. Alternativ 2 er bommenes bidrag alene. Alternativ 3 er `4500 · 6`, altså alt som bom. Alternativ 4 er ombyttingen av treff og bom.",
    },
    {
      question: "Hvilken av de fem faste påstandene om maskinvare er USANN?",
      options: ["Et register er bygd opp av RAM-celler", "ALU-en gjør både aritmetikk og logikk", "Registre er raskere enn hovedminnet", "Kode og data ligger i samme minne"],
      explanation: "Registre er egne, raske kretser på prosessorbrikken — var de bygd av RAM, ville de hatt RAM-ens hastighet. Alternativ 2, 3 og 4 er alle sanne påstander som ligner på fellene uten å være det.",
    },
    {
      question: "Hvor mange en-bits ALU-er kreves for en 32-bits ALU?",
      options: ["32", "33", "31", "64"],
      explanation: "Én enhet per bit; menten er allerede en del av hver fulladder. Alternativ 2 er den faste fella som teller en ekstra for menten. Alternativ 3 mangler en enhet. Alternativ 4 dobler uten grunn.",
    },
    {
      question: "Hvilken buss bærer verdien som skal lagres i en minnecelle?",
      options: ["Databussen", "Adressebussen", "Kontrollbussen", "Klokkesignalet"],
      explanation: "Databussen bærer *hva*; adressebussen sier *hvor*. Alternativ 2 er nettopp ombyttingen som ofte står som en rad i en sant/usant-matrise. Alternativ 3 bærer styresignaler som «les» og «skriv». Alternativ 4 er ikke en buss i det hele tatt.",
    },
    {
      question: "Sorter fra høyest til lavest abstraksjonsnivå: register, volt, instruksjon, pipeline.",
      options: ["Instruksjon, pipeline, register, volt", "Instruksjon, register, pipeline, volt", "Volt, register, pipeline, instruksjon", "Pipeline, instruksjon, register, volt"],
      explanation: "Nivåene er 1, 2, 3 og 7 i den rekkefølgen. Alternativ 2 bytter om pipeline og register, det vanligste forvekslingsparet. Alternativ 3 er hele listen snudd. Alternativ 4 setter pipeline over instruksjonen.",
    },
    {
      question: "Hva ligger høyest i abstraksjonsstigen: logiske verdier eller volt?",
      options: ["Logiske verdier, siden de er en tolkning av spenningen", "Volt, siden den fysiske spenningen er grunnlaget", "De ligger på samme nivå og kan byttes fritt", "Det avhenger av hvilken terskel maskinen bruker"],
      explanation: "Tolkningen ligger over det den tolker: verdien 1 er navnet vi gir en spenning over en terskel. Alternativ 2 forveksler grunnlag med toppnivå. Alternativ 3 slår sammen to adskilte nivåer. Alternativ 4 gjør en fast rangering avhengig av en detalj.",
    },
    {
      question: "Et program utfører 1500 instruksjoner, 60 % bom, bom-kostnad 10 sykler. Hvor mange klokkesykler?",
      options: ["9600", "9000", "15 000", "6900"],
      explanation: "600 treff à 1 sykel gir 600, og 900 bom à 10 sykler gir 9000, til sammen 9600. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alt var bom. Alternativ 4 har byttet om treff og bom.",
    },
    {
      question: "Hva er snittet per instruksjon ved 60 % bom og bom-kostnad 10 sykler?",
      options: ["6,4", "6,0", "4,0", "10,0"],
      explanation: "`0,40 · 1 + 0,60 · 10 = 0,4 + 6 = 6,4` sykler, uavhengig av programlengden. Alternativ 2 glemmer treffenes bidrag på 0,4. Alternativ 3 er snittet ved 40 % bom, altså med ratene byttet om. Alternativ 4 er bom-kostnaden selv.",
    },
    {
      question: "Hvilken påstand om pipeline er sann?",
      options: ["Den øker antall instruksjoner som blir ferdige per sekund", "Den gjør hver enkelt instruksjon raskere gjennom prosessoren", "Den reduserer antall trinn hver instruksjon må gjennom", "Den øker klokkefrekvensen prosessoren kan kjøre på"],
      explanation: "Gjennomstrømningen øker; forsinkelsen per instruksjon står stille. Alternativ 2 er den faste feilslutningen — samme tema, motsatt svar, avhengig av ordlyden. Alternativ 3 er feil siden trinnene er uendret. Alternativ 4 blander sammen to ulike ytelsesgrep.",
    },
    {
      question: "En prosessor med tre trinn per instruksjon kjører ti instruksjoner med pipeline. Hvor mange sykler?",
      options: ["12", "30", "10", "13"],
      explanation: "Formelen er `k + (n − 1)` med `k = 3` og `n = 10`, altså `3 + 9 = 12`. Alternativ 2 er svaret uten pipeline. Alternativ 3 glemmer de to syklene det tar å fylle båndet. Alternativ 4 teller fyllingen som tre ekstra i stedet for to.",
    },
    {
      question: "Hva forteller feiltallet `bom · k` deg om utregningen din?",
      options: ["At treffenes ene sykel per instruksjon er glemt", "At bom-raten ikke er brukt i det hele tatt", "At treff og bom er byttet om i regningen", "At totalen er delt på antall instruksjoner"],
      explanation: "Bommenes bidrag alene mangler leddet fra treffene. Alternativ 2 beskriver feiltallet `n · k`. Alternativ 3 beskriver ombyttingen, som gir et helt annet uttrykk. Alternativ 4 beskriver gjennomsnittet, ikke en feil.",
    },
    {
      question: "En fulladder får inn A = 1, B = 0 og mente inn = 1. Hva blir sum og mente ut?",
      options: ["Sum 0, mente ut 1", "Sum 1, mente ut 0", "Sum 1, mente ut 1", "Sum 0, mente ut 0"],
      explanation: "To av tre innganger er 1, så summen er `1+0+1 = 2`, altså sum 0 og mente ut 1. Kontroll: `2·1 + 0 = 2`. Alternativ 2 gjelder ved nøyaktig ett ettall inn. Alternativ 3 gjelder ved tre ettall. Alternativ 4 gjelder ved null ettall.",
    },
    {
      question: "Hvilken komponent ligger UTENFOR CPU-en?",
      options: ["Hovedminnet", "Instruksjonsregisteret", "Kontrollenheten", "ALU-en"],
      explanation: "RAM ligger på egne brikker og nås over bussene; det er nettopp bussturen som gjør et RAM-oppslag dyrt. Alternativ 2 er et register, alternativ 3 og 4 er to av CPU-ens tre faste deler — alle tre ligger inne.",
    },
    {
      question: "En maskin har 2 % bom og bom-kostnad 50 sykler. Hva er snittet per instruksjon?",
      options: ["1,98", "1,00", "2,00", "50,00"],
      explanation: "`0,98 · 1 + 0,02 · 50 = 0,98 + 1,0 = 1,98` sykler. Alternativ 2 ville krevd null bom. Alternativ 3 forveksler bom-raten i prosent med et snitt i sykler. Alternativ 4 er bom-kostnaden selv.",
    },
    {
      question: "Hvilken sammenligning er riktig mellom en maskin med 2 % bom à 50 sykler og en med 10 % bom à 25 sykler?",
      options: ["Den første er raskest per instruksjon, tross dyrere bom", "Den andre er raskest per instruksjon, siden bommene er billigere", "De to har nøyaktig samme snitt per instruksjon", "Det kan ikke avgjøres uten antall instruksjoner"],
      explanation: "Snittene er 1,98 mot 3,4 sykler per instruksjon. Alternativ 2 ser bare på kostnaden og overser antallet bom. Alternativ 3 er feil ifølge utregningen. Alternativ 4 overser at snittet er uavhengig av programlengden.",
    },
    {
      question: "Hvor hører programtelleren hjemme i abstraksjonsstigen?",
      options: ["På registernivået", "På instruksjonsnivået", "På portnivået", "På pipelinenivået"],
      explanation: "Programtelleren er registeret som holder adressen til neste instruksjon. Alternativ 2 forveksler hva den peker på med hva den er. Alternativ 3 ville krevd at den var en port, ikke bygd av porter. Alternativ 4 gir den kontrollenhetens rolle.",
    },
    {
      question: "Hvilken kontroll fanger ombyttingsfeilen i en cache-beregning?",
      options: ["Å skrive opp begge gruppene og sjekke at de summerer til n", "Å sjekke at svaret er et helt tall uten desimaler", "Å sjekke at totalen er større enn antall instruksjoner", "Å sjekke at bom-kostnaden er større enn 1 sykel"],
      explanation: "Ombyttingen kan gi et snitt som ligger pent mellom 1 og bom-kostnaden, så gjennomsnittkontrollen alene er ikke nok — men gruppene avslører den. Alternativ 2, 3 og 4 er kontroller som er oppfylt både for riktig og for ombyttet svar.",
    },
    {
      question: "Hva bør du notere før du sorterer i en abstraksjonsoppgave?",
      options: ["Hvilken retning oppgaven ber om, høyest eller lavest først", "Hvor mange transistorer hvert nivå består av", "Hvilke nivåer som er vanskeligst å forstå", "Hvilket nivå som ble oppfunnet først historisk"],
      explanation: "Et helt snudd svar gir null poeng selv om listen er riktig, og retningen tar to sekunder å notere. Alternativ 2, 3 og 4 innfører kriterier som ikke har noe med rangeringen å gjøre.",
    },
    {
      question: "Ved 40 % bom og bom-kostnad 6 sykler: hvor stor andel av syklene skyldes bom?",
      options: ["Åtte tideler", "Fire tideler", "Halvparten", "Ni tideler"],
      explanation: "Med 4500 instruksjoner er det 10 800 av 13 500 sykler, altså nøyaktig 0,8. Alternativ 2 forveksler andelen oppslag med andelen tid. Alternativ 3 og 4 er anslag som ikke følger av regningen — regn ut prosenten i stedet for å gjette.",
    },
    {
      question: "Hva er riktig arbeidsmåte når du møter en sant/usant-rad om maskinvare?",
      options: ["Sjekk først om rada er en av de fem faste usanne påstandene", "Kryss av sant hvis påstanden høres teknisk rimelig ut", "Fordel svarene jevnt mellom sant og usant i matrisen", "Hopp over radene du er usikker på, uansett hvor sikker du er"],
      explanation: "Sjekklisten avgjør ofte halvparten av radene på sekunder. Alternativ 2 er gjetting, som formatet straffer. Alternativ 3 bruker fordelingen som ledetråd, og den finnes ikke. Alternativ 4 går for langt: du skal krysse av det du kan begrunne.",
    },
    {
      question: "Et program utfører 2400 instruksjoner, en tredjedel bom, bom-kostnad 9 sykler. Hvor mange klokkesykler?",
      options: ["8800", "7200", "21 600", "15 200"],
      explanation: "1600 treff à 1 sykel gir 1600, og 800 bom à 9 sykler gir 7200, til sammen 8800. Alternativ 2 er bommenes bidrag alene. Alternativ 3 regner som om alle var bom. Alternativ 4 har byttet om treff og bom.",
    },
  ],
  'in1020-3-1': [
    {
      question: "Hva er et sikkerhetsmål?",
      options: ["En egenskap vi ønsker at systemet skal ha", "En mekanisme vi installerer for å beskytte systemet", "En trussel som kan ramme systemet utenfra", "En svakhet i systemet som må lukkes"],
      explanation: "Et mål er en tilstand — noe systemet har eller mangler — ikke en handling. «En mekanisme vi installerer for å beskytte systemet» beskriver et tiltak, og forvekslingen er felle #1, den hyppigst påpekte feilen i faget. «En trussel som kan ramme systemet utenfra» beskriver en trussel. «En svakhet i systemet som må lukkes» beskriver en sårbarhet.",
    },
    {
      question: "Hvilket av disse er et sikkerhetsMÅL, ikke et tiltak?",
      options: ["Integritet", "Brannmur", "Sikkerhetskopiering", "Antivirus"],
      explanation: "Integritet er en egenskap ved dataene: at innholdet er uendret. «Brannmur», «Sikkerhetskopiering» og «Antivirus» er alle mekanismer man installerer eller gjennomfører, altså tiltak — og å krysse dem av som mål er felle #1.",
    },
    {
      question: "Hva betyr konfidensialitet?",
      options: ["At informasjon ikke er tilgjengelig for uvedkommende", "At informasjon er uendret og korrekt", "At de rette får tak i informasjonen når de trenger den", "At det i ettertid kan ses hvem som gjorde hva"],
      explanation: "Konfidensialitet handler om lesing: bare de som skal ha tilgang, kan lese. «At informasjon er uendret og korrekt» er integritet, «At de rette får tak i informasjonen når de trenger den» er tilgjengelighet, og «At det i ettertid kan ses hvem som gjorde hva» er sporbarhet — tre andre mål i samme sjuer-sett.",
    },
    {
      question: "Hvilket mål tjener en sjekksum først og fremst?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Uavviselighet"],
      explanation: "Sjekksummen avslører at innholdet er endret, men skjuler ingenting. «Konfidensialitet» er felle #9 — den vanligste forvekslingen i seksjonen. «Tilgjengelighet» gjelder sikkerhetskopi og redundans. «Uavviselighet» oppnås med digital signatur.",
    },
    {
      question: "Hvilket mål tjener sikkerhetskopiering først og fremst?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Autentisitet"],
      explanation: "Kopien sørger for at innholdet finnes når originalen er borte eller låst. «Konfidensialitet» er feil: en kopi hindrer ingen i å lese noe, og innholdet finnes nå to steder. «Integritet» gjelder sjekksum og signatur. «Autentisitet» gjelder sertifikater og tofaktor.",
    },
    {
      question: "Et tjenestenektangrep gjør en nettbutikk utilgjengelig i tolv timer. Hvilket mål er brutt?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Personvern"],
      explanation: "Kundene får ikke tak i tjenesten når de trenger den. «Konfidensialitet» ville krevd at noen leste noe de ikke skulle. «Integritet» ville krevd at innhold var endret. «Personvern» ville krevd at personopplysninger ble behandlet ulovlig.",
    },
    {
      question: "En angriper endrer beløpet i en betalingsordre underveis. Hvilket mål er brutt?",
      options: ["Integritet", "Tilgjengelighet", "Sporbarhet", "Konfidensialitet"],
      explanation: "Innholdet er endret og er ikke lenger korrekt. «Tilgjengelighet» er feil: ordren kom fram. «Sporbarhet» gjelder muligheten til å se hvem som gjorde hva. «Konfidensialitet» ville krevd at noen leste noe de ikke skulle.",
    },
    {
      question: "Hva er forskjellen på sporbarhet og uavviselighet?",
      options: ["Sporbarhet er å kunne se hvem som gjorde hva; uavviselighet er at den ansvarlige ikke kan nekte", "Sporbarhet er at den ansvarlige ikke kan nekte; uavviselighet er å kunne se hvem som gjorde hva", "De to betyr det samme, men brukes i ulike bransjer", "Sporbarhet gjelder personer, mens uavviselighet gjelder maskiner"],
      explanation: "Sporbarhet oppnås med logging, uavviselighet med digital signatur. «Sporbarhet er at den ansvarlige ikke kan nekte;…» bytter om de to definisjonene. «De to betyr det samme, men brukes i ulike bransjer» slår sammen to adskilte mål. «Sporbarhet gjelder personer, mens uavviselighet gjelder maskiner» innfører et skille som ikke finnes.",
    },
    {
      question: "Hvilke mål brytes av en forfalsket nettside som utgir seg for å være banken din?",
      options: ["Autentisitet og integritet", "Bare tilgjengelighet", "Bare sporbarhet", "Tilgjengelighet og personvern"],
      explanation: "Nettsiden er ikke den den utgir seg for (autentisitet), og innholdet er ikke det ekte (integritet). «Bare tilgjengelighet» er feil fordi bankens virkelige tjeneste er oppe. «Bare sporbarhet» gjelder logging, som ikke er berørt. «Tilgjengelighet og personvern» blander inn to mål som ikke rammes direkte.",
    },
    {
      question: "Hva er testen som skiller et mål fra et tiltak?",
      options: ["Kan man installere eller gjennomføre det? Da er det et tiltak", "Er det nevnt i loven? Da er det et mål", "Koster det penger? Da er det et mål", "Er det teknisk komplisert? Da er det et tiltak"],
      explanation: "Et tiltak er noe man kjøper, installerer eller gjør; et mål er en egenskap systemet har eller mangler. «Er det nevnt i loven? Da er det et mål» gjelder bare personvern, som er ett av sju mål. «Koster det penger? Da er det et mål» og «Er det teknisk komplisert? Da er det et tiltak» innfører kriterier som ikke skiller de to kategoriene.",
    },
    {
      question: "Hvilke tre mål tjener HTTPS?",
      options: ["Konfidensialitet, integritet og autentisitet", "Konfidensialitet, tilgjengelighet og sporbarhet", "Integritet, tilgjengelighet og personvern", "Autentisitet, sporbarhet og uavviselighet"],
      explanation: "Trafikken krypteres (konfidensialitet), kan ikke endres underveis (integritet), og sertifikatet viser hvem tjeneren er (autentisitet). «Konfidensialitet, tilgjengelighet og sporbarhet», «Integritet, tilgjengelighet og personvern» og «Autentisitet, sporbarhet og uavviselighet» tar med mål som HTTPS ikke gir: den sikrer ikke oppetid, den logger ingenting, og den gir ikke uavviselighet.",
    },
    {
      question: "Hvilket mål tjener logging?",
      options: ["Sporbarhet", "Konfidensialitet", "Tilgjengelighet", "Integritet"],
      explanation: "Loggen gjør det mulig å se hvem som gjorde hva i ettertid. «Konfidensialitet» er feil: en logg skjuler ingenting, og kan tvert imot inneholde sensitive opplysninger. «Tilgjengelighet» gjelder sikkerhetskopi og redundans. «Integritet» gjelder sjekksum og signatur.",
    },
    {
      question: "Kan en melding ha full integritet selv om alle kan lese den?",
      options: ["Ja — integritet handler om at innholdet er uendret, ikke om hemmelighold", "Nei — integritet forutsetter at innholdet er kryptert", "Nei — integritet og konfidensialitet må alltid oppnås sammen", "Ja, men bare hvis meldingen også er sikkerhetskopiert"],
      explanation: "En offentlig kunngjøring med gyldig signatur har full integritet og null konfidensialitet. «Nei — integritet forutsetter at innholdet er kryptert» og «Nei — integritet og konfidensialitet må alltid oppnås sammen» blander de to målene, som er uavhengige. «Ja, men bare hvis meldingen også er sikkerhetskopiert» knytter integritet til et tiltak som tjener tilgjengelighet.",
    },
    {
      question: "Hvilket av disse er et sikkerhetsTILTAK, ikke et mål?",
      options: ["Tofaktor-autentisering", "Uavviselighet ved digital signering", "Autentisitet", "Sporbarhet"],
      explanation: "Tofaktor er noe man slår på: to uavhengige typer bevis for identiteten. «Uavviselighet ved digital signering», «Autentisitet» og «Sporbarhet» er alle egenskaper systemet har eller mangler, altså mål — og forvekslingen er felle #1.",
    },
    {
      question: "En ansatt sletter loggene etter å ha endret data. Hvilke mål rammes av selve slettingen?",
      options: ["Sporbarhet og uavviselighet", "Konfidensialitet og integritet", "Tilgjengelighet og personvern", "Bare konfidensialitet"],
      explanation: "Uten logger kan ingen se hvem som gjorde hva (sporbarhet), og den ansvarlige kan nekte for handlingen (uavviselighet). «Konfidensialitet og integritet» gjelder selve endringen, ikke slettingen av loggene. «Tilgjengelighet og personvern» og «Bare konfidensialitet» rammes ikke: systemet er oppe, og ingen har lest noe de ikke skulle.",
    },
    {
      question: "Hva er et sikkerhetstiltak?",
      options: ["En mekanisme eller handling som brukes for å nå et sikkerhetsmål", "En egenskap systemet enten har eller mangler", "En hendelse som bryter en av sikkerhetsegenskapene", "En lovbestemmelse om behandling av personopplysninger"],
      explanation: "Brannmur, kryptering, sikkerhetskopi og øvelser er alle tiltak: noe man setter opp eller gjennomfører. «En egenskap systemet enten har eller mangler» beskriver et mål. «En hendelse som bryter en av sikkerhetsegenskapene» beskriver et brudd. «En lovbestemmelse om behandling av personopplysninger» gjelder personvernreglene, som er noe helt annet.",
    },
    {
      question: "Hvilket mål tjener redundans?",
      options: ["Tilgjengelighet", "Integritet", "Konfidensialitet", "Sporbarhet"],
      explanation: "Flere maskiner som kan overta for hverandre, holder tjenesten oppe selv om én svikter. «Integritet» gjelder sjekksum og signatur. «Konfidensialitet» gjelder kryptering og tilgangskontroll. «Sporbarhet» gjelder logging.",
    },
    {
      question: "Hva er forskjellen på redundans og sikkerhetskopiering?",
      options: ["Redundans holder tjenesten oppe; sikkerhetskopi lar deg gjenopprette etterpå", "Redundans lar deg gjenopprette etterpå; sikkerhetskopi holder tjenesten oppe", "Redundans tjener konfidensialitet; sikkerhetskopi tjener tilgjengelighet", "De to er samme tiltak beskrevet med ulike ord"],
      explanation: "Begge tjener tilgjengelighet, men på ulik måte: den ene hindrer nedetid, den andre reparerer tap. «Redundans lar deg gjenopprette etterpå; sikkerhetskopi…» bytter om de to. «Redundans tjener konfidensialitet; sikkerhetskopi tjener tilgjengelighet» gir redundans et mål den ikke tjener. «De to er samme tiltak beskrevet med ulike ord» overser den reelle forskjellen i virkemåte.",
    },
    {
      question: "Hvorfor er personvern et eget mål ved siden av konfidensialitet?",
      options: ["Fordi et system kan lagre alt trygt og likevel samle inn for mye", "Fordi personvern bare gjelder offentlige virksomheter", "Fordi personvern er et annet ord for konfidensialitet", "Fordi personvern bare gjelder data som er kryptert"],
      explanation: "Personvern stiller krav til om behandlingen er lovlig og nødvendig, ikke bare til om den er trygg. «Fordi personvern bare gjelder offentlige virksomheter» er feil: reglene gjelder alle virksomheter. «Fordi personvern er et annet ord for konfidensialitet» slår sammen to ulike mål. «Fordi personvern bare gjelder data som er kryptert» knytter et rettslig krav til et bestemt tiltak.",
    },
    {
      question: "En stjålet bærbar maskin har kryptert disk. Hvilket mål er IKKE brutt?",
      options: ["Konfidensialitet", "Tilgjengelighet til dataene", "Personvern", "Sporbarhet"],
      explanation: "Krypteringen gjør at tyven har maskinen, men ikke innholdet, så ingen uvedkommende har lest noe. «Tilgjengelighet til dataene» er derimot brutt: eieren har mistet både maskinen og dataene på den. «Personvern» og «Sporbarhet» kan også være berørt, avhengig av hva som lå på maskinen og om tapet lot seg spore.",
    },
    {
      question: "Hvilke tiltak tjener først og fremst konfidensialitet?",
      options: ["Diskkryptering og tilgangskontroll", "Sjekksum og versjonskontroll", "Sikkerhetskopiering og redundans", "Logging og sikkerhetsøvelser"],
      explanation: "Begge hindrer at uvedkommende får lest innholdet. «Sjekksum og versjonskontroll» tjener integritet. «Sikkerhetskopiering og redundans» tjener tilgjengelighet. «Logging og sikkerhetsøvelser» tjener sporbarhet og evnen til å komme tilbake i drift.",
    },
    {
      question: "Hva bør du gjøre når en oppgave spør hvilke mål en hendelse bryter?",
      options: ["Gå gjennom alle sju målene og vurdere hvert enkelt", "Krysse av det målet som passer best, og gå videre", "Krysse av konfidensialitet, siden det passer på de fleste angrep", "Krysse av alle mål, siden et angrep alltid rammer bredt"],
      explanation: "De fleste hendelser bryter flere mål, og i «velg ett eller flere»-form skal alle krysses av. «Krysse av det målet som passer best, og gå videre» gir halv uttelling når flere er riktige. «Krysse av konfidensialitet, siden det passer på de fleste angrep» er ren gjetting på det vanligste svaret. «Krysse av alle mål, siden et angrep alltid rammer bredt» gir trekk for de målene som ikke er brutt.",
    },
  ],
  'in1020-3-2': [
    {
      question: "Hvilket mål bryter et løsepengevirus først og fremst?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Sporbarhet"],
      explanation: "Filene finnes fortsatt, men er låst, så eieren får ikke brukt dem. «Konfidensialitet» er fella: angrepet bruker kryptering som våpen, men angriperen har ikke nødvendigvis lest noe. «Integritet» er feil fordi innholdet er uendret. «Sporbarhet» er feil fordi loggene er intakte.",
    },
    {
      question: "Hvilket mål bryter en tastelogger?",
      options: ["Konfidensialitet", "Integritet", "Tilgjengelighet for den som eier maskinen", "Uavviselighet"],
      explanation: "Tastetrykk og passord lekker til den som satte den opp, altså handler det om lesing. «Integritet» ville krevd at noe ble endret. «Tilgjengelighet for den som eier maskinen» ville krevd at noen mistet tilgang. «Uavviselighet» gjelder muligheten til å nekte for en handling.",
    },
    {
      question: "Hvilke mål bryter en forfalsket innloggingsside?",
      options: ["Autentisitet og integritet, og konfidensialitet når du taster inn noe", "Bare tilgjengelighet, siden den ekte siden blir mindre brukt", "Bare sporbarhet, siden angrepet ikke logges noe sted", "Bare personvern, siden det handler om opplysninger om personer"],
      explanation: "Siden er ikke den den utgir seg for, innholdet er falskt, og passordet fanges opp. «Bare tilgjengelighet, siden den ekte siden blir mindre brukt» er feil fordi den ekte tjenesten er uberørt. «Bare sporbarhet, siden angrepet ikke logges noe sted» gjelder logging, som ikke er berørt hos den angrepne. «Bare personvern, siden det handler om opplysninger om personer» er for smalt: personvern er ett av flere brutte mål, ikke det eneste.",
    },
    {
      question: "Hva er risikoformelen?",
      options: ["Sannsynlighet ganger konsekvens", "Sannsynlighet pluss konsekvens", "Konsekvens delt på sannsynlighet", "Antall trusler ganget med antall sårbarheter"],
      explanation: "Begge faktorene må med, og produktet gir et tall som lar trusler rangeres. «Sannsynlighet pluss konsekvens» ville gitt samme resultat for helt ulike kombinasjoner på en misvisende måte. «Konsekvens delt på sannsynlighet» snur forholdet. «Antall trusler ganget med antall sårbarheter» er en oppdiktet formel uten kobling til skade.",
    },
    {
      question: "Sannsynlighet 2 og konsekvens 5, mot sannsynlighet 4 og konsekvens 3. Hvilken har høyest risiko?",
      options: ["Den andre, med 12 mot 10", "Den første, med 10 mot 12", "Den første, siden konsekvensen er størst", "De er like alvorlige, siden begge faktorene varierer"],
      explanation: "`4 · 3 = 12` er høyere enn `2 · 5 = 10`. «Den første, med 10 mot 12» leser tallene riktig, men trekker motsatt konklusjon. «Den første, siden konsekvensen er størst» rangerer etter konsekvens alene, som er den vanligste feilen. «De er like alvorlige, siden begge faktorene varierer» unnlater å regne.",
    },
    {
      question: "Er et internt system uten internettforbindelse uten risiko?",
      options: ["Nei — innsidere, fysisk tilgang, feil og strømbrudd rammer uansett", "Ja — uten nettforbindelse finnes det ingen angrepsvei", "Ja, så lenge alle maskinene også er oppdaterte", "Nei, men bare fordi noen kan koble til internett ved et uhell"],
      explanation: "Dette er felle #12. Frakoblingen fjerner én kategori trusler, ikke risikoen. «Ja — uten nettforbindelse finnes det ingen angrepsvei» og «Ja, så lenge alle maskinene også er oppdaterte» lover total sikkerhet, som ingen tiltakspakke gir. «Nei, men bare fordi noen kan koble til internett ved et uhell» kommer til riktig konklusjon, men av bare én av flere grunner.",
    },
    {
      question: "Hva er en innsidetrussel?",
      options: ["En trussel fra noen som allerede har lovlig tilgang", "En trussel som kommer fra et annet land", "En trussel som utnytter en svakhet i maskinvaren", "En trussel som bare rammer interne nettverk"],
      explanation: "Innsideren har passert brannmur, passord og sperrer i utgangspunktet, og mottiltakene er derfor andre. «En trussel som kommer fra et annet land» og «En trussel som utnytter en svakhet i maskinvaren» beskriver helt andre inndelinger. «En trussel som bare rammer interne nettverk» forveksler hvem trusselen kommer fra med hva den rammer.",
    },
    {
      question: "Hvorfor stopper ikke en brannmur innsidetrusler?",
      options: ["Fordi innsideren allerede befinner seg innenfor brannmuren", "Fordi brannmurer bare virker mot skadevare, ikke mot personer", "Fordi innsidere alltid har administratorrettigheter", "Fordi brannmurer bare kontrollerer utgående trafikk"],
      explanation: "Brannmuren kontrollerer trafikk inn og ut av nettet, ikke hva en autorisert bruker gjør innenfor. «Fordi brannmurer bare virker mot skadevare, ikke mot personer» og «Fordi brannmurer bare kontrollerer utgående trafikk» beskriver brannmuren feil. «Fordi innsidere alltid har administratorrettigheter» er ikke sant: de fleste innsidere har helt vanlige rettigheter, og det er nettopp derfor minste privilegium virker.",
    },
    {
      question: "Hvilket tiltak virker fortsatt når noen får fysisk tilgang til en maskin?",
      options: ["Diskkryptering", "Brannmur", "Sterkt passord på brukerkontoen", "Antivirusprogram"],
      explanation: "Tyven får maskinvaren, men ikke innholdet — konfidensialiteten er i behold selv om tilgjengeligheten er brutt. «Brannmur» gjelder nettverkstrafikk. «Sterkt passord på brukerkontoen» og «Antivirusprogram» kan omgås av den som kan starte maskinen fra sitt eget medium eller ta ut disken.",
    },
    {
      question: "Hvilket mål bryter et rootkit først og fremst?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Personvern"],
      explanation: "Rootkitet manipulerer systemet slik at det rapporterer noe annet enn det som er tilfelle, og systemet er dermed ikke til å stole på. «Konfidensialitet» er fella: navnet høres ut som spionasje, men kjennetegnet er skjulingen. «Tilgjengelighet» og «Personvern» rammes ikke direkte av skjulingen i seg selv.",
    },
    {
      question: "Hva kjennetegner et mellommannsangrep?",
      options: ["Angriperen kan både lese og endre trafikken mellom to parter", "Angriperen overbelaster tjeneren med forespørsler", "Angriperen krypterer filene og krever betaling", "Angriperen gjetter passordet ved å prøve mange kombinasjoner"],
      explanation: "Angriperen plasserer seg mellom partene og videreformidler trafikken, med mulighet til å både avlytte og manipulere. «Angriperen overbelaster tjeneren med forespørsler» beskriver tjenestenekt. «Angriperen krypterer filene og krever betaling» beskriver løsepengevirus. «Angriperen gjetter passordet ved å prøve mange kombinasjoner» beskriver et rått gjettingsangrep.",
    },
    {
      question: "Hvilke mål bryter DNS-modifisering i seg selv?",
      options: ["Integritet og autentisitet", "Bare konfidensialitet", "Bare tilgjengelighet", "Sporbarhet og uavviselighet"],
      explanation: "Du havner på feil tjener, som utgir seg for å være den rette, og innholdet du får, er ikke det ekte. «Bare konfidensialitet» er feil: konfidensialiteten ryker først når du taster inn noe. «Bare tilgjengelighet» er feil fordi den ekte tjenesten er oppe. «Sporbarhet og uavviselighet» gjelder logging.",
    },
    {
      question: "Et strømbrudd tar ned et ordresystem i fire timer. Er dette en sikkerhetshendelse?",
      options: ["Ja — tilgjengelighet er et sikkerhetsmål, og det er brutt", "Nei — sikkerhet handler bare om angrep fra utenforstående", "Nei — strømbrudd er et driftsproblem, ikke et sikkerhetsproblem", "Ja, men bare hvis noen har utløst strømbruddet med vilje"],
      explanation: "En trussel trenger ikke være ondsinnet, og tilgjengelighet er ett av de sju målene. «Nei — sikkerhet handler bare om angrep fra utenforstående» og «Nei — strømbrudd er et driftsproblem, ikke et sikkerhetsproblem» avgrenser sikkerhet til angrep, og glemmer at strømbrudd og feil står for en stor del av hendelsene. «Ja, men bare hvis noen har utløst strømbruddet med vilje» gjør hensikten avgjørende, men det er virkningen som teller.",
    },
    {
      question: "Hva er restrisiko?",
      options: ["Risikoen som står igjen etter at tiltakene er satt inn", "Risikoen for de truslene som ennå ikke er oppdaget av noen", "Summen av alle risikotall i en risikovurdering", "Risikoen som forsikringen dekker"],
      explanation: "Ingen tiltakspakke gir null risiko, og det som står igjen, må aksepteres bevisst. «Risikoen for de truslene som ennå ikke er oppdaget av noen» beskriver ukjente trusler, som er noe annet. «Summen av alle risikotall i en risikovurdering» og «Risikoen som forsikringen dekker» er begreper som ikke finnes i denne sammenhengen.",
    },
    {
      question: "Hva sier prinsippet om minste privilegium?",
      options: ["Hver bruker skal ha akkurat de rettighetene oppgaven krever", "Færrest mulig ansatte skal ha tilgang til datasystemene", "Alle brukere skal ha like rettigheter for enkelhets skyld", "Administratorrettigheter skal deles på flest mulig personer"],
      explanation: "Skaden blir mindre både ved feil og ved overtatt konto når rettighetene er avgrenset. «Færrest mulig ansatte skal ha tilgang til datasystemene» handler om antall personer, ikke om hva hver enkelt får lov til. «Alle brukere skal ha like rettigheter for enkelhets skyld» og «Administratorrettigheter skal deles på flest mulig personer» går i motsatt retning av prinsippet.",
    },
    {
      question: "Hvor mange sikkerhetsmål bryter en typisk trussel?",
      options: ["Ofte flere samtidig — derfor brukes «velg ett eller flere»", "Alltid nøyaktig ett, siden målene er gjensidig utelukkende", "Alltid alle sju, siden systemene henger sammen", "Aldri mer enn to, siden målene er ordnet parvis"],
      explanation: "En forfalsket nettside bryter autentisitet, integritet og konfidensialitet. «Alltid nøyaktig ett, siden målene er gjensidig utelukkende» er den vanligste feilantakelsen i sjangeren. «Alltid alle sju, siden systemene henger sammen» og «Aldri mer enn to, siden målene er ordnet parvis» innfører regler som ikke finnes — antallet avhenger av hva som faktisk skjer.",
    },
    {
      question: "Hvilken trussel bryter først og fremst sporbarhet?",
      options: ["Sletting av loggfiler", "Tjenestenektangrep", "Tastelogger på en delt maskin", "Stjålet ukryptert minnepinne"],
      explanation: "Uten logger kan ingen se hvem som gjorde hva i ettertid. «Tjenestenektangrep» rammer tilgjengelighet. «Tastelogger på en delt maskin» og «Stjålet ukryptert minnepinne» rammer konfidensialitet — begge handler om at innhold leses av feil folk.",
    },
    {
      question: "En manglende sikkerhetskopi gjør at data går tapt når en disk ryker. Hvilket mål er brutt?",
      options: ["Tilgjengelighet", "Integritet", "Konfidensialitet", "Ingen — dette er ikke en sikkerhetshendelse"],
      explanation: "Dataene er borte og kan ikke gjenopprettes, altså har de rette mistet tilgang. «Integritet» ville krevd at innholdet var endret. «Konfidensialitet» ville krevd at noen leste noe de ikke skulle. «Ingen — dette er ikke en sikkerhetshendelse» avgrenser sikkerhet til angrep, som er feil.",
    },
    {
      question: "Hvorfor har en katastrofal, men svært usannsynlig hendelse ofte lav risiko?",
      options: ["Fordi risiko er produktet av begge faktorene, og den ene er liten", "Fordi katastrofer alltid dekkes av forsikring", "Fordi konsekvensen ikke teller med i risikoformelen", "Fordi sannsynligheten alltid veier tyngst av de to"],
      explanation: "`1 · 5 = 5` er lavt selv om konsekvensen er høyest mulig. «Fordi katastrofer alltid dekkes av forsikring» er ikke et sikkerhetsfaglig argument. «Fordi konsekvensen ikke teller med i risikoformelen» er feil: konsekvensen er den ene av de to faktorene. «Fordi sannsynligheten alltid veier tyngst av de to» gir sannsynligheten en forrang formelen ikke har.",
    },
    {
      question: "Hva er forskjellen på en trussel og en sårbarhet?",
      options: ["Trusselen er den ytre kraften; sårbarheten er svakheten den utnytter", "Trusselen er svakheten; sårbarheten er den ytre kraften", "De to er samme sak, beskrevet fra angriper- og forsvarerside", "Trusselen gjelder maskinvare, mens sårbarheten gjelder programvare"],
      explanation: "En angriper er en trussel; uoppdatert programvare er en sårbarhet. «Trusselen er svakheten; sårbarheten er den ytre kraften» bytter om de to. «De to er samme sak, beskrevet fra angriper- og forsvarerside» slår sammen to adskilte ledd i kjeden. «Trusselen gjelder maskinvare, mens sårbarheten gjelder programvare» innfører et skille som ikke finnes.",
    },
  ],
  'in1020-3-3': [
    {
      question: "Alice skal sende en hemmelig melding til Bob. Hvilken nøkkel krypterer hun med?",
      options: ["Bobs offentlige nøkkel", "Bobs private nøkkel", "Alices private nøkkel", "Alices offentlige nøkkel"],
      explanation: "Man låser med mottakerens åpne hengelås, og bare mottakeren kan låse opp. «Bobs private nøkkel» er umulig: Alice har ikke Bobs private nøkkel. «Alices private nøkkel» ville gjort meldingen lesbar for alle med Alices offentlige nøkkel — det er signering. «Alices offentlige nøkkel» ville låst meldingen slik at bare Alice selv kunne åpne den.",
    },
    {
      question: "Hvilken nøkkel bruker Bob til å dekryptere en hemmelig melding fra Alice?",
      options: ["Sin egen private nøkkel", "Sin egen offentlige nøkkel", "Alices offentlige nøkkel", "Alices private nøkkel"],
      explanation: "Bare den private motparten kan åpne det den offentlige låste. «Sin egen offentlige nøkkel» er nøkkelen som låste, og den kan ikke låse opp igjen. «Alices offentlige nøkkel» og «Alices private nøkkel» bruker Alices nøkler, som ikke er involvert i en hemmelig melding til Bob.",
    },
    {
      question: "Hva kjennetegner symmetrisk kryptering?",
      options: ["Samme nøkkel brukes til å kryptere og dekryptere", "Ulike nøkler brukes til å kryptere og dekryptere", "Nøkkelen kan deles åpent uten at sikkerheten svekkes", "Hver part har sitt eget nøkkelpar med to halvdeler"],
      explanation: "Begge parter har den ene delte nøkkelen, og den må holdes hemmelig. «Ulike nøkler brukes til å kryptere og dekryptere» og «Hver part har sitt eget nøkkelpar med to halvdeler» beskriver asymmetrisk kryptering. «Nøkkelen kan deles åpent uten at sikkerheten svekkes» gjelder den offentlige halvdelen av et asymmetrisk nøkkelpar, aldri en symmetrisk nøkkel.",
    },
    {
      question: "Hva er hovedproblemet ved symmetrisk kryptering?",
      options: ["Å få den delte nøkkelen trygt fram før man har en trygg kanal", "At den er altfor treg til å kryptere store datamengder raskt nok", "At den ikke gir konfidensialitet i det hele tatt", "At nøkkelen må byttes for hver enkelt melding"],
      explanation: "Nøkkelutveksling er nettopp det asymmetrisk kryptering ble funnet opp for å løse. «At den er altfor treg til å kryptere store datamengder raskt nok» beskriver asymmetrisk kryptering, som er den trege. «At den ikke gir konfidensialitet i det hele tatt» er feil: konfidensialitet er nøyaktig det symmetrisk kryptering gir. «At nøkkelen må byttes for hver enkelt melding» er ikke et krav.",
    },
    {
      question: "Kan en offentlig nøkkel sendes over en usikret kanal?",
      options: ["Ja — den er laget for å være kjent og kan bare låse", "Nei — alle nøkler av enhver type må sendes over en sikret kanal", "Ja, men bare hvis mottakeren bekrefter den muntlig etterpå", "Nei — den kan brukes til å regne ut den private nøkkelen"],
      explanation: "At en angriper får tak i den offentlige nøkkelen, er uten betydning. «Nei — alle nøkler av enhver type må sendes over en sikret kanal» forveksler den med en symmetrisk nøkkel. «Ja, men bare hvis mottakeren bekrefter den muntlig etterpå» innfører et krav som ikke finnes. «Nei — den kan brukes til å regne ut den private nøkkelen» er feil: å regne seg fra offentlig til privat nøkkel er praktisk umulig.",
    },
    {
      question: "Hvilken form er raskest?",
      options: ["Symmetrisk kryptering", "Asymmetrisk kryptering", "De to er omtrent like raske", "Det avhenger av nøkkellengden alene"],
      explanation: "Symmetriske algoritmer krypterer gigabyte i sekundet, mens asymmetriske operasjoner er størrelsesordener tregere. «Asymmetrisk kryptering» snur forholdet. «De to er omtrent like raske» er feil, og det er nettopp forskjellen som gjør arbeidsdelingen nødvendig. «Det avhenger av nøkkellengden alene» overser at de bygger på helt ulike matematiske problemer.",
    },
    {
      question: "Gir symmetrisk kryptering uavviselighet?",
      options: ["Nei — begge parter har samme nøkkel og kunne laget meldingen", "Ja — nøkkelen er hemmelig, så bare de to partene kan ha laget den", "Ja, forutsatt at nøkkelen er lang nok", "Nei — symmetrisk kryptering gir ingen sikkerhetsmål i det hele tatt"],
      explanation: "Uavviselighet krever at bare én part kan ha laget noe, og det får man bare med digital signatur. «Ja — nøkkelen er hemmelig, så bare de to partene kan ha laget den» og «Ja, forutsatt at nøkkelen er lang nok» overser at nøkkelen deles av to. «Nei — symmetrisk kryptering gir ingen sikkerhetsmål i det hele tatt» går for langt: symmetrisk kryptering gir konfidensialitet.",
    },
    {
      question: "Hvor mange nøkler trengs for at 12 parter skal kunne snakke parvis med symmetrisk kryptering?",
      options: ["66", "132", "12", "144"],
      explanation: "Antall par er `12 · 11 ÷ 2 = 66`. «132» glemmer å dele på 2 og teller hvert nøkkelforhold to ganger. «12» er antall personer, altså antallet nøkkelpar i en asymmetrisk løsning. «144» er `12 · 12`.",
    },
    {
      question: "Hva skjer hvis Alice krypterer en melding med sin egen private nøkkel?",
      options: ["Alle med Alices offentlige nøkkel kan lese den, men vet at den kom fra henne", "Bare Bob kan lese den, siden meldingen er adressert til nettopp ham og ingen andre", "Ingen kan lese den, siden den private nøkkelen ikke kan låses opp", "Bare Alice selv kan lese den igjen etterpå"],
      explanation: "Dette er signering: det gir autentisitet og uavviselighet, ikke konfidensialitet. «Bare Bob kan lese den…» gir Bob en særstilling han ikke har, siden hans nøkler ikke er brukt. «Ingen kan lese den, siden den private nøkkelen ikke kan låses opp» overser at den offentlige motparten låser opp. «Bare Alice selv kan lese den igjen etterpå» beskriver hva som skjer hvis hun bruker sin egen offentlige nøkkel.",
    },
    {
      question: "Hva skjer hvis Alice krypterer en melding til Bob med sin egen offentlige nøkkel?",
      options: ["Bare Alice selv kan lese den, og meldingen er ubrukelig for Bob", "Bob kan lese den med sin egen private nøkkel, helt som vanlig", "Alle kan lese den, siden nøkkelen er offentlig", "Meldingen blir signert i stedet for kryptert"],
      explanation: "Bare Alices private nøkkel kan åpne det hennes offentlige låste. «Bob kan lese den med sin egen private nøkkel, helt som vanlig» er feil fordi Bobs nøkkelpar ikke er brukt. «Alle kan lese den, siden nøkkelen er offentlig» forveksler hva en offentlig nøkkel gjør — den låser, den låser ikke opp. «Meldingen blir signert i stedet for kryptert» beskriver bruk av hennes private nøkkel.",
    },
    {
      question: "Hva brukes asymmetrisk kryptering til i en HTTPS-økt?",
      options: ["Til å bli enige om en symmetrisk engangsnøkkel i starten", "Til å kryptere all trafikken gjennom hele den pågående økta", "Til å komprimere dataene før de sendes", "Til å sende bankens private nøkkel til nettleseren"],
      explanation: "Asymmetrisk kryptering brukes bare på de få hundre bytene engangsnøkkelen utgjør. «Til å kryptere all trafikken gjennom hele den pågående økta» ville vært altfor tregt. «Til å komprimere dataene før de sendes» har ingenting med kryptering å gjøre. «Til å sende bankens private nøkkel til nettleseren» er den alvorligste misforståelsen: en privat nøkkel forlater aldri eieren.",
    },
    {
      question: "Hvilken form egner seg best til å kryptere en 40 GB videofil?",
      options: ["Symmetrisk kryptering, siden den er rask nok for store mengder", "Asymmetrisk kryptering, siden den er sikrere per bit", "Begge er like godt egnet, siden filstørrelsen ikke betyr noe her", "Ingen av dem — store filer kan ikke krypteres"],
      explanation: "Arbeidsdelingen er fast: asymmetrisk på det lille, symmetrisk på det store. «Asymmetrisk kryptering, siden den er sikrere per bit» blander sammen sikkerhet og fart. «Begge er like godt egnet, siden filstørrelsen ikke betyr noe her» overser at asymmetrisk kryptering er størrelsesordener tregere. «Ingen av dem — store filer kan ikke krypteres» er feil — diskkryptering gjør nettopp dette.",
    },
    {
      question: "Hva er en engangsnøkkel?",
      options: ["En symmetrisk nøkkel som lages for én økt og kastes etterpå", "En privat nøkkel som byttes ut hver gang den brukes", "En offentlig nøkkel som bare gjelder for én mottaker", "En nøkkel som bare kan kryptere, men aldri dekryptere"],
      explanation: "Blir nøkkelen senere kompromittert, gjelder skaden bare den ene økta. «En privat nøkkel som byttes ut hver gang den brukes» og «En offentlig nøkkel som bare gjelder for én mottaker» beskriver asymmetriske nøkler, som er langvarige. «En nøkkel som bare kan kryptere, men aldri dekryptere» beskriver ingen reell nøkkeltype.",
    },
    {
      question: "Hvorfor er det trygt at den offentlige nøkkelen er kjent?",
      options: ["Fordi den private ikke kan regnes ut fra den, og den bare kan låse", "Fordi den byttes ut så ofte at den ikke rekker å bli misbrukt av noen", "Fordi den bare virker for den ene mottakeren den ble laget til", "Fordi den er så lang at ingen klarer å skrive den av"],
      explanation: "Hele konstruksjonen hviler på at veien fra offentlig til privat nøkkel er praktisk umulig. «Fordi den byttes ut så ofte at den ikke rekker å bli misbrukt av noen», «Fordi den bare virker for den ene mottakeren den ble laget til» og «Fordi den er så lang at ingen klarer å skrive den av» gir andre begrunnelser som ikke stemmer: nøkkelen er langvarig, den kan brukes av hvem som helst, og lengden er ikke poenget.",
    },
    {
      question: "Hvilket sikkerhetsmål gir kryptering av seg selv?",
      options: ["Konfidensialitet", "Uavviselighet", "Tilgjengelighet", "Sporbarhet"],
      explanation: "Kryptering hindrer at uvedkommende leser innholdet, og ikke noe mer. «Uavviselighet» krever digital signatur. «Tilgjengelighet» krever sikkerhetskopi og redundans — en kryptert fil kan slettes like lett som en ukryptert. «Sporbarhet» krever logging.",
    },
    {
      question: "Hva menes med ende-til-ende-kryptering?",
      options: ["Innholdet krypteres hos avsenderen og åpnes først hos mottakeren", "Innholdet krypteres bare mens det er lagret på en tjener", "Innholdet krypteres på nytt av hver tjener det passerer", "Innholdet krypteres med både symmetrisk og asymmetrisk metode"],
      explanation: "Heller ikke tjenesten i midten kan lese innholdet, og det avgjør om du må stole på leverandøren. «Innholdet krypteres bare mens det er lagret på en tjener» beskriver kryptering i hvile. «Innholdet krypteres på nytt av hver tjener det passerer» beskriver kryptering strekning for strekning, der hver tjener kan lese. «Innholdet krypteres med både symmetrisk og asymmetrisk metode» beskriver hybrid kryptering.",
    },
    {
      question: "Hvorfor er kryptering alene ikke nok mot et mellommannsangrep?",
      options: ["Angriperen kan sette opp sin egen krypterte forbindelse og utgi seg for tjeneren", "Innholdet krypteres bare mens det ligger lagret på en tjener", "Angriperen kan alltid regne ut nøkkelen fra kryptoteksten", "Kryptering beskytter bare data som ligger i hvile, ikke data i transitt over nett"],
      explanation: "Derfor kreves også autentisering av motparten, i praksis med sertifikat. «Innholdet krypteres bare mens det ligger lagret på en tjener» er feil: kryptering virker like godt trådløst. «Angriperen kan alltid regne ut nøkkelen fra kryptoteksten» ville gjort all kryptering verdiløs. «Kryptering beskytter bare data som ligger i hvile…» snur begrepene på hodet.",
    },
    {
      question: "Hvilken påstand om den private nøkkelen er sann?",
      options: ["Den forlater aldri eieren og sendes ikke over nettet", "Den sendes til motparten i starten av hver økt", "Den kan deles med betrodde samarbeidspartnere ved behov", "Den er identisk med den symmetriske engangsnøkkelen"],
      explanation: "Den som har din private nøkkel, kan lese alt som er sendt til deg og signere i ditt navn. «Den sendes til motparten i starten av hver økt» og «Den kan deles med betrodde samarbeidspartnere ved behov» ville gitt fra seg hele sikkerheten. «Den er identisk med den symmetriske engangsnøkkelen» blander to helt ulike nøkkeltyper.",
    },
    {
      question: "I en hemmelig melding fra Alice til Bob — hvem eier nøklene som brukes?",
      options: ["Begge tilhører Bob, altså mottakeren", "Den sendes til motparten i starten av hver eneste økt", "Én tilhører Alice og én tilhører Bob", "Begge er felles nøkler som partene har avtalt"],
      explanation: "Alice krypterer med Bobs offentlige, og Bob dekrypterer med Bobs private. «Den sendes til motparten i starten av hver eneste økt» beskriver signering. «Én tilhører Alice og én tilhører Bob» er den vanligste feilantakelsen, og den er kontrollen som avslører felle #5. «Begge er felles nøkler som partene har avtalt» beskriver symmetrisk kryptering.",
    },
    {
      question: "Hva er kontrollspørsmålet før du velger nøkkel i en oppgave?",
      options: ["Hvem skal kunne åpne dette?", "Hvilken nøkkel er lengst?", "Hvem sendte meldingen sist?", "Er innholdet stort eller lite?"],
      explanation: "Skal bare mottakeren åpne, brukes mottakerens offentlige nøkkel; skal alle kunne åpne og se hvem det kom fra, brukes avsenderens private. «Hvilken nøkkel er lengst?» og «Hvem sendte meldingen sist?» avgjør ingenting om retningen. «Er innholdet stort eller lite?» avgjør valget mellom symmetrisk og asymmetrisk, ikke hvilken nøkkel i paret.",
    },
    {
      question: "Hvor mange bit-kombinasjoner må prøves for en nøkkel på n bit ved uttømmende søk?",
      options: ["$2^n$", "$n^2$", "$2 \\cdot n$", "$n!$"],
      explanation: "Hver bit dobler antall muligheter, akkurat som i tallsystemene. «$n^2$», «$2 \\cdot n$» og «$n!$» vokser altfor sakte eller på helt feil måte, og de ville gjort selv lange nøkler enkle å knekke.",
    },
    {
      question: "Hva er forskjellen på kryptering i hvile og i transitt?",
      options: ["I hvile beskytter lagrede data; i transitt beskytter data underveis", "I hvile beskytter data underveis; i transitt beskytter lagrede data", "De to er samme sak beskrevet med ulike ord", "I hvile brukes asymmetrisk metode; i transitt brukes symmetrisk"],
      explanation: "Diskkryptering er i hvile; HTTPS er i transitt, og de er uavhengige av hverandre. «I hvile beskytter data underveis; i transitt beskytter lagrede data» bytter om de to. «De to er samme sak beskrevet med ulike ord» overser at et system kan ha det ene uten det andre. «I hvile brukes asymmetrisk metode; i transitt brukes symmetrisk» knytter formene til feil sted — begge bruker symmetrisk kryptering på selve innholdet.",
    },
  ],
  'in1020-3-4': [
    {
      question: "Hvilken nøkkel bruker Alice når hun signerer et dokument digitalt?",
      options: ["Sin egen private nøkkel", "Sin egen offentlige nøkkel", "Mottakerens offentlige nøkkel", "Mottakerens private nøkkel"],
      explanation: "Bare Alice har sin private nøkkel, og det er nettopp derfor signaturen beviser noe. «Sin egen offentlige nøkkel» ville vært verdiløst siden alle har den offentlige nøkkelen. «Mottakerens offentlige nøkkel» beskriver hemmelighold, ikke signering. «Mottakerens private nøkkel» er umulig — Alice har ikke mottakerens private nøkkel.",
    },
    {
      question: "Hvilken nøkkel brukes til å validere en signatur fra Alice?",
      options: ["Alices offentlige nøkkel", "Alices private nøkkel", "Mottakerens private nøkkel", "Mottakerens offentlige nøkkel"],
      explanation: "Validering bruker avsenderens offentlige nøkkel, altså motparten til den som signerte. «Alices private nøkkel» er umulig: mottakeren har ikke Alices private nøkkel. «Mottakerens private nøkkel» og «Mottakerens offentlige nøkkel» bruker mottakerens eget nøkkelpar, som ikke har noe med signaturen å gjøre.",
    },
    {
      question: "Hvilke mål gir en digital signatur?",
      options: ["Integritet, autentisitet og uavviselighet", "Konfidensialitet, integritet og tilgjengelighet", "Bare konfidensialitet og integritet", "Konfidensialitet, autentisitet og uavviselighet"],
      explanation: "Signaturen viser at innholdet er uendret, hvem det kom fra, og at avsenderen ikke kan nekte. «Konfidensialitet, integritet og tilgjengelighet», «Bare konfidensialitet og integritet» og «Konfidensialitet, autentisitet og uavviselighet» tar med konfidensialitet, som signaturen nettopp ikke gir — det er felle #4, fagets mest testede enkeltinnsikt.",
    },
    {
      question: "Gir en digital signatur konfidensialitet?",
      options: ["Nei — meldingen sendes i klartekst og kan leses av alle", "Ja — bare den tiltenkte mottakeren kan lese den signerte meldingen", "Ja — signaturen krypterer hele meldingen", "Nei — signaturen sletter innholdet etter validering"],
      explanation: "Signaturen kommer i tillegg til meldingen, og mottakeren må kunne lese innholdet for å regne ut hash-verdien. «Ja — bare den tiltenkte mottakeren kan lese den signerte meldingen» og «Ja — signaturen krypterer hele meldingen» er felle #4. «Nei — signaturen sletter innholdet etter validering» beskriver noe som ikke skjer i det hele tatt.",
    },
    {
      question: "Hva er det som faktisk signeres i en digital signatur?",
      options: ["Hash-verdien av meldingen", "Hele meldingen, bit for bit", "Bare avsenderens navn og tidspunktet", "Mottakerens offentlige nøkkel"],
      explanation: "Hash-verdien er liten uansett meldingens størrelse, og asymmetrisk kryptering er treg. «Hele meldingen, bit for bit» ville vært altfor tregt for store filer. «Bare avsenderens navn og tidspunktet» ville ikke avslørt endringer i innholdet. «Mottakerens offentlige nøkkel» har ingen rolle i signeringen.",
    },
    {
      question: "Hvilket mål tjener en hash-verdi?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Uavviselighet"],
      explanation: "Endres innholdet med ett bit, endres verdien fullstendig, og avviket er synlig. «Konfidensialitet» er felle #9: hash-verdien kommer i tillegg og skjuler ingenting. «Tilgjengelighet» og «Uavviselighet» krever helt andre tiltak — sikkerhetskopi og digital signatur.",
    },
    {
      question: "Hvilken egenskap har en hash-funksjon?",
      options: ["Den går bare én vei og kan ikke reverseres", "Den kan reverseres hvis man kjenner algoritmen", "Den gir kortere verdi jo mindre innholdet er", "Den gir samme verdi for alle filer av samme størrelse"],
      explanation: "Enveisegenskapen er det som gjør hash brukbar til passordlagring. «Den kan reverseres hvis man kjenner algoritmen» ville gjort både signaturer og passordlagring verdiløse. «Den gir kortere verdi jo mindre innholdet er» er feil: lengden er fast. «Den gir samme verdi for alle filer av samme størrelse» ville betydd at verdien ikke sa noe om innholdet.",
    },
    {
      question: "En hash-verdi stemmer etter nedlasting. Hva har du bevist?",
      options: ["At fila er uendret siden verdien ble regnet ut", "At fila er helt fri for skadevare av enhver type", "At fila kommer fra rett utgiver", "At ingen andre kan lese fila"],
      explanation: "Integritet er alt en hash gir. «At fila er helt fri for skadevare av enhver type» forveksler «uendret» med «trygg» — var skadevaren der fra starten, stemmer verdien perfekt. «At fila kommer fra rett utgiver» krever en signatur i tillegg. «At ingen andre kan lese fila» er felle #9.",
    },
    {
      question: "Hva kan en angriper som kontrollerer nedlastingssiden, gjøre?",
      options: ["Endre både fila og den oppgitte hash-verdien, så de stemmer overens", "Endre fila, men ikke hash-verdien, som ligger utenfor angriperens rekkevidde", "Ingenting — hash-verdien beskytter mot alle former for endring", "Bare gjøre fila utilgjengelig, ikke endre den"],
      explanation: "Dette er hash-kontrollens vesentlige begrensning, og den løses ved å signere hash-verdien. «Endre fila, men ikke hash-verdien…» gir hash-verdien en beskyttelse den ikke har når kilden er kompromittert. «Ingenting — hash-verdien beskytter mot alle former for endring» og «Bare gjøre fila utilgjengelig, ikke endre den» undervurderer hva kontroll over kilden innebærer.",
    },
    {
      question: "Hva binder et digitalt sertifikat sammen?",
      options: ["En offentlig nøkkel og en identitet", "En privat nøkkel og en identitet", "To offentlige nøkler som hører sammen", "En hash-verdi og en filstørrelse"],
      explanation: "Sertifikatet sier hvem den offentlige nøkkelen tilhører, og er selv signert av en betrodd utsteder. «En privat nøkkel og en identitet» ville betydd at den private nøkkelen ble distribuert, som aldri skjer. «To offentlige nøkler som hører sammen» og «En hash-verdi og en filstørrelse» beskriver konstruksjoner som ikke finnes.",
    },
    {
      question: "Krypterer et sertifikat trafikken mellom nettleser og tjener?",
      options: ["Nei — det bekrefter en tilhørighet, og krypteringen skjer med nøkkelen", "Ja — sertifikatet inneholder krypteringsalgoritmen som brukes", "Ja — sertifikatet krypterer all trafikk i hele økta", "Nei — sertifikatet brukes bare til å logge hvem som besøker siden"],
      explanation: "Sertifikatet knytter en offentlig nøkkel til en identitet; den nøkkelen brukes så i krypteringen. «Ja — sertifikatet inneholder krypteringsalgoritmen som brukes» og «Ja — sertifikatet krypterer all trafikk i hele økta» gir sertifikatet en teknisk funksjon det ikke har. «Nei — sertifikatet brukes bare til å logge hvem som besøker siden» forveksler det med logging.",
    },
    {
      question: "Hva beviser et gyldig sertifikat på en nettside?",
      options: ["At du snakker med den som eier domenet i sertifikatet", "At nettstedet er hederlig og i alle henseender til å stole på", "At varene på nettstedet finnes og blir levert", "At nettstedet aldri har vært utsatt for angrep"],
      explanation: "Sertifikatet svarer på «snakker jeg med den jeg tror?», ikke på «kan jeg stole på dem?». «At nettstedet er hederlig og i alle henseender til å stole på», «At varene på nettstedet finnes og blir levert» og «At nettstedet aldri har vært utsatt for angrep» er vurderinger ingen teknologi kan gi — en svindler kan skaffe seg et fullt gyldig sertifikat til sitt eget domene.",
    },
    {
      question: "Hva står PKI for, og hva er det?",
      options: ["Offentlig nøkkelinfrastruktur — systemet av utstedere, sertifikater og regler", "Privat kryptografisk indeks — registeret over private nøkler i en virksomhet", "Protokoll for kryptert internett — standarden bak HTTPS", "Personlig kontrollinstans — organet som godkjenner digitale signaturer"],
      explanation: "PKI gjør det praktisk mulig å stole på offentlige nøkler, gjennom utstedere, tillitskjeder og tilbaketrekking. «Privat kryptografisk indeks…», «Protokoll for kryptert internett — standarden bak HTTPS» og «Personlig kontrollinstans — organet som godkjenner digitale signaturer» er oppdiktede begreper som ligner, men ikke finnes.",
    },
    {
      question: "Hva betyr en sertifikatadvarsel i nettleseren?",
      options: ["At tillitskjeden ikke går opp, og du ikke kan vite hvem du snakker med", "At nettsiden inneholder skadevare som er oppdaget", "At forbindelsen er helt ukryptert og at alle på veien kan lese trafikken", "At sertifikatet snart utløper og bør fornyes av eieren"],
      explanation: "Sertifikatet kan være utløpt, selvsignert eller utstedt til et annet navn — nettopp situasjonen et mellommannsangrep skaper. «At nettsiden inneholder skadevare som er oppdaget» og «At forbindelsen er helt ukryptert og at alle på veien kan lese trafikken» beskriver andre problemer. «At sertifikatet snart utløper og bør fornyes av eieren» er en påminnelse, ikke en advarsel om brutt tillit.",
    },
    {
      question: "Hva er en nulldagssårbarhet?",
      options: ["En svakhet som er ukjent for leverandøren, uten tilgjengelig rettelse", "En svakhet som er kjent, men som ingen har rukket å utnytte ennå", "En svakhet som bare finnes i programvare eldre enn ett år", "En svakhet som forsvinner av seg selv etter én dag"],
      explanation: "Leverandøren har hatt null dager på seg til å lukke hullet. «En svakhet som er kjent, men som ingen har rukket å utnytte ennå» snur saken: er svakheten kjent, kan den rettes. «En svakhet som bare finnes i programvare eldre enn ett år» og «En svakhet som forsvinner av seg selv etter én dag» er oppdiktede kriterier uten kobling til begrepet.",
    },
    {
      question: "Hvorfor hjelper ikke sikkerhetsoppdateringer mot en nulldagssårbarhet?",
      options: ["Fordi leverandøren ikke kjenner svakheten og derfor ikke har laget noen rettelse", "Fordi oppdateringer alltid kommer for sent til å ha noen effekt", "Fordi nulldagssårbarheter bare finnes i maskinvare, ikke i programvare", "Fordi oppdateringer bare fjerner skadevare, ikke svakheter"],
      explanation: "Oppdatering lukker de kjente hullene, og en nulldagssårbarhet er per definisjon ukjent. «Fordi oppdateringer alltid kommer for sent til å ha noen effekt» undervurderer oppdateringer generelt. «Fordi nulldagssårbarheter bare finnes i maskinvare, ikke i programvare» er feil om hvor slike svakheter finnes. «Fordi oppdateringer bare fjerner skadevare, ikke svakheter» beskriver antivirus, ikke oppdateringer.",
    },
    {
      question: "Hva kjennetegner en trojaner?",
      options: ["En skjult skadelig funksjon i et program som ser nyttig ut", "Et program som sprer seg selv over nettet uten hjelp", "Et program som fester seg til en vertsfil og spres med den", "Et program som krypterer filene og krever betaling"],
      explanation: "Kjennetegnet er innpakningen: brukeren installerer den frivillig. «Et program som sprer seg selv over nettet uten hjelp» beskriver en orm. «Et program som fester seg til en vertsfil og spres med den» beskriver et virus. «Et program som krypterer filene og krever betaling» beskriver et løsepengevirus, som godt kan leveres av en trojaner.",
    },
    {
      question: "Alice vil sende en melding som både er hemmelig og bevislig fra henne. Hva må hun gjøre?",
      options: ["Signere med sin private nøkkel og kryptere med mottakerens offentlige", "Bare signere med sin private nøkkel — det dekker begge behov", "Bare kryptere med mottakerens offentlige nøkkel — det dekker begge behov", "Kryptere med sin egen private nøkkel og signere med mottakerens offentlige"],
      explanation: "Signering gir integritet, autentisitet og uavviselighet; kryptering gir konfidensialitet. «Bare signere med sin private nøkkel — det dekker begge behov» mangler hemmelighold, «Bare kryptere med mottakerens offentlige nøkkel — det dekker begge behov» mangler beviset for avsender. «Kryptere med sin egen private nøkkel og signere med…» snur begge retningene.",
    },
    {
      question: "Hvorfor må mottakeren kunne lese en signert melding i klartekst?",
      options: ["For å kunne regne ut hash-verdien og sammenligne med den signerte", "For at signaturen skal kunne slettes etter kontrollen", "For at avsenderen skal kunne bekrefte at meldingen faktisk kom fram", "Fordi signaturen bare virker på ukrypterte filer"],
      explanation: "Kontrollen forutsetter tilgang til innholdet, og derfor er «alle kan lese» en forutsetning, ikke en svakhet. «For at signaturen skal kunne slettes etter kontrollen» og «For at avsenderen skal kunne bekrefte at meldingen faktisk kom fram» beskriver ting som ikke skjer. «Fordi signaturen bare virker på ukrypterte filer» er feil: en signert melding kan godt krypteres i tillegg.",
    },
    {
      question: "Hvorfor løser et sertifikat mellommannsproblemet?",
      options: ["Angriperen kan ikke lage et gyldig sertifikat uten utstederens private nøkkel", "Sertifikatet krypterer trafikken sterkere enn vanlig kryptering", "Sertifikatet skjuler hvilken tjener du kobler deg til", "Sertifikatet gjør at angriperen ikke kan avlytte trådløse nett"],
      explanation: "Angrepet går ut på å levere sin egen nøkkel, og sertifikatet binder nøkkelen til en identitet på en måte som ikke kan forfalskes. «Sertifikatet krypterer trafikken sterkere enn vanlig kryptering» gir sertifikatet en krypterende rolle det ikke har. «Sertifikatet skjuler hvilken tjener du kobler deg til» og «Sertifikatet gjør at angriperen ikke kan avlytte trådløse nett» beskriver virkninger som ikke finnes.",
    },
    {
      question: "Hvorfor må et sertifikat kunne trekkes tilbake før det utløper?",
      options: ["Fordi den private nøkkelen kan komme på avveie", "Fordi utstederen krever betaling for hvert år det gjelder", "Fordi nettleseren bare stoler på ferske sertifikater", "Fordi domenenavnet endres med jevne mellomrom"],
      explanation: "Kommer nøkkelen på avveie, kan den som har den, fortsette å opptre som eieren inntil sertifikatet erklæres ugyldig. «Fordi utstederen krever betaling for hvert år det gjelder» er et forretningsforhold, ikke en sikkerhetsmekanisme. «Fordi nettleseren bare stoler på ferske sertifikater» og «Fordi domenenavnet endres med jevne mellomrom» beskriver forhold som ikke utløser tilbaketrekking.",
    },
    {
      question: "Hva skiller en digital signatur fra en håndskrevet underskrift?",
      options: ["Den digitale er regnet ut fra innholdet og blir ugyldig hvis innholdet endres", "Den digitale er lettere å kopiere fra ett dokument til et annet", "Den håndskrevne gir både integritet og autentisitet, den digitale bare autentisitet", "Den digitale krever at mottakeren har avsenderens private nøkkel"],
      explanation: "Derfor gir den digitale signaturen både autentisitet og integritet. «Den digitale er lettere å kopiere fra ett dokument til et annet» snur forholdet — det er den håndskrevne som i prinsippet kan klippes og limes. «Den håndskrevne gir både integritet og autentisitet…» bytter om egenskapene. «Den digitale krever at mottakeren har avsenderens private nøkkel» ville ødelagt hele konstruksjonen.",
    },
  ],
  'in1020-3-5': [
    {
      question: "Er brannmur et sikkerhetsmål eller et sikkerhetstiltak?",
      options: ["Tiltak — det er noe man setter opp", "Mål — det er en egenskap systemet har", "Begge deler, avhengig av sammenhengen det brukes i", "Ingen av delene — det er en trussel man må håndtere"],
      explanation: "Testen avgjør: kan man installere det, er det et tiltak. «Mål — det er en egenskap systemet har» er felle #1, den hyppigst påpekte feilen i faget. «Begge deler, avhengig av sammenhengen det brukes i» finnes ikke som kategori. «Ingen av delene — det er en trussel man må håndtere» snur rollen helt om.",
    },
    {
      question: "Er uavviselighet et sikkerhetsmål eller et sikkerhetstiltak?",
      options: ["Mål — det er en egenskap ved en handling", "Tiltak — det er noe man installerer", "Tiltak — det er noe man gjennomfører jevnlig", "Ingen av delene — det er en juridisk term uten teknisk innhold"],
      explanation: "Uavviselighet er egenskapen at den ansvarlige ikke kan nekte, og den oppnås med digital signatur. «Tiltak — det er noe man installerer» og «Tiltak — det er noe man gjennomfører jevnlig» er felle #1. «Ingen av delene — det er en juridisk term uten teknisk innhold» er feil: målet har et helt konkret teknisk innhold.",
    },
    {
      question: "Hvilket mål tjener en sjekksum?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Sporbarhet"],
      explanation: "Sjekksummen avslører endringer, men skjuler ingenting. «Konfidensialitet» er felle #9. «Tilgjengelighet» gjelder sikkerhetskopi og redundans. «Sporbarhet» gjelder logging.",
    },
    {
      question: "Hvilket mål tjener sikkerhetskopiering?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Uavviselighet"],
      explanation: "Kopien sørger for at innholdet finnes når originalen er borte. «Konfidensialitet» er feil: kopien hindrer ingen i å lese noe, snarere tvert imot. «Integritet» gjelder sjekksum og signatur. «Uavviselighet» gjelder digital signatur.",
    },
    {
      question: "Hvilken nøkkel krypterer en hemmelig melding til Bob?",
      options: ["Bobs offentlige nøkkel", "Bobs private nøkkel", "Avsenderens private nøkkel", "Avsenderens offentlige nøkkel"],
      explanation: "Hemmelighold bruker mottakerens nøkler. «Bobs private nøkkel» er umulig — avsenderen har den ikke. «Avsenderens private nøkkel» ville gjort meldingen lesbar for alle, altså signering. «Avsenderens offentlige nøkkel» ville låst meldingen så bare avsenderen selv kunne åpne den.",
    },
    {
      question: "Hvilken nøkkel validerer en signatur fra Alice?",
      options: ["Alices offentlige nøkkel", "Alices private nøkkel", "Mottakerens offentlige nøkkel", "Mottakerens private nøkkel"],
      explanation: "Signering bruker avsenderens nøkler i begge ledd. «Alices private nøkkel» er umulig: bare Alice har den. «Mottakerens offentlige nøkkel» og «Mottakerens private nøkkel» bruker mottakerens nøkkelpar, som ikke er involvert i signaturen.",
    },
    {
      question: "Hvilke mål gir en digital signatur?",
      options: ["Integritet, autentisitet og uavviselighet", "Konfidensialitet, integritet og autentisitet", "Bare konfidensialitet og uavviselighet", "Konfidensialitet, tilgjengelighet og sporbarhet"],
      explanation: "Signaturen viser at innholdet er uendret, hvem det kom fra, og at avsenderen ikke kan nekte. «Konfidensialitet, integritet og autentisitet», «Bare konfidensialitet og uavviselighet» og «Konfidensialitet, tilgjengelighet og sporbarhet» tar med konfidensialitet, som er felle #4 — meldingen sendes i klartekst.",
    },
    {
      question: "En ansatt sletter loggene etter å ha endret data. Hvilke mål rammes av slettingen?",
      options: ["Sporbarhet og uavviselighet", "Konfidensialitet og tilgjengelighet", "Bare integritet", "Bare personvern"],
      explanation: "Uten logger kan ingen se hva som skjedde, og den ansvarlige kan nekte. «Konfidensialitet og tilgjengelighet» rammes ikke: systemet er oppe, og ingen har lest noe de ikke skulle. «Bare integritet» gjelder selve endringen, ikke slettingen. «Bare personvern» forutsetter personopplysninger.",
    },
    {
      question: "Sannsynlighet 1 og konsekvens 5, mot sannsynlighet 4 og konsekvens 4. Hvilken har høyest risiko?",
      options: ["Den andre, med 16 mot 5", "Den første, siden konsekvensen er høyest mulig", "De er like alvorlige når man ser bort fra skalaen", "Den første, med 5 mot 4"],
      explanation: "`4 · 4 = 16` mot `1 · 5 = 5`. «Den første, siden konsekvensen er høyest mulig» rangerer etter konsekvens alene, som er den vanligste feilen. «De er like alvorlige når man ser bort fra skalaen» unnlater å regne. «Den første, med 5 mot 4» ganger ikke faktorene i det hele tatt.",
    },
    {
      question: "Hvilket mål bryter et løsepengevirus først og fremst?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Autentisitet"],
      explanation: "Filene finnes, men er låst. «Konfidensialitet» er fella: angrepet bruker kryptering som våpen, men angriperen har ikke nødvendigvis lest noe. «Integritet» er feil fordi innholdet er uendret. «Autentisitet» gjelder forfalskning av identitet.",
    },
    {
      question: "Hvilket mål bryter et rootkit først og fremst?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Sporbarhet"],
      explanation: "Rootkitet manipulerer systemet slik at det rapporterer noe annet enn det som er tilfelle. «Konfidensialitet» er fella: navnet høres ut som spionasje. «Tilgjengelighet» og «Sporbarhet» rammes ikke direkte av selve skjulingen.",
    },
    {
      question: "Hvilke tiltak gir konfidensialitet?",
      options: ["Diskkryptering og tilgangskontroll", "Sjekksum og digital signatur i kombinasjon", "Sikkerhetskopiering og redundans", "Logging og sikkerhetsøvelser"],
      explanation: "Begge hindrer at uvedkommende leser innholdet. «Sjekksum og digital signatur i kombinasjon» gir integritet, autentisitet og uavviselighet. «Sikkerhetskopiering og redundans» gir tilgjengelighet. «Logging og sikkerhetsøvelser» gir sporbarhet og evnen til å komme tilbake i drift.",
    },
    {
      question: "Hva må Alice gjøre for å sende en melding som er både hemmelig og bevislig fra henne?",
      options: ["Signere med sin private nøkkel og kryptere med Bobs offentlige", "Bare signere med sin private nøkkel, siden det dekker alle mål", "Bare kryptere med Bobs offentlige nøkkel, siden det dekker alle mål", "Kryptere med sin private nøkkel og signere med Bobs offentlige"],
      explanation: "Signering gir integritet, autentisitet og uavviselighet; kryptering gir konfidensialitet. «Bare signere med sin private nøkkel, siden det dekker alle mål» mangler hemmelighold, «Bare kryptere med Bobs offentlige nøkkel, siden det dekker alle mål» mangler beviset for avsender. «Kryptere med sin private nøkkel og signere med Bobs offentlige» snur begge retningene.",
    },
    {
      question: "Hvor mange nøkler er i bruk når en melding både signeres og krypteres?",
      options: ["Fire — to fra hvert nøkkelpar", "To — én fra hver part", "Tre — begge avsenderens og mottakerens offentlige", "Én — den delte symmetriske nøkkelen"],
      explanation: "Avsenderens private og offentlige tar signaturen; mottakerens offentlige og private tar hemmeligholdet. «To — én fra hver part» og «Tre — begge avsenderens og mottakerens offentlige» teller for få. «Én — den delte symmetriske nøkkelen» beskriver symmetrisk kryptering, som ikke er i bruk her.",
    },
    {
      question: "Stopper en brannmur innsidetrusler?",
      options: ["Nei — innsideren er allerede innenfor brannmuren", "Ja — brannmuren kontrollerer all trafikk i nettet", "Ja, forutsatt at den er riktig konfigurert av en fagperson", "Nei — brannmurer virker bare mot skadevare, ikke mot trafikk"],
      explanation: "Brannmuren kontrollerer trafikk inn og ut av nettet, ikke hva en autorisert bruker gjør innenfor. «Ja — brannmuren kontrollerer all trafikk i nettet» og «Ja, forutsatt at den er riktig konfigurert av en fagperson» overser hvor innsideren står. «Nei — brannmurer virker bare mot skadevare, ikke mot trafikk» beskriver brannmurens virkemåte feil.",
    },
    {
      question: "Hvilken egenskap har en hash-verdi?",
      options: ["Fast lengde uansett hvor stort innholdet er", "Lengde som vokser med innholdets størrelse", "Mulighet til å regnes tilbake til innholdet", "Evne til å skjule innholdet for uvedkommende"],
      explanation: "Derfor er det hash-verdien som signeres, ikke meldingen. «Lengde som vokser med innholdets størrelse» er feil om konstruksjonen. «Mulighet til å regnes tilbake til innholdet» ville gjort passordlagring verdiløs. «Evne til å skjule innholdet for uvedkommende» er felle #9.",
    },
    {
      question: "Hva er testen som skiller et mål fra et tiltak?",
      options: ["Kan man installere eller gjennomføre det? Da er det et tiltak", "Er det teknisk? Da er det et tiltak; ellers er det et mål", "Koster det penger? Da er det et tiltak, ellers et mål", "Står det i loven? Da er det et tiltak, ellers et mål"],
      explanation: "Et mål er en egenskap systemet har eller mangler. «Er det teknisk? Da er det et tiltak; ellers er det et mål» er feil fordi opplæring og øvelser også er tiltak. «Koster det penger? Da er det et tiltak, ellers et mål» og «Står det i loven? Da er det et tiltak, ellers et mål» innfører kriterier som ikke skiller kategoriene.",
    },
    {
      question: "Hvilket mål bryter en tapt ukryptert minnepinne?",
      options: ["Konfidensialitet", "Integritet i selve innholdet", "Sporbarhet", "Uavviselighet"],
      explanation: "Finneren kan lese innholdet. «Integritet i selve innholdet» ville krevd at noe var endret. «Sporbarhet» og «Uavviselighet» gjelder muligheten til å se eller bevise hva som skjedde, som ikke rammes av tapet i seg selv.",
    },
    {
      question: "Er en sikkerhetsøvelse et tiltak?",
      options: ["Ja — et tiltak er alt man gjør for å nå et mål, ikke bare det man installerer", "Nei — bare tekniske mekanismer regnes som tiltak i faget", "Nei — en øvelse er et mål man arbeider mot over tid", "Ja, men bare hvis den gjennomføres av eksterne konsulenter"],
      explanation: "Øvelsen tjener først og fremst tilgjengelighet, ved å trene på å komme tilbake i drift. «Nei — bare tekniske mekanismer regnes som tiltak i faget» avgrenser tiltaksbegrepet feil. «Nei — en øvelse er et mål man arbeider mot over tid» er felle #1 i motsatt retning. «Ja, men bare hvis den gjennomføres av eksterne konsulenter» innfører et krav som ikke finnes.",
    },
    {
      question: "Hvorfor er «Bob validerer signaturen med sin egen private nøkkel» en farlig distraktor?",
      options: ["Fordi Bobs private nøkkel faktisk brukes i saken, men til dekryptering", "Fordi Bob ikke har noen privat nøkkel i det hele tatt i denne saken", "Fordi validering aldri krever noen nøkkel", "Fordi Bobs private nøkkel bare kan brukes én gang"],
      explanation: "Feilen er å knytte nøkkelen til feil operasjon, og halvriktige alternativer er de dyreste. «Fordi Bob ikke har noen privat nøkkel i det hele tatt i denne saken» er feil: Bob har et fullt nøkkelpar. «Fordi validering aldri krever noen nøkkel» og «Fordi Bobs private nøkkel bare kan brukes én gang» beskriver forhold som ikke finnes.",
    },
    {
      question: "En forfalsket nettside fanger opp innloggingsdetaljer. Hvilke mål brytes?",
      options: ["Autentisitet, integritet og konfidensialitet", "Bare tilgjengelighet og sporbarhet", "Bare integritet i innholdet på siden", "Bare personvern og uavviselighet"],
      explanation: "Siden er ikke den den utgir seg for, innholdet er falskt, og passordet lekker. «Bare tilgjengelighet og sporbarhet» er feil fordi den ekte tjenesten er uberørt og loggene intakte. «Bare integritet i innholdet på siden» er for smalt. «Bare personvern og uavviselighet» utelater de tre målene som faktisk brytes.",
    },
    {
      question: "Hva bør du gjøre først i en oppgave om nøkkelretning?",
      options: ["Avgjøre om formålet er hemmelighold eller signering", "Se hvilke alternativer som nevner private nøkler", "Velge det alternativet som nevner flest nøkler", "Regne ut hvor mange nøkler partene har til sammen"],
      explanation: "Formålet avgjør hvem sine nøkler som er i bruk: mottakerens ved hemmelighold, avsenderens ved signering. «Se hvilke alternativer som nevner private nøkler», «Velge det alternativet som nevner flest nøkler» og «Regne ut hvor mange nøkler partene har til sammen» ser på alternativenes form i stedet for på hva operasjonen skal oppnå.",
    },
    {
      question: "Hvor mange mål bryter en typisk sikkerhetshendelse?",
      options: ["Ofte flere samtidig — derfor må alle sju vurderes", "Alltid nøyaktig ett, siden målene utelukker hverandre", "Alltid minst fire, siden systemene henger sammen", "Aldri mer enn to, siden målene er ordnet parvis"],
      explanation: "En overtatt konto med nedlasting og sletting av logger bryter fem mål. «Alltid nøyaktig ett, siden målene utelukker hverandre» er den vanligste feilantakelsen. «Alltid minst fire, siden systemene henger sammen» og «Aldri mer enn to, siden målene er ordnet parvis» innfører regler som ikke finnes — antallet avhenger av hva som faktisk skjedde.",
    },
    {
      question: "Hvilket mål tjener tofaktor-autentisering først og fremst?",
      options: ["Konfidensialitet", "Tilgjengelighet for tjenesten", "Sporbarhet", "Integritet"],
      explanation: "Tofaktor hindrer at uvedkommende kommer inn og får lest noe, og styrker samtidig autentisiteten. «Tilgjengelighet for tjenesten» gjelder sikkerhetskopi og redundans. «Sporbarhet» gjelder logging. «Integritet» gjelder sjekksum og signatur.",
    },
    {
      question: "Hva er den vanligste feilen når man rangerer risiko?",
      options: ["Å rangere etter konsekvens alene og glemme sannsynligheten", "Å gange faktorene sammen i stedet for å legge dem sammen", "Å bruke en skala fra 1 til 5 i stedet for 1 til 10", "Å regne ut risikoen for flere trusler samtidig"],
      explanation: "En katastrofe som praktisk talt aldri inntreffer, gir lav risiko. «Å gange faktorene sammen i stedet for å legge dem sammen» beskriver riktig framgangsmåte, ikke en feil. «Å bruke en skala fra 1 til 5 i stedet for 1 til 10» og «Å regne ut risikoen for flere trusler samtidig» handler om oppsett, ikke om regnefeil.",
    },
    {
      question: "Hvorfor må mottakeren kunne lese en signert melding i klartekst?",
      options: ["For å regne ut hash-verdien og sammenligne den med den signerte", "For at avsenderen skal kunne bekrefte at meldingen kom fram", "Fordi signaturen ikke kan lages på krypterte meldinger", "Fordi klartekst er et krav i alle sertifikatordninger"],
      explanation: "Kontrollen forutsetter tilgang til innholdet, og derfor er «alle kan lese» en forutsetning, ikke en svakhet. «For at avsenderen skal kunne bekrefte at meldingen kom fram» beskriver noe som ikke skjer. «Fordi signaturen ikke kan lages på krypterte meldinger» og «Fordi klartekst er et krav i alle sertifikatordninger» innfører krav som ikke finnes — en signert melding kan godt krypteres i tillegg.",
    },
  ],
  'in1020-3-6': [
    {
      question: "Hva er autentisering?",
      options: ["Å bekrefte at noen er den de utgir seg for å være", "Å avgjøre hvilke rettigheter en bruker skal ha", "Å håndheve hvem som får lese og skrive hvor", "Å registrere hva hver bruker har gjort i systemet"],
      explanation: "Autentisering svarer på «hvem er du?». «Å avgjøre hvilke rettigheter en bruker skal ha» er autorisasjon, «Å håndheve hvem som får lese og skrive hvor» er tilgangskontroll, og «Å registrere hva hver bruker har gjort i systemet» er logging — tre andre mekanismer som ofte forveksles med den.",
    },
    {
      question: "Hva er forskjellen på autentisering og autorisasjon?",
      options: ["Autentisering svarer på «hvem er du?», autorisasjon på «hva får du lov til?»", "Autentisering svarer på «hva får du lov til?», autorisasjon på «hvem er du?»", "De to betyr det samme, men brukes om henholdsvis brukere og maskiner", "Autentisering gjelder passord, mens autorisasjon gjelder biometri"],
      explanation: "Rekkefølgen er alltid autentisering først: systemet må vite hvem du er før det kan slå opp rettighetene. «Autentisering svarer på «hva får du lov til?»…» bytter om de to. «De to betyr det samme, men brukes om henholdsvis brukere og maskiner» og «Autentisering gjelder passord, mens autorisasjon gjelder biometri» innfører skiller som ikke finnes.",
    },
    {
      question: "En kantinemedarbeider kan åpne alle pasientjournaler. Hva har sviktet?",
      options: ["Autorisasjonen — rettighetene er for vide", "Autentiseringen — det er feil person som er logget inn i systemet", "Krypteringen — journalene er ikke beskyttet", "Sporbarheten — ingen kan se hvem som åpnet dem"],
      explanation: "Innloggingen er korrekt; feilen er at rettighetene ikke følger oppgaven. «Autentiseringen — det er feil person som er logget inn i systemet» ville krevd at det var feil person. «Krypteringen — journalene er ikke beskyttet» og «Sporbarheten — ingen kan se hvem som åpnet dem» handler om andre tiltak som ikke er problemet her.",
    },
    {
      question: "Noen logger inn på din konto med et passord fra en lekkasje. Hva har sviktet?",
      options: ["Autentiseringen — systemet trodde det snakket med deg", "Autorisasjonen — rettighetene til kontoen var altfor vide", "Tilgjengeligheten — du kommer ikke inn selv", "Integriteten — kontoen er endret"],
      explanation: "Rettighetene var riktige; de tilhørte bare feil person i det øyeblikket. «Autorisasjonen — rettighetene til kontoen var altfor vide» gjelder når rettighetene er feil. «Tilgjengeligheten — du kommer ikke inn selv» og «Integriteten — kontoen er endret» beskriver mulige følger, ikke hvilket ledd som sviktet.",
    },
    {
      question: "Hvilke tre faktortyper finnes i autentisering?",
      options: ["Noe du vet, noe du har, noe du er", "Noe du vet, noe du ser, noe du sier", "Noe du eier, noe du leier, noe du låner", "Noe du skriver, noe du husker, noe du gjentar"],
      explanation: "Passord er «vet», kodebrikke er «har», fingeravtrykk er «er». «Noe du vet, noe du ser, noe du sier», «Noe du eier, noe du leier, noe du låner» og «Noe du skriver, noe du husker, noe du gjentar» er oppdiktede inndelinger uten forankring i faget.",
    },
    {
      question: "Er passord og sikkerhetsspørsmål reell tofaktor-autentisering?",
      options: ["Nei — begge er «noe du vet», altså samme faktortype", "Ja — det er to helt ulike opplysninger brukeren selv må oppgi", "Ja — sikkerhetsspørsmål regnes som «noe du er»", "Nei — sikkerhetsspørsmål er ikke en gyldig faktor i det hele tatt"],
      explanation: "Reell tofaktor krever to ulike typer. «Ja — det er to helt ulike opplysninger brukeren selv må oppgi» teller antall felt i stedet for antall typer. «Ja — sikkerhetsspørsmål regnes som «noe du er»» plasserer svaret i feil kategori. «Nei — sikkerhetsspørsmål er ikke en gyldig faktor i det hele tatt» kommer til riktig konklusjon av feil grunn.",
    },
    {
      question: "Er brukernavn og passord tofaktor-autentisering?",
      options: ["Nei — brukernavnet er en identifikator, ikke et hemmelig bevis", "Ja — det er to atskilte felt som begge må fylles ut helt riktig", "Ja — brukernavnet regnes som «noe du har»", "Nei — men det ville vært det hvis brukernavnet var hemmelig"],
      explanation: "Brukernavn er ofte offentlig kjent eller lett å gjette, så bare passordet er en faktor. «Ja — det er to atskilte felt som begge må fylles ut helt riktig» teller felt. «Ja — brukernavnet regnes som «noe du har»» plasserer det i feil kategori. «Nei — men det ville vært det hvis brukernavnet var hemmelig» er nesten riktig, men et brukernavn er per definisjon en identifikator.",
    },
    {
      question: "Hvilken faktortype er et fingeravtrykk?",
      options: ["Noe du er", "Noe du har", "Noe du vet", "Ingen av delene — biometri er ikke en faktor"],
      explanation: "Fingeravtrykk er en kroppslig egenskap. «Noe du har» gjelder fysiske gjenstander som kodebrikke og telefon — og forskjellen er reell: en brikke kan byttes ut, et fingeravtrykk kan ikke. «Noe du vet» og «Ingen av delene — biometri er ikke en faktor» er feil.",
    },
    {
      question: "Hvorfor demper tofaktor-autentisering phishing?",
      options: ["Fordi den falske siden bare kan fange den ene faktortypen", "Fordi falske innloggingssider aldri klarer å be om et passord", "Fordi tofaktor krypterer passordet før det sendes", "Fordi tofaktor gjør at passordet aldri må skrives inn"],
      explanation: "Angriperen får passordet, men mangler den fysiske faktoren. «Fordi falske innloggingssider aldri klarer å be om et passord» er feil: en falsk side kan be om hva som helst. «Fordi tofaktor krypterer passordet før det sendes» og «Fordi tofaktor gjør at passordet aldri må skrives inn» beskriver mekanismer tofaktor ikke har.",
    },
    {
      question: "Hvorfor lagres passord som hash-verdi og ikke i klartekst?",
      options: ["Fordi hash går bare én vei, så et innbrudd gir ikke passordene", "Fordi hash-verdier tar vesentlig mindre plass i selve databasen", "Fordi hash gjør passordet sterkere enn det brukeren valgte", "Fordi hash gjør at brukeren kan få passordet tilsendt ved behov"],
      explanation: "Systemet kan kontrollere passordet uten noen gang å ha lagret det. «Fordi hash-verdier tar vesentlig mindre plass i selve databasen» er en bivirkning, ikke begrunnelsen. «Fordi hash gjør passordet sterkere enn det brukeren valgte» er feil: hashing styrker ikke et svakt passord. «Fordi hash gjør at brukeren kan få passordet tilsendt ved behov» er umulig nettopp fordi funksjonen er enveis.",
    },
    {
      question: "Hva gjør et salt?",
      options: ["Gjør ferdiglagde oppslagstabeller ubrukelige og skjuler like passord", "Krypterer passordet slik at det kan hentes fram i lesbar form igjen", "Gjør et svakt passord like sterkt som et langt og unikt", "Erstatter hashingen, slik at passordet ikke må hashes i tillegg"],
      explanation: "Saltet er unikt per bruker, så angriperen må regne på nytt for hver enkelt. «Krypterer passordet slik at det kan hentes fram i lesbar form igjen» forveksler hash med kryptering. «Gjør et svakt passord like sterkt som et langt og unikt» er feil: styrken må komme fra passordet. «Erstatter hashingen, slik at passordet ikke må hashes i tillegg» er feil — salt og hashing gjør ulike jobber, og begge trengs.",
    },
    {
      question: "Må saltet holdes hemmelig?",
      options: ["Nei — det lagres åpent, og poenget er at det er unikt per bruker", "Ja — lekker saltet, kan passordet regnes ut direkte fra hash-verdien", "Ja — saltet er den egentlige nøkkelen i passordlagringen", "Nei — men det må byttes hver gang brukeren logger inn"],
      explanation: "Unikheten er det som gjør oppslagstabeller ubrukelige, ikke hemmeligholdet. «Ja — lekker saltet, kan passordet regnes ut direkte fra hash-verdien» og «Ja — saltet er den egentlige nøkkelen i passordlagringen» gir saltet en rolle det ikke har. «Nei — men det må byttes hver gang brukeren logger inn» ville gjort innlogging umulig, siden systemet trenger det opprinnelige saltet.",
    },
    {
      question: "Et system kan sende deg passordet ditt på e-post. Hva betyr det?",
      options: ["At passordet lagres i lesbar form, noe som er en alvorlig svakhet", "At systemet bruker en særlig sikker form for hashing", "At passordet er kryptert med din egen offentlige nøkkel", "At systemet følger god praksis for passordhåndtering"],
      explanation: "En hash-verdi kan ikke reverseres, så et system som henter fram passordet, må ha det i lesbar form. «At systemet bruker en særlig sikker form for hashing» og «At systemet følger god praksis for passordhåndtering» snur vurderingen. «At passordet er kryptert med din egen offentlige nøkkel» beskriver en løsning ingen vanlig tjeneste bruker til dette.",
    },
    {
      question: "En base med brukernavn, salt og hash-verdier lekker. Hva kan angriperen gjøre?",
      options: ["Gjette passord og kontrollere gjetningene mot basen, én bruker om gangen", "Lese alle passordene direkte ut av basen uten videre arbeid", "Ingenting — salt og hash gjør basen helt verdiløs for angriperen", "Endre hash-verdiene slik at alle passord blir like"],
      explanation: "Hash er enveis, men gjetting er fortsatt mulig. «Lese alle passordene direkte ut av basen uten videre arbeid» overser enveisegenskapen. «Ingenting — salt og hash gjør basen helt verdiløs for angriperen» er for optimistisk: svake passord faller uansett. «Endre hash-verdiene slik at alle passord blir like» forutsetter skrivetilgang og ville uansett bare låst brukerne ute.",
    },
    {
      question: "Hva må skje etter en lekkasje av salt og hash-verdier?",
      options: ["Alle brukere må bytte passord, også i andre tjenester der det er gjenbrukt", "Alle salt må byttes ut, så blir de gamle hash-verdiene ugyldige", "Ingenting — hash-verdiene er ubrukelige for angriperen uansett", "Bare brukere med korte passord trenger å foreta seg noe"],
      explanation: "Passordene kan gjettes, og gjenbruk gjør at én lekkasje blir til mange innbrudd. «Alle salt må byttes ut, så blir de gamle hash-verdiene ugyldige» hjelper ikke: saltet var aldri hemmelig. «Ingenting — hash-verdiene er ubrukelige for angriperen uansett» undervurderer gjettingsangrep. «Bare brukere med korte passord trenger å foreta seg noe» forutsetter at man vet hvem som har svake passord.",
    },
    {
      question: "Hva sier prinsippet om minste privilegium?",
      options: ["Hver bruker får akkurat de rettighetene oppgaven krever, og ikke flere", "Så få ansatte som mulig skal ha tilgang til systemene", "Alle brukere bør ha like rettigheter for å forenkle driften", "Administratorrettigheter bør deles på flest mulig for å spre risikoen"],
      explanation: "Skaden blir mindre både ved feil og ved en overtatt konto. «Så få ansatte som mulig skal ha tilgang til systemene» handler om antall personer, ikke om hva hver får lov til. «Alle brukere bør ha like rettigheter for å forenkle driften» og «Administratorrettigheter bør deles på flest mulig for å spre risikoen» går i motsatt retning av prinsippet.",
    },
    {
      question: "Er tilgangskontroll et sikkerhetsmål eller et tiltak?",
      options: ["Tiltak — det er en mekanisme man setter opp", "Mål — det er en egenskap systemet har", "Begge deler, avhengig av hvem som spør", "Ingen av delene — det er en juridisk forpliktelse"],
      explanation: "Målet tilgangskontroll tjener, er konfidensialitet. «Mål — det er en egenskap systemet har» er felle #1. «Begge deler, avhengig av hvem som spør» finnes ikke som kategori. «Ingen av delene — det er en juridisk forpliktelse» blander inn regelverk som ikke definerer begrepet.",
    },
    {
      question: "Hva gjør et passord sterkt?",
      options: ["Lengde og uforutsigbarhet, og at det er unikt per tjeneste", "Minst ett spesialtegn og minst ett tall, uansett hvor kort det er", "At det byttes minst én gang i måneden", "At det inneholder ord fra flere språk"],
      explanation: "Hvert ekstra tegn ganger opp antall muligheter, og et passord fra en vanlig liste faller uansett hvordan det ser ut. «Minst ett spesialtegn og minst ett tall, uansett hvor kort det er» og «At det inneholder ord fra flere språk» er formkrav som ikke i seg selv gir styrke. «At det byttes minst én gang i måneden» er en gammel anbefaling som i praksis gir svakere passord.",
    },
  ],
  'in1020-3-7': [
    {
      question: "En kommune bruker en skyleverandør til å drifte journalsystemet. Hvem er behandlingsansvarlig?",
      options: ["Kommunen, som har bestemt formålet med behandlingen", "Skyleverandøren, som faktisk drifter og lagrer dataene", "Begge to i fellesskap, med likt ansvar overfor de registrerte", "Ingen av dem — ansvaret ligger hos den enkelte saksbehandleren"],
      explanation: "Ansvaret følger av å bestemme hvorfor og hvordan, ikke av hvem som trykker på tastene. «Skyleverandøren, som faktisk drifter og lagrer dataene» er den mest testede feilpåstanden i sjangeren. «Begge to i fellesskap, med likt ansvar overfor de registrerte» og «Ingen av dem — ansvaret ligger hos den enkelte saksbehandleren» flytter ansvaret bort fra den som bestemte formålet.",
    },
    {
      question: "Hva er en databehandler?",
      options: ["Den som behandler personopplysninger på oppdrag fra den ansvarlige", "Den som bestemmer hvorfor og hvordan opplysningene skal behandles", "Personen opplysningene handler om, altså den registrerte", "Myndigheten som fører tilsyn med at reglene følges"],
      explanation: "Skyleverandøren er typisk databehandler og skal bare gjøre det avtalen sier. «Den som bestemmer hvorfor og hvordan opplysningene skal behandles» beskriver den behandlingsansvarlige. «Personen opplysningene handler om, altså den registrerte» beskriver den registrerte. «Myndigheten som fører tilsyn med at reglene følges» beskriver tilsynsmyndigheten.",
    },
    {
      question: "Kreves samtykke alltid for behandling av personopplysninger?",
      options: ["Nei — samtykke er ett av flere lovlige grunnlag", "Ja — uten samtykke er all behandling ulovlig", "Ja, med mindre opplysningene er anonymisert på forhånd", "Nei — samtykke kreves aldri når en offentlig virksomhet behandler"],
      explanation: "En kommune som fatter vedtak, og en arbeidsgiver som utbetaler lønn, bygger på andre grunnlag. «Ja — uten samtykke er all behandling ulovlig» og «Ja, med mindre opplysningene er anonymisert på forhånd» gjør samtykke til eneste grunnlag. «Nei — samtykke kreves aldri når en offentlig virksomhet behandler» går for langt i motsatt retning — også offentlige virksomheter kan bygge på samtykke i noen tilfeller.",
    },
    {
      question: "Hva betyr dataminimering?",
      options: ["Å samle inn bare det som er nødvendig for formålet", "Å lagre opplysningene i et komprimert format", "Å slette opplysningene så snart de er brukt én gang", "Å dele opplysningene på flere ulike systemer"],
      explanation: "Trenger skjemaet bare postnummer, skal det ikke be om fødselsdato. «Å lagre opplysningene i et komprimert format» forveksler prinsippet med teknisk komprimering. «Å slette opplysningene så snart de er brukt én gang» beskriver en overdreven versjon av lagringsbegrensning. «Å dele opplysningene på flere ulike systemer» har ingen sammenheng med prinsippet.",
    },
    {
      question: "Hva er forskjellen på formålsbegrensning og lagringsbegrensning?",
      options: ["Formålsbegrensning gjelder hva de brukes til; lagringsbegrensning hvor lenge", "Formålsbegrensning gjelder hvor lenge de lagres; lagringsbegrensning hva de brukes til", "De to er samme prinsipp med to ulike navn i regelverket", "Formålsbegrensning gjelder offentlige virksomheter, lagringsbegrensning private"],
      explanation: "Begge prinsipper finnes, og de dekker ulike spørsmål. «Formålsbegrensning gjelder hvor lenge de lagres;…» bytter om de to — en fast distraktor. «De to er samme prinsipp med to ulike navn i regelverket» slår sammen to adskilte prinsipper. «Formålsbegrensning gjelder offentlige virksomheter…» innfører et skille som ikke finnes.",
    },
    {
      question: "Kan en IP-adresse være en personopplysning?",
      options: ["Ja — når den kan knyttes til en bestemt person", "Nei — en IP-adresse tilhører en maskin, ikke en person", "Nei — bare navn og fødselsnummer regnes som personopplysninger", "Ja — alle IP-adresser er alltid personopplysninger uansett"],
      explanation: "Kriteriet er om opplysningen kan knyttes til noen, ikke hvordan den ser ut. «Nei — en IP-adresse tilhører en maskin, ikke en person» og «Nei — bare navn og fødselsnummer regnes som personopplysninger» gjør kriteriet for snevert. «Ja — alle IP-adresser er alltid personopplysninger uansett» går for langt: en adresse som ikke kan knyttes til noen, faller utenfor.",
    },
    {
      question: "Hva har den registrerte rett til?",
      options: ["Innsyn i hvilke opplysninger som er lagret, og retting av uriktige", "Å få absolutt alle opplysninger slettet uansett hvorfor de er lagret", "Å nekte enhver behandling av opplysninger om seg selv", "Å kreve at opplysningene bare lagres i utlandet"],
      explanation: "Innsyn og retting følger av prinsippene om åpenhet og riktighet. «Å få absolutt alle opplysninger slettet uansett hvorfor de er lagret» og «Å nekte enhver behandling av opplysninger om seg selv» er for absolutte: rettighetene har unntak når det finnes et annet lovlig grunnlag. «Å kreve at opplysningene bare lagres i utlandet» er ikke en rettighet i det hele tatt.",
    },
    {
      question: "En nettbutikk ber om fødselsnummer for å sende en pakke. Hvilket prinsipp brytes?",
      options: ["Dataminimering", "Riktighet", "Lagringsbegrensning", "Ingen — butikken kan be om det den vil"],
      explanation: "Fødselsnummer er ikke nødvendig for å sende en pakke. «Riktighet» gjelder om opplysningene er korrekte, som ikke er problemet. «Lagringsbegrensning» gjelder lagringstid. «Ingen — butikken kan be om det den vil» overser prinsippene helt.",
    },
    {
      question: "Hvem retter personvernreglene seg først og fremst mot?",
      options: ["Virksomheter, som kan ilegges gebyrer og må dokumentere etterlevelse", "Enkeltpersoner, som selv må sørge for å beskytte sine egne data", "Programvareleverandører, som lager systemene", "Utenlandske selskaper, siden norske er unntatt"],
      explanation: "Privatpersoners rent personlige bruk faller utenfor. «Enkeltpersoner, som selv må sørge for å beskytte sine egne data» snur ansvaret. «Programvareleverandører, som lager systemene» treffer bare når leverandøren selv behandler opplysninger. «Utenlandske selskaper, siden norske er unntatt» er feil: reglene gjelder likt.",
    },
    {
      question: "Hva skiller en orm fra et virus?",
      options: ["Ormen sprer seg selv; viruset trenger en vertsfil og en handling", "Viruset sprer seg selv; ormen trenger en vertsfil og en handling", "Ormen rammer nettverk, viruset rammer bare enkeltmaskiner", "De to er samme sak, men ormen er alltid mer skadelig"],
      explanation: "Selvspredning er ormens kjennetegn. «Viruset sprer seg selv; ormen trenger en vertsfil og en handling» bytter om de to — den hyppigst testede forvekslingen. «Ormen rammer nettverk, viruset rammer bare enkeltmaskiner» beskriver en følge, ikke definisjonen. «De to er samme sak, men ormen er alltid mer skadelig» slår sammen to adskilte typer.",
    },
    {
      question: "Hva kjennetegner en trojaner?",
      options: ["En skjult skadelig funksjon i noe som ser nyttig ut", "Evnen til å spre seg selv over nettverk uten hjelp", "At den manipulerer systemet så den selv blir usynlig", "At den utløses først når en bestemt dato inntreffer"],
      explanation: "Innpakningen er kjennetegnet: brukeren installerer den frivillig. «Evnen til å spre seg selv over nettverk uten hjelp» beskriver en orm. «At den manipulerer systemet så den selv blir usynlig» beskriver et rootkit. «At den utløses først når en bestemt dato inntreffer» beskriver en logisk bombe.",
    },
    {
      question: "Hva kjennetegner et rootkit?",
      options: ["At det skjuler seg dypt i systemet og manipulerer det", "At det ligger skjult i et program brukeren laster ned selv", "At det krypterer filene og krever betaling for nøkkelen", "At det omgår innloggingen med en skjult inngang"],
      explanation: "Skjulingen i systemet etter installasjon er kjennetegnet. «At det ligger skjult i et program brukeren laster ned selv» beskriver en trojaner, som skjuler seg i innpakningen før installasjon. «At det krypterer filene og krever betaling for nøkkelen» beskriver løsepengevirus. «At det omgår innloggingen med en skjult inngang» beskriver en bakdør.",
    },
    {
      question: "Hva kjennetegner en logisk bombe?",
      options: ["At den utløses når en bestemt betingelse er oppfylt", "At den sprer seg raskest mulig til flest mulig maskiner", "At den registrerer alt som skrives på tastaturet", "At den fester seg til en vertsfil og spres med den"],
      explanation: "Utløseren er kjennetegnet — en dato, et antall kjøringer, eller at en ansatt fjernes fra lønnssystemet. «At den sprer seg raskest mulig til flest mulig maskiner» beskriver en orm. «At den registrerer alt som skrives på tastaturet» beskriver en tastelogger. «At den fester seg til en vertsfil og spres med den» beskriver et virus.",
    },
    {
      question: "Hva er en bakdør?",
      options: ["En skjult inngang som omgår den vanlige innloggingen", "En sårbarhet som leverandøren ikke kjenner til ennå", "Et program som later som det er nyttig", "En kopi av dataene lagret på et annet sted"],
      explanation: "Bakdøren bruker ikke innloggingsmekanismen i det hele tatt. «En sårbarhet som leverandøren ikke kjenner til ennå» beskriver en nulldagssårbarhet. «Et program som later som det er nyttig» beskriver en trojaner. «En kopi av dataene lagret på et annet sted» beskriver en sikkerhetskopi.",
    },
    {
      question: "Hjelper det å bytte passord når det finnes en bakdør i systemet?",
      options: ["Nei — bakdøren omgår innloggingen og bryr seg ikke om passordet", "Ja — et nytt og sterkt passord stenger alle veier inn i systemet", "Ja, men bare hvis passordet er langt nok", "Nei — men bakdøren forsvinner av seg selv etter en tid"],
      explanation: "Bakdøren må finnes og fjernes, og et kompromittert system må ofte settes opp på nytt. «Ja — et nytt og sterkt passord stenger alle veier inn i systemet» og «Ja, men bare hvis passordet er langt nok» overser at bakdøren går utenom mekanismen. «Nei — men bakdøren forsvinner av seg selv etter en tid» er feil: skadevare forsvinner ikke av seg selv.",
    },
    {
      question: "Hvilket mål bryter et rootkit først og fremst?",
      options: ["Integritet", "Konfidensialitet", "Tilgjengelighet", "Personvern"],
      explanation: "Systemet manipuleres og rapporterer ikke lenger sannheten om seg selv. «Konfidensialitet» er fella: navnet høres ut som spionasje. «Tilgjengelighet» og «Personvern» rammes ikke direkte av selve skjulingen.",
    },
    {
      question: "Hvilket mål bryter et løsepengevirus først og fremst?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Integritet", "Sporbarhet"],
      explanation: "Filene finnes, men er låst. «Konfidensialitet» er fella: angrepet bruker kryptering som våpen, men filene er ikke nødvendigvis lest. «Integritet» er feil fordi innholdet er uendret. «Sporbarhet» er feil fordi loggene er intakte.",
    },
    {
      question: "Hva menes med «egnede tekniske og organisatoriske tiltak»?",
      options: ["At sikkerheten skal stå i forhold til risikoen, både teknisk og i rutiner", "At all behandling må skje med kryptering av høyeste styrke", "At bare tekniske tiltak teller, siden rutiner ikke kan kontrolleres", "At tiltakene må godkjennes av tilsynsmyndigheten på forhånd"],
      explanation: "Jo mer følsomme opplysninger, jo strengere krav — og rutiner, opplæring og avtaler teller like mye som teknologi. «At all behandling må skje med kryptering av høyeste styrke» setter et absolutt krav som ikke finnes. «At bare tekniske tiltak teller, siden rutiner ikke kan kontrolleres» utelater den organisatoriske halvdelen. «At tiltakene må godkjennes av tilsynsmyndigheten på forhånd» innfører en godkjenningsordning som ikke gjelder generelt.",
    },
    {
      question: "Kan et system ha god konfidensialitet og likevel bryte personvernet?",
      options: ["Ja — for eksempel ved å samle inn langt mer enn nødvendig", "Nei — god konfidensialitet er det samme som godt personvern", "Nei — personvern handler bare om at ingen uvedkommende leser", "Ja, men bare hvis systemet ligger i utlandet"],
      explanation: "Personvern stiller krav til om behandlingen er lovlig og nødvendig, ikke bare til om den er trygg. «Nei — god konfidensialitet er det samme som godt personvern» og «Nei — personvern handler bare om at ingen uvedkommende leser» slår sammen to ulike mål. «Ja, men bare hvis systemet ligger i utlandet» knytter spørsmålet til geografi, som ikke er poenget.",
    },
    {
      question: "En trojaner installerer en tastelogger. Hvilken betegnelse er riktig?",
      options: ["Begge — trojaneren er innpakningen, tasteloggeren er det den bar inn", "Bare trojaner, siden det var slik den kom inn i systemet", "Bare tastelogger, siden det er den som gjør skaden", "Ingen av dem — dette er per definisjon et rootkit"],
      explanation: "En trojaner er definert av hvordan den kommer inn, ikke av skaden. «Bare trojaner, siden det var slik den kom inn i systemet» og «Bare tastelogger, siden det er den som gjør skaden» velger den ene halvdelen av en hendelse som har to. «Ingen av dem — dette er per definisjon et rootkit» blander inn en type som kjennetegnes av skjuling i systemet.",
    },
  ],
  'in1020-4-1': [
    {
      question: "Hvilken rekkefølge har TCP/IP-modellens fire lag ovenfra og ned?",
      options: ["Applikasjon, transport, nettverk, lenke", "Applikasjon, nettverk, transport, lenke", "Transport, applikasjon, nettverk, lenke", "Lenke, nettverk, transport, applikasjon"],
      explanation: "Data går ned gjennom applikasjon, transport, nettverk og lenke hos avsenderen. «Applikasjon, nettverk, transport, lenke» bytter om transport og nettverk, som er den vanligste forvekslingen. «Transport, applikasjon, nettverk, lenke» setter transporten øverst, over tjenesten den betjener. «Lenke, nettverk, transport, applikasjon» er listen lest nedenfra og opp, altså mottakerens vei.",
    },
    {
      question: "I hvilket lag skjer ruting av pakker mellom nett?",
      options: ["I nettverkslaget", "I transportlaget", "I lenkelaget", "I applikasjonslaget"],
      explanation: "Ruting er nettverkslagets definerende oppgave: hver ruter leser mottaker-IP-en og velger neste steg. «I transportlaget» er den hyppigste feilkryssingen i sjangeren — transportlaget velger garantinivå, ikke vei. «I lenkelaget» gjelder bare den ene strekningen til neste maskin. «I applikasjonslaget» er tjenesten brukeren ser, og den vet ingenting om veien.",
    },
    {
      question: "Hva bruker transportlaget portnumre til?",
      options: ["Å skille programmene på samme vert fra hverandre", "Å skille vertene på det samme lokale nettet fra hverandre", "Å velge hvilken rute pakken skal ta videre", "Å angi hvilket lag pakken hører hjemme i"],
      explanation: "Nettleseren og e-postklienten deler én IP-adresse, og portnummeret gjør at svaret havner riktig sted. «Å skille vertene på det samme lokale nettet fra hverandre» er IP-adressens jobb, ikke portens. «Å velge hvilken rute pakken skal ta videre» er ruting, som hører til nettverkslaget. «Å angi hvilket lag pakken hører hjemme i» beskriver ingenting som finnes — laget følger av hvilket hode man leser.",
    },
    {
      question: "Hvilken av disse er IKKE en garanti TCP gir?",
      options: ["Kryptering av innholdet", "Omsending av tapte pakker", "Levering i riktig rekkefølge", "Flytkontroll mot mottakerens kapasitet"],
      explanation: "TCP gir pålitelighet, ikke konfidensialitet — derfor finnes https ved siden av http. «Omsending av tapte pakker», «Levering i riktig rekkefølge» og «Flytkontroll mot mottakerens kapasitet» er alle ekte TCP-garantier: tapte segmenter sendes på nytt, nummereringen gir rekkefølge, og flytkontrollen holder farten nede når mottakeren ikke rekker unna.",
    },
    {
      question: "Hva er forskjellen på flytkontroll og metningskontroll i TCP?",
      options: ["Flytkontroll gjelder mottakerens kapasitet, metningskontroll gjelder nettets belastning", "Flytkontroll gjelder nettets belastning, metningskontroll gjelder mottakerens kapasitet", "Flytkontroll gjelder utgående trafikk, metningskontroll gjelder inngående trafikk", "Flytkontroll gjelder små pakker, metningskontroll gjelder store pakker"],
      explanation: "Mottakeren melder hvor mye plass den har igjen (flytkontroll), mens tap og forsinkelser tolkes som kø i nettet (metningskontroll). «Flytkontroll gjelder nettets belastning…» bytter om de to. «Flytkontroll gjelder utgående trafikk…» og «Flytkontroll gjelder små pakker, metningskontroll gjelder store pakker» er oppdiktede skiller — begge mekanismene virker på avsenderens fart, uansett retning og pakkestørrelse.",
    },
    {
      question: "Hvilken transportprotokoll bruker DHCP, og hvorfor?",
      options: ["UDP, fordi maskinen ennå ikke har en adresse å sette opp en forbindelse med", "TCP, fordi det er avgjørende at adressetildelingen kommer korrekt fram", "UDP, fordi adressetildeling er en operasjon som gjentas mange ganger i sekundet", "TCP, fordi tildelingen krever at begge parter er enige om nummereringen"],
      explanation: "Uten IP-adresse kan maskinen ikke etablere en TCP-forbindelse, så DHCP må være tilkoblingsløst. «TCP, fordi det er avgjørende at adressetildelingen kommer korrekt fram» og «TCP, fordi tildelingen krever at begge parter er enige om nummereringen» velger riktig premiss om viktighet, men feil konklusjon — viktighet avgjør ikke saken. «UDP, fordi adressetildeling er en operasjon som gjentas…» har riktig protokoll, men gal begrunnelse: adresser tildeles sjelden, ikke ofte.",
    },
    {
      question: "Hvilken transportprotokoll bruker DNS?",
      options: ["Både TCP og UDP", "Bare UDP", "Bare TCP", "Verken TCP eller UDP — DNS har sin egen transport"],
      explanation: "Vanlige oppslag går på UDP fordi de er små og raske; store svar og enkelte overføringer bruker TCP. «Bare UDP» er favorittfellen — det er halve svaret, og halve svaret er galt svar. «Bare TCP» utelater den vanligste bruken. «Verken TCP eller UDP — DNS har sin egen transport» finnes ikke: DNS er en applikasjonsprotokoll og trenger en transport under seg.",
    },
    {
      question: "Hvilken transportprotokoll bruker HTTP, IMAP, SMTP og FTP?",
      options: ["Alle fire bruker TCP", "Alle fire bruker UDP", "HTTP og FTP bruker TCP, IMAP og SMTP bruker UDP", "HTTP bruker TCP, de tre andre bruker UDP"],
      explanation: "Alle fire overfører noe som må være komplett — en side, en e-post, en fil — og krever derfor pålitelig transport. «Alle fire bruker UDP» ville gitt ødelagte filer og e-poster. «HTTP og FTP bruker TCP, IMAP og SMTP bruker UDP» og «HTTP bruker TCP, de tre andre bruker UDP» deler settet uten faglig grunn; e-postprotokollene har nøyaktig samme behov som de to andre.",
    },
    {
      question: "Hva gjør en ruter når en pakke kommer inn?",
      options: ["Pakker opp til nettverkslagets hode, leser mottakeradressen og sender videre", "Pakker opp helt til applikasjonslaget for å lese hva pakken inneholder, før den sendes videre", "Leser maskinvareadressen til den endelige mottakeren og sender direkte dit", "Setter opp en TCP-forbindelse til neste ruter før pakken sendes videre"],
      explanation: "Innkapslingsprinsippet er at hvert lag leser bare sitt eget hode, og ruteren trenger bare IP-hodet. «Pakker opp helt til applikasjonslaget for å lese hva pakken…» beskriver noe en ruter ikke har grunn til å gjøre. «Leser maskinvareadressen til den endelige mottakeren og…» er umulig: maskinvareadresser gjelder bare én strekning. «Setter opp en TCP-forbindelse til neste ruter før pakken sendes videre» legger transportlagets arbeid inn i nettverkslaget.",
    },
    {
      question: "Hva er forskjellen på en IP-adresse og en maskinvareadresse (MAC-adresse)?",
      options: ["IP-adressen gjelder hele reisen, maskinvareadressen bare den ene strekningen til neste maskin", "Maskinvareadressen gjelder hele reisen, mens IP-adressen bare gjelder den ene strekningen til neste maskin", "IP-adressen brukes av programmer, maskinvareadressen brukes av operativsystemet", "IP-adressen er permanent, mens maskinvareadressen tildeles på nytt for hver pakke"],
      explanation: "IP-adressen står i nettverkslagets hode og leses av hver ruter; maskinvareadressen byttes ut for hvert steg. «Maskinvareadressen gjelder hele reisen…» bytter om de to rollene. «IP-adressen brukes av programmer…» beskriver et skille som ikke finnes. «IP-adressen er permanent…» har det motsatt: maskinvareadressen ligger fast i kortet, mens IP-adressen ofte tildeles på nytt.",
    },
    {
      question: "Hva betyr det at UDP er tilkoblingsløs?",
      options: ["Hver pakke sendes for seg, uten oppsett og uten bokføring av hva som kom fram", "Pakkene sendes uten at avsenderen kjenner mottakerens adresse på forhånd i det hele tatt", "Pakkene sendes over et nett som ikke har fysiske forbindelser mellom vertene", "Overføringen kan bare skje innenfor det lokale nettet, ikke mellom nett"],
      explanation: "Ingen oppsettsrunde og ingen bokføring gir null ventetid i starten, som er hele poenget med UDP. «Pakkene sendes uten at avsenderen kjenner mottakerens…» er umulig — adressen må alltid være kjent. «Pakkene sendes over et nett som ikke har fysiske…» og «Overføringen kan bare skje innenfor det lokale nettet, ikke mellom nett» blander sammen den logiske forbindelsen med fysiske linjer og med rekkevidde; UDP når like langt som TCP.",
    },
    {
      question: "Hvilken av disse påstandene om innkapsling stemmer?",
      options: ["Hvert lag legger sitt eget hode utenpå det laget over leverte", "Hvert lag erstatter hodet fra laget over med sitt eget, slik at størrelsen holdes", "Bare transportlaget og nettverkslaget legger på hoder", "Hodene legges på hos mottakeren, ikke hos avsenderen"],
      explanation: "Hodene ligger som konvolutter utenpå hverandre, og pakkes opp i motsatt rekkefølge hos mottakeren. «Hvert lag erstatter hodet fra laget over med sitt eget…» ville gjort det umulig å levere til riktig program. «Bare transportlaget og nettverkslaget legger på hoder» utelater lenkelaget, som også har sitt eget hode. «Hodene legges på hos mottakeren, ikke hos avsenderen» snur prosessen — mottakeren pakker opp, den pakker ikke inn.",
    },
    {
      question: "En videosamtale i sanntid bruker som regel UDP. Hva er hovedgrunnen?",
      options: ["Et bilde som kommer for sent, er verdiløst selv om det er korrekt", "Videodata er så store at TCP ikke klarer å håndtere dem", "UDP krypterer innholdet, noe TCP ikke gjør", "TCP kan ikke brukes til data som sendes kontinuerlig over lang tid"],
      explanation: "I sanntid er ferskhet viktigere enn fullstendighet, og TCPs omsending ville frosset bildet mens den ventet. «Videodata er så store at TCP ikke klarer å håndtere dem» er galt: TCP håndterer store overføringer utmerket. «UDP krypterer innholdet, noe TCP ikke gjør» er feil — ingen av transportprotokollene krypterer. «TCP kan ikke brukes til data som sendes kontinuerlig over lang tid» motsies av all filnedlasting og strømming, som nettopp bruker TCP.",
    },
    {
      question: "Hvilket lag hører DASH, som strømmer video i segmenter, hjemme i?",
      options: ["Applikasjonslaget — den er en tjeneste for brukeren", "Transportlaget — den bruker TCP til å frakte segmentene", "Nettverkslaget — den bestemmer veien videosegmentene tar", "Lenkelaget — den sender segmentene over den lokale linja"],
      explanation: "DASH er en tjeneste for brukeren og hører derfor til applikasjonslaget, selv om den bruker TCP under seg. «Transportlaget — den bruker TCP til å frakte segmentene» forveksler å bruke et lag med å være i det. «Nettverkslaget — den bestemmer veien videosegmentene tar» og «Lenkelaget — den sender segmentene over den lokale linja» hører til adressering og lokal overføring, som ingen applikasjonsprotokoll driver med.",
    },
    {
      question: "Hva sier sjekksummen i TCP noe om?",
      options: ["At innholdet er endret underveis, uten å si hva som er endret", "At innholdet er lest av noen underveis", "At avsenderen faktisk er den han utgir seg for å være overfor mottakeren", "At pakkene kom fram i riktig rekkefølge"],
      explanation: "Sjekksummen er en feilkontroll som avslører endringer, men verken identifiserer dem eller beskytter mot bevisste endringer. «At innholdet er lest av noen underveis» er umulig — ingen kontrollsum kan oppdage lesing. «At avsenderen faktisk er den han utgir seg for å være overfor mottakeren» er autentisitet, som krever helt andre mekanismer. «At pakkene kom fram i riktig rekkefølge» sikres av nummereringen, ikke av sjekksummen.",
    },
    {
      question: "Hvor mange lag har lagmodellen dette emnet bruker?",
      options: ["Fire: applikasjon, transport, nettverk og lenke", "Fem: de fire pluss et eget lag for sikkerhet og kryptering", "Tre: applikasjon, transport og nettverk", "To: et programlag og et maskinvarelag"],
      explanation: "Emnet bruker TCP/IP-modellens fire lag; sjulagsmodellen er ikke pensum. «Fem: de fire pluss et eget lag for sikkerhet og kryptering» finnes ikke — kryptering er ikke et eget lag i modellen. «Tre: applikasjon, transport og nettverk» mangler lenkelaget, som er det som faktisk får bitene over strekningen. «To: et programlag og et maskinvarelag» er ingen lagmodell, bare et grovt skille.",
    },
    {
      question: "Hva er den viktigste jobben til lenkelaget?",
      options: ["Å få bitene over den ene strekningen fram til neste maskin", "Å finne den beste veien gjennom nettet fram til mottakeren", "Å sette segmentene i riktig rekkefølge før de leveres videre opp", "Å oversette navn til IP-adresser før pakken sendes"],
      explanation: "Lenkelaget håndterer én strekning om gangen, med lokale maskinvareadresser. «Å finne den beste veien gjennom nettet fram til mottakeren» er ruting og hører til nettverkslaget. «Å sette segmentene i riktig rekkefølge før de leveres videre opp» er TCPs arbeid i transportlaget. «Å oversette navn til IP-adresser før pakken sendes» er DNS, en applikasjonsprotokoll.",
    },
    {
      question: "Hvorfor kan et program ikke stole på at UDP-pakker kommer i rekkefølge?",
      options: ["Pakkene rutes hver for seg og kan ta ulike veier med ulik forsinkelse", "UDP sender pakkene i tilfeldig rekkefølge fra avsenderen", "UDP mangler både sekvensnummer og avsenderadresse, så mottakeren kan ikke sortere dem", "Rekkefølgen bestemmes av mottakerens portnummer, som varierer"],
      explanation: "Nettet gir ingen rekkefølgegaranti i seg selv, og TCP er den som skaper orden i etterkant. «UDP sender pakkene i tilfeldig rekkefølge fra avsenderen» er galt: avsenderen sender i rekkefølge. «UDP mangler både sekvensnummer og avsenderadresse…» er feil — UDP har avsenderadresse, men ingen sekvensnummer. «Rekkefølgen bestemmes av mottakerens portnummer, som varierer» beskriver noe portnumre ikke gjør.",
    },
    {
      question: "En kollega sier: «Vi bytter til UDP, da går alt raskere.» Hva er den mest presise innvendingen?",
      options: ["Skyldes tregheten veien pakkene tar, ligger årsaken i nettverkslaget", "UDP kan ikke brukes sammen med IP og krever et helt annet nettverkslag under seg", "UDP har større hoder enn TCP og gir derfor mer trafikk", "UDP kan bare brukes av tjenermaskiner, ikke av klienter"],
      explanation: "Transportprotokollen påvirker ikke veivalget, så et bytte er å gjette hvis man ikke vet hvor tregheten oppstår. «UDP kan ikke brukes sammen med IP og krever et helt annet…» er faktisk galt: UDP kjører på IP akkurat som TCP. «UDP har større hoder enn TCP og gir derfor mer trafikk» har det motsatt — UDPs hode er kortere. «UDP kan bare brukes av tjenermaskiner, ikke av klienter» er oppspinn; begge roller bruker begge protokoller.",
    },
    {
      question: "Hva er en protokoll?",
      options: ["En avtale om format og rekkefølge på meldinger, som begge parter følger", "Et program som må være installert på begge maskinene i en forbindelse for at den skal virke", "Den fysiske forbindelsen mellom to maskiner på et nett", "Et sett med adresser som identifiserer maskinene i et nett"],
      explanation: "Protokollen er regelboka; programmene på maskinene er implementasjoner av den. «Et program som må være installert på begge maskinene i en…» forveksler regelen med implementasjonen. «Den fysiske forbindelsen mellom to maskiner på et nett» er den fysiske overføringen, som ligger under alle protokollene. «Et sett med adresser som identifiserer maskinene i et nett» er adressering, som er én ting protokoller kan spesifisere, ikke hva de er.",
    },
    {
      question: "Hva er riktig om trevegs håndtrykk i TCP?",
      options: ["Det er tre meldinger som avtaler at forbindelsen er oppe, før nyttedata sendes", "Det er tre meldinger som hver bærer med seg en tredel av de første dataene som skal sendes", "Det er tre forsøk på å nå mottakeren før forbindelsen gis opp", "Det er tre kontroller av sjekksummen før forbindelsen godkjennes"],
      explanation: "Håndtrykket er ren avtale om at forbindelsen er etablert og hvor nummereringen starter. «Det er tre meldinger som hver bærer med seg en tredel av de…» legger nyttedata inn i oppsettet, som ikke skjer. «Det er tre forsøk på å nå mottakeren før forbindelsen gis opp» beskriver en gjentakelsesregel, ikke håndtrykket. «Det er tre kontroller av sjekksummen før forbindelsen godkjennes» blander inn sjekksummen, som gjelder hver enkelt pakke.",
    },
    {
      question: "Hvorfor deles data opp i pakker i stedet for å sendes som én lang strøm?",
      options: ["Mange samtaler kan dele samme linje, og en tapt bit koster lite å sende på nytt", "Fordi nettverkskortet bare klarer å sende én byte om gangen over den fysiske linja", "Fordi IP-adresser bare kan følge med små datamengder", "Fordi mottakeren ellers ville få dataene i feil rekkefølge"],
      explanation: "Oppdelingen gjør nettet delbart og gjør tap billig å reparere. «Fordi nettverkskortet bare klarer å sende én byte om gangen…» er teknisk galt. «Fordi IP-adresser bare kan følge med små datamengder» er oppspinn — adressen står i hodet uansett størrelse. «Fordi mottakeren ellers ville få dataene i feil rekkefølge» snur årsaksforholdet: det er nettopp oppdelingen som gjør at rekkefølgen kan bli feil.",
    },
    {
      question: "Hvilket utsagn om lagdelingen stemmer?",
      options: ["Et lag kan skiftes ut uten at de andre lagene må endres", "Alle lagene må implementeres av samme leverandør for å virke sammen", "Lagene ligger fysisk atskilt i ulike deler av maskinen", "Et lag kan bare brukes av det laget som ligger rett under det"],
      explanation: "Faste grensesnitt mellom lagene er hele poenget: du kan bytte fra kabel til trådløst uten å endre nettleseren. «Alle lagene må implementeres av samme leverandør for å virke sammen» motsies av at nettet fungerer på tvers av leverandører. «Lagene ligger fysisk atskilt i ulike deler av maskinen» forveksler ansvarsdeling med fysisk plassering. «Et lag kan bare brukes av det laget som ligger rett under det» snur retningen — et lag betjener laget over seg.",
    },
    {
      question: "Hva er den vanligste konsekvensen av å bruke TCP til en sanntids videosamtale?",
      options: ["Bildet fryser mens tapte pakker sendes på nytt, og samtalen får etterslep", "Bildet blir kornete fordi TCP komprimerer videodataene hardere enn UDP gjør", "Samtalen brytes fordi TCP ikke støtter kontinuerlige strømmer", "Lyden krypteres, mens bildet forblir ukryptert"],
      explanation: "TCP holder igjen alt som kommer etter en tapt pakke til den er sendt på nytt, og pålitelighetsgarantien blir da en forsinkelsesgaranti. «Bildet blir kornete fordi TCP komprimerer videodataene…» er galt: transportprotokoller komprimerer ikke. «Samtalen brytes fordi TCP ikke støtter kontinuerlige strømmer» er feil — TCP håndterer lange strømmer fint. «Lyden krypteres, mens bildet forblir ukryptert» er oppspinn; TCP krypterer ingenting.",
    },
  ],
  'in1020-4-2': [
    {
      question: "Hvor mange bit er en IPv4-adresse?",
      options: ["32 bit, fordelt på fire oktetter à 8 bit", "64 bit, fordelt på fire oktetter à 16 bit", "16 bit, fordelt på fire oktetter à 4 bit", "48 bit, fordelt på seks oktetter à 8 bit"],
      explanation: "Fire oktetter à 8 bit gir 32 bit til sammen, og det er grunnen til at adressene er en knapp ressurs. «64 bit, fordelt på fire oktetter à 16 bit» og «16 bit, fordelt på fire oktetter à 4 bit» gir feil oktettstørrelse — en oktett er per definisjon åtte bit. «48 bit, fordelt på seks oktetter à 8 bit» har riktig oktettstørrelse, men feil antall oktetter.",
    },
    {
      question: "Hva er CIDR-prefikset til masken 255.255.255.192?",
      options: ["/26", "/24", "/27", "/25"],
      explanation: "Tre fulle oktetter gir 24 ettall, og 192 = 11000000 gir 2 til, altså /26. «/24» teller bare de fulle oktettene og ser bort fra den delvise. «/27» tilsvarer 224, ett ettall for mye. «/25» tilsvarer 128, ett for lite.",
    },
    {
      question: "Hvor mange maskiner kan tildeles adresse i et /27-subnett?",
      options: ["30", "32", "28", "31"],
      explanation: "Fem vertsbit gir 2^5 = 32 adresser, minus subnett- og kringkastingsadressen blir 30. «32» er svaret uten fratrekket, den mest kjente fella i faget. «28» trekker fra fire, som om ruteren og noe mer også var reservert. «31» trekker fra bare én.",
    },
    {
      question: "Hvorfor trekkes det fra to i vertstellingen?",
      options: ["Subnettadressen og kringkastingsadressen er reservert og kan ikke tildeles", "Ruteren og nettmasken bruker hver sin adresse i subnettet", "De to første adressene holdes av til framtidig utvidelse av nettet", "De to siste adressene er alltid reservert til navnetjenesten"],
      explanation: "Den laveste adressen er nettets eget navn og den høyeste når alle på én gang, så ingen av dem kan peke på én maskin. «Ruteren og nettmasken bruker hver sin adresse i subnettet» er galt: nettmasken er ikke en adresse, og ruteren bruker en helt vanlig tildelbar adresse. «De to første adressene holdes av til framtidig utvidelse av nettet» og «De to siste adressene er alltid reservert til navnetjenesten» er oppdiktede regler.",
    },
    {
      question: "Hva er subnettadressen til 172.16.4.35 med masken 255.255.255.224?",
      options: ["172.16.4.32", "172.16.4.0", "172.16.4.63", "172.16.4.35"],
      explanation: "AND på fjerde oktett: 00100011 AND 11100000 = 00100000 = 32. «172.16.4.0» er svaret hvis man regner med masken /24 i stedet for /27. «172.16.4.63» er kringkastingsadressen, altså OR i stedet for AND. «172.16.4.35» er adressen selv, uten at masken er brukt.",
    },
    {
      question: "Hva er kringkastingsadressen til 172.16.4.35 med prefiks /27?",
      options: ["172.16.4.63", "172.16.4.32", "172.16.4.64", "172.16.4.255"],
      explanation: "OR med invertert maske: 00100011 OR 00011111 = 00111111 = 63. «172.16.4.32» er subnettadressen, altså AND i stedet for OR. «172.16.4.64» er subnettadressen til neste subnett — ett for mye. «172.16.4.255» gjelder bare et /24-nett.",
    },
    {
      question: "Hvilken av disse regnereglene gir subnettadressen?",
      options: ["IP AND maske", "IP OR maske", "IP AND invertert maske", "IP OR invertert maske"],
      explanation: "AND med masken beholder nettdelen og nullstiller vertsdelen, som er nettopp definisjonen av subnettadressen. «IP OR maske» gir et tall uten betydning. «IP AND invertert maske» gjør det motsatte av det man vil — den beholder vertsdelen. «IP OR invertert maske» gir kringkastingsadressen.",
    },
    {
      question: "En maske har verdien 248 i siste oktett. Hva er prefikset?",
      options: ["/29", "/28", "/30", "/27"],
      explanation: "248 = 11111000 har 5 ettall, og 24 + 5 = 29. «/28» tilsvarer 240, ett ettall for lite. «/30» tilsvarer 252, ett for mye. «/27» tilsvarer 224, to for lite.",
    },
    {
      question: "Hvor mange maskiner kan tildeles adresse i et /30-subnett?",
      options: ["2", "4", "0", "3"],
      explanation: "To vertsbit gir 4 adresser, minus de to reserverte blir 2 — akkurat nok til de to endene av en ruterforbindelse. «4» er tallet uten fratrekket. «0» er resultatet av å trekke fra fire. «3» trekker fra bare én.",
    },
    {
      question: "Hvilken oktett skal du regne binært på når masken er 255.255.240.0?",
      options: ["Den tredje, siden det er der masken verken er 0 eller 255", "Den fjerde, siden adresseregning alltid gjøres på siste oktett", "Den andre, siden det er den siste oktetten med verdien 255", "Alle fire, siden AND og OR gjelder hele adressen samtidig"],
      explanation: "Den delvise oktetten er der grensen mellom nettdel og vertsdel går, og her er det den tredje. «Den fjerde, siden adresseregning alltid gjøres på siste oktett» er en vane som bare stemmer for prefiks mellom 25 og 31. «Den andre, siden det er den siste oktetten med verdien 255» peker på en full oktett, der ingenting skjer. «Alle fire, siden AND og OR gjelder hele adressen samtidig» er teknisk sant, men de fulle og tomme oktettene gir seg selv.",
    },
    {
      question: "Hva er tildelbare verter i et /20-subnett?",
      options: ["4094", "4096", "2046", "8190"],
      explanation: "Tolv vertsbit gir 2^12 = 4096 adresser, minus to blir 4094. «4096» er tallet uten fratrekket. «2046» svarer til /21, altså en vertsbit for lite. «8190» svarer til /19, en vertsbit for mye.",
    },
    {
      question: "Adressen 192.168.4.19 har masken 255.255.255.248. Hvilket intervall dekker subnettet?",
      options: ["Fra 192.168.4.16 til 192.168.4.23", "Fra 192.168.4.16 til 192.168.4.24", "Fra 192.168.4.19 til 192.168.4.26", "Fra 192.168.4.0 til 192.168.4.7"],
      explanation: "AND gir 16, og med tre vertsbit dekker subnettet åtte adresser, altså 16 til 23. «Fra 192.168.4.16 til 192.168.4.24» teller én for mye — .24 er neste subnett. «Fra 192.168.4.19 til 192.168.4.26» starter på maskinens egen adresse i stedet for på subnettadressen. «Fra 192.168.4.0 til 192.168.4.7» gjelder subnettet under.",
    },
    {
      question: "Hva er den første adressen som kan tildeles en maskin i subnettet 10.3.7.64/26?",
      options: ["10.3.7.65", "10.3.7.64", "10.3.7.1", "10.3.7.66"],
      explanation: "Subnettadressen 10.3.7.64 er nettets navn, så den første maskinen får adressen rett over. «10.3.7.64» er subnettadressen selv, som ikke kan tildeles. «10.3.7.1» tilhører et helt annet subnett. «10.3.7.66» hopper over én tildelbar adresse uten grunn.",
    },
    {
      question: "Hvordan avgjør du om to adresser ligger i samme subnett?",
      options: ["Regn ut subnettadressen for begge med samme maske og se om de blir like", "Sjekk om de tre første oktettene i de to adressene er like", "Sjekk om differansen mellom de to adressene er mindre enn antall verter", "Sjekk om begge adressene er høyere enn kringkastingsadressen"],
      explanation: "Like nettdeler er selve definisjonen på samme subnett, og AND-en avgjør saken. «Sjekk om de tre første oktettene i de to adressene er like» stemmer bare når prefikset er nøyaktig /24. «Sjekk om differansen mellom de to adressene er mindre enn antall verter» feiler så snart de to ligger på hver sin side av en subnettgrense. «Sjekk om begge adressene er høyere enn kringkastingsadressen» gir ingen mening — adresser over kringkastingsadressen er i neste subnett.",
    },
    {
      question: "Hva er avstanden mellom subnettadressen og kringkastingsadressen i et /28-subnett?",
      options: ["15", "16", "14", "8"],
      explanation: "Fire vertsbit gir 16 adresser, og avstanden mellom første og siste er 2^4 − 1 = 15. «16» er antall adresser, ikke avstanden mellom dem. «14» er antall tildelbare verter. «8» svarer til /29.",
    },
    {
      question: "Hvilket av disse tallene kan IKKE stå i en gyldig nettmaske?",
      options: ["208", "224", "252", "128"],
      explanation: "En maske har alle ettallene først, og 208 = 11010000 har en null inne blant ettallene. «224», «252» og «128» er 11100000, 11111100 og 10000000 — alle sammenhengende og dermed gyldige.",
    },
    {
      question: "Hva betyr det at en adresse er en kringkastingsadresse?",
      options: ["En pakke sendt dit skal nå alle maskinene på subnettet samtidig", "Adressen er reservert til ruteren som knytter subnettet til omverdenen", "Adressen brukes til å kringkaste subnettets navn ut på internett", "Adressen brukes bare når subnettet skal deles opp i mindre subnett"],
      explanation: "Alle vertsbit satt til 1 betyr «alle på dette nettet», og derfor kan adressen ikke peke på én maskin. «Adressen er reservert til ruteren som knytter subnettet til omverdenen» forveksler den med ruterens adresse, som er en helt vanlig tildelbar adresse. «Adressen brukes til å kringkaste subnettets navn ut på internett» og «Adressen brukes bare når subnettet skal deles opp i mindre subnett» er oppdiktede roller — kringkasting stopper ved subnettets grense.",
    },
    {
      question: "En maskin har adressen 10.12.16.5 i et nett med masken 255.255.240.0. Hva er subnettadressen?",
      options: ["10.12.16.0", "10.12.0.0", "10.12.15.255", "10.12.16.5"],
      explanation: "Tredje oktett: 00010000 AND 11110000 = 00010000 = 16, altså 10.12.16.0. «10.12.0.0» er subnettet under, som dekker tredje oktett 0 til 15. «10.12.15.255» er kringkastingsadressen til det subnettet. «10.12.16.5» er maskinens egen adresse, uten at masken er brukt.",
    },
    {
      question: "Hvorfor deles store nett opp i subnett?",
      options: ["Adressene er en knapp ressurs og deles ut i biter som passer til behovet", "Fordi en ruter ikke klarer å håndtere mer enn 256 adresser om gangen", "Fordi nettmasken bare kan settes én gang per organisasjon", "Fordi kringkastingsadressen ellers ville vært den samme for alle"],
      explanation: "Med bare drøyt fire milliarder adresser i verden får et kontor med 20 maskiner et /27, ikke et helt /24. «Fordi en ruter ikke klarer å håndtere mer enn 256 adresser om gangen» er en teknisk begrensning som ikke finnes. «Fordi nettmasken bare kan settes én gang per organisasjon» er oppspinn. «Fordi kringkastingsadressen ellers ville vært den samme for alle» snur årsak og virkning: hvert subnett får sin egen kringkastingsadresse fordi det er delt opp.",
    },
    {
      question: "Hva er masken til prefikset /25 skrevet i punktnotasjon?",
      options: ["255.255.255.128", "255.255.255.0", "255.255.255.192", "255.255.128.0"],
      explanation: "24 ettall gir tre fulle oktetter, og det ene ettallet som er igjen, gir 10000000 = 128. «255.255.255.0» er /24. «255.255.255.192» er /26, altså ett ettall for mye. «255.255.128.0» plasserer det siste ettallet i tredje oktett og gir /17.",
    },
    {
      question: "Et subnett har 62 tildelbare adresser. Hvilket prefiks har det?",
      options: ["/26", "/25", "/27", "/24"],
      explanation: "62 = 2^6 − 2, altså seks vertsbit, og 32 − 6 = 26. «/25» gir 126 adresser. «/27» gir 30. «/24» gir 254. Å regne baklengs fra vertstallet er en vanlig variant av oppgaven.",
    },
    {
      question: "Hva er riktig om forholdet mellom nettmaske og prefiks?",
      options: ["De er to skrivemåter for det samme bitmønsteret", "Prefikset angir antall vertsbit, masken antall nettbit", "Masken gjelder for hele nettet, prefikset for den enkelte maskinen", "Prefikset brukes i IPv4, masken bare i eldre nettverk"],
      explanation: "255.255.255.192 og /26 beskriver nøyaktig samme mønster, og eksamen bruker begge om hverandre. «Prefikset angir antall vertsbit, masken antall nettbit» har prefikset baklengs — det teller nettbit. «Masken gjelder for hele nettet, prefikset for den enkelte maskinen» og «Prefikset brukes i IPv4, masken bare i eldre nettverk» er oppdiktede skiller uten faglig innhold.",
    },
  ],
  'in1020-4-3': [
    {
      question: "Hvor lang tid tar det å laste ned 300 MB over en linje på 60 Mbit/s?",
      options: ["40 sekunder", "5 sekunder", "320 sekunder", "18 sekunder"],
      explanation: "300 MB ganger 8 gir 2400 Mbit, og 2400 delt på 60 gir 40 sekunder. «5 sekunder» er filstørrelsen delt rett på raten, altså uten omregningen — den klassiske fella, og nøyaktig en åttedel av riktig svar. «320 sekunder» har ganget med 8 og glemt å dele. «18 sekunder» svarer til en helt annen rate.",
    },
    {
      question: "Hvorfor må filstørrelsen ganges med 8 i overføringstidsformelen?",
      options: ["Filer måles i byte, mens rater måles i bit per sekund, og en byte er åtte bit", "Fordi en pakke alltid inneholder åtte byte med nyttedata i tillegg til hodet", "Fordi åtte er antallet parallelle kanaler en vanlig nettlinje er delt inn i", "Fordi hver byte må sendes åtte ganger for at feilkontrollen skal virke"],
      explanation: "Enhetene er ulike i teller og nevner, og faktoren 8 er broen mellom dem. «Fordi en pakke alltid inneholder åtte byte med nyttedata i…» blander inn pakkestruktur, som formelen ser helt bort fra. «Fordi åtte er antallet parallelle kanaler en vanlig…» og «Fordi hver byte må sendes åtte ganger for at feilkontrollen skal virke» er oppdiktede tekniske forklaringer uten dekning.",
    },
    {
      question: "En fil på 120 MB skal over en linje på 40 Mbit/s. Hvor lang tid tar det?",
      options: ["24 sekunder", "3 sekunder", "192 sekunder", "30 sekunder"],
      explanation: "120 ganger 8 gir 960 Mbit, delt på 40 gir 24 sekunder. «3 sekunder» er svaret uten omregningen. «192 sekunder» har ganget filstørrelsen med 8 og glemt divisjonen helt. «30 sekunder» stemmer med en rate på 32 Mbit/s, ikke 40.",
    },
    {
      question: "Du sikkerhetskopierer en mappe til skyen. Hvilken rate gjelder?",
      options: ["Opplastingsraten, siden dataene går fra deg", "Nedlastingsraten, siden skyen laster ned filene", "Den høyeste av de to, siden linja velger den raskeste retningen", "Gjennomsnittet av opplastings- og nedlastingsraten"],
      explanation: "Sikkerhetskopiering sender data ut fra maskinen din, og da er det opplastingsraten som er flaskehalsen. «Nedlastingsraten, siden skyen laster ned filene» snur perspektivet feil vei — det er din linje som teller, ikke skyens. «Den høyeste av de to, siden linja velger den raskeste retningen» og «Gjennomsnittet av opplastings- og nedlastingsraten» beskriver mekanismer som ikke finnes.",
    },
    {
      question: "Hvor stor kan en fil være hvis den skal overføres på 30 sekunder over 40 Mbit/s?",
      options: ["150 MB", "1200 MB", "9600 MB", "75 MB"],
      explanation: "30 ganger 40 gir 1200 Mbit, delt på 8 gir 150 MB. «1200 MB» er mellomresultatet i megabit, oppgitt med feil enhet. «9600 MB» har ganget med 8 i stedet for å dele. «75 MB» er halvparten, altså delt på 16.",
    },
    {
      question: "Hvilken rate kreves for å overføre 600 MB på ett minutt?",
      options: ["80 Mbit/s", "10 Mbit/s", "4800 Mbit/s", "600 Mbit/s"],
      explanation: "600 ganger 8 gir 4800 Mbit, delt på 60 sekunder gir 80 Mbit/s. «10 Mbit/s» er svaret uten omregningen. «4800 Mbit/s» er mellomresultatet, uten at det er delt på tida. «600 Mbit/s» bruker verken faktoren 8 eller tida.",
    },
    {
      question: "Hvor mange megabyte per sekund flytter en linje på 40 Mbit/s?",
      options: ["5 MB/s", "40 MB/s", "320 MB/s", "8 MB/s"],
      explanation: "40 delt på 8 gir 5 megabyte i sekundet. «40 MB/s» leser Mbit/s som om det var megabyte per sekund. «320 MB/s» ganger med 8 i stedet for å dele. «8 MB/s» forveksler svaret med selve omregningsfaktoren.",
    },
    {
      question: "Hva blir svaret hvis man glemmer omregningen fra byte til bit?",
      options: ["Nøyaktig en åttedel av det riktige svaret", "Nøyaktig åtte ganger det riktige svaret", "Omtrent fem prosent for lavt, avhengig av filstørrelsen", "Riktig svar, men med feil enhet oppgitt"],
      explanation: "Uten faktoren 8 blir tida delt på 8, altså en åttedel. «Nøyaktig åtte ganger det riktige svaret» snur feilen. «Omtrent fem prosent for lavt, avhengig av filstørrelsen» beskriver forskjellen mellom MB og MiB, som er noe helt annet. «Riktig svar, men med feil enhet oppgitt» er galt — tallet blir faktisk feil, ikke bare enheten.",
    },
    {
      question: "En sikkerhetskopi på 5 GB skal over en linje på 250 Mbit/s. Hvor lang tid tar det?",
      options: ["160 sekunder", "20 sekunder", "0,16 sekunder", "40 sekunder"],
      explanation: "5 GB er 5000 MB, ganger 8 gir 40 000 Mbit, delt på 250 gir 160 sekunder. «20 sekunder» er svaret uten omregningen fra byte til bit. «0,16 sekunder» har glemt å regne om gigabyte til megabyte. «40 sekunder» svarer til en rate på 1000 Mbit/s.",
    },
    {
      question: "Hva er forskjellen mellom MB og MiB?",
      options: ["MB er 10^6 byte, MiB er 2^20 byte, altså omtrent 4,9 prosent mer", "MB er 2^20 byte, MiB er 10^6 byte, altså omtrent 4,9 prosent mindre", "MB brukes om filer, MiB om overføringsrater over nettverk", "MB er megabyte, MiB er megabit — forskjellen er faktoren åtte"],
      explanation: "MiB er den binære varianten på 1 048 576 byte, litt større enn den desimale megabyten. «MB er 2^20 byte, MiB er 10^6 byte, altså omtrent 4,9 prosent mindre» bytter om de to. «MB brukes om filer, MiB om overføringsrater over nettverk» er oppdiktet — rater måles i bit per sekund uansett. «MB er megabyte, MiB er megabit — forskjellen er faktoren åtte» forveksler prefikset med bit-og-byte-skillet.",
    },
    {
      question: "Du laster opp 900 MB. Linja er 150 Mbit/s ned og 30 Mbit/s opp. Hvor lang tid tar det?",
      options: ["240 sekunder", "48 sekunder", "30 sekunder", "120 sekunder"],
      explanation: "Opplasting bruker 30 Mbit/s: 900 ganger 8 gir 7200 Mbit, delt på 30 gir 240 sekunder. «48 sekunder» bruker nedlastingsraten 150 i stedet. «30 sekunder» har brukt riktig rate, men glemt omregningen. «120 sekunder» kombinerer feil rate og feil enhetsbruk.",
    },
    {
      question: "Hvordan kan du kontrollere at du har delt riktig vei i en overføringsoppgave?",
      options: ["Sjekk enhetene: megabit delt på megabit per sekund gir sekunder", "Sjekk at svaret er et helt tall, siden tider alltid går opp i oppgaver", "Sjekk at svaret er større enn filstørrelsen målt i megabyte", "Sjekk at svaret er mindre enn raten målt i megabit per sekund"],
      explanation: "Enhetsregningen gir bare et tidssvar i én av de to retningene, og det avslører feil før du ser på tallet. «Sjekk at svaret er et helt tall, siden tider alltid går opp i oppgaver» er en vane, ikke en regel — tider kan ha desimaler. «Sjekk at svaret er større enn filstørrelsen målt i megabyte» og «Sjekk at svaret er mindre enn raten målt i megabit per sekund» er tilfeldige sammenligninger uten faglig grunnlag.",
    },
    {
      question: "En fil tar 64 sekunder over 30 Mbit/s. Hvor stor er filen?",
      options: ["240 MB", "1920 MB", "2 MB", "480 MB"],
      explanation: "64 ganger 30 gir 1920 Mbit, delt på 8 gir 240 MB. «1920 MB» er mellomresultatet i megabit. «2 MB» er filstørrelsen delt på både 8 og noe mer. «480 MB» er dobbelt så mye, altså delt på 4 i stedet for 8.",
    },
    {
      question: "Hva skjer med overføringstida hvis linja blir dobbelt så rask?",
      options: ["Tida halveres, siden tida er omvendt proporsjonal med raten", "Tida dobles, siden mer data må håndteres per sekund", "Tida blir uendret, siden filstørrelsen ikke er endret", "Tida reduseres med en åttedel, på grunn av omregningsfaktoren"],
      explanation: "Raten står i nevneren, så dobbel rate gir halv tid. «Tida dobles, siden mer data må håndteres per sekund» snur sammenhengen. «Tida blir uendret, siden filstørrelsen ikke er endret» overser at raten er med i formelen. «Tida reduseres med en åttedel, på grunn av omregningsfaktoren» blander inn faktoren 8, som ikke har noe med endringen å gjøre.",
    },
    {
      question: "Hva skjer med overføringstida hvis filen blir dobbelt så stor?",
      options: ["Tida dobles, siden tida er proporsjonal med filstørrelsen", "Tida halveres, siden linja utnyttes bedre av store filer", "Tida blir uendret, siden raten er den samme", "Tida åttedobles, på grunn av omregningen fra byte til bit"],
      explanation: "Filstørrelsen står i telleren, så dobbel størrelse gir dobbel tid. «Tida halveres, siden linja utnyttes bedre av store filer» er oppspinn — utnyttelsesgraden er ikke med i formelen. «Tida blir uendret, siden raten er den samme» overser at filstørrelsen er med. «Tida åttedobles, på grunn av omregningen fra byte til bit» blander inn faktoren 8, som gjelder uansett størrelse.",
    },
    {
      question: "Når skal du dele på 8 i stedet for å gange med 8?",
      options: ["Når svaret skal være en filstørrelse i byte", "Når svaret skal være en tid i sekunder", "Når svaret skal være en rate i bit per sekund", "Når oppgaven oppgir tida i minutter"],
      explanation: "Produktet av tid og rate er i bit, og skal svaret være i byte, må det deles på 8. «Når svaret skal være en tid i sekunder» og «Når svaret skal være en rate i bit per sekund» krever begge at man ganger filstørrelsen med 8. «Når oppgaven oppgir tida i minutter» handler om å regne om minutter til sekunder, som er en helt annen omregning.",
    },
    {
      question: "Hvilken av disse tar lengst tid?",
      options: ["1500 MB over 100 Mbit/s", "900 MB over 150 Mbit/s", "450 MB over 90 Mbit/s", "120 MB over 40 Mbit/s"],
      explanation: "1500 ganger 8 delt på 100 gir 120 sekunder, mot 48, 40 og 24 sekunder for de tre andre. «900 MB over 150 Mbit/s» gir 48 sekunder, «450 MB over 90 Mbit/s» gir 40 og «120 MB over 40 Mbit/s» gir 24. Merk at faktoren 8 påvirker alle fire likt, så forholdet mellom størrelse og rate avgjør alene.",
    },
    {
      question: "Hva ser overføringstidsformelen bort fra?",
      options: ["Oppsett av forbindelsen, pakkehoder og ventetid i køer underveis", "Filstørrelsen, som antas å være den samme for alle overføringer", "Raten, som antas å variere gjennom overføringen", "Retningen dataene går, som ikke påvirker resultatet"],
      explanation: "Formelen regner bare selve overføringen ved full rate, og i dette faget er det riktig å gjøre det. «Filstørrelsen, som antas å være den samme for alle overføringer» og «Raten, som antas å variere gjennom overføringen» er tvert imot de to størrelsene formelen bygger på. «Retningen dataene går, som ikke påvirker resultatet» er galt: retningen avgjør hvilken rate som gjelder.",
    },
  ],
  'in1020-4-4': [
    {
      question: "Hva er første steg i en subnettoppgave?",
      options: ["Oversett mellom maske og prefiks, og finn den delvise oktetten", "Regn ut antall tildelbare verter med formelen 2 opphøyd i n minus 2", "Skriv hele adressen ut som 32 bit i fire grupper på åtte", "Finn kringkastingsadressen, siden den er lettest å regne ut"],
      explanation: "Uten å vite hvor grensen går, er alt som følger, gjetting. «Regn ut antall tildelbare verter med formelen 2 opphøyd i n minus 2» kommer senere og krever prefikset. «Skriv hele adressen ut som 32 bit i fire grupper på åtte» er unødvendig arbeid — bare den delvise oktetten trengs. «Finn kringkastingsadressen, siden den er lettest å regne ut» er ikke lettere enn subnettadressen, og krever samme forarbeid.",
    },
    {
      question: "Masken 255.255.255.252 svarer til hvilket prefiks?",
      options: ["/30", "/28", "/29", "/26"],
      explanation: "252 = 11111100 har 6 ettall, og 24 + 6 = 30. «/28» svarer til 240, to ettall for lite. «/29» svarer til 248, ett for lite. «/26» svarer til 192, fire for lite.",
    },
    {
      question: "Hvor mange tildelbare adresser har et /23-subnett?",
      options: ["510", "512", "254", "1022"],
      explanation: "Ni vertsbit gir 2^9 = 512 adresser, minus to blir 510. «512» er tallet uten fratrekket. «254» svarer til /24, en vertsbit for lite. «1022» svarer til /22, en vertsbit for mye.",
    },
    {
      question: "Et subnett har 14 tildelbare adresser. Hvilken maske har det?",
      options: ["255.255.255.240", "255.255.255.224", "255.255.255.248", "255.255.255.192"],
      explanation: "14 = 2^4 − 2 gir fire vertsbit, altså /28, og fire ettall i siste oktett er 240. «255.255.255.224» er /27 med 30 adresser. «255.255.255.248» er /29 med 6. «255.255.255.192» er /26 med 62.",
    },
    {
      question: "Hva er subnettadressen til 10.20.30.200 med prefiks /26?",
      options: ["10.20.30.192", "10.20.30.255", "10.20.30.0", "10.20.30.200"],
      explanation: "AND på fjerde oktett: 11001000 AND 11000000 = 11000000 = 192. «10.20.30.255» er kringkastingsadressen, altså OR i stedet for AND. «10.20.30.0» er svaret hvis man regner med /24. «10.20.30.200» er adressen selv, uten at masken er brukt.",
    },
    {
      question: "Hva er kringkastingsadressen til 172.25.8.19 med masken 255.255.255.240?",
      options: ["172.25.8.31", "172.25.8.16", "172.25.8.32", "172.25.8.255"],
      explanation: "OR med invertert maske: 00010011 OR 00001111 = 00011111 = 31. «172.25.8.16» er subnettadressen, altså AND i stedet for OR. «172.25.8.32» er én for mye — det er neste subnetts subnettadresse. «172.25.8.255» gjelder bare et /24-nett.",
    },
    {
      question: "Hvilken oktett skal du regne binært på når prefikset er /22?",
      options: ["Den tredje", "Den fjerde", "Den andre", "Den første"],
      explanation: "22 ligger mellom 16 og 24, så grensen går inne i den tredje oktetten. «Den fjerde» er en vane som bare stemmer for prefiks mellom 25 og 31. «Den andre» gjelder prefiks mellom 9 og 15. «Den første» gjelder prefiks under 8.",
    },
    {
      question: "En fil på 160 MB skal over en linje på 40 Mbit/s. Hvor lang tid tar det?",
      options: ["32 sekunder", "4 sekunder", "256 sekunder", "20 sekunder"],
      explanation: "160 ganger 8 gir 1280 Mbit, delt på 40 gir 32 sekunder. «4 sekunder» er svaret uten omregningen, altså en åttedel. «256 sekunder» har ganget med 8 og glemt divisjonen. «20 sekunder» stemmer med en rate på 64 Mbit/s.",
    },
    {
      question: "Du sender 1,8 GB til en tjener. Linja er 300 Mbit/s ned og 150 Mbit/s opp. Hvor lang tid tar det?",
      options: ["96 sekunder", "48 sekunder", "12 sekunder", "6 sekunder"],
      explanation: "Sending bruker opplastingsraten: 1800 MB ganger 8 gir 14 400 Mbit, delt på 150 gir 96 sekunder. «48 sekunder» bruker nedlastingsraten. «12 sekunder» har riktig rate, men mangler omregningen. «6 sekunder» kombinerer begge feilene.",
    },
    {
      question: "Hvor stor kan en fil være hvis den skal rekke på 45 sekunder over 80 Mbit/s?",
      options: ["450 MB", "3600 MB", "28 800 MB", "225 MB"],
      explanation: "45 ganger 80 gir 3600 Mbit, delt på 8 gir 450 MB. «3600 MB» er mellomresultatet i megabit, oppgitt med feil enhet. «28 800 MB» har ganget med 8 i stedet for å dele. «225 MB» er halvparten, altså delt på 16.",
    },
    {
      question: "Hvilken rate kreves for å overføre 840 MB på to minutter?",
      options: ["56 Mbit/s", "7 Mbit/s", "6720 Mbit/s", "112 Mbit/s"],
      explanation: "840 ganger 8 gir 6720 Mbit, delt på 120 sekunder gir 56 Mbit/s. «7 Mbit/s» er svaret uten omregningen. «6720 Mbit/s» er mellomresultatet, uten at det er delt på tida. «112 Mbit/s» har brukt 60 sekunder i stedet for 120.",
    },
    {
      question: "Hva er kontrollregelen for en subnettoppgave?",
      options: ["Kringkasting minus subnett skal være 2 opphøyd i vertsbit, minus én", "Kringkasting minus subnett skal være lik antall tildelbare verter", "Kringkasting pluss subnett skal være lik 255 i den delvise oktetten", "Subnettadressen skal alltid være delelig med antall vertsbit"],
      explanation: "Avstanden mellom bunnen og taket i subnettet er alltid én mindre enn antall adresser. «Kringkasting minus subnett skal være lik antall tildelbare verter» er to for lite, siden vertstallet allerede har fratrekket. «Kringkasting pluss subnett skal være lik 255 i den delvise oktetten» og «Subnettadressen skal alltid være delelig med antall vertsbit» er oppdiktede regler uten dekning.",
    },
    {
      question: "Maskinen 10.55.6.240 har masken 255.255.255.240. Hva er spesielt med adressen?",
      options: ["Den er subnettadressen selv og kan ikke tildeles en maskin", "Den er kringkastingsadressen og kan ikke tildeles en maskin", "Den er den første tildelbare adressen i subnettet", "Den ligger utenfor subnettet som masken definerer"],
      explanation: "AND-en gir 240, altså er alle vertsbitene null — det er definisjonen på subnettadressen. «Den er kringkastingsadressen og kan ikke tildeles en maskin» ville krevd at alle vertsbit var 1, altså 255. «Den er den første tildelbare adressen i subnettet» er adressen 241. «Den ligger utenfor subnettet som masken definerer» er umulig: en adresse ligger alltid i det subnettet masken plasserer den i.",
    },
    {
      question: "Hvordan kjenner du igjen at et alternativ skyldes glemt omregning fra byte til bit?",
      options: ["Det er nøyaktig en åttedel av det riktige svaret", "Det er nøyaktig åtte ganger det riktige svaret", "Det er alltid en rund toerpotens", "Det avviker med omtrent fem prosent"],
      explanation: "Uten faktoren 8 deles et for lite tall på raten, og svaret blir en åttedel. «Det er nøyaktig åtte ganger det riktige svaret» snur feilen. «Det er alltid en rund toerpotens» er signaturen på glemt minustoer i vertstellingen, en annen felle. «Det avviker med omtrent fem prosent» beskriver forskjellen mellom MB og MiB.",
    },
    {
      question: "Hvordan kjenner du igjen at et vertstall er galt?",
      options: ["Det er en rund toerpotens, altså 8, 16, 32, 64, 128 eller 256", "Det er et oddetall, siden adresser alltid kommer i par", "Det er større enn 254, som er det høyeste et subnett kan ha", "Det er ikke delelig med antall oktetter i adressen"],
      explanation: "Riktige vertstall er alltid to mindre enn en toerpotens, aldri toerpotensen selv. «Det er et oddetall, siden adresser alltid kommer i par» er riktig som observasjon, men avslører ikke fella — 30 og 62 er også partall. «Det er større enn 254, som er det høyeste et subnett kan ha» er galt: et /20-nett har 4094. «Det er ikke delelig med antall oktetter i adressen» er en oppdiktet regel.",
    },
    {
      question: "Adressen 192.168.9.201 har prefiks /27. Hvilket intervall dekker subnettet?",
      options: ["Fra 192.168.9.192 til 192.168.9.223", "Fra 192.168.9.192 til 192.168.9.224", "Fra 192.168.9.200 til 192.168.9.231", "Fra 192.168.9.128 til 192.168.9.191"],
      explanation: "AND gir 192, og med fem vertsbit dekker subnettet 32 adresser, altså 192 til 223. «Fra 192.168.9.192 til 192.168.9.224» teller én for mye — 224 er neste subnett. «Fra 192.168.9.200 til 192.168.9.231» starter på maskinens egen adresse. «Fra 192.168.9.128 til 192.168.9.191» er subnettet under.",
    },
    {
      question: "En linje er oppgitt til 90 Mbit/s. Hvor mange megabyte flytter den per sekund?",
      options: ["11,25 MB/s", "90 MB/s", "720 MB/s", "9 MB/s"],
      explanation: "90 delt på 8 gir 11,25 megabyte i sekundet. «90 MB/s» leser Mbit/s som megabyte per sekund. «720 MB/s» ganger med 8 i stedet for å dele. «9 MB/s» deler på 10 i stedet for på 8.",
    },
    {
      question: "Hva skjer med overføringstida hvis linja blir dobbelt så rask?",
      options: ["Den halveres, siden raten står i nevneren", "Den dobles, siden mer data må håndteres per sekund", "Den blir uendret, siden filstørrelsen er den samme", "Den reduseres til en åttedel, på grunn av omregningsfaktoren"],
      explanation: "Tida er omvendt proporsjonal med raten, så dobbel rate gir halv tid. «Den dobles, siden mer data må håndteres per sekund» snur sammenhengen. «Den blir uendret, siden filstørrelsen er den samme» overser at raten er i formelen. «Den reduseres til en åttedel, på grunn av omregningsfaktoren» blander inn faktoren 8, som gjelder uansett rate.",
    },
    {
      question: "Har et /25-subnett dobbelt så mange tildelbare adresser som et /26?",
      options: ["Nei, det har 126 mot 62 — altså to mer enn det dobbelte", "Ja, det har nøyaktig 124 mot 62, altså akkurat dobbelt", "Nei, det har halvparten så mange, siden prefikset er mindre", "Ja, siden hver bit mindre i prefikset alltid dobler vertstallet"],
      explanation: "Antall adresser dobles, men fratrekket på 2 gjøres i begge, så 126 er to mer enn 2 ganger 62. «Ja, det har nøyaktig 124 mot 62, altså akkurat dobbelt» oppgir feil tall for /25. «Nei, det har halvparten så mange, siden prefikset er mindre» snur retningen — mindre prefiks gir flere verter. «Ja, siden hver bit mindre i prefikset alltid dobler vertstallet» overser fratrekket.",
    },
    {
      question: "Hva er den beste kontrollen på at du har delt riktig vei i en overføringsoppgave?",
      options: ["Enhetene: megabit delt på megabit per sekund gir sekunder", "At svaret er et helt tall, siden oppgavetallene er valgt slik", "At svaret er mindre enn filstørrelsen målt i megabyte", "At svaret er større enn raten målt i megabit per sekund"],
      explanation: "Bare den ene rekkefølgen gir en tid, og det ser du før du regner. «At svaret er et helt tall, siden oppgavetallene er valgt slik» er en vane, ikke en kontroll. «At svaret er mindre enn filstørrelsen målt i megabyte» og «At svaret er større enn raten målt i megabit per sekund» sammenligner størrelser med ulike enheter og sier ingenting.",
    },
    {
      question: "En fil på 3 GB over 250 Mbit/s. Hvor lang tid tar overføringen?",
      options: ["96 sekunder", "12 sekunder", "0,096 sekunder", "192 sekunder"],
      explanation: "3 GB er 3000 MB, ganger 8 gir 24 000 Mbit, delt på 250 gir 96 sekunder. «12 sekunder» mangler omregningen fra byte til bit. «0,096 sekunder» har glemt å regne om gigabyte til megabyte. «192 sekunder» svarer til en rate på 125 Mbit/s.",
    },
    {
      question: "Hvorfor brukes prefikset /30 mellom to rutere?",
      options: ["Det gir nøyaktig to tildelbare adresser, én til hver ende", "Det gir fire tildelbare adresser, med to i reserve", "Det er det minste prefikset som tillater kringkasting", "Det er påkrevd for at ruting skal virke mellom nett"],
      explanation: "To vertsbit gir fire adresser, minus de to reserverte blir to — akkurat det en direkte forbindelse trenger. «Det gir fire tildelbare adresser, med to i reserve» overser fratrekket. «Det er det minste prefikset som tillater kringkasting» og «Det er påkrevd for at ruting skal virke mellom nett» er oppdiktede krav; kringkasting og ruting virker uansett prefiks.",
    },
    {
      question: "Hva er den farligste distraktoren i en subnettoppgave om subnettadressen?",
      options: ["Kringkastingsadressen, siden den er riktig regnet på feil spørsmål", "Maskinens egen adresse, siden den står i oppgaveteksten", "Adressen som ender på null, siden den ser ut som en nettadresse", "Den første tildelbare adressen, siden den ligner mest"],
      explanation: "Et tall som er riktig utregnet, men svarer på det andre spørsmålet, kan verken avsløres av enhetskontroll eller rimelighetsvurdering. «Maskinens egen adresse, siden den står i oppgaveteksten» avsløres straks man bruker masken. «Adressen som ender på null, siden den ser ut som en nettadresse» og «Den første tildelbare adressen, siden den ligner mest» er lettere å luke ut, siden de sjelden faller sammen med noe man har regnet.",
    },
    {
      question: "Hva bør du gjøre først i en oppgave som oppgir både nedlastings- og opplastingsrate?",
      options: ["Avgjøre hvilken vei dataene går, før du ser på tallene", "Bruke den høyeste raten, siden linja velger den raskeste veien", "Regne ut svaret med begge ratene og oppgi gjennomsnittet", "Gange filstørrelsen med 8 og velge rate etterpå"],
      explanation: "Retningen avgjør hvilken rate som er flaskehalsen, og feil valg gir et svar som er riktig regnet på feil premiss. «Bruke den høyeste raten, siden linja velger den raskeste veien» og «Regne ut svaret med begge ratene og oppgi gjennomsnittet» beskriver mekanismer som ikke finnes. «Gange filstørrelsen med 8 og velge rate etterpå» gjør stegene i feil rekkefølge og øker sjansen for å glemme retningen helt.",
    },
    {
      question: "Adressen 192.168.12.35 har prefiks /30. Hva er den?",
      options: ["Kringkastingsadressen for subnettet 192.168.12.32", "Subnettadressen for subnettet 192.168.12.35", "Den første tildelbare adressen i subnettet 192.168.12.32", "En adresse utenfor alle gyldige subnett med dette prefikset"],
      explanation: "OR med invertert maske gir 35, altså er alle vertsbit satt til 1 — definisjonen på kringkastingsadressen. «Subnettadressen for subnettet 192.168.12.35» ville krevd at AND ga 35, men AND gir 32. «Den første tildelbare adressen i subnettet 192.168.12.32» er adressen 33. «En adresse utenfor alle gyldige subnett med dette prefikset» er umulig — enhver adresse ligger i et subnett.",
    },
    {
      question: "Hvor mange tildelbare adresser har nettet 172.31.200.0 med masken 255.255.252.0?",
      options: ["1022", "1024", "510", "2046"],
      explanation: "Masken gir /22, altså 10 vertsbit: 2^10 = 1024 adresser, minus to blir 1022. «1024» er tallet uten fratrekket. «510» svarer til /23. «2046» svarer til /21.",
    },
  ],
  'in1020-4-5': [
    {
      question: "Hvilket problem løser NAT?",
      options: ["At mange enheter må dele én offentlig IP-adresse", "At en ny maskin på nettet trenger en adresse automatisk", "At mennesker husker navn i stedet for tallverdier", "At innholdet ligger fysisk langt fra brukeren som ber om det"],
      explanation: "Ruteren bytter avsenderadressen på vei ut og slår opp i en tabell på vei inn, slik at tolv enheter klarer seg med én adresse. «At en ny maskin på nettet trenger en adresse automatisk» er DHCPs jobb. «At mennesker husker navn i stedet for tallverdier» er navnetjenestens. «At innholdet ligger fysisk langt fra brukeren som ber om det» løses av et innholdsnett.",
    },
    {
      question: "Hvilket problem løser DHCP?",
      options: ["At en ny maskin ikke har noen adresse og må få tildelt en automatisk", "At flere enheter i en husstand må dele én offentlig adresse utad", "At navn må oversettes til adresser før en forespørsel kan sendes", "At adresserommet i den gamle protokollversjonen er i ferd med å ta slutt"],
      explanation: "DHCP deler ut IP-adresse, nettmaske, standard gateway og navnetjener til nye maskiner. «At flere enheter i en husstand må dele én offentlig adresse utad» er NAT. «At navn må oversettes til adresser før en forespørsel kan sendes» er DNS. «At adresserommet i den gamle protokollversjonen er i ferd med å ta slutt» er det IPv6 løser.",
    },
    {
      question: "Hvorfor bruker DHCP UDP og ikke TCP?",
      options: ["Maskinen har ennå ingen adresse og kan derfor ikke sette opp en forbindelse", "Adressetildeling skjer så ofte at oppsett av forbindelser ville blitt for dyrt", "TCP kan ikke brukes på det lokale nettet, bare mellom ulike nett", "UDP er den eneste protokollen som kan sende til kringkastingsadressen"],
      explanation: "Uten adresse finnes det ikke noe å etablere en TCP-forbindelse med, så forespørselen må gå tilkoblingsløst. «Adressetildeling skjer så ofte at oppsett av forbindelser…» er galt: adresser tildeles sjelden. «TCP kan ikke brukes på det lokale nettet, bare mellom ulike nett» er teknisk feil. «UDP er den eneste protokollen som kan sende til kringkastingsadressen» høres rimelig ut, men begrunnelsen er feil vei — det er mangelen på adresse som tvinger fram kringkasting.",
    },
    {
      question: "Hva gjør DNS?",
      options: ["Oversetter navn til IP-adresse", "Tildeler IP-adresser til maskiner som mangler en", "Oversetter private adresser til én offentlig adresse", "Fordeler innhold til tjenere nær brukerne"],
      explanation: "Navnetjenesten finner en adresse som allerede finnes, ut fra et navn. «Tildeler IP-adresser til maskiner som mangler en» er DHCP — å tildele er noe annet enn å finne. «Oversetter private adresser til én offentlig adresse» er NAT. «Fordeler innhold til tjenere nær brukerne» er et innholdsnett.",
    },
    {
      question: "Hva er det viktigste IPv6 løser?",
      options: ["At adressene i IPv4 er i ferd med å ta slutt", "At overføringen over nettet går for sakte med gamle adresser", "At trafikken mellom to maskiner går ukryptert", "At ruting mellom nett krever for mange oppslag underveis"],
      explanation: "128 bit mot 32 bit fjerner adressemangelen, og det er den ene tingen versjonen er til for. «At overføringen over nettet går for sakte med gamle adresser» er den mest brukte distraktoren — farten bestemmes av linjene. «At trafikken mellom to maskiner går ukryptert» krever egne mekanismer uansett versjon. «At ruting mellom nett krever for mange oppslag underveis» er nettverkslagets oppgave uansett.",
    },
    {
      question: "Hvor mange bit er en IPv6-adresse?",
      options: ["128 bit", "64 bit", "32 bit", "256 bit"],
      explanation: "IPv6-adressen er fire ganger så lang som IPv4s 32 bit. «64 bit» er en dobling og virker rimelig, men er feil. «32 bit» er IPv4. «256 bit» er dobbelt så mye som riktig svar.",
    },
    {
      question: "Hva oppnår et CDN?",
      options: ["Kortere vei for brukeren, avlastning av opprinnelsestjeneren og mindre trafikk i kjernenettet", "Kryptering av innholdet på vei fra tjeneren og fram til den enkelte brukeren", "Automatisk tildeling av adresser til alle maskinene som ber om innholdet", "Oversetting av tjenestens navn til den nærmeste tjenermaskinens adresse"],
      explanation: "Kopier nær brukerne gir alle tre gevinstene samtidig. «Kryptering av innholdet på vei fra tjeneren og fram til den…» er ikke det et innholdsnett er til for. «Automatisk tildeling av adresser til alle maskinene som ber om innholdet» er DHCP. «Oversetting av tjenestens navn til den nærmeste tjenermaskinens adresse» er navnetjenesten, selv om de to ofte samarbeider.",
    },
    {
      question: "Hva er forskjellen på et CDN og mellomlageret i nettleseren din?",
      options: ["Et CDN ligger ute i nettet og tjener mange brukere, nettleserens mellomlager tjener bare deg", "Nettleserens mellomlager ligger ute i nettet, mens et CDN ligger på din egen maskin", "Et CDN lagrer bare video, mens nettleserens mellomlager lagrer alle typer innhold", "Et CDN krever IPv6, mens nettleserens mellomlager virker med begge adresseversjoner"],
      explanation: "Antallet brukere de betjener, er hele forskjellen: det ene hjelper deg alene, det andre alle i nærheten. «Nettleserens mellomlager ligger ute i nettet…» bytter om de to. «Et CDN lagrer bare video…» og «Et CDN krever IPv6, mens nettleserens mellomlager virker…» er oppdiktede begrensninger.",
    },
    {
      question: "Hvilken transportprotokoll bruker strømming av video over nettet?",
      options: ["TCP, fordi et segment må være helt for å kunne spilles av", "UDP, fordi video må komme fram raskt og ikke tåler forsinkelse", "UDP, fordi omsending av tapte pakker ville gjort bildet uskarpt", "Både TCP og UDP, avhengig av hvilket kvalitetsnivå som er valgt"],
      explanation: "Et segment med hull kan ikke spilles, og bufferen på flere sekunder gjør at omsendinger ikke merkes. «UDP, fordi video må komme fram raskt og ikke tåler forsinkelse» og «UDP, fordi omsending av tapte pakker ville gjort bildet uskarpt» gjelder sanntids videosamtale, der forsinkelse er verre enn tap. «Både TCP og UDP, avhengig av hvilket kvalitetsnivå som er valgt» er oppspinn — kvalitetsnivået påvirker ikke transporten.",
    },
    {
      question: "Hvem bestemmer hvilket kvalitetsnivå som hentes i strømming?",
      options: ["Klienten, ut fra hvor fort det forrige segmentet kom fram", "Tjeneren, ut fra hvor mange brukere som er koblet til samtidig", "Ruteren, ut fra hvor mye kapasitet som er ledig på linja", "Navnetjenesten, som peker klienten til riktig kvalitetsnivå"],
      explanation: "Avspilleren måler farten på forrige segment og ber om neste i en kvalitet linja klarer. «Tjeneren, ut fra hvor mange brukere som er koblet til samtidig» og «Ruteren, ut fra hvor mye kapasitet som er ledig på linja» flytter avgjørelsen til noen som ikke vet hvordan din linje oppfører seg. «Navnetjenesten, som peker klienten til riktig kvalitetsnivå» gir navnetjenesten en rolle den ikke har.",
    },
    {
      question: "Hva er et segment i strømmesammenheng?",
      options: ["En bit av videostrømmen på noen få sekunder, som hentes for seg", "En pakke på transportlaget, med hode og nyttedata", "Et av kvalitetsnivåene videoen finnes i", "Den delen av filmen som allerede er spilt av"],
      explanation: "Oppdelingen i korte biter er det som gjør det mulig å bytte kvalitet underveis. «En pakke på transportlaget, med hode og nyttedata» er transportlagets segment, et helt annet begrep med samme navn. «Et av kvalitetsnivåene videoen finnes i» forveksler biten med nivået. «Den delen av filmen som allerede er spilt av» beskriver noe som ikke har eget navn her.",
    },
    {
      question: "Hva er DNS-prefetching?",
      options: ["Nettleseren slår opp adressene til lenkene på siden før brukeren klikker", "Nettleseren laster ned hele sidene bak lenkene før brukeren klikker", "Navnetjeneren sender oppdaterte adresser til klientene med jevne mellomrom", "Ruteren lagrer navneoppslag for alle maskinene på det lokale nettet"],
      explanation: "Oppslaget gjøres på forhånd, slik at klikket ikke må vente på det. «Nettleseren laster ned hele sidene bak lenkene før brukeren klikker» henter for mye — det er adressene, ikke sidene. «Navnetjeneren sender oppdaterte adresser til klientene med…» og «Ruteren lagrer navneoppslag for alle maskinene på det lokale nettet» beskriver mekanismer som ikke er det prefetching betyr.",
    },
    {
      question: "Hva deler DHCP ut, i tillegg til IP-adressen?",
      options: ["Nettmaske, standard gateway og adressen til en navnetjener", "Kringkastingsadresse, portnummer og maskinvareadresse", "Offentlig adresse, oversettingstabell og opplastingsrate", "Prefikslengde, rutingtabell og adressen til nærmeste innholdstjener"],
      explanation: "Alle fire opplysningene trengs for at maskinen skal kunne bruke nettet i det hele tatt. «Kringkastingsadresse, portnummer og maskinvareadresse» nevner ting maskinen enten regner ut selv eller allerede har. «Offentlig adresse, oversettingstabell og opplastingsrate» og «Prefikslengde, rutingtabell og adressen til nærmeste innholdstjener» blander inn NAT, ruting og innholdsnett, som DHCP ikke har noe med.",
    },
    {
      question: "Hva er standard gateway?",
      options: ["Ruteren maskinen sender til når mottakeren ligger utenfor eget nett", "Navnetjeneren maskinen spør når den skal oversette et navn", "Den offentlige adressen husstanden bruker utad gjennom NAT", "Den første tildelbare adressen i subnettet, som alltid er reservert"],
      explanation: "Alt som ikke er lokalt, sendes til gatewayen, som tar det videre. «Navnetjeneren maskinen spør når den skal oversette et navn» er navnetjeneren, en annen adresse fra samme DHCP-svar. «Den offentlige adressen husstanden bruker utad gjennom NAT» er NATs offentlige adresse. «Den første tildelbare adressen i subnettet, som alltid er reservert» er en regel som ikke finnes — første tildelbare adresse er tildelbar.",
    },
    {
      question: "Hva er forskjellen på NAT og IPv6 som svar på adressemangel?",
      options: ["NAT lar mange dele én adresse, mens IPv6 gjør at det finnes nok adresser til alle", "IPv6 lar mange dele én adresse, mens NAT utvider adresserommet", "NAT gjelder bare lokale nett, mens IPv6 bare gjelder mellom land", "NAT er en protokoll på transportlaget, mens IPv6 ligger på applikasjonslaget"],
      explanation: "Den ene er en omgåelse, den andre er løsningen — og det er nettopp den forskjellen koblingsoppgaver tester. «IPv6 lar mange dele én adresse, mens NAT utvider adresserommet» bytter om de to. «NAT gjelder bare lokale nett, mens IPv6 bare gjelder mellom land» er en oppdiktet geografisk grense. «NAT er en protokoll på transportlaget…» plasserer begge i feil lag.",
    },
    {
      question: "Hvorfor mellomlagres DNS-svar?",
      options: ["For at gjentatte oppslag på samme navn skal besvares uten å gå videre utover", "For at navnetjeneren skal kunne kryptere svarene før de sendes tilbake", "For at klienten skal slippe å be om adresse fra DHCP ved hver oppkobling", "For at innholdet på nettsiden skal kunne vises uten ny nedlasting"],
      explanation: "Uten mellomlagring ville hver sidevisning i verden utløst et fullt oppslag gjennom hele hierarkiet. «For at navnetjeneren skal kunne kryptere svarene før de sendes tilbake» blander inn kryptering, som ikke er DNS sin oppgave. «For at klienten skal slippe å be om adresse fra DHCP ved hver oppkobling» forveksler navnetjenesten med adressetildeling. «For at innholdet på nettsiden skal kunne vises uten ny nedlasting» beskriver nettleserens mellomlager.",
    },
    {
      question: "Hva gjør oversettingstabellen i en ruter som kjører NAT?",
      options: ["Holder styr på hvilken intern enhet som startet hvilken samtale utad", "Oversetter navn til IP-adresser for alle enhetene på det lokale nettet", "Lagrer hvilke IP-adresser som er delt ut til hvilke maskiner", "Bestemmer hvilken vei pakkene skal ta videre gjennom internett"],
      explanation: "Uten tabellen ville ruteren fått svaret på husstandens ene adresse uten å vite hvem det tilhørte. «Oversetter navn til IP-adresser for alle enhetene på det lokale nettet» er navnetjenesten. «Lagrer hvilke IP-adresser som er delt ut til hvilke maskiner» er DHCPs bokføring. «Bestemmer hvilken vei pakkene skal ta videre gjennom internett» er rutingtabellen, en annen tabell med en annen jobb.",
    },
    {
      question: "Hvorfor tok overgangen til IPv6 så lang tid?",
      options: ["NAT virket godt nok til at adressemangelen aldri ble akutt", "IPv6 var ikke ferdig utviklet før nylig, og kunne ikke tas i bruk", "Rutere kan ikke håndtere begge adresseversjonene samtidig", "Navnetjenesten kan bare svare med adresser i den gamle versjonen"],
      explanation: "Så lenge en hel husstand klarer seg med én offentlig adresse, holder puljen mye lenger enn den ellers ville gjort. «IPv6 var ikke ferdig utviklet før nylig, og kunne ikke tas i bruk» er historisk galt. «Rutere kan ikke håndtere begge adresseversjonene samtidig» og «Navnetjenesten kan bare svare med adresser i den gamle versjonen» er tekniske påstander uten dekning — begge deler virker fint med begge versjoner.",
    },
    {
      question: "Hvilket lag hører NAT, DNS, DHCP, CDN og DASH til?",
      options: ["Applikasjonslaget, mens IPv6 hører til nettverkslaget", "Transportlaget, siden de alle bruker enten TCP eller UDP", "Nettverkslaget, siden de alle handler om adresser", "Lenkelaget, siden de virker på det lokale nettet"],
      explanation: "Tjenestene er applikasjoner som bruker transportlaget under seg, mens adresseprotokollen selv ligger i nettverkslaget. «Transportlaget, siden de alle bruker enten TCP eller UDP» forveksler å bruke et lag med å være i det. «Nettverkslaget, siden de alle handler om adresser» stemmer bare for IPv6. «Lenkelaget, siden de virker på det lokale nettet» gjelder ingen av dem.",
    },
    {
      question: "Hva er forskjellen på strømming fra en tjeneste og en sanntids videosamtale?",
      options: ["Strømming har buffer og bruker TCP, mens samtalen mangler buffer og bruker UDP", "Strømming mangler buffer og bruker UDP, mens samtalen har buffer og bruker TCP", "Begge bruker UDP, men strømming henter segmentene i høyere kvalitet", "Begge bruker TCP, men samtalen sender uten å vente på bekreftelser"],
      explanation: "Spørsmålet som avgjør, er om mottakeren har tid til å vente på en omsending — og det har en avspiller med flere sekunder buffer. «Strømming mangler buffer og bruker UDP…» bytter om de to. «Begge bruker UDP, men strømming henter segmentene i høyere kvalitet» og «Begge bruker TCP, men samtalen sender uten å vente på bekreftelser» gir begge situasjonene samme transport, som er nettopp forvekslingen.",
    },
    {
      question: "Hva er en privat IP-adresse?",
      options: ["En adresse som bare gjelder inne på ett lokalt nett", "En adresse som er kryptert og derfor ikke lesbar utenfra", "En adresse som bare kan brukes av én bestemt bruker om gangen", "En adresse som tildeles permanent og aldri endres"],
      explanation: "Flere husstander kan bruke de samme private adressene uten at det kolliderer, fordi de aldri møtes utad. «En adresse som er kryptert og derfor ikke lesbar utenfra» forveksler «privat» med kryptering. «En adresse som bare kan brukes av én bestemt bruker om gangen» og «En adresse som tildeles permanent og aldri endres» beskriver egenskaper adressen ikke har — den kan endres ved neste oppkobling.",
    },
    {
      question: "En kollega sier at IPv6 vil gjøre nettet raskere. Hva er den beste innvendingen?",
      options: ["Overføringsfarten bestemmes av linjene og av kø underveis, ikke av adressens lengde", "IPv6 er faktisk tregere, siden lengre adresser gir større pakkehoder", "IPv6 påvirker bare lokale nett, ikke trafikk som går mellom land", "IPv6 kan ikke brukes sammen med innholdsnett, som er det som gir fart"],
      explanation: "Adressefeltets lengde har ingenting med hvor fort bitene beveger seg, å gjøre. «IPv6 er faktisk tregere, siden lengre adresser gir større pakkehoder» overdriver en marginal effekt til en påstand som ikke holder. «IPv6 påvirker bare lokale nett, ikke trafikk som går mellom land» og «IPv6 kan ikke brukes sammen med innholdsnett, som er det som gir fart» er oppdiktede begrensninger.",
    },
  ],
  'in1020-4-6': [
    {
      question: "Hvilken kjøremodus kjører vanlige brukerprogrammer i?",
      options: ["Brukermodus, med begrenset tilgang til maskinvaren", "Kjernemodus, siden de trenger tilgang til minne og lagring", "Vekselvis begge, avhengig av hvor mye minne programmet bruker", "Ingen av dem — moduser gjelder bare operativsystemet selv"],
      explanation: "Brukermodus er hele grunnen til at et program med feil ikke velter maskinen. «Kjernemodus, siden de trenger tilgang til minne og lagring» er den hyppigste feilkryssingen i sjangeren. «Vekselvis begge, avhengig av hvor mye minne programmet bruker» knytter modus til minnebruk, som ikke har noe med saken å gjøre. «Ingen av dem — moduser gjelder bare operativsystemet selv» er galt: modus er en tilstand prosessoren er i når den kjører hva som helst.",
    },
    {
      question: "Trenger en mobiltelefon et operativsystem?",
      options: ["Ja, den kjører mange programmer samtidig og må fordele ressurser", "Nei, den har for lite minne til at et operativsystem får plass", "Nei, programmene på en mobil snakker direkte med maskinvaren", "Bare når den er koblet til et nettverk og laster ned data"],
      explanation: "En mobil har flere programmer i gang samtidig enn de fleste PC-er hadde for tjue år siden. «Nei, den har for lite minne til at et operativsystem får plass» og «Nei, programmene på en mobil snakker direkte med maskinvaren» er de faste distraktorene, og begge er teknisk gale. «Bare når den er koblet til et nettverk og laster ned data» gir operativsystemet en rolle som avhenger av nettverk, noe det ikke gjør.",
    },
    {
      question: "Hvordan når et brukerprogram maskinvaren?",
      options: ["Gjennom et systemkall, som gir et midlertidig bytte til kjernemodus", "Direkte, så lenge programmet har fått de rette tillatelsene", "Gjennom driveren, som brukerprogrammet inneholder en kopi av", "Det kan ikke nå maskinvaren i det hele tatt, verken direkte eller indirekte"],
      explanation: "Veien går alltid gjennom kjernen, og byttet reverseres når jobben er gjort. «Direkte, så lenge programmet har fått de rette tillatelsene» forveksler tillatelser med omgåelse — tillatelser avgjør hva kjernen gjør for deg, ikke om du må gå gjennom den. «Gjennom driveren, som brukerprogrammet inneholder en kopi av» plasserer driveren i feil program. «Det kan ikke nå maskinvaren i det hele tatt…» overdriver begrensningen.",
    },
    {
      question: "Hva er forskjellen på kjernemodus og en CPU-kjerne?",
      options: ["Kjernemodus er en kjøremodus, mens en CPU-kjerne er en fysisk regneenhet", "En CPU-kjerne er en kjøremodus, mens kjernemodus er en fysisk regneenhet", "De er to navn på det samme, brukt i ulike deler av faget", "Kjernemodus gjelder bare på maskiner med flere CPU-kjerner"],
      explanation: "Det ene er en tilstand prosessoren er i, det andre en del av brikken — en maskin med én kjerne har også kjernemodus. «En CPU-kjerne er en kjøremodus, mens kjernemodus er en fysisk regneenhet» bytter om de to. «De er to navn på det samme, brukt i ulike deler av faget» og «Kjernemodus gjelder bare på maskiner med flere CPU-kjerner» bygger begge på forvekslingen ordforvekslingen skaper.",
    },
    {
      question: "Hva er en prosess?",
      options: ["Ett program under kjøring, med sitt eget minneområde", "En fil på lagringsenheten som inneholder kjørbar kode", "En oppgave operativsystemet utfører på vegne av maskinvaren", "Ett av trinnene en instruksjon går gjennom i prosessoren"],
      explanation: "Prosessen er det som kjører; programmet er fila. «En fil på lagringsenheten som inneholder kjørbar kode» beskriver programmet. «En oppgave operativsystemet utfører på vegne av maskinvaren» snur retningen — operativsystemet betjener programmene, ikke maskinvaren. «Ett av trinnene en instruksjon går gjennom i prosessoren» beskriver noe helt annet, nemlig trinnene i instruksjonsutføringen.",
    },
    {
      question: "Hvor hører en driver hjemme?",
      options: ["I operativsystemet, som broen mot én bestemt maskinvareenhet", "I programmet som bruker enheten, som en del av programfila", "I maskinvaren selv, som fast innebygd kode på brikken", "I nettverkslaget, siden drivere styrer kommunikasjon"],
      explanation: "Driveren byttes når maskinvaren byttes, ikke når programmet byttes. «I programmet som bruker enheten, som en del av programfila» ville krevd at hvert program kjente hver enhet. «I maskinvaren selv, som fast innebygd kode på brikken» forveksler driveren med fastvare. «I nettverkslaget, siden drivere styrer kommunikasjon» gir driveren en plass i en modell den ikke hører hjemme i.",
    },
    {
      question: "Hva menes med maskinvareabstraksjon?",
      options: ["At programmet ber om «lagre fil» i stedet for å styre lagringsbrikken selv", "At maskinvaren gjøres raskere ved at unødvendige detaljer fjernes", "At operativsystemet emulerer maskinvare som ikke finnes fysisk", "At programmerere slipper å tenke på hvor mye minne som brukes"],
      explanation: "Felles grensesnitt gjør at samme program virker på maskiner med ulik maskinvare. «At maskinvaren gjøres raskere ved at unødvendige detaljer fjernes» forveksler abstraksjon med optimering. «At operativsystemet emulerer maskinvare som ikke finnes fysisk» beskriver noe annet, nemlig virtualisering. «At programmerere slipper å tenke på hvor mye minne som brukes» er en gevinst abstraksjonen ikke gir — minne må fortsatt håndteres.",
    },
    {
      question: "Hvilken av disse er IKKE en av operativsystemets oppgaver?",
      options: ["Å kryptere all trafikk som går ut på nettverket", "Å fordele prosessortid mellom programmene", "Å la flere brukere dele maskinen samtidig", "Å tilby programmene et felles sett med tjenester"],
      explanation: "Kryptering er en tjeneste programmer kan be om, ikke noe operativsystemet gjør med all trafikk automatisk. «Å fordele prosessortid mellom programmene», «Å la flere brukere dele maskinen samtidig» og «Å tilby programmene et felles sett med tjenester» er tre av de fire faste oppgavene, sammen med maskinvareabstraksjon.",
    },
    {
      question: "Hva kjennetegner klient-tjener-modellen?",
      options: ["Faste roller: én part spør, en annen svarer", "At begge parter er både klient og tjener samtidig", "At en dedikert bane settes opp mellom partene", "At kapasiteten vokser når flere brukere kommer til"],
      explanation: "Rollene ligger fast, og det er nettopp det som skiller modellen fra likemannsnett. «At begge parter er både klient og tjener samtidig» beskriver likemannsnett. «At en dedikert bane settes opp mellom partene» er linjesvitsjing, et helt annet skille. «At kapasiteten vokser når flere brukere kommer til» er likemannsnettets styrke, ikke klient-tjeners.",
    },
    {
      question: "Hva kjennetegner et likemannsnett?",
      options: ["Hver deltaker er både klient og tjener samtidig", "En sentral tjener leverer alt innhold til alle deltakerne", "Alle deltakerne får en dedikert bane til hverandre", "Deltakerne kan bare hente data, ikke levere dem videre"],
      explanation: "At alle kan både spørre og svare, er det som gjør at kapasiteten vokser med antall deltakere. «En sentral tjener leverer alt innhold til alle deltakerne» beskriver klient-tjener. «Alle deltakerne får en dedikert bane til hverandre» blander inn svitsjing. «Deltakerne kan bare hente data, ikke levere dem videre» fjerner nettopp det som kjennetegner modellen.",
    },
    {
      question: "Er internett linjesvitsjet eller pakkesvitsjet?",
      options: ["Pakkesvitsjet — data deles i pakker som deler linjene", "Linjesvitsjet — en bane settes opp for hver forbindelse", "Linjesvitsjet når TCP brukes, pakkesvitsjet når UDP brukes", "Begge deler samtidig, avhengig av hvilket lag man ser på"],
      explanation: "Ingen bane er reservert; pakkene deler linjene med alle andres. «Linjesvitsjet — en bane settes opp for hver forbindelse» er den klassiske forvekslingen. «Linjesvitsjet når TCP brukes, pakkesvitsjet når UDP brukes» slutter feilaktig fra «tilkoblingsorientert» til «dedikert bane». «Begge deler samtidig, avhengig av hvilket lag man ser på» finnes ikke som mekanisme.",
    },
    {
      question: "Hva er fordelen med linjesvitsjing?",
      options: ["Garantert kapasitet og jevn forsinkelse gjennom hele samtalen", "Bedre utnyttelse av linjene, siden ledig kapasitet kan brukes av andre", "At det ikke finnes noe enkeltpunkt som kan svikte", "At kapasiteten vokser når flere brukere kobler seg til"],
      explanation: "En bane som er din alene, gir forutsigbarhet — og prisen er at den står ubrukt når ingen sier noe. «Bedre utnyttelse av linjene, siden ledig kapasitet kan brukes av andre» er pakkesvitsjingens fordel. «At det ikke finnes noe enkeltpunkt som kan svikte» og «At kapasiteten vokser når flere brukere kobler seg til» hører til likemannsnett, et annet skille.",
    },
    {
      question: "Hvorfor utnytter pakkesvitsjing linjene bedre enn linjesvitsjing?",
      options: ["De fleste forbindelser er stille mesteparten av tida, så ledig kapasitet kan brukes av andre", "Pakker er mindre enn de dataene som sendes over en dedikert bane", "Pakkesvitsjing komprimerer dataene før de sendes ut på linja", "Pakkesvitsjing bruker flere linjer samtidig for hver enkelt forbindelse, og øker dermed farten"],
      explanation: "En dedikert bane som står ubrukt i ni av ti sekunder, er ni tideler sløsing. «Pakker er mindre enn de dataene som sendes over en dedikert bane» sammenligner størrelser som ikke er sammenlignbare. «Pakkesvitsjing komprimerer dataene før de sendes ut på linja» er galt — svitsjing komprimerer ingenting. «Pakkesvitsjing bruker flere linjer samtidig for hver enkelt…» beskriver noe som ikke er poenget.",
    },
    {
      question: "Betyr en TCP-forbindelse at det finnes en dedikert bane mellom partene?",
      options: ["Nei, forbindelsen er en bokføring i de to endene, mens pakkene deler linjene", "Ja, TCP reserverer kapasitet fra avsender til mottaker under oppsettet av forbindelsen", "Ja, men bare mellom de to nærmeste ruterne på hver side", "Nei, TCP setter ikke opp noen forbindelse i det hele tatt"],
      explanation: "Ordet «forbindelse» beskriver hva de to endene er enige om, ikke en fysisk bane gjennom nettet. «Ja, TCP reserverer kapasitet fra avsender til mottaker…» og «Ja, men bare mellom de to nærmeste ruterne på hver side» gir TCP en evne den ikke har. «Nei, TCP setter ikke opp noen forbindelse i det hele tatt» går for langt — TCP er tilkoblingsorientert, det er selve poenget.",
    },
    {
      question: "Hva ville skjedd uten skillet mellom kjernemodus og brukermodus?",
      options: ["Et program med feil kunne velte hele maskinen og lese andre programmers minne", "Maskinen ville gått litt raskere, men hvert program ville brukt betydelig mer minne", "Operativsystemet ville mistet muligheten til å fordele prosessortid", "Programmene måtte skrives om for hver ny maskinvaremodell"],
      explanation: "Isolasjonen er hele hensikten med å ha to moduser. «Maskinen ville gått litt raskere…» nevner en marginal gevinst og overser hovedpoenget. «Operativsystemet ville mistet muligheten til å fordele prosessortid» blander inn ressursfordeling, som er en annen mekanisme. «Programmene måtte skrives om for hver ny maskinvaremodell» beskriver hva som ville skjedd uten maskinvareabstraksjon.",
    },
    {
      question: "Krever samtidighet at prosessoren har flere kjerner?",
      options: ["Nei, operativsystemet veksler mellom prosessene så raskt at det ser samtidig ut", "Ja, uten flere kjerner kan bare ett eneste program være i gang av gangen på maskinen", "Ja, men bare når programmene bruker nettverket samtidig", "Nei, men da må hvert program få sitt eget minneområde i stedet"],
      explanation: "Vekslingen alene er nok til at maskinen virker samtidig; flere kjerner gjør at noe faktisk skjer samtidig. «Ja, uten flere kjerner kan bare ett eneste program være i…» og «Ja, men bare når programmene bruker nettverket samtidig» gjør flere kjerner til et krav de ikke er. «Nei, men da må hvert program få sitt eget minneområde i stedet» har riktig konklusjon, men gal begrunnelse — eget minneområde gjelder uansett antall kjerner.",
    },
    {
      question: "Hvilke to skiller behandles i dette kapitlet, og hva handler de om?",
      options: ["Aksessmodell handler om hvem som spør, svitsjing om hvordan linja brukes", "Aksessmodell handler om hvordan linja brukes, svitsjing om hvem som spør", "Begge handler om hvordan data fordeles mellom brukere på et nett", "Aksessmodell gjelder lokale nett, svitsjing gjelder trafikk mellom land"],
      explanation: "De to skillene er uavhengige: en klient-tjener-tjeneste går fint over et pakkesvitsjet nett. «Aksessmodell handler om hvordan linja brukes, svitsjing om hvem som spør» bytter om dem. «Begge handler om hvordan data fordeles mellom brukere på et nett» visker ut forskjellen. «Aksessmodell gjelder lokale nett, svitsjing gjelder trafikk mellom land» gjør skillet geografisk, noe det ikke er.",
    },
    {
      question: "Hva er svakheten ved klient-tjener-modellen?",
      options: ["Tjeneren er en flaskehals og et enkeltpunkt som kan svikte", "Ingen har ansvaret for at innholdet faktisk finnes", "Det er vanskelig å styre hvem som får tilgang til hva", "Kapasiteten synker når nye tjenere kobles til"],
      explanation: "Alle henvendelser går til den samme maskinen, og det er nettopp det et innholdsnett avhjelper. «Ingen har ansvaret for at innholdet faktisk finnes» og «Det er vanskelig å styre hvem som får tilgang til hva» er svakheter ved likemannsnett, ikke ved klient-tjener. «Kapasiteten synker når nye tjenere kobles til» er oppspinn — flere tjenere gir mer kapasitet.",
    },
  ],
  'in1020-5-1': [
    {
      question: "Hva er grunnregelen for avkrysning under negativ poenggiving?",
      options: ["Kryss av det du kan begrunne, og la stå der du er i reell tvil", "Kryss alltid av, siden en oppgave aldri kan gi mindre enn null poeng", "La alltid stå med mindre du er helt sikker på at alternativet er riktig", "Kryss av like mange alternativer som oppgaven har riktige svar"],
      explanation: "Kravet er begrunnelse — en setning som viser til en regel eller en utregning. «Kryss alltid av, siden en oppgave aldri kan gi mindre enn null poeng» gjør gjetting gratis, noe gulvet ikke gjør. «La alltid stå med mindre du er helt sikker på at alternativet er riktig» er for strengt og lar poeng ligge på hver oppgave. «Kryss av like mange alternativer som oppgaven har riktige svar» forutsetter at antallet riktige er kjent, og det er det ikke.",
    },
    {
      question: "Hva betyr det at en oppgave aldri kan gi mindre enn 0 poeng?",
      options: ["Et feilkryss på én oppgave kan ikke spise poeng du har tjent på en annen", "Feilkryss innenfor samme oppgave trekker ikke fra de riktige svarene", "Gale avkrysninger gir null trekk så lenge minst ett svar er riktig", "Man kan krysse av alle alternativer uten at det koster noe"],
      explanation: "Gulvet gjelder per oppgave og beskytter mot at én katastrofal oppgave ødelegger de andre. «Feilkryss innenfor samme oppgave trekker ikke fra de riktige svarene» er galt: innenfor samme oppgave trekker feilkryssene fra de riktige. «Gale avkrysninger gir null trekk så lenge minst ett svar er riktig» og «Man kan krysse av alle alternativer uten at det koster noe» leser gulvet som at gjetting er gratis.",
    },
    {
      question: "Hva er den viktigste strategien for svarform F1?",
      options: ["Vurder hvert alternativ for seg, som sitt eget sant/usant-spørsmål", "Finn det ene alternativet som passer best, og kryss av bare det", "Kryss av alle alternativer som ikke er åpenbart gale", "Tell hvor mange alternativer som finnes, og kryss av halvparten"],
      explanation: "Alternativene er uavhengige, og det er svært vanlig at tre av fem stemmer. «Finn det ene alternativet som passer best, og kryss av bare det» er den vanligste enkeltfeilen i formatet. «Kryss av alle alternativer som ikke er åpenbart gale» gjetter bredt og betaler for hver bom. «Tell hvor mange alternativer som finnes, og kryss av halvparten» er en regel uten grunnlag.",
    },
    {
      question: "Hva er den viktigste strategien for en sant/usant-matrise?",
      options: ["Les hver rad ord for ord og avgjør den for seg", "Se på fordelingen av sanne og usanne og balanser svarene", "Svar sant på alle rader du kjenner igjen fra pensum", "Hopp over hele matrisen hvis du er usikker på flere rader"],
      explanation: "Den vanligste konstruksjonen er en riktig setning med ett ord byttet ut. «Se på fordelingen av sanne og usanne og balanser svarene» bruker en fordeling som ikke finnes. «Svar sant på alle rader du kjenner igjen fra pensum» forveksler gjenkjennelse med forståelse — distraktorene er nettopp gjenkjennelige. «Hopp over hele matrisen hvis du er usikker på flere rader» kaster bort delvis uttelling.",
    },
    {
      question: "Hva er en fast felle i koblingsoppgaver?",
      options: ["Å tvinge inn en kategori som ikke skal brukes", "Å bruke samme kategori på flere elementer", "Å begynne med de koblingene man er aller sikrest på", "Å kontrollere hver kobling for seg til slutt"],
      explanation: "En kategori kan stå ubrukt, og å tvinge den inn koster poeng. «Å bruke samme kategori på flere elementer» er tvert imot helt vanlig og ofte riktig. «Å begynne med de koblingene man er aller sikrest på» og «Å kontrollere hver kobling for seg til slutt» er nettopp de anbefalte framgangsmåtene.",
    },
    {
      question: "Hva bør du gjøre først i en nedtrekksoppgave med regning?",
      options: ["Regne ferdig før du ser på alternativene", "Lese alternativene for å se hvilken størrelsesorden svaret ligger i", "Velge det alternativet som ligger nærmest et grovt overslag", "Sammenligne alternativene og velge det som skiller seg minst ut"],
      explanation: "Alle gale alternativer i denne boka svarer til en bestemt regnefeil og er laget for å se rimelige ut. «Lese alternativene for å se hvilken størrelsesorden svaret ligger i» og «Velge det alternativet som ligger nærmest et grovt overslag» lar distraktorene styre regningen. «Sammenligne alternativene og velge det som skiller seg minst ut» er en gjettestrategi uten faglig innhold.",
    },
    {
      question: "Hvor mange seksjoner må bestås for at eksamen er bestått?",
      options: ["Alle fire, hver for seg", "Tre av fire, siden den svakeste strykes", "Det holder at samlet poengsum er over grensen", "To av fire, én fra hver halvdel av pensum"],
      explanation: "Fire seksjoner à 25 poeng, og hver har sin egen terskel. «Tre av fire, siden den svakeste strykes» og «To av fire, én fra hver halvdel av pensum» beskriver strykordninger som ikke finnes. «Det holder at samlet poengsum er over grensen» er den vanligste misforståelsen — det er fire terskler, ikke én samlet.",
    },
    {
      question: "Hva er tidsbudsjettet per seksjon på en firetimers eksamen med fire seksjoner?",
      options: ["Omtrent 60 minutter", "Omtrent 90 minutter", "Omtrent 45 minutter", "Omtrent 30 minutter"],
      explanation: "240 minutter delt på fire seksjoner gir 60 minutter hver. «Omtrent 90 minutter» ville brukt opp seks timer. «Omtrent 45 minutter» og «Omtrent 30 minutter» lar til sammen halvannen til to timer stå ubrukt, som i praksis betyr at man har regnet feil.",
    },
    {
      question: "Når bør du gå tilbake til oppgaver du har markert underveis?",
      options: ["Når alle fire seksjonene er sett gjennom én gang", "Med én gang, mens oppgaven er frisk i minnet", "Etter hver seksjon, før du går videre til neste", "Bare hvis du har mer enn en time igjen når du er ferdig"],
      explanation: "Et poeng i en useft seksjon er verdt mer enn et ekstra poeng i en du har vært gjennom, og hver seksjon må bestås. «Med én gang, mens oppgaven er frisk i minnet» og «Etter hver seksjon, før du går videre til neste» risikerer at en hel seksjon blir stående usett. «Bare hvis du har mer enn en time igjen når du er ferdig» gjør tilbakegangen betinget av noe som ikke er poenget.",
    },
    {
      question: "En oppgave har fem alternativer. Du kan begrunne tre. Hva gjør du?",
      options: ["Krysser av de tre og lar de to andre stå", "Krysser av alle fem for å være sikker på å få med de riktige", "Krysser av bare det ene du er aller sikrest på", "Lar hele oppgaven stå, siden du ikke kan alle fem"],
      explanation: "De tre gir uttelling uavhengig av hva du gjør med de to andre. «Krysser av alle fem for å være sikker på å få med de riktige» betaler for to bom. «Krysser av bare det ene du er aller sikrest på» er den vanligste feilen og koster to sikre poeng. «Lar hele oppgaven stå, siden du ikke kan alle fem» kaster bort hele oppgaven.",
    },
    {
      question: "Hva er problemet med å bruke ekstra tid på den seksjonen som går best?",
      options: ["Hver seksjon må bestås for seg, så ekstra poeng der kan ikke berge en annen", "Sensuren vekter de fire seksjonene ulikt, og den sterkeste teller minst", "Oppgavene blir vanskeligere utover i hver seksjon, så tida gir mindre igjen", "Man risikerer å endre riktige svar til gale ved gjennomlesing"],
      explanation: "De fire tersklene er uavhengige, og et poeng over grensen i én seksjon er verdiløst for en annen. «Sensuren vekter de fire seksjonene ulikt, og den sterkeste teller minst» er galt: alle fire teller 25 poeng. «Oppgavene blir vanskeligere utover i hver seksjon…» og «Man risikerer å endre riktige svar til gale ved gjennomlesing» er tilleggsargumenter uten dekning i formatet.",
    },
    {
      question: "Hva er delvis uttelling?",
      options: ["At du får poeng for de radene eller koblingene du har riktig", "At halve poengsummen deles ut til alle som leverer besvarelsen", "At en oppgave gir poeng selv om ingen av svarene er riktige", "At de vanskeligste oppgavene teller mindre enn de lette"],
      explanation: "Delvis uttelling gjør at en matrise du kan tre av fem rader i, er verdt å svare på. «At halve poengsummen deles ut til alle som leverer besvarelsen» og «At en oppgave gir poeng selv om ingen av svarene er riktige» beskriver ordninger som ikke finnes. «At de vanskeligste oppgavene teller mindre enn de lette» forveksler uttelling med vekting.",
    },
    {
      question: "Hva kjennetegner en gyldig begrunnelse for en avkrysning?",
      options: ["Du kan vise til en regel, en definisjon eller en utregning", "Du kjenner igjen formuleringen fra pensum", "Alternativet er det som ligner mest på det du husker", "Ingen av de andre alternativene virker like rimelige"],
      explanation: "En setning som forankrer valget i noe konkret, er forskjellen på innsikt og gjenkjennelse. «Du kjenner igjen formuleringen fra pensum» og «Alternativet er det som ligner mest på det du husker» er nettopp det distraktorene er bygd for å utløse. «Ingen av de andre alternativene virker like rimelige» er en sammenligning, ikke en begrunnelse.",
    },
    {
      question: "Det er 20 minutter igjen. Hvilken uløst oppgave bør du ta først?",
      options: ["En regneoppgave du kan prosedyren på, med entydig fasit", "En koblingsoppgave du er usikker på i sin helhet", "Den oppgaven som er verdt flest poeng, uansett hvor sikker du er", "Den lengste oppgaven, siden den gir mest igjen for tida"],
      explanation: "Rangeringen går etter sikker uttelling per minutt, og en kjent prosedyre med entydig fasit er det sikreste som finnes. «En koblingsoppgave du er usikker på i sin helhet» risikerer trekk på hver kobling. «Den oppgaven som er verdt flest poeng, uansett hvor sikker du er» og «Den lengste oppgaven, siden den gir mest igjen for tida» ser på oppgavens størrelse i stedet for på hvor sikker uttellingen er.",
    },
  ],
  'in1020-5-2': [
    {
      question: "Hva er 110101 i totallssystemet, skrevet i åttetallssystemet?",
      options: ["65", "53", "35", "61"],
      explanation: "Grupper i 3 bit fra høyre: 110 og 101 gir 6 og 5, altså 65. «53» er verdien i titallssystemet. «35» er sifrene i omvendt rekkefølge, en klassisk distraktor. «61» svarer til et annet bitmønster.",
    },
    {
      question: "Hva er 110101 i totallssystemet, skrevet heksadesimalt?",
      options: ["0x35", "0x53", "0x65", "0x1A"],
      explanation: "Grupper i 4 bit fra høyre med ledende nuller: 0011 og 0101 gir 3 og 5. «0x53» bytter om sifrene. «0x65» er oktalsvaret skrevet som om det var heksadesimalt. «0x1A» svarer til 26 i titallssystemet.",
    },
    {
      question: "Byten 10011010 tolkes med fortegn i to-er komplement. Hva er verdien?",
      options: ["−102", "−26", "154", "−154"],
      explanation: "Fortegnsbiten har vekten −128, og resten gir 26, altså −128 + 26 = −102. «−26» er «fortegn og verdi»-tolkningen, den vanligste feilen. «154» er verdien uten fortegn. «−154» setter bare minus foran den usignerte verdien.",
    },
    {
      question: "Maskinkoden 590 tilsvarer hvilken instruksjon?",
      options: ["LDA 90", "STA 90", "ADD 90", "BRA 90"],
      explanation: "Opkode 5 er LDA. «STA 90» tilsvarer 390 — den vanligste forvekslingen, siden LDA og STA er speilbilder. «ADD 90» tilsvarer 190. «BRA 90» tilsvarer 690.",
    },
    {
      question: "En farge er 0x2F68A1. Hva er blåverdien i titallssystemet?",
      options: ["161", "47", "104", "26"],
      explanation: "Blå er den siste byten, 0xA1 = 10 · 16 + 1 = 161. «47» er rødverdien 0x2F. «104» er grønnverdien 0x68. «26» er resultatet av å lese sifrene som om de var i titallssystemet.",
    },
    {
      question: "Hvilket format er tapskomprimert?",
      options: ["JPEG", "PNG", "ZIP", "SVG"],
      explanation: "JPEG forkaster informasjon for å spare plass, og originalen kan ikke gjenskapes eksakt. «PNG», «ZIP» og «SVG» er alle tapsfrie: PNG og ZIP komprimerer uten tap, og SVG er en ren tekstbeskrivelse av former som ikke komprimeres i det hele tatt.",
    },
    {
      question: "Hvilken port har utgangskolonnen 1 0 0 0 for radene 00, 01, 10, 11?",
      options: ["NOR", "NAND", "AND", "XNOR"],
      explanation: "Ett ettall, og det står øverst — utgangen er 1 bare når begge inngangene er 0. «NAND» har 1 1 1 0. «AND» har ett ettall, men nederst. «XNOR» har to ettall, i endene.",
    },
    {
      question: "En NOT på A, deretter AND med B, deretter OR med A. Hva er utgangen F?",
      options: ["A + B", "A · B", "A′ · B", "A′ + B′"],
      explanation: "Uttrykket blir A′·B + A, som ved utvidet absorpsjon forenkles til A + B. «A · B» har feil operator i siste ledd. «A′ · B» stopper etter den andre porten. «A′ + B′» er De Morgan brukt på feil uttrykk.",
    },
    {
      question: "Hvilken av disse påstandene om maskinvare er sann?",
      options: ["ALU-en ligger inne i CPU-en", "Et register er bygd av mange RAM-celler", "Klokkesignalet er lagret i RAM", "En 64-bits ALU krever 65 stykk 1-bits ALU-er"],
      explanation: "ALU-en er en av CPU-ens tre faste deler, sammen med kontrollenheten og registrene. «Et register er bygd av mange RAM-celler», «Klokkesignalet er lagret i RAM» og «En 64-bits ALU krever 65 stykk 1-bits ALU-er» er tre av de fem faste usanne påstandene: registre er egne raske kretser, klokkesignalet genereres, og det kreves 64 enheter, ikke 65.",
    },
    {
      question: "3200 instruksjoner, bom-rate 20 %, bom-kostnad 15 sykler. Hvor mange klokkesykler?",
      options: ["12 160", "9600", "48 000", "3200"],
      explanation: "640 bom à 15 sykler gir 9600, og 2560 treff à 1 sykel gir 2560, til sammen 12 160. «9600» er bommenes bidrag alene. «48 000» regner som om alle var bom. «3200» regner som om alle var treff.",
    },
    {
      question: "Hva er gjennomsnittet per instruksjon i en kjøring på 12 160 sykler og 3200 instruksjoner?",
      options: ["3,8", "3,0", "15,0", "0,26"],
      explanation: "12 160 delt på 3200 gir 3,8, og tallet ligger mellom 1 og bom-kostnaden 15. «3,0» svarer til en total på 9600. «15,0» er bom-kostnaden, altså snittet hvis alt var bom. «0,26» har delt feil vei.",
    },
    {
      question: "Sorter fra høyest til lavest abstraksjonsnivå: transistor, instruksjon, volt, register, porter.",
      options: ["Instruksjon, register, porter, transistor, volt", "Instruksjon, porter, register, transistor, volt", "Volt, transistor, porter, register, instruksjon", "Register, instruksjon, porter, transistor, volt"],
      explanation: "Standardordningen går instruksjon, pipeline, register, porter, transistor, logiske verdier, volt. «Instruksjon, porter, register, transistor, volt» bytter om register og porter — registeret er bygd av porter og ligger over. «Volt, transistor, porter, register, instruksjon» er listen lest baklengs. «Register, instruksjon, porter, transistor, volt» setter register over instruksjon.",
    },
    {
      question: "Ada vil sende en melding bare Birk kan lese. Hvilken nøkkel krypterer hun med?",
      options: ["Birks offentlige nøkkel", "Adas private nøkkel", "Adas offentlige nøkkel", "Birks private nøkkel"],
      explanation: "Bare Birk har den private nøkkelen som låser opp det som er kryptert med hans offentlige. «Adas private nøkkel» er retningen for signering, og ville gjort meldingen lesbar for alle. «Adas offentlige nøkkel» gir en melding bare Ada selv kan åpne. «Birks private nøkkel» er umulig — en privat nøkkel sendes aldri.",
    },
    {
      question: "Hva gir en digital signatur IKKE?",
      options: ["Konfidensialitet", "Integritet", "Autentisitet", "Uavviselighet"],
      explanation: "Signaturen skjuler ingenting; dokumentet er like lesbart etter signering. «Integritet», «Autentisitet» og «Uavviselighet» er nettopp det signaturen gir: hashen avslører endring, den private nøkkelen knytter dokumentet til avsenderen, og avsenderen kan ikke nekte for det.",
    },
    {
      question: "Hvilket sikkerhetsmål ivaretar logging primært?",
      options: ["Sporbarhet", "Uavviselighet", "Konfidensialitet", "Tilgjengelighet"],
      explanation: "Logging gjør det mulig å finne ut i ettertid hvem som gjorde hva. «Uavviselighet» er signaturens mål — å ikke kunne nekte for noe. «Konfidensialitet» er krypteringens. «Tilgjengelighet» ivaretas av sikkerhetskopiering og redundans.",
    },
    {
      question: "Truer et mellommannsangrep bare konfidensialitet?",
      options: ["Nei, det truer både konfidensialitet og integritet", "Ja, angriperen kan bare lese trafikken som passerer", "Nei, det truer bare integritet, siden innholdet endres", "Ja, men bare hvis trafikken er ukryptert i utgangspunktet"],
      explanation: "Angriperen sitter i kommunikasjonsveien og kan både lese og endre. «Ja, angriperen kan bare lese trafikken som passerer» og «Nei, det truer bare integritet, siden innholdet endres» tar med bare halvparten. «Ja, men bare hvis trafikken er ukryptert i utgangspunktet» blander inn en forutsetning som ikke endrer hvilke mål som er truet.",
    },
    {
      question: "Beholder en virksomhet behandlingsansvaret når driften settes bort til en skyleverandør?",
      options: ["Ja, ansvaret følger ikke med driften", "Nei, skyleverandøren overtar ansvaret", "Nei, ansvaret deles likt mellom partene", "Ja, men bare hvis det står i avtalen"],
      explanation: "Den behandlingsansvarlige beholder ansvaret; leverandøren er databehandler på virksomhetens vegne. «Nei, skyleverandøren overtar ansvaret» er den faste distraktoren i sjangeren. «Nei, ansvaret deles likt mellom partene» og «Ja, men bare hvis det står i avtalen» gjør ansvaret til noe som kan forhandles bort, og det kan det ikke.",
    },
    {
      question: "Masken 255.255.255.224 svarer til hvilket prefiks?",
      options: ["/27", "/26", "/28", "/29"],
      explanation: "224 = 11100000 har 3 ettall, og 24 + 3 = 27. «/26» svarer til 192, ett ettall for lite. «/28» svarer til 240, ett for mye. «/29» svarer til 248.",
    },
    {
      question: "Hva er subnettadressen til 192.168.60.100 med prefiks /27?",
      options: ["192.168.60.96", "192.168.60.64", "192.168.60.127", "192.168.60.0"],
      explanation: "AND på fjerde oktett: 01100100 AND 11100000 = 01100000 = 96. «192.168.60.64» er subnettadressen hvis prefikset var /26. «192.168.60.127» er kringkastingsadressen for /26. «192.168.60.0» er svaret hvis man regner med /24.",
    },
    {
      question: "Hvor mange maskiner kan tildeles adresse i et /27-subnett?",
      options: ["30", "32", "62", "14"],
      explanation: "Fem vertsbit gir 32 adresser, minus de to reserverte blir 30. «32» er tallet uten fratrekket. «62» svarer til /26. «14» svarer til /28.",
    },
    {
      question: "640 MB lastes ned over 80 Mbit/s. Hvor lang tid tar det?",
      options: ["64 sekunder", "8 sekunder", "256 sekunder", "32 sekunder"],
      explanation: "640 ganger 8 gir 5120 Mbit, delt på 80 gir 64 sekunder. «8 sekunder» mangler omregningen fra byte til bit. «256 sekunder» er regnet med en opplastingsrate på 20 Mbit/s. «32 sekunder» kombinerer feil rate og manglende omregning.",
    },
    {
      question: "Hvilken transportprotokoll bruker DHCP?",
      options: ["UDP", "TCP", "Både TCP og UDP", "Verken TCP eller UDP"],
      explanation: "Maskinen har ennå ingen adresse og kan ikke sette opp en forbindelse, så forespørselen må gå tilkoblingsløst. «TCP» er den vanligste feilkryssingen. «Både TCP og UDP» gjelder navnetjenesten. «Verken TCP eller UDP» er umulig for en applikasjonsprotokoll.",
    },
    {
      question: "Hvilket problem løser et innholdsnett (CDN)?",
      options: ["At innholdet ligger fysisk langt fra brukeren som ber om det", "At mange enheter i en husstand må dele én offentlig adresse", "At en ny maskin på nettet trenger en adresse automatisk", "At adresserommet i den gamle protokollversjonen tar slutt"],
      explanation: "Kopier nær brukerne gir kortere vei, avlaster opprinnelsestjeneren og sparer kjernenettet. «At mange enheter i en husstand må dele én offentlig adresse» er NAT. «At en ny maskin på nettet trenger en adresse automatisk» er DHCP. «At adresserommet i den gamle protokollversjonen tar slutt» er det IPv6 løser.",
    },
    {
      question: "Hvilken modus kjører vanlige brukerprogrammer i?",
      options: ["Brukermodus", "Kjernemodus", "Vekselvis begge, etter behov", "Ingen — moduser gjelder bare kjernen"],
      explanation: "Brukermodus gir begrenset tilgang, og maskinvaren nås gjennom systemkall. «Kjernemodus» er en av de faste distraktorene. «Vekselvis begge, etter behov» forveksler det midlertidige byttet under et systemkall med normaltilstanden. «Ingen — moduser gjelder bare kjernen» er galt — modus er en tilstand prosessoren er i uansett hva den kjører.",
    },
    {
      question: "Er internett linje- eller pakkesvitsjet?",
      options: ["Pakkesvitsjet", "Linjesvitsjet", "Linjesvitsjet når TCP brukes", "Begge deler samtidig"],
      explanation: "Data deles i pakker som deler linjene, og ingen bane er reservert. «Linjesvitsjet» er den klassiske forvekslingen. «Linjesvitsjet når TCP brukes» slutter feilaktig fra «tilkoblingsorientert» til «dedikert bane». «Begge deler samtidig» beskriver ingen reell mekanisme.",
    },
  ],
  'in1020-5-3': [
    {
      question: "Hva er 0x9C i totallssystemet?",
      options: ["10011100", "11001001", "10011110", "10101100"],
      explanation: "Hvert heksadesimale siffer blir 4 bit: 9 gir 1001 og C gir 1100. «11001001» har nibblene i omvendt rekkefølge. «10011110» svarer til 0x9E. «10101100» svarer til 0xAC.",
    },
    {
      question: "Hva er 0x9C i åttetallssystemet?",
      options: ["234", "156", "9C", "324"],
      explanation: "Bitmønsteret 010 011 100 gir sifrene 2, 3 og 4. «156» er verdien i titallssystemet. «9C» er ikke et gyldig oktalt tall — oktale sifre går fra 0 til 7. «324» har sifrene i feil rekkefølge.",
    },
    {
      question: "01101101 pluss 00111010 i 8 bit. Hva er resultatet?",
      options: ["10100111", "10100110", "01100111", "10110111"],
      explanation: "109 pluss 58 gir 167, som er 10100111. «10100110» mangler en mente i siste bit. «01100111» har mistet den mest signifikante biten. «10110111» har en feil i midten av mønsteret.",
    },
    {
      question: "Hva betyr overflyt ved fortegnstolkning av en byte-addisjon?",
      options: ["At to tall med samme fortegn gir et resultat med motsatt fortegn", "At det går en mente ut av bit 7 og forsvinner", "At resultatet blir større enn 255 uten fortegn", "At begge operandene har fortegnsbiten satt til 1"],
      explanation: "Svaret får ikke plass i den fortegnstolkningen som gjelder, og det avsløres av fortegnsskiftet. «At det går en mente ut av bit 7 og forsvinner» beskriver mente ut, som ofte følger med, men er noe annet. «At resultatet blir større enn 255 uten fortegn» gjelder tolkning uten fortegn. «At begge operandene har fortegnsbiten satt til 1» er en tilstand, ikke en konklusjon.",
    },
    {
      question: "Et LMC-program har STA 03, og celle 03 utføres rett etterpå. Hva betyr det?",
      options: ["Programmet er selvmodifiserende og endrer sin egen instruksjon", "Programmet har en feil, siden man ikke kan skrive til programområdet", "Programmet lagrer akkumulatoren i en datacelle som aldri utføres", "Programmet hopper alltid til celle 03 uansett innhold"],
      explanation: "Instruksjoner er tall i minnet, så en STA mot programområdet endrer hva cellen betyr. «Programmet har en feil, siden man ikke kan skrive til programområdet» er galt — det er fullt lovlig og en fast eksamensvri. «Programmet lagrer akkumulatoren i en datacelle som aldri utføres» motsies av at cellen faktisk utføres. «Programmet hopper alltid til celle 03 uansett innhold» forveksler lagring med hopp.",
    },
    {
      question: "Verdien 607 står i en celle som utføres. Hvilken instruksjon er det?",
      options: ["BRA 07", "BRP 07", "STA 07", "LDA 07"],
      explanation: "Opkode 6 er BRA, og adressen er 07. «BRP 07» er 807. «STA 07» er 307. «LDA 07» er 507.",
    },
    {
      question: "Et program skriver ut absoluttverdien av input. Utskriften er 7. Hvilke input gir det?",
      options: ["Både 7 og −7", "Bare 7", "Bare −7", "7, −7 og 0"],
      explanation: "Absoluttverdi gir samme utskrift for et tall og dets motsatte. «Bare 7» og «Bare −7» tar bare halvparten — den klassiske fella i baklengs sporing. «7, −7 og 0» tar med 0, som ville gitt utskriften 0.",
    },
    {
      question: "Et program utfører 4000 instruksjoner med treffrate 85 %. Hvor mange bom er det?",
      options: ["600", "3400", "850", "400"],
      explanation: "85 % treff betyr 15 % bom, altså 0,15 ganger 4000. «3400» er antall treff, altså ombyttingen. «850» og «400» svarer til andre rater og er satt inn som nære tall.",
    },
    {
      question: "4000 instruksjoner, 15 % bom, bom-kostnad 25 sykler. Hvor mange klokkesykler?",
      options: ["18 400", "15 000", "100 000", "3400"],
      explanation: "600 bom à 25 gir 15 000, og 3400 treff à 1 gir 3400, til sammen 18 400. «15 000» er bommenes bidrag alene. «100 000» regner som om alt var bom. «3400» er treffenes bidrag alene.",
    },
    {
      question: "Gir en halvert bom-rate halvert kjøretid?",
      options: ["Nei, treffene har en fast kostnad som ikke forsvinner", "Ja, siden bommene er det eneste som koster tid", "Nei, kjøretida blir mer enn halvert fordi bommene dominerer", "Ja, men bare når bom-kostnaden er over ti sykler"],
      explanation: "Treffene bidrar med én sykel hver uansett bom-rate, så tida kan aldri halveres av bom-raten alene. «Ja, siden bommene er det eneste som koster tid» overser treffenes bidrag. «Nei, kjøretida blir mer enn halvert fordi bommene dominerer» går for langt i motsatt retning. «Ja, men bare når bom-kostnaden er over ti sykler» innfører en betingelse som ikke finnes.",
    },
    {
      question: "En NAND, deretter NOT, deretter OR med A. Hva er utgangen F?",
      options: ["A", "A + B", "A · B", "A′"],
      explanation: "NAND fulgt av NOT gir A·B, og A·B + A forenkles ved absorpsjon til A. «A + B» er utvidet absorpsjon, som krever A′·B i stedet. «A · B» stopper før den siste porten. «A′» snur svaret.",
    },
    {
      question: "Hvilket uttrykk er lik A?",
      options: ["A · (B + 1)", "A · B", "A + B", "A′ + B"],
      explanation: "B pluss 1 er alltid 1, så uttrykket blir A ganger 1. «A · B», «A + B» og «A′ + B» har alle andre sannhetstabeller enn A alene — de avviker i minst én rad hver.",
    },
    {
      question: "Kan en fulladder brukes som subtraktor?",
      options: ["Ja, ved å invertere det andre tallet og sette mente inn til 1", "Nei, subtraksjon krever en egen krets med annen oppbygning", "Ja, ved å bytte om inngangene og lese menten som fortegn", "Nei, fulladdere kan bare legge sammen positive tall"],
      explanation: "Å invertere og legge til 1 er nettopp hvordan to-er komplement dannes. «Nei, subtraksjon krever en egen krets med annen oppbygning» og «Nei, fulladdere kan bare legge sammen positive tall» er tekniske påstander uten dekning. «Ja, ved å bytte om inngangene og lese menten som fortegn» beskriver en operasjon som ikke gir subtraksjon.",
    },
    {
      question: "Hvilket sikkerhetsmål brytes primært av et løsepengevirus?",
      options: ["Tilgjengelighet", "Konfidensialitet", "Sporbarhet", "Uavviselighet"],
      explanation: "Filene låses slik at eieren ikke kommer til dem — hensikten er å nekte tilgang. «Konfidensialitet» er fristende fordi viruset krypterer, men angriperen har ikke nødvendigvis lest noe. «Sporbarhet» og «Uavviselighet» berøres ikke direkte.",
    },
    {
      question: "Hvilket sikkerhetsmål brytes primært av en forfalsket nettside?",
      options: ["Autentisitet", "Tilgjengelighet", "Sporbarhet", "Integritet"],
      explanation: "Nettstedet utgir seg for å være noen det ikke er, og det er nettopp autentisitet. «Tilgjengelighet» er galt — siden er tilgjengelig. «Sporbarhet» og «Integritet» berøres eventuelt indirekte, men ikke primært.",
    },
    {
      question: "Hvilken nøkkel krypteres den symmetriske nøkkelen med i hybrid kryptering?",
      options: ["Mottakerens offentlige nøkkel", "Avsenderens private nøkkel", "Mottakerens private nøkkel", "Avsenderens offentlige nøkkel"],
      explanation: "Retningsregelen for hemmelighold gjelder også når det som skjules, er en nøkkel. «Avsenderens private nøkkel» er signeringsretningen og ville gjort nøkkelen lesbar for alle. «Mottakerens private nøkkel» og «Avsenderens offentlige nøkkel» er nøkler avsenderen ikke kan bruke til dette.",
    },
    {
      question: "Hvorfor brukes hybrid kryptering i stedet for ren asymmetrisk?",
      options: ["Asymmetrisk kryptering er langt tregere enn symmetrisk", "Asymmetrisk kryptering gir ikke konfidensialitet i det hele tatt", "Asymmetrisk kryptering krever at partene har møtt hverandre", "Asymmetrisk kryptering virker bare på korte tekstfiler"],
      explanation: "Den trege formen brukes bare på en kort nøkkel, mens den raske gjør jobben på innholdet. «Asymmetrisk kryptering gir ikke konfidensialitet i det hele tatt» er direkte galt. «Asymmetrisk kryptering krever at partene har møtt hverandre» beskriver symmetrisk krypterings problem. «Asymmetrisk kryptering virker bare på korte tekstfiler» er oppspinn.",
    },
    {
      question: "Beskytter en hash-verdi sendt sammen med fila mot en angriper?",
      options: ["Nei, angriperen kan endre både fila og hash-verdien", "Ja, siden hash-verdien er umulig å regne ut på nytt", "Ja, så lenge hash-verdien har fast lengde", "Nei, men bare fordi hash-verdier kan kollidere"],
      explanation: "Uten signatur eller delt nøkkel er hashen bare en feilkontroll mot tilfeldige endringer. «Ja, siden hash-verdien er umulig å regne ut på nytt» er galt: hashen er lett å regne ut. «Ja, så lenge hash-verdien har fast lengde» blander inn en irrelevant egenskap. «Nei, men bare fordi hash-verdier kan kollidere» peker på en teoretisk svakhet i stedet for den praktiske.",
    },
    {
      question: "Risiko regnes som sannsynlighet ganget med konsekvens. Hvilken har høyest risiko?",
      options: ["Sannsynlighet 0,05 og konsekvens 200", "Sannsynlighet 0,50 og konsekvens 15", "Sannsynlighet 0,20 og konsekvens 40", "Sannsynlighet 0,10 og konsekvens 90"],
      explanation: "Produktet er 10, mot 7,5, 8 og 9 for de øvrige. «Sannsynlighet 0,50 og konsekvens 15» har høyest sannsynlighet, men lavest risiko — den vanligste fella. «Sannsynlighet 0,20 og konsekvens 40» og «Sannsynlighet 0,10 og konsekvens 90» ligger imellom. Regn ut alle produktene før du rangerer.",
    },
    {
      question: "Hva er nettmasken til prefikset /26?",
      options: ["255.255.255.192", "255.255.255.224", "255.255.255.128", "255.255.255.240"],
      explanation: "To ettall i siste oktett gir 11000000 = 192. «255.255.255.224» er /27, «255.255.255.128» er /25 og «255.255.255.240» er /28 — alle nabomasker.",
    },
    {
      question: "Hva er kringkastingsadressen til 10.30.12.70 med prefiks /26?",
      options: ["10.30.12.127", "10.30.12.128", "10.30.12.255", "10.30.12.63"],
      explanation: "OR med invertert maske gir 01111111 = 127. «10.30.12.128» er én for mye og tilhører neste subnett. «10.30.12.255» gjelder bare /24. «10.30.12.63» er kringkastingsadressen til det forrige subnettet.",
    },
    {
      question: "Et kontor trenger adresser til 50 maskiner. Hvilket prefiks er det minste som holder?",
      options: ["/26", "/27", "/25", "/24"],
      explanation: "/26 gir 62 tildelbare adresser, mens /27 bare gir 30. «/27» holder ikke. «/25» gir 126 og «/24» gir 254 — begge langt mer enn nødvendig. Merk at et større prefikstall gir færre adresser.",
    },
    {
      question: "1440 MB lastes ned over 120 Mbit/s. Hvor lang tid tar det?",
      options: ["96 sekunder", "12 sekunder", "768 sekunder", "120 sekunder"],
      explanation: "1440 ganger 8 gir 11 520 Mbit, delt på 120 gir 96 sekunder. «12 sekunder» mangler omregningen fra byte til bit. «768 sekunder» har delt på megabyte-raten i stedet. «120 sekunder» er raten oppgitt som om den var en tid.",
    },
    {
      question: "En fil på 275 MB skal overføres på 40 sekunder. Hvilken rate kreves?",
      options: ["55 Mbit/s", "6,875 Mbit/s", "2200 Mbit/s", "440 Mbit/s"],
      explanation: "275 ganger 8 gir 2200 Mbit, delt på 40 gir 55 Mbit/s. «6,875 Mbit/s» mangler omregningen. «2200 Mbit/s» er mellomresultatet uten divisjonen. «440 Mbit/s» har delt på feil tall.",
    },
    {
      question: "Hvilken påstand om UDP er usann?",
      options: ["UDP sender tapte pakker på nytt", "UDP har en sjekksum", "UDP setter ikke opp noen forbindelse først", "UDP gir ingen rekkefølgegaranti"],
      explanation: "Omsending er en TCP-egenskap; UDP forkaster en skadet pakke uten å be om en ny. «UDP har en sjekksum», «UDP setter ikke opp noen forbindelse først» og «UDP gir ingen rekkefølgegaranti» er alle riktige beskrivelser av UDP — sjekksum finnes, oppsett mangler, og rekkefølgen er ikke garantert.",
    },
  ],
  'in1020-5-4': [
    {
      question: "Hva skriver OTC ut i LMC?",
      options: ["Akkumulatorens verdi tolket som et ASCII-tegn", "Akkumulatorens verdi som et tall", "Adressen til cellen akkumulatoren ble lastet fra", "Innholdet i alle minneceller som tekst"],
      explanation: "OTC tolker verdien som en tegnkode, mens OUT skriver den som et tall. «Akkumulatorens verdi som et tall» beskriver OUT. «Adressen til cellen akkumulatoren ble lastet fra» og «Innholdet i alle minneceller som tekst» beskriver operasjoner som ikke finnes i instruksjonssettet.",
    },
    {
      question: "Et program laster 66, 73 og 84 og skriver hver av dem med OTC. Hva blir utskriften?",
      options: ["BIT", "66 73 84", "ABC", "HIS"],
      explanation: "ASCII-kodene 66, 73 og 84 er B, I og T. «66 73 84» er det OUT ville gitt. «ABC» svarer til 65, 66, 67. «HIS» svarer til 72, 73, 83 — nabotall i tabellen.",
    },
    {
      question: "Hvor mange tegn dekker ASCII?",
      options: ["128", "256", "64", "1024"],
      explanation: "ASCII er en 7-bits koding, og 2 opphøyd i 7 er 128. «256» svarer til 8 bit. «64» svarer til 6 bit. «1024» svarer til 10 bit.",
    },
    {
      question: "Dekker ASCII de norske bokstavene æ, ø og å?",
      options: ["Nei, 128 tegn rekker ikke til nasjonale bokstaver", "Ja, de ligger i den øvre halvdelen av tabellen", "Ja, men bare i store bokstaver", "Nei, fordi ASCII bare dekker sifre og tegnsetting"],
      explanation: "Med 128 plasser er det rom for det engelske alfabetet, sifre og tegnsetting — ikke mer. «Ja, de ligger i den øvre halvdelen av tabellen» og «Ja, men bare i store bokstaver» forutsetter plass som ikke finnes. «Nei, fordi ASCII bare dekker sifre og tegnsetting» har riktig konklusjon, men gal begrunnelse: ASCII dekker også bokstaver.",
    },
    {
      question: "Hva kjennetegner UTF-8?",
      options: ["Variabel lengde, og bakoverkompatibel med ASCII for de første 128 tegnene", "Fast lengde på fire byte per tegn, uansett hvilket tegn det er", "Samme koding som ASCII, bare med en rekke nye tegn lagt til på slutten av tabellen", "En koding som bare brukes til nettsider, ikke til vanlige tekstfiler"],
      explanation: "Noen tegn tar én byte, andre flere, og de 128 første er identiske med ASCII. «Fast lengde på fire byte per tegn, uansett hvilket tegn det er» beskriver en annen koding. «Samme koding som ASCII…» overser at lengden varierer. «En koding som bare brukes til nettsider, ikke til vanlige tekstfiler» er oppspinn.",
    },
    {
      question: "Hvilket format er tapskomprimert?",
      options: ["MP3", "PNG", "ZIP", "SVG"],
      explanation: "MP3 forkaster lyd som antas å være lite hørbar. «PNG», «ZIP» og «SVG» er alle tapsfrie: PNG og ZIP komprimerer uten tap, og SVG er en ren tekstbeskrivelse av former som ikke komprimeres i det hele tatt.",
    },
    {
      question: "Har siffertegnet 7 samme verdi i minnet som tallet 7?",
      options: ["Nei, tegnet lagres som ASCII-koden 55", "Ja, begge lagres som verdien 7", "Nei, tegnet lagres som verdien 7 og tallet som 55", "Ja, så lenge kodingen er UTF-8"],
      explanation: "Avstanden er 48 — fra verdien 0 til siffertegnet 0. «Ja, begge lagres som verdien 7» overser skillet helt. «Nei, tegnet lagres som verdien 7 og tallet som 55» snur det. «Ja, så lenge kodingen er UTF-8» gjør skillet avhengig av koding, noe det ikke er.",
    },
    {
      question: "Hvilken av disse påstandene om maskinvare er sann?",
      options: ["Utviklingen gir flere og mindre transistorer per brikke", "Klokkesignalet ligger lagret i RAM sammen med programkoden", "Et register er bygd av mange RAM-celler i CPU-en", "ALU-en ligger utenfor CPU-en, ved siden av minnet"],
      explanation: "Dette er den faste distraktoren snudd riktig vei — les alltid raden ord for ord. «Klokkesignalet ligger lagret i RAM sammen med programkoden», «Et register er bygd av mange RAM-celler i CPU-en» og «ALU-en ligger utenfor CPU-en, ved siden av minnet» er tre av de fem faste usanne påstandene: klokkesignalet genereres, registre er egne raske kretser, og ALU-en er en av CPU-ens faste deler.",
    },
    {
      question: "Hvor mange 1-bits ALU-er kreves for en 64-bits ALU?",
      options: ["64", "65", "32", "128"],
      explanation: "Én enhet per bit, altså 64. «65» er den faste distraktoren, som bygger på en tenkt ekstra enhet for menten. «32» og «128» er halvparten og det dobbelte.",
    },
    {
      question: "Kan enhver logisk funksjon realiseres med kun NAND-porter?",
      options: ["Ja, NAND er funksjonelt komplett", "Nei, man trenger minst NOT i tillegg", "Nei, bare kombinasjoner av AND og OR kan lages", "Ja, men bare funksjoner med to innganger"],
      explanation: "NAND med sammenkoblede innganger gir NOT, og derfra kan AND og OR bygges. «Nei, man trenger minst NOT i tillegg» overser nettopp den konstruksjonen. «Nei, bare kombinasjoner av AND og OR kan lages» og «Ja, men bare funksjoner med to innganger» innfører begrensninger som ikke finnes — det samme gjelder for øvrig NOR.",
    },
    {
      question: "Kan en port ha to utganger?",
      options: ["Nei, en port har nøyaktig én utgang som kan grene seg", "Ja, dersom den mater to eller flere andre porter samtidig", "Ja, men bare NAND og NOR kan ha det", "Nei, og utgangen kan heller ikke grene seg"],
      explanation: "Forgrening av én utgang er noe annet enn å ha flere utganger. «Ja, dersom den mater to eller flere andre porter samtidig» forveksler nettopp de to. «Ja, men bare NAND og NOR kan ha det» er oppspinn. «Nei, og utgangen kan heller ikke grene seg» går for langt — forgrening er helt vanlig.",
    },
    {
      question: "Hvilket nivå ligger rett over transistornivået i abstraksjonsordningen?",
      options: ["Logiske porter og invertere", "Nivået for de logiske verdiene", "Registernivået i CPU-en", "Voltnivået i kretsen"],
      explanation: "Ordningen er instruksjon, pipeline, register, porter, transistor, logiske verdier, volt — porter ligger rett over transistor. «Nivået for de logiske verdiene» og «Voltnivået i kretsen» ligger under transistornivået. «Registernivået i CPU-en» ligger to nivåer over.",
    },
    {
      question: "Hvilken tilgangstid har hovedminnet typisk?",
      options: ["Titalls til hundrevis av klokkesykler", "1 klokkesykel, som for registeret", "Noen få klokkesykler", "Millioner av klokkesykler, som for disken"],
      explanation: "Et oppslag må ut på bussene og inn i minnebrikken. «1 klokkesykel, som for registeret» gjelder registeret. «Noen få klokkesykler» gjelder mellomlageret. «Millioner av klokkesykler, som for disken» gjelder disken.",
    },
    {
      question: "Hvilket sikkerhetsmål brytes primært av en tastelogger?",
      options: ["Konfidensialitet", "Tilgjengelighet til systemet", "Sporbarhet i ettertid", "Uavviselighet"],
      explanation: "Det som skrives, fanges opp av noen som ikke skal ha det. «Tilgjengelighet til systemet» gjelder tjenestenektangrep. «Sporbarhet i ettertid» gjelder sletting av logger. «Uavviselighet» er det signatur ivaretar.",
    },
    {
      question: "Hva beviser et gyldig digitalt sertifikat?",
      options: ["At den offentlige nøkkelen tilhører den oppgitte identiteten", "At nettstedet er hederlig og ikke driver svindel", "At all trafikk til og fra nettstedet er anonymisert", "At innehaveren har fått innholdet på nettstedet godkjent av utstederen"],
      explanation: "Sertifikatet svarer på «hvem», ikke på «er dette trygt» — en svindler kan ha et gyldig sertifikat for sitt eget domene. «At nettstedet er hederlig og ikke driver svindel» er den mest utbredte misforståelsen. «At all trafikk til og fra nettstedet er anonymisert» og «At innehaveren har fått innholdet på nettstedet godkjent av utstederen» beskriver egenskaper sertifikatet ikke har.",
    },
    {
      question: "Kan et digitalt sertifikat trekkes tilbake før utløpsdatoen?",
      options: ["Ja, for eksempel hvis den private nøkkelen er kommet på avveie", "Nei, et utstedt sertifikat gjelder til utløpsdatoen uansett hva som skjer", "Ja, men bare av innehaveren selv", "Nei, men det kan erstattes av et nytt i tillegg"],
      explanation: "Tilbaketrekking er nettopp mekanismen som håndterer kompromitterte nøkler. «Nei, et utstedt sertifikat gjelder til utløpsdatoen uansett…» ville gjort en lekket nøkkel farlig helt til utløp. «Ja, men bare av innehaveren selv» og «Nei, men det kan erstattes av et nytt i tillegg» begrenser eller omgår mekanismen uten grunnlag.",
    },
    {
      question: "Kreves samtykke alltid for å behandle personopplysninger?",
      options: ["Nei, samtykke er ett av flere lovlige grunnlag", "Ja, uten samtykke er all behandling ulovlig", "Nei, samtykke kreves bare av offentlige virksomheter", "Ja, med mindre opplysningene er anonymiserte"],
      explanation: "Behandling kan også være nødvendig for å oppfylle en avtale eller en rettslig plikt. «Ja, uten samtykke er all behandling ulovlig» er den faste distraktoren. «Nei, samtykke kreves bare av offentlige virksomheter» innfører et skille som ikke finnes. «Ja, med mindre opplysningene er anonymiserte» blander inn anonymisering, som gjør reglene uaktuelle på et annet grunnlag.",
    },
    {
      question: "Hva skiller en orm fra et virus?",
      options: ["Ormen sprer seg selv over nettet, viruset fester seg til en vertsfil", "Viruset sprer seg selv over nettet, ormen fester seg til en vertsfil", "Ormen sletter filer, mens viruset bare kopierer dem", "Ormen rammer bare tjenermaskiner, viruset bare klienter"],
      explanation: "Spredningsmåten er hele skillet: ormen trenger ingen hjelp, viruset trenger at noen kjører fila. «Viruset sprer seg selv over nettet, ormen fester seg til en vertsfil» bytter om de to. «Ormen sletter filer, mens viruset bare kopierer dem» og «Ormen rammer bare tjenermaskiner, viruset bare klienter» innfører skiller basert på skade og målgruppe, som ikke definerer typene.",
    },
    {
      question: "Hva kjennetegner en logisk bombe?",
      options: ["Den utløses når en bestemt betingelse inntreffer", "Den skjuler seg dypt i systemet for å unngå oppdagelse", "Den gir vedvarende skjult tilgang inn i systemet", "Den er skjult inne i noe som ser nyttig ut"],
      explanation: "Utløseren er det definerende: en dato, en hendelse, en endring i et system. «Den skjuler seg dypt i systemet for å unngå oppdagelse» beskriver et rootkit. «Den gir vedvarende skjult tilgang inn i systemet» beskriver en bakdør. «Den er skjult inne i noe som ser nyttig ut» beskriver en trojaner.",
    },
    {
      question: "Hvilket lag hører en ruter til?",
      options: ["Nettverkslaget", "Lenkelaget", "Transportlaget", "Applikasjonslaget"],
      explanation: "Ruteren leser mottaker-IP-en og velger vei, og det er nettverkslagets definerende oppgave. «Lenkelaget» er fristende fordi ruteren står mellom kablene, men lenkelaget håndterer bare én strekning. «Transportlaget» og «Applikasjonslaget» ligger over det ruteren pakker opp til.",
    },
    {
      question: "Hvilket lag hører DNS til?",
      options: ["Applikasjonslaget", "Transportlaget, siden den bruker TCP og UDP", "Nettverkslaget", "Lenkelaget"],
      explanation: "DNS er en tjeneste for brukeren, selv om den bruker TCP og UDP under seg. «Transportlaget, siden den bruker TCP og UDP» forveksler å bruke et lag med å være i det. «Nettverkslaget» og «Lenkelaget» hører til adressering og lokal overføring.",
    },
    {
      question: "Gjør IPv6 overføringen raskere enn IPv4?",
      options: ["Nei, farten bestemmes av linjene, ikke av adressens lengde", "Ja, fordi lengre adresser gir mer effektiv ruting i kjernenettet", "Ja, men bare når begge parter støtter den nye versjonen", "Nei, den er tregere fordi adressene tar mer plass"],
      explanation: "Adressefeltets lengde påvirker ikke hvor fort bitene beveger seg. «Ja, fordi lengre adresser gir mer effektiv ruting i kjernenettet» og «Ja, men bare når begge parter støtter den nye versjonen» er varianter av den mest brukte distraktoren i seksjonen. «Nei, den er tregere fordi adressene tar mer plass» overdriver en marginal effekt til en påstand som ikke holder.",
    },
    {
      question: "Hva skjer med kapasiteten i et likemannsnett når flere deltakere kobler seg til?",
      options: ["Den vokser, siden hver ny deltaker også kan levere", "Den synker, siden flere deler den samme kapasiteten", "Den er uendret, siden en sentral tjener leverer alt", "Den vokser bare hvis en sentral tjener koordinerer"],
      explanation: "Hver ny deltaker er også en ny leverandør, og det er modellens viktigste styrke. «Den synker, siden flere deler den samme kapasiteten» beskriver klient-tjener. «Den er uendret, siden en sentral tjener leverer alt» beskriver også klient-tjener. «Den vokser bare hvis en sentral tjener koordinerer» gjør koordinering til en forutsetning den ikke er.",
    },
    {
      question: "Betyr en TCP-forbindelse at det er satt av en dedikert bane gjennom nettet?",
      options: ["Nei, forbindelsen er en bokføring i de to endene", "Ja, TCP reserverer kapasitet fra ende til ende", "Ja, men bare på den første og siste strekningen", "Nei, TCP setter ikke opp noen forbindelse i det hele tatt"],
      explanation: "Pakkene deler linjene med alle andres, og forbindelsen beskriver hva de to endene er enige om. «Ja, TCP reserverer kapasitet fra ende til ende» og «Ja, men bare på den første og siste strekningen» gir TCP en evne den ikke har. «Nei, TCP setter ikke opp noen forbindelse i det hele tatt» går for langt — TCP er tilkoblingsorientert.",
    },
    {
      question: "Krever samtidighet på en maskin at prosessoren har flere kjerner?",
      options: ["Nei, operativsystemet veksler mellom prosessene så raskt at det ser samtidig ut", "Ja, uten flere kjerner kan bare ett eneste program være i gang av gangen på maskinen", "Ja, men bare når programmene bruker nettverket samtidig", "Nei, men da må hvert program få tildelt sin egen driver"],
      explanation: "Vekslingen alene gir inntrykk av samtidighet, også på én kjerne. «Ja, uten flere kjerner kan bare ett eneste program være i…» og «Ja, men bare når programmene bruker nettverket samtidig» gjør flere kjerner til et krav de ikke er. «Nei, men da må hvert program få tildelt sin egen driver» har riktig konklusjon, men gal begrunnelse — drivere hører til maskinvareenheter, ikke til programmer.",
    },
  ],
};

export default quizData_in1020;
