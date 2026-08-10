import type { QuizQuestion } from './quiz-data';

const quizData_stv1400: Record<string, QuizQuestion[]> = {
  'stv1400-0-1': [
    {
      question: "Hvor mange essayoppgaver får du på eksamen i STV1400 i dag, hvor mange skal besvares, og hvor mye teller hver av dem?",
      options: ["Du får tre oppgaver, besvarer to, og hver av de to teller femti prosent.", "Du får tre oppgaver, besvarer alle tre, og hver av de tre teller like mye.", "Du får to oppgaver, besvarer begge, og den første teller seksti prosent.", "Du får fire oppgaver, besvarer to av dem, og den beste av de to teller mest."],
      explanation: "Siden H2020 har menyen bestått av tre essayalternativer der kandidaten besvarer to, med femti prosent på hver. Å svare på alle tre gir ingen ekstra uttelling og stjeler tid — det er feilen registeret fører som nummer ti. At den første eller den beste besvarelsen skulle telle mer, finnes det ikke belegg for: vektingen er lik.",
    },
    {
      question: "Hva skjer med karakteren hvis den ene av de to valgte besvarelsene strykes?",
      options: ["Hele eksamen strykes — en sterk besvarelse kan ikke kompensere for en strøket.", "Karakteren settes ut fra den besvarelsen som ikke ble strøket, med ett trinns trekk.", "De to besvarelsene slås sammen til et gjennomsnitt, slik at F og B blir omtrent D.", "Kandidaten får bestått så lenge den samlede vurderingen ligger over minstekravet."],
      explanation: "Strykregelen ligger under karakterskalaen som en egen sperre: begge de valgte besvarelsene må bestås, og stryk på én gir stryk på hele eksamen. Gjennomsnitts- og kompensasjonstankegangen er den vanligste misforståelsen her, og det er nettopp den som gjør skjev tidsbruk risikabelt. Karakteren er gradert A til F, men graderingen forutsetter at begge besvarelsene er bestått.",
    },
    {
      question: "Hva er den høyeste karakteren en besvarelse uten spor av drøfting kan oppnå?",
      options: ["D — drøfting kreves for C eller bedre, uansett hvor grundig redegjørelsen er.", "C — en grundig og velordnet redegjørelse veier opp for drøfting.", "B — dersom redegjørelsen er presis og har rikelig med norske eksempler.", "E — en besvarelse uten drøfting regnes alltid som helt under minstekravet."],
      explanation: "Drøftingsterskelen er regelen om at en besvarelse må inneholde drøfting for å nå C eller bedre; uten spor av drøfting havner den på D eller lavere. Grundighet og mengde norske eksempler flytter altså ikke besvarelsen over terskelen, selv om de teller på de andre aksene. At karakteren alltid skulle bli E, er heller ikke riktig: E er beskrivelsen av den informative redegjørelsen uten reell drøfting, og D ligger over.",
    },
    {
      question: "Hva skiller D-nivået fra E-nivået i dette emnet?",
      options: ["På D faller drøftingsforsøket tilbake i gjengivelse; på E mangler drøftingen.", "På D mangler de norske eksemplene helt, mens de er godt til stede på E-nivået.", "På D er fagbegrepene gjennomgående brukt feil, mens de er korrekt brukt på E-nivået.", "På D er besvarelsen for kort, mens den på E-nivået er utfyllende og lang nok."],
      explanation: "E beskriver en utfyllende og informativ redegjørelse med lite eller ingen reell drøfting, mens D beskriver en drøftingsdel som mest ligner en ny redegjørelse. Skillet går altså på om bestillingen er adressert, ikke på empiri, begrepsbruk eller lengde. Det er kontraintuitivt at D ligger over E selv om D-besvarelsen kan inneholde mindre korrekt kunnskap.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene er den som løfter en besvarelse fra god til beste?",
      options: ["Akse 4, selvstendighet og kobling på tvers av temaer.", "Akse 1, drøfting, som er den avgjørende for om svaret er godt.", "Akse 2, innholdsfylt begrepsbeherskelse og presis terminologi.", "Akse 3, forankring i konkret og navngitt norsk forvaltning."],
      explanation: "Akse 4 måler egne resonnementer og evnen til å koble temaer, og det er dette løftet som skiller A og B fra C. Akse 1 er en terskel og ikke et løft: uten drøfting kommer man ikke til C i det hele tatt, men drøfting alene bringer én bare dit. Akse 2 og 3 er grunnkrav som gjelder i begge delene av besvarelsen.",
    },
    {
      question: "Hva viser slot-koden H18u-K3 til?",
      options: ["Kortspørsmål 3 på den utsatte eksamenen høsten 2018.", "Kortspørsmål 3 på den ordinære eksamenen høsten 2018.", "Essayalternativ 3 på den utsatte eksamenen høsten 2018.", "Kortspørsmål 18 på eksamen i det tredje kvartalet 2018."],
      explanation: "Bokstaven K står for kortspørsmål og E for essayalternativ, mens u og o skiller den utsatte eksamenen fra den ordinære der begge finnes. H18u-K3 er derfor kortspørsmål nummer tre på H2018 utsatt. Forvekslingen mellom o og u er verdt å unngå nettopp fordi de to settene fra høsten 2018 ikke deler en eneste oppgave.",
    },
    {
      question: "Hvilken sjanger bestiller formuleringen «Drøft påstanden om at …»?",
      options: ["Påstandsdrøfting, kalt PÅ, der tesen skal prøves og ikke bare bekreftes.", "Komparativ redegjørelse, kalt KMP, der to størrelser skal stilles opp mot hverandre.", "Anvendelse, kalt ANV, der en gitt modell skal brukes på konkrete norske forhold.", "Kortsvar, kalt KS, der en presis definisjon og ett kort eksempel er nok til full uttelling."],
      explanation: "PÅ er sjangeren der oppgaven leverer en ferdig tese, og uttellingen ligger i motforestillingen som redder påstanden fra å bli et ja eller nei. KMP kjennes på at oppgaven navngir to størrelser som skal stilles opp mot hverandre, og ANV på at analyseverktøyet er gitt på forhånd. KS er den gamle kortsvarsformen, som ikke lenger er en eksamensdel.",
    },
    {
      question: "Hvilken status har kortsvarsformen, kalt KS, på dagens eksamen?",
      options: ["Den er ikke lenger en eksamensdel, men er godt råstoff for begrepstrening.", "Den er fortsatt en egen del av eksamen og teller førti prosent av karakteren.", "Den er valgfri: kandidaten kan bytte ut ett essay med tre kortsvar hvis hen vil.", "Den brukes bare på utsatt eksamen, der essayformen ikke er praktisk mulig."],
      explanation: "Kortsvarsdelen forsvant etter H2019 og kommer etter alt å dømme ikke tilbake, så det er ingen kortsvarsdel å forberede seg på. De 59 kortsvarsspørsmålene i arkivet treffer likevel nøyaktig de begrepene som i dag inngår i essayenes redegjørelsesdel, og er derfor mal for flashcards og begrepsbank. Vektingen førti prosent hørte til fasene til og med H2019.",
    },
    {
      question: "Hvor mange terminer med fullstendig oppgavetekst hviler denne bokas frekvenstall på?",
      options: ["16 terminer, fra 19 arkivfiler: 10 oppgavesett og 9 sensorveiledninger.", "8 terminer, fra 14 arkivfiler: 5 oppgavesett og 9 sensorveiledninger.", "26 terminer, fra 19 arkivfiler, fordi både høst og vår er dekket i perioden.", "10 terminer, fordi bare de rene oppgavesettene gjengir hele oppgaveteksten."],
      explanation: "Arkivet har 19 filer — 10 rene oppgavesett og 9 sensorveiledninger — og fordi veiledningene gjengir hele oppgaveteksten før kommentaren, blir dekningen 16 terminer med til sammen 98 oppgaveplasser. At bare settene skulle telle, er nettopp poenget som ville gitt for lav dekning. Vårterminer finnes ikke i arkivet i det hele tatt, og høsten 2016 mangler.",
    },
    {
      question: "Hva sier nivåregelen om hvordan menyen på tre essayalternativer har vært satt sammen?",
      options: ["Minst én oppgave har vært forankret kommunalt og minst én i statsforvaltningen.", "Minst to av de tre oppgavene har vært hentet fra det samme temaet som året før.", "Minst én av de tre oppgavene har vært en påstandsdrøfting i hver eneste termin.", "Minst to av de tre oppgavene har vært forankret i statsforvaltningen alene."],
      explanation: "I 6 av 6 terminer i dagens format har de tre alternativene inneholdt minst én oppgave forankret i det kommunale eller regionale nivået og minst én i statsforvaltningen. Regelen sier ikke hvilke temaer som kommer, bare hvordan menyen er satt sammen, og den er derfor et argument mot å droppe hele det ene nivået. Påstandsdrøfting med eksplisitt tese finnes i 3 av 6 terminer, ikke i alle.",
    },
    {
      question: "Du skal opp til utsatt eksamen. Hvilket sett er det beste enkeltgrunnlaget for å forutsi hva som kommer?",
      options: ["Fjorårets ordinære sett, ut fra det ene tilfellet arkivet dokumenterer.", "Årets ordinære sett, siden det er det ferskeste settet som finnes.", "Settet fra tre til fire år tilbake, siden temaene roterer i den takten.", "Det siste utsatte settet som finnes, uansett hvor gammelt det er."],
      explanation: "H2017-settet og H2018 utsatt deler fire av åtte oppgaver ordrett, mens H2018 ordinær og H2018 utsatt ikke deler en eneste. Fjorårets ordinære sett er derfor det beste grunnlaget — men funnet hviler på H2018 alene, den eneste terminen i korpuset med både ordinær og utsatt eksamen, og skal brukes som sannsynlighet, ikke som regel. Treårsrotasjonen gjelder temaenes gjenkomst i ordinære sett, ikke oppbygningen av et utsatt sett.",
    },
    {
      question: "Hvilket tema er tyngst representert på essayplassene i dagens format, H2020 til H2025?",
      options: ["Fristilling, New Public Management og markedsmekanismer, i 4 av 6 terminer.", "Statlig styring av kommunesektoren, som forekommer i hver eneste av de 6 terminene.", "Velferdsstaten, som er bredest i arkivet og dermed også tyngst i dagens format.", "Den demokratiske styringskjeden, som ligger i 4 av 6 terminer i dagens format."],
      explanation: "Fristilling og New Public Management dekker 4 av 18 essayplasser fordelt på 4 av 6 terminer, og er dermed det tyngste temaet i dagens format. Statlig styring av kommunesektoren ligger i 2 av 6 terminer, ikke i alle, og velferdsstaten er bredest over hele arkivet uten å være det tyngste i dag — elleve av forekomstene ligger i kortsvarsformen som falt bort. Styringskjeden ligger i 1 av 6 terminer.",
    },
  ],
  'stv1400-0-2': [
    {
      question: "Hva er trinn 1 i firetrinns-essayet?",
      options: ["En kort, presis avklaring av oppgavens nøkkelbegreper på ett par avsnitt.", "En systematisk redegjørelse der hvert element i modellen forklares grundig.", "En disposisjon som listes opp for leseren før selve besvarelsen begynner.", "En kort presentasjon av hvilke pensumbidrag besvarelsen kommer til å bruke."],
      explanation: "Trinn 1 er avklaringen: leseren skal vite hva begrepene betyr før redegjørelsen begynner. Den systematiske gjennomgangen der begrepene fylles med innhold er trinn 2, og det er en vanlig feil å la trinn 1 svulme opp til en redegjørelse nummer to. En oppramset disposisjon eller en litteraturliste er ikke etterspurt i denne sjangeren.",
    },
    {
      question: "Hva gjør du med et begrep som først dukker opp i drøftingsdelen av oppgaven?",
      options: ["Du forklarer det i avklaringen, men kort — som utgangspunkt for drøftingen.", "Du lar det stå uforklart, siden bare redegjørelsesdelens begreper skal avklares.", "Du gir det en fullstendig redegjørelse på linje med oppgavens hovedbegreper.", "Du forklarer det først helt til slutt, når drøftingen er ferdig gjennomført."],
      explanation: "I et svar til studentene i H2024 presiseres det at også begreper som først opptrer i drøftingsdelen skal forklares, med allokeringseffektivitet som eksempel — men som utgangspunkt for drøftingen, ikke som en ny redegjørelse. Å la begrepet stå udefinert er en del av feilen registeret fører som nummer tre, og en full redegjørelse for det tar plass fra selve drøftingen.",
    },
    {
      question: "Hva er det sikreste kjennetegnet på at en tekst faktisk drøfter?",
      options: ["Den setter noe opp mot noe og sier hva utfallet avhenger av.", "Den bruker flere fagbegreper per avsnitt enn redegjørelsesdelen gjør.", "Den viser til flere pensumforfattere enn resten av besvarelsen.", "Den er lengre enn redegjørelsen og står i siste del av teksten."],
      explanation: "En drøfting kjennes på bevegelsen: to størrelser settes opp mot hverandre, og svaret gjøres avhengig av noe konkret. Verken antall fagbegreper, antall forfattere eller plassering i teksten avgjør dette — et langt sluttavsnitt kan godt være en komprimert redegjørelse, og det er nettopp den varianten som havner på D. Lengde er heller ikke et kriterium: en kort avveining teller mer enn en lang gjengivelse.",
    },
    {
      question: "Hva måler Akse 2, innholdsfylt begrepsbeherskelse?",
      options: ["At begrepene forklares og ikke bare listes opp, og at ordbruken er presis.", "At besvarelsen bruker så mange fagbegreper som mulig innenfor temaet.", "At begrepene knyttes til et navngitt norsk forvaltningseksempel hver gang.", "At kandidaten kobler begreper fra ulike temaer sammen på eget initiativ."],
      explanation: "Akse 2 handler om at hvert element i en modell forklares så leseren forstår hva det innebærer, og om at nabobegreper holdes fra hverandre. Å knytte begrepet til norsk empiri er Akse 3, og å koble på tvers av temaer er Akse 4 — de tre måler ulike ting. Mengde fagbegreper er ikke et mål i seg selv; oppramsing plasseres lavt selv når alt er korrekt.",
    },
    {
      question: "Hva må stå der for at et eksempel skal telle som norsk empirisk forankring?",
      options: ["Hva og hvor, hvilket begrep det belegger, og hva det faktisk viser.", "Et navngitt årstall, et navngitt departement og en navngitt reform.", "En henvisning til pensumforfatteren som har brukt det samme eksempelet.", "Minst to eksempler, slik at påstanden er belagt fra mer enn én kant."],
      explanation: "Et eksempel er konkret når det navngir hva og hvor, sier hvilket begrep det er et eksempel på, og sier hvilken påstand det gjør sannsynlig. Årstall, departementsnavn og pensumreferanser er ikke krav i seg selv, og to eksempler som bare ramses opp teller mindre enn ett som bærer argumentet. Stryketesten avgjør: faller påstanden sammen uten eksempelet, er forankringen reell.",
    },
    {
      question: "Hvilke tre bevegelser løfter en besvarelse fra C mot A?",
      options: ["Gradering, kobling på tvers og nyansering av en utbredt påstand.", "Flere eksempler, flere pensumforfattere og en lengre redegjørelse.", "Presis terminologi, ryddig disposisjon og en tydelig innledning.", "Kortere avsnitt, flere mellomtitler og en oppsummering til slutt."],
      explanation: "Akse 4 belønnes av at kandidaten graderer i stedet for å skille parvis, kobler inn et tema oppgaven ikke nevnte, eller viser at en utbredt påstand ikke helt holder. Presis terminologi og ryddig struktur hører til grunnkravene som allerede er oppfylt på C-nivå, og mer stoff eller flere navn løfter ikke alene. Formmessige grep som mellomtitler påvirker ikke plasseringen.",
    },
    {
      question: "Hvor stor del av besvarelsen bør drøftingen fylle, og hva er unntaket?",
      options: ["Rundt to tredeler — men halvparten holder når redegjørelsen selv krever mye plass.", "Nøyaktig halvparten — sensor teller opp de to delene og krever balanse mellom dem.", "Rundt en tredel — redegjørelsen er den delen som veier tyngst i vurderingen.", "Så mye som mulig — redegjørelsen kan i praksis kortes ned til noen få setninger."],
      explanation: "H2025-veiledningen gjengir en tommelfingerregel fra forelesning om at drøftingen bør fylle rundt to tredeler for de beste karakterene, med det uttrykkelige unntaket at halvparten holder der redegjørelsen i seg selv krever mye plass. Påstanden hviler på denne ene terminen og er en tommelfingerregel, ikke en opptelling. Å kutte redegjørelsen til nesten ingenting går utover Akse 2, som er et grunnkrav.",
    },
    {
      question: "Hva skal de første femten minuttene av eksamen brukes til?",
      options: ["Å lese alle tre oppgavene, velge de to du kan drøfte, og disponere begge.", "Å skrive innledningen til det første essayet mens du fortsatt er uthvilt.", "Å skrive ned alt du husker om temaene, så du ikke glemmer noe.", "Å lese gjennom alle tre oppgavene og begynne på den som ser kortest ut."],
      explanation: "De første femten minuttene går til settlesing, valg og stikkordsdisposisjon for begge de valgte oppgavene. Valgkriteriet er hvilke to du kan drøfte, ikke hvilke du kan mest om eller hvilken som ser enklest ut — det er drøftingen som avgjør om besvarelsen kommer over terskelen. Å skrive før disposisjonen er klar, er nettopp det som gir en overdimensjonert redegjørelse og en klemt drøfting.",
    },
    {
      question: "To ganger rundt 1 time og 45 minutter er 210 minutter, men eksamen varer 240. Hva er differansen?",
      options: ["Settlesing og valg i starten, og en sluttkontroll av begge svarene til slutt.", "En reservetid som kan legges til den ene besvarelsen ved behov.", "Tiden det tar å logge inn i eksamenssystemet og laste opp de ferdige svarene.", "En pause midt i eksamen som kandidaten kan velge å ta eller å droppe."],
      explanation: "De 30 minuttene som mangler i regnestykket, er de rundt femten første til settlesing, valg og disponering, og de rundt femten siste til gjennomlesing av begge besvarelsene. Anslaget på 1 time og 45 minutter per essay er skrivetid inkludert disponering og kontroll av det ene essayet. Å bruke differansen som reserve for favorittoppgaven er nettopp den skjeve fordelingen strykregelen straffer.",
    },
    {
      question: "Hva kjennetegner en besvarelse på E-nivå i STV1400?",
      options: ["En utfyllende og informativ redegjørelse med lite eller ingen drøfting.", "En kort besvarelse der både redegjørelsen og drøftingen er mangelfulle.", "En besvarelse med mange faktafeil, men med et godt forsøk på drøfting.", "En besvarelse som misforstår oppgaven og svarer på noe helt annet."],
      explanation: "E beskriver den grundige, korrekte redegjørelsen der bevegelsen som veier noe mot noe mangler — kandidaten kan stoffet, men har ikke adressert bestillingen. Mange faktafeil eller en misforstått oppgave hører til det laveste trinnet på skalaen, ikke til E. At besvarelsen skulle være kort, stemmer heller ikke: E-besvarelser er ofte de lengste redegjørelsene som skrives.",
    },
    {
      question: "Hva mangler en C-besvarelse sammenlignet med en A-besvarelse?",
      options: ["Noe som tilføres ut over det oppgaven ba om, og som belyser den.", "En drøfting — C-besvarelsen har bare en redegjørelse med god struktur.", "Korrekt bruk av fagbegreper, som først er på plass på A-nivået og ikke på C.", "Tilstrekkelig mengde fagstoff, siden A-besvarelser dekker mer av pensum."],
      explanation: "C betyr god redegjørelse og god drøfting uten den selvstendigheten som løfter høyere, så drøftingen og begrepsbruken er allerede på plass. Det som mangler, er en gradering, en kobling eller en nyansering som ikke sto i oppgaven. Forskjellen er ikke faktamengde: en A-besvarelse kan bygge på nøyaktig det samme stoffet som en C-besvarelse.",
    },
    {
      question: "Hva er indre fristilling?",
      options: ["At en oppgave skilles ut fra departementet, men blir innenfor forvaltningsorganformen.", "At en statlig virksomhet omdannes til aksjeselskap med eget styre.", "At staten selger seg helt ut av en virksomhet den tidligere eide og drev selv.", "At en kommunal tjeneste settes ut på anbud til en privat leverandør på kontrakt."],
      explanation: "Ved indre fristilling flyttes oppgaven typisk fra departement til direktorat, men forvaltningsorganformen beholdes: instruksjonsmyndigheten består, og styringen skjer gjennom mål og resultatkrav i stedet for enkeltsaksinstrukser. Omdanning til aksjeselskap er ytre fristilling, og å selge seg ut er privatisering. Å sette en tjeneste ut på anbud er konkurranseutsetting, som er noe annet igjen.",
    },
    {
      question: "Hva skjer med statsrådens instruksjonsmyndighet når en statlig virksomhet omdannes til aksjeselskap?",
      options: ["Den faller bort, og staten står overfor virksomheten som eier, ikke som overordnet.", "Den består uendret, siden staten fortsatt er den som har opprettet virksomheten.", "Den overføres til Stortinget, som da overtar den løpende styringen av selskapet.", "Den utvides, fordi selskapsformen gir staten flere styringsvirkemidler."],
      explanation: "Et aksjeselskap er et eget rettssubjekt med eget styre, så instruksjonsmyndigheten bortfaller og styringen må gå gjennom generalforsamling, styrevalg og eierskapsforventninger. Det er likevel ikke det samme som at styringen forsvinner — eierstyring er reell styring, og svekkelsen graderes videre når staten bare er minoritetseier. Stortinget overtar ingen løpende styring; ministeransvaret rekker heller ikke inn i selskapets drift.",
    },
    {
      question: "Hva går feil nummer 4 i feilregisteret ut på?",
      options: ["Teori uten norsk empirisk forankring — modellen anvendes ikke på noe konkret.", "Å blande redegjørelsen og drøftingen slik at leseren ikke ser hvor skillet går.", "Å ramse opp fagbegreper uten å fylle et eneste av dem med innhold leseren kan forstå.", "Å bruke plass på stoff som er faglig interessant, men som oppgaven ikke ber om."],
      explanation: "Feil nummer fire er teori uten norsk empirisk forankring, og varsellampen er at teksten kunne stått uendret i en lærebok om et hvilket som helst land. Sammenblanding av de to delene er feil nummer tre, oppramsing uten innhold er nummer to, og irrelevant utenomsnakk er nummer seks. De fire ligner på hverandre ved at ingen av dem er kunnskapshull — alle fire er ting kandidaten gjør med teksten.",
    },
    {
      question: "Hvorfor er ubalanse mellom de to besvarelsene direkte risikabelt i STV1400?",
      options: ["Fordi begge må bestås, slik at den svakeste avgjør om eksamen består.", "Fordi sensor trekker for at besvarelsene har ulik lengde, selv om begge er gode.", "Fordi den korteste besvarelsen automatisk vurderes strengere enn den lange.", "Fordi kandidaten da ikke rekker å svare på den tredje oppgaven i settet."],
      explanation: "Strykregelen gjør den svakeste av de to besvarelsene til den avgjørende: stryk på én gir stryk på hele eksamen, uansett hvor sterk den andre er. Ulik lengde er i seg selv ikke noe sensor trekker for, og korte besvarelser vurderes ikke strengere — presisjon slår lengde. Den tredje oppgaven skal uansett ikke besvares, og å skrive på den er en egen feil i registeret.",
    },
    {
      question: "Når skal en besvarelse lande skarpt, og når skal den lande betinget?",
      options: ["Skarpt i faglige spørsmål med belegg, betinget i politiske verdispørsmål.", "Alltid betinget — et toppsvar tar aldri tydelig stilling til noe som helst.", "Alltid skarpt — forbehold leses som usikkerhet og trekker ned vurderingen.", "Skarpt der pensum er entydig, og betinget der pensumbidragene er uenige med hverandre."],
      explanation: "Et faglig spørsmål som om indirekte styring fortsatt er styring, har et svar, og en skarp og empiriforankret konklusjon er en fullgod toppform der. Et verdispørsmål som om velferdsordninger bør være universelle, avgjøres ikke av faget, og skal landes betinget med vektingen synlig. Forbehold er altså et verktøy, ikke obligatorisk garnityr — og å skjule et verdivalg i faglig språk er svakere enn å si det åpent.",
    },
  ],
  'stv1400-1-1': [
    {
      question: "Hva kjennetegner en enhetsstat?",
      options: ["All offentlig myndighet ligger i utgangspunktet hos staten", "Lokale enheter har et myndighetsområde vernet av grunnloven", "Myndigheten er delt likt mellom staten og de lokale enhetene", "Kommunene henter myndigheten sin fra egne lokale konstitusjoner"],
      explanation: "I en enhetsstat ligger myndigheten i utgangspunktet hos de sentrale statsorganene, og lavere nivåer har det de er tildelt ved lov. At lokale enheter har et grunnlovsvernet område beskriver en føderal stat, og forestillingen om delt eller lokalt forankret myndighet treffer heller ikke: norske kommuner har ingen egen konstitusjon.",
    },
    {
      question: "Hva er den avgjørende forskjellen mellom en enhetsstat og en føderal stat?",
      options: ["Hvem som eier den lokale friheten, ikke hvor stor den er", "Hvor mye handlefrihet de lokale enhetene faktisk har", "Hvor mange forvaltningsnivåer landet er delt inn i", "Om de lokale enhetene har folkevalgte organer eller ikke"],
      explanation: "Skillet går på om lokal frihet er delegert eller grunnlovsbeskyttet. En norsk kommune kan ha stor faktisk handlefrihet og likevel stå svakere prinsipielt. Antall nivåer og folkevalgte organer varierer i begge statsformer og skiller dem ikke.",
    },
    {
      question: "Hva krever kommuneloven når staten vil begrense det kommunale selvstyret?",
      options: ["At begrensningen har hjemmel i lov", "At kommunestyret samtykker i begrensningen", "At begrensningen er tidsbegrenset til én valgperiode", "At staten kompenserer kommunen økonomisk for begrensningen"],
      explanation: "Kommuneloven krever lovhjemmel for inngrep i selvstyret. Staten trenger altså ikke kommunens samtykke, og loven stiller verken krav om tidsbegrensning eller om økonomisk kompensasjon som vilkår for å innskrenke selvstyret.",
    },
    {
      question: "Hva sier nærhetsprinsippet?",
      options: ["At oppgaver fortrinnsvis bør legges til nivået nærmest innbyggerne", "At oppgaver bør styres med færrest mulig detaljerte krav fra staten", "At kommunen skal lokalisere tjenestene sine nær der innbyggerne bor", "At staten skal høre kommunene før den vedtar nye plikter for kommunesektoren"],
      explanation: "Nærhetsprinsippet handler om hvilket forvaltningsnivå en oppgave bør ligge på. Det sier ikke noe om hvor detaljert oppgaven kan styres etterpå, ikke noe om den geografiske plasseringen av tjenestesteder, og ikke noe om høringsplikt.",
    },
    {
      question: "Hva menes med territoriell inndeling i denne sammenhengen?",
      options: ["Hvor mange enheter og nivåer forvaltningen er delt i", "Hvilke oppgaver som ligger på hvert forvaltningsnivå", "Hvordan kommunen deler sitt eget område inn i soner og kretser", "Hvordan statlige etater fordeler seg geografisk utover landet"],
      explanation: "Territoriell inndeling gjelder antall enheter, grensene mellom dem og antall nivåer. Oppgavefordelingen mellom nivåene er funksjonsfordeling, som er organiseringens andre ledd, og de to må holdes fra hverandre i en redegjørelse.",
    },
    {
      question: "Hvilke to ledd består organiseringsdelen av redegjørelsen om statlig styring av?",
      options: ["Territoriell inndeling og funksjonsfordeling", "Juridiske, økonomiske og pedagogiske virkemidler", "Detaljstyring og rammestyring av kommunene og fylkene", "Kommunalt selvstyre og statlig tilsynsmyndighet"],
      explanation: "Organiseringen er inndeling pluss funksjonsfordeling. Juridiske og økonomiske virkemidler hører til redegjørelsens andre hoveddel, og detaljstyring mot rammestyring er en akse for å beskrive styringens form, ikke organiseringen.",
    },
    {
      question: "Hva innebærer generalistkommuneprinsippet?",
      options: ["At alle kommuner har samme oppgaveportefølje uansett størrelse", "At kommunene selv velger hvilke oppgaver de vil påta seg", "At store kommuner får flere oppgaver enn små kommuner", "At kommunen skal løse alle oppgaver i egen regi"],
      explanation: "Prinsippet innebærer samme oppgaver, lovverk og finansiering for alle kommuner uansett størrelse. At store kommuner får mer er oppgavedifferensiering, altså det motsatte, og prinsippet sier ingenting om at kommunen må løse oppgavene alene.",
    },
    {
      question: "Hva er oppgavedifferensiering?",
      options: ["At kommuner får ulike oppgaver etter størrelse", "At samme oppgave løses ulikt fra kommune til kommune", "At staten deler en oppgave mellom flere forvaltningsnivåer", "At kommunen fordeler oppgaver mellom sine egne enheter"],
      explanation: "Oppgavedifferensiering betyr at oppgaveporteføljen varierer med kommunens størrelse eller kapasitet. At samme oppgave utføres ulikt lokalt er variasjon i praksis, ikke differensiering av selve porteføljen, og intern arbeidsdeling i kommunen er noe helt annet.",
    },
    {
      question: "Hva er den vanligste forvekslingen knyttet til ordet generalistkommune?",
      options: ["At prinsippbetydningen blandes med lokalstyreordningen", "At det blandes med begrepet interkommunalt samarbeid om oppgaver", "At det blandes med kommunens plikt til å utrede sammenslåing", "At det blandes med skillet mellom kommune og fylkeskommune"],
      explanation: "Ordet betyr enten at alle kommuner har samme oppgaver uansett størrelse, eller en multifunksjonell og folkevalgt lokal enhet i firfeltstabellen over lokalstyreordninger. Forvekslingen er en dokumentert trekkgrunn; de tre andre blandingene er ikke det samme problemet.",
    },
    {
      question: "Hvor mange kommuner hadde Norge etter kommunereformen fra 2020?",
      options: ["356", "428", "422", "298"],
      explanation: "Reformen tok antallet fra 428 ved reformens start til 356 fra 2020. Tallet 428 er utgangspunktet og ikke resultatet, mens de øvrige tallene ikke svarer til noen fase i reformen.",
    },
    {
      question: "Hva skjedde med antallet fylker etter regionreformen?",
      options: ["Det gikk fra atten til elleve, og siden opp til femten", "Det gikk fra nitten til elleve, og har ligget fast siden", "Det gikk fra atten til femten fylker i ett eneste trinn", "Det gikk ned til elleve og deretter videre ned til ni"],
      explanation: "Regionreformen tok antallet fra atten til elleve fra 2020, og tre av storfylkene ble senere delt opp igjen, slik at landet nå har femten. At tallet har ligget fast, eller at nedgangen fortsatte, stemmer ikke med den delvise reverseringen.",
    },
    {
      question: "Hvilket forvaltningsnivå har ansvaret for videregående opplæring?",
      options: ["Fylkeskommunen", "Kommunen der eleven bor", "Staten gjennom et direktorat", "Staten gjennom helseforetakene"],
      explanation: "Videregående opplæring ligger hos fylkeskommunen, fordi et bredt programtilbud krever større elevgrunnlag enn en kommune gir. Kommunen har grunnskolen, mens helseforetakene driver sykehusene og ikke skoler.",
    },
    {
      question: "Hvilket hensyn forklarer best at sykehusene ble overført fra fylkeskommunene til staten?",
      options: ["Stordrift, spesialisering og likhet i tilbudet", "Ønsket om å styrke det regionale folkevalgte nivået", "Kravet om nærhet mellom tjenesten og innbyggerne", "Behovet for å redusere antallet forvaltningsnivåer"],
      explanation: "Overføringen bygde på hensynet til stordrift, spesialisert kompetanse og likt tilbud over hele landet. Den svekket snarere enn styrket det regionale folkevalgte nivået, og nærhetshensynet trekker i motsatt retning.",
    },
    {
      question: "Hva er det bærende mønsteret i funksjonsfordelingen mellom nivåene?",
      options: ["Likhet og stordrift trekker oppgaver oppover, nærhet nedover", "Dyre oppgaver legges til staten, billige til kommunen", "Lovpålagte oppgaver legges til staten, frivillige til kommunen", "Oppgaver med mange ansatte legges alltid til det største nivået"],
      explanation: "Fordelingen følger avveiningen mellom nærhet og lokal tilpasning på den ene siden og likhetskrav og stordrift på den andre. Kostnad, lovpålegg og antall ansatte forklarer ikke fordelingen: kommunene har både dyre og lovpålagte oppgaver med svært mange ansatte.",
    },
    {
      question: "Hva er statsforvalterens rolle overfor kommunene?",
      options: ["Klageinstans, tilsynsmyndighet og statlig veileder", "Overordnet folkevalgt organ for alle kommunene i fylket", "Fylkeskommunens øverste administrative leder og budsjettansvarlige", "Sekretariat for kommunestyrene i hele fylket"],
      explanation: "Statsforvalteren er statens representant i fylket, med klagebehandling, tilsyn og veiledning som hovedroller. Embetet er ikke folkevalgt, ikke en del av fylkeskommunen og ikke et sekretariat for kommunene.",
    },
    {
      question: "Hvordan er forholdet mellom kommunen og fylkeskommunen?",
      options: ["De er sideordnede nivåer med hver sine oppgaver", "Fylkeskommunen er overordnet kommunene i fylket", "Fylkeskommunen er klageinstans for kommunale vedtak", "Kommunen er et underledd av fylkeskommunens administrasjon"],
      explanation: "Kommune og fylkeskommune er sideordnede forvaltningsnivåer. Klageinstansrollen ligger hos statsforvalteren, ikke hos fylkeskommunen, og det finnes ikke noe hierarki mellom de to folkevalgte nivåene.",
    },
    {
      question: "Hvilket problem er interkommunalt samarbeid først og fremst et svar på?",
      options: ["At små kommuner mangler fagmiljø til lovpålagte oppgaver", "At staten krever at flere kommuner slår seg sammen", "At kommunene har for mange folkevalgte organer i drift", "At fylkeskommunen har mistet oppgaver til staten"],
      explanation: "Samarbeidet løser kapasitetsproblemet generalistkommuneprinsippet skaper: alle skal levere det samme, men ikke alle har fagmiljøet alene. Det er ikke et svar på statlige sammenslåingskrav, og har ingenting med antallet folkevalgte organer eller fylkeskommunens rolle å gjøre.",
    },
    {
      question: "Hva er den demokratiske kostnaden ved omfattende interkommunalt samarbeid?",
      options: ["Beslutninger flyttes til organer utenfor kommunestyret", "Kommunestyret mister retten til å vedta eget budsjett", "Staten overtar ansvaret for tjenesten det gjelder", "Innbyggerne mister klageretten på vedtak i saken"],
      explanation: "Kostnaden er at avgjørelser havner i styrer og representantskap utenfor kommunestyret. Budsjettmyndigheten består, ansvaret forblir kommunalt og ikke statlig, og klageretten faller ikke bort fordi oppgaven løses i samarbeid.",
    },
    {
      question: "Hvorfor er selve inndelingen et statlig styringsvirkemiddel?",
      options: ["Fordi enhetenes størrelse avgjør hva staten kan delegere til dem", "Fordi staten fastsetter kommunegrensene i statsbudsjettet", "Fordi større kommuner får høyere rammetilskudd per innbygger", "Fordi inndelingen bestemmer hvem som er klageinstans"],
      explanation: "Ved å endre enhetenes størrelse endrer staten hva som i det hele tatt kan delegeres, og dermed hvor mye detaljstyring som blir nødvendig. Grensene fastsettes ikke gjennom budsjettet, og verken tilskuddsnivå per innbygger eller klageordningen følger av inndelingen på denne måten.",
    },
    {
      question: "Hva er hovedargumentet for å beholde ett felles oppgavesystem for alle kommuner?",
      options: ["Likt ansvar gir likt tjenestetilbud uansett bosted", "Små kommuner blir da fritatt for de tyngste oppgavene", "Staten slipper å bruke økonomiske virkemidler i styringen", "Interkommunalt samarbeid blir da helt unødvendig"],
      explanation: "Argumentet hviler på fordelingsverdien i at ansvaret er likt overalt, og på at ett system er enklere å styre og finansiere. Å frita små kommuner er derimot differensiering, altså det motsatte standpunktet, og prinsippet fjerner verken behovet for økonomiske virkemidler eller for samarbeid.",
    },
    {
      question: "Hva er hovedargumentet for oppgavedifferensiering?",
      options: ["Kommunene er så ulike at ett system passer ingen av dem", "Differensiering gir staten flere styringsvirkemidler å velge mellom", "Differensiering gjør kommunesammenslåing rettslig enklere", "Differensiering fjerner behovet for statlig tilsyn"],
      explanation: "Argumentet er at et system dimensjonert for gjennomsnittet verken passer den minste eller den største kommunen. Differensiering handler om oppgavefordeling, ikke om statens virkemiddelbruk, og verken sammenslåingsregler eller tilsynsbehov endres av den grunn.",
    },
    {
      question: "Hvilket pensumbidrag bærer framstillingen av inndeling, funksjonsfordeling og kommunal økonomi?",
      options: ["Fiva, Hagen og Sørensen om kommunal organisering", "Christensen mfl. om forvaltning og politisk styring", "Jacobsen om lokaldemokrati og deltakelse i kommunen", "Halvorsen mfl. om den norske velferdsstatens utvikling"],
      explanation: "Fiva, Hagen og Sørensen bærer kommunal organisering og økonomi, og dermed også de økonomiske styringsvirkemidlene. Christensen mfl. eier byråkratimodellene og fristillingen, Jacobsen lokaldemokratiet og deltakelsen, og Halvorsen mfl. velferdsstaten.",
    },
  ],
  'stv1400-1-2': [
    {
      question: "Hvilke tre kategorier grupperes statens styringsvirkemidler i?",
      options: ["Juridiske, økonomiske og pedagogiske virkemidler", "Lovpålagte, frivillige og anbefalte statlige virkemidler", "Statlige, regionale og kommunale virkemidler", "Bindende, delvis bindende og rådgivende ordninger"],
      explanation: "Tredelingen juridiske, økonomiske og pedagogiske er den sensor leter etter i redegjørelsen. De andre inndelingene finnes ikke i pensums apparat, og et svar som bygger på dem, mister strukturen oppgaven ber om.",
    },
    {
      question: "Hvorfor må staten styre kommunene indirekte?",
      options: ["Kommunen er et eget rettssubjekt med folkevalgt ledelse", "Kommunen ligger under statsforvalteren og ikke departementet", "Grunnloven forbyr staten å gi pålegg direkte til den enkelte kommunen", "Kommunen finansierer virksomheten sin med egne skatteinntekter"],
      explanation: "Kommunen er ikke en etat under departementet, men et eget rettssubjekt med et eget folkevalgt organ, og kan derfor ikke instrueres direkte. Grunnloven forbyr ikke statlige pålegg, og kommunens egne skatteinntekter er bare én av flere inntektskilder.",
    },
    {
      question: "Hva skiller generelle lover fra særlover i styringen av kommunene?",
      options: ["Generelle lover regulerer formen, særlover regulerer tjenestens innhold", "Generelle lover er bindende, mens særlover bare er anbefalinger", "Generelle lover gjelder staten, mens særlover gjelder kommunene", "Generelle lover vedtas av Stortinget, mens særlovene vedtas av departementene"],
      explanation: "Kommuneloven og forvaltningsloven regulerer hvordan kommunen organiserer seg og treffer vedtak; særlovene regulerer innholdet i den enkelte tjenesten. Begge lovtypene er bindende og vedtas av Stortinget, og begge retter seg mot kommunene.",
    },
    {
      question: "Hva er et standardkrav i denne sammenhengen?",
      options: ["En lovfestet minstestandard for hvordan tjenesten skal utføres", "En anbefaling fra et direktorat om god praksis i tjenesten", "Et krav om at kommunen skal rapportere nøkkeltall til staten", "En avtale mellom staten og kommunesektoren om tjenestenivå"],
      explanation: "Standardkravet er lovfestet og binder kommunens ressursbruk, typisk gjennom krav til bemanning eller kompetanse. Anbefalinger og avtaler binder ikke rettslig, og rapporteringsplikt sier ingenting om nivået på selve tjenesten.",
    },
    {
      question: "Hva gjør individuelle rettigheter til et særlig kraftig styringsvirkemiddel?",
      options: ["Håndhevingen flyttes til innbyggeren, som selv kan klage", "De gir staten adgang til å instruere kommunen i enkeltsaker", "De gjør at kommunen mister retten til å vedta eget budsjett", "De gir kommunen større rammetilskudd for å dekke det nye kravet"],
      explanation: "En rettighet gir innbyggeren et rettskrav som kan påklages, slik at staten slipper å føre tilsyn med hver enkelt sak. Staten får ikke instruksjonsrett i enkeltsaker, kommunen beholder budsjettmyndigheten, og en rettighet følges ikke automatisk av penger.",
    },
    {
      question: "Hva er forskjellen på lovlighetskontroll og klage over et kommunalt vedtak?",
      options: ["Lovlighetskontroll prøver lovligheten, klagen kommer fra en berørt part", "Lovlighetskontroll gjelder budsjettvedtak, klagen gjelder enkeltvedtak", "Lovlighetskontroll utføres av kommunestyret, klagen av statsforvalteren", "Lovlighetskontroll er frivillig for kommunen, mens klagen må behandles"],
      explanation: "Lovlighetskontrollen prøver om kommunen holdt seg innenfor loven og kan kreves av et mindretall i kommunestyret; klagen kommer fra en berørt part og kan endre vedtaket i partens favør. Ordningen er ikke begrenset til budsjettvedtak og er ikke frivillig.",
    },
    {
      question: "Hva regnes som kommunens frie inntekter?",
      options: ["Skatteinntekter og rammetilskudd", "Rammetilskudd og øremerkede tilskudd", "Skatteinntekter og gebyrer fra innbyggerne", "Alle inntekter utenom lån og salg av eiendom"],
      explanation: "Frie inntekter er skatteinntekter pluss rammetilskudd, altså midlene kommunen disponerer uten binding. Øremerkede tilskudd er nettopp bundet, og gebyrer er betaling for bestemte tjenester og dekker kostnadene ved dem.",
    },
    {
      question: "Hva kjennetegner rammetilskuddet?",
      options: ["Kommunestyret prioriterer selv hvordan midlene brukes", "Midlene må brukes på de tjenestene staten har prioritert", "Midlene utbetales bare når kommunen bidrar med egenandel", "Midlene fordeles etter søknad fra den enkelte kommunen"],
      explanation: "Rammetilskuddet er frie midler som kommunestyret prioriterer selv. Formålsbinding og krav om egenandel kjennetegner øremerkede tilskudd, og rammetilskuddet fordeles etter inntektssystemets kriterier, ikke etter søknad.",
    },
    {
      question: "Hvorfor sier man at øremerkede tilskudd virker prisvridende?",
      options: ["De gjør ett formål billigere for kommunen enn alle andre", "De gjør at kommunen må betale mer for tjenesten enn den gjorde før", "De påvirker prisnivået i markedet der kommunen kjøper inn", "De gjør at kommunen får mindre penger totalt sett"],
      explanation: "Når staten dekker deler av kostnaden ved ett bestemt formål, koster det formålet mindre av kommunens egne midler enn alle andre, og prioriteringen vris dit. Tilskuddet gjør tjenesten billigere og ikke dyrere for kommunen, og virkningen gjelder kommunens valg, ikke markedsprisene.",
    },
    {
      question: "Hva er hovedforskjellen i virkning mellom rammetilskudd og øremerket tilskudd?",
      options: ["Ren inntektsvirkning mot prisvridende virkning", "Stor overføring mot liten overføring", "Varig ordning mot ettårig bevilgning", "Statlig finansiering mot kommunal finansiering"],
      explanation: "Rammetilskuddet gir kommunen mer å rutte med uten å endre den relative kostnaden ved noe formål; det øremerkede senker kommunens kostnad ved ett formål og vrir prioriteringen. Beløpsstørrelse, varighet og finansieringskilde skiller dem ikke prinsipielt.",
    },
    {
      question: "Hva innebærer det at et øremerket tilskudd innlemmes i rammetilskuddet?",
      options: ["Bindingen faller bort, og kommunestyret overtar prioriteringen", "Tilskuddet avvikles, og midlene trekkes ut av kommunesektoren", "Kommunen må søke staten på nytt hvert år for å beholde midlene", "Staten overtar ansvaret for tjenesten tilskuddet gjaldt"],
      explanation: "Ved innlemming blir pengene værende i sektoren, men formålsbindingen forsvinner. Midlene trekkes verken ut eller gjøres søknadsbaserte, og ansvaret for tjenesten forblir kommunalt.",
    },
    {
      question: "Hva er inntektssystemets funksjon?",
      options: ["Å fordele rammetilskuddet mellom kommunene", "Å fastsette hvor høy kommunal skattesats kan være", "Å avgjøre hvilke oppgaver kommunene skal ha", "Å kontrollere at kommunene bruker midlene lovlig"],
      explanation: "Inntektssystemet er fordelingsmodellen for rammetilskuddet, med inntekts- og utgiftsutjevning som bærende mekanismer. Skattesats, oppgavefordeling og lovlighetskontroll reguleres av helt andre ordninger.",
    },
    {
      question: "Hva gjør inntektsutjevningen?",
      options: ["Jevner ut forskjeller i skatteinntekt mellom kommunene", "Jevner ut forskjeller i utgiftsbehov mellom kommunene", "Sikrer at alle kommuner får like store rammetilskudd", "Kompenserer kommunene for statlig pålagte oppgaver"],
      explanation: "Inntektsutjevningen løfter kommuner med svakt skattegrunnlag mot gjennomsnittet og trekker dem over. Behovssiden håndteres av utgiftsutjevningen, og ordningen gir verken like store tilskudd til alle eller kompensasjon for nye oppgaver.",
    },
    {
      question: "Hva gjør utgiftsutjevningen?",
      options: ["Kompenserer for at samme oppgave koster ulikt i ulike kommuner", "Kompenserer kommuner som har brukt mer enn de budsjetterte", "Sikrer at kommunene bruker like mye per innbygger på tjenester", "Fordeler ekstra midler til kommuner med lav skatteinngang"],
      explanation: "Utgiftsutjevningen bygger på kriterier for beregnet utgiftsbehov: alderssammensetning, bosettingsmønster og avstander gjør at samme tjeneste koster ulikt. Den kompenserer verken budsjettoverskridelser eller lav skatteinngang, som hører til inntektsutjevningen.",
    },
    {
      question: "To kommuner har lik skatteinntekt per innbygger. Hva kan likevel gjøre forutsetningene deres ulike?",
      options: ["Ulik alderssammensetning, bosetting og avstander gir ulikt utgiftsbehov", "Ulik skattesats gjør at den ene får mer inn enn den andre", "Ulik oppgaveportefølje gjør at den ene har færre plikter", "Ulikt antall folkevalgte gir ulik politisk kapasitet"],
      explanation: "Lik inntekt betyr ikke likt behov: en kommune med mange eldre og spredt bosetting har høyere kostnader per innbygger. Skatteinntekten er allerede lik i spørsmålet, og generalistkommuneprinsippet gjør at oppgaveporteføljen er den samme.",
    },
    {
      question: "Hva er skjønnsbaserte midler i inntektssystemet?",
      options: ["Midler fordelt etter vurdering framfor faste kriterier", "Midler kommunen selv kan velge om den vil ta imot", "Midler som fordeles likt per innbygger i hele landet", "Midler kommunen får for å dekke egne låneutgifter"],
      explanation: "Skjønnsmidlene skal fange opp forhold modellen ikke treffer, og en del av dem fordeles av statsforvalteren. De er verken frivillige, flate per innbygger eller knyttet til kommunens lånegjeld.",
    },
    {
      question: "Hva kjennetegner pedagogiske virkemidler?",
      options: ["De påvirker uten å binde rettslig eller økonomisk", "De binder kommunen sterkere enn økonomiske virkemidler", "De brukes bare overfor kommuner som har brutt loven", "De erstatter tilsyn i sektorer uten særlovgivning"],
      explanation: "Veiledere, forsøk, rapportering og samarbeid virker gjennom informasjon og forventning, uten rettslig eller økonomisk binding. De er svakest på papiret, brukes generelt og ikke som sanksjon, og erstatter ikke tilsyn.",
    },
    {
      question: "Hvorfor kan offentlig sammenligning av kommunale nøkkeltall virke sterkt som styring?",
      options: ["Synlige avvik gir kommunen et lokalpolitisk problem", "Kommuner med svake tall mister deler av rammetilskuddet", "Staten kan gi pålegg om retting på grunnlag av tallene", "Sammenligning gir kommunen rett til ekstra skjønnsmidler"],
      explanation: "Presset oppstår fordi avviket blir synlig for velgere og lokalpresse, uten at noen har vedtatt noe. Rapporteringen utløser verken tilskuddstrekk, pålegg eller ekstra midler i seg selv.",
    },
    {
      question: "Hva er en forsøksordning i kommunal sammenheng?",
      options: ["Adgang til å avvike fra regler i en avgrenset periode", "En permanent unntaksregel for kommunene under en viss størrelse", "En ordning der kommunen slipper statlig tilsyn en periode", "En avtale om at staten overtar en oppgave midlertidig"],
      explanation: "Forsøket gir tidsavgrenset adgang til å prøve en annen løsning, etter statlig godkjenning, og erfaringene kan føre til regelendring. Det er verken permanent, en fritakelse fra tilsyn eller en overføring av oppgaven til staten.",
    },
    {
      question: "Hva er de faste konsultasjonene mellom regjeringen og kommunesektoren?",
      options: ["Møter om økonomiske rammer og oppgaveendringer før budsjettet", "Forhandlinger der kommunesektoren kan avvise nye oppgaver", "Statsforvalterens årlige tilsynsmøter med hver enkelt kommune", "Klagebehandling av statlige vedtak som rammer kommunene"],
      explanation: "Ordningen gir kommunesektoren en kanal inn i statens beslutninger og gir staten realitetsorientering, men ingen vetorett — Stortinget bestemmer til slutt. Den er verken tilsyn eller klagebehandling.",
    },
    {
      question: "Hva menes med detaljstyring?",
      options: ["Styring som bestemmer hvordan oppgaven skal løses", "Styring som bare fastsetter mål og økonomiske rammer", "Styring som utføres av statsforvalteren og ikke av departementet", "Styring gjennom informasjon, veiledning og sammenligning"],
      explanation: "Detaljstyring bestemmer gjennomføringen, ikke bare at oppgaven skal løses. Å fastsette mål og rammer er rammestyring, og hvem som utfører styringen eller hvilket virkemiddel som brukes, avgjør ikke hvilken form den har.",
    },
    {
      question: "Hva er den mest belønnede nyanseringen om rammestyring i arkivet?",
      options: ["At indirekte styring fortsatt er styring, bare mindre synlig", "At rammestyring alltid gir bedre tjenester enn detaljstyring", "At rammestyring i praksis har erstattet detaljstyringen helt", "At rammestyring bare brukes overfor de største kommunene"],
      explanation: "Poenget er at staten fortsatt styrer gjennom rammens størrelse, fordelingsmodellen og målene, selv når ingen instruerer. At den ene formen er bedre enn den andre er et verdispørsmål, og detaljstyringen er verken avviklet eller forbeholdt bestemte kommuner.",
    },
    {
      question: "Hvordan henger virkemiddelkategoriene og styringsformene sammen?",
      options: ["Hver kategori kan brukes både til detalj- og til rammestyring", "Juridiske virkemidler er detaljstyring, økonomiske er rammestyring", "Pedagogiske virkemidler er den eneste formen for rammestyring", "Styringsformen følger av hvilket departement som styrer den enkelte sektoren"],
      explanation: "Dimensjonene er uavhengige: en rammebestemmelse i særlov er juridisk rammestyring, mens et standardkrav er juridisk detaljstyring. Å knytte hver kategori til én form gir en ryddig, men gal modell.",
    },
    {
      question: "Hvilket av disse er økonomisk detaljstyring?",
      options: ["Et tilskudd bundet til ett bestemt formål", "En økning i rammetilskuddet til alle kommuner", "Et lovfestet krav til bemanning i en tjeneste", "En veileder om hvordan tjenesten bør organiseres"],
      explanation: "Øremerkede tilskudd binder pengebruken til ett formål og er derfor økonomisk detaljstyring. Økt rammetilskudd er økonomisk rammestyring, bemanningskravet er juridisk detaljstyring, og veilederen er et pedagogisk virkemiddel.",
    },
    {
      question: "Hva er forskjellen på formell og reell handlefrihet for en kommune?",
      options: ["Reell frihet er det som er igjen når bundne krav er trukket fra", "Formell frihet gjelder budsjettet, reell frihet gjelder personalet", "Formell frihet gjelder små kommuner, reell frihet gjelder store", "Reell frihet er den friheten statsforvalteren har godkjent på forhånd"],
      explanation: "Formell frihet er retten til å prioritere på papiret; reell frihet er det som gjenstår etter lovpålagte oppgaver, normer, rettigheter og bundne driftskostnader. Skillet følger verken kommunestørrelse, saksområde eller statsforvalterens godkjenning.",
    },
    {
      question: "Hvorfor kan andelen frie inntekter være et misvisende mål på kommunalt handlingsrom?",
      options: ["Mye av de frie midlene er allerede bundet av lovkrav", "Frie inntekter varierer sterkt fra år til år i alle kommuner", "Frie inntekter regnes ulikt fra kommune til kommune i statistikken", "Staten kan trekke tilbake frie inntekter i løpet av året"],
      explanation: "Friheten er formell før den er reell: lovpålagte oppgaver, standardkrav og individuelle rettigheter disponerer store deler av budsjettet før kommunestyret møtes. Beregningen er ensartet, og midlene trekkes ikke tilbake underveis.",
    },
    {
      question: "Hvordan fastsettes de økonomiske rammene for kommunesektoren?",
      options: ["Rammene varsles i en egen proposisjon og vedtas i statsbudsjettet", "Rammene forhandles fram med kommunesektoren og undertegnes som avtale", "Rammene fastsettes av statsforvalteren for kommunene i hvert fylke", "Rammene følger automatisk av de budsjettvedtakene kommunene selv fatter"],
      explanation: "Regjeringen legger fram rammene i god tid før statsbudsjettet, og bevilgningen vedtas i budsjettet om høsten. Konsultasjonene med kommunesektoren gir ingen bindende avtale, og verken statsforvalteren eller kommunene fastsetter totalrammen.",
    },
    {
      question: "Hvorfor er rammens totale størrelse et sterkt styringsgrep?",
      options: ["En stram ramme tvinger fram prioriteringer uten en eneste instruks", "Rammen bestemmer hvilke oppgaver kommunen skal løse først", "Rammen fastsetter hvor mye kommunen kan kreve inn i skatt", "Rammen avgjør hvilke tjenester som skal være lovpålagte"],
      explanation: "Kommunens handlingsrom er i praksis avgjort før kommunestyret begynner å budsjettere, uten at noen har instruert noen. Rammen bestemmer verken oppgaverekkefølgen, skattenivået eller hvilke tjenester som er lovpålagte.",
    },
    {
      question: "Hva er den vanligste begrepsforvekslingen i dette stoffet?",
      options: ["At rammetilskudd og øremerket tilskudd behandles som nesten det samme", "At inntektssystemet forveksles med statsbudsjettet", "At tilsyn forveksles med veiledning fra statsforvalteren", "At særlover forveksles med forskrifter gitt av departementet"],
      explanation: "Forvekslingen av tilskuddstypene er den sensor oftest tester i Del 1, og testen er prisvridningen. De andre sammenblandingene forekommer, men er ikke den dokumenterte trekkgrunnen her.",
    },
    {
      question: "Hvilket argument brukes for detaljert statlig styring av kommunale tjenester?",
      options: ["Nasjonal likhet og rettssikkerhet for den enkelte brukeren", "At kommunene mangler kompetanse til å drive tjenestene", "At staten kan drive tjenestene billigere enn kommunene", "At kommunestyrene ikke har demokratisk legitimitet nok"],
      explanation: "Begrunnelsen er et likt minstenivå ingen kommune kan gå under, og et krav den enkelte kan håndheve. Argumentet handler ikke om manglende kommunal kompetanse eller legitimitet, og detaljstyring gjør sjelden tjenesten billigere.",
    },
    {
      question: "Hvilket argument brukes mot omfattende statlig detaljstyring?",
      options: ["Det svekker den lokale prioriteringsretten og tilpasningen", "Det gjør at staten må ansette flere saksbehandlere i departementene", "Det fører til at kommunene mister retten til å kreve inn skatt", "Det gjør at innbyggerne mister klageretten på vedtak"],
      explanation: "Innvendingen er at bindinger legger beslag på budsjettet, slik at lokalvalget blir et valg om lite, og at normer dimensjonert for gjennomsnittet ikke passer alle. Verken skatteretten eller klageretten berøres.",
    },
    {
      question: "Hvilket pensumbidrag bærer apparatet for statens økonomiske styringsvirkemidler?",
      options: ["Fiva, Hagen og Sørensen om kommunal organisering", "Christensen mfl. om forvaltning og politisk styring", "Jacobsen om lokaldemokrati og deltakelse i kommunen", "Olsen mfl. om Norges tilknytning til EU og EØS-avtalen"],
      explanation: "Fiva, Hagen og Sørensen bærer tilskuddstypene, prisvridningen, inntektssystemet og skillet mellom detalj- og rammestyring, med Stigen mfl. som utfyllende på kommunal styring. De øvrige eier andre deler av emnet.",
    },
  ],
  'stv1400-1-3': [
    {
      question: "Hva er et strukturvirkemiddel?",
      options: ["Statlig styring gjennom å endre selve enhetene som skal styres", "Statlig styring gjennom lovfestede krav til tjenestens innhold", "Kommunens egen omorganisering av administrasjonen og enhetene sine", "Statens fordeling av oppgaver mellom departementer og direktorater"],
      explanation: "Strukturvirkemidlet endrer kommune- og fylkesgrenser og antall nivåer, altså hva kommunen er i stand til å gjøre. Lovfestede innholdskrav er juridiske virkemidler innenfor gitt struktur, og intern omorganisering i kommune eller stat er noe annet.",
    },
    {
      question: "Hva skiller strukturvirkemidlet fra de tre virkemiddelkategoriene?",
      options: ["Det virker på hva kommunen kan gjøre, ikke på hva den gjør", "Det er det eneste virkemidlet som krever vedtak i Stortinget", "Det brukes bare overfor fylkeskommunene og ikke mot kommunene", "Det er frivillig for den enkelte kommunen, mens de andre er bindende"],
      explanation: "De tre kategoriene virker innenfor en gitt struktur; strukturvirkemidlet endrer rammen selv. Også lover krever stortingsvedtak, grepet brukes på begge nivåer, og strukturendring kan i siste instans vedtas mot lokale vedtak.",
    },
    {
      question: "Hva menes med frivillighetslinjen i kommunereformen?",
      options: ["At sammenslåing i utgangspunktet skulle bygge på lokale vedtak", "At kommunene selv kunne velge hvilke oppgaver de ville beholde", "At staten ikke brukte økonomiske virkemidler i reformen", "At Stortinget ikke kan vedta sammenslåing mot lokale vedtak"],
      explanation: "Frivillighetslinjen la lokale vedtak til grunn, men staten brukte samtidig insentiver, utredningsplikt og signaler om oppgavefordeling. Oppgaveporteføljen var ikke valgfri, og Stortinget kan i siste instans vedta sammenslåing mot lokale vedtak.",
    },
    {
      question: "Hvorfor beskrives kommunereformen best som frivillighet under press?",
      options: ["Insentiver og utredningsplikt gjorde ja-alternativet mer attraktivt", "Alle sammenslåingene ble vedtatt mot kommunestyrenes uttrykte vilje", "Staten holdt tilbake rammetilskudd fra kommuner som sa nei", "Kommunene måtte betale selv for å utrede sammenslåing"],
      explanation: "Mellom rent frivillige vedtak og tvang lå økonomiske insentiver, utredningsplikt og signaler om oppgavefordeling. Bare et lite antall sammenslåinger ble vedtatt mot lokale vedtak, og rammetilskuddet ble ikke brukt som straff.",
    },
    {
      question: "Hvordan virket utredningsplikten under kommunereformen?",
      options: ["Den flyttet bevisbyrden over på dem som ville stå alene", "Den påla kommunene å slå seg sammen innen en gitt frist", "Den ga staten adgang til å overprøve lokale vedtak", "Den fritok små kommuner fra enkelte lovpålagte oppgaver"],
      explanation: "Uten plikten kunne en kommune la spørsmålet ligge; med den måtte hver kommune aktivt begrunne hvorfor den ville stå alene. Plikten påla ingen å slå seg sammen, ga ingen overprøvingsrett og endret ingen oppgaver.",
    },
    {
      question: "Hva gjorde kompensasjonsordningen for sammenslåtte kommuner?",
      options: ["Lot kommunen beholde tilskudd som før i en overgangsperiode", "Ga den nye kommunen varig høyere rammetilskudd etter sammenslåingen", "Dekket alle driftsutgiftene til den nye kommunen det første året", "Ga innbyggerne lavere skatt i kommuner som slo seg sammen"],
      explanation: "Ordningen fjernet det umiddelbare inntektstapet ved å bli færre kommuner, men bare midlertidig, og beløpet trappes ned. Den var verken varig, en full driftsdekning eller en skattelettelse for innbyggerne.",
    },
    {
      question: "Hva viser reverseringene av enkelte sammenslåinger?",
      options: ["At strukturvedtak uten lokal forankring har lav holdbarhet", "At kommunereformen samlet sett ble reversert", "At Stortinget ikke har myndighet til å endre kommunegrenser", "At sammenslåing alltid gir innbyggerne dårligere tjenester enn før"],
      explanation: "Det som kan vedtas med ett flertall, kan vedtas om med et annet, og lokal motstand overlever et vedtak. Flertallet av sammenslåingene står, Stortinget har full myndighet over grensene, og reverseringene sier ingenting om tjenestekvalitet.",
    },
    {
      question: "Hva er styrbarhet?",
      options: ["Hvor godt staten får gjennomført politikken gjennom kommunene", "Hvor mye staten styrer kommunene, målt i antallet bindinger og krav", "Hvor stor andel av kommunens samlede inntekter som er øremerket", "Hvor raskt en kommune kan gjennomføre egne vedtak"],
      explanation: "Styrbarhet er et mål på virkning, ikke på mengde: detaljerte krav kan gi høy etterlevelse og likevel dårlig måloppnåelse. Antall bindinger og andelen øremerkede midler måler styringens omfang, ikke dens virkning.",
    },
    {
      question: "Hvorfor kan kommunereformen leses som et styringsgrep og ikke bare en strukturreform?",
      options: ["Mer kapable enheter reduserer behovet for detaljstyring", "Reformen overførte en rekke oppgaver fra kommunene til staten", "Reformen erstattet rammetilskuddet med øremerkede tilskudd", "Reformen fjernet fylkeskommunen som forvaltningsnivå"],
      explanation: "Jo mer kapable enhetene er, jo mindre detaljerte krav trengs for samme styrbarhet, og det er koblingen mellom struktur og styringsform. Reformen flyttet verken oppgaver oppover, endret tilskuddssystemet eller avviklet noe forvaltningsnivå.",
    },
    {
      question: "Hvordan har den statlige styringen av kommunene utviklet seg langs de to aksene?",
      options: ["Mer juridisk detaljstyring, mindre økonomisk detaljstyring", "Mer økonomisk detaljstyring, mindre juridisk detaljstyring", "Mer detaljstyring på begge akser samtidig", "Mindre detaljstyring på begge akser samtidig"],
      explanation: "Rettighetsfestinger, normer og rapporteringsplikter har vokst, mens andelen øremerkede tilskudd er redusert til fordel for rammetilskudd. Bevegelsene går altså i hver sin retning, og det er nettopp det som gjør spørsmålet drøftingsverdig.",
    },
    {
      question: "Hva er det beste svaret på om den statlige styringen har økt?",
      options: ["At den har skiftet form, og at svaret avhenger av målet", "At den har økt entydig, målt i antall nye bindinger på kommunene", "At den har avtatt entydig, målt i andelen frie inntekter", "At spørsmålet ikke lar seg besvare uten helt nye undersøkelser"],
      explanation: "Styringen har gått mot mer juridisk og mindre økonomisk detaljstyring, så konklusjonen avhenger av hvilket mål man legger til grunn. Begge de entydige svarene måler bare én akse, og å avvise spørsmålet er å unnvike drøftingen.",
    },
    {
      question: "Hva er forskjellen på standardisering og detaljstyring?",
      options: ["Standardisering er målet, detaljstyring er virkemiddelets form", "Standardisering gjelder tjenester, detaljstyring gjelder økonomi", "Standardisering utføres av direktorater, detaljstyring av Stortinget", "Standardisering er frivillig for kommunen, detaljstyring er bindende"],
      explanation: "Standardisering er ønsket om et likt tilbud i hele landet; detaljstyring er en måte å oppnå det på. Man kan i prinsippet standardisere gjennom rammestyring ved å måle resultater i stedet for å foreskrive metode.",
    },
    {
      question: "Hva er den presise formuleringen av hva statlig styring gjør med kommunen?",
      options: ["Den reduserer sjelden kommunens oppgaver, men innsnevrer valgene", "Den reduserer både kommunens oppgaver og dens valgmuligheter", "Den overfører oppgaver fra kommunestyret til statsforvalteren", "Den fjerner kommunens adgang til å vedta eget budsjett"],
      explanation: "En kommune kan ha flere oppgaver enn noen gang og likevel mindre å bestemme. Oppgavene forblir kommunale, budsjettmyndigheten består, og statsforvalteren overtar ikke oppgavene.",
    },
    {
      question: "Hva spør drøftingsvinkelen om lokaldemokratiet etter?",
      options: ["Hva styringen gjør med kommunestyrets handlingsrom", "Om tjenestetilbudet treffer innbyggernes faktiske ønsker", "Om kommunen har nok ansatte til å løse oppgavene sine", "Hvor stor valgdeltakelsen er ved lokalvalg i kommunen"],
      explanation: "Demokrativinkelen spør hvem som bestemmer, og hva velgeren kan påvirke. Spørsmålet om tilbudet treffer preferansene, hører til allokeringseffektivitet, og kapasitet og valgdeltakelse er andre problemstillinger.",
    },
    {
      question: "Hva betyr allokeringseffektivitet i denne sammenhengen?",
      options: ["At ressursene brukes på det innbyggerne verdsetter høyest", "At tjenestene produseres til lavest mulig kostnad", "At alle kommuner får like mye midler per innbygger", "At staten fordeler midlene raskt og uten administrasjon"],
      explanation: "Allokeringseffektivitet handler om at ressursene går dit de gir størst verdi for innbyggerne. Lavest mulig produksjonskostnad er kostnadseffektivitet, og lik fordeling eller rask utbetaling er helt andre hensyn.",
    },
    {
      question: "Hva er kjernen i argumentet for at lokale beslutninger gir bedre treffsikkerhet?",
      options: ["Preferansene varierer mellom steder, og kommunen kjenner dem", "Kommunene har lavere administrasjonskostnader enn staten", "Lokale vedtak kan gjennomføres raskere enn statlige vedtak", "Kommunene har bedre fagfolk enn de statlige direktoratene"],
      explanation: "Når ønskene varierer mellom steder, treffer lokale beslutninger bedre enn ett nasjonalt fastsatt nivå. Kostnader, tempo og kompetanse er andre argumenter og bærer ikke resonnementet om treffsikkerhet.",
    },
    {
      question: "Når svikter argumentet for lokal styring, ifølge forutsetningene?",
      options: ["Ved eksterne virkninger, stordrift eller fordelingsmål", "Når kommunen har mindre enn ti tusen innbyggere totalt", "Når tjenesten er lovpålagt og ikke frivillig", "Når staten allerede finansierer tjenesten fullt ut"],
      explanation: "Forutsetningene er halve poenget, og teoremet skal brukes begge veier. Kommunestørrelse, lovpålegg og finansieringsform er ikke de forutsetningene resonnementet hviler på.",
    },
    {
      question: "Hva er en ekstern virkning i kommunal sammenheng?",
      options: ["At en kommunes beslutning får følger utenfor egne grenser", "At staten pålegger kommunen oppgaver den ikke har bedt om", "At kommunen kjøper tjenester fra private leverandører i markedet", "At innbyggere flytter til nabokommunen for å få bedre tjenester"],
      explanation: "Eksterne virkninger oppstår når gevinsten eller kostnaden helt eller delvis tilfaller andre enn kommunens egne innbyggere, som når utdannede flytter ut. Statlige pålegg og kjøp fra private er andre fenomener.",
    },
    {
      question: "Hvordan begrunnes rettssikkerhet som argument for statlig styring?",
      options: ["Den enkelte skal kunne vite og håndheve hva hen har krav på", "Kommunen skal kunne forutsi hvilke rammer den får neste år", "Staten skal kunne kontrollere at midlene er brukt lovlig", "Kommunestyret skal kunne overprøve administrasjonens vedtak"],
      explanation: "Rettssikkerhetsargumentet plasserer hensynet hos brukeren og bærer individuelle rettigheter som styringsform. Forutsigbare rammer, økonomikontroll og intern overprøving er andre hensyn.",
    },
    {
      question: "Hva er demokratikostnaden ved rettighetsfesting?",
      options: ["Politiske prioriteringer blir rettsspørsmål i klageorganer", "Innbyggerne mister muligheten til å klage på vedtak", "Kommunestyret mister retten til å vedta eget budsjett", "Kommunen må betale erstatning når retten ikke oppfylles"],
      explanation: "Makt flyttes ikke bare fra kommunestyret til Stortinget, men også fra politiske organer til forvaltning og klageinstans. Klageretten styrkes snarere enn svekkes, og budsjettmyndigheten består.",
    },
    {
      question: "Hva er robusthetsargumentet i kommunestrukturdebatten?",
      options: ["At enhetene må være store nok til å ha holdbare fagmiljøer", "At kommunene må ha nok inntekter til å tåle økonomiske svingninger", "At kommunene må ha flere folkevalgte for å sikre bred representasjon", "At kommunene må ha økonomiske reserver til å håndtere kriser og uvær"],
      explanation: "Argumentet gjelder fagmiljøer som tåler utskiftning, sykdom og krevende enkeltsaker. Merk grensen: det taler for større fagmiljøer, ikke nødvendigvis for større kommuner, siden samarbeid gir det samme.",
    },
    {
      question: "Hva er de tre mulige svarene på kapasitetsproblemet i kommunesektoren?",
      options: ["Sammenslåing, samarbeid og oppgavedifferensiering", "Sammenslåing, økte rammetilskudd og flere øremerkede tilskudd", "Statlig overtakelse, privatisering og interkommunalt samarbeid", "Flere ansatte, mer veiledning og strengere statlig tilsyn"],
      explanation: "De tre veiene har hver sin pris: avstand til velgeren, beslutninger ut av kommunestyret, eller at generalistkommuneprinsippet forlates. Mer penger, tilsyn eller statlig overtakelse løser ikke kapasitetsproblemet innenfor prinsippets ramme.",
    },
    {
      question: "Hvordan skal en påstandsdrøfting bygges?",
      options: ["Avklar påstanden, finn målestokken, prøv den, og land begrunnet", "Presenter påstanden, gjengi alt pensum om temaet, og konkluder til slutt", "Argumenter først for påstanden, deretter mot, uten å konkludere", "Avvis påstanden innledningsvis, og bygg svaret på motargumentene"],
      explanation: "Uttellingen ligger i motforestillingen som redder påstanden fra å bli et ja eller nei, og målestokken er det som gjør drøftingen etterprøvbar. Å gjengi pensum er redegjørelse, og å utelate landingen eller avvise påstanden på forhånd er ikke å prøve den.",
    },
    {
      question: "Når skal en besvarelse lande skarpt, og når betinget?",
      options: ["Skarpt i faglige spørsmål, betinget i verdispørsmål", "Betinget i faglige spørsmål, skarpt i verdispørsmål", "Alltid betinget, siden alle spørsmål har flere sider", "Alltid skarpt, siden sensor belønner tydelige konklusjoner"],
      explanation: "«Er indirekte styring fortsatt styring?» har et faglig svar og skal landes skarpt; «bør staten styre tettere?» avhenger av vekting og skal landes betinget. Å alltid gjøre det ene ser enten uklart eller skråsikkert ut.",
    },
  ],
  'stv1400-2-1': [
    {
      question: "Hva er fristilling i Christensen mfl.s forstand?",
      options: ["Å gi en offentlig virksomhet mer avstand til politisk ledelse", "Å overføre eierskapet i en offentlig virksomhet til private kjøpere", "Å sette en offentlig tjeneste ut på anbud i et åpent leverandørmarked", "Å legge ned en statlig oppgave og overlate hele feltet til markedet"],
      explanation: "Fristilling er et samlebegrep for å flytte en virksomhet lenger bort fra departementets kommandolinje, mens staten beholder eierskap og ansvar. Å overføre eierskapet til private er privatisering, og anbudsutsetting er konkurranseutsetting — begge er andre vedtak med andre konsekvenser.",
    },
    {
      question: "Hva kjennetegner indre fristilling?",
      options: ["Oppgaven skilles ut fra departementet, men blir i forvaltningen", "Virksomheten omdannes til aksjeselskap og forlater forvaltningen helt", "Tjenesten settes ut på anbud til private leverandører i markedet", "Eierskapet i virksomheten selges ut av staten til private eiere"],
      explanation: "Ved indre fristilling forlater virksomheten departementet, ikke forvaltningen: den er fortsatt et forvaltningsorgan med statsansatte. Omdanning til selskap er ytre fristilling, mens anbud og salg av eierskap er konkurranseutsetting og privatisering.",
    },
    {
      question: "Hva kjennetegner ytre fristilling?",
      options: ["Virksomheten blir et eget rettssubjekt utenfor forvaltningen", "Virksomheten flyttes fra departementet til et eget direktorat", "Virksomheten får et eget budsjettkapittel i det årlige statsbudsjettet", "Virksomheten får utvidet fullmakt til å ansette folk selv"],
      explanation: "Ved ytre fristilling skifter virksomheten tilknytningsform og blir et eget rettssubjekt, typisk statsforetak eller aksjeselskap. Utskilling til direktorat, eget budsjettkapittel og utvidede fullmakter skjer alt sammen innenfor forvaltningen og er indre fristilling.",
    },
    {
      question: "Hva er det andre navnet på indre fristilling?",
      options: ["Vertikal spesialisering", "Horisontal spesialisering", "Funksjonell desentralisering", "Territoriell desentralisering"],
      explanation: "Indre fristilling omtales som vertikal spesialisering fordi oppgaven flyttes nedover i hierarkiet. Horisontal spesialisering gjelder fordeling mellom enheter på samme nivå, mens desentraliseringsbegrepene gjelder overføring til andre forvaltningsnivåer.",
    },
    {
      question: "Hva skiller vertikal fra horisontal spesialisering?",
      options: ["Vertikal gjelder nivåer, horisontal gjelder enheter på samme nivå", "Vertikal gjelder staten, horisontal gjelder kommunesektorens organer", "Vertikal gjelder oppgavene, horisontal gjelder ansatte og budsjett", "Vertikal gjelder selskaper, horisontal gjelder forvaltningsorganer"],
      explanation: "Vertikal spesialisering svarer på hvor høyt oppe i hierarkiet oppgaven ligger; horisontal svarer på hvor mange enheter den er delt mellom på samme nivå. Skillet går altså mellom nivå og enhet, ikke mellom forvaltningsnivåer, personalspørsmål eller organisasjonsformer.",
    },
    {
      question: "Hva er instruksjonsmyndighet?",
      options: ["Retten til å gi et underordnet organ pålegg om hvordan det skal opptre", "Retten til å endre et vedtak et underordnet organ allerede har truffet", "Retten til å avsette lederen for et underordnet forvaltningsorgan", "Retten til å kreve at et organ rapporterer om ressursbruken sin"],
      explanation: "Instruksjonsmyndighet er retten til å gi pålegg, generelt eller i den enkelte saken, før avgjørelsen faller. Å endre et vedtak i etterkant er omgjøringsmyndighet, mens personalvedtak og rapporteringskrav er egne redskaper som ikke faller inn under instruksjonsretten.",
    },
    {
      question: "Hva er omgjøringsmyndighet?",
      options: ["Retten til å endre eller oppheve et vedtak som er truffet", "Retten til å gi pålegg om utfallet før vedtaket i saken er truffet", "Retten til å omorganisere et underordnet organ ved instruks", "Retten til å overføre en sak til et annet forvaltningsorgan"],
      explanation: "Omgjøringsmyndigheten virker etter at vedtaket er truffet, typisk gjennom klagebehandling. Pålegg før avgjørelsen er instruksjonsmyndighet, og omorganisering eller overføring av saker er organisatoriske grep av en annen art.",
    },
    {
      question: "Hvorfor faller instruksjonsmyndigheten bort ved ytre fristilling?",
      options: ["Selskapet er et eget rettssubjekt, ikke et ledd i statens hierarki", "Loven forbyr uttrykkelig statsråder å instruere statlige selskaper", "Selskapets ansatte har egne tariffavtaler utenfor statens avtaler", "Selskapet henter inntektene sine i markedet og ikke i budsjettet"],
      explanation: "Instruksjonsmyndigheten hviler på at forvaltningen er ett hierarki; et selskap står utenfor det hierarkiet. Det er altså ikke et forbud, en tariffavtale eller finansieringsmåten som stenger instruksen, men fraværet av en kommandolinje å instruere langs.",
    },
    {
      question: "Hva overtar styringen ved indre fristilling?",
      options: ["Mål- og resultatstyring gjennom tildelingsbrev og rapportering", "Eierstyring gjennom generalforsamling og valg av styremedlemmer", "Kontraktsstyring gjennom anbud og konkurranse mellom tilbydere", "Klagebehandling i en uavhengig nemnd utenfor departementet og direktoratet"],
      explanation: "Når departementet slutter å behandle enkeltsakene, overtar mål- og resultatstyringen med tildelingsbrev, styringsmøter og rapportering. Eierstyring hører til ytre fristilling, kontraktsstyring til konkurranseutsetting, og en uavhengig klagenemnd fjerner styring i stedet for å erstatte den.",
    },
    {
      question: "Hva er et tildelingsbrev?",
      options: ["Departementets årlige brev med bevilgning, mål og resultatkrav", "Direktoratets årlige rapport om måloppnåelse til departementet", "Stortingets eget vedtak om bevilgning til den enkelte etaten i budsjettet", "Departementets instruks i en enkeltsak til et underordnet organ"],
      explanation: "Tildelingsbrevet går fra departementet til virksomheten og samler bevilgning, mål, resultatkrav og rapporteringskrav for året. Rapporten går motsatt vei, budsjettvedtaket treffes i Stortinget, og en instruks i enkeltsak er et helt annet redskap.",
    },
    {
      question: "Hva betyr uttrykket «armlengdes avstand»?",
      options: ["Politisk ledelse setter rammene, men holder seg unna enkeltsakene", "Politisk ledelse har gitt fra seg all styring med hele saksområdet", "Virksomheten er flyttet ut av staten som juridisk person", "Virksomheten rapporterer direkte til Stortinget i stedet for til statsråden"],
      explanation: "Uttrykket beskriver en arbeidsdeling: politikken bestemmer regelverk og budsjett, fagorganet avgjør den enkelte saken. Det er altså ikke fravær av styring, det sier ingenting om tilknytningsformen, og rapporteringslinjen går fortsatt til departementet.",
    },
    {
      question: "Hva er en forvaltningsbedrift?",
      options: ["Statlig forretningsdrift innenfor staten som juridisk person", "Et heleid statlig selskap opprettet med hjemmel i en egen lov", "Et aksjeselskap der staten eier alle aksjene og velger hele styret", "Et kommunalt foretak med eget styre underlagt kommunestyrets vedtekter"],
      explanation: "Forvaltningsbedriften driver forretningspreget produksjon, men er fortsatt del av staten som juridisk person, og instruksjonsmyndigheten består. Statsforetaket og aksjeselskapet er egne rettssubjekter, og det kommunale foretaket hører hjemme i kommunesektoren.",
    },
    {
      question: "Hva kjennetegner et statsforetak?",
      options: ["Eget rettssubjekt heleid av staten, med hjemmel i egen lov", "Del av staten som rettssubjekt, med særskilte budsjettfullmakter", "Aksjeselskap der staten kan dele eierskapet med private eiere", "Forvaltningsorgan der klageadgangen er lagt til en egen nemnd"],
      explanation: "Statsforetaket er heleid per konstruksjon og står utenfor forvaltningen, slik at instruksjonsmyndigheten er borte. Å være del av staten kjennetegner forvaltningsbedriften, muligheten for private medeiere kjennetegner aksjeselskapet, og en klagenemnd endrer ikke tilknytningsformen.",
    },
    {
      question: "Hvordan styrer staten et heleid statlig aksjeselskap?",
      options: ["Gjennom generalforsamlingen, valg av styre og vedtektene", "Gjennom instruks fra statsråden til selskapets daglige leder", "Gjennom et årlig tildelingsbrev med mål, resultatkrav og rapportering", "Gjennom omgjøring av selskapets beslutninger etter klage"],
      explanation: "Eierstyringen skjer i generalforsamlingen, ved valg av styre og gjennom vedtektene. Instruks og omgjøring forutsetter et forvaltningshierarki som ikke finnes her, og tildelingsbrevet er etatsstyringens redskap overfor forvaltningsorganer.",
    },
    {
      question: "Hva innebærer minoritetseierskap for statens styring?",
      options: ["Staten eier under halvparten og kan ikke avgjøre saker alene", "Staten eier alle aksjene, men lar styret avgjøre det meste selv", "Staten har solgt seg helt ut og sitter bare igjen med en avtale", "Staten eier gjennom et annet statlig selskap i stedet for direkte"],
      explanation: "Med en post under halvparten kan staten stemme, men ikke bestemme, og innflytelsen avhenger av de øvrige eierne. Heleie med passiv eierstyring er noe annet, salg av hele posten er privatisering, og indirekte eierskap er et organisatorisk og ikke et styringsmessig skille.",
    },
    {
      question: "Hvilket av disse er et eksempel på ytre fristilling?",
      options: ["Persontogtrafikken drives av Vygruppen, som er et aksjeselskap", "Mattilsynet fører tilsyn på matområdet som eget forvaltningsorgan", "Konkurransetilsynet håndhever konkurransereglene på selvstendig grunnlag", "Statsbygg driver eiendomsvirksomhet som en statlig forvaltningsbedrift"],
      explanation: "Vygruppen er et eget rettssubjekt utenfor forvaltningen, og det er nettopp ytre fristilling. Mattilsynet og Konkurransetilsynet er forvaltningsorganer, og forvaltningsbedriften er fortsatt del av staten som juridisk person.",
    },
    {
      question: "Hvilket av disse er et eksempel på indre fristilling?",
      options: ["Mattilsynet, som er et forvaltningsorgan under departementsnivå", "Bane NOR, som forvalter jernbanen som statsforetak", "Avinor, som driver lufthavnene som et statlig aksjeselskap", "Posten Bring, som driver posttjenesten som eget rettssubjekt"],
      explanation: "Mattilsynet er skilt ut fra departementet, men fortsatt et forvaltningsorgan med statsansatte, og det er indre fristilling. De tre andre er egne rettssubjekter utenfor forvaltningen og hører hjemme i den ytre kategorien.",
    },
    {
      question: "Hva skiller fristilling fra privatisering?",
      options: ["Ved fristilling beholder staten både eierskapet og ansvaret", "Ved fristilling settes tjenesten ut på anbud til private tilbydere", "Ved fristilling flyttes ansvaret for oppgaven til kommunesektoren", "Ved fristilling får virksomheten adgang til å ta ut utbytte"],
      explanation: "Fristilling flytter virksomheten lenger fra politisk ledelse, men eierskapet og ansvaret blir hos staten. Anbudsutsetting er konkurranseutsetting, overføring mellom forvaltningsnivåer er funksjonsfordeling, og utbytteadgang følger av selskapsformen og ikke av fristillingen som sådan.",
    },
    {
      question: "Hvilken nyansering premieres tyngst i fristillingsstoffet?",
      options: ["At indirekte styring gjennom mål og eierrolle fortsatt er styring", "At fristilling alltid gir mer effektiv drift enn forvaltningsdrift", "At politisk styring opphører så snart selskapsformen er valgt", "At fristilling og privatisering i praksis betyr omtrent det samme"],
      explanation: "Nøkkelnyansen er at styringen skifter kanal i stedet for å forsvinne: mål- og resultatstyring, eierstyring og lovgivning består. Å hevde at styringen opphører, er nettopp fella; effektivitetspåstanden er udokumentert som generell regel, og de to begrepene betyr ikke det samme.",
    },
    {
      question: "I hvilken rekkefølge svekkes den politiske styringen?",
      options: ["Indre fristilling, så ytre fristilling, så minoritetseierskap", "Minoritetseierskap, så indre fristilling, så ytre fristilling", "Ytre fristilling, så indre fristilling, så minoritetseierskap", "Indre fristilling, så minoritetseierskap, så ytre fristilling"],
      explanation: "Graderingen går fra indre fristilling, der instruksjonsmyndigheten er i behold, via ytre fristilling, der den faller bort, til minoritetseierskap, der selv eierkanalen avhenger av andre eiere. De øvrige rekkefølgene bryter med denne logikken.",
    },
    {
      question: "Hva skjer med ministeransvaret når en virksomhet fristilles?",
      options: ["Det blir liggende hos statsråden når redskapene flyttes ut", "Det overføres til selskapets styre sammen med styringsretten", "Det faller bort når virksomheten blir et eget rettssubjekt", "Det deles mellom statsråden og selskapets generalforsamling"],
      explanation: "Ansvaret overfor Stortinget følger ikke med når styringsredskapene flyttes ut, og nettopp gapet mellom ansvar og redskap er den demokratiske kostnaden ved fristilling. Ansvaret kan verken overføres til et styre, falle bort eller deles med generalforsamlingen.",
    },
    {
      question: "Hvor går grensen mellom indre og ytre fristilling på skalaen?",
      options: ["Mellom forvaltningsbedrift og statsforetak", "Mellom direktorat og forvaltningsbedrift", "Mellom statsforetak og statlig aksjeselskap", "Mellom departement og underliggende direktorat"],
      explanation: "Grensen går der virksomheten slutter å være del av staten som juridisk person, altså mellom forvaltningsbedriften og statsforetaket. De tre andre overgangene ligger enten helt innenfor forvaltningen eller helt utenfor den.",
    },
    {
      question: "Hva er arbeidsdelingen mellom departement og direktorat?",
      options: ["Departementet betjener politisk ledelse, direktoratet iverksetter", "Departementet iverksetter politikken, mens direktoratet gir faglige råd", "Departementet fører tilsyn, mens direktoratet behandler klagesakene", "Departementet er fagorgan, mens direktoratet er politisk sekretariat"],
      explanation: "Departementet betjener politisk ledelse; direktoratet iverksetter politikken, forvalter regelverket og er fagorgan. De øvrige alternativene bytter om på rollene eller flytter tilsyns- og klagefunksjoner til feil nivå.",
    },
    {
      question: "Hvorfor er tilsynene særlig sterkt fristilt?",
      options: ["Kontrollen taper troverdighet om enkeltsaker kan overstyres", "Tilsynene finansierer virksomheten sin med gebyrer fra markedet", "Tilsynene ligger utenfor staten som juridisk person", "Tilsynene rapporterer til Stortinget i stedet for til regjeringen"],
      explanation: "Begrunnelsen for tilsynenes selvstendighet er faglig integritet: et tilsyn som kan overprøves politisk i enkeltsaker, blir et forhandlingsbord. Tilsynene er fortsatt forvaltningsorganer under et departement, uansett hvordan de finansieres.",
    },
    {
      question: "Hva er et kommunalt foretak?",
      options: ["En virksomhet med eget styre innenfor kommunen som rettssubjekt", "Et eget rettssubjekt eid av flere kommuner sammen i fellesskap", "Et aksjeselskap der kommunen eier samtlige aksjer selv", "En privat leverandør som driver tjenesten på oppdrag for kommunen"],
      explanation: "Det kommunale foretaket har eget styre, men er fortsatt del av kommunen som rettssubjekt og er underlagt kommunestyret. Interkommunale selskaper og aksjeselskaper er egne rettssubjekter, og en privat leverandør er konkurranseutsetting.",
    },
    {
      question: "Hvordan styrer eierkommunene et interkommunalt selskap?",
      options: ["Gjennom representantskapet, som er selskapets øverste organ", "Gjennom instruks fra kommunedirektøren til selskapets ledelse", "Gjennom kommunestyrets direkte vedtak i den enkelte saken", "Gjennom statsforvalterens lovlighetskontroll av selskapets vedtak"],
      explanation: "Representantskapet er det kommunale motstykket til generalforsamlingen og er selskapets øverste organ. Selskapet er et eget rettssubjekt, så verken kommunedirektøren eller kommunestyret kan styre det gjennom instruks eller enkeltvedtak.",
    },
    {
      question: "Hva peker kritikerne av fristilling på som den demokratiske kostnaden?",
      options: ["At ansvaret blir liggende der styringsredskapene ikke lenger er", "At virksomhetene blir dyrere å drive enn i ordinær forvaltningsform", "At de ansatte mister retten til å organisere seg i fagforeninger", "At Stortinget mister retten til å vedta lover på saksområdet"],
      explanation: "Innvendingen gjelder bruddet i styringskjeden: velgeren kan skifte ut statsråden, men statsråden kan ikke skifte ut selskapets beslutning. Kostnadsnivået er et empirisk spørsmål, og verken organisasjonsretten eller lovgivningsmyndigheten berøres av fristillingen.",
    },
    {
      question: "Hva er det sterkeste faglige argumentet for å fristille et tilsyn?",
      options: ["Faglig integritet krever at enkeltsaker ikke overprøves politisk", "Fristilling gir tilsynet adgang til å ta betalt for tjenestene sine", "Fristilling reduserer antallet ansatte i statsforvaltningen samlet", "Fristilling gjør at tilsynet slipper å følge forvaltningslovens regler"],
      explanation: "Argumentet er at kontrollfunksjonen mister troverdighet dersom avgjørelsene kan forhandles politisk. Fristilling gir verken gebyrhjemmel eller unntak fra forvaltningsloven, og bemanningseffekten er ingen del av begrunnelsen.",
    },
    {
      question: "Hvilket styringsredskap står urørt gjennom hele fristillingstrappen?",
      options: ["Lovgivningsmyndigheten, altså rammene rundt virksomheten", "Instruksjonsmyndigheten overfor virksomhetens daglige leder", "Omgjøringsmyndigheten når det kommer klage på et enkeltvedtak", "Departementets rett til å utpeke virksomhetens egen ledergruppe"],
      explanation: "Uansett hvor langt ut virksomheten flyttes, er rammene politisk vedtatt og kan endres politisk. Instruksjons- og omgjøringsmyndigheten faller derimot bort underveis, og lederutpeking er aldri departementets sak i et selskap.",
    },
    {
      question: "Hvilke to drøftingsvinkler roterer sammen med fristillingsredegjørelsen?",
      options: ["Statsrådens styring og den demokratiske ansvarslinjen", "Kommunestrukturen og spørsmålet om oppgavedifferensiering", "Velferdsstatens bærekraft og forholdet mellom generasjonene", "EØS-avtalens omfang og spørsmålet om bruk av reservasjonsretten"],
      explanation: "Redegjørelsen om fristilling er stabil, mens drøftingen veksler mellom hva statsråden sitter igjen med, og hva fristillingen gjør med ansvarslinjen fra velger til forvaltning. De øvrige vinklene hører til andre temabolker i faget.",
    },
  ],
  'stv1400-2-2': [
    {
      question: "Hva er New Public Management?",
      options: ["En reformbevegelse som hentet styringsformer fra privat sektor", "En lov som pålegger statlige etater å konkurrere om oppdragene sine", "En norsk reformplan vedtatt for hele forvaltningen på samme tid", "En organisasjonsmodell der alle etater slås sammen til færre enheter"],
      explanation: "New Public Management er en internasjonal reformbevegelse, ikke en lov eller en vedtatt plan. Kjernen er at oppgaver skilles ut i mer selvstendige enheter som styres etter resultater, og sammenslåing av etater er tvert imot post-NPMs svar.",
    },
    {
      question: "Hvorfor beskrives New Public Management som en «handlekurv»?",
      options: ["Elementene kan plukkes hver for seg, og land plukker ulikt", "Reformene ble innført i én samlet pakke i alle sektorer", "Elementene må innføres i en bestemt rekkefølge for å virke", "Bevegelsen ble utformet av økonomer og ikke av statsvitere"],
      explanation: "Bildet av kurven forklarer variasjonen: Norge har tatt inn mål- og resultatstyringen tungt, men vært forsiktig med prestasjonslønn. Elementene er verken en samlet pakke eller en fast rekkefølge, og hvem som utformet bevegelsen, er et annet spørsmål.",
    },
    {
      question: "Hvilket av disse er IKKE et element i handlekurven?",
      options: ["Sammenslåing av etater for å styrke samordningen", "Mål- og resultatstyring i stedet for regelstyring", "Konkurranseutsetting av offentlig tjenesteproduksjon", "Oppsplitting av store enheter i mindre og mer spesialiserte"],
      explanation: "Sammenslåing for å styrke samordning er post-NPM, altså reaksjonen på fragmenteringen New Public Management skapte. De tre øvrige hører alle hjemme i kurven, sammen med prestasjonslønn, privatisering og brukerorientering.",
    },
    {
      question: "Hvilken kritikk av byråkratiet begrunnet New Public Management?",
      options: ["At det var kostbart, tregt og lite opptatt av brukerens behov", "At det var for lite regelbundet og derfor uforutsigbart for brukeren", "At det ga for stor makt til den politiske ledelsen i den enkelte saken", "At det manglet faglig kompetanse i saksbehandlingen sin"],
      explanation: "Diagnosen var at regelstyringen ga kostbar og treg saksbehandling med for lite oppmerksomhet om resultat og bruker. Kritikken gjaldt altså ikke for lite regelbinding, ikke politisk innblanding og ikke fagkompetansen.",
    },
    {
      question: "Hva er mål- og resultatstyring?",
      options: ["Å fastsette mål og resultatkrav og kontrollere dem etterpå", "Å fastsette prosedyrer for hvordan hver enkelt sak skal behandles", "Å la brukerne velge fritt mellom flere godkjente leverandører", "Å sammenligne enheter som løser den samme oppgaven med hverandre"],
      explanation: "Mål- og resultatstyring binder resultatet og overlater framgangsmåten til virksomheten. Å fastsette prosedyrer er regelstyring, brukervalg og sammenligning er markedsmekanismer av helt andre slag.",
    },
    {
      question: "Hva skiller regelstyring fra resultatstyring?",
      options: ["Regelstyring binder framgangsmåten, resultatstyring binder utfallet", "Regelstyring binder utfallet, resultatstyring binder framgangsmåten", "Regelstyring gjelder staten, resultatstyring gjelder kommunesektoren", "Regelstyring er rettslig bindende, mens resultatstyring bare er veiledende"],
      explanation: "Regelstyring sier hvordan oppgaven skal løses, resultatstyring hva som skal komme ut av den. Begge er bindende, og begge brukes på alle forvaltningsnivåer — skillet går på hva styringen treffer.",
    },
    {
      question: "Hva er målforskyvning?",
      options: ["At det som måles blir prioritert framfor det som ikke lar seg telle", "At målene i tildelingsbrevet endres i løpet av budsjettåret", "At virksomheten setter seg mål som er lettere enn de departementet ga", "At ansvaret for måloppnåelsen flyttes fra etaten og opp til departementet"],
      explanation: "Målforskyvning er den systematiske innvendingen mot resultatstyring: innsatsen trekkes mot det tellbare, mens forebygging og sammensatte oppgaver nedprioriteres. De øvrige beskriver budsjettendringer, forhandling om ambisjonsnivå og ansvarsforhold.",
    },
    {
      question: "Hva er konkurranseutsetting?",
      options: ["Produksjonen settes i konkurranse, men finansieringen er offentlig", "Eierskapet i en offentlig virksomhet selges i sin helhet til private kjøpere", "Det offentlige slutter å tilby tjenesten og overlater den til markedet", "Brukeren velger fritt blant leverandører det offentlige har godkjent"],
      explanation: "Ved konkurranseutsetting settes produksjonen ut på anbud, mens finansieringen og ansvaret forblir offentlige. Salg av eierskap og uttrekk fra et felt er privatisering, og brukerstyrt valg blant godkjente tilbydere er fritt brukervalg.",
    },
    {
      question: "Hva er privatisering?",
      options: ["Eierskap eller ansvar overføres fra offentlig til privat hånd", "Produksjonen lyses ut i konkurranse mellom flere leverandører", "En statlig virksomhet omdannes til aksjeselskap staten eier", "En kommunal enhet skilles ut som eget foretak med eget styre"],
      explanation: "Privatisering flytter enten eierskapet til en virksomhet eller ansvaret for en oppgave ut av offentlig sektor. Anbud er konkurranseutsetting, og både statlig aksjeselskap og kommunalt foretak er fristillingsformer der det offentlige beholder eierskapet.",
    },
    {
      question: "En kommune setter drift av et sykehjem ut på anbud. Hva har den gjort?",
      options: ["Konkurranseutsatt tjenesten, men beholdt ansvar og finansiering", "Privatisert tjenesten ved å overføre ansvaret til en privat aktør", "Innført fritt brukervalg for beboerne ved sykehjemmet", "Fristilt sykehjemmet ved å gjøre det om til et kommunalt foretak med eget styre"],
      explanation: "Anbud på driften er konkurranseutsetting: kommunen betaler fortsatt og svarer fortsatt for at beboeren får tjenesten. Privatisering ville flyttet ansvaret ut, brukervalg lar brukeren velge fortløpende, og foretaksdannelse er et organisatorisk grep.",
    },
    {
      question: "Hva er kontraktsstyring?",
      options: ["Å styre gjennom avtalevilkår om innhold, kvalitet, pris og avvik", "Å styre gjennom instruks fra kommunedirektøren til enhetslederne", "Å styre gjennom lovfestede minstekrav til hvordan tjenesten ytes", "Å styre gjennom å sammenligne enhetenes nøkkeltall med hverandre"],
      explanation: "Kontraktsstyring er styringsformen som overtar ved konkurranseutsetting: det som står i avtalen kan kreves, det som ikke står der kan ikke bestilles underveis. Instruks, lovkrav og sammenligning er tre andre styringsredskaper.",
    },
    {
      question: "Hva er bestiller–utfører-modellen?",
      options: ["En deling i én enhet som definerer behovet og én som leverer", "En avtale mellom to kommuner om å løse en lovpålagt oppgave sammen", "En ordning der brukeren bestiller tjenesten direkte hos leverandøren", "En modell der kommunestyret vedtar hver enkelt bestilling selv"],
      explanation: "Modellen deler organisasjonen i en bestillerrolle og en utførerrolle, og den kan brukes også når all produksjon er i egen regi. Interkommunalt samarbeid, brukerstyrt bestilling og politisk enkeltsaksbehandling er andre ordninger.",
    },
    {
      question: "Hva kjennetegner fritt brukervalg?",
      options: ["Brukeren velger blant godkjente leverandører, og det offentlige betaler", "Kommunen velger én leverandør på forhånd etter en åpen anbudskonkurranse", "Brukeren betaler selv og velger fritt i et privat marked", "Kommunen lar sine egne enheter konkurrere om brukerne seg imellom, uten private"],
      explanation: "Ved fritt brukervalg skjer konkurransen i markedet: brukeren velger fortløpende, og det offentlige betaler. Ved konkurranseutsetting skjer konkurransen om markedet, og at brukeren betaler selv, ville vært privatisering av ansvaret.",
    },
    {
      question: "Hva er målestokk-konkurranse?",
      options: ["Sammenligning av enheter som løser samme oppgave, uten marked", "Konkurranse mellom leverandører om en avtale med det offentlige", "En ordning der kommuner konkurrerer om statlige tilskuddsmidler", "En form for prestasjonslønn knyttet til enhetens egne resultater"],
      explanation: "Målestokk-konkurranse virker gjennom offentlighet og politikk, ikke gjennom pris: forskjeller mellom enheter blir synlige og skaper press. Anbud, tilskuddskonkurranse og lønnsordninger er tre andre mekanismer.",
    },
    {
      question: "Hvilken norsk ordning er den tydeligste formen for målestokk-konkurranse?",
      options: ["Sammenlignbare nøkkeltall for kommunale tjenester", "Anbudskonkurranser etter regelverket for offentlige anskaffelser", "Brukervalg mellom godkjente leverandører i hjemmetjenesten", "Tildelingsbrev med resultatkrav til statlige virksomheter"],
      explanation: "Nøkkeltallene lar kommunene måles mot hverandre uten at det finnes noe marked, og er dermed målestokk-konkurransens norske hovedform. Anbud og brukervalg er ekte markedsmekanismer, og tildelingsbrevet er etatsstyringens redskap.",
    },
    {
      question: "Hva er brukerorientering?",
      options: ["Å legge tjenesten til rette etter brukerens behov og erfaring", "Å la brukeren betale en egenandel som dekker deler av kostnaden", "Å overlate til brukeren å velge mellom flere godkjente leverandører", "Å måle de ansattes innsats ut fra hvor mange brukere de betjener"],
      explanation: "Brukerorientering handler om å utforme tjenesten ut fra brukerens perspektiv, gjennom undersøkelser, serviceerklæringer og klarere informasjon. Egenandeler, valgfrihet og produktivitetsmåling er tre andre grep.",
    },
    {
      question: "Hva er egenregi?",
      options: ["At det offentlige produserer tjenesten med egne ansatte", "At tjenesten drives av et selskap det offentlige eier alene", "At kommunen kjøper tjenesten av en annen kommune", "At brukeren selv organiserer og betaler for tjenesten i sin helhet"],
      explanation: "Egenregi er produksjon i egen organisasjon, og det er utgangspunktet enhver konkurranseutsetting måles mot. Selskapsdrift er fristilling, kjøp fra nabokommunen er interkommunalt samarbeid, og brukerfinansiering er noe helt annet.",
    },
    {
      question: "Hva kjennetegner tonivåmodellen i kommunene?",
      options: ["Etatsnivået fjernes, og enhetene rapporterer til kommunedirektøren", "Kommunen deles i to selskaper med hvert sitt styre og eget regnskap", "Kommunestyret og formannskapet deler ansvaret for driften mellom seg", "Tjenestene organiseres i to nivåer med hvert sitt folkevalgte kommunestyre"],
      explanation: "Tonivåmodellen fjerner mellomnivået av etatssjefer og gir enhetslederne utvidet ansvar for budsjett, personale og fag. De øvrige beskriver selskapsdannelse, politisk arbeidsdeling og en kommunestruktur som ikke finnes.",
    },
    {
      question: "Hva er den vanligste innvendingen mot tonivåmodellen?",
      options: ["Den faglige samordningen mellom enhetene kan svekkes", "Enhetslederne får for lite ansvar for eget budsjett", "Kommunedirektøren mister myndighet til enhetslederne", "Modellen krever at tjenestene settes ut på anbud"],
      explanation: "Når mellomnivået forsvinner, får kommunedirektøren mange enheter å følge opp, og koordineringen mellom dem kan svekkes. Modellen gir enhetslederne mer ansvar, ikke mindre, og forutsetter ingen konkurranseutsetting.",
    },
    {
      question: "Hva er stykkprisfinansiering?",
      options: ["Enheten får penger etter hvor mye den faktisk leverer", "Enheten får en fast ramme uavhengig av aktivitetsnivået", "Brukeren betaler en fast pris per behandling eller besøk", "Kommunen betaler leverandøren en fast sum per avtaleår"],
      explanation: "Stykkpris knytter tildelingen til levert volum, slik at pengene følger brukeren. Fast ramme er det motsatte prinsippet, brukerbetaling er egenandel, og fast årssum er en avtaleform ved konkurranseutsetting.",
    },
    {
      question: "Hva er fragmentering i denne sammenhengen?",
      options: ["Forvaltningen splittes i enheter uten ansvar for helheten", "Ansatte fordeles på flere arbeidssteder innenfor samme etat", "Ansvaret for en tjeneste deles mellom stat og kommune", "Et departement deles i flere avdelinger med hvert sitt fagfelt"],
      explanation: "Fragmentering er New Public Managements mest omtalte utilsiktede virkning: hver enhet optimaliserer sitt eget mål, og ingen svarer for grenseflatene. Fordeling av ansatte, funksjonsfordeling mellom nivåer og intern avdelingsinndeling er andre forhold.",
    },
    {
      question: "Hva er transaksjonskostnader ved konkurranseutsetting?",
      options: ["Ressursene som går med til å inngå og følge opp avtalen", "Prisen leverandøren tar for å produsere selve tjenesten", "Gebyret kommunen betaler for å kunngjøre konkurransen", "Kostnaden ved å ansette flere i den utførende enheten"],
      explanation: "Transaksjonskostnadene er utredning, kravspesifikasjon, gjennomføring av konkurransen, kontroll og avvikshåndtering — de trekkes fra gevinsten på produksjonssiden. Selve produksjonsprisen og kunngjøringsgebyret er noe annet.",
    },
    {
      question: "Hva gjør konkurranseutsetting med ansvarsplasseringen?",
      options: ["Kjeden får flere ledd: leverandør, bestiller og avtalens ordlyd", "Ansvaret flyttes i sin helhet fra kommunen over til den private leverandøren", "Ansvaret flyttes fra kommunestyret til statsforvalteren", "Ansvaret bortfaller så lenge avtalen er inngått etter regelverket"],
      explanation: "Ansvarsplasseringen blir mer sammensatt, siden svikten kan ligge hos leverandøren, i kravspesifikasjonen eller i oppfølgingen. Kommunen beholder likevel ansvaret overfor innbyggeren, uansett hvem som utfører oppgaven.",
    },
    {
      question: "Hva er hovedargumentet for at markedsmekanismer styrker politisk styring?",
      options: ["Kravene må skrives ned og blir dermed eksplisitte og etterprøvbare", "Politikerne slipper å ta stilling til hva tjenesten skal inneholde", "Leverandøren overtar ansvaret for at innbyggeren får tjenesten", "Kommunen sparer penger som kan brukes på andre tjenester"],
      explanation: "Argumentet er at kravspesifikasjonen tvinger fram en avklaring av hva tjenesten faktisk skal være, slik at kvaliteten kan etterprøves. Politikerne må ta mer stilling, ikke mindre, ansvaret blir hos kommunen, og innsparing er et empirisk spørsmål.",
    },
    {
      question: "Hva er hovedargumentet for at markedsmekanismer svekker politisk styring?",
      options: ["Avtalen binder i avtaleperioden, og nye flertall arver bindingene", "Leverandørene får rett til å bestemme innholdet i tjenesten", "Kommunestyret mister retten til å vedta budsjettet for den aktuelle tjenesten", "Statsforvalteren overtar kontrollen med hvordan avtalen følges opp"],
      explanation: "Innvendingen gjelder bindingstiden: styringen flyttes fram til anskaffelsestidspunktet og låses deretter, slik at et nytt flertall arver valg det ikke har tatt. Leverandøren bestemmer ikke innholdet, og verken budsjettmyndighet eller kontrollansvar flyttes.",
    },
    {
      question: "Hva er den skarpeste måten å formulere uenigheten om konkurranseutsetting på?",
      options: ["Partene er uenige om hvilken styring som er verdifull", "Partene er uenige om hvorvidt kommunen har lov til å bruke anbud", "Partene er uenige om hvem som formelt eier tjenestetilbudet", "Partene er uenige om hvorvidt anbud er tillatt etter regelverket"],
      explanation: "Den ene siden verdsetter eksplisitte og etterprøvbare krav, den andre løpende handlingsrom og evnen til å skifte kurs. Lovligheten og eierskapet er ikke omstridt, og å skrive uenigheten som et rettsspørsmål bommer på drøftingen.",
    },
    {
      question: "Hvilke drøftingsvinkler har New Public Management-oppgaven rotert mellom?",
      options: ["Politisk styring, forvaltningens verdier og det kommunale nivået", "Kommunestruktur, inntektssystemet og statlig tilsyn med kommunene", "Velferdsregimer, fattigdomsmåling og velferdsstatens bærekraft", "EØS-avtalens omfang, reservasjonsretten og europeisering av etater"],
      explanation: "Samme redegjørelse er drøftet mot politisk styring, mot forvaltningens verdigrunnlag og mot forholdet mellom statlig og kommunalt nivå. De øvrige alternativene hører til andre temabolker i faget.",
    },
    {
      question: "Hva er hovedforskjellen mellom effektivitet og allokeringseffektivitet?",
      options: ["Den ene gjelder ressursbruken, den andre hva ressursene brukes på", "Den ene gjelder staten, den andre gjelder kommunesektoren", "Den ene gjelder kostnader, den andre gjelder kvaliteten på tjenesten", "Den ene måles av etaten selv, mens den andre bare måles av Riksrevisjonen"],
      explanation: "Effektivitet i New Public Managements forstand spør om vi gjør tingene riktig; allokeringseffektivitet spør om vi gjør de riktige tingene, altså om tilbudet svarer til innbyggernes ønsker. Skillet går ikke på forvaltningsnivå eller på hvem som måler.",
    },
  ],
  'stv1400-2-3': [
    {
      question: "Hva er post-NPM?",
      options: ["Reformer som svarer på fragmenteringen med samordning og helhet", "Reformer som viderefører oppsplittingen i enda mindre enheter", "Reformer som overfører offentlige oppgaver til private aktører", "Reformer som avvikler mål- og resultatstyringen i staten"],
      explanation: "Post-NPM er reaksjonen på at oppsplittingen kostet helhet, og grepene er sammenslåing, koordinering og felles mål. Videre oppsplitting er den forrige bølgen, overføring til private er privatisering, og mål- og resultatstyringen består.",
    },
    {
      question: "Hvilket problem svarer post-NPM på?",
      options: ["At ingen har ansvar for det som ligger mellom spesialiserte enheter", "At forvaltningen er for regelbundet og bruker for lang tid på saker", "At statlige virksomheter mangler faglig kompetanse på sitt område", "At kommunene har fått for mange oppgaver i forhold til størrelsen"],
      explanation: "Diagnosen er fragmentering: hver enhet leverer godt på eget mål, mens grenseflatene faller mellom. Regelbundethet var den forrige bølgens diagnose, og kompetanse- og kommunestrukturspørsmål hører til andre debatter.",
    },
    {
      question: "Hvorfor er det upresist å si at post-NPM avløste New Public Management?",
      options: ["Post-NPM legger seg oppå; det gamle laget blir liggende", "Post-NPM ble aldri gjennomført i norsk statsforvaltning", "Post-NPM gjelder bare kommunesektoren og ikke statsforvaltningen", "Post-NPM er et rent akademisk begrep uten praktiske grep"],
      explanation: "Mål- og resultatstyringen og de fristilte enhetene består, og samordningsgrepene kommer i tillegg — det kalles lagdeling. Post-NPM er gjennomført i Norge, gjelder begge nivåer og har svært konkrete virkemidler.",
    },
    {
      question: "Hva er reintegrering?",
      options: ["Å samle igjen enheter som tidligere ble skilt", "Å skille ut en oppgave til et nyopprettet direktorat", "Å føre en oppgave tilbake fra kommunen til staten", "Å ansette igjen folk som mistet jobben i en omstilling"],
      explanation: "Reintegrering er post-NPMs motstykke til oppsplitting: enheter slås sammen eller oppgaver føres tilbake i linjen. Utskilling er indre fristilling, og overføring mellom forvaltningsnivåer er funksjonsfordeling.",
    },
    {
      question: "Hva er horisontal samordning?",
      options: ["Koordinering på tvers av sektorer og etater på samme nivå", "Koordinering mellom departement, direktorat og ytre etat i linjen", "Koordinering mellom staten og kommunene om felles oppgaver", "Koordinering mellom Norge og andre land i internasjonale organer"],
      explanation: "Horisontal samordning går sidelengs, på tvers av sektorgrensene. Linjen fra departement til underliggende virksomhet er vertikal samordning, mens de to øvrige beskriver forvaltningsnivåer og mellomstatlig samarbeid.",
    },
    {
      question: "Hva menes med helhetlig statsstyring, «whole-of-government»?",
      options: ["At staten skal opptre som én aktør i sammensatte saker", "At staten skal overta oppgaver kommunene i dag har ansvar for", "At alle statlige etater skal ha samme organisasjonsform", "At staten skal styre alle sektorer gjennom ett felles budsjett"],
      explanation: "Ideen er at staten møter sammensatte problemer samlet i stedet for sektorvis, gjennom både organisatoriske og kulturelle grep. Den handler verken om oppgavefordeling mellom nivåer, ensartede organisasjonsformer eller ett felles budsjett.",
    },
    {
      question: "Hva er gjenstridige tverrsektorielle problemer, «wicked issues»?",
      options: ["Problemer uten entydig løsning som går på tvers av sektorene", "Problemer som er tekniske og krever spesialisert fagkompetanse", "Problemer som oppstår fordi et regelverk er uklart formulert", "Problemer som krever store bevilgninger over lang tid for å bli løst"],
      explanation: "Slike problemer lar seg beskrive på flere måter, har ingen entydig løsning, og ingen enkelt etat har mandat eller budsjett til hele problemet. Tekniske spørsmål, uklare regler og kostbare tiltak er andre slags utfordringer.",
    },
    {
      question: "Hvilket av disse er et norsk eksempel på et gjenstridig problem?",
      options: ["Beredskap, der ansvaret er spredt på mange etater", "Utbetaling av en fastsatt ytelse til dem som fyller vilkårene", "Innkreving av en avgift med et entydig og lovfestet grunnlag", "Behandling av byggesøknader etter plan- og bygningsloven"],
      explanation: "Beredskap går på tvers av sektorer og har ingen entydig løsning, og granskingen etter terrorangrepene i 2011 rettet nettopp kritikk mot samordningen. De tre andre er avgrensede oppgaver med klart mandat i én linje.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot sammenslåing som samordningsgrep?",
      options: ["Samordningsproblemet flyttes inn i organisasjonen", "Sammenslåing er forbudt uten Stortingets samtykke i hvert tilfelle", "Sammenslåing gjør at ansvaret ikke lenger kan plasseres hos noen", "Sammenslåing fjerner muligheten til å styre etter mål og resultater"],
      explanation: "Den nye enheten er større og mer kompleks, og de gamle kulturene må samordnes internt i årevis. Sammenslåing samler tvert imot ansvaret hos én leder, og de nye enhetene styres videre etter mål og resultatkrav.",
    },
    {
      question: "Hvilken rolle har Statsministerens kontor i samordningen?",
      options: ["Det forbereder og avklarer saker som berører flere departementer", "Det instruerer den enkelte statsråden i saker på tvers av sektorer", "Det overprøver de vedtakene departementene har truffet i den enkelte saken", "Det fordeler budsjettmidler mellom departementene hvert år"],
      explanation: "Kontoret styrer prosessen fram mot regjeringsbehandling og påser at berørte departementer er hørt. Det har ingen instruksjonsmyndighet over statsråder, ingen omgjøringsrett og ingen egen budsjettmyndighet.",
    },
    {
      question: "Hva er den innebygde svakheten ved samordningsroller?",
      options: ["De har ansvar for koordinering, men ingen myndighet", "De har myndighet, men ingen som holder dem ansvarlige", "De er alltid plassert i et departement uten fagkompetanse", "De er midlertidige og opphører når regjeringen skiftes ut"],
      explanation: "En koordinator kan invitere, påpeke og rapportere, men ikke pålegge etater under andre statsråder noe — det ville brutt med ministerstyret. Manglende ansvarliggjøring, plassering og varighet er ikke det som kjennetegner rollen.",
    },
    {
      question: "Hva er tverrsektorielle mål som samordningsgrep?",
      options: ["Mål som skrives inn i flere tildelingsbrev samtidig", "Mål som Stortinget vedtar i stedet for at regjeringen gjør det", "Mål som gjelder både statlige og kommunale virksomheter", "Mål som erstatter de sektorspesifikke målene helt"],
      explanation: "Grepet bruker mål- og resultatstyringen til å rette flere etater mot samme sak, uten organisasjonsendring. Målene kommer i tillegg til de sektorspesifikke, og hvem som vedtar dem og hvilke nivåer de gjelder, er andre spørsmål.",
    },
    {
      question: "Hva er svakheten ved tverrsektorielle mål?",
      options: ["Delte mål taper mot målene hver etat måles på alene", "Delte mål kan bare brukes i kommunesektoren, ikke i staten", "Delte mål krever at etatene slås sammen organisatorisk først", "Delte mål kan ikke rapporteres på i årsrapporten"],
      explanation: "Når et mål deles, blir ansvaret uklart, og det taper i konkurransen med de målene virksomheten måles på alene. Grepet krever ingen sammenslåing, gjelder alle nivåer og kan rapporteres på som andre mål.",
    },
    {
      question: "Hva beskriver pendelbevegelsen i reformlogikken?",
      options: ["At reformene svinger mellom spesialisering og samordning", "At reformene gradvis gjør forvaltningen mer effektiv over tid", "At reformene veksler mellom statlig og kommunalt ansvar for oppgavene", "At reformene følger skiftende flertall i Stortinget"],
      explanation: "Pendelen svinger fordi begge hensynene er ekte og ikke kan maksimeres samtidig: spesialisering gir dybde og grenseflater, samordning gir helhet og diffust ansvar. Det er verken lineær framgang, nivåveksling eller ren flertallseffekt.",
    },
    {
      question: "Hva menes med lagdeling av reformer?",
      options: ["Nye reformer legger seg oppå de gamle uten å fjerne dem", "Reformene innføres først i staten og deretter i kommunene", "Reformene gjennomføres trinnvis over flere påfølgende budsjettår", "Reformene rammer ledernivået før de når de ansatte"],
      explanation: "Forvaltningen bærer flere reformlogikker samtidig: klassisk regelstyring, mål- og resultatstyring og samordningskrav. Rekkefølge mellom nivåer, innfasing over år og hvem som berøres først, er andre forhold.",
    },
    {
      question: "Hva er sektorprinsippet?",
      options: ["Forvaltningen deles etter saksområde med én statsråd", "Forvaltningen deles etter geografi med én ansvarlig etat", "Forvaltningen deles i en bestillerdel og en utførerdel", "Forvaltningen deles mellom staten og kommunene etter oppgave"],
      explanation: "Sektorprinsippet gir hvert saksområde ett departement og én statsråd som svarer for det overfor Stortinget. Geografisk inndeling, bestiller–utfører og funksjonsfordeling mellom nivåer er tre andre inndelingsprinsipper.",
    },
    {
      question: "Hvorfor er sektorgrensene vanskelige å viske ut i Norge?",
      options: ["Fordi grensene følger av ministeransvaret overfor Stortinget", "Fordi Grunnloven fastsetter hvilke departementer som skal finnes", "Fordi etatene selv motsetter seg alle endringer i sine egne mandater", "Fordi EØS-avtalen krever en bestemt inndeling av forvaltningen"],
      explanation: "Skal én statsråd kunne stilles til ansvar for et område, må området ha en grense — og den grensen er samtidig siloveggen. Grunnloven fastsetter ingen departementsstruktur, og EØS stiller ingen slike krav.",
    },
    {
      question: "Hva skiller vertikal fra horisontal samordning?",
      options: ["Vertikal går i én sektor, horisontal går på tvers av sektorer", "Vertikal går på tvers av sektorer, horisontal går i én sektor", "Vertikal gjelder staten, horisontal gjelder kommunesektoren", "Vertikal skjer i møter, horisontal skjer gjennom tildelingsbrev"],
      explanation: "Vertikal samordning kobler nivåene i én sektor — departement, direktorat, ytre etat — mens horisontal kobler enheter på tvers. Norsk forvaltning er sterk på den første og svakere på den andre.",
    },
    {
      question: "Hva er samordningens tre kostnader?",
      options: ["Tid, klarhet i ansvaret og faglig dybde", "Penger, arbeidsplasser og lokal tilstedeværelse", "Rettssikkerhet, likebehandling og innsyn", "Kompetanse, digitalisering og rekruttering"],
      explanation: "Samordning tar tid, gjør ansvaret mer delt og svekker spesialiseringsgevinsten. Rettssikkerhet og likebehandling er derimot verdier post-NPM ikke utfordrer, og de øvrige listene gjelder andre problemstillinger.",
    },
    {
      question: "Hva er hovedargumentet for å styrke samordningen ytterligere?",
      options: ["De viktigste problemene følger ikke sektorgrensene", "Sammenslåtte etater er alltid billigere å drive", "Færre etater gir færre ansatte i statsforvaltningen", "Samordning fjerner behovet for mål- og resultatstyring"],
      explanation: "Argumentet er at beredskap, klimatilpasning og sammensatte brukerbehov krysser sektorene, og at en sektorvis forvaltning derfor systematisk leverer dårlig på dem. Kostnads-, bemannings- og styringspåstandene følger ikke av samordningen.",
    },
    {
      question: "Hva er hovedargumentet mot å drive samordningen lenger?",
      options: ["Delt ansvar er ofte ingens ansvar, og kontrollen svekkes", "Samordning er ulovlig uten hjemmel i en egen lov", "Samordning krever at ministeransvaret oppheves helt", "Samordning gjør at Stortinget mister bevilgningsmyndigheten"],
      explanation: "Klart ansvar er en forutsetning for demokratisk kontroll, og store, samordnede enheter mister dessuten faglig spissing. Samordning krever ingen lovhjemmel, oppheving av ministeransvaret er ikke foreslått, og bevilgningsmyndigheten er urørt.",
    },
    {
      question: "Hvilke to drøftingsvinkler går igjen i post-NPM-stoffet?",
      options: ["Styrbarhet, og ansvar og demokratisk kontroll", "Kommunestruktur, og statlige styringsvirkemidler", "Velferdsregimer, og fattigdomsmåling i Norge", "EØS-avtalens omfang, og bruken av reservasjonsretten"],
      explanation: "Den ene vinkelen spør om samordningen har gjenopprettet politisk styring, den andre hva den gjør med muligheten til å plassere ansvar. De øvrige alternativene hører til andre temabolker i faget.",
    },
  ],
  'stv1400-3-1': [
    {
      question: "Hva er en idealtype hos Weber?",
      options: ["En rendyrket modell som virkeligheten kan måles mot", "En beskrivelse av hvordan en organisasjon faktisk fungerer", "En anbefaling om hvordan en forvaltning bør bygges opp", "En hypotese som kan bekreftes eller avkreftes empirisk"],
      explanation: "Idealtypen er en bevisst renskåret målestokk, ikke en beskrivelse av noen faktisk organisasjon. Ordet «ideal» betyr rendyrket og ikke ønskelig, så modellen er heller ingen anbefaling — og siden den ikke er en påstand om verden, kan den ikke avkreftes slik en hypotese kan.",
    },
    {
      question: "Hvilken autoritetstype hører byråkratiet til hos Weber?",
      options: ["Legal-rasjonell autoritet, der lydigheten hviler på regelen", "Tradisjonell autoritet, der lydigheten hviler på sedvane og arv", "Karismatisk autoritet, der lydigheten hviler på personen som leder", "Kollegial autoritet, der lydigheten hviler på flertallet"],
      explanation: "Byråkratiet er organisasjonsformen som hører til legal-rasjonell autoritet: man adlyder fordi ordren er gitt av noen som har myndighet etter en regel man aksepterer. Ved tradisjonell autoritet hviler plikten på sedvane, ved karismatisk på personen selv — og det er nettopp derfor autoriteten i byråkratiet følger stillingen.",
    },
    {
      question: "Hva innebærer det at autoriteten er knyttet til posisjonen?",
      options: ["Myndigheten følger stillingen og faller bort når man går ut av den", "Myndigheten følger personen og kan tas med over i en ny stilling i etaten", "Myndigheten hviler på personlige egenskaper hos den som leder", "Myndigheten må delegeres på nytt fra den politiske ledelsen i hver enkelt sak"],
      explanation: "Myndigheten skifter hender samme dag som stillingen gjør det, og det er dette som gjør organisasjonen uavhengig av enkeltpersoner. At myndigheten skulle følge personen eller hvile på personlige egenskaper, er tvert imot kjennetegnet ved den karismatiske autoriteten Weber setter opp som motstykke.",
    },
    {
      question: "Hva binder regelstyring?",
      options: ["Framgangsmåten saken skal behandles etter", "Resultatet virksomheten skal oppnå i året", "Budsjettrammen virksomheten disponerer", "Antallet saker som skal ferdigbehandles"],
      explanation: "Regelstyring binder veien: saken skal behandles slik, etter disse kriteriene, med dette utfallet når vilkårene er oppfylt. Å binde resultatet og la virksomheten velge veien dit er mål- og resultatstyring, og skillet mellom de to er selve aksen i drøftingen om reformene har uthulet Webers modell.",
    },
    {
      question: "Hva er meritokrati i Webers byråkratimodell?",
      options: ["At stillinger tildeles etter formelle kvalifikasjoner", "At de ansatte belønnes etter målte resultater i stillingen", "At stillinger fordeles etter tjenestetid og ansiennitet alene", "At de ansatte velges ved avstemning av dem de fatter vedtak om"],
      explanation: "Meritokratiet er rekruttering og forfremmelse etter utdanning, prøve og erfaring, som vern mot at stillinger fylles etter slekt, vennskap eller partibok. Belønning etter målte resultater er prestasjonslønn — et New Public Management-element som nettopp utfordrer Webers punkt om fast lønn til stillingen.",
    },
    {
      question: "Hvorfor er fast lønn og fast ansettelse et poeng i modellen?",
      options: ["Det var Webers svar på korrupsjon i forvaltningen", "Det gjorde det enklere å skifte ut ansatte som ikke fungerte", "Det knyttet lønnen til den enkeltes måloppnåelse i stillingen", "Det lot de ansatte drive embetet som sin egen næringsvirksomhet"],
      explanation: "Den som lever av en fast lønn og har en karriere å tape, har mindre grunn til å ta imot betaling fra dem hen fatter vedtak om. Stillingsvernet gjør det tvert imot vanskeligere å skifte ut folk, og at embetet drives som egen inntektskilde, er nettopp ordningen modellen bryter med.",
    },
    {
      question: "Hva peker formelen «organisasjon uten mennesker» på?",
      options: ["At systemet av stillinger og regler er det avgjørende, ikke hvem som fyller dem", "At forvaltningen bør ha færrest mulig ansatte målt mot antallet innbyggere den betjener", "At avgjørelsene i forvaltningen bør automatiseres og i stedet treffes av datasystemer", "At de ansatte i forvaltningen ikke bør ha direkte kontakt med publikum"],
      explanation: "Formelen er en tilspisset måte å si at idealtypen beskriver et system av stillinger og regler der det er likegyldig hvem som sitter i dem. Den handler verken om bemanningstall, automatisering eller publikumskontakt — og speilvendingen «mennesker uten organisasjon» brukes om den motsatte modellen.",
    },
    {
      question: "Hva er skillet mellom politikk og administrasjon i modellen?",
      options: ["En norm om at politikken treffer verdivalgene og forvaltningen iverksetter dem", "En beskrivelse av at forvaltningen er uten innflytelse på politikkutformingen", "En rettsregel som forbyr embetsverket å gi råd til den politiske ledelsen", "En ordning der forvaltningen avgjør hvilke saker politikerne skal behandle"],
      explanation: "Skillet er normativt: det sier hvordan arbeidsdelingen bør være, og kan derfor ikke motbevises med at forvaltningen faktisk påvirker politikken gjennom utredning og skjønn. Å lese normen som en beskrivelse er en vanlig feil, for da har man allerede svart på det oppgaven ber om å drøfte.",
    },
    {
      question: "Hva er målforskyvning?",
      options: ["At middelet blir målet, slik at prosedyre eller rapportering styrer arbeidet", "At de politiske målene for en etat endres etter et regjeringsskifte", "At måltallene i tildelingsbrevet settes lavere enn de kunne vært satt", "At en etat får nye oppgaver uten at bevilgningen følger med over budsjettet"],
      explanation: "Målforskyvning er at prosedyren, rapporteringen eller måltallet blir det man styrer etter, mens oppgaven kommer i andre rekke. Sammen med regelrytteri er dette den faglige versjonen av byråkratikritikken, og merk at resultatstyring har sin egen variant: det som telles, blir det som gjøres.",
    },
    {
      question: "Hvilken norsk lov forankrer regelstyringen i enkeltvedtak?",
      options: ["Forvaltningsloven, med krav om utredning, begrunnelse og klageadgang", "Offentleglova, som gir rett til innsyn i forvaltningens dokumenter", "Statsansatteloven, som regulerer ansettelser og opphør i staten", "Arkivlova, som pålegger offentlige organer å ha ordnet arkiv"],
      explanation: "Forvaltningsloven stiller kravene til selve saksbehandlingen: forsvarlig utredning, forhåndsvarsel, begrunnelse, klageadgang og habilitet. De tre andre lovene forankrer andre av modellens kjennetegn — innsyn, meritokrati og skriftlighet — men ikke regelstyringen i vedtaket.",
    },
    {
      question: "Hva er kvalifikasjonsprinsippet i staten?",
      options: ["At den best kvalifiserte søkeren skal ansettes i stillingen", "At stillinger skal lyses ut internt før de lyses ut eksternt", "At ansettelser i departementene godkjennes av statsråden selv", "At ansatte har rett til opplæring for å fylle kravene i stillingen"],
      explanation: "Kvalifikasjonsprinsippet er den norske forankringen av meritokratiet: søkerne rangeres etter utdanning, erfaring og egnethet. Ansettelsene behandles av innstillings- og ansettelsesråd og ikke av statsråden personlig, nettopp for at forvaltningen ikke skal fylles etter politisk tilhørighet.",
    },
    {
      question: "Hva er det viktigste avviket fra ren regelstyring i statlig etatsstyring i dag?",
      options: ["At etatene styres gjennom mål og resultatkrav i tildelingsbrev", "At statsråden løpende griper inn og instruerer etatene i enkeltsaker", "At klagesakene er flyttet fra forvaltningen over til domstolene", "At etatene har fått myndighet til å fastsette lover på eget felt"],
      explanation: "Tildelingsbrevet samler bevilgning, mål, resultatkrav og rapporteringskrav for året, og binder dermed resultatet i stedet for framgangsmåten. Instruks i enkeltsaker ville vært mer direkte styring og ikke mindre, og de to andre alternativene beskriver ordninger som ikke er den generelle styringsformen.",
    },
    {
      question: "Hva menes med at forvaltningen har skjønn?",
      options: ["At regelverket lar et handlingsrom stå åpent som noen må fylle", "At forvaltningen kan se bort fra regelverket i særlig vanskelige saker", "At forvaltningen kan avslå en søknad uten å gi noen begrunnelse", "At politisk ledelse selv avgjør de vanskeligste enkeltsakene i etaten"],
      explanation: "Skjønnet oppstår der loven sier «etter en samlet vurdering» eller «når særlige grunner foreligger». Det er ikke rett til å fravike regelverket eller til å slippe begrunnelsen — skjønnet er rammet inn av krav om saklighet, likebehandling og forsvarlig begrunnelse, og kan overprøves.",
    },
    {
      question: "Hva var Webers eget syn på byråkratiets framvekst?",
      options: ["Teknisk overlegent, men også en innelukking han var urolig for", "Utelukkende positivt, som demokratiets endelige fullbyrdelse", "Utelukkende negativt, som en trussel mot all effektiv styring", "Uten interesse, siden han beskrev formen og aldri vurderte den"],
      explanation: "Weber mente byråkratiet var overlegent sammenlignet med sedvane og personlige nettverk, men bildet om et bur av regler og rasjonalitet mennesket selv har bygget, er en advarsel. Kritikken ligger altså i modellen fra begynnelsen, og ikke først i reformbølgene som kom senere.",
    },
    {
      question: "Hva skiller instruksjonsmyndighet fra omgjøringsmyndighet?",
      options: ["Den første virker før avgjørelsen faller, den andre etter", "Den første gjelder statlige organer, den andre gjelder kommunale", "Den første gjelder selskaper, den andre forvaltningsorganer", "Den første må være skriftlig, den andre kan være muntlig"],
      explanation: "Instruksjonsmyndigheten er retten til å gi pålegg om hvordan et underordnet organ skal opptre, mens omgjøringsmyndigheten er retten til å endre eller oppheve et vedtak som allerede er truffet. Skillet er tidspunktet — ikke forvaltningsnivået, organisasjonsformen eller formkravet.",
    },
    {
      question: "Hva er hierarkiets funksjon i den demokratiske styringen?",
      options: ["Å gi en ubrutt ansvarslinje fra statsråden ned til saksbehandleren", "Å sikre at de mest erfarne i etaten avgjør de vanskeligste sakene", "Å hindre at forvaltningen får direkte kontakt med politisk ledelse", "Å fordele oppgaver mellom etater som ligger på samme nivå"],
      explanation: "Uten en ubrutt linje ned gjennom nivåene ville et politisk vedtak kunne stoppe underveis uten at noen kunne holdes ansvarlig, og klageveien oppover ville falle bort. Å fordele oppgaver mellom enheter på samme nivå er horisontal spesialisering, som er en annen mekanisme.",
    },
    {
      question: "Hva er habilitetsreglenes funksjon i modellen?",
      options: ["Å hindre at personlig tilknytning avgjør utfallet av en sak", "Å sikre at alle saker behandles av den mest erfarne i etaten", "Å hindre at politisk ledelse får innsyn i enkeltsaker under arbeid", "Å sikre at parten får uttale seg før vedtaket i saken treffes"],
      explanation: "Habilitetsreglene er den praktiske siden av upersonligheten: den som har personlig tilknytning til en sak, skal ikke behandle den. Retten til å uttale seg før vedtak er derimot kontradiksjon, som er et annet av forvaltningslovens krav og hører til rettssikkerheten.",
    },
    {
      question: "Hva er forskjellen på regelstyring og mål- og resultatstyring?",
      options: ["Den ene binder framgangsmåten, den andre binder resultatet", "Den ene gjelder i staten, den andre gjelder i kommunene", "Den ene er lovfestet, den andre bygger på frivillige avtaler", "Den ene gjelder lederne, den andre gjelder saksbehandlerne under dem"],
      explanation: "Regelstyringen prioriterer likebehandling og forutsigbarhet i hver enkelt sak, mens resultatstyringen prioriterer måloppnåelse og lar virksomheten velge veien. I norsk forvaltning ligger de i hvert sitt lag: regler i enkeltvedtak mot borgeren, resultatkrav i styringen av etaten.",
    },
    {
      question: "Hva er regelrytteri?",
      options: ["At regelen følges så bokstavelig at formålet med den går tapt", "At saksbehandleren ser helt bort fra regelen i de vanskeligste sakene", "At regelverket endres så ofte at praksis ikke rekker å sette seg", "At politisk ledelse instruerer etaten i strid med regelverket"],
      explanation: "Regelrytteri er en utilsiktet virkning av at modellen fungerer etter hensikten, ikke et avvik fra den. Sammen med målforskyvning er dette den faglige byråkratikritikken, i motsetning til dagligtalens bruk av «byråkrati» som skjellsord, som ikke gir uttelling i en besvarelse.",
    },
    {
      question: "Hva viser de brede undersøkelsene av sentraladministrasjonen om politisk lojalitet?",
      options: ["At det ikke er dokumentert noen klar økning i vektlagt lojalitet over tid", "At vektleggingen av politisk lojalitet i embetsverket har falt klart over tid", "At embetsverket i departementene i praksis rekrutteres etter partitilhørighet", "At politisk lojalitet er den eneste verdien embetsverket i dag vektlegger"],
      explanation: "Undersøkelsene er fagets viktigste nyanserings-empiri: de viser at den utbredte påstanden om økende politisering ikke er belagt i disse dataene. De beviser ikke at politisering ikke finnes — og de er derfor et argument i drøftingen, ikke en avslutning på den.",
    },
    {
      question: "Hva er forskjellen på politisk lojalitet og partipolitisering?",
      options: ["Å iverksette regjeringens politikk mot å fylle stillinger etter partibok", "Det første gjelder statsråder, mens det andre gjelder embetsverket", "Det første er ulovlig i staten, mens det andre er fullt ut lovlig", "Det er to ord for nøyaktig det samme forholdet, brukt i ulike fagtradisjoner"],
      explanation: "Politisk lojalitet er en legitim verdi i embetsrollen: forvaltningen skal iverksette den sittende regjeringens politikk lojalt. Partipolitisering er noe annet, nemlig at stillinger fylles etter tilhørighet — og å blande de to gjør enhver drøfting av embetsrollen upresis.",
    },
    {
      question: "Hvorfor er ikke idealtypen motbevist av at norsk forvaltning avviker fra den?",
      options: ["Fordi modellen er rendyrket, og alle virkelige organisasjoner avviker", "Fordi avvikene er små nok til at de trygt kan ses bort fra", "Fordi idealtypen bare var ment å gjelde forvaltninger utenfor Norden", "Fordi avvikene er midlertidige og vil forsvinne etter hvert som tiden går"],
      explanation: "Siden idealtypen er bevisst renskåret, er avvik ventet, og å konstatere dem er derfor ikke et funn. Funnet er hvilke punkter som avviker og hvorfor — og en besvarelse som slutter fra avvik til forfall, har brukt målestokken feil.",
    },
    {
      question: "Hvor står de weberianske kjennetegnene sterkest i norsk forvaltning i dag?",
      options: ["I saksbehandlingen av enkeltvedtak som gjelder borgerens rettigheter", "I styringen av underliggende etater gjennom mål og resultatkrav", "I forholdet mellom staten som eier og de heleide statlige aksjeselskapene", "I samordningen av saker som går på tvers av flere departementer"],
      explanation: "Regelstyring, skriftlighet og klageadgang er lovfestede krav til enkeltvedtak, og der er modellen ikke bare relevant, men norm. I styringen av etatene som organisasjoner har derimot resultatstyringen overtatt, og det er nettopp denne lagdelingen som løfter en drøfting.",
    },
    {
      question: "Hvilket pensumbidrag bruker begrepet «det ansvarlige byråkrati» om Webers modell?",
      options: ["Christensen mfl., som stiller det opp mot det representative byråkratiet", "Stigen mfl., som beskriver sentralforvaltningens organisering og bemanning", "Fiva mfl., som behandler kommunal organisering og kommunal økonomi", "Halvorsen mfl., som behandler velferdsstatens ordninger og utvikling"],
      explanation: "Christensen mfl. eier selve paret: det ansvarlige og det representative byråkratiet som to konkurrerende svar på hvordan forvaltningen holdes demokratisk forsvarlig. Stigen mfl. eier den empiriske beskrivelsen av apparatet, mens de to andre bidragene hører hjemme i andre deler av faget.",
    },
    {
      question: "Hva er den hyppigst påpekte svakheten i besvarelser om Webers modell?",
      options: ["At kjennetegnene ramses opp uten å bli fylt med innhold", "At kjennetegnene gjengis i feil rekkefølge i redegjørelsen", "At kandidaten bruker for mange norske eksempler i drøftingen", "At kandidaten definerer begrepene før redegjørelsen begynner"],
      explanation: "Å liste kjennetegnene er noe alle klarer, og derfor gir det ingen uttelling i seg selv. Kravet er at hvert punkt får hva det er, hva det er godt for og hva det koster. Norske eksempler og tidlige begrepsavklaringer er tvert imot ting som premieres.",
    },
    {
      question: "Hva kreves for at en besvarelse i dette faget skal nå C eller bedre?",
      options: ["At den inneholder reell drøfting, ikke bare en grundig redegjørelse", "At den dekker samtlige kjennetegn i modellen den redegjør for", "At den bruker flest mulig faguttrykk hentet fra pensumlitteraturen", "At den konkluderer med et tydelig og klart formulert standpunkt"],
      explanation: "Drøftingsterskelen er den harde skillelinjen: en besvarelse uten spor av drøfting gis D eller lavere, uansett hvor korrekt og fullstendig redegjørelsen er. Verken fullstendighet, terminologitetthet eller et skarpt standpunkt kan erstatte avveiningen.",
    },
    {
      question: "Hva er det sentrale styringsdokumentet mellom departement og underliggende etat?",
      options: ["Tildelingsbrevet, som samler bevilgning, mål og rapporteringskrav", "Årsrapporten, som virksomheten sender tilbake til departementet", "Budsjettvedtaket, som Stortinget treffer for det kommende året", "Instruksen, som departementet gir i den enkelte saken det gjelder"],
      explanation: "Tildelingsbrevet går fra departementet til virksomheten og binder resultatet for året. Årsrapporten går motsatt vei, budsjettvedtaket treffes i Stortinget, og instruks i enkeltsaker er nettopp det etatsstyringen erstatter med indirekte styring.",
    },
    {
      question: "Hva er A-markøren i en oppgave om Webers modell målt mot norsk forvaltning?",
      options: ["Å skille rettighetslaget fra styringslaget i stedet for å si «delvis»", "Å gjengi alle åtte kjennetegnene i riktig rekkefølge og med presise ord", "Å konkludere med at modellen er utdatert etter reformene i forvaltningen", "Å bruke størst mulig plass på redegjørelsen av modellen før drøftingen begynner"],
      explanation: "Lagdelingen er grepet: regelstyringen står uendret der borgerens rettigheter avgjøres, mens resultatstyringen har overtatt der etaten styres som organisasjon. De fleste besvarelser lander på at modellen «delvis» gjelder, og det er nettopp der graderingen skiller god fra beste.",
    },
  ],
  'stv1400-3-2': [
    {
      question: "Hva hevder det representative byråkratiet?",
      options: ["At forvaltningens sammensetning bør speile befolkningens", "At byråkratene bør velges ved valg på linje med politikerne", "At byråkratene bør stemme som flertallet i befolkningen gjør", "At forvaltningen bør styres av representanter for organisasjonslivet"],
      explanation: "Modellen handler om sammensetningen av apparatet og om virkningene av den, ikke om valg eller stemmegivning. At byråkratene skal stemme som folket, er den vanligste misforståelsen i dette stoffet, og den gjør modellen til noe annet enn den er.",
    },
    {
      question: "Hva er passiv representasjon?",
      options: ["At forvaltningens sammensetning statistisk ligner befolkningens", "At byråkraten fremmer sin egen gruppes interesser i beslutningene", "At byråkraten avstår fra å bruke skjønnsrommet sitt i enkeltsaker", "At befolkningen deltar i forvaltningens arbeid gjennom høringer"],
      explanation: "Passiv representasjon er et rent tellbart forhold i personalstatistikken og sier noe om sammensetningen, ikke om avgjørelsene. At byråkraten fremmer gruppens interesser, er aktiv representasjon, og forvekslingen av de to er den dokumenterte fellen i dette stoffet.",
    },
    {
      question: "Hva er aktiv representasjon?",
      options: ["At byråkraten faktisk fremmer sin gruppes interesser i valgene sine", "At forvaltningen aktivt rekrutterer fra underrepresenterte grupper", "At de ansatte deltar aktivt i partipolitisk arbeid på fritiden sin", "At de ansatte er organisert i fagforeninger som forhandler for dem"],
      explanation: "Aktiv representasjon gjelder atferden: at bakgrunnen faktisk slår inn i de valgene som treffes. Å rekruttere bredere er et virkemiddel for passiv representasjon, mens partipolitisk aktivitet og fagorganisering er andre spørsmål helt.",
    },
    {
      question: "Hva er forholdet mellom passiv og aktiv representasjon?",
      options: ["Sammenhengen er en hypotese som må prøves, ikke en definisjon", "Aktiv representasjon følger av passiv representasjon per definisjon", "De to begrepene beskriver nøyaktig samme forhold med to ulike fagord", "Passiv representasjon forutsetter at aktiv allerede er oppnådd"],
      explanation: "Spranget forutsetter tre ting samtidig: at stillingen har skjønnsrom, at byråkraten identifiserer seg med gruppen på jobb, og at gruppen er stor nok til å ha gjennomslag. Faller én av dem bort, kan speilingen være reell uten at noen avgjørelser endres.",
    },
    {
      question: "Hva peker formelen «mennesker uten organisasjon» på?",
      options: ["At det avgjørende er hvem de ansatte er, ikke strukturen de sitter i", "At de ansatte i forvaltningen mangler faglig ledelse og oppfølging", "At forvaltningen er organisert flatt og uten hierarkiske nivåer", "At innbyggerne deltar i politikken uten å være organisert"],
      explanation: "Formelen er en bevisst speilvending av Webers «organisasjon uten mennesker», der systemet av stillinger og regler var det avgjørende. Å bytte om på de to formlene er en dokumentert forvekslingsfelle, og ingen av dem er ment helt bokstavelig.",
    },
    {
      question: "Hva er moderat kvotering?",
      options: ["At et kjennetegn avgjør mellom omtrent like godt kvalifiserte søkere", "At et kjennetegn avgjør selv om den forbigåtte søkeren er bedre kvalifisert", "At en fastsatt andel av stillingene forbeholdes en bestemt gruppe søkere", "At kvoteringen bare gjelder i en tidsbegrenset periode etter vedtaket"],
      explanation: "Ved moderat kvotering kommer kvalifikasjonsvurderingen først, og kjennetegnet trer inn som tilleggskriterium der den vurderingen ender omtrent likt. Å forbigå en bedre kvalifisert søker eller å reservere en andel stillinger er radikal kvotering, som er en annen ordning.",
    },
    {
      question: "Hva er radikal kvotering?",
      options: ["At kjennetegnet avgjør også der søkerne ikke er likt kvalifiserte", "At kjennetegnet bare avgjør mellom omtrent likt kvalifiserte søkere", "At utlysningsteksten utformes for å tiltrekke søkere fra en gruppe", "At kvalifiserte søkere fra en bestemt gruppe innkalles til intervju"],
      explanation: "Radikal kvotering lar kjennetegnet slå gjennom også der kvalifikasjonene ikke er likeverdige. Endret utlysningspraksis og innkallingsplikt er derimot virkemidler som ikke rører rangeringen i det hele tatt, men bare påvirker hvem som søker og hvem som blir vurdert.",
    },
    {
      question: "Hvilket rekrutteringstiltak rører ikke rangeringen av søkerne?",
      options: ["Plikten til å innkalle kvalifiserte søkere med hull i CV-en til intervju", "Moderat kvotering der et kjennetegn avgjør ved like kvalifikasjoner", "Radikal kvotering der en fastsatt andel stillinger er forbeholdt en gruppe", "At et kjennetegn tillegges vekt i den samlede kvalifikasjonsvurderingen"],
      explanation: "Innkallingsplikten utvider hvem som blir vurdert, mens rangeringen av dem som er vurdert, fortsatt skjer etter kvalifikasjoner. De tre andre alternativene lar alle et kjennetegn påvirke selve rangeringen, om enn i svært ulik grad.",
    },
    {
      question: "Hva er forutsetningen for at sammensetningen kan påvirke avgjørelsene?",
      options: ["At stillingen har et skjønnsrom som regelverket ikke fyller", "At regelverket for sakstypen er utformet så presist som mulig", "At politisk ledelse instruerer forvaltningen i den enkelte saken", "At de ansatte er organisert i en egen interesseorganisasjon"],
      explanation: "Uten skjønnsrom gir enhver kompetent saksbehandler samme svar, og da er sammensetningen uten betydning for utfallet. Nettopp derfor blir konklusjonen gradert: modellen betyr mest der skjønnet er stort, og minst i standardiserte rettighetsvedtak.",
    },
    {
      question: "Hva sier terskelargumentet om gruppestørrelse?",
      options: ["At en gruppe må ha en viss størrelse for å påvirke beslutningene", "At små grupper får størst gjennomslag fordi de blir mest synlige", "At store grupper mister gjennomslag fordi de blir innbyrdes uenige", "At gruppestørrelse er uten betydning når regelverket gjelder likt"],
      explanation: "Antakelsen er at enkeltpersoner tilpasser seg flertallskulturen, mens en større gruppe kan endre den. Merk at dette er et argument om gjennomslag i organisasjonen og ikke om den enkeltes kompetanse, og at noen bestemt terskel ikke er etablert.",
    },
    {
      question: "Hva er den viktigste motkraften mot at bakgrunn slår inn i avgjørelsene?",
      options: ["Felles utdanning og yrkessosialisering blant de ansatte i etaten", "At de ansatte skifter arbeidsgiver flere ganger i løpet av karrieren", "At etatene er geografisk spredt over store deler av landet", "At saksbehandleren er anonym for den som har saken til behandling"],
      explanation: "Utdanningen gir en felles måte å stille spørsmål på, og etatens egne normer om likebehandling former hva som oppleves som riktig framgangsmåte. Dette er den sterkeste innvendingen mot modellens kvalitetsargument, og den er empirisk snarere enn prinsipiell.",
    },
    {
      question: "På hvilken dimensjon er koblingen fra sammensetning til innhold lettest å sannsynliggjøre?",
      options: ["Utdanningsbakgrunnen til dem som utreder sakene i forvaltningen", "Alderssammensetningen blant dem som er ansatt i den aktuelle etaten", "Bostedet til dem som er ansatt i den aktuelle etaten", "Ansienniteten til dem som er ansatt i den aktuelle etaten"],
      explanation: "Et fag gir ikke bare kunnskap, men en måte å stille spørsmål på: juristen leter etter hjemmel og likebehandling, økonomen etter kostnad og insentiver. Her trenger man ikke anta at noen fremmer sin egen gruppe — virkningen følger av faglig sosialisering.",
    },
    {
      question: "Hva er forskjellen på meritokrati og speiling som rekrutteringsprinsipp?",
      options: ["Meritokratiet spør hva søkeren kan, speilingen hvem søkeren er", "Meritokratiet gjelder ledere, mens speilingen gjelder saksbehandlere", "Meritokratiet gjelder i staten, mens speilingen gjelder i kommunene", "Meritokratiet er lovfestet, mens speiling ikke brukes i norsk forvaltning"],
      explanation: "De to prinsippene kan trekke i hver sin retning, og hele virkemiddeldebatten handler om hvordan spenningen håndteres. Begge virker samtidig i norsk statsforvaltning: kvalifikasjonsprinsippet er hovedregelen, mens representativitetshensynet virker gjennom rekrutteringstiltak.",
    },
    {
      question: "Hva er speiling i det representative byråkratiet?",
      options: ["At fordelingen av kjennetegn blant de ansatte ligner fordelingen i befolkningen", "At de ansatte gjenspeiler synet til den politiske ledelsen i sine faglige råd", "At forvaltningen gjentar tidligere praksis i saker som ligner hverandre", "At etaten organiseres etter samme mønster som departementet over den"],
      explanation: "Speiling er tilstanden man måler: ligner sammensetningen befolkningens? Den er ikke det samme som kvotering, som er ett av flere virkemidler for å påvirke tilstanden, og den sier i seg selv ingenting om hva de ansatte faktisk gjør.",
    },
    {
      question: "Hvorfor må en besvarelse si hvilken dimensjon representativiteten måles på?",
      options: ["Fordi svaret på om forvaltningen er representativ, varierer med dimensjonen", "Fordi bare kjønn er en lovlig dimensjon å måle representativitet på", "Fordi dimensjonene rangeres etter viktighet i pensumlitteraturen", "Fordi bare tellbare dimensjoner er relevante for demokratisk legitimitet"],
      explanation: "Målt på kjønn ser norsk statsforvaltning ganske representativ ut på totalen; målt på utdanningsbakgrunn eller på hvor i landet folk kommer fra, ser den mindre representativ ut. Valget av dimensjon er derfor ikke nøytralt, og å si hvilken man bruker, er presist.",
    },
    {
      question: "Hva er legitimitetsargumentet for det representative byråkratiet?",
      options: ["At befolkningen lettere godtar avgjørelser fra et apparat den kjenner seg igjen i", "At avgjørelsene blir mer populære når de treffes av en bredt sammensatt etat", "At forvaltningen får rett til å tale på vegne av hele befolkningen i offentligheten", "At de ansatte kan begrunne vedtakene sine med henvisning til egen bakgrunn"],
      explanation: "Legitimitetsargumentet står selv om ingen enkeltvedtak endres, og det er derfor et selvstendig argument og ikke en svakere versjon av kvalitetsargumentet. Merk at legitimitet ikke er det samme som popularitet: en avgjørelse kan godtas og likevel være upopulær.",
    },
    {
      question: "Hva er kvalitetsargumentet for det representative byråkratiet?",
      options: ["At ulike erfaringer gir ulikt blikk på hvilke problemer og alternativer som finnes", "At ansatte som kommer fra underrepresenterte grupper, arbeider raskere enn kollegene", "At bredt sammensatte etater har lettere for å nå målene i tildelingsbrevet", "At de ansatte får rett til å prioritere saker fra sin egen gruppe først"],
      explanation: "Den presise formen på argumentet er at bakgrunn påvirker hva som blir sett — hvilke opplysninger som virker relevante og hvilke alternativer som kommer på bordet — ikke at noen setter egne interesser foran plikten sin. Den upresise formen gjør modellen til noe som ligner en tjenestefeil.",
    },
    {
      question: "Hva er hovedargumentet for at kvalifikasjonsprinsippet bør veie tyngst?",
      options: ["At den enkelte søkeren skal vurderes for det hen kan, ikke for gruppen sin", "At representativitet er et hensyn uten støtte i forvaltningsforskningen", "At bredere rekruttering alltid gir svakere faglig kvalitet i etatene", "At sammensetningen av forvaltningen er uten betydning for legitimiteten"],
      explanation: "Argumentet er et rettferdighetskrav overfor søkeren og et kvalitetskrav overfor borgeren som har en sak til behandling. Merk at dette er et verdispørsmål der begge sider har reelle argumenter, og en besvarelse skal derfor skrive ut begge og lande betinget.",
    },
    {
      question: "Hva er hovedargumentet for at representativitetshensynet bør veie tyngre?",
      options: ["At «best kvalifisert» ikke er en nøytral målestokk, siden kriteriene er valgt", "At faglige kvalifikasjoner er uten betydning for kvaliteten på vedtakene", "At forvaltningen bør speile det politiske flertallets syn i sin egen sammensetning", "At underrepresenterte grupper har krav på et bestemt antall stillinger"],
      explanation: "Argumentet er at kriteriene for kvalifikasjon er valgt av noen, at formelle kvalifikasjoner er ulikt tilgjengelige, og at bredde i erfaringsgrunnlaget er et kvalitetskrav der forvaltningen har skjønn. Dette er et verdispørsmål, og motargumentene er like reelle.",
    },
    {
      question: "Hvordan står de to byråkratimodellene til hverandre i norsk praksis?",
      options: ["Begge virker samtidig — kvalifikasjonsprinsippet og representativitetstiltak", "Bare den ansvarlige modellen har fått gjennomslag i norsk forvaltning", "Bare den representative modellen har fått noe reelt gjennomslag i norsk forvaltning", "De utelukker hverandre og kan ikke kombineres i det samme regelverket"],
      explanation: "Kvalifikasjonsprinsippet er hovedregelen, mens representativitetshensynet virker gjennom rekrutteringstiltak og gjennom moderat kvotering ved omtrent like kvalifikasjoner. Å framstille modellene som gjensidig utelukkende er en forenkling som koster i drøftingsdelen.",
    },
    {
      question: "Hva er den dokumenterte trekkgrunnen i komparative oppgaver om byråkratiparet?",
      options: ["Å behandle det ene leddet grundig og det andre i én enkelt setning", "Å bruke flere sammenligningsakser enn det oppgaven uttrykkelig ber om", "Å gi navngitte norske eksempler på begge de to modellene i besvarelsen", "Å avklare begrepene i innledningen før selve sammenligningen begynner"],
      explanation: "Ensidig komparasjon er den typiske trekkgrunnen: kravet er at begge ledd behandles på hver akse, med norsk forankring på begge. Flere akser, norske eksempler og tidlige begrepsavklaringer er tvert imot alt sammen ting som gir uttelling.",
    },
    {
      question: "Hva innebærer det ansvarlige byråkratiet for skillet mellom politikk og administrasjon?",
      options: ["Det forutsetter et skarpt skille, og derfor at personen er uten betydning", "Det forutsetter at skillet er uklart, siden forvaltningen forvalter skjønn", "Det avviser skillet som en forestilling uten forankring i virkeligheten", "Det overlater til politisk ledelse å trekke skillet i den enkelte saken"],
      explanation: "Modellen bygger på at politikken treffer verdivalgene og forvaltningen iverksetter dem, og det er nettopp derfor det kan være likegyldig hvem saksbehandleren er. Den representative modellen forutsetter det motsatte: har forvaltningen skjønn, er det ikke likegyldig.",
    },
    {
      question: "Hva er personalsammensetning i sentralforvaltningen som fagbegrep?",
      options: ["En beskrivelse av hvem som arbeider der og hvordan det har endret seg", "En modell som sier hva sammensetningen av forvaltningen bør bety", "En regel om hvordan stillinger skal fordeles mellom departementene", "En metode for å måle hvor effektivt en etat løser oppgavene sine"],
      explanation: "Personalsammensetning er beskrivelsen — utdanning, kjønn, alder, geografisk og sosial bakgrunn — mens det representative byråkratiet er modellen som sier hva beskrivelsen betyr. Å presentere tall uten modellen blir refererende, og modellen uten tall blir abstrakt.",
    },
    {
      question: "Hvilket pensumbidrag eier beskrivelsen av hvem som arbeider i sentralforvaltningen?",
      options: ["Stigen mfl., som kartlegger organisering, bemanning og endring over tid", "Christensen mfl., som stiller de to byråkratimodellene opp mot hverandre", "Fiva mfl., som behandler kommunal organisering og kommunal økonomi", "Halvorsen mfl., som behandler velferdsstatens ordninger og utvikling"],
      explanation: "Stigen mfl. gir tallene og beskrivelsen av apparatet, mens Christensen mfl. gir modellene som tolker dem. Kravet om norsk empirisk forankring er nettopp kravet om å ha begge deler i samme besvarelse.",
    },
    {
      question: "Hva er A-markøren i en oppgave om det representative byråkratiet?",
      options: ["Å skrive ut betingelsene for spranget fra passiv til aktiv representasjon", "Å gjengi flest mulig dimensjoner som forvaltningen kan speile befolkningen på", "Å konkludere med at speiling alltid gir bedre avgjørelser i forvaltningen", "Å bruke størst mulig plass på redegjørelsen før drøftingen tar til"],
      explanation: "De fleste besvarelser forutsetter spranget uten å nevne det. Et toppsvar sier hva som må være oppfylt — skjønnsrom, identifikasjon og tilstrekkelig gruppestørrelse — og bruker deretter betingelsene til å gradere: modellen betyr mest der skjønnet er størst.",
    },
    {
      question: "Hva er den vanligste begrepsforvekslingen i dette stoffet?",
      options: ["At passiv og aktiv representasjon byttes om på i besvarelsen", "At speiling og personalsammensetning brukes om hverandre", "At legitimitet og popularitet behandles som det samme begrepet", "At meritokrati og kvalifikasjonsprinsipp brukes om hverandre"],
      explanation: "Passiv representasjon gjelder hvem som sitter der, aktiv gjelder hva de gjør, og forvekslingen er dokumentert som trekkgrunn. Merk at meritokrati og kvalifikasjonsprinsipp derimot henger sammen med god grunn: det siste er den norske lovfestingen av det første.",
    },
  ],
  'stv1400-4-1': [
    {
      question: "Hva er et departement i norsk sentralforvaltning?",
      options: ["Øverste organ i en sektor og samtidig sekretariat for statsråden", "Et landsdekkende fagorgan som iverksetter politikken i sektoren", "Et kontrollorgan som fører tilsyn med at regelverket etterleves", "Et eget rettssubjekt med styre og generalforsamling utenfor staten"],
      explanation: "Departementet har to jobber samtidig: å betjene politisk ledelse og å være øverste faglige organ i sektoren. Iverksetting er direktoratets oppgave, kontroll er tilsynets, og eget rettssubjekt med styre beskriver et selskap etter ytre fristilling.",
    },
    {
      question: "Hva er hovedoppgaven til et direktorat?",
      options: ["Å iverksette politikken, forvalte regelverk og gi faglige råd", "Å utforme politikken og forberede saker for regjeringen og Stortinget", "Å kontrollere at aktørene i sektoren følger regelverket", "Å samordne regjeringens arbeid på tvers av alle sektorene i staten"],
      explanation: "Direktoratet er det utøvende fagorganet: det forvalter regelverk og tilskudd, treffer enkeltvedtak og bygger kunnskap som går oppover som faglige råd. Politikkutforming hører til departementet, kontrollfunksjonen til tilsynet, og tverrgående samordning til Statsministerens kontor.",
    },
    {
      question: "Hva kjennetegner et tilsyn?",
      options: ["Det kontrollerer at andre følger regelverket, og kan gi pålegg", "Det utformer regelverket som skal gjelde for hele sektoren i landet", "Det er sekretariat for statsråden og forbereder politiske saker", "Det er organisert som et selskap med staten som eneste eier"],
      explanation: "Tilsynet er kontroll- og reguleringsorganet, med tilsynsbesøk, pålegg og gebyrer som virkemidler. Regelverksutforming er departementets oppgave, sekretariatsrollen likeså, og selskapsform ville betydd at organet lå utenfor forvaltningen.",
    },
    {
      question: "Hva har departement, direktorat og tilsyn felles?",
      options: ["Alle er forvaltningsorganer innenfor staten som juridisk person", "Alle har lovfestet uavhengighet fra politisk ledelse i enkeltsaker", "Alle er egne rettssubjekter med eget regnskap og egen balanse", "Alle behandler enkeltsaker fra publikum som førsteinstans i sektoren"],
      explanation: "Fellestrekket er at ingen av dem er egne rettssubjekter: de finansieres over statsbudsjettet, bemannes av statsansatte og er bundet av forvaltningsloven og offentlighetsloven. Lovfestet uavhengighet gjelder bare enkelte organer, og departementet behandler i utgangspunktet ikke enkeltsaker fra publikum.",
    },
    {
      question: "Hva er forskjellen på generell instruks og instruks i enkeltsak?",
      options: ["Den generelle retter seg mot en sakstype, den andre mot én bestemt sak", "Den generelle er bindende, mens instruksen i enkeltsaken er veiledende", "Den generelle brukes overfor selskaper, den andre overfor forvaltningen", "Den generelle gis av Stortinget, mens den andre gis av departementet"],
      explanation: "Skillet går på rekkevidde: rundskriv, retningslinjer og tildelingsbrev binder en hel sakstype, mens instruksen i enkeltsaken avgjør akkurat den ene saken. Begge er rettslig bindende der de kan brukes, ingen av dem kan rettes mot et selskap, og begge gis innenfor forvaltningshierarkiet.",
    },
    {
      question: "Hva er omgjøringsmyndighet?",
      options: ["Retten til å endre eller oppheve et vedtak som allerede er truffet", "Retten til å gi et underordnet organ pålegg før vedtaket treffes", "Retten til å omorganisere et underliggende organ eller slå det sammen", "Retten til å overføre en sakstype fra ett departement til et annet"],
      explanation: "Omgjøringsmyndigheten virker etter at avgjørelsen er falt, oftest gjennom klagebehandling. Pålegg før avgjørelsen er instruksjonsmyndighet, og omorganisering og overføring av saksfelt er organisatoriske grep, ikke myndighet i den enkelte saken.",
    },
    {
      question: "Hva skjer med den politiske styringen når klageveien legges til en uavhengig nemnd?",
      options: ["Omgjøringsmyndigheten forsvinner selv om organformen er uendret", "Instruksjonsmyndigheten utvides, fordi departementet får friere hender", "Organet blir et eget rettssubjekt utenfor forvaltningen", "Ministeransvaret for saksfeltet faller bort sammen med klagesakene"],
      explanation: "Da er en del av fristillingen gjennomført uten at organisasjonsformen er endret: departementet kan ikke lenger nå saken langs klageveien. Instruksjonsmyndigheten utvides ikke, organet er fortsatt et forvaltningsorgan, og statsråden svarer fortsatt for feltet.",
    },
    {
      question: "Hva menes med lovfestet uavhengighet i et forvaltningsorgan?",
      options: ["At loven avskjærer instruksjon i den enkelte saken organet avgjør", "At organet er skilt ut av staten som eget rettssubjekt", "At organet rapporterer direkte til Stortinget i stedet for til statsråden", "At organet selv bestemmer hvilket regelverk det skal håndheve på feltet"],
      explanation: "Lovgiveren setter hovedregelen om instruksjonsmyndighet til side for bestemte sakstyper, slik at avgjørelsen treffes ut fra faglige eller rettslige kriterier alene. Organet er fortsatt et forvaltningsorgan under en statsråd, og politikken fastsetter fortsatt regelverket og budsjettet.",
    },
    {
      question: "Hva er etatsstyring?",
      options: ["Departementets løpende styring gjennom mål og resultatkrav", "Direktoratets faglige rådgivning oppover til den politiske ledelsen", "Stortingets kontroll med bruken av bevilgningene", "Tilsynets kontroll med at underliggende virksomheter følger regelverket"],
      explanation: "Etatsstyringen skjer gjennom det årlige tildelingsbrevet og faste styringsmøter, og er mål- og resultatstyring anvendt på forvaltningen. Faglige råd går motsatt vei, Stortingets kontroll er en annen relasjon, og tilsyn er en oppgavetype, ikke en styringsform.",
    },
    {
      question: "Hvilket dokument bærer den løpende styringen av en statlig etat?",
      options: ["Det årlige tildelingsbrevet fra departementet til virksomheten", "Den årlige rapporten virksomheten sender tilbake til departementet", "Den kongelige resolusjonen som fastsettes i Kongen i statsråd", "Rundskrivet der departementet tolker regelverket for publikum"],
      explanation: "Tildelingsbrevet samler bevilgning, mål, resultatkrav og rapporteringskrav for året, og er derfor kjernedokumentet i etatsstyringen. Årsrapporten går motsatt vei, resolusjonen er et formelt vedtak, og rundskrivet er en generell instruks om regelforståelse.",
    },
    {
      question: "Hvorfor brukes mål- og resultatstyring framfor instruks i etatsstyringen?",
      options: ["Fordi departementet lettere vet hva som skal oppnås enn hvordan", "Fordi instruksjonsmyndigheten er avskaffet i norsk statsforvaltning", "Fordi resultatkrav ikke er rettslig bindende for virksomheten", "Fordi Stortinget har forbudt departementene å gi generelle instrukser"],
      explanation: "På spesialiserte fagfelt er det mer realistisk å binde resultatet enn framgangsmåten, og derfor overtar mål og resultatkrav den daglige styringen. Instruksjonsmyndigheten består som hovedregel, resultatkravene er bindende, og Stortinget har ikke forbudt generelle instrukser.",
    },
    {
      question: "Hva er ministeransvarets to former?",
      options: ["Konstitusjonelt ansvar med riksrett og parlamentarisk med mistillit", "Faglig ansvar for etatene og økonomisk ansvar for budsjettet i sektoren", "Personlig ansvar for egne vedtak og kollektivt for regjeringens", "Rettslig ansvar overfor domstolene og administrativt ansvar overfor SMK"],
      explanation: "Det konstitusjonelle ansvaret er rettslig og håndheves gjennom riksrett som en sjelden brukt sikkerhetsventil, mens det parlamentariske ansvaret virker gjennom Stortingets mulighet til å vedta mistillit. De øvrige inndelingene er ikke ministeransvarets to former.",
    },
    {
      question: "Hva skjer med ministeransvaret når en oppgave legges til et organ med lovfestet uavhengighet?",
      options: ["Statsråden svarer for feltet, men kan ikke gripe inn i saken", "Ansvaret følger med myndigheten over til organet", "Ansvaret deles likt mellom statsråden og organets øverste leder", "Ansvaret bortfaller for hele sektoren så lenge ordningen består"],
      explanation: "Ansvaret ligger fast mens styringsredskapene flyttes, og nettopp gapet mellom ansvar og redskap er den demokratiske kostnaden ved spesialisering. Ansvaret følger verken med myndigheten, deles eller bortfaller.",
    },
    {
      question: "Hva er sektorprinsippet?",
      options: ["At ansvaret for et saksområde ligger samlet hos én statsråd", "At alle departementer skal ha like stort budsjett og like mange etater", "At oppgaver skal legges til kommunene når de kan løses lokalt", "At tverrsektorielle saker alltid skal avgjøres i regjeringskonferansen"],
      explanation: "Sektorprinsippet plasserer budsjett, regelverk, styring og ansvar i den samme vertikale linjen, og begrunnelsen er ministeransvaret: Stortinget må ha noen å holde ansvarlig. Budsjettlikhet, oppgavefordeling til kommunene og saksbehandlingsregler i regjeringen er andre spørsmål.",
    },
    {
      question: "Hva er begrunnelsen for sektorprinsippet?",
      options: ["At ministeransvaret forutsetter en entydig ansvarsadresse", "At tverrsektorielle problemer da blir enklere å løse i fellesskap", "At det gir alle departementene like stor innflytelse i regjeringen", "At Grunnloven krever at hver sektor har sitt eget forvaltningsnivå"],
      explanation: "Skal Stortinget kunne stille en statsråd til ansvar for tilstanden på et felt, må feltet være entydig plassert. Prinsippet gjør nettopp tverrsektorielle problemer vanskeligere, det handler ikke om innflytelsesfordeling, og Grunnloven foreskriver ingen sektorinndeling.",
    },
    {
      question: "Hva er silostruktur?",
      options: ["At de vertikale sektorsøylene svekker samhandlingen på tvers", "At hvert forvaltningsnivå har egne folkevalgte organer over seg", "At etatene styres tettere ovenfra enn de var for noen tiår siden", "At statlige oppgaver samles i færre og større virksomheter over tid"],
      explanation: "Silostrukturen er den organisatoriske konsekvensen av at sektorprinsippet får virke alene: hver søyle optimaliserer sitt eget område, og det som faller mellom dem, er det ingen som eier. Folkevalgte nivåer, styringstetthet og sammenslåing er andre fenomener.",
    },
    {
      question: "Hvilket utslag er typisk for silostruktur?",
      options: ["Suboptimalisering: hver etat når sine mål mens helheten svikter", "Målforskyvning: rutinen blir viktigere enn formålet den skal tjene", "Stortingsregjereri: Stortinget griper inn i regjeringens saksområde", "Prisvridning: et tilskudd gjør ett bestemt formål billigere å velge"],
      explanation: "Suboptimalisering er kjernen i siloproblemet: delene lykkes hver for seg mens summen svikter, ved siden av ansvarsfraskrivelse i grenseflatene og informasjon som blir liggende. Målforskyvning, stortingsregjereri og prisvridning hører til andre begrepsfamilier i faget.",
    },
    {
      question: "Hva er forskjellen på vertikal og horisontal spesialisering?",
      options: ["Vertikal deler mellom nivåer, horisontal mellom enheter på samme nivå", "Vertikal deler mellom sektorer, horisontal mellom stat og kommune", "Vertikal gjelder statsforvaltningen, horisontal gjelder kommunesektoren", "Vertikal gjelder selskaper, horisontal gjelder alminnelige etater"],
      explanation: "Vertikal spesialisering skiller ut oppgaver fra departementet til direktorat eller tilsyn, mens horisontal spesialisering deler saksfeltet mellom flere departementer eller etater. De øvrige inndelingene blander sammen forvaltningsnivå og tilknytningsform.",
    },
    {
      question: "Hvorfor er skillet mellom vertikale og horisontale problemer viktig?",
      options: ["Fordi et tiltak mot det ene ikke virker mot det andre", "Fordi bare horisontale problemer kan løses med sammenslåing", "Fordi vertikale problemer alltid er mer alvorlige enn horisontale", "Fordi bare vertikale problemer berører kommunenes selvstyre"],
      explanation: "Tettere styring i den vertikale linjen løser ikke et horisontalt samordningsproblem, og kan forsterke det ved å gi hver etat sterkere grunn til å prioritere egne mål. Sammenslåing brukes begge veier, ingen av problemtypene er generelt mest alvorlig, og begge kan berøre kommunene.",
    },
    {
      question: "Hva menes med gjenstridige tverrsektorielle problemer, ofte kalt wicked issues?",
      options: ["Problemer uten entydig løsning som krysser flere sektorgrenser", "Problemer som er vanskelige fordi de krever mye ressurser og fagfolk", "Problemer som oppstår når et direktorat blir for stort til å styres", "Problemer som bare kan løses ved å overføre oppgaven til kommunene"],
      explanation: "Slike problemer mangler en omforent problemdefinisjon og en entydig ansvarsadresse, og tiltak på ett felt skaper nye utfordringer på et annet. Ressurskrevende problemer kan løses med mer ressurser, og de øvrige beskrivelsene handler om organisasjonsstørrelse og oppgavefordeling.",
    },
    {
      question: "Hva skiller samordning fra sammenslåing?",
      options: ["Samordning arbeider over grensen, sammenslåing fjerner den", "Samordning skjer politisk, sammenslåing skjer bare administrativt", "Samordning gjelder staten, sammenslåing gjelder kommunesektoren", "Samordning er lovpålagt, mens sammenslåing er frivillig for etatene"],
      explanation: "Sammenslåing løser ett samordningsproblem og skaper som regel en ny grense et annet sted, mens samordning lar grensen stå og arbeider over den. Begge grepene finnes på begge forvaltningsnivåer og i både politiske og administrative former.",
    },
    {
      question: "Hvilket samordningsvirkemiddel griper hardest inn i ansvarsplasseringen?",
      options: ["Sammenslåing av departementer eller etater", "Foreleggelse av saken for berørte departementer", "Et tverrdepartementalt utvalg med deltakere fra flere sektorer", "En felles høring der berørte instanser kan uttale seg"],
      explanation: "Sammenslåing fjerner grensen helt og endrer dermed hvem som svarer for hva, mens foreleggelse, utvalg og høringer er prosedyrer som bevarer ansvarsplasseringen og virker gjennom påvirkning. Jo hardere grepet er, desto mer uklar blir ansvarslinjen.",
    },
    {
      question: "Hva er regjeringskonferansen?",
      options: ["Regjeringens interne møte der saker på tvers avklares politisk", "Det formelle vedtaksorganet der kongelige resolusjoner fastsettes", "Et møte mellom departementsrådene om felles administrative saker", "Stortingets møte med regjeringen om det kommende statsbudsjettet"],
      explanation: "Konferansen ledes av statsministeren og er det tyngste horisontale samordningsvirkemidlet, men den treffer ingen rettslig bindende vedtak. Formelle vedtak treffes i Kongen i statsråd, og de øvrige beskrivelsene gjelder andre møteformer.",
    },
    {
      question: "Hva er Kongen i statsråd?",
      options: ["Statsrådets formelle møte der lover og forskrifter fastsettes", "Regjeringens interne møte der politiske saker avklares før de fremmes", "Statsministerens kontor i rollen som sekretariat for hele regjeringen", "Stortingets organ for kontroll med regjeringens forvaltning av loven"],
      explanation: "I statsrådet fullbyrdes den rettslige formen: lover sanksjoneres, kongelige resolusjoner fastsettes og embetsmenn utnevnes, mens den politiske realiteten som regel er avklart på forhånd. De øvrige beskrivelsene gjelder regjeringskonferansen, SMK og Stortinget.",
    },
    {
      question: "Hva er Statsministerens kontors rolle?",
      options: ["Å være sekretariat for statsministeren og samordne regjeringen", "Å være overordnet departement med instruksjonsmyndighet over de andre", "Å føre tilsyn med at departementene følger forvaltningsloven", "Å fordele budsjettrammene mellom sektorene i den årlige prosessen"],
      explanation: "SMK forbereder regjeringskonferansene, koordinerer mellom departementene og kvalitetssikrer saker, men samordner gjennom prosess og agenda og ikke gjennom rettslig myndighet. Budsjettfordelingen skjer i Finansdepartementets prosess, og tilsyn med regelverket ligger andre steder.",
    },
    {
      question: "Hvorfor er budsjettprosessen et virkningsfullt samordningsverktøy?",
      options: ["Fordi ingen sektor kommer utenom den samme rammefordelingen", "Fordi Finansdepartementet kan instruere de andre departementene fritt", "Fordi den erstatter behovet for politisk avklaring i regjeringen", "Fordi den avgjør innholdet i regelverket på tvers av sektorene"],
      explanation: "Budsjettprosessen samordner jevnt og upersonlig fordi alle sektorer må gjennom den, men den samordner det den måler — penger. Den gir ingen alminnelig instruksjonsmyndighet, erstatter ikke politisk avklaring og avgjør ikke regelverkets innhold.",
    },
  ],
  'stv1400-4-2': [
    {
      question: "Hva er embetsverket?",
      options: ["Det faste, faglig ansatte apparatet som blir ved regjeringsskifte", "Statsråden og de politisk utnevnte medarbeiderne i departementet", "De ansatte i direktoratene, i motsetning til dem i departementene", "De ansatte som er utnevnt av Stortinget etter forslag fra partiene"],
      explanation: "Embetsverket er det faste apparatet, tilsatt etter kvalifikasjoner og forpliktet til å tjene enhver regjering. Statsråd, statssekretærer og politiske rådgivere er politisk ledelse, og skillet mellom departement og direktorat er en annen inndeling.",
    },
    {
      question: "Hvem tilhører politisk ledelse i et departement?",
      options: ["Statsråden, statssekretærene og de politiske rådgiverne", "Statsråden, departementsråden og ekspedisjonssjefene i huset", "Statsråden og de avdelingene som arbeider med politikkutforming", "Statsråden og de øverste lederne i de underliggende etatene"],
      explanation: "Politisk ledelse er de politisk utnevnte som fratrer med regjeringen. Departementsråden og ekspedisjonssjefene er embetsmenn i det faste apparatet, og etatslederne står i en helt annen relasjon til statsråden.",
    },
    {
      question: "Hva er Dahl Jacobsens tre verdier i embetsrollen?",
      options: ["Politisk lojalitet, partipolitisk nøytralitet og faglig uavhengighet", "Rettssikkerhet, effektivitet og likebehandling av alle innbyggerne", "Lovlighet, lydighet og åpenhet om forvaltningens saksbehandling", "Flertallsstyre, fagstyre og partsstyre i offentlig forvaltning"],
      explanation: "De tre verdiene er lojalitet til sittende ledelse, evnen til å tjene skiftende regjeringer og plikten til å gi faglig forsvarlige råd. Rettssikkerhet og effektivitet hører til Christensens fem prinsipper, og lovlighet og lydighet er plikter som gjør verdiene operative.",
    },
    {
      question: "Hva er det viktigste poenget ved Dahl Jacobsens tre verdier?",
      options: ["At de står i krysspress og kan trekke i hver sin retning", "At de må oppfylles alle tre samtidig i enhver enkeltsak", "At de er rangert, slik at lojaliteten alltid går foran", "At de gjelder politisk ledelse og ikke det faste apparatet"],
      explanation: "Verdiene er legitime hver for seg og uforenlige i grensetilfellene, og det er spenningen som gjør dem til drøftingsstoff. De er verken rangert prinsipielt eller mulige å maksimere samtidig, og de gjelder nettopp det faste embetsverket.",
    },
    {
      question: "Hva innebærer politisk lojalitet i embetsrollen?",
      options: ["Å tjene den sittende ledelsen og sette i verk dens politikk", "Å støtte det partiet den ansatte selv har stemt på ved valg", "Å følge enhver instruks, også der den forutsetter lovbrudd", "Å holde tilbake faglige innvendinger som er ubekvemme for ledelsen"],
      explanation: "Lojaliteten er rollebestemt: den følger stillingen, ikke personen, og overføres uendret til neste regjering. Egen partitilhørighet skal holdes utenfor, lovlighetsplikten setter en grense, og faglige innvendinger skal gis før beslutningen.",
    },
    {
      question: "Hva er forskjellen på politisk lojalitet og partipolitisering?",
      options: ["Lojalitet er en legitim rollenorm, partipolitisering er et avvik", "Lojalitet gjelder statsråden, partipolitisering gjelder Stortinget", "Lojalitet gjelder embetsverket, partipolitisering gjelder direktoratene", "Lojalitet er skriftlig regulert, mens partipolitisering er uskrevet"],
      explanation: "Lojaliteten er en plikt som gjelder uansett hvem som styrer, mens partipolitisering vil si at stillinger fylles eller vurderinger farges av partitilhørighet — et brudd på nøytraliteten. Forvekslingen er en dokumentert trekkgrunn i dette stoffet.",
    },
    {
      question: "Hva krever partipolitisk nøytralitet?",
      options: ["At embetsverket kan tjene skiftende regjeringer like godt", "At den ansatte ikke har private politiske oppfatninger", "At embetsverket ikke gir faglige råd i politisk omstridte saker", "At stillinger fordeles jevnt mellom tilhengere av ulike partier"],
      explanation: "Nøytraliteten gjelder at partipolitiske bindinger ikke skal prege arbeidet, ikke at den ansatte er uten meninger. Faglige råd skal tvert imot gis også i omstridte saker, og fordeling av stillinger etter partitilhørighet ville vært selve partipolitiseringen.",
    },
    {
      question: "Hva innebærer faglig uavhengighet for en ansatt i departementet?",
      options: ["Å gi faglig forsvarlige råd, også når rådet er ubekvemt", "Å kunne nekte å gjennomføre politikk den ansatte er uenig i", "Å avgjøre saker uten at overordnet organ kan instruere", "Å arbeide uten at rådene blir dokumentert eller journalført"],
      explanation: "Uavhengigheten gjelder rådet og beslutningsgrunnlaget, ikke iverksettingen: når politisk ledelse har valgt, gjelder lojaliteten. Å avgjøre uten instruksjon er lovfestet uavhengighet for et organ, og dokumentasjon er nettopp det uavhengigheten forutsetter.",
    },
    {
      question: "Når opphører den faglige uavhengigheten å dominere?",
      options: ["Ved beslutningen: etter den gjelder lojal iverksetting", "Ved regjeringsskifte: den nye ledelsen setter nye rammer", "Ved offentliggjøring: da overtar sannhetsplikten helt", "Den opphører aldri, og gjelder like sterkt i alle faser"],
      explanation: "Arbeidsdelingen i tid er den viktigste håndteringsregelen for krysspresset: fullt råd før valget, helhjertet gjennomføring etter. Å fortsette å kjempe for eget råd etter avgjørelsen er ikke integritet, men illojalitet.",
    },
    {
      question: "Hva er krysspress i embetsrollen?",
      options: ["At flere legitime rollekrav peker i hver sin retning samtidig", "At overordnet og underordnet organ gir motstridende instrukser", "At den ansatte har for mange oppgaver og for kort tid", "At politisk ledelse og Stortinget krever ulike opplysninger"],
      explanation: "Krysspresset er en innebygd egenskap ved rollen: verdiene er reelle hver for seg og uforenlige i grensetilfellene. Motstridende instrukser og tidspress er andre problemer, og systemet kanaliserer krysspresset i stedet for å oppløse det.",
    },
    {
      question: "Hva er lydighetsplikten?",
      options: ["Plikten til å følge pålegg fra overordnet innenfor loven", "Plikten til å gi korrekte og fullstendige opplysninger utad", "Plikten til å dokumentere og journalføre all saksbehandling", "Plikten til å endre et faglig råd når ledelsen ber om det"],
      explanation: "Lydighetsplikten er den ansattes side av instruksjonsmyndigheten, og den plasserer ansvaret hos den som instruerer. Å gi korrekte opplysninger er sannhetsplikten, dokumentasjon er åpenhetsplikten, og et allerede gitt råd kan ikke pålegges endret.",
    },
    {
      question: "Hvorfor er lydighetsplikten en forutsetning for ministeransvaret?",
      options: ["Fordi ansvaret for pålegget ligger hos den som ga det", "Fordi statsråden da slipper å kjenne til enkeltsakene", "Fordi Stortinget da kan holde den ansatte direkte ansvarlig", "Fordi den gjør faglige råd unødvendige i departementene"],
      explanation: "Når den ansatte er forpliktet til å følge pålegget, hviler ansvaret på den som instruerte — i siste instans statsråden. Ministeransvaret gjelder uansett kunnskap, det rammer ikke den ansatte, og faglige råd er fortsatt en plikt.",
    },
    {
      question: "Hva er lovlighetsplikten?",
      options: ["Plikten til å holde seg innenfor loven og si fra ved ulovlige krav", "Plikten til å følge alle pålegg fra overordnet uten forbehold", "Plikten til å fraråde politikk den ansatte mener er uklok", "Plikten til å melde fra til offentligheten om kritikkverdige forhold"],
      explanation: "Lovlighetsplikten ligger over de andre pliktene: en instruks som forutsetter lovbrudd, skal ikke følges. Å fraråde det ukloke er faglig uavhengighet, og å gå til offentligheten er et helt annet skritt enn å påpeke ulovlighet internt.",
    },
    {
      question: "Hva skiller det å fraråde fra det å motarbeide?",
      options: ["Frarådingen er faglig råd før valget, motarbeiding er illojalitet", "Frarådingen er muntlig, mens motarbeidingen alltid er skriftlig", "Frarådingen gjelder lovligheten, motarbeidingen gjelder fagligheten", "Frarådingen skjer i linjen, motarbeidingen skjer overfor Stortinget"],
      explanation: "Graderingen går fra å fraråde, som er faglig uavhengighet i arbeid, via å nekte, som er lovlighetsplikten, til å motarbeide, som er brudd på lojalitetsplikten. De tre kan se like ut utenfra og er tre forskjellige ting.",
    },
    {
      question: "Hva krever sannhetsplikten?",
      options: ["Å gi korrekte og fullstendige opplysninger, og ikke villede", "Å svare bare på det som uttrykkelig er spurt om i saken", "Å offentliggjøre alle interne råd til den politiske ledelsen", "Å oppgi den ansattes egen faglige vurdering i alle svar utad"],
      explanation: "Et svar som er formelt korrekt, men utelater det vesentlige, bryter plikten selv om hver setning er sann. Å svare snevert kan derfor være et brudd, interne råd kan unntas offentlighet, og plikten gjelder saken og ikke den ansattes eget syn.",
    },
    {
      question: "Hvorfor er sannhetsplikten en systemgaranti og ikke bare en dyd?",
      options: ["Fordi Stortingets kontroll forutsetter at opplysningene er riktige", "Fordi den ansatte ellers kan straffes personlig for feilinformasjon", "Fordi den erstatter behovet for journalføring og innsynsrett", "Fordi den gir embetsverket rett til å overprøve politiske vedtak"],
      explanation: "Svikter sannhetsplikten, svikter kontrollen i styringskjeden, ikke bare moralen i det enkelte tilfellet. Personlig ansvar er en annen sak, dokumentasjonskravet består ved siden av, og plikten gir ingen overprøvingsrett.",
    },
    {
      question: "Hva er hovedregelen etter offentlighetsloven i norsk forvaltning?",
      options: ["Dokumenter er offentlige, og unntak må ha hjemmel i lov", "Dokumenter er unntatt, og innsyn må begrunnes av den som ber", "Bare vedtak er offentlige, mens saksforberedelsen er intern", "Offentlighet avgjøres av den enkelte statsråden i hver sak"],
      explanation: "Hovedregelen er innsyn, med hjemlede unntak — blant annet for organinterne råd til politisk ledelse. De øvrige beskrivelsene snur hovedregelen, og innsynsspørsmålet avgjøres etter loven, ikke etter politisk skjønn.",
    },
    {
      question: "Hvorfor kan råd til politisk ledelse unntas offentlighet?",
      options: ["For at rådene skal kunne gis fritt og ærlig før vedtaket", "For at politisk ledelse skal slippe å begrunne sine vedtak", "Fordi slike råd ikke regnes som dokumenter i lovens forstand", "Fordi embetsverket ikke er ansvarlig for rådene det gir"],
      explanation: "Unntaket verner rommet for ærlige faglige råd, og det står i en reell avveining mot etterprøvbarheten. Begrunnelsesplikten for vedtak består, rådene er dokumenter, og embetsverket svarer faglig for det det skriver.",
    },
    {
      question: "Hva er Christensens fem prinsipper?",
      options: ["Flertallsstyre, rettssikkerhet, partsstyre, fagstyre og effektivitet", "Lojalitet, nøytralitet, uavhengighet, lovlighet og lydighet i rollen", "Hierarki, regelstyring, meritokrati, skriftlighet og upersonlighet", "Universalisme, likhet, omfordeling, effektivitet og rettssikkerhet"],
      explanation: "De fem prinsippene beskriver hva forvaltningen som helhet skal levere, og de lar seg ikke maksimere hver for seg. De øvrige listene er embetsverkets plikter, Webers byråkratikjennetegn og velferdsstatens verdier.",
    },
    {
      question: "Hva er kjernepoenget ved de fem prinsippene?",
      options: ["At de kolliderer, slik at reformer omfordeler mellom dem", "At alle fem kan oppfylles fullt ut med god nok organisering", "At de er rangert, med rettssikkerheten øverst i alle saker", "At de gjelder kommunesektoren og ikke statsforvaltningen"],
      explanation: "Grundig høring styrker partsstyret og svekker effektiviteten; strenge saksbehandlingsregler styrker rettssikkerheten og gjør flertallsstyret tregere. Prinsippene er verken fullt forenlige, prinsipielt rangerte eller begrenset til ett forvaltningsnivå.",
    },
    {
      question: "Hva skiller rettssikkerhet fra partsstyre?",
      options: ["Rettssikkerhet verner rettsstillingen, partsstyre gir innflytelse", "Rettssikkerhet gjelder private, partsstyre gjelder offentlige organer", "Rettssikkerhet gjelder domstolene, partsstyre gjelder forvaltningen", "Rettssikkerhet er lovfestet, mens partsstyre bygger på sedvane"],
      explanation: "Rettssikkerheten er en rettighet for den enkelte i den avgjørelsen som gjelder hen, mens partsstyret er en deltakelseskanal for berørte interesser før avgjørelsen. De øvrige skillene treffer ikke distinksjonen.",
    },
    {
      question: "Hvordan kolliderer effektivitet med de andre prinsippene?",
      options: ["Rask behandling går ut over grundighet, høring og fagvurdering", "Effektivitet styrker alle de andre fire når den er høy nok", "Effektivitet kolliderer bare med fagstyret og ikke med de andre", "Effektivitet er et økonomisk mål uten forvaltningsmessig virkning"],
      explanation: "Kort saksbehandlingstid presser rettssikkerhetens krav om begrunnelse, partsstyrets høringsrunder og fagstyrets individuelle vurdering. Effektiviseringsreformer er derfor sjelden nøytrale, men flytter vekt mellom prinsippene.",
    },
    {
      question: "Hva menes med at departementet er et faglig sekretariat?",
      options: ["At det betjener politisk ledelse med kunnskap, ikke partistrategi", "At det arbeider uavhengig av politisk ledelse i alle faglige saker", "At det bare utfører utredning og ikke deltar i politikkutforming", "At det er bemannet med forskere framfor med saksbehandlere"],
      explanation: "Grensen mot et politisk sekretariat går ved om arbeidet ville vært like anvendelig etter et regjeringsskifte. Departementet arbeider tett på politikken, men på faglige premisser og for enhver regjering.",
    },
    {
      question: "Hvilket spørsmål gjør påstanden om politisering testbar?",
      options: ["Om embetsverket gjør arbeid som er ubrukelig ved regjeringsskifte", "Om de ansatte selv oppgir at de er interessert i politikk", "Om departementet har flere ansatte nå enn for noen tiår siden", "Om statsråden har uttalt seg kritisk om embetsverkets råd"],
      explanation: "Testkriteriet oversetter en diffus påstand til noe som kan undersøkes: arbeid som bare er anvendelig for én bestemt politisk ledelse, er politisk sekretariatsarbeid. De øvrige spørsmålene måler noe annet enn rolleinnhold.",
    },
    {
      question: "Hvilke tre betydninger må skilles når politisering drøftes?",
      options: ["Partipolitisering, endret rolleinnhold og sterkere politisk styring", "Sentralisering, desentralisering og fristilling av statlige organer", "Lojalitet, nøytralitet og faglig uavhengighet i embetsrollen", "Flertallsstyre, fagstyre og partsstyre i den offentlige forvaltningen"],
      explanation: "De tre påstandene har ulikt bevisgrunnlag og ulik normativ ladning: den første er et regelbrudd, den andre en rolleendring, den tredje et uttrykk for flertallsstyret. De øvrige listene er andre begrepsfamilier i faget.",
    },
    {
      question: "Hva er den sterkeste observasjonen til støtte for politiseringspåstanden?",
      options: ["Veksten i departementenes kommunikasjonsenheter og oppgavene deres", "At embetsverket blir sittende når regjeringen skiftes ut", "At statsråden svarer for departementet overfor Stortinget", "At interne råd kan unntas fra innsyn etter offentlighetsloven"],
      explanation: "Kommunikasjonsarbeid spenner fra ren informasjon til planlegging av hvordan et budskap skal presenteres, og veksten flytter oppgavesammensetningen nærmere politisk formidling. De øvrige forholdene er trekk ved ordningen som ikke sier noe om politisering.",
    },
    {
      question: "Hva viser sentraladministrasjonsundersøkelsene om politisk lojalitet?",
      options: ["Ingen klar økning over tid i hvor mye lojalitet vektlegges", "En jevn og betydelig økning i vektlagt lojalitet gjennom tiårene", "At lojalitet vektlegges høyere i direktoratene enn i departementene", "At de ansatte vektlegger partitilhørighet ved tilsettinger"],
      explanation: "Funnet er den mest systematiske motforestillingen mot påstanden om et gradvis mer politisert embetsverk. Det er verken dokumentert noen økning, og undersøkelsene handler ikke om forskjeller mellom organtyper eller om partitilhørighet ved tilsetting.",
    },
    {
      question: "Hva viser sentraladministrasjonsundersøkelsene IKKE?",
      options: ["At politisering ikke finnes, siden de måler oppgitt vekt", "At de ansatte vektlegger faglige hensyn i arbeidet sitt", "At sammensetningen av departementenes personale har endret seg", "At undersøkelsene er gjentatt flere ganger over tid"],
      explanation: "Undersøkelsene måler hva ansatte oppgir at de vektlegger, ikke hva som skjer i enkeltsaker, og de fanger ikke uten videre opp endringer i hvilke oppgaver apparatet utfører. De øvrige forholdene er nettopp det undersøkelsene dokumenterer.",
    },
    {
      question: "Hvordan kan veksten i politisk stab brukes MOT politiseringspåstanden?",
      options: ["Den gir politikken en egen adresse og avlaster embetsverket", "Den viser at politisk ledelse har mistet tillit til embetsverket", "Den betyr at embetsverket er blitt mindre og dermed svakere", "Den innebærer at statssekretærene nå regnes som embetsmenn"],
      explanation: "Når den politiske funksjonen får en egen, synlig og avgrenset stab, blir rolleskillet skarpere og ikke uklarere. Vendingen i argumentet er den mest belønnede motforestillingen i denne oppgavefamilien.",
    },
    {
      question: "Hva er en embetsmann i rettslig forstand?",
      options: ["En som er utnevnt av Kongen i statsråd, som departementsråden", "Enhver ansatt i et departement eller et underliggende direktorat", "En som er utpekt av regjeringen og fratrer sammen med den", "En som er tilsatt på åremål i en lederstilling i staten"],
      explanation: "Embetsmann er en egen kategori med egen utnevnelsesmåte, mens de fleste andre er statsansatte tilsatt på vanlig måte. Verken embetsmenn eller statsansatte skifter med regjeringen — det gjør statssekretærer og politiske rådgivere.",
    },
  ],
  'stv1400-4-3': [
    {
      question: "Hva er personalsammensetning?",
      options: ["Beskrivelsen av hvem som arbeider i en forvaltning", "Modellen som forklarer hva sammensetningen betyr for vedtak", "Reglene for hvordan stillinger i staten skal lyses ut", "Fordelingen av stillinger mellom departementer og direktorater"],
      explanation: "Personalsammensetning er en beskrivelse av utdanning, kjønn, alder, bakgrunn og erfaring, og den blir faglig interessant først når den kobles til en modell. Det representative byråkratiet er modellen, utlysningsregler er noe annet, og stillingsfordeling mellom organer er en tredje sak.",
    },
    {
      question: "Hva er det tydeligste utviklingstrekket i rekrutteringen til sentralforvaltningen?",
      options: ["Juristdominansen er avløst av en bredere faglig sammensetning", "Samfunnsviterne er avløst av jurister etter hvert som regelverket vokste", "Andelen med høyere utdanning har falt jevnt over de siste tiårene", "Rekrutteringen skjer i dag i hovedsak fra privat næringsliv"],
      explanation: "Da hovedoppgaven var regelanvendelse, dominerte juristene; etter hvert som utredning, planlegging og økonomisk styring vokste, kom samfunnsvitere og økonomer inn i stort antall. Sammensetningen følger altså oppgavene, ikke omvendt.",
    },
    {
      question: "Hva er kvalifikasjonsprinsippet i staten?",
      options: ["At den best kvalifiserte søkeren skal ansettes", "At alle stillinger skal lyses ut offentlig før de besettes", "At ansatte skal ha samme utdanningsnivå som befolkningen", "At ledere i staten skal tilsettes på tidsbegrensede åremål"],
      explanation: "Prinsippet vurderer utdanning, erfaring og personlig egnethet mot kravene i utlysningen, og det er den rettslige siden av meritokratiet. Utlysningsplikt, representativitet og åremål er andre ordninger med andre begrunnelser.",
    },
    {
      question: "For hvem gjelder ikke kvalifikasjonsprinsippet?",
      options: ["For politisk ledelse: statsråd, statssekretær og rådgiver", "For embetsmenn utnevnt av Kongen i statsråd, som departementsråden", "For ansatte i direktoratene, som følger egne tilsettingsregler", "For ledere i staten, som tilsettes etter en egen lederordning"],
      explanation: "Politisk ledelse utpekes av regjeringen uten alminnelig kvalifikasjonsvurdering og fratrer med den. Embetsmenn og statsansatte tilsettes etter prinsippet, uansett organtype og ledernivå.",
    },
    {
      question: "Hva er hovedskillet mellom politisk ledelse og embetsverk?",
      options: ["Politisk ledelse fratrer med regjeringen, embetsverket blir sittende", "Politisk ledelse arbeider i departementet, embetsverket i etatene", "Politisk ledelse gir faglige råd, embetsverket treffer beslutninger", "Politisk ledelse er utnevnt av Stortinget, embetsverket av regjeringen"],
      explanation: "Grensen går ved regjeringsskiftet: den som går, er politisk tilsatt, og den som blir, er embetsverk. Begge lagene finnes i departementet, rollene er de motsatte av hva alternativene antyder, og Stortinget utnevner ingen av dem.",
    },
    {
      question: "Hvorfor er forvekslingen av de to lagene en alvorlig feil i en drøfting?",
      options: ["Fordi observasjoner om det ene ikke er belegg for det andre", "Fordi det er et brudd på reglene for tilsetting i statsforvaltningen", "Fordi statssekretæren da får ansvar for embetsverkets faglige råd", "Fordi det gjør skillet mellom departement og direktorat uklart"],
      explanation: "At politisk ledelse har fått flere medarbeidere, er ikke belegg for at embetsverket er politisert — det er to forskjellige grupper. Forvekslingen gjør politiseringsdrøftingen ubrukelig, og den er dokumentert som trekkgrunn.",
    },
    {
      question: "Hvem er departementsråden?",
      options: ["Departementets øverste administrative leder gjennom skifter", "Statsrådens politiske stedfortreder, som fratrer med regjeringen", "Lederen av det direktoratet departementet styrer i sektoren", "Statsministerens fremste rådgiver i saker som gjelder flere felt"],
      explanation: "Departementsråden er embetsmann, utnevnt av Kongen i statsråd, og leder huset administrativt gjennom regjeringsskifter. Statsrådens politiske stedfortreder er statssekretæren, og etatsledelse og samordning på tvers er andre roller.",
    },
    {
      question: "Hva er kontinuitetens funksjon i forvaltningen?",
      options: ["Ny politisk ledelse møter et apparat som kjenner sakene fra før", "Den sikrer at politikken ikke endres for raskt ved skifter", "Den gir de ansatte et sterkere stillingsvern enn i privat sektor", "Den gjør at samme parti kan styre gjennom flere valgperioder"],
      explanation: "Kontinuiteten gjør at en ny politikk kan gjennomføres raskt, fordi sakshistorikk og regelverkskunnskap er på plass. Den skal ikke bremse politikkendring, og den handler verken om stillingsvern eller om partienes styringsmuligheter.",
    },
    {
      question: "Hva er passiv representasjon?",
      options: ["At apparatets sammensetning ligner befolkningens statistisk", "At den ansatte fremmer sin egen gruppes interesser i vedtak", "At berørte parter får uttale seg før avgjørelsen treffes", "At ansatte deltar i beslutninger gjennom fagforeningene sine"],
      explanation: "Passiv representasjon er statistisk speiling langs en dimensjon som kjønn, utdanning eller geografi. Å fremme gruppens interesser er aktiv representasjon, uttalerett er partsstyre, og medbestemmelse er en tredje ordning.",
    },
    {
      question: "Hva er forholdet mellom passiv og aktiv representasjon?",
      options: ["At passiv gir aktiv, er en hypotese og ingen gitt sammenheng", "Passiv representasjon fører alltid til aktiv over tid", "De er to navn på det samme fenomenet i forvaltningen", "Aktiv representasjon er en forutsetning for passiv representasjon"],
      explanation: "Sammenhengen krever at flere betingelser er oppfylt, og yrkessosialiseringen trekker motsatt vei. De to er ulike fenomener — sammensetning mot atferd — og rekkefølgen kan ikke snus.",
    },
    {
      question: "Hvilke betingelser må være oppfylt for at sammensetning kan slå ut i beslutninger?",
      options: ["Skjønnsrom i saken, identifikasjon og en posisjon", "Lovhjemmel, budsjettdekning og godkjenning fra politisk ledelse", "Kvotering, opplæringstiltak og rapportering om måloppnåelse", "Flertall i kollegiet, skriftlig begrunnelse og klageadgang"],
      explanation: "Er saken fullt regelbundet, spiller det ingen rolle hvem som behandler den; identifikasjonen må overleve yrkessosialiseringen; og vurderingen må treffes i en stilling der den får virkning. De øvrige listene beskriver andre forvaltningskrav.",
    },
    {
      question: "Hva er yrkessosialisering?",
      options: ["At den ansatte lærer organisasjonens normer og arbeidsmåter", "At ansatte rekrutteres fra de samme utdanningsmiljøene over tid", "At profesjonene organiserer seg for å påvirke lønnsforhandlinger", "At politisk ledelse lærer opp embetsverket i regjeringens politikk"],
      explanation: "Sosialiseringen gjør at nye ansatte gradvis tenker som organisasjonen tenker, uavhengig av hvor de kom fra — og den er den sterkeste motkraften mot at sammensetning slår ut i vedtak. De øvrige beskrivelsene gjelder rekruttering, fagforeningsarbeid og opplæring.",
    },
    {
      question: "Hvordan er personalsammensetningen mest sannsynlig å virke inn på forvaltningens arbeid?",
      options: ["Gjennom hvilke spørsmål som stilles og hva som utredes", "Gjennom at ansatte fremmer sin egen gruppes interesser i vedtakene", "Gjennom at ansatte stemmer over saker i sine egne avdelinger", "Gjennom at ansatte kan nekte å følge politiske instrukser de misliker"],
      explanation: "Fagbakgrunn påvirker innrammingen av en sak, og innrammingen avgjør hva som utredes — lenge før noen har bestemt noe. Interessefremming krever betingelser som sjelden er oppfylt, og de øvrige beskrivelsene finnes ikke i norsk forvaltning.",
    },
    {
      question: "Hvorfor speiler sentralforvaltningen befolkningen dårlig på utdanningsdimensjonen?",
      options: ["Fordi apparatet i hovedsak rekrutterer høyt utdannede søkere", "Fordi rekrutteringen skjer uten offentlig utlysning av stillingene", "Fordi ansatte i staten sjelden slutter og profilen dermed fryses", "Fordi departementene bevisst velger bort søkere uten juridisk bakgrunn"],
      explanation: "Avviket følger av kvalifikasjonskravene og er derfor en konsekvens av et annet legitimt prinsipp, ikke uten videre en mangel. Utlysning skjer offentlig, mobiliteten forklarer ikke avviket, og bortvalg av fagretninger er ikke ordningen.",
    },
    {
      question: "Hva er moderat kvotering?",
      options: ["At representativitet teller ved omtrent like kvalifikasjoner", "At en andel av stillingene reserveres for bestemte grupper", "At kvalifikasjonskravene senkes for underrepresenterte søkere", "At stillinger lyses ut særskilt i utvalgte fagmiljøer og medier"],
      explanation: "Moderat kvotering lar kvalifikasjonsvurderingen komme først og bruker representativitet som tilleggskriterium når søkerne er omtrent like gode. Reserverte kvoter og senkede krav er radikale varianter, og målrettet utlysning virker på søkergrunnlaget.",
    },
    {
      question: "Hva skiller meritokrati fra speiling som rekrutteringsnorm?",
      options: ["Meritokrati spør hvem som gjør jobben best, speiling hvem det taler for", "Meritokrati gjelder ledere, mens speiling gjelder saksbehandlere", "Meritokrati er lovfestet, mens speiling er et ønske uten hjemmel i lov", "Meritokrati gjelder staten, mens speiling gjelder kommunesektoren"],
      explanation: "De to normene svarer på ulike spørsmål, og begge er legitime — derfor er avveiningen et verdispørsmål. Skillet går verken mellom stillingsnivåer, mellom lovfestet og ulovfestet eller mellom forvaltningsnivåer.",
    },
    {
      question: "Hvorfor er kvalifikasjonsprinsippet en forutsetning for partipolitisk nøytralitet?",
      options: ["Fordi tilsetting etter kompetanse stenger for partitilsetting", "Fordi det gir de ansatte rett til å nekte politiske instrukser", "Fordi det gjør at politisk ledelse ikke kan instruere embetsverket", "Fordi det sikrer at alle ansatte har samme faglige bakgrunn"],
      explanation: "Ble stillinger fordelt politisk, måtte apparatet vært skiftet ut med regjeringen, og både nøytraliteten og kontinuiteten ville forsvunnet. Prinsippet gir ingen nektingsrett, opphever ikke instruksjonsmyndigheten og gir ikke ensartet bakgrunn.",
    },
    {
      question: "Hvorfor kan et apparat følge kvalifikasjonsprinsippet og likevel få smal sammensetning?",
      options: ["Fordi egnethetskriteriet er skjønnsmessig og kan gjenta mønstre", "Fordi prinsippet krever at søkere har samme utdanning som avdelingen", "Fordi utlysningene etter reglene bare kan rettes mot enkelte miljøer", "Fordi loven forbyr å legge vekt på bredde i faglig bakgrunn"],
      explanation: "Jo større vekt det minst målbare kriteriet får, desto større rom er det for at man gjenkjenner egnethet hos dem som ligner dem som allerede er der. Prinsippet krever verken ensartethet eller smal utlysning, og bredde er et lovlig hensyn.",
    },
    {
      question: "Hva er den viktigste virkningen av karriereveier internt i forvaltningen?",
      options: ["De bygger dybdekompetanse, men låser også inne perspektiver", "De gjør at ansatte skifter sektor ofte og får bred erfaring", "De sikrer at lederstillinger besettes ved politisk utnevnelse", "De gjør at endringer i utlysningstekster slår ut umiddelbart"],
      explanation: "Lang fartstid på et felt gir regelverks- og aktørkunnskap, samtidig som et apparat rekruttert fra samme miljøer ser saken fra færre kanter. Endringer i rekrutteringen bruker dessuten mange år på å nå lederlaget.",
    },
    {
      question: "Hva kan en analyse av personalsammensetning IKKE avgjøre?",
      options: ["Om beslutningene faktisk ble annerledes av sammensetningen", "Hvilke fagbakgrunner som er representert i et departement", "Hvordan utdanningsprofilen har utviklet seg over tid", "Hvilke betingelser som må til for at sammensetning kan virke"],
      explanation: "Å vise at innrammingen kan variere med fagbakgrunn, er ikke det samme som å vise at utfallet gjorde det — det krever studier som knytter sammensetning til faktiske vedtak. De øvrige spørsmålene er nettopp det analysen kan besvare.",
    },
  ],
  'stv1400-5-1': [
    {
      question: "Hva er et velferdsregime hos Esping-Andersen?",
      options: ["Et mønster for hvordan ansvaret for velferd er fordelt mellom stat, marked og familie", "En løs samling enkeltordninger uten noe felles mønster mellom dem", "Et mål på hvor mye et land bruker på velferd målt mot samlet verdiskaping", "En rangering av land etter hvor godt velferdsordningene deres fungerer i praksis"],
      explanation: "Regimebegrepet fanger et sammenhengende mønster: hvem som bærer ansvaret, hva som utløser retten, og hvilke skiller ordningene skaper. Det er verken en løs samling ordninger, et utgiftsmål eller en rangering — at ordningene henger sammen, er selve poenget.",
    },
    {
      question: "Hvorfor er det galt å si at Esping-Andersen rangerte velferdsstatene?",
      options: ["Fordi de tre regimene er en typologi som sorterer etter logikk, ikke en skala som måler kvalitet", "Fordi han bare undersøkte et fåtall nordiske land og manglet sammenligningsgrunnlag", "Fordi rangeringen hans senere ble trukket tilbake av forskere som fant motstridende data", "Fordi han mente at alle velferdsstater i praksis fungerer omtrent like godt for innbyggerne"],
      explanation: "En typologi sorterer tilfeller etter hvilke trekk de deler, og hvert regime har sine egne avveininger. Modellen sier hva et land ligner på, ikke hva som er best, og den bygger på sammenligning av mange rike land.",
    },
    {
      question: "Hva kjennetegner det nordisk-sosialdemokratiske regimet?",
      options: ["Staten bærer hovedansvaret, og retten til ytelser følger i stor grad av bosetting", "Markedet bærer hovedansvaret, og de offentlige ytelsene er i hovedsak behovsprøvde", "Yrkeskassene bærer hovedansvaret, og retten følger av innbetaling i egen bransje", "Familien bærer hovedansvaret, og det offentlige trer inn bare når familien svikter"],
      explanation: "I det nordiske regimet er staten hovedansvarlig, retten utløses i stor grad av bosetting, og finansieringen skjer over skatteseddelen. De tre andre svarene beskriver henholdsvis det liberale regimet, det kontinentale forsikringsprinsippet og familieorienteringen som følger med det siste.",
    },
    {
      question: "Hva kjennetegner det angelsaksisk-liberale regimet?",
      options: ["Markedet bærer hovedansvaret, og de offentlige ytelsene er residuale og behovsprøvde", "Staten bærer hovedansvaret, og ytelsene omfatter alle bosatte uten behovsprøving", "Yrkesgruppenes egne kasser bærer hovedansvaret, og retten følger av premier", "Kommunene bærer hovedansvaret, og tjenestene finansieres av lokale skatteinntekter"],
      explanation: "I det liberale regimet forutsettes markedet å dekke det meste, mens det offentlige trer inn for dem som ikke klarer seg — og da etter behovsprøving. Universelle rettigheter og yrkesbaserte kasser hører til de to andre regimene.",
    },
    {
      question: "Hva kjennetegner det kontinentalt-konservative regimet?",
      options: ["Retten følger av yrkestilknytning og innbetaling, og ordningene er ofte delt per yrkesgruppe", "Retten følger av bosetting i landet, og ordningene omfatter hele befolkningen på samme vilkår", "Retten følger av en behovsprøving der inntekt, formue og forsørgeransvar avgjør om du får noe", "Retten følger av at du har kjøpt en privat forsikring i det åpne markedet"],
      explanation: "Det kontinentale regimet bygger på et prestasjons- og forsikringsprinsipp: nivået speiler tidligere inntekt og innbetaling, og ordningene er ofte organisert per yrkesgruppe. Bosetting som utløsende vilkår hører til det nordiske, behovsprøving til det liberale.",
    },
    {
      question: "Hva betyr det at «konservativ» brukes i navnet på det kontinentale regimet?",
      options: ["At ordningene bevarer eksisterende sosiale skiller inn i velferdssystemet", "At regimet i hovedsak er innført av konservative partier", "At regimet motsetter seg enhver endring i velferdsordningene over tid", "At regimet legger vekt på å bevare et lavt nivå på offentlige utgifter"],
      explanation: "Merkelappen viser til at yrkesbaserte ordninger fører skillene fra arbeidslivet videre inn i velferden. Den er en analytisk karakteristikk av virkningen, ikke en beskrivelse av hvilke partier som innførte ordningene.",
    },
    {
      question: "Hva er de-kommodifisering?",
      options: ["Graden av at du kan opprettholde levestandarden uten å selge arbeidskraften din i markedet", "Graden av at du kan klare deg uten å være avhengig av familiens omsorg og forsørgelse", "Graden av at offentlige tjenester produseres av det offentlige og ikke av private", "Graden av at ytelsene fastsettes politisk og ikke gjennom forhandlinger"],
      explanation: "De-kommodifisering måler uavhengighet av markedet: hvor mye ytelsen dekker, hvor lenge den varer og om den er en rettighet. Uavhengighet av familien heter de-familisering, og å bytte om på de to er den mest dokumenterte forvekslingen i dette stoffet.",
    },
    {
      question: "Hva er de-familisering?",
      options: ["Graden av at du kan klare deg uten å være avhengig av familiens omsorg og forsørgelse", "Graden av at du kan opprettholde levestandarden uten å selge arbeidskraften i markedet", "Graden av at familiepolitiske ytelser utbetales til den enkelte og ikke til husholdningen", "Graden av at familien får bestemme hvordan omsorgsoppgavene skal fordeles internt"],
      explanation: "De-familisering måler om samfunnet har overtatt oppgaver som ellers faller på husholdningen, som barnepass og pleie. Uavhengighet av markedet er de-kommodifisering, og de to aksene kan peke i hver sin retning for samme ordning.",
    },
    {
      question: "Hvorfor kom de-familisering inn som en egen akse i typologien?",
      options: ["Fordi den første versjonen ble kritisert for å måle for lite av familiens rolle i velferden", "Fordi de-kommodifisering viste seg umulig å måle med tilgjengelig statistikk", "Fordi flere land innførte kontantytelser til familier i samme periode", "Fordi aksen var nødvendig for å kunne plassere de nordiske landene i et eget regime"],
      explanation: "Kritikken var at en modell som bare måler uavhengighet av markedet, overser at velferdssystemer også fordeler ubetalt omsorgsarbeid — som i praksis oftest har falt på kvinner. Aksen er svaret på den innvendingen og er i dag en del av modellen.",
    },
    {
      question: "Hvilken norsk ordning gir det klareste eksempelet på de-familisering?",
      options: ["Den lovfestede retten til subsidiert barnehageplass", "Retten til dagpenger etter opptjening i arbeid", "Retten til å klage på et enkeltvedtak til overordnet organ", "Retten til fradrag for renteutgifter i skattemeldingen"],
      explanation: "Barnehageretten flytter omsorgsarbeid fra husholdningen til det offentlige og gjør det lettere å kombinere omsorgsansvar med arbeid. Dagpenger virker på de-kommodifiseringsaksen i stedet, og de to andre alternativene handler ikke om velferdsproduksjon.",
    },
    {
      question: "Hva utløser medlemskap i folketrygden?",
      options: ["Bosetting eller arbeid i Norge", "En behovsprøving av inntekt og formue", "Innbetaling til en kasse for din egen yrkesgruppe", "Søknad som innvilges etter en skjønnsmessig vurdering"],
      explanation: "Medlemskapet følger av at du bor eller arbeider i landet, ikke av behovsprøving eller av innbetaling i en yrkeskasse. Flere av ytelsene krever likevel opptjening og beregnes ut fra tidligere inntekt — retten er universell, beløpet er det ikke alltid.",
    },
    {
      question: "Hva er forskjellen på en behovsprøvd ytelse og en inntektsavhengig ytelse?",
      options: ["Behovsprøvingen avgjør om du har rett, mens inntektsavhengigheten bare avgjør beløpet", "Behovsprøvingen gjelder de statlige ytelsene, mens inntektsavhengigheten gjelder de kommunale", "Behovsprøvingen skjer i ettertid, mens inntektsavhengigheten avgjøres ved søknaden", "Behovsprøvingen gjelder tjenester, mens inntektsavhengigheten gjelder pengeoverføringer"],
      explanation: "En universell ytelse kan godt beregnes ut fra tidligere inntekt uten at retten er behovsprøvd. Skillet går mellom retten og beløpet, ikke mellom forvaltningsnivåer, tidspunkter eller ytelsesformer.",
    },
    {
      question: "Hva er stratifisering i Esping-Andersens modell?",
      options: ["At velferdsordninger også skaper eller visker ut skiller mellom grupper av folk", "At velferdsordninger fordeler inntekt fra dem med mest til dem med minst", "At velferdsordninger er delt i statlige, fylkeskommunale og kommunale ansvarsområder", "At velferdsordninger bygges ut lagvis over tid, med nye ordninger oppå gamle"],
      explanation: "Stratifisering er den tredje dimensjonen i typologien og handler om hvilke gruppeskiller ordningene bekrefter eller reduserer. Det er noe annet enn omfordeling, som handler om hvor mye som flyttes mellom grupper.",
    },
    {
      question: "Hvilke tre kilder til velferd står i sentrum for Esping-Andersens analyse?",
      options: ["Staten, markedet og familien", "Staten, kommunen og fylkeskommunen", "Staten, frivilligheten og arbeidsgiverne", "Staten, forsikringskassene og domstolene"],
      explanation: "Analysen bygger på hvordan ansvaret er fordelt mellom stat, marked og familie, og det er blandingsforholdet mellom de tre som skiller regimene fra hverandre. De andre inndelingene er reelle, men de er ikke aksene modellen er bygget på.",
    },
    {
      question: "Hva er hovedforskjellen mellom skattefinansiering og forsikringsfinansiering?",
      options: ["Ved forsikringsfinansiering er ytelsen koblet til innbetalte premier, ved skattefinansiering ikke", "Ved forsikringsfinansiering er ytelsen skattefri, ved skattefinansiering er den skattepliktig", "Ved forsikringsfinansiering er ytelsen fastsatt i lov, ved skattefinansiering fastsatt i forskrift", "Ved forsikringsfinansiering utbetales ytelsen av staten, ved skattefinansiering av kommunen"],
      explanation: "Koblingen mellom innbetaling og rett er det som skiller de to, og den avgjør hvor lett det er å gi ytelsen til noen som ikke har betalt inn. Skatteplikt, hjemmelsform og utbetalende organ følger ikke av finansieringsformen.",
    },
    {
      question: "Hvorfor er tjenestesiden viktig når utjevning i Norge skal drøftes?",
      options: ["Fordi tjenester har en fordelingsvirkning som ikke vises i inntektsstatistikken", "Fordi tjenester er billigere for staten å produsere enn store pengeoverføringer er", "Fordi tjenester alltid er behovsprøvde og derfor treffer dem med minst best", "Fordi tjenester i Norge finansieres av kommunene og ikke over statsbudsjettet"],
      explanation: "Gratis skolegang og subsidiert barnehageplass utgjør en større andel av levestandarden for dem med lav inntekt, uten at inntekten endres. En drøfting som bare ser på overføringer, har derfor målt halve modellen.",
    },
    {
      question: "Hvem produserer de store velferdstjenestene i Norge, og hvem fastsetter rettighetene?",
      options: ["Kommunene produserer tjenestene, mens staten fastsetter rettighetene", "Staten produserer tjenestene, mens kommunene fastsetter rettighetene", "Fylkeskommunene produserer tjenestene, mens Stortinget fastsetter rettighetene", "Private leverandører produserer tjenestene, mens kommunene fastsetter rettighetene"],
      explanation: "Barnehage, skole, pleie og omsorg og sosiale tjenester produseres av kommunene, mens rettighetene er statlig fastsatte og i stor grad statlig finansierte. Det gjør velferdsstaten til et flernivåspørsmål og kobler den til styringsvirkemidlene i Del 1.",
    },
    {
      question: "Hva forutsetter en skattefinansiert, universell velferdsmodell mest av alt?",
      options: ["At en høy andel av befolkningen i yrkesaktiv alder er i arbeid", "At de offentlige utgiftene holdes lavere enn i sammenlignbare land", "At ytelsene utbetales med samme beløp til alle som mottar dem", "At tjenestene produseres av staten og ikke av kommunene"],
      explanation: "Yrkesdeltakelsen finansierer ordningene og avgjør samtidig hvor mange som trenger dem, slik at et fall treffer både inntekts- og utgiftssiden. Verken lave utgifter, flate satser eller statlig produksjon er nødvendige trekk ved modellen.",
    },
    {
      question: "Hva menes med at «tjenester til fattige blir fattige tjenester»?",
      options: ["At ordninger som bare omfatter dem med minst, har færre til å forsvare dem politisk", "At ordninger som bare gjelder dem med minst, er dyrere å administrere per utbetalt krone", "At ordninger for dem med minst gir svakere insentiver til å søke arbeid", "At ordninger for dem med minst treffer dårligere fordi behovet er vanskelig å måle"],
      explanation: "Formuleringen peker på legitimitet: brede ordninger har mange forsvarere, smale har få, og over tid risikerer de smale å bli dårligere finansiert. De tre andre påstandene er reelle innvendinger mot behovsprøving, men de er ikke det denne formuleringen sier.",
    },
    {
      question: "Hva er det viktigste motargumentet mot universelle ordninger?",
      options: ["At mye av pengene går til mottakere som ville klart seg uten dem", "At de krever at mottakeren dokumenterer sin egen økonomi for en saksbehandler", "At de skaper et tydelig skille mellom mottakere og resten av befolkningen", "At de gjør det umulig å beregne ytelsen ut fra tidligere inntekt"],
      explanation: "Kostnadsargumentet er kjernen: en gitt sum kunne i prinsippet gitt mer utjevning om den var målrettet. De to neste alternativene beskriver innvendinger mot behovsprøving, altså det motsatte, og det siste er faktisk uriktig.",
    },
    {
      question: "Hva er den vanligste innvendingen mot selve typologien?",
      options: ["At tre renskårne typer er for få til å fange land som er blandinger", "At typologien bare bygger på tall fra nordiske land", "At typologien ikke sier noe om hvordan ordningene finansieres", "At typologien måler velferd i kroner og ikke i faktiske levekår hos folk"],
      explanation: "Innvendingene handler om at typene er få og renskårne, at familiens rolle først ble målt for lite, og at land beveger seg over tid. Modellen bygger nettopp på finansiering og ansvarsfordeling, og på sammenligning av mange rike land.",
    },
    {
      question: "Hvorfor endrer velferdssystemer sjelden regimetype?",
      options: ["Fordi ordninger bygger opp forventninger, rettigheter og institusjoner som er tunge å legge om", "Fordi internasjonale avtaler forbyr landene å endre grunnprinsippene i sine egne velferdsordninger", "Fordi regimetypen er bestemt av landets geografi og næringsstruktur", "Fordi velgerne sjelden er opptatt av velferdspolitikk i valgkamper"],
      explanation: "Innrettede institusjoner, berettigede forventninger og brede mottakergrupper gjør omlegging tung, slik at endringer stort sett skjer som justeringer innenfor modellen. Treghet er likevel ikke det samme som uforanderlighet — nivåer og vilkår endres jevnlig.",
    },
    {
      question: "Hva er forskjellen på en velferdsstat og et velferdssamfunn?",
      options: ["Velferdssamfunnet omfatter også familie, frivillighet og marked, ikke bare det offentlige", "Velferdssamfunnet er betegnelsen på velferdsstaten etter at den er fullt utbygd", "Velferdssamfunnet gjelder tjenestene, mens velferdsstaten gjelder pengeoverføringene til folk", "Velferdssamfunnet er et politisk mål, mens velferdsstaten er en faglig beskrivelse"],
      explanation: "Velferdsstaten er den offentlig organiserte delen, mens velferdssamfunnet også rommer det familien, frivilligheten og markedet leverer. Skillet er nyttig fordi spørsmålet om hvor grensen mellom de fire skal gå, er et stående stridsspørsmål.",
    },
    {
      question: "Hva skiller en sosial rettighet fra hjelp etter skjønn?",
      options: ["Rettigheten utløses av at lovens vilkår er oppfylt, mens skjønnet fastsettes sak for sak", "Rettigheten gjelder pengeytelser, mens skjønnet gjelder tjenester", "Rettigheten kan ikke påklages, mens et skjønnsmessig vedtak alltid kan påklages videre oppover", "Rettigheten fastsettes av kommunen, mens skjønnet utøves av staten"],
      explanation: "Rettigheten kan gjøres gjeldende når vilkårene er oppfylt, mens en skjønnsbasert ytelse forutsetter en vurdering av den enkelte saken. Merk at også en rettighet kan være behovsprøvd — da er lav inntekt selve vilkåret.",
    },
    {
      question: "Hvilket begrepsapparat eier Esping-Andersen i denne delen av faget?",
      options: ["De tre regimene, de-kommodifisering, de-familisering og stratifisering", "Universalisme, behovsprøving, relativ fattigdom, vedvarende lavinntekt og velferdsmåling", "Rammetilskudd, øremerkede tilskudd og inntektssystemet", "Politisk lojalitet, partipolitisk nøytralitet og faglig uavhengighet"],
      explanation: "Typologien og de tre dimensjonene den bygger på, er Esping-Andersens bidrag. De to neste settene begreper hører til henholdsvis velferdsstatslitteraturen og Del 1, og det siste tilhører forvaltningens verdier.",
    },
    {
      question: "En kandidat skriver: «Esping-Andersen har tre regimer: det sosialdemokratiske i Norden, det liberale i angelsaksiske land og det konservative i Kontinental-Europa.» Hvilken feil er dette?",
      options: ["Feil #2 — begrepene er ramset opp uten å bli fylt med innhold", "Feil #4 — påstanden mangler norsk empirisk forankring", "Feil #7 — bare det ene leddet i en sammenligning er behandlet", "Feil #9 — avveiningen mellom hensynene er hoppet over"],
      explanation: "Alt i setningen er riktig, men ingen av regimene har fått hvem som bærer ansvaret, hva som utløser retten eller hvilke skiller det skaper. Det er nettopp oppramsing uten innhold, og det er dette kapitlets hovedfelle.",
    },
    {
      question: "En kandidat skriver: «Barnehageutbyggingen er et eksempel på de-kommodifisering, siden den gjør folk mindre avhengige av familien.» Hva er feil?",
      options: ["Begrunnelsen beskriver de-familisering, ikke de-kommodifisering", "Barnehageutbygging er verken de-kommodifisering eller de-familisering", "De-kommodifisering kan bare måles for pengeytelser, ikke for tjenester", "Barnehageutbygging hører til stratifiseringsdimensjonen og ikke til noen akse"],
      explanation: "Uavhengighet av familien er de-familisering; de-kommodifisering handler om uavhengighet av markedet. Konklusjonen om at barnehageretten hører hjemme på en av aksene, er riktig — det er navnet på aksen som er byttet om.",
    },
    {
      question: "Hvorfor er det utilstrekkelig å «motbevise» Norges regimeplassering med at sosialhjelpen er behovsprøvd?",
      options: ["Fordi et regime er hovedlogikken i systemet, ikke en påstand om hver enkelt ordning", "Fordi sosialhjelpen er en så liten ordning at den ikke teller i sammenligninger", "Fordi behovsprøving forekommer i alle de tre regimene og derfor ikke skiller dem fra hverandre", "Fordi sosialhjelpen er kommunal og typologien bare gjelder statlige ordninger"],
      explanation: "Typene er renskårne, og alle land er blandinger; det avgjørende er hvilken logikk som bærer hovedtyngden av systemet. Å peke på én ordning som ikke passer, viser at Norge ikke er et rent tilfelle — ikke at plasseringen er gal.",
    },
  ],
  'stv1400-5-2': [
    {
      question: "Hva kjennetegner en universell ytelse?",
      options: ["Den omfatter alle i en gruppe som er definert uten en behovsvurdering", "Den utbetales med nøyaktig samme beløp til alle som mottar den, uansett inntekt", "Den tildeles etter en vurdering av søkerens inntekt, formue og forsørgeransvar", "Den finansieres av innbetalte premier fra mottakerne selv"],
      explanation: "Det avgjørende er at retten ikke er behovsprøvd — gruppen defineres av noe annet enn behov, som bosetting eller det å ha barn. En universell ytelse kan godt være inntektsavhengig i beløpet, og forvekslingen av rett og beløp er en dokumentert felle.",
    },
    {
      question: "Hva vil det si at en ytelse er behovsprøvd?",
      options: ["At retten avhenger av en vurdering av søkerens inntekt og formue", "At beløpet beregnes ut fra hvor mye søkeren har tjent i årene før søknaden", "At ytelsen bare utbetales i en begrenset periode etter søknad", "At ytelsen kan trekkes tilbake dersom mottakeren flytter fra kommunen"],
      explanation: "Behovsprøving gjelder retten: økonomiske forhold avgjør om og hvor mye du får. At beløpet beregnes ut fra tidligere inntekt, er noe annet — det finnes i universelle ordninger også, og der er retten fortsatt ikke behovsprøvd.",
    },
    {
      question: "Hva er treffsikkerhet i denne sammenhengen?",
      options: ["Hvor stor andel av pengene som når fram til den gruppen ordningen er ment for", "Hvor stor andel av dem som har rett til ytelsen, som faktisk mottar den", "Hvor presist saksbehandlerne følger regelverket når de fatter vedtak", "Hvor raskt ordningen kommer i gang etter at Stortinget har vedtatt den"],
      explanation: "Treffsikkerhet måles per utbetalt krone. Hvor stor andel av målgruppen som faktisk mottar ytelsen, er dekningsgrad — og den mest treffsikre ordningen kan ha den laveste dekningsgraden på grunn av terskler.",
    },
    {
      question: "Hva er «ikke-bruk» av en velferdsordning?",
      options: ["At personer som har rett til en ytelse, ikke mottar den fordi de ikke søker", "At personer som søker om en ytelse, får avslag fordi vilkårene ikke er oppfylt", "At bevilgede midler blir stående ubrukt fordi ordningen er dårlig kjent i etaten", "At mottakere lar være å bruke ytelsen til det formålet den var ment for"],
      explanation: "Ikke-bruk betyr at ordningen aldri ble prøvd — på grunn av manglende kjennskap, krevende søknad, lavt beløp eller opplevd stigma. Avslag er noe annet: da har noen søkt og fått nei, og avslag synes i statistikken mens ikke-bruk som regel ikke gjør det.",
    },
    {
      question: "Hvorfor svekker ikke-bruk argumentet om behovsprøvingens treffsikkerhet?",
      options: ["Fordi en ordning kan treffe presist for sine mottakere og likevel nå få av dem som trenger den", "Fordi ikke-bruk gjør at administrasjonskostnadene per utbetalt krone stiger kraftig i ordningen", "Fordi ikke-bruk over tid fører til at ordningen må behovsprøves enda strengere for å holde budsjettet", "Fordi ikke-bruk betyr at pengene i stedet utbetales til feil mottakergruppe"],
      explanation: "Treffsikkerhet måles per utbetalt krone, mens ikke-bruk gjelder hvor mange av dem som har rett, som faktisk får noe. En behovsprøvd ordning kan derfor jevne ut mindre samlet enn en bredere ordning som utbetales automatisk.",
    },
    {
      question: "Hva er stigmatisering i denne sammenhengen?",
      options: ["At det å motta ytelsen markerer mottakeren som en som ikke klarer seg selv", "At ordningen skaper varige skiller mellom yrkesgrupper i befolkningen", "At saksbehandleren vurderer søkerens situasjon strengere enn regelverket krever", "At mottakeren mister retten til ytelsen dersom inntekten stiger over en grense"],
      explanation: "Stigmatisering gjelder virkningen for den enkelte mottakeren, og henger sammen med at behovsprøvde ytelser må søkes om og dokumenteres. Skiller mellom grupper er stratifisering, og at ytelsen faller med stigende inntekt, er avkorting.",
    },
    {
      question: "Hva er avkorting av en ytelse?",
      options: ["At ytelsen reduseres etter hvert som mottakerens inntekt stiger", "At ytelsen utbetales over færre måneder enn opprinnelig innvilget", "At ytelsen settes ned fordi bevilgningen til ordningen er redusert", "At ytelsen bortfaller når mottakeren flytter til en annen kommune"],
      explanation: "Avkorting virker som en skatt i det aktuelle inntektsintervallet: av hver ekstra krone du tjener, beholder du bare en del, fordi ytelsen faller samtidig. Virkningen kan bli stor når flere avkortede ordninger overlapper i samme intervall.",
    },
    {
      question: "Hva er poenget med å skille bruttokostnad fra nettokostnad ved en universell ytelse?",
      options: ["At en del av utbetalingen kommer tilbake gjennom skatt når ytelsen er skattepliktig", "At administrasjonen av ordningen koster mer enn selve utbetalingene gjør", "At kommunene dekker en del av utgiften uten at den synes i statsbudsjettet", "At mottakere med høy inntekt som regel ikke tar ut ytelsen de har krav på"],
      explanation: "I et progressivt skattesystem kommer en del av en skattepliktig ytelse tilbake, slik at ordningen er mindre dyr enn bruttotallet antyder. Argumentet nyanserer kostnadsinnvendingen, men opphever den ikke, siden bruttokostnaden bestemmer hvor stort budsjettet må være.",
    },
    {
      question: "Hva peker formuleringen om at «tjenester til fattige blir fattige tjenester» på?",
      options: ["At ordninger som bare gjelder dem med minst, har færre forsvarere når budsjettene strammes", "At ordninger for dem med minst er dyrere å administrere per utbetalt krone enn de brede ordningene", "At ordninger for dem med minst gir svakere insentiver til å søke arbeid", "At ordninger for dem med minst treffer dårligere fordi det faktiske behovet er vanskelig å måle"],
      explanation: "Formuleringen handler om legitimitet: brede ordninger har mange som forsvarer dem, smale få, og over tid risikerer de smale å bli dårligere finansiert. De tre andre påstandene er reelle innvendinger, men de er ikke det denne formuleringen sier.",
    },
    {
      question: "Hvilke to kanaler jevner den norske velferdsstaten ut gjennom?",
      options: ["Skatt og overføringer på den ene siden, offentlige tjenester på den andre", "Statlige ordninger på den ene siden, kommunale ordninger på den andre", "Pengeoverføringer på den ene siden, avgiftslettelser på den andre", "Folketrygden på den ene siden, private forsikringsordninger på den andre"],
      explanation: "Den ene kanalen fanges av inntektsstatistikken, den andre ikke: verdien av gratis skolegang og subsidiert barnehageplass endrer ikke inntekten, men utgjør mest for dem som har minst. En drøfting som bare ser på overføringer, har målt halve modellen.",
    },
    {
      question: "Hva måler gini-koeffisienten?",
      options: ["Spredningen i inntektsfordelingen, fra null ved full likhet til én ved full ulikhet", "Andelen av befolkningen som lever under en lavinntektsgrense fastsatt av myndighetene", "Forholdet mellom offentlige utgifter og samlet verdiskaping i et land", "Hvor stor del av inntekten en gjennomsnittshusholdning betaler i skatt"],
      explanation: "Gini er et samlemål på spredning i hele fordelingen, ikke et fattigdomsmål. Regnes den ut både før og etter skatt og overføringer, gir avstanden mellom de to tallene et mål på systemets omfordelingseffekt.",
    },
    {
      question: "Hva fanger gini-koeffisienten ikke?",
      options: ["Verdien av offentlige tjenester, formuesfordelingen og mobiliteten over tid", "Forskjellen mellom inntekt før og etter skatt og overføringer i befolkningen", "Hvor stor spredning det er i inntektene mellom husholdninger i et land", "Hvordan inntektsulikheten i et land utvikler seg fra ett år til det neste"],
      explanation: "Gini er beregnet på registrert inntekt, og derfor ligger tjenesteverdien, formuen og bevegelsen mellom inntektsgrupper utenfor. To land med samme gini kan ha svært ulik sosial mobilitet.",
    },
    {
      question: "Hva vil det si at fattigdom i Norge måles relativt?",
      options: ["At grensen settes i forhold til inntektsnivået i samfunnet man lever i", "At grensen settes i forhold til hva som trengs for å dekke grunnleggende behov", "At grensen settes i forhold til hva mottakeren selv opplever som knapphet", "At grensen settes i forhold til inntektsnivået i sammenlignbare naboland"],
      explanation: "Begrunnelsen er at deltakelse i samfunnet krever et minimum målt mot omgivelsene. En fast grense for grunnleggende behov er absolutt fattigdom, og målene svarer på to ulike spørsmål.",
    },
    {
      question: "Hva følger av at lavinntektsgrensen er relativ?",
      options: ["Andelen under grensen kan endre seg fordi medianinntekten flytter seg", "Andelen under grensen kan bare endre seg dersom noens realinntekt faller", "Andelen under grensen er den samme i alle land med samme inntektsnivå", "Andelen under grensen fastsettes politisk i hvert statsbudsjett"],
      explanation: "Når grensen følger medianen, kan andelen stige i gode tider fordi de med minst henger etter, og falle i en nedgangstid fordi medianen faller. Derfor må en besvarelse si hvilket mål den bygger på før den tolker en endring.",
    },
    {
      question: "Hva er vedvarende lavinntekt?",
      options: ["Inntekt under en andel av medianen, målt som gjennomsnitt over tre år", "Inntekt under en fast kronegrense, målt i ett enkelt kalenderår uten justering", "Inntekt som ikke dekker husholdningens faktiske utgifter over tid", "Inntekt under gjennomsnittsinntekten i kommunen der man bor"],
      explanation: "Det norske hovedmålet setter grensen som en andel av medianinntekten — i den mest brukte varianten 60 prosent — og bruker et treårsvindu for å skille varig knapphet fra en midlertidig situasjon som for eksempel studietid.",
    },
    {
      question: "Hvorfor bruker det norske hovedmålet et treårsvindu?",
      options: ["For å skille varig knapphet fra midlertidige situasjoner som studietid", "For å jevne ut svingninger i medianinntekten mellom konjunkturer", "For at statistikken skal kunne sammenlignes med andre europeiske land", "For å rekke å behandle klager på inntektsopplysningene før publisering"],
      explanation: "Et enkelt år med lav registrert inntekt sier lite om varig knapphet, og studenter er det vanligste eksempelet. Treårsvinduet er laget nettopp for å fange dem som ligger under grensen år etter år.",
    },
    {
      question: "Hvorfor regnes inntekten om til inntekt per forbruksenhet?",
      options: ["Fordi husholdninger av ulik størrelse deler utgifter og ikke kan sammenlignes direkte", "Fordi inntekt etter skatt ellers ville vært umulig å sammenligne mellom år", "Fordi enkelte husholdninger har inntekter som ikke registreres i inntektsstatistikken", "Fordi kommunale forskjeller i levekostnader ellers ville slått ut i tallene"],
      explanation: "To voksne trenger mer enn én, men ikke dobbelt så mye, siden bolig og andre utgifter deles. Valget av omregningsskala påvirker hvem som havner under grensen, og det er en av grunnene til at tall om barnefattigdom kan variere mellom kilder.",
    },
    {
      question: "Hva er forskjellen på omfordeling mellom grupper og omfordeling over livsløpet?",
      options: ["Den første flytter penger mellom personer, den andre mellom faser hos samme person", "Den første gjelder statlige ordninger, den andre gjelder kommunale ordninger", "Den første måles med gini-koeffisienten, den andre med vedvarende lavinntekt over tid", "Den første skjer gjennom skatt, den andre gjennom offentlige tjenester"],
      explanation: "En stor del av det velferdsstaten gjør, er å flytte den enkeltes egne midler mellom yrkesaktive år og faser med barndom, studier, sykdom og alderdom. Målt over et helt liv omfordeler systemet derfor mindre mellom personer enn tverrsnittstall i ett år antyder.",
    },
    {
      question: "Hva betyr «barnefattigdom» i norsk statistikk?",
      options: ["Andelen barn som lever i husholdninger med vedvarende lavinntekt", "Andelen barn som selv oppgir at de mangler nødvendige eiendeler hjemme", "Andelen barn i husholdninger som mottar økonomisk sosialhjelp", "Andelen barn i husholdninger uten yrkesaktive voksne i året"],
      explanation: "Det er husholdningens inntekt som måles, ikke barnets egne forhold, og målet er relativt og bygget på inntekt per forbruksenhet. Undersøkelser som spør hva husholdningen har råd til, måler materiell mangel og kan gi et annet bilde.",
    },
    {
      question: "Hva skiller søknadsbaserte fra automatiske ytelser?",
      options: ["Den første må mottakeren selv be om, den andre utbetales fra opplysninger det offentlige har", "Den første er alltid behovsprøvd, mens den andre alltid er universelt innrettet for alle", "Den første utbetales av staten, mens den andre utbetales av kommunen", "Den første kan påklages, mens den andre fastsettes endelig uten klageadgang"],
      explanation: "Det er søknadskravet, ikke behovsprøvingen i seg selv, som skaper terskelen. En behovsprøvd ordning som beregnes automatisk fra inntektsopplysninger, kan derfor ha langt mindre ikke-bruk uten at treffsikkerheten svekkes.",
    },
    {
      question: "Hvorfor regnes omfordeling som en statlig og ikke en kommunal oppgave?",
      options: ["Fordi både mottakere og skattebetalere kan flytte mellom kommuner", "Fordi kommunene mangler juridisk hjemmel til å fastsette egne ytelser", "Fordi kommunene ikke har administrativ kapasitet til å behandle søknader", "Fordi staten har bedre oversikt over hvem som har lav inntekt i landet"],
      explanation: "En kommune som gir vesentlig mer enn nabokommunen, kan tiltrekke seg mottakere og miste skattebetalere, og da vil ingen kommune gå foran. Derfor ligger de store omfordelende ordningene hos staten, mens kommunene produserer tjenestene.",
    },
    {
      question: "Hva er målretting uten behovsprøving?",
      options: ["At en universell, skattepliktig ytelse gir mest netto til dem med lav inntekt", "At ytelsen bare utlyses i de kommunene der behovet er dokumentert størst", "At mottakerne selv velger om de vil ta imot ytelsen eller la den stå", "At ytelsen tildeles etter en faglig vurdering i stedet for etter inntekten din"],
      explanation: "I et progressivt skattesystem kommer mer av en skattepliktig ytelse tilbake fra dem med høy inntekt, slik at ordningen målrettes uten søknadsterskel. Universelle tjenester virker på samme måte, siden den samme tjenesten er verdt mest for den som har minst.",
    },
    {
      question: "Hva er forskjellen på treffsikkerhet og dekningsgrad?",
      options: ["Treffsikkerhet gjelder andelen av pengene, dekningsgrad andelen av målgruppen", "Treffsikkerhet gjelder statlige ordninger, dekningsgrad gjelder kommunale", "Treffsikkerhet måles i ettertid, mens dekningsgrad beregnes ved innføringen", "Treffsikkerhet gjelder pengeoverføringer, mens dekningsgrad gjelder tjenester"],
      explanation: "De to kan trekke i hver sin retning: den mest treffsikre ordningen kan ha den laveste dekningsgraden, fordi terskler holder en del av målgruppen ute. Å skille dem er et av de sikreste grepene for å heve drøftingen i dette temaet.",
    },
    {
      question: "Hvilket begrepsapparat eier velferdsstatslitteraturen i pensum i denne delen?",
      options: ["Universalisme, residualisme, behovsprøving, lavinntekt og fattigdomsmålene", "De tre velferdsregimene, de-kommodifisering, de-familisering og stratifisering", "Rammetilskudd, øremerkede tilskudd, inntektsutjevning og utgiftsutjevning", "Instruksjonsmyndighet, omgjøringsmyndighet, sektorprinsipp og samordning"],
      explanation: "Halvorsen og Hatland mfl. eier innretningen og målestokkene i det norske systemet. Typologien og de tre dimensjonene tilhører Esping-Andersen, mens de to siste settene begreper hører til Del 1 og til sentralforvaltningen.",
    },
    {
      question: "En kandidat skriver: «Relativ fattigdom er egentlig bare ulikhet, så tallene sier ingenting om fattigdom.» Hva er galt?",
      options: ["At målet er relativt betyr at fattigdom forstås sosialt, ikke at det er vilkårlig", "Relativ fattigdom måler faktisk hvor mange som mangler det mest nødvendige", "Relativ fattigdom og ulikhet er to navn på nøyaktig den samme størrelsen", "Relativ fattigdom brukes ikke i norsk offentlig statistikk og er derfor uten betydning"],
      explanation: "Begrunnelsen for et relativt mål er at deltakelse i samfunnet krever et minimum målt mot omgivelsene. Målet er noe annet enn et samlemål på spredning som gini, og det er hovedmålet i norsk statistikk nettopp fordi Norge er et høyinntektsland.",
    },
    {
      question: "En kandidat lister fordeler ved universelle ordninger i ett avsnitt og ulemper i neste, uten å knytte dem sammen. Hvilken feil er dette?",
      options: ["Feil #1 — det er en oppstilling, ikke en drøfting der hensynene veies mot hverandre", "Feil #4 — svaret mangler forankring i navngitt norsk forvaltning", "Feil #7 — bare det ene leddet i sammenligningen er behandlet", "Feil #8 — sentrale begreper i svaret er forvekslet med sine nære nabobegreper i faget"],
      explanation: "Drøfting krever at argumentene møtes: treffsikkerhet mot ikke-bruk, kostnad mot nettokostnad, legitimitet mot sitt eget motargument. To lister etter hverandre er den vanligste formen for manglende drøfting i akkurat dette stoffet.",
    },
    {
      question: "En kandidat skriver: «Barnetrygden er behovsprøvd, siden beløpet avhenger av hvor mange barn du har.» Hva er galt?",
      options: ["Antall barn er et gruppekriterium, ikke en vurdering av søkerens økonomi", "Barnetrygden er faktisk behovsprøvd, men bare for husholdninger med høy inntekt", "Beløpet i barnetrygden er det samme uansett hvor mange barn husholdningen har", "Barnetrygden er en kommunal ordning og kan derfor ikke være behovsprøvd"],
      explanation: "Behovsprøving betyr at inntekt og formue avgjør retten. At beløpet varierer med et gruppekriterium som antall barn, gjør ikke ytelsen behovsprøvd — dette er forvekslingen mellom retten og beløpet.",
    },
    {
      question: "Hvorfor er kostnadsargumentet mot universelle ordninger fortsatt gyldig, selv når nettokostnaden trekkes inn?",
      options: ["Fordi bruttokostnaden avgjør hvor stort budsjettet må være og hvor mye som må finansieres", "Fordi skatt på ytelser i praksis aldri kreves inn fra mottakere med høy inntekt", "Fordi nettokostnaden bare kan beregnes for tjenester og ikke for overføringer", "Fordi universelle ordninger som regel har høyere administrasjonskostnad enn behovsprøvde ordninger"],
      explanation: "Skattlegging av en ytelse i et progressivt system reduserer den reelle kostnaden, men pengene må likevel bevilges og finansieres i full bredde. Argumentet nyanseres altså, det oppheves ikke — og administrasjonen er tvert imot billigere i universelle ordninger.",
    },
  ],
  'stv1400-5-3': [
    {
      question: "Hva er bærekraftsutfordringen for velferdsstaten?",
      options: ["At avstanden mellom framtidige utgifter og inntekter vokser med dagens innretning", "At oppslutningen om ordningene faller blant dem som betaler mest inn", "At tjenestene ikke holder god nok kvalitet i alle deler av landet", "At de offentlige utgiftene er høyere enn i sammenlignbare naboland i dag"],
      explanation: "Utfordringen er et regnestykke over tid: utgiftene vokser med andelen eldre, mens inntektene avhenger av hvor mange som er i arbeid. Fallende oppslutning er legitimitetsutfordringen, som er noe annet — et system kan være finansierbart og likevel miste støtte.",
    },
    {
      question: "Hva er legitimitetsutfordringen?",
      options: ["At oppslutningen kan svikte hos dem som betaler mer inn enn de tar ut", "At framtidige utgifter kan overstige framtidige inntekter over tid", "At ordningene kan bli kjent ugyldige fordi de strider mot lovverket", "At mottakerne kan komme til å kreve høyere ytelser enn budsjettet tåler"],
      explanation: "Legitimitet gjelder oppslutningen om ordningene som system, og den varierer med innretningen: brede ordninger har flere forsvarere enn smale. Regnestykket mellom utgifter og inntekter er bærekraftsutfordringen, og de to kan bevege seg i hver sin retning.",
    },
    {
      question: "Hva er forsørgerbrøken?",
      options: ["Forholdet mellom antallet i yrkesaktiv alder og antallet utenfor", "Forholdet mellom antallet i arbeid og antallet som mottar en ytelse", "Forholdet mellom offentlige utgifter og samlet verdiskaping i landet", "Forholdet mellom skatteinntekter og utbetalinger fra folketrygden"],
      explanation: "Brøken teller alder, ikke arbeid: den som er i yrkesaktiv alder uten å være i arbeid, teller på riktig side likevel. Derfor er sysselsettingsandelen det mer treffende målet når finansieringen skal vurderes.",
    },
    {
      question: "Hvorfor er sysselsettingsandelen et mer treffende mål enn forsørgerbrøken?",
      options: ["Fordi den måler hvor mange som faktisk er i arbeid, ikke bare hvor mange som har alderen", "Fordi den oppdateres oftere enn befolkningsstatistikken gjør i Norge", "Fordi den også fanger inn hvor mange timer hver enkelt av dem i arbeid faktisk arbeider", "Fordi den er den eneste indikatoren som brukes i offentlige framskrivninger"],
      explanation: "Forsørgerbrøken er demografi, mens sysselsettingsandelen fanger atferd og arbeidsmarked — og bare den siste kan politikken påvirke på kort sikt. Antall arbeidede timer er dessuten en egen størrelse, siden mye deltid gir lavere skattegrunnlag ved samme sysselsettingsandel.",
    },
    {
      question: "Hva er Perspektivmeldingen?",
      options: ["Regjeringens melding til Stortinget om langsiktige utfordringer for offentlige finanser", "Finansdepartementets årlige anslag over neste års skatteinntekter og utgifter", "Stortingets egen utredning om hvordan velferdsordningene bør innrettes i årene framover", "En rapport fra Riksrevisjonen om måloppnåelsen i statlige velferdsordninger"],
      explanation: "Meldingen framskriver utgifter og inntekter tiår fram i tid under gitte forutsetninger og legges fram med jevne mellomrom. Den er det sentrale norske holdepunktet for påstanden om at det finnes et langsiktig finansieringsgap.",
    },
    {
      question: "Hva er forskjellen på en framskrivning og en prognose?",
      options: ["En framskrivning viser hva som følger av gitte forutsetninger, ikke hva som vil skje", "En framskrivning gjelder offentlige finanser, mens en prognose gjelder befolkningsutviklingen", "En framskrivning lages av departementene, mens en prognose lages av forskere", "En framskrivning gjelder tiår fram i tid, mens en prognose gjelder neste budsjettår"],
      explanation: "Skillet er avgjørende i drøftingen: endres forutsetningen om sysselsetting, levealder eller produktivitet, endres bildet. Å behandle en framskrivning som en profeti er en av de vanligste feilene i dette stoffet.",
    },
    {
      question: "Hva er arbeidslinja?",
      options: ["Prinsippet om at ordninger skal utformes slik at det lønner seg å være i arbeid", "Prinsippet om at alle ytelser skal utbetales gjennom arbeidsgiveren til mottakeren", "Prinsippet om at ledige må ta imot ethvert arbeid de blir tilbudt av det offentlige", "Prinsippet om at ytelsesnivået skal følge den generelle lønnsutviklingen i arbeidslivet"],
      explanation: "Arbeidslinja gir seg utslag i aktivitetskrav, oppfølging og i hvordan ytelser avkortes mot arbeidsinntekt. Den kan gjennomføres både ved å redusere ytelser og ved å styrke tiltak som gjør arbeid mulig, og de to variantene har svært ulike fordelingsvirkninger.",
    },
    {
      question: "Hva skiller aktiv arbeidsmarkedspolitikk fra aktivitetskrav?",
      options: ["Det første er noe det offentlige tilbyr, det andre er noe det krever", "Det første gjelder unge mottakere, det andre gjelder mottakere over en viss alder", "Det første er statlig, mens det andre fastsettes av den enkelte kommunen", "Det første gjelder ytelser i penger, det andre gjelder tjenester og oppfølging"],
      explanation: "Kvalifisering, lønnstilskudd og oppfølging er tilbud som koster på kort sikt og begrunnes med høyere sysselsetting senere. Aktivitetskrav er vilkår for å motta ytelsen, og et system kan ha mye av det ene og lite av det andre.",
    },
    {
      question: "Hva innebærer levealdersjustering av alderspensjonen?",
      options: ["At den årlige pensjonen justeres etter hvor lenge årskullet forventes å leve", "At aldersgrensen for å kunne ta ut pensjon heves for alle nye årskull", "At pensjonen reguleres årlig i takt med lønnsveksten i arbeidslivet", "At pensjonen avkortes mot arbeidsinntekt for dem som fortsetter i jobb"],
      explanation: "Lever et kull lenger, blir den årlige utbetalingen lavere ved et gitt uttakstidspunkt, med mindre man står lenger i arbeid. Det er noe annet enn å heve pensjonsalderen, som flytter grensen for når uttak i det hele tatt er mulig.",
    },
    {
      question: "Hvorfor er levealdersjusteringen et sterkt belegg i bærekraftsdrøftingen?",
      options: ["Fordi den viser at modellen er tilpasset demografien innenfor den universelle innretningen", "Fordi den viser at pensjonsutgiftene er den eneste utgiftsposten som vokser med aldringen i samfunnet", "Fordi den viser at Norge har gått bort fra det nordiske velferdsregimet over tid", "Fordi den viser at framskrivninger av offentlige finanser som regel slår til"],
      explanation: "Grepet knytter ytelsene direkte til den demografiske utviklingen, og det skjedde som en justering av nivåer og vilkår — ikke som et skifte av modell. Det er derfor det viktigste argumentet for at «press» ikke er det samme som «uholdbar».",
    },
    {
      question: "Hvilket av de tre grepene mot finansieringsgapet virker på begge sider av regnestykket?",
      options: ["Å øke sysselsettingen, siden det både gir høyere inntekter og lavere utgifter", "Å øke skattenivået, siden det både gir inntekter og demper forbruket", "Å dempe utgiftsveksten, siden det både sparer penger og øker tilliten", "Å øke avkastningen på statens finansielle formue, siden det kan finansiere nye tiltak"],
      explanation: "Flere i arbeid betyr både flere som betaler skatt og færre som mottar ytelser. De to andre hovedgrepene — høyere inntekter og dempet utgiftsvekst — virker hver for seg på én side av regnestykket.",
    },
    {
      question: "Hva er velferdsmåling?",
      options: ["Spørsmålet om hvordan man avgjør hvor godt folk har det, og dermed om politikken virker", "Spørsmålet om hvor stor andel av befolkningen som over tid lever under lavinntektsgrensen", "Spørsmålet om hvor mye det offentlige bruker på velferdsordninger hvert år", "Spørsmålet om hvor treffsikre de behovsprøvde ordningene er per utbetalt krone"],
      explanation: "Velferd er ikke én størrelse: inntekt, helse, bolig, utdanning og opplevd livskvalitet henger sammen uten å peke samme vei. Fattigdomsmåling gjelder nedre del av fordelingen og er dermed noe smalere enn velferdsmåling.",
    },
    {
      question: "Hva kjennetegner objektive mål på velferd?",
      options: ["De bygger på registrerbare størrelser og krever ikke at noen spørres", "De bygger på hva folk selv oppgir om egen tilfredshet og livskvalitet", "De bygger på hvor mye det offentlige bevilger til den enkelte tjenesten", "De bygger på sammenligninger mot andre land med tilsvarende inntektsnivå"],
      explanation: "Inntekt, boforhold, helse og arbeidsmarkedstilknytning kan måles utenfra og sammenlignes over tid. Svakheten er at de ikke fanger hvordan situasjonen oppleves, og at valget av hva som telles, i seg selv er et verdivalg.",
    },
    {
      question: "Hva er den viktigste svakheten ved subjektive mål på velferd?",
      options: ["De påvirkes av hva folk forventer og av hvem de sammenligner seg med", "De kan ikke sammenlignes mellom ulike grupper i samme befolkning", "De krever registerdata som ikke er tilgjengelige for forskere i Norge", "De måler bare økonomiske forhold og ikke helse eller sosial deltakelse"],
      explanation: "En person som har tilpasset seg en vanskelig situasjon, kan oppgi høy tilfredshet, og derfor egner målene seg dårlig alene som grunnlag for politikk. Det gjør dem ikke upålitelige — de måler noe annet enn de objektive målene.",
    },
    {
      question: "Hva skiller et ressursmål fra et resultatmål?",
      options: ["Ressursmålet teller hva som settes inn, resultatmålet hva som kommer ut", "Ressursmålet gjelder tjenester, mens resultatmålet gjelder pengeoverføringer", "Ressursmålet brukes av staten, mens resultatmålet brukes av kommunene", "Ressursmålet måles i kroner, mens resultatmålet måles i antall mottakere"],
      explanation: "Bevilgninger, ansatte og plasser er noe annet enn helse, læring og deltakelse, og debatten føres ofte i ressursmål fordi de er lettere å telle. Merk at et resultatmål heller ikke er et effektmål: resultatet kan skyldes andre forhold enn tjenesten.",
    },
    {
      question: "Hva er måleproblemet i velferdsforskningen?",
      options: ["At valget av indikator påvirker konklusjonen, og at valget ikke kan avgjøres av dataene", "At tallene som samles inn om levekår, som regel har for stor statistisk usikkerhet", "At det ikke finnes registerdata om levekår og livskvalitet i Norge", "At ulike land bruker ulike definisjoner av velferd og derfor ikke kan sammenlignes"],
      explanation: "Måler du velferd som inntekt, får du ett bilde; måler du levekår eller opplevd livskvalitet, får du et annet. Dette er noe annet enn måleusikkerhet, som gjelder presisjonen i et tall du allerede har valgt å se på.",
    },
    {
      question: "Hvorfor undervurderer inntektsbaserte sammenligninger utjevningen i Norge?",
      options: ["Fordi verdien av offentlige tjenester ikke inngår i inntektsstatistikken", "Fordi norske husholdninger har høyere gjeld enn husholdninger i andre land", "Fordi inntektsstatistikken ikke omfatter mottakere av ytelser fra folketrygden", "Fordi skatt på formue ikke regnes med når inntekten etter skatt beregnes"],
      explanation: "Gratis grunnskole, sterkt subsidiert barnehage og billige helse- og omsorgstjenester endrer ikke inntekten, men utgjør mest for dem som har minst. I land der mer gis som kontanter, fanges tilsvarende omfordeling opp av inntektstallene.",
    },
    {
      question: "Hva er forskjellen på å si at velferdsmodellen er «under press» og at den er «uholdbar»?",
      options: ["Det første følger av framskrivningene, det andre forutsetter at gapet ikke kan lukkes", "Det første gjelder tjenestene, mens det andre gjelder pengeoverføringene", "Det første er en politisk vurdering, mens det andre er en rent faglig konklusjon om systemet", "Det første gjelder på kort sikt, mens det andre gjelder på lang sikt"],
      explanation: "At avstanden mellom utgifts- og inntektsutviklingen vokser med dagens innretning, er dokumentert. At den ikke lar seg lukke, er en tilleggspåstand som avhenger av hvilke grep som tas og hvordan sysselsettingen utvikler seg.",
    },
    {
      question: "Hvordan bør innvandringens betydning for velferdsmodellen behandles faglig?",
      options: ["Som et spørsmål om sysselsetting og botid, ikke om grupper som sådan", "Som et spørsmål om hvor mange som kommer i løpet av et gitt år", "Som et spørsmål om hvilke ytelser som bør forbeholdes dem som er født i landet", "Som et spørsmål som ligger utenfor det statsvitenskapelige fagfeltet"],
      explanation: "Mekanismen er den samme uansett hvem det gjelder: en modell finansiert av yrkesdeltakelse er følsom for sysselsettingsnivået i alle grupper, samtidig som arbeidsinnvandring tilfører arbeidskraft og demper aldringen. Dette er et politisk omstridt spørsmål, og en besvarelse skal beskrive posisjonene uten å tilskrive grupper motiver.",
    },
    {
      question: "Hvilket spørsmål er Rothstein knyttet til i pensumlista for dette temaet?",
      options: ["Hvordan velferd skal måles, og hvorfor målestokken påvirker konklusjonen", "Hvordan velferdsregimene skiller seg fra hverandre i internasjonal sammenligning", "Hvordan kommunene finansierer tjenestene de er pålagt å produsere", "Hvordan behovsprøvde ytelser bør avkortes mot arbeidsinntekt"],
      explanation: "Han er avsender for at målingen er et faglig og ikke bare et teknisk problem. Typologien tilhører Esping-Andersen, finansieringen av kommunale tjenester tilhører Fiva mfl., og avkortingsspørsmålet hører til velferdsstatslitteraturen.",
    },
    {
      question: "En kandidat lister aldring, innvandring og økonomi som utfordringer og går videre til konklusjonen. Hvilken feil er dette?",
      options: ["Feil #1 — utfordringene er listet, ikke veid mot hverandre i en drøfting", "Feil #4 — svaret bygger på teori uten norsk empirisk forankring", "Feil #7 — bare det ene leddet i en sammenligning er behandlet i svaret her", "Feil #11 — faktagrunnlaget i svaret er utdatert og ikke oppdatert"],
      explanation: "En liste er ikke en drøfting, uansett hvor mange punkter den har. Kravet er at posisjonene møter hverandre — at det dokumenterte gapet møtes av spørsmålet om hvor følsomt det er for sysselsettingsforutsetningen.",
    },
    {
      question: "En kandidat skriver at «Perspektivmeldingen viser at velferdsstaten vil kollapse». Hva er galt?",
      options: ["En framskrivning viser konsekvensen av forutsetninger, ikke hva som kommer til å skje", "Perspektivmeldingen handler om næringspolitikk og ikke om velferdsordningenes framtid", "Perspektivmeldingen utarbeides av Stortinget og har ingen faglig status", "Framskrivningene i meldingen dekker bare de nærmeste to til tre årene"],
      explanation: "Meldingen framskriver utgifter og inntekter tiår fram under gitte antakelser, og den mest avgjørende antakelsen — sysselsettingsandelen — er nettopp den politikken kan påvirke. Å lese den som en profeti er å gå lenger enn grunnlaget.",
    },
  ],
  'stv1400-6-1': [
    {
      question: "Hva er den demokratiske styringskjeden?",
      options: ["Linjen av fullmakt og ansvar fra folket via Storting og regjering til forvaltningen", "Kommandolinjen fra departementet ned til den enkelte saksbehandleren", "Rekkefølgen en sak følger fra forslag til vedtak i Stortingets komitéarbeid", "Ordningen der berørte interesser høres før forvaltningen treffer en avgjørelse"],
      explanation: "Kjeden begynner i valglokalet og ender hos den som treffer avgjørelsen. Forvaltningshierarkiet er bare kjedens nederste ledd, saksgangen i Stortinget er en prosedyre inne i ett ledd, og høringsordningen er en kanal som går utenom kjeden.",
    },
    {
      question: "Hvem er avsenderen for begrepet den demokratiske styringskjeden?",
      options: ["Johan P. Olsen, som begrepet kobles til i faglitteraturen", "Max Weber, som formulerte det i sin analyse av legal-rasjonell autoritet", "Dahl Jacobsen, som formulerte det sammen med de tre verdiene i embetsrollen", "Esping-Andersen, som formulerte det i sammenligningen av velferdsregimer"],
      explanation: "Styringskjeden er Johan P. Olsens begrep. Weber eier idealtypen for byråkratiet, Dahl Jacobsen de tre verdiene i embetsrollen og Esping-Andersen velferdsregimene.",
    },
    {
      question: "Hvilke fire ledd har styringskjeden, i riktig rekkefølge?",
      options: ["Folket, Stortinget, regjeringen, forvaltningen", "Folket, regjeringen, Stortinget, forvaltningen", "Stortinget, regjeringen, kommunene, forvaltningen", "Folket, partiene, Stortinget, statsforvaltningen"],
      explanation: "Rekkefølgen speiler delegasjonens vei nedover. Regjeringen kommer etter Stortinget fordi den er utgått av det, kommunene er ikke et ledd i den statlige kjeden, og partiene er ikke et eget ledd i modellen.",
    },
    {
      question: "Hva er delegasjonsstrømmen i styringskjeden?",
      options: ["At hvert ledd gir det neste fullmakt til å handle på sine vegne", "At hvert ledd rapporterer om resultatene sine til leddet over seg", "At hvert ledd må svare for hvordan fullmakten faktisk har blitt brukt", "At hvert ledd undersøker hva leddet under har foretatt seg av vedtak"],
      explanation: "Delegasjonen går nedover og gir fullmakt. Rapportering, ansvar og kontroll hører alle til motstrømmen oppover, og kjeden holder bare når begge strømmene går gjennom de samme punktene.",
    },
    {
      question: "Hva er forskjellen mellom ansvar og kontroll i styringskjeden?",
      options: ["Ansvar er plikten til å svare for noe, kontroll er midlene til å undersøke det", "Ansvar gjelder statsråden alene, mens kontroll gjelder embetsverket under statsråden", "Ansvar er rettslig og følger av loven, kontroll er politisk og følger av flertallet", "Ansvar virker før handlingen er utført, kontroll virker mens den pågår"],
      explanation: "Ansvaret er plikten til å stå til rette, kontrollen er undersøkelsesmidlene. Begge deler kan ramme både politisk ledelse og apparatet, begge har politiske og rettslige former, og begge virker etter at handlingen er utført.",
    },
    {
      question: "Hva kjennetegner en prinsipal–agent-relasjon?",
      options: ["En part handler på en annens vegne og har egne interesser og mer informasjon", "To organer er sidestilte og kan begrense hverandres myndighet gjensidig", "Et overordnet organ kan endre et underordnet organs vedtak i etterkant", "En skriftlig avtale binder to parter til et felles program for en periode"],
      explanation: "Kjernen er at agenten handler for prinsipalen og samtidig vet mer om arbeidet. Gjensidig begrensning beskriver maktfordeling, endring i etterkant er omgjøringsmyndighet, og den bindende avtalen er kontraktsparlamentarisme.",
    },
    {
      question: "Hvorfor gjentar prinsipal–agent-relasjonen seg i hvert ledd av kjeden?",
      options: ["Fordi hvert ledd overlater handling til et ledd som vet mer om den enn det gjør", "Fordi hvert ledd er rettslig underordnet det leddet som ligger over det", "Fordi hvert ledd er valgt av leddet over seg og kan avsettes av det samme leddet igjen", "Fordi hvert ledd har budsjettansvar overfor Stortinget for sin egen virksomhet"],
      explanation: "Relasjonen oppstår av delegasjon kombinert med informasjonsovertak, og begge deler finnes i alle fire ledd. Rettslig underordning, valg og budsjettansvar gjelder ikke likt gjennom hele kjeden.",
    },
    {
      question: "Hva er informasjonsasymmetri?",
      options: ["At agenten vet mer om sitt eget arbeid enn prinsipalen som ga fullmakten", "At forvaltningen holder opplysninger tilbake fra den politiske ledelsen", "At innbyggerne har innsynsrett mens forvaltningen har taushetsplikt", "At departementene har ulik tilgang til regjeringens interne dokumenter"],
      explanation: "Asymmetrien oppstår av arbeidsdelingen selv og består med full åpenhet: prinsipalen har verken tid eller kompetanse til å sette seg inn i alt. Den er derfor ikke det samme som hemmelighold eller regler om innsyn.",
    },
    {
      question: "Hva er forskjellen på delegasjon og avståelse?",
      options: ["Ved delegasjon beholdes ansvaret, og myndigheten kan som hovedregel tas tilbake", "Ved delegasjon gis myndigheten ved lov, ved avståelse gis den ved forskrift", "Ved delegasjon overføres oppgaver, ved avståelse overføres bare budsjettmidler", "Ved delegasjon skjer overføringen innad i staten, ved avståelse til kommunene"],
      explanation: "Det avgjørende er om myndigheten kan hentes tilbake og om ansvaret følger med. Hjemmelsform, hva som overføres og hvem det overføres til er andre spørsmål og avgjør ikke skillet.",
    },
    {
      question: "Hva menes med at styringskjeden er en idealmodell?",
      options: ["Den er en normativ konstruksjon virkeligheten måles mot, ikke en beskrivelse", "Den er en forenkling som i hovedsak stemmer med hvordan Norge faktisk styres", "Den beskriver den ordningen faglitteraturen anbefaler for et moderne demokrati", "Den gjelder bare i parlamentariske systemer og ikke i presidentsystemer"],
      explanation: "Modellen brukes som måleinstrument, akkurat som Webers idealtype: verdien ligger i at avvikene blir synlige og lar seg navngi. Den er verken en tilnærmet beskrivelse, en anbefaling eller en ordning avgrenset til visse land.",
    },
    {
      question: "Hvordan endrer delegasjonen karakter nedover i styringskjeden?",
      options: ["Den blir mer presis: fra et grovt valgresultat til et detaljert tildelingsbrev", "Den blir mer generell: fra bindende lovvedtak til helt overordnede resultatmål i etaten", "Den blir mer rettslig: fra politiske signaler til bindende enkeltvedtak", "Den blir mer kortsiktig: fra fireårige mandater til løpende styringsdialog"],
      explanation: "Et valgresultat er et grovt retningssignal, mens tildelingsbrevet fastsetter mål, resultatkrav og rapportering for året. Presisjonen øker altså nedover, samtidig som kontrollen blir grovere oppover.",
    },
    {
      question: "Hva er den viktigste svakheten i koblingen mellom folket og Stortinget?",
      options: ["Stemmen er udelelig og gis sjelden, så velgeren kan ikke skille mellom saker", "Representantene kan kalles tilbake av velgerne midt i en valgperiode", "Valgordningen gir ikke representantene et rettslig bindende mandat fra velgerne", "Velgerne har ikke innsyn i hva representantene stemmer i den enkelte saken"],
      explanation: "Velgeren har ett virkemiddel, det virker hvert fjerde år, og det treffer en hel liste på én gang. Tilbakekalling finnes ikke, voteringene er offentlige, og at mandatet ikke er rettslig bindende er en følge av representativt demokrati, ikke svakheten selv.",
    },
    {
      question: "Hvilke to roller har Stortinget samtidig i styringskjeden?",
      options: ["Agent for velgerne og prinsipal for regjeringen", "Prinsipal for velgerne og agent for regjeringen", "Agent for regjeringen og prinsipal for forvaltningen", "Prinsipal for både regjeringen og for domstolene"],
      explanation: "Stortinget mottar fullmakt fra velgerne og gir fullmakt videre til regjeringen. Retningen er altså agent oppover og prinsipal nedover; domstolene inngår ikke i denne delegasjonslinjen.",
    },
    {
      question: "Hva er Stortingets egen svakhet som prinsipal for regjeringen?",
      options: ["Det er avhengig av agentens kunnskap, siden det meste utredes i departementene", "Det mangler rettslige virkemidler til å felle en regjering det ikke har tillit til", "Det kan ikke behandle saker som regjeringen ikke har lagt fram for det", "Det kan ikke bevilge penger uten at regjeringen har foreslått bevilgningen"],
      explanation: "Prinsipalen må bygge kontrollen på informasjon fra den som skal kontrolleres. Mistillit er et fullt virksomt virkemiddel, representantforslag gir egen initiativrett, og bevilgningsmyndigheten er Stortingets egen.",
    },
    {
      question: "Hvorfor er regjeringen både agent og prinsipal?",
      options: ["Den er agent for Stortinget og samtidig prinsipal for forvaltningen under seg", "Den er agent for velgerne selv og samtidig prinsipal for Stortingets faste komiteer", "Den er agent for forvaltningen og samtidig prinsipal for kommunesektoren", "Den er agent for Kongen i statsråd og samtidig prinsipal for domstolene"],
      explanation: "Regjeringen står i midten av kjeden og har derfor begge rollene. Mange svake besvarelser behandler den bare som det ene og mister dermed halve modellen.",
    },
    {
      question: "Hva er ministeransvarets funksjon i styringskjeden?",
      options: ["Det kobler forvaltningsleddet til regjeringsleddet og gir ansvaret én adresse", "Det gir statsråden rettslig immunitet for avgjørelser truffet i etatene", "Det plasserer ansvaret for enkeltvedtak hos den saksbehandleren som traff dem", "Det gjør departementsråden ansvarlig for det faglige arbeidet i departementet"],
      explanation: "Uten ministeransvaret ville ansvarsstrømmen stoppet ved forvaltningens topp. Statsråden svarer for feltet, også for det hen ikke visste om, og det er derfor Stortinget kaller statsråden og ikke saksbehandleren.",
    },
    {
      question: "Hva er parlamentarisme?",
      options: ["At regjeringen er utgått av forsamlingen og må gå av ved mistillit", "At den utøvende lederen velges i eget valg og sitter en fast periode", "At lovgivende, utøvende og dømmende makt ligger i atskilte organer", "At nasjonalforsamlingen velges direkte av folket i frie og hemmelige valg"],
      explanation: "Parlamentarismen handler om hvordan regjeringen holdes ved makten. Eget valg av den utøvende lederen beskriver presidentsystemet, atskilte organer beskriver maktfordeling, og direkte valg til forsamlingen finnes i begge systemer.",
    },
    {
      question: "Hva er den viktigste konsekvensen av parlamentarisme for styringskjeden?",
      options: ["Fullmakt og ansvar går gjennom samme punkt, slik at kjeden blir lineær", "Forvaltningen får to prinsipaler som kan ville forskjellige ting samtidig", "Kontrollen skjer på tvers mellom likestilte organer i stedet for oppover", "Regjeringen får et selvstendig mandat ved siden av forsamlingens mandat"],
      explanation: "Stortinget både bærer og kontrollerer regjeringen, og det gir én entydig ansvarslinje. De tre andre beskrivelsene gjelder maktfordelingsmodellen, der kjeden i stedet forgrener seg.",
    },
    {
      question: "Hva innebærer negativ parlamentarisme?",
      options: ["En regjering kan sitte så lenge et flertall ikke uttrykker mistillit mot den", "En regjering må ha uttrykkelig støtte fra et flertall for å kunne utnevnes", "En regjering må gå av dersom den taper en avstemning om statsbudsjettet", "Et mistillitsforslag kan bare rettes mot en enkelt statsråd, ikke mot regjeringen"],
      explanation: "Terskelen er fravær av et flertall imot, ikke tilstedeværelse av et flertall for. Kravet om uttrykkelig støtte beskriver positiv parlamentarisme, budsjettnederlag utløser ikke automatisk avgang, og mistillit kan rettes mot regjeringen samlet.",
    },
    {
      question: "Hva skiller retten til å sitte fra evnen til å styre?",
      options: ["Retten til å sitte krever bare fravær av mistillit, styringen krever flertall i hver sak", "Retten til å sitte krever flertall i salen, styringen krever bare regjeringens eget vedtak", "Retten til å sitte avgjøres av velgerne, mens styringsevnen avgjøres av forvaltningen", "Retten til å sitte følger av Grunnloven, mens styringsevnen følger av statsbudsjettet"],
      explanation: "Skillet er selve grunnen til at mindretallsregjering er en normal styreform i Norge: terskelen for å bli sittende er lav, mens hvert lov- og budsjettvedtak krever flertall.",
    },
    {
      question: "Hva kjennetegner et presidentsystem sammenlignet med parlamentarisme?",
      options: ["Den utøvende lederen har eget mandat og kan ikke felles ved alminnelig mistillit", "Den utøvende lederen utnevnes av forsamlingen, men kan ikke avsettes av den", "Forsamlingen har lovgivende og utøvende myndighet samlet i ett og samme organ", "Regjeringen kan oppløse forsamlingen og skrive ut nyvalg ved politisk konflikt"],
      explanation: "Det selvstendige mandatet er kjernen, og derfor skjer kontrollen på tvers mellom likestilte organer. Oppløsningsrett finnes i enkelte parlamentariske systemer, og maktfordeling er det motsatte av å samle myndighet i ett organ.",
    },
    {
      question: "Hva innebærer manglende oppløsningsrett i Norge?",
      options: ["Stortinget sitter perioden ut, slik at nyvalg ikke kan skrives ut", "En regjering kan ikke gå av før valgperioden er omme", "En statsråd kan ikke fratre uten Stortingets uttrykkelige samtykke", "Stortinget kan ikke endre komitésammensetningen i løpet av perioden"],
      explanation: "Det er nyvalg som er utelukket, ikke regjeringsskifte: en ny regjering dannes ut fra det samme stortinget. Nettopp derfor kan regjeringen ikke true seg til gjennomslag.",
    },
    {
      question: "Hva gjør manglende oppløsningsrett med maktforholdet Storting–regjering?",
      options: ["Den fjerner en trussel fra regjeringen og gjør forholdet mer forhandlingspreget", "Den gir regjeringen et pressmiddel overfor et storting som ikke vil samarbeide", "Den gjør at en regjering som taper en avstemning, automatisk må gå av", "Den binder representantene til partiprogrammet gjennom hele valgperioden"],
      explanation: "Regjeringen kan ikke svare på en fastlåst situasjon med å sende representantene ut i valgkamp, bare med å gå av. Det gjør det billigere for Stortinget å presse fram endringer.",
    },
    {
      question: "Hva er forskjellen på en svekkelse og et brudd i styringskjeden?",
      options: ["Ved svekkelse er koblingen mindre presis, ved brudd finnes den ikke lenger", "Ved svekkelse er koblingen borte i ett ledd, ved brudd i flere ledd samtidig", "Ved svekkelse er endringen utilsiktet, ved brudd er den vedtatt av Stortinget", "Ved svekkelse gjelder det forvaltningen, ved brudd gjelder det regjeringen"],
      explanation: "Graderingen går fra kanalskifte via reell svekkelse til brudd, og de norske eksemplene havner stort sett i den mildeste kategorien. Antall ledd, hvem det gjelder og om endringen var tilsiktet, avgjør ikke skillet.",
    },
    {
      question: "Hva gjør ytre fristilling med styringskjeden?",
      options: ["Statsrådens kanal skifter fra instruksjon til eierstyring, mens ansvaret består", "Ansvaret overfor Stortinget følger med over til selskapets styre og ledelse", "Instruksjonsmyndigheten utvides, siden staten nå også er eier av virksomheten", "Virksomheten går ut av staten og er ikke lenger underlagt politisk styring"],
      explanation: "Kanalen skifter, ansvaret blir liggende — det er slik ansvar og redskap skiller lag. Eierstyring er fortsatt styring, den virker bare på kursen og ikke på den enkelte avgjørelsen.",
    },
    {
      question: "Hva har svekkelsene i styringskjeden til felles?",
      options: ["Fullmakten flyttes mens ansvaret blir liggende — ansvar og redskap skiller lag", "De er utilsiktede virkninger av reformer som hadde helt andre formål", "De opptrer alle sammen i det nederste leddet, mellom regjeringen og forvaltningen selv", "De har fjernet ett av kjedens fire ledd og dermed brutt linjen helt"],
      explanation: "Fellesnevneren er gapet mellom ansvar og redskap. Svekkelsene er som regel politisk vedtatt med begrunnelse, de opptrer i flere ledd, og leddene er der fortsatt.",
    },
    {
      question: "Hvordan svekker en dynamisk internasjonal avtale kjedens lovgivningsledd?",
      options: ["Vedtaket treffes i Stortinget, men innholdet er i stor grad utformet på forhånd", "Vedtaket treffes av et internasjonalt organ og gjelder direkte i Norge uten lovvedtak", "Stortinget mister retten til å gi lover på de områdene avtalen dekker", "Regjeringen kan sette norsk lov til side når den strider mot avtalen"],
      explanation: "Skillet mellom formell og reell suverenitetsavståelse er verktøyet her: leddet er intakt, men handlingsrommet er smalt. Lovgivningsmyndigheten består, og regelverket gjennomføres i norsk rett av Stortinget selv.",
    },
    {
      question: "Hva kjennetegner kanalene som går utenom styringskjeden?",
      options: ["De gir reell innflytelse, men har ingen ansvarsmekanisme overfor velgerne", "De er ulovlige former for påvirkning som forvaltningen skal avvise", "De er de samme som delegasjonsstrømmen, bare på et lavere forvaltningsnivå", "De virker bare i kommunene og ikke overfor statlige forvaltningsorganer"],
      explanation: "Høringer, organisasjonspåvirkning og medvirkningsprosesser er legitime, men de deltakende interessene kan ikke stilles til ansvar overfor velgerne. Det er derfor kjeden ikke er hele demokratiet, bare den formelle ansvarslinjen.",
    },
  ],
  'stv1400-6-2': [
    {
      question: "Hvilke er Stortingets tre hovedoppgaver?",
      options: ["Å bevilge, å gi lover og å kontrollere regjeringen og forvaltningen", "Å utnevne regjeringen, å vedta budsjettet og å avgjøre klagesaker", "Å gi lover, å utnevne embetsmenn og å føre tilsyn med kommunesektoren", "Å bevilge, å inngå traktater og å oppnevne ledelsen i Riksrevisjonen"],
      explanation: "De tre er den bevilgende, den lovgivende og den kontrollerende myndigheten. Embetsutnevnelser og traktater ligger hos regjeringen, og klagesaker avgjøres i forvaltningen.",
    },
    {
      question: "Hvilken av Stortingets oppgaver hører til kontrollstrømmen i styringskjeden?",
      options: ["Den kontrollerende, fordi den ser bakover på hvordan fullmakten er brukt", "Den bevilgende, fordi budsjettet binder forvaltningen til bestemte formål", "Den lovgivende, fordi loven setter grenser for hva forvaltningen kan gjøre", "Alle tre, siden hver av dem innebærer at regjeringen holdes ansvarlig"],
      explanation: "Bevilgning og lov er delegasjon nedover og virker framover. Bare kontrollen ser bakover på hva fullmakten faktisk ble brukt til.",
    },
    {
      question: "Hva innebærer Stortingets bevilgende myndighet?",
      options: ["Ingen statlige midler kan brukes uten bevilgning, og den er bundet til sitt formål", "Stortinget godkjenner regjeringens regnskaper etter at budsjettåret er avsluttet", "Stortinget fastsetter lønnsnivået for statsansatte og for politisk ledelse", "Stortinget avgjør hvilke tilskudd den enkelte søkeren skal få innvilget"],
      explanation: "Bevilgningen er den mest ubetingede fullmakten Stortinget har, men i praksis bundet av at det meste av budsjettet er lovbundet og videreført. Regnskapskontroll er noe annet, og enkeltvedtak treffes i forvaltningen.",
    },
    {
      question: "Hvordan behandles statsbudsjettet i Stortinget?",
      options: ["Først vedtas rammene for hvert utgiftsområde, deretter fordeler fagkomiteene innenfor", "Først fordeler fagkomiteene alle midlene, deretter vedtas den samlede rammen", "Hver fagkomité vedtar sitt eget budsjett uten at en samlet ramme fastsettes", "Finanskomiteen vedtar hele budsjettet alene, uten behandling i fagkomiteene"],
      explanation: "Rekkefølgen binder helheten før detaljene og gjør det vanskelig å øke ett formål uten å ta fra et annet. Det er ikke en teknikalitet, men en styringsmekanisme.",
    },
    {
      question: "Hvorfor sies initiativet i lovgivningen å ligge hos regjeringen?",
      options: ["De aller fleste lovforslag utarbeides i departementene og fremmes som proposisjoner", "Stortinget kan bare vedta lovforslag som regjeringen har gitt sin tilslutning til", "Regjeringen kan gi forskrifter med samme rang som lov uten hjemmel i lov", "Stortinget kan ikke endre et lovforslag etter at det er lagt fram for det"],
      explanation: "Den som formulerer utgangspunktet, setter rammen for debatten, selv om vedtaksmyndigheten ligger hos Stortinget. Stortinget kan både endre og forkaste, og forskrift krever alltid hjemmel i lov.",
    },
    {
      question: "Hva kjennetegner en rammelov?",
      options: ["Den fastsetter formål og hovedregler og overlater utfyllingen til forskrift", "Den gjelder for en avgrenset periode og må fornyes av Stortinget", "Den gir kommunene adgang til å fastsette egne regler på sitt område", "Den vedtas uten forutgående høring blant de berørte fagmiljøene"],
      explanation: "Rammeloven flytter innhold ned til forvaltningsleddet gjennom forskriftshjemmel. Forskriften er likevel ikke noe forvaltningen finner på selv: den krever hjemmel fra Stortinget, og det er delegasjon, ikke avståelse.",
    },
    {
      question: "Hva er særegent ved kontroll- og konstitusjonskomiteen?",
      options: ["Den kan ta opp saker på eget initiativ, uten at regjeringen har lagt noe fram", "Den avgjør rettslig om en statsråd har brutt sine konstitusjonelle plikter i embetet", "Den er den eneste komiteen som behandler proposisjoner fra regjeringen", "Den settes sammen av representanter fra regjeringspartiene alene"],
      explanation: "Initiativretten er det eneste stedet prinsipalen kan sette dagsorden uten agentens medvirkning. Komiteen driver politisk og ikke rettslig kontroll, og en kritisk merknad er ikke en dom.",
    },
    {
      question: "Hva er Riksrevisjonens rolle?",
      options: ["Den reviderer statens regnskaper og måloppnåelse, og rapporterer til Stortinget", "Den reviderer statens regnskaper og rapporterer til Finansdepartementet", "Den fører tilsyn med at kommunene følger reglene i statlige tilskuddsordninger", "Den avgjør klager på forvaltningsvedtak der departementet selv er inhabilt"],
      explanation: "Riksrevisjonen er Stortingets organ og rapporterer dit, ikke til regjeringen — derfor bryter den informasjonsasymmetrien. Den fører ikke tilsyn med kommunene og avgjør ingen klagesaker.",
    },
    {
      question: "Hva skiller finansiell revisjon fra forvaltningsrevisjon?",
      options: ["Finansiell revisjon kontrollerer regnskapene, forvaltningsrevisjon om målene nås", "Finansiell revisjon gjelder staten, forvaltningsrevisjon gjelder kommunesektoren", "Finansiell revisjon utføres årlig, forvaltningsrevisjon bare ved mistanke om svindel", "Finansiell revisjon utføres av Riksrevisjonen, forvaltningsrevisjon av departementene"],
      explanation: "Den ene spør om pengene er brukt etter bevilgningsvedtaket, den andre om virkningen ble som forutsatt. Begge utføres av Riksrevisjonen og gjelder statsforvaltningen.",
    },
    {
      question: "Hva kan Riksrevisjonen ikke gjøre?",
      options: ["Instruere et organ, omgjøre et vedtak eller stille noen til ansvar", "Undersøke om en statlig virksomhet har nådd de målene Stortinget satte", "Rapportere sine funn direkte til Stortinget uten å gå veien om regjeringen", "Kontrollere om midler er brukt i tråd med Stortingets bevilgningsvedtak"],
      explanation: "Organet leverer et faktagrunnlag; sanksjonen er politisk og ligger hos Stortinget selv. De tre andre oppgavene er nettopp det Riksrevisjonen gjør.",
    },
    {
      question: "Hva er et anmodningsvedtak?",
      options: ["Et vedtak der Stortinget ber regjeringen gjøre noe, med rapportering tilbake", "Et vedtak der regjeringen ber Stortinget om fullmakt til å bruke midler", "Et vedtak der en komité ber om skriftlig svar fra en statsråd innen en frist", "Et vedtak der Stortinget instruerer et direktorat direkte i en enkeltsak"],
      explanation: "Retningen går fra Stortinget til regjeringen, og oppfølgingen rapporteres tilbake. Skriftlige spørsmål er et lettere virkemiddel, og Stortinget instruerer ikke enkeltorganer — ansvaret går gjennom statsråden.",
    },
    {
      question: "Hvorfor er anmodningsvedtak politisk tungtveiende selv om de ikke binder rettslig?",
      options: ["Fordi et flertall har uttalt seg, og regjeringen holdes ansvarlig for oppfølgingen", "Fordi de har samme rettsvirkning som en forskrift gitt av departementet", "Fordi de kan påklages til domstolene dersom regjeringen ikke følger dem opp innen fristen", "Fordi de automatisk fører til mistillitsforslag dersom de ikke etterkommes"],
      explanation: "Vekten er politisk: en regjering som ignorerer et flertallsvedtak, må regne med å bli holdt ansvarlig for nettopp det. Vedtaket har ingen rettsvirkning og kan ikke bringes inn for domstolene.",
    },
    {
      question: "Hva er et representantforslag, tidligere kalt dok. 8-forslag?",
      options: ["Et forslag fremmet av en eller flere stortingsrepresentanter, ikke av regjeringen", "Et forslag fra en organisasjon, fremmet gjennom en åpen komitéhøring", "Et forslag fra en statsråd om endring av eget departements budsjettramme i løpet av året", "Et forslag fra Riksrevisjonen om oppfølging av en forvaltningsrevisjon"],
      explanation: "Ordningen er Stortingets egen initiativkanal. Organisasjoner uttaler seg uten å fremme forslag, statsråders budsjettforslag går gjennom regjeringen, og Riksrevisjonen rapporterer funn.",
    },
    {
      question: "Hva er den viktigste begrensningen ved representantforslag som initiativkanal?",
      options: ["Representantene mangler utredningsapparatet departementene har", "Forslagene kan bare fremmes av representanter fra opposisjonspartiene", "Forslagene behandles ikke i komité, men går rett til votering i plenum", "Forslagene kan ikke gjelde lovendringer, bare anmodninger til regjeringen"],
      explanation: "Initiativretten finnes, men kapasiteten mangler — derfor ender mange forslag med å be regjeringen komme tilbake med noe. Forslagene kan fremmes av alle representanter, behandles i komité og kan gjelde lovendring.",
    },
    {
      question: "Hva er regjeringens parlamentariske grunnlag?",
      options: ["Den støtten regjeringen har i Stortinget: flertall, bundet flertall eller ingen", "Den oppslutningen regjeringspartiene har hatt i befolkningen mellom to stortingsvalg", "Det programmet regjeringen la fram da den tiltrådte etter valget", "Den formelle utnevnelsen av regjeringen i Kongen i statsråd"],
      explanation: "Grunnlaget er en variabel som endrer seg mellom periodene, mens de formelle reglene ligger fast. Det er mandatfordelingen i salen som avgjør, ikke meningsmålinger eller programmer.",
    },
    {
      question: "Hva kjennetegner en flertallsregjering?",
      options: ["Den får gjennomslag uten å forhandle utad, men kontrolleres svakere i praksis", "Den slipper å legge fram statsbudsjett til behandling i Stortinget", "Den kan endre lover uten at forslaget behandles i komité på vanlig måte", "Den kan ikke felles ved mistillit så lenge flertallet består gjennom perioden"],
      explanation: "Styringsevne og kontrollintensitet trekker i motsatt retning: de som skal kontrollere regjeringen, er i flertall også de som bærer den. Budsjettplikten, komitébehandlingen og mistillitsordningen er uendret.",
    },
    {
      question: "Hva kjennetegner en mindretallsregjering i styringskjeden?",
      options: ["Delegasjonen nedover blir smalere, mens kontrollen oppover blir sterkere", "Delegasjonen nedover blir bredere, mens kontrollen oppover blir svakere", "Både delegasjonen og kontrollen svekkes, siden regjeringen mangler mandat", "Verken delegasjonen eller kontrollen endres, siden reglene er de samme"],
      explanation: "Mindretallsgrunnlaget virker på begge strømmene samtidig og i motsatt retning: hvert vedtak må forhandles fram, mens et flertall utenfor regjeringen lettere kan sette dagsorden og kreve svar.",
    },
    {
      question: "Hva er kontraktsparlamentarisme?",
      options: ["En skriftlig avtale som binder støttepartier til å sikre flertall for et program", "En ordning der regjeringen må ha et uttrykkelig tillitsvedtak i Stortinget for å tiltre", "En avtale mellom regjeringen og partene i arbeidslivet om lønnsdannelsen", "En regel om at budsjettavtaler må inngås før statsbudsjettet legges fram"],
      explanation: "Ordningen gjør et mindretallsgrunnlag forutsigbart ved at forhandlingene tas én gang i stedet for sak for sak. De øvrige beskrivelsene gjelder helt andre ordninger.",
    },
    {
      question: "Hva skiller kontraktsparlamentarisme fra en koalisjonsregjering?",
      options: ["Støttepartiet står utenfor regjeringen og bærer ikke det utøvende ansvaret", "Koalisjonen bygger på en skriftlig avtale, mens kontraktsordningen er sedvane", "Kontraktsordningen forutsetter at regjeringen har flertall bak seg i salen", "Kontraktsordningen gjelder statsbudsjettet alene, mens koalisjonen dekker alt"],
      explanation: "Skillet går på hvem som sitter i regjeringen og bærer ansvaret. Kontraktsparlamentarisme forutsetter nettopp mindretall, avtalen er skriftlig, og den dekker som regel et bredt program.",
    },
    {
      question: "Hva gjør en bindende samarbeidsavtale med Stortinget som beslutningsarena?",
      options: ["Den flytter de reelle avklaringene til et forhandlingsrom mellom partiledelsene", "Den styrker arenaen, siden flere partier enn før får innflytelse over hele politikken", "Den svekker arenaen ved at komiteene mister retten til å endre forslag", "Den lar arenaen være uendret, siden alle vedtak fortsatt fattes i plenum"],
      explanation: "Avtalen styrker partiene som er med i den, men flytter avklaringen ut av salen — og de to er ikke det samme. Komiteenes formelle rettigheter er uendret; det er vedtakspunktet som har forskjøvet seg.",
    },
    {
      question: "Hva menes med stortingsregjereri?",
      options: ["At Stortinget griper inn i det som regnes som regjeringens og forvaltningens arbeid", "At regjeringen styrer etatene så tett at de gradvis mister sin faglige selvstendighet", "At regjeringen unnlater å følge opp de vedtakene Stortinget har fattet", "At representanter tar imot styreverv i statlige selskaper og direktorater"],
      explanation: "Uttrykket beskriver at forsamlingen går inn i utøvelsen, typisk gjennom detaljerte pålegg om framgangsmåte. Merk at begrepet ikke er nøytralt: å bruke det er allerede å ha ment noe om hvor grensen bør gå.",
    },
    {
      question: "Hvilket spørsmål gjør grensen mot stortingsregjereri operativ?",
      options: ["Om vedtaket etterlater statsråden et handlingsrom hen kan holdes ansvarlig for", "Om vedtaket er fattet med alminnelig flertall eller med kvalifisert flertall i salen", "Om vedtaket er fremmet av regjeringen eller av enkeltrepresentanter", "Om vedtaket gjelder et område som er regulert i lov eller bare i forskrift"],
      explanation: "Kriteriet følger av ministeransvarets logikk: har Stortinget bestemt både mål og middel, kan statsråden vanskelig holdes ansvarlig for resultatet. Flertallsform, opphav og reguleringsnivå avgjør ikke grensen.",
    },
    {
      question: "Hva sier bildet «flo og fjære» om maktforholdet Storting–regjering?",
      options: ["At tyngdepunktet veksler over tid, snart hos forsamlingen og snart hos regjeringen", "At Stortinget over tid har tapt makt til regjeringen i en jevn utvikling", "At maktforholdet avgjøres av hvilke saker som står på dagsordenen til enhver tid", "At regjeringens makt følger oppslutningen i befolkningen mellom valgene"],
      explanation: "Bildet påstår en vekselvis bevegelse fram og tilbake, ikke en ensrettet utvikling. Det er nettopp fordi det påstår regelmessighet at det kan prøves mot regjeringens parlamentariske grunnlag.",
    },
    {
      question: "Hva er den beste motforestillingen mot «flo og fjære»-påstanden?",
      options: ["Regjeringens fortrinn i initiativ, utredning og informasjon ligger alltid fast", "Maktforholdet kan ikke måles, siden det ikke finnes tall på politisk innflytelse", "Stortinget har alltid formelt siste ord, så maktforholdet kan ikke endre seg", "Mindretallsregjeringer er så vanlige i Norge at variasjon ikke forekommer"],
      explanation: "Det som svinger, er marginene og gjennomslaget i enkeltsaker; det som ligger fast, er hvem som setter dagsorden og eier kunnskapen. De øvrige svarene avviser målingen i stedet for å prøve påstanden.",
    },
    {
      question: "Hvorfor er det misvisende å måle Stortingets makt ved å telle mistillitsvedtak?",
      options: ["Fordi trusselen virker uten å bli utløst og påvirker samspillet hele veien", "Fordi mistillitsvedtak ikke registreres i Stortingets offisielle protokoller", "Fordi mistillit bare kan rettes mot en enkelt statsråd og ikke mot regjeringen", "Fordi et mistillitsvedtak krever kvalifisert flertall og derfor sjelden fremmes"],
      explanation: "De øverste trinnene på kontrolltrappen virker nettopp fordi de finnes. Å telle utløsninger er som å måle et gjerdes virkning ved å telle hvor mange som har gått gjennom det.",
    },
  ],
  'stv1400-7-1': [
    {
      question: "Hva er kommunal autonomi?",
      options: ["Den reelle handlefriheten kommunen har igjen når lovkrav, rettigheter og bundne midler er trukket fra", "Kommunens rettslige stilling som eget forvaltningsnivå med direkte valgte organer", "Kommunens adgang til å avgjøre saker uten at staten i ettertid kan overprøve vedtakene", "Kommunens rett til å fastsette nivået på de skattene innbyggerne betaler til kommunen"],
      explanation: "Autonomi måles etter fratrekk for alt som allerede er bundet, og er derfor et gradsspørsmål. Den rettslige stillingen er selvstyre, uoverprøvbarhet ville vært suverenitet, og skattefastsettelse er bare én dimensjon av friheten.",
    },
    {
      question: "Hva er forskjellen på selvstyre og autonomi?",
      options: ["Selvstyre er en rettslig posisjon, mens autonomi er hvor mye handlingsrom posisjonen gir i praksis", "Selvstyre gjelder kommuner, mens autonomi gjelder fylkeskommuner og regionale organer", "Selvstyre er grunnlovsfestet, mens autonomi følger av kommuneloven og av særlovgivningen", "Selvstyre gjelder økonomiske spørsmål, mens autonomi gjelder organisering og oppgaveløsing"],
      explanation: "Skillet går mellom rett og faktisk handlingsrom: en kommune kan ha selvstyret i behold og likevel ha lite autonomi igjen på et sterkt regulert område. Begge begrepene gjelder både kommuner og fylkeskommuner.",
    },
    {
      question: "Hvorfor er det galt å skrive at norske kommuner er suverene på sitt område?",
      options: ["Fordi Norge er en enhetsstat der Stortinget kan endre kommunenes oppgaver ved alminnelig lovvedtak", "Fordi kommunene mangler egne folkevalgte organer med selvstendig myndighet til å fatte vedtak", "Fordi statsforvalteren er overordnet kommunene og kan omgjøre alle kommunale vedtak av eget tiltak", "Fordi kommunene ikke har egne inntekter, men finansieres fullt ut gjennom statlige overføringer"],
      explanation: "I en enhetsstat ligger den øverste myndigheten hos de sentrale statsorganene. Kommunene har folkevalgte organer og egne skatteinntekter, og statsforvalteren behandler klager og fører tilsyn uten å kunne overprøve politiske prioriteringer fritt.",
    },
    {
      question: "Hvilke dimensjoner måles kommunal autonomi langs?",
      options: ["Oppgavebredde, juridisk handlingsrom, økonomisk frihet og organisatorisk frihet", "Innbyggertall, geografisk utstrekning, skattegrunnlag og andel lovpålagte tjenester", "Valgdeltakelse, antall folkevalgte, antall ansatte og størrelsen på driftsbudsjettet", "Antall oppgaver, antall særlover, antall tilsyn og antall klagesaker til statsforvalteren"],
      explanation: "De fire dimensjonene gjør at autonomi kan måles hver for seg, og et land kan ligge høyt på én og lavt på en annen. De øvrige listene beskriver egenskaper ved kommuner, ikke dimensjoner ved friheten deres.",
    },
    {
      question: "Hva menes med at oppgavebredde og beslutningsfrihet ikke følger hverandre?",
      options: ["At en kommune kan ha ansvar for svært mye og likevel ha lite å bestemme, fordi oppgavene er tett regulert", "At store kommuner har flere oppgaver enn små kommuner, men mindre frihet til å prioritere mellom oppgavene sine", "At kommunene får flere oppgaver i takt med at de statlige overføringene til sektoren øker", "At oppgavene er fordelt ulikt mellom kommuner, slik at generalistkommuneprinsippet ikke gjelder fullt ut lenger for alle kommuner"],
      explanation: "Norske kommuner er lærebokeksempelet: bredt ansvar for de viktigste tjenestene, men rettighetsfesting, kompetansekrav og tilsyn som innsnevrer skjønnsrommet. Poenget gjelder uavhengig av kommunestørrelse og av hvor mye staten overfører.",
    },
    {
      question: "Hvilken skatt rår norske kommunestyrer selv over?",
      options: ["Eiendomsskatten, som kommunestyret avgjør om skal skrives ut og på hvilket nivå innenfor lovens rammer", "Inntektsskatten, der kommunestyret fastsetter den kommunale skattøren innenfor et statlig maksimum fastsatt i statsbudsjettet", "Formuesskatten, som kommunen krever inn og beholder for den delen som gjelder egne innbyggere", "Merverdiavgiften på kommunale tjenester, der kommunestyret fastsetter satsen for hver enkelt tjeneste det tilbyr"],
      explanation: "Eiendomsskatten er den ene skatten kommunestyret selv avgjør. Skattøren for inntektsskatt fastsettes av Stortinget, og formuesskatt og merverdiavgift er statlige skatter kommunen ikke rår over.",
    },
    {
      question: "Hva sier autonomimodellen hos Kjellberg?",
      options: ["At kommunen er begrunnet i seg selv, som et lokalt fellesskap med et eget folkevalgt mandat", "At kommunen er begrunnet i det den utretter for helheten, som en stedsnær iverksetter av nasjonal politikk", "At kommunen bør ha ansvaret for alle tjenester som ikke krever spesialisert kompetanse eller stordrift", "At kommunen bør styres av et organ som er uavhengig av partipolitikken i den enkelte kommunen"],
      explanation: "Legitimiteten kommer nedenfra, og statlige krav må derfor begrunnes særskilt. Det andre svaret beskriver integrasjonsmodellen, mens de to siste blander inn oppgavefordeling og styringsform som ikke er modellens akse.",
    },
    {
      question: "Hva sier integrasjonsmodellen om variasjon mellom kommuner?",
      options: ["At variasjon er et problem, fordi nasjonalt vedtatte rettigheter ikke skal avhenge av bosted", "At variasjon er et ønsket resultat av at ulike kommunestyrer prioriterer etter lokale ønsker", "At variasjon er akseptabel så lenge den skyldes ulikt skattegrunnlag og ikke ulike prioriteringer", "At variasjon bør reduseres gjennom sammenslåing av kommuner, ikke gjennom statlige styringskrav"],
      explanation: "I integrasjonsmodellen er kommunen iverksetter av nasjonal politikk, og ulikt tilbud er da nettopp det ordningen skal hindre. Synet på variasjon som et resultat hører til autonomimodellen.",
    },
    {
      question: "Hvordan skal Kjellbergs to modeller brukes i en besvarelse?",
      options: ["Som analyseakser til å lese begge sider av et konkret statlig krav, ikke som politiske standpunkter", "Som to konkurrerende teorier der den ene må velges og den andre forkastes med en begrunnelse i besvarelsen", "Som en beskrivelse av hvordan norsk kommunepolitikk har utviklet seg fra den ene til den andre gjennom hele etterkrigstiden", "Som en rangering av hvilke land som gir kommunene mest og minst frihet i oppgaveløsingen"],
      explanation: "Modellene gir to fullstendige lesninger av det samme vedtaket, og norsk kommunepolitikk har trekk fra begge samtidig. Å behandle dem som partipolitiske syn eller som en rangering er en dokumentert forveksling.",
    },
    {
      question: "Hvilke fem begrunnelser for statlig styring av kommunene opererer faget med?",
      options: ["Eksterne virkninger, geografisk likhet, rettssikkerhet, fordeling og stabilisering", "Effektivitet, kvalitet, rettssikkerhet, medvirkning og demokratisk kontroll med forvaltningen", "Lovlighet, forsvarlighet, likebehandling, forutsigbarhet og forholdsmessighet i vedtakene", "Nasjonal likhet, faglig standard, økonomisk kontroll, tilsyn og statlig klagebehandling av vedtak"],
      explanation: "De fem er standardsvaret på hvorfor staten styrer, og hver av dem har sin egen rekkevidde. De øvrige listene blander sammen forvaltningsrettslige krav og styringsmidler med selve begrunnelsene.",
    },
    {
      question: "Hva er forskjellen på en minstestandard og et krav om ensartet tilbud?",
      options: ["Minstestandarden setter et gulv og lar kommuner gi mer, mens ensartet tilbud setter både gulv og tak", "Minstestandarden er fastsatt i forskrift, mens et krav om ensartet tilbud må vedtas av Stortinget i lovs form", "Minstestandarden gjelder tjenestens kvalitet, mens ensartet tilbud gjelder hvor mye den skal koste", "Minstestandarden gjelder lovpålagte tjenester, mens ensartet tilbud også omfatter frivillige tilbud kommunen ikke er pålagt å ha"],
      explanation: "Skillet gjelder hvor mye variasjon som fjernes. De fleste norske statlige krav er utformet som gulv, og en påstand om at likhetskrav uthuler selvstyret blir for grov uten dette skillet.",
    },
    {
      question: "Hvorfor ligger stabiliseringshensynet til grunn for at staten fastsetter kommunesektorens inntektsrammer?",
      options: ["Fordi summen av alle kommunenes budsjetter påvirker aktivitetsnivået i økonomien som helhet", "Fordi kommunene ellers ville prioritert investeringer framfor drift i økonomiske nedgangstider", "Fordi kommunene mangler kompetanse til å vurdere konsekvensene av egne budsjettvedtak", "Fordi Stortinget må godkjenne det enkelte kommunebudsjettet før det kan settes i verk"],
      explanation: "Selv om hver kommune tar fornuftige valg, kan summen trekke i feil retning for økonomien. Kommunene vedtar sine egne budsjetter, og hensynet handler ikke om deres kompetanse.",
    },
    {
      question: "Hva menes med at hver styringsbegrunnelse har en rekkevidde?",
      options: ["At begrunnelsen bare treffer bestemte typer oppgaver, og utenfor dem er den bare et ord", "At begrunnelsen gjelder inntil Stortinget vedtar noe annet i den enkelte særloven", "At begrunnelsen bare kan brukes overfor kommuner som mangler kapasitet til å løse oppgaven selv", "At begrunnelsen svekkes over tid etter hvert som kommunene bygger opp egne fagmiljøer"],
      explanation: "Eksterne virkninger treffer oppgaver som smitter over kommunegrensen, rettssikkerhet treffer enkeltvedtak, ikke politiske prioriteringer. Å spørre hvilken begrunnelse et krav hviler på, og om kravet strekker seg lenger enn den bærer, er et av de sterkeste drøftingsgrepene.",
    },
    {
      question: "Hva er lokaldemokratiets skolefunksjon?",
      options: ["At lokalpolitikken er en bred arena der mange får erfaring med å delta, argumentere og ta ansvar", "At kommunen har ansvaret for grunnskolen og dermed for opplæringen i demokratiske verdier", "At kommunestyret skal opplyse innbyggerne om hvilke saker som behandles og hvordan de kan påvirke", "At lokalpolitikere rekrutteres til rikspolitikken og dermed får trening før de kommer til Stortinget"],
      explanation: "Begrunnelsen er prosessorientert: verdien ligger i deltakelsen selv og kompetansen den skaper. Funksjonen har ikke noe med skoleverket å gjøre, og den er ikke først og fremst en rekrutteringskanal.",
    },
    {
      question: "Hvilken av lokaldemokratiets funksjoner svekkes mest direkte av statlig styring?",
      options: ["Påvirkningsfunksjonen, fordi hver ny binding reduserer det lokalvalget faktisk kan avgjøre", "Skolefunksjonen, fordi færre stiller til valg når kommunestyret har mindre å bestemme over", "Begge to i omtrent samme takt, siden de bygger på det samme demokratiske grunnlaget", "Ingen av dem, siden statlige krav vedtas av et Storting som også er demokratisk valgt"],
      explanation: "Skolefunksjonen tåler mye styring så lenge det er noe å prioritere mellom, mens påvirkningsfunksjonen svekkes målbart av hver binding. Å skille de to gjør en generell påstand om uthuling til en presis analyse.",
    },
    {
      question: "Hva menes med at frihet er et premiss for reelt lokaldemokrati?",
      options: ["At et lokalvalg mister innhold dersom alt av betydning allerede er bestemt sentralt", "At kommunene må ha rett til å nekte å gjennomføre statlige vedtak de er uenige i", "At innbyggerne må kunne delta direkte i beslutningene og ikke bare gjennom valgte organer", "At kommunene må ha frihet til å velge hvilke av de lovpålagte oppgavene de vil prioritere"],
      explanation: "Poenget er at summen av rimelige enkeltkrav kan bli et urimelig hele, siden hvert krav er begrunnet for seg mens ingen har ansvaret for totalen. Kommunene kan ikke nekte å følge lovpålagte krav.",
    },
    {
      question: "Hvorfor er ansvarsplassering et selvstendig demokratisk problem ved statlig styring?",
      options: ["Fordi innbyggeren møter kommunen og kritiserer kommunestyret også når handlingsrommet lå hos staten", "Fordi statsforvalteren behandler klager på vedtak som egentlig er fattet av statlige organer", "Fordi kommunestyret formelt er ansvarlig for vedtak det ikke har hatt anledning til å behandle på forhånd", "Fordi ansvaret for lovpålagte tjenester er delt mellom kommune og fylkeskommune i mange saker"],
      explanation: "Demokratisk ansvarlighet forutsetter at velgeren vet hvem som bestemte, og sammenvevd styring gjør koblingen uklar begge veier: kommunestyret kan også skyve upopulære valg over på statlige krav.",
    },
    {
      question: "Hva er effektivitetsbegrunnelsen for lokalt selvstyre?",
      options: ["At lokale beslutninger treffer innbyggernes ønsker bedre når ønskene varierer mellom steder", "At kommunene kan produsere de samme tjenestene billigere enn staten kan gjøre det", "At lokale beslutninger fattes raskere fordi færre organer må involveres i saksbehandlingen av den enkelte saken", "At kommunene kan sammenligne seg med hverandre og dermed lære av dem som gjør det best"],
      explanation: "Argumentet er at ressursene brukes på riktigere ting, ikke nødvendigvis på færre. Det er kjernen i Oates' desentraliseringsteorem, og det kan ikke besvares med at Stortinget også er demokratisk valgt.",
    },
    {
      question: "Hvilket norsk eksempel belegger best at innsigelse setter en grense for kommunal autonomi?",
      options: ["At statlige organer og statsforvalteren kan fremme innsigelse mot kommunens arealplan", "At statsforvalteren behandler klager fra innbyggere på enkeltvedtak i kommunen", "At Stortinget fastsetter den kommunale skattøren og rammetilskuddets størrelse", "At kommunene plikter å rapportere nøkkeltall som gjør sammenligning mellom dem mulig på tvers av årene"],
      explanation: "Kommunen er planmyndighet, men i saker der nasjonale eller vesentlige regionale interesser står på spill, kan avgjørelsen flyttes til departementet. De øvrige er reelle styringsmekanismer, men ingen av dem gjelder planmyndigheten.",
    },
    {
      question: "Hva viser at deltakelsen ved lokalvalg ligger lavere enn ved stortingsvalg?",
      options: ["At kanalen selvstyret hviler på, brukes av færre enn den nasjonale — uten at årsaken er entydig", "At innbyggerne er mer fornøyd med kommunale tjenester enn med statlige tjenester", "At lokalpolitikken behandler saker som er mindre viktige for folks hverdag enn rikspolitikken gjør for de fleste innbyggere", "At kommunene har for lite handlingsrom til at valgene lenger har noen praktisk betydning"],
      explanation: "Både «lite igjen å bestemme» og «mindre synlig valgkamp» er forsvarlige lesninger, og en drøfting bør ha begge. Å slutte fra deltakelsestall til demokratisk kvalitet er å strekke observasjonen for langt.",
    },
    {
      question: "Hva måler Local Autonomy Index?",
      options: ["Lokalt selvstyre langs flere dimensjoner samtidig, blant annet oppgaver, rettslig og økonomisk frihet", "Hvor stor andel av kommunenes inntekter som består av frie midler i det enkelte landet", "Hvor fornøyde innbyggerne i et land er med tjenestene kommunen leverer til dem", "Hvor mange oppgaver som er overført fra staten til lokalt nivå i løpet av de siste tiårene i de landene som sammenlignes"],
      explanation: "Poenget er ikke hvilken plass et land havner på, men at et land kan ligge høyt på én dimensjon og lavt på en annen. Indeksen beskriver, den avgjør ikke hvor mye autonomi et land bør ha.",
    },
    {
      question: "Hvilket pensumbidrag eier autonomimodellen og integrasjonsmodellen?",
      options: ["Kjellberg", "Oates", "Johan P. Olsen", "Esping-Andersen"],
      explanation: "Kjellbergs begrepspar skiller kommunen som selvstendig lokalt fellesskap fra kommunen som iverksetter av nasjonal politikk. Oates eier desentraliseringsteoremet, Olsen styringskjeden og Esping-Andersen velferdsregimene.",
    },
    {
      question: "Hvilket pensumbidrag bærer skillet mellom lokaldemokratiets to funksjoner?",
      options: ["Jacobsen om lokaldemokrati", "Fiva mfl. om kommunal organisering og økonomi", "Christensen mfl. om forvaltning og politikk", "Stigen mfl. om sentraladministrasjonens organisering"],
      explanation: "Jacobsen bærer lokaldemokratiets begrunnelser, altså kommunen som skole i demokrati og som påvirkningskanal. Fiva mfl. eier den økonomiske siden, mens Christensen mfl. og Stigen mfl. eier forvaltningens organisering.",
    },
    {
      question: "En kandidat skriver at statlig styring uthuler det kommunale selvstyret, uten å nevne hva kravene er begrunnet i eller hvem de beskytter. Hvilken feil er dette?",
      options: ["Å hoppe over avveiningen, altså å konstatere at friheten er mindre uten å veie den mot hensynet den er ofret for", "Å ramse opp begreper uten å fylle dem med innhold, siden begrunnelsene bare nevnes ved navn", "Å blande redegjørelse og drøfting, siden påstanden hører hjemme i redegjørelsesdelen av besvarelsen og ikke i drøftingen av den", "Utdatert faktagrunnlag, siden kravene til kommunene er endret siden reformene ble gjennomført"],
      explanation: "Å konstatere at friheten er mindre, er en observasjon; å veie den mot hensynet den er ofret for, er en drøfting. Feilen består i at avveiningen mangler, ikke i at begrepene er tomme eller feilplassert.",
    },
    {
      question: "Hva er den vanligste begrepsforvekslingen i stoffet om kommunal autonomi?",
      options: ["Å blande autonomimodellen og integrasjonsmodellen, eller å behandle dem som politiske standpunkter", "Å blande rammetilskudd og skjønnstilskudd i beskrivelsen av kommunenes frie inntekter", "Å blande kommunestyret og formannskapet når det gjelder hvem som vedtar årsbudsjettet", "Å blande statsforvalteren og fylkeskommunen i beskrivelsen av regional forvaltning i Norge slik den er organisert i dag"],
      explanation: "Modellene er analyseakser, ikke leire å velge mellom, og å tilskrive den ene det den andre sier er en dokumentert trekkgrunn. De øvrige forvekslingene finnes også, men hører hjemme i andre deler av faget.",
    },
    {
      question: "Hva er A-markøren i stoffet om kommunal autonomi og lokaldemokrati?",
      options: ["Å bruke Kjellbergs modeller som akser og si hvilken av lokaldemokratiets funksjoner et krav rammer", "Å konkludere klart med at det kommunale selvstyret er svekket de siste tiårene", "Å ramse opp alle fem begrunnelsene for statlig styring før drøftingen begynner", "Å vise til at kommunene har fått flere oppgaver samtidig som de har mistet frihet på inntektssiden over tid"],
      explanation: "Grepet gjør en generell påstand om uthuling til en påstand som kan prøves, fordi de to funksjonene svekkes i ulikt tempo. En skarp konklusjon eller en fullstendig liste er ikke i seg selv et selvstendighetsgrep.",
    },
  ],
  'stv1400-7-2': [
    {
      question: "Hvilke tre funksjoner har offentlig sektor i den samfunnsøkonomiske inndelingen?",
      options: ["Allokering, fordeling og stabilisering", "Produksjon, finansiering og kontroll av offentlige tjenester i alle forvaltningsnivåer", "Lovgivning, iverksetting og kontroll, altså de tre klassiske statsmaktenes oppgaver", "Regulering, tilsyn og klagebehandling overfor private aktører og kommunene i sektoren"],
      explanation: "De tre funksjonene svarer på hva som produseres, hvem som får det, og hvor mye det samlet blir. De øvrige listene beskriver virkemidler og statsmakter, ikke de økonomiske funksjonene.",
    },
    {
      question: "Hva gjelder allokeringsfunksjonen?",
      options: ["Hva samfunnets ressurser skal brukes på, særlig der markedet ikke gir riktig svar selv", "Hvem som skal motta offentlige overføringer, og hvor store overføringene skal være", "Hvordan de samlede offentlige utgiftene påvirker aktivitetsnivået i økonomien over tid", "Hvordan offentlige tjenester skal produseres billigst mulig innenfor gitte budsjetter"],
      explanation: "Allokeringen gjelder hva som produseres, mens fordelingen gjelder hvem som får det og stabiliseringen hvor mye det samlet blir. Billigst mulig produksjon er kostnadseffektivitet, som er et annet begrep.",
    },
    {
      question: "Hvorfor ligger fordelingsfunksjonen i hovedsak hos staten?",
      options: ["Fordi en kommune som omfordeler kraftig alene, mister skattytere og tiltrekker seg mottakere over tid", "Fordi kommunene ikke har rettslig adgang til å omfordele mellom sine egne innbyggere", "Fordi kommunene mangler den administrative kapasiteten til å beregne omfordeling korrekt", "Fordi omfordeling forutsetter et progressivt skattesystem, og bare staten har skattemyndighet"],
      explanation: "Argumentet er økonomisk før det er rettslig: omfordeling krever et fellesskap ingen enkelt kan flytte ut av. Kommunene driver reell fordeling gjennom tjenesteproduksjonen og har også egne skatteinntekter.",
    },
    {
      question: "Hva er markedssvikt?",
      options: ["Tilfeller der et fritt marked ikke gir effektiv ressursbruk fordi prismekanismen ikke virker som forutsatt", "Tilfeller der fordelingen av goder oppleves som urettferdig av et flertall av innbyggerne", "Tilfeller der et marked bryter sammen fordi tilbyderne går konkurs samtidig i en nedgangsperiode med svikt i etterspørselen", "Tilfeller der offentlige aktører konkurrerer med private tilbydere og presser prisene kunstig ned under kostnad"],
      explanation: "De tre hovedformene er kollektive goder, eksterne virkninger og informasjonssvikt. At et utfall oppleves som urettferdig, er et fordelingsargument og ikke markedssvikt — den forvekslingen er vanlig og upresis.",
    },
    {
      question: "Hva kjennetegner et privat gode i økonomisk forstand?",
      options: ["Det er både ekskluderende og rivaliserende", "Det produseres og omsettes av private aktører i et marked med fri konkurranse", "Det finansieres av brukeren selv, uten offentlige tilskudd eller subsidier av noe slag", "Det er ikke lovpålagt for det offentlige å tilby, og kan derfor kjøpes i markedet i stedet"],
      explanation: "Typologien beskriver egenskaper ved godet, ikke hvem som produserer, finansierer eller plikter å tilby det. En sykehjemsplass er et privat gode selv om den er offentlig drevet og finansiert.",
    },
    {
      question: "Hva kjennetegner et kollektivt gode?",
      options: ["Det er verken ekskluderende eller rivaliserende", "Det leveres av det offentlige og finansieres i sin helhet over skatteseddelen", "Det er så viktig for innbyggerne at samfunnet ikke vil overlate det til markedet", "Det brukes av mange samtidig, og kapasiteten må derfor dimensjoneres nasjonalt"],
      explanation: "Ingen kan holdes utenfor, og godet blir ikke mindre av at flere bruker det. At det offentlige leverer noe, gjør det ikke kollektivt — skole og omsorg er private goder i økonomisk forstand.",
    },
    {
      question: "Hvilke to dimensjoner bygger godetypologien på?",
      options: ["Ekskluderbarhet og rivalisering", "Nødvendighet og betalingsvilje hos brukerne av godet", "Offentlig eller privat produksjon, og offentlig eller privat finansiering", "Lovpålagt eller frivillig tilbud, og lokalt eller nasjonalt ansvar for tjenesten"],
      explanation: "De to dimensjonene gir hver sitt problem: manglende ekskluderbarhet gjør at ingen kan ta betalt, manglende rivalisering at det er sløsing å ta betalt. Produksjon og finansiering er andre spørsmål.",
    },
    {
      question: "Hva er gratispassasjerproblemet?",
      options: ["At hver enkelt har god grunn til å la andre betale for et gode hun får uansett hva hun gjør", "At noen brukere benytter offentlige tjenester uten å ha rett til dem etter regelverket, og som dermed belaster fellesskapet", "At kommuner lar nabokommunene bygge ut tilbud som deres egne innbyggere så bruker", "At private aktører henter ut overskudd fra tjenester det offentlige har finansiert over skatteseddelen"],
      explanation: "Problemet forklarer hvorfor tvungen finansiering gjennom skatt er løsningen og ikke bare en praktisk ordning: den fjerner valget om å la være. Det handler om finansieringen, ikke om misbruk av ordninger.",
    },
    {
      question: "Hva er en ekstern virkning?",
      options: ["En konsekvens av en handling som rammer eller gagner andre enn den som handler, uten å være priset inn", "En konsekvens av et vedtak som først viser seg lenge etter at vedtaket er fattet", "En virkning av statlig styring som kommunen ikke hadde forutsett da den planla tjenesten", "En uenighet mellom kommuner om hvordan en felles oppgave skal finansieres og fordeles"],
      explanation: "Følgen er systematisk: det blir for mye av det som har negative eksterne virkninger og for lite av det som har positive. Uenighet eller uforutsette følger er noe annet enn en virkning for tredjepart.",
    },
    {
      question: "Hvorfor produserer det offentlige goder som i økonomisk forstand er private?",
      options: ["På grunn av eksterne virkninger, fordelingshensyn, informasjonssvikt og stordriftsfordeler", "Fordi private goder må finansieres over skatteseddelen for å nå fram til alle innbyggerne", "Fordi godene skifter kategori og blir kollektive når det offentlige overtar produksjonen", "Fordi private aktører ikke har adgang til å levere slike tjenester"],
      explanation: "Skole, helse og omsorg er både ekskluderende og rivaliserende, og begrunnelsen ligger i de fire hensynene. Et gode skifter ikke kategori av at leverandøren skifter — det er selve premisset for spørsmålet.",
    },
    {
      question: "Hva begrunner ingen av grunnene til offentlig ansvar for private goder i seg selv?",
      options: ["At det offentlige må produsere tjenesten selv i stedet for å kjøpe den fra andre", "At tjenesten må være gratis for brukeren uten noen form for egenandel eller brukerbetaling overhodet", "At tjenesten må være lik i alle kommuner uavhengig av lokale forhold", "At tjenesten må være lovpålagt for kommunene å tilby sine innbyggere"],
      explanation: "Grunnene begrunner offentlig finansiering og ansvar. Om produksjonen skjer i egen regi eller settes ut på anbud, er et selvstendig spørsmål — og det er der konkurranseutsettingsdebatten begynner.",
    },
    {
      question: "Hva er allokeringseffektivitet?",
      options: ["At ressursene brukes på de tjenestene som gir størst velferd — at vi gjør de riktige tingene", "At en gitt tjeneste produseres til lavest mulig kostnad per bruker eller per enhet", "At de offentlige budsjettene er i balanse over konjunktursykelen sett under ett", "At forskjellene mellom innbyggernes tilgang til offentlige tjenester blir minst mulig uansett hvor de bor i landet"],
      explanation: "Begrepet gjelder sammensetningen av tilbudet, ikke prisen på det. Et tilbud kan drives svært billig og likevel være allokeringsmessig dårlig, hvis det er feil tilbud.",
    },
    {
      question: "Hva er kostnadseffektivitet, og hvilken vei trekker den i strukturdebatten?",
      options: ["Å produsere en gitt tjeneste billigst mulig — og den trekker mot større enheter", "Å produsere de tjenestene innbyggerne ønsker mest — og den trekker mot mindre enheter", "Å holde de samlede utgiftene innenfor rammen — og den er nøytral med hensyn til størrelse", "Å fordele utgiftene jevnt mellom kommuner — og den trekker mot statlig ansvar for tjenesten"],
      explanation: "Kostnadseffektivitet hentes gjennom stordrift, konkurranse og bedre organisering. Allokerings- og prioriteringseffektivitet oppnås gjennom nærhet, og de to trekker derfor i hver sin retning samtidig.",
    },
    {
      question: "Hvorfor må valget fylle prismekanismens rolle i offentlig sektor?",
      options: ["Fordi offentlige tjenester ikke har en pris som forteller hvor mye folk verdsetter dem", "Fordi kommunestyret må godkjenne prisene på alle kommunale tjenester hvert år", "Fordi innbyggerne betaler egenandeler som ikke dekker kostnadene ved tjenesten", "Fordi markedet ikke har tilbydere av de tjenestene kommunene har ansvar for å levere til innbyggerne sine"],
      explanation: "Uten priser må sammensetningen av tilbudet bestemmes politisk, og lokalvalget er informasjonskanalen. Merk grensen: velgeren stemmer på en pakke hvert fjerde år, så signalet er grovt.",
    },
    {
      question: "Hva sier Oates' desentraliseringsteorem?",
      options: ["At et offentlig gode bør leveres av det laveste nivået som omfatter alle som berøres av det", "At desentralisering gir mer effektiv ressursbruk enn sentralisering i alle typer oppgaver", "At oppgaver bør legges nærmest mulig innbyggeren, fordi nærhet i seg selv gir bedre vedtak for dem som skal bruke tjenesten", "At kommunene bør ha ansvaret for alle tjenester som finansieres med lokale skatteinntekter"],
      explanation: "Teoremet er en betinget regel om nivå, ikke en anbefaling om desentralisering. Bryter én av forutsetningene, peker samme resonnement oppover — og det er derfor det brukes begge veier.",
    },
    {
      question: "Hvilke tre forutsetninger må vurderes når Oates' teorem brukes?",
      options: ["Om ønskene varierer, om virkningene holder seg innenfor enheten, og om stordriftsfordelene er små", "Om kommunen har kapasitet, om oppgaven er lovpålagt, og om finansieringen er statlig", "Om godet er kollektivt, om det er gratis for brukeren, og om det er politisk omstridt i den enkelte kommunen", "Om innbyggertallet er høyt nok, om avstandene er korte, og om fagmiljøet er stort nok"],
      explanation: "Forutsetningene er halve teoremet, og det er de som avgjør hvilken vei det peker. Kapasitet og lovpålagthet er relevante forhold i norsk forvaltning, men de er ikke teoremets premisser.",
    },
    {
      question: "Hva er preferansevariasjon?",
      options: ["At innbyggerne på ulike steder ønsker seg ulike ting, eller ulike mengder av det samme", "At innbyggerne endrer prioriteringer mellom to valg, slik at flertallet skifter", "At kommunene prioriterer ulikt fordi de har ulikt skattegrunnlag å prioritere innenfor", "At ulike grupper i samme kommune ønsker seg ulike tjenester av det kommunale tilbudet"],
      explanation: "Uten variasjon i ønsker mellom steder er det ingen allokeringsgevinst å hente ved å flytte beslutningen nedover. Dette er det leddet i argumentet som faktisk kan prøves for hvert enkelt gode.",
    },
    {
      question: "Hva er velferdstapet ved et ensartet tilbud?",
      options: ["At både de som ønsket mer og de som ønsket mindre får feil mengde, og summen er tapet", "At tjenesten blir dyrere å produsere når den skal være lik i alle deler av landet enn når den varierer mellom stedene", "At kommuner med lavt skattegrunnlag ikke klarer å finansiere det fastsatte nivået", "At innbyggerne flytter til kommuner der tilbudet passer bedre med egne ønsker"],
      explanation: "Tapet vokser med hvor ulike ønskene er, og det handler om feil mengde eller sammensetning — ikke om produksjonskostnad. En perfekt utført tjeneste ingen ville prioritert, er fortsatt et velferdstap.",
    },
    {
      question: "Når peker Oates' teorem mot statlig nivå?",
      options: ["Når godet har virkninger utenfor enheten, eller når stordriftsfordelene er store", "Når kommunene ikke klarer å bli enige om en felles løsning på oppgaven", "Når tjenesten er lovpålagt og finansieres gjennom rammetilskudd fra staten", "Når innbyggerne i ulike kommuner ønsker seg svært ulike nivåer på tjenesten og kommunene prioriterer ulikt"],
      explanation: "Forurensning og smittevern har virkninger langt utenfor kommunegrensen, og spesialisthelsetjenesten har store stordriftsfordeler. Sterk preferansevariasjon peker derimot nedover, ikke oppover.",
    },
    {
      question: "Hvilket norsk eksempel belegger fordelingsfunksjonen mellom kommuner?",
      options: ["Inntektssystemet, med inntektsutjevning for skattegrunnlag og utgiftsutjevning for kostnadsforskjeller", "Eiendomsskatten, som kommunestyret selv avgjør om skal skrives ut i kommunen", "Øremerkede tilskudd, som binder midlene til et bestemt formål staten har prioritert", "Statsforvalterens tilsyn med at kommunene oppfyller sine lovpålagte plikter overfor innbyggerne på vegne av staten"],
      explanation: "Inntektsutjevningen jevner ut skatteinntekt per innbygger, utgiftsutjevningen kompenserer for ulike kostnader ved samme tjeneste. De øvrige er reelle ordninger, men ingen av dem er en fordelingsmekanisme mellom kommuner.",
    },
    {
      question: "Hvilket av disse er et kollektivt gode i økonomisk forstand?",
      options: ["Fyr- og merkevesenet langs kysten", "En sykehjemsplass i den kommunale eldreomsorgen", "En plass i den lovfestede kommunale barnehagen", "En time hos fastlegen i kommunens primærhelsetjeneste"],
      explanation: "Fyrlyset kan verken utestenge noen eller bli mindre av at flere skip ser det. De tre øvrige er offentlig finansierte, men de er ekskluderende og rivaliserende og dermed private goder i økonomisk forstand.",
    },
    {
      question: "Hvilket pensumbidrag eier den samfunnsøkonomiske begrunnelsen for offentlig sektor i dette faget?",
      options: ["Fiva, Hagen og Sørensen", "Christensen mfl. om forvaltning og politikk", "Stigen mfl. om kommunesektorens organisering", "Halvorsen og Hatland mfl. om velferdsstaten"],
      explanation: "Fiva mfl. eier de tre funksjonene, markedssvikt, godetypologien og Oates anvendt på kommunesektoren. De er de samme forfatterne som bærer styringsvirkemidlene og autonomistoffet.",
    },
    {
      question: "En kandidat skriver at Oates viste at desentralisering gir best ressursbruk. Hva er galt?",
      options: ["Teoremet er betinget: det gjelder bare når forutsetningene om variasjon og virkninger er oppfylt", "Teoremet gjelder bare statlige oppgaver og kan ikke brukes på kommunale tjenester i det hele tatt", "Teoremet gjelder fordeling mellom innbyggere, ikke fordeling av oppgaver mellom nivåer", "Teoremet er en empirisk observasjon fra andre land og kan derfor ikke brukes på Norge"],
      explanation: "Å gjengi konklusjonen uten forutsetningene gjør en betinget regel om til en anbefaling. Teoremet gjelder nettopp oppgavefordelingen mellom nivåer, og forutsetningene er halve poenget.",
    },
    {
      question: "Hva er A-markøren i det samfunnsøkonomiske stoffet?",
      options: ["Å bruke teoremet begge veier på samme sett av oppgaver, og si hva modellen ikke rekker til", "Å gjengi alle tre formene for markedssvikt før drøftingen av nivåspørsmålet begynner, altså grunnlaget drøftingen bygger på", "Å konkludere klart med at oppgavene bør ligge så nær innbyggerne som overhodet mulig", "Å regne ut velferdstapet ved et ensartet tilbud for hver av de aktuelle tjenestene"],
      explanation: "Grepet gjør teoremet til et verktøy i stedet for en referanse, og markerer samtidig at fordelingshensyn og lokaldemokratiets egenverdi ikke kan utledes av effektivitet. Kapitlet er dessuten skrevet uten formelregning.",
    },
  ],
  'stv1400-7-3': [
    {
      question: "Hva var fylkeskommunens rolle i fasen fra 1837?",
      options: ["Et samarbeidsorgan for kommunene i fylket, ledet av statens embetsmann", "Et selvstendig folkevalgt nivå med direkte valgt fylkesting og egne inntekter", "En statlig etat som førte tilsyn med kommunenes oppfyllelse av lovpålagte plikter", "En regional utviklingsaktør som samordnet næringsliv, samferdsel og kompetanse"],
      explanation: "Organet var sammensatt av representanter fra landkommunene og hadde ingen egen demokratisk linje til velgerne. De øvrige svarene beskriver senere faser eller statsforvalterens rolle.",
    },
    {
      question: "Hva skjedde med fylkeskommunen midt på 1970-tallet?",
      options: ["Fylkestinget ble valgt direkte, og nivået fikk egne inntekter og egen administrasjon", "Fylkeskommunen overtok ansvaret for både grunnskolen og den videregående opplæringen fra kommunene", "Fylkeskommunen ble underlagt fylkesmannsembetet som statens regionale ledd", "Fylkesgrensene ble endret for første gang siden formannskapslovene ble innført på 1800-tallet"],
      explanation: "Fasen gjorde fylkeskommunen til et selvstendig folkevalgt forvaltningsnivå, og båndet til fylkesmannsembetet ble kuttet. Grunnskolen har hele tiden ligget hos kommunene.",
    },
    {
      question: "Hvilken oppgave gjorde fylkeskommunen tung i fasen før 2002?",
      options: ["Sykehusene og spesialisthelsetjenesten", "Videregående opplæring og fagopplæringen i arbeidslivet", "Kollektivtransporten og ansvaret for fylkesveinettet", "Regional planlegging og forvaltning av næringsrettede virkemidler"],
      explanation: "Sykehusene var den største oppgaven både i penger og i oppmerksomhet, og de ga nivået en tydelig grunn til å finnes. De tre øvrige er oppgaver fylkeskommunen fortsatt har.",
    },
    {
      question: "Hvorfor er 2002 et vendepunkt i fylkeskommunens historie?",
      options: ["Sykehusene ble overført til statlige helseforetak, og nivåets rolle ble omdefinert", "Fylkeskommunen fikk ansvaret for den videregående opplæringen overført fra staten dette året", "Direkte valg til fylkestinget ble innført for første gang i hele landet", "Antallet fylker ble redusert, og de første storfylkene ble opprettet gjennom sammenslåing"],
      explanation: "Med overføringen forsvant den mest håndfaste begrunnelsen for nivået, og rollen ble omdefinert fra tjenesteprodusent til regional utviklingsaktør.",
    },
    {
      question: "Hva innebærer rollen som regional utviklingsaktør?",
      options: ["Å samordne kommuner, statlige etater, næringsliv og organisasjoner rundt felles regionale mål", "Å føre tilsyn med at kommunene i fylket oppfyller sine lovpålagte plikter overfor innbyggerne", "Å fordele statlige rammetilskudd videre til kommunene etter regionale kriterier", "Å overta driften av statlige virksomheter som legges ned i distriktene i fylket"],
      explanation: "Virkemidlene er plan, penger og partnerskap, ikke instruksjon: fylkeskommunen kan ikke instruere kommunene, siden nivåene er sideordnede. Tilsyn er statsforvalterens oppgave.",
    },
    {
      question: "Hva skjedde med fylkesinndelingen fra 2020 og fra 2024?",
      options: ["Antallet gikk fra atten til elleve fra 2020, og tre storfylker ble delt opp igjen fra 2024", "Antallet gikk fra nitten til femten fra 2020 og har ligget uendret siden reformen", "Alle sammenslåingene fra 2020 ble reversert etter vedtak i Stortinget fra og med 2024 med virkning for hele landet", "Inndelingen var uendret i begge årene, men fylkeskommunene fikk overført nye oppgaver fra staten"],
      explanation: "Regionreformen tok antallet fra atten til elleve, og oppdelingen fra 2024 tok landet til femten fylker. Bare tre storfylker ble delt, og oppgaveoverføringene ble ikke reversert sammen med grensene.",
    },
    {
      question: "Hva viser at deler av regionreformen ble reversert?",
      options: ["At et strukturvedtak uten lokal forankring har lav holdbarhet når et nytt flertall vil noe annet", "At staten mangler rettslig adgang til å slå sammen fylker uten samtykke fra fylkestingene i den enkelte saken", "At oppgaveoverføringene fra staten til fylkeskommunene mislyktes og måtte tilbakeføres", "At det regionale forvaltningsnivået er i ferd med å bli avviklet som eget nivå i Norge"],
      explanation: "Oppdelingene kom etter vedtak i fylkestingene og behandling i Stortinget, mens flertallet av sammenslåingene består og oppgavene ikke ble reversert. Staten kan endre inndelingen ved lovvedtak.",
    },
    {
      question: "Hvilke oppgaver har fylkeskommunen i dag?",
      options: ["Videregående opplæring, kollektivtransport, fylkesveier, tannhelse og regional planlegging", "Spesialisthelsetjeneste, videregående opplæring, politi og regional næringsutvikling i den enkelte regionen", "Grunnskole, barnehage, pleie og omsorg og arealplanlegging i den enkelte kommunen", "Tilsyn med kommunene, klagebehandling og formidling av statlig politikk i fylket"],
      explanation: "Porteføljen samler oppgaver som er for store for en kommune og for stedbundne for staten. Spesialisthelsetjeneste og politi ligger hos staten, de nære tjenestene hos kommunene, og tilsyn hos statsforvalteren.",
    },
    {
      question: "Hvorfor ligger kollektivtransporten på regionalt nivå?",
      options: ["Fordi et rutenett følger reisemønstre som krysser kommunegrenser, mens tilbudet er stedbundet", "Fordi kollektivtransport krever spesialisert kompetanse som bare staten kan bygge opp i hele sektoren", "Fordi kommunene ikke har rettslig adgang til å inngå kontrakter om persontransport", "Fordi fylkeskommunen eier veiene og derfor også må eie transporttilbudet på dem"],
      explanation: "Virkningene av et rutetilbud går langt utenfor kommunen holdeplassen ligger i, mens et nasjonalt nivå ville mistet kjennskapen til lokale reisemønstre. Det er Oates' teorem anvendt: laveste nivå som omfatter alle berørte.",
    },
    {
      question: "Hva er de to aksene i firfeltstabellen for lokalstyreordninger?",
      options: ["Multifunksjonell mot enfunksjonell, og folkevalgt mot statlig utnevnt ledelse", "Kommunal mot regional enhet, og lovpålagte mot frivillige oppgaver for enheten", "Egne skatteinntekter mot statlige overføringer, og tilsyn mot fritt skjønn", "Stor mot liten enhet, og direkte deltakelse mot representasjon gjennom valgte organer"],
      explanation: "De to aksene er uavhengige, og det er kombinasjonene som gir de fire ordningene. De øvrige skillene er reelle i norsk forvaltning, men de er ikke dem tabellen bygger på.",
    },
    {
      question: "Hva er en generalistkommune som lokalstyreordning?",
      options: ["En lokal enhet som er både multifunksjonell og folkevalgt", "En kommune som har samme oppgaveportefølje som alle andre kommuner uansett størrelse", "En kommune som løser oppgavene sine selv i stedet for gjennom interkommunalt samarbeid", "En kommune som har fått delegert myndighet fra staten på flere ulike saksområder"],
      explanation: "Som ordning er generalistkommunen ett av fire alternativer i firfeltstabellen. Betydningen om lik oppgaveportefølje uansett størrelse er generalistkommune som prinsipp, og å blande de to er en dokumentert felle.",
    },
    {
      question: "Hva er en særkommune?",
      options: ["En enfunksjonell lokal enhet med eget direkte valgt styre for én bestemt oppgave", "En kommune som har fått unntak fra generalistkommuneprinsippet på ett tjenesteområde", "Et interkommunalt selskap der deltakerkommunene selv utpeker medlemmene av styret", "En kommune med særskilte oppgaver på grunn av geografi, størrelse eller språkforhold"],
      explanation: "Særkommunen er folkevalgt og enfunksjonell, med skoledistrikter med eget valgt styre som internasjonalt standardeksempel. Norge har ikke særkommuner, og interkommunale selskaper skiller seg ved at styret ikke er direkte valgt.",
    },
    {
      question: "Hva kjennetegner en prefektordning?",
      options: ["En multifunksjonell lokal enhet ledet av en statlig utnevnt embetsmann med myndighet i distriktet", "En folkevalgt lokal enhet som har fått delegert myndighet fra staten på flere områder i sitt eget distrikt", "En enfunksjonell statlig enhet som fører tilsyn med de folkevalgte organene i området", "En ordning der staten og kommunene deler ansvaret for de samme oppgavene i distriktet"],
      explanation: "Ordningen gir samordning og gjennomføringskraft på bekostning av lokalt demokrati, og er kjent fra Frankrike. Den er en analytisk kontrast til den norske generalistkommunen.",
    },
    {
      question: "Hvor i firfeltstabellen hører statsforvalteren hjemme?",
      options: ["Som lokal stat: statlig utnevnt ledelse med et statlig oppgavefelt", "Som prefektordning, siden embetet er statlig utnevnt og samordner i fylket", "Som generalistkommune, siden embetet dekker mange ulike saksområder", "Som særkommune, siden embetet har ett avgrenset ansvar overfor kommunene"],
      explanation: "Statsforvalteren er statens forlengede arm på stedet. Prefektsammenligningen treffer på utnevningen, men bommer på det avgjørende: embetet leder ikke kommunene eller fylkeskommunen.",
    },
    {
      question: "Hvilke tre hovedroller har statsforvalteren overfor kommunene?",
      options: ["Klagebehandling, tilsyn med lovpålagte plikter og formidling av statlig politikk", "Budsjettgodkjenning, revisjon av regnskapene og fordeling av rammetilskudd", "Instruksjon av kommunestyret, omgjøring av vedtak og oppnevning av kommunedirektør", "Regional planlegging, næringsutvikling og samordning av kollektivtransporten i fylket"],
      explanation: "Embetet kan i tillegg fremme innsigelse mot kommunale arealplaner. Det instruerer ikke kommunestyret i politiske prioriteringer, og planlegging og næringsutvikling er fylkeskommunens oppgaver.",
    },
    {
      question: "Hva er forskjellen på fylkeskommunen og statsforvalteren?",
      options: ["Fylkeskommunen er folkevalgt regional forvaltning, statsforvalteren er statens representant i fylket", "Fylkeskommunen har ansvar for tjenester, statsforvalteren for planlegging og næringsutvikling i den enkelte regionen", "Fylkeskommunen er overordnet kommunene, mens statsforvalteren er sideordnet med dem", "Fylkeskommunen dekker flere fylker, mens statsforvalteren har ansvar for ett fylke hver"],
      explanation: "De to virker i samme geografi og hører hjemme i hvert sitt felt i firfeltstabellen. Fylkeskommunen er ikke overordnet kommunene — nivåene er sideordnede.",
    },
    {
      question: "Hvorfor er fylkeskommunens legitimitet et faglig tema?",
      options: ["Fordi mange innbyggere er usikre på hvilke oppgaver nivået har, og fylkestingsvalget får lite oppmerksomhet", "Fordi fylkeskommunen er det eneste nivået som ikke har et direkte valgt folkevalgt organ med ansvar for hele fylket", "Fordi fylkeskommunen ikke har egne inntekter og derfor er helt avhengig av staten", "Fordi fylkeskommunen har mistet alle sine tjenesteproduserende oppgaver til staten"],
      explanation: "Utviklerrollen er vanskelig å se resultater av, og det gir nivået et forklaringsproblem. Fylkestinget er direkte valgt, og fylkeskommunen driver fortsatt videregående opplæring, tannhelse og kollektivtransport.",
    },
    {
      question: "Hva er det funksjonelle argumentet for et regionalt forvaltningsnivå?",
      options: ["At noen oppgaver er for store for en kommune og for stedbundne for staten", "At kommunene trenger et organ som kan samordne og instruere dem i felles saker", "At staten trenger et regionalt ledd for å kunne føre tilsyn med kommunene", "At innbyggerne har krav på å velge dem som forvalter offentlige midler i fylket"],
      explanation: "Videregående opplæring, kollektivtransport og regional planlegging er standardeksemplene. Merk at argumentet ikke i seg selv avgjør om mellomnivået må være folkevalgt — det er et demokratisk spørsmål.",
    },
    {
      question: "Hvilket alternativ til fylkeskommunen innebærer et skifte fra generalistkommune til lokal stat?",
      options: ["At oppgavene overføres til statlige regionale etater", "At oppgavene overføres til kommunene med interkommunalt samarbeid der de er for store", "At kommunene slås sammen til enheter store nok til å bære oppgavene selv", "At fylkeskommunene slås sammen til færre og større regioner med flere oppgaver"],
      explanation: "Overføring til statlige etater gir tydeligere ansvarslinje oppover, men fjerner den folkevalgte avveiningen mellom sektorer i regionen. De øvrige alternativene beholder folkevalgt ledelse.",
    },
    {
      question: "Hva er det sterkeste argumentet for at mellomnivået bør være multifunksjonelt og folkevalgt?",
      options: ["At avveiningen mellom svært ulike oppgaver i samme budsjett er politisk og krever et demokratisk mandat", "At regionale oppgaver krever større fagmiljøer enn den enkelte kommune kan bygge opp uten interkommunalt samarbeid", "At staten ellers måtte opprette en egen regional etat for hver enkelt oppgave", "At innbyggerne bør kunne velge alle som forvalter offentlige midler i fylket de bor i"],
      explanation: "Multifunksjonalitet og folkevalgt ledelse hører sammen fordi prioritering mellom gruppers interesser er politikk. De øvrige er argumenter for et regionalt nivå, men ikke for at det må være folkevalgt.",
    },
    {
      question: "Hvilket pensumbidrag eier firfeltstabellen for lokalstyreordninger i dette faget?",
      options: ["Fiva mfl. og Stigen mfl. om kommunesektorens organisering", "Kjellberg med autonomi- og integrasjonsmodellen", "Johan P. Olsen med den demokratiske styringskjeden", "Jacobsen med lokaldemokratiets kanaler og deltakelsestrappen"],
      explanation: "Christensen mfl. bærer i tillegg fremstillingen av fylkeskommunens utvikling over tid. Kjellberg, Olsen og Jacobsen eier andre deler av apparatet i Del 6 og Del 7.",
    },
    {
      question: "Hva er A-markøren i stoffet om fylkeskommunen og det regionale nivået?",
      options: ["Å skille spørsmålet om oppgavene fra spørsmålet om hvilken ordning som skal løse dem", "Å konkludere klart med at det regionale nivået bør avvikles eller bestå i sin nåværende form", "Å gjengi alle fire fasene med riktige årstall og riktig rekkefølge i redegjørelsen", "Å regne opp alle fylkeskommunens oppgaver før drøftingen av framtiden begynner"],
      explanation: "Grepet gjør et diffust spørsmål om nivåets framtid til et konkret valg mellom generalistkommune, lokal stat og interkommunale organer, med en kostnad knyttet til hvert alternativ. Korrekt kronologi alene er redegjørelsesstoff.",
    },
  ],
  'stv1400-7-4': [
    {
      question: "Hva er skillet mellom innbyggerinitiert og kommunalt organisert deltakelse?",
      options: ["Hvem som tar initiativet og setter dagsordenen for det som skal diskuteres", "Hvor mange innbyggere som faktisk møter opp og deltar i den enkelte prosessen", "Om deltakelsen er lovpålagt for kommunen eller frivillig fra kommunens side", "Om deltakelsen skjer digitalt eller i fysiske møter arrangert i kommunens lokaler"],
      explanation: "Et folkemøte kommunen inviterer til, er kommunalt organisert selv om alle deltakerne kommer på eget initiativ. Oppmøte, lovhjemmel og møteform er andre forhold enn hvem som setter dagsordenen.",
    },
    {
      question: "Hva kjennetegner innbyggerinitiert deltakelse?",
      options: ["Den er ofte enkeltsaksorientert, oppstår når noe angår deltakerne, og forsvinner når saken er avgjort", "Den er regulert i kommuneloven og må gjennomføres innen bestemte frister", "Den er organisert av kommunen, men innbyggerne bestemmer selv hvilke saker som tas opp", "Den er forbeholdt registrerte organisasjoner som har et etablert forhold til kommunen"],
      explanation: "Formen er ikke bundet av noen dagsorden kommunen har satt, og det er dens styrke. Svakheten er at den er skjevt fordelt, siden den krever tid, nettverk og kjennskap til systemet.",
    },
    {
      question: "Hva er den viktigste svakheten ved deltakelse mellom valg sett fra et demokratisk synspunkt?",
      options: ["Den er skjevt fordelt etter utdanning, inntekt og organisasjonstilknytning", "Den er ulovlig med mindre kommunen har vedtatt en egen medvirkningsordning", "Den kan bare rette seg mot saker kommunen allerede har satt på dagsordenen", "Den gir ingen påvirkning, siden kommunestyret ikke plikter å svare"],
      explanation: "Valget er utformet slik at én stemme teller like mye; deltakelse mellom valg har ingen slik mekanisme. Jo mer innflytelse som flyttes dit, jo mer får skjevheten å si for utfallet.",
    },
    {
      question: "Hvilke tre medvirkningsorganer pålegger kommuneloven hver kommune å ha?",
      options: ["Eldreråd, råd for personer med funksjonsnedsettelse og ungdomsråd eller tilsvarende organ", "Eldreråd, innvandrerråd og et rådgivende utvalg for idretten og for de frivillige organisasjonene", "Ungdomsråd, foreldreutvalg for grunnskolen og brukerutvalg for helse- og omsorgstjenestene", "Eldreråd, ungdomsråd og et partssammensatt utvalg med representanter for de ansatte"],
      explanation: "De tre rådene er rådgivende og har rett til å uttale seg i saker som gjelder gruppen. De er begrunnet i at nettopp disse gruppene deltar lite gjennom de åpne kanalene.",
    },
    {
      question: "Hva slags myndighet har de lovpålagte rådene?",
      options: ["De er rådgivende og har uttalerett, men kommunestyret er ikke bundet av uttalelsene", "De har vedtaksmyndighet i saker som gjelder gruppen de representerer i kommunen i kommunen og fylkeskommunen", "De kan stanse en sak i kommunestyret til den er tilstrekkelig utredet for den aktuelle gruppen", "De kan påklage kommunestyrets vedtak til statsforvalteren på vegne av gruppen"],
      explanation: "Det rådene har, er en lovfestet rett til å bli hørt før vedtaket fattes. Å tilskrive dem vedtaksmyndighet eller klagerett er en begrepsforveksling mellom uttalerett og myndighet.",
    },
    {
      question: "Hva krever plan- og bygningsloven av kommunen når det gjelder medvirkning?",
      options: ["At kommunen legger til rette for medvirkning og påser at grupper som krever tilrettelegging får delta", "At kommunen holder folkeavstemning før arealplaner med stor betydning vedtas", "At kommunen innhenter samtykke fra berørte grunneiere før planen kan vedtas endelig", "At kommunen begrunner skriftlig overfor hver enkelt hvorfor merknaden ikke er tatt til følge i den enkelte saken"],
      explanation: "Planer varsles ved oppstart og legges ut til offentlig ettersyn med frist for merknader. Ordningen er konsultasjon i formen: innspill innhentes, men kommunestyret er ikke bundet.",
    },
    {
      question: "Hva gir et innbyggerforslag rett til?",
      options: ["At kommunestyret plikter å ta stilling til saken, ikke at forslaget må vedtas", "At saken må avgjøres ved rådgivende folkeavstemning i kommunen innen fristen", "At forslaget går direkte til statsforvalteren dersom kommunestyret avviser det", "At forslagsstillerne får møte- og talerett i kommunestyret når saken behandles"],
      explanation: "Ordningen sikrer dagsordenmakt, ikke vedtaksmakt, og er en av få kanaler som er innbyggerinitiert og samtidig lovregulert. Kommunestyret kan behandle forslaget og forkaste det.",
    },
    {
      question: "Hva kjennetegner en rådgivende folkeavstemning i en kommune?",
      options: ["Kommunestyret beslutter den selv, og resultatet er ikke rettslig bindende for vedtaket", "Statsforvalteren beslutter den når en sak er tilstrekkelig omstridt i kommunen", "Den er bindende dersom valgdeltakelsen overstiger en fastsatt terskel i loven", "Den kan bare holdes i saker om kommunesammenslåing og endring av kommunegrenser etter kommuneloven"],
      explanation: "Formelt er ordningen konsultasjon, men reelt er den politisk nær bindende, siden det koster å overkjøre et klart flertall. Den ble brukt i stort omfang i kommunereformen.",
    },
    {
      question: "Hva måler deltakelsestrappen?",
      options: ["Graden av reell påvirkning, altså hvem som har siste ord i saken", "Hvor mange innbyggere som deltar i den enkelte medvirkningsordningen", "Hvor demokratisk en kommune er sammenlignet med andre kommuner i landet", "Hvor godt en medvirkningsprosess er planlagt og gjennomført av kommunen"],
      explanation: "Trappen sorterer ordninger etter hvor mye makt som er overført til deltakerne. En grundig gjennomført prosess om et allerede fattet vedtak ligger fortsatt nederst.",
    },
    {
      question: "Hva ligger på det nederste trinnet i deltakelsestrappen?",
      options: ["Informasjon: innbyggerne får vite noe, og kommunikasjonen går i praksis én vei", "Konsultasjon: innbyggerne blir spurt, men kommunen beholder vedtaksmyndigheten", "Medbestemmelse: innbyggerne deltar i selve avgjørelsen gjennom delegert myndighet", "Ikke-deltakelse: ordninger som er opprettet uten at noen innbyggere er invitert med"],
      explanation: "God informasjon er forutsetningen for alle høyere trinn, men å bli informert gir ingen påvirkning. Et orienteringsmøte om en beslutning som er tatt, er ikke medvirkning uansett hvor godt det gjennomføres.",
    },
    {
      question: "Hvor på deltakelsestrappen ligger et offentlig ettersyn av en arealplan?",
      options: ["På konsultasjonstrinnet: innbyggerne blir spurt, men kommunestyret er ikke bundet", "På det nederste trinnet, siden kommunen bare informerer om hva som er planlagt", "På det øverste trinnet, siden loven pålegger kommunen å gjennomføre medvirkning overfor sine innbyggere", "Utenfor trappen, siden ordningen er lovpålagt og ikke frivillig for kommunen"],
      explanation: "Innspill innhentes før vedtaket, men avgjørelsen ligger hos kommunestyret. At ordningen er lovpålagt sier at den finnes, ikke hvor mye påvirkning den gir.",
    },
    {
      question: "Hvorfor ligger tyngdepunktet i norsk medvirkning på konsultasjonstrinnet?",
      options: ["Fordi vedtaksmyndigheten ligger hos kommunestyret, som er det organet velgerne kan holde ansvarlig", "Fordi kommunene mangler ressurser til å gjennomføre mer omfattende medvirkningsprosesser", "Fordi innbyggerne sjelden ønsker mer innflytelse enn å få uttale seg om saken på forhånd", "Fordi statsforvalteren fører tilsyn med at medvirkningen ikke går ut over kommunestyrets myndighet"],
      explanation: "Å flytte myndighet oppover på trappen ville styrket deltakerne og svekket den demokratiske ansvarslinjen samtidig — og deltakerne er verken valgt eller nødvendigvis representative.",
    },
    {
      question: "Hva finnes det to varianter av når det gjelder deltakelsestrappen?",
      options: ["Arnsteins opprinnelige med flere trinn, og en norsk-tilpasset med færre trinn", "En for statlige og en for kommunale medvirkningsprosesser i norsk forvaltning", "En for lovpålagt og en for frivillig medvirkning fra kommunens side", "En som måler påvirkning og en som måler hvor mange som deltar i prosessen"],
      explanation: "Arnsteins versjon er skarpest i kritikken og beskriver de nederste trinnene som ikke-deltakelse. Å si hvilken inndeling du legger til grunn, er et presisjonsgrep i en besvarelse.",
    },
    {
      question: "Hva er den kritiske brodden i Arnsteins opprinnelige deltakelsestrapp?",
      options: ["At mye av det som presenteres som deltakelse, i realiteten er informasjon eller symbolske øvelser", "At medvirkning alltid gir de ressurssterke mer innflytelse enn de ressurssvake", "At kommunale prosesser tar for lang tid og forsinker nødvendige beslutninger", "At deltakelse uten stemmerett ikke kan regnes som demokratisk innflytelse i det hele tatt over kommunale vedtak"],
      explanation: "Kritikken er en del av modellen, ikke en tilleggstolkning. Skjevheten i deltakelsen er et reelt problem, men den er en annen akse enn den trappen selv måler.",
    },
    {
      question: "Hva er det viktigste forbeholdet når deltakelsestrappen brukes?",
      options: ["At et høyere trinn ikke automatisk er mer demokratisk, siden deltakerne verken er valgt eller representative", "At trappen bare gjelder for kommunale prosesser og ikke for statlige høringer", "At trappen ikke kan brukes på lovpålagte ordninger, siden de uansett må gjennomføres uavhengig av hva deltakerne mener", "At trappen forutsetter at alle innbyggerne i kommunen har fått anledning til å delta"],
      explanation: "Trappen måler påvirkningsgrad, ikke demokratisk kvalitet. En ordning som overfører makt til dem som møter opp, overfører den til en gruppe som deltar systematisk skjevt.",
    },
    {
      question: "Hva kjennetegner formannskapsmodellen?",
      options: ["Formannskapet velges ved forholdstallsvalg, og det stilles ikke noe tillitskrav til det", "Formannskapet utgår fra flertallet i kommunestyret og kan felles ved mistillit med alminnelig flertall", "Formannskapet velges direkte av innbyggerne samtidig med kommunestyrevalget", "Formannskapet ledes av kommunedirektøren, som også har det politiske ansvaret"],
      explanation: "Forholdstallsvalget gjør at også mindretallspartier er representert der de viktigste sakene forberedes, og formannskapet sitter perioden ut. Mistillit hører til den parlamentariske modellen.",
    },
    {
      question: "Hva er kommunedirektørens rolle?",
      options: ["Øverste leder av administrasjonen, ansatt av kommunestyret og uten politisk mandat", "Øverste politiske leder i kommunen, valgt av kommunestyret for hele valgperioden med ansvar for administrasjonen", "Leder av formannskapet og stedfortreder for ordføreren i kommunestyremøtene", "Statens representant i kommunen, med ansvar for å følge opp lovpålagte krav"],
      explanation: "Kommunedirektøren forbereder saker, iverksetter vedtak og leder administrasjonen. Stillingen het tidligere rådmann, og statens representant i fylket er statsforvalteren.",
    },
    {
      question: "Hva kjennetegner den parlamentariske modellen i kommunen?",
      options: ["Byrådet utgår fra kommunestyret, leder administrasjonen og kan felles ved mistillit", "Byrådet velges direkte av innbyggerne og sitter uavhengig av flertallet i kommunestyret", "Byrådet ansettes av kommunestyret på åremål og har faglig, ikke politisk, ansvar", "Byrådet oppnevnes av statsforvalteren etter innstilling fra partiene i kommunestyret"],
      explanation: "Modellen gir en tydelig ansvarslinje der velgeren vet hvem som styrer, og kommunedirektørrollen bortfaller. Innføring krever kvalifisert flertall i kommunestyret.",
    },
    {
      question: "Hva er forskjellen på kommunedirektør og byråd?",
      options: ["Kommunedirektøren er ansatt uten politisk mandat; byrådet er valgt politisk ledelse med mistillitsansvar", "Kommunedirektøren leder administrasjonen i store kommuner, byrådet i de mindre kommunene etter innbyggertall", "Kommunedirektøren har ansvar for økonomien, mens byrådet har ansvar for tjenestene", "Kommunedirektøren velges for fire år av gangen, mens byrådet ansettes på åremål"],
      explanation: "Skillet går på grunnlaget for stillingen og dermed på om vedkommende kan felles ved mistillit. Det handler verken om kommunestørrelse, saksområde eller ansettelsesform.",
    },
    {
      question: "Hvilken avveining ligger under valget mellom de to kommunale styringsmodellene?",
      options: ["Bredde og innsyn for mindretallet mot tydelig ansvarslinje og styringskraft", "Kostnadseffektiv drift mot demokratisk deltakelse mellom valgene i kommunen", "Statlig kontroll mot kommunalt selvstyre i organiseringen av kommunens ledelse", "Faglig uavhengighet i administrasjonen mot politisk lojalitet hos de folkevalgte"],
      explanation: "Formannskapets forholdstallsvalg sikrer mindretallet plass der sakene forberedes, mens byrådets mistillitsordning gjør det mulig å plassere ansvar. Dette er et verdispørsmål, ikke et faglig.",
    },
    {
      question: "Hvilket norsk eksempel belegger at begge styringsmodellene er reelle alternativer?",
      options: ["At Oslo har hatt byrådsmodell lengst, og at ordningen er innført og senere avviklet andre steder", "At alle de fire største kommunene i landet har innført parlamentarisk modell", "At kommuneloven pålegger kommuner over en viss størrelse å ha parlamentarisk modell", "At fylkeskommunene bruker parlamentarisk modell mens kommunene bruker formannskapsmodellen i hele landet"],
      explanation: "Bergen er den andre store kommunen med byrådsmodell, og at ordningen er prøvd og forlatt flere steder viser at avveiningen ikke har noe opplagt svar. Modellen er frivillig og krever kvalifisert flertall.",
    },
    {
      question: "Hvorfor går deltakelse mellom valg utenom den demokratiske styringskjeden?",
      options: ["Fordi den ikke går gjennom valgte representanter og deres ansvarslinje oppover og nedover", "Fordi den ikke er regulert i kommuneloven og derfor mangler rettslig grunnlag", "Fordi den bare gjelder saker som ikke behandles i kommunestyret eller fylkestinget i løpet av valgperioden", "Fordi den er rettet mot administrasjonen og ikke mot de folkevalgte organene"],
      explanation: "At en kanal går utenom kjeden, gjør den verken illegitim eller udemokratisk — men den mangler den legitimeringen valget gir, og det er både dens styrke og dens problem.",
    },
    {
      question: "Hvilket pensumbidrag eier deltakelse mellom valg som eget felt?",
      options: ["Winsvold, Rose og Klausen", "Fiva, Hagen og Sørensen", "Christensen mfl. om forvaltning og politikk", "Esping-Andersen om velferdsregimene"],
      explanation: "Jacobsen bærer i tillegg lokaldemokratiets kanaler og deltakelsestrappen slik den brukes i norsk litteratur. Fiva mfl. eier kommunal politisk organisering og økonomi.",
    },
    {
      question: "Hva er A-markøren i stoffet om politisk deltakelse?",
      options: ["Å plassere norske ordninger på trappen og deretter si hva trappen ikke måler", "Å beskrive alle trinnene i trappen presist før drøftingen av påvirkning begynner", "Å konkludere klart med at norsk medvirkning i hovedsak er symbolsk", "Å regne opp alle de lovpålagte og frivillige medvirkningsordningene kommunen kan ha"],
      explanation: "Grepet består i å legge til at et høyere trinn ikke automatisk er mer demokratisk, og å forklare hvorfor tyngdepunktet ligger på konsultasjonstrinnet. En presis beskrivelse alene er redegjørelsesstoff.",
    },
  ],
  'stv1400-8-1': [
    {
      question: "Hva innebærer det at EØS-avtalen er dynamisk?",
      options: ["Nytt EU-regelverk på de dekkede områdene skal løpende tas inn i avtalen", "Avtalen må reforhandles med jevne mellomrom for å holdes oppdatert", "Nytt EU-regelverk gjelder i Norge automatisk, uten et eget vedtak her", "Partene kan endre avtalens virkeområde ensidig når behovet melder seg"],
      explanation: "Dynamikken er forpliktelsen til løpende å ta inn nytt regelverk. Reforhandling er nettopp det avtalen slipper, og automatikk finnes ikke: innlemmelsen krever beslutning i EØS-komiteen og deretter gjennomføring i norsk rett.",
    },
    {
      question: "Hva betyr det at EØS-avtalen er tidsubegrenset?",
      options: ["Den løper til en av partene sier den opp, uten fornyelse med jevne mellomrom", "Den kan ikke sies opp av noen av partene så lenge markedet består", "Den gjelder helt til EU vedtar et regelverk som erstatter avtalen", "Den fornyes ved en ny beslutning i EØS-komiteen hvert femte år"],
      explanation: "Tidsubegrenset betyr fravær av utløpsdato, ikke fravær av oppsigelsesadgang. Avtalen kan sies opp, og den fornyes ikke gjennom faste vedtak — det er nettopp derfor reforhandling ikke er et politisk vedtakspunkt.",
    },
    {
      question: "Hva sier homogenitetsprinsippet?",
      options: ["Reglene i EØS-området skal være like og tolkes likt i hele området", "Statene i området skal ha lik stemmevekt når nytt regelverk vedtas", "Nasjonale særkrav er tillatt så lenge de gjelder likt for alle aktører", "EFTA-statene skal ha likt regelverk seg imellom, uavhengig av hva EU vedtar"],
      explanation: "Prinsippet gjelder regelinnholdet og tolkningen av det. Det er begrunnelsen for at avtalen må være dynamisk, og for at organene i EFTA-pilaren er innrettet for å komme til samme resultat som EUs egne.",
    },
    {
      question: "Hvorfor forklarer homogenitetsprinsippet at en reservasjon er kostbar?",
      options: ["Fordi en reservasjon skaper nettopp den ulikheten prinsippet skal hindre", "Fordi en reservasjon må godkjennes av EU-domstolen før den kan virke", "Fordi en reservasjon utløser erstatningskrav fra de andre avtalepartene", "Fordi en reservasjon bare kan gjelde deler av en rettsakt, aldri hele"],
      explanation: "Kravet om like regler er hele systemets forutsetning, og et nei bryter med det. Konsekvensen er at den berørte delen av avtalen kan settes ut av kraft — ikke godkjenning fra en domstol og ikke erstatning.",
    },
    {
      question: "Hva er EØS' fire friheter?",
      options: ["Fri bevegelse av varer, tjenester, kapital og personer", "Fri bevegelse av varer, tjenester, arbeidskraft og informasjon", "Fri etablering, fri konkurranse, fritt varebytte og fri prisdannelse", "Fri bevegelse av varer, kapital, energi og forskningsmidler"],
      explanation: "De fire er varer, tjenester, kapital og personer. Personer er videre enn arbeidskraft, og etablering og konkurranse er egne regelsett innenfor markedet snarere enn friheter i seg selv.",
    },
    {
      question: "Hva forbyr den frie bevegelsen av varer en stat å gjøre?",
      options: ["Å stille krav som stenger andres varer ute uten holdbar begrunnelse", "Å kreve at varer merkes med opplysninger på statens eget språk", "Å ilegge merverdiavgift på varer som er innført fra andre stater", "Å føre tilsyn med varer som er produsert i en annen stat i området"],
      explanation: "Friheten retter seg mot krav som virker som handelshindre uten å kunne begrunnes i et anerkjent hensyn på minst inngripende måte. Språkkrav, avgifter og tilsyn er ikke forbudt i seg selv — virkningen og begrunnelsen avgjør.",
    },
    {
      question: "Hva faller i hovedsak utenfor EØS-avtalen?",
      options: ["Tollunionen, den felles handelspolitikken og hoveddelen av landbruk og fiskeri", "Konkurransereglene og reglene om offentlig støtte til næringsvirksomhet", "Reglene om arbeidsmiljø, forbrukervern, produktsikkerhet og miljøkrav til varer", "Reglene om fri bevegelse av tjenester og kapital over landegrensene"],
      explanation: "Avtalen er sektoravgrenset i bredden og dyp i det den dekker. Konkurranse og statsstøtte, arbeidsliv og forbrukervern og de fire frihetene ligger alle innenfor avtalens område.",
    },
    {
      question: "Hvilke stater er parter i EØS-avtalen på EFTA-siden?",
      options: ["Norge, Island og Liechtenstein", "Norge, Island og Sveits", "Norge, Sverige og Danmark", "Norge, Island, Sveits og Liechtenstein"],
      explanation: "Tre EFTA-stater er med i EØS. Sveits er medlem av EFTA, men står utenfor EØS og har i stedet en rekke bilaterale avtaler med EU, mens Sverige og Danmark er medlemmer av unionen.",
    },
    {
      question: "Hvilken funksjon har Europakommisjonen?",
      options: ["Den foreslår regelverk, iverksetter politikk og overvåker at statene følger reglene", "Den vedtar regelverket sammen med Det europeiske råd og medlemsstatenes regjeringer", "Den er statenes kammer, der medlemslandenes regjeringer forhandler", "Den avgjør tvister om hvordan EU-retten skal forstås i medlemsstatene"],
      explanation: "Kommisjonen er det utøvende organet med initiativrett. Vedtaket ligger hos Rådet og Europaparlamentet, statenes kammer er Rådet, og tvisteløsningen ligger hos EU-domstolen.",
    },
    {
      question: "Hvem vedtar regelverk i EU i den vanlige lovgivningsprosedyren?",
      options: ["Rådet for Den europeiske union og Europaparlamentet i fellesskap", "Europakommisjonen alene, etter høring av de berørte medlemsstatene", "Det europeiske råd, der stats- og regjeringssjefene møtes", "Europaparlamentet alene, siden det er direkte valgt av borgerne"],
      explanation: "Begge de lovgivende organene må være enige. Kommisjonen foreslår og iverksetter, Det europeiske råd trekker opp overordnede retningslinjer, og Parlamentet vedtar ikke alene selv om det er direkte valgt.",
    },
    {
      question: "Hva kjennetegner Europaparlamentet?",
      options: ["Det er direkte valgt av borgerne og vedtar regelverk sammen med Rådet", "Det er satt sammen av representanter utpekt av de nasjonale parlamentene", "Det foreslår nytt regelverk og overvåker at statene gjennomfører det", "Det trekker opp unionens overordnede politiske retningslinjer og prioriteringer"],
      explanation: "Parlamentet er borgernes kammer og lovgiver sammen med Rådet. At det er direkte valgt, er nettopp det som gjør demokratispørsmålet skarpt for Norge, som ikke har den kanalen.",
    },
    {
      question: "Hva er Det europeiske råd?",
      options: ["Stats- og regjeringssjefenes organ, som trekker opp overordnede retningslinjer", "Fagstatsrådenes organ, som vedtar nytt regelverk sammen med Europaparlamentet i EU", "En organisasjon for menneskerettigheter og demokrati utenfor EU", "Kommisjonens øverste ledelse, satt sammen av alle kommissærene"],
      explanation: "Tre navn må holdes fra hverandre: Det europeiske råd, Rådet for Den europeiske union og Europarådet, som ikke er et EU-organ i det hele tatt. Forvekslingen er en ren presisjonsfelle.",
    },
    {
      question: "Hva er EU-domstolens rolle?",
      options: ["Den avgjør tvister om EU-retten og har siste ord om hvordan reglene forstås", "Den vedtar regelverk på områder statene ikke blir enige om", "Den overvåker at medlemsstatene gjennomfører det vedtatte regelverket innen fristen", "Den behandler klager fra borgere over nasjonale forvaltningsvedtak"],
      explanation: "Uten en felles tolkningsmyndighet ville like regeltekster blitt forstått ulikt. Overvåkingen i EU-pilaren ligger hos Kommisjonen, og domstolen vedtar ikke regelverk.",
    },
    {
      question: "Hva er kjernen i topilarsystemet?",
      options: ["To sett organer som skal komme til samme resultat uten å være samme organ", "To regelverk som gjelder parallelt, ett for EU-statene og ett for EFTA-statene", "To domstoler som behandler samme sak etter tur, med ankeadgang mellom dem", "To avtaler som til sammen dekker det indre markedet og tollsamarbeidet"],
      explanation: "Systemet skiller hvem som avgjør, ikke hva som blir avgjort. Regelverket er felles, det finnes ingen ankeadgang mellom domstolene, og avtalen omfatter ikke tollsamarbeidet.",
    },
    {
      question: "Hva er ESAs oppgave?",
      options: ["Å overvåke at EFTA-statene i EØS oppfyller forpliktelsene sine etter avtalen", "Å foreslå nytt regelverk som skal gjelde for EFTA-statene i EØS", "Å avgjøre tvister mellom EFTA-statene og EU-statene om avtalen", "Å beslutte hvilke deler av det nye EU-regelverket som skal tas inn i avtalen"],
      explanation: "ESA speiler Kommisjonen som traktatvokter, ikke som forslagsstiller. Tvistene avgjøres av EFTA-domstolen, og innlemmelsen besluttes i EØS-komiteen.",
    },
    {
      question: "Hva gjør EFTA-domstolen?",
      options: ["Avgjør tvister på EFTA-siden og gir tolkningsuttalelser til nasjonale domstoler", "Behandler anker over avgjørelser fra domstolene i EFTA-statene", "Vedtar det regelverket som skal gjelde for EFTA-statene i EØS", "Overvåker at EFTA-statene gjennomfører det innlemmede regelverket innen fristen"],
      explanation: "Domstolen dømmer og tolker. Den er ingen ankeinstans over nasjonale domstoler, som avgjør sine saker selv, og overvåkingsoppgaven ligger hos ESA.",
    },
    {
      question: "Hva skjer i EØS-komiteen?",
      options: ["Partene beslutter ved enighet at nytt EU-regelverk skal tas inn i avtalen", "EFTA-statene forhandler fram innholdet i regelverket før EU vedtar det", "Kommisjonen orienterer EFTA-statene om det regelverket som allerede gjelder", "Domstolene i de to pilarene samordner tolkningen av de felles reglene"],
      explanation: "Komiteen tar stilling til om en regel skal inn, ikke til hva den skal si. Innholdet er fastsatt i EU-organene der Norge ikke deltar, og EFTA-statene opptrer der med én stemme.",
    },
    {
      question: "Når blir en innlemmet EØS-regel norsk rett?",
      options: ["Når den er gjennomført i Norge ved lov eller forskrift", "Når beslutningen i EØS-komiteen er truffet av partene", "Når regelen er vedtatt i Rådet og Europaparlamentet", "Når ESA har godkjent den norske oppfølgingen av regelen"],
      explanation: "Gjennomføringen er det siste trinnet, og der den krever lovendring eller budsjettvedtak, må Stortinget samtykke. Formelen er at vedtaket er norsk, mens innholdet er gitt.",
    },
    {
      question: "Hva kjennetegner reservasjonsretten?",
      options: ["Den er en reell mulighet til å nekte innlemmelse, men er aldri tatt i bruk", "Den er en vetorett Norge kan bruke uten videre følger for avtalen", "Den er en formell bestemmelse uten rettslig innhold i praksis", "Den gir Norge rett til å kreve endringer i regelverket før EU vedtar det"],
      explanation: "Retten følger av enighetskravet i EØS-komiteen, men et nei kan føre til at den berørte delen av avtalen settes ut av kraft. Verken vetorett uten kostnad eller tomt skall treffer beskrivelsen.",
    },
    {
      question: "Hva menes med at Norge har medvirkning uten stemmerett?",
      options: ["Norge kan påvirke i forberedelsen, men deltar ikke når regelen vedtas", "Norge har talerett i Rådet, men kan ikke stemme over forslagene der", "Norge kan stemme i EØS-komiteen, men ikke i EUs egne organer", "Norge kan kreve at et forslag utsettes, men ikke at det endres"],
      explanation: "Innflytelsen er tidlig og faglig gjennom ekspertgrupper og innspill, mens vedtakspunktet er sent og politisk. Å påvirke og å delta er to forskjellige ting, og det ene erstatter ikke det andre.",
    },
    {
      question: "Hva er EØS-midlene?",
      options: ["En finansiell ordning der EFTA-statene bidrar til utjevning i mottakerland", "En medlemskontingent til EUs budsjett som gir Norge stemmerett i Rådet", "En støtteordning der EU finansierer norsk deltakelse i faglige nettverk", "Et reservefond som dekker tap dersom en del av avtalen settes ut av kraft"],
      explanation: "Ordningen er en del av avtaleforholdet og viser at prisen for markedsadgangen ikke bare er regelovertakelse. Bidraget er ikke en kontingent til unionens budsjett og gir ingen stemmerett.",
    },
    {
      question: "Hva gjør Stortingets europautvalg?",
      options: ["Det er et konsultasjonsorgan der regjeringen drøfter EØS-saker med Stortinget", "Det vedtar om nytt EU-regelverk skal innlemmes i EØS-avtalen", "Det fører tilsyn med ESAs virksomhet overfor norske myndigheter og virksomheter", "Det forbereder norske posisjoner i departementenes egne spesialutvalg"],
      explanation: "Utvalget konsulteres og treffer ikke vedtak. Innlemmelsen besluttes i EØS-komiteen, og spesialutvalgene er departementenes forberedende organer.",
    },
    {
      question: "Hvilke pensumbidrag knyttes særlig til EU- og EØS-stoffet i emnet?",
      options: ["Olsen mfl. og Melchior om tilknytningen, Christensen mfl. om forvaltningssiden", "Fiva mfl. om tilknytningen, Stigen mfl. om institusjonene i unionen", "Esping-Andersen om integrasjon, Dahl Jacobsen om regelverksarbeidet", "Jacobsen om deltakelsen, Halvorsen mfl. om markedsadgangen og handelspolitikken"],
      explanation: "Olsen mfl. og Melchior eier tilknytningsspørsmålet, og Christensen mfl. eier hva avtalen gjør med norsk forvaltning. De øvrige navnene eier begreper i helt andre deler av emnet.",
    },
    {
      question: "Hvilken feil begår en kandidat som skriver at Europakommisjonen vedtar EUs regelverk?",
      options: ["Begrepsforveksling, feilen som blander organer med ulike funksjoner", "Manglende drøfting, feilen som stopper ved en ren redegjørelse", "Teori uten norsk forankring, feilen som mangler et navngitt eksempel", "Irrelevant utenomsnakk, feilen som bruker plass på noe oppgaven ikke ber om"],
      explanation: "Kommisjonen foreslår, iverksetter og overvåker; Rådet og Europaparlamentet vedtar. Å bytte om på rollene snur arbeidsdelingen på hodet og ødelegger grunnlaget for å si hvor Norge er med.",
    },
  ],
  'stv1400-8-2': [
    {
      question: "Hva er formell suverenitetsavståelse?",
      options: ["At myndighet rettslig overføres til et organ som kan binde uten mellomledd", "At statens faktiske handlingsrom snevres inn av avtaler den har inngått", "At staten forplikter seg til å følge regler den har vært med på å utforme", "At staten lar et annet lands myndigheter håndheve regelverk på sitt område"],
      explanation: "Den formelle aksen gjelder rettslig myndighet. Innsnevret handlingsrom er den reelle aksen, og frivillig binding er noe enhver avtale innebærer uten at myndighet er overført.",
    },
    {
      question: "Hva er reell suverenitetsavståelse?",
      options: ["At det faktiske handlingsrommet er smalt, selv om myndigheten er i behold", "At myndighet er overført ved traktat til et organ utenfor staten selv", "At staten har mistet retten til å tre ut av avtalen den er bundet av", "At domstolene i staten er bundet av en overnasjonal domstols avgjørelser"],
      explanation: "Den reelle aksen måler hvor mye valg som er igjen. Traktatfestet overføring hører til den formelle aksen, og retten til å si opp EØS-avtalen består.",
    },
    {
      question: "Hvorfor må formell og reell suverenitetsavståelse holdes fra hverandre?",
      options: ["Fordi de måler forskjellige ting, og et svar med bare den ene blir upresist", "Fordi den ene gjelder traktater og den andre gjelder forskrifter og vedtak", "Fordi den ene gjelder staten og den andre gjelder kommunene og fylkene", "Fordi den ene er varig og den andre kan trekkes tilbake av Stortinget"],
      explanation: "Den ene gjelder rett, den andre gjelder rom. Bruker du bare den formelle, overser du hvorfor spørsmålet stilles; bruker du bare den reelle, blir påstanden lett å tilbakevise.",
    },
    {
      question: "Hva menes med innenfor/utenfor-paradokset?",
      options: ["At Norge er dypt integrert i markedet og utenfor organene som vedtar reglene", "At noen politikkområder er dekket av avtalen mens andre faller utenfor den", "At Norge er medlem av EFTA, men ikke av Den europeiske union", "At norske virksomheter møter ett regelverk hjemme og et annet i eksporten"],
      explanation: "Paradokset er kombinasjonen av dyp integrasjon og fravær fra beslutningene. Det beskriver posisjonen; om posisjonen er et demokratisk problem, er et eget spørsmål.",
    },
    {
      question: "Hva er forskjellen på innenfor/utenfor-paradokset og demokratisk underskudd?",
      options: ["Paradokset beskriver posisjonen, mens underskuddet vurderer hva den betyr", "Paradokset gjelder markedet, mens underskuddet gjelder rettsreglene", "Paradokset gjelder Norge, mens underskuddet bare gjelder EU-statene", "Paradokset er et fagbegrep, mens underskuddet er hentet fra debatten"],
      explanation: "Å skille beskrivelse fra vurdering er selve grepet: først si hvor Norge står, deretter drøfte hva det betyr for folkestyret. Begge er fagbegreper, og begge gjelder Norge.",
    },
    {
      question: "Hva er demokratisk underskudd i EØS-sammenheng?",
      options: ["At bindende regler blir til uten en representasjonskanal for de som bindes", "At avtalen ble inngått uten at spørsmålet var til folkeavstemning", "At Stortinget har færre representanter enn Europaparlamentet har", "At norske velgere har lavere valgdeltakelse enn velgerne i EU"],
      explanation: "Innvendingen gjelder kanalen fra velger til beslutning for den delen av regelverket som vedtas i Rådet og Europaparlamentet. Den handler ikke om representantantall eller valgdeltakelse.",
    },
    {
      question: "Hvorfor er det upresist å si at Norge er uten demokratisk kontroll med EØS-reglene?",
      options: ["Fordi innlemmelsen krever enighet og gjennomføringen skjer i norske former", "Fordi norske representanter deltar i avstemningene i Rådet og Parlamentet", "Fordi reservasjonsretten har vært brukt flere ganger i praksis", "Fordi EØS-reglene bare gjelder for offentlige virksomheter i Norge"],
      explanation: "Påstanden overser de norske vedtakspunktene og er lett å tilbakevise. Den presise innvendingen er at ingen av kontrollpunktene gjelder regelens innhold.",
    },
    {
      question: "Hva skiller beslutningspåvirkning fra beslutningsdeltakelse?",
      options: ["Påvirkning skjer tidlig og faglig, deltakelse skjer i vedtaket og med stemme", "Påvirkning skjer gjennom Stortinget, mens deltakelse skjer gjennom regjeringen", "Påvirkning gjelder innholdet, mens deltakelse gjelder gjennomføringen her", "Påvirkning er uformell og derfor uten reell betydning for utfallet"],
      explanation: "Skillet ligger i tid og form: innspill mens teksten formes, mot stemme når den vedtas. Å skrive at påvirkning er betydningsløs, gir motparten et lett svar.",
    },
    {
      question: "Hva er kjernen i ansvarsproblemet ved EØS-regler?",
      options: ["Statsråden svarer for gjennomføringen, men ikke for innholdet i regelen", "Ingen norsk myndighet har ansvar for regler med opphav i EU-organene", "Ansvaret ligger hos ESA, som fører tilsyn med den norske gjennomføringen", "Stortinget svarer for innholdet, mens regjeringen svarer for tidspunktet"],
      explanation: "Ansvar forutsetter at noen kunne valgt annerledes, og der valget er smalt, blir ansvaret smalt. Det er ansvarsuklarhet, ikke ansvarsfravær — et norsk organ gjennomfører og et norsk organ kontrollerer.",
    },
    {
      question: "Hva er europeisering av forvaltningen?",
      options: ["At norske organer får oppgaver, arbeidsmåter og kontaktflater fra samarbeidet", "At norske forvaltningsorganer formelt legges under EUs egne organer", "At norsk forvaltning organiseres etter samme modell som i EU-statene", "At beslutningsmyndighet flyttes fra departementene til Stortinget i EØS-saker"],
      explanation: "Europeisering er en forvaltningsprosess: oppgavene, arbeidsmåtene og kontaktflatene endres uten at organet skifter formell tilhørighet.",
    },
    {
      question: "Hva skiller europeisering fra suverenitetsavståelse?",
      options: ["Europeisering er en forvaltningsprosess, avståelse et spørsmål om myndighet", "Europeisering gjelder kommunene, avståelse gjelder staten og etatene", "Europeisering er frivillig, mens avståelse er pålagt av EUs egne organer", "Europeisering gjelder regelverket, mens avståelse gjelder økonomiske forhold"],
      explanation: "Den ene endrer hvordan et organ arbeider, den andre hvem som kan bestemme. De henger sammen, men å bruke dem om hverandre visker ut poenget.",
    },
    {
      question: "Hva menes med integrasjon nedenfra?",
      options: ["At koblingen til Europa ofte går gjennom fagetatene før saken blir politisk", "At kommunene blir bundet av EØS-reglene før staten blir det", "At virksomheter og innbyggere tilpasser seg reglene lenge før de blir vedtatt", "At EFTA-statene samordner seg før de møter EU-siden i EØS-komiteen"],
      explanation: "Observasjonen gjelder hvor integrasjonen skjer først: i fagmiljøene, faglig begrunnet og lite synlig politisk. Det er ingen påstand om at embetsverket handler illojalt.",
    },
    {
      question: "Hva menes med topilar-tilpasning ved myndighetsoverføring?",
      options: ["At myndighet overfor norske aktører legges til ESA i stedet for til EU-organet", "At Norge får plass i EU-organet med talerett, men uten stemmerett der", "At vedtak fra EU-organet må godkjennes av Stortinget for å gjelde her", "At EFTA-domstolen overtar EU-domstolens oppgaver i alle saker som gjelder Norge"],
      explanation: "Tilpasningen legger vedtakskompetansen i EFTA-pilaren, mens vurderingen i praksis bygger på EU-organets arbeid. Formen holder Norge utenfor EU-organet, funksjonen gir samme resultat.",
    },
    {
      question: "Hva viser ordningene der vedtaksmyndighet er lagt til ESA?",
      options: ["At graden av suverenitetsavståelse varierer mellom ulike saksfelt", "At Norge har fått samme stilling som medlemsstatene på disse feltene", "At EØS-avtalen er blitt en tollunion på områder med felles tilsyn", "At reservasjonsretten er bortfalt på de områdene ESA treffer vedtak"],
      explanation: "Her er ikke bare innholdet gitt utenfra; også vedtaket treffes utenfor norske organer, men i den pilaren Norge er part i. Det er en tredje posisjon mellom norsk vedtak og EU-vedtak.",
    },
    {
      question: "Hva innebærer det at en norsk etat står i to linjer samtidig?",
      options: ["Den har en styringslinje til departementet og en faglig linje ut i Europa", "Den rapporterer både til departementet og til Stortingets europautvalg", "Den mottar instrukser fra ESA i tillegg til instrukser fra departementet", "Den er underlagt både norsk rett og EU-retten i den enkelte enkeltsaken"],
      explanation: "Spenningen gjelder styringsdialog og informasjon, ikke lojalitetsbrudd. Departementet styrer fortsatt gjennom mål, resultatkrav og rapportering, og ESA instruerer ikke norske etater.",
    },
    {
      question: "Hva gjør departementenes spesialutvalg for EØS-saker?",
      options: ["De vurderer nytt regelverk faglig og forbereder de norske posisjonene", "De beslutter om et nytt regelverk skal tas inn i EØS-avtalen", "De fører tilsyn med at etatene gjennomfører regelverket innen fristen", "De representerer Norge i forhandlingene med EU-siden i EØS-komiteen"],
      explanation: "Utvalgene forbereder og vedtar ikke. Innlemmelsen besluttes i EØS-komiteen, og skillet mellom å forberede og å beslutte går igjen i hele dette stoffet.",
    },
    {
      question: "Hvor treffer EØS den demokratiske styringskjeden?",
      options: ["I lovgivningsleddet, fordi innholdet er bundet før saken når Stortinget", "I iverksettingsleddet, fordi etatene mottar instrukser utenfra", "I valgkanalen, fordi velgerne aldri har stemt over selve avtalen", "I regjeringsleddet, fordi statsråden mister instruksjonsmyndigheten sin over etatene"],
      explanation: "Svekkelsen ligger oppstrøms: fullmakten Stortinget skulle utøve, møter en ferdig tekst. Det er fristilling som treffer det nederste leddet i kjeden.",
    },
    {
      question: "Hva skiller EØS fra ytre fristilling som svekkelse av styringskjeden?",
      options: ["EØS binder innholdet før linjen begynner, fristilling flytter utøvelsen ut", "EØS er innført uten norsk vedtak, mens fristilling er vedtatt av Stortinget", "EØS gjelder staten, mens fristilling bare gjelder kommunal virksomhet", "EØS forsinker ansvarslinjen, mens fristilling fjerner ansvaret helt"],
      explanation: "De treffer hver sin ende av kjeden. Begge er vedtatt av norske organer, og i ingen av tilfellene forsvinner ansvaret — det er redskapet som flyttes bort fra ansvaret.",
    },
    {
      question: "Hvordan bør EØS plasseres i graderingen av svekkelser i styringskjeden?",
      options: ["Som en reell svekkelse med formen i behold, ikke som et brudd", "Som et rent kanalskifte, siden styringen bare skjer på en annen måte", "Som et brudd, siden et ledd i kjeden er tatt bort helt", "Som en styrking, siden regelverket blir likt i hele markedet"],
      explanation: "Vedtakene er norske og ansvarslinjen består, men innholdet er gitt. Der vedtaksmyndighet er lagt til ESA, ligger svekkelsen et hakk lenger, uten at det blir et brudd.",
    },
    {
      question: "Hva gjelder Stortingets samtykke i EØS-saker?",
      options: ["Innlemmelsen, der gjennomføringen krever lovendring eller budsjettvedtak", "Innholdet i regelverket, før det blir vedtatt i Rådet og Europaparlamentet", "Alle beslutninger som treffes av partene i EØS-komiteen", "ESAs enkeltvedtak rettet mot norske virksomheter og myndigheter"],
      explanation: "Samtykket gjelder å binde Norge der gjennomføringen krever lovendring eller budsjettvedtak. Innholdet fastsettes i EU-organene uten norsk deltakelse.",
    },
    {
      question: "Hva gjelder ingen av de norske kontrollpunktene i EØS-saker?",
      options: ["Innholdet i den regelen som skal innlemmes i avtalen", "De norske posisjonene før saken blir avgjort", "Gjennomføringen av regelen i norsk lov eller forskrift", "Bevilgningene som følger av at regelen gjennomføres"],
      explanation: "Europautvalget gjelder posisjon, samtykket gjelder innlemmelse og bevilgning, og etterkontrollen gjelder gjennomføring. At ingen gjelder innholdet, er den presise formen av demokratiinnvendingen.",
    },
    {
      question: "Hvordan bør et debattuttrykk som «fax-demokrati» brukes i en besvarelse?",
      options: ["Som en karakteristikk fra en side i debatten, gjengitt med ramme rundt", "Som en nøytral beskrivelse av hvordan tilknytningen faktisk virker i praksis", "Som et fagbegrep hentet fra pensumlitteraturen om europeisering", "Som en konklusjon svaret kan bygge på uten videre begrunnelse"],
      explanation: "Testen er om den andre siden i debatten ville skrevet under på formuleringen. Ville de ikke det, er det en påstand og skal merkes som en påstand.",
    },
  ],
  'stv1400-9-1': [
    {
      question: "Hva er kjernen i feil #1, manglende drøfting?",
      options: ["At besvarelsen redegjør grundig og korrekt, men aldri setter noe opp mot noe", "At besvarelsen drøfter grundig, men gjengir fagstoffet upresist underveis i drøftingen", "At besvarelsen bruker for mye plass på stoff som er relevant for temaet, men ikke for spørsmålet", "At besvarelsen behandler bare det ene leddet i en oppgave som ber om to"],
      explanation: "Feil #1 er at drøftingen mangler helt, ofte fordi drøftingsdelen er en ny redegjørelse i komprimert form. Upresis gjengivelse er feil #2 eller #8, plassbruk på uspurt stoff er feil #6, og halv behandling av et par er feil #7.",
    },
    {
      question: "Hvorfor er feil #1 den mest kostbare feilen i registeret?",
      options: ["Fordi drøfting er en terskel: uten den stopper svaret på D eller lavere uansett", "Fordi den nesten alltid opptrer sammen med flere av de andre ti feilene", "Fordi den er den eneste feilen sensorveiledningene for H2024 og H2025 nevner", "Fordi den koster mest tid å rette når besvarelsen først er skrevet ferdig"],
      explanation: "Akse 1 virker som en terskel, ikke som en kvalitetsdimensjon: fravær av drøfting stopper besvarelsen under C uansett hvor godt den skårer ellers. Veiledningene nevner flere feil, og retting av manglende drøfting er faktisk billig — fire setninger kan holde.",
    },
    {
      question: "Hva er varsellampen for feil #1?",
      options: ["Å lete etter ord som «men», «samtidig» og «det avhenger av» i drøftingsdelen", "Å telle hvor mange setninger hvert punkt i en begrepsliste har fått", "Å stryke det norske eksempelet og se om avsnittet sier det samme uten", "Å legge de to besvarelsene ved siden av hverandre og se om begge har en drøftingsdel"],
      explanation: "Men-prøven fanger manglende drøfting: uten avveiningsmarkører er drøftingsdelen sannsynligvis en redegjørelse nummer to. Setningstellingen fanger feil #2, strykprøven fanger feil #4, og lengdesammenligningen fanger feil #5.",
    },
    {
      question: "Hva skiller feil #1 fra feil #3?",
      options: ["Ved #1 mangler drøftingen; ved #3 finnes den, men er blandet inn i redegjørelsen", "Ved #1 er drøftingen for kort til å telle; ved #3 er den for lang og mister sammenhengen", "Ved #1 mangler norsk empiri; ved #3 er empirien der, men den er utdatert", "Ved #1 er begrepene uforklarte; ved #3 er de forklart, men brukt om hverandre"],
      explanation: "Skillet går på om avveiningen finnes. Ved #3 vurderes det underveis i redegjørelsen, så sensor aldri finner et sted som bærer drøftingen. Empirifeilene er #4 og #11, og begrepsfeilene er #2 og #8.",
    },
    {
      question: "Hva er den andre formen av feil #3?",
      options: ["At drøftingen bygger på et begrep som aldri er forklart noe sted i besvarelsen", "At redegjørelsen bygger på et begrep som er hentet fra feil pensumbidrag", "At drøftingen lander på en konklusjon oppgaveteksten ikke ba om", "At redegjørelsen gjentas i sammendrag før drøftingen begynner"],
      explanation: "Også begreper som først dukker opp i drøftingsdelen skal forklares — dette presiseres i et svar til studentene i H2024, med allokeringseffektivitet som eksempel. Feil pensumbidrag, uventet landing og et sammendrag er andre problemer, og ingen av dem er #3.",
    },
    {
      question: "Hva består feil #9 i?",
      options: ["Å slutte fra fristilling eller konkurranseutsetting til tap av styring uten å prøve påstanden", "Å hevde at fristilling og konkurranseutsetting er to navn på det samme grepet", "Å behandle bare fristilling når oppgaven uttrykkelig ber om både fristilling og konkurranseutsetting", "Å bruke et utdatert eksempel på fristilling som senere er reversert"],
      explanation: "Feil #9 er å hoppe over avveiningen: indirekte styring gjennom mål- og resultatstyring, kontrakt eller eierstyring er fortsatt styring. Å blande de to begrepene er #8, halv behandling er #7 og utdatert empiri er #11.",
    },
    {
      question: "Hva er kontrollspørsmålet som retter feil #9?",
      options: ["Hvilken kanal overtok styringen, og hva kan den kanalen faktisk gjøre?", "Hvilket pensumbidrag eier begrepet, og hva skiller det fra nabobegrepet?", "Hvilket ledd i oppgaveteksten svarer dette avsnittet på, sagt i én setning?", "Hvilken av de to besvarelsene mine er kortest, og har den en drøftingsdel?"],
      explanation: "Har du skrevet at noe forsvinner eller faller bort, skal du navngi kanalen som overtok og si hva den kan. Avsendersjekken hører til feil #8, avsnittsprøven til feil #6 og #7, og balanseprøven til feil #5.",
    },
    {
      question: "Hva er feil #2?",
      options: ["Å liste opp begreper uten å forklare hva hvert av dem innebærer", "Å forklare begreper grundig, men uten å knytte dem til en avsender", "Å forklare ett begrep grundig og de øvrige i oppgaven overfladisk", "Å bruke et begrep i en betydning som avviker fra pensumbidragets"],
      explanation: "Feil #2 rammer Akse 2: listen er der og ordene er riktige, men ingen av dem er fylt med innhold. Manglende avsender, ujevn dybde og avvikende betydning er andre svakheter, og den siste ligger nærmest feil #8.",
    },
    {
      question: "Hvilket stoff er særlig utsatt for feil #2?",
      options: ["Webers kjennetegn, Dahl Jacobsens tre verdier og Esping-Andersens tre velferdsregimer", "Kommunereformen, regionreformen og senere reverseringer av fylkessammenslåinger", "Oates' desentraliseringsteorem og forutsetningene om eksterne virkninger", "Skillet mellom formell og reell suverenitetsavståelse i EØS-avtalen"],
      explanation: "Stoff som lar seg liste, blir ofte bare listet — derfor rammer feil #2 idealtypens kjennetegn, de tre verdiene og de tre regimene hardest. De øvrige svaralternativene er stoff der andre feil, som #11, #2 i forutsetningsform og #8, er mer typiske.",
    },
    {
      question: "Hva er feil #4?",
      options: ["At teorien er korrekt gjengitt, men aldri anvendt på navngitt norsk forvaltning", "At den norske empirien er navngitt og konkret, men gjelder en ordning som senere er avviklet", "At norsk empiri fyller så mye plass at teorien blir stående uforklart", "At teorien er hentet fra et pensumbidrag som ikke dekker det aktuelle temaet"],
      explanation: "Feil #4 rammer Akse 3 og er den mest gjennomgående markøren i arkivet: abstrakt teori uten norsk anvendelse plasseres lavt. Utdatert empiri er feil #11, og overvekt av empiri på bekostning av teori er en annen ubalanse.",
    },
    {
      question: "Hva er strykprøven?",
      options: ["Å fjerne det norske eksempelet og se om avsnittet sier nøyaktig det samme uten det likevel", "Å fjerne alle fagbegrepene fra teksten og se om den fortsatt gir mening for en leser", "Å fjerne det siste avsnittet og se om besvarelsen fortsatt har en landing", "Å fjerne den svakeste av de to besvarelsene og regne ut hva karakteren blir"],
      explanation: "Strykprøven skiller empiri som bygger argumentet fra empiri som pynter: et eksempel som bærer en påstand, etterlater et hull når det fjernes. De øvrige svaralternativene er ikke kontroller boka bruker.",
    },
    {
      question: "Hva skiller konkurranseutsetting fra privatisering?",
      options: ["Ved konkurranseutsetting er finansieringen og ansvaret fortsatt offentlig", "Ved konkurranseutsetting overføres eierskapet til leverandøren for kontraktsperioden", "Ved privatisering beholder kommunen ansvaret, men leverandøren tar over driften", "Ved privatisering settes tjenesten ut på anbud med krav fastsatt av kommunestyret"],
      explanation: "Konkurranseutsetting flytter produksjonen ut på anbud, mens finansieringen og det politiske ansvaret blir igjen hos kommunen, og kontrakten er selv et styringsverktøy. Privatisering overfører eierskap eller ansvar, og forvekslingen er den mest dokumenterte varianten av feil #8.",
    },
    {
      question: "Hva skiller passiv fra aktiv representasjon?",
      options: ["Passiv er statistisk speiling; aktiv er at byråkraten fremmer sin gruppes interesser", "Passiv er at byråkraten fremmer sin gruppes interesser; aktiv er statistisk speiling", "Passiv gjelder rekruttering til stillinger; aktiv gjelder rekruttering til lederstillinger", "Passiv gjelder statsforvaltningen; aktiv gjelder kommunal forvaltning"],
      explanation: "Passiv representasjon er sammensetningen, aktiv representasjon er atferden i beslutninger. At det første gir det andre, er en hypotese og ikke en gitt sammenheng — og det er nettopp der drøftingen ligger. Skillet går verken mellom stillingsnivåer eller mellom stat og kommune; begge begrepene gjelder overalt i forvaltningen.",
    },
    {
      question: "Hvorfor er feil #5, ubalanse mellom de to besvarelsene, så farlig?",
      options: ["Fordi begge besvarelsene må bestås, slik at den svakeste avgjør utfallet", "Fordi den beste besvarelsen teller mer enn femti prosent i helhetsvurderingen", "Fordi sensor leser den korteste besvarelsen først og danner seg et inntrykk", "Fordi en kort besvarelse automatisk vurderes som manglende drøfting"],
      explanation: "Valgregelen siden H2020 er to av tre essay, hver femti prosent, og begge må bestås. En strålende besvarelse kan derfor ikke redde en som ligger under minstekravet. Vektingen er lik, leserekkefølgen er uvesentlig, og kort er ikke det samme som udrøftet.",
    },
    {
      question: "Hva er motgrepet mot feil #5?",
      options: ["Å sette en hard klokke og forlate første besvarelse når tiden er ute, uansett", "Å skrive begge besvarelsene parallelt, ett avsnitt om gangen på hver", "Å velge de to oppgavene du kan mest om, slik at begge går raskt", "Å skrive den vanskeligste besvarelsen først mens du er uthvilt"],
      explanation: "Klokka settes før du skriver, og første besvarelse forlates når tiden er ute — du kan komme tilbake i sluttkontrollen, men ikke låne tid bakover. Parallellskriving ødelegger sammenhengen, og valget skal styres av hva du kan drøfte, ikke av hva du kan mest om.",
    },
    {
      question: "Hva er feil #6?",
      options: ["Å bruke plass på stoff som er relevant for temaet, men ikke svarer på spørsmålet", "Å bruke plass på stoff som er faglig feil, men som virker relevant for det oppgaven spør om", "Å bruke for lite plass på redegjørelsen fordi drøftingen tok overhånd", "Å bruke pensumbidrag oppgaveteksten ikke selv har navngitt"],
      explanation: "Prøven er om avsnittet svarer på et ledd i oppgaveteksten, ikke om stoffet handler om temaet. Veiledningene advarer særlig mot utlegninger om byråkrati som skjellsord, om byråkratiets framvekst og om modeller oppgaven ikke nevner. Å bruke egne pensumbidrag er tillatt og ofte bra.",
    },
    {
      question: "Hva er avsnittsprøven?",
      options: ["Å si i én setning hvilket ledd i oppgaveteksten hvert enkelt avsnitt svarer på", "Å telle antall setninger i hvert avsnitt og jevne ut de lengste", "Å sjekke at hvert avsnitt inneholder minst ett navngitt norsk eksempel", "Å sjekke at hvert avsnitt begynner med en påstand og ender med en kilde"],
      explanation: "Avsnittsprøven fanger både feil #6 og det leddet i en sammenligning som aldri ble behandlet, altså feil #7. Den tvinger deg dessuten til å lese oppgaveteksten på nytt, og mange trekk skyldes at oppgaven ble husket litt feil.",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å besvare tre essayoppgaver når bare to skal telles", "Å besvare to essayoppgaver fra samme temaområde i stedet for to ulike", "Å besvare oppgavene i en annen rekkefølge enn de står i settet", "Å levere en besvarelse som er lengre enn det oppgitte ordantallet"],
      explanation: "Du besvarer to av tre essay, en valgregel som har gjeldt siden H2020, og et tredje svar teller ikke ekstra — det stjeler bare tid fra de to som telles. Temavalg og rekkefølge er fritt, og det finnes ingen ordgrense i emnet.",
    },
    {
      question: "Hva er feil #7?",
      options: ["Å behandle bare det ene leddet i en oppgave som ber om to, eller å behandle dem på ulike akser", "Å behandle begge ledd like grundig hver for seg, men sette dem opp mot hverandre uten å konkludere", "Å behandle to ledd oppgaven ikke har bedt om å få sammenlignet", "Å behandle begge ledd i redegjørelsen, men bare det ene i drøftingen"],
      explanation: "Kravet i den komparative sjangeren er at begge ledd behandles på hver sammenligningsakse. To parallelle referater er ikke en sammenligning. Manglende konklusjon og skjev fordeling mellom delene er andre svakheter, men ikke det #7 måler.",
    },
    {
      question: "Hva er feil #11?",
      options: ["Å bygge svaret på et faktagrunnlag som har flyttet seg siden pensum ble skrevet", "Å bygge svaret på et pensumverk som foreligger i en eldre utgave enn dagens", "Å bygge svaret på empiri hentet fra andre land enn Norge, i stedet for på norsk forvaltning", "Å bygge svaret på egne erfaringer fra offentlig sektor i stedet for på pensum"],
      explanation: "Tre områder skifter raskere enn pensumutgavene: kommune- og regioninndelingen, departementsstrukturen og omfanget av EØS-regelverket. Eldre utgaver av pensumverkene er uproblematiske fordi begrepsapparatet er stabilt, og egne erfaringer er tillatt som illustrasjon.",
    },
    {
      question: "Hva er motgrepet mot feil #11?",
      options: ["Å bygge svaret på mekanismen og bruke tall og navn bare som illustrasjon", "Å unngå norsk empiri helt og holde seg til modellene", "Å oppgi årstall for hver reform slik at leseren ser hva som er ferskt", "Å bare bruke empiri hentet fra den nyeste sensorveiledningen"],
      explanation: "Mekanismen er stabil — at øremerking virker prisvridende, at inndeling er et styringsvirkemiddel — mens tallene ikke er det. Å droppe empirien ville utløst feil #4, årstall øker risikoen, og veiledningene er ikke et empirilager.",
    },
    {
      question: "Hvilken feil skal rettes først når tiden er knapp?",
      options: ["De som rammer drøftingen, siden bare drøftingen fungerer som terskel mot C", "De som rammer begrepspresisjonen, siden de er raskest å rette og synes tydeligst for sensor", "De som rammer disponeringen, siden de påvirker begge besvarelsene", "De som rammer faktagrunnlaget, siden en faktafeil er den synligste"],
      explanation: "Retterekkefølgen følger av at bare Akse 1 er en terskel: familie 1 først, med det ene unntaket at en besvarelse helt uten drøftingsdel har førsteprioritet fordi begge må bestås. Begrepspresisjon og faktagrunnlag flytter sjelden en karakter alene.",
    },
  ],
  'stv1400-9-2': [
    {
      question: "Hvor stor del av essayalternativene i arkivet har formen «redegjør for X, drøft deretter Y»?",
      options: ["Alle 39, gjennom fire ulike eksamensformer fra H2010 til H2025", "Rundt to tredeler, mens resten har vært rene drøftingsoppgaver", "Bare de 18 som ligger i dagens format, fra H2020 og senere", "Alle unntatt de komparative, som utgjør 11 av oppgaveplassene"],
      explanation: "Den todelte formen er konstant gjennom hele korpuset uten unntak. De 11 komparative oppgaveplassene er ikke et unntak fra formen, men en variant der redegjørelsesdelen selv er et par.",
    },
    {
      question: "Hvordan er de 240 minuttene fordelt i modellen boka bruker?",
      options: ["Cirka 15 til settlesing og valg, cirka 210 til to essay, og cirka 15 til sluttkontroll", "Cirka 30 til settlesing og valg, cirka 180 til to essay, cirka 30 til sluttkontroll", "Cirka 10 til settlesing, cirka 220 til to essay, cirka 10 til sluttkontroll", "Cirka 20 til settlesing, cirka 200 til to essay, cirka 20 til sluttkontroll"],
      explanation: "To ganger 105 minutter gir 210, og de resterende 30 ligger i settlesing med valg foran og gjennomlesing bak. Det er denne differansen som forklarer hvorfor «cirka 1 time og 45 minutter per essay» ikke summerer til fire timer.",
    },
    {
      question: "Hva ligger inne i de cirka 105 minuttene per essay?",
      options: ["Egen disponering, selve skrivingen og egen kontroll av akkurat dette essayet", "Bare selve skrivingen, siden disponering og kontroll er felles poster", "Skriving og kontroll, mens all disponering skjer i settlesingen foran", "Disponering og skriving, mens all kontroll skjer i sluttkontrollen bak"],
      explanation: "Blokken på 105 minutter er cirka 10 til disponering, cirka 85 til skriving og cirka 10 til kontroll av dette essayet. Settlesing, valg og den siste felles gjennomlesingen ligger utenfor, i postene foran og bak.",
    },
    {
      question: "Hva sier disponeringsregelen om forholdet mellom redegjørelse og drøfting?",
      options: ["Drøftingen bør fylle rundt to tredeler, men halvparten holder når redegjørelsen krever mye plass", "Redegjørelsen bør fylle rundt to tredeler av besvarelsen, siden den er grunnlaget drøftingen hviler på", "De to delene bør være omtrent like lange i alle oppgavetyper, uavhengig av hvor stor redegjørelsen er", "Forholdet er fritt, siden emnet ikke har noen ordgrense i det hele tatt"],
      explanation: "H2025-veiledningen gjengir en tommelfingerregel fra forelesning om to tredeler drøfting, med et uttrykkelig unntak der redegjørelsen selv er stor. At det ikke finnes ordgrense, gjelder lengden på besvarelsen, ikke fordelingen mellom delene.",
    },
    {
      question: "Når gjelder unntaket om at halvparten holder?",
      options: ["Når redegjørelsen er strukturelt stor, som når alle leddene i en modell skal forklares", "Når kandidaten har mindre enn en time igjen og må prioritere mellom redegjørelse og drøfting", "Når oppgaven er en påstandsdrøfting og tesen allerede er formulert", "Når oppgaven ber om et begrepspar i stedet for en hel modell"],
      explanation: "Unntaket er strukturelt: noen faktadeler kan ikke komprimeres uten at begrepsbeherskelsen lider, som når alle leddene i styringskjeden eller begge byråkratimodellene skal forklares. Ber oppgaven bare om ett begrepspar, er redegjørelsen ferdig på en tredel.",
    },
    {
      question: "Hva må en disposisjon inneholde for å virke?",
      options: ["Navnet på de to hensynene drøftingen skal veie mot hverandre", "En oversikt over temaene som skal behandles, i den rekkefølgen de kommer", "Ferdig formulerte åpningssetninger til hvert av de fire trinnene", "En liste over pensumbidragene som skal navngis underveis i teksten"],
      explanation: "Uten navnet på motsetningen skriver du en redegjørelse, uansett hvor ordentlig disposisjonen ser ut. En temaliste er en innholdsfortegnelse, ferdige setninger er skrivetid brukt to ganger, og pensumbidragene kan hentes underveis.",
    },
    {
      question: "Hva er overgangssetningens funksjon?",
      options: ["Å markere for leseren hvor faktadelen slutter og selve resonnementet begynner", "Å oppsummere redegjørelsen slik at leseren husker den gjennom drøftingen", "Å varsle hvilken konklusjon drøftingen kommer til å ende i", "Å erstatte behovet for en avklaring av begrepene i innledningen"],
      explanation: "Uten en synlig grense leter sensor etter drøftingen og finner spredte vurderinger, altså feil #3. Setningen skal peke bakover på det som er redegjort og framover på det som skal veies — ikke oppsummere, og ikke røpe landingen.",
    },
    {
      question: "Hvilke fire ledd har et avveiningsavsnitt?",
      options: ["Hensyn, mothensyn, variabelen svaret avhenger av, og norsk forankring som bærer", "Påstand, begrunnelse, motargument og gjendrivelse av motargumentet til slutt", "Begrepsavklaring, redegjørelse, vurdering og oppsummering", "Innledning, empiri, teori og konklusjon på det oppgaven spurte om"],
      explanation: "Mangler variabelen, blir avsnittet en konstatering av at det finnes to sider. Mangler forankringen, faller Akse 3. De øvrige alternativene beskriver enten en argumenterende tekst eller hele essayet, ikke ett avveiningsavsnitt.",
    },
    {
      question: "Når skal landingen være skarp?",
      options: ["I faglige spørsmål, der faget faktisk har et svar å gi", "I verdispørsmål, siden en tydelig mening viser selvstendighet", "I alle oppgaver, siden forbehold alltid svekker en konklusjon", "Bare i påstandsdrøfting, der oppgaven ber om et standpunkt"],
      explanation: "Formen skal følge spørsmålets art: skarpt der faget har et svar, betinget der spørsmålet er et verdivalg. Å skjule en normativ landing i faglig språk er svakere enn å si den åpent, og å lande betinget på et faglig spørsmål er en unnvikelse.",
    },
    {
      question: "Hva kjennetegner sjangeren påstandsdrøfting?",
      options: ["Oppgaven leverer en tese som skal prøves, ikke bekreftes eller avvises uten videre", "Oppgaven ber om to begreper stilt opp mot hverandre på flere akser", "Oppgaven gir en ferdig modell som skal brukes operasjonelt på navngitte norske forhold", "Oppgaven ber om en kort definisjon med ett norsk eksempel"],
      explanation: "Påstandsdrøftingen gir deg den ene siden av motsetningen ferdig, og jobben er å skaffe den andre og vise hvor tesen holder. De øvrige alternativene beskriver komparativ redegjørelse, anvendelse og kortsvarsformen.",
    },
    {
      question: "Hvor mange oppgaveplasser med eksplisitt påstand finnes i arkivet, og fra når?",
      options: ["Fire, alle fra H2019 og senere, i tre av seks terminer i dagens format", "Elleve, jevnt fordelt over hele perioden fra H2010 og fram til og med H2025", "Fire, alle fra perioden før H2019, og ingen etter det", "Atten, altså samtlige essayplasser i dagens format"],
      explanation: "Påstandsdrøftingen er den tydeligste veksten i korpuset: den finnes ikke i noe sett før H2019. De elleve plassene tilhører den komparative sjangeren, og de atten er alle essayplassene i dagens format til sammen.",
    },
    {
      question: "Hva er de tre måtene å prøve en påstand på?",
      options: ["Presisere hva den hevder, finne det empiriske motstykket, og angripe mekanismen", "Bekrefte den, avvise den, og deretter velge det av svarene som lar seg best begrunne", "Definere begrepene, gjengi pensum om temaet, og konkludere med et standpunkt", "Finne fordeler, finne ulemper, og telle hvilken side som har flest punkter"],
      explanation: "De tre grepene kan brukes hver for seg eller sammen, og et sterkt svar bruker minst to. Å telle punkter eller å velge mellom ja og nei er ikke en prøving, og en gjengivelse av pensum er en redegjørelse.",
    },
    {
      question: "Hva er «motforestillingen som redder påstanden»?",
      options: ["Poenget som gjør at påstanden verken kan godtas eller avvises uten presisering", "Argumentet som til slutt viser at påstanden er gal og derfor må forkastes i sin helhet", "Innvendingen sensor forventer at kandidaten avviser med empiri", "Den delen av påstanden som er hentet direkte fra pensumlitteraturen"],
      explanation: "Motforestillingen er en presisering, ikke en benektelse — som at indirekte styring fortsatt er styring, eller at departementene er blitt faglige og ikke partipolitiske sekretariater. Den viser at kandidaten har sett hva som faktisk er på spill.",
    },
    {
      question: "Hva skal du gjøre først hvis en besvarelse mangler drøfting og du har 25 minutter igjen?",
      options: ["Skrive overgangssetningen og deretter avveiningsavsnittet", "Fullføre redegjørelsen, slik at faktadelen i det minste er komplett", "Legge til norske eksempler, siden empirikravet er ufravikelig", "Lese gjennom den andre besvarelsen for å sikre at den er feilfri"],
      explanation: "Rekkefølgen følger av at bare drøftingen er en terskel: en ufullstendig redegjørelse koster trekk, mens manglende drøfting koster to nivåer. Empiri er et grunnkrav og kommer etter, og den sterke besvarelsen er allerede over terskelen.",
    },
    {
      question: "Hvorfor tilhører den siste kvarttimen den svakeste besvarelsen?",
      options: ["Fordi begge besvarelsene må bestås, slik at den svakeste avgjør utfallet", "Fordi sensor vurderer den siste besvarelsen strengere enn den første", "Fordi den sterke besvarelsen ikke lenger kan forbedres etter at den er skrevet ferdig", "Fordi den svakeste alltid inneholder flest formelle feil å rette"],
      explanation: "Minutter lagt til en besvarelse som allerede er over terskelen, har avtakende verdi; minutter lagt til en som ligger under, kan flytte den til bestått. Rekkefølge og formelle feil spiller ingen rolle i vurderingen.",
    },
    {
      question: "Hva er A-markøren i denne sjangeren?",
      options: ["Å navngi variabelen avveiningen avhenger av, og si hvilken vei den trekker", "Å bruke flere pensumbidrag enn oppgaven strengt tatt krever", "Å skrive en lengre drøftingsdel enn to tredeler av besvarelsen", "Å ta et tydelig standpunkt allerede i innledningen og holde fast ved det gjennom teksten"],
      explanation: "De fleste C-besvarelser har en reell avveining, men sier ikke under hvilke betingelser det ene hensynet veier tyngre. Å navngi variabelen krever ingen ny kunnskap. Flere kilder, mer lengde og tidlig standpunkt løfter ingenting i seg selv.",
    },
    {
      question: "Hva er den vanligste årsaken til manglende drøfting i denne sjangeren?",
      options: ["At kandidaten planla en drøfting, men gikk tom for tid før den ble skrevet ferdig", "At kandidaten ikke kan stoffet godt nok til å ha en selvstendig mening om det", "At kandidaten har misforstått hva instruksjonsverbet «drøft» betyr", "At kandidaten har valgt en oppgave utenfor sitt eget interessefelt"],
      explanation: "Feilen oppstår nesten alltid av disponering og ikke av uvitenhet, og motgrepet er derfor klokka og redningsprotokollen, ikke mer lesing. De aller fleste som havner under C i emnet, kan stoffet.",
    },
    {
      question: "Hva gjør du når oppgaveteksten inneholder to instruksjonsverb?",
      options: ["Svarer på begge, siden hvert verb er en egen bestilling", "Velger det verbet som passer best til stoffet du kan best", "Svarer på det siste, siden det som regel er drøftingsleddet", "Slår dem sammen til én sammenhengende vurdering av temaet"],
      explanation: "Sammensatte formuleringer er normen, og en oppgave kan være essay på øverste nivå med et komparativt redegjørelsesledd og en påstand i drøftingsleddet. Den vanligste måten å tape poeng på er å svare på det ene og glemme at det sto to.",
    },
  ],
  'stv1400-9-3': [
    {
      question: "Hva kreves i en komparativ redegjørelse?",
      options: ["At begge ledd behandles med presis terminologi på de samme aksene", "At det ene leddet behandles grundig og det andre kort som kontrast", "At leddene behandles i hvert sitt avsnitt, i den rekkefølgen oppgaven nevner dem", "At forskjellene listes opp først og likhetene nevnes til slutt"],
      explanation: "Kravet er at begge ledd står på de samme dimensjonene, slik at de faktisk møtes i teksten. To gode, atskilte beskrivelser er parallelle referater, ikke en sammenligning, og rekkefølgen i oppgaveteksten er uten betydning.",
    },
    {
      question: "Hvor mange oppgaveplasser i arkivet har komparativ redegjørelse som form?",
      options: ["Elleve", "Fire", "Trettini", "Femtini"],
      explanation: "Elleve av oppgaveplassene har en redegjørelsesdel som selv er komparativ. Fire er antallet anvendelsesplasser, 39 er alle essayalternativene til sammen, og 59 er kortsvarsspørsmålene fra H2010 til H2019.",
    },
    {
      question: "Hva er testen på om noe er en sammenligningsakse?",
      options: ["Om du kan si hva begge leddene gjør på den dimensjonen", "Om dimensjonen er nevnt i oppgaveteksten du har fått", "Om dimensjonen er behandlet i pensumbidraget som eier begrepet", "Om dimensjonen gir en tydelig forskjell mellom de to leddene"],
      explanation: "Kan du ikke fylle ut begge cellene, er det et trekk ved det ene leddet og ikke en akse. En akse må gjelde begge; den behøver verken stå i oppgaveteksten eller gi stor forskjell — en akse der leddene ligner, kan være svært opplysende.",
    },
    {
      question: "Hvorfor skal en komparativ besvarelse også si hva leddene har felles?",
      options: ["Fordi det felles utgangspunktet gjør forskjellene presise i stedet for å utvanne dem", "Fordi sensor krever at likheter og forskjeller får nøyaktig like mye plass i besvarelsen", "Fordi likhetene erstatter behovet for en egen drøftingsdel", "Fordi det felles utgangspunktet alltid er den drivende aksen"],
      explanation: "Uten en bakgrunn å tre fram mot leser sensor to atskilte ting i stedet for et par. Likheten skal ikke gjøre forskjellen mindre, men mer presis — og det er nettopp fordi departement og direktorat begge er forvaltningsorganer at rolleforskjellen er interessant.",
    },
    {
      question: "Hva er den drivende aksen?",
      options: ["Den forskjellen de andre forskjellene følger av", "Den forskjellen som er størst målt i praktiske konsekvenser", "Den aksen oppgaveteksten selv nevner først", "Den aksen der de to leddene er mest like hverandre"],
      explanation: "Å si at én forskjell er grunnleggende og at de andre følger av den, er en påstand om rekkefølge mellom forskjellene, og det er nettopp det som løfter fra liste til struktur. Størrelse på konsekvensen og plassering i oppgaveteksten sier ingenting om årsaksforholdet.",
    },
    {
      question: "Hva er den drivende aksen mellom det ansvarlige og det representative byråkrati?",
      options: ["Hvor legitimiteten kommer fra — fra prosedyren eller fra sammensetningen", "Hvordan de to modellene ser på hierarki og kommandolinjer", "Hvor mye politisk styring de to modellene tillater i enkeltsaker", "Hvilken av dem som er mest utbredt i norsk sentralforvaltning"],
      explanation: "Både synet på saksbehandlerens egenskaper og kravet til rekruttering følger av uenigheten om legitimitetskilden. Hierarki er et trekk ved den ene modellen og ikke en felles akse, og utbredelse er et empirisk spørsmål, ikke en analytisk forskjell.",
    },
    {
      question: "Hva kjennetegner anvendelsessjangeren?",
      options: ["Modellen brukes operasjonelt på norsk empiri, og hvert element får en dom", "Modellen gjengis grundig i full bredde, og deretter vurderes den kritisk som modell", "To modeller settes opp mot hverandre og prøves mot hverandres styrker", "En påstand om norsk forvaltning prøves mot det pensum sier"],
      explanation: "Modellen er linjalen, ikke det som måles: gjengivelsen skal være kort, og dommene om hvor den treffer og hvor den ikke gjør det, er selve oppgaven. Modellkritikk er tillatt og gir uttelling, men kommer etter anvendelsen, ikke i stedet for.",
    },
    {
      question: "Hvor mange anvendelsesplasser finnes i arkivet, og hvor ligger de?",
      options: ["Fire, og alle fire ligger i dagens format", "Fire, og alle fire ligger før formskiftet i H2020", "Elleve, jevnt fordelt over hele perioden", "Atten, altså samtlige essayplasser i dagens format"],
      explanation: "Anvendelsessjangeren er liten i korpuset og stor i det som predikerer neste eksamen, siden alle fire plassene ligger i dagens format. De elleve plassene tilhører den komparative sjangeren, og de atten er alle essayplassene i dagens format til sammen.",
    },
    {
      question: "Hvor lang bør gjengivelsen av modellen være i en anvendelsesoppgave?",
      options: ["Kort — modellen er verktøyet, og det som faktisk måles, er empirien", "Rundt halvparten, siden modellen må sitte før den kan brukes", "Like lang som anvendelsen, slik at delene er i balanse", "Så lang som nødvendig, siden det ikke finnes noen ordgrense"],
      explanation: "Bruker du halve besvarelsen på modellen, har du skrevet en redegjørelse der oppgaven sa vurder, og du har brukt opp plassen dommene skulle hatt. At det ikke finnes ordgrense, gjelder besvarelsens lengde, ikke fordelingen mellom delene.",
    },
    {
      question: "Hva betyr det at Webers byråkratimodell er en idealtype?",
      options: ["At den er et analyseverktøy å måle virkeligheten mot, ikke en beskrivelse", "At den beskriver den best fungerende organisasjonsformen som finnes", "At den beskriver hvordan byråkratier faktisk fungerer i moderne stater i dag", "At den er et normativt ideal for hvordan forvaltningen bør organiseres"],
      explanation: "Å behandle idealtypen som en beskrivelse er hovedfellen i dette stoffet, og den slår hardest i anvendelsesoppgaver, siden hvert avvik da leses som forfall. Idealtypen er verken en påstand om det faktiske eller en anbefaling om det ønskelige.",
    },
    {
      question: "Hvordan skal en anvendelsesoppgave lande på et gradsspørsmål?",
      options: ["Med en grad og et mønster: hvor samsvaret er høyt, hvor det er lavt, og hva som er felles", "Med et ja eller nei, siden en tydelig konklusjon alltid er sterkere", "Med en konstatering av at virkeligheten er mer sammensatt enn modellen", "Med en anbefaling om hvordan forvaltningen bør organiseres om for å passe bedre til modellen"],
      explanation: "Spørsmålsformen «i hvilken grad» ber om en grad, og landingen er en karakteristikk av avviket, ikke en sum. «Det er både og» er ikke en gradsangivelse, og en anbefaling svarer på et annet spørsmål enn det som ble stilt.",
    },
    {
      question: "Hva er A-grepet når du forklarer avvik mellom modell og virkelighet?",
      options: ["Å vise at avvikene er vedtatt og ikke oppstått, hvert med sin egen begrunnelse", "Å vise at modellen er utdatert og bør erstattes av en nyere", "Å vise at avvikene skyldes svak gjennomføring av reformene som ble vedtatt", "Å vise at avvikene er tilfeldige og ikke danner noe mønster"],
      explanation: "De fleste besvarelser konstaterer avvik; få forklarer dem. At fristillingen, mål- og resultatstyringen og de politiske rådgiverne er innførte grep med begrunnelse i hensyn modellen ikke veier, flytter svaret fra beskrivelse til analyse.",
    },
    {
      question: "Hva skiller konkurranseutsetting fra privatisering?",
      options: ["Ved konkurranseutsetting blir finansieringen og det politiske ansvaret hos kommunen", "Ved konkurranseutsetting overføres både ansvaret og eierskapet til leverandøren i kontraktsperioden", "Ved privatisering settes tjenesten ut på anbud med kommunale kvalitetskrav", "Ved privatisering beholder kommunen eierskapet, men ikke driften"],
      explanation: "Kontrakten er selv et styringsverktøy, og det er derfor forvekslingen ødelegger hele drøftingen av markedsmekanismer og politisk styring. Privatisering overfører eierskap eller ansvar, og da er kommunen ute av forholdet.",
    },
    {
      question: "Hva er forskjellen på formell og reell suverenitetsavståelse?",
      options: ["Formell gjelder hvem som fatter vedtaket, reell gjelder hvor mye av innholdet som er gitt", "Formell suverenitet gjelder traktater, mens reell suverenitet gjelder forskrifter fra forvaltningen", "Formell gjelder EØS-avtalen, reell gjelder medlemskap i EU", "Formell gjelder norsk rett, reell gjelder folkeretten"],
      explanation: "Formelt beholder Norge selvbestemmelsen gjennom innlemmelse ved enstemmighet og reservasjonsretten; reelt overtas regelverk løpende fordi avtalen er dynamisk og homogenitetsprinsippet krever likt regelverk. Begge sider skal stå.",
    },
    {
      question: "Hva er parallelle referater?",
      options: ["To atskilte beskrivelser av hvert sitt ledd, uten noen påstand om forholdet mellom dem", "To beskrivelser av samme ledd, hentet fra to ulike pensumbidrag", "En beskrivelse som gjentar den samme informasjonen i både redegjørelsen og drøftingen", "To besvarelser som behandler det samme temaet fra hver sin vinkel"],
      explanation: "Formen er lettere å skrive fordi du kan ett ledd om gangen, og det er nettopp derfor akseformen viser mer: den krever at du holder begge i hodet samtidig. Rettelsen krever ingen ny kunnskap, bare en annen orden.",
    },
    {
      question: "Hva sier likhetskravet om departement og direktorat?",
      options: ["Begge er forvaltningsorganer med statsbudsjettfinansiering og instruksjonsmyndighet over seg", "Begge er egne rettssubjekter med hvert sitt styre og eget ansvar", "Begge er politisk ledet, med statsråden som øverste leder i det daglige", "Begge er unntatt fra både forvaltningsloven og offentleglova i den ordinære saksbehandlingen sin"],
      explanation: "Likheten er poenget: den er nettopp det som skiller dem begge fra et fristilt selskap, som er et eget rettssubjekt utenfor forvaltningen. Direktoratet er ikke politisk ledet i det daglige, og begge er underlagt forvaltningsloven og offentleglova.",
    },
    {
      question: "Hva trener den kalde banken i dette kapitlet?",
      options: ["Å mobilisere riktig begrepsapparat og riktig norsk empiri fra oppgaveteksten alene", "Å skrive fullstendige besvarelser innenfor eksamens tidsramme på fire timer", "Å gjenkjenne hvilke feil en svak besvarelse begår", "Å pugge de begrepene kortsvarsformen testet til og med H2019"],
      explanation: "Banken har ingen hint fordi eksamen ikke har det: å hente fram stoffet under press er en annen ferdighet enn å kunne det. Skriveøving på tid hører til øvingseksamenene, og feilgjenkjenning til feilvaksinen.",
    },
    {
      question: "Hvorfor er begrepsforveksling særlig kostbart i komparative oppgaver?",
      options: ["Fordi hele svaret hviler på at de to leddene holdes fra hverandre", "Fordi sensor vurderer terminologi strengere i denne sjangeren enn i andre", "Fordi komparative oppgaver har flere fagbegreper enn andre oppgavetyper", "Fordi forvekslingen da også rammer den norske empirien i besvarelsen"],
      explanation: "En forveksling i en løpende tekst koster et trekk; en forveksling i en sammenligning river bort grunnlaget for hele oppgaven. Motgrepet er å skrive én setning om hva det ene begrepet ikke er — det koster en linje og forsikrer svaret.",
    },
  ],
  'stv1400-9-4': [
    {
      question: "Hva er den viktigste forskjellen mellom A-, C- og E-versjonene i dette kapitlet?",
      options: ["Drøftingskvalitet, norsk forankring og selvstendighet", "Mengden fagbegreper og hvor mange pensumbidrag som er navngitt", "Lengden på besvarelsen og hvor mange avsnitt redegjørelsen har", "Hvor presist begrepene er definert i innledningen til besvarelsen"],
      explanation: "E-versjonene inneholder omtrent like mye ren kunnskap som A-versjonene, og begrepene er presise i begge. Det som skiller nivåene, er bevegelser i teksten: avveining, forankring som bærer, og grep oppgaven ikke ba om.",
    },
    {
      question: "I hvor mange av de 16 terminene i arkivet opptrer spørsmålet om hvordan staten kan styre kommunesektoren?",
      options: ["Seks", "Ni", "Elleve", "Fire"],
      explanation: "Virkemiddel-oppgaven er korpusets mest gjenbrukte enkeltoppgave med seks terminer — essay i H2013, H2019, H2022 og H2025, og kortspørsmål i H2010 og H2018 ordinær. Ni terminer gjelder temaet statlig styring som helhet, og elleve er antall slots temaet dekker.",
    },
    {
      question: "Hvilke to bolker har redegjørelsesskjelettet for virkemiddeloppgaven?",
      options: ["Organiseringen og de tre styringsvirkemidlene", "De juridiske virkemidlene og de økonomiske virkemidlene i hver sin bolk", "Kommunens oppgaver og kommunens inntekter", "Detaljstyring og rammestyring som to atskilte former"],
      explanation: "Bolk 1 er territoriell inndeling, antall styringsnivåer og oppgavefordeling; bolk 2 er juridiske, økonomiske og pedagogiske virkemidler. De pedagogiske virkemidlene faller ut hvis man bare tar med de to første, og detaljstyring mot rammestyring er en skala virkemidlene plasseres på.",
    },
    {
      question: "Hvilke to drøftingsvinkler har virkemiddeloppgaven båret i arkivet?",
      options: ["Lokaldemokratiet og allokeringseffektiviteten", "Rettssikkerheten og den kommunale økonomien", "Kommunestrukturen og statsforvaltningens organisering", "Velferdsstatens bærekraft og forholdet til EØS"],
      explanation: "Vinkelen mot lokaldemokratiet ble stilt i H2019 og igjen i H2025; vinkelen mot allokeringseffektivitet i H2022. Den første er et demokratiargument om hvem som skal bestemme, den andre et effektivitetsargument om hvor ressursene gir mest nytte.",
    },
    {
      question: "Hva er A-markøren i virkemiddeloppgaven?",
      options: ["Å rangere virkemidlene etter hvor dypt de faktisk griper inn, ikke etter kategori", "Å nevne alle tre virkemiddeltypene og forklare hver enkelt av dem grundig", "Å slå fast at øremerkede tilskudd er det mest inngripende virkemiddelet", "Å beskrive kommunereformen og regionreformen i egen bolk"],
      explanation: "Rangeringen etter inngrepsdybde er nesten motsatt av rangeringen etter synlighet: den individuelle rettigheten og nivået på de frie inntektene binder hardere enn øremerking, som er det mest synlige. Å nevne alle tre typene er et grunnkrav, ikke et løft.",
    },
    {
      question: "Hva er skillet mellom de to slags ulikhet A-besvarelsen i oppgave 1 bruker?",
      options: ["Ulikhet som skyldes ulik prioritering, og ulikhet som skyldes ulike forutsetninger lokalt", "Ulikhet mellom kommuner, og ulikhet mellom innbyggere som bor i den samme kommunen", "Ulikhet i tjenestetilbud, og ulikhet i kommunale skatteinntekter", "Ulikhet som er politisk vedtatt, og ulikhet som har oppstått over tid"],
      explanation: "Skillet forklarer hvorfor binding og utjevning ikke er alternativer: prioriteringsulikhet møtes med binding, forutsetningsulikhet med utjevning gjennom inntektssystemet. De to virkemiddeltypene svarer altså på to ulike problemer.",
    },
    {
      question: "Hvorfor ble C-versjonen av oppgave 1 ikke en B?",
      options: ["Den manglet egen rangering, forankring i drøftingsdelen og en spesifisert variabel", "Den manglet en reell drøfting og stoppet derfor under terskelen mot C", "Den forvekslet rammetilskudd med øremerkede tilskudd i redegjørelsen", "Den svarte bare på det ene av oppgavens to instruksjonsledd"],
      explanation: "C-versjonen har en reell drøfting, korrekte begreper og begge instruksjonsledd besvart. Det den mangler, er tre bevegelser: en rangering den selv har begrunnet, et norsk holdepunkt som bærer et argument i drøftingsdelen, og en variabel siste setning kunne festet seg i.",
    },
    {
      question: "Hva skiller C-nivået fra E-nivået i begge oppgavene?",
      options: ["At det finnes en reell avveining med noe konkret på begge sider", "At redegjørelsen er vesentlig mer utfyllende, presis og bredt dekkende", "At norsk empiri er navngitt og brukt til å bygge argumentet", "At besvarelsen kobler oppgaven til andre temaer i faget"],
      explanation: "Den ene bevegelsen — avveiningen — er verdt to karakternivåer og koster fire til seks setninger. Norsk forankring som bærer og kobling på tvers hører til løftet fra C mot A, og E-versjonenes redegjørelser er allerede utfyllende.",
    },
    {
      question: "Hva kjennetegner en oppgavefamilie i dette faget?",
      options: ["Oppgaver som deler redegjørelsesdel, men har ulike drøftingsdeler", "Oppgaver som gjentas ordrett i flere terminer på rad", "Oppgaver som hører til den samme temaaksen i pensumlitteraturen for emnet", "Oppgaver som stilles både som essay og som kortspørsmål"],
      explanation: "Redegjørelsesskjelettene er mer stabile enn drøftingsspørsmålene, og variasjonen fra termin til termin skjer i hovedsak i drøftingsleddet. Derfor bør du øve redegjørelsesdelen én gang og drøftingsdelen to ganger.",
    },
    {
      question: "Hva er graderingen som er A-markøren i fristillingsoppgaven?",
      options: ["Indre fristilling, ytre fristilling og minoritetseierskap som tre trinn på én skala", "Vertikal og horisontal spesialisering forstått som to helt atskilte former for utskilling", "Juridiske, økonomiske og pedagogiske virkemidler rangert etter bindingsgrad", "New Public Management og post-NPM som to faser i norsk forvaltningsreform"],
      explanation: "Graderingen viser at forskjellen mellom trinnene er større enn forskjellen mellom å være i forvaltningen og utenfor, og den avviser dermed påstanden om tap av styring med begrunnelse i stedet for med et forbehold. Vertikal og horisontal spesialisering er riktignok to ulike akser, men horisontal spesialisering er oppdeling mellom enheter på samme nivå og ikke en form for utskilling — og uansett er det ingen gradering.",
    },
    {
      question: "Hva mister statsråden ved ytre fristilling, ifølge A-besvarelsen?",
      options: ["Muligheten til å styre i enkeltsaker, mens muligheten til å styre retningen består", "All påvirkning på virksomheten, siden instruksjonsmyndigheten faller bort ved omdanning", "Ministeransvaret overfor Stortinget for hele virksomhetens virke", "Muligheten til å styre retningen, mens inngripen i enkeltsaker består"],
      explanation: "Eierstyring gjennom styrevalg, avkastningskrav og forventninger er et reelt virkemiddel. Ministeransvaret består for eierskapet og sektorpolitikken, men ikke for driften, og det er nettopp der den demokratiske kostnaden oppstår.",
    },
    {
      question: "Hva er skillet mellom styringskraft og kontrollerbarhet i fristillingsoppgaven?",
      options: ["Styringskraften skifter kanal, mens muligheten til å plassere ansvar blir svekket", "Styringskraften svekkes, mens ansvaret følger virksomheten ut av forvaltningen", "Begge deler svekkes likt, siden ansvar og styring alltid følger hverandre", "Kontrollerbarheten skifter kanal, mens styringskraften faller helt bort"],
      explanation: "Fullmakten flyttes, mens ansvaret blir liggende: statsråden svarer for et selskap hen ikke kan instruere. Det er en reell demokratisk kostnad, og det er en annen kostnad enn tapt styringsevne.",
    },
    {
      question: "Hvorfor lander A-besvarelsen i oppgave 2 skarpt og i oppgave 1 betinget?",
      options: ["Fordi det ene spørsmålet er faglig og det andre er et verdispørsmål", "Fordi den ene oppgaven er en påstandsdrøfting og den andre et vanlig essay", "Fordi den ene oppgaven har mer entydig norsk empiri enn den andre", "Fordi skarpe landinger passer i statlige og betingede i kommunale spørsmål"],
      explanation: "Om styringen er flyttet ut av rekkevidde, har et svar faget kan gi; om prisen er verdt å betale, er et verdivalg. Landingsformen følger spørsmålets art, ikke sjangeren, temaet eller nivået oppgaven handler om.",
    },
    {
      question: "Hva er den dyreste feilen E-versjonen av oppgave 2 begår?",
      options: ["Å skrive «delvis riktig» og deretter gjenta redegjørelsen i stedet for å prøve selve påstanden", "Å forveksle indre og ytre fristilling i beskrivelsen av de to formene for spesialisering", "Å utelate New Public Management fra sammenhengen fristillingen står i", "Å behandle det ene leddet grundig og det andre i to setninger"],
      explanation: "Et forbehold foran en oppsummering ser ut som stillingtaken uten å være det, og i en påstandsoppgave er det den mest forførende formen for tomgang. Begrepene er korrekte, reformsammenhengen er med, og begge ledd er behandlet.",
    },
    {
      question: "Hva er en oppgraderingsmeny?",
      options: ["Listen over grep som skiller en C fra en A, formulert som ting du kan gjøre", "Listen over pensumbidrag en toppbesvarelse må navngi", "Listen over feilene som må rettes før en besvarelse i det hele tatt kan bestå", "Listen over temaer som gir høyest uttelling på eksamen"],
      explanation: "Innrammingen er poenget: en mangelliste sier at du kom til kort, en meny sier hva neste bevegelse er. Grepene krever nesten aldri mer kunnskap — de handler om å gradere, koble og spesifisere.",
    },
    {
      question: "I hvilken rekkefølge leser sensorblikket de fire aksene?",
      options: ["Drøfting først, siden bare den fungerer som terskel, og selvstendighet sist", "Begrepsbeherskelse først, siden den er grunnlaget for alt det andre", "Norsk forankring først, siden den er fagets strengeste enkeltkrav", "Selvstendighet først, siden den avgjør om besvarelsen når helt opp til toppkarakter"],
      explanation: "Rekkefølgen er et prioriteringsverktøy: Akse 1 er en terskel, Akse 2 og 3 er grunnkrav som senker nivået, og Akse 4 forutsetter at Akse 1 allerede er på plass. Finner du problemer på flere akser med ti minutter igjen, retter du drøftingen først.",
    },
  ],
  'stv1400-9-5': [
    {
      question: "Hva er den avgjørende presiseringen i en oppgave som måler norsk forvaltning mot Webers modell?",
      options: ["At modellen er en idealtype, altså et rent analyseverktøy og ikke en beskrivelse", "At modellen er utviklet for private bedrifter og bare delvis passer på staten", "At modellen beskriver hvordan byråkratier fungerte da den ble formulert", "At modellen er et normativt ideal forvaltningen bør strebe mot"],
      explanation: "Uten den presiseringen leses hvert avvik som forfall, og vurderingsdelen blir en klage i stedet for en analyse. Idealtypen er verken en historisk beskrivelse, en anbefaling eller en modell hentet fra privat sektor.",
    },
    {
      question: "Hva er mønsteret A-besvarelsen finner i samsvaret mellom idealtypen og norsk sentralforvaltning?",
      options: ["Samsvaret er høyt for hvordan avgjørelser blir til, og lavere for hvordan enhetene er avgrenset", "Samsvaret er høyt i departementene og gjennomgående lavere både i direktoratene og i tilsynene", "Samsvaret er høyt i det administrative nivået og lavt i det politiske", "Samsvaret var høyt før reformene og har falt jevnt siden"],
      explanation: "Avvikene ligger på grensene mellom enheter, ikke inne i dem: saksbehandlingen har ikke flyttet seg bort fra modellen, det er organiseringen rundt den som har det. Det er en observasjon om struktur, ikke om organtype, nivå eller tid.",
    },
    {
      question: "Hva er A-markøren i byråkratioppgaven?",
      options: ["Å vise at avvikene er vedtatt, hvert med begrunnelse i et hensyn modellen ikke veier", "Å vise at avvikene har oppstått gradvis over tid, uten at noen har besluttet noe av det", "Å vise at idealtypen er for gammel til å fange dagens forvaltning, og derfor bør byttes ut", "Å gjengi alle seks kjennetegnene med hvert sitt norske eksempel"],
      explanation: "Fristillingen ble innført for å gi armlengdes avstand, mål- og resultatstyringen fordi en utskilt enhet ikke lar seg instruere sak for sak. At avvikene er valg og ikke forfall, flytter svaret fra beskrivelse til analyse.",
    },
    {
      question: "Hva skiller B-besvarelsen i dette kapitlet fra C-besvarelsen?",
      options: ["At den ser et mønster i dommene sine, ikke at den kan mer eller skriver bedre", "At den er skrevet i et mer presist og akademisk språk hele veien gjennom besvarelsen", "At den bruker flere navngitte norske eksempler i vurderingsdelen enn C-besvarelsen gjør", "At den gjengir modellen mer utfyllende før anvendelsen begynner"],
      explanation: "B-versjonen er skrevet upolert, med «jeg vil si at», og har omtrent samme empiri som C. Den ene forskjellen er at den ser sammenhengen mellom funnene sine — og det er verdt et helt nivå.",
    },
    {
      question: "Hva gjenstår mot A i B-besvarelsen?",
      options: ["Å bruke mønsteret som disposisjon, forklare avvikene som vedtak, og la empirien bære noe", "Å skrive i et mer formelt språk og unngå uttrykk som «jeg vil si at» og «det skurrer»", "Å ta med flere av idealtypens kjennetegn i redegjørelsesdelen", "Å konkludere tydeligere om hvorvidt avvikene er ønskelige eller ikke"],
      explanation: "Mønsteret er funnet, men brukt som ettertanke i siste avsnitt i stedet for å styre teksten. Språket er ikke det som løfter en besvarelse i dette emnet, alle kjennetegnene er allerede med, og verdispørsmålet skal nettopp ikke avgjøres.",
    },
    {
      question: "Hva er den spesielle fellen i anvendelsesoppgaver, slik E-besvarelsen i oppgave 1 viser?",
      options: ["Å beskrive modellen og virkeligheten hver for seg uten å måle den ene mot den andre", "Å bruke for lite plass på modellen, slik at leseren ikke forstår hva som måles mot hva", "Å kritisere modellens svakheter i stedet for å anvende den på de norske forholdene oppgaven gjelder", "Å anvende modellen på et annet land enn det oppgaven gjelder"],
      explanation: "E-versjonen har to korrekte halvdeler og tror den er ferdig. Å beskrive begge sider er ikke å anvende den ene på den andre, og «på mange måter» er ikke et svar på spørsmålet «i hvilken grad».",
    },
    {
      question: "Hvorfor endrer relativ måling drøftingen av universelle mot behovsprøvde ordninger?",
      options: ["Fordi en universell ytelse hever både inntekten under grensen og medianen som grensen måles mot", "Fordi relativ måling bare fanger opp dem som har ligget under lavinntektsgrensen i flere år", "Fordi behovsprøvde ytelser er unntatt fra beregningen av lavinntekt", "Fordi universelle ytelser ikke regnes som inntekt i statistikken"],
      explanation: "Skal måltallet ned, må inntekten under grensen løftes mer enn medianen løftes. Behovsprøvde overføringer treffer derfor bedre på nettopp denne indikatoren — et faglig og ikke et politisk poeng.",
    },
    {
      question: "Hva er motstykket til det argumentet, i A-besvarelsen av velferdsoppgaven?",
      options: ["At universelle tjenester ikke senker måltallet, men reduserer det måltallet er ment å fange", "At behovsprøvde ytelser er vesentlig dyrere å administrere enn universelle", "At relativ fattigdom er en dårligere indikator enn absolutt fattigdom", "At universelle ordninger uansett når flere fordi terskelen er lavere"],
      explanation: "Barnehage, skole og helsetjenester tilgjengelig uavhengig av inntekt senker ikke inntektsmåltallet, men reduserer at lav inntekt slår ut i dårligere liv og går i arv. De to formene svarer altså ikke på samme spørsmål.",
    },
    {
      question: "Hva er den vanligste grunnen til at en godt skrevet velferdsbesvarelse stopper på C?",
      options: ["At den drøfter en generell versjon av oppgaven i stedet for den som ble stilt", "At den forveksler de-kommodifisering med de-familisering flere steder i redegjørelsen", "At den mangler en av Esping-Andersens tre velferdsregimer", "At den lander betinget i stedet for å ta et klart og entydig standpunkt i verdispørsmålet"],
      explanation: "C-versjonen nevner vedvarende lavinntekt i første setning og bruker det aldri. Betinget landing er riktig form i et verdispørsmål, og regimene hører til redegjørelsen, ikke til drøftingsleddet.",
    },
    {
      question: "Hvordan skiller tidsdimensjonen argumentene i velferdsoppgaven?",
      options: ["Behovsprøving er mest treffsikker på kort sikt og mest utsatt på lengre sikt", "Universalisme er mest treffsikker på kort sikt og mest utsatt på lang sikt", "Begge former blir mindre treffsikre jo lenger de har vart", "Tidsperspektivet påvirker administrasjonskostnaden, ikke treffsikkerheten"],
      explanation: "Ordninger som bare angår de fattigste, har smalere politisk oppslutning og er lettere å svekke over tid, mens ordninger mange har egeninteresse i, står støere. Å nyansere sitt eget resonnement slik er et selvstendighetsgrep.",
    },
    {
      question: "Hvilke tre betydninger av «svekkes» skiller A-besvarelsen i styringskjedeoppgaven mellom?",
      options: ["Kanalskifte, reell svekkelse og brudd", "Delegasjon, kontroll og ansvar", "Formell svekkelse, reell svekkelse og symbolsk svekkelse", "Svekkelse i første, andre og tredje ledd av styringskjeden"],
      explanation: "Kanalskifte er at styringen skjer på en annen måte mens fullmakt og ansvar følger hverandre; reell svekkelse er at de skiller lag; brudd er at et ledd faller bort. Graderingen gjør dommen presis i stedet for omtrentlig.",
    },
    {
      question: "Hva skjer med styringskjeden ved mindretallsregjering, ifølge A-besvarelsen?",
      options: ["Vedtakspunktet forskyves til et forhandlingsrom, mens ingen ledd forsvinner", "Leddet mellom Storting og regjering faller i praksis bort", "Ministeransvaret opphører for de sakene som er forhandlet fram", "Delegasjonen snur retning, slik at Stortinget styrer forvaltningen direkte utenom regjeringen"],
      explanation: "Regjeringen utgår fortsatt av Stortinget, ministeransvaret består, og velgerne holder fortsatt Stortinget ansvarlig. Kjeden er intakt, men et av leddene har fått et forrom der den reelle beslutningen tas.",
    },
    {
      question: "Hva er motforestillingen som redder påstanden om mindretallsregjering fra å bli et ja eller nei?",
      options: ["At kontraktsparlamentarisme kan gi et stabilt og forutsigbart styringsgrunnlag", "At mindretallsregjeringer sjelden sitter en hel periode i Norge", "At Stortinget kan oppløses dersom situasjonen blir uholdbar", "At regjeringen uansett kan styre gjennom forskrifter uten å gå veien om Stortinget"],
      explanation: "Skriftlige avtaler med støttepartier kan gi et grunnlag som i noen tilfeller er mer forutsigbart enn i en flertallsregjering med intern uenighet. Stortinget kan ikke oppløses, og forskriftsmyndighet forutsetter lovhjemmel.",
    },
    {
      question: "Hvorfor er mindretallsregjering en normal styreform i Norge?",
      options: ["Valgordningen kombinert med negativ parlamentarisme og manglende oppløsningsrett", "Fordi Grunnloven krever at regjeringen har støtte fra flere partier", "Fordi partiene tradisjonelt har unngått formelle koalisjoner", "Fordi Stortinget velger regjeringen ved simpelt flertall ved starten av hver periode"],
      explanation: "Negativ parlamentarisme betyr at det holder å unngå et flertall imot, og manglende oppløsningsrett fjerner trusselen om nyvalg. En kjede som svekkes av sin egen normaltilstand, er dårlig beskrevet.",
    },
    {
      question: "Hvorfor kan redegjørelsen i styringskjedeoppgaven fylle rundt halvparten?",
      options: ["Fordi kjeden har fire ledd med to former hver, og faktadelen derfor er strukturelt stor", "Fordi påstandsdrøfting krever mindre plass enn vanlige drøftingsledd", "Fordi styringskjeden er et lavfrekvent tema som ikke krever noen fullt utbygd drøftingsdel", "Fordi det ikke finnes noen regel om forholdet mellom delene i emnet"],
      explanation: "Tommelfingerregelen om to tredeler drøfting, gjengitt i H2025-veiledningen fra forelesning, har et uttrykkelig unntak der redegjørelsen selv krever mye plass. Å komprimere kjeden ville kostet Akse 2 for å vinne Akse 1.",
    },
    {
      question: "Hva er fellesnevneren i landingsformen i alle tre oppgavene?",
      options: ["Det faglige leddet landes skarpt, verdileddet betinget, og teksten sier at den gjør det", "Alle tre lander betinget, siden faget sjelden gir entydige svar", "Alle tre lander skarpt, siden forbehold svekker en konklusjon", "Landingsformen følger sjangeren: skarpt i påstandsdrøfting og betinget i alle andre former"],
      explanation: "Landingsformen følger spørsmålets art, ikke sjangeren. Den vanligste feilen er ikke skråsikkerhet, men å lande betinget på et faglig ledd og dermed unnlate å svare på det oppgaven spurte om.",
    },
    {
      question: "Hva bør du se etter når du leser en modellbesvarelse?",
      options: ["Bevegelser: hvor mange avveininger, variabler og bærende eksempler teksten har", "Formuleringer du kan lære deg utenat og gjenbruke direkte på eksamen uten endringer", "Antall fagbegreper og pensumbidrag som er navngitt", "Hvor lang redegjørelsesdelen er i forhold til drøftingsdelen"],
      explanation: "Det er bevegelsene som skiller nivåene, ikke antall begreper. Innlærte formuleringer er farlige fordi oppgavene gjentas på familienivå og ikke ordrett, og lengdeforholdet varierer med oppgavetypen.",
    },
    {
      question: "Hva er bevegelsen som løfter fra C til B, slik kapitlet beskriver nivåstigen?",
      options: ["Å finne mønsteret som binder funnene sammen i stedet for å la dem ligge ved siden av hverandre", "Å legge til flere navngitte norske eksempler i drøftingsdelen", "Å sette to hensyn opp mot hverandre for første gang i besvarelsen", "Å forklare hvorfor mønsteret er slik det er, med en egen årsak for hvert enkelt av avvikene i teksten"],
      explanation: "Avveiningen løfter fra E til C, og forklaringen av mønsteret løfter videre fra B til A. Steget til B er observasjonen selv: at funnene henger sammen på en bestemt måte.",
    },
  ],
  'stv1400-9-6': [
    {
      question: "Hvordan er de fire timene fordelt i modellen boka bruker?",
      options: ["Cirka 15 minutter til settlesing og valg, cirka 210 til de to besvarelsene, cirka 15 til sluttkontroll", "Cirka 30 minutter til settlesing og valg, cirka 180 til to besvarelser, cirka 30 til sluttkontroll", "Cirka 15 minutter til settlesing, cirka 225 til to besvarelser, ingen egen sluttkontroll", "Cirka 20 minutter til hver av de tre oppgavene, resten til den du velger bort"],
      explanation: "To blokker på 105 minutter gir 210, og de resterende 30 ligger i settlesing med valg foran og felles gjennomlesing bak. Den tredje oppgaven skal ikke ha tid i det hele tatt.",
    },
    {
      question: "Hva skal styre valget mellom de tre alternativene?",
      options: ["Om du kan navngi to hensyn som trekker i hver sin retning i oppgaven", "Hvilke to temaer du har lest mest om i pensumlitteraturen, målt i antall sider", "Hvilke to oppgaver som har den korteste og mest oversiktlige oppgaveteksten", "Hvilke to oppgaver som ligger nærmest hverandre i tema"],
      explanation: "Kunnskap uten drøfting stopper på D uansett mengde, mens en oppgave du kan litt mindre om, men har en reell avveining til, kan bære en C eller bedre. Testen tar to minutter per alternativ.",
    },
    {
      question: "Hva innebærer strykregelen i dette emnet?",
      options: ["Stryk på én av de to valgte oppgavene gir stryk på hele eksamen samlet", "Stryk på én oppgave trekker karakteren ned med ett nivå samlet sett", "Karakteren settes på gjennomsnittet av de to besvarelsene", "Den beste av de to besvarelsene teller hvis den andre stryker"],
      explanation: "En strålende besvarelse kan ikke redde en som ligger under minstekravet. Det er derfor minutter flyttet til den svakeste besvarelsen er verdt mer enn minutter lagt til den sterke.",
    },
    {
      question: "Hva sier nivåregelen om sammensetningen av oppgavesettet?",
      options: ["Minst ett alternativ er forankret kommunalt eller regionalt og minst ett i statsforvaltningen", "Minst ett alternativ er en påstandsdrøfting og minst ett er en komparativ redegjørelse av to begreper", "Minst to av de tre alternativene er hentet fra de temaene som har gått igjen oftest i tidligere sett", "Minst ett alternativ gjentar en oppgave fra de siste tre terminene"],
      explanation: "Mønsteret gjelder i alle 6 terminene i dagens format og er korpusets mest robuste strukturregel. Behersker du bare det ene forvaltningsnivået, risikerer du å stå igjen med ett brukbart alternativ av tre.",
    },
    {
      question: "Hva viser funnet om utsatt eksamen i arkivet?",
      options: ["Det utsatte settet gjenbrukte i stor grad oppgaver fra året før, ikke fra årets ordinære", "Det utsatte settet var en lett omskrevet variant av det ordinære fra samme termin", "Det utsatte settet hadde færre oppgavealternativer enn det ordinære", "Det utsatte settet brukte samme oppgaver i en annen rekkefølge"],
      explanation: "H2017 og H2018 utsatt eksamen deler fire av åtte oppgaveplasser ordrett, mens H2018 ordinær og H2018 utsatt eksamen deler ingen. Funnet hviler på ett tilfelle, siden H2018 er den eneste terminen med begge.",
    },
    {
      question: "Hvilket forbehold skal alltid følge funnet om utsatt eksamen?",
      options: ["At det hviler på ett tilfelle, siden H2018 er eneste termin med både ordinær og utsatt eksamen", "At det bare gjelder de terminene som ble avholdt som hjemmeeksamen", "At det bygger på sensorveiledningene og ikke på selve oppgavesettene", "At det gjaldt før valgregelen ble innført og derfor er utdatert"],
      explanation: "Funnet er godt dokumentert i det ene tilfellet, men et enkelttilfelle kan ikke bære en generell regel om hvordan UiO bygger sett. Det skal formuleres som «i det ene tilfellet arkivet dokumenterer».",
    },
    {
      question: "Hva sier rotasjonsmønsteret i arkivet?",
      options: ["Temaene ser ut til å gå igjen med tre til fire års mellomrom", "Temaene gjentas systematisk annethvert år", "Ingen temaer har vært oppe mer enn én gang i dagens format", "De samme tre temaene kommer igjen hver termin i ulik rekkefølge"],
      explanation: "H2020 og H2024 deler to av tre temaer, og H2022 og H2025 deler to av tre. Ingen tema har opptrådt i mer enn 4 av 6 terminer i dagens format, så mønsteret kan brukes til å velge repetisjonsrekkefølge, ikke til å velge bort temaer.",
    },
    {
      question: "Hva skal du måle i selvdiagnosen etter en øving?",
      options: ["Hva du faktisk kom på under skrivingen, ikke hva du kjenner igjen i fasiten", "Hvor mange av momentlistens punkter du kunne ha skrevet hvis du hadde hatt mer tid", "Hvor mange fagbegreper du fikk med sammenlignet med momentlisten", "Hvor lang besvarelsen din ble sammenlignet med anslaget på 2000 ord"],
      explanation: "Forskjellen mellom å kunne noe og å hente det fram under press er nettopp den ferdigheten eksamen måler. Momentlistene er dessuten ikke uttømmende — en besvarelse kan inneholde gode poenger som ikke står der.",
    },
    {
      question: "Hva er minimumsrådet for skriveøving?",
      options: ["Skriv minst én full besvarelse på tid, fra avklaring til landing, uten oppslag", "Skriv fullstendige disposisjoner til samtlige seks oppgaver i de to øvingssettene", "Skriv drøftingsdelen til minst tre oppgaver fra ulike temaakser", "Les modellbesvarelsene høyt slik at formuleringene fester seg"],
      explanation: "Fire timers skriving er også en fysisk ferdighet, og tempoet og strukturen glipper i time tre for den som aldri har prøvd. Å lese modellbesvarelser er en legitim rute, men den erstatter ikke den ene gjennomkjøringen.",
    },
    {
      question: "Hva er A-markøren i oppgaven om statens økonomiske virkemidler og ressursbruk?",
      options: ["Å bruke Oates' desentraliseringsteorem begge veier, med forutsetningene skrevet ut", "Å slå fast at desentralisering alltid gir den beste bruken av fellesskapets ressurser", "Å beskrive inntektssystemets to komponenter grundig", "Å drøfte hva styringen betyr for det lokale demokratiet"],
      explanation: "Teoremet sier at lokale goder styres best lokalt når preferansene varierer og det ikke er eksterne virkninger eller stordriftsfordeler — der forutsetningene ikke holder, taler det samme resonnementet for sentralisering. Lokaldemokrati er den andre drøftingsvinkelen i familien og hører ikke hjemme her.",
    },
    {
      question: "Hva er A-markøren i oppgaven om hvor styringskjeden er svakest?",
      options: ["Å skille innebygd svakhet øverst fra svekkelse som er oppstått eller vedtatt lenger nede i kjeden", "Å vise at alle fire leddene i kjeden er omtrent like svake når man måler dem systematisk", "Å vise at fristillingen har svekket det nederste leddet mest av alle", "Å gjengi kjedens fire ledd med delegasjonsform og kontrollform"],
      explanation: "Ledd 1 er svakest fordi representativt demokrati forutsetter grov delegasjon og sjelden kontroll — det er systemets pris, ikke en svikt. De andre leddenes svakheter kunne vært annerledes, og skillet svarer på påstanden og forklarer hvorfor den er kontraintuitiv.",
    },
    {
      question: "Hva krever anvendelsessjangeren i oppgaven om EØS og demokrati?",
      options: ["At demokratiperspektivet brukes som linjal, med korte gjengivelser og mange dommer", "At hele avtalens arkitektur gjengis i sin fulle bredde før selve vurderingen begynner", "At kandidaten tar stilling til om Norge bør si opp avtalen", "At vurderingen samles i én dom om avtalen er demokratisk eller ikke"],
      explanation: "Modellen er verktøyet, og det som måles, er empirien: hvem utformer regelen, hvem vedtar den, hvem kan holdes ansvarlig. En samlet dom uten mønster er ikke en gradsangivelse, og spørsmålet om oppsigelse er ikke det oppgaven stiller.",
    },
  ],
};

export default quizData_stv1400;
