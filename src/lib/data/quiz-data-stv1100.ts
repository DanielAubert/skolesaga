import type { QuizQuestion } from './quiz-data';

const quizData_stv1100: Record<string, QuizQuestion[]> = {
  'stv1100-0-1': [
    {
      question: "Hvor lang er den skriftlige skoleeksamenen i STV1100, og hvilket hjelpemiddel er tillatt?",
      options: ["4 timer, og eneste hjelpemiddel er en forhåndskontrollert ordbok", "6 timer, med alle trykte hjelpemidler og egne notater", "3 timer, helt uten hjelpemidler av noe slag underveis", "4 timer, med pensumboka som eneste tillatte hjelpemiddel"],
      explanation: "STV1100 har en 4-timers skriftlig skoleeksamen (Inspera i nyere år). Eneste tillatte hjelpemiddel er en forhåndskontrollert ordbok — ingen pensumbøker, notater eller nett.",
    },
    {
      question: "Hvordan settes karakteren i STV1100?",
      options: ["Ved helhetlig skjønn (A–F) uten tallfestede poenggrenser", "Ved å summere oppnådde oppgavepoeng med faste grenser for hver bokstavkarakter", "Utelukkende ut fra hvor mange sider besvarelsen fyller", "Bestått/ikke bestått uten bokstavkarakter, slik det er i emner uten skoleeksamen"],
      explanation: "Det finnes ingen tallfestede poenggrenser. Karakteren A–F settes ved helhetsvurdering, der svakhet ett sted kan veies opp av styrke et annet i fler-dels-sett.",
    },
    {
      question: "Hvilke to temaer er de to søylene som bærer nesten hvert eksamenssett i STV1100?",
      options: ["Rawls (rettferdighet) og frihet (Berlin vs. Pettit)", "Platons idéstat og Machiavellis realpolitiske maktlære", "Locke om eiendomsrett og Walzer om rettferdige sfærer", "Mill om ytringsfrihet og Nussbaum om menneskelige evner"],
      explanation: "Rawls testes i 6 av 8 sett og frihetsdebatten Berlin vs. Pettit i 5 av 8. Behersker man disse to perfekt, dekker man ryggraden i faget.",
    },
    {
      question: "Hva betyr mantraet «treff det sentrale poenget»?",
      options: ["Hvert tema har ett kjernepoeng som må med; et kort korrekt kjernesvar kan gi A", "Man skal alltid skrive så langt og bredt som overhodet mulig for å vise størst kunnskapsbredde", "Man bør begynne hver oppgave med en grundig innledning som plasserer temaet i fagets historie", "Man skal fokusere mest på presise litteraturhenvisninger med sidetall til hver enkelt pensumbok"],
      explanation: "Et kort, korrekt svar som treffer kjernepoenget (f.eks. Rawls uten uvitenhetssløret faller til svak) kan gi A, mens et langt svar som mister poenget faller til svak. Presisjon over bredde.",
    },
    {
      question: "En oppgave sier: «Gjør rede for Berlins skille mellom negativ og positiv frihet.» Hvilken sjanger er dette?",
      options: ["Redegjørelse (RED)", "Sitattolkning (SIT)", "Sammenligning (SAM)", "Anvendelse (ANV)"],
      explanation: "«Gjør rede for X» er fagets grunnform — redegjørelse (RED): presis, trinnvis rekonstruksjon av en tenkers argument.",
    },
    {
      question: "En oppgave sier: «Forklar hva Rawls mener med utdraget a).» Hvilken sjanger er dette?",
      options: ["Sitattolkning (SIT)", "Redegjørelse (RED)", "Sammenligning (SAM)", "Redegjør-og-drøft-hybrid (HYB)"],
      explanation: "«Forklar hva X mener med utdraget» er sitattolkning (SIT): parafraser utdraget, identifiser dets funksjon og plasser det i argumentets helhet.",
    },
    {
      question: "En oppgave sier: «Hva ville Pettit ment om en despot som gir stor personlig frihet?» Hvilken sjanger er dette?",
      options: ["Anvendelse (ANV)", "Redegjørelse (RED)", "Sammenligning (SAM)", "Sitattolkning (SIT)"],
      explanation: "«Hva ville X ment om dette?» er anvendelse (ANV): du skal bruke tenkerens begrepsapparat på det konkrete tilfellet — ikke bare gjengi teorien generelt.",
    },
    {
      question: "Hva er kjernen i sjangeren sammenligning (SAM)?",
      options: ["Redegjøre for begge posisjoner OG trekke fram eksplisitte likheter og forskjeller", "Gjengi kun den ene tenkeren grundig og utfyllende, og la den andre posisjonen stå uomtalt", "Tolke ett enkelt sitatutdrag isolert og løsrevet fra argumentet", "Skrive en lang og grundig innledning om begge tenkerne før selve sammenligningen begynner"],
      explanation: "I SAM er det ikke nok å gjengi begge — du må sammenligne dem langs eksplisitte dimensjoner med både likheter og forskjeller. Her måles selvstendighet.",
    },
    {
      question: "Hva kjennetegner redegjør-og-drøft-hybriden (HYB), den økende sjangeren fra 2023?",
      options: ["Solid redegjørelse først, deretter en kort, forbeholden selvstendig vurdering", "Kun en fri, personlig og engasjert mening om temaet uten noen forutgående redegjørelse", "Ren gjengivelse av nøyaktig samme teori to ganger, først kortfattet og så i utvidet form", "Utelukkende sitattolkning av alle utdragene a) til e)"],
      explanation: "HYB krever solid redegjørelse etterfulgt av en kort, forbeholden vurdering — gjerne med en innvending forankret i pensum. Sensor bruker skjønn og raushet, siden dette er et innføringsemne.",
    },
    {
      question: "Hvorfor er det direkte eksamensrelevant å trene på gamle oppgavesett i STV1100?",
      options: ["Fordi oppgaver gjenbrukes nesten uendret (Berlin-vs.-Pettit, Rawls-sitatoppgaven)", "Fordi de gamle settene alltid gir de nøyaktige fasitsvarene på nettopp årets eksamen", "Fordi hele eksamensformen legges om fra bunnen hvert år, slik at gamle sett er utdaterte", "Fordi det ikke finnes noe annet tilgjengelig pensum å øve på"],
      explanation: "Arkivet viser dokumentert oppgavegjenbruk: frihetsoppgaven og Rawls-sitatoppgaven går nesten uendret igjen, så trening på gamle sett er direkte relevant.",
    },
    {
      question: "Hva er den viktigste feilen ved å la én av flere obligatoriske deler stå blank (feil #6)?",
      options: ["En ubesvart del stenger for karakteren A", "Det gir automatisk stryk uansett resten", "Det er alltid best å perfeksjonere én del framfor å dekke alle", "Sensor teller da sidene i den besvarte delen"],
      explanation: "En ubesvart del stenger for A (men ikke nødvendigvis for bestått). Det er tryggere å rekke over alle påkrevde deler, om enn kortere, enn å la én stå blank.",
    },
    {
      question: "Hvorfor frarådes unødig innledning og avslutning i STV1100-besvarelser (feil #3)?",
      options: ["Oppvarming er bortkastet tid i et 4-timers essayfag; man skal gå rett på sak", "Sensor trekker konsekvent for korrekt rettskriving og tegnsetting i innledninger", "Innledninger er uttrykkelig forbudt ved lov på all universitetseksamen", "Avslutninger teller alltid negativt på den endelige karakteren automatisk"],
      explanation: "Mantraet «gå rett på sak» betyr at ingen innledning, avslutning eller litteraturhenvisninger kreves. Tid brukt på oppvarming er tid tapt på presist innhold.",
    },
    {
      question: "Hva menes med at «redegjørelse er kjernen, drøfting er bonusen» i STV1100?",
      options: ["Presis argumentrekonstruksjon er primærferdigheten; drøfting/sammenligning er en sekundær, økende ferdighet", "Drøfting og selvstendig vurdering vektes alltid aller tyngst på eksamen, mens ren redegjørelse bare er en birolle", "Man skal aldri drøfte i det hele tatt, kun gjengi teorien", "Redegjørelse og drøfting teller nøyaktig like mye i alle sett"],
      explanation: "Faget er tradisjonelt formulert som redegjørelsesspørsmål. Derfor er presis argumentrekonstruksjon primærferdigheten, mens drøfting/sammenligning er en sekundær, økende (2023→) ferdighet — det styrer tidsbruken.",
    },
    {
      question: "To kandidater svarer på «gjør rede for kjernen i Pettits frihetsbegrep». Kandidat A skriver tre brede sider om antikken, Berlin og Rousseau før hun så vidt nevner Pettit; kandidat B skriver en halv presis side som treffer ikke-dominans-poenget. Hvem gjør det best?",
      options: ["Kandidat B, fordi hun treffer det sentrale poenget presist og går rett på sak", "Kandidat A, fordi et lengre og bredere svar med flere tenkere alltid gir bedre karakter", "Kandidat A, fordi den store faglige bredden viser at hun kan mye mer", "Begge gjør det like godt, siden sensor til slutt bare teller antall ord"],
      explanation: "Kandidat B treffer det sentrale poenget (ikke-dominans) og går rett på sak. Kandidat A mister poenget under lavrelevant bredde (feil #2 og #3). Sensor teller ikke ord; presisjon avgjør.",
    },
  ],
  'stv1100-0-2': [
    {
      question: "Hva er de fire trinnene i firetrinns-redegjørelsen (RED), i riktig rekkefølge?",
      options: ["Plasser → gjengi posisjonen → rekonstruer trinnvis → illustrer med tekstens eksempel", "Innled bredt → oppsummer kort → konkluder → henvis til all relevant litteratur til slutt", "Parafraser utdraget → identifiser funksjon → plasser i argumentets helhet → bruk begrepene", "Sammenlign posisjonene → drøft dem → anvend teorien på et tilfelle → vurder forbeholdent"],
      explanation: "RED-oppskriften er: (1) plasser tenker og spørsmål, (2) gjengi posisjonen med kjernebegreper, (3) rekonstruer argumentet trinnvis, (4) illustrer med tekstens eget eksempel.",
    },
    {
      question: "Hva betyr mantraet «treff strukturen, ikke bare konklusjonen» i en redegjørelse?",
      options: ["Vis premissrekken som leder til konklusjonen, ikke bare selve konklusjonen", "Skriv en fyldig og velformulert innledning før du til slutt konkluderer med tenkerens syn", "Nevn selve konklusjonen så mange ganger som overhodet mulig", "Fokuser utelukkende på tenkerens endelige sluttsyn og hopp helt over hele begrunnelsen"],
      explanation: "Et svakt svar gjengir bare hva tenkeren konkluderer. Sensor vil se hvorfor — den trinnvise premissrekken (argumentets indre logikk) som leder dit.",
    },
    {
      question: "Hva er de fire trinnene i firetrinns-sitattolkningen (SIT) for hvert utdrag?",
      options: ["Parafraser → identifiser funksjon → plasser i helheten → bruk begrepene presist", "Oversett utdraget → oppsummer kort → gjenta hovedpoenget → avslutt", "Plasser tenkeren → gjengi posisjonen → rekonstruer trinnvis → illustrer med eksempel", "Les nøye → memorer → siter ordrett → kommenter til slutt"],
      explanation: "SIT-oppskriften per utdrag: (1) parafraser, (2) identifiser funksjonen (premiss/intuisjon/illustrasjon), (3) plasser i argumentets helhet, (4) bruk fagbegrepene presist.",
    },
    {
      question: "Et utdrag fungerer som et utsagn som støtter eller leder mot konklusjonen i argumentet. Hvilken funksjon har det?",
      options: ["Premiss", "Intuisjon", "Illustrasjon", "Konklusjon"],
      explanation: "Et premiss er et utsagn som bærer argumentets vekt ved å støtte eller lede mot konklusjonen.",
    },
    {
      question: "Et utdrag uttrykker en før-teoretisk overbevisning som teorien skal fange (f.eks. at slaveri er urett). Hvilken funksjon har det?",
      options: ["Intuisjon", "Premiss", "Illustrasjon", "Definisjon"],
      explanation: "En intuisjon er en før-teoretisk overbevisning teorien skal stemme overens med — hos Rawls de veloverveide overbevisningene i refleksiv likevekt. Den er et festepunkt, ikke et bevis.",
    },
    {
      question: "Et utdrag gir et konkret eksempel (barskap-nøkkelen, Odyssevs) som anskueliggjør poenget uten selv å bevise det. Hvilken funksjon har det?",
      options: ["Illustrasjon", "Konklusjon", "Premiss", "Intuisjon"],
      explanation: "En illustrasjon anskueliggjør poenget, men vekten ligger i premissene den viser. En vanlig feil er å behandle illustrasjonen som om den var selve argumentet.",
    },
    {
      question: "Hva krever kalibreringsregelen «behandle alle utdragene» i en a)–e)-oppgave?",
      options: ["Hvert utdrag må tolkes og plasseres i argumentets helhet", "Man velger ut det aller beste utdraget og hopper over resten", "Man oversetter alle utdragene ordrett og linje for linje uten kommentar", "Man behandler kun de utdragene som er skrevet på engelsk"],
      explanation: "Å konsentrere seg om ett utdrag og hoppe over resten (feil #4) svekker svaret vesentlig. Alle utdrag må behandles, om enn kortere per utdrag.",
    },
    {
      question: "Hva kjennetegner feil #5 i sitattolkning?",
      options: ["Å bare parafrasere utdraget løsrevet uten å angi funksjon og plassere det i argumentet", "Å bruke altfor mange innfløkte fagbegreper som ikke hører hjemme i utdraget", "Å behandle for mange av sitatutdragene samtidig i én setning", "Å skrive altfor kort og knapt om hvert enkelt utdrag"],
      explanation: "Feil #5 er å oversette utdraget linje for linje uten å plassere det i det overordnede argumentet. Da mangler trinn 2 (funksjon) og trinn 3 (plassering) av SIT-oppskriften.",
    },
    {
      question: "Hva kjennetegner et A-svar i redegjørelse/sitattolkning ved helhetsvurdering?",
      options: ["Det sentrale poenget truffet presist PLUSS minst ett subtilt ekstrapoeng og/eller alle utdrag plassert", "Det aller lengste svaret som rekker å dekke flest mulige tenkere", "Et svar med en svært grundig og velformulert innledning etterfulgt av en tydelig oppsummerende avslutning", "Et svar som gjengir selve konklusjonen presist uten noen begrunnelse"],
      explanation: "A krever at kjernepoenget treffes presist og at det tilføres et subtilt ekstrapoeng (Akse 3) og/eller (i SIT) at alle utdrag plasseres. Lengde er irrelevant.",
    },
    {
      question: "Hva skiller et C-svar fra et A-svar i disse sjangrene?",
      options: ["C har det sentrale poenget på plass, men er korrekt og flatt — det mangler det subtile ekstra som løfter til A", "C bommer fullstendig på det sentrale poenget og forveksler det gjennomgående med et helt annet og urelatert poeng", "C er som regel atskillig lengre og mer omstendelig enn et A-svar", "C inneholder gjennomgående rene faktafeil om tenkeren og posisjonen"],
      explanation: "På C-nivå er poenget riktig, men uten trinnvis dybde eller subtilitet. A krever i tillegg minst ett subtilt ekstrapoeng og/eller full plassering av alle utdrag.",
    },
    {
      question: "Hva kjennetegner et E-svar?",
      options: ["Det sentrale poenget er mistet eller bare antydet, med upresise begreper og utenomsnakk", "Det sentrale poenget er presist og trinnvis truffet, med et subtilt og løftende ekstratillegg", "Svaret er gjennomgående korrekt, men blir stående nokså flatt uten det subtile ekstrapoenget", "Svaret behandler alle sitatutdragene grundig og plasserer dem"],
      explanation: "På E-nivå glipper kjernepoenget, begrepene er upresise (feil #7) og svaret brer seg ut i utenomsnakk (feil #1, #2). I SIT hoppes utdrag over (#4) eller parafraseres løsrevet (#5).",
    },
    {
      question: "Hva er «det subtile ekstra poenget» (Akse 3)?",
      options: ["En nyanse som løfter et korrekt svar til meget godt — det veiledningene flagger som «veldig bra»", "En obligatorisk og velformulert innledning som alltid må stå aller først før alt annet i besvarelsen", "Antall sider man skriver utover det oppgitte minstekravet", "En fullstendig litteraturliste plassert bakerst i besvarelsen"],
      explanation: "Det subtile ekstra er A-markøren: f.eks. at det er muligheten (ikke handlingen) som er poenget, eller at ulike deler av en teori er ulikt godt begrunnet. Legg det til — men aldri på bekostning av det sentrale poenget.",
    },
    {
      question: "Omtrent hvor mye tid bør du sette av per utdrag i en a)–e)-sitattolkningsoppgave?",
      options: ["Cirka 8–12 minutter per utdrag, slik at alle blir behandlet", "Cirka 40–60 minutter på det viktigste utdraget og null på resten", "Ett minutt per utdrag for å rekke over andre oppgaver", "All tiden på det første utdraget, slik at de øvrige blir stående ubehandlet"],
      explanation: "Regn ~8–12 min per utdrag og fordel tiden slik at alle behandles — bedre å plassere alle kort enn å utbrodere ett og hoppe over resten.",
    },
    {
      question: "En kandidat skriver om Rawls: «Han mener de dårligst stilte skal prioriteres.» — og stopper der. Hva er hovedmangelen?",
      options: ["Svaret gir bare konklusjonen; det treffer ikke strukturen (premissrekken bak)", "Svaret er altfor langt og altfor bredt, og drukner hovedpoenget i mye lavrelevant stoff", "Svaret har med altfor mange ulike sitatutdrag på én gang, uten å skille dem fra hverandre", "Svaret bruker gjennomgående altfor presise fagbegreper"],
      explanation: "Å gjengi bare konklusjonen uten den trinnvise begrunnelsen (utgangsposisjon → uvitenhetsslør → maximin → forskjellsprinsipp) bryter med «treff strukturen, ikke bare konklusjonen».",
    },
    {
      question: "Hvorfor bør du IKKE innlede en redegjørelse med «Frihet har opptatt mennesker siden antikken …»?",
      options: ["Det er unødig innledning (feil #3); man skal gå rett på tenkeren (trinn 1)", "Det er rett og slett faktisk feil at frihet i det hele tatt har opptatt mennesker", "Innledninger er uttrykkelig forbudt på all universitetseksamen", "Sensor trekker konsekvent for rettskriving i alle innledninger"],
      explanation: "Oppvarming er bortkastet tid i et 4-timers essayfag (feil #3). Trinn 1 i RED er å plassere tenkeren og spørsmålet i én setning — gå rett på sak.",
    },
    {
      question: "I en SIT-oppgave inneholder et utdrag setningen «Tenk på tjeneren i det store huset som alltid er prisgitt herrens humør.» Hvilken funksjon er dette mest sannsynlig, og hva må du gjøre med det?",
      options: ["Illustrasjon — du må plassere det i argumentets helhet, ikke bare oversette det", "Premiss — du kan her trygt nøye deg med å parafrasere det ordrett og linje for linje", "Intuisjon — utdraget kan trygt hoppes helt over, siden det ikke bærer noen del av argumentets vekt", "Konklusjon — utdraget trenger overhodet ingen videre tolkning"],
      explanation: "«Tenk på …» signaliserer en illustrasjon som anskueliggjør poenget. Den må plasseres i helheten (den viser at materiell velstand ikke opphever ufrihet), ikke bare oversettes løsrevet (feil #5).",
    },
  ],
  'stv1100-0-3': [
    {
      question: "Hva er de sentrale trinnene i en sammenligning (SAM)?",
      options: ["Posisjon A → posisjon B → 2–4 eksplisitte dimensjoner (likheter OG forskjeller) → kort vurdering", "Gjengi kun den ene tenkeren grundig og utfyllende, og avslutt der uten å nevne den andre posisjonen", "Parafraser hvert utdrag → identifiser funksjonen → plasser det i argumentets helhet → bruk fagbegrepene presist", "Innled bredt → oppsummer begge posisjonene → konkluder → avslutt med en samlet litteraturhenvisning"],
      explanation: "SAM krever begge posisjoner presist redegjort, deretter 2–4 eksplisitte sammenligningsdimensjoner med både likheter og forskjeller, og gjerne en kort forbeholden vurdering.",
    },
    {
      question: "Hva er en sammenligningsdimensjon?",
      options: ["En eksplisitt akse begge posisjoner måles langs, f.eks. «hva teller som ufrihet?»", "En bred innledning som presenterer begge tenkerne før sammenligningen", "Et enkelt sitatutdrag som er merket med bokstaven a)", "Antall sider man velger å bruke på hver av tenkerne"],
      explanation: "En dimensjon er en eksplisitt akse der de to posisjonene måles mot hverandre. Egne, treffende dimensjoner er selvstendighet (Akse 4) og A-markøren i SAM.",
    },
    {
      question: "En kandidat skriver en hel side om Tenker F og en hel side om Tenker D, og stopper der. Hvilken feil er dette?",
      options: ["#8 — ren gjengivelse der oppgaven ber om sammenligning (to referater er ikke en SAM)", "#9 — å overse hele anvendelses-vrien og bare gjengi teorien helt generelt uten å bruke den", "#4 — å hoppe over ett eller flere av sitatutdragene", "#3 — unødig og altfor bred innledning som forsinker selve sammenligningen av tenkerne"],
      explanation: "To atskilte redegjørelser ved siden av hverandre er ikke en sammenligning (feil #8). Det mangler eksplisitte dimensjoner som setter posisjonene i forhold til hverandre.",
    },
    {
      question: "Hva kjennetegner en ensidig sammenligning som svekker svaret?",
      options: ["Den rommer bare forskjeller (eller bare likheter), eller behandler bare den ene tenkeren grundig", "Den bruker altfor mange ulike og overlappende eksplisitte sammenligningsdimensjoner på én og samme gang", "Den gir begge posisjonene nøyaktig like presis behandling langs hver eneste dimensjon som blir nevnt", "Den lander til slutt med en kort og forbeholden vurdering"],
      explanation: "En fullstendig SAM veier både likheter OG forskjeller langs hver dimensjon og gir begge posisjoner like presis behandling. Ensidighet er en typisk C-svakhet.",
    },
    {
      question: "Hva er de sentrale trinnene i en anvendelse (ANV)?",
      options: ["Hent det relevante begrepet → legg situasjonen på begrepet → trekk konklusjonen X ville trukket", "Gjengi hele teorien til X helt generelt og overlat til leseren selv å koble den til den konkrete saken", "Sammenlign X med en annen tenker langs flere dimensjoner", "Parafraser situasjonen ordrett uten å bruke noe teori"],
      explanation: "ANV krever at du henter fram det begrepet som biter på saken, legger situasjonen på begrepet, og trekker konklusjonen tenkeren ville trukket — teorien må brukes, ikke bare gjengis.",
    },
    {
      question: "Hva sier ANV-testen «bruk teorien, ikke bare gjengi den»?",
      options: ["Spør om en leser som ikke kjenner saken ville skjønt hva X mener om nettopp den; hvis du bare gjenga teorien, er svaret nei", "Spør om du har rukket å ta i bruk nok presise fagbegreper fra pensum", "Spør om teksten din er blitt lang nok totalt sett", "Spør om du har husket å ta med en innledning"],
      explanation: "En god ANV nevner situasjonens detaljer og viser hvordan begrepet griper inn i akkurat dem. Å gjengi teorien generelt uten å anvende den er feil #9.",
    },
    {
      question: "Hvilken feil begår en kandidat som på «hva ville Pettit ment om den liberale despoten?» bare gjengir Pettits ikke-dominans-teori generelt?",
      options: ["#9 — overse anvendelses-vrien (teorien er ikke brukt på despoten)", "#8 — ren gjengivelse i en oppgave som egentlig ber om en full sammenligning", "#4 — å hoppe over ett av sitatutdragene", "#1 — miste det sentrale poenget om struktur og bare gjengi Pettits konklusjon"],
      explanation: "Feil #9 er å gjengi teorien generelt uten å bruke den på den konkrete situasjonen (despoten). ANV krever at begrepet legges på tilfellet.",
    },
    {
      question: "Hvilke er de klassiske anvendelsessituasjonene i STV1100-arkivet?",
      options: ["Den liberale despoten, privat veldedighet og Foster Wallace-sitatet", "Uvitenhetssløret, maximin-regelen og selve forskjellsprinsippet hos Rawls", "Barskap-nøkkelen, Odyssevs ved masten og refleksiv likevekt", "Machiavellis fyrstelære, Platons idéstat og Nussbaums teori om menneskelige evner"],
      explanation: "Den liberale despoten (→ Pettits dominanspoeng), privat veldedighet (→ velferdsrett vs. veldedighet) og Foster Wallace-sitatet (→ positiv frihet) er de gjennomgående ANV-casene.",
    },
    {
      question: "Hva kjennetegner drøftingshybriden (HYB), sjangeren som vokser fra 2023?",
      options: ["Solid redegjørelse først, deretter én–to pensumforankrede innvendinger og en kort, forbeholden vurdering", "Utelukkende en helt fri, personlig og engasjert mening om temaet uten noen som helst forutgående redegjørelse", "To atskilte referater satt ved siden av hverandre uten sammenligning", "Ordrett gjengivelse av samtlige sitatutdrag a) til e)"],
      explanation: "HYB krever solid redegjørelse (vektes tyngst), deretter innvendinger helst forankret i pensum, og en kort forbeholden vurdering — ikke et nytt referat.",
    },
    {
      question: "Hva er en «forbeholden vurdering» i en drøftingsdel?",
      options: ["En vurdering som veier for og mot uten å felle en skråsikker dom", "En kategorisk og skråsikker konklusjon om at tenkeren rett og slett tar feil", "En ren gjentakelse av redegjørelsens innhold satt inn under overskriften vurdering", "En fullstendig liste over relevante litteraturhenvisninger"],
      explanation: "En forbeholden vurdering veier styrker mot svakheter og lander forsiktig. Forbehold er et tegn på modenhet, ikke usikkerhet.",
    },
    {
      question: "Hvorfor løfter en pensumforankret innvending en drøftingshybrid?",
      options: ["Den er hentet fra debatten (f.eks. Brison mot Mill, feministisk kritikk mot Rawls) og viser at du kjenner mer enn selve posisjonen", "Den er oppfunnet av kandidaten på stedet og viser original kreativitet", "Den erstatter fullstendig behovet for en forutgående redegjørelse", "Den gjør uansett svaret lengre, uavhengig av innholdet"],
      explanation: "En innvending forankret i pensum/forelesning (Brison mot Mill; den feministiske kritikken av Rawls; syke/svake-innvendingen) viser at du kjenner debatten, ikke bare posisjonen.",
    },
    {
      question: "Hva innebærer «raushetsterskelen» i vurderingen av drøftingsdelen?",
      options: ["STV1100 er et innføringsemne, så sensor bruker skjønn og moderat terskel — en forsvarlig, forankret refleksjon holder", "Man må levere fullstendig original og publiserbar filosofi på forskningsnivå bare for i det hele tatt å bestå selve emnet", "Drøftingsdelen teller alltid mest av alt i den samlede vurderingen", "Enhver innvending gir helt automatisk aller høyeste karakter"],
      explanation: "Som innføringsemne krever STV1100 ikke original filosofi i drøftingsdelen. En gjennomtenkt, forankret og forbeholden vurdering er tilstrekkelig. Der en oppgave er erklært vanskelig, senkes forventningene ytterligere.",
    },
    {
      question: "Hva menes med kalibreringsregel 1, «redegjørelse er kjernen, drøfting er bonusen», anvendt på SAM og HYB?",
      options: ["Den presise redegjørelsen vektes tyngst; sammenlignings-/drøftingsdelen løfter til A men bærer aldri et svar alene", "Man skal droppe hele redegjørelsen fullstendig og heller gå rett på den selvstendige drøftingen fra aller første setning", "Drøfting teller alltid atskillig mer enn selve redegjørelsen", "Redegjørelse og drøfting teller nøyaktig like mye i alle sett"],
      explanation: "Selv i SAM/HYB er den presise redegjørelsen tyngst. Sikre begge redegjørelsene (SAM) eller hovedredegjørelsen (HYB) før du bruker tid på vurderingen.",
    },
    {
      question: "Hva er hovedforskjellen mellom drøfting (HYB) og sammenligning (SAM) som ferdigheter?",
      options: ["SAM setter to posisjoner mot hverandre langs dimensjoner; HYB vurderer én posisjons holdbarhet ved å veie innvendinger", "De to sjangrene er fullstendig identiske og kan derfor uten videre brukes helt om hverandre på enhver enkelt eksamensoppgave", "SAM krever sitatutdrag, mens HYB ikke krever noen redegjørelse", "HYB er alltid enklere og krever ingen form for selvstendighet"],
      explanation: "SAM krever egne dimensjoner mellom to tenkere (Akse 4); HYB krever en forbeholden, forankret vurdering av én posisjon. Å blande dem betyr å ikke treffe det oppgaven ber om.",
    },
    {
      question: "Hva er A-markøren (Akse 4) i sammenlignings- og drøftingsdelen?",
      options: ["Selvstendighet: egne, treffende sammenligningsdimensjoner eller en forbeholden, forankret vurdering", "En svært grundig innledning etterfulgt av en oppsummerende avslutning", "Den samlede lengden på hele besvarelsen", "Antall sitatutdrag man har fått med i svaret"],
      explanation: "Selvstendighet (Akse 4) — å se en sammenheng eller spenning selv, framfor å referere — skiller A fra C i drøftings-/sammenligningsdelen.",
    },
    {
      question: "En kandidat avslutter en «gjør rede for X og drøft kort»-oppgave med å gjenta Xs posisjon en gang til. Hva er feilen?",
      options: ["#8 — nytt referat i stedet for en reell vurdering", "#9 — å overse hele anvendelses-vrien og ikke bruke teorien", "#4 — å hoppe over ett av sitatutdragene i en a)–e)-oppgave", "#7 — gjennomgående upresise fagbegreper"],
      explanation: "Å gjenta redegjørelsen i drøftingsdelen er feil #8 — det er ikke en vurdering. HYB krever at du veier innvendinger og lander forbeholdent, ikke at du refererer på nytt.",
    },
  ],
  'stv1100-1-1': [
    {
      question: "Hva er negativ frihet hos Berlin?",
      options: ["Fravær av hindring påført av andre mennesker", "Fravær av enhver hindring, også de rent naturlige", "Evnen til å realisere sitt egentlige, rasjonelle selv", "Statens positive plikt til å sikre alle borgernes velferd"],
      explanation: "Negativ frihet = fravær av hindring *påført av andre mennesker* («hvor mange dører står åpne») — ofte skjerpet (Hayek-nært) til *forsettlig* innblanding. «Fravær av enhver hindring» mister grunnskillet andres hindring vs. manglende egen evne; selvrealisering er positiv frihet.",
    },
    {
      question: "Hvilket av disse ordene hører til Berlins *negative* frihetsbegrep (og ikke til det positive)?",
      options: ["Forsettlig", "Rasjonelt", "Selvrealisering", "Egentlig"],
      explanation: "«Forsettlig» hører til den negative siden — en vanlig (Hayek-nær) skjerping av grunnskillet «hindring fra andre vs. manglende egen evne». «Egentlig»/«rasjonelt» hører til positiv frihet.",
    },
    {
      question: "Er fattigdom i seg selv ufrihet i Berlins negative forstand?",
      options: ["Nei — i utgangspunktet manglende evne, ikke en hindring påført av andre", "Ja — enhver hindring, også manglende evne og ressurser, er en form for ufrihet", "Ja — fordi fattigdommen alltid skyldes statens innblanding i markedet og fordelingen", "Bare dersom fattigdommen er helt og holdent selvforskyldt"],
      explanation: "Fattigdom er i utgangspunktet manglende evne, ikke en hindring fra en annen vilje. Berlin kaller den et onde, men åpner selv for at den *kan* være ufrihet dersom den skyldes menneskeskapte ordninger andre opprettholder — å kalle enhver manglende evne «ufrihet» tømmer likevel begrepet.",
    },
    {
      question: "Hva er positiv frihet hos Berlin?",
      options: ["Selvstyre/selvrealisering — å være herre over seg selv", "Fravær av forsettlig og bevisst innblanding fra andre mennesker", "Retten til å eie og fritt disponere egen eiendom", "Fravær av alle naturlige og fysiske hindringer"],
      explanation: "Positiv frihet spør «hvem styrer meg?» — selvstyre. Fravær av innblanding er negativ frihet.",
    },
    {
      question: "Hvilket skille gjør positiv frihet farlig ifølge Berlin?",
      options: ["Skillet mellom det empiriske og det «egentlige» selv", "Selve skillet mellom negativ og positiv frihet som sådan", "Skillet mellom statens myndighet og det enkelte individs rettigheter", "Skillet mellom rettslige lover og moralske normer i samfunnet"],
      explanation: "Deler man personen i et empirisk og et «egentlig» selv, kan andre påberope seg å kjenne ditt sanne jeg og tvinge deg «for ditt eget beste».",
    },
    {
      question: "Hvorfor advarer Berlin mot positiv frihet?",
      options: ["Fordi den kan brukes til å omdøpe tvang til frigjøring", "Fordi den i bunn og grunn er nøyaktig det samme som negativ frihet", "Fordi den er logisk selvmotsigende i seg selv", "Fordi den nekter folk retten til å eie og disponere eiendom"],
      explanation: "Når frihet = å realisere det «egentlige» selv, kan tvang fremstilles som frigjøring («vi tvinger deg dit ditt sanne jeg vil»).",
    },
    {
      question: "Hva er «den liberale despoten» et eksempel på?",
      options: ["At negativ frihet kan finnes uten selvstyre (positiv frihet)", "At den positive friheten alltid følger helt direkte av den negative", "At all frihet i bunn og grunn egentlig er en form for positiv frihet", "At enhver form for tvang alltid gir ufrihet"],
      explanation: "Despoten gir personlig frihet uten selvstyre — negativ og positiv frihet er logisk uavhengige.",
    },
    {
      question: "Er borgerne under en liberal despot frie i Berlins forstand?",
      options: ["Negativt kanskje ja (hvis han ikke blander seg inn), men positivt nei", "Ja, borgerne er fullt ut frie på begge måter samtidig", "Nei, de er ikke på noen som helst måte frie", "Bare positivt frie, men ikke negativt frie"],
      explanation: "Blander despoten seg faktisk ikke inn, er borgerne negativt ganske frie, men de har intet selvstyre — positivt ufrie.",
    },
    {
      question: "Hva er tvang i Berlins negative forstand?",
      options: ["Bevisst innsnevring av handlingsrommet, utført av andre", "Enhver form for begrensning av hva du i praksis faktisk kan gjøre", "Manglende evne til å nå et mål man har satt seg", "Egne indre impulser og drifter du ikke behersker"],
      explanation: "Tvang forutsetter en *annen* aktør som med vilje stenger en dør. Manglende evne og indre impulser er ikke tvang negativt sett.",
    },
    {
      question: "Hvilken av disse innskrenker negativ frihet?",
      options: ["Et lovforbud vedtatt av myndighetene", "At du ikke er i stand til å puste under vann", "At du er altfor fattig til å kunne reise", "At du helt mangler talent for musikk"],
      explanation: "Forbudet er en hindring påført av andre (staten) — bevisst, altså også forsettlig. De øvrige er naturlige grenser eller manglende evne.",
    },
    {
      question: "Hva menes med at negativ frihet handler om «hvor mange dører som står åpne»?",
      options: ["Friheten måles ved handlingsmuligheter ingen andre bevisst har stengt", "Friheten måles ved hva du i praksis faktisk klarer å få gjennomført selv", "Friheten måles ved graden av selvstyre den enkelte faktisk har oppnådd", "Friheten måles ved hvor mye eiendom man faktisk eier"],
      explanation: "Bildet fanger fravær av hindring påført av andre, ikke faktisk evne eller selvstyre.",
    },
    {
      question: "Hva er det subtile ekstra poenget som løfter et Berlin-svar til A?",
      options: ["At Berlin problematiserer positiv frihet, ikke bare beskriver den", "At Berlin fullstendig avviser og forkaster hele den negative friheten", "At Berlin mener at all frihet egentlig er positiv frihet", "At Berlin i praksis likestiller frihet med lykke og velvære"],
      explanation: "A-markøren er å vise at Berlin ser en *fare* i positiv frihet (misbruk til tvang), ikke bare gjengi definisjonen.",
    },
    {
      question: "Avviser Berlin positiv frihet fullstendig?",
      options: ["Nei — han vil holde den atskilt fra negativ frihet fordi sammenblanding er farlig", "Nei — han foretrekker tvert imot den positive friheten framfor den negative", "Ja — han mener at den positive friheten er helt meningsløs", "Ja — den positive friheten er i praksis identisk med tvang"],
      explanation: "Berlin anerkjenner at selvstyre er et ekte gode; han vil bare holde begrepene rene fordi sammenblandingen er politisk farlig.",
    },
    {
      question: "Hva er «det egentlige selv» i positiv frihet?",
      options: ["Et påstått høyere, rasjonelt jeg som «vet bedre» enn de faktiske ønskene", "Statens offisielle og bindende definisjon av hva det gode liv egentlig består i", "Personens egne faktiske og foreliggende ønsker, slik de uttrykkes i øyeblikket", "Selve fraværet av ytre innblanding fra andre"],
      explanation: "Det «egentlige»/sanne selv står mot det empiriske selv (faktiske ønsker) — og er farekilden i positiv frihet.",
    },
    {
      question: "Hvilken feil begår kandidaten som definerer negativ frihet som «fravær av enhver hindring»?",
      options: ["Feil #1/#7 — mister grunnskillet «andres hindring vs. manglende egen evne»", "Ingen feil — dette er tvert imot en presis og korrekt definisjon", "Feil #3 — en helt unødig og bred innledning", "Feil #6 — besvarer bare halvparten av settet"],
      explanation: "«Fravær av enhver hindring» viser bort grunnskillet: da teller også naturlige grenser og manglende evne som ufrihet — kjernefeilen.",
    },
    {
      question: "En arbeidsgiver truer med oppsigelse hvis du stemmer «feil». Er dette negativ ufrihet?",
      options: ["Ja — trusselen er bevisst hindring fra en annen aktør", "Nei — dette er utelukkende en indre bekymring hos deg selv", "Nei — det reises jo ingen fysisk hindring her", "Bare dersom du faktisk ender opp med å bli sagt opp"],
      explanation: "Trusselen er en hindring påført av en annen aktør — og attpåtil en bevisst, forsettlig en; den innsnevrer handlingsrommet uansett om den realiseres.",
    },
    {
      question: "Hvilket spørsmål stiller positiv frihet, i motsetning til negativ?",
      options: ["«Hvem styrer meg?»", "«Hvor mange dører står åpne?»", "«Hvor mye eiendom har jeg?»", "«Hvor rik er staten?»"],
      explanation: "Positiv frihet spør etter selvstyre («hvem styrer»); negativ frihet spør etter fravær av hindring («hvor mange dører»).",
    },
    {
      question: "Hva peker den liberale despoten frem mot i frihetsdelen?",
      options: ["Pettits begrep om dominans/ikke-dominans (kap. 1.2)", "Rawls' berømte uvitenhetsslør bak i selve utgangsposisjonen", "Lockes tanke om den opprinnelige samfunnskontrakten", "Machiavellis råd til den handlekraftige fyrsten om maktbruk"],
      explanation: "For Pettit er borgerne likevel ufrie fordi de domineres — despoten *kan* gripe inn. Det er broen til kap. 1.2.",
    },
    {
      question: "Hva er verdipluralisme hos Berlin?",
      options: ["At det finnes flere ekte, uforenlige goder", "At alle verdier i bunn og grunn egentlig er én og samme", "At bare friheten er et virkelig ekte gode, alt annet er midler", "At verdiene til slutt bestemmes av staten og dens lover"],
      explanation: "Verdipluralismen er bakgrunnen for Berlins skepsis mot at én «sannhet» om det gode liv skal tvinges på alle.",
    },
    {
      question: "Hvilken funksjon har utdrag a) (om negativ frihet) i Berlins argument?",
      options: ["Definisjon/premiss — det fastlegger hva negativ frihet er", "En ren illustrasjon av den positive frihetens innhold hos Berlin", "Et direkte motargument rettet mot Berlin selv", "En historisk digresjon helt uten funksjon i teksten"],
      explanation: "a) definerer negativ frihet (fravær av hindring påført av andre) og bærer det sentrale poenget — grunnmuren i den negative delen.",
    },
    {
      question: "Hvilken funksjon har utdrag b) (empirisk vs. egentlig selv)?",
      options: ["Kritisk premiss — det avdekker faren i positiv frihet", "Berlins endelige konklusjon om at all frihet i praksis er umulig", "En helt nøytral definisjon av positiv frihet uten kritisk brodd", "En ren illustrasjon av hvordan negativ frihet arter seg"],
      explanation: "b) viser mekanismen bak «tvang til frihet» — det er broen fra beskrivelse til advarsel, ikke en nøytral definisjon.",
    },
    {
      question: "Hva er forskjellen på personlig og politisk frihet i despot-caset?",
      options: ["Personlig frihet (privatliv) kan finnes uten politisk frihet (medbestemmelse)", "Politisk frihet (medbestemmelse) gir helt automatisk også full personlig frihet", "De to formene for frihet er alltid nøyaktig det samme", "Personlig frihet forutsetter alltid en form for selvstyre"],
      explanation: "Despoten gir personlig frihet uten politisk frihet — de to følger ikke hverandre.",
    },
    {
      question: "Hvorfor sier Berlin at manglende evne ikke er ufrihet?",
      options: ["Fordi ufrihet krever en annen vilje som bevisst stenger en dør", "Fordi manglende evne i praksis nesten alltid er helt selvforskyldt", "Fordi evne og frihet i bunn og grunn er ett og det samme begrepet", "Fordi staten uansett har det hele og fulle ansvaret"],
      explanation: "Uten en hindring påført av en annen aktør er det ingen negativ ufrihet — bare en begrensning i egen evne.",
    },
    {
      question: "Hva binder kapittel 1.1 sammen med 1.2 (drøftingsaksen)?",
      options: ["Spørsmålet om negativ frihet er nok, eller om ikke-dominans trengs", "Spørsmålet om hvordan rettferdighet forstått som rimelighet skal sikres", "Spørsmålet om hvem som til syvende og sist eier staten", "Spørsmålet om nivået på skatt og velferdsordninger"],
      explanation: "Den liberale despoten reiser spørsmålet Pettit svarer på: rekker Berlins negative frihet? Det er broen til kap. 1.2.",
    },
  ],
  'stv1100-1-2': [
    {
      question: "Hva er frihet ifølge Pettit?",
      options: ["Ikke-dominans — fravær av muligheten for ukontrollert innblanding", "Selve fraværet av all faktisk innblanding fra andre i det man gjør og velger", "Selvrealisering av det egentlige, rasjonelle selv", "Retten til å eie og fritt disponere privat eiendom uten inngrep fra staten"],
      explanation: "Pettit: frihet = ikke-dominans (fravær av vilkårlig makt over deg). Fravær av faktisk innblanding er Berlin; selvrealisering er positiv frihet (Berlin).",
    },
    {
      question: "Hva er dominans hos Pettit?",
      options: ["Evne til innblanding uten den andres kontroll", "Manglende ressurser og midler til å bruke friheten sin", "Faktisk innblanding i en annens frie valg og handlinger", "All statlig lovgivning betraktet som sådan, uansett innhold"],
      explanation: "Dominans = evne til ukontrollert innblanding; selve *muligheten* er ufrihet, uansett om innblandingen skjer.",
    },
    {
      question: "Er slaven med en snill herre som aldri gir ordre fri, ifølge Pettit?",
      options: ["Nei — han domineres fordi herren *kan* blande seg vilkårlig inn", "Ja — det skjer jo overhodet ingen faktisk innblanding fra herrens side", "Ja — han har jo full negativ frihet slik Berlin definerer begrepet", "Bare dersom herren uttrykkelig lover å aldri gripe inn"],
      explanation: "Dominans ligger i muligheten. Friheten avhenger av herrens vilje, og det er selve avhengigheten som er ufrihet.",
    },
    {
      question: "Hva er det sentrale poenget i Pettits frihetsbegrep?",
      options: ["At *muligheten* for ukontrollert innblanding er frihetsberøvelse", "At absolutt all form for innblanding uansett alltid er en form for ufrihet", "At kun ren fysisk tvang egentlig regnes som ufrihet", "At frihet er å realisere sitt sanne, egentlige selv"],
      explanation: "Mister du «muligheten»/«ukontrollert», mister du Pettit og faller tilbake til Berlin.",
    },
    {
      question: "Hva kjennetegner kontrollert innblanding hos Pettit?",
      options: ["Den berørte har kontroll over den, så den reduserer ikke friheten", "Den utøves alltid av staten og er derfor per definisjon alltid ufrihet", "Den skjer helt uten den berørtes egen kontroll", "Den skyldes utelukkende ren ressurssvikt hos den enkelte"],
      explanation: "Kontrollert innblanding (Odyssevs, barskap-nøkkelen, lov under borgerkontroll) berøver ikke frihet — bare ukontrollert innblanding gjør det.",
    },
    {
      question: "Hva illustrerer Odyssevs ved masten?",
      options: ["At selvpålagt, kontrollert binding ikke berøver frihet", "At absolutt all form for binding uansett er en form for ufrihet", "At staten i praksis alltid dominerer sine egne borgere gjennom lov", "At non-vitiation er et verre frihetstap enn dominans"],
      explanation: "Bindingen skjer på Odyssevs' egen forhåndsordre — den er kontrollert, ikke ukontrollert innblanding.",
    },
    {
      question: "Hva er non-vitiation hos Pettit?",
      options: ["Å faktisk ha midlene og ressursene til å utnytte friheten man har", "Frihetsinnskrenkning som skyldes ren ressurssvikt eller manglende egen evne", "Evne til ukontrollert innblanding i en annens frie valg og handlinger", "Å stå under en annen persons vilkårlige makt"],
      explanation: "Non-vitiation er at ressursbetingelsen er oppfylt — man har midlene. Svikter den (*vitiation*: ressurssvikt), svekkes friheten, men det er et svakere frihetstap enn dominans (#7).",
    },
    {
      question: "Hvordan rangerer Pettit komponentene?",
      options: ["Innblandings-/dominanskomponentene (a)/(b) veier tyngre enn ressurskomponentene (c)/(d)", "(c)/(d), altså ressurskomponentene, veier alltid aller tyngst av alle komponentene hos Pettit", "Alle de fire komponentene veier nøyaktig like tungt", "Bare komponent (a) teller egentlig med i det hele tatt"],
      explanation: "Frihet fra dominans er mer grunnleggende enn ressurser til å bruke friheten — å få dette med er en A-markør.",
    },
    {
      question: "Hva ville Pettit sagt om den liberale despoten?",
      options: ["At borgerne er ufrie fordi de domineres — han *kan* gripe inn", "At de er fullt ut frie nettopp fordi han jo faktisk ikke griper inn", "At de har positiv frihet, men mangler negativ frihet under despoten", "At hele spørsmålet i grunnen er meningsløst"],
      explanation: "For Pettit er borgerne dominert fordi despoten kan gripe vilkårlig inn — kontrasten til Berlins «negativt fri».",
    },
    {
      question: "Hva er forskjellen på Berlins og Pettits svar på despot-caset?",
      options: ["Berlin: negativt fri (ingen faktisk innblanding). Pettit: ufri (dominert)", "Begge to hevder at borgerne under despoten i grunnen er fullt positivt frie", "De to tenkerne gir i praksis nøyaktig identiske svar", "Berlin sier ufri, mens Pettit tvert imot sier fri"],
      explanation: "Despoten er testcaset der ikke-dominans skiller seg fra negativ frihet.",
    },
    {
      question: "Blander man ikke-dominans og non-vitiation, hvilken feil begår man?",
      options: ["Feil #7 — upresise begreper", "Feil #3 — en helt unødig og bred innledning", "Feil #6 — besvarer bare halve settet", "Ingen feil, de er synonymer"],
      explanation: "Dominans = å stå under vilkårlig makt; non-vitiation = å ha ressursene i behold (svikten kalles vitiation). Ulike kategorier (#7).",
    },
    {
      question: "Hvilken frihetstradisjon henter Pettit fram?",
      options: ["Den republikanske (romersk-republikanske)", "Den positive selvrealiseringstradisjonen etter Rousseau", "Den liberale frihetstradisjonen etter Berlin", "Den klassiske utilitaristiske tradisjonen etter Bentham"],
      explanation: "Republikansk frihet = å ikke være underlagt vilkårlig makt; kontrasterer den liberale tradisjonen (faktisk innblanding).",
    },
    {
      question: "Betyr Pettits teori at all statlig innblanding gjør borgerne ufrie?",
      options: ["Nei — innblanding under borgerkontroll er kontrollert og berøver ikke frihet", "Ja — absolutt enhver form for statlig lov er i seg selv en form for ren dominans", "Ja — staten er jo per definisjon alltid en despot", "Bare dersom staten faktisk er demokratisk styrt"],
      explanation: "En lov borgerne har innflytelse over er kontrollert innblanding, ikke dominans. Slik unngår Pettit at staten alltid gjør ufri.",
    },
    {
      question: "Hva illustrerer barskap-nøkkelen?",
      options: ["At innblanding på egne, endrebare vilkår er kontrollert — ingen dominans", "At absolutt all form for binding uansett alltid ender opp som en form for ufrihet", "At ren ressurssvikt i seg selv utgjør dominans på linje med en herres makt", "At staten i praksis alltid dominerer borgerne"],
      explanation: "Å be en venn holde nøkkelen på vilkår man selv rår over og kan endre, er kontrollert innblanding.",
    },
    {
      question: "Hvorfor er ikke-dominans mer enn fravær av faktisk innblanding?",
      options: ["Fordi det også er fravær av avhengighet av en annens vilje", "Fordi det i tillegg krever full økonomisk likhet mellom alle borgere", "Fordi det i bunn og grunn er det samme som positiv frihet", "Fordi det utelukkende gjelder forholdet til staten"],
      explanation: "A-markøren: ufriheten ligger i avhengigheten (muligheten for ukontrollert innblanding), ikke bare i faktisk innblanding.",
    },
    {
      question: "Hvilken feil begår kandidaten som definerer ikke-dominans som «fravær av innblanding»?",
      options: ["Feil #1 — mister kontroll-/dominanspoenget og faller tilbake til Berlin", "Feil #8 — refererer hele teorien på nytt igjen i selve drøftingsdelen til slutt", "Feil #4 — hopper over ett av sitatutdragene", "Ingen feil i det hele tatt — dette er nettopp Pettits definisjon av ikke-dominans"],
      explanation: "Uten «mulig ukontrollert innblanding» mister man kjernen — det er nettopp dominansbegrepet som skiller Pettit fra Berlin.",
    },
    {
      question: "Hva er «vilkårlig makt» hos Pettit?",
      options: ["Makt som kan utøves uten den berørtes kontroll, etter innehaverens forgodtbefinnende", "Makt som uunngåelig ender opp med å bli utøvd på en urettferdig måte", "Enhver form for statlig makt betraktet som sådan", "Makt som mangler de nødvendige ressursene bak seg"],
      explanation: "Å stå under vilkårlig makt er ufrihet selv om makten aldri brukes — kjernen i dominans.",
    },
    {
      question: "Hva er funksjonen til utdrag c) (om den liberale despoten) i Pettits argument?",
      options: ["Anvendelse/illustrasjon — det viser hvor ikke-dominans slår Berlin", "En helt nøytral og rent beskrivende definisjon av selve frihetsbegrepet", "Et direkte motargument rettet mot Pettit selv", "En historisk digresjon uten funksjon i teksten"],
      explanation: "c) anvender dominansbegrepet på despoten og avslører grensen for Berlins negative frihet.",
    },
    {
      question: "«Deres frihet er en gave han kan ta tilbake» — hva uttrykker dette?",
      options: ["At avhengigheten av herskerens vilje selv er ufrihet", "At faktisk innblanding alltid er helt nødvendig for at ufrihet skal oppstå", "At despoten egentlig er en god og velvillig hersker mot sine borgere", "At non-vitiation i grunnen er det samme som dominans"],
      explanation: "Bildet bærer det sentrale poenget: dominans er mulighet, ikke faktisk innblanding.",
    },
    {
      question: "Kan man dominere noen uten noensinne å utøve tvang?",
      options: ["Ja — evnen og muligheten til ukontrollert innblanding er nok", "Nei — dominans forutsetter alltid at det faktisk blir utøvd tvang", "Bare dersom offeret selv er klar over at innblandingen finner sted", "Bare i teorien, men aldri i noe praktisk tilfelle av dominans"],
      explanation: "Dette er kjerneinnsikten Berlins negative frihet ikke registrerer: dominans uten faktisk tvang.",
    },
    {
      question: "Hva slags innblanding er den frihetsberøvende typen hos Pettit?",
      options: ["Ukontrollert innblanding", "Absolutt all form for innblanding", "Kun ren fysisk innblanding", "All kontrollert innblanding"],
      explanation: "Bare *ukontrollert* innblanding (den den berørte ikke kontrollerer) berøver frihet.",
    },
    {
      question: "Hva gjelder ressurskomponentene (non-vitiation)?",
      options: ["Midler og evne til å *utnytte* friheten man har", "Selve muligheten for ukontrollert innblanding fra andre", "Statens positive plikt til aktivt å gripe inn i markedet", "Fravær av absolutt all form for lovgivning og styring"],
      explanation: "Ressurskomponentene handler om å kunne bruke friheten; svikt her er vitiation (ressurssvikt), ikke dominans — non-vitiation er at midlene er i behold.",
    },
    {
      question: "Hva blir statens hovedoppgave hvis frihet er ikke-dominans (bro til 1.3)?",
      options: ["Å beskytte borgerne mot dominans, ikke bare mot faktisk innblanding", "Å maksimere borgernes samlede lykke og velvære så mye som overhodet mulig", "Å sikre en absolutt og ukrenkelig privat eiendomsrett", "Å avstå fullstendig fra all form for innblanding"],
      explanation: "Fordi frihet er ikke-dominans, må staten motvirke vilkårlig makt — noe som krever permanent borgerkontroll (kap. 1.3).",
    },
    {
      question: "Hva er kjernen i republikansk (vs. liberal) frihet?",
      options: ["Fravær av vilkårlig makt/dominans, ikke bare fravær av faktisk innblanding", "Størst mulig samlet lykke og velvære for aller flest mulig av alle borgerne", "Retten til fritt å realisere sitt sanne, egentlige selv", "Fravær av absolutt all form for statlig virksomhet"],
      explanation: "Republikansk (Pettit): ikke-dominans. Liberal (Berlin): fravær av faktisk innblanding. Samme ord, ulikt innhold.",
    },
    {
      question: "Hvilket subtilt poeng løfter et Pettit-svar til A i tillegg til dominans-kjernen?",
      options: ["At (a)/(b) veier tyngre enn (c)/(d), og at ikke-dominans er mer enn fravær av faktisk innblanding", "At non-vitiation (ressurskomponenten) veier tyngre enn dominanskomponenten hos Pettit", "At Pettit i praksis avviser absolutt all frihet", "At staten helt uunngåelig alltid dominerer borgerne"],
      explanation: "Rangeringen av komponentene og «mer enn faktisk innblanding» er A-markørene (H2022).",
    },
    {
      question: "Hva er Odyssevs' binding et eksempel på i motsetning til en herres vilkårlige binding?",
      options: ["Kontrollert innblanding (satt på egen forhåndsordre) vs. ukontrollert (dominans)", "Faktisk innblanding kontra mulig innblanding, uten relevant forskjell", "Non-vitiation kontra ren dominans hos Pettit", "Negativ frihet kontra positiv frihet hos Berlin"],
      explanation: "Det er *kontrollen* (egen forhåndsordre) som gjør bindingen fri fra dominans; en herres vilkårlige binding ville vært ukontrollert.",
    },
  ],
  'stv1100-1-3': [
    {
      question: "Hva er statens hovedoppgave ifølge Pettit?",
      options: ["Å beskytte borgerne mot dominans, ikke bare mot faktisk innblanding", "Å avstå fullstendig fra absolutt all form for innblanding i borgernes liv", "Å maksimere borgernes samlede lykke så mye som mulig", "Å sikre en absolutt og ukrenkelig privat eiendomsrett"],
      explanation: "Fordi frihet er ikke-dominans, skal staten aktivt fjerne kilder til dominans — mer aktivt enn den liberale staten.",
    },
    {
      question: "Hva er det sentrale poenget om borgerkontroll hos Pettit?",
      options: ["Kontroll er mer enn samtykke — bemyndigelsen må kunne trekkes tilbake", "Et opprinnelig og éngangs gitt samtykke er alltid fullt ut tilstrekkelig", "Borgerne bør helst ikke kontrollere staten i det hele tatt", "Kontroll betyr i praksis akkurat det samme som veldedighet"],
      explanation: "Et engangs-ja hindrer ikke at makten blir vilkårlig; bare løpende, tilbaketrekkbar kontroll fjerner dominans.",
    },
    {
      question: "Hvorfor er ikke et opprinnelig kontraktssamtykke nok for Pettit?",
      options: ["Fordi makten senere kan bli vilkårlig uten løpende kontroll", "Fordi et gyldig samtykke i praksis aldri kan gis i det hele tatt", "Fordi staten alltid og uansett er fullstendig illegitim", "Fordi borgerne i utgangspunktet ikke er i stand til å samtykke"],
      explanation: "Kontraktsmyndighet fjerner ikke dominans; permanent borgerkontroll gjør det.",
    },
    {
      question: "Hva menes med «bemyndigelse som kan trekkes tilbake»?",
      options: ["At borgernes fullmakt til makten må kunne kalles tilbake og utøves løpende", "At borgerne aldri i det hele tatt kan gi makten noen som helst gyldig fullmakt", "At makten er permanent og ugjenkallelig når den først er gitt", "At det bare er selve veldedigheten som kan trekkes tilbake"],
      explanation: "Dette er det subtile poenget: kontroll = vedvarende, tilbaketrekkbar bemyndigelse, ikke engangssamtykke.",
    },
    {
      question: "Hvorfor kan privat veldedighet gjøre mottakeren ufri ifølge Pettit?",
      options: ["Fordi mottakeren avhenger av giverens nåde, som kan trekkes tilbake", "Fordi den private veldedigheten i praksis nesten alltid er altfor liten", "Fordi staten uttrykkelig forbyr all privat veldedighet", "Fordi det tvert imot er giveren selv som blir dominert"],
      explanation: "Å leve på en annens nåde er dominans — samme struktur som slaven med snill herre.",
    },
    {
      question: "Hva fjerner dominansen i velferdsspørsmålet ifølge Pettit?",
      options: ["Å sikre det nødvendige som en rettighet man kan kreve", "Å øke omfanget av den private veldedigheten kraftig og varig", "Å avskaffe absolutt all form for statlig hjelp til trengende", "Å gjøre all hjelpen frivillig og behovsprøvd"],
      explanation: "Velferd som *rett* (ikke tigg) fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hvordan skiller Pettits stat seg fra en minimal (liberal) stat?",
      options: ["Den griper mer aktivt inn for å fjerne privat dominans", "Den griper langt mindre inn enn selve nattvekterstaten gjør", "Den er i praksis helt identisk med den liberale staten", "Den avskaffer fullstendig alle rettigheter borgerne har"],
      explanation: "Pettits stat beskytter den svake mot den sterke (arbeidsgivere, avhengighet) — mer aktivt enn den liberale.",
    },
    {
      question: "Hva er vilkårlig statsmakt (imperium)?",
      options: ["Statlig makt borgerne ikke kontrollerer, som selv blir en kilde til dominans", "Statlig makt som til enhver tid utøves under helt full og løpende borgerkontroll", "Privat makt utøvd av én borger over en annen borger", "Statlig makt som i praksis aldri noen gang blir utøvd"],
      explanation: "Staten som skal fjerne dominans kan selv dominere hvis den ikke er under borgerkontroll.",
    },
    {
      question: "En arbeidsgiver kan si opp ansatte vilkårlig, men gjør det sjelden. Domineres de ansatte?",
      options: ["Ja — de lever på arbeidsgiverens nåde; muligheten er dominans", "Nei — dette skjer jo tross alt bare svært sjelden i praksis uansett", "Nei — et arbeidsforhold er jo alltid inngått fullstendig frivillig", "Bare dersom noen faktisk ender opp med å bli sagt opp"],
      explanation: "Dominans ligger i muligheten for vilkårlig makt; stillingsvern fjerner den.",
    },
    {
      question: "Hvilken feil begår kandidaten som behandler Pettit-kontroll som rent samtykke?",
      options: ["Feil #1 — mister «kan trekkes tilbake»-poenget", "Feil #2 — brer seg ut i altfor mye lavrelevant utenomsnakk", "Feil #4 — hopper over ett av sitatutdragene i settet", "Ingen feil — samtykke er nettopp det Pettit krever"],
      explanation: "Kontroll er en løpende, tilbaketrekkbar bemyndigelse, ikke et engangs-ja — kjernen i statskapitlet.",
    },
    {
      question: "Hva er kontraktsmyndighet?",
      options: ["Legitimitet basert på et opprinnelig samtykke/kontrakt", "Løpende og tilbaketrekkbar borgerkontroll med makten hele tiden", "Statens positive plikt til å drive med veldedighet", "Retten til når som helst å trekke tilbake en bemyndigelse"],
      explanation: "Pettit kontrasterer kontraktsmyndighet (opprinnelig samtykke) med permanent borgerkontroll.",
    },
    {
      question: "Hvorfor må statsmakten selv holdes under kontroll hos Pettit?",
      options: ["Fordi en ukontrollert stat selv blir en kilde til dominans", "Fordi borgerne i utgangspunktet aldri stoler på hverandre uansett", "Fordi selve staten alltid og uansett er ond i seg selv", "Fordi veldedighet i praksis alltid er bedre enn stat"],
      explanation: "Statlig makt under borgerkontroll er kontrollert innblanding; uten kontroll blir den vilkårlig (imperium).",
    },
    {
      question: "Hva er formelen for skillet velferd/veldedighet hos Pettit?",
      options: ["Velferd kan *kreves* (rett); veldedighet må *tigges* om (gave)", "Velferden er alltid privat, mens veldedigheten alltid er offentlig", "De to begrepene er egentlig bare to ulike ord for én og samme ordning", "Det er veldedigheten som gir aller mest frihet"],
      explanation: "Bare det man kan kreve som rett fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hvilken struktur deler veldedighetens ufrihet med et tidligere eksempel?",
      options: ["Slaven med den snille herren — avhengighet av en annens vilje", "Odyssevs bundet til masten — et klart tilfelle av kontrollert binding", "Den liberale despoten som gir sine borgere stor personlig frihet", "Barskap-nøkkelen holdt av en venn på egne vilkår"],
      explanation: "I begge tilfeller er ufriheten avhengigheten (mulig tilbaketrekking), ikke faktisk innblanding.",
    },
    {
      question: "Hva er funksjonen til utdrag b) (om bemyndigelse som kan trekkes tilbake)?",
      options: ["Kritisk premiss mot kontraktsmyndighet — kontroll > samtykke", "En helt nøytral og rent beskrivende definisjon av selve staten som sådan", "En ren illustrasjon av hvordan veldedighet fungerer", "Et direkte argument til støtte for éngangssamtykke"],
      explanation: "b) innfører det subtile poenget: løpende, tilbaketrekkbar bemyndigelse fjerner dominans, ikke opprinnelig ja.",
    },
    {
      question: "Hva følger av ikke-dominans for velferdsstaten?",
      options: ["At det nødvendige bør sikres som rett, ikke overlates til veldedighet", "At all velferd i stedet bør overlates til det private markedet", "At staten helst ikke bør gi borgerne noe som helst", "At privat veldedighet alene er fullt ut tilstrekkelig"],
      explanation: "Rettighet fjerner dominans; veldedighet gjør mottakeren avhengig/dominert.",
    },
    {
      question: "Hva er A-markøren i en oppgave om Pettits statsteori?",
      options: ["Å få frem at bemyndigelsen kan trekkes tilbake (kontroll > samtykke)", "Å konkludere skråsikkert med at staten egentlig er unødvendig", "Å ramse opp så mange tenkere som mulig", "Å skrive et så langt svar som overhodet mulig"],
      explanation: "Veiledningene flagger «kan trekkes tilbake» som «veldig bra» — det subtile poenget som løfter svaret.",
    },
    {
      question: "Hva slags innblanding er statlig regulering under borgerkontroll?",
      options: ["Kontrollert innblanding — den berøver ikke frihet", "Faktisk tvang, som per definisjon alltid ender som ufrihet", "Ukontrollert innblanding, altså ren dominans fra statens side", "Non-vitiation, altså svikt i den enkeltes egne ressurser"],
      explanation: "Statlig makt borgerne kontrollerer er kontrollert innblanding (jf. kap. 1.2), forenlig med frihet.",
    },
    {
      question: "Hvilken sjanger passer oppgaven «Hva ville Pettit sagt om privat veldedighet?»",
      options: ["ANV — bruk dominansbegrepet på den konkrete situasjonen", "RED — en helt ren og generell redegjørelse for hele teorien", "SAM — en sammenligning av Pettit med en annen frihetstenker", "SIT — å tolke et enkelt sitatutdrag fra Pettits egen tekst"],
      explanation: "ANV krever at man *bruker* teorien på caset (veldedighet = dominans), ikke bare gjengir den.",
    },
    {
      question: "Hva binder Pettits statsteori til Del 2 (Rawls/Locke)?",
      options: ["Kontrasten mellom løpende borgerkontroll og ren kontraktteori (samtykke)", "Selve grunnspørsmålet om negativ kontra positiv frihet slik Berlin stiller det", "Machiavellis realpolitiske syn på makt", "Nussbaums teori om menneskelige kapabiliteter og terskelen for et verdig liv"],
      explanation: "Pettits «kontroll > samtykke» kontrasteres med Rawls' hypotetiske kontrakt og Lockes samtykke.",
    },
    {
      question: "Hvorfor er Pettits stat ikke en ren kontraktteori?",
      options: ["Fordi legitimiteten ligger i maktens løpende kontrollerbarhet, ikke i opprinnelig samtykke", "Fordi den bygger utelukkende på den ukrenkelige private eiendomsretten", "Fordi den avviser og forkaster absolutt all statlig makt", "Fordi den ikke tillater borgerne noen rettigheter i det hele tatt"],
      explanation: "Tyngdepunktet forskyves fra opprinnelig samtykke til vedvarende, tilbaketrekkbar kontroll.",
    },
    {
      question: "Hva er den kontraintuitive innsikten om veldedighet hos Pettit?",
      options: ["At veldedighet ikke bare er et gode, men kan være frihetsberøvende", "At veldedighet i praksis alltid er klart å foretrekke framfor rettigheter", "At staten aldri noen gang bør hjelpe borgerne", "At det er mottakeren av gaven som til slutt ender opp med å dominere giveren"],
      explanation: "Å motta på giverens nåde gjør mottakeren avhengig/dominert — mot intuisjonen om veldedighet som udelt godt.",
    },
  ],
  'stv1100-1-prove': [
    {
      question: "Negativ frihet er fravær av hva?",
      options: ["Hindring påført av andre mennesker", "Enhver hindring, også de rent naturlige", "Alle ønsker man ikke får oppfylt", "All statlig velferd og økonomisk omfordeling"],
      explanation: "Kjernen er hindring påført av andre mennesker (ofte skjerpet Hayek-nært til *forsettlig* innblanding) — ikke enhver hindring.",
    },
    {
      question: "Hvilket begrep eier Berlin?",
      options: ["Negativ og positiv frihet", "Permanent løpende borgerkontroll", "Begrepet ikke-dominans som frihet", "Begrepet non-vitiation"],
      explanation: "Berlin: to frihetsbegreper. Ikke-dominans/non-vitiation/borgerkontroll er Pettit.",
    },
    {
      question: "Hvilket begrep eier Pettit?",
      options: ["Ikke-dominans", "Positiv frihet", "Det egentlige selv", "Verdipluralisme"],
      explanation: "Ikke-dominans er Pettits signaturbegrep; de tre andre er Berlin.",
    },
    {
      question: "Er fattigdom i seg selv negativ ufrihet hos Berlin?",
      options: ["Nei — i utgangspunktet manglende evne, ikke en hindring påført av andre", "Bare dersom fattigdommen er helt og holdent selvforskyldt av personen selv", "Ja — fordi fattigdommen alltid skyldes staten", "Ja, alltid og uansett årsak til fattigdommen"],
      explanation: "Negativ ufrihet krever en hindring påført av en annen vilje. Berlin åpner riktignok for at fattigdom *kan* være ufrihet dersom den skyldes menneskeskapte ordninger, men i seg selv er den manglende evne.",
    },
    {
      question: "Hva spør positiv frihet om?",
      options: ["«Hvem styrer meg?»", "«Hvor mange dører står åpne?»", "«Kan noen hindre meg vilkårlig?»", "«Hvor rik er staten?»"],
      explanation: "Positiv frihet gjelder selvstyre; «hvor mange dører» er negativ frihet; «vilkårlig» er Pettit.",
    },
    {
      question: "Hvorfor advarer Berlin mot positiv frihet?",
      options: ["Den kan omdøpe tvang til frigjøring via skillet empirisk/egentlig selv", "Den er i praksis fullstendig identisk med Pettits begrep om ikke-dominans", "Den er logisk selvmotsigende helt i seg selv", "Den nekter folk retten til å eie eiendom"],
      explanation: "Deler man personen i et empirisk og et «egentlig» selv, kan tvang fremstilles som frigjøring.",
    },
    {
      question: "Hva er dominans hos Pettit?",
      options: ["Evne til innblanding uten den andres kontroll", "All statlig lovgivning betraktet som sådan i seg selv", "Faktisk innblanding i en annens frie valg og handlinger", "Ren ressurssvikt hos den enkelte borger"],
      explanation: "Dominans = mulighet for ukontrollert innblanding; selve muligheten er ufrihet.",
    },
    {
      question: "Er slaven med en snill herre fri ifølge Pettit?",
      options: ["Nei — han domineres fordi herren *kan* gripe inn", "Ja — han har jo full negativ frihet i Berlins forstand", "Ja — det skjer jo ingen faktisk innblanding fra herren", "Nei — han er bare positivt ufri her"],
      explanation: "Friheten avhenger av herrens vilje; avhengigheten selv er ufrihet.",
    },
    {
      question: "Hva berøver kontrollert innblanding?",
      options: ["Ingenting — den reduserer ikke friheten", "Absolutt all frihet, i alle tilfeller alltid", "Kun den positive friheten slik Berlin definerer den", "Non-vitiation, altså den enkeltes egne ressurser"],
      explanation: "Kontrollert innblanding (Odyssevs, lov under borgerkontroll) er forenlig med frihet hos Pettit.",
    },
    {
      question: "Hva er non-vitiation?",
      options: ["Å ha midlene og ressursene til å bruke friheten man har", "Frihetsinnskrenkning som følge av ren ressurssvikt", "Selve evnen til ukontrollert innblanding", "I praksis akkurat det samme som dominans"],
      explanation: "Non-vitiation er at midlene er i behold; svikt (vitiation: ressurssvikt) er et svakere frihetstap enn dominans — ikke bland dem (#7).",
    },
    {
      question: "Hvordan rangerer Pettit komponentene?",
      options: ["(a)/(b) veier tyngre enn (c)/(d)", "Alle de fire komponentene veier helt likt", "(c)/(d) veier alltid aller tyngst", "Bare komponent (d) teller egentlig"],
      explanation: "Dominanskomponentene veier tyngst; frihet fra dominans > ressurser til å bruke friheten.",
    },
    {
      question: "Hva viser den liberale despoten?",
      options: ["At negativ frihet kan finnes uten selvstyre", "At den positive friheten alltid følger den negative", "At all frihet i bunn og grunn er positiv frihet", "At enhver form for tvang alltid gir positiv ufrihet"],
      explanation: "Despoten gir personlig frihet uten selvstyre — negativ og positiv frihet er uavhengige.",
    },
    {
      question: "Hva illustrerer Odyssevs ved masten?",
      options: ["Kontrollert binding som ikke berøver frihet", "At absolutt all form for binding uansett er ufrihet", "Ren statlig dominans utøvd over sine egne borgere", "Non-vitiation, altså ressursene i behold"],
      explanation: "Bindingen skjer på egen forhåndsordre — kontrollert innblanding.",
    },
    {
      question: "Hva svarer Berlin og Pettit på despot-caset?",
      options: ["Berlin: negativt fri. Pettit: ufri (dominert)", "Berlin sier ufri, mens Pettit tvert imot sier fri", "Begge to sier at borgerne under despoten er frie", "Begge to sier at borgerne under despoten er ufrie"],
      explanation: "Despoten er testcaset der ikke-dominans skiller seg fra negativ frihet.",
    },
    {
      question: "Hva er kjernedimensjonen i sammenligningen Berlin vs. Pettit?",
      options: ["Faktisk innblanding (Berlin) vs. mulig ukontrollert innblanding (Pettit)", "Positiv frihet kontra negativ frihet, slik det gjelder hos begge to", "Rikdom kontra fattigdom i samfunnet", "Forholdet mellom staten og individet"],
      explanation: "Berlin måler faktisk innblanding; Pettit muligheten for ukontrollert innblanding.",
    },
    {
      question: "Hva er statens hovedoppgave ifølge Pettit?",
      options: ["Å beskytte borgerne mot dominans", "Å avstå fra absolutt all innblanding", "Å maksimere den samlede lykken i samfunnet", "Å sikre en absolutt privat eiendomsrett"],
      explanation: "Pettits stat fjerner aktivt dominans, mer enn den liberale staten.",
    },
    {
      question: "Hva er det sentrale poenget om borgerkontroll?",
      options: ["Kontroll er mer enn samtykke — bemyndigelsen kan trekkes tilbake", "Et opprinnelig éngangssamtykke er alltid helt fullt ut tilstrekkelig", "Borgerne bør helst ikke kontrollere staten", "Kontroll betyr det samme som veldedighet"],
      explanation: "Løpende, tilbaketrekkbar kontroll fjerner dominans; engangssamtykke gjør det ikke.",
    },
    {
      question: "Hvorfor kan privat veldedighet gjøre mottakeren ufri?",
      options: ["Mottakeren avhenger av giverens nåde, som kan trekkes tilbake", "Fordi den private veldedigheten nesten alltid er altfor liten uansett", "Fordi staten uttrykkelig forbyr enhver form for privat veldedighet", "Fordi det er giveren selv som blir dominert"],
      explanation: "Samme dominansstruktur som slaven med snill herre — avhengighet av en annens vilje.",
    },
    {
      question: "Hva fjerner dominansen i velferdsspørsmålet?",
      options: ["Å sikre det nødvendige som en rettighet man kan kreve", "Å øke omfanget av den private veldedigheten kraftig og varig", "Å avskaffe absolutt all statlig hjelp", "Å gjøre all hjelpen frivillig igjen"],
      explanation: "Velferd som rett (ikke tigg) fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hva er vilkårlig statsmakt (imperium)?",
      options: ["Statsmakt borgerne ikke kontrollerer, som selv blir dominans", "Statsmakt utøvd under full og løpende borgerkontroll hele tiden", "Privat makt utøvd av én borger over en annen", "Statsmakt som i praksis aldri blir utøvd"],
      explanation: "Staten som skal fjerne dominans kan selv dominere uten borgerkontroll.",
    },
    {
      question: "Hvilken feil er det å definere negativ frihet som «fravær av enhver hindring»?",
      options: ["Feil #1/#7 — mister grunnskillet «andres hindring vs. manglende egen evne»", "Feil #3 — en helt unødig og altfor bred innledning helt i starten av besvarelsen", "Feil #6 — besvarer bare halvparten av settet", "Ingen feil i det hele tatt — dette er nettopp Berlins egen definisjon av negativ frihet"],
      explanation: "Da viskes grunnskillet ut, og også manglende evne teller som ufrihet — kjernefeilen.",
    },
    {
      question: "Hvilken feil er det å gjengi Pettit uten dominans-/kontrollpoenget?",
      options: ["Feil #1 — miste det sentrale poenget", "Feil #8 — å referere teorien på nytt i selve drøftingsdelen", "Feil #4 — hoppe over ett av utdragene", "Ingen feil — Pettit kan gjengis uten dominansbegrepet"],
      explanation: "Uten «mulig ukontrollert innblanding» faller Pettit tilbake til Berlin.",
    },
    {
      question: "Hvilken feil er det å blande ikke-dominans og non-vitiation?",
      options: ["Feil #7 — upresise begreper", "Feil #3 — unødig innledning", "Feil #9 — overse anvendelsen", "Ingen feil — begrepene er synonymer"],
      explanation: "Dominans (vilkårlig makt) og non-vitiation (å ha ressursene i behold; svikt = vitiation) er ulike kategorier.",
    },
    {
      question: "Hvilken feil er det å gjengi en teori uten å bruke den på despoten?",
      options: ["Feil #9 — overse anvendelsesvrien", "Feil #6 — besvarer bare halve settet uansett", "Feil #4 — hoppe over ett av utdragene", "Ingen feil i det hele tatt her"],
      explanation: "ANV-oppgaver krever at teorien *brukes* på caset, ikke bare refereres.",
    },
    {
      question: "Hva er A-markøren i en Berlin-oppgave?",
      options: ["Å vise at Berlin *problematiserer* positiv frihet, ikke bare beskriver den", "Å skrive et så langt og bredt og omfattende svar som overhodet mulig om temaet", "Å ramse opp så mange tenkere som mulig", "Å avvise hele den negative friheten"],
      explanation: "Å se faren i positiv frihet (misbruk til tvang) løfter svaret fra flatt til A.",
    },
    {
      question: "Hva er A-markøren i en Pettit-statsteori-oppgave?",
      options: ["Å få frem at bemyndigelsen kan trekkes tilbake (kontroll > samtykke)", "Å konkludere skråsikkert med at hele staten i grunnen er helt unødvendig", "Å skrive et så langt svar som overhodet mulig", "Å avvise alle borgernes rettigheter fullstendig"],
      explanation: "«Kan trekkes tilbake» er det subtile poenget veiledningene flagger som «veldig bra».",
    },
    {
      question: "Hva er funksjonen til et utdrag som definerer negativ frihet i en SIT-oppgave?",
      options: ["Definisjon/premiss — grunnmuren i det negative frihetsbegrepet", "En ren illustrasjon av selve den positive friheten hos Berlin selv", "Et direkte motargument rettet mot Berlin", "En historisk digresjon uten funksjon"],
      explanation: "Et definisjonsutdrag fastlegger begrepet og bærer det sentrale poenget.",
    },
    {
      question: "Hva krever SIT-regelen i frihetsoppgavene?",
      options: ["At *hvert* utdrag parafraseres, får funksjon og plasseres i argumentet", "At man plukker ut ett enkelt utdrag og hopper over alle de andre", "At man bare oversetter alt ordrett linje for linje", "At man helt ignorerer funksjonen til utdraget"],
      explanation: "Å hoppe over utdrag (#4) eller parafrasere løsrevet (#5) svekker svaret.",
    },
    {
      question: "Hva er den kontraintuitive innsikten om veldedighet hos Pettit?",
      options: ["At veldedighet kan være frihetsberøvende, ikke bare et gode", "At veldedighet i praksis alltid er det aller beste av alle alternativer", "At staten aldri noen gang bør hjelpe borgerne", "At mottakeren ender opp med å dominere giveren"],
      explanation: "Å motta på giverens nåde gjør mottakeren avhengig/dominert — mot vanlig intuisjon.",
    },
    {
      question: "Hvorfor er Pettits stat ikke en minimal (liberal) stat?",
      options: ["Den griper aktivt inn for å fjerne privat dominans", "Den avskaffer og forkaster fullstendig all statlig makt", "Den bygger utelukkende på privat eiendomsrett", "Den tillater ikke borgerne noen rettigheter"],
      explanation: "Pettits stat beskytter den svake mot den sterke — mer aktivt enn nattvekterstaten.",
    },
  ],
  'stv1100-2-1': [
    {
      question: "Hva mener Rawls med «rettferdighet som rimelighet» (justice as fairness)?",
      options: ["At rettferdige prinsipper er de som ville blitt valgt i en rimelig anlagt valgsituasjon", "At alle borgere skal få nøyaktig og eksakt like store andeler av alle samfunnets goder og byrder", "At rettferdighet består i lojalt å følge de lovene og sedvanene som allerede gjelder i samfunnet", "At det er den sterkestes interesser som til slutt bør avgjøre fordelingen"],
      explanation: "Rimeligheten ligger i valgsituasjonen (utgangsposisjonen), ikke i at utfallet er likt. Rawls tillater faktisk ulikhet, jf. forskjellsprinsippet.",
    },
    {
      question: "Hva innebærer det at Rawls «hever kontraktteorien til et høyere abstraksjonsnivå»?",
      options: ["Kontrakten gjelder valg av fordelingsprinsipper og er hypotetisk, ikke en historisk avtale om å danne stat", "Kontrakten er en helt faktisk, skriftlig og bindende avtale inngått mellom de enkelte borgerne og selve staten", "Kontrakten gjelder kun de aller mest utdannede og opplyste borgerne", "Kontrakten må inngås helt på nytt hvert eneste år ved folkeavstemning"],
      explanation: "Der klassisk kontraktteori tenkte en avtale om å danne stat, gjelder Rawls' hypotetiske kontrakt valget av prinsipper.",
    },
    {
      question: "Hva er uvitenhetssløret (veil of ignorance)?",
      options: ["At partene velger prinsipper uten å vite sin egen klasse, sine evner eller sitt livssyn", "At politikerne bevisst skjuler sine egentlige motiver og hensikter for de intetanende velgerne", "At borgerne flest mangler den nødvendige kunnskapen om samfunnsforhold, økonomi og politikk", "At man ikke får vite utfallet av selve valget før lenge etterpå"],
      explanation: "Sløret skjuler partikulær kunnskap om egen posisjon; generell samfunnskunnskap beholdes.",
    },
    {
      question: "Hvilken funksjon har uvitenhetssløret i Rawls' argument?",
      options: ["Det sikrer et upartisk valg ved å frata partene informasjonen de kunne brukt til å favorisere seg selv", "Det gjør i praksis partene langt mer altruistiske, omsorgsfulle og oppriktig opptatt av alle andres ve og vel", "Det garanterer at absolutt alle partene til slutt får helt identiske livsutsikter", "Det gir tvert imot de aller sterkeste partene enda større forhandlingsmakt"],
      explanation: "Upartiskheten er strukturell: siden ingen vet hvem de er, kan ingen skreddersy prinsippene.",
    },
    {
      question: "Hva er «trussel-fordel» (threat advantage) hos Rawls?",
      options: ["Forhandlingsmakt fra tilfeldige fortrinn som styrke, rikdom eller talent", "En uttrykkelig trussel om vold dersom prinsippene ikke godtas", "Selve fordelen ved å kjenne det endelige utfallet på forhånd", "Retten til å true seg til flere goder også etter at valget er tatt"],
      explanation: "Sløret nøytraliserer trussel-fordelen fordi ingen vet om de er sterke eller svake.",
    },
    {
      question: "Hvordan behandler uvitenhetssløret trussel-fordelen?",
      options: ["Det nøytraliserer den, siden ingen vet om de har et fortrinn å presse med", "Det forsterker den tvert imot for de mest ressurssterke partene", "Det overlater den i sin helhet til en ren flertallsavgjørelse", "Det ser helt bort fra den fordi den uansett er irrelevant"],
      explanation: "Tilfeldige fortrinn settes ut av spill; de er moralsk vilkårlige og bør ikke bestemme fordelingen.",
    },
    {
      question: "Hva sier maximin-regelen?",
      options: ["Velg det alternativet hvis verst tenkelige utfall er best", "Velg det alternativet som gir den aller høyeste forventede gjennomsnittsnytten", "Velg det alternativet som gagner det store flertallet aller mest", "Velg det alternativet med den aller største mulige gevinsten"],
      explanation: "Maxi-min = maksimer minimum. Man rangerer etter dårligste utfall og velger det minst dårlige.",
    },
    {
      question: "Hvorfor er maximin rasjonelt i utgangsposisjonen (ett av vilkårene)?",
      options: ["Fordi partene er i radikal usikkerhet og ikke kan tilordne sannsynligheter til utfallene", "Fordi Rawls selv personlig var svært redd for fattigdom og økonomisk usikkerhet gjennom hele livet", "Fordi det store flertallet av parter alltid foretrekker det aller tryggeste", "Fordi det alltid gir den aller høyeste gjennomsnittlige samlede velferden"],
      explanation: "Sløret fjerner sannsynlighetene, så forventet nytte kan ikke beregnes; da er det rasjonelt å sikre bunnen.",
    },
    {
      question: "Hvilket av følgende er IKKE et vilkår Rawls oppgir for at maximin er rasjonelt?",
      options: ["At flertallet stemmer for det tryggeste alternativet", "At det aller verste mulige utfallet framstår som fullstendig uakseptabelt", "En radikal usikkerhet helt uten kjente sannsynligheter", "At selve gevinsten ved å ta en risiko er nokså beskjeden"],
      explanation: "De tre vilkårene er radikal usikkerhet, uakseptabelt verste utfall og beskjeden gevinst — ikke flertallsstemme.",
    },
    {
      question: "Hva er forskjellen på uvitenhetssløret og maximin-regelen?",
      options: ["Sløret er en informasjonsbetingelse; maximin er en beslutningsregel", "Sløret er beslutningsregelen, maximin informasjonsbetingelsen", "De er egentlig bare to ulike navn på nøyaktig det samme prinsippet", "Sløret gjelder hos Locke, mens maximin gjelder hos Rawls"],
      explanation: "Å blande dem — «sløret sier man skal sikre seg mot det verste» — er en typisk presisjonsfeil (#7).",
    },
    {
      question: "Hva er «refleksiv likevekt» hos Rawls?",
      options: ["Tilstanden der prinsippene og våre veloverveide overbevisninger er brakt i samsvar", "Selve maktbalansen og likevekten mellom statens tre ulike grunnlovsfestede statsmakter", "En avtale som nærmest refleksmessig revideres på nytt ved hvert eneste stortingsvalg", "Selve likevekten mellom tilbud og etterspørsel i det frie markedet"],
      explanation: "Vi justerer prinsipper og intuisjoner mot hverandre til de konvergerer — Rawls' rettferdiggjøringsmetode.",
    },
    {
      question: "Hva er «veloverveide overbevisninger»?",
      options: ["Våre stødigste moralske dommer, holdt fast ved etter ro og ettertanke (f.eks. at slaveri er urett)", "Rene politiske meninger og standpunkter som gjerne dannes i hastverk midt under en opphetet valgkamp", "Rawls' egne endelige konklusjoner slik de står i A Theory of Justice", "De overbevisningene partene har bak sløret om sin egen framtid"],
      explanation: "De brukes som prøvestein: en teori som strider mot dem alle, må ha en feil.",
    },
    {
      question: "Hvorfor forutsetter Rawls at partene er «gjensidig uinteresserte»?",
      options: ["For å vise at rettferdige prinsipper følger selv uten altruisme, bare av egeninteresse under rimelige betingelser", "Fordi han i bunn og grunn mener at mennesker faktisk og gjennomgående er kalde, kalkulerende og dypt egoistiske av natur", "For at partene skal kunne stole helt blindt på hverandre under valget", "Fordi altruisme ellers ville gitt de aller svakeste partene for mye makt"],
      explanation: "Bygde rettferdigheten på nestekjærlighet, ville argumentet hvilt på en holdning man kan mangle.",
    },
    {
      question: "Hva vet partene bak uvitenhetssløret?",
      options: ["Generelle forhold om samfunn, økonomi og psykologi, men ikke sin egen plass i dem", "Absolutt ingenting som helst om noe som helst, verken om verden generelt eller om seg selv", "Alt om seg selv og sin egen posisjon, men ingenting om samfunnet de senere skal leve i", "Kun den nøyaktige sannsynligheten for å bli enten rik eller fattig"],
      explanation: "Uten generell kunnskap kunne partene ikke vurdert konsekvensene av ulike prinsipper.",
    },
    {
      question: "Hva menes med at fortrinn som klasse og talent er «moralsk vilkårlige»?",
      options: ["At man ikke har fortjent dem — de skyldes det sosiale og naturlige lotteriet", "At de er fullstendig tilfeldige og derfor er helt uten noen som helst betydning for livet", "At det rett og slett er dypt umoralsk i seg selv å ha dem", "At de fritt kan velges bort igjen etter eget ønske og behag når som helst i livet"],
      explanation: "Fordi de er ufortjente, mener Rawls de ikke bør bestemme fordelingen; derfor skjuler sløret dem.",
    },
    {
      question: "Hvilken del av uvitenhetssløret er teoretisk vanskeligst å forsvare?",
      options: ["At partene ikke kjenner sitt eget livssyn / sin oppfatning av det gode", "At partene ikke kjenner sin egen sosiale klasse eller familiebakgrunn i samfunnet", "At partene ikke kjenner sin egen formue, inntekt eller yrkesstilling i samfunnet", "At partene ikke kjenner sin egen rase, etnisitet eller nasjonale tilhørighet"],
      explanation: "Å velge fornuftig uten å vite hva man verdsetter er krevende — dette er det subtile A-poenget.",
    },
    {
      question: "Hva er det sentrale poenget en Rawls-redegjørelse IKKE kan mangle?",
      options: ["Utgangsposisjonen og uvitenhetssløret", "En grundig og sammenlignende drøfting av utilitarismen", "En fyldig biografi over hele Rawls' liv og virke", "En prinsipiell kritikk av Locke og hans kontraktteori"],
      explanation: "Rawls uten sløret/utgangsposisjonen er den klassiske kjernefeilen (#1) — svaret faller til svakt.",
    },
    {
      question: "I en a)–e)-sitatoppgave om Rawls, hva er den typiske feilen (#4)?",
      options: ["Å konsentrere seg om ett–to utdrag og hoppe over resten", "Å plassere hvert eneste utdrag presist i argumentets store helhet", "Å identifisere den presise funksjonen til hvert enkelt utdrag", "Å tolke hvert eneste av utdragene svært grundig og nøye"],
      explanation: "Alle utdrag skal behandles; å hoppe over noen svekker svaret vesentlig.",
    },
    {
      question: "Hva kjennetegner en løsrevet parafrase (feil #5) i en sitattolkning?",
      options: ["At utdraget oversettes linje for linje uten at funksjonen og plassen i argumentet angis", "At utdraget plasseres helt presist og korrekt inn i argumentets store og overordnede helhet", "At man tydelig identifiserer om utdraget er et premiss eller en konklusjon i selve argumentet", "At man aktivt kobler utdraget sammen med alle de andre utdragene"],
      explanation: "God SIT: parafraser → identifiser funksjon → plasser i helheten. Bare parafrase er ikke nok.",
    },
    {
      question: "Et Rawls-utdrag som definerer sløret («ingen kjenner sin plass...») har hvilken funksjon?",
      options: ["Premiss — det er betingelsen som sikrer upartiskhet", "Konklusjon — det er selve rettferdighetsprinsippet Rawls ender på", "Illustrasjon — et konkret eksempel uten teoretisk vekt", "Innvending — en kritikk rettet mot Rawls' egen konstruksjon"],
      explanation: "Å navngi funksjonen (premiss) er det som skiller en plassert tolkning fra en løsrevet parafrase.",
    },
    {
      question: "Hvorfor foretrekker Rawls maximin fremfor å maksimere forventet nytte?",
      options: ["Fordi sløret fjerner sannsynlighetene og forventet-nytte-regelen kunne ofre de dårligst stilte", "Fordi det å maksimere forventet nytte i praksis alltid og uunngåelig gir dypt urettferdige resultater", "Fordi maximin-regelen alltid gir den aller høyeste gjennomsnittlige velstanden", "Fordi partene bak uvitenhetssløret gjennomgående er svært risikosøkende"],
      explanation: "Uten sannsynligheter kan ikke forventet nytte beregnes; maximin beskytter bunnen.",
    },
    {
      question: "Hvordan svarer Rawls på innvendingen om at et hypotetisk valg ikke kan forplikte oss?",
      options: ["Ved at det bindende ikke kommer fra samtykke, men fra at valgbetingelsene er rimelige", "Ved å hevde at selve kontrakten faktisk og historisk ble inngått på et helt bestemt tidspunkt", "Ved å påpeke at det store flertallet har godtatt den i praksis", "Ved rett og slett å innrømme at teorien ikke forplikter noen som helst i det virkelige liv"],
      explanation: "Konstruksjonen modellerer upartiskhet; godtar man betingelsene, godtar man resultatet.",
    },
    {
      question: "Hva er «utgangsposisjonen» (original position)?",
      options: ["Den tenkte, rimelig anlagte valgsituasjonen der partene enes om rettferdighetsprinsippene", "Den historiske naturtilstanden slik den forelå før staten og det politiske samfunnet oppstod", "Selve startkapitalen som hver enkelt borger fødes inn i verden med", "Den aller første paragrafen i landets gjeldende grunnlov"],
      explanation: "Utgangsposisjonen er Rawls' hypotetiske motstykke til naturtilstanden; sløret er kjernen i den.",
    },
    {
      question: "Hva er sammenhengen mellom uvitenhetssløret og maximin-regelen?",
      options: ["Sløret skaper den radikale usikkerheten som gjør maximin til den rasjonelle regelen", "Det er tvert imot maximin-regelen selv som skaper og frembringer hele uvitenhetssløret", "De er helt uavhengige av hverandre og har ingen innbyrdes forbindelse i Rawls' egen teori", "Selve sløret opphever og setter til side maximin-regelen"],
      explanation: "Sløret er årsaken (radikal usikkerhet), maximin er den rasjonelle responsen.",
    },
    {
      question: "Hvilken utdragsfunksjon har et utdrag om at «tilfeldigheter som gir forhandlingsstyrke er satt ut av spill»?",
      options: ["Virkning av premisset — det viser hva sløret fører til (upartiskhet)", "Et rent premiss som selv definerer og fastlegger hva uvitenhetssløret er", "En beslutningsregel som direkte angir og begrunner selve maximin-regelen", "En test som sjekker prinsippene mot våre veloverveide moralske intuisjoner"],
      explanation: "Utdraget kobler informasjonsbetingelsen til at trussel-fordelen faller bort.",
    },
    {
      question: "Hva kjennetegner et E-nivå-svar om Rawls?",
      options: ["Det mister utgangsposisjonen/sløret, blander sløret og maximin, og brer seg ut i utenomsnakk", "Det treffer kjernen presist og tilføyer minst ett subtilt ekstrapoeng", "Det plasserer hvert eneste utdrag presist i argumentets helhet", "Det gir en helt korrekt, men samtidig ganske flat gjengivelse"],
      explanation: "Et korrekt, men flatt svar er C; A tilføyer det subtile ekstra. E mister kjernen.",
    },
    {
      question: "Hva løfter en Rawls-besvarelse til A-nivå (det subtile ekstra)?",
      options: ["Å se at ulike deler av uvitenhetssløret er ulikt godt teoretisk motivert", "Å skrive et så langt og bredt og omfattende svar om temaet som overhodet mulig", "Å nevne samtlige av Rawls' senere verk og artikler", "Å ta i bruk flest mulig innfløkte faguttrykk fra pensum"],
      explanation: "Sensorveiledningen flagger denne innsikten som «veldig bra» — sløret er ikke én ensartet forutsetning.",
    },
    {
      question: "Hvorfor skjuler sløret partenes livssyn?",
      options: ["For at prinsippene skal bli nøytrale mellom ulike oppfatninger av det gode liv", "For at selve prinsippvalget skal gjøre alle partene betydelig mer usikre og engstelige", "Fordi livssynet uansett er helt irrelevant for selve spørsmålet om rettferdighet", "For at nettopp de religiøse partene skal få et lite fortrinn"],
      explanation: "Nøytraliteten er grunnen — men samtidig den mest omstridte delen av sløret.",
    },
    {
      question: "Hva er «likestilling» i utgangsposisjonen?",
      options: ["At ingen part har mer makt eller bedre informasjon enn andre", "At absolutt alle partene ender opp med nøyaktig samme inntekt etter valget", "At de to kjønnene behandles nøyaktig likt i hele lovverket og staten", "At partene deler alt de eier og har helt likt seg imellom etterpå"],
      explanation: "Sammen med sløret gjør likestillingen situasjonen rimelig — ingen kan presse gjennom egne prinsipper.",
    },
    {
      question: "Hvordan bør du rekonstruere strukturen i Rawls' argument (RED)?",
      options: ["Slør (premiss) → trussel-fordel bort (virkning) → maximin (regel) → beskytte bunnen → refleksiv likevekt (test)", "Man skal utelukkende gjengi selve sluttkonklusjonen om de to rettferdighetsprinsippene, helt uten noen begrunnelse bak", "Man bør starte med en svært lang biografi og bred historisk bakgrunn", "Man bør først liste opp samtlige av Rawls' mange ulike kritikere"],
      explanation: "RED-håndverket krever at du treffer strukturen, ikke bare konklusjonen.",
    },
  ],
  'stv1100-2-2': [
    {
      question: "Hva sier Rawls' frihetsprinsipp (første prinsipp)?",
      options: ["Hver har lik rett til det mest omfattende systemet av grunnleggende friheter som er forenlig med samme frihet for alle", "Alle borgere skal til enhver tid ha nøyaktig lik inntekt, lik formue og fullstendig like materielle levekår i hele samfunnet", "At selve friheten i samfunnet skal fordeles strengt etter den enkeltes fortjeneste", "At staten skal maksimere borgernes samlede lykke så mye som overhodet mulig"],
      explanation: "Frihetsprinsippet gjelder de politiske og sivile frihetene og har leksikalsk forrang.",
    },
    {
      question: "Hva sier forskjellsprinsippet (2b)?",
      options: ["Sosiale og økonomiske ulikheter tillates bare hvis de er til størst fordel for de dårligst stilte", "Absolutt all form for ulikhet i inntekt og formue mellom borgerne er strengt forbudt og uakseptabelt", "At ulikheter i inntekt kan tillates så lenge de er til fordel for det store flertallet av befolkningen", "At den som til enhver tid yter aller mest, også alltid skal tjene aller mest"],
      explanation: "Ulikhet er ikke urettferdig i seg selv — den må løfte bunnen. Dette er det sentrale poenget.",
    },
    {
      question: "Hva innebærer «leksikalsk prioritet» mellom prinsippene?",
      options: ["1 før 2a før 2b — man går ikke videre før det foregående er fullt oppfylt", "At alle prinsippene er fullstendig likestilte og hele tiden veies fritt mot hverandre", "At forskjellsprinsippet (2b) har klar forrang foran selve frihetsprinsippet", "At sjanselikheten fritt kan ofres til fordel for økonomisk vekst"],
      explanation: "Grunnleggende friheter kan ikke handles bort mot velferd; frihet kommer først.",
    },
    {
      question: "Hva er «sjanselikhet» (2a) hos Rawls?",
      options: ["Rettferdig likhet av muligheter — like talenter og innsats gir like utsikter uansett bakgrunn", "At absolutt alle borgerne til slutt ender opp med nøyaktig og fullstendig den samme inntekten og formuen", "At alle de ulike posisjonene i samfunnet tildeles ved en ren loddtrekning", "At de dårligst stilte alltid skal ha ubetinget forrang til alle stillinger og posisjoner i samfunnet"],
      explanation: "2a er mer enn formell åpenhet; den korrigerer for sosial bakgrunn. 2a går foran 2b.",
    },
    {
      question: "Hva er forskjellen mellom sjanselikhet (2a) og forskjellsprinsippet (2b)?",
      options: ["2a gjelder tilgang til posisjoner; 2b gjelder fordeling av utfall til fordel for bunnen", "2a gjelder tvert imot selve fordelingen av utfall, mens 2b gjelder tilgangen til posisjonene", "De to prinsippene er egentlig bare to navn på det samme", "2a gjelder selve friheten, mens 2b gjelder den økonomiske likheten"],
      explanation: "Å blande dem er en typisk presisjonsfeil (#7). 2a har forrang foran 2b.",
    },
    {
      question: "Hva er «sosiale primærgoder»?",
      options: ["Godene enhver rasjonell person vil ha uansett livsplan — rettigheter, muligheter, inntekt, selvrespektens grunnlag", "De helt spesielle godene som utelukkende de aller rikeste og mest privilegerte borgerne i samfunnet noensinne ønsker seg", "Naturressurser som olje, gass, mineraler og fiskebestander i havet", "De godene partene bak sløret allerede kjenner sin egen framtidige andel av"],
      explanation: "Primærgodene er den felles målestokken bak sløret, der partene ikke kjenner egen livsplan.",
    },
    {
      question: "Hvilket primærgode kaller Rawls det viktigste?",
      options: ["Selvrespektens sosiale grunnlag", "Selve inntekten og formuen man har", "Den politiske makten i samfunnet", "Den private eiendomsretten"],
      explanation: "Uten selvrespekt mister andre goder sin verdi; rettferdighet handler om betingelser for et verdig liv.",
    },
    {
      question: "Hva er «det naturlige lotteriet»?",
      options: ["At naturlige talenter er ujevnt og moralsk vilkårlig (ufortjent) fordelt", "At man kan vinne stort i et vanlig pengelotteri ved å satse på naturlige tall", "At naturressursene er svært ulikt fordelt mellom de ulike landene", "At tilfeldige værforhold påvirker avlingene og innhøstingen fra år til år"],
      explanation: "Fordi talent er ufortjent, begrunner det forskjellsprinsippet: avkastningen bør gagne fellesskapet.",
    },
    {
      question: "Hva er «det sosiale lotteriet»?",
      options: ["At sosial bakgrunn — klasse, familieformue, oppvekst — er tilfeldig og moralsk vilkårlig fordelt", "At det er selve samfunnet som ved en ren loddtrekning trekker ut hvem som skal få velferd og hjelp", "At de sosiale mediene fordeler oppmerksomhet og status helt tilfeldig", "At selve stemmeretten i samfunnet fordeles ved en ren loddtrekning"],
      explanation: "Sammen med det naturlige lotteriet begrunner det hvorfor fordelingen ikke bør speile disse tilfeldighetene.",
    },
    {
      question: "Hvorfor tillater forskjellsprinsippet ulikhet i det hele tatt?",
      options: ["Fordi høyere belønning kan motivere til større ytelse, som kan komme også de dårligst stilte til gode", "Fordi de aller mest talentfulle og produktive borgerne rett og slett fortjener å få betydelig mer enn andre", "Fordi full og fullstendig likhet uansett er praktisk umulig å oppnå", "Fordi det store flertallet av borgerne selv ønsker seg en viss ulikhet"],
      explanation: "Ulikheten er instrumentelt begrunnet — lov i den grad den løfter bunnen, ikke fordi noen «fortjener» den.",
    },
    {
      question: "Hva er Rawls' presise poeng om fordelingen av talenter (utdrag b))?",
      options: ["Selve fordelingen er verken rettferdig eller urettferdig — det er institusjonenes håndtering av den som kan bedømmes", "At selve det at menneskene har ulikt talent fra naturens side, i seg selv er dypt urettferdig og fullstendig uakseptabelt", "At det naturlige talentet alltid og uansett bør belønnes maksimalt", "At de naturlige talentene i praksis er ganske jevnt fordelt i befolkningen"],
      explanation: "Urettferdigheten ligger i strukturen, ikke i naturen. Et subtilt, presist poeng.",
    },
    {
      question: "Hva er den feministiske kritikken av Rawls?",
      options: ["At familien ligger utenfor sløret/prinsippene, så kjønnsulikhet i hjemmet unnslipper rettferdigheten", "At Rawls i sin teori uttrykkelig og aktivt forbyr kvinner å delta i selve utgangsposisjonen bak sløret", "At selve forskjellsprinsippet systematisk favoriserer menn økonomisk både i arbeidslivet og i hjemmet", "At uvitenhetssløret i praksis gjør absolutt alle partene til menn"],
      explanation: "Kritikken utnytter en spenning: sjanselikheten krever at oppvekst ikke bestemmer utsikter, men da kan ikke familien være unntatt.",
    },
    {
      question: "Hva er kritikken fra «de varig syke og svake»?",
      options: ["At Rawls' parter er «fullt samarbeidende» medlemmer, så alvorlig funksjonshemmede kan falle utenfor primærgode-apparatet", "At de varig syke og svake i samfunnet etter Rawls' teori uttrykkelig ikke bør ha noen som helst stemmerett i det hele tatt", "At selve forskjellsprinsippet gir de aller sykeste altfor mye", "At uvitenhetssløret i praksis gjør absolutt alle partene helt friske"],
      explanation: "En rekkevidde-innvending (bl.a. fra Nussbaum): fanger primærgode-listen dem som ikke kan delta i samarbeidet?",
    },
    {
      question: "Hva er den typiske feilen (#1) i en redegjørelse for prinsippene?",
      options: ["Å gjengi prinsippene uten forskjellsprinsippets kjerne eller den leksikalske forrangen", "Å nevne både selve sjanselikheten (2a) og hele forskjellsprinsippet (2b) grundig og presist", "Å forklare hele den leksikalske rangordenen mellom prinsippene og begrunne hvorfor den gjelder", "Å begrunne forskjellsprinsippet med det naturlige lotteriet"],
      explanation: "Uten forskjellsprinsippets kjerne (ulikhet til fordel for bunnen) og forrangen faller svaret.",
    },
    {
      question: "Hva er feil #8 i en HYB-oppgave om Rawls?",
      options: ["Å bare referere teorien om igjen i drøftingsdelen i stedet for å reise en innvending", "Å reise en solid og relevant innvending som er godt forankret i pensum og forelesning", "Å gi Rawls' eget mulige motsvar på selve innvendingen", "Å lande selve drøftingen med en kort og forbeholden vurdering av teoriens faglige holdbarhet"],
      explanation: "Drøftingsdelen krever selvstendighet — en innvending vurdert, ikke ny gjengivelse.",
    },
    {
      question: "Hvordan følger forskjellsprinsippet av maximin-valget bak sløret?",
      options: ["Partene sikrer bunnen (maximin), så de velger prinsipper som gjør de dårligst stilte best mulig stilt", "Partene forsøker tvert imot å maksimere sin egen forventede gjennomsnittsinntekt så mye som overhodet mulig", "Partene stemmer rett og slett over hele fordelingen i etterkant", "Partene vet på forhånd at de blir rike, og velger deretter prinsipper"],
      explanation: "Fordi partene selv kan havne på bunnen, foretrekker de en ordning som løfter den — forskjellsprinsippet.",
    },
    {
      question: "Hva løfter en Rawls-drøfting til A-nivå (det subtile ekstra)?",
      options: ["Å fremheve den leksikalske forrangen og forankre kritikken i pensum (feministisk / syke-svake)", "Å skrive et så langt og omfattende svar om temaet som overhodet mulig", "Å ramse opp samtlige av Rawls' mange ulike verk og artikler", "Å konsekvent unngå enhver form for innvending mot teorien"],
      explanation: "Sensor premierer den forankrede drøftingen med Rawls' motsvar, ikke fritt synsing.",
    },
    {
      question: "Hva menes med «rettferdig likhet av muligheter» (fair equality of opportunity)?",
      options: ["At like talentfulle har samme utsikter uansett hvilken klasse de fødes inn i", "At ingen borger er formelt og juridisk utestengt fra å søke en bestemt stilling", "At absolutt alle får nøyaktig samme utdanning uansett egne anlegg og interesser", "At de ulike posisjonene i samfunnet fordeles etter den enkeltes behov og ønsker"],
      explanation: "Det er mer enn formell åpenhet — det stiller krav til utdanning og oppvekstvilkår.",
    },
    {
      question: "Er Rawls en ren likhetsteoretiker som mener alle skal ha like mye?",
      options: ["Nei — han tillater betinget ulikhet; ulikhet er lov hvis den gagner de dårligst stilte", "Ja — forskjellsprinsippet krever full materiell likhet mellom alle", "Ja — samtlige sosiale primærgoder skal alltid fordeles fullstendig likt", "Nei — han forbyr tvert imot enhver form for likhet i samfunnet"],
      explanation: "Rawls er teoretiker om rettferdiggjort ulikhet, ikke om lik fordeling av utfall.",
    },
    {
      question: "Hva retter Rawls' rettferdighetsprinsipper seg mot?",
      options: ["Samfunnets grunnstruktur — de store institusjonene som fordeler rettigheter og livsutsikter", "Enkeltpersoners daglige og private handlinger overfor hverandre i hverdagen og samfunnet ellers", "Utelukkende hele skattesystemet og den løpende økonomiske omfordelingen mellom landets borgere", "Bare selve familien og det aller mest private privatlivet"],
      explanation: "Prinsippene vurderer institusjoner, ikke enkelthandlinger direkte.",
    },
    {
      question: "Hvorfor kan ikke fortjeneste være grunnlaget for fordeling ifølge Rawls?",
      options: ["Fordi også flid og arbeidsevne delvis skyldes lotteriet (oppvekst, anlegg)", "Fordi absolutt ingen mennesker i samfunnet noensinne jobber hardere enn noen andre", "Fordi selve fortjenesten i praksis er helt umulig å måle presist og rettferdig", "Fordi det store flertallet av borgerne uansett er imot fortjeneste som kriterium"],
      explanation: "Fortjeneste-innvendingen forutsetter en fortjeneste-forestilling Rawls avviser.",
    },
    {
      question: "Hvordan identifiseres «de dårligst stilte» (the least advantaged)?",
      options: ["I termer av sosiale primærgoder — typisk laveste forventede inntekt og formue over et livsløp", "I termer av den enkeltes subjektive og selvopplevde livslykke", "Ved at de aller dårligst stilte rett og slett selv melder seg", "I termer av én bestemt og på forhånd fastlagt livsplan"],
      explanation: "Den objektive målestokken trengs fordi partene bak sløret ikke kjenner egne preferanser.",
    },
    {
      question: "Hva uttrykker den leksikalske forrangen for frihet moralsk?",
      options: ["At mennesker er mål i seg selv — grunnleggende friheter kan ikke ofres for kollektiv velstand", "At selve friheten i praksis er atskillig mindre viktig enn den kollektive velferden og velstanden", "At de aller rikeste borgerne i praksis har mer frihet enn de fattige", "At selve de grunnleggende frihetene fritt kan selges unna dersom prisen i penger bare er høy nok"],
      explanation: "En anti-utilitaristisk kjerne: selv stor økonomisk gevinst rettferdiggjør ikke å frata noen stemmeretten.",
    },
    {
      question: "Hva er Rawls' teori formet i motsetning til?",
      options: ["Utilitarismen, som kan ofre noen for et høyt gjennomsnitt av samlet nytte", "Marxismen, som vil avskaffe all privat eiendomsrett fullstendig i samfunnet", "Anarkismen, som fullstendig avviser både statens eksistens og dens myndighet", "Konservatismen, som først og fremst vil forsvare nedarvet tradisjon og orden"],
      explanation: "Forskjellsprinsippet + forrangen forbyr å handle bort individets friheter mot større samlet velferd.",
    },
    {
      question: "Hva består listen over sosiale primærgoder av?",
      options: ["Rettigheter og friheter, muligheter og makt, inntekt og formue, selvrespektens grunnlag", "Utelukkende den helt rene inntekten og den samlede formuen som hver enkelt borger rår over", "Naturressurser, råvarer og alle andre fysiske goder som finnes i naturen og under havbunnen", "Ren lykke, glede, velvære og subjektiv tilfredshet"],
      explanation: "De er sosiale fordi de fordeles av grunnstrukturen, og allmenne fordi de er relevante uansett livsplan.",
    },
    {
      question: "Hva kjennetegner et C-nivå-svar om prinsippene?",
      options: ["Alle tre prinsipper og rangorden korrekt, men flatt og uten drøfting", "Selve kjernen truffet helt presist pluss en solid og forankret innvending", "Prinsippene gjengitt uten selve forskjellsprinsippets kjerne og rangorden", "En gjennomgående sammenblanding av sjanselikhet (2a) og forskjellsprinsippet (2b)"],
      explanation: "E mister kjernen; A tilføyer forankret drøfting. C er korrekt, men flatt.",
    },
    {
      question: "Hva er insentiv-begrunnelsen for at ulikhet kan være tillatt?",
      options: ["Høyere belønning kan få talentfulle til å yte mer og øke det samlede produktet, som kan løfte bunnen", "At de mest talentfulle borgerne har en medfødt rett til å få mer enn andre", "At en viss ulikhet rett og slett er helt nødvendig for å straffe de late", "At selve markedet uansett alltid krever en viss grad av ulikhet"],
      explanation: "Ulikheten er instrumentelt begrunnet — lov fordi og i den grad den gagner de dårligst stilte.",
    },
    {
      question: "Hvorfor er den feministiske kritikken vanskeligere for Rawls å avvise enn fortjeneste-innvendingen?",
      options: ["Fordi den utnytter en indre spenning: sjanselikheten krever at oppvekst ikke bestemmer utsikter, men familien holdes utenfor", "Rett og slett fordi Rawls selv i hele sitt store hovedverk aldri på noe eneste tidspunkt nevner eller omtaler kvinner overhodet", "Rett og slett fordi selve innvendingen er politisk mer korrekt i dag", "Rett og slett fordi noe slikt som fortjeneste ikke finnes i teorien"],
      explanation: "Offentlig/privat-skillet kolliderer med kravet i 2a om at barns utsikter ikke skal bestemmes av bakgrunn.",
    },
  ],
  'stv1100-2-3': [
    {
      question: "Hva er det sentrale ved Lockes samfunnskontrakt?",
      options: ["Den er et faktisk, pågående samtykke med full informasjon", "Den er et rent hypotetisk prinsippvalg bak et uvitenhetsslør", "Den er en historisk engangsavtale man er bundet av for alltid", "Den er en avtale som inngås bare mellom de rikeste borgerne"],
      explanation: "Motsatt av Rawls' hypotetiske valg bak slør: Lockes kontrakt er virkelig og vedvarende.",
    },
    {
      question: "Hva er «uttrykkelig samtykke» (explicit consent) hos Locke?",
      options: ["En aktiv, erklært tilslutning til samfunnet, f.eks. en borgerskapsed", "En form for samtykke man gir helt implisitt bare ved å nyte samfunnets goder", "Det samtykket partene gir bak selve uvitenhetssløret i Rawls' egen teori", "Et samtykke som selve flertallet gir på vegne av alle borgerne"],
      explanation: "De færreste gir uttrykkelig samtykke — derfor trenger Locke også det stilltiende.",
    },
    {
      question: "Hva er «stilltiende samtykke» (tacit consent) hos Locke?",
      options: ["Den implisitte tilslutningen man gir ved å nyte godt av samfunnets goder", "En helt uttrykkelig og skriftlig bindende avtale inngått direkte med selve staten", "Et samtykke som utelukkende gis gjennom en formell folkeavstemning i landet", "Et samtykke man gir helt uten å vite hvem man selv egentlig er"],
      explanation: "Ved å ta imot fordelene (veier, eiendom, trygghet) aksepterer man forpliktelsene.",
    },
    {
      question: "Hvorfor trenger Locke begrepet om stilltiende samtykke?",
      options: ["Fordi de aller fleste aldri gir noe uttrykkelig samtykke — de er født inn i samfunnet", "Fordi det å gi et helt uttrykkelig og erklært samtykke i praksis er strengt forbudt ved lov", "Fordi det stilltiende samtykket i praksis gir langt mer makt til staten", "Fordi Rawls i sin egen teori uttrykkelig krevde nettopp dette"],
      explanation: "Uten stilltiende samtykke ville nesten ingen være forpliktet til å adlyde lovene.",
    },
    {
      question: "Hva skiller Lockes parter fra Rawls' parter når det gjelder informasjon?",
      options: ["Lockes parter samtykker med full informasjon om egen situasjon; Rawls' velger bak uvitenhetssløret", "Begge de to tenkernes parter velger tvert imot bak ett og samme uvitenhetsslør", "Lockes parter vet i praksis atskillig mindre om alt enn Rawls' parter", "Ingen av de to tenkernes parter vet noe som helst om seg selv"],
      explanation: "Dette er den dypeste sammenligningsdimensjonen — informasjonsbetingelsen.",
    },
    {
      question: "Hva er den dypeste forskjellen mellom Lockes og Rawls' kontrakt?",
      options: ["Informasjonsbetingelsen — full informasjon (Locke) vs. uvitenhetsslør (Rawls)", "Rett og slett at Locke levde og skrev flere hundre år tidligere enn Rawls gjorde", "At Rawls skrev sitt verk på engelsk, mens Locke skrev sitt på latin", "At Locke var britisk statsborger, mens Rawls var amerikansk"],
      explanation: "Sløret er det som gir Rawls upartiske prinsipper; å stoppe ved «historisk vs. hypotetisk» er utilstrekkelig.",
    },
    {
      question: "Hva er Hume-kritikken av stilltiende samtykke?",
      options: ["At stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet, så det å bli er ikke et fritt valg", "At det stilltiende samtykket tvert imot gir altfor lite bindende makt til staten", "At det utelukkende er de aller rikeste som overhodet kan gi stilltiende samtykke", "At ethvert samtykke i praksis aldri noen gang kan være virkelig bindende"],
      explanation: "Humes skipsbilde: å «kunne» hoppe i havet gjør ikke at man har samtykket til å bli om bord.",
    },
    {
      question: "Hva illustrerer Humes «skipsbilde»?",
      options: ["At en teoretisk mulighet til å forlate ikke gjør det å bli til et fritt samtykke", "At selve staten i bunn og grunn er å ligne med et stort skip som har en fast kaptein", "At selve samfunnet i praksis alltid er i stadig og konstant bevegelse", "At det alltid er de aller svakeste som til slutt kastes over bord"],
      explanation: "En sovende mann om bord har ikke «samtykket» bare fordi han kunne ha kastet seg i havet.",
    },
    {
      question: "Hva er kontraktens formål ifølge Locke?",
      options: ["Å beskytte menneskenes naturlige rettigheter — liv, frihet og gods", "Å fordele alle samfunnets goder og byrder fullstendig likt mellom alle", "Å maksimere statens samlede makt og myndighet så mye som overhodet mulig", "Å velge fordelingsprinsipper bak et tett uvitenhetsslør"],
      explanation: "Staten er et middel til å verne rettigheter man har forut for staten.",
    },
    {
      question: "Hva er «naturlige rettigheter» hos Locke?",
      options: ["Rettigheter menneskene har forut for staten: liv, frihet og eiendom", "De rettighetene som selve staten aktivt tildeler hver enkelt borger ved fødsel", "De prinsippene som partene til slutt velger bak selve uvitenhetssløret", "Rettigheter som utelukkende de opprinnelige naturfolkene har"],
      explanation: "De finnes før staten; kontrakten skaper dem ikke, men beskytter dem.",
    },
    {
      question: "Hva hviler en regjerings legitimitet på ifølge Locke?",
      options: ["De styrtes fortsatte samtykke", "Statens rene militære overlegenhet", "En historisk engangsavtale fra fortiden", "Rawls' to rettferdighetsprinsipper"],
      explanation: "Svikter regjeringen formålet eller blir tyrannisk, kan folket trekke samtykket tilbake.",
    },
    {
      question: "Hva er den typiske feilen (#8) i en Locke↔Rawls-sammenligning?",
      options: ["Ensidig sammenligning — bare det ene leddet, eller begge uten eksplisitte dimensjoner", "Å gjøre begge de to posisjonene svært presise og grundig redegjort for gjennom hele svaret", "Å sette opp flere tydelige og eksplisitte sammenligningsdimensjoner", "Å nevne både likhetene og forskjellene mellom de to tenkerne"],
      explanation: "En sammenligning krever begge posisjoner presise + felles akser de vurderes langs.",
    },
    {
      question: "Hvorfor er «historisk vs. hypotetisk» en utilstrekkelig sammenligningsdimensjon?",
      options: ["Fordi den ikke fanger hvorfor teoriene gir ulike resultater — det gjør informasjonsbetingelsen", "Rett og slett fordi Locke i bunn og grunn slett ikke er en historisk tenker i det hele tatt likevel", "Rett og slett fordi også Rawls' egen kontrakt er helt faktisk og reell", "Rett og slett fordi ingen av de to teoriene egentlig handler om tid"],
      explanation: "Det er sløret (informasjon), ikke det hypotetiske i seg selv, som gir Rawls upartiskhet.",
    },
    {
      question: "En innvandrer bruker landets veier og rettsvesen i årevis uten borgerskapsed. Er hun forpliktet ifølge Locke?",
      options: ["Ja — hun har gitt stilltiende samtykke ved å nyte godt av samfunnets goder", "Nei — uten et helt uttrykkelig og erklært samtykke har hun ingen forpliktelser", "Ja — rett og slett fordi Rawls' egne prinsipper krever nettopp det", "Nei — Lockes teori gjelder uansett bare for dem som er født inn i landet selv"],
      explanation: "Ved å ta imot fordelene aksepterer hun forpliktelsene, «så lenge hun nyter godene».",
    },
    {
      question: "Hva ville Hume innvendt mot at innvandreren har «samtykket»?",
      options: ["At samtykket er en fiksjon hvis hun ikke reelt kunne dratt et annet sted", "At hun i stedet uttrykkelig og aktivt burde ha gitt et helt erklært samtykke", "At hun i praksis ikke har nytt tilstrekkelig godt av samfunnets mange goder", "At det uansett bare er selve staten som gyldig kan gi et samtykke"],
      explanation: "Mangler hun språk, midler eller nettverk andre steder, er det å bli ikke et fritt valg.",
    },
    {
      question: "Hva er «prinsippvalg vs. samtykke»-dimensjonen?",
      options: ["Rawls konstruerer fordelingsprinsipper; Locke verner førpolitiske rettigheter ved samtykke", "At begge de to tenkerne i bunn og grunn konstruerer helt nye fordelingsprinsipper helt fra grunnen", "At begge de to tenkerne først og fremst verner om de naturlige rettighetene", "At Locke velger prinsipper, mens Rawls tvert imot gir sitt samtykke"],
      explanation: "Rawls skaper rettferdigheten; Locke beskytter rettigheter man allerede har.",
    },
    {
      question: "Hva er naturtilstanden hos Locke?",
      options: ["Tilstanden før det politiske samfunnet, der man har rettigheter men mangler felles dommer og håndhevelse", "Rett og slett selve den hypotetiske utgangsposisjonen bak uvitenhetssløret slik den er tenkt hos Rawls selv", "En tilstand av fullstendig lovløshet og kaos helt uten noen rettigheter", "Selve den tilstanden som oppstår etter at staten er fullstendig avskaffet"],
      explanation: "Ulempene ved naturtilstanden er grunnen til at menneskene samtykker i å danne stat.",
    },
    {
      question: "Hva binder det store flertallet som aldri har gitt uttrykkelig samtykke?",
      options: ["Det stilltiende samtykket — utledet av at de nyter samfunnets goder", "Absolutt ingenting som helst binder dem; de er slett ikke forpliktet", "Rett og slett selve uvitenhetssløret slik det er tenkt hos Rawls selv", "En helt skriftlig og bindende kontrakt inngått allerede ved fødselen"],
      explanation: "Nettopp her setter Hume inn sin kritikk om at samtykket er fiktivt.",
    },
    {
      question: "Hva bør en A-besvarelse i sammenligningen fremheve som det subtile ekstra?",
      options: ["At forskjellen ligger i informasjonsbetingelsen (full informasjon vs. slør), ikke bare i tid/faktisitet", "Rett og slett det at Locke som person levde og virket svært lenge før Rawls overhodet ble født inn i verden", "At begge de to teoriene tross alt er en form for kontraktteori", "At Rawls' bok rett og slett er atskillig lengre enn Lockes bok"],
      explanation: "Presist dimensjonsvalg — å velge informasjonsbetingelsen — er selvstendigheten sensor belønner.",
    },
    {
      question: "Hvorfor er staten «instrumentell» hos Locke?",
      options: ["Fordi den finnes for å beskytte de naturlige rettighetene, ikke som et mål i seg selv", "Rett og slett fordi selve staten skal maksimere den samlede nytten og lykken i hele samfunnet", "Rett og slett fordi det er staten selv som konstruerer rettferdigheten", "Rett og slett fordi selve staten til slutt eier all eiendom i samfunnet"],
      explanation: "Derfor kan legitimiteten falle bort hvis staten svikter sitt formål.",
    },
    {
      question: "Hva kjennetegner et E-nivå-svar på kontrakt-sammenligningen?",
      options: ["Bare det ene leddet (Locke eller Rawls), eller begge gjengitt uten dimensjoner", "Begge posisjonene presist redegjort pluss to eksplisitte dimensjoner og en kort vurdering", "Begge posisjonene korrekt gjengitt, men med sammenligningsdimensjonene bare løst antydet", "Selve informasjonsbetingelsen valgt helt presist som dimensjon"],
      explanation: "A har eksplisitte dimensjoner inkl. informasjonsbetingelsen; C er korrekt men løst; E er ensidig.",
    },
    {
      question: "Hvilken likhet bør en balansert Locke↔Rawls-sammenligning også nevne?",
      options: ["At begge er kontraktteoretikere som begrunner autoritet ved en form for tilslutning og tar individet som utgangspunkt", "At begge de to tenkerne bygger hele sin teori på ett og samme uvitenhetsslør", "At begge de to tenkerne fullstendig avviser og forkaster de naturlige rettighetene", "At begge to mener at selve staten skal maksimere den samlede nytten"],
      explanation: "Et A-svar behandler både likheter og forskjeller; å bare fremheve forskjeller er ubalansert.",
    },
  ],
  'stv1100-2-4': [
    {
      question: "Hva er rettferdighet i staten for Platon?",
      options: ["Arbeidsdeling etter naturlige anlegg — hver gjør det han er best egnet til", "At staten skal sikre absolutt alle borgerne de samme grunnleggende kapabilitetene", "At alle borgere skal ha nøyaktig like mye eiendom og makt", "At det til slutt er flertallet som bestemmer gjennom avstemning"],
      explanation: "Platons sentrale poeng: rettferdighet = arbeidsdeling etter anlegg, hver på sin rette plass. (Svaret om at staten skal sikre alle borgerne de samme grunnleggende kapabilitetene, er Nussbaum.)",
    },
    {
      question: "Hva er det *sentrale poenget* man må treffe i en redegjørelse for Platons rettferdighet?",
      options: ["Koblingen til naturlige anlegg — arbeidsdeling *etter egnethet*", "At selve staten er bygd opp av nøyaktig tre helt atskilte klasser", "At Platon i sin tid skrev den store dialogen Staten om nettopp dette", "At vokterne i staten fullstendig mangler all eiendom"],
      explanation: "Effektiv arbeidsdeling finnes overalt; Platons poeng er at delingen følger medfødt egnethet. Mister man 'etter anlegg', mister man kjernen (feil #1).",
    },
    {
      question: "Hvilken dyd knytter Platon til de styrende (vokterne)?",
      options: ["Visdom", "Mot (tapperhet)", "Måtehold", "Rettferdighet"],
      explanation: "Styrende–visdom, krigere–mot, produsenter–måtehold. Rettferdighet er helhetsdyden, ikke én gruppes dyd.",
    },
    {
      question: "Hvilken dyd hører til krigerne (hjelperne) i Platons stat?",
      options: ["Mot", "Visdom", "Måtehold", "Klokskap"],
      explanation: "Krigerne forsvarer staten; deres dyd er mot.",
    },
    {
      question: "Hvilken dyd hører til produsentene (næringsdrivende)?",
      options: ["Måtehold", "Mot (tapperhet)", "Visdom", "Rettferdighet"],
      explanation: "Produsentene sørger for det materielle; deres dyd er måtehold.",
    },
    {
      question: "Hva er rettferdighet i staten *ikke* for Platon?",
      options: ["En særdyd for én enkelt gruppe — den er tvert imot helhetsdyden som holder delingen ren", "Rett og slett selve arbeidsdelingen i staten etter den enkeltes medfødte naturlige anlegg", "At hver enkelt borger befinner seg på sin egen rette plass", "At ingen griper forstyrrende inn i andres tildelte oppgave"],
      explanation: "Rettferdighet er ikke visdom, mot eller måtehold, men ordenen som lar de tre gjøre sitt.",
    },
    {
      question: "Hvorfor fratar Platon vokterne privateiendom og familie?",
      options: ["For å hindre maktmisbruk — fjerne motivet til å styre for egen vinning", "Fordi selve eiendommen i seg selv er dypt umoralsk for absolutt alle borgere", "Rett og slett for å spare inn penger til forsvaret av hele bystaten Athen", "Fordi vokterne skal være fattige som et ideal i seg selv"],
      explanation: "Uten personlig formue eller slekt å tilgodese mangler de styrende motivet til å misbruke makten; det er et middel mot maktmisbruk.",
    },
    {
      question: "Hva menes med at Platons rettferdighetsargument bygger på 'deskriptive antagelser + normative premisser'?",
      options: ["Det utleder rettferdighet fra faktapåstander om anlegg PLUSS verdipåstander om hva som bør være", "At hele argumentet er rent beskrivende, helt uten noen form for verdivurderinger", "At det er ren normativ postulering helt uten noe faktagrunnlag", "At det utelukkende og fullstendig bygger på religiøse premisser"],
      explanation: "Deskriptivt: mennesker er ulikt utrustet. Normativt: hver på sin plass er godt. Sammen gir de konklusjonen. Å se dette er et subtilt A-poeng.",
    },
    {
      question: "Et eksempel på en *deskriptiv antagelse* hos Platon er:",
      options: ["Mennesker er født ulikt utrustet for ulike oppgaver", "At hver enkelt borger bør være nettopp på sin egen rette plass", "At selve enheten i staten er et virkelig gode i seg selv", "At staten som helhet bør være rettferdig og velordnet innad"],
      explanation: "Deskriptivt = hvordan verden faktisk er. Ulike anlegg er en faktapåstand; de øvrige er verdipåstander.",
    },
    {
      question: "Hva menes med 'enhet og enighet' i Platons stat?",
      options: ["At den velordnede staten er samstemt og 'går av seg selv'", "At absolutt alle borgerne har helt identiske meninger påtvunget ovenfra", "At staten er militært samlet og rustet mot alle ytre fiender", "At all eiendom i staten er felleseie mellom borgerne"],
      explanation: "Enhet er resultatet av at arbeidsdelingen holdes ren: ingen strid om plassene, staten henger sammen som en organisme.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver langt om Platons idélære og hulelignelse i en oppgave om rettferdighet i staten?",
      options: ["#2 utenomsnakk/bredde i stedet for presisjon", "#8 en ensidig og ubalansert sammenligning av to tenkere", "#1 å miste selve det sentrale poenget i oppgaven", "#7 gjennomgående upresise og uklare fagbegreper"],
      explanation: "Metafysikken er ikke det oppgaven spør om; å ramse den opp er breddesynsing (#2) som gir null uttelling.",
    },
    {
      question: "Hva er parallellen mellom staten og sjelen hos Platon?",
      options: ["Fornuft–mot–begjær i sjelen svarer til styrende–krigere–produsenter i staten", "At selve sjelen har nøyaktig fire deler, akkurat slik staten har fire klasser", "At sjelen i seg selv er helt irrelevant for Platons politiske teori", "At det er begjæret som styrer sjelen hos det rettferdige mennesket"],
      explanation: "Rettferdighet i sjelen er samme orden som i staten: fornuften (styrende) styrer, motet (krigere) og begjæret (produsenter) fyller sitt.",
    },
    {
      question: "Hvorfor bygger Platon opp *staten* før han behandler den enkelte sjel?",
      options: ["Fordi rettferdighet er lettere å se 'i stort' i staten enn 'i smått' i sjelen", "Fordi selve staten moralsk sett er langt viktigere enn nettopp det enkelte individet", "Rett og slett fordi den enkelte sjelen ikke kan være rettferdig", "Fordi han bare er opptatt av politikk, og aldri av etikk"],
      explanation: "Grepet er metodisk: se rettferdigheten i stort først, overfør så til den enkelte.",
    },
    {
      question: "I en sitattolkning (SIT): hvilken funksjon har utdraget om at 'mennesker er født ulike og egner seg for hver sin oppgave'?",
      options: ["Premiss — den deskriptive antagelsen arbeidsdelingen utledes fra", "En ren beskrivelse av selve sluttresultatet, nemlig enheten i staten", "En begrunnelse for et middel som er rettet mot maktmisbruk hos vokterne", "En ren illustrasjon helt uten noen argumentativ funksjon"],
      explanation: "Utsagnet om ulike anlegg er startpremisset som hele læren bygger på.",
    },
    {
      question: "Hva er den klassiske kjernefeilen (#1) i en Platon-redegjørelse?",
      options: ["Å beskrive staten uten koblingen til arbeidsdeling etter naturlige anlegg", "Å nevne alle de tre ulike gruppene eller klassene som selve staten består av", "Å nevne vokternes fullstendige mangel på all eiendom", "Å sammenligne hele Platons teori direkte med Nussbaum"],
      explanation: "Uten 'etter anlegg' er det sentrale poenget mistet og redegjørelsen faller til svak.",
    },
    {
      question: "Hva er hovedskillet mellom Platon og Nussbaum i en sammenligning?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet (Nussbaum)", "Universelle prinsipper (Platon) vs. kulturbestemt fordeling (Nussbaum)", "Negativ frihet (Platon) vs. positiv frihet og selvstyre (Nussbaum)", "Hypotetisk kontrakt (Platon) vs. faktisk samtykke (Nussbaum)"],
      explanation: "Platon plasserer ulikt etter anlegg (hierarki); Nussbaum sikrer alle de samme kapabilitetene (likhet).",
    },
    {
      question: "Hvilket *fellespunkt* kan trekkes frem i en Platon–Nussbaum-sammenligning?",
      options: ["Begge vil at staten skal legge til rette for at menneskelige anlegg/evner utvikles (aristotelisk slektskap)", "At begge de to tenkerne bygger hele sin rettferdighetsteori på en klassisk samfunnskontrakt", "At begge to fullstendig avviser og benekter at menneskene er ulike", "At begge to i bunn og grunn er rene relativister om alle verdier"],
      explanation: "Det aristoteliske slektskapet — staten skal utvikle menneskelige anlegg — er et presist fellespunkt som løfter sammenligningen.",
    },
    {
      question: "Hva gjør en Platon–Nussbaum-sammenligning *ensidig og svak* (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å tydelig navngi selve forskjellen i anlegg kontra menneskelig likhet", "Å trekke fram et presist og treffende fellespunkt mellom de to", "Å holde begge de to posisjonene helt presise og etterrettelige"],
      explanation: "En sammenligning uten eksplisitte dimensjoner er bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hva er vokternes *oppgave* i Platons stat?",
      options: ["Å styre staten med innsikt", "Å forsvare staten i krig", "Å dyrke jorda og drive handel", "Å velge nye borgere ved loddtrekning"],
      explanation: "De styrende (voktere i snever forstand) styrer med innsikt; forsvar er krigernes oppgave.",
    },
    {
      question: "Hvorfor er det viktig å presisere at vokternes eiendomsløshet er 'et middel', ikke en asketisk detalj?",
      options: ["Fordi det binder regelen til rettferdighetslæren: å fjerne privatinteresser holder de styrende på sin rette plass", "Rett og slett fordi Platon i bunn og grunn selv var en prinsipiell motstander av absolutt all privat eiendom likevel", "Rett og slett fordi det tydelig viser at Platon selv var svært fattig", "Rett og slett fordi det bare er en tilfeldig kuriositet uten betydning"],
      explanation: "Regelen er mekanismen mot maktmisbruk og binder tilbake til at hver skal gjøre sitt — et subtilt A-poeng.",
    },
  ],
  'stv1100-2-5': [
    {
      question: "Hva måler Nussbaums kapabilitetstilnærming rettferdighet ut fra?",
      options: ["Hva folk faktisk er i stand til å være og gjøre (kapabiliteter)", "Hvor godt selve makten er fordelt mellom de ulike klassene i samfunnet", "Hvor mye inntekt og formue hver enkelt borger faktisk rår over selv", "Hvor mange formelle rettigheter selve loven gir borgerne"],
      explanation: "Nussbaum flytter målestokken fra ressurser/formelle rettigheter til reelle funksjonsmuligheter.",
    },
    {
      question: "Hva er sosial rettferdighet for Nussbaum?",
      options: ["At alle borgere har de artsbestemte kapabilitetene på plass over en terskel", "At hver enkelt borger plasseres etter sine egne helt naturlige medfødte anlegg", "At absolutt alle borgerne til slutt har nøyaktig lik inntekt", "At det er selve flertallet som til slutt bestemmer hele fordelingen av godene"],
      explanation: "Sentralt poeng (2025 b): kapabilitetene på plass, ikke bare formell frihet. (Svaret om å plassere hver borger etter medfødte anlegg er Platon.)",
    },
    {
      question: "Hva er forskjellen mellom en kapabilitet og en funksjon?",
      options: ["Kapabilitet = muligheten til å være/gjøre noe; funksjon = den faktiske utøvelsen", "Kapabiliteten er tvert imot selve utøvelsen, mens funksjonen er den blotte muligheten", "De to begrepene betyr i praksis nøyaktig det samme, både hos Nussbaum og hos andre", "Kapabiliteten er økonomisk, mens funksjonen er rent politisk"],
      explanation: "Staten sikrer muligheten (kapabilitet); om du bruker den (funksjon) er ditt valg. Skillet verner valgfriheten.",
    },
    {
      question: "Hvorfor sikrer staten kapabiliteten, men ikke funksjonen, ifølge Nussbaum?",
      options: ["For å verne valgfriheten — du velger selv om du utøver muligheten", "Rett og slett fordi selve funksjonene i praksis er helt umulige å måle", "Fordi staten rett og slett mangler ressurser til å sikre begge deler", "Fordi selve funksjonene uansett bare gjelder de aller rikeste"],
      explanation: "Å tvinge frem utøvelsen ville vært paternalistisk; å sikre muligheten respekterer den enkeltes valg.",
    },
    {
      question: "Hva menes med at kapabilitetene er 'artsbestemte'?",
      options: ["De knytter an til hva et menneskeliv er, på tvers av kulturer", "At de rett og slett bestemmes helt av hvilken art av dyr man tilhører", "At de varierer helt fritt fra den ene kulturen til den andre", "At de utelukkende gjelder biologiske behov som mat og søvn"],
      explanation: "Artsbestemte = hører til det å være menneske; derfor gjelder listen for alle mennesker (universalisme).",
    },
    {
      question: "Hva er en 'terskel' i Nussbaums teori?",
      options: ["Et minstenivå av hver kapabilitet alle må komme over", "Selve grensen for hvor rike borgerne får lov til å bli", "Det samlede antallet kapabiliteter oppført på hele listen", "Selve skillet mellom borgere og ikke-borgere i samfunnet"],
      explanation: "Under terskelen på en kapabilitet er man behandlet urettferdig, uansett rikdom ellers.",
    },
    {
      question: "Hvorfor holder det ikke, for Nussbaum, å gi alle formelle rettigheter?",
      options: ["Fordi rettigheter er tomme hvis folk ikke faktisk kan bruke dem", "Rett og slett fordi selve rettighetene i seg selv er dypt umoralske", "Fordi det utelukkende er staten selv som skal ha slike rettigheter", "Fordi selve rettighetene uansett alltid er ulikt fordelt"],
      explanation: "Sosial rettferdighet er et positivt krav på reelle muligheter, ikke bare fravær av formelle hindringer.",
    },
    {
      question: "Hva er 'universalisme' i Nussbaums teori?",
      options: ["At kapabilitetslisten gjelder alle mennesker på tvers av kulturer", "At hvert enkelt samfunn selv lager og fastsetter sin helt egen liste", "At absolutt alle borgerne til slutt skal ha nøyaktig lik inntekt og formue", "At selve staten skal være universelt til stede overalt"],
      explanation: "Universalisme = én felles liste for alle; gir et mål på urett, men risikerer verdiimperialisme. IKKE pluralisme.",
    },
    {
      question: "Hva er 'pluralisme/suverenitet' i Nussbaums teori?",
      options: ["At hvordan hver kapabilitet fylles ut, overlates til det enkelte samfunn", "At det finnes svært mange ulike lister som hele tiden konkurrerer innbyrdes", "At det er mange ulike partier som styrer landet sammen", "At absolutt alle verdier i praksis er like gyldige"],
      explanation: "Pluralisme = lokal spesifisering av utfyllingen. IKKE forveksles med universalisme — det er den flaggete feil #7.",
    },
    {
      question: "Hva er 'pragmatisk pluralisme' hos Nussbaum?",
      options: ["Universelle 'generelle målsettinger' spesifisert lokalt — universell liste, lokal utfylling", "At man rett og slett velger seg pluralismen utelukkende av rene praktiske hensyn og gode grunner", "At hele listen forkastes til fordel for de rent lokale verdiene", "At det utelukkende er de aller rikeste samfunnene som får spesifisere"],
      explanation: "Grepet som prøver å holde universalisme og pluralisme samtidig: listen er felles, utfyllingen kulturbestemt.",
    },
    {
      question: "Hva er det subtile A-poenget om forholdet universalisme–pluralisme?",
      options: ["At det er en varig spenning Nussbaum forvalter, ikke et rent valg", "At Nussbaum til syvende og sist fullstendig forkaster hele universalismen", "At Nussbaum til slutt helt forkaster og oppgir den lokale pluralismen", "At de to begrepene i bunn og grunn betyr det samme"],
      explanation: "Nussbaum vil ha begge; teorien lever med motsetningen. Å se dette som en spenning løfter til A.",
    },
    {
      question: "Hva skjer hvis man drar for hardt mot pluralisme (all utfylling blir lokal)?",
      options: ["Den universelle kjernen uthules — kulturer kan 'velge bort' kapabiliteter", "Da blir tvert imot selve universalismen enda mye betydelig sterkere enn før", "Selve terskelen forsvinner ikke og består uansett fullt ut", "Absolutt ingenting endrer seg i det hele tatt her"],
      explanation: "For mye lokal suverenitet fjerner den felles standarden mot urett.",
    },
    {
      question: "Hva skjer hvis man drar for hardt mot universalisme (streng felles liste)?",
      options: ["Lokal suverenitet presses — teorien risikerer verdiimperialisme", "Da blir tvert imot selve pluralismen enda betydelig sterkere enn før", "Da forsvinner tvert imot samtlige kapabiliteter helt ut av teorien", "Da heves selve terskelen automatisk og helt av seg selv"],
      explanation: "For streng universalisme påtvinger lokale samfunn en bestemt verdiforståelse.",
    },
    {
      question: "Hvordan begrunner Nussbaum kapabilitetslisten?",
      options: ["Aristotelisk — staten skal legge til rette for at menneskelige anlegg utvikles", "Rett og slett ved en direkte flertallsavstemning i hvert lokalsamfunn", "Ved en klassisk samfunnskontrakt inngått bak et tett uvitenhetsslør", "Ved en direkte henvisning til Platons berømte idélære"],
      explanation: "Den aristoteliske begrunnelsen: kapabilitetene fanger hva menneskelig blomstring krever.",
    },
    {
      question: "Hva er hovedskillet mellom Nussbaum og Platon i en sammenligning?",
      options: ["Menneskelig likhet (Nussbaum) vs. forskjell i anlegg (Platon)", "Universelle prinsipper (Nussbaum) vs. kulturbestemt fordeling (Platon)", "Negativ frihet (Nussbaum) vs. positiv frihet og selvstyre (Platon)", "Hypotetisk kontrakt (Nussbaum) vs. uttrykkelig samtykke (Platon)"],
      explanation: "Nussbaum sikrer alle likt; Platon plasserer ulikt etter anlegg (hierarki).",
    },
    {
      question: "Hvilket fellespunkt har Nussbaum og Platon?",
      options: ["Begge mener staten skal legge til rette for at menneskelige anlegg/evner utvikles (aristotelisk)", "At begge de to tenkerne bygger sin rettferdighetsteori på en samfunnskontrakt", "At begge to fullstendig avviser og benekter at menneskene er ulike", "At begge to i bunn og grunn er rene kulturrelativister om verdier"],
      explanation: "Det aristoteliske slektskapet er det presise fellespunktet i sammenligningen.",
    },
    {
      question: "Hva gjør en Nussbaum–Platon-sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å tydelig navngi selve likheten kontra forskjellen i naturlige anlegg", "Å trekke tydelig fram det aristoteliske fellespunktet", "Å holde begge de to posisjonene helt presise"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hvilken feil begår en kandidat som kaller Nussbaum 'pluralist' uten å nevne den universelle listen?",
      options: ["#7 upresise begreper (universalisme/pluralisme)", "#1 å miste selve det sentrale poenget i hele svaret", "#2 gjennomgående utenomsnakk og lavrelevant bredde", "#8 en ensidig og svak sammenligning av de to tenkerne"],
      explanation: "Å underslå at listen er universell er den flaggete presisjonsfeilen — Nussbaum holder begge sidene.",
    },
    {
      question: "Hvorfor kritiserer Nussbaum en ren ressurstilnærming?",
      options: ["Samme ressurser gir ulike reelle muligheter (helse, undertrykkelse osv.) — ressurser er middel, ikke mål", "Rett og slett fordi selve ressursene i praksis er helt umulige å måle presist", "Rett og slett fordi selve ressursene i seg selv er dypt umoralske", "Rett og slett fordi det bare er staten selv som bør eie alle ressurser"],
      explanation: "Det som teller er hva folk kan GJØRE med ressursene — altså kapabilitetene.",
    },
    {
      question: "Kroppslig integritet som kapabilitet brukes ofte for å vise:",
      options: ["At en kultur ikke kan 'velge den bort' — en grunn til den universelle listen", "At absolutt alle kapabilitetene i bunn og grunn utelukkende er rent fysiske av natur", "At selve funksjonen er langt viktigere enn selve kapabiliteten", "At hele terskelen i teorien er fullstendig unødvendig"],
      explanation: "Trygghet mot vold og overgrep er et håndfast eksempel på hvorfor listen må være universell.",
    },
    {
      question: "I en sitattolkning: hva er funksjonen til et utdrag der Nussbaum sier 'listen gjelder alle, men utfyllingen overlates til hvert samfunn'?",
      options: ["Å uttrykke spenningen universalisme↔pluralisme (pragmatisk pluralisme)", "Rett og slett å innføre og presentere selve kapabilitetslisten i hele teorien", "Rett og slett å definere hva selve terskelen er", "Fullstendig å avvise og forkaste hele universalismen"],
      explanation: "Utdraget viser hvordan Nussbaum holder begge samtidig — universell liste, lokal utfylling.",
    },
    {
      question: "Hva er det sentrale poenget man må treffe om sosial rettferdighet (2025 b)?",
      options: ["At alle har kapabilitetene på plass — ikke bare formell frihet", "At hele kapabilitetslisten har nøyaktig og eksakt ti ulike punkter", "At Nussbaum i bunn og grunn bygger på Aristoteles", "At selve kapabiliteten skilles klart fra den faktiske funksjonen"],
      explanation: "Kjernen i 2025 b: kapabilitetene på plass over en terskel, mer enn formelle rettigheter.",
    },
    {
      question: "Hvorfor er skillet kapabilitet/funksjon et subtilt A-poeng?",
      options: ["Det viser at teorien verner valgfrihet og unngår paternalisme", "Rett og slett at det viser at Nussbaum fullstendig avviser all frihet", "Det er et rent teknisk skille helt uten noen betydning", "Det gjør hele teorien om til en ren ressursteori"],
      explanation: "Ved å sikre muligheten (ikke tvinge utøvelsen) respekterer Nussbaum den enkeltes valg.",
    },
    {
      question: "Hva bør man IKKE gjøre i en Nussbaum-redegjørelse (feil #2)?",
      options: ["Dra inn løs 'godt liv'-filosofi uten å forankre i kapabilitetslisten og terskelen", "Å nevne alle de artsbestemte kapabilitetene svært grundig og presist gjennom hele svaret", "Å gi en presis og tydelig definisjon av sosial rettferdighet", "Å skille selve universalismen klart og tydelig fra pluralismen"],
      explanation: "Utenomsnakk uten forankring i apparatet er breddesynsing; presisjon slår bredde.",
    },
  ],
  'stv1100-2-6': [
    {
      question: "Hva bestemmer velferdens omfang for Walzer?",
      options: ["En kulturbestemt fellesbeslutning i fellesskapet («communal provision»)", "Et helt universelt og allmenngyldig rettferdighetsprinsipp for alle samfunn", "Selve markedet helt alene og uten noen form for politisk innblanding overhodet", "De aller rikeste borgernes frivillige gavmildhet"],
      explanation: "Sentralt poeng: velferdens omfang er en kulturbestemt fellesbeslutning, ikke et universelt prinsipp — kontrasten til Rawls.",
    },
    {
      question: "Hva betyr «communal provision» hos Walzer?",
      options: ["Det fellesskapet i fellesskap sørger for til sine medlemmer", "Privat veldedighet som organiseres og drives i regi av kirken", "En helt universell minsteinntekt som er lik for alle landets borgere", "Selve markedets frie fordeling av alle godene"],
      explanation: "Communal provision = fellesskapets felles forsyning, hvis omfang bestemmes kulturbestemt.",
    },
    {
      question: "Hva er det sentrale poenget man må treffe om Walzer?",
      options: ["At velferdens omfang er en kulturbestemt fellesbeslutning", "At Walzer i sin tid skrev det store verket Spheres of Justice", "Rett og slett at det bør finnes en eller annen form for velferd", "Rett og slett at selve markedet i seg selv er dypt urettferdig"],
      explanation: "Mister man 'kulturbestemt fellesbeslutning', mister man kjernen og kontrasten til Rawls (#1).",
    },
    {
      question: "Hva er hovedkontrasten mellom Rawls og Walzer?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesforståelse (Walzer)", "Negativ frihet hos Rawls kontra ren positiv frihet hos Walzer i hele samfunnet", "Hypotetisk kontrakt hos Rawls kontra faktisk og uttrykkelig samtykke hos Walzer", "Ikke-dominans hos Rawls kontra ren dominans hos Walzer"],
      explanation: "Rawls søker prinsipper for alle samfunn bak sløret; Walzer forankrer fordelingen i det enkelte fellesskapets forståelser.",
    },
    {
      question: "Hvorfor er Walzer IKKE en ren relativist?",
      options: ["Han gir en pluralistisk, sfære-basert teori med indre kriterier i hver sfære", "Rett og slett fordi han i bunn og grunn mener at absolutt alt sammen er tilfeldig", "Fordi han fullstendig avviser at all fordeling har prinsipper", "Fordi han trofast følger Rawls' helt universelle prinsipper"],
      explanation: "Ulike goder fordeles etter ulike sfære-egne prinsipper; urett er sfære-krenkelse. Det er pluralisme, ikke prinsippløshet.",
    },
    {
      question: "Hva er en 'fordelingssfære' hos Walzer?",
      options: ["Et område der et gode fordeles etter sitt eget prinsipp (helse etter behov, embeter etter dyktighet)", "Rett og slett en tydelig avgrenset geografisk region innenfor landets faste grenser", "En bestemt og klart avgrenset samfunnsklasse i befolkningen", "En bestemt og avgrenset periode i selve verdenshistorien"],
      explanation: "Hver sfære har sitt fordelingsprinsipp; urett oppstår når ett godes logikk erobrer en annen sfære.",
    },
    {
      question: "Når oppstår urettferdighet i Walzers sfære-teori?",
      options: ["Når prinsippet fra én sfære trenger inn i en annen (penger kjøper helse eller makt)", "Rett og slett i det øyeblikket absolutt alle godene i samfunnet fordeles fullstendig likt", "Når fellesskapet i det hele tatt diskuterer selve omfanget", "Rett og slett i det øyeblikket staten sørger for velferd"],
      explanation: "Sfære-krenkelse — f.eks. rikdom som kjøper politisk makt — er kjernen i Walzers urettferdighetsbegrep.",
    },
    {
      question: "Hva menes med at borgerne 'stadig må diskutere' velferdens omfang?",
      options: ["Fordelingen er en pågående demokratisk forhandling som kan revideres", "At det ikke finnes noen fast fasit her, rett og slett fordi ingen bryr seg", "At det utelukkende er ekspertene som kan avgjøre spørsmålet om omfanget", "At omfanget fastsettes én gang for alle bak et uvitenhetsslør"],
      explanation: "Fordi omfanget er kulturbestemt og ikke gitt av et fast prinsipp, er det løpende omstridt — kontrast til Rawls' ferdige prinsipper.",
    },
    {
      question: "Hva er 'delte forståelser' (shared understandings) hos Walzer?",
      options: ["Fellesskapets felles meninger om hva godene er og betyr, som gir fordelingen dens kriterier", "Rett og slett en formell avtale undertegnet av absolutt alle borgerne i landet", "Rett og slett selve Rawls' berømte refleksive likevekt", "Selve markedets rene prissignaler og tilbud og etterspørsel"],
      explanation: "Et gode fordeles rettferdig når fordelingen samsvarer med den delte forståelsen av godet.",
    },
    {
      question: "Hvordan skiller Rawls og Walzer seg i antall prinsipper?",
      options: ["Rawls har ett universelt prinsippsett; Walzer har mange sfære-egne prinsipper", "Begge de to tenkerne har til slutt nøyaktig og eksakt to prinsipper hver for seg", "Walzer har bare ett prinsipp, mens Rawls tvert imot har mange", "Ingen av de to tenkerne har egentlig noen prinsipper i det hele tatt"],
      explanation: "Rawls: to prinsipper for alle goder. Walzer: ulike prinsipper i ulike sfærer.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver 'Walzer mener staten skal gi velferd' uten mer?",
      options: ["#1 miste det sentrale poenget (kulturbestemt fellesbeslutning)", "#7 å blande helt sammen selve den negative og den positive friheten", "#4 å hoppe helt over ett av sitatutdragene i en a)–e)-oppgave om Walzer", "#3 en helt unødig og altfor bred innledning"],
      explanation: "Alle velferdsteorier sier staten gir velferd; Walzers poeng er HVORDAN omfanget bestemmes.",
    },
    {
      question: "Hvordan kan Walzers communal provision belyse Pettits skille velferd vs. veldedighet (kap. 1.3)?",
      options: ["Velferd som fellesskapsforankret rettighet (ikke privat gave) fjerner dominansen ved veldedighet", "Rett og slett fordi den viser at privat veldedighet alltid er det beste valget", "At den fullstendig avviser og forkaster hele Pettits dominansbegrep", "Rett og slett at den til slutt gjør all velferd helt overflødig"],
      explanation: "Fordi omfanget er en fellesbeslutning, blir velferd en rettighet — ikke privat gavmildhet som gjør mottakeren dominert.",
    },
    {
      question: "Hva gjør en Rawls–Walzer-sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å tydelig navngi det universelle kontra det kulturbestemte som dimensjon", "Å holde begge de to posisjonene helt presise og tydelige", "Å trekke tydelig inn hele den sfære-baserte pluralismen"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hva er en mulig innvending mot Walzers kulturbestemte fordeling?",
      options: ["Den kan legitimere urett som fellesskapet selv godtar", "Rett og slett at den i praksis blir altfor universell for alle", "At den fullstendig overser alle kulturelle forskjeller mellom folk", "At den til slutt bygger på et tett og ugjennomtrengelig uvitenhetsslør"],
      explanation: "En kulturbestemt standard mangler et upartisk ankerpunkt mot urett som er innbakt i fellesskapets egne forståelser.",
    },
    {
      question: "Hva er en styrke ved Walzers tilnærming sammenlignet med Rawls?",
      options: ["Realisme og respekt for fellesskapets egen selvforståelse", "Rett og slett at den gir ett enkelt og helt universelt svar", "At den abstraherer helt bort fra de faktiske forståelsene", "Rett og slett at den fjerner absolutt all uenighet"],
      explanation: "Walzer forankrer fordeling i faktiske delte forståelser i stedet for i en abstrakt valgsituasjon.",
    },
    {
      question: "I hvilken sammenheng dukket Walzer opp i H2016-oppgaven?",
      options: ["Athenernes «communal provision» som avvik fra Walzer", "Rett og slett Nussbaums teori om menneskelige kapabiliteter", "Selve frihetsoppgaven om Berlin kontra Pettits ikke-dominans", "Rett og slett Machiavellis berømte verk om fyrstens maktbruk"],
      explanation: "H2016 c brukte athenernes communal provision som et case knyttet til Walzer.",
    },
    {
      question: "I en sitattolkning: hva er funksjonen til et utdrag der Walzer sier 'ulike goder fordeles etter ulike prinsipper, og urett er når ett erobrer et annet'?",
      options: ["Å uttrykke den pluralistiske, sfære-baserte teorien (Walzer er ikke ren relativist)", "Rett og slett å innføre og presentere hele selve grunnbegrepet om communal provision", "Rett og slett å beskrive selve den løpende fellesdiskusjonen om velferdens rette omfang", "Fullstendig å avvise at all fordeling har noen prinsipper"],
      explanation: "Utdraget viser sfære-pluralismen og presiserer kontrasten til Rawls' ene prinsippsett.",
    },
    {
      question: "Hvorfor bør man plassere Walzer opp mot Rawls i en eksamensbesvarelse?",
      options: ["Fordi det er der eksamensrelevansen ligger — Walzer opptrer nesten alltid som kontrastfigur", "Rett og slett fordi Walzer i bunn og grunn er fullstendig umulig å forstå på helt egen hånd alene", "Rett og slett fordi hele Rawls' teori i praksis bygger på Walzer", "Rett og slett fordi de to tenkerne er fullstendig enige om alt"],
      explanation: "Å beskrive Walzer isolert uten Rawls-kontrasten er utenomsnakk (#2); kontrasten er poenget.",
    },
  ],
  'stv1100-2-prove': [
    {
      question: "Hva kaller Rawls sin egen rettferdighetsteori?",
      options: ["Rettferdighet som rimelighet (justice as fairness)", "Rettferdighet forstått som ren arbeidsdeling etter anlegg", "Selve kapabilitetstilnærmingen slik Nussbaum utformer den", "Begrepet om communal provision hos Walzer"],
      explanation: "Rimeligheten ligger i valgsituasjonens upartiskhet (utgangsposisjonen bak sløret).",
    },
    {
      question: "Hva er utgangsposisjonen (original position)?",
      options: ["Den tenkte valgsituasjonen der partene velger rettferdighetsprinsipper", "En helt historisk og faktisk avtale inngått direkte mellom alle borgerne", "Selve fellesskapets delte forståelse av alle godene", "De styrendes egen tildelte plass i selve staten"],
      explanation: "Sammen med uvitenhetssløret er den kjernen i Rawls' apparat.",
    },
    {
      question: "Hva er uvitenhetssløret?",
      options: ["At partene ikke kjenner egen posisjon, evner eller livssyn", "At selve folket bevisst holdes uvitende og uopplyst av staten", "At man ikke vet hva de andre samfunnene rundt en faktisk gjør", "Selve beslutningsregelen man bruker under usikkerhet"],
      explanation: "Sløret sikrer upartiskhet. Beslutningsregelen er maximin — ikke forveksle.",
    },
    {
      question: "Hva er maximin-regelen?",
      options: ["Velg alternativet med best verst-tenkelig utfall", "Maksimer den samlede nytten for flest mulig borgere", "Velg alltid det aller mest sannsynlige utfallet", "Sikre alltid de aller rikeste borgerne mot ethvert tap"],
      explanation: "Rasjonelt under radikal usikkerhet: sikre deg mot det verste dersom du havner nederst.",
    },
    {
      question: "Hva gjør uvitenhetssløret med 'trussel-fordel' (threat advantage)?",
      options: ["Det nøytraliserer den — ingen kan skreddersy prinsipper til egen fordel", "Det forsterker den tvert imot kraftig for de aller sterkeste og mektigste partene", "Det gir tvert imot de sterke partene enda mer makt", "Det har ingen som helst virkning på forhandlingsmakten"],
      explanation: "Uten kjennskap til egen posisjon kan ingen presse gjennom prinsipper som favoriserer seg selv.",
    },
    {
      question: "Hva sier forskjellsprinsippet?",
      options: ["Ulikheter tillates kun hvis de er til størst fordel for de dårligst stilte", "At absolutt alle borgerne til enhver tid skal ha nøyaktig like mye av absolutt alt", "At enhver form for ulikhet alltid og uansett er urettferdig", "At de aller mest talentfulle borgerne rett og slett fortjener å tjene aller mest"],
      explanation: "Kjernen i Rawls' fordelingsrettferdighet (prinsipp 2b).",
    },
    {
      question: "Hva betyr den leksikalske forrangen?",
      options: ["Prinsipp 1 før 2a før 2b — frihet kan ikke ofres for velferd", "At selve prinsippene rett og slett rangeres i alfabetisk rekkefølge", "At det er forskjellsprinsippet som kommer aller først", "At absolutt alle prinsippene til slutt veier nøyaktig like tungt"],
      explanation: "Frihet før sjanselikhet før forskjellsprinsipp — et subtilt A-poeng.",
    },
    {
      question: "Hva er sosiale primærgoder?",
      options: ["Godene enhver rasjonell person vil ha uansett livsplan (rettigheter, inntekt, selvrespekt)", "Rett og slett utelukkende de rent materielle grunngodene i livet, som for eksempel mat og bolig", "Rett og slett bare de godene som de aller rikeste ønsker seg", "Selve kapabilitetene slik de står på Nussbaums berømte liste"],
      explanation: "Målestokken for hvem som er 'dårligst stilt'.",
    },
    {
      question: "Hvorfor er det naturlige/sosiale lotteriet relevant for Rawls?",
      options: ["Talent og fødsel er moralsk vilkårlige — det begrunner forskjellsprinsippet", "Rett og slett at det tydelig viser at all ulikhet er helt naturlig og rettferdig", "Rett og slett at det er helt irrelevant for hele teorien", "Rett og slett at det begrunner selve frihetsprinsippet"],
      explanation: "Ufortjente forskjeller skal ikke uten videre avgjøre folks kår.",
    },
    {
      question: "Er Rawls' kontrakt en historisk avtale?",
      options: ["Nei — et hypotetisk prinsippvalg, 'kontraktteori hevet til et høyere abstraksjonsnivå'", "Ja, det er tvert imot en helt faktisk og bindende avtale som ble inngått langt tilbake i fortiden", "Ja, det er en helt faktisk avtale som fornyes hvert eneste år", "Nei, men det er tvert imot et helt faktisk og pågående samtykke"],
      explanation: "Rawls velger prinsipper, ikke et faktisk styre. (Faktisk pågående samtykke er Locke.)",
    },
    {
      question: "Hva er det sentrale poenget en Rawls-redegjørelse ikke får mangle?",
      options: ["Utgangsposisjonen + uvitenhetssløret", "Selve begrepet communal provision hos Walzer", "De tre ulike gruppene i selve staten", "Selve skadeprinsippet slik Mill formulerer det"],
      explanation: "Rawls uten sløret/utgangsposisjonen er den klassiske kjernefeilen (#1).",
    },
    {
      question: "Hva er et subtilt A-poeng om uvitenhetssløret?",
      options: ["At ulike deler av sløret er ulikt godt teoretisk motivert", "Rett og slett at selve sløret dekker absolutt alt sammen like godt", "Rett og slett at sløret er nøyaktig det samme som maximin", "Rett og slett at sløret er en historisk kjensgjerning hos Rawls"],
      explanation: "Det veiledningen flagger som 'veldig bra' — nyansen som løfter til A.",
    },
    {
      question: "Hva er refleksiv likevekt?",
      options: ["At prinsipper og veloverveide oppfatninger justeres mot hverandre til de stemmer", "Rett og slett en direkte og fullt bindende avstemning holdt blant alle landets borgere", "Rett og slett selve maximin-regelen brukt under radikal usikkerhet", "Selve maktbalansen mellom de tre ulike klassene i staten"],
      explanation: "Rawls' metode: gjensidig tilpasning, ikke ren deduksjon.",
    },
    {
      question: "I Rawls-sitatoppgaven: hva er funksjonen til et utdrag om at 'partene ikke vet hvilken plass de vil få'?",
      options: ["Uvitenhetssløret — premiss/apparat som sikrer upartiskhet", "Rett og slett selve maximin-regelen brukt under usikkerhet", "Rett og slett selve det naturlige lotteriet slik Rawls beskriver det", "Rett og slett selve den refleksive likevekten i Rawls' metode"],
      explanation: "Utdraget beskriver sløret, ikke beslutningsregelen.",
    },
    {
      question: "I Rawls-sitatoppgaven: hva er funksjonen til et utdrag om at 'talent og fødsel er moralsk vilkårlig'?",
      options: ["Begrunnelsen for forskjellsprinsippet (det naturlige/sosiale lotteriet)", "Rett og slett selve uvitenhetssløret slik det er tenkt hos Rawls selv i teorien", "Rett og slett selve maximin-regelen under usikkerhet", "Rett og slett selve frihetsprinsippet hos Rawls"],
      explanation: "Det moralsk vilkårlige lotteriet er premisset for forskjellsprinsippet.",
    },
    {
      question: "Hva er den alvorligste feilen i en a)–d) sitatoppgave?",
      options: ["Å hoppe over ett eller flere utdrag (#4)", "Å plassere hvert utdrag presist i selve helheten", "Å tolke grundig og nøye alle de fire utdragene", "Å bruke helt presise og korrekte fagbegreper"],
      explanation: "Behandle ALLE utdrag — å hoppe over noen svekker svaret vesentlig.",
    },
    {
      question: "Hva er kjernekontrasten mellom Rawls og Locke?",
      options: ["Hypotetisk prinsippvalg bak slør (Rawls) vs. faktisk pågående samtykke med full informasjon (Locke)", "Rett og slett skillet mellom negativ frihet hos Rawls og positiv frihet hos Locke", "Universelle prinsipper hos Rawls kontra det kulturbestemte hos Locke", "Klok politikk hos Rawls kontra etisk politikk hos Locke"],
      explanation: "Informasjonsbetingelsen (slør vs. full informasjon) er den presise dimensjonen.",
    },
    {
      question: "Hva er stilltiende (tacit) samtykke hos Locke?",
      options: ["Den som nyter samfunnets goder har samtykket underforstått", "Rett og slett et helt eksplisitt og formelt undertegnet dokument", "Et samtykke som utelukkende gis bak selve uvitenhetssløret hos Rawls", "Fellesskapets egen kulturbestemte og felles beslutning om godene"],
      explanation: "IKKE bland med uttrykkelig samtykke (#7).",
    },
    {
      question: "Hva går Hume-kritikken av Locke ut på?",
      options: ["Stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet", "Rett og slett at Locke fullstendig overser og glemmer de aller mest dårligst stilte", "Rett og slett at Locke selv bruker et tett uvitenhetsslør", "Rett og slett at Locke i praksis er altfor universalistisk"],
      explanation: "Rammer Locke (faktisk samtykke), ikke Rawls.",
    },
    {
      question: "Hva er den presise sammenligningsdimensjonen mellom Locke og Rawls?",
      options: ["Informasjonsbetingelsen: full informasjon (Locke) vs. slør (Rawls)", "Selve antallet ulike rettferdighetsprinsipper hos de to ulike tenkerne", "De to tenkernes innbyrdes ulike syn på selve den private eiendomsretten", "De to tenkernes ulike syn på selve ytringsfriheten"],
      explanation: "Å velge informasjonsbetingelsen som dimensjon er det presise, A-givende grepet — mer enn bare 'historisk vs. hypotetisk'.",
    },
    {
      question: "Hva er det sentrale poenget i Platons rettferdighet?",
      options: ["Arbeidsdeling etter naturlige anlegg — hver på sin rette plass", "Rett og slett at det til syvende og sist er flertallet som bestemmer alt", "Rett og slett at absolutt alle sikres de samme kapabilitetene", "Rett og slett en kulturbestemt felles beslutning i fellesskapet"],
      explanation: "Mister man 'etter anlegg', faller redegjørelsen (#1).",
    },
    {
      question: "Hvilke tre grupper har Platons stat?",
      options: ["Produsenter, krigere, styrende (voktere)", "De fattige, hele middelklassen og de aller rikeste", "Vanlige borgere, slaver og alle de fremmede", "Selve fornuften, motet og begjæret i sjelen"],
      explanation: "Produsenter–måtehold, krigere–mot, styrende–visdom. (Fornuft/mot/begjær er sjelsparallellen.)",
    },
    {
      question: "Hvorfor fratar Platon vokterne eiendom og familie?",
      options: ["For å hindre maktmisbruk — fjerne motivet til å styre for egen vinning", "Rett og slett fordi all eiendom i seg selv er dypt umoralsk", "Rett og slett for å spare inn penger til staten", "For å gjøre vokterne fattige som et rent ideal"],
      explanation: "Et middel mot maktmisbruk, ikke en asketisk detalj.",
    },
    {
      question: "Hva menes med at Platons argument er 'deskriptivt + normativt'?",
      options: ["Det utleder rettferdighet fra faktapåstander (ulike anlegg) PLUSS verdipåstander (hver på sin plass er godt)", "Rett og slett at hele argumentet er rent beskrivende, uten noen form for verdivurderinger", "Rett og slett at det bare er ren normativ postulering", "Rett og slett at det utelukkende bygger på religiøse premisser"],
      explanation: "Å se at teorien bygges, ikke bare hevdes, er et subtilt A-poeng.",
    },
    {
      question: "Hva måler Nussbaums kapabilitetstilnærming rettferdighet ut fra?",
      options: ["Hva folk faktisk er i stand til å være og gjøre (kapabiliteter)", "Rett og slett selve fellesskapets delte forståelser av alle godene", "Utelukkende de rene ressursene og selve inntekten alene", "Utelukkende de rent formelle rettighetene helt alene"],
      explanation: "Reell mulighet, ikke ressurser eller formell frihet.",
    },
    {
      question: "Hva er sosial rettferdighet for Nussbaum?",
      options: ["At alle har de artsbestemte kapabilitetene på plass over en terskel", "Rett og slett en kulturbestemt felles beslutning i selve fellesskapet", "Rett og slett at absolutt alle borgerne har nøyaktig lik inntekt og formue", "Rett og slett at hver enkelt plasseres etter sine egne anlegg"],
      explanation: "Kapabilitetene på plass, ikke bare formell frihet (2025 b).",
    },
    {
      question: "Hva er skillet universalisme/pluralisme hos Nussbaum?",
      options: ["Én liste for alle (universalisme) vs. lokal spesifisering av utfyllingen (pluralisme)", "Rett og slett skillet mellom selve de rene ressursene og de menneskelige kapabilitetene", "Rett og slett to helt ulike og innbyrdes konkurrerende lister", "Selve skillet mellom en kapabilitet og en faktisk funksjon"],
      explanation: "Nussbaum holder begge (pragmatisk pluralisme). IKKE bland dem (#7).",
    },
    {
      question: "Hva er det subtile A-poenget om universalisme–pluralisme hos Nussbaum?",
      options: ["At det er en varig spenning hun forvalter, ikke et rent valg", "Rett og slett at hun til slutt fullstendig forkaster universalismen", "Rett og slett at hun helt forkaster og oppgir den lokale pluralismen", "Rett og slett at de to begrepene betyr nøyaktig det samme hos henne"],
      explanation: "Å se dette som en spenning viser forståelse av strukturen.",
    },
    {
      question: "Hva er hovedkontrasten mellom Platon og Nussbaum (2025 c)?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet (Nussbaum)", "Det helt universelle hos Platon kontra det kulturbestemte hos Nussbaum", "Den negative friheten hos Platon kontra den positive hos Nussbaum", "En hypotetisk kontrakt hos Platon kontra samtykke hos Nussbaum"],
      explanation: "Platon plasserer ulikt etter anlegg (hierarki); Nussbaum sikrer alle likt.",
    },
    {
      question: "Hvilket fellespunkt har Platon og Nussbaum?",
      options: ["Begge vil at staten skal legge til rette for at menneskelige anlegg utvikles (aristotelisk)", "Rett og slett at begge de to tenkerne bygger hele sin teori på en helt klassisk samfunnskontrakt", "Rett og slett at begge to i bunn og grunn er rene kulturrelativister", "Rett og slett at begge to fullstendig avviser all form for ulikhet"],
      explanation: "Det aristoteliske slektskapet er det presise fellespunktet.",
    },
    {
      question: "Hva bestemmer velferdens omfang for Walzer?",
      options: ["En kulturbestemt fellesbeslutning ('communal provision')", "Rett og slett et helt universelt og allmenngyldig prinsipp", "Rett og slett selve markedet helt alene, uten politisk styring", "De aller rikeste borgernes frivillige gavmildhet og veldedighet"],
      explanation: "Kontrasten til Rawls: kulturbestemt, ikke universelt.",
    },
    {
      question: "Hvorfor er Walzer ikke en ren relativist?",
      options: ["Han gir en pluralistisk, sfære-basert teori med indre kriterier", "Rett og slett fordi han mener at absolutt alt sammen er tilfeldig", "Rett og slett fordi han trofast følger Rawls' universelle prinsipper", "Fordi han fullstendig avviser hele fordelingen"],
      explanation: "Ulike goder, ulike sfære-egne prinsipper; urett = sfære-krenkelse.",
    },
    {
      question: "Hva er hovedkontrasten mellom Rawls og Walzer?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesforståelse (Walzer)", "Den negative friheten hos Rawls kontra den positive friheten hos selveste Walzer", "Klok politikk hos Rawls kontra etisk politikk hos Walzer", "Selve kapabiliteten hos Rawls kontra funksjonen hos Walzer"],
      explanation: "Rawls søker prinsipper for alle samfunn; Walzer forankrer i det enkelte fellesskapet.",
    },
    {
      question: "Hvilken feil er felles for 'Platon uten arbeidsdeling', 'Nussbaum uten kapabiliteter på plass' og 'Walzer uten communal provision'?",
      options: ["#1 miste det sentrale poenget", "#4 å hoppe helt over ett av utdragene", "#7 gjennomgående upresise begreper", "#3 en helt unødig innledning"],
      explanation: "Hver tenker har et definert kjernepoeng som må treffes.",
    },
    {
      question: "Hva gjør en sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge tenkerne uten å navngi dimensjonene de skiller lag på", "Rett og slett å navngi alle selve sammenligningsdimensjonene helt tydelig", "Rett og slett å holde begge de to posisjonene helt presise og tydelige", "Rett og slett å trekke tydelig inn et treffende fellespunkt"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser ved siden av hverandre.",
    },
    {
      question: "Hva er den feministiske kritikken av Rawls (drøftingsressurs)?",
      options: ["Uvitenhetssløret dekker ikke kjernefamilien, så urett innad i familien overses", "Rett og slett at selve forskjellsprinsippet i praksis er altfor radikalt og vidtgående", "Rett og slett at selve maximin-regelen tydelig favoriserer kvinner", "Rett og slett at selve primærgodene er fullstendig kjønnsnøytrale"],
      explanation: "En forankret innvending for HYB-delen — løfter over ren synsing.",
    },
    {
      question: "I en HYB-oppgave om forskjellsprinsippet: hva kjennetegner E-nivå?",
      options: ["Ren gjengivelse uten innvending, eller fri synsing uten forankring", "En solid og pensumforankret innvending pluss en forbeholden vurdering", "En redegjørelse etterfulgt av én enkelt kritiker hentet rett fra pensum", "En helt presis og korrekt bruk av alle fagbegrepene"],
      explanation: "#8: ren gjengivelse der oppgaven ber om drøfting.",
    },
    {
      question: "Hvordan kobler Walzers communal provision til Pettit (kap. 1.3)?",
      options: ["Velferd som fellesskapsforankret rettighet fjerner dominansen ved privat veldedighet", "Rett og slett at den fullstendig avviser og forkaster hele Pettits berømte dominansbegrep", "Rett og slett at den til slutt gjør all velferd helt overflødig", "Rett og slett at den tydelig støtter opp om privat veldedighet"],
      explanation: "Fordi omfanget er en fellesbeslutning, blir velferd en rettighet, ikke dominerende gave.",
    },
    {
      question: "Hva kjennetegner et A-svar i Del 2 ifølge vurderingsaksene?",
      options: ["Sentrale poeng truffet presist + minst ett subtilt ekstrapoeng og/eller selvstendig sammenligning", "Rett og slett den lengst og bredest mulige besvarelsen som lar seg gjøre", "Rett og slett en bredest mulig dekning av hele filosofihistorien", "Rett og slett en svært grundig innledning og en tydelig avslutning"],
      explanation: "Helhetsvurdering: treff kjernen + subtilitet/selvstendighet, ikke lengde.",
    },
    {
      question: "Hva er kalibreringsregelen som gjelder alle Del 2-svar om innledning/avslutning?",
      options: ["Gå rett på sak — ingen innledning, avslutning eller litteraturhenvisninger", "Man skal alltid ha med en svært fyldig og velformulert innledning aller først", "Man skal avslutte hele svaret med sin egen personlige livsanskuelse til slutt", "Man skal sitere pensum direkte og i stor lengde gjennom hele svaret"],
      explanation: "Oppvarming er bortkastet i et 4-timers essayfag (#3).",
    },
  ],
  'stv1100-3-1': [
    {
      question: "Hva er det *sentrale poenget* i Machiavellis behandling av moral og politikk?",
      options: ["At han *skiller* to spørsmål: hva som er klok (virksom) politikk og hva som er etisk akseptabel politikk", "At absolutt all politikk uansett og til enhver tid nødvendigvis er dypt og gjennomgående umoralsk i seg selv", "At moral aldri spiller noen rolle i noe menneskelig liv", "At fyrsten alltid bør handle moralsk godt, uansett følgene"],
      explanation: "Kjernen er atskillelsen av «virker det?» fra «er det rett?» — ikke en fordømmelse eller avvisning av moral.",
    },
    {
      question: "Hva betyr «klok politikk» hos Machiavelli?",
      options: ["Instrumentelt rasjonell politikk — handling vurdert etter om midlene virker", "Politikk som til enhver tid er fullt ut moralsk dydig og gjennomgående rettskaffen", "Politikk som i ett og alt styres av kirkens religiøse bud og påbud om rett handling", "Politikk som alltid holder inngåtte løfter, uansett hva omstendighetene krever"],
      explanation: "Klok politikk er en beskrivelse av det virksomme, ikke en moralsk anbefaling.",
    },
    {
      question: "Hva betyr *virtù* hos Machiavelli?",
      options: ["Fyrstens handlekraft, mot og evne til å gripe muligheter", "Ren moralsk dyd, godhet og en gjennomgående rettskaffenhet", "Religiøs fromhet og ubetinget lydighet mot kirkens bud og forbud", "Fravær av forsettlig innblanding fra andre, slik Berlin bruker ordet"],
      explanation: "Virtù er dyktighet/handlekraft — ikke «dyd» i moralsk forstand. «Fravær av forsettlig innblanding» er Berlins negative frihet, ikke Machiavelli.",
    },
    {
      question: "Hva er *Fortuna* hos Machiavelli?",
      options: ["Tilfeldigheten/skjebnen fyrsten ikke rår over — som virtù forsøker å temme", "Selve fyrstens egen dyktighet, handlekraft og evne til å gripe alle muligheter", "En moralsk plikt fyrsten har overfor sine undersåtter og overfor sitt eget rike", "Statens fremste hovedoppgave, nemlig å verne alle undersåttene mot ytre fiender"],
      explanation: "Fortuna er det uforutsette; virtù er evnen til å temme den. Ikke bland Fortuna (flaks) med virtù (dyktighet).",
    },
    {
      question: "Hva kjennetegner «god bruk av grusomhet» hos Machiavelli?",
      options: ["Grusomhet gjort på én gang, samlet, av nødvendighet, og deretter avviklet til undersåttenes nytte", "Grusomhet som er liten og beskjeden i starten, men som gradvis vokser seg større og gjentas igjen og igjen", "Grusomhet begrunnet i religionens bud og kirkens autoritet", "Grusomhet som alltid er moralsk forsvarlig i seg selv"],
      explanation: "God bruk er samlet og engangs; dårlig bruk er stadig og eskalerende. Skillet er instrumentelt (klok politikk).",
    },
    {
      question: "Hva er «dårlig bruk av grusomhet»?",
      options: ["Grusomhet som er liten i begynnelsen men vokser og gjentas over tid", "Grusomhet som gjøres samlet og på én gang, ut fra en ren nødvendighet", "All grusomhet uansett form og omfang, og uansett hvilken hensikt som ligger bak", "Grusomhet som fyrsten selv kommer til å angre på i ettertid, uansett virkningen"],
      explanation: "Dårlig bruk holder fyrsten i evig utrygghet og undergraver makten; god bruk er avgrenset og fester den.",
    },
    {
      question: "Machiavellis amoralisme er best beskrevet som:",
      options: ["Politisk amoralisme — avgrenset til statskunsten, ikke moralen generelt", "Ren pasifisme — fyrsten bør alltid unngå vold og makt for enhver pris", "Religiøs moralisme — politikken skal underlegges kirkens absolutte moralbud", "Generell amoralisme — all moral avvises helt, også i privatlivet og religionen"],
      explanation: "Feilkode #7: å tillegge ham *generell* amoralisme gjør ham til en karikatur. Han avgrenser unntaket til statskunsten.",
    },
    {
      question: "Hva er *generell* amoralisme — som Machiavelli IKKE forsvarer?",
      options: ["Påstanden at moral overhodet ikke gjelder, verken i politikk eller privatliv", "Påstanden at statskunsten har sin egen logikk som kan bryte alminnelig moral", "At fyrsten bør fremstå som moralsk", "At grusomhet kan brukes godt av en fyrste"],
      explanation: "Machiavelli forsvarer *politisk* (avgrenset) amoralisme, ikke generell (universell) amoralisme.",
    },
    {
      question: "Hva er det vanskeligste, mest A-givende poenget i en Machiavelli-oppgave?",
      options: ["Å se at han *veksler* mellom rendyrket konsekvensialisme og et deontologisk innslag", "Å datere Fyrsten korrekt og plassere verket i renessansens italienske bystatspolitikk", "Å fordømme Machiavelli moralsk som en samvittighetsløs og kynisk maktforsvarer", "Å gjengi flest mulig av de harde maktrådene i Fyrsten ordrett og oppramsende"],
      explanation: "Vekslingen (ikke en endimensjonal lesning) er det subtile ekstra poenget som løfter til A.",
    },
    {
      question: "Hva er *rendyrket konsekvensialisme* i Machiavelli-sammenheng?",
      options: ["At handlingen bedømmes kun etter utfallet — målet helliger midlet", "At fyrsten alltid bør velge det mildeste av de midlene som er tilgjengelige", "At enkelte handlinger fordømmes i seg selv, uansett hvor godt utfallet blir", "At fyrsten alltid bør holde løftene sine fordi troskap er en ubetinget plikt"],
      explanation: "Konsekvensialisme = bare utfallet teller. Motsatsen (handlinger forbudt i seg selv) er det deontologiske innslaget.",
    },
    {
      question: "Hva menes med Machiavellis *deontologiske innslag*?",
      options: ["At enkelte handlinger fordømmes i seg selv, uavhengig av utfallet", "At handlingene bare kan bedømmes ut fra fyrstens egne motiver og hensikter", "At all grusomhet er tillatt så lenge fyrsten fester og bevarer sitt herredømme", "At bare det endelige utfallet av handlingen teller, slik at målet helliger midlet"],
      explanation: "Utdraget «makt, men ikke ære» viser en dom over handlingen som konsekvensregnestykket ikke opphever.",
    },
    {
      question: "Utdrag b): «Den som når makten ved svik og grusomhet mot venner kan vinne herredømme, men ikke ære.» Hvilken funksjon har utdraget?",
      options: ["Det viser det deontologiske innslaget — en moralsk grense i seg selv som utfallet ikke opphever", "Det viser en ren konsekvensialisme — bare utfallet teller, slik at målet helliger midlet fullt ut", "Det viser at Machiavelli er generelt amoralsk og avviser enhver moralsk grense, også i privatlivet", "Det er en tom retorisk floskel uten reell funksjon i argumentet om makt og statskunst"],
      explanation: "«Makt, men ikke ære» er nøkkelutdraget mot feilkode #10 — beviset på vekslingen.",
    },
    {
      question: "Utdrag a): «Grusomhet godt brukt er den som skjer på én gang, av nødvendighet.» Hvilken funksjon har utdraget?",
      options: ["Det er et premiss i den kloke (instrumentelle) politikken — et effektivitetskriterium, ikke et moralsk", "Det er en moralsk anbefaling om godhet og barmhjertighet som mål i seg selv, ikke som middel", "Det er et deontologisk forbud mot grusomhet — en moralsk grense utfallet aldri kan oppheve", "Det viser at Machiavelli fordømmer all grusomhet som umoralsk og uverdig en klok fyrste"],
      explanation: "Kriteriet god/dårlig gjelder hva som *virker* for å feste makten — den konsekvensialistiske siden av vekslingen.",
    },
    {
      question: "Utdrag c): «En fyrste bør synes barmhjertig og tro, men ha sinnet beredt til det motsatte når nødvendigheten byder det.» Hva viser utdraget?",
      options: ["Å *fremstå* som moralsk — klok politikk anvendt på fyrstens omdømme", "At fyrsten bør holde sin barmhjertighet skjult for undersåttene", "At fyrsten faktisk bør være moralsk god, ikke bare fremstå slik utad", "At Fortuna styrer alt, slik at fyrstens omdømme til slutt er uten betydning"],
      explanation: "Dydens *utseende* tjener maktens formål — et tydelig sted der «virker det?» skilles fra «er det rett?».",
    },
    {
      question: "Hvorfor bør fyrsten ifølge Machiavelli heller være fryktet enn elsket, hvis han må velge?",
      options: ["Fordi kjærlighet holdes av et bånd folk bryter når det passer dem, mens frykt holdes av straffens trussel", "Fordi fyrster som elskes av folket alltid taper krigen mot mer fryktinngytende naboer", "Fordi Gud og religionen krever at fyrsten hersker gjennom straffens trussel alene", "Fordi frykt er moralsk mer verdifullt enn kjærlighet og adler fyrstens karakter"],
      explanation: "Rådet er instrumentelt — men fyrsten bør bli fryktet *uten* å bli hatet.",
    },
    {
      question: "Hva er feilkode #10 i Machiavelli-oppgaver?",
      options: ["Å behandle Machiavelli endimensjonalt — som ren amoralist/konsekvensialist uten vekslingen", "Å blande sammen Berlins frihetsbegrep og Pettits republikanske ikke-dominans-tese", "Å hoppe over et av sitatutdragene og dermed miste et av oppgavens sentrale bevis", "Å skrive for kort slik at drøftingen mangler nødvendig faglig dybde og eksempler"],
      explanation: "#10 er den machiavelli-spesifikke fellen: å miste vekslingen mot det deontologiske innslaget.",
    },
    {
      question: "Hvem er Cesare Borgia i *Fyrsten*?",
      options: ["Fyrsteeksemplet på stor virtù og «god bruk av grusomhet» — felt til slutt av Fortuna", "En samtidig filosof som Machiavelli kritiserer for naiv og virkelighetsfjern moralisme", "Forfatteren av Fyrsten, som Machiavelli senere skrev sine kommentarer og råd til", "En fyrste som var ren pasifist og vant makt uten vold, list eller god grusomhet"],
      explanation: "Borgia illustrerer både klok politikk (virtù, god grusomhet i Romagna) og virtùs grense mot tilfeldigheten (sykdom).",
    },
    {
      question: "Hva innebærer skillet mellom *omdømme* og *realitet* hos Machiavelli?",
      options: ["At det virksomme er å styre inntrykket av dyd, mens man handler etter nødvendigheten", "At omdømmet bør bygges utelukkende gjennom offentlig fromhet, gavmildhet og gaver til folket", "At omdømme er uten betydning, siden bare de faktiske handlingene teller for maktens feste", "At fyrsten alltid må være nøyaktig det han utgir seg for, uten sprik mellom skinn og realitet"],
      explanation: "Fordi de fleste dømmer etter det de ser, kan et godt omdømme opprettholdes tross umoralske handlinger.",
    },
    {
      question: "Hva er «nødvendigheten» (necessità) hos Machiavelli?",
      options: ["Det omstendighetene tvinger fyrsten til — broen mellom lovmessighetene og de harde rådene", "Fravær av ytre innblanding og tvang — den negative friheten fyrsten nyter godt av", "Fyrstens personlige begjær og lyster, som driver ham uavhengig av situasjonen", "En moralsk plikt til å holde løfter selv når omstendighetene taler imot det"],
      explanation: "Fyrsten holder løfter når han kan, men bryter dem «når nødvendigheten byder det».",
    },
    {
      question: "Hvorfor er løftebrudd noen ganger *klok* politikk ifølge Machiavelli?",
      options: ["Fordi mennesker er upålitelige og ikke holder ord overfor fyrsten; løftetroskap er et middel, ikke en absolutt plikt", "Fordi Fortuna forbyr løfter og straffer enhver fyrste som binder seg til sitt ord", "Fordi religionen og kirkens bud krever at fyrsten setter seg over vanlig troskap", "Fordi løfter aldri har noen verdi og alltid bør brytes så snart de er gitt"],
      explanation: "Dette er en av de tydeligste konsekvensialistiske passasjene — troskap veies mot nytte.",
    },
    {
      question: "Hva hviler Machiavellis harde råd på?",
      options: ["Et pessimistisk menneskesyn: mennesker er egeninteresserte, upålitelige og styrt av frykt/begjær", "En matematisk modell av maktforholdene som forutsier atferd med tallmessig presisjon", "Et optimistisk syn på menneskets iboende godhet, samarbeidsvilje og pålitelighet", "En religiøs åpenbaring om menneskets syndighet som fyrsten må rette seg etter"],
      explanation: "Menneskesynet er premisset som gjør løftebrudd, frykt og grusomhet til *klok* (ikke ond) politikk.",
    },
    {
      question: "Hva er forholdet mellom virtù og Fortuna?",
      options: ["Virtù er dyktigheten som forsøker å temme Fortuna (tilfeldigheten) — som demninger mot en flom", "Fortuna er fyrstens egen dyktighet, mens virtù står for den blinde tilfeldigheten", "Virtù er skjebnen fyrsten ikke rår over, mens Fortuna er hans aktive dyktighet", "Virtù og Fortuna er egentlig samme kraft, bare beskrevet med to ulike ord"],
      explanation: "Fortuna rår over omtrent halvparten; virtù griper den andre. Ikke bland de to begrepene.",
    },
    {
      question: "Hva menes med «lovmessighet i det politiske liv» hos Machiavelli?",
      options: ["At politikken har regelmessigheter (menneskers atferd, frykt, maktens dynamikk) man kan lese og bruke", "At Gud bestemmer alt som skjer i politikken, slik at menneskelig kløkt er uten virkning", "At politikk er fullstendig tilfeldig og uforutsigbar, uten mønstre en fyrste kan lese", "At politikken styres av moralske naturlover som fyrsten er forpliktet til å adlyde"],
      explanation: "Klok politikk er å lese disse lovmessighetene og handle effektivt — derfor kan Fyrsten leses som en maktens håndbok.",
    },
    {
      question: "En kandidat skriver: «Machiavelli mener moral er meningsløst tull.» Hvilken feil begår han?",
      options: ["Feilkode #7 — han blander politisk og generell amoralisme og karikerer Machiavelli som nihilist", "Ingen feil — dette er en fullstendig korrekt og dekkende lesning av Machiavellis prosjekt", "Feilkode #4 — han hopper over et av utdragene og mister et sentralt bevis i drøftingen", "Feilkode #3 — han bruker en unødig lang innledning som forsinker selve argumentasjonen"],
      explanation: "Machiavelli forsvarer *politisk* (avgrenset) amoralisme for statens skyld — ikke en universell avvisning av moral.",
    },
  ],
  'stv1100-3-2': [
    {
      question: "Hvor mange distinkte sannhetsargumenter for ytringsfrihet gir Mill?",
      options: ["Tre", "Ett", "To", "Fem"],
      explanation: "Mill gir tre distinkte sannhetsargumenter — å smøre dem ut til «ytringsfrihet er bra» er feilkode #1.",
    },
    {
      question: "Hva er kjernen i Mills første argument (intellektuell ydmykhet)?",
      options: ["Å forby en mening kan være å forby sannheten, siden vi kan ta feil (antar ellers egen ufeilbarlighet)", "At flertallet alltid har rett, slik at mindretallets avvikende syn trygt kan undertrykkes", "At staten selv bør avgjøre hva som er sant og verne den offisielle sannheten mot tvil", "At falske meninger må forbys raskt før de rekker å forville og villede opinionen"],
      explanation: "Argument 1 dekker tilfellet der den undertrykte meningen er *sann* — feilbarligheten er kjernen.",
    },
    {
      question: "Hva er Mills andre argument (meningsbryting)?",
      options: ["En avvikende mening er ofte delvis sann; bare kollisjon foredler helheten", "At all sannhet allerede eies av flertallet, slik at avvikende meninger er overflødige", "At debatt bare sprer forvirring og svekker de sanne meningenes faste grunnlag", "At bare fageksperter bør ytre seg, siden legfolks meninger forsurer diskusjonen"],
      explanation: "Argument 2 dekker tilfellet der den undertrykte meningen er *delvis* sann.",
    },
    {
      question: "Hva er Mills tredje argument (den anti-dogmatiske funksjonen)?",
      options: ["Selv en helt sann herskende mening blir et dødt dogme uten motstand", "At staten må beskytte den etablerte sannheten mot all kritikk utenfra", "At sannhet aldri kan oppnås, slik at all meningsbryting egentlig er nytteløs", "At falske meninger må høres fordi de kan vise seg å inneholde skjulte sannheter"],
      explanation: "Argument 3 gjelder selv når den herskende meningen er *helt sann* — den trenger motstand for å forbli levende.",
    },
    {
      question: "Hvilket logisk tilfelle dekker Mills argument 3?",
      options: ["Den herskende meningen er helt sann (den undertrykte er falsk)", "Den undertrykte meningen er sann, og den herskende er falsk", "Ingen har egentlig noen bestemt mening om det aktuelle spørsmålet", "Den undertrykte meningen er delvis sann og delvis feilaktig"],
      explanation: "De tre argumentene dekker tre tilfeller: sann / delvis sann / herskende helt sann.",
    },
    {
      question: "Hva er et «dødt dogme» hos Mill?",
      options: ["En sann overbevisning holdt uten forståelse av grunnene — som en arvet fordom", "En påstand som er bevist falsk, men som fortsatt holdes fast av vane", "En religiøs sannhet som ikke tåler å utsettes for fornuftens kritikk", "En mening ingen lenger deler, som derfor har mistet sin virkning"],
      explanation: "Uten motstand mister selv en sann mening sin levende kraft — argument 3s poeng.",
    },
    {
      question: "Hva sier Mills skadeprinsipp?",
      options: ["Makt over den enkelte kan bare rettmessig brukes for å hindre skade på andre", "Makt kan rettmessig brukes så snart en ytring er støtende eller anstøtelig", "All ytring bør kunne forbys hvis den er upopulær hos et stort flertall", "Makt kan brukes over den enkelte for personens eget beste og velferd"],
      explanation: "Grensen går ved *skade på andre* — ikke ved anstøt, umoral eller den enkeltes eget beste.",
    },
    {
      question: "Under skadeprinsippet: er det å *støte* eller *krenke* andre tilstrekkelig grunn til tvang?",
      options: ["Nei — anstøt/krenkelse er ikke skade i Mills forstand", "Ja, alltid — anstøt regnes som en form for skade", "Ja, hvis staten på forhånd har bestemt at det er skadelig", "Ja, dersom mange nok blir støtt av ytringen"],
      explanation: "Skade ≠ anstøt. Å la «støtende» telle som forbudsgrunn er den vanligste anvendelsesfeilen.",
    },
    {
      question: "Hva er «det selvregarderende området» hos Mill?",
      options: ["Handlinger som bare angår personen selv — utenfor statens rettmessige makt", "Handlinger som skader andre og derfor faller inn under statens tvang", "Statens rettmessige myndighetsområde over borgernes handlinger", "Området der flertallet gjennom lov bestemmer over den enkelte"],
      explanation: "Over sitt eget område er individet suverent; tvang kan først brukes når andre skades.",
    },
    {
      question: "Hva angriper Susan Brison i Mills forsvar?",
      options: ["Optimismen om at fri meningsbryting faktisk siler ut sannheten («meningenes markedsplass»)", "At Mill formulerte forsvaret på engelsk framfor på et annet språk", "At Mill delte forsvaret opp i tre atskilte argumenter framfor ett", "Selve verdien av individuell frihet som et grunnleggende gode"],
      explanation: "Brison bestrider den empiriske forutsetningen, ikke frihetens verdi i seg selv.",
    },
    {
      question: "Hva er ett av Brisons hovedpoenger mot markedsplass-bildet?",
      options: ["Offentligheten drives av profittmaksimering, ikke sannhetssøken", "At redaktørene i mediene alltid slipper til de mest sannferdige stemmene", "At staten har en plikt til å korrigere feilaktige ytringer for å beskytte offentligheten", "At den frie meningsbrytingen på sikt siler ut usannheter og lar sannheten vinne av seg selv"],
      explanation: "Mediene belønner det som selger/engasjerer, ikke det sanne — så markedet siler ikke ut sannhet.",
    },
    {
      question: "Hva mener Brison med «privat sensur»?",
      options: ["At ytringsrommet innsnevres av private aktører (plattformer, arbeidsgivere), ikke bare av staten", "At domstolene i all hemmelighet stanser ytringer allerede før de i det hele tatt rekker å bli publisert", "At staten i det skjulte overvåker og sensurerer borgernes ytringer gjennom hemmelige overvåkingsprogrammer", "At borgerne av hensyn til fellesskapet selv bør legge bånd på hvilke meninger de gir uttrykk for offentlig"],
      explanation: "Brison forskyver debatten fra stat-mot-individ til også makt-mot-individ.",
    },
    {
      question: "Hva gjør Brison til en *forankret* (ikke synset) innvending i en HYB-oppgave?",
      options: ["At hun er pensum — ikke kandidatens egen synsing", "At hun skriver på engelsk og derfor er lett tilgjengelig for kandidaten", "At hun er den mest siterte og anerkjente teoretikeren på feltet", "At hun uttrykkelig stiller seg bak Mills tre sannhetsargumenter"],
      explanation: "Å bruke en pensumforankret kritiker framfor egen synsing skiller A fra E i drøftingsdelen (mot feil #8/#2).",
    },
    {
      question: "Hva er en mulig Mill-respons på Brisons kritikk?",
      options: ["At kuren mot forvrengt debatt er *mer og bedre* ytring, ikke mindre", "At Brison har helt rett og Mill tok feil om alt", "At staten bør tre inn som nøytral garantist og avgjøre hvilke ytringer som er sanne og gale", "At ytringsfriheten bør innskrenkes kraftig fordi markedsplassen ikke fungerer slik Mill antok"],
      explanation: "Brison rammer forutsetningen om at markedet fungerer nå, ikke uten videre Mills konklusjon om frihetens verdi.",
    },
    {
      question: "Hvilket premiss binder Mills tre argumenter sammen — og som Brison angriper?",
      options: ["At fri meningsbryting faktisk fører til sannhet", "At flertallet alltid tar feil i slike spørsmål", "At flertallets oppfatning som regel viser seg å være uriktig over tid", "At staten er ufeilbarlig i sine vurderinger av hva som er sant"],
      explanation: "Alle tre argumentene forutsetter at debatten er en sannhetssøkende prosess.",
    },
    {
      question: "En kandidat skriver bare «ytringsfrihet er viktig for demokratiet». Hvilken feil er dette?",
      options: ["Feilkode #1 — han mister Mills tre distinkte sannhetsargumenter", "Feilkode #4 — han hopper over et utdrag", "Feilkode #3 — han bruker for mye plass på en unødig og generell innledning", "Feilkode #4 — han utelater å behandle ett av de tildelte utdragene i besvarelsen"],
      explanation: "Kjernefeilen er å ikke levere de tre distinkte argumentene.",
    },
    {
      question: "Utdrag a): «Om alle minus én var enige, ville menneskeheten ikke være mer berettiget til å tie den ene enn han til å tie menneskeheten.» Hvilket argument støtter utdraget?",
      options: ["Argument 1 (intellektuell ydmykhet) — flertallsstyrke gir ikke rett, det ville forutsette ufeilbarlighet", "Brisons kritikk — at den virkelige offentligheten mangler de likeverdige og rasjonelle deltakerne", "Argument 3 (anti-dogmatisk) — meningen blir et dødt dogme uten levende motstand og bryting", "Skadeprinsippet — at tvang bare er berettiget for å hindre skade påført andre mennesker"],
      explanation: "Utdraget etablerer at feilbarligheten, ikke flertallsstyrke, avgjør.",
    },
    {
      question: "Hva ville Mill si om et forbud mot en demonstrasjon fordi budskapet er «støtende»?",
      options: ["Han ville motsette seg det — anstøt er ikke skade, så skadeprinsippet gir ingen forbudsgrunn", "Han ville støtte forbudet fordi tilstrekkelig mange blir støtt av budskapet i demonstrasjonen", "Han ville forby enhver demonstrasjon fordi offentlig uro alltid innebærer en form for skade på andre", "Han ville overlate spørsmålet til flertallsavgjørelse fordi demokratiet best avgjør hva som er tillatt"],
      explanation: "Skadeprinsippet tillater tvang kun mot skade på andre — ikke mot anstøt.",
    },
    {
      question: "Hvorfor gjelder Mills argument 3 selv når den herskende meningen er helt sann?",
      options: ["Fordi sannheten uten motstand blir et dødt dogme — man mister forståelsen av grunnene", "Fordi sanne meninger alltid viser seg å være falske når de blir prøvd mot skarpe innvendinger", "Fordi staten pålegger borgerne å prøve selv sanne meninger mot innvendinger for å sikre orden", "Fordi flertallets tilslutning er det eneste som til syvende og sist kan gjøre en mening gyldig"],
      explanation: "Ytringsfrihet trengs selv når vi har rett, for å holde sannheten levende.",
    },
    {
      question: "Hvordan forholder Waldron (3.3) seg til Mills skadeprinsipp?",
      options: ["Han bygger på det, men bryter med Mills snevre avgrensning ved å regne undergraving av menneskeverd som skade", "Han forkaster skadeprinsippet fullstendig og erstatter det med et rent verdighetsprinsipp uten skadekrav", "Han overtar Mills posisjon uendret og legger den samme snevre avgrensningen av skade til grunn helt", "Han hevder at bare staten kan påføre den typen skade som kan begrunne innskrenkning av ytringer"],
      explanation: "Waldron utvider hva som teller som skade — broen fra 3.2 til 3.3.",
    },
    {
      question: "Hva er den korrekte HYB-disiplinen i en Mill+Brison-oppgave?",
      options: ["Solid redegjørelse for Mill (tyngdepunktet) + kort, forbeholden drøfting mot Brison", "Bare drøfte Brison uten å redegjøre for Mill", "Å gjengi Mills tre argumenter grundig, men helt uten å drøfte dem mot Brisons kritikk", "Å konkludere skråsikkert med at Brison tilbakeviser Mill og at markedsplass-bildet er dødt"],
      explanation: "Redegjørelse er kjernen; drøftingen er kortere og forbeholden (0.3).",
    },
    {
      question: "Hvilken feil begår en kandidat som redegjør for Mill men aldri drøfter mot Brison der oppgaven ber om det?",
      options: ["Feilkode #8 — ren gjengivelse der oppgaven ber om drøfting", "Feilkode #7 — gjennomgående upresise og uklare fagbegreper i svaret", "Feilkode #4 — han hopper over et av utdragene oppgaven ber ham behandle", "Feilkode #3 — han bruker unødig mye plass på en lang og generell innledning"],
      explanation: "#8 er å referere i drøftingsdelen i stedet for å drøfte.",
    },
    {
      question: "Hva forutsetter «meningenes markedsplass»-bildet, ifølge Brisons kritikk?",
      options: ["Likestilte, rasjonelle deltakere — noe den virkelige offentligheten ikke har", "At staten holder seg fullstendig unna og aldri på noe tidspunkt griper inn i debatten", "At sannheten prinsipielt er umulig å komme fram til gjennom fri meningsbryting alene", "At ingen av deltakerne i offentligheten sitter med makt til å påvirke de andres meninger"],
      explanation: "Ulikhet og irrasjonelle krefter forvrenger den frie brytingen Mill forutsatte.",
    },
    {
      question: "Hva er skillet mellom argument 1/2 og argument 3 med hensyn til den herskende meningens sannhet?",
      options: ["1 og 2 gjelder når den herskende meningen kan være (delvis) usann; 3 gjelder når den er helt sann", "Alle tre argumentene gjelder utelukkende når den herskende meningen viser seg å være falsk", "Det finnes ingen prinsipiell forskjell mellom argumentene med hensyn til meningens sannhet", "Alle tre argumentene gjelder utelukkende når den herskende meningen er fullstendig sann"],
      explanation: "Å se denne strukturen (sann/delvis sann/helt sann herskende) løfter en RED over oppramsing.",
    },
  ],
  'stv1100-3-3': [
    {
      question: "Hvilken posisjon har Dworkin i hatytringsdebatten?",
      options: ["Mot hatytringslovgivning — ut fra et legitimitetsargument", "For hatytringslovgivning — ut fra menneskeverd", "For hatytringslovgivning — ut fra et menneskeverdargument om utsatte gruppers status", "Nøytral — han tar bevisst ikke stilling for eller mot hatytringslovgivning i debatten"],
      explanation: "Dworkin argumenterer mot loven med et prosess-/legitimitetsargument. Menneskeverd er Waldrons begrep.",
    },
    {
      question: "Hvilken posisjon har Waldron i hatytringsdebatten?",
      options: ["For hatytringslovgivning — ut fra et menneskeverd-/skadeargument", "Mot hatytringslovgivning — ut fra hensynet til statens behov for ro og orden", "Mot hatytringslovgivning — ut fra et prosess- og legitimitetsargument", "Nøytral — han inntar ingen klar posisjon i spørsmålet om hatytringslov"],
      explanation: "Waldron argumenterer for loven med et skadeargument forankret i menneskeverd/social standing.",
    },
    {
      question: "Hva er kjernen i Dworkins argument mot hatytringslov?",
      options: ["Et vedtak er bare legitimt hvis alle har fått ytre seg på egne premisser; forbud undergraver legitimiteten", "At hatytringer i realiteten er harmløse fordi ord ikke kan påføre noen mennesker virkelig skade", "At menneskeverdet til utsatte grupper krever et forbud for å beskytte deres likeverdige status", "At staten prinsipielt aldri bør vedta lover som regulerer borgernes ytringer i offentligheten"],
      explanation: "Dworkins argument er prosessuelt (legitimitet), ikke en påstand om at hatytringer er harmløse.",
    },
    {
      question: "Hva er kjernen i Waldrons argument for hatytringslov?",
      options: ["Hatretorikk skader ved å undergrave utsatte gruppers menneskeverd / social standing", "Hatytringer svekker tilliten til mediene og til hele den offentlige samtalen i samfunnet", "At legitimiteten til den demokratiske prosessen krever at slike ytringer forbys ved lov", "At hatytringer krenker enkeltmenneskers følelser og påfører dem anstøt de har krav på vern mot"],
      explanation: "Waldron lokaliserer skaden i statusen (menneskeverd), ikke i følelsene (anstøt).",
    },
    {
      question: "Hva slags argument gir Dworkin?",
      options: ["Et prosess-/legitimitetsargument", "Et substansielt skadeargument", "Et substansielt skadeargument om følgene av ytringer", "Et paternalistisk argument"],
      explanation: "Dworkins argument handler om hvordan vedtak blir legitime, ikke om skadegrad.",
    },
    {
      question: "Hva er «social standing» hos Waldron?",
      options: ["Den offentlige statusen som likeverdig medlem av samfunnet", "Den rangen en person har i samfunnets økonomiske klassesystem", "Fyrstens omdømme og anseelse i forholdet til sine undersåtter", "En indre og subjektiv følelse av egenverd hos den enkelte person"],
      explanation: "Menneskeverd er hos Waldron en sosial/offentlig status, ikke en subjektiv følelse.",
    },
    {
      question: "Hvordan forholder Waldron seg til Mills skadeprinsipp?",
      options: ["Han bygger på det (skade kreves), men bryter med det (utvider hva som teller som skade)", "Han overtar Mills posisjon uendret og legger nøyaktig samme skadeavgrensning til grunn", "Han ser bort fra Mill og utvikler et selvstendig argument uten noen kobling til skade", "Han forkaster skadeprinsippet helt og bygger i stedet på et rent verdighetsprinsipp"],
      explanation: "Waldron aksepterer skadekravet, men utvider skadebegrepet til å omfatte angrep på menneskeverdet.",
    },
    {
      question: "Hvor ligger skaden i Waldrons argument?",
      options: ["I undergravingen av utsatte gruppers status/menneskeverd — ikke i krenkede følelser", "I de krenkede følelsene til dem som utsettes for hatytringene (anstøt)", "I det ubehaget flertallet opplever ved å bli konfrontert med ytringene", "I det økonomiske tapet som utsatte grupper påføres av hatretorikken"],
      explanation: "Ved å lokalisere skaden i statusen unngår Waldron Mills skade≠anstøt-innvending.",
    },
    {
      question: "Betyr Dworkins standpunkt at han mener hatytringer er harmløse?",
      options: ["Nei — han kan mene de er avskyelige; poenget er at forbud koster legitimitet", "Ja — han mener domstolene for lengst har fastslått at slike ytringer er lovlige", "Ja — han bagatelliserer virkningen av hatytringer og avviser at de kan påføre skade", "Nei — men han tar prinsipielt ikke stilling til hvor skadelige hatytringer faktisk er"],
      explanation: "Å lese Dworkin som at han bagatelliserer hatytringer er en feiltolkning.",
    },
    {
      question: "Hva er en korrekt sammenligningsdimensjon mellom Dworkin og Waldron?",
      options: ["Argumenttype: prosess/legitimitet (Dworkin) vs. substansiell skade (Waldron)", "Begge tar avstand fra Mills skadeprinsipp og forkaster det som utgangspunkt", "Begge forankrer argumentet sitt i et felles begrep om menneskeverd og status", "Begge er for hatytringslov, men begrunner standpunktet ut fra ulike hensyn"],
      explanation: "Å trekke eksplisitte dimensjoner (ikke to referater) er kjernen i SAM.",
    },
    {
      question: "Hva står på spill for Dworkin?",
      options: ["Legitimiteten til den demokratiske beslutningsprosessen", "Utsatte gruppers likeverdige status som medlemmer av samfunnet", "Fyrstens makt og evne til å opprettholde ro og orden i riket", "Statens økonomiske bæreevne og evne til å håndheve lovene sine"],
      explanation: "For Dworkin svekkes prosessens legitimitet av utestengning; status er Waldrons anliggende.",
    },
    {
      question: "Hva står på spill for Waldron?",
      options: ["Utsatte gruppers menneskeverd / likeverdige status i samfunnet", "Den demokratiske prosessens legitimitet", "Ytringsfrihetens økonomiske verdi for et velfungerende mediemarked", "Statens suverenitet og evne til å håndheve grensene for det tillatte"],
      explanation: "For Waldron undergraver hatretorikk gruppenes status; legitimitet er Dworkins anliggende.",
    },
    {
      question: "Hva er feilkode #8 i en Dworkin-vs-Waldron-oppgave?",
      options: ["Ensidig/dimensjonsløs sammenligning — bare den ene, eller begge uten eksplisitte dimensjoner", "Å hoppe over et av utdragene oppgaven uttrykkelig ber kandidaten behandle", "Å bruke unødig mye plass på en lang og generell innledning før drøftingen", "Å levere en altfor kort besvarelse som ikke rekker å dekke pensumstoffet"],
      explanation: "SAM krever eksplisitt kontrast langs dimensjoner, ikke to referater ved siden av hverandre.",
    },
    {
      question: "En kandidat skriver: «Dworkin er for hatytringslov fordi den beskytter menneskeverdet.» Hvilke feil?",
      options: ["To feil: Dworkin er *mot* loven, og menneskeverd er *Waldrons* begrep (feil #7)", "Bare at han hoppet over ett av de utdragene som oppgaven uttrykkelig ba ham behandle", "Bare at svaret er for kort til å regnes som en fullverdig redegjørelse (feil #3)", "Ingen feil — posisjonen og begrepsbruken er korrekt gjengitt for Dworkins standpunkt"],
      explanation: "Å bytte om posisjonene og begrepene er feil #7 («hvem eier begrepet»).",
    },
    {
      question: "Utdrag: «Loven verner ikke folks følelser, men deres trygge status som likeverdige.» Hvem er dette, og hva viser det?",
      options: ["Waldron — skaden ligger i statusen (menneskeverd), ikke i følelsene (anstøt)", "Machiavelli — poenget er den politiske amoralismen som gjelder i statskunsten", "Mill — skaden ligger i det målbare anstøtet som mange borgere påføres samtidig", "Machiavelli — poenget er at loven verner fyrstens omdømme, ikke borgernes status"],
      explanation: "Utdraget skiller Waldrons argument fra en ren anstøts-begrunnelse.",
    },
    {
      question: "Hvordan flytter Dworkin debatten i forhold til skadeprinsippet?",
      options: ["Han flytter den vekk fra skade til legitimitet — han argumenterer ikke om hvorvidt hatytringer skader", "Han utvider selve skadebegrepet på samme vis som Waldron gjør i sitt argument om status", "Han flytter debatten fra legitimitet til skade, og spør om ytringene faktisk skader", "Han bruker skadeprinsippet uendret og hevder at hatytringer skader målbart likevel"],
      explanation: "Waldron arbeider innenfor skadeprinsippet; Dworkin skifter til et helt annet (prosessuelt) grunnlag.",
    },
    {
      question: "Hva menes med at Dworkin og Waldron delvis «snakker forbi hverandre»?",
      options: ["De svarer på ulike spørsmål: Dworkin om legitim prosess, Waldron om rettferdiggjørende skade", "De diskuterer to ulike lover, slik at posisjonene aldri egentlig møtes eller kolliderer", "De svarer på nøyaktig samme spørsmål, men Dworkin bruker et sterkere skadebegrep enn Waldron", "De bruker det samme prosessargumentet, men trekker helt motsatte konklusjoner om loven"],
      explanation: "Uenigheten er delvis en forskjell i spørsmålsstilling (prosess vs. substans) — et A-poeng.",
    },
    {
      question: "Hva betyr «å ytre seg på egne premisser» i Dworkins legitimitetskrav?",
      options: ["At alle berørte, også de med forkastelige meninger, må ha kunnet delta i meningsdannelsen før vedtaket", "At staten selv setter premissene for hva som kan sies, slik at debatten forblir styrt ovenfra", "At bare fageksperter og myndighetspersoner har rett til å uttale seg om saken før vedtaket", "At ytringen må være dokumentert sann for at deltakelsen skal telle som legitim medvirkning"],
      explanation: "Et hatytringsforbud fratar noen denne muligheten og undergraver legitimiteten til senere vedtak mot dem.",
    },
    {
      question: "Hva er den korrekte, forbeholdne konklusjonen i en Dworkin-vs-Waldron-SAM?",
      options: ["At valget avhenger av om man prioriterer prosess-legitimitet eller vern av likeverdig status — poenget er dimensjonene", "At sammenligningen er umulig fordi de to teoretikerne arbeider innenfor helt ulike tradisjoner", "At Dworkin alltid vinner fordi legitimitet er en forutsetning for at loven skal ha noen kraft", "At Waldron alltid vinner fordi menneskeverd veier tyngre enn enhver prosessuell innvending"],
      explanation: "SAM-selvstendighet vises i dimensjonene og en forbeholden dom, ikke i skråsikkerhet.",
    },
    {
      question: "Hvorfor er koblingen til Mill (3.2) et A-givende poeng i dette kapitlet?",
      options: ["Fordi Waldron både bygger på og bryter med Mills skadeprinsipp — å se dette knytter posisjonene sammen", "Fordi Mill avviser at skade finnes som kriterium, mens Waldron gjeninnfører det uten endring", "Fordi Mill selv argumenterer for et hatytringsforbud, som Waldron bare viderefører direkte", "Fordi Dworkins legitimitetsargument er identisk med Mills skadeprinsipp fra kapittel 3.2"],
      explanation: "Å navngi *både-og*-forholdet til Mills skadeprinsipp løfter Waldron-svaret og SAM-en.",
    },
  ],
  'stv1100-3-prove': [
    {
      question: "Klok politikk hos Machiavelli er vurdert etter:",
      options: ["Om midlene virker (instrumentell rasjonalitet)", "Om fyrsten holder alle løftene sine til punkt og prikke", "Om den følger religiøse og guddommelige bud", "Om handlingen er moralsk god i seg selv"],
      explanation: "Klok politikk beskriver det virksomme, atskilt fra det moralske spørsmålet.",
    },
    {
      question: "Hva er det sentrale poenget i skillet klok/etisk politikk?",
      options: ["At Machiavelli *skiller* to spørsmål — «virker det?» og «er det rett?»", "At fyrsten under alle omstendigheter bør handle godt", "At politikk som virksomhet er umulig å bedrive klokt", "At moral aldri gjelder i politikken i det hele tatt"],
      explanation: "Skillet — ikke en avvisning av moral — er kjernen.",
    },
    {
      question: "Virtù betyr hos Machiavelli:",
      options: ["Handlekraft, mot og evne til å gripe muligheter", "Fravær av all innblanding utenfra", "Religiøs fromhet og gudsfrykt", "Moralsk dyd og god karakter"],
      explanation: "Virtù ≠ moralsk dyd; det er kraften som temmer Fortuna.",
    },
    {
      question: "Fortuna er hos Machiavelli:",
      options: ["Tilfeldigheten/skjebnen fyrsten ikke rår over", "Statens fremste og viktigste hovedoppgave i riket", "En moralsk plikt fyrsten alltid er bundet av overfor folket", "Fyrstens dyktighet og handlekraft"],
      explanation: "Virtù er evnen til å temme Fortuna — ikke bland de to.",
    },
    {
      question: "«God bruk av grusomhet» er:",
      options: ["Grusomhet samlet, engangs, av nødvendighet, deretter avviklet", "Grusomhet som vokser i omfang og gjentas planmessig over tid", "All grusomhet uansett form, så lenge den tjener fyrstens makt", "Grusomhet begrunnet i religiøse påbud og guddommelig autoritet"],
      explanation: "God bruk er avgrenset; dårlig bruk er stadig/eskalerende. Instrumentelt kriterium.",
    },
    {
      question: "Machiavellis amoralisme er:",
      options: ["Politisk — avgrenset til statskunsten", "Generell — moral gjelder ikke i det hele tatt", "Religiøs — underlagt kirkens bud", "Ren pasifisme — all maktbruk avvises"],
      explanation: "Feil #7: å tillegge ham generell amoralisme karikerer ham.",
    },
    {
      question: "Utdrag: «Den som når makten ved svik og grusomhet mot venner kan vinne herredømme, men ikke ære.» Hva viser dette?",
      options: ["Det deontologiske innslaget — en handling fordømt i seg selv", "Ren konsekvensialisme der utfallet alene bestemmer verdien", "At grusomhet mot venner alltid lønner seg for den som søker makt", "At Machiavelli i grunnen er en gjennomført amoralsk tenker"],
      explanation: "«Makt, men ikke ære» er nøkkelutdraget mot feil #10.",
    },
    {
      question: "Utdrag: «En fyrste bør synes barmhjertig, men ha sinnet beredt til det motsatte når nødvendigheten byder det.» Hva viser dette?",
      options: ["Å *fremstå* som moralsk — konsekvensialistisk (dydens utseende tjener makten)", "At det er Fortuna, ikke fyrstens omdømme, som til slutt styrer utfallet", "At fyrsten faktisk og oppriktig bør være god, ikke bare fremstå slik", "Et deontologisk og ubetinget forbud mot å lyve, uansett følgene"],
      explanation: "Omdømme vs. realitet — den konsekvensialistiske siden.",
    },
    {
      question: "Hva er feilkode #10?",
      options: ["Å behandle Machiavelli endimensjonalt (ren amoralist/konsekvensialist uten vekslingen)", "Å skrive et altfor kort svar uten noen forankring i pensum eller i de gitte sitatutdragene", "Å blande sammen Berlins frihetsbegreper og Pettits republikanske frihetsteori", "Å hoppe over et sentralt tekstutdrag som oppgaven eksplisitt ber om å drøfte"],
      explanation: "#10 er den machiavelli-spesifikke fellen — å miste vekslingen.",
    },
    {
      question: "Cesare Borgia illustrerer hos Machiavelli:",
      options: ["Stor virtù og god bruk av grusomhet — felt til slutt av Fortuna", "En samtidig filosof hvis lære Machiavelli forkaster", "Selve forfatteren som skrev og utga verket Fyrsten", "En ren pasifist som avviste enhver bruk av vold"],
      explanation: "Borgia viser klok politikk og virtùs grense mot tilfeldigheten.",
    },
    {
      question: "Hvor mange distinkte sannhetsargumenter for ytringsfrihet gir Mill?",
      options: ["Tre", "Ett", "To", "Fire"],
      explanation: "Tre distinkte argumenter — å smøre dem ut er feil #1.",
    },
    {
      question: "Mills argument om at «vi kan ta feil» kalles:",
      options: ["Intellektuell ydmykhet", "Den anti-dogmatiske funksjonen", "Meningsbryting", "Skadeprinsippet"],
      explanation: "Argument 1 dekker tilfellet der den undertrykte meningen er sann.",
    },
    {
      question: "Mills tredje argument (anti-dogmatisk) sier at:",
      options: ["En helt sann herskende mening blir et dødt dogme uten motstand", "At staten må gripe inn og verne den herskende sannheten", "At falske meninger må forbys for å beskytte sannheten", "At flertallet alltid har rett i spørsmål om sannhet"],
      explanation: "Argument 3 gjelder selv når vi har rett.",
    },
    {
      question: "Skadeprinsippet sier at frihet bare kan innskrenkes for å hindre:",
      options: ["Skade på andre", "Anstøt og krenkelse", "Handlinger til personens eget beste", "Upopulære meninger"],
      explanation: "Grensen går ved skade på andre — ikke ved anstøt.",
    },
    {
      question: "Under skadeprinsippet: teller det å *støte* andre som tilstrekkelig grunn til tvang?",
      options: ["Nei — anstøt er ikke skade", "Ja, hvis mange blir støtt", "Ja, anstøt teller alltid som skade", "Ja, hvis staten bestemmer"],
      explanation: "Skade ≠ anstøt er den vanligste anvendelsesfeilen.",
    },
    {
      question: "Hva angriper Brison i Mills forsvar?",
      options: ["Optimismen om at fri meningsbryting siler ut sannheten", "At Mill oppstilte akkurat tre ulike argumenter", "Selve verdien av ytringsfrihet som prinsipp", "At Mill formulerte argumentene på engelsk"],
      explanation: "Brison bestrider den empiriske forutsetningen, ikke frihetens verdi.",
    },
    {
      question: "Ett av Brisons hovedpoenger er at offentligheten drives av:",
      options: ["Profittmaksimering, ikke sannhetssøken", "Statlig sensur som eneste drivkraft", "Rasjonell og opplyst sannhetssøken", "Fyrstens virtù og strategiske teft"],
      explanation: "Mediene belønner det som selger, ikke det sanne.",
    },
    {
      question: "Hva gjør Brison til en *forankret* innvending i en HYB-oppgave?",
      options: ["At hun er pensum — ikke kandidatens egen synsing", "At hun representerer den aller nyeste forskningen på feltet", "At hun i bunn og grunn er helt enig med Mills eget forsvar", "At hun er den mest berømte kritikeren"],
      explanation: "Forankret pensumkritiker skiller A fra E i drøftingsdelen.",
    },
    {
      question: "En kandidat redegjør for Mill men drøfter aldri mot Brison der oppgaven ber om det. Feil?",
      options: ["Feilkode #8 — ren gjengivelse der oppgaven ber om drøfting", "Feilkode #3 — å bruke plass på en unødvendig og bred innledning", "Ingen feil, siden redegjørelse alltid er tilstrekkelig", "Feilkode #4 — å hoppe over et utdrag oppgaven ber om"],
      explanation: "#8 er å referere i drøftingsdelen.",
    },
    {
      question: "Dworkins posisjon i hatytringsdebatten er:",
      options: ["Mot loven — ut fra et legitimitetsargument", "For loven — ut fra hensynet til offentlig ro og orden", "For loven — ut fra et menneskeverdsargument", "Nøytral — han tar ikke stilling for eller mot"],
      explanation: "Dworkin gir et prosess-/legitimitetsargument mot loven.",
    },
    {
      question: "Waldrons posisjon i hatytringsdebatten er:",
      options: ["For loven — ut fra menneskeverd/skade", "Mot loven — ut fra hensynet til statens autoritet", "Mot loven — ut fra prosessuelle hensyn", "Mot loven — ut fra et legitimitetshensyn"],
      explanation: "Waldron gir et skadeargument forankret i menneskeverd.",
    },
    {
      question: "Kjernen i Dworkins argument er at forbud:",
      options: ["Undergraver legitimiteten til vedtak, fordi ikke alle har fått ytre seg på egne premisser", "Krenker menneskeverdet ved å ramme gruppers likeverdige status i samfunnet", "Er unødvendige fordi hatytringer i realiteten er helt harmløse ytringer", "I praksis er umulige å håndheve konsekvent og derfor ikke bør vedtas"],
      explanation: "Prosessargument — ikke en påstand om at hatytringer er harmløse.",
    },
    {
      question: "«Social standing» hos Waldron er:",
      options: ["Den offentlige statusen som likeverdig medlem av samfunnet", "En indre og subjektiv følelse av egen verdighet og selvrespekt", "Formelt juridisk borgerskap og full statsborgerrett i staten", "Fyrstens rykte og offentlige omdømme"],
      explanation: "Menneskeverd som sosial status — ikke en subjektiv følelse.",
    },
    {
      question: "Hvor ligger skaden i Waldrons argument?",
      options: ["I undergravingen av gruppers status/menneskeverd — ikke i krenkede følelser", "I folks krenkede følelser og opplevde anstøt over ytringene", "I det ubehaget flertallet kjenner når slikt blir sagt", "I det økonomiske tapet gruppene påføres av ytringene"],
      explanation: "Ved å lokalisere skaden i statusen unngår Waldron skade≠anstøt-innvendingen.",
    },
    {
      question: "Hvordan forholder Waldron seg til Mills skadeprinsipp?",
      options: ["Han bygger på det (skade kreves), men bryter med det (utvider skadebegrepet)", "Han forkaster det helt og bygger på et rent legitimitetsgrunnlag", "Han ignorerer Mill og utleder alt fra menneskeverdet alene", "Han er fullstendig identisk med Mill og endrer ingenting"],
      explanation: "Både-og-forholdet til Mill er A-poenget (bro til 3.2).",
    },
    {
      question: "En korrekt sammenligningsdimensjon Dworkin↔Waldron er:",
      options: ["Argumenttype: prosess/legitimitet (Dworkin) vs. substansiell skade (Waldron)", "Begge bygger utelukkende på menneskeverd som felles grunnlag", "Begge avviser Mills skadeprinsipp som utilstrekkelig ramme", "Begge argumenterer i realiteten mot et hatytringsforbud"],
      explanation: "Eksplisitte dimensjoner er kjernen i SAM (mot feil #8).",
    },
    {
      question: "En kandidat skriver «Dworkin er for loven fordi den beskytter menneskeverdet.» Hvilke feil?",
      options: ["Dworkin er *mot* loven, og menneskeverd er *Waldrons* begrep (feil #7)", "Bare at kandidaten har utelatt ett av de utdragene som oppgaven uttrykkelig ba om", "Menneskeverd tilhører Dworkin, mens legitimitetsargumentet egentlig er *Waldrons* poeng om hatytringslov", "Ingen posisjonsfeil, men kandidaten forveksler skadeprinsippet med menneskeverd og tillegger begge tenkerne Mill"],
      explanation: "Å bytte om posisjoner og begreper er feil #7.",
    },
    {
      question: "Hva er feilkode #8 i en Dworkin-vs-Waldron-oppgave?",
      options: ["Ensidig/dimensjonsløs sammenligning", "Å skrive en altfor lang og bred innledning", "Å hoppe over ett av utdragene i drøftingsdelen", "Å bruke engelsk fagterminologi uten oversettelse"],
      explanation: "SAM krever eksplisitt kontrast langs dimensjoner, ikke to referater.",
    },
  ],
  'stv1100-4-1': [
    {
      question: "Hva er det første trinnet i firetrinns-redegjørelsen (RED)?",
      options: ["Plassere tenkeren og spørsmålet i én setning", "Illustrere med tekstens eget eksempel", "Ramse opp all relevant sekundærlitteratur", "Skrive en fyldig innledning om fagets historie"],
      explanation: "Trinn 1 er å plassere tenkeren og spørsmålet i én setning. Innledning (#3) er bortkastet, og illustrasjon kommer sist (trinn 4).",
    },
    {
      question: "Hva er den avgjørende regelen i en SIT-oppgave med utdrag a)–e)?",
      options: ["Behandle hvert eneste utdrag og plasser det i argumentets helhet", "Parafrasere hvert utdrag linje for linje uten å plassere det", "Bruk utdragene utelukkende som illustrerende pynt i innledningen før selve redegjørelsen", "Velg det klareste utdraget og hopp over resten"],
      explanation: "Jernregelen er å behandle alle utdrag (feil #4-vaksine) og plassere hvert i helheten. Å hoppe over utdrag eller kun parafrasere løsrevet (feil #5) svekker svaret.",
    },
    {
      question: "Hva er det sentrale poenget som MÅ med i en Rawls-redegjørelse?",
      options: ["Utgangsposisjonen og uvitenhetssløret", "Arbeidsdeling etter naturlige anlegg", "Arbeidsdeling etter naturlige anlegg der hver har sin rolle", "Communal provision — fellesskapets beslutning"],
      explanation: "Uvitenhetssløret + utgangsposisjonen er kjernen; uten dem faller Rawls-redegjørelsen (feil #1). Communal provision er Walzer, skadeprinsippet Mill, arbeidsdeling Platon.",
    },
    {
      question: "I firetrinns-SIT: hva innebærer trinnet «identifiser funksjonen»?",
      options: ["Avgjøre om utdraget er et premiss, en intuisjon eller en illustrasjon", "Telle antall setninger i utdraget for å måle dets vekt i argumentet", "Oversette utdraget til originalspråket for å sikre presis begrepsbruk", "Fastslå forfatterens historiske kontekst og verkets utgivelsesår"],
      explanation: "Å identifisere funksjonen betyr å avgjøre om utdraget bærer argumentet som premiss, uttrykker en intuisjon, eller er en illustrasjon — det som lar deg plassere det i helheten.",
    },
    {
      question: "Hva er det sentrale poenget i Berlins negative frihet?",
      options: ["Fravær av hindring påført av andre mennesker", "Fravær av enhver hindring, også manglende evne", "Evne til ukontrollert innblanding", "Selvrealisering av det egentlige selv"],
      explanation: "Negativ frihet = fravær av hindring påført av andre (ofte skjerpet Hayek-nært til *forsettlig* innblanding). Å definere den som fravær av enhver hindring mister grunnskillet andres hindring vs. manglende egen evne; det egentlige selv hører til positiv frihet.",
    },
    {
      question: "Hva er det sentrale poenget i en Platon-redegjørelse?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg", "Rettferdighet = kulturbestemt fellesbeslutning", "Rettferdighet = kulturbestemt fellesbeslutning om godenes rette sfærer", "Rettferdighet = maximin under usikkerhet"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (hver på sin plass). Maximin er Rawls, ikke-dominans Pettit, kulturbestemt fordeling Walzer.",
    },
    {
      question: "Hvorfor er «gå rett på sak» en kalibreringsregel i STV1100?",
      options: ["Innledning og avslutning er bortkastet i et 4-timers essayfag (feil #3)", "Fordi sensor teller ord og trekker for korte svar", "Fordi engelsk fagterminologi er forbudt og må omskrives i innledende avsnitt", "Fordi drøftingsdelen alltid veier tyngst og redegjørelsen bare er oppvarming"],
      explanation: "Unødig innledning/avslutning (feil #3) er oppvarming som ikke gir uttelling. Sensor teller ikke ord; kort + korrekt er fullgodt.",
    },
    {
      question: "I SIT-eksemplet med Rawls-utdrag: hva er funksjonen til et utdrag om refleksiv likevekt (prinsipper må stemme med veloverveide oppfatninger)?",
      options: ["En metode/intuisjon i rettferdiggjøringen — ikke et steg i selve valget", "En begrunnelse for hvorfor partene bak sløret må være gjensidig uinteresserte", "Et bærende premiss som forklarer hvorfor uvitenhetssløret i det hele tatt trengs", "Selve grunngivingen for hvorfor maximin er den rasjonelle valgregelen bak sløret"],
      explanation: "Refleksiv likevekt er den metodiske sjekken der intuisjoner og prinsipper korrigerer hverandre — den hører til rettferdiggjøringen av teorien, ikke til selve valget bak sløret.",
    },
    {
      question: "Hva skiller et utdrag som motiverer uvitenhetssløret fra et som motiverer maximin?",
      options: ["Sløret sikrer upartiskhet ved å ta bort kunnskap; maximin er valgregelen under den uvissheten sløret skaper", "Maximin-regelen motiverer og begrunner sløret, ikke omvendt slik det ofte framstilles", "Sløret hører til Lockes hypotetiske kontrakt, mens maximin er Rawls' egen regel", "De uttrykker samme poeng, bare formulert to ganger med ulike fagtermer"],
      explanation: "Å slå dem sammen er en presisjonsfeil (#7). Sløret er middelet som skaper upartiskhet; maximin er hvorfor det er rasjonelt å velge det sikreste under den radikale uvissheten sløret gir.",
    },
    {
      question: "Hva avslører Machiavelli-utdraget om «grusomhet godt brukt — én gang, ikke fortsatt»?",
      options: ["En veksling: et deontologisk innslag som ikke følger rent av nyttekalkylen", "At Machiavelli fordømmer all grusomhet som umoralsk, uansett hvordan den brukes", "At Machiavelli er en ren konsekvensialist uten deontologiske unntak overhodet", "At Machiavelli prinsipielt avviser all politisk vold som illegitimt maktmiddel"],
      explanation: "Selvbegrensningen «én gang, ikke fortsatt» bærer et deontologisk innslag — den vekslingen som feil #10 (endimensjonal lesning) overser. Amoralismen er nettopp politisk, ikke generell.",
    },
    {
      question: "Hvordan skiller kontrollert innblanding (Odyssevs ved masten) seg fra dominans?",
      options: ["Kontrollert innblanding — der den berørte styrer den — reduserer ikke friheten", "De to begrepene er identiske og brukes om hverandre i Pettits frihetsteori", "Dominans krever at innblandingen faktisk finner sted, ikke bare at evnen er der", "Kontrollert innblanding er alltid en form for frihetsberøvelse hos Pettit"],
      explanation: "Odyssevs som binder seg selv, styrer bindingen — kontrollert innblanding opphever ikke friheten. Dominans er derimot *evne* til ukontrollert innblanding, uavhengig av om den brukes.",
    },
    {
      question: "Hva er tidsbudsjettet for et enkelt SIT-utdrag?",
      options: ["Cirka 8–12 minutter per utdrag", "Cirka 40–60 minutter per utdrag", "Under ett minutt per utdrag totalt sett", "Hele eksamenstiden på ett utdrag"],
      explanation: "Et enkelt utdrag tar ~8–12 min; en hel RED-hovedoppgave ~40–60 min. Å bruke uforholdsmessig mye tid på ett utdrag og hoppe over resten er feil #4.",
    },
    {
      question: "Hva løfter en Pettit-redegjørelse fra C til A?",
      options: ["Poenget om at bemyndigelsen må kunne trekkes tilbake (kontroll er mer enn samtykke)", "Å definere frihet snevert som fravær av faktisk, gjennomført innblanding fra andre", "Å ramse opp flest mulig frihetsbegreper uten å utdype kontrollpoenget nærmere", "Å gjengi Berlins negative frihetsbegrep i stedet for Pettits ikke-dominans"],
      explanation: "Det subtile A-poenget hos Pettit er at kontroll er mer enn engangssamtykke — bemyndigelsen må kunne trekkes tilbake. Å redusere Pettit til fravær av faktisk innblanding mister kjernen (feil #1).",
    },
    {
      question: "Hva menes med «treff strukturen, ikke bare konklusjonen» i RED?",
      options: ["Rekonstruer premissene trinnvis fram til konklusjonen, ikke bare oppgi sluttresultatet", "Gjengi bare tenkerens endelige konklusjon uten å vise begrunnelsen bak", "Erstatt tenkerens argumentgang med dine egne meninger om konklusjonen", "Skriv en fyldig og oppsummerende konklusjon aller sist i besvarelsen"],
      explanation: "Trinn 3 i RED krever trinnvis rekonstruksjon premiss→konklusjon. Å bare oppgi konklusjonen uten argumentgangen treffer ikke strukturen sensor måler.",
    },
  ],
  'stv1100-4-2': [
    {
      question: "Hva kreves for en sterk sammenligning (SAM)?",
      options: ["Begge posisjoner presise OG 2–4 eksplisitte dimensjoner", "Kun det ene leddet gjengitt grundig", "Begge posisjoner ramset opp hver for seg uten dimensjoner", "En lang innledning om fagets historie"],
      explanation: "SAM krever begge posisjoner presise og navngitte dimensjoner. Ensidig framstilling eller ren parallellframstilling uten dimensjoner er feil #8 / flat.",
    },
    {
      question: "Hva er kjernen i en anvendelsesoppgave (ANV)?",
      options: ["Å bruke tenkerens begrepsapparat på den konkrete situasjonen", "Å skrive en forbeholden konklusjon helt uten å bruke noen teori", "Å gjengi tenkerens teori generelt uten å knytte den til det konkrete", "Å sammenligne to tenkere langs eksplisitte dimensjoner mot hverandre"],
      explanation: "ANV krever at teorien faktisk *brukes* på situasjonen. Å gjengi teorien generelt uten å ta stilling er feil #9 (overse anvendelses-vrien).",
    },
    {
      question: "Hva er den skarpeste (mest presise) dimensjonen i sammenligningen Rawls vs. Locke?",
      options: ["Informasjonsbetingelsen — bak slør vs. full informasjon", "At begge to skrev sine hovedverk på engelsk om samfunnskontrakten", "At begge to bruker ordet «kontrakt» om grunnlaget for staten", "Antall sider hver av tenkerne skrev om samfunnskontrakten sin"],
      explanation: "Det subtile A-poenget er at forskjellen ligger i informasjonsbetingelsen (slør vs. full informasjon), ikke bare i «historisk vs. hypotetisk».",
    },
    {
      question: "Hva skiller Dworkins fra Waldrons argument om hatytringslov?",
      options: ["Dworkin bygger på legitimitet i prosessen; Waldron på menneskeverd/social standing", "Begge argumenterer mot en hatytringslov, bare med hvert sitt begrepsapparat i bunnen", "Begge bygger på menneskeverd, men vektlegger prosessen ulikt", "Dworkin argumenterer for lov, mens Waldron argumenterer imot"],
      explanation: "Dworkin (mot lov) = legitimitetsargument; Waldron (for lov) = menneskeverd/social standing. Å blande dem er feil #7.",
    },
    {
      question: "Hva er raushetsterskelen i en HYB-oppgave?",
      options: ["Sensor bruker skjønn og raushet i drøftingsdelen — moderat terskel i et innføringsemne", "At redegjørelsen ikke teller, og at bare den avsluttende vurderingen gir uttelling", "At bare lange og utfyllende svar godtas i drøftingsdelen av oppgaven", "At all drøfting er forbudt fordi emnet bare måler ren redegjørelse"],
      explanation: "HYB er et innføringsemne; sensor er raus i drøftingsdelen. En forbeholden, forankret vurdering holder langt, men ren gjengivelse (feil #8) holder ikke.",
    },
    {
      question: "Hva ville Pettit sagt om utstrakt privat veldedighet?",
      options: ["At den gjør mottakeren dominert; velferd som rettighet fjerner dominansen", "At den er helt irrelevant for frihet siden den ikke gjelder statens handlinger", "At den alltid er et rent gode fordi den øker mottakerens velferd", "At den er identisk med statlig velferd som rettighet i praksis"],
      explanation: "Anvendt: den som er avhengig av en givers godvilje er dominert (giveren kan trekke støtten ukontrollert). Velferd som rettighet (kan ikke trekkes tilbake fritt) fjerner dominansen.",
    },
    {
      question: "Hvorfor er den liberale despoten testcaset som skiller Berlin fra Pettit?",
      options: ["Berlin kan kalle borgeren (negativt) fri, Pettit kaller ham ufri fordi despoten kunne gripe inn", "Fordi den liberale despoten aldri opptrer som case i noen av teoriene", "Fordi begge to kaller borgeren fri så lenge despoten ikke griper inn", "Fordi begge to kaller borgeren ufri under en despots vilkårlige makt"],
      explanation: "Despoten blander seg ikke faktisk inn (Berlin: kanskje fri), men kunne gjøre det ukontrollert (Pettit: ufri, dominert). Caset skiller teoriene skarpest.",
    },
    {
      question: "Hva er A-markøren i drøftingsdelen av en HYB om Mill?",
      options: ["En forankret (pensum-)innvending som Brison, ikke et tilfeldig eget innfall", "Å gjengi Mills tre argumenter for ytringsfrihet to ganger rett etter hverandre", "Å skrive en lang og grundig innledning før man går løs på Mills egen posisjon", "Å hoppe helt over drøftingsdelen og nøye seg med selve redegjørelsen"],
      explanation: "Å bruke Brison som forankret innvending (profitt/privat sensur forvrenger ideenes marked) framfor synsing løfter HYB til A. Ren gjengivelse er feil #8.",
    },
    {
      question: "Hva er kontrasten Rawls vs. Walzer på fordeling?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesbeslutning / communal provision (Walzer)", "Walzer bruker uvitenhetssløret for å utlede sine kulturbestemte fordelingssfærer", "Begge to er relativister som avviser at fordeling kan begrunnes prinsipielt", "Begge to bygger på universelle fordelingsprinsipper som gjelder alle likt"],
      explanation: "Rawls: samme prinsipper for alle bak slør. Walzer: velferdens omfang er en kulturbestemt fellesbeslutning («communal provision»), ikke et universelt prinsipp.",
    },
    {
      question: "Hva er den vanligste drøftingsfeilen (feil #8)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning", "For mange eksplisitte dimensjoner satt opp i sammenligningen", "Å levere en for kort redegjørelse før den selvstendige vurderingen", "Å bruke fagbegrepene så presist at drøftingen mister flyt og retning"],
      explanation: "Feil #8 er å levere referat i (c)-delen i stedet for selvstendig vurdering — den vanligste drøftingsfeilen.",
    },
    {
      question: "Hva er dimensjonene i Platon vs. Nussbaum?",
      options: ["Forskjell i anlegg + rolleplassering (Platon) vs. menneskelig likhet + kapabiliteter (Nussbaum)", "Begge to vektlegger forskjell i naturlige anlegg som grunnlag for rolleplassering", "Universelle prinsipper bak et uvitenhetsslør vs. lokal spesifisering av goder", "Begge to vektlegger de menneskelige kapabilitetene som mål på rettferdighet"],
      explanation: "Platon: rettferd = arbeidsdeling etter forskjell i anlegg. Nussbaum: sosial rettferdighet = alle har de artsbestemte kapabilitetene, bygd på menneskelig likhet.",
    },
    {
      question: "Hvordan bør universalisme og pluralisme holdes fra hverandre hos Nussbaum?",
      options: ["Universalisme = én felles liste for alle; pluralisme = lokal spesifisering — det er en spenning, ikke ett valg", "Pluralisme betyr én felles liste over kapabiliteter som gjelder alle likt", "Universalisme betyr lokal utforming tilpasset hver enkelt kulturs behov", "De er samme begrep, bare formulert på to ulike måter i hennes teori"],
      explanation: "Presisjonspoenget (feil #7-vaksine): universalisme = én liste for alle, pluralisme = lokal spesifisering. Nussbaum har en *spenning* mellom dem, ikke ett rent valg.",
    },
    {
      question: "Hva er det subtile poenget i Dworkin vs. Waldron som kobler til Mill?",
      options: ["At Waldron både bygger på og bryter med Mills skadeprinsipp", "At Mill aldri nevner skadeprinsippet i sitt eget forsvar for ytringsfrihet", "At begge tenkerne ignorerer Mill helt og bygger på menneskeverd i stedet", "At Mill selv argumenterer for hatytringslov ut fra sitt eget skadeprinsipp"],
      explanation: "Waldron utvider Mills skadebegrep til å omfatte undergraving av menneskeverd/social standing — han bygger på og bryter med skadeprinsippet (kobling til kap. 3.2).",
    },
    {
      question: "Hva er strukturen i en redegjør+drøft-hybrid (HYB)?",
      options: ["Solid redegjørelse → forankret innvending → kort forbeholden vurdering", "Kort redegjørelse → lang innledning → ingen vurdering", "Ren drøfting fra start uten noen forutgående redegjørelse for tenkerens posisjon", "Bare gjengivelse av teorien, uten forankret innvending eller forbeholden vurdering"],
      explanation: "HYB (2023→): redegjørelsen er tyngdepunktet/kjernen, fulgt av én–to forankrede innvendinger og en forbeholden vurdering. Redegjørelse er kjernen, drøfting er bonusen.",
    },
  ],
  'stv1100-4-3': [
    {
      question: "Hvilken vurderingsakse er viktigst i STV1100?",
      options: ["Akse 1 — treff det sentrale poenget", "Akse 3 — det subtile ekstra poenget", "Akse 4 — selvstendighet", "Akse 2 — presis begrepsforståelse"],
      explanation: "Akse 1 (treff det sentrale poenget) er tyngst. Bommer du på kjernepoenget, hjelper ikke bredde eller subtilitet.",
    },
    {
      question: "Hva kjennetegner et C-svar i kalibreringen?",
      options: ["Sentralt poeng på plass, korrekt men flatt", "Sentralt poeng mistet og upresise begreper", "Sentralt poeng truffet + subtilt ekstra", "Ingen relevant kunnskap"],
      explanation: "C = sentralt poeng på plass, korrekt men flatt (ingen subtilitet, ren gjengivelse i drøftingen). E = poeng mistet; A = poeng truffet + subtilt/selvstendig.",
    },
    {
      question: "Hva er feil #1?",
      options: ["Å miste det sentrale poenget (den diskvalifiserende kjernefeilen)", "Å skrive en unødig lang innledning før redegjørelsen", "Å skrive for kort slik at redegjørelsen mangler nødvendig fyldighet", "Å bruke engelsk fagterminologi der norske begreper ville vært klarere"],
      explanation: "Feil #1 er å miste det sentrale poenget — Rawls uten uvitenhetssløret, Pettit uten kontroll/ikke-dominans. Den rammer Akse 1.",
    },
    {
      question: "Hva betyr «kort + korrekt = fullgodt»?",
      options: ["Presisjon og dybde, ikke lengde, avgjør — sensor teller ikke ord", "At lengre svar alltid får bedre karakter", "At lengre og mer utfyllende svar alltid ender opp med en bedre karakter", "At bare korte svar godtas, og at lange besvarelser automatisk trekkes ned"],
      explanation: "Sensor teller ikke ord eller sider. Et kort kjernesvar som treffer det sentrale poenget kan gi A; et langt svar som mister poenget faller til svak.",
    },
    {
      question: "Hva innebærer helhetsvurderingen (ingen poenggrenser)?",
      options: ["Karakter settes ved samlet skjønn; svakhet ett sted kan veies opp av styrke et annet", "Sensor teller antall sider i besvarelsen og setter karakteren etter hvor lang teksten er", "En blank deloppgave utløser automatisk stryk, uansett hvor sterkt kandidaten svarer på de øvrige delene", "Hver deloppgave gir et fast antall poeng, og karakteren følger den samlede poengsummen mekanisk uten sensors skjønn"],
      explanation: "Ingen tallfestede poenggrenser: helhetsvurdering A–F. Ubesvart del stenger for A men ikke nødvendigvis for bestått; styrke kan veie opp svakhet.",
    },
    {
      question: "Hvilken feil begår en kandidat som gjengir Pettits teori generelt uten å ta stilling til den liberale despoten?",
      options: ["Feil #9 — overse anvendelses-vrien", "Feil #3 — unødig innledning", "Feil #6 — besvare halve settet", "Feil #10 — endimensjonal Machiavelli"],
      explanation: "Feil #9 er å gjengi teorien generelt uten å *bruke* den på den konkrete situasjonen (despoten, veldedighet, Foster Wallace).",
    },
    {
      question: "Hvilken akse rammes av å blande universalisme og pluralisme hos Nussbaum?",
      options: ["Akse 2 — presis tekst-/begrepsforståelse", "Akse 1 — sentralt poeng", "Akse 4 — selvstendighet i drøftingen", "Akse 3 — subtilt ekstra"],
      explanation: "Å blande nabobegreper (feil #7) rammer Akse 2 (presis begrepsforståelse). Universalisme = én liste, pluralisme = lokal spesifisering.",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å behandle Machiavelli endimensjonalt (ren amoralist uten vekslingen)", "Å hoppe over ett eller flere av de sitatutdragene som oppgaveteksten ber om", "Å skrive for kort og knapt slik at det sentrale poenget aldri kommer tydelig fram i besvarelsen", "Å blande sammen Locke og Rawls sine kontraktsteorier så begrunnelsen for prinsippene blir feil forankret"],
      explanation: "Feil #10 er å lese Machiavelli som ren amoralist/konsekvensialist uten vekslingen mot et deontologisk innslag og skillet politisk vs. generell amoralisme.",
    },
    {
      question: "Hva løfter et svar fra C til A (Akse 3)?",
      options: ["Det subtile ekstra poenget — f.eks. at bemyndigelsen kan trekkes tilbake", "Å gjenta hele redegjørelsen i drøftingsdelen, bare formulert med andre ord", "Å legge til en fyldig innledning som rammer inn hele drøftingen før man går løs på selve oppgaveteksten", "Å ramse opp flest mulig relevante pensumtenkere for å vise at man behersker hele bredden av teoritilfanget"],
      explanation: "Akse 3 (det subtile ekstra poenget) er det som gir A: bemyndigelse kan trekkes tilbake, ulikt motiverte slør, Machiavellis veksling — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er feil #3?",
      options: ["Unødig innledning/avslutning — oppvarming er bortkastet", "Å treffe det sentrale poenget", "Å bruke for mange sitater fra pensum", "Å bruke presise begreper"],
      explanation: "Feil #3 er unødig innledning/avslutning. I et 4-timers essayfag er oppvarming bortkastet — gå rett på sak.",
    },
    {
      question: "Hva sier helhetsvurderingen om en ubesvart deloppgave (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Den gir automatisk stryk", "Den kan aldri veies opp av styrke andre steder", "Den har ingen betydning"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten for å ikke trekke mye, men fører ikke automatisk til stryk.",
    },
    {
      question: "Hva er forskjellen mellom feil #4 og feil #5 i sitatoppgaver?",
      options: ["#4 er å hoppe over utdrag; #5 er å parafrasere et utdrag løsrevet uten å plassere det", "#4 gjelder bare oppgaver om Machiavelli, mens #5 bare gjelder oppgavene om Rawls' teori", "#5 er å behandle alle utdrag helt korrekt og plassert, mens #4 er å parafrasere ett utdrag helt løsrevet", "De er identiske feiltyper som begge handler om at kandidaten unnlater å behandle sitatutdragene i oppgaven"],
      explanation: "#4 er å hoppe over utdrag (behandle bare noen); #5 er å oversette et utdrag linje for linje uten å identifisere funksjon og plassere det i argumentets helhet.",
    },
    {
      question: "Hvordan tilpasses forventningene når en oppgave er erklært vanskelig (Rawls, Machiavellis etikk)?",
      options: ["Å komme i nærheten av et treffende svar regnes som en god prestasjon", "Vanskelige oppgaver teller ikke med i den samlede vurderingen", "Bare et fullt treffende A-svar godtas som bestått; kommer man bare i nærheten, gir det automatisk stryk", "Forventningene heves fordi vanskelige oppgaver skal skille de aller beste kandidatene fra resten skarpere"],
      explanation: "Ved vanskelige oppgaver senkes forventningen — å nærme seg et treffende svar er godt. Helhetsvurderingen tar vanskelighetsgraden med.",
    },
    {
      question: "Hva rammer Akse 4 (selvstendighet)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning (feil #8)", "Å miste det sentrale poenget som selve oppgaveteksten uttrykkelig spør etter", "Å hoppe over sitatutdragene og drøfte helt fritt uten å plassere tekstpassasjene i argumentets helhet", "Å skrive en unødig lang innledning som varmer opp før kandidaten endelig går løs på selve oppgaveteksten"],
      explanation: "Akse 4 måler selvstendighet i sammenligning/drøfting. Ren gjengivelse i (c)-delen i stedet for egen vurdering (feil #8) rammer denne aksen.",
    },
  ],
  'stv1100-4-4': [
    {
      question: "Hva er det sentrale poenget en A-besvarelse på Rawls-oppgaven (modell 1) må treffe?",
      options: ["Utgangsposisjonen + uvitenhetssløret, med maximin begrunnet i uvissheten", "At samfunnet skal være rettferdig og alle ha det bra", "Skadeprinsippet, der maktbruk mot individet bare er legitim for å hindre skade påført tredjepersoner", "At samfunnet skal være rettferdig og at alle borgere til slutt skal ha det materielt like godt som mulig"],
      explanation: "Modell 1s sentrale poeng er utgangsposisjon + uvitenhetsslør, med maximin koblet til den radikale uvissheten sløret skaper. «Samfunnet skal være rettferdig» er for vagt (feil #1).",
    },
    {
      question: "Hva skiller A- fra C-besvarelsen i modell 1 (Rawls)?",
      options: ["A er presis og legger til det subtile ekstra; C har poenget på plass men flatt", "C treffer det sentrale poenget bedre enn A, og er dermed den mest presise", "A dropper redegjørelsen helt og går rett på drøfting, mens C bruker for mye plass på ren gjengivelse", "A er vesentlig lengre og mer utfyllende enn C, og det er nettopp tekstmengden som avgjør karakterløftet"],
      explanation: "A ≈ C i lengde; A navngir apparatet presist, kobler maximin til uvissheten, skiller utdragspremissene og legger til det subtile ekstra. Gapet er presisjon, ikke lengde.",
    },
    {
      question: "I modell 1s SIT-del: hva er forskjellen på utdrag a) og b)?",
      options: ["a) motiverer sløret (upartiskhet), b) motiverer maximin (rasjonalitet under uvisse)", "Utdrag a) gjelder Lockes kontraktteori, mens utdrag b) gjelder Rawls' utgangsposisjon", "De uttrykker nøyaktig samme poeng, nemlig at partene bak sløret velger prinsipper de er tjent med selv", "Utdrag b) motiverer selve sløret gjennom upartiskhet, mens a) begrunner maximin under radikal uvisshet"],
      explanation: "Å skille de to premissene er A-grepet. Å smelte dem sammen er feil #7. a) begrunner hvorfor sløret trengs; b) begrunner valgregelen under sløret.",
    },
    {
      question: "Hvilken akse er tyngst i en Berlin vs. Pettit-sammenligning (modell 2)?",
      options: ["Akse 4 — selvstendighet (egne eksplisitte dimensjoner + forbeholden vurdering)", "Ingen av de fire vurderingsaksene teller i en ren sammenligningsoppgave av typen SAM", "Akse 3 alene — det subtile ekstra poenget, siden en SAM primært belønner én finpolert nyanse til slutt", "Akse 2 alene — presis begrepsforståelse, ettersom korrekt gjengivelse av begge teoriene er hele poenget"],
      explanation: "I en SAM måler sensor selvstendighet tyngst — egne, navngitte dimensjoner og en forbeholden vurdering. Ren parallellframstilling (feil #8) er C i beste fall.",
    },
    {
      question: "Hva er testcaset som skiller Berlin fra Pettit i modell 2?",
      options: ["Den liberale despoten", "Odyssevs ved masten", "Cesare Borgia", "Foster Wallace-sitatet"],
      explanation: "Den liberale despoten: Berlin kan kalle borgeren (negativt) fri om despoten ikke faktisk griper inn; Pettit kaller ham ufri fordi despoten kunne. Caset skiller teoriene skarpest.",
    },
    {
      question: "Hva må A-besvarelsen i modell 3 gjøre med Pettits teori?",
      options: ["Bruke ikke-dominans på veldedigheten, ikke bare gjengi teorien", "Konkludere at mottakerne er «ganske frie fordi de får hjelp»", "Konkludere at mottakerne er «ganske frie fordi de får hjelp», siden bistanden bedrer deres faktiske kår", "Droppe Pettit til fordel for Berlins negative frihetsbegrep"],
      explanation: "Modell 3 er en anvendelse: ikke-dominans må *brukes* på veldedigheten (feil #9-vaksine). Å gjengi teorien generelt og synse er C-svakhetens kjerne.",
    },
    {
      question: "Hva er det sentrale poenget om privat veldedighet hos Pettit (modell 3)?",
      options: ["Muligheten for ukontrollert tilbaketrekking gjør mottakeren dominert", "Veldedighet er alltid bra fordi det hjelper", "Veldedighet er alltid et gode fordi den hjelper mottakeren og dermed utvider handlingsrommet vedkommende har", "Veldedighet er identisk med statlig velferd"],
      explanation: "Mottakeren er prisgitt giverens ukontrollerte vilje — giveren *kan* trekke støtten når som helst, altså dominans. Derfor foretrekker Pettit velferd som rettighet.",
    },
    {
      question: "Hva er sensorblikket?",
      options: ["Å lese et svar langs de fire vurderingsaksene for å skille A/C/E", "En liste over de pensumtenkerne kandidaten helst bør nevne i svaret", "En sjekkliste over hvilke pensumtenkere kandidaten har nevnt, der flere navn gir høyere uttelling", "En metode for å telle ord og sider slik at besvarelsens omfang kan omregnes direkte til en karakter"],
      explanation: "Sensorblikket er å bruke de fire aksene (sentralt poeng, presis tekst/begrep, subtilt ekstra, selvstendighet) til å diagnostisere nivået A/C/E.",
    },
    {
      question: "Hva viser alle tre modellene om lengde?",
      options: ["A-svaret er knapt lengre enn C — forskjellen er presisjon, ikke lengde", "C-svaret er alltid kortest fordi det er dårligst", "C-svaret er alltid kortest nettopp fordi det er dårligst, og kortheten røper manglende faglig innsikt", "A-svaret er alltid omtrent dobbelt så langt som C, fordi bredden i redegjørelsen alene avgjør karakteren"],
      explanation: "«Kort + korrekt = fullgodt»: A ≈ C i lengde. Forskjellen er at A treffer poenget, plasserer alle utdrag og legger til det subtile ekstra.",
    },
    {
      question: "Hva er A-markøren (Akse 3) i modell 1?",
      options: ["At ulike deler av uvitenhetssløret er ulikt godt motivert", "At Rawls bygger videre på Lockes samfunnskontrakt", "At Rawls skrev A Theory of Justice, og at kandidaten plasserer verket riktig i idéhistorien", "At maximin-regelen i det hele tatt nevnes ved navn et sted i redegjørelsen om utgangsposisjonen"],
      explanation: "Det subtile ekstra som løfter til A er at ulike deler av sløret er ulikt godt teoretisk motivert — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er den forbeholdne selvstendige vurderingen (Akse 4) et eksempel på i modell 2?",
      options: ["Å reise at Pettits «mulighet»-kriterium er vidt, og likevel forbeholdent forsvare det", "Å slå skråsikkert fast at Berlins negative frihet er det eneste holdbare frihetsbegrepet", "Å gjengi begge frihetsteoriene grundig og korrekt uten å trekke fram egne, navngitte sammenligningsdimensjoner", "Å konkludere kort med at Berlin og Pettit i realiteten er like, siden begge til sist forsvarer individets frihet"],
      explanation: "A-svaret reiser en reell innvending (nesten alle står i en relasjon der noen kunne gripe inn) og svarer forbeholdent — det er selvstendigheten (Akse 4) sensor belønner.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor privat veldedighet?",
      options: ["Ytelsen kan ikke trekkes tilbake etter forgodtbefinnende, så dominansen fjernes", "Fordi private givere sjelden gir noe til dem som trenger hjelpen mest", "Fordi staten er langt rikere enn private givere og kan gi en mer stabil ytelse", "Fordi mottakerne får mer penger gjennom statlig velferd enn gjennom gaver"],
      explanation: "Velferd som rettighet står ikke under giverens luner, men under kontrollerbar rett — bemyndigelsen kan ikke trekkes tilbake fritt, så dominansen forsvinner. Poenget er ikke beløpet.",
    },
  ],
  'stv1100-4-5': [
    {
      question: "Hvilken valgstruktur speiler øvingseksamen A?",
      options: ["To obligatoriske oppgaver (jf. 2018/2020)", "Én oppgave, deler (a)–(c) (jf. 2025)", "Fire likestilte oppgaver der alle må besvares", "Velg 3 av 4 (jf. H2022)"],
      explanation: "Øvingseksamen A speiler «to obligatoriske oppgaver» — frihet + Rawls, begge må svares.",
    },
    {
      question: "Hvilken valgstruktur speiler øvingseksamen B?",
      options: ["Velg 3 av 4 (jf. H2022)", "To obligatoriske oppgaver", "Én oppgave (a)–(c)", "Muntlig eksamen"],
      explanation: "Øvingseksamen B er «velg 3 av 4» (Dworkin/Waldron, Machiavelli, Pettit, Nussbaum).",
    },
    {
      question: "Hva er strategien i «velg 3 av 4»?",
      options: ["Velg de tre der du treffer det sentrale poenget sikrest", "Velg de tre som ser kortest ut", "Velg tilfeldig blant de fire, siden alle temaene teller likt", "Svar halvveis på alle fire"],
      explanation: "Velg der du treffer kjernepoenget sikrest. Tre gode besvarelser slår fire halve (feil #6).",
    },
    {
      question: "Hvordan bør 4 timer disponeres i (a)–(c)-formatet?",
      options: ["Vekt (a)/(b) som redegjørelse og spar tid til (c)-sammenligningen", "Bruk mest mulig av tiden på nettopp den deloppgaven du kan aller best", "Hopp helt over (c) og lever bare (a) og (b), fordi de to redegjørende delene alene er nok til bestått", "Skriv omtrent like mye på alle tre delene uansett, ettersom sensor fordeler poengene jevnt mellom dem"],
      explanation: "I (a)–(c) er (c) ofte sammenligningen der selvstendigheten testes — spar tid til den. (a)/(b) er redegjørelse.",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen A oppgave 1 (Berlin vs. Pettit)?",
      options: ["Negativ frihet = fravær av hindring fra andre; ikke-dominans = fravær av evne til ukontrollert innblanding", "At Berlin og Pettit begge først og fremst skriver om staten og om grensene for dens maktbruk overfor borgerne", "At Pettit levde og skrev etter Berlin og bygger republikanismen sin direkte på Berlins negative frihetsbegrep", "At begge tenkerne grunnleggende er opptatt av frihet, og at de reelle forskjellene mellom dem er små i praksis"],
      explanation: "Begge sentrale poeng må med: Berlins hindring påført av andre (faktisk innblanding) og Pettits evne til ukontrollert innblanding (dominans), med despoten som testcase.",
    },
    {
      question: "I øvingseksamen A oppgave 2: hva er funksjonen til utdraget om at ingen skal ha forhandlingsmakt fra tilfeldige fødselsfortrinn?",
      options: ["Trussel-fordel — sløret nøytraliserer forhandlingsmakt", "Grunngivingen for maximin", "Refleksiv likevekt mellom prinsipper og intuisjoner", "Forskjellsprinsippet hos Rawls"],
      explanation: "Utdraget om forhandlingsmakt fra fødselsfortrinn gjelder trussel-fordel — sløret nøytraliserer den, koblet til det naturlige/sosiale lotteriet.",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen B oppgave 2 (Machiavelli)?",
      options: ["Skillet klok/etisk politikk + at amoralismen er politisk, ikke generell", "At Machiavelli er en ren amoralist helt uten noen moralske grenser overhodet", "Virtù alene som styrende dyd, forstått som fyrstens evne til å gripe lykken og bøye omstendighetene", "At målet alltid helliger middelet, slik at enhver metode blir legitim så lenge utfallet tjener staten"],
      explanation: "Sentralt poeng: skillet klok/etisk politikk og at amoralismen er politisk (statskunsten), ikke generell. Å lese ham endimensjonalt er feil #10.",
    },
    {
      question: "Hva løfter Dworkin vs. Waldron (øvingseksamen B) til A?",
      options: ["Eksplisitte dimensjoner + at Waldron utvider Mills skadeprinsipp", "Å blande sammen legitimitetsargumentet og selve menneskeverdargumentet", "Å gjengi bare Dworkins posisjon grundig og la Waldron stå i bakgrunnen som en enkel kontrast til den", "Å konkludere kort med at Dworkin og Waldron egentlig er enige, siden begge forsvarer ytringsfriheten"],
      explanation: "A-svaret navngir dimensjoner og ser det subtile: Waldron bygger på og bryter med Mills skadeprinsipp (kobling til kap. 3.2).",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen C del (a) (Platon)?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg (tre grupper)", "Communal provision som kjerne, der fellesskapet selv avgjør fordelingen", "Ikke-dominans som kjerne, der rettferdighet betyr fravær av vilkårlig maktutøvelse mellom borgerne i staten", "Kapabilitetstilnærmingen på plass, der rettferdighet består i at borgerne sikres et sett av grunnleggende evner"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (produsenter/krigere/voktere). Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hva er selvstendighetstesten i øvingseksamen C del (c)?",
      options: ["Å sammenligne Platon og Nussbaum med eksplisitte dimensjoner, ikke gjenta (a)+(b)", "Å gjenta redegjørelsene fra deloppgave (a) og (b) nesten ordrett en gang til i (c)", "Å velge én av teoretikerne og forsvare hen mot den andre med normative motargumenter", "Å hoppe over selve sammenligningen og i stedet drøfte hvem av dem som har mest rett i dag"],
      explanation: "Del (c) måler selvstendighet (Akse 4): navngitte dimensjoner (forskjell i anlegg vs. menneskelig likhet) + forbeholden vurdering — ikke et referat av (a)+(b).",
    },
    {
      question: "Hva skjer med karakteren hvis en obligatorisk oppgave står blank (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Den kan alltid veies opp til A", "Den har ingen betydning så lenge resten holder nivå", "Automatisk stryk på hele eksamen"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten, men fører ikke automatisk til stryk (helhetsvurdering).",
    },
    {
      question: "Hva er tidsbudsjettet for et enkelt SIT-utdrag i eksamen?",
      options: ["Cirka 8–12 minutter", "Cirka 40–60 minutter", "Under ett minutt", "To timer per utdrag"],
      explanation: "SIT-utdrag: ~8–12 min hver. RED-hovedoppgave ~40–60 min. Fordel tiden så alle valgte deler behandles.",
    },
    {
      question: "En fattig person blir ikke hindret av noen i å reise, men mangler penger til billetten. Er hen negativt ufri ifølge Berlin?",
      options: ["Nei — bare hindring påført av andre mennesker teller; manglende evne eller ressurser er ikke negativ ufrihet", "Nei, fordi negativ frihet hos Berlin egentlig handler om selvrealisering av det egentlige, rasjonelle selv", "Ja — enhver hindring som faktisk stanser handlingen, også manglende evne og fattigdom, teller som negativ ufrihet", "Ja, men bare dersom staten selv er årsak til fattigdommen gjennom sin fordelingspolitikk og skatt"],
      explanation: "For Berlin er negativ frihet fravær av hindring *påført av andre* (ofte skjerpet Hayek-nært til forsettlig innblanding). Manglende evne som fattigdom er i utgangspunktet ikke negativ ufrihet.",
    },
    {
      question: "En herre kan når som helst straffe slaven sin, men velger av godhet aldri å gjøre det. Dominerer han slaven ifølge Pettit?",
      options: ["Ja — det er selve evnen til ukontrollert innblanding som er dominans, uavhengig av om den noen gang brukes", "Nei, fordi herrens godhet gjør den mulige innblandingen kontrollert og dermed uskadelig for friheten", "Nei — så lenge herren aldri faktisk griper inn, er slaven fri, akkurat som i Berlins negative frihetsbegrep", "Ja, men bare fordi slaven mangler ressursene (vitiation) som skulle til for å stå imot herrens vilje"],
      explanation: "Dominans er *evnen* til ukontrollert innblanding — selve muligheten er frihetsberøvelse, uansett om herren faktisk griper inn. Dette er kjernen i Pettits brudd med Berlin.",
    },
    {
      question: "Hvorfor bruker Pettit den liberale despoten som prøvestein mot Berlin?",
      options: ["Fordi despoten ikke griper faktisk inn (Berlin: borgerne kan være frie), men kan gjøre det ukontrollert (Pettit: de domineres) — så caset skiller teoriene", "Fordi det viser at veldedighet og godhet i seg selv alltid er en tildekket form for dominans over andre", "Fordi despoten viser at all frihet i bunn og grunn er positiv frihet forstått som selvstyre og fornuft", "Fordi eksempelet beviser at Rawls' rettferdighetsteori bygger på et galt frihetsbegrep bak sløret"],
      explanation: "Despoten griper ikke faktisk inn (Berlin: kanskje frie borgere), men kunne gjort det ukontrollert (Pettit: ufrie). Testcaset som skiller de to frihetsbegrepene.",
    },
    {
      question: "En borger har full rettssikkerhet mot vilkårlig makt, men lav inntekt. Hva sier Pettits rangering av komponentene om friheten hennes?",
      options: ["Ressurssvikt (vitiation) svekker friheten svakere enn dominans ville — ressurskomponenten (non-vitiation) er underordnet ikke-dominans", "Hun er like ufri som en slave, siden ressursmangel og dominans etter Pettit rangeres helt likt som frihetstap", "Hun mangler negativ frihet fordi lav inntekt er en hindring påført henne av det økonomiske systemet", "Hun er fullstendig fri, siden bare faktisk innblanding fra andre kan berøve henne friheten hennes"],
      explanation: "Non-vitiation = ressursbetingelsen oppfylt. Svikt (vitiation) er et frihetstap, men Pettit rangerer innblandings-/dominanskomponentene (a)/(b) *tyngre* enn ressurskomponentene (c)/(d).",
    },
    {
      question: "Odyssevs ber selv mannskapet binde ham til masten forbi sirenene. Hvorfor er ikke dette et frihetstap for Pettit?",
      options: ["Fordi bindingen er kontrollert av ham selv — kontrollert innblanding opphever ikke friheten", "Fordi eksempelet illustrerer non-vitiation, ikke frihet fra dominans", "Fordi det er mannskapet, ikke Odyssevs selv, som bærer det moralske ansvaret for selve bindingen", "Fordi han fysisk ikke merker tauet mens skipet passerer, og opplevd tvang er det avgjørende for Pettit"],
      explanation: "Odyssevs styrer sin egen binding — innblandingen er kontrollert av den berørte selv og opphever derfor ikke friheten, i motsetning til ukontrollert innblanding.",
    },
    {
      question: "Hva er kjernen i «rettferdighet som rimelighet»?",
      options: ["Prinsippene frie og likeverdige ville valgt under rimelige vilkår", "En fordeling av goder etter den enkeltes fortjeneste", "En arbeidsdeling ordnet etter borgernes naturlige anlegg og evner", "En historisk samfunnskontrakt inngått av frie borgere i naturtilstanden"],
      explanation: "Rawls: rettferdsprinsipper er de frie og likeverdige personer ville valgt under rimelige vilkår — kontraktteori på høyere abstraksjonsnivå.",
    },
    {
      question: "Hva er utgangsposisjonen hos Rawls?",
      options: ["Den tenkte valgsituasjonen der prinsipper velges", "Den refleksive likevekten mellom prinsipper og intuisjoner", "Det sosiale lotteriet som fordeler talenter og startposisjoner", "En historisk avtale inngått mellom borgere med full informasjon"],
      explanation: "Utgangsposisjonen er den hypotetiske valgsituasjonen. Sammen med uvitenhetssløret er den det sentrale poenget.",
    },
    {
      question: "Hva skjuler uvitenhetssløret?",
      options: ["Egen klasse, evner og livssyn", "Alle rettferdsprinsipper", "Bare inntekt og formue, ikke evner", "Alle de ferdige rettferdsprinsippene"],
      explanation: "Sløret skjuler partenes egen posisjon, evner og livssyn, slik at ingen skreddersyr prinsippene. Ulike deler er ulikt godt motivert (subtilt).",
    },
    {
      question: "Bak uvitenhetens slør vet partene ikke hvilken samfunnsposisjon de får. Hvorfor velger de ifølge Rawls etter maximin-regelen?",
      options: ["Fordi de sikrer seg mot den verst tenkelige posisjonen når oddsen er ukjent og innsatsen er hele livsutsikten", "Fordi valget uansett blir tilfeldig når man ikke kjenner sin egen plass, så regelen spiller liten rolle", "Fordi de vil maksimere gjennomsnittsnytten for samfunnet som helhet, uansett hvem som havner nederst", "Fordi de kjenner sannsynlighetene for hver samfunnsposisjon og velger etter forventet nytteverdi"],
      explanation: "Maximin: velg alternativet med best verst-tenkelig utfall. Rawls mener det er rasjonelt under radikal usikkerhet, der oddsen er ukjent og det som står på spill er hele livsutsiktene.",
    },
    {
      question: "Hva er forskjellsprinsippet?",
      options: ["Ulikheter tillates kun til størst fordel for de dårligst stilte", "Alle skal ha nøyaktig like mye, uansett innsats og behov", "Frihet må alltid komme før alle andre goder og hensyn", "Alle skal ha lik sjanse til utdanning og posisjoner"],
      explanation: "Forskjellsprinsippet (prinsipp 2b): ulikhet tillates bare hvis den gagner de dårligst stilte mest. Ikke bland med sjanselikhet (feil #7).",
    },
    {
      question: "Hva innebærer leksikalsk prioritet hos Rawls?",
      options: ["Frihet før sjanselikhet før forskjellsprinsipp", "Alle tre prinsipper veies likt mot hverandre", "Forskjellsprinsippet kommer alltid først i rekken", "Sjanselikhet skal prioriteres foran de like frihetene"],
      explanation: "Leksikalsk prioritet: prinsipp 1 (frihet) før 2a (sjanselikhet) før 2b (forskjellsprinsipp). Frihet kan ikke ofres for velstand.",
    },
    {
      question: "Hvorfor måler Rawls hvem som er dårligst stilt i primærgoder framfor i lykke eller preferansetilfredsstillelse?",
      options: ["Fordi primærgoder (rettigheter, inntekt, selvrespektens grunnlag) er goder enhver rasjonell person vil ha uansett livsplan — en nøytral, offentlig målestokk", "Fordi lykke ikke spiller noen rolle for rettferdighet, kun materiell inntekt og formue teller til slutt", "Fordi communal provision krever at man måler faktisk konsum og forbruk, ikke tilgangen til selve godene", "Fordi primærgoder for Rawls er nøyaktig det samme som Sens kapabiliteter, bare målt på individnivå"],
      explanation: "Primærgoder — rettigheter og friheter, inntekt/formue, selvrespektens sosiale grunnlag — er goder enhver rasjonell person vil ha uansett livsplan. De gir en nøytral målestokk for hvem som er dårligst stilt.",
    },
    {
      question: "Hva begrunner forskjellsprinsippet?",
      options: ["Det sosiale og naturlige lotteri (fødsel/talent er moralsk vilkårlig)", "En kulturbestemt fordeling forankret i fellesskapets forståelse", "Skadeprinsippet om at frihet kun begrenses ved skade på andre", "At alle fortjener sin startposisjon gjennom egen innsats"],
      explanation: "Fødsel og talent er moralsk vilkårlige — ingen fortjener startfortrinnene, derfor skal ulikhet gagne de dårligst stilte.",
    },
    {
      question: "Hva er Lockes kontrakt?",
      options: ["Et faktisk, pågående samtykke med full informasjon", "En kulturbestemt communal provision av velferd", "Et hypotetisk prinsippvalg tatt bak et uvitenhetsslør", "En arbeidsdeling ordnet etter naturlige anlegg"],
      explanation: "Lockes kontrakt er et faktisk, vedvarende samtykke der partene vet hvem de er — motsatt av Rawls' hypotetiske valg bak slør.",
    },
    {
      question: "Hva er forskjellen uttrykkelig vs. stilltiende samtykke (Locke)?",
      options: ["Stilltiende: den som nyter samfunnets goder har samtykket; uttrykkelig: eksplisitt", "Uttrykkelig samtykke gjelder bare for konger og fyrster", "Stilltiende samtykke regnes alltid som ugyldig", "De to formene er i praksis helt identiske"],
      explanation: "Uttrykkelig (explicit) er eksplisitt samtykke; stilltiende (tacit) er at den som nyter godene har samtykket. Ikke bland dem (feil #7).",
    },
    {
      question: "Hva er Hume-kritikken av Locke?",
      options: ["Stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet", "At Locke helt overser talent og naturlige anlegg", "At kontrakten hans er altfor streng mot borgerne", "At Locke i bunn og grunn er moralsk relativist"],
      explanation: "Hume: stilltiende samtykke er en fiksjon fordi de fleste ikke reelt kan forlate samfunnet, så samtykket er ikke fritt.",
    },
    {
      question: "Hva er «communal provision» hos Walzer?",
      options: ["Velferd som en kulturbestemt fellesbeslutning", "Et universelt rettferdsprinsipp", "Ikke-dominans som fravær av vilkårlig maktutøvelse", "Uvitenhetssløret som skjuler partenes egen posisjon"],
      explanation: "Communal provision: velferdens omfang er noe fellesskapet kulturbestemt bestemmer — ikke et universelt prinsipp. Kontrasten til Rawls.",
    },
    {
      question: "Hva er kontrasten Walzer vs. Rawls?",
      options: ["Kulturbestemt fellesbeslutning vs. universelle prinsipper bak slør", "Begge bygger på universelle prinsipper gyldig for alle", "Begge er i bunn og grunn kulturrelativister om verdier", "Walzer bruker også et uvitenhetsslør i sin teori"],
      explanation: "Walzer: lokal, kulturbestemt fellesforståelse. Rawls: samme universelle prinsipper for alle bak slør.",
    },
    {
      question: "Hva er Platons sentrale poeng om rettferdighet?",
      options: ["Arbeidsdeling etter naturlige anlegg (hver på sin plass)", "Skadeprinsippet om frihet og grenser", "At alle har kapabilitetene på plass", "Valg etter maximin-regelen bak slør"],
      explanation: "Rettferdighet = arbeidsdeling etter naturlige anlegg. Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hvilke er Platons tre grupper?",
      options: ["Produsenter, krigere og styrende (voktere)", "Prester, konger og jordbrukende bønder", "Rike, fattige og en bred mellomklasse", "Frie borgere, slaver og innflyttere"],
      explanation: "De tre gruppene: produsenter, krigere og styrende («voktere»), hver etter naturlige anlegg. Ikke bland dem (feil #7).",
    },
    {
      question: "Hvorfor mangler Platons voktere privateiendom og familie?",
      options: ["Det er middelet mot maktmisbruk", "For å øke produksjonen", "Fordi de rett og slett er for fattige", "Fordi det er en helt tilfeldig ordning"],
      explanation: "Fravær av eiendom/familie for vokterne er *middelet* mot at makten misbrukes, sammen med oppdragelse (subtilt poeng).",
    },
    {
      question: "Hvordan bygges Platons argument?",
      options: ["Deskriptive antakelser + normative premisser → konklusjon", "Kun ut fra empiriske observasjoner av samfunn", "Gjennom ren normativ postulering uten empiri", "Som et strengt matematisk-logisk bevis"],
      explanation: "Argumentet bygger på deskriptive antakelser (ulike anlegg) + normative premisser (samfunnet bør ordnes slik) — ikke ren postulering.",
    },
    {
      question: "Hva er sosial rettferdighet hos Nussbaum?",
      options: ["At alle har de artsbestemte kapabilitetene på plass", "At borgerne kun har formell, negativ frihet sikret", "En arbeidsdeling etter naturlige anlegg og evner", "En kulturbestemt fordeling av samfunnets goder"],
      explanation: "Sosial rettferdighet = at alle har de artsbestemte kapabilitetene realisert, ikke bare formell frihet. Det sentrale poenget.",
    },
    {
      question: "Hva er spenningen universalisme vs. pluralisme hos Nussbaum?",
      options: ["Én liste for alle (universalisme) vs. lokal spesifisering (pluralisme)", "Skillet mellom negativ og positiv frihet hos Berlin", "Motsetningen mellom Rawls' og Lockes kontrakt", "Spenningen mellom frihet og materiell likhet"],
      explanation: "Universalisme = én felles liste; pluralisme = lokal spesifisering. En *spenning*, ikke ett rent valg. Ikke bland dem (feil #7).",
    },
    {
      question: "Hva er Aristoteles-koblingen hos Nussbaum?",
      options: ["Staten skal legge til rette for utvikling av menneskelige anlegg", "At dyd alltid ligger som en middelvei mellom ytterpunkter", "At lykke (eudaimonia) er menneskelivets endelige mål", "At mennesket i sin natur er et politisk flokkdyr"],
      explanation: "Den aristoteliske begrunnelsen: staten skal legge til rette for utviklingen av menneskelige anlegg — grunnlaget for kapabilitetstilnærmingen.",
    },
    {
      question: "Hva er dimensjonen i Platon vs. Nussbaum?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet + kapabiliteter (Nussbaum)", "At begge to bygger rettferdigheten på grunnleggende menneskelig likhet", "At begge to vektlegger forskjell i menneskenes naturlige anlegg", "Motsetningen mellom universelle prinsipper og valg bak sløret"],
      explanation: "Platon: rettferd = arbeidsdeling etter forskjell i anlegg. Nussbaum: bygd på menneskelig likhet og kapabiliteter. 2025 c-arketypen.",
    },
    {
      question: "Hva er skillet klok vs. etisk politikk (Machiavelli)?",
      options: ["Klok = instrumentelt rasjonell statskunst; etisk = den moralske vurderingen ved siden av", "Klok politikk = den moralsk gode politikken; etisk politikk = den umoralske og kyniske maktbruken", "Klok = handling styrt av kristen dyd; etisk = den kyniske maktbruken ved siden av statskunsten", "Klok = ærlig og åpen fyrstestyre; etisk = det skjulte, manipulerende innslaget som fyrsten skjuler"],
      explanation: "Klok politikk er instrumentelt rasjonell (virtù, Fortuna); etisk politikk er den moralske vurderingen. Det sentrale skillet.",
    },
    {
      question: "Hva er virtù hos Machiavelli?",
      options: ["Fyrstens dyktighet/handlekraft til å mestre omstendighetene", "Fyrstens samlede rikdom og de militære ressursene han rår over", "Fyrstens hensynsløse grusomhet brukt som mål i seg selv, uavhengig av statens behov", "Fyrstens medfødte moralske godhet og evne til å handle etisk riktig i alle situasjoner"],
      explanation: "Virtù er fyrstens dyktighet og handlekraft. Sammen med Fortuna avgjør den politisk suksess — del av «klok politikk».",
    },
    {
      question: "Hva er Fortuna hos Machiavelli?",
      options: ["Tilfeldighetens/lykkens rolle i politikken", "Fyrstens egen dyktighet og handlekraft", "Den italienske bystaten der Machiavelli utviklet sin politiske filosofi", "Et etisk prinsipp om rett handling"],
      explanation: "Fortuna er tilfeldighetens rolle; fyrsten trenger virtù for å demme opp for den. Del av den kloke politikken.",
    },
    {
      question: "Hva menes med at Machiavelli veksler?",
      options: ["Mellom rendyrket konsekvensialisme og et deontologisk innslag", "Mellom fred og krig som to helt ulike måter å styre en bystat på", "Mellom to konkurrerende fyrster som begge gjør krav på den samme tronen", "Mellom to rivaliserende italienske bystater i kampen om regional dominans"],
      explanation: "Machiavelli veksler mellom ren konsekvensialisme og et deontologisk innslag — det vanskeligste, A-givende poenget. Å lese ham endimensjonalt er feil #10.",
    },
    {
      question: "Hva er politisk vs. generell amoralisme (Machiavelli)?",
      options: ["Amoralismen gjelder statskunsten, ikke moralen generelt", "Bare privatmoralen gjelder, aldri moralen i selve statskunsten", "All moralsk vurdering avvises helt, både i statskunsten og i privatlivet", "Politisk og generell amoralisme er samme sak: fyrsten er hevet over all moral"],
      explanation: "Amoralismen er *politisk* — den gjelder statskunsten, ikke moralen generelt. Å blande dem er feil #7. Fyrsten skal også *fremstå* moralsk.",
    },
    {
      question: "Hva illustrerer Cesare Borgia?",
      options: ["Klok politikk og «god bruk av grusomhet» i praksis", "Fortunas fullstendige overmakt over enhver fyrstes planer", "Den positive frihetens ideal om selvrealisering gjennom aktiv medvirkning", "Den etisk fullkomne politikken der moral og statskunst er fullstendig forent"],
      explanation: "Cesare Borgia er Machiavellis illustrasjon på klok politikk og «god bruk av grusomhet» — konkretiserer skillet klok/etisk.",
    },
    {
      question: "Hva er Mills tre sannhetsargumenter?",
      options: ["Intellektuell ydmykhet, sannhet gjennom meningsbryting, den anti-dogmatiske funksjonen", "Frihet, likhet og brorskap som den franske revolusjonens tre grunnverdier", "Skillet mellom negativ, positiv og republikansk frihet i frihetsdebatten", "Machiavellis tredeling i klok, etisk og amoralsk politikk i statskunsten"],
      explanation: "(1) intellektuell ydmykhet (vi kan ta feil); (2) sannhet gjennom meningsbryting; (3) anti-dogmatisk funksjon (sannhet uten motstand blir dødt dogme).",
    },
    {
      question: "Hva er den anti-dogmatiske funksjonen (Mill)?",
      options: ["En sannhet uten motstand blir et dødt dogme", "At staten alltid tar feil", "At staten som institusjon alltid tar feil i sine vurderinger av sannheten", "At all mening er relativ"],
      explanation: "Tredje argument: også sanne meninger trenger motstand, ellers blir de døde dogmer vi mister grunnene til å tro på.",
    },
    {
      question: "Hva er skadeprinsippet (Mill)?",
      options: ["Frihet kan bare innskrenkes for å hindre skade på andre", "Frihet kan innskrenkes for personens eget beste", "Staten kan gjøre nettopp det den vil så lenge lovene er formelt vedtatt", "All ytring kan forbys så lenge et flertall i samfunnet finner den støtende"],
      explanation: "Skadeprinsippet: frihet kan bare innskrenkes for å hindre skade på andre. Waldron utvider dette skadebegrepet.",
    },
    {
      question: "Hva er Brison-kritikken av Mill?",
      options: ["Offentligheten drives av profitt, ikke sannhetssøken; forvrengt av ulikhet og privat sensur", "At skadeprinsippet er så vidt at det til slutt rettferdiggjør enhver innskrenkning", "At ytringsfrihet i seg selv er farlig og bør underlegges statlig forhåndssensur", "At Mills skadeprinsipp er altfor strengt og kveler den frie meningsbrytingen"],
      explanation: "Brison utfordrer Mills optimisme: ideenes marked er forvrengt av profitt, ulikhet og privat sensur. Forankret HYB-innvending.",
    },
    {
      question: "Hva er Dworkins argument mot hatytringslov?",
      options: ["Legitimitet — alle må få ytre seg for at vedtak skal være legitime", "Ytringsfrihetens verdi for den frie sannhetssøkingen i offentligheten", "At skadeprinsippet allerede dekker hatytringer og gjør egne forbud overflødige", "At menneskeverd som social standing undergraves når hatytringer får stå uimotsagt"],
      explanation: "Dworkin: å forby hatytringer undergraver vedtakets legitimitet, fordi alle må ha fått ytre seg på egne premisser. Prosessargument.",
    },
    {
      question: "Hva er Waldrons argument for hatytringslov?",
      options: ["Menneskeverd som social standing undergraves av hatretorikk", "At staten først og fremst må verne mindretallets rett til å ytre seg", "At legitimiteten i prosessen krever at alle får ytre seg helt fritt først", "At all ytring uansett innhold er potensielt skadelig og derfor bør reguleres"],
      explanation: "Waldron: hatretorikk undergraver utsatte gruppers likeverdige anseelse (social standing). Han bygger på og bryter med Mills skadeprinsipp.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor veldedighet?",
      options: ["Rettigheten kan ikke trekkes tilbake fritt, så dominansen fjernes", "Fordi private givere gjennomgående gir langt mindre enn staten gjør", "Fordi privat veldedighet i seg selv er ulovlig og forbudt i en rettsstat", "Fordi mottakeren rent faktisk får et større beløp gjennom offentlig velferd"],
      explanation: "Privat veldedighet gjør mottakeren avhengig av giverens ukontrollerte vilje (dominans); velferd som rettighet står under kontrollerbar rett, ikke luner.",
    },
    {
      question: "Hva er permanent borgerkontroll (Pettit)?",
      options: ["Bemyndigelsen må kunne trekkes tilbake og utøves løpende, ikke bare engangssamtykke", "At kontroll og veldedighet er samme sak fordi begge hviler på giverens gode vilje", "At borgerne i praksis aldri kan kontrollere staten, kun samtykke passivt til den", "At ett enkelt samtykke ved statens inngåelse er nok til å sikre borgerkontroll"],
      explanation: "Kontroll er mer enn engangssamtykke: bemyndigelsen må kunne trekkes tilbake løpende. Det subtile A-poenget hos Pettit.",
    },
  ],
  'stv1100-4-prove': [
    {
      question: "En oppgave lyder «Sammenlign Rawls og Locke». Hvilken sjanger er dette?",
      options: ["SAM (sammenligning)", "RED (redegjørelse)", "SIT (sitattolkning)", "ANV (anvendelse)"],
      explanation: "«Sammenlign to tenkere» er SAM — der begge posisjoner må være presise og dimensjonene eksplisitte.",
    },
    {
      question: "En oppgave lyder «Hva ville Pettit sagt om privat veldedighet?». Hvilken sjanger er dette?",
      options: ["ANV (anvendelse)", "SAM (sammenligning)", "RED (redegjørelse)", "HYB (hybrid)"],
      explanation: "«Hva ville X ment om dette?» er ANV — begrepsapparatet skal *brukes* på situasjonen, ikke gjengis generelt.",
    },
    {
      question: "En oppgave gir fire utdrag a)–d) og ber deg forklare hva de betyr. Hvilken sjanger?",
      options: ["SIT (sitattolkning)", "RED (redegjørelse)", "SAM (sammenligning)", "ANV (anvendelse)"],
      explanation: "Utdrag a)–d) som skal tolkes og plasseres er SIT. Behandle alle utdrag (feil #4-vaksine).",
    },
    {
      question: "En oppgave lyder «Gjør rede for X og drøft kort i lys av en kritiker». Hvilken sjanger?",
      options: ["HYB (redegjør+drøft-hybrid)", "SAM alene (ren sammenligning)", "RED alene (rendyrket redegjørelse)", "SIT alene (rendyrket sitatanalyse)"],
      explanation: "«Gjør rede for X og drøft kort» er HYB (2023→) — solid redegjørelse + forankret innvending + forbeholden vurdering.",
    },
    {
      question: "En oppgave lyder «Gjør rede for Berlins frihetsbegrep». Hvilken sjanger?",
      options: ["RED (redegjørelse)", "SIT (sitattolkning)", "SAM (sammenligning)", "HYB (hybrid)"],
      explanation: "«Gjør rede for X» er RED — fagets grunnform: presis trinnvis argumentrekonstruksjon.",
    },
    {
      question: "Hvilken vurderingsakse er viktigst?",
      options: ["Akse 1 — treff det sentrale poenget", "Akse 3 — det subtile ekstrapoenget", "Akse 4 — selvstendig sammenligning", "Akse 2 — presis begrepsforståelse"],
      explanation: "Akse 1 er tyngst. Bommer du på kjernepoenget, hjelper ikke bredde eller subtilitet.",
    },
    {
      question: "Hva kjennetegner et A-svar ved helhetsvurdering?",
      options: ["Sentralt poeng truffet + minst ett subtilt ekstra og/eller selvstendig sammenligning", "At det sentrale poenget er mistet, men bredden veier opp for tapet likevel", "At svaret mangler relevant kunnskap, men er velskrevet og godt strukturert", "At svaret rett og slett er langt og dekker mest mulig av pensum i bredden"],
      explanation: "A = sentralt poeng truffet presist + Akse 3 (subtilt) og/eller Akse 4 (selvstendighet). C = poeng på plass men flatt; E = poeng mistet.",
    },
    {
      question: "Hva er feilen når en kandidat gjengir Rawls grundig men glemmer uvitenhetssløret?",
      options: ["Feil #1 — miste det sentrale poenget", "Feil #3 — unødig innledning", "Feil #8 — gjengivelse i drøftingsdel", "Feil #10 — endimensjonal Machiavelli"],
      explanation: "Å miste uvitenhetssløret er feil #1 — den diskvalifiserende kjernefeilen som rammer Akse 1.",
    },
    {
      question: "Hva er feilen når en kandidat i en SAM-oppgave bare framstiller det ene leddet?",
      options: ["Feil #8 / ensidig sammenligning", "Feil #4 — hoppe over utdrag", "Feil #10 — endimensjonal Machiavelli", "Feil #2 — utenomsnakk"],
      explanation: "Ensidig sammenligning (bare det ene leddet) er feil #8-varianten som rammer Akse 4 (selvstendighet).",
    },
    {
      question: "Hva betyr «gå rett på sak» (feil #3-vaksine)?",
      options: ["Ingen innledning/avslutning — start med tenkeren og det sentrale poenget", "Avslutt alltid svaret med en fyldig oppsummering av hele besvarelsen til slutt", "Skriv en fyldig innledning som rammer inn tenkeren før du går til poenget", "Referer hele den relevante litteraturen først, før du begynner på selve svaret"],
      explanation: "Oppvarming er bortkastet i et 4-timers essayfag. Start med tenkeren og treff kjernepoenget i første avsnitt.",
    },
    {
      question: "Hva er det sentrale poenget i en RED om Pettits ikke-dominans?",
      options: ["Fravær av evne til ukontrollert innblanding (muligheten, ikke faktisk innblanding)", "Arbeidsdeling etter medfødte anlegg, slik at hver borger fyller sin rette plass", "Fravær av enhver hindring, slik at også naturlige stengsler regnes som ufrihet", "En kulturbestemt fordeling av goder som varierer fra samfunn til samfunn"],
      explanation: "Ikke-dominans = fravær av *evne* til ukontrollert innblanding. Muligheten er frihetsberøvelse — den liberale despoten dominerer uten å gripe inn.",
    },
    {
      question: "I prøve 2s SIT-del: hva skiller utdrag a) (om at velgerne ikke skal kjenne sin plass) fra b) (om å sikre seg mot det verste)?",
      options: ["a) motiverer sløret, b) motiverer maximin", "b) motiverer sløret, a) motiverer maximin", "De er samme poeng: begge begrunner uvitenhetssløret", "De begrunner begge maximin-regelen"],
      explanation: "a) begrunner uvitenhetssløret (upartiskhet); b) begrunner maximin (rasjonalitet under uvisse). Å smelte dem sammen er feil #7.",
    },
    {
      question: "Hva må ANV-svaret om veldedighet (prøve 3b) gjøre?",
      options: ["Bruke ikke-dominans på veldedigheten, ikke bare gjengi teorien", "Konkludere at mottakerne er frie fordi de får hjelp", "Gjengi Pettits teori om ikke-dominans generelt, uten å knytte den til veldedighet", "Konkludere at mottakerne er frie nettopp fordi de faktisk mottar hjelpen de trenger"],
      explanation: "ANV krever at ikke-dominans *brukes* på veldedigheten: mottakeren er prisgitt giverens ukontrollerte vilje = dominert. Å gjengi generelt er feil #9.",
    },
    {
      question: "Hva er kjernen i HYB-oppgaven om Mill + Brison (prøve 3c)?",
      options: ["Redegjørelsen (tre sannhetsargumenter) er tyngdepunktet; Brison er forankret motpart", "En sammenligning av Mill og Locke om ytringsfrihetens plass i samfunnskontrakten", "Bare drøftingen teller; redegjørelsen for de tre sannhetsargumentene kan hoppes over", "Bare en ren gjengivelse av Mill kreves, uten at Brison trekkes inn som motpart"],
      explanation: "HYB: de tre sannhetsargumentene + skadeprinsippet er kjernen; Brison brukes som forankret innvending, ikke synsing (feil #8).",
    },
    {
      question: "Hva måler del (c) i prøve 4 (Platon vs. Nussbaum)?",
      options: ["Selvstendighet (Akse 4) — eksplisitte dimensjoner, ikke et referat av (a)+(b)", "Tidsbruken kandidaten legger på oppgaven relativt til de andre deloppgavene", "Bare redegjørelsen for hver enkelt tenker, gjentatt fra deloppgave (a) og (b)", "Bare flervalgsdelen der kandidaten krysser av for riktig begrep uten drøfting"],
      explanation: "Sammenligningsdelen er selvstendighetstesten: navngitte dimensjoner + forbeholden vurdering, ikke å gjenta redegjørelsene fra (a) og (b).",
    },
    {
      question: "Hva er det sentrale poenget om Platon (prøve 4a)?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg", "Communal provision forstått som fellesskapets egen beslutning", "At de artsbestemte kapabilitetene er på plass hos alle borgere i samfunnet", "Uvitenhetssløret som sikrer en upartisk fordeling av samfunnets grunngoder"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (tre grupper). Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hva er det sentrale poenget om Nussbaum (prøve 4b)?",
      options: ["Sosial rettferdighet = at alle har de artsbestemte kapabilitetene på plass", "Ikke-dominans som fravær av evne til ukontrollert innblanding fra andre", "Communal provision av felles goder framfor individuell kapabilitetsrealisering", "Arbeidsdeling etter naturlige anlegg der hver gruppe fyller sin rette funksjon"],
      explanation: "Nussbaums sentrale poeng: sosial rettferdighet = at alle har de artsbestemte kapabilitetene realisert, ikke bare formell frihet.",
    },
    {
      question: "Hva rammer Akse 2 (presis tekst-/begrepsforståelse)?",
      options: ["Å hoppe over utdrag, løsrevet parafrase og upresise nabobegreper", "Å treffe det sentrale poenget presist allerede i det første avsnittet", "Å skrive for kort og knapt, slik at svaret mangler den nødvendige fylden", "Å bomme på det sentrale poenget slik at hele redegjørelsen mister forankringen"],
      explanation: "Akse 2 rammes av feil #4 (hoppe over), #5 (løsrevet parafrase) og #7 (blande nabobegreper som universalisme/pluralisme).",
    },
    {
      question: "Hva er utdragsfunksjonene i en SIT-oppgave?",
      options: ["Premiss, intuisjon eller illustrasjon", "Innledning, hoveddel, avslutning", "Innledning, hoveddel og avslutning som essayets tre faste bestanddeler", "Positiv, negativ, nøytral"],
      explanation: "Hvert utdrag klassifiseres som premiss (bærer argumentet), intuisjon (veloverveid oppfatning), eller illustrasjon (tekstens eget bilde).",
    },
    {
      question: "Hva sier helhetsvurderingen om en blank deloppgave (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Den kan alltid veies opp til A av de øvrige delene i settet", "Den har ingen betydning for karakteren så lenge de andre delene er besvart", "Den fører automatisk til stryk uansett hvor sterkt resten av besvarelsen er"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten, men fører ikke automatisk til stryk.",
    },
    {
      question: "Hva er A-markøren (Akse 3) i en Rawls-redegjørelse?",
      options: ["At ulike deler av uvitenhetssløret er ulikt godt motivert", "At Rawls skrev en berømt bok om rettferdighet så tidlig som i 1971", "At maximin-regelen gjelder uavhengig av hvordan sløret er begrunnet", "At sløret først og fremst sikrer nyttemaksimering framfor rettferdighet"],
      explanation: "Det subtile ekstra som løfter til A: at ulike deler av sløret er ulikt godt teoretisk motivert — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å behandle Machiavelli endimensjonalt uten vekslingen", "Å blande sammen Rawls' og Lockes to ulike kontraktteorier", "Å tolke fyrsten utelukkende som en satire over samtidens fyrstestyre", "Å lese Machiavelli som en konsekvent moralfilosof i dydsetisk tradisjon"],
      explanation: "Feil #10: å lese Machiavelli som ren amoralist/konsekvensialist uten vekslingen mot et deontologisk innslag og skillet politisk vs. generell amoralisme.",
    },
    {
      question: "Hva menes med «kort + korrekt = fullgodt»?",
      options: ["Presisjon og dybde, ikke lengde, avgjør karakteren", "Man skal droppe redegjørelsen", "At kun grundige og omfattende svar kan nå toppkarakteren A", "At sensor primært vektlegger antall siterte teoretikere i svaret"],
      explanation: "Sensor teller ikke ord. Et kort kjernesvar som treffer det sentrale poenget kan gi A; et langt svar som mister poenget faller til svak.",
    },
    {
      question: "Hva er den vanligste drøftingsfeilen (feil #8)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning", "For mange eksplisitte dimensjoner satt opp i sammenligningen", "Å komme med for mange selvstendige vurderinger uten kildeforankring", "Å skrive en for kort redegjørelse før selve sammenligningen starter"],
      explanation: "Feil #8: å levere referat i (c)-delen i stedet for selvstendig vurdering — rammer Akse 4 (selvstendighet).",
    },
    {
      question: "Hva er det sentrale poenget i Berlins negative frihet?",
      options: ["Fravær av hindring påført av andre mennesker", "Fravær av enhver hindring, også manglende evne", "Evne til ukontrollert innblanding", "Selvrealisering av det egentlige selv"],
      explanation: "Negativ frihet = fravær av hindring påført av andre (ofte skjerpet Hayek-nært til *forsettlig* innblanding). Å definere den som fravær av enhver hindring mister grunnskillet andres hindring vs. manglende egen evne (feil #1/#7).",
    },
    {
      question: "Hva er strukturen i firetrinns-RED?",
      options: ["Plasser → gjengi med kjernebegrep → rekonstruer trinnvis → illustrer med eksempel", "Innledning → hoveddel med argumenter → avslutning → fullstendig kildeliste", "Parafraser teksten → oversett begrepene → gjenta poenget → oppsummer kort", "Tese → antitese → syntese → endelig konklusjon i hegeliansk dialektikk"],
      explanation: "Firetrinns-RED: (1) plasser tenker+spørsmål; (2) gjengi med tekstens kjernebegrep; (3) rekonstruer premiss→konklusjon; (4) illustrer med tekstens eget eksempel.",
    },
    {
      question: "Hva er raushetsterskelen i HYB?",
      options: ["Sensor bruker skjønn og raushet i drøftingsdelen — moderat terskel i et innføringsemne", "At redegjørelsesdelen ikke teller så lenge drøftingen er tilstrekkelig fyldig", "At bare svært lange og detaljerte drøftingsdeler kan bestå på innføringsnivå", "At all selvstendig drøfting er forbudt fordi emnet kun tester gjengivelse"],
      explanation: "HYB er et innføringsemne; en fornuftig, forbeholden og forankret drøfting holder langt. Men ren gjengivelse (feil #8) holder ikke.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor privat veldedighet?",
      options: ["Rettigheten kan ikke trekkes tilbake fritt, så dominansen fjernes", "Fordi rettigheter er enklere for staten å administrere og kontrollere", "Fordi privat veldedighet er ulovlig og strider mot republikansk frihetsideal", "Fordi staten alltid råder over mer ressurser enn private givere kan mobilisere"],
      explanation: "Privat veldedighet gjør mottakeren avhengig av giverens ukontrollerte vilje (dominans); velferd som rettighet står under kontrollerbar rett, ikke luner.",
    },
  ],
};

export default quizData_stv1100;
