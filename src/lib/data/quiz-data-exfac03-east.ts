import type { QuizQuestion } from './quiz-data';

const quizData_exfac03east: Record<string, QuizQuestion[]> = {
  'exfac03-east-0-1': [
    {
      question: "Hvor mange spørsmål består trespørsmålsformen av, og hvordan vektes de?",
      options: ["Tre spørsmål, alle obligatoriske, og de tre svarene teller likt ved utregning av karakter", "Tre spørsmål, der det første teller mest fordi det er satt opp som hovedoppgave i settet", "Tre spørsmål, der studenten selv velger hvilke to av dem hun ønsker å bli vurdert på", "Fire spørsmål, der det svakeste svaret strykes før karakteren settes for hele eksamen"],
      explanation: "Riktig svar er at alle tre spørsmålene skal besvares og at de teller likt — belagt i 5 av 5 terminer der informasjonsseksjonen er bevart. Alternativet om at det første teller mest, tester fella med å prioritere det spørsmålet man kan best; likevekten er nettopp grunnen til at det ikke lønner seg. At studenten kan velge bort ett spørsmål, står ingen steder i materialet.",
    },
    {
      question: "Hva er ordgrensen per svar i trespørsmålsformen?",
      options: ["Minst 400 og maks 800 ord om hvert av de tre spørsmålene", "Minst 800 og maks 1 200 ord per svar", "Maks 400 ord om hvert spørsmål, uten noe uttrykkelig krav om minstelengde", "Ingen ordgrense oppgitt, bare en anbefaling om å skrive omtrent én side per svar"],
      explanation: "Riktig svar er 400 til 800 ord per svar, ordrett belagt i 5 av 5 terminer der informasjonsseksjonen er bevart. Grensen har både et gulv og et tak, og alternativet uten minstelengde tester at mange bare husker taket. Rammen for hele eksamen blir dermed 1 200 til 2 400 ord.",
    },
    {
      question: "Hvor mange eksamensterminer er boka kalibrert mot?",
      options: ["8 terminer, fra våren 2021 til høsten 2025", "10 terminer, ett for hver av filene som ligger i emnemappa ved universitetet", "21 terminer, ett per bevart spørsmål", "5 terminer, altså de terminene der informasjonsseksjonen med ordgrense er bevart"],
      explanation: "Riktig svar er 8 terminer over fem kalenderår. Tallet 10 er et filtall og aldri et terminantall, og tallet 21 er antall spørsmål i de sju terminene med bevart oppgavetekst. Å blande disse tre nevnerne er den vanligste tallfeilen på dette stoffet.",
    },
    {
      question: "Hvor mange sensorveiledninger finnes i materialet, og hvilke terminer dekker de?",
      options: ["4 sensorveiledninger, som dekker V2021, V2024, V2025 og H2025", "6 sensorveiledninger, altså én for hvert av oppgavesettene som ligger i emnemappa", "8 sensorveiledninger, én per termin", "4 sensorveiledninger, som dekker de fire første terminene i perioden 2021 til 2025"],
      explanation: "Riktig svar er 4 sensorveiledninger for V2021, V2024, V2025 og H2025. Alternativet om de fire første terminene tester en nærliggende, men gal antakelse: veiledningene er ikke sammenhengende i tid, og fire av de åtte terminene har oppgavesett uten veiledning. Ingen påstand om sensorkrav kan bygge på de fire terminene uten veiledning.",
    },
    {
      question: "Hvor mange løsningsforslag, fasiter og modellbesvarelser fra universitetet inneholder materialet?",
      options: ["Null av hver — det finnes ingen slike dokumenter for dette emnet i arkivet", "Fire, én per sensorveiledning", "Seks, én per oppgavesett", "To, knyttet til de engelske tekstene"],
      explanation: "Riktig svar er null av hver. Alt av modellbesvarelser, momentlister og prøvefasiter i boka er derfor skrevet av oss, ut fra oppgavetekstene og veiledningenes egne krav. Det som finnes i arkivet, er oppgavesett og sensorveiledninger — og en veiledning sier hva sensor forventer, ikke hva et svar skal se ut som.",
    },
    {
      question: "Hva er den lovlige nevneren når boka oppgir hvor ofte et tema har vært prøvd?",
      options: ["21 spørsmål, fordelt på de 7 terminene med bevart oppgavetekst", "8 terminer, altså hele kildegrunnlaget som boka er kalibrert mot i sin helhet", "10 filer, altså hele emnemappa", "6 oppgavesett, altså de settene som ligger som egne filer i emnemappa ved universitetet"],
      explanation: "Riktig svar er 21 spørsmål fordelt på 7 terminer. Nevneren 8 terminer brukes bare om kildegrunnlaget som sådan og aldri om et tema, fordi den åttende terminen ble vurdert med semesteroppgave og ikke har gitte spørsmål å telle. Enheten skal alltid skrives ut, slik at leseren vet om det telles spørsmål eller terminer.",
    },
    {
      question: "Hvilken temaklynge står i flest av de 21 spørsmålene?",
      options: ["Kjønn, familie og ulikhet, med 5 av 21 spørsmål i 5 av 7 terminer", "Modernisering og statens rolle, med 5 av 21 spørsmål fordelt over hele perioden", "Øst-Asia som region, med 5 av 21 spørsmål og med to ordrett gjentatte formuleringer", "Imperialisme og kolonitid, med 4 av 21 spørsmål og en detaljert momentliste i materialet"],
      explanation: "Riktig svar er kjønn, familie og ulikhet med 5 av 21 spørsmål. Både regionklyngen og moderniseringsklyngen står i 4 av 21 spørsmål hver, og alternativene som oppgir 5 for dem, tester nettopp forvekslingen av den største klyngen med de nest største. De tre tyngste klyngene dekker til sammen 13 av 21 spørsmål.",
    },
    {
      question: "Hva sier terminmønsteret i materialet om når emnet eksamineres?",
      options: ["7 av 8 terminer er vårterminer, men vi vet ikke om det var høsteksamen før 2025", "Emnet eksamineres bare om våren, siden ingen høsttermin før 2025 finnes i arkivet", "Emnet eksamineres like ofte vår og høst, med samme vurderingsform i begge semestre", "Emnet eksamineres bare i de årene der det også finnes en tilhørende sensorveiledning"],
      explanation: "Riktig svar er at 7 av 8 terminer er vårterminer, og at fravær i arkivet ikke er belegg for fravær i virkeligheten. Alternativet om at emnet bare går om våren, tester nettopp den slutningen: den er fristende og den er ikke dekket. Boka sier hva den har grunnlag i, og ber leseren sjekke sin egen semesterside.",
    },
    {
      question: "Hva vet vi om hvilket språk studenten kan skrive besvarelsen på?",
      options: ["Ingenting — det står ingen steder i materialet, og leseren må sjekke semestersiden", "At studenten fritt kan velge mellom norsk og engelsk, siden veiledningene finnes på begge", "At besvarelsen må skrives på norsk bokmål, siden alle oppgavesettene er på norsk bokmål", "At besvarelsen må skrives på engelsk, siden to av veiledningene er skrevet på engelsk"],
      explanation: "Riktig svar er at materialet ikke sier noe om besvarelsesspråk. At settet gis parallelt på begge språk, er en rimelig slutning fra at veiledningene finnes på engelsk, norsk og tospråklig — men en slutning er ikke en opplysning. De to alternativene om et påbudt språk tester at et belegg om oppgaveteksten ikke er et belegg om besvarelsen.",
    },
    {
      question: "Hvor mange av de 21 spørsmålene gir studenten et eksplisitt valg av land eller fokus?",
      options: ["7 av 21 spørsmål, altså omtrent en tredel av spørsmålsmassen i materialet", "4 av 21 spørsmål, som er antallet oppgaver i valgoppgavesjangeren alene", "2 av 21 spørsmål, som er antallet oppgaver i argumentasjonssjangeren alene", "13 av 21 spørsmål, altså de tre tyngste klyngene"],
      explanation: "Riktig svar er 7 av 21 spørsmål. Alternativet med 4 av 21 spørsmål er den nære fella: det er antallet rene valgoppgaver, mens valgfriheten også opptrer inne i spørsmål som er talt i andre sjangre. Tallet 13 av 21 spørsmål gjelder noe helt annet, nemlig de tre tyngste temaklyngene til sammen.",
    },
    {
      question: "Hva sier landtellingen om Taiwan?",
      options: ["Taiwan står i 2 av 21 spørsmål, men begge er fra samme termin, altså 1 av 7 terminer", "Taiwan står i 2 av 21 spørsmål, fordelt på to ulike terminer i perioden 2021 til 2025", "Taiwan står i 5 av 21 spørsmål og er dermed like hyppig navngitt som Sør-Korea (ROK)", "Taiwan er ikke navngitt i noen av de 21 spørsmålene og har derfor ingen egen telling"],
      explanation: "Riktig svar er at begge spørsmålene kommer fra samme termin, slik at Taiwan er 2 av 21 spørsmål og 1 av 7 terminer. Alternativet om to ulike terminer er nettopp den lesningen tallet inviterer til, og det er derfor enheten alltid skal skrives ut. Uten enheten undervurderer leseren hvor smalt grunnlaget er.",
    },
    {
      question: "Hvorfor er karakterskalaen fra A til F bare delvis dekket av materialet?",
      options: ["Fordi den eneste fullstendige skalaen står i veiledningen for semesteroppgaveformen", "Fordi skalaen bare gjelder de terminene der oppgaveteksten er bevart på begge språk", "Fordi skalaen ble innført i løpet av perioden og derfor mangler for de tidligste årene", "Fordi de fire sensorveiledningene beskriver ulike skalaer som ikke lar seg forene"],
      explanation: "Riktig svar er at den fullstendige skalaen står i veiledningen for semesteroppgaveformen, altså H2025. De tre vår-veiledningene har ingen beskrivelse fra A til F, og boka kan derfor ikke presentere skalaen som gjeldende for trespørsmålsformen. Det eneste konkrete karakterkriteriet for den formen er bestått-gulvet på minst tre momenter i V2021-veiledningen.",
    },
  ],
  'exfac03-east-0-2': [
    {
      question: "Hvor mange momenter krever V2021-veiledningen for at et svar skal bestå?",
      options: ["Minst tre momenter på hvert av de tre spørsmålene", "Minst fem momenter per spørsmål", "Minst ti momenter, siden bredden i pensum skal dekkes på hvert enkelt spørsmål", "Minst ett moment fra hver side, uten noe uttrykkelig krav til samlet antall"],
      explanation: "Riktig svar er minst tre momenter per spørsmål, og kravet står i V2021-veiledningen for alle tre spørsmålene. Alternativet med fem er taket og ikke gulvet, og alternativet om ett fra hver side er et tilleggskrav på endringsspørsmålet — ikke hele kravet. Formuleringen i boka er alltid at V2021-veiledningen krever tre, aldri at eksamen som sådan gjør det.",
    },
    {
      question: "Hva består et ferdig utviklet moment av?",
      options: ["En påstand, en utdyping som sier hvorfor påstanden holder, og ett konkret eksempel", "En påstand og to eksempler, slik at poenget belegges fra mer enn én kant samtidig", "Et stikkord med en henvisning til hvor i pensum poenget står omtalt", "En påstand og en motpåstand, slik at momentet er balansert i seg selv"],
      explanation: "Riktig svar er påstand, utdyping og ett konkret eksempel. Alternativet med to eksempler tester ordbudsjettet: det andre eksempelet på samme poeng er nummer to på kuttelisten, fordi det bare viser at du har to. Alternativet med motpåstand blander sammen momentets indre bygning med kravet om at svaret som helhet skal være tosidig.",
    },
    {
      question: "Hvor mange ord koster et ferdig utviklet moment omtrent?",
      options: ["Mellom 100 og 180 ord, når påstand, utdyping og ett eksempel er med", "Mellom 40 og 60 ord per moment", "Mellom 250 og 300 ord, siden et moment skal utvikles grundig med flere eksempler", "Det finnes ikke noe anslag, siden lengden avhenger helt av hvilket tema det gjelder"],
      explanation: "Riktig svar er mellom 100 og 180 ord. Det følger av regnestykket: taket på 800 ord minus omtrent 120 ord til åpning og veiing gir rundt 680 ord fordelt på tre til fem momenter. Anslaget er det som gjør ordgrensen til et planleggingsverktøy i stedet for en trussel.",
    },
    {
      question: "Hva er den riktige måten å møte et svar som ligger 200 ord over taket?",
      options: ["Kutte et helt moment, siden problemet er antallet momenter og ikke setningenes lengde", "Barbere setningene i hele svaret, slik at alle momentene beholdes i kortere form", "Fjerne åpningssetningen, siden den ikke inneholder noe eget faglig innhold", "Fjerne veiingen til slutt, siden den gjentar det som allerede står i momentene"],
      explanation: "Riktig svar er å kutte et helt moment. Barbering av setninger sparer typisk noen titalls ord og gjør teksten dårligere, mens ett moment er verdt over hundre. Åpningen og veiingen er derimot billige og gir mye, og de to alternativene som fjerner dem, tester nettopp fella med å kutte det som gir mest per ord.",
    },
    {
      question: "Hva er den riktige måten å møte et svar som stopper på 340 ord?",
      options: ["Legge til ett moment til, eller ett eksempel på et moment som mangler et", "Utvide formuleringene med flere adjektiver og forbehold til lengden er nådd", "Gjenta åpningen i avslutningen, slik at svaret får en tydeligere ramme", "Levere svaret som det er, siden kvaliteten er viktigere enn den nedre grensen"],
      explanation: "Riktig svar er å legge til ett moment eller ett eksempel. Adjektiver og forbehold står på kuttelisten og ikke på tilleggslisten, og å gjenta åpningen gir null nytt. Grensen har et gulv, og et svar under 400 ord er utenfor rammen oppgaven ga, uansett hvor presist det er.",
    },
    {
      question: "Hva sier bokas første mantra?",
      options: ["Tre momenter utviklet slår ti nevnt", "Ti nevnt slår tre utviklet", "Ti momenter nevnt gir bredden sensor etterspør i et oversiktsfag", "Tre momenter er nok bare når spørsmålet ikke er tosidig"],
      explanation: "Riktig svar er at tre momenter utviklet slår ti nevnt. Hjemmelen er bestått-gulvet i V2021-veiledningen sammenholdt med V2024-veiledningens krav om at studenten må forklare litt og gi eksempler for å vise forståelse. Et stikkord viser ingen forståelse, uansett hvor mange av dem det er.",
    },
    {
      question: "Hva sier bokas andre mantra?",
      options: ["Spørsmålet har to sider fordi veiledningen sier det", "Spørsmålet har to sider fordi drøfting alltid bør være balansert i formen", "Spørsmålet har to sider bare i argumentasjon", "Spørsmålet har to sider fordi sensor ikke skal kunne se hva du selv mener"],
      explanation: "Riktig svar er at spørsmålet har to sider fordi veiledningen sier det. Kravet om både endringer og kontinuiteter står uttrykkelig i V2021-veiledningen, og argumentasjonsspørsmålene ber selv om begge retninger. Tosidigheten er altså en betingelse i oppgaven og ikke en stilistisk preferanse — og et svar skal fortsatt lande.",
    },
    {
      question: "Hvilke fire trinn har svararkitekturen?",
      options: ["Åpning som leser spørsmålet, tre til fem momenter, begge sider der spørsmålet er tosidig, og en veiing", "Innledning med bakgrunn, hoveddel med momenter, drøfting av motargumenter, og en oppsummering", "Definisjon av begrepene, gjennomgang av pensum, egne refleksjoner, og en konklusjon", "Problemstilling, metode, analyse og konklusjon, slik en akademisk oppgave normalt bygges"],
      explanation: "Riktig svar er åpning, momenter, begge sider der det trengs, og veiing. Alternativet med innledning og oppsummering er den vanligste skolestilmalen, og den taper på to punkter: bakgrunnsavsnittet gir null uttelling, og en oppsummering veier ikke. Alternativet med metode og analyse hører til en helt annen oppgavetype.",
    },
    {
      question: "Hva skiller en veiing fra en oppsummering?",
      options: ["Veiingen sier hvilket moment som er tyngst og hvorfor, mens oppsummeringen gjentar dem", "Veiingen er kortere enn oppsummeringen og bruker derfor færre ord av det samlede ordbudsjettet", "Veiingen står først i svaret, mens oppsummeringen står helt til slutt i teksten", "Veiingen nevner motargumenter, mens oppsummeringen bare nevner hovedargumentene"],
      explanation: "Riktig svar er at veiingen rangerer og begrunner. Å gjenta momentene i rekkefølge er en oppsummering, og den koster like mange ord som en veiing ville gjort uten å gi noe nytt. En veiing kan godt inneholde et forbehold, så lenge forbeholdet sier noe.",
    },
    {
      question: "Hva er den viktigste jobben åpningssetningen gjør?",
      options: ["Den sier hvordan du har lest spørsmålet, slik at svaret blir mulig å bedømme", "Den gir bakgrunn om temaet, slik at leseren forstår sammenhengen svaret står i", "Den gjentar spørsmålet med egne ord, slik at det går fram at oppgaven er forstått", "Den varsler hvilken konklusjon du kommer til, slik at leseren vet hvor svaret ender"],
      explanation: "Riktig svar er at åpningen erklærer en lesning. Alternativet om bakgrunn er nettopp det avsnittet som står øverst på kuttelisten, fordi det koster mellom 80 og 120 ord uten å svare på noe. Å gjenta spørsmålet er heller ikke en lesning — det sier ikke hvilken av flere mulige innfallsvinkler du har valgt.",
    },
    {
      question: "Hva er den strengeste kravspesifikasjonen i materialet, og hvor står den?",
      options: ["V2024-veiledningen, som krever definisjon, kontrovers og tre anvendelser med ett eksempel på hver", "V2021-veiledningen, som krever minst tre momenter og begge sider på endringsspørsmålet", "V2025-veiledningen, som krever grundig forståelse, klarhet i uttrykket og riktig referansebruk", "H2025-veiledningen, som krever minst tre akademiske kilder utenom pensum og en klar problemstilling"],
      explanation: "Riktig svar er V2024-veiledningen, som bruker ordet «må» om fem obligatoriske elementer. De tre andre alternativene er reelle krav fra reelle veiledninger, men de er mindre spesifiserte. Malen definisjon, kontrovers og anvendelse med eksempel er den mest overførbare i hele boka.",
    },
    {
      question: "Hvilket vurderingskriterium i V2025-veiledningen overrasker flest?",
      options: ["Riktig bruk av referanser der det er nødvendig, altså allerede i den skriftlige vårformen", "Grundig forståelse av kursets innhold, som er det tyngste av de tre kriteriene", "Klarhet i uttrykket, som veier like mye som den faglige forståelsen i vurderingen", "Analysen av kildene, som ifølge veiledningen skal vektlegges mest av alle kriteriene"],
      explanation: "Riktig svar er referansekravet, fordi mange antar at referanser bare gjelder semesteroppgaven. Kravet om at analysen av kildene skal vektlegges mest, hører til H2025-veiledningen og altså til semesteroppgaveformen. I et svar på 400 til 800 ord betyr referansekravet forfatternavn og begrep i teksten, ikke et fotnoteapparat.",
    },
    {
      question: "Hvordan bør tiden fordeles mellom de tre svarene?",
      options: ["I tre like bolker, siden de tre svarene teller likt ved utregning av karakter", "Med mest tid på det spørsmålet du kan best, siden det gir høyest uttelling per minutt", "Med mest tid på det spørsmålet du kan minst, slik at det svakeste svaret løftes mest", "Etter hvor mange momenter hvert spørsmål gir rom for, siden momenttallet varierer"],
      explanation: "Riktig svar er tre like bolker. Alternativet om å bruke mest tid på det du kan best, er den vanligste feilen, og den koster fordi det tredje svaret er verdt nøyaktig like mye som det første. Alternativet om å løfte det svakeste høres fornuftig ut, men gir samme ubalanse med motsatt fortegn.",
    },
    {
      question: "Hvor stor del av en tidsbolk bør gå til gjennomlesning og ordtelling?",
      options: ["Omtrent 15 prosent, altså den siste sjettedelen av bolken", "Omtrent 5 prosent, siden ordtelling går raskt når budsjettet er lagt på forhånd", "Omtrent 40 prosent, siden retting og omskriving er det som løfter et svar mest", "Ingenting, siden all tilgjengelig tid bør brukes på å få med flere momenter"],
      explanation: "Riktig svar er omtrent 15 prosent, med omtrent 15 prosent til lesing og disponering og omtrent 70 prosent til skriving. Alternativet uten gjennomlesning tester den vanligste nødløsningen når tiden er knapp: det er nettopp i den siste sjettedelen du oppdager at et svar ligger utenfor rammen.",
    },
    {
      question: "Hva står øverst på kuttehierarkiet når et svar er for langt?",
      options: ["Bakgrunnsavsnittet som forklarer spørsmålets historie før svaret begynner", "Det tredje momentet, siden to grundige momenter er bedre enn tre halvferdige", "Den ene siden av et tosidig spørsmål, siden den ene siden alltid er den viktigste", "Eksempelet i det momentet der oppgaven uttrykkelig har bedt om et eksempel"],
      explanation: "Riktig svar er bakgrunnsavsnittet, som koster mellom 80 og 120 ord og gir null uttelling. De tre andre alternativene står alle på listen over det som aldri kuttes: det tredje momentet er bestått-gulvet, begge sider er et krav i veiledningen, og eksempelet er det som viser forståelse.",
    },
    {
      question: "Hva er forskjellen på et ordbudsjett og en ordtelling?",
      options: ["Budsjettet er en plan lagt på forhånd, mens tellingen er en kontroll gjort etterpå", "Budsjettet gjelder hele eksamen, mens tellingen gjelder hvert enkelt av de tre svarene", "Budsjettet gjelder momentene, mens tellingen også omfatter åpning og avslutning", "Budsjettet er en anbefaling fra boka, mens tellingen er et krav fra sensorveiledningen"],
      explanation: "Riktig svar er at budsjettet planlegger og tellingen kontrollerer. Den som bare teller etterpå, oppdager problemet når det er dyrt å rette; den som budsjetterer på forhånd, oppdager det mens det ennå er et punkt på en kladdeliste. Ingen sensorveiledning krever ordtelling — den kreves av ordgrensen selv.",
    },
  ],
  'exfac03-east-0-3': [
    {
      question: "Hvilken oppgavesjanger står i flest av de 21 spørsmålene?",
      options: ["Sammenligningen, som står i 6 av 21 spørsmål i materialet", "Endring og kontinuitet, med 6 av 21 spørsmål og to ordrett gjentatte formuleringer", "Redegjørelsen med anvendelse, med 6 av 21 spørsmål fordelt på de to siste terminene", "Valgoppgaven, med 6 av 21 spørsmål"],
      explanation: "Riktig svar er sammenligningen med 6 av 21 spørsmål. Endring og kontinuitet står i 5 av 21 spørsmål, mens redegjørelsen og valgoppgaven står i 4 av 21 spørsmål hver, og de tre nære alternativene tester nettopp den forvekslingen. Til sammen summerer de fem sjangrene seg til 21 av 21 spørsmål.",
    },
    {
      question: "Hvordan organiseres et svar i sammenligningssjangeren?",
      options: ["Etter dimensjoner, med alle enhetene inne i hvert dimensjonsavsnitt", "Etter enheter, med ett grundig avsnitt om hvert land før sammenligningen til slutt", "Kronologisk gjennom hele perioden", "Etter styrke, med den tydeligste forskjellen først og de svakere forskjellene etterpå"],
      explanation: "Riktig svar er etter dimensjoner. Alternativet med ett avsnitt per land er den vanligste strukturfellen, og kostnaden er at sammenligningssetningene ikke får plass noe sted: når du er ferdig med det første landet, har du ikke det andre inne ennå. V2024-veiledningen organiserer selv svaret som likheter og deretter forskjeller.",
    },
    {
      question: "Hva er arbeidsredskapet i sjangeren endring og kontinuitet?",
      options: ["Tokolonneformen, der begge kolonner fylles i kladden før du skriver", "Tidslinjen med hendelsene i rekkefølge", "Dimensjonsmatrisen, med dimensjoner nedover og enheter bortover i et rutenett", "Momenttellingen, der antall momenter med eksempel telles for hvert alternativ"],
      explanation: "Riktig svar er tokolonneformen. Er den ene kolonnen tom, har du ikke et svar ennå, og V2021-veiledningen setter selv opp momentlistene sine i to kolonner. Dimensjonsmatrisen hører til sammenligningen, og momenttellingen hører til valgoppgaven.",
    },
    {
      question: "Hva kjennetegner alle fire redegjørelsesspørsmålene i materialet?",
      options: ["De har et andreledd som gjør at et rent referat ikke er tilstrekkelig som svar", "De navngir en pensumforfatter i spørsmålsteksten", "De gir studenten et valg mellom flere fokusområder hun kan fordype seg i", "De ber om argumenter både for og mot"],
      explanation: "Riktig svar er andreleddet. To av de fire navngir riktignok en pensumforfatter, men det gjelder ikke alle fire, og det nære alternativet tester nettopp den overgeneraliseringen. Andreleddet kan være kontroversene, anvendelsene, utviklingen eller en fokusanvisning — men det er alltid der.",
    },
    {
      question: "Hva er en fokusanvisning?",
      options: ["Leddet som sier hvilken innfallsvinkel til temaet du skal behandle", "Leddet som gir deg flere alternativer å velge mellom, og der du bestemmer selv", "Leddet som oppgir hvor mange ord svaret skal være på i den aktuelle terminen", "Leddet som oppgir hvilken del av pensum spørsmålet gjelder"],
      explanation: "Riktig svar er at fokusanvisningen sier hvilken innfallsvinkel du skal behandle. Alternativet om alternativer beskriver valgleddet, og forskjellen er avgjørende: valgleddet gir deg et valg, mens fokusanvisningen har tatt det for deg. Et svar som behandler temaet generelt og hopper over anvisningen, har svart på et annet spørsmål.",
    },
    {
      question: "Hva er de tre trinnene i redegjørelsen med anvendelse?",
      options: ["Definer, si hva som er omstridt, og anvend med ett eksempel per anvendelse", "Definer, gjengi pensum, og oppsummer", "Sett opp to kolonner, fyll begge, og vei dem mot hverandre i avslutningen", "Velg dimensjoner og skriv dimensjon for dimensjon"],
      explanation: "Riktig svar er definisjon, kontrovers og anvendelse med eksempel. Alternativet om å gjengi pensum er nettopp referatet sjangeren avviser, mens alternativene om tokolonneformen og om dimensjonsmatrisen beskriver arkitekturen i endringssjangeren og i sammenligningen. Malen er den mest overførbare i boka og står tydeligst i V2024-veiledningen.",
    },
    {
      question: "Hva skal avgjøre valget i en valgoppgave?",
      options: ["Hvor mange momenter med konkret eksempel du har på hvert av alternativene", "Hvilket alternativ som er nevnt først, siden det som regel er hovedsporet i oppgaven", "Hvilket alternativ du synes er mest interessant, siden engasjement gir bedre tekst", "Hvilket alternativ som er minst brukt av andre kandidater, siden det skiller svaret ut"],
      explanation: "Riktig svar er momenttellingen. Har du under tre momenter med eksempel på et alternativ, velg noe annet — gulvet i V2021-veiledningen er tre. Alternativet om interesse er den vanligste feilen, og den koster en tredel av karakteren fordi de tre svarene teller likt.",
    },
    {
      question: "Hva kreves av landingen i en argumentasjonsoppgave?",
      options: ["At den er begrunnet, og at den sier hva saken kommer an på hvis den ender der", "At den er balansert, slik at ingen av de to sidene framstår som sterkere enn den andre", "At den samsvarer med den posisjonen sensorveiledningen selv legger til grunn", "At den holdes åpen, slik at drøftingen framstår som redelig og ikke forhastet"],
      explanation: "Riktig svar er at landingen skal være begrunnet. Et svar som ender i «det kommer an på» uten å si hva det kommer an på, har ikke veid noe. Tre landingstyper er alle fullverdige: å velge side, å velge side med forbehold, og å vise at spørsmålet må presiseres før det kan besvares.",
    },
    {
      question: "Hva sier V2024-veiledningen om hvor svaret skal hentes fra?",
      options: ["At det etterspurte står i den obligatoriske litteraturen, altså i pensum", "At studenten fritt kan bygge på allmennkunnskap så lenge opplysningene er korrekte", "At svaret skal bygge på minst tre akademiske kilder utenom pensum", "At svaret skal bygge på forelesningene alene, siden pensum varierer mellom årene"],
      explanation: "Riktig svar er at det etterspurte står i den obligatoriske litteraturen. Kravet om minst tre akademiske kilder utenom pensum gjelder semesteroppgaveformen i H2025 og altså en helt annen vurderingsform. Beskjeden fra V2024 er at svaret skal hentes fra pensum og ikke fra allmennkunnskap.",
    },
    {
      question: "Hvor mange pensumforfattere er navngitt i hele materialet?",
      options: ["To — Hudson og Iwabuchi, begge uten verk, årstall eller sidetall", "Fire, altså én for hver av de fire sensorveiledningene i materialet", "Seks, én per oppgavesett", "Ingen — materialet navngir bare historiske skikkelser og aldri pensumforfattere"],
      explanation: "Riktig svar er to. Verken fornavn, verkstittel, utgave, årstall eller sidetall står i materialet for noen av dem, og boka refererer dem derfor bare ved etternavn og begrep. Alternativet om ingen tester skillet mot historiske skikkelser: Liang Qichao og Lu Xun er navngitt, men som historiske personer og ikke som forfattere av pensumtekster.",
    },
    {
      question: "Hva betyr referansekravet i et svar på 400 til 800 ord?",
      options: ["Forfatternavn og begrep inne i den løpende teksten, ikke et fotnoteapparat", "En litteraturliste til slutt med alle verkene svaret bygger på, ordnet alfabetisk", "Sidetall i parentes hver gang et poeng er hentet fra en bestemt pensumtekst", "Ingenting, siden referansekravet bare gjelder semesteroppgaveformen om høsten"],
      explanation: "Riktig svar er navn og begrep i teksten. Ingenting i materialet krever litteraturliste, sidetall eller utgaveangivelse i vårformen, og alternativet om at kravet ikke gjelder der, er feil: riktig referansebruk er ett av tre vurderingskriterier i V2025-veiledningen. Grepet koster fem ord og viser at poenget er hentet fra pensum.",
    },
    {
      question: "Hva gjør du når et spørsmål kan leses som to sjangre samtidig?",
      options: ["Sier i åpningssetningen hvilken lesning du har valgt, og holder disposisjonen til den", "Skriver svaret etter begge lesningene, slik at det ene sporet dekker det andre", "Velger den sjangeren som er hyppigst i materialet, siden den er mest sannsynlig ment", "Ber om at oppgaven presiseres, og skriver et kort svar på den lesningen som er tryggest"],
      explanation: "Riktig svar er å erklære lesningen i åpningen. Det koster ti til femten ord og gjør at sensor bedømmer svaret etter den standarden du selv har oppgitt. Å skrive etter begge lesningene sprenger ordbudsjettet, og frekvensen i materialet sier ingenting om hvordan akkurat dette spørsmålet er ment.",
    },
    {
      question: "Hvilken form styrer disposisjonen når to sjangre er i spill i samme spørsmål?",
      options: ["Den formen som bestemmer rekkefølgen i svaret, mens den andre blir en dimensjon inne i den", "Den formen som er nevnt sist i oppgaveteksten, siden den som regel er hovedbestillingen", "Den formen som gir flest momenter, siden bestått-gulvet er tre momenter per spørsmål", "Begge samtidig, med første halvdel etter den ene formen og andre halvdel etter den andre"],
      explanation: "Riktig svar er at hovedformen er den som bestemmer rekkefølgen. Er du bedt om å sammenligne to land og forklare statens rolle, styrer sammenligningen rekkefølgen, og statens rolle blir én av dimensjonene. Å dele svaret i to halvdeler etter hver sin form gir to halve svar i stedet for ett helt.",
    },
    {
      question: "Hva er signalordene i en oppgavetekst?",
      options: ["De ordene som avslører hvilken av de fem formene spørsmålet er", "De ordene som sier hvilket tema spørsmålet handler om, altså saksfeltet", "De ordene som oppgir hvor mange ord svaret skal være på i den aktuelle terminen", "De ordene som markerer hvilke deler av svaret som gir mest uttelling hos sensor"],
      explanation: "Riktig svar er at signalordene avslører formen. Temaordene sier hva spørsmålet handler om, og de leses gjerne først — men det er signalordene som bestemmer disposisjonen, og de bør derfor leses først. Signalordene er en første sortering og ikke en fasit: et spørsmål kan bære signaler fra to former samtidig.",
    },
  ],
  'exfac03-east-1-1': [
    {
      question: "Hva var den juridiske enheten i ie-systemet?",
      options: ["Husholdet, med et overhode som hadde myndighet over medlemmene", "Individet, med rettigheter knyttet til personen og ikke til slekten", "Ekteparet, som den minste rettslige enheten i familielovgivningen", "Landsbyen, som svarte for medlemmenes forpliktelser overfor staten"],
      explanation: "Riktig svar er husholdet med et overhode. Alternativet om ekteparet er den nære fella: det høres moderne og rimelig ut, men systemet omfattet flere generasjoner og en linje bakover og framover i tid. Individet som rettslig enhet er nettopp det etterkrigsreformene innførte.",
    },
    {
      question: "Når ble ie-systemet lovfestet?",
      options: ["I Meiji-tiden, som del av statens moderniseringsprosjekt", "I etterkrigstiden, som del av den nye familielovgivningen", "I førmoderne tid, som en uendret nedarvet familieordning", "På 1980-tallet, som svar på fallende fødselstall i landet"],
      explanation: "Riktig svar er Meiji-tiden. At ordningen ble kodifisert av en moderne stat og ikke overlevert uendret, er selve poenget: en familieordning som er bygget politisk, kan også bygges om politisk — og det er nettopp det som skjer etter krigen. Alternativet om førmoderne tid er den vanligste misforståelsen.",
    },
    {
      question: "Hva innebar idealet «god hustru, klok mor»?",
      options: ["At utdanning for jenter ble utvidet, men innrettet mot rollen i husholdet", "At jenter i hovedsak ble holdt utenfor det offentlige skolesystemet gjennom hele perioden", "At jenter og gutter fikk identiske utdanningsløp med samme yrkesmål", "At bare døtre av embetsfamilier fikk adgang til høyere utdanning"],
      explanation: "Riktig svar er at adgangen ble utvidet og formålet lå fast. Idealet stengte ikke jenter ute fra skolen — det ga dem en egen inngang med et eget mål, og derfor er momentet et eksempel på hva utdanningen var til for. Det gjør dessuten dobbelt arbeid i et svar: en endring og en kontinuitet i samme moment.",
    },
    {
      question: "Hvilket av disse hører hjemme i kontinuitetskolonnen for Japan?",
      options: ["Familieregisteret, der husholdet består som enhet", "Arven, som deles mellom barna uavhengig av kjønn", "Adgangen til fast arbeid, som er kraftig utvidet", "Familieoverhodets rettslige myndighet, som er avskaffet"],
      explanation: "Riktig svar er familieregisteret. De tre andre alternativene er korrekte opplysninger — og alle tre er endringer. Det er nettopp det som gjør spørsmålet krevende: du kan kunne alle fire og likevel svare feil hvis du ikke leser hvilken kolonne det spørres om.",
    },
    {
      question: "Hva endret etterkrigsreformene i japansk familielovgivning?",
      options: ["Husholdet ble avskaffet som juridisk enhet med et overhode", "Familieregisteret ble erstattet av et register over enkeltpersoner", "Kravet om ett felles etternavn for ektefeller ble opphevet", "Ekteskapet som formell inngang til et hushold falt bort"],
      explanation: "Riktig svar er at husholdet som juridisk enhet ble avskaffet. De tre andre alternativene beskriver forhold som nettopp **ikke** ble endret, og som derfor bærer kontinuitetskolonnen. Én og samme reformbølge avskaffet den ene ordningen og videreførte den andre.",
    },
    {
      question: "Hva menes med kombinasjonsproblemet?",
      options: ["Vanskeligheten med å forene omsorgsansvar og yrkeskarriere", "Mangelen på barnehageplasser i de største byene i landet", "Vanskeligheten med å kombinere to inntekter i ett hushold", "Konflikten mellom formell rett og faktisk lønnsnivå i arbeidslivet"],
      explanation: "Riktig svar er forholdet mellom omsorgsansvar og yrkeskarriere. Alternativet om barnehageplasser er den nære fella: plasser er ett av flere tiltak mot problemet, ikke problemet selv. Problemet ligger i forholdet mellom arbeidstidens lengde, omsorgsansvarets fordeling og karrierens krav om kontinuitet.",
    },
    {
      question: "Hva kjennetegner et lavfertilitetssamfunn?",
      options: ["Fødselstallene ligger varig under nivået som opprettholder befolkningen", "Fødselstallene svinger kraftig fra år til år uten at det danner seg en klar retning", "Befolkningen vokser merkbart saktere enn i nabolandene i den samme regionen", "Antall barn per familie er systematisk lavere i byene enn i distriktene på landsbygda"],
      explanation: "Riktig svar er at nivået holder seg lavt over tid. Alternativet om svingninger er den nære fella: det er varigheten og ikke variasjonen som definerer fenomenet, og det er derfor forklaringene søkes i arbeidsliv, boligkostnader og omsorgsfordeling framfor i enkelthendelser.",
    },
    {
      question: "Hva menes med statsfeminisme?",
      options: ["At likestillingsarbeidet drives fram av staten og ikke av en bevegelse", "At feministiske bevegelser retter alle sine krav mot statlige organer", "At kvinner er sterkt representert i statlig forvaltning og politikk", "At staten finansierer selvstendige kvinneorganisasjoner over budsjettet"],
      explanation: "Riktig svar er at motoren sitter i staten. Alternativet om at bevegelser retter krav mot staten, beskriver noe annet: det forutsetter nettopp en selvstendig bevegelse. Kjennetegnet ved statsfeminisme er at dagsordenen settes av statlige mål, noe som gir gjennomføringskraft og lite rom for krav staten ikke ønsker å stille.",
    },
    {
      question: "Hvorfor står motreaksjonen på V2021-veiledningens momentliste?",
      options: ["Fordi den viser at utviklingen ikke har vært en jevn oppadgående kurve", "Fordi den beviser at likestillingsreformene i praksis ikke ble gjennomført", "Fordi den forklarer hvorfor fødselstallene fortsatte å falle etter reformene", "Fordi den er den eneste organiserte responsen materialet nevner fra perioden"],
      explanation: "Riktig svar er at motreaksjonen viser en ujevn utvikling. Alternativet om at reformene ikke ble gjennomført, snur momentet på hodet: en motreaksjon forutsetter at noe har endret seg — man reagerer ikke på det som ikke skjer. Veiledningen bruker dessuten flertall om responsene, så den er én av flere.",
    },
    {
      question: "Hva betyr det at V2021-veiledningen bruker flertall om «ulike responser»?",
      options: ["At staten, arbeidsgiverne, bevegelsene og enkeltmenneskene svarte forskjellig", "At responsene kom i flere omganger, med noen tiårs mellomrom hver gang", "At både kvinner og menn reagerte på endringene i kjønnsrelasjonene", "At responsene var ulike i de forskjellige delene av landet geografisk"],
      explanation: "Riktig svar er at ulike aktører svarte ulikt, og at noen av svarene motarbeidet hverandre. Flertallsformen er en faglig presisering og ikke en stilistisk: å skrive «Japan svarte med statsfeminisme» skjuler at arbeidsgivere, bevegelser og enkeltmennesker svarte noe annet.",
    },
    {
      question: "Hva er forskjellen på en kjønnsrolle og en kjønnsrelasjon?",
      options: ["Rollen er forventningene til det ene kjønnet, relasjonen er forholdet mellom rollene", "Rollen gjelder i arbeidslivet, mens relasjonen utelukkende gjelder innenfor familien og husholdet", "Rollen er en juridisk kategori, mens relasjonen er et rent sosiologisk begrep", "Rollen endrer seg over tid, mens relasjonen er stabil på tvers av perioder"],
      explanation: "Riktig svar er at relasjonen er forholdet mellom rollene. Skillet er nyttig fordi det lar deg si at kvinners yrkesdeltakelse økte kraftig og at kjønnsrelasjonen i husholdet endret seg lite, uten at de to påstandene motsier hverandre.",
    },
    {
      question: "Hva må stå i åpningssetningen på et endringsspørsmål?",
      options: ["Periodegrensen — altså hvilken periode du måler endring over", "Konklusjonen, slik at leseren vet hvor svaret kommer til å ende", "En kort bakgrunn om temaets historie før momentene begynner", "Antall momenter du kommer til å bruke i resten av svaret"],
      explanation: "Riktig svar er periodegrensen. Om husholdet som juridisk enhet er en endring eller ikke noe moment i det hele tatt, avhenger fullstendig av om du måler fra Meiji-tiden eller fra 1960. Alternativet om bakgrunn er nettopp det avsnittet som står øverst på kuttelisten.",
    },
    {
      question: "Hva er en kobling i et endringssvar?",
      options: ["En setning som forklarer en kontinuitet ved hjelp av en endring", "En setning som setter en endring og en kontinuitet ved siden av hverandre", "En overgangssetning mellom to avsnitt som holder teksten sammen", "En henvisning til et annet spørsmål i det samme eksamenssettet"],
      explanation: "Riktig svar er en forklaring, ikke en sammenstilling. Formen er «fordi X skjedde uten at Y skjedde, består Z». Alternativet om sammenstilling er den nære fella: setninger med «men» er korrekte og ufullførte, og det er én setning til som gjør dem til en kobling.",
    },
    {
      question: "Hva skiller formell likhet fra faktisk praksis?",
      options: ["Formell likhet gjelder rettighetene i loven, praksis gjelder hva som faktisk skjer", "Formell likhet gjelder offentlig sektor, praksis gjelder privat sektor", "Formell likhet er et mål, mens praksis er en beskrivelse av nåsituasjonen", "Formell likhet gjelder ekteskapet, mens praksis gjelder arbeidslivet"],
      explanation: "Riktig svar er skillet mellom lovens rettigheter og faktisk fordeling. Å sette likhetstegn mellom de to fjerner hele kontinuitetskolonnen: etterkrigsreformene endret rettighetene, mens arbeidsdelingen er et eget spørsmål med egne momenter.",
    },
    {
      question: "Hvorfor er familieregisteret et kontinuitetsmoment og ikke bare en administrativ detalj?",
      options: ["Fordi rettigheter knyttes til tilhørighet i et hushold i stedet for til personen", "Fordi registeret ble opprettet i Meiji-tiden og aldri har vært revidert siden", "Fordi registeret er det eneste stedet ekteskap blir formelt registrert", "Fordi registeret brukes til å beregne skatt for husholdet under ett"],
      explanation: "Riktig svar er at ordningen knytter rettigheter til tilhørighet og ikke til individet. Det er en teknisk forskjell med praktiske følger, og det er derfor momentet bærer kontinuitetskolonnen sammen med kravet om ett felles etternavn for ektefeller.",
    },
    {
      question: "Hva var arveordningen i ie-systemet?",
      options: ["Husholdets eiendom og stilling gikk samlet videre i ættelinjen", "Arven ble delt likt mellom sønnene, mens døtrene ble tilgodesett med medgift", "Arven fulgte den lengstlevende ektefellen og gikk deretter videre til barna", "Arven ble fordelt av husholdets overhode etter hans eget frie skjønn"],
      explanation: "Riktig svar er at eiendom og stilling gikk samlet videre. Ordningen forfordelte ikke bare døtre, den forfordelte også yngre sønner — hele poenget var at husholdet ikke skulle deles opp. Et svar som ser dette, viser at det har forstått ordningen og ikke bare misliker den.",
    },
    {
      question: "Hva er den beste beskrivelsen av kapitlets drøftingsakse om fødselstall?",
      options: ["Om lavfertiliteten er en årsak til kjønnspolitikken eller en virkning av trege endringer", "Om fødselstallene faktisk har falt, eller om den registrerte nedgangen er et statistisk artefakt", "Om staten har rett til å gripe inn i familiens beslutninger om barn", "Om barnehageutbygging er et bedre tiltak enn kontantoverføringer til familier"],
      explanation: "Riktig svar er årsaksretningen. Alternativet om hvorvidt fødselstallene har falt, er ikke omstridt — det er robust, og et svar som pakker det inn i forbehold, har flyttet usikkerheten fra vurderingen til hendelsen. Uenigheten gjelder hvordan hendelsen skal forklares og veies.",
    },
    {
      question: "Hva er periodegrensens funksjon i et endringssvar?",
      options: ["Den avgjør hva som telles som endring og hva som telles som kontinuitet", "Den viser at kandidaten kjenner de viktigste årstallene i perioden", "Den avgrenser hvor mange momenter svaret har plass til innenfor taket", "Den erstatter behovet for å begrunne valget av momenter senere i svaret"],
      explanation: "Riktig svar er at grensen avgjør hva som telles som hva. Husholdet som juridisk enhet er en endring målt fra Meiji-tiden og ikke noe moment i det hele tatt målt fra 1960. Det er derfor grensen hører i åpningssetningen og ikke i et årstall midt i teksten.",
    },
    {
      question: "Hvilket moment gir både en endring og en kontinuitet fra samme sted?",
      options: ["Etterkrigsreformene, som avskaffet husholdet og beholdt registreringsordningen", "Meiji-tidens skolereform, som utvidet og innsnevret adgangen samtidig", "Statsfeminismen, som både utvidet rettigheter og møtte organisert motstand", "Kombinasjonsproblemet, som er både en årsak til og en virkning av lavfertilitet"],
      explanation: "Riktig svar er etterkrigsreformene. Momentet er billig og sterkt: du får en endring og en kontinuitet fra samme reformbølge, og koblingen ligger allerede i materialet. De tre andre alternativene har hver sin verdi, men ingen av dem gir de to kolonnene fra én og samme hendelse.",
    },
    {
      question: "Hvorfor er yrkesløpet et eget moment ved siden av yrkesdeltakelsen?",
      options: ["Fordi yrkesløpet måler hvordan arbeidet henger sammen over et helt liv", "Fordi yrkesløpet gjelder menn, mens yrkesdeltakelsen gjelder kvinner", "Fordi yrkesløpet er lettere å måle i offentlig statistikk enn deltakelsen", "Fordi yrkesløpet bare er relevant for personer med høyere utdanning"],
      explanation: "Riktig svar er at yrkesløpet måler sammenhengen over et liv. To samfunn kan ha samme yrkesdeltakelse og helt ulike yrkesløp, og det er den andre størrelsen som forklarer lønnsforskjeller og pensjonsforskjeller — og som gjør avbruddet til et eget moment.",
    },
  ],
  'exfac03-east-1-2': [
    {
      question: "Hvilke tre feminismeretninger navngir materialet fra tidlig 1900-tall i Kina?",
      options: ["En nasjonalistisk, en anarkistisk og en kommunistisk retning", "En markedsrettet, en likestillingsrettet og en skeiv retning", "En statsfeministisk, en radikalfeministisk og en liberal retning", "En byrettet, en landrettet og en transnasjonal retning"],
      explanation: "Riktig svar er den nasjonalistiske, den anarkistiske og den kommunistiske. Alternativet med markedsfeminisme, likestillingsfeminisme og skeiv feminisme er den nære fella: de tre hører til reformtiden, altså et helt annet tidsrom, og å bytte om på dem plasserer stoffet i feil periode.",
    },
    {
      question: "Hva var de tre tidlige feminismeretningene uenige om?",
      options: ["Hva som var årsaken til kvinners stilling, og dermed hva som måtte endres", "Om kvinner burde få utdanning i det hele tatt, og i så fall på hvilket nivå", "Om kvinnesaken skulle fremmes i byene først eller på landsbygda først", "Om kvinner burde organisere seg i egne foreninger eller sammen med menn"],
      explanation: "Riktig svar er uenigheten om årsak: nasjonens tilbakeliggenhet, autoritetens struktur, eller eiendoms- og produksjonsforholdene. Å si hva de var uenige om, er det som gjør et nevnt moment til et utviklet moment — å navngi tre retninger er en oppramsing.",
    },
    {
      question: "Hva slo ekteskapsloven av 1950 fast?",
      options: ["Fritt valg av ektefelle, forbud mot tvangsekteskap og rett til skilsmisse", "Grenser for antall barn per par, med et eget forvaltningsapparat for gjennomføring", "At arbeidsenheten skulle fordele bolig og barnepass til de ansatte", "At husholdet skulle registreres samlet med ett felles etternavn"],
      explanation: "Riktig svar er fritt ektefellevalg, forbud mot tvangsekteskap og skilsmisserett. Alternativet om grenser for antall barn er den mest fristende fella, fordi begge er statlige inngrep i familielivet — men de tilhører ulike perioder og peker i motsatt retning.",
    },
    {
      question: "Hva gjorde arbeidsenheten i Mao-tiden, ut over å gi arbeid og lønn?",
      options: ["Den fordelte bolig, barnepass og helsetjenester til de ansatte", "Den drev egne skoler for de ansattes barn opp til universitetsnivå", "Den fastsatte lønnsnivået etter forhandlinger med lokale fagforeninger", "Den delte ut jordbruksland til ansatte som ønsket å flytte tilbake"],
      explanation: "Riktig svar er bolig, barnepass og helsetjenester. Det er avgjørende for kjønnsrelasjonene: fordi barnepasset fulgte arbeidsplassen, ble full yrkesdeltakelse praktisk mulig — og det forklarer også hvorfor markedsreformene fikk så store kjønnsvirkninger da ordningen falt bort.",
    },
    {
      question: "Hvilken periode hører ettbarnspolitikken til?",
      options: ["Reformtiden, altså perioden med markedsreformer fra slutten av 1970-tallet", "Mao-tiden, som del av mobiliseringen av kvinner inn i produksjonen", "Tiden før 1949, da flere feminismeretninger konkurrerte om dagsordenen", "Perioden like etter ekteskapsloven, altså som en videreføring av den samme reformen"],
      explanation: "Riktig svar er reformtiden. Feilplasseringen i Mao-tiden er den vanligste på hele temaet, og den er alvorlig fordi den knytter et av de mest inngripende tiltakene til feil politisk periode — og skjuler at markedsreformer og streng reproduksjonspolitikk kom samtidig.",
    },
    {
      question: "Hva er robust når det gjelder ettbarnspolitikken?",
      options: ["At den var statlig håndhevet, med et eget apparat for gjennomføring", "At den er hovedårsaken til at fødselstallene i landet falt", "At den ble innført mot faglige råd fra myndighetenes egne rådgivere", "At den er den viktigste enkeltårsaken til dagens aldrende befolkning"],
      explanation: "Riktig svar er at politikken var statlig håndhevet. De tre andre alternativene er årsakspåstander, og de er faglig omstridte: fødselstallene falt betydelig også før politikken ble innført og har fortsatt å falle etter at den ble opphevet. Hendelsen er robust; veiingen av virkningene er ikke.",
    },
    {
      question: "Hva var likhetstanken i Mao-tiden?",
      options: ["At kvinner og menn er like og skal utføre samme arbeid", "At alle husholdninger skulle ha samme inntekt og levestandard", "At by og land skulle ha like tjenester og like muligheter", "At alle skulle ha samme utdanningsløp uavhengig av bakgrunn"],
      explanation: "Riktig svar er forestillingen om samme arbeid. Legg merke til retningen: tanken handlet om at kvinner skulle gjøre det menn gjorde i produksjonen, og i liten grad om at menn skulle gjøre det kvinner gjorde hjemme. Det er derfor dobbeltarbeidet ble et resultat.",
    },
    {
      question: "Hva er dobbeltarbeidet?",
      options: ["Full arbeidsdag i lønnet arbeid pluss hovedansvaret for husarbeid og omsorg", "To lønnede stillinger samtidig, som var vanlig i reformtiden", "Arbeid både i byen og på hjemgården, fordelt over året", "Arbeid som både utføres for og rapporteres til to ulike arbeidsenheter samtidig"],
      explanation: "Riktig svar er lønnsarbeid pluss ufordelt husarbeid. Fenomenet er et resultat av **høy** yrkesdeltakelse uten omfordeling hjemme, ikke av lav deltakelse — og derfor kan et land ha svært høy yrkesdeltakelse blant kvinner og likevel en lite endret kjønnsrelasjon i husholdet.",
    },
    {
      question: "Hva skiller markedsfeminisme fra likestillingsfeminisme?",
      options: ["Markedsfeminismen legger vekt på den enkeltes muligheter, den andre på institusjonene", "Markedsfeminismen er eldre og ble avløst av likestillingsfeminismen", "Markedsfeminismen gjelder byene, mens likestillingsfeminismen i hovedsak gjelder landsbygda", "Markedsfeminismen er statsdrevet, mens likestillingsfeminismen er en bevegelse"],
      explanation: "Riktig svar er skillet mellom individets muligheter og strukturelle betingelser. Kritikken markedsfeminismen møter, er at frigjøring gjennom markedet først og fremst er tilgjengelig for dem som allerede har utdanning og kapital, og at den derfor kan gjøre forskjellene mellom kvinner større.",
    },
    {
      question: "Hva kjennetegner skeiv feminisme?",
      options: ["Den stiller spørsmål ved selve kjønnskategoriene og knytter kjønn til seksualitet", "Den avviser ekteskap og barnefødsler som en politisk handling", "Den arbeider utelukkende gjennom digitale kanaler og nettverk", "Den bygger videre på likhetstanken fra Mao-tiden i en ny og modernisert form"],
      explanation: "Riktig svar er at retningen stiller spørsmål ved kategoriene. Alternativet om å avvise ekteskap og barnefødsler beskriver en samtidig sørkoreansk retning som behandles i kapitlet om bevegelsene, og forvekslingen er nettopp den fella spørsmålet tester.",
    },
    {
      question: "Hvorfor bruker materialet flertall om feministisk tenkning i reformtiden?",
      options: ["Fordi flere samtidige retninger fantes, og de var uenige med hverandre", "Fordi retningene avløste hverandre i en bestemt rekkefølge over tid", "Fordi tenkningen var ulik i de ulike provinsene i landet", "Fordi både kvinner og menn deltok i den offentlige samtalen om kjønnsrelasjoner"],
      explanation: "Riktig svar er at flere retninger fantes samtidig og var uenige. Flertallsformen er en faglig presisering, og den går igjen både tidlig på 1900-tallet og i reformtiden — å se det samme mønsteret to ganger er et moment i seg selv.",
    },
    {
      question: "Hva er den beste formuleringen av kontinuiteten på tvers av de tre periodene?",
      options: ["Staten har vært hovedaktør i spørsmål om familie, fødsler og kvinners arbeid", "Kvinners stilling har endret seg langsomt gjennom hele det tjuende århundret", "Husarbeidet har vært ufordelt i alle tre periodene uten unntak", "Feministisk tenkning har møtt motstand i alle tre periodene"],
      explanation: "Riktig svar er at staten har vært hovedaktøren hele veien, og at det er retningen på politikken som har skiftet. En kontinuitet formulert som treghet er lett å motsi og vanskelig å belegge; en kontinuitet formulert som en aktør er lett å belegge og binder periodene sammen.",
    },
    {
      question: "Hva er kapitlets drøftingsakse om Mao-tiden?",
      options: ["Om statsfeminismen ga reell likestilling eller bare flyttet hvem som bestemte", "Om kjønnsstrukturene faktisk ble omveltet, eller om endringene i hovedsak var symbolske", "Om ekteskapsloven ble vedtatt før eller etter mobiliseringen til produksjon", "Om kvinners yrkesdeltakelse steg raskere i byene enn på landsbygda"],
      explanation: "Riktig svar er spørsmålet om reell likestilling mot flyttet myndighet. At kjønnsstrukturene ble omveltet, er robust og står på veiledningens momentliste — det er ikke det som er omstridt. Uenigheten gjelder hvordan omveltningen skal veies mot den nye avhengigheten den skapte.",
    },
    {
      question: "Hva skiller statsfeminismen i Mao-tidens Kina fra den i Japan?",
      options: ["Virkemidlene: den ene virket gjennom arbeidsplasser staten selv organiserte", "Aktøren: den ene ble drevet av en bevegelse, den andre av staten", "Målet: den ene gjaldt hele arbeidslivet, den andre bare familielovgivningen", "Tidspunktet: den ene er førkrigstid, den andre etterkrigstid"],
      explanation: "Riktig svar er virkemidlene. Alternativet om aktøren er nesten riktig og likevel galt: i begge tilfeller er staten aktøren, og det er nettopp derfor de deler navn. Å velge det er å beskrive fellestrekket som om det var forskjellen.",
    },
    {
      question: "Hva var kampanjens rolle etter ekteskapsloven?",
      options: ["Å gjøre lovens innhold kjent og endre hva folk forventet av hverandre", "Å registrere alle inngåtte ekteskap i et nytt sentralt register", "Å rekruttere kvinner til statlige stillinger i forvaltningen", "Å samle inn erfaringer til en senere lovrevisjon"],
      explanation: "Riktig svar er å gjøre loven kjent og endre forventninger. Skillet mot lovgivning alene er poenget: en lov endrer hva som er tillatt, en kampanje endrer hva folk vet om og venter av hverandre — og det forklarer hvorfor to like lover kan få ulik virkning.",
    },
    {
      question: "Hva menes med reproduksjonspolitikk?",
      options: ["Statlig politikk rettet mot hvor mange barn befolkningen får", "Statlig politikk rettet mot vilkårene for familier som allerede finnes", "Statlig politikk rettet mot helsetjenester for gravide og fødende", "Statlig politikk rettet mot arbeidsdelingen mellom foreldre i hjemmet"],
      explanation: "Riktig svar er politikk rettet mot antall barn. Alternativet om vilkårene for eksisterende familier beskriver familiepolitikk, og skillet betyr noe: reproduksjonspolitikkens retning kan snus fra begrensning til oppfordring uten at logikken endrer seg.",
    },
    {
      question: "Hva sier begrepet kjønnsstruktur?",
      options: ["De institusjonene som ordner forholdet mellom kjønnene i et samfunn", "Fordelingen av kvinner og menn i ulike yrker og bransjer", "Andelen kvinner i lederstillinger i offentlig og privat sektor", "Forskjellen i utdanningsnivå mellom kvinner og menn"],
      explanation: "Riktig svar er institusjonene som ordner forholdet. De tre andre alternativene er målbare størrelser som kan endre seg mye uten at strukturen gjør det — og det er nettopp derfor omveltningen av strukturene er et eget moment på veiledningens liste.",
    },
    {
      question: "Hva menes med statlig håndheving?",
      options: ["At et politisk mål gjennomføres av et apparat med myndighet til å sanksjonere", "At et politisk mål er vedtatt av det høyeste politiske organet i staten", "At et politisk mål er kunngjort offentlig og gjort godt kjent for hele befolkningen", "At et politisk mål gjentas i statlige medier over lengre tid"],
      explanation: "Riktig svar er apparatet med sanksjonsmyndighet. Skillet mot en anbefaling er avgjørende i et svar: en anbefaling kan følges eller ikke, mens håndheving forutsetter et system som merker at den ikke følges — det er forskjellen på å virke gjennom holdninger og gjennom myndighet.",
    },
    {
      question: "Hva sier kvinners yrkesdeltakelse ingenting om?",
      options: ["Hvem som gjør husarbeidet, og om arbeidet er valgt eller tildelt", "Hvor stor andel av kvinnene som er i lønnet arbeid", "Hvordan andelen har endret seg fra tiår til tiår", "Hvor mange kvinner som arbeider utenfor eget hushold"],
      explanation: "Riktig svar er at tallet ikke sier noe om arbeidsdelingen hjemme eller om arbeidet er valgt. I Mao-tidens Kina var arbeidet delvis tildelt, og et svar som bruker yrkesdeltakelse som mål på frigjøring uten å si dette, har hoppet over hele drøftingsaksen.",
    },
    {
      question: "Hvordan bør et svar behandle skillet mellom robuste forhold og omstridte vurderinger?",
      options: ["Hendelser skrives som hendelser, vurderinger skrives som vurderinger med avsender", "Alle påstander skrives med forbehold, slik at svaret framstår som redelig", "Bare de påstandene som støttes av flere veiledninger, tas med i svaret", "Vurderinger utelates helt, slik at svaret bare inneholder etterprøvbare opplysninger"],
      explanation: "Riktig svar er å skrive hendelser som hendelser og vurderinger med avsender. Å pakke en hendelse inn i en forsiktighetsformulering gjør svaret dårligere, ikke mer nøyaktig — og å utelate vurderingene helt fjerner drøftingen sensor faktisk etterspør.",
    },
  ],
  'exfac03-east-1-3': [
    {
      question: "Hva er de fire hovedtypene statlige virkemidler?",
      options: ["Lov, penger, tjeneste og informasjon", "Lov, kampanje, forskning og forhandling", "Skatt, tilskudd, kvote og forbud", "Regulering, eierskap, tilsyn og klageadgang"],
      explanation: "Riktig svar er lov, penger, tjeneste og informasjon. Skjemaet er nyttig fordi det gjør en oppramsing til en analyse: to stater kan forfølge samme mål med helt ulike virkemidler, og virkemiddelvalget forteller noe om hvilken makt staten faktisk har.",
    },
    {
      question: "Hva menes med offentlig patriarkat?",
      options: ["At kvinners avhengighet flytter fra husholdet til arbeidsmarkedet og statens ordninger", "At menn er overrepresentert i politiske verv og offentlig forvaltning", "At staten overtar husholdets myndighet over den enkelte kvinnen", "At familiepolitikken behandles som et offentlig anliggende og ikke som et privat spørsmål"],
      explanation: "Riktig svar er at avhengigheten flytter til institusjonene. Alternativet om overrepresentasjon beskriver en reell ulikhet, men ikke dette begrepet — og forveksles de, mister begrepet den presisjonen som gjorde det nyttig. Begrepet sier hvor ulikheten er plassert, ikke hvor stor den er.",
    },
    {
      question: "Hva er distinksjonen mellom privat og offentlig patriarkat?",
      options: ["Om avhengigheten er knyttet til personer i husholdet eller til institusjoner", "Om ulikheten er lovfestet eller bare bygget på uskrevne forventninger", "Om ulikheten rammer kvinner i lønnet arbeid eller kvinner utenfor arbeidslivet", "Om ulikheten er synlig i offentlig statistikk eller ikke lar seg måle"],
      explanation: "Riktig svar er hvor avhengigheten er plassert. Overgangen mellom de to er en reell endring og ikke et navnebytte — og den er likevel ikke det samme som at ulikheten er borte. Det er nettopp den doble innsikten begrepsparet er laget for å bære.",
    },
    {
      question: "Hva er forskjellen på et tiltaks forutsetning og et tiltaks mål?",
      options: ["Forutsetningen er hva som må finnes fra før, målet er hva som skal bli annerledes", "Forutsetningen er politisk, mens målet alltid er økonomisk i sin natur", "Forutsetningen er skrevet i lovteksten, mens målet står i forarbeidene", "Forutsetningen gjelder staten selv, mens målet gjelder de som tiltaket retter seg mot"],
      explanation: "Riktig svar er skillet mellom hva som må være på plass og hva som skal skapes. De to spørsmålene er det som gjør et nevnt eksempel til et forklart eksempel, og V2024-veiledningen sier uttrykkelig at eksempler må forklares.",
    },
    {
      question: "Hva forutsetter et krav om at virksomheter skal rapportere kvinneandel i ledelsen?",
      options: ["Et arbeidsmarked staten ikke selv styrer, og en skjevhet som lar seg måle", "At staten eier de virksomhetene kravet retter seg mot", "At det allerede finnes bindende kvoteringsregler for styreverv i landet fra før", "At virksomhetene har en fagforening som kan følge opp kravet"],
      explanation: "Riktig svar er et arbeidsmarked utenfor statens direkte styring. Tiltaket er derfor et virkemiddelvalg som følger av statlig kapasitet: en stat som eide arbeidsplassene, ville hatt sterkere midler enn å be dem telle.",
    },
    {
      question: "Hva er skillet mellom familiepolitikk og arbeidsmarkedspolitikk?",
      options: ["Familiepolitikken virker på hjemmesiden, arbeidsmarkedspolitikken på arbeidsplassen", "Familiepolitikken er statlig, mens arbeidsmarkedspolitikken er partenes eget ansvar", "Familiepolitikken gjelder barn, mens arbeidsmarkedspolitikken gjelder voksne", "Familiepolitikken er ny, mens arbeidsmarkedspolitikken har en lengre historie"],
      explanation: "Riktig svar er hvilken side feltet virker på. Poenget for kjønnsrelasjonene er at kombinasjonsproblemet oppstår i skjøten mellom de to feltene, slik at tiltak på bare den ene siden sjelden endrer relasjonen.",
    },
    {
      question: "Hva er forskjellen på en rettighetsendring og en praksisendring?",
      options: ["Rettighetsendring gjelder hva loven gir, praksisendring hva folk faktisk gjør", "Rettighetsendring gjelder kvinner, praksisendring gjelder begge kjønn", "Rettighetsendring er varig, mens praksisendring alltid kan reverseres", "Rettighetsendring krever lovvedtak, praksisendring en forskrift"],
      explanation: "Riktig svar er skillet mellom lov og praksis. Rettighetsendringer kan skje raskt og lar seg datere; praksisendringer skjer langsomt og er vanskeligere å datere — og skillet er det som lar deg vise store endringer og store kontinuiteter samtidig.",
    },
    {
      question: "Hva menes med statlig kapasitet?",
      options: ["Hva staten faktisk har evne til å gjennomføre, gitt registre og institusjoner", "Hvor stor andel av økonomien som går gjennom offentlige budsjetter", "Hvor mange ansatte forvaltningen har i forhold til folketallet", "Hvor sterk politisk vilje det er til å gjennomføre et bestemt tiltak i praksis"],
      explanation: "Riktig svar er evnen til å gjennomføre. Alternativet om politisk vilje er den nære fella: to stater med samme mål kan ende med helt ulike tiltak fordi kapasiteten er ulik, og kapasitetsforklaringen står i institusjonene mens viljeforklaringen er vanskelig å belegge.",
    },
    {
      question: "Hva er en indirekte kjønnsvirkning?",
      options: ["En virkning av et tiltak som ikke er utformet med kjønn som kategori", "En virkning som først viser seg flere år etter at tiltaket ble innført", "En virkning som rammer menn i stedet for kvinner", "En virkning som ingen hadde tenkt seg da tiltaket ble vedtatt"],
      explanation: "Riktig svar er at tiltaket er utformet uten kjønn som kategori og likevel treffer ulikt. Alternativet om utilsiktet virkning er den nære fella: en indirekte virkning kan godt være tilsiktet, og det avgjørende er utformingen og ikke hensikten.",
    },
    {
      question: "Hva er institusjonell treghet?",
      options: ["At institusjoner endrer seg langsommere enn lovverket, fordi ordninger henger sammen", "At forvaltningen bruker uforholdsmessig lang tid på å behandle enkeltsaker etter en reform", "At politiske vedtak må gjennom flere organer før de kan settes i verk", "At motstandere av en reform bevisst forsinker gjennomføringen av den"],
      explanation: "Riktig svar er at ordninger henger sammen og derfor fortsetter å virke som før. Alternativet om bevisst forsinkelse beskriver motstand, ikke treghet — og skillet gjør et kontinuitetsmoment presist, fordi du kan si hvorfor noe består og ikke bare at det gjør det.",
    },
    {
      question: "Hva skiller et insentiv fra et påbud?",
      options: ["Insentivet virker gjennom valg og pris, påbudet gjennom plikt og sanksjon", "Insentivet gjelder privatpersoner, påbudet gjelder virksomheter", "Insentivet er alltid økonomisk, mens påbudet alltid er rettslig", "Insentivet er frivillig å følge, mens påbudet krever et bredt politisk flertall"],
      explanation: "Riktig svar er skillet mellom valg og plikt. Skillet forklarer hvorfor to tiltak med samme formål kan gi helt ulikt resultat: en permisjonsandel som bortfaller om den ikke tas ut, virker fordi det koster å la være.",
    },
    {
      question: "Hva er måling som virkemiddel?",
      options: ["At staten pålegger virksomheter å telle og rapportere uten å påby et resultat", "At staten fastsetter en minsteandel som virksomhetene må oppfylle", "At staten samler inn statistikk til forskningsformål uten å offentliggjøre den", "At staten evaluerer egne tiltak etter at de har virket i noen år"],
      explanation: "Riktig svar er plikt til å telle og rapportere, uten krav om resultat. Alternativet om en minsteandel beskriver kvotering, og forskjellen er at kvotering fastsetter resultatet mens måling bare fastsetter at resultatet skal være kjent.",
    },
    {
      question: "Hvorfor er statsfeminisme både virkningsfull og begrenset?",
      options: ["Den disponerer lovverk og budsjetter, men kan ikke rette krav mot seg selv", "Den har bred folkelig støtte, men mangler faglig forankring i forskningen", "Den virker raskt i offentlig sektor, men har ingen virkning i privat sektor", "Den er billig å innføre, men dyr å opprettholde over tid"],
      explanation: "Riktig svar er at gjennomføringskraften følger av statens midler, mens grensen følger av at dagsordenen er statens egen. Krav som ikke tjener statens mål, har vanskeligere for å nå fram — og det er derfor forholdet mellom bevegelser og stat blir en egen sammenligningsdimensjon.",
    },
    {
      question: "Hva er den beste forklaringen på at to stater velger ulike virkemidler mot samme mål?",
      options: ["At de har ulik kapasitet — ulike registre, institusjoner og eierskap", "At de har ulike kulturelle tradisjoner for hva staten bør gjøre", "At de har ulikt utdanningsnivå i befolkningen", "At de har ulike internasjonale forpliktelser å ta hensyn til"],
      explanation: "Riktig svar er kapasitet. Kulturforklaringen er lett å skrive, vanskelig å belegge og lett å motsi, mens kapasitetsforklaringen står i institusjonene og kan etterprøves — og på eksamen lønner det siste seg.",
    },
    {
      question: "Hva er kapitlets hoveddrøftingsakse?",
      options: ["Om staten er drivkraften bak kjønnsendringene, eller reagerer på endringer som pågår", "Om de statlige tiltakene har vært mer omfattende i Japan enn i Folkerepublikken Kina", "Om kjønnspolitikk bør være et statlig eller et privat anliggende", "Om lovendringer er mer effektive enn kampanjer i å endre holdninger"],
      explanation: "Riktig svar er drivkraft mot respons. Aksen gjøres skarpere ved å skille mellom typer endring: rettighetsendringer kan staten framtvinge raskt gjennom lov, mens praksisendringer i arbeidsdeling og forventninger har staten hatt langt vanskeligere for å styre.",
    },
    {
      question: "Hvorfor er en motreaksjon et argument for at politikken hadde virkning?",
      options: ["Fordi man ikke reagerer på noe som ikke har skjedd", "Fordi motstanderne selv har erkjent at reformene var nødvendige", "Fordi motreaksjonen alltid kommer fra dem som taper på endringen", "Fordi motreaksjonen er dokumentert i flere av sensorveiledningene"],
      explanation: "Riktig svar er at en motreaksjon forutsetter at noe har endret seg. Å bruke motreaksjonen som bevis på at ingenting skjedde, snur momentet på hodet — den hører hjemme som moment fordi den viser at utviklingen ikke har vært en jevn kurve.",
    },
    {
      question: "Hva er den svakeste måten å nevne et tiltak på i et svar om statens rolle?",
      options: ["Å liste tiltaket sammen med flere andre uten å koble det til en endring", "Å beskrive tiltakets utforming i detalj før virkningen behandles", "Å oppgi hvilket politikkfelt tiltaket hører til før koblingen skrives", "Å nevne tiltaket uten å oppgi hvilket år det ble innført i landet"],
      explanation: "Riktig svar er listen uten kobling. Tre nevnte tiltak er mindre verdt enn ett forklart, og forskjellen ligger i om setningen har et «fordi» i seg — en kobling har en mekanisme, en oppramsing har ikke.",
    },
    {
      question: "Hvor bør statens rolle behandles i et sammenlignende svar om to land?",
      options: ["Inne i hver dimensjon, sammen med de forholdene den forklarer", "I et eget avsnitt til slutt, slik at helheten kommer tydelig fram", "I åpningen, slik at leseren vet hva svaret kommer til å legge vekt på", "I et eget avsnitt per land, slik at forskjellene mellom dem blir tydelige"],
      explanation: "Riktig svar er inne i dimensjonene. Alternativet med et eget avsnitt per land er den samme strukturfellen som rammer sammenligninger generelt: sammenligningssetningene får ikke plass noe sted, og avslutningen har plass til to av dem.",
    },
  ],
  'exfac03-east-1-4': [
    {
      question: "Hvordan er V2024-veiledningen selv organisert på spørsmålet om feministiske bevegelser?",
      options: ["Som en liste over likheter og deretter en liste over forskjeller", "Som tre avsnitt, ett for hvert av de tre landene som skal behandles", "Som en kronologisk gjennomgang fra 1960-tallet og fram til i dag", "Som en liste over de viktigste organisasjonene i hver av bevegelsene"],
      explanation: "Riktig svar er likheter og deretter forskjeller. Det er verdt å merke seg fordi veiledningen dermed viser strukturen sensor forventer — og den strukturen går etter dimensjoner, ikke etter land.",
    },
    {
      question: "Hvilken av disse fører V2024-veiledningen opp som en likhet mellom bevegelsene?",
      options: ["Felles press fra lavfertilitetssamfunn og reproduktivt dilemma", "Felles organisasjonsform med små autonome grupper i alle tre landene", "Felles forhold til staten, med krav rettet utenfra i alle tre tilfellene", "Felles opphav i arbeiderbevegelsen på 1980-tallet"],
      explanation: "Riktig svar er det felles presset fra lavfertilitet og reproduktivt dilemma. De tre andre alternativene beskriver forhold veiledningen fører opp som **forskjeller** — organisasjonsform, forhold til staten og forhold til andre bevegelser skiller de tre, de forener dem ikke.",
    },
    {
      question: "Hva var Uman Ribu?",
      options: ["Den japanske kvinnefrigjøringsbevegelsen som vokste fram rundt 1970", "Den koreanske folkelige bevegelsen på 1970- og 1980-tallet", "Den statsknyttede masseorganisasjonen for kvinner i Folkerepublikken Kina", "Den samtidige sørkoreanske retningen som organiserer seg digitalt"],
      explanation: "Riktig svar er den japanske bevegelsen rundt 1970. Den vokste ut av et brudd med Det nye venstre og studentbevegelsen og satte kropp, seksualitet og selvbestemmelse i sentrum. Bevegelsen er et historisk fenomen navngitt i veiledningen, ikke en pensumforfatter.",
    },
    {
      question: "Hva var Minjung Undong?",
      options: ["Den brede koreanske folkelige bevegelsen på 1970- og 1980-tallet", "Den japanske kvinnefrigjøringsbevegelsen som vokste fram rundt 1970", "Den kinesiske masseorganisasjonen knyttet til statsapparatet", "Den transnasjonale kampanjen mot seksuell trakassering"],
      explanation: "Riktig svar er den brede koreanske bevegelsen. Koreanske kvinnebevegelser innrettet seg mot arbeiderbevegelsen innenfor denne rammen på 1980-tallet, og kravene handlet om lønn, arbeidstid og organisasjonsrett — altså om **allianse**, ikke om brudd.",
    },
    {
      question: "Hva kjennetegner 6B4T?",
      options: ["En samtidig sørkoreansk retning som avviser ekteskap og reproduksjon politisk", "En japansk retning fra 1970-tallet med vekt på kropp og selvbestemmelse", "En kinesisk retning fra reformtiden med hovedvekt på økonomisk selvstendighet", "En transnasjonal kampanje spredt gjennom sosiale medier"],
      explanation: "Riktig svar er den samtidige sørkoreanske retningen. Den ligner Uman Ribu i vekten på kropp og selvbestemmelse, og de to er likevel skilt av et halvt århundre og av helt ulike midler — det er nettopp «ulike varianter» veiledningen viser til.",
    },
    {
      question: "Hva er den mest produktive sammenligningsdimensjonen i kapitlet?",
      options: ["Posisjoneringen: hvem bevegelsen definerer seg i forhold til", "Størrelsen: hvor mange medlemmer bevegelsen har hatt over tid", "Alderen: hvor lenge bevegelsen har eksistert i sitt eget land", "Temaet: hvilke saker bevegelsen har arbeidet mest med"],
      explanation: "Riktig svar er posisjoneringen, fordi den gir tre klart ulike svar — brudd, integrasjon og allianse — og fordi den forklarer programmene. En dimensjon som forklarer, er mer verdt enn en som bare beskriver.",
    },
    {
      question: "Hvordan beskriver materialet den japanske bevegelsens forhold til andre bevegelser?",
      options: ["Som et brudd med Det nye venstre og med studentbevegelsen", "Som en allianse med arbeiderbevegelsen i industrien", "Som en integrasjon i en statsledet politisk bevegelse", "Som en selvstendig utvikling uten kontakt med andre bevegelser"],
      explanation: "Riktig svar er bruddet. Kritikken var rettet innover, mot mannlige meningsfeller som delte den politiske analysen uten å praktisere den internt — og et brudd med de nærmeste allierte forklarer hvorfor bevegelsen ble autonom og organisert i små grupper.",
    },
    {
      question: "Hvordan beskriver materialet kinesiske feministers forhold til den sosialistiske revolusjonen?",
      options: ["Som en første integrasjon og et senere brudd", "Som et brudd fra første stund og en varig motstand", "Som en allianse mellom to selvstendige bevegelser", "Som en gradvis tilnærming som fortsatt pågår"],
      explanation: "Riktig svar er integrasjon og senere brudd. Integrasjon gir gjennomslag og koster selvstendighet — og prisen er nettopp det det senere bruddet handler om. Skillet mot allianse er at en allianse forutsetter to selvstendige parter.",
    },
    {
      question: "Hva er en dimensjonsmatrise?",
      options: ["Et kladderutenett med dimensjoner nedover og enheter bortover", "En oversikt over hvilke temaer som har vært prøvd i hver termin", "En tabell som settes inn i selve besvarelsen for å spare ord", "En liste over momenter rangert etter hvor sterke de er"],
      explanation: "Riktig svar er kladderutenettet. Matrisen viser om du har dekning i alle cellene, avslører hvilke dimensjoner som gir forskjeller, og gir disposisjonen ferdig. Den skal aldri stå i selve besvarelsen — den skrives om til prosa.",
    },
    {
      question: "Hva kjennetegner en produktiv sammenligningsdimensjon?",
      options: ["Den gir ulike svar for enhetene, og du har dekning for alle svarene", "Den er hentet fra sensorveiledningens egen liste over likheter", "Den gjelder alle tre enhetene i hele perioden uten unntak", "Den kan besvares uten å måtte oppgi noen tidsangivelse"],
      explanation: "Riktig svar er ulike svar med dekning. En dimensjon der alle svarene er like, er ikke gal — men den gir én setning i åpningen, ikke et eget avsnitt. En dimensjon uten dekning gir ingenting.",
    },
    {
      question: "Hvor hører en dimensjon hjemme når alle enhetene svarer likt på den?",
      options: ["I åpningen eller i avslutningen, som en konstatert likhet", "I et eget avsnitt, siden likheter er like viktige som forskjeller", "Utenfor svaret, siden den ikke bidrar til sammenligningen", "I et sluttavsnitt der alle fellestrekkene samles til slutt"],
      explanation: "Riktig svar er i åpningen eller avslutningen. Fellestrekket er ferdig sagt i én setning, mens en forskjell krever at alle enhetene behandles — og det er ordbudsjettet som avgjør plasseringen, ikke hvor viktig punktet er.",
    },
    {
      question: "Hva menes med kulturell kvinnefiendtlighet?",
      options: ["Nedvurderende forestillinger som virker gjennom språk, medier og forventninger", "Lovbestemmelser som formelt behandler kvinner og menn ulikt", "Vold som rammer kvinner i nære relasjoner og på arbeidsplassen", "Manglende representasjon av kvinner i politiske og økonomiske beslutningsorganer"],
      explanation: "Riktig svar er forestillingene som virker gjennom språk og forventninger. Skillet mot institusjonell ulikhet er at den siste ligger i ordninger og kan endres med regler, mens den første endres langsommere og gjennom offentlig debatt.",
    },
    {
      question: "Hva er det reproduktive dilemmaet?",
      options: ["Å møte krav om full yrkesdeltakelse og om barn samtidig", "Å måtte velge mellom å få barn tidlig eller sent i livet", "At fødselstallene faller mens befolkningen samtidig aldres", "At barnehagetilbudet ikke dekker etterspørselen i storbyene"],
      explanation: "Riktig svar er de to samtidige kravene. Alternativet om fallende fødselstall beskriver lavfertilitet, som er et demografisk trekk ved samfunnet — dilemmaet er den enkeltes situasjon som skaper det, og skillet forklarer hvorfor bevegelser og stater reagerer ulikt.",
    },
    {
      question: "Hva sier V2024-veiledningen om de transnasjonale koblingene?",
      options: ["At de er begynnende og har kommet i nyere tid", "At de har gjort bevegelsene like på tvers av landene", "At de har eksistert siden 1970-tallet i alle tre landene", "At de i hovedsak går gjennom formelle organisasjoner"],
      explanation: "Riktig svar er at koblingene er begynnende og nye. Å skrive at bevegelsene er sammenvevd, er å legge noe til kilden — og det ulike gjennomslaget den transnasjonale kampanjen mot trakassering fikk, taler mot en slik lesning.",
    },
    {
      question: "Hva skiller et fellestrekk fra en transnasjonal kobling?",
      options: ["En kobling forutsetter faktisk forbindelse, et fellestrekk gjør ikke det", "En kobling er nyere, mens et fellestrekk går lenger tilbake i tid", "En kobling gjelder to land, mens et fellestrekk gjelder alle tre", "En kobling er dokumentert, mens et fellestrekk bare er antatt"],
      explanation: "Riktig svar er at koblingen krever faktisk forbindelse. To bevegelser kan ligne hverandre uten å ha kontakt, fordi de møter like samfunnsforhold — og å skille de to er en presisjon som er verdt et moment.",
    },
    {
      question: "Hva er skillet mellom likhetslinjen og forskjellslinjen i kjønnsideologi?",
      options: ["Om kjønnene i hovedsak er like og skal behandles likt, eller har ulike behov", "Om kravene rettes mot staten eller mot arbeidsgiverne i det private næringslivet", "Om bevegelsen organiserer seg i store eller i små enheter", "Om bevegelsen er samtidig eller tilhører en tidligere periode"],
      explanation: "Riktig svar er de to begrunnelsene for likestilling. Skillet går på tvers av landene og ikke mellom dem, og begge linjer møter sin egen kritikk — likhetslinjen for at likhet i praksis kan bety «lik mannen», forskjellslinjen for at den kan låse fast forestillingene den skulle utfordre.",
    },
    {
      question: "Hva sier veiledningen om forholdet mellom bevegelsene og demokratibevegelser?",
      options: ["At både japanske og koreanske bevegelser var knyttet til demokratibevegelser", "At bare den koreanske bevegelsen var knyttet til en bredere demokratibevegelse", "At ingen av bevegelsene hadde forbindelse til krav om politisk åpning", "At alle tre bevegelsene sprang ut av demokratibevegelser i sine land"],
      explanation: "Riktig svar er at både japanske og koreanske bevegelser var knyttet til demokratibevegelser. Det er en likhet på tvers av en forskjell — de to sto i ulikt forhold til andre bevegelser og var likevel del av et bredere krav om politisk åpning.",
    },
    {
      question: "Hva bør avslutningen i en sammenligning gjøre?",
      options: ["Si hva forskjellene skyldes, i stedet for å liste dem på nytt", "Oppsummere de viktigste likhetene og forskjellene i rekkefølge", "Peke på hvilken av enhetene som kommer best ut av sammenligningen", "Vise til hvilke deler av pensum sammenligningen bygger på"],
      explanation: "Riktig svar er å forklare hva forskjellene skyldes. En oppsummering gjentar det leseren nettopp har lest, og en rangering av landene er dessuten noe boka og et svar ikke skal gjøre — spørsmålet er hva som forklarer forskjellene.",
    },
    {
      question: "Hva er den beste forklaringen på forskjellene mellom de tre bevegelsene?",
      options: ["Hvilke andre aktører som fantes å alliere seg med eller bryte med", "Hvor ulike de kulturelle tradisjonene i de tre landene er", "Hvor lenge hver av bevegelsene har eksistert i sitt land", "Hvilke internasjonale forbindelser bevegelsene har hatt"],
      explanation: "Riktig svar er hvilke andre aktører som fantes. Alle tre retter seg mot institusjonell ulikhet, mot kulturell kvinnefiendtlighet og mot kjønnsbasert vold, så målene forklarer lite — og kulturforklaringen er både vanskelig å belegge og lett å motsi.",
    },
    {
      question: "Hva er kostnaden ved å skrive en sammenligning land for land?",
      options: ["Sammenligningssetningene får ikke plass noe sted i teksten", "Svaret blir lengre enn ordgrensen tillater i denne sjangeren", "Momentene blir færre enn bestått-gulvet krever i veiledningen", "Leseren får inntrykk av at ett av landene er viktigere enn de andre"],
      explanation: "Riktig svar er at sammenligningene ikke får plass. Når du er ferdig med den første enheten, har du ikke den andre inne ennå, og avslutningen har plass til to setninger og ikke til fem sammenligninger. Kunnskapen er den samme; sammenligningene forsvinner.",
    },
  ],
  'exfac03-east-1-5': [
    {
      question: "Hva skiller en ulikhetsform fra en forskjell?",
      options: ["Ulikhetsformen er et mønster med en mekanisme som gjør at det gjentar seg", "Ulikhetsformen er målbar i statistikk, mens forskjellen bare er observerbar", "Ulikhetsformen gjelder grupper, mens forskjellen gjelder enkeltpersoner", "Ulikhetsformen er politisk omstridt, mens forskjellen er faglig ubestridt"],
      explanation: "Riktig svar er mønsteret med en mekanisme. Et svar som beskriver forskjeller uten mekanisme, har levert en observasjon; et svar som sier hvordan mønsteret opprettholdes, har levert et moment.",
    },
    {
      question: "Hva er den viktigste klasseaksen i moderne østasiatiske samfunn ifølge kapitlet?",
      options: ["Ansettelsesformen, altså om goder følger kontrakten framfor arbeidets innhold", "Yrket, altså hvilken bransje man arbeider i og hvilken stillingstittel man har", "Utdanningsnivået, altså hvor mange år man har gått på skole", "Bostedet, altså om man bor i en storby eller i et distrikt"],
      explanation: "Riktig svar er ansettelsesformen. To personer i samme yrke kan ha helt ulike vilkår, og det er kontraktstypen som avgjør pensjon, vern og opprykk — derfor overser et svar som bygger på yrkeskategorier alene, ofte den ulikheten som betyr mest.",
    },
    {
      question: "Hva skiller klasse fra fattigdom?",
      options: ["Klasse er en posisjon, mens fattigdom er et nivå", "Klasse gjelder familier, mens fattigdom gjelder enkeltpersoner", "Klasse er arvelig, mens fattigdom kan ramme hvem som helst", "Klasse måles i formue, mens fattigdom måles i inntekt"],
      explanation: "Riktig svar er skillet mellom posisjon og nivå. To personer kan ha lik inntekt i dag og helt ulike utsikter, fordi den ene har en stilling som gir opprykk og pensjon — og det er posisjonen som gjør klasse til en ulikhetsform.",
    },
    {
      question: "Hvorfor må tall om etnisk ulikhet brukes med forbehold?",
      options: ["Fordi kategoriene er definert av noen, slik at usikkerheten gjelder hva som telles", "Fordi statistikken på dette feltet oppdateres sjeldnere enn annen offentlig statistikk", "Fordi utvalgene er for små til å gi pålitelige anslag for små grupper", "Fordi respondentene ofte oppgir feil opplysninger om egen bakgrunn"],
      explanation: "Riktig svar er at kategoriene er definert av noen. Alternativet om små utvalg beskriver måleusikkerhet, altså hvor nøyaktig noe er talt — her gjelder usikkerheten hva som er talt, og å se forskjellen er et tegn på faglig modenhet.",
    },
    {
      question: "Hva menes med miljøulikhet?",
      options: ["At miljøbelastninger og miljøgoder fordeler seg systematisk ulikt mellom grupper", "At miljøet er dårligere i noen deler av regionen enn i andre", "At noen land har strengere miljøregler enn nabolandene sine", "At klimaendringene rammer denne regionen hardere enn andre verdensdeler gjør"],
      explanation: "Riktig svar er den ulike fordelingen mellom mennesker. Et miljøproblem er en tilstand i naturen, mens miljøulikhet er en fordeling — og et svar som bruker miljø som ulikhetsfokus, må hele tiden si hvem som bærer hva.",
    },
    {
      question: "Hva er robust i framstillingen av miljø i dette emnet?",
      options: ["At menneskelig aktivitet har påvirket alle økosystemer", "At de fattigste alltid rammes hardest av miljøendringer", "At industrialiseringen i regionen er hovedårsaken til utslippene", "At miljøtiltak går ut over den økonomiske veksten på kort sikt"],
      explanation: "Riktig svar er at menneskelig aktivitet har påvirket alle økosystemer. Det er utgangspunktet og ikke konklusjonen; det som er faglig omstridt, er hvordan ansvaret skal fordeles og hvilke tiltak som er riktige.",
    },
    {
      question: "Hva handler by–land-skillet om, ut over geografisk avstand?",
      options: ["Fordelingen av ressurser og rettigheter mellom byområder og distrikter", "Reisetiden mellom hjemsted og nærmeste større arbeidsmarked", "Forskjellen i klima og naturforhold mellom kyst og innland", "Andelen av befolkningen som arbeider i jordbruket framfor i industrien"],
      explanation: "Riktig svar er fordelingen av ressurser og rettigheter. Skillet kan bestå selv når avstanden krymper, og det er derfor bedre transport ikke uten videre reduserer det — særlig der rettigheter følger registrering framfor faktisk bosted.",
    },
    {
      question: "Hva kjennetegner arbeidsvandring, til forskjell fra flytting?",
      options: ["At tilknytningen til opprinnelsesstedet består mens man arbeider i byen", "At flyttingen skjer sesongvis og alltid følger jordbruksåret", "At hele familien flytter samlet til det nye arbeidsstedet", "At arbeidsvandring skjer over landegrensene, mens flytting skjer innenfor landet"],
      explanation: "Riktig svar er den doble tilknytningen. Det er nettopp den som skaper ulikheten: omsorgsansvar flyttes til besteforeldre, familier splittes, og rettigheter kan følge registreringen i hjemdistriktet framfor bostedet i byen.",
    },
    {
      question: "Hva er skillet mellom et fordelingsspørsmål og et rettighetsspørsmål?",
      options: ["Rettighetsspørsmålet gjelder hva loven gir, fordelingsspørsmålet hva som faktisk skjer", "Rettighetsspørsmålet gjelder enkeltpersoner, mens fordelingsspørsmålet gjelder grupper", "Rettighetsspørsmålet er rettslig, mens fordelingsspørsmålet er politisk", "Rettighetsspørsmålet er avklart i lovverket, fordelingsspørsmålet er alltid åpent"],
      explanation: "Riktig svar er skillet mellom lovens innhold og faktisk fordeling. Skillet har praktiske følger: rettighetsproblemer kan løses med lovendring, mens fordelingsproblemer krever ressursoverføring eller endring i hvordan godene er knyttet til posisjoner.",
    },
    {
      question: "Hvorfor er privat tilleggsundervisning et fordelingsspørsmål?",
      options: ["Fordi familiens økonomi avgjør resultatet i et formelt likt skolesystem", "Fordi tilbudet bare finnes i de største byene i regionen", "Fordi den offentlige skolen har ulikt pensum i de ulike distriktene i landet", "Fordi elevene selv velger om de vil delta i undervisningen"],
      explanation: "Riktig svar er at familiens økonomi virker inn i et system som formelt behandler alle likt. Nettopp derfor er problemet vanskelig å løse med lovendringer: ingen regel brytes, og ulikheten ligger utenfor det formelle systemet.",
    },
    {
      question: "Hva er forskjellen på relativ og absolutt ulikhet?",
      options: ["Absolutt gjelder nivået hos den dårligst stilte, relativ gjelder avstanden opp", "Absolutt gjelder inntekt, mens relativ gjelder formue og eiendom", "Absolutt måles i penger, mens relativ måles i livssjanser", "Absolutt ulikhet gjelder ett land, mens relativ gjelder sammenligning mellom land"],
      explanation: "Riktig svar er nivå mot avstand. De to kan gå i hver sin retning samtidig, og det forklarer hvorfor to framstillinger av samme samfunn kan sprike uten at noen av dem tar feil — de måler ikke det samme.",
    },
    {
      question: "Hva måler sosial mobilitet?",
      options: ["I hvilken grad en persons posisjon avhenger av foreldrenes", "Hvor ofte folk skifter arbeidssted i løpet av yrkeslivet", "Hvor mange som flytter mellom by og land i løpet av et år", "Hvor stor andel av befolkningen som tar høyere utdanning"],
      explanation: "Riktig svar er avhengigheten av foreldrenes posisjon. Mobilitet måler hvor varig en ulikhet er, og den kan være lav i et samfunn med rask økonomisk vekst — derfor sier den noe om mekanismen og ikke bare om størrelsen.",
    },
    {
      question: "Hva bør avgjøre valget av fokus i en valgoppgave om ulikhet?",
      options: ["Hvor mange momenter med konkret eksempel du har på hvert alternativ", "Hvilket alternativ som er mest omdiskutert i offentligheten akkurat nå", "Hvilket alternativ som gir størst mulighet til å vise egen mening", "Hvilket alternativ som er nevnt først i selve oppgaveteksten"],
      explanation: "Riktig svar er momenttellingen. Terskelen følger av bestått-gulvet i V2021-veiledningen: under tre momenter med eksempel, velg noe annet. Et valg tatt på interesse koster en tredel av karakteren fordi de tre svarene teller likt.",
    },
    {
      question: "Hva gjør du hvis du oppdager etter tolv minutter at du valgte feil alternativ?",
      options: ["Fullfører valget du tok, siden et bytte koster mer enn det gir", "Bytter umiddelbart, siden riktig alternativ alltid gir bedre svar", "Skriver kort om begge alternativene for å dekke deg inn", "Ber om mer tid til det aktuelle spørsmålet i besvarelsen"],
      explanation: "Riktig svar er å fullføre. Et middels svar på det du valgte, er nesten alltid bedre enn et hastverkssvar på det du skulle ha valgt. Unntaket er hvis du har misforstått selve oppgaven — da er det ikke et dårlig valg, men feil oppgave.",
    },
    {
      question: "Hva menes med at to ulikhetsakser forsterker hverandre?",
      options: ["At kombinasjonen skaper en situasjon ingen av aksene forklarer alene", "At begge aksene virker samtidig og bare legger seg oppå hverandre", "At den ene aksen alltid kommer før den andre i tid", "At begge aksene rammer de samme geografiske områdene"],
      explanation: "Riktig svar er at kombinasjonen skaper noe nytt. Alternativet om at effektene legger seg oppå hverandre, er den nære fella: hvis det var slik, ville det holdt å behandle aksene hver for seg — og å bruke poenget i et svar krever et konkret eksempel.",
    },
    {
      question: "Hvordan bør et svar behandle et felt der statlige og faglige framstillinger spriker?",
      options: ["Ved å gjengi posisjonene med avsender og overlate veiingen til leseren", "Ved å velge den framstillingen som har flest tilhengere i forskningsmiljøet", "Ved å utelate feltet, siden det ikke kan behandles nøytralt", "Ved å gjengi den statlige framstillingen, siden den er offisiell"],
      explanation: "Riktig svar er å gjengi posisjonene med avsender. Oppgaven ber om en redegjørelse for ulikheten, ikke om en dom over et lands politikk, og et svar som viser hvem som holder hvilken posisjon, står sterkere enn ett som velger side uten belegg.",
    },
  ],
  'exfac03-east-2-1': [
    {
      question: "Hva ligger i påstanden om at Øst-Asia er en sammenhengende region?",
      options: ["At det finnes forbindelser mellom samfunnene som gjør det faglig meningsfullt å behandle dem under ett", "At samfunnene i området er like hverandre på de fleste samfunnsområder, og derfor kan behandles som ett tilfelle", "At menneskene i området selv oppfatter seg som medlemmer av ett og samme fellesskap, og sier det", "At statene i området har inngått formelle avtaler om regionalt samarbeid og felles institusjoner"],
      explanation: "Sammenheng krever forbindelser som har vart og satt spor, ikke likhet. Distraktoren om likhet tester den vanligste sammenblandingen: et område kan være svært heterogent og likevel tett sammenvevd. Distraktoren om selvoppfatning tester skillet mellom region som analytisk kategori og region som selvforståelse, og distraktoren om avtaler forveksler kulturell og historisk sammenheng med mellomstatlig organisasjon.",
    },
    {
      question: "Hva er forskjellen på å behandle Øst-Asia som analytisk kategori og som selvforståelse?",
      options: ["Den analytiske kategorien er forskerens verktøy; selvforståelsen er en påstand om hva menneskene i området mener", "Den analytiske kategorien gjelder fortiden, mens selvforståelsen bare kan gjelde forhold etter andre verdenskrig", "Den analytiske kategorien er den politisk nøytrale varianten, mens selvforståelsen alltid er nasjonalistisk farget", "Den analytiske kategorien bygger på geografi, mens selvforståelsen bygger på økonomiske forbindelser i samtiden"],
      explanation: "Skillet går mellom et verktøy som vurderes etter om det forklarer godt, og en empirisk påstand om folks oppfatninger som må belegges på annet vis. De tre andre svarene tester at skillet ikke er et skille i tid, i politisk temperatur eller i type data.",
    },
    {
      question: "Hva innebar et tributtforhold til det kinesiske hoffet?",
      options: ["Sendebud og gaver, formell anerkjennelse av herskeren tilbake, og handel innenfor rammen av forholdet", "Direkte kinesisk forvaltning av området, med utsendte embetsmenn som styrte lokalt i keiserens navn", "En militærallianse der partene forpliktet seg til å komme hverandre til unnsetning ved angrep utenfra", "En avtale mellom likestilte stater om gjensidig frihandel og gjensidig anerkjennelse av grensene"],
      explanation: "Tributtforholdet var en rangordning med anerkjennelse og handel, ikke fremmedstyre. Distraktoren om direkte forvaltning tester den vanligste fella, nemlig å lese tributtsystemet som et kolonisystem; distraktoren om likestilte stater tester den motsatte fella, å lese det som en moderne suverenitetsordning.",
    },
    {
      question: "Hva følger av at kinesiske skrifttegn ble tatt i bruk i både japansk og koreansk?",
      options: ["At samfunnene delte skrift og et stort lånt ordforråd, ikke at språkene er i slekt", "At japansk, koreansk og kinesisk hører til samme språkfamilie og har felles opphav", "At de tre språkene i praksis kunne forstås av lesekyndige på tvers av landegrensene i tale", "At skriften er det eneste kulturtrekket som faktisk spredte seg mellom de tre samfunnene"],
      explanation: "Skriftfellesskap er et kontaktfenomen, språkfellesskap ville vært et slektskapsfenomen, og de tre språkene tilhører ulike familier. Distraktoren om felles opphav er den letteste faktafeilen i hele klyngen, og distraktoren om muntlig forståelse blander skrift og tale.",
    },
    {
      question: "Hvilken vei spredte buddhismen seg innenfor regionen, slik momentlisten i V2021-veiledningen legger det fram?",
      options: ["Fra Kina via Koreahalvøya til Japan", "Fra Japan via Koreahalvøya og videre inn i det kinesiske kjerneområdet i løpet av middelalderen", "Direkte fra India til hvert av de tre samfunnene, uavhengig av hverandre og omtrent samtidig", "Fra Koreahalvøya til Kina først, og deretter videre østover til de japanske øyene"],
      explanation: "Retningen er en del av argumentet: den viser forbindelse mellom samfunnene og ikke bare felles opphav i India. Distraktoren om uavhengig spredning fra India er den som ville tømt momentet for argumentkraft, siden tre uavhengige innføringer ikke sier noe om kontakt mellom de tre.",
    },
    {
      question: "Hva går kritikken av «konfucianske verdier» som forklaringsstørrelse ut på?",
      options: ["At innholdet varierer mellom perioder, samfunnslag og land, og at det derfor ikke er én størrelse", "At konfucianismen aldri fikk noen praktisk betydning i regionen, verken i styre eller familieliv", "At tradisjonen bare fantes i Kina, og at spredningen til nabolandene er en senere konstruksjon", "At verdiene er for gamle til å kunne si noe om samfunn etter industrialiseringen begynte"],
      explanation: "Kritikken retter seg mot bruken av uttrykket som én felles forklaringsstørrelse, ikke mot at tradisjonen har eksistert eller betydd noe. Distraktoren om at tradisjonen var uten betydning gjengir en langt sterkere påstand enn kritikken faktisk fremmer, og det er nettopp den overdrivelsen som gjør et svar upresist.",
    },
    {
      question: "Hva var programmet om å «forlate Asia» et argument om?",
      options: ["Om selvforståelse — en sentral aktør i regionen avviste selv å høre til et asiatisk fellesskap", "Om geografi — en plan om å flytte japansk hovedstad og forvaltning nærmere europeiske markeder", "Om økonomi — et forslag om å stanse all handel med naboene og legge den om til Europa alene", "Om religion — en politikk for å erstatte buddhismen med kristendom etter europeisk modell"],
      explanation: "Programmet er et sterkt moment mot regionen som selvforståelse og et svakt moment mot regionen som analytisk kategori, og den presisjonen er poenget. De tre andre svarene leser programmet bokstavelig som geografi, handelspolitikk eller religionspolitikk.",
    },
    {
      question: "Hvilken av disse påstandene er et robust historisk funn, ikke en omstridt vurdering?",
      options: ["Korea var under japansk kolonistyre fra 1910 til 1945", "Kolonitiden var samlet sett en økonomisk fordel for det koreanske samfunnet på lang sikt", "Regionens felles kulturarv veier tyngre enn konflikthistorien når regionspørsmålet skal avgjøres", "Konfucianske verdier er den viktigste forklaringen på den økonomiske veksten i regionen"],
      explanation: "Kolonistyrets tidsrom er dokumentert og skal skrives i indikativ uten forbehold. De tre andre er vurderinger der forsvarlige posisjoner står mot hverandre, og de skal skrives med avsender og begrunnelse.",
    },
    {
      question: "Hva kjennetegner en essensialiserende framstilling av et kulturtrekk?",
      options: ["At trekket framstilles som en indre egenskap ved mennesker i stedet for som en historie de står i", "At trekket beskrives med tall og andeler i stedet for med eksempler fra kilder og tekster", "At trekket knyttes til en bestemt periode og et bestemt samfunnslag i stedet for til hele regionen", "At trekket sammenlignes med tilsvarende trekk i Europa i stedet for å behandles på egne premisser"],
      explanation: "Essensialisering gjør en historisk formet praksis til en egenskap, og forklaringen blir sirkulær. Å knytte et trekk til periode og samfunnslag er det motsatte av essensialisering, og nettopp den presiseringen kritikken etterlyser.",
    },
    {
      question: "Hva er indre heterogenitet et argument om?",
      options: ["At forskjellene inne i det antatte fellesskapet er store — språkfamilier, statsformer, økonomi og religiøse landskap", "At regionen mangler enhver forbindelse mellom samfunnene, historisk så vel som i dag", "At forskerne er uenige seg imellom om hvor grensene for regionen skal trekkes rent geografisk", "At hvert enkelt land i regionen er internt ensartet, mens forskjellene ligger mellom landene"],
      explanation: "Heterogenitet handler om forskjeller innenfor det påstått felles, og det er noe annet enn fravær av forbindelse: to samfunn kan være svært ulike og samtidig tett sammenvevd. Svaret om at hvert land er ensartet innvendig, snur begrepet: variasjonen inne i hvert land er en del av poenget.",
    },
    {
      question: "Hva er den korrekte arkitekturen i sjangeren argumenter for og mot?",
      options: ["Åpning som leser spørsmålet, minst ett moment hver vei, kobling, veiing og begrunnet landing", "En fullstendig gjennomgang av den ene siden, deretter en kort merknad om at det finnes motargumenter", "En liste over alle relevante momenter i den rekkefølgen de står i pensum, uten videre kommentar", "En innledning, tre avsnitt med bakgrunnshistorie, og en avslutning som oppsummerer innledningen"],
      explanation: "Begge sider, kobling og en begrunnet landing er det som kreves; å nevne motsiden i én setning er nettopp mangelen ved et ensidig svar. Svaret med tre avsnitt bakgrunnshistorie beskriver et bakgrunnstungt svar, som bruker ordbudsjettet på det som gir minst uttelling.",
    },
    {
      question: "Hvilken avslutning er en begrunnet landing?",
      options: ["«Regionen henger sammen analytisk, men ikke som selvforståelse, fordi forbindelsene er dokumenterte mens identiteten ikke er det»", "«Som vi har sett finnes det altså argumenter både for og mot at Øst-Asia er én sammenhengende region»", "«Det kommer an på hvordan man ser det, og begge sider har gode poenger som er verdt å ta med seg»", "«Spørsmålet er for vanskelig til at det kan avgjøres på den plassen en eksamensbesvarelse gir»"],
      explanation: "En landing sier hva du mener og hvorfor; de tre andre oppsummerer, unnviker eller avviser oppgaven. Svaret som sier at det kommer an på uten å si hva det kommer an på, har ikke veid noe, og det er en av de vanligste avslutningene i tynne besvarelser.",
    },
    {
      question: "Hva er en kobling mellom sidene i en drøfting av regional sammenheng?",
      options: ["En setning som viser at et argument for og et argument mot henger sammen, for eksempel at konflikten forutsetter nærheten", "En setning som slår fast at det finnes både likheter og forskjeller mellom landene i regionen", "En henvisning til at pensum behandler begge sidene, slik at sensor ser at stoffet er lest", "En oppsummering som teller opp hvor mange momenter som ble ført opp på hver side"],
      explanation: "Koblingen viser at materialet på de to sidene hører sammen, og det er dette grepet som løfter en drøfting. Å konstatere at det finnes likheter og forskjeller er den tomme varianten, fordi den kunne stått i et hvilket som helst svar.",
    },
    {
      question: "Hvor mange momenter krever V2021-veiledningen som minimum for bestått på hvert av de tre spørsmålene?",
      options: ["Tre", "Ett, forutsatt at det er grundig utviklet med både eksempel og motforestilling", "Fem, som også er det høyeste antallet ordgrensen gir plass til i et fullverdig svar", "Ti, siden det er antallet momenter en fullstendig momentliste i veiledningen inneholder"],
      explanation: "Bestått-gulvet er tre momenter, og det står i V2021-veiledningen for den terminen. Fem er takdrøftingen som følger av ordbudsjettet, ikke et krav, og det er en nær distraktor fordi begge tallene brukes i boka om samme spørsmål.",
    },
    {
      question: "Hva består et fullverdig moment av?",
      options: ["Påstand, utdyping og ett konkret eksempel", "Et stikkord som navngir fenomenet, plassert der det hører hjemme i disposisjonen", "En påstand og to eksempler, slik at eksempelkravet oppfylles med god margin", "En definisjon av et begrep, etterfulgt av en henvisning til hvor begrepet står i pensum"],
      explanation: "De tre leddene er hele definisjonen, og ordbudsjettet gir mellom hundre og hundre og åtti ord per moment — nok til ett eksempel, ikke to. Svaret med to eksempler er en nær distraktor nettopp fordi det høres grundigere ut, men i praksis går plassen ut over det tredje momentet.",
    },
    {
      question: "Hva betyr mantraet «tre momenter utviklet slår ti nevnt»?",
      options: ["At få momenter med påstand, utdyping og eksempel gir mer uttelling enn en lang oppramsing", "At antallet momenter er uten betydning så lenge språket i besvarelsen er godt", "At en besvarelse aldri bør inneholde mer enn tre momenter, uansett hvor mye plass som er igjen", "At momentene bør telles opp for sensor i innledningen, slik at strukturen er tydelig fra start"],
      explanation: "Mantraet retter seg mot oppramsingen: det er utviklingen av momentet som viser forståelse. Svaret om at man aldri bør ha mer enn tre momenter er en nær distraktor, siden tre er gulvet og ikke taket — med 800 ord er fire momenter fullt mulig.",
    },
    {
      question: "Hvorfor er kolonitiden og krigene i regionen vanskelige å plassere i én kolonne i en drøfting av regional sammenheng?",
      options: ["Fordi de både er konfliktmomenter og belegg for at samfunnene sto i tett kontakt med hverandre", "Fordi det er uklart om hendelsene faktisk fant sted, og forskerne strides om dateringene", "Fordi de tilhører en periode som ligger utenfor det emnet behandler, og derfor ikke skal nevnes", "Fordi de bare angår to av landene i regionen og derfor ikke sier noe om regionen som helhet"],
      explanation: "Konflikt forutsetter kontakt, og et svar som ser begge lesningene har allerede koblingen mellom sidene på plass. Distraktoren om at hendelsene er usikre er gal: at koloniseringen og krigene fant sted, er robust, og det er bare vurderingen av dem som er omstridt.",
    },
    {
      question: "Hvordan skal en omstridt vurdering skrives i en besvarelse?",
      options: ["Med avsender og grunnlag, slik at leseren ser hvem som holder posisjonen og hvorfor", "I indikativ, på samme måte som et dokumentert historisk hendelsesforløp skrives", "Med forbehold i hver setning, slik at ingen posisjon kommer tydelig fram i teksten", "Uten omtale i det hele tatt, siden en eksamensbesvarelse bare skal inneholde sikker kunnskap"],
      explanation: "Omstridte vurderinger skal ha avsender, mens robuste funn skrives i indikativ; å bytte om på de to er den vanligste nøytralitetsfeilen i denne klyngen. Svaret om forbehold i hver setning beskriver falsk balanse, som svekker svaret i stedet for å gjøre det forsiktig.",
    },
  ],
  'exfac03-east-2-2': [
    {
      question: "Hva er forskjellen på et skriftsystem og et språk?",
      options: ["Språket er det som snakkes; skriftsystemet er én måte å representere det på", "Skriftsystemet er den formelle varianten av språket, brukt i forvaltning og lærdom", "Språket er den muntlige delen av skriftsystemet, og de to endrer seg alltid i takt", "Skriftsystemet er språket slik det brukes i dag, mens språket er den historiske formen"],
      explanation: "Samme språk kan skrives med flere systemer, og samme system kan brukes til flere språk — nettopp det som skjedde i Øst-Asia. Distraktoren om at de endrer seg i takt tester en vanlig sammenblanding: skriften endres ved vedtak, språket endrer seg av seg selv.",
    },
    {
      question: "Hvorfor lot kinesiske skrifttegn seg låne til språk som ikke er i slekt med kinesisk?",
      options: ["Fordi tegnene i hovedsak står for betydningsenheter, slik at hvert språk kunne gi dem sin egen lydform", "Fordi de tre språkene har omtrent samme lydsystem, slik at tegnene passet uten tilpasning", "Fordi tegnene ble laget som et internasjonalt hjelpespråk for handel mellom samfunnene i regionen", "Fordi lånet ble gjennomført ved traktat, slik at statene forpliktet seg til felles skriftbruk"],
      explanation: "Betydningstegn er ikke bundet til et bestemt lydsystem, og det er hele mekanismen bak lånet. Distraktoren om felles lydsystem er faktisk gal, og distraktoren om at tegnene ble laget som hjelpespråk snur historien: de ble laget for kinesisk og lånt ut senere.",
    },
    {
      question: "Hva innebærer det at et skriftfellesskap ikke er et språkfellesskap?",
      options: ["At samfunnene delte tegn og lånte ord, men at språkene tilhører ulike familier og ikke er i slekt", "At bare eliten kunne lese, mens befolkningen brukte helt andre tegn i dagligtale og handel", "At tegnene betydde ulike ting i hvert samfunn, slik at tekster måtte oversettes for å forstås", "At skriften kom fra Kina, mens språkene i regionen kom fra Sentral-Asia på et senere tidspunkt"],
      explanation: "Delt skrift er belegg for kontakt, ikke for slektskap, og det er den presiseringen som gjør skriftmomentet holdbart. Distraktoren om ulike betydninger er gal: det var nettopp betydningen som var felles, mens lydformen skilte seg.",
    },
    {
      question: "Hva var klassisk kinesisk i den østasiatiske skriftkulturen?",
      options: ["Et felles skriftspråk som ikke fulgte talespråket i noen av samfunnene, heller ikke i Kina", "Talespråket i det kinesiske hoffet, som ble lært som andrespråk av eliter i nabolandene", "En tidlig form for det som i dag er standardkinesisk, brukt både i tale og skrift over hele regionen", "Et kunstig hjelpespråk utviklet i moderne tid for å lette kommunikasjon mellom landene"],
      explanation: "Skriftspråket var løsrevet fra tale i alle samfunnene, og nettopp derfor kunne det bære et delt tekstkorpus. Distraktoren om hofftalespråk er en nær bom: det som ble delt, var en skriftnorm, ikke en uttale.",
    },
    {
      question: "Hva kjennetegner de japanske stavelsesskriftene?",
      options: ["Hvert tegn står for en stavelse, og de brukes sammen med betydningstegnene i samme setning", "Hvert tegn står for en enkeltlyd, slik at systemet er et alfabet på linje med det latinske", "De erstattet betydningstegnene fullstendig i løpet av det tjuende århundret", "De ble utviklet på Koreahalvøya og lånt inn i japansk sammen med tegnene"],
      explanation: "Stavelsesskrift er verken alfabet eller logografi, og japansk bruker begge deler samtidig i blandet skrift. Distraktoren om alfabet tester at «lydskrift» ikke er én ting, og distraktoren om full erstatning er gal fordi tegnene fortsatt står sentralt.",
    },
    {
      question: "Hva var bakgrunnen for at et eget alfabet ble utviklet på Koreahalvøya på 1400-tallet?",
      options: ["At det lånte tegnsystemet passet dårlig til koreansk, og at tegnlæring var tidkrevende", "At tegnbruken var forbudt av det kinesiske hoffet, slik at en egen skrift ble nødvendig", "At alfabetet ble innført av utenlandske misjonærer sammen med en ny religiøs tradisjon", "At koreansk hadde mistet kontakten med den kinesiske skrifttradisjonen flere hundre år tidligere"],
      explanation: "Alfabetet ble laget for å skrive koreansk lyd for lyd, i en skriftkultur som fortsatt var tegnbasert. At det ble laget innenfor tegnkulturen og for å komme ut av den, er nettopp det som gjør det brukbart som argument begge veier.",
    },
    {
      question: "Hvor lenge sto det koreanske alfabetet ved siden av tegnbruken før det ble hovedskrift?",
      options: ["I århundrer — overtakelsen kom først i det tjuende århundret", "I noen tiår, før det tok over i løpet av 1500-tallet", "Det tok over umiddelbart etter at det ble kunngjort", "Det ble aldri hovedskrift, og tegnbruken dominerer fortsatt i begge koreanske stater"],
      explanation: "Tegnbruken hadde høyere status i forvaltning og lærdom i lang tid, og overtakelsen er et moderne fenomen. Distraktoren om umiddelbar overtakelse er den vanligste forenklingen, og den fjerner nettopp det som er interessant: at to skriftformer levde side om side i århundrer.",
    },
    {
      question: "Hva skiller forenklede fra tradisjonelle tegnformer?",
      options: ["Det er to tegnformer i samme skriftsystem, der de forenklede har færre streker per tegn", "Det er to ulike skriftsystemer, med hvert sitt sett av tegn uten sammenheng seg imellom", "Det er to ulike språk, der det ene snakkes i Folkerepublikken Kina og det andre i Taiwan", "Det er to lesemåter av samme tegn, en lånt og en hjemlig, slik japansk skrifttradisjon har"],
      explanation: "Forskjellen er i tegnformen, ikke i system eller språk, og skillet er et konkret eksempel på at felles arv forvaltes av hver stat for seg. Distraktoren om lesemåter blander sammen to ulike fenomener som begge hører hjemme i dette kapitlet.",
    },
    {
      question: "Hva menes med skriftreform som statlig politikk?",
      options: ["At staten bestemmer tegnformer, tegnutvalg og skriftvalg, som regel med lesekyndighet og skolegang som begrunnelse", "At staten endrer selve språket ved vedtak, slik at grammatikk og ordforråd følger reformen", "At forskere blir enige om en ny normering, som deretter tas i bruk av forlagene", "At skriften endrer seg gradvis gjennom bruk, uten at noen myndighet er involvert"],
      explanation: "Skriftreform er språkpolitikk og ikke språkendring: skriften endres ved vedtak, mens språket endrer seg av seg selv. Distraktoren om at grammatikken følger med, får statene til å framstå som mektigere enn de er, og det er en påstand ingen kilde bærer.",
    },
    {
      question: "Hva er en fokusanvisning i et eksamensspørsmål?",
      options: ["Det leddet som sier hva svaret skal handle om innenfor det større temaet", "Den delen av spørsmålet som oppgir hvor mange ord svaret skal være på", "En anbefaling om hvilket pensumkapittel som er mest relevant for oppgaven", "Et forslag sensor gir om hvordan svaret kan disponeres, som kandidaten står fritt til å følge"],
      explanation: "Fokusanvisningen er en instruks, ikke en høflighet, og et svar som ikke behandler det anviste, har besvart et annet spørsmål. Distraktoren om et frivillig forslag er nettopp den lesningen som ligger bak mangel nummer seks i feilregisteret.",
    },
    {
      question: "Hva skiller en fokusanvisning fra et valgledd?",
      options: ["Fokusanvisningen snevrer inn hva du må behandle; valgleddet gir deg en meny du velger fra", "Fokusanvisningen står alltid først i spørsmålet, mens valgleddet står i den siste setningen", "Fokusanvisningen gjelder bare i sammenligningsoppgaver, mens valgleddet bare gjelder i redegjørelser", "Fokusanvisningen er obligatorisk å følge, mens valgleddet kan overses uten at det trekker"],
      explanation: "Innsnevring og meny er to ulike ting, og noen spørsmål har begge — da må du både velge og holde deg innenfor. Distraktoren om at valgleddet kan overses er gal: å svare på noe du ikke valgte, er like alvorlig som å ignorere fokuset.",
    },
    {
      question: "Hva forplikter et valgt fokus svaret ditt til?",
      options: ["Å si i åpningen hva du valgte, holde deg innenfor det, og ha nok stoff til minst tre utviklede momenter", "Å nevne alle alternativene kort, slik at sensor ser at du har vurdert hele menyen før du valgte", "Å skrive omtrent like mye om det du valgte og om det du valgte bort, for balansens skyld", "Å begrunne overfor sensor hvorfor de andre alternativene er mindre interessante enn ditt"],
      explanation: "Valget skal sies, holdes og bæres av stoff; å velge er ikke det samme som å varsle. Distraktoren om balanse mellom valgt og fravalgt er den dyreste feilen her, siden den halverer plassen til det du faktisk skulle svare på.",
    },
    {
      question: "Hvordan skal en sammenligning organiseres?",
      options: ["Etter dimensjon, med alle enhetene inne i hvert dimensjonsavsnitt", "Etter enhet, slik at det ene landet behandles ferdig før det neste begynner", "Kronologisk, slik at leseren følger utviklingen i begge land parallelt gjennom tiden", "Etter kildetype, slik at hver kilde får sitt eget avsnitt med tilhørende vurdering"],
      explanation: "Dimensjonsorganisering tvinger sammenligningen fram i hver setning; land etter land leses som to redegjørelser med et komma imellom. Den kronologiske varianten er en nær distraktor fordi den høres strukturert ut, men den er en tidslinje og ikke en sammenligning.",
    },
    {
      question: "Hva kjennetegner en brukbar dimensjon i en sammenligning?",
      options: ["Den kan fylles ut for alle enhetene og gir sammenlignbare svar", "Den er hentet fra pensum og har et navn som går igjen i litteraturen", "Den handler om noe der enhetene er mest mulig like, slik at fellestrekket blir tydelig", "Den dekker et helt tema, slik at hele stoffet får plass i ett avsnitt"],
      explanation: "En akse som bare kan besvares for én av enhetene, er et poeng om den ene og ikke en dimensjon. Distraktoren om størst mulig likhet er en felle: en dimensjon skal kunne vise både fellestrekk og forskjell, ellers gir den ingen sammenligning.",
    },
    {
      question: "Hvor mange dimensjoner bærer ordgrensen i et enkeltsvar?",
      options: ["Tre til fem", "Én, som til gjengjeld behandles i full dybde med flere eksempler på hvert punkt", "Sju til ti, siden bredden er det som viser oversikt over pensum i denne sjangeren", "Så mange som mulig, siden hver ny dimensjon gir et nytt moment å telle for sensor"],
      explanation: "Med et tak på 800 ord og krav om utviklede momenter er tre til fem det plassen bærer; flere gir halvferdige avsnitt. Distraktoren om flest mulig er nettopp mangelen som består i å ramse opp uten å utvikle.",
    },
    {
      question: "Hva er den vanligste strukturfeilen i en sammenligningsoppgave?",
      options: ["Å skrive land etter land i stedet for dimensjon for dimensjon", "Å bruke for få eksempler, slik at momentene blir stående som rene påstander", "Å skrive for kort, slik at svaret havner under den nedre delen av ordgrensen", "Å velge enheter som er for ulike til at en sammenligning gir mening"],
      explanation: "Land-for-land-strukturen er mangel nummer åtte i feilregisteret, og den er dyr fordi selve sammenligningen aldri blir skrevet. De andre svarene beskriver reelle svakheter, men de er ikke strukturfeil i sjangeren.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å bruke skriftfellesskapet som argument for regional sammenheng?",
      options: ["At fellesskapet lenge gjaldt en skolert elite og ikke befolkningen som helhet", "At det er uklart om tegnene virkelig spredte seg, siden kildene er få og sene", "At skriften bare ble brukt i Kina, mens nabolandene utviklet egne systemer fra starten", "At tegnene endret betydning så raskt at tekstene ikke lot seg lese på tvers av grensene"],
      explanation: "Spredningen er robust dokumentert; det er rekkevidden inne i samfunnene som er den reelle innvendingen. En besvarelse som tar denne innvendingen selv, framstår som en som har tenkt ferdig i stedet for å bli tatt på den.",
    },
    {
      question: "Hvordan kan skriftreformene i det tjuende århundret brukes i en drøfting av regional sammenheng?",
      options: ["Som argument for at statene forvaltet en felles arv hver for seg, altså at fellesskapet er sterkere historisk enn i dag", "Som argument for at skriften aldri var felles, siden reformene viser at systemene alltid var atskilte", "Som argument for at regionen ble mer enhetlig, siden alle statene reformerte skriften i samme periode", "Som bevis for at språkene i regionen er i ferd med å smelte sammen til en felles standard"],
      explanation: "Reformene viser en felles arv i ulik forvaltning, og det gir både fellestrekket og forskjellen i samme moment. Distraktoren om at regionen ble mer enhetlig er en nær bom: samtidighet i reform er ikke det samme som likhet i resultat.",
    },
  ],
  'exfac03-east-2-3': [
    {
      question: "Hva innebar et tributtforhold til det kinesiske hoffet?",
      options: ["Sendebud med gaver, formell anerkjennelse av herskeren tilbake, og handel innenfor rammen", "Fremmed forvaltning av landets indre anliggender, styrt av utsendte embetsmenn som svarte til hovedstaden og hadde egen domsmyndighet", "En gjensidig forsvarsplikt der partene forpliktet seg til å stille tropper for hverandre ved angrep utenfra, og til å avstå fra egne avtaler med tredjeparter", "En avtale om fri handel mellom formelt likestilte stater, med faste toller, faste grenser og gjensidig utveksling av sendemenn"],
      explanation: "Ordningen ga rang, anerkjennelse og en regulert handelskanal, ikke administrasjon av nabolandene. Distraktoren om fremmed forvaltning er den vanligste fella og gjør tributtordenen til et kolonisystem, som er en faktafeil og ikke en nyanse.",
    },
    {
      question: "Hva var investitur i tributtordenen?",
      options: ["At hoffet formelt anerkjente en hersker som allerede satt med makten, ofte ved segl, dokument og tittel", "At hoffet utnevnte og innsatte herskeren i nabolandet, og kunne avsette ham igjen dersom han førte en politikk hoffet ikke ønsket", "At herskeren avla en personlig troskapsed ved det kinesiske hoffet og stilte familiemedlemmer som gisler for å garantere lojaliteten", "At hoffet overtok nabolandets utenrikspolitikk gjennom en fast utsending"],
      explanation: "Anerkjennelse er ikke innsettelse: hoffet bekreftet den som allerede hadde makten, og det er nettopp derfor ordningen kunne vare uten å oppleves som fremmedstyre. Distraktoren om utnevnelse og avsettelse gir hoffet en myndighet ordningen ikke ga det.",
    },
    {
      question: "Hvordan skilte tributt seg fra skatt?",
      options: ["Tributt gikk fra hersker til hersker i seremonielle former og ble gjengjeldt, ofte med gaver av større verdi enn dem som kom inn", "Tributt ble betalt i naturalier fra jordbruket, mens skatt ble krevd inn i mynt og edelt metall etter faste satser", "Tributt ble krevd inn årlig av utsendte oppkrevere med militær eskorte, mens skatt ble innbetalt frivillig av lokale myndigheter", "Tributt gjaldt bare handelsvarer i grensehandelen, mens skatt gjaldt jord og eiendom i selve tributtstaten"],
      explanation: "Skatt går fra befolkning til stat og kreves inn; tributt gikk mellom herskere og ble gjengjeldt. En besvarelse som beskriver tributt som skattlegging, har gjort ordningen til noe den ikke var.",
    },
    {
      question: "Hva kjennetegnet handelen i tributtordenen?",
      options: ["Den var knyttet til oppdragene, begrenset i tid og omfang, og forutsatte det seremonielle rammeverket", "Den var fri og løpende gjennom hele året, og foregikk uavhengig av om oppdrag ble sendt eller ikke", "Den var forbudt i sin helhet, siden ordningen var rent seremoniell og uten noen økonomisk side overhodet", "Den ble drevet av statlige selskaper med enerett på begge sider, etter avtaler inngått mellom hoffene"],
      explanation: "Handelen fulgte sendebudene og var oppdragsbundet, og for flere deltakere var den den viktigste delen av forholdet. Distraktoren om at ordningen var rent seremoniell fjerner nettopp den økonomiske lesningen som er ett av de tre nivåene systemet virket på.",
    },
    {
      question: "Hva er de tre lesningene av tributtsystemet?",
      options: ["Maktordning, handelsordning og symbolsk anerkjennelsesordning", "Religiøs orden, militær kommandoordning og rettslig ordning med felles domstol", "Kolonisystem med fremmed forvaltning, protektorat med kontrollert utenrikspolitikk, og personalunion", "Frihandelsområde uten indre toll, tollunion med felles ytre toll, og valutaunion med felles mynt"],
      explanation: "De tre nivåene virket samtidig, og et svar som velger ett uten å nevne de andre, er tynt. Distraktoren med kolonisystem og protektorat er nær nettopp fordi den bruker moderne kategorier på en eldre orden, som er kapitlets hovedadvarsel.",
    },
    {
      question: "Hva er belegget for den symbolske lesningen av tributtsystemet?",
      options: ["At anerkjennelsen ble brukt innenriks, og at gjengavene ofte oversteg gavene", "At kjøpmenn reiste med følget og handlet underveis", "At tributtstatene stilte soldater til hoffet i krig", "At hoffet krevde årlige avgifter av befolkningen"],
      explanation: "Bruken innenriks og de større gjengavene er nettopp det som gjør den økonomiske lesningen alene utilstrekkelig. Distraktoren om kjøpmenn er belegget for handelslesningen, ikke for den symbolske, og å bytte om på dem er en presisjonsfeil.",
    },
    {
      question: "Hva er forskjellen på hierarki og herredømme som ordensprinsipp?",
      options: ["Hierarki rangerer partene; herredømme innebærer at den øverste styrer de andre", "Hierarki gjelder bare mellom stater i en region, mens herredømme bare gjelder forholdet innenfor en enkelt stat", "Hierarki er en moderne analytisk kategori, mens herredømme er en kategori som bare gir mening før 1800-tallet", "Hierarki bygger på traktat, herredømme på ritual"],
      explanation: "En rangordning kan være stabil uten kommandolinjer, og å lese rang som kommando er den vanligste anakronismen i dette stoffet. De tre andre svarene innfører skiller som ikke finnes i selve begrepsparet.",
    },
    {
      question: "Hva kjennetegner suverenitet som ordensprinsipp?",
      options: ["Statene er formelt likestilte uavhengig av makt, og forholdet ordnes ved traktat", "Statene er faktisk likestilte, slik at maktforskjellene mellom store og små stater opphører i praksis", "Statene rangeres etter militær tyngde og størrelse", "Statene underordnes en felles domstol i alle tvister"],
      explanation: "Likheten er formell og ikke faktisk: suverenitetsordenen avskaffet ikke maktforskjeller, den endret hvordan de uttrykkes. Distraktoren om faktisk likhet er den vanligste misforståelsen av prinsippet.",
    },
    {
      question: "Hva erstattet tributtordenen fra midten av 1800-tallet?",
      options: ["Traktatsystemet, med formelt likestilte stater, faste grenser og handelsavtaler", "En regional forsvarsallianse mellom statene i Øst-Asia, med felles kommando og gjensidig bistandsplikt", "Et system av kolonier styrt direkte fra hovedstaden", "En tollunion mellom Kina, Japan og de koreanske statene, med felles ytre toll og fri indre handel"],
      explanation: "Overgangen var et brudd i selve ordensprinsippet, innført under press utenfra og videreført i regionen. Distraktoren om en regional allianse er nær fordi den også beskriver en mellomstatlig ordning, men den bygger på gjensidige forpliktelser og ikke på formell likhet.",
    },
    {
      question: "Hvilken hendelse satte punktum for Koreas gamle tributtforhold?",
      options: ["Den kinesisk-japanske krigen 1894–95", "Åpningen av de første traktathavnene langs den kinesiske kysten på 1840-tallet", "Sovjetunionens sammenbrudd og den omleggingen av handelen i regionen som fulgte", "Innføringen av forenklede tegnformer og de øvrige skriftreformene i det tjuende århundret"],
      explanation: "Krigen avsluttet det gamle forholdet, og det er en av grunnene til at den står på momentlisten i V2021-veiledningen. De tre andre hendelsene tilhører andre deler av emnet, og å blande dem sammen er en dateringsfeil sensor ser umiddelbart.",
    },
    {
      question: "Hvorfor er varigheten viktigere enn omfanget når tributtsystemet brukes som argument for regional sammenheng?",
      options: ["Fordi et argument om sammenheng er et argument om struktur, og strukturer viser seg gjennom gjentakelse i faste former over lang tid", "Fordi handelsvolumet i ordningen var for lite til å kunne beregnes med noen presisjon i dag", "Fordi kildene bare er bevart for de siste par århundrene av ordningen", "Fordi antallet deltakende stater varierte for mye til å kunne telles"],
      explanation: "Enkeltmøter viser kontakt, mens en ordning med faste former gjennom århundrer viser en felles ramme. De andre svarene handler om kildeproblemer og målbarhet, som er noe annet enn hva argumentet trenger.",
    },
    {
      question: "Hva er en anakronisme i beskrivelsen av tributtordenen?",
      options: ["Å bruke begreper som forutsetter det moderne statssystemet, som protektorat og begrenset suverenitet", "Å sammenligne tributtordenen med det moderne statssystemet og si uttrykkelig at man sammenligner de to", "Å bruke datidens egne begreper om rang, anerkjennelse, oppdrag og gjengaver i framstillingen", "Å oppgi hvilke århundrer ordningen var i virksomhet i, og hvor lenge de enkelte forholdene varte"],
      explanation: "Feilen ligger i å beskrive den eldre ordenen med den nyeres begreper, ikke i å sammenligne dem. Distraktoren om sammenligning er nettopp den lovlige varianten, og forskjellen ligger i om du sier at du sammenligner.",
    },
    {
      question: "Hva viser det at deltakelsen i tributtordenen var ujevn?",
      options: ["At ordningen var en ramme flere ulike forhold kunne fylles inn i, ikke én ensartet ordning", "At ordningen aldri var annet enn et kinesisk selvbilde", "At bare Korea deltok i ordningen, og at den derfor ikke sier noe om regionen som helhet", "At deltakelsen ble avgjort ved avstemning mellom statene i regionen med jevne mellomrom"],
      explanation: "Variasjonen er ikke et argument mot at ordenen fantes; å stå utenfor forutsetter at det finnes noe å stå utenfor. Distraktoren om et rent selvbilde er en overdrivelse av en reell innvending, og det er den overdrivelsen som gjør et svar upresist.",
    },
    {
      question: "Hvordan bør Japans forhold til tributtordenen behandles i et svar?",
      options: ["Som en innvending du tar selv: forholdet vekslet sterkt, og i lange perioder sto landet utenfor", "Som belegg for at ordenen omfattet hele regionen på samme måte og med samme styrke gjennom hele perioden", "Ved å utelate Japan fra svaret, siden landet uansett ikke hører til den regionale ordenen emnet behandler", "Som belegg for at ordenen var en militærallianse"],
      explanation: "Å nevne den ujevne deltakelsen selv er sterkere enn å bli tatt på den, og det viser at momentet er formulert med rekkevidden i behold. Å utelate Japan er verst av alt, siden emnet avgrenser regionen slik at Japan hører med.",
    },
    {
      question: "Hva er forskjellen på en struktur og en hendelse i et argument om regional sammenheng?",
      options: ["En hendelse skjedde én gang; en struktur er et mønster som gjentar seg i faste former over tid", "En hendelse er dokumentert i skriftlige kilder, mens en struktur alltid er en tolkning uten direkte kildebelegg", "En hendelse gjelder én stat, en struktur hele regionen", "En hendelse tilhører fortiden, mens en struktur alltid er noe som fortsatt finnes i dag"],
      explanation: "Skillet forklarer hvorfor tributtargumentet hviler på varighet og faste former. Distraktoren om kildebelegg er gal: strukturer dokumenteres nettopp gjennom gjentatte hendelser i kildene.",
    },
    {
      question: "Hvorfor er kryssbok-lenken til en framstilling av suverenitet i et annet emne ikke en snarvei til uttelling her?",
      options: ["Fordi kravene der er det andre emnets egne, og ingen EXFAC03-EAST-veiledning nevner emnet", "Fordi de to emnene behandler nøyaktig det samme stoffet, slik at gjentakelse ville bli regnet som en svakhet", "Fordi stoffet i det andre emnet ligger på et lavere faglig nivå enn det som kreves i dette emnet", "Fordi det ikke er tillatt å vise til andre emner i en eksamensbesvarelse ved dette fakultetet"],
      explanation: "Lenken finnes fordi en beslektet framstilling kan være nyttig å lese, ikke fordi eksamen belønner stoff fra andre emner. De andre svarene oppgir grunner som ikke stemmer: overlappet er lite, og henvisninger er ikke i seg selv forbudt.",
    },
  ],
  'exfac03-east-2-4': [
    {
      question: "Hva menes med indre heterogenitet i regionen?",
      options: ["At forskjellene innenfor det området som skal være ett, er store — i språk, religion, statsform og økonomi, og internt i hvert land", "At regionen mangler forbindelser mellom samfunnene, både historisk og i dag", "At forskerne er uenige om hvor grensene for regionen går", "At hvert land er ensartet innvendig, mens forskjellene ligger mellom landene"],
      explanation: "Heterogenitet handler om forskjeller innenfor det påstått felles, og den strekker seg helt inn i hvert enkelt land. Svaret om at hvert land er ensartet innvendig, snur begrepet: variasjonen internt er en del av poenget.",
    },
    {
      question: "Hva kjennetegner en essensialiserende påstand om kultur?",
      options: ["Den gjør et historisk formet trekk til en indre egenskap, og kan ikke vise seg å være gal", "Den knytter trekket til en bestemt periode, et bestemt land og en bestemt ordning, slik at det kan etterprøves i kilder", "Den bygger på statistikk i stedet for på kilder, og oppgir andeler uten å si hvor tallene kommer fra", "Den sammenligner regionen med Europa i stedet for å behandle den på egne premisser og med egne begreper"],
      explanation: "Testen er om påstanden i det hele tatt kan motbevises; kan den ikke det, er den en stemning og ikke et moment. Svaret om tid, sted og ordning beskriver nettopp det motsatte av essensialisering.",
    },
    {
      question: "Hva går kritikken av «konfucianske verdier» ut på?",
      options: ["At innholdet varierer mellom perioder, samfunnslag og land, at mye er formet i nyere tid, og at betegnelsen brukes politisk", "At den konfucianske tradisjonen aldri fikk institusjonell form i noen del av regionen, verken gjennom skoler, ritualer eller embetsverk", "At tradisjonen bare fantes i Kina og aldri spredte seg til nabolandene", "At verdiene er for gamle til å kunne si noe om moderne samfunn"],
      explanation: "Kritikken rammer bruken av uttrykket som én forklaringsstørrelse, ikke tradisjonens eksistens eller betydning. Svaret om at tradisjonen aldri fikk institusjonell form er en langt sterkere påstand enn kritikken fremmer, og å gjengi den slik er en overdrivelse sensor vil se.",
    },
    {
      question: "Hvordan bør en henvisning til at «nyere forskning utfordrer» et begrep brukes i et svar?",
      options: ["Ved å si hva utfordringen går ut på", "Ved å nevne at forskningen har problematisert begrepet, som markerer at du kjenner debatten", "Ved å vise til at spørsmålet er omdiskutert, og deretter gå videre til neste moment i disposisjonen", "Ved å understreke at forskere er uenige, slik at du slipper å ta stilling til spørsmålet selv"],
      explanation: "En henvisning uten innhold er et signal og ikke et moment, og den kunne stått i et hvilket som helst svar om et hvilket som helst begrep. Distraktorene beskriver tre varianter av den samme tomme formen.",
    },
    {
      question: "Hva var programmet om å «forlate Asia»?",
      options: ["Et japansk politisk program fra slutten av 1800-tallet om å knytte landet til de vestlige stormaktene i stedet for til naboene", "Et kinesisk program for å flytte handelen bort fra regionen", "En koreansk plan for å bryte tributtforholdet til hoffet", "Et felles regionalt program for å motstå europeisk press"],
      explanation: "Programmet er et argument om selvforståelse, og det står i motkolonnen i V2021-veiledningen. At det gjaldt Japan og ikke regionen som helhet, er nettopp det som gjør det til et motmoment.",
    },
    {
      question: "Hvilken av disse er et robust historisk funn?",
      options: ["Korea var under japansk kolonistyre fra 1910 til 1945", "Kolonitidens industriutbygging var samlet sett til fordel for det koloniserte samfunnet på lang sikt", "Historiestriden i regionen drives i hovedsak av innenrikspolitiske hensyn i samtiden", "Regionens felles kulturarv veier tyngre enn konflikthistorien i spørsmålet om sammenheng"],
      explanation: "Kolonistyrets tidsrom er dokumentert og skrives i indikativ uten forbehold. De tre andre er vurderinger der forsvarlige posisjoner står mot hverandre, og de skal skrives med avsender og begrunnelse.",
    },
    {
      question: "Hvordan skal en omstridt vurdering av kolonitidens økonomiske virkninger skrives?",
      options: ["Med begge posisjoner utskrevet: den ene med vekt på det som ble bygget, den andre med vekt på at utbyggingen tjente kolonimaktens behov og gikk sammen med tvang", "Som et rent faktum, siden tallene for industriproduksjon og jernbaneutbygging foreligger og uten videre kan sammenlignes med tiden før kolonistyret begynte", "Uten omtale i besvarelsen i det hele tatt, siden spørsmålet er for betent til å behandles på den plassen en eksamensoppgave gir, og siden det lett kan misforstås", "Med forbehold i hver setning, slik at ingen posisjon trer tydelig fram"],
      explanation: "Vurderinger skal ha avsender og begrunnelse, og begge posisjoner skal framstilles slik en tilhenger ville kjent seg igjen i dem. Svaret om forbehold i hver setning beskriver falsk balanse, som svekker svaret i stedet for å gjøre det forsiktig.",
    },
    {
      question: "Hva er falsk balanse?",
      options: ["Å framstille noe det ikke er reell faglig uenighet om, som et åpent spørsmål med to likeverdige sider", "Å gi de to sidene i en omstridt vurdering omtrent like mye plass i besvarelsen, slik at ingen av dem framstår som forfatterens egen", "Å beskrive posisjoner der posisjoner faktisk finnes, med avsender og med det grunnlaget hver av dem bygger på", "Å konkludere skarpt i en sak der forsvarlige posisjoner står mot hverandre"],
      explanation: "Falsk balanse oppfinner posisjoner der de ikke finnes, og den er like uredelig som partiskhet. Å beskrive posisjoner der de finnes er derimot nettopp nøytralitet, og de to blandes ofte sammen.",
    },
    {
      question: "Hva skiller japansk imperialisme i regionen fra tributtordenen?",
      options: ["Fremmed forvaltning, lovgivning, bosetting og militær kontroll — altså nettopp det tributtordenen ikke innebar", "At imperialismen omfattet handel og investeringer, mens tributtordenen var rent seremoniell og uten noe økonomisk innhold overhodet", "At imperialismen var kortvarig og avgrenset til noen tiår, mens tributtordenen varte i flere sammenhengende århundrer uten avbrudd", "At imperialismen ble innført ved traktat, mens tributtordenen bygde på ensidige erklæringer"],
      explanation: "Skillet ligger i statlig kontroll over det indre styret, ikke i varighet eller i formen forholdet ble opprettet på. Distraktoren om at tributtordenen var rent seremoniell fjerner handelsnivået, som var en reell del av ordningen.",
    },
    {
      question: "Hva er assimilasjonspolitikk?",
      options: ["Et statlig program for å gjøre en kolonisert befolkning lik kolonimaktens egen i språk, navneskikk, utdanning og religiøs praksis", "Gjensidig kulturell påvirkning mellom to samfunn over lang tid", "En politikk for å styre kolonien som en atskilt enhet med egne lover", "Et program for å spre skriftspråket til nye samfunnslag"],
      explanation: "Assimilasjonspolitikk er et statlig program med tvangsmidler, ikke kulturell spredning gjennom lån og etterlikning. Distraktoren om atskilt styring beskriver den motsatte kolonipolitiske linjen, og forskjellen mellom de to er reell.",
    },
    {
      question: "I hvilke år var Taiwan japansk koloni?",
      options: ["Fra 1895 til 1945", "Fra 1910 til 1945, altså samtidig med kolonistyret på Koreahalvøya", "Fra 1937 til 1945, altså i årene med invasjonen av det kinesiske fastlandet", "Fra 1868 til 1912, altså gjennom hele Meiji-perioden i Japan"],
      explanation: "Kolonitiden i Taiwan begynte etter den kinesisk-japanske krigen 1894–95 og varte til 1945. Distraktoren med 1910 blander sammen de to koloniene, og det er en dateringsfeil som er lett å gjøre og lett å se.",
    },
    {
      question: "Hva innebærer kjørereglen «hendelsen i indikativ, vurderingen med begrunnelse»?",
      options: ["At dokumenterte hendelser skrives uten forbehold, mens vurderinger av dem får avsender og grunnlag", "At alle påstander om fortiden skrives uten forbehold, siden fortiden ligger fast", "At alle påstander bør ha forbehold, siden all historieskriving er tolkning og ingen framstilling kan være helt nøytral", "At vurderinger bør utelates helt, slik at svaret bare inneholder etterprøvbare opplysninger"],
      explanation: "Regelen skiller to slags påstander som krever ulik behandling, og å bytte om på dem er den vanligste nøytralitetsfeilen i klyngen. Svaret om at alle påstander bør ha forbehold beskriver nettopp falsk balanse.",
    },
    {
      question: "Hva er poenget i formuleringen «konflikten forutsetter nærheten»?",
      options: ["At krig og kolonistyre ble ført mellom naboer som hadde delt skrift, religiøse tradisjoner og statsmodeller, og at konflikten derfor også er belegg for kontakt", "At konflikten gjorde partene mer like hverandre etter hvert som den varte, siden forvaltning, skolevesen og lovgivning i de berørte områdene ble lagt om etter det samme mønsteret", "At konflikten var gjensidig, og at ansvaret derfor er delt mellom partene", "At konflikten var uunngåelig fordi samfunnene lå så tett på hverandre og konkurrerte om de samme ressursene og de samme markedene i regionen"],
      explanation: "Poenget gjelder forbindelse, ikke skyld: at partene sto i forhold til hverandre. Distraktoren om delt ansvar er nettopp den lesningen presiseringen skal stenge for, og uten presiseringen leses momentet som en bortforklaring.",
    },
    {
      question: "Hva svekker forskjellighet og hva svekker konflikt i påstanden om regional sammenheng?",
      options: ["Forskjellighet svekker påstanden om likhet, konflikt svekker påstanden om fellesskap", "Begge svekker først og fremst påstanden om at det finnes forbindelser mellom samfunnene", "Forskjellighet svekker påstanden om fellesskap, konflikt svekker påstanden om likhet", "Ingen av dem svekker noen av påstandene, siden begge deler finnes i alle regioner"],
      explanation: "Likhet, fellesskap og forbindelse er tre ulike påstander, og et svar som sier hvilken hvert motmoment rammer, har fått en akse. Svaret som bytter om på de to viser hvor lett skillet glipper.",
    },
    {
      question: "Hva er en avsender i en framstilling av en omstridt posisjon?",
      options: ["Den som holder posisjonen — en stat, en faglig retning, en organisasjon eller en gruppe, navngitt i teksten", "Kilden oppgitt med forfatter, verk og utgivelsessted i en fotnote nederst på siden, slik det gjøres i en vitenskapelig artikkel", "Formuleringen «det hevdes at», som markerer at påstanden ikke er din egen", "Læreren eller sensor som har formulert spørsmålet posisjonen svarer på"],
      explanation: "Avsenderen er den som står bak posisjonen, og det er den opplysningen leseren trenger for å vurdere den. Passivformen «det hevdes» er ikke en avsender, men et fravær av en.",
    },
    {
      question: "Hvorfor kan et svar innrømme kritikken av verdifellesskapet og likevel argumentere for regional sammenheng?",
      options: ["Fordi skriftarven, tekstkanonen og buddhismens spredningsvei står igjen som dokumenterte forbindelser selv om verdifellesskapet faller", "Fordi kritikken bare gjelder Kina og ikke resten av regionen", "Fordi kritikken er for ny til å ha fått gjennomslag i pensum", "Fordi verdier uansett ikke er relevante for spørsmålet om region"],
      explanation: "Kritikken rammer den enkleste versjonen av kultursfære-argumentet, ikke de dokumenterte spredningsforbindelsene. Å innrømme den fullt ut og beholde argumentet er en sterkere posisjon enn å forsvare noe som ikke lar seg forsvare.",
    },
  ],
  'exfac03-east-3-1': [
    {
      question: "Hva menes med modernisering i dette emnet?",
      options: ["Den sammensatte prosessen med industriell produksjon, sentralisert forvaltning, allmenn skolegang, byvekst og nye former for politisk deltakelse", "Overgangen til vestlige institusjoner og verdier i et ikke-vestlig samfunn, slik at samfunnet gradvis kommer til å ligne modellen det låner fra", "Innføringen av markedsøkonomi etter en periode med planstyring", "Den tekniske utviklingen som følger av at et land importerer maskiner og kunnskap utenfra"],
      explanation: "Modernisering dekker flere prosesser samtidig og er ikke det samme som vestliggjøring. Distraktoren om vestlige institusjoner er den vanligste sammenblandingen, og den gjør flere av veiene i regionen umulige å beskrive.",
    },
    {
      question: "Hva er de to formene for sterk stat som boka skiller mellom?",
      options: ["Eierskap og plan på den ene siden, betingelser og rammer på den andre", "Sentralstyring og lokalstyring, altså på hvilket forvaltningsnivå beslutningene om næringspolitikk faktisk tas i den enkelte sak", "Autoritær og demokratisk styring, altså hvordan lederne i landet velges og avsettes", "Tollpolitikk og valutapolitikk, altså de to redskapene en stat har mot omverdenen"],
      explanation: "Skillet går mellom å eie produksjonen og sette målene, og å styre private aktører gjennom vilkår. De tre andre svarene beskriver reelle skiller, men ingen av dem fanger den forskjellen dimensjonen om statens rolle måler.",
    },
    {
      question: "Hvilken av de seks dimensjonene handler om hva som fantes før moderniseringspolitikken?",
      options: ["Utgangspunktet før moderniseringen", "Statens grep om økonomien, altså hvilke virkemidler myndighetene tok i bruk og når", "Forholdet til utenlandsk kapital og handel, altså hvor åpen økonomien var mot omverdenen", "Det politiske systemet underveis, altså hvordan landet ble styrt mens veksten pågikk"],
      explanation: "Dimensjonen om utgangspunktet skiller det som fantes fra det politikken tilførte, og uten den blir alt tilskrevet politikken. Distraktoren om statens grep er den nærmeste, og de to blandes ofte fordi begge handler om økonomiens struktur.",
    },
    {
      question: "Hva kjennetegner eksportledet vekst?",
      options: ["Veksten drives av salg til utenlandske markeder, og kreditt, valuta og industripolitikk innrettes mot det", "Alle handelshindre fjernes, slik at både import og eksport flyter fritt", "Staten overtar utenrikshandelen og driver den gjennom egne selskaper med enerett", "Landet spesialiserer seg på råvarer det har naturlige forutsetninger for å produsere"],
      explanation: "Eksportledet vekst er ikke det samme som frihandel: flere av statene fremmet eksport samtidig som hjemmemarkedet var skjermet. Distraktoren om frie handelshindre tester nettopp den sammenblandingen.",
    },
    {
      question: "Hva er importsubstitusjon?",
      options: ["Å bygge opp innenlandsk produksjon av varer landet ellers ville importert, beskyttet av toll og importrestriksjoner mens industrien er ung", "Å erstatte import fra ett land med import fra et annet av politiske grunner", "Å bytte ut importerte råvarer med innenlandske i eksportproduksjonen", "Å subsidiere import av maskiner og kapitalvarer for å få fart på industrialiseringen i en oppstartsfase"],
      explanation: "Strategien går ut på å produsere selv bak toll, og den ble i flere av landene fulgt av eksportframstøt senere. Rekkefølgen mellom de to strategiene er selv et moment, og de er derfor ikke bare alternativer.",
    },
    {
      question: "Hva er forskjellen på de to formene for landreform i denne delen?",
      options: ["Jord til brukeren gir eiendomsrett til den enkelte, mens kollektivisering samler bruk i felles drift", "Den ene gjelder dyrket mark, den andre gjelder beitemark og skog i utmarka", "Den ene gjennomføres av staten, den andre av bøndene selv gjennom frivillige sammenslutninger", "Den ene gjelder eierskapet til jorda, mens den andre gjelder hvordan jordbruksinntekten skattlegges og kreves inn"],
      explanation: "Begge kalles landreform og går i motsatt retning på eierskapsdimensjonen. Å blande dem i en sammenligning der to land gjorde det motsatte, er en av de dyreste enkeltfeilene i Del 3.",
    },
    {
      question: "Hvorfor er dimensjonen om ulikhet verdt et eget avsnitt?",
      options: ["Fordi den skiller land som ellers ser like ut på papiret", "Fordi den er den eneste dimensjonen det finnes pålitelige tall for i alle landene", "Fordi eksamen alltid spør om fordeling", "Fordi ulikhet i praksis er det samme som fattigdom, og fattigdom lar seg måle enkelt og sammenlignbart over tid"],
      explanation: "To land kan ligne hverandre på virkemidler og likevel skille seg tydelig i hva som skjedde med forskjellene. Svaret som setter likhetstegn mellom ulikhet og fattigdom, er dessuten galt i sak: et samfunn kan bli rikere og mer ulikt samtidig.",
    },
    {
      question: "Hva er forskjellen på en årsak og en betingelse?",
      options: ["En årsak utløser utviklingen, mens en betingelse må være til stede uten selv å utløse noe", "En årsak kommer først i tid, mens en betingelse virker samtidig med det den forklarer", "En årsak kan måles, mens en betingelse bare kan beskrives kvalitativt", "En årsak gjelder enkelthendelser i et bestemt tidsrom, mens en betingelse gjelder lange forløp uten noe klart startpunkt"],
      explanation: "Skillet er kjernen i drøftingen av statens rolle, og det avgjør hvilken av de to landingene et svar velger. Distraktoren om tid er nær, men gal: en betingelse kan godt komme først uten å være årsaken.",
    },
    {
      question: "Hva er det sterkeste argumentet for at staten var én betingelse blant flere, ikke årsaken?",
      options: ["At de samme virkemidlene ga svært ulike utfall i ulike land", "At staten grep aktivt inn i alle landene", "At veksten begynte kort tid etter at de statlige tiltakene ble satt i verk", "At tallene for vekst i perioden er usikre og vanskelige å sammenligne mellom land med ulike statistikkbyråer"],
      explanation: "Like virkemidler med ulike utfall peker mot at noe annet også måtte være til stede. At staten grep aktivt inn i alle landene, og at veksten kom kort tid etter at tiltakene ble satt i verk, er derimot argumenter på den motsatte siden, og påstanden om usikre og lite sammenlignbare veksttall er et kildeproblem og ikke et argument om årsak.",
    },
    {
      question: "Hva må et årsaksargument navngi for å være mer enn en samtidighetsobservasjon?",
      options: ["En mekanisme — hva som skjedde, gjennom hvilken kanal", "En kilde som bekrefter at hendelsene fant sted i den oppgitte rekkefølgen", "Et tall som viser hvor stor virkningen var i prosent", "En sammenligning med et land som ikke gjorde det samme, slik at forskjellen i utfall kan tilskrives forskjellen i politikk"],
      explanation: "Uten en kanal er påstanden bare at to ting skjedde etter hverandre. Sammenligning med et kontrasttilfelle er nyttig, men den styrker argumentet — den er ikke det som gjør det til et årsaksargument.",
    },
    {
      question: "Hva er forskjellen på å bruke modernisering som beskrivelse og som målestokk?",
      options: ["Beskrivelsen konstaterer endringer; målestokken rangerer land etter hvor langt de har kommet mot et endepunkt", "Beskrivelsen gjelder fortiden, mens målestokken gjelder samtiden", "Beskrivelsen bruker tall, mens målestokken bruker kvalitative kjennetegn", "Beskrivelsen er faglig, mens målestokken er en politisk kategori uten faglig innhold"],
      explanation: "Målestokkbruken er en normativ handling som forutsetter én retning for utviklingen, og den skal begrunnes i stedet for å smugles inn. Svaret om at målestokken er en politisk kategori uten faglig innhold, overdriver: målestokkbruk kan forsvares, den skal bare gjøres eksplisitt.",
    },
    {
      question: "Hvordan tas valget i en valgoppgave?",
      options: ["Ved å telle hvor mange dimensjoner du kan fylle med et konkret eksempel, og velge der tellingen holder", "Ved å velge det alternativet som virker mest interessant, siden engasjement gir bedre tekst", "Ved å velge det alternativet flest andre sannsynligvis vil velge, siden sensor da har et sammenligningsgrunnlag å vurdere svaret opp mot", "Ved å begynne på det første alternativet og bytte hvis det viser seg å være for tynt"],
      explanation: "Valget tas på lest stoff, og under tre utviklede momenter er alternativet ute. Svaret om å begynne og bytte underveis beskriver den dyreste varianten: å bytte midtveis koster tid du ikke får igjen.",
    },
    {
      question: "Hvordan skal en sammenligning i landstoffet organiseres?",
      options: ["Etter dimensjon, med alle enhetene inne i hvert avsnitt", "Etter land, slik at hvert land får sin egen sammenhengende framstilling", "Kronologisk, slik at leseren følger begge landene gjennom de samme tiårene", "Etter virkemiddel, med ett eget avsnitt for hvert tiltak staten satte i verk, i den rekkefølgen de ble innført"],
      explanation: "Dimensjonsorganisering tvinger sammenligningen fram i hver setning, mens land etter land leser som to redegjørelser. Organisering etter virkemiddel er en nær variant, men den bryter sammen så snart de to landene brukte ulike virkemidler.",
    },
    {
      question: "Hva er robust og hva er omstridt i spørsmålet om statens rolle?",
      options: ["At statene grep aktivt inn i økonomien, er robust, mens årsaksvekten er omstridt", "At statene grep inn, er omstridt; virkningen av inngrepene er godt dokumentert", "Begge deler er robuste, og uenigheten gjelder bare hvordan de skal beskrives", "Begge deler er omstridte, siden all økonomisk historie bygger på tolkning av kilder som er valgt ut av noen"],
      explanation: "Inngrepene er dokumenterte tiltak; hvor mye de forklarer, er en vurdering. Å bytte om på de to er den vanligste nøytralitetsfeilen i denne klyngen, og svaret om at begge deler er omstridte, er falsk balanse.",
    },
  ],
  'exfac03-east-3-2': [
    {
      question: "Hva kjennetegnet utgangspunktet i Japan før 1868?",
      options: ["Byer og pengeøkonomi, håndverk og hjemmeindustri, og relativt høy lesekyndighet i deler av befolkningen", "Et rent jordbrukssamfunn uten byer, uten pengebruk og uten skriftkyndighet av betydning", "En allerede industrialisert økonomi, med fabrikker og jernbane på nivå med de europeiske industrilandene", "Et samfunn styrt direkte fra utlandet, med fremmed forvaltning i alle deler av landet"],
      explanation: "Utgangspunktet var ikke bunnen, og det er en innvending mot å forklare alt med politikken etterpå. Svarene om en allerede industrialisert økonomi og om fremmed styre er begge faktisk gale, og de trekker i hver sin retning.",
    },
    {
      question: "Hva var kjernen i Meiji-reformene?",
      options: ["Sentralisering først: prefektursystem, avskaffet standssamfunn, verneplikt, ny jordskatt og statlig skoleverk", "En folkelig omveltning nedenfra som avskaffet monarkiet og innførte allmenn stemmerett, gjennomført av bønder og bybefolkning i fellesskap", "En rekke handelsavtaler som åpnet landet for utenlandsk eierskap i industrien", "En religiøs reform som endret forholdet mellom stat og tempelvesen"],
      explanation: "Uten et statsapparat som kunne kreve inn skatt og flytte folk mellom yrker, ville ingen av de andre tiltakene vært mulige. Distraktoren om folkelig omveltning er den vanligste upresisheten: reformene ble gjennomført av en ny elite som overtok statsapparatet.",
    },
    {
      question: "Hva gjorde jordskattereformen?",
      options: ["Ga staten forutsigbar pengeinntekt, flyttet risikoen ved uår til bøndene, og frigjorde arbeidskraft", "Overførte jord fra store eiere til dem som drev den, og reduserte dermed ulikheten på landsbygda betydelig", "Innførte kollektiv drift av jordbruket under statlig ledelse, med felles maskinpark og felles leveringsplikt", "Fritok jordbruket for skatt slik at investeringene kunne øke"],
      explanation: "Reformen endret skattens form, ikke hvem som eide jorda; den store omfordelingen kom først etter 1945. Distraktoren om jord til brukeren beskriver nettopp den senere reformen, og å blande dem gir en dateringsfeil på nesten åtti år.",
    },
    {
      question: "Hva kjennetegnet statens rolle i det første moderniseringsforløpet?",
      options: ["Staten bygde selv anlegg og solgte dem senere til private som fortsatte med statlige kontrakter", "Staten holdt seg utenfor produksjonen og nøyde seg med å sikre eiendomsrett, kontraktsfrihet og et fungerende pengevesen", "Staten eide all industri gjennom hele perioden og satte produksjonsmål sentralt", "Staten overlot industribyggingen til utenlandske selskaper mot avgifter"],
      explanation: "Mønsteret var eierskap og igangsetting, deretter overdragelse uten at styringen slapp. Distraktoren om varig statlig eierskap beskriver den andre formen for sterk stat, som hører hjemme i andre av landkapitlene.",
    },
    {
      question: "Hva kjennetegnet statens rolle i etterkrigstidens vekstperiode?",
      options: ["Privat eierskap, med statlig styring gjennom valutatildeling, kreditt og godkjenning av teknologiimport", "Statlig eierskap i all tung industri, med produksjonsmål fastsatt i flerårige planer for hvert anlegg", "Full tilbaketrekning fra økonomien etter okkupasjonstidens reformer", "Direkte prisfastsettelse på alle varer gjennom et sentralt priskontor"],
      explanation: "Staten eide lite og styrte mye, gjennom kontroll over knappe ressurser. At samme land brukte begge formene i to perioder, er nettopp det som gjør Japan nyttig i en sammenligning.",
    },
    {
      question: "Hvordan var Japans forhold til utenlandsk kapital og handel?",
      options: ["Åpent for teknologi og handel, langt mer begrenset for utenlandsk eierskap i industrien", "Fullstendig lukket for både varer, kunnskap og kapital gjennom hele perioden, slik at all utvikling måtte skje innenfra", "Helt åpent, med utenlandske selskaper som eide store deler av industrien", "Åpent bare mot naboland i regionen, og lukket mot resten av verden"],
      explanation: "Kombinasjonen lar seg lett beskrive upresist som åpenhet: landet var åpent for kunnskap og handel, og mindre åpent for at andre skulle eie produksjonen. Det er den presisjonen som gjør momentet til noe mer enn en konstatering.",
    },
    {
      question: "Når ble et statlig skolesystem med allmenn skolegang bygget ut i Japan?",
      options: ["Fra 1870-tallet, altså før den store industrialiseringen", "Etter 1945, som en del av okkupasjonstidens omfattende reformpakke", "På 1930-tallet, som del av opprustningen", "Først på 1960-tallet, da høyveksten krevde faglært arbeidskraft"],
      explanation: "At utbyggingen kom før industrialiseringen og ikke etter, er selve poenget: den er et eksempel på en investering med lang virketid. De tre andre svarene plasserer den etter behovet, som ville snudd argumentet.",
    },
    {
      question: "Hva innebar landreformen etter 1945?",
      options: ["Jord ble overført fra store eiere til brukerne, raskt og i stort omfang", "Bruk ble slått sammen til kollektive enheter under felles drift, etter modell fra fastlandet, med produksjonsmål fastsatt utenfra", "Jordbruket ble skattefritt for å øke produksjonen etter krigen", "Staten overtok jorda og drev den gjennom egne foretak"],
      explanation: "Reformen gikk i retning jord til brukeren, ikke kollektivisering, og den fjernet en av de tyngste kildene til ulikhet. Distraktoren om kollektivisering beskriver den motsatte reformen, som ble gjennomført i andre land i regionen i samme tiår.",
    },
    {
      question: "Hva menes med at departementene styrte gjennom veiledning?",
      options: ["De ga råd og prioriteringer samtidig som de kontrollerte knappe ressurser som kreditt og valuta", "De ga bindende produksjonskvoter til hvert enkelt foretak", "De ga anbefalinger uten noen form for virkemidler bak", "De overtok styret i de største selskapene gjennom statlige eierandeler og utsendte styremedlemmer"],
      explanation: "Formen ligger mellom kommando og marked: rådene var sjelden bare råd når den som ga dem, også fordelte kreditten. Distraktoren om rene anbefalinger fjerner nettopp det som gjorde ordningen virksom.",
    },
    {
      question: "Hva var «forlate Asia» som moderniseringsideologi?",
      options: ["Tanken om at industrialisering, militærmakt og stormaktsstatus hørte sammen, og at veien dit gikk gjennom å knytte seg til de vestlige stormaktene", "En plan om å flytte tungindustrien fra hjemlandet til koloniene i regionen, slik at råvarer og produksjon kunne samles på ett sted", "Et program for å bryte all handel med Europa og satse på nabolandene", "Et forslag om å avvikle militærmakten til fordel for sivil industri"],
      explanation: "Som moderniseringsargument handler programmet om hvilken modell som ble valgt, og ikke bare om regional tilhørighet. De tre andre svarene snur innholdet på hodet i hver sin retning.",
    },
    {
      question: "Hva kjennetegnet ulikheten i høyvekstperioden?",
      options: ["Inntektsforskjellene holdt seg moderate, mens forskjeller mellom store og små bedrifter og mellom by og land besto", "Inntektsforskjellene økte kraftig i takt med veksten, slik at gevinsten samlet seg hos eierne av de store bedriftene", "All ulikhet forsvant som følge av landreformen og skattepolitikken", "Forskjellene mellom regioner ble større, mens forskjellene mellom yrkesgrupper forsvant"],
      explanation: "Moderat ulikhet er ikke fravær av ulikhet, og presiseringen om hvilke forskjeller som besto, er verdt et par ord. Hvilken av de foreslåtte forklaringene som veier tyngst, er ikke avgjort, og et svar bør si det.",
    },
    {
      question: "Hva er kapitlets hovedakse i drøftingen av Japans modernisering?",
      options: ["Om den var etterlikning av vestlige modeller eller selektiv tilpasning", "Om den var vellykket eller mislykket målt mot resultatene naboene i regionen oppnådde i samme tidsrom", "Om den var planlagt eller tilfeldig i sitt forløp", "Om den var fredelig eller militær i sin karakter fra begynnelsen"],
      explanation: "Aksen gjelder hva som ble hentet utenfra og hva som ble gjort med det, ikke om resultatet var godt. Å måle utfall mot naboene ville dessuten brutt med at boka ikke rangerer landene.",
    },
    {
      question: "Hva var kjennetegnet ved den japanske lånestrategien?",
      options: ["Modeller ble hentet fra ulike land etter hva som ble vurdert som best på hvert felt, og deretter tilpasset", "Alle institusjoner ble hentet fra ett og samme land for å sikre indre sammenheng", "Utenlandske eksperter styrte institusjonene direkte i flere tiår etter innføringen", "Lånet ble avgrenset til teknologi, mens institusjonene ble utviklet uten forbilder"],
      explanation: "Sammensetningen fra flere kilder er nettopp argumentet for at dette var tilpasning og ikke kopiering. Svaret om at bare teknologi ble lånt, er faktisk galt: også skolevesen, hær og rettsvesen ble bygget etter utenlandske forbilder.",
    },
    {
      question: "Hvordan skal forholdet mellom Meiji-tidens militarisering og 1930-tallets militarisme behandles?",
      options: ["Som et drøftingsspørsmål, ikke som en selvfølgelig sammenheng", "Som en direkte og nødvendig følge, siden programmet knyttet industri og hær sammen fra starten", "Som to helt urelaterte fenomener uten noen forbindelse", "Som et spørsmål utenfor emnet, siden det gjelder utenrikspolitikk"],
      explanation: "Sammenhengen spenner over seksti år, og et svar som gjør det ene til en nødvendig følge av det andre, hopper over den perioden. De to ytterpunktene i distraktorene er begge for enkle.",
    },
    {
      question: "Hva var det politiske systemet i Japan fra 1889?",
      options: ["Konstitusjonelt styre med skrevet forfatning og valgt forsamling, men med sterkt begrenset stemmerett", "Et parlamentarisk demokrati med allmenn stemmerett, partikonkurranse og regjeringsansvar overfor forsamlingen", "Et rent militærstyre uten forfatning eller valgte organer", "En union mellom keiserhuset og de gamle domenene uten sentral lovgivning"],
      explanation: "Konstitusjonelt er ikke det samme som demokratisk, og presisjonen er nødvendig for at dimensjonen om politisk system skal bli riktig. Beskrivelsen av et parlamentarisk demokrati er nabobeskrivelsen som skiller seg på nettopp dette punktet.",
    },
    {
      question: "Hvorfor er todelingen av Japans vei nyttig på eksamen?",
      options: ["Fordi de samme dimensjonene får ulike verdier i de to periodene, og fordi den gir deg en ferdig periodegrense", "Fordi bare den ene av de to periodene er pensum i emnet, og den andre derfor kan utelates uten tap", "Fordi eksamen alltid spør om perioden etter 1945", "Fordi de to periodene har hvert sitt sett av dimensjoner å sammenligne langs"],
      explanation: "Dimensjonene er de samme; det er verdiene som skifter, og det er nettopp derfor periodegrensen må sies. Svaret om at periodene har hvert sitt sett av dimensjoner, er en nær bom: hele poenget med matrisen er at apparatet holdes fast.",
    },
  ],
  'exfac03-east-3-3': [
    {
      question: "Hva kjennetegnet utgangspunktet i 1949?",
      options: ["Industri konsentrert i noen kystbyer og i nordøst, skadet infrastruktur, jordbruk som hovednæring og lav lesekyndighet", "En godt utbygd industri jevnt fordelt over hele landet, med tilhørende kraftforsyning, havner og transportnett", "Et samfunn uten jordbruksoverskudd og uten handel mellom regionene", "En økonomi som allerede var lagt om til planstyring før grunnleggelsen"],
      explanation: "Utgangspunktet var lavt og skjevt fordelt etter tiår med krig, og det er en innvending mot å lese vekstrater som mål på politikkens kvalitet. De tre andre svarene overdriver i hver sin retning.",
    },
    {
      question: "Hva var forskjellen på landreformen på 1950-tallet og kollektiviseringen som fulgte?",
      options: ["Den første ga jord til brukerne, den andre samlet bruk i felles drift", "Den første reformen gjaldt bare nordøst, mens den andre ble gjennomført i resten av landet noen år senere", "Den første var frivillig, den andre var pålagt ved lov", "Den første gjaldt eierskap, den andre gjaldt bare hvem som fikk kjøpe avlingen"],
      explanation: "De to reformene peker i motsatt retning på eierskapsdimensjonen, og begge kalles landreform. Å bruke ordet uten å si hvilken form du mener, kan gjøre et helt moment uleselig i en sammenligning.",
    },
    {
      question: "Hva kjennetegner planøkonomi som styringsform?",
      options: ["Planorganer fastsetter produksjonsmål og fordeler ressurser, og produksjonsmidlene er i offentlig eller kollektivt eie", "Staten setter overordnede mål for veksten, mens private eiere avgjør hva som faktisk produseres, i hvilket omfang og til hvilken pris", "Prisene bestemmes i markedet, mens staten eier bankene", "Staten regulerer utenrikshandelen, mens innenlandsk produksjon er fri"],
      explanation: "Eierskapet er en del av definisjonen, ikke bare planleggingen. De tre andre svarene beskriver blandingsformer, og det er nettopp sammenblandingen med dem som gjør reformperioden vanskelig å plassere.",
    },
    {
      question: "Hvorfor ble tungindustri prioritert foran forbruksvarer?",
      options: ["Fordi et land uten grunnindustri forblir avhengig av andre, og fordi grunnindustrien skulle bære resten", "Fordi produksjon av forbruksvarer var forbudt i en planøkonomi og først kunne tillates etter at industrien var ferdig bygget", "Fordi utenlandske givere krevde det som betingelse for bistand", "Fordi tungindustri krever mindre kapital enn lettere industri"],
      explanation: "Begrunnelsen var uavhengighet og oppbygging av produksjonsevne, og kostnaden var at forbruket ble holdt nede i mange år. Svaret om at tungindustri krever mindre kapital, er faktisk galt: tungindustri er nettopp den mest kapitalkrevende delen.",
    },
    {
      question: "Hva viser Det store spranget og tilbakeslaget om planstyring?",
      options: ["At planapparatets svakhet er avhengigheten av at informasjonen nedenfra er riktig", "At planlegging alltid gir dårligere resultater enn markeder, uansett hvilken sektor og hvilket tidsrom man ser på", "At mobilisering av arbeidskraft er et mer effektivt virkemiddel enn kapital", "At tilbakeslaget skyldtes forhold utenfor landet og ikke politikken"],
      explanation: "Kombinasjonen av urealistiske mål og innrapportering som ikke stemte, satte planapparatets svakhet på prøve i stor skala. Distraktoren om at planlegging alltid er dårligere, er en generalisering perioden ikke gir grunnlag for.",
    },
    {
      question: "Hva innebar husholdsansvarssystemet i jordbruket?",
      options: ["Husholdet fikk driftsansvar for et jordstykke, skulle levere en fastsatt mengde, og kunne beholde overskuddet", "Jorda ble solgt til husholdene som privat eiendom med full råderett, inkludert rett til å selge den videre eller pantsette den", "Kollektivbrukene ble slått sammen til større enheter med felles ansvar", "Staten overtok driften av alle bruk gjennom egne foretak"],
      explanation: "Ordningen koblet innsats til utbytte uten å endre det formelle eierskapet, og den er derfor verken kollektivisering eller privat eiendomsrett. Distraktoren om salg til privat eiendom er den vanligste forenklingen.",
    },
    {
      question: "Hva var de spesielle økonomiske sonene?",
      options: ["Avgrensede områder der utenlandske selskaper kunne etablere seg på andre vilkår enn ellers i landet", "Områder der all statlig eiendom ble solgt til private eiere, og der planleggingen ble opphevet i sin helhet", "Regioner som fikk fritak fra planøkonomien i sin helhet, også i jordbruket", "Frihandelsområder opprettet i samarbeid med nabolandene i regionen"],
      explanation: "Avgrensningen gjorde åpningen mulig å prøve ut og reversere uten å endre systemet i landet som helhet. Distraktorene overdriver rekkevidden på hver sin måte, og alle tre ville gjort omleggingen mer radikal enn den var.",
    },
    {
      question: "Hvordan bør statens rolle i reformperioden beskrives presist?",
      options: ["Markedene ble tatt i bruk som redskap innenfor en ramme staten fortsatt satte", "Staten trakk seg ut av økonomien og overlot styringen til markedet, med regulering som eneste gjenværende virkemiddel", "Planøkonomien ble videreført uendret, med markeder bare på papiret", "Staten solgte sine foretak og beholdt bare regulering av utenrikshandelen"],
      explanation: "Statens eierskap i sentrale sektorer besto samtidig som markedene ble utvidet, og verken planøkonomi eller markedsøkonomi treffer kombinasjonen. Distraktorene beskriver de to rene kategoriene som nettopp ikke passer.",
    },
    {
      question: "Hva knyttet registreringssystemet rettigheter til?",
      options: ["Registrert bosted", "Arbeidsgiverens plassering i planhierarkiet, altså hvilken sektor foretaket hørte til", "Utdanningsnivået den enkelte hadde oppnådd i det offentlige skolesystemet", "Medlemskap i en av de kollektive jordbruksenhetene på landsbygda"],
      explanation: "Systemet gjorde skillet mellom by og land til en formell kategori og ikke bare en geografisk. Det er noe annet enn urbanisering, som handler om hvor folk flytter, ikke om hvilke rettigheter de har når de kommer fram.",
    },
    {
      question: "Hva er robust om ettbarnspolitikken?",
      options: ["At den var statlig håndhevet gjennom et apparat med sanksjoner og insentiver", "At den alene forklarer fallet i fødselstall i perioden, uavhengig av urbanisering og økonomisk utvikling", "At den gjaldt likt for alle befolkningsgrupper uten unntak", "At den ble innført før urbaniseringen begynte å påvirke fødselstallene"],
      explanation: "Håndhevingen er dokumentert og skrives i indikativ, mens årsaksvekten er omstridt: fødselstallene begynte å falle før ordningen ble innført. Svarene om at ordningen gjaldt likt for alle og at den kom før urbaniseringen, er dessuten faktisk gale.",
    },
    {
      question: "Hva skjedde med ulikheten i reformperioden?",
      options: ["Forskjellene økte, særlig mellom kystprovinser og innland og mellom by og land", "Forskjellene ble redusert i takt med at produksjonen vokste, slik at gevinsten ble jevnt fordelt mellom regionene", "Forskjellene holdt seg uendret gjennom hele perioden", "Forskjellene forsvant mellom regioner, men økte mellom yrkesgrupper"],
      explanation: "At forskjellene økte og at den geografiske dimensjonen var sterk, er godt dokumentert. Hvor mye av økningen som var en nødvendig følge av markedsåpningen, er derimot omstridt, og et svar bør si det.",
    },
    {
      question: "Hva er bruddlesningen av reformperioden?",
      options: ["At eierstruktur, prissystem, jordbruksorganisering og forholdet til omverdenen ble lagt om, altså en systemendring", "At det politiske systemet ble endret sammen med økonomien, slik at hele styringsmodellen ble lagt om samtidig", "At staten mistet kontrollen over utviklingen etter markedsåpningen", "At reformene ble innført samlet og på én gang, ikke gradvis"],
      explanation: "Bruddlesningen gjelder mekanismen for hvordan ressurser fordeles, ikke det politiske systemet. Svaret om at reformene ble innført samlet og på én gang, er dessuten faktisk galt: omleggingen var gradvis og forsøksvis.",
    },
    {
      question: "Hva er videreføringslesningen av reformperioden?",
      options: ["At målet og maktstrukturen besto, og at bare redskapene skiftet", "At planøkonomien i praksis fortsatte som før under et nytt navn, uten reelle endringer i hvordan ressurser ble fordelt", "At markedene aldri fikk noen reell betydning for produksjonen", "At reformene ble reversert etter få år og systemet gjenopprettet"],
      explanation: "Lesningen bygger på at prosjektet var det samme og at staten beholdt de sentrale posisjonene. De tre andre svarene benekter at omleggingen fant sted, og det er en langt sterkere påstand enn videreføringslesningen fremmer.",
    },
    {
      question: "Hvorfor er ordet landreform en språkfelle i dette kapitlet?",
      options: ["Fordi det dekker to reformer med motsatt retning som ble gjennomført på samme jord med få års mellomrom", "Fordi begrepet ikke brukes i faglitteraturen om regionen", "Fordi reformene bare gjaldt deler av landet og ikke helheten", "Fordi ordet på norsk betyr noe annet enn på engelsk"],
      explanation: "Jord til brukeren og kollektivisering går i motsatt retning på eierskapsdimensjonen, og begge kalles landreform. Å nevne fella selv når du bruker begrepet, er et billig grep som viser presisjon.",
    },
    {
      question: "Hvordan skal staten omtales i dette kapitlet?",
      options: ["Som Folkerepublikken Kina, med beskrivelser av det politiske systemet plassert der begrepene defineres", "Med den betegnelsen som best uttrykker forfatterens vurdering av systemet", "Bare som Kina, siden navnet er kortere og mer leservennlig", "Med vekslende betegnelser, slik at teksten ikke blir gjentakende"],
      explanation: "En verdiladet betegnelse brukt som navn på en stat gjør en beskrivelse til en vurdering uten at det sies. Regelen er ikke høflighet, men presisjon: den holder beskrivelse og vurdering adskilt gjennom hele svaret.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av hva markedene ble i reformperioden?",
      options: ["Et redskap innenfor en statlig ramme", "Den nye grunnstrukturen i økonomien, som erstattet planlegging fullstendig i alle sektorer", "En midlertidig ordning som senere ble avviklet igjen til fordel for planstyring", "Et system som gjaldt for jordbruket alene og ikke berørte industrien i det hele tatt"],
      explanation: "Formuleringen fanger både at markedene ble reelle og at rammen besto. De tre andre svarene overdriver eller undervurderer omleggingen, og alle tre er lette å motsi med konkrete eksempler.",
    },
  ],
  'exfac03-east-3-4': [
    {
      question: "Hva kjennetegnet Sør-Koreas utgangspunkt?",
      options: ["Kolonitid til 1945 og deretter krig, med ødelagt infrastruktur og tungindustrien i hovedsak nord for delingslinjen", "En intakt industribase fra kolonitiden som gjorde rask vekst mulig uten store nye investeringer i anlegg og kraft", "Et land uten jordbruk av betydning, der befolkningen allerede bodde i byer", "En økonomi som ved delingen fikk mesteparten av kraftforsyningen på halvøya"],
      explanation: "Utgangspunktet var svært lavt, og tungindustrien og kraftforsyningen lå i hovedsak nord for delingslinjen. Svaret om at landet fikk mesteparten av kraftforsyningen, snur nettopp dette forholdet, og det er en faktafeil som ødelegger sammenligningen med naboen.",
    },
    {
      question: "Hva er robust og hva er omstridt ved kolonitidens arv?",
      options: ["At perioden fant sted og at det ble bygget infrastruktur, er robust; hvordan virkningene skal vurderes, er omstridt", "At selve perioden fant sted, er omstridt, mens virkningene av den er godt dokumentert i statistikken", "Begge deler er robuste, og uenigheten gjelder bare ordvalget", "Begge deler er omstridte, siden kildene fra perioden er kolonimaktens egne"],
      explanation: "At noe ble bygget, er en faktapåstand; at byggingen var til gagn for de koloniserte, er en vurdering. Svaret om at begge deler er omstridte, er falsk balanse: kildekritiske innvendinger gjør ikke selve kolonistyret usikkert.",
    },
    {
      question: "Hva gjorde landreformen på 1950-tallet?",
      options: ["Endret maktforholdene på landsbygda, ga brukerne overskuddet av eget arbeid og reduserte ulikheten tidlig", "Samlet bruk i kollektive enheter med felles drift og felles leveringsplikt til staten", "Overførte jorda til staten som deretter drev den gjennom foretak", "Fritok jordbruket for leveringsplikt til byene"],
      explanation: "Reformen gikk i retning jord til brukeren, og den er en av forklaringene på at ulikheten holdt seg moderat. Distraktoren om kollektivisering beskriver den motsatte reformen, gjennomført i andre land i samme periode.",
    },
    {
      question: "Hva gjorde statlig kredittstyring til noe mer enn en subsidie?",
      options: ["Motytelsen: støtten var koblet til eksportresultater og kunne trekkes tilbake", "At den ble gitt gjennom statlig kontrollerte banker og ikke over statsbudsjettet, slik at den ikke måtte vedtas årlig", "At den gjaldt alle bedrifter likt, uavhengig av bransje og størrelse", "At den var rentefri og derfor billigere enn vanlige lån"],
      explanation: "Koblingen til målbare resultater ga en tilbakemelding en ren overføring ikke gir. Distraktoren om lik behandling er dessuten faktisk gal: styringen besto nettopp i å velge ut hvem som fikk.",
    },
    {
      question: "Hvorfor kalles eksportmarkedet en prøve staten ikke kunne manipulere?",
      options: ["Fordi etterspørselen ute avgjorde om varene ble solgt, uavhengig av innenlandske vedtak", "Fordi utenlandske myndigheter kontrollerte kvaliteten på varene før de slapp inn på markedene sine", "Fordi eksporttall er lettere å forfalske enn produksjonstall", "Fordi staten hadde forpliktet seg gjennom handelsavtaler til ikke å gripe inn"],
      explanation: "En ekstern etterspørsel gir en løpende opplysning om hva økonomien kan produsere konkurransedyktig. Svaret om at eksporttall er lette å forfalske, snur poenget: nettopp fordi de er vanskelige å manipulere, fungerer de som prøve.",
    },
    {
      question: "Hva kjennetegnet de store konsernene?",
      options: ["Familiekontrollerte industrigrupper med virksomhet i mange bransjer, som mottok statlig kreditt", "Statseide foretak med produksjonsmål fastsatt i flerårige planer og med leveranser til bestemte mottakere", "Utenlandske selskaper som fikk etablere seg i egne soner", "Små og mellomstore bedrifter organisert i nettverk av underleverandører"],
      explanation: "Eierskapet var privat; det staten kontrollerte, var kapitaltilgangen. Svaret om små og mellomstore bedrifter i nettverk beskriver den motsatte eksportmodellen, som finnes i det andre landet i samme gruppering.",
    },
    {
      question: "Hvilken rekkefølge fulgte handelsstrategiene?",
      options: ["Skjerming av hjemmemarkedet først, eksportframstøt etter", "Eksportframstøt først, og skjerming av hjemmemarkedet etter at industrien var etablert og trengte beskyttelse", "Full frihandel fra begynnelsen av vekstperioden", "De to strategiene ble aldri brukt i samme land"],
      explanation: "Rekkefølgen er selv et moment, og den finnes i flere av landene i Del 3. Svaret om at strategiene aldri brukes i samme land, er en vanlig misforståelse: de brukes ofte etter hverandre og utelukker ikke hverandre.",
    },
    {
      question: "Hva sier det om en stat at den har femårsplaner?",
      options: ["Ingenting alene — planer finnes både med statlig eierskap og med private eiere", "At produksjonsmidlene i den aktuelle sektoren er i offentlig eie og drives av staten selv", "At markedet er avskaffet i den aktuelle sektoren", "At landet følger en sovjetisk modell for økonomisk styring"],
      explanation: "Det avgjørende er om målene er bindende kvoter for anlegg staten eier, eller retningsgivende for private aktørers rammer. Å lese planer som bevis på planøkonomi er en av de raskeste feilene i denne klyngen.",
    },
    {
      question: "Når fant demokratiseringen sted?",
      options: ["Mot slutten av 1980-tallet, etter at det meste av den raske veksten hadde funnet sted", "Umiddelbart etter krigen på halvøya, altså allerede tidlig på 1950-tallet, som del av gjenoppbyggingen", "Samtidig med at eksportframstøtet startet på 1960-tallet", "Først etter finanskrisen mot slutten av 1990-tallet"],
      explanation: "Rekkefølgen — vekst først, politisk omlegging etter — er dokumentert, og den er utgangspunktet for kapitlets drøftingsakse. De tre andre svarene ville alle endret hvilket spørsmål som i det hele tatt kan stilles.",
    },
    {
      question: "Hva er følgelesningen av forholdet mellom vekst og demokratisering?",
      options: ["At veksten skapte en stor, utdannet befolkning med ressurser og interesse av politisk innflytelse", "At demokratiet var en forutsetning for at veksten i det hele tatt kunne begynne, siden investorer krever forutsigbarhet", "At de to prosessene ikke har noen sammenheng i det hele tatt", "At internasjonalt press alene forklarer omleggingen"],
      explanation: "Lesningen forklarer hvorfor kravene ble sterke, og den støttes av sammenfallet i tid. Motlesningen sier derimot at omleggingen kom på tross av modellen, og begge er forsvarlige.",
    },
    {
      question: "Hvordan skal demokratisering beskrives i et svar?",
      options: ["Som en historisk prosess med årsaker og aktører", "Som et naturlig endepunkt alle stater beveger seg mot etter hvert som de blir rikere og mer utdannede", "Som en tilfeldighet uten forklarbare årsaker", "Som et resultat av utenlandsk innblanding i innenrikspolitikken"],
      explanation: "En framstilling som behandler demokratisering som naturlig, forutsetter det som skulle forklares. Svarene om ren tilfeldighet og om utenlandsk innblanding erstatter én ubegrunnet forklaring med en annen.",
    },
    {
      question: "Hva kjennetegnet arbeidslivet i vekstperioden?",
      options: ["Lange arbeidsdager, lav lønn i forhold til produktivitetsveksten, og begrensninger på faglig organisering", "Sterke fagforeninger med stor innflytelse på lønnsdannelsen og på arbeidstidens lengde i de store bedriftene", "Kort arbeidstid og høy lønn som følge av mangel på arbeidskraft", "Statlig fastsatte lønninger i alle bransjer etter en sentral tariff"],
      explanation: "Lav lønnsvekst i forhold til produktivitet er en av mekanismene bak eksportens konkurranseevne, og dermed en del av forklaringen på veksten. Hvordan kostnaden skal veies mot resultatene, er derimot en vurdering.",
    },
    {
      question: "Hva var bistand og markedsadgang i moderniseringsanalysen?",
      options: ["Betingelser, ikke virkemidler — de hører til dimensjonen om forholdet til omverdenen", "Virkemidler staten selv rådde over og kunne dosere etter behov i de ulike fasene av industribyggingen", "Et uttrykk for statens grep om økonomien innenlands", "En del av utgangspunktet før moderniseringen begynte"],
      explanation: "Å plassere dem riktig i matrisen er en del av øvelsen: de handler om omverdenen og ikke om hva staten selv gjorde. Legger du vekt på dem, flytter du forklaringen fra politikk til omstendigheter.",
    },
    {
      question: "Hva endret seg i forholdet mellom stat, banker og konsern etter krisen på slutten av 1990-tallet?",
      options: ["Rammene ble i større grad satt av regulering enn av tildeling", "Staten trakk seg helt ut av økonomien og overlot både kreditt og industriprioriteringer til private aktører", "Konsernene ble overtatt av staten og drevet videre som offentlige foretak", "Kredittstyringen ble utvidet til også å omfatte små bedrifter"],
      explanation: "Statens rolle skiftet kanal — fra å velge hvem som skulle få kapital, til å sette regler for hvordan kapital kunne gis. Det er samme type skifte som Japan gjennomgikk mellom sine to forløp.",
    },
    {
      question: "Hva skiller Sør-Korea fra Taiwan innad i grupperingen?",
      options: ["Noen få svært store konsern mot en eksportsektor av små og mellomstore bedrifter", "Statlig eierskap i selve produksjonen mot privat eierskap i alle ledd av eksportnæringen", "Eksportrettet vekst mot rent hjemmemarkedsrettet produksjon", "Demokratisering på 1980-tallet mot fortsatt ettpartistyre"],
      explanation: "Begge landene styrte gjennom rammer og begge eksporterte; forskjellen ligger i eierstrukturen i eksportsektoren. Svarene om hjemmemarkedsrettet produksjon og om fortsatt ettpartistyre er faktisk gale, og de ville plassert landene på hver sin side i grupperingen.",
    },
    {
      question: "Hvorfor er det verdt å nyansere innad i gruppene i et grupperingssvar?",
      options: ["Fordi det viser at grupperingen er forstått og ikke pugget, og fordi den bygger på kanal og ikke på eierstruktur i detalj", "Fordi grupperingen egentlig er feil og bør avvises", "Fordi sensor krever at alle fire land behandles hver for seg", "Fordi nyanseringen erstatter behovet for å svare på selve grupperingen"],
      explanation: "To land kan havne på samme side og likevel være ulike, og å si det koster tjue ord. Svaret om at nyanseringen erstatter grupperingssvaret, snur poenget: den kommer i tillegg, ikke i stedet for.",
    },
  ],
  'exfac03-east-3-5': [
    {
      question: "Hva kjennetegnet utgangspunktet i den nordlige delen av halvøya etter 1945?",
      options: ["Mesteparten av kolonitidens tungindustri, gruvedrift og vannkraft lå der, mens jordbruket lå tyngre i sør", "Området hadde verken industri eller kraftforsyning av betydning, og måtte bygges opp fra grunnen etter 1945", "Jordbruket var det viktigste, mens industrien lå i sør", "Området var uberørt av kolonitidens utbygging"],
      explanation: "Fordelingen snur den vanlige forventningen, og den gjør sammenligningen mellom de to statene mer interessant enn en enkel fortelling om to systemer. Krigen ødela senere store deler av dette.",
    },
    {
      question: "Hvilken form for sterk stat er dette et eksempel på?",
      options: ["Eierskap og plan", "Betingelser og rammer, altså styring av private eiere gjennom kreditt, valutatildeling og tollpolitikk", "En blanding der staten eier oppstrømsindustrien og lar nedstrøm være privat", "Rammestyring gjennom veiledning fra departementene til private konsern"],
      explanation: "Produksjonsmidlene lå i offentlig eie og målene ble satt sentralt, altså den rene formen for eierskap og plan. De tre andre svarene beskriver former som hører hjemme i andre av landkapitlene i denne delen.",
    },
    {
      question: "Hva var selvbergingsprogrammet i økonomisk forstand?",
      options: ["Vekt på innenlandske ressurser og egen industri, med minst mulig avhengighet av andre", "En strategi for å eksportere mest mulig til flest mulig land, slik at inntektene ikke ble avhengige av én partner", "En plan for å ta opp lån i utlandet for å finansiere industribygging", "Et program for å avvikle tungindustrien til fordel for jordbruk"],
      explanation: "Programmet var uavhengighet, mens praksis i lange perioder innebar betydelig avhengighet av bistand og subsidiert handel. Spennet mellom program og praksis er kapitlets viktigste analytiske poeng.",
    },
    {
      question: "Hva kjennetegnet handelen med omverdenen?",
      options: ["Den var bundet til land i samme politiske krets, ofte på vilkår som ikke fulgte verdensmarkedet", "Den var fri og rettet mot de markedene som til enhver tid ga best pris, uavhengig av politiske forbindelser", "Den var fullstendig fraværende, altså full selvforsyning", "Den ble drevet gjennom utenlandske selskaper etablert i egne soner"],
      explanation: "Handelen var betydelig, men politisk bundet — det er noe annet enn autarki. Bindingen forklarer også hvorfor bortfallet av ordningen fikk så store følger senere.",
    },
    {
      question: "Hva utløste krisen på 1990-tallet?",
      options: ["Sovjetunionens sammenbrudd fjernet den subsidierte handelen og bistanden", "En omlegging av den innenlandske landbrukspolitikken som førte til at avlingene sviktet flere år på rad", "Innføringen av markedsreformer etter modell fra naboland", "En internasjonal handelsavtale landet valgte å tre ut av"],
      explanation: "Bortfallet rammet energi, innsatsvarer, drivstoff og kunstgjødsel samtidig, og fikk følger for industri og jordbruk på én gang. Krisen er derfor et eksempel på hvor sårbar en politisk bundet handel gjør en økonomi.",
    },
    {
      question: "Hvordan oppsto de uformelle markedene?",
      options: ["Nedenfra, som svar på at det statlige fordelingssystemet sviktet under krisen", "Ovenfra, gjennom en reformbeslutning etter modell fra naboland, med regelverk og kreditt på plass fra starten", "Gjennom avtaler med utenlandske selskaper om detaljhandel", "Ved at kollektivbrukene ble omgjort til private foretak ved lov"],
      explanation: "Markedene oppsto som nødløsning og ble senere en varig del av økonomien, med varierende grad av tolerering. Kontrasten til en reform besluttet ovenfra er et godt sammenligningspunkt.",
    },
    {
      question: "Hva er hovedregelen for hvordan datagrunnlaget skal behandles i et svar?",
      options: ["Si hva som er hovedbildet, og si hva du ikke kan tallfeste", "Bruk de mest presise tallene du finner, uten forbehold, slik at framstillingen virker godt underbygget", "Unngå å skrive om landet, siden grunnlaget er for usikkert", "Oppgi alltid flere tall side om side og la leseren velge"],
      explanation: "Usikkerhet om tall er ikke det samme som usikkerhet om retning, og å si det er et styrketegn. Å oppgi presise tall uten kilde gjør et svar mindre pålitelig, ikke mer.",
    },
    {
      question: "Hva er forskjellen på massemobilisering og planlegging?",
      options: ["Planen fordeler ressurser; mobiliseringen skal skaffe innsats ut over det ressursene tilsier", "Planen gjelder industrien og de tunge sektorene, mens mobiliseringen gjelder jordbruket og anleggsarbeid", "Planen er langsiktig, mobiliseringen gjelder alltid ett år av gangen", "Planen settes av staten, mobiliseringen organiseres av lokale myndigheter alene"],
      explanation: "De to ble brukt sammen og har ulike svakheter: planen avhenger av riktig informasjon, mobiliseringen kan ikke gi vedvarende produktivitetsvekst. De andre svarene innfører skiller som ikke ligger i begrepene.",
    },
    {
      question: "Hvordan skal staten omtales i dette kapitlet?",
      options: ["Som Nord-Korea (DPRK), med beskrivende begreper i stedet for verdiladede betegnelser", "Med den betegnelsen som best uttrykker forfatterens egen vurdering av styresettet i landet", "Med vekslende betegnelser for å unngå gjentakelse i teksten", "Bare med forkortelsen, siden fullt navn tar for mye plass i et kort svar"],
      explanation: "En verdiladet betegnelse erstatter som regel en presis beskrivelse, og det er derfor den koster på eksamen. Nøytralitetsregelen og presisjonsregelen peker samme vei her.",
    },
    {
      question: "Hva var forholdet til Sovjetunionen og Kina?",
      options: ["En balansegang mellom to store naboer, som ga et handlingsrom i valget mellom partnere", "Full underordning under den ene av de to store naboene gjennom hele perioden, uten rom for egne valg", "Alliansefrihet, altså ingen politiske bindinger i handelen", "Et rent handelsforhold uten politisk innhold"],
      explanation: "Handlingsrommet lå i valget mellom partnere, ikke i uavhengighet av dem. Distraktoren om alliansefrihet er nær, men gal: handelen og bistanden var politisk bundet i begge retninger.",
    },
    {
      question: "Hvorfor er militærprioriteringen en del av dimensjonen om statens grep om økonomien?",
      options: ["Fordi det er en prioritering i ressursbruken, ikke bare et sikkerhetspolitisk trekk", "Fordi forsvarssektoren formelt eier all industri i landet og fordeler produksjonen mellom sektorene", "Fordi militæret fastsetter produksjonsmålene i femårsplanene", "Fordi våpeneksport er hovedkilden til utenlandsk valuta"],
      explanation: "Prioriteringen forklarer noe om hva som har vært igjen til sivil industri og forbruk. Nøyaktige andeler kan ikke fastslås, og et svar bør si at bare hovedbildet er belagt.",
    },
    {
      question: "Hva kan sies trygt om utdanning i dette landet?",
      options: ["At systemet ble bygget ut og at deltakelsen har vært høy", "At resultatnivået er godt dokumentert i uavhengige undersøkelser og kan sammenlignes direkte med naboland", "At utdanning har vært forbeholdt en liten del av befolkningen", "At skolegangen har vært frivillig gjennom hele perioden"],
      explanation: "Skillet går mellom innsatsfaktorer, som kan beskrives, og resultater, som krever et grunnlag som ikke finnes. Svarene om at ordningen gjaldt likt for alle og at den kom før urbaniseringen, er dessuten faktisk gale.",
    },
    {
      question: "Hva er variantlesningen av denne moderniseringsveien?",
      options: ["At de samme virkemidlene som naboene brukte, ble brukt her i en mer gjennomført form", "At landet aldri gjennomførte noen modernisering i det hele tatt", "At utviklingen er identisk med naboenes og ikke krever egen behandling", "At forskjellen fra naboene bare skyldes ytre forhold"],
      explanation: "Variantlesningen sier at forskjellen er en gradsforskjell, og den motsatte lesningen at kombinasjonen gir en artsforskjell. De tre andre svarene er langt sterkere påstander enn noen av lesningene fremmer.",
    },
    {
      question: "Hva er annerledeslesningen av denne moderniseringsveien?",
      options: ["At kombinasjonen av fullstendig offentlig eierskap, politisk bundet handel, militær prioritering og selvbergingsprogram gir en økonomi uten ekstern prøve", "At landet er så lukket at ingenting kan sies om det", "At virkemidlene som ble brukt, ikke finnes i noe annet land", "At forskjellen ligger i det politiske systemet alene"],
      explanation: "Lesningen bygger på kombinasjonen, ikke på at de enkelte virkemidlene er unike. Svaret om at virkemidlene ikke finnes andre steder, er faktisk galt: hvert enkelt virkemiddel finnes hos naboene.",
    },
    {
      question: "Hva viser fordelingssystemet om ulikhet?",
      options: ["At tilgangen til varer var avhengig av bosted og plassering i samfunnsordningen, altså en ulikhet som ikke måles i inntekt", "At all ulikhet var avskaffet gjennom felles eierskap", "At prisene ble regulert, mens fordelingen ellers fulgte markedet", "At forskjellene bare gjaldt mellom by og land"],
      explanation: "Et fordelingssystem erstatter markedet i stedet for å regulere det, og derfor fikk sammenbruddet på 1990-tallet så direkte følger for hva folk fikk tak i. Distraktoren om prisregulering blander to ulike ordninger.",
    },
    {
      question: "Hvorfor skal de samme seks dimensjonene brukes her som på de andre landene?",
      options: ["Fordi analyseapparatet skal være det samme uansett hvilket land valgoppgaven fører deg til", "Fordi de seks dimensjonene er de eneste som finnes i faglitteraturen", "Fordi eksamen krever at alle seks brukes i hvert svar", "Fordi tilfellet ellers ville vært umulig å beskrive"],
      explanation: "Valgoppgaven tilbyr landet på lik linje med de tre andre, og en besvarelse måles på om den bruker apparatet. Distraktoren om at alle seks kreves, er gal: med et tak på 800 ord bruker du tre eller fire.",
    },
  ],
  'exfac03-east-3-6': [
    {
      question: "Hvor mange av de tjueen spørsmålene navngir Taiwan, og hvor mange terminer er det?",
      options: ["2 av 21 spørsmål, men bare 1 av 7 terminer, siden begge spørsmålene er fra samme termin", "2 av 21 spørsmål, fordelt på to ulike terminer med ett spørsmål i hver av dem", "4 av 21 spørsmål, fordelt på tre terminer", "1 av 21 spørsmål, i én termin"],
      explanation: "Begge spørsmålene er fra våren 2023, og enheten avgjør derfor hva tallet betyr. Leser du to spørsmål som to terminer, undervurderer du hvor smalt grunnlaget er.",
    },
    {
      question: "Er Taiwan et valgalternativ i valgoppgaven om moderniseringsveier?",
      options: ["Nei — den lister fire land uten Taiwan", "Ja, som ett av fem alternativer studenten kan velge mellom", "Ja, men bare i den utsatte terminen", "Det varierer mellom terminene"],
      explanation: "Valgoppgaven lister Japan, Folkerepublikken Kina, Nord-Korea og Sør-Korea. Taiwan kommer inn gjennom grupperingsspørsmålet i stedet, og det er en helt annen oppgavetype.",
    },
    {
      question: "Hva var Taiwans utgangspunkt etter 1945?",
      options: ["Japansk koloni fra 1895 til 1945, med eksportrettet jordbruk og utbygd infrastruktur, deretter nye myndigheter", "Et uberørt jordbrukssamfunn uten infrastruktur, uten skolevesen og uten eksportrettet produksjon av betydning", "En allerede industrialisert økonomi på europeisk nivå", "En koloni under en europeisk stormakt fram til 1945"],
      explanation: "Kolonitiden fra 1895 til 1945 er robust og skrives i indikativ. Hvordan de økonomiske virkningene skal vurderes, er derimot omstridt, og de to spørsmålene må holdes fra hverandre.",
    },
    {
      question: "Hva gikk landreformen rundt 1950 ut på?",
      options: ["Leienivåene ble satt ned, offentlig jord solgt til brukerne, og store eiendommer delt opp med kompensasjon", "Bruk ble slått sammen til kollektive enheter under felles drift", "Staten overtok all jord og drev den gjennom egne foretak", "Jordbruket ble fritatt for skatt for å øke produksjonen"],
      explanation: "Reformen gikk i retning jord til brukeren, og kompensasjonen til tidligere eiere ble delvis gitt i aksjer i statlige foretak — slik at kapital fra jordbruket gikk videre inn i industrien. Distraktoren om kollektivisering beskriver den motsatte reformen.",
    },
    {
      question: "Hvorfor ble importsubstitusjonen forlatt?",
      options: ["Hjemmemarkedet var for lite til å bære industrien som allerede var bygget", "Tollmurene var forbudt etter internasjonale avtaler landet hadde sluttet seg til i etterkrigstiden", "Industrien manglet arbeidskraft og måtte flyttes ut", "Strategien ga for høy ulikhet mellom by og land"],
      explanation: "Overgangen til eksport var et svar på en grense, ikke en ideologisk kursendring, og det er rekkefølgen som gjør dette til et moment. Å kunne si hvorfor en strategi ble forlatt, er forskjellen på en opplysning og en forklaring.",
    },
    {
      question: "Hva var en eksportsone?",
      options: ["Et avgrenset område der bedrifter kunne produsere for eksport på egne vilkår, uten toll på innsatsvarer", "Et område der all handel var forbudt utenom med ett bestemt land, etter avtale inngått mellom myndighetene", "En region som ble fritatt for all statlig regulering", "Et samarbeidsområde opprettet sammen med nabolandene"],
      explanation: "Sonen er et avgrenset unntak fra et ellers regulert regime, og den lar staten prøve ut åpenhet uten å legge om hele økonomien. Samme logikk finnes i sonene i Folkerepublikken Kina to tiår senere.",
    },
    {
      question: "Hva kjennetegnet eksportsektoren i Taiwan?",
      options: ["Mange små og mellomstore, ofte familieeide bedrifter i nettverk av underleverandører", "Noen få svært store familiekontrollerte konsern med virksomhet i mange bransjer samtidig", "Statseide foretak med planfastsatte produksjonsmål", "Utenlandske selskaper som eide det meste av produksjonen"],
      explanation: "Formen ga høy omstillingsevne og en bredere fordeling av inntektene, men gjorde store langsiktige satsinger vanskelige. Svaret om noen få store familiekontrollerte konsern beskriver modellen i det andre landet i samme gruppering.",
    },
    {
      question: "Hvor lå det statlige eierskapet i Taiwan?",
      options: ["I oppstrømsindustri og infrastruktur som energi, petrokjemi og samferdsel", "I eksportnæringene, som i sin helhet ble drevet av statlige foretak med planfastsatte mål", "I jordbruket, som ble kollektivisert etter 1949", "Ingen steder — all produksjon var privat"],
      explanation: "Staten leverte innsatsvarer og infrastruktur til en privat eksportsektor i stedet for å styre den gjennom eierskap. Det gir en tredje variant ved siden av de to vanlige formene for sterk stat.",
    },
    {
      question: "Hva løste de offentlige forskningsinstituttene?",
      options: ["At en eksportsektor av små bedrifter ikke hadde råd til å drive tung forskning alene", "At utenlandske selskaper nektet å selge teknologi til landet så lenge statusspørsmålet var uavklart", "At staten manglet inntekter til å finansiere skolevesenet", "At industrien manglet arbeidskraft i produksjonsleddet"],
      explanation: "Staten tok kostnaden ved forskningen og delte resultatet, blant annet gjennom å skille ut selskaper. Det er noe annet enn en subsidie, som bare senker kostnaden ved noe bedriften allerede gjør.",
    },
    {
      question: "Hva er robust om Taiwans demokratisering?",
      options: ["At unntakstilstanden ble opphevet i 1987 og valgordningene utvidet gjennom 1990-tallet", "At den fulgte automatisk av den økonomiske veksten, slik alle rike samfunn før eller siden opplever", "At den ble innført etter krav fra utenlandske myndigheter", "At den ikke har funnet sted i noen egentlig forstand"],
      explanation: "Forløpet er dokumentert og skrives i indikativ, med årsaker. At demokratiseringen fulgte automatisk av den økonomiske veksten, og at den kom etter krav fra utenlandske myndigheter, er forklaringer som må begrunnes, mens påstanden om at den ikke har funnet sted, er faktisk gal.",
    },
    {
      question: "Hvordan behandler boka Taiwans folkerettslige status?",
      options: ["Ved å beskrive posisjonene og si hvem som holder dem, uten å avgjøre spørsmålet", "Ved å slutte seg til den posisjonen som har flest tilhengere blant verdens stater i dag", "Ved å unngå temaet helt, siden det er politisk betent", "Ved å avgjøre spørsmålet ut fra folkerettslige kriterier"],
      explanation: "At partene er uenige, er et faktum; hvem som har det beste rettskravet, er en omstridt vurdering. Samtidig skal robuste funn som kolonitiden og demokratiseringen ikke pakkes inn i forbehold fordi statusspørsmålet er betent.",
    },
    {
      question: "Hvilke fire grupperinger har eksamen brukt?",
      options: ["Japan og Kina · Nord-Korea og Sør-Korea · Taiwan og Sør-Korea mot Kina og Nord-Korea · de fire valgalternativene", "Nord mot sør · øst mot vest · fastland mot øyer · store mot små land", "Japan alene · Kina alene · de to koreanske statene · Taiwan alene", "Demokratier mot ettpartistater · rike mot fattige · kystland mot innland · gamle mot nye stater"],
      explanation: "Den tredje skjærer på tvers av de to første og krever at fire enheter plasseres langs samme dimensjon. De tre andre svarene er inndelinger som ikke finnes i materialet.",
    },
    {
      question: "Hva bygger grupperingen som setter Taiwan og Sør-Korea mot Kina og Nord-Korea på?",
      options: ["Statens rolle i økonomisk modernisering", "Geografisk nærhet mellom landene og hvor lett det er å frakte varer mellom dem", "Befolkningsstørrelse og areal", "Hvilket språk som brukes i forvaltningen"],
      explanation: "Grupperingen følger en dimensjon, ikke en geografi, og den er derfor et argument om økonomiske systemer. Nettopp derfor plasseres Taiwan sammen med Sør-Korea framfor med fastlandet.",
    },
    {
      question: "Hvilke tre lesninger av hva grupperingen måler, er forsvarlige?",
      options: ["Statens rolle, eierskapsstruktur og politisk system", "Vekstrate over tid, befolkningsstørrelse og samlet handelsvolum med omverdenen", "Kolonihistorie, religion og skriftsystem", "Utdanningsnivå, urbanisering og levealder"],
      explanation: "De tre faller sammen i disse fire tilfellene, men de er ikke det samme, og et svar bør si hvilken lesning det bygger på. De tre andre svarene lister forhold grupperingen ikke er bygget på.",
    },
    {
      question: "Hvorfor kan grupperingen ikke leses som privat mot offentlig eierskap?",
      options: ["Fordi statlig eierskap finnes på begge sider, blant annet i oppstrømsindustri hos Taiwan", "Fordi alle fire landene hadde omtrent like mye statlig eierskap målt som andel av økonomien", "Fordi eierskap ikke lar seg måle på en meningsfull måte", "Fordi eierskapet endret seg for raskt til å kunne sammenlignes"],
      explanation: "Grupperingen bygger på hvor styringen av den næringen spørsmålet gjelder, faktisk lå. Å se dette er det som skiller et presist grupperingssvar fra en forenkling.",
    },
    {
      question: "Hva kjennetegnet ulikheten under veksten i Taiwan?",
      options: ["Moderate forskjeller etter internasjonal målestokk, knyttet blant annet til landreform og spredt eierstruktur", "Svært store forskjeller som følge av at eksportinntektene var konsentrert i noen få store bedrifter", "Fullstendig utjevning gjennom statlig omfordeling", "Økende forskjeller mellom regioner, men utjevning mellom yrkesgrupper"],
      explanation: "En spredt eierstruktur gir en bredere fordeling av inntektene fra vekst, og dimensjonen skiller de to landene på samme side i grupperingen. Målestokken må alltid oppgis: moderat i forhold til hva?",
    },
  ],
  'exfac03-east-4-1': [
    {
      question: "Hva er en fokusanvisning i et eksamensspørsmål?",
      options: ["Leddet som binder svaret til bestemte sider av temaet, og som avgjør hva svaret må inneholde", "Leddet som gir kandidaten adgang til å velge ett land eller ett område å fordype seg i", "Den innledende opplysningen om hvor mange ord besvarelsen skal ligge innenfor", "Sensors merknad om hvilke deler av pensum spørsmålet skal leses opp mot"],
      explanation: "Fokusanvisningen lukker: den sier hvilke sider av temaet svaret skal behandle, og et svar som ikke behandler dem, har ikke besvart spørsmålet. Fella er å forveksle den med et valgledd, som gjør det motsatte og åpner for at du selv velger fordypning. Ordgrenseopplysningen og pensumhenvisninger er egne opplysninger og hører ikke til fokusleddet.",
    },
    {
      question: "Et svar beskriver konfucianismen bredt og godt, men behandler aldri forholdene mellom statene, selv om spørsmålet ber om nettopp det. Hvilken mangel er dette?",
      options: ["Mangel nr. 6 — å ignorere fokusanvisningen", "Mangel nr. 8 — å skrive land etter land i stedet for dimensjon for dimensjon", "Mangel nr. 2 — å nevne færre momenter enn bestått-gulvet krever", "Mangel nr. 9 — å bygge svaret på allmennkunnskap i stedet for på pensum"],
      explanation: "Svaret er faglig riktig, men det svarer på et annet spørsmål enn det som ble stilt, og det er nettopp det å ignorere fokusanvisningen betyr. Å skrive land etter land er en strukturfeil i sammenligningsoppgaver og noe helt annet. Momenttallet kan godt være i orden i et slikt svar, og stoffet kan være hentet fra pensum — det er plasseringen som svikter.",
    },
    {
      question: "Hva skiller et tributtforhold fra et kolonisystem?",
      options: ["I et tributtforhold beholdt den underordnede parten sitt eget styre og sine egne lover", "I et tributtforhold ble all handel mellom partene forbudt så lenge forholdet varte", "I et tributtforhold var det den overordnede parten som betalte for å opprettholde ordningen", "I et tributtforhold ble embetsverket i det underordnede landet utnevnt fra det overordnede hoffet"],
      explanation: "Tributtforholdet var en rangordning uttrykt i ritual, ikke en overtakelse av styret: administrasjon, lover og embetsverk forble den underordnede partens egne. En kolonimakt overtar nettopp disse funksjonene. Handelen ble ikke forbudt, men var tvert imot en av gevinstene ved å delta, og gaveutvekslingen gikk begge veier uten å gjøre den overordnede parten til betaler.",
    },
    {
      question: "Hva betyr det at Øst-Asia beskrives som en kultursfære?",
      options: ["At området deler skriftsystem, tekstkanon og religiøse og etiske tradisjoner", "At språkene i området tilhører den samme språkfamilien og er innbyrdes i slekt", "At statene i området har inngått en formell politisk union med felles institusjoner", "At befolkningene i området regner seg som ett folk med felles opphav og historie"],
      explanation: "Kultursfæren er bygget på delte tekster og former, ikke på slektskap mellom språk, politisk union eller felles avstamning. Den nære fella er språkfamilien: at tegnene ble lest i flere av statene, betyr ikke at talespråkene er beslektet, og skillet mellom felles skrift og felles språk er det letteste feilgrepet i et svar om regional sammenheng.",
    },
    {
      question: "Hvilket av de fem klassiske forholdene er beskrevet som et forhold mellom likemenn?",
      options: ["Forholdet mellom venn og venn", "Forholdet mellom eldre og yngre bror, siden begge tilhører samme slektsledd", "Forholdet mellom ektemann og hustru, siden husholdet ble regnet som én enhet", "Forholdet mellom hersker og undersått, siden pliktene går begge veier"],
      explanation: "Fire av de fem relasjonene er rangordnet, og bare forholdet mellom venner er satt opp som et forhold mellom likemenn. De tre andre er nære feller fordi de rommer gjensidige plikter — men gjensidighet er ikke det samme som likhet i rang, og forholdet mellom brødre er uttrykkelig ordnet etter alder.",
    },
    {
      question: "Hva innebærer filial fromhet?",
      options: ["Plikten til å ære og sørge for foreldrene, også etter deres død, gjennom ritualene for forfedrene", "Plikten til å vise ærbødighet overfor enhver som har høyere rang enn en selv i samfunnet", "Plikten til å ta imot embete når staten kaller, uansett hva slektningene måtte mene om det", "Plikten til å gi avkall på egne eiendeler til fordel for det eldste barnet i husholdet"],
      explanation: "Filial fromhet er knyttet til ett bestemt forhold, forholdet til foreldrene, og den har en rituell side som fortsetter etter deres død. Den nære fella er å utvide den til generell respekt for autoritet — det er en beslektet, men videre forestilling uten den rituelle formen. Embetsplikt og arvedeling er andre spørsmål og følger ikke av denne doktrinen.",
    },
    {
      question: "Hvordan var embetseksamenssystemet fordelt mellom statene i regionen?",
      options: ["Det sto sentralt i Kina og ble tatt opp i Korea, mens Japan ikke bygde et tilsvarende system", "Det ble innført samtidig i Kina, Korea og Japan og fikk om lag samme form alle tre steder", "Det fantes bare i Japan, der de klassiske tekstene ble lest av en egen krigerstand", "Det ble avviklet i Kina før det ble tatt i bruk noe annet sted i regionen"],
      explanation: "Riktig svar er at systemet sto sentralt i Kina og ble tatt opp i Korea, mens Japan leste de samme tekstene uten å bygge et tilsvarende rekrutteringssystem. Nettopp den forskjellen er nyttig i et svar, fordi den bryter bildet av en ensartet region: felles kanon ga ikke felles institusjoner.",
    },
    {
      question: "Hva skiller lærdomsstanden fra et presteskap?",
      options: ["Lærdomsstanden forvaltet tekster og embeter, ikke sakramenter og enerett på det hellige", "Lærdomsstanden var arvelig, mens et presteskap alltid rekrutteres gjennom prøver og eksamener", "Lærdomsstanden var forbudt å delta i ritualer, som var forbeholdt herskerens egen slekt", "Lærdomsstanden fantes bare i Japan, mens de øvrige statene hadde religiøse embetsmenn"],
      explanation: "Lærdomsstandens grunnlag var kjennskap til klassikertekstene og adgangen til embeter som fulgte med, ikke forvaltning av det hellige. Å kalle den et presteskap ville flyttet tradisjonen over i den religiøse lesningen uten at det ble sagt. Rekrutteringen gikk i praksis gjennom lærdom og prøver, ikke gjennom arv alene, og standen deltok i ritualene snarere enn å være utestengt fra dem.",
    },
    {
      question: "Hva var klassikertekstenes funksjon i regionen?",
      options: ["De ga et felles sett referanser som lærde i ulike stater kunne vise til og bli forstått av", "De var en leseliste som ble revidert av hvert hoff for hver ny hersker som kom til makten", "De var forbeholdt herskerfamilien og ble ikke undervist utenfor hoffet i noen av statene", "De var skrevet i hvert lands eget talespråk og ble derfor lest i ulike versjoner"],
      explanation: "Kanonen var det håndfaste grunnlaget for kultursfæren: de samme tekstene, lest i den samme skriften, på tvers av statene. Den var ikke en leseliste som ble revidert, men et fast korpus med kommentartradisjoner rundt seg, og den ble lest langt utenfor hoffkretsen. At tekstene ble lest i klassisk skrift og ikke oversatt til hvert talespråk, er nettopp det som gjorde dem til en felles referanse.",
    },
    {
      question: "Hvilken rolle har ritualet i den konfucianske tenkemåten?",
      options: ["Det er den fastsatte formen som gjør et forhold riktig, og formen er delvis med på å skape holdningen", "Det er en ytre høflighetsform uten betydning for holdningen bak, og den kunne derfor sløyfes uten at forholdet ble noe annerledes", "Det er den delen av tradisjonen som utelukkende retter seg mot guddommer og naturmakter", "Det er en sen tilføyelse som først kom inn i tradisjonen med de moderne statsdannelsene"],
      explanation: "Ritualet er lærens praktiske side: den som gjør det som hører til, gang på gang, blir formet av det. Fella er å lese ritualet som ytre pynt på en indre holdning, for da forsvinner koblingen mellom doktrine og praksis. Mange av ritualene har heller ingen guddom som mottaker, men ordner forhold mellom levende eller mellom levende og døde slektninger.",
    },
    {
      question: "Hvilken av disse påstandene er et robust historisk funn og skal ikke pakkes inn i «noen mener»?",
      options: ["At konfuciansk arv faktisk har spredt seg i regionen", "At konfuciansk arv er hovedårsaken til den økonomiske veksten i regionen etter 1960", "At «konfucianske verdier» finnes som ett sammenhengende sett av holdninger i dag", "At konfucianismen bør regnes som en religion på linje med buddhismen"],
      explanation: "Spredningen av tekstkanon, embetsutdanning og ritualformer er dokumentert historie og ikke et meningsspørsmål. De tre andre påstandene er vurderinger som det finnes flere forsvarlige posisjoner på: årsaksvekten i den økonomiske veksten er faglig omstridt, det samme er om «konfucianske verdier» finnes som én ting, og om tradisjonen best leses som religion.",
    },
    {
      question: "Hva går kritikken av begrepet «konfucianske verdier» ut på?",
      options: ["At det brukes til å forklare motsatte utfall og gjør indre uenighet i samfunnene usynlig", "At det er oppfunnet i nyere tid og derfor ikke kan brukes om noe som helst historisk", "At det bygger på tekster som ikke lot seg lese utenfor det hoffet de ble skrevet ved", "At det er for snevert, fordi det bare dekker plikten mellom foreldre og barn"],
      explanation: "Kritikken er at begrepet forklarer for mye — både rask vekst og stagnasjon — og at det dekker over at regionens samfunn selv har hatt levende uenighet om hierarki og familieplikt. Motposisjonen holder på at begrepet fanger en reell institusjonell arv. Kritikken går altså ikke ut på at begrepet er for snevert, og heller ikke på at tekstene var utilgjengelige.",
    },
    {
      question: "Hvilke tre trinn har redegjørelsen med anvendelse?",
      options: ["Definer begrepet, si hva som er omstridt ved det, og anvend det med ett eksempel per anvendelse", "Sett opp to kolonner, fyll begge, og vis til slutt hvordan en endring henger sammen med en kontinuitet", "Velg dimensjoner, fyll matrisen i kladden, og skriv deretter dimensjon for dimensjon", "Les alle alternativene, tell momentene du har på hvert av dem, og si i åpningen hva du valgte"],
      explanation: "Redegjørelsen med anvendelse går fra definisjon via det omstridte til anvendelsen med eksempel. De tre andre beskriver andre sjangre: tokolonneformen hører til endring og kontinuitet, dimensjonsmatrisen til sammenligningen, og momenttellingen til valgoppgaven. Å bruke feil arkitektur er en disponeringsfeil som koster selv når stoffet er riktig.",
    },
    {
      question: "Hva mangler i et eksempel som navngir begrepet, gir eksempelet og stopper der?",
      options: ["Den eksplisitte koblingen mellom trekk ved eksempelet og ledd i begrepet, og setningen om hva som ville gjort eksempelet dårlig", "En kilde med forfatternavn og opplysning om hvor eksempelet er hentet fra, slik at en leser kan kontrollere det og finne det igjen selv", "Et andre eksempel på det samme poenget, som viser at kunnskapen er bred nok", "En innledende oversikt over hele periodens hendelser før eksempelet presenteres"],
      explanation: "Firetrinnsformen krever at du sier hvilket trekk ved eksempelet som svarer til hvilket ledd i begrepet, og at du sier hva som ville gjort eksempelet dårlig. Et andre eksempel på samme poeng er derimot det første som skal kuttes når plassen er knapp, og et bakgrunnsavsnitt gir ingen uttelling i seg selv.",
    },
    {
      question: "Hva legges det vekt på når konfucianismen leses som statsideologi?",
      options: ["Bruken staten gjør av læren, altså hva den brukes til å begrunne", "Ritualene mot de døde og forestillingene om menneskets plass i en større orden", "De enkelte tekstenes tilblivelse og striden mellom kommentartradisjonene", "Hva den enkelte gjør for å bli et bedre menneske gjennom daglig øvelse"],
      explanation: "Statsideologi-lesningen spør hva læren legitimerer: hvem som skal styre, hvordan embetsverket rekrutteres, og hvorfor lydighet skyldes. Å lese konfucianismen som rituell praksis rettet mot forfedrene hører til den religiøse lesningen, og å lese den som en lære om personlig dyd hører til den etiske lesningen; når tekstene ble til, er et filologisk spørsmål og ikke en lesning av læren. Poenget i et svar er å si hvilken lesning du bruker, ikke å hevde at bare én er riktig.",
    },
    {
      question: "Hva menes med konfuciansk orden mellom stater?",
      options: ["At forbindelser mellom hoff ble tenkt som rangordnede forhold uttrykt gjennom ritual", "At statene i regionen inngikk skriftlige traktater som likeverdige og suverene parter", "At det samme lovverket gjaldt i alle statene som leste den samme tekstkanonen", "At herskerne i regionen tilhørte den samme slekten og derfor var ordnet etter alder"],
      explanation: "Ordenen mellom stater er den samme rangtanken som ordner forhold mellom mennesker, brukt på forholdet mellom hoff, og den uttrykkes i sendeferdenes og gavenes form. Den nære fella er å lese ordningen som en traktatordning mellom likeverdige parter — det er nettopp likeverdet som mangler. Felles lovverk og felles slekt fantes ikke.",
    },
    {
      question: "Hva krever V2021-veiledningen som bestått-gulv på hvert av de tre spørsmålene?",
      options: ["Minst tre momenter, og på endringsspørsmålet både endringer og kontinuiteter", "Minst ett moment, så lenge det er utviklet med et eksempel fra pensum", "En innledning, en hoveddel og en avslutning i alle tre besvarelsene", "At kandidaten viser til minst to navngitte forfattere fra pensumlitteraturen"],
      explanation: "Bestått-gulvet er minst tre momenter på hvert av de tre spørsmålene, og på endringsspørsmålet kreves begge sider. Ett godt utviklet moment er derfor ikke nok, selv om det er velskrevet. Kravet gjelder momenter og sider, ikke en bestemt avsnittsform eller et bestemt antall navngitte forfattere.",
    },
    {
      question: "Hva er sentrum-periferi-tenkning i denne sammenhengen?",
      options: ["Forestillingen om et sivilisatorisk sentrum der avstanden fra sentrum måler hvor kultivert et område regnes for å være", "En moderne økonomisk modell for hvordan handelen mellom rike og fattige land utvikler seg over tid, og for hvem som sitter igjen med gevinsten", "En beskrivelse av hvor hovedstedene i regionen lå i forhold til de viktigste handelsveiene", "En regel om at sendeferder alltid skulle gå fra kysten og innover mot innlandet"],
      explanation: "Tenkemåten var innebygd i den rituelle ordningen: rangen sa hvem som sto nærmest det som ble regnet som det siviliserte, ikke bare hvem som var sterkest. Boka gjengir forestillingen som en opplysning om hvordan datidens aktører tenkte, ikke som en beskrivelse av hvordan verden var. Den er verken en moderne økonomisk modell eller en geografisk regel.",
    },
  ],
  'exfac03-east-4-2': [
    {
      question: "Hvilken vei tok buddhismen inn i Øst-Asia?",
      options: ["Fra Sør-Asia til Kina, videre til den koreanske halvøya og derfra til Japan", "Fra Japan til den koreanske halvøya og videre inn i Kina langs kysten", "Direkte fra Sør-Asia til hver av statene i regionen, uavhengig av hverandre", "Fra Kina til Japan først, og først flere hundre år senere til halvøya"],
      explanation: "Retningen er dokumentert: fra Sør-Asia til Kina, derfra til halvøya og videre til Japan. Nettopp denne veien er grunnen til at buddhismeformene i regionen er beslektede og ikke bare tilfeldig like. De tre andre snur eller oppløser bevegelsen, og da forsvinner koblingen som gjør spredningen til et argument om regional sammenheng.",
    },
    {
      question: "Hvilken hovedretning av buddhismen ble dominerende i Øst-Asia?",
      options: ["Mahayana, med idealet om å arbeide for alles frigjøring", "Den retningen som står sterkest på Sri Lanka og i Sørøst-Asia i dag", "En retning som oppsto i Japan og senere ble ført tilbake til fastlandet", "En retning uten buddhaskikkelser eller bodhisattvaer som utøvere kan henvende seg til"],
      explanation: "Mahayana er hovedretningen i Øst-Asia, og den kjennetegnes blant annet av idealet om alles frigjøring og av et bredt utvalg skikkelser utøvere kan henvende seg til. Den nære fella er retningen som dominerer lenger sør og vest; å skrive «buddhismen» uten å si hvilken retning du behandler, gjør svaret unøyaktig.",
    },
    {
      question: "Hva er forholdet mellom chan og zen?",
      options: ["Det er den samme meditasjonsretningen, med ulike navn i ulike språk i regionen", "Det er to uavhengige retninger som oppsto hver for seg og senere møttes", "Chan er en klosterorden, mens zen er betegnelsen på lekfolkets praksis", "Chan er en daoistisk retning, mens zen er buddhistisk og oppsto i Japan"],
      explanation: "Chan i Kina og zen i Japan er navn på den samme meditasjonsretningen, som også ble tatt opp på den koreanske halvøya. Navnene er språkdrakter over én bevegelse, og det er nettopp derfor eksempelet er så nyttig i utviklingsleddet. De tre andre gjør retningen til to uavhengige tradisjoner, til et skille mellom kloster og lekfolk, eller til noe daoistisk.",
    },
    {
      question: "Hva kjennetegner det rene lands buddhisme?",
      options: ["Tilliten til en buddhas løfte om hjelp, med påkallelse som den bærende praksisen", "Kravet om mange års klosterskolering før noen praksis i det hele tatt kan utføres", "Avvisningen av alle ritualer til fordel for studium av de eldste tekstene alene", "Læren om at bare herskerens slekt kan oppnå frigjøring, og bare i sitt eget land"],
      explanation: "Retningen bygger på tillit til hjelp utenfra, og påkallelsen kan utføres av hvem som helst uten kloster og lang boklig skolering. Den nære fella er meditasjonsretningen, der vekten ligger på egen øvelse under veiledning — de to har eksistert side om side, og mange utøvere har forholdt seg til begge.",
    },
    {
      question: "Hva er forholdet mellom kloster og lekfolk i østasiatisk buddhisme?",
      options: ["Det er gjensidig: klosteret gir ritualer og lærdom, lekfolket gir underhold", "Det er ensidig, siden lekfolk ikke har adgang til klostrenes ritualer i noen form", "Det finnes ikke noe skille, siden alle utøvere lever etter de samme klosterreglene", "Lekfolket forvalter tekstene, mens klosteret bare har ansvar for begravelsene"],
      explanation: "Klosteret bevarte og forvaltet tekster og ritualer, mens lekfolket deltok ved bestemte anledninger og ga gaver som holdt klosteret i gang. Fella er å beskrive bare klosterlivet, for da beskriver du et mindretall av dem som faktisk praktiserer, og du får ikke fram at deltakelsen i stor grad var knyttet til anledninger.",
    },
    {
      question: "Hva menes med at daoismen har to sider?",
      options: ["En tekstside med begreper om veien, og en religiøs side med prester, ritualer og guddommer", "En kinesisk side og en japansk side, som utviklet seg helt uavhengig av hverandre", "En side som hører til statsforvaltningen, og en side som bare praktiseres i klostre", "En eldre side som er tapt, og en moderne side som ble konstruert i nyere tid"],
      explanation: "Den ene siden er tanketradisjonen knyttet til de klassiske tekstene, den andre en organisert religiøs tradisjon med prester, ritualer og et omfattende pantheon. De henger historisk sammen, men gjør ulike ting, og et svar bør si hvilken av dem det behandler. Å slå dem sammen er en av de vanligste unøyaktighetene i korte framstillinger.",
    },
    {
      question: "Hva er kami?",
      options: ["Betegnelsen på de maktene eller vesenene en helligdom er viet til", "Betegnelsen på prestene som utfører ritualene ved en japansk helligdom", "Betegnelsen på de klassiske tekstene som shinto-læren bygger på", "Betegnelsen på gaven en besøkende legger igjen ved helligdommens inngang"],
      explanation: "Kami er de maktene eller vesenene helligdommen er viet til, og de kan være knyttet til et fjell, en elv, en slekt, et yrke eller en historisk skikkelse. De er ikke ordnet i ett samlet system. Fella er å lete etter en tekstkanon i shinto: tyngdepunktet ligger i praksis og sted, ikke i en samlet læresetningsbygning.",
    },
    {
      question: "Hva dekker samlebetegnelsen folkereligion?",
      options: ["Religiøs praksis uten en institusjon med skrifter og lærde bak seg", "Den delen av buddhismen som utføres av munker utenfor de store klostrene", "Statens offisielle ritualer i de periodene da religion var underlagt hoffet", "De tradisjonene som har flest utøvere i regionen målt ved offisiell tilhørighet"],
      explanation: "Folkereligion er en samlekategori for praksis uten kanon, skolering med eksamen eller sentral instans: lokale guddommer, spådomskunst, gunstige dager og steder, og spesialister som tar oppdrag. Den er verken en gren av buddhismen eller statens egne ritualer, og betegnelsen sier ingenting om hvor mange utøvere den har.",
    },
    {
      question: "Hva kjennetegner forfedredyrkelsen i regionen?",
      options: ["Mottakeren er en slektning, og pliktene ligner dem mellom levende slektsledd", "Mottakeren er en guddom som slekten mener å nedstamme fra i rett linje", "Den utføres bare i templer og aldri i hjemmet, siden ritualet krever prest", "Den er knyttet til én tradisjon alene og finnes ikke i noen av de andre"],
      explanation: "Forfedredyrkelsen retter seg mot slektens døde, og forholdet er familiært: minneritualer på faste dager, stell av graver, alter eller tavle i hjemmet. Å beskrive dette som gudsdyrkelse gir et misvisende bilde av hva utøverne gjør. Praksisen går dessuten på tvers av tradisjonene — den finnes i konfuciansk, buddhistisk og rent hjemlig drakt.",
    },
    {
      question: "Hva er forskjellen mellom religiøs lagdeling og synkretisme?",
      options: ["Lagdeling holder praksisene atskilt etter anledning, mens synkretisme smelter elementer sammen til én", "Lagdeling gjelder bare i Japan, mens synkretisme er et begrep som brukes om Kina", "Lagdeling er en overgangsfase på vei mot at én tradisjon vinner fram til slutt", "Lagdeling betegner statens rangering av tradisjonene etter hvor mye offentlig støtte hver av dem mottar over tid"],
      explanation: "I lagdelingen brukes tradisjonene til hver sine anledninger og holdes fra hverandre; i synkretismen blir elementene til noe nytt der de ikke lenger lar seg skille. Begge finnes, og det er en presisjonsgevinst å si hvilken av dem et eksempel viser. Lagdelingen er dessuten en stabil ordning, ikke en fase på vei mot noe annet.",
    },
    {
      question: "Hvorfor gir tall over religiøs tilhørighet ofte lave verdier i Øst-Asia?",
      options: ["Fordi målestokken forutsetter en eksklusiv tilknytning som mange ikke opplever å ha", "Fordi religiøs praksis er svært lite utbredt i regionen sammenlignet med andre steder", "Fordi statene i regionen ikke samler inn opplysninger om religion i det hele tatt", "Fordi bare de som bor i nærheten av en helligdom, blir spurt i slike undersøkelser"],
      explanation: "Spørsmålet «tilhører du en religion» måler en form for medlemskap som passer dårlig i et landskap der deltakelse styres av anledning. Deltakelsesmål — besøk, ritualer, gaver — gir gjerne langt høyere tall i den samme befolkningen. Det er altså målestokken og ikke praksisen som gir de lave verdiene.",
    },
    {
      question: "Hvilken av disse setningene er beskrivende og ikke vurderende?",
      options: ["Mange husholdninger holder minneritualer for slektens døde på faste dager", "Folkereligionen er egentlig bare overtro som har overlevd inn i moderne tid", "Meditasjonsbuddhismen er den mest autentiske formen for buddhisme i regionen", "Det er inkonsekvent å gifte seg i en helligdom og gravlegges etter buddhistisk skikk"],
      explanation: "Den beskrivende setningen sier hva som gjøres, av hvem og når, uten å dømme om det er sant eller fornuftig. De tre andre inneholder rangerende ord — «egentlig bare», «mest autentiske», «inkonsekvent» — og måler landskapet med en målestokk utøverne selv ikke bruker.",
    },
    {
      question: "Hva er de tre leddene V2023-2 ber om?",
      options: ["Tro, praksis og utvikling", "Opprinnelse, utbredelse og antall utøvere", "Læresetninger, hellige tekster og religiøse ledere", "Fellestrekk, forskjeller og en begrunnet landing"],
      explanation: "Bestillingen er hva tradisjonene lærer, hva utøverne gjør, og hvordan tradisjonene har utviklet seg i regionen. Utviklingsleddet er det som gjør referat utilstrekkelig, og det er også det som oftest faller bort. Fellestrekk og forskjeller med en landing hører til andre sjangre, og tall over utøvere er ikke en del av bestillingen.",
    },
    {
      question: "Hva skiller religion fra statsideologi i denne sammenhengen?",
      options: ["Religion er tradisjonen slik den praktiseres, statsideologi er statens bruk av den som begrunnelse for orden", "Religion er alltid eldre enn staten som styrer området, mens statsideologi først oppstår med de moderne statsdannelsene", "Religion har alltid en kanon, mens statsideologi aldri bygger på tekster", "Religion angår enkeltmennesket, mens statsideologi bare angår embetsverket"],
      explanation: "Skillet går på rollen, ikke på alder eller på om det finnes tekster: den samme tradisjonen kan både praktiseres av utøvere og brukes av en stat som begrunnelse for hvem som skal styre. Boka beskriver slike forhold og oppgir hvem som framstiller dem hvordan, og avgjør ikke om politikken var riktig.",
    },
    {
      question: "Hvilken påstand er robust og skal ikke pakkes inn i forbehold?",
      options: ["At buddhismen har spredt seg i Øst-Asia og fått beslektede former der", "At buddhismens spredning beviser at Øst-Asia er én sammenhengende region", "At shinto bør regnes som en religion i samme forstand som buddhisme", "At folkereligiøs praksis er på vei til å forsvinne i regionen"],
      explanation: "Spredningen er dokumentert historie og ikke et meningsspørsmål. De tre andre er vurderinger med flere forsvarlige posisjoner: hva spredningen viser om regional sammenheng, hvilken kategori shinto best beskrives med, og hvordan praksis utvikler seg framover. Å blande hendelsen og vurderingen er det vanligste presisjonstapet i dette temaet.",
    },
    {
      question: "Hva vinner du på å bruke ritualsituasjonen som analyseenhet?",
      options: ["Du kan spørre hva som gjøres, av hvem og hvor, i stedet for hva noen tilhører", "Du slipper å beskrive praksis, siden situasjonen taler for seg selv", "Du kan avgjøre hvilken tradisjon en person egentlig hører hjemme i", "Du får et mål på hvor mange som regner seg som troende i befolkningen"],
      explanation: "Ritualsituasjonen gir konkrete eksempler med en gang og unngår en tilhørighetskategori som passer landskapet dårlig. Den erstatter ikke beskrivelsen av praksis, men er nettopp inngangen til den, og den brukes ikke til å avgjøre hva noen «egentlig» er — det ville vært å innføre tilhørighetslogikken bakveien.",
    },
    {
      question: "Hva er et vanlig eksempel på arbeidsdeling mellom shinto og buddhisme i Japan?",
      options: ["Bryllup markeres gjerne i helligdommen, mens begravelser og minnestunder følger buddhistisk skikk", "Alle overgangsritualer i livsløpet utføres av buddhistiske prester, og helligdommene har ingen rolle i noen av dem", "Helligdommene har ansvar for de døde, mens templene bare markerer nyttår", "Familier velger én av de to tradisjonene ved fødselen og holder seg til den livet ut"],
      explanation: "Arbeidsdelingen følger anledningen, ikke medlemskapet, og den oppleves ikke som en motsetning av dem som deltar. De tre andre forutsetter enten at én tradisjon dekker alt, at rollene er byttet om, eller at deltakelse styres av en eksklusiv tilhørighet — og det er nettopp den forutsetningen landskapet ikke svarer til.",
    },
    {
      question: "Hvorfor er utviklingsleddet det som oftest faller bort i et svar?",
      options: ["Fordi tro og praksis kan hentes fra en oversikt, mens utvikling krever at du kjenner en historie", "Fordi utviklingsleddet sjelden gir uttelling og derfor kan kuttes uten kostnad", "Fordi utviklingen i regionen er så omstridt at den vanskelig kan beskrives", "Fordi ordgrensen gjør det umulig å behandle mer enn to av de tre leddene"],
      explanation: "Tro og praksis lar seg fylle fra et oppslagsverk, mens utviklingsleddet krever kjennskap til hvordan en tradisjon flyttet seg og endret form i regionen. Leddet er en tredel av bestillingen og gir full uttelling, og ordgrensen er ikke til hinder: den styrer hvor mange tradisjoner du velger, ikke hvor mange av leddene du dekker.",
    },
  ],
  'exfac03-east-4-3': [
    {
      question: "Hva er forholdet mellom «religion som fellestrekk» og «religion som forskjell»?",
      options: ["De er to ulike bruk av det samme materialet, og uenigheten gjelder vekting", "De bygger på ulike fakta, og den ene av dem må derfor være historisk feil", "Den ene gjelder buddhismen, mens den andre bare gjelder folkereligiøs praksis", "Den ene brukes i sammenligninger, mens den andre bare brukes i redegjørelser"],
      explanation: "Begge argumentene hviler på det samme dokumenterte materialet: at tradisjonene spredte seg, og at formene ble ulike. Uenigheten gjelder hvilken vekt de to observasjonene skal ha, ikke hva som skjedde. Derfor kan ikke et svar avfeie motsiden med at den tar feil av fakta — det må si hvorfor vektingen bør være en annen.",
    },
    {
      question: "Hva skiller spredning fra parallell utvikling?",
      options: ["Spredning krever et dokumentert kontaktledd mellom områdene", "Spredning gjelder bare religion, mens parallell utvikling gjelder økonomi og politikk", "Spredning betyr at formene blir identiske, mens parallell utvikling gir ulike former", "Spredning er et moderne begrep, mens parallell utvikling brukes om førmoderne tid"],
      explanation: "Kontaktleddet er hele forskjellen: ved spredning kan man vise at noe er ført fra ett område til et annet, mens parallell utvikling er likhet som har oppstått uavhengig. Nettopp derfor er spredning et sterkere argument for regional sammenheng enn likhet alene. Spredning innebærer ikke at formene blir identiske — tilpasning er en normal del av prosessen.",
    },
    {
      question: "Hva er lokal tilpasning?",
      options: ["At det som spres, formes av forestillinger, sosiale forhold og interesser på det stedet det kommer til", "At en tradisjon avvises av mottakeren og derfor må føres videre til et annet område", "At en tradisjon holdes uendret fordi mottakeren følger en fastsatt original nøye", "At staten oversetter en tradisjons tekster til det lokale talespråket etter et fast mønster som er bestemt på forhånd av hoffet"],
      explanation: "Tilpasning er en normal del av spredningen: en tradisjon som ikke ble tilpasset, ville i praksis ikke blitt tatt opp. Fella er å måle lokale varianter mot en tenkt original og kalle dem mislykkede kopier — det er essensialisering, og det er en av de vanligste svakhetene i korte svar om kulturell sammenheng.",
    },
    {
      question: "Hva er essensialisering?",
      options: ["Å behandle en kultur som en fast kjerne som er den samme overalt, slik at variasjon blir avvik", "Å samle flere tradisjoner under én betegnelse for å kunne sammenligne dem med hverandre", "Å påvise at flere samfunn har mottatt den samme tradisjonen langs dokumenterte kontaktveier", "Å beskrive en religiøs tradisjon uten å ta stilling til om læren dens er sann eller ikke"],
      explanation: "Essensialisering postulerer en kjerne i stedet for å vise et kontaktledd, og gjør dermed variasjon til avvik fra det egentlige. Den nære fella er å tro at enhver påvisning av fellestrekk er essensialisering — det er den ikke: å vise at flere samfunn har fått den samme tradisjonen er empirisk arbeid, mens slutningen til en felles kjerne er spranget.",
    },
    {
      question: "Hva menes med indre heterogenitet?",
      options: ["At et område eller et samfunn er sammensatt innenfra, mellom grupper, landsdeler og generasjoner", "At statene i regionen har ulike politiske systemer og ulik økonomisk utvikling", "At en religiøs tradisjon har flere retninger som er uenige om læren i sentrale spørsmål", "At befolkningen i et land har opphav i flere ulike innvandringsbølger som har kommet inn over svært lang tid"],
      explanation: "Heterogeniteten gjelder variasjonen innenfor enheten, ikke mellom enhetene. Poenget er at variasjonen innad i én stat kan være større enn forskjellen mellom to naboland, og at et argument om at «regionen» har et bestemt trekk, allerede har glattet over dette. Forskjeller mellom stater og uenighet mellom retninger er beslektede, men andre observasjoner.",
    },
    {
      question: "Hva er forskjellen mellom statsreligion og religiøs politikk?",
      options: ["Statsreligion er en tilstand med formell stilling, religiøs politikk er statens virksomhet overfor institusjonene", "Statsreligion gjelder i moderne stater, mens religiøs politikk bare er et førmoderne fenomen", "Statsreligion måler hvor mange i befolkningen som praktiserer, mens religiøs politikk måler hvor sterkt de samme menneskene tror", "Statsreligion gjelder buddhismen, mens religiøs politikk brukes om forholdet til folkereligionen"],
      explanation: "Statsreligion er en formell ordning; religiøs politikk er alt staten faktisk gjør — støtte, registrering, regulering, begrensning. En stat uten statsreligion kan drive svært aktiv religiøs politikk, og en stat med statsreligion kan blande seg lite. Ingen av begrepene måler utbredelse eller styrke i troen.",
    },
    {
      question: "Hvilke tre prosesser dekker begrepet sekularisering?",
      options: ["Institusjoners makt over andre samfunnsområder, deltakelse i praksis, og oppslutning om forestillinger", "Statens overtakelse av eiendom, avvikling av prestestillinger, og forbud mot offentlige ritualer", "Nedgang i antall templer, nedgang i antall helligdommer, og nedgang i antall klostre", "Utdanningsnivå, urbanisering og økonomisk vekst, som ifølge en eldre forklaringsmodell til sammen svekker religiøs praksis"],
      explanation: "De tre betydningene kan gå hver sin vei, og i Øst-Asia er nettopp det et poeng: deltakelsen i ritualer kan holde seg godt oppe der institusjonenes makt er beskjeden. Å bruke ordet uten å si hvilken av de tre du mener, er den enkleste måten å gjøre et ellers godt moment upresist på.",
    },
    {
      question: "Hva ligger i uttrykket sammenhengende region?",
      options: ["Et område som henger sammen nok — gjennom forbindelser eller fellestrekk — til at det er meningsfullt å studere det samlet", "Et område som er avgrenset på kartet av hav, fjellkjeder og andre naturlige grenser", "Et område der statene har inngått formelt samarbeid om handel og sikkerhet", "Et område der befolkningen snakker språk som tilhører den samme språkfamilien og derfor kan forstå hverandre uten opplæring"],
      explanation: "Uttrykket handler om forbindelser og fellestrekk, og det er nettopp derfor det kan diskuteres — hvor mye som skal til, er selve stridsspørsmålet. En geografisk avgrensning kan gjøres uten at noe henger sammen menneskelig, og verken formelt samarbeid eller språkslektskap er det uttrykket måler.",
    },
    {
      question: "Hvorfor er skillet mellom felles skrift og felles språk viktig i et svar om kultursfæren?",
      options: ["Fordi tegnene ble lest i flere stater uten at talespråkene er i slekt med hverandre", "Fordi skriften bare ble brukt av hoffet, mens språket ble brukt av alle andre", "Fordi skriftsystemet er et nyere fellestrekk enn de religiøse tradisjonene er", "Fordi språkene i regionen er i slekt, mens skriftsystemene har ulikt opphav"],
      explanation: "Kultursfæren bygger på delt skrift og delt tekstkanon, ikke på slektskap mellom talespråkene. Å gli over dette skillet gjør et ellers riktig poeng usant, og det er lett å kontrollere for en leser. Skriften var heller ikke forbeholdt hoffet alene, og påstanden om at språkene er i slekt, er nettopp den feilen skillet skal hindre.",
    },
    {
      question: "Hva er de fire trinnene i valgoppgaven?",
      options: ["Les alle alternativene, tell momenter med eksempel, velg det du har lest, og si i åpningen hva du valgte", "Velg raskt, skriv lenge, kutt til slutt, og oppgi ordtallet nederst i besvarelsen", "Definer begrepet, si hva som er omstridt, anvend det, og avslutt med en veiing", "Sett opp to kolonner i kladden, fyll begge, koble deretter en endring til en kontinuitet, og vei de to sidene mot hverandre til slutt"],
      explanation: "Valgoppgavens trinn handler om å lese alle alternativene, telle momenter med eksempel på hvert, velge det du har lest, og si valget i åpningen. Å definere, si hva som er omstridt og anvende med eksempel er redegjørelsen med anvendelse, og å sette opp to kolonner med endringer og kontinuiteter er endring og kontinuitet — begge er andre sjangre. Å velge raskt uten å telle momenter er nettopp det trinnene skal hindre.",
    },
    {
      question: "Hva kreves av et svar i sjangeren argumenter for og mot?",
      options: ["Minst ett moment hver vei, en veiing, og en begrunnet landing", "Minst tre momenter på den siden kandidaten selv mener er riktig", "En oversikt over hva ulike forskere har skrevet, uten egen konklusjon", "En sammenligning av to land langs minst tre dimensjoner, organisert etter dimensjon"],
      explanation: "Sjangeren krever begge sider, en veiing og en landing som faktisk velger — et svar som ender i «det kommer an på» uten å si hva det kommer an på, har ikke veid noe. Å bare utvikle sin egen side er mangel nr. 1, og en ren forskningsoversikt uten landing svarer ikke på spørsmålet. Dimensjonsorganisering hører til sammenligningen.",
    },
    {
      question: "Hvilken regel styrer momenttellingen før du velger alternativ?",
      options: ["Har du under tre momenter med eksempel på et alternativ, velg noe annet", "Velg alltid det alternativet som står først i oppgaveteksten, for å spare tid", "Velg det alternativet du synes er mest interessant, siden det gir best flyt", "Velg det alternativet der du kjenner flest navn og årstall fra pensum"],
      explanation: "Regelen er hentet fra bestått-gulvet, som krever minst tre momenter — har du bare to på et alternativ, vet du på forhånd at svaret ikke kan bli godt nok. Interesse måler hva du har lyst til å skrive om, ikke hva du kan skrive om, og bare det siste er synlig for den som leser besvarelsen.",
    },
    {
      question: "Hvilken påstand i dette temaet er robust og skal ikke balanseres bort?",
      options: ["At skrifttegn, buddhisme og konfuciansk arv faktisk har spredt seg i regionen", "At spredningen gjør Øst-Asia til én sammenhengende region i dag", "At de lokale formene er så ulike at regionen ikke kan studeres samlet", "At religion er et bedre fokusvalg enn skriftsystemet i et regionsspørsmål"],
      explanation: "Selve spredningen er dokumentert historie, og ingen av de to landingene i drøftingen bestrider den. De tre andre påstandene er vurderinger med flere forsvarlige svar, og den siste er dessuten avhengig av hva den enkelte har lest. Å gjøre hendelsen til stridsspørsmål er å flytte usikkerheten til feil sted.",
    },
    {
      question: "Hvilke landinger regnes som fullverdige i en drøftingsoppgave?",
      options: ["Å velge side, å velge side med forbehold, eller å vise at spørsmålet er galt stilt", "Bare den som velger side klart, siden forbehold svekker argumentasjonen", "Bare den som viser at begge sider har like gode grunner for sitt syn", "Enhver avslutning som oppsummerer momentene i den rekkefølgen de kom"],
      explanation: "Alle tre formene er fullverdige så lenge landingen er begrunnet. Et forbehold svekker ikke svaret når det sier hva forbeholdet gjelder, og å vise at spørsmålet er galt stilt er en reell landing — for eksempel at spredning måler historisk forbindelse og ikke likhet i dag. En ren oppsummering er derimot ingen landing, fordi den ikke veier.",
    },
  ],
  'exfac03-east-5-1': [
    {
      question: "Hva skiller kolonisering fra uformell dominans?",
      options: ["At den ytre makten overtar suvereniteten og styrer gjennom eget apparat, mens staten ved uformell dominans består", "At kolonisering alltid forutsetter en militær erobring, mens uformell dominans oppstår gjennom handelsavtaler som begge parter har forhandlet fram på like vilkår", "At kolonisering bare gjelder territorium og grenser, mens uformell dominans utelukkende gjelder handel og aldri berører statens rettsvesen eller tollsatser", "At kolonisering er samtidens eget ord fra 1800-tallet, mens uformell dominans er en betegnelse forskere har innført i ettertid om nøyaktig det samme forholdet"],
      explanation: "Det avgjørende er hvem som utnevner styret, skriver lovene og gir innbyggerne rettslig status. Ved kolonisering er det den ytre makten; ved uformell dominans består staten med regjering, hær og diplomati, men er bundet av traktater den ikke kan si opp ensidig. Distraktoren om militær erobring tester troen på at formen avgjøres av volden, mens den avgjøres av hvem som styrer etterpå, og distraktoren om at bare handelen berøres, overser at ekstraterritorialiteten rammer rettsvesenet direkte.",
    },
    {
      question: "Hva innebar ekstraterritorialitet?",
      options: ["At traktatmaktens borgere ble dømt av sitt eget lands konsul etter eget lands rett, for handlinger begått på vertslandets territorium", "At en fremmed makt fikk eiendomsrett til et avgrenset landområde som den kunne bebygge og forvalte etter egne regler", "At vertslandet ikke kunne endre tollsatsene på varer fra traktatmakten uten at motparten hadde samtykket i endringen", "At diplomatisk personell og deres nærmeste familie var unntatt straffeforfølgning så lenge de var akkreditert i landet"],
      explanation: "Ekstraterritorialiteten rammer statens mest grunnleggende funksjon: retten til å dømme på eget område. Den gjaldt alle traktatmaktens borgere og var ikke gjensidig. Distraktoren om tollsatser beskriver tap av tollautonomi, som rammer varer og statsinntekter i stedet for personer og domsmyndighet, og distraktoren om akkreditert personell beskriver ordinær diplomatisk immunitet, som er gjensidig og gjelder et lite antall personer.",
    },
    {
      question: "Hva kjennetegner et protektorat, i motsetning til en koloni?",
      options: ["Staten består formelt, men utenrikspolitikken er overtatt av den ytre makten", "Den ytre makten har utnevnt en generalguvernør som styrer området og innført sitt eget lovverk der", "Innbyggerne har fått en annen rettslig status enn innbyggerne i den ytre maktens eget hjemland", "Området er åpnet for handel med flere makter samtidig, uten at noen av dem har fortrinnsrett"],
      explanation: "I et protektorat er staten fortsatt et rettssubjekt med eget styre, men den kan ikke lenger opptre utad på egne vegne. Generalguvernøren og et innført lovverk er derimot kjennetegn på at koloniseringen er gjennomført, og ulik rettslig status for innbyggerne peker samme vei. Distraktoren om handel åpen for flere makter beskriver en traktatshavn og sier ingenting om hvem som har overtatt hvilken myndighet.",
    },
    {
      question: "Hva var virkningen av en bestevilkårsklausul?",
      options: ["Enhver innrømmelse til én makt gjaldt automatisk også for alle de andre maktene som hadde den samme klausulen", "Den svakere staten kunne kreve tilsvarende rettigheter for sine egne borgere i den andre statens havnebyer og domstoler", "Tollsatsen på innførte varer ble låst på et fastsatt nivå som ikke kunne endres uten at begge parter samtykket i det", "Den ene makten fikk anerkjent fortrinnsrett til jernbane- og gruvekonsesjoner i en bestemt del av landet"],
      explanation: "Klausulen virket som en låsemekanisme: den svakere staten kunne ikke lenger spille maktene ut mot hverandre ved å gi ulike vilkår, fordi hver ny innrømmelse spredte seg til alle med én gang. Distraktoren om gjensidige rettigheter tester nettopp det som manglet — ordningene var ensidige. Distraktoren om låst tollsats beskriver tap av tollautonomi, og distraktoren om fortrinnsrett beskriver en innflytelsessfære.",
    },
    {
      question: "Hva er forskjellen mellom tap av tollautonomi og ekstraterritorialitet?",
      options: ["Tollautonomien handler om varer, tollsatser og statsinntekter, mens ekstraterritorialiteten handler om personer og om hvem som har domsmyndighet over dem på territoriet", "Tollautonomien ble avstått frivillig i vanlige handelsavtaler, mens ekstraterritorialiteten alltid ble påtvunget etter et militært nederlag på slagmarken", "Tollautonomien gjaldt bare i traktatshavnene, mens ekstraterritorialiteten gjaldt i hele landet og også for innenlandske borgere av lavere stand", "Tollautonomien var midlertidig og falt bort etter en fastsatt periode, mens ekstraterritorialiteten var uoppsigelig og varte helt til krigen tok slutt"],
      explanation: "De to opptrer ofte i samme traktat og forveksles lett, men de rammer to ulike deler av statens virkemåte: den ene inntektene og næringsvernet, den andre rettsapparatet. Distraktoren om frivillighet tester en gal forestilling om at det ene var forhandlet og det andre tvunget — begge var festet i de samme traktatene. Distraktoren om at ekstraterritorialiteten gjaldt innenlandske borgere, er gal fordi ordningen nettopp gjaldt utenlandske borgere.",
    },
    {
      question: "Hvem inngikk avtalene om innflytelsessfærer?",
      options: ["Maktene seg imellom, som regel uten at staten området lå i, var part i avtalen", "Staten selv og én utenlandsk makt, i en traktat som fastsatte grensene for det området makten kunne operere i", "Lokale myndigheter i provinsene og de utenlandske selskapene som ville bygge jernbane eller drive gruvedrift der", "Et internasjonalt organ som fordelte konsesjonene mellom maktene etter faste kriterier for økonomisk interesse"],
      explanation: "Sfærene var i første rekke avtaler om at maktene ikke skulle tråkke i hverandres bed, og at staten ikke var part, er nettopp det som gjør dem til det tydeligste uttrykket for at maktene forholdt seg til hverandre. Distraktoren om en tosidig traktat med staten selv beskriver de ulike traktatene og ikke sfæreinndelingen. Distraktoren om et internasjonalt organ tilskriver perioden en institusjon den ikke hadde.",
    },
    {
      question: "Hva skiller en traktatshavn fra en vanlig internasjonal havn?",
      options: ["Statusen følger av en traktat staten ikke kan si opp ensidig, mens en vanlig havn er åpnet ved vertsstatens eget vedtak og kan lukkes igjen", "Traktatshavnen ligger alltid ved en elvemunning og har derfor tilgang til innlandet, mens en vanlig havn bare betjener kystfarten langs den nærmeste strekningen", "Traktatshavnen er forbeholdt én enkelt utenlandsk makt, mens en vanlig havn tar imot fartøy fra alle land som ønsker å legge til der", "Traktatshavnen krever ingen toll av noe slag, mens en vanlig havn krever toll etter satser vertsstaten fastsetter fra år til år"],
      explanation: "En vanlig havn åpnes ved statens eget vedtak og kan lukkes igjen på samme måte; traktatshavnen er åpnet ved avtale og kan ikke lukkes. Distraktoren om beliggenhet gjør et geografisk trekk til et rettslig kjennetegn. Distraktoren om at havnen er forbeholdt én makt, blander traktatshavnen med konsesjonsområdet inne i den, og med sfæreinndelingens eksklusivitet.",
    },
    {
      question: "Hva var et konsesjonsområde?",
      options: ["Et avgrenset område, ofte en bydel, som ble forvaltet etter en fremmed makts ordninger med eget politi og egne bygningsregler", "En avtale om at et utenlandsk selskap kunne bygge og drive jernbane på strekninger staten selv pekte ut for formålet", "En del av landet der én makt hadde anerkjent fortrinnsrett til framtidige gruve- og jernbanekonsesjoner framfor de øvrige", "En militærbase som en fremmed makt fikk leie for et fastsatt antall år mot en årlig avgift til vertsstatens statskasse"],
      explanation: "Kjennetegnet er at den daglige forvaltningen er unntatt, helt ned til hvem som håndhever bygningsreglene, mens havnen som helhet fortsatt ligger under vertsstatens styre. Distraktoren om jernbanekonsesjon bruker ordet konsesjon i sin alminnelige betydning og treffer derfor ikke det territorielle. Distraktoren om fortrinnsrett beskriver en innflytelsessfære.",
    },
    {
      question: "Hva menes med kanonbåtdiplomati?",
      options: ["At innrømmelser oppnås ved synlig militær trussel, uten at det føres en full krig og uten at territorium blir tatt", "At en makt erklærer krig, vinner den og deretter dikterer fredsvilkårene i en traktat motparten må undertegne", "At marinen brukes til å blokkere en havn til all handel stanser og staten går med på kravene av økonomiske grunner", "At flere makter opptrer samlet med felles flåtestyrke for å håndheve traktater som allerede er inngått og undertegnet"],
      explanation: "Poenget er at avtalen formelt undertegnes frivillig, mens alternativet til undertegning er synlig fra forhandlingsbordet — og nettopp det forklarer hvordan formelt likeverdige traktater kunne få så ensidig innhold. Distraktoren om erklært krig beskriver en fredstraktat etter et nederlag, som er noe annet. Distraktoren om håndheving av allerede inngåtte traktater beskriver et senere ledd i forløpet, ikke framgangsmåten som skaffet innrømmelsene.",
    },
    {
      question: "Hva kjennetegner reform ovenfra, i motsetning til revolusjon nedenfra?",
      options: ["Initiativet kommer fra statsledelsen selv, som beholder makten og bruker den til å bygge om alle de andre institusjonene", "Endringene gjennomføres gradvis over lang tid, mens en revolusjon per definisjon skjer raskt og i løpet av få måneder", "Reformen omfatter bare forvaltning og skattevesen, mens en revolusjon også griper inn i utdanning, rettsvesen og militærvesen", "Reformen begrunnes innenrikspolitisk med behov hos befolkningen, mens revolusjonen begrunnes med trusselen fra utlandet"],
      explanation: "Skillet går på hvem som driver endringen og hvem som sitter med makten etterpå: ved reform ovenfra er det samme statsledelse som endrer alt annet, mens en revolusjon retter seg mot statsledelsen. Distraktoren om tempo gjør et tilfeldig trekk til et definerende. Distraktoren om begrunnelse snur forholdet: reform ovenfra i denne perioden var nettopp utenrikspolitisk begrunnet, i behovet for å motstå ytre press.",
    },
    {
      question: "Hva slags utsagn er parolen om å «forlate Asia»?",
      options: ["En posisjon fra samtiden, holdt av bestemte grupper i japansk offentlighet og framsatt med et bestemt politisk formål i en pågående debatt", "En beskrivelse forskere i ettertid har gitt av hva Japan faktisk gjorde i perioden, basert på handlingene og ikke på uttalelsene", "En bestemmelse som ble tatt inn i traktatene med de europeiske maktene, og som forpliktet Japan til å bryte båndene til nabolandene", "En analytisk kategori i faget, på linje med ny-imperialisme og uformell dominans, brukt til å klassifisere staters utenrikspolitikk"],
      explanation: "Boka gjengir parolen som det den var: et standpunkt i en samtidig debatt, med en bestemt hensikt. Nettopp derfor er den interessant — den viser at spørsmålet om regional tilhørighet ble stilt innenfra regionen selv. Distraktoren som gjør parolen til en ettertidsbeskrivelse, blander aktørenes egne ord med forskningens kategorier, og distraktoren som gjør den til en analytisk kategori, begår den samme feilen én gang til.",
    },
    {
      question: "Hva er grepet som løfter et svar i sjangeren endring og kontinuitet?",
      options: ["Koblingen: én setning som viser at en av endringene og en av kontinuitetene faktisk henger sammen med hverandre", "En lang bakgrunnsdel i åpningen som setter hele perioden i sammenheng før momentene begynner å komme", "Å legge hovedvekten på endringssiden, siden det er endringene spørsmålet egentlig etterspør når det brukes ord som «formet»", "Å organisere svaret land for land, slik at hvert land får sin egen sammenhengende framstilling av perioden"],
      explanation: "V2021-veiledningen krever både endringer og kontinuiteter, og kravet gir bare mening hvis de to skal snakke sammen — derfor er koblingen grepet. Bakgrunnsdelen er første trinn i kuttehierarkiet og gir ingen uttelling. Å legge hovedvekten på endringssiden er å svare halvt, og land-for-land-organiseringen er strukturfellen i en helt annen sjanger.",
    },
    {
      question: "Hvilken av disse påstandene er et robust historisk funn og ikke en omstridt vurdering?",
      options: ["Taiwan var japansk koloni fra 1895 til 1945", "Koloniperiodens jernbaneutbygging var i hovedsak en modernisering av kolonien selv", "Ny-imperialisme er den mest presise analytiske kategorien for det som skjedde i Øst-Asia", "Ansvaret for kolonitiden er gjort opp i tilstrekkelig grad i tiårene etter krigens slutt"],
      explanation: "Testen er om påstanden kan avgjøres av materiale eller om den krever et kriterium. Koloniforholdets varighet kan avgjøres av materiale og er ikke gjenstand for faglig uenighet. De tre øvrige krever alle et kriterium — hva som skal telle som modernisering, hva som gjør en kategori presis, og hva som er tilstrekkelig oppgjør — og er derfor vurderinger som skal framstilles som posisjoner med avsender.",
    },
    {
      question: "Hva er mangel nr. 3, slik den viser seg i et svar om imperialismen?",
      options: ["Å nevne traktater, havner, toll og sfærer etter hverandre uten å si hva noen av delene gjorde med statens handlingsrom", "Å bygge svaret på generelle forestillinger om kolonitiden i stedet for på det stoffet emnet faktisk har gjennomgått i pensum", "Å svare bare på endringssiden i et spørsmål som uttrykkelig ber om både endringer og kontinuiteter gjennom perioden", "Å presentere en omstridt vurdering av koloniperiodens virkninger som om spørsmålet var faglig avgjort for lenge siden"],
      explanation: "Mangel nr. 3 er å ramse opp momenter uten å utvikle noen, og den er klyngens hovedfelle fordi stoffet består av mange navngitte ordninger som er lette å liste. Å bruke allmennkunnskap i stedet for pensum er mangel nr. 9, å svare bare på den ene siden er mangel nr. 1, og å presentere en omstridt vurdering som avgjort er mangel nr. 5 — alle tre er reelle mangler, men de har hvert sitt nummer.",
    },
    {
      question: "Hvorfor er kategorien «semikolonial» omstridt?",
      options: ["Fordi den plasserer forholdet på en skala mot kolonistatus, og det er selve plasseringen forskerne er uenige om", "Fordi ordet ikke finnes i traktatene fra perioden og derfor mangler grunnlag i kildene fra samtiden", "Fordi den blander sammen tap av tollautonomi og tap av domsmyndighet, som er to helt ulike innskrenkninger av suvereniteten", "Fordi den bare kan brukes om stater som senere faktisk ble kolonisert, og dermed forutsetter et utfall som ikke var gitt"],
      explanation: "Den som bruker kategorien, ser innskrenkningene som en gradsforskjell fra kolonistatus; den som avviser den, ser det å ha et statsapparat som kan reformeres og forhandle som en kvalitativ forskjell. Uttrykket «uformell dominans» beskriver til sammenligning forholdet uten å plassere det på skalaen. Distraktoren om manglende kildegrunnlag forveksler et analytisk begrep med et samtidsbegrep — analytiske begreper er nesten aldri hentet fra kildene selv.",
    },
    {
      question: "Hvor mange momenter tåler et svar innenfor ordgrensen, og hvorfor?",
      options: ["Tre til fem, fordi hvert moment trenger fra 100 til 180 ord til påstand, utdyping og ett eksempel", "Seks til åtte, siden et bredt svar dekker mer av veiledningens momentliste og dermed treffer flere av de bestilte punktene", "Ett til to, slik at hvert av dem kan behandles i full dybde med flere eksempler hver", "Så mange som mulig, fordi sensor krysser av mot momentlisten og hvert nevnte moment gir uttelling uavhengig av utdypingen"],
      explanation: "Tre momenter er bestått-gulvet i V2021-veiledningen, og taket på 800 ord gjør fem til det høyeste realistiske antallet. Distraktoren om seks til åtte momenter er nettopp mangel nr. 3 formulert som råd, og distraktoren om ett til to momenter faller under bestått-gulvet. Mantraet er at tre momenter utviklet slår ti nevnt.",
    },
  ],
  'exfac03-east-5-2': [
    {
      question: "I hvilken periode var Taiwan japansk koloni?",
      options: ["Fra 1895 til 1945", "Fra 1910 til 1945, altså i samme periode som Korea var koloni under japansk styre", "Fra 1932 til 1945, fra opprettelsen av marionettstaten i nordøstre Kina og til krigens slutt", "Fra 1937 til 1945, altså fra den fullskala invasjonen av Kina og fram til krigen var over"],
      explanation: "Taiwan var japansk koloni fra 1895 til 1945, altså i femti år, og koloniforholdet begynte etter den kinesisk-japanske krigen 1894–95. Perioden 1910 til 1945 gjelder Korea, og de to skal ikke slås sammen. Årstallene 1932 og 1937 hører til marionettstaten Manchukuo og til invasjonen av Kina, som er andre hendelser i samme klynge.",
    },
    {
      question: "Hva gikk forut for koloniseringen av Korea i 1910?",
      options: ["En periode der Korea var japansk protektorat og utenrikspolitikken allerede var overtatt", "En periode der Korea var delt i innflytelsessfærer mellom flere makter som hadde fortrinnsrett hver sin del", "En periode der Korea hadde tapt tollautonomien, men beholdt full kontroll over utenriksrepresentasjonen sin", "En periode der Korea var styrt gjennom en generalguvernør utnevnt fra Tokyo"],
      explanation: "Rekkefølgen er selve poenget: da utenriksrepresentasjonen var overtatt, kunne ingen tredjepart lenger innkalles som motvekt, og den formelle overtakelsen ble praktisk gjennomførbar. Distraktoren om generalguvernør plasserer et kjennetegn på kolonistyret før koloniseringen fant sted, og distraktoren om sfærer beskriver en annen form for utenlandsk overmakt enn den som faktisk gikk forut.",
    },
    {
      question: "Hva er det sikreste kjennetegnet på at et område styres som en koloni?",
      options: ["At innbyggerne har en annen rettslig status enn innbyggerne i den styrende staten, og at lovverket fastsettes der", "At den styrende staten har bygget ut jernbane, havner og skoler i området i løpet av perioden", "At området leverer råvarer og landbruksprodukter til den styrende staten og importerer ferdigvarer derfra", "At den styrende staten har militære styrker stasjonert i området og bruker dem til å opprettholde ro og orden"],
      explanation: "Ulik rettslig status viser at forholdet ikke er tenkt som en sammenslåing av likeverdige deler, og sammen med hvem som skriver lovene er det det harde kjennetegnet. Utbygging, handelsretning og militær tilstedeværelse forekommer også i forhold som ikke er kolonistyre, og ingen av dem avgjør derfor spørsmålet alene.",
    },
    {
      question: "Hva skiller en marionettstat fra en koloni?",
      options: ["Marionettstaten har egne statsorganer og framstilles utad som selvstendig, mens kolonien ikke har noen egen statsform", "Marionettstaten er alltid kortvarig og opprettes bare i krigstid, mens kolonien er tenkt som en varig ordning over generasjoner", "Marionettstaten styres av lokale ledere med reell myndighet, mens kolonien styres av embetsmenn utnevnt fra moderlandet", "Marionettstaten har ingen egen økonomi, mens kolonien er innrettet mot å produsere varer for moderlandets marked"],
      explanation: "Kjennetegnet er avstanden mellom form og funksjon: formen er selvstendighet, funksjonen er indirekte styre. Distraktoren om lokale ledere med reell myndighet beskriver indirekte styre, og nettopp fraværet av reell myndighet er det som gjør staten til en marionettstat. Varighet og økonomisk innretting skiller ikke de to ordningene fra hverandre.",
    },
    {
      question: "Hva var Manchukuo?",
      options: ["En stat opprettet i 1932 i nordøstre Kina, med egne statsorganer, men med reell myndighet hos japanske rådgivere og militære", "En japansk koloni på linje med Taiwan og Korea, formelt innlemmet i imperiet og styrt av en generalguvernør fra Tokyo", "Et område i nordøstre Kina der flere makter hadde anerkjent hverandres fortrinnsrett til jernbane- og gruvekonsesjoner", "En militær sone opprettet etter invasjonen i 1937, der den japanske hæren styrte direkte uten sivil forvaltning"],
      explanation: "Manchukuo hadde eget statsoverhode, egen regjering og eget flagg, og nettopp den formen var en del av hensikten: kontrollen kunne framstilles som noe annet enn erobring. Distraktoren om formell innlemmelse beskriver Taiwan og Korea, som var noe annet. Distraktoren om en militær sone etter 1937 flytter opprettelsen fem år fram i tid.",
    },
    {
      question: "Hva kjennetegner en eksportrettet koloniøkonomi?",
      options: ["At retningen på produksjonen bestemmes ut fra moderlandets behov, ikke at omfanget er lite", "At all handel går gjennom én havn som kolonimakten kontrollerer, og at annen utførsel er forbudt ved lov", "At kolonien ikke har egen industri i det hele tatt, men bare leverer ubearbeidede råvarer til moderlandet", "At kolonien har underskudd på handelsbalansen overfor moderlandet"],
      explanation: "En koloni kan ha stor produksjon, godt utbygde havner og høy handel og likevel ha en økonomi der beslutningene om hva som skal produseres, tas et annet sted — det er retningen som er kjennetegnet. Distraktoren om fravær av industri er gal fordi industriutbygging faktisk fant sted, særlig i den siste delen av perioden. Handelsbalansens fortegn sier ingenting om hvem som bestemmer.",
    },
    {
      question: "Hva var assimilasjonspolitikken?",
      options: ["Politikk for at koloniens befolkning skulle bli lik moderlandets i språk, navnebruk, utdanning og religiøs praksis", "Politikk for å flytte bosettere fra moderlandet til kolonien slik at befolkningssammensetningen ble endret over tid", "Politikk for å beholde lokale institusjoner og lokale ledere som redskaper for kolonimaktens kontroll med området", "Politikk for å bygge ut skoler og sykehus i kolonien på samme nivå som i moderlandet, finansiert over samme budsjett"],
      explanation: "Politikken hadde et dobbelt innhold: den lovet formell likhet og innebar samtidig at det egne språket og de egne institusjonene skulle vike, og begge deler bør nevnes. Distraktoren om å beholde lokale institusjoner beskriver indirekte styre, som har kontroll og ikke likhet som formål. Bosetting og budsjettlikhet er andre tiltak som ikke er det samme som assimilasjon.",
    },
    {
      question: "Hva var den dypeste virkningen av landregistreringen i koloniperioden?",
      options: ["At eiendomsretten ble fastsatt på nytt, slik at sedvanemessige bruksretter kunne falle bort", "At skattenivået ble hevet, slik at bøndene måtte betale en større del av avlingen til myndighetene enn før", "At jordbruksarealet ble utvidet gjennom nydyrking og vanningsanlegg som administrasjonen finansierte og drev", "At avlingene ble lagt om fra selvforsyning til salgsvekster"],
      explanation: "En skattereform endrer hva som betales; landregistreringen endret hvem som eier, og det er en langt dypere endring i et samfunn. Registeret gjorde samtidig skatteinnkreving og låneopptak mulig, så tiltaket er både administrativ modernisering og inngrep i eksisterende rettsforhold. Nydyrking og omlegging av avlinger fant også sted, men de er virkninger av andre tiltak.",
    },
    {
      question: "Hvorfor bør sluttfasen fra slutten av 1930-tallet skilles ut i et svar om koloniperioden?",
      options: ["Fordi kolonipolitikken endret karakter, med skjerpet assimilasjon og en svært omfattende mobilisering til krigsinnsats", "Fordi kolonistyret formelt opphørte i denne fasen og ble erstattet av et militært okkupasjonsstyre uten sivil forvaltning", "Fordi den økonomiske innrettingen mot moderlandets behov først ble innført i denne fasen og ikke fantes tidligere", "Fordi generalguvernørens myndighet ble innskrenket i denne fasen, slik at lokale organer overtok forvaltningen"],
      explanation: "Å behandle femti år som én tilstand er den vanligste måten å bomme på et endringsspørsmål om dette stoffet, og sluttfasen skiller seg fra de foregående i intensitet og i inngripen i enkeltmenneskers liv. Den økonomiske innrettingen mot moderlandet fantes fra tidlig i perioden og er derfor ikke det som skiller fasen ut. De to øvrige beskriver endringer som ikke fant sted.",
    },
    {
      question: "Hva betegner begrepsparet metropol og koloni?",
      options: ["Den styrende staten og det styrte området, brukt for å analysere hvilken vei beslutninger og ressurser går", "Hovedstaden og distriktene innenfor én og samme stat, brukt for å analysere geografisk skjev utvikling", "Den største byen i kolonien og de omkringliggende jordbruksdistriktene som forsyner den med varer", "Den økonomiske og den politiske delen av kolonistyret, som ble administrert av hvert sitt embetsverk"],
      explanation: "Poenget med paret er retningen: spørsmålet om hvor beslutningen ble tatt og spørsmålet om hvor overskuddet ble realisert, kan besvares uavhengig av hverandre. Distraktoren om hovedstad og distrikt beskriver et sentrum–periferi-forhold, som også finnes innenfor én stat og som mangler det avgjørende trekket at befolkningen har ulik rettslig status.",
    },
    {
      question: "Hvilken av disse påstandene er en omstridt vurdering og ikke et robust historisk funn?",
      options: ["Industriutbyggingen i koloniperioden la grunnlaget for veksten etter 1945", "Manchukuo hadde eget statsoverhode og egne statsorganer fra opprettelsen av", "Korea var japansk protektorat før koloniseringen som ble gjennomført i 1910", "Kolonipolitikken endret karakter i den siste delen av perioden fram mot 1945"],
      explanation: "Påstanden om grunnlaget krever både et kriterium for hva som skal telle som grunnlag og en årsakspåstand, og det er nettopp der forskerne er uenige. De tre øvrige kan avgjøres av materiale og er ikke gjenstand for faglig uenighet. Testen du skal bruke, er om påstanden kan avgjøres av materiale eller om den krever et kriterium.",
    },
    {
      question: "Hvordan skal en offisiell statlig framstilling av koloniperioden behandles i et svar?",
      options: ["Som en opplysning om staten som framsetter den, ikke som en avgjørelse av spørsmålet den handler om", "Som den mest pålitelige kilden til hva som faktisk skjedde, siden staten har tilgang til sine egne arkiver", "Som en påstand som må avvises, siden statlige framstillinger tjener politiske formål", "Som en omstridt vurdering på linje med forskernes vurderinger, og med samme vekt som disse i veiingen"],
      explanation: "«Myndighetene i X framstiller det slik» er en opplysning; «det var slik» er en dom. Den første formen er etterprøvbar og forplikter deg ikke til noe standpunkt. Distraktoren om at slike framstillinger må avvises, er like lite holdbar som den om at de er de mest pålitelige — begge tar stilling på forhånd i stedet for å opplyse hva staten sier.",
    },
    {
      question: "Hva sier utviklingsposisjonen om koloniperiodens økonomiske virkninger IKKE?",
      options: ["Den framsetter ingen påstand om at kolonistyret var berettiget", "Den benekter ikke at jernbaner, havner og kraftverk faktisk ble bygget i løpet av koloniperioden", "Den bestrider ikke at næringsstrukturen i kolonien ble fastsatt av myndigheter utenfor kolonien selv", "Den avviser ikke at koloniadministrasjonen ble ledet av en generalguvernør utnevnt fra moderlandet"],
      explanation: "Posisjonen holder at produksjonsmidler, institusjoner og kompetanse besto og fikk betydning etter 1945 — den sier ikke noe om kolonistyrets berettigelse, og å gjengi den som om den gjorde det, er en stråmann. De tre øvrige beskriver ting posisjonen heller ikke benekter, men de er ting utbyttingsposisjonen bygger på, og de er derfor ikke det som skiller de to fra hverandre.",
    },
    {
      question: "Hva er utbyttingsposisjonens sterkeste konkrete argument i jernbane-caset?",
      options: ["Traseen forbinder gruven med havnen og ikke innlandsbyene med hverandre", "Jernbanen ble finansiert med lån reist i moderlandet, slik at kolonien satt igjen med gjelden etterpå", "Jernbanen var teknisk underlegen anlegg bygget i moderlandet i samme periode og måtte fornyes tidlig", "Jernbanen ble bygget av lokal arbeidskraft, som dermed ikke kunne brukes til annen produksjon i distriktet"],
      explanation: "Traseen gjør formålet synlig i landskapet, og det er et argument som ikke krever noen tallmessig dokumentasjon for å være sterkt. Distraktorene om finansiering og arbeidskraft er reelle momenter, men de er svakere fordi de forutsetter opplysninger som ikke ligger i saksforholdet. Påstanden om teknisk underlegenhet er dessuten ikke en del av posisjonen i det hele tatt.",
    },
    {
      question: "Hvor ligger den egentlige uenigheten mellom de to posisjonene om koloniperiodens økonomiske arv?",
      options: ["I kriteriet: om virkningen skal måles i hva som sto igjen, eller i hvem den tjente og hvem som bestemte", "I faktagrunnlaget: om anleggene virkelig ble bygget i det omfanget de to sidene hevder i sine framstillinger", "I tidsavgrensningen: om virkningene skal måles fram til 1945 eller lenger", "I hvilket av de to koloniforholdene som skal legges til grunn, siden Taiwan og Korea hadde ulike erfaringer"],
      explanation: "Ingen av posisjonene benekter et faktum den andre bruker; de måler ulike ting. Å si dette rett ut gjør veiingen til en analyse i stedet for en preferanse. Distraktoren om faktagrunnlaget er nettopp den misforståelsen som får studenter til å tro at den ene siden må ta feil om historien, og distraktoren om tidsavgrensning er en reell nyanse, men ikke uenighetens kjerne.",
    },
    {
      question: "Hva er mangel nr. 8, anvendt på en oppgave om kolonipolitikken i Taiwan og Korea?",
      options: ["Å behandle Taiwan ferdig før du begynner på Korea, i stedet for å ta én dimensjon om gangen med begge inne", "Å behandle bare den ene av de to koloniene, slik at sammenligningen mangler den ene enheten helt", "Å presentere vurderingen av koloniperiodens økonomiske arv som om spørsmålet var faglig avgjort", "Å nevne fem eller seks dimensjoner uten å utvikle noen av dem innenfor svarets ordgrense"],
      explanation: "Mangel nr. 8 er å skrive land etter land i en sammenligningsoppgave, og resultatet er at leseren selv må gjøre sammenligningen. Å presentere en omstridt vurdering som avgjort er mangel nr. 5, og å ramse opp uten å utvikle er mangel nr. 3 — begge er reelle mangler, men de har hvert sitt nummer og hver sin motgift.",
    },
    {
      question: "Når bruker du dimensjonsmatrisen, og når bruker du tokolonneformen?",
      options: ["Matrisen i sammenligninger mellom enheter, og tokolonneformen i spørsmål om endring og kontinuitet", "Matrisen i alle oppgaver over 600 ord, tokolonneformen i kortere svar der plassen er knappere", "Matrisen når du har lest mye om temaet, tokolonneformen når du er usikker og trenger å sortere stoffet først", "Matrisen i argumentasjonsoppgaver med to sider, tokolonneformen når spørsmålet ber om et valg mellom land"],
      explanation: "Matrisen har enhetene som overskrifter og hører til sammenligninger; tokolonneformen har «endring» og «kontinuitet» som overskrifter og hører til endringsspørsmål. Å bruke feil redskap gir feil struktur på svaret. Lengden på svaret og hvor godt du kan stoffet, avgjør ikke hvilket redskap som passer — det gjør spørsmålets sjanger.",
    },
    {
      question: "Hva var Manchukuos funksjon for Japan, ifølge begrepet marionettstat?",
      options: ["Formen var en selvstendig stat, og funksjonen var et indirekte japansk styre over området", "Formen var en koloni, funksjonen var å skaffe råvarer til krigsindustrien i moderlandet", "Formen var et protektorat, funksjonen var å hindre at andre makter fikk innflytelse i nordøstre Kina", "Formen var en militærsone, funksjonen var å gi hæren et oppmarsjområde foran den senere invasjonen"],
      explanation: "Avstanden mellom form og funksjon er nettopp det begrepet skal fange, og formen ga to fordeler samtidig: kontrollen kunne utad framstilles som noe annet enn erobring, og innad fantes et apparat som kunne utstede lover og kreve inn skatt. Distraktoren om koloniform er gal fordi Manchukuo ikke ble formelt innlemmet slik Taiwan og Korea var, og protektoratformen forutsetter en eksisterende stat som avstår utenrikspolitikken.",
    },
  ],
  'exfac03-east-5-3': [
    {
      question: "Hvorfor traff nederlaget i den kinesisk-japanske krigen 1894–95 den kinesiske innenriksdebatten hardere enn de tidligere nederlagene mot europeiske makter?",
      options: ["Fordi motparten var en nabo som selv hadde gjennomført omfattende reform ovenfra få tiår tidligere", "Fordi krigserstatningen var så stor at den alene truet statsfinansene og gjorde nye utenlandslån uunngåelige for staten", "Fordi nederlaget førte til at flere makter samtidig krevde traktatshavner og ekstraterritorialitet i det samme tiåret", "Fordi Kina for første gang måtte avstå et helt territorium og ikke bare gi innrømmelser om handel og domsmyndighet"],
      explanation: "Nederlag mot fjerne makter med annen teknologi kunne forklares bort med avstand og rekkevidde; dette kunne ikke det, og utfallet ble dermed selv et argument for reform. Krigserstatningen og kappløpet om konsesjoner var reelle følger, men de forklarer ikke hvorfor nederlaget traff selve reformdebatten. Territoriell avståelse hadde dessuten forekommet tidligere i århundret.",
    },
    {
      question: "Hva omfattet den japanske reformpakken som ble lest som modell i Kina?",
      options: ["Skreven forfatning, parlament med avgrensede fullmakter, vernepliktshær, skolevesen og nye lovbøker", "Full parlamentarisme etter britisk mønster, med regjeringen ansvarlig overfor en folkevalgt forsamling", "En rendyrket markedsøkonomi der staten trakk seg ut av næringslivet og overlot industrireisingen til private", "Et føderalt system med selvstyrte provinser som fastsatte egne skatter og lovverk"],
      explanation: "Det avgjørende for kinesiske lesere var ikke bare innholdet, men at pakken var gjennomført i et østasiatisk land i løpet av få tiår — det fjernet innvendingen om at slike ordninger ikke lot seg gjennomføre der. Distraktoren om full parlamentarisme overdriver forsamlingens myndighet, og distraktoren om en rendyrket markedsøkonomi er gal fordi staten nettopp fremmet industri aktivt.",
    },
    {
      question: "Hva er det mest lærerike ved at Meiji-modellen påvirket både reformister og revolusjonære i Kina?",
      options: ["At innflytelse ikke er kopiering: én modell ble lest på to måter, styrt av lesernes egne prosjekter", "At de to gruppene i praksis var enige og bare brukte ulike ord om det samme politiske programmet", "At modellen var så uklar at den kunne tolkes i alle retninger og derfor ikke fikk noen reell virkning", "At revolusjonære alltid henter forbilder fra utlandet, mens reformister holder seg til innenlandske tradisjoner"],
      explanation: "Reformistene leste modellen som et argument for at dynastiet kunne bestå dersom staten rundt det ble bygget om; de revolusjonære leste den som bevis på at rask og gjennomgripende endring var mulig, og trakk motsatt slutning. Distraktoren om at gruppene egentlig var enige, viser bort fra nettopp det som gjør momentet interessant, og distraktoren om uklarhet forveksler tolkningsrom med innholdsløshet.",
    },
    {
      question: "Hva skiller reformisme fra revolusjon i den kinesiske debatten etter 1895?",
      options: ["Hvor langt endringen skal gå: om det bestående rammeverket skal bygges om eller erstattes", "Hvem som tar initiativet: om endringen drives fram av statsledelsen selv eller av grupper utenfor den", "Hvor raskt endringen skal gjennomføres, gradvis eller i løpet av få måneder", "Hvilket land forbildet hentes fra: om modellen er japansk og østasiatisk eller europeisk og vestlig"],
      explanation: "Begge bygde på samme diagnose — at staten var for svak til å møte det ytre presset — og uenigheten gjaldt middelet. Distraktoren om hvem som tar initiativet, beskriver skillet mellom reform ovenfra og bevegelser nedenfra, som er et annet skille: en reform ovenfra kan være dyptgripende, og en bevegelse nedenfra kan være moderat.",
    },
    {
      question: "Hva slags roller har Liang Qichao og Lu Xun i dette stoffet?",
      options: ["De er historiske skikkelser navngitt i V2024-veiledningen, ikke pensumforfattere du viser til", "De er pensumforfattere hvis analyser av perioden er sentrale i den obligatoriske litteraturen", "De er samtidige kommentatorer hvis tekster er gjengitt i oppgavesettene og skal siteres i svaret", "De er forskere fra etterkrigstiden som har formulert de to hovedposisjonene om Japans rolle"],
      explanation: "Begge er personer som handlet i den perioden svaret handler om, og de hører til stoffet, ikke til litteraturen du viser til. Arkivet navngir bare to pensumforfattere, og ingen av dem hører hjemme i dette stoffet. Å vise til en historisk skikkelse som om vedkommende var pensumforfatter, er en referansefeil, og en oppdiktet referanse er verre enn ingen.",
    },
    {
      question: "Hvorfor reiste kinesiske studenter til Japan framfor til Europa i denne perioden?",
      options: ["Kort avstand og billig opphold, skriftspråket, og at japanske forlag allerede hadde oversatt mye europeisk faglitteratur", "Fordi europeiske universiteter ikke tok imot studenter fra Kina i denne perioden og henviste dem videre til Japan", "Fordi japanske myndigheter dekket kostnadene for kinesiske studenter som et ledd i sin egen utenrikspolitikk", "Fordi de kinesiske myndighetene forbød studieopphold i Europa, men tillot opphold i land innenfor regionen"],
      explanation: "De tre forholdene virket sammen: reisen var kort og oppholdet rimelig, skrifttradisjonen gjorde japanske tekster relativt tilgjengelige, og mye europeisk faglitteratur forelå allerede i japansk oversettelse. Distraktorene om forbud og avvisning tilskriver perioden regler som ikke fantes, og finansieringsdistraktoren gjør et enkelttilfelle til hovedforklaring.",
    },
    {
      question: "Hvilke tre kanaler virket studieoppholdene i Japan gjennom?",
      options: ["Tekstkanal, begrepskanal og organisasjonskanal", "Handelskanal, diplomatisk kanal og militær kanal, som til sammen bandt de to landene tettere sammen", "Skolekanal, universitetskanal og forskningskanal, altså de tre nivåene i det japanske utdanningssystemet", "Offentlig kanal, privat kanal og religiøs kanal, avhengig av hvem som finansierte det enkelte oppholdet"],
      explanation: "Tekstkanalen gjaldt europeisk faglitteratur lest i japansk oversettelse, begrepskanalen de nye faguttrykkene som kom inn i kinesisk gjennom japansk, og organisasjonskanalen studentmiljøene der tidsskrifter og foreninger ble til. Distraktoren om handel, diplomati og militærvesen beskriver forbindelser mellom statene, ikke kanalen studieoppholdene utgjorde.",
    },
    {
      question: "Hvorfor er begrepsimporten et særlig sterkt moment i et svar om at Japan «formet» Kinas politiske historie?",
      options: ["Fordi språklig innflytelse blir stående og former hvordan senere debatter kan føres, uavhengig av forholdet mellom statene", "Fordi antallet importerte ord kan telles nøyaktig og derfor gir et etterprøvbart mål på påvirkningens omfang", "Fordi importerte ord viser at det kinesiske språket manglet uttrykk for moderne forhold før denne perioden", "Fordi ordimport alltid følges av institusjonell import, slik at språket er et sikkert tegn på politisk innflytelse"],
      explanation: "Begreper som er tatt opp, blir værende også etter at det politiske forholdet er blitt fiendtlig, og de former apparatet man senere kan tenke med om stat, rett og samfunn. Distraktoren om telling gjør et metodespørsmål til et argument. Distraktoren om at ordimport alltid følges av institusjonell import, framsetter en generell lov som ikke holder.",
    },
    {
      question: "Hva var De 21 kravene?",
      options: ["Japanske krav til Kina i 1915 om utvidede rettigheter, i den mest vidtgående delen også japanske rådgivere i forvaltningen", "Kinesiske krav til fredskonferansen etter den første verdenskrig om tilbakeføring av tapte rettigheter og områder", "Kravene de europeiske maktene stilte samlet til Kina etter nederlaget i 1895, om konsesjoner og innflytelsessfærer", "Kravene fra den kinesiske studentbevegelsen til landets egne myndigheter om reform av forvaltning og utdanning"],
      explanation: "Kravene ble stilt mens de europeiske maktene var bundet opp i Europa, og de gikk lenger enn de eldre traktatene fordi de berørte selve forvaltningen. De kom fra én stat alene, i motsetning til de eldre traktatene som ble framforhandlet av flere makter parallelt. Distraktoren om kinesiske krav ved fredskonferansen blander sammen kravene med Shandong-spørsmålet.",
    },
    {
      question: "Hva gjaldt Shandong-spørsmålet?",
      options: ["Om de tyske rettighetene i provinsen skulle tilbakeføres til Kina eller overføres til Japan etter krigen", "Om provinsen skulle innlemmes i marionettstaten Manchukuo eller forbli under kinesisk sentralstyre", "Om Japan skulle få bygge og drive jernbane gjennom provinsen mot en fastsatt leieavtale over flere tiår", "Om provinsen skulle åpnes som traktatshavnområde for alle maktene på like vilkår etter bestevilkårsprinsippet"],
      explanation: "Kina hadde sluttet seg til de seirende maktene og forventet tilbakeføring; i fredsoppgjøret ble rettighetene i stedet overført til Japan, og utfallet rammet også troen på at internasjonal orden ville beskytte Kina. Distraktoren om Manchukuo flytter saken både geografisk og over ett tiår fram i tid.",
    },
    {
      question: "Hva betyr det at De 21 kravene og Shandong-spørsmålet var katalysatorer for moderne kinesisk nasjonalisme?",
      options: ["At de utløste og ga retning til strømninger som allerede lå i emning, ikke at de skapte nasjonalismen", "At de var den utløsende årsaken til at nasjonalistiske ideer for første gang nådde Kina fra utlandet", "At de var uten selvstendig betydning og bare framskyndet en utvikling som ville kommet uansett kort tid etter", "At de gjorde nasjonalismen til et statlig prosjekt, drevet ovenfra av myndighetene i stedet for av studentene"],
      explanation: "Strømningene, organisasjonene og publikasjonene fantes fra før; det de to hendelsene tilførte, var én konkret sak, ett bestemt tidspunkt og én tydelig motpart. Distraktoren om at nasjonalismen oppsto her, er den vanligste overdrivelsen. Distraktoren om at hendelsene var uten selvstendig betydning, er den motsatte feilen — en katalysator er ikke uvirksom.",
    },
    {
      question: "Hva var Manchukuos plass i kjeden av momenter?",
      options: ["Overgangen fra politisk press til territoriell kontroll, og forløperen til den fullskala invasjonen", "Det første leddet i kjeden, siden det var her japansk innflytelse i Kina begynte for alvor på 1900-tallet", "Et sidespor uten forbindelse til de øvrige momentene, som veiledningen nevner for fullstendighetens skyld", "Selve endepunktet, siden krigen som fulgte hører til en annen periode enn den spørsmålet avgrenser"],
      explanation: "Marionettstaten ble opprettet i 1932 og gikk forut for den fullskala invasjonen fem år senere, og den markerer skiftet fra press og krav til direkte kontroll over territorium. Distraktoren om et endepunkt er gal fordi invasjonen 1937–45 ligger innenfor perioden spørsmålet avgrenser og er kjedens siste ledd.",
    },
    {
      question: "Hva bør et svar på V2024-1 skrive om når det behandler invasjonen 1937–45?",
      options: ["Virkningen på kinesisk politikk, ikke krigsforløpet", "Slagene, frontlinjene og de militære vendepunktene i den rekkefølgen de fant sted i løpet av krigsårene", "Hvordan ansvaret for krigstiden skal vurderes i dag, og hva som ville være et tilstrekkelig oppgjør mellom statene", "Hvordan krigen framstilles i de ulike statenes offisielle historie og i lærebøkene som brukes i skolen i dag"],
      explanation: "Spørsmålet gjelder hvordan Japan formet Kinas politiske historie, så det er virkningene som teller: krigen som samlende referanse, forskyvningen av politikkens tyngdepunkt mens den varte, og at forholdet til Japan ble en varig innenrikspolitisk sak. Ansvarsspørsmålet og framstillingene i offisiell historie er omstridte vurderinger som hører hjemme i et annet kapittel.",
    },
    {
      question: "Hva skiller en momentkjede fra en tidslinje?",
      options: ["Kjeden sier hvorfor det neste leddet fulgte, tidslinjen sier bare når hendelsene fant sted", "Kjeden dekker en lengre periode enn tidslinjen og tar med bakgrunnen før perioden spørsmålet avgrenser", "Kjeden er et kladderedskap som aldri skal stå i selve svaret, mens tidslinjen skrives inn i teksten", "Kjeden inneholder færre hendelser enn tidslinjen, siden bare de aller viktigste momentene tas med i den"],
      explanation: "Et formingsspørsmål ber om virkning, og da må hvert ledd forklare hvorfor det neste kom — det er den forskjellen sensor leser etter. Distraktoren om at kjeden er et rent kladderedskap, er gal fordi koblingene nettopp skal stå i svaret. Antall hendelser og periodens lengde skiller ikke de to formene.",
    },
    {
      question: "Hvorfor lønner det seg å skrive én setning om hvilket moment du har kuttet?",
      options: ["Fordi sensor ellers ikke kan skille et moment du prioriterte bort fra et moment du ikke kunne", "Fordi ordgrensen krever at alle momenter på veiledningens liste nevnes minst én gang i svaret", "Fordi et svar som ikke behandler alle fem momentene, ellers regnes som ufullstendig og ikke bestått", "Fordi setningen frigjør plass ved at du slipper å utvikle det momentet du har valgt å behandle sist"],
      explanation: "Kuttebegrunnelsen viser at utvalget var et valg og ikke et hull, og formen er å si hva framstillingen taper på kuttet. Distraktoren om at alle fem må nevnes, er gal: med et tak på 800 ord er tre til fem momenter det realistiske, og bestått-gulvet i V2021-veiledningen er tre. En begrunnelse er ikke det samme som en unnskyldning for å skrive kortere.",
    },
    {
      question: "Hva er mangel nr. 2, slik den viser seg i en oppgave med en ferdig momentliste?",
      options: ["Å velge ett eller to av momentene og skrive langt om dem, slik at svaret havner under bestått-gulvet", "Å bygge svaret på generelle forestillinger om Japan og Kina i stedet for på stoffet emnet har gjennomgått", "Å behandle momentene som en tidslinje i stedet for som en kjede der hvert ledd forklarer det neste", "Å skrive at nasjonalismen oppsto ved De 21 kravene, i stedet for at hendelsene virket som katalysator"],
      explanation: "Mangel nr. 2 er å nevne under tre momenter, og V2021-veiledningen setter bestått-gulvet ved tre på hvert av de tre spørsmålene. Fellen er særlig nærliggende her, fordi listen er ferdig laget og det er fristende å gå i dybden på det man kan best. Å bruke allmennkunnskap i stedet for pensum er mangel nr. 9, som er en annen mangel med en annen motgift.",
    },
    {
      question: "Hva er den sterkeste kontinuiteten i et svar om Japans rolle i Kinas historie 1890–1945?",
      options: ["At Japan var det faste referansepunktet gjennom hele perioden, enten som modell eller som motpart", "At forholdet mellom de to landene var fiendtlig hele veien, fra krigen i 1894 og fram til krigens slutt", "At kinesisk politikk var styrt av de samme institusjonene i hele perioden, uten vesentlige omveltninger", "At japansk politikk overfor Kina fulgte den samme linjen hele perioden"],
      explanation: "Forholdet skiftet innhold fra modell til motstander, men Japans betydning for kinesisk politikk var konstant — og det gir kontinuitetskolonnen et moment som ellers ville stått tom. Distraktoren om et fiendtlig forhold hele veien er gal fordi modellrollen var reell, og distraktoren om uendrede institusjoner motsies av selve perioden.",
    },
    {
      question: "Hva er den tredje lesningen i drøftingen av om Japan var modell eller motstander?",
      options: ["At nærheten forklarer begge rollene: den samme kortheten i avstand og delte tradisjon gjorde både læring og konflikt mulig", "At spørsmålet ikke lar seg besvare med materialet vi har, og at det derfor bør avvises som galt stilt uten videre", "At rollene avløste hverandre i tid, slik at Japan først var modell og deretter utelukkende motstander", "At begge rollene var like viktige, og at et svar derfor bør gi dem nøyaktig like mye plass i framstillingen"],
      explanation: "Denne lesningen er ikke en mellomting, men en tredje posisjon: den forklarer hvorfor de to rollene fikk plass samtidig, og den er ofte den sterkeste — forutsatt at den begrunnes. Distraktoren om avløsning i tid er gal fordi rollene overlappet, og distraktoren om lik plass forveksler en veiing med en ordfordeling.",
    },
  ],
  'exfac03-east-6-1': [
    {
      question: "Hva er forskjellen på en våpenhvile og en fredsavtale?",
      options: ["Våpenhvilen stanser kamphandlingene, mens fredsavtalen i tillegg avslutter selve konflikttilstanden mellom partene", "Våpenhvilen inngås av militære ledere alene, mens en fredsavtale må godkjennes av en internasjonal organisasjon for å gjelde", "Våpenhvilen gjelder en avtalt periode av gangen, mens fredsavtalen fornyes automatisk til en av partene sier den opp", "Våpenhvilen omfatter bare landstyrker, mens fredsavtalen i tillegg regulerer sjø- og luftstyrkene til begge partene"],
      explanation: "Poenget er hva som avsluttes: våpenhvilen stanser kamphandlingene, fredsavtalen avslutter i tillegg konflikttilstanden og regulerer forholdet etterpå. De nære fellene handler om hvem som undertegner og hvor lenge avtalen varer, og begge deler er ved siden av saken — skillet ligger i hva avtalen gjør med den underliggende konflikten, ikke i hvem som signerer den.",
    },
    {
      question: "Hvilke momenter fører V2021-veiledningen opp som det som ikke endret seg i regionens internasjonale relasjoner?",
      options: ["Kommunistisk styre i Kina, delingen over Taiwanstredet, delingen på Koreahalvøya, og amerikanske militærbaser sammen med atomparaplyen", "Kommunistisk styre i Kina, Sovjetunionens sammenbrudd, delingen på Koreahalvøya, og den amerikanske atomparaplyen over allierte i regionen", "Delingen over Taiwanstredet, demokratiseringen av Sør-Korea, amerikanske militærbaser i Japan, og Kinas fremvekst som militær stormakt", "Delingen på Koreahalvøya, territorialstridene i regionen, amerikanske militærbaser i Japan, og nasjonalismens plass i mellomstatlige forhold"],
      explanation: "Kontinuitetskolonnen består av kommunistisk styre i Kina, de to delingene, og den amerikanske militære tilstedeværelsen med atomparaplyen. De nære fellene blander inn momenter som hører på endringssiden: Sovjetunionens sammenbrudd, demokratiseringen, Kinas fremvekst, territorialstridene og nasjonalismen sto alle på den andre kolonnen i veiledningen.",
    },
    {
      question: "Hva skiller amerikanske baser fra den amerikanske atomparaplyen som moment i et svar?",
      options: ["Basene er fysisk tilstedeværelse på et bestemt sted, mens atomparaplyen er en garanti om hva som vil skje ved et angrep", "Basene er regulert i avtale mellom to stater, mens atomparaplyen bare hviler på ensidige politiske erklæringer uten avtaletekst", "Basene gjelder bare Japan, mens atomparaplyen er den ordningen som gjelder Sør-Korea og de øvrige allierte i regionen", "Basene ble bygget ut etter den kalde krigen, mens atomparaplyen stammer fra de første etterkrigsårene og er langt eldre"],
      explanation: "De står som to punkter i veiledningens momentliste fordi de er to ting: en installasjon og en forventning. Fella er å slå dem sammen til ett moment, og da mister du et moment i regnskapet. De to andre nære fellene gjør basene til et rent japansk forhold og snur tidsforholdet på hodet, og begge deler er upresist.",
    },
    {
      question: "Hva betyr blokkdeling?",
      options: ["At stater knyttes til hver sin stormaktsblokk, med egne allianser, egne handelsmønstre og egne sikkerhetsgarantier", "At et land deles i to administrative soner som styres av hver sin okkupasjonsmakt i en avtalt overgangsperiode", "At stormaktene deler et område mellom seg i interessesfærer der den andre parten ikke skal blande seg inn", "At en gruppe stater danner en felles allianse med felles kommandostruktur og felles beslutningsorganer"],
      explanation: "Blokkdelingen er skillelinjen mellom to sider, med egne allianser, handelsmønstre og garantier på hver side. Den nære fella er å forveksle blokkdelingen med alliansesystemet, som er de konkrete avtalene på den ene siden av linjen — og en felles kommandostruktur er nettopp det Øst-Asia ikke fikk, siden avtalene der er bilaterale.",
    },
    {
      question: "Hvorfor holder det ikke å skrive at «ingenting endret seg» når du fører opp et kontinuitetsmoment?",
      options: ["Fordi momentet først blir et poeng når du sier hvilket press strukturen har tålt, og hvorfor den likevel står", "Fordi et kontinuitetsmoment alltid må belegges med et årstall, og en setning uten årstall ikke regnes som et moment", "Fordi kontinuitetsmomenter bare teller når de kobles til et endringsmoment i samme setning i besvarelsen", "Fordi kontinuiteter alltid skal stå til slutt i svaret, og en kort setning der vil se ut som en avslutning"],
      explanation: "Et kontinuitetsmoment har samme form som et endringsmoment: påstand, utdyping og ett holdepunkt. Poenget er at strukturen har vært utsatt for press og likevel står. De nære fellene gjør et årstall, en kobling eller en plassering i teksten til krav, men ingen av delene er det som gjør kontinuiteten til et moment.",
    },
    {
      question: "Hvilket av disse trekkene hører på endringssiden og ikke i kontinuitetskolonnen?",
      options: ["Demokratiseringen av Sør-Korea (ROK) mot slutten av 1980-tallet", "Den amerikanske atomparaplyen over allierte stater i regionen", "Delingen over Taiwanstredet, som har vart siden borgerkrigens slutt", "Amerikanske militærbaser på japansk og sørkoreansk territorium"],
      explanation: "Demokratiseringen av Sør-Korea er en historisk prosess med årsaker som fant sted i perioden, og den står i endringskolonnen. De tre andre er strukturer som besto gjennom hele perioden og hører i kontinuitetskolonnen — atomparaplyen, delingen over Taiwanstredet og den amerikanske militære tilstedeværelsen.",
    },
    {
      question: "Hva betyr utvidet avskrekking?",
      options: ["At garantisten avskrekker et angrep på en alliert stat, ikke bare et angrep på seg selv", "At avskrekkingen omfatter flere våpentyper enn atomvåpen, altså også konvensjonelle styrker og cyberkapasitet", "At avskrekkingen gjelder over et større geografisk område enn statens eget territorium og nærområde", "At avskrekkingen varer i en lengre periode enn den opprinnelige avtalen mellom partene fastsatte"],
      explanation: "Det utvidede ligger i hvem garantien gjelder: en annen stat. Det gjør troverdighetskravet strengere, fordi angriperen skal tro at garantisten tar en risiko for en annens skyld. De nære fellene leser «utvidet» som flere våpentyper, større område eller lengre varighet, og alle tre bommer på hva som utvides.",
    },
    {
      question: "Hva kjennetegner alliansesystemet i Øst-Asia i den formen det fikk etter 1945?",
      options: ["Det er bygget av separate avtaler mellom USA og enkeltstater, ikke av én flernasjonal allianse med felles kommando", "Det er bygget som en flernasjonal allianse der alle de allierte i regionen er forpliktet overfor hverandre", "Det er bygget på en regional sikkerhetsorganisasjon der også nøytrale stater i området har observatørstatus", "Det er bygget på ensidige garantierklæringer som kan trekkes tilbake uten oppsigelse fra noen av partene"],
      explanation: "Systemet består av bilaterale forsvarsavtaler, og konsekvensen er verdt å skrive ut: hver forbindelse går gjennom den samme stormakten, og de allierte har ingen felles arena der de binder seg overfor hverandre. Den nære fella er å overføre bildet av en flernasjonal allianse med felles kommando, som er en annen ordning enn den regionen faktisk fikk.",
    },
    {
      question: "Hvilken av disse påstandene er et robust funn og ikke en omstridt vurdering?",
      options: ["At amerikanske militærbaser på japansk og sørkoreansk territorium består", "At de amerikanske basene i regionen har vært en stabiliserende faktor", "At alliansesystemet i regionen bør erstattes av en flernasjonal ordning", "At Taiwans folkerettslige status er avklart gjennom praksis mellom statene"],
      explanation: "At basene består, står i V2021-veiledningens egen momentliste og er ikke et meningsspørsmål. De tre andre er vurderinger: om basene virker stabiliserende, hva som burde erstatte alliansesystemet, og hva Taiwans status er, er alle spørsmål der stater og forskere er uenige, og et svar skal gjengi posisjonene med avsender.",
    },
    {
      question: "Hvordan skal boka behandle en formulering som «myndighetene i staten framstiller forholdet slik»?",
      options: ["Som en opplysning om hva staten selv mener, og ikke som en avgjørelse av selve stridsspørsmålet", "Som en faktapåstand om hvordan forholdet er, siden staten selv er den nærmeste til å kjenne saken", "Som en vurdering forfatteren deler, siden den er gjengitt uten uttrykkelige forbehold i teksten", "Som et argument som må balanseres med et like langt avsnitt om motpartens rettskrav i saken"],
      explanation: "Et statlig narrativ er et faktum om staten: den framstiller det slik. Å skrive «det var slik» ville vært en dom, og det er ikke bokas oppgave. De nære fellene gjør narrativet til enten en faktapåstand om verden eller til noe som automatisk krever like mye plass til motparten, og ingen av delene følger av regelen.",
    },
    {
      question: "Hva menes med en sikkerhetsordning uten fredsavtale?",
      options: ["At partene har stanset kamphandlingene og bygget stabile rutiner rundt situasjonen uten at konflikten er avsluttet rettslig", "At partene har inngått en fredsavtale, men uten å opprette de institusjonene som avtalen forutsetter for å virke", "At partene har overlatt sikkerheten i området til en utenforstående stormakt fram til en fredsavtale kan forhandles", "At partene har avtalt en midlertidig ordning som etter avtaleteksten opphører på en fastsatt dato uten forlengelse"],
      explanation: "Kjernen er at ordningen bygger på at konflikten ikke er avsluttet, og regulerer hvordan partene lever med det. På Koreahalvøya er våpenhvilen, demarkasjonslinjen og den permanente beredskapen nettopp en slik ordning. De nære fellene forutsetter enten at en fredsavtale finnes, eller at ordningen er tidsbegrenset, og ingen av delene stemmer.",
    },
    {
      question: "Hva er avskrekking?",
      options: ["Å hindre en handling ved å gjøre den forventede kostnaden høyere enn den forventede gevinsten for motparten", "Å forsvare eget territorium med tilstrekkelige styrker når et angrep først er innledet av en annen stat", "Å svekke en motstanders evne til angrep ved å begrense hans tilgang til våpen, teknologi og handel", "Å binde en motstander til forhandlingsbordet ved å tilby økonomiske fordeler mot politiske innrømmelser"],
      explanation: "Avskrekking virker gjennom troverdig varsel om handling, ikke gjennom handlingen selv, og den har to forutsetninger: motparten må tro at du kan, og at du vil. Den nære fella er forsvar, som handler om hva som skjer når angrepet først kommer — en stat kan ha godt forsvar og svak avskrekking, og omvendt.",
    },
    {
      question: "Hvor sterkt er klyngen internasjonale relasjoner etter 1945 belagt i materialet?",
      options: ["Den står 1 av 21 spørsmål, og er berørt i 1 av 7 terminer i materialet", "Den står 6 av 21 spørsmål, fordelt på flere terminer i materialet", "Den står 5 av 21 spørsmål, og er den nest største klyngen i materialet", "Den står 4 av 21 spørsmål, og er berørt i alle terminene med bevart oppgavetekst"],
      explanation: "Klyngen står 1 av 21 spørsmål og er berørt i 1 av 7 terminer. Lav frekvens er likevel ikke grunn til å hoppe over stoffet: veiledningen for nettopp dette spørsmålet er blant de mest detaljerte i arkivet. De nære fellene bruker tall som hører til andre størrelser, blant annet sjangerandelene for sammenligningen og for endring og kontinuitet.",
    },
    {
      question: "Hva skiller delingen på Koreahalvøya fra delingen over Taiwanstredet?",
      options: ["På Koreahalvøya er begge sider internasjonalt anerkjente stater, mens statusspørsmålet er selve striden over Taiwanstredet", "På Koreahalvøya er delingen resultat av en borgerkrig, mens delingen over Taiwanstredet ble avtalt mellom to stormakter", "På Koreahalvøya finnes det en fredsavtale mellom partene, mens forholdet over Taiwanstredet aldri er blitt formalisert", "På Koreahalvøya har delingen vært stabil hele perioden, mens delingslinjen over Taiwanstredet er blitt flyttet flere ganger"],
      explanation: "Begge er kontinuiteter, men de er ulike i art: på halvøya gjelder striden forholdet mellom to anerkjente statsdannelser, over stredet gjelder den hva partene er. De nære fellene bytter om på opphavet og påstår en fredsavtale som ikke finnes — Koreakrigen ble avsluttet med våpenhvile.",
    },
    {
      question: "Hva kjennetegner en god kobling mellom et endringsmoment og et kontinuitetsmoment?",
      options: ["Den sier hvorfor endringen ikke opphevet strukturen, eller hvordan den forandret formen på den", "Den viser at endringen og kontinuiteten fant sted i samme tidsrom og derfor hører sammen i svaret", "Den plasserer kontinuiteten først i avsnittet, slik at endringen kan presenteres som en følge av den", "Den bruker like mange ord på hver av de to sidene, slik at svaret blir jevnt fordelt mellom dem"],
      explanation: "Koblingen er grepet som løfter et svar i sjangeren endring og kontinuitet, og den må forklare forholdet mellom de to, ikke bare konstatere det. Den nære fella er samtidighet: at to ting skjedde i samme periode, er sant og sier ingenting. Rekkefølge og ordfordeling er heller ikke det som gjør en kobling til et poeng.",
    },
    {
      question: "Hvilken oppgavesjanger er «hva endret seg og hva endret seg ikke»?",
      options: ["Endring og kontinuitet, der begge kolonnene skal fylles ut og momentene fordeles på begge sidene", "Sammenligningen, siden svaret må sette to tilstander opp mot hverandre langs faste dimensjoner", "Redegjørelsen med anvendelse, siden begrepene først må defineres og deretter brukes på et eksempel", "Argumenter for og mot, siden spørsmålet ber om grunner i to retninger og en begrunnet landing"],
      explanation: "Formuleringen er kjennetegnet på sjangeren endring og kontinuitet, og arbeidsredskapet er to kolonner som begge skal fylles. De nære fellene er de tre nabosjangrene: sammenligningen setter enheter opp mot hverandre langs dimensjoner, redegjørelsen definerer og anvender, og argumenter for og mot krever en landing. Ingen av dem ber om et før og et etter.",
    },
  ],
  'exfac03-east-6-2': [
    {
      question: "Hva krever V2021-veiledningen av et svar på endringsspørsmålet?",
      options: ["Minst tre av de listede punktene, og at både endringer og kontinuiteter diskuteres", "Minst tre av de listede punktene, og at kandidaten velger den siden hun har best belegg for", "Minst fem av de listede punktene, uten krav til hvordan de fordeles mellom de to sidene", "At kandidaten dekker alle punktene i momentlisten, men uten krav om utdyping av hvert enkelt"],
      explanation: "Kravet er både antall og fordeling: minst tre punkter, og begge sider. Den nærmeste fella er å lese det som et enten–eller der man kan velge den siden man kan best, og den andre er å tro at flere momenter alltid er bedre — med et tak på 800 ord blir mange momenter til oppramsing.",
    },
    {
      question: "Hva er tokolonneformen?",
      options: ["En arbeidsform der du fyller «endret seg» og «endret seg ikke» i kladden før du skriver", "En disposisjonsform der svaret deles i to like lange deler med en overskrift over hver av dem", "En sammenligningsform der to land settes opp mot hverandre langs de samme faste dimensjonene", "En vurderingsform der argumenter for og mot føres opp ved siden av hverandre og telles opp"],
      explanation: "Tokolonneformen er et verktøy i kladden, ikke en mal for teksten: den avslører at den ene siden er tom mens du fortsatt kan gjøre noe med det. De nære fellene gjør den til en disposisjon med krav om lik lengde, til sammenligningens dimensjonsmatrise, eller til en opptelling av argumenter.",
    },
    {
      question: "Hvilket av disse momentene står på endringssiden i V2021-veiledningens momentliste?",
      options: ["At Nord-Korea (DPRK) mistet sin russiske ryggdekning da Sovjetunionen falt", "At kommunistisk styre i Kina har bestått gjennom hele perioden", "At delingen over Taiwanstredet har vart siden borgerkrigens slutt", "At amerikanske militærbaser på japansk og sørkoreansk territorium fortsatt består"],
      explanation: "Den tapte ryggdekningen er en direkte følge av Sovjetunionens sammenbrudd og står i endringskolonnen. De tre andre er kontinuiteter fra den samme momentlisten, og fella er å blande de to kolonnene fordi alle fire handler om forhold som var på plass allerede under den kalde krigen.",
    },
    {
      question: "Hvorfor er «nasjonalismen oppsto» en dårlig formulering av endringsmomentet?",
      options: ["Fordi nasjonalisme fantes lenge før perioden — det som endret seg, er plassen koloni- og krigstidsspørsmål fikk mellom statene", "Fordi nasjonalisme er et innenrikspolitisk begrep som ikke hører hjemme i en oppgave om internasjonale relasjoner", "Fordi nasjonalismen etter den kalde krigen først og fremst svekket seg, slik at retningen i påstanden blir feil", "Fordi momentet ikke står i V2021-veiledningens momentliste og derfor ikke kan brukes i et svar på dette spørsmålet"],
      explanation: "Feilen er at momentet blir umulig å utdype, fordi påstanden ikke stemmer: nasjonalisme oppsto ikke i perioden. Presist formulert gjelder momentet hvilken plass koloni- og krigstidsspørsmål fikk i forholdet mellom statene. De nære fellene gjør momentet til innenrikspolitikk, snur retningen, eller påstår at det ikke står i momentlisten — og det gjør det.",
    },
    {
      question: "Hva kjennetegner koblingen i et svar på et endringsspørsmål?",
      options: ["Den forklarer hvorfor en endring ikke opphevet en kontinuitet, eller hvordan den forandret formen på den", "Den knytter svaret til de to andre spørsmålene på eksamenssettet, slik at besvarelsen henger sammen", "Den plasserer endringene og kontinuitetene i kronologisk rekkefølge, slik at leseren ser utviklingen", "Den setter opp like mange momenter på hver side, slik at svaret blir jevnt fordelt mellom kolonnene"],
      explanation: "Koblingen er grepet som løfter svaret, og den må forklare forholdet mellom en endring og en kontinuitet. Den nærmeste fella er kronologi: at ting fulgte etter hverandre i tid, er ikke en forklaring. Lik fordeling mellom kolonnene er heller ikke et krav — bestillingen krever begge sider, ikke lik lengde.",
    },
    {
      question: "Hva er den mest brukbare koblingen i dette stoffet?",
      options: ["At Sovjetunionens sammenbrudd fjernet den ene stormakten bak delingene uten at delingene løsnet", "At Kinas fremvekst kom samtidig med at Sør-Korea og Taiwan gikk over til valgt ledelse", "At demokratiseringene og territorialstridene begge fikk større plass i mediene i den samme perioden", "At koloni- og krigstidsspørsmål kom til overflaten samtidig som amerikanske baser fortsatt besto"],
      explanation: "Koblingen virker fordi den forklarer noe: delingene hviler på forholdet mellom partene selv, ikke på et stormaktsforhold, og derfor tålte de at den ene stormakten falt bort. De tre andre er samtidighetspåstander, og samtidighet forklarer ingenting — det er nettopp den fella koblingen skal unngå.",
    },
    {
      question: "Hvordan beskriver boka demokratisering?",
      options: ["Som en historisk prosess med årsaker som kan navngis, ikke som et endepunkt alle stater beveger seg mot", "Som et naturlig utviklingstrinn som følger av økonomisk vekst når inntektsnivået passerer en viss terskel", "Som et regjeringsskifte der en ny ledelse overtar etter en periode med autoritært styre i landet", "Som en endring som først og fremst måles i utenrikspolitikk, siden det er der virkningene blir synlige"],
      explanation: "En prosess med årsaker kan forklares — press nedenfra, generasjonsskifte, sosial og økonomisk endring, forhold utenfor landet — mens et naturlig endepunkt bare kan konstateres. De nære fellene gjør demokratisering til en automatisk følge av vekst, til et regjeringsskifte innenfor systemet, eller til noe som måles utenrikspolitisk.",
    },
    {
      question: "Hvilken følge fikk demokratiseringen av Sør-Korea (ROK) for de mellomstatlige forholdene?",
      options: ["Utenrikspolitikk ble en sak velgerne kunne straffe og belønne, og saker som baseavtaler ble offentlig debatt", "Alliansen med USA ble sagt opp, og forsvarssamarbeidet ble erstattet av en regional sikkerhetsordning", "Forholdet til Japan ble endelig avklart gjennom en avtale som avsluttet alle utestående stridsspørsmål", "Delingslinjen på halvøya ble flyttet, og den militære demarkasjonslinjen mistet sin praktiske betydning"],
      explanation: "Endringen gjorde utenrikspolitikk til noe folkevalgte organer og velgere tar stilling til, og baseavtaler og forholdet til Japan ble dermed åpne stridstemaer. De nære fellene påstår at kontinuiteter falt bort — alliansen, delingen og de utestående historiespørsmålene sto alle.",
    },
    {
      question: "Hvilken påstand om Kinas fremvekst er mest presis?",
      options: ["Folkerepublikken Kina ble regionens økonomiske tyngdepunkt og en militær aktør alle statene må forholde seg til", "Folkerepublikken Kina ble viktigere i regionen enn landet hadde vært i tiårene før den kalde krigen tok slutt", "Folkerepublikken Kina overtok rollen Sovjetunionen hadde hatt som den ene blokkens ledende stormakt i regionen", "Folkerepublikken Kina bygget en flernasjonal allianse i regionen som svar på det amerikanske avtalenettet"],
      explanation: "Presisjonen ligger i at påstanden har ledd som kan gis holdepunkt: økonomisk tyngdepunkt og militær aktør. «Ble viktigere» er sant og tomt, og gir deg ingenting å utdype. De to andre fellene overfører blokkdelingens rollefordeling og påstår en flernasjonal allianse som ikke finnes.",
    },
    {
      question: "Hva er forskjellen på historiestrid og territorialstrid?",
      options: ["Historiestriden gjelder fortolkning og oppgjør, mens territorialstriden gjelder hvem som har rett til et område", "Historiestriden gjelder forholdet mellom stater, mens territorialstriden er et rent innenrikspolitisk spørsmål", "Historiestriden er avsluttet med offisielle unnskyldninger, mens territorialstridene fortsatt står uløste", "Historiestriden gjelder tiden før 1945, mens territorialstridene bare gjelder forhold som oppsto etterpå"],
      explanation: "De henger sammen i politikken, men er ulike typer uenighet, og et svar tjener på å holde dem fra hverandre. De nære fellene gjør territorialstriden til innenrikspolitikk, erklærer historiestriden avsluttet, eller setter et skille ved 1945 som ikke holder — territorialstridene har røtter i eldre forhold.",
    },
    {
      question: "Hvilken av disse påstandene er robust og ikke en omstridt vurdering?",
      options: ["At Sør-Korea og Taiwan demokratiserte mot slutten av 1980-tallet", "At demokratiseringen var den viktigste endringen i regionen i perioden", "At demokratiseringen gjorde forholdet mellom statene i regionen mer stabilt", "At demokratiseringen var en følge av det amerikanske nærværet i regionen"],
      explanation: "At demokratiseringene fant sted, er et robust historisk funn og står i veiledningens momentliste. De tre andre er vurderinger: hva som var viktigst, hva virkningen ble, og hva årsaken var, er alle spørsmål der forskere vekter ulikt, og et svar skal gjengi posisjonene i stedet for å avgjøre dem.",
    },
    {
      question: "Hva sier kuttehierarkiet at du skal kutte først når svaret er for langt?",
      options: ["Bakgrunnsavsnittet som forklarer spørsmålets historie før du begynner å svare", "Det svakeste av momentene, i sin helhet, slik at de øvrige kan beholde detaljnivået", "Veiingen til slutt, siden den gjentar det leseren allerede har fått vite i momentene", "Det ene av eksemplene i hvert moment, slik at kuttet fordeler seg jevnt over hele svaret"],
      explanation: "Bakgrunnsavsnittet koster mange ord og gir ingen uttelling, og det står derfor øverst i hierarkiet. De nære fellene kutter i feil ende: momenter kuttes først lenger nede i rekken, veiingen kuttes aldri, og jevn stryking gjør alle momentene litt dårligere i stedet for å ofre det billigste.",
    },
    {
      question: "Hvilke fire ting kuttes aldri, uansett hvor langt svaret er?",
      options: ["Det tredje momentet, den ene siden av et tosidig spørsmål, eksempelet der det er bedt om eksempel, og fokusanvisningens element", "Åpningen, det første momentet, det siste momentet og selve avslutningen, siden disse fire til sammen bærer strukturen i hele besvarelsen", "Bakgrunnsavsnittet, definisjonene, eksemplene og veiingen, siden de til sammen viser bredden i kunnskapen", "Alle momenter fra sensorveiledningens liste, uansett hvor mange de er, siden de er det svaret måles mot"],
      explanation: "De fire er valgt fordi hvert av dem er et krav: tre momenter er bestått-gulvet, begge sider er uttrykkelig krevd, eksempelet er det som viser forståelse, og fokusanvisningen avgjør hvilket spørsmål du faktisk svarer på. De nære fellene verner om struktur, bredde eller fullstendighet i stedet for om kravene.",
    },
    {
      question: "Hva er ordbudsjettet for et svar på 450 ord?",
      options: ["Åpning på rundt 40 ord, tre momenter på rundt 120 ord hver, og en veiing på rundt 50 ord", "Åpning på rundt 40 ord, fire momenter på rundt 90 ord hver, og en veiing på rundt 50 ord", "Åpning på rundt 60 ord, fem momenter på rundt 70 ord hver, og en veiing på rundt 40 ord", "Åpning på rundt 80 ord, to momenter på rundt 160 ord hver, og en veiing på rundt 50 ord"],
      explanation: "Regnestykket holder momentene på 100 til 180 ord, som er nok til påstand, utdyping og ett eksempel. De nære fellene presser inn flere momenter enn plassen bærer, eller går under gulvet på tre momenter — begge deler gir enten oppramsing eller for tynt svar.",
    },
    {
      question: "Hva er mangel nr. 11 i bokas register?",
      options: ["Å skrive ujevnt fordelt mellom de tre svarene, slik at ett svar tar plassen til de andre", "Å skrive bare om den ene siden av et tosidig spørsmål, slik at halve bestillingen står ubesvart", "Å ramse opp momenter uten å utvikle noen av dem, slik at svaret blir en liste i stedet for en drøfting", "Å definere et begrep uten å nevne at det er omstridt, slik at leseren tror spørsmålet er avgjort"],
      explanation: "Fordelingsmangelen er særlig nærliggende i dette kapitlet, fordi stoffet er rikt: de tre svarene teller likt, og et langt svar her koster på de to andre. De nære fellene er tre andre punkter i registeret — ensidighet, oppramsing og manglende omstridt-markering — som alle er reelle, men er andre mangler.",
    },
    {
      question: "Hva skiller en systemendring fra en regional endring?",
      options: ["Systemendringen skjer i det globale maktforholdet og treffer regionen utenfra, mens den regionale oppstår mellom statene i regionen", "Systemendringen berører flere stater samtidig, mens den regionale bare berører forholdet mellom to nabostater av gangen og aldri flere enn det", "Systemendringen er en langsom prosess over tiår, mens den regionale er knyttet til enkelthendelser med en dato", "Systemendringen gjelder økonomi og handel, mens den regionale gjelder sikkerhetspolitikk og militære forhold"],
      explanation: "Skillet gjelder hvor endringen oppstår, ikke hvor mange den treffer eller hvor lang tid den tar. Sovjetunionens sammenbrudd er en klar systemendring, og nettopp derfor er den nyttig i en kobling. De nære fellene gjør skillet til et spørsmål om omfang, tempo eller saksfelt.",
    },
    {
      question: "Hva er forskjellen på en veiing og en oppsummering til slutt i svaret?",
      options: ["Veiingen setter momentene opp mot hverandre og velger, mens oppsummeringen gjentar dem i kortform", "Veiingen står alltid i siste avsnitt, mens oppsummeringen kan plasseres hvor som helst i besvarelsen", "Veiingen krever et eget eksempel, mens oppsummeringen bare skal peke tilbake på eksemplene i teksten", "Veiingen gjelder bare tosidige spørsmål, mens oppsummeringen hører hjemme i alle de fem sjangrene"],
      explanation: "Oppsummeringen gir null uttelling fordi sensor nettopp har lest momentene; veiingen tilfører noe nytt ved å rangere dem. Byttet koster ingen ord. De nære fellene gjør forskjellen til et spørsmål om plassering, om eksempelbruk eller om hvilken sjanger man er i.",
    },
    {
      question: "Hvor sterkt er sjangeren endring og kontinuitet belagt i materialet?",
      options: ["Den står 5 av 21 spørsmål, og er den nest største sjangeren etter sammenligningen", "Den står 6 av 21 spørsmål, og er den største sjangeren i hele materialet", "Den står 4 av 21 spørsmål, på linje med redegjørelsen med anvendelse og valgoppgaven", "Den står 2 av 21 spørsmål, på linje med argumenter for og mot i materialet"],
      explanation: "Sjangeren står 5 av 21 spørsmål og er nest størst; sammenligningen står 6 av 21 spørsmål og er størst. De nære fellene bruker tallene til de andre sjangrene: redegjørelsen og valgoppgaven står 4 av 21 spørsmål hver, og argumenter for og mot 2 av 21 spørsmål.",
    },
  ],
  'exfac03-east-6-3': [
    {
      question: "Hva skiller et robust historisk funn fra en omstridt vurdering?",
      options: ["Funnet sier hva som skjedde og kan prøves mot kilder, mens vurderingen sier hva noe betyr eller er verdt", "Funnet gjelder hendelser fra tiden før 1945, mens vurderingen gjelder forhold i tiden etter andre verdenskrigs slutt", "Funnet er noe fagfolk har skrevet om, mens vurderingen er noe bare stater og politikere uttaler seg om", "Funnet føles sikkert for den som leser det, mens vurderingen alltid vil oppleves som usikker og åpen"],
      explanation: "Testen er om påstanden i prinsippet kan prøves mot kilder, eller om den krever at du bestemmer hva som teller som tilstrekkelig, rettferdig eller viktigst. De nære fellene knytter skillet til tidsperiode, til hvem som uttaler seg, eller til hvor sikker leseren føler seg — og ingen av delene avgjør hva slags påstand det er.",
    },
    {
      question: "Hvilken av disse påstandene er robust og skal ikke gis forbehold?",
      options: ["At Japan koloniserte Korea fra 1910 til 1945", "At kolonitiden i Korea samlet sett hadde positive økonomiske virkninger for landet", "At oppgjøret mellom Japan og Sør-Korea (ROK) er tilstrekkelig gjennom avtalene som er inngått", "At historiestriden i regionen drives mest av innenrikspolitiske hensyn i samtiden"],
      explanation: "Koloniseringen av Korea fra 1910 til 1945 er robust og ikke et meningsspørsmål. De tre andre er vurderinger der forskere og stater vekter ulikt: økonomiske virkninger, hva som er tilstrekkelig oppgjør, og hva som driver striden i dag skal alle framstilles som posisjoner med avsender.",
    },
    {
      question: "Hva er falsk balanse?",
      options: ["Å framstille et spørsmål som åpent når det ikke er det, for eksempel ved å gi et robust funn et unødvendig forbehold", "Å gi den ene parten i en strid vesentlig mer plass enn den andre, slik at framstillingen blir skjev både i lengde og i tone", "Å gjengi en posisjon uten å oppgi hvem som holder den, slik at leseren ikke kan vurdere grunnlaget", "Å referere en stats offisielle framstilling uten å nevne at den også har et politisk formål"],
      explanation: "Falsk balanse lager posisjoner der det bare finnes ett faglig forsvarlig svar. De nære fellene er reelle svakheter, men de er andre svakheter: skjev plass, manglende avsender og uteglemt kontekst er alle problemer med framstillingen, ikke med selve balansen mellom påstander.",
    },
    {
      question: "Hvordan skal et statlig narrativ behandles i et svar?",
      options: ["Som et faktum om staten: at myndighetene framstiller forholdet slik, er en opplysning som kan gjengis", "Som en pålitelig kilde til hva som faktisk skjedde, siden staten har tilgang til egne arkiver og dokumenter", "Som noe som bør utelates, siden det er politisk og derfor ikke egner seg som materiale i et faglig svar", "Som en posisjon som alltid må møtes av en like lang gjengivelse av motpartens offisielle framstilling"],
      explanation: "At myndighetene i en stat framstiller noe på en bestemt måte, kan verifiseres og gjengis; at forholdet er slik, følger ikke av det. De nære fellene gjør narrativet enten til en pålitelig kilde om saken, til noe som må lukes bort, eller til noe som utløser et automatisk krav om lik plass.",
    },
    {
      question: "Hva slags påstand er «myndighetene i staten framstiller øygruppen som en uadskillelig del av eget territorium»?",
      options: ["En faktapåstand om staten, ikke en påstand om hvem øygruppen tilhører", "En vurdering, siden ordet uadskillelig innebærer et standpunkt til rettskravet", "En faktapåstand om øygruppen, siden staten er den nærmeste til å kjenne sitt eget territorium", "En posisjon uten avsender, siden det ikke framgår hvilken av statene i striden det er tale om"],
      explanation: "Setningen sier hvordan myndighetene framstiller saken, og det er noe som kan prøves mot kilder — men om staten, ikke om øygruppen. Skriver du den om til «øygruppen tilhører staten», har du gått fra en opplysning til en dom. De nære fellene leser den som en vurdering, som en dom om territoriet, eller som en påstand uten avsender.",
    },
    {
      question: "Hva gjelder lærebokstriden?",
      options: ["Hvordan koloni- og krigstiden framstilles i skolens historiebøker, og hvilke ord og hvilken plass hendelsene får", "Hvilke lærebøker som skal brukes ved universitetene i regionen, og hvem som har rett til å godkjenne dem for bruk i undervisningen", "Hvordan historiefaget skal avgrenses mot samfunnsfag i skolen, og hvem som skal fastsette timetallet", "Hvilke språk historiebøkene skal utgis på i land med flere offisielle skriftspråk i regionen"],
      explanation: "Striden gjelder framstillingen som gis til dem som skal lære, og den er både en innenrikssak og en mellomstatlig sak — nabostater har reagert formelt på innhold. De nære fellene flytter striden til universitetsnivå, til fagstruktur eller til språkpolitikk, som alle er andre spørsmål.",
    },
    {
      question: "Hva er minnepolitikk?",
      options: ["Politikken om hva som skal minnes, hvordan og av hvem — minnesmerker, minnedager, museer og offisielle besøk", "Politikken for å bevare arkiver og historiske kilder, slik at forskere i ettertid kan etterprøve framstillinger", "Politikken som avgjør hvilke deler av historien som skal undervises i skolen, og med hvor mange timer", "Politikken som fastsetter hvilke erstatningsordninger som gjelder for grupper som ble rammet under krigen"],
      explanation: "Minnepolitikken gjelder anerkjennelse gjennom markeringer og steder, og den treffer både innenrikspolitiske og mellomstatlige nerver. De nære fellene er arkivpolitikk, undervisningspolitikk og erstatningsordninger — beslektede felter, men ikke det samme som spørsmålet om hva som skal minnes.",
    },
    {
      question: "Hva er den riktige måten å behandle spørsmålet om offisielle unnskyldninger på?",
      options: ["Skille mellom at bestemte uttalelser er gitt, som er en faktapåstand, og om de er tilstrekkelige, som er en vurdering", "Konstatere at spørsmålet er endelig avsluttet, siden det finnes både uttalelser og mellomstatlige avtaler som dekker de sentrale forholdene", "Konstatere at spørsmålet er uavsluttet, siden de berørte gruppene fortsatt reiser krav om nye unnskyldninger", "Utelate spørsmålet fra svaret, siden vurderingen av oppgjør ikke lar seg avgjøre med faglige argumenter"],
      explanation: "Det som er gitt, kan konstateres; om det er tilstrekkelig, er en vurdering der flere posisjoner er forsvarlige. De to nære fellene avgjør vurderingen i hver sin retning, og den tredje unngår spørsmålet helt — men et moment som gjengir posisjonene med avsender, er både mulig og bedre.",
    },
    {
      question: "Hvorfor er Yasukuni-spørsmålet et brukbart eksempel på minnepolitikk?",
      options: ["Fordi uenigheten ikke gjelder hva som skjer, men hva et besøk betyr — og det leses ulikt av ulike parter", "Fordi det er uklart om besøkene faktisk har funnet sted, siden de sjelden bekreftes offisielt i etterkant", "Fordi spørsmålet ble endelig avklart gjennom en avtale mellom de berørte statene og derfor er et løst tilfelle", "Fordi helligdommen er den eneste institusjonen i regionen som markerer falne fra flere ulike kriger"],
      explanation: "Et besøk finner sted eller ikke, og det kan konstateres; det som er omstridt, er hva handlingen betyr, og der framstiller partene den ulikt. De nære fellene sår tvil om selve hendelsen, erklærer saken løst, eller bygger på en påstand om helligdommens særstilling som ikke er poenget.",
    },
    {
      question: "Hva er omstridt når det gjelder massedrapene i Nanjing?",
      options: ["Omfanget i tall, hvordan ansvaret plasseres i ettertid, og hvilken plass hendelsen skal ha i undervisning og minnemarkeringer", "Om den japanske hæren i det hele tatt var til stede i byen under invasjonen, og om det fant sted kamphandlinger i området på det tidspunktet", "Om hendelsen fant sted, siden kildene fra perioden er få og siden framstillingene i ettertid spriker sterkt", "Om hendelsen hører hjemme i en oppgave om internasjonale relasjoner, eller bare i en rent historisk framstilling"],
      explanation: "Massedrapene er et robust historisk funn, og striden gjelder tallfesting, ansvar i ettertid og framstilling. De to nære fellene flytter uenigheten til selve hendelsen, som er nettopp den feilen falsk balanse består i, og den siste gjør et faglig spørsmål om til et spørsmål om sjanger.",
    },
    {
      question: "Hvorfor setter boka «trøstekvinnene» i anførselstegn?",
      options: ["Fordi ordet er en oversettelse av en samtidig eufemisme som flere av de berørte gruppene har avvist som forskjønnende", "Fordi det er uklart om systemet ordet viser til, faktisk eksisterte i den formen betegnelsen antyder", "Fordi ordet er et sitat fra V2021-veiledningen og derfor må gjengis ordrett med anførselstegn i boka", "Fordi betegnelsen brukes ulikt i de berørte landene og derfor ikke har noen fast betydning i faglitteraturen"],
      explanation: "Ordet er selv en del av striden, og anførselstegnene markerer det uten å gjøre systemets eksistens til et spørsmål — den er robust. De nære fellene antyder tvil om systemet, gjør anførselstegnene til en sitatregel, eller påstår at betegnelsen mangler fast betydning.",
    },
    {
      question: "Hvilke to territorialstrider navngir V2021-veiledningen?",
      options: ["Takeshima/Dokdo og Senkaku/Diaoyu", "Takeshima/Dokdo og delingslinjen på Koreahalvøya, som begge er uavklarte grensespørsmål i regionen", "Senkaku/Diaoyu og farvannet i Taiwanstredet, som begge gjelder kontroll med sjøområder og farleder", "Kurilene og Senkaku/Diaoyu, som begge gjelder øygrupper med uavklart status etter andre verdenskrig"],
      explanation: "Veiledningen navngir de to øygruppene Takeshima/Dokdo og Senkaku/Diaoyu, og begge navn skrives alltid, uten at rekkefølgen leses som en rangering. De nære fellene blander inn delingslinjen og Taiwanstredet, som er delinger og ikke territorialstrider i denne forstand, samt en øygruppe som ikke står i momentlisten.",
    },
    {
      question: "Hva bygger argumentet om effektiv kontroll på?",
      options: ["At en stat faktisk har utøvd myndighet over området over tid gjennom administrasjon, tilstedeværelse og håndheving", "At en stat har flest innbyggere bosatt i området, og at befolkningens tilhørighet dermed avgjør spørsmålet", "At en stat har militær overlegenhet i området og derfor er den eneste som kan håndheve en avgjørelse", "At en stat har inngått avtaler med tredjeland som anerkjenner kravet, og at anerkjennelsen dermed er avgjørende"],
      explanation: "Effektiv kontroll viser til dokumenterbar myndighetsutøvelse over tid, og styrken ligger i at det kan belegges i samtidige kilder. De nære fellene bytter ut myndighetsutøvelse med bosetting, militær styrke eller tredjelands anerkjennelse, som er andre argumenttyper.",
    },
    {
      question: "Hvorfor møtes ikke argumentene om effektiv kontroll og historisk krav?",
      options: ["Fordi de svarer på ulike spørsmål: det ene på hvem som har hatt ansvaret i praksis, det andre på hvem området opprinnelig tilhørte", "Fordi det ene argumentet utelukkende bygger på skriftlige kilder, mens det andre bare bygger på muntlig tradisjon i de berørte områdene", "Fordi det ene brukes av stater og det andre bare av organisasjoner og forskere som ikke er part i striden", "Fordi det ene gjelder landområder og det andre gjelder havområder, slik at de aldri anvendes på samme sak"],
      explanation: "Argumenttypene er to ulike forestillinger om hva som avgjør et territorialspørsmål, og partene svarer derfor ofte på hvert sitt spørsmål. De nære fellene gjør skillet til et spørsmål om kildetype, om hvem som argumenterer, eller om land mot hav — og ingen av delene stemmer.",
    },
    {
      question: "Hva er robust i territorialstridene?",
      options: ["At stridene er reelle mellomstatlige uenigheter som behandles i formelle kanaler", "At den parten som har administrert et område lengst, har det sterkeste rettskravet i saken", "At stridene i praksis er symbolsaker uten betydning for forholdet mellom statene i regionen", "At stridene vil bli avgjort av en internasjonal domstol som begge parter på forhånd har godtatt"],
      explanation: "At stridene er reelle uenigheter, er robust: de behandles i noteveksler, i lovgivning om havområder og i kystvaktoperasjoner. Hvem som har det beste kravet, er derimot omstridt. De nære fellene avgjør rettskravet, avfeier stridene som symbolske, eller påstår en domstolsordning partene ikke har godtatt.",
    },
    {
      question: "Hvorfor hører territorialstridene på endringssiden i V2021-veiledningens momentliste?",
      options: ["Fordi det som endret seg, er hvilken plass de fikk i forholdet mellom statene — ikke at uenighetene oppsto", "Fordi selve uenighetene om øygruppene oppsto først etter at den kalde krigen tok slutt i regionen", "Fordi grensene i området ble trukket på nytt etter den kalde krigen, slik at nye områder ble omstridt", "Fordi stridene ble løst i perioden og derfor markerer en endring i forholdet mellom de berørte statene"],
      explanation: "Uenighetene er eldre enn perioden; det som endret seg, er at de ble gjentakende saker i diplomati, innenrikspolitikk og offentlighet. De nære fellene daterer uenighetene feil, påstår nye grensedragninger, eller hevder at stridene ble løst — og ingen av delene stemmer.",
    },
    {
      question: "Hva er den viktigste presiseringen når du drøfter om historiestriden gjelder fortiden eller samtiden?",
      options: ["At ingen av lesningene bestrider at hendelsene fant sted — uenigheten gjelder hva som driver striden om dem i dag", "At samtidslesningen innebærer at kravene fra de berørte gruppene er politisk konstruerte i ettertid", "At fortidslesningen innebærer at innenrikspolitikk ikke spiller noen rolle for når stridene blusser opp", "At spørsmålet ikke kan drøftes faglig, siden det gjelder motiver som ikke lar seg dokumentere i kilder"],
      explanation: "Presiseringen skiller ekte ambivalens fra falsk balanse: hendelsene er robuste, og det er drivkreftene i dag som er omstridt. De to nære fellene er stråmenn av hver sin lesning, og den siste avviser en drøfting som begge posisjoner faktisk fører med faglige argumenter.",
    },
    {
      question: "Hva kjennetegner en posisjon med avsender?",
      options: ["Det står hvem som holder synspunktet og på hvilket grunnlag, slik at gjengivelse skilles fra tilslutning", "Det står hvilken kilde påstanden er hentet fra, med henvisning til forfatter, verk og utgivelsesår", "Det står at synspunktet er omstridt, slik at leseren vet at det finnes minst én motstridende posisjon", "Det står et forbehold foran påstanden, slik at forfatteren ikke kan tas til inntekt for innholdet"],
      explanation: "Formen skiller gjengivelse fra tilslutning og lar leseren vurdere grunnlaget. Den nærmeste fella er forbeholdet: «det hevdes at …» oppgir ingen avsender og lar påstanden sveve fritt. Å merke noe som omstridt er nyttig, men det erstatter ikke opplysningen om hvem som mener hva.",
    },
  ],
  'exfac03-east-7-1': [
    {
      question: "Hva skiller dimensjonen politiske institusjoner fra dimensjonen politisk frihet?",
      options: ["Institusjonene er reglene for hvem som bestemmer hva, mens politisk frihet er handlingsrommet innbyggerne faktisk har", "Institusjonene gjelder det statlige nivået, mens politisk frihet bare gjelder forholdet mellom kommunen og innbyggerne i lokale saker", "Institusjonene er den delen av systemet som lar seg tallfeste, mens politisk frihet er den delen ingen forsker har forsøkt å måle", "Institusjonene beskriver hva myndighetene selv sier om ordningen, mens politisk frihet beskriver hva utenlandske observatører mener"],
      explanation: "Riktig svar er at institusjonene er ordningen og reglene for makt, mens politisk frihet er handlingsrommet innenfor eller på tross av dem. Den nære fella er å gjøre skillet til et nivåskille eller til et målbarhetsskille — begge dimensjonene tallfestes av noen, og begge har en formell og en praktisk side. Alternativet om hva myndighetene sier, blander en dimensjon med en kilde: at myndighetene beskriver ordningen på en bestemt måte, er en opplysning om avsenderen.",
    },
    {
      question: "Hvorfor er korrupsjonstall et måleproblem i en sammenligning?",
      options: ["Fordi korrupsjon er skjult og ikke kan telles direkte, slik at tallene bygger på oppfatninger eller på rapporterte erfaringer", "Fordi statene i regionen nekter å levere tall til dem som lager indeksene, slik at alle publiserte tall er anslag fra journalister", "Fordi korrupsjon betyr helt ulike ting i ulike rettssystemer, og begrepet derfor er uten analytisk verdi utenfor Europa", "Fordi korrupsjonstall bare finnes for de landene som selv har bedt om å bli målt, slik at utvalget er skjevt fra starten av"],
      explanation: "Riktig svar er at korrupsjon per definisjon er skjult, og at tallene derfor måler enten oppfatninger blant eksperter og forretningsfolk eller rapporterte erfaringer blant innbyggere. Den nære fella er å tro at begrepet er ubrukelig utenfor Europa — begrepet er analytisk brukbart, det er målingen som er vanskelig. De to alternativene om innsamling og utvalg høres tekniske ut, men problemet ligger i hva som måles, ikke i hvem som har levert tallene.",
    },
    {
      question: "Hva kjennetegner et ettpartisystem?",
      options: ["Ett parti har en varig og formalisert lederrolle i statsapparatet, og andre partier konkurrerer ikke om regjeringsmakten", "Det finnes bare ett politisk standpunkt i landet, og uenighet om politikk forekommer verken innenfor partiet eller i forvaltningen", "Ett parti har vunnet de siste valgene med klar margin, slik at opposisjonen ikke har mulighet til å danne regjering nå", "Staten eier all jord og alle bedrifter, og partiet styrer økonomien direkte gjennom en plan som vedtas for flere år av gangen"],
      explanation: "Riktig svar er at ett parti har en varig, formalisert lederrolle og at andre partier ikke konkurrerer om regjeringsmakten. Fella i alternativet om ett standpunkt er faktafeilen om at et ettpartisystem ikke har politikk — uenigheten er reell, men utspiller seg innenfor partiet. Alternativet om valgseire beskriver et flerpartisystem med ett dominerende parti, som er noe annet. Alternativet om statlig eierskap blander politisk system med økonomisk ordning.",
    },
    {
      question: "Japan har hatt lange perioder der ett parti satt i regjering nesten sammenhengende. Hva følger av det for systemtypen?",
      options: ["Ingenting — et flerpartisystem kjennetegnes av at konkurransen om makten er reell og at skifte er mulig innenfor reglene", "At Japan i disse periodene fungerte som et ettpartisystem, siden det avgjørende for systemtypen er hvor ofte regjeringen skifter", "At valgordningen må ha vært flertallsvalg i enkeltkretser, siden bare den ordningen kan gi ett parti så lang tid i regjering", "At dimensjonen politiske institusjoner ikke skiller systemene, og at raden derfor bør kuttes fra matrisen med en gang"],
      explanation: "Riktig svar er at lang tid i regjering ikke gjør et flerpartisystem om til et ettpartisystem — det avgjørende er om konkurransen er reell og reglene tillater skifte. Den nære fella er nettopp å måle systemtypen på hvor ofte regjeringen faktisk skifter. Alternativet om valgordning trekker en slutning fra utfall til regel som ikke holder, og alternativet om å kutte raden forveksler en nyanse i beskrivelsen med fravær av forskjell.",
    },
    {
      question: "Hva er forskjellen på valgordning og maktfordeling?",
      options: ["Valgordningen bestemmer hvordan makten fylles, maktfordelingen hvordan den deles mellom lovgivende, utøvende og dømmende organer", "Valgordningen gjelder nasjonale valg, mens maktfordelingen bare gjelder forholdet mellom sentralmakten og de regionale organene", "Valgordningen er en formell regel, mens maktfordelingen er en uformell praksis som ikke er nedfelt noe sted i lovverket", "Valgordningen hører til dimensjonen politisk frihet, mens maktfordelingen hører til dimensjonen politiske institusjoner"],
      explanation: "Riktig svar er at valgordningen handler om hvordan makten fylles, og maktfordelingen om hvordan den deles etterpå. Fella i alternativet om formell regel mot uformell praksis er at maktfordelingen som regel er nedfelt i konstitusjonelle regler. Alternativet som plasserer valgordningen under politisk frihet, er nær sant fordi stemmerett også er en frihetssak, men i denne bestillingen hører begge til institusjonsdimensjonen.",
    },
    {
      question: "Hva dekker «utvikling» som dimensjon i denne sammenligningen?",
      options: ["Inntektsnivå, helse, utdanning og infrastruktur — og hvordan disse godene er fordelt innenfor landet", "Hvor langt landet er kommet på veien mot den samfunnsformen de allerede utviklede landene har nådd før det", "Endringen i produksjonsverdi over tid, altså den økonomiske veksten målt fra ett år til det neste året", "Statens evne til å gjennomføre store investeringer i industri og samferdsel uten hjelp fra utenlandsk kapital"],
      explanation: "Riktig svar er at dimensjonen dekker levekår og infrastruktur sammen med fordelingen av dem, og det er fordelingsleddet som gjør dimensjonen politisk. Den nære fella er å bytte utvikling mot økonomisk vekst: vekst er endring i produksjonsverdi, mens utvikling omfatter levekår og fordeling. Alternativet om en vei mot en gitt samfunnsform gjør dimensjonen til en rangering, og det er nettopp det sammenligningen ikke skal være.",
    },
    {
      question: "Hvorfor er måling av offentlig opinion særlig usikker der politisk frihet er begrenset?",
      options: ["Fordi målingen forutsetter at de som svarer, kan svare fritt, og der handlingsrommet er smalt, er den forutsetningen usikker", "Fordi undersøkelser i slike land alltid gjennomføres av myndighetene selv, slik at resultatene aldri blir publisert for andre", "Fordi befolkningen i slike land ikke har politiske meninger å måle, siden meningsdannelse krever et fritt ordskifte først", "Fordi opinionen der er mer delt etter alder og region enn andre steder, slik at gjennomsnittet skjuler mer enn det viser"],
      explanation: "Riktig svar er at målingen hviler på en forutsetning om at respondentene kan svare fritt, og den forutsetningen svekkes når handlingsrommet er smalt. Alternativet om at befolkningen ikke har meninger, er en påstand boka ikke kan gjøre og som dessuten er usann. At opinionen er delt etter alder og region, gjelder overalt og er derfor ikke det som skiller. Påstanden om at ingen resultater publiseres, er for kategorisk til å holde.",
    },
    {
      question: "Hvordan skal et svar i sammenligningssjangeren organiseres?",
      options: ["Dimensjon for dimensjon, med alle enhetene inne i hvert avsnitt, og med en avslutning om hva forskjellene skyldes", "Land for land, med ett grundig avsnitt per land, og med en avsluttende oppsummering som stiller forskjellene opp mot hverandre", "Kronologisk, slik at leseren følger begge landene fra samme startpunkt fram til i dag, med dimensjonene innvevd underveis", "Med alle fem dimensjonene i fast rekkefølge og ett kort avsnitt til hver, slik at ingen del av bestillingen blir ubesvart"],
      explanation: "Riktig svar er dimensjon for dimensjon med alle enhetene inne i hvert avsnitt, og med en avslutning som forklarer i stedet for å oppsummere. Land for land er strukturfellen som har eget nummer i feilregisteret. Alternativet med alle fem dimensjonene ser pliktoppfyllende ut, men gir så korte celler at ingen av dem kan utvikles — det er oppramsing forkledd som dekning.",
    },
    {
      question: "Hva går mangel nr. 8 ut på?",
      options: ["Å skrive land etter land i en sammenligningsoppgave i stedet for å ta én dimensjon om gangen med begge enhetene inne i den", "Å velge færre enheter enn bestillingen ber om, slik at sammenligningen får bare én enhet å beskrive og ingen å måle den mot", "Å bruke dimensjoner som ikke står navngitt i bestillingen, og dermed svare på et annet spørsmål enn det som faktisk er stilt", "Å oppgi hvilke dimensjoner som ble kuttet, i stedet for å behandle alle fem innenfor den ordgrensen bestillingen setter"],
      explanation: "Riktig svar er strukturfellen: å behandle det ene systemet ferdig før det andre begynner. Alternativet om å oppgi kuttet er nær sant på overflaten, men snudd på hodet — å si i åpningen hvilke dimensjoner du beholdt, er nettopp det kapitlet anbefaler. De to andre beskriver reelle svakheter, men de har ikke dette nummeret i registeret, og de rammer valget av enheter og dimensjoner, ikke rekkefølgen i teksten.",
    },
    {
      question: "Hva betyr kravet om at sammenligningen skal gjøres ved hjelp av pensum?",
      options: ["At momentene skal hentes fra det leste stoffet og ikke fra nyhetsbildet eller fra en generell fornemmelse av hvordan landene er", "At svaret skal inneholde flest mulig direkte sitater fra pensumtekstene, slik at forankringen blir synlig for den som retter", "At bare de landene som er behandlet i pensum, kan velges, og at ethvert annet valg gir trekk uansett hvor godt det er utført", "At svaret ikke kan bruke tall eller indekser laget av andre enn pensumforfatterne, siden slike tall mangler faglig forankring"],
      explanation: "Riktig svar er at momentene skal komme fra lest stoff. Den nære fella er sitatmengde: et svar med mange sitater og få utviklede momenter er svakere enn et svar med tre momenter som tydelig kommer fra pensum. De to andre gjør kravet til en forbudsregel om land og tall, og det sier bestillingen ingenting om. Boka vet for øvrig ikke hvilke tekster som står på din pensumliste.",
    },
    {
      question: "Hvor mange politiske systemer ber bestillingen i V2025-3 om at du sammenligner?",
      options: ["Minst to, og på denne ordgrensen er to som regel også det praktiske taket, fordi hver enhet til krymper cellene i matrisen", "Minst tre, siden bestått-gulvet krever minst tre momenter og hvert system regnes som ett moment i en sammenligning", "Alle systemene som er navngitt i oppgavetekstene i materialet, siden en sammenligning ellers blir for smal til å vise bredde", "Bestillingen sier ingenting om antall, så valget er helt fritt så lenge svaret holder seg innenfor den oppgitte ordgrensen"],
      explanation: "Riktig svar er minst to: det er et gulv, ikke et tak, og innenfor ordgrensen er to som regel også nok. Fella i alternativet om tre er å blande sammen kravet om antall enheter med bestått-gulvet for antall momenter — et moment er en utviklet dimensjon, ikke et land. Påstanden om at bestillingen ikke sier noe om antall, er usann, og påstanden om alle navngitte systemer gjør et gulv om til et krav om bredde.",
    },
    {
      question: "Hva blir konsekvensen av å beholde alle fem dimensjonene innenfor ordgrensen?",
      options: ["Hver celle blir så kort at ingen av dimensjonene kan utvikles, og svaret havner i den oppramsingen mangel nr. 3 beskriver", "Svaret dekker bestillingen fullt ut, og dekningen veier tyngre enn dybden fordi alle fem dimensjonene er navngitt i oppgaven", "Svaret blir automatisk for langt, siden fem dimensjoner ganger to systemer ikke lar seg presse inn under den øvre grensen", "Sammenligningen mister sin tredje dimensjon, fordi de to første alltid tar mer plass enn de tre siste gjør til sammen"],
      explanation: "Riktig svar er at cellene blir for korte til at noe kan utvikles, og at resultatet er en oppramsing. Den nære fella er tanken om at dekning veier tyngre enn dybde: mantraet i boka er at tre momenter utviklet slår ti nevnt. Alternativet om at svaret blir for langt, er også galt — problemet er ikke at det sprenger taket, men at det holder seg innenfor og likevel ikke utvikler noe.",
    },
    {
      question: "Hvilken dimensjon ryker først i kutteøvelsen?",
      options: ["Den der én av cellene er tom eller bare kan fylles med et tall du ikke kan sette avsender på", "Den som står sist i bestillingen, siden rekkefølgen der viser hva de som lagde oppgaven, la minst vekt på", "Den du kan minst om, uten at kuttet nevnes i svaret, slik at den som retter, ikke får vite hva som mangler", "Den der de to enhetene skiller seg mest, siden den forskjellen uansett kommer fram i de andre dimensjonsavsnittene"],
      explanation: "Riktig svar er dimensjonen med en tom celle eller en celle som bare kan fylles med et tall uten avsender — et halvfylt avsnitt er verre enn ingen. Fella i alternativet om å kutte i stillhet er at kuttet nettopp skal stå i åpningen, med begrunnelse. Å kutte der forskjellen er størst, fjerner det mest opplysende materialet, og rekkefølgen i bestillingen sier ingenting om vekting.",
    },
    {
      question: "Hva skal åpningssetningen i et slikt sammenligningssvar inneholde?",
      options: ["Hvilke systemer du har valgt, hvilke dimensjoner du beholdt, og en kort faglig begrunnelse for at de øvrige gikk ut", "En gjengivelse av spørsmålet med egne ord, slik at den som retter, ser at bestillingen er lest og forstått riktig", "Konklusjonen din, slik at resten av svaret kan brukes til å underbygge den ene påstanden fra første til siste avsnitt", "Bakgrunnen for de systemene du sammenligner, slik at leseren har historien på plass før det første dimensjonsavsnittet"],
      explanation: "Riktig svar er valg av systemer, valg av dimensjoner og begrunnelse for kuttet — tre opplysninger som til sammen forplikter resten av svaret. Å gjengi spørsmålet bruker plass uten å tilføre noe. Bakgrunnsavsnittet står øverst i kuttehierarkiet fordi det koster mye og gir lite. Å plassere konklusjonen først er ikke ulovlig, men det er ikke det åpningen i denne sjangeren skal gjøre.",
    },
    {
      question: "Hva skal alltid sies når et svar bruker et tall fra en indeks?",
      options: ["Hvem som har laget tallet, hva det er ment å måle, og hvordan delmålene bak det er vektet mot hverandre i oppskriften", "Hvilket år tallet er fra og hvor mange land som er med, siden utvalgets størrelse avgjør hvor sikkert tallet er", "Hvordan landet har flyttet seg på rangeringen de siste årene, siden endringen sier mer enn nivået på ett tidspunkt", "Hvilken plassering landet har sammenlignet med nabolandene, slik at leseren ser forskjellen mellom systemene umiddelbart"],
      explanation: "Riktig svar er avsender, målobjekt og metode — bak hvert indekstall ligger valg om hva som måles, hvilke kilder som brukes og hvordan delmålene vektes. Årstall og utvalgsstørrelse er nyttige opplysninger, men de forteller ikke hva tallet er ment å fange. Alternativet om plassering mot nabolandene er nettopp rangeringen boka ikke gjør, fordi rekkefølgen er en konsekvens av oppskriften.",
    },
    {
      question: "Hvorfor er «regimet» ikke et analytisk begrep i denne sammenligningen?",
      options: ["Fordi ordet allerede inneholder konklusjonen når det tas i bruk, slik at sammenligningen ikke lenger har noe igjen å komme fram til", "Fordi ordet er upresist og kan bety både statsapparatet, styreformen og den sittende ledelsen, alt etter sammenhengen", "Fordi ordet er lånt fra fransk og derfor ikke hører hjemme i en norsk fagtekst om politiske systemer i Øst-Asia", "Fordi ordet bare kan brukes om stater som ikke holder valg, og de fleste systemene i regionen holder valg av et eller annet slag"],
      explanation: "Riktig svar er at ordet er verdiladet: det har svart på spørsmålet før analysen begynner. Den nære fella er upresishet — ordet er faktisk flertydig, men det er ikke derfor det unngås her, siden flertydighet kan repareres med en definisjon mens en innebygd dom ikke kan det. Merk at nøytralitet ikke betyr å unngå det ubehagelige: «ettpartisystem med omfattende kontroll over medieoffentligheten» er både beskrivende og presist.",
    },
  ],
  'exfac03-east-7-2': [
    {
      question: "Hva er en motstrøm i medieglobaliseringen?",
      options: ["En strøm av medieinnhold som går i motsatt retning av den etablerte hovedretningen, med produksjonsmiljøet utenfor sentret", "En strøm av medieinnhold som møter motstand i mottakerlandet og derfor må endres kraftig før den slipper inn i markedet", "En strøm av medieinnhold mellom to land som ligger nær hverandre kulturelt, uansett hvilken vei innholdet faktisk beveger seg", "En strøm av medieinnhold som går utenom de kommersielle kanalene, og som derfor spres av publikum selv uten betaling"],
      explanation: "Riktig svar er at retningen er en del av definisjonen: innholdet går mot den etablerte hovedretningen, med produksjonsmiljøet utenfor sentret. Fella i alternativet om kulturell nærhet er å bytte ut retningen med avstanden, og da er begrepet ikke lenger en motstrøm, men en hvilken som helst kulturstrøm. De to andre bytter retningen mot henholdsvis motstand og kanalvalg, som er andre spørsmål.",
    },
    {
      question: "Hva skiller en motstrøm fra en kulturstrøm?",
      options: ["Motstrømmen er definert ved retningen sin, mens kulturstrømmen er enhver bevegelse av kulturprodukter mellom steder", "Motstrømmen gjelder bare kommersielle produkter, mens kulturstrømmen også dekker språk, religion og skikker som spres over tid", "Motstrømmen er et nyere fenomen som oppsto med strømmetjenestene, mens kulturstrømmen har fantes så lenge det har vært handel", "Motstrømmen måles i eksportverdi, mens kulturstrømmen bare kan beskrives kvalitativt og derfor ikke lar seg sammenligne"],
      explanation: "Riktig svar er at retningen er det definerende for motstrømmen, mens kulturstrømmen er retningsnøytral. Alternativet om at motstrømmen er ny, er nær sant i den forstand at begrepet er nyere enn fenomenet, men strømmene selv er eldre enn strømmetjenestene. De to andre innfører skiller mellom kommersielt og ikke-kommersielt og mellom målbart og ikke målbart, og ingen av dem er det som skiller begrepene.",
    },
    {
      question: "Hvorfor bruker boka den engelske formen av begrepet som hovedform?",
      options: ["Fordi det er den formen oppgaveteksten selv bruker, og en student som bare kjenner den norske, ikke ville kjent igjen spørsmålet", "Fordi den norske formen er språklig upresis, og fordi fagfeltet ikke har noen etablert norsk term for fenomenet i det hele tatt", "Fordi eksamen alltid gis på engelsk, og fordi norske begreper derfor ikke kan brukes i besvarelsen uten at det gir trekk", "Fordi begrepet er et egennavn knyttet til en bestemt forfatter, og egennavn skal ikke oversettes i akademisk sammenheng"],
      explanation: "Riktig svar er gjenkjenning: den engelske formen står i oppgaveteksten, og settet kan komme på engelsk. Påstanden om at eksamen alltid gis på engelsk, er usann — oppgavesettene i arkivet er på norsk bokmål. Alternativet om egennavn er nær sant fordi begrepet er knyttet til én forfatter, men det er ikke et egennavn, og det finnes en brukbar norsk form som boka også oppgir.",
    },
    {
      question: "Hvordan refererer boka til Iwabuchi?",
      options: ["Ved etternavn og begrep, uten fornavn, verkstittel, årstall eller sidetall, fordi ingenting mer står i materialet", "Ved etternavn og verkstittel, siden tittelen er nødvendig for at leseren skal kunne finne fram til teksten på egen hånd", "Ved fullt navn og utgivelsesår, slik akademisk skikk krever når en forfatter nevnes for første gang i en fagtekst", "Ved begrepet alene, siden forfatternavn ikke hører hjemme i en lærebok som ikke kjenner den fullstendige pensumlista"],
      explanation: "Riktig svar er etternavn og begrep og ingenting mer, fordi arkivet ikke inneholder noe mer. Alternativet om begrepet alene er nær sant i motivasjon, men galt i utfall: navnet står i oppgaveteksten, og å utelate det ville skjult en opplysning som faktisk er belagt. De to andre ville krevd bibliografiske data som ikke finnes noe sted i materialet.",
    },
    {
      question: "Hva er fokusanvisningen i bestillingen i V2025-2?",
      options: ["At svaret skal behandle om japansk medieeksport utfordrer eller styrker eksisterende globale og kulturelle maktstrukturer", "At svaret skal ta for seg medieglobalisering i Øst-Asia som helhet, med vekt på hvordan strømmene har endret seg over tid", "At svaret skal sammenligne japansk og koreansk medieeksport, siden begge er tydelige eksempler på det samme fenomenet", "At svaret skal bygge på pensum og oppgi referanser, siden riktig referansebruk er et eget vurderingskriterium i veiledningen"],
      explanation: "Riktig svar er vippen: utfordrer eller styrker. Alternativet om medieglobalisering som helhet er nettopp det svaret som ignorerer anvisningen. At svaret skal bygge på pensum, er et generelt krav og ikke fokusanvisningen i denne bestillingen. Sammenligning med koreansk eksport kan brukes i én setning, men fokuset ligger på Japan.",
    },
    {
      question: "Hva går mangel nr. 6 ut på?",
      options: ["Å ignorere fokusanvisningen i spørsmålet, for eksempel ved å beskrive medieglobalisering uten å behandle vippen", "Å nevne under tre momenter, slik at svaret havner under det bestått-gulvet V2021-veiledningen setter for hvert spørsmål", "Å definere et begrep uten å nevne at det er omstridt, slik at redegjørelsen framstår som mer avklart enn faget er", "Å hoppe over eksempelkravet, altså å redegjøre for begrepet uten å binde det til noe konkret tilfelle underveis"],
      explanation: "Riktig svar er å ignorere fokusanvisningen. De tre andre er reelle mangler i registeret, men de har egne numre og rammer noe annet: for få momenter, en definisjon uten det omstridte, og et manglende eksempel. To av dem gjelder også dette kapitlet, men de er ikke nummer 6.",
    },
    {
      question: "Hva gjør et tilfelle om til et fullverdig eksempel?",
      options: ["En egen setning som sier eksplisitt hvilket trekk ved tilfellet som svarer til hvilket ledd i begrepet du viser", "At tilfellet er kjent for leseren fra før, slik at det ikke må forklares og dermed sparer plass innenfor ordgrensen", "At tilfellet beskrives så detaljert at leseren kan se det for seg, med navn, tall og årstall der det lar seg oppdrive", "At tilfellet står i pensum, siden et selvvalgt eksempel ikke kan brukes som belegg i denne typen oppgaver i det hele tatt"],
      explanation: "Riktig svar er bindeleddet: setningen som knytter et trekk ved tilfellet til et ledd i begrepet. Fella i alternativet om detaljrikdom er at lengde forveksles med kvalitet — to setninger holder hvis den ene gjør bindingen. Påstanden om at bare pensumeksempler kan brukes, er usann, og et kjent tilfelle er ikke bedre enn et ukjent hvis bindingen mangler.",
    },
    {
      question: "Hva forklarer begrepet kulturell nærhet?",
      options: ["At publikum lettere tar til seg innhold som ligner deres eget i språk, sjanger, humor og hverdagsdetaljer", "At innhold spres raskest mellom land som grenser til hverandre, siden avstand er den viktigste kostnaden ved distribusjon", "At innhold av høy kvalitet finner sitt publikum uansett opphav, siden kvalitet er den avgjørende faktoren for mottakelse", "At publikum foretrekker innhold på sitt eget språk, og at dubbing derfor alltid slår undertekster i store markeder"],
      explanation: "Riktig svar er likheten i språk, sjanger og hverdagsdetaljer. Den nære fella er geografisk nærhet: innhold kan reise langt og likevel oppleves nært, og naboland kan oppleve hverandres innhold som fremmed. Alternativet om kvalitet er nettopp den forklaringen begrepet er ment å gi et alternativ til, og dubbingspåstanden er en påstand om markeder, ikke om nærhet.",
    },
    {
      question: "Hva er lokalisering?",
      options: ["Tilpasningen et produkt går gjennom for å fungere i et nytt marked: oversettelse, navnebytte, klipping, ny musikk og ny pakking", "Oversettelsen av dialog og tekst til mottakerlandets språk, som er det ene leddet som kreves før et produkt kan selges videre", "Beslutningen om hvor et produkt skal produseres, altså valget av innspillingssted og av hvilke lokale selskaper som deltar", "Markedsføringen av et ferdig produkt i et nytt land, altså plasseringen i butikk, annonsering og valg av lanseringstidspunkt"],
      explanation: "Riktig svar dekker hele tilpasningen, ikke bare ett ledd. Den nære fella er å sette likhetstegn mellom lokalisering og oversettelse — et produkt kan være oversatt uten å være lokalisert, og lokalisert så gjennomgripende at opphavet blir usynlig. De to andre flytter begrepet til produksjonssted og markedsføring, som er andre ledd i kjeden.",
    },
    {
      question: "Hva beskriver modellen med sentrum og periferi i mediesystemet?",
      options: ["Et system med få produksjons- og distribusjonssentre som kontrollerer kanaler, standarder og finansiering, og mange mottakere", "Et skille mellom rike og fattige land, der kjøpekraften avgjør hvilke land som kan produsere eget innhold og hvilke som ikke kan", "Et skille mellom storbyer og distrikter innenfor hvert enkelt land, der medieproduksjonen samler seg i hovedstadsområdet", "Et system der alle land både eksporterer og importerer, men der handelsbalansen avgjør hvem som regnes som sentrum"],
      explanation: "Riktig svar er posisjon i et system: kontroll over kanaler, standarder og finansiering. Den nære fella er å lese modellen som et skille mellom rike og fattige land — et velstående land kan ligge i randsonen av mediesystemet. Alternativet om storbyer og distrikter flytter modellen innenfor ett land, og handelsbalansen alene fanger ikke kontrollen over kanalene.",
    },
    {
      question: "Hva er robust og skal ikke balanseres bort i denne klyngen?",
      options: ["At japansk medieeksport finnes og er betydelig, og at innhold i tiår er solgt, lisensiert og tilpasset utenfor Japan", "At japansk medieeksport har svekket de globale maktstrukturene i medieindustrien betraktelig de siste tiårene", "At japansk medieeksport i hovedsak bekrefter mønsteret med sentrum og periferi i verdens mediesystem slik det er beskrevet", "At japansk medieeksport har vært viktigere for verdens mediesystem enn eksporten fra noe annet land utenfor det vestlige sentret"],
      explanation: "Riktig svar er at eksporten finnes og er betydelig — det er en robust opplysning som ikke skal pakkes inn i forbehold. De tre andre er alle vurderinger av virkningen, og virkningen er nettopp det omstridte. To av dem er dessuten de to lesningene i vippespørsmålet, og å føre en av dem som robust ville avgjort drøftingen på forhånd.",
    },
    {
      question: "Hva er det sterkeste argumentet i lesningen om at eksporten styrker maktstrukturene?",
      options: ["At selve begrepet motstrøm forutsetter en hovedstrøm, og at en strøm i motsatt retning ikke endrer hvem som eier kanalene", "At japansk medieeksport er mindre i omfang enn eksporten fra det vestlige sentret, og derfor ikke kan endre noe som helst", "At publikum utenfor Japan sjelden vet hvor innholdet kommer fra, og at eksporten derfor ikke gir Japan noen kulturell gevinst", "At myndighetene i mottakerlandene regulerer importen av kulturprodukter, og at strømmene derfor styres politisk fra toppen"],
      explanation: "Riktig svar peker på forutsetningen i begrepet og på eierskapet til kanalene. Alternativet om volum er en karikatur av posisjonen: den bestrider ikke at eksporten er stor, den bestrider at volum er det samme som maktforskyvning. De to andre innfører påstander om publikums kunnskap og om statlig regulering som posisjonen ikke bygger på.",
    },
    {
      question: "Hva er det sterkeste argumentet i lesningen om at eksporten utfordrer maktstrukturene?",
      options: ["At en så vedvarende strøm i motsatt retning i seg selv viser at strukturen er mer bevegelig enn modellen antar", "At japansk innhold har erstattet det vestlige innholdet i store deler av verden, slik at sentret har flyttet seg helt", "At eksporten gir Japan økte inntekter, og at inntekter er den sikreste indikatoren på at makten har skiftet hender", "At mottakerlandene ikke lenger produserer eget innhold i samme grad, og at avhengigheten dermed har snudd retning"],
      explanation: "Riktig svar er at strømmens varighet og omfang i seg selv taler mot en helt fast struktur. Alternativet om at sentret har flyttet seg helt, er en stråmann — posisjonen påstår ikke at sentret er borte, bare at det er reelt utfordret. De to andre bygger på inntekter og på en påstand om mottakerlandenes produksjon som ikke følger av caset.",
    },
    {
      question: "Hva kjennetegner en begrunnet landing på et vippespørsmål?",
      options: ["At svaret velger side, velger side med forbehold, eller viser at spørsmålet er galt stilt — og sier hvorfor", "At svaret gir like mye plass til begge posisjonene og lar leseren avgjøre hvilken av dem som veier tyngst til slutt", "At svaret ender i at spørsmålet kommer an på flere forhold, uten at forholdene må navngis siden de er nevnt underveis", "At svaret gjentar åpningssetningen i ny form, slik at leseren ser at disposisjonen er fulgt fra første til siste avsnitt"],
      explanation: "Riktig svar er de tre lovlige landingsformene, alle med begrunnelse. Fella i alternativet om lik plass er å forveksle balanse med veiing: en drøfting som ikke lander, har ikke veid. Å ende i «det kommer an på» uten å si hva det kommer an på, er nettopp den landingen som ikke holder, og en gjentakelse av åpningen bruker de siste ordene på noe leseren alt har lest.",
    },
    {
      question: "Hvilke tre trinn har redegjørelsen med anvendelse?",
      options: ["Definer begrepet med dine egne ord, si hva som er omstridt ved det, og anvend det deretter med ett eksempel per anvendelse", "Gi bakgrunnen, gjengi hva forskningen sier om begrepet, og oppsummer til slutt hovedpunktene i en kort konklusjon", "Definer begrepet, sammenlign det med to nabobegreper, og vis hvordan de tre henger sammen i en samlet framstilling", "Presenter begge sider av en uenighet, veie dem mot hverandre, og land med en begrunnelse for det standpunktet du tar"],
      explanation: "Riktig svar er definisjon, det omstridte og anvendelse med eksempel. Alternativet med to sider og veiing beskriver sjangeren argumenter for og mot, som er en annen. Alternativet med bakgrunn og oppsummering er referatformen, og redegjørelsen er aldri referat. Sammenligning med nabobegreper er nyttig, men det er ikke sjangerens arkitektur.",
    },
    {
      question: "Hvilke to slags maktstrukturer navngir bestillingen, og hvorfor er skillet nyttig?",
      options: ["De globale, som gjelder kontroll over kanaler og finansiering, og de kulturelle, som gjelder hvilke former som regnes som allmenne", "De politiske, som gjelder statlig regulering av import, og de økonomiske, som gjelder hvem som tjener penger på handelen med innhold", "De regionale, som gjelder forholdene innenfor Øst-Asia, og de globale, som gjelder forholdet mellom regionen og resten av verden", "De formelle, som er nedfelt i avtaler mellom selskapene, og de uformelle, som bare kommer til uttrykk i bransjens egne vaner"],
      explanation: "Riktig svar er globale og kulturelle maktstrukturer, og skillet er nyttig fordi de to kan bevege seg i hver sin retning samtidig. Alternativet med politiske og økonomiske strukturer er nær sant, siden begge deler inngår i den globale siden, men det er ikke de to bestillingen navngir. De to andre bytter skillet ut med et geografisk og et formelt skille.",
    },
  ],
  'exfac03-east-7-3': [
    {
      question: "Hva er antropocen?",
      options: ["En foreslått geologisk epoke der menneskelig aktivitet er blitt den formende kraften i jordas systemer, overalt", "En betegnelse på de siste tiårenes klimaendringer, altså på oppvarmingen og de værhendelsene den fører med seg", "En historisk periode som regnes fra industrialiseringen, og som avgrenses av samfunnsendringer på samme måte som andre perioder", "En samlebetegnelse på de miljøproblemene som må løses hver for seg, siden de har hver sin årsak og hvert sitt tiltak"],
      explanation: "Riktig svar er at dette er en foreslått geologisk epoke kjennetegnet av rekkevidden: ikke noe økosystem er upåvirket. De nære fellene er å bytte epoken mot klimaendringer eller mot en liste over enkeltproblemer — begge mister epokepåstanden. Alternativet om en historisk periode overser at geologiske enheter avgrenses av materielle spor, ikke av samfunnsendringer.",
    },
    {
      question: "Hva er det robuste i denne klyngen, altså det som ikke skal balanseres bort?",
      options: ["At menneskelig aktivitet har påvirket alle økosystemer og alle organismer på jorda, uten noe unntak", "At antropocen begynte med industrialiseringen og overgangen til fossile brensler i stor skala", "At kapitalocen er et mer presist navn på epoken enn antropocen, siden ansvaret er ulikt fordelt", "At antropocen er det riktige navnet, siden en geologisk epoke skal beskrive lagene og ikke fordele ansvar"],
      explanation: "Riktig svar er rekkevidden av påvirkningen — det er grunnlaget begge posisjonene i navnestriden bygger på. De tre andre er nettopp det omstridte: ett bestemt starttidspunkt og hvert av de to navnene. Å føre en av dem som robust ville avgjort kontroversene på forhånd, og da mangler svaret det andre kravet i spesifikasjonen.",
    },
    {
      question: "Hva står striden om starttidspunktet egentlig om?",
      options: ["Når påvirkningen ble av et omfang som gjør en ny epoke rimelig, og dermed hvilken årsak som regnes som utløsende", "Om menneskelig aktivitet i det hele tatt har påvirket økosystemene, eller om endringene skyldes naturlige svingninger", "Hvilket årstall som skal stå i lærebøkene, siden fagene trenger et felles tall å regne fra i undervisningen", "Hvor lenge epoken vil vare, siden en geologisk epoke må ha både en begynnelse og en anslått avslutning for å kunne navngis"],
      explanation: "Riktig svar er at striden gjelder når påvirkningen ble av en art og et omfang som rettferdiggjør en ny epoke, og at valget av tidspunkt samtidig peker ut en årsak. Alternativet om hvorvidt påvirkningen finnes, blander sammen det omstridte med det robuste. De to andre gjør striden til et spørsmål om et praktisk årstall eller om epokens lengde.",
    },
    {
      question: "Hvilke posisjoner finnes i striden om starttidspunktet?",
      options: ["Jordbruket, de tidlig moderne handelsforbindelsene, industrialiseringen, og hoppet i produksjon etter midten av 1900-tallet", "Bare to: industrialiseringen på den ene siden og de siste tiårenes klimaendringer på den andre, siden eldre spor ikke kan leses", "Bare én posisjon er faglig holdbar, men fagfeltet har ennå ikke blitt enig om å formalisere den i en offisiell tidsskala", "Posisjonene følger landegrenser, slik at forskere i ulike deler av verden regner epoken fra ulike hendelser i egen historie"],
      explanation: "Riktig svar lister de fire mest utbredte posisjonene. Påstanden om at bare to er mulige, er for snever, og påstanden om at bare én er holdbar, gjør en reell faglig uenighet om til en formalitet. Alternativet om landegrenser er en påstand om forskerne i stedet for om argumentene, og den har ingen dekning i noe boka kan vise til.",
    },
    {
      question: "Hva går innvendingen mot navnet «antropocen» ut på?",
      options: ["At forleddet peker på mennesket som art, mens ansvaret historisk har vært svært ulikt fordelt mellom økonomier og samfunnslag", "At ordet er gresk og derfor vanskelig å forstå for allmennheten, slik at et enklere navn ville nådd fram til flere lesere", "At ordet allerede er brukt om en annen tidsenhet i den geologiske tidsskalaen, slik at det oppstår forveksling mellom de to", "At ordet er for optimistisk, siden det antyder at mennesket har kontroll over de prosessene epoken faktisk beskriver"],
      explanation: "Riktig svar er den ulike fordelingen av ansvar bak et navn som peker på arten. Alternativet om at ordet er vanskelig, gjør striden til et formidlingsproblem, og alternativet om forveksling er en påstand om tidsskalaen som ikke er innvendingen. Påstanden om optimisme er nær sant i tone, men innvendingen gjelder hvem som pekes ut, ikke hvor lyst det høres.",
    },
    {
      question: "Hvorfor er navnestriden substansiell og ikke språklig?",
      options: ["Fordi navnet inneholder en årsaksforklaring: å si «mennesket» peker ut arten, å si en økonomisk ordning peker ut ordningen", "Fordi fagfeltet ikke kan bruke to navn samtidig, og valget derfor må tas før forskningen kan gå videre på feltet", "Fordi begrepene beskriver to ulike tilstander i naturen, slik at valget avgjør hvilke miljøendringer som regnes med", "Fordi navnet avgjør hvilke fag som får eierskap til feltet, og dermed hvem som skal bevilges midler til å forske på det"],
      explanation: "Riktig svar er at navnet bærer en årsaksforklaring, og at ulike årsaker peker mot ulike svar. Den nære fella er å tro at de to navnene beskriver ulike tilstander — de navngir samme tilstand med ulike forklaringer, og derfor er de rivaler. De to andre gjør striden til et spørsmål om praktisk språkbruk eller om fagpolitikk.",
    },
    {
      question: "Hva peker navnet «kapitalocen» på?",
      options: ["En bestemt økonomisk ordning som drivkraft bak epokens miljøendringer, i stedet for menneskeheten forstått som art", "De landene som har hatt størst utslipp, slik at navnet fungerer som en liste over hvem som må betale for skadene", "Perioden etter at kapitalismen ble global, altså tiden fra andre verdenskrig og fram til i dag i de fleste framstillinger", "Sammenhengen mellom økonomisk vekst og miljøskade, altså at all vekst nødvendigvis fører til at naturen blir dårligere stilt"],
      explanation: "Riktig svar er at navnet peker ut en økonomisk ordning som drivkraft. Alternativet om en liste over land gjør navnet til et regnskap, og alternativet om en tidsperiode forveksler navnet med en epokegrense. Påstanden om at all vekst nødvendigvis skader naturen, er en sterkere påstand enn navnet innebærer, og den er ikke det navnet sier.",
    },
    {
      question: "Hva er den første av Hudsons tre innfallsvinkler?",
      options: ["Asias rolle i antropocens historie, altså hva som har skjedd i og gjennom regionen som har bidratt til at epoken oppsto", "Asias ansvar for de globale utslippene, altså hvor stor andel av den samlede påvirkningen regionen bør tilskrives i dag", "Asias plass i den geologiske tidsskalaen, altså hvilke berglag i regionen som best viser overgangen til den nye epoken", "Asias forhold til det vestlige sentret, altså hvordan miljøbegreper utviklet i Europa har blitt anvendt på regionen"],
      explanation: "Riktig svar er det historiske bidraget: hva som har skjedd i og gjennom regionen. Den nære fella er å gjøre innfallsvinkelen til et ansvarsspørsmål — ansvarsfordelingen hører hjemme i navnestriden. De to andre bytter innfallsvinkelen mot henholdsvis et geologisk kildespørsmål og et begrepshistorisk spørsmål.",
    },
    {
      question: "Hva handler den andre innfallsvinkelen om?",
      options: ["De sosial-økologiske sårbarhetene som skapes og erfares i regionen i dag, og hvorfor de rammer ulikt", "De miljøtiltakene statene i regionen har vedtatt de siste årene, og hvor godt tiltakene er blitt gjennomført i praksis", "De naturkatastrofene som har rammet regionen, ordnet etter hvor mange mennesker hver av dem har berørt totalt sett", "Den offentlige opinionen om miljøspørsmål i regionen, altså hvor bekymret befolkningen er sammenlignet med andre steder"],
      explanation: "Riktig svar er sårbarhetene som skapes og erfares, med vekt på at de rammer ulikt. Alternativet om naturkatastrofer er nær sant, men det beskriver hendelser og ikke mønstre i hvem som tåler dem — og det er nettopp den forskjellen innfallsvinkelen handler om. De to andre flytter spørsmålet til politiske tiltak og til opinionsmåling.",
    },
    {
      question: "Hva er den tredje innfallsvinkelen?",
      options: ["Hvordan asiatisk erfaring kan brukes til å bygge svar på antropocen, altså hva erfaringene kan bidra med videre", "Hvordan regionen bør innrette miljøpolitikken sin framover, med konkrete anbefalinger til myndighetene i hvert land", "Hvordan miljøendringene vil ramme regionen i framtiden, med anslag for havnivå, temperatur og nedbør de neste tiårene", "Hvordan andre regioner kan hjelpe Asia med å håndtere de miljøutfordringene epoken fører med seg i årene som kommer"],
      explanation: "Riktig svar er erfaring som ressurs for å bygge svar. Den nære fella er å lese innfallsvinkelen som en anbefaling om politikk — den sier at erfaringene kan brukes, ikke hva som bør vedtas. De to andre bytter innfallsvinkelen mot en framskrivning og mot et spørsmål om bistand utenfra.",
    },
    {
      question: "Hva er sosial-økologisk sårbarhet?",
      options: ["Sårbarhet som oppstår i samspillet mellom naturforhold og samfunnsforhold, som bosetting, forvaltning og adgang til varsling", "Sårbarheten til de artene og økosystemene som er mest utsatt for menneskelig påvirkning i et bestemt geografisk område", "Fattigdom målt i et miljøperspektiv, altså hvor stor andel av befolkningen som ikke har råd til å beskytte seg mot skade", "Den samlede skaden et samfunn påføres av en hendelse, målt i økonomiske tap og i antall mennesker som må evakueres"],
      explanation: "Riktig svar er samspillet mellom natur- og samfunnsforhold. Den nære fella er fattigdom: fattigdom er ofte en faktor, men sårbarheten skapes i kombinasjonen — en velstående bydel uten flomvern kan være sårbar. Alternativet om arter flytter begrepet til økologien alene, og alternativet om samlet skade måler utfall i stedet for sårbarhet.",
    },
    {
      question: "Hva skiller sårbarhet fra utsatthet?",
      options: ["Utsatthet er å befinne seg der hendelsen skjer, mens sårbarhet er å mangle det som skal til for å tåle den", "Utsatthet gjelder enkeltmennesker, mens sårbarhet er et begrep som bare kan brukes om hele samfunn eller regioner", "Utsatthet kan måles i tall, mens sårbarhet er en subjektiv opplevelse som varierer fra person til person i samme område", "Utsatthet gjelder plutselige hendelser, mens sårbarhet bare gjelder langsomme endringer som havnivåstigning og tørke"],
      explanation: "Riktig svar er skillet mellom å være der det skjer og å mangle det som skal til for å tåle det. To bydeler kan være like utsatt for samme flo og likevel ulikt sårbare. De tre andre gjør skillet til et spørsmål om nivå, om målbarhet eller om hendelsestype, og ingen av delene er det som skiller begrepene.",
    },
    {
      question: "Hva krever V2024-veiledningen at svaret inneholder?",
      options: ["En definisjon som gir mening, minst én av de to kontroversene, og tre innfallsvinkler med ett eksempel på hver", "En definisjon, en gjennomgang av forskningshistorien bak begrepet, og en vurdering av hvilket navn som er det riktige", "En definisjon og en drøfting av begge kontroversene, men ingen eksempler, siden eksempler regnes som allmennkunnskap", "Tre innfallsvinkler med eksempel, men ingen definisjon, siden begrepet regnes som kjent fra pensum på forhånd"],
      explanation: "Riktig svar er de tre kravene: definisjon, minst én kontrovers, og tre innfallsvinkler med hvert sitt eksempel. Alternativet som utelater eksemplene, snur kravet på hodet — veiledningen sier uttrykkelig at eksemplene viser at studenten har forstått. Alternativet som utelater definisjonen, fjerner det første kravet, og forskningshistorie er ikke bedt om.",
    },
    {
      question: "Veiledningen sier at studenten kan sitere eller parafrasere. Hva følger av det?",
      options: ["At begge deler er tillatt, men ingen av dem er tilstrekkelig — svaret må i tillegg forklare og gi eksempler", "At et svar som gjengir innfallsvinklene ordrett og korrekt, oppfyller kravet fullt ut uten videre tillegg", "At sitat er å foretrekke framfor parafrase, siden et sitat viser at kandidaten faktisk har lest teksten selv", "At referanser ikke er nødvendige i denne oppgaven, siden pensumteksten uansett er kjent for den som retter"],
      explanation: "Riktig svar er at begge formene er tillatt, men at forklaring og eksempler må komme i tillegg. Alternativet om at ordrett gjengivelse holder, er nettopp den lesningen veiledningen avviser. De to andre gjør uttalelsen om til en rangering mellom sitat og parafrase, eller til en unntaksregel for referanser.",
    },
    {
      question: "Hva gjør et eksempel til et bevis på forståelse i denne oppgavetypen?",
      options: ["En setning som sier eksplisitt hvilket trekk ved eksempelet som svarer til hvilket ledd i innfallsvinkelen", "At eksempelet er hentet fra pensum, siden selvvalgte eksempler ikke kan brukes som belegg i denne oppgavetypen", "At eksempelet er detaljert nok til at leseren ser situasjonen for seg, med sted, tall og tidsangivelse med i teksten", "At eksempelet er stort og velkjent, slik at den som retter, umiddelbart kjenner igjen situasjonen uten forklaring"],
      explanation: "Riktig svar er bindesetningen. Fella i alternativet om detaljrikdom er at lengde forveksles med kvalitet — to setninger holder når den ene binder eksempelet til begrepet. Påstanden om at bare pensumeksempler kan brukes, er usann, og et velkjent tilfelle er ikke bedre enn et ukjent hvis bindingen mangler.",
    },
    {
      question: "Hva går mangel nr. 5 ut på?",
      options: ["Å definere et begrep uten å nevne at det er omstridt, slik at redegjørelsen framstår som mer avklart enn faget er", "Å hoppe over eksempelkravet, altså å forklare de tre innfallsvinklene uten å binde noen av dem til et konkret tilfelle", "Å ignorere fokusanvisningen i spørsmålet, altså å skrive om temaet generelt uten å ta den vinkelen som er bestilt", "Å ramse opp momenter uten å utvikle noen, slik at svaret dekker bredt uten at noe av det får plass til å bli utfoldet"],
      explanation: "Riktig svar er å definere uten å nevne at begrepet er omstridt. De tre andre er reelle mangler med egne numre, og to av dem har også hjemme i dette kapitlet — men de gjelder eksempelkravet, fokusanvisningen og oppramsingen. Nummer 5 gjelder definisjonen alene.",
    },
    {
      question: "Hvor står klyngen miljø og antropocen i materialet?",
      options: ["1 av 21 spørsmål som primært tema, i 1 av 7 terminer, og berørt i 2 av 7 terminer når valgfritt fokus tas med", "4 av 21 spørsmål, altså like ofte som sjangeren redegjørelsen med anvendelse forekommer i materialet som helhet", "1 av 21 spørsmål, men uten at temaet er berørt i noen annen termin, siden miljø ellers ikke nevnes i oppgavetekstene", "2 av 21 spørsmål, siden både det primære spørsmålet og det valgfrie fokuset regnes som egne spørsmål i tellingen"],
      explanation: "Riktig svar er 1 av 21 spørsmål primært, i 1 av 7 terminer, og berørt i 2 av 7 terminer når det valgfrie fokuset regnes med. Fella i alternativet som oppgir to spørsmål, er å telle et valgfritt fokus som om det var et eget spørsmål — da blandes to nevnere. Alternativet med fire spørsmål bruker sjangerens andel i stedet for klyngens.",
    },
    {
      question: "Hvilken drøftingsakse peker kapitlet på i Hudsons ramme?",
      options: ["Om den tredje innfallsvinkelen gjør noe annet enn de to første, eller legger et normativt lag oppå en beskrivende ramme", "Om de tre innfallsvinklene kan brukes på andre regioner enn Asia, eller om de er utviklet for denne regionen alene", "Om rammen bør brukes sammen med antropocen eller sammen med kapitalocen, siden de to navnene gir ulike innfallsvinkler", "Om rammen er for gammel til å fange de miljøendringene som har kommet til etter at den ble formulert av forfatteren"],
      explanation: "Riktig svar er spørsmålet om den tredje innfallsvinkelen er beskrivende på linje med de to første eller legger noe normativt til. Alternativet om andre regioner er et rimelig spørsmål, men det er ikke aksen kapitlet peker på. De to andre forutsetter opplysninger om rammens alder og om koblingen til navnevalget som boka ikke har dekning for.",
    },
  ],
  'exfac03-east-8-1': [
    {
      question: "Hvor er ordgrensen på minst 400 og maks 800 ord per svar belagt?",
      options: ["I 5 av 5 terminer der informasjonsseksjonen er bevart, med nesten identisk ordlyd hver gang", "I alle de 4 sensorveiledningene, som gjentar kravet i innledningen sin", "I V2025-oppgavesettet, som er det eneste med en fullstendig informasjonsseksjon", "I 7 av 7 terminer med bevart oppgavetekst, altså i hvert eneste sett vi har"],
      explanation: "Ordgrensen står i de fem terminene der informasjonsseksjonen er bevart. Nevneren 7 terminer gjelder noe annet — at eksamen har tre spørsmål — og sensorveiledningene sier ingenting om ordgrense. V2025-settet oppgir tvert imot ingen ordgrense, bare at eksamen er en kort digital hjemmeeksamen.",
    },
    {
      question: "Hvor kommer kravet om minst tre momenter for bestått fra?",
      options: ["Fra V2021-veiledningen, som setter kravet for hvert av de tre spørsmålene", "Fra V2024-veiledningen, som er den strengeste kravspesifikasjonen i arkivet", "Fra oppgavesettenes informasjonsseksjon, der de tre svarene også vektes likt", "Fra H2025-veiledningen, den eneste som gir en fullstendig karakterskala"],
      explanation: "Bestått-gulvet på tre momenter står i V2021-veiledningen, og der for alle tre spørsmålene. V2024-veiledningen er strengest på definisjon og eksempler, men setter ikke et momenttall; H2025 gjelder semesteroppgaveformen; og informasjonsseksjonen sier bare noe om ordgrense og vekting.",
    },
    {
      question: "Hva går ut først når et svar er for langt?",
      options: ["Bakgrunnsavsnittet som forteller spørsmålets forhistorie før svaret begynner", "Detaljnivået i det svakeste momentet, komprimert til én enkelt setning", "Det momentet du har minst konkret eksempel på, kuttet helt og ikke forkortet", "Avslutningen som veier momentene mot hverandre og begrunner rangeringen"],
      explanation: "Bakgrunnsavsnittet er trinn én fordi det ikke svarer på spørsmålet i det hele tatt: kuttet koster ingenting faglig. Detaljnivået i det svakeste momentet er trinn seks, altså nest sist, og veiingen står ikke i hierarkiet — den er det leddet som gir uttelling for vurdering.",
    },
    {
      question: "Hvilket av disse skal aldri kuttes, uansett hvor mye du må ned i ord?",
      options: ["Eksempelet i et ledd der oppgaven eller veiledningen uttrykkelig ber om eksempel", "Det andre eksempelet på et poeng du allerede har vist med et annet eksempel", "Bakgrunnen som forklarer hvorfor temaet i spørsmålet er faglig interessant", "Forbeholdene og de doble adjektivene som gjør formuleringene mer forsiktige"],
      explanation: "Eksempelet står på listen over det som aldri kuttes, fordi V2024-veiledningen krever ett eksempel per anvendelse og sier at eksemplene er det som viser forståelse. De tre andre er tvert imot trinn to, én og fire i kuttehierarkiet — altså det som skal ut først.",
    },
    {
      question: "Ved 800 ord og fire momenter: hvor mye plass får hvert moment?",
      options: ["Rundt hundre og seksti ord, når åpning og veiing er trukket fra først", "Rundt to hundre ord, siden åpning og veiing regnes inn i det første momentet", "Rundt hundre og tjue ord, som er tallet i regnestykket for et kortere svar", "Rundt hundre ord, slik at det blir plass til to eksempler i hvert av dem"],
      explanation: "Åpningen og veiingen tar rundt seksti ord hver, og resten deles på fire. Hundre og tjue ord per moment hører til regnestykket for et kortere svar med tre momenter, og hundre ord holder ikke til påstand, utdyping og ett eksempel — langt mindre til to eksempler.",
    },
    {
      question: "Hva skiller et moment fra en nevnelse?",
      options: ["Momentet har påstand, utdyping og ett konkret eksempel; nevnelsen har bare påstanden", "Momentet står i åpningen av svaret, mens nevnelsen står i avslutningen av det", "Momentet er hentet fra pensum, mens nevnelsen er hentet fra allmennkunnskapen din", "Momentet er formulert som en påstand, mens nevnelsen er formulert som et spørsmål"],
      explanation: "Skillet ligger i utviklingen, ikke i plasseringen eller i kilden: et moment har påstand, utdyping og eksempel. Derfor er ti nevnelser svakere enn tre momenter, og derfor teller sensor det som er diskutert, ikke det som er navngitt.",
    },
    {
      question: "Hvilken av disse to eksamenene står sterkest, gitt at de tre svarene teller likt?",
      options: ["Tre svar på 650 ord hver, fordi alle tre har plass til momenter med eksempel", "Ett svar på 800, ett på 800 og ett på 400 ord, fordi ordtallet er høyere til sammen", "Ett svar på 800, ett på 800 og ett på 400 ord, fordi to svar da er oppunder taket", "De står helt likt, siden begge holder seg innenfor ordgrensen i alle tre svarene"],
      explanation: "Det korte svaret trekker like mye ned som de to lange løfter, fordi de tre svarene teller likt ved utregningen av karakteren. Et svar på gulvet i ordgrensen har dessuten som regel færrest momenter, og det høyere samlede ordtallet hjelper ikke når vektingen er lik.",
    },
    {
      question: "Du har fem momenter og plass til fire. Hva gjør du med det femte?",
      options: ["Kutter det helt, fordi et halvferdig moment er verre enn ingen femte moment", "Forkorter alle fem litt, slik at bredden i svaret blir bevart innenfor rammen", "Beholder det som en nevnelse, slik at sensor ser at du kjenner til forholdet", "Flytter det til avslutningen, der det kan nevnes sammen med veiingen til slutt"],
      explanation: "Trinn fem i kuttehierarkiet er å kutte helt, ikke å forkorte. Å forkorte alle fem gir fem halvferdige momenter og null fullverdige, og en nevnelse i avslutningen tar plassen til veiingen uten å bli et moment.",
    },
    {
      question: "Hva er linjekalibrering?",
      options: ["Å telle ordene i én full linje av egen håndskrift og gange med antall linjer", "Å telle setningene i et avsnitt og gange med et gjennomsnitt på ti ord hver", "Å måle hvor lang tid du bruker på ett moment, og gange med antall momenter", "Å sammenligne lengden på de tre svarene dine når alle tre er ferdigskrevet"],
      explanation: "Kalibreringen er et forhold mellom linjer og ord, målt på din egen håndskrift, slik at du kan styre ordbudsjettet underveis uten teller. Å telle setninger gir et anslag og ikke et mål, og tidsbruk og sluttkontroll av de tre svarene er andre ting enn å vite hvor mange ord du har skrevet akkurat nå.",
    },
    {
      question: "Svaret ditt stopper under gulvet i ordgrensen. Hva er riktig grep?",
      options: ["Ett moment til, eller ett konkret eksempel til på et moment som mangler et", "Flere adjektiver og forbehold, slik at formuleringene blir mer presise", "En lengre bakgrunn i åpningen, som setter spørsmålet inn i en sammenheng", "En avslutning som oppsummerer alle momentene dine en gang til, punkt for punkt"],
      explanation: "Det som mangler i et for kort svar, er innhold som gir uttelling: et moment eller et eksempel. Adjektiver, bakgrunn og oppsummering fyller plass uten å svare på spørsmålet — og alle tre står som kutt i hierarkiet, altså som det du ellers ville fjernet.",
    },
    {
      question: "Hva skiller en veiing fra en oppsummering i avslutningen?",
      options: ["Veiingen rangerer momentene mot hverandre og begrunner rangeringen kort", "Veiingen gjentar de viktigste momentene i samme rekkefølge som i svaret", "Veiingen er alltid kortere enn oppsummeringen og står i siste setning", "Veiingen presenterer et nytt moment som ikke er behandlet tidligere i svaret"],
      explanation: "Veiingen sier hva som veier tyngst og hvorfor; det er en vurdering. En oppsummering gjentar det leseren nettopp har lest, og står derfor som trinn tre i kuttehierarkiet. Et nytt moment i avslutningen er noe helt annet, og det er dessuten alltid halvferdig.",
    },
    {
      question: "Hvorfor står bakgrunnsavsnittet øverst i kuttehierarkiet?",
      options: ["Fordi det koster 80–120 ord og ikke svarer på noen del av spørsmålet selv", "Fordi det alltid inneholder faktafeil som sensor uansett ville trukket for", "Fordi sensorveiledningene uttrykkelig advarer mot innledende bakgrunn", "Fordi det hører hjemme i avslutningen og ikke i innledningen av svaret"],
      explanation: "Kuttet er gratis: bakgrunnen tar plass og gir null uttelling, fordi den handler om tiden før spørsmålet begynner. Ingen av de fire sensorveiledningene advarer mot noe som helst — alle fire beskriver hva sensor forventer, ikke hva kandidater gjør galt.",
    },
    {
      question: "Hva vet vi om ordgrensen for V2024 og V2025?",
      options: ["Den er ikke gjenfunnet for noen av de to, og begge lesninger er forsvarlige", "Den er opphevet, siden V2025 uttrykkelig sier at grensen ikke lenger gjelder", "Den gjelder fortsatt, siden begge terminene hadde tre spørsmål som teller likt", "Den er strammet inn til fire hundre ord, i takt med at eksamen ble kortere"],
      explanation: "For V2024 er informasjonsseksjonen ikke bevart, og V2025-settet oppgir ingen ordgrense i det hele tatt. Enten falt grensen bort ved omleggingen, eller så står den i en rammetekst vi ikke har — materialet kan ikke skille de to lesningene, og ingen av dem er en opphevelse noen har erklært.",
    },
    {
      question: "Hvorfor står den ene siden av et tosidig spørsmål på listen over det som aldri kuttes?",
      options: ["Fordi V2021-veiledningen krever både endringer og kontinuiteter for bestått", "Fordi et tosidig svar alltid gir bedre uttelling enn et ensidig, uansett sjanger", "Fordi ordgrensen ellers blir umulig å holde når svaret bare har én side", "Fordi sensor leser den siste siden av svaret først og vurderer den strengest"],
      explanation: "Kravet er uttrykkelig i V2021-veiledningen for endringsspørsmålet, og oppgaveteksten selv ber om argumenter begge veier i argumentasjonsspørsmålene. Det er altså et krav i materialet, ikke en generell regel om at tosidighet lønner seg — og ordgrensen blir tvert imot lettere å holde med bare én side.",
    },
  ],
  'exfac03-east-8-10': [
    {
      question: "Hva krever kravspesifikasjonen i V2024-veiledningen?",
      options: ["Definisjon, minst én kontrovers, og tre anvendelser med ett eksempel på hver", "Definisjon, to kontroverser, og tre anvendelser uten noe krav om egne eksempler", "Definisjon og tre eksempler, uten at kontroversene behøver å nevnes", "Definisjon, kontrovers og en drøfting av hvilket navn som er riktigst"],
      explanation: "Veiledningen bruker ordet «må» om alle tre leddene, og eksempelkravet er uttrykkelig knyttet til hver enkelt anvendelse. Begge kontroversene er ønsket, men én er minimum, og en drøfting av navnevalget er ikke et krav i seg selv.",
    },
    {
      question: "Hva er de to kontroversene rundt antropocen?",
      options: ["Når epoken begynte, og hva den skal hete", "Om epoken finnes, og når den eventuelt begynte", "Hva den skal hete, og hvem som først foreslo begrepet", "Om den gjelder hele jorda, og når den vil ta slutt"],
      explanation: "Den ene gjelder tidfestingen, den andre navnet — og begge handler i bunn og grunn om årsaksforståelse: den ene om når, den andre om hvem. At menneskelig aktivitet har påvirket alle økosystemer, er derimot utgangspunktet begge sider deler.",
    },
    {
      question: "Hva er innvendingen som ligger bak forslaget om kapitalocen?",
      options: ["At belastningen er ulikt fordelt, og at ansvaret følger av økonomiske ordninger", "At begrepet antropocen er for nytt til å kunne brukes i geologien", "At menneskelig aktivitet ikke har påvirket alle økosystemer på jorda", "At epoken begynte langt tidligere enn de aller fleste forskere har antatt"],
      explanation: "Innvendingen gjelder ordet «mennesket»: det tilslører at ansvar og belastning er svært ulikt fordelt. Tidfestingen er den andre kontroversen, og selve påvirkningen av økosystemene bestrides ikke av noen av sidene.",
    },
    {
      question: "Hva er Hudsons tre innfallsvinkler?",
      options: ["Asias rolle i historien, sårbarhetene i dag, og erfaring som svar", "Klimaendringer, tap av artsmangfold og forurensning i regionen", "Fortiden, nåtiden og framtiden for miljøpolitikken i Øst-Asia", "Geologi, økologi og samfunnsvitenskap som tre fagperspektiver"],
      explanation: "De tre er navngitt i materialet og skiller seg fra hverandre på tidsakse: bakover, samtid, framover. De er innfallsvinkler til hvordan begrepet kan anvendes på studiet av regionen, ikke en liste over miljøproblemer eller fagdisipliner.",
    },
    {
      question: "Hvorfor ligger den sterke besvarelsen helt oppunder taket?",
      options: ["Kravspesifikasjonen har fem obligatoriske elementer som alle krever plass", "Fordi lengre svar gir bedre uttelling i denne sjangeren enn i andre", "Fordi kontroversleddet må drøftes svært grundig for å telle som et moment", "Fordi definisjonen krever mest plass av alle leddene i svaret"],
      explanation: "Ordbudsjettet er regnet mot en fast liste, ikke mot et antall momenter du velger selv, og et kortere svar ville måttet droppe et eksempel. I de fleste andre oppgaver er et svar oppunder taket tvert imot et varsel om at noe burde vært kuttet.",
    },
    {
      question: "Hva mangler i den svake besvarelsen på 620 ord?",
      options: ["Eksemplene — alle tre innfallsvinklene er gjengitt uten å bli vist", "Kontroversene — svaret nevner bare definisjonen og de tre anvendelsene", "Definisjonen — svaret går rett på de tre innfallsvinklene", "Den tredje innfallsvinkelen — bare to av tre er behandlet"],
      explanation: "Definisjon, begge kontroversene og alle tre innfallsvinklene står, og svaret er velskrevet og innenfor rammen. Det som mangler, er nøyaktig det leddet veiledningen sier viser forståelse — og feilen er usynlig for den som skrev det.",
    },
  ],
  'exfac03-east-8-2': [
    {
      question: "Hvor stor andel av spørsmålene i materialet er sammenligningsoppgaver?",
      options: ["6 av 21 spørsmål, og det gjør sammenligningen til den vanligste sjangeren", "4 av 21 spørsmål, altså like mange som valgoppgavene i det samme materialet", "2 av 21 spørsmål, og begge to er dessuten gitt i én og samme termin", "5 av 21 spørsmål, som er det samme antallet som endring og kontinuitet"],
      explanation: "Sammenligningen er den hyppigste av de fem sjangrene med seks spørsmål. Endring og kontinuitet har fem, redegjørelsen med anvendelse og valgoppgaven fire hver, og argumentasjonsoppgaven to.",
    },
    {
      question: "Hva er en dimensjon i en sammenligning?",
      options: ["Et spørsmål du kan stille til alle enhetene og få ulike svar på", "Et land eller en bevegelse du har valgt å behandle i din egen besvarelse", "En tidsperiode du har avgrenset sammenligningen din til å gjelde", "En kilde du bruker til å begrunne den ene siden av sammenligningen"],
      explanation: "Dimensjonen er egenskapen du sammenligner langs, og testen er om punktet kan stilles som spørsmål til hver enhet. Land og bevegelser er enheter, ikke dimensjoner, og en tidsavgrensning eller en kilde er noe helt annet enn et sammenligningspunkt.",
    },
    {
      question: "Hva viser V2024-veiledningen om hvordan et sammenligningssvar bør organiseres?",
      options: ["Den er selv organisert som en liste over likheter og deretter en over forskjeller", "Den krever uttrykkelig at svaret organiseres etter land, ett land om gangen", "Den ber om en tabell med enhetene bortover og dimensjonene nedover i svaret", "Den sier ingenting om struktur, bare om hvor mange momenter som må med"],
      explanation: "Veiledningen er bygd som to lister med flere punkter under hver, og det er den beste opplysningen vi har om formen sensor forventer. Den ber verken om land-for-land-form eller om en tabell i selve besvarelsen, og den sier faktisk noe om struktur.",
    },
    {
      question: "Hva er problemet med å velge fem dimensjoner og tre enheter i et svar oppunder taket?",
      options: ["Femten celler gir under førti ord hver, og det er for lite til noe som helst konkret", "Femten celler er flere enn sensor rekker å lese gjennom på den tiden som er satt av", "Fem dimensjoner bryter med kravet om minst tre momenter for å bestå oppgaven", "Tre enheter er alltid for mange i en sammenligning innenfor denne ordgrensen"],
      explanation: "Regnestykket er celletallet mot ordgrensen: femten celler gir plass til en påstand og et halvt eksempel hver. Fem dimensjoner er godt over bestått-gulvet, tre enheter er ofte helt kurant, og problemet er forholdet mellom de to tallene — ikke hvert tall for seg.",
    },
    {
      question: "Hva gjør du når oppgaven selv navngir fem dimensjoner du skal sammenligne langs?",
      options: ["Beholder alle fem og reduserer heller antallet enheter du behandler", "Velger de tre dimensjonene du kan mest om, og sier i åpningen at du gjør det", "Beholder alle fem og skriver kortere om hver enhet i hver enkelt celle", "Slår sammen dimensjonene til tre nye som du definerer selv i åpningen"],
      explanation: "Dimensjoner oppgaven har bedt om, er en del av bestillingen: å droppe to er å svare på et annet spørsmål. Antallet enheter er derimot din variabel, og å skrive kortere i hver celle gir nettopp de halve eksemplene ordgrensen straffer.",
    },
    {
      question: "Hvilken av disse er mangel nr. 8 i bokas register?",
      options: ["Å behandle det ene landet ferdig før du begynner på det neste", "Å velge flere dimensjoner enn ordgrensen gir plass til å fylle", "Å avslutte med en oppsummering i stedet for med en forklaring", "Å sammenligne enheter som oppgaven ikke har bedt deg sammenligne"],
      explanation: "Mangel nr. 8 er land-for-land-formen, og hjemmelen er at V2024-veiledningen selv organiserer svaret etter likheter og forskjeller. De tre andre er reelle svakheter, men de har egne plasser: for mange dimensjoner hører under mangel nr. 3, og oppsummeringen er trinn tre i kuttehierarkiet.",
    },
    {
      question: "Et avsnitt har dimensjonsform, men den ene cellen handler om lovgivning og den andre om folks holdninger. Hva mangler?",
      options: ["Sammenlignbarhet — de to cellene svarer ikke på det samme spørsmålet", "Struktur — avsnittet burde vært organisert etter land i stedet for etter tema", "Belegg — begge cellene mangler et konkret eksempel som viser påstanden", "Omfang — avsnittet har for få enheter til å kunne kalles en sammenligning"],
      explanation: "Feilen ligger i innholdet i cellene, ikke i strukturen: to ulike spørsmål er blitt stilt. Det er derfor denne feilen er vanskeligere å se enn land-for-land-formen — svaret ser riktig ut, og radene er fylt ut.",
    },
    {
      question: "Hva skal avslutningen i et sammenligningssvar gjøre?",
      options: ["Si hva forskjellene mellom enhetene skyldes, ikke hva de besto i", "Gjenta de viktigste forskjellene i den rekkefølgen de kom i svaret", "Presentere den dimensjonen du ikke fikk plass til tidligere", "Erklære hvilken av enhetene som kom best ut av sammenligningen"],
      explanation: "Avslutningen er stedet der du forklarer i stedet for å beskrive, og det er det som skiller en drøfting fra en tabell. En gjentakelse er trinn tre i kuttehierarkiet, en ny dimensjon til slutt blir alltid halvferdig, og en rangering av enhetene er ikke det oppgaven spør om.",
    },
    {
      question: "Hva vil det si at grupperingen skifter mellom dimensjonene?",
      options: ["At enhetene havner sammen på ulike måter fra dimensjon til dimensjon", "At du bytter dimensjoner underveis fordi de første viste seg tomme", "At oppgaven ber deg velge nye enheter i annenhver del av besvarelsen", "At rekkefølgen mellom enhetene endres fra avsnitt til avsnitt i svaret"],
      explanation: "Et sammenligningssvar blir interessant når Japan står alene i én dimensjon og sammen med Sør-Korea (ROK) i den neste: da gjør dimensjonene et arbeid. Det er noe annet enn å bytte dimensjon underveis eller å variere rekkefølgen, som bare gjør svaret vanskeligere å lese.",
    },
    {
      question: "Hvilken gruppering brukte det ene settet fra V2023 i sammenligningsspørsmålet sitt?",
      options: ["Taiwan og Sør-Korea (ROK) mot Folkerepublikken Kina og Nord-Korea (DPRK)", "Japan og Sør-Korea (ROK) mot Folkerepublikken Kina og Nord-Korea (DPRK)", "Japan og Taiwan mot Folkerepublikken Kina og Sør-Korea (ROK) samlet", "Nord-Korea (DPRK) og Taiwan mot Japan og Folkerepublikken Kina samlet"],
      explanation: "Grupperingen følger statens rolle i den økonomiske moderniseringen, ikke geografi eller den vanlige nord–sør-inndelingen. En student som bare har lært parene Japan mot Folkerepublikken Kina og Nord-Korea (DPRK) mot Sør-Korea (ROK), står derfor uforberedt på den.",
    },
    {
      question: "Hva må stå i en dimensjon som hviler på rangeringer laget av andre?",
      options: ["Hvem som måler hva, og hvordan selve målingen er gjort", "Hvilket år rangeringen sist ble oppdatert av dem som lager den", "At rangeringer ikke kan brukes som belegg i en akademisk besvarelse", "Hvilken plassering hver av enhetene har på den aktuelle listen"],
      explanation: "Målemetoden er selv et faglig stridsspørsmål, og et svar som bare gjengir en plassering, har ikke sagt noe om systemet. Rangeringer er fullt brukbare som belegg, men de skal presenteres som målinger av noe bestemt — ikke som en egenskap ved staten.",
    },
    {
      question: "Når skal dimensjonene velges?",
      options: ["I kladden, før den første setningen i besvarelsen er skrevet", "Etter at åpningen er skrevet, slik at den kan styre valget", "Underveis, ettersom du oppdager hva du har mest stoff om", "Til slutt, slik at avslutningen kan bestemme hvilke som ble brukt"],
      explanation: "Valget av dimensjoner er den ene beslutningen som ikke kan gjøres om når halve svaret er skrevet, og derfor tas den først. Å velge underveis gir land-for-land-form nesten uten unntak, fordi du da skriver ut det du husker om én enhet av gangen.",
    },
  ],
  'exfac03-east-8-3': [
    {
      question: "Hva krever V2021-veiledningen uttrykkelig av et svar på endringsspørsmålet?",
      options: ["At både endringer og kontinuiteter diskuteres, ikke bare det ene av dem", "At endringene rangeres etter hvor stor virkning de fikk for regionen samlet", "At svaret bruker minst to navngitte kilder fra den obligatoriske litteraturen", "At kontinuitetene behandles først, siden de utgjør bakgrunnen for endringene"],
      explanation: "Kravet er tosidighet: begge sider skal behandles, og i tillegg gjelder gulvet på minst tre momenter. Veiledningen sier ingenting om rekkefølge, om rangering av virkninger eller om et bestemt antall kilder på dette spørsmålet.",
    },
    {
      question: "Hva er tokolonneformen?",
      options: ["Et kladdegrep der endringer og kontinuiteter fylles ut hver for seg først", "En måte å dele selve besvarelsen i to spalter, med endringene til venstre", "En regel om at hvert avsnitt skal ha ett moment fra hver av de to sidene", "En sammenligningsteknikk der to land settes opp mot hverandre i en tabell"],
      explanation: "Kolonnene hører hjemme i kladden og gjør ensidighet umulig å overse: en tom kolonne ser du med én gang. Besvarelsen skrives som vanlig løpende tekst, og teknikken har ingenting med spalteoppsett eller med sammenligning av land å gjøre.",
    },
    {
      question: "Hva er en kontinuitet i denne sjangeren?",
      options: ["Et forhold som holdt seg gjennom hele perioden, og som opprettholdes aktivt", "Et forhold som gjaldt før perioden begynte, og som derfor er bakgrunn", "Et forhold som endret seg så sakte at endringen ikke kan tidfestes presist", "Et forhold begge parter i en strid er enige om, og som derfor ikke drøftes"],
      explanation: "Kontinuiteten gjelder gjennom hele perioden og er et moment på linje med endringene — basene og delingene består fordi de vedlikeholdes. Det som gjaldt før perioden, er bakgrunn og skal kuttes, og en gradvis endring er en endring uansett hvor vanskelig den er å tidfeste.",
    },
    {
      question: "Hva er koblingen, altså trinn fire i femtrinnsformen?",
      options: ["Setningen som viser at en endring og en kontinuitet henger sammen", "Setningen som binder to avsnitt sammen språklig, som «på den andre siden»", "Setningen som knytter svaret til et av de andre spørsmålene på eksamenssettet", "Setningen som oppgir hvilken kilde momentet i avsnittet foran er hentet fra"],
      explanation: "Koblingen er årsaksmessig: den viser at det som besto, er en del av forklaringen på det som endret seg. En overgangsformulering binder avsnitt sammen språklig og gir ingen uttelling, og de tre svarene på et sett skal ellers stå på egne ben.",
    },
    {
      question: "Hvorfor er koblingen det billigste løftet i denne sjangeren?",
      options: ["Den bruker momenter du allerede har skrevet ut, og koster få ord", "Den erstatter ett av momentene dine, slik at du får plass til mer utdyping", "Den kan settes inn i åpningen og sparer deg for å skrive en avslutning", "Den teller som et eget moment og hjelper deg derfor over bestått-gulvet"],
      explanation: "Koblingen krever ingen nye opplysninger, bare en setning som setter to momenter i sammenheng. Den erstatter ikke et moment og teller ikke som ett — den viser at momentene henger sammen, og det er noe annet enn å legge til ett til.",
    },
    {
      question: "Hva gjør periodiseringen i åpningssetningen?",
      options: ["Den bestemmer hva som i det hele tatt teller som en endring i dette svaret", "Den viser sensor at du kjenner hele perioden fra begynnelse til slutt", "Den erstatter behovet for å avgrense temaet du behandler i besvarelsen", "Den gir deg anledning til å ta med bakgrunn fra tiden før perioden startet"],
      explanation: "Uten et fra og et til er «hva endret seg» et spørsmål uten mening, og med dem vet du selv hva som er bakgrunn og skal kuttes. Periodisering og temaavgrensning er dessuten to uavhengige ting: du trenger begge.",
    },
    {
      question: "Hvilket av disse er et brudd, og ikke en gradvis endring?",
      options: ["Sovjetunionens sammenbrudd, som fjernet Nord-Koreas (DPRK) russiske ryggdekning", "At Folkerepublikken Kina er blitt den største handelspartneren for flere naboer", "At koloni- og krigstidsspørsmål er blitt en fast del av mellomstatlig politikk", "At de økonomiske båndene i regionen er blitt tettere enn de sikkerhetspolitiske"],
      explanation: "Et brudd har en hendelse og en dato; en gradvis endring er en forskyvning som må dokumenteres med et utslag. Alle fire er reelle endringer, men bare den første kan festes til en hendelse — og det avgjør hva slags belegg momentet trenger.",
    },
    {
      question: "Hva er en stråmann i en argumentasjonsoppgave?",
      options: ["Motsiden gjengitt i en form ingen tilhenger ville kjent seg igjen i", "Et argument du selv har funnet på fordi pensum ikke dekker den ene siden", "Et moment du nevner uten å utvikle det med utdyping og eksempel", "En landing som ender i at spørsmålet ikke lar seg besvare med sikkerhet"],
      explanation: "Stråmannen ser ut som tosidighet og virker som ensidighet, fordi motparten er gjort lett å avvise. Et unevnt moment er mangel nr. 3, og en landing som ikke lander, er et eget problem — ingen av dem handler om hvordan motsiden framstilles.",
    },
    {
      question: "Hvor mange av de 21 spørsmålene er argumentasjonsoppgaver?",
      options: ["2 av 21 spørsmål, og de to spørsmålene er dessuten ordrett identiske", "5 av 21 spørsmål, altså like mange som endring og kontinuitet", "4 av 21 spørsmål, altså like mange som valgoppgavene i materialet", "7 av 21 spørsmål, som er antallet der studenten får et eksplisitt valg"],
      explanation: "Argumentasjonsoppgaven er den minst hyppige sjangeren med to spørsmål, som er ordrett like. Tallet sju gjelder noe annet: hvor mange spørsmål som gir studenten et eksplisitt valg av land eller fokus.",
    },
    {
      question: "Hvilken av disse landingene er fullverdig i en argumentasjonsoppgave?",
      options: ["En som viser at spørsmålet er galt stilt, med begrunnelsen skrevet ut", "En som slår fast at saken er sammensatt og at begge sider har noe for seg", "En som gjentar de sterkeste argumentene fra begge sider til slutt", "En som lar leseren avgjøre, siden studenten ikke skal ta politisk stilling"],
      explanation: "Tre landingstyper er fullverdige: å velge side, å velge side med forbehold, og å vise at spørsmålet er galt stilt — alle med begrunnelse. Å konstatere at noe er sammensatt, å oppsummere eller å overlate valget til leseren er ikke veiing, og et svar uten veiing mangler et helt trinn.",
    },
    {
      question: "Hva skal ikke balanseres i en drøfting av historiestriden?",
      options: ["At hendelsene fant sted — det er robuste funn, ikke meningsspørsmål", "Hvordan ansvaret for hendelsene skal vurderes i dag av de berørte statene", "Hvor mye av striden som drives av fortiden og hvor mye av samtidens politikk", "Hvilken av statene som har det sterkeste rettskravet i territorialstridene"],
      explanation: "Skillet går mellom hendelse og vurdering. At massedrapene i Nanjing og systemet med tvungen seksuell utnyttelse av kvinner fant sted, er robust; hvordan ansvaret skal vurderes, hva striden drives av og hvem som har best rettskrav, er derimot omstridte vurderinger som skal framstilles som posisjoner med avsender.",
    },
    {
      question: "Et svar har fire velutviklede momenter, alle fra endringssiden, og ligger på 690 ord. Hva er statusen?",
      options: ["Ikke bestått etter kravet i V2021-veiledningen, som krever begge sider", "Bestått, siden fire momenter er godt over gulvet på tre momenter", "Bestått, siden ordtallet ligger godt innenfor rammen på 400 til 800 ord", "Umulig å avgjøre, siden veiledningen ikke sier noe om ensidige svar"],
      explanation: "Momenttallet og ordtallet er begge i orden, og svaret mangler likevel det ene kravet veiledningen stiller uttrykkelig: begge sider. Det er også poenget med at ordgrensen ikke er kvalitetsmålet — et svar kan ligge midt i rammen og fortsatt mangle det avgjørende.",
    },
  ],
  'exfac03-east-8-4': [
    {
      question: "Hva krever V2024-veiledningen av et svar på redegjørelsesspørsmålet sitt?",
      options: ["Definisjon, minst én kontrovers, og tre anvendelser med ett eksempel på hver", "Definisjon, tre anvendelser og en drøfting av hvilken av de tre som er viktigst", "Definisjon og minst tre eksempler, uten krav om at kontroversene nevnes", "Definisjon, kontrovers og en avsluttende sammenligning med et annet begrep"],
      explanation: "Kravspesifikasjonen er den strengeste i arkivet, og den bruker ordet «må» om alle tre leddene. Veiledningen ber verken om en rangering av anvendelsene eller om en sammenligning, og kontroversleddet er uttrykkelig med — et rent definisjonssvar er ikke nok.",
    },
    {
      question: "Hvor mange av de 21 spørsmålene er redegjørelser med anvendelse?",
      options: ["4 av 21 spørsmål, og alle fire har et andreledd ut over gjengivelsen", "6 av 21 spørsmål, noe som gjør sjangeren til den vanligste i materialet", "2 av 21 spørsmål, og begge to er hentet fra den samme eksamensterminen", "5 av 21 spørsmål, altså like mange som endring og kontinuitet har totalt"],
      explanation: "Sjangeren har fire spørsmål, like mange som valgoppgaven. Seks er tallet for sammenligningen, som er den vanligste, og fem er tallet for endring og kontinuitet. Poenget med tallet her er andreleddet: i ingen av de fire holder en ren gjengivelse.",
    },
    {
      question: "Hva er en fokusanvisning?",
      options: ["Leddet i oppgaveteksten som sier hva svaret skal legge vekt på", "Setningen i åpningen din der du avgrenser hva du skal behandle", "Sensorveiledningens angivelse av hvilke momenter som gir uttelling", "Kravet om at svaret skal holde seg innenfor 400 til 800 ord"],
      explanation: "Fokusanvisningen står i oppgaven, ikke i svaret ditt og ikke i veiledningen: den er en instruks om hva svaret skal handle om. Din egen avgrensning er noe annet — den er svaret ditt på instruksen, og den bør stå i åpningen.",
    },
    {
      question: "Hva er galt med et svar som beskriver konfucianismen generelt der oppgaven ba om forholdet mellom statene?",
      options: ["Fokusanvisningen er ikke besvart, og det er mangel nr. 6 i bokas register", "Svaret mangler kontroversleddet, som er mangel nr. 5 i det samme registeret", "Svaret bryter ordgrensen, siden en generell beskrivelse alltid blir for lang", "Svaret bruker allmennkunnskap i stedet for pensum, som er mangel nr. 9"],
      explanation: "Alt som står, kan være riktig, og svaret er likevel et svar på et annet spørsmål. Det er nettopp derfor fokusanvisningen kalles en instruks og ikke en høflighet — den definerer bestillingen, og de andre manglene er egne punkter med egne hjemler.",
    },
    {
      question: "Hvor langt bør kontroversleddet være?",
      options: ["To setninger: én om hva striden gjelder, én om hvem som står hvor", "Omtrent halve svaret, siden kontroversen er det mest krevende leddet", "Én setning, siden det bare skal nevnes at begrepet er omstridt", "Så langt det trengs, siden veiledningen ikke sier noe om lengde"],
      explanation: "Formen er stram fordi anvendelsene skal ha plassen sin: to setninger plasserer striden og går videre. Å bruke halve svaret snur kravspesifikasjonen på hodet, og å nevne striden uten å si hva den gjelder, gir sensor ingenting å vurdere.",
    },
    {
      question: "Hva er trinn tre og fire i det fullverdige eksempelet?",
      options: ["Å si hvilket trekk ved eksempelet som svarer til begrepet, og hva som svekker det", "Å oppgi hvor eksempelet er hentet fra, og hvilket årstall det knytter seg til", "Å gi et eksempel til på det samme poenget, og deretter oppsummere begge to", "Å knytte eksempelet til et annet begrep, og deretter si hvilket som passer best"],
      explanation: "De to siste trinnene er koblingssetningen og betingelsessetningen, og det er de som gjør eksempelet til belegg i stedet for illustrasjon. Et eksempel nummer to er derimot trinn to i kuttehierarkiet, altså det som skal ut når plassen er trang.",
    },
    {
      question: "Hvordan skal contra-flows skrives i denne boka?",
      options: ["Med den engelske formen som hovedform, siden begrepet står slik i oppgaveteksten", "Med den norske formen som hovedform, siden besvarelsen skrives på norsk bokmål", "Med begge formene overalt, siden ingen av dem er belagt i kildematerialet", "Med engelsk form i overskrifter og norsk form i brødteksten i hvert kapittel"],
      explanation: "Begrepet står uoversatt i oppgaveteksten, og en student som bare kjenner det norske ordet, ville ikke kjent igjen spørsmålet. Den norske formen motstrømmer er vår oversettelse og brukes ved siden av — ikke i stedet for.",
    },
    {
      question: "Hva er det som ikke er omstridt i spørsmålet om japansk medieeksport?",
      options: ["At eksporten finnes, og at den er betydelig i omfang", "At eksporten utfordrer eksisterende maktstrukturer", "At eksporten styrker et etablert sentrum-periferi-hierarki", "At eksporten er større enn eksporten fra nabolandene i regionen"],
      explanation: "Selve eksportens omfang er et robust funn og skal ikke pakkes inn i «noen mener». Det som er omstridt, er virkningen på maktstrukturene — og oppgaveteksten er selv formulert som et vippespørsmål mellom de to lesningene.",
    },
    {
      question: "Hva skiller en anvendelse fra en illustrasjon?",
      options: ["Anvendelsen prøver begrepet på et tilfelle; illustrasjonen pynter på påstanden", "Anvendelsen står i avslutningen av svaret; illustrasjonen står tidlig i teksten", "Anvendelsen bruker et eksempel fra pensum; illustrasjonen bruker et fra nyhetene", "Anvendelsen krever to eksempler; illustrasjonen klarer seg med ett enkelt eksempel"],
      explanation: "Forskjellen ligger i hva eksempelet gjør: en anvendelse viser at begrepet griper noe, mens en illustrasjon bare gjentar poenget i konkret form. Det er derfor V2024-veiledningen sier at eksemplene er det som viser at studenten har forstått.",
    },
    {
      question: "Et svar gjengir tre innfallsvinkler korrekt, men uten eksempler. Hvilken mangel er det?",
      options: ["Mangel nr. 4 — å hoppe over kravet om ett eksempel", "Mangel nr. 5 — å definere et begrep uten å nevne at det er omstridt", "Mangel nr. 6 — å ignorere fokusanvisningen i selve spørsmålet", "Mangel nr. 3 — å ramse opp momenter uten å utvikle noen av dem"],
      explanation: "Kravet om ett eksempel per anvendelse er uttrykkelig i V2024-veiledningen, og et svar uten eksempler mangler nettopp det leddet veiledningen sier viser forståelse. Svaret kan se fyldig ut og likevel være rammet, fordi innfallsvinklene i seg selv er korrekt gjengitt.",
    },
    {
      question: "Du har hundre og femti ord igjen til tre obligatoriske anvendelser. Hva gjør du?",
      options: ["Henter ord fra definisjonen og kontroversleddet, som tåler å komprimeres", "Fordeler ordene likt, slik at alle tre anvendelsene i det minste er nevnt", "Kutter den svakeste anvendelsen helt, etter trinn fem i kuttehierarkiet", "Skriver de tre anvendelsene som én felles setning med tre eksempler i"],
      explanation: "Anvendelser oppgaven krever, kan ikke kuttes — da svarer du på et annet spørsmål. Femti ord per anvendelse gir tre halve, og en fellessetning mister koblingen mellom tilfelle og begrep. De to leddene som tåler innstramming, er definisjonen og kontroversen.",
    },
    {
      question: "Hva er testen på om du har skrevet et referat i stedet for en redegjørelse?",
      options: ["Tell setningene som gjør noe annet enn å gjengi — er tallet null, er det referat", "Tell ordene i svaret — er det under fem hundre, er det som regel et referat", "Tell hvor mange ganger du har navngitt en pensumforfatter i besvarelsen", "Tell avsnittene — et referat har alltid færre avsnitt enn en redegjørelse"],
      explanation: "Skillet ligger i om noe blir prøvd, ikke i lengde, antall avsnitt eller antall navn. Én setning om hva som er omstridt og én om hva begrepet fanger i et konkret tilfelle, flytter svaret fra referat til redegjørelse.",
    },
  ],
  'exfac03-east-8-5': [
    {
      question: "Hvor mange av spørsmålene i materialet gir studenten et eksplisitt valg?",
      options: ["7 av 21 spørsmål, altså en tredel av alt som kan bli spurt om", "4 av 21 spørsmål, som er antallet rene valgoppgaver i materialet", "2 av 21 spørsmål, og de to er dessuten ordrett like hverandre", "21 av 21 spørsmål, siden ethvert essay innebærer en avgrensning"],
      explanation: "Sju spørsmål har et valgledd, mens fire av dem er rene valgoppgaver som sjanger. Tallet to gjelder argumentasjonsoppgavene, og en selvvalgt avgrensning i et vanlig essay er noe annet enn et valg oppgaven selv tilbyr.",
    },
    {
      question: "Hva avgjør hvilket alternativ du skal velge i en valgoppgave?",
      options: ["Hvor mange momenter med eksempel du har på hvert av alternativene", "Hvilket alternativ som er faglig mest interessant for deg selv", "Hvilket alternativ som er dekket best i pensumlitteraturen totalt", "Hvilket alternativ som har vært gitt oftest i tidligere terminer"],
      explanation: "Kriteriet er hva du faktisk har lest, målt i momenter med eksempel — under tre, velg noe annet. Interesse er nettopp det kriteriet mangel nr. 7 advarer mot, og hva pensum eller tidligere sett vektlegger, sier ingenting om hva du kan skrive nå.",
    },
    {
      question: "Hvor lang tid skal valget i en valgoppgave ta?",
      options: ["Minutter, ikke kvarter — momenttellingen tar under et minutt", "Omtrent et kvarter, siden valget avgjør en tredel av karakteren", "Så lang tid som trengs, siden et feilvalg ikke kan rettes opp", "Ingen tid — velg det første alternativet du kjenner igjen"],
      explanation: "Selve tellingen tar under et minutt, og lengre vurdering stjeler tid fra svaret som teller en tredel. Å velge det første som ser kjent ut, hopper over trinn én og to, og da er valget tatt på gjenkjennelse i stedet for på momenter.",
    },
    {
      question: "Du er 250 ord inn i et alternativ og oppdager at du bare har to momenter. Hva er som regel riktig?",
      options: ["Å fullføre valget og hente et tredje moment fra en annen vinkel", "Å bytte til et annet alternativ, siden tre momenter er et krav", "Å levere svaret med to grundige momenter i stedet for tre svake", "Å bruke resten av tiden på de to andre spørsmålene på settet"],
      explanation: "Et bytte koster deg alt du har skrevet pluss ny lesetid, mens et tredje moment ofte finnes i en annen side ved det samme alternativet. To momenter er dessuten under bestått-gulvet uansett hvor grundige de er, og de tre svarene teller likt — så du kan ikke la ett stå igjen.",
    },
    {
      question: "Hva skal stå i åpningen av en valgoppgave?",
      options: ["Hvilket alternativ du har valgt, og gjerne hvilke momenter som kommer", "Hvorfor du valgte bort de tre andre alternativene i oppgaven", "En kort presentasjon av alle alternativene før du velger ett", "Hvor mange ord du har til rådighet på dette ene spørsmålet"],
      explanation: "Sensor skal ikke måtte gjette hvilket alternativ svaret gjelder, og en åpning som også navngir momentene, virker som en kontrakt med deg selv. Begrunnelsen for bortvalgene er derimot unødvendig: oppgaven ga deg en meny, ikke en oppfordring til å drøfte menyen.",
    },
    {
      question: "Hvilke tre landingstyper er fullverdige i en argumentasjonsoppgave?",
      options: ["Å velge side, å velge side med forbehold, og å vise at spørsmålet er galt stilt", "Å velge side, å la leseren avgjøre, og å konkludere med at saken er sammensatt", "Å velge side, å oppsummere begge sider, og å nevne hva videre forskning bør gjøre", "Å velge side med forbehold, å vise til pensum, og å avslutte med et åpent spørsmål"],
      explanation: "Alle tre formene når opp så lenge begrunnelsen står, og skillet mellom dem er ikke et kvalitetsskille. Å overlate valget til leseren, å oppsummere eller å konstatere at noe er sammensatt, er derimot fravær av veiing.",
    },
    {
      question: "Hva er en tom landing?",
      options: ["En avslutning som sier at det kommer an på, uten å si hva det kommer an på", "En avslutning som velger side uten å nevne motargumentene i det hele tatt", "En avslutning som navngir en begrensning i konklusjonen, som en tidsperiode", "En avslutning som er kortere enn femti ord og derfor mangler begrunnelse"],
      explanation: "Den tomme landingen konstaterer uten å navngi noe, og den er derfor et fravær av konklusjon snarere enn en forsiktig konklusjon. Et navngitt forbehold er tvert imot et verktøy, og lengden i seg selv avgjør ingenting.",
    },
    {
      question: "Hvilket land er ikke blant alternativene i moderniseringsvalgoppgavene i materialet?",
      options: ["Taiwan", "Nord-Korea (DPRK)", "Sør-Korea (ROK)", "Folkerepublikken Kina"],
      explanation: "De to valgoppgavene om moderniseringsveier lister uttrykkelig Japan, Folkerepublikken Kina, Nord-Korea (DPRK) og Sør-Korea (ROK). Taiwan er navngitt i andre spørsmål i materialet, men ikke som valgalternativ i disse.",
    },
    {
      question: "Hva er mangel nr. 7 i bokas register, og hvor kommer den fra?",
      options: ["Å velge feil i valgoppgavene — utledet av formatet, ikke av en veiledning", "Å velge feil i valgoppgavene — hjemlet uttrykkelig i V2021-veiledningen", "Å ignorere valgleddet helt — hjemlet i V2024-veiledningens momentliste", "Å velge to alternativer i stedet for ett — hjemlet i oppgavetekstene"],
      explanation: "Punktet er en av de to i registeret som er utledet av formatet: det følger av oppgavetekstene som tilbyr valg, sammenholdt med at de tre svarene teller likt. Ingen sensorveiledning omtaler valg som et problem, og ingen av dem rapporterer observerte feil i det hele tatt.",
    },
    {
      question: "Hva betyr det at boka ikke rangerer landene i valgoppgavene?",
      options: ["Ingen tekst i boka sier at ett alternativ er tryggere eller vanskeligere", "Boka behandler bare de landene som har vært valgalternativer i materialet", "Boka gir like mange sider til hvert land i alle delene av framstillingen", "Boka overlater til leseren å finne stoff om landene i pensumlitteraturen"],
      explanation: "Formuleringer som «velg dette hvis du er usikker» ville styrt et valg som skal tas på lest stoff. Derfor har de fem landkapitlene identisk quizkvote og nesten identisk lesetid, mens Japan og Folkerepublikken Kina veier tyngre andre steder fordi eksamen navngir dem oftest.",
    },
    {
      question: "Hva er forskjellen på et valgledd og en fokusanvisning?",
      options: ["Valgleddet overlater bestemmelsen til deg; fokusanvisningen er en instruks", "Valgleddet står i innledningen; fokusanvisningen står alltid til slutt", "Valgleddet gjelder land; fokusanvisningen gjelder alltid tidsperioden", "Valgleddet finnes bare i valgoppgaver; fokusanvisningen bare i sammenligninger"],
      explanation: "Det ene gir deg et valg, det andre gir deg en bestilling — og de kan stå i samme oppgave, der du bare kan gjøre noe med det ene. Plassering i teksten og hva de handler om, varierer og er ikke det som skiller dem.",
    },
    {
      question: "Hva skal ikke balanseres i en drøfting av statens rolle i den økonomiske veksten?",
      options: ["At statene faktisk grep aktivt inn i økonomien", "Hvor mye av veksten statens inngrep forklarer", "Hvilke andre betingelser som måtte være til stede", "Om inngrepene virket likt i alle de fem landene"],
      explanation: "At statene grep inn, er dokumentert i alle de fem landene boka behandler, og å gjøre det til et meningsspørsmål er falsk balanse. Årsaksvekten er derimot omstridt, og det er nettopp der drøftingen hører hjemme.",
    },
  ],
  'exfac03-east-8-6': [
    {
      question: "Hva er rammen for semesteroppgaven slik H2025-veiledningen beskriver den?",
      options: ["Ti sider à 2 300 tegn uten mellomrom, med forside og litteraturliste i tillegg", "Ti sider inkludert forside og referanseliste, og uten noe krav til tegn per side", "Tre svar på 400 til 800 ord hver, levert samlet ved semesterslutt", "Fri lengde, så lenge minst tre akademiske kilder er brukt i oppgaven"],
      explanation: "Veiledningen oppgir både sidetall og tegn per side, og den holder forside og referanseliste utenfor. De tre korte svarene hører til den andre vurderingsformen i materialet, og lengden er ikke fri — den er et formelt kriterium.",
    },
    {
      question: "Hvor mange terminer i arkivet er høstterminer?",
      options: ["1 av 8 terminer, og det er H2025 som er den ene", "2 av 8 terminer, nemlig de to utsatte eksamenene", "4 av 8 terminer, altså annenhver termin i perioden", "0 av 8 terminer, siden emnet ikke har hatt høsteksamen"],
      explanation: "H2025 er den eneste høstterminen i arkivet, og den ble vurdert med semesteroppgave. De to utsatte eksamenene er vårterminer, og fravær av tidligere høstterminer i arkivet er ikke belegg for at det ikke har vært noen — vi vet det rett og slett ikke.",
    },
    {
      question: "Hva sier materialet om hvorvidt semesteroppgaven er en permanent omlegging?",
      options: ["Ingenting sikkert — to tolkninger er forsvarlige, og semestersiden avgjør", "At formen er permanent fra høsten 2025 og erstatter den gamle trespørsmålsformen", "At vår og høst alltid har hatt ulik vurderingsform i dette emnet", "At formen ble prøvd ut én gang og deretter forlatt igjen etterpå"],
      explanation: "Enten er formen lagt om permanent, eller så har vår og høst ulik vurderingsform — og med bare én høsttermin i arkivet finnes det ikke grunnlag for å skille de to lesningene. Den andre er den mest sparsommelige, men den er en slutning og ikke et belegg.",
    },
    {
      question: "Hva er kravet til kilder i semesteroppgaven?",
      options: ["Minst tre akademiske kilder utenom pensum, i tillegg til pensum", "Minst tre kilder totalt, der pensumlitteratur kan utgjøre alle tre", "Minst tre kilder, hvorav minst én må være på et annet språk enn norsk", "Ingen fast grense, men kildene må være sitert korrekt gjennom oppgaven"],
      explanation: "Kravet gjelder tillegget: tre akademiske kilder du har funnet selv, ved siden av pensum. Å skrive utelukkende på pensum er mangel nr. 13, og det er et formelt kriterium som sjekkes før innholdet vurderes.",
    },
    {
      question: "Hvilket kvalitetskriterium skal vektlegges mest?",
      options: ["Analysen av de akademiske kildene i oppgaven", "Klarheten i problemstillingen og argumentet", "Den logiske strukturen i framstillingen", "Språket, som skal være tilstrekkelig akademisk"],
      explanation: "Veiledningen sier uttrykkelig at analysen av kildene vektlegges mest, og det er den eneste eksplisitte vektingsregelen i hele arkivet. De tre andre er reelle kriterier, men de er ikke løftet fram på samme måte.",
    },
    {
      question: "Hva skiller en kildeanalyse fra et kildereferat?",
      options: ["Analysen spør hva kilden gjør: hva den måler og hva den utelukker", "Analysen er lengre enn referatet og gjengir flere av kildens funn", "Analysen bruker direkte sitater, mens referatet parafraserer innholdet", "Analysen står i konklusjonen, mens referatet står i kildepresentasjonen"],
      explanation: "Forskjellen ligger i spørsmålene du stiller til teksten, ikke i lengde, sitatbruk eller plassering. Et referat kan være både langt og korrekt og likevel ramme mangel nr. 14, som er å referere der oppgaven skal analysere.",
    },
    {
      question: "Hvilken av disse er en problemstilling og ikke et tema?",
      options: ["Hvordan ble tiltakene mot synkende fødselstall begrunnet i ett land?", "Kjønn og modernisering i Øst-Asia gjennom det tjuende århundret", "Konfucianismens betydning for samfunnsordenen i regionen", "Miljøproblemer og sosial-økologisk sårbarhet i Øst-Asia"],
      explanation: "En problemstilling har avgrenset materiale og tidsrom, og den kan besvares galt. De tre andre navngir felt uten å stille et spørsmål, og de er derfor ikke gjennomførbare innenfor rammen — som er nettopp det veiledningen spør etter.",
    },
    {
      question: "Hvor gjelder den fullstendige karakterskalaen i arkivet?",
      options: ["For semesteroppgaveformen, siden den bare står i H2025-veiledningen", "For alle eksamensformene i emnet, siden UiO bruker samme skala overalt", "For trespørsmålsformen, siden det er den formen flest terminer bruker", "For utsatt eksamen, siden det er der sensor trenger en fast skala"],
      explanation: "De tre vår-veiledningene har ingen slik beskrivelse, og skalaen kan derfor ikke presenteres som karakterskalaen for trespørsmålsformen. Den sier likevel noe verdt å ta med seg: den måler aspekter, altså hvor mange kriterier som er innfridd.",
    },
    {
      question: "Hva måler karakterskalaen i H2025-veiledningen, etter sin egen ordlyd?",
      options: ["Aspekter — hvor mange av kriteriene som er innfridd", "Kunnskapsmengde — hvor mye kandidaten kan om temaet", "Omfang — hvor mange sider og kilder oppgaven har", "Originalitet — hvor nytt argumentet i oppgaven er"],
      explanation: "Ordet som går igjen i beskrivelsene, er aspekter, og forskjellen mellom nivåene er hvor mange krav som er innfridd. Det er også grunnen til at et løft sjelden ligger i å skrive mer, men i å dekke et kriterium som mangler.",
    },
    {
      question: "Hva er belagt om reglene for kunstig intelligens i dette emnet?",
      options: ["Et forbud i H2025-veiledningen alene; vår-veiledningene nevner det ikke", "Et forbud i alle de fire sensorveiledningene, med samme ordlyd hver gang", "En tillatelse til bruk i forberedelsen, oppgitt i V2025-veiledningen", "Ingenting — spørsmålet er ikke berørt i noen av dokumentene i arkivet"],
      explanation: "Forbudet står i veiledningen for semesteroppgaveformen og omfatter skriving, oppsummering av kilder og all annen bruk i besvarelsen. Ingen av vår-veiledningene sier noe om spørsmålet, og boka verken utvider forbudet eller antyder at slik bruk er tillatt der — sjekk reglene for din egen termin.",
    },
    {
      question: "Hvilken av disse kildene teller mot kravet om tre akademiske kilder utenom pensum?",
      options: ["En fagfellevurdert tidsskriftartikkel utenfor pensum", "Et kapittel fra en akademisk bok som står på pensumlista", "En lengre reportasje i en anerkjent avis om det samme temaet", "En leksikonartikkel på nett som ikke har noen navngitt forfatter"],
      explanation: "Kilden må være både akademisk og utenfor pensum, og bare den første oppfyller begge. Avisreportasjen kan brukes utmerket som materiale du analyserer, mens en tekst uten navngitt forfatter ikke kan analyseres i det hele tatt — du vet ikke hvem som sier hva.",
    },
    {
      question: "Hva bør sidebudsjettet for en oppgave på ti sider prioritere?",
      options: ["Analysedelen, siden analysen av kildene er det som vektlegges mest", "Bakgrunnsdelen, siden leseren trenger konteksten for å forstå temaet", "Kildepresentasjonen, siden kravet om tre kilder er et formelt kriterium", "Konklusjonen, siden det er der argumentet skal samles til slutt"],
      explanation: "Vektingsregelen får praktiske følger i sidebudsjettet: analysedelen skal være den største. Bakgrunnen er tvert imot den delen som eser ut av seg selv, og den er første sted å hente sider fra når budsjettet sprekker.",
    },
  ],
  'exfac03-east-8-7': [
    {
      question: "Hva er grunnlaget for feilregisteret i denne boka?",
      options: ["Krav i navngitte sensorveiledninger og oppgavetekster, lest baklengs", "Sensorenes egne beskrivelser av hva kandidater oftest gjør galt", "En gjennomgang av innleverte besvarelser fra terminene 2021 til 2025", "Karakterstatistikk som viser hvilke spørsmål flest stryker på"],
      explanation: "Registeret er utledet av krav: der veiledningen sier at noe skal være med, sier registeret at et svar uten det mangler noe. Ingen av de fire veiledningene beskriver kandidatatferd, og arkivet inneholder verken besvarelser eller karakterstatistikk.",
    },
    {
      question: "Hvor mange punkter har registeret?",
      options: ["Fjorten", "Ti", "Tolv", "Sytten"],
      explanation: "Registeret har nøyaktig fjorten punkter, og boka innfører ikke et femtende noe sted. Tolv av dem kan føres tilbake til en setning i en veiledning eller oppgavetekst, mens to er utledet av eksamensformen.",
    },
    {
      question: "Hvilke to punkter er utledet av formatet og ikke av en veiledning?",
      options: ["Nr. 3 og nr. 7", "Nr. 1 og nr. 2", "Nr. 4 og nr. 8", "Nr. 13 og nr. 14"],
      explanation: "Nr. 3 følger av ordgrensen sammenholdt med V2024-kravet om å forklare og gi eksempler, og nr. 7 av oppgavetekstene som tilbyr valg. Nr. 1, 2, 4 og 8 er de fire tyngste og har alle hjemmel i en navngitt veiledning, mens nr. 13 og 14 hviler på H2025-veiledningen.",
    },
    {
      question: "Hvilke fire punkter regnes som de tyngste?",
      options: ["Nr. 1, 2, 4 og 8 — sider, momenttall, eksempler og struktur", "Nr. 5, 6, 9 og 10 — kontrovers, fokus, pensum og referanser", "Nr. 3, 7, 11 og 12 — oppramsing, valg, fordeling og språkform", "Nr. 11, 12, 13 og 14 — de som gjelder form og innlevering"],
      explanation: "De fire treffer i praksis alle tre svarene på et sett, og de har den klareste hjemmelen. De øvrige ti er reelle krav, men de er knyttet til bestemte sjangre eller til den ene av de to vurderingsformene.",
    },
    {
      question: "Hva er en varsellampe i dette kapitlet?",
      options: ["Et tegn du kan telle eller søke etter i din egen tekst", "En advarsel fra sensor om hva som ofte går galt i besvarelser", "En markering i oppgaveteksten om hva svaret skal inneholde", "Et krav i veiledningen som må innfris for å bestå eksamen"],
      explanation: "Varsellampen er observerbar: et tall, et ord, en tom kolonne. Det skiller den fra et godt råd som ikke kan sjekkes — og ingen av dem stammer fra sensor, siden veiledningene ikke beskriver hva kandidater gjør.",
    },
    {
      question: "Et svar har fire momenter, alle fra endringssiden. Hvilket punkt er ikke innfridd?",
      options: ["Nr. 1 — begge sider av et tosidig spørsmål", "Nr. 2 — minst tre momenter per spørsmål", "Nr. 3 — momenter som utvikles og ikke bare nevnes", "Nr. 11 — jevn fordeling mellom de tre svarene"],
      explanation: "Momenttallet er i orden, og kontinuitetssiden mangler — det er nettopp kravet V2021-veiledningen stiller uttrykkelig. Fordeling og utvikling er egne punkter som ikke sier noe om hvilke sider svaret dekker.",
    },
    {
      question: "Et svar nevner åtte forhold og utvikler ingen av dem. Hvilket punkt er det?",
      options: ["Nr. 3 — oppramsing uten utvikling", "Nr. 2 — under tre momenter i svaret", "Nr. 9 — allmennkunnskap i stedet for pensum", "Nr. 5 — definisjon uten kontrovers"],
      explanation: "Nr. 2 og nr. 3 er motsatte feller rundt det samme regnestykket: for få momenter mot for mange. Åtte navngitte forhold på 800 ord gir under hundre ord hver, og da er det ikke plass til påstand, utdyping og eksempel.",
    },
    {
      question: "Hvilket punkt gjelder å gjengi tre anvendelser korrekt uten å vise noen av dem?",
      options: ["Nr. 4 — eksempelkravet", "Nr. 5 — kontroversleddet", "Nr. 6 — fokusanvisningen", "Nr. 10 — referansekravet"],
      explanation: "V2024-veiledningen krever ett eksempel på hver anvendelse og sier at eksemplene er det som viser forståelse. Kontrovers, fokus og referanser er egne krav, og et svar kan innfri alle tre og likevel mangle samtlige eksempler.",
    },
    {
      question: "Hva er varsellampen for land-for-land-formen?",
      options: ["Stedsnavnene i svaret kommer i klynger i stedet for spredt utover", "Svaret har flere avsnitt enn det har dimensjoner å sammenligne langs", "Svaret nevner flere land enn oppgaven uttrykkelig har bedt om", "Svaret bruker overskrifter med landnavn i stedet for med dimensjoner"],
      explanation: "Streker under stedsnavnene avslører strukturen uansett hva overskriftene sier: står alle Japan-strekene først og alle Kina-strekene etterpå, er svaret organisert etter land. Antall avsnitt og antall land sier ingenting om dette.",
    },
    {
      question: "Hva er forskjellen på punkt nr. 9 og punkt nr. 10?",
      options: ["Nr. 9 gjelder hvor kunnskapen kommer fra, nr. 10 om du oppgir det", "Nr. 9 gjelder vårformen, nr. 10 gjelder bare semesteroppgaven", "Nr. 9 gjelder pensum, nr. 10 gjelder kilder utenom pensum", "Nr. 9 gjelder innholdet, nr. 10 gjelder språket i besvarelsen"],
      explanation: "Et svar kan bygge helt på pensum og likevel ikke oppgi noen avsender — da er nr. 9 innfridd og nr. 10 ikke. Begge gjelder dessuten vårformen: referansebruk er ett av tre vurderingskriterier i V2025-veiledningen.",
    },
    {
      question: "Hvilke punkter gjelder bare semesteroppgaveformen?",
      options: ["Nr. 13 og nr. 14", "Nr. 11 og nr. 12", "Nr. 9 og nr. 10", "Nr. 5 og nr. 6"],
      explanation: "De to siste punktene hviler på H2025-veiledningen: kravet om minst tre akademiske kilder utenom pensum, og vektingsregelen om at analysen skal telle mest. De øvrige tolv gjelder trespørsmålsformen.",
    },
    {
      question: "Hva er det billigste ved punktene nr. 11 og nr. 12?",
      options: ["Begge kan fjernes før eksamen uten at du kan mer fag", "Begge gjelder bare den ene av de to vurderingsformene", "Begge er utledet av formatet og ikke av en veiledning", "Begge gjelder bare det første av de tre svarene på settet"],
      explanation: "Fordelingen fikses med en klokke og et ordbudsjett, og språkformen med en tospråklig begrepsliste. Begge hviler på belegg i materialet: oppgavesettenes vekting og de engelske begrepene i oppgavetekstene fra V2024 og V2025.",
    },
    {
      question: "Hvor mange av terminene i arkivet har ingen sensorveiledning?",
      options: ["4 av 8 terminer — V2022, V2022-utsatt, V2023 og V2023-utsatt", "2 av 8 terminer — de to som bare har oppgavesett bevart", "6 av 8 terminer — alle unntatt V2021 og V2025 i materialet", "1 av 8 terminer — den ene der oppgaveteksten ligger i veiledningen"],
      explanation: "Fire terminer har oppgavesett uten veiledning, og ingenting boka sier om hva sensor krever, kan bygge på dem. Veiledning finnes bare for V2021, V2024, V2025 og H2025.",
    },
    {
      question: "Hvilke fire punkter bør du sjekke under selve eksamen?",
      options: ["De fire tyngste — nr. 1, 2, 4 og 8", "De fire som gjelder kilder og referanser i besvarelsen", "De fire siste i registeret, siden de er lettest å glemme", "Alle fjorten, ett minutt på hvert punkt før innlevering"],
      explanation: "Fjorten punkter er for mange å holde i hodet under tidspress, og de fire tyngste treffer i praksis alle tre svarene. Resten hører hjemme i forberedelsen og i gjennomlesningen når det er tid til overs.",
    },
    {
      question: "Hvorfor skal registeret ikke leses som en liste over vanlige feil?",
      options: ["Fordi ingen av veiledningene beskriver hva kandidater faktisk gjorde", "Fordi punktene er hentet fra et annet emne med liknende eksamensform", "Fordi listen er satt sammen av studenter og ikke av fagpersoner", "Fordi punktene bare gjelder de terminene som har sensorveiledning"],
      explanation: "Alle fire veiledningene uttrykker forhåndsforventninger, ikke observasjoner, og å lese registeret som statistikk ville tillegge materialet noe det ikke inneholder. Punktene er dessuten skrevet ut fra kravene i materialet selv, og de gjelder formen — ikke bare de terminene som har veiledning.",
    },
    {
      question: "Hva er det minste grepet som retter et svar rammet av punkt nr. 5?",
      options: ["To setninger: én om hva striden gjelder, én om hvem som står hvor", "Et helt nytt avsnitt der begge kontroversene drøftes og veies", "En henvisning til pensum der kontroversen er behandlet grundig", "En omskriving av definisjonen slik at den blir mer forsiktig"],
      explanation: "Kontroversleddet er stramt med vilje, slik at anvendelsene beholder plassen sin. En full drøfting snur kravspesifikasjonen på hodet, og en mer forsiktig definisjon sier fortsatt ingenting om at begrepet er omstridt.",
    },
  ],
  'exfac03-east-8-8': [
    {
      question: "Hvor står kjønnsklyngen i frekvensbildet?",
      options: ["5 av 21 spørsmål, i 5 av 7 terminer — emnets hyppigste tema", "4 av 21 spørsmål, i 4 av 7 terminer — på linje med regionklyngen", "2 av 21 spørsmål, i 2 av 7 terminer — som religionsklyngen i materialet", "1 av 21 spørsmål, i 1 av 7 terminer — men fra den nyeste terminen"],
      explanation: "Kjønn er det hyppigste temaet i materialet, og spørsmålsmalen om kjønnsrelasjoner og statens rolle er gitt ordrett identisk i to av terminene. Region og modernisering står med fire spørsmål hver, mens tallet én gjelder de tre nyeste klyngene.",
    },
    {
      question: "Hvor bør statens rolle behandles i et svar på denne oppgaven?",
      options: ["Inne i hvert endringsmoment, knyttet til en konkret endring", "I et eget avsnitt til slutt, der alle statlige tiltak samles", "I åpningen, som en oversikt over hva staten gjorde i perioden", "I avslutningen, som en del av veiingen mellom de to sidene"],
      explanation: "Staten virket gjennom de enkelte endringene, og et svar som knytter den til en konkret endring, diskuterer momentet slik V2021-veiledningen ber om. Et løsrevet statsavsnitt inneholder ofte den samme kunnskapen og gir langt mindre uttelling.",
    },
    {
      question: "Hva mangler i midtnivåbesvarelsen på 510 ord?",
      options: ["Kontinuitetssiden — svaret har bare momenter fra endringssiden", "Momenttallet — svaret har bare to momenter og er under gulvet", "Ordtallet — svaret ligger under gulvet i ordgrensen på 400 ord", "Eksemplene — ingen av momentene har noe konkret utslag"],
      explanation: "Besvarelsen har tre korrekte momenter og ligger godt innenfor rammen, og den mangler likevel det ene kravet V2021-veiledningen stiller uttrykkelig for endringsspørsmål. Kontinuitetsmomentet ville kostet omtrent hundre og femti ord, og svaret har plassen.",
    },
    {
      question: "Hva er hovedproblemet i den svake besvarelsen?",
      options: ["Fordelingen — ni momenter nevnes, ingen utvikles", "Lengden — svaret er over grensen og må derfor kuttes", "Kunnskapen — svaret bygger på allmennkunnskap i stedet for pensum", "Strukturen — svaret er organisert etter land i stedet for etter tema"],
      explanation: "Kutter du de to bakgrunnsavsnittene, er svaret innenfor grensen og fortsatt uten utviklede momenter. Kunnskapen er dessuten korrekt og pensumnær — det som mangler, er at noe av den blir gjort noe med.",
    },
    {
      question: "Hva betyr det at statsfeminisme betyr ulike ting i de to landene?",
      options: ["I Japan var den et svar på et demografisk problem, i Mao-tidens Kina del av en samfunnsomlegging", "I Japan var den statlig styrt, mens den i Folkerepublikken Kina vokste fram nedenfra", "I Japan gjaldt den arbeidslivet, mens den i Folkerepublikken Kina bare gjaldt familieretten", "I Japan kom den før krigen, mens den i Folkerepublikken Kina kom etter reformperioden"],
      explanation: "Samme ord, to ulike politiske innhold: det ene innenfor en bestående samfunnsorden, det andre som del av et prosjekt om å legge om ordenen. Begge er statlig drevet, og begge gjelder langt mer enn familieretten alene.",
    },
    {
      question: "Hva er kontinuitetsmomentet i denne oppgaven?",
      options: ["At arbeidsdelingen i hjemmet har endret seg langt langsommere enn lovverket", "At kvinners yrkesdeltakelse har steget jevnt i begge land gjennom perioden", "At begge land har hatt statlig politikk rettet mot fødselstallene", "At utdanningsnivået blant kvinner har vokst i hele perioden"],
      explanation: "Kontinuiteten gjelder ett bestemt forhold som holdt seg gjennom perioden, og den opprettholdes aktivt gjennom skatte- og permisjonsordninger og arbeidstidskultur. De tre andre beskriver endringer, ikke kontinuitet.",
    },
  ],
  'exfac03-east-8-9': [
    {
      question: "Hvor mange argumentasjonsoppgaver finnes i materialet?",
      options: ["2 av 21 spørsmål, og de to spørsmålene er ordrett identiske", "4 av 21 spørsmål, fordelt på fire ulike terminer i materialet", "6 av 21 spørsmål, som gjør den til den vanligste sjangeren", "5 av 21 spørsmål, på linje med endring og kontinuitet"],
      explanation: "Argumentasjonsoppgaven er den minst hyppige av de fem sjangrene, og de to spørsmålene handler begge om regional sammenheng. Seks er tallet for sammenligningen, fem for endring og kontinuitet, fire for valgoppgaven.",
    },
    {
      question: "Hvorfor er den svake besvarelsen på 430 ord ikke bestått?",
      options: ["Alle fire momentene er fra samme side av et tosidig spørsmål", "Svaret har for få momenter til å nå gulvet på tre momenter", "Svaret ligger under gulvet i ordgrensen på 400 ord per svar", "Momentene er faktisk feil, selv om de er godt formulert"],
      explanation: "Momentene er korrekte, de er fire i tallet, og ordtallet er innenfor rammen. Det som mangler, er motsiden — og både oppgaveteksten og V2021-veiledningen krever argumenter i begge retninger. Ordgrensen er ikke kvalitetsmålet.",
    },
    {
      question: "Hva er presisjonsfella i et svar om regional sammenheng?",
      options: ["Å gli fra felles skrift over til påstanden om felles språk", "Å blande sammen buddhisme og konfucianisme som to beslektede tradisjoner", "Å datere spredningen av skrifttegn til feil århundre", "Å regne Taiwan som en del av regionen i framstillingen"],
      explanation: "Japansk og koreansk er ikke i slekt med kinesisk, selv om skriften og store mengder låneord er felles. Et argument som strekkes fra skrift til språk, kan avvises av motparten med én setning — og da mister du et moment som ellers er sterkt.",
    },
    {
      question: "Hva skiller tributtsystemet fra en kolonialordning?",
      options: ["Tributtstaten besto som egen stat, med egne herskere og egen forvaltning", "Tributtsystemet gjaldt bare handel, mens kolonier også omfattet religion", "Tributtsystemet var frivillig for begge parter og kunne sies opp når som helst", "Tributtsystemet var en moderne ordning, mens kolonier hørte til middelalderen"],
      explanation: "Ordningen var en rangordning med anerkjennelse og handel innenfor rammen, ikke et herredømme som fjernet selvstyret. Å blande de to sammen svekker argumentet, fordi det gjør et rangforhold til noe det ikke var.",
    },
    {
      question: "Hva sier den sterke besvarelsen at binder regionen sammen?",
      options: ["Tetthet av forbindelser mellom statene, ikke likhet i innhold", "Felles verdier med opphav i den konfucianske tradisjonen i regionen", "Geografisk nærhet og felles klimatiske betingelser", "En felles økonomisk utviklingsmodell etter 1945"],
      explanation: "Landingen bygger på at statene har forholdt seg tett til hverandre — gjennom utveksling og gjennom konflikt — og ikke på at de er like. Det er nettopp derfor heterogenitetskritikken ikke treffer den: den forutsetter ingen felles kjerne.",
    },
    {
      question: "Hva skal ikke balanseres i denne oppgaven?",
      options: ["At skrift, buddhisme og konfuciansk arv faktisk har spredt seg i regionen", "At spredningen forklarer det aller meste av likhetene mellom landene i dag", "At regionen bør behandles som én enhet i faglig sammenheng", "At konfliktene mellom statene veier tyngre enn fellestrekkene"],
      explanation: "Spredningen er et robust historisk funn, og å pakke den inn i «noen mener» er falsk balanse. Hvor mye den forklarer, hvordan regionen bør behandles og hvordan konflikter skal vektes, er derimot nettopp det drøftingen handler om.",
    },
  ],
};

export default quizData_exfac03east;
