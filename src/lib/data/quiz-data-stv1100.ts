import type { QuizQuestion } from './quiz-data';

const quizData_stv1100: Record<string, QuizQuestion[]> = {
  'stv1100-0-1': [
    {
      question: "Hvor lang er den skriftlige skoleeksamenen i STV1100, og hvilket hjelpemiddel er tillatt?",
      options: ["4 timer, og eneste hjelpemiddel er en forhåndskontrollert ordbok", "6 timer, med alle trykte hjelpemidler tillatt", "3 timer, uten noen hjelpemidler", "4 timer, med pensumboka som eneste hjelpemiddel"],
      explanation: "STV1100 har en 4-timers skriftlig skoleeksamen (Inspera i nyere år). Eneste tillatte hjelpemiddel er en forhåndskontrollert ordbok — ingen pensumbøker, notater eller nett.",
    },
    {
      question: "Hvordan settes karakteren i STV1100?",
      options: ["Ved helhetlig skjønn (A–F) uten tallfestede poenggrenser", "Ved å summere poeng med faste grenser for hver karakter", "Utelukkende ut fra hvor mange sider besvarelsen fyller", "Bestått/ikke bestått uten bokstavkarakter"],
      explanation: "Det finnes ingen tallfestede poenggrenser. Karakteren A–F settes ved helhetsvurdering, der svakhet ett sted kan veies opp av styrke et annet i fler-dels-sett.",
    },
    {
      question: "Hvilke to temaer er de to søylene som bærer nesten hvert eksamenssett i STV1100?",
      options: ["Rawls (rettferdighet) og frihet (Berlin vs. Pettit)", "Platon og Machiavelli", "Locke og Walzer", "Mill og Nussbaum"],
      explanation: "Rawls testes i 6 av 8 sett og frihetsdebatten Berlin vs. Pettit i 5 av 8. Behersker man disse to perfekt, dekker man ryggraden i faget.",
    },
    {
      question: "Hva betyr mantraet «treff det sentrale poenget»?",
      options: ["Hvert tema har ett kjernepoeng som må med; et kort korrekt kjernesvar kan gi A", "Man skal alltid skrive så langt og bredt som mulig", "Man bør begynne hver oppgave med en grundig innledning", "Man skal fokusere på litteraturhenvisninger og kilder"],
      explanation: "Et kort, korrekt svar som treffer kjernepoenget (f.eks. Rawls uten uvitenhetssløret faller til svak) kan gi A, mens et langt svar som mister poenget faller til svak. Presisjon over bredde.",
    },
    {
      question: "En oppgave sier: «Gjør rede for Berlins skille mellom negativ og positiv frihet.» Hvilken sjanger er dette?",
      options: ["Redegjørelse (RED)", "Sitattolkning (SIT)", "Sammenligning (SAM)", "Anvendelse (ANV)"],
      explanation: "«Gjør rede for X» er fagets grunnform — redegjørelse (RED): presis, trinnvis rekonstruksjon av en tenkers argument.",
    },
    {
      question: "En oppgave sier: «Forklar hva Rawls mener med utdraget [A].» Hvilken sjanger er dette?",
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
      options: ["Redegjøre for begge posisjoner OG trekke fram eksplisitte likheter og forskjeller", "Gjengi kun den ene tenkeren grundig", "Tolke ett enkelt sitatutdrag løsrevet", "Skrive en lang innledning om begge tenkerne"],
      explanation: "I SAM er det ikke nok å gjengi begge — du må sammenligne dem langs eksplisitte dimensjoner med både likheter og forskjeller. Her måles selvstendighet.",
    },
    {
      question: "Hva kjennetegner redegjør-og-drøft-hybriden (HYB), den økende sjangeren fra 2023?",
      options: ["Solid redegjørelse først, deretter en kort, forbeholden selvstendig vurdering", "Kun en fri, personlig mening uten redegjørelse", "Ren gjengivelse av teorien to ganger", "Utelukkende sitattolkning av [A]–[E]"],
      explanation: "HYB krever solid redegjørelse etterfulgt av en kort, forbeholden vurdering — gjerne med en innvending forankret i pensum. Sensor bruker skjønn og raushet, siden dette er et innføringsemne.",
    },
    {
      question: "Hvorfor er det direkte eksamensrelevant å trene på gamle oppgavesett i STV1100?",
      options: ["Fordi oppgaver gjenbrukes nesten uendret (Berlin-vs.-Pettit, Rawls-sitatoppgaven)", "Fordi de gamle settene alltid gir fasitsvarene på årets eksamen", "Fordi eksamensformen endres helt hvert år", "Fordi det ikke finnes noe annet pensum"],
      explanation: "Arkivet viser dokumentert oppgavegjenbruk: frihetsoppgaven og Rawls-sitatoppgaven går nesten uendret igjen, så trening på gamle sett er direkte relevant.",
    },
    {
      question: "Hva er den viktigste feilen ved å la én av flere obligatoriske deler stå blank (feil #6)?",
      options: ["En ubesvart del stenger for karakteren A", "Det gir automatisk stryk uansett resten", "Det er alltid best å perfeksjonere én del framfor å dekke alle", "Sensor teller da sidene i den besvarte delen"],
      explanation: "En ubesvart del stenger for A (men ikke nødvendigvis for bestått). Det er tryggere å rekke over alle påkrevde deler, om enn kortere, enn å la én stå blank.",
    },
    {
      question: "Hvorfor frarådes unødig innledning og avslutning i STV1100-besvarelser (feil #3)?",
      options: ["Oppvarming er bortkastet tid i et 4-timers essayfag; man skal gå rett på sak", "Sensor trekker for korrekt rettskriving i innledninger", "Innledninger er forbudt ved lov på universitetseksamen", "Avslutninger teller negativt på karakteren automatisk"],
      explanation: "Mantraet «gå rett på sak» betyr at ingen innledning, avslutning eller litteraturhenvisninger kreves. Tid brukt på oppvarming er tid tapt på presist innhold.",
    },
    {
      question: "Hva menes med at «redegjørelse er kjernen, drøfting er bonusen» i STV1100?",
      options: ["Presis argumentrekonstruksjon er primærferdigheten; drøfting/sammenligning er en sekundær, økende ferdighet", "Man skal aldri drøfte, kun gjengi", "Drøfting vektes alltid tyngst på eksamen", "Redegjørelse og drøfting teller nøyaktig like mye i alle sett"],
      explanation: "Faget er tradisjonelt formulert som redegjørelsesspørsmål. Derfor er presis argumentrekonstruksjon primærferdigheten, mens drøfting/sammenligning er en sekundær, økende (2023→) ferdighet — det styrer tidsbruken.",
    },
    {
      question: "To kandidater svarer på «gjør rede for kjernen i Pettits frihetsbegrep». Kandidat A skriver tre brede sider om antikken, Berlin og Rousseau før hun så vidt nevner Pettit; kandidat B skriver en halv presis side som treffer ikke-dominans-poenget. Hvem gjør det best?",
      options: ["Kandidat B, fordi hun treffer det sentrale poenget presist og går rett på sak", "Kandidat A, fordi et lengre svar alltid gir bedre karakter", "Kandidat A, fordi bredden viser mer kunnskap", "Begge like godt, siden sensor teller ord"],
      explanation: "Kandidat B treffer det sentrale poenget (ikke-dominans) og går rett på sak. Kandidat A mister poenget under lavrelevant bredde (feil #2 og #3). Sensor teller ikke ord; presisjon avgjør.",
    },
  ],
  'stv1100-0-2': [
    {
      question: "Hva er de fire trinnene i firetrinns-redegjørelsen (RED), i riktig rekkefølge?",
      options: ["Plasser → gjengi posisjonen → rekonstruer trinnvis → illustrer med tekstens eksempel", "Innled → oppsummer → konkluder → henvis til litteratur", "Parafraser → identifiser funksjon → plasser i helheten → bruk begrepene", "Sammenlign → drøft → anvend → vurder"],
      explanation: "RED-oppskriften er: (1) plasser tenker og spørsmål, (2) gjengi posisjonen med kjernebegreper, (3) rekonstruer argumentet trinnvis, (4) illustrer med tekstens eget eksempel.",
    },
    {
      question: "Hva betyr mantraet «treff strukturen, ikke bare konklusjonen» i en redegjørelse?",
      options: ["Vis premissrekken som leder til konklusjonen, ikke bare selve konklusjonen", "Skriv en fyldig innledning før du konkluderer", "Nevn konklusjonen så mange ganger som mulig", "Fokuser bare på tenkerens sluttsyn og hopp over begrunnelsen"],
      explanation: "Et svakt svar gjengir bare hva tenkeren konkluderer. Sensor vil se hvorfor — den trinnvise premissrekken (argumentets indre logikk) som leder dit.",
    },
    {
      question: "Hva er de fire trinnene i firetrinns-sitattolkningen (SIT) for hvert utdrag?",
      options: ["Parafraser → identifiser funksjon → plasser i helheten → bruk begrepene presist", "Oversett → oppsummer → gjenta → avslutt", "Plasser → gjengi → rekonstruer → illustrer", "Les → memorer → siter ordrett → kommenter"],
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
      options: ["Illustrasjon", "Premiss", "Intuisjon", "Konklusjon"],
      explanation: "En illustrasjon anskueliggjør poenget, men vekten ligger i premissene den viser. En vanlig feil er å behandle illustrasjonen som om den var selve argumentet.",
    },
    {
      question: "Hva krever kalibreringsregelen «behandle alle utdragene» i en [A]–[E]-oppgave?",
      options: ["Hvert utdrag må tolkes og plasseres i argumentets helhet", "Man velger det beste utdraget og hopper over resten", "Man oversetter alle utdragene ordrett uten kommentar", "Man behandler kun de engelske utdragene"],
      explanation: "Å konsentrere seg om ett utdrag og hoppe over resten (feil #4) svekker svaret vesentlig. Alle utdrag må behandles, om enn kortere per utdrag.",
    },
    {
      question: "Hva kjennetegner feil #5 i sitattolkning?",
      options: ["Å bare parafrasere utdraget løsrevet uten å angi funksjon og plassere det i argumentet", "Å bruke for mange fagbegreper", "Å behandle for mange utdrag samtidig", "Å skrive for kort per utdrag"],
      explanation: "Feil #5 er å oversette utdraget linje for linje uten å plassere det i det overordnede argumentet. Da mangler trinn 2 (funksjon) og trinn 3 (plassering) av SIT-oppskriften.",
    },
    {
      question: "Hva kjennetegner et A-svar i redegjørelse/sitattolkning ved helhetsvurdering?",
      options: ["Det sentrale poenget truffet presist PLUSS minst ett subtilt ekstrapoeng og/eller alle utdrag plassert", "Det lengste svaret som dekker flest tenkere", "Et svar med grundig innledning og avslutning", "Et svar som gjengir konklusjonen uten begrunnelse"],
      explanation: "A krever at kjernepoenget treffes presist og at det tilføres et subtilt ekstrapoeng (Akse 3) og/eller (i SIT) at alle utdrag plasseres. Lengde er irrelevant.",
    },
    {
      question: "Hva skiller et C-svar fra et A-svar i disse sjangrene?",
      options: ["C har det sentrale poenget på plass, men er korrekt og flatt — det mangler det subtile ekstra som løfter til A", "C mister det sentrale poenget helt", "C er alltid mye lengre enn et A-svar", "C inneholder faktafeil om tenkeren"],
      explanation: "På C-nivå er poenget riktig, men uten trinnvis dybde eller subtilitet. A krever i tillegg minst ett subtilt ekstrapoeng og/eller full plassering av alle utdrag.",
    },
    {
      question: "Hva kjennetegner et E-svar?",
      options: ["Det sentrale poenget er mistet eller bare antydet, med upresise begreper og utenomsnakk", "Det sentrale poenget er presist truffet med et subtilt tillegg", "Det er korrekt men flatt", "Det behandler alle utdrag grundig"],
      explanation: "På E-nivå glipper kjernepoenget, begrepene er upresise (feil #7) og svaret brer seg ut i utenomsnakk (feil #1, #2). I SIT hoppes utdrag over (#4) eller parafraseres løsrevet (#5).",
    },
    {
      question: "Hva er «det subtile ekstra poenget» (Akse 3)?",
      options: ["En nyanse som løfter et korrekt svar til meget godt — det veiledningene flagger som «veldig bra»", "En obligatorisk innledning som må stå først", "Antall sider utover minstekravet", "En litteraturliste bakerst"],
      explanation: "Det subtile ekstra er A-markøren: f.eks. at det er muligheten (ikke handlingen) som er poenget, eller at ulike deler av en teori er ulikt godt begrunnet. Legg det til — men aldri på bekostning av det sentrale poenget.",
    },
    {
      question: "Omtrent hvor mye tid bør du sette av per utdrag i en [A]–[E]-sitattolkningsoppgave?",
      options: ["Cirka 8–12 minutter per utdrag, slik at alle blir behandlet", "Cirka 40–60 minutter på det viktigste utdraget og null på resten", "Ett minutt per utdrag for å rekke over andre oppgaver", "All tiden på det første utdraget"],
      explanation: "Regn ~8–12 min per utdrag og fordel tiden slik at alle behandles — bedre å plassere alle kort enn å utbrodere ett og hoppe over resten.",
    },
    {
      question: "En kandidat skriver om Rawls: «Han mener de dårligst stilte skal prioriteres.» — og stopper der. Hva er hovedmangelen?",
      options: ["Svaret gir bare konklusjonen; det treffer ikke strukturen (premissrekken bak)", "Svaret er for langt og bredt", "Svaret har for mange sitatutdrag", "Svaret bruker for presise fagbegreper"],
      explanation: "Å gjengi bare konklusjonen uten den trinnvise begrunnelsen (utgangsposisjon → uvitenhetsslør → maximin → forskjellsprinsipp) bryter med «treff strukturen, ikke bare konklusjonen».",
    },
    {
      question: "Hvorfor bør du IKKE innlede en redegjørelse med «Frihet har opptatt mennesker siden antikken …»?",
      options: ["Det er unødig innledning (feil #3); man skal gå rett på tenkeren (trinn 1)", "Det er faktisk feil at frihet har opptatt mennesker", "Innledninger er forbudt på universitetseksamen", "Sensor trekker for rettskriving i innledninger"],
      explanation: "Oppvarming er bortkastet tid i et 4-timers essayfag (feil #3). Trinn 1 i RED er å plassere tenkeren og spørsmålet i én setning — gå rett på sak.",
    },
    {
      question: "I en SIT-oppgave inneholder et utdrag setningen «Tenk på tjeneren i det store huset som alltid er prisgitt herrens humør.» Hvilken funksjon er dette mest sannsynlig, og hva må du gjøre med det?",
      options: ["Illustrasjon — du må plassere det i argumentets helhet, ikke bare oversette det", "Premiss — du kan nøye deg med å parafrasere det ordrett", "Intuisjon — det kan hoppes over uten tap", "Konklusjon — det trenger ingen tolkning"],
      explanation: "«Tenk på …» signaliserer en illustrasjon som anskueliggjør poenget. Den må plasseres i helheten (den viser at materiell velstand ikke opphever ufrihet), ikke bare oversettes løsrevet (feil #5).",
    },
  ],
  'stv1100-0-3': [
    {
      question: "Hva er de sentrale trinnene i en sammenligning (SAM)?",
      options: ["Posisjon A → posisjon B → 2–4 eksplisitte dimensjoner (likheter OG forskjeller) → kort vurdering", "Gjengi kun den ene tenkeren grundig og avslutt der", "Parafraser → identifiser funksjon → plasser i helheten → bruk begrepene", "Innled → oppsummer begge → konkluder med litteraturhenvisning"],
      explanation: "SAM krever begge posisjoner presist redegjort, deretter 2–4 eksplisitte sammenligningsdimensjoner med både likheter og forskjeller, og gjerne en kort forbeholden vurdering.",
    },
    {
      question: "Hva er en sammenligningsdimensjon?",
      options: ["En eksplisitt akse begge posisjoner måles langs, f.eks. «hva teller som ufrihet?»", "En innledning som presenterer begge tenkerne", "Et sitatutdrag merket [A]", "Antall sider man bruker på hver tenker"],
      explanation: "En dimensjon er en eksplisitt akse der de to posisjonene måles mot hverandre. Egne, treffende dimensjoner er selvstendighet (Akse 4) og A-markøren i SAM.",
    },
    {
      question: "En kandidat skriver en hel side om Tenker F og en hel side om Tenker D, og stopper der. Hvilken feil er dette?",
      options: ["#8 — ren gjengivelse der oppgaven ber om sammenligning (to referater er ikke en SAM)", "#4 — å hoppe over sitatutdrag", "#9 — å overse anvendelses-vrien", "#3 — unødig innledning"],
      explanation: "To atskilte redegjørelser ved siden av hverandre er ikke en sammenligning (feil #8). Det mangler eksplisitte dimensjoner som setter posisjonene i forhold til hverandre.",
    },
    {
      question: "Hva kjennetegner en ensidig sammenligning som svekker svaret?",
      options: ["Den rommer bare forskjeller (eller bare likheter), eller behandler bare den ene tenkeren grundig", "Den bruker for mange eksplisitte dimensjoner", "Den gir begge posisjoner like presis behandling", "Den lander med en forbeholden vurdering"],
      explanation: "En fullstendig SAM veier både likheter OG forskjeller langs hver dimensjon og gir begge posisjoner like presis behandling. Ensidighet er en typisk C-svakhet.",
    },
    {
      question: "Hva er de sentrale trinnene i en anvendelse (ANV)?",
      options: ["Hent det relevante begrepet → legg situasjonen på begrepet → trekk konklusjonen X ville trukket", "Gjengi hele teorien til X generelt og la leseren koble til saken", "Sammenlign X med en annen tenker langs dimensjoner", "Parafraser situasjonen ordrett uten å bruke teori"],
      explanation: "ANV krever at du henter fram det begrepet som biter på saken, legger situasjonen på begrepet, og trekker konklusjonen tenkeren ville trukket — teorien må brukes, ikke bare gjengis.",
    },
    {
      question: "Hva sier ANV-testen «bruk teorien, ikke bare gjengi den»?",
      options: ["Spør om en leser som ikke kjenner saken ville skjønt hva X mener om nettopp den; hvis du bare gjenga teorien, er svaret nei", "Spør om du har brukt nok fagbegreper", "Spør om teksten er lang nok", "Spør om du har med en innledning"],
      explanation: "En god ANV nevner situasjonens detaljer og viser hvordan begrepet griper inn i akkurat dem. Å gjengi teorien generelt uten å anvende den er feil #9.",
    },
    {
      question: "Hvilken feil begår en kandidat som på «hva ville Pettit ment om den liberale despoten?» bare gjengir Pettits ikke-dominans-teori generelt?",
      options: ["#9 — overse anvendelses-vrien (teorien er ikke brukt på despoten)", "#8 — ren gjengivelse i en sammenligningsoppgave", "#4 — hoppe over sitatutdrag", "#1 — miste det sentrale poenget om struktur"],
      explanation: "Feil #9 er å gjengi teorien generelt uten å bruke den på den konkrete situasjonen (despoten). ANV krever at begrepet legges på tilfellet.",
    },
    {
      question: "Hvilke er de klassiske anvendelsessituasjonene i STV1100-arkivet?",
      options: ["Den liberale despoten, privat veldedighet og Foster Wallace-sitatet", "Uvitenhetssløret, maximin og forskjellsprinsippet", "Barskap-nøkkelen, Odyssevs og refleksiv likevekt", "Machiavelli, Platon og Nussbaum"],
      explanation: "Den liberale despoten (→ Pettits dominanspoeng), privat veldedighet (→ velferdsrett vs. veldedighet) og Foster Wallace-sitatet (→ positiv frihet) er de gjennomgående ANV-casene.",
    },
    {
      question: "Hva kjennetegner drøftingshybriden (HYB), sjangeren som vokser fra 2023?",
      options: ["Solid redegjørelse først, deretter én–to pensumforankrede innvendinger og en kort, forbeholden vurdering", "Kun en fri personlig mening uten redegjørelse", "To referater satt ved siden av hverandre", "Ordrett gjengivelse av alle sitatutdrag"],
      explanation: "HYB krever solid redegjørelse (vektes tyngst), deretter innvendinger helst forankret i pensum, og en kort forbeholden vurdering — ikke et nytt referat.",
    },
    {
      question: "Hva er en «forbeholden vurdering» i en drøftingsdel?",
      options: ["En vurdering som veier for og mot uten å felle en skråsikker dom", "En kategorisk konklusjon om at tenkeren tar feil", "En gjentakelse av redegjørelsen", "En liste over litteraturhenvisninger"],
      explanation: "En forbeholden vurdering veier styrker mot svakheter og lander forsiktig. Forbehold er et tegn på modenhet, ikke usikkerhet.",
    },
    {
      question: "Hvorfor løfter en pensumforankret innvending en drøftingshybrid?",
      options: ["Den er hentet fra debatten (f.eks. Brison mot Mill, feministisk kritikk mot Rawls) og viser at du kjenner mer enn selve posisjonen", "Den er oppfunnet på stedet og viser kreativitet", "Den erstatter behovet for en redegjørelse", "Den gjør svaret lengre uansett innhold"],
      explanation: "En innvending forankret i pensum/forelesning (Brison mot Mill; den feministiske kritikken av Rawls; syke/svake-innvendingen) viser at du kjenner debatten, ikke bare posisjonen.",
    },
    {
      question: "Hva innebærer «raushetsterskelen» i vurderingen av drøftingsdelen?",
      options: ["STV1100 er et innføringsemne, så sensor bruker skjønn og moderat terskel — en forsvarlig, forankret refleksjon holder", "Man må levere original filosofi for å bestå", "Drøftingsdelen teller alltid mest av alt", "Enhver innvending gir automatisk toppkarakter"],
      explanation: "Som innføringsemne krever STV1100 ikke original filosofi i drøftingsdelen. En gjennomtenkt, forankret og forbeholden vurdering er tilstrekkelig. Der en oppgave er erklært vanskelig, senkes forventningene ytterligere.",
    },
    {
      question: "Hva menes med kalibreringsregel 1, «redegjørelse er kjernen, drøfting er bonusen», anvendt på SAM og HYB?",
      options: ["Den presise redegjørelsen vektes tyngst; sammenlignings-/drøftingsdelen løfter til A men bærer aldri et svar alene", "Man skal droppe redegjørelsen og gå rett på drøfting", "Drøfting teller alltid mer enn redegjørelse", "Redegjørelse og drøfting teller nøyaktig like mye i alle sett"],
      explanation: "Selv i SAM/HYB er den presise redegjørelsen tyngst. Sikre begge redegjørelsene (SAM) eller hovedredegjørelsen (HYB) før du bruker tid på vurderingen.",
    },
    {
      question: "Hva er hovedforskjellen mellom drøfting (HYB) og sammenligning (SAM) som ferdigheter?",
      options: ["SAM setter to posisjoner mot hverandre langs dimensjoner; HYB vurderer én posisjons holdbarhet ved å veie innvendinger", "De er identiske og kan brukes om hverandre", "SAM krever sitatutdrag, HYB krever ingen redegjørelse", "HYB er alltid enklere og krever ingen selvstendighet"],
      explanation: "SAM krever egne dimensjoner mellom to tenkere (Akse 4); HYB krever en forbeholden, forankret vurdering av én posisjon. Å blande dem betyr å ikke treffe det oppgaven ber om.",
    },
    {
      question: "Hva er A-markøren (Akse 4) i sammenlignings- og drøftingsdelen?",
      options: ["Selvstendighet: egne, treffende sammenligningsdimensjoner eller en forbeholden, forankret vurdering", "Lengden på besvarelsen", "Antall sitatutdrag man har med", "En grundig innledning og avslutning"],
      explanation: "Selvstendighet (Akse 4) — å se en sammenheng eller spenning selv, framfor å referere — skiller A fra C i drøftings-/sammenligningsdelen.",
    },
    {
      question: "En kandidat avslutter en «gjør rede for X og drøft kort»-oppgave med å gjenta Xs posisjon en gang til. Hva er feilen?",
      options: ["#8 — nytt referat i stedet for en reell vurdering", "#9 — å overse anvendelses-vrien", "#4 — å hoppe over sitatutdrag", "#7 — upresise begreper"],
      explanation: "Å gjenta redegjørelsen i drøftingsdelen er feil #8 — det er ikke en vurdering. HYB krever at du veier innvendinger og lander forbeholdent, ikke at du refererer på nytt.",
    },
  ],
  'stv1100-1-1': [
    {
      question: "Hva er negativ frihet hos Berlin?",
      options: ["Fravær av forsettlig innblanding fra andre", "Fravær av enhver hindring, også naturlige", "Evnen til å realisere sitt egentlige selv", "Statens plikt til å sikre borgernes velferd"],
      explanation: "Negativ frihet = fravær av hindring *påført av andre mennesker* («hvor mange dører står åpne») — ofte skjerpet (Hayek-nært) til *forsettlig* innblanding. «Fravær av enhver hindring» mister grunnskillet andres hindring vs. manglende egen evne; selvrealisering er positiv frihet.",
    },
    {
      question: "Hvilket av disse ordene hører til Berlins *negative* frihetsbegrep (og ikke til det positive)?",
      options: ["Forsettlig", "Egentlig", "Rasjonelt", "Politisk"],
      explanation: "«Forsettlig» hører til den negative siden — en vanlig (Hayek-nær) skjerping av grunnskillet «hindring fra andre vs. manglende egen evne». «Egentlig»/«rasjonelt» hører til positiv frihet.",
    },
    {
      question: "Er fattigdom i seg selv ufrihet i Berlins negative forstand?",
      options: ["Nei — i utgangspunktet manglende evne, ikke en hindring påført av andre", "Ja — enhver hindring er ufrihet", "Ja — fordi den skyldes staten", "Bare hvis den er selvforskyldt"],
      explanation: "Fattigdom er i utgangspunktet manglende evne, ikke en hindring fra en annen vilje. Berlin kaller den et onde, men åpner selv for at den *kan* være ufrihet dersom den skyldes menneskeskapte ordninger andre opprettholder — å kalle enhver manglende evne «ufrihet» tømmer likevel begrepet.",
    },
    {
      question: "Hva er positiv frihet hos Berlin?",
      options: ["Selvstyre/selvrealisering — å være herre over seg selv", "Fravær av forsettlig innblanding fra andre", "Retten til å eie eiendom", "Fravær av naturlige hindringer"],
      explanation: "Positiv frihet spør «hvem styrer meg?» — selvstyre. Fravær av innblanding er negativ frihet.",
    },
    {
      question: "Hvilket skille gjør positiv frihet farlig ifølge Berlin?",
      options: ["Skillet mellom det empiriske og det «egentlige» selv", "Skillet mellom stat og individ", "Skillet mellom lov og moral", "Skillet mellom negativ og positiv frihet"],
      explanation: "Deler man personen i et empirisk og et «egentlig» selv, kan andre påberope seg å kjenne ditt sanne jeg og tvinge deg «for ditt eget beste».",
    },
    {
      question: "Hvorfor advarer Berlin mot positiv frihet?",
      options: ["Fordi den kan brukes til å omdøpe tvang til frigjøring", "Fordi den er logisk selvmotsigende", "Fordi den er det samme som negativ frihet", "Fordi den nekter folk å eie eiendom"],
      explanation: "Når frihet = å realisere det «egentlige» selv, kan tvang fremstilles som frigjøring («vi tvinger deg dit ditt sanne jeg vil»).",
    },
    {
      question: "Hva er «den liberale despoten» et eksempel på?",
      options: ["At negativ frihet kan finnes uten selvstyre (positiv frihet)", "At positiv frihet alltid følger negativ frihet", "At all frihet egentlig er positiv", "At tvang alltid gir ufrihet"],
      explanation: "Despoten gir personlig frihet uten selvstyre — negativ og positiv frihet er logisk uavhengige.",
    },
    {
      question: "Er borgerne under en liberal despot frie i Berlins forstand?",
      options: ["Negativt kanskje ja (hvis han ikke blander seg inn), men positivt nei", "Ja, fullt ut frie på begge måter", "Nei, på ingen måte frie", "Bare positivt frie, ikke negativt"],
      explanation: "Blander despoten seg faktisk ikke inn, er borgerne negativt ganske frie, men de har intet selvstyre — positivt ufrie.",
    },
    {
      question: "Hva er tvang i Berlins negative forstand?",
      options: ["Bevisst innsnevring av handlingsrommet, utført av andre", "Enhver begrensning av hva du kan gjøre", "Manglende evne til å nå et mål", "Egne indre impulser du ikke behersker"],
      explanation: "Tvang forutsetter en *annen* aktør som med vilje stenger en dør. Manglende evne og indre impulser er ikke tvang negativt sett.",
    },
    {
      question: "Hvilken av disse innskrenker negativ frihet?",
      options: ["Et lovforbud vedtatt av myndighetene", "At du ikke kan puste under vann", "At du er for fattig til å reise", "At du mangler talent for musikk"],
      explanation: "Forbudet er en hindring påført av andre (staten) — bevisst, altså også forsettlig. De øvrige er naturlige grenser eller manglende evne.",
    },
    {
      question: "Hva menes med at negativ frihet handler om «hvor mange dører som står åpne»?",
      options: ["Friheten måles ved handlingsmuligheter ingen andre bevisst har stengt", "Friheten måles ved hva du faktisk klarer å gjøre", "Friheten måles ved graden av selvstyre", "Friheten måles ved hvor mye eiendom du har"],
      explanation: "Bildet fanger fravær av hindring påført av andre, ikke faktisk evne eller selvstyre.",
    },
    {
      question: "Hva er det subtile ekstra poenget som løfter et Berlin-svar til A?",
      options: ["At Berlin problematiserer positiv frihet, ikke bare beskriver den", "At Berlin avviser negativ frihet", "At Berlin mener all frihet er positiv", "At Berlin likestiller frihet med lykke"],
      explanation: "A-markøren er å vise at Berlin ser en *fare* i positiv frihet (misbruk til tvang), ikke bare gjengi definisjonen.",
    },
    {
      question: "Avviser Berlin positiv frihet fullstendig?",
      options: ["Nei — han vil holde den atskilt fra negativ frihet fordi sammenblanding er farlig", "Ja — han mener den er meningsløs", "Ja — den er identisk med tvang", "Nei — han foretrekker den fremfor negativ frihet"],
      explanation: "Berlin anerkjenner at selvstyre er et ekte gode; han vil bare holde begrepene rene fordi sammenblandingen er politisk farlig.",
    },
    {
      question: "Hva er «det egentlige selv» i positiv frihet?",
      options: ["Et påstått høyere, rasjonelt jeg som «vet bedre» enn de faktiske ønskene", "Personens faktiske, foreliggende ønsker", "Statens definisjon av det gode liv", "Fraværet av ytre innblanding"],
      explanation: "Det «egentlige»/sanne selv står mot det empiriske selv (faktiske ønsker) — og er farekilden i positiv frihet.",
    },
    {
      question: "Hvilken feil begår kandidaten som definerer negativ frihet som «fravær av enhver hindring»?",
      options: ["Feil #1/#7 — mister grunnskillet «andres hindring vs. manglende egen evne»", "Ingen feil — det er en korrekt definisjon", "Feil #3 — unødig innledning", "Feil #6 — besvarer bare halve settet"],
      explanation: "«Fravær av enhver hindring» viser bort grunnskillet: da teller også naturlige grenser og manglende evne som ufrihet — kjernefeilen.",
    },
    {
      question: "En arbeidsgiver truer med oppsigelse hvis du stemmer «feil». Er dette negativ ufrihet?",
      options: ["Ja — trusselen er bevisst hindring fra en annen aktør", "Nei — det er bare en indre bekymring", "Nei — ingen fysisk hindring reises", "Bare hvis du faktisk blir sagt opp"],
      explanation: "Trusselen er en hindring påført av en annen aktør — og attpåtil en bevisst, forsettlig en; den innsnevrer handlingsrommet uansett om den realiseres.",
    },
    {
      question: "Hvilket spørsmål stiller positiv frihet, i motsetning til negativ?",
      options: ["«Hvem styrer meg?»", "«Hvor mange dører står åpne?»", "«Hvor mye eiendom har jeg?»", "«Hvor rik er staten?»"],
      explanation: "Positiv frihet spør etter selvstyre («hvem styrer»); negativ frihet spør etter fravær av hindring («hvor mange dører»).",
    },
    {
      question: "Hva peker den liberale despoten frem mot i frihetsdelen?",
      options: ["Pettits begrep om dominans/ikke-dominans (kap. 1.2)", "Rawls' uvitenhetsslør", "Lockes samfunnskontrakt", "Machiavellis fyrste"],
      explanation: "For Pettit er borgerne likevel ufrie fordi de domineres — despoten *kan* gripe inn. Det er broen til kap. 1.2.",
    },
    {
      question: "Hva er verdipluralisme hos Berlin?",
      options: ["At det finnes flere ekte, uforenlige goder", "At alle verdier egentlig er én", "At bare frihet er et ekte gode", "At verdier bestemmes av staten"],
      explanation: "Verdipluralismen er bakgrunnen for Berlins skepsis mot at én «sannhet» om det gode liv skal tvinges på alle.",
    },
    {
      question: "Hvilken funksjon har utdrag [A] (om negativ frihet) i Berlins argument?",
      options: ["Definisjon/premiss — det fastlegger hva negativ frihet er", "Illustrasjon av positiv frihet", "Motargument mot Berlin", "En historisk digresjon uten funksjon"],
      explanation: "[A] definerer negativ frihet (fravær av hindring påført av andre) og bærer det sentrale poenget — grunnmuren i den negative delen.",
    },
    {
      question: "Hvilken funksjon har utdrag [B] (empirisk vs. egentlig selv)?",
      options: ["Kritisk premiss — det avdekker faren i positiv frihet", "Nøytral definisjon av positiv frihet", "Illustrasjon av negativ frihet", "Berlins konklusjon om at frihet er umulig"],
      explanation: "[B] viser mekanismen bak «tvang til frihet» — det er broen fra beskrivelse til advarsel, ikke en nøytral definisjon.",
    },
    {
      question: "Hva er forskjellen på personlig og politisk frihet i despot-caset?",
      options: ["Personlig frihet (privatliv) kan finnes uten politisk frihet (medbestemmelse)", "De er alltid det samme", "Politisk frihet gir automatisk personlig frihet", "Personlig frihet krever alltid selvstyre"],
      explanation: "Despoten gir personlig frihet uten politisk frihet — de to følger ikke hverandre.",
    },
    {
      question: "Hvorfor sier Berlin at manglende evne ikke er ufrihet?",
      options: ["Fordi ufrihet krever en annen vilje som bevisst stenger en dør", "Fordi manglende evne alltid er selvforskyldt", "Fordi evne og frihet er det samme", "Fordi staten uansett har ansvaret"],
      explanation: "Uten en hindring påført av en annen aktør er det ingen negativ ufrihet — bare en begrensning i egen evne.",
    },
    {
      question: "Hva binder kapittel 1.1 sammen med 1.2 (drøftingsaksen)?",
      options: ["Spørsmålet om negativ frihet er nok, eller om ikke-dominans trengs", "Spørsmålet om hvem som eier staten", "Spørsmålet om skatt og velferd", "Spørsmålet om rettferdighet som rimelighet"],
      explanation: "Den liberale despoten reiser spørsmålet Pettit svarer på: rekker Berlins negative frihet? Det er broen til kap. 1.2.",
    },
  ],
  'stv1100-1-2': [
    {
      question: "Hva er frihet ifølge Pettit?",
      options: ["Ikke-dominans — fravær av muligheten for ukontrollert innblanding", "Fravær av all faktisk innblanding", "Selvrealisering av det egentlige selv", "Retten til privat eiendom"],
      explanation: "Pettit: frihet = ikke-dominans (fravær av vilkårlig makt over deg). Fravær av faktisk innblanding er Berlin; selvrealisering er positiv frihet (Berlin).",
    },
    {
      question: "Hva er dominans hos Pettit?",
      options: ["Evne til innblanding uten den andres kontroll", "Faktisk innblanding i noens valg", "Manglende ressurser til å bruke friheten", "Statlig lovgivning som sådan"],
      explanation: "Dominans = evne til ukontrollert innblanding; selve *muligheten* er ufrihet, uansett om innblandingen skjer.",
    },
    {
      question: "Er slaven med en snill herre som aldri gir ordre fri, ifølge Pettit?",
      options: ["Nei — han domineres fordi herren *kan* blande seg vilkårlig inn", "Ja — det er ingen faktisk innblanding", "Ja — han har full negativ frihet", "Bare hvis herren lover å aldri gripe inn"],
      explanation: "Dominans ligger i muligheten. Friheten avhenger av herrens vilje, og det er selve avhengigheten som er ufrihet.",
    },
    {
      question: "Hva er det sentrale poenget i Pettits frihetsbegrep?",
      options: ["At *muligheten* for ukontrollert innblanding er frihetsberøvelse", "At all innblanding er ufrihet", "At bare fysisk tvang er ufrihet", "At frihet er å realisere sitt sanne selv"],
      explanation: "Mister du «muligheten»/«ukontrollert», mister du Pettit og faller tilbake til Berlin.",
    },
    {
      question: "Hva kjennetegner kontrollert innblanding hos Pettit?",
      options: ["Den berørte har kontroll over den, så den reduserer ikke friheten", "Den utøves av staten og er derfor alltid ufrihet", "Den skjer uten den berørtes kontroll", "Den skyldes ressurssvikt"],
      explanation: "Kontrollert innblanding (Odyssevs, barskap-nøkkelen, lov under borgerkontroll) berøver ikke frihet — bare ukontrollert innblanding gjør det.",
    },
    {
      question: "Hva illustrerer Odyssevs ved masten?",
      options: ["At selvpålagt, kontrollert binding ikke berøver frihet", "At all binding er ufrihet", "At staten alltid dominerer borgerne", "At non-vitiation er verre enn dominans"],
      explanation: "Bindingen skjer på Odyssevs' egen forhåndsordre — den er kontrollert, ikke ukontrollert innblanding.",
    },
    {
      question: "Hva er non-vitiation hos Pettit?",
      options: ["Frihetsinnskrenkning ved ressurssvikt/manglende evne", "Evne til ukontrollert innblanding", "Å stå under en annens vilkårlige makt", "Fravær av faktisk innblanding"],
      explanation: "Non-vitiation er en *svakere* kategori enn dominans — mangel på midler til å utnytte friheten, ikke en annens herredømme.",
    },
    {
      question: "Hvordan rangerer Pettit komponentene?",
      options: ["Innblandings-/dominanskomponentene (a)/(b) veier tyngre enn ressurskomponentene (c)/(d)", "(c)/(d) veier tyngst", "Alle komponentene veier likt", "Bare (a) teller"],
      explanation: "Frihet fra dominans er mer grunnleggende enn ressurser til å bruke friheten — å få dette med er en A-markør.",
    },
    {
      question: "Hva ville Pettit sagt om den liberale despoten?",
      options: ["At borgerne er ufrie fordi de domineres — han *kan* gripe inn", "At de er fullt frie fordi han ikke griper inn", "At de har positiv men ikke negativ frihet", "At spørsmålet er meningsløst"],
      explanation: "For Pettit er borgerne dominert fordi despoten kan gripe vilkårlig inn — kontrasten til Berlins «negativt fri».",
    },
    {
      question: "Hva er forskjellen på Berlins og Pettits svar på despot-caset?",
      options: ["Berlin: negativt fri (ingen faktisk innblanding). Pettit: ufri (dominert)", "De gir identiske svar", "Berlin sier ufri, Pettit sier fri", "Begge sier borgerne er positivt frie"],
      explanation: "Despoten er testcaset der ikke-dominans skiller seg fra negativ frihet.",
    },
    {
      question: "Blander man ikke-dominans og non-vitiation, hvilken feil begår man?",
      options: ["Feil #7 — upresise begreper", "Feil #3 — unødig innledning", "Feil #6 — halve settet", "Ingen feil, de er synonymer"],
      explanation: "Dominans = å stå under vilkårlig makt; non-vitiation = ressurssvikt. De er ulike kategorier (#7).",
    },
    {
      question: "Hvilken frihetstradisjon henter Pettit fram?",
      options: ["Den republikanske (romersk-republikanske)", "Den liberale (Berlinske)", "Den positive selvrealiseringstradisjonen", "Den utilitaristiske"],
      explanation: "Republikansk frihet = å ikke være underlagt vilkårlig makt; kontrasterer den liberale tradisjonen (faktisk innblanding).",
    },
    {
      question: "Betyr Pettits teori at all statlig innblanding gjør borgerne ufrie?",
      options: ["Nei — innblanding under borgerkontroll er kontrollert og berøver ikke frihet", "Ja — enhver lov er dominans", "Ja — staten er per definisjon en despot", "Bare hvis staten er demokratisk"],
      explanation: "En lov borgerne har innflytelse over er kontrollert innblanding, ikke dominans. Slik unngår Pettit at staten alltid gjør ufri.",
    },
    {
      question: "Hva illustrerer barskap-nøkkelen?",
      options: ["At innblanding på egne, endrbare vilkår er kontrollert — ingen dominans", "At all binding er ufrihet", "At ressurssvikt er dominans", "At staten alltid dominerer"],
      explanation: "Å be en venn holde nøkkelen på vilkår man selv rår over og kan endre, er kontrollert innblanding.",
    },
    {
      question: "Hvorfor er ikke-dominans mer enn fravær av faktisk innblanding?",
      options: ["Fordi det også er fravær av avhengighet av en annens vilje", "Fordi det krever full økonomisk likhet", "Fordi det er det samme som positiv frihet", "Fordi det bare gjelder staten"],
      explanation: "A-markøren: ufriheten ligger i avhengigheten (muligheten for ukontrollert innblanding), ikke bare i faktisk innblanding.",
    },
    {
      question: "Hvilken feil begår kandidaten som definerer ikke-dominans som «fravær av innblanding»?",
      options: ["Feil #1 — mister kontroll-/dominanspoenget og faller tilbake til Berlin", "Feil #4 — hopper over utdrag", "Feil #8 — refererer i drøftingsdelen", "Ingen feil"],
      explanation: "Uten «mulig ukontrollert innblanding» mister man kjernen — det er nettopp dominansbegrepet som skiller Pettit fra Berlin.",
    },
    {
      question: "Hva er «vilkårlig makt» hos Pettit?",
      options: ["Makt som kan utøves uten den berørtes kontroll, etter innehaverens forgodtbefinnende", "Makt som alltid utøves urettferdig", "Enhver form for statlig makt", "Makt som mangler ressurser"],
      explanation: "Å stå under vilkårlig makt er ufrihet selv om makten aldri brukes — kjernen i dominans.",
    },
    {
      question: "Hva er funksjonen til utdrag [C] (om den liberale despoten) i Pettits argument?",
      options: ["Anvendelse/illustrasjon — det viser hvor ikke-dominans slår Berlin", "Nøytral definisjon av frihet", "Et motargument mot Pettit", "En historisk digresjon"],
      explanation: "[C] anvender dominansbegrepet på despoten og avslører grensen for Berlins negative frihet.",
    },
    {
      question: "«Deres frihet er en gave han kan ta tilbake» — hva uttrykker dette?",
      options: ["At avhengigheten av herskerens vilje selv er ufrihet", "At despoten er en god hersker", "At non-vitiation er dominans", "At faktisk innblanding er nødvendig for ufrihet"],
      explanation: "Bildet bærer det sentrale poenget: dominans er mulighet, ikke faktisk innblanding.",
    },
    {
      question: "Kan man dominere noen uten noensinne å utøve tvang?",
      options: ["Ja — evnen og muligheten til ukontrollert innblanding er nok", "Nei — dominans krever faktisk tvang", "Bare hvis offeret vet om det", "Bare i teorien, aldri i praksis"],
      explanation: "Dette er kjerneinnsikten Berlins negative frihet ikke registrerer: dominans uten faktisk tvang.",
    },
    {
      question: "Hva slags innblanding er den frihetsberøvende typen hos Pettit?",
      options: ["Ukontrollert innblanding", "All innblanding", "Kontrollert innblanding", "Bare fysisk innblanding"],
      explanation: "Bare *ukontrollert* innblanding (den den berørte ikke kontrollerer) berøver frihet.",
    },
    {
      question: "Hva gjelder ressurskomponentene (non-vitiation)?",
      options: ["Midler og evne til å *utnytte* friheten man har", "Muligheten for ukontrollert innblanding", "Statens plikt til å gripe inn", "Fravær av all lovgivning"],
      explanation: "Ressurskomponentene handler om å kunne bruke friheten; svikt her er non-vitiation, ikke dominans.",
    },
    {
      question: "Hva blir statens hovedoppgave hvis frihet er ikke-dominans (bro til 1.3)?",
      options: ["Å beskytte borgerne mot dominans, ikke bare mot faktisk innblanding", "Å maksimere borgernes lykke", "Å sikre absolutt eiendomsrett", "Å avstå fra all innblanding"],
      explanation: "Fordi frihet er ikke-dominans, må staten motvirke vilkårlig makt — noe som krever permanent borgerkontroll (kap. 1.3).",
    },
    {
      question: "Hva er kjernen i republikansk (vs. liberal) frihet?",
      options: ["Fravær av vilkårlig makt/dominans, ikke bare fravær av faktisk innblanding", "Fravær av all statlig virksomhet", "Retten til å realisere sitt sanne selv", "Størst mulig lykke for flest mulig"],
      explanation: "Republikansk (Pettit): ikke-dominans. Liberal (Berlin): fravær av faktisk innblanding. Samme ord, ulikt innhold.",
    },
    {
      question: "Hvilket subtilt poeng løfter et Pettit-svar til A i tillegg til dominans-kjernen?",
      options: ["At (a)/(b) veier tyngre enn (c)/(d), og at ikke-dominans er mer enn fravær av faktisk innblanding", "At Pettit avviser all frihet", "At non-vitiation er viktigere enn dominans", "At staten alltid dominerer"],
      explanation: "Rangeringen av komponentene og «mer enn faktisk innblanding» er A-markørene (H2022).",
    },
    {
      question: "Hva er Odyssevs' binding et eksempel på i motsetning til en herres vilkårlige binding?",
      options: ["Kontrollert innblanding (satt på egen forhåndsordre) vs. ukontrollert (dominans)", "Non-vitiation vs. dominans", "Negativ vs. positiv frihet", "Faktisk vs. mulig innblanding uten forskjell"],
      explanation: "Det er *kontrollen* (egen forhåndsordre) som gjør bindingen fri fra dominans; en herres vilkårlige binding ville vært ukontrollert.",
    },
  ],
  'stv1100-1-3': [
    {
      question: "Hva er statens hovedoppgave ifølge Pettit?",
      options: ["Å beskytte borgerne mot dominans, ikke bare mot faktisk innblanding", "Å avstå fra all innblanding i borgernes liv", "Å maksimere borgernes samlede lykke", "Å sikre absolutt privat eiendomsrett"],
      explanation: "Fordi frihet er ikke-dominans, skal staten aktivt fjerne kilder til dominans — mer aktivt enn den liberale staten.",
    },
    {
      question: "Hva er det sentrale poenget om borgerkontroll hos Pettit?",
      options: ["Kontroll er mer enn samtykke — bemyndigelsen må kunne trekkes tilbake", "Et opprinnelig samtykke er tilstrekkelig", "Borgerne bør ikke kontrollere staten", "Kontroll betyr det samme som veldedighet"],
      explanation: "Et engangs-ja hindrer ikke at makten blir vilkårlig; bare løpende, tilbaketrekkbar kontroll fjerner dominans.",
    },
    {
      question: "Hvorfor er ikke et opprinnelig kontraktssamtykke nok for Pettit?",
      options: ["Fordi makten senere kan bli vilkårlig uten løpende kontroll", "Fordi samtykke aldri kan gis gyldig", "Fordi staten alltid er illegitim", "Fordi borgerne ikke kan samtykke"],
      explanation: "Kontraktsmyndighet fjerner ikke dominans; permanent borgerkontroll gjør det.",
    },
    {
      question: "Hva menes med «bemyndigelse som kan trekkes tilbake»?",
      options: ["At borgernes fullmakt til makten må kunne kalles tilbake og utøves løpende", "At borgerne aldri kan gi makten fullmakt", "At makten er permanent når den er gitt", "At veldedighet kan trekkes tilbake"],
      explanation: "Dette er det subtile poenget: kontroll = vedvarende, tilbaketrekkbar bemyndigelse, ikke engangssamtykke.",
    },
    {
      question: "Hvorfor kan privat veldedighet gjøre mottakeren ufri ifølge Pettit?",
      options: ["Fordi mottakeren avhenger av giverens nåde, som kan trekkes tilbake", "Fordi veldedighet alltid er for liten", "Fordi staten forbyr veldedighet", "Fordi giveren blir dominert"],
      explanation: "Å leve på en annens nåde er dominans — samme struktur som slaven med snill herre.",
    },
    {
      question: "Hva fjerner dominansen i velferdsspørsmålet ifølge Pettit?",
      options: ["Å sikre det nødvendige som en rettighet man kan kreve", "Å øke den private veldedigheten", "Å avskaffe all statlig hjelp", "Å gjøre hjelpen frivillig"],
      explanation: "Velferd som *rett* (ikke tigg) fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hvordan skiller Pettits stat seg fra en minimal (liberal) stat?",
      options: ["Den griper mer aktivt inn for å fjerne privat dominans", "Den griper mindre inn enn nattvekterstaten", "Den er identisk med den liberale staten", "Den avskaffer alle rettigheter"],
      explanation: "Pettits stat beskytter den svake mot den sterke (arbeidsgivere, avhengighet) — mer aktivt enn den liberale.",
    },
    {
      question: "Hva er vilkårlig statsmakt (imperium)?",
      options: ["Statlig makt borgerne ikke kontrollerer, som selv blir en kilde til dominans", "Statlig makt under full borgerkontroll", "Privat makt over andre borgere", "Makt som aldri utøves"],
      explanation: "Staten som skal fjerne dominans kan selv dominere hvis den ikke er under borgerkontroll.",
    },
    {
      question: "En arbeidsgiver kan si opp ansatte vilkårlig, men gjør det sjelden. Domineres de ansatte?",
      options: ["Ja — de lever på arbeidsgiverens nåde; muligheten er dominans", "Nei — det skjer jo sjelden", "Nei — arbeidsforhold er alltid frivillige", "Bare hvis noen faktisk sies opp"],
      explanation: "Dominans ligger i muligheten for vilkårlig makt; stillingsvern fjerner den.",
    },
    {
      question: "Hvilken feil begår kandidaten som behandler Pettit-kontroll som rent samtykke?",
      options: ["Feil #1 — mister «kan trekkes tilbake»-poenget", "Feil #4 — hopper over utdrag", "Feil #2 — utenomsnakk", "Ingen feil"],
      explanation: "Kontroll er en løpende, tilbaketrekkbar bemyndigelse, ikke et engangs-ja — kjernen i statskapitlet.",
    },
    {
      question: "Hva er kontraktsmyndighet?",
      options: ["Legitimitet basert på et opprinnelig samtykke/kontrakt", "Løpende borgerkontroll med makten", "Statens plikt til veldedighet", "Retten til å trekke tilbake bemyndigelse"],
      explanation: "Pettit kontrasterer kontraktsmyndighet (opprinnelig samtykke) med permanent borgerkontroll.",
    },
    {
      question: "Hvorfor må statsmakten selv holdes under kontroll hos Pettit?",
      options: ["Fordi en ukontrollert stat selv blir en kilde til dominans", "Fordi staten alltid er ond", "Fordi borgerne ikke stoler på hverandre", "Fordi veldedighet er bedre enn stat"],
      explanation: "Statlig makt under borgerkontroll er kontrollert innblanding; uten kontroll blir den vilkårlig (imperium).",
    },
    {
      question: "Hva er formelen for skillet velferd/veldedighet hos Pettit?",
      options: ["Velferd kan *kreves* (rett); veldedighet må *tigges* om (gave)", "Velferd er privat, veldedighet er offentlig", "De er to ord for det samme", "Veldedighet gir mest frihet"],
      explanation: "Bare det man kan kreve som rett fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hvilken struktur deler veldedighetens ufrihet med et tidligere eksempel?",
      options: ["Slaven med den snille herren — avhengighet av en annens vilje", "Odyssevs ved masten — kontrollert binding", "Den liberale despoten som gir positiv frihet", "Barskap-nøkkelen"],
      explanation: "I begge tilfeller er ufriheten avhengigheten (mulig tilbaketrekking), ikke faktisk innblanding.",
    },
    {
      question: "Hva er funksjonen til utdrag [B] (om bemyndigelse som kan trekkes tilbake)?",
      options: ["Kritisk premiss mot kontraktsmyndighet — kontroll > samtykke", "Nøytral definisjon av staten", "Illustrasjon av veldedighet", "Et argument for engangssamtykke"],
      explanation: "[B] innfører det subtile poenget: løpende, tilbaketrekkbar bemyndigelse fjerner dominans, ikke opprinnelig ja.",
    },
    {
      question: "Hva følger av ikke-dominans for velferdsstaten?",
      options: ["At det nødvendige bør sikres som rett, ikke overlates til veldedighet", "At all velferd bør privatiseres", "At staten ikke bør gi noe", "At veldedighet er tilstrekkelig"],
      explanation: "Rettighet fjerner dominans; veldedighet gjør mottakeren avhengig/dominert.",
    },
    {
      question: "Hva er A-markøren i en oppgave om Pettits statsteori?",
      options: ["Å få frem at bemyndigelsen kan trekkes tilbake (kontroll > samtykke)", "Å ramse opp mange tenkere", "Å skrive lengst mulig", "Å konkludere med at staten er unødvendig"],
      explanation: "Veiledningene flagger «kan trekkes tilbake» som «veldig bra» — det subtile poenget som løfter svaret.",
    },
    {
      question: "Hva slags innblanding er statlig regulering under borgerkontroll?",
      options: ["Kontrollert innblanding — den berøver ikke frihet", "Ukontrollert innblanding — dominans", "Non-vitiation", "Faktisk tvang som alltid er ufrihet"],
      explanation: "Statlig makt borgerne kontrollerer er kontrollert innblanding (jf. kap. 1.2), forenlig med frihet.",
    },
    {
      question: "Hvilken sjanger passer oppgaven «Hva ville Pettit sagt om privat veldedighet?»",
      options: ["ANV — bruk dominansbegrepet på den konkrete situasjonen", "RED — ren redegjørelse for teorien", "SAM — sammenligning av to tenkere", "SIT — tolke et utdrag"],
      explanation: "ANV krever at man *bruker* teorien på caset (veldedighet = dominans), ikke bare gjengir den.",
    },
    {
      question: "Hva binder Pettits statsteori til Del 2 (Rawls/Locke)?",
      options: ["Kontrasten mellom løpende borgerkontroll og ren kontraktteori (samtykke)", "Spørsmålet om negativ vs. positiv frihet", "Machiavellis syn på makt", "Nussbaums kapabiliteter"],
      explanation: "Pettits «kontroll > samtykke» kontrasteres med Rawls' hypotetiske kontrakt og Lockes samtykke.",
    },
    {
      question: "Hvorfor er Pettits stat ikke en ren kontraktteori?",
      options: ["Fordi legitimiteten ligger i maktens løpende kontrollerbarhet, ikke i opprinnelig samtykke", "Fordi den avviser all statlig makt", "Fordi den bygger utelukkende på eiendomsrett", "Fordi den ikke tillater rettigheter"],
      explanation: "Tyngdepunktet forskyves fra opprinnelig samtykke til vedvarende, tilbaketrekkbar kontroll.",
    },
    {
      question: "Hva er den kontraintuitive innsikten om veldedighet hos Pettit?",
      options: ["At veldedighet ikke bare er et gode, men kan være frihetsberøvende", "At veldedighet alltid er bedre enn rettigheter", "At staten aldri bør hjelpe", "At mottakeren dominerer giveren"],
      explanation: "Å motta på giverens nåde gjør mottakeren avhengig/dominert — mot intuisjonen om veldedighet som udelt godt.",
    },
  ],
  'stv1100-1-prove': [
    {
      question: "Negativ frihet er fravær av hva?",
      options: ["Forsettlig innblanding fra andre", "Enhver hindring, også naturlige", "Alle ønsker man ikke får oppfylt", "Statlig velferd"],
      explanation: "Kjernen er hindring påført av andre mennesker (ofte skjerpet Hayek-nært til *forsettlig* innblanding) — ikke enhver hindring.",
    },
    {
      question: "Hvilket begrep eier Berlin?",
      options: ["Negativ og positiv frihet", "Ikke-dominans", "Non-vitiation", "Permanent borgerkontroll"],
      explanation: "Berlin: to frihetsbegreper. Ikke-dominans/non-vitiation/borgerkontroll er Pettit.",
    },
    {
      question: "Hvilket begrep eier Pettit?",
      options: ["Ikke-dominans", "Positiv frihet", "Det egentlige selv", "Verdipluralisme"],
      explanation: "Ikke-dominans er Pettits signaturbegrep; de tre andre er Berlin.",
    },
    {
      question: "Er fattigdom i seg selv negativ ufrihet hos Berlin?",
      options: ["Nei — i utgangspunktet manglende evne, ikke en hindring påført av andre", "Ja, alltid", "Ja, fordi den skyldes staten", "Bare hvis den er selvforskyldt"],
      explanation: "Negativ ufrihet krever en hindring påført av en annen vilje. Berlin åpner riktignok for at fattigdom *kan* være ufrihet dersom den skyldes menneskeskapte ordninger, men i seg selv er den manglende evne.",
    },
    {
      question: "Hva spør positiv frihet om?",
      options: ["«Hvem styrer meg?»", "«Hvor mange dører står åpne?»", "«Kan noen hindre meg vilkårlig?»", "«Hvor rik er staten?»"],
      explanation: "Positiv frihet gjelder selvstyre; «hvor mange dører» er negativ frihet; «vilkårlig» er Pettit.",
    },
    {
      question: "Hvorfor advarer Berlin mot positiv frihet?",
      options: ["Den kan omdøpe tvang til frigjøring via skillet empirisk/egentlig selv", "Den er logisk selvmotsigende", "Den nekter folk eiendom", "Den er identisk med ikke-dominans"],
      explanation: "Deler man personen i et empirisk og et «egentlig» selv, kan tvang fremstilles som frigjøring.",
    },
    {
      question: "Hva er dominans hos Pettit?",
      options: ["Evne til innblanding uten den andres kontroll", "Faktisk innblanding i noens valg", "Ressurssvikt", "Statlig lovgivning som sådan"],
      explanation: "Dominans = mulighet for ukontrollert innblanding; selve muligheten er ufrihet.",
    },
    {
      question: "Er slaven med en snill herre fri ifølge Pettit?",
      options: ["Nei — han domineres fordi herren *kan* gripe inn", "Ja — ingen faktisk innblanding", "Ja — full negativ frihet", "Bare positivt ufri"],
      explanation: "Friheten avhenger av herrens vilje; avhengigheten selv er ufrihet.",
    },
    {
      question: "Hva berøver kontrollert innblanding?",
      options: ["Ingenting — den reduserer ikke friheten", "All frihet, alltid", "Bare positiv frihet", "Non-vitiation"],
      explanation: "Kontrollert innblanding (Odyssevs, lov under borgerkontroll) er forenlig med frihet hos Pettit.",
    },
    {
      question: "Hva er non-vitiation?",
      options: ["Frihetsinnskrenkning ved ressurssvikt/manglende evne", "Evne til ukontrollert innblanding", "Det samme som dominans", "Fravær av faktisk innblanding"],
      explanation: "Non-vitiation er en svakere kategori enn dominans — ikke bland dem (#7).",
    },
    {
      question: "Hvordan rangerer Pettit komponentene?",
      options: ["(a)/(b) veier tyngre enn (c)/(d)", "(c)/(d) veier tyngst", "Alle veier likt", "Bare (d) teller"],
      explanation: "Dominanskomponentene veier tyngst; frihet fra dominans > ressurser til å bruke friheten.",
    },
    {
      question: "Hva viser den liberale despoten?",
      options: ["At negativ frihet kan finnes uten selvstyre", "At all frihet er positiv", "At tvang alltid gir ufrihet", "At positiv frihet følger negativ"],
      explanation: "Despoten gir personlig frihet uten selvstyre — negativ og positiv frihet er uavhengige.",
    },
    {
      question: "Hva illustrerer Odyssevs ved masten?",
      options: ["Kontrollert binding som ikke berøver frihet", "At all binding er ufrihet", "Non-vitiation", "Statlig dominans"],
      explanation: "Bindingen skjer på egen forhåndsordre — kontrollert innblanding.",
    },
    {
      question: "Hva svarer Berlin og Pettit på despot-caset?",
      options: ["Berlin: negativt fri. Pettit: ufri (dominert)", "Begge: fri", "Begge: ufri", "Berlin: ufri; Pettit: fri"],
      explanation: "Despoten er testcaset der ikke-dominans skiller seg fra negativ frihet.",
    },
    {
      question: "Hva er kjernedimensjonen i sammenligningen Berlin vs. Pettit?",
      options: ["Faktisk innblanding (Berlin) vs. mulig ukontrollert innblanding (Pettit)", "Positiv vs. negativ frihet hos begge", "Rikdom vs. fattigdom", "Stat vs. individ"],
      explanation: "Berlin måler faktisk innblanding; Pettit muligheten for ukontrollert innblanding.",
    },
    {
      question: "Hva er statens hovedoppgave ifølge Pettit?",
      options: ["Å beskytte borgerne mot dominans", "Å avstå fra all innblanding", "Å maksimere lykke", "Å sikre absolutt eiendomsrett"],
      explanation: "Pettits stat fjerner aktivt dominans, mer enn den liberale staten.",
    },
    {
      question: "Hva er det sentrale poenget om borgerkontroll?",
      options: ["Kontroll er mer enn samtykke — bemyndigelsen kan trekkes tilbake", "Opprinnelig samtykke er nok", "Borgerne bør ikke kontrollere staten", "Kontroll = veldedighet"],
      explanation: "Løpende, tilbaketrekkbar kontroll fjerner dominans; engangssamtykke gjør det ikke.",
    },
    {
      question: "Hvorfor kan privat veldedighet gjøre mottakeren ufri?",
      options: ["Mottakeren avhenger av giverens nåde, som kan trekkes tilbake", "Fordi veldedighet er for liten", "Fordi staten forbyr det", "Fordi giveren domineres"],
      explanation: "Samme dominansstruktur som slaven med snill herre — avhengighet av en annens vilje.",
    },
    {
      question: "Hva fjerner dominansen i velferdsspørsmålet?",
      options: ["Å sikre det nødvendige som en rettighet man kan kreve", "Mer privat veldedighet", "Å avskaffe all hjelp", "Å gjøre hjelpen frivillig"],
      explanation: "Velferd som rett (ikke tigg) fjerner avhengigheten av en annens vilje.",
    },
    {
      question: "Hva er vilkårlig statsmakt (imperium)?",
      options: ["Statsmakt borgerne ikke kontrollerer, som selv blir dominans", "Statsmakt under borgerkontroll", "Privat makt over borgere", "Makt som aldri utøves"],
      explanation: "Staten som skal fjerne dominans kan selv dominere uten borgerkontroll.",
    },
    {
      question: "Hvilken feil er det å definere negativ frihet som «fravær av enhver hindring»?",
      options: ["Feil #1/#7 — mister grunnskillet «andres hindring vs. manglende egen evne»", "Feil #3 — unødig innledning", "Feil #6 — halve settet", "Ingen feil"],
      explanation: "Da viskes grunnskillet ut, og også manglende evne teller som ufrihet — kjernefeilen.",
    },
    {
      question: "Hvilken feil er det å gjengi Pettit uten dominans-/kontrollpoenget?",
      options: ["Feil #1 — miste det sentrale poenget", "Feil #4 — hoppe over utdrag", "Feil #8 — referere i drøftingsdel", "Ingen feil"],
      explanation: "Uten «mulig ukontrollert innblanding» faller Pettit tilbake til Berlin.",
    },
    {
      question: "Hvilken feil er det å blande ikke-dominans og non-vitiation?",
      options: ["Feil #7 — upresise begreper", "Feil #3 — unødig innledning", "Feil #9 — overse anvendelsen", "Ingen feil"],
      explanation: "Dominans (vilkårlig makt) og non-vitiation (ressurssvikt) er ulike kategorier.",
    },
    {
      question: "Hvilken feil er det å gjengi en teori uten å bruke den på despoten?",
      options: ["Feil #9 — overse anvendelsesvrien", "Feil #4 — hoppe over utdrag", "Feil #6 — halve settet", "Ingen feil"],
      explanation: "ANV-oppgaver krever at teorien *brukes* på caset, ikke bare refereres.",
    },
    {
      question: "Hva er A-markøren i en Berlin-oppgave?",
      options: ["Å vise at Berlin *problematiserer* positiv frihet, ikke bare beskriver den", "Å skrive lengst mulig", "Å ramse opp mange tenkere", "Å avvise negativ frihet"],
      explanation: "Å se faren i positiv frihet (misbruk til tvang) løfter svaret fra flatt til A.",
    },
    {
      question: "Hva er A-markøren i en Pettit-statsteori-oppgave?",
      options: ["Å få frem at bemyndigelsen kan trekkes tilbake (kontroll > samtykke)", "Å konkludere med at staten er unødvendig", "Å skrive lengst mulig", "Å avvise alle rettigheter"],
      explanation: "«Kan trekkes tilbake» er det subtile poenget veiledningene flagger som «veldig bra».",
    },
    {
      question: "Hva er funksjonen til et utdrag som definerer negativ frihet i en SIT-oppgave?",
      options: ["Definisjon/premiss — grunnmuren i det negative frihetsbegrepet", "Illustrasjon av positiv frihet", "Motargument mot Berlin", "En historisk digresjon"],
      explanation: "Et definisjonsutdrag fastlegger begrepet og bærer det sentrale poenget.",
    },
    {
      question: "Hva krever SIT-regelen i frihetsoppgavene?",
      options: ["At *hvert* utdrag parafraseres, får funksjon og plasseres i argumentet", "At man velger ett utdrag og hopper over resten", "At man bare oversetter linje for linje", "At man ignorerer funksjonen"],
      explanation: "Å hoppe over utdrag (#4) eller parafrasere løsrevet (#5) svekker svaret.",
    },
    {
      question: "Hva er den kontraintuitive innsikten om veldedighet hos Pettit?",
      options: ["At veldedighet kan være frihetsberøvende, ikke bare et gode", "At veldedighet alltid er best", "At staten aldri bør hjelpe", "At mottakeren dominerer giveren"],
      explanation: "Å motta på giverens nåde gjør mottakeren avhengig/dominert — mot vanlig intuisjon.",
    },
    {
      question: "Hvorfor er Pettits stat ikke en minimal (liberal) stat?",
      options: ["Den griper aktivt inn for å fjerne privat dominans", "Den avskaffer all statlig makt", "Den bygger bare på eiendomsrett", "Den tillater ingen rettigheter"],
      explanation: "Pettits stat beskytter den svake mot den sterke — mer aktivt enn nattvekterstaten.",
    },
  ],
  'stv1100-2-1': [
    {
      question: "Hva mener Rawls med «rettferdighet som rimelighet» (justice as fairness)?",
      options: ["At rettferdige prinsipper er de som ville blitt valgt i en rimelig anlagt valgsituasjon", "At alle skal få nøyaktig like mye av samfunnets goder", "At rettferdighet består i å følge samfunnets faktiske lover", "At den sterkestes interesser bør avgjøre fordelingen"],
      explanation: "Rimeligheten ligger i valgsituasjonen (utgangsposisjonen), ikke i at utfallet er likt. Rawls tillater faktisk ulikhet, jf. forskjellsprinsippet.",
    },
    {
      question: "Hva innebærer det at Rawls «hever kontraktteorien til et høyere abstraksjonsnivå»?",
      options: ["Kontrakten gjelder valg av fordelingsprinsipper og er hypotetisk, ikke en historisk avtale om å danne stat", "Kontrakten er en faktisk, skriftlig avtale mellom borgere og stat", "Kontrakten gjelder kun de mest utdannede borgerne", "Kontrakten inngås på nytt hvert år ved folkeavstemning"],
      explanation: "Der klassisk kontraktteori tenkte en avtale om å danne stat, gjelder Rawls' hypotetiske kontrakt valget av prinsipper.",
    },
    {
      question: "Hva er uvitenhetssløret (veil of ignorance)?",
      options: ["At partene velger prinsipper uten å vite sin egen klasse, sine evner eller sitt livssyn", "At politikere skjuler sine motiver for velgerne", "At borgerne mangler kunnskap om samfunnsforhold generelt", "At man ikke får vite utfallet av valget før etterpå"],
      explanation: "Sløret skjuler partikulær kunnskap om egen posisjon; generell samfunnskunnskap beholdes.",
    },
    {
      question: "Hvilken funksjon har uvitenhetssløret i Rawls' argument?",
      options: ["Det sikrer et upartisk valg ved å frata partene informasjonen de kunne brukt til å favorisere seg selv", "Det gjør partene mer altruistiske og omsorgsfulle", "Det garanterer at alle får identiske livsutsikter", "Det gir de sterkeste partene større forhandlingsmakt"],
      explanation: "Upartiskheten er strukturell: siden ingen vet hvem de er, kan ingen skreddersy prinsippene.",
    },
    {
      question: "Hva er «trussel-fordel» (threat advantage) hos Rawls?",
      options: ["Forhandlingsmakt fra tilfeldige fortrinn som styrke, rikdom eller talent", "En trussel om vold hvis prinsippene ikke godtas", "Fordelen ved å kjenne utfallet på forhånd", "Retten til å true seg til flere goder etter valget"],
      explanation: "Sløret nøytraliserer trussel-fordelen fordi ingen vet om de er sterke eller svake.",
    },
    {
      question: "Hvordan behandler uvitenhetssløret trussel-fordelen?",
      options: ["Det nøytraliserer den, siden ingen vet om de har et fortrinn å presse med", "Det forsterker den for de mest talentfulle", "Det overlater den til flertallsavgjørelse", "Det ignorerer den fordi den er irrelevant"],
      explanation: "Tilfeldige fortrinn settes ut av spill; de er moralsk vilkårlige og bør ikke bestemme fordelingen.",
    },
    {
      question: "Hva sier maximin-regelen?",
      options: ["Velg det alternativet hvis verst tenkelige utfall er best", "Velg det alternativet med høyest forventet nytte", "Velg det alternativet som gagner flertallet mest", "Velg det alternativet med størst mulige gevinst"],
      explanation: "Maxi-min = maksimer minimum. Man rangerer etter dårligste utfall og velger det minst dårlige.",
    },
    {
      question: "Hvorfor er maximin rasjonelt i utgangsposisjonen (ett av vilkårene)?",
      options: ["Fordi partene er i radikal usikkerhet og ikke kan tilordne sannsynligheter til utfallene", "Fordi Rawls personlig var redd for fattigdom", "Fordi flertallet alltid foretrekker det tryggeste", "Fordi det gir høyest gjennomsnittlig velferd"],
      explanation: "Sløret fjerner sannsynlighetene, så forventet nytte kan ikke beregnes; da er det rasjonelt å sikre bunnen.",
    },
    {
      question: "Hvilket av følgende er IKKE et vilkår Rawls oppgir for at maximin er rasjonelt?",
      options: ["At flertallet stemmer for det tryggeste alternativet", "Radikal usikkerhet uten kjente sannsynligheter", "At det verste utfallet er uakseptabelt", "At gevinsten ved å ta risiko er beskjeden"],
      explanation: "De tre vilkårene er radikal usikkerhet, uakseptabelt verste utfall og beskjeden gevinst — ikke flertallsstemme.",
    },
    {
      question: "Hva er forskjellen på uvitenhetssløret og maximin-regelen?",
      options: ["Sløret er en informasjonsbetingelse; maximin er en beslutningsregel", "Sløret er en beslutningsregel; maximin er en informasjonsbetingelse", "De er to navn på det samme prinsippet", "Sløret gjelder Locke, maximin gjelder Rawls"],
      explanation: "Å blande dem — «sløret sier man skal sikre seg mot det verste» — er en typisk presisjonsfeil (#7).",
    },
    {
      question: "Hva er «refleksiv likevekt» hos Rawls?",
      options: ["Tilstanden der prinsippene og våre veloverveide overbevisninger er brakt i samsvar", "Balansen mellom statens tre makter", "En avtale som revideres refleksmessig hvert valg", "Likevekten mellom tilbud og etterspørsel i markedet"],
      explanation: "Vi justerer prinsipper og intuisjoner mot hverandre til de konvergerer — Rawls' rettferdiggjøringsmetode.",
    },
    {
      question: "Hva er «veloverveide overbevisninger»?",
      options: ["Våre stødigste moralske dommer, holdt fast ved etter ro og ettertanke (f.eks. at slaveri er urett)", "Politiske meninger dannet i valgkamp", "Rawls' egne konklusjoner i A Theory of Justice", "Overbevisninger partene har bak sløret om egen fremtid"],
      explanation: "De brukes som prøvestein: en teori som strider mot dem alle, må ha en feil.",
    },
    {
      question: "Hvorfor forutsetter Rawls at partene er «gjensidig uinteresserte»?",
      options: ["For å vise at rettferdige prinsipper følger selv uten altruisme, bare av egeninteresse under rimelige betingelser", "Fordi han mener mennesker faktisk er kalde og egoistiske", "For at de skal kunne stole blindt på hverandre", "Fordi altruisme ville gitt de svake for mye makt"],
      explanation: "Bygde rettferdigheten på nestekjærlighet, ville argumentet hvilt på en holdning man kan mangle.",
    },
    {
      question: "Hva vet partene bak uvitenhetssløret?",
      options: ["Generelle forhold om samfunn, økonomi og psykologi, men ikke sin egen plass i dem", "Absolutt ingenting om noe som helst", "Alt om seg selv, men ingenting om samfunnet", "Kun sannsynligheten for å bli rik eller fattig"],
      explanation: "Uten generell kunnskap kunne partene ikke vurdert konsekvensene av ulike prinsipper.",
    },
    {
      question: "Hva menes med at fortrinn som klasse og talent er «moralsk vilkårlige»?",
      options: ["At man ikke har fortjent dem — de skyldes det sosiale og naturlige lotteriet", "At de er umoralske å ha", "At de kan velges bort etter eget ønske", "At de er tilfeldige og derfor uten betydning for livet"],
      explanation: "Fordi de er ufortjente, mener Rawls de ikke bør bestemme fordelingen; derfor skjuler sløret dem.",
    },
    {
      question: "Hvilken del av uvitenhetssløret er teoretisk vanskeligst å forsvare?",
      options: ["At partene ikke kjenner sitt eget livssyn / sin oppfatning av det gode", "At partene ikke kjenner sin sosiale klasse", "At partene ikke kjenner sin formue", "At partene ikke kjenner sin rase"],
      explanation: "Å velge fornuftig uten å vite hva man verdsetter er krevende — dette er det subtile A-poenget.",
    },
    {
      question: "Hva er det sentrale poenget en Rawls-redegjørelse IKKE kan mangle?",
      options: ["Utgangsposisjonen og uvitenhetssløret", "En biografi over Rawls' liv", "En sammenligning med utilitarismen", "En kritikk av Locke"],
      explanation: "Rawls uten sløret/utgangsposisjonen er den klassiske kjernefeilen (#1) — svaret faller til svakt.",
    },
    {
      question: "I en [A]–[E]-sitatoppgave om Rawls, hva er den typiske feilen (#4)?",
      options: ["Å konsentrere seg om ett–to utdrag og hoppe over resten", "Å tolke alle utdragene grundig", "Å plassere hvert utdrag i argumentets helhet", "Å identifisere funksjonen til hvert utdrag"],
      explanation: "Alle utdrag skal behandles; å hoppe over noen svekker svaret vesentlig.",
    },
    {
      question: "Hva kjennetegner en løsrevet parafrase (feil #5) i en sitattolkning?",
      options: ["At utdraget oversettes linje for linje uten at funksjonen og plassen i argumentet angis", "At utdraget plasseres presist i argumentet", "At man identifiserer om det er premiss eller konklusjon", "At man kobler det til de andre utdragene"],
      explanation: "God SIT: parafraser → identifiser funksjon → plasser i helheten. Bare parafrase er ikke nok.",
    },
    {
      question: "Et Rawls-utdrag som definerer sløret («ingen kjenner sin plass...») har hvilken funksjon?",
      options: ["Premiss — det er betingelsen som sikrer upartiskhet", "Konklusjon — det er selve rettferdighetsprinsippet", "Illustrasjon — et konkret eksempel uten teoretisk vekt", "Innvending — en kritikk av teorien"],
      explanation: "Å navngi funksjonen (premiss) er det som skiller en plassert tolkning fra en løsrevet parafrase.",
    },
    {
      question: "Hvorfor foretrekker Rawls maximin fremfor å maksimere forventet nytte?",
      options: ["Fordi sløret fjerner sannsynlighetene og forventet-nytte-regelen kunne ofre de dårligst stilte", "Fordi forventet nytte alltid gir urettferdige resultater", "Fordi maximin gir høyest gjennomsnittlig velstand", "Fordi partene er risikosøkende bak sløret"],
      explanation: "Uten sannsynligheter kan ikke forventet nytte beregnes; maximin beskytter bunnen.",
    },
    {
      question: "Hvordan svarer Rawls på innvendingen om at et hypotetisk valg ikke kan forplikte oss?",
      options: ["Ved at det bindende ikke kommer fra samtykke, men fra at valgbetingelsene er rimelige", "Ved å hevde at kontrakten faktisk ble inngått historisk", "Ved å si at flertallet har godtatt den i praksis", "Ved å innrømme at teorien ikke forplikter noen"],
      explanation: "Konstruksjonen modellerer upartiskhet; godtar man betingelsene, godtar man resultatet.",
    },
    {
      question: "Hva er «utgangsposisjonen» (original position)?",
      options: ["Den tenkte, rimelig anlagte valgsituasjonen der partene enes om rettferdighetsprinsippene", "Den historiske naturtilstanden før staten oppstod", "Startkapitalen hver borger fødes med", "Den første paragrafen i grunnloven"],
      explanation: "Utgangsposisjonen er Rawls' hypotetiske motstykke til naturtilstanden; sløret er kjernen i den.",
    },
    {
      question: "Hva er sammenhengen mellom uvitenhetssløret og maximin-regelen?",
      options: ["Sløret skaper den radikale usikkerheten som gjør maximin til den rasjonelle regelen", "Maximin skaper sløret", "De er uavhengige og uten forbindelse", "Sløret opphever maximin"],
      explanation: "Sløret er årsaken (radikal usikkerhet), maximin er den rasjonelle responsen.",
    },
    {
      question: "Hvilken utdragsfunksjon har et utdrag om at «tilfeldigheter som gir forhandlingsstyrke er satt ut av spill»?",
      options: ["Virkning av premisset — det viser hva sløret fører til (upartiskhet)", "Premiss — det definerer selve sløret", "Beslutningsregel — det angir maximin", "Test — det sjekker mot intuisjonene"],
      explanation: "Utdraget kobler informasjonsbetingelsen til at trussel-fordelen faller bort.",
    },
    {
      question: "Hva kjennetegner et E-nivå-svar om Rawls?",
      options: ["Det mister utgangsposisjonen/sløret, blander sløret og maximin, og brer seg ut i utenomsnakk", "Det treffer kjernen presist og tilføyer et subtilt ekstrapoeng", "Det plasserer alle utdrag i argumentets helhet", "Det gir en korrekt, men flat gjengivelse"],
      explanation: "Et korrekt, men flatt svar er C; A tilføyer det subtile ekstra. E mister kjernen.",
    },
    {
      question: "Hva løfter en Rawls-besvarelse til A-nivå (det subtile ekstra)?",
      options: ["Å se at ulike deler av uvitenhetssløret er ulikt godt teoretisk motivert", "Å skrive så langt og bredt som mulig", "Å nevne alle Rawls' senere verk", "Å bruke flest mulig faguttrykk"],
      explanation: "Sensorveiledningen flagger denne innsikten som «veldig bra» — sløret er ikke én ensartet forutsetning.",
    },
    {
      question: "Hvorfor skjuler sløret partenes livssyn?",
      options: ["For at prinsippene skal bli nøytrale mellom ulike oppfatninger av det gode liv", "For å gjøre partene mer usikre og engstelige", "Fordi livssyn er irrelevant for rettferdighet", "For at religiøse skal få et fortrinn"],
      explanation: "Nøytraliteten er grunnen — men samtidig den mest omstridte delen av sløret.",
    },
    {
      question: "Hva er «likestilling» i utgangsposisjonen?",
      options: ["At ingen part har mer makt eller bedre informasjon enn andre", "At alle får samme inntekt etter valget", "At kjønnene behandles likt i lovverket", "At partene deler alt de eier likt"],
      explanation: "Sammen med sløret gjør likestillingen situasjonen rimelig — ingen kan presse gjennom egne prinsipper.",
    },
    {
      question: "Hvordan bør du rekonstruere strukturen i Rawls' argument (RED)?",
      options: ["Slør (premiss) → trussel-fordel bort (virkning) → maximin (regel) → beskytte bunnen → refleksiv likevekt (test)", "Bare gjengi konklusjonen om de to prinsippene", "Starte med en lang biografi og historisk bakgrunn", "Liste opp alle Rawls' kritikere først"],
      explanation: "RED-håndverket krever at du treffer strukturen, ikke bare konklusjonen.",
    },
  ],
  'stv1100-2-2': [
    {
      question: "Hva sier Rawls' frihetsprinsipp (første prinsipp)?",
      options: ["Hver har lik rett til det mest omfattende systemet av grunnleggende friheter som er forenlig med samme frihet for alle", "Alle skal ha lik inntekt og formue", "Friheten skal fordeles etter fortjeneste", "Staten skal maksimere borgernes samlede lykke"],
      explanation: "Frihetsprinsippet gjelder de politiske og sivile frihetene og har leksikalsk forrang.",
    },
    {
      question: "Hva sier forskjellsprinsippet (2b)?",
      options: ["Sosiale og økonomiske ulikheter tillates bare hvis de er til størst fordel for de dårligst stilte", "All ulikhet i inntekt er forbudt", "Ulikheter tillates hvis de gagner flertallet", "Den som yter mest skal alltid tjene mest"],
      explanation: "Ulikhet er ikke urettferdig i seg selv — den må løfte bunnen. Dette er det sentrale poenget.",
    },
    {
      question: "Hva innebærer «leksikalsk prioritet» mellom prinsippene?",
      options: ["1 før 2a før 2b — man går ikke videre før det foregående er fullt oppfylt", "At prinsippene er likestilte og veies mot hverandre", "At forskjellsprinsippet har forrang foran friheten", "At sjanselikhet kan ofres for økonomisk vekst"],
      explanation: "Grunnleggende friheter kan ikke handles bort mot velferd; frihet kommer først.",
    },
    {
      question: "Hva er «sjanselikhet» (2a) hos Rawls?",
      options: ["Rettferdig likhet av muligheter — like talenter og innsats gir like utsikter uansett bakgrunn", "At alle ender opp med samme inntekt", "At posisjoner tildeles ved loddtrekning", "At de dårligst stilte alltid får forrang til stillinger"],
      explanation: "2a er mer enn formell åpenhet; den korrigerer for sosial bakgrunn. 2a går foran 2b.",
    },
    {
      question: "Hva er forskjellen mellom sjanselikhet (2a) og forskjellsprinsippet (2b)?",
      options: ["2a gjelder tilgang til posisjoner; 2b gjelder fordeling av utfall til fordel for bunnen", "2a gjelder utfall; 2b gjelder tilgang", "De er to navn på det samme", "2a gjelder frihet; 2b gjelder likhet"],
      explanation: "Å blande dem er en typisk presisjonsfeil (#7). 2a har forrang foran 2b.",
    },
    {
      question: "Hva er «sosiale primærgoder»?",
      options: ["Godene enhver rasjonell person vil ha uansett livsplan — rettigheter, muligheter, inntekt, selvrespektens grunnlag", "De godene bare de rikeste ønsker seg", "Naturressurser som olje og mineraler", "De godene partene kjenner sin egen andel av"],
      explanation: "Primærgodene er den felles målestokken bak sløret, der partene ikke kjenner egen livsplan.",
    },
    {
      question: "Hvilket primærgode kaller Rawls det viktigste?",
      options: ["Selvrespektens sosiale grunnlag", "Inntekt og formue", "Politisk makt", "Eiendomsretten"],
      explanation: "Uten selvrespekt mister andre goder sin verdi; rettferdighet handler om betingelser for et verdig liv.",
    },
    {
      question: "Hva er «det naturlige lotteriet»?",
      options: ["At naturlige talenter er ujevnt og moralsk vilkårlig (ufortjent) fordelt", "At man vinner i lotto med naturlige tall", "At naturressurser er ulikt fordelt mellom land", "At værforhold påvirker avlingene tilfeldig"],
      explanation: "Fordi talent er ufortjent, begrunner det forskjellsprinsippet: avkastningen bør gagne fellesskapet.",
    },
    {
      question: "Hva er «det sosiale lotteriet»?",
      options: ["At sosial bakgrunn — klasse, familieformue, oppvekst — er tilfeldig og moralsk vilkårlig fordelt", "At samfunnet trekker ut hvem som får velferd", "At sosiale medier fordeler oppmerksomhet tilfeldig", "At stemmeretten fordeles ved loddtrekning"],
      explanation: "Sammen med det naturlige lotteriet begrunner det hvorfor fordelingen ikke bør speile disse tilfeldighetene.",
    },
    {
      question: "Hvorfor tillater forskjellsprinsippet ulikhet i det hele tatt?",
      options: ["Fordi høyere belønning kan motivere til større ytelse, som kan komme også de dårligst stilte til gode", "Fordi de talentfulle fortjener mer", "Fordi likhet er umulig å oppnå", "Fordi flertallet ønsker ulikhet"],
      explanation: "Ulikheten er instrumentelt begrunnet — lov i den grad den løfter bunnen, ikke fordi noen «fortjener» den.",
    },
    {
      question: "Hva er Rawls' presise poeng om fordelingen av talenter (utdrag [B])?",
      options: ["Selve fordelingen er verken rettferdig eller urettferdig — det er institusjonenes håndtering av den som kan bedømmes", "At ulik talent i seg selv er urettferdig", "At talent alltid bør belønnes maksimalt", "At talent er jevnt fordelt i befolkningen"],
      explanation: "Urettferdigheten ligger i strukturen, ikke i naturen. Et subtilt, presist poeng.",
    },
    {
      question: "Hva er den feministiske kritikken av Rawls?",
      options: ["At familien ligger utenfor sløret/prinsippene, så kjønnsulikhet i hjemmet unnslipper rettferdigheten", "At Rawls forbyr kvinner å delta i utgangsposisjonen", "At forskjellsprinsippet favoriserer menn økonomisk", "At sløret gjør alle parter til menn"],
      explanation: "Kritikken utnytter en spenning: sjanselikheten krever at oppvekst ikke bestemmer utsikter, men da kan ikke familien være unntatt.",
    },
    {
      question: "Hva er kritikken fra «de varig syke og svake»?",
      options: ["At Rawls' parter er «fullt samarbeidende» medlemmer, så alvorlig funksjonshemmede kan falle utenfor primærgode-apparatet", "At syke ikke bør ha stemmerett", "At forskjellsprinsippet gir de syke for mye", "At sløret gjør alle parter friske"],
      explanation: "En rekkevidde-innvending (bl.a. fra Nussbaum): fanger primærgode-listen dem som ikke kan delta i samarbeidet?",
    },
    {
      question: "Hva er den typiske feilen (#1) i en redegjørelse for prinsippene?",
      options: ["Å gjengi prinsippene uten forskjellsprinsippets kjerne eller den leksikalske forrangen", "Å nevne både 2a og 2b", "Å forklare rangordenen mellom prinsippene", "Å begrunne forskjellsprinsippet med lotteriet"],
      explanation: "Uten forskjellsprinsippets kjerne (ulikhet til fordel for bunnen) og forrangen faller svaret.",
    },
    {
      question: "Hva er feil #8 i en HYB-oppgave om Rawls?",
      options: ["Å bare referere teorien om igjen i drøftingsdelen i stedet for å reise en innvending", "Å reise en pensumforankret innvending", "Å gi Rawls' mulige motsvar", "Å konkludere forbeholdent"],
      explanation: "Drøftingsdelen krever selvstendighet — en innvending vurdert, ikke ny gjengivelse.",
    },
    {
      question: "Hvordan følger forskjellsprinsippet av maximin-valget bak sløret?",
      options: ["Partene sikrer bunnen (maximin), så de velger prinsipper som gjør de dårligst stilte best mulig stilt", "Partene maksimerer forventet inntekt", "Partene stemmer over fordelingen etterpå", "Partene vet at de blir rike og velger deretter"],
      explanation: "Fordi partene selv kan havne på bunnen, foretrekker de en ordning som løfter den — forskjellsprinsippet.",
    },
    {
      question: "Hva løfter en Rawls-drøfting til A-nivå (det subtile ekstra)?",
      options: ["Å fremheve den leksikalske forrangen og forankre kritikken i pensum (feministisk / syke-svake)", "Å skrive lengst mulig", "Å ramse opp alle Rawls' verk", "Å unngå enhver innvending"],
      explanation: "Sensor premierer den forankrede drøftingen med Rawls' motsvar, ikke fritt synsing.",
    },
    {
      question: "Hva menes med «rettferdig likhet av muligheter» (fair equality of opportunity)?",
      options: ["At like talentfulle har samme utsikter uansett hvilken klasse de fødes inn i", "At ingen er juridisk utestengt fra en stilling", "At alle får samme utdanning uansett anlegg", "At posisjoner fordeles etter behov"],
      explanation: "Det er mer enn formell åpenhet — det stiller krav til utdanning og oppvekstvilkår.",
    },
    {
      question: "Er Rawls en ren likhetsteoretiker som mener alle skal ha like mye?",
      options: ["Nei — han tillater betinget ulikhet; ulikhet er lov hvis den gagner de dårligst stilte", "Ja, forskjellsprinsippet krever full likhet", "Ja, alle primærgoder skal fordeles likt", "Nei, han forbyr enhver form for likhet"],
      explanation: "Rawls er teoretiker om rettferdiggjort ulikhet, ikke om lik fordeling av utfall.",
    },
    {
      question: "Hva retter Rawls' rettferdighetsprinsipper seg mot?",
      options: ["Samfunnets grunnstruktur — de store institusjonene som fordeler rettigheter og livsutsikter", "Enkeltpersoners daglige handlinger", "Kun skattesystemet", "Bare familien og privatlivet"],
      explanation: "Prinsippene vurderer institusjoner, ikke enkelthandlinger direkte.",
    },
    {
      question: "Hvorfor kan ikke fortjeneste være grunnlaget for fordeling ifølge Rawls?",
      options: ["Fordi også flid og arbeidsevne delvis skyldes lotteriet (oppvekst, anlegg)", "Fordi ingen jobber hardere enn andre", "Fordi fortjeneste ikke kan måles", "Fordi flertallet er imot fortjeneste"],
      explanation: "Fortjeneste-innvendingen forutsetter en fortjeneste-forestilling Rawls avviser.",
    },
    {
      question: "Hvordan identifiseres «de dårligst stilte» (the least advantaged)?",
      options: ["I termer av sosiale primærgoder — typisk laveste forventede inntekt og formue over et livsløp", "I termer av subjektiv lykke", "Ved at de selv melder seg", "I termer av én bestemt livsplan"],
      explanation: "Den objektive målestokken trengs fordi partene bak sløret ikke kjenner egne preferanser.",
    },
    {
      question: "Hva uttrykker den leksikalske forrangen for frihet moralsk?",
      options: ["At mennesker er mål i seg selv — grunnleggende friheter kan ikke ofres for kollektiv velstand", "At frihet er mindre viktig enn velferd", "At de rike har mer frihet enn de fattige", "At friheten kan selges hvis prisen er høy nok"],
      explanation: "En anti-utilitaristisk kjerne: selv stor økonomisk gevinst rettferdiggjør ikke å frata noen stemmeretten.",
    },
    {
      question: "Hva er Rawls' teori formet i motsetning til?",
      options: ["Utilitarismen, som kan ofre noen for et høyt gjennomsnitt av samlet nytte", "Marxismen, som avskaffer privateiendom", "Anarkismen, som avviser staten", "Konservatismen, som forsvarer tradisjon"],
      explanation: "Forskjellsprinsippet + forrangen forbyr å handle bort individets friheter mot større samlet velferd.",
    },
    {
      question: "Hva består listen over sosiale primærgoder av?",
      options: ["Rettigheter og friheter, muligheter og makt, inntekt og formue, selvrespektens grunnlag", "Kun inntekt og formue", "Naturressurser og råvarer", "Lykke, glede og tilfredshet"],
      explanation: "De er sosiale fordi de fordeles av grunnstrukturen, og allmenne fordi de er relevante uansett livsplan.",
    },
    {
      question: "Hva kjennetegner et C-nivå-svar om prinsippene?",
      options: ["Alle tre prinsipper og rangorden korrekt, men flatt og uten drøfting", "Prinsippene uten forskjellsprinsippets kjerne", "Kjernen presist pluss en forankret innvending", "Blanding av 2a og 2b"],
      explanation: "E mister kjernen; A tilføyer forankret drøfting. C er korrekt, men flatt.",
    },
    {
      question: "Hva er insentiv-begrunnelsen for at ulikhet kan være tillatt?",
      options: ["Høyere belønning kan få talentfulle til å yte mer og øke det samlede produktet, som kan løfte bunnen", "Talentfulle har en naturlig rett til mer", "Ulikhet er nødvendig for å straffe de late", "Markedet krever ulikhet uansett"],
      explanation: "Ulikheten er instrumentelt begrunnet — lov fordi og i den grad den gagner de dårligst stilte.",
    },
    {
      question: "Hvorfor er den feministiske kritikken vanskeligere for Rawls å avvise enn fortjeneste-innvendingen?",
      options: ["Fordi den utnytter en indre spenning: sjanselikheten krever at oppvekst ikke bestemmer utsikter, men familien holdes utenfor", "Fordi Rawls aldri nevner kvinner", "Fordi den er politisk mer korrekt", "Fordi fortjeneste ikke finnes i teorien"],
      explanation: "Offentlig/privat-skillet kolliderer med kravet i 2a om at barns utsikter ikke skal bestemmes av bakgrunn.",
    },
  ],
  'stv1100-2-3': [
    {
      question: "Hva er det sentrale ved Lockes samfunnskontrakt?",
      options: ["Den er et faktisk, pågående samtykke med full informasjon", "Den er et hypotetisk prinsippvalg bak et slør", "Den er en historisk engangsavtale man er bundet av for alltid", "Den er en avtale bare mellom de rikeste borgerne"],
      explanation: "Motsatt av Rawls' hypotetiske valg bak slør: Lockes kontrakt er virkelig og vedvarende.",
    },
    {
      question: "Hva er «uttrykkelig samtykke» (explicit consent) hos Locke?",
      options: ["En aktiv, erklært tilslutning til samfunnet, f.eks. en borgerskapsed", "Samtykke man gir ved å nyte samfunnets goder", "Samtykke partene gir bak uvitenhetssløret", "Samtykke flertallet gir på vegne av alle"],
      explanation: "De færreste gir uttrykkelig samtykke — derfor trenger Locke også det stilltiende.",
    },
    {
      question: "Hva er «stilltiende samtykke» (tacit consent) hos Locke?",
      options: ["Den implisitte tilslutningen man gir ved å nyte godt av samfunnets goder", "En skriftlig avtale med staten", "Samtykke gitt ved folkeavstemning", "Samtykke man gir uten å vite hvem man er"],
      explanation: "Ved å ta imot fordelene (veier, eiendom, trygghet) aksepterer man forpliktelsene.",
    },
    {
      question: "Hvorfor trenger Locke begrepet om stilltiende samtykke?",
      options: ["Fordi de aller fleste aldri gir noe uttrykkelig samtykke — de er født inn i samfunnet", "Fordi uttrykkelig samtykke er forbudt ved lov", "Fordi stilltiende samtykke gir mer makt til staten", "Fordi Rawls krevde det"],
      explanation: "Uten stilltiende samtykke ville nesten ingen være forpliktet til å adlyde lovene.",
    },
    {
      question: "Hva skiller Lockes parter fra Rawls' parter når det gjelder informasjon?",
      options: ["Lockes parter samtykker med full informasjon om egen situasjon; Rawls' velger bak uvitenhetssløret", "Begge velger bak et uvitenhetsslør", "Lockes parter vet mindre enn Rawls' parter", "Ingen av dem vet noe om seg selv"],
      explanation: "Dette er den dypeste sammenligningsdimensjonen — informasjonsbetingelsen.",
    },
    {
      question: "Hva er den dypeste forskjellen mellom Lockes og Rawls' kontrakt?",
      options: ["Informasjonsbetingelsen — full informasjon (Locke) vs. uvitenhetsslør (Rawls)", "At Locke er eldre enn Rawls", "At Rawls skrev på engelsk og Locke på latin", "At Locke var britisk og Rawls amerikansk"],
      explanation: "Sløret er det som gir Rawls upartiske prinsipper; å stoppe ved «historisk vs. hypotetisk» er utilstrekkelig.",
    },
    {
      question: "Hva er Hume-kritikken av stilltiende samtykke?",
      options: ["At stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet, så det å bli er ikke et fritt valg", "At stilltiende samtykke gir for lite makt til staten", "At bare de rike kan gi stilltiende samtykke", "At samtykke aldri kan være bindende"],
      explanation: "Humes skipsbilde: å «kunne» hoppe i havet gjør ikke at man har samtykket til å bli om bord.",
    },
    {
      question: "Hva illustrerer Humes «skipsbilde»?",
      options: ["At en teoretisk mulighet til å forlate ikke gjør det å bli til et fritt samtykke", "At staten er som et skip med en kaptein", "At samfunnet alltid er i bevegelse", "At de svakeste alltid kastes over bord"],
      explanation: "En sovende mann om bord har ikke «samtykket» bare fordi han kunne ha kastet seg i havet.",
    },
    {
      question: "Hva er kontraktens formål ifølge Locke?",
      options: ["Å beskytte menneskenes naturlige rettigheter — liv, frihet og gods", "Å fordele goder likt mellom alle", "Å maksimere statens makt", "Å velge fordelingsprinsipper bak et slør"],
      explanation: "Staten er et middel til å verne rettigheter man har forut for staten.",
    },
    {
      question: "Hva er «naturlige rettigheter» hos Locke?",
      options: ["Rettigheter menneskene har forut for staten: liv, frihet og eiendom", "Rettigheter staten tildeler ved fødsel", "Prinsippene partene velger bak sløret", "Rettigheter bare naturfolk har"],
      explanation: "De finnes før staten; kontrakten skaper dem ikke, men beskytter dem.",
    },
    {
      question: "Hva hviler en regjerings legitimitet på ifølge Locke?",
      options: ["De styrtes fortsatte samtykke", "Statens militære overlegenhet", "En historisk engangsavtale", "Rawls' to prinsipper"],
      explanation: "Svikter regjeringen formålet eller blir tyrannisk, kan folket trekke samtykket tilbake.",
    },
    {
      question: "Hva er den typiske feilen (#8) i en Locke↔Rawls-sammenligning?",
      options: ["Ensidig sammenligning — bare det ene leddet, eller begge uten eksplisitte dimensjoner", "Å gjøre begge posisjoner presise", "Å sette opp eksplisitte dimensjoner", "Å nevne både likheter og forskjeller"],
      explanation: "En sammenligning krever begge posisjoner presise + felles akser de vurderes langs.",
    },
    {
      question: "Hvorfor er «historisk vs. hypotetisk» en utilstrekkelig sammenligningsdimensjon?",
      options: ["Fordi den ikke fanger hvorfor teoriene gir ulike resultater — det gjør informasjonsbetingelsen", "Fordi Locke ikke er historisk", "Fordi Rawls også er faktisk", "Fordi ingen av teoriene handler om tid"],
      explanation: "Det er sløret (informasjon), ikke det hypotetiske i seg selv, som gir Rawls upartiskhet.",
    },
    {
      question: "En innvandrer bruker landets veier og rettsvesen i årevis uten borgerskapsed. Er hun forpliktet ifølge Locke?",
      options: ["Ja — hun har gitt stilltiende samtykke ved å nyte godt av samfunnets goder", "Nei — uten uttrykkelig samtykke har hun ingen forpliktelser", "Ja — fordi Rawls' prinsipper krever det", "Nei — Locke gjelder bare innfødte borgere"],
      explanation: "Ved å ta imot fordelene aksepterer hun forpliktelsene, «så lenge hun nyter godene».",
    },
    {
      question: "Hva ville Hume innvendt mot at innvandreren har «samtykket»?",
      options: ["At samtykket er en fiksjon hvis hun ikke reelt kunne dratt et annet sted", "At hun burde gitt uttrykkelig samtykke", "At hun ikke har nytt nok av godene", "At bare staten kan gi samtykke"],
      explanation: "Mangler hun språk, midler eller nettverk andre steder, er det å bli ikke et fritt valg.",
    },
    {
      question: "Hva er «prinsippvalg vs. samtykke»-dimensjonen?",
      options: ["Rawls konstruerer fordelingsprinsipper; Locke verner førpolitiske rettigheter ved samtykke", "Begge konstruerer prinsipper", "Begge verner naturlige rettigheter", "Locke velger prinsipper, Rawls gir samtykke"],
      explanation: "Rawls skaper rettferdigheten; Locke beskytter rettigheter man allerede har.",
    },
    {
      question: "Hva er naturtilstanden hos Locke?",
      options: ["Tilstanden før det politiske samfunnet, der man har rettigheter men mangler felles dommer og håndhevelse", "Rawls' hypotetiske utgangsposisjon", "En tilstand av total lovløshet uten rettigheter", "Tilstanden etter at staten er avskaffet"],
      explanation: "Ulempene ved naturtilstanden er grunnen til at menneskene samtykker i å danne stat.",
    },
    {
      question: "Hva binder det store flertallet som aldri har gitt uttrykkelig samtykke?",
      options: ["Det stilltiende samtykket — utledet av at de nyter samfunnets goder", "Ingenting; de er ikke forpliktet", "Uvitenhetssløret", "En skriftlig kontrakt ved fødsel"],
      explanation: "Nettopp her setter Hume inn sin kritikk om at samtykket er fiktivt.",
    },
    {
      question: "Hva bør en A-besvarelse i sammenligningen fremheve som det subtile ekstra?",
      options: ["At forskjellen ligger i informasjonsbetingelsen (full informasjon vs. slør), ikke bare i tid/faktisitet", "At Locke levde lenge før Rawls", "At begge teoriene er kontraktteorier", "At Rawls' bok er lengre enn Lockes"],
      explanation: "Presist dimensjonsvalg — å velge informasjonsbetingelsen — er selvstendigheten sensor belønner.",
    },
    {
      question: "Hvorfor er staten «instrumentell» hos Locke?",
      options: ["Fordi den finnes for å beskytte de naturlige rettighetene, ikke som et mål i seg selv", "Fordi staten skal maksimere samlet nytte", "Fordi staten konstruerer rettferdigheten", "Fordi staten eier all eiendom"],
      explanation: "Derfor kan legitimiteten falle bort hvis staten svikter sitt formål.",
    },
    {
      question: "Hva kjennetegner et E-nivå-svar på kontrakt-sammenligningen?",
      options: ["Bare det ene leddet (Locke eller Rawls), eller begge gjengitt uten dimensjoner", "Begge presise + to eksplisitte dimensjoner + kort vurdering", "Begge korrekt, dimensjoner løst antydet", "Informasjonsbetingelsen valgt presist"],
      explanation: "A har eksplisitte dimensjoner inkl. informasjonsbetingelsen; C er korrekt men løst; E er ensidig.",
    },
    {
      question: "Hvilken likhet bør en balansert Locke↔Rawls-sammenligning også nevne?",
      options: ["At begge er kontraktteoretikere som begrunner autoritet ved en form for tilslutning og tar individet som utgangspunkt", "At begge bruker et uvitenhetsslør", "At begge avviser naturlige rettigheter", "At begge mener staten skal maksimere nytte"],
      explanation: "Et A-svar behandler både likheter og forskjeller; å bare fremheve forskjeller er ubalansert.",
    },
  ],
  'stv1100-2-4': [
    {
      question: "Hva er rettferdighet i staten for Platon?",
      options: ["Arbeidsdeling etter naturlige anlegg — hver gjør det han er best egnet til", "At alle borgere har like mye eiendom og makt", "At flertallet bestemmer gjennom avstemning", "At staten sikrer alle de samme grunnleggende kapabilitetene"],
      explanation: "Platons sentrale poeng: rettferdighet = arbeidsdeling etter anlegg, hver på sin rette plass. (Det siste alternativet er Nussbaum.)",
    },
    {
      question: "Hva er det *sentrale poenget* man må treffe i en redegjørelse for Platons rettferdighet?",
      options: ["Koblingen til naturlige anlegg — arbeidsdeling *etter egnethet*", "At staten har tre klasser", "At Platon skrev dialogen Staten", "At vokterne mangler eiendom"],
      explanation: "Effektiv arbeidsdeling finnes overalt; Platons poeng er at delingen følger medfødt egnethet. Mister man 'etter anlegg', mister man kjernen (feil #1).",
    },
    {
      question: "Hvilken dyd knytter Platon til de styrende (vokterne)?",
      options: ["Visdom", "Mot", "Måtehold", "Rettferdighet"],
      explanation: "Styrende–visdom, krigere–mot, produsenter–måtehold. Rettferdighet er helhetsdyden, ikke én gruppes dyd.",
    },
    {
      question: "Hvilken dyd hører til krigerne (hjelperne) i Platons stat?",
      options: ["Mot", "Visdom", "Måtehold", "Klokskap"],
      explanation: "Krigerne forsvarer staten; deres dyd er mot.",
    },
    {
      question: "Hvilken dyd hører til produsentene (næringsdrivende)?",
      options: ["Måtehold", "Mot", "Visdom", "Rettferdighet"],
      explanation: "Produsentene sørger for det materielle; deres dyd er måtehold.",
    },
    {
      question: "Hva er rettferdighet i staten *ikke* for Platon?",
      options: ["Én av de tre gruppenes særdyd, men helhetsdyden som holder delingen ren", "Arbeidsdeling etter anlegg", "At hver er på sin rette plass", "At ingen griper inn i andres oppgave"],
      explanation: "Rettferdighet er ikke visdom, mot eller måtehold, men ordenen som lar de tre gjøre sitt.",
    },
    {
      question: "Hvorfor fratar Platon vokterne privateiendom og familie?",
      options: ["For å hindre maktmisbruk — fjerne motivet til å styre for egen vinning", "For å spare penger til forsvaret", "Fordi eiendom er umoralsk for alle borgere", "Fordi vokterne skal være fattige som et ideal i seg selv"],
      explanation: "Uten personlig formue eller slekt å tilgodese mangler de styrende motivet til å misbruke makten; det er et middel mot maktmisbruk.",
    },
    {
      question: "Hva menes med at Platons rettferdighetsargument bygger på 'deskriptive antagelser + normative premisser'?",
      options: ["Det utleder rettferdighet fra faktapåstander om anlegg PLUSS verdipåstander om hva som bør være", "Det er rent beskrivende uten verdivurderinger", "Det er ren normativ postulering uten faktagrunnlag", "Det bygger utelukkende på religiøse premisser"],
      explanation: "Deskriptivt: mennesker er ulikt utrustet. Normativt: hver på sin plass er godt. Sammen gir de konklusjonen. Å se dette er et subtilt A-poeng.",
    },
    {
      question: "Et eksempel på en *deskriptiv antagelse* hos Platon er:",
      options: ["Mennesker er født ulikt utrustet for ulike oppgaver", "At hver bør være på sin rette plass", "At enhet er et gode", "At staten bør være rettferdig"],
      explanation: "Deskriptivt = hvordan verden faktisk er. Ulike anlegg er en faktapåstand; de øvrige er verdipåstander.",
    },
    {
      question: "Hva menes med 'enhet og enighet' i Platons stat?",
      options: ["At den velordnede staten er samstemt og 'går av seg selv'", "At alle borgere har identiske meninger påtvunget ovenfra", "At staten er militært samlet mot ytre fiender", "At alle eiendommer er felleseie"],
      explanation: "Enhet er resultatet av at arbeidsdelingen holdes ren: ingen strid om plassene, staten henger sammen som en organisme.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver langt om Platons idélære og hulelignelse i en oppgave om rettferdighet i staten?",
      options: ["#2 utenomsnakk/bredde i stedet for presisjon", "#1 miste det sentrale poenget", "#7 upresise begreper", "#8 ensidig sammenligning"],
      explanation: "Metafysikken er ikke det oppgaven spør om; å ramse den opp er breddesynsing (#2) som gir null uttelling.",
    },
    {
      question: "Hva er parallellen mellom staten og sjelen hos Platon?",
      options: ["Fornuft–mot–begjær i sjelen svarer til styrende–krigere–produsenter i staten", "Sjelen har fire deler som staten har fire klasser", "Sjelen er irrelevant for Platons politiske teori", "Sjelen styres av begjæret hos den rettferdige"],
      explanation: "Rettferdighet i sjelen er samme orden som i staten: fornuften (styrende) styrer, motet (krigere) og begjæret (produsenter) fyller sitt.",
    },
    {
      question: "Hvorfor bygger Platon opp *staten* før han behandler den enkelte sjel?",
      options: ["Fordi rettferdighet er lettere å se 'i stort' i staten enn 'i smått' i sjelen", "Fordi staten er viktigere enn individet moralsk sett", "Fordi sjelen ikke kan være rettferdig", "Fordi han bare er interessert i politikk, ikke etikk"],
      explanation: "Grepet er metodisk: se rettferdigheten i stort først, overfør så til den enkelte.",
    },
    {
      question: "I en sitattolkning (SIT): hvilken funksjon har utdraget om at 'mennesker er født ulike og egner seg for hver sin oppgave'?",
      options: ["Premiss — den deskriptive antagelsen arbeidsdelingen utledes fra", "Beskrivelse av resultatet (enhet)", "Begrunnelse av et middel mot maktmisbruk", "En illustrasjon uten argumentativ funksjon"],
      explanation: "Utsagnet om ulike anlegg er startpremisset som hele læren bygger på.",
    },
    {
      question: "Hva er den klassiske kjernefeilen (#1) i en Platon-redegjørelse?",
      options: ["Å beskrive staten uten koblingen til arbeidsdeling etter naturlige anlegg", "Å nevne de tre gruppene", "Å nevne vokternes eiendomsløshet", "Å sammenligne med Nussbaum"],
      explanation: "Uten 'etter anlegg' er det sentrale poenget mistet og redegjørelsen faller til svak.",
    },
    {
      question: "Hva er hovedskillet mellom Platon og Nussbaum i en sammenligning?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet (Nussbaum)", "Universelle prinsipper (Platon) vs. kulturbestemt fordeling (Nussbaum)", "Negativ frihet (Platon) vs. positiv frihet (Nussbaum)", "Hypotetisk kontrakt (Platon) vs. faktisk samtykke (Nussbaum)"],
      explanation: "Platon plasserer ulikt etter anlegg (hierarki); Nussbaum sikrer alle de samme kapabilitetene (likhet).",
    },
    {
      question: "Hvilket *fellespunkt* kan trekkes frem i en Platon–Nussbaum-sammenligning?",
      options: ["Begge vil at staten skal legge til rette for at menneskelige anlegg/evner utvikles (aristotelisk slektskap)", "Begge bygger rettferdighet på en samfunnskontrakt", "Begge avviser at mennesker er ulike", "Begge er relativister om verdier"],
      explanation: "Det aristoteliske slektskapet — staten skal utvikle menneskelige anlegg — er et presist fellespunkt som løfter sammenligningen.",
    },
    {
      question: "Hva gjør en Platon–Nussbaum-sammenligning *ensidig og svak* (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å navngi forskjell i anlegg vs. likhet", "Å bruke et fellespunkt", "Å holde begge posisjoner presise"],
      explanation: "En sammenligning uten eksplisitte dimensjoner er bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hva er vokternes *oppgave* i Platons stat?",
      options: ["Å styre staten med innsikt", "Å forsvare staten i krig", "Å dyrke jorda og drive handel", "Å velge nye borgere ved loddtrekning"],
      explanation: "De styrende (voktere i snever forstand) styrer med innsikt; forsvar er krigernes oppgave.",
    },
    {
      question: "Hvorfor er det viktig å presisere at vokternes eiendomsløshet er 'et middel', ikke en asketisk detalj?",
      options: ["Fordi det binder regelen til rettferdighetslæren: å fjerne privatinteresser holder de styrende på sin rette plass", "Fordi Platon egentlig var motstander av all eiendom", "Fordi det viser at Platon var fattig selv", "Fordi det er en tilfeldig kuriositet uten betydning"],
      explanation: "Regelen er mekanismen mot maktmisbruk og binder tilbake til at hver skal gjøre sitt — et subtilt A-poeng.",
    },
  ],
  'stv1100-2-5': [
    {
      question: "Hva måler Nussbaums kapabilitetstilnærming rettferdighet ut fra?",
      options: ["Hva folk faktisk er i stand til å være og gjøre (kapabiliteter)", "Hvor mye inntekt og formue folk har", "Hvor mange formelle rettigheter loven gir", "Hvor godt fordelt makten er mellom klasser"],
      explanation: "Nussbaum flytter målestokken fra ressurser/formelle rettigheter til reelle funksjonsmuligheter.",
    },
    {
      question: "Hva er sosial rettferdighet for Nussbaum?",
      options: ["At alle borgere har de artsbestemte kapabilitetene på plass over en terskel", "At alle har nøyaktig lik inntekt", "At flertallet bestemmer fordelingen", "At hver plasseres etter sine naturlige anlegg"],
      explanation: "Sentralt poeng (2025 b): kapabilitetene på plass, ikke bare formell frihet. (Siste alternativ er Platon.)",
    },
    {
      question: "Hva er forskjellen mellom en kapabilitet og en funksjon?",
      options: ["Kapabilitet = muligheten til å være/gjøre noe; funksjon = den faktiske utøvelsen", "Kapabilitet = utøvelsen; funksjon = muligheten", "De betyr det samme hos Nussbaum", "Kapabilitet er økonomisk, funksjon er politisk"],
      explanation: "Staten sikrer muligheten (kapabilitet); om du bruker den (funksjon) er ditt valg. Skillet verner valgfriheten.",
    },
    {
      question: "Hvorfor sikrer staten kapabiliteten, men ikke funksjonen, ifølge Nussbaum?",
      options: ["For å verne valgfriheten — du velger selv om du utøver muligheten", "Fordi funksjoner er umulige å måle", "Fordi staten mangler ressurser til begge", "Fordi funksjoner bare gjelder de rike"],
      explanation: "Å tvinge frem utøvelsen ville vært paternalistisk; å sikre muligheten respekterer den enkeltes valg.",
    },
    {
      question: "Hva menes med at kapabilitetene er 'artsbestemte'?",
      options: ["De knytter an til hva et menneskeliv er, på tvers av kulturer", "De bestemmes av hvilken art dyr man er", "De varierer helt fritt fra kultur til kultur", "De gjelder bare biologiske behov som mat og søvn"],
      explanation: "Artsbestemte = hører til det å være menneske; derfor gjelder listen for alle mennesker (universalisme).",
    },
    {
      question: "Hva er en 'terskel' i Nussbaums teori?",
      options: ["Et minstenivå av hver kapabilitet alle må komme over", "Grensen for hvor rike folk får lov å bli", "Antall kapabiliteter på listen", "Skillet mellom borgere og ikke-borgere"],
      explanation: "Under terskelen på en kapabilitet er man behandlet urettferdig, uansett rikdom ellers.",
    },
    {
      question: "Hvorfor holder det ikke, for Nussbaum, å gi alle formelle rettigheter?",
      options: ["Fordi rettigheter er tomme hvis folk ikke faktisk kan bruke dem", "Fordi rettigheter er umoralske", "Fordi bare staten skal ha rettigheter", "Fordi rettigheter alltid er ulikt fordelt"],
      explanation: "Sosial rettferdighet er et positivt krav på reelle muligheter, ikke bare fravær av formelle hindringer.",
    },
    {
      question: "Hva er 'universalisme' i Nussbaums teori?",
      options: ["At kapabilitetslisten gjelder alle mennesker på tvers av kulturer", "At hvert samfunn lager sin egen liste", "At alle skal ha lik inntekt", "At staten skal være universelt til stede"],
      explanation: "Universalisme = én felles liste for alle; gir et mål på urett, men risikerer verdiimperialisme. IKKE pluralisme.",
    },
    {
      question: "Hva er 'pluralisme/suverenitet' i Nussbaums teori?",
      options: ["At hvordan hver kapabilitet fylles ut, overlates til det enkelte samfunn", "At det finnes mange lister som konkurrerer", "At mange partier styrer sammen", "At alle verdier er like gyldige"],
      explanation: "Pluralisme = lokal spesifisering av utfyllingen. IKKE forveksles med universalisme — det er den flaggete feil #7.",
    },
    {
      question: "Hva er 'pragmatisk pluralisme' hos Nussbaum?",
      options: ["Universelle 'generelle målsettinger' spesifisert lokalt — universell liste, lokal utfylling", "At man velger pluralisme av praktiske grunner", "At listen forkastes til fordel for lokale verdier", "At bare de rike samfunnene får spesifisere"],
      explanation: "Grepet som prøver å holde universalisme og pluralisme samtidig: listen er felles, utfyllingen kulturbestemt.",
    },
    {
      question: "Hva er det subtile A-poenget om forholdet universalisme–pluralisme?",
      options: ["At det er en varig spenning Nussbaum forvalter, ikke et rent valg", "At Nussbaum forkaster universalismen", "At Nussbaum forkaster pluralismen", "At de to betyr det samme"],
      explanation: "Nussbaum vil ha begge; teorien lever med motsetningen. Å se dette som en spenning løfter til A.",
    },
    {
      question: "Hva skjer hvis man drar for hardt mot pluralisme (all utfylling blir lokal)?",
      options: ["Den universelle kjernen uthules — kulturer kan 'velge bort' kapabiliteter", "Universalismen blir sterkere", "Terskelen forsvinner ikke", "Ingenting endres"],
      explanation: "For mye lokal suverenitet fjerner den felles standarden mot urett.",
    },
    {
      question: "Hva skjer hvis man drar for hardt mot universalisme (streng felles liste)?",
      options: ["Lokal suverenitet presses — teorien risikerer verdiimperialisme", "Pluralismen blir sterkere", "Kapabilitetene forsvinner", "Terskelen heves automatisk"],
      explanation: "For streng universalisme påtvinger lokale samfunn en bestemt verdiforståelse.",
    },
    {
      question: "Hvordan begrunner Nussbaum kapabilitetslisten?",
      options: ["Aristotelisk — staten skal legge til rette for at menneskelige anlegg utvikles", "Ved en samfunnskontrakt bak et uvitenhetsslør", "Ved flertallsavstemning i hvert samfunn", "Ved henvisning til Platons idélære"],
      explanation: "Den aristoteliske begrunnelsen: kapabilitetene fanger hva menneskelig blomstring krever.",
    },
    {
      question: "Hva er hovedskillet mellom Nussbaum og Platon i en sammenligning?",
      options: ["Menneskelig likhet (Nussbaum) vs. forskjell i anlegg (Platon)", "Universelle prinsipper (Nussbaum) vs. kulturbestemt fordeling (Platon)", "Negativ (Nussbaum) vs. positiv frihet (Platon)", "Kontrakt (Nussbaum) vs. samtykke (Platon)"],
      explanation: "Nussbaum sikrer alle likt; Platon plasserer ulikt etter anlegg (hierarki).",
    },
    {
      question: "Hvilket fellespunkt har Nussbaum og Platon?",
      options: ["Begge mener staten skal legge til rette for at menneskelige anlegg/evner utvikles (aristotelisk)", "Begge bygger på en samfunnskontrakt", "Begge avviser at mennesker er ulike", "Begge er kulturrelativister"],
      explanation: "Det aristoteliske slektskapet er det presise fellespunktet i sammenligningen.",
    },
    {
      question: "Hva gjør en Nussbaum–Platon-sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å navngi likhet vs. forskjell i anlegg", "Å trekke frem det aristoteliske fellespunktet", "Å holde begge posisjoner presise"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hvilken feil begår en kandidat som kaller Nussbaum 'pluralist' uten å nevne den universelle listen?",
      options: ["#7 upresise begreper (universalisme/pluralisme)", "#1 miste det sentrale poenget", "#2 utenomsnakk", "#8 ensidig sammenligning"],
      explanation: "Å underslå at listen er universell er den flaggete presisjonsfeilen — Nussbaum holder begge sidene.",
    },
    {
      question: "Hvorfor kritiserer Nussbaum en ren ressurstilnærming?",
      options: ["Samme ressurser gir ulike reelle muligheter (helse, undertrykkelse osv.) — ressurser er middel, ikke mål", "Fordi ressurser ikke kan måles", "Fordi ressurser er umoralske", "Fordi bare staten bør eie ressurser"],
      explanation: "Det som teller er hva folk kan GJØRE med ressursene — altså kapabilitetene.",
    },
    {
      question: "Kroppslig integritet som kapabilitet brukes ofte for å vise:",
      options: ["At en kultur ikke kan 'velge den bort' — en grunn til den universelle listen", "At kapabiliteter bare er fysiske", "At funksjon er viktigere enn kapabilitet", "At terskelen er unødvendig"],
      explanation: "Trygghet mot vold og overgrep er et håndfast eksempel på hvorfor listen må være universell.",
    },
    {
      question: "I en sitattolkning: hva er funksjonen til et utdrag der Nussbaum sier 'listen gjelder alle, men utfyllingen overlates til hvert samfunn'?",
      options: ["Å uttrykke spenningen universalisme↔pluralisme (pragmatisk pluralisme)", "Å innføre kapabilitetslisten", "Å definere terskelen", "Å avvise universalismen helt"],
      explanation: "Utdraget viser hvordan Nussbaum holder begge samtidig — universell liste, lokal utfylling.",
    },
    {
      question: "Hva er det sentrale poenget man må treffe om sosial rettferdighet (2025 b)?",
      options: ["At alle har kapabilitetene på plass — ikke bare formell frihet", "At listen har akkurat ti punkter", "At Nussbaum bygger på Aristoteles", "At kapabilitet skilles fra funksjon"],
      explanation: "Kjernen i 2025 b: kapabilitetene på plass over en terskel, mer enn formelle rettigheter.",
    },
    {
      question: "Hvorfor er skillet kapabilitet/funksjon et subtilt A-poeng?",
      options: ["Det viser at teorien verner valgfrihet og unngår paternalisme", "Det viser at Nussbaum avviser frihet", "Det er et rent teknisk skille uten betydning", "Det gjør teorien til ren ressursteori"],
      explanation: "Ved å sikre muligheten (ikke tvinge utøvelsen) respekterer Nussbaum den enkeltes valg.",
    },
    {
      question: "Hva bør man IKKE gjøre i en Nussbaum-redegjørelse (feil #2)?",
      options: ["Dra inn løs 'godt liv'-filosofi uten å forankre i kapabilitetslisten og terskelen", "Nevne de artsbestemte kapabilitetene", "Definere sosial rettferdighet", "Skille universalisme fra pluralisme"],
      explanation: "Utenomsnakk uten forankring i apparatet er breddesynsing; presisjon slår bredde.",
    },
  ],
  'stv1100-2-6': [
    {
      question: "Hva bestemmer velferdens omfang for Walzer?",
      options: ["En kulturbestemt fellesbeslutning i fellesskapet («communal provision»)", "Et universelt rettferdighetsprinsipp", "Markedet alene", "De rikestes gavmildhet"],
      explanation: "Sentralt poeng: velferdens omfang er en kulturbestemt fellesbeslutning, ikke et universelt prinsipp — kontrasten til Rawls.",
    },
    {
      question: "Hva betyr «communal provision» hos Walzer?",
      options: ["Det fellesskapet i fellesskap sørger for til sine medlemmer", "Privat veldedighet organisert av kirken", "En universell minsteinntekt", "Markedets fordeling av goder"],
      explanation: "Communal provision = fellesskapets felles forsyning, hvis omfang bestemmes kulturbestemt.",
    },
    {
      question: "Hva er det sentrale poenget man må treffe om Walzer?",
      options: ["At velferdens omfang er en kulturbestemt fellesbeslutning", "At Walzer skrev Spheres of Justice", "At velferd bør finnes", "At markedet er urettferdig"],
      explanation: "Mister man 'kulturbestemt fellesbeslutning', mister man kjernen og kontrasten til Rawls (#1).",
    },
    {
      question: "Hva er hovedkontrasten mellom Rawls og Walzer?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesforståelse (Walzer)", "Negativ frihet (Rawls) vs. positiv frihet (Walzer)", "Hypotetisk (Rawls) vs. faktisk samtykke (Walzer)", "Ikke-dominans (Rawls) vs. dominans (Walzer)"],
      explanation: "Rawls søker prinsipper for alle samfunn bak sløret; Walzer forankrer fordelingen i det enkelte fellesskapets forståelser.",
    },
    {
      question: "Hvorfor er Walzer IKKE en ren relativist?",
      options: ["Han gir en pluralistisk, sfære-basert teori med indre kriterier i hver sfære", "Han mener alt er tilfeldig", "Han avviser at fordeling har prinsipper", "Han følger Rawls' universelle prinsipper"],
      explanation: "Ulike goder fordeles etter ulike sfære-egne prinsipper; urett er sfære-krenkelse. Det er pluralisme, ikke prinsippløshet.",
    },
    {
      question: "Hva er en 'fordelingssfære' hos Walzer?",
      options: ["Et område der et gode fordeles etter sitt eget prinsipp (helse etter behov, embeter etter dyktighet)", "En geografisk region", "En samfunnsklasse", "En periode i historien"],
      explanation: "Hver sfære har sitt fordelingsprinsipp; urett oppstår når ett godes logikk erobrer en annen sfære.",
    },
    {
      question: "Når oppstår urettferdighet i Walzers sfære-teori?",
      options: ["Når prinsippet fra én sfære trenger inn i en annen (penger kjøper helse eller makt)", "Når godene fordeles likt", "Når fellesskapet diskuterer omfanget", "Når staten sørger for velferd"],
      explanation: "Sfære-krenkelse — f.eks. rikdom som kjøper politisk makt — er kjernen i Walzers urettferdighetsbegrep.",
    },
    {
      question: "Hva menes med at borgerne 'stadig må diskutere' velferdens omfang?",
      options: ["Fordelingen er en pågående demokratisk forhandling som kan revideres", "Det finnes ingen fast fasit fordi ingen bryr seg", "Bare eksperter kan avgjøre spørsmålet", "Omfanget fastsettes én gang bak et uvitenhetsslør"],
      explanation: "Fordi omfanget er kulturbestemt og ikke gitt av et fast prinsipp, er det løpende omstridt — kontrast til Rawls' ferdige prinsipper.",
    },
    {
      question: "Hva er 'delte forståelser' (shared understandings) hos Walzer?",
      options: ["Fellesskapets felles meninger om hva godene er og betyr, som gir fordelingen dens kriterier", "En avtale undertegnet av alle borgere", "Rawls' refleksive likevekt", "Markedets prissignaler"],
      explanation: "Et gode fordeles rettferdig når fordelingen samsvarer med den delte forståelsen av godet.",
    },
    {
      question: "Hvordan skiller Rawls og Walzer seg i antall prinsipper?",
      options: ["Rawls har ett universelt prinsippsett; Walzer har mange sfære-egne prinsipper", "Begge har nøyaktig to prinsipper", "Walzer har ett, Rawls har mange", "Ingen av dem har prinsipper"],
      explanation: "Rawls: to prinsipper for alle goder. Walzer: ulike prinsipper i ulike sfærer.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver 'Walzer mener staten skal gi velferd' uten mer?",
      options: ["#1 miste det sentrale poenget (kulturbestemt fellesbeslutning)", "#4 hoppe over sitatutdrag", "#7 blande negativ og positiv frihet", "#3 unødig innledning"],
      explanation: "Alle velferdsteorier sier staten gir velferd; Walzers poeng er HVORDAN omfanget bestemmes.",
    },
    {
      question: "Hvordan kan Walzers communal provision belyse Pettits skille velferd vs. veldedighet (kap. 1.3)?",
      options: ["Velferd som fellesskapsforankret rettighet (ikke privat gave) fjerner dominansen ved veldedighet", "Den viser at veldedighet alltid er best", "Den avviser Pettits dominansbegrep", "Den gjør velferd overflødig"],
      explanation: "Fordi omfanget er en fellesbeslutning, blir velferd en rettighet — ikke privat gavmildhet som gjør mottakeren dominert.",
    },
    {
      question: "Hva gjør en Rawls–Walzer-sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge uten å navngi dimensjonene de skiller lag på", "Å navngi universelt vs. kulturbestemt", "Å holde begge posisjoner presise", "Å trekke inn sfære-pluralismen"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser satt ved siden av hverandre.",
    },
    {
      question: "Hva er en mulig innvending mot Walzers kulturbestemte fordeling?",
      options: ["Den kan legitimere urett som fellesskapet selv godtar", "Den er for universell", "Den ignorerer alle kulturforskjeller", "Den bygger på et uvitenhetsslør"],
      explanation: "En kulturbestemt standard mangler et upartisk ankerpunkt mot urett som er innbakt i fellesskapets egne forståelser.",
    },
    {
      question: "Hva er en styrke ved Walzers tilnærming sammenlignet med Rawls?",
      options: ["Realisme og respekt for fellesskapets egen selvforståelse", "At den gir ett universelt svar", "At den abstraherer fra faktiske forståelser", "At den fjerner all uenighet"],
      explanation: "Walzer forankrer fordeling i faktiske delte forståelser i stedet for i en abstrakt valgsituasjon.",
    },
    {
      question: "I hvilken sammenheng dukket Walzer opp i H2016-oppgaven?",
      options: ["Athenernes «communal provision» som avvik fra Walzer", "Berlin vs. Pettit-frihetsoppgaven", "Machiavellis Fyrsten", "Nussbaums kapabiliteter"],
      explanation: "H2016 c brukte athenernes communal provision som et case knyttet til Walzer.",
    },
    {
      question: "I en sitattolkning: hva er funksjonen til et utdrag der Walzer sier 'ulike goder fordeles etter ulike prinsipper, og urett er når ett erobrer et annet'?",
      options: ["Å uttrykke den pluralistiske, sfære-baserte teorien (Walzer er ikke ren relativist)", "Å innføre communal provision", "Å beskrive fellesdiskusjonen", "Å avvise at fordeling har prinsipper"],
      explanation: "Utdraget viser sfære-pluralismen og presiserer kontrasten til Rawls' ene prinsippsett.",
    },
    {
      question: "Hvorfor bør man plassere Walzer opp mot Rawls i en eksamensbesvarelse?",
      options: ["Fordi det er der eksamensrelevansen ligger — Walzer opptrer nesten alltid som kontrastfigur", "Fordi Walzer ikke kan forstås alene", "Fordi Rawls bygger på Walzer", "Fordi de er enige om alt"],
      explanation: "Å beskrive Walzer isolert uten Rawls-kontrasten er utenomsnakk (#2); kontrasten er poenget.",
    },
  ],
  'stv1100-2-prove': [
    {
      question: "Hva kaller Rawls sin egen rettferdighetsteori?",
      options: ["Rettferdighet som rimelighet (justice as fairness)", "Rettferdighet som arbeidsdeling", "Kapabilitetstilnærmingen", "Communal provision"],
      explanation: "Rimeligheten ligger i valgsituasjonens upartiskhet (utgangsposisjonen bak sløret).",
    },
    {
      question: "Hva er utgangsposisjonen (original position)?",
      options: ["Den tenkte valgsituasjonen der partene velger rettferdighetsprinsipper", "En historisk avtale mellom borgerne", "Fellesskapets delte forståelse av goder", "De styrendes plass i staten"],
      explanation: "Sammen med uvitenhetssløret er den kjernen i Rawls' apparat.",
    },
    {
      question: "Hva er uvitenhetssløret?",
      options: ["At partene ikke kjenner egen posisjon, evner eller livssyn", "At folket holdes uvitende av staten", "At man ikke vet hva andre samfunn gjør", "Beslutningsregelen under usikkerhet"],
      explanation: "Sløret sikrer upartiskhet. Beslutningsregelen er maximin — ikke forveksle.",
    },
    {
      question: "Hva er maximin-regelen?",
      options: ["Velg alternativet med best verst-tenkelig utfall", "Maksimer den samlede nytten", "Velg det mest sannsynlige utfallet", "Sikre de rikeste mot tap"],
      explanation: "Rasjonelt under radikal usikkerhet: sikre deg mot det verste dersom du havner nederst.",
    },
    {
      question: "Hva gjør uvitenhetssløret med 'trussel-fordel' (threat advantage)?",
      options: ["Det nøytraliserer den — ingen kan skreddersy prinsipper til egen fordel", "Det forsterker den", "Det gir de sterke mer makt", "Det har ingen virkning på forhandlingsmakt"],
      explanation: "Uten kjennskap til egen posisjon kan ingen presse gjennom prinsipper som favoriserer seg selv.",
    },
    {
      question: "Hva sier forskjellsprinsippet?",
      options: ["Ulikheter tillates kun hvis de er til størst fordel for de dårligst stilte", "Alle skal ha nøyaktig like mye", "Ulikheter er alltid urettferdige", "De med mest talent fortjener mest"],
      explanation: "Kjernen i Rawls' fordelingsrettferdighet (prinsipp 2b).",
    },
    {
      question: "Hva betyr den leksikalske forrangen?",
      options: ["Prinsipp 1 før 2a før 2b — frihet kan ikke ofres for velferd", "At prinsippene rangeres alfabetisk", "At forskjellsprinsippet kommer først", "At alle prinsipper veier likt"],
      explanation: "Frihet før sjanselikhet før forskjellsprinsipp — et subtilt A-poeng.",
    },
    {
      question: "Hva er sosiale primærgoder?",
      options: ["Godene enhver rasjonell person vil ha uansett livsplan (rettigheter, inntekt, selvrespekt)", "Kun materielle goder som mat og bolig", "De godene de rike ønsker seg", "Kapabiliteter på Nussbaums liste"],
      explanation: "Målestokken for hvem som er 'dårligst stilt'.",
    },
    {
      question: "Hvorfor er det naturlige/sosiale lotteriet relevant for Rawls?",
      options: ["Talent og fødsel er moralsk vilkårlige — det begrunner forskjellsprinsippet", "Det viser at ulikhet er naturlig og rettferdig", "Det er irrelevant for teorien", "Det begrunner frihetsprinsippet"],
      explanation: "Ufortjente forskjeller skal ikke uten videre avgjøre folks kår.",
    },
    {
      question: "Er Rawls' kontrakt en historisk avtale?",
      options: ["Nei — et hypotetisk prinsippvalg, 'kontraktteori hevet til et høyere abstraksjonsnivå'", "Ja, en avtale inngått i fortiden", "Ja, en avtale som fornyes årlig", "Nei, men et faktisk pågående samtykke"],
      explanation: "Rawls velger prinsipper, ikke et faktisk styre. (Faktisk pågående samtykke er Locke.)",
    },
    {
      question: "Hva er det sentrale poenget en Rawls-redegjørelse ikke får mangle?",
      options: ["Utgangsposisjonen + uvitenhetssløret", "De tre gruppene", "Communal provision", "Skadeprinsippet"],
      explanation: "Rawls uten sløret/utgangsposisjonen er den klassiske kjernefeilen (#1).",
    },
    {
      question: "Hva er et subtilt A-poeng om uvitenhetssløret?",
      options: ["At ulike deler av sløret er ulikt godt teoretisk motivert", "At sløret dekker absolutt alt likt godt", "At sløret er det samme som maximin", "At sløret er en historisk kjensgjerning"],
      explanation: "Det veiledningen flagger som 'veldig bra' — nyansen som løfter til A.",
    },
    {
      question: "Hva er refleksiv likevekt?",
      options: ["At prinsipper og veloverveide oppfatninger justeres mot hverandre til de stemmer", "En avstemning blant borgerne", "Maximin under usikkerhet", "Balansen mellom de tre klassene"],
      explanation: "Rawls' metode: gjensidig tilpasning, ikke ren deduksjon.",
    },
    {
      question: "I Rawls-sitatoppgaven: hva er funksjonen til et utdrag om at 'partene ikke vet hvilken plass de vil få'?",
      options: ["Uvitenhetssløret — premiss/apparat som sikrer upartiskhet", "Maximin-regelen", "Det naturlige lotteriet", "Refleksiv likevekt"],
      explanation: "Utdraget beskriver sløret, ikke beslutningsregelen.",
    },
    {
      question: "I Rawls-sitatoppgaven: hva er funksjonen til et utdrag om at 'talent og fødsel er moralsk vilkårlig'?",
      options: ["Begrunnelsen for forskjellsprinsippet (det naturlige/sosiale lotteriet)", "Uvitenhetssløret", "Maximin", "Frihetsprinsippet"],
      explanation: "Det moralsk vilkårlige lotteriet er premisset for forskjellsprinsippet.",
    },
    {
      question: "Hva er den alvorligste feilen i en [A]–[D] sitatoppgave?",
      options: ["Å hoppe over ett eller flere utdrag (#4)", "Å tolke alle fire", "Å plassere utdragene i helheten", "Å bruke presise begreper"],
      explanation: "Behandle ALLE utdrag — å hoppe over noen svekker svaret vesentlig.",
    },
    {
      question: "Hva er kjernekontrasten mellom Rawls og Locke?",
      options: ["Hypotetisk prinsippvalg bak slør (Rawls) vs. faktisk pågående samtykke med full informasjon (Locke)", "Negativ vs. positiv frihet", "Universelt vs. kulturbestemt", "Klok vs. etisk politikk"],
      explanation: "Informasjonsbetingelsen (slør vs. full informasjon) er den presise dimensjonen.",
    },
    {
      question: "Hva er stilltiende (tacit) samtykke hos Locke?",
      options: ["Den som nyter samfunnets goder har samtykket underforstått", "Et eksplisitt undertegnet dokument", "Et samtykke gitt bak uvitenhetssløret", "Fellesskapets kulturbestemte beslutning"],
      explanation: "IKKE bland med uttrykkelig samtykke (#7).",
    },
    {
      question: "Hva går Hume-kritikken av Locke ut på?",
      options: ["Stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet", "Locke overser de dårligst stilte", "Locke bruker et uvitenhetsslør", "Locke er for universalistisk"],
      explanation: "Rammer Locke (faktisk samtykke), ikke Rawls.",
    },
    {
      question: "Hva er den presise sammenligningsdimensjonen mellom Locke og Rawls?",
      options: ["Informasjonsbetingelsen: full informasjon (Locke) vs. slør (Rawls)", "Antall rettferdighetsprinsipper", "Synet på privat eiendom", "Synet på ytringsfrihet"],
      explanation: "Å velge informasjonsbetingelsen som dimensjon er det presise, A-givende grepet — mer enn bare 'historisk vs. hypotetisk'.",
    },
    {
      question: "Hva er det sentrale poenget i Platons rettferdighet?",
      options: ["Arbeidsdeling etter naturlige anlegg — hver på sin rette plass", "At flertallet bestemmer", "At alle sikres kapabiliteter", "Kulturbestemt fellesbeslutning"],
      explanation: "Mister man 'etter anlegg', faller redegjørelsen (#1).",
    },
    {
      question: "Hvilke tre grupper har Platons stat?",
      options: ["Produsenter, krigere, styrende (voktere)", "Fattige, middelklasse, rike", "Borgere, slaver, fremmede", "Fornuft, mot, begjær"],
      explanation: "Produsenter–måtehold, krigere–mot, styrende–visdom. (Fornuft/mot/begjær er sjelsparallellen.)",
    },
    {
      question: "Hvorfor fratar Platon vokterne eiendom og familie?",
      options: ["For å hindre maktmisbruk — fjerne motivet til å styre for egen vinning", "For å spare penger", "Fordi all eiendom er umoralsk", "For å gjøre dem fattige som ideal"],
      explanation: "Et middel mot maktmisbruk, ikke en asketisk detalj.",
    },
    {
      question: "Hva menes med at Platons argument er 'deskriptivt + normativt'?",
      options: ["Det utleder rettferdighet fra faktapåstander (ulike anlegg) PLUSS verdipåstander (hver på sin plass er godt)", "Det er rent beskrivende", "Det er ren normativ postulering", "Det bygger på religiøse premisser"],
      explanation: "Å se at teorien bygges, ikke bare hevdes, er et subtilt A-poeng.",
    },
    {
      question: "Hva måler Nussbaums kapabilitetstilnærming rettferdighet ut fra?",
      options: ["Hva folk faktisk er i stand til å være og gjøre (kapabiliteter)", "Ressurser og inntekt alene", "Formelle rettigheter alene", "Fellesskapets delte forståelser"],
      explanation: "Reell mulighet, ikke ressurser eller formell frihet.",
    },
    {
      question: "Hva er sosial rettferdighet for Nussbaum?",
      options: ["At alle har de artsbestemte kapabilitetene på plass over en terskel", "At alle har lik inntekt", "At hver plasseres etter anlegg", "Kulturbestemt fellesbeslutning"],
      explanation: "Kapabilitetene på plass, ikke bare formell frihet (2025 b).",
    },
    {
      question: "Hva er skillet universalisme/pluralisme hos Nussbaum?",
      options: ["Én liste for alle (universalisme) vs. lokal spesifisering av utfyllingen (pluralisme)", "To ulike lister", "Ressurser vs. kapabiliteter", "Kapabilitet vs. funksjon"],
      explanation: "Nussbaum holder begge (pragmatisk pluralisme). IKKE bland dem (#7).",
    },
    {
      question: "Hva er det subtile A-poenget om universalisme–pluralisme hos Nussbaum?",
      options: ["At det er en varig spenning hun forvalter, ikke et rent valg", "At hun forkaster universalismen", "At hun forkaster pluralismen", "At de betyr det samme"],
      explanation: "Å se dette som en spenning viser forståelse av strukturen.",
    },
    {
      question: "Hva er hovedkontrasten mellom Platon og Nussbaum (2025 c)?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet (Nussbaum)", "Universelt vs. kulturbestemt", "Negativ vs. positiv frihet", "Kontrakt vs. samtykke"],
      explanation: "Platon plasserer ulikt etter anlegg (hierarki); Nussbaum sikrer alle likt.",
    },
    {
      question: "Hvilket fellespunkt har Platon og Nussbaum?",
      options: ["Begge vil at staten skal legge til rette for at menneskelige anlegg utvikles (aristotelisk)", "Begge bygger på en samfunnskontrakt", "Begge er kulturrelativister", "Begge avviser ulikhet"],
      explanation: "Det aristoteliske slektskapet er det presise fellespunktet.",
    },
    {
      question: "Hva bestemmer velferdens omfang for Walzer?",
      options: ["En kulturbestemt fellesbeslutning ('communal provision')", "Et universelt prinsipp", "Markedet alene", "De rikestes gavmildhet"],
      explanation: "Kontrasten til Rawls: kulturbestemt, ikke universelt.",
    },
    {
      question: "Hvorfor er Walzer ikke en ren relativist?",
      options: ["Han gir en pluralistisk, sfære-basert teori med indre kriterier", "Han mener alt er tilfeldig", "Han følger Rawls' prinsipper", "Han avviser all fordeling"],
      explanation: "Ulike goder, ulike sfære-egne prinsipper; urett = sfære-krenkelse.",
    },
    {
      question: "Hva er hovedkontrasten mellom Rawls og Walzer?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesforståelse (Walzer)", "Negativ vs. positiv frihet", "Klok vs. etisk politikk", "Kapabilitet vs. funksjon"],
      explanation: "Rawls søker prinsipper for alle samfunn; Walzer forankrer i det enkelte fellesskapet.",
    },
    {
      question: "Hvilken feil er felles for 'Platon uten arbeidsdeling', 'Nussbaum uten kapabiliteter på plass' og 'Walzer uten communal provision'?",
      options: ["#1 miste det sentrale poenget", "#4 hoppe over utdrag", "#7 upresise begreper", "#3 unødig innledning"],
      explanation: "Hver tenker har et definert kjernepoeng som må treffes.",
    },
    {
      question: "Hva gjør en sammenligning ensidig og svak (feil #8)?",
      options: ["Å gjengi begge tenkerne uten å navngi dimensjonene de skiller lag på", "Å navngi dimensjonene", "Å holde begge presise", "Å trekke inn et fellespunkt"],
      explanation: "Uten eksplisitte dimensjoner er det bare to redegjørelser ved siden av hverandre.",
    },
    {
      question: "Hva er den feministiske kritikken av Rawls (drøftingsressurs)?",
      options: ["Uvitenhetssløret dekker ikke kjernefamilien, så urett innad i familien overses", "At forskjellsprinsippet er for radikalt", "At maximin favoriserer kvinner", "At primærgodene er kjønnsnøytrale"],
      explanation: "En forankret innvending for HYB-delen — løfter over ren synsing.",
    },
    {
      question: "I en HYB-oppgave om forskjellsprinsippet: hva kjennetegner E-nivå?",
      options: ["Ren gjengivelse uten innvending, eller fri synsing uten forankring", "Forankret innvending + forbeholden vurdering", "Redegjørelse + én pensum-kritiker", "Presis bruk av begreper"],
      explanation: "#8: ren gjengivelse der oppgaven ber om drøfting.",
    },
    {
      question: "Hvordan kobler Walzers communal provision til Pettit (kap. 1.3)?",
      options: ["Velferd som fellesskapsforankret rettighet fjerner dominansen ved privat veldedighet", "Den avviser Pettits dominansbegrep", "Den gjør velferd overflødig", "Den støtter privat veldedighet"],
      explanation: "Fordi omfanget er en fellesbeslutning, blir velferd en rettighet, ikke dominerende gave.",
    },
    {
      question: "Hva kjennetegner et A-svar i Del 2 ifølge vurderingsaksene?",
      options: ["Sentrale poeng truffet presist + minst ett subtilt ekstrapoeng og/eller selvstendig sammenligning", "Lengst mulig besvarelse", "Bredest mulig dekning av filosofihistorien", "Grundig innledning og avslutning"],
      explanation: "Helhetsvurdering: treff kjernen + subtilitet/selvstendighet, ikke lengde.",
    },
    {
      question: "Hva er kalibreringsregelen som gjelder alle Del 2-svar om innledning/avslutning?",
      options: ["Gå rett på sak — ingen innledning, avslutning eller litteraturhenvisninger", "Alltid ha en fyldig innledning", "Avslutt med egen livsanskuelse", "Sitér pensum i lengde"],
      explanation: "Oppvarming er bortkastet i et 4-timers essayfag (#3).",
    },
  ],
  'stv1100-3-1': [
    {
      question: "Hva er det *sentrale poenget* i Machiavellis behandling av moral og politikk?",
      options: ["At han *skiller* to spørsmål: hva som er klok (virksom) politikk og hva som er etisk akseptabel politikk", "At all politikk nødvendigvis er umoralsk", "At moral aldri spiller noen rolle i noe menneskelig liv", "At fyrsten alltid bør handle moralsk godt"],
      explanation: "Kjernen er atskillelsen av «virker det?» fra «er det rett?» — ikke en fordømmelse eller avvisning av moral.",
    },
    {
      question: "Hva betyr «klok politikk» hos Machiavelli?",
      options: ["Instrumentelt rasjonell politikk — handling vurdert etter om midlene virker", "Politikk som er moralsk dydig", "Politikk styrt av religiøse bud", "Politikk som alltid holder løfter"],
      explanation: "Klok politikk er en beskrivelse av det virksomme, ikke en moralsk anbefaling.",
    },
    {
      question: "Hva betyr *virtù* hos Machiavelli?",
      options: ["Fyrstens handlekraft, mot og evne til å gripe muligheter", "Moralsk dyd og godhet", "Religiøs fromhet", "Fravær av forsettlig innblanding"],
      explanation: "Virtù er dyktighet/handlekraft — ikke «dyd» i moralsk forstand. «Fravær av forsettlig innblanding» er Berlins negative frihet, ikke Machiavelli.",
    },
    {
      question: "Hva er *Fortuna* hos Machiavelli?",
      options: ["Tilfeldigheten/skjebnen fyrsten ikke rår over — som virtù forsøker å temme", "Fyrstens dyktighet og handlekraft", "En moralsk plikt", "Statens hovedoppgave"],
      explanation: "Fortuna er det uforutsette; virtù er evnen til å temme den. Ikke bland Fortuna (flaks) med virtù (dyktighet).",
    },
    {
      question: "Hva kjennetegner «god bruk av grusomhet» hos Machiavelli?",
      options: ["Grusomhet gjort på én gang, samlet, av nødvendighet, og deretter avviklet til undersåttenes nytte", "Grusomhet som er liten i starten men vokser og gjentas", "Grusomhet begrunnet i religion", "Grusomhet som alltid er moralsk forsvarlig"],
      explanation: "God bruk er samlet og engangs; dårlig bruk er stadig og eskalerende. Skillet er instrumentelt (klok politikk).",
    },
    {
      question: "Hva er «dårlig bruk av grusomhet»?",
      options: ["Grusomhet som er liten i begynnelsen men vokser og gjentas over tid", "Grusomhet gjort samlet og av nødvendighet", "All grusomhet uansett form", "Grusomhet fyrsten angrer på"],
      explanation: "Dårlig bruk holder fyrsten i evig utrygghet og undergraver makten; god bruk er avgrenset og fester den.",
    },
    {
      question: "Machiavellis amoralisme er best beskrevet som:",
      options: ["Politisk amoralisme — avgrenset til statskunsten, ikke moralen generelt", "Generell amoralisme — moral gjelder overhodet ikke", "Religiøs moralisme", "Ren pasifisme"],
      explanation: "Feilkode #7: å tillegge ham *generell* amoralisme gjør ham til en karikatur. Han avgrenser unntaket til statskunsten.",
    },
    {
      question: "Hva er *generell* amoralisme — som Machiavelli IKKE forsvarer?",
      options: ["Påstanden at moral overhodet ikke gjelder, verken i politikk eller privatliv", "Påstanden at statskunsten har sin egen logikk som kan bryte alminnelig moral", "At fyrsten bør fremstå som moralsk", "At grusomhet kan brukes godt"],
      explanation: "Machiavelli forsvarer *politisk* (avgrenset) amoralisme, ikke generell (universell) amoralisme.",
    },
    {
      question: "Hva er det vanskeligste, mest A-givende poenget i en Machiavelli-oppgave?",
      options: ["Å se at han *veksler* mellom rendyrket konsekvensialisme og et deontologisk innslag", "Å gjengi flest mulig harde råd fra Fyrsten", "Å fordømme Machiavelli moralsk", "Å datere Fyrsten korrekt"],
      explanation: "Vekslingen (ikke en endimensjonal lesning) er det subtile ekstra poenget som løfter til A.",
    },
    {
      question: "Hva er *rendyrket konsekvensialisme* i Machiavelli-sammenheng?",
      options: ["At handlingen bedømmes kun etter utfallet — målet helliger midlet", "At enkelte handlinger fordømmes i seg selv uansett utfall", "At moral er absolutt og unntaksfri", "At fyrsten alltid bør holde løfter"],
      explanation: "Konsekvensialisme = bare utfallet teller. Motsatsen (handlinger forbudt i seg selv) er det deontologiske innslaget.",
    },
    {
      question: "Hva menes med Machiavellis *deontologiske innslag*?",
      options: ["At enkelte handlinger fordømmes i seg selv, uavhengig av utfallet", "At bare utfallet av handlingen teller", "At all grusomhet er tillatt", "At moral aldri gjelder i politikk"],
      explanation: "Utdraget «makt, men ikke ære» viser en dom over handlingen som konsekvensregnestykket ikke opphever.",
    },
    {
      question: "Utdrag [B]: «Den som når makten ved svik og grusomhet mot venner kan vinne herredømme, men ikke ære.» Hvilken funksjon har utdraget?",
      options: ["Det viser det deontologiske innslaget — en moralsk grense i seg selv som utfallet ikke opphever", "Det viser ren konsekvensialisme — bare utfallet teller", "Det er en tom retorisk floskel uten funksjon", "Det viser at Machiavelli er generelt amoralsk"],
      explanation: "«Makt, men ikke ære» er nøkkelutdraget mot feilkode #10 — beviset på vekslingen.",
    },
    {
      question: "Utdrag [A]: «Grusomhet godt brukt er den som skjer på én gang, av nødvendighet.» Hvilken funksjon har utdraget?",
      options: ["Det er et premiss i den kloke (instrumentelle) politikken — et effektivitetskriterium, ikke et moralsk", "Det er et deontologisk forbud mot grusomhet", "Det viser at Machiavelli fordømmer all grusomhet", "Det er en moralsk anbefaling om godhet"],
      explanation: "Kriteriet god/dårlig gjelder hva som *virker* for å feste makten — den konsekvensialistiske siden av vekslingen.",
    },
    {
      question: "Utdrag [C]: «En fyrste bør synes barmhjertig og tro, men ha sinnet beredt til det motsatte når nødvendigheten byder det.» Hva viser utdraget?",
      options: ["Å *fremstå* som moralsk — klok politikk anvendt på fyrstens omdømme", "At fyrsten faktisk bør være moralsk god", "Et deontologisk forbud mot løgn", "At Fortuna styrer alt"],
      explanation: "Dydens *utseende* tjener maktens formål — et tydelig sted der «virker det?» skilles fra «er det rett?».",
    },
    {
      question: "Hvorfor bør fyrsten ifølge Machiavelli heller være fryktet enn elsket, hvis han må velge?",
      options: ["Fordi kjærlighet holdes av et bånd folk bryter når det passer dem, mens frykt holdes av straffens trussel", "Fordi frykt er moralsk mer verdifullt enn kjærlighet", "Fordi Gud krever det", "Fordi elskede fyrster alltid taper krig"],
      explanation: "Rådet er instrumentelt — men fyrsten bør bli fryktet *uten* å bli hatet.",
    },
    {
      question: "Hva er feilkode #10 i Machiavelli-oppgaver?",
      options: ["Å behandle Machiavelli endimensjonalt — som ren amoralist/konsekvensialist uten vekslingen", "Å hoppe over et sitatutdrag", "Å skrive for kort", "Å blande Berlin og Pettit"],
      explanation: "#10 er den machiavelli-spesifikke fellen: å miste vekslingen mot det deontologiske innslaget.",
    },
    {
      question: "Hvem er Cesare Borgia i *Fyrsten*?",
      options: ["Fyrsteeksemplet på stor virtù og «god bruk av grusomhet» — felt til slutt av Fortuna", "En filosof Machiavelli kritiserer", "Forfatteren av Fyrsten", "En fyrste som var ren pasifist"],
      explanation: "Borgia illustrerer både klok politikk (virtù, god grusomhet i Romagna) og virtùs grense mot tilfeldigheten (sykdom).",
    },
    {
      question: "Hva innebærer skillet mellom *omdømme* og *realitet* hos Machiavelli?",
      options: ["At det virksomme er å styre inntrykket av dyd, mens man handler etter nødvendigheten", "At fyrsten alltid må være det han utgir seg for", "At omdømme er uten betydning", "At realiteten alltid vinner over inntrykket"],
      explanation: "Fordi de fleste dømmer etter det de ser, kan et godt omdømme opprettholdes tross umoralske handlinger.",
    },
    {
      question: "Hva er «nødvendigheten» (necessità) hos Machiavelli?",
      options: ["Det omstendighetene tvinger fyrsten til — broen mellom lovmessighetene og de harde rådene", "En moralsk plikt til å holde løfter", "Fyrstens personlige begjær", "Fravær av innblanding"],
      explanation: "Fyrsten holder løfter når han kan, men bryter dem «når nødvendigheten byder det».",
    },
    {
      question: "Hvorfor er løftebrudd noen ganger *klok* politikk ifølge Machiavelli?",
      options: ["Fordi mennesker er upålitelige og ikke holder ord overfor fyrsten; løftetroskap er et middel, ikke en absolutt plikt", "Fordi løfter aldri har noen verdi", "Fordi religionen krever det", "Fordi Fortuna forbyr løfter"],
      explanation: "Dette er en av de tydeligste konsekvensialistiske passasjene — troskap veies mot nytte.",
    },
    {
      question: "Hva hviler Machiavellis harde råd på?",
      options: ["Et pessimistisk menneskesyn: mennesker er egeninteresserte, upålitelige og styrt av frykt/begjær", "Et optimistisk syn på menneskets godhet", "En religiøs åpenbaring", "En matematisk modell"],
      explanation: "Menneskesynet er premisset som gjør løftebrudd, frykt og grusomhet til *klok* (ikke ond) politikk.",
    },
    {
      question: "Hva er forholdet mellom virtù og Fortuna?",
      options: ["Virtù er dyktigheten som forsøker å temme Fortuna (tilfeldigheten) — som demninger mot en flom", "Virtù og Fortuna er samme ting", "Fortuna er fyrstens dyktighet", "Virtù er skjebnen fyrsten ikke rår over"],
      explanation: "Fortuna rår over omtrent halvparten; virtù griper den andre. Ikke bland de to begrepene.",
    },
    {
      question: "Hva menes med «lovmessighet i det politiske liv» hos Machiavelli?",
      options: ["At politikken har regelmessigheter (menneskers atferd, frykt, maktens dynamikk) man kan lese og bruke", "At politikk styres av moralske lover", "At Gud bestemmer alt i politikken", "At politikk er helt tilfeldig"],
      explanation: "Klok politikk er å lese disse lovmessighetene og handle effektivt — derfor kan Fyrsten leses som en maktens håndbok.",
    },
    {
      question: "En kandidat skriver: «Machiavelli mener moral er meningsløst tull.» Hvilken feil begår han?",
      options: ["Feilkode #7 — han blander politisk og generell amoralisme og karikerer Machiavelli som nihilist", "Feilkode #4 — han hopper over et utdrag", "Ingen feil — dette er en korrekt lesning", "Feilkode #3 — unødig innledning"],
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
      options: ["Å forby en mening kan være å forby sannheten, siden vi kan ta feil (antar ellers egen ufeilbarlighet)", "At falske meninger må forbys raskt", "At flertallet alltid har rett", "At staten bør avgjøre hva som er sant"],
      explanation: "Argument 1 dekker tilfellet der den undertrykte meningen er *sann* — feilbarligheten er kjernen.",
    },
    {
      question: "Hva er Mills andre argument (meningsbryting)?",
      options: ["En avvikende mening er ofte delvis sann; bare kollisjon foredler helheten", "At all sannhet allerede eies av flertallet", "At debatt bare sprer forvirring", "At bare eksperter bør ytre seg"],
      explanation: "Argument 2 dekker tilfellet der den undertrykte meningen er *delvis* sann.",
    },
    {
      question: "Hva er Mills tredje argument (den anti-dogmatiske funksjonen)?",
      options: ["Selv en helt sann herskende mening blir et dødt dogme uten motstand", "At falske meninger må høres", "At sannhet aldri kan oppnås", "At staten må beskytte sannheten mot kritikk"],
      explanation: "Argument 3 gjelder selv når den herskende meningen er *helt sann* — den trenger motstand for å forbli levende.",
    },
    {
      question: "Hvilket logisk tilfelle dekker Mills argument 3?",
      options: ["Den herskende meningen er helt sann (den undertrykte er falsk)", "Den undertrykte meningen er sann", "Den undertrykte meningen er delvis sann", "Ingen har noen mening"],
      explanation: "De tre argumentene dekker tre tilfeller: sann / delvis sann / herskende helt sann.",
    },
    {
      question: "Hva er et «dødt dogme» hos Mill?",
      options: ["En sann overbevisning holdt uten forståelse av grunnene — som en arvet fordom", "En bevist falsk påstand", "En religiøs sannhet", "En mening ingen deler"],
      explanation: "Uten motstand mister selv en sann mening sin levende kraft — argument 3s poeng.",
    },
    {
      question: "Hva sier Mills skadeprinsipp?",
      options: ["Makt over den enkelte kan bare rettmessig brukes for å hindre skade på andre", "Makt kan brukes når en ytring er støtende", "Makt kan brukes for personens eget beste", "All ytring bør forbys hvis den er upopulær"],
      explanation: "Grensen går ved *skade på andre* — ikke ved anstøt, umoral eller den enkeltes eget beste.",
    },
    {
      question: "Under skadeprinsippet: er det å *støte* eller *krenke* andre tilstrekkelig grunn til tvang?",
      options: ["Nei — anstøt/krenkelse er ikke skade i Mills forstand", "Ja, alltid", "Ja, hvis mange blir støtt", "Ja, hvis staten bestemmer det"],
      explanation: "Skade ≠ anstøt. Å la «støtende» telle som forbudsgrunn er den vanligste anvendelsesfeilen.",
    },
    {
      question: "Hva er «det selvregarderende området» hos Mill?",
      options: ["Handlinger som bare angår personen selv — utenfor statens rettmessige makt", "Handlinger som skader andre", "Statens myndighetsområde", "Området der flertallet bestemmer"],
      explanation: "Over sitt eget område er individet suverent; tvang kan først brukes når andre skades.",
    },
    {
      question: "Hva angriper Susan Brison i Mills forsvar?",
      options: ["Optimismen om at fri meningsbryting faktisk siler ut sannheten («meningenes markedsplass»)", "Selve verdien av individuell frihet", "At Mill skrev på engelsk", "At Mill hadde tre argumenter"],
      explanation: "Brison bestrider den empiriske forutsetningen, ikke frihetens verdi i seg selv.",
    },
    {
      question: "Hva er ett av Brisons hovedpoenger mot markedsplass-bildet?",
      options: ["Offentligheten drives av profittmaksimering, ikke sannhetssøken", "At sannheten alltid vinner til slutt", "At staten alltid har rett", "At ytringsfrihet er verdiløst"],
      explanation: "Mediene belønner det som selger/engasjerer, ikke det sanne — så markedet siler ikke ut sannhet.",
    },
    {
      question: "Hva mener Brison med «privat sensur»?",
      options: ["At ytringsrommet innsnevres av private aktører (plattformer, arbeidsgivere), ikke bare av staten", "At staten sensurerer i hemmelighet", "At folk bør sensurere seg selv", "At privatliv bør beskyttes"],
      explanation: "Brison forskyver debatten fra stat-mot-individ til også makt-mot-individ.",
    },
    {
      question: "Hva gjør Brison til en *forankret* (ikke synset) innvending i en HYB-oppgave?",
      options: ["At hun er pensum — ikke kandidatens egen synsing", "At hun er mest kjent", "At hun er enig med Mill", "At hun er nyest"],
      explanation: "Å bruke en pensumforankret kritiker framfor egen synsing skiller A fra E i drøftingsdelen (mot feil #8/#2).",
    },
    {
      question: "Hva er en mulig Mill-respons på Brisons kritikk?",
      options: ["At kuren mot forvrengt debatt er *mer og bedre* ytring, ikke mindre", "At Brison har helt rett og Mill tok feil om alt", "At ytringsfrihet bør avskaffes", "At staten bør bestemme sannheten"],
      explanation: "Brison rammer forutsetningen om at markedet fungerer nå, ikke uten videre Mills konklusjon om frihetens verdi.",
    },
    {
      question: "Hvilket premiss binder Mills tre argumenter sammen — og som Brison angriper?",
      options: ["At fri meningsbryting faktisk fører til sannhet", "At staten er ufeilbarlig", "At flertallet alltid tar feil", "At sannhet ikke finnes"],
      explanation: "Alle tre argumentene forutsetter at debatten er en sannhetssøkende prosess.",
    },
    {
      question: "En kandidat skriver bare «ytringsfrihet er viktig for demokratiet». Hvilken feil er dette?",
      options: ["Feilkode #1 — han mister Mills tre distinkte sannhetsargumenter", "Feilkode #4 — han hopper over et utdrag", "Ingen feil", "Feilkode #3 — unødig innledning"],
      explanation: "Kjernefeilen er å ikke levere de tre distinkte argumentene.",
    },
    {
      question: "Utdrag [A]: «Om alle minus én var enige, ville menneskeheten ikke være mer berettiget til å tie den ene enn han til å tie menneskeheten.» Hvilket argument støtter utdraget?",
      options: ["Argument 1 (intellektuell ydmykhet) — flertallsstyrke gir ikke rett, det ville forutsette ufeilbarlighet", "Argument 3 (anti-dogmatisk)", "Skadeprinsippet", "Brisons kritikk"],
      explanation: "Utdraget etablerer at feilbarligheten, ikke flertallsstyrke, avgjør.",
    },
    {
      question: "Hva ville Mill si om et forbud mot en demonstrasjon fordi budskapet er «støtende»?",
      options: ["Han ville motsette seg det — anstøt er ikke skade, så skadeprinsippet gir ingen forbudsgrunn", "Han ville støtte forbudet fordi mange blir støtt", "Han ville overlate saken til flertallet", "Han ville forby all demonstrasjon"],
      explanation: "Skadeprinsippet tillater tvang kun mot skade på andre — ikke mot anstøt.",
    },
    {
      question: "Hvorfor gjelder Mills argument 3 selv når den herskende meningen er helt sann?",
      options: ["Fordi sannheten uten motstand blir et dødt dogme — man mister forståelsen av grunnene", "Fordi sanne meninger alltid er falske", "Fordi flertallet må ha rett", "Fordi staten krever det"],
      explanation: "Ytringsfrihet trengs selv når vi har rett, for å holde sannheten levende.",
    },
    {
      question: "Hvordan forholder Waldron (3.3) seg til Mills skadeprinsipp?",
      options: ["Han bygger på det, men bryter med Mills snevre avgrensning ved å regne undergraving av menneskeverd som skade", "Han avviser skadeprinsippet helt", "Han er identisk med Mill", "Han mener bare staten kan skade"],
      explanation: "Waldron utvider hva som teller som skade — broen fra 3.2 til 3.3.",
    },
    {
      question: "Hva er den korrekte HYB-disiplinen i en Mill+Brison-oppgave?",
      options: ["Solid redegjørelse for Mill (tyngdepunktet) + kort, forbeholden drøfting mot Brison", "Bare drøfte Brison uten å redegjøre for Mill", "Bare gjengi Mill uten drøfting", "Konkludere skråsikkert at Brison vinner"],
      explanation: "Redegjørelse er kjernen; drøftingen er kortere og forbeholden (0.3).",
    },
    {
      question: "Hvilken feil begår en kandidat som redegjør for Mill men aldri drøfter mot Brison der oppgaven ber om det?",
      options: ["Feilkode #8 — ren gjengivelse der oppgaven ber om drøfting", "Feilkode #7 — upresise begreper", "Feilkode #4 — hoppe over utdrag", "Ingen feil"],
      explanation: "#8 er å referere i drøftingsdelen i stedet for å drøfte.",
    },
    {
      question: "Hva forutsetter «meningenes markedsplass»-bildet, ifølge Brisons kritikk?",
      options: ["Likestilte, rasjonelle deltakere — noe den virkelige offentligheten ikke har", "At staten styrer debatten", "At ingen har makt", "At sannheten er umulig å finne"],
      explanation: "Ulikhet og irrasjonelle krefter forvrenger den frie brytingen Mill forutsatte.",
    },
    {
      question: "Hva er skillet mellom argument 1/2 og argument 3 med hensyn til den herskende meningens sannhet?",
      options: ["1 og 2 gjelder når den herskende meningen kan være (delvis) usann; 3 gjelder når den er helt sann", "Alle tre gjelder bare falske meninger", "Alle tre gjelder bare sanne meninger", "Det er ingen forskjell"],
      explanation: "Å se denne strukturen (sann/delvis sann/helt sann herskende) løfter en RED over oppramsing.",
    },
  ],
  'stv1100-3-3': [
    {
      question: "Hvilken posisjon har Dworkin i hatytringsdebatten?",
      options: ["Mot hatytringslovgivning — ut fra et legitimitetsargument", "For hatytringslovgivning — ut fra menneskeverd", "Nøytral", "For, ut fra skadeprinsippet"],
      explanation: "Dworkin argumenterer mot loven med et prosess-/legitimitetsargument. Menneskeverd er Waldrons begrep.",
    },
    {
      question: "Hvilken posisjon har Waldron i hatytringsdebatten?",
      options: ["For hatytringslovgivning — ut fra et menneskeverd-/skadeargument", "Mot, ut fra legitimitet", "Nøytral", "Mot, ut fra prosesshensyn"],
      explanation: "Waldron argumenterer for loven med et skadeargument forankret i menneskeverd/social standing.",
    },
    {
      question: "Hva er kjernen i Dworkins argument mot hatytringslov?",
      options: ["Et vedtak er bare legitimt hvis alle har fått ytre seg på egne premisser; forbud undergraver legitimiteten", "Hatytringer er harmløse", "Menneskeverdet krever forbud", "Staten bør aldri lage lover"],
      explanation: "Dworkins argument er prosessuelt (legitimitet), ikke en påstand om at hatytringer er harmløse.",
    },
    {
      question: "Hva er kjernen i Waldrons argument for hatytringslov?",
      options: ["Hatretorikk skader ved å undergrave utsatte gruppers menneskeverd / social standing", "Hatytringer krenker folks følelser (anstøt)", "Legitimiteten krever forbud", "Flertallet ønsker det"],
      explanation: "Waldron lokaliserer skaden i statusen (menneskeverd), ikke i følelsene (anstøt).",
    },
    {
      question: "Hva slags argument gir Dworkin?",
      options: ["Et prosess-/legitimitetsargument", "Et substansielt skadeargument", "Et paternalistisk argument", "Et religiøst argument"],
      explanation: "Dworkins argument handler om hvordan vedtak blir legitime, ikke om skadegrad.",
    },
    {
      question: "Hva er «social standing» hos Waldron?",
      options: ["Den offentlige statusen som likeverdig medlem av samfunnet", "En indre følelse av verdighet", "Et juridisk borgerskap", "Fyrstens omdømme"],
      explanation: "Menneskeverd er hos Waldron en sosial/offentlig status, ikke en subjektiv følelse.",
    },
    {
      question: "Hvordan forholder Waldron seg til Mills skadeprinsipp?",
      options: ["Han bygger på det (skade kreves), men bryter med det (utvider hva som teller som skade)", "Han forkaster det helt", "Han er identisk med Mill", "Han ignorerer Mill"],
      explanation: "Waldron aksepterer skadekravet, men utvider skadebegrepet til å omfatte angrep på menneskeverdet.",
    },
    {
      question: "Hvor ligger skaden i Waldrons argument?",
      options: ["I undergravingen av utsatte gruppers status/menneskeverd — ikke i krenkede følelser", "I folks krenkede følelser (anstøt)", "I det økonomiske tapet", "I flertallets ubehag"],
      explanation: "Ved å lokalisere skaden i statusen unngår Waldron Mills skade≠anstøt-innvending.",
    },
    {
      question: "Betyr Dworkins standpunkt at han mener hatytringer er harmløse?",
      options: ["Nei — han kan mene de er avskyelige; poenget er at forbud koster legitimitet", "Ja, han mener de er helt ufarlige", "Ja, han bagatelliserer dem", "Han tar ikke stilling"],
      explanation: "Å lese Dworkin som at han bagatelliserer hatytringer er en feiltolkning.",
    },
    {
      question: "Hva er en korrekt sammenligningsdimensjon mellom Dworkin og Waldron?",
      options: ["Argumenttype: prosess/legitimitet (Dworkin) vs. substansiell skade (Waldron)", "Begge er for loven, men av ulike grunner", "Begge bruker menneskeverd", "Begge avviser Mill helt"],
      explanation: "Å trekke eksplisitte dimensjoner (ikke to referater) er kjernen i SAM.",
    },
    {
      question: "Hva står på spill for Dworkin?",
      options: ["Legitimiteten til den demokratiske beslutningsprosessen", "Utsatte gruppers status", "Statens økonomi", "Fyrstens makt"],
      explanation: "For Dworkin svekkes prosessens legitimitet av utestengning; status er Waldrons anliggende.",
    },
    {
      question: "Hva står på spill for Waldron?",
      options: ["Utsatte gruppers menneskeverd / likeverdige status i samfunnet", "Den demokratiske prosessens legitimitet", "Ytringsfrihetens økonomiske verdi", "Statens suverenitet"],
      explanation: "For Waldron undergraver hatretorikk gruppenes status; legitimitet er Dworkins anliggende.",
    },
    {
      question: "Hva er feilkode #8 i en Dworkin-vs-Waldron-oppgave?",
      options: ["Ensidig/dimensjonsløs sammenligning — bare den ene, eller begge uten eksplisitte dimensjoner", "Å hoppe over et utdrag", "Unødig innledning", "For kort svar"],
      explanation: "SAM krever eksplisitt kontrast langs dimensjoner, ikke to referater ved siden av hverandre.",
    },
    {
      question: "En kandidat skriver: «Dworkin er for hatytringslov fordi den beskytter menneskeverdet.» Hvilke feil?",
      options: ["To feil: Dworkin er *mot* loven, og menneskeverd er *Waldrons* begrep (feil #7)", "Ingen feil", "Bare at det er for kort", "Bare at han hoppet over et utdrag"],
      explanation: "Å bytte om posisjonene og begrepene er feil #7 («hvem eier begrepet»).",
    },
    {
      question: "Utdrag: «Loven verner ikke folks følelser, men deres trygge status som likeverdige.» Hvem er dette, og hva viser det?",
      options: ["Waldron — skaden ligger i statusen (menneskeverd), ikke i følelsene (anstøt)", "Dworkin — legitimitetsargumentet", "Mill — skadeprinsippet uendret", "Machiavelli — politisk amoralisme"],
      explanation: "Utdraget skiller Waldrons argument fra en ren anstøts-begrunnelse.",
    },
    {
      question: "Hvordan flytter Dworkin debatten i forhold til skadeprinsippet?",
      options: ["Han flytter den vekk fra skade til legitimitet — han argumenterer ikke om hvorvidt hatytringer skader", "Han utvider skadebegrepet slik Waldron gjør", "Han bruker skadeprinsippet uendret", "Han avviser at legitimitet finnes"],
      explanation: "Waldron arbeider innenfor skadeprinsippet; Dworkin skifter til et helt annet (prosessuelt) grunnlag.",
    },
    {
      question: "Hva menes med at Dworkin og Waldron delvis «snakker forbi hverandre»?",
      options: ["De svarer på ulike spørsmål: Dworkin om legitim prosess, Waldron om rettferdiggjørende skade", "De er fullstendig enige", "De bruker samme argument", "De diskuterer ulike lover"],
      explanation: "Uenigheten er delvis en forskjell i spørsmålsstilling (prosess vs. substans) — et A-poeng.",
    },
    {
      question: "Hva betyr «å ytre seg på egne premisser» i Dworkins legitimitetskrav?",
      options: ["At alle berørte, også de med forkastelige meninger, må ha kunnet delta i meningsdannelsen før vedtaket", "At bare eksperter får uttale seg", "At staten setter premissene", "At ytringen må være sann"],
      explanation: "Et hatytringsforbud fratar noen denne muligheten og undergraver legitimiteten til senere vedtak mot dem.",
    },
    {
      question: "Hva er den korrekte, forbeholdne konklusjonen i en Dworkin-vs-Waldron-SAM?",
      options: ["At valget avhenger av om man prioriterer prosess-legitimitet eller vern av likeverdig status — poenget er dimensjonene", "At Waldron alltid vinner", "At Dworkin alltid vinner", "At sammenligning er umulig"],
      explanation: "SAM-selvstendighet vises i dimensjonene og en forbeholden dom, ikke i skråsikkerhet.",
    },
    {
      question: "Hvorfor er koblingen til Mill (3.2) et A-givende poeng i dette kapitlet?",
      options: ["Fordi Waldron både bygger på og bryter med Mills skadeprinsipp — å se dette knytter posisjonene sammen", "Fordi Mill er for hatytringslov", "Fordi Dworkin er identisk med Mill", "Fordi Mill avviser skade"],
      explanation: "Å navngi *både-og*-forholdet til Mills skadeprinsipp løfter Waldron-svaret og SAM-en.",
    },
  ],
  'stv1100-3-prove': [
    {
      question: "Klok politikk hos Machiavelli er vurdert etter:",
      options: ["Om midlene virker (instrumentell rasjonalitet)", "Om handlingen er moralsk god", "Om den følger religiøse bud", "Om fyrsten holder alle løfter"],
      explanation: "Klok politikk beskriver det virksomme, atskilt fra det moralske spørsmålet.",
    },
    {
      question: "Hva er det sentrale poenget i skillet klok/etisk politikk?",
      options: ["At Machiavelli *skiller* to spørsmål — «virker det?» og «er det rett?»", "At moral aldri gjelder", "At fyrsten alltid bør være god", "At politikk er umulig"],
      explanation: "Skillet — ikke en avvisning av moral — er kjernen.",
    },
    {
      question: "Virtù betyr hos Machiavelli:",
      options: ["Handlekraft, mot og evne til å gripe muligheter", "Moralsk dyd", "Religiøs fromhet", "Fravær av innblanding"],
      explanation: "Virtù ≠ moralsk dyd; det er kraften som temmer Fortuna.",
    },
    {
      question: "Fortuna er hos Machiavelli:",
      options: ["Tilfeldigheten/skjebnen fyrsten ikke rår over", "Fyrstens dyktighet", "En moralsk plikt", "Statens hovedoppgave"],
      explanation: "Virtù er evnen til å temme Fortuna — ikke bland de to.",
    },
    {
      question: "«God bruk av grusomhet» er:",
      options: ["Grusomhet samlet, engangs, av nødvendighet, deretter avviklet", "Grusomhet som vokser og gjentas over tid", "All grusomhet uansett", "Grusomhet begrunnet i religion"],
      explanation: "God bruk er avgrenset; dårlig bruk er stadig/eskalerende. Instrumentelt kriterium.",
    },
    {
      question: "Machiavellis amoralisme er:",
      options: ["Politisk — avgrenset til statskunsten", "Generell — moral gjelder ikke i det hele tatt", "Religiøs", "Ren pasifisme"],
      explanation: "Feil #7: å tillegge ham generell amoralisme karikerer ham.",
    },
    {
      question: "Utdrag: «Den som når makten ved svik og grusomhet mot venner kan vinne herredømme, men ikke ære.» Hva viser dette?",
      options: ["Det deontologiske innslaget — en handling fordømt i seg selv", "Ren konsekvensialisme", "At Machiavelli er generelt amoralsk", "At grusomhet alltid lønner seg"],
      explanation: "«Makt, men ikke ære» er nøkkelutdraget mot feil #10.",
    },
    {
      question: "Utdrag: «En fyrste bør synes barmhjertig, men ha sinnet beredt til det motsatte når nødvendigheten byder det.» Hva viser dette?",
      options: ["Å *fremstå* som moralsk — konsekvensialistisk (dydens utseende tjener makten)", "Et deontologisk forbud mot løgn", "At fyrsten faktisk bør være god", "At Fortuna styrer alt"],
      explanation: "Omdømme vs. realitet — den konsekvensialistiske siden.",
    },
    {
      question: "Hva er feilkode #10?",
      options: ["Å behandle Machiavelli endimensjonalt (ren amoralist/konsekvensialist uten vekslingen)", "Å hoppe over et utdrag", "Å skrive for kort", "Å blande Berlin og Pettit"],
      explanation: "#10 er den machiavelli-spesifikke fellen — å miste vekslingen.",
    },
    {
      question: "Cesare Borgia illustrerer hos Machiavelli:",
      options: ["Stor virtù og god bruk av grusomhet — felt til slutt av Fortuna", "En ren pasifist", "Forfatteren av Fyrsten", "En filosof Machiavelli avviser"],
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
      options: ["En helt sann herskende mening blir et dødt dogme uten motstand", "Falske meninger må forbys", "Flertallet alltid har rett", "Staten må verne sannheten"],
      explanation: "Argument 3 gjelder selv når vi har rett.",
    },
    {
      question: "Skadeprinsippet sier at frihet bare kan innskrenkes for å hindre:",
      options: ["Skade på andre", "Anstøt og krenkelse", "Handlinger til personens eget beste", "Upopulære meninger"],
      explanation: "Grensen går ved skade på andre — ikke ved anstøt.",
    },
    {
      question: "Under skadeprinsippet: teller det å *støte* andre som tilstrekkelig grunn til tvang?",
      options: ["Nei — anstøt er ikke skade", "Ja, alltid", "Ja, hvis mange blir støtt", "Ja, hvis staten bestemmer"],
      explanation: "Skade ≠ anstøt er den vanligste anvendelsesfeilen.",
    },
    {
      question: "Hva angriper Brison i Mills forsvar?",
      options: ["Optimismen om at fri meningsbryting siler ut sannheten", "Selve verdien av frihet", "At Mill skrev på engelsk", "At Mill hadde tre argumenter"],
      explanation: "Brison bestrider den empiriske forutsetningen, ikke frihetens verdi.",
    },
    {
      question: "Ett av Brisons hovedpoenger er at offentligheten drives av:",
      options: ["Profittmaksimering, ikke sannhetssøken", "Rasjonell sannhetssøken", "Statlig sensur alene", "Fyrstens virtù"],
      explanation: "Mediene belønner det som selger, ikke det sanne.",
    },
    {
      question: "Hva gjør Brison til en *forankret* innvending i en HYB-oppgave?",
      options: ["At hun er pensum — ikke kandidatens egen synsing", "At hun er mest kjent", "At hun er enig med Mill", "At hun er nyest"],
      explanation: "Forankret pensumkritiker skiller A fra E i drøftingsdelen.",
    },
    {
      question: "En kandidat redegjør for Mill men drøfter aldri mot Brison der oppgaven ber om det. Feil?",
      options: ["Feilkode #8 — ren gjengivelse der oppgaven ber om drøfting", "Feilkode #4 — hoppe over utdrag", "Ingen feil", "Feilkode #3 — unødig innledning"],
      explanation: "#8 er å referere i drøftingsdelen.",
    },
    {
      question: "Dworkins posisjon i hatytringsdebatten er:",
      options: ["Mot loven — ut fra et legitimitetsargument", "For loven — ut fra menneskeverd", "Nøytral", "For, ut fra skadeprinsippet"],
      explanation: "Dworkin gir et prosess-/legitimitetsargument mot loven.",
    },
    {
      question: "Waldrons posisjon i hatytringsdebatten er:",
      options: ["For loven — ut fra menneskeverd/skade", "Mot, ut fra legitimitet", "Nøytral", "Mot, ut fra prosesshensyn"],
      explanation: "Waldron gir et skadeargument forankret i menneskeverd.",
    },
    {
      question: "Kjernen i Dworkins argument er at forbud:",
      options: ["Undergraver legitimiteten til vedtak, fordi ikke alle har fått ytre seg på egne premisser", "Er unødvendig fordi hatytringer er harmløse", "Krenker menneskeverdet", "Er umulig å håndheve"],
      explanation: "Prosessargument — ikke en påstand om at hatytringer er harmløse.",
    },
    {
      question: "«Social standing» hos Waldron er:",
      options: ["Den offentlige statusen som likeverdig medlem av samfunnet", "En indre følelse", "Juridisk borgerskap", "Fyrstens omdømme"],
      explanation: "Menneskeverd som sosial status — ikke en subjektiv følelse.",
    },
    {
      question: "Hvor ligger skaden i Waldrons argument?",
      options: ["I undergravingen av gruppers status/menneskeverd — ikke i krenkede følelser", "I folks krenkede følelser (anstøt)", "I økonomisk tap", "I flertallets ubehag"],
      explanation: "Ved å lokalisere skaden i statusen unngår Waldron skade≠anstøt-innvendingen.",
    },
    {
      question: "Hvordan forholder Waldron seg til Mills skadeprinsipp?",
      options: ["Han bygger på det (skade kreves), men bryter med det (utvider skadebegrepet)", "Han forkaster det helt", "Han er identisk med Mill", "Han ignorerer Mill"],
      explanation: "Både-og-forholdet til Mill er A-poenget (bro til 3.2).",
    },
    {
      question: "En korrekt sammenligningsdimensjon Dworkin↔Waldron er:",
      options: ["Argumenttype: prosess/legitimitet (Dworkin) vs. substansiell skade (Waldron)", "Begge bruker menneskeverd", "Begge avviser Mill", "Begge er mot loven"],
      explanation: "Eksplisitte dimensjoner er kjernen i SAM (mot feil #8).",
    },
    {
      question: "En kandidat skriver «Dworkin er for loven fordi den beskytter menneskeverdet.» Hvilke feil?",
      options: ["Dworkin er *mot* loven, og menneskeverd er *Waldrons* begrep (feil #7)", "Ingen feil", "Bare at det er for kort", "Bare at et utdrag mangler"],
      explanation: "Å bytte om posisjoner og begreper er feil #7.",
    },
    {
      question: "Hva er feilkode #8 i en Dworkin-vs-Waldron-oppgave?",
      options: ["Ensidig/dimensjonsløs sammenligning", "Å hoppe over et utdrag", "Unødig innledning", "For kort svar"],
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
      question: "Hva er den avgjørende regelen i en SIT-oppgave med utdrag [A]–[E]?",
      options: ["Behandle hvert eneste utdrag og plasser det i argumentets helhet", "Velg det klareste utdraget og hopp over resten", "Parafrasere hvert utdrag linje for linje uten å plassere det", "Bruke utdragene bare som pynt i innledningen"],
      explanation: "Jernregelen er å behandle alle utdrag (feil #4-vaksine) og plassere hvert i helheten. Å hoppe over utdrag eller kun parafrasere løsrevet (feil #5) svekker svaret.",
    },
    {
      question: "Hva er det sentrale poenget som MÅ med i en Rawls-redegjørelse?",
      options: ["Utgangsposisjonen og uvitenhetssløret", "Communal provision", "Skadeprinsippet", "Arbeidsdeling etter naturlige anlegg"],
      explanation: "Uvitenhetssløret + utgangsposisjonen er kjernen; uten dem faller Rawls-redegjørelsen (feil #1). Communal provision er Walzer, skadeprinsippet Mill, arbeidsdeling Platon.",
    },
    {
      question: "I firetrinns-SIT: hva innebærer trinnet «identifiser funksjonen»?",
      options: ["Avgjøre om utdraget er et premiss, en intuisjon eller en illustrasjon", "Telle antall setninger i utdraget", "Oversette utdraget til engelsk", "Finne forfatterens fødselsår"],
      explanation: "Å identifisere funksjonen betyr å avgjøre om utdraget bærer argumentet som premiss, uttrykker en intuisjon, eller er en illustrasjon — det som lar deg plassere det i helheten.",
    },
    {
      question: "Hva er det sentrale poenget i Berlins negative frihet?",
      options: ["Fravær av forsettlig innblanding fra andre", "Fravær av enhver hindring, også manglende evne", "Evne til ukontrollert innblanding", "Selvrealisering av det egentlige selv"],
      explanation: "Negativ frihet = fravær av hindring påført av andre (ofte skjerpet Hayek-nært til *forsettlig* innblanding). Å definere den som fravær av enhver hindring mister grunnskillet andres hindring vs. manglende egen evne; det egentlige selv hører til positiv frihet.",
    },
    {
      question: "Hva er det sentrale poenget i en Platon-redegjørelse?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg", "Rettferdighet = maximin under usikkerhet", "Rettferdighet = ikke-dominans", "Rettferdighet = kulturbestemt fellesbeslutning"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (hver på sin plass). Maximin er Rawls, ikke-dominans Pettit, kulturbestemt fordeling Walzer.",
    },
    {
      question: "Hvorfor er «gå rett på sak» en kalibreringsregel i STV1100?",
      options: ["Innledning og avslutning er bortkastet i et 4-timers essayfag (feil #3)", "Fordi sensor teller ord og trekker for korte svar", "Fordi engelsk fagterminologi er forbudt", "Fordi drøfting alltid veier tyngst"],
      explanation: "Unødig innledning/avslutning (feil #3) er oppvarming som ikke gir uttelling. Sensor teller ikke ord; kort + korrekt er fullgodt.",
    },
    {
      question: "I SIT-eksemplet med Rawls-utdrag: hva er funksjonen til et utdrag om refleksiv likevekt (prinsipper må stemme med veloverveide oppfatninger)?",
      options: ["En metode/intuisjon i rettferdiggjøringen — ikke et steg i selve valget", "Et premiss for hvorfor sløret trengs", "Grunngivingen for maximin-regelen", "En illustrasjon av trussel-fordel"],
      explanation: "Refleksiv likevekt er den metodiske sjekken der intuisjoner og prinsipper korrigerer hverandre — den hører til rettferdiggjøringen av teorien, ikke til selve valget bak sløret.",
    },
    {
      question: "Hva skiller et utdrag som motiverer uvitenhetssløret fra et som motiverer maximin?",
      options: ["Sløret sikrer upartiskhet ved å ta bort kunnskap; maximin er valgregelen under den uvissheten sløret skaper", "De er samme poeng formulert to ganger", "Sløret gjelder Locke, maximin gjelder Rawls", "Maximin motiverer sløret, ikke omvendt"],
      explanation: "Å slå dem sammen er en presisjonsfeil (#7). Sløret er middelet som skaper upartiskhet; maximin er hvorfor det er rasjonelt å velge det sikreste under den radikale uvissheten sløret gir.",
    },
    {
      question: "Hva avslører Machiavelli-utdraget om «grusomhet godt brukt — én gang, ikke fortsatt»?",
      options: ["En veksling: et deontologisk innslag som ikke følger rent av nyttekalkylen", "At Machiavelli er en ren konsekvensialist uten unntak", "At Machiavelli avviser all politisk vold", "At amoralismen er generell, ikke politisk"],
      explanation: "Selvbegrensningen «én gang, ikke fortsatt» bærer et deontologisk innslag — den vekslingen som feil #10 (endimensjonal lesning) overser. Amoralismen er nettopp politisk, ikke generell.",
    },
    {
      question: "Hvordan skiller kontrollert innblanding (Odyssevs ved masten) seg fra dominans?",
      options: ["Kontrollert innblanding — der den berørte styrer den — reduserer ikke friheten", "Kontrollert innblanding er alltid frihetsberøvelse", "Dominans krever at innblandingen faktisk skjer", "De er identiske begreper hos Pettit"],
      explanation: "Odyssevs som binder seg selv, styrer bindingen — kontrollert innblanding opphever ikke friheten. Dominans er derimot *evne* til ukontrollert innblanding, uavhengig av om den brukes.",
    },
    {
      question: "Hva er tidsbudsjettet for et enkelt SIT-utdrag?",
      options: ["Cirka 8–12 minutter per utdrag", "Cirka 40–60 minutter per utdrag", "Under ett minutt per utdrag", "Hele eksamenstiden på ett utdrag"],
      explanation: "Et enkelt utdrag tar ~8–12 min; en hel RED-hovedoppgave ~40–60 min. Å bruke uforholdsmessig mye tid på ett utdrag og hoppe over resten er feil #4.",
    },
    {
      question: "Hva løfter en Pettit-redegjørelse fra C til A?",
      options: ["Poenget om at bemyndigelsen må kunne trekkes tilbake (kontroll er mer enn samtykke)", "Å definere frihet som fravær av faktisk innblanding", "Å gjengi Berlin i stedet", "Å nevne så mange begreper som mulig"],
      explanation: "Det subtile A-poenget hos Pettit er at kontroll er mer enn engangssamtykke — bemyndigelsen må kunne trekkes tilbake. Å redusere Pettit til fravær av faktisk innblanding mister kjernen (feil #1).",
    },
    {
      question: "Hva menes med «treff strukturen, ikke bare konklusjonen» i RED?",
      options: ["Rekonstruer premissene trinnvis fram til konklusjonen, ikke bare oppgi sluttresultatet", "Skriv en lang konklusjon til slutt", "Gjengi bare tenkerens konklusjon uten begrunnelse", "Bytt ut argumentet med egne meninger"],
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
      options: ["Å bruke tenkerens begrepsapparat på den konkrete situasjonen", "Å gjengi tenkerens teori generelt", "Å sammenligne to tenkere", "Å skrive en forbeholden konklusjon uten teori"],
      explanation: "ANV krever at teorien faktisk *brukes* på situasjonen. Å gjengi teorien generelt uten å ta stilling er feil #9 (overse anvendelses-vrien).",
    },
    {
      question: "Hva er den skarpeste (mest presise) dimensjonen i sammenligningen Rawls vs. Locke?",
      options: ["Informasjonsbetingelsen — bak slør vs. full informasjon", "Antall sider hver skrev", "Hvem som levde først", "At begge bruker ordet «kontrakt»"],
      explanation: "Det subtile A-poenget er at forskjellen ligger i informasjonsbetingelsen (slør vs. full informasjon), ikke bare i «historisk vs. hypotetisk».",
    },
    {
      question: "Hva skiller Dworkins fra Waldrons argument om hatytringslov?",
      options: ["Dworkin bygger på legitimitet i prosessen; Waldron på menneskeverd/social standing", "Begge argumenterer mot lov", "Begge bygger på menneskeverd", "Dworkin er for lov, Waldron mot"],
      explanation: "Dworkin (mot lov) = legitimitetsargument; Waldron (for lov) = menneskeverd/social standing. Å blande dem er feil #7.",
    },
    {
      question: "Hva er raushetsterskelen i en HYB-oppgave?",
      options: ["Sensor bruker skjønn og raushet i drøftingsdelen — moderat terskel i et innføringsemne", "At all drøfting er forbudt", "At bare lange svar godtas", "At redegjørelsen ikke teller"],
      explanation: "HYB er et innføringsemne; sensor er raus i drøftingsdelen. En forbeholden, forankret vurdering holder langt, men ren gjengivelse (feil #8) holder ikke.",
    },
    {
      question: "Hva ville Pettit sagt om utstrakt privat veldedighet?",
      options: ["At den gjør mottakeren dominert; velferd som rettighet fjerner dominansen", "At den alltid er et rent gode", "At den er irrelevant for frihet", "At den er identisk med statlig velferd"],
      explanation: "Anvendt: den som er avhengig av en givers godvilje er dominert (giveren kan trekke støtten ukontrollert). Velferd som rettighet (kan ikke trekkes tilbake fritt) fjerner dominansen.",
    },
    {
      question: "Hvorfor er den liberale despoten testcaset som skiller Berlin fra Pettit?",
      options: ["Berlin kan kalle borgeren (negativt) fri, Pettit kaller ham ufri fordi despoten kunne gripe inn", "Fordi begge kaller ham fri", "Fordi begge kaller ham ufri", "Fordi despoten aldri finnes i teoriene"],
      explanation: "Despoten blander seg ikke faktisk inn (Berlin: kanskje fri), men kunne gjøre det ukontrollert (Pettit: ufri, dominert). Caset skiller teoriene skarpest.",
    },
    {
      question: "Hva er A-markøren i drøftingsdelen av en HYB om Mill?",
      options: ["En forankret (pensum-)innvending som Brison, ikke et tilfeldig eget innfall", "Å gjengi Mills tre argumenter to ganger", "Å hoppe over drøftingen", "Å skrive en lang innledning"],
      explanation: "Å bruke Brison som forankret innvending (profitt/privat sensur forvrenger ideenes marked) framfor synsing løfter HYB til A. Ren gjengivelse er feil #8.",
    },
    {
      question: "Hva er kontrasten Rawls vs. Walzer på fordeling?",
      options: ["Universelle prinsipper (Rawls) vs. kulturbestemt fellesbeslutning / communal provision (Walzer)", "Begge har universelle prinsipper", "Begge er relativister", "Walzer bruker uvitenhetsslør"],
      explanation: "Rawls: samme prinsipper for alle bak slør. Walzer: velferdens omfang er en kulturbestemt fellesbeslutning («communal provision»), ikke et universelt prinsipp.",
    },
    {
      question: "Hva er den vanligste drøftingsfeilen (feil #8)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning", "For mange eksplisitte dimensjoner", "For presis begrepsbruk", "For kort redegjørelse"],
      explanation: "Feil #8 er å levere referat i (c)-delen i stedet for selvstendig vurdering — den vanligste drøftingsfeilen.",
    },
    {
      question: "Hva er dimensjonene i Platon vs. Nussbaum?",
      options: ["Forskjell i anlegg + rolleplassering (Platon) vs. menneskelig likhet + kapabiliteter (Nussbaum)", "Begge vektlegger forskjell i anlegg", "Begge vektlegger kapabiliteter", "Universelle prinsipper vs. slør"],
      explanation: "Platon: rettferd = arbeidsdeling etter forskjell i anlegg. Nussbaum: sosial rettferdighet = alle har de artsbestemte kapabilitetene, bygd på menneskelig likhet.",
    },
    {
      question: "Hvordan bør universalisme og pluralisme holdes fra hverandre hos Nussbaum?",
      options: ["Universalisme = én felles liste for alle; pluralisme = lokal spesifisering — det er en spenning, ikke ett valg", "De er samme begrep", "Universalisme = lokal utforming", "Pluralisme = én felles liste"],
      explanation: "Presisjonspoenget (feil #7-vaksine): universalisme = én liste for alle, pluralisme = lokal spesifisering. Nussbaum har en *spenning* mellom dem, ikke ett rent valg.",
    },
    {
      question: "Hva er det subtile poenget i Dworkin vs. Waldron som kobler til Mill?",
      options: ["At Waldron både bygger på og bryter med Mills skadeprinsipp", "At Dworkin avviser Mill helt", "At begge ignorerer Mill", "At Mill argumenterer for hatytringslov"],
      explanation: "Waldron utvider Mills skadebegrep til å omfatte undergraving av menneskeverd/social standing — han bygger på og bryter med skadeprinsippet (kobling til kap. 3.2).",
    },
    {
      question: "Hva er strukturen i en redegjør+drøft-hybrid (HYB)?",
      options: ["Solid redegjørelse → forankret innvending → kort forbeholden vurdering", "Kort redegjørelse → lang innledning → ingen vurdering", "Bare drøfting uten redegjørelse", "Bare gjengivelse"],
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
      options: ["Å miste det sentrale poenget (den diskvalifiserende kjernefeilen)", "Å skrive for kort", "Å behandle alle utdrag", "Å bruke engelsk fagterminologi"],
      explanation: "Feil #1 er å miste det sentrale poenget — Rawls uten uvitenhetssløret, Pettit uten kontroll/ikke-dominans. Den rammer Akse 1.",
    },
    {
      question: "Hva betyr «kort + korrekt = fullgodt»?",
      options: ["Presisjon og dybde, ikke lengde, avgjør — sensor teller ikke ord", "At bare korte svar godtas", "At man skal droppe redegjørelsen", "At lengre svar alltid får bedre karakter"],
      explanation: "Sensor teller ikke ord eller sider. Et kort kjernesvar som treffer det sentrale poenget kan gi A; et langt svar som mister poenget faller til svak.",
    },
    {
      question: "Hva innebærer helhetsvurderingen (ingen poenggrenser)?",
      options: ["Karakter settes ved samlet skjønn; svakhet ett sted kan veies opp av styrke et annet", "Hver deloppgave gir et fast antall poeng", "Blank del gir automatisk stryk", "Bare den siste deloppgaven teller"],
      explanation: "Ingen tallfestede poenggrenser: helhetsvurdering A–F. Ubesvart del stenger for A men ikke nødvendigvis for bestått; styrke kan veie opp svakhet.",
    },
    {
      question: "Hvilken feil begår en kandidat som gjengir Pettits teori generelt uten å ta stilling til den liberale despoten?",
      options: ["Feil #9 — overse anvendelses-vrien", "Feil #3 — unødig innledning", "Feil #6 — besvare halve settet", "Feil #10 — endimensjonal Machiavelli"],
      explanation: "Feil #9 er å gjengi teorien generelt uten å *bruke* den på den konkrete situasjonen (despoten, veldedighet, Foster Wallace).",
    },
    {
      question: "Hvilken akse rammes av å blande universalisme og pluralisme hos Nussbaum?",
      options: ["Akse 2 — presis tekst-/begrepsforståelse", "Akse 1 — sentralt poeng", "Akse 3 — subtilt ekstra", "Akse 4 — selvstendighet"],
      explanation: "Å blande nabobegreper (feil #7) rammer Akse 2 (presis begrepsforståelse). Universalisme = én liste, pluralisme = lokal spesifisering.",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å behandle Machiavelli endimensjonalt (ren amoralist uten vekslingen)", "Å hoppe over sitatutdrag", "Å skrive for kort", "Å blande Locke og Rawls"],
      explanation: "Feil #10 er å lese Machiavelli som ren amoralist/konsekvensialist uten vekslingen mot et deontologisk innslag og skillet politisk vs. generell amoralisme.",
    },
    {
      question: "Hva løfter et svar fra C til A (Akse 3)?",
      options: ["Det subtile ekstra poenget — f.eks. at bemyndigelsen kan trekkes tilbake", "Å skrive dobbelt så mye", "Å legge til en innledning", "Å ramse opp flere tenkere"],
      explanation: "Akse 3 (det subtile ekstra poenget) er det som gir A: bemyndigelse kan trekkes tilbake, ulikt motiverte slør, Machiavellis veksling — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er feil #3?",
      options: ["Unødig innledning/avslutning — oppvarming er bortkastet", "Å behandle alle utdrag", "Å treffe det sentrale poenget", "Å bruke presise begreper"],
      explanation: "Feil #3 er unødig innledning/avslutning. I et 4-timers essayfag er oppvarming bortkastet — gå rett på sak.",
    },
    {
      question: "Hva sier helhetsvurderingen om en ubesvart deloppgave (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Den gir automatisk stryk", "Den har ingen betydning", "Den kan aldri veies opp"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten for å ikke trekke mye, men fører ikke automatisk til stryk.",
    },
    {
      question: "Hva er forskjellen mellom feil #4 og feil #5 i sitatoppgaver?",
      options: ["#4 er å hoppe over utdrag; #5 er å parafrasere et utdrag løsrevet uten å plassere det", "De er identiske", "#4 gjelder Machiavelli, #5 gjelder Rawls", "#5 er å behandle alle utdrag korrekt"],
      explanation: "#4 er å hoppe over utdrag (behandle bare noen); #5 er å oversette et utdrag linje for linje uten å identifisere funksjon og plassere det i argumentets helhet.",
    },
    {
      question: "Hvordan tilpasses forventningene når en oppgave er erklært vanskelig (Rawls, Machiavellis etikk)?",
      options: ["Å komme i nærheten av et treffende svar regnes som en god prestasjon", "Forventningene heves", "Vanskelige oppgaver teller ikke", "Bare A godtas"],
      explanation: "Ved vanskelige oppgaver senkes forventningen — å nærme seg et treffende svar er godt. Helhetsvurderingen tar vanskelighetsgraden med.",
    },
    {
      question: "Hva rammer Akse 4 (selvstendighet)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning (feil #8)", "Å miste det sentrale poenget", "Å hoppe over utdrag", "Å skrive en innledning"],
      explanation: "Akse 4 måler selvstendighet i sammenligning/drøfting. Ren gjengivelse i (c)-delen i stedet for egen vurdering (feil #8) rammer denne aksen.",
    },
  ],
  'stv1100-4-4': [
    {
      question: "Hva er det sentrale poenget en A-besvarelse på Rawls-oppgaven (modell 1) må treffe?",
      options: ["Utgangsposisjonen + uvitenhetssløret, med maximin begrunnet i uvissheten", "At samfunnet skal være rettferdig og alle ha det bra", "Communal provision", "Skadeprinsippet"],
      explanation: "Modell 1s sentrale poeng er utgangsposisjon + uvitenhetsslør, med maximin koblet til den radikale uvissheten sløret skaper. «Samfunnet skal være rettferdig» er for vagt (feil #1).",
    },
    {
      question: "Hva skiller A- fra C-besvarelsen i modell 1 (Rawls)?",
      options: ["A er presis og legger til det subtile ekstra; C har poenget på plass men flatt", "A er mye lengre enn C", "C treffer det sentrale poenget bedre", "A dropper redegjørelsen"],
      explanation: "A ≈ C i lengde; A navngir apparatet presist, kobler maximin til uvissheten, skiller utdragspremissene og legger til det subtile ekstra. Gapet er presisjon, ikke lengde.",
    },
    {
      question: "I modell 1s SIT-del: hva er forskjellen på utdrag [A] og [B]?",
      options: ["[A] motiverer sløret (upartiskhet), [B] motiverer maximin (rasjonalitet under uvisse)", "De er samme poeng", "[A] gjelder Locke, [B] gjelder Rawls", "[B] motiverer sløret, ikke maximin"],
      explanation: "Å skille de to premissene er A-grepet. Å smelte dem sammen er feil #7. [A] begrunner hvorfor sløret trengs; [B] begrunner valgregelen under sløret.",
    },
    {
      question: "Hvilken akse er tyngst i en Berlin vs. Pettit-sammenligning (modell 2)?",
      options: ["Akse 4 — selvstendighet (egne eksplisitte dimensjoner + forbeholden vurdering)", "Akse 3 alene", "Ingen akse teller i SAM", "Akse 2 alene"],
      explanation: "I en SAM måler sensor selvstendighet tyngst — egne, navngitte dimensjoner og en forbeholden vurdering. Ren parallellframstilling (feil #8) er C i beste fall.",
    },
    {
      question: "Hva er testcaset som skiller Berlin fra Pettit i modell 2?",
      options: ["Den liberale despoten", "Odyssevs ved masten", "Cesare Borgia", "Foster Wallace-sitatet"],
      explanation: "Den liberale despoten: Berlin kan kalle borgeren (negativt) fri om despoten ikke faktisk griper inn; Pettit kaller ham ufri fordi despoten kunne. Caset skiller teoriene skarpest.",
    },
    {
      question: "Hva må A-besvarelsen i modell 3 gjøre med Pettits teori?",
      options: ["Bruke ikke-dominans på veldedigheten, ikke bare gjengi teorien", "Gjengi Pettits teori generelt", "Konkludere at mottakerne er «ganske frie fordi de får hjelp»", "Droppe Pettit til fordel for Berlin"],
      explanation: "Modell 3 er en anvendelse: ikke-dominans må *brukes* på veldedigheten (feil #9-vaksine). Å gjengi teorien generelt og synse er C-svakhetens kjerne.",
    },
    {
      question: "Hva er det sentrale poenget om privat veldedighet hos Pettit (modell 3)?",
      options: ["Muligheten for ukontrollert tilbaketrekking gjør mottakeren dominert", "Veldedighet er alltid bra fordi det hjelper", "Veldedighet er identisk med statlig velferd", "Mottakerne er frie fordi de får hjelp"],
      explanation: "Mottakeren er prisgitt giverens ukontrollerte vilje — giveren *kan* trekke støtten når som helst, altså dominans. Derfor foretrekker Pettit velferd som rettighet.",
    },
    {
      question: "Hva er sensorblikket?",
      options: ["Å lese et svar langs de fire vurderingsaksene for å skille A/C/E", "En sjekk av rettskilder", "En metode for å telle ord", "En liste over pensumtenkere"],
      explanation: "Sensorblikket er å bruke de fire aksene (sentralt poeng, presis tekst/begrep, subtilt ekstra, selvstendighet) til å diagnostisere nivået A/C/E.",
    },
    {
      question: "Hva viser alle tre modellene om lengde?",
      options: ["A-svaret er knapt lengre enn C — forskjellen er presisjon, ikke lengde", "A-svaret er alltid dobbelt så langt", "C-svaret er alltid kortest fordi det er dårligst", "Lengde avgjør karakteren"],
      explanation: "«Kort + korrekt = fullgodt»: A ≈ C i lengde. Forskjellen er at A treffer poenget, plasserer alle utdrag og legger til det subtile ekstra.",
    },
    {
      question: "Hva er A-markøren (Akse 3) i modell 1?",
      options: ["At ulike deler av uvitenhetssløret er ulikt godt motivert", "At maximin nevnes", "At Rawls skrev A Theory of Justice", "At sløret finnes"],
      explanation: "Det subtile ekstra som løfter til A er at ulike deler av sløret er ulikt godt teoretisk motivert — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er den forbeholdne selvstendige vurderingen (Akse 4) et eksempel på i modell 2?",
      options: ["Å reise at Pettits «mulighet»-kriterium er vidt, og likevel forbeholdent forsvare det", "Å gjengi begge teoriene uten dimensjoner", "Å konkludere at begge er like", "Å hoppe over vurderingen"],
      explanation: "A-svaret reiser en reell innvending (nesten alle står i en relasjon der noen kunne gripe inn) og svarer forbeholdent — det er selvstendigheten (Akse 4) sensor belønner.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor privat veldedighet?",
      options: ["Ytelsen kan ikke trekkes tilbake etter forgodtbefinnende, så dominansen fjernes", "Fordi staten er rikere enn private givere", "Fordi veldedighet er ulovlig", "Fordi mottakerne får mer penger"],
      explanation: "Velferd som rettighet står ikke under giverens luner, men under kontrollerbar rett — bemyndigelsen kan ikke trekkes tilbake fritt, så dominansen forsvinner. Poenget er ikke beløpet.",
    },
  ],
  'stv1100-4-5': [
    {
      question: "Hvilken valgstruktur speiler øvingseksamen A?",
      options: ["To obligatoriske oppgaver (jf. 2018/2020)", "Velg 3 av 4 (jf. H2022)", "Én oppgave, deler (a)–(c) (jf. 2025)", "Kun flervalg"],
      explanation: "Øvingseksamen A speiler «to obligatoriske oppgaver» — frihet + Rawls, begge må svares.",
    },
    {
      question: "Hvilken valgstruktur speiler øvingseksamen B?",
      options: ["Velg 3 av 4 (jf. H2022)", "To obligatoriske oppgaver", "Én oppgave (a)–(c)", "Muntlig eksamen"],
      explanation: "Øvingseksamen B er «velg 3 av 4» (Dworkin/Waldron, Machiavelli, Pettit, Nussbaum).",
    },
    {
      question: "Hva er strategien i «velg 3 av 4»?",
      options: ["Velg de tre der du treffer det sentrale poenget sikrest", "Velg de tre som ser kortest ut", "Svar halvveis på alle fire", "Velg tilfeldig"],
      explanation: "Velg der du treffer kjernepoenget sikrest. Tre gode besvarelser slår fire halve (feil #6).",
    },
    {
      question: "Hvordan bør 4 timer disponeres i (a)–(c)-formatet?",
      options: ["Vekt (a)/(b) som redegjørelse og spar tid til (c)-sammenligningen", "Bruk all tid på (a)", "Hopp over (c)", "Skriv likt på alle uansett"],
      explanation: "I (a)–(c) er (c) ofte sammenligningen der selvstendigheten testes — spar tid til den. (a)/(b) er redegjørelse.",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen A oppgave 1 (Berlin vs. Pettit)?",
      options: ["Negativ frihet = fravær av hindring fra andre; ikke-dominans = fravær av evne til ukontrollert innblanding", "At begge er opptatt av frihet", "At Pettit levde etter Berlin", "Communal provision"],
      explanation: "Begge sentrale poeng må med: Berlins hindring påført av andre (faktisk innblanding) og Pettits evne til ukontrollert innblanding (dominans), med despoten som testcase.",
    },
    {
      question: "I øvingseksamen A oppgave 2: hva er funksjonen til utdraget om at ingen skal ha forhandlingsmakt fra tilfeldige fødselsfortrinn?",
      options: ["Trussel-fordel — sløret nøytraliserer forhandlingsmakt", "Refleksiv likevekt", "Grunngivingen for maximin", "Forskjellsprinsippet"],
      explanation: "Utdraget om forhandlingsmakt fra fødselsfortrinn gjelder trussel-fordel — sløret nøytraliserer den, koblet til det naturlige/sosiale lotteriet.",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen B oppgave 2 (Machiavelli)?",
      options: ["Skillet klok/etisk politikk + at amoralismen er politisk, ikke generell", "At Machiavelli er en ren amoralist", "At målet alltid helliger middelet", "Virtù alene"],
      explanation: "Sentralt poeng: skillet klok/etisk politikk og at amoralismen er politisk (statskunsten), ikke generell. Å lese ham endimensjonalt er feil #10.",
    },
    {
      question: "Hva løfter Dworkin vs. Waldron (øvingseksamen B) til A?",
      options: ["Eksplisitte dimensjoner + at Waldron utvider Mills skadeprinsipp", "Å gjengi bare Dworkin", "Å konkludere at de er like", "Å blande legitimitet og menneskeverd"],
      explanation: "A-svaret navngir dimensjoner og ser det subtile: Waldron bygger på og bryter med Mills skadeprinsipp (kobling til kap. 3.2).",
    },
    {
      question: "Hva er det sentrale poenget i øvingseksamen C del (a) (Platon)?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg (tre grupper)", "Kapabiliteter på plass", "Ikke-dominans", "Uvitenhetssløret"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (produsenter/krigere/voktere). Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hva er selvstendighetstesten i øvingseksamen C del (c)?",
      options: ["Å sammenligne Platon og Nussbaum med eksplisitte dimensjoner, ikke gjenta (a)+(b)", "Å gjenta redegjørelsene fra (a) og (b)", "Å velge én av dem", "Å hoppe over sammenligningen"],
      explanation: "Del (c) måler selvstendighet (Akse 4): navngitte dimensjoner (forskjell i anlegg vs. menneskelig likhet) + forbeholden vurdering — ikke et referat av (a)+(b).",
    },
    {
      question: "Hva skjer med karakteren hvis en obligatorisk oppgave står blank (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Automatisk stryk", "Ingen betydning", "Den kan alltid veies opp til A"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten, men fører ikke automatisk til stryk (helhetsvurdering).",
    },
    {
      question: "Hva er tidsbudsjettet for et enkelt SIT-utdrag i eksamen?",
      options: ["Cirka 8–12 minutter", "Cirka 40–60 minutter", "Under ett minutt", "To timer"],
      explanation: "SIT-utdrag: ~8–12 min hver. RED-hovedoppgave ~40–60 min. Fordel tiden så alle valgte deler behandles.",
    },
    {
      question: "Hva er negativ frihet hos Berlin?",
      options: ["Fravær av forsettlig innblanding fra andre", "Fravær av enhver hindring, også manglende evne", "Evne til ukontrollert innblanding", "Selvrealisering av det egentlige selv"],
      explanation: "Negativ frihet = fravær av hindring påført av andre (ofte skjerpet Hayek-nært til *forsettlig* innblanding). Manglende evne (fattigdom) er i utgangspunktet ikke ufrihet negativt sett.",
    },
    {
      question: "Hva er dominans hos Pettit?",
      options: ["Evne til innblanding uten den andres kontroll", "Faktisk innblanding som skjer", "Fravær av ressurser (non-vitiation)", "Kontrollert innblanding"],
      explanation: "Dominans er *evnen* til ukontrollert innblanding — muligheten er frihetsberøvelse, uansett om innblandingen skjer.",
    },
    {
      question: "Hva viser den liberale despoten?",
      options: ["At dominans (Pettit) kan finnes uten faktisk innblanding (Berlin)", "At all frihet er positiv", "At Rawls tar feil", "At veldedighet er dominans"],
      explanation: "Despoten griper ikke faktisk inn (Berlin: kanskje fri), men kunne ukontrollert (Pettit: ufri). Testcaset som skiller teoriene.",
    },
    {
      question: "Hva er non-vitiation hos Pettit?",
      options: ["Frihetsinnskrenking ved ressurssvikt/manglende evne", "Evne til ukontrollert innblanding", "Kontrollert innblanding", "Statens hovedoppgave"],
      explanation: "Non-vitiation er frihetstap ved ressurssvikt. Innblandings-/dominanskomponentene veier tyngre; ikke bland med ikke-dominans (feil #7).",
    },
    {
      question: "Hva illustrerer Odyssevs ved masten?",
      options: ["Kontrollert innblanding reduserer ikke friheten", "Ukontrollert innblanding", "Non-vitiation", "Positiv frihet"],
      explanation: "Odyssevs styrer sin egen binding — kontrollert innblanding opphever ikke friheten, i motsetning til ukontrollert.",
    },
    {
      question: "Hva er kjernen i «rettferdighet som rimelighet»?",
      options: ["Prinsippene frie og likeverdige ville valgt under rimelige vilkår", "En historisk samfunnskontrakt", "Kulturbestemt fordeling", "Arbeidsdeling etter anlegg"],
      explanation: "Rawls: rettferdsprinsipper er de frie og likeverdige personer ville valgt under rimelige vilkår — kontraktteori på høyere abstraksjonsnivå.",
    },
    {
      question: "Hva er utgangsposisjonen hos Rawls?",
      options: ["Den tenkte valgsituasjonen der prinsipper velges", "En historisk avtale", "Det sosiale lotteriet", "Refleksiv likevekt"],
      explanation: "Utgangsposisjonen er den hypotetiske valgsituasjonen. Sammen med uvitenhetssløret er den det sentrale poenget.",
    },
    {
      question: "Hva skjuler uvitenhetssløret?",
      options: ["Egen klasse, evner og livssyn", "Bare inntekt", "Ingenting", "Alle rettferdsprinsipper"],
      explanation: "Sløret skjuler partenes egen posisjon, evner og livssyn, slik at ingen skreddersyr prinsippene. Ulike deler er ulikt godt motivert (subtilt).",
    },
    {
      question: "Hva er maximin-regelen?",
      options: ["Velg alternativet med best verst-tenkelig utfall", "Velg alternativet med best mulig utfall", "Velg tilfeldig", "Maksimer gjennomsnittet"],
      explanation: "Maximin: sikre deg mot det verste under radikal usikkerhet — rasjonelt når oddsen er ukjent og innsatsen er hele livsutsikten.",
    },
    {
      question: "Hva er forskjellsprinsippet?",
      options: ["Ulikheter tillates kun til størst fordel for de dårligst stilte", "Alle skal ha nøyaktig like mye", "Frihet før alt annet", "Sjanselikhet i utdanning"],
      explanation: "Forskjellsprinsippet (prinsipp 2b): ulikhet tillates bare hvis den gagner de dårligst stilte mest. Ikke bland med sjanselikhet (feil #7).",
    },
    {
      question: "Hva innebærer leksikalsk prioritet hos Rawls?",
      options: ["Frihet før sjanselikhet før forskjellsprinsipp", "Alle prinsipper veies likt", "Forskjellsprinsippet først", "Sjanselikhet før frihet"],
      explanation: "Leksikalsk prioritet: prinsipp 1 (frihet) før 2a (sjanselikhet) før 2b (forskjellsprinsipp). Frihet kan ikke ofres for velstand.",
    },
    {
      question: "Hva er sosiale primærgoder?",
      options: ["Goder enhver rasjonell person vil ha uansett livsplan (rettigheter, inntekt, selvrespekt)", "Kun penger", "Kapabiliteter", "Communal provision"],
      explanation: "Primærgoder: rettigheter, inntekt/formue, selvrespektens grunnlag — målestokken for hvem som er dårligst stilt.",
    },
    {
      question: "Hva begrunner forskjellsprinsippet?",
      options: ["Det sosiale og naturlige lotteri (fødsel/talent er moralsk vilkårlig)", "At alle fortjener sin startposisjon", "Kulturbestemt fordeling", "Skadeprinsippet"],
      explanation: "Fødsel og talent er moralsk vilkårlige — ingen fortjener startfortrinnene, derfor skal ulikhet gagne de dårligst stilte.",
    },
    {
      question: "Hva er Lockes kontrakt?",
      options: ["Et faktisk, pågående samtykke med full informasjon", "Et hypotetisk prinsippvalg bak slør", "Communal provision", "Arbeidsdeling"],
      explanation: "Lockes kontrakt er et faktisk, vedvarende samtykke der partene vet hvem de er — motsatt av Rawls' hypotetiske valg bak slør.",
    },
    {
      question: "Hva er forskjellen uttrykkelig vs. stilltiende samtykke (Locke)?",
      options: ["Stilltiende: den som nyter samfunnets goder har samtykket; uttrykkelig: eksplisitt", "De er identiske", "Uttrykkelig gjelder bare konger", "Stilltiende er ugyldig"],
      explanation: "Uttrykkelig (explicit) er eksplisitt samtykke; stilltiende (tacit) er at den som nyter godene har samtykket. Ikke bland dem (feil #7).",
    },
    {
      question: "Hva er Hume-kritikken av Locke?",
      options: ["Stilltiende samtykke er en fiksjon — de fleste kan ikke reelt forlate samfunnet", "At Locke overser talent", "At kontrakten er for streng", "At Locke er relativist"],
      explanation: "Hume: stilltiende samtykke er en fiksjon fordi de fleste ikke reelt kan forlate samfunnet, så samtykket er ikke fritt.",
    },
    {
      question: "Hva er «communal provision» hos Walzer?",
      options: ["Velferd som en kulturbestemt fellesbeslutning", "Et universelt rettferdsprinsipp", "Uvitenhetssløret", "Ikke-dominans"],
      explanation: "Communal provision: velferdens omfang er noe fellesskapet kulturbestemt bestemmer — ikke et universelt prinsipp. Kontrasten til Rawls.",
    },
    {
      question: "Hva er kontrasten Walzer vs. Rawls?",
      options: ["Kulturbestemt fellesbeslutning vs. universelle prinsipper bak slør", "Begge har universelle prinsipper", "Begge er kulturrelativister", "Walzer bruker uvitenhetsslør"],
      explanation: "Walzer: lokal, kulturbestemt fellesforståelse. Rawls: samme universelle prinsipper for alle bak slør.",
    },
    {
      question: "Hva er Platons sentrale poeng om rettferdighet?",
      options: ["Arbeidsdeling etter naturlige anlegg (hver på sin plass)", "Kapabiliteter på plass", "Maximin", "Skadeprinsippet"],
      explanation: "Rettferdighet = arbeidsdeling etter naturlige anlegg. Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hvilke er Platons tre grupper?",
      options: ["Produsenter, krigere og styrende (voktere)", "Rike, fattige og mellomklasse", "Frie, slaver og borgere", "Prester, konger og bønder"],
      explanation: "De tre gruppene: produsenter, krigere og styrende («voktere»), hver etter naturlige anlegg. Ikke bland dem (feil #7).",
    },
    {
      question: "Hvorfor mangler Platons voktere privateiendom og familie?",
      options: ["Det er middelet mot maktmisbruk", "De er for fattige", "Det er tilfeldig", "For å øke produksjonen"],
      explanation: "Fravær av eiendom/familie for vokterne er *middelet* mot at makten misbrukes, sammen med oppdragelse (subtilt poeng).",
    },
    {
      question: "Hvordan bygges Platons argument?",
      options: ["Deskriptive antakelser + normative premisser → konklusjon", "Ren normativ postulering", "Kun empiriske observasjoner", "Matematisk bevis"],
      explanation: "Argumentet bygger på deskriptive antakelser (ulike anlegg) + normative premisser (samfunnet bør ordnes slik) — ikke ren postulering.",
    },
    {
      question: "Hva er sosial rettferdighet hos Nussbaum?",
      options: ["At alle har de artsbestemte kapabilitetene på plass", "Kun formell frihet", "Arbeidsdeling", "Kulturbestemt fordeling"],
      explanation: "Sosial rettferdighet = at alle har de artsbestemte kapabilitetene realisert, ikke bare formell frihet. Det sentrale poenget.",
    },
    {
      question: "Hva er spenningen universalisme vs. pluralisme hos Nussbaum?",
      options: ["Én liste for alle (universalisme) vs. lokal spesifisering (pluralisme)", "Frihet vs. likhet", "Rawls vs. Locke", "Negativ vs. positiv frihet"],
      explanation: "Universalisme = én felles liste; pluralisme = lokal spesifisering. En *spenning*, ikke ett rent valg. Ikke bland dem (feil #7).",
    },
    {
      question: "Hva er Aristoteles-koblingen hos Nussbaum?",
      options: ["Staten skal legge til rette for utvikling av menneskelige anlegg", "At mennesket er et politisk dyr", "At dyd er en middelvei", "At lykke er målet"],
      explanation: "Den aristoteliske begrunnelsen: staten skal legge til rette for utviklingen av menneskelige anlegg — grunnlaget for kapabilitetstilnærmingen.",
    },
    {
      question: "Hva er dimensjonen i Platon vs. Nussbaum?",
      options: ["Forskjell i anlegg (Platon) vs. menneskelig likhet + kapabiliteter (Nussbaum)", "Begge vektlegger forskjell i anlegg", "Begge vektlegger likhet", "Universelle prinsipper vs. slør"],
      explanation: "Platon: rettferd = arbeidsdeling etter forskjell i anlegg. Nussbaum: bygd på menneskelig likhet og kapabiliteter. 2025 c-arketypen.",
    },
    {
      question: "Hva er skillet klok vs. etisk politikk (Machiavelli)?",
      options: ["Klok = instrumentelt rasjonell statskunst; etisk = den moralske vurderingen ved siden av", "Klok = moralsk; etisk = umoralsk", "De er identiske", "Klok gjelder krig, etisk fred"],
      explanation: "Klok politikk er instrumentelt rasjonell (virtù, Fortuna); etisk politikk er den moralske vurderingen. Det sentrale skillet.",
    },
    {
      question: "Hva er virtù hos Machiavelli?",
      options: ["Fyrstens dyktighet/handlekraft til å mestre omstendighetene", "Moralsk dyd", "Flaks", "Grusomhet"],
      explanation: "Virtù er fyrstens dyktighet og handlekraft. Sammen med Fortuna avgjør den politisk suksess — del av «klok politikk».",
    },
    {
      question: "Hva er Fortuna hos Machiavelli?",
      options: ["Tilfeldighetens/lykkens rolle i politikken", "Fyrstens dyktighet", "En bystat", "Et etisk prinsipp"],
      explanation: "Fortuna er tilfeldighetens rolle; fyrsten trenger virtù for å demme opp for den. Del av den kloke politikken.",
    },
    {
      question: "Hva menes med at Machiavelli veksler?",
      options: ["Mellom rendyrket konsekvensialisme og et deontologisk innslag", "Mellom to bystater", "Mellom fred og krig", "Mellom to fyrster"],
      explanation: "Machiavelli veksler mellom ren konsekvensialisme og et deontologisk innslag — det vanskeligste, A-givende poenget. Å lese ham endimensjonalt er feil #10.",
    },
    {
      question: "Hva er politisk vs. generell amoralisme (Machiavelli)?",
      options: ["Amoralismen gjelder statskunsten, ikke moralen generelt", "All moral avvises", "Bare privatmoral gjelder", "De er samme ting"],
      explanation: "Amoralismen er *politisk* — den gjelder statskunsten, ikke moralen generelt. Å blande dem er feil #7. Fyrsten skal også *fremstå* moralsk.",
    },
    {
      question: "Hva illustrerer Cesare Borgia?",
      options: ["Klok politikk og «god bruk av grusomhet» i praksis", "Etisk fullkommen politikk", "Fortunas nederlag", "Positiv frihet"],
      explanation: "Cesare Borgia er Machiavellis illustrasjon på klok politikk og «god bruk av grusomhet» — konkretiserer skillet klok/etisk.",
    },
    {
      question: "Hva er Mills tre sannhetsargumenter?",
      options: ["Intellektuell ydmykhet, sannhet gjennom dialog, den anti-dogmatiske funksjonen", "Frihet, likhet, brorskap", "Negativ, positiv, republikansk frihet", "Klok, etisk, amoralsk politikk"],
      explanation: "(1) intellektuell ydmykhet (vi kan ta feil); (2) sannhet gjennom dialog; (3) anti-dogmatisk funksjon (sannhet uten motstand blir dødt dogme).",
    },
    {
      question: "Hva er den anti-dogmatiske funksjonen (Mill)?",
      options: ["En sannhet uten motstand blir et dødt dogme", "At all mening er relativ", "At staten alltid tar feil", "At flertallet har rett"],
      explanation: "Tredje argument: også sanne meninger trenger motstand, ellers blir de døde dogmer vi mister grunnene til å tro på.",
    },
    {
      question: "Hva er skadeprinsippet (Mill)?",
      options: ["Frihet kan bare innskrenkes for å hindre skade på andre", "Frihet kan innskrenkes for personens eget beste", "All ytring er forbudt", "Staten kan gjøre hva den vil"],
      explanation: "Skadeprinsippet: frihet kan bare innskrenkes for å hindre skade på andre. Waldron utvider dette skadebegrepet.",
    },
    {
      question: "Hva er Brison-kritikken av Mill?",
      options: ["Offentligheten drives av profitt, ikke sannhetssøken; forvrengt av ulikhet og privat sensur", "At Mill er for streng", "At skadeprinsippet er for vidt", "At ytringsfrihet er farlig"],
      explanation: "Brison utfordrer Mills optimisme: ideenes marked er forvrengt av profitt, ulikhet og privat sensur. Forankret HYB-innvending.",
    },
    {
      question: "Hva er Dworkins argument mot hatytringslov?",
      options: ["Legitimitet — alle må få ytre seg for at vedtak skal være legitime", "Menneskeverd/social standing", "Skadeprinsippet", "Kapabiliteter"],
      explanation: "Dworkin: å forby hatytringer undergraver vedtakets legitimitet, fordi alle må ha fått ytre seg på egne premisser. Prosessargument.",
    },
    {
      question: "Hva er Waldrons argument for hatytringslov?",
      options: ["Menneskeverd som social standing undergraves av hatretorikk", "Legitimitet i prosessen", "At all ytring er skadelig", "Communal provision"],
      explanation: "Waldron: hatretorikk undergraver utsatte gruppers likeverdige anseelse (social standing). Han bygger på og bryter med Mills skadeprinsipp.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor veldedighet?",
      options: ["Rettigheten kan ikke trekkes tilbake fritt, så dominansen fjernes", "Fordi staten er rikere", "Fordi veldedighet er ulovlig", "Fordi mottakeren får mer"],
      explanation: "Privat veldedighet gjør mottakeren avhengig av giverens ukontrollerte vilje (dominans); velferd som rettighet står under kontrollerbar rett, ikke luner.",
    },
    {
      question: "Hva er permanent borgerkontroll (Pettit)?",
      options: ["Bemyndigelsen må kunne trekkes tilbake og utøves løpende, ikke bare engangssamtykke", "Ett samtykke ved inngåelse er nok", "Borgerne kan aldri kontrollere staten", "Kontroll = veldedighet"],
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
      question: "En oppgave gir fire utdrag [A]–[D] og ber deg forklare hva de betyr. Hvilken sjanger?",
      options: ["SIT (sitattolkning)", "RED (redegjørelse)", "SAM (sammenligning)", "ANV (anvendelse)"],
      explanation: "Utdrag [A]–[D] som skal tolkes og plasseres er SIT. Behandle alle utdrag (feil #4-vaksine).",
    },
    {
      question: "En oppgave lyder «Gjør rede for X og drøft kort i lys av en kritiker». Hvilken sjanger?",
      options: ["HYB (redegjør+drøft-hybrid)", "RED alene", "SAM alene", "SIT alene"],
      explanation: "«Gjør rede for X og drøft kort» er HYB (2023→) — solid redegjørelse + forankret innvending + forbeholden vurdering.",
    },
    {
      question: "En oppgave lyder «Gjør rede for Berlins frihetsbegrep». Hvilken sjanger?",
      options: ["RED (redegjørelse)", "SIT (sitattolkning)", "SAM (sammenligning)", "HYB (hybrid)"],
      explanation: "«Gjør rede for X» er RED — fagets grunnform: presis trinnvis argumentrekonstruksjon.",
    },
    {
      question: "Hvilken vurderingsakse er viktigst?",
      options: ["Akse 1 — treff det sentrale poenget", "Akse 2 — presis begrepsforståelse", "Akse 3 — subtilt ekstra", "Akse 4 — selvstendighet"],
      explanation: "Akse 1 er tyngst. Bommer du på kjernepoenget, hjelper ikke bredde eller subtilitet.",
    },
    {
      question: "Hva kjennetegner et A-svar ved helhetsvurdering?",
      options: ["Sentralt poeng truffet + minst ett subtilt ekstra og/eller selvstendig sammenligning", "Bare lengde", "Sentralt poeng mistet", "Ingen relevant kunnskap"],
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
      options: ["Ingen innledning/avslutning — start med tenkeren og det sentrale poenget", "Skriv en fyldig innledning", "Avslutt alltid med en oppsummering", "Referer litteraturen først"],
      explanation: "Oppvarming er bortkastet i et 4-timers essayfag. Start med tenkeren og treff kjernepoenget i første avsnitt.",
    },
    {
      question: "Hva er det sentrale poenget i en RED om Pettits ikke-dominans?",
      options: ["Fravær av evne til ukontrollert innblanding (muligheten, ikke faktisk innblanding)", "Fravær av enhver hindring", "Arbeidsdeling etter anlegg", "Kulturbestemt fordeling"],
      explanation: "Ikke-dominans = fravær av *evne* til ukontrollert innblanding. Muligheten er frihetsberøvelse — den liberale despoten dominerer uten å gripe inn.",
    },
    {
      question: "I prøve 2s SIT-del: hva skiller utdrag [A] (om at velgerne ikke skal kjenne sin plass) fra [B] (om å sikre seg mot det verste)?",
      options: ["[A] motiverer sløret, [B] motiverer maximin", "De er samme poeng", "[A] gjelder Locke", "[B] motiverer sløret"],
      explanation: "[A] begrunner uvitenhetssløret (upartiskhet); [B] begrunner maximin (rasjonalitet under uvisse). Å smelte dem sammen er feil #7.",
    },
    {
      question: "Hva må ANV-svaret om veldedighet (prøve 3b) gjøre?",
      options: ["Bruke ikke-dominans på veldedigheten, ikke bare gjengi teorien", "Gjengi Pettits teori generelt", "Konkludere at mottakerne er frie fordi de får hjelp", "Sammenligne Berlin og Pettit"],
      explanation: "ANV krever at ikke-dominans *brukes* på veldedigheten: mottakeren er prisgitt giverens ukontrollerte vilje = dominert. Å gjengi generelt er feil #9.",
    },
    {
      question: "Hva er kjernen i HYB-oppgaven om Mill + Brison (prøve 3c)?",
      options: ["Redegjørelsen (tre sannhetsargumenter) er tyngdepunktet; Brison er forankret motpart", "Bare drøfting uten redegjørelse", "Bare gjengivelse av Mill", "En sammenligning av Mill og Locke"],
      explanation: "HYB: de tre sannhetsargumentene + skadeprinsippet er kjernen; Brison brukes som forankret innvending, ikke synsing (feil #8).",
    },
    {
      question: "Hva måler del (c) i prøve 4 (Platon vs. Nussbaum)?",
      options: ["Selvstendighet (Akse 4) — eksplisitte dimensjoner, ikke et referat av (a)+(b)", "Bare redegjørelse", "Bare flervalg", "Tidsbruk"],
      explanation: "Sammenligningsdelen er selvstendighetstesten: navngitte dimensjoner + forbeholden vurdering, ikke å gjenta redegjørelsene fra (a) og (b).",
    },
    {
      question: "Hva er det sentrale poenget om Platon (prøve 4a)?",
      options: ["Rettferdighet = arbeidsdeling etter naturlige anlegg", "Kapabiliteter på plass", "Uvitenhetssløret", "Skadeprinsippet"],
      explanation: "Platons sentrale poeng er arbeidsdeling etter naturlige anlegg (tre grupper). Mister du det, faller redegjørelsen (feil #1).",
    },
    {
      question: "Hva er det sentrale poenget om Nussbaum (prøve 4b)?",
      options: ["Sosial rettferdighet = at alle har de artsbestemte kapabilitetene på plass", "Communal provision", "Ikke-dominans", "Arbeidsdeling"],
      explanation: "Nussbaums sentrale poeng: sosial rettferdighet = at alle har de artsbestemte kapabilitetene realisert, ikke bare formell frihet.",
    },
    {
      question: "Hva rammer Akse 2 (presis tekst-/begrepsforståelse)?",
      options: ["Å hoppe over utdrag, løsrevet parafrase og upresise nabobegreper", "Å treffe det sentrale poenget", "Å skrive kort", "Å drøfte selvstendig"],
      explanation: "Akse 2 rammes av feil #4 (hoppe over), #5 (løsrevet parafrase) og #7 (blande nabobegreper som universalisme/pluralisme).",
    },
    {
      question: "Hva er utdragsfunksjonene i en SIT-oppgave?",
      options: ["Premiss, intuisjon eller illustrasjon", "Innledning, hoveddel, avslutning", "Tese, antitese, syntese", "Positiv, negativ, nøytral"],
      explanation: "Hvert utdrag klassifiseres som premiss (bærer argumentet), intuisjon (veloverveid oppfatning), eller illustrasjon (tekstens eget bilde).",
    },
    {
      question: "Hva sier helhetsvurderingen om en blank deloppgave (feil #6)?",
      options: ["Den stenger for A, men ikke nødvendigvis for bestått", "Automatisk stryk", "Ingen betydning", "Kan alltid veies opp til A"],
      explanation: "Ubesvart del stenger for A. Blank del krever ekstraordinær styrke i resten, men fører ikke automatisk til stryk.",
    },
    {
      question: "Hva er A-markøren (Akse 3) i en Rawls-redegjørelse?",
      options: ["At ulike deler av uvitenhetssløret er ulikt godt motivert", "At sløret finnes", "At Rawls skrev en bok", "At maximin nevnes"],
      explanation: "Det subtile ekstra som løfter til A: at ulike deler av sløret er ulikt godt teoretisk motivert — det sensor flagger som «veldig bra».",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å behandle Machiavelli endimensjonalt uten vekslingen", "Å hoppe over utdrag", "Å skrive for kort", "Å blande Rawls og Locke"],
      explanation: "Feil #10: å lese Machiavelli som ren amoralist/konsekvensialist uten vekslingen mot et deontologisk innslag og skillet politisk vs. generell amoralisme.",
    },
    {
      question: "Hva menes med «kort + korrekt = fullgodt»?",
      options: ["Presisjon og dybde, ikke lengde, avgjør karakteren", "Bare korte svar godtas", "Lange svar er alltid best", "Man skal droppe redegjørelsen"],
      explanation: "Sensor teller ikke ord. Et kort kjernesvar som treffer det sentrale poenget kan gi A; et langt svar som mister poenget faller til svak.",
    },
    {
      question: "Hva er den vanligste drøftingsfeilen (feil #8)?",
      options: ["Ren gjengivelse der oppgaven ber om drøfting/sammenligning", "For presise begreper", "For kort redegjørelse", "For mange dimensjoner"],
      explanation: "Feil #8: å levere referat i (c)-delen i stedet for selvstendig vurdering — rammer Akse 4 (selvstendighet).",
    },
    {
      question: "Hva er det sentrale poenget i Berlins negative frihet?",
      options: ["Fravær av forsettlig innblanding fra andre", "Fravær av enhver hindring, også manglende evne", "Evne til ukontrollert innblanding", "Selvrealisering"],
      explanation: "Negativ frihet = fravær av hindring påført av andre (ofte skjerpet Hayek-nært til *forsettlig* innblanding). Å definere den som fravær av enhver hindring mister grunnskillet andres hindring vs. manglende egen evne (feil #1/#7).",
    },
    {
      question: "Hva er strukturen i firetrinns-RED?",
      options: ["Plasser → gjengi med kjernebegrep → rekonstruer trinnvis → illustrer med eksempel", "Innledning → hoveddel → avslutning → kilder", "Tese → antitese → syntese → konklusjon", "Parafraser → oversett → gjenta → oppsummer"],
      explanation: "Firetrinns-RED: (1) plasser tenker+spørsmål; (2) gjengi med tekstens kjernebegrep; (3) rekonstruer premiss→konklusjon; (4) illustrer med tekstens eget eksempel.",
    },
    {
      question: "Hva er raushetsterskelen i HYB?",
      options: ["Sensor bruker skjønn og raushet i drøftingsdelen — moderat terskel i et innføringsemne", "At all drøfting er forbudt", "At bare lange svar godtas", "At redegjørelsen ikke teller"],
      explanation: "HYB er et innføringsemne; en fornuftig, forbeholden og forankret drøfting holder langt. Men ren gjengivelse (feil #8) holder ikke.",
    },
    {
      question: "Hvorfor foretrekker Pettit velferd som rettighet framfor privat veldedighet?",
      options: ["Rettigheten kan ikke trekkes tilbake fritt, så dominansen fjernes", "Fordi staten er rikere", "Fordi veldedighet er ulovlig", "Fordi mottakeren får mer penger"],
      explanation: "Privat veldedighet gjør mottakeren avhengig av giverens ukontrollerte vilje (dominans); velferd som rettighet står under kontrollerbar rett, ikke luner.",
    },
  ],
};

export default quizData_stv1100;
